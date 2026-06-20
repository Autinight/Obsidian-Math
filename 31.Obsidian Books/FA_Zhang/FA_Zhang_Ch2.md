# 第二章　线性算子与线性泛函

线性算子和线性泛函是泛函分析研究的基本对象. 本章研究线性算子和线性泛函的一般概念和基本性质.

## §1　线性算子的概念

### 1.1　线性算子和线性泛函的定义

算子的概念起源于运算. 例如,
(1) 代数运算:
    $$x\mapsto Ax\ (\forall x\in\mathbb{R}^n),$$
其中 $A$ 是一个 $n\times n$ 矩阵.
(2) 求导运算:
    $$u(x)\mapsto P(\partial_x)u(x)\ (\forall u\in C^\infty(\overline{\Omega})),$$
其中 $P(\cdot)$ 是一个多项式, 而 $\partial_x$ 是偏导数运算.
(3) 积分变换:
    $$u(x)\mapsto\int_\Omega K(x,y)u(y)dy\ (\forall u\in C(\overline{\Omega})),$$
其中 $K(x,y)$ 是 $\Omega\times\Omega$ 上的可积函数. 上一章遇到过的"映射"实际上也就是算子.

线性算子的概念起源于线性代数中的线性变换.

> [!definition] 定义 2.1.1
> 设 $\mathscr{X},\mathscr{Y}$ 是两个线性空间, $D$ 是 $\mathscr{X}$ 的一个线性子空间. $T:D\to\mathscr{Y}$ 是一种映射, $D$ 称为 $T$ 的定义域, 有时记作 $D(T)$. $R(T)=\{Tx\mid\forall x\in D\}$ 称为 $T$ 的值域. 如果
>
> $$T(\alpha x+\beta y)=\alpha Tx+\beta Ty\ (\forall x,y\in D,\ \forall\alpha,\beta\in\mathbb{K}),$$
>
> 那么称 $T$ 是一个线性算子.

> [!example] 例 2.1.2
> 设 $\mathscr{X}=\mathbb{R}^n,\ \mathscr{Y}=\mathbb{R}^m,\ T=(t_{ij})_{m\times n}$. 如果
>
> $$x\mapsto Tx = \left(\sum_{j=1}^n t_{ij}x_j\right)_{i=1}^m\ (\forall x=(x_1,x_2,\ldots,x_n)\in\mathbb{R}^n),$$
>
> 那么 $T$ 是一个线性算子.

> [!example] 例 2.1.3
> 设 $\mathscr{X}=\mathscr{Y}=C^\infty(\overline{\Omega})$, 又设微分多项式
>
> $$P(\partial_x)=\sum_{|\alpha|\le m} a_\alpha(x)\partial_x^\alpha\ (a_\alpha(x)\in C^\infty(\overline{\Omega})).$$
>
> 如果 $T: u(x)\mapsto P(\partial_x)u(x)\ (\forall u\in\mathscr{X})$, 那么 $T$ 便是一个 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子.
>
> 若 $\mathscr{X}=\mathscr{Y}=L^2(\Omega),\ D(T)=C^m(\overline{\Omega})$, 则上面定义的算子 $T$ 也是线性的.

> [!example] 例 2.1.4
> 设 $\mathscr{X}=L^1(-\infty,\infty),\ \mathscr{Y}=L^\infty(-\infty,\infty)$, 若规定
>
> $$T: u(x)\mapsto\int_{-\infty}^\infty e^{i\xi\cdot x}u(x)dx\ (\forall u\in\mathscr{X}),$$
>
> 那么 $T$ 是一个 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子.

> [!definition] 定义 2.1.5
> 取值于实数 (复数) 的线性算子称为实 (复) 线性泛函, 记作 $f(x)$ 或 $\langle f,x\rangle$ (即线性函数).

> [!example] 例 2.1.6
> 设 $\mathscr{X}=C(\overline{\Omega})$, 若规定
>
> $$f(x)\triangleq\int_\Omega x(\xi)d\xi\ (\forall x\in\mathscr{X}),$$
>
> 则 $f$ 是一个线性泛函, 但 $x(\xi)\mapsto\int_\Omega x^2(\xi)d\xi$ 却不是线性泛函.

> [!example] 例 2.1.7
> 设 $\mathscr{X}=C^\infty(\Omega)$, 若对某个指标 $\alpha$ 及 $\xi_0\in\Omega$ 规定
>
> $$f(u)=\partial^\alpha u(\xi_0)\ (\forall u\in\mathscr{X}),$$
>
> 则 $f$ 是 $C^\infty(\Omega)$ 上的一个线性泛函.

### 1.2　线性算子的连续性和有界性

算子的连续性概念就是映射的连续性概念.

> [!definition] 定义 2.1.8
> 设 $\mathscr{X}$, $\mathscr{Y}$ 是 $F^*$ 空间, $D(T)\subset\mathscr{X}$, 称线性算子 $T: D(T)\to\mathscr{Y}$ 在 $x_0\in D(T)$ 是连续的, 如果
>
> $$x_n\in D(T),\quad x_n\to x_0 \implies Tx_n\to Tx_0.$$

> [!proposition] 命题 2.1.9
> 对于线性算子 $T$, 为了它在 $D(T)$ 内处处连续, 必须且仅须它在 $x=\theta$ 处连续.

> [!proof]- 证
> 若 $T$ 在 $\theta$ 处连续, 那么对 $\forall x_n,x_0\in D(T)$, $x_n\to x_0$ 有
>
> $$x_n-x_0\to\theta \implies Tx_n-Tx_0=T(x_n-x_0)\to T\theta=\theta.$$

> [!definition] 定义 2.1.10
> 设 $\mathscr{X}$, $\mathscr{Y}$ 都是 $B^*$ 空间, 称线性算子 $T: \mathscr{X}\to\mathscr{Y}$ 是有界的, 如果有常数 $M\ge 0$, 使得
>
> $$\|Tx\|_{\mathscr{Y}} \le M\|x\|_{\mathscr{X}} \quad (\forall x\in\mathscr{X}).$$

> [!proposition] 命题 2.1.11
> 设 $\mathscr{X}$, $\mathscr{Y}$ 都是 $B^*$ 空间, 为了线性算子 $T$ 连续, 必须且只须 $T$ 有界.

> [!proof]- 证
> 充分性显然. 下证必要性. 若不然, 则 $\exists x_n\in\mathscr{X}$, 使得
>
> $$\|Tx_n\|>n\|x_n\|.$$
>
> 令 $y_n=x_n/(n\|x_n\|)$, 便有 $\|Ty_n\|>1$. 但 $y_n\to\theta\;(n\to\infty)$, 便与 $T$ 的连续性矛盾.

> [!definition] 定义 2.1.12
> 用 $\mathscr{L}(\mathscr{X},\mathscr{Y})$ 表示一切由 $\mathscr{X}$ 到 $\mathscr{Y}$ 的有界线性算子的全体, 并规定
>
> $$\|T\|=\sup_{x\in\mathscr{X}\setminus\{\theta\}} \frac{\|Tx\|}{\|x\|}=\sup_{\|x\|=1} \|Tx\|$$
>
> 为 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 的范数. 特别用 $\mathscr{L}(\mathscr{X})$ 表示 $\mathscr{L}(\mathscr{X},\mathscr{X})$, 用 $\mathscr{X}^*$ 表示 $\mathscr{L}(\mathscr{X},\mathbb{K})$, 即 $\mathscr{X}^*$ 表示 $\mathscr{X}$ 上的有界线性泛函全体.

> [!theorem] 定理 2.1.13
> 设 $X$ 是 $B^*$ 空间, $Y$ 是 $B$ 空间, 若在 $\mathscr{L}(X,Y)$ 上规定线性运算:
>
> $$(\alpha_1 T_1 + \alpha_2 T_2)(x) = \alpha_1 T_1 x + \alpha_2 T_2 x \quad (\forall x\in X),$$
>
> 其中 $\alpha_1,\alpha_2\in\mathbb{K}$, $T_1,T_2\in\mathscr{L}(X,Y)$, 则 $\mathscr{L}(X,Y)$ 按 $\|T\|$ 构成一个 Banach 空间.

> [!proof]- 证
> 显然 $\mathscr{L}(X,Y)$ 是一个线性空间, 下证 $\|T\|$ 是范数:
>
> $$\|T\| \ge 0,\quad \|T\| = 0 \iff Tx = \theta\;(\forall x\in X) \iff T = \theta,$$
>
> $$
> \begin{aligned}
> \|T_1+T_2\| &= \sup_{\|x\|=1} \|T_1 x+T_2 x\| \\
> &\le \sup_{\|x\|=1} \|T_1 x\| + \sup_{\|x\|=1} \|T_2 x\| \\
> &= \|T_1\| + \|T_2\|,
> \end{aligned}
> $$
>
> $$\| \alpha T\| = \sup_{\|x\|=1} \|\alpha T x\| = |\alpha| \sup_{\|x\|=1} \|T x\| = |\alpha| \|T\|.$$
>
> 再证完备性. 设 $\{T_n\}_1^\infty$ 是一个基本列, 则 $\forall\varepsilon>0$, $\exists N=N(\varepsilon)$, 使得对 $\forall x\in X$ 有
>
> $$\|T_{n+p}x - T_n x\| \le \varepsilon\|x\| \quad (\forall n>N,\; \forall p\in\mathbb{N}).$$
>
> 于是 $T_n x \to y\in Y\;(n\to\infty)$. 记此 $y = Tx$, 我们要证 $T\in\mathscr{L}(X,Y)$. 不难看出 $T$ 是线性的, 再证其有界. 事实上, $\exists n\in\mathbb{N}$, 使得
>
> $$\|Tx\| = \|y\| \le \|T_n x\| + 1 \le (\|T_n\| + 1)\|x\| \quad (\forall x\in X,\; \|x\|=1).$$
>
> 即得 $\|T\| \le \|T_n\| + 1$. $\blacksquare$

> [!example] 例 2.1.14
> 设 $T$ 是有穷维 $B^*$ 空间 $X$ 到 $Y$ 的线性映射, 则 $T$ 必是连续的.

> [!proof]- 证
> $T$ 可以通过矩阵 $(t_{ij})$ 表示出来, 而同一个有穷维空间的任意两个范数等价. 不妨取 $X=\mathbb{K}^n$, $Y=\mathbb{K}^m$, 便有
>
> $$
> \begin{aligned}
> \|Tx\| &= \left(\sum_{i=1}^m \left|\sum_{j=1}^n t_{ij}x_j\right|^2\right)^{\!1/2} \\
> &\le \left(\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2 \cdot \sum_{j=1}^n |x_j|^2\right)^{\!1/2} \\
> &= \left(\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2\right)^{\!1/2} \|x\|.
> \end{aligned}
> $$
>
> 即得 $\displaystyle\|Tx\| \le \left(\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2\right)^{\!1/2} \|x\|$. $\blacksquare$

> [!example] 例 2.1.15
> Hilbert 空间 $X$ 上的正交投影算子. 设 $M$ 是 $X$ 的一个闭线性子空间, 依正交分解定理 (推论 1.6.37), $\forall x\in X$, 存在唯一的分解
>
> $$x = y + z,$$
>
> 其中 $y\in M$, $z\in M^\perp$. 对应 $x\mapsto y$ 称作由 $X$ 到 $M$ 的正交投影算子, 记作 $P_M$. 在不强调子空间 $M$ 时, 我们省略 $M$ 而简记为 $P$. 我们来证明 $P$ 还是一个连续线性算子, 并且如果 $M\neq\{\theta\}$, 那么 $\|P\|=1$.
>
> 先证线性. 设 $x_i = P x_i + z_i\;(i=1,2)$, 其中 $z_i\in M^\perp$. 这时,
>
> $$\alpha_1 x_1 + \alpha_2 x_2 = (\alpha_1 P x_1 + \alpha_2 P x_2) + (\alpha_1 z_1 + \alpha_2 z_2) \quad (\forall\alpha_1,\alpha_2\in\mathbb{K}).$$
>
> 因为 $\alpha_1 z_1 + \alpha_2 z_2 \in M^\perp$, 而 $\alpha_1 P x_1 + \alpha_2 P x_2 \in M$, 所以
>
> $$P(\alpha_1 x_1 + \alpha_2 x_2) = \alpha_1 P x_1 + \alpha_2 P x_2.$$
>
> 即得 $P$ 是线性算子.
>
> 其次证连续, 这是由于 $\|Px\|^2 = \|x\|^2 - \|z\|^2 \le \|x\|^2$. 因此, $\|Px\| \le \|x\|$, 或者 $\|P\| \le 1$.
>
> 最后, 当 $M\neq\{\theta\}$ 时, 任取 $x\in M\setminus\{\theta\}$, 便有 $\|Px\| = \|x\|$, 从而 $\|P\| = 1$. $\blacksquare$

> [!exercise] 习题
> (本节各题中, $X,Y$ 均指 Banach 空间)
>
> **2.1.1** 求证: $T\in\mathscr{L}(X,Y)$ 的充要条件是 $T$ 为线性算子, 并将 $X$ 中的有界集映为 $Y$ 中的有界集.
>
> **2.1.2** 设 $A\in\mathscr{L}(X,Y)$, 求证:
> (1) $\|A\| = \sup_{\|x\|\le 1} \|Ax\|$; (2) $\|A\| = \sup_{\|x\|<1} \|Ax\|$.
>
> **2.1.3** 设 $f\in\mathscr{L}(X,\mathbb{R})$, 求证:
> (1) $\|f\| = \sup_{\|x\|=1} f(x)$; (2) $\sup_{\|x\|<\delta} f(x) = \delta\|f\|\;(\forall\delta>0)$.
>
> **2.1.4** 设 $y(t)\in C[0,1]$, 定义 $C[0,1]$ 上的泛函
>
> $$f(x) = \int_0^1 x(t)y(t)\,dt \quad (\forall x\in C[0,1]),$$
>
> 求 $\|f\|$.
>
> **2.1.5** 设 $f$ 是 $X$ 上的非零有界线性泛函, 令
>
> $$d = \inf\{\|x\| \mid f(x)=1,\; x\in X\},$$
>
> 求证: $\|f\| = 1/d$.
>
> **2.1.6** 设 $f\in X^*$, 求证: $\forall\varepsilon>0$, $\exists x_0\in X$, 使得 $f(x_0) = \|f\|$, 且 $\|x_0\| < 1+\varepsilon$.
>
> **2.1.7** 设 $T: X\to Y$ 是线性的, 令
>
> $$N(T) \triangleq \{x\in X \mid Tx = \theta\}.$$
>
> (1) 若 $T\in\mathscr{L}(X,Y)$, 求证: $N(T)$ 是 $X$ 的闭线性子空间.
>
> (2) 问 $N(T)$ 是 $X$ 的闭线性子空间能否推出 $T\in\mathscr{L}(X,Y)$?
>
> (3) 若 $f$ 是线性泛函, 求证:
>
> $$f\in X^* \iff N(f)\ \text{是闭线性子空间}.$$
>
> **2.1.8** 设 $f$ 是 $X$ 上的线性泛函, 记
>
> $$H_f^\lambda \triangleq \{x\in X \mid f(x)=\lambda\} \quad (\forall\lambda\in\mathbb{K}).$$
>
> 如果 $f\in X^*$, 并且 $\|f\|=1$, 求证:
>
> (1) $|f(x)| = \inf\{\|x-z\| \mid \forall z\in H_f^0\}\;(\forall x\in X)$;
>
> (2) $\forall\lambda\in\mathbb{K}$, $H_f^\lambda$ 上的任一点 $x$ 到 $H_f^0$ 的距离都等于 $|\lambda|$.
>
> 并对 $X=\mathbb{R}^2$, $\mathbb{K}=\mathbb{R}$ 情形解释 (1) 和 (2) 的几何意义.
>
> **2.1.9** 设 $X$ 是实 $B^*$ 空间, $f$ 是 $X$ 上的非零实值线性泛函, 求证: 不存在开球 $B(x_0,\delta)$, 使得 $f(x_0)$ 是 $f(x)$ 在 $B(x_0,\delta)$ 中的极大值或极小值.

## §2 Riesz 表示定理及其应用

设 $X$ 是一个 Hilbert 空间, $\forall y\in X$, 如果定义

$$f_y: x \mapsto (x,y) \quad (\forall x\in X),$$

那么 $f_y\in X^*$. 事实上,

$$|f_y(x)| \le \|y\|\cdot\|x\| \quad (\forall x\in X),$$

并因此 $\|f_y\| \le \|y\|$. 特别若 $y\neq\theta$, 取 $x=y$, 便有

$$|f_y(y)| = (y,y) = \|y\|^2.$$

总之有 $\|f_y\| = \|y\|$. 这个结论反过来也是对的.

> [!theorem] 定理 2.2.1 (Riesz 表示定理 (Hilbert 空间))
> 设 $f$ 是 Hilbert 空间 $X$ 上的一个连续线性泛函, 则必存在唯一的 $y_f\in X$, 使得
>
> $$f(x) = (x, y_f) \quad (\forall x\in X). \tag{2.2.1}$$

**启发** 在三维空间中, (2.2.1) 式就是

$$f(x) = ax + by + cz = n\cdot x \quad (\forall x\in\mathbb{R}^3).$$

其中 $x=(x,y,z)$, $n=(a,b,c)$, 要找的 $y_f$ 现在就是 $n$, 它是平面 $f(x)=0$ 的法线.

