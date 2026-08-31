# MinerU JSON → LaTeX 重建流水线 · 策划案

版本：v4 草案
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

**坑 3（v1 误判，已纠正）**：本样本的 `ref_text` 共 72 个，实测 **71 个是真的参考文献**（集中在 p306 之后，形如 `[Am 1] AMBROSE, W., Parallel translation..., Ann. of Math. 64 (1956), 337–363.`），仅 1 个是定理。v1 写的“ref_text 是定理陈述”是拿首个样本外推造成的错误；反过来把它全映射成 `bibitem` 也不通用。正式方案只映射为 `reference_candidate`，再由区域 Profile/分类器确认。

**坑 4（关键）**：**MinerU 不标记定理**。它只给排版级类型（text / title / interline_equation），定理与普通段落在它眼里同为 `text`。定理环境必须由我们自己从文本模式识别，见 §4.5。

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
  ├─ [S3.5] 文档 Profile 归纳 ───→ ir/book_profile.json
  │
  ├─ [S4] Profile 驱动结构重建 ──→ ir/document.structured.json
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
  "kind_source": "default",
  "kind_confidence": 0.50,
  "observed_number": null,
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
- **`kind` 先是候选，不是假定真值**：S3 只做 MinerU 类型映射；语义类别由文档 Profile 和受约束分类阶段确认，`kind_source` 记录来源

IR 块类型（第一版只支持这些）：

```
heading  paragraph  equation  figure  table
list     footnote   caption   theorem  proof   bibitem  chart
```

MinerU 原始类型 → IR kind 映射（依实测分布）：

| MinerU type | IR kind | 备注 |
|---|---|---|
| `title` | `heading_candidate` | 通常是标题，但语义层级由 Profile 判定 |
| `text` | `paragraph_candidate` | 默认正文候选；也可能是定理、证明、图题或参考文献，交给 Profile 分类 |
| `interline_equation` | `equation` | 875 个，量大，是第二主力 |
| `ref_text` | `reference_candidate` | MinerU 的排版标签，不等于语义；本样本 71/72 在 p306+ 属参考文献，其他文档必须由 Profile 判定 |
| `image` + 子块 | `figure` | caption 从 `image_caption` 子块直接取 |
| `table` + 子块 | `table` | html 优先，失败降级图片 |
| `chart` + 子块 | `chart` | 样本仅 1 个，先按 figure 处理 |

### S3.5 · 文档 Profile 归纳（每本书/文档执行一次）

这里需要的是一个**独立的逻辑阶段**，不一定是一个独立部署的模型。可以用同一个 LLM/API，但必须使用独立 prompt、独立产物、独立校验和独立权限；也可以对格式规整的文档完全手写 Profile，跳过 LLM。

**Profile 不是“LLM 写出来的一段正则或程序”**，而是对当前文档语法事实的声明。不同书籍可以有完全不同的：

- 定义/定理/命题的叫法和视觉形式
- 编号在前还是关键词在前
- 编号按全书、章、节还是类型分别计数
- 不同语义环境是否共享计数器
- 语义标题与正文是否在同一 block
- 参考文献、脚注、图题和证明的边界

因此，do Carmo 的规律只能成为 do Carmo 的 Profile，不能直接复制给下一本书。相同出版社或同一系列的书可以复用 Profile，但必须重新回放验证。

流程：

```text
确定性侦察器
  → 统计 MinerU block/span 类型、数字 token、关键词、邻接关系、页/块样本
  → 生成分层正例、反例、冲突样本和必要的页面裁剪图

Profile LLM（可选，一次性规划角色）
  → 阅读全局统计 + 分层样本 + 页面图
  → 提出 book_profile.draft.json
  → 同时提出待验证的 numbering_hypotheses，而不是写代码

Profile Validator
  → 检查 JSON schema 和允许的声明式语法
  → 在全书回放候选语法与编号假设
  → 输出命中率、漏检、冲突、反例误命中和计数序列差异
  → 不通过则修订/人工批准，生成 book_profile.json
```

“Profile LLM”是任务角色，不是必须额外安装的模型。真正需要时，它可以与后续的疑难块 LLM 使用同一模型，但不能把未经验证的模型输出直接交给渲染器。

Profile 至少描述：

