# MinerU JSON → LaTeX 重建流水线 · 策划案

版本：v2 草案
日期：2026-08-31
样本依据：`MinerU_Riemannian Geometry (do Carmo)` 的 `middle.json`（两份独立解析 + 一份 merged = 315 页）
实测元数据：`_backend: hybrid` / `_version_name: 3.4.4` / `_ocr_enable: true` / `_effort: medium`（**API 产出**）

---

## 0. 目标与非目标

### 目标

把扫描版数学书的 MinerU 解析结果，转换成**可编译、可编辑、结构正确**的 LaTeX 工程。

验收标准（按优先级）：

1. **内容不丢**：正文文字覆盖率 ≥ 99%，无整段/整页丢失
2. **顺序正确**：阅读顺序与原书一致，跨页段落正确接合
3. **公式可编译**：行间/行内公式 100% 通过 XeLaTeX 编译，语义抽查准确率 ≥ 95%
4. **结构可用**：章节层级、定理环境、图表编号可导航
5. **图片保真**：原图裁剪无损引用，图题与图片正确配对

### 非目标（明确放弃）

- 逐像素复刻原书页面
- 复原原书字体、字距、行距、分页位置
- 复原扫描图中的矢量图（保持位图引用即可）
- 一次性支持全部 LaTeX 环境

**核心取舍**：本方案换取的是「语义与结构高保真 + 完全可编辑」，代价是「页面几何不再等同原书」。若需后者，应走 PDF patch 路线，不属本方案。

---

## 1. MinerU 真实 schema（已核实，不是猜测）

### 1.1 顶层

```json
{
  "pdf_info": [ /* 每页一个对象 */ ],
  "_backend": "...",
  "_effort": "...",
  "_ocr_enable": true,
  "_version_name": "..."
}
```

`pdf_info` 是唯一有序主体。`page_idx` 是**全局唯一且唯一真正的全局字段**——分片合并时只需重排它。

### 1.2 页对象

```json
{
  "page_idx": 12,
  "page_size": [w, h],
  "para_blocks": [ /* 正文主体，已排好阅读顺序 */ ],
  "preproc_blocks": [ /* 预处理块，通常不直接用 */ ],
  "discarded_blocks": [ /* 页眉页脚页码，已被丢弃 */ ]
}
```

**关键决策**：渲染器只消费 `para_blocks`。`discarded_blocks` 不参与正文，但**必须留档**用于 QA 时反查「是否误丢了正文」。

### 1.3 块 / 行 / span 三层（+ 嵌套子块）

```
para_blocks[]           block: type, bbox, lines[] | blocks[]
  ├─ blocks[]           嵌套子块（仅 image/table/chart 类），子块自己带 lines[]
  └─ lines[]            line:  bbox, spans[]
       └─ spans[]       span:  type, content/latex/html/image_path, bbox, [cross_page]
```

**para_blocks 实测分布（315 页）**：

```
text 2207 | interline_equation 875 | title 89 | ref_text 72
image 51  | table 1 | chart 1
```

**嵌套子块实测**：`image_body 51`、`image_caption 57`、`table_body 1`、`chart_body 1`

**span 实测分布**：

```
text 9981 | inline_equation 7628 | interline_equation 875 | image 51 | table 1 | chart 1
```

已确认的 span 语义：

| span.type | 载荷字段 | 处理方式 |
|---|---|---|
| `text` | `content` | 文本，需清理连字符换行 |
| `inline_equation` | `content`（LaTeX 串） | 包成 `$...$` |
| `interline_equation` | `content`（LaTeX 串） | 包成 `equation` / `align` |
| `image` | `image_path` | `\includegraphics` |
| `table` | `html` + `image_path` | 表格转换器，失败可降级为图片 |

**坑 1（最核心）**：一个 `type == "text"` 的 block，其 spans 可以是 `text` 和 `inline_equation` **混排**的。全书 7628 个 inline_equation 大多藏在正文 block 里。渲染器必须按 span 顺序逐个拼接，不能按 block 类型一刀切取文本。

**坑 2（v1 遗漏）**：`image` / `table` / `chart` 类 block **没有自己的 lines**，内容在 `blocks[]` 子数组里，形如 `image_body` + `image_caption`。遍历器必须递归下一层，否则 51 张图和全部图题会被静默丢弃。图题配对**不需要**按 bbox 距离猜——MinerU 已经把 caption 放进同一个父块，直接读即可（实测 51 个图块中 51 个带 caption，仅 2 个 figure-ish 块无 caption）。

