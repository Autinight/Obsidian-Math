> [!exercise] 1
> 假设 Hilbert 空间中的点列 $\{x_n\}$ 弱收敛到 $x_0$ 且
> $$
> \lim_{n \to \infty}\|x_n\|=\|x_0\|.
> $$
> 证明 $\{x_n\}$ 强收敛到 $x_0$，即
> $$
> \lim_{n \to \infty}\|x_n-x_0\|=0.
> $$

> [!exercise] 2
> 证明 **Lax-Milgram 定理**：设 $a(x,y)$ 是实 Hilbert 空间 $H$ 上的一个强制有界双线性函数，证明存在唯一的有界线性算子 $T \in \mathcal{L}(H)$，满足
> $$
> a(x,y)=\langle x,Ty\rangle,\qquad \forall x,y \in H,
> $$
> 且 $T$ 有有界逆算子 $T^{-1}\in \mathcal{L}(H)$。

> [!exercise] 3
> 设 $H$ 为 Hilbert 空间，$M$ 是 $H$ 的闭子空间。证明 $M$ 为 $H$ 上某个非零连续线性泛函的零空间，当且仅当 $M^\perp$ 是一维子空间。

> [!exercise] 4
> 设 $T$ 是 Hilbert 空间 $H$ 上的线性算子且对所有 $x,y\in H$，
> $$
> (Tx,y)=(x,Ty).
> $$
> 证明 $T$ 是有界算子。

> [!exercise] 5
> 设 $X$ 是线性赋范空间，$X^*$ 是其对偶空间。
> 
> (1) 设 $M\subset X$ 是线性子空间，则
> $$
> ({}^\perp M)^\perp=\overline{M}.
> $$
> 
> (2) 设 $N\subset X^*$ 是线性子空间，则
> $$
> {}^\perp(N^\perp)\supset \overline{N}.
> $$

> [!exercise] 6
> 设 $X,Y$ 是 Banach 空间，$T\in \mathcal{B}(X,Y)$，求证：
> 
> (1)
> $$
> N(T)={}^\perp R(T^*).
> $$
> 
> (2)
> $$
> N(T^*)=R(T)^\perp.
> $$
> 
> (3)
> $$
> N(T)^\perp\supset \overline{R(T^*)}.
> $$
> 
> (4)
> $$
> {}^\perp N(T^*)=\overline{R(T)}.
> $$

> [!exercise] 7
> 设 $X$ 是 Banach 空间，$A\in C(X)$，$T=I-A$，求证：
> 
> (1)
> $$
> \forall [x]\in X/N(T),\ \exists x_0\in [x],
> $$
> 使得
> $$
> \|x_0\|=\|[x]\|.
> $$
> 
> (2) 若 $y\in X$ 使方程 $Tx=y$ 有解，则其中必有一个解达到范数最小。