- 章节层级、编号作用域和章节切换信号
- 定义/定理/命题/引理/例/注/证明等类别的别名
- 语义标题与正文是在同一 block、相邻 block，还是只存在于版面样式中
- 编号、关键词、命名括号、分隔符和正文的相对位置
- 哪些环境属于同一 `counter_group`，计数器何时重置，是否允许跳号/无编号
- 参考文献区域、条目格式、脚注和图表标题信号

示例（声明式 grammar + 编号假设，不是正则代码）：

```json
{
  "semantic_families": {
    "proposition": {
      "aliases": ["proposition", "命题"],
      "header": {
        "tokens": [
          {"kind": "number", "position": "before", "shape": "section_ordinal"},
          {"kind": "keyword", "case": "insensitive"},
          {"kind": "optional_name", "delimiters": ["(", ")"]},
          {"kind": "separator", "values": [".", ":"]}
        ],
        "body_relation": "same_block_or_following_blocks"
      }
    }
  },
  "numbering_hypotheses": [
    {
      "id": "theorem_like_by_section",
      "members": ["definition", "proposition", "theorem", "lemma"],
      "scope": "section",
      "counter_group": "theorem_like",
      "reset_on": "section",
      "printed_number_format": "section.ordinal",
      "allow_gaps": false
    }
  ],
  "evidence": {"positive": ["p0023-b0004"], "negative": ["p0078-b0012"]},
  "confidence": 0.96
}
```

程序只支持有限、可审计的 grammar 原语（number、keyword、optional name、separator、layout relation 等），由 tokenizer/parser 解释这些字段。实现内部可以使用正则，也可以使用 parser combinator；**正则只是编译器的实现细节，不是 Profile 的接口，更不是让 LLM 自由生成的代码**。

无法用声明式 grammar 表达的格式，不强行变成正则，而是交给受约束 LLM 做块级分类，并把分类结果、页面证据和置信度写回 IR/Profile，等待人工批准。

### S3.6 · 计数规则、语法 Profile 与正则的边界

**计数规则不是正则。** 计数规则描述的是全局编号事实：哪些语义块属于同一编号组、编号作用域是全书/章/节/类型、何时重置、是否共享计数器、是否允许跳号，以及如何保留交叉引用。正则最多只能从某个 block 的表面文本中提取“像编号/关键词”的候选。

这里需要一个**独立的文档分析阶段**，但不需要为每本书另装一个 LLM：

- Profile LLM（可选）读取确定性侦察摘要、分层样本和必要的页面图，提出本书的 `book_profile.draft.json`；
- 同一个模型可以兼任后续疑难块分类或翻译，但使用不同 prompt、JSON schema 和权限；
- 结构规整的书也可以由人工填写 Profile，完全跳过 Profile LLM。

Profile LLM **不输出 Python、LaTeX 或自由正则**。它输出声明式事实，例如：

```json
{
  "header": {
    "tokens": [
      {"kind": "number", "position": "before", "shape": "section_ordinal"},
      {"kind": "keyword", "aliases": ["theorem", "定理"], "case": "insensitive"},
      {"kind": "optional_name", "delimiters": ["(", ")"]},
      {"kind": "separator", "values": [".", ":"]}
    ],
    "body_relation": "same_block_or_following_blocks"
  },
  "counter_hypotheses": [
    {
      "members": ["theorem", "lemma", "proposition", "definition"],
      "scope": "section",
      "reset_on": ["section"],
      "sequence": "shared",
      "display_format": "section.ordinal"
    }
  ],
  "evidence": ["p0023-b0004"],
  "confidence": 0.96
}
```

这份 Profile 是**每本书/每个结构区域一份**，不能把 do Carmo 的形式硬编码成全局规则。另一部书可以是“关键词在前 + 编号在后”，也可以没有编号、按章节单独计数，甚至把标题和正文拆成两个 block。

程序只实现有限、可审计的 grammar 原语。它可以把 Profile 编译成 tokenizer/parser；底层实现偶尔使用正则，但正则是编译器内部细节，**不是 Profile 接口，也不是让 LLM 写的一段代码**。无法用 grammar 表达的格式交给受约束 LLM 做块级分类，并保留页面证据和置信度。

`counter_planner` 再对已确认的语义块和 `observed_number` 事件流测试有限候选模型，输出 `counter_plan.json`。LLM 可以提出假设，但不能直接决定计数器或生成 `\\setcounter`。若没有模型能稳定解释全书序列，渲染器采用 `source_number` 模式保留已验证的原书编号，并把异常列入 QA。

