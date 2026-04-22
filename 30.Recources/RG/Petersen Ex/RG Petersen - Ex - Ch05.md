


### 🏆 黎曼几何核心刷题进度表

#### 🟢 第一阶段：局部几何与解析工具 (训练硬计算)
*   [x] **⭐ 5.9.42 (Riemann & Gauss 度量展开)**：**必做！** 掌握 $g_{kl} = \delta_{kl} + \frac{1}{3}R_{ikjl}x^ix^j + O(|x|^3)$。
*   [x] **⭐ 5.9.43 (A. Gray 体积展开公式)**：**必做！** 理解纯量曲率 (Scalar Curvature) 如何决定测地小球体积。
*   [x] **5.9.27 (距离函数的 Hessian 展开)**：推导 $\text{Hess}(r)$ 在法坐标系下的渐近行为。
*   [x] **5.9.30 (识别法坐标系)**：从定义出发识别 Normal Coordinates 的本质。
*   [x] **⭐ 5.9.21 (函数的凸性与 Hessian)**：建立沿测地线的二阶导数与 $\text{Hess}(f)$ 的联系。

#### 🔵 第二阶段：全局几何结构 (李群与 Submersion)
*   [x] **⭐ 5.9.35 (李群上的双不变度量)**：**重中之重！** 证明测地线即单参数子群、指数映射重合。
*   [ ] **5.9.9 & 5.9.14 (齐性流形与迷向)**：等距群可递作用与 Hopf-Rinow 完备性的关系。
*   [ ] **5.9.12 (Submersion 分裂定理)**：初步接触 De Rham 分裂定理的思想。
*   [ ] **5.9.40 (射影空间的等距群)**：熟悉 $\mathbb{CP}^n, \mathbb{RP}^n, H^n$ 的构造与对称性。

#### 🟡 第三阶段：完备性与距离函数 (拓扑与度量)
*   [ ] **5.9.5 (完备开子集)**：简单的拓扑推导，注意逻辑严密性。
*   [ ] **5.9.6 (Misner 完备性)**：区分不同层次的完备性条件。
*   [ ] **5.9.10 & 5.9.11 (Warped Product 的完备性)**：**推荐！** 学会用极化乘积构造反例。
*   [ ] **5.9.18 (共形变换与完备性)**：掌握“乘上共形因子变完备”的经典技巧。
*   [ ] **⭐ 5.9.23 (到子流形的距离与 Segment)**：理解管状邻域与垂直测地线的几何。

#### 🔴 第四阶段：变分法与割迹 (Variations & Cut Locus)
*   [ ] **⭐ 5.9.34 (能量泛函的局部极小值)**：理解测地线为何在局部是“极短”的。
*   [ ] **5.9.20 & 5.9.31 (全测地子流形)**：掌握 Totally Geodesic 的判别方法。
*   [ ] **5.9.24 & 5.9.25 (割迹的计算)**：**必算！** 算出 Torus, $S^n, \mathbb{RP}^n$ 的 Cut Locus。
*   [ ] **5.9.17 (常曲率空间的射影模型)**：熟悉 Klein 模型等经典的几何实现。

---

### 🛑 快速浏览/可选跳过 (省时间区)
*如果你时间充裕可以扫一眼结论，时间紧迫建议直接跳过。*

*   [ ] **5.9.2, 5.9.3, 5.9.4** (基础坐标验算)
*   [ ] **5.9.15, 5.9.16** (距离函数梯度性质)
*   [ ] **5.9.28** (方向导数细节)
*   [ ] **5.9.29** (绝对连续曲线长度)
*   [ ] **5.9.41** (微分同胚群拓扑)
*   [ ] **5.9.1, 5.9.7, 5.9.8, 5.9.19, 5.9.26, 5.9.33** (琐碎的定义修正)
*   [ ] **5.9.13** (定理漏洞补全)

---

### 💡 考前 Check 总结

1.  **公式记忆**：
    - [ ] 熟记 $g_{ij}$ 的 Taylor 展开公式。
    - [ ] 熟记李群左不变向量场的 Levi-Civita 联络公式：$\nabla_X Y = \frac{1}{2}[X,Y]$（对于双不变度量）。
    - [ ] 熟记曲率张量公式：$R(X,Y)Z = -\frac{1}{4}[[X,Y],Z]$。
