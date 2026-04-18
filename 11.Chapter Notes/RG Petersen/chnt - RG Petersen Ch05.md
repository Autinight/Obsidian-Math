---
type: chapter note
aliases:
- RG Petersen
book: RG Petersen
chapter: 05
status: active
tags: []
---


# RG Petersen

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 本章主线
- **Mixed Partials**
  - 考虑$c:\Omega \to M$, $\Omega \subseteq \mathbb{R} ^{m}$.
  - 我们把一阶偏导定义为沿单参数变动的曲线
  -  二阶偏导数的度量性和对称性决定了Koszul type formula, 而后者给出了满足这两种性质的偏导数的唯一性.
  -  通过Lebniz律定义二阶偏导, 其中把$\frac{\partial }{\partial t}\left(\partial _{i}\right)$按照这种方式定义 $\left. \frac{\partial X}{\partial t} \right|_{p}= \nabla _{\dot{c}\left(t\right)}X,$, 即沿着曲线速度向量的斜变导数.
  -  沿着氛围流形求二阶偏导, 做切向投影, 等于沿着子流形求二阶偏导.


- **geodesic**
  - 定义为$\ddot{c}= 0$, $\left| \dot{c} \right|= 1$.
  - 测地线方程表示为, 每个分量上,二阶导加上"关于一阶导的, 系数矩阵为$\left(\Gamma _{ij}^{k}\right)_{i,j}$的二次型"等于零.
     $$ \frac{d^{2}c^{k} }{dt^{2} }\partial _{k}+ \frac{dc^{i} }{dt }\frac{dc^{j} }{dt }\Gamma _{ij}^{k}\partial _{k}$$ 

## 核心技术
1. 
2. 
3. 

## 核心工具
- 度量性质可以写成
     $$ \partial _{k}g_{ij}= \Gamma _{ki,j}+ \Gamma _{kj,i} $$
     其中$\Gamma _{ki,j}$是$\Gamma _{ki}^{j}$通过$g$把指标降低, 即
     $$ \Gamma _{ki,j}= g_{jl}\Gamma _{ki}^{l} $$  
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
