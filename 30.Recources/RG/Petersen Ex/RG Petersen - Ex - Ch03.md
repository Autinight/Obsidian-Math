
下面按“对丘赛（几何方向）直接产出解题工具”的优先级，把这组题分成 **High / Medium / Low**（High≈必做，Medium≈选做，Low≈有余力再做/偏拓展）。

---

## High（必做：核心恒等式 + 计算框架）
- [x] **3.4.5**（两条 Bianchi 恒等式：最常用的曲率代数/微分工具）
- [x] **3.4.6**（常曲率 ⇒ 曲率张量平行 $\nabla R=0$）
- [x] **3.4.7**（$\nabla \mathrm{Ric}=0$ ⇒ 标量曲率常数）
- [x] **3.4.8**（$\nabla^*R$ 与 $\nabla \mathrm{Ric}$ 的关系；harmonic curvature 的判别）
- [x] **3.4.9**（积流形：$\nabla_XY=0$；混合平面的截面曲率为 0——典型构造/反例来源）
- [x] **3.4.10**（点处常曲率的等价刻画：三两两正交向量时 $R(v,w)z=0$）
- [x] **3.4.18**（度量缩放下 $\nabla,R,\mathrm{sec},\mathrm{Ric}$ 的缩放律：做估计/构造必备）
- **3.4.20**（建议至少做 **(1)(3)(4)**；(2)太像 Frobenius 证明可放后）
  *“平坦 $\Leftrightarrow$ 可积 $\Leftrightarrow$ 存在局部笛卡尔坐标”是常见命题链*
- **3.4.21**（建议至少做 **(1)(2)(4)**；(3)“存在性”偏长）
  *Gauss/Codazzi 作为“可积条件”的核心来源，空间形式嵌入球面是经典应用*
- **3.4.23**（建议至少做 **(1)(4)(5)(6)**，尤其 **(6)**：$R=c(g\circ g)$ 的常曲率刻画）
- **3.4.28**（Cartan 形式：结构方程/曲率形式；曲面上 $K\,d\mathrm{vol}$ 的计算套路）

---

## Medium（选做：重要应用/典型例子，做了会更稳）
- **3.4.1**（浸入坐标下 $R_{ijkl}$ 只依赖 $u$ 的一二阶导：理解“曲率是二阶量”）
- **3.4.2**（$|\nabla f|$ 常数 ⇔ 梯度流线测地线；反例训练）
- **3.4.3**（(1,1)-Hessian 的 Lie 导数/交换公式：Riccati 型关系的雏形）
- **3.4.4**（距离函数情形把 3.2.4/3.2.5 写成 $S$ 的方程：比较几何味道）
- **3.4.11**（一般子流形的 Gauss + Codazzi-Mainardi（含法丛项））
- **3.4.12**（欧氏超曲面：$\mathrm{Ric}^H=\mathrm{tr}II\cdot II-II^2$）
- **3.4.13**（全测地超曲面性质 ⇒ 常曲率：结构性很强的练习）
- **3.4.15**（3 维：曲率算子与 Ricci 的对应；“3 维曲率由 Ric 决定”的关键例子）
- **3.4.16**（Einstein 张量、2 维退化、$n>2$ 时 $G=0$ 推 Einstein/Ricci-flat）
- **3.4.19**（仿射向量场 $L_X\nabla=0$ 的曲率方程：对称性/自同构相关）
- **3.4.22**（3.4.21 的双曲版本：常负曲率空间形式的对应模型）
- **3.4.24–3.4.25**（Schouten/Weyl 分解、正交性；$n=3$ 时 Weyl=0）
- **3.4.27**（正交标架结构常数 $c_{ij}^k$ 公式：$\Gamma,R$ 的通用显式表达）
- **3.4.29**（用截面曲率“极化”重构代数曲率张量：把 sec 信息转成 $R$）
- **3.4.31–3.4.33**（Lie 群左不变/双不变度量：$\nabla,R,\mathrm{Ric}$ 公式与典型例子）
- **3.4.34**（承接 3.4.33，用 Cartan 形式做结构常数计算：练计算熟练度）

> 注：如果你准备重点用 Lie 群做例子/构造反例，**3.4.27 + 3.4.31–3.4.34** 可以整体上调到 High。

---