2.  **核心定理逻辑**：
    - [ ] 能口述 Hopf-Rinow 定理的几个等价条件。
    - [ ] 理解第二变分公式中曲率项的正负如何影响 Jacobi 场的聚焦（为后面的比较定理打基础）。



### 习题

> [!exercise] EXERCISE 5.9.1.
> Assume that $(M,g)$ has the property that all unit speed geodesics exist for a fixed time $\varepsilon>0$. Show that $(M,g)$ is geodesically complete.

> [!exercise] EXERCISE 5.9.2.
> Let $c:I\to(M,g)$ and $\phi:J\to I$, where $I,J$ are intervals. Show that
> $$\frac{d(c\circ\phi)}{dt}=\dot{c}\circ\phi\frac{d\phi}{dt},$$
> $$\frac{d^{2}(c\circ\phi)}{dt^{2}}=\dot{c}\circ\phi\frac{d^{2}\phi}{dt^{2}}+\ddot{c}\circ\phi\left(\frac{d\phi}{dt}\right)^{2}.$$

> [!exercise] EXERCISE 5.9.3.
> Show that if the coordinate vector fields in a chart are orthogonal ($g_{ij}=0$ for $i\neq j$), then the geodesic equations can be written as
> $$\frac{d}{dt}\left(g_{ii}\frac{dc^{i}}{dt}\right)=\frac{1}{2}\sum_{j}\frac{\partial g_{jj}}{\partial x^{i}}\left(\frac{dc^{j}}{dt}\right)^{2}.$$

> [!exercise] EXERCISE 5.9.4.
> Show that a regular curve can be reparametrized to be a geodesic if and only if the acceleration is tangent to the curve.

> [!exercise] EXERCISE 5.9.5.
> Let $O\subset(M,g)$ be an open subset of a Riemannian manifold. Show that if $(O,g)$ is complete, then $O=M$.

> [!exercise] EXERCISE 5.9.6.
> A Riemannian manifold is called **Misner complete** if every geodesic $c:(a,b)\to M$ with $b-a<\infty$ lies in a compact set. Show that Misner completeness implies completeness.

> [!exercise] EXERCISE 5.9.7.
> Consider a curve $c\in\Omega_{p,q}$ with $L(c)=|pq|$.
> 1. Show that $L(c|_{[a,b]})=|c(a)c(b)|$ for all $a,b\in[0,1]$.
> 2. Show that there is a segment $\sigma\in\Omega_{p,q}$ and a monotone function $\varphi:[0,1]\to[0,1]$ such that $c=\sigma\circ\varphi$. Note that $\varphi$ need not be smooth everywhere.

> [!exercise] EXERCISE 5.9.8.
> Let $(M,g)$ be a metrically complete Riemannian manifold and $\tilde{g}$ another metric on $M$ such that $\tilde{g}\ge g$. Show that $(M,\tilde{g})$ is also metrically complete.

> [!exercise] EXERCISE 5.9.9.
> A Riemannian manifold is said to be homogeneous if the isometry group acts transitively. Show that homogeneous manifolds are geodesically complete.

> [!exercise] EXERCISE 5.9.10.
> Consider a Riemannian metric $(M,g)=(\mathbb{R}\times N,dr^{2}+g_{r})$, where $(N,g_{r})$ is complete for all $r\in\mathbb{R}$, e.g., $(M,g)=(\mathbb{R}\times N,dr^{2}+\rho^{2}(r)g_{N})$ where $\rho:\mathbb{R}\to(0,\infty)$ and $(N,g_{N})$ is metrically complete. Show that $(M,g)$ is metrically complete.

> [!exercise] EXERCISE 5.9.11.
> Consider metrics $(M,g)=((0,\infty)\times N,dr^{2}+\rho^{2}(r)g_{N})$, where $\rho:(0,\infty)\to(0,\infty)$ and $(N,g_{N})$ is complete. Give examples that are complete and examples that are not complete.

> [!exercise] EXERCISE 5.9.12.
> Assume $F:(M,g)\to(\mathbb{R}^{k},g_{\mathbb{R}^{k}})$ is a Riemannian submersion, where $(M,g)$ is complete. Show that if each of the components of $F$ has zero Hessian, then $(M,g)=(N,h)\times(\mathbb{R}^{k},g_{\mathbb{R}^{k}})$.

> [!exercise] EXERCISE 5.9.13.
> Find and fill in the gap in the proof of theorem 5.6.16.

