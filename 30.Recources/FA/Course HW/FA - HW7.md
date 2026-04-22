> [!exercise] Exercise: 1
> 设$X,Y$是$B^*$空间, $T:X\to Y$是线性映射. 求证:
> 1. 如果$T$连续且$D(T)$是闭的, 那么$T$是闭算子;
> 2. 如果$T$连续且是闭算子, 那么$Y$完备蕴含$D(T)$闭;
> 3. 如果$T$是单的闭算子, 那么$T^{-1}$也是闭算子;
> 4. 如果$X$完备, $T$是单的闭算子, $R(T)$在$Y$中稠密, 并且$T^{-1}$连续, 那么$T$是满射.

> [!proof] Proof: 
> 1. $$ G\left(T\right)= \left\{ \left(x,Tx\right): x\in D\left(T\right) \right\} $$ 
>    任取$G\left(T\right)$上的收敛$\left\{ \left(x_{n}, Tx_{n}\right) \right\}$, $\lim_{n\to \infty}x_{n}= x$, $\lim_{n\to \infty}Tx_{n}= y$.
>    由于$D\left(T\right)$是闭的,  我们有$x\in D\left(T\right)$. 由于$T$是连续的, 我们有$y= Tx$. 因此$\left(x,y\right)\in G\left(T\right)$, $G\left(T\right)$上点列$\left\{ \left(x_{n},Tx_{n}\right) \right\}$的收敛点落在$G\left(T\right)$上, $G\left(T\right)$是一个闭集, 因此$T$是闭算子.

任取$D\left(T\right)$上的收敛点列$\left\{ x_{n} \right\}$, 设$\lim_{n\to \infty}x_{n}= x$. 则$\left\{ \left(x_{n},Tx_{n}\right) \right\}$是$G\left(T\right)$上的点列.


> [!exercise] Exercise: 2
> 设$X,Y$是$B$空间, $T\in \mathscr{B}(X,Y)$是满射, 求证: 如果在$Y$中$y_n\to y_0$, 则存在$C>0$与$X$中的$x_n\to x_0$, 使得$Tx_n=y_n$, 且$\|x_n\|\le C\|y_n\|$.

> [!exercise] Exercise: 10
> 设 $X$ 是 Banach 空间, $A, B$ 是 $X$ 的闭子空间, 且 $X=A+B$. 证明存在常数 $M$, 使得每一个 $x \in X$ 有表示 $x=a+b$, 其中 $a \in A, b \in B$ 并且
> $$ \| a \| + \| b \| \leqslant M \| x \| .$$

> [!exercise] Exercise: 11
> 设 $X, Y$ 是 Banach 空间, $T: X \to Y$ 是线性算子并且对任意 $x_n \in X$, 当 $x_n \to 0(n \to \infty)$ 时, 对于每一个 $f \in Y^*$,
> $$ f(Tx_n) \to 0 \quad (n \to \infty) .$$
> 证明 $T$ 是连续的.

> [!exercise] Exercise: 12
> 设 Banach 空间 $X$ 具有 Schauder 基 $\{e_k\}$ . 对于每一个 $x \in X, x = \sum_{k=1}^{\infty}\alpha_k e_k$ 令
> $$ f_n(x) = \alpha_n \quad (n = 1, 2, \cdots) .$$
> 证明每一个 $f_n$ 是 $X$ 上的有界线性泛函(提示: 利用习题二第 15 题的结果).