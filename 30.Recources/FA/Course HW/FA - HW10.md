> [!exercise] 1
> 证明有限维赋范空间中，弱收敛与强收敛等价.

> [!proof] Proof: 
> 设$E$是$n$维赋范空间, $\left\{ \mathbf{x}^{\left(n\right)} \right\}\in E$.
> 只需要证明, 
> $$ \mathbf{x}^{\left(n\right)}\xrightarrow{w}0\implies  \left\| \mathbf{x}^{\left(n\right)} \right\|\to 0  $$ 
> 对于$k= 1,\cdots,n$, 定义
> $$ f_{k}\left(\mathbf{x}\right) = x_{k},\quad \mathbf{x}= \left(x_1,\cdots ,x_{n}\right)$$  
> 显然$f_{k}\in E^{*}$.
> 由弱收敛, 对于任意的$k$, 
> $$ \lim_{n\to \infty}x_{k}^{\left(n\right)}= \lim_{n\to \infty}f_{k}\left(\mathbf{x}^{\left(n\right)}\right)= 0 $$ 
> 那么
> $$ \lim_{n\to \infty}\left\| \mathbf{x}^{\left(n\right)} \right\|^{2}=\lim_{n\to \infty}\sum _{k}\left(x_{k}^{\left(n\right)}\right)^{2}= 0 $$ 
> 因此$\left\| x^{\left(n\right)} \right\|\to 0$.

> [!exercise] 2
> 证明空间 $L^1[a,b]$ 与 $l^1$ 不是自反的.

> [!proof] Proof: 
> **$L^{1}$非自反:**
记$\varphi :\left(L^{1}\right)^{*}\simeq L^{\infty}$是等距同构. 对于$f\in \left(L^{1}\right)^{*}$,  记$y= \varphi f\in L^{\infty}$. 
> 我们定义
> $$ F\left(f\right)= \left(\varphi f\right)\left(a\right)= y\left(a\right),\quad \forall f\in \left(L^{1}\right)^{*} $$ 
> 则显然$F$是$\left(L^{1}\right)^{*}$上的线性算子, 并且
> $$ \left| F\left(f\right) \right|= \left| y\left(a\right) \right|\le \left\| y \right\|_{\infty}= \left\| f \right\|   $$ 
> 这表明$\left\| F \right\|\le 1$, 因此$F\in \left(L^{1}\right)^{**}$.
> 
> 如果$L^{1}\left[ a,b \right]$是自反的, 则存在$x\in L^{1}$, 使得
> $$ F\left(f\right)= f\left(x\right) $$ 
> 根据$y= \varphi f$, 我们有 
> $$ f\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 
> 那么
> $$F\left(f\right)=  y\left(a\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 
> 但是如果取
> $$ y\left(t\right)= \begin{cases} 1,&t= a\\0,& t> a \end{cases}  $$ 
> 那么就会导致
> $$ 1= y\left(a\right)= \int _{a}^{b}x\left(y\right)y\left(t\right)\,d t= 0 $$ 
> 矛盾.
> 因此$L^{1}\left[ a,b \right]$不可能是自反的.


> [!exercise] 3
> 证明：$B$ 空间 $X$ 是自反的，当且仅当 $X^*$ 是自反的.

> [!exercise] 4
> 设 $X$ 是 $B^*$ 空间，$\{x_n\}\subset X$ 弱收敛到 $x_0$，则存在 $\{x_n\}$ 的凸组合序列强收敛到 $x_0$，即
> $$
> \forall \varepsilon>0,\ \forall N\in\mathbb N,\ \text{以及}\ \lambda_i\ge 0,\ \sum_{i=1}^N \lambda_i=1,
> $$
> 使得
> $$
> \left\|x_0-\sum_{i=1}^N \lambda_i x_i\right\|<\varepsilon.
> $$

> [!exercise] 5
> 设 $M$ 是赋范空间 $X$ 的闭子空间，$x_0\in X$ 是 $M$ 中某个弱收敛点列的极限，证明 $x_0\in M$。

> [!exercise] 6
> 令 $f_n(t)=\frac{1}{n}\sum_{k=1}^{n}e^{ikt}$，证明在空间 $X=L^2[-\pi,\pi]$ 中，$f_n$ 弱收敛到 $0$.

> [!exercise] 7
> 求证：在自反的 $B$ 空间中，集合的弱列紧性和有界性是等价的.

> [!exercise] 8
> 求证：$B^*$ 空间中的闭凸集是弱闭的.

> [!exercise] 9
> 设 $X$ 是自反的 $B$ 空间，$M$ 是 $X$ 中的有界闭凸集，证明：
> 任意 $f\in X^*$ 都在 $M$ 上达到最大和最小值.

> [!exercise] 10
> 设 $X$ 是赋范空间，$x_0,x_n\in X$ $(n=1,2,\cdots)$。证明若 $x_n \xrightarrow{W} x_0$ $(n\to\infty)$，则存在 $\{x_n\}$ 的有穷线性组合序列强收敛于 $x_0$。


> [!exercise] 11
> 设 $X$ 是一致凸赋范空间（参看习题二第 18 题），$x_0,x_n\in X$ $(n=1,2,\cdots)$。证明如果 $x_n \xrightarrow{W} x_0$ $(n\to\infty)$ 且 $\|x_n\|\to\|x_0\|$ $(n\to\infty)$，则 $x_n\to x_0$ $(n\to\infty)$。