> [!exercise] EXERCISE 5.9.14.
> Show that a Riemannian manifold that is isotropic at every point is also homogeneous. Being isotropic at $p\in M$ means that $\operatorname{Iso}_{p}$ acts transitively on the unit sphere in $T_{p}M$.

> [!exercise] EXERCISE 5.9.15.
> Assume that we have coordinates in a Riemannian manifold so that $g_{1i}=\delta_{1i}$. Show that $x^{1}$ is a distance function.

> [!exercise] EXERCISE 5.9.16.
> Let $r:U\to\mathbb{R}$ be a distance function on an open set $U\subset(M,g)$. Define another metric $\hat{g}$ on $M$ with the property: $\hat{g}(\nabla r,v)=g(\nabla r,v)$ for all $v$, where $\nabla r$ is the gradient with respect to $g$. Show that $r$ is also a distance function with respect to $\hat{g}$.

> [!exercise] EXERCISE 5.9.17.
> The **projective models** of $S^{n}(R)$ and $H^{n}(R)$ come from projecting the spaces along straight lines through the origin to the hyperplane $x^{n+1}=R$.
> 1. Show that if $x\in\mathbb{R}^{n+1}$ and $x^{n+1}>0$, then the projected point is
> $$P(x)=R\left(\frac{x^{1}}{x^{n+1}},\dots,\frac{x^{n}}{x^{n+1}},1\right).$$
> 2. Show that geodesics on $S^{n}(R)$ and $H^{n}(R)$ are given by intersections with 2-dimensional subspaces.
> 3. Show that the upper hemisphere of $S^{n}(R)$ projects to all of $x^{n+1}=R$.
> 4. Show that $H^{n}(R)$ projects to an open disc of radius $R$ in $x^{n+1}=R$.
> 5. Show that geodesics on $S^{n}(R)$ and $H^{n}(R)$ project to straight lines in $x^{n+1}=R$.

> [!exercise] EXERCISE 5.9.18.
> Show that any Riemannian manifold $(M,g)$ admits a conformal change $(M,\lambda^{2}g)$ that is complete. Hint: Choose $\lambda:M\to[1,\infty)$ to be a proper function that grows rapidly.

> [!exercise] EXERCISE 5.9.19.
> On an open subset $U\subset\mathbb{R}^{n}$ we have the induced distance from the Riemannian metric, and also the induced distance from $\mathbb{R}^{n}$.
> 1. Give examples where $U$ isn't convex and the two distance concepts agree.
> 2. Give examples of $U$, where $\bar{U}$ is convex, but the two distance concepts do not agree.

> [!exercise] EXERCISE 5.9.20.
> Let $M\subset(\bar{M},g)$ be a submanifold. Using the $T$-tensor introduced in 2.5.25 show that $T\equiv0$ on $M$ if and only if $M\subset(\bar{M},g)$ is totally geodesic.

> [!exercise] EXERCISE 5.9.21.
> Let $f:(M,g)\to\mathbb{R}$ be a smooth function on a Riemannian manifold.
> 1. Let $c:(a,b)\to M$ be a geodesic. Compute the first and second derivatives of $f\circ c$.
> 2. Use this to show that at a local maximum (or minimum) for $f$ the gradient is zero and the Hessian nonpositive (or nonnegative).
> 3. Show that $f$ has everywhere nonnegative Hessian if and only if $f\circ c$ is convex for all geodesics $c$ in $(M,g)$.

> [!exercise] EXERCISE 5.9.22.
> Assume the volume form near a point in a Riemannian manifold is written as $\lambda(r,\theta)dr\wedge\operatorname{vol}_{n-1}$, where $\operatorname{vol}_{n-1}$ denotes the standard volume form on the unit sphere. Show that $\lambda(r,\theta)=r^{n-1}+O(r^{n+1})$.