**坑 3**：存在 `ref_text` 类型，是**定理/引理的正文陈述**（实测样本：`1. (Klingenberg's Lemma). Let M be a complete Riemannian manifold...`），不是参考文献。不要按字面当 bibliography 处理。

### 1.4 `cross_page` 标记

span 上可能出现 `"cross_page": true`，表示该 span 属于上一页未完的段落。这是 MinerU 自己给出的跨页信号，**优先信任它**，只在缺失时才用启发式补判。

启发式补判规则（已验证可用）：

```
上页末 span 文本不以句末标点结尾（. ! ? : ; ) ] " ' ” ’）
AND 下页首 span 文本不以大写字母/数字开头
→ 判为同一段落续接
```

---

## 2. 总体架构

```
扫描 PDF
  │
  ├─ [S0] 解析方式选型：本地部署 / API
  │
  ├─ [S1] MinerU 分片解析 ────────→ raw/mineru/part_*.json
  │
  ├─ [S2] 分片合并 + 页码重排 ────→ raw/merged.json
  │
  ├─ [S0.5] 资产落地（API 路线）──→ work/assets/ + mapping.json
  │
  ├─ [S3] Adapter：schema → IR ──→ ir/document.json
  │
  ├─ [S4] 结构重建（确定性）─────→ ir/document.structured.json
  │
  ├─ [S5] LLM 修复（可选，逐块）──→ ir/document.repaired.json
  │
  ├─ [S6] IR → LaTeX 渲染 ───────→ tex/main.tex + tex/chunks/*.tex
  │
  ├─ [S7] XeLaTeX 编译 ──────────→ out/book.pdf
  │
  └─ [S8] QA 校验 ───────────────→ qa/report.json
```

**分层铁律**：S3 之后的所有阶段都不再接触 MinerU 原始字段。MinerU 换版本只需改 S3 一个文件。

---

## 3. 各阶段设计

### S0 · 解析方式选型：本地部署 vs API

MinerU 两条路都能出同构的 `middle.json`，但对本方案的影响不同。

| 维度 | 本地部署 | API |
|---|---|---|
| 图片资产 | 落到本地 `images/` 目录，路径是相对文件名 | **指向 CDN 的 http URL** |
| 资产时效 | 永久 | **CDN 链接可能过期，必须尽早抓取** |
| 显存/内存 | 12GB 显存跑 vlm 后端偏紧，pipeline 后端可行 | 不占本地资源 |
| 分片必要性 | **必要**，防 OOM + 断点续跑 | 受配额/单文件上限约束，仍需分片 |
| backend | 自选 pipeline / vlm | 由服务端定（实测 `hybrid`） |
| 版本一致性 | 自己钉死 | **服务端可能升级，字段可能变** |
| 隐私 | 文件不出本机 | 文件上传第三方 |
| 成本 | 电费 + 折腾时间 | 配额 / 计费 |

**当前样本是 API 产出**（`hybrid` / `3.4.4` / 928 个 CDN 图片链接）。

**决策**：两条路都支持，但 IR 层必须屏蔽差异——`adapter.py` 输出的 IR 里，图片一律是**本地相对路径**，远端 URL 在 S3 之前就落地完毕。

### S0.5 · 资产落地（API 路线专属，优先级最高）

**这是 API 路线的头号风险**：928 个图片资源全在 `cdn-mineru.openxlab.org.cn`，本地一张都没有。CDN 链接通常有有效期，一旦过期，这份 JSON 的图片部分就废了，只能重跑解析。

对策，**在做任何其他事之前先执行**：

```
fetch_assets.py merged.json --out work/assets/
  1. 扫出全部 image_path 中的 http(s) URL（含嵌套子块）
  2. 按 URL 的 sha256 或原文件名去重下载
  3. 存为 assets/<hash>.jpg，并写 assets/mapping.json：URL → 本地文件名
  4. 失败重试 3 次，最终失败清单单独输出，不静默跳过
  5. 校验：下载数 == 去重后 URL 数，且每个文件非空、可被 PIL 打开
```

之后 `adapter.py` 查 `mapping.json` 把 URL 换成本地路径。**S0.5 未完成前不进入 M1 之后的任何阶段。**

### S1 · MinerU 分片解析