### S4 · Profile 驱动结构重建（确定性执行，疑难块可调用 LLM）

LLM 负责提出 Profile、分类疑难块和解释冲突；S4 的批量执行不再自由生成代码或 LaTeX。能由 Profile 和通用解析器确定完成的任务全部确定性执行：

| 任务 | 执行方式 |
|---|---|
| 跨页段落合并 | 依 `cross_page` / `continues_from` 链式合并 `inlines` |
| 连字符修复 | 通用文本规则 + Profile 的语言参数 |
| 章节层级 | 按 Profile 的标题语法和作用域 |
| 公式编号提取 | 通用 tokenizer + Profile 的编号形态 |
| 图题配对 | **直接读 `image_caption` 子块**；其他格式按 Profile 处理 |
| 语义块分类 | Profile parser 先给候选；低置信/冲突块交给受约束 LLM 分类 |
| 计数模型推导 | Profile LLM 只提出候选假设；`counter_planner` 根据已确认语义块和全书观测编号事件流确定性拟合、比较并由 Validator 验证 |
| TeX 计数实现 | **默认 source-number 模式**（打印已验证的原书编号）；只有模型通过全书验证时才启用 `amsthm` 自动计数；不让 LLM 直接写 `\\setcounter` |

这里的 parser/matcher 只负责候选召回和词法解析，不承担全部语义理解。不同书籍只更换 `book_profile.json`，不复制一套新的转换器。

### 4.5 · 定理提取与 TeX 输出格式

#### 本样本的证据（只用于本书 Profile，不外推）

do Carmo 的定理形态是 **编号在前 + 全大写关键词**，与常见的 `Theorem 3.1.` 相反。它只是一份本书 Profile 的观测事实：

```
2.1 DEFINITION. A differentiable manifold of dimension n is a set M and ...
2.7 PROPOSITION. Let $M_1^n$ and $M_2^m$ be differentiable manifolds ...
4.1 EXAMPLE. (The tangent bundle). Let $M^n$ be a differentiable manifold ...
3.6 THEOREM (Levi-Civita). ...
2.10 Theorem. Let $\varphi: M_1^n \to M_2^n$ be ...
```

本书侦察阶段用临时词法探针得到的统计（315 页；探针只用于验证本书 Profile，不是转换器的通用规则）：

```
候选块 258 个，未识别关键词 0 个（只说明该探针对本样本有效）

PROPOSITION 50 | REMARK 49 | DEFINITION 41 | EXAMPLE 38
LEMMA 33 | COROLLARY 25 | THEOREM 22

关键词大小写：ALLCAPS 253 / Title-case 5
带命名（括号）：35 个
Proof 开头块：108 个
```

这些结果只为本书的 `book_profile.json` 提供证据：

1. 本书出现 253 个全大写关键词和 5 个 Title-case 关键词，因此本书 Profile 可以声明关键词大小写不敏感；另一书可以不同
2. 本书的命名括号出现在关键词前后两种位置；另一书可能把名称放在单独标题块、冒号后或根本没有名称
3. 本书的编号、关键词和正文多在同一 `text` block；另一书可能拆成标题块和正文块，需由 Profile 声明
4. “258 个候选”不是“258 个已证明的定理”；最终类别仍要经过 Profile Validator 或受约束 LLM 分类

#### 词法候选与语义判定（v1 踩过的坑）

不能只靠关键词或一条文本模式判断语义。下面这些可以被 tokenizer 识别为引用候选，但均为**正文引用**，不是定理陈述：

```
Proposition 2.5 asserts that if $|v| < \varepsilon_1$, the geodesic ...
Lemma 3.3 implies that, for all $X, Y, W, Z$, ...
Corollary 2.8 shows also that $M - C_m(p)$ is homeomorphic to ...
```

对本书而言，“编号 + 关键词 + 分隔符”是有用的词法线索，能排除许多“关键词 + 编号 + 动词”的正文引用；但它只是本书 Profile 的候选条件。换书时，编号可能在后、分隔符可能不同，甚至标题和正文可能分成多个 block。此时由 Profile LLM/人工声明候选 grammar，无法表达的块交给上下文分类器。

