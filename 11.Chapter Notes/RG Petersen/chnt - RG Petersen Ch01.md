---
type: chapter note
aliases:
- RG Petersen
book: RG Petersen
chapter: 01
status: active
tags: []
---


# RG Petersen

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 本章主线
- 由于极坐标表示在$0$处奇异, $I\times S^{n-1}$上的一般形式的度量$\,d t^{2}+ \rho ^{2}\left(t\right)g_{S^{n-1}}$在$0$处的光滑性需要单独研究. 办法是通过坐标变化把度量的表示拉回到直角坐标上, 通过赋予$\rho \left(t\right)$一些正则性($\rho \left(0\right)= 0$, $\rho ^{\prime} \left(0\right)= 1$, $\rho ^{\left(2m\right)}\left(0\right)= 0$). 来确保原点的光滑性.

## 核心定理
1. 
2. 
3. 

## 核心工具
- 
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

### 条件边界探索
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
