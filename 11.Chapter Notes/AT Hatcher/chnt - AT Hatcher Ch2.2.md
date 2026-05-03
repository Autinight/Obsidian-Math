---
type: chapter note
aliases:
  - AT Hatcher Ch2.2
book: AT Hatcher
chapter: 2.2
status: active
tags: []
---


# AT Hatcher Ch2.2

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 本章主线
- 

## 核心定理
1. **切除**: $A\subseteq B$, 如果$Z\subseteq A$有正的距离, 即$\overline{Z}\subseteq A^{\circ}$, 就可以在相对同调中切除
   $$ H_{n}\left(B,A\right)= H_{n}\left(B-A,Z-A\right) $$ 
   或者说, 如果$X= A^{\circ }\cup B^{\circ }$, 则
   $$ H_{n}\left(X,A\right)= H_{n}\left(B,A\cap B\right) $$ 
2. 
3. 

## 核心工具
- **球面上, 没有不动点的映射与对径映射同伦**
- **约化同调**: 由于没有$-1$维单形这个东西, $0$维同调计算时就与其他同调产生了一些结构上的差异, 为此, 可以把给顶点的边界看成是$[\varnothing]$空单形的物件, 可以想象, 顶点本身没有什么方向性, 它们的边界都是同一个家伙, 可以定义一个boundary map是单纯的把顶点的数量加在一起, 此时给出的$\widetilde{H}_{0}$更加自然.
- 

## 本章打卡
- [ ] 速览
- [ ] 语言适应
- [ ] 工具入门
- [ ] 证明骨架
- [ ] 边界扩展（主动挖掘证明细节）
- [ ] 工具深化
- [ ] 例子训练
- [ ] 收尾

---

## 本章习题

### 全部习题
```dataview
TABLE number as "题号", category as "分类", status as "状态", priority as "优先级"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter
SORT number ASC
```

### 未完成
```dataview
TABLE number as "题号", category as "分类", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND status != "done"
SORT number ASC
```

### 语言适应性训练
```dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "language"
SORT number ASC
```

### 工具内化训练
```dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "tool"
SORT number ASC
```

### 边界扩展探索
```dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "boundary"
SORT number ASC
```

### 具体实例积累
```dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "example"
SORT number ASC
```

---

## 本章总结
- 定理：
- 工具：
- 例子：
- 二刷：
- 一句话总结：