**为什么要分片**：本地路线是 12GB 显存 + 16GB 内存扛不住整本 300+ 页，且失败无法续跑；API 路线是受单文件大小/页数配额限制。

分片策略：

```
按 40 页一片，相邻片重叠 1 页
part_001: 页 1–40
part_002: 页 40–79   (页 40 重叠)
part_003: 页 79–118
```

重叠页只用于 S2 校验接缝，**不进入最终文档**。

产物约定：

```
raw/mineru/
├─ part_001.json
├─ part_002.json
└─ manifest.json     记录每片的真实起止页、MinerU 版本、backend、来源（local/api）、耗时
```

`manifest.json` 必须记录 `_backend` / `_version_name` / 来源。不同片若用了不同后端或跨越了服务端版本升级，span 结构可能不一致，必须能事后发现。

### S2 · 分片合并

已在探索阶段验证过的逻辑，直接沉淀为正式模块：

1. 校验各片 `_backend` / `_version_name` / 来源一致，不一致则报警并中止（不要静默合并）
2. 用**页内容指纹**（para_blocks 的文本级指纹，不用整块 JSON 序列化）检测重叠页
3. 丢弃后片的重复页
4. `page_idx` 全局重排为 `0..N-1`
5. 接缝处按 §1.4 规则补 `cross_page` 标记
6. 输出合并报告：总页数、丢弃页、接缝判定结果

**修正上次探索的缺陷**：指纹不应用 `json.dumps(para_blocks)[:2000]`——同一页两次解析的 bbox 浮点值可能有微小差异，导致指纹不等而漏判重复。改用**归一化文本指纹**：

```
提取该页所有 span 的 content/latex → 去空格 → 取前 N 个词 → hash
```

### S3 · Adapter：MinerU schema → IR

唯一与 MinerU 耦合的模块。逐 block 逐 span 展开，产出扁平块序列。

IR 单块定义：

```json
{
  "id": "p0021-b0002",
  "page": 21,
  "order": 137,
  "kind": "paragraph",
  "bbox": [120, 170, 920, 450],

  "inlines": [
    { "t": "text", "v": "Let " },
    { "t": "math", "v": "M" },
    { "t": "text", "v": " be a Riemannian manifold." }
  ],

  "raw_text": "Let $M$ be a Riemannian manifold.",
  "continues_from": "p0020-b0009",
  "continues_to": null,
  "confidence": 0.97,
  "needs_review": false,
  "provenance": { "src": "merged.json", "page_idx": 21, "block": 2 }
}
```

设计要点：

- **`inlines` 数组是核心**：直接对应 §1.3 的混排问题，保住 text/inline_equation 的原始交错顺序
- **`raw_text` 永不覆盖**：LLM 修复写入 `text` 字段，原始 OCR 永久保留，可回溯、可重跑
- **`provenance` 必填**：任何一个 LaTeX 字符都能追溯到 MinerU 的哪一页哪一块
- **`id` 用页号+块号**：全局稳定，重跑不变，便于 diff

IR 块类型（第一版只支持这些）：

```
heading  paragraph  equation  figure  table
list     footnote   caption   theorem  chart
```

MinerU 原始类型 → IR kind 映射（依实测分布）：

| MinerU type | IR kind | 备注 |
|---|---|---|
| `title` | `heading` | 层级由编号模式推断 |
| `text` | `paragraph` | spans 混排，走 inlines |
| `interline_equation` | `equation` | 875 个，量大，是第二主力 |
| `ref_text` | `theorem` | **不是参考文献**，是定理陈述 |
| `image` + 子块 | `figure` | caption 从 `image_caption` 子块直接取 |
| `table` + 子块 | `table` | html 优先，失败降级图片 |
| `chart` + 子块 | `chart` | 样本仅 1 个，先按 figure 处理 |

### S4 · 结构重建（确定性，不用 LLM）

能用规则解决的绝不交给模型：

| 任务 | 规则 |
|---|---|
| 跨页段落合并 | 依 `cross_page` / `continues_from` 链式合并 `inlines` |
| 连字符修复 | 行尾 `-` + 下行小写开头 → 拼接并删 `-` |
| 章节层级 | 依 MinerU 的 title 块 + 编号模式（`3.1` → subsection） |
| 公式编号提取 | 匹配行尾 `(3.14)` 形态 → 移出正文，转 `\label{eq:3.14}` |
| 图题配对 | **直接读 `image_caption` 子块**，无需 bbox 距离猜测 |
| 定理环境识别 | `ref_text` 块 + 正则匹配 `(Klingenberg's Lemma).` / `Theorem 3.1.` / `Proof.` |