> [!proof]- 证
> 不妨设 $f$ 不是 $0$ 泛函, 考察集合 $M \triangleq \{x\in X \mid f(x)=0\}$. 由于 $f$ 是连续线性的, 则 $M$ 是一个真闭线性子空间, 任取 $x_0\perp M$ (由正交分解定理 (推论 1.6.37), 这 $x_0$ 是存在的). 不妨设 $\|x_0\|=1$, $X$ 中任意元素 $x$ 可以分解如下:
>
> $$x = \alpha x_0 + y, \tag{2.2.2}$$
>
> 其中 $y\in M$, $\alpha = f(x)/f(x_0)$. 这是因为当令 $y = x - \alpha x_0$ 时,
>
> $$f(y) = f(x - \alpha x_0) = f(x) - \alpha f(x_0) = 0.$$
>
> 在 (2.2.2) 式两边同时与 $x_0$ 做内积, 我们得
>
> $$\alpha = (x, x_0).$$
>
> 于是
>
> $$f(x) = \alpha f(x_0) = (x, \overline{f(x_0)} x_0).$$
>
> 取 $y_f = \overline{f(x_0)} x_0$, 这就是我们要求的.
>
> 再证唯一性. 若 $\exists y,y'\in X$ 满足
>
> $$f(x) = (x,y) = (x,y') \quad (\forall x\in X),$$
>
> 那么
>
> $$(x, y - y') = 0 \quad (\forall x \in \mathscr{X}).$$
>
> 特别取 $x = y - y'$, 就推得 $y = y'$.

> [!remark] 注 1
> 这个定理的几何意义如下: 连续线性泛函 $f(x)$ 的等值面都是互相平行的超平面 (见习题 2.1.8), 因此每个向量 $x$ 的泛函值 $f(x)$ 应由 $x$ 的垂直于这些等值面的分量所决定.

> [!remark] 注 2
> 我们还知道, $\|f\| = \|y_f\|$. 事实上, 由 (2.2.1) 式得
>
> $$|f(x)| \leqslant \|y_f\| \cdot \|x\| \quad (\forall x \in \mathscr{X}),\quad\text{或}\quad \|f\| \leqslant \|y_f\|.$$
>
> 另一方面, 取 $x = y_f$, 再由 (2.2.1) 式可推得 $\|y_f\| \leqslant \|f\|$, 即得到 $\|f\| = \|y_f\|$.

> [!theorem] 定理 2.2.2
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, $a(x, y)$ 是 $\mathscr{X}$ 上的共轭双线性函数, 并 $\exists M > 0$, 使得
>
> $$|a(x, y)| \leqslant M\|x\| \cdot \|y\| \quad (\forall x, y \in \mathscr{X}),$$
>
> 则存在唯一的 $A \in \mathscr{L}(\mathscr{X})$, 使得
>
> $$a(x, y) = (x, Ay) \quad (\forall x, y \in \mathscr{X}),$$
>
> 且
>
> $$\|A\| = \sup_{\substack{(x,y)\in\mathscr{X}\times\mathscr{X}\\ x\neq\theta,\; y\neq\theta}} \frac{|a(x,y)|}{\|x\|\cdot\|y\|}. \tag{2.2.3}$$

> [!proof]- 证
> 固定 $y \in \mathscr{X}$, $x \mapsto a(x, y)$ 是一个连续线性泛函. 由 Riesz 表示定理 (定理 2.2.1), $\exists z = z(y) \in \mathscr{X}$, 使得
>
> $$a(x, y) = (x, z) \quad (\forall x \in \mathscr{X}).$$
>
> 定义映射 $A: y \mapsto z(y)$, 便有 $a(x, y) = (x, Ay)\;(\forall x, y \in \mathscr{X})$. 又因为
>
> $$
> \begin{aligned}
> (x, A(\alpha_1 y_1 + \alpha_2 y_2)) &= a(x, \alpha_1 y_1 + \alpha_2 y_2) \\
> &= \bar{\alpha}_1 a(x, y_1) + \bar{\alpha}_2 a(x, y_2) \\
> &= \bar{\alpha}_1 (x, Ay_1) + \bar{\alpha}_2 (x, Ay_2) \\
> &= (x, \alpha_1 Ay_1 + \alpha_2 Ay_2) \\
> &\qquad (\forall x, y_1, y_2 \in \mathscr{X},\; \forall \alpha_1, \alpha_2 \in \mathbb{K}),
> \end{aligned}
> $$
>
> 所以 $A$ 是线性的, 并且
>
> $$\|Ay\| = \sup_{x\in\mathscr{X}\setminus\{\theta\}} \frac{|a(x,y)|}{\|x\|} \leqslant M\|y\|,$$
>
> 即得 $A \in \mathscr{L}(\mathscr{X})$, 并满足 (2.2.3) 式.

**应用**

**1. Laplace 方程 $-\Delta u = f$ Dirichlet 边值问题的弱解**

设 $\Omega \subset \mathbb{R}^n$ 是一个有界开区域, $f \in L^2(\Omega)$, 称实函数 $u$ 是

$$
\begin{cases}
-\Delta u = f & (\text{在 }\Omega\text{ 内}), \\[4pt]
u|_{\partial\Omega} = 0
\end{cases}
\tag{2.2.4}
$$
$$
\tag{2.2.5}
$$

的一个弱解是指 $u \in H_0^1(\Omega)$, 满足

$$\int_\Omega \nabla u \cdot \nabla v \, dx = \int_\Omega fv \, dx \quad (\forall v \in H_0^1(\Omega)). \tag{2.2.6}$$

这是因为: 如果 $u \in C^2(\overline{\Omega})$, 并且是 (2.2.4) 式与 (2.2.5) 式的解, 那么

$$\int_\Omega -\Delta u \cdot v \, dx = \int_\Omega fv \, dx \quad (\forall v \in C^2(\overline{\Omega}),\; v|_{\partial\Omega} = 0).$$

在上式左边应用 Green 公式得

$$
\begin{aligned}
\int_\Omega -\Delta u \cdot v \, dx &= \int_\Omega \nabla u \cdot \nabla v \, dx - \int_\Omega \frac{\partial u}{\partial n} v \, d\sigma \\
&= \int_\Omega \nabla u \cdot \nabla v \, dx,
\end{aligned}
$$

即得

$$\int_\Omega \nabla u \cdot \nabla v \, dx = \int_\Omega f \cdot v \, dx \quad (\forall v \in C^2(\overline{\Omega}),\; v|_{\partial\Omega} = 0).$$

但集合 $\{v \in C^2(\overline{\Omega}) \mid v|_{\partial\Omega} = 0\}$ 显然在 $H_0^1(\Omega)$ 中稠密, 由 $u \in H_0^1(\Omega)$ 以及 $f \in L^2(\Omega)$ 立得

$$\int_\Omega \nabla u \cdot \nabla v \, dx = \int_\Omega f \cdot v \, dx \quad (\forall v \in H_0^1(\Omega)).$$

历史上, 人们在很长时期内直接求解 (2.2.4) 式与 (2.2.5) 式, 但在证明一般存在性结果时遇到很大困难. 于是经过近半个世纪的努力, 改成先求弱解证其存在唯一, 再证其光滑性, 这样一种途径成为近代偏微分方程理论的基本方法, 也正因为如此, 泛函分析才成为研究近代偏微分方程理论所必不缺少的工具.

> [!theorem] 定理 2.2.3
> $\forall f \in L^2(\Omega)$, 方程 (2.2.4) 的 $0$-Dirichlet 问题 (即以 (2.2.5) 式为边界条件) 弱解存在唯一.

> [!proof]- 证
> 存在性. 根据 Poincaré 不等式 (引理 1.6.15),
>
> $$(u, v)_1 \triangleq \int_\Omega \nabla u \cdot \nabla v \, dx \quad (\forall u, v \in H_0^1(\Omega))$$
>
> 是 $H_0^1(\Omega)$ 上的一个内积. 而
>
> $$
> \begin{aligned}
> \left|\int_\Omega f \cdot v \, dx\right| &\leqslant \left(\int_\Omega |f|^2 \, dx\right)^{\frac12} \left(\int_\Omega |v|^2 \, dx\right)^{\frac12} \\
> &\leqslant C\|f\| \cdot \|v\|_1 \quad (\forall v \in H_0^1(\Omega)),
> \end{aligned}
> \tag{2.2.7}
> $$
>
> 其中 $\|\cdot\|$ 与 $\|\cdot\|_1$ 分别表示 $L^2(\Omega)$ 与 $H_0^1(\Omega)$ 上的范数. (2.2.7) 式表明,
>
> $$v \mapsto \int_\Omega f \cdot v \, dx \quad (\forall v \in H_0^1(\Omega))$$
>
> 是 $H_0^1(\Omega)$ 上的一个连续线性泛函. 应用 Riesz 表示定理 (定理 2.2.1), $\exists!\, u_0 \in H_0^1(\Omega)$, 使得
>
> $$(u_0, v)_1 = \int_\Omega \nabla u_0 \cdot \nabla v \, dx = \int_\Omega fv \, dx \quad (\forall v \in H_0^1(\Omega)).$$
>
> 从而 $u_0$ 是一个弱解.
>
> 唯一性. 假若 $u_0, u_0'$ 都是弱解, 那么
>
> $$(u_0 - u_0', v) = 0 \quad (\forall v \in H_0^1(\Omega)).$$
>
> 即得 $u_0 = u_0'$.

对于非 $0$-Dirichlet 问题, 总是化到 $0$-Dirichlet 问题去做. 给定 $\partial\Omega$ 上的函数 $g$, 如果 $\exists u_0 \in C^2(\overline{\Omega})$, 使得 $u_0|_{\partial\Omega} = g$, 则非齐次边值问题可以化归齐次边值问题. 事实上, 设 $f_0 \triangleq -\Delta u_0$, $v \triangleq u - u_0$. 又若 $v$ 是

$$
\begin{cases}
-\Delta v = f - f_0, \\[4pt]
v|_{\partial\Omega} = 0
\end{cases}
\tag{2.2.8}
$$
$$
\tag{2.2.9}
$$

的弱解, 则 $u$ 就是

$$
\begin{cases}
-\Delta u = f, \\[4pt]
u|_{\partial\Omega} = g
\end{cases}
$$

的弱解. 而问题 (2.2.8) 与 (2.2.9) 是 $0$-Dirichlet 问题.

至于哪些函数 $g$ 可以扩张成 $C^2(\overline{\Omega})$ 函数的边值? 又若 $u$ 是齐次边值问题的弱解, 何时它是古典解? 这些问题在偏微分方程理论中给予答复.

**2. 变分不等式**

> [!theorem] 定理 2.2.4
> 设 $C$ 是 $H_0^1(\Omega)$ 中的闭凸子集, 若 $f \in L^2(\Omega)$, 则下列不等式存在唯一解 $u_0^* \in C$:
>
> $$\int_\Omega \nabla u_0^* \cdot \nabla(v - u_0^*) \, dx \geqslant \int_\Omega f \cdot (v - u_0^*) \, dx \quad (\forall v \in C). \tag{2.2.10}$$

> [!proof]- 证
> 利用 Riesz 表示定理 (定理 2.2.1), $\exists!\, u_0 \in H_0^1(\Omega)$, 使得
>
> $$\int_\Omega \nabla u_0 \cdot \nabla w \, dx = \int_\Omega f \cdot w \, dx \quad (\forall w \in H_0^1(\Omega)). \tag{2.2.11}$$
>
> 因此, 不等式 (2.2.10) 可以化为
>
> $$\int_\Omega \nabla u_0^* \cdot \nabla(v - u_0^*) \, dx \geqslant \int_\Omega \nabla u_0 \cdot \nabla(v - u_0^*) \, dx \quad (\forall v \in C). \tag{2.2.12}$$
>
> 进一步将它改写为
>
> $$(u_0^* - u_0, v - u_0^*)_1 \geqslant 0 \quad (\forall v \in C). \tag{2.2.13}$$
>
> 根据定理 1.6.34, 不等式 (2.2.13) 等价于 $u_0^*$ 是 $u_0$ 在 $C$ 上的最佳逼近元, 而这是存在唯一的.

> [!remark] 注 1
> 本定理可以换成更一般的结果. 设 $A = (a_{ij}(x))$ 是一个 $n \times n$ 正定矩阵, 适合
>
> $$\sum_{i,j=1}^n a_{ij}(x)\xi_i\xi_j \geqslant \delta \sum_{i=1}^n |\xi_i|^2 \quad (\delta > 0),$$
>
> 其中 $a_{ij}(x) \in C(\overline{\Omega})$, 则 $\forall f \in L^2(\Omega)$, $\exists!\, u^* \in C$, 使得
>
> $$
> \begin{aligned}
> &\int_\Omega \sum_{i,j=1}^n a_{ij}(x)\partial_j u^*(x)\partial_i(v(x) - u^*(x)) \, dx \\
> &\geqslant \int_\Omega f(x)(v(x) - u^*(x)) \, dx \quad (\forall v \in C).
> \end{aligned}
> $$

> [!remark] 注 2
> 若 $C$ 是由一个连续函数 $\psi(x) \in C(\overline{\Omega})$ 给定的:
>
> $$C \triangleq \{v(x) \in H_0^1(\Omega) \mid v(x) \leqslant \psi(x)\},$$
>
> 则上述变分不等式问题称为障碍问题, 这时 $u$ 表示薄膜的位移, $f$ 表示外力, $\psi(x)$ 是一个障碍.

**3. Radon-Nikodym 定理**

Radon-Nikodym 定理是测度论中一个重要定理.

> [!theorem] 定理 2.2.5
> 设 $(\Omega, \mathscr{B}, \mu)$, $(\Omega, \mathscr{B}, \nu)$ 是两个 $\sigma$-有限测度, 且 $\nu$ 关于 $\mu$ 绝对连续, 即
>
> $$E \in \mathscr{B},\quad \mu(E) = 0 \Rightarrow \nu(E) = 0,$$
>
> 则存在关于 $\mu$ 的可测函数 $g$, 且 $g(x) \geqslant 0$ a.e. $\mu$, 使得
>
> $$\nu(E) = \int_E g(x) \, d\mu,\quad \forall E \in \mathscr{B}.$$

以下证明是由 Von Neumann 给出的.

> [!proof]- 证
> 先假设 $\mu(\Omega) < \infty$. 考虑实 Hilbert 空间 $L^2(\Omega, (\mu+\nu))$, 其范数为
>
> $$\|u\|^2 = \int_\Omega u^2(x) \, d(\mu+\nu).$$
>
> 令 $l(u)=\int_\Omega u\,d\mu$, 显然 $l(u)$ 关于 $u$ 线性, 由 Cauchy-Schwarz 不等式 (命题 1.6.8),
>
> $$
> \begin{aligned}
> \|l(u)\| &\le \mu(\Omega)^{1/2} \left(\int_\Omega u^2\,d\mu\right)^{1/2} \\
> &\le \mu(\Omega)^{1/2} \|u\|,\quad \forall u \in L^2(\Omega, (\mu+\nu)).
> \end{aligned}
> $$
>
> 它还是有界的. 根据 Riesz 表示定理 (定理 2.2.1), 存在函数 $v \in L^2(\Omega, (\mu+\nu))$, 使得
>
> $$\int_\Omega u\,d\mu = \int_\Omega u v\,d(\mu+\nu),$$
>
> 即
>
> $$\int_\Omega u(1-v)\,d\mu = \int_\Omega u v\,d\nu,\quad \forall u \in L^2(\Omega, (\mu+\nu)). \tag{2.2.14}$$
>
> 我们断言,
>
> $$0 < v(x) \le 1 \quad \text{a.e. }\mu.$$
>
> 为此, 令 $F = \{x \in \Omega \mid v(x) \le 0\}$, 取 $u(x)=\chi_F(x)$ 代入 (2.2.14) 式, 有
>
> $$\int_F (1-v)\,d\mu = \int_F v\,d\nu,$$
>
> 即
>
> $$\mu(F) = \int_F d\mu = \int_F v\,d(\mu+\nu) \le 0,$$
>
> 从而 $\mu(F)=0$.
>
> 同样, 令 $G = \{x \in \Omega \mid v(x) > 1\}$, 取 $u(x)=\chi_G(x)$ 代入 (2.2.14) 式, 有
>
> $$0 \ge \int_G (1-v)\,d\mu = \int_G v\,d\nu \ge \nu(G) \ge 0,$$
>
> 即
>
> $$\int_G (1-v)\,d\mu = 0.$$
>
> 因为 $1-v(x) < 0$, $x \in G$, 所以 $\mu(G)=0$.
>
> 这就证明了 $0 < v(x) \le 1$, $x \in \Omega$ a.e. $\mu$. 令 $g(x)=(1-v(x))/v(x)$, 则 $g(x) \ge 0$, 且关于 $\mu$ 可测. 对 $E \in \mathscr{B}$, 取 $u(x)=\chi_E(x)/(v(x)+1/n)$ 代入 (2.2.14) 式, 得
>
> $$\int_\Omega \chi_E(x) \frac{1-v(x)}{v(x)+1/n}\,d\mu = \int_\Omega \chi_E(x) \frac{v(x)}{v(x)+1/n}\,d\nu.$$
>
> 因为 $\nu$ 关于 $\mu$ 绝对连续, 且 $v > 0$, a.e. $\mu$, 故 $v > 0$, a.e. $\nu$. 令 $n\to\infty$, 由单调收敛性定理得
>
> $$\int_E g(x)\,d\mu = \nu(E),\quad E \in \mathscr{B}.$$
>
> 剩下考虑情形 $\mu(\Omega)=\infty$. 由 $\sigma$ 有限性, 取 $\Omega_n \subset \Omega_{n+1}$, $\Omega = \bigcup_{n\ge 1} \Omega_n$, $\mu(\Omega_n) < \infty$, $n \ge 1$. 由先前结论, $E \subset \Omega$,
>
> $$\nu(E \cap \Omega_n) = \int_{E\cap\Omega_n} g_n\,d\mu,$$
>
> 易证: $g_n(x) = g_{n+1}(x)$, $x \in \Omega_n$. 令 $g(x)=\lim_{n\to\infty} g_n(x)$, 由单调收敛性得
>
> $$\nu(E) = \lim_{n\to\infty} \int_{\Omega_n \cap E} d\nu = \lim_{n\to\infty} \int_{E\cap\Omega_n} g_n\,d\mu = \int_E g\,d\mu,\quad E \in \mathscr{B}.$$
>
> 这样我们就证明了定理. $\blacksquare$

> [!exercise] 习题
> (本节各题中的 $H$ 均指 Hilbert 空间)
>
> **2.2.1** 设 $f_1, f_2,\cdots,f_n$ 是 $H$ 上的一组有界线性泛函,
>
> $$M \triangleq \bigcap_{k=1}^n N(f_k),\quad N(f_k) \triangleq \{x \in H \mid f_k(x)=0\}\;(k=1,2,\cdots,n).$$
>
> $\forall x_0 \in H$, 记 $y_0$ 为 $x_0$ 在 $M$ 上的正交投影, 求证: $\exists y_1, y_2,\cdots,y_n \in N(f_k)^\perp$ 及 $\alpha_1, \alpha_2,\cdots,\alpha_n \in \mathbb{K}$, 使得
>
> $$y_0 = x_0 - \sum_{k=1}^n \alpha_k y_k.$$
>
> **2.2.2** 设 $l$ 是 $H$ 上的实值有界线性泛函, $C$ 是 $H$ 中的一个闭凸子集. 又设
>
> $$f(v) = \frac12\|v\|^2 - l(v) \quad (\forall v \in C).$$
>
> (1) 求证: $\exists u^* \in H$, 使得
>
> $$f(v) = \frac12\|u^* - v\|^2 - \frac12\|u^*\|^2 \quad (\forall v \in C).$$
>
> (2) 求证: $\exists!\,u_0 \in C$, 使得 $f(u_0) = \inf_{v\in C} f(v)$.
>
> **2.2.3** 设 $H$ 的元素是定义在集合 $S$ 上的复值函数. 又若 $\forall x \in S$, 由
>
> $$J_x(f) = f(x) \quad (\forall f \in H)$$
>
> 定义的映射 $J_x: H \to \mathbb{C}$ 是 $H$ 上的连续线性泛函. 求证: 存在 $S \times S$ 上的复值函数 $K(x, y)$, 适合条件:
>
> (1) 对任意固定的 $y \in S$, 作为 $x$ 的函数有 $K(x, y) \in H$;
>
> (2) $f(y) = (f, K(\cdot, y))$, $\forall f \in H$, $\forall y \in S$.
>
> **注** 满足条件 (1) 与 (2) 的函数 $K(x, y)$ 称为 $H$ 的再生核.
>
> **2.2.4** 求证: $H^2(D)$ (定义见例 1.6.28) 的再生核为
>
> $$K(z, w) = \frac{1}{\pi(1-\bar{z}w)^2} \quad (z, w \in D).$$
>
> **2.2.5** 设 $L, M$ 是 $H$ 上的闭线性子空间, 求证:
>
> (1) $L \perp M \iff P_L P_M = 0$;
>
> (2) $L = M^\perp \iff P_L + P_M = I$ (恒同算子);
>
> (3) $P_L P_M = P_{L\cap M} \iff P_L P_M = P_M P_L$.

## §3 纲与开映射定理

有一大类解方程的问题从泛函分析上看就是对给定的算子 $T: \mathscr{X} \to \mathscr{Y}$ 和 $y \in \mathscr{Y}$, 求 $x \in \mathscr{X}$, 使得

$$Tx = y. \tag{2.3.1}$$

解的存在性表达成算子 $T$ 有右逆 $T_r^{-1}$:

$$TT_r^{-1} = I \quad (I\ \text{表示恒同算子}).$$

因为若令 $x = T_r^{-1} y$, 则有 $Tx = TT_r^{-1} y = y$; 而解的唯一性表达成算子 $T$ 有左逆 $T_l^{-1}$:

$$T_l^{-1} T = I.$$

因为由 $Tx = y$ 及 $T_l^{-1}$ 存在便推得 $x = T_l^{-1} Tx = T_l^{-1} y$, 所以解 $x$ 唯一地被 $y$ 决定. 因此为了解存在而且唯一, 必须且仅须线性算子 $T$ 既有左逆又有右逆. 又因为, 如果算子 $T$ 左右逆同时存在, 那么它们一定是相等的. 事实上,

$$T_l^{-1} = T_l^{-1} I = T_l^{-1} (TT_r^{-1}) = (T_l^{-1} T) T_r^{-1} = IT_r^{-1} = T_r^{-1}.$$

所以这时称算子 $T$ 有逆, 并记此逆为 $T^{-1}$.

若 $\mathscr{X}$, $\mathscr{Y}$ 都具有拓扑结构, 又若方程 (2.3.1) 的解是存在唯一的, 我们还要问什么时候方程的解是稳定的? 所谓稳定是指当 $y$ 做微小变化时, 对应的解 $x$ 也做微小变化, 即映射 $T^{-1}$ 是连续的, 我们知道: 一个映射 $T$ 称为是连续的, 是指开集 $U$ 在 $T$ 作用下的原像 $T^{-1}(U)$ 是开的, 那么为了 $T^{-1}$ 是连续的, 就是指: $T$ 映开集 $U$ 为开集 $T(U)$. 为了不涉及 $T^{-1}$ 的存在性, 称映射 $T: \mathscr{X} \to \mathscr{Y}$ 是开映射, 如果它映开集为开集.

### 3.1 纲与纲推理

与定义 1.2.2 的稠密概念相联系, 引入疏集的概念.

> [!definition] 定义 2.3.1
> 设 $(\mathscr{X}, \rho)$ 是一个度量空间, 集合 $E \subset \mathscr{X}$, 称 $E$ 是疏的, 如果 $\overline{E}$ 的内点是空的.

> [!example] 例 2.3.2
> 在 $\mathbb{R}^n$ 上, 有穷点集是疏集. Cantor 集是疏集.

> [!proposition] 命题 2.3.3
> 设 $(\mathscr{X}, \rho)$ 是一度量空间. 为了 $E \subset \mathscr{X}$ 是疏集必须且仅须: $\forall$ 球 $B(x_0, r_0)$, $\exists B(x_1, r_1) \subset B(x_0, r_0)$, 使得
> $\overline{E} \cap \overline{B}(x_1, r_1) = \varnothing$.

> [!proof]- 证
> 必要性. 因为 $\overline{E}$ 无内点, 所以 $\overline{E}$ 不能包含任一球 $B(x_0, r_0)$.
> 从而 $\exists x_1 \in B(x_0, r_0)$, 使得 $x_1 \notin \overline{E}$. 又由 $\overline{E}$ 闭, 所以 $\exists\varepsilon_1 > 0$, 使得
> $\overline{B}(x_1, \varepsilon_1) \cap \overline{E} = \varnothing$. 取
> $$0 < r_1 < \min(\varepsilon_1, r_0 - \rho(x_0, x_1)),$$
> 便有 $B(x_1, r_1) \subset B(x_0, r_0)$, $\overline{B}(x_1, r_1) \cap \overline{E} = \varnothing$.
>
> 充分性. 若 $E$ 不疏, 即 $\overline{E}$ 有内点, 则 $\exists B(x_0, r_0) \subset \overline{E}$. 但由假设
> $\exists B(x_1, r_1) \subset B(x_0, r_0)$, 使得 $\overline{B}(x_1, r_1) \cap \overline{E} = \varnothing$.
> 一方面有 $B(x_1, r_1) \cap \overline{E} = B(x_1, r_1)$; 另一方面有 $B(x_1, r_1) \cap \overline{E} = \varnothing$.
> 即得矛盾. $\blacksquare$

> [!definition] 定义 2.3.4
> 在度量空间 $(\mathscr{X}, \rho)$ 上, 集合 $E$ 称为第一纲的, 如果 $E = \bigcup_{n=1}^\infty E_n$, 其中 $E_n$ 是疏集. 不是第一纲的集合称为第二纲集.

> [!example] 例 2.3.5
> 在 $\mathbb{R}$ 上, 有理点集是第一纲集. 更一般地, 可数点集总是第一纲集.

> [!theorem] 定理 2.3.6 (Baire)
> 完备度量空间 $(\mathscr{X}, \rho)$ 是第二纲集.

> [!proof]- 证
> 用反证法. 倘若 $\mathscr{X}$ 是第一纲集, 即存在疏集 $\{E_n\}$, 使得
> $$\mathscr{X} = \bigcup_{n=1}^\infty E_n. \qquad (2.3.2)$$
> 对任意的球 $B(x_0,r_0)$, $\exists B(x_1,r_1)\subset B(x_0,r_0)(r_1<1)$, 使得
> $$\overline{B}(x_1,r_1)\cap\overline{E}_1=\varnothing;$$
> 对球 $B(x_1,r_1)$, $\exists B(x_2,r_2)\subset B(x_1,r_1)(r_2<1/2)$, 使得
> $$\overline{B}(x_2,r_2)\cap(\overline{E}_1\cup\overline{E}_2)=\varnothing;$$
> 如此继续下去，对球 $B(x_{n-1},r_{n-1})$, $\exists B(x_n,r_n)\subset B(x_{n-1},r_{n-1})(r_n<1/n)$, 使得 $\overline{B}(x_n,r_n)\cap\overline{E}_n=\varnothing$, 从而
> $$\overline{B}(x_n,r_n)\cap\left(\bigcup_{i=1}^n\overline{E}_i\right)=\varnothing\quad(\forall n\in\mathbb{N}).\eqno(2.3.3)$$
> 于是我们得到
> $$\overline{B}(x_0,r_0)\supset\overline{B}(x_1,r_1)\supset\cdots\supset\overline{B}(x_n,r_n)\supset\cdots,$$
> 而
> $$\rho(x_{n+p},x_n)\leqslant r_n<\frac1n\quad(\forall n,p\in\mathbb{N}).\eqno(2.3.4)$$
> 由此可见 $\{x_n\}$ 是基本列，从而 $\exists x\in\mathscr{X}$, 使得 $\lim\limits_{n\to\infty}x_n=x$. 另一方面在 (2.3.4) 式中令 $p\to\infty$ 得 $\rho(x,x_n)\leqslant r_n$, 从而
> $$x\in\overline{B}(x_n,r_n)\quad(\forall n\in\mathbb{N}).\eqno(2.3.5)$$
> 联合 (2.3.3) 式与 (2.3.5) 式便有 $x\notin\bigcup\limits_{n=1}^\infty E_n$, 这与 (2.3.2) 式矛盾. $\blacksquare$

**应用** 在数学分析课程中，许多人曾为 Weierstrass 构造出一个处处连续而处处不可微的函数而感到惊异，然而我们却有下列更为令人吃惊的事实.

> [!theorem] 定理 2.3.7
> 在 $C[0,1]$ 中处处不可微的函数集合 $E$ 是非空的，更确切地，$E$ 的余集是第一纲集.

> [!proof]- 证
> 取 $\mathscr{X}=C[0,1]$, 设 $A_n$ 表示 $\mathscr{X}$ 中这样一些元素 $f$ 之集：对 $f$, $\exists s\in[0,1]$, 使对适合 $0\leqslant s+h\leqslant1$ 与 $|h|\leqslant1/n$ 的任何 $h$, 成立下式：
> $$\left|\frac{f(s+h)-f(s)}h\right|\leqslant n.$$
> 若 $f$ 在某个点 $s$ 处可微，则必有正整数 $n$, 使得 $f\in A_n$, 于是
> $$\mathscr{X}\setminus E\subset\bigcup_{n=1}^\infty A_n.\eqno(2.3.6)$$
>
> 下面我们证明每个 $A_n$ 是疏集，为此先证 $A_n$ 是闭的. 事实上，若 $f\in\mathscr{X}\setminus A_n$, 则 $\forall s\in[0,1]$, $\exists h_s$, 使得
> $$|h_s|\leqslant\frac1n,\quad\text{且}\quad|f(s+h_s)-f(s)|>n|h_s|.$$
> 又由 $f$ 的连续性，$\exists\varepsilon_s>0$, 以及 $s$ 的某个适当的邻域 $J_s$, 使得对 $\forall\sigma\in J_s$, 有
> $$|f(\sigma+h_s)-f(\sigma)|>n|h_s|+2\varepsilon_s.\eqno(2.3.7)$$
> 根据有限覆盖定理，可设 $J_{s_1},J_{s_2},\cdots,J_{s_m}$ 覆盖 $[0,1]$, 并设
> $$\varepsilon=\min\{\varepsilon_{s_1},\varepsilon_{s_2},\cdots,\varepsilon_{s_m}\}.$$
> 今若 $g\in\mathscr{X}$ 适合 $\|g-f\|<\varepsilon$, 则由 (2.3.7) 式，对 $\forall\sigma\in J_{s_k}(k=1,2,\cdots,m)$ 有
> $$|g(\sigma+h_{s_k})-g(\sigma)|\geqslant|f(\sigma+h_{s_k})-f(\sigma)|-2\varepsilon>n|h_{s_k}|.$$
> 这证明了 $\mathscr{X}\setminus A_n$ 是开集，从而 $A_n$ 是闭集.
>
> 再证 $A_n$ 没有内点. $\forall f\in A_n$, $\forall\varepsilon>0$, 由 Weierstrass 逼近定理，存在多项式 $p$, 使得
> $$\|f-p\|<\frac\varepsilon2,$$
> $p$ 的导数在 $[0,1]$ 上是有界的，因此根据中值定理，$\exists M>0$, 使得对 $\forall s\in[0,1]$ 及 $|h|<1/n$, 成立
> $$|p(s+h)-p(s)|\leqslant M|h|.$$
> 设 $g(s)\in C[0,1]$ 是一个分段线性函数，满足 $\|g\|<\varepsilon/2$. 并且各条线段斜率的绝对值都大于 $M+n$, 那么
> $$p+g\in B(f,\varepsilon),\quad\text{而 }p+g\notin A_n.$$
>
> 这样，我们证明了每个 $A_n$ 是疏集，从而 $\bigcup\limits_{n=1}^\infty A_n$ 是第一纲集. 而 $\mathscr{X}$ 是完备的，由 Baire 定理（定理 2.3.6）$\mathscr{X}$ 是第二纲集，由此根据 (2.3.6) 式，$E$ 也是第二纲集. $\blacksquare$

本定理表明，处处连续而又处处不可微的函数是非常多的.

### 3.2 开映射定理

设 $\mathscr{X},\mathscr{Y}$ 都是 $B$ 空间，$T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 算子 $T$ 称为是单射，是指 $T$ 是 $1$-$1$ 的，算子 $T$ 称为是满射，是指 $T(\mathscr{X})=\mathscr{Y}$.

如果 $T$ 是一个单射，那么可以定义 $T^{-1}$, 它是线性的，但其定义域却未必是全空间 $\mathscr{Y}$. 仅当它还是一个满射时，$T^{-1}$ 才是 $\mathscr{Y}$ 到 $\mathscr{X}$ 的一个线性算子. 这时，我们自然要问，$T^{-1}$ 是不是连续的？下面的 Banach 逆算子定理回答了这一问题.

> [!theorem] 定理 2.3.8 (Banach)
> 设 $\mathscr{X},\mathscr{Y}$ 是 $B$ 空间. 若 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 它既是单射又是满射，那么 $T^{-1}\in\mathscr{L}(\mathscr{Y},\mathscr{X})$.

这定理有一个更一般的形式.

> [!theorem] 定理 2.3.9 (开映射定理)
> 设 $\mathscr{X},\mathscr{Y}$ 都是 $B$ 空间，若 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 是一个满射，则 $T$ 是开映射.

> [!proof]- 证
> 用 $B(x_0,a),U(y_0,b)$ 分别表示 $\mathscr{X},\mathscr{Y}$ 中的开球.
>
> (1) 为了证明 $T$ 是开映射，即 $\forall$ 开集 $W$, $T(W)$ 是开集，必须且仅须证明：$\exists\delta>0$, 使得
> $$TB(\theta,1)\supset U(\theta,\delta).\eqno(2.3.8)$$
> 事实上，必要性是显然的. 下证其充分性. 由于 $T$ 的线性，条件 (2.3.8) 等价于
> $$TB(x_0,r)\supset U(Tx_0,r\delta)\quad(\forall x_0\in\mathscr{X},\forall r>0).$$
> $\forall y_0\in T(W)$, 按定义 $\exists x_0\in W$, 使得 $y_0=Tx_0$. 因为 $W$ 是开集，所以 $\exists B(x_0,r)\subset W$. 于是取 $\varepsilon=r\delta$, 便有
> $$U(Tx_0,\varepsilon)\subset TB(x_0,r)\subset T(W),$$
> 即 $y_0=Tx_0$ 是 $T(W)$ 的内点（参看图 2.3.1）.
>
> 图 2.3.1
>
> (2) 证明：$\exists\delta>0$, 使得 $\overline{TB(\theta,1)}\supset U(\theta,3\delta)$. 这是因为
> $$\mathscr{Y}=T\mathscr{X}=\bigcup_{n=1}^\infty TB(\theta,n),$$
> 而 $\mathscr{Y}$ 是完备的，所以至少有一个 $n\in\mathbb{N}$, 使得 $TB(\theta,n)$ 非疏，即 $TB(\theta,n)$ 至少含有一个内点. 因此 $\exists U(y_0,r)\subset\overline{TB(\theta,n)}$, 注意到 $TB(\theta,n)$ 是一个对称凸集，便有 $U(-y_0,r)\subset\overline{TB(\theta,n)}$, 从而（参看图 2.3.2）
> $$U(\theta,r)\subset\frac12U(y_0,r)+\frac12U(-y_0,r)\subset\overline{TB(\theta,n)}.$$
> 由 $T$ 的齐次性，取 $\delta=r/3n$, 便有 $\overline{TB(\theta,1)}\supset U(\theta,3\delta)$.
>
> 图 2.3.2
>
> (3) 证明：$TB(\theta,1)\supset U(\theta,\delta)$. $\forall y_0\in U(\theta,\delta)$, 要证 $\exists x_0\in B(\theta,1)$, 使得 $Tx_0=y_0$, 即求方程 $Tx=y_0$ 在 $B(\theta,1)$ 内的一个解 $x_0$, 我们用逐次逼近法.
>
> 对 $y_0\in U(\theta,\delta)$, 按 (2), $\exists x_1\in B(\theta,\frac13)$, 使得
> $$\|y_0-Tx_1\|<\frac\delta3;$$
> 对 $y_1=y_0-Tx_1\in U(\theta,\frac\delta3)$, 按 (2), $\exists x_2\in B(\theta,\frac1{3^2})$, 使得
> $$\|y_1-Tx_2\|<\frac\delta{3^2};$$
> ……
> 对 $y_n = y_{n-1} - Tx_n \in U\left(\theta, \frac{\delta}{3^n}\right)$, 按 (2), $\exists x_{n+1} \in B\left(\theta, \frac{1}{3^{n+1}}\right)$, 使得
> $$\|y_n - Tx_{n+1}\| < \frac{\delta}{3^{n+1}};$$
> ……
> 于是 $\sum_{n=1}^{\infty} \|x_n\| \le 1/2$, 令 $x_0 \triangleq \sum_{n=1}^{\infty} x_n$, 便有 $x_0 \in B(\theta, 1)$. 而
> $$\|y_n\| = \|y_{n-1} - Tx_n\| = \cdots$$
> $$= \|y_0 - T(x_1 + x_2 + \cdots + x_n)\| < \frac{\delta}{3^n} \quad (\forall n \in \mathbb{N}),$$
> 即得
> $$S_n \triangleq \sum_{i=1}^{n} x_i \to x_0, \quad TS_n \to y_0 \quad (n \to \infty). \quad (2.3.9)$$
> 又因为 $T$ 是连续的, 所以
> $$Tx_0 = y_0, \quad (2.3.10)$$
> 即得 $U(\theta, \delta) \subset TB(\theta, 1)$. $\blacksquare$

> [!proof]- 定理 2.3.8 的证明
> 依定理 2.3.9 证明中的第 (3) 部分, 已知
> $$U(\theta, 1) \subset TB\left(\theta, \frac{1}{\delta}\right),$$
> 即
> $$T^{-1}U(\theta, 1) \subset B\left(\theta, \frac{1}{\delta}\right) \quad \text{或} \quad \|T^{-1}y\| < \frac{1}{\delta} \quad (\forall y \in \mathscr{Y}, \|y\| < 1).$$
> 特别地, 由范数的齐次性, $\forall y \in \mathscr{Y}, \forall \varepsilon > 0$, 有
> $$\|T^{-1}y\| < \frac{(1+\varepsilon)}{\delta}\|y\|.$$
>
> 令 $\varepsilon \to 0$ 得
> $$\|T^{-1}y\| \le \frac{1}{\delta}\|y\| \quad (\forall y \in \mathscr{Y}).$$
> 从而 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$. $\blacksquare$

> [!remark] 注 1
> 定理 2.3.8 与定理 2.3.9 中的 Banach 空间 $\mathscr{X}, \mathscr{Y}$ 可以换成更一般的 $F$ 空间, 但证明需稍做修改. 参看关肇直、张恭庆、冯德兴所著《线性泛函分析入门》(上海科学技术出版社, 1979) 的第二章 §2.

> [!remark] 注 2
> 在定理 2.3.8 中, $T\mathscr{X}$ 是第二纲集的假设是不可少的 (满射及 $\mathscr{Y}$ 的完备性保证了这一点). 因为有例子, 取 $\mathscr{X} = \mathscr{Y} = C[0, 1]$, 规定
> $$(Tx)(t) = \int_0^t x(\tau) d\tau \quad (\forall x \in \mathscr{X}).$$
> 它显然是连续线性的, 但 $T\mathscr{X} = \mathscr{Y}_0 = \{y \in C^1[0, 1] \mid y(0) = 0\}$ 不是 $C[0, 1]$ 的第二纲集. 这时 $T^{-1} = \frac{d}{dt}$ 在 $C[0, 1]$ 中不是连续的 (即使以 $C[0, 1]$ 中的一个子集 $\mathscr{Y}_0$ 作为 $T^{-1}$ 的定义域, 也不连续). 事实上, $x_n(t) \triangleq \sin n\pi t$, 显然 $\|x_n\| = 1$, 但是
> $$\left\|\frac{d}{dt}x_n(t)\right\| = n\pi\|\cos n\pi t\| = n\pi \to \infty \quad (\text{当 } n \to \infty),$$
> 其中 $\|\cdot\|$ 表示 $C[0, 1]$ 空间中的范数. 然而, 若 $\mathscr{Y}_0$ 按 $C^1[0, 1]$ 的范数 $\|\cdot\|_1$ 则构成 $B$ 空间, 这时 $T^{-1} = \frac{d}{dt}$ 是有界的. 事实上,
> $$\|T^{-1}y\| = \left\|\frac{d}{dt}y(t)\right\| \le \|y\|_1 \quad (\forall y \in \mathscr{Y}_0).$$

分析定理 2.3.8 与定理 2.3.9 的证明过程, 可以看出, 线性算子 $T$ 的连续性的假设可以减弱. 事实上, 用到连续性之处在于由 (2.3.9) 式推出 (2.3.10) 式, 而这只需要 $T$ 是如下定义的闭算子就够了.

> [!definition] 定义 2.3.10
> 设 $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的线性算子, $D(T)$ 是其定义域. 称 $T$ 是闭的, 是指由 $x_n \in D(T), x_n \to x$, 以及 $Tx_n \to y$ 就能推出 $x \in D(T)$, 而且 $y = Tx$.

> [!example] 例 2.3.11
> 在 $C[0, 1]$ 上, $D(T) = C^1[0, 1]$, $T = \frac{d}{dt}$ 是一个闭线性算子.

> [!proof]- 证
> 如果 $x_n(t) \in C^1[0, 1]$, 并且有
> $$x_n \to x (C[0, 1]), \quad \frac{dx_n}{dt} \to y (C[0, 1]),$$
> 则有
> $$x_n(t) - x_n(0) \to \int_0^t y(\tau) d\tau \quad (\forall t \in [0, 1]),$$
> $$x_n(t) - x_n(0) \to x(t) - x(0) \quad (\forall t \in [0, 1]),$$
> 即得
> $$x(t) = x(0) + \int_0^t y(\tau) d\tau \quad (\forall t \in [0, 1]).$$
> 因此, $x \in C^1[0, 1]$, 且 $\frac{dx}{dt} = y(t)$. $\blacksquare$

如果 $T$ 是闭线性算子, 在定理 2.3.8 与定理 2.3.9 的证明过程中, 一开始取空间 $\mathscr{X}$ 就是 $D(T)$, 它未必完备 (但是它是 $B^*$ 空间). 到证明的第 (3) 部分, 我们找到基本列 $S_n$, 满足 $TS_n \to y_0$. 这时利用 $\mathscr{X}$ 的完备性推出 $\exists x_0 \in \mathscr{X}$, 使得 $S_n \to x_0$, 再由 $T$ 的闭性推出 $x_0 \in D(T), y_0 = Tx_0$. 于是得到更一般的结论.

> [!theorem] 定理 2.3.12
> 若 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的一个闭线性算子, 满足 $R(T)$ 是 $\mathscr{Y}$ 中的第二纲集, 则 $R(T) = \mathscr{Y}$ 并且 $\forall \varepsilon > 0, \exists \delta = \delta(\varepsilon) > 0$, 使得 $\forall y \in \mathscr{Y}, \|y\| < \delta$ 必有 $x \in D(T)$, 适合 $\|x\| < \varepsilon$ 且 $y = Tx$.

> [!proof]- 证
> 只有 $R(T) = \mathscr{Y}$ 是需要证的. 我们已知对 $\varepsilon = 1, \exists \delta > 0$, 使得
> $$U(\theta, \delta) \subset T(B(\theta, 1) \cap D(T)). \quad (2.3.11)$$
>
> $\forall y \in \mathscr{Y}$, 不妨设 $y \neq \theta$ (显然 $\theta \in R(T)$). $\forall 0 < \delta_1 < \delta$, 按 (2.3.11) 式,
> $$\frac{\delta_1 y}{\|y\|} \in U(\theta, \delta) \Longrightarrow \frac{\delta_1 y}{\|y\|} \in T(B(\theta, 1) \cap D(T)).$$
> 于是 $\exists x \in B(\theta, 1) \cap D(T)$, 使得
> $$\frac{\delta_1 y}{\|y\|} = Tx \Longrightarrow y = T\left(\frac{\|y\|}{\delta_1}x\right) \Longrightarrow y \in R(T). \quad \blacksquare$$

### 3.3 闭图像定理

对于线性算子而言, 我们来看连续性与闭性间的关系. 我们说一个连续线性算子 $T: D(T) \to \mathscr{Y}$ 总可以延拓到 $\overline{D(T)}$ 上, 这由下列定理给出.

> [!theorem] 定理 2.3.13
> 设 $T$ 是 $B^*$ 空间 $\mathscr{X}$ 到 $B$ 空间 $\mathscr{Y}$ 的连续线性算子, 那么 $T$ 能唯一地延拓到 $\overline{D(T)}$ 上成为连续线性算子 $T_1$, 使得 $T_1|_{D(T)} = T$, 且 $\|T_1\| = \|T\|$.

> [!proof]- 证
> 任取 $x \in \overline{D(T)}, \exists x_n \in D(T), \lim_{n \to \infty} x_n = x$, 依假设 $T$ 在 $D(T)$ 上连续, 从而有界, 即 $\exists M > 0$, 使得
> $$\|Tx\| \le M\|x\| \quad (\forall x \in D(T)).$$
> 于是
> $$\|Tx_{n+p} - Tx_n\| \le M\|x_{n+p} - x_n\|.$$
> 由此可见 $\{Tx_n\}$ 是 $\mathscr{Y}$ 中的基本列, 已设 $\mathscr{Y}$ 完备, 所以 $\exists y \in \mathscr{Y}$, 使得 $Tx_n \to y$. 不难看出 $y$ 仅依赖于 $x$, 而与 $D(T)$ 中 $x_n$ 的选择无关. 因此, 可以定义 $T_1: x \mapsto y$. 容易验证 $T_1$ 是线性的, 还有 $T_1|_{D(T)} = T$, 并且 $\|T_1x\| \le M\|x\| (\forall x \in \overline{D(T)})$. $\blacksquare$

在这个意义上, 我们把每个连续线性算子 $T$ 都看成是有闭定义域的. 于是每个连续线性算子必是闭的. 可是一般闭线性算子未必能延拓到 $\overline{D(T)}$ 上, 使其仍闭.

> [!corollary] 推论 2.3.14 (等价范数定理)
> 设线性空间 $\mathscr{X}$ 上有两个范数 $\|\cdot\|_1$ 与 $\|\cdot\|_2$. 如果 $\mathscr{X}$ 关于这两个范数都构成 $B$ 空间, 而且 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 则 $\|\cdot\|_2$ 与 $\|\cdot\|_1$ 必等价.

> [!proof]- 证
> 考察恒同映射 $I: \mathscr{X} \to \mathscr{X}$, 把它看成是由 $(\mathscr{X}, \|\cdot\|_2) \to (\mathscr{X}, \|\cdot\|_1)$ 的线性算子, 由假设 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 即 $\exists C > 0$, 使得
> $$\|Ix\|_1 \le C\|x\|_2 \quad (\forall x \in \mathscr{X}).$$
> 因此 $I$ 是连续的, 它既是单射又是满射. 依定理 2.3.8, $I$ 可逆且 $I^{-1}$ 连续, 即有 $M > 0$, 使
> $$\|I^{-1}x\|_2 \le M\|x\|_1 \quad (\forall x \in \mathscr{X}).$$
> 又因 $I^{-1}x$ 与 $x$ 是同一个元素, 所以 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价. $\blacksquare$

> [!theorem] 定理 2.3.15 (闭图像定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间. 若 $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的闭线性算子, 并且 $D(T)$ 是闭的, 则 $T$ 是连续的.

> [!proof]- 证
> 因为 $D(T)$ 是闭的, 所以 $D(T)$ 作为 $\mathscr{X}$ 的线性子空间可看成是 $B$ 空间. 在 $D(T)$ 上, 引进另外一个范数 $\|\cdot\|_G$ 如下:
> $$\|x\|_G = \|x\| + \|Tx\| \quad (\forall x \in D(T)).$$
> 现在证明 $(D(T), \|\cdot\|_G)$ 也是 $B$ 空间, 事实上, 从
> $$\|x_n - x_m\|_G = \|x_n - x_m\| + \|Tx_n - Tx_m\| \to 0$$
> $$(n, m \to \infty),$$
> 可知 $\exists x^* \in \mathscr{X}$ 与 $y^* \in \mathscr{Y}$, 使得 $x_n \to x^*$, 且 $Tx_n \to y^*$. 根据 $T$ 的闭性即得 $y^* = Tx^*$, 从而 $Tx_n \to Tx^*$. 因此 $\|x_n - x^*\|_G \to 0$. 又显然有 $\|\cdot\|_G$ 比 $\|\cdot\|$ 强, 根据等价范数定理 (推论 2.3.14), $\|\cdot\|_G$ 与 $\|\cdot\|$ 等价, 故 $\exists M > 0$, 使得
> $$\|Tx\| \le \|x\|_G \le M\|x\| \quad (\forall x \in D(T)). \quad \blacksquare$$

> [!remark] 注
> 集合 $G(T) \triangleq \{(x,Tx) \mid x \in D(T)\}$ 称为算子 $T$ 的图像, 而 $\|x\|_G$ 实际上是 $(x,Tx)$ 在乘积空间 $\mathscr{X} \times \mathscr{Y}$ 上的范数, 因此 $\|\cdot\|_G$ 称为图模. 算子 $T$ 是闭的, 实际上就是 $G(T)$ 按图模是闭的.

### 3.4 共鸣定理

> [!theorem] 定理 2.3.16（共鸣定理或一致有界定理）
> 设 $X$ 是 $B$ 空间，$Y$ 是 $B^*$ 空间，如果 $W \subset \mathcal{L}(X,Y)$，使得
> $$
> \sup_{A\in W} \|Ax\| < \infty \quad (\forall x \in X),
> $$
> 那么存在常数 $M$，使得 $\|A\| \le M$（$\forall A \in W$）。

> [!proof]- 证
> $\forall x \in X$，定义
> $$
> \|x\|_W = \|x\| + \sup_{A\in W} \|Ax\|.
> $$
> 显然，$\|\cdot\|_W$ 是 $X$ 上的范数，且强于 $\|\cdot\|$。下面证明 $(X, \|\cdot\|_W)$ 完备。事实上，如果
> $$
> \|x_m - x_n\| + \sup_{A\in W} \|A(x_m - x_n)\| \to 0 \quad (\text{当 } m,n \to \infty).
> $$
> 由 $X$ 的完备性，$\exists x \in X$，使得 $\|x_n - x\| \to 0$（当 $n \to \infty$），又因为 $\forall \varepsilon > 0$，$\exists N = N(\varepsilon)$，使得
> $$
> \sup_{A\in W} \|Ax_m - Ax_n\| < \varepsilon \quad (\forall m,n \ge N).
> $$
> 从而对 $\forall A \in W$ 有 $\|Ax_n - Ax\| \le \varepsilon$（$\forall n \ge N$）。于是
> $$
> \|x_n - x\| + \sup_{A\in W} \|A(x_n - x)\| \to 0 \quad (\text{当 } n \to \infty),
> $$
> 即 $\|x_n - x\|_W \to 0$。再根据等价范数定理（推论 2.3.14），$\|\cdot\|_W$ 与 $\|\cdot\|$ 等价，从而存在常数 $M$，使得
> $$
> \sup_{A\in W} \|Ax\| \le M\|x\| \quad (\forall x \in X).
> $$
> 由此立即推出 $\|A\| \le M$（$\forall A \in W$）。■

> [!remark] 注
> 条件：$\forall x \in X$，$\displaystyle\sup_{A\in W} \|Ax\| < \infty$，意味着 $\forall x \in X$，$\exists M_x > 0$，使得
> $$
> \|Ax\| \le M_x\|x\| \quad (\forall A \in W). \tag{2.3.12}
> $$
> 而结论：$\|A\| \le M$（$\forall A \in W$），则可看作是，存在与 $x$ 无关的常数 $M$，使得
> $$
> \|Ax\| \le M\|x\| \quad (\forall A \in W). \tag{2.3.13}
> $$
> (2.3.12) 式意味着算子族 $W$ 点点有界；(2.3.13) 式则意味着算子族 $W$ 一致有界。因此本定理给出条件保证点点有界蕴含一致有界，故称"一致有界"定理。另一方面，如果我们从反面来叙述本定理将有：$\displaystyle\sup_{A\in W} \|A\| = \infty \implies \exists x_0 \in X$，使得
> $$
> \sup_{A\in W} \|Ax_0\| = \infty.
> $$
> 因此本定理又有"共鸣定理"之称。

> [!theorem] 定理 2.3.17（Banach-Steinhaus 定理）
> 设 $X$ 是 $B$ 空间，$Y$ 是 $B^*$ 空间，$M$ 是 $X$ 的某个稠密子集。若 $A_n$（$n=1,2,\cdots$），$A \in \mathcal{L}(X,Y)$，则 $\forall x \in X$ 都有
> $$
> \lim_{n\to\infty} A_n x = A x \tag{2.3.14}
> $$
> 的充要条件是：
>
> (1) $\|A_n\|$ 有界；
>
> (2) (2.3.14) 式对 $\forall x \in M$ 成立。

> [!proof]- 证
> 必要性。根据共鸣定理（定理 2.3.16），结论是显然的。
>
> 充分性。假定 $\|A_n\| \le C$（$\forall n \in \mathbb{N}$），对 $\forall x \in X$ 及 $\forall \varepsilon > 0$，取 $y \in M$，使得
> $$
> \|x - y\| \le \frac{\varepsilon}{4(\|A\|+C)},
> $$
> 便有
> $$
> \begin{aligned}
> \|A_n x - A x\| &\le \|A_n x - A_n y\| + \|A_n y - A y\| + \|A x - A y\| \\
> &< \varepsilon/2 + \|A_n y - A y\| \quad (\forall n \in \mathbb{N}).
> \end{aligned}
> $$
> 再取 $N$ 足够大，使得 $\|A_n y - A y\| < \varepsilon/2$（$\forall n \ge N$），便有
> $$
> \|A_n x - A x\| < \varepsilon \quad (\forall n \ge N). \qquad \blacksquare
> $$

### 3.5 应用

**1. Lax-Milgram 定理**

> [!theorem] 定理 2.3.18（Lax-Milgram 定理）
> 设 $a(x,y)$ 是 Hilbert 空间 $X$ 上的一个共轭双线性函数，满足：
>
> (1) $\exists M > 0$，使 $|a(x,y)| \le M\|x\|\cdot\|y\|$（$\forall x,y \in X$），$\tag{2.3.15}$
>
> (2) $\exists \delta > 0$，使 $|a(x,x)| \ge \delta\|x\|^2$（$\forall x \in X$），$\tag{2.3.16}$
>
> 那么必存在唯一的有连续逆的连续线性算子 $A \in \mathcal{L}(X)$，满足
> $$
> a(x,y) = (x,Ay) \quad (\forall x,y \in X), \tag{2.3.17}
> $$
> $$
> \|A^{-1}\| \le 1/\delta. \tag{2.3.18}
> $$

> [!proof]- 证
> 依定理 2.2.2，适合 (2.3.17) 式的算子 $A \in \mathcal{L}(X)$ 存在唯一。今证：
>
> (1) $A$ 是单射。若有 $y_1, y_2 \in X$，满足 $Ay_1 = Ay_2$，则
> $$
> a(x,y_1) = a(x,y_2) \quad (\forall x \in X),
> $$
> 从而
> $$
> a(x,y_1 - y_2) = 0 \quad (\forall x \in X).
> $$
> 特别取 $x = y_1 - y_2$，由 (2.3.16) 式即得 $y_1 = y_2$。
>
> (2) $A$ 是满射。先证 $\mathcal{R}(A)$ 是闭的。事实上，$\forall w \in \overline{\mathcal{R}(A)}$，$\exists v_n \in X$（$n=1,2,\cdots$），使得
> $$
> w = \lim_{n\to\infty} Av_n. \tag{2.3.19}
> $$
> 由 (2.3.16) 式，
> $$
> \begin{aligned}
> \delta\|v_{n+p} - v_n\|^2 &\le |a(v_{n+p} - v_n, v_{n+p} - v_n)| \\
> &= |(v_{n+p} - v_n, A(v_{n+p} - v_n))| \\
> &\le \|v_{n+p} - v_n\|\cdot\|Av_{n+p} - Av_n\| \quad (\forall n,p \in \mathbb{N}),
> \end{aligned}
> $$
> 即得
> $$
> \|v_{n+p} - v_n\| \le \frac{1}{\delta} \|Av_{n+p} - Av_n\| \to 0 \quad (\text{当 } n \to \infty,\ \forall p \in \mathbb{N}).
> $$
> 从而 $\{v_n\}$ 是基本列，因此 $\exists v^* \in X$，使得 $v_n \to v^*$，并由 $A$ 的连续性和 (2.3.19) 式得 $w = Av^*$，即 $w \in \mathcal{R}(A)$。于是 $\mathcal{R}(A)$ 闭。
>
> 再证 $\mathcal{R}(A)^\perp = \{\theta\}$。倘若 $w \in \mathcal{R}(A)^\perp$，则
> $$
> (w, Av) = 0 \quad (\forall v \in X),
> $$
> 即 $a(w,v) = 0$（$\forall v \in X$）。特别取 $v = w$，再利用假设 (2.3.16) 式有
> $$
> \delta\|w\|^2 \le |a(w,w)| = 0,
> $$
> 即得 $w = \theta$。由此可见 $A$ 是满射。
>
> (3) 再利用 Banach 逆算子定理（定理 2.3.8），$A^{-1} \in \mathcal{L}(X)$。因为
> $$
> \delta\|x\|^2 \le |a(x,x)| = |(x,Ax)| \le \|x\|\cdot\|Ax\|,
> $$
> 所以 $\delta\|x\| \le \|Ax\|$（$\forall x \in X$），即得 (2.3.18) 式。■

**2. Lax 等价定理**

在数值分析中，为了求一个方程的解，往往用求一个近似方程的解去代替。例如，用差分方程或有限元方程近似代替微分方程。其首要问题便是：近似方程的解是否收敛到原方程的解？若是，则称这近似格式具有收敛性。

用泛函分析的语言描述，设 $T \in \mathcal{L}(X,Y)$，其中 $X,Y$ 是 $B$ 空间。给定 $y \in Y$，求解 $x \in X$，使得
$$
Tx = y. \tag{2.3.20}
$$
首先我们应当假定，$\forall y \in Y$，$\exists!\, x \in X$ 满足 (2.3.20) 式。这时，应用定理 2.3.8，便有 $T^{-1} \in \mathcal{L}(Y,X)$。现在来考虑 (2.3.20) 式的近似方程。$\forall n \in \mathbb{N}$，设 $T_n \in \mathcal{L}(X,Y)$，求解 $x_n \in X$，使得
$$
T_n x_n = y. \tag{2.3.21}
$$
当然，还是要假定 $\forall y \in Y$，$\exists!\, x_n \in X$ 满足 (2.3.21) 式，于是有 $T_n^{-1} \in \mathcal{L}(Y,X)$。

何谓 $T_n$ 是 $T$ 的近似？它是指：$\forall x \in X$，
$$
\|Tx - T_n x\| \to 0 \quad (n \to \infty). \tag{2.3.22}
$$
这在数值分析中称为近似格式具有相容性。

在数值分析中还有一个重要的概念：称近似格式具有稳定性，是指 $\exists C > 0$，使得
$$
\|T_n^{-1}\| \le C \quad (\forall n \in \mathbb{N}). \tag{2.3.23}
$$
在相容性的前提下，Lax 指出了近似格式的收敛性与稳定性是等价的。

> [!theorem] 定理 2.3.19（Lax 等价定理）
> 如果 (2.3.22) 式对 $\forall x \in X$ 成立，那么为了 $x_n \to x$（$n \to \infty$），其中 $x_n$ 与 $x$ 分别是 (2.3.21) 式与 (2.3.20) 式的解，必须且仅须 $\exists C > 0$，使得 (2.3.23) 式成立。

> [!proof]- 证
> 充分性。由 (2.3.22) 式和 (2.3.23) 式，我们得
> $$
> \begin{aligned}
> \|x_n - x\| &= \|T_n^{-1}y - T_n^{-1}T_n x\| \\
> &\le \|T_n^{-1}\|\cdot\|Tx - T_n x\| \\
> &\le C\|Tx - T_n x\| \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
> $(\Rightarrow)$ 若 $x_0 \in \mathcal{R}(T)$，则 $x_0 = Tx$，$\forall x \in \mathcal{D}(T)$。于是
> $$
> f_0(x_0) = f_0(Tx) = (T^*f_0)(x) = 0 \quad (\forall x \in \mathcal{D}(T)).
> $$
> 从而 $x_0 \in {}^\perp\!\mathcal{R}(T^*)$。

> [!exercise] 习题 2.3.1
> 设 $X$ 是 Banach 空间，$X_0$ 是 $X$ 的闭子空间。映射 $\varphi: X \to X/X_0$ 定义为
> $$
> \varphi: x \mapsto [x] \quad (\forall x \in X),
> $$
> 其中 $[x]$ 表示含 $x$ 的商类（见第一章 §4）。求证 $\varphi$ 是开映射。

> [!exercise] 习题 2.3.2
> 设 $X, Y$ 是 Banach 空间，$U \in \mathcal{L}(X, Y)$，又设方程 $Ux = y$ 对每一个 $y \in Y$ 有解 $x \in X$，且 $\exists m > 0$，使得
> $$
> \|Ux\| \ge m\|x\| \quad (\forall x \in X).
> $$
> 求证：$U$ 有连续逆 $U^{-1}$，并且 $\|U^{-1}\| \le 1/m$。

> [!exercise] 习题 2.3.3
> 设 $H$ 是 Hilbert 空间，$A \in \mathcal{L}(H)$，并且 $\exists m > 0$，使得
> $$
> |(Ax, x)| \ge m\|x\|^2 \quad (\forall x \in H).
> $$
> 求证：$A^{-1} \in \mathcal{L}(H)$。

> [!exercise] 习题 2.3.4
> 设 $X, Y$ 是 Banach 空间，$D$ 是 $X$ 的线性子空间并且 $A: D \to Y$ 是线性映射。求证：
>
> (1) 如果 $A$ 连续且 $D$ 是闭的，则 $A$ 是闭算子；
>
> (2) 如果 $A$ 连续且是闭算子，那么 $D$ 闭的条件可以省略。

> [!exercise] 习题 2.3.5
> 用等价范数定理证明：$(C[0,1], \|\cdot\|_1)$ 不是 Banach 空间，其中
> $$
> \|f\|_1 = \int_0^1 |f(t)|\,dt \quad (\forall f \in C[0,1]).
> $$

> [!exercise] 习题 2.3.6（Gelfand 引理）
> 设 $X$ 是 Banach 空间，$p: X \to \mathbb{R}$ 满足
>
> (1) $p(x) \ge 0$（$\forall x \in X$）；
>
> (2) $p(\lambda x) = \lambda p(x)$（$\forall \lambda > 0$，$\forall x \in X$）；
>
> (3) $p(x_1 + x_2) \le p(x_1) + p(x_2)$（$\forall x_1, x_2 \in X$）；
>
> (4) 当 $x_n \to x$ 时，$\displaystyle\liminf p(x_n) \ge p(x)$。
>
> 求证：$\exists M > 0$，使得 $p(x) \le M\|x\|$（$\forall x \in X$）。

> [!exercise] 习题 2.3.7
> 设 $X$ 和 $Y$ 是 Banach 空间，$A_n \in \mathcal{L}(X, Y)$（$n = 1,2,\dots$）。又对 $\forall x \in X$，$\{A_n x\}$ 在 $Y$ 中收敛。求证：$\exists A \in \mathcal{L}(X, Y)$，使得 $A_n$ 强收敛到 $A$，且 $\displaystyle\|A\| \le \lim \|A_n\|$。

> [!exercise] 习题 2.3.8
> 设 $1 < p < \infty$，并且 $1/p + 1/q = 1$。如果序列 $\{a_k\}$ 使得对 $\forall x = \{\xi_k\} \in l^p$ 保证 $\sum a_k \xi_k$ 收敛，求证 $\{a_k\} \in l^q$。又若 $f: x \mapsto \sum a_k \xi_k$，求证：$f$ 作为 $l^p$ 上的线性泛函，有
> $$
> \|f\| = \bigl(\sum |a_k|^q\bigr)^{1/q}.
> $$

> [!exercise] 习题 2.3.9
> 如果序列 $\{a_k\}$ 使得对 $\forall x = \{\xi_k\} \in l^1$，保证 $\sum a_k \xi_k$ 收敛，求证 $\{a_k\} \in l^\infty$。又若 $f: x \mapsto \sum a_k \xi_k$，求证：$f$ 作为 $l^1$ 上的线性泛函，有 $\displaystyle\|f\| = \sup |a_k|$。

> [!exercise] 习题 2.3.10
> 用 Gelfand 引理证明共鸣定理。

> [!exercise] 习题 2.3.11
> 设 $X, Y$ 是 Banach 空间，$A \in \mathcal{L}(X, Y)$ 是满射的。求证：如果在 $Y$ 中 $y_n \to y_0$，则 $\exists C > 0$ 与 $x_n \to x_0$，使得 $Ax_n = y_n$，且 $\|x_n\| \le C\|y_n\|$。

> [!exercise] 习题 2.3.12
> 设 $X, Y$ 是 Banach 空间，$T$ 是闭线性算子，$\mathcal{D}(T) \subset X$，$\mathcal{R}(T) \subset Y$，$\mathcal{N}(T) \triangleq \{x \in X \mid Tx = \theta\}$。
>
> (1) 求证：$\mathcal{N}(T)$ 是 $X$ 的闭线性子空间；
>
> (2) 如果 $\mathcal{N}(T) = \{\theta\}$，求证：$\mathcal{R}(T)$ 在 $Y$ 中闭的充分且必要条件是 $\exists m > 0$，使得
> $$
> \|x\| \le m\|Tx\| \quad (\forall x \in \mathcal{D}(T));
> $$
>
> (3) 如果用 $d(x, \mathcal{N}(T))$ 表示点 $x \in X$ 到集合 $\mathcal{N}(T)$ 的距离（见第一章 §4 习题 2.4.20）。已知 $\mathcal{R}(T)$ 在 $Y$ 中闭，求证：$\mathcal{R}(T) \to X/\mathcal{N}(T)$ 是连续线性算子，并且满足 $\|[x]\|_0 \le m\|Tx\|$。

> [!exercise] 习题 2.3.13
> 设 $a(x, y)$ 是 Hilbert 空间 $H$ 上的一个共轭双线性泛函，又设
>
> (1) $\exists M > 0$，使得 $|a(x, y)| \le M\|x\|\|y\|$（$\forall x, y \in H$）；
>
> (2) $\exists \delta > 0$，使得 $|a(x, x)| \ge \delta\|x\|^2$（$\forall x \in H$）。
>
> 求证：$\forall f \in H^*$，$\exists y_f \in H$，使得
> $$
> a(x, y_f) = f(x) \quad (\forall x \in H),
> $$
> 而且 $y_f$ 连续地依赖于 $f$。

> [!exercise] 习题 2.3.14
> 设 $\{e_1, e_2, e_3, \dots\}$ 是 Hilbert 空间 $H$ 中的正交规范集。如果数列 $\{a_n\}$ 满足 $\sum |a_n|^2 < \infty$，那么有 $y = \sum a_n e_n \in H$，使得 $a_n = (y, e_n)$（$n = 1,2,3,\dots$）。又设 $x \in H$，并设 $\varphi_x(t) = \|x - ty\|^2$（$t \in \mathbb{K}$）。求证：$\varphi_x$ 是 $t$ 的多项式，而且这个多项式的最高次数不超过 $2$。利用 $\varphi_x(t)$ 在 $t = 0$ 处达到极小值的条件证明不等式
> $$
> |(x, y)|^2 \le \sum |a_n|^2 \|x\|^2.
> $$

## §4 Hahn-Banach 定理

前面我们已经讲过，无穷维赋范线性空间 $X$ 上有"足够多"的非零连续线性泛函（推论 2.1.6）。所谓"足够多"的含义是什么？本节的定理 2.4.1 回答了这个问题。更确切地说，在一个向量空间上，如果有一个"次线性泛函"控制了一个线性泛函，那么这一线性泛函就可以延拓到全空间，并且在延拓的过程中，始终受这个次线性泛函的控制。因为这个定理来源于 Hahn (1927) 和 Banach (1929) 的工作，所以有时为了纪念这两位数学家，人们把它叫作 Hahn-Banach 定理。

### 4.1 线性泛函的延拓定理

和上面的问题密切相关的是下述问题：给定赋范线性空间 $\mathscr{X}$ 的一个真子空间 $\mathscr{X}_0$ 及其上的一个线性泛函 $f_0$，问在 $\mathscr{X}$ 上能否造出一个非平凡的连续线性泛函 $f$，使得
(1) $f(x) = f_0(x) \; (\forall x \in \mathscr{X}_0)$（延拓条件）；
(2) $\|f\| = \|f_0\|_0$（保范条件），
其中 $\|\cdot\|_0$ 表示 $\mathscr{X}_0$ 上的范数。

> [!theorem] 定理 2.4.1（实 Hahn-Banach 定理）
> 设 $\mathscr{X}$ 是实线性空间，$p$ 是定义在 $\mathscr{X}$ 上的次线性泛函，$\mathscr{X}_0$ 是 $\mathscr{X}$ 的实线性子空间，$f_0$ 是 $\mathscr{X}_0$ 上的实线性泛函并满足 $f_0(x) \leqslant p(x) \; (\forall x \in \mathscr{X}_0)$。那么 $\mathscr{X}$ 上必有一个实线性泛函 $f$，满足：
> (1) $f(x) \leqslant p(x) \; (\forall x \in \mathscr{X})$（受 $p$ 控制条件）；
> (2) $f(x) = f_0(x) \; (\forall x \in \mathscr{X}_0)$（延拓条件）。

> [!proof]- 证
> $\forall y_0 \in \mathscr{X} \setminus \mathscr{X}_0$，记 $\mathscr{X}_1 \triangleq \{x + \alpha y_0 \mid x \in \mathscr{X}_0, \alpha \in \mathbb{R}\}$。
> 首先，在 $\mathscr{X}_1$ 上延拓 $f_0$。由于 $f$ 是线性的，所以
> $$f_1(y) = f_0(x) + \alpha f_1(y_0) \quad (\forall y = x + \alpha y_0 \in \mathscr{X}_1).$$
> 可见，要确定 $f_1(y)$ 只要确定 $f_1(y_0)$ 的值就够了，而 $f_1(y_0)$ 应满足
> $$f_1(y) \leqslant p(y) \quad (\forall y \in \mathscr{X}_1),$$
> 即 $f_0(x) + \alpha f_1(y_0) \leqslant p(x + \alpha y_0) \; (\forall x \in \mathscr{X}_0, \forall \alpha \in \mathbb{R})$。
> 然而 (2.4.3) 式是可以保证成立的. 这是因为, 对 $\forall y,z \in \mathscr{X}_0$,
> 
> $$\begin{aligned} f_0(y) - f_0(z) &= f_0(y - z) \\ &\leqslant p(y - z) \\ &\leqslant p(y - y_0) + p(y_0 - z). \end{aligned}$$
> 
> 所以
> 
> $$f_0(y) - p(-y_0 + y) \leqslant f_0(z) + p(y_0 - z) \quad (\forall y,z \in \mathscr{X}_0). \tag{2.4.4}$$
> 
> 显然 (2.4.4) 式蕴含 (2.4.3) 式, 今任意取定 $f_1(y_0)$ 为 (2.4.3) 式两端的中间值, 就能根据 (2.4.1) 式得出 $f_0$ 在 $\mathscr{X}_1$ 上的延拓 $f_1$. 由于 (2.4.3) 式两端未必相等, 其中间值 $f_1(y_0)$ 的取法一般不唯一, 因此这种延拓也不一定唯一.
> 
> 剩下的问题是怎样把 $f_0$ 逐步延拓到整个 $\mathscr{X}$ 上去, 这需要用 Zorn 引理 (引理 1.6.20). 令
> 
> $$\begin{aligned} \mathscr{F} \triangleq \{ (\mathscr{X}_{\Delta}, f_{\Delta}) \mid &\mathscr{X}_0 \subset \mathscr{X}_{\Delta} \subset \mathscr{X}; \\ &\forall x \in \mathscr{X}_0 \Rightarrow f_{\Delta}(x) = f_0(x); \\ &\forall x \in \mathscr{X}_{\Delta} \Rightarrow f_{\Delta}(x) \leqslant p(x) \}. \end{aligned}$$
> 
> 在 $\mathscr{F}$ 中引入序关系如下: $(\mathscr{X}_{\Delta_1}, f_{\Delta_1}) \prec (\mathscr{X}_{\Delta_2}, f_{\Delta_2})$ 是指
> 
> $$\mathscr{X}_{\Delta_1} \subset \mathscr{X}_{\Delta_2}, \quad \text{且} \quad f_{\Delta_1}(x) = f_{\Delta_2}(x) \quad (\forall x \in \mathscr{X}_{\Delta_1}).$$
> 
> 于是 $\mathscr{F}$ 成为半序集, 又设 $M$ 是 $\mathscr{F}$ 中的任一个全序子集, 令
> 
> $$\mathscr{X}_M \triangleq \bigcup_{(\mathscr{X}_{\Delta}, f_{\Delta}) \in M} \{\mathscr{X}_{\Delta}\},$$
> 
> 及
> 
> $$f_M(x) = f_{\Delta}(x) \quad (\forall x \in \mathscr{X}_{\Delta}, (\mathscr{X}_{\Delta}, f_{\Delta}) \in M).$$
> 
> 由于 $M$ 是全序子集, 容易验证 $\mathscr{X}_M$ 是 $\mathscr{X}$ 的包含 $\mathscr{X}_0$ 的子空间, 且 $f_M$ 在 $\mathscr{X}_M$ 上是唯一确定的, 满足 $f_M(x) \leqslant p(x)$. 于是 $(\mathscr{X}_M, f_M) \in \mathscr{F}$ 并且是 $M$ 的一个上界. 依 Zorn 引理 (引理 1.6.20), $\mathscr{F}$ 本身存在极大元, 不妨记之为 $(\mathscr{X}_{\Lambda}, f_{\Lambda})$.
> 
> 最后, 我们来证明 $\mathscr{X}_{\Lambda} = \mathscr{X}$. 用反证法, 倘若不然, 那么根据第一段的证明, 可以构造出
> 
> $$(\widetilde{\mathscr{X}}_{\Lambda}, \widetilde{f}_{\Lambda}) \in \mathscr{F}, \quad \text{使得} \quad \mathscr{X}_{\Lambda} \subset \widetilde{\mathscr{X}}_{\Lambda}, \text{但是} \mathscr{X}_{\Lambda} \neq \widetilde{\mathscr{X}}_{\Lambda}.$$
> 
> 从而 $(\widetilde{\mathscr{X}}_{\Lambda}, \widetilde{f}_{\Lambda}) \succ (\mathscr{X}_{\Lambda}, f_{\Lambda})$, 但是 $(\widetilde{\mathscr{X}}_{\Lambda}, \widetilde{f}_{\Lambda}) \neq (\mathscr{X}_{\Lambda}, f_{\Lambda})$. 这与 $(\mathscr{X}_{\Lambda}, f_{\Lambda})$ 的极大性矛盾. 因此, $\mathscr{X}_{\Lambda} = \mathscr{X}$. 于是所求的 $f$ 取为 $f_{\Lambda}$ 即可. $\blacksquare$

对于复的线性空间, 由于复数不能比较大小, 相应的延拓定理必须做某些修改.

> [!theorem] 定理 2.4.2（复 Hahn-Banach 定理）
> 设 $\mathscr{X}$ 是复线性空间, $p$ 是 $\mathscr{X}$ 上的半范数. $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间, $f_0$ 是 $\mathscr{X}_0$ 上的线性泛函, 并满足 $|f_0(x)| \leqslant p(x), \forall x \in \mathscr{X}_0$, 那么 $\mathscr{X}$ 上必有一个线性泛函 $f$ 满足:
> (1) $|f(x)| \leqslant p(x) \; (\forall x \in \mathscr{X})$;
> (2) $f(x) = f_0(x) \; (\forall x \in \mathscr{X}_0)$.

> [!proof]- 证
> 把 $\mathscr{X}$ 看成实线性空间, 相应把 $\mathscr{X}_0$ 也看成是实线性子空间, 令
> 
> $$g_0(x) \triangleq \operatorname{Re} f_0(x) \quad (\forall x \in \mathscr{X}_0),$$
> 
> 便有 $g_0(x) \leqslant p(x) \; (\forall x \in \mathscr{X}_0)$. 从而根据定理 2.4.1, 必有 $\mathscr{X}$ 上的实线性泛函 $g$, 使得
> 
> $$g(x) = g_0(x) \quad (\forall x \in \mathscr{X}_0), \tag{2.4.5}$$
> 
> 且
> 
> $$g(x) \leqslant p(x) \quad (\forall x \in \mathscr{X}). \tag{2.4.6}$$
> 
> 现在, 令
> 
> $$f(x) \triangleq g(x) - ig(ix) \quad (\forall x \in \mathscr{X}). \tag{2.4.7}$$
> 
> 那么依 (2.4.5) 式, 我们有
> 
> $$\begin{aligned} f(x) &= g_0(x) - ig_0(ix) \\ &= \operatorname{Re} f_0(x) + i \operatorname{Im} f_0(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0), \end{aligned}$$
> 
> 又
> 
> $$\begin{aligned} f(ix) &= g(ix) - ig(-x) \\ &= i[g(x) - ig(ix)] = if(x) \quad (\forall x \in \mathscr{X}). \end{aligned}$$
> 
> 从而 $f$ 也是复齐性的. 剩下还要说明在 $\mathscr{X}$ 上, $|f(x)|$ 受 $p(x)$ 控制. 若 $f(x) = 0$, 这是显然的. 若 $f(x) \neq 0$, 令
> 
> $$\theta \triangleq \arg f(x),$$
> 
> 那么依 (2.4.6) 式, 有
> 
> $$\begin{aligned} |f(x)| &= e^{-i\theta}f(x) = f(e^{-i\theta}x) \\ &= g(e^{-i\theta}x) \leqslant p(e^{-i\theta}x) = p(x) \quad (\forall x \in \mathscr{X}), \end{aligned}$$
> 
> 其中第三个等号是因为正数 $f(e^{-i\theta}x) = |f(x)|$ 的虚部为 $0$. $\blacksquare$

综上所得, 结合命题 1.5.10 便可推出下面的定理.

> [!theorem] 定理 2.4.3
> 为了复线性空间 $\mathscr{X}$ 上至少有一个非零线性泛函, 只要 $\mathscr{X}$ 中含有某一个均衡吸收真凸子集.

在 $B^*$ 空间上, Hahn-Banach 延拓定理具有下列更特殊的形式和应用.

> [!theorem] 定理 2.4.4（Hahn-Banach）
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间, $f_0$ 是定义在 $\mathscr{X}_0$ 上的有界线性泛函, 则在 $\mathscr{X}$ 上必有有界线性泛函 $f$ 满足:
> (1) $f(x) = f_0(x) \; (\forall x \in \mathscr{X}_0)$（延拓条件）,
> (2) $\|f\| = \|f_0\|_0$（保范条件）,
> 其中 $\|f_0\|_0$ 表示 $f_0$ 在 $\mathscr{X}_0$ 上的范数.

> [!remark] 注
> 由于 $f$ 满足 (1), (2) 两个条件, 通常称 $f$ 为 $f_0$ 的保范延拓.

> [!proof]- 证
> 在 $\mathscr{X}$ 上定义 $p(x) \triangleq \|f_0\|_0 \cdot \|x\|$, 那么 $p(x)$ 是 $\mathscr{X}$ 上的半范数, 从而根据定理 2.4.3, 必存在 $\mathscr{X}$ 上的线性泛函 $f(x)$, 满足
> 
> $$f(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0), \tag{2.4.8}$$
> 
> 及
> 
> $$|f(x)| \leqslant p(x) = \|f_0\|_0 \cdot \|x\| \quad (\forall x \in \mathscr{X}). \tag{2.4.9}$$
> 
> 按泛函范数的定义, (2.4.9) 式蕴含 $\|f\| \leqslant \|f_0\|_0$, 又由 (2.4.8) 式, 显然有 $\|f_0\|_0 \leqslant \|f\|$. 因此 $\|f\| = \|f_0\|_0$. $\blacksquare$

> [!corollary] 推论 2.4.5
> 每个 $B^*$ 空间必有足够多的连续线性泛函.

> [!proof]- 证
> 任给 $x_1, x_2 \in \mathscr{X}$, 若 $x_1 \neq x_2$, 则 $x_0 \triangleq x_1 - x_2 \neq \theta$. 令 $\mathscr{X}_0 \triangleq \{\lambda x_0 \mid \lambda \in \mathbb{C}\}$, 并在 $\mathscr{X}_0$ 上定义
> 
> $$f_0(\lambda x_0) = \lambda\|x_0\| \quad (\forall \lambda \in \mathbb{C}).$$
> 
> 那么 $f_0(x_0) = \|x_0\|$ 且 $\|f_0\|_0 = 1$. 依定理 2.4.4, 存在 $\mathscr{X}$ 上的连续线性泛函 $f$, 使得
> 
> $$f(x_0) = f_0(x_0) = \|x_0\|, \quad \|f\| = \|f_0\|_0 = 1.$$
> 
> $\mathscr{X}$ 上的这个非零连续线性泛函 $f$, 可以分辨 $x_1, x_2$. 事实上,
> 
> $$f(x_1) - f(x_2) = f(x_1 - x_2) = f(x_0) \neq 0. \quad \blacksquare$$

这里我们实际上证明了如下推论.

> [!corollary] 推论 2.4.6
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\forall x_0 \in \mathscr{X} \setminus \{\theta\}$, 必 $\exists f \in \mathscr{X}^*$, 使得
> 
> $$f(x_0) = \|x_0\|, \quad \text{且} \quad \|f\| = 1.$$

> [!remark] 注
> 本推论给出判别 $B^*$ 空间零元的一种方法: 为了 $x_0 = \theta$, 必须且仅须 $\forall f \in \mathscr{X}^*$ 蕴含 $f(x_0) = 0$.

回顾在 Hilbert 空间 $H$ 中, 对任意的连续线性泛函 $f, \exists y \in H$, 使得

$$f(x) = (x, y) \quad (\forall x \in H).$$

若记 $M \triangleq \{x \mid f(x) = 0\}$, 那么对 $\forall x_0 \in H$, 有

$$f(x_0) = (x_0, y) = (x_0 - P_M x_0, y),$$

其中 $P_M x_0$ 表示 $x_0$ 在 $M$ 上的投影, 从而

$$|f(x_0)| \leqslant \|x_0 - P_M x_0\| \cdot \|y\| = \|f\|\,\rho(x_0, M). \tag{2.4.10}$$

在一般的 $B^*$ 空间 $\mathscr{X}$ 中, $\rho(x_0, M) \triangleq \inf_{y \in M} \|x_0 - y\|$, (2.4.10) 式仍然成立. 事实上, $\forall n \in \mathbb{N}$ 及 $\forall x_0 \in \mathscr{X}$, 按下确界定义, $\exists x_n \in M$, 使得

$$\rho(x_0, M) \leqslant \rho(x_0, x_n) < \rho(x_0, M) + 1/n.$$

因此

$$\begin{aligned} |f(x_0)| &= |f(x_n - x_0)| \leqslant \|f\| \cdot \|x_n - x_0\| \\ &\leqslant \|f\|(\rho(x_0, M) + 1/n), \end{aligned}$$

上式令 $n \to \infty$, 即得 (2.4.10) 式.

现在提一个问题: 在 $B^*$ 空间 $\mathscr{X}$ 上, 给定子空间 $M$ 及 $x_0 \in \mathscr{X} \setminus M$, 是否 $\exists f \in \mathscr{X}^*$, 使得 $f$ 在 $M$ 上为 $0$, 并使 (2.4.10) 式中的等号成立? 这导致如下定理.

> [!theorem] 定理 2.4.7
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $M$ 是 $\mathscr{X}$ 的线性子空间. 若 $x_0 \in \mathscr{X}$, 且
> 
> $$d \triangleq \rho(x_0, M) > 0,$$
> 
> 则必 $\exists f \in \mathscr{X}^*$ 适合条件:
> (1) $f(x) = 0 \; (\forall x \in M)$;
> (2) $f(x_0) = d$;
> (3) $\|f\| = 1$.

> [!proof]- 证
> 考虑 $\mathscr{X}_0 \triangleq \{x = x' + \alpha x_0 \mid x' \in M, \alpha \in \mathbb{K}\}, \forall x \in \mathscr{X}_0$, 定义
> $$f_0(x) = \alpha d.$$
> 显然, $f_0$ 适合条件 (1), (2). 又若 $x = x' + \alpha x_0 \,(x' \in M, \alpha \neq 0)$, 则
> $$\begin{aligned} |f_0(x)| &= |\alpha|d = |\alpha|\rho(x_0, M) \\ &\leqslant |\alpha| \left\| \frac{x'}{\alpha} + x_0 \right\| \\ &= \|x' + \alpha x_0\| = \|x\|. \end{aligned}$$
> 因此 $\|f_0\| \leqslant 1$. 依 Hahn-Banach 定理 (定理 2.4.4), 将 $f_0$ 保范延拓为 $f \in \mathscr{X}^*$, 便有 $f$ 满足条件 (1), (2) 及 $\|f\| \leqslant 1$. 又因为 $f \in \mathscr{X}^*$, 并满足条件 (2), 所以由 (2.4.10) 式便得 $\|f\| \geqslant 1$, 于是 (3) 成立. $\blacksquare$

> [!corollary] 推论 2.4.8
> 设 $M$ 是 $B^*$ 空间 $\mathscr{X}$ 的一个子集, 又设 $x_0$ 是 $\mathscr{X}$ 中的任一个非零元素. 那么
> $$x_0 \in \overline{\operatorname{span} M},$$
> 其充要条件是: 对 $\forall f \in \mathscr{X}^*$,
> $$f(x) = 0 \quad (\forall x \in M) \Longrightarrow f(x_0) = 0.$$

> [!proof]- 证
> 必要性是显然的, 下面我们用反证法证明充分性. 倘若 $x_0 \notin \overline{\operatorname{span} M}$, 那么
> $$d \triangleq \rho(x_0, \overline{\operatorname{span} M}) > 0.$$
> 因此, 依定理 2.4.7, $\exists f \in \mathscr{X}^*$, 使得 $f(x) = 0 \,(\forall x \in M)$, 并且 $f(x_0) = d > 0$. 但按充分性假定, 对此 $f$ 应有 $f(x_0) = 0$, 便引出矛盾. $\blacksquare$

> [!example] 特例 2.4.9
> 若 $M = \{x_1, x_2, \cdots, x_n, \cdots\}$, 是否能用形如 $\displaystyle\sum_{i=1}^{n} c_i x_i$ 的线性组合的序列极限去逼近给定的元素 $x_0$? 本推论给出了这种逼近存在的一个充要条件: 对所有的在 $x_1, x_2, \cdots, x_n, \cdots$ 上为 $0$ 的连续线性泛函 $f$ 都有 $f(x_0) = 0$.

### 4.2 几何形式 —— 凸集分离定理

平面上两个互不相交的凸集 $A$ 与 $B, A \cap B = \varnothing$, 有一条重要的几何性质: 存在一条直线 $l$ 分离 $A$ 与 $B$, 即存在直线 $l$ 使 $A$ 与 $B$ 各在 $l$ 的一侧 (请参看图 2.4.1).

图 2.4.1

在一般的线性空间 $\mathscr{X}$ 中, 这条几何性质有没有相应的推广呢? 下面就来讨论这个问题, 为简单起见, 今后我们总假定 $\mathscr{X}$ 是实的, $\mathscr{X}$ 上的线性泛函也取实值.

在 $\mathscr{X}$ 上相应于平面上过原点的直线的概念是极大线性子空间的概念.

> [!definition] 定义 2.4.10
> 在线性空间 $\mathscr{X}$ 中, $\mathscr{X}$ 的线性子空间 $M$ 称为是极大的, 如果对于任何一个以 $M$ 为真子集的线性子空间 $M_1$ 必有 $M_1 = \mathscr{X}$.

> [!proposition] 命题 2.4.11
> $M$ 是极大线性子空间的充要条件是, $M$ 是线性真子空间, 并且 $\forall x_0 \in \mathscr{X} \setminus M$ 有
> $$\mathscr{X} = \{\lambda x_0 \mid \lambda \in \mathbb{R}\} \oplus M.$$

> [!proof]- 证
> 必要性是显然的. 为了证充分性, 设 $M_1$ 是以 $M$ 为真子集的线性子空间, 那么 $\exists x_0 \in M_1 \setminus M$. 于是有 $\lambda x_0 \in M_1 \,(\forall \lambda \in \mathbb{R})$ 及 $M \subset M_1$, 从而
> $$\mathscr{X} = \{\lambda x_0 \mid \lambda \in \mathbb{R}\} \oplus M \subset M_1,$$
> 即得 $\mathscr{X} = M_1$. 于是 $M$ 是极大线性子空间. $\blacksquare$

> [!definition] 定义 2.4.12
> $\mathscr{X}$ 的极大线性子空间 $M$ 对向量 $x_0 \in \mathscr{X}$ 的平移
> $$L \triangleq x_0 + M$$
> 称为极大线性流形, 或简称超平面.

> [!remark] 注
> 超平面是平面上一般直线概念的推广. 平面上的直线 $l$ 可以通过线性函数表示:
> $$l = \{x = (\xi, \eta) \mid a\xi + b\eta = c\}.$$

超平面 $L$ 也可以通过线性泛函来刻画. 事实上, 如果 $f$ 是线性 $(B^*)$ 空间 $\mathscr{X}$ 上的非零 (连续) 线性泛函, 那么集合

$$H_f^r \triangleq \{x \in \mathscr{X} \mid f(x) = r\} \quad (r \in \mathbb{R})$$

必是一个 (闭) 超平面, 这是因为 $H_f^0$ 显然是线性子空间, 又 $\forall x_1 \in \mathscr{X} \setminus H_f^0, \forall x \in \mathscr{X}$ 有

$$x = \frac{f(x)}{f(x_1)} x_1 + H_f^0.$$

从而 $H_f^0$ 还是极大的. 由于 $f$ 是非 $0$ 的, $\exists x_0 \in \mathscr{X}$, 使 $f(x_0) \neq 0$. 由 $f$ 的线性, 不妨设 $f(x_0) = r$, 今对任意 $x \in H_f^r$, 因为

$$f(x - x_0) = f(x) - f(x_0) = 0,$$

所以 $x - x_0 \in H_f^0$, 这证明了 $H_f^r = x_0 + H_f^0$ 是一个超平面. 又若 $f$ 是连续的, 则 $H_f^r$ 显然是闭的.

反过来, 若 $L$ 是 (闭) 超平面, 可设 $L = x_0 + M$, 其中 $M$ 是 (闭) 极大线性子空间, $x_0 \in \mathscr{X} \setminus M$. 这时 $\forall x \in \mathscr{X}$ 可表示成

$$x = \lambda x_0 + y \quad (\lambda \in \mathbb{R}, y \in M)$$

的形式. 再定义线性泛函 $f: \mathscr{X} \to \mathbb{R}$,

$$f(x) = f(\lambda x_0 + y) = \lambda \quad (\lambda \in \mathbb{R}, y \in M).$$

显然 $f$ 为 $\mathscr{X}$ 上的线性泛函, 满足 $M = H_f^0$ 以及 $f(x_0) = 1$. 因此 $L = H_f^1$. 若 $L$ 是闭的, 从而 $H_f^0$ 是闭的, 那么 $f$ 还是连续的 (见习题 2.1.7(3)).

总结起来有下面的定理.

> [!theorem] 定理 2.4.13
> 为了 $L$ 是线性 $(B^*)$ 空间 $\mathscr{X}$ 上的一个 (闭) 超平面, 必须且仅须存在非零 (连续) 线性泛函 $f$ 及 $r \in \mathbb{R}$, 使得 $L = H_f^r$.

所谓超平面 $L = H_f^r$ 使一个集合 $E$ 在它的一侧, 用线性泛函来描写就是

$$\forall x \in E \Longrightarrow f(x) \leqslant r \; (\text{或} \geqslant r).$$

> [!definition] 定义 2.4.14
> 所谓超平面 $L = H_f^r$ 分离集合 $E$ 与 $F$, 是指:
> $$\forall x \in E \Longrightarrow f(x) \leqslant r \; (\text{或} \geqslant r),$$
> $$\forall x \in F \Longrightarrow f(x) \geqslant r \; (\text{或} \leqslant r).$$
> 如果在上面两个式子中, 用 "$<$" 与 "$>$" 分别代替 "$\leqslant$" 与 "$\geqslant$", 那么就说 $H_f^r$ 严格分离 $E$ 与 $F$.

现在来讨论如何用超平面分离两个互不相交的凸集, 以此作为 Hahn-Banach 定理 (定理 2.4.4) 的应用. 设 $\mathscr{X}$ 是 $B^*$ 空间, 依命题 1.5.11, 如果 $E$ 是 $\mathscr{X}$ 的以 $\theta$ 为内点的真凸子集, 那么它的 Minkowski 泛函 $p(x)$ 便是一个非零的连续次线性泛函, 满足

$$\forall x \in E \Longrightarrow p(x) \leqslant 1. \tag{2.4.11}$$

如果还存在一点 $x_0 \in \mathscr{X} \setminus E$, 则由 $p(x)$ 的定义和 $E$ 是以 $\theta$ 为内点的凸集可以推出 $p(x_0) \geqslant 1$. 下面我们证明存在超平面 $H_f^r$ 分离 $E$ 与 $x_0$. 为此寻求线性泛函 $f$. 先在一维线性空间

$$\mathscr{X}_0 \triangleq \{\lambda x_0 \mid \lambda \in \mathbb{R}\}$$

上定义

$$f_0(\lambda x_0) \triangleq \lambda p(x_0) \quad (\forall \lambda \in \mathbb{R}).$$

显然 $f_0$ 是 $\mathscr{X}_0$ 上的线性泛函, 满足

$$\begin{aligned} f_0(x) &= f_0(\lambda x_0) = \lambda p(x_0) \\ &\leqslant p(\lambda x_0) = p(x) \quad (\forall x \in \mathscr{X}_0). \end{aligned}$$

根据实形式 Hahn-Banach 定理 (定理 2.4.1), 必存在 $\mathscr{X}$ 上的线性泛函 $f(x)$, 满足

$$f(x_0) = f_0(x_0) = p(x_0) \geqslant 1, \tag{2.4.12}$$
$$f(x) \leqslant p(x) \quad (\forall x \in \mathscr{X}). \tag{2.4.13}$$

联合 (2.4.11) 式与 (2.4.13) 式得到 $f(x) \leqslant 1 \,(\forall x \in E)$. 于是 $H_f^1$ 便是分离 $E$ 与 $x_0$ 的超平面. 这样我们就得到如下定理.

> [!theorem] 定理 2.4.15（Hahn-Banach 定理的几何形式）
> 设 $E$ 是实 $B^*$ 空间 $\mathscr{X}$ 上以 $\theta$ 为内点的真凸子集, 又设 $x_0 \notin E$, 则必存在一个超平面 $H_f^r$ 分离 $x_0$ 与 $E$.

> [!remark] 注 1
> 因为只要通过适当平移, 总可以把任一点变为 $\theta$ 点, 所以本定理对含有任意内点的真凸子集仍成立, 但对于无穷维空间 $\mathscr{X}$, $E$ 有内点这一条是不能省略的.

> [!remark] 注 2
> 可以证明定理中存在的超平面 $L \triangleq H_f^r$ 还是闭的. 这只要证明相应的 $f$ 还是连续的. 事实上, 由 (2.4.13) 式推出
> $$|f(x)| \leqslant \max(p(x), p(-x)) \quad (\forall x \in \mathscr{X}).$$
> 因此, $p(x)$ 的连续性蕴含 $f$ 在 $\theta$ 点连续. 又因为 $f$ 是线性的, 所以 $f$ 在整个 $\mathscr{X}$ 上连续.

下面我们转向考虑两个凸集的分离问题. 为此, 想办法把它转化为一个凸集与其外一点的分离问题. 在 $B^*$ 空间 $\mathscr{X}$ 中, 若 $E_1, E_2$ 是两个互不相交的凸集, $E_1$ 是有内点的, 那么容易推知集合

$$E \triangleq E_1 + (-1)E_2$$

是一个非空凸集, 并且是有内点的. 此外, $\theta \notin E$. 事实上, 倘若不然, 则 $\exists x_1 \in E_1, x_2 \in E_2$, 使得 $x_1 - x_2 = \theta$. 从而

$$x_1 = x_2 \in E_1 \cap E_2.$$

这与 $E_1 \cap E_2 = \varnothing$ 矛盾.

根据几何形式的 Hahn-Banach 定理 (定理 2.4.15), 存在闭超平面 $H_f^r$ 分离 $E$ 和 $\theta$. 不妨假定

$$f(x) \leqslant r \quad (\forall x \in E), \quad f(\theta) \geqslant r.$$

从而 $f(x) \leqslant 0 \; (\forall x \in E)$, 即有 $f(y - z) \leqslant 0 \; (\forall y \in E_1, \forall z \in E_2)$. 再由 $f$ 的线性便得

$$f(y) \leqslant f(z) \quad (\forall y \in E_1, \forall z \in E_2).$$

因此, $\exists s \in \mathbb{R}$, 使得

$$\sup_{y \in E_1} f(y) \leqslant s \leqslant \inf_{z \in E_2} f(z).$$

于是 $H_f^s$ 分离 $E_1$ 和 $E_2$, 并由 $H_f^r$ 闭可知 $H_f^s$ 也是闭的. 总结起来有下面的定理.

> [!theorem] 定理 2.4.16（凸集分离定理）
> 设 $E_1$ 和 $E_2$ 是 $B^*$ 空间中两个互不相交的非空凸集, $E_1$ 有内点, 那么 $\exists s \in \mathbb{R}$ 及非零连续线性泛函 $f$, 使得超平面 $H_f^s$ 分离 $E_1$ 和 $E_2$. 换句话说, 存在一个非零连续线性泛函 $f$, 使得
> 
> $$
> f(x) \leqslant s \quad (\forall x \in E_1), \quad f(x) \geqslant s \quad (\forall x \in E_2).
> $$

> [!remark] 注
> 条件 $E_1 \cap E_2 = \varnothing$ 可以减弱到 $\mathring{E}_1 \cap E_2 = \varnothing$. 这是因为 $E_1$ 有内点, 所以 $\mathring{E}_1$ 有内点, 从而 $\mathring{E}_1$ 是有内点的凸集. 对 $\mathring{E}_1$ 与 $E_2$ 应用本定理结论得到分离它们的闭超平面 $H_f^s$, 不妨设就是
> 
> $$
> f(x) \leqslant s \quad (\forall x \in \mathring{E}_1), \tag{2.4.14}
> $$
> $$
> f(x) \geqslant s \quad (\forall x \in E_2). \tag{2.4.15}
> $$
> 
> 由 $f$ 的连续性, (2.4.14) 式可以加强为
> 
> $$
> f(x) \leqslant s \quad (\forall x \in \overline{E}_1).
> $$
> 
> 又 $\overline{E}_1 = E_1$ (见习题 1.5.1(2)), 即得
> 
> $$
> f(x) \leqslant s \quad (\forall x \in E_1). \tag{2.4.16}
> $$
> 
> 联合 (2.4.15) 式与 (2.4.16) 式, 就是 $H_f^s$ 分离 $E_1$ 和 $E_2$.

> [!corollary] 推论 2.4.17（Ascoli 定理）
> 设 $E$ 是实 $B^*$ 空间 $\mathscr{X}$ 中的闭凸集, 则 $\forall x_0 \in \mathscr{X} \setminus E, \exists f \in \mathscr{X}^*$ 及 $\alpha \in \mathbb{R}$, 适合
> 
> $$
> f(x) < \alpha < f(x_0) \quad (\forall x \in E). \tag{2.4.17}
> $$

> [!proof]- 证
> 因为 $x_0 \in \mathscr{X} \setminus E$ 及 $E$ 是闭集, 所以 $\exists \delta > 0$, 使得
> 
> $$B(x_0, \delta) \subset \mathscr{X} \setminus E,$$
> 
> 而 $B(x_0, \delta)$ 是有内点的凸集. 对 $E$ 和 $B(x_0, \delta)$ 应用定理 2.4.16, 存在非零连续线性泛函 $f$, 适合
> 
> $$\sup_{x \in E} f(x) \leqslant \inf_{y \in B(x_0, \delta)} f(y). \tag{2.4.18}$$
> 
> 进一步可以证明
> 
> $$\inf_{y \in B(x_0, \delta)} f(y) < f(x_0). \tag{2.4.19}$$
> 
> 事实上, 倘若 (2.4.19) 式不成立, 那么
> 
> $$f(y) \geqslant f(x_0) \quad (\forall y \in B(x_0, \delta)). \tag{2.4.20}$$
> 
> 这表明 $f(x_0)$ 是 $f(y)$ 在 $B(x_0, \delta)$ 中的极小值, 这与 $f$ 的非零线性矛盾 (参看习题 2.1.9). 于是 (2.4.19) 式成立. 任取 (2.4.19) 式两端的中间值 $\alpha \in \mathbb{R}$, 并由 (2.4.18) 式即得 (2.4.17) 式. $\blacksquare$

> [!corollary] 推论 2.4.18（Mazur 定理）
> 设 $E$ 是 $B^*$ 空间 $\mathscr{X}$ 上的一个有内点的闭凸集, $F$ 是 $\mathscr{X}$ 上的一个线性流形, 又设 $\mathring{E} \cap F = \varnothing$, 那么存在一个包含 $F$ 的闭超平面 $L$, 使 $E$ 在 $L$ 的一侧.

> [!proof]- 证
> 设 $F = x_0 + \mathscr{X}_0$, 其中 $x_0 \in \mathscr{X}, \mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间. 由定理 2.4.16, 存在 $H_f^r$ 分离 $E$ 与 $F$, 即
> 
> $$f(E) \leqslant r, \quad f(x_0 + \mathscr{X}_0) \geqslant r. \tag{2.4.21}$$
> 
> 记 $r_0 \triangleq r - f(x_0)$, 便有 $f(x) \geqslant r_0 \; (\forall x \in \mathscr{X}_0)$. 又由 $f$ 是线性的, 及 $\mathscr{X}_0$ 是线性子空间, 容易推出
> 
> $$f(x) \equiv 0 \quad (\forall x \in \mathscr{X}_0),$$
> 
> 即有 $\mathscr{X}_0 \subset H_f^0$, 从而 $F \subset x_0 + H_f^0 = H_f^s$, 其中 $s \triangleq f(x_0)$. 再由 (2.4.21) 式推出 $f(E) \leqslant s$, 于是 $L \triangleq H_f^s$ 便为所求. $\blacksquare$

> [!remark] 注
> 上述结论换句话说就是: 存在 $\mathscr{X}$ 上的非零连续线性泛函 $f$ 及 $s \in \mathbb{R}$, 使得
> 
> $$f(x) \leqslant s \quad (\forall x \in E), \quad f(x) = s \quad (\forall x \in F).$$

下面我们来推广平面上直线和圆的相切概念.

> [!definition] 定义 2.4.19
> 超平面 $L = H_f^r$ 称为凸集 $E$ 在点 $x_0$ 的承托超平面, 是指 $E$ 在 $L$ 的一侧, 且 $\overline{E}$ 与 $L$ 有公共点 $x_0$. 换句话说,
> 
> $$f(x) \leqslant r = f(x_0) \quad (\forall x \in E),$$
> 
> 或
> 
> $$f(x) \geqslant r = f(x_0) \quad (\forall x \in E).$$

> [!example] 例 2.4.20
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E = \{x \in \mathscr{X} \mid \|x\| \leqslant r\}$, $\|x_0\| = r$, 那么 $E$ 在 $x_0$ 有一个承托超平面.
> 
> **证** 根据推论 2.4.6, $\exists f \in \mathscr{X}^*$, 使得 $f(x_0) = \|x_0\|, \|f\| = 1$. 于是 $H_f^r$ 便是 $E$ 在 $x_0$ 的承托超平面, 这是因为
> 
> $$f(x) \leqslant \|f\| \cdot \|x\| \leqslant r = f(x_0) \quad (\forall x \in E). \quad \blacksquare$$

更一般地, 有下面的定理.

> [!theorem] 定理 2.4.21
> 设 $E$ 是实 $B^*$ 空间中含有内点的闭凸集, 那么通过 $E$ 的每个边界点都可以作出 $E$ 的一个承托超平面.

> [!proof]- 证
> $\forall x_0 \in E \setminus \mathring{E}$, 令 $F \triangleq \{x_0\}$. 依推论 2.4.18 的注, $\exists f \in \mathscr{X}^* \setminus \{\theta\}$ 及 $s \in \mathbb{R}$, 使得
> 
> $$f(x) \leqslant s = f(x_0) \quad (\forall x \in E).$$
> 
> 于是 $H_f^s$ 便是 $E$ 在 $x_0$ 的承托超平面. $\blacksquare$

### 4.3 应用

**1. 抽象可微函数的中值定理**

设 $\mathscr{Y}$ 是 $B^*$ 空间, $f: (a, b) \to \mathscr{Y}$ 叫作数值变数 $t$ 的抽象函数. 如果 $t \in (a, b)$, 在 $\mathscr{Y}$ 中存在极限

$$\lim_{\Delta t \to 0} \frac{f(t + \Delta t) - f(t)}{\Delta t},$$

那么就定义此极限为 $f$ 在 $t$ 点的微商, 记为 $f'(t)$. 又若 $f$ 在 $(a, b)$ 内点点有微商, 便称 $f$ 在 $(a, b)$ 内可微. 如下中值定理是抽象可微函数的重要性质之一.

> [!theorem] 定理 2.4.22
> 设抽象函数 $f: (a, b) \to \mathscr{Y}$ 在 $(a, b)$ 内可微, 那么对 $\forall t_1, t_2 \in (a, b), \exists \theta \in (0, 1)$, 使得
> 
> $$\|f(t_2) - f(t_1)\| \leqslant \|f'(\theta t_2 + (1-\theta)t_1)\| \cdot |t_2 - t_1|. \tag{2.4.22}$$

> [!proof]- 证
> 由推论 2.4.6, $\exists y^* \in \mathscr{Y}^*$, 使得 $\|y^*\| = 1$, 且
> 
> $$\langle y^*, f(t_2) - f(t_1) \rangle = \|f(t_2) - f(t_1)\|. \tag{2.4.23}$$
> 
> 令 $\varphi(\eta) = \langle y^*, f(t_1 + \eta(t_2 - t_1)) \rangle$, 那么 $\varphi(\eta)$ 是在 $[0,1]$ 上连续, 在 $(0,1)$ 内可微的实函数, 且
> 
> $$\varphi'(\eta) = \langle y^*, f'(t_1 + \eta(t_2 - t_1))(t_2 - t_1) \rangle.$$
> 
> 对 $\varphi(\eta)$ 应用微分中值公式, 即得
> 
> $$\begin{aligned} \varphi(1) - \varphi(0) &= \varphi'(\theta) \\ &= \langle y^*, f'(t_1 + \theta(t_2 - t_1))(t_2 - t_1) \rangle, \end{aligned} \tag{2.4.24}$$
> 
> 其中 $0 < \theta < 1$. 联合 (2.4.23) 式与 (2.4.24) 式便得
> 
> $$\begin{aligned} \|f(t_2) - f(t_1)\| &= \varphi(1) - \varphi(0) \\ &\leqslant \|y^*\| \cdot \|f'(t_1 + \theta(t_2 - t_1))\| \cdot |t_2 - t_1|, \end{aligned}$$
> 
> 即得 (2.4.22) 式. $\blacksquare$

**2. 凸规划问题的 Lagrange 乘子**

数学规划的理论建立在凸集分离定理 (定理 2.4.16) 的基础之上. 现在我们通过下述 Kuhn-Tucker 定理, 介绍凸集分离定理是怎样使用的.

> [!definition] 定义 2.4.23
> 设 $\mathscr{X}$ 是一个线性空间, $C \subset \mathscr{X}$ 是一个凸集. 称 $f: C \to \mathbb{R}$ 是一个凸泛函, 是指 $f$ 满足
> 
> $$f(\lambda x + (1-\lambda)y) \leqslant \lambda f(x) + (1-\lambda)f(y) \quad (\forall x, y \in C, \forall \lambda \in (0,1)).$$

> [!remark] 注
> 这个定义可以等价地表达为: 上方图
> 
> $$\operatorname{epi}(f) \triangleq \{(x, t) \in C \times \mathbb{R} \mid f(x) \leqslant t\}$$
> 
> 是 $C \times \mathbb{R}$ 中的凸集.

凸规划问题 (P) 是指: 给定凸集 $C$ 上的凸函数 $f, g_1, g_2, \cdots, g_n$, 求 $x_0 \in C$, 满足

$$g_i(x_0) \leqslant 0 \quad (i = 1,2,\cdots,n),$$

且

$$f(x_0) = \min \{f(x) \mid x \in C, g_i(x) \leqslant 0 \;(i = 1,2,\cdots,n)\}, \tag{2.4.25}$$

其中条件 $g_i(x) \leqslant 0 \;(i = 1,2,\cdots,n)$ 称为约束.

在多元微分学中, 我们知道往往可以借助于 Lagrange 乘子法, 把带约束的极值问题化归为无约束的极值问题. 现在我们也希望这样做, 寻求条件来确定 $(\hat{\lambda}_1, \hat{\lambda}_2, \cdots, \hat{\lambda}_n) \in \mathbb{R}^n$, 使得: 若 $x_0$ 是问题 (P) 的解, 则

$$f(x_0) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0) = \min \left\{ f(x) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x) \; \Big| \; x \in C \right\}. \tag{2.4.26}$$

这就通过 Lagrange 乘子 $(\hat{\lambda}_1, \hat{\lambda}_2, \cdots, \hat{\lambda}_n)$ 把约束条件吸收到极值函数中去. 考察等式 (2.4.26), 它等价于不等式组

$$f(x_0) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0) \leqslant f(x) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x) \quad (\forall x \in C). \tag{2.4.27}$$

