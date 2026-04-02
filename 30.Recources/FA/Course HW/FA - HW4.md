
代靖涵 25120222201319

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
> **证明线性同构**: 
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
>
> **计算范数表达式**: 
>  $$ \begin{aligned} \left\| x+ M \right\|_{c/M}&= \inf _{k\in \mathbb{R} }\left\| x+ ke \right\|_{c}\\&= \inf _{k\in \mathbb{R} }\left\{ \sup _{n}\left| x_{n}+ k \right|  \right\} \end{aligned} $$  
> 断言
>  $$ \left\| x+ M \right\|_{c/M}= \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right) $$ 
> 
> 事实上, 
> 取$k_0= \frac{\sup _{n}x_{n}+ \inf _{n}x_{n} }{2 }$, 则
>  $$ \left\| x+ M \right\|_{c / M}\le \left\| x- k_0e \right\|= \sup _{n}\left| x_{n}-k_0 \right|  $$ 
> 而
>  $$ \sup _{n}\left| x_{n}-k_0 \right|= \max _{n}\left\{ \sup _{n}x_{n}-k_0, k_0-\inf _{n}x_{n} \right\}= \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right)$$
> 因此
>  $$ \left\| x+ M \right\|_{c / M}\le \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right) $$ 
> 另一方面, 只需要证明对于任意的$k\in \mathbb{R}$, 都有$\sup _{n}\left| x_{n}-k \right| \ge \frac{1}{2}\left(\sup _{n}x_{n}-\inf_{n}x_{n} \right)$.
> - 若$k\le \inf _{n}x_{n}$, 则
>    $$ \sup _{n} \left| x_{n}-k \right| = \sup _{n}\left(x_{n}-k\right)= \sup _{n}x_{n}-k\ge \sup _{n}x_{n}-\inf _{n}x_{n}\ge \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right)$$ 
> - 若$k\ge \sup _{n}x_{n}$, 则
>    $$ \sup _{n}\left(x_{n}-k\right)= \sup _{n}\left(k-x_{n}\right)= k-\inf _{n}x_{n}\ge \sup _{n}x_{n}-\inf _{n}x_{n}\ge \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right) $$ 
> - 若 $\inf _{n}x_{n}< k< \sup _{n}x_{n}$, 则
>   $$ \sup _{n}\left| x_{n}-k \right|= \max \left\{ \sup _{n}x_{n}-k,k-\inf _{n}x_{n} \right\}  $$ 
>   此时, 不妨设$\sup _{n}\left| x_{n}-k \right|= \sup _{n}x_{n}-k$, 则
>    $$ \sup _{n}x_{n}-k\ge k-\inf _{n}x_{n}\implies k\le \frac{1 }{2 }\left(\sup _{n}x_{n}+ \inf _{n}x_{n}\right) \implies \sup _{n}x_{n}-k\ge \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right)$$ 
> 综上可得
>    $$ \left\| x+ M \right\|_{c / M}= \frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right) $$ 
> 此外, 
>  $$ \left\| \tilde{x} \right\|_{c_0}= \sup _{n}\left| \tilde{x}_{n} \right|  $$ 
> **构造落在$S_{c_0}$上的直线, 并映到$S_{c/M}$上**: 
> 考虑
>  $$ S_{c_0}= \left\{ \tilde{x}\in c_0: \left\| \tilde{x} \right\|_{c_0}= 1 \right\} $$
>  $$ S_{c/M}= \left\{ x\in c: \left\| x \right\|_{c/M} = 1\right\} $$
> 若$\varphi :c_0\to c / M$是等距同构.
> 任取$\tilde{x}\in S_{c_0}$, 则 $\left| \left(\tilde{x}\right)_{k} \right|\le 1,\forall k\in \mathbb{Z} _{> 0}$, 且存在$n_{\tilde{x}}\in \mathbb{Z} _{> 0}$, 使得$\left| \left(\tilde{x}\right)_{n_{\tilde{x}}} \right|= 1$. 由$\lim_{k\to \infty}\left(\tilde{x}\right)_{k}= 0$, 可知存在$m_{\tilde{x}}$, 使得$\left| \left(\tilde{x}\right)_{m_{\tilde{x}}} \right| < \frac{1}{2}$. 令$e_{m_{\tilde{x}}}= \left(0,\cdots ,1,0,\cdots \right)\in c_{0}$, 其中第$m_{\tilde{x}}$个位置是$1$, 其余是零. 则对于任意的$\varepsilon < \frac{1}{2}$, 都有
>  $$ \tilde{x}\pm \varepsilon  e_{m_{\tilde{x}}}\in S_{c_0}  $$ 
> 那么
>  $$ \varphi \left(\tilde{x}\pm  \varepsilon e_{m_{\tilde{x}}}\right)= \varphi \left(\tilde{x}\right)\pm  \varepsilon \varphi \left(e_{m_{\tilde{x}}}\right)\in S_{c / M} $$ 
> 由于$\varphi:S_{c_0}\to S_{c/M}$是双射, 以上表明对于任意的$x\in S_{c / M}$, 存在$y\in S_{c/M}$, 使得对于任意的$\varepsilon < \frac{1}{2}$, 都有
>  $$ x\pm \varepsilon y\in S_{c/M} $$ 
> **构造反例: $x$不能落在直线内部点**: 
> 但是, 
> 考虑$x= \left(-1,1,1,1,\cdots  \right)$, 则显然$\frac{1}{2}\left(\sup _{n}x_{n}-\inf _{n}x_{n}\right)= 1$, $x+ M\in S_{c/M}$, 此时对于任意的$y\in S_{c / M}$, 即$\frac{1}{2}\left(\sup _{n}y_{n}-\inf _{n}y_{n}\right)= 1$, 则对于$0< \varepsilon < \frac{1}{2}$, 
>  $$ \begin{aligned} \left\| x+\varepsilon y+ M \right\|_{c / M}&= \frac{1}{2}\left(\sup _{n}\left(x_{n}+ \varepsilon y_{n}\right)-\inf _{n}\left(x_{n}+ \varepsilon y_{n}\right)\right) \end{aligned}$$ 
>  $$ \sup _{n}\left(x_{n}+ \varepsilon y_{n}\right) = \max \left\{ -1+ \varepsilon y_1, \varepsilon \sup _{n \ge  2}y_{n}+ 1 \right\}$$ 
>  $$ \inf _{n}\left(x_{n}+ \varepsilon y_{n}\right)=\min \left\{ -1+ \varepsilon y_1 , \varepsilon \inf _{n \ge   2}y_{n}+ 1\right\}  $$ 
> 当$\varepsilon$充分小时, 总有$\varepsilon \sup _{n\ge 2}y_{n}+ 1> -1+ \varepsilon y_1$, $\varepsilon \inf _{n\ge 2}y_{n}+ 1\ge -1+ \varepsilon y_1$, 此时$\sup _{n}\left(x_{n}+ \varepsilon y_{n}\right)= \varepsilon \sup _{n\ge 2}y_{n}+ 1$, $\inf _{n}\left(x_{n}+ \varepsilon y_{n}\right)= -1+ \varepsilon y_1$.
>   则
>   $$ \begin{aligned} \left\| x+ \varepsilon y+ M \right\|_{c/M} &=\frac{1}{2}\varepsilon \left( \sup _{n\ge 2}y_{n}- y_1\right)+ 1 \end{aligned}$$ 
>   若$\left\| x+ \varepsilon y+ M \right\|_{c/M}= 1$, 则$\sup _{n\ge 2}y_{n}= y_1$. 类似地, 可知若$\left\| x-\varepsilon y+ M \right\|_{c/M}= 1$, 则 $\inf _{n\ge 2}y_{n}= y_1$, 因此$y= \left(y_1,y_1,\cdots \right)$, $\left\| y+ M \right\|_{c/M}= 0$, 与$y\in S_{c/M}$矛盾.
>  
> 因此不存在$c/M$与$c_0$之间的等距同构.