## Low（拓展：偏专题或偏长，时间富余再做）
- **3.4.14**（法曲率 $R^\perp$ 与 Ricci 方程：更偏子流形法丛专题）
- **3.4.17**（复切丛/各向同性截面曲率/1/4-pinching：接近球定理层级）
- **3.4.26**（$\nabla^*P,\nabla^*W$ 的散度公式：Cotton/Weyl 更偏后续理论）
- **3.4.30**（$|\mathcal{R}|$ 用 $|\mathrm{sec}|$ 控制：更偏估计型结论）

---

> [!exercise] Exercise 3.4.1:
> Let $M$ be an $n$-dimensional submanifold of $\mathbb{R}^{n+m}$ with the induced metric. Further assume that we have a local coordinate system given by a parametrization $u^s(x^1,\dots,x^n)$, $s=1,\dots,n+m$. Show that in these coordinates $R_{ijkl}$ depends only on the first and second partials of $u^s$. Hint: Look at exercise 2.5.22.

> [!exercise] Exercise 3.4.2:
> Consider the following conditions for a smooth function $f:(M,g)\to\mathbb{R}$ on a connected Riemannian manifold:
> 
> 1. $|\nabla f|$ is constant.
> 2. $\nabla_{\nabla f}\nabla f=0$.
> 3. $|\nabla f|$ is constant on the level sets of $f$.
> 
> Show that (1) $\Leftrightarrow$ (2) $\Rightarrow$ (3) and give an example to show that the last implication is not a bi-implication.

> [!exercise] Exercise 3.4.3:
> Let $f$ be a function and $S(X)=\nabla_X\nabla f$ the (1,1) version of its Hessian. Show that
> 
> $$\begin{aligned}
> L_{\nabla f}S&=\nabla_{\nabla f}S,\\
> L_{\nabla f}S+S^2-\nabla_X(S(\nabla f))&=-R_{\nabla f}.
> \end{aligned}$$
> 
> How do you reconcile this with what happens in theorem 3.2.2 for the (0,2)-version of the Hessian?

> [!exercise] Exercise 3.4.4:
> Show that if $r=f:M\to\mathbb{R}$ is a distance function, then the tangential and mixed curvature equations from theorems 3.2.4 and 3.2.5 can be written as
> 
> $$\begin{aligned}
> (R(X,Y)Z)^{\top}&=R_H(X,Y)Z-(S(X)\wedge S(Y))(Z),\\
> g(R(X,Y)Z,N)&=-g((\nabla_XS)(Y),Z)+g((\nabla_YS)(X),Z),\\
> R(X,Y)N&=(d^{\nabla}S)(X,Y).
> \end{aligned}$$

> [!exercise] Exercise 3.4.5:
> Prove the two Bianchi identities at a point $p\in M$ by using a coordinate system where $\nabla_{\partial_i}\partial_j=0$ at $p$.

> [!exercise] Exercise 3.4.6:
> Show that a Riemannian manifold with constant curvature has parallel curvature tensor.

> [!exercise] Exercise 3.4.7:
> Show that a Riemannian manifold with parallel Ricci tensor has constant scalar curvature. In section 4.2.3 it will be shown that the converse is not true, and in section 4.2.2 that a metric with parallel curvature tensor doesn't have to be Einstein.

> [!exercise] Exercise 3.4.8:
> Show in analogy with proposition 3.1.5 that if $R$ is the (0,4)-curvature tensor and $\operatorname{Ric}$ the (0,2)-Ricci tensor, then
> 
> $$(\nabla^*R)(Z,X,Y)=(\nabla_X\operatorname{Ric})(Y,Z)-(\nabla_Y\operatorname{Ric})(X,Z).$$
> 
> Conclude that $\nabla^*R=0$ if $\nabla\operatorname{Ric}=0$. Then show that $\nabla^*R=0$ if and only if the (1,1) Ricci tensor satisfies:
> 
> $$(\nabla_X\operatorname{Ric})(Y)=(\nabla_Y\operatorname{Ric})(X)\text{ for all }X,Y.$$

> [!exercise] Exercise 3.4.9:
> Suppose we have two Riemannian manifolds $(M,g_M)$ and $(N,g_N)$. Then the product has a natural product metric $(M\times N,g_M+g_N)$. Let $X$ be a vector field on $M$ and $Y$ one on $N$. Show that if we regard these as vector fields on $M\times N$, then $\nabla_XY=0$. Conclude that $\operatorname{sec}(X,Y)=0$. This means that product metrics always have many curvatures that vanish.

