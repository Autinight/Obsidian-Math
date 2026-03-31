---
type: chapter note
aliases:
- RG Petersen
book: RG Petersen
chapter: 02
status: active
tags: []
---


# RG Petersen

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 本章主线
- 需要定义黎曼流形上的某种导数.  通常来说, 坐标不变的表达式通常遵循Einstein求和约定, 即协变和逆变的量是相同的, 从而在坐标变换的途中两两抵消. 对于梯度这样的量, 想要坐标不变必须依赖于度量, 而欧式空间上的梯度的形式指标不配对, 所以这样的表达式无法不依赖度量地坐标不变地推广.
- Lie Derivative: 流形上的函数复合向量场的积分曲线, 变成直线上的函数, 泰勒展开的一阶量作为李导数. 或者是复合积分曲线后关于$t$求导. 推广到向量场上, 由于无法直接比较, 让向量场沿着积分曲线跑时间$t$后通过微分拉回到原点. 也就是说, 我们通过$X$生成了一种$Y$的运动方式, 又给出了向量场之间的比较方式, 测量了$Y$自己的样子和让$X$拖着走的样子差多少.  这种方式还可以推广到张量, 因为拉回的语言可以推广到张量. 
  - 李导数的Talor展开定义通常比直接定义更好用.
  - 通常来说, 如果一个几何对象能被流自然地拉回, 就能定义李导数. 自然地拉回, 是指流到其拉回的映射具有函子性. 特别地, $Y\to L_{Y}$是Diff-等变的. 且作用在$Y$上的$\varphi ^{*}$和作用在张量场-微分算子算子上的$\varphi ^{*}$的转换具有函子性.
  - 散度测量了体积形式沿着向量场的变化率. 
  - 度量沿着梯度的李导数给出两倍的Hessian. 
- 李群
  - 共轭的微分是李括号.
  - 可逆线性李群的李代数
- Connection
  - 欧式空间上, 由于是平直的, 为了使坐标向量场的导数为零, 可以用坐标定义出自然地斜变导数.
  - 为了扩张这种定义, 可以把斜变导数用度量, 李导数和对偶的外微分联系, 后几者坐标无关, 那么这样自然给出一个坐标无关的定义.
  - 在这种定义下的$\nabla _{Y}X$, 关于$Y$是张量, 关于$X$是导子, 并且无挠且与度量相容. 称为Riemann联络. 张量和导子性合在一起是仿射联络.
  - 张量保证联络关于$Y$逐点, 导子保证(通过截断) 联络关于$X$局部.
  - 想要直到X的所有联络信息, 只需要知道局部就行. 如果我们苛求地更少, 只想要知道某个方向的信息, 考虑这个方向的曲线就行
- Tensor Connection
  - 保持Lebniz律, 定义$\nabla _{X}S= \left[ \nabla _{X}, S \right]$
  
   $$ \nabla S\left(X,Y_1\right)= \nabla _{X}\left(S\left(Y_1\right)\right)-S\left(\nabla _{X}Y\right) $$ 
    $$ \nabla S\left(X,Y_1,\cdots ,Y_{r}\right)= \nabla _{X}\left(S\left(Y_1,\cdots ,Y_{r}\right)\right)-\sum _{i= 1}^{r}S\left(Y_1,\cdots ,\nabla _{X}Y_{i},\cdots ,Y_{r}\right) $$ 
    
     $$ \left(\nabla _{X}\omega\right)\left(Y\right) = \nabla _{X}\left(\omega \left(Y\right)\right)-\omega \left(\nabla _{X}Y\right) $$ 
     $$ \operatorname{Hess}f=\frac{1}{2}\mathcal{L}_{\operatorname{grad}f}g = \left(\nabla _{X}\,d f\right)\left(Y\right)= g\left(\nabla _{X}\nabla f,Y\right)  $$ 
- Conctraction
  - 缩并有两种视角, 一种是看成是张量积空间的自然配对, 一种是看成Tensor强行给两个位置赋予对偶的向量和余向量.
- Adjoint
  - 度量配对后再体积形式上积分, 可以给出一种内积. 再这种内积下, 可以定义一种伴随
    -  $$ \nabla ^{*}=- \operatorname{tr}_{g}\left(\nabla \right) $$ 
    -  $\nabla$增加了一个tensor的槽位, $\nabla ^{*}$则减少了一个(通过把$\nabla$增加的槽位和原本的槽位做$g$-配对).
    -  照顾了$\nabla$的导子性配合分部积分, 产生了负号.
  -  $$ \operatorname{div}X= -\nabla ^{*}\theta _{X} $$
     -  散度执行了先求导再缩并的操作, 而这里体现了在对偶上的同样的操作流.
  - 在紧支集上, 由分部积分的原理, 就有
    -  $$ \int g\left(\nabla S,T\right)\,d V_{g} = \int g\left(S,\nabla ^{*}T\right)\,d V_{g}$$ 
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
