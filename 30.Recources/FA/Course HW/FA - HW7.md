> [!exercise] Exercise: 1
> 设$X,Y$是$B^*$空间, $T:X\to Y$是线性映射. 求证:
> 1. 如果$T$连续且$D(T)$是闭的, 那么$T$是闭算子;
> 2. 如果$T$连续且是闭算子, 那么$Y$完备蕴含$D(T)$闭;
> 3. 如果$T$是单的闭算子, 那么$T^{-1}$也是闭算子;
> 4. 如果$X$完备, $T$是单的闭算子, $R(T)$在$Y$中稠密, 并且$T^{-1}$连续, 那么$T$是满射.

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
> 4. 任取$y\in Y$, 由于$R\left(T\right)$稠密, 存在$\left\{ x_{n} \right\}\subseteq D\left(T\right)$ 使得$\lim_{n\to \infty}Tx_{n}= y$. 
>    记$y_{n}= Tx_{n}$, 则$T^{-1} y_{n}= x_{n}$. $\lim_{n\to \infty}y_{n}= y$. 由于$T^{-1}$是连续算子, 由$\left\{ y_{n} \right\}$是Cauchy列, 可知$\left\{ x_{n} \right\}$也是Cauchy列. 由于$X$是完备的, 存在$x$使得$\lim_{n\to \infty}x_{n}= x$. 则
>    $$ \lim_{n\to \infty}\left(y_{n},T^{-1} y_{n}\right)= \left(y,x\right) $$ 
>    由3.可知$T^{-1}$也是闭算子, 因此$\left(y,x\right)\in G\left(T^{-1} \right)$即 $\left(x,y\right)\in G\left(T\right)$. 故$Tx= y$. $T$是满射.


> [!exercise] Exercise: 2
> 设$X,Y$是$B$空间, $T\in \mathscr{B}(X,Y)$是满射, 求证: 如果在$Y$中$y_n\to y_0$, 则存在$C>0$与$X$中的$x_n\to x_0$, 使得$Tx_n=y_n$, 且$\|x_n\|\le C\|y_n\|$.

> [!proof] Proof: 
> 设$y_{n}\to y$. 由于$T$是满射, 可取$x_0\in X$使得$Tx_0= y_0$. 令
> $$ z_{n}= y_{n}-y_0$$ 
> 则
> $$ \lim_{n\to \infty}z_{n}= 0 $$ 
> 由开映射定理, $T$是一个开映射. 取$X$中开的单位球$B_{X}\left(0,1\right)$, 则$T\left(B_{X}\left(0,1\right)\right)$是一个开集. 特别地, 由于$0= T\left(0\right)\in T\left(B_{X}\left(0,1\right)\right)$, 存在$\delta > 0$, 使得
> $$ B_{Y}\left(0,\delta \right)\subseteq T\left(B_{X}\left(0,1\right)\right) $$ 
> 由于$\frac{\delta z_{n} }{2\left\| z_{n} \right\| }\in B_{Y}\left(0,\delta \right)$, 可知存在$u_{n}\in B_{X}\left(0,1\right)$, 使得$Tu_{n}= \frac{\delta z_{n} }{2\left\| z_{n} \right\| }$
> 于是令$x_{n}= \frac{2\left\| z_{n} \right\| }{\delta  }u_{n}+ x_0$, 我们有
> $$ \left\| x_{n} -x_0\right\|= \frac{2 \left\| z_{n} \right\|}{\delta } \left\| u_{n} \right\|\le \frac{2 }{\delta  }\left\| z_{n} \right\|$$ 
> 令$n\to \infty$, 得到
> $$ \lim_{n\to \infty}x_{n}= x_0 $$ 
> 并且
> $$ \left\| x_{n}-x_0 \right\|\le \frac{2 }{\delta  }\left\| y_{n}-y_0 \right\| $$ 
> 若$y_0=0$,ze取$x_0=0$,cimy命题
> $$ \left\| x_{n} \right\|\le \frac{2 }{\delta  }\left(\left\|y_{n}  \right\|+ \left\|y_0 \right\|\right)+ \left\| x_0 \right\|\le C\left\| y_{n} \right\| $$  

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