> [!exercise] Exercise 3.4.10:
> Show that a Riemannian manifold has constant curvature at $p\in M$ if and only if $R(v,w)z=0$ for all orthogonal $v,w,z\in T_pM$. Hint: Start by showing: if a symmetric bilinear form $B(v,w)$ on an inner product space has the property that $B(v,w)=0$ when $v\perp w$, then $B$ is a multiple of the inner product.

> [!exercise] Exercise 3.4.11:
> Use exercises 2.5.25 and 2.5.26 to show that if $X,Y,Z$ are tangent to $M$, then
> $$\bar{R}^M(X,Y)Z=R^M(X,Y)Z+T_XT_YZ-T_YT_XZ+(\nabla_X^\perp T)_YZ-(\nabla_Y^\perp T)_XZ,$$
> where
> $$(\nabla_X^\perp T)_YZ=\nabla_X^\perp(T_YZ)-T_{\nabla_X^MY}Z-T_Y\nabla_X^MZ.$$
> The tangential parts on both sides of this curvature relation form the Gauss equations, and the normal parts the Peterson-Codazzi-Mainardi equations.

> [!exercise] Exercise 3.4.12:
> Let $H^{n-1}\subset\mathbb{R}^n$ be a hypersurface. Show that $\operatorname{Ric}^H=\operatorname{tr}II\cdot II-II^2$.

> [!exercise] Exercise 3.4.13:
> A hypersurface of a Riemannian manifold is called **totally geodesic** if its second fundamental form vanishes.
> 4. Show that the spaces $S_k^n$ have the property that any tangent vector is normal to a **totally geodesic** hypersurface.
> 5. Show a Riemannian $n$-manifold, $n>2$, with the property that any tangent vector is a normal vector to a **totally geodesic** hypersurface has constant curvature. Hint: Start by showing that $R(X,Y)Z=0$ when the three vectors are orthogonal to each other and use exercise 3.4.10.

> [!exercise] Exercise 3.4.14:
> Use exercise 2.5.26 to define the normal curvature $R^\perp(X,Y,V,W)$ for tangent fields $X,Y$ and normal fields $V,W$.
> 6. Show that $R^\perp$ is tensorial and skew-symmetric in $X,Y$ as well as $V,W$.
> 7. Show that
> $$\bar{R}^M(X,Y,V,W)=R^\perp(X,Y,V,W)+g_M(T_XV,T_YW)-g_M(T_YV,T_XW).$$
> These are also known as the Ricci equations.

> [!exercise] Exercise 3.4.15:
> For $3$-dimensional manifolds, show that if the curvature operator in diagonal form is given by
> $$\begin{pmatrix}\alpha&0&0\\0&\beta&0\\0&0&\gamma\end{pmatrix},$$
> then $\operatorname{Ric}$ has a diagonal given by
> $$\begin{pmatrix}\alpha+\beta&0&0\\0&\beta+\gamma&0\\0&0&\alpha+\gamma\end{pmatrix}.$$
> Moreover, the numbers $\alpha,\beta,\gamma$ must be sectional curvatures.

> [!exercise] Exercise 3.4.16:
> Consider the $(0,2)$-tensor
> $$T=\operatorname{Ric}+b\operatorname{scal}g+cg,$$
> where $b,c\in\mathbb{R}$.
> 8. Show that $\nabla^*T=0$ if $b=-\frac{1}{2}$. The tensor
> $$G=\operatorname{Ric}-\frac{\operatorname{scal}}{2}g+cg$$
> is known as the **Einstein tensor** and $c$ as the **cosmological constant**.
> 9. Show that if $c=0$, then $G=0$ in dimension $2$.
> 10. When $n>2$ show that if $G=0$, then the metric is an **Einstein metric**.
> 11. When $n>2$ show that if $G=0$ and $c=0$, then the metric is **Ricci flat**.