> [!exercise] Exercise: 3
> 考虑集合
> $$
> \{e_n := \{0, \cdots, 0, 1, 0, \cdots, 0\} (\text{第 } n \text{ 个数为 } 1, \text{ 其他为 } 0)\}_{n=1}^{\infty}.
> $$
> 证明: $\{e_n\}$ 是 $l^p(1 \le p < +\infty)$ 空间的 **Schauder** 基, 但不是 $l^\infty$ 空间的 **Schauder** 基.

> [!proof] Proof: 
> **$\ell ^{p}$**:
>  $$ \ell ^{p}= \left\{ \left(x\right)_{n}: \sum _{n = 1}^{\infty}\left| x_{n} \right| ^{p}< \infty \right\} $$ 
> 
> 任取$x\in \ell ^{p}$,  令$y^{\left(m\right)}= \sum _{n = 1}^{m}x_{n}e_{n}$, 则
>  $$ \left\| x-y^{\left(m\right)} \right\|_{\ell ^{p}}^{p}= \sum _{n = m+ 1}^{\infty}\left| x_{n} \right| ^{p}$$ 
> 由于$\sum _{n = 1}^{\infty}\left| x_{n} \right| ^{p}$收敛, 我们有$\lim_{m\to \infty}\sum _{n = m}^{\infty}\left| x_{n} \right| ^{p}= 0$, 因此
>  $$ \sum _{n = 1}^{\infty}x_{n}e_{n} $$
> 收敛于$x$.  若$\sum _{n = 1}^{\infty}z_{n}e_{n}$也收敛于$x$, 则令$z^{\left(m\right)}= \sum _{n = 1}^{m}z_{n}e_{n}$, 我们有
>  $$ \left| z_{n}-x_{n} \right| ^{p}\le \sum _{k = 1}^{m}\left| z_{k}-x_{k} \right|^{p} \le  \left\| x-z^{\left(m\right)} \right\|_{\ell ^{p}} ^{p}\to 0\left(m\to \infty\right)$$ 
> 因此$z_{n}= x_{n}$. 这$x$由$\left\{ e_{n} \right\}$唯一地表示为$\sum _{n = 1}^{\infty}x_{n}e_{n}$
> 故$\left\{ e_{n} \right\}$是$\ell ^{p}\left(1\le p< \infty\right)$空间的Schauder基. 
>
> $\ell ^{\infty}$: 
> 考虑$x= \left(1,1,1,\cdots \right)$, 则$\left\| x \right\|_{\ell ^{\infty}}= 1$, $x\in \ell ^{\infty}$.  若任取点列$\left\{ y_{n} \right\}$,  令$y^{\left(m\right)}= \sum _{n = 1}^{m}y_{n}e_{n}$,   则
>  $$ \left\| x-y^{\left(m\right)} \right\|= \sup _{n}\left| x_{n}-y_{n} \right|= \sup  \left(\left\{ \left| x_{n}-y_{n} \right|: 1\le n\le m  \right\}\cup \left\{ 1 \right\}\right)  \ge 1 $$ 
> 因此$\sum _{n = 1}^{\infty}y_{n}e_{n}$不可能收敛于$x$. 故$\left\{ e_{n} \right\}$不是$\ell ^{\infty}$空间的Schauder基.

