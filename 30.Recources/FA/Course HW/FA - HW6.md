> [!exercise] Exercise: 1
> 给定一个 $m \times n$ 阶矩阵 $A$, 定义线性算子 $T: \mathbb{R}^n \to \mathbb{R}^m, x \mapsto Ax$. 试证明: $T$ 的算子范数等于 $A$ 的最大奇异值, 即矩阵 $A^T A$ 的最大特征值的平方根.

> [!proof] Proof: 
>  $$ \left< A^{\top}Ax,x \right>= \left< Ax,Ax \right>\ge 0 $$
> 因此$A^{\top}A$是半正定的,  
> $A^{\top}A$是实对称矩阵, 可对角化
> 设其特征值为$\lambda _1 \ge \lambda _2 \ge \cdots \ge \lambda _{n}\ge 0$.
>  $$ \left\| T \right\|= \max \left\{ \left\|  Ax \right\|: x\in S^{n-1}  \right\} $$  
> 存在 $x_0\in S^{n-1}\subseteq \mathbb{R} ^{n}$, 使得$A^{\top}Ax_0= \lambda _1 x_0$. 那么
>
>  $$\left(\left\| T \right\|\left\| x_0 \right\|\right)^{2}\ge  \left\| Ax_0 \right\|^{2}= \left< Ax_0,Ax_0 \right>= \left< A^{\top}Ax_0,x_0 \right>= \left< \lambda _1 x_0,x_0 \right>= \lambda _1 \left\| x_0 \right\|^{2}  $$ 
> 于是
>  $$ \left\| T \right\|\ge \sqrt{\lambda _1 } $$ 
> 另一方面, 
> 由Raileigh Quotient不等式, 对于任意的$x\in S^{n-1}\subseteq \mathbb{R} ^{n}$, 我们有
>  $$ \lambda _{n}\le \left< A^{\top}Ax,x \right>\le \lambda _1  $$ 
> 于是
>  $$ \lambda _1 \ge \left\| Ax \right\|^{2} $$
> 而$x$是$S^{n-1}$上的任意向量, 因此$\lambda _1 \ge \left\| T \right\|^{2}$, $\sqrt{\lambda _1 }\ge \left\| T \right\|$. 
>
> 因此
>  $$ \sqrt{\lambda _1 }= \left\| T \right\| $$ 


> [!exercise] Exercise: 2
> 设 $y \in C[0, 1]$, 定义泛函 $f: C[0, 1] \to \mathbb{R}, x \mapsto \int_0^1 x(t)y(t)dt$, 求 $\|f\|$.

> [!exercise] Exercise: 3
> 证明: 线性算子 $T: X \to Y$ 有界, 当且仅当 $\exists x_0 \in X$ 以及 $r_0 > 0$, 使得 $T$ 把 $\bar{B}_{r_0}(x_0) = \{x \in X | \|x - x_0\| \le r_0\}$ 映为 $Y$ 中的有界集.

> [!exercise] Exercise: 4
> 线性算子 $T: X \to Y$ 的**核 (kernel)** 定义为 $N(T) = \{x \in X | Tx = 0\}$. 证明: $X$ 上的线性泛函 $f: X \to \mathbb{K}$ 是有界的, 当且仅当 $N(f)$ 是 $X$ 的闭线性子空间.


> [!exercise] Exercise: 5
> 设$\sup_{n\geq 1}|a_n|<\infty$, 在$l^1$上定义算子$T: y=Tx$, 其中$x=\{\xi_k\}$, $y=\{\eta_k\}$, $\eta_k=a_k\xi_k$ ($k=1,2,\cdots$). 证明$T$是$l^1$上的有界线性算子并且$\|T\|=\sup_{n\geq 1}|a_n|$.

> [!exercise] Exercise: 6
> 若$f$是$[a,b]$上的可测函数，而且对$\forall g\in L^p[a,b](1<p<\infty)$，都有$f\cdot g\in L^1[a,b]$，求证:$f\in L^q[a,b]$，其中$\frac{1}{p}+\frac{1}{q}=1$.

> [!exercise] Exercise: 7
> 如果序列$a=\{a_k\}$使得$\forall x=\{\xi_k\}\in l^1$，线性泛函$f(x)=\sum_{k=1}^{\infty}a_k\xi_k$都收敛.
> 证明：
> 1. $a\in l^{\infty}$;
> 2. $\|f\|=\|a\|_{l^{\infty}}=\sup_{k\ge 1}|a_k|$.

> [!exercise] Exercise: 8
> 设 $\{x_n\} \subset L^p[a,b] (1 < p < \infty)$. 证明对于每一个 $y \in L^q[a,b] \left(\frac{1}{p} + \frac{1}{q} = 1\right)$, $\int_a^b x_n(t)y(t)\mathrm{d}t \to 0 \quad (n \to \infty)$, 当且仅当 $\sup_n \| x_n \| < \infty$, 并且对于每一个可测子集 $E \subset [a,b]$, $\int_E x_n(t)\mathrm{d}t \to 0 (n \to \infty)$.

> [!exercise] Exercise: 9
> 设 $X$ 是 Banach 空间, $p(x)$ 是 $X$ 上的泛函, 满足: 1) $p(x) \geqslant 0$; 2) 当 $\alpha \geqslant 0$ 时, $p(\alpha x) = \alpha p(x)$; 3) $p(x+y) \leqslant p(x) + p(y)$. 并且当 $x, x_n \in X, x_n \to x (n \to \infty)$ 时, $\varliminf\limits_{n} p(x_n) \geqslant p(x)$. 证明存在常数 $M$, 使得
> $$ p(x) \leqslant M \| x \| \quad \quad (x \in X). $$

> [!exercise] Exercise: 10
> 设 $\{x_k\}$ 是 Banach 空间 $X$ 中的点列. 证明如果对于每一个 $f \in X^*$, $\sum\limits_{k=1}^\infty \mid f(x_k) \mid < \infty$, 则存在常数 $M$, 使得对于每一个 $f \in X^*$
> $$ \sum_{k=1}^\infty \mid f(x_k) \mid \leqslant M \| f \|. $$