为了寻求 $(\hat{\lambda}_1, \hat{\lambda}_2, \cdots, \hat{\lambda}_n)$, 我们宁可多引进一个参数 $\hat{\lambda}_0$, 而考察较弱的一组不等式:

$$\hat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0) \leqslant \hat{\lambda}_0 f(x) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x) \quad (\forall x \in C). \tag{2.4.28}$$

如果能证明 $\hat{\lambda}_0 > 0$, (2.4.28) 式就等价于 (2.4.27) 式.

寻求非零的 $(\hat{\lambda}_0, \hat{\lambda}_1, \cdots, \hat{\lambda}_n) \in \mathbb{R}^{n+1}$, 在几何上相当于在 $\mathbb{R}^{n+1}$ 上找一个超平面, 而不等式组 (2.4.28) 就是这个超平面分离集合

$$\begin{aligned} E &\triangleq \{(t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \mid t_0 \leqslant f(x_0); \\ &\qquad\qquad\qquad\qquad\qquad\qquad\; t_i \leqslant 0 \;(i = 1,2,\cdots,n)\} \end{aligned}$$

与

$$\begin{aligned} F &\triangleq \{(t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \mid \exists x \in C, \text{使得} \\ &\qquad\qquad\qquad\qquad\qquad\qquad\; t_0 \geqslant f(x), \text{并且} \\ &\qquad\qquad\qquad\qquad\qquad\qquad\; t_i \geqslant g_i(x) \;(i = 1,2,\cdots,n)\} \end{aligned}$$

的结果. 因为 $f, g_1, \cdots, g_n$ 都是凸函数, 易证 $F$ 是 $\mathbb{R}^{n+1}$ 中的一个凸集, 而 $E$ 显然是一个有内点的凸集, 其内点全体是

$$E^\circ = \{(t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \mid t_0 < f(x_0); \; t_i < 0 \;(i = 1,2,\cdots,n)\}.$$

由于 $x_0$ 是问题 (P) 的解, 所以 $E^\circ \cap F = \varnothing$. 现在应用定理 2.4.16 的注, 便得到

$$\hat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0) \leqslant \hat{\lambda}_0 (f(x) + \xi_0) + \sum_{i=1}^{n} \hat{\lambda}_i (g_i(x) + \xi_i) \quad (\forall x \in C, \forall \xi_i \geqslant 0 \;(i = 0,1,\cdots,n)). \tag{2.4.29}$$

由此可见 $\hat{\lambda}_i \geqslant 0 \;(i = 0,1,\cdots,n)$, 并且 (2.4.28) 式成立. 此外还有

$$\hat{\lambda}_i g_i(x_0) = 0 \quad (i = 1,2,\cdots,n). \tag{2.4.30}$$

这表明: 使 $g_i(x_0) < 0$ 的指标 $i$ 对应的约束实际上在此不起作用. 为了证明 (2.4.30) 式, 一方面, 由凸集分离定理 (定理 2.4.16),

$$\hat{\lambda}_0 f(x_0) \leqslant \hat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0),$$

因此,

$$\sum_{i=1}^{n} \hat{\lambda}_i g_i(x_0) \geqslant 0.$$

另一方面, 由假设 $g_i(x_0) \leqslant 0$, 以及 $\hat{\lambda}_i \geqslant 0$ 可见 (2.4.30) 式成立.

以下我们确定使 $\hat{\lambda}_0 > 0$ 的条件.

> [!lemma] 引理 2.4.24
> 若 $\exists \hat{x} \in C$ 满足
> 
> $$g_i(\hat{x}) < 0 \quad (i = 1,2,\cdots,n), \tag{2.4.31}$$
> 
> 则 $\hat{\lambda}_0 > 0$.

> [!proof]- 证
> 用反证法. 倘若不然, $\hat{\lambda}_0 = 0$. 由 (2.4.29) 式和 (2.4.30) 式便有
> 
> $$\sum_{i=1}^{n} \hat{\lambda}_i g_i(\hat{x}) \geqslant 0. \tag{2.4.32}$$
> 
> 因为 $(\hat{\lambda}_0, \hat{\lambda}_1, \cdots, \hat{\lambda}_n) \neq \theta$, 所以 $(\hat{\lambda}_1, \hat{\lambda}_2, \cdots, \hat{\lambda}_n) \neq (0,0,\cdots,0)$. 又 $\hat{\lambda}_i \geqslant 0 \;(i = 1,2,\cdots,n)$, 联合 (2.4.31) 式便有
> 
> $$\sum_{i=1}^{n} \hat{\lambda}_i g_i(\hat{x}) < 0.$$
> 
> 这与 (2.4.32) 式矛盾. $\blacksquare$

总结以上所述, 我们得到下面的定理.

> [!theorem] 定理 2.4.25（Kuhn-Tucker）
> 设 $\mathscr{X}$ 是一个线性空间, $C$ 是 $\mathscr{X}$ 的一个凸子集. 又设 $f, g_1, \cdots, g_n$ 是 $C$ 上的凸泛函, 那么在引理 2.4.24 的假设下, 若 $x_0$ 是问题 (P) 的解, 则必存在实数 $\lambda_1, \lambda_2, \cdots, \lambda_n \geqslant 0$, 适合
> 
> $$f(x_0) = \min \left\{ f(x) + \sum_{i=1}^{n} \lambda_i g_i(x) \; \Big| \; \forall x \in C \right\},$$
> 
> 以及
> 
> $$\lambda_i g_i(x_0) = 0 \quad (i = 1,2,\cdots,n).$$

**3. 凸泛函的次微分**

Banach 空间 $\mathscr{X}$ 上的一个凸泛函 $f: \mathscr{X} \to \mathbb{R}$, 一般来说未必是可微的. 然而参照函数的导数与这函数图形的切线斜率之间的关系, 我们将利用凸泛函 $f$ 的上方图 $\operatorname{epi}(f)$ 的承托超平面来推广导数的概念.

> [!definition] 定义 2.4.26
> 设 $f: \mathscr{X} \to \mathbb{R}$ 是凸的, $\forall x_0 \in \mathscr{X}$, 称集合
> 
> $$\partial f(x_0) \triangleq \{x^* \in \mathscr{X}^* \mid \langle x^*, x - x_0 \rangle + f(x_0) \leqslant f(x) \; (\forall x \in \mathscr{X})\}$$
> 
> 为函数 $f$ 在 $x_0$ 点的次微分, $\partial f(x_0)$ 中的任意泛函 $x^*$ 称为 $f$ 在 $x_0$ 点的次梯度.

> [!theorem] 定理 2.4.27
> 若 $f: \mathscr{X} \to \mathbb{R}$ 是凸的, 并在 $x_0 \in \mathscr{X}$ 连续, 则 $\partial f(x_0) \neq \varnothing$.

> [!proof]- 证
> 在空间 $\mathscr{X} \times \mathbb{R}$ 上, 考察凸集 $\operatorname{epi}(f)$ 与单点集 $\{(x_0, f(x_0))\}$. 因为 $f$ 在 $x_0$ 点连续, 所以 $\operatorname{epi}(f)$ 有内点 $(x_0, f(x_0)+1)$, 并且
> 
> $$\{(x_0, f(x_0))\} \cap \{\operatorname{epi}(f)\}^\circ = \varnothing.$$
> 
> 应用凸集分离定理 (定理 2.4.16), 有非零元 $(x^*, \xi) \in \mathscr{X}^* \times \mathbb{R}$ 分离 $\operatorname{epi}(f)$ 与 $\{(x_0, f(x_0))\}$, 即有
> 
> $$\langle x^*, x_0 \rangle + \xi f(x_0) \leqslant \langle x^*, x \rangle + \xi t \quad (\forall (x,t) \in \operatorname{epi}(f)). \tag{2.4.33}$$
> 
> 从而有 (令 $x = x_0$ 及 $t = f(x_0) + s \; (\forall s > 0)$) $\xi \geqslant 0$. 下证 $\xi \neq 0$. 倘若不然, $\xi = 0$, 那么由 (2.4.33) 式便有
> 
> $$\langle x^*, x_0 - x \rangle \leqslant 0 \quad (\forall x \in \mathscr{X}),$$
> 
> 即得 $x^* = \theta$. 这便与 $(x^*, \xi)$ 的非零性矛盾. 于是 $\xi > 0$. 这时可令 $x_0^* = -x^*/\xi$, 即得 $x_0^* \in \partial f(x_0)$. $\blacksquare$

**习  题**

> [!exercise] 2.4.1
> 设 $p$ 是实线性空间 $\mathscr{X}$ 上的次线性泛函, 求证:
> (1) $p(\theta) = 0$;
> (2) $p(-x) \geqslant -p(x)$;
> (3) 任意给定 $x_0 \in \mathscr{X}$, 在 $\mathscr{X}$ 上必有实线性泛函 $f$, 满足 $f(x_0) = p(x_0)$, 以及 $f(x) \leqslant p(x) \; (\forall x \in \mathscr{X})$.

> [!exercise] 2.4.2
> 设 $\mathscr{X}$ 是由实数列 $x = \{a_n\}$ 全体组成的实线性空间, 其元素间相等和线性运算都按坐标定义, 并定义
> 
> $$p(x) = \varlimsup_{n \to \infty} a_n \quad (\forall x = \{a_n\} \in \mathscr{X}).$$
> 
> 求证: $p(x)$ 是 $\mathscr{X}$ 上的次线性泛函.

> [!exercise] 2.4.3
> 设 $\mathscr{X}$ 是复线性空间, $p$ 是 $\mathscr{X}$ 上的半范数. $\forall x_0 \in \mathscr{X}, p(x_0) \neq 0$. 求证: 存在 $\mathscr{X}$ 上的线性泛函 $f$ 满足
> (1) $f(x_0) = 1$;
> (2) $|f(x)| \leqslant p(x)/p(x_0) \; (\forall x \in \mathscr{X})$.

> [!exercise] 2.4.4
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\{x_n\} \;(n = 1,2,3,\cdots)$ 是 $\mathscr{X}$ 中的点列. 如果 $\forall f \in \mathscr{X}^*$, 数列 $\{f(x_n)\}$ 有界, 求证: $\{x_n\}$ 在 $\mathscr{X}$ 内有界.

> [!exercise] 2.4.5
> 设 $\mathscr{X}_0$ 是 $B^*$ 空间 $\mathscr{X}$ 的闭子空间, 求证:
> 
> $$\rho(x, \mathscr{X}_0) = \sup\{|f(x)| \mid f \in \mathscr{X}^*, \|f\| = 1, f(\mathscr{X}_0) = 0\} \quad (\forall x \in \mathscr{X}),$$
> 
> 其中 $\rho(x, \mathscr{X}_0) = \inf_{y \in \mathscr{X}_0} \|x - y\|$.

> [!exercise] 2.4.6
> 设 $\mathscr{X}$ 是 $B^*$ 空间. 给定 $\mathscr{X}$ 中 $n$ 个线性无关的元素 $x_1, x_2, \cdots, x_n$ 与数域 $\mathbb{K}$ 中的 $n$ 个数 $C_1, C_2, \cdots, C_n$, 及 $M > 0$. 求证: 为了 $\exists f \in \mathscr{X}^*$ 适合 $f(x_k) = C_k \;(k = 1,2,\cdots,n)$, 以及 $\|f\| \leqslant M$, 必须且仅须对任意的 $\alpha_1, \alpha_2, \cdots, \alpha_n \in \mathbb{K}$, 有
> 
> $$\left| \sum_{k=1}^{n} \alpha_k C_k \right| \leqslant M \left\| \sum_{k=1}^{n} \alpha_k x_k \right\|.$$

> [!exercise] 2.4.7
> 给定 $B^*$ 空间 $\mathscr{X}$ 中 $n$ 个线性无关的元素 $x_1, x_2, \cdots, x_n$, 求证: $\exists f_1, f_2, \cdots, f_n \in \mathscr{X}^*$, 使得
> 
> $$\langle f_i, x_j \rangle = \delta_{ij} \quad (i,j = 1,2,\cdots,n).$$

> [!exercise] 2.4.8
> 设 $\mathscr{X}$ 是线性空间, 求证: 为了 $M$ 是 $\mathscr{X}$ 的极大线性子空间, 必须且仅须 $\dim(\mathscr{X} / M) = 1$.

> [!exercise] 2.4.9
> 设 $\mathscr{X}$ 是复线性空间, $E$ 是 $\mathscr{X}$ 中的非空均衡集, $f$ 是 $\mathscr{X}$ 上的线性泛函. 求证:
> $$|f(x)| \leqslant \sup_{y \in E} \operatorname{Re} f(y) \quad (\forall x \in E).$$

> [!exercise] 2.4.10
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E \subset \mathscr{X}$ 是非空的均衡闭凸集, $\forall x_0 \in \mathscr{X} \setminus E$. 求证: $\exists f \in \mathscr{X}^*$ 及 $\alpha > 0$, 使得
> $$|f(x)| < \alpha < |f(x_0)| \quad (\forall x \in E).$$

> [!exercise] 2.4.11
> 设 $E, F$ 是实的 $B^*$ 空间 $\mathscr{X}$ 中的两个互不相交的非空凸集, 并且 $E$ 是开的和均衡的. 求证: $\exists f \in \mathscr{X}^*$, 使得
> $$|f(x)| < \inf_{y \in F} |f(y)| \quad (\forall x \in E).$$

> [!exercise] 2.4.12
> 设 $C$ 是实 $B^*$ 空间 $\mathscr{X}$ 中的一个凸集, 并设 $x_0 \in \mathring{C}, x_1 \in \partial C, x_2 = m(x_1 - x_0) + x_0 \;(m > 1)$. 求证: $x_2 \notin C$.

> [!exercise] 2.4.13
> 设 $M$ 是 $B^*$ 空间 $\mathscr{X}$ 中的闭凸集, 求证: $\forall x \in \mathscr{X} \setminus M$, 必 $\exists f_1 \in \mathscr{X}^*$, 满足 $\|f_1\| = 1$, 并且
> $$\sup_{y \in M} f_1(y) \leqslant f_1(x) - d(x),$$
> 其中 $d(x) = \inf_{z \in M} \|x - z\|$.

> [!exercise] 2.4.14
> 设 $M$ 是实 $B^*$ 空间 $\mathscr{X}$ 内的闭凸集, 求证:
> $$\inf_{z \in M} \|x - z\| = \sup_{f \in \mathscr{X}^*, \|f\|=1} \left\{ f(x) - \sup_{z \in M} f(z) \right\} \quad (\forall x \in \mathscr{X}).$$

> [!exercise] 2.4.15
> 设 $\mathscr{X}$ 是一个 $B$ 空间, $f: \mathscr{X} \to \overline{\mathbb{R}} \;(\triangleq \mathbb{R} \cup \{\infty\})$ 是连续的凸泛函, 并且 $f(x) \not\equiv \infty$. 若定义 $f^*: \mathscr{X}^* \to \overline{\mathbb{R}}$ 为
> $$f^*(x^*) = \sup_{x \in \mathscr{X}} \{\langle x^*, x \rangle - f(x)\} \quad (\forall x^* \in \mathscr{X}^*),$$
> 求证: $f^*(x^*) \not\equiv \infty$.

> [!exercise] 2.4.16
> 设 $\mathscr{X}$ 是 $B$ 空间, $x(t): [a,b] \to \mathscr{X}$ 是连续的抽象函数. 又设 $\Delta$ 表示 $[a,b]$ 的分割:
> $$a = t_0 < t_1 < t_2 < \cdots < t_n = b,$$
> $$\|\Delta\| \triangleq \max_{0 \leqslant i \leqslant n-1} \{|t_{i+1} - t_i|\}.$$
> 求证: 在 $\mathscr{X}$ 中存在极限
> $$\lim_{\|\Delta\| \to 0} \sum_{i=0}^{n-1} x(t_i)(t_{i+1} - t_i)$$
> (此极限称为抽象函数 $x(t)$ 在 $[a,b]$ 上的 Riemann 积分).

> [!exercise] 2.4.17
> 设 $\mathscr{X}$ 是 Banach 空间, $G$ 是由 $\mathbb{C}$ 中的简单闭曲线 $L$ 围成的开区域. 如果 $x(z): \overline{G} \to \mathscr{X}$ 在 $G$ 内解析[^1], 且在 $\overline{G}$ 上连续. 求证: (推广的 Cauchy 定理)
> $$\int_L x(z)dz = 0.$$

[^1]: 即 $x(z)$ 在 $G$ 内每点可微 (参看本章 4.3 小节第一段). 换句话说, $\forall z_0 \in G$, 在 $\mathscr{X}$ 中存在极限 $\displaystyle\lim_{z \to z_0} \frac{x(z) - x(z_0)}{z - z_0}$.

> [!exercise] 2.4.18
> 求证: (1) $|x|$ 在 $\mathbb{R}$ 中是凸的;
> (2) $|x|$ 在 $x = 0$ 点的次微分 $\partial|x|(0) = [-1,1]$.

## §5 共轭空间、弱收敛、自反空间

### 5.1 共轭空间的表示及应用

> [!definition] 定义 2.5.1
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $\mathscr{X}$ 上的所有连续线性泛函全体 $\mathscr{X}^*$ (见定义 2.1.12), 按范数
> $$
> \|f\| = \sup_{\|x\|=1} |f(x)|
> $$
> 构成一个 $B$ 空间, 称为 $\mathscr{X}$ 的共轭空间.

> [!remark]
> $\mathscr{X}^*$ 的完备性直接根据定理 2.1.13: $\mathscr{X}^* = \mathscr{L}(\mathscr{X}, \mathbb{K})$ 导出.

> [!example] 例 2.5.2
> $L^p[0,1]$ 的共轭空间 $(1 \le p < \infty)$. 设 $q$ 是 $p$ 的共轭数, 即
> $$
> \begin{cases} \dfrac{1}{p} + \dfrac{1}{q} = 1, & \text{若 } p > 1,\\[8pt] q = \infty, & \text{若 } p = 1. \end{cases}
> $$
> 我们将证:
> $$
> L^p[0,1]^* = L^q[0,1]. \tag{2.5.1}
> $$
> 对于 $\forall g \in L^q[0,1]$, 根据 Hölder 不等式
> $$
> \biggl|\int_0^1 f(x)g(x)\,\mathrm{d}\mu\biggr| \le \biggl(\int_0^1 |f(x)|^p \,\mathrm{d}\mu\biggr)^{1/p} \biggl(\int_0^1 |g(x)|^q \,\mathrm{d}\mu\biggr)^{1/q}
> $$
> ($\mu$ 是 $[0,1]$ 上的 Lebesgue 测度), 我们知道:
> $$
> F_g(f) \triangleq \int_0^1 f(x)g(x)\,\mathrm{d}\mu \quad (\forall f \in L^p[0,1]) \tag{2.5.2}
> $$
> 定义了 $L^p[0,1]$ 上的一个连续线性泛函, 并有
> $$
> \|F_g\|_{L^p[0,1]^*} \le \|g\|_{L^q[0,1]}, \tag{2.5.3}
> $$
> 即映射 $g \mapsto F_g$ 将 $L^q[0,1]$ 连续地嵌入 $L^p[0,1]^*$.
>
> 以下证明映射 $g \mapsto F_g$ 是等距在上的. 这也就是, 对给定的 $F \in L^p[0,1]^*$, 要找一个 $g \in L^q[0,1]$, 使得
> $$
> F(f) = \int_0^1 f(x)g(x)\,\mathrm{d}\mu \quad (\forall f \in L^p[0,1]), \tag{2.5.4}
> $$
> 并且
> $$
> \|g\|_{L^q[0,1]} = \|F\|. \tag{2.5.5}
> $$
> 对任意的可测集 $E \subset [0,1]$, 令
> $$
> \nu(E) \triangleq F(\chi_E),
> $$
> 其中 $\chi_E$ 是 $E$ 的特征函数:
> $$
> \chi_E(x) = \begin{cases} 1, & \text{当 } x \in E,\\ 0, & \text{当 } x \notin E. \end{cases}
> $$
> 我们验证 $\nu$ 是一个完全可加测度. 事实上, 易见 $\nu$ 是有限可加的 (由于 $F$ 的可加性). 今设 $\{E_n\} \subset [0,1]$, 满足
> $$
> E_1 \supset E_2 \supset \cdots \supset E_n \supset \cdots
> $$
> 以及
> $$
> \bigcap_{n=1}^{\infty} E_n = \varnothing,
> $$
> 那么
> $$
> \nu(E_n) = F(\chi_{E_n}) \le \|F\| \cdot \|\chi_{E_n}\|_{L^p[0,1]} = \|F\| \biggl(\int_0^1 |\chi_{E_n}|^p \,\mathrm{d}\mu\biggr)^{1/p} = \|F\|\, \mu(E_n)^{1/p} \to 0 \quad (\text{当 } n \to \infty).
> $$
> 此外, 同理可知 $\nu$ 关于 $\mu$ 还是绝对连续的, 即由 $\mu(E) = 0$, 可以推出 $\nu(E) = 0$.
>
> 现在应用 Radon-Nikodym 定理 (定理 2.2.5), 存在可测函数 $g$, 使得对任意的可测集 $E$ 有
> $$
> \nu(E) = \int_E g \,\mathrm{d}\mu.
> $$
> 从而
> $$
> F(\chi_E) = \int_0^1 \chi_E(x)g(x)\,\mathrm{d}\mu.
> $$
> 于是对于一切简单函数 $f$, 都有
> $$
> F(f) = \int_0^1 f(x)g(x)\,\mathrm{d}\mu.
> $$
> 进一步我们将要证明:
> $$
> \|g\|_{L^q[0,1]} \le \|F\|. \tag{2.5.6}
> $$
> 因为一旦 (2.5.6) 式得证, 我们立即推得 (2.5.4) 式. 事实上, 因为简单函数集在 $L^p[0,1]$ 中是稠密的, 所以对 $\forall f \in L^p[0,1]$, 存在简单函数列 $f_n \to f\;(L^p[0,1])$. 从而有
> $$
> F(f) = \lim_{n\to\infty} F(f_n),
> $$
> 以及
> $$
> \begin{aligned}
> \biggl|\int_0^1 [f(x) - f_n(x)]g(x)\,\mathrm{d}\mu\biggr|
> &\le \biggl(\int_0^1 |f(x) - f_n(x)|^p \,\mathrm{d}\mu\biggr)^{1/p} \biggl(\int_0^1 |g(x)|^q \,\mathrm{d}\mu\biggr)^{1/q} \\
> &\le \|F\| \cdot \|f - f_n\|_{L^p[0,1]} \to 0 \quad (n \to \infty),
> \end{aligned}
> $$
> 亦即
> $$
> F(f) = \lim_{n\to\infty} \int_0^1 f_n(x)g(x)\,\mathrm{d}\mu = \int_0^1 f(x)g(x)\,\mathrm{d}\mu.
> $$
> 于是 (2.5.4) 式得证.
>
> 以下分两种情形证明 (2.5.6) 式.
>
> **(1)** $1 < p < \infty$. 对 $\forall t > 0$, 记
> $$
> E_t \triangleq \{x \in [0,1] \mid |g(x)| \le t\}. \tag{2.5.7}
> $$
> 令 $f = \chi_{E_t}|g|^{q-2}\overline{g}$, 便有
> $$
> \int_{E_t} |g|^q \,\mathrm{d}\mu = \int_0^1 f \cdot \overline{g} \,\mathrm{d}\mu = F(f) \le \|F\| \cdot \|f\|_{L^p[0,1]} = \|F\|\biggl(\int_{E_t}|g|^q \,\mathrm{d}\mu\biggr)^{1/p},
> $$
> 亦即
> $$
> \biggl(\int_{E_t}|g|^q \,\mathrm{d}\mu\biggr)^{1/q} \le \|F\|.
> $$
> 令 $t \to \infty$, 即得 (2.5.6) 式.
>
> **(2)** $p = 1$. 这时 $q = \infty$. 对 $\forall \varepsilon > 0$, 令
> $$
> A \triangleq \{x \in [0,1] \mid |g(x)| > \|F\| + \varepsilon\}.
> $$
> 再对 $\forall t > 0$, 还按 (2.5.7) 式定义 $E_t$, 并令 $f = \chi_{E_t \cap A}\operatorname{sign} \overline{g}$, 便有
> $$
> \|f\|_{L^1[0,1]} = \mu(E_t \cap A),
> $$
> 并且有
> $$
> \mu(E_t \cap A)(\|F\| + \varepsilon) \le \int_{A\cap E_t} |g| \,\mathrm{d}\mu = \int_0^1 f \cdot \overline{g} \,\mathrm{d}\mu \le \|F\|\,\mu(E_t \cap A).
> $$
> 令 $t \to \infty$, 便得
> $$
> \mu(A)(\|F\| + \varepsilon) \le \|F\|\,\mu(A).
> $$
> 由此推出 $\mu(A) = 0$, 从而
> $$
> \|g\|_{L^{\infty}[0,1]} \le \|F\|.
> $$
> 这就是当 $q = \infty$ 时的 (2.5.6) 式. $\blacksquare$

> [!remark]
> 结论 (2.5.1) 式可以扩充到一般的完全可加的、$\sigma$-有限的测度空间, 设 $(\Omega, \mathscr{B}, \mu)$ 是一个这样的测度空间, 则有
> $$
> L^p(\Omega, \mathscr{B}, \mu)^* = L^q(\Omega, \mathscr{B}, \mu) \quad (1 \le p < \infty). \tag{2.5.8}
> $$

> [!example] 例 2.5.3
> $C[0,1]$ 的共轭空间. 设
> $$
> \mathrm{BV}[0,1] \triangleq \{\, g \mid g: [0,1] \to \mathbb{C},\; g(0)=0,\; g(t)=g(t+0)\;(\forall t \in (0,1)),\; \operatorname{var}(g) < \infty \,\},
> $$
> 其中 $\operatorname{var}(g) = \sup \sum_{j=0}^{n-1} |g(t_{j+1}) - g(t_j)|$, 这里的上确界是对所有的 $[0,1]$ 分割
> $$
> \Delta:\; 0 = t_0 < t_1 < t_2 < \cdots < t_n = 1 \tag{2.5.9}
> $$
> 来取的. 在 $\mathrm{BV}[0,1]$ 上赋以范数
> $$
> \|g\|_v = \operatorname{var}(g) \quad (\forall g \in \mathrm{BV}[0,1]),
> $$
> 那么 $\mathrm{BV}[0,1]$ 是 $B$ 空间 (证明留作习题).
>
> 回顾对 $\forall \varphi \in C[0,1]$, $\forall g \in \mathrm{BV}[0,1]$, Stieltjes 积分
> $$
> \int_0^1 \varphi(t)\,\mathrm{d}g(t)
> $$
> 定义为 $\lim_{\|\Delta\| \to 0} \sum_{j=0}^{n-1} \varphi(t_j^*)[g(t_{j+1}) - g(t_j)]$, 其中 $\Delta$ 是 $[0,1]$ 的分割 (见 (2.5.9) 式), 而
> $$
> \|\Delta\| \triangleq \max_{1 \le j \le n} |t_j - t_{j-1}|,
> $$
> 及
> $$
> t_j^* \in [t_j, t_{j+1}] \quad (0 \le j \le n-1).
> $$
> 从定义易见 $\forall g \in \mathrm{BV}[0,1]$, 它对应着 $C[0,1]$ 上的一个连续线性泛函
> $$
> \varphi \mapsto \langle f, \varphi \rangle = \int_0^1 \varphi(t)\,\mathrm{d}g(t),
> $$
> 满足
> $$
> \|f\| \le \int_0^1 |\mathrm{d}g(t)| = \operatorname{var}(g) = \|g\|_v. \tag{2.5.10}
> $$
> 现在我们要证明反过来的结论. 这也就是说, 对任意的 $f \in C[0,1]^*$, 必 $\exists!\, g \in \mathrm{BV}[0,1]$, 使得
> $$
> \langle f, \varphi \rangle = \int_0^1 \varphi(t)\,\mathrm{d}g(t) \quad (\forall \varphi \in C[0,1]), \tag{2.5.11}
> $$
> 并且
> $$
> \|g\|_v \le \|f\|. \tag{2.5.12}
> $$
> 其中关键的步骤在于如何由 $f$ 确定出 $g$. 事实上, 如果允许 $\varphi$ 可以取成间断的特征函数 $\chi_E(t)\;(E \subset [0,1])$, 那么就有
> $$
> g(s) = \int_0^1 \chi_{(0,s]}(t)\,\mathrm{d}g(t).
> $$
> 因此, 先把 $C[0,1]$ 看成是 $L^{\infty}[0,1]$ 的一个闭子空间, 应用 Hahn-Banach 定理 (定理 2.4.4), 对给定的 $f \in C[0,1]^*$, $\exists \widetilde{f} \in L^{\infty}[0,1]^*$, 使得
> $$
> \langle \widetilde{f}, \chi_{\{0\}} \rangle = 0,
> $$
> $$
> \langle \widetilde{f}, \varphi \rangle = \langle f, \varphi \rangle \quad (\forall \varphi \in C[0,1]),
> $$
> 并且 $\|\widetilde{f}\| = \|f\|$. 因为 $\chi_{(0,s]} \in L^{\infty}[0,1]$, 所以可以令
> $$
> g(s) = \langle \widetilde{f}, \chi_{(0,s]} \rangle \quad (0 < s \le 1), \tag{2.5.13}
> $$
> $$
> g(0) = 0.
> $$
> 以下证明由 (2.5.13) 式定义的 $g \in \mathrm{BV}[0,1]$, 并适合 (2.5.11) 式与 (2.5.12) 式.
>
> 对 $[0,1]$ 的任一分割 $\Delta:\; 0 = t_0 < t_1 < t_2 < \cdots < t_n = 1$. 记
> $$
> \omega_k \triangleq g(t_{k+1}) - g(t_k) \quad (k = 0,1,2,\cdots,n-1),
> $$
> $$
> \lambda_k \triangleq \begin{cases} \overline{\omega}_k/|\omega_k|, & \omega_k \neq 0,\\ 0, & \text{其他} \end{cases} \quad (k = 0,1,2,\cdots,n-1),
> $$
> $$
> h_{\Delta}(t) \triangleq \sum_{k=0}^{n-1} \lambda_k \chi_{(t_k,t_{k+1}]}(t).
> $$
> 我们有
> $$
> \sum_{k=0}^{n-1} |\omega_k| = \sum_{k=0}^{n-1} \overline{\lambda}_k \omega_k = \langle \widetilde{f}, h_{\Delta} \rangle \le \|\widetilde{f}\| \cdot \|h_{\Delta}\|_{L^{\infty}[0,1]} \le \|\widetilde{f}\| = \|f\|,
> $$
> 即得 $g \in \mathrm{BV}[0,1]$, 并适合 (2.5.12) 式.
>
> 为了证明 (2.5.11) 式成立, 对 $\forall \varphi \in C[0,1]$ 及 $\forall \varepsilon > 0$, 取分割 $\Delta$ 使得
> $$
> |\varphi(t) - \varphi(t')| < \frac{\varepsilon}{2\|\widetilde{f}\|} \quad (\forall t, t' \in [t_j, t_{j+1}],\; j = 0,1,\cdots,n-1),
> $$
> 以及
> $$
> \biggl|\int_0^1 \varphi(t)\,\mathrm{d}g(t) - \sum_{j=0}^{n-1} \varphi(t_j)(g(t_{j+1}) - g(t_j))\biggr| < \frac{\varepsilon}{2}.
> $$
> 令
> $$
> \varphi_{\Delta} \triangleq \sum_{j=0}^{n-1} \varphi(t_j)\chi_{(t_j,t_{j+1}]} + \varphi(0)\chi_{\{0\}},
> $$
> 便得
> $$
> \begin{aligned}
> |\langle f, \varphi \rangle - \int_0^1 \varphi(t)\,\mathrm{d}g(t)|
> &\le |\langle f, \varphi \rangle - \langle \widetilde{f}, \varphi_{\Delta} \rangle| + \biggl|\langle \widetilde{f}, \varphi_{\Delta} \rangle - \int_0^1 \varphi(t)\,\mathrm{d}g(t)\biggr| \\
> &\le \|\widetilde{f}\| \cdot \|\varphi - \varphi_{\Delta}\|_{L^{\infty}[0,1]} + \biggl|\sum_{j=0}^{n-1} \varphi(t_j)(g(t_{j+1}) - g(t_j)) - \int_0^1 \varphi(t)\,\mathrm{d}g(t)\biggr| \\
> &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
> \end{aligned}
> $$
> 由 $\varepsilon$ 的任意性, 即得 (2.5.11) 式.
>
> 有界变差函数是单调增加函数的差, 即 $g = g_1 - g_2$, 因为 $g_1, g_2$ 的右极限总是存在的, 可以适当改变函数的值使得其右连续, 但是不会改变积分 $\int_0^1 \varphi(t)\,\mathrm{d}g_i(t)$, $i = 1,2$, 因此我们可以假设上述得到的函数 $g$ 是右连续的. 总结起来有, $g \mapsto \int_0^1 \varphi(t)\,\mathrm{d}g(t)$ 是 $\mathrm{BV}[0,1] \to C[0,1]^*$ 的一个等距同构. 换句话说
> $$
> C[0,1]^* = \mathrm{BV}[0,1]. \tag{2.5.14}
> $$
> $\blacksquare$

> [!remark]
> 我们可用测度或更一般的完全可加集函数代替有界变差函数得到下面更为一般的定理.

> [!theorem] 定理 2.5.4 (Riesz 表示定理 (连续函数空间))
> 若 $M$ 是一个 Hausdorff 紧空间, 则 $\forall f \in C(M)^*$, 有唯一的复值 Baire 测度, 即完全可加的集函数 $\mu$, 适合 $|\mu|(M) < \infty$, 满足
> $$
> \langle f, \varphi \rangle = \int_M \varphi(m)\,\mathrm{d}\mu \quad (\forall \varphi \in C(M)).
> $$

**应用** 作为 Hahn-Banach 定理 (定理 2.4.4) 和 Riesz 表示定理 (定理 2.5.4) 对复变逼近论的应用, 我们来证明下列颇为深刻的 Runge 定理.

> [!theorem] 定理 2.5.5 (Runge)
> 设 $K$ 是复平面 $\mathbb{C}$ 上的一个紧子集, 记 $\mathbb{C}_{\infty} = \mathbb{C} \cup \{\infty\}$. 又设 $E$ 是 $\mathbb{C}_{\infty} \setminus K$ 中的一个子集, 它与 $\mathbb{C}_{\infty} \setminus K$ 的每一个连通分量 (component) 都相交. 若 $f$ 是 $K$ 的一个邻域内的任意解析函数, 则必有有理函数列 $f_n$, 其极点都在 $E$ 内, 使得 $f_n$ 在 $K$ 上一致收敛到 $f$.
>
> > [!proof]- 证
> > 证明的办法是引用 $K$ 上的连续函数空间 $C(K)$, 并记 $R(K,E)$ 为极点在 $E$ 内的有理函数集在 $C(K)$ 中的闭包. 显然, $R(K,E)$ 是 $C(K)$ 的一个闭线性子空间. 因此, 为证 $f \in R(K,E)$, 只须证: 对 $\forall F \in C(K)^*$,
> > $$
> > F(g) = 0 \quad (\forall g \in R(K,E)) \implies F(f) = 0
> > $$
> > (见推论 2.4.8). 然而 $C(K)^*$ 是由 $K$ 上的完全可加的复值测度 $M(K)$ 组成 (见 Riesz 表示定理 (定理 2.5.4)), 于是我们只需证: 对 $\forall \mu \in M(K)$,
> > $$
> > \int_K g \,\mathrm{d}\mu = 0 \quad (\forall g \in R(K,E)) \implies \int_K f \,\mathrm{d}\mu = 0. \tag{2.5.15}
> > $$
> > 为此, 我们需要如下引理.

> [!lemma] 引理 2.5.6
> 对 $\forall \mu \in M(K)$, 若设
> $$
> \widehat{\mu}(w) = \int_K \frac{\mathrm{d}\mu(z)}{w-z},
> $$
> 那么对 $\forall R > 0$, $\widehat{\mu} \in L^1(B_R)$ (其中 $B_R$ 是中心在原点的半径为 $R$ 的圆), 且 $\widehat{\mu}$ 在 $\mathbb{C}_{\infty} \setminus K$ 上解析, 还满足 $\widehat{\mu}(\infty) = 0$.

我们暂时承认这个引理. 从而得到
$$
\left(\frac{\mathrm{d}}{\mathrm{d}w}\right)^n \widehat{\mu}(w_0) = n! \int_K (z-w_0)^{-n-1} \,\mathrm{d}\mu(z) \quad (\forall w_0 \in \mathbb{C} \setminus K), \tag{2.5.16}
$$

而在 $\infty$ 点附近它有展开
$$
\widehat{\mu}(w) = -\frac{1}{w} \sum_{n=0}^{\infty} \int_K \left(\frac{z}{w}\right)^n \mathrm{d}\mu(z) = -\sum_{n=0}^{\infty} \frac{a_n}{w^{n+1}}, \tag{2.5.17}
$$

其中 $a_n = \int_K z^n \,\mathrm{d}\mu(z)$. 进一步, 如果 $\mu \in M(K)$ 使得
$$
\int_K g(z) \,\mathrm{d}\mu(z) = 0, \tag{2.5.18}
$$

其中 $g$ 是极点在 $E$ 内的有理函数, 那么我们有
$$
\widehat{\mu}(w) = 0 \quad (\forall w \in \mathbb{C}_{\infty} \setminus K). \tag{2.5.19}
$$

事实上, $\forall w_0 \in E$, 设 $\Omega(w_0)$ 是 $\mathbb{C}_{\infty} \setminus K$ 中含 $w_0$ 的分量, 由关于 $E$ 的假设, 我们有
$$
\mathbb{C}_{\infty} \setminus K = \bigcup_{w_0 \in E} \Omega(w_0). \tag{2.5.20}
$$

如果 $w_0 \neq \infty$, 由 (2.5.16) 式与假设 (2.5.18) 式, $\widehat{\mu}$ 在 $w_0$ 的各阶导数均为 $0$, 从而 $\widehat{\mu}$ 在 $\Omega(w_0)$ 内恒为 $0$; 如果 $w_0 = \infty$, 则由 (2.5.17) 式与假设 (2.5.18) 式, $\widehat{\mu}$ 在 $\Omega(w_0)$ 内也恒为 $0$. 于是由 (2.5.20) 式即得 (2.5.19) 式.

现在我们考察在 $K$ 的某邻域 $G$ 内解析的任意函数 $f$, 对它存在含于 $G \setminus K$ 内的折线 $\gamma_1, \gamma_2, \cdots, \gamma_n$ 使得
$$
f(z) = \sum_{k=1}^{n} \frac{1}{2\pi\mathrm{i}} \int_{\gamma_k} \frac{f(w)}{w-z} \,\mathrm{d}w.
$$

从而由 Fubini 定理,
$$
\begin{aligned}
\int_K f(z) \,\mathrm{d}\mu(z) &= \sum_{k=1}^{n} \frac{1}{2\pi\mathrm{i}} \int_K \int_{\gamma_k} \frac{f(w)}{w-z} \,\mathrm{d}w \,\mathrm{d}\mu(z) \\
&= \sum_{k=1}^{n} \frac{1}{2\pi\mathrm{i}} \int_{\gamma_k} f(w) \,\widehat{\mu}(w) \,\mathrm{d}w = 0, \tag{2.5.21}
\end{aligned}
$$

这是因为 $\widehat{\mu}(w) = 0$ 于 $\gamma_k \subset \mathbb{C} \setminus K$ 上. 这样, 我们已从 (2.5.18) 式推出 (2.5.21) 式, 也就是证明了 (2.5.15) 式. $\blacksquare$

> [!proof]- 引理 2.5.6 的证明
> **(1)** 证 $\widehat{\mu} \in L^1(B_R)$. 由定义我们有
> $$
> |\widehat{\mu}(w)| \le \int_K \frac{\mathrm{d}|\mu|(z)}{|w-z|}.
> $$
> 从而
> $$
> \begin{aligned}
> \int_{B_R} |\widehat{\mu}(w)| \,\mathrm{d}x\,\mathrm{d}y &\le \int_{B_R} \int_K \frac{\mathrm{d}|\mu|(z)}{|w-z|} \,\mathrm{d}x\,\mathrm{d}y \\
> &= \int_K \int_{B_R} \frac{\mathrm{d}x\,\mathrm{d}y}{|w-z|} \,\mathrm{d}|\mu|(z) \quad (\text{用 Fubini 定理}) \\
> &\le \int_K \int_{B(z,\rho)} \frac{\mathrm{d}x\,\mathrm{d}y}{|w-z|} \,\mathrm{d}|\mu|(z) \\
> &\le 2\pi\rho\,|\mu|(K) < \infty,
> \end{aligned}
> $$
> 其中 $\rho > R + \max_{z \in K} |z|$.
>
> **(2)** $\widehat{\mu}$ 在 $\mathbb{C} \setminus K$ 解析. 这是由于 $K$ 紧, 所以可以在积分号下求微商.
>
> **(3)** $\widehat{\mu}$ 在 $\{\infty\}$ 解析, 且 $\widehat{\mu}(\infty) = 0$. 这是因为 $K$ 紧, 当 $|w| \to \infty$ 时, 在积分号下取极限, 便得 $\widehat{\mu}(w) \to 0$, 于是 $\infty$ 是可去奇点. $\blacksquare$

**第二共轭空间与自反性** 因为 $B^*$ 空间 $\mathscr{X}$ 的共轭空间 $\mathscr{X}^*$ 是一个 $B$ 空间, 所以我们还可以考虑 $\mathscr{X}^*$ 的共轭空间, 记作 $\mathscr{X}^{**}$, 称为 $\mathscr{X}$ 的第二共轭空间. 注意到 $\forall x \in \mathscr{X}$, 可以定义
$$
X(f) = \langle f, x \rangle \quad (\forall f \in \mathscr{X}^*). \tag{2.5.22}
$$

不难验证: $X$ 还是 $\mathscr{X}^*$ 上的一个线性泛函, 满足
$$
|X(f)| \le \|f\| \cdot \|x\|.
$$

从而 $X$ 还是连续的, 满足
$$
\|X\| \le \|x\|. \tag{2.5.23}
$$

称映射 $T : x \mapsto X$ 为自然映射, (2.5.23) 式表明 $T$ 是 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的连续嵌入. 注意到, 若 $\alpha, \beta \in \mathbb{C}$, $x, y \in \mathscr{X}$, 记 $X = Tx$, $Y = Ty$, 则有
$$
\begin{aligned}
T(\alpha x + \beta y)(f) &= f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) = \alpha X(f) + \beta Y(f) \\
&= (\alpha X + \beta Y)(f) = (\alpha Tx + \beta Ty)(f) \quad (\forall f \in \mathscr{X}^*).
\end{aligned}
$$

