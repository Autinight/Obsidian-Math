# 4.7 习题优先级（丘赛 / 几何方向）

## High（必做）
- [ ] 4.7.3 射影空间：等距作用、点反射、推出 $\nabla R = 0$
  - [ ] 先做 $\mathbb{CP}^n$ 部分
  - [ ] 有时间再补 $\mathbb{HP}^n$ 部分
- [ ] 4.7.4 若 $\operatorname{Hess} f = \lambda(x) g + \mu(f)\, df^2$，证明度量局部是 warped product
- [ ] 4.7.5 若 $\operatorname{Hess} f = \lambda g$，证明 $\lambda = \dfrac{\Delta f}{\dim M}$
- [ ] 4.7.6 若 $S(X) = \nabla_X \nabla f$ 的特征值个数 $\le 2$，证明度量局部是 warped product
- [ ] 4.7.9 Riemannian product：曲率分解、Einstein 条件、Weyl 张量
- [ ] 4.7.10 warped product 的常曲率条件；双曲空间的两种 warped product 表示
- [ ] 4.7.12 warped product 的显式曲率公式、$W = 0$、Schouten 的 Codazzi 性质
- [x] 4.7.13(4)(5) 球面/双曲空间的 stereographic projection 与共形模型
- [ ] 4.7.14 conformal change 公式：$\tilde{\nabla}$、$\tilde{R}$、$\widetilde{\operatorname{Ric}}$、$\widetilde{\operatorname{scal}}$、$\tilde{W}$
- [ ] 4.7.17 局部共形平坦、Einstein + LCF $\Rightarrow$ 常曲率、二维等温坐标
- [ ] 4.7.18 Schouten 判据：局部共形平坦的刻画

## Medium（选做）
- [ ] 4.7.7 Riemannian submersion 的 $A/T$ 张量
- [ ] 4.7.8 submersion 下的 horizontal / mixed curvature 公式
- [ ] 4.7.11 由 Einstein 基底构造 Einstein warped product
- [ ] 4.7.16 Static Einstein equations
- [ ] 4.7.19 4.7.18 的 integrability / converse
- [ ] 4.7.20 $N^2 \times \mathbb{R}$ 的 conformally flat 判据
- [ ] 4.7.21 常曲率度量的局部共形因子显式表达
- [ ] 4.7.22 Heisenberg 群上的左不变度量：Ricci、scalar curvature、Ricci 不平行
- [ ] 4.7.26 orthogonal coordinates 的存在性与曲率障碍
- [ ] 4.7.28 四维 Hodge 分解、$W^\pm$、曲率算子分块

## Low（有余力再做 / 偏拓展）
- [ ] 4.7.1 Schwarzschild metric 不满足 $\nabla R = 0$
- [ ] 4.7.2 Berger spheres（$\varepsilon \ne 1$）不满足 $\nabla R = 0$
- [ ] 4.7.15 Schwarzschild metric 的坐标/共形改写
- [ ] 4.7.23 Eguchi--Hanson metric
- [ ] 4.7.24 该类 metric 的 Hermitian / Kähler / scalar flat 性质
- [ ] 4.7.25 $\tau(\mathbb{RP}^{n-1})$ 上 $\operatorname{Ric} \le 0$ 的构造
- [ ] 4.7.27 Schwarzschild 与 Eguchi--Hanson 的 Weyl 非零

## 推荐首刷顺序
- [ ] 第一主线：4.7.13 $\to$ 4.7.14 $\to$ 4.7.17 $\to$ 4.7.18
- [ ] 第二主线：4.7.4 $\to$ 4.7.5 $\to$ 4.7.6 $\to$ 4.7.9 $\to$ 4.7.10 $\to$ 4.7.12
- [ ] 第三主线：4.7.3

> [!exercise] Exercise 4.7.1:
> Show that the Schwarzschild metric does not have parallel curvature tensor.

> [!exercise] Exercise 4.7.2:
> Show that the Berger spheres $(\varepsilon\neq1)$ do not have parallel curvature tensor.

