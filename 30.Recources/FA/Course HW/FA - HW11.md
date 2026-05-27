> [!exercise] 1
> 设 $X,Y$ 是线性赋范空间，$T \in \mathcal{B}(X,Y)$ 是紧算子，证明：$TX$ 是可分的。

> [!proof] Proof: 
> 设$B_{X}\left(r\right)$, 是$X$中半径为$r$的球. 那么
> $$ TX= \bigcup _{r = 1}^{\infty} T\left(B_{X}\left(r\right)\right) $$ 
> 
> 因此只需要证明
> $$ T\left(B_{X}\left(r\right)\right) $$
> 是可分的. 
> 又
> $$ T\left(B_{X}\left(r\right)\right)= T\left(rB_{X}\left(1\right)\right)= rT \left(B_{X}\left(1\right)\right) $$  
> 
> 因此只需要证明$T\left(B_{X}\left(1\right)\right)$是可分的.
> 
> 由于$T$是紧算子, $\overline{T\left(B_{X}\left(1\right)\right)}$是紧集, 从而$T\left(B_{X}\left(1\right)\right)$是预列紧的, 进而$T\left(B_{X}\left(1\right)\right)$是完全有界的. 而完全有界集是可分的, 因此$T\left(B_{X}\left(1\right)\right)$可分, 进而$T\left(B_{X}\left(r\right)\right)$可分, $TX$可分.




> [!exercise] 2
> 设 $k(s,t) \in L^2([a,b]\times [a,b])$，求证：算子
> $$
> T: x(t) \longmapsto \int_a^b k(s,t)x(s)\,ds
> $$
> 是 $L^2[a,b]$ 上的紧算子。（提示：利用全连续算子）

> [!proof] Proof: 
> 由于
> $$ \left\| T x \right\|_{L^{2}}\le \left\| k \right\|_{L^{2}}\left\| x \right\|_{L^{2}} \implies \left\| T \right\|\le \left\| k \right\|_{L^{2}}$$ 
> 故$T$是有界的线性算子. 
> 由于$L^{2}\left[ a,b \right]$是自反的空间, 而自反空间上的全连续算子是紧的, 因此只需要证明$T$是全连续的.
>
> 任取弱收敛点列$x_{n}\xrightarrow{w}x$, 我们希望证明
> $$ \left\| Tx_{n}-Tx \right\|_{L^{2}} \to 0$$ 
>
> 对于任意固定的$t_0\in \left[ a,b \right]$, 定义
> $$ T_{t_0}: L^{2}\left[ a,b \right]\to \mathbb{R}  $$
> $$ x\mapsto \int _{a}^{b}k\left(s,t_0\right)x\left(s\right)\,d s $$  
> 由于
> $$ \left| T_{t_0}x \right|\le \left\| k \right\|_{L^{2}}\left\| x \right\|_{L^{2}}\implies \left\| T_{t_0} \right\|\le \left\| k \right\|_{L^{2}}  $$ 
> 故$T_{t_0}$是有界的线性算子, $T_{t_0}\in \left(L^{2}\left[ a,b \right]\right)^{*}$. 于是由弱收敛性, 可知
> $$ \lim_{n\to \infty}T_{t_0}x_{n}= T_{t_0}x $$ 
> 即关于$t$的函数$T_{t}\left(x_{n}-x\right)$逐点地收敛到$0$. 
> 此外, 由于弱收敛列是有界的, 存在$M$, 使得$\left\| x_{n} \right\|_{L^{2}},\left\| x \right\|_{L^{2}}\le M$.
> 那么
> $$ \begin{aligned} \left| T_{t}\left(x_{n}-x\right) \right|&=\left|  \int _{a}^{b}k\left(s,t\right)\left(x_{n}\left(s\right)-x\left(s\right)\right)\,d s\right|\\&\le \left\| k \right\|_{L^{2}}\left\| x_{n}-x \right\|_{L^{2}}\\&\le 2M\left\| k \right\|_{L^{2}} \end{aligned}   $$ 
> 从而$4M^{2}\left\| k \right\|_{L^{2}}^{2}$构成$t\mapsto \left| T_{t}\left(x_{n}-x\right) \right|^{2}$在 $L\left[ a,b \right]$上的控制函数.
> 
> 又
> $$ \begin{aligned} \left\| Tx_{n}-Tx \right\|_{L^{2}}^{2}&= \int _{a}^{b}\left| \int _{a}^{b} k\left(s,t\right)\left(x_{n}\left(s\right)-x\left(s\right)\right)\,d s \right|^{2}\,d t\\&= \int _{a}^{b}\left| T_{t}\left(x_{n}-x\right) \right|^{2}\,d t  \end{aligned} $$ 
> 由控制收敛定理
> $$ \lim_{n\to \infty}\left\| Tx_{n}-Tx \right\| _{L^{2}}^{2}= \lim_{n\to \infty}\int _{a}^{b}\left| T_{t}\left(x_{n}-x\right) \right|^{2}\,d t = 0$$ 
> 即$\left\{ Tx_{n} \right\}$$L^{2}$收敛于$Tx$, 因此$T$是全连续的, 故而$T$是紧算子.







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