> [!exercise] Exercise 3.4.17:
> Let $T_\mathbb{C}M=TM\otimes\mathbb{C}$ be the complexified tangent bundle to a manifold. A vector $v\in T_\mathbb{C}M$ looks like $v=v_1+iv_2$, where $v_1,v_2\in TM$, and can be conjugated $\bar{v}=v_1-iv_2$. Any tensorial object on $TM$ can be complexified. For example, if $S$ is a $(1,1)$-tensor, then its complexification is given by
> $$\begin{aligned}
> S_\mathbb{C}(v)&=S_\mathbb{C}(v_1+iv_2)\\
> &=S(v_1)+iS(v_2).
> \end{aligned}$$
> A Riemannian structure $g$ on $TM$ gives a natural Hermitian structure on $T_\mathbb{C}M$ by
> $$\begin{aligned}
> g(v,w)&=g_\mathbb{C}(v,\bar{w})\\
> &=g_\mathbb{C}(v_1+iv_2,w_1-iw_2)\\
> &=g(v_1,w_1)+g(v_2,w_2)+i(g(v_2,w_1)-g(v_1,w_2)).
> \end{aligned}$$
> A vector is called **isotropic** if it is Hermitian orthogonal to its conjugate
> $$\begin{aligned}
> 0&=g(v,\bar{v})\\
> &=g_\mathbb{C}(v,v)\\
> &=g_\mathbb{C}(v_1+iv_2,v_1+iv_2)\\
> &=g(v_1,v_1)-g(v_2,v_2)+i(g(v_2,v_1)+g(v_1,v_2)).
> \end{aligned}$$
> More generally, **isotropic** subspaces are defined as subspaces on which $g_\mathbb{C}$ vanishes. The **complex sectional curvature** spanned by Hermitian orthonormal vectors $v,w$ is given by the expression $R_\mathbb{C}(v,w,\bar{w},\bar{v})$. It is called **isotropic sectional curvature** when $v,w$ span an isotropic plane.
> 12. Show that a vector $v=v_1+iv_2$ is **isotropic** if $v_1,v_2$ are orthogonal and have the same length.
> 13. An isotropic plane can be spanned by two Hermitian orthonormal vectors $v,w$ that are isotropic. Show that if $v=v_1+iv_2$ and $w=w_1+iw_2$, then $v_1,v_2,w_1,w_2$ are orthonormal.
> 14. Show that $R_\mathbb{C}(v,w,\bar{w},\bar{v})$ is always a real number.
> 15. Show that if the original metric is **strictly quarter pinched**, i.e., all sectional curvatures lie in an open interval of the form $(\frac{1}{4}k,k)$ with $k>0$, then the complex sectional curvatures are positive.
> 16. Show that the complex sectional curvatures are nonnegative (resp. positive) if the curvature operator is nonnegative (resp. positive). Hint: Calculate
> $$g(\mathcal{R}(x\wedge u-y\wedge v),x\wedge u-y\wedge v)+g(\mathcal{R}(x\wedge v+y\wedge u),x\wedge v+y\wedge u)$$
> and compare it to a suitable complex curvature.

> [!exercise] Exercise 3.4.18:
> Consider a Riemannian metric $(M,g)$ and **scale** the metric by multiplying it by a number $\lambda^2$. This creates a new Riemannian manifold $(M,\lambda^2g)$.
> 17. Show that the new connection and $(1,3)$-curvature tensor remain the same.
> 18. Show that $\operatorname{sec}$, $\operatorname{scal}$, and $\mathcal{R}$ all get multiplied by $\lambda^{-2}$.
> 19. Show that $\operatorname{Ric}$ as a $(1,1)$-tensor is multiplied by $\lambda^{-2}$.
> 20. Show that $\operatorname{Ric}$ as a $(0,2)$-tensor is unchanged.

> [!exercise] Exercise 3.4.19:
> We say that $X$ is an **affine vector field** if $L_X\nabla=0$. Show that such a field satisfies the equation:
> $$\nabla_{U,V}^2X=-R(X,U)V.$$