> [!exercise] Exercise 4.7.3:
> This exercise covers a few interesting aspects of projective spaces.
>
> 1. Show that $\operatorname{U}(n+1)$ acts by isometries on $\mathbb{CP}^n$. Hint: Use that $\operatorname{U}(n+1)$ acts by isometries on $S^{2n+1}(1)$ and commutes with the quotient action that creates $\mathbb{CP}^n$.
> 2. Show that for each $p\in\mathbb{CP}^n$ there is an isometry $A_p\in\operatorname{Iso}_p$ with $DA_p|_p=-I$.
> 3. Use the fact that isometries leave $\nabla$ and $R$ invariant to show that $\nabla R=0$.
> 4. Repeat 1, 2, 3 for $\mathbb{HP}^n$ using the **symplectic group** $\operatorname{Sp}(n+1)$ of matrices with quaternionic entries satisfying $A^*A=I$, where $A^*={}^{t}\bar{A}$. See also exercise 1.6.22 for more on quaternions.

> [!exercise] Exercise 4.7.4:
> Assume that a Riemannian manifold $(M,g)$ has a function $f$ such that
> $$\operatorname{Hess}f=\lambda(x)g+\mu(f)\,df^2,$$
> where $\lambda:M\to\mathbb{R}$ and $\mu:\mathbb{R}\to\mathbb{R}$. Show that the metric is locally a warped product.

> [!exercise] Exercise 4.7.5:
> Show that if $\operatorname{Hess}f=\lambda g$, then $\lambda=\frac{\Delta f}{\dim M}$.

> [!exercise] Exercise 4.7.6:
> Consider a function $f$ on a Riemannian manifold $(M,g)$ so that $\nabla f\neq 0$ and $\nabla f$ is an eigenvector for $S(X)=\nabla_X\nabla f$. Show that if $S$ has $\leq 2$ eigenvalues, then the metric is locally a warped product metric.

> [!exercise] Exercise 4.7.7:
> For a Riemannian submersion as in section 4.5 define the $A$-tensors
>
> $$A_{\bar{X}}\bar{Y}=[\bar{\nabla}_{\bar{X}}\bar{Y}]^{\mathscr{V}},$$
>
> $$A_{\bar{X}}V=[\bar{\nabla}_{\bar{X}}V]^{\mathscr{H}}.$$
>
> We also have the $T$-tensor from exercises 2.5.26 and 2.5.25 but our notation for horizontal and vertical fields is the reverse of tangent and normal fields from those exercises. Note that both $A_{\bar{X}}$ and $T_V$ make sense. We can extend both tensors by declaring $A_V=0$ and $T_{\bar{X}}=0$ and thus obtain $(1,2)$-tensors on $\bar{M}$.
>
> 1. Show that both $A$-tensors are tensorial.
> 2. Show that $A_{\bar{X}}\bar{Y}=\frac{1}{2}[\bar{X},\bar{Y}]^{\mathscr{V}}$.
> 3. Show that $\bar{g}(A_{\bar{X}}\bar{Y},V)=-\bar{g}(\bar{Y},A_{\bar{X}}V)$.
> 4. Show that $(\nabla_VA)_W=-A_{T_VW}$ and $(\nabla_XA)_W=-A_{A_XW}$.
> 5. Show that $(\nabla_{\bar{X}}T)_{\bar{Y}}=-T_{A_{\bar{X}}\bar{Y}}$ and $(\nabla_VT)_{\bar{Y}}=-T_{T_V\bar{Y}}$.
> 6. Show that
>
> $$\bar{g}((\nabla_UA)_{\bar{X}}V,W)=\bar{g}(T_UV,A_{\bar{X}}W)-\bar{g}(T_UW,A_{\bar{X}}V).$$

> [!exercise] Exercise 4.7.8:
> This exercise builds on the previous exercise. The Gauss equations explain how to calculate the curvature tensor on vectors tangent to the fibers of a submersion. Show that horizontal and **verti-zontal** curvatures can be calculated by the formulas
>
> $$\bar{R}(\bar{Y},\bar{X},\bar{X},\bar{Y})=R(Y,X,X,Y)-3|A_{\bar{X}}\bar{Y}|^2$$
>
> and
>
> $$\bar{R}(V,\bar{X},\bar{X},V)=\bar{g}((\nabla_{\bar{X}}T)_VV,\bar{X})+|A_{\bar{X}}V|^2-|T_V\bar{X}|^2.$$
>
> Compare the last formula to the radial curvature equation.


