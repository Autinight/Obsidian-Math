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
  - **变分公式**
     $$ \begin{aligned} \frac{\mathrm{d}E\left(c_{s}\right)}{\mathrm{d}s}&= -\int _{a}^{b}g\left(\frac{\partial ^{2}\bar{c}}{\partial t^{2}}, \frac{\partial \bar{c}}{\partial s}\right)+ g\left(\frac{\partial \bar{c}}{\partial t^{-}},\frac{\partial \bar{c}}{\partial s}\right)|_{\left(s,b\right)}-g\left(\frac{\partial \bar{c}}{\partial t^{+ }},\frac{\partial \bar{c}}{\partial s}\right)|_{s,a}\\&+ \sum _{i= 1}^{m-1}g\left(\frac{\partial \bar{c}}{\partial t^{-}}-\frac{\partial \bar{c}}{\partial t^{+ }},\frac{\partial \bar{c}}{\partial s}\right) |_{\left(s,a_{i}\right)}\end{aligned}  $$ 
    - 第一变分公式的想法就是, 不要让任何算子作用在变分场$\frac{\partial \bar{c}}{\partial s}$上, 因为这通常是我们用来测试的函数, 变分公式就是借助度量性, 把作用在$\frac{\partial \bar{c}}{\partial s}$上的算子转嫁给$\frac{\partial \bar{c}}{\partial t}$这个速度场.
    - 当在$s= 0$处时, 我们就看出来, 对于测试变分在原点处的能量变化, 就是由曲线的内蕴几何信息在变分场上的某种**投影**.
    - 通过变分公式来证明**极小化能量泛函的分段光滑曲线**是**光滑测地线**, 就是通过调试变分场的样板, 来客制化分别提取**内部弯曲信息**和**折点信息**, 从而导出"极小曲线内部不拐弯"和"分段测地不会有折点(整体测地)"的事实.
  - **segment**是测地线: segment自动极小化了能量泛函.