> [!exercise] Exercise 3.4.20 (**Integrability for PDEs**):
> For given functions $P_k^i(x,u)$, where $x=(x^1,\ldots,x^n)$, $u=(u^1,\ldots,u^m)$, $i=1,\ldots,m$, and $k=1,\ldots,n$, consider the initial value problems for a system of first-order PDEs
> $$\begin{aligned}
> \frac{\partial u^i}{\partial x^k}&=P_k^i(x,u(x)),\\
> u(x_0)&=u_0.
> \end{aligned}$$
>   1. Show that
> $$\frac{\partial^2u^i}{\partial x^k\partial x^l}=\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j,$$
> and conclude that all such initial value problems can only be solved when the **integrability conditions**
> $$\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j=\frac{\partial P_k^i}{\partial x^l}+\frac{\partial P_k^i}{\partial u^j}P_l^j$$
> hold.
> 2. Conversely show that all such initial value problems can be solved if the integrability conditions hold. Hint: This is equivalent to the Frobenius integrability theorem but can be established directly (see also [97, vol. 1]). When $P$ does not depend on $u$, this result goes back to Clairaut. The general case appears to have been a folklore result that predates what we call the Frobenius theorem about integrability of distributions.
> 3. Using coordinates $x^i$ on a Riemannian $n$-manifold form the system
> $$\frac{\partial U_j^i}{\partial x^k}=\Gamma_{kj}^sU_s^i,\quad i,j=1,\ldots,n$$
> and show that its integrability conditions are equivalent to $R^s_{klj}=0$.
> 4. Show that a flat Riemannian manifold admits Cartesian coordinates. Hint: Denote the potential Cartesian coordinates by $u^i$ and consider the system:
> $$\frac{\partial u^i}{\partial x^k}=U_k^i$$
> with appropriate initial values. Make sure you check that $u^i$ really form a Cartesian coordinate system. This way of locally characterizing Euclidean space is very close in spirit to Riemann's original approach. Hint: Consider the derivative of
> $$g^{kl}\frac{\partial u^i}{\partial x^k}\frac{\partial u^j}{\partial x^l},$$
> where $g_{kl}$ denotes the metric with respect to $x$ and use 2.5.8.


> [!exercise] Exercise 3.4.21 (**Fundamental theorem of (hyper-)surface theory**):
> Consider a Riemannian immersion $F:M^n\hookrightarrow\mathbb{R}^{n+1}$. In coordinates on $M$ it can be written as
> $$\bigl(u^1(x),\dots,u^{n+1}(x)\bigr)=F(x)=F(x^1,\dots,x^n).$$
> and we define
> $$U^i_k=\frac{\partial u^i}{\partial x^k}.$$
> 5. Show that
>    $$\frac{\partial U^i_j}{\partial x^k}=\Gamma^s_{kj}U^i_s-\Pi_{jk}N^i,$$
>    where $N=N^i\partial_i$ is a choice of unit normal and the second fundamental form is $\Pi_{jk}=\Pi(\partial_j,\partial_k)=g(\nabla_{\partial_j}N,\partial_k)$.
> 6. Show that the integrability conditions for this system are equivalent to the Gauss (tangential) and Codazzi (mixed) curvature equations:
>    $$R_{iklj}=\Pi_{ij}\Pi_{kl}-\Pi_{ik}\Pi_{jl},$$
>    $$\frac{\partial\Pi_{jk}}{\partial x^l}-\frac{\partial\Pi_{jl}}{\partial x^k}=\Gamma^s_{lj}\Pi_{sk}-\Gamma^s_{kj}\Pi_{sl}.$$
> 7. Given metric coefficients $g_{ij}$ and a symmetric tensor $\Pi_{ij}$ that is related to the metric coefficients through the Gauss and Codazzi equations, show that locally there exists a Riemannian immersion such that the second fundamental form is given by $\Pi_{ij}$.
> 8. We can now give a local characterization of spaces with constant positive curvature. Given a metric of constant curvature $R^{-2}>0$, show that there is a Riemannian immersion into $\mathbb{R}^{n+1}$ whose image lies in a sphere of radius $R$. Hint: Guess what the second fundamental form should look like and show that the constant curvature condition gives the Gauss and Codazzi equations. Note that for $S^n(R)$ the unit normal is $N=\pm R^{-1}F$.

> [!exercise] Exercise 3.4.22:
> Repeat the previous exercise with a Riemannian immersion $F:M^n\hookrightarrow\mathbb{R}^{n,1}$ where $M$ is a Riemannian manifold and the normal $N$ satisfies $\lvert N\rvert^2=-1$. This time we obtain a local characterization of the hyperbolic spaces $H^n(R)$ from example 1.1.7 as the local model for spaces of constant curvature $-R^{-2}$. Note that for $H^n(R)$ the unit normal is $N=\pm R^{-1}F$.

