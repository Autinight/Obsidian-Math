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


对于旋转对称度量, 想法就是以径向的等值面(球面)为跳板, 通过研究等值面中, 切向面之间的相互弯曲, 切向面与含法向面的弯曲, 和含法向面之间的弯曲, 来确定氛围空间的弯曲. 这样做的原因, 是因为旋转对称度量下, 等值面具有常值曲率. 
- 对于旋转对称度量,  我们计算径向距离函数$r$的$\operatorname{Hess}$得到$\operatorname{II}$和$R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$的信息, 进而$\nabla _{X}\partial _{r}$, $R\left(X,\partial _{r}\right)\partial _{r}$, 这是Riccati方程, 径向曲率截面信息.
- 对于旋转对称度量, 通过切向曲率方程, 带入$\operatorname{II} = \operatorname{Hess}r$和$R^{r}$的常曲率表示, 直接曲率张量的切向行为. 再直接计算$\nabla _{X}\operatorname{II} = \nabla _{X}\operatorname{Hess}$, 得到混合曲率退化. 从而得到曲率的完全信息.

## 核心对象
1. 距离函数$r$
   1. 一般来说, 写成$\operatorname{grad}r= \partial _{r}$.
   2. 对$\operatorname{Hess}$沿着$\partial _{r}$求导, $\operatorname{Hess}^{2}$, $R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$有一个公式.
   3. $r$-水平集上(即度量下的r-球面上),  $\operatorname{II}$就是$\operatorname{Hess}$.
   4. $\nabla _{\partial _{r}}\partial _{r}= 0$.
2. 球面
   1. $\operatorname{Hess}r= \operatorname{II}$就是$\frac{1 }{r }g_{r}$
   2. 曲率就是$R\left(X,Y\right)Z= -r^{-2}\left(X\wedge Y\right)\left(Z\right)$, 常曲率$r^{-2}$.
3. 球面乘积
   1. 乘积度量下, 曲率张量, Ricci曲率都有纯正的直和分解. 截面曲率体现为纯平面和混合平面的差异, 纯平面保持, 混合平面为零.
   2. 取纯$S^{n}$, 纯$S^{m}$, 混合的三对代表向量场, 计算$R$下的退化性, 给出对角化.
   3. 特征向量下带入常曲率的性质, 给出曲率算子, 算子给出Ric和scal
4. 旋转对称度量
   1. 对$\operatorname{Hess}r$求导的过程中, 产生$\operatorname{Hess}^{2}r$和纯对$\rho$的导数项, 前者正好与基本方程中的$\operatorname{Hess}^{2}$抵消, 得到$R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$化为$-\frac{\partial _{r}^{2}\rho  }{\rho  }g_{r}$, 得到Riccati信息.
   2. 借助1.的表示, 可以分别计算切于$S^{n-1}$的和$\partial _{r}$方向上, $\nabla _{X}\partial _{r}$和$R\left(X,\partial _{r}\right)\partial _{r}$的值, 后者为零.
   3.  $$ g\left(\left(x\wedge y\right)v,w\right)= g\left(x\wedge y,v\wedge w\right) $$ 
   4.  通过球面度量的表示$R^{r}\left(X,Y\right)=-\frac{1 }{r^{2} }\left(X\wedge Y\right)$, $\operatorname{II} = \operatorname{Hess}r$简化切向法向曲率方程, 计算出曲率的切向行为
         $$ \mathfrak{R}= \frac{1-\left(\partial _{r}\rho \right)^{2} }{\rho ^{2} }g_{r}\left(\cdot \wedge \cdot ,\cdot \wedge \cdot \right) $$ 
        这是Gauss-信息.
       其中第二基本形式化为$\left(\frac{\partial _{r}\rho  }{\rho  }\right)^{2}\left(g_{r}\left(\cdots \right)g_{r}\left(\cdots \right)-g_{r}\cdot g_{r}\right)= \left(\frac{\partial _{r}\rho  }{ \rho }\right)^{2}g_{r}\left(\cdot \wedge \cdot ,\cdot \wedge \cdot \right)$ 球面曲率项是分母的那个$1$
   5. 最后, 直接算出Coddazi-信息, 混合曲率消失.

   6. 总结一下
      1.  $$ \mathfrak{R}\left(X\wedge \partial _{r}\right)= -\frac{\ddot{\rho } }{\rho  }X\wedge \partial _{r} $$
      2.   $$ \mathfrak{R}\left(X\wedge Y\right)= \frac{1- \dot{\rho}^{2} }{ \rho ^{2}}X\wedge Y $$  
   7. 曲率算子被对角化, 截面曲率落在$-\frac{\ddot{\rho} }{\rho  }$, $\frac{1-\dot{\rho}^{2} }{\rho ^{2} }$之间.
   8.  一组正交标价下, $\left(n-1\right)$个径向中, $\left(n-2\right)$个正交的径向, 和一个切向, 对3-1张量缩并后两个, 利用
          $$ R\left(X,Y\right)Z= \left(\mathfrak{R}\left(X\wedge Y\right)\right)\left(Z\right) $$ 
          得到
         $$ \operatorname{Ric}\left(X\right)= \left(\left(n-2\right)\frac{1-\dot{\rho}^{2} }{\rho ^{2} }-\frac{\ddot{\rho} }{\rho  }\right)X $$ 
          $$ \operatorname{Ric}\left(\partial _{r}\right)= -\left(n-1\right)\frac{\ddot{\rho} }{\rho ^{2} }\partial _{r} $$
          $$ \operatorname{scal}= -2\left(n-1\right)\frac{\ddot{\rho} }{\rho  }+ \left(n-1\right)\left(n-2\right)\frac{1-\dot{\rho}^{2} }{\rho ^{2} } $$
5. 设$k$-常曲率流形的度量为$\,d r^{2}+ \operatorname{sn}_{k}^{2}\left(r\right)\,d s_{n-1}^{2}$  
   

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