> [!exercise] Exercise: 4
> 证明 $c_0$ 是可分的 Banach 空间.

> [!proof] Proof: 
> 令$e_{n}= \left(0,0,\cdots ,1,0,\cdots ,\right)$, 其中第$n$个位置为$1$, 其余为$0$. 任取$x= \left(x_1,x_2,\cdots \right)\in c_0$, 则$\lim_{n\to \infty}x_{n}= 0$. 
> 令$y^{\left(k\right)}= \sum _{n = 1}^{k}x_{n}e_{n}$, 则
>  $$ \left\| y^{\left(k\right)}-x \right\| _{c_0}= \sup _{n\ge k+ 1}\left| x_{n} \right| $$
> 因此
>  $$ \lim_{k\to \infty}\left\| y^{\left(k\right)}-x \right\|_{c_0}= \limsup_{k\to \infty}\left| x_{k} \right|= \lim_{k\to \infty}\left| x_{k} \right| = 0  $$   
> 故$\sum _{n = 1}^{\infty}x_{n}e_{n}$收敛于$x$.  若$\sum _{n = 1}^{\infty}z_{n}e_{n}$也收敛到$x$, 令$z^{\left(k\right)}= \sum _{n = 1}^{k}z_{n}e_{n}$, 则
>  $$ \left| x_{k}-z_{k} \right|\le \left\| x-z^{\left(m\right)} \right\|_{c_0},\forall m\ge k$$
> 令$m\to \infty$, 得到$z_{k}=x_{k}$.  因此$x$在$\left\{ e_{n} \right\}$下唯一地表示为$x= \sum _{n = 1}^{\infty}x_{n}e_{n}$. 因此$\left\{ e_{n} \right\}$是$c_0$的一个Schauder基, 而具有Schauder基的Banach空间是可分的, 又$c_0$在$\left\|  \cdot \right\|_{\ell ^{\infty}}$下是Banach空间, 故$c_0$可分.