如果实现内部使用正则，它只负责 token 提取和候选召回，不负责判断“这是不是定理”。**LLM 不生成正则；LLM 生成声明式 Profile，程序负责把 Profile 解释并验证。**

#### 环境定义（由批准的 Profile/Counter Plan 生成）

对 do Carmo，当前观测支持“节内连编 + 定义/命题/定理共享序列”这一候选模型。但它必须由 `counter_planner` 在全书上验证，不能因看到 `2.7 PROPOSITION` → `2.8 DEFINITION` → `2.10 Theorem` 几个样本就直接当成真理。验证通过时才生成下列 amsthm 配置：

```latex
\usepackage{amsthm}

% 共享计数器，按节编号 —— 与原书 "2.1 / 2.7 / 2.10" 一致
\newtheorem{thmlike}{Theorem}[section]

\theoremstyle{plain}
\newtheorem{theorem}   [thmlike]{Theorem}
\newtheorem{proposition}[thmlike]{Proposition}
\newtheorem{lemma}    [thmlike]{Lemma}
\newtheorem{corollary}[thmlike]{Corollary}

\theoremstyle{definition}
\newtheorem{definition}[thmlike]{Definition}
\newtheorem{example}  [thmlike]{Example}

\theoremstyle{remark}
\newtheorem{remark}   [thmlike]{Remark}
```

三种 `\theoremstyle` 对应原书的视觉区分：`plain` 斜体正文（定理类）、`definition` 直体（定义与例）、`remark` 直体轻量（注）。

#### 输出格式

在 `amsthm-auto` 模式下，无命名与带命名环境分别是：

```latex
\begin{definition}\label{thm:p0016-b0003}
A differentiable manifold of dimension $n$ is a set $M$ and a family of
injective mappings $x_\alpha$ ...
\end{definition}

\begin{theorem}[Levi-Civita]\label{thm:p0069-b0008}
Given a Riemannian manifold $M$, there exists a unique affine connection
$\nabla$ on $M$ satisfying ...
\end{theorem}
```

在默认 `source-number` 模式下，使用前述 `sourcetheorem` 语义环境，显式传入**经验证的观测编号**，但 label 仍用稳定 block ID。

**证明**：

```latex
\begin{proof}
Let $x: U \to M_1$ and $y: V \to M_2$ be parametrizations at $p$ and
$\varphi(p)$, respectively ...
\end{proof}
```

`amsthm` 的 `proof` 环境自带 QED 方块。实测证明块末尾无 QED 标记（尾部采样均为普通文字），说明原书的 QED 符号未被 OCR 捕获，交给 LaTeX 自动生成即可。

#### 编号一致性：Profile 提假设，程序验证，渲染器执行

原书编号 `2.1` 是 OCR/VLM 读出的**观测值**；自动计数规则是对全书编号结构的一种**模型假设**。二者不能混为一谈，也不能让 LLM 看几页后直接生成 `\\setcounter`。

分两种渲染模式：

| 模式 | 何时使用 | 做法 |
|---|---|---|
| **source-number（默认）** | Profile 尚未验证、存在跳号/重复/漏块风险 | 使用已验证的原书编号作为语义环境参数，同时保留稳定 label 和超链接 |
| **amsthm-auto** | `counter_planner` 在全书上验证通过 | 根据批准的 counter group/scope 生成 `\\newtheorem`，由 LaTeX 规则计数 |

source-number 不是退回普通粗体段落。渲染器提供带显式 source number 的语义环境，例如：

```latex
\begin{sourcetheorem}{theorem}{2.10}{Levi-Civita}%
  \label{thm:p0024-b0007}
  Given a Riemannian manifold $M$, there exists a unique affine connection ...
\end{sourcetheorem}
```

该环境负责印出 `Theorem 2.10 (Levi-Civita).`，并把 `\\ref{thm:p0024-b0007}` 的显示值绑定到 `2.10`；稳定 label 仍用 block ID。这样可以保留原书编号和交叉引用能力，而不用假装已经知道全书的计数规则。

`counter_planner` 的工作顺序：

1. 收集已确认语义块的 `kind`、`observed_number`、章节作用域和顺序
2. 测试全书/按章/按节、共享/按类型独立等有限候选模型
3. 逐一回放，统计无法解释的编号、跳号、重复和回退
4. 只有一个模型在全书达到批准阈值且无高风险冲突时，输出 `render_mode: amsthm-auto`
5. 否则输出 `render_mode: source-number`，异常进入 QA，不修改观测编号