- **Exponential Map**
  - **Definition**: $O_{p}\subseteq T_{p}M$是由那些测地线的存在区间包含$1$的那些速度构成的集合.
    - 由于$\left(p,v\right)\mapsto L_{v}$是$TM$上的下半连续映射[[pps - Continuous Reliance for Flow Characterized by Compact Interval|reference]], 故
       $$ \mathcal{O}= \left\{ \left(p,v\right): L_{v}> 1 \right\} $$
       是开集. 
       于是
        $$ \mathcal{O}_{p}= i_{p}^{-1} \left(\mathcal{O}\right) $$
       也是开的. 
    - 定义**exponential map**
       $$ \exp _{p}\left(v\right)= c_{v}\left(1\right) $$ 
       其中$v\in \mathcal{O}_{p}$, $c_{v}$是测地线.
  - $\exp _{p}\left(v\right)= q$是说, $c_{v}\left(t\right)$是从$p$的$q$的测地线.  测地线的长度就是速度向量的长度$\left| v \right|$.
  - **Properties**:
    - $D\exp _{p}:T_{p}\mathcal{O}_{p}= T_{0}\left(T_{p}M\right)\simeq T_{p}M\to T_{p}M$在原点是恒等映射, 从而$\exp _{p}$是局部微分同胚.
      - 通过求曲线速度来求$D\exp _{p}$, 把$v\in T_{p}M$视为直线$tv$的几何速度, 与抽象的速度向量$I_0\left(v\right)= \frac{\mathrm{d}}{\mathrm{d}t}\left(tv\right)\in T_0\left(T_{p}M\right)$等同. 于是
         $$ D\exp _{p}\left(I_0\left(v\right)\right)= \frac{\mathrm{d}}{\mathrm{d}t} \exp _{p}\left(tv\right)|_{t= 0}= \frac{\mathrm{d}}{\mathrm{d}t}c_{v}\left(t\right)|_{t= 0}= v$$ 
      - 设$\exp _{p}: U\to V$是微分同胚, 则$U$可以看成是一些足够小的向量. 而向量代表的测地线的长度就是向量的长度, 这说明对于$q\in V$, 连接$p,q$的充分小的测地线$c_{\exp _{p}^{-1} \left(q\right)}\left(t\right)$是唯一的, 这一定是它们的segment(因为segment一定是测地线, 而别的测地线的速度向量一定落在$U$外面, 从而那些测地线一定比这条长).
      - 对于$E\left(v\right)= \left(\pi \left(v\right),\exp \left(v\right)\right)$, 
      -  $$ DE:T_{\left(p,0_{p}\right)}\left(TM\right)\to T_{\left(p,p\right)}\left(M\times M\right) $$
         是非奇异的, 给出$TM$的零截面的一个开邻域到$M\times M$的对角线的一个开邻域的微分同胚.
      - 这意味着, 对于足够近的$\left(p,q\right)$, 存在唯一的充分小的$v$,  使得$\exp _{p}\left(v\right)= q$. 即对于足够近的两点, 充分小的测地线唯一且一定是segement.
  - **injectivity radius**
    - 令$\varepsilon > 0$是最大的使得$\exp _{p}:B\left(0,\varepsilon \right)\to M$是微分同胚的点. 由于取遍上确界, 每一点的局部微分同胚和整体单射都是被保持的, 因此最大值确实存在.
  - $\exp _{p}:\mathcal{O}_{p}\to M$是原点附近的局部微分同胚, 从而给出一种坐标, 坐标在不考虑$T_{p}M$如何$\mathbb{R} ^{n}$与等同的意义下是唯一的.
  - 紧集上有$\exp$的一致单射半径.
    - 用$E$的反函数给出一个微分同胚邻域, 再用用标准坐标来局部平凡化$TM$, 塞进去一个柱状的微分同胚邻域, 但是这个柱状的微分同胚临时实际上在$TM$上不同切空间中给出了不同的小球半径, 还需要限制切空间的数量(通过找平凡化意义下紧包含于的开集作为切空间的基座), 借助度量的连续性(紧集上最小值)找到统一的真实半径.
  - **Tabular Neighborhood**: 
    - 对于$\exp _{p}$, 如果把$\left\{ p \right\}$看成是满余维数的流形, 我们在全方位散射测地线扩充为$M$上的一个开集.
    - 而考虑子流形$N$, 通过让$\exp$只从法丛的方向出发(跑到外围$M$而不是在$N$的内部徘徊), 即
       $$ \exp ^{\perp}: O\cap TN^{^{\perp}}\to M $$ 
       (发现在求导的过程中, $TN^{\perp}$恰好补齐了与$M$的维数插件.)
     在把$N$看成是余$m-n$维的流形, 通过散射$m-n$个方向的测地线, 把$N$扩充为$M$上的一个开集.
    - 进而, 如果$N$是properly embedded的, $TN^{\perp}$的零截面由此也是properly embedded的,  就能拼出通过$\exp ^{\perp}$微分同胚于$M$中开集的$TN^{\perp}$零截面的邻域, 这个邻域被映到一个$N$的管状邻域.

  -  $$ \exp _{p}:T_{p}M\supseteq B\left(0,\varepsilon \right)\to B\left(p,\varepsilon \right) \subseteq M$$ 
      是微分同胚. 
      前一个球的意义下指数映射给出测地线的距离小于$\varepsilon$, 后者的意义是存在连接$p$和其中点的曲线距离小于$\varepsilon$
        - $\exp _{p}\left(B\left(0,\varepsilon \right)\right)\subseteq B\left(p,\varepsilon \right)$是简单的, 因为$v\in B\left(0,\varepsilon \right)$的意义就是它所代表的测地线长度小于$\varepsilon$, 而这条测地线两点的点的距离不会比测地线长度大.
        - 反过来, 要说明$v$所代表的那条测地线就是唯一的segment, 就需要说明任意一条连接$p,q$的曲线长度会大于它, 除非它是这条测地线的重参数化. 只考察最后一次从$p$出发, 达到$q$或穿出$\exp _{p}\left(B\left(0,\varepsilon \right)\right)$的那段即可.
        - 通过一个函数$r\left(x\right)= \left| \exp _{p}^{-1} \left(x\right) \right|$, 把切空间距离变成与$p$的测地距离, 借助Gauss lemma, $\nabla _{r}= \partial _{r}$, 来说明连接$p,q$的曲线长度不小于$r\left(q\right)$, 从而$r$才是距离界的那个不可逾越的顶峰, 碰到了$r$就是真距离.
        - 这个过程顺便说明了长度小于$\varepsilon$的曲线是穿不出$\exp _{p}\left(B\left(0,\varepsilon \right)\right)$的, 这给出$B\left(p,\varepsilon \right)\subseteq \exp _{p}\left(B\left(0,\varepsilon \right)\right)$
   - **Gauss Lemma**, 把向量场分解为径向场$\partial _{r}= \frac{1 }{r }x^{i}\partial _{i}$和旋转场$J_{ij}= -x^{j}\partial _{j}+ x^{i}\partial _{i}$.
     - 难点是验证$g\left(\partial _{r},J\right)= 0$, 关键是利用$[J,\partial _{r}]$来把$\nabla _{J}\partial _{r}$替换$\nabla _{\partial _{r}}J$, 实现$\partial _{r}g\left(\partial _{r},J\right)= Jg\left(\partial _{r},\partial _{r}\right)= 0$. 得到$g\left(\partial _{r},J\right)$是一个常数. 而$g\left(\partial _{r},J\right)\le \left| \partial _{r} \right|\left| J \right|= \left| J \right|\le \left| x^{i} \right|\left| \partial _{i} \right| + \left| x^{j} \right|\left| \partial _{j} \right|$再让其靠近原点即可.
 - **Riemannian Coordinates**: 
   - $\partial _{r}= \nabla r$相当于是说, $\exp _{p}$是径向的等距同构, 即把$dr\left(v\right)= g\left(\partial _{r},v\right)$写开, 就是
      $$ g_{ij}x^{j}= \delta _{ij}x^{j} $$ 
      通过求一次导, 得到
       $$ \delta _{ik}= \left(\partial _{k}g_{ij}\right)x^{j}+ g_{ik} $$
      再求一次导, 可以弄出来
        $$ \partial _{k}g_{ij}= 0 $$  
   - 把$g_{ij}$泰勒展开, 得到
   -  $$ g_{ij}= \delta _{ij}+ O\left(r^{2}\right) $$ 
   -  由于$\exp _{p}$是径向等距同构, 所以$\partial _{r}$与等值面正交, $g$总能表示为
       $$ g =  dr^{2}+ g_{r} $$
       其中$g_{r}$是$g$在测地球上的限制 
    - $2\operatorname{Hess}r= \mathcal{L}_{\partial _{r}}g =\mathcal{L}_{\partial _{r}}g_{r}$ 
    - $$ \lim_{r\to 0}\left(\mathcal{L}_{\partial _{r}}g_{r}-\mathcal{L}_{\partial _{r}}\left(r^{2}\,d s_{n-1}^{2}\right)\right)= 0 $$ 
    - $$ \lim_{r\to 0}\left(\operatorname{Hess}r-rds_{n-1}^{2}\right)= \lim_{r\to 0}\left(\operatorname{Hess}r-\frac{1 }{r }g_{r}\right)= 0 $$ 