> [!exercise] Exercise: 4.7.9
> Let $(M, g) = (M_1 \times M_2, g_1 + g_2)$ be a Riemannian product manifold.
>
> 1. Show that $R = R_1 + R_2$, where $R_i$ is the curvature tensor of $(M_i, g_i)$ pulled back to $M$.
> 2. Assume for the remainder of this exercise that $(M_i, g_i)$ has constant curvature $c_i$. Show that $R = c_1 g_1 \mathbin{\circ} g_1 + c_2 g_2 \mathbin{\circ} g_2$.
> 3. Show that $(M, g)$ is Einstein if and only if $(n_1 - 1)c_1 = (n_2 - 1)c_2$, where $n_i = \dim M_i$.
> 4. Show that the Weyl tensor for $(M, g)$ vanishes when either $c_1 = -c_2$, $n_1 = 1$, or $n_2 = 1$. Hint: Calculate $(g_1 - g_2) \mathbin{\circ} (g_1 + g_2)$ and compare it to $R$.
> 5. Show that if none of the conditions in (4) hold, then the Weyl tensor does not vanish.

> [!exercise] Exercise: 4.7.10
> Let $(M^n, g) = (I \times N, dr^2 + \rho^2(r) g_N)$ be a warped product metric with constant curvature $k$.
>
> 1. Show that $(N^{n-1}, \rho^2(r) g_N)$ has constant curvature $k + \left(\frac{\dot{\rho}}{\rho}\right)^2$ if $n > 2$.
> 2. Show explicitly that hyperbolic space can be represented as a warped product over both hyperbolic space and Euclidean space.

> [!exercise] Exercise: 4.7.11
> Consider an Einstein metric $(N^{n-1}, g_N)$ with $\operatorname{Ric} = \frac{\lambda}{n-1} g_N$, $\lambda < 0$. Find a $\rho:\mathbb{R}\to(0,\infty)$ such that $(M^n, g) = (\mathbb{R}\times N, dr^2 + \rho^2(r) g_N)$ becomes an Einstein metric with $\operatorname{Ric} = \lambda g$.


> [!exercise] Exercise: 4.7.12
> Let $(N^{n-1},g_N)$ have constant curvature $c$ with $n>2$. Consider the warped product metric $(M,g)=(I\times N,dr^2+\rho^2(r)g_N)$.
>
> 1. Show that the curvature of $g$ is given by
> $$\begin{aligned}
> R&=\frac{c-\dot{\rho}^{\,2}}{\rho^2}g_r\circ g_r-2\frac{\ddot{\rho}}{\rho}dr^2\circ g_r\\
> &=\frac{c-\dot{\rho}^{\,2}}{\rho^2}g\circ g-2\left(\frac{\ddot{\rho}}{\rho}+\frac{c-\dot{\rho}^{\,2}}{\rho^2}\right)dr^2\circ g.
> \end{aligned}$$
>
> 2. Show that the Weyl tensor vanishes.
>
> 3. Show directly that the Schouten tensor satisfies:
> $$(\nabla_XP)(Y,Z)=(\nabla_YP)(X,Z).$$
>
> See also exercise 3.4.26 for an indirect approach when $n>3$.

