> [!exercise] 6.2
> 如果 $D^{(1)},D^{(2)}$ 是 $M$ 上的两个联络，定义映射
> $$
> \sigma:\mathfrak X(M)\times \mathfrak X(M)\to \mathfrak X(M)
> $$
> 为
> $$
> \sigma(X,Y)=D^{(2)}_Y X-D^{(1)}_Y X,\qquad \forall X,Y\in \mathfrak X(M).
> $$
> 证明：$\sigma$ 是 $M$ 上的一个 $(1,2)$ 型光滑张量场。

> [!solution] 证明
> 只需证 $\sigma$ 对 $X,Y$ 都是 $C^\infty(M)$-线性的。
>
> 任取 $f\in C^\infty(M)$，
> $$
> \begin{aligned}
> \sigma(fX,Y)
> &=D^{(2)}_Y(fX)-D^{(1)}_Y(fX)\\
> &=fD^{(2)}_YX+Y(f)X-fD^{(1)}_YX-Y(f)X\\
> &=f\sigma(X,Y).
> \end{aligned}
> $$
>
> 又
> $$
> \begin{aligned}
> \sigma(X,fY)
> &=D^{(2)}_{fY}X-D^{(1)}_{fY}X\\
> &=fD^{(2)}_YX-fD^{(1)}_YX\\
> &=f\sigma(X,Y).
> \end{aligned}
> $$
>
> 因此 $\sigma$ 是 $C^\infty(M)$-双线性的，所以
> $$
> \sigma\in \Gamma(TM\otimes T^*M\otimes T^*M),
> $$
> 即 $\sigma$ 是 $M$ 上的一个 $(1,2)$ 型光滑张量场。


> [!exercise] 6.3
> 如果 $D$ 是 $M$ 上的一个联络，$\sigma$ 是 $M$ 上的一个 $(1,2)$ 型光滑张量场，定义映射
> $$
> \widetilde D:\mathfrak X(M)\times \mathfrak X(M)\to \mathfrak X(M)
> $$
> 为
> $$
> \widetilde D_YX=D_YX+\sigma(X,Y),\qquad \forall X,Y\in \mathfrak X(M).
> $$
> 证明：$\widetilde D$ 是 $M$ 上的一个联络。

> [!proof] 证明
> 任取 $f,g\in C^\infty(M)$，$X,X_1,X_2,Y,Y_1,Y_2\in\mathfrak X(M)$。
> 因 $D$ 为联络，$\sigma$ 为张量场，有
> $$
> \widetilde D_{fY_1+gY_2}X
> =D_{fY_1+gY_2}X+\sigma(X,fY_1+gY_2)
> =f\widetilde D_{Y_1}X+g\widetilde D_{Y_2}X.
> $$
> 又
> $$
> \widetilde D_Y(X_1+X_2)
> =D_Y(X_1+X_2)+\sigma(X_1+X_2,Y)
> =\widetilde D_YX_1+\widetilde D_YX_2.
> $$
> 且
> $$
> \widetilde D_Y(fX)
> =D_Y(fX)+\sigma(fX,Y)
> =Y(f)X+fD_YX+f\sigma(X,Y)
> =Y(f)X+f\widetilde D_YX.
> $$
> 故 $\widetilde D$ 满足联络公理，是 $M$ 上的联络。


> [!exercise] 6.5
> 如果 $D^{(\alpha)}\ (1\leq \alpha\leq r)$ 是 $M$ 上 $r$ 个联络，$f_\alpha\ (1\leq \alpha\leq r)$ 是一组 $M$ 上的光滑函数，满足条件
> $$
> \sum_{\alpha=1}^r f_\alpha=1.
> $$
> 定义映射
> $$
> D:\mathfrak X(M)\times \mathfrak X(M)\to \mathfrak X(M)
> $$
> 为
> $$
> D_YX=\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_Y X,\qquad \forall X,Y\in \mathfrak X(M).
> $$
> 证明：$D$ 是 $M$ 上的一个联络。

> [!proof] 证明
> 任取 $X,Z,Y,W\in\mathfrak X(M)$，$g,h\in C^\infty(M)$。
>
> 验证对第一个变量的 $C^\infty(M)$-线性：
> $$
> \begin{aligned}
> D_{gY+hW}X
> &=\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_{gY+hW}X\\
> &=g\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_YX
> +h\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_WX\\
> &=gD_YX+hD_WX.
> \end{aligned}
> $$
>
> 再验证第第二个变量的 $\mathbb R$-线性：
> $$
> D_Y(X+Z)
> =\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_Y(X+Z)
> =D_YX+D_YZ.
> $$
>
> 最后验证 Leibniz 律：
> $$
> \begin{aligned}
> D_Y(gX)
> &=\sum_{\alpha=1}^r f_\alpha D^{(\alpha)}_Y(gX)\\
> &=\sum_{\alpha=1}^r f_\alpha\bigl(Y(g)X+gD^{(\alpha)}_YX\bigr)\\
> &=Y(g)\left(\sum_{\alpha=1}^r f_\alpha\right)X+gD_YX\\
> &=Y(g)X+gD_YX.
> \end{aligned}
> $$
>
> 所以 $D$ 满足联络公理，是 $M$ 上的一个联络。


> [!exercise] 6.7
> 设 $g$ 是 $n$ 维伪射影联络空间 $(M,D)$ 上的一个光滑的 $2$ 阶协变张量场，在局部坐标系 $(U;u^i)$ 下表示为
> $$
> g|_U=g_{ij}\,du^i\otimes du^j,\qquad g_{ij}\in C^\infty(U).
> $$
> 设
> $$
> X=X^i\frac{\partial}{\partial u^i}\bigg|_p\in T_pM,\qquad p\in U.
> $$
> 求 $D_Xg\in T^0_2(p)$ 的坐标表达式。

> [!solution]-
> 设
> $$
> D_{\partial_k}\partial_i=\Gamma^r_{ki}\partial_r.
> $$
> 由
> $$
> (D_Xg)(Y,Z)=X(g(Y,Z))-g(D_XY,Z)-g(Y,D_XZ),
> $$
> 取 $Y=\partial_i,\ Z=\partial_j$，得
> $$
> (D_{\partial_k}g)_{ij}
> =
> \partial_k g_{ij}
> -\Gamma^r_{ki}g_{rj}
> -\Gamma^r_{kj}g_{ir}.
> $$
> 因而
> $$
> D_Xg
> =
> X^k\left(
> \partial_k g_{ij}
> -\Gamma^r_{ki}g_{rj}
> -\Gamma^r_{kj}g_{ir}
> \right)_p
> du^i|_p\otimes du^j|_p.
> $$


> [!exercise] 6.10
> 设 $(M,D)$ 是连通的 $n$ 维仿射联络空间。证明：在点 $p\in M$ 的任意一个切向量 $X\in T_pM$ 能够在 $M$ 上生成一个与路径无关的平行切向量场 $X$ 的充分必要条件是 $(M,D)$ 的曲率张量为零。