> [!exercise] Exercise: 5
> 设$(X_1,\|\cdot\|_1), (X_2,\|\cdot\|_2)$是赋范空间, 在乘积线性空间$X_1\times X_2$中定义
> $$ \|z\|_1 = \|x_1\|_1 + \|x_2\|_2; \|z\|_2 = \max(\|x_1\|_1, \|x_2\|_2), $$
> 其中$z\in X_1\times X_2, z=(x_1,x_2)$. 证明: $\|z\|_1, \|z\|_2$是$X_1\times X_2$上的等价范数.

> [!proof] Proof: 
> $\left\| z \right\|_{1}$的正定性和齐次性是显然的, 且有两个范数$\left\| x_1 \right\|_{1}$, $\left\| x_2 \right\|_{1}$的三角不等式可得此范数的三角不等式. 因此$\left\| z \right\|_{1}$确实是一个范数. 而Exercise 1已经说明了$\left\| z \right\|_{2}$也是一个范数.
> 
> 显然
>  $$ \max \left(\left\| x_1 \right\|_{1},\left\| x_2 \right\|_{2}\right) \le \left\| x_1 \right\|_{1}+ \left\| x_2 \right\|_{2}$$
> 另一方面, 
>  $$ \left\| x_1 \right\|_{1}+ \left\| x_2 \right\|_{2}\le 2\max \left(\left\| x_1 \right\|_{1},\left\| x_2 \right\|_{2}\right) $$  
> 因此
>  $$ \left\| z \right\|_{2}\le \left\| z \right\|_{1} \le 2\left\| z \right\|_{2}$$
> 这表明范数$\left\| \cdot  \right\|_{1},\left\| \cdot  \right\|_{2}$等价. 

> [!exercise] Exercise: 6
> 证明: 若线性空间中两个范数等价, 则它们的诱导拓扑相同.

> [!proof] Proof: 
> 设$X$是线性空间, $\left\| \cdot  \right\|_{1}$, $\left\| \cdot  \right\|_{2}$是其上的两个等价的范数. 则它们的拓扑分别由以下基生成: 
>  $$ \mathcal{B}_{i}= \left\{ B^{\left(i\right)}_{r}\left(x\right): x\in X, r > 0\right\},\quad B_{r}^{\left(i\right)}\left(x\right)= \left\{ y\in X: \left\| y-x \right\|_{i} < r\right\},\quad i= 1,2 $$ 
> 由于范数等价, 存在$c,C> 0$, 使得
>  $$ c\left\| x \right\|_{1}\le \left\| x \right\|_{2}\le C\left\| x \right\|_{1},\quad \forall x\in X $$  
> 任取$B_{r}^{\left(1\right)}\left(x\right)\in \mathcal{B}_{1}$, 对于任意的$y\in B_{r}^{\left(1\right)}\left(x\right)$, 令$r_0=r-\left\| x-y \right\|_{1}> 0$, 我们有$B_{r_0}^{\left(1\right)}\left(y\right)\subseteq B_{r}^{\left(1\right)}\left(x\right)$. 由于$\left\| x \right\|_{2}\ge c\left\| x \right\|_{1}$, 任取$z\in B_{cr_0}^{\left(2\right)}\left(y\right)$, 则
>  $$ \left\| z-y \right\|_{1}\le \frac{1 }{c }\left\| z-y \right\|_{2}< \frac{1 }{c }cr_0= r_0 $$ 
>  因此
>  $$ B_{cr_0}^{\left(2\right)}\left(y\right)\subseteq B_{r_0}^{\left(1\right)}\left(y\right)\subseteq B_{r}^{\left(1\right)}\left(x\right) $$ 
> 这表明
>  $$ B_{r}^{\left(1\right)}\left(x\right) = \bigcup _{y\in B_{r}^{\left(1\right)}\left(x\right)}B_{cr_0}^{\left(2\right)}\left(y\right)$$ 
> 因此$\mathcal{B}_{2}$生成了$\mathcal{B}_{1}$. 有对称性可知$\mathcal{B}_{1}$生成了$\mathcal{B}_{2}$. 因此$\mathcal{B}_{1}$, $\mathcal{B}_{2}$生成了相同的拓扑, 即两个范数诱导的拓扑相同.

