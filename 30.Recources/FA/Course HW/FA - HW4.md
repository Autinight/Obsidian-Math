> [!exercise] Exercise: 1
> 设 $(X_1, \|\cdot\|_1)$ 和 $(X_1, \|\cdot\|_1)$ 是两个 $B^*$ 空间, 在乘积空间 $X = X_1 \times X_2$ 中定义范数
> $$
> \|x\| = \max(\|x_1\|_1, \|x_2\|_2), \forall x = (x_1, x_2) \in X.
> $$
> 证明: 如果 $X_1$ 和 $X_2$ 完备, 则 $X$ 是 **Banach** 空间.

> [!proof] Proof: 
> $X$作为线性空间的积, 自然地构成一个线性空间.
>
> 考虑$\left\| \cdot  \right\|$:
>   1. 显然$\left\| x \right\|\ge 0$. 若$\left\| x \right\|= 0$, 则$\left\| x_1 \right\|_{1}= \left\| x_{2} \right\|_{2}= 0\implies x_1= 0_{X_1},x_2= 0_{X_2}$.
>   2.  $$ \begin{aligned} \left\| \lambda x \right\| &= \max \left(\left\|\lambda  x_1 \right\|_{1},\left\| \lambda x_2 \right\|_{2}\right)\\&= \max \left(\left| \lambda  \right|\left\| x_1 \right\|_{1},\left| \lambda  \right|\left\| x_2 \right\|_{2}  \right)\\&= \left| \lambda  \right|\max \left(\left\| x_1 \right\|_{1},\left\| x_2 \right\|_{2}\right)\\&= \left| \lambda  \right|\left\| x \right\|   \end{aligned}$$ 
>  3.  $$ \begin{aligned} \left\| x+ y \right\|&= \max \left(\left\| x_1 + y_1\right\|_{1},\left\| x_2+ y_2 \right\|_{2}\right)\\&\le \max \left(\left\| x_1 \right\|_{1}+ \left\| y_1 \right\|_{1}, \left\| x_2 \right\|_{2}+ \left\| y_2 \right\|_{2}\right)\\&\le \max \left(\left\| x_1 \right\|_{1},\left\| x_2\right\|_{2}\right)+ \max \left(\left\| y_1 \right\|_{1},\left\| y_2 \right\|_{2}\right)\\&= \left\| x \right\|+ \left\| y \right\| \end{aligned} $$ 
> 故$X$是赋范线性空间.
> 为了说明$X$完备, 任取$X$的Cauchy列$\left\{ x^{\left(k\right)} \right\}$, 由
>  $$ \left\| x^{\left(k\right)}_{1}-x^{\left(l\right)}_{1} \right\|_{1} = \left\| \left(x^{\left(k\right)}-x^{\left(l\right)}\right)_{1} \right\|_{1}\le \left\| x \right\|$$ 
> 可得$\left\{ x^{\left(k\right)}_{1} \right\}$也是$X_1$上的Cauchy列; 类似地, $\left\{ x_2^{\left(k\right)} \right\}$是$X_2$上的Cauchy列. 设$\lim_{k\to \infty}x_{1}^{\left(k\right)}= x_1$, $\lim_{k\to \infty}x_{2}^{\left(k\right)}= x_2$. 令$x= \left(x_1,x_2\right)$. 那么
>  $$ \lim_{k\to \infty}\left\| x^{\left(k\right)}-x \right\|= \lim_{k\to \infty}\max \left(\left\| x_1^{\left(k\right)}-x_1 \right\|_{1},\left\| x_2 ^{\left(k\right)}-x_2\right\|_{2}\right)= 0 $$ 
> 故$\left\{ x^{\left(k\right)} \right\}$在$X$上收敛于$x$, $X$是Banach的.

> [!exercise] Exercise: 2
> 考虑 $c$ 空间中的子空间
> $$
> M = \{x = \{\xi_k\} | \xi_1 = \xi_2 = \cdots = \operatorname{const}\}.
> $$
> 证明商空间 $c/M$ 与空间 $c_0$ 线性同构但不等距.

> [!proof] Proof: 
> $c/M$定义为集合$c+ M$和范数
>  $$ \left\| x+ M \right\|_{c/M}= \inf _{y\in M}\left\| x+ y \right\|_{c} $$ 
> 设$x= \left\{ \xi _{k} \right\}\in c$, 记$a_{x}= \lim_{k\to \infty}\xi _{k}$. 则令$e= \left(1,1,\cdots \right)$, 则$M= \operatorname{span}\left\{ e \right\}$, 且$x-a_{x}e\in c_0$.
> 
> 定义映射$L:c/M\to c_0$,
>  $$ L\left(x+ M\right)= x-a_{x}e $$ 
> 则若$x+ M= y+ M$, 则$x-y\in M$, 设$x-y= ke$, 则$a_{x}-a_{y}= k$, 
>  $$ \left(x-a_{x}e\right)-\left(y-a_{y}e\right)= \left(x-y\right)-\left(a_{x}-a_{y}\right)e= ke-ke= 0 $$
> 因此$L$是良定义的. 此外,  
>  $$ L\left(x+ y+ M\right)= x-a_{x}e+ y-a_{y}e= L\left(x+ M\right)+ L\left(y+ M\right) $$
> $L$是一个线性映射. 任取$x_0\in c_0$, 我们有$L\left(x_0+ M\right)= x_0$, 故$L$是满的. 此外, 若$L\left(x+ M\right)= 0$, 则$x-a_{x}e= 0$, $x= a_{x}e\in M$, 故$L$是单的. 因此$L$是一个线性同构.

> [!exercise] Exercise: 3
> 考虑集合
> $$
> \{e_n := \{0, \cdots, 0, 1, 0, \cdots, 0\} (\text{第 } n \text{ 个数为 } 1, \text{ 其他为 } 0)\}_{n=1}^{\infty}.
> $$
> 证明: $\{e_n\}$ 是 $l^p(1 \le p < +\infty)$ 空间的 **Schauder** 基, 但不是 $l^\infty$ 空间的 **Schauder** 基.

> [!exercise] Exercise: 4
> 证明 $c_0$ 是可分的 Banach 空间.

> [!exercise] Exercise: 5
> 设$(X_1,\|\cdot\|_1), (X_2,\|\cdot\|_2)$是赋范空间, 在乘积线性空间$X_1\times X_2$中定义
> $$ \|z\|_1 = \|x_1\|_1 + \|x_2\|_2; \|z\|_2 = \max(\|x_1\|_1, \|x_2\|_2), $$
> 其中$z\in X_1\times X_2, z=(x_1,x_2)$. 证明: $\|z\|_1, \|z\|_2$是$X_1\times X_2$上的等价范数.


> [!exercise] Exercise: 6
> 证明: 若线性空间中两个范数等价, 则它们的诱导拓扑相同.

> [!exercise] Exercise: 7
> 证明: 线性赋范空间之间的线性映射 $T:X\to Y$ 是 (在诱导拓扑意义下) 连续的当且仅当 $T$ 是有界的, 即 $\exists C>0, \text{s.t.}$
> $$\|Tx\|_{Y}\le C\|x\|_{X}, \forall x\in X.$$

> [!exercise] Exercise: 8 
> 证明有限维赋范线性空间具有以下性质:
> - 任意范数等价;
> - 点列依范数收敛等价于在任一基底下坐标系数收敛;
> - 必是完备可分的;
> - 有界集必是列紧集.