因此, $T$ 还是一个线性同构. 又应用 Hahn-Banach 定理 (定理 2.4.4), $\exists f \in \mathscr{X}^*$, 使得
$$
\|f\| = 1, \quad \text{且} \quad \langle f, x \rangle = \|x\|,
$$

便得到
$$
\|x\| = X(f) \le \|X\| \cdot \|f\| = \|X\|. \tag{2.5.24}
$$

联合 (2.5.23) 式与 (2.5.24) 式便知 $T$ 是等距的. 于是得到下面的定理.

> [!theorem] 定理 2.5.7
> $B^*$ 空间 $\mathscr{X}$ 与它的第二共轭空间 $\mathscr{X}^{**}$ 的一个子空间等距同构.

> [!remark]
> 有时, 我们对 $x$ 与 $X$ 不加区别, 简单写成 $\mathscr{X} \subset \mathscr{X}^{**}$.

> [!definition] 定义 2.5.8
> 如果 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的自然映射 $T$ 是满射的, 则称 $\mathscr{X}$ 是自反的, 记作 $\mathscr{X} = \mathscr{X}^{**}$.

由前面的具体函数空间的共轭空间的例子可见: 当 $1 < p < \infty$ 时, 空间 $L^p(\Omega, \mathscr{B}, \mu)$ 是自反的; 但是当 $p = 1, \infty$ 时, 空间 $L^p(\Omega, \mathscr{B}, \mu)$ 不是自反的.

