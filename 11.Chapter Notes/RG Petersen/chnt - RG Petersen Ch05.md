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
  - **测地线的局部存在唯一性**: 由二阶ODE的局部存在唯一性(一阶ODE组)在Chart上得到.
  - **测地线的全局唯一性**: 开区间上成立, 通过拓扑的连通性论证.
  - **最大测地线**: 把所有开区间上的测地线的定义域并起来.
  - **有限区间上的测地线逃逸任何紧集**: 即像落在紧集上的测地线一定是全局存在的, 这与流的逃逸引理几乎一样, 只不过我们要在TM上构造紧集, 这个过程借助了$\left| \dot{c} \right|$是常数.
  - **测地线的存在时间不会跳跃式下降**. 更严谨地, 定义在紧区间上的测地线, 存在速度的邻域$V$, 使得任何以$v\in V$为初速度的测地线, 在$\left[ a,b \right]$也有定义. 我们在$TM$上应用[[pps - Continuous Reliance for Flow Characterized by Compact Interval|Continuous Reliance for Flow Characterized by Compact Interval]]就可以得到这个结论.
    - 但是可能跳跃式增长, 比如$\mathbb{R} ^{2}\setminus \left\{ 0,0 \right\}$上, 从负半轴出发直线原点的直线, 是有限时间存在的. 但是如果你稍微偏一点越过原点, 就可以肆无忌惮地延伸.

- **Distance**
  - **segment**: $\sigma \in \Omega _{p,q}$常速率,  $L\left(\sigma \right)= \left| pq \right|$
  - 欧式空间是点的距离给出了曲线长度. 在黎曼流形上, 我们事先没有点的距离, 而恰恰是通过曲线的长度来给出点的距离的.
  - 定义距离为
       $$ \left| pq \right|= \inf \left\{ L\left(c\right):c\in \Omega _{p,q} \right\}  $$ 
       where
       $$ \Omega _{p,q} = \left\{ c:\left[ 0,1 \right]\to M: c\text{ is piecewise} C^{\infty}\text{ and }c\left(0\right)= p,c\left(1\right)= q \right\}$$ 
  - Distance function 的梯度场$\nabla r$的积分曲线是测地线段. 如果$c\in \Omega _{p,q}$, 使得端点的$r$-距离等于真正的距离$L\left(c\right)$, 则$c$无非是$\nabla r$的积分曲线的$c$-弧长重参数化.
  - $c\in \Omega _{pq}$总是能几乎不改变长度地被常速率曲线替换.

- **First Variation of Energy**
  - 定义弧长泛函$L\left(c\right)= \int _{0}^{1}\left| \dot{c} \right| \,d t$, 和能量泛函$E\left(c\right)= \frac{1 }{2 }\int _{0}^{1}\left| \dot{c} \right|^{2}\,d t$.
  - 极小化$L$的**常速率曲线**也极小化$E$, 极小化了$E$的曲线能极小化$L$
    - $L$被$E$控制, 且当且仅当曲线为常速率时成立一个等式关系. 
    - 回忆任意曲线总能几乎不**增加**长度地被一个常速率曲线代替. 因此想要极小化$L$, 只需要极小化$E$的过程中, 用常速率曲线的逼近给出等式关系换回去.
    - 但是极小化$L$的曲线如果不是常速率的, 则换不回去能量.
  - **曲线的变分**: 一族曲线$\bar{c}:\left(-\varepsilon ,\varepsilon \right)\times \left[ a,b \right]$, 其中$\left(-\varepsilon ,\varepsilon \right)$是参数集,$\left[ a,b \right]$是时间. 规定$\bar{c}$关于时间分段光滑, 关于参数是光滑的.
    - 速度场是$\frac{\partial \bar{c} }{\partial t}$, 在每个分段区间$\left[ a_{i},a_{i+ 1} \right]$的内部良定义, 在折点$a_{i}$需要分左右定义.
    - 变分场是$\frac{\partial \bar{c}}{\partial s}$, 处处良定义,在每个区间片上光滑, 整体连续.
    - **proper variation**是经常研究的一类, 即时间为$\left[ 0,1 \right]$, 且这一组曲线共用起点和终点.

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
