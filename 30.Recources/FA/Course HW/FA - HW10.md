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
> 证明空间 $L^1[a,b]$ 与 $\ell^1$ 不是自反的.

> [!proof] Proof:
> $L^1$ 非自反:
> 设 $a< b$. 记 $\varphi :\left(L^{1}\right)^{*}\simeq L^{\infty}$ 是等距同构.
> 在 $C\left[ a,b \right]\subseteq L^{\infty}$ 上定义
> $$ \Lambda \left(g\right)= g\left(a\right) $$
> 则 $\left| \Lambda \left(g\right) \right|\le \left\| g \right\|_{\infty}$, 故 $\Lambda \in C\left[ a,b \right]^{*}$.
> 由 Hahn-Banach, $\Lambda$ 可延拓为 $F\in \left(L^{\infty}\right)^{*}\simeq \left(L^{1}\right)^{**}$.
> 
> 若 $L^{1}\left[ a,b \right]$ 自反, 则 $\exists\, x\in L^{1}$, 使得
> $$ F\left(y\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t,\quad \forall y\in L^{\infty} $$
> 特别地, $\forall g\in C\left[ a,b \right]$,
> $$ g\left(a\right)= \int _{a}^{b}x\left(t\right)g\left(t\right)\,d t $$
> 取 $g_{n}\in C\left[ a,b \right]$, $0\le g_{n}\le 1$, $g_{n}\left(a\right)= 1$, $\operatorname{supp}g_{n}\subseteq \left[ a,a+ \frac{1}{n} \right]$. 则
> $$ 1= g_{n}\left(a\right)= \int _{a}^{a+ 1/n}x\left(t\right)g_{n}\left(t\right)\,d t\le \int _{a}^{a+ 1/n}\left| x\left(t\right) \right|\,d t\to 0 $$
> 矛盾.
> 
> $\ell ^{1}$ 非自反:
> 记 $\varphi :\left(\ell ^{1}\right)^{*}\simeq \ell ^{\infty}$ 是等距同构. 设 $c\subseteq \ell ^{\infty}$ 是收敛序列子空间. 在 $c$ 上定义
> $$ \Lambda \left(y\right)= \lim _{n\to \infty}y_{n} $$
> 则 $\left| \Lambda \left(y\right) \right|\le \left\| y \right\|_{\infty}$, 故 $\Lambda \in c^{*}$.
> 由 Hahn-Banach, $\Lambda$ 可延拓为 $F\in \left(\ell ^{\infty}\right)^{*}\simeq \left(\ell ^{1}\right)^{**}$.
> 
> 若 $\ell ^{1}$ 自反, 则 $\exists\, x= \left(x_{k}\right)\in \ell ^{1}$, 使得
> $$ F\left(y\right)= \sum _{k}x_{k}y_{k},\quad \forall y\in \ell ^{\infty} $$
> 取 $y= e_{k}\in c$, $\Lambda \left(e_{k}\right)= 0$, 故
> $$ x_{k}= F\left(e_{k}\right)= 0,\quad \forall k $$
> 即 $x= 0$. 但取 $y= \mathbf 1= \left(1,1,\cdots \right)\in c$,
> $$ 1= \Lambda \left(\mathbf 1\right)= F\left(\mathbf 1\right)= \sum _{k}x_{k}= 0 $$
> 矛盾.


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