### 5.2 共轭算子

共轭算子概念是有穷维空间中转置矩阵概念的推广. 一个

$n \times m$ 矩阵 $A = (a_{ij})$ 可以看成由 $\mathbb{K}^m \to \mathbb{K}^n$ 的线性算子:
$$
(Ax)_i = \sum_{j=1}^{m} a_{ij} x_j \quad (\forall x = (x_1, x_2, \cdots, x_m) \in \mathbb{K}^m,\; i = 1, 2, \cdots, n).
$$

其转置矩阵定义为 $m \times n$ 矩阵 $A^* = (a_{ji})$, 作为 $\mathbb{K}^n \to \mathbb{K}^m$ 的线性算子:
$$
(A^* y)_j = \sum_{i=1}^{n} a_{ij} y_i \quad (\forall y = (y_1, y_2, \cdots, y_n) \in \mathbb{K}^n,\; j = 1, 2, \cdots, m).
$$

怎样把这关系推广到一般的 $B$ 空间? 这要利用对偶关系. 事实上, 我们有关系式
$$
\begin{aligned}
\langle y, Ax \rangle_n &= \sum_{i=1}^{n} \left(\sum_{j=1}^{m} a_{ij} x_j\right) y_i = \sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij} x_j y_i \\
&= \sum_{j=1}^{m} \left(\sum_{i=1}^{n} a_{ij} y_i\right) x_j = \langle A^* y, x \rangle_m,
\end{aligned}
$$

