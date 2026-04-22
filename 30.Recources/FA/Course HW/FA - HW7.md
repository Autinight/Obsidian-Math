> [!exercise] Exercise: 1
> 设$X,Y$是$B^*$空间, $T:X\to Y$是线性映射. 求证:
> 1. 如果$T$连续且$D(T)$是闭的, 那么$T$是闭算子;
> 2. 如果$T$连续且是闭算子, 那么$Y$完备蕴含$D(T)$闭;
> 3. 如果$T$是单的闭算子, 那么$T^{-1}$也是闭算子;
> 4. 如果$X$完备, $T$是单的闭算子, $R(T)$在$Y$中稠密, 并且$T^{-1}$连续, 那么$T$是满射.


任取$y\in Y$, 由于$R\left(T\right)$稠密, 存在$\left\{ x_{n} \right\}\subseteq D\left(T\right)$ 使得$\lim_{n\to \infty}Tx_{n}= y$. 
记$y_{n}= Tx_{n}$, 则$T^{-1} y_{n}= x_{n}$. $\lim_{n\to \infty}y_{n}= y$. 由于$T^{-1}$是连续算子, 由$\left\{ y_{n} \right\}$是Cauchy列, 可知$\left\{ x_{n} \right\}$也是Cauchy列. 由于$X$是完备的, 存在$x$使得$\lim_{n\to \infty}x_{n}= x$. 则
$$ \lim_{n\to \infty}\left(y_{n},T^{-1} y_{n}\right)= \left(y,x\right) $$ 
由3.可知$T^{-1}$也是闭算子, 因此$\left(y,x\right)\in G\left(T^{-1} \right)$即 $\left(x,y\right)\in G\left(T\right)$. 故$Tx= y$.


> [!proof] Proof: 
> 1. $$ G\left(T\right)= \left\{ \left(x,Tx\right): x\in D\left(T\right) \right\} $$ 
>    任取$G\left(T\right)$上的收敛$\left\{ \left(x_{n}, Tx_{n}\right) \right\}$, $\lim_{n\to \infty}x_{n}= x$, $\lim_{n\to \infty}Tx_{n}= y$.
>    由于$D\left(T\right)$是闭的,  我们有$x\in D\left(T\right)$. 由于$T$是连续的, 
>    $$ \left\| Tx_{n}-Tx \right\|\le \left\| T \right\|\left\| x_{n}-x \right\|\implies \lim_{n\to \infty}Tx_{n}= Tx\implies y= Tx $$  
>    因此$\left(x,y\right)\in G\left(T\right)$, $G\left(T\right)$上点列$\left\{ \left(x_{n},Tx_{n}\right) \right\}$的收敛点落在$G\left(T\right)$上, $G\left(T\right)$是一个闭集, 因此$T$是闭算子.
> 2. 任取$D\left(T\right)$上的收敛点列$\left\{ x_{n} \right\}$, 设$\lim_{n\to \infty}x_{n}= x$. 则$\left\{ \left(x_{n},Tx_{n}\right) \right\}$是$G\left(T\right)$上的点列. 由于$T$是有界算子, 
>     $$ \left\| Tx_{m}-Tx_{n} \right\|\le \left\| T \right\|\left\| x_{m}-x_{n} \right\| $$ 
>      由于$\left\{ x_{n} \right\}$是Cauchy列, 可得$\left\{ Tx_{n} \right\}$是$Y$上的Cauchy列, 由于$Y$是完备的, 可知$\left\{ Tx_{n} \right\}$收敛. 设$\lim_{n\to \infty}Tx_{n}= y$, 则
>      $$ \lim_{n\to \infty}\left(x_{n},Tx_{n}\right) = \left(x,y\right)$$ 
>     由$T$是闭算子可知, $\left(x,y\right)\in G\left(T\right)$, 故$x\in D\left(T\right)$. 这表明$D\left(T\right)$是闭的.
> 3. 由于$T:D\left(T\right)\to R\left(T\right)$
是单的闭算子, 可知$T^{-1} :R\left(T\right)\to D\left(T\right)$也是一个线性算子. 注意到
>    
>    $$ \begin{aligned} G\left(T^{-1} \right)= \left\{ \left(y,T^{-1} y\right): y\in R\left(T\right) \right\}&= \left\{ \left(Tx,x\right): Tx\in R\left(T\right) \right\}\\&= \left\{ \left(Tx,x\right): x\in D\left(T\right) \right\}  \end{aligned}$$ 
>    定义
>    $$ \tau : X\times Y\to Y\times X,\quad \tau \left(x,y\right)= \tau \left(y,x\right) $$  
>    则$\tau$是一个等距同构, 使得$\tau \left(G\left(T\right)\right)=G\left(T^{-1} \right)$

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