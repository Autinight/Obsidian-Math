<%*
const title = await tp.system.prompt("Paper title（英文原题）");
const safeTitle = (title || "Untitled Paper").replace(/[\\/:*?"<>|]/g, "-");
await tp.file.rename(safeTitle);
const authors = await tp.system.prompt("Authors（逗号分隔）");
const status = await tp.system.suggester(
  ["📖 Skim", "🔧 Working through", "✅ Done"],
  ["Skim", "Working through", "Done"]
);
_%>
---
title: "<% title %>"
authors: "<% authors %>"
venue: 
year: 
arxiv: 
date_read: <% tp.date.now("YYYY-MM-DD") %>
status: <% status %>
tags: [paper-reading]
---

# <% title %>

## 1. One-line Summary
> [!summary]
> <% tp.file.cursor() %>

## 2. Problem & Context
- 问题（自己的话）：
- 前人工作与卡点：
- 作者声称的 contribution（可抄 intro 原句）：

## 3. Setup & Definitions
> 按论文编号严格抄录，标题注明页码；评注写在 callout 外，不与原文混淆。

> [!definition]+ Def X.X (Name), p.XX
> *statement*

评注：各条件的作用；与相邻概念的层级区别；退化例子。

## 4. Main Results
> [!theorem]+ Thm X.X, p.XX
> *statement*
> **Assumptions**: (i)  (ii)  

- 条件是否最优，去掉一条会怎样：

## 5. Proof Architecture
一句话策略：

- **Step 1**：输入 → 输出，
  - 关键引理与思想：
- **Step 2**：

核心估计：
$$
$$

## 6. Techniques & Tools
- 工具清单；可复用的标 ★ 并注明场景

## 7. Relation to Other Work
- 推广了：[[ ]]
- 被推广于：[[ ]]
- 与 [[ ]] 的本质区别（一句话）：

## 8. My Understanding（中文）
- 直觉图像：
- 最难消化的点及消化方式：
- 对本方向的启发：

## 9. Open Questions & TODO
- [ ] 未看懂处（精确到页/行）：
- [ ] 待查文献：[[ ]]
- [ ] 推广猜想（猜想级别即可）：

## 10. Quotable
> 将来写综述或套磁可直接引用的原句，注明页码。