> [!exercise] EXERCISE 5.9.23.
> Let $N\subset M$ be a properly embedded submanifold of a complete Riemannian manifold $(M,g)$.
> 1. The distance from $N$ to $x\in M$ is defined as
> $$|xN|=\inf\{|xp|\mid p\in N\}.$$
> A unit speed curve $\sigma:[a,b]\to M$ with $\sigma(a)\in N$, $\sigma(b)=x$, and $L(\sigma)=|xN|$ is called a segment from $x$ to $N$. Show that $\sigma$ is also a segment from $N$ to any $\sigma(t)$, $t<b$. Show that $\dot{\sigma}(a)$ is perpendicular to $N$.
> 2. Show that if $N$ is a closed subset of $M$ and $(M,g)$ is complete, then any point in $M$ can be joined to $N$ by a segment.
> 3. Show that in general there is an open neighborhood of $N$ in $M$ where all points are joined to $N$ by segments.
> 4. Show that $r(x)=|xN|$ is smooth on a neighborhood of $N$ with $N$ excluded.
> 5. Show that the integral curves for $\nabla r$ are the geodesics that are perpendicular to $N$.

> [!exercise] EXERCISE 5.9.24.
> Find the cut locus on a square torus $\mathbb{R}^{2}/\mathbb{Z}^{2}$.

> [!exercise] EXERCISE 5.9.25.
> Find the cut locus on a sphere and real projective space with the constant curvature metrics.

> [!exercise] EXERCISE 5.9.26.
> Show that in a Riemannian manifold,
> $$|\exp_{p}(v)\exp_{p}(w)|=|v-w|+O(r^{2}),$$
> where $|v|,|w|\le r$.

> [!exercise] EXERCISE 5.9.27.
> Consider a Riemannian manifold and let $r(x)=|xp|$. Introduce exponential normal coordinates $x^{i}$ at $p$.
> 1. Show that
> $$(\operatorname{Hess}x^{i})_{kl}=\Gamma_{kl}^{i}=O(r).$$
> 2. Use that $\frac{1}{2}r^{2}=\frac{1}{2}\sum(x^{i})^{2}$ together with $g=\delta_{ij}+O(r^{2})$ to show that
> $$\operatorname{Hess}\frac{1}{2}r^{2}=g+O(r^{2}).$$
> 3. Show that
> $$\operatorname{Hess}r=\frac{1}{r}g_{r}+O(r).$$

> [!exercise] EXERCISE 5.9.28.
> Let $(M,g)$ be a complete Riemannian manifold; $K\subset M$ a compact (or properly embedded) submanifold; and $r(x)=|xK|$ the distance function to $K$. The goal is to show that $r$ has well-defined one sided directional derivatives at all points.
> 1. Show that if $r$ is differentiable at $x\notin K$, then $\overrightarrow{xK}$ only contains one vector.
> 2. Let $c:I\to M$ be a unit speed curve. Show that if $f=r\circ c$ is differentiable at $t$, then all the vectors $\overrightarrow{c(t)K}$ form the same angle with $\dot{c}(t)$.
> 3. More generally show that
> $$\overline{D}^{+}f(t_{0})=\limsup_{t\to t_{0}^{+}}\frac{f(t)-f(t_{0})}{t-t_{0}}\le g\left(\dot{c}(t_{0}),-\overrightarrow{c(t_{0})K}\right).$$
> Hint: Use the first variation formula for a variation of the segment to $K$ with initial velocity $\overrightarrow{c(t_{0})K}$.
> 4. Show that for small $h=t-t_{0}$
> $$|c(t_{0})c(t)|=h+O(h^{2}).$$
> 5. Select a point $q$ on a segment from $c(t)$ to $K$ such that $|c(t)q|=h^{\alpha}$ where $\alpha\in(0,1)$ and let $\theta$ be the angle between $\dot{c}(t)$ and the initial direction $\overrightarrow{c(t)K}$ for the segment through $q$. For small $h=t-t_{0}>0$ justify the following:
> $$\begin{aligned} |c(t_{0})K|&\le|c(t_{0})q|+|qK| \\ &=\sqrt{h^{2\alpha}+h^{2}-2h^{1+\alpha}\cos(\pi-\theta)+O(h^{2+\alpha})}+|qK|+O(h^{2\alpha}) \\ &\le|c(t)q|+|qK|-h\cos(\pi-\theta)+\frac{1}{2}h^{2-\alpha}+O(h^{2})+O(h^{2\alpha}) \\ &=|c(t)K|-h\cos(\pi-\theta)+\frac{1}{2}h^{2-\alpha}+O(h^{2})+O(h^{2\alpha}). \end{aligned}$$
> Hint: Use 5.9.26 and part (4) to estimate $|c(t_{0})q|$.
> 6. Show that for suitable $\alpha$
> $$\underline{D}^{+}f(t_{0})=\liminf_{t\to t_{0}^{+}}\frac{f(t)-f(t_{0})}{t-t_{0}}\ge\min_{\overrightarrow{c(t_{0})K}}g\left(\dot{c}(t_{0}),-\overrightarrow{c(t_{0})K}\right).$$
> 7. Conclude that the right-hand (and left-hand) derivatives of $f$ exist everywhere.