这里
$$
\langle y, z \rangle_n = \sum_{i=1}^{n} y_i z_i \quad (\forall y = (y_1, y_2, \cdots, y_n),\; z = (z_1, z_2, \cdots, z_n) \in \mathbb{K}^n),
$$
$$
\langle w, x \rangle_m = \sum_{j=1}^{m} w_j x_j \quad (\forall w = (w_1, w_2, \cdots, w_m),\; x = (x_1, x_2, \cdots, x_m) \in \mathbb{K}^m).
$$

这启发我们通过共轭空间来定义共轭算子.

> [!definition] 定义 2.5.9 (共轭算子)
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, 算子 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$. 算子 $T^* : \mathscr{Y}^* \to \mathscr{X}^*$ 称为是 $T$ 的共轭算子是指:
> $$
> f(Tx) = (T^* f)(x) \quad (\forall f \in \mathscr{Y}^*,\; \forall x \in \mathscr{X}).
> $$

> [!remark]
> $\forall T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, $T^*$ 是唯一存在的, 并且属于 $\mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$. 事实上, 对 $\forall f \in \mathscr{Y}^*$, 令
> $$
> g(x) = f(Tx) \quad (\forall x \in \mathscr{X}),
> $$
> 它是线性的, 并且有界:
> $$
> |g(x)| \le \|f\| \cdot \|T\| \cdot \|x\| \quad (\forall x \in \mathscr{X}).
> $$
> 因此, $g \in \mathscr{X}^*$, 对应 $f \mapsto g$ 又是线性的, 正是 $T^*$. 按定义,
> $$
> \|T^* f\| = \|g\| \le \|T\| \cdot \|f\| \quad (\forall f \in \mathscr{Y}^*). \tag{2.5.25}
> $$
> 因此, $T^* \in \mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$. (2.5.25) 式还蕴含
> $$
> \|T^*\| \le \|T\|. \tag{2.5.26}
> $$
> 因此, $T^*$ 的唯一性显然. 事实上还有如下定理.

> [!theorem] 定理 2.5.10
> 映射 $*: T \mapsto T^*$ 是 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 到 $\mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$ 内的等距同构.
>
> > [!proof]- 证
> > **(1)** 证对应 $*: T \mapsto T^*$ 是线性的:
> > $$
> > \begin{aligned}
> > [(\alpha_1 T_1 + \alpha_2 T_2)^* f](x) &= f[(\alpha_1 T_1 + \alpha_2 T_2)x] \\
> > &= \alpha_1 f(T_1 x) + \alpha_2 f(T_2 x) = [(\alpha_1 T_1^* + \alpha_2 T_2^*)f](x) \\
> > &\qquad (\forall x \in \mathscr{X},\; \forall f \in \mathscr{Y}^*,\; \forall \alpha_1, \alpha_2 \in \mathbb{K}).
> > \end{aligned}
> > $$
> >
> > **(2)** 再证等距. 已有 (2.5.26) 式, 只要再证 $\|T\| \le \|T^*\|$. 对 $\forall x \in \mathscr{X}$, 若 $Tx \neq \theta$, 由推论 2.4.6, 必有 $f \in \mathscr{Y}^*$, 使得
> > $$
> > f(Tx) = \|Tx\|, \quad \text{且} \quad \|f\| = 1.
> > $$
> > 从而
> > $$
> > \|Tx\| = f(Tx) = (T^* f)(x) \le \|T^* f\| \cdot \|x\| \le \|T^*\| \cdot \|x\|,
> > $$
> > 即得 $\|T\| \le \|T^*\|$. $\blacksquare$

同样地，对 $T^*$ 还可以再考察它的共轭算子 $T^{**} = (T^*)^* \in \mathscr{L}(\mathscr{X}^{**}, \mathscr{Y}^{**})$. 注意到 $\mathscr{X} \subset \mathscr{X}^{**}$, $\mathscr{Y} \subset \mathscr{Y}^{**}$，并设它们的自然嵌入映射分别为 $U$ 和 $V$，那么

$$
\langle T^{**}Ux, f \rangle = \langle Ux, T^*f \rangle = \langle T^*f, x \rangle = \langle f, Tx \rangle = \langle VTx, f \rangle \quad (\forall f \in \mathscr{Y}^*,\; \forall x \in \mathscr{X}).
$$

从而有 $T^{**}Ux = VTx$. 即 $T^{**}$ 是 $T$ 在 $\mathscr{X}^{**}$ 上的扩张. 于是有

> [!theorem] 定理 2.5.11
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$，那么 $T^{**} \in \mathscr{L}(\mathscr{X}^{**}, \mathscr{Y}^{**})$ 是 $T$ 在 $\mathscr{X}^{**}$ 上的延拓，并满足 $\|T^{**}\| = \|T\|$.

> [!example] 例 2.5.12
> 设 $(\Omega, \mathscr{B}, \mu)$ 是一个测度空间，又设 $K(x, y)$ 是 $\Omega \times \Omega$ 上的二元平方可积函数:
> $$
> \iint_{\Omega \times \Omega} |K(x,y)|^2 \,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y) < \infty.
> $$
> 定义算子
> $$
> T: u \mapsto (Tu)(x) = \int_{\Omega} K(x,y)u(y)\,\mathrm{d}\mu(y) \quad (\forall u \in L^2(\Omega,\mu)),
> $$
> 便有 $T \in \mathscr{L}(L^2(\Omega,\mu))$, 并且
> $$
> (T^*v)(x) = \int_{\Omega} \overline{K(y,x)}\,v(y)\,\mathrm{d}\mu(y) \quad (\forall v \in L^2(\Omega,\mu)).
> $$
> 这是因为
> $$
> \begin{aligned}
> \|Tu\|^2 &= \int_{\Omega} \biggl|\int_{\Omega} K(x,y)u(y)\,\mathrm{d}\mu(y)\biggr|^2 \mathrm{d}\mu(x) \\
> &\le \int_{\Omega} \biggl(\int_{\Omega} |K(x,y)|^2\,\mathrm{d}\mu(y) \int_{\Omega} |u(y)|^2\,\mathrm{d}\mu(y)\biggr) \mathrm{d}\mu(x) \\
> &\le \biggl(\iint_{\Omega \times \Omega} |K(x,y)|^2\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y)\biggr) \|u\|^2 \quad (\forall u \in L^2(\Omega,\mu)),
> \end{aligned}
> $$
> 其中 $\|\cdot\|$ 表示 $L^2(\Omega,\mu)$ 上的范数，以及
> $$
> \begin{aligned}
> \langle T^*v, u \rangle &= \langle v, Tu \rangle = \int_{\Omega} \biggl(\int_{\Omega} K(x,y)u(y)\,\mathrm{d}\mu(y)\biggr) \overline{v(x)}\,\mathrm{d}\mu(x) \\
> &\stackrel{①}{=} \iint_{\Omega \times \Omega} K(x,y)u(y)\overline{v(x)}\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y) \\
> &= \int_{\Omega} \biggl(\int_{\Omega} \overline{K(x,y)}\,v(x)\,\mathrm{d}\mu(x)\biggr) \overline{u(y)}\,\mathrm{d}\mu(y)
> \end{aligned}
> $$
> $(\forall u,v \in L^2(\Omega,\mu))$. 所以
> $$
> (T^*v)(y) = \int_{\Omega} \overline{K(x,y)}\,v(x)\,\mathrm{d}\mu(x) \quad (\forall v \in L^2(\Omega,\mu)).
> $$
> $\blacksquare$

> [!remark]
> 理由 ① 是因为
> $$
> \iint_{\Omega \times \Omega} |K(x,y)|\,|u(y)|\,|v(x)|\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y) \le \|u\| \cdot \|v\| \biggl(\iint_{\Omega \times \Omega} |K(x,y)|^2\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y)\biggr)^{1/2} < \infty,
> $$
> 所以可以应用 Fubini 定理.

我们再来考察卷积算子和它的共轭算子.

> [!example] 例 2.5.13
> 设 $K(x)$ 是 $\mathbb{R}$ 上的 $L^1$ 函数，考察空间 $L^p(\mathbb{R})\;(1 \le p \le \infty)$ 上的卷积算子
> $$
> (K*f)(x) \triangleq \int_{-\infty}^{\infty} K(x-y)f(y)\,\mathrm{d}y,
> $$
> 并求其共轭. 首先证明 $K*$ 是 $L^p(\mathbb{R})$ 到自身的有界线性算子. 为此我们需要如下引理.

> [!lemma] 引理 2.5.14 (Young 不等式)
> 设 $f \in L^p(\mathbb{R})\;(1 \le p \le \infty)$, $K \in L^1(\mathbb{R})$，则
> $$
> \|K*f\|_p \le \|K\|_1 \cdot \|f\|_p, \tag{2.5.27}
> $$
> 其中 $\|\cdot\|_p$ 表示 $L^p(\mathbb{R})$ 的范数 $(1 \le p \le \infty)$.
>
> > [!proof]- 证
> > 当 $1 < p < \infty$ 时. 由 Hölder 不等式,
> > $$
> > \begin{aligned}
> > \biggl|\int_{-\infty}^{\infty} K(x-y)f(y)\,\mathrm{d}y\biggr|
> > &\le \int_{-\infty}^{\infty} |K(x-y)|^{1/q} \cdot |K(x-y)|^{1/p} |f(y)| \,\mathrm{d}y \\
> > &\le \biggl(\int_{-\infty}^{\infty} |K(x-y)|\,\mathrm{d}y\biggr)^{1/q} \biggl(\int_{-\infty}^{\infty} |K(x-y)| \cdot |f(y)|^p \,\mathrm{d}y\biggr)^{1/p},
> > \end{aligned}
> > $$
> > 而
> > $$
> > \begin{aligned}
> > \int_{-\infty}^{\infty} \biggl|\int_{-\infty}^{\infty} K(x-y)f(y)\,\mathrm{d}y\biggr|^p \mathrm{d}x
> > &\le \|K\|_1^{p/q} \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} |K(x-y)| \cdot |f(y)|^p \,\mathrm{d}y \,\mathrm{d}x \\
> > &= \|K\|_1^{p/q} \cdot \|f\|_p^p \cdot \|K\|_1.
> > \end{aligned}
> > $$
> > 由 Fubini 定理，$(K*f)(x)$ a.e. 存在有限，而且 (2.5.27) 式成立.
> >
> > 当 $p = 1$ 或 $\infty$ 时，不等式 (2.5.27) 是显然的. $\blacksquare$

现在我们来求 $K*$ 的共轭算子的表示. 若记 $\check{K}(x) \triangleq \overline{K(-x)}$，则由 Fubini 定理，有
$$
\begin{aligned}
\int_{-\infty}^{\infty} \biggl(\int_{-\infty}^{\infty} K(x-y)f(y)\,\mathrm{d}y\biggr) \overline{g(x)}\,\mathrm{d}x
&= \int_{-\infty}^{\infty} \overline{f(y)} \biggl(\int_{-\infty}^{\infty} \overline{K(x-y)}\,g(x)\,\mathrm{d}x\biggr) \mathrm{d}y \\
&= \int_{-\infty}^{\infty} \overline{(\check{K}*g)(y)}\,f(y)\,\mathrm{d}y.
\end{aligned}
$$

由此可见，$T \triangleq K*$ 的共轭算子为 $T^* = \check{K}*$.

> [!remark]
> 以上考虑的共轭空间和共轭算子都是在实数域上的共轭. 若用复数域，则每个 $L^q$ 函数 $g$ 对应着 $L^p$ 空间上的一个反连续线性泛函:
> $$
> F_g(f) = \int_{\Omega} f \cdot \overline{g} \,\mathrm{d}\mu.
> $$
> 这时的复共轭算子为 $T^* = \overline{\check{K}}*$.

### 5.3 弱收敛及 * 弱收敛

泛函分析主要研究无穷维空间的算子与泛函. 而有穷维 Banach 空间与无穷维 Banach 空间的根本区别之一是：在有穷维空间中，任意有界点列必有收敛子列，但在无穷维空间中不具备这条性质 (见推论 1.4.30). 为了使有些有穷维空间具备的性质能够过渡到无穷维空间中去，我们引进弱收敛与 $*$ 弱收敛的概念. 本节定理 2.5.28 与定理 2.5.29 给出在弱收敛及 $*$ 弱收敛意义下，上述基本性质在无穷维空间中的推广.

> [!definition] 定义 2.5.15
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间，$\{x_n\}\subset\mathscr{X}$，$x\in\mathscr{X}$. 称 $\{x_n\}$ 弱收敛到 $x$，记作 $x_n\rightharpoonup x$，是指：对于 $\forall f\in\mathscr{X}^*$ 都有
>
> $$\lim_{n\to\infty}f(x_n)=f(x).$$
>
> 这时 $x$ 称作点列 $\{x_n\}$ 的弱极限.

> [!remark] 注 1
> 为区别起见，今后我们称 $x_n\to x$ (按范数收敛) 为 $\{x_n\}$ 强收敛到 $x$，或 $x$ 是 $\{x_n\}$ 的强极限.

> [!remark] 注 2
> 若 $\dim\mathscr{X}<\infty$，则弱收敛与强收敛是等价的. 事实上，设 $e_1,e_2,\cdots,e_m$ 是 $\mathscr{X}$ 的一组基，并设
>
> $$x_n=\xi_1^{(n)}e_1+\xi_2^{(n)}e_2+\cdots+\xi_m^{(n)}e_m\quad(n=1,2,\cdots),$$
> $$x=\xi_1^{(0)}e_1+\xi_2^{(0)}e_2+\cdots+\xi_m^{(0)}e_m.$$
>
> 取 $f_i\in\mathscr{X}^*\ (i=1,2,\cdots,m)$，使得 $f_i(e_j)=\delta_{ij}\ (i,j=1,2,\cdots,m)$ (见习题 2.4.7)，便有
>
> $$f_i(x_n)=\xi_i^{(n)}\quad\text{与}\quad f_i(x)=\xi_i^{(0)}\quad(i=1,2,\cdots,m).$$
>
> 今若 $x_n\rightharpoonup x$，则有 $\lim\limits_{n\to\infty}f(x_n)=f(x)\ (\forall f\in\mathscr{X}^*)$，从而也有
>
> $$\lim_{n\to\infty}f_i(x_n)=f_i(x)\quad(i=1,2,\cdots,m),$$
>
> 即
>
> $$\lim_{n\to\infty}\xi_i^{(n)}=\xi_i^{(0)}\quad(i=1,2,\cdots,m).$$
>
> 换句话说就是 $\{x_n\}$ 按其坐标收敛于 $x$. 反过来，若 $\{x_n\}$ 按其坐标收敛于 $x$，那么 $x_n\to x\ (n\to\infty)$ (见定理 1.4.18)，由如下命题便推出 $x_n\rightharpoonup x\ (n\to\infty)$.

> [!proposition] 命题 2.5.16
> (1) 弱极限若存在必唯一. (2) 强极限若存在必是弱极限.

> [!proof]-
> (1) 若有 $x_n\rightharpoonup x$，$x_n\rightharpoonup y\ (n\to\infty)$，由定义推得
>
> $$f(x)=\lim_{n\to\infty}f(x_n)=f(y)\quad(\forall f\in\mathscr{X}^*).$$
>
> 利用推论 2.4.6，即得 $x=y$.
>
> (2) 若 $x_n\to x\ (n\to\infty)$，则 $\forall f\in\mathscr{X}^*$ 有
>
> $$|f(x_n)-f(x)|\le\|f\|\cdot\|x_n-x\|\to0\quad(n\to\infty),$$
>
> 即得 $\lim\limits_{n\to\infty}f(x_n)=f(x)$. 故 $x_n\rightharpoonup x\ (n\to\infty)$.

但反过来，当 $\dim\mathscr{X}=\infty$ 时，弱极限存在却未必有强极限.

> [!example] 例 2.5.17
> 在 $L^2[0,1]$ 中，设 $x_n=x_n(t)=\sin n\pi t$，则根据 Riemann-Lebesgue 引理，显然有
>
> $$\langle f,x_n\rangle=\int_0^1 f(t)\sin n\pi t\,dt\to0\quad(\forall f\in L^2[0,1]),$$
>
> 即 $x_n\rightharpoonup\theta\ (n\to\infty)$. 但 $\|x_n\|=1/\sqrt{2}$，不可能有 $x_n\to\theta\ (n\to\infty)$.

这表明弱收敛确实与强收敛不同. 然而反过来，若 $x_n\rightharpoonup x\ (n\to\infty)$，我们却可以找到 $\{x_n\}$ 的凸组合序列，使其强收敛到 $x$.

> [!theorem] 定理 2.5.18 (Mazur)
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间，$x_n\rightharpoonup x_0\ (n\to\infty)$，则 $\forall\varepsilon>0$，$\exists\lambda_i\ge0\ (i=1,2,\cdots,n)$，$\sum_{i=1}^n\lambda_i=1$，使得
>
> $$\|x_0-\sum_{i=1}^n\lambda_i x_i\|\le\varepsilon.$$

> [!proof]-
> 设 $M\triangleq\overline{\mathrm{co}}(\{x_n\})$，则 $M$ 是 $\mathscr{X}$ 中的一个闭凸集. 倘若 $x_0\notin M$，应用 Ascoli 定理 (推论 2.4.17)，$\exists f\in\mathscr{X}^*$ 及 $\alpha\in\mathbb{R}$，使得
>
> $$f(x)<\alpha<f(x_0)\quad(\forall x\in M).$$
>
> 从而
>
> $$f(x_n)<\alpha<f(x_0)\quad(\forall n\in\mathbb{N}).$$
>
> 这与 $x_n\rightharpoonup x_0\ (n\to\infty)$ 矛盾.
>
> 又既然 $\mathscr{X}^*$ 也是一个 $B$ 空间，在 $\mathscr{X}^*$ 上自然也有两种收敛: 强收敛与弱收敛. 所谓弱收敛 $f_n\rightharpoonup f$，是指对 $\forall x^{**}\in\mathscr{X}^{**}$ 都有 $x^{**}(f_n)\to x^{**}(f)$.
>
> 有时候为了不涉及 $\mathscr{X}^{**}$ 而是考察 $\mathscr{X}$.

> [!definition] 定义 2.5.19
> 设 $\mathscr{X}$ 是 $B^*$ 空间，$\{f_n\}\subset\mathscr{X}^*$，$f\in\mathscr{X}^*$. 称 $\{f_n\}$ $*$ 弱收敛到 $f$，记作 $w^*\!-\!\lim\limits_{n\to\infty}f_n=f$，是指: 对于 $\forall x\in\mathscr{X}$，都有 $\lim\limits_{n\to\infty}f_n(x)=f(x)$. 这时 $f$ 称作泛函序列 $\{f_n\}$ 的 $*$ 弱极限.

我们已指出过: $\mathscr{X}$ 可以连续地嵌入 $\mathscr{X}^{**}$，或者说 $\mathscr{X}\subset\mathscr{X}^{**}$，因此 $\mathscr{X}^*$ 上的弱收敛蕴含 $\mathscr{X}^*$ 上的 $*$ 弱收敛，而且当 $\mathscr{X}$ 是一个自反空间时，$*$ 弱收敛与弱收敛等价.

现在把 Banach--Steinhaus 定理 (定理 2.3.17) 应用到下列特殊情形.

> [!theorem] 定理 2.5.20
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间，又设 $\{x_n\}\subset\mathscr{X}$，$x\in\mathscr{X}$，则为了 $x_n\rightharpoonup x\ (n\to\infty)$，必须且仅须:
>
> (1) $\|x_n\|$ 有界;
>
> (2) 对 $\mathscr{X}^*$ 中的一个稠密子集 $M^*$ 上的一切 $f$ 都有
>
> $$\lim_{n\to\infty}f(x_n)=f(x).$$

> [!proof]-
> 只需把 $x_n$ 看成是 $\mathscr{X}^*$ 上的有界线性泛函:
>
> $$\langle x_n,f\rangle\triangleq f(x_n)\quad(\forall f\in\mathscr{X}^*).$$
>
> 应用 Banach--Steinhaus 定理 (定理 2.3.17) 即得结论.

> [!theorem] 定理 2.5.21
> 设 $\mathscr{X}$ 是一个 $B$ 空间，又设 $\{f_n\}\subset\mathscr{X}^*$，$f\in\mathscr{X}^*$，则为了 $w^*\!-\!\lim\limits_{n\to\infty}f_n=f$，必须且仅须
>
> (1) $\|f_n\|$ 有界;
>
> (2) 对 $\mathscr{X}$ 中的一个稠密子集 $M$ 上的一切 $x$ 都有
>
> $$\lim_{n\to\infty}f_n(x)=f(x).$$

> [!proof]-
> 本定理是 Banach--Steinhaus 定理 (定理 2.3.17) 的特殊情形.

类似于连续线性泛函序列，对于连续线性算子序列，$\{T_n\}\subset\mathscr{L}(\mathscr{X},\mathscr{Y})$，其中 $\mathscr{X},\mathscr{Y}$ 是 $B^*$ 空间，我们也考察各种收敛性.

> [!definition] 定义 2.5.22
> 设 $\mathscr{X},\mathscr{Y}$ 是 $B^*$ 空间. 又设 $T_n\ (n=1,2,\cdots)$，$T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$.
>
> (1) 若 $\|T_n-T\|\to0$，则称 $T_n$ 一致收敛于 $T$，记作 $T_n\rightrightarrows T$. 这时 $T$ 称作 $\{T_n\}$ 的一致极限.
>
> (2) 若 $\|(T_n-T)x\|\to0\ (\forall x\in\mathscr{X})$，则称 $T_n$ 强收敛于 $T$，记作 $T_n\to T$. 这时 $T$ 称作 $\{T_n\}$ 的强极限.
>
> (3) 如果对于 $\forall x\in\mathscr{X}$，以及 $\forall f\in\mathscr{Y}^*$ 都有
>
> $$\lim_{n\to\infty}f(T_n x)=f(Tx),$$
>
> 则称 $T_n$ 弱收敛于 $T$，记作 $T_n\rightharpoonup T$. 这时 $T$ 称作 $\{T_n\}$ 的弱极限.