> [!exercise] Exercise: 7
> 证明: 线性赋范空间之间的线性映射 $T:X\to Y$ 是 (在诱导拓扑意义下) 连续的当且仅当 $T$ 是有界的, 即 $\exists C>0, \text{s.t.}$
> $$\|Tx\|_{Y}\le C\|x\|_{X}, \forall x\in X.$$

> [!proof] Proof: 
> 若$T$是有界的, 则对于任意的$x,y\in X$, 我们有
>  $$ \left\| Tx-Ty \right\|_{Y}= \left\| T\left(x-y\right) \right\|_{Y}\le C\left\| x-y \right\|_{X} $$
> 即$T$是Lipschitz连续的, 特别地$T$是连续的.
>
> 反过来, 若$T$是无界的, 设$S_{X}$是$X$上的单位球. 则对于任意的$n\in \mathbb{Z} _{> 0}$, 存在$x_{n}\in S_{X}$, 使得$\left\| T x_{n}\right\|\ge n$. 令$y_{n}= \frac{1 }{n }x_{n}$, 则
>  $$ \left\| y_{n} \right\|_{X}= \frac{1 }{n }\left\| x_{n} \right\|_{X}= \frac{1 }{n } $$ 
> 因此
>  $$ \lim_{n\to \infty}\left\| y_{n} \right\|_{X}= 0 $$
> 但是 
> $$ \left\| Ty_{n} \right\|=\left\| \frac{1 }{n }Tx_{n} \right\|= \frac{1 }{n }\left\| Tx_{n} \right\|\ge 1$$  
> 因此$\liminf_{n\to \infty}\left\| Ty_{n} \right\|> 0$, 但$T\left(0\right)= 0$, 故而$\left\{ Ty_{n} \right\}$不收敛与$0$. 因此$T$不是连续的.

> [!exercise] Exercise: 8 
> 证明有限维赋范线性空间具有以下性质:
> - 任意范数等价;
> - 点列依范数收敛等价于在任一基底下坐标系数收敛;
> - 必是完备可分的;
> - 有界集必是列紧集.

> [!proof] Proof: 
> 设$X$是$n$-维赋范线性空间, 取定一组基$e_1,\cdots ,e_{n}$. 则存在唯一的$X$上的范数$\left\| \cdot  \right\|_{\mathbb{R} ^{n}}$, 使得线性映射$T:X\to \mathbb{R} ^{n}$, 
>  $$ T\left(e_{i}\right) = \left(0,\cdots ,1,0,\cdots ,0\right),\text{第i个位置是1}$$ 
> 成为一个等距同构. 只需要证明任意范数$\left\| \cdot  \right\|_{X}$都和此范数等价. 
> 令
>  $$ M= \max \left\{  \right\}$$ 
> 则任取$x\in X$, $x= x^{i}e_{i}$, 我们有
>  $$ \left\| x \right\|_{\mathbb{R} ^{n}}=\left\| x^{i}e_{i} \right\|_{\mathbb{R} ^{n}} \le x^{i}\left\| e_{i} \right\|_{\mathbb{R} ^{n}} = \sum _{i}\left| x^{i} \right| $$ 