> [!exercise] EXERCISE 5.9.29.
> In a metric space $(X,|\cdot|)$ one can measure the length of continuous curves $c:[a,b]\to X$ by
> $$L(c)=\sup\left\{\sum|c(t_{i})c(t_{i+1})|\mid a=t_{1}\le t_{2}\le\dots\le t_{k-1}\le t_{k}=b\right\}.$$
> 1. Show that a curve has finite length if it is absolutely continuous. Hint: Use the characterization that $c:[a,b]\to X$ is absolutely continuous if and only if for each $\varepsilon>0$ there is a $\delta>0$ so that $\sum|c(s_{i})c(s_{i+1})|\le\varepsilon$ provided $\sum|s_{i}-s_{i+1}|\le\delta$.
> 2. Show that the Cantor step function is a counter example to the converse of (1).
> 3. Show that this definition gives back our previous definition for smooth curves on Riemannian manifolds. In fact it will also give us the same length for absolutely continuous curves. Hint: If you know how to prove this in the Euclidean situation, then exercise 5.9.26 helps to approximate with the Riemannian metric.
> 4. Let $c:[a,b]\to M$ be an absolutely continuous curve of length $|c(a)c(b)|$. Show that $c=\sigma\circ\varphi$ for some segment $\sigma$ and monotone $\varphi:[0,L]\to[a,b]$.

> [!exercise] EXERCISE 5.9.30.
> Assume that we have coordinates $x^{i}$ around a point $p\in(M,g)$ such that $x^{i}(p)=0$ and $g_{ij}x^{j}=\delta_{ij}x^{i}$. Show that these must be exponential normal coordinates. Hint: Define $r=\sqrt{\delta_{ij}x^{i}x^{j}}$; show that it is a smooth distance function away from $p$; and that the integral curves for the gradient are geodesics emanating from $p$.

> [!exercise] EXERCISE 5.9.31.
> If $N_{1},N_{2}\subset M$ are totally geodesic submanifolds, show that each component of $N_{1}\cap N_{2}$ is a submanifold which is totally geodesic. Hint: The potential tangent space at $p\in N_{1}\cap N_{2}$ should be the Zariski tangent space $T_{p}N_{1}\cap T_{p}N_{2}$.

> [!exercise] EXERCISE 5.9.32.
> Let $F:(M,g)\to(M,g)$ be an isometry that fixes $p\in M$. Show that $DF|_{p}=-I$ on $T_{p}M$ if and only if $F^{2}=\operatorname{id}_{M}$ and $p$ is an isolated fixed point.

> [!exercise] EXERCISE 5.9.33.
> Show that for a complete manifold the functional distance is the same as the distance.

> [!exercise] EXERCISE 5.9.34.
> Let $c:[0,1]\to M$ be a geodesic such that $\exp_{c(0)}$ is regular at all $t\dot{c}(0)$ with $t\le1$. Show that $c$ is a local minimum for the energy functional. Hint: Show that the lift of $c$ via $\exp_{c(0)}$ is a minimizing geodesic in the pull-back metric.

> [!exercise] EXERCISE 5.9.35.
> Consider a Lie group $G$ with a biinvariant pseudo-Riemannian metric.
> 1. Show that homomorphisms $\mathbb{R}\to G$ are precisely the integral curves for left-invariant vector fields through $e\in G$.
> 2. Show that geodesics through the identity are exactly the homomorphisms $\mathbb{R}\to G$. Conclude that the Lie group exponential map coincides with the exponential map generated by the biinvariant Riemannian metric. The Lie theoretic exponential map $\exp:T_{e}G\to G$ is precisely the map that takes $v\in T_{e}G$ to $c(1)$, where $c:\mathbb{R}\to G$ is the integral curve with $c(0)=e$ for the left-invariant field generated by $v$.
> 3. Show that when the metric is Riemannian, then every element in $x\in G$ has a square root $y\in G$ with $y^{2}=x$. Hint: This uses metric completeness.
> 4. Show that $\operatorname{SL}(n,\mathbb{R})$ does not admit a biinvariant Riemannian metric and compare this to exercise 1.6.28.

