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
-  距离函数$r$
   1. 一般来说, 写成$\operatorname{grad}r= \partial _{r}$.
   2. 对$\operatorname{Hess}$沿着$\partial _{r}$求导, $\operatorname{Hess}^{2}$, $R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$有一个公式.
   3. $r$-水平集上(即度量下的r-球面上),  $\operatorname{II}$就是$\operatorname{Hess}$.
   4. $\nabla _{\partial _{r}}\partial _{r}= 0$.
-  球面
   1. $\operatorname{Hess}r= \operatorname{II}$就是$\frac{1 }{r }g_{r}$
   2. 曲率就是$R\left(X,Y\right)Z= -r^{-2}\left(X\wedge Y\right)\left(Z\right)$, 常曲率$r^{-2}$.
-  球面乘积
   1. 乘积度量下, 曲率张量, Ricci曲率都有纯正的直和分解. 截面曲率体现为纯平面和混合平面的差异, 纯平面保持, 混合平面为零.
   2. 取纯$S^{n}$, 纯$S^{m}$, 混合的三对代表向量场, 计算$R$下的退化性, 给出对角化.
   3. 特征向量下带入常曲率的性质, 给出曲率算子, 算子给出Ric和scal
-  旋转对称度量
   1. 首先, 考虑
       $$ \operatorname{Hess}r= \frac{\partial _{r}\rho  }{\rho  }g_{r} $$ 
    对$\operatorname{Hess}r$求导的过程中, 产生$\operatorname{Hess}^{2}r$和纯对$\rho$的导数项, 前者正好与基本方程中的$\operatorname{Hess}^{2}$抵消, 得到$R\left(\cdot ,\partial _{r},\partial _{r},\cdot \right)$化为$-\frac{\partial _{r}^{2}\rho  }{\rho  }g_{r}$, 得到Riccati信息.
   2. 借助1.的表示, 可以分别计算切于$S^{n-1}$的和$\partial _{r}$方向上, $\nabla _{X}\partial _{r}$和$R\left(X,\partial _{r}\right)\partial _{r}$的值, 后者为零.
   
   3.  $$ g\left(\left(x\wedge y\right)v,w\right)= g\left(x\wedge y,v\wedge w\right) $$ 
   4.  通过球面度量的表示$R^{r}\left(X,Y\right)=-\frac{1 }{r^{2} }\left(X\wedge Y\right)$, $\operatorname{II} = \operatorname{Hess}r$简化切向法向曲率方程, 计算出曲率的切向行为
         $$ \mathfrak{R}= \frac{1-\left(\partial _{r}\rho \right)^{2} }{\rho ^{2} }g_{r}\left(\cdot \wedge \cdot ,\cdot \wedge \cdot \right) $$ 
        这是Gauss-信息.
       其中第二基本形式化为$\left(\frac{\partial _{r}\rho  }{\rho  }\right)^{2}\left(g_{r}\left(\cdots \right)g_{r}\left(\cdots \right)-g_{r}\cdot g_{r}\right)= \left(\frac{\partial _{r}\rho  }{ \rho }\right)^{2}g_{r}\left(\cdot \wedge \cdot ,\cdot \wedge \cdot \right)$ 球面曲率项是分母的那个$1$
   5. 最后, 直接算出Coddazi-信息$\nabla _{X}\operatorname{II}= 0$, 混合曲率消失.

   6. 总结一下
      1.  $$ \mathfrak{R}\left(X\wedge \partial _{r}\right)= -\frac{\ddot{\rho } }{\rho  }X\wedge \partial _{r} $$
      2.   $$ \mathfrak{R}\left(X\wedge Y\right)= \frac{1- \dot{\rho}^{2} }{ \rho ^{2}}X\wedge Y $$  
      那么考虑
       $$ \operatorname{sn}_{k}\left(r\right)= \begin{cases} \frac{1 }{\sqrt{k} }\sin \left(\sqrt{k}r\right),&k> 0\\0,&k= 0\\\frac{1 }{\sqrt{-k} }\sinh\left(\sqrt{-k}r\right),&k< 0 \end{cases}  $$ 
       度量$\,d r^{2}+ \operatorname{sn}_{k}^{2}\left(r\right)\,d s_{n-1}^{2}$的$\rho= \operatorname{sn}_{k}$满足1.2.对应的两个$k$-特征方程, 于是有常曲率$k$.
   7. 曲率算子被对角化, 截面曲率落在$-\frac{\ddot{\rho} }{\rho  }$, $\frac{1-\dot{\rho}^{2} }{\rho ^{2} }$之间.
   8.  一组正交标价下, $\left(n-1\right)$个径向中, $\left(n-2\right)$个正交的径向, 和一个切向, 对3-1张量缩并后两个, 利用
          $$ R\left(X,Y\right)Z= \left(\mathfrak{R}\left(X\wedge Y\right)\right)\left(Z\right) $$ 
          得到
         $$ \operatorname{Ric}\left(X\right)= \left(\left(n-2\right)\frac{1-\dot{\rho}^{2} }{\rho ^{2} }-\frac{\ddot{\rho} }{\rho  }\right)X $$ 
          $$ \operatorname{Ric}\left(\partial _{r}\right)= -\left(n-1\right)\frac{\ddot{\rho} }{\rho ^{2} }\partial _{r} $$
          $$ \operatorname{scal}= -2\left(n-1\right)\frac{\ddot{\rho} }{\rho  }+ \left(n-1\right)\left(n-2\right)\frac{1-\dot{\rho}^{2} }{\rho ^{2} } $$
          可以通过这个解出常Ricci曲率$\rho \left(r\right)= a\pm r$, 无论如何, Ricci flat的旋转对称度量都是平坦的.

