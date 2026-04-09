---
type: chapter note
aliases:
- RG Petersen
book: RG Petersen
chapter: 04
status: active
tags: []
---


# RG Petersen

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 本章主线
- 

## 核心对象
1. 旋转对称度量中的距离函数$r$
   1. 一般来说, 写成$\operatorname{grad}r= \partial _{r}$.
   2. 对$\operatorname{Hess}$沿着$\partial _{r}$求导, $\operatorname{Hess}^{2}$, $R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$有一个公式.
   3. $r$-水平集上(即度量下的r-球面上),  $\operatorname{II}$就是$\operatorname{Hess}$.
2. 

## 核心工具
- Computational Simplifications
    - 截面曲率落在曲率算子的最大最小特征值之间.
    - 彼此曲率为零的正交标价下, 可以做以下简化,  应对旋转对称和doubly warped 积的计算.
        - $R\left(e_{i},e_{j}\right)e_{k}= 0$, 曲率算子可对角化.
        - $R\left(e_{i},e_{j},e_{k},e_{l}\right)= 0$, Ric可对角化.
- 
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