> [!exercise] EXERCISE 5.9.36.
> Show that a Riemannian submersion is a submetry.

> [!exercise] EXERCISE 5.9.37 (HERMANN).
> Let $F:(M,g_{M})\to(N,g_{N})$ be a Riemannian submersion.
> 1. Show that $(N,g_{N})$ is complete if $(M,g_{M})$ is complete.
> 2. Show that $F$ is a fibration if $(M,g_{M})$ is complete i.e., for every $p\in N$ there is a neighborhood $p\in U$ such that $F^{-1}(U)$ is diffeomorphic to $U\times F^{-1}(p)$. Give a counterexample when $(M,g_{M})$ is not complete.

> [!exercise] EXERCISE 5.9.38.
> Let $S$ be a set of orientation preserving isometries on a Riemannian manifold $(M,g)$. Show that if all elements in $S$ commute with each other, then each component of $\operatorname{Fix}(S)$ has even codimension.

> [!exercise] EXERCISE 5.9.39.
> A local diffeomorphism $F:(M,g_{M})\to(N,g_{N})$ is said to be **affine** if $F_{*}(\nabla_{X}^{M}Y)=\nabla_{F_{*}(X)}^{N}F_{*}(Y)$ for all vector fields $X,Y$ on $M$.
> 1. Show that affine maps take geodesics to geodesics.
> 2. Show that given $p\in M$ an affine map $F$ is uniquely determined by $F(p)$ and $DF|_{p}$.
> 3. Give an example of an affine map $\mathbb{R}^{n}\to\mathbb{R}^{n}$ that isn't an isometry.

> [!exercise] EXERCISE 5.9.40.
> Consider the real or complex projective space $\mathbb{FP}^{n}$.
> 1. Show that $\operatorname{GL}(n+1,\mathbb{F})$ acts on $\mathbb{FP}^{n}$ by mapping 1-dimensional subspaces in $\mathbb{F}^{n+1}$ to 1-dimensional subspaces.
> 2. Let $H\subset\operatorname{GL}(n+1,\mathbb{F})$ be the transformations that act trivially. Show that $H=\{\lambda I_{n+1}\mid\lambda\in\mathbb{F}\}$ and is a normal subgroup of $\operatorname{GL}(n+1,\mathbb{F})$.
> 3. Define $\operatorname{PGL}(n+1,\mathbb{F})=\operatorname{GL}(n+1,\mathbb{F})/H$. Show that given $p\in\mathbb{FP}^{n}$ each element $F\in\operatorname{PGL}(n+1,\mathbb{F})$ is uniquely determined by $F(p)$ and $DF|_{p}$.
> 4. Show that there is no Riemannian metric on $\mathbb{FP}^{n}$ such that this action is by isometries.
> 5. Show that the action is by affine transformations with respect to the standard (submersion) metric on $\mathbb{FP}^{n}$ (see exercise 5.9.39 for the definition of affine transformations).
> 6. For a subgroup $G\subset\operatorname{GL}$, define $PG=G/H\cap G$. Show that the isometry group of $\mathbb{RP}^{n}$ is given by $\operatorname{PO}(n+1)$.
> 7. Show that the isometry group of $\mathbb{CP}^{n}$ is given by $\operatorname{PU}(n+1)$.
> 8. Show that the isometry group of $H^{n}(R)$ can be naturally identified with $\operatorname{PO}(n,1)$.
> 9. As in exercise 1.6.9 consider $\operatorname{Iso}(\mathbb{R}^{n})$ as the matrix group
> $$G=\left\{\begin{bmatrix}O&v\\0&1\end{bmatrix}\mid O\in\operatorname{O}(n),~v\in\mathbb{R}^{n}\right\}\subset\operatorname{GL}(n+1,\mathbb{R}).$$
> Show that $PG=G$.