> [!exercise] Exercise 3.4.23:
> For two symmetric $(0,2)$-tensors $h,k$ define the **Kulkarni-Nomizu product** as the $(0,4)$-tensor
> $$\begin{aligned}
> (h\circ k)(v_1,v_2,v_3,v_4)&=\frac12\bigl(h(v_1,v_4)\cdot k(v_2,v_3)+h(v_2,v_3)\cdot k(v_1,v_4)\bigr)\\
> &\quad-\frac12\bigl(h(v_1,v_3)\cdot k(v_2,v_4)+h(v_2,v_4)\cdot k(v_1,v_3)\bigr).
> \end{aligned}$$
> The factor $\frac12$ is not used consistently in the literature, but is convenient when $h=k$. Part (6) of this exercise explains our choice.
> 9. Show that $h\circ k=k\circ h$.
> 10. Show that $h\circ h=0$ if $h$ has rank $1$.
> 11. Show that if $n>2$, $k$ is nondegenerate, and $h\circ k=0$, then $h=0$. Hint: Let $v_i$ be "eigenvectors" for $k$ and $v_2=v_3$.
> 12. Show that $h\circ k$ satisfies the first $3$ properties of proposition 3.1.1.
> 13. Show that $\nabla_X(h\circ k)=(\nabla_Xh)\circ k+h\circ(\nabla_Xk)$.
> 14. Show that $(M,g)$ has constant curvature $c$ if and only if the $(0,4)$-curvature tensor satisfies $R=c\cdot(g\circ g)$.

> [!exercise] Exercise 3.4.24:
> Define the **Schouten tensor**
> $$P=\frac{2}{n-2}\operatorname{Ric}-\frac{\operatorname{scal}}{(n-1)(n-2)}\cdot g$$
> for Riemannian manifolds of dimension $n>2$.
> 15. Show that if $P$ vanishes on $M$, then $\operatorname{Ric}=0$.
> 16. Show that the decomposition
>    $$P=\frac{\operatorname{scal}}{n(n-1)}g+\frac{2}{n-2}\left(\operatorname{Ric}-\frac{\operatorname{scal}}{n}\cdot g\right)$$
>    of the Schouten tensor is orthogonal.
> 17. Show that when $n=2$, then
>    $$R=\frac{\operatorname{scal}}{2}g\circ g.$$
> 18. Show that when $n=3$, then
>    $$R=\frac{\operatorname{scal}}{6}g\circ g+2\left(\operatorname{Ric}-\frac{\operatorname{scal}}{3}\cdot g\right)\circ g=P\circ g.$$
> 19. Show that $(M,g)$ has constant curvature when $n>2$ if and only if
>    $$R=P\circ g\quad\text{and}\quad\operatorname{Ric}=\frac{\operatorname{scal}}{n}g.$$
> 20. Show that
>    $$\operatorname{Ric}(X,Y)=\sum_{i=1}^n(P\circ g)(X,E_i,E_i,Y)$$
>    for any orthonormal frame $E_i$.

> [!exercise] Exercise 3.4.25:
> The **Weyl tensor** $W$ is defined implicitly through
> $$\begin{aligned}
> R&=\frac{\operatorname{scal}}{n(n-1)}g\circ g+\frac{2}{n-2}\left(\operatorname{Ric}-\frac{\operatorname{scal}}{n}\cdot g\right)\circ g+W\\
> &=P\circ g+W,
> \end{aligned}$$
> where $P$ was defined in the previous exercise.
> 21. Show that if $n=3$, then $W=0$.
> 22. Show that
>    $$\sum_{i=1}^nW(X,E_i,E_i,Y)=0$$
>    for any orthonormal frame $E_i$. Hint: Use (6) from exercise 3.4.24.
> 23. Show that the decomposition $R=P\circ g+W$ is orthogonal. Hint: This is similar to showing that homotheties and traceless matrices are perpendicular.

> [!exercise] Exercise 3.4.26:
> Show that
> $$\nabla^*P=-\frac{1}{n-1}d\operatorname{scal}$$
> and
> $$\nabla^*W(Z,X,Y)=\frac{n-3}{2}\big((\nabla_XP)(Y,Z)-(\nabla_YP)(X,Z)\big).$$
> Hint: Use the definitions of $W$ and $P$ from the previous two exercises, exercise 3.4.8, and proposition 3.1.5.