> [!exercise] Exercise: 4.7.13
> The stereographic projection of $x^{n+1}=0$ to a hypersurface $M\subset\mathbb{R}^n\times\mathbb{R}$ that is transverse to the lines emanating from $-e_{n+1}=(0,\ldots,0,-1)$ is given by $x\mapsto S(x)$ where $x\in\mathbb{R}^n$ and
> $$S(x)=-e_{n+1}+\lambda(x)\bigl(e_{n+1}+(x,0)\bigr).$$
>
> 4. When $M=S^n(1)$ show that $\lambda(1+|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $S^n(1)$ is given by
> $$\frac{4}{(1+|x|^2)^2}g_{\mathbb{R}^n}.$$
>
> 5. When $M=H^n(1)\in\mathbb{R}^{n,1}$ show that $\lambda(1-|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $H^n(1)$ is Poincaré disc
> $$\frac{4}{(1-|x|^2)^2}g_{\mathbb{R}^n}.$$

> [!exercise] Exercise: 4.7.14
> Let $\tilde{g}=e^{2\psi}g$ be a metric conformally equivalent to $g$ and a $\tilde{\ }$ referring to metric objects in the conformally changed metric.
>
> 1. Show that
> $$\tilde{\nabla}_XY=\nabla_XY+(D_X\psi)Y+(D_Y\psi)X-g(X,Y)\nabla\psi.$$
>
> 2. With notation as in exercise 3.4.23 show that
> $$\begin{aligned}
> e^{-2\psi}\tilde{R}&=R-2\bigl(\operatorname{Hess}\psi-(d\psi)^2\bigr)\circ g-|d\psi|^2g\circ g\\
> &=R-\bigl(2\operatorname{Hess}\psi-2(d\psi)^2+|d\psi|^2g\bigr)\circ g.
> \end{aligned}$$
>
> 3. If $X,Y$ are orthonormal with respect to $g$, show that
> $$e^{2\psi}\widetilde{\operatorname{sec}}(X,Y)=\operatorname{sec}(X,Y)-\operatorname{Hess}\psi(X,X)-\operatorname{Hess}\psi(Y,Y)+(D_X\psi)^2+(D_Y\psi)^2-|d\psi|^2.$$
>
> 4. Show that
> $$\widetilde{\operatorname{Ric}}=\operatorname{Ric}-(n-2)\bigl(\operatorname{Hess}\psi-d\psi^2\bigr)-\bigl(\Delta\psi+(n-2)|d\psi|^2\bigr)g.$$
>
> 5. Show that
> $$e^{2\psi}\widetilde{\operatorname{scal}}=\operatorname{scal}-2(n-1)\Delta\psi-(n-1)(n-2)|d\psi|^2.$$
>
> 6. Using exercise 3.4.25 show that
> $$e^{-2\psi}\tilde{W}=W.$$
>
> This is referred to as the conformal invariance of the Weyl tensor under conformal changes and was discovered by Weyl.


> [!exercise] Exercise: 4.7.15
> Show that
> 
> $$\left(\frac{1}{4}\rho_0^{n-2}+r^{2-n}\right)^{\frac{4}{n-2}}g_{\mathbb{R}^n}=\frac{1}{1-\left(\frac{\rho_0}{\rho}\right)^{n-2}}\,d\rho^2+\rho^2ds_{n-1}^2,$$
> 
> where the right-hand side is the scalar flat metric from section 4.2.3. Use this to rewrite the Schwarzschild metric from section 4.2.5 as
> 
> $$\left(\frac{1}{4}\rho_0^{n-3}+r^{3-n}\right)^{\frac{4}{n-3}}g_{\mathbb{R}^{n-1}}+\rho_0^2\frac{4}{(n-3)^3}\left(\frac{\frac{1}{4}\rho_0^{n-3}-r^{3-n}}{\frac{1}{4}\rho_0^{n-3}+r^{3-n}}\right)^2d\theta^2.$$

> [!exercise] Exercise: 4.7.16
> **Static Einstein Equations**. Consider a metric of the form
> 
> $$(M,g)=(N\times\mathbb{R},g_N+w^2dt^2),$$
> 
> where $w:N\to(0,\infty)$ and $\dim N=n-1$. Let $X,Y,Z$ be vector fields on $N$. Note that they can also be considered as vector fields on $M$.
> 
> 1. Show that $\nabla_X^N Y=\nabla_X^M Y$ and $R^N(X,Y)Z=R^M(X,Y)Z$. Conclude that $\operatorname{Ric}^M(X,\partial_t)=0$.
> 2. Show the vector field $\partial_t$ satisfies $|\partial_t|^2=w^2$ in $(M,g)$.
> 3. Show that
> 
> $$\nabla_{\partial_t}^M\partial_t=-w\nabla w\quad\text{and}\quad\nabla_X^M\partial_t=\nabla_{\partial_t}^M X=\frac{1}{w}(D_Xw)\partial_t.$$
> 
> Hint: Show that $g\left(\nabla_{\partial_t}^M\partial_t,\partial_t\right)=0$ and calculate $D_X|\partial_t|^2$.
> 
> 4. Show that
> 
> $$R^M(X,\partial_t)\partial_t=-w\nabla_X\nabla w,$$
> 
> and
> 
> $$\operatorname{Ric}^M(\partial_t,\partial_t)=-w\Delta w,$$
> 
> $$\operatorname{Ric}^M(X,X)=\operatorname{Ric}^N(X,X)-\frac{1}{w}\operatorname{Hess}w(X,X).$$
> 
> 5. Show that $\operatorname{Ric}^M=\lambda g,\lambda\in\mathbb{R}$, if and only if
> 
> $$\operatorname{Ric}^N-\frac{1}{w}\operatorname{Hess}w=\lambda g_N,$$
> 
> $$w\Delta w+\lambda w^2=0,$$
> 
> if and only if
> 
> $$\operatorname{Ric}^N-\frac{1}{w}\operatorname{Hess}w=\lambda g_N,$$
> 
> $$\operatorname{scal}^N=(n-2)\lambda.$$

> [!exercise] Exercise: 4.7.17
> A Riemannian manifold $(M,g)$ is said to be **locally conformally flat** if every $p\in M$ lies in a coordinate neighborhood $U$ where
> 
> $$g=e^{-2\psi}\left((dx^1)^2+\cdots+(dx^n)^2\right).$$
> 
> 6. Show that the space forms $S_k^n$ with metrics $dr^2+\operatorname{sn}_k^2(r)\,ds_{n-1}^2$ are locally conformally flat.
> 7. Show that if an Einstein metric is locally conformally flat, then it has constant curvature.
> 8. When $n=2$ Gauss showed that such coordinates always exit. They are called **isothermal coordinates**. Assume that $\dim M=2$.
>    1. Show that if $du\neq0$ on some open subset $O\subset M$, then up to sign there is a unique $1$-form $\omega=i_{\nabla u}\operatorname{vol}_g$ that satisfies: $|du|=|\omega|$ and $g(du,\omega)=0$.
>    2. Show that $d\omega=(\Delta_gu)\operatorname{vol}_g$.
>    3. Show that isothermal coordinates exit provided that for each $p\in M$ it is possible to find $u$ on a neighborhood of $p$ so that $\Delta_gu=0$ and $du|_p\neq0$.

> [!exercise] Exercise: 4.7.18
> **Schouten 1921**. Let $(M,g)$ be a Riemannian manifold of dimension $n>2$.
> 
> 1. Show that $g$ is locally conformally flat if and only if $W=0$ and locally there is a function $\psi$ so that
> 
> $$P=2\operatorname{Hess}\psi-2(d\psi)^2+|d\psi|^2g.$$
> 
> Note that the condition $W=0$ is redundant when $n=3$. Hint: You have to use the curvature characterization of being locally Euclidean (see exercise 3.4.20 or theorem 5.5.8).
> 
> 2. Show that if $g$ is locally conformally flat then
> 
> $$(\nabla_XP)(Y,Z)=(\nabla_YP)(X,Z).$$
> 
> Hint: When $n>3$, this follows from exercise 3.4.26. When $n\geq3$, use that $R=P\odot g$, the specific form of $P$ from (1), and show that
> 
> $$(\nabla_X\operatorname{Hess}\psi)(Y,Z)-(\nabla_Y\operatorname{Hess}\psi)(X,Z)=R(X,Y,\nabla\psi,Z).$$


> [!exercise] Exercise: 4.7.19
> In this exercise assume that we have a Riemannian manifold of dimension $n>2$ such that $W=0$ and $(\nabla_XP)(Y,Z)=(\nabla_YP)(X,Z)$.
>
> 1. Show that if there is a 1-form $\omega$ such that
> $$\nabla\omega=\frac{1}{2}P+\omega^2-\frac{1}{2}|\omega|^2g,$$
> then locally $\omega=d\psi$ and $P=2\operatorname{Hess}\psi-2(d\psi)^2+|\nabla\psi|^2g$.
> 2. The integrability condition for finding such an $\omega$ in the sense of exercise 3.4.20 can be stated using only covariant derivatives. On the left-hand side we take one more derivative $\nabla_{X,Y}^2\omega$ and use the Ricci formula for commuting covariant derivatives as an alternative to Clairaut's theorem on partial derivatives:
> $$\nabla_{X,Y}^2\omega-\nabla_{Y,X}^2\omega=R_{X,Y}\omega.$$
> Show that if $\nabla\omega=\frac{1}{2}P+\omega^2-\frac{1}{2}|\omega|^2g$, then
> $$\begin{aligned}
> (\nabla_{X,Y}^2\omega)(Z)&=\frac{1}{2}(\nabla_XP)(Y,Z)\\
> &\quad+(\nabla_X\omega)(Y)\omega(Z)+\omega(Y)(\nabla_X\omega)(Z)\\
> &\quad-g(\nabla_X\omega,\omega)g(Y,Z).
> \end{aligned}$$
> 3. Use $\nabla\omega=\frac{1}{2}P+\omega^2-\frac{1}{2}|\omega|^2g$ again to show that
> $$\begin{aligned}
> \nabla_{X,Y}^2\omega-\nabla_{Y,X}^2\omega
> &=\frac{1}{2}P(X,Z)\omega(Y)-\frac{1}{2}P(X,V)g(Y,Z)\\
> &\quad-\frac{1}{2}P(Y,Z)\omega(X)+\frac{1}{2}P(Y,V)g(X,Z)\\
> &=(P\circ g)(X,Y,V,Z),
> \end{aligned}$$
> where $V$ is the vector field dual to $\omega$.
> 4. Now use $R=P\circ g$ to show that
> $$(R_{X,Y}\omega)(Z)=(P\circ g)(X,Y,V,Z).$$
> 5. Finally, show that this implies that the integrability conditions for solving for $\omega$ are satisfied and conclude that the manifold is locally conformally flat.

> [!exercise] Exercise: 4.7.20
> Consider a product metric $(N^2\times\mathbb{R},g_N+g_{\mathbb{R}})$.
>
> 1. Show that $P_{N\times\mathbb{R}}=\frac{\operatorname{scal}_N}{2}(g_N-g_{\mathbb{R}})$.
> 2. Show that this product metric is conformally flat if and only if $\operatorname{scal}_N$ is constant.

> [!exercise] Exercise: 4.7.21
> Let $(M^n,g)$, $n>2$ have constant curvature $k$.
>
> 1. Use exercise 4.7.19 to show that the metric is locally conformally flat.
> 2. Show that if $g=e^{-2\psi}\big((dx^1)^2+\cdots+(dx^n)^2\big)$, then
> $$2e^\psi\partial_i\partial_je^\psi=\left(k+\sum(\partial_ke^\psi)^2\right)\delta_{ij}.$$
>
> Hint: Use part 2 of 4.7.14.
> 3. Show that
> $$e^\psi=a+\sum b_ix^i+c\sum(x^i)^2,$$
> where $k=4ac-\sum b_i^2$.

> [!exercise] Exercise: 4.7.22
> The **Heisenberg** group with its Lie algebra is
> $$G=\left\{\begin{bmatrix}1&a&c\\0&1&b\\0&0&1\end{bmatrix}\mid a,b,c\in\mathbb{R}\right\},$$
> $$\mathfrak{g}=\left\{\begin{bmatrix}0&x&z\\0&0&y\\0&0&0\end{bmatrix}\mid a,b,c\in\mathbb{R}\right\}.$$
>
> A basis for the Lie algebra is:
> $$X=\begin{bmatrix}0&1&0\\0&0&0\\0&0&0\end{bmatrix},\quad Y=\begin{bmatrix}0&0&0\\0&0&1\\0&0&0\end{bmatrix},\quad Z=\begin{bmatrix}0&0&1\\0&0&0\\0&0&0\end{bmatrix}.$$
>
> 1. Show that the only nonzero brackets are
> $$[X,Y]=-[Y,X]=Z.$$
>
> Now introduce a left-invariant metric on $G$ such that $X,Y,Z$ form an orthonormal frame.
>
> 2. Show that the Ricci tensor has both negative and positive eigenvalues.
> 3. Show that the scalar curvature is constant.
> 4. Show that the Ricci tensor is not parallel.

> [!exercise] Exercise: 4.7.23
> Consider metrics of the form
> $$dr^2+\rho^2(r)\left(\phi^2(r)(\sigma^1)^2+(\sigma^2)^2+(\sigma^3)^2\right).$$
>
> 1. Show that if
> $$\begin{aligned}
> \dot{\rho}&=\phi,\\
> \dot{\rho}^2&=1-k\rho^{-4},\\
> \rho(0)&=k^{\frac14},\ \dot{\rho}(0)=0,\\
> \phi(0)&=0,\ \dot{\phi}(0)=2,
> \end{aligned}$$
> then we obtain a family of Ricci flat metrics on $TS^2$.
>
> 2. Show that $\rho(r)\sim r$, $\dot{\rho}(r)\sim 1$, $\ddot{\rho}(r)\sim 2kr^{-5}$ as $r\to\infty$. Conclude that all curvatures are of order $r^{-6}$ as $r\to\infty$ and that the metric looks like $(0,\infty)\times\mathbb{RP}^3=(0,\infty)\times\operatorname{SO}(3)$ at infinity. Moreover, show that scaling one of these metrics corresponds to changing $k$. Thus, we really have only one Ricci flat metric; it is called the Eguchi-Hanson metric.

> [!exercise] Exercise: 4.7.24
> For the general metric
> $$dr^2+\rho^2(r)\left(\phi^2(r)(\sigma^1)^2+(\sigma^2)^2+(\sigma^3)^2\right)$$
> show that the $(1,1)$-tensor, which in the orthonormal frame looks like
> $$\begin{bmatrix}
> 0&-1&0&0\\
> 1&0&0&0\\
> 0&0&0&-1\\
> 0&0&1&0
> \end{bmatrix},$$
> yields a Hermitian structure.
>
> 1. Show that this structure is Kähler, i.e., parallel, if and only if $\dot{\rho}=\phi$.
> 2. Find the scalar curvature for such metrics.
> 3. Show that there are scalar flat metrics on all the $2$-dimensional vector bundles over $S^2$. The one on $TS^2$ is the Eguchi-Hanson metric, and the one on $S^2\times\mathbb{R}^2$ is the Schwarzschild metric.

> [!exercise] Exercise: 4.7.25
> Show that $\tau(\mathbb{RP}^{n-1})$ admits rotationally symmetric metrics
> $$dr^2+\rho^2(r)ds_{n-1}^2$$
> such that $\rho(r)=r$ for $r>1$ and the Ricci curvatures are nonpositive. Thus, the Euclidean metric can be topologically perturbed to have nonpositive Ricci curvature. It is not possible to perturb the Euclidean metric in this way to have nonnegative scalar curvature or nonpositive sectional curvature. Try to convince yourself of that by looking at rotationally symmetric metrics on $\mathbb{R}^n$ and $\tau(\mathbb{RP}^{n-1})$.


> [!exercise] Exercise: 4.7.26
> We say that $(M,g)$ admits **orthogonal coordinates** around $p\in M$ if we have coordinates on some neighborhood of $p$, where
> 
> $$g_{ij}=0\text{ for }i\ne j,$$
> 
> i.e., the coordinate vector fields are perpendicular. Show that such coordinates always exist in dimension $2$, while they may not exist in dimension $>3$. To find a counterexample, you may want to show that in such coordinates the curvatures $R^l_{ijk}=0$ if all indices are distinct. It can be shown that such coordinates always exist in $3$ dimensions.

> [!exercise] Exercise: 4.7.27
> Show that the Weyl tensors for the Schwarzschild metric and the Eguchi-Hanson metrics are not zero.

> [!exercise] Exercise: 4.7.28
> In this problem we shall see that even in dimension $4$ the curvature tensor has some very special properties. Throughout we let $(M,g)$ be a $4$-dimensional oriented Riemannian manifold. The bivectors $\Lambda^2TM$ come with a natural endomorphism called the Hodge $*$ operator. It is defined as follows: for any oriented orthonormal basis $e_1,e_2,e_3,e_4$ we define $*(e_1\wedge e_2)=e_3\wedge e_4$.
>
> 1. Show that this gives a well-defined linear endomorphism which satisfies:
> 
> $$*=I.$$
> 
> Extend the definition to a linear map:
> 
> $$*:\Lambda^pTM\to\Lambda^qTM,$$
> 
> where $p+q=n$. When $n=2$, we have:
> 
> $$*:TM\to TM=\Lambda^1TM$$
> 
> satisfies:
> 
> $$*=-I,$$
> 
> thus yielding an almost complex structure on any surface.
>
> 2. Now decompose $\Lambda^2TM$ into $+1$ and $-1$ eigenspaces $\Lambda^+TM$ and $\Lambda^-TM$ for $*$. Show that if $e_1,e_2,e_3,e_4$ is an oriented orthonormal basis, then
> 
> $$e_1\wedge e_2\pm e_3\wedge e_4\in\Lambda^\pm TM,$$
> 
> $$e_1\wedge e_3\pm e_4\wedge e_2\in\Lambda^\pm TM,$$
> 
> $$e_1\wedge e_4\pm e_2\wedge e_3\in\Lambda^\pm TM.$$
>
> 3. Thus, any linear map $L:\Lambda^2TM\to\Lambda^2TM$ has a block decomposition
> 
> $$L=\begin{bmatrix}A&D\\ B&C\end{bmatrix},$$
> 
> $$A:\Lambda^+TM\to\Lambda^+TM,$$
> 
> $$D:\Lambda^+TM\to\Lambda^-TM,$$
> 
> $$B:\Lambda^-TM\to\Lambda^+TM,$$
> 
> $$C:\Lambda^-TM\to\Lambda^-TM.$$
> 
> In particular, we can decompose the curvature operator $\mathfrak{R}:\Lambda^2TM\to\Lambda^2TM$:
> 
> $$\mathfrak{R}=\begin{bmatrix}A&D\\ B&C\end{bmatrix}.$$
> 
> Since $\mathfrak{R}$ is symmetric, we get that $A,C$ are symmetric and that $D=B^*$ is the adjoint of $B$. One can furthermore show that
> 
> $$A=W^++\frac{\operatorname{scal}}{12}I,$$
> 
> $$C=W^-+\frac{\operatorname{scal}}{12}I,$$
> 
> where the Weyl tensor can be written
> 
> $$W=\begin{bmatrix}W^+&0\\ 0&W^-\end{bmatrix}.$$
> 
> Find these decompositions for both of the doubly warped metrics:
> 
> $$I\times S^1\times S^2,\ dr^2+\rho^2(r)\,d\theta^2+\phi^2(r)\,ds_2^2,$$
> 
> $$I\times S^3,\ dr^2+\rho^2(r)\bigl(\phi^2(r)(\sigma^1)^2+(\sigma^2)^2+(\sigma^3)^2\bigr).$$
> 
> Use as basis for $TM$ the natural frames in which we computed the curvature tensors. Now
>
> 1. find the curvature operators for the Schwarzschild metric, the Eguchi-Hanson metric, $S^2\times S^2$, $S^4$, and $\mathbb{CP}^2$.
>
> 2. Show that $(M,g)$ is Einstein if and only if $B=0$ if and only if for every plane $\pi$ and its orthogonal complement $\pi^\perp$ we have:
> 
> $$\sec(\pi)=\sec(\pi^\perp).$$