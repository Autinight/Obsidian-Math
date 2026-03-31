  

> [!exercise] Exercise
> 特殊线性群 $\operatorname{SL}(2,\mathbb{R})$ 通过 Möbius 变换作用在上半平面 $\mathbb{H}=\{z:\operatorname{Im}(z)>0\}$ 上,
>
> $$
> \begin{pmatrix}
>
> a & b\\
>
> c & d
>
> \end{pmatrix}\cdot z=\frac{az+b}{cz+d}.
>
> $$
>
> a). 求证: 该作用是传递的.
>
> b). 求该作用下点 $\sqrt{-1}\in \mathbb{H}$ 的稳定化子.
>
> c). 让$G=\operatorname{SL}\left( 2,\mathbb{R}\right)$伴随地作用在自身上,
>
> $$
> \operatorname{Ad}:G\to \operatorname{Aut}(G),\qquad g\mapsto \operatorname{Ad}_g,
> $$
>
> $B=\begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$ 的伴随轨道是
>
> $$
> O(B)=\{ABA^{-1}\mid A\in \operatorname{SL}(2,\mathbb{R})\}.
> $$
>
> 显式给出 $\operatorname{SL}(2,\mathbb{R})$ 等变的微分同胚
>
> $f:\mathbb{H}\to O(B)$. 设 $G$ 作用在光滑流形 $M,N$ 上, 我们称 $G$ 作用关于光滑映射 $f:M\to N$ 是等变的 (equivariant), 如果满足
>
> $$
> f(g\cdot p)=g\cdot f(p)\quad \forall p\in M,g\in G.
>
> $$

> [!remark] Remark: 
>  - 齐性空间的刻画定理: 稳定化子$G_{p}$是闭子群, 且对于任意空间上一点$p$, 轨道映射模掉稳定化子, 给出$G$-等变的微分同胚.

> [!proofsketch] Sketch of Proof: 
> 
> 1. 通过两步变换将 $i$移动到任意 $x+ iy$: 尺度缩放和平移.
> 2. 线性代数的直接计算, $A\cdot i= i$写出分量即可, 结果是$O\left(2\right)\cap \operatorname{SL}\left(2,\mathbb{R} \right)= SO\left(2\right)$.
> 3. 与2类似的结果发现, 直接计算也是$\operatorname{SO}\left(2\right)$. 利用齐性空间的刻画定理即可. 显示给出就是轨道映射.
> 4. 由于$G$在$\mathbb{H}$和自身上的作用给出同构的稳定化子, 两个商空间到轨道空间的$G$-等变微分同胚, 自然地给出轨道空间的$G$-等变微分同胚.

> [!exercise] Exercise
> 设 $G=\operatorname{SL}(2,\mathbb{R})$. 令 $M=P_n$ 是变量为 $z_1,z_2$ 的 $n$ 次齐次多项式的线性空间.
>
> a). 证明: 下式给出了 $\operatorname{SL}(2,\mathbb{R})$ 在 $M$ 上的一个光滑作用,
>
> $$
> \left(
>
> \begin{pmatrix}
>
> a & b\\
>
> c & d
>
> \end{pmatrix}
>
> \cdot f
>
> \right)(z_1,z_2):=f(az_1+cz_2,bz_1+dz_2).
>
> $$
>
> b). 证明:
>
> $$
> X=
>
> \begin{pmatrix}
>
> 0 & 1\\
>
> 0 & 0
>
> \end{pmatrix},\quad
>
> Y=
>
> \begin{pmatrix}
>
> 0 & 0\\
>
> 1 & 0
>
> \end{pmatrix},\quad
>
> H=
>
> \begin{pmatrix}
>
> 1 & 0\\
>
> 0 & -1
>
> \end{pmatrix}
>
> $$
>
> 是 $\mathfrak{sl}(2,\mathbb{R})$ 的一组基, 且对应的无穷小作用 (infinitesimal action) 分别为
>
> $$
> X_M(f)=z_1\frac{\partial f}{\partial z_2},\quad
>
> Y_M(f)=z_2\frac{\partial f}{\partial z_1},\quad
>
> H_M(f)=z_1\frac{\partial f}{\partial z_1}-z_2\frac{\partial f}{\partial z_2}.
>
> $$
>
> 一个群作用 $G\looparrowright M$ 的无穷小作用定义为
>
> $$
> \operatorname{d}r:\mathfrak{g}\to M
>
> $$
>
> $$
> \operatorname{d}r(X)(p)=\left.\frac{\operatorname{d}}{\operatorname{d}t}\right|_{t=0}\exp(tX)\cdot p.
>
> $$

> [!remark] Remark: 
> 无穷小作用: 积分曲线作用在空间上变成空间上的曲线, 对这个曲线在圆度处的切向量就是无穷小作用.

> [!proofsketch] Sketch of Proof: 
> 1. 利用$\operatorname{SL}\left(2,\mathbb{R} \right)$到$M\left(2,\mathbb{R} \right)$和$P_{n}$当$\mathbb{R} [z_1,z_2]$的两个限制给出光滑性, 然后直接验证作用的良定义性即可.
> 2. 基很好证, 无穷小作用就是用积分曲线$\exp \left(tX\right)$作用一下求导就行, 利用高阶矩阵指数等于零, 直接展开计算就可以了.