开发阶段使用 strict 模式：Profile 或计数模型不一致即报告。`\\setcounter` 只允许作为人工批准的局部修复，且要写入补丁清单；它不是默认纠偏机制，也不由 LLM 自动生成。

#### label 命名：内部身份与显示编号分离

在 `amsthm-auto` 模式，显示编号由计数器生成；在 `source-number` 模式，显示编号来自已验证的 `observed_number`，由自定义语义环境绑定到 `\ref`。两种模式下，`\label` 都只是稳定交叉引用锚点，label 字符串本身不会直接排印。

为避免 OCR 错号、重复编号或跨节同号造成冲突，正式实现使用稳定 block ID 做 label：

```
thm:<block id>      定理类，如 thm:p0024-b0007
eq:<block id>       公式，如 eq:p0024-b0008
fig:<block id>      图，如 fig:p0024-img001
```

IR 另存：

```json
{
  "id": "p0024-b0007",
  "observed_number": "2.10",
  "kind": "theorem"
}
```

正文中的 `Proposition 2.5` 等引用，由交叉引用解析器根据“作用域 + 类型 + 原书编号”映射到对应的稳定 label；**原书编号是匹配依据，不承担 label 身份**。在 source-number 模式，`\ref` 显示该环境绑定的 source number；在 amsthm-auto 模式，显示计数器实际生成的编号。

#### 降级路径

识别不确定时不要硬猜环境。降级为普通段落，保留字面编号和关键词，置 `needs_review: true`：

```latex
\noindent\textbf{2.1 DEFINITION.} A differentiable manifold ...
```

内容不丢，只是少了语义环境，后续可以单独修。

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
              定理指标：定理环境 258 / 带命名 35 / proof 108 / bibitem 71
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
│  ├─ profile.py        S3.5 文档侦察 + Profile LLM/人工配置入口
│  ├─ profile_validate.py  Profile 全书回放验证
│  ├─ counter_planner.py   编号事件流 + 计数模型验证
│  ├─ structure.py      S4  Profile 驱动结构重建
│  ├─ classify.py       疑难块受约束 LLM 分类
│  ├─ repair.py         S5  OCR/文本逐块修复
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
├─ schemas/
│  ├─ ir.schema.json
│  ├─ book_profile.schema.json
│  └─ counter_plan.schema.json
├─ tests/
│  ├─ fixtures/            从 do Carmo 抽的小样本页
│  └─ test_*.py
└─ work/                   运行产物，git 忽略
   ├─ raw/ assets/ ir/ tex/ out/ qa/
```

---

## 5. 实施顺序

分五个里程碑，每个都可独立验证，不做一次性大爆炸。

### M0 · 文档 Profile 与计数模型验证

前置：S0.5 资产落地完毕。

范围：先不生成完整 TeX。用 10–20 页分层样本 + 全书轻量扫描，产出并验证 `book_profile.json` 与 `counter_plan.json`，人工确认正例、反例和编号异常。

交付：语义块标注预览、候选命中/漏检报告、计数模型比较报告。

### M1 · 打通最小闭环（先做这个）

前置：M0 通过，且 S0.5 资产落地完毕。

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

### M4 · OCR 修复与翻译（按需）

Profile LLM 和疑难块分类已在 M0/M2 接入；本阶段只新增 OCR/文本逐块修复。若需中译，加 `translated_text` 通道和术语表。

---

## 6. 已识别的风险

| 风险 | 严重度 | 对策 |
|---|---|---|
| **CDN 图片链接过期，928 张图全废** | **最高** | S0.5 立即抓取落地，早于一切其他工作 |
| 嵌套子块未递归导致图和图题静默丢失 | 高 | adapter 递归遍历 + L2 对账图片数 == 51 |
| span 混排处理错误导致公式/文字错位 | 高 | M1 就专项验证，做 inlines 单元测试 |
| 定理识别误判（把正文引用当成定理） | 中 | Profile grammar 候选 + 全书 Validator + 疑难块受约束分类；do Carmo 的 258 个候选仅是样本基线 |
| 定理编号与原书不一致，正文引用全错位 | 高 | 先验证 counter_plan；默认 source-number，只有全书验证通过才用 amsthm；`\setcounter` 仅人工批准的局部修复 |
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