> [!exercise] Exercise 3.4.27:
> Given an orthonormal frame $E_1,\ldots,E_n$ on $(M,g)$, define the **structure constants** $c_{ij}^k$ by $[E_i,E_j]=c_{ij}^kE_k$, note that each $c_{ij}^k$ is a function on $M$, so it is not constant!
> 
> Define the $\Gamma$'s and $R$'s by
> $$\nabla_{E_i}E_j=\Gamma_{ij}^kE_k,\qquad R(E_i,E_j)E_k=R_{ijk}^lE_l,$$
> and compute them in terms of the structure constants. Notice that on Lie groups with left-invariant metrics the structure constants can be assumed to be constant. In this case, computations simplify considerably.

> [!exercise] Exercise 3.4.28 (**Cartan formalism**):
> There is yet another effective method for computing the connection and curvatures, namely, the **Cartan formalism**. Let $(M,g)$ be a Riemannian manifold. Given a frame $E_1,\ldots,E_n$, the connection can be written
> $$\nabla E_i=\omega_i^{\,j}E_j,$$
> where $\omega_i^{\,j}$ are $1$-forms called the **connection forms**. Thus,
> $$\nabla_vE_i=\omega_i^{\,j}(v)E_j.$$
> Suppose additionally that the frame is orthonormal and let $\omega^i$ be the dual coframe, i.e., $\omega^i(E_j)=\delta_j^i$.
> 
> 24. Show that the connection forms satisfy
> $$\omega_i^{\,j}=-\omega_j^{\,i},\qquad d\omega^i=\omega^j\wedge\omega_j^{\,i}.$$
> These two equations can, conversely, be used to compute the connection forms given the orthonormal frame. Therefore, if the metric is given by declaring a certain frame to be orthonormal, then this method can be very effective in computing the connection.
> 25. If we think of $[\omega_i^{\,j}]$ as a matrix, then it represents a $1$-form with values in the skew-symmetric $n\times n$ matrices, or in other words, with values in the Lie algebra $\mathfrak{so}(n)$ for $O(n)$. The **curvature forms** $\Omega_i^{\,j}$ are $2$-forms with values in $\mathfrak{so}(n)$ defined as
> $$R(X,Y)E_i=\Omega_i^{\,j}(X,Y)E_j.$$
> Show that they satisfy
> $$d\omega_i^{\,j}=\omega_i^{\,k}\wedge\omega_k^{\,j}+\Omega_i^{\,j}.$$
> 26. When reducing to Riemannian metrics on surfaces we obtain for an orthonormal frame $E_1,E_2$ with coframe $\omega^1,\omega^2$
> $$d\omega^1=\omega^2\wedge\omega_2^{\,1},\qquad d\omega^2=-\omega^1\wedge\omega_2^{\,1},\qquad d\omega_2^{\,1}=\Omega_2^{\,1},\qquad \Omega_2^{\,1}=\operatorname{sec}\cdot d\operatorname{vol}.$$

> [!exercise] Exercise 3.4.29:
> This exercise will give you a way of finding the curvature tensor from the sectional curvatures. Assume that $R(X,Y,Z,W)$ is an algebraic curvature tensor, i.e., satisfies (1), (2), and (3) of proposition 3.1.1.
> 
> 27. Show that
> $$6R(X,Y,V,W)=\left.\frac{\partial^2 R(X+sW,Y+tV,Y+tV,X+sW)}{\partial s\partial t}\right|_{s=t=0}-\left.\frac{\partial^2 R(X+sV,Y+tW,Y+tW,X+sV)}{\partial s\partial t}\right|_{s=t=0}.$$
> 28. Show that
> $$\begin{aligned}
> 6R(X,Y,V,W)&=R(X+W,Y+V,Y+V,X+W)\\
> &-R(X,Y+V,Y+V,X)-R(W,Y+V,Y+V,W)\\
> &-R(X+W,V,V,X+W)-R(X+W,Y,Y,X+W)\\
> &+R(X,V,V,X)+R(W,V,V,W)\\
> &+R(X,Y,Y,X)+R(W,Y,Y,W)\\
> &-R(X+V,Y+W,Y+W,X+V)\\
> &+R(X,Y+W,Y+W,X)+R(V,Y+W,Y+W,V)\\
> &+R(X+V,Y,Y,X+V)+R(X+V,W,W,X+V)\\
> &-R(X,Y,Y,X)-R(V,Y,Y,V)\\
> &-R(X,W,W,X)-R(V,W,W,V).
> \end{aligned}$$
> Note that 4 of the terms on the right-hand side are redundant.

