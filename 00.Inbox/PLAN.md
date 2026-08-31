# MinerU JSON → LaTeX 重建流水线 · 策划案

版本：v1 草案
日期：2026-08-31
样本依据：`MinerU_Riemannian Geometry (do Carmo)` 的 `middle.json`（两份独立解析 + 一份 merged，共约 315 页规模）

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

### 1.3 块 / 行 / span 三层

```
para_blocks[]           block: type, bbox, lines[]
  └─ lines[]            line:  bbox, spans[]
       └─ spans[]       span:  type, content/latex, bbox, [cross_page]
```

已确认的 span 语义：

| span.type | 载荷字段 | 处理方式 |
|---|---|---|
| `text` | `content` | 文本，需清理连字符换行 |
| `inline_equation` | `latex`（或 content 内含 latex） | 包成 `$...$` |
| `interline_equation` | `latex` | 包成 `equation` / `align` |
| `image` | 图片路径 | `\includegraphics` |
| `table` | HTML | 表格转换器 |

**最重要的一条**：一个 `type == "text"` 的 block，其 spans 可以是 `text` 和 `inline_equation` **混排**的。渲染器必须按 span 顺序逐个拼接，不能按 block 类型一刀切取文本。这是最容易踩的坑。

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
  ├─ [S1] MinerU 分片解析 ────────→ raw/mineru/part_*.json
  │
  ├─ [S2] 分片合并 + 页码重排 ────→ raw/merged.json
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

### S1 · MinerU 分片解析

**为什么要分片**：12GB 显存 + 16GB 内存，整本 300+ 页一次跑容易 OOM；且失败后无法断点续跑。

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
└─ manifest.json     记录每片的真实起止页、MinerU 版本、backend、耗时
```

`manifest.json` 必须记录 `_backend` / `_version_name`，因为不同片若用了不同后端，span 结构可能不一致，必须能事后发现。

### S2 · 分片合并

已在探索阶段验证过的逻辑，直接沉淀为正式模块：

1. 校验各片 `_backend` / `_version_name` 一致，不一致则报警并中止（不要静默合并）
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
list     footnote   caption   theorem  reference
```

### S4 · 结构重建（确定性，不用 LLM）

能用规则解决的绝不交给模型：

| 任务 | 规则 |
|---|---|
| 跨页段落合并 | 依 `cross_page` / `continues_from` 链式合并 `inlines` |
| 连字符修复 | 行尾 `-` + 下行小写开头 → 拼接并删 `-` |
| 章节层级 | 依 MinerU 的 heading level + 编号模式（`3.1` → subsection） |
| 公式编号提取 | 匹配行尾 `(3.14)` 形态 → 移出正文，转 `\label{eq:3.14}` |
| 图题配对 | caption 块与最近的 figure 块按 bbox 距离配对 |
| 定理环境识别 | 正则匹配段首 `Theorem 3.1.` / `Lemma` / `Proof.` → 转环境 |

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

**图片**：从 MinerU 输出目录复制到 `assets/`，用稳定 ID 命名。原图不做任何 AI 重绘。

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
   ├─ raw/ ir/ tex/ out/ qa/
```

---

## 5. 实施顺序

分四个里程碑，每个都可独立验证，不做一次性大爆炸。

### M1 · 打通最小闭环（先做这个）

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
| span 混排处理错误导致公式/文字错位 | 高 | M1 就专项验证，做 inlines 单元测试 |
| MinerU 版本升级改字段 | 中 | 全部耦合收敛在 `adapter.py` |
| 单个坏公式炸掉全书编译 | 中 | 公式独立试编译 + 降级 `\verb` |
| 复杂表格（合并单元格 + 内嵌公式） | 中 | 先降级为图片引用，标 needs_review，后续再攻 |
| 悄悄丢段落且无人发现 | **高** | L6 文本覆盖率作为硬闸门 |
| 双栏页阅读顺序错乱 | 中 | 信任 MinerU 的 para_blocks 顺序，L7 视觉抽查兜底 |
| LLM 修复时篡改公式 | 中 | prompt 硬约束 + 修复后 diff 校验 math inline 未变 |
| 16GB 内存加载 24MB+ JSON | 低 | 流式处理，按页 yield，不整体驻留 |

---

## 7. 立即可做的第一步

`test/` 下已有真实 MinerU 输出（两份独立解析 + 一份 merged）。M1 不需要重跑 MinerU，直接拿现成 JSON 开工：

1. 从 merged.json 抽 10 页公式密集样本存为 fixture
2. 写 `ir.py` + `adapter.py`，重点处理 inlines 混排
3. 写 `render/inline.py` + `render/equation.py` + 最小 `document.py`
4. 编译，看结果

这一步能在最短时间内暴露最核心的技术风险。