显然，一致收敛 $\Rightarrow$ 强收敛 $\Rightarrow$ 弱收敛，而且每种极限若存在必是唯一的. 但反过来一般不对.

> [!example] 例 2.5.23 (强收敛而不一致收敛)
> 在空间 $l^2$ 上考察左推移算子
>
> $$T:x=(x_1,x_2,\cdots,x_n,\cdots)\mapsto Tx=(x_2,x_3,\cdots,x_n,\cdots).$$
>
> 令 $T_n\triangleq T^n$，便有
>
> $$T_n x=(x_{n+1},x_{n+2},\cdots)\quad(\forall x=(x_1,x_2,\cdots,x_n,\cdots)\in l^2).$$
>
> 下面我们证明: $T_n\to0$，但 $T_n\not\rightrightarrows0\ (n\to\infty)$. 事实上，若取
>
> $$e_n=(\underbrace{0,0,\cdots,0}_{n},1,0,\cdots),$$
>
> 那么 $T_n e_{n+1}=e_1$，并且 $\|e_n\|=1\ (\forall n\in\mathbb{N})$. 因此
>
> $$\|T_n\|\ge\|T_n(e_{n+1})\|=1,$$
>
> 从而 $T_n\not\rightrightarrows0$. 但是对 $\forall x=(x_1,x_2,\cdots,x_n,\cdots)\in l^2$ 有
>
> $$\|T_n x\|=\left(\sum_{i=1}^{\infty}|x_{n+i}|^2\right)^{\frac12}\to0\quad(n\to\infty),$$
>
> 即 $T_n\to0$.

> [!example] 例 2.5.24 (弱收敛而不强收敛)
> 在空间 $l^2$ 上考察右推移算子
>
> $$S:x=(x_1,x_2,\cdots,x_n,\cdots)\mapsto Sx=(0,x_1,x_2,\cdots,x_n,\cdots).$$
>
> 令 $S_n\triangleq S^n$，便有
>
> $$S_n x=(\underbrace{0,0,\cdots,0}_{n},x_1,x_2,\cdots)\quad(\forall x\in l^2).$$
>
> 显然，$\|S_n x\|=\|x\|\ (\forall x\in l^2)$，从而 $S_n\not\to0$. 但是对于 $\forall f=(y_1,y_2,\cdots,y_n,\cdots)\in(l^2)^*=l^2$，我们有
>
> $$|\langle f,S_n x\rangle|=\left|\sum_{i=1}^{\infty}y_{i+n}x_i\right|$$
>
> $$\le\left(\sum_{i=1}^{\infty}|y_{i+n}|^2\right)^{\frac12}\|x\|\to0\quad(n\to\infty),$$
>
> 即 $S_n\rightharpoonup0\ (n\to\infty)$.

### 5.4 弱列紧性与 $*$ 弱列紧性

引进弱收敛及 $*$ 弱收敛的目的之一是可以从有界性导出某种紧性. 如称集 $A$ 是弱列紧的，是指 $A$ 中的任意点列有一个弱收敛子列. 又如称 $A$ 是 $*$ 弱列紧的，是指 $A$ 中的任意点列有一个 $*$ 弱收敛的子列.

下面一个定理是非常容易看出来的.

> [!theorem] 定理 2.5.25
> 设 $\mathscr{X}$ 是可分的 $B^*$ 空间，那么 $\mathscr{X}^*$ 上的任意有界列 $\{f_n\}$ 必有 $*$ 弱收敛的子列.

> [!proof]-
> 因为 $\mathscr{X}$ 可分，所以 $\mathscr{X}$ 有可数的稠密子集 $\{x_m\}$. 因为 $\{f_n\}$ 有界，所以对每一个固定的 $m$，数集
>
> $$\{\langle f_n,x_m\rangle\mid n,m\in\mathbb{N}\}$$
>
> 是有界的. 用对角线法则可以抽出子列 $\{f_{n_k}\}_{k=1}^{\infty}$，使得对 $\forall m\in\mathbb{N}$，
>
> $$\{\langle f_{n_k},x_m\rangle\}_{k=1}^{\infty}$$
>
> 是收敛数列. 再由 $\{x_m\}$ 在 $\mathscr{X}$ 中稠密，以及 $\{f_n\}$ 有界，可见对于 $\forall x\in\mathscr{X}$，
>
> $$\{\langle f_{n_k},x\rangle\}_{k=1}^{\infty}$$
>
> 是收敛数列. 记 $F(x)\triangleq\lim\limits_{k\to\infty}\langle f_{n_k},x\rangle$. 易见 $F$ 是线性的，并且
>
> $$|F(x)|\le\sup_n\|f_n\|\cdot\|x\|\quad(\forall x\in\mathscr{X}).$$
>
> 从而有 $f\in\mathscr{X}^*$，使得
>
> $$\langle f,x\rangle=F(x)=\lim_{k\to\infty}\langle f_{n_k},x\rangle\quad(\forall x\in\mathscr{X}).$$
>
> 即得 $w^*\!-\!\lim\limits_{k\to\infty}f_{n_k}=f$.

为了避免可分性，我们利用空间的自反性假设导出 $*$ 弱列紧性 (此时 $*$ 弱列紧与弱列紧是等价的). 先证下面的定理.

> [!theorem] 定理 2.5.26 (Banach)
> 设 $\mathscr{X}$ 是 $B^*$ 空间. 若 $\mathscr{X}$ 的共轭空间 $\mathscr{X}^*$ 是可分的，则 $\mathscr{X}$ 本身必是可分的.

> [!proof]-
> (1) 考察 $\mathscr{X}^*$ 的单位球面 $S_1^*\triangleq\{f\in\mathscr{X}^*\mid\|f\|=1\}$. 我们指出: $S_1^*$ 是可分的. 事实上，由 $\mathscr{X}^*$ 可分，$\exists\{f_n\}\subset\mathscr{X}^*$，使得 $\forall f\in S_1^*$，$\exists\{n_k\}_{k=1}^{\infty}$，使得
>
> $$\lim_{k\to\infty}f_{n_k}=f.$$
>
> 今令 $g_n\triangleq f_n/\|f_n\|$ (不妨设 $f_n\neq\theta$)，便有
>
> $$\begin{aligned}\|f-g_{n_k}\|&\le\|f-f_{n_k}\|+\|f_{n_k}-g_{n_k}\|\\&=\|f-f_{n_k}\|+|1-\|f_{n_k}\||\to0\quad(k\to\infty).\end{aligned}$$
>
> 由此可见 $S_1^*$ 有可数的稠密子集 $\{g_n\}$.
>
> (2) 对于每个 $g_n$，因为 $\|g_n\|=1$，所以可以选取 $x_n\in\mathscr{X}$，使得
>
> $$\|x_n\|=1,\quad\text{并且}\quad g_n(x_n)\ge\frac12.$$
>
> 记 $\mathscr{X}_0\triangleq\overline{\mathrm{span}\{x_n\}}$，它显然是可分的 ($x_n$ 的有理系数的线性组合在 $\mathscr{X}_0$ 中稠密).
>
> (3) 证明 $\mathscr{X}_0=\mathscr{X}$. 倘若不然，存在 $x_0\in\mathscr{X}\setminus\mathscr{X}_0$，不妨设 $\|x_0\|=1$，利用定理 2.4.7，$\exists f_0\in\mathscr{X}^*$，使得 $\|f_0\|=1$，从而 $f_0\in S_1^*$，并且 $f_0(x)=0\ (\forall x\in\mathscr{X}_0)$.
>
> 对此 $f_0$ 我们有
>
> $$\begin{aligned}\|g_n-f_0\|&=\sup_{\|x\|=1}|g_n(x)-f_0(x)|\\&\ge|g_n(x_n)-f_0(x_n)|\\&=|g_n(x_n)|\ge1/2.\end{aligned}$$
>
> 这与 $\{g_n\}$ 在 $S_1^*$ 中稠密相矛盾，即得 $\mathscr{X}=\mathscr{X}_0$. 从而 $\mathscr{X}$ 是可分的.

> [!theorem] 定理 2.5.27 (Pettis)
> 自反空间 $\mathscr{X}$ 的闭子空间 $\mathscr{X}_0$ 必是自反空间.

> [!proof]-
> 要证: 若 $z_0\in\mathscr{X}_0^{**}$，则必 $z_0\in\mathscr{X}_0$; 也就是要证: $\exists x\in\mathscr{X}_0$，使得
>
> $$\langle z_0,f_0\rangle=\langle f_0,x\rangle\quad(\forall f_0\in\mathscr{X}_0^*).\qquad(2.5.28)$$
>
> 今对 $\forall f\in\mathscr{X}^*$，考察 $f$ 在 $\mathscr{X}_0$ 上的限制 $Tf=f_0\in\mathscr{X}_0^*$. 因为
>
> $$\|f_0\|\le\|f\|,$$
>
> 所以 $T\in\mathscr{L}(\mathscr{X}^*,\mathscr{X}_0^*)$. 于是 $z\triangleq T^*z_0\in\mathscr{X}^{**}$，又 $\mathscr{X}$ 自反，因此 $\exists x\in\mathscr{X}$，使得
>
> $$\langle z,f\rangle=\langle f,x\rangle\quad(\forall f\in\mathscr{X}^*).\qquad(2.5.29)$$
>
> 今证此 $x\in\mathscr{X}_0$. 倘若不然，由定理 2.4.7，$\exists f\in\mathscr{X}^*$，使得
>
> $$f(\mathscr{X}_0)=0,\quad\text{且}\quad\langle f,x\rangle=1,$$
>
> 从而 $Tf=\theta$. 但这导出矛盾:
>
> $$0=\langle z_0,Tf\rangle=\langle T^*z_0,f\rangle=\langle z,f\rangle=\langle f,x\rangle=1.$$
>
> 这就证明了 $\exists x\in\mathscr{X}_0$，使得 (2.5.29) 式成立. 现在要证此 $x$ 还适合 (2.5.28) 式. 事实上，$\forall f_0\in\mathscr{X}_0^*$，由 Hahn-Banach 定理 (定理 2.4.4)，存在 $f\in\mathscr{X}^*$，使得 $f_0=Tf$. 从而我们有
>
> $$\langle z_0,f_0\rangle=\langle z_0,Tf\rangle=\langle z,f\rangle,$$
>
> 以及
>
> $$\langle f_0,x\rangle=\langle f,x\rangle\quad(\forall x\in\mathscr{X}_0).$$
>
> 由此可见，适合 (2.5.29) 式的 $x$ 必适合 (2.5.28) 式.

> [!theorem] 定理 2.5.28 (Eberlein-Šmulian)
> 自反空间的单位 (闭) 球是弱 (自) 列紧的.

> [!proof]-
> (1) 我们先证: 自反空间 $\mathscr{X}$ 中的任何有界点列 $\{x_n\}$ 必有一个在 $\mathscr{X}$ 中弱收敛的子列. 令
>
> $$\mathscr{X}_0\triangleq\overline{\mathrm{span}\{x_n\}}.$$
>
> 根据定理 2.5.27，因为 $\mathscr{X}$ 自反，所以 $\mathscr{X}_0$ 也是自反的. 又显然 $\mathscr{X}_0$ 是可分的，这表明 $(\mathscr{X}_0^*)^*$ 是可分的. 再由定理 2.5.26，$\mathscr{X}_0^*$ 也是可分的. 若记 $\{g_n\}$ 为 $\mathscr{X}_0^{**}$ 中的元素，它适合
>
> $$\langle g_n,f\rangle=\langle f,x_n\rangle\quad(\forall f\in\mathscr{X}_0^*),\qquad(2.5.30)$$
>
> 则 $\{\|g_n\|\}$ 有界. 设 $M_0^*$ 是 $\mathscr{X}_0^*$ 中的可数稠密子集，用对角线法则，在 $\{g_n\}$ 中可以抽出一子列 $\{g_{n_k}\}$ 及 $\exists g\in\mathscr{X}_0^{**}$，使得
>
> $$\lim_{k\to\infty}\langle g_{n_k},f\rangle=\langle g,f\rangle\quad(\forall f\in M_0^*).\qquad(2.5.31)$$
>
> 再依定理 2.5.21，(2.5.31) 式蕴含
>
> $$\lim_{k\to\infty}\langle g_{n_k},f\rangle=\langle g,f\rangle\quad(\forall f\in\mathscr{X}_0^*).\qquad(2.5.32)$$
>
> 还由 $\mathscr{X}_0$ 的自反性，$\exists x_0\in\mathscr{X}_0$ 适合
>
> $$\langle g,f\rangle=\langle f,x_0\rangle\quad(\forall f\in\mathscr{X}_0^*).\qquad(2.5.33)$$
>
> 联合 (2.5.30) 式，(2.5.32) 式与 (2.5.33) 式，便得到
>
> $$\begin{aligned}\lim_{k\to\infty}\langle f,x_{n_k}\rangle&=\lim_{k\to\infty}\langle g_{n_k},f\rangle\\&=\langle f,x_0\rangle\quad(\forall f\in\mathscr{X}_0^*).\qquad(2.5.34)\end{aligned}$$
>
> 进一步对 $\forall\tilde{f}\in\mathscr{X}^*$，记 $f\triangleq T\tilde{f}$ 为 $\tilde{f}$ 在 $\mathscr{X}_0$ 上的限制. 因为 $\{x_{n_k}\}\subset\mathscr{X}_0$ 及 $x_0\in\mathscr{X}_0$，依 (2.5.34) 式便有
>
> $$\begin{aligned}\lim_{k\to\infty}\langle\tilde{f},x_{n_k}\rangle&=\lim_{k\to\infty}\langle f,x_{n_k}\rangle\\&=\langle f,x_0\rangle=\langle\tilde{f},x_0\rangle\quad(\forall\tilde{f}\in\mathscr{X}^*),\end{aligned}$$
>
> 即得 $x_{n_k}\rightharpoonup x_0$. 于是 $\mathscr{X}$ 中的任意有界集是弱列紧集，特别是单位球是弱列紧的. 同样，单位闭球也是弱列紧的.
>
> (2) 证明单位闭球是弱自列紧的. 设 $x_{n_k}\rightharpoonup x_0$，并且 $\|x_{n_k}\|\le1$. 由推论 2.4.6，$\exists f\in\mathscr{X}^*$ 适合
>
> $$f(x_0)=\|x_0\|,\quad\text{且}\quad\|f\|=1.$$
>
> 因此，我们有
>
> $$\|x_0\|=f(x_0)=\lim_{k\to\infty}f(x_{n_k})\le\|f\|\sup_{k\ge1}\|x_{n_k}\|\le1,$$
>
> 即 $x_0$ 也在单位闭球内，从而单位闭球是弱自列紧的.

> [!theorem] 定理 2.5.29 (Alaoglu)
> 设 $\mathscr{X}$ 是 $B^*$ 空间，则 $\mathscr{X}^*$ 中的单位闭球是 $*$ 弱紧的.

$*$ 弱紧的定义及证明请参看下册第五章.

**应用** $\quad L^p[0,2\pi]\ (1<p<\infty)$ 函数的 Fourier 级数的刻画.

设 $f\in L^1[0,2\pi]$，我们称

$$c_n\triangleq\frac{1}{2\pi}\int_0^{2\pi}f(x)e^{-inx}dx\quad(n=0,\pm1,\pm2,\cdots)$$

为 $f$ 的 Fourier 系数，并称级数

$$\sum_{n=-\infty}^{\infty}c_n e^{inx}\qquad(2.5.35)$$

为 $f$ 的 Fourier 级数. 当 $f\in L^2[0,2\pi]$ 时，级数 (2.5.35) 在 $L^2[0,2\pi]$ 空间上收敛 (见例 1.6.26). 一般来说，对于 $L^1[0,2\pi]$ 中的 $f$，级数 (2.5.35) 未必收敛. 通常我们考察下列 Cesaro 部分和 (算术平均和):

$$\sigma_n(f)(x)=\frac{1}{n+1}\sum_{k=0}^{n}S_k(f)(x)=\sum_{k=-n}^{n}c_k\!\left(1-\frac{|k|}{n+1}\right)\!e^{ikx},\qquad(2.5.36)$$

其中 $S_n(f)(x)\triangleq\sum\limits_{k=-n}^{n}c_k e^{ikx}$. 通过初等计算，有

$$\sigma_n(f)(x)=\int_0^{2\pi}f(y)K_n(x-y)dy,$$

其中

$$K_n(x)\triangleq\frac{1}{2\pi}\sum_{k=-n}^{n}\!\left(1-\frac{|k|}{n+1}\right)\!e^{ikx}=\frac{1}{2\pi(n+1)}\!\left(\frac{\sin((n+1)x/2)}{\sin(x/2)}\right)^{\!2},$$

称其为 Fejér 核. 利用 $K_n$ 的非负性，以及

$$\int_0^{2\pi}K_n(x)dx=\frac{1}{2\pi}\sum_{k=-n}^{n}\!\left(1-\frac{|k|}{n+1}\right)\!\int_0^{2\pi}e^{ikx}dx=1,$$

按 Young 不等式 (引理 2.5.14)，对 $\forall f\in L^p[0,2\pi]\ (1\le p<\infty)$，有

$$\|\sigma_n(f)\|_{L^p}\le\|f\|_{L^p}.$$

由此可见，若 $f\in L^p$，则其 Cesaro 部分和的 $L^p$ 范数是一致有界的.

现在我们要证明反过来的结论.

> [!theorem] 定理 2.5.30
> 若 $1<p\le\infty$，又若级数 (2.5.35) 的 Cesaro 部分和级数 (2.5.36) 的 $L^p$ 范数是一致有界的，即
>
> $$\sup_{n\ge1}\|\sigma_n\|_{L^p}<\infty,\qquad(2.5.37)$$
>
> 那么必存在 $f\in L^p[0,2\pi]$，使得 $\sigma_n$ 是 $f$ 的 Fourier 级数的 Cesaro 部分和.

> [!proof]-
> 注意到 $L^p[0,2\pi]=L^q[0,2\pi]^*$，$1/p+1/q=1$. 而 $L^q[0,2\pi]$ 是可分的. 由条件 (2.5.37) 式应用定理 2.5.25，可见存在 $f\in L^p[0,2\pi]$ 及子列 $\{n_k\}$，使得
>
> $$w^*\!-\!\lim_{k\to\infty}\sigma_{n_k}(x)=f(x)\quad(\text{在 }L^p[0,2\pi]\text{ 中}).$$
>
> 因为 $e^{imx}\in L^q[0,2\pi]\ (m=0,\pm1,\pm2,\cdots)$，所以
>
> $$\begin{aligned}\frac{1}{2\pi}\int_0^{2\pi}f(x)e^{-imx}dx&=\lim_{k\to\infty}\frac{1}{2\pi}\int_0^{2\pi}\sigma_{n_k}(x)e^{-imx}dx\\&=\lim_{k\to\infty}\!\left(1-\frac{|m|}{n_k+1}\right)\!c_m=c_m,\end{aligned}$$
>
> 即得 $\sigma_n(x)$ 是 $f$ 的 Fourier 级数的 Cesaro 部分和 $\sigma_n(f)(x)$.

### 5.5* 弱收敛的例子

在变分学和微分方程研究中通常需要刻画方程解 (或者逼近解) 的弱收敛行为. 常见的弱收敛而不强收敛的例子有下列三种类型: 振荡 (oscillation)、平移 (translation)、集中 (concentration). 下面我们通过具体例子来介绍这三种现象.

> [!example] 例 2.5.31 (振荡)
> (1) 令 $u_n(x)=\sin n\pi x$，由 Riemann-Lebesgue 引理，当 $n\to\infty$，$u_n$ 在 $L^2[0,1]$ 中弱收敛但不强收敛于 $0$.
>
> (2) 锯齿型函数序列:
>
> $$u_n(x)=\begin{cases}x-k/n,&x\in[k/n,(2k+1)/(2n)],\\-x+(k+1)/n,&x\in[(2k+1)/(2n),(k+1)/n].\end{cases}$$
>
> 容易证明，$\{u_n\}$ 在 $H^{1,2}(0,1)$ 中弱收敛但不强收敛于 $0$，造成这种现象的主要原因是函数列 $\{u_n\}$ 在区间 $(0,1)$ 中的剧烈振荡. 在变分学中，它经常作为某个泛函的不收敛的极小化子列出现①，如图 2.5.1 所示.
>
> ①见张恭庆所著《变分学讲义》(高等教育出版社, 2011) 中的例 13.3.
>
> 图 2.5.1 锯齿形极小化序列 $u_n$
>
> 序列 $\{u_n\}$ 不仅自身有界，而且其逐段导数也是有界的.

> [!example] 例 2.5.32 (平移)
> 设 $f\in L^p(\mathbb{R})\setminus\{0\}$，$1<p<\infty$，令
>
> $$f_n(x)=f(x+n),\quad x\in\mathbb{R},\ n=1,2,\cdots,$$
>
> 则 $f_n\rightharpoonup0$，但 $\|f_n\|=\|f\|$，即 $f_n$ 弱收敛但不强收敛于 $0$.

> [!proof]-
> 应证对任意 $g\in(L^p(\mathbb{R}))^*=L^q(\mathbb{R})$，$1/p+1/q=1$，有
>
> $$\int_{\mathbb{R}}f_n(x)g(x)dx=\int_{\mathbb{R}}f(x+n)g(x)dx\to0,\quad n\to\infty.\qquad(2.5.38)$$
>
> 因 $C_0^\infty(\mathbb{R})$ 在 $L^q(\mathbb{R})$ 中稠密，由 Banach-Steinhaus 定理 (定理 2.3.17)，只需证 (2.5.38) 式对 $\forall g\in C_0^\infty(\mathbb{R})$ 成立即可. 由变量代换，
>
> $$\int_{\mathbb{R}}f(x+n)g(x)dx=\int_{\mathbb{R}}f(x)g(x-n)dx.$$
>
> 为证 (2.5.38) 式，先设 $f\in C_0^\infty(\mathbb{R})$. 令 $\varphi_n(x)=f(x)g(x-n)$，由 $g\in C_0^\infty(\mathbb{R})$ 得，存在常数 $C_g>0$，使得
>
> $$|\varphi_n(x)|\le C_g|f(x)|,\quad x\in\mathbb{R},$$
>
> 且 $\varphi_n(x)\to0$，a.e.，$n\to\infty$. 应用 Lebesgue 控制收敛定理，
>
> $$\begin{aligned}\lim_{n\to\infty}\int_{\mathbb{R}}f_n(x)g(x)dx&=\lim_{n\to\infty}\int_{\mathbb{R}}f(x+n)g(x)dx\\&=\lim_{n\to\infty}\int_{\mathbb{R}}f(x)g(x-n)dx=0,\qquad(2.5.39)\end{aligned}$$
>
> 即 (2.5.38) 式成立.
>
> 对一般 $f$，$\forall\varepsilon>0$，取 $f_\varepsilon\in C_0^\infty(\mathbb{R})$，使
>
> $$\|f-f_\varepsilon\|_{L^p}<\frac{\varepsilon}{2(\|g\|_{L^q}+1)},$$
>
> 则有
>
> $$\begin{aligned}\left|\int_{\mathbb{R}}f_n(x)g(x)dx\right|&=\left|\int_{\mathbb{R}}f(x)g(x-n)dx\right|\\&\le\|f-f_\varepsilon\|_{L^p}\cdot\|g\|_{L^q}+\left|\int_{\mathbb{R}}f_\varepsilon(x)g(x-n)dx\right|\\&\le\frac{\varepsilon}{2}+\left|\int_{\mathbb{R}}f_\varepsilon(x)g(x-n)dx\right|.\qquad(2.5.40)\end{aligned}$$
>
> 结合 (2.5.39) 式和 (2.5.40) 式，存在 $N$，当 $n\ge N$ 时，
>
> $$\left|\int_{\mathbb{R}}f_n(x)g(x)dx\right|<\varepsilon,$$
>
> 即 (2.5.38) 式成立.

> [!example] 例 2.5.33 (集中)
> 考虑由平面上定义的函数空间 $H$，它由旋转不变函数 $f(x,y)=u(r)$ 组成，其中 $(x,y)$ 为平面的直角坐标，$r=\sqrt{x^2+y^2}$，$u\in L^2_{4r dr/(1+r^2)^2}(\mathbb{R}^1_+)$；其导函数 $u'\in L^2_{r dr}(\mathbb{R}^1_+)$，它的范数平方为
>
> $$\|u\|^2=\int_0^\infty|u(r)|^2\frac{4r\,dr}{(1+r^2)^2}+\int_0^\infty|u'(r)|^2\,r\,dr.$$
>
> 给定参数 $\lambda>0$，函数 $\varphi_\lambda(r)=\frac{-1+\lambda^2 r^2}{1+\lambda^2 r^2}$，$\psi_\lambda(r)=\frac{2\lambda r}{1+\lambda^2 r^2}$ 都属于 $H$. 事实上，
>
> $$|\varphi_\lambda(r)|^2+|\psi_\lambda(r)|^2=1,$$
>
> 从而
>
> $$\int_0^\infty(|\varphi_\lambda(r)|^2+|\psi_\lambda(r)|^2)\frac{4r\,dr}{(1+r^2)^2}=2.$$
>
> 又
>
> $$\begin{cases}(\varphi'_\lambda)_r=\dfrac{4\lambda^2 r}{(1+\lambda^2 r^2)^2},\\[10pt](\psi'_\lambda)_r=\dfrac{2\lambda(1-\lambda^2 r^2)}{(1+\lambda^2 r^2)^2},\end{cases}$$
>
> 从而
>
> $$\int_0^\infty(|(\varphi'_\lambda)_r|^2+|(\psi'_\lambda)_r|^2)\,r\,dr=2.$$
>
> 因此，任意一个趋于无穷的序列 $\lambda_j\to\infty$，$(\varphi_{\lambda_j},\psi_{\lambda_j})$ 必有弱收敛子列，但 $\varphi_{\lambda_j}$ 不强收敛. 因为除了 $r=0$ 外，当 $\lambda\to\infty$ 时，$(\varphi_\lambda,\psi_\lambda)$ 逐点收敛到常值函数 $(1,0)$.
>
> 这个例子在几何上反映了这样一个重要事实: 一族能量有界的调和映射，能量可以集中到一点.

**习 题**

> [!exercise] 2.5.1
> 求证: $(l^p)^*=l^q\ (1\le p<\infty,\ 1/p+1/q=1)$.

> [!exercise] 2.5.2
> 设 $C$ 是收敛数列的全体，赋以范数
>
> $$\|\cdot\|:\{\xi_k\}\in C\mapsto\sup_{k\ge1}|\xi_k|,$$
>
> 求证: $C^*=l^1$.

> [!exercise] 2.5.3
> 设 $C_0$ 是以 $0$ 为极限的数列全体，赋以范数
>
> $$\|\cdot\|:\{\xi_k\}\in C\mapsto\sup_{k\ge1}|\xi_k|,$$
>
> 求证: $C_0^*=l^1$.

> [!exercise] 2.5.4
> 求证: 有限维 $B^*$ 空间必是自反的.

> [!exercise] 2.5.5
> 求证: $B$ 空间是自反的，当且仅当它的共轭空间是自反的.

> [!exercise] 2.5.6
> 设 $\mathscr{X}$ 是 $B^*$ 空间，$T$ 是从 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的自然映射，求证: $R(T)$ 是闭的充要条件是 $\mathscr{X}$ 是完备的.

> [!exercise] 2.5.7
> 在 $l^1$ 中定义算子
>
> $$T:(x_1,x_2,\cdots,x_n,\cdots)\mapsto(0,x_1,x_2,\cdots,x_n,\cdots),$$
>
> 求证: $T\in\mathscr{L}(l^1)$ 并求 $T^*$.

> [!exercise] 2.5.8
> 在 $l^2$ 中定义算子
>
> $$T:(x_1,x_2,\cdots,x_n,\cdots)\mapsto(x_1,x_2/2,\cdots,x_n/n,\cdots),$$
>
> 求证: $T\in\mathscr{L}(l^2)$ 并求 $T^*$.

> [!exercise] 2.5.9
> 设 $H$ 是 Hilbert 空间，$A\in\mathscr{L}(H)$ 并满足
>
> $$(Ax,y)=(x,Ay)\quad(\forall x,y\in H),$$
>
> 求证: (1) $A^*=A$;
>
> (2) 若 $R(A)$ 在 $H$ 中稠密，则方程 $Ax=y$ 对 $\forall y\in R(A)$ 存在唯一解.

> [!exercise] 2.5.10
> 设 $\mathscr{X},\mathscr{Y}$ 是 $B^*$ 空间，$A\in\mathscr{L}(\mathscr{X},\mathscr{Y})$，又设 $A^{-1}$ 存在且 $A^{-1}\in\mathscr{L}(\mathscr{Y},\mathscr{X})$，求证:
>
> (1) $(A^*)^{-1}$ 存在，且 $(A^*)^{-1}\in\mathscr{L}(\mathscr{X}^*,\mathscr{Y}^*)$;
>
> (2) $(A^*)^{-1}=(A^{-1})^*$.

> [!exercise] 2.5.11
> 设 $\mathscr{X},\mathscr{Y},\mathscr{Z}$ 是 $B^*$ 空间，而 $B\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 以及 $A\in\mathscr{L}(\mathscr{Y},\mathscr{Z})$，求证: $(AB)^*=B^*A^*$.

> [!exercise] 2.5.12
> 设 $\mathscr{X},\mathscr{Y}$ 是 $B$ 空间，$T$ 是 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子，又设对 $\forall g\in\mathscr{Y}^*$，$g(Tx)$ 是 $\mathscr{X}$ 上的有界线性泛函，求证: $T$ 是连续的.

> [!exercise] 2.5.13
> 设 $\{x_n\}\subset C[a,b]$，$x\in C[a,b]$ 且 $x_n\rightharpoonup x\ (n\to\infty)$，求证:
>
> $$\lim_{n\to\infty}x_n(t)=x(t)\quad(\forall t\in[a,b])\quad\text{(点点收敛).}$$

> [!exercise] 2.5.14
> 已知在 $B^*$ 空间中 $x_n\rightharpoonup x_0\ (n\to\infty)$，求证:
>
> $$\varliminf_{n\to\infty}\|x_n\|\ge\|x_0\|.$$

> [!exercise] 2.5.15
> 设 $H$ 是 Hilbert 空间，$\{e_n\}$ 是 $H$ 的正交规范基，求证: 在 $H$ 中 $x_n\rightharpoonup x_0\ (n\to\infty)$ 的充要条件是
>
> (1) $\|x_n\|$ 有界;
>
> (2) $(x_n,e_k)\to(x_0,e_k)\ (n\to\infty)\ (k=1,2,\cdots)$.

> [!exercise] 2.5.16
> 设 $S_n$ 是 $L^p(\mathbb{R})\ (1\le p<\infty)$ 到自身的算子:
>
> $$(S_n u)(x)=\begin{cases}u(x),&|x|\le n,\\0,&|x|>n,\end{cases}$$
>
> 其中 $u\in L^p(\mathbb{R})$ 是任意的，求证: $\{S_n\}$ 强收敛于恒同算子 $I$，但不一致收敛到 $I$.

> [!exercise] 2.5.17
> 设 $H$ 是 Hilbert 空间，在 $H$ 中 $x_n\rightharpoonup x_0\ (n\to\infty)$，而且 $y_n\to y_0\ (n\to\infty)$，求证: $(x_n,y_n)\to(x_0,y_0)\ (n\to\infty)$.

> [!exercise] 2.5.18
> 设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的正交规范集，求证: 在 $H$ 中 $e_n\rightharpoonup\theta\ (n\to\infty)$，但 $e_n\nrightarrow\theta\ (n\to\infty)$.

> [!exercise] 2.5.19
> 设 $H$ 是 Hilbert 空间，求证: 在 $H$ 中 $x_n\to x\ (n\to\infty)$ 的充要条件是
>
> (1) $\|x_n\|\to\|x\|\ (n\to\infty)$;
>
> (2) $x_n\rightharpoonup x\ (n\to\infty)$.

> [!exercise] 2.5.20
> 求证: 在自反的 $B$ 空间中，集合的弱列紧性与有界性是等价的.

> [!exercise] 2.5.21
> 求证: $B^*$ 空间中的闭凸集是弱闭的，即若 $M$ 是闭凸集，$\{x_n\}\subset M$，且 $x_n\rightharpoonup x_0\ (n\to\infty)$，则 $x_0\in M$.

