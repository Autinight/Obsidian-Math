> [!exercise] 1
> 设 $X,Y$ 是线性赋范空间，$T \in \mathcal{B}(X,Y)$ 是紧算子，证明：$TX$ 是可分的。

设$B_{X}\left(r\right)$, 是$X$中半径为$r$的球. 那么
$$ TX= \bigcup _{r = 1}^{\infty} T\left(B_{X}\left(r\right)\right) $$ 

因此只需要证明
$$ T\left(B_{X}\left(r\right)\right) $$
是可分的. 
又
$$ T\left(B_{X}\left(r\right)\right)= T\left(rB_{X}\left(1\right)\right)= rT \left(B_{X}\left(1\right)\right) $$  

因此只需要证明$T\left(B_{X}\left(1\right)\right)$是可分的.

由于$T$是紧算子, $\overline{T\left(B_{X}\left(1\right)\right)}$是紧集, 从而$T\left(B_{X}\left(1\right)\right)$是预列紧的, 进而$T\left(B_{X}\left(1\right)\right)$是完全有界的. 而完全有界集是可分的, 因此$T\left(B_{X}\left(1\right)\right)$可分, 进而$T\left(B_{X}\left(r\right)\right)$可分, $TX$可分.




> [!exercise] 2
> 设 $k(s,t) \in L^2([a,b]\times [a,b])$，求证：算子
> $$
> T: x(t) \longmapsto \int_a^b k(s,t)x(s)\,ds
> $$
> 是 $L^2[a,b]$ 上的紧算子。（提示：利用全连续算子）

> [!exercise] 3
> $X$ 是线性赋范空间，设 $\{x_n\}\subset X$ 是弱有界的，即 $\forall f\in X^*$，数列 $\{f(x_n)\}$ 都有界，证明 $\{x_n\}$ 是有界的。

> [!exercise] 4
> 设 $X$ 是自反空间，证明 $X$ 中弱 Cauchy 列一定是弱收敛的。即证：如果 $\{x_n\}\subset X$ 满足对 $\forall f\in X^*$，$\{f(x_n)\}$ 都是 Cauchy 列，则 $\{x_n\}$ 弱收敛。（提示：利用第 3 题结论）

> [!exercise] 1
> 设 $X,Y$ 是赋范线性空间，$f\in X^*$，$y\in Y$，定义算子
> $$
> T:x\longmapsto f(x)y.
> $$
> 证明：$T$ 是有穷秩算子。

> [!exercise] 2
> 设 $a_n\to 0$，$T:\ell^p\to \ell^p$，$1\le p<\infty$，
> $$
> T:\{\xi_n\}\longmapsto \{a_n\xi_n\}.
> $$
> 求证 $T$ 是紧算子。

> [!exercise] 27
> 设 $\{a_{nk}\}$ 为一复数列，满足
> $$
> \sum_{n,k=1}^{\infty}|a_{nk}|^2<\infty.
> $$
> 证明由 $A$ 定义的算子
> $$
> A:\{\xi_n\}\mapsto
> \left\{
> \sum_{k=1}^{\infty}a_{nk}\xi_k
> \right\}_{n=1}^{\infty}
> $$
> 是 $\ell^2$ 到 $\ell^2$ 的紧算子。

> [!exercise] 28
> 举例说明：$H$ 是 Hilbert 空间，$A_n:H\to H$ 是紧算子列，若 $A_n$ 强收敛于 $T$，即
> $$
> \lim_{n\to\infty}\|A_nx-Tx\|=0,\quad \forall x\in H,
> $$
> 则 $T$ 未必是紧算子。