> [!exercise] Exercise 3.4.30:
> Using the previous exercise show that the norm of the curvature operator on $\Lambda^2T_pM$ is bounded by
> $$|\mathcal{R}|_p\le c(n)|\operatorname{sec}|_p$$
> for some constant $c(n)$ depending on dimension, and where $|\operatorname{sec}|_p$ denotes the largest absolute value for any sectional curvature of a plane in $T_pM$.


> [!exercise] Exercise 3.4.31:
> Let $G$ be a Lie group with a left-invariant metric $(\cdot,\cdot)$ on $\mathfrak{g}$ (it need not be positive definite, just nondegenerate). For $X\in\mathfrak{g}$ denote by $\operatorname{ad}_X^*:\mathfrak{g}\to\mathfrak{g}$ the adjoint of $\operatorname{ad}_X Y=[X,Y]$ with respect to $(\cdot,\cdot)$. Show that:
> 29. $\nabla_XY=\frac12\bigl([X,Y]+\operatorname{ad}_X^*Y-\operatorname{ad}_Y^*X\bigr)$. Conclude that if $X,Y\in\mathfrak{g}$, then $\nabla_XY\in\mathfrak{g}$.
> 30. $R(X,Y,Z,W)=-(\nabla_YZ,\nabla_XW)+(\nabla_XZ,\nabla_YW)-(\nabla_{[X,Y]}Z,W)$.
> 31. $$\begin{aligned}
> R(X,Y,Y,X)=&\frac14\|\operatorname{ad}_X^*Y+\operatorname{ad}_Y^*X\|^2-(\operatorname{ad}_X^*X,\operatorname{ad}_Y^*Y)-\frac34\|[X,Y]\|^2\\
> &-\frac12([[X,Y],Y],X)-\frac12([[Y,X],X],Y).
> \end{aligned}$$

> [!exercise] Exercise 3.4.32:
> Let $G$ be a Lie group with a biinvariant metric $(\cdot,\cdot)$ on $\mathfrak{g}$ (it need not be positive definite, just nondegenerate). Using left-invariant fields establish the following formulas. **Hint:** First go back to the exercise 1.6.24 and take a peek at section 4.4.1 where some of these things are proved. Show that:
> 32. $\nabla_XY=\frac12[X,Y]$.
> 33. $R(X,Y)Z=\frac14[Z,[X,Y]]$.
> 34. $R(X,Y,Z,W)=-\frac14([X,Y],[Z,W])$. Conclude that the sectional curvatures are nonnegative when $(\cdot,\cdot)$ is positive definite.
> 35. Show that the curvature operator is also nonnegative when $(\cdot,\cdot)$ is positive definite by showing that:
> $$g\Bigl(\mathcal{R}\bigl(\sum_{i=1}^kX_i\wedge Y_i\bigr),\bigl(\sum_{i=1}^kX_i\wedge Y_i\bigr)\Bigr)=\frac14\Bigl|\sum_{i=1}^k[X_i,Y_i]\Bigr|^2.$$
> 36. Assume again that $(\cdot,\cdot)$ is positive definite. Show that $\operatorname{Ric}(X,X)=0$ if and only if $X$ commutes with all other left-invariant vector fields. Thus $G$ has positive Ricci curvature if the center of $G$ is discrete.

> [!exercise] Exercise 3.4.33:
> Consider a Lie group where the Killing form $B$ is nondegenerate and use $-B$ as the left-invariant metric (see exercise 1.6.27).
> 37. Show that this metric is biinvariant.
> 38. Show that $\operatorname{Ric}=-\frac14B$.

> [!exercise] Exercise 3.4.34:
> It is illustrative to use the Cartan formalism in the previous exercise and compute all quantities in terms of the structure constants for the Lie algebra. Given that the metric is biinvariant, it follows that with respect to an orthonormal basis they satisfy
> $$c_{ij}^k=-c_{ji}^k=c_{jk}^i.$$
> The first equality is skew-symmetry of the Lie bracket, and the second is biinvariance of the metric.