> [!exercise] 2.5.22
> 设 $\mathscr{X}$ 是自反的 $B$ 空间，$M$ 是 $\mathscr{X}$ 中的有界闭凸集，$\forall f\in\mathscr{X}^*$，求证: $f$ 在 $M$ 上达到最大值和最小值.

> [!exercise] 2.5.23
> 设 $\mathscr{X}$ 是自反的 $B$ 空间，$M$ 是 $\mathscr{X}$ 中的非空闭凸集，求证: $\exists x_0\in M$，使得 $\|x_0\|=\inf\{\|x\|\mid x\in M\}$.

## §6 线性算子的谱

线性代数用较大篇幅研究矩阵的特征值. 在微分方程和积分方程理论中也着重讨论了特征值问题. 这种研究有两方面的重要性:

(1) 直接来自物理学与工程的需要. 例如求振动的频率、判定系统的稳定性等都涉及相应算子的特征值或特征值的分布. 在量子力学里, 能量算符是 $L^2$ 空间上的一个自伴算子, 其特征值对应着该系统束缚态的能级. 特别地, 光谱就是某个算子的特征值的分布.

(2) 通过特征值或者更一般的谱的研究来了解算子本身的结构, 从而用以刻画相应方程的解的构造. 例如, 通过矩阵的特征值, 我们可以刻画这个矩阵的不变子空间, 写出它的标准形, 并且彻底弄清楚相应齐次或非齐次方程解的结构.

### 6.1 定义与例

现在我们在维数 $\ge 1$ 的复 Banach 空间 $\mathscr{X}$ 上, 考察闭线性算子 $A: D(A)\subset\mathscr{X}\to\mathscr{X}$. 仿照矩阵, $\lambda\in\mathbb{C}$ 称为是 $A$ 的特征值, 是指 $\exists x_0\in D(A)\backslash\{\theta\}$, 适合:

$Ax_0=\lambda x_0$,

并称相应的 $x_0$ 为对应于 $\lambda$ 的特征元.

从线性代数知道, 当 $\dim\mathscr{X}<\infty$ 时, $\forall\lambda\in\mathbb{C}$ 只有两种可能性:

(1) $\lambda$ 是特征值;

(2) $(\lambda I-A)^{-1}$ 作为矩阵存在, 即 $(\lambda I-A)^{-1}\in\mathscr{L}(\mathscr{X})$.

> [!definition] 定义 2.6.1
> 设 $\mathscr{X}$ 是 $B$ 空间, $A: D(A)\subset\mathscr{X}\to\mathscr{X}$ 是闭线性算子, 称集合
>
> $\rho(A)\triangleq\{\lambda\in\mathbb{C}\mid (\lambda I-A)^{-1}\in\mathscr{L}(\mathscr{X})\}$
>
> 为 $A$ 的预解集, $\rho(A)$ 中的 $\lambda$ 称为 $A$ 的正则值.

由定义 2.6.1, 在 $\dim\mathscr{X}<\infty$ 的情形下, $\forall\lambda\in\mathbb{C}$, 它或是 $A$ 的特征值, 或是正则值, 二者必居其一.

但当 $\dim\mathscr{X}=\infty$ 时, 情况就复杂多了. 从逻辑上分, 有如下几种情形:

(1) $(\lambda I-A)^{-1}$ 不存在. 这相当于 $\lambda$ 是特征值.

(2) $(\lambda I-A)^{-1}$ 存在, 且值域 $R(\lambda I-A)\triangleq(\lambda I-A)D(A)=\mathscr{X}$. 这相当于 $\lambda$ 是正则值 (Banach 逆算子定理 (定理 2.3.8)).

(3) $(\lambda I-A)^{-1}$ 存在, $R(\lambda I-A)\neq\mathscr{X}$, 但 $\overline{R(\lambda I-A)}=\mathscr{X}$. 对于这部分 $\lambda$, 我们称其为 $A$ 的连续谱.

(4) $(\lambda I-A)^{-1}$ 存在, 且 $R(\lambda I-A)\neq\mathscr{X}$, 这部分 $\lambda$ 称为 $A$ 的剩余谱.

记 $\sigma(A)\triangleq\mathbb{C}\backslash\rho(A)$, 并称 $\sigma(A)$ 为 $A$ 的谱集. $\sigma(A)$ 中的点称为 $A$ 的谱点. 对应于情形 (1) 中的那部分 $\lambda$ 的集合, 记作 $\sigma_p(A)$, 称为 $A$ 的点谱. $A$ 的连续谱记作 $\sigma_c(A)$, $A$ 的剩余谱记作 $\sigma_r(A)$. 因此有:

$\sigma(A)=\sigma_p(A)\cup\sigma_c(A)\cup\sigma_r(A)$.

以下举例说明, 当 $\dim\mathscr{X}=\infty$ 时, 上述各种类型的谱都可能出现.

> [!example] 例 2.6.2
> 设 $\mathscr{X}=L^2[0,1]$, 考虑算子 $A: u(t)\mapsto -d^2/dt^2\,u(t)$. 为了得到闭算子, 我们需要明确其定义域. 对于 $u\in\mathscr{X}$, 有 Fourier 级数展开
>
> $u(t)=\sum_{n=-\infty}^{\infty}u_n e^{2\pi i n t}$,
>
> 其中
>
> $u_n=\int_0^1 u(t)e^{-2\pi i n t}dt$ $(n\in\mathbb{Z})$.
>
> 现在定义
>
> $(Au)(t)=\sum_{n=-\infty}^{\infty}(2\pi n)^2 u_n e^{2\pi i n t}$,
>
> 容易看出, $u\in C^2[0,1]$ 时, $(Au)(t)=-d^2/dt^2\,u(t)$. 令
>
> $D(A)=\{u\in\mathscr{X}\mid Au\in\mathscr{X}\}$,
>
> 则 $A: D(A)\to\mathscr{X}$ 是闭线性算子且
>
> $\sigma(A)=\sigma_p(A)=\{(2n\pi)^2\mid n=0,1,2,\ldots\}$.

> [!proof]-
> 一方面, 我们有
>
> $-d^2/dt^2\,\{\sin 2n\pi t,\cos 2n\pi t\}=(2n\pi)^2\{\sin 2n\pi t,\cos 2n\pi t\}$ $(n=0,1,2,\ldots)$,
>
> 所以 $(2n\pi)^2\in\sigma_p(A)$, $n=0,1,2,\ldots$.
>
> 另一方面, 当 $\lambda\neq(2n\pi)^2$ 时, $\forall f\in L^2[0,1]$, 方程
>
> $(-d^2/dt^2-\lambda)u(t)=f(t)$
>
> 有唯一解
>
> $u(t)=\sum_{n=-\infty}^{\infty}\frac{C_n}{(2n\pi)^2-\lambda}e^{2\pi i n t}$,
>
> 其中
>
> $C_n=\int_0^1 f(t)e^{-2\pi i n t}dt$ $(n\in\mathbb{Z})$.
>
> 不难验证: $u\in D(A)$, 并且
>
> $\|u\|^2=\sum_{n=-\infty}^{\infty}\frac{|C_n|^2}{|(2n\pi)^2-\lambda|^2}\le M_\lambda^2\sum_{n=-\infty}^{\infty}|C_n|^2=M_\lambda^2\|f\|^2$,
>
> 其中
>
> $M_\lambda=\sup_{n\in\mathbb{Z}}\frac{1}{|(2n\pi)^2-\lambda|}<\infty$.

> [!example] 例 2.6.3
> 设 $\mathscr{X}=C[0,1]$, $A: u(t)\mapsto t\cdot u(t)$. 这是一个有界线性算子, 并且
>
> $\sigma(A)=\sigma_r(A)=[0,1]$.

> [!proof]-
> $\forall\lambda\notin[0,1]$, 乘法算子 $(\lambda-t)^{-1}$ 是有界线性算子, 满足
>
> $\left\|\frac{1}{\lambda-t}x(t)\right\|\le\sup_{t\in[0,1]}\frac{1}{|\lambda-t|}\|x\|$.
>
> 而 $\forall\lambda\in[0,1]$, 方程
>
> $(\lambda-t)u(t)=0$
>
> 只有 $\theta$ 解: $u(t)\equiv 0$ $(\forall t\in[0,1])$, 并且为了 $v\in R(\lambda I-A)$ 必须 $v(\lambda)=0$, 从而 $1\notin R(\lambda I-A)$. 这就证明了:
>
> $[0,1]\subset\sigma_r(A)\subset\sigma(A)\subset[0,1]$,
>
> 即得结论.

> [!example] 例 2.6.4
> 设 $\mathscr{X}=L^2[0,1]$, $A: u(t)\mapsto tu(t)$, 则 $A$ 是有界线性算子, 并且
>
> $\sigma(A)=\sigma_c(A)=[0,1]$.

> [!proof]-
> 和例 2.6.3 类似, 仅有的差别在于对 $R(\lambda I-A)$ 的刻画. 现在, 因为 $L^2[0,1]$ 与 $C[0,1]$ 的拓扑不同, 从而闭包是不同的. 事实上, 一方面仍有 $1\notin R(\lambda I-A)$, 这是因为 $(\lambda-t)^{-1}\notin L^2[0,1]$; 另一方面, 注意到 $R(\lambda I-A)$ 中的函数在 $t=\lambda$ 的任一个小邻域外可以是任意的 $L^2[0,1]$ 函数. 从而 $\overline{R(\lambda I-A)}=L^2[0,1]$.

### 6.2 Gelfand 定理

现在我们来研究谱集 $\sigma(A)$. 当 $\dim\mathscr{X}<\infty$ 时, 我们知道 $\sigma(A)\neq\emptyset$. 这是因为矩阵的特征值就是特征多项式

$\det(\lambda I-A)=0$

的根, 利用代数基本定理, 特征值总是存在的. 但是这个方法不能直接推广到无穷维空间. 我们只好退一步看, 多项式根的存在性可以用解析函数的 Liouville 定理得证. 现在我们也将设法利用解析性.

> [!definition] 定义 2.6.5
> 算子值函数 $R_\lambda(A): \rho(A)\to\mathscr{L}(\mathscr{X})$ 定义为
>
> $\lambda\mapsto(\lambda I-A)^{-1}$ $(\forall\lambda\in\rho(A))$,
>
> 称为 $A$ 的预解式.

我们要想证明:

(1) $\rho(A)$ 是开集;

(2) $R_\lambda(A)$ 是 $\rho(A)$ 内的算子值解析函数 (定义见习题 2.4.17).

为证 (1), 需要下面的引理.

> [!lemma] 引理 2.6.6
> 设 $T\in\mathscr{L}(\mathscr{X})$, $\|T\|<1$, 则 $(I-T)^{-1}\in\mathscr{L}(\mathscr{X})$, 并且
>
> $\|(I-T)^{-1}\|\le\frac{1}{1-\|T\|}$. (2.6.1)

> [!proof]-
> 这是压缩映射原理 (定理 1.1.12) 的推论. 事实上, $\|(I-T)^{-1}\|\le M\iff\forall y\in\mathscr{X}$, $\exists!x\in\mathscr{X}$, 使得 $x$ 是 $Sx\triangleq y+Tx$ 的不动点, 并且 $\|x\|\le M\|y\|$. 如今
>
> $\|Sx-Sx'\|=\|Tx-Tx'\|\le\|T\|\cdot\|x-x'\|$
>
> $(\forall x,x'\in\mathscr{X})$,
>
> 即 $S$ 是压缩映射. 从而有唯一 $x=Sx=y+Tx$, 并且
>
> $\|x\|\le\frac{\|y\|}{1-\|T\|}$.

> [!remark]
> 事实上，我们有
>
> $x=\lim_{n\to\infty}S^n y=\sum_{k=0}^\infty T^k y$, (2.6.2)
>
> 即当 $\|T\|<1$ 时，
>
> $(I-T)^{-1}=\sum_{k=0}^\infty T^k$. (2.6.3)
>
> 称 $\sum_{k=0}^\infty T^k$ 为 Neuman 级数．本引理亦可直接通过 (2.6.2) 式与 (2.6.3) 式来验证．

> [!corollary] 推论 2.6.7
> 设 $A$ 是闭线性算子，则 $\rho(A)$ 是开集．

> [!proof]-
> 设 $\lambda_0\in\rho(A)$，则
>
> $\lambda I-A=(\lambda-\lambda_0)I+(\lambda_0 I-A)$
>
> $=(\lambda_0 I-A)[I+(\lambda-\lambda_0)(\lambda_0 I-A)^{-1}]$.
>
> 当 $|\lambda-\lambda_0|<\|(\lambda_0 I-A)^{-1}\|^{-1}$ 时，
>
> $B\triangleq[I+(\lambda-\lambda_0)(\lambda_0 I-A)^{-1}]^{-1}\in\mathscr{L}(\mathscr{X})$.
>
> 从而
>
> $(\lambda I-A)^{-1}=B R_{\lambda_0}(A)\in\mathscr{L}(\mathscr{X})$, (2.6.4)
>
> 即得 $\lambda\in\rho(A)$. $\blacksquare$

以下考虑对 $R_\lambda(A)$ 求导．

> [!lemma] 引理 2.6.8 (第一预解公式)
> 设 $\lambda,\mu\in\rho(A)$，则有
>
> $R_\lambda(A)-R_\mu(A)=(\mu-\lambda)R_\lambda(A)R_\mu(A)$. (2.6.5)

> [!proof]-
> 直接计算，
>
> $(\lambda I-A)^{-1}=(\lambda I-A)^{-1}(\mu I-A)(\mu I-A)^{-1}$
>
> $=(\lambda I-A)^{-1}[(\mu-\lambda)I+\lambda I-A](\mu I-A)^{-1}$
>
> $=(\mu-\lambda)(\lambda I-A)^{-1}(\mu I-A)^{-1}+(\mu I-A)^{-1}$. $\blacksquare$

> [!theorem] 定理 2.6.9
> 预解式 $R_\lambda(A)$ 在 $\rho(A)$ 内是算子值解析函数．

> [!proof]-
> (1) 先证 $R_\lambda(A)$ 连续．设 $\lambda_0\in\rho(A)$，由 (2.6.4) 式及 (2.6.1) 式，我们有
>
> $\|R_\lambda(A)\|\le\|R_{\lambda_0}(A)\|\cdot\|[I+(\lambda-\lambda_0)R_{\lambda_0}(A)]^{-1}\|$
>
> $\le 2\|R_{\lambda_0}(A)\|$ (只要 $|\lambda-\lambda_0|<1/(2\|R_{\lambda_0}(A)\|)$).
>
> 再按第一预解公式 (引理 2.6.8)，便得
>
> $\|R_\lambda(A)-R_{\lambda_0}(A)\|\le|\lambda-\lambda_0|\cdot\|R_\lambda(A)\|\cdot\|R_{\lambda_0}(A)\|$
>
> $\le 2\|R_{\lambda_0}(A)\|^2|\lambda-\lambda_0|\to 0$ $(\lambda\to\lambda_0)$.
>
> (2) 再证可微性．又应用第一预解公式 (引理 2.6.8)，
>
> $\lim_{\lambda\to\lambda_0}[R_\lambda(A)-R_{\lambda_0}(A)]/(\lambda-\lambda_0)$
>
> $=-\lim_{\lambda\to\lambda_0}R_\lambda(A)\cdot R_{\lambda_0}(A)=-(R_{\lambda_0}(A))^2$. $\blacksquare$

现在来证谱点的存在性定理．

> [!theorem] 定理 2.6.10
> 设 $A$ 是有界线性算子，则 $\sigma(A)\neq\emptyset$.

> [!proof]-
> 用反证法．倘若 $\rho(A)=\mathbb{C}$，那么 $R_\lambda(A)$ 在 $\mathbb{C}$ 上解析，并且由 (2.6.3) 式，当 $|\lambda|>\|A\|$ 时，有
>
> $R_\lambda(A)=\sum_{n=0}^\infty\frac{1}{\lambda^{n+1}}A^n$, (2.6.6)
>
> 以及
>
> $\|R_\lambda(A)\|\le\frac{1}{|\lambda|-\|A\|}$. (2.6.7)
>
> 因此，$\|R_\lambda(A)\|$ 在复平面上是有界的．
>
> 为了导出矛盾，对 $\forall f\in\mathscr{L}(\mathscr{X})^*$，考察 (数值) 解析函数
>
> $u_f(\lambda)\triangleq f(R_\lambda(A))$.
>
> 因为它在全平面是有界的解析函数，按 Liouville 定理，$u_f(\lambda)$ 是仅依赖于 $f$ 的常值函数 (与 $\lambda$ 无关)．再由推论 2.4.5，$R_\lambda(A)$ 是与 $\lambda$ 无关的常值算子．依第一预解公式 (引理 2.6.8)，这显然是不可能的． $\blacksquare$

以下估计谱集的范围．

利用等式 (2.6.6) 以及估计式 (2.6.7)，可见 $\sigma(A)$ 包含在闭球 $\bar{B}(0,\|A\|)$ 内．再联合推论 2.6.7 与定理 2.6.10 可见 $\sigma(A)$ 是一个非空紧集．

> [!definition] 定义 2.6.11
> 设 $A\in\mathscr{L}(\mathscr{X})$，称数
>
> $r_\sigma(A)\triangleq\sup\{|\lambda|\mid\lambda\in\sigma(A)\}$
>
> 为 $A$ 的谱半径．

由定义 2.6.11，显然有 $r_\sigma(A)\le\|A\|$．我们想得到更精确的估计式．利用等式 (2.6.6) 以及 Cauchy–Hadamard 收敛半径公式可见，当

$|\lambda|>\varlimsup_{n\to\infty}\|A^n\|^{1/n}$

时，$R_\lambda(A)\in\mathscr{L}(\mathscr{X})$．由此可见

$r_\sigma(A)\le\varlimsup_{n\to\infty}\|A^n\|^{1/n}$. (2.6.8)

我们将指出 (2.6.8) 式是 $r_\sigma(A)$ 的最佳估计．记 $a\triangleq r_\sigma(A)$，我们将证：

$\varlimsup_{n\to\infty}\|A^n\|^{1/n}\le a$. (2.6.9)

为此任取 $f\in\mathscr{L}(\mathscr{X})^*$，做复函数

$u_f(\lambda)\triangleq f(R_\lambda(A))$.

显然 $u_f(\lambda)$ 在 $|\lambda|>a$ 解析．又因为 $u_f(\lambda)$ 有 Laurent 展开式

$u_f(\lambda)=\sum_{n=0}^\infty\frac{1}{\lambda^{n+1}}f(A^n)$，

利用解析函数 Laurent 展开式与收敛半径的关系，可见 $\forall\varepsilon>0$，

$\sum_{n=0}^\infty\frac{1}{(a+\varepsilon)^{n+1}}|f(A^n)|<\infty$.

从而

$|f(\frac{A^n}{(a+\varepsilon)^{n+1}})|$ $(\forall f\in\mathscr{L}(\mathscr{X})^*)$

有界．应用共鸣定理 (定理 2.3.16)，有常数 $M>0$，使得

$\frac{1}{(a+\varepsilon)^{n+1}}\|A^n\|\le M$.

从而

$\varlimsup_{n\to\infty}\|A^n\|^{1/n}\le a+\varepsilon$.

再由 $\varepsilon>0$ 的任意性，即得 (2.6.9) 式．联合 (2.6.8) 式与 (2.6.9) 式得

$r_\sigma(A)=\varlimsup_{n\to\infty}\|A^n\|^{1/n}$. (2.6.10)

进一步问，(2.6.10) 式中的上极限符号 "$\varlimsup$" 能否用极限符号 "$\lim$" 代替呢？是可以的．事实上，对于 $\forall\lambda\in\mathbb{C}$，我们有

$\lambda^n I-A^n=(\lambda I-A)P_\lambda(A)=P_\lambda(A)(\lambda I-A)$，

其中

$P_\lambda(A)=\sum_{j=1}^n\lambda^{j-1}A^{n-j}$.

于是从 $\lambda^n\in\rho(A^n)$ 可推出 $\lambda\in\rho(A)$．这表明，$\forall\lambda\in\sigma(A)$ 蕴含 $\lambda^n\in\sigma(A^n)$．从而有

$|\lambda^n|\le\|A^n\|$，即得 $|\lambda|\le\varliminf_{n\to\infty}\|A^n\|^{1/n}$.

因此

$r_\sigma(A)\le\varliminf_{n\to\infty}\|A^n\|^{1/n}$. (2.6.11)

联合 (2.6.10) 式与 (2.6.11) 式便知 $\lim_{n\to\infty}\|A^n\|^{1/n}$ 存在，且等于 $r_\sigma(A)$．

总结起来，有下面的定理．

> [!theorem] 定理 2.6.12 (Gelfand)
> 设 $\mathscr{X}$ 是 $B$ 空间，$A\in\mathscr{L}(\mathscr{X})$，那么
>
> $r_\sigma(A)=\lim_{n\to\infty}\|A^n\|^{1/n}$.

> [!remark]
> 定理 2.6.10 与定理 2.6.12 的结论可以推广到一般的 Banach 代数上去，参看本书下册第五章．

### 6.3　例子

最后我们考察几个算子的谱集．

> [!example] 例 2.6.13
> 在空间 $\ell^2$ 上，考察右推移算子
>
> $A:x=(x_1,x_2,\cdots,x_n,\cdots)\mapsto(0,x_1,x_2,\cdots,x_n,\cdots)$.
>
> 我们将证：
>
> $\sigma_p(A)=\varnothing$，
> $\sigma_r(A)=\{\lambda\in\mathbb{C}\mid|\lambda|<1\}$，
> $\sigma_c(A)=\{\lambda\in\mathbb{C}\mid|\lambda|=1\}$.
>
> > [!proof]-
> > 因为 $\|A\|=1$，由 Gelfand 定理 (定理 2.6.12)，
> >
> > $\sigma(A)\subset\{\lambda\in\mathbb{C}\mid|\lambda|\le 1\}$.
> >
> > 容易验证其共轭算子是
> >
> > $A^*:\ell^2\to\ell^2$
> > $A^*x=(x_2,x_3,\cdots,x_{n+1},\cdots)$，
> >
> > 则对 $\lambda\in\mathbb{C}$，下列等式成立：
> >
> > $((\lambda I-A)x,y)=(x,(\bar{\lambda}I-A^*)y)\quad(\forall x,y\in\ell^2)$.
> >
> > 由此即得
> >
> > $y\in\overline{R(\lambda I-A)}^\perp=R(\lambda I-A)^\perp\iff(\bar{\lambda}I-A^*)y=0$,
> >
> > 即
> >
> > $\overline{R(\lambda I-A)}^\perp=N(\bar{\lambda}I-A^*)$.
> >
> > (1) $\sigma_p(A)=\varnothing$.
> > 设 $(\lambda I-A)x=0$, 则 $\lambda x_n=x_{n-1}, n\ge 2$, $\lambda x_1=0$, 于是
> >
> > $\lambda\neq0\implies x=0$,
> > $\lambda=0\implies x=0$,
> >
> > 即 $(\lambda I-A)^{-1}$ 总存在. 故 (1) 得证.
> >
> > (2) $\sigma_r(A)=\{\lambda\in\mathbb{C}\mid|\lambda|<1\}$, $\sigma_c(A)=\{\lambda\in\mathbb{C}\mid|\lambda|=1\}$.
> > 由前面讨论, 需证
> >
> > $|\lambda|<1$, $\overline{R(\lambda I-A)}^\perp=N(\bar{\lambda}I-A^*)\neq\{0\}$,
> > $|\lambda|=1$, $R(\lambda I-A)^\perp=N(\bar{\lambda}I-A^*)=\{0\}$.
> >
> > 为此先求解 $(\bar{\lambda}I-A^*)x=0$, 即
> >
> > $\bar{\lambda}x_n=x_{n+1},\quad n=1,2,\cdots$
> >
> > 或
> >
> > $x_{n+1}=\bar{\lambda}^n x_1,\quad n=1,2,\cdots$.
> >
> > 从而, 当 $|\lambda|<1$ 时,
> >
> > $N(\bar{\lambda}I-A^*)=\{c(1,\bar{\lambda},\bar{\lambda}^2,\cdots,\bar{\lambda}^n,\cdots)\mid c\in\mathbb{C}\}$,
> >
> > 即 $N(\bar{\lambda}I-A^*)\neq\{0\}$, $R(\lambda I-A)$ 在 $\ell^2$ 中不稠密, $\lambda\in\sigma_r(A)$, 所以
> >
> > $\{\lambda\in\mathbb{C}\mid|\lambda|<1\}\subset\sigma_r(A)$, $\sigma(A)=\{\lambda\in\mathbb{C}\mid|\lambda|\le 1\}$.
> >
> > 当 $|\lambda|=1$ 时, $x=x_1(1,\bar{\lambda},\cdots,\bar{\lambda}^n,\cdots)\neq0\implies x\notin\ell^2$. 因为 $|\bar{\lambda}^n|=|\bar{\lambda}|^n=1\nrightarrow0$, $n\to\infty$, 从而 $N(\bar{\lambda}I-A^*)=\{0\}$, 即 $R(\bar{\lambda}I-A)$ 在 $\ell^2$ 中稠密. 因为 $\lambda\in\sigma(A)$, 所以 $\lambda\in\sigma_c(A)$.
> > 综合 (1), (2), 结论得证.

> [!example] 例 2.6.14
> 设 $(\mathscr{X},(\cdot,\cdot))$ 是 Hilbert 空间, $A\in\mathscr{L}(\mathscr{X})$ 称为对称算子, 若 $A^*=A$, 即
>
> $(Ax,y)=(x,Ay)\quad(\forall x,y\in\mathscr{X})$. $\quad$(2.6.12)
>
> 若 $A$ 是对称算子, 则 $\sigma(A)\subset\mathbb{R}$, 且 $\sigma_r(A)=\varnothing$.
>
> > [!proof]-
> > 由 (2.6.12) 式易知 $(Ax,x)\in\mathbb{R}$, $\forall x\in\mathscr{X}$. 设 $\lambda=a+ib$, $b\neq0$.
> > 我们要证: $\lambda I-A$ 存在有界逆. 因
> >
> > $\|(\lambda I-A)x\|^2=\|(aI-A)x\|^2+b^2\|x\|^2$, $\quad$(2.6.13)
> >
> > 所以 $N(\lambda I-A)=\{0\}$, 即 $\lambda I-A$ 为单射.
> >
> > 再证 $\lambda I-A$ 是满射, 即 $R(\lambda I-A)=\mathscr{X}$. 若其成立, 则由 Banach 逆算子定理 (定理 2.3.8), $\lambda I-A$ 有有界逆, 即 $\lambda\notin\sigma(A)$. 为此先证: $R(\lambda I-A)$ 是闭的. 设 $x_n\in\mathscr{X}$, 且
> >
> > $(\lambda I-A)x_n=y_n\to y\quad(n\to\infty)$.
> >
> > 由 (2.6.13) 式得
> >
> > $\|(\lambda I-A)(x_n-x_m)\|^2\ge b^2\|x_n-x_m\|^2$,
> >
> > 即 $\{x_n\}$ 是 $\mathscr{X}$ 中的 Cauchy 列, 可设 $x_n\to x$, $n\to\infty$. 这时有
> >
> > $y_n=(\lambda I-A)x_n\to(\lambda I-A)x=y\quad(n\to\infty)$,
> >
> > 所以
> >
> > $R(\lambda I-A)=\overline{R(\lambda I-A)}$.
> >
> > 再证 $R(\lambda I-A)^\perp=\{0\}$. 设 $y\in R(\lambda I-A)^\perp$, 即
> > $((\lambda I-A)x,y)=0\quad(\forall x\in\mathscr{X})$.
> >
> > 因 $A$ 对称, 有
> > $(x,(\bar{\lambda}I-A)y)=0\quad(\forall x\in\mathscr{X})$.
> >
> > 所以 $(\bar{\lambda}I-A)y=0$, 即 $y\in N(\bar{\lambda}I-A)$. 在 (2.6.13) 式中用 $\bar{\lambda}$ 换 $\lambda$ 得, $N(\bar{\lambda}I-A)=\{0\}$, 必有 $y=0$, 即
> > $R(\lambda I-A)^\perp=\{0\}$.
> >
> > 设 $\lambda\in\sigma(A)$, 但 $\lambda$ 不是点谱, 即 $N(\lambda I-A)=\{0\}$. 这时,
> > $R(\lambda I-A)^\perp=N(\bar{\lambda}I-A^*)=N(\lambda I-A)=\{0\}$,
> > 即 $R(\lambda I-A)$ 在 $\mathscr{X}$ 中稠密, 从而 $\lambda\in\sigma_c(A)$, 即 $\sigma_r(A)=\varnothing$.

> [!example] 例 2.6.15
> 设 $(\mathscr{X},(\cdot,\cdot))$ 是 Hilbert 空间, $U\in\mathscr{L}(\mathscr{X})$ 称为酉算子, 若
>
> $(Ux,Uy)=(x,y)$, $\forall x,y\in\mathscr{X}$, 以及 $R(U)=\mathscr{X}$. $\quad$(2.6.14)
>
> 若 $U$ 是酉算子, 则 $\sigma(U)\subset S^1=\{e^{i\theta}\mid\theta\in[0,2\pi]\}$, 且 $\sigma_r(U)=\varnothing$.
>
> > [!proof]-
> > 由 (2.6.14) 式得 $\|Ux\|^2=\|x\|^2$, 所以 $U$ 是单射, 且 $\|U\|=1$, $\sigma(U)\subset\{\lambda\in\mathbb{C}\mid|\lambda|\le 1\}$.
> >
> > 又由 (2.6.14) 式, $U$ 是满射, 根据 Banach 逆算子定理 (定理 2.3.8), $U$ 存在有界逆 $U^{-1}$ 且 $\|U^{-1}\|=1$. 设 $|\lambda|<1$,
> >
> > $\lambda I-U=-U(I-\lambda U^{-1})$. $\quad$(2.6.15)
> >
> > 因 $\|\lambda U^{-1}\|=|\lambda|\cdot\|U^{-1}\|=|\lambda|<1$, $I-\lambda U^{-1}$ 存在有界逆, 由 (2.6.15) 式知, $\lambda I-U$ 存在有界逆, 且 $(\lambda I-U)^{-1}=(I-\lambda U^{-1})^{-1}U^{-1}$, 即 $\lambda\notin\sigma(U)$.
> >
> > 因此 $\sigma(U)\subset\{\lambda\in\mathbb{C}\mid|\lambda|=1\}$.
> >
> > 设 $\lambda\in\sigma(U)$, 但 $\lambda$ 不是点谱, 即 $N(\lambda I-U)=\{0\}$. 这时可以验证
> > $R(\lambda I-U)^\perp=N(\bar{\lambda}I-U^{-1})=N(\lambda I-U)=\{0\}$,
> > 即 $R(\lambda I-U)$ 在 $\mathscr{X}$ 中稠密, 从而 $\lambda\in\sigma_c(U)$, 即 $\sigma_r(U)=\varnothing$.

算子谱论是算子理论的中心内容. 在本册第三章和下册第五、六章我们还要再深入讨论它.

## 习 题

2.6.1 设 $\mathscr{X}$ 是 $B$ 空间, 求证: $\mathscr{L}(\mathscr{X})$ 中可逆 (存在有界逆) 算子集是开的.

2.6.2 设 $A$ 是闭线性算子, $\lambda_1,\lambda_2,\cdots,\lambda_n\in\sigma_p(A)$ 两两互异, 又设 $x_i$ 是对应于 $\lambda_i$ 的特征元 $(i=1,2,\cdots,n)$. 求证: $\{x_1,x_2,\cdots,x_n\}$ 是线性无关的.

2.6.3 在双边 $\ell^2$ 空间上, 考察右推移算子

$A:x=(\cdots,\xi_{-n},\xi_{-n+1},\cdots,\xi_{-1},\xi_0,\xi_1,\cdots,\xi_{n-1},\xi_n,\cdots)\in\ell^2$
$\quad\mapsto Ax=(\cdots,\eta_{-n},\eta_{-n+1},\cdots,\eta_{-1},\eta_0,\eta_1,\cdots,\eta_{n-1},\eta_n,\cdots)$,

其中 $\eta_m=\xi_{m-1}\;(m\in\mathbb{Z})$. 求证: $\sigma_c(A)=\sigma(A)=\text{单位圆周}$.

2.6.4 在 $\ell^2$ 空间上, 考察左推移算子

$A:(\xi_1,\xi_2,\cdots)\mapsto(\xi_2,\xi_3,\cdots)$.

求证: $\sigma_p(A)=\{\lambda\in\mathbb{C}\mid|\lambda|<1\}$, $\sigma_c(A)=\{\lambda\in\mathbb{C}\mid|\lambda|=1\}$, 并且 $\sigma(A)=\sigma_p(A)\cup\sigma_c(A)$.