- **常曲率$k$**的流形局部等距同构与形如$S_{k}^{n}$空间中的开集.
## 核心技术
1. 
2. 
3. 

## 核心工具
- 度量性质可以写成
     $$ \partial _{k}g_{ij}= \Gamma _{ki,j}+ \Gamma _{kj,i} $$
     其中$\Gamma _{ki,j}$是$\Gamma _{ki}^{j}$通过$g$把指标降低, 即
     $$ \Gamma _{ki,j}= g_{jl}\Gamma _{ki}^{l} $$  
- 局部紧的Hausdorff空间, 含入映射proper当且仅当子空间是闭的.
- proper嵌入当且仅当嵌入的子空间是闭的.
- proper嵌入子流形上的单射, 如果是局部微分同胚, 则存在其邻域上的单射.
- **等距同构**
  - 保测地线, 对$\exp$有自然性, 保持曲线长度, 所以不增加距离(但是可能由于空间的几何差异产生捷径.)
  - 给定初值下(一点处的像和切映射相同), 从连通流形出发的等距同构唯一
  - 对于Riemannian Covering, 底空间测地线能无限延伸，当且仅当覆叠空间的测地线也能无限延伸。
  - 完备流形到连通流形的局部等距同构是Riemannian Covering
    - 完备性加局部等距同构, 给出了一致的法坐标, 而等距同构给出的自然性$F \circ \exp_p = \exp_q \circ dF_p$, 这表明把切空间再$d F_{p}$的意义下等同, 法坐标球是一样的.
    - 每个原像上的法坐标小球是不交的, 因为到中心的最短测地线唯一.
    - 从而一个法坐标球的原像就是一堆长得跟它一样的法坐标球
        $$F^{-1}(B(q, \epsilon)) = \bigcup_{F(p)=q} B(p, \epsilon)$$
    - 所以完备性是为了一致的法坐标球, 等距同构是为了法坐标球长得一样, 连通性是为了满射

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
