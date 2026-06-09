> [!exercise] 1
> 假设 Hilbert 空间中的点列 $\{x_n\}$ 弱收敛到 $x_0$ 且
> $$
> \lim_{n \to \infty}\|x_n\|=\|x_0\|.
> $$
> 证明 $\{x_n\}$ 强收敛到 $x_0$，即
> $$
> \lim_{n \to \infty}\|x_n-x_0\|=0.
> $$

> [!proof] Proof: 
>
> $$ z\mapsto \left< z,x_0 \right> $$
> 是$H$上的有界线性算子, 由弱收敛性, 可知
> $$ \lim_{n\to \infty}\left< x_{n}, x_0 \right>= \left< x_0,x_0 \right>= \left\| x_0 \right\|^{2} $$  
> 考虑
> $$ \left< x_{n}-x_0, x_{n}-x_0 \right>= \left\| x_{n} \right\|^{2}+ \left\| x_0 \right\|^{2}-2\left< x_{n},x_0 \right> $$ 
> 令$n\to \infty$, 得到
> $$ \begin{aligned} \lim_{n\to \infty}\left\| x_{n}-x_0 \right\|^{2}&= \lim_{n\to \infty}\left< x_{n}-x_0,x_{n}-x_0 \right>\\&= \lim_{n\to \infty}\left(\left\| x_{n} \right\|^{2}+ \left\| x_0 \right\|^{2}-2 \left< x_{n},x_0 \right>\right)\\&= \left\| x_0 \right\|^{2}+ \left\| x_0 \right\|^{2}-2\left\| x_{0} \right\|^{2}= 0 \end{aligned} $$ 
> 故$\left\{ x_{n} \right\}$强收敛到$x_0$.


> [!exercise] 2
> 证明 **Lax-Milgram 定理**：设 $a(x,y)$ 是实 Hilbert 空间 $H$ 上的一个强制有界双线性函数，证明存在唯一的有界线性算子 $T \in \mathcal{L}(H)$，满足
> $$
> a(x,y)=\langle x,Ty\rangle,\qquad \forall x,y \in H,
> $$
> 且 $T$ 有有界逆算子 $T^{-1}\in \mathcal{L}(H)$。

> [!proof] Proof: 
> **存在性**:
> 定义
> $$ F_{y}\left(x\right)= a\left(x,y\right) $$ 
> 易见$F_{y}$是线性算子.
> 
> 由于$a$是有界的, 存在$M> 0$, 使得
> $$ \left| a\left(x,y\right) \right|\le M\left\| x \right\|\left\| y \right\|  $$ 
> 于是
> $$ \left\| F_{y}\left(x\right) \right\|\le M\left\| x \right\|\left\| y \right\|\implies \left\| F_{y} \right\|\le M\left\| y \right\| $$ 
> 
> $F_{y}$是有界线性算子. 由Riesz表示定理,存在$Ty \in H$, 使得
> $$ a\left(x,y\right)= F_{y}\left(x\right)=  \left< x, Ty \right> $$ 
> 且
> $$ \left\| Ty \right\|= \left\| F_{y} \right\| \le M\left\| y \right\|$$ 
> 定义
> $$ T: y\mapsto Ty $$ 
> 对于任意的$x$
> $$ \begin{aligned} \left< x, T\left(y_1+ ky_2\right) \right>&= a\left(x, y_1+ ky_2\right)= a\left(x,y_1\right)+k a\left(x,y_2\right)= \left< x, Ty_1 \right>+k \left< x,Ty_2 \right>\\&= \left< x, Ty_1+ kTy_2 \right> \end{aligned}  $$ 
> 于是
> $$ T\left(y_1+k y_2\right)= Ty_1+ kTy_2 $$ 
> 因此$T$是线性算子.
> 
> 且 
> $\left\| T \right\|\le M$, $T$是有界线性算子.
> 
> **唯一性**:
> 若$T_1,T_2$是有界线性算子, 使得
> $$ a\left(x,y\right)= \left< x,T_1y \right> = \left< x, T_2y \right>$$ 
> 于是对于任意的$x,y$,
> $$ \left< x, \left(T_1-T_2\right)y \right>= 0 $$ 
> 因此$T_1= T_2$. 
> 
> 
> 
> **$T$是单射**. 
> 
> 若
> $$ Tx_1= Tx_2 $$
> 则
> $$ 0 = \left< x_1-x_2, T\left(x_1-x_2\right) \right>= a\left(x_1-x_2,x_1-x_2\right)\ge m\left\| x_1-x_2 \right\|^{2}= 0 $$  
> 于是$x_1= x_2$
> 因此$T$是单射
> 
> 
> **$R\left(T\right)$稠密**
> 
> 任取$z\in \left(R\left(T\right)\right)^{\perp}$, 则
> $$a\left(z,y\right)=  \left< z, Ty \right>= 0, \forall y $$ 
> 特别地, 取$y= z$, 由强制性, 
> $$ m\left| z \right| ^{2}\le a\left(z,z\right)= 0\implies z= 0 $$ 
> 因此
> $$ \left(R\left(T\right)\right)^{\perp}= \left\{ 0 \right\} $$ 
> $R\left(T\right)$稠密.
> 
> **$R\left(T\right)$是闭的**. 设$\lim_{n\to \infty}Tx_{n}= y$, 则
> 由$a$的强制性, 
> $$ \left\| Tx \right\|\ge m \left\| x \right\| $$ 
> $$ \left\| x_{m}-x_n \right\|\le \frac{1 }{m }\left\| T\left(x_{m}-x_n\right) \right\|$$ 
> 由于$\left\{ Tx_{n} \right\}$是Cauchy列, 可知$\left\{ x_{m} \right\}$是Cauchy列. 由完备性, 存在$x_0\in H$, 使得$\lim_{n\to \infty}x_{n}= x_0$.
> 由$T$的连续性, 
> $$ Tx_0= y $$ 
> 因此$R\left(T\right)$是闭的. 
> 
> **$T^{-1}$存在性**
> 
> 综上可知$R\left(T\right)= H$, 故$T$是满射. 因此$T$是可逆的算子.
> 
> **$T^{-1}$有界性**
> 
> 再一次由强制性, 令$y= Tx$, 则$x= T^{-1} y$, 我们有
> $$ \left\| y \right\|\ge m \left\| T^{-1} y \right\|,\implies \left\| T^{-1}  \right\|\le \frac{1 }{m } $$ 
> 故$T^{-1}$是有界逆算子.








> [!exercise] 3
> 设 $H$ 为 Hilbert 空间，$M$ 是 $H$ 的闭子空间。证明 $M$ 为 $H$ 上某个非零连续线性泛函的零空间，当且仅当 $M^\perp$ 是一维子空间。

> [!proof] Proof: 
> 

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