> [!exercise] EXERCISE 5.9.41.
> Let $\operatorname{Diff}(M)$ denote the group of diffeomorphisms on a manifold. Define $\operatorname{Diff}(M;K,O)=\{F\in\operatorname{Diff}(M)\mid F(K)\subset O\}$.
> 1. Show that finite intersections of $\operatorname{Diff}(M;K,O)$ where $K$ is always compact and $O$ open define a topology. This is the **compact-open topology**.
> 2. Show that the compact-open topology is second countable.
> 3. When $M$ has a Riemannian structure, show that convergence in the compact-open topology is the same as uniform convergence on compact sets.
> 4. Show that a sequence in $\operatorname{Iso}(M,g)$ converges in the compact-open topology if and only if it converges pointwise. Hint: Use the Arzela-Ascoli lemma.
> 5. Show that $\operatorname{Iso}(M,g)$ is always locally compact in the compact-open topology. Hint: Use the Arzela-Ascoli lemma.
> 6. Show that $\operatorname{Iso}_{p}(M,g)$ is always compact in the compact-open topology.
> 7. Show that $\operatorname{Iso}(M,g)$ defines a proper action on $M$.
> 8. Show that for fixed $p$ the evaluation map $F\mapsto(F(p),DF|_{p})$ is continuous on $\operatorname{Iso}(M,g)$. Note that $DF|_{p}:T_{p}M\to TM$ so that convergence of the values of the evaluation map makes sense. Hint: Start by showing that $F\mapsto(F(p),F(p_{1}),\dots,F(p_{n}))$ is continuous.
> 9. Show that the evaluation map in (8) is a homeomorphism on to its image when restricted to $\operatorname{Iso}(M,g)$.

> [!exercise] EXERCISE 5.9.42.
> Consider exponential normal coordinates around $p\in M$, i.e., $\delta_{ij}x^{j}=g_{ij}x^{j}$ and $x^{i}(p)=0$. All calculations below are at $p$.
> 1. Show that the second partials of the metric satisfy the Bianchi identity
> $$\partial_{l}\partial_{k}g_{ji}+\partial_{j}\partial_{l}g_{ki}+\partial_{k}\partial_{j}g_{li}=0.$$
> Hint: Take three derivatives of the defining relation $x^{i}=\sum_{s}g_{is}x^{s}$ as in lemma 5.5.7.
> 2. Use all four of these Bianchi identities with the last index being $i,j,k$, or $l$ to conclude
> $$\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}.$$
> 3. Use the formula for the curvature tensor in normal coordinates from section 3.1.6 to show
> $$R_{ikjl}=\partial_{i}\partial_{j}g_{kl}-\partial_{i}\partial_{l}g_{jk}.$$
> 4. Use (3) and (1) to show
> $$\partial_{i}\partial_{j}g_{kl}=\frac{1}{3}(R_{ikjl}+R_{jkil}).$$
> 5. Show that we have a Taylor expansion
> $$g_{kl}=\delta_{kl}+\frac{1}{3}R_{ikjl}x^{i}x^{j}+O(|x|^{3}).$$
> 6. (**Riemann**) Use the symmetries of the curvature tensor to conclude
> $$\begin{aligned} g&=\sum_{k,l=1}^{n}g_{kl}dx^{k}dx^{l} \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{12}\sum_{i,j,k,l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \end{aligned}$$
> 7. (**Gauss**) Show that in dimension 2 we have
> $$\begin{aligned} g&=dx^{2}+dy^{2}+\frac{1}{3}R_{1212}(xdy-ydx)^{2}+o(x^{2}+y^{2}) \\ &=dx^{2}+dy^{2}-\frac{1}{3}\sec(p)(xdy-ydx)^{2}+o(x^{2}+y^{2}). \end{aligned}$$
> Riemann's construction of the curvature tensor proceeded as follows: Start with the normal coordinates, next use the radial isometry property to conclude that the Taylor expansion has the form
> $$g=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}C_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3})$$
> for some tensor $C$. This tensor has some obvious symmetry properties from the form of the expansion. It is possible to calculate it from the derivatives $\partial_{i}\partial_{j}g_{kl}$ provided they satisfy $\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}$. Finally, one has to show that this property is equivalent to the assertion that the above expansion is possible.

> [!exercise] EXERCISE 5.9.43.
> With notation as in the previous exercise show:
> 1. $\sqrt{\det(g_{kl})}=1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+O(|x|^{3})$.
> 2. (**A. Gray**) $\operatorname{vol}B(p,r)=\omega_{n}r^{n}\left(1-\frac{\operatorname{scal}(p)}{6(n+2)}r^{2}+O(r^{3})\right)$, where $\omega_{n}=\operatorname{vol}(B(0,1)\subset\mathbb{R}^{n})$. Hint: Use (1) and expand the integral using polar coordinates.