数学书的定理环境识别用正则准确率很高（格式极规整），不值得动模型。

### S5 · LLM 修复（可选，仅逐块）

**只处理 `needs_review == true` 的块**，不整章重写。

送给 LLM 的输入：单块 IR + 前后各一块的上下文。要求输出**同构 JSON**，不是自由文本。

适用场景：

- OCR 明显错字（数学书里 `l` / `1` / `I`、`0` / `O` 混淆高发）
- 章节层级判断不确定
- 术语统一（可选，配合 `glossary.json`）
- 翻译（若需要，写入 `translated_text`，与 `text` 并存）

**硬约束**（写进 prompt）：

- 禁止改动 `math` 类 inline 的内容
- 禁止增删块
- 禁止改 `id` / `order` / `provenance`
- 不确定时置 `needs_review: true` 上报，不要猜

VLM 只在这种情况下介入：某块公式或表格识别失败，此时截取该块 bbox 的页面图像交给 VLM 复核。**不是整本书每页都过 VLM**——这是上一轮讨论已经澄清的：MinerU 内部已经在用 VLM，外部 VLM 只作复核器。

### S6 · IR → LaTeX 渲染

确定性渲染，无模型参与。工程结构：

```
tex/
├─ main.tex          文档类、宏包、字体、目录、\input 各章
├─ preamble.tex      所有宏包与环境定义，独立便于调试
├─ chunks/
│  ├─ ch01.tex       只含内容，不含 \documentclass
│  └─ ch02.tex
└─ assets/
   └─ p0024-img001.png
```

每个 chunk 只是可被 `\input` 的片段。分章依据用 S4 识别出的章节边界，不用固定页数。

必备宏包：

```latex
\usepackage{amsmath, amssymb, amsthm}
\usepackage{graphicx}
\usepackage{booktabs, longtable, tabularx, multirow, makecell}
\usepackage{hyperref}
\usepackage{ctex}          % 若需中文
```

三类内容用专门转换器：

**公式**：保留 MinerU 的 latex 候选，只做分隔符归一化（`\(...\)` → `$...$`）、花括号配平检查、`\label` 注入。**单公式先独立试编译**，失败的降级为 `\verb` 并标记 `needs_review`，不让一个坏公式炸掉全书编译。

**表格**：HTML → LaTeX 需处理 `rowspan` / `colspan` / 单元格内公式 / 超宽 / 跨页。统一生成 `longtable`。宽表加 `\resizebox`。

**图片**：见 §3.0 的资产落地策略。原图不做任何 AI 重绘。

### S7 · 编译

```bash
xelatex -interaction=nonstopmode -halt-on-error=false main.tex
```

跑两遍解决交叉引用。收集日志中的 `Undefined control sequence` / `Overfull \hbox` / `undefined references`。

### S8 · QA 校验

分层校验，每层单独出报告：

```
L1 Schema     IR 通过 JSON Schema 校验，id 唯一，order 连续
L2 完整性     块数 / 图片资源 / 公式数 与 MinerU 原始计数对账
              硬指标：text 2207 / interline_eq 875 / inline_eq 7628 / image 51 / title 89
L3 语法       括号配平、环境配对、未定义命令扫描
L4 编译       XeLaTeX 退出码、错误分类统计
L5 引用       undefined reference / 重复 label
L6 文本覆盖   输出 PDF 抽取文本 vs raw_text 做字符级覆盖率
L7 视觉       渲染页面截图，抽查溢出/空白/图表错位
```

**L6 是最关键的自动化闸门**：它能自动发现「悄悄丢了一段」这类最危险的错误。目标覆盖率 ≥ 99%，低于阈值直接 fail。

L7 可以接 VLM 做批量视觉体检，也可以先人工抽查 20 页。

---

## 4. 目录结构

```
mineru2tex/
├─ PLAN.md
├─ pyproject.toml
├─ src/mineru2tex/
│  ├─ fetch_assets.py   S0.5 CDN 资产落地（API 路线必跑）
│  ├─ adapter.py        S3  MinerU schema → IR（唯一耦合点）
│  ├─ merge.py          S2  分片合并
│  ├─ structure.py      S4  确定性结构重建
│  ├─ repair.py         S5  LLM 逐块修复
│  ├─ render/
│  │  ├─ document.py       main.tex / preamble 组装
│  │  ├─ inline.py         inlines → LaTeX 文本流
│  │  ├─ equation.py       公式转换 + 试编译
│  │  ├─ table.py          HTML → longtable
│  │  └─ figure.py         图片引用
│  ├─ compile.py        S7  XeLaTeX 驱动
│  ├─ qa/
│  │  ├─ schema.py         L1
│  │  ├─ integrity.py      L2–L3
│  │  ├─ coverage.py       L6 文本覆盖率
│  │  └─ visual.py         L7
│  └─ ir.py             IR 数据类 + JSON Schema
├─ schemas/ir.schema.json
├─ tests/
│  ├─ fixtures/            从 do Carmo 抽的小样本页
│  └─ test_*.py
└─ work/                   运行产物，git 忽略
   ├─ raw/ assets/ ir/ tex/ out/ qa/
```

---

## 5. 实施顺序

分四个里程碑，每个都可独立验证，不做一次性大爆炸。

### M1 · 打通最小闭环（先做这个）

前置：S0.5 资产落地完毕。

范围：只支持 `heading` / `paragraph` / `equation`，10 页样本。

```
merged.json → adapter → IR → render → xelatex → PDF
```

交付：能编译出 10 页 PDF，正文和公式在位。
**验证点**：inlines 混排是否正确（这是全案最核心的技术风险）。

### M2 · 补齐块类型 + 结构重建

加入 `figure` / `table` / `caption` / `footnote` / `list` / `theorem`，跨页合并，公式编号，图题配对。

范围扩到 40 页，覆盖：普通正文、双栏、公式密集、表格、图文混排、跨页段落、脚注。

交付：40 页 PDF + L1–L5 报告。

### M3 · QA 闭环

实现 L6 文本覆盖率、L7 视觉抽查。跑通全书 300+ 页。

交付：覆盖率报告 ≥ 99%，编译零 error。

### M4 · LLM 修复与翻译（按需）

接入逐块修复。若需中译，加 `translated_text` 通道和术语表。

---

## 6. 已识别的风险

| 风险 | 严重度 | 对策 |
|---|---|---|
| **CDN 图片链接过期，928 张图全废** | **最高** | S0.5 立即抓取落地，早于一切其他工作 |
| 嵌套子块未递归导致图和图题静默丢失 | 高 | adapter 递归遍历 + L2 对账图片数 == 51 |
| span 混排处理错误导致公式/文字错位 | 高 | M1 就专项验证，做 inlines 单元测试 |
| MinerU 版本升级改字段 | 中 | 全部耦合收敛在 `adapter.py`；API 路线额外钉住 `_version_name` |
| API 与本地产出结构有别 | 中 | adapter 内分支处理，IR 层统一为本地相对路径 |
| 单个坏公式炸掉全书编译 | 中 | 公式独立试编译 + 降级 `\verb` |
| 复杂表格（合并单元格 + 内嵌公式） | 中 | 先降级为图片引用，标 needs_review，后续再攻 |
| 悄悄丢段落且无人发现 | **高** | L6 文本覆盖率作为硬闸门 |
| 双栏页阅读顺序错乱 | 中 | 信任 MinerU 的 para_blocks 顺序，L7 视觉抽查兜底 |
| LLM 修复时篡改公式 | 中 | prompt 硬约束 + 修复后 diff 校验 math inline 未变 |
| 16GB 内存加载 24MB+ JSON | 低 | 流式处理，按页 yield，不整体驻留 |

---

## 7. 立即可做的第一步

`test/` 下已有真实 MinerU 输出（两份独立解析 + 一份 merged = 315 页）。M1 不需要重跑 MinerU。

**但第 0 件事是抢救图片资产**：

0. **写 `fetch_assets.py`，把 928 个 CDN 链接全部下载到本地**（时效风险，越早越好）
1. 从 merged.json 抽 10 页公式密集样本存为 fixture
2. 写 `ir.py` + `adapter.py`，重点处理 inlines 混排 + 嵌套子块递归
3. 写 `render/inline.py` + `render/equation.py` + 最小 `document.py`
4. 编译，看结果

第 0 步不做，后面全部工作都建立在随时可能失效的外部链接上。