-  **双旋转对称的Doubly Warped Products**: 
      度量为
      $$ \left(I\times S^{p}\times S^{q},\,d r^{2}+ \rho ^{2}\left(r\right)\,d s_{p}^{2}+ \phi ^{2}\left(r\right)\,d s_{q}^{2}\right) $$ 
   1. 此时
       $$ \operatorname{Hess}r= \left(\partial _{r}\rho \right)\rho \,d s_{p}^{2}+ \left(\partial _{r}\phi \right)\phi \,d s_{q}^{2} $$ 
   2. $\nabla _{X}\operatorname{II}$无非是两个旋转对称度量的样式加在一起, 所以也有$\nabla _{X}\operatorname{II} = 0$, 混合曲率消失.
   3. 设$X,Y$切于$S^{p}$, $V,W$切于$S^{q}$, 则在两个球面上分别套用旋转对称度量的情形
       $$ \mathfrak{R}\left(\partial _{r}\wedge X\right)= -\frac{\ddot{\rho} }{\rho  }\partial _{r}\wedge X $$ 
       $$ \mathfrak{R}\left(\partial _{r}\wedge V\right)= -\frac{\ddot{\varphi} }{\varphi  }\partial _{r}\wedge V $$
       $$ \mathfrak{R}\left(X\wedge Y\right)= \frac{1-\dot{\rho}^{2} }{\rho ^{2} }X\wedge Y $$  
       $$ \mathfrak{R}\left(U\wedge V\right)= \frac{1-\dot{\phi}^{2} }{\phi ^{2} }U\wedge V $$
       还有一个交叉的
       $$ \mathfrak{R}\left(X\wedge V\right)=-\frac{\dot{\rho} }{\rho  }\frac{\dot{\phi} }{\phi  }X\wedge V  $$  

-  **Conformal Hessian for General Warped Products**: 考虑
    $$ \ge \,d r^{2}+ \rho ^{2}\left(r\right)g_{H} $$
    1. 令$f= \int \rho \,d r$, $df= \rho dr$, 则
       $$ \operatorname{Hess}f= \dot{\rho}g,\quad \dot{\rho}= \frac{1}{2}\frac{\left| \nabla f \right|^{2}  }{\,d f } $$  
   
- **李群上的左不变度量**: 
   1. 将$T_{e}G$处的内积通过左平移推出到$G$成为一个度量. 也就是说, $G$被强制赋予了使得所有$DL_{g}|_{e}$成为等距线性同构的度量. 通过群性质推举$L_{g}$成为一个等距同构.
   

## 核心工具
- Computational Simplifications
    - 截面曲率落在曲率算子的最大最小特征值之间.
    - 彼此曲率为零的正交标价下, 可以做以下简化,  应对旋转对称和doubly warped 积的计算.
        - $R\left(e_{i},e_{j}\right)e_{k}= 0$, 曲率算子可对角化.
        - $R\left(e_{i},e_{j},e_{k},e_{l}\right)= 0$, Ric可对角化.
- **Brinkmann,1925**: 从Conformal Hess到度量, 当$df \neq 0$, 局部地$g =  \,d r^{2}+ \rho ^{2}\left(r\right)g_{H}$. 若还有$df\left(p\right)= 0$, $\lambda \left(p\right)\neq 0$, 则局部地$g =  \,d r^{2}+ \rho ^{2}\left(r\right)\,d s_{n-1}^{2}$
  - 若$f\left(p\right)= 0$, $df|_{p}= 0$, 则
   $$ \operatorname{Hess}f= \left(1-kf\right)g $$
   然后度量就是$k$-曲率的warped product. 
- Conformal Representation of Warped Products: $\left(M,g\right)\to \left(M,\psi ^{2}g\right)$ is called a **conformal change**.
    $$ dr^{2}+ \rho ^{2}\left(r\right)g_{H}= \psi ^{2}\left(\rho \right)\left(d\rho ^{2}+ g_{H}\right) $$
    with
     $$ \,d r= \psi \left(\rho \right)d\rho ,\quad \rho \left(r\right)= \psi \left(\rho \right) $$
   or 
    $$ \,d r^{2}+ \rho ^{2}\left(r\right)g_{H}= \psi ^{2}\left(\rho \right)\left(d\rho ^{2}+ \rho ^{2}g_{H}\right) $$
    with
     $$ dr= \psi \left(\rho \right)d\rho  ,\quad \rho \left(r\right)= \rho \psi \left(\rho \right)$$    

  

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
