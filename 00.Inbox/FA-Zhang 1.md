# 泛函分析讲义（上册）



> 张恭庆、林源渠 编著，郭懋正 修订

> 第二版



---



# 第一章 度量空间

## §1 压缩映射原理

度量空间(metric space)又称距离空间, 是一种拓扑空间, 其上的拓扑由指定的一个距离决定.

> [!definition] 定义 1.1.1
> 设 $\mathscr{X}$ 是一个非空集. $\mathscr{X}$ 叫作**度量空间**, 是指在 $\mathscr{X}$ 上定义了一个双变量的实值函数 $\rho(x,y)$, 满足下列三个条件:
> (1) $\rho(x,y) \geqslant 0$, 而且 $\rho(x,y) = 0$, 当且仅当 $x = y$;
> (2) $\rho(x,y) = \rho(y,x)$;
> (3) $\rho(x,z) \leqslant \rho(x,y) + \rho(y,z) \quad (\forall x,y,z \in \mathscr{X})$.
>
> 这里 $\rho$ 叫作 $\mathscr{X}$ 上的一个**距离**, 以 $\rho$ 为度量的度量空间 $\mathscr{X}$ 记作 $(\mathscr{X},\rho)$.

> [!remark]
> 距离概念是欧氏空间中两点间距离的抽象. 事实上, 如果对 $\forall x = (x_1, x_2, \cdots, x_n), y = (y_1, y_2, \cdots, y_n) \in \mathbb{R}^n$, 令
> $$\rho(x,y) = \left[(x_1-y_1)^2 + \cdots + (x_n-y_n)^2\right]^{\frac{1}{2}}. \qquad (1.1.1)$$
> 容易看到条件(1),(2),(3)都满足. 以后当说到欧氏空间时, 我们始终用这个 $\rho$ 规定其上的距离.

> [!example] 例 1.1.2（空间 $C[a,b]$）
> 区间 $[a,b]$ 上的连续函数全体记为 $C[a,b]$, 按距离
> $$\rho(x,y) \triangleq \max_{a \leqslant t \leqslant b} |x(t) - y(t)| \qquad (1.1.2)$$
> 形成度量空间 $(C[a,b],\rho)$, 简记作 $C[a,b]$. 以后当说到连续函数空间 $C[a,b]$ 时, 我们始终用(1.1.2)式规定的 $\rho$ 作为其上的距离, 除非另外说明.

引进距离的目的是刻画收敛.

> [!definition] 定义 1.1.3
> 度量空间 $(\mathscr{X},\rho)$ 上的点列 $\{x_n\}$ 叫作**收敛**到 $x_0$ 是指: $\rho(x_n,x_0) \to 0 \,(n \to \infty)$. 这时记作 $\lim\limits_{n\to\infty} x_n = x_0$, 或简单地记作 $x_n \to x_0$.

> [!remark]
> 在 $C[a,b]$ 中点列 $\{x_n\}$ 收敛到 $x_0$ 是指: $\{x_n(t)\}$ 一致收敛到 $x_0(t)$.

与实数集合一样, 对于一般的度量空间可引进闭集和完备性等概念.

> [!definition] 定义 1.1.4
> 度量空间 $(\mathscr{X},\rho)$ 中的一个子集 $E$ 称为**闭集**, 是指: $\forall \{x_n\} \subset E$, 若 $x_n \to x_0$, 则 $x_0 \in E$.

> [!definition] 定义 1.1.5
> 度量空间 $(\mathscr{X},\rho)$ 上的点列 $\{x_n\}$ 叫作**基本列**, 是指: $\rho(x_n,x_m) \to 0 \,(n,m \to \infty)$. 这也就是说: $\forall \varepsilon > 0, \exists N(\varepsilon)$, 使得 $m,n \geqslant N(\varepsilon) \Rightarrow \rho(x_n,x_m) < \varepsilon$. 如果空间中所有基本列都是收敛列, 那么就称该空间是**完备的**.

> [!example] 例 1.1.6
> $(\mathbb{R}^n,\rho)$ 是完备的, 其中 $\rho$ 按(1.1.1)式定义.

> [!example] 例 1.1.7
> $(C[a,b],\rho)$ 是完备的.

> [!proof]-
> 设 $\{x_n\}$ 是 $(C[a,b],\rho)$ 中的一串基本列, 那么 $\forall \varepsilon > 0$, $\exists N(\varepsilon)$, 使得对 $\forall m,n \geqslant N(\varepsilon)$, 有
> $$\rho(x_m,x_n) = \max_{a \leqslant t \leqslant b} |x_m(t) - x_n(t)| < \varepsilon.$$
> 因此, 对 $\forall t \in [a,b]$,
> $$|x_m(t) - x_n(t)| < \varepsilon \quad (\forall m,n \geqslant N(\varepsilon)). \qquad (1.1.3)$$
> 固定 $t \in [a,b]$, 我们看到数列 $\{x_n(t)\}$ 是基本的, 从而极限 $\lim\limits_{n\to\infty} x_n(t)$ 存在. 让我们用 $x_0(t)$ 表示此极限, 在(1.1.3)式中令 $m \to \infty$ 得到 $|x_0(t) - x_n(t)| \leqslant \varepsilon \,(\forall n \geqslant N(\varepsilon))$. 由此可见 $x_n(t)$ 一致收敛到 $x_0(t)$, 从而 $x_0(t)$ 连续且在 $C[a,b]$ 中 $x_n$ 收敛到 $x_0$. $\blacksquare$

给定度量空间 $(\mathscr{X},\rho), (\mathscr{Y},r)$, 考察映射 $T: \mathscr{X} \to \mathscr{Y}$.

> [!definition] 定义 1.1.8
> 设 $T: (\mathscr{X},\rho) \to (\mathscr{Y},r)$ 是一个映射, 称它是连续的, 如果对于 $\mathscr{X}$ 中的任意点列 $\{x_n\}$ 和点 $x_0$,
> $$\rho(x_n,x_0) \to 0 \Longrightarrow r(Tx_n,Tx_0) \to 0 \quad (n \to \infty).$$

> [!proposition] 命题 1.1.9
> 为了 $T: (\mathscr{X},\rho) \to (\mathscr{Y},r)$ 是连续的, 必须且只须 $\forall \varepsilon > 0, \forall x_0 \in \mathscr{X}, \exists \delta = \delta(x_0,\varepsilon) > 0$, 使得
> $$\rho(x,x_0) < \delta \Longrightarrow r(Tx,Tx_0) < \varepsilon \quad (\forall x \in \mathscr{X}). \qquad (1.1.4)$$

> [!proof]-
> 必要性. 若(1.1.4)式不成立, 必 $\exists x_0 \in \mathscr{X}, \exists \varepsilon > 0$, 使得 $\forall n \in \mathbb{N}, \exists x_n$, 使得 $\rho(x_n,x_0) < 1/n$, 但 $r(Tx_n,Tx_0) \geqslant \varepsilon$, 即得 $\lim\limits_{n\to\infty} \rho(x_n,x_0) = 0$, 但 $\lim\limits_{n\to\infty} r(Tx_n,Tx_0) \neq 0$, 矛盾.
>
> 充分性. 设(1.1.4)式成立, 且 $\lim\limits_{n\to\infty} \rho(x_n,x_0) = 0$, 那么 $\forall \varepsilon > 0$, $\exists N = N(\delta(x_0,\varepsilon))$, 使得当 $n > N$ 时, 有 $\rho(x_n,x_0) < \delta$. 从而 $r(Tx_n,Tx_0) < \varepsilon$, 即得 $\lim\limits_{n\to\infty} r(Tx_n,Tx_0) = 0$. $\blacksquare$

设 $\varphi$ 是 $\mathbb{R}$ 上定义的实函数, 求方程
$$\varphi(x) = 0$$
的根的问题可以看成 $\mathbb{R} \to \mathbb{R}$ 的映射
$$f(x) = x - \varphi(x)$$
的不动点问题. 即求 $x \in \mathbb{R}$ 满足:
$$f(x) = x.$$
下列常微分方程的初值问题:
$$\begin{cases} \dfrac{dx}{dt} = F(t,x), \\ x(0) = \xi, \end{cases} \qquad (1.1.5)$$
或它的等价形式, 即求连续函数 $x(t)$ 满足下列积分方程的问题:
$$x(t) = \xi + \int_0^t F(\tau,x(\tau)) d\tau, \qquad (1.1.6)$$
也可以看成是一个不动点问题. 为此, 在以 $t=0$ 为中心的某区间 $[-h,h]$ 上考察度量空间 $C[-h,h]$, 并引入映射
$$(Tx)(t) = \xi + \int_0^t F(\tau,x(\tau)) d\tau, \qquad (1.1.7)$$
则(1.1.6)式等价于求 $C[-h,h]$ 上的一个点 $x$, 使得 $x = Tx$, 即求 $T$ 的不动点.

在度量空间上有一个很简单而基本的不动点定理 -- 压缩映射原理.

> [!definition] 定义 1.1.10
> 称 $T: (\mathscr{X},\rho) \to (\mathscr{X},\rho)$ 是一个**压缩映射**, 如果存在 $0 < \alpha < 1$, 使得 $\rho(Tx,Ty) \leqslant \alpha \rho(x,y) \,(\forall x,y \in \mathscr{X})$.

> [!example] 例 1.1.11
> 设 $\mathscr{X} = [0,1]$, $T(x)$ 是 $[0,1]$ 上的一个可微函数, 满足条件:
> $$T(x) \in [0,1] \quad (\forall x \in [0,1]), \qquad (1.1.8)$$
> 以及
> $$|T'(x)| \leqslant \alpha < 1 \quad (\forall x \in [0,1]), \qquad (1.1.9)$$
> 则映射 $T: \mathscr{X} \to \mathscr{X}$ 是一个压缩映射.

> [!proof]-
> $\rho(Tx,Ty) = |T(x) - T(y)|$
> $$\quad = |T'(\theta x + (1-\theta)y)(x-y)|$$
> $$\quad \leqslant \alpha |x-y| = \alpha \rho(x,y) \quad (\forall x,y \in \mathscr{X}, 0 < \theta < 1). \quad \blacksquare$$

**启发** 设 $T: [0,1] \to [0,1]$ 可微且满足(1.1.8)式及(1.1.9)式, 问 $T$ 是否存在不动点? 若存在, 有多少个?

**直观与算法** $\forall x_0 \in [0,1]$, 做迭代序列 $x_{n+1} = Tx_n \,(n=0,1,2,\cdots)$, 参见图1.1.1.

因为
$$\begin{aligned} |x_{n+1} - x_n| &= |Tx_n - Tx_{n-1}| \leqslant \alpha |x_n - x_{n-1}| \\ &\leqslant \cdots \leqslant \alpha^n |x_1 - x_0|, \end{aligned}$$
从而对 $\forall p \in \mathbb{N}$,
$$\begin{aligned} |x_{n+p} - x_n| &\leqslant \sum_{i=1}^p |x_{n+i} - x_{n+i-1}| \leqslant \sum_{i=1}^p \alpha^{n+i-1} |x_1 - x_0| \\ &< \sum_{i=1}^\infty \alpha^{n+i-1} |x_1 - x_0| = \frac{\alpha^n}{1-\alpha} |x_1 - x_0| \to 0 \end{aligned}$$
(当 $n \to \infty$, 对 $\forall p \in \mathbb{N}$ 一致). 因此, $\{x_n\}$ 是一个基本列, 从而有极限. 从 $x_{n+1} = Tx_n$, 两边取极限(因 $T$ 连续)得
$$x^* = Tx^*,$$
即 $x^*$ 为一不动点. 这不动点还是唯一的. 事实上, 若 $x^*, x^{**}$ 都是不动点, 则
$$\begin{aligned} |x^* - x^{**}| &= |Tx^* - Tx^{**}| \\ &\leqslant \alpha |x^* - x^{**}|. \end{aligned}$$
由此推出
$$x^* = x^{**}.$$

抽去上述过程中实数与绝对值的具体内容, 不难把这个结论推广到一般度量空间上去. 若 $T: (\mathscr{X},\rho) \to (\mathscr{X},\rho)$ 是一个压缩映射, 则仿照上述过程, 任取初始点 $x_0 \in \mathscr{X}$. 考察迭代产生的序列
$$x_{n+1} = Tx_n \quad (n=0,1,2,\cdots).$$
和前面一样, 我们有
$$\begin{aligned} \rho(x_{n+1},x_n) &= \rho(Tx_n,Tx_{n-1}) \\ &\leqslant \alpha \rho(x_n,x_{n-1}) \leqslant \cdots \leqslant \alpha^n \rho(x_1,x_0). \end{aligned}$$
从而对 $\forall p \in \mathbb{N}$,
$$\begin{aligned} \rho(x_{n+p},x_n) &\leqslant \sum_{i=1}^p \rho(x_{n+i},x_{n+i-1}) \\ &\leqslant \frac{\alpha^n}{1-\alpha} \rho(x_1,x_0) \to 0 \end{aligned}$$
(当 $n \to \infty$, 对 $\forall p \in \mathbb{N}$ 一致). 由此可见 $\{x_n\}$ 是一个基本列. 为了它有极限, 还要假定 $(\mathscr{X},\rho)$ 是完备的. 于是我们得到

> [!theorem] 定理 1.1.12（Banach不动点定理 -- 压缩映射原理）
> 设 $(\mathscr{X},\rho)$ 是一个完备的度量空间, $T$ 是 $(\mathscr{X},\rho)$ 到其自身的一个压缩映射, 则 $T$ 在 $\mathscr{X}$ 上存在唯一的不动点.

这个原理非常基本, 它是泛函分析中的一个最常用、最简单的存在性定理. 数学分析中的许多存在性定理是它的特殊情形.

> [!example] 例 1.1.13
> 常微分方程的初值问题(1.1.5)的局部存在唯一性.
>
> 我们已经把这个问题化归为一个求不动点的问题了. 先在 $C[-h,h]$ 上考察由(1.1.7)式定义的映射 $T$, 我们考察在 $F(t,x)$ 上添加什么条件可以使 $T$ 成为一个压缩映射. 注意到
> $$\begin{aligned} \rho(Tx,Ty) &= \max_{|t|\leqslant h} \left|\int_0^t F(\tau,x(\tau)) d\tau - \int_0^t F(\tau,y(\tau)) d\tau\right| \\ &\leqslant h \max_{|t|\leqslant h} |F(t,x(t)) - F(t,y(t))|, \end{aligned}$$
> 因此, 比如说只要假设二元函数 $F(t,x)$ 对变元 $x$ 关于 $t$ 一致地满足局部 Lipschitz 条件: $\exists \delta > 0, L > 0$, 使得当 $|t| \leqslant h, |x_1 - \xi| \leqslant \delta, |x_2 - \xi| \leqslant \delta$ 时, 有
> $$|F(t,x_1) - F(t,x_2)| \leqslant L|x_1 - x_2|, \qquad (1.1.10)$$
> 这时就有
> $$\rho(Tx,Ty) \leqslant Lh \rho(x,y) \quad (\forall x,y \in \overline{B}(\xi,\delta)),$$
> 其中
> $$\overline{B}(\xi,\delta) \triangleq \left\{x(t) \in C[-h,h] \biggm| \max_{|t|\leqslant h} |x(t) - \xi| \leqslant \delta\right\}.$$
>
> 在这里我们不能直接取 $C[-h,h]$ 为定理 1.1.12 中的度量空间 $\mathscr{X}$, 因为当 $Lh < 1$ 时, $T$ 只是在 $C[-h,h]$ 的子集 $\overline{B}(\xi,\delta)$ 上才是压缩的. 在这里我们把常数 $\xi$ 看成是 $[-h,h]$ 上恒等于 $\xi$ 的常值函数.
>
> 我们取 $\mathscr{X} = \overline{B}(\xi,\delta)$, 为了要使 $T: \mathscr{X} \to \mathscr{X}$, 再设
> $$M \triangleq \max\left\{|F(t,x)| \biggm| (t,x) \in [-h,h] \times [\xi-\delta,\xi+\delta]\right\},$$
> 取 $h > 0$ 足够小, 以使
> $$\max |(Tx)(t) - \xi| = \max \left|\int_0^t F(\tau,x(\tau)) d\tau\right| \leqslant Mh \leqslant \delta.$$
> 由于 $(C[-h,h],\rho)$ 是一个完备的度量空间, 而 $\mathscr{X}$ 又是它的一个闭子集, 因此 $(\mathscr{X},\rho)$ 还是一个完备的度量空间(习题1.1.1). 于是我们得到了下面的定理.

> [!theorem] 定理 1.1.14
> 设函数 $F(t,x)$ 在 $[-h,h] \times [\xi-\delta,\xi+\delta]$ 上定义、连续并满足条件(1.1.10), 则当 $h < \min\{\delta/M, 1/L\}$ 时, 初值问题(1.1.5)在 $[-h,h]$ 上存在唯一解.

> [!example] 例 1.1.15（隐函数存在定理）
> 设 $f(x,y) = (f_1(x,y),\cdots,f_m(x,y)): \mathbb{R}^n \times \mathbb{R}^m \to \mathbb{R}^m$, $U \times V \subset \mathbb{R}^n \times \mathbb{R}^m$ 是 $(x_0,y_0)$ 在 $\mathbb{R}^n \times \mathbb{R}^m$ 中的一个邻域. 设 $f(x,y)$ 及
> $$\frac{\partial f(x,y)}{\partial y} = \begin{pmatrix} \dfrac{\partial f_1}{\partial y_1}(x,y) & \cdots & \dfrac{\partial f_1}{\partial y_m}(x,y) \\ \vdots & & \vdots \\ \dfrac{\partial f_m}{\partial y_1}(x,y) & \cdots & \dfrac{\partial f_m}{\partial y_m}(x,y) \end{pmatrix}$$
> 在 $U \times V$ 内连续, 又设
> $$f(x_0,y_0) = 0, \quad \left[\det\left(\frac{\partial f}{\partial y}(x,y)\right)\right]_{(x_0,y_0)} \neq 0,$$
> 则 $\exists (x_0,y_0)$ 的一个邻域 $U_0 \times V_0 \subset U \times V$ 以及唯一的连续函数 $\varphi: U_0 \to V_0$, 满足
> $$\begin{cases} f(x,\varphi(x)) = 0 & (\text{当 } x \in U_0), \\ \varphi(x_0) = y_0. \end{cases}$$

> [!proof]-
> 用 $\left(\dfrac{\partial f(x_0,y_0)}{\partial y}\right)^{-1} \cdot f(x,y)^{\mathrm{T}}$ 代替 $f(x,y)^{\mathrm{T}}$, 可设
> $$\frac{\partial f}{\partial y}(x_0,y_0) = \begin{pmatrix} 1 & & 0 \\ & \ddots & \\ 0 & & 1 \end{pmatrix}$$
> 为恒等矩阵, 其中
> $$f(x,y)^{\mathrm{T}} = \begin{pmatrix} f_1(x,y) \\ \vdots \\ f_m(x,y) \end{pmatrix}.$$
> 考虑映射 $T: \varphi \mapsto T\varphi$,
> $$(T\varphi)(x) = \varphi(x) - f(x,\varphi(x)),$$
> 其中 $\varphi \in C(\overline{B}(x_0,r), \mathbb{R}^m)$, 这里 $r > 0$, $C(\overline{B}(x_0,r), \mathbb{R}^m)$ 表示定义在闭球 $\overline{B}(x_0,r)$ 上取值于 $\mathbb{R}^m$ 上的向量值连续函数空间, 其距离定义为
> $$\rho(\varphi,\psi) \triangleq \max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} |\varphi_i(x) - \psi_i(x)|,$$
> 其中 $\varphi = (\varphi_1,\cdots,\varphi_m), \psi = (\psi_1,\cdots,\psi_m)$. 因为假设 $\dfrac{\partial f(x,y)}{\partial y}$ 在 $U \times V$ 上连续, 所以 $\exists \delta > 0$, 使得
> $$\left|\delta_{ij} - \left[\frac{\partial f(x,y)}{\partial y}\right]_{ij}\right| < \frac{1}{2m},$$
> $$i,j = 1,2,\cdots,m, \quad x \in \overline{B}(x_0,\delta), \quad y \in \overline{B}(y_0,\delta),$$
> 其中 $[\quad]_{ij}$ 表示括号内矩阵的第 $i$ 行, 第 $j$ 列元素, $\delta_{ij} = 0, i \neq j$, $\delta_{ij} = 1, i = j$. 记 $d_i(x) = \varphi_i(x) - \psi_i(x)$, $i = 1,2,\cdots,m$, 根据微分中值定理,
> $$\begin{aligned} \rho(T\varphi,T\psi) &= \max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} |d_i(x) - f_i(x,\varphi(x)) + f_i(x,\psi(x))| \\ &= \max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} \left|d_i(x) - \sum_{j=1}^m \frac{\partial f_i(x,\widehat{y}(x))}{\partial y_j} d_j(x)\right| \\ &\leqslant \frac{1}{2} \max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} |d_i(x)| = \frac{1}{2} \rho(\varphi,\psi), \qquad (1.1.11) \end{aligned}$$
> 其中 $\varphi, \psi \in \mathscr{X}$, $\widehat{y}(x) = (\widehat{y}_1(x), \widehat{y}_2(x), \cdots, \widehat{y}_m(x))$, 这里
> $$\begin{aligned} \mathscr{X} &\triangleq \left\{\varphi \in C(\overline{B}(x_0,r), \mathbb{R}^m) \biggm| \varphi(x_0) = y_0, \right. \\ &\qquad\qquad\left. \varphi(x) \in \overline{B}(y_0,\delta), x \in \overline{B}(x_0,r)\right\}, \\ \widehat{y}_i(x) &= \theta_i(x)\varphi(x) + (1-\theta_i(x))\psi(x), \\ &\qquad\qquad 0 < \theta_i(x) < 1, \quad x \in \overline{B}(x_0,r). \end{aligned}$$
> 因 $\mathscr{X}$ 在 $C(\overline{B}(x_0,r), \mathbb{R}^m)$ 中闭, 从而是一个完备度量空间. (1.1.11)式表明, $T: \mathscr{X} \to C(\overline{B}(x_0,r), \mathbb{R}^m)$ 是压缩映射. 剩下来只要再证 $T: \mathscr{X} \to \mathscr{X}$ 就够了, 因为根据压缩映射原理(定理1.1.12), $T$ 存在唯一的不动点, 这就是我们所要证的. 注意到
> $$\begin{aligned} \rho(T\varphi, y_0) &\leqslant \rho(T\varphi, Ty_0) + \rho(Ty_0, y_0) \\ &\leqslant \frac{1}{2}\rho(\varphi,y_0) + \max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} |f_i(x,y_0)|, \end{aligned}$$
> 这里把 $y_0$ 看成映射: $x \mapsto y_0$, $x \in \overline{B}(x_0,r)$, 此时有 $y_0 \in \mathscr{X}$. 又由 $f$ 的连续性, $\exists \eta > 0$, 使得
> $$\max_{\substack{x \in \overline{B}(x_0,r) \\ 1 \leqslant i \leqslant m}} |f_i(x,y_0)| < \frac{\delta}{2}.$$
> 因此, 当 $0 < r < \min\{\eta, \delta\}$ 时, $\rho(Ty_0, y_0) < \dfrac{\delta}{2}$,
> $$\rho(T\varphi, y_0) \leqslant \frac{1}{2}\rho(\varphi,y_0) + \frac{1}{2}\delta \leqslant \frac{1}{2}\delta + \frac{1}{2}\delta = \delta, \quad \varphi \in \mathscr{X}.$$
> 此外, 还有
> $$\begin{aligned} (T\varphi)(x_0) &= \varphi(x_0) - f(x_0,\varphi(x_0)) \\ &= y_0 - f(x_0,y_0), \quad \varphi \in \mathscr{X}. \end{aligned}$$
> 所以 $T: \mathscr{X} \to \mathscr{X}$. $\blacksquare$

### 习题

1.1.1 证明: 完备空间的闭子集是一个完备的子空间, 而任一度量空间中的完备子空间必是闭子集.

1.1.2（Newton法）设 $f$ 是定义在 $[a,b]$ 上的二次连续可微的实值函数, $\widehat{x} \in (a,b)$ 使得 $f(\widehat{x}) = 0, f'(\widehat{x}) \neq 0$. 求证: 存在 $\widehat{x}$ 的邻域 $U(\widehat{x})$, 使得 $\forall x_0 \in U(\widehat{x})$, 迭代序列
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \quad (n=0,1,2,\cdots)$$
是收敛的, 并且
$$\lim_{n\to\infty} x_n = \widehat{x}.$$

1.1.3 设 $(\mathscr{X},\rho)$ 是度量空间, 映射 $T: \mathscr{X} \to \mathscr{X}$ 满足
$$\rho(Tx,Ty) < \rho(x,y) \quad (\forall x \neq y),$$
并已知 $T$ 有不动点, 求证: 此不动点是唯一的.

1.1.4 设 $T$ 是度量空间上的压缩映射, 求证: $T$ 是连续的.

1.1.5 设 $T$ 是压缩映射, 求证: $T^n \,(n \in \mathbb{N})$ 也是压缩映射, 并说明逆命题不一定成立.

1.1.6 设 $M$ 是 $(\mathbb{R}^n, \rho)$ 中的有界闭集, 映射 $T: M \to M$ 满足: $\rho(Tx,Ty) < \rho(x,y) \,(\forall x,y \in M, x \neq y)$. 求证: $T$ 在 $M$ 中存在唯一的不动点.

1.1.7 对于积分方程
$$x(t) - \lambda \int_0^1 e^{t-s} x(s) ds = y(t),$$
其中 $y(t) \in C[0,1]$ 为一给定函数, $\lambda$ 为常数, $|\lambda| < 1$, 求证: 存在唯一解 $x(t) \in C[0,1]$.

## §2 完备化

在压缩映射原理(定理1.1.12)中, 对空间 $(\mathscr{X},\rho)$ 的完备性要求一般来说是不能省略的. 这很容易从下例中看出. 大家知道: 函数 $T(x) \triangleq \dfrac{1}{2}\sqrt{x+1}$ 在 $[0,1]$ 上有定义, 并且有唯一的不动点 $x_0 = \dfrac{\sqrt{17}+1}{8}$. 然而若取 $\mathscr{X} = [0,1] \setminus \{x_0\}$, 那么 $T$ 仍然是 $\mathscr{X} \to \mathscr{X}$ 的压缩映射, 但它却不再有不动点. 因此在许多分析问题中, 我们经常要求所在的空间 $\mathscr{X}$ 是完备的. 不过, 空间是否完备与其上的距离紧密相连. 以 $C[a,b]$ 为例, 当赋以另一距离:
$$\rho_1(x,y) \triangleq \int_a^b |x(t) - y(t)| dt \qquad (1.2.1)$$
时, $(C[a,b],\rho_1)$ 就不是完备的(请读者自己验证)! 以下我们将仿照实数理论中从有理数域出发定义无理数的方法, 对空间 $(\mathscr{X},\rho)$ 增添"理想元素", 使之"扩充"为一个完备空间.

> [!definition] 定义 1.2.1
> 设 $(\mathscr{X},\rho), (\mathscr{X}_1,\rho_1)$ 是两个度量空间, 如果存在映射 $\varphi: \mathscr{X} \to \mathscr{X}_1$ 满足
> (1) $\varphi$ 是满射,
> (2) $\rho(x,y) = \rho_1(\varphi x, \varphi y) \quad (\forall x,y \in \mathscr{X})$,
> 则称 $(\mathscr{X},\rho)$ 和 $(\mathscr{X}_1,\rho_1)$ 是**等距同构**的, 并称 $\varphi$ 为等距同构映射, 有时简称**等距同构**.

> [!remark]
> 由(2)导出 $\varphi$ 还是单射.

显然, 凡是等距同构的度量空间, 它们的一切与距离相联系的性质都是一样的. 因此今后我们将不再区分它们. 如果度量空间 $(\mathscr{X}_1,\rho_1)$ 与另一个度量空间 $(\mathscr{X}_2,\rho_2)$ 的子空间 $(\mathscr{X}_0,\rho_2)$ 是等距同构的, 我们就说 $(\mathscr{X}_1,\rho_1)$ 可以**嵌入** $(\mathscr{X}_2,\rho_2)$. 在上述意义下, 我们认为 $(\mathscr{X}_1,\rho_1)$ 就是 $(\mathscr{X}_2,\rho_2)$ 的一个子空间, 并简单地记作
$$(\mathscr{X}_1,\rho_1) \subset (\mathscr{X}_2,\rho_2).$$

在实数集合里, 我们知道什么叫稠密子集, 这个概念可以推广到一般的度量空间.

> [!definition] 定义 1.2.2
> 设 $(\mathscr{X},\rho)$ 是度量空间. 集合 $E \subset \mathscr{X}$ 叫作在 $\mathscr{X}$ 中的**稠密子集**, 如果 $\forall x \in \mathscr{X}, \forall \varepsilon > 0, \exists z \in E$, 使得 $\rho(x,z) < \varepsilon$. 换句话说: $\forall x \in \mathscr{X}, \exists \{x_n\} \subset E$, 使得 $x_n \to x \,(n \to \infty)$.

> [!example] 例 1.2.3
> $[a,b]$ 上的多项式全体记为 $P[a,b]$. 根据 Weierstrass 定理可知 $P[a,b]$ 在 $C[a,b]$ 中稠密.

> [!definition] 定义 1.2.4
> 包含给定度量空间 $(\mathscr{X},\rho)$ 的最小的完备度量空间称为 $\mathscr{X}$ 的**完备化空间**, 其中最小的含义是: 任何一个以 $(\mathscr{X},\rho)$ 为子空间的完备度量空间都以此空间为子空间.

> [!proposition] 命题 1.2.5
> 如果 $(\mathscr{X}_1,\rho_1)$ 是一个以 $(\mathscr{X},\rho)$ 为子空间的完备度量空间, $\rho_1|_{\mathscr{X} \times \mathscr{X}} = \rho$, 并且 $\mathscr{X}$ 在 $\mathscr{X}_1$ 中稠密, 则 $\mathscr{X}_1$ 是 $\mathscr{X}$ 的完备化空间.

## §3 列紧集

充分性. 设 $M$ 是自列紧的, 要在 $M$ 的任一开覆盖中取出有限覆盖. 用反证法, 如果某个开覆盖 $\bigcup_{\lambda\in\Lambda} G_\lambda \supset M$ 不能取出 $M$ 的有限覆盖. 由于 $M$ 是自列紧的, $\forall n\in\mathbb{N}$, 存在有穷的 $1/n$ 网
$$N_n = \{x_1^{(n)},x_2^{(n)},\cdots,x_{k(n)}^{(n)}\},$$
显然 $\bigcup_{y\in N_n} B(y,1/n)\supset M$. 因此, $\forall n\in\mathbb{N},\exists y_n\in N_n$, 使得 $B(y_n,1/n)$ 不能被有限个 $G_\lambda$ 所覆盖. 由假定 $M$ 是自列紧集, 必存在收敛子列 $y_{n_k}$ 收敛到一点 $y_0\in G_{\lambda_0}$. 又 $G_{\lambda_0}$ 是开集, 所以 $\exists\delta>0$, 使得 $B(y_0,\delta)\subset G_{\lambda_0}$. 对此 $\delta>0$, 取 $k$ 足够大, 使得 $n_k>2/\delta$, 并且 $\rho(y_{n_k},y_0)<\delta/2$, 则 $\forall x\in B(y_{n_k},1/n_k)$, 有
$$\rho(x,y_0) \leqslant \rho(x,y_{n_k}) + \rho(y_{n_k},y_0) \leqslant \frac{1}{n_k} + \frac{\delta}{2} < \delta,$$
即 $x\in B(y_0,\delta)$, 从而 $B(y_{n_k},1/n_k)\subset B(y_0,\delta)\subset G_{\lambda_0}$. 这与每个 $B(y_n,1/n)$ 不能被有限个 $G_\lambda$ 所覆盖矛盾. $\blacksquare$

我们曾考察过区间 $[a,b]$ 上的连续函数空间 $C[a,b]$, 现在稍微做一点推广. 设 $M$ 是一个紧的度量空间, 带有距离 $\rho$, 用 $C(M)$ 表示 $M\rightarrow\mathbb{R}$ 的一切连续映射全体. 定义
$$d(u,v) = \max_{x\in M}|u(x)-v(x)| \quad (\forall u,v\in C(M)). \qquad (1.3.1)$$

> [!proposition] 命题 1.3.13
> $(C(M),d)$ 是一个度量空间.

> [!proof]-
> 其实只有定义本身的合理性是要验证的. 即, 对 $\forall u\in C(M)$, 存在着最大值 $\max_{x\in M}|u(x)|$. 事实上, $u(M)$ 是紧集. 因为对任意点列 $y_n\in u(M)$, $\exists x_n\in M$, 使得 $u(x_n)=y_n$. 由于 $M$ 是紧的, 从而有子列 $x_{n_k}\rightarrow x_0, k\rightarrow\infty$, 而 $u$ 是连续的, 便有 $u(x_{n_k})\rightarrow u(x_0)\in u(M), k\rightarrow\infty$. 令 $y_0\triangleq u(x_0)$, 即得 $y_{n_k}=u(x_{n_k})\rightarrow y_0$, 从而 $u(M)$ 是紧集. 这蕴含 $u(M)$ 是有界闭的数集. 设
> $$\min u(M) = \alpha, \quad \max u(M) = \beta,$$
> 由闭性推出 $\alpha,\beta\in u(M)$. 这就证明了 $\max_{x\in M}|u(x)|$ 的存在性. $\blacksquare$

> [!proposition] 命题 1.3.14
> $(C(M),d)$ 是完备的.

证明留给读者作为习题.

现在我们来讨论连续函数空间上列紧集的刻画.

> [!definition] 定义 1.3.15
> 设 $F$ 是 $C(M)$ 的一个子集. 称 $F$ 是**一致有界**的, 如果 $\exists M_1>0$, 使得 $|\varphi(x)|\leqslant M_1(\forall x\in M,\forall\varphi\in F)$; 称 $F$ 是**等度连续**的, 如果 $\forall\varepsilon>0$, 总可以找到 $\delta(\varepsilon)>0$, 使得
> $$|\varphi(x_1)-\varphi(x_2)|<\varepsilon \quad (\forall x_1,x_2\in M,\rho(x_1,x_2)<\delta,\forall\varphi\in F).$$

> [!theorem] 定理 1.3.16（Arzelà-Ascoli）
> 为了 $F\subset C(M)$ 是一个列紧集, 必须且仅须 $F$ 是一致有界且等度连续的函数族.

> [!proof]-
> 因为 $C(M)$ 是完备的, 所以由定理 1.3.8, 为了 $F$ 是列紧的, 必须且仅须它是完全有界的.
>
> 必要性. 因为完全有界集是有界集, 所以 $F$ 是一致有界函数族. $\forall\varepsilon>0$, 要证 $\exists\delta=\delta(\varepsilon)$, 使得 $\forall\varphi\in F$ 有
> $$|\varphi(x_1)-\varphi(x_2)|<\varepsilon \quad (\text{当}\ \rho(x_1,x_2)<\delta).$$
> 因为 $F$ 的 $\varepsilon/3$ 网是一个有穷集 $N(\varepsilon/3)=\{\varphi_1,\varphi_2,\cdots,\varphi_n\}$, 对这有穷个函数, 由连续性, $\exists\delta=\delta(\varepsilon/3)$, 当 $\rho(x_1,x_2)<\delta$ 有
> $$|\varphi_i(x_1)-\varphi_i(x_2)|<\varepsilon/3 \quad (i=1,2,\cdots,n).$$
> 因为 $\forall\varphi\in F,\exists\varphi_i\in N(\varepsilon/3)$, 使得 $d(\varphi,\varphi_i)<\varepsilon/3$, 所以
> $$\begin{aligned}
> |\varphi(x)-\varphi(x')| \
>     &\leqslant |\varphi(x)-\varphi_i(x)| + |\varphi_i(x)-\varphi_i(x')| + |\varphi_i(x')-\varphi(x')| \\
>     &\leqslant 2d(\varphi,\varphi_i) + |\varphi_i(x)-\varphi_i(x')| < \varepsilon \quad (\text{当}\ \rho(x,x')<\delta).
> \end{aligned}$$
>
> 充分性. 设 $F$ 一致有界且等度连续, 我们要找有穷的 $\varepsilon$ 网. 由于 $F$ 是等度连续的, $\exists\delta=\delta(\varepsilon/3)>0$, 使得当 $\rho(x,x')<\delta$ 时,
> $|\varphi(x)-\varphi(x')|<\varepsilon/3(\forall\varphi\in F)$. 就此 $\delta$, 选取空间 $M$ 上的有穷 $\delta$ 网 $N(\delta)=\{x_1,x_2,\cdots,x_n\}$. 做映射 $T:F\rightarrow\mathbb{R}^n$,
> $$T\varphi \triangleq (\varphi(x_1),\varphi(x_2),\cdots,\varphi(x_n)) \quad (\forall\varphi\in F).$$
> 记 $\widetilde{F}=T(F)$, 则 $\widetilde{F}$ 是 $\mathbb{R}^n$ 中的有界集. 事实上, 设 $|\varphi|\leqslant M_1$ $(\forall\varphi\in F)$, 则
> $$\left(\sum_{i=1}^{n}|\varphi(x_i)|^2\right)^{\frac{1}{2}} \leqslant \sqrt{n}\max_{x\in M}|\varphi(x)| \leqslant \sqrt{n}M_1 \quad (\forall\varphi\in F).$$
> 从而 $\widetilde{F}$ 是列紧集, 利用定理 1.3.8, $\widetilde{F}$ 有有穷的 $\varepsilon/3$ 网
> $$\widetilde{N}(\varepsilon/3) = \{T\varphi_1,T\varphi_2,\cdots,T\varphi_m\}.$$
> 从而 $\{\varphi_1,\varphi_2,\cdots,\varphi_m\}$ 是 $F$ 的 $\varepsilon$ 网, 这是因为 $\forall\varphi\in F,\exists\varphi_i$, 使得 $\rho_n(T\varphi,T\varphi_i)<\varepsilon/3$, 于是取定 $x_r\in N(\delta)$, 使得 $\rho(x,x_r)<\delta$, 有
> $$\begin{aligned}
> |\varphi(x)-\varphi_i(x)| \\
>     &\leqslant |\varphi(x)-\varphi(x_r)| + |\varphi(x_r)-\varphi_i(x_r)| + |\varphi_i(x_r)-\varphi_i(x)| \\
>     &< \frac{2}{3}\varepsilon + \rho_n(T\varphi,T\varphi_i) < \varepsilon,
> \end{aligned}$$
> 其中 $\rho_n$ 表示 $\mathbb{R}^n$ 上的距离. $\blacksquare$

> [!example] 例 1.3.17
> 设 $\Omega\subset\mathbb{R}^n$ 是有界开凸集. 若 $M_1,M_2$ 是两个给定的正数, 则集合
> $$F \triangleq \{\varphi\in C^{(1)}(\overline{\Omega})\bigl|\bigr.|\varphi(x)|\leqslant M_1,|\operatorname{grad}\varphi(x)|\leqslant M_2(\forall x\in\Omega)\}$$
> 是 $C(\overline{\Omega})$ 上的一个列紧集, 其中 $C^{(1)}(\overline{\Omega})$ 表示 $\overline{\Omega}$ 上的连续可微函数全体.

> [!proof]-
> 因为 $\forall\varphi\in F,\forall x_1,x_2\in\overline{\Omega},\exists\theta\in(0,1)$, 使得
> $$\varphi(x_1)-\varphi(x_2) = \operatorname{grad}\varphi(\theta x_1+(1-\theta)x_2)\cdot(x_1-x_2),$$
> 所以
> $$|\varphi(x_1)-\varphi(x_2)| \leqslant M_2\rho_n(x_1,x_2) \quad (\forall\varphi\in F).$$
> 这表明 $F$ 是等度连续的. 此外 $F$ 显然是一致有界的. $\blacksquare$

### 习题

1.3.1 在完备的度量空间中求证: 子集 $A$ 列紧的充要条件是对 $\forall\varepsilon>0$, 存在 $A$ 的列紧的 $\varepsilon$ 网.

1.3.2 在度量空间中求证: 紧集上的连续函数必是有界的, 并且达到它的上、下确界.

1.3.3 在度量空间中求证: 完全有界的集合是有界的, 并通过考虑 $l^2$ 的子集 $E=\{e_k\}_{k=1}^{\infty}$, 其中
$$e_k = \{\underbrace{0,0,\cdots,0,1}_{k},0,\cdots\},$$
来说明一个集合可以是有界但不完全有界的.

1.3.4 设 $(\mathscr{X},\rho)$ 是度量空间, $F_1,F_2$ 是它的两个紧子集, 求证: $\exists x_i\in F_i(i=1,2)$, 使得 $\rho(F_1,F_2)=\rho(x_1,x_2)$, 其中
$$\rho(F_1,F_2) \triangleq \inf\{\rho(x,y)|x\in F_1,y\in F_2\}.$$

1.3.5 设 $M$ 是 $C[a,b]$ 中的有界集, 求证: 集合
$$\left\{F(x)=\int_a^x f(t)\mathrm{d}t\bigg|f\in M\right\}$$
是列紧集.

1.3.6 设 $E=\{\sin nt\}_{n=1}^{\infty}$, 求证: $E$ 在 $C[0,\pi]$ 中不是列紧的.

1.3.7 求证: $S$ 空间(定义见习题 1.2.1)的子集 $A$ 列紧的充要条件是: $\forall n\in\mathbb{N},\exists C_n>0$, 使得对 $\forall x=(\xi_1,\xi_2,\cdots,\xi_n,\cdots)\in A$, 有 $|\xi_n|\leqslant C_n(n=1,2,\cdots)$.

1.3.8 设 $(\mathscr{X},\rho)$ 是度量空间, $M$ 是 $\mathscr{X}$ 中的列紧集, 映射 $f:\mathscr{X}\rightarrow M$ 满足
$$\rho(f(x_1),f(x_2))<\rho(x_1,x_2) \quad (\forall x_1,x_2\in\mathscr{X},x_1\neq x_2).$$
求证: $f$ 在 $\mathscr{X}$ 中存在唯一的不动点.

1.3.9 设 $(M,\rho)$ 是一个紧度量空间, 又 $E\subset C(M)$, $E$ 中的函数一致有界并满足下列 Hölder 条件:
$$|x(t_1)-x(t_2)|\leqslant C\rho(t_1,t_2)^\alpha \quad (\forall x\in E,\forall t_1,t_2\in M),$$
其中 $0<\alpha\leqslant 1, C>0$. 求证: $E$ 在 $C(M)$ 中是列紧集.

## §4 赋范线性空间

上一节我们在度量空间上讨论了映射的不动点问题.然而度量空间只有拓扑结构,对于许多分析问题只考虑拓扑结构不考虑代数结构是不够用的,因为在分析中通常遇到的函数空间,不但要考察收敛而且要考虑元素间的代数运算.

### 4.1 线性空间

在线性代数中,我们学过线性空间的概念.

> [!definition] 定义 1.4.1
> 设 $\mathscr{X}$ 是一个非空集,$\mathbb{K}$ 是复(或实)数域.如果下列条件满足,便称 $\mathscr{X}$ 为一复(或实)线性空间:
>
> (1) $\mathscr{X}$ 是一加法交换群,即对 $\forall x,y\in\mathscr{X},\exists u\in\mathscr{X}$,记作 $u=x+y$,称 u 为 x,y 之和,适合
>
> (1.1) $x+y=y+x$;
>
> (1.2) $(x+y)+z=x+(y+z)$;
>
> (1.3) 存在唯一的 $\theta\in\mathscr{X}$,对 $\forall x\in\mathscr{X}$,$x+\theta=\theta+x$;
>
> (1.4) 对任意的 $x\in\mathscr{X}$,$\exists x'\in\mathscr{X}$,使得 $x+x'=\theta$,记此 $x'$ 为 $-x$.
>
> (2) 定义了数域 $\mathbb{K}$ 中的数 $\alpha$ 与 $x\in\mathscr{X}$ 的数乘运算,即 $\forall(\alpha,x)\in\mathbb{K}\times\mathscr{X},\exists u\in\mathscr{X}$,记作 $u=\alpha x$,称 u 为 x 对 $\alpha$ 的数乘,适合
>
> (2.1) $\alpha(\beta x)=(\alpha\beta)x \quad (\forall\alpha,\beta\in\mathbb{K},\forall x\in\mathscr{X})$;
>
> (2.2) $1\cdot x = x$;
>
> (2.3) $(\alpha+\beta)x = \alpha x + \beta x \quad (\forall\alpha,\beta\in\mathbb{K},\forall x\in\mathscr{X})$,
> $\quad\quad\alpha(x+y) = \alpha x + \alpha y \quad (\forall x,y\in\mathscr{X},\forall\alpha\in\mathbb{K})$.

线性空间的元素又称为向量,因而线性空间又称为向量空间.下述概念是线性空间的基本概念.

**线性同构** 设 $\mathscr{X},\mathscr{X}_1$ 都是线性空间,$T:\mathscr{X}\rightarrow\mathscr{X}_1$ 称为是一个线性同构,如果

(1) 它既是单射又是满射,即它是一对一的并且是在上的;

(2) $T(\alpha x+\beta y) = \alpha Tx + \beta Ty \quad (\forall x,y\in\mathscr{X},\forall\alpha,\beta\in\mathbb{K})$.

**线性子空间** 设 $E\subset\mathscr{X}$,若 E 依 $\mathscr{X}$ 上的加法与数乘还构成一个线性空间,则称 E 是 $\mathscr{X}$ 的一个线性子空间.

$\mathscr{X}$ 以及 $\{\theta\}$ 都是 $\mathscr{X}$ 的线性子空间,我们称它们为平凡的子空间,而称其他的子空间为真子空间.

**线性流形** 设 $E\subset\mathscr{X}$,若 $\exists x_0\in\mathscr{X}$ 及线性子空间 $E_0\subset\mathscr{X}$,使得 $E=E_0+x_0\triangleq\{x+x_0|x\in E_0\}$,则称 E 为线性流形.简单地说,线性流形就是子空间对某个向量的平移.

**线性相关** 一组向量 $x_1,x_2,\cdots,x_n\in\mathscr{X}$ 称为是线性相关的,如果存在 $\lambda_1,\lambda_2,\cdots,\lambda_n\in\mathbb{K}$ 不全为 0,使得

$$\lambda_1 x_1 + \lambda_2 x_2 + \cdots + \lambda_n x_n = 0;$$

否则称为是线性无关的.

**线性基** 若 A 是 $\mathscr{X}$ 中的一个极大线性无关向量组,即 A 中的向量是线性无关的,而且任意的 $x\in\mathscr{X}$ 都是 A 中的向量的线性组合,则称 A 是 $\mathscr{X}$ 的一组线性基.

**维数** 线性空间中的线性基的元素个数(势),称为维数.

**线性包** 设 $\Lambda$ 是一个指标集,$\{x_\lambda|\lambda\in\Lambda\}$ 是 $\mathscr{X}$ 中的向量族,一切由 $\{x_\lambda|\lambda\in\Lambda\}$ 的有穷线性组合组成的集合

$$\{y = \alpha_1 x_{\lambda_1} + \cdots + \alpha_n x_{\lambda_n} | \lambda_i\in\Lambda, \alpha_i\in\mathbb{K}, i=1,2,\cdots,n\}$$

称为 $\{x_\lambda|\lambda\in\Lambda\}$ 的线性包.这线性包是一个线性子空间,不难证明它是包含 $\{x_\lambda|\lambda\in\Lambda\}$ 的一切线性子空间的交.因此称线性包为 $\{x_\lambda|\lambda\in\Lambda\}$ 张成的线性子空间,记为

$$\operatorname{span}\{x_\lambda|\lambda\in\Lambda\}.$$

**线性和与直和** 设 $E_1,E_2$ 是 $\mathscr{X}$ 的子空间,我们称集合 $\{x+y|x\in E_1,y\in E_2\}$ 为 $E_1$ 与 $E_2$ 的线性和,记为 $E_1+E_2$.对于任意有限个子空间,定义以此类推.又若 $(E_1,E_2)$ 中的任意一对非零向量都是线性无关的,则称线性和 $E_1+E_2$ 为直和,记作 $E_1\oplus E_2$,这时 $E_1\cap E_2=\{\theta\}$,对 $\forall x\in E_1\oplus E_2$,有唯一的分解:

$$x = x_1 + x_2 \quad (x_i\in E_i, i=1,2).$$

### 4.2 线性空间上的距离

我们引进过一个空间 $\mathscr{X}$ 的代数结构——线性空间,也引进过它的拓扑结构——距离 $\rho$,现在要把这两者结合起来,即是要求:

(1) 距离的平移不变性:

$$\rho(x+z,y+z) = \rho(x,y) \quad (\forall x,y,z\in\mathscr{X}).$$

由此推出,$\rho$ 对加法是连续的,即

$$\left.\begin{array}{c}\rho(x_n,x)\rightarrow 0\\ \rho(y_n,y)\rightarrow 0\end{array}\right\} \Longrightarrow \rho(x_n+y_n,x+y)\rightarrow 0 \quad (n\rightarrow\infty).$$

事实上,

$$\begin{aligned}
\rho(x_n+y_n,x+y) &= \rho(x_n+y_n-x-y,\theta)\\
&= \rho(x_n-x,y-y_n)\\
&\leqslant \rho(x_n-x,\theta) + \rho(y-y_n,\theta)\\
&= \rho(x_n,x) + \rho(y,y_n) \rightarrow 0 \quad (n\rightarrow\infty).
\end{aligned}$$

反之,如果距离 $\rho$ 对加法连续,则满足平移不变性.证明详见关肇直、张恭庆、冯德兴著的《线性泛函分析入门》(上海科学技术出版社,1979).

(2) 数乘的连续性:

(2.1) $\rho(x_n,x)\rightarrow 0 \Longrightarrow \rho(\alpha x_n,\alpha x)\rightarrow 0 \quad (n\rightarrow\infty)(\forall\alpha\in\mathbb{K})$;

(2.2) $\alpha_n\rightarrow\alpha(\mathbb{K}) \Longrightarrow \rho(\alpha_n x, \alpha x)\rightarrow 0 \quad (n\rightarrow\infty)(\forall x\in\mathscr{X})$.

若令 $p:\mathscr{X}\rightarrow\mathbb{R}$,$p(x)\triangleq\rho(x,\theta)(\forall x\in\mathscr{X})$,则由 (1) 有

$$p(x-y) = \rho(x-y,\theta) = \rho(x,y).$$

这时由距离公理逐条化为函数 p 的条件:

$\rho(x,y)\geqslant 0 \Longleftrightarrow p(x)\geqslant 0 \quad (\forall x,y\in\mathscr{X})$;

$\rho(x,y)=0$,当且仅当 $x=y \Longleftrightarrow p(x)=0$,当且仅当 $x=\theta$;

$\rho(x,y)\leqslant\rho(x,z)+p(z,y) \Longleftrightarrow p(x+y)\leqslant p(x)+p(y)$;

$\rho(x,y)=\rho(y,x) \Longleftrightarrow p(-x)=p(x)$.

此外,

$$\text{(2.1)} \Longleftrightarrow p(\alpha x_n)\rightarrow 0 \quad (\text{当}\ p(x_n)\rightarrow 0);$$

$$\text{(2.2)} \Longleftrightarrow p(\alpha_n x)\rightarrow 0 \quad (\text{当}\ \alpha_n\rightarrow 0).$$

于是导向下列定义:

> [!definition] 定义 1.4.2
> 线性空间 $\mathscr{X}$ 上的**准范数**(准模)定义为这空间上的一个函数 $\|\cdot\|:\mathscr{X}\rightarrow\mathbb{R}$,满足条件:
>
> (1) $\|x\|\geqslant 0(\forall x\in\mathscr{X})$;$\|x\|=0 \Longleftrightarrow x=\theta$;
>
> (2) $\|x+y\|\leqslant\|x\|+\|y\| \quad (\forall x,y\in\mathscr{X})$;
>
> (3) $\|-x\|=\|x\| \quad (\forall x\in\mathscr{X})$;
>
> (4) $\lim_{\alpha_n\rightarrow 0}\|\alpha_n x\|=0$, $\lim_{\|x_n\|\rightarrow 0}\|\alpha x_n\|=0 \quad (\forall x\in\mathscr{X},\forall\alpha\in\mathbb{K})$.

> [!definition] 定义 1.4.3
> 一个赋准范数的线性空间 $\mathscr{X}$,如果按照
> $$\|x_n-x\|\rightarrow 0 \quad (n\rightarrow\infty)$$
> 来定义 $x_n\rightarrow x$ $(n\rightarrow\infty)$,那么便称其为 $F^*$ 空间.

> [!definition] 定义 1.4.4
> 完备的 $F^*$ 空间称为 Frechet 空间,简称 F 空间.

$F^*$ 空间的例子很多.

> [!example] 例 1.4.5
> 空间 $C(M)$ (M 是一个紧度量空间).显然
> $$\|u\| = \max_{x\in M}|u(x)|$$
> 是一个准范数,$C(M)$ 是一个 F 空间.

> [!example] 例 1.4.6
> Euclid 空间 $\mathbb{R}^n$.设 $x=(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n$,定义
> $$\|x\| = \left(\sum_{i=1}^{n}|x_i|^2\right)^{\frac{1}{2}},$$
> 显然它是一个准范数,$\mathbb{R}^n$ 是一个 F 空间.

> [!example] 例 1.4.7
> 空间 S.用 S 表示一切序列 $x=(x_1,x_2,\cdots,x_n,\cdots)$ 组成的线性空间,加法与数乘按自然方式定义:
> $$x+y = (x_1+y_1,x_2+y_2,\cdots,x_n+y_n,\cdots),$$
> $$\alpha x = (\alpha x_1,\alpha x_2,\cdots,\alpha x_n,\cdots) \quad (\alpha\in\mathbb{K}),$$
> 其中 $x=(x_1,x_2,\cdots,x_n,\cdots)$,$y=(y_1,y_2,\cdots,y_n,\cdots)$.对 $\forall x\in S$ 定义
> $$\|x\| = \sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n|}{1+|x_n|},$$
> 那么它是一个准范数.事实上,准范数的条件 (1),(3) 是明显成立的.下面先验证条件 (2),注意到初等不等式
> $$\frac{\alpha+\beta}{1+\alpha+\beta} = \frac{\alpha}{1+\alpha+\beta} + \frac{\beta}{1+\alpha+\beta} \leqslant \frac{\alpha}{1+\alpha} + \frac{\beta}{1+\beta} \quad (\forall\alpha,\beta>0),$$
> 便得到
> $$\begin{aligned}
> \|x+y\| &= \sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n+y_n|}{1+|x_n+y_n|} \\
>     &\leqslant \sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n|+|y_n|}{1+|x_n|+|y_n|} \\
>     &\leqslant \sum_{n=1}^{\infty}\frac{1}{2^n}\left(\frac{|x_n|}{1+|x_n|} + \frac{|y_n|}{1+|y_n|}\right) \\
>     &= \|x\| + \|y\|.
> \end{aligned}$$
> 其次验证条件 (4).因为还有初等不等式
> $$\frac{\alpha\beta}{1+\alpha\beta} \leqslant \begin{cases} \alpha\dfrac{\beta}{1+\beta}, & \text{当}\ \alpha\geqslant 1,\beta\geqslant 0,\\ \dfrac{\beta}{1+\beta}, & \text{当}\ 0<\alpha<1,\beta\geqslant 0, \end{cases}$$
> 所以 $\forall\alpha\in\mathbb{K}$,有
> $$\|\alpha x_n\| \leqslant \max(|\alpha|,1)\|x_n\| \rightarrow 0 \quad (\|x_n\|\rightarrow 0).$$
> 又若 $|\alpha_m|\rightarrow 0$,$\forall\varepsilon>0$,取 $n_0$,使得 $1/2^{n_0}<\varepsilon/2$,固定住 $n_0$,取 $N=N(\varepsilon/2)$,使得当 $m>N$ 时有
> $$|\alpha_m|\max_{1\leqslant i\leqslant n_0}|x_i| < \frac{\varepsilon}{2},$$
> 则
> $$\|\alpha_m x\| \leqslant \sum_{n=1}^{n_0}\frac{1}{2^n}\cdot\frac{|\alpha_m x_n|}{1+|\alpha_m x_n|} + \sum_{n=n_0+1}^{\infty}\frac{1}{2^n}$$
> $$\quad < \frac{\varepsilon}{2}\sum_{n=1}^{\infty}\frac{1}{2^n} + \frac{\varepsilon}{2} = \varepsilon.$$
> 从而 S 是一个 F 空间.

以下空间 $l^p(0<p<\infty)$,当 $p\geqslant 1$ 时,按照本节 (4.4) 中定义,是赋范空间,自然更是 $F^*$ 空间.当 $0<p<1$ 时,令 $p'$ 满足 $1/p'=1/p-1$,则由 $ab\leqslant\dfrac{a^p}{p} + \dfrac{b^{p'}}{p'}(a,b\geqslant 0)$ 可得

$$\sum_{n=1}^{\infty}|\xi_n\eta_n| \leqslant \left(\sum_{n=1}^{\infty}|\xi_n|^p\right)^{1/p}\left(\sum_{n=1}^{\infty}|\eta_n|^{p'}\right)^{1/p'}.$$

再由 $\sum_{n=1}^{\infty}|\xi_n||\eta_n|\leqslant\left(\sum_{n=1}^{\infty}|\xi_n|^p\right)^{1/p}\left(\sum_{n=1}^{\infty}|\eta_n|^{p'}\right)^{1/p'}$,可得

$$\sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^p = \sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^{p-1}|\xi_n|$$
$$\quad + \sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^{p-1}|\eta_n|$$
$$\quad \leqslant \left(\sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^p\right)^{1/p'}\left\{\left(\sum_{n=1}^{\infty}|\xi_n|^p\right)^{1/p} + \left(\sum_{n=1}^{\infty}|\eta_n|^p\right)^{1/p}\right\}.$$

两边除以 $\left(\sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^p\right)^{1/p'}$,即得

$$\left(\sum_{n=1}^{\infty}(|\xi_n|+|\eta_n|)^p\right)^{1/p} \leqslant \left(\sum_{n=1}^{\infty}|\xi_n|^p\right)^{1/p} + \left(\sum_{n=1}^{\infty}|\eta_n|^p\right)^{1/p}.$$

由 Hölder 不等式以及 Minkowski 不等式,可以导出 $l^p$ 空间中准范数 $\|\cdot\|_p$ 满足条件 (2).类似地,还可以导出空间中准范数 $\|\cdot\|_p$ 满足条件 (4).于是,当 $0<p<1$ 时,$l^p$ 也是 F 空间.

> [!example] 例 1.4.8
> 空间 $l^{\infty}$.用 $l^{\infty}$ 表示一切有界数列 $x=(\xi_1,\xi_2,\cdots,\xi_n,\cdots)$ 组成的集合,即 $\sup_{n\geqslant 1}|\xi_n|<+\infty$.按自然方式定义线性运算,它是一个线性空间.令
> $$\|x\| = \sup_{n\geqslant 1}|\xi_n| \quad (x=(\xi_1,\xi_2,\cdots,\xi_n,\cdots)\in l^{\infty}).$$
> 容易验证它是一个准范数,$l^{\infty}$ 是 F 空间.

> [!example] 例 1.4.9
> 空间 $L^p(\Omega,\mu)(1\leqslant p<\infty)$.设 $(\Omega,\mathscr{F},\mu)$ 是一个测度空间, f 是 $\Omega$ 上的 $\mu$ 可测函数,而且 $|f|^p$ 在 $\Omega$ 上是 $\mu$ 可积的.这种函数 f 的全体记作 $L^p(\Omega,\mu)$,称为 $(\Omega,\mathscr{F},\mu)$ 上的 p 次可积函数空间. $L^p(\Omega,\mu)$ 按通常的加法与数乘规定线性运算,并且把几乎处处相等的两个函数看成是同一个向量,经这样处理过的空间 $L^p(\Omega,\mu)$ 仍是一个线性空间.定义
> $$\|f\| = \left(\int_\Omega|f(x)|^p\mathrm{d}\mu(x)\right)^{\frac{1}{p}} \quad (f\in L^p(\Omega,\mu)),$$
> 那么 $\|\cdot\|$ 是一个范数.它有下列著名不等式.

> [!proposition] 命题 1.4.10 (Hölder)
> 设 $1<p<\infty$,又设 f,g 分别是 $L^p(\Omega,\mu)$ 和 $L^{p'}(\Omega,\mu)$ 中的函数,其中 $1/p'=1-1/p$,则
> $$\left|\int_\Omega f(x)g(x)\mathrm{d}\mu(x)\right| \leqslant \left(\int_\Omega|f(x)|^p\mathrm{d}\mu(x)\right)^{\frac{1}{p}}\left(\int_\Omega|g(x)|^{p'}\mathrm{d}\mu(x)\right)^{\frac{1}{p'}}.$$

> [!proof]- 证
> 首先证明 Young 不等式.设 $a,b\geqslant 0$,$1<p<\infty$,$1/p+1/q=1$,则
> $$ab \leqslant \frac{a^p}{p} + \frac{b^q}{q}. \qquad (1.4.1)$$
> 若 $b=0$ 或 $a=0$,则上式显然.若 $a,b>0$,考察函数 $\varphi(t)=t^{p-1}(t\geqslant 0)$.设 $\psi(s)=s^{q-1}(s\geqslant 0)$,则 $\varphi$ 与 $\psi$ 互为反函数.由图 1 可见
> $$ab \leqslant \int_0^a t^{p-1}\mathrm{d}t + \int_0^b s^{q-1}\mathrm{d}s = \frac{a^p}{p} + \frac{b^q}{q}.$$
> (此证明利用了积分的几何意义,图中两块阴影部分面积之和大于或等于矩形面积 ab,等号当且仅当 $b=a^{p-1}$ 时成立.)
> 取 $\alpha=|f(x)|/\|f\|_p$, $\beta=|g(x)|/\|g\|_{p'}$,$a=|f(x)|$,$b=|g(x)|$,我们有
> $$\frac{|f(x)g(x)|}{\|f\|_p\cdot\|g\|_{p'}} \leqslant \frac{1}{p}\cdot\frac{|f(x)|^p}{\|f\|_p^p} + \frac{1}{p'}\cdot\frac{|g(x)|^{p'}}{\|g\|_{p'}^{p'}}.$$
> 两边在 $\Omega$ 上积分,注意到 $p/p'=p-1$,即得所要不等式.$\blacksquare$

> [!proposition] 命题 1.4.11 (Minkowski)
> 设 $1\leqslant p<\infty$, $f,g\in L^p(\Omega,\mu)$,则
> $$\|f+g\|_p \leqslant \|f\|_p + \|g\|_p.$$

> [!proof]- 证
> 当 $p=1$ 时,不等式显然成立.设 $1<p<\infty$,由 Hölder 不等式,
> $$\int_\Omega|f(x)+g(x)|^p\mathrm{d}\mu(x) = \int_\Omega|f(x)+g(x)|^{p-1}\cdot|f(x)+g(x)|\mathrm{d}\mu(x)$$
> $$\leqslant\int_\Omega|f(x)+g(x)|^{p-1}\cdot|f(x)|\mathrm{d}\mu(x) + \int_\Omega|f(x)+g(x)|^{p-1}\cdot|g(x)|\mathrm{d}\mu(x)$$
> $$\leqslant\left(\int_\Omega|f(x)+g(x)|^{(p-1)p'}\mathrm{d}\mu(x)\right)^{\frac{1}{p'}}\|f\|_p$$
> $$\quad +\left(\int_\Omega|f(x)+g(x)|^{(p-1)p'}\mathrm{d}\mu(x)\right)^{\frac{1}{p'}}\|g\|_p$$
> $$=\left(\int_\Omega|f(x)+g(x)|^p\mathrm{d}\mu(x)\right)^{\frac{1}{p'}}(\|f\|_p+\|g\|_p).$$
> 两边除以 $\left(\int_\Omega|f(x)+g(x)|^p\mathrm{d}\mu(x)\right)^{\frac{1}{p'}}$(可设此式不为 0,否则无何可证),即得所要不等式.$\blacksquare$

对于 $L^p(\Omega,\mu)(1\leqslant p<\infty)$,在空间中以几乎处处相等来等同两个函数.这样 $\|\cdot\|$ 满足范数公理 (3).于是 $L^p(\Omega,\mu)$ 是一个赋范空间.此外,容易验证 $L^p(\Omega,\mu)$ 是完备的,即它是一个 B 空间.

> [!example] 例 1.4.12
> 空间 $L^{\infty}(\Omega,\mu)$.设 $(\Omega,\mathscr{F},\mu)$ 是一个测度空间,$\mu$ 对于 $\Omega$ 是 $\sigma$ 有限的,$f(x)$ 是 $\Omega$ 上的 $\mu$ 可测函数.将 f(x) 与 $\Omega$ 上的满足 $f(x)=g(x)(a.e.)$ 的函数 g(x) 等同. $L^{\infty}(\Omega,\mu)$ 表示 $\Omega$ 上本性有界的可测函数全体,即
> $$\|f\|_\infty = \inf_{E_0\subset\Omega,\mu(E_0)=0}\sup_{x\in\Omega\setminus E_0}|f(x)|$$
> $$= \operatorname*{ess\ sup}_{x\in\Omega}|f(x)| < +\infty.$$
> 不难验证 $L^{\infty}(\Omega,\mu)$ 按此范数是一个赋范空间,且有下述结果.

> [!theorem] 定理 1.4.13
> 设 $(\Omega,\mathscr{F},\mu)$ 是一个测度空间,则 $L^{\infty}(\Omega,\mu)$ 是完备的,即是 B 空间.

> [!theorem] 定理 1.4.14 (Riesz-Fisher)
> 设 $(\Omega,\mathscr{F},\mu)$ 是测度空间,则 $L^p(\Omega,\mu)(1\leqslant p\leqslant\infty)$ 是 B 空间.

> [!proof]- 证
> 当 $1\leqslant p<\infty$ 时,设 $\{f_n\}$ 是 $L^p(\Omega,\mu)$ 中的基本列,令 $\varepsilon_k=1/2^k$,则可选出子列 $\{f_{n_k}\}$ 使得
> $$\|f_{n_{k+1}}-f_{n_k}\|_p < \frac{1}{2^k} \quad (k=1,2,\cdots).$$
> 令
> $$g_m(x) = \sum_{k=1}^{m}|f_{n_{k+1}}(x)-f_{n_k}(x)|,$$
> $$g_\infty(x) = \sum_{k=1}^{\infty}|f_{n_{k+1}}(x)-f_{n_k}(x)|.$$
> 由 Minkowski 不等式,对 $\forall m\in\mathbb{N}$,有
> $$\|g_m\|_p \leqslant \sum_{k=1}^{m}\|f_{n_{k+1}}-f_{n_k}\|_p < \sum_{k=1}^{m}\frac{1}{2^k}.$$
> 可见
> $$\int_\Omega g_\infty^p(x)\mathrm{d}\mu(x) = \lim_{m\rightarrow\infty}\int_\Omega g_m^p(x)\mathrm{d}\mu(x) < +\infty.$$
> 因此 $g_\infty(x)<+\infty$ $(a.e.\ x\in\Omega)$,即函数级数
> $$f_{n_1}(x) + \sum_{k=1}^{\infty}(f_{n_{k+1}}(x)-f_{n_k}(x))$$
> 几乎处处绝对收敛.记
> $$f(x) = f_{n_1}(x) + \sum_{k=1}^{\infty}(f_{n_{k+1}}(x)-f_{n_k}(x)) = \lim_{n\rightarrow\infty}f_{n_k}(x) \quad (a.e.\ x\in\Omega).$$
> 则 $f(x)$ 在 $\Omega$ 上是 $\mu$ 可测的.又 $\forall n\in\mathbb{N}$,当 $m\geqslant n$ 时,由 Fatou 引理,
> $$\int_\Omega|f(x)-f_{n_k}(x)|^p\mathrm{d}\mu(x) \leqslant \varliminf_{m\rightarrow\infty}\int_\Omega|g_m(x)-g_{n-1}(x)|^p\mathrm{d}\mu(x)$$
> $$\quad \leqslant\left(\sum_{k=n}^{\infty}\|f_{n_{k+1}}-f_{n_k}\|_p\right)^p.$$
> 因此,
> $$\int_\Omega|f(x)|^p\mathrm{d}\mu(x) \leqslant\|f-f_{n_k}\|_p + \|f_{n_k}\|_p < +\infty,$$
> 即 $f\in L^p(\Omega,\mu)$,且
> $$\|f-f_{n_k}\|_p \leqslant \sum_{k=n}^{\infty}\|f_{n_{k+1}}-f_{n_k}\|_p \rightarrow 0 \quad (n\rightarrow\infty).$$
> 又由 $\{f_n\}$ 是基本列,$\|f_n-f\|_p \rightarrow 0(n\rightarrow\infty)$.$\blacksquare$

> [!remark] 注
> 以上证明对 $p=1$ 也适用.

> [!example] 例 1.4.15
> Sobolev 空间 $H^{m,p}(\Omega)$.设 $\Omega$ 是 $\mathbb{R}^n$ 中的有界连通开区域,$m\in\mathbb{N}$,$1\leqslant p<\infty$.对于 $C^m(\overline{\Omega})$ 中的任意元 u(x),定义
> $$\|u\|_{m,p} = \left(\sum_{|\alpha|\leqslant m}\int_\Omega|\partial^\alpha u(x)|^p\mathrm{d}x\right)^{\frac{1}{p}}, \qquad (1.4.2)$$
> 其中
> $$\partial^\alpha u(x) = \frac{\partial^{|\alpha|}}{\partial x_1^{\alpha_1}\partial x_2^{\alpha_2}\cdots\partial x_n^{\alpha_n}}u(x_1,\cdots,x_n),$$
> $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$,$|\alpha|=\alpha_1+\alpha_2+\cdots+\alpha_n$.不难验证 $\|\cdot\|_{m,p}$ 是 $C^m(\overline{\Omega})$ 上的范数.
> 将 $C^m(\overline{\Omega})$ 关于范数 $\|\cdot\|_{m,p}$ 完备化,得到的完备化空间称为 Sobolev 空间,记作 $H^{m,p}(\Omega)$.当 $p=2$ 时,$H^{m,2}(\Omega)$ 简单记为 $H^m(\Omega)$.
> 在第五章将用到空间 $H^{m,p}(\Omega)$ 的等价范数刻画.本节先给出不加证明的:

> [!theorem] 定理 (Sobolev 空间嵌入定理)
> 设 $m>n/2$,则
> $$H^m(\mathbb{R}^n)\subset C(\mathbb{R}^n),$$
> 且
> $$\sup_{x\in\mathbb{R}^n}|u(x)| \leqslant C\|u\|_{H^m},$$
> 其中 C 为仅依赖于 m,n 的常数.

### 4.3 范数与 Banach 空间

线性空间上的范数(或准范数)不是唯一的,比如有穷维空间上的范数可以有许多种.

> [!proposition] 命题 1.4.16
> 设 $\mathscr{X}$ 上的 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 都是范数(或准范数),则它们等价的充分必要条件是存在 $\alpha,\beta>0$,使
> $$\alpha\|x\|_1 \leqslant \|x\|_2 \leqslant \beta\|x\|_1 \quad (\forall x\in\mathscr{X}).$$

> [!theorem] 定理 1.4.17
> 有穷维线性空间上任意两个范数(或准范数)等价.

> [!proof]- 证
> 设 $\mathscr{X}$ 是一个有穷维线性空间,$\dim\mathscr{X}=n$.设 $\{e_1,e_2,\cdots,e_n\}$ 是它的一组基,即对 $\forall x\in\mathscr{X}$,存在唯一的表示
> $$x = \xi_1 e_1 + \xi_2 e_2 + \cdots + \xi_n e_n. \qquad (1.4.3)$$
> 定义 $\|x\|_T = \left(\sum_{i=1}^{n}|\xi_i|^2\right)^{1/2}$,则 $\|\cdot\|_T$ 是 $\mathscr{X}$ 上的一个范数.设 $\|\cdot\|$ 是 $\mathscr{X}$ 上的任意一个范数,下面证明 $\|\cdot\|$ 与 $\|\cdot\|_T$ 等价.
> 先证 $\|\cdot\|$ 对 $\|\cdot\|_T$ 连续.对任意 $x\in\mathscr{X}$,
> $$\|x\| = \left\|\sum_{i=1}^{n}\xi_i e_i\right\| \leqslant \sum_{i=1}^{n}|\xi_i|\cdot\|e_i\|$$
> $$\leqslant\left(\sum_{i=1}^{n}|\xi_i|^2\right)^{1/2}\left(\sum_{i=1}^{n}\|e_i\|^2\right)^{1/2} = M\|x\|_T,$$
> 其中 $M=\left(\sum_{i=1}^{n}\|e_i\|^2\right)^{1/2}$.于是 $\|x_n-x\|_T\rightarrow 0$ 时,有 $\|x_n-x\|\rightarrow 0$,即 $\|\cdot\|$ 关于 $\|\cdot\|_T$ 连续.
> 记
> $$S_1 \triangleq \{x\in\mathscr{X}\mid \|x\|_T=1\},$$
> 这是 $\mathscr{X}$ 中有界闭集.由于 $\mathscr{X}$ 是有穷维的,$S_1$ 是紧集.又 $\|\cdot\|$ 在 $S_1$ 上连续,故 $\|x\|$ 在 $S_1$ 上达到最小值 m 和最大值 M,即
> $$m \triangleq \inf_{x\in S_1}\|x\| = \min_{x\in S_1}\|x\| > 0,$$
> $$M \triangleq \sup_{x\in S_1}\|x\| = \max_{x\in S_1}\|x\| < +\infty.$$
> 对于 $\forall x\in\mathscr{X},x\neq\theta$,$x/\|x\|_T\in S_1$,所以
> $$m \leqslant \left\|\frac{x}{\|x\|_T}\right\| \leqslant M,$$
> 即
> $$m\|x\|_T \leqslant \|x\| \leqslant M\|x\|_T.$$
> 因此 $\|\cdot\|$ 与 $\|\cdot\|_T$ 等价.$\blacksquare$

> [!corollary] 推论 1.4.18
> 有穷维赋范空间是 B 空间.

> [!proof]- 证
> 设 $\mathscr{X}$ 是有穷维赋范空间,则 $\mathscr{X}$ 上的范数 $\|\cdot\|$ 与 $\|\cdot\|_T$ 等价.由于 $\mathscr{X}$ 关于 $\|\cdot\|_T$ 是完备的(同构于 $\mathbb{R}^n$),所以 $\mathscr{X}$ 关于 $\|\cdot\|$ 也是完备的.$\blacksquare$

> [!theorem] 定理 1.4.19
> 有穷维赋范空间的任意有界集是列紧的.

> [!proof]- 证
> 有穷维赋范空间同构于 $\mathbb{R}^n$ 或 $\mathbb{C}^n$,而在 $\mathbb{R}^n$ 中,有界集是列紧的(Heine-Borel 定理).由范数等价性,有穷维赋范空间的有界集也是列紧的.$\blacksquare$

> [!theorem] 定理 1.4.20 (Riesz 引理)
> 设 $E_0$ 是赋范空间 $\mathscr{X}$ 的真闭子空间,则对 $\forall\varepsilon\in(0,1)$,$\exists y\in\mathscr{X}$,使得 $\|y\|=1$,且
> $$\|y-x\|\geqslant 1-\varepsilon \quad (\forall x\in E_0).$$

> [!proof]- 证
> 任取 $z\in\mathscr{X}\setminus E_0$.因为 $E_0$ 是闭的,所以
> $$d \triangleq \inf_{x\in E_0}\|z-x\| > 0.$$
> 取 $x_0\in E_0$,使得
> $$d \leqslant \|z-x_0\| < \frac{d}{1-\varepsilon}.$$
> 令
> $$y = \frac{z-x_0}{\|z-x_0\|},$$
> 则 $\|y\|=1$,且对 $\forall x\in E_0$,有
> $$\|y-x\| = \left\|\frac{z-x_0}{\|z-x_0\|}-x\right\| = \frac{1}{\|z-x_0\|}\|z-(x_0+\|z-x_0\|x)\|$$
> $$\geqslant \frac{d}{\|z-x_0\|} > 1-\varepsilon. \qquad \blacksquare$$

> [!corollary] 推论 1.4.21
> 设 $\mathscr{X}$ 是无穷维赋范空间,则单位球面 $S_1=\{x\in\mathscr{X}\mid \|x\|=1\}$ 不是列紧集.

> [!proof]- 证
> 用反证法.假设 $S_1$ 是列紧的.设 $x_1\in S_1$,令 $E_1=\operatorname{span}\{x_1\}$,则 $E_1$ 是一维真闭子空间(因为 $\mathscr{X}$ 是无穷维的).由 Riesz 引理,存在 $x_2\in S_1$,使得
> $$\|x_2-x_1\|\geqslant\frac{1}{2}.$$
> 令 $E_2=\operatorname{span}\{x_1,x_2\}$,同样由 Riesz 引理,存在 $x_3\in S_1$,使得
> $$\|x_3-x\|\geqslant\frac{1}{2} \quad (\forall x\in E_2),$$
> 特别有 $\|x_3-x_1\|\geqslant\frac{1}{2}$, $\|x_3-x_2\|\geqslant\frac{1}{2}$.
> 如此继续下去,得到 $S_1$ 中一个点列 $\{x_n\}$,满足
> $$\|x_m-x_n\|\geqslant\frac{1}{2} \quad (m\neq n).$$
> 这样的点列 $\{x_n\}$ 不可能有收敛子列,这与 $S_1$ 的列紧性矛盾.$\blacksquare$

> [!corollary] 推论 1.4.22
> 赋范空间 $\mathscr{X}$ 是有穷维的充要条件是 $\mathscr{X}$ 的任意有界闭集是紧的.

> [!proof]- 证
> 必要性由定理 1.4.19 给出.充分性:若 $\mathscr{X}$ 是无穷维的,则单位球 $B_1=\{x\in\mathscr{X}\mid \|x\|\leqslant 1\}$ 是有界闭集,但由推论 1.4.21,单位球面 $S_1\subset B_1$ 不是列紧的,所以 $B_1$ 也不是列紧的.$\blacksquare$

## §5 凸集与不动点
### 5.1 定义与基本性质
一般线性空间中的凸集概念是从平面凸集的特征性质中抽象出来的. 这性质是: 若 $E$ 是一个平面凸集, 则对于 $E$ 中任意两点 $x, y$, 联结这两点的线段也在 $E$ 内, 即
$$\lambda x + (1 - \lambda)y \in E \quad (\forall x, y \in E, \forall 0 \leqslant \lambda \leqslant 1).$$
这个性质并不要求空间具有拓扑结构, 所以这个概念可以扩充到一般的线性空间.
> [!definition] 定义 1.5.1
> 设 $\mathscr{X}$ 是线性空间, $E \subset \mathscr{X}$, 称 $E$ 为一凸集, 如果
> $$\lambda x + (1 - \lambda)y \in E \quad (\forall x, y \in E, \forall 0 \leqslant \lambda \leqslant 1).$$
> 下面命题可从定义直接推出.
> [!proposition] 命题 1.5.2
> 若 $\{E_\lambda \mid \lambda \in \Lambda\}$ 是线性空间 $\mathscr{X}$ 中的一族凸集, 则 $\displaystyle\bigcap_{\lambda \in \Lambda} E_\lambda$ 也是凸集.
> [!definition] 定义 1.5.3
> 设 $\mathscr{X}$ 是线性空间, $A \subset \mathscr{X}$. 若 $\{E_\lambda \mid \lambda \in \Lambda\}$ 为 $\mathscr{X}$ 中包含 $A$ 的一切凸集, 那么称 $\displaystyle\bigcap_{\lambda \in \Lambda} E_\lambda$ 为 $A$ 的凸包, 并记作 $\text{co}(A)$. 又对 $\forall n \in \mathbb{N}, x_1, x_2, \cdots, x_n \in A$, 称 $\displaystyle\sum_{i=1}^{n} \lambda_i x_i$ 为 $x_1, x_2, \cdots, x_n$ 的凸组合, 是指其中系数满足 $\lambda_i \geqslant 0, \displaystyle\sum_{i=1}^{n} \lambda_i = 1$.
> [!proposition] 命题 1.5.4
> 设 $\mathscr{X}$ 是线性空间, $A \subset \mathscr{X}$, 那么 $A$ 的凸包是 $A$ 中元素任意凸组合的全体, 即
> $$\text{co}(A) = \left\{\sum_{i=1}^{n} \lambda_i x_i \left| \sum_{i=1}^{n} \lambda_i = 1, \lambda_i \geqslant 0, x_i \in A, i = 1, 2, \cdots, n, \forall n \in \mathbb{N} \right.\right\}. \tag{1.5.1}$$
> [!proof]- 证
> 若令 $S$ 表示 (1.5.1) 式右端, 则 $A \subset S$ 而且 $S$ 是凸集, 从而 $S \supset \text{co}(A)$. 反之, 设 $F$ 为包含 $A$ 的任一凸集, 那么 $x_i \in F(i = 1, 2, \cdots, n)$, 从而 $\displaystyle\sum_{i=1}^{n} \lambda_i x_i \in F$, 即得 $S \subset F$, 从而 $S \subset \text{co}(A)$. $\blacksquare$
> [!definition] 定义 1.5.5
> 设 $\mathscr{X}$ 是线性空间, $C$ 是 $\mathscr{X}$ 上含有 $\theta$ 的凸子集, 在 $\mathscr{X}$ 上规定一个取值于 $[0, \infty]$ 的函数
> $$P(x) = \inf\left\{\lambda > 0 \left| \frac{x}{\lambda} \in C \right.\right\} \quad (\forall x \in \mathscr{X}) \tag{1.5.2}$$
> 与 $C$ 对应, 称函数 $P$ 为 $C$ 的 Minkowski 泛函.
> [!proposition] 命题 1.5.6
> 设 $\mathscr{X}$ 是线性空间, $C$ 是 $\mathscr{X}$ 上含有 $\theta$ 的凸子集. 若 $P$ 为 $C$ 的 Minkowski 泛函, 则 $P$ 具有下列性质:
> (1) $P(x) \in [0, \infty], P(\theta) = 0$;
> (2) $P(\lambda x) = \lambda P(x) \quad (\forall x \in \mathscr{X}, \forall \lambda > 0)$ (正齐次性);
> (3) $P(x + y) \leqslant P(x) + P(y) \quad (\forall x, y \in \mathscr{X})$ (次可加性).
> [!proof]- 证
> 只有 (3) 是需要验证的. 不妨设 $P(x), P(y)$ 有穷, 对 $\forall \varepsilon > 0$, 取 $\lambda_1 = P(x) + \varepsilon/2, \lambda_2 = P(y) + \varepsilon/2$, 则有
> $$\frac{x}{\lambda_1} \in C, \quad \frac{y}{\lambda_2} \in C.$$
> 因为 $C$ 是凸的, 所以
> $$\frac{x + y}{\lambda_1 + \lambda_2} = \frac{\lambda_1}{\lambda_1 + \lambda_2} \cdot \frac{x}{\lambda_1} + \frac{\lambda_2}{\lambda_1 + \lambda_2} \cdot \frac{y}{\lambda_2} \in C.$$
> 这表明
> $$P(x + y) \leqslant \lambda_1 + \lambda_2 = P(x) + P(y) + \varepsilon.$$
> 由 $\varepsilon > 0$ 的任意性得到 (3). $\blacksquare$
> 何时 $P(x)$ 是真正的函数, 即不取 $\infty$? 又何时正齐次性成为齐次性? 为了回答这些问题我们引进如下的概念.
> [!definition] 定义 1.5.7
> 线性空间 $\mathscr{X}$ 中, 含有 $\theta$ 的凸集 $C$ 称为是吸收的, 如果 $\forall x \in \mathscr{X}, \exists \lambda > 0$, 使得 $x/\lambda \in C$; 称 $C$ 是对称的, 如果 $x \in C \Longrightarrow -x \in C$.
> 图 1.5.1 显示平面上吸收凸集和对称凸集的图形.
> 根据定义显然有如下命题.
> [!proposition] 命题 1.5.8
> 为了 $C$ 是吸收凸集, 必须且仅须其 Minkowski 泛函 $P(x)$ 是实值函数; 为了 $C$ 是对称凸集, 必须 $P(x)$ 是实齐次的, 即
> $$P(\alpha x) = |\alpha|P(x) \quad (\forall \alpha \in \mathbb{R}).$$
> 对于复数域线性空间上的凸集, 我们引进均衡性的概念代替对称性.
> [!definition] 定义 1.5.9
> 复线性空间 $\mathscr{X}$ 的一个子集 $C$ 称为是均衡的, 是指
> $$x \in C \Longrightarrow \alpha x \in C \quad (\forall \alpha \in \mathbb{C}, |\alpha| = 1).$$
> 结合半范数定义 (见定义 1.4.21 的注) 我们有如下命题.
> [!proposition] 命题 1.5.10
> 复线性空间 $\mathscr{X}$ 上的任一个均衡吸收凸集 $C$, 决定了这空间上的一个半范数.
> 对于赋范线性空间 $\mathscr{X}$, 我们有更强的结果.
> [!proposition] 命题 1.5.11
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $C$ 是一个含有 $\theta$ 点的闭凸集. 如果 $P(x)$ 是 $C$ 的 Minkowski 泛函, 那么 $P(x)$ 下半连续, 且有
> $$C = \{x \in \mathscr{X} \mid P(x) \leqslant 1\}. \tag{1.5.3}$$
> 此外, 如果 $C$ 还是有界的, 那么 $P(x)$ 适合
> $$P(x) = 0 \Longleftrightarrow x = \theta.$$
> 又若 $C$ 以 $\theta$ 为一内点, 那么 $C$ 是吸收的, 并且 $P(x)$ 还是一致连续的.
> [!proof]- 证
> (1) $\forall \alpha > 0$, 若 $x \in \alpha C$, 即 $x/\alpha \in C$, 由 $P(x)$ 的定义便有 $P(x) \leqslant \alpha$; 反之, 若 $P(x) \leqslant \alpha$, 则对 $\forall n \in \mathbb{N}$, 有
> $$\frac{x}{\alpha + \dfrac{1}{n}} \in C, \quad \frac{x}{\alpha + \dfrac{1}{n}} \to \frac{x}{\alpha} \quad (n \to \infty).$$
> 又因为 $C$ 是闭的, 所以 $x \in \alpha C$. 这就证得
> $$\alpha C = \{x \in \mathscr{X} \mid P(x) \leqslant \alpha\} \quad (\forall \alpha > 0). \tag{1.5.4}$$
> 特别地, 令 $\alpha = 1$ 即得 (1.5.3) 式. 又因为 $\forall \alpha > 0, \alpha C$ 是闭集, 所以 $P$ 是下半连续的.
> (2) 因为 $\theta \in C$, 所以 $P(\theta) = 0$ 是显然的. 在 $C$ 有界假定下, 即 $\exists r > 0$, 使得 $C \subset B(\theta, r)$, 于是
> $$\forall x \in \mathscr{X} \setminus \{\theta\} \Longrightarrow \frac{rx}{\|x\|} \overline{\in} C \Longrightarrow P(x) \geqslant \frac{\|x\|}{r}.$$
> 由此可见, 当 $P(x) = 0$ 时, $x = \theta$.
> (3) 若 $C$ 以 $\theta$ 为内点, 即 $\exists r > 0$, 使得 $B(\theta, r) \subset C$, 那么
> $$\frac{rx}{2\|x\|} \in C \quad (\forall x \in \mathscr{X} \setminus \{\theta\}).$$
> 因此 $C$ 是吸收的, 并且有 $P(x) \leqslant 2\|x\|/r(\forall x \in \mathscr{X})$. 于是
> $$|P(x) - P(y)| \leqslant \max(P(x - y), P(y - x)) \leqslant \frac{2}{r}\|x - y\|$$
> $$(\forall x, y \in \mathscr{X}),$$
> 从而 $P(x)$ 是一致连续的. $\blacksquare$
> [!corollary] 推论 1.5.12
> 若 $C$ 是 $\mathbb{R}^n$ 中的一个紧凸子集, 则必存在正整数 $m \leqslant n$, 使得 $C$ 同胚于 $\mathbb{R}^m$ 中的单位球.
> [!proof]- 证
> (1) 用 $E$ 表示包含 $C$ 的最小闭线性子流形. 设其维数是 $m(\leqslant n)$. 于是在 $C$ 上必有 $m + 1$ 个向量 $e_1, e_2, \cdots, e_m, e_{m+1}$, 使得 $e_i - e_{m+1}(i = 1, 2, \cdots, m)$ 是线性无关的.
> (2) 令
> $$e_0 = \frac{1}{m+1}\sum_{i=1}^{m+1} e_i.$$
> 因为 $e_0 \in C \subset E$, 所以 $E - e_0$ 是一个 $m$ 维线性子空间. 于是对 $\forall y \in E$, 存在唯一的表示
> $$y = \sum_{i=1}^{m} \mu_i(e_i - e_0) + e_0, \tag{1.5.5}$$
> 并在 $E - e_0$ 上可引进一个等价范数
> $$\|z\| = \left(\sum_{i=1}^{m} |\mu_i|^2\right)^{\frac{1}{2}} \quad (z = y - e_0, y \in E). \tag{1.5.6}$$
> (3) 我们要证: 当 (1.5.6) 式所表示的 $\|z\|$ 足够小时, 蕴含 (1.5.5) 式所表示的 $y \in C$. 事实上, 因为
> $$\begin{aligned} y &= \sum_{i=1}^{m} \mu_i e_i + \left(1 - \sum_{j=1}^{m} \mu_j\right)e_0 \\ &= \sum_{i=1}^{m}\left[\mu_i + \frac{1}{m+1}\left(1 - \sum_{j=1}^{m}\mu_j\right)\right]e_i \\ &\quad + \frac{1}{m+1}\left(1 - \sum_{j=1}^{m}\mu_j\right)e_{m+1}, \end{aligned} \tag{1.5.7}$$
> 当 $|\mu_j|(j = 1, 2, \cdots, m)$ 足够小时, (1.5.7) 式右端各项系数都是正
> 的, 并且各项系数的总和满足
> $$\sum_{i=1}^{m}\left[\mu_i + \frac{1}{m+1}\left(1 - \sum_{j=1}^{m}\mu_j\right)\right] + \frac{1}{m+1}\left(1 - \sum_{j=1}^{m}\mu_j\right) = 1,$$
> 所以 $y \in \text{co}\{e_1, e_2, \cdots, e_m, e_{m+1}\} \subset C$.
> (4) 在 $E - e_0$ 上, $C - e_0$ 是一个以 $\theta$ 为内点的有界闭凸集, 它的 Minkowski 泛函 $P(z)$ 是 $E - e_0$ 上的一个一致连续、正齐次、次可加泛函, 适合 $P(z) = 0 \Longleftrightarrow z = \theta$. 应用定理 1.4.22, $\exists$ 常数 $C_1, C_2 > 0$, 使得
> $$C_1\|z\| \leqslant P(z) \leqslant C_2\|z\| \quad (\forall z \in E - e_0).$$
> 设 $B^m(\theta, 1)$ 是 $E - e_0$ 中的单位球, 若令
> $$\varphi(z) = e_0 + \begin{cases} \|z\|z/P(z), & z \neq \theta, \\ 0, & z = \theta, \end{cases}$$
> 则 $\varphi: B^m(\theta, 1) \to C$ 是一个在上同胚. $\blacksquare$
### 5.2 Brouwer 与 Schauder 不动点定理
在拓扑学中有一个重要的属于 Brouwer 的不动点定理, 引用如下:
> [!theorem] 定理 1.5.13
> (Brouwer)$^{\text{\textcircled{1}}}$ 设 $B$ 是 $\mathbb{R}^n$ 中的闭单位球, 又设 $T: B \to B$ 是一个连续映射, 那么 $T$ 必有一个不动点 $x \in B$.
> 联合推论 1.5.12 与 Brouwer 不动点定理 (定理 1.5.13), 有
> [!corollary] 推论 1.5.14
> 设 $C$ 是 $\mathbb{R}^n$ 中的一个紧凸子集, $T: C \to C$ 是连续的, 则 $T$ 必有一个在 $C$ 上的不动点.
> [!proof]- 证
> 由于 $C$ 与 $\mathbb{R}^m(m \leqslant n)$ 中的一个单位球同胚, 记此同胚为 $\varphi: B^m(\theta, 1) \to C$. 考察映射
> $$T_\varphi = \varphi^{-1} \circ T \circ \varphi.$$
> 显然 $T_\varphi: B^m(\theta, 1) \to B^m(\theta, 1)$. 对 $T_\varphi$ 应用 Brouwer 不动点定理 (定理 1.5.13), 存在 $x \in B^m(\theta, 1)$ 使得 $T_\varphi x = x$. 由此得到 $y = \varphi x \in C$ 是 $T$ 的不动点. $\blacksquare$
> 现在我们把有穷维空间的不动点定理推广到无穷维空间中去.
> [!theorem] 定理 1.5.15
> (Schauder) 设 $C$ 是 $B^*$ 空间 $\mathscr{X}$ 中的一个闭凸子集, $T: C \to C$ 连续且 $T(C)$ 列紧, 则 $T$ 在 $C$ 上必有一个不动点.
> [!proof]- 证
> (1) 因为 $T(C)$ 是列紧集, 所以对 $\forall n \in \mathbb{N}$, 存在 $1/n$ 网 $N_n = \{y_1, y_2, \cdots, y_{r_n}\}$, 即
> $$T(C) \subset \bigcup_{i=1}^{r_n} B\left(y_i, \frac{1}{n}\right) \quad (y_i \in T(C), i = 1, 2, \cdots, r_n).$$
> 记 $E_n = \text{span } N_n$, 即 $E_n$ 为由 $N_n$ 张成的有穷维线性子空间.
> (2) 做 $T(C) \to \text{co}(N_n)$ 的映射 $I_n$ 如下:
> $$I_n(y) = \sum_{i=1}^{r_n} y_i \lambda_i(y) \quad (\forall y \in T(C)), \tag{1.5.8}$$
> 其中
> $$\lambda_i(y) = \frac{m_i(y)}{\displaystyle\sum_{i=1}^{r_n} m_i(y)},$$
> $$m_i(y) = \begin{cases} 1 - n\|y - y_i\|, & y \in B\left(y_i, \dfrac{1}{n}\right), \\ 0, & y \overline{\in} B\left(y_i, \dfrac{1}{n}\right). \end{cases}$$
> 因为 $m_i(y) \geqslant 0$, 并且 $\forall y \in T(C), \exists i_0(1 \leqslant i_0 \leqslant r_n)$, 使得
> $$y \in B\left(y_{i_0}, \frac{1}{n}\right), \quad \text{于是} \quad m_{i_0}(y) > 0,$$
> 所以 $\displaystyle\sum_{i=1}^{r_n} m_i(y) > 0(\forall y \in T(C))$. 因此, $\lambda_i(y)(1 \leqslant i \leqslant r_n)$ 有定义并满足
> $$\lambda_i(y) \geqslant 0 \quad (1 \leqslant i \leqslant r_n), \quad \sum_{i=1}^{r_n} \lambda_i(y) = 1. \tag{1.5.9}$$
> 于是 $I_n$ 在 $T(C)$ 上有定义, 并且 (1.5.8) 式与 (1.5.9) 式蕴含 $I_n(y)$ 是 $N_n$ 元素的凸组合, 从而 $I_n(y) \in \text{co}(N_n)$. 此外还有
> $$\begin{aligned} \|I_n y - y\| &= \left\|\sum_{i=1}^{r_n} y_i \lambda_i(y) - \sum_{i=1}^{r_n} y \lambda_i(y)\right\| \\ &= \left\|\sum_{i=1}^{r_n} (y_i - y)\lambda_i(y)\right\| \leqslant \sum_{i=1}^{r_n} \|y_i - y\|\lambda_i(y) \\ &= \sum_{y \in B\left(y_i, \frac{1}{n}\right)} \|y_i - y\|\lambda_i(y) \\ &\quad + \sum_{y \overline{\in} B\left(y_i, \frac{1}{n}\right)} \|y_i - y\|\lambda_i(y) \\ &< \frac{1}{n} + 0 = \frac{1}{n}. \end{aligned} \tag{1.5.10}$$
> (3) 注意到 $T: C \to C, N_n \subset T(C)$, 而 $C$ 是凸的, 所以 $\text{co}(N_n) \subset C$. 令 $T_n \triangleq I_n \circ T$, 那么 $T_n: \text{co}(N_n) \to \text{co}(N_n)$. 又注意到 $\text{co}(N_n)$ 是 $E_n$ 中的一个有界闭凸子集, 应用推论 1.5.14, $\exists x_n \in \text{co}(N_n) \subset C$, 使得
> $$T_n x_n = x_n. \tag{1.5.11}$$
> 又因为 $T(C)$ 是列紧集而 $C$ 是闭集, 所以存在子列 $n_k$ 及 $x \in C$, 使得
> $$Tx_{n_k} \to x \quad (k \to \infty). \tag{1.5.12}$$
> 联合 (1.5.10) 式与 (1.5.11) 式得到
> $$\begin{aligned} \|x_n - x\| &= \|T_n x_n - x\| \\ &= \|I_n Tx_n - Tx_n + Tx_n - x\| \\ &\leqslant \|I_n Tx_n - Tx_n\| + \|Tx_n - x\| \\ &< \frac{1}{n} + \|Tx_n - x\| \quad (\forall n \in \mathbb{N}). \end{aligned} \tag{1.5.13}$$
> 联合 (1.5.12) 式与 (1.5.13) 式即得 $x_{n_k} \to x(k \to \infty)$, 再利用 $T$ 的连续性和 (1.5.12) 式即得
> $$Tx = x. \quad \blacksquare$$
> [!definition] 定义 1.5.16
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E$ 是 $\mathscr{X}$ 的一个子集, 称映射 $T: E \to \mathscr{X}$ 是紧的, 如果它是连续的并且把 $E$ 中的任意有界集映为 $\mathscr{X}$ 中的列紧集.
> [!corollary] 推论 1.5.17
> 设 $C$ 为 $B^*$ 空间 $\mathscr{X}$ 中的一个有界闭凸子集, $T: C \to C$ 是紧的, 则 $T$ 在 $C$ 上必有不动点.
### 5.3 应用
再考察常微分方程初值问题的存在性定理. 现在只假设函数
$$f(t, x): \mathbb{R} \times \mathbb{R} \to \mathbb{R}$$
在 $[-h, h] \times [\xi - b, \xi + b]$ 上二元连续 (从而有常数 $M > 0$, 使得 $|f(t, x)| \leqslant M$). 考察 $C[-h, h]$ 中的球 $\overline{B}(\xi, b)$ 上的映射:
$$(Tx)(t) = \xi + \int_0^t f(\tau, x(\tau))\text{d}\tau.$$
我们来证明: 对足够小的 $h$, $T$ 映 $\overline{B}(\xi, b)$ 到自身, 并且 $T$ 是紧的. 事实上,
$$\|Tx - \xi\|_{C[-h,h]} \leqslant Mh \quad (\forall x \in \overline{B}(\xi, b)),$$
故当 $h \leqslant b/M$ 时, $T$ 映 $\overline{B}(\xi, b)$ 到自身. 又因为
$$\begin{aligned} |(Tx)(t) - (Tx)(t')| &= \left|\int_{t'}^t f(\tau, x(\tau))\text{d}\tau\right| \\ &\leqslant M|t - t'| \quad (\forall t, t' \in [-h, h]), \\ |(Tx)(t)| &\leqslant |\xi| + Mh \quad (\forall t \in [-h, h]), \end{aligned}$$
所以 $T$ 连续, 并根据 Arzel\`a-Ascoli 定理 (定理 1.3.16), $\overline{B}(\xi, b)$ 在 $T$ 映射下的像是列紧的. 应用 Schauder 不动点定理 (定理 1.5.15), 立得下述定理.
> [!theorem] 定理 1.5.18
> (Caratheodory) 假设函数 $f(t, x)$ 在 $[-h, h] \times [\xi - b, \xi + b]$ 上二元连续, $|f(t, x)| \leqslant M$, 那么当 $h < b/M$ 时, 方程的初值问题
> $$\begin{cases} \dot{x}(t) = f(t, x(t)), \\ x(0) = \xi \end{cases}$$
> 在 $[-h, h]$ 上存在解 $x(t)$.
### 习题
1.5.1 设 $\mathscr{X}$ 是 $B^*$ 空间, $E$ 是以 $\theta$ 为内点的真凸子集, $P$ 是由 $E$ 产生的 Minkowski 泛函, 求证:
(1) $x \in \overset{\circ}{E} \Longleftrightarrow P(x) < 1$;
(2) $\overline{\overset{\circ}{E}} = \overline{E}$.
1.5.2 求证: 在 $B$ 空间中, 列紧集的凸包是列紧集.
1.5.3 设 $C$ 是 $B^*$ 空间 $\mathscr{X}$ 中的一个紧凸集, 映射 $T: C \to C$ 连续, 求证: $T$ 在 $C$ 上有一个不动点.
1.5.4 设 $C$ 是 $B$ 空间 $\mathscr{X}$ 中的一个有界闭凸集, 映射 $T_i: C \to \mathscr{X}(i = 1, 2)$ 适合
(1) $\forall x, y \in C \Longrightarrow T_1 x + T_2 y \in C$;
(2) $T_1$ 是一个压缩映射, $T_2$ 是一个紧映射.
求证: $T_1 + T_2$ 在 $C$ 上至少有一个不动点.
1.5.5 设 $A$ 是 $n \times n$ 矩阵, 其元素 $a_{ij} > 0(1 \leqslant i, j \leqslant n)$, 求证: 存在 $\lambda > 0$ 及各分量非负但不全为零的向量 $x \in \mathbb{R}^n$, 使得
$$Ax = \lambda x.$$
提示 在 $\mathbb{R}^n$ 上考察子集
$$C \triangleq \left\{x = (x_1, \cdots, x_n) \in \mathbb{R}^n \left| \sum_{i=1}^{n} x_i = 1, x_i \geqslant 0(i = 1, 2, \cdots, n) \right.\right\},$$
并做映射
$$f(x) = \frac{Ax}{\displaystyle\sum_{j=1}^{n}(Ax)_j}.$$
1.5.6 设 $K(x, y)$ 是 $[0,1] \times [0,1]$ 上的正值连续函数, 定义映射
$$(Tu)(x) = \int_0^1 K(x, y)u(y)\text{d}y \quad (\forall u \in C[0,1]).$$
求证: 存在 $\lambda > 0$ 及非负但不恒为零的连续函数 $u$, 满足
$$Tu = \lambda u.$$
## §6 内积空间
$B^*$ 空间上虽然有了范数, 可以定义收敛, 但是缺少一个重要概念 —— "角度", 所以还不能说两个向量相互垂直. 欧氏空间 $\mathbb{R}^n$ 上两个向量的夹角是通过内积来定义的, 在无穷维空间上也可引入类似的概念.
### 6.1 定义与基本性质
我们先从共轭双线性函数的概念入手.
> [!definition] 定义 1.6.1
> 线性空间 $\mathscr{X}$ 上的一个二元函数 $a(\cdot, \cdot): \mathscr{X} \times \mathscr{X} \to \mathbb{K}$, 称为是共轭双线性函数 (sesquilinear), 如果
> (1) $a(x, \alpha_1 y_1 + \alpha_2 y_2) = \overline{\alpha}_1 a(x, y_1) + \overline{\alpha}_2 a(x, y_2)$,
> (2) $a(\alpha_1 x_1 + \alpha_2 x_2, y) = \alpha_1 a(x_1, y) + \alpha_2 a(x_2, y)$,
> 其中 $\forall x, y, x_1, x_2, y_1, y_2 \in \mathscr{X}, \forall \alpha_1, \alpha_2 \in \mathbb{K}$. 我们还称由
> $$q(x) \triangleq a(x, x) \quad (\forall x \in \mathscr{X})$$
> 定义的函数为 $\mathscr{X}$ 上由 $a$ 诱导的二次型.
> [!proposition] 命题 1.6.2
> 设 $a$ 是 $\mathscr{X}$ 上的共轭双线性函数, $q$ 是由 $a$ 诱导的二次型, 那么
> $$q(x) \in \mathbb{R}(\forall x \in \mathscr{X}) \Longleftrightarrow a(x, y) = \overline{a(y, x)} \quad (\forall x, y \in \mathscr{X}).$$
> [!proof]- 证
> "$\Longleftarrow$" 是显然的. 下证 "$\Longrightarrow$". 从
> $$q(x + y) = \overline{q(x + y)} \quad (\forall x, y \in \mathscr{X}),$$
> 容易推出
> $$a(x, y) + a(y, x) = \overline{a(x, y)} + \overline{a(y, x)}. \tag{1.6.1}$$
> 在 (1.6.1) 式中换 $y$ 为 $\text{i}y$, 即得
> $$-a(x, y) + a(y, x) = \overline{a(x, y)} - \overline{a(y, x)}. \tag{1.6.2}$$
> (1.6.1) 式与 (1.6.2) 式相减即得 $a(x, y) = \overline{a(y, x)}$. $\blacksquare$
> [!definition] 定义 1.6.3
> 线性空间 $\mathscr{X}$ 上的一个共轭双线性函数
> $$(\cdot, \cdot): \mathscr{X} \times \mathscr{X} \to \mathbb{K}$$
> 称为是一个内积, 如果它满足:
> (1) $(x, y) = \overline{(y, x)} \quad (\forall x, y \in \mathscr{X})$ (共轭对称性);
> (2) $(x, x) \geqslant 0 \quad (\forall x \in \mathscr{X})$, $(x, x) = 0 \Longleftrightarrow x = \theta$ (正定性).
> 具有内积的线性空间称为内积空间, 记作 $(\mathscr{X}, (\cdot, \cdot))$.
> [!remark] 注
> 若在 (2) 中仅保存非负定条件: $(x, x) \geqslant 0(\forall x \in \mathscr{X})$, 则称 $(\cdot, \cdot)$ 为一个半内积, 对应的空间称为半内积空间.

> 显然, 这个内积概念是有穷维欧氏空间上相应概念的推广.
> [!example] 例 1.6.4
> $\mathbb{R}^n, \mathbb{C}^n$ 都是内积空间, 它们的内积分别定义为
> $$(x, y) = \sum_{i=1}^{n} x_i y_i \quad (\forall x, y \in \mathbb{R}^n),$$
> $$(x, y) = \sum_{i=1}^{n} x_i \overline{y}_i \quad (\forall x, y \in \mathbb{C}^n),$$
> 其中 $x = (x_1, x_2, \cdots, x_n), y = (y_1, y_2, \cdots, y_n)$.
> [!example] 例 1.6.5
> $l^2$ 空间 (定义见例 1.4.11 的注 (2)) 是内积空间, 规定内积
> $$(x, y) = \sum_{i=1}^{\infty} x_i \overline{y}_i,$$
> 其中 $x = (x_1, x_2, \cdots, x_i, \cdots), y = (y_1, y_2, \cdots, y_i, \cdots) \in l^2$.
> [!example] 例 1.6.6
> $L^2(\Omega, \mu)$ (定义见例 1.4.11) 是内积空间, 规定内积
> $$(u, v) = \int_\Omega u(x) \cdot \overline{v(x)}\text{d}\mu,$$
> 其中 $u, v \in L^2(\Omega, \mu)$.
> [!example] 例 1.6.7
> 在空间 $C^k(\overline{\Omega})$ (定义见例 1.4.13) 中, 规定内积
> $$(u, v) = \sum_{|\alpha| \leqslant k} \int_\Omega \partial^\alpha u(x) \cdot \overline{\partial^\alpha v(x)}\overline{\text{d}x} \quad (\forall u, v \in C^k(\overline{\Omega})).$$
> 那么 $(C^k(\overline{\Omega}), (\cdot, \cdot))$ 是一个内积空间.
> 和欧氏空间 $\mathbb{R}^n$ 一样, 由内积可以导出范数, 这要用到下面一个重要的不等式.
> [!proposition] 命题 1.6.8
> (Cauchy-Schwarz 不等式) 设 $(\mathscr{X}, (\cdot, \cdot))$ 是内积空间. 若令
> $$\|x\| = (x, x)^{\frac{1}{2}} \quad (\forall x \in \mathscr{X}), \tag{1.6.3}$$
> 则有
> $$|(x, y)| \leqslant \|x\| \cdot \|y\| \quad (\forall x, y \in \mathscr{X}), \tag{1.6.4}$$
> 而且 (1.6.4) 式中的等号当且仅当 $x$ 与 $y$ 线性相关时成立.
> 我们就更一般的情形证明不等式 (1.6.4).
> [!proposition] 命题 1.6.9
> 设 $a$ 是线性空间 $\mathscr{X}$ 上的共轭双线性函数, $q(x)$ 是由 $a$ 诱导的二次型. 如果
> $$q(x) \geqslant 0 \quad (\forall x \in \mathscr{X}) \quad \text{且} \quad q(x) = 0 \Longleftrightarrow x = \theta,$$
> 那么
> $$|a(x, y)| \leqslant [q(x)q(y)]^{\frac{1}{2}} \quad (\forall x, y \in \mathscr{X}), \tag{1.6.5}$$
> 而且 (1.6.5) 式中的等号当且仅当 $x$ 与 $y$ 线性相关时成立.
> [!proof]- 证
> 不妨设 $y \neq \theta$, 对 $\forall \lambda \in \mathbb{K}$ 考察
> $$q(x + \lambda y) = q(x) + \overline{\lambda}a(x, y) + \lambda a(y, x) + |\lambda|^2 q(y) \geqslant 0. \tag{1.6.6}$$
> 取 $\lambda = -a(x, y)/q(y)$, 因为 $a(x, y) = \overline{a(y, x)}$ (这是由假设 $q(x) \geqslant 0$, 根据命题 1.6.2 推出的), 所以
> $$q(x) - \frac{2|a(x, y)|^2}{q(y)} + \frac{|a(x, y)|^2}{q(y)} \geqslant 0,$$
> 由此立得 (1.6.5) 式. 又当 $x = -\lambda y(\lambda \in \mathbb{K})$ 时, (1.6.5) 式中的等号成立. 反之, 若 (1.6.5) 式中的等号成立, 则 (1.6.6) 式中的等号成立, 从而 $x = -\lambda y(\lambda \in \mathbb{K})$. $\blacksquare$
> [!proposition] 命题 1.6.10
> 内积空间 $(\mathscr{X}, (\cdot, \cdot))$ 按 (1.6.3) 式定义范数, 是一个 $B^*$ 空间.
> [!proof]- 证
> 只要证明按 (1.6.3) 式定义的 $\|\cdot\|$ 是范数. 事实上, 定义 1.4.9 中的 (1) 和 (3) 都是显然成立的, 下面来验证 (2).
> $$\begin{aligned} \|x + y\|^2 &= (x + y, x + y) \\ &= (x, x) + (x, y) + (y, x) + (y, y) \\ &\leqslant \|x\|^2 + 2\|x\|\|y\| + \|y\|^2 \\ &= (\|x\| + \|y\|)^2 \quad (\forall x, y \in \mathscr{X}). \end{aligned} \quad \blacksquare$$
> [!proposition] 命题 1.6.11
> 在内积空间 $(\mathscr{X}, (\cdot, \cdot))$ 中, 内积 $(x, y)$ 是 $\mathscr{X} \times \mathscr{X}$ 上关于范数 $\|\cdot\|$ 的连续函数.
> [!proof]- 证
> 设 $x_n \to x, y_n \to y$. 那么 $\|x_n\|$ 和 $\|y_n\|$ 有界, 用 $M$ 表示它们的一个上界, 便有
> $$\begin{aligned} |(x_n, y_n) - (x, y)| &\leqslant |(x_n, y_n) - (x, y_n)| + |(x, y_n) - (x, y)| \\ &\leqslant \|x_n - x\| \cdot \|y_n\| + \|x\| \cdot \|y_n - y\| \\ &\leqslant M\|x_n - x\| + \|x\|\|y_n - y\| \to 0 \quad (n \to \infty). \quad \blacksquare \end{aligned}$$
> [!proposition] 命题 1.6.12
> 内积空间 $(\mathscr{X}, (\cdot, \cdot))$ 是严格凸的 $B^*$ 空间.
> [!proof]- 证
> $\forall 0 < \lambda < 1$, 根据命题 1.6.8 我们有
> $$\begin{aligned} \|\lambda x + (1 - \lambda)y\|^2 &= \lambda^2\|x\|^2 + 2\lambda(1 - \lambda)\text{Re}(x, y) + (1 - \lambda)^2\|y\|^2 \\ &< [\lambda + (1 - \lambda)]^2 = 1 \quad (\text{当 } \|x\| = \|y\| = 1, x \neq y). \quad \blacksquare \end{aligned}$$
> 我们还要问: 什么样的 $B^*$ 空间 $(\mathscr{X}, \|\cdot\|)$ 可以引入一个内积 $(\cdot, \cdot)$ 适合
> $$(x, x)^{\frac{1}{2}} = \|x\| \quad (\forall x \in \mathscr{X}). \tag{1.6.7}$$
> [!proposition] 命题 1.6.13
> 在 $B^*$ 空间 $(\mathscr{X}, \|\cdot\|)$ 中, 为了在 $\mathscr{X}$ 上可引入一个内积 $(\cdot, \cdot)$ 适合 (1.6.7) 式, 必须且仅须范数 $\|\cdot\|$ 满足如下平
> 行四边形等式:
> $$\|x + y\|^2 + \|x - y\|^2 = 2(\|x\|^2 + \|y\|^2) \quad (\forall x, y \in \mathscr{X}). \tag{1.6.8}$$
> [!proof]- 证
> 必要性可通过直接计算得到. 为了证充分性, 令
> $$(x, y) = \begin{cases} \dfrac{1}{4}(\|x + y\|^2 - \|x - y\|^2), & \text{当 } \mathbb{K} = \mathbb{R}, \\ \dfrac{1}{4}(\|x + y\|^2 - \|x - y\|^2 + \text{i}\|x + \text{i}y\|^2 \\ \quad - \text{i}\|x - \text{i}y\|^2), & \text{当 } \mathbb{K} = \mathbb{C}. \end{cases}$$
> 容易验证它是一个满足 (1.6.7) 式的内积. $\blacksquare$
> [!definition] 定义 1.6.14
> 完备的内积空间称为 Hilbert 空间.
例 1.6.4, 例 1.6.5 和例 1.6.6 都是 Hilbert 空间. 下面我们再举一个在偏微分方程边值问题理论中特别有用的内积空间 —— $H_0^m(\Omega)$ 作为例子, 为此先证明如下引理.
> [!lemma] 引理 1.6.15
> (Poincar\'e 不等式) 设 $C_0^m(\Omega)$ 表示有界开区域 $\Omega \subset \mathbb{R}^n$ 上一切 $m$ 次连续可微, 并在边界 $\partial\Omega$ 的某邻域内为 $0$ 的函数集合, 即
> $$C_0^m(\Omega) = \{u \in C^m(\overline{\Omega}) \mid u(x) = 0, \text{ 当 } x \in \partial\Omega \text{ 的某邻域}\}.$$
> 那么 $\forall u \in C_0^m(\Omega)$ 有
> $$\sum_{|\alpha| < m} \int_\Omega |\partial^\alpha u(x)|^2\text{d}x \leqslant C \sum_{|\alpha| = m} \int_\Omega |\partial^\alpha u(x)|^2\text{d}x, \tag{1.6.9}$$
> 其中 $C$ 是仅依赖于区域 $\Omega$ 及 $m$ 的常数.
> [!proof]- 证
> 因为 $\Omega$ 是有界的, 我们可以把 $\Omega$ 放在某个边长为 $a$ 的立方体 $\Omega_1$ 内, 适当选择坐标系, 使得
> $$\Omega_1 = \{(x_1, x_2, \cdots, x_n) \in \mathbb{R}^n \mid 0 \leqslant x_i \leqslant a(i = 1, 2, \cdots, n)\}.$$
> 在 $\Omega_1 \setminus \Omega$ 上补充定义 $u = 0$, 经补充定义后, $u(x)$ 在 $\Omega_1$ 上 $m$ 次连续可微, 而且在边界上等于 $0$.$\forall x \in \Omega_1$,
> $$u(x) = \int_0^{x_1} \frac{\partial u}{\partial t}(t, x_2, \cdots, x_n)\text{d}t.$$
> 再利用 Cauchy-Schwarz 不等式 (命题 1.6.8), 我们有
> $$|u(x)|^2 \leqslant a\int_0^a \left|\frac{\partial u}{\partial x_1}\right|^2\text{d}x_1. \tag{1.6.10}$$
> 在 $\Omega_1$ 上积分不等式 (1.6.10), 我们得
> $$\begin{aligned} \int_\Omega |u(x)|^2\text{d}x &\leqslant a^2\int_\Omega \left|\frac{\partial u}{\partial x_1}\right|^2\text{d}x \\ &\leqslant a^2\int_\Omega |\text{grad } u(x)|^2\text{d}x. \end{aligned} \tag{1.6.11}$$
> 然后逐次应用不等式 (1.6.11) 于 $\partial^\alpha u(x)(|\alpha| < m)$, 即得不等式 (1.6.9). $\blacksquare$
> [!lemma] 引理 1.6.15
> 表明在 $C_0^m(\Omega)$ 上,
> $$\|u\|_m \triangleq \left(\sum_{|\alpha| = m} \int_\Omega |\partial^\alpha u(x)|^2\text{d}x\right)^{\frac{1}{2}} \tag{1.6.12}$$
> 和
> $$\|u\| \triangleq \left(\sum_{|\alpha| \leqslant m} \int_\Omega |\partial^\alpha u(x)|^2\text{d}x\right)^{\frac{1}{2}} \tag{1.6.13}$$
> 是一对等价范数. 记 $C_0^m(\Omega)$ 按 (1.6.12) 式完备化后的空间为 $H_0^m(\Omega)$. 它是 $H^m(\Omega)$ (定义见例 1.4.14) 的一个闭子空间.
> [!example] 例 1.6.16
> $H_0^m(\Omega)$ 是一个 Hilbert 空间, 其内积定义为
> $$(u, v)_m = \sum_{|\alpha| = m} \int_\Omega \partial^\alpha u(x) \cdot \overline{\partial^\alpha v(x)}\text{d}x \quad (\forall u, v \in C_0^m(\Omega)). \tag{1.6.14}$$
> [!remark] 注
> 当 $\Omega$ 的边界 $\partial\Omega$ 具有光滑的法向导数时, $H_0^m(\Omega)$ 中的元素实际上是满足边界条件:

> $$\left.u\right|_{\partial\Omega} = \left.\frac{\partial u}{\partial n}\right|_{\partial\Omega} = \cdots = \left.\left(\frac{\partial}{\partial n}\right)^{m-1}u\right|_{\partial\Omega} = 0$$
> 的 $C^m(\Omega)$ 函数 $u$ 的一种推广, 其中 $\partial/\partial n$ 是 $\partial\Omega$ 上的法向导数.
### 6.2 正交与正交基
在内积空间 $\mathscr{X}$ 中, 可以引入两个向量夹角的概念, 从而可定义什么叫垂直或正交. 和欧氏空间一样, 对内积空间中的两个向量 $x, y$, 我们用
$$\theta \triangleq \cos^{-1}\frac{|(x, y)|}{\|x\| \cdot \|y\|}$$
表示它们之间的夹角.
> [!definition] 定义 1.6.17
> 内积空间 $\mathscr{X}$ 上的两个元素 $x$ 与 $y$ 称为是正交的, 是指
> $$(x, y) = 0,$$
> 记作 $x \perp y$. 又设 $M$ 是 $\mathscr{X}$ 的一个非空子集, $x \in \mathscr{X}$. 若对 $\forall y \in M$ 都有 $x \perp y$, 则称 $x$ 与 $M$ 正交, 记作 $x \perp M$. 此外我们还称集合
> $$\{x \in \mathscr{X} \mid x \perp M\}$$
> 为 $M$ 的正交补, 记作 $M^\perp$.
> 由定义可以直接推出
> [!proposition] 命题 1.6.18
> 设 $\mathscr{X}$ 是内积空间, $M$ 是 $\mathscr{X}$ 的一个非空子集.
> (1) 若 $x \perp y_i(i = 1, 2)$, 则
> $$x \perp \lambda_1 y_1 + \lambda_2 y_2 \quad (\forall \lambda_1, \lambda_2 \in \mathbb{K}).$$
> (2) 若 $x = y + z$, 且 $y \perp z$, 则
> $$\|x\|^2 = \|y\|^2 + \|z\|^2.$$
> (3) 若 $x \perp y_n(n \in \mathbb{N})$, 且 $y_n \to y$, 则 $x \perp y$.
> (4) 若 $x \perp M$, 则 $x \perp \text{span } M$.
> (5) $M^\perp$ 是 $\mathscr{X}$ 的一个闭线性子空间.
> 现在我们把欧氏空间中的直角坐标系概念推广到一般的内积空间中去.
> [!definition] 定义 1.6.19
> 设 $\mathscr{X}$ 是一个内积空间, 集合 $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 的一个子集. 称 $S$ 为正交集, 是指
> $$e_\alpha \perp e_\beta \quad (\text{当 } \alpha \neq \beta, \forall \alpha, \beta \in A).$$
> 如果还有 $\|e_\alpha\| = 1(\forall \alpha \in A)$, 则称 $S$ 为正交规范集. 又如果在 $\mathscr{X}$ 中不存在非零元与 $S$ 正交, 即 $S^\perp = \{\theta\}$, 那么称 $S$ 为完备的.
> 一个内积空间是否一定有完备的正交集? 为了回答这个问题, 我们引用一个与无穷归纳法等价的命题 —— Zorn 引理.
> [!lemma] 引理 1.6.20
> (Zorn) 设 $\mathscr{X}$ 是一个半序集. 如果它的每一个全序子集有一个上界, 那么 $\mathscr{X}$ 有一个极大元.
> [!proposition] 命题 1.6.21
> 非 $\{\theta\}$ 内积空间 $\mathscr{X}$ 中必存在完备正交集.
> [!proof]- 证
> 因为 $\mathscr{X} \neq \{\theta\}$, 所以 $\mathscr{X}$ 中的正交集依包含关系构成一个半序集类, 并且每个全序子集类有一个上界, 就是这些集之并集. 依 Zorn 引理 (引理 1.6.20), 这个半序集类有极大元. 我们来证明: 这个极大元 (记作 $S$) 就是完备正交集. 因若不然, 则必 $\exists x_0 \in S^\perp, x_0 \neq \theta$, 令 $S_1 = \{x_0\} \cup S$, 得到 $S_1$ 还是正交集, 并且 $S \subsetneqq S_1$, 这便与 $S$ 的极大性相矛盾. $\blacksquare$
> [!definition] 定义 1.6.22
> 内积空间 $\mathscr{X}$ 中的正交规范集 $S = \{e_\alpha \mid \alpha \in A\}$, 称为一个基 (或封闭的) 是指 $\forall x \in \mathscr{X}$, 有下列表示:
> $$x = \sum_{\alpha \in A}(x, e_\alpha)e_\alpha, \tag{1.6.15}$$
> 其中 $\{(x, e_\alpha) \mid \alpha \in A\}$ 称为 $x$ 关于基 $\{e_\alpha \mid \alpha \in A\}$ 的 Fourier 系数.
> [!theorem] 定理 1.6.23
> (Bessel 不等式) 设 $\mathscr{X}$ 是一个内积空间. 如果 $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 中的正交规范集, 那么 $\forall x \in \mathscr{X}$, 有
> $$\sum_{\alpha \in A}|(x, e_\alpha)|^2 \leqslant \|x\|^2. \tag{1.6.16}$$
> [!proof]- 证
> 首先对 $A$ 的任意有限子集, 不妨设它们是 $1, 2, \cdots, n$, 证明
> $$\sum_{i=1}^{n}|(x, e_i)|^2 \leqslant \|x\|^2. \tag{1.6.17}$$
> 因为
> $$\begin{aligned} 0 &\leqslant \left\|x - \sum_{i=1}^{n}(x, e_i)e_i\right\|^2 \\ &= \left(x - \sum_{i=1}^{n}(x, e_i)e_i, x - \sum_{j=1}^{n}(x, e_j)e_j\right) \\ &= \|x\|^2 - \sum_{i=1}^{n}|(x, e_i)|^2, \end{aligned}$$
> 所以 (1.6.17) 式成立. 由此可见, 对 $\forall n \in \mathbb{N}$, 适合 $|(x, e_\alpha)| > 1/n$ 的 $\alpha \in A$ 至多只有有穷多个, 从而 $(x, e_\alpha) \neq 0$ 的 $\alpha \in A$ 至多有可数多个. 于是 (1.6.16) 式的左端实际上是至多可数项求和的级数. 再由 (1.6.17) 式我们有
> $$\sum_{\alpha \in A_f}|(x, e_\alpha)|^2 \leqslant \|x\|^2,$$
> 其中 $A_f$ 表示 $A$ 的任意有限子集. 由此立得 (1.6.16) 式. $\blacksquare$
> [!corollary] 推论 1.6.24
> 假设 $\mathscr{X}$ 是 Hilbert 空间, 且 $\{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 中的正交规范集. 那么对 $\forall x \in \mathscr{X}$, 有
> $$\sum_{\alpha \in A}(x, e_\alpha)e_\alpha \in \mathscr{X},$$
> 且
> $$\left\|x - \sum_{\alpha \in A}(x, e_\alpha)e_\alpha\right\|^2 = \|x\|^2 - \sum_{\alpha \in A}|(x, e_\alpha)|^2. \tag{1.6.18}$$
> [!proof]- 证
> 不妨设使得 $(x, e_\alpha) \neq 0$ 的可数多个 $\alpha \in A$ 是 $1, 2, \cdots, n, \cdots$, 那么
> $$\sum_{\alpha \in A}(x, e_\alpha)e_\alpha = \sum_{n=1}^{\infty}(x, e_n)e_n,$$
> 并由 Bessel 不等式 (定理 1.6.23) 可知 $\displaystyle\sum_{n=1}^{\infty}|(x, e_n)|^2$ 收敛, 因此有
> $$\left\|\sum_{n=m}^{m+p}(x, e_n)e_n\right\|^2 = \sum_{n=m}^{m+p}|(x, e_n)|^2 \to 0 \quad (m \to \infty, \forall p \in \mathbb{N}).$$
> 于是, $\displaystyle\left\{x_m = \sum_{n=1}^{m}(x, e_n)e_n\right\}$ 是基本列, 从而
> $$\sum_{\alpha \in A}(x, e_\alpha)e_\alpha = \sum_{n=1}^{\infty}(x, e_n)e_n = \lim_{m \to \infty}x_m \in \mathscr{X}.$$
> 又因为 $x - \displaystyle\sum_{n=1}^{\infty}(x, e_n)e_n \perp \sum_{n=1}^{\infty}(x, e_n)e_n$, 所以
> $$\left\|x - \sum_{n=1}^{\infty}(x, e_n)e_n\right\|^2 = \|x\|^2 - \sum_{n=1}^{\infty}|(x, e_n)|^2.$$
> 这就是 (1.6.18) 式. $\blacksquare$
> 何时 Bessel 不等式 (1.6.16) 式取等号? 何时 $\displaystyle\sum_{\alpha \in A}(x, e_\alpha)e_\alpha$ 等于 $x$? 请看如下定理.
> [!theorem] 定理 1.6.25
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, 若 $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 中的正交规范集, 则如下三条等价:
> (1) $S$ 是封闭的;
> (2) $S$ 是完备的;
> (3) Parseval 等式
> $$\|x\|^2 = \sum_{\alpha \in A}|(x, e_\alpha)|^2 \quad (\forall x \in \mathscr{X}). \tag{1.6.19}$$
> 成立.
> [!proof]- 证
> (1)$\Longrightarrow$(2). 若 $S$ 不完备, 则 $\exists x \in \mathscr{X} \setminus \{\theta\}$, 使得
> $$(x, e_\alpha) = 0 \quad (\forall \alpha \in A).$$
> 但由封闭性有 $x = \displaystyle\sum_{\alpha \in A}(x, e_\alpha)e_\alpha = \theta$, 矛盾.
> (2)$\Longrightarrow$(3). 若 $\exists x \in \mathscr{X}$ 使 Parseval 等式 (1.6.19) 不成立, 则由 (1.6.18) 式,
> $$\left\|x - \sum_{\alpha \in A}(x, e_\alpha)e_\alpha\right\|^2 = \|x\|^2 - \sum_{\alpha \in A}|(x, e_\alpha)|^2 > 0.$$
> 于是 $y \triangleq x - \displaystyle\sum_{\alpha \in A}(x, e_\alpha)e_\alpha \neq \theta$, 但 $y \in S^\perp$. 这与 $S$ 完备性矛盾.
> (3)$\Longrightarrow$(1). 联合 Parseval 等式 (1.6.19) 与 (1.6.18) 式得到
> $$\left\|x - \sum_{\alpha \in A}(x, e_\alpha)e_\alpha\right\|^2 = \|x\|^2 - \sum_{\alpha \in A}|(x, e_\alpha)|^2 = 0.$$
> 因此有
> $$x = \sum_{\alpha \in A}(x, e_\alpha)e_\alpha. \quad \blacksquare$$
> 下面举一些正交规范基的例子.
> [!example] 例 1.6.26
> 在 $L^2[0, 2\pi]$ 上,
> $$e_n(t) = \frac{1}{\sqrt{2\pi}}e^{\text{i}nt} \quad (n = 0, \pm 1, \pm 2, \cdots)$$
> 是一组正交规范基. $\forall u \in L^2[0, 2\pi]$, 对应的 Fourier 系数是
> $$(u, e_n) = \frac{1}{\sqrt{2\pi}}\int_0^{2\pi} u(t)e^{-\text{i}nt}\text{d}t \quad (n = 0, \pm 1, \pm 2, \cdots).$$
> [!example] 例 1.6.27
> 在 $l^2$ 空间上,
> $$e_n = (\underbrace{0, 0, \cdots, 0}_{n}, 1, 0, \cdots) \quad (n = 1, 2, 3, \cdots)$$
> 是一组正交规范基.
> [!example] 例 1.6.28
> 设 $D$ 是 $\mathbb{C}$ 中的单位开圆域, $H^2(D)$ 表示在 $D$ 内满足
> $$\iint_D |u(z)|^2\text{d}x\text{d}y < \infty \quad (z = x + \text{i}y)$$
> 的解析函数全体组成的空间. 规定内积为
> $$(u, v) = \iint_D u(z)\overline{v(z)}\text{d}x\text{d}y.$$
> 这时函数组
> $$\varphi_n(z) = \sqrt{\frac{n}{\pi}}z^{n-1} \quad (n = 1, 2, 3, \cdots)$$
> 是一组正交规范基. 设 $\displaystyle u(z) = \sum_{k=0}^{\infty}b_k z^k \in H^2(D)$, 它对应的 Fourier 系数是
> $$\begin{aligned} (u, \varphi_n) &= \iint_D \sum_{k=0}^{\infty}b_k z^k \sqrt{\frac{n}{\pi}}\overline{z}^{n-1}\text{d}x\text{d}y \\ &= \sum_{k=0}^{\infty}b_k\sqrt{\frac{\pi}{k+1}}(\varphi_{k+1}, \varphi_n) \\ &= b_{n-1}\sqrt{\frac{\pi}{n}} \quad (n = 1, 2, 3, \cdots). \end{aligned}$$
### 6.3 正交化与 Hilbert 空间的同构
线性代数中的 Gram-Schmidt 正交化过程完全可以搬到内积空间上来.
> [!proposition] 命题 1.6.29
> 设 $\{x_1, x_2, \cdots, x_n, \cdots\}$ 是内积空间 $(\mathscr{X}, (\cdot, \cdot))$ 上的线性无关列, 那么可以取规范正交集 $\{e_1, e_2, \cdots, e_n, \cdots\}$, 使得对 $\forall n \in \mathbb{N}$, $e_n$ 是 $x_1, x_2, \cdots, x_n$ 的线性组合, 且 $x_n$ 也是 $e_1, e_2, \cdots, e_n$ 的线性组合.
> [!proof]- 证
> 从 $x_1$ 出发, 令 $e_1 = x_1/\|x_1\|$, 则 $x_1 = c_{11}e_1$, 其中 $c_{11} = \|x_1\|$. 用归纳法. 假设 $\{e_1, e_2, \cdots, e_{n-1}\}$ 已经构造好了, 令
> $$y_n = x_n - \sum_{i=1}^{n-1}(x_n, e_i)e_i,$$
> 则 $y_n \neq \theta$ (否则 $x_n \in \text{span}\{e_1, e_2, \cdots, e_{n-1}\} = \text{span}\{x_1, x_2, \cdots, x_{n-1}\}$, 这与 $x_1, x_2, \cdots, x_n$ 线性无关矛盾). 再令
> $$e_n = y_n/\|y_n\|,$$
> 则 $\{e_1, e_2, \cdots, e_n\}$ 便是所求的规范正交集. $\blacksquare$
> 设 $\{e_n\}_{n=1}^{\infty}$ 是内积空间 $\mathscr{X}$ 中的一个规范正交集, 那么 $\forall x \in \mathscr{X}$,
> $$\sum_{n=1}^{\infty}|(x, e_n)|^2 \leqslant \|x\|^2.$$
> 这说明映射 $T: x \mapsto \{(x, e_n)\}_{n=1}^{\infty}$ 是 $\mathscr{X} \to l^2$ 的连续线性映射. 特别地, 如果 $\mathscr{X}$ 是 Hilbert 空间, $\{e_n\}_{n=1}^{\infty}$ 是 $\mathscr{X}$ 的一个基, 则由 Parseval 等式与 Riesz-Fischer 定理 (见下面的定理 1.6.31) 知, $T$ 还是 $\mathscr{X} \to l^2$ 的等距在上同构.
> [!theorem] 定理 1.6.30
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, $C$ 是 $\mathscr{X}$ 中的一个闭凸子集. 则对任意给定的 $x \in \mathscr{X}$, 必存在唯一的 $y \in C$, 使得
> $$\|x - y\| = \inf_{z \in C}\|x - z\|. \tag{1.6.20}$$
> [!proof]- 证
> 首先证明使得 (1.6.20) 式成立的 $y$ 存在. 为此不妨设 $x = \theta$ (否则考虑集合 $C - x \triangleq \{y - x \mid y \in C\}$ 代替 $C$). 现在取 $\{y_n\} \subset C$, 使得
> $$\|y_n\| \to d = \inf_{z \in C}\|z\| \quad (n \to \infty).$$
> 由内积空间的平行四边形等式 (命题 1.6.13), 我们有
> $$\left\|\frac{y_m + y_n}{2}\right\|^2 + \left\|\frac{y_m - y_n}{2}\right\|^2 = \frac{1}{2}(\|y_m\|^2 + \|y_n\|^2).$$
> 因为 $C$ 是凸的, $(y_m + y_n)/2 \in C$, 所以
> $$\left\|\frac{y_m - y_n}{2}\right\|^2 \leqslant \frac{1}{2}(\|y_m\|^2 + \|y_n\|^2) - d^2 \to 0 \quad (m, n \to \infty).$$
> 这说明 $\{y_n\}$ 是一个基本列, 从而 $\exists! y \in C$, 使得 $y_n \to y$. 再由范数的连续性得 $\|y\| = d$, 这就证明了存在性.
> 再证唯一性. 假设 $y_1, y_2 \in C$ 都满足 $\|y_1\| = \|y_2\| = d$, 那么
> $$\left\|\frac{y_1 + y_2}{2}\right\|^2 + \left\|\frac{y_1 - y_2}{2}\right\|^2 = \frac{1}{2}(\|y_1\|^2 + \|y_2\|^2) = d^2.$$
> 因为 $(y_1 + y_2)/2 \in C$, 所以 $\|y_1 - y_2\|^2/4 \leqslant d^2 - d^2 = 0$, 由此即得 $y_1 = y_2$. $\blacksquare$
> [!theorem] 定理 1.6.31
> (Riesz-Fischer) 设 $\mathscr{X}$ 是一个 Hilbert 空间, $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 中的一个正交规范集. 那么映射 $T: \mathscr{X} \to l^2(S)$,
> $$T: x \mapsto \widehat{x} \triangleq \{(x, e_\alpha)\}_{\alpha \in A},$$
> 是 $\mathscr{X}$ 到 $l^2(S)$ 的等距线性满映射.
> [!proof]- 证
> 显然 $T$ 是线性的. 由 Bessel 不等式 (定理 1.6.23) 知, $\widehat{x} \in l^2(S)$, 且 $T$ 是等距的. 又显然 $T$ 是单射. 下证 $T$ 是满射. 设 $\widehat{x} = \{c_\alpha\}_{\alpha \in A} \in l^2(S)$, 要证 $\exists x \in \mathscr{X}$, 使得 $\widehat{x} = T x$. 令
> $$x = \sum_{\alpha \in A}c_\alpha e_\alpha,$$
> 则由 $\widehat{x} \in l^2(S)$ 知 $\displaystyle\sum_{\alpha \in A}|c_\alpha|^2 < \infty$, 从而上式右端级数收敛, 即 $x \in \mathscr{X}$ 有意义. 再由 $\mathscr{X}$ 的完备性知 $x \in \mathscr{X}$. 最后, $\forall \beta \in A$, $(x, e_\beta) = c_\beta$, 即 $\widehat{x} = T x$. $\blacksquare$
> [!corollary] 推论 1.6.32
> 设 $\mathscr{X}$ 是 Hilbert 空间, $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 的一个正交规范基. 那么 $\mathscr{X}$ 与 $l^2(S)$ 等距同构.
> [!proof]- 证
> 由定理 1.6.31 直接得到. $\blacksquare$
> 下面我们来讨论 Hilbert 空间的同构分类问题. 由推论 1.6.32 知, 任何一个 Hilbert 空间 $\mathscr{X}$ 都与某个 $l^2(S)$ 等距同构. 如果我们能够证明: 两个 $l^2(S_1)$ 与 $l^2(S_2)$ 等距同构, 当且仅当它们有相同的基数 (即集合 $S_1$ 与 $S_2$ 对等), 那么任何一个 Hilbert 空间的同构类就完全由某个集合的基数所决定.
> 为此, 我们需要引入如下概念.
> [!definition] 定义 1.6.33
> 设 $\mathscr{X}$ 是 Hilbert 空间, 如果 $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 的一个正交规范基, 那么称 $S$ 的基数为 $\mathscr{X}$ 的维数, 记作 $\dim\mathscr{X}$.
> [!theorem] 定理 1.6.34
> 两个 Hilbert 空间等距同构, 当且仅当它们有相同的维数.
> [!proof]- 证
> 必要性. 设 $\mathscr{X}$ 与 $\widetilde{\mathscr{X}}$ 是两个等距同构的 Hilbert 空间, $S = \{e_\alpha \mid \alpha \in A\}$ 是 $\mathscr{X}$ 的一个正交规范基, $T: \mathscr{X} \to \widetilde{\mathscr{X}}$ 是等距同构映射. 令 $\widetilde{e}_\alpha = Te_\alpha$, 则 $\widetilde{S} = \{\widetilde{e}_\alpha \mid \alpha \in A\}$ 是 $\widetilde{\mathscr{X}}$ 的一个正交规范基, 且 $S$ 与 $\widetilde{S}$ 有相同的基数.
> 充分性. 设 $\dim\mathscr{X} = \dim\widetilde{\mathscr{X}}$, 则 $\mathscr{X}$ 与 $\widetilde{\mathscr{X}}$ 分别存在正交规范基 $S = \{e_\alpha \mid \alpha \in A\}$ 和 $\widetilde{S} = \{\widetilde{e}_\alpha \mid \alpha \in A\}$ (注意 $S$ 与 $\widetilde{S}$ 有相同的指标集 $A$). 定义映射
> $$T: x = \sum_{\alpha \in A}(x, e_\alpha)e_\alpha \mapsto \sum_{\alpha \in A}(x, e_\alpha)\widetilde{e}_\alpha,$$
> 则 $T$ 是 $\mathscr{X}$ 到 $\widetilde{\mathscr{X}}$ 的等距同构映射. $\blacksquare$
### 6.4 再论最佳逼近问题
在 \S 4.5 中, 我们曾把最佳逼近问题看成求空间上一点到它的一个线性子空间的距离问题, 在那里给定的子空间是有穷维的. 对于无穷维闭线性子空间 $M$ 来说, 一般不知道能否对给定 $x \in \mathscr{X}$, 找到一点 $y \in M$ 适合
$$\inf_{z \in M}\|x - z\| = \|x - y\|$$
(见习题 1.4.14). 然而在 Hilbert 空间中, 不但答案是肯定的, 而且可以用更为一般的闭凸子集 $C$ 来代替闭线性子空间 $M$. 现在我们从极小化泛函的角度来研究这个问题.
> [!definition] 定义 1.6.35
> 设 $\mathscr{X}$ 是 Hilbert 空间, $a: \mathscr{X} \times \mathscr{X} \to \mathbb{K}$ 是 $\mathscr{X}$ 上的共轭双线性函数. 如果 $\exists M > 0$, 使得
> $$|a(x, y)| \leqslant M\|x\|\|y\| \quad (\forall x, y \in \mathscr{X}),$$
> 则称 $a$ 是连续的. 如果 moreover $\exists \delta > 0$, 使得
> $$a(x, x) \geqslant \delta\|x\|^2 \quad (\forall x \in \mathscr{X}),$$
> 则称 $a$ 是强制的 (coercive).
> [!theorem] 定理 1.6.36
> (Lax-Milgram)$^{\text{\textcircled{1}}}$ 设 $a(x, y)$ 是 Hilbert 空间 $\mathscr{X}$ 上的强制连续共轭双线性函数, 那么必存在具有连续逆的连续线性算子 $A \in \mathscr{L}(\mathscr{X})$, 满足
> $$a(x, y) = (x, Ay) \quad (\forall x, y \in \mathscr{X}), \tag{1.6.21}$$
> $$\|A^{-1}\| \leqslant \frac{1}{\delta}. \tag{1.6.22}$$
> [!proof]- 证
> 由定理 1.6.34, 为了 $y$ 是 $x$ 在 $M$ 上的最佳逼近元, 必须且仅须
> $$\operatorname{Re}(x-y, y-z) \geqslant 0 \quad (\forall z \in M).$$ \hfill (1.6.29)
> 因为 $M$ 是线性流形, 所以 $\forall z \in M$ 可表示为
> $$z = y + w \quad (w \in M - \{y\}).$$ \hfill (1.6.30)
> 注意到 $M - \{y\}$ 是线性子空间, 且当 $z$ 跑遍 $M$ 时, $w$ 跑遍 $M - \{y\}$. 将 (1.6.30) 式代入 (1.6.29) 式得
> $$\operatorname{Re}(x-y, w) \leqslant 0 \quad (\forall w \in M - \{y\}).$$ \hfill (1.6.31)
> 在 (1.6.31) 式中, 用 $-w$ 代替 $w$, 便推出
> $$\operatorname{Re}(x-y, w) = 0 \quad (\forall w \in M - \{y\}).$$ \hfill (1.6.32)
> 进一步在 (1.6.32) 式中用 $\mathrm{i}w$ 代替 $w$, 便推出
> $$(x-y, w) = 0 \quad (\forall w \in M - \{y\}).$$
> 这就是 (1.6.28) 式. $\blacksquare$
> [!example] 特例 1.6.36
> 当 $M$ 是闭线性子空间时, $M - \{y\} = M$. 因此, 为了 $y$ 是 $x$ 在 $M$ 上的最佳逼近元, 必须且仅须 $x - y \perp M$.
> [!corollary] 推论 1.6.37 (正交分解)
> 设 $M$ 是 Hilbert 空间 $\mathscr{X}$ 上的一个闭线性子空间. 那么 $\forall x \in \mathscr{X}$, 存在下列唯一的正交分解:
> $$x = y + z \quad (y \in M, z \in M^\perp).$$ \hfill (1.6.33)
> [!proof]- 证
> 取 $y$ 为 $x$ 在 $M$ 上的最佳逼近元, 而 $z = x - y$, 即为满足 (1.6.33) 式的分解. 又若还存在另外一种分解:
> $$x = y' + z' \quad (y' \in M, z' \in M^\perp),$$
> 则
> $$y - y' = z - z' (\in M \cap M^\perp) = \theta,$$
> 即得分解的唯一性. $\blacksquare$
> [!remark] 注
> 由 $x$ 的正交分解产生的 $y$ 称为 $x$ 在 $M$ 上的正交投影 (见图 1.6.2).

> [!proof]-
> 不妨设 $f$ 不是 $0$ 泛函, 考察集合 $M \triangleq \{x \in \mathscr{X} \mid f(x) = 0\}$. 由于 $f$ 是连续线性的, 则 $M$ 是一个真闭线性子空间, 任取 $x_0 \perp M$ (由正交分解定理 (推论 1.6.37), 这 $x_0$ 是存在的). 不妨设 $\|x_0\| = 1$, $\mathscr{X}$ 中任意元素 $x$ 可以分解如下:
> $$x = \alpha x_0 + y,$$ \hfill (2.2.2)
> 其中 $y \in M, \alpha = f(x)/f(x_0)$. 这是因为当令 $y = x - \alpha x_0$ 时,
> $$f(y) = f(x - \alpha x_0) = f(x) - \alpha f(x_0) = 0.$$
> 在 (2.2.2) 式两边同时与 $x_0$ 做内积, 我们得
> $$\alpha = (x, x_0).$$
> 于是
> $$f(x) = \alpha f(x_0) = (x, \overline{f(x_0)} x_0).$$
> 取 $y_f = \overline{f(x_0)} x_0$, 这就是我们要求的.
>
> 再证唯一性. 若 $\exists y, y' \in \mathscr{X}$ 满足
> $$f(x) = (x, y) = (x, y') \quad (\forall x \in \mathscr{X}),$$
> 那么
> $$(x, y - y') = 0 \quad (\forall x \in \mathscr{X}).$$
> 特别取 $x = y - y'$, 就推得 $y = y'$. $\blacksquare$

> [!remark] 注 1
> 这个定理的几何意义如下: 连续线性泛函 $f(x)$ 的等值面都是互相平行的超平面 (见习题 2.1.8), 因此每个向量 $x$ 的泛函值 $f(x)$ 应由 $x$ 的垂直于这些等值面的分量所决定.

> [!remark] 注 2
> 我们还知道, $\|f\| = \|y_f\|$. 事实上, 由 (2.2.1) 式得
> $$|f(x)| \leqslant \|y_f\| \cdot \|x\| \quad (\forall x \in \mathscr{X}), \quad \text{或} \quad \|f\| \leqslant \|y_f\|.$$
> 另一方面, 取 $x = y_f$, 再由 (2.2.1) 式可推得 $\|y_f\| \leqslant \|f\|$, 即得到 $\|f\| = \|y_f\|$.

> [!proof]-
> **存在性.** 根据 Poincaré 不等式 (引理 1.6.15),
> $$(u,v)_1 \triangleq \int_\Omega \nabla u \cdot \nabla v \mathrm{d}x \quad (\forall u, v \in H_0^1(\Omega))$$
> 是 $H_0^1(\Omega)$ 上的一个内积. 而
> $$\begin{aligned} \left|\int_\Omega f \cdot v \mathrm{d}x\right| &\leqslant \left(\int_\Omega |f|^2 \mathrm{d}x\right)^{\frac{1}{2}} \left(\int_\Omega |v|^2 \mathrm{d}x\right)^{\frac{1}{2}} \\ &\leqslant C\|f\| \cdot \|v\|_1 \quad (\forall v \in H_0^1(\Omega)), \end{aligned}$$ \hfill (2.2.7)
> 其中 $\|\cdot\|$ 与 $\|\cdot\|_1$ 分别表示 $L^2(\Omega)$ 与 $H_0^1(\Omega)$ 上的范数. (2.2.7) 式表明,
> $$v \mapsto \int_\Omega f \cdot v \mathrm{d}x \quad (\forall v \in H_0^1(\Omega))$$
> 是 $H_0^1(\Omega)$ 上的一个连续线性泛函. 应用 Riesz 表示定理 (定理 2.2.1), $\exists u_0 \in H_0^1(\Omega)$, 使得
> $$(u_0, v)_1 = \int_\Omega \nabla u_0 \cdot \nabla v \mathrm{d}x = \int_\Omega fv \mathrm{d}x \quad (\forall v \in H_0^1(\Omega)).$$
> 从而 $u_0$ 是一个弱解.
>
> **唯一性.** 假若 $u_0, u_0'$ 都是弱解, 那么
> $$(u_0 - u_0', v) = 0 \quad (\forall v \in H_0^1(\Omega)).$$
> 即得 $u_0 = u_0'$.

对于非 0-Dirichlet 问题, 总是化到 0-Dirichlet 问题去做. 给定 $\partial\Omega$ 上的函数 $g$, 如果 $\exists u_0 \in C^2(\overline{\Omega})$, 使得 $u_0|_{\partial\Omega} = g$, 则非齐次边值问题可以化归齐次边值问题. 事实上, 设 $f_0 \triangleq -\Delta u_0, v \triangleq u - u_0$. 又若 $v$ 是
$$\begin{cases} -\Delta v = f - f_0, \\ v|_{\partial\Omega} = 0 \end{cases}$$ \hfill (2.2.8) \hfill (2.2.9)
的弱解, 则 $u$ 就是
$$\begin{cases} -\Delta u = f, \\ u|_{\partial\Omega} = g \end{cases}$$
的弱解. 而问题 (2.2.8) 与 (2.2.9) 是 0-Dirichlet 问题.

至于哪些函数 $g$ 可以扩张成 $C^2(\overline{\Omega})$ 函数的边值? 又若 $u$ 是齐次边值问题的弱解, 何时它是古典解? 这些问题在偏微分方程理论中给予答复.

### 6.5 应用: 最小二乘法

> [!proof]-
> 先假设 $\mu(\Omega) < \infty$. 考虑实 Hilbert 空间 $L^2(\Omega, (\mu + \nu))$, 其范数为
> $$\|u\|^2 = \int_\Omega u^2(x) \mathrm{d}(\mu + \nu).$$
> 令 $l(u) = \displaystyle\int_\Omega u \mathrm{d}\mu$, 显然 $l(u)$ 关于 $u$ 线性, 由 Cauchy-Schwarz 不等式 (命题 1.6.8),
> $$\begin{aligned} \|l(u)\| &\leqslant \mu(\Omega)^{\frac{1}{2}} \left(\int_\Omega u^2 \mathrm{d}\mu\right)^{\frac{1}{2}} \\ &\leqslant \mu(\Omega)^{\frac{1}{2}} \|u\|, \quad \forall u \in L^2(\Omega, (\mu + \nu)). \end{aligned}$$
> 它还是有界的. 根据 Riesz 表示定理 (定理 2.2.1), 存在函数 $v \in L^2(\Omega, (\mu + \nu))$, 使得
> $$\int_\Omega u \mathrm{d}\mu = \int_\Omega uv \mathrm{d}(\mu + \nu),$$
> 即
> $$\int_\Omega u(1-v) \mathrm{d}\mu = \int_\Omega uv \mathrm{d}\nu, \quad \forall u \in L^2(\Omega, (\mu + \nu)).$$ \hfill (2.2.14)
>
> 我们断言,
> $$0 < v(x) \leqslant 1 \quad \text{a.e. } \mu.$$
> 为此, 令 $F = \{x \in \Omega \mid v(x) \leqslant 0\}$, 取 $u(x) = \chi_F(x)$ 代入 (2.2.14) 式, 有
> $$\int_F (1-v) \mathrm{d}\mu = \int_F v \mathrm{d}\nu,$$
> 即
> $$\mu(F) = \int_F \mathrm{d}\mu = \int_F v \mathrm{d}(\mu + \nu) \leqslant 0,$$
> 从而 $\mu(F) = 0$.
>
> 同样, 令 $G = \{x \in \Omega \mid v(x) > 1\}$, 取 $u(x) = \chi_G(x)$ 代入 (2.2.14) 式, 有
> $$0 \geqslant \int_G (1-v) \mathrm{d}\mu = \int_G v \mathrm{d}\nu \geqslant \nu(G) \geqslant 0,$$
> 即
> $$\int_G (1-v) \mathrm{d}\mu = 0.$$
> 因为 $1-v(x) < 0, x \in G$, 所以 $\mu(G) = 0$.
>
> 这就证明了 $0 < v(x) \leqslant 1, x \in \Omega$ a.e. $\mu$. 令 $\displaystyle g(x) = \frac{1-v(x)}{v(x)}$, 则 $g(x) \geqslant 0$, 且关于 $\mu$ 可测. 对 $E \in \mathcal{B}$, 取 $\displaystyle u(x) = \frac{\chi_E(x)}{v(x) + \frac{1}{n}}$ 代入 (2.2.14) 式, 得
> $$\int_\Omega \chi_E(x) \frac{1-v(x)}{v(x) + \frac{1}{n}} \mathrm{d}\mu = \int_\Omega \chi_E(x) \frac{v(x)}{v(x) + \frac{1}{n}} \mathrm{d}\nu.$$
> 因为 $\nu$ 关于 $\mu$ 绝对连续, 且 $\nu > 0$, a.e. $\mu$, 故 $\nu > 0$, a.e. $\nu$. 令 $n \to \infty$, 由单调收敛性定理得
> $$\int_E g(x) \mathrm{d}\mu = \nu(E), \quad E \in \mathcal{B}.$$
>
> 剩下考虑情形 $\mu(\Omega) = \infty$. 由 $\sigma$ 有限性, 取 $\Omega_n \subset \Omega_{n+1}, \Omega = \displaystyle\bigcup_{n \geqslant 1} \Omega_n, \mu(\Omega_n) < \infty, n \geqslant 1$. 由先前结论, $E \subset \Omega$,
> $$\nu(E \cap \Omega_n) = \int_{E \cap \Omega_n} g_n \mathrm{d}\mu,$$
> 易证: $g_n(x) = g_{n+1}(x), x \in \Omega_n$. 令 $g(x) = \displaystyle\lim_{n \to \infty} g_n(x)$, 由单调收敛性得
> $$\nu(E) = \lim_{n \to \infty} \int_{\Omega_n \cap E} \mathrm{d}\nu = \lim_{n \to \infty} \int_{E \cap \Omega_n} g_n \mathrm{d}\mu = \int_E g \mathrm{d}\mu, \quad E \in \mathcal{B}.$$
> 这样我们就证明了定理. $\blacksquare$



---



# 第二章 线性算子与线性泛函
线性算子和线性泛函是泛函分析研究的基本对象. 本章研究线性算子和线性泛函的一般概念和基本性质.
## §1 线性算子的概念
### 1.1 线性算子和线性泛函的定义
算子的概念起源于运算. 例如,
(1) 代数运算:
$$x \mapsto Ax \quad (\forall x \in \mathbb{R}^n),$$
其中 $A$ 是一个 $n \times n$ 矩阵.
(2) 求导运算:
$$u(x) \mapsto P(\partial_x) u(x) \quad (\forall u \in C^\infty(\overline{\Omega})),$$
其中 $P(\cdot)$ 是一个多项式, 而 $\partial_x$ 是偏导数运算.
(3) 积分变换:
$$u(x) \mapsto \int_\Omega K(x,y) u(y) \mathrm{d}y \quad (\forall u \in C(\overline{\Omega})),$$
其中 $K(x,y)$ 是 $\Omega \times \Omega$ 上的可积函数. 上一章遇到过的"映射"实际上也就是算子.
线性算子的概念起源于线性代数中的线性变换.
> [!definition] 定义 2.1.1
> 设 $\mathscr{X}, \mathscr{Y}$ 是两个线性空间, $D$ 是 $\mathscr{X}$ 的一个线性子空间. $T: D \to \mathscr{Y}$ 是一种映射, $D$ 称为 $T$ 的定义域, 有时记作 $D(T)$. $R(T) = \{Tx \mid \forall x \in D\}$ 称为 $T$ 的值域. 如果
> $$T(\alpha x + \beta y) = \alpha Tx + \beta Ty \quad (\forall x, y \in D, \forall \alpha, \beta \in \mathbb{K}),$$
> 那么称 $T$ 是一个线性算子.
> [!example] 例 2.1.2
> 设 $\mathscr{X} = \mathbb{R}^n, \mathscr{Y} = \mathbb{R}^m, T = (t_{ij})_{m \times n}$. 如果
> $$x \mapsto Tx = \left(\sum_{j=1}^n t_{ij} x_j\right)_{i=1}^m \quad (\forall x = (x_1, x_2, \cdots, x_n) \in \mathbb{R}^n),$$
> 那么 $T$ 是一个线性算子.
> [!example] 例 2.1.3
> 设 $\mathscr{X} = \mathscr{Y} = C^\infty(\overline{\Omega})$, 又设微分多项式
> $$P(\partial_x) = \sum_{|\alpha| \leqslant m} a_\alpha(x) \partial_x^\alpha \quad (a_\alpha(x) \in C^\infty(\overline{\Omega})).$$
> 如果 $T: u(x) \mapsto P(\partial_x)u(x) (\forall u \in \mathscr{X})$, 那么 $T$ 便是一个 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子.
> 若 $\mathscr{X} = \mathscr{Y} = L^2(\Omega), D(T) = C^m(\overline{\Omega})$, 则上面定义的算子 $T$ 也是线性的.
> [!example] 例 2.1.4
> 设 $\mathscr{X} = L^1(-\infty, \infty), \mathscr{Y} = L^\infty(-\infty, \infty)$, 若规定
> $$T: u(x) \mapsto \int_{-\infty}^\infty \mathrm{e}^{\mathrm{i}\xi \cdot x} u(x) \mathrm{d}x \quad (\forall u \in \mathscr{X}),$$
> 那么 $T$ 是一个 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子.
> [!definition] 定义 2.1.5
> 取值于实数 (复数) 的线性算子称为实 (复) 线性泛函, 记作 $f(x)$ 或 $\langle f, x \rangle$ (即线性函数).
> [!example] 例 2.1.6
> 设 $\mathscr{X} = C(\overline{\Omega})$, 若规定
> $$f(x) \triangleq \int_\Omega x(\xi) \mathrm{d}\xi \quad (\forall x \in \mathscr{X}),$$
> 则 $f$ 是一个线性泛函, 但 $x(\xi) \mapsto \displaystyle\int_\Omega x^2(\xi) \mathrm{d}\xi$ 却不是线性泛函.
> [!example] 例 2.1.7
> 设 $\mathscr{X} = C^\infty(\Omega)$, 若对某个指标 $\alpha$ 及 $\xi_0 \in \Omega$ 规定
> $$f(u) = \partial^\alpha u(\xi_0) \quad (\forall u \in \mathscr{X}),$$
> 则 $f$ 是 $C^\infty(\Omega)$ 上的一个线性泛函.
### 1.2 线性算子的连续性和有界性
算子的连续性概念就是映射的连续性概念.
> [!definition] 定义 2.1.8
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $F^*$ 空间, $D(T) \subset \mathscr{X}$, 称线性算子 $T: D(T) \to \mathscr{Y}$ 在 $x_0 \in D(T)$ 是**连续的**, 如果
> $$x_n \in D(T), \quad x_n \to x_0 \Longrightarrow Tx_n \to Tx_0.$$
> [!proposition] 命题 2.1.9
> 对于线性算子 $T$, 为了它在 $D(T)$ 内处处连续, 必须且仅须它在 $x = \theta$ 处连续.
> [!proof]- 证
> 若 $T$ 在 $\theta$ 处连续, 那么对 $\forall x_n, x_0 \in D(T), x_n \to x_0$ 有
> $$x_n - x_0 \to \theta \Longrightarrow Tx_n - Tx_0 = T(x_n - x_0) \to T\theta = \theta. \quad \blacksquare$$
> [!definition] 定义 2.1.10
> 设 $\mathscr{X}, \mathscr{Y}$ 都是 $B^*$ 空间, 称线性算子 $T: \mathscr{X} \to \mathscr{Y}$ 是**有界的**, 如果有常数 $M \geqslant 0$, 使得
> $$\|Tx\|_\mathscr{Y} \leqslant M\|x\|_\mathscr{X} \quad (\forall x \in \mathscr{X}).$$
> [!proposition] 命题 2.1.11
> 设 $\mathscr{X}, \mathscr{Y}$ 都是 $B^*$ 空间, 为了线性算子 $T$ 连续, 必须且只须 $T$ 有界.
> [!proof]- 证
> 充分性显然. 下证必要性. 若不然, 则 $\exists x_n \in \mathscr{X}$, 使得
> $$\|Tx_n\| > n\|x_n\|.$$
> 令 $y_n = \dfrac{x_n}{n\|x_n\|}$, 便有 $\|Ty_n\| > 1$. 但 $y_n \to \theta (n \to \infty)$, 便与 $T$ 的连续性矛盾. $\blacksquare$
> [!definition] 定义 2.1.12
> 用 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 表示一切由 $\mathscr{X}$ 到 $\mathscr{Y}$ 的有界线性算子的全体, 并规定
> $$\|T\| = \sup_{x \in \mathscr{X} \setminus \theta} \|Tx\|/\|x\| = \sup_{\|x\|=1} \|Tx\|$$
> 为 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 的范数. 特别用 $\mathscr{L}(\mathscr{X})$ 表示 $\mathscr{L}(\mathscr{X}, \mathscr{X})$, 用 $\mathscr{X}^*$ 表示 $\mathscr{L}(\mathscr{X}, \mathbb{K})$, 即 $\mathscr{X}^*$ 表示 $\mathscr{X}$ 上的有界线性泛函全体.
> [!theorem] 定理 2.1.13
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\mathscr{Y}$ 是 $B$ 空间, 若在 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 上规定线性运算:
> $$(\alpha_1 T_1 + \alpha_2 T_2)(x) = \alpha_1 T_1 x + \alpha_2 T_2 x \quad (\forall x \in \mathscr{X}),$$
> 其中 $\alpha_1, \alpha_2 \in \mathbb{K}, T_1, T_2 \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 则 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 按 $\|T\|$ 构成一个 Banach 空间.
> [!proof]- 证
> 显然 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 是一个线性空间, 下证 $\|T\|$ 是范数:
> $$\|T\| \geqslant 0, \quad \|T\| = 0 \Longleftrightarrow Tx = \theta (\forall x \in \mathscr{X}) \Longleftrightarrow T = \theta,$$
> $$\begin{aligned} \|T_1 + T_2\| &= \sup_{\|x\|=1} \|T_1 x + T_2 x\| \\ &\leqslant \sup_{\|x\|=1} \|T_1 x\| + \sup_{\|x\|=1} \|T_2 x\| \\ &= \|T_1\| + \|T_2\|, \end{aligned}$$
> $$\|\alpha T\| = \sup_{\|x\|=1} \|\alpha Tx\| = |\alpha| \sup_{\|x\|=1} \|Tx\| = |\alpha|\,\|T\|.$$
> 再证完备性. 设 $\{T_n\}_1^\infty$ 是一个基本列, 则 $\forall \varepsilon > 0, \exists N = N(\varepsilon)$, 使得对 $\forall x \in \mathscr{X}$ 有
> $$\|T_{n+p} x - T_n x\| \leqslant \varepsilon \|x\| \quad (\forall n > N, \forall p \in \mathbb{N}).$$
> 于是 $T_n x \to y \in \mathscr{Y} (n \to \infty)$. 记此 $y = Tx$, 我们要证 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$. 不难看出 $T$ 是线性的, 再证其有界. 事实上, $\exists n \in \mathbb{N}$, 使得
> $$\begin{aligned} \|Tx\| = \|y\| &\leqslant \|T_n x\| + 1 \\ &\leqslant (\|T_n\| + 1)\|x\| \quad (\forall x \in \mathscr{X}, \|x\| = 1). \end{aligned}$$
> 即得 $\|T\| \leqslant \|T_n\| + 1$. $\blacksquare$
> [!example] 例 2.1.14
> 设 $T$ 是有穷维 $B^*$ 空间 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性映射, 则 $T$ 必是连续的.
> [!proof]- 证
> $T$ 可以通过矩阵 $(t_{ij})$ 表示出来, 而同一个有穷维空间的任意两个范数等价. 不妨取 $\mathscr{X} = \mathbb{K}^n, \mathscr{Y} = \mathbb{K}^m$, 便有
> $$\begin{aligned} \|Tx\| &= \left(\sum_{i=1}^m \left|\sum_{j=1}^n t_{ij} x_j\right|^2\right)^{\frac{1}{2}} \\ &\leqslant \left(\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2 \cdot \sum_{j=1}^n |x_j|^2\right)^{\frac{1}{2}} \\ &= \left(\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2\right)^{\frac{1}{2}} \|x\|. \end{aligned}$$
> 即得 $\|Tx\| \leqslant \left(\displaystyle\sum_{i=1}^m \sum_{j=1}^n |t_{ij}|^2\right)^{\frac{1}{2}} \|x\|$. $\blacksquare$
> [!example] 例 2.1.15
> Hilbert 空间 $\mathscr{X}$ 上的正交投影算子. 设 $M$ 是 $\mathscr{X}$ 的一个闭线性子空间, 依正交分解定理 (推论 1.6.37), $\forall x \in \mathscr{X}$, 存在唯一的分解
> $$x = y + z,$$
> 其中 $y \in M, z \in M^\perp$. 对应 $x \mapsto y$ 称作由 $\mathscr{X}$ 到 $M$ 的正交投影算子, 记作 $P_M$. 在不强调子空间 $M$ 时, 我们省略 $M$ 而简记为 $P$. 我们来证明 $P$ 还是一个连续线性算子, 并且如果 $M \neq \{\theta\}$, 那么 $\|P\| = 1$.
> 先证线性. 设 $x_i = Px_i + z_i (i = 1, 2)$, 其中 $z_i \in M^\perp$. 这时,
> $$\alpha_1 x_1 + \alpha_2 x_2 = (\alpha_1 Px_1 + \alpha_2 Px_2) + (\alpha_1 z_1 + \alpha_2 z_2) \quad (\forall \alpha_1, \alpha_2 \in \mathbb{K}).$$
> 因为 $\alpha_1 z_1 + \alpha_2 z_2 \in M^\perp$, 而 $\alpha_1 Px_1 + \alpha_2 Px_2 \in M$, 所以
> $$P(\alpha_1 x_1 + \alpha_2 x_2) = \alpha_1 Px_1 + \alpha_2 Px_2.$$
> 即得 $P$ 是线性算子.
> 其次证连续, 这是由于 $\|Px\|^2 = \|x\|^2 - \|z\|^2 \leqslant \|x\|^2$. 因此, $\|Px\| \leqslant \|x\|$, 或者 $\|P\| \leqslant 1$.
> 最后, 当 $M \neq \{\theta\}$ 时, 任取 $x \in M \setminus \{\theta\}$, 便有 $\|Px\| = \|x\|$, 从而 $\|P\| = 1$. $\blacksquare$
### 习题
(本节各题中, $\mathscr{X}, \mathscr{Y}$ 均指 Banach 空间)
**2.1.1** 求证: $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 的充要条件是 $T$ 为线性算子, 并将 $\mathscr{X}$ 中的有界集映为 $\mathscr{Y}$ 中的有界集.
**2.1.2** 设 $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 求证:
(1) $\|A\| = \displaystyle\sup_{\|x\| \leqslant 1} \|Ax\|$; \qquad (2) $\|A\| = \displaystyle\sup_{\|x\| < 1} \|Ax\|$.
**2.1.3** 设 $f \in \mathscr{L}(\mathscr{X}, \mathbb{R})$, 求证:
(1) $\|f\| = \displaystyle\sup_{\|x\|=1} f(x)$; \quad (2) $\displaystyle\sup_{\|x\|<\delta} f(x) = \delta \|f\| \quad (\forall \delta > 0)$.
**2.1.4** 设 $y(t) \in C[0,1]$, 定义 $C[0,1]$ 上的泛函
$$f(x) = \int_0^1 x(t)y(t) \mathrm{d}t \quad (\forall x \in C[0,1]),$$
求 $\|f\|$.
**2.1.5** 设 $f$ 是 $\mathscr{X}$ 上的非零有界线性泛函, 令
$$d = \inf\{\|x\| \mid f(x) = 1, x \in \mathscr{X}\},$$
求证: $\|f\| = 1/d$.
**2.1.6** 设 $f \in \mathscr{X}^*$, 求证: $\forall \varepsilon > 0, \exists x_0 \in \mathscr{X}$, 使得 $f(x_0) = \|f\|$, 且 $\|x_0\| < 1 + \varepsilon$.
**2.1.7** 设 $T: \mathscr{X} \to \mathscr{Y}$ 是线性的, 令
$$N(T) \triangleq \{x \in \mathscr{X} \mid Tx = \theta\}.$$
(1) 若 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 求证: $N(T)$ 是 $\mathscr{X}$ 的闭线性子空间.
(2) 问 $N(T)$ 是 $\mathscr{X}$ 的闭线性子空间能否推出 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$?
(3) 若 $f$ 是线性泛函, 求证:
$$f \in \mathscr{X}^* \Longleftrightarrow N(f) \text{ 是闭线性子空间}.$$
**2.1.8** 设 $f$ 是 $\mathscr{X}$ 上的线性泛函, 记
$$H_f^\lambda \triangleq \{x \in \mathscr{X} \mid f(x) = \lambda\} \quad (\forall \lambda \in \mathbb{K}).$$
如果 $f \in \mathscr{X}^*$, 并且 $\|f\| = 1$, 求证:
(1) $|f(x)| = \inf\{\|x - z\| \mid \forall z \in H_f^0\} \quad (\forall x \in \mathscr{X})$;
(2) $\forall \lambda \in \mathbb{K}, H_f^\lambda$ 上的任一点 $x$ 到 $H_f^0$ 的距离都等于 $|\lambda|$.
并对 $\mathscr{X} = \mathbb{R}^2, \mathbb{K} = \mathbb{R}$ 情形解释 (1) 和 (2) 的几何意义.
**2.1.9** 设 $\mathscr{X}$ 是实 $B^*$ 空间, $f$ 是 $\mathscr{X}$ 上的非零实值线性泛函, 求证: 不存在开球 $B(x_0, \delta)$, 使得 $f(x_0)$ 是 $f(x)$ 在 $B(x_0, \delta)$ 中的极大值或极小值.

## §2 Riesz 表示定理及其应用

设 $\mathscr{X}$ 是一个 Hilbert 空间, $\forall y \in \mathscr{X}$, 如果定义
$$f_y: x \mapsto (x, y) \quad (\forall x \in \mathscr{X}),$$
那么 $f_y \in \mathscr{X}^*$. 事实上,
$$|f_y(x)| \leqslant \|y\| \cdot \|x\| \quad (\forall x \in \mathscr{X}),$$
并因此 $\|f_y\| \leqslant \|y\|$. 特别若 $y \neq \theta$, 取 $x = y$, 便有
$$|f_y(y)| = (y,y) = \|y\|^2.$$
总之有 $\|f_y\| = \|y\|$. 这个结论反过来也是对的.

> [!theorem] 定理 2.2.1 (Riesz 表示定理 (Hilbert 空间))
> 设 $f$ 是 Hilbert 空间 $\mathscr{X}$ 上的一个连续线性泛函, 则必存在唯一的 $y_f \in \mathscr{X}$, 使得
> $$f(x) = (x, y_f) \quad (\forall x \in \mathscr{X}).$$ \hfill (2.2.1)

> [!note] 启发
> 在三维空间中, (2.2.1) 式就是
> $$f(\boldsymbol{x}) = ax + by + cz = \boldsymbol{n} \cdot \boldsymbol{x} \quad (\forall \boldsymbol{x} \in \mathbb{R}^3).$$
> 其中 $\boldsymbol{x} = (x,y,z), \boldsymbol{n} = (a,b,c)$, 要找的 $y_f$ 现在就是 $\boldsymbol{n}$, 它是平面 $f(\boldsymbol{x}) = 0$ 的法线.

> [!theorem] 定理 2.2.2
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, $a(x,y)$ 是 $\mathscr{X}$ 上的共轭双线性函数, 并 $\exists M > 0$, 使得
> $$|a(x,y)| \leqslant M\|x\| \cdot \|y\| \quad (\forall x, y \in \mathscr{X}),$$
> 则存在唯一的 $A \in \mathscr{L}(\mathscr{X})$, 使得
> $$a(x,y) = (x, Ay) \quad (\forall x, y \in \mathscr{X}),$$
> 且
> $$\|A\| = \sup_{\substack{(x,y) \in \mathscr{X} \times \mathscr{X} \\ x \neq \theta, y \neq \theta}} \frac{|a(x,y)|}{\|x\| \cdot \|y\|}.$$ \hfill (2.2.3)

> [!proof]-
> 固定 $y \in \mathscr{X}$, $x \mapsto a(x,y)$ 是一个连续线性泛函. 由 Riesz 表示定理 (定理 2.2.1), $\exists z = z(y) \in \mathscr{X}$, 使得
> $$a(x,y) = (x, z) \quad (\forall x \in \mathscr{X}).$$
> 定义映射 $A: y \mapsto z(y)$, 便有 $a(x,y) = (x, Ay) (\forall x, y \in \mathscr{X})$. 又因为
> $$\begin{aligned} (x, A(\alpha_1 y_1 + \alpha_2 y_2)) &= a(x, \alpha_1 y_1 + \alpha_2 y_2) \\ &= \overline{\alpha_1} a(x, y_1) + \overline{\alpha_2} a(x, y_2) \\ &= \overline{\alpha_1} (x, Ay_1) + \overline{\alpha_2} (x, Ay_2) \\ &= (x, \alpha_1 Ay_1 + \alpha_2 Ay_2) \end{aligned}$$
> $$\qquad \qquad (\forall x, y_1, y_2 \in \mathscr{X}, \forall \alpha_1, \alpha_2 \in \mathbb{K}),$$
> 所以 $A$ 是线性的, 并且
> $$\|Ay\| = \sup_{x \in \mathscr{X} \setminus \{\theta\}} \frac{|a(x,y)|}{\|x\|} \leqslant M\|y\|,$$
> 即得 $A \in \mathscr{L}(\mathscr{X})$, 并满足 (2.2.3) 式. $\blacksquare$

### 应用

### 1. Laplace 方程 $-\Delta u = f$ Dirichlet 边值问题的弱解

设 $\Omega \subset \mathbb{R}^n$ 是一个有界开区域, $f \in L^2(\Omega)$, 称实函数 $u$ 是
$$\begin{cases} -\Delta u = f \quad (\text{在 } \Omega \text{ 内}), \\ u|_{\partial\Omega} = 0 \end{cases}$$ \hfill (2.2.4) \hfill (2.2.5)
的一个弱解是指 $u \in H_0^1(\Omega)$, 满足
$$\int_\Omega \nabla u \cdot \nabla v \mathrm{d}x = \int_\Omega fv \mathrm{d}x \quad (\forall v \in H_0^1(\Omega)).$$ \hfill (2.2.6)
这是因为: 如果 $u \in C^2(\overline{\Omega})$, 并且是 (2.2.4) 式与 (2.2.5) 式的解, 那么
$$\int_\Omega -\Delta u \cdot v \mathrm{d}x = \int_\Omega fv \mathrm{d}x \quad (\forall v \in C^2(\overline{\Omega}), v|_{\partial\Omega} = 0).$$
在上式左边应用 Green 公式得
$$\begin{aligned} \int_\Omega -\Delta u \cdot v \mathrm{d}x &= \int_\Omega \nabla u \cdot \nabla v \mathrm{d}x - \int_{\partial\Omega} \frac{\partial u}{\partial n} v \mathrm{d}\sigma \\ &= \int_\Omega \nabla u \cdot \nabla v \mathrm{d}x, \end{aligned}$$
即得
$$\int_\Omega \nabla u \cdot \nabla v \mathrm{d}x = \int_\Omega f \cdot v \mathrm{d}x \quad (\forall v \in C^2(\Omega), v|_{\partial\Omega} = 0).$$
但集合 $\{v \in C^2(\Omega) \mid v|_{\partial\Omega} = 0\}$ 显然在 $H_0^1(\Omega)$ 中稠密, 由 $u \in H_0^1(\Omega)$ 以及 $f \in L^2(\Omega)$ 立得
$$\int_\Omega \nabla u \cdot \nabla v \mathrm{d}x = \int_\Omega f \cdot v \mathrm{d}x \quad (\forall v \in H_0^1(\Omega)).$$
历史上, 人们在很长时期内直接求解 (2.2.4) 式与 (2.2.5) 式, 但在证明一般存在性结果时遇到很大困难. 于是经过近半个世纪的努力, 改成先求弱解证其存在唯一, 再证其光滑性, 这样一种途径成为近代偏微分方程理论的基本方法, 也正因为如此, 泛函分析才成为研究近代偏微分方程理论所必不缺少的工具.

> [!theorem] 定理 2.2.3
> $\forall f \in L^2(\Omega)$, 方程 (2.2.4) 的 0-Dirichlet 问题 (即以 (2.2.5) 式为边界条件) 弱解存在唯一.

> [!theorem] 定理 2.2.4
> 设 $C$ 是 $H_0^1(\Omega)$ 中的闭凸子集, 若 $f \in L^2(\Omega)$, 则下列不等式存在唯一解 $u_0^* \in C$:
> $$\int_\Omega \nabla u_0^* \cdot \nabla(v - u_0^*) \mathrm{d}x \geqslant \int_\Omega f \cdot (v - u_0^*) \mathrm{d}x \quad (\forall v \in C).$$ \hfill (2.2.10)

> [!proof]-
> 利用 Riesz 表示定理 (定理 2.2.1), $\exists u_0 \in H_0^1(\Omega)$, 使得
> $$\int_\Omega \nabla u_0 \cdot \nabla w \mathrm{d}x = \int_\Omega f \cdot w \mathrm{d}x \quad (\forall w \in H_0^1(\Omega)).$$ \hfill (2.2.11)
> 因此, 不等式 (2.2.10) 可以化为
> $$\int_\Omega \nabla u_0^* \cdot \nabla(v - u_0^*) \mathrm{d}x \geqslant \int_\Omega \nabla u_0 \cdot \nabla(v - u_0^*) \mathrm{d}x \quad (\forall v \in C).$$ \hfill (2.2.12)
> 进一步将它改写为
> $$(u_0^* - u_0, v - u_0^*)_1 \geqslant 0 \quad (\forall v \in C).$$ \hfill (2.2.13)
> 根据定理 1.6.34, 不等式 (2.2.13) 等价于 $u_0^*$ 是 $u_0$ 在 $C$ 上的最佳逼近元, 而这是存在唯一的. $\blacksquare$

> [!remark] 注 1
> 本定理可以换成更一般的结果. 设 $A = (a_{ij}(x))$ 是一个 $n \times n$ 正定矩阵, 适合
> $$\sum_{i,j=1}^n a_{ij}(x) \xi_i \xi_j \geqslant \delta \sum_{i=1}^n |\xi_i|^2 \quad (\delta > 0),$$
> 其中 $a_{ij}(x) \in C(\overline{\Omega})$, 则 $\forall f \in L^2(\Omega)$, $\exists u^* \in C$, 使得
> $$\int_\Omega \sum_{i,j=1}^n a_{ij}(x) \partial_j u^*(x) \partial_i(v(x) - u^*(x)) \mathrm{d}x$$
> $$\geqslant \int_\Omega f(x)(v(x) - u^*(x)) \mathrm{d}x \quad (\forall v \in C).$$

> [!remark] 注 2
> 若 $C$ 是由一个连续函数 $\psi(x) \in C(\overline{\Omega})$ 给定的:
> $$C \triangleq \{v(x) \in H_0^1(\Omega) \mid v(x) \leqslant \psi(x)\},$$
> 则上述变分不等式问题称为**障碍问题**, 这时 $u$ 表示薄膜的位移, $f$ 表示外力, $\psi(x)$ 是一个障碍.

### 3. Radon-Nikodym 定理

Radon-Nikodym 定理是测度论中一个重要定理.

> [!theorem] 定理 2.2.5
> 设 $(\Omega, \mathcal{B}, \mu)$, $(\Omega, \mathcal{B}, \nu)$ 是两个 $\sigma$-有限测度, 且 $\nu$ 关于 $\mu$ 绝对连续, 即
> $$E \in \mathcal{B}, \quad \mu(E) = 0 \Rightarrow \nu(E) = 0,$$
> 则存在关于 $\mu$ 的可测函数 $g$, 且 $g(x) \geqslant 0$ a.e. $\mu$, 使得
> $$\nu(E) = \int_E g(x) \mathrm{d}\mu, \quad \forall E \in \mathcal{B}.$$

以下证明是由 Von Neumann 给出的.


## §3 纲与开映射定理

### 3.1 纲与纲推理

> [!definition] 定义 2.3.1
> 设 $(\mathscr{X}, \rho)$ 是一个度量空间, 集合 $E \subset \mathscr{X}$, 称 $E$ 是**疏的**, 如果 $\overline{E}$ 的内点是空的.

> [!example] 例 2.3.2
> 在 $\mathbb{R}^n$ 上, 有穷点集是疏集. Cantor 集是疏集.

> [!proposition] 命题 2.3.3
> 设 $(\mathscr{X}, \rho)$ 是一度量空间. 为了 $E \subset \mathscr{X}$ 是疏集必须且仅须: $\forall$ 球 $B(x_0, r_0), \exists B(x_1, r_1) \subset B(x_0, r_0)$, 使得
> $$\overline{E} \cap \overline{B}(x_1, r_1) = \varnothing.$$

> [!proof]- 命题 2.3.3 的证明
> 必要性. 因为 $\overline{E}$ 无内点, 所以 $\overline{E}$ 不能包含任一球 $B(x_0, r_0)$. 从而 $\exists x_1 \in B(x_0, r_0)$, 使得 $x_1 \in \overline{E}$. 又由 $\overline{E}$ 闭, 所以 $\exists \varepsilon_1 > 0$, 使得 $\overline{B}(x_1, \varepsilon_1) \cap \overline{E} = \varnothing$. 取
> $$0 < r_1 < \min(\varepsilon_1, r_0 - \rho(x_0, x_1)),$$
> 便有 $B(x_1, r_1) \subset B(x_0, r_0), \overline{B}(x_1, r_1) \cap \overline{E} = \varnothing$.
> 
> 充分性. 若 $E$ 不疏, 即 $\overline{E}$ 有内点, 则 $\exists B(x_0, r_0) \subset \overline{E}$. 但由假设 $\exists B(x_1, r_1) \subset B(x_0, r_0)$, 使得 $\overline{B}(x_1, r_1) \cap \overline{E} = \varnothing$.
> 一方面有 $B(x_1, r_1) \cap \overline{E} = B(x_1, r_1)$; 另一方面有 $B(x_1, r_1) \cap \overline{E} = \varnothing$. 即得矛盾. $\blacksquare$

> [!definition] 定义 2.3.4
> 在度量空间 $(\mathscr{X}, \rho)$ 上, 集合 $E$ 称为**第一纲的**, 如果 $\displaystyle E = \bigcup_{n=1}^\infty E_n$, 其中 $E_n$ 是疏集. 不是第一纲的集合称为**第二纲集**.

> [!example] 例 2.3.5
> 在 $\mathbb{R}$ 上, 有理点集是第一纲集. 更一般地, 可数点集总是第一纲集.

> [!theorem] 定理 2.3.6 (Baire)
> 完备度量空间 $(\mathscr{X}, \rho)$ 是第二纲集.

> [!proof]- 定理 2.3.6 的证明
> 用反证法. 倘若 $\mathscr{X}$ 是第一纲集, 即存在疏集 $\{E_n\}$, 使得
> $$\mathscr{X} = \bigcup_{n=1}^\infty E_n.$$ \hfill (2.3.2)
> 因 $E_1$ 疏, $\exists B(x_1, r_1)$, 使 $\overline{B}(x_1, r_1) \cap \overline{E_1} = \varnothing$. 于是 $\exists B(x_2, r_2) \subset B(x_1, r_1)$ ($r_2 < r_1/2$), 使得 $\overline{B}(x_2, r_2) \cap \overline{E_2} = \varnothing$.
> 继续这一方式, $\exists B(x_n, r_n)$, 使得 $\overline{B}(x_n, r_n) \cap \overline{E_n} = \varnothing$, 且
> $$B(x_n, r_n) \subset B(x_{n-1}, r_{n-1}), \quad r_n < \frac{r_{n-1}}{2} \quad (n = 1, 2, \cdots).$$
> 序列 $\{x_n\}$ 是基本列, 且
> $$\rho(x_{n+p}, x_n) \leqslant r_n < \frac{r_1}{2^{n-1}} \quad (\forall n, p \in \mathbb{N}).$$
> 从而 $\exists x_0 \in \mathscr{X}$, 使得 $\lim_{n \to \infty} x_n = x_0$. 还有
> $$\rho(x_n, x_0) \leqslant \rho(x_n, x_{n+p}) + \rho(x_{n+p}, x_0) \leqslant r_n + \rho(x_{n+p}, x_0) \to r_n \quad (p \to \infty),$$
> 即 $x_0 \in \overline{B}(x_n, r_n)$. 由 $\overline{B}(x_n, r_n) \cap \overline{E_n} = \varnothing$, 得到 $x_0 \notin E_n$, 从而 $x_0 \notin \mathscr{X}$, 这是不可能的. $\blacksquare$

> [!corollary] 推论 2.3.7
> 设 $\mathscr{X}$ 是 $B$ 空间, $E \subset \mathscr{X}$ 是无处稠密的子集, 则 $E$ 是疏集.

> [!proof]- 推论 2.3.7 的证明
> 用反证法. 若不然, 则 $\exists B(x_0, r_0) \subset \overline{E}$. 但由 $E$ 无处稠密, 所以 $\exists x_1 \in B(x_0, r_0)$, 使得 $x_1 \notin \overline{E}$. 由 $\overline{E}$ 闭, $\exists \varepsilon_1 > 0$, 使 $B(x_1, \varepsilon_1) \cap \overline{E} = \varnothing$, 但这与 $B(x_0, r_0) \subset \overline{E}$ 矛盾. $\blacksquare$

> [!corollary] 推论 2.3.8
> 设 $\mathscr{X}$ 是 $B$ 空间, $\{E_n\}$ 是一列疏集, 则 $\displaystyle\bigcup_{n=1}^\infty E_n$ 是无处稠密的.

> [!proof]- 推论 2.3.8 的证明
> 因 $\{E_n\}$ 是疏集, 所以 $\overline{E_n}$ 是疏集. 由 Baire 定理, $\displaystyle\bigcup_{n=1}^\infty \overline{E_n}$ 是疏集, 从而 $\displaystyle\bigcup_{n=1}^\infty E_n \subset \bigcup_{n=1}^\infty \overline{E_n}$ 是无处稠密的. $\blacksquare$

### 3.2 开映射定理

设 $\mathscr{X}, \mathscr{Y}$ 都是 $B$ 空间, $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$. 算子 $T$ 称为**开算子**, 如果它映 $\mathscr{X}$ 中的开集为 $\mathscr{Y}$ 中的开集. 我们要证明 $T$ 是开算子的条件.

> [!theorem] 定理 2.3.9 (开映射定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 都是 $B$ 空间, $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 如果 $T$ 是满射, 即 $R(T) = \mathscr{Y}$, 则 $T$ 是开算子.

> [!proof]- 定理 2.3.9 的证明
> 用 $B(x_0, a), U(y_0, b)$ 分别表示 $\mathscr{X}, \mathscr{Y}$ 中的开球.
> 
> (1) 为了证明 $T$ 是开映射, 即 $\forall$ 开集 $W$, $T(W)$ 是开集, 必须且仅须证明: $\exists \delta > 0$, 使得
> $$TU(\theta, 1) \supset U(\theta, \delta).$$ \hfill (2.3.3)
> 事实上, (2.3.3) 式是必要的, 它是显然的. 下证其充分性. 由于 $T$ 的线性, 条件 (2.3.3) 等价于
> $$TU(x_0, r) \supset U(Tx_0, r\delta) \quad (\forall x_0 \in \mathscr{X}, \forall r > 0).$$
> $\forall y_0 \in T(W)$, 按定义 $\exists x_0 \in W$, 使得 $y_0 = Tx_0$. 因为 $W$ 是开集, 所以 $\exists B(x_0, r) \subset W$. 于是取 $\varepsilon = r\delta$, 便有
> $$U(y_0, \varepsilon) \subset TU(x_0, r) \subset T(W).$$
> 即 $y_0$ 是 $T(W)$ 的内点 (参看图 2.3.1).
> 
> (2) 为了证明 (2.3.3) 式, 由 $R(T) = \mathscr{Y}$, 我们有
> $$\mathscr{Y} = T\mathscr{X} = \bigcup_{n=1}^\infty TB(\theta, n).$$
> 
> [图 2.3.1 开映射定理证明示意图]
> 图 2.3.1
> 
> 因为 $\mathscr{Y}$ 是完备的, 由 Baire 定理, $\exists n \in \mathbb{N}$, 使得 $TB(\theta, n)$ 在 $\mathscr{Y}$ 中不疏, 即 $\exists U(y_0, r_0)$, 使得 $TB(\theta, n)$ 在 $U(y_0, r_0)$ 中稠密. 取 $\delta = r_0/(3n)$, 来证 $U(\theta, \delta) \subset \overline{TB(\theta, 1)}$. 事实上, $\forall y \in U(\theta, \delta)$, 因为 $y_0 \in \overline{TB(\theta, n)}$, 所以 $\exists x_0 \in B(\theta, n)$, 使得 $\|y_0 - Tx_0\| < r_0/3$. 又 $y_0 + 3ny \in U(y_0, r_0)$, 所以 $\exists x_1 \in B(\theta, n)$, 使得 $\|y_0 + 3ny - Tx_1\| < r_0/3$. 因此
> $$\|3ny - Tx_1 + Tx_0\| \leqslant \|y_0 + 3ny - Tx_1\| + \|y_0 - Tx_0\| < \frac{2r_0}{3}.$$
> 取 $\displaystyle x_2 = \frac{x_1 - x_0}{3n}$, 则 $\|x_2\| < \frac{2n}{3n} = \frac{2}{3} < 1$, 即 $x_2 \in B(\theta, 1)$, 且
> $$\|y - Tx_2\| < \frac{r_0}{9n} = \frac{\delta}{3}.$$
> 这说明 $U(\theta, \delta) \subset \overline{TB(\theta, 1)}$.
> 
> (3) 证明 $\overline{TB(\theta, 1)} \subset TB(\theta, 2)$. 事实上, $\forall y \in \overline{TB(\theta, 1)}$, $\exists x_1 \in B(\theta, 1)$, 使得 $\|y - Tx_1\| < \delta/3$. 又由 (2), $U(\theta, \delta) \subset \overline{TB(\theta, 1)}$, 所以 $\exists x_2 \in B(\theta, 1)$, 使得 $\|y - Tx_1 - Tx_2\| < \delta/3^2$. 继续这一方式, 得 $\{x_n\}$, $x_n \in B(\theta, 1/2^{n-1})$, 使得
> $$\left\|y - T\sum_{k=1}^n x_k\right\| < \frac{\delta}{3^n}.$$
> 令 $\displaystyle x^{(n)} = \sum_{k=1}^n x_k$, 则 $x^{(n)} \in B(\theta, 2)$, 且 $Tx^{(n)} \to y (n \to \infty)$. 但 $x^{(n)} \to x \in B(\theta, 2)$, 而 $T$ 连续, 所以 $Tx = y$, 即 $y \in TB(\theta, 2)$.
> 综合 (2), (3), 得到 $U(\theta, \delta) \subset TB(\theta, 2)$, 即 $T$ 是开映射. $\blacksquare$

> [!corollary] 推论 2.3.10 (Banach 逆算子定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 都是 $B$ 空间, 若 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 它既是单射又是满射, 那么 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$.

> [!proof]- 推论 2.3.10 的证明
> 由开映射定理, $T$ 是开映射. 因为 $T$ 是单射, 所以 $T^{-1}$ 存在, 且由 $T$ 开映射知 $T^{-1}$ 连续, 从而 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$. $\blacksquare$

> [!corollary] 推论 2.3.11 (等价范数定理)
> 设线性空间 $\mathscr{X}$ 上有两个范数 $\|\cdot\|_1$ 和 $\|\cdot\|_2$. 如果 $\mathscr{X}$ 关于这两个范数都构成 $B$ 空间, 而且 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 则 $\|\cdot\|_2$ 与 $\|\cdot\|_1$ 必等价.

> [!proof]- 推论 2.3.11 的证明
> 对恒同映射 $I: (\mathscr{X}, \|\cdot\|_2) \to (\mathscr{X}, \|\cdot\|_1)$, 应用 Banach 逆算子定理 (推论 2.3.10) 即可. $\blacksquare$

> [!definition] 定义 2.3.12
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, 线性算子 $T: \mathscr{X} \to \mathscr{Y}$ 的图像定义为
> $$G(T) \triangleq \{(x, Tx) \mid x \in \mathscr{X}\}.$$
> 若 $G(T)$ 是 $\mathscr{X} \times \mathscr{Y}$ 中的闭子空间, 则称 $T$ 为**闭算子**.

> [!theorem] 定理 2.3.13 (闭图像定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $T: \mathscr{X} \to \mathscr{Y}$ 是闭线性算子, 则 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$.

> [!proof]- 定理 2.3.13 的证明
> 在 $\mathscr{X}$ 上引进范数 $\|x\|_* = \|x\|_\mathscr{X} + \|Tx\|_\mathscr{Y}$. 由于 $T$ 是闭算子, 所以 $(\mathscr{X}, \|\cdot\|_*)$ 是 $B$ 空间. 而 $\|x\|_\mathscr{X} \leqslant \|x\|_*$, 即 $\|\cdot\|_*$ 比 $\|\cdot\|_\mathscr{X}$ 强, 由等价范数定理, 这两个范数等价. 因此 $\exists M > 0$, 使得 $\|x\|_* \leqslant M\|x\|_\mathscr{X}$, 即 $\|Tx\|_\mathscr{Y} \leqslant M\|x\|_\mathscr{X}$, 故 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$. $\blacksquare$

> [!theorem] 定理 2.3.14 (共鸣定理或一致有界定理)
> 设 $\mathscr{X}$ 是 $B$ 空间, $\mathscr{Y}$ 是 $B^*$ 空间. 如果 $W \subset \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 使得
> $$\sup_{T \in W} \|Tx\| < \infty \quad (\forall x \in \mathscr{X}),$$ \hfill (2.3.4)
> 则存在常数 $M$, 使得 $\|T\| \leqslant M (\forall T \in W)$.

> [!proof]- 定理 2.3.14 的证明
> $\forall x \in \mathscr{X}$, 定义 $\|x\|_W = \|x\| + \displaystyle\sup_{T \in W} \|Tx\|$. 显然 $\|\cdot\|_W$ 是 $\mathscr{X}$ 上的范数, 且强于 $\|\cdot\|$. 下证 $(\mathscr{X}, \|\cdot\|_W)$ 完备. 事实上, 若 $\|x_n - x_m\|_W \to 0$, 则 $\|x_n - x_m\| \to 0$, 且 $\displaystyle\sup_{T \in W} \|T(x_n - x_m)\| \to 0$. 因为 $\mathscr{X}$ 完备, 所以 $\exists x \in \mathscr{X}$, 使 $x_n \to x$. $\forall \varepsilon > 0$, $\exists N$, 当 $n, m \geqslant N$ 时, $\displaystyle\sup_{T \in W} \|T(x_n - x_m)\| < \varepsilon$. 从而 $\|T(x_n - x)\| \leqslant \varepsilon (\forall T \in W)$, 即 $\|x_n - x\|_W \to 0$. 由等价范数定理, $\|\cdot\|_W$ 与 $\|\cdot\|$ 等价. 故 $\exists M > 0$, 使得 $\displaystyle\sup_{T \in W} \|Tx\| \leqslant M\|x\|$, 即 $\|T\| \leqslant M$. $\blacksquare$

> [!corollary] 推论 2.3.15
> 设 $\mathscr{X}$ 是 $B$ 空间, $\mathscr{Y}$ 是 $B^*$ 空间, $M$ 是 $\mathscr{X}$ 的稠密子集. 若 $A_n, A \in \mathscr{L}(\mathscr{X}, \mathscr{Y}) (n = 1, 2, \cdots)$, 则 $\forall x \in \mathscr{X}$, 有 $\displaystyle\lim_{n \to \infty} A_n x = Ax$ 的充分且必要条件是:
> (1) $\|A_n\|$ 有界;
> (2) $\forall x \in M$, $\displaystyle\lim_{n \to \infty} A_n x = Ax$.

> [!proof]- 推论 2.3.15 的证明
> 必要性. $\forall x \in \mathscr{X}$, 令 $S_x \triangleq \{A_n x \mid n \in \mathbb{N}\}$. 由 $\displaystyle\lim_{n \to \infty} A_n x = Ax$, 所以 $\{A_n x\}$ 有界, 即 $\displaystyle\sup_{n \in \mathbb{N}} \|A_n x\| < \infty$. 由共鸣定理, $\exists M > 0$, 使得 $\|A_n\| \leqslant M$.
> 
> 充分性. 设 $\|A_n\| \leqslant M (\forall n \in \mathbb{N})$. $\forall x \in \mathscr{X}$ 及 $\varepsilon > 0$, 取 $y \in M$, 使 $\|x - y\| < \varepsilon/(4(\|A\| + M))$. 又 $\exists N$, 使 $\|A_n y - Ay\| < \varepsilon/2 (\forall n \geqslant N)$. 于是
> $$\begin{aligned} \|A_n x - Ax\| &\leqslant \|A_n x - A_n y\| + \|A_n y - Ay\| + \|Ay - Ax\| \\ &\leqslant M\|x - y\| + \frac{\varepsilon}{2} + \|A\|\,\|y - x\| \\ &< \varepsilon \quad (\forall n \geqslant N). \end{aligned}$$
> 即 $\displaystyle\lim_{n \to \infty} A_n x = Ax$. $\blacksquare$

> [!corollary] 推论 2.3.16
> 设 $1 < p < \infty$ 且 $\mu(\Omega) < \infty$. 设 $\{f_n\}$ 是 $L^p(\Omega, \mu)$ 中的序列, 满足:
> (1) $f_n \xrightarrow{\text{a.e.}} f$;
> (2) $\displaystyle\sup_{n \in \mathbb{N}} \|f_n\|_p < \infty$.
> 则 $f \in L^p(\Omega, \mu)$, 且 $f_n \xrightarrow{w} f$ (弱收敛).

> [!proof]- 推论 2.3.16 的证明
> 由 Fatou 引理,
> $$\int_\Omega |f|^p \mathrm{d}\mu \leqslant \varliminf_{n \to \infty} \int_\Omega |f_n|^p \mathrm{d}\mu \leqslant \sup_{n \in \mathbb{N}} \|f_n\|_p^p < \infty.$$
> 故 $f \in L^p(\Omega, \mu)$.
> 
> 定义线性泛函 $F_n(g) = \displaystyle\int_\Omega fg \mathrm{d}\mu$, $G_n(g) = \displaystyle\int_\Omega f_n g \mathrm{d}\mu$ ($\forall g \in L^q(\Omega, \mu)$, $q$ 为 $p$ 的共轭指数). 由 H\"older 不等式,
> $$|G_n(g)| \leqslant \|f_n\|_p \|g\|_q \leqslant M \|g\|_q.$$
> 从而 $\|G_n\| \leqslant M$. 由 (1), 对简单函数 $g$ 有 $G_n(g) \to F(g)$. 而简单函数在 $L^q$ 中稠密, 由推论 2.3.15, $G_n \xrightarrow{w^*} F$. 即 $f_n \xrightarrow{w} f$. $\blacksquare$

对 $y_n = y_{n-1} - Tx_n \in U\left(\theta, \frac{\delta}{3^n}\right)$, 按 (2), $\exists x_{n+1} \in B\left(\theta, \frac{1}{3^{n+1}}\right)$, 使得
$$\|y_n - Tx_{n+1}\| < \frac{\delta}{3^{n+1}};$$
……

于是 $\sum_{n=1}^{\infty} \|x_n\| \leqslant 1/2$, 令 $x_0 \triangleq \sum_{n=1}^{\infty} x_n$, 便有 $x_0 \in B(\theta, 1)$. 而
$$\begin{aligned}\|y_n\| &= \|y_{n-1} - Tx_n\| = \cdots \\ &= \|y_0 - T(x_1 + x_2 + \cdots + x_n)\| < \frac{\delta}{3^n} \quad (\forall n \in \mathbb{N}),\end{aligned}$$
即得
$$S_n \triangleq \sum_{i=1}^{n} x_i \to x_0, \quad TS_n \to y_0 \quad (n \to \infty). \qquad (2.3.9)$$

又因为 $T$ 是连续的, 所以
$$Tx_0 = y_0, \qquad (2.3.10)$$
即得 $U(\theta, \delta) \subset TB(\theta, 1)$. $\blacksquare$

> [!theorem] 定理 2.3.8 (Banach 逆算子定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 都是 $B$ 空间. 若 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 它既是单射又是满射, 那么 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$.

> [!proof]- 定理 2.3.8 的证明
> 依定理 2.3.9 证明中的第 (3) 部分, 已知
> $$U(\theta, 1) \subset TB\left(\theta, \frac{1}{\delta}\right),$$
> 即
> $$T^{-1}U(\theta, 1) \subset B\left(\theta, \frac{1}{\delta}\right) \quad \text{或} \quad \|T^{-1}y\| < \frac{1}{\delta} \quad (\forall y \in \mathscr{Y}, \|y\| < 1).$$
> 特别地, 由范数的齐次性, $\forall y \in \mathscr{Y}, \forall \varepsilon > 0$, 有
> $$\|T^{-1}y\| < \frac{(1+\varepsilon)}{\delta}\|y\|.$$
> 令 $\varepsilon \to 0$ 得
> $$\|T^{-1}y\| \leqslant \frac{1}{\delta}\|y\| \quad (\forall y \in \mathscr{Y}).$$
> 从而 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$. $\blacksquare$

> [!remark] 注 1
> 定理 2.3.8 与定理 2.3.9 中的 Banach 空间 $\mathscr{X}, \mathscr{Y}$ 可以换成更一般的 $F$ 空间, 但证明需稍做修改. 参看关肇直、张恭庆、冯德兴所著《线性泛函分析入门》(上海科学技术出版社, 1979) 的第二章 §2.

> [!remark] 注 2
> 在定理 2.3.8 中, $T\mathscr{X}$ 是第二纲集的假设是不可少的 (满射及 $\mathscr{Y}$ 的完备性保证了这一点). 因为有例子, 取 $\mathscr{X} = \mathscr{Y} = C[0,1]$, 规定
> $$(Tx)(t) = \int_0^t x(\tau)\mathrm{d}\tau \quad (\forall x \in \mathscr{X}).$$
> 它显然是连续线性的, 但 $T\mathscr{X} = \mathscr{Y}_0 = \{y \in C^1[0,1] \mid y(0) = 0\}$ 不是 $C[0,1]$ 的第二纲集. 这时 $T^{-1} = \dfrac{\mathrm{d}}{\mathrm{d}t}$ 在 $C[0,1]$ 中不是连续的 (即使以 $C[0,1]$ 中的一个子集 $\mathscr{Y}_0$ 作为 $T^{-1}$ 的定义域, 也不连续). 事实上, $x_n(t) \triangleq \sin n\pi t$, 显然 $\|x_n\| = 1$, 但是
> $$\left\|\frac{\mathrm{d}}{\mathrm{d}t}x_n(t)\right\| = n\pi\|\cos n\pi t\| = n\pi \to \infty \quad (\text{当 } n \to \infty),$$
> 其中 $\|\cdot\|$ 表示 $C[0,1]$ 空间中的范数. 然而, 若 $\mathscr{Y}_0$ 按 $C^1[0,1]$ 的范数 $\|\cdot\|_1$ 则构成 $B$ 空间, 这时 $T^{-1} = \dfrac{\mathrm{d}}{\mathrm{d}t}$ 是有界的. 事实上,
> $$\|T^{-1}y\| = \left\|\frac{\mathrm{d}}{\mathrm{d}t}y(t)\right\| \leqslant \|y\|_1 \quad (\forall y \in \mathscr{Y}_0).$$

分析定理 2.3.8 与定理 2.3.9 的证明过程, 可以看出, 线性算子 $T$ 的连续性的假设可以减弱. 事实上, 用到连续性之处在于由 (2.3.9) 式推出 (2.3.10) 式, 而这只需要 $T$ 是如下定义的闭算子就够了.

> [!definition] 定义 2.3.10 (闭算子)
> 设 $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的线性算子, $D(T)$ 是其定义域. 称 $T$ 是**闭的**, 是指由 $x_n \in D(T), x_n \to x$, 以及 $Tx_n \to y$ 就能推出 $x \in D(T)$, 而且 $y = Tx$.

> [!example] 例 2.3.11
> 在 $C[0,1]$ 上, $D(T) = C^1[0,1], T = \dfrac{\mathrm{d}}{\mathrm{d}t}$ 是一个闭线性算子.

> [!proof]- 例 2.3.11 的证明
> 如果 $x_n(t) \in C^1[0,1]$, 并且有
> $$x_n \to x(C[0,1]), \quad \frac{\mathrm{d}x_n}{\mathrm{d}t} \to y(C[0,1]),$$
> 则有
> $$\begin{aligned}x_n(t) - x_n(0) &\to \int_0^t y(\tau)\mathrm{d}\tau \quad (\forall t \in [0,1]), \\ x_n(t) - x_n(0) &\to x(t) - x(0) \quad (\forall t \in [0,1]),\end{aligned}$$
> 即得
> $$x(t) = x(0) + \int_0^t y(\tau)\mathrm{d}\tau \quad (\forall t \in [0,1]).$$
> 因此, $x \in C^1[0,1]$, 且 $\dfrac{\mathrm{d}x}{\mathrm{d}t} = y(t)$. $\blacksquare$

如果 $T$ 是闭线性算子, 在定理 2.3.8 与定理 2.3.9 的证明过程中, 一开始取空间 $\mathscr{X}$ 就是 $D(T)$, 它未必完备 (但是它是 $B^*$ 空间). 到证明的第 (3) 部分, 我们找到基本列 $S_n$, 满足 $TS_n \to y_0$. 这时利用 $\mathscr{X}$ 的完备性推出 $\exists x_0 \in \mathscr{X}$, 使得 $S_n \to x_0$, 再由 $T$ 的闭性推出 $x_0 \in D(T), y_0 = Tx_0$. 于是得到更一般的结论.

> [!theorem] 定理 2.3.12 (闭算子的开映射定理)
> 若 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的一个闭线性算子, 满足 $R(T)$ 是 $\mathscr{Y}$ 中的第二纲集, 则 $R(T) = \mathscr{Y}$ 并且 $\forall \varepsilon > 0, \exists \delta = \delta(\varepsilon) > 0$, 使得 $\forall y \in \mathscr{Y}, \|y\| < \delta$ 必有 $x \in D(T)$, 适合 $\|x\| < \varepsilon$ 且 $y = Tx$.

> [!proof]- 定理 2.3.12 的证明
> 只有 $R(T) = \mathscr{Y}$ 是需要证的. 我们已知对 $\varepsilon = 1, \exists \delta > 0$, 使得
> $$U(\theta, \delta) \subset T(B(\theta, 1) \cap D(T)). \qquad (2.3.11)$$
> $\forall y \in \mathscr{Y}$, 不妨设 $y \neq \theta$ (显然 $\theta \in R(T)$). $\forall 0 < \delta_1 < \delta$, 按 (2.3.11) 式,
> $$\frac{\delta_1 y}{\|y\|} \in U(\theta, \delta) \Longrightarrow \frac{\delta_1 y}{\|y\|} \in T(B(\theta, 1) \cap D(T)).$$
> 于是 $\exists x \in B(\theta, 1) \cap D(T)$, 使得
> $$\frac{\delta_1 y}{\|y\|} = Tx \Longrightarrow y = T\left(\frac{\|y\|}{\delta_1}x\right) \Longrightarrow y \in R(T).$$
> $\blacksquare$

### 3.3 闭图像定理

对于线性算子而言, 我们来看连续性与闭性间的关系. 我们说一个连续线性算子 $T: D(T) \to \mathscr{Y}$ 总可以延拓到 $\overline{D(T)}$ 上, 这由下列定理给出.

> [!theorem] 定理 2.3.13 (连续线性算子的延拓)
> 设 $T$ 是 $B^*$ 空间 $\mathscr{X}$ 到 $B$ 空间 $\mathscr{Y}$ 的连续线性算子, 那么 $T$ 能唯一地延拓到 $\overline{D(T)}$ 上成为连续线性算子 $T_1$, 使得 $T_1|_{D(T)} = T$, 且 $\|T_1\| = \|T\|$.

> [!proof]- 定理 2.3.13 的证明
> 任取 $x \in \overline{D(T)}, \exists x_n \in D(T), \lim_{n \to \infty} x_n = x$, 依假设 $T$ 在 $D(T)$ 上连续, 从而有界, 即 $\exists M > 0$, 使得
> $$\|Tx\| \leqslant M\|x\| \quad (\forall x \in D(T)).$$
> 于是
> $$\|Tx_{n+p} - Tx_n\| \leqslant M\|x_{n+p} - x_n\|.$$
> 由此可见 $\{Tx_n\}$ 是 $\mathscr{Y}$ 中的基本列, 已设 $\mathscr{Y}$ 完备, 所以 $\exists y \in \mathscr{Y}$, 使得 $Tx_n \to y$. 不难看出 $y$ 仅依赖于 $x$, 而与 $D(T)$ 中 $x_n$ 的选择无关. 因此, 可以定义 $T_1: x \mapsto y$. 容易验证 $T_1$ 是线性的, 还有 $T_1|_{D(T)} = T$, 并且 $\|T_1x\| \leqslant M\|x\|(\forall x \in \overline{D(T)})$. $\blacksquare$

在这个意义上, 我们把每个连续线性算子 $T$ 都看成是有闭定义域的. 于是每个连续线性算子必是闭的. 可是一般闭线性算子未必能延拓到 $\overline{D(T)}$ 上, 使其仍闭.

> [!corollary] 推论 2.3.14 (等价范数定理)
> 设线性空间 $\mathscr{X}$ 上有两个范数 $\|\cdot\|_1$ 与 $\|\cdot\|_2$. 如果 $\mathscr{X}$ 关于这两个范数都构成 $B$ 空间, 而且 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 则 $\|\cdot\|_2$ 与 $\|\cdot\|_1$ 必等价.

> [!proof]- 推论 2.3.14 的证明
> 考察恒同映射 $I: \mathscr{X} \to \mathscr{X}$, 把它看成是由 $(\mathscr{X}, \|\cdot\|_2) \to (\mathscr{X}, \|\cdot\|_1)$ 的线性算子, 由假设 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 即 $\exists C > 0$, 使得
> $$\|Ix\|_1 \leqslant C\|x\|_2 \quad (\forall x \in \mathscr{X}).$$
> 因此 $I$ 是连续的, 它既是单射又是满射. 依定理 2.3.8, $I$ 可逆且 $I^{-1}$ 连续, 即有 $M > 0$, 使
> $$\|I^{-1}x\|_2 \leqslant M\|x\|_1 \quad (\forall x \in \mathscr{X}).$$
> 又因 $I^{-1}x$ 与 $x$ 是同一个元素, 所以 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价. $\blacksquare$

> [!theorem] 定理 2.3.15 (闭图像定理)
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间. 若 $T$ 是 $\mathscr{X} \to \mathscr{Y}$ 的闭线性算子, 并且 $D(T)$ 是闭的, 则 $T$ 是连续的.

> [!proof]- 定理 2.3.15 的证明
> 因为 $D(T)$ 是闭的, 所以 $D(T)$ 作为 $\mathscr{X}$ 的线性子空间可看成是 $B$ 空间. 在 $D(T)$ 上, 引进另外一个范数 $\|\cdot\|_G$ 如下:
> $$\|x\|_G = \|x\| + \|Tx\| \quad (\forall x \in D(T)).$$
> 现在证明 $(D(T), \|\cdot\|_G)$ 也是 $B$ 空间, 事实上, 从
> $$\begin{aligned}\|x_n - x_m\|_G &= \|x_n - x_m\| + \|Tx_n - Tx_m\| \to 0 \\ &(n, m \to \infty),\end{aligned}$$
> 可知 $\exists x^* \in \mathscr{X}$ 与 $y^* \in \mathscr{Y}$, 使得 $x_n \to x^*$, 且 $Tx_n \to y^*$. 根据 $T$ 的闭性即得 $y^* = Tx^*$, 从而 $Tx_n \to Tx^*$. 因此 $\|x_n - x^*\|_G \to 0$. 又显然有 $\|\cdot\|_G$ 比 $\|\cdot\|$ 强, 根据等价范数定理 (推论 2.3.14), $\|\cdot\|_G$ 与 $\|\cdot\|$ 等价, 故 $\exists M > 0$, 使得
> $$\|Tx\| \leqslant \|x\|_G \leqslant M\|x\| \quad (\forall x \in D(T)).$$
> $\blacksquare$

> [!remark] 注
> 集合 $G(T) \triangleq \{(x, Tx) \mid x \in D(T)\}$ 称为算子 $T$ 的**图像**, 而 $\|x\|_G$ 实际上是 $(x, Tx)$ 在乘积空间 $\mathscr{X} \times \mathscr{Y}$ 上的范数, 因此 $\|\cdot\|_G$ 称为**图模**. 算子 $T$ 是闭的, 实际上就是 $G(T)$ 按图模是闭的.

### 3.4 共鸣定理

> [!theorem] 定理 2.3.16 (共鸣定理或一致有界定理)
> 设 $\mathscr{X}$ 是 $B$ 空间, $\mathscr{Y}$ 是 $B^*$ 空间, 如果 $W \subset \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 使得
> $$\sup_{A \in W} \|Ax\| < \infty \quad (\forall x \in \mathscr{X}),$$
> 那么存在常数 $M$, 使得 $\|A\| \leqslant M(\forall A \in W)$.

> [!proof]- 定理 2.3.16 的证明
> $\forall x \in \mathscr{X}$, 定义
> $$\|x\|_W = \|x\| + \sup_{A \in W} \|Ax\|.$$
> 显然, $\|\cdot\|_W$ 是 $\mathscr{X}$ 上的范数, 且强于 $\|\cdot\|$. 下面证明 $(\mathscr{X}, \|\cdot\|_W)$ 完备. 事实上, 如果
> $$\|x_m - x_n\| + \sup_{A \in W} \|A(x_m - x_n)\| \to 0 \quad (\text{当 } m, n \to \infty).$$
> 由 $\mathscr{X}$ 的完备性, $\exists x \in \mathscr{X}$, 使得 $\|x_n - x\| \to 0$ (当 $n \to \infty$), 又因为 $\forall \varepsilon > 0, \exists N = N(\varepsilon)$, 使得
> $$\sup_{A \in W} \|Ax_m - Ax_n\| < \varepsilon \quad (\forall m, n \geqslant N).$$
> 从而对 $\forall A \in W$ 有 $\|Ax_n - Ax\| \leqslant \varepsilon$ ($\forall n \geqslant N$). 于是
> $$\|x_n - x\| + \sup_{A \in W} \|A(x_n - x)\| \to 0 \quad (\text{当 } n \to \infty),$$
> 即 $\|x_n - x\|_W \to 0$. 再根据等价范数定理 (推论 2.3.14), $\|\cdot\|_W$ 与 $\|\cdot\|$ 等价, 从而存在常数 $M$, 使得
> $$\sup_{A \in W} \|Ax\| \leqslant M\|x\| \quad (\forall x \in \mathscr{X}).$$
> 由此立即推出 $\|A\| \leqslant M(\forall A \in W)$. $\blacksquare$

> [!remark] 注
> 条件: $\forall x \in \mathscr{X}$, $\sup_{A \in W} \|Ax\| < \infty$, 意味着 $\forall x \in \mathscr{X}$, $\exists M_x > 0$, 使得
> $$\|Ax\| \leqslant M_x\|x\| \quad (\forall A \in W). \qquad (2.3.12)$$
> 而结论: $\|A\| \leqslant M(\forall A \in W)$, 则可看作是, 存在与 $x$ 无关的常数 $M$, 使得
> $$\|Ax\| \leqslant M\|x\| \quad (\forall A \in W). \qquad (2.3.13)$$
> (2.3.12) 式意味着算子族 $W$ **点点有界**; (2.3.13) 式则意味着算子族 $W$ **一致有界**. 因此本定理给出条件保证点点有界蕴含一致有界, 故称 "一致有界" 定理. 另一方面, 如果我们从反面来叙述本定理将有: $\sup_{A \in W} \|A\| = \infty \Longrightarrow \exists x_0 \in \mathscr{X}$, 使得
> $$\sup_{A \in W} \|Ax_0\| = \infty.$$
> 因此本定理又有 "**共鸣定理**" 之称.

> [!theorem] 定理 2.3.17 (Banach-Steinhaus 定理)
> 设 $\mathscr{X}$ 是 $B$ 空间, $\mathscr{Y}$ 是 $B^*$ 空间, $M$ 是 $\mathscr{X}$ 的某个稠密子集. 若 $A_n(n=1,2,\cdots), A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 则 $\forall x \in \mathscr{X}$ 都有
> $$\lim_{n \to \infty} A_n x = Ax \qquad (2.3.14)$$
> 的充要条件是:
> (1) $\|A_n\|$ 有界;
> (2) (2.3.14) 式对 $\forall x \in M$ 成立.

> [!proof]- 定理 2.3.17 的证明
> 必要性. 根据共鸣定理 (定理 2.3.16), 结论是显然的.
> 
> 充分性. 假定 $\|A_n\| \leqslant C(\forall n \in \mathbb{N})$, 对 $\forall x \in \mathscr{X}$ 及 $\forall \varepsilon > 0$, 取 $y \in M$, 使得
> $$\|x - y\| \leqslant \frac{\varepsilon}{4(\|A\| + C)},$$
> 便有
> $$\begin{aligned}\|A_n x - Ax\| &\leqslant \|A_n x - A_n y\| + \|A_n y - Ay\| + \|Ax - Ay\| \\ &< \frac{\varepsilon}{2} + \|A_n y - Ay\| \quad (\forall n \in \mathbb{N}).\end{aligned}$$
> 再取 $N$ 足够大, 使得 $\|A_n y - Ay\| < \varepsilon/2(\forall n \geqslant N)$, 便有
> $$\|A_n x - Ax\| < \varepsilon \quad (\forall n \geqslant N).$$
> $\blacksquare$

### 3.5 应用

### 1. Lax-Milgram 定理

> [!theorem] 定理 2.3.18 (Lax-Milgram 定理)
> 设 $a(x, y)$ 是 Hilbert 空间 $\mathscr{X}$ 上的一个共轭双线性函数, 满足:
> (1) $\exists M > 0$, 使 $|a(x, y)| \leqslant M\|x\| \cdot \|y\| \quad (\forall x, y \in \mathscr{X})$, (2.3.15)
> (2) $\exists \delta > 0$, 使 $|a(x, x)| \geqslant \delta\|x\|^2 \quad (\forall x \in \mathscr{X})$, (2.3.16)
> 那么必存在唯一的有连续逆的连续线性算子 $A \in \mathscr{L}(\mathscr{X})$, 满足
> $$\begin{aligned}a(x, y) &= (x, Ay) \quad (\forall x, y \in \mathscr{X}), \qquad (2.3.17) \\ \|A^{-1}\| &\leqslant \frac{1}{\delta}. \qquad (2.3.18)\end{aligned}$$

> [!proof]- 定理 2.3.18 的证明
> 依定理 2.2.2, 适合 (2.3.17) 式的算子 $A \in \mathscr{L}(\mathscr{X})$ 存在唯一. 今证:
> 
> (1) $A$ 是单射. 若有 $y_1, y_2 \in \mathscr{X}$, 满足 $Ay_1 = Ay_2$, 则
> $$a(x, y_1) = a(x, y_2) \quad (\forall x \in \mathscr{X}),$$
> 从而
> $$a(x, y_1 - y_2) = 0 \quad (\forall x \in \mathscr{X}).$$
> 特别取 $x = y_1 - y_2$, 由 (2.3.16) 式即得 $y_1 = y_2$.
> 
> (2) $A$ 是满射. 先证 $R(A)$ 是闭的. 事实上, $\forall w \in \overline{R(A)}$, $\exists v_n \in \mathscr{X}$ $(n = 1, 2, \cdots)$, 使得
> $$w = \lim_{n \to \infty} Av_n. \qquad (2.3.19)$$
> 由 (2.3.16) 式,
> $$\begin{aligned}\delta\|v_{n+p} - v_n\|^2 &\leqslant |a(v_{n+p} - v_n, v_{n+p} - v_n)| \\ &= |(v_{n+p} - v_n, A(v_{n+p} - v_n))| \\ &\leqslant \|v_{n+p} - v_n\| \cdot \|Av_{n+p} - Av_n\| \quad (\forall n, p \in \mathbb{N}),\end{aligned}$$
> 即得
> $$\begin{aligned}\|v_{n+p} - v_n\| &\leqslant \frac{1}{\delta}\|Av_{n+p} - Av_n\| \to 0 \\ &(\text{当 } n \to \infty, \forall p \in \mathbb{N}).\end{aligned}$$
> 从而 $\{v_n\}$ 是基本列, 因此 $\exists v^* \in \mathscr{X}$, 使得 $v_n \to v^*$, 并由 $A$ 的连续性和 (2.3.19) 式得 $w = Av^*$, 即 $w \in R(A)$. 于是 $R(A)$ 闭.
> 
> 再证 $R(A)^\perp = \{\theta\}$. 倘若 $w \in R(A)^\perp$, 则
> $$(w, Av) = 0 \quad (\forall v \in \mathscr{X}),$$
> 即 $a(w, v) = 0(\forall v \in \mathscr{X})$. 特别取 $v = w$, 再利用假设 (2.3.16) 式有
> $$\delta\|w\|^2 \leqslant |a(w, w)| = 0,$$
> 即得 $w = \theta$. 由此可见 $A$ 是满射.
> 
> (3) 再利用 Banach 逆算子定理 (定理 2.3.8), $A^{-1} \in \mathscr{L}(\mathscr{X})$. 因为
> $$\delta\|x\|^2 \leqslant |a(x, x)| = |(x, Ax)| \leqslant \|x\| \cdot \|Ax\|,$$
> 所以 $\delta\|x\| \leqslant \|Ax\|(\forall x \in \mathscr{X})$, 即得 (2.3.18) 式. $\blacksquare$

### 2. Lax 等价定理

在数值分析中, 为了求一个方程的解, 往往用求一个近似方程的解去代替. 例如, 用差分方程或有限元方程近似代替微分方程. 其首要问题便是: 近似方程的解是否收敛到原方程的解? 若是, 则称这近似格式具有**收敛性**.

用泛函分析的语言描述, 设 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 其中 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间. 给定 $y \in \mathscr{Y}$, 求解 $x \in \mathscr{X}$, 使得
$$Tx = y. \qquad (2.3.20)$$

首先我们应当假定, $\forall y \in \mathscr{Y}$, $\exists! x \in \mathscr{X}$ 满足 (2.3.20) 式. 这时, 应用定理 2.3.8, 便有 $T^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$. 现在来考虑 (2.3.20) 式的近似方程. $\forall n \in \mathbb{N}$, 设 $T_n \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 求解 $x_n \in \mathscr{X}$, 使得
$$T_n x_n = y. \qquad (2.3.21)$$

当然, 还是要假定 $\forall y \in \mathscr{Y}$, $\exists! x_n \in \mathscr{X}$ 满足 (2.3.21) 式, 于是有 $T_n^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$.

何谓 $T_n$ 是 $T$ 的近似? 它是指: $\forall x \in \mathscr{X}$,
$$\|Tx - T_n x\| \to 0 \quad (n \to \infty). \qquad (2.3.22)$$
这在数值分析中称为近似格式具有**相容性**.

在数值分析中还有一个重要的概念: 称近似格式具有**稳定性**, 是指 $\exists C > 0$, 使得
$$\|T_n^{-1}\| \leqslant C \quad (\forall n \in \mathbb{N}). \qquad (2.3.23)$$

在相容性的前提下, Lax 指出了近似格式的收敛性与稳定性是等价的.

> [!theorem] 定理 2.3.19 (Lax 等价定理)
> 如果 (2.3.22) 式对 $\forall x \in \mathscr{X}$ 成立, 那么为了 $x_n \to x(n \to \infty)$, 其中 $x_n$ 与 $x$ 分别是 (2.3.21) 式与 (2.3.20) 式的解, 必须且仅须 $\exists C > 0$, 使得 (2.3.23) 式成立.

> [!proof]- 定理 2.3.19 的证明
> 充分性. 由 (2.3.22) 式和 (2.3.23) 式, 我们得
> $$\begin{aligned}\|x_n - x\| &= \|T_n^{-1}y - T_n^{-1}T_n x\| \\ &\leqslant \|T_n^{-1}\| \cdot \|Tx - T_n x\| \\ &\leqslant C\|Tx - T_n x\| \to 0 \quad (n \to \infty).\end{aligned}$$
> 
> 必要性. $\forall y \in \mathscr{Y}$, 令 $x_n = T_n^{-1}y$, $x = T^{-1}y$, 便有 $x_n \to x$ ($n \to \infty$). 因此,
> $$T_n^{-1}y \to T^{-1}y \quad (n \to \infty, \forall y \in \mathscr{Y}).$$
> 由共鸣定理 (定理 2.3.16), 立得 $\|T_n^{-1}\|$ 有界. $\blacksquare$

### 习题

> [!exercise] 习题 2.3.1
> 设 $\mathscr{X}$ 是 $B$ 空间, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的闭子空间. 映射 $\varphi: \mathscr{X} \to \mathscr{X}/\mathscr{X}_0$ 定义为
> $$\varphi: x \mapsto [x] \quad (\forall x \in \mathscr{X}),$$
> 其中 $[x]$ 表示含 $x$ 的商类 (见习题 1.4.17). 求证 $\varphi$ 是开映射.

> [!exercise] 习题 2.3.2
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, 又设方程 $Ux = y$ 对 $\forall y \in \mathscr{Y}$ 有解 $x \in \mathscr{X}$, 其中 $U \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 并且 $\exists m > 0$, 使得
> $$\|Ux\| \geqslant m\|x\| \quad (\forall x \in \mathscr{X}).$$
> 求证: $U$ 有连续逆 $U^{-1}$, 并且 $\|U^{-1}\| \leqslant 1/m$.

> [!exercise] 习题 2.3.3
> 设 $H$ 是 Hilbert 空间, $A \in \mathscr{L}(H)$, 并且 $\exists m > 0$, 使得
> $$|(Ax, x)| \geqslant m\|x\|^2 \quad (\forall x \in H).$$
> 求证: $\exists A^{-1} \in \mathscr{L}(H)$.

> [!exercise] 习题 2.3.4
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, $D$ 是 $\mathscr{X}$ 的线性子空间, 并且 $A: D \to \mathscr{Y}$ 是线性映射. 求证:
> (1) 如果 $A$ 连续且 $D$ 是闭的, 那么 $A$ 是闭算子;
> (2) 如果 $A$ 连续且是闭算子, 那么 $\mathscr{Y}$ 完备蕴含 $D$ 闭;
> (3) 如果 $A$ 是单射的闭算子, 那么 $A^{-1}$ 也是闭算子;
> (4) 如果 $\mathscr{X}$ 完备, $A$ 是单射的闭算子, $R(A)$ 在 $\mathscr{Y}$ 中稠密, 并且 $A^{-1}$ 连续, 那么 $R(A) = \mathscr{Y}$.

> [!exercise] 习题 2.3.5
> 用等价范数定理 (推论 2.3.14) 证明: $(C[0,1], \|\cdot\|_1)$ 不是 $B$ 空间, 其中 $\|f\|_1 = \displaystyle\int_0^1 |f(t)|\mathrm{d}t$, $\forall f \in C[0,1]$.

> [!exercise] 习题 2.3.6 (Gelfand 引理)
> 设 $\mathscr{X}$ 是 $B$ 空间, $p: \mathscr{X} \to \mathbb{R}$ 满足
> (1) $p(x) \geqslant 0 \quad (\forall x \in \mathscr{X})$;
> (2) $p(\lambda x) = \lambda p(x) \quad (\forall \lambda > 0, \forall x \in \mathscr{X})$;
> (3) $p(x_1 + x_2) \leqslant p(x_1) + p(x_2) \quad (\forall x_1, x_2 \in \mathscr{X})$;
> (4) 当 $x_n \to x$ 时, $\varliminf_{n \to \infty} p(x_n) \geqslant p(x)$.
> 求证: $\exists M > 0$, 使得 $p(x) \leqslant M\|x\|$, $\forall x \in \mathscr{X}$.

> [!exercise] 习题 2.3.7
> 设 $\mathscr{X}$ 和 $\mathscr{Y}$ 是 $B$ 空间, $A_n \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ $(n = 1, 2, \cdots)$, 又对 $\forall x \in \mathscr{X}$, $\{A_n x\}$ 在 $\mathscr{Y}$ 中收敛. 求证: $\exists A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 使得
> $$A_n x \to Ax \quad (\forall x \in \mathscr{X}), \quad \text{并且} \quad \|A\| \leqslant \varliminf_{n \to \infty} \|A_n\|.$$

> [!exercise] 习题 2.3.8
> 设 $1 < p < \infty$, 并且 $1/p + 1/q = 1$. 如果序列 $\{\alpha_k\}$ 使得对 $\forall x = \{\xi_k\} \in l^p$ 保证 $\displaystyle\sum_{k=1}^{\infty} \alpha_k\xi_k$ 收敛, 求证: $\{\alpha_k\} \in l^q$. 又若 $f: x \mapsto \displaystyle\sum_{k=1}^{\infty} \alpha_k\xi_k$, 求证: $f$ 作为 $l^p$ 上的线性泛函, 有
> $$\|f\| = \left(\sum_{k=1}^{\infty} |\alpha_k|^q\right)^{\frac{1}{q}}.$$

> [!exercise] 习题 2.3.9
> 如果序列 $\{\alpha_k\}$ 使得对 $\forall x = \{\xi_k\} \in l^1$, 保证 $\displaystyle\sum_{k=1}^{\infty} \alpha_k\xi_k$ 收敛, 求证: $\{\alpha_k\} \in l^{\infty}$. 又若 $f: x \mapsto \displaystyle\sum_{k=1}^{\infty} \alpha_k\xi_k$ 作为 $l^1$ 上的线性泛函, 求证:
> $$\|f\| = \sup_{k \geqslant 1} |\alpha_k|.$$

> [!exercise] 习题 2.3.10
> 用 Gelfand 引理 (习题 2.3.6) 证明共鸣定理 (定理 2.3.16).

> [!exercise] 习题 2.3.11
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 是满射的. 求证: 如果在 $\mathscr{Y}$ 中 $y_n \to y_0$, 则 $\exists C > 0$ 与 $x_n \to x_0$, 使得 $Ax_n = y_n$, 且 $\|x_n\| \leqslant C\|y_n\|$.

> [!exercise] 习题 2.3.12
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $T$ 是闭线性算子, $D(T) \subset \mathscr{X}$, $R(T) \subset \mathscr{Y}$, $N(T) \triangleq \{x \in \mathscr{X} \mid Tx = \theta\}$.
> (1) 求证: $N(T)$ 是 $\mathscr{X}$ 的闭线性子空间.
> (2) 求证: $N(T) = \{\theta\}$, $R(T)$ 在 $\mathscr{Y}$ 中闭的充要条件是, $\exists \alpha > 0$, 使得
> $$\|x\| \leqslant \alpha\|Tx\| \quad (\forall x \in D(T)).$$
> (3) 如果用 $d(x, N(T))$ 表示点 $x \in \mathscr{X}$ 到集合 $N(T)$ 的距离 $\left(\displaystyle\inf_{z \in N(T)} \|z - x\|\right)$. 求证: $R(T)$ 在 $\mathscr{Y}$ 中闭的充要条件是, $\exists \alpha > 0$, 使得
> $$d(x, N(T)) \leqslant \alpha\|Tx\| \quad (\forall x \in D(T)).$$

> [!exercise] 习题 2.3.13
> 设 $a(x, y)$ 是 Hilbert 空间 $H$ 上的一个共轭双线性泛函, 满足:
> (1) $\exists M > 0$, 使得 $|a(x, y)| \leqslant M\|x\| \cdot \|y\| \quad (\forall x, y \in H)$;
> (2) $\exists \delta > 0$, 使得 $|a(x, x)| \geqslant \delta\|x\|^2 \quad (\forall x \in H)$.
> 求证: $\forall f \in H^*$, $\exists! y_f \in H$, 使得
> $$a(x, y_f) = f(x) \quad (\forall x \in H),$$
> 而且 $y_f$ 连续地依赖于 $f$.

> [!exercise] 习题 2.3.14
> 设 $\Omega$ 是 $\mathbb{R}^2$ 中边界光滑的有界开区域, $\alpha: \Omega \to \mathbb{R}$ 有界可测并满足 $0 < \alpha_0 \leqslant \alpha$, $f \in L^2(\Omega)$. 规定:
> $$\begin{aligned}a(u, v) &\triangleq \int_\Omega (\nabla u \cdot \nabla v + \alpha uv)\mathrm{d}x\mathrm{d}y \quad (\forall u, v \in H^1(\Omega)), \\ F(v) &\triangleq \int_\Omega f \cdot v\mathrm{d}x\mathrm{d}y \quad (\forall v \in L^2(\Omega)).\end{aligned}$$
> 求证: $\exists! u \in H^1(\Omega)$ 满足
> $$a(u, v) = F(v) \quad (\forall v \in H^1(\Omega)).$$

## §4 Hahn-Banach 定理

给定无穷维赋范线性空间 $\mathscr{X}$, 是否存在不恒等于 0 的连续线性泛函? 更进一步问: 是否有 "足够多" 的连续线性泛函? 所谓足够多, 是指多到足以用来分辨不同元的程度, 即当 $x_1 \neq x_2$ ($x_1, x_2 \in \mathscr{X}$) 时, 必有 $\mathscr{X}$ 上的一个连续线性泛函 $f(\cdot)$, 使得 $f(x_1) \neq f(x_2)$. 本节从线性泛函的延拓入手解决这个问题. 有趣的是, 从几何上看, 这个线性泛函的延拓性质表现为凸集的分离性质. 而这个分离性质又是研究与凸集有关的 Banach 空间几何学的基本出发点.

本节介绍的 Hahn-Banach 定理是泛函分析的最基本的定理之一. 无论在纯粹数学中, 还是在应用数学中, 它都有广泛的应用.

### 4.1 线性泛函的延拓定理

> [!theorem] 定理 2.4.1 (实 Hahn-Banach 定理)
> 设 $\mathscr{X}$ 是实线性空间, $p$ 是定义在 $\mathscr{X}$ 上的次线性泛函, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的实线性子空间, $f_0$ 是 $\mathscr{X}_0$ 上的实线性泛函并满足 $f_0(x) \leqslant p(x)$ $(\forall x \in \mathscr{X}_0)$. 那么 $\mathscr{X}$ 上必有一个实线性泛函 $f$, 满足:
> (1) $f(x) \leqslant p(x) \quad (\forall x \in \mathscr{X})$ (受 $p$ 控制条件);
> (2) $f(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0)$ (延拓条件).

> [!theorem] 定理 2.4.2 (复 Hahn-Banach 定理)
> 设 $\mathscr{X}$ 是复线性空间, $p$ 是 $\mathscr{X}$ 上的半范数. $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间, $f_0$ 是 $\mathscr{X}_0$ 上的线性泛函, 并满足 $|f_0(x)| \leqslant p(x)$, $\forall x \in \mathscr{X}_0$, 那么 $\mathscr{X}$ 上必有一个线性泛函 $f$ 满足:
> (1) $|f(x)| \leqslant p(x) \quad (\forall x \in \mathscr{X})$;
> (2) $f(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0)$.

> [!proof]-
> 把 $\mathscr{X}$ 看成实线性空间, 相应把 $\mathscr{X}_0$ 也看成是实线性子空间, 令
> $$g_0(x) \triangleq \mathrm{Re}f_0(x) \quad (\forall x \in \mathscr{X}_0),$$
> 便有 $g_0(x) \leqslant p(x)$ ($\forall x \in \mathscr{X}_0$). 从而根据定理 2.4.1, 必有 $\mathscr{X}$ 上的实线性泛函 $g$, 使得
> $$g(x) = g_0(x) \quad (\forall x \in \mathscr{X}_0), \qquad (2.4.5)$$
> 且
> $$g(x) \leqslant p(x) \quad (\forall x \in \mathscr{X}). \qquad (2.4.6)$$
> 现在, 令
> $$f(x) \triangleq g(x) - \mathrm{i}g(\mathrm{i}x) \quad (\forall x \in \mathscr{X}). \qquad (2.4.7)$$
> 那么依 (2.4.5) 式, 我们有
> $$\begin{aligned}f(x) &= g_0(x) - \mathrm{i}g_0(\mathrm{i}x) \\ &= \mathrm{Re}f_0(x) + \mathrm{i}\mathrm{Im}f_0(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0),\end{aligned}$$
> 又
> $$\begin{aligned}f(\mathrm{i}x) &= g(\mathrm{i}x) - \mathrm{i}g(-x) \\ &= \mathrm{i}[g(x) - \mathrm{i}g(\mathrm{i}x)] = \mathrm{i}f(x) \quad (\forall x \in \mathscr{X}).\end{aligned}$$
> 从而 $f$ 也是复齐性的. 剩下还要说明在 $\mathscr{X}$ 上, $|f(x)|$ 受 $p(x)$ 控制. 若 $f(x) = 0$, 这是显然的. 若 $f(x) \neq 0$, 令
> $$\theta \triangleq \arg f(x),$$
> 那么依 (2.4.6) 式, 有
> $$\begin{aligned}|f(x)| &= \mathrm{e}^{-\mathrm{i}\theta}f(x) = f(\mathrm{e}^{-\mathrm{i}\theta}x) \\ &= g(\mathrm{e}^{-\mathrm{i}\theta}x) \leqslant p(\mathrm{e}^{-\mathrm{i}\theta}x) = p(x) \quad (\forall x \in \mathscr{X}),\end{aligned}$$
> 其中第三个等号是因为正数 $f(\mathrm{e}^{-\mathrm{i}\theta}x) = |f(x)|$ 的虚部为 0. $\blacksquare$

> [!theorem] 定理 2.4.3
> 为了复线性空间 $\mathscr{X}$ 上至少有一个非零线性泛函, 只要 $\mathscr{X}$ 中含有某一个均衡吸收真凸子集.

在 $B^*$ 空间上, Hahn-Banach 延拓定理具有下列更特殊的形式和应用.

> [!theorem] 定理 2.4.4 (Hahn-Banach)
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间, $f_0$ 是定义在 $\mathscr{X}_0$ 上的有界线性泛函, 则在 $\mathscr{X}$ 上必有有界线性泛函 $f$ 满足:
> (1) $f(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0)$ (延拓条件),
> (2) $\|f\| = \|f_0\|_0$ (保范条件),
> 其中 $\|f_0\|_0$ 表示 $f_0$ 在 $\mathscr{X}_0$ 上的范数.

> [!remark] 注
> 由于 $f$ 满足 (1), (2) 两个条件, 通常称 $f$ 为 $f_0$ 的保范延拓.

> [!proof]-
> 在 $\mathscr{X}$ 上定义 $p(x) \triangleq \|f_0\|_0 \cdot \|x\|$, 那么 $p(x)$ 是 $\mathscr{X}$ 上的半范数, 从而根据定理 2.4.2, 必存在 $\mathscr{X}$ 上的线性泛函 $f(x)$, 满足
> $$f(x) = f_0(x) \quad (\forall x \in \mathscr{X}_0), \qquad (2.4.8)$$
> 及
> $$|f(x)| \leqslant p(x) = \|f_0\|_0 \cdot \|x\| \quad (\forall x \in \mathscr{X}). \qquad (2.4.9)$$
> 按泛函范数的定义, (2.4.9) 式蕴含 $\|f\| \leqslant \|f_0\|_0$, 又由 (2.4.8) 式, 显然有 $\|f_0\|_0 \leqslant \|f\|$. 因此 $\|f\| = \|f_0\|_0$. $\blacksquare$

> [!corollary] 推论 2.4.5
> 每个 $B^*$ 空间必有足够多的连续线性泛函.

> [!proof]-
> 任给 $x_1, x_2 \in \mathscr{X}$, 若 $x_1 \neq x_2$, 则 $x_0 \triangleq x_1 - x_2 \neq \theta$. 令 $\mathscr{X}_0 \triangleq \{\lambda x_0 \mid \lambda \in \mathbb{C}\}$, 并在 $\mathscr{X}_0$ 上定义
> $$f_0(\lambda x_0) = \lambda\|x_0\| \quad (\forall \lambda \in \mathbb{C}).$$
> 那么 $f_0(x_0) = \|x_0\|$ 且 $\|f_0\|_0 = 1$. 依定理 2.4.4, 存在 $\mathscr{X}$ 上的连续线性泛函 $f$, 使得
> $$f(x_0) = f_0(x_0) = \|x_0\|, \quad \|f\| = \|f_0\|_0 = 1.$$
> $\mathscr{X}$ 上的这个非零连续线性泛函 $f$, 可以分辨 $x_1, x_2$. 事实上,
> $$f(x_1) - f(x_2) = f(x_1 - x_2) = f(x_0) \neq 0.$$ $\blacksquare$

这里我们实际上证明了如下推论.

> [!corollary] 推论 2.4.6
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\forall x_0 \in \mathscr{X} \setminus \{\theta\}$, 必 $\exists f \in \mathscr{X}^*$, 使得
> $$f(x_0) = \|x_0\|, \quad \text{且} \quad \|f\| = 1.$$

> [!remark] 注
> 本推论给出判别 $B^*$ 空间零元的一种方法: 为了 $x_0 = \theta$, 必须且仅须 $\forall f \in \mathscr{X}^*$ 蕴含 $f(x_0) = 0$.

回顾在 Hilbert 空间 $H$ 中, 对任意的连续线性泛函 $f$, $\exists y \in H$, 使得

$$f(x) = (x, y) \quad (\forall x \in H).$$

若记 $M \triangleq \{x \mid f(x) = 0\}$, 那么对 $\forall x_0 \in H$, 有

$$f(x_0) = (x_0, y) = (x_0 - P_M x_0, y),$$

其中 $P_M x_0$ 表示 $x_0$ 在 $M$ 上的投影, 从而

$$|f(x_0)| \leqslant \|x_0 - P_M x_0\| \cdot \|y\| = \|f\|\rho(x_0, M). \qquad (2.4.10)$$

在一般的 $B^*$ 空间 $\mathscr{X}$ 中, $\rho(x_0, M) \triangleq \displaystyle\inf_{y \in M} \|x_0 - y\|$, (2.4.10) 式仍然成立. 事实上, $\forall n \in \mathbb{N}$ 及 $\forall x_0 \in \mathscr{X}$, 按下确界定义, $\exists x_n \in M$, 使得

$$\rho(x_0, M) \leqslant \rho(x_0, x_n) < \rho(x_0, M) + \frac{1}{n}.$$

因此

$$\begin{aligned}|f(x_0)| &= |f(x_n - x_0)| \leqslant \|f\| \cdot \|x_n - x_0\| \\ &\leqslant \|f\|\left(\rho(x_0, M) + \frac{1}{n}\right),\end{aligned}$$

上式令 $n \to \infty$, 即得 (2.4.10) 式.

现在提一个问题: 在 $B^*$ 空间 $\mathscr{X}$ 上, 给定子空间 $M$ 及 $x_0 \in \mathscr{X} \setminus M$, 是否 $\exists f \in \mathscr{X}^*$, 使得 $f$ 在 $M$ 上为 0, 并使 (2.4.10) 式中的等号成立? 这导致如下定理.

> [!theorem] 定理 2.4.7
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $M$ 是 $\mathscr{X}$ 的线性子空间. 若 $x_0 \in \mathscr{X}$, 且
> $$d \triangleq \rho(x_0, M) > 0,$$
> 则必 $\exists f \in \mathscr{X}^*$ 适合条件:
> (1) $f(x) = 0 \quad (\forall x \in M)$;
> (2) $f(x_0) = d$;
> (3) $\|f\| = 1$.

> [!proof]-
> 考虑 $\mathscr{X}_0 \triangleq \{x = x' + \alpha x_0 \mid x' \in M, \alpha \in \mathbb{K}\}$, $\forall x \in \mathscr{X}_0$, 定义
> $$f_0(x) = \alpha d.$$
> 显然, $f_0$ 适合条件 (1), (2). 又若 $x = x' + \alpha x_0$ ($x' \in M$, $\alpha \neq 0$), 则
> $$\begin{aligned}|f_0(x)| &= |\alpha|d = |\alpha|\rho(x_0, M) \\ &\leqslant |\alpha|\left\|\frac{x'}{\alpha} + x_0\right\| \\ &= \|x' + \alpha x_0\| = \|x\|.\end{aligned}$$
> 因此 $\|f_0\| \leqslant 1$. 依 Hahn-Banach 定理 (定理 2.4.4), 将 $f_0$ 保范延拓为 $f \in \mathscr{X}$, 便有 $f$ 满足条件 (1), (2) 及 $\|f\| \leqslant 1$. 又因为 $f \in \mathscr{X}^*$, 并满足条件 (2), 所以由 (2.4.10) 式便得 $\|f\| \geqslant 1$, 于是 (3) 成立. $\blacksquare$

> [!corollary] 推论 2.4.8
> 设 $M$ 是 $B^*$ 空间 $\mathscr{X}$ 的一个子集, 又设 $x_0$ 是 $\mathscr{X}$ 中的任一个非零元素. 那么
> $$x_0 \in \overline{\mathrm{span}M},$$
> 其充要条件是: 对 $\forall f \in \mathscr{X}^*$,
> $$f(x) = 0 \quad (\forall x \in M) \Longrightarrow f(x_0) = 0.$$

> [!proof]-
> 必要性是显然的, 下面我们用反证法证明充分性. 倘若 $x_0 \notin \overline{\mathrm{span}M}$, 那么
> $$d \triangleq \rho(x_0, \overline{\mathrm{span}M}) > 0.$$
> 因此, 依定理 2.4.7, $\exists f \in \mathscr{X}^*$, 使得 $f(x) = 0$ ($\forall x \in M$), 并且 $f(x_0) = d > 0$. 但按充分性假定, 对此 $f$ 应有 $f(x_0) = 0$, 便引出矛盾. $\blacksquare$

> [!example] 特例 2.4.9
> 若 $M = \{x_1, x_2, \cdots, x_n, \cdots\}$, 是否能用形如 $\displaystyle\sum_{i=1}^{n} c_i x_i$ 的线性组合的序列极限去逼近给定的元素 $x_0$? 本推论给出了这种逼近存在的一个充要条件: 对所有的在 $x_1, x_2, \cdots, x_n, \cdots$ 上为 0 的连续线性泛函 $f$ 都有 $f(x_0) = 0$.

### 4.2 几何形式 —— 凸集分离定理

平面上两个互不相交的凸集 $A$ 与 $B$, $A \cap B = \varnothing$, 有一条重要的几何性质: 存在一条直线 $l$ 分离 $A$ 与 $B$, 即存在直线 $l$ 使 $A$ 与 $B$ 各在 $l$ 的一侧 (请参看图 2.4.1).

[图 2.4.1]

在一般的线性空间 $\mathscr{X}$ 中, 这条几何性质有没有相应的推广呢? 下面就来讨论这个问题, 为简单起见, 今后我们总假定 $\mathscr{X}$ 是实的, $\mathscr{X}$ 上的线性泛函也取实值.

在 $\mathscr{X}$ 上相应于平面上过原点的直线的概念是极大线性子空间的概念.

> [!definition] 定义 2.4.10 (极大线性子空间)
> 在线性空间 $\mathscr{X}$ 中, $\mathscr{X}$ 的线性子空间 $M$ 称为是极大的, 如果对于任何一个以 $M$ 为真子集的线性子空间 $M_1$ 必有 $M_1 = \mathscr{X}$.

> [!proposition] 命题 2.4.11
> $M$ 是极大线性子空间的充要条件是, $M$ 是线性真子空间, 并且 $\forall x_0 \in \mathscr{X} \setminus M$ 有
> $$\mathscr{X} = \{\lambda x_0 \mid \lambda \in \mathbb{R}\} \oplus M.$$

> [!proof]-
> 必要性是显然的. 为了证充分性, 设 $M_1$ 是以 $M$ 为真子集的线性子空间, 那么 $\exists x_0 \in M_1 \setminus M$. 于是有 $\lambda x_0 \in M_1$ ($\forall \lambda \in \mathbb{R}$) 及 $M \subset M_1$, 从而
> $$\mathscr{X} = \{\lambda x_0 \mid \lambda \in \mathbb{R}\} \oplus M \subset M_1,$$
> 即得 $\mathscr{X} = M_1$. 于是 $M$ 是极大线性子空间. $\blacksquare$

> [!definition] 定义 2.4.12 (极大线性流形 / 超平面)
> $\mathscr{X}$ 的极大线性子空间 $M$ 对向量 $x_0 \in \mathscr{X}$ 的平移
> $$L \triangleq x_0 + M$$
> 称为极大线性流形, 或简称超平面.

> [!remark] 注
> 超平面是平面上一般直线概念的推广. 平面上的直线 $l$ 可以通过线性函数表示:
> $$l = \{x = (\xi, \eta) \mid a\xi + b\eta = c\}.$$
> 超平面 $L$ 也可以通过线性泛函来刻画. 事实上, 如果 $f$ 是线性 ($B^*$) 空间 $\mathscr{X}$ 上的非零 (连续) 线性泛函, 那么集合
> $$H_f^r \triangleq \{x \in \mathscr{X} \mid f(x) = r\} \quad (r \in \mathbb{R})$$
> 必是一个 (闭) 超平面, 这是因为 $H_f^0$ 显然是线性子空间, 又 $\forall x_1 \in \mathscr{X} \setminus H_f^0$, $\forall x \in \mathscr{X}$ 有
> $$x = \frac{f(x)}{f(x_1)}x_1 + H_f^0.$$
> 从而 $H_f^0$ 还是极大的. 由于 $f$ 是非 0 的, $\exists x_0 \in \mathscr{X}$, 使 $f(x_0) \neq 0$. 由 $f$ 的线性, 不妨设 $f(x_0) = r$, 今对任意 $x \in H_f^r$, 因为
> $$f(x - x_0) = f(x) - f(x_0) = 0,$$
> 所以 $x - x_0 \in H_f^0$, 这证明了 $H_f^r = x_0 + H_f^0$ 是一个超平面. 又若 $f$ 是连续的, 则 $H_f^r$ 显然是闭的.
> 反过来, 若 $L$ 是 (闭) 超平面, 可设 $L = x_0 + M$, 其中 $M$ 是 (闭) 极大线性子空间, $x_0 \in \mathscr{X} \setminus M$. 这时 $\forall x \in \mathscr{X}$ 可表示成
> $$x = \lambda x_0 + y \quad (\lambda \in \mathbb{R}, y \in M)$$
> 的形式. 再定义线性泛函 $f: \mathscr{X} \to \mathbb{R}$,
> $$f(x) = f(\lambda x_0 + y) = \lambda \quad (\lambda \in \mathbb{R}, y \in M).$$
> 显然 $f$ 为 $\mathscr{X}$ 上的线性泛函, 满足 $M = H_f^0$ 以及 $f(x_0) = 1$. 因此 $L = H_f^1$. 若 $L$ 是闭的, 从而 $H_f^0$ 是闭的, 那么 $f$ 还是连续的 (见习题 2.1.7(3)).

总结起来有下面的定理.

> [!theorem] 定理 2.4.13
> 为了 $L$ 是线性 ($B^*$) 空间 $\mathscr{X}$ 上的一个 (闭) 超平面, 必须且仅须存在非零 (连续) 线性泛函 $f$ 及 $r \in \mathbb{R}$, 使得 $L = H_f^r$.

所谓超平面 $L = H_f^r$ 使一个集合 $E$ 在它的一侧, 用线性泛函来描写就是

$$\forall x \in E \Longrightarrow f(x) \leqslant r \text{ (或 } \geqslant r\text{)}.$$

> [!definition] 定义 2.4.14 (凸集分离)
> 所谓超平面 $L = H_f^r$ 分离集合 $E$ 与 $F$, 是指:
> $$\begin{aligned}\forall x \in E &\Longrightarrow f(x) \leqslant r \text{ (或 } \geqslant r\text{)}, \\ \forall x \in F &\Longrightarrow f(x) \geqslant r \text{ (或 } \leqslant r\text{)}.\end{aligned}$$
> 如果在上面两个式子中, 用 "$<$" 与 "$>$" 分别代替 "$\leqslant$" 与 "$\geqslant$", 那么就说 $H_f^r$ 严格分离 $E$ 与 $F$.

现在来讨论如何用超平面分离两个互不相交的凸集, 以此作为 Hahn-Banach 定理 (定理 2.4.4) 的应用. 设 $\mathscr{X}$ 是 $B^*$ 空间, 依命题 1.5.11, 如果 $E$ 是 $\mathscr{X}$ 的以 $\theta$ 为内点的真凸子集, 那么它的 Minkowski 泛函 $p(x)$ 便是一个非零的连续次线性泛函, 满足

$$\forall x \in E \Longrightarrow p(x) \leqslant 1. \qquad (2.4.11)$$

如果还存在一点 $x_0 \in \mathscr{X} \setminus E$, 则由 $p(x)$ 的定义和 $E$ 是以 $\theta$ 为内点的凸集可以推出 $p(x_0) \geqslant 1$. 下面我们证明存在超平面 $H_f^r$ 分离 $E$ 与 $x_0$. 为此寻求线性泛函 $f$. 先在一维线性空间

$$\mathscr{X}_0 \triangleq \{\lambda x_0 \mid \lambda \in \mathbb{R}\}$$

上定义

$$f_0(\lambda x_0) \triangleq \lambda p(x_0) \quad (\forall \lambda \in \mathbb{R}).$$

显然 $f_0$ 是 $\mathscr{X}_0$ 上的线性泛函, 满足

$$\begin{aligned}f_0(x) &= f_0(\lambda x_0) = \lambda p(x_0) \\ &\leqslant p(\lambda x_0) = p(x) \quad (\forall x \in \mathscr{X}_0).\end{aligned}$$

根据实形式 Hahn-Banach 定理 (定理 2.4.1), 必存在 $\mathscr{X}$ 上的线性泛函 $f(x)$, 满足

$$\begin{aligned}f(x_0) &= f_0(x_0) = p(x_0) \geqslant 1, \qquad (2.4.12) \\ f(x) &\leqslant p(x) \quad (\forall x \in \mathscr{X}). \qquad (2.4.13)\end{aligned}$$

联合 (2.4.11) 式与 (2.4.13) 式得到 $f(x) \leqslant 1$ ($\forall x \in E$). 于是 $H_f^1$ 便是分离 $E$ 与 $x_0$ 的超平面. 这样我们就得到如下定理.

> [!theorem] 定理 2.4.15 (Hahn-Banach 定理的几何形式)
> 设 $E$ 是实 $B^*$ 空间 $\mathscr{X}$ 上以 $\theta$ 为内点的真凸子集, 又设 $x_0 \notin E$, 则必存在一个超平面 $H_f^r$ 分离 $x_0$ 与 $E$.

> [!remark] 注 1
> 因为只要通过适当平移, 总可以把任一点变为 $\theta$ 点, 所以本定理对含有任意内点的真凸子集仍成立, 但对于无穷维空间 $\mathscr{X}$, $E$ 有内点这一条是不能省略的.

> [!remark] 注 2
> 可以证明定理中存在的超平面 $L \triangleq H_f^r$ 还是闭的. 这只要证明相应的 $f$ 还是连续的. 事实上, 由 (2.4.13) 式推出
> $$|f(x)| \leqslant \max(p(x), p(-x)) \quad (\forall x \in \mathscr{X}).$$

> [!theorem] 定理 2.4.16 (Ascoli 定理)
> 设 $E$ 是实 $B^*$ 空间 $\mathscr{X}$ 上的闭凸集, 则 $\forall x_0 \in \mathscr{X} \setminus E$, 必 $\exists f \in \mathscr{X}^*$ 及 $\alpha \in \mathbb{R}$, 适合
> $$f(x) < \alpha < f(x_0) \quad (\forall x \in E). \qquad (2.4.14)$$

> [!proof]-
> 因为 $x_0 \in \mathscr{X} \setminus E$ 及 $E$ 是闭集, 所以 $\exists \delta > 0$, 使得
> $$B(x_0, \delta) \subset \mathscr{X} \setminus E,$$
> 而 $B(x_0, \delta)$ 是有内点的凸集. 对 $E$ 与 $B(x_0, \delta)$ 应用定理 2.4.15, 存在非零线性连续泛函 $f$, 适合
> $$\sup_{x \in E} f(x) \leqslant \inf_{y \in B(x_0, \delta)} f(y) < f(x_0). \qquad (2.4.15)$$
> 取 $\alpha \in \mathbb{R}$, 使
> $$\sup_{x \in E} f(x) \leqslant \alpha < f(x_0),$$
> 即得 (2.4.14) 式. $\blacksquare$

> [!theorem] 定理 2.4.17 (Mazur 定理)
> 设 $E$ 是实 $B^*$ 空间 $\mathscr{X}$ 上的一个有内点的闭凸集, $F$ 是 $\mathscr{X}$ 上的一个线性流形, 又设 $\mathring{E} \cap F = \varnothing$, 那么存在一个包含 $F$ 的闭超平面 $L$, 使 $E$ 在 $L$ 的一侧.

> [!proof]-
> 设 $F = x_0 + \mathscr{X}_0$, 其中 $x_0 \in \mathscr{X}$, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间. 由定理 2.4.15, 存在 $H_f^r$ 分离 $E$ 与 $F$, 即
> $$f(E) \leqslant r, \quad f(x_0 + x) \geqslant r \quad (\forall x \in \mathscr{X}_0). \qquad (2.4.16)$$
> 记 $r_0 \triangleq r - f(x_0)$, 便有 $f(x) \geqslant r_0$ ($\forall x \in \mathscr{X}_0$). 又由 $f$ 是线性的, 及 $\mathscr{X}_0$ 是线性子空间容易推出 $f(\mathscr{X}_0) = \{0\}$, 即
> $$\mathscr{X}_0 \subset H_f^0,$$
> 从而 $F \subset x_0 + H_f^0 = H_f^s$, 其中 $s \triangleq f(x_0)$. 再由 (2.4.16) 式推出 $f(E) \leqslant r = s$, 即 $E$ 在超平面 $H_f^s$ 的一侧. $H_f^s$ 还是闭的, 因为 $H_f^0$ 是闭的. $\blacksquare$

下面我们再作转换, 把上述 Hahn-Banach 定理的几何形式转换成一个分析形式的表述.

> [!theorem] 定理 2.4.18
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E$ 是 $\mathscr{X}$ 上以 $\theta$ 为内点的真凸子集. $F$ 是 $\mathscr{X}$ 的一个线性子空间, 又设 $\mathring{E} \cap F = \varnothing$, 则 $\exists g \in \mathscr{X}^*$, 使得
> $$\begin{aligned}g(x) &\leqslant 1 \quad (\forall x \in E), \\ g(x) &= 0 \quad (\forall x \in F).\end{aligned}$$

> [!proof]-
> 本定理是定理 2.4.17 的直接推论. 事实上, 根据定理 2.4.17, $\exists f \in \mathscr{X}^* \setminus \{\theta\}$ 及 $\alpha \in \mathbb{R}$, 使得
> $$f(x) \leqslant \alpha \quad (\forall x \in E), \quad f(x) = \alpha \quad (\forall x \in F).$$
> 取 $\alpha = 0$, 则 $f(E) \leqslant 0$, $f(F) = 0$, 即 $f$ 将 $E$ 与 $F$ 分离开. 令
> $$g(x) = \frac{1}{\alpha}f(x),$$
> 则 $g \in \mathscr{X}^*$, 且
> $$\begin{aligned}g(x) &\leqslant 1 \quad (\forall x \in E), \\ g(x) &= 0 \quad (\forall x \in F).\end{aligned}$$
> $\blacksquare$

应用 Hölder 不等式, 可以证明下面一个具有广泛应用的凸集分离定理.

> [!theorem] 定理 2.4.19 (凸集分离定理)
> 设 $A$, $B$ 为实 $B^*$ 空间 $\mathscr{X}$ 上的两个非空凸集, $A$ 有内点, $\mathring{A} \cap B = \varnothing$, 则必存在一个超平面 $H_f^r$ 分离 $A$ 与 $B$, 即 $\exists f \in \mathscr{X}^* \setminus \{\theta\}$, 使得
> $$f(x) \leqslant r \leqslant f(y) \quad (\forall x \in A, \forall y \in B).$$

> [!proof]-
> 记 $E = A - B \triangleq \{x - y \mid x \in A, y \in B\}$, 容易验证 $E$ 是有内点的凸集, 且 $\theta \notin \mathring{E}$. 由定理 2.4.15, 存在闭超平面 $H_f^{r_0}$ 分离 $E$ 和 $\theta$. 不妨假定
> $$f(x - y) \leqslant r_0 \leqslant f(\theta) = 0 \quad (\forall x \in A, \forall y \in B),$$
> 即 $f(x) \leqslant f(y)$ ($\forall x \in A, \forall y \in B$). 因此, $\exists r \in \mathbb{R}$, 使得
> $$\sup_{x \in A} f(x) \leqslant r \leqslant \inf_{y \in B} f(y).$$
> $\blacksquare$

作为凸集分离定理的一个应用, 我们证明一个一般形式的次梯度存在定理.

> [!theorem] 定理 2.4.20
> 设 $\mathscr{X}$ 为 $B^*$ 空间, $f: \mathscr{X} \to \mathbb{R}^1$ 为凸函数 (即 $\forall t \in [0, 1]$, $f(tx + (1-t)y) \leqslant tf(x) + (1-t)f(y)$, $\forall x, y \in \mathscr{X}$), 且 $f$ 在 $\mathscr{X}$ 上连续. 若 $x_0 \in \mathscr{X}$, 且 $\mathscr{X}_0$ 是 $\mathscr{X}$ 的子空间, $g \in \mathscr{X}_0^*$ 满足 $g(x) \leqslant f(x)$ ($\forall x \in \mathscr{X}_0$), 则必存在 $x_0^* \in \mathscr{X}^*$, 使得
> (1) $x_0^*(x) = g(x)$ ($\forall x \in \mathscr{X}_0$) (延拓条件);
> (2) $x_0^*(x) \leqslant f(x)$ ($\forall x \in \mathscr{X}$) (受 $f$ 控制条件).

> [!proof]-
> 在乘积空间 $\mathscr{X} \times \mathbb{R}^1$ 上, 考查两个凸集合
> $$\begin{aligned}A &\triangleq \{(x, t) \in \mathscr{X} \times \mathbb{R}^1 \mid f(x) \leqslant t\}, \\ B &\triangleq \{(x, t) \in \mathscr{X} \times \mathbb{R}^1 \mid x \in \mathscr{X}_0, t = g(x)\}.\end{aligned}$$
> 由于 $f$ 连续, 所以 $A$ 有内点, 且 $\mathring{A} \cap B = \varnothing$ (否则若 $(x, t) \in \mathring{A} \cap B$, 则 $t > f(x)$ 且 $t = g(x)$, 与 $g(x) \leqslant f(x)$ 矛盾). 依定理 2.4.19, 存在 $(\mathscr{X} \times \mathbb{R}^1)^*$ 中的非零元 $(h, \mu) \in \mathscr{X}^* \times \mathbb{R}^1$, 分离 $A$ 与 $B$, 即
> $$h(x) + \mu t \leqslant h(y) + \mu g(y) \quad (\forall (x, t) \in A, \forall y \in \mathscr{X}_0).$$
> 令 $x = \theta$, $t = f(\theta) + s$ ($s \to +\infty$), 便得 $\mu \leqslant 0$. 若 $\mu = 0$, 则 $h(x - y) \leqslant 0$ ($\forall x \in \mathscr{X}, y \in \mathscr{X}_0$), 这蕴含 $h = \theta$, 矛盾. 因此 $\mu < 0$, 由 $h(x) + \mu t \leqslant h(y) + \mu g(y)$, 取 $y = x \in \mathscr{X}_0$, 得
> $$\mu t \leqslant \mu g(x) \quad (\forall (x, t) \in A),$$
> 即
> $$g(x) \leqslant t \quad (\forall (x, t) \in A).$$
> 令 $t = f(x)$, 便得 $g(x) \leqslant f(x)$ ($\forall x \in \mathscr{X}_0$). 定义 $x_0^* = -\dfrac{1}{\mu}h$, 则
> $$x_0^*(x) \leqslant f(x) \quad (\forall x \in \mathscr{X}),$$
> 且 $x_0^*(x) = g(x)$ ($\forall x \in \mathscr{X}_0$). $\blacksquare$

### 4.3 应用

本段将 Hahn-Banach 定理及其几何形式应用于一些具体的分析问题.

### 1. 抽象可微函数的中值定理

设 $\mathscr{Y}$ 是 $B^*$ 空间, $f: (a, b) \to \mathscr{Y}$ 称为数值变量 $t$ 的抽象函数. 如果 $t \in (a, b)$, 称 $f$ 在 $t$ 点可微, 是指: 存在 $y \in \mathscr{Y}$, 使得

$$\left\|\frac{f(t+h) - f(t)}{h} - y\right\| \to 0 \quad (\text{当 } h \to 0).$$

这个 $y$ 记为 $f'(t)$ 或 $\dfrac{\mathrm{d}f(t)}{\mathrm{d}t}$, 称为 $f$ 在 $t$ 点的微商.

我们知道, 对于数值函数 $f$, 中值定理成立, 即

$$|f(b) - f(a)| = |f'(t_0)| \cdot |b - a|,$$

其中 $t_0 \in (a, b)$. 但对于一般的抽象函数, 上述等号未必成立. 例如, 设向量值函数

$$f(t) = (\cos t, \sin t) \quad (t \in [0, 2\pi]),$$

则 $f'(t) = (-\sin t, \cos t)$, $\|f'(t)\| = 1$, 但

$$\|f(2\pi) - f(0)\| = 0 \neq 2\pi = \|f'(t)\| \cdot |2\pi - 0|.$$

然而, 利用 Hahn-Banach 定理, 可以得到下面的抽象函数中值定理.

> [!theorem] 定理 2.4.21 (抽象中值定理)
> 设 $\mathscr{Y}$ 是 $B$ 空间, $f: (a, b) \to \mathscr{Y}$ 在 $(a, b)$ 内可微, 则 $\forall t_1, t_2 \in (a, b)$, $\exists \theta \in (0, 1)$, 使得
> $$\|f(t_2) - f(t_1)\| \leqslant \|f'(\theta t_2 + (1-\theta)t_1)\| \cdot |t_2 - t_1|. \qquad (2.4.17)$$

> [!proof]-
> 由 Hahn-Banach 定理的推论 2.4.6, $\exists y^* \in \mathscr{Y}^*$, 使得 $\|y^*\| = 1$, 且
> $$\langle y^*, f(t_2) - f(t_1)\rangle = \|f(t_2) - f(t_1)\|. \qquad (2.4.18)$$
> 令 $\varphi(t) = \langle y^*, f(t)\rangle$, 则 $\varphi$ 是 $(a, b)$ 上的数值可微函数, 且
> $$\varphi'(t) = \langle y^*, f'(t)\rangle \quad (\forall t \in (a, b)).$$
> 由数值中值定理, $\exists \theta \in (0, 1)$, 使得
> $$\varphi(t_2) - \varphi(t_1) = \varphi'(\theta t_2 + (1-\theta)t_1) \cdot (t_2 - t_1).$$
> 联合 (2.4.18) 式, 便得
> $$\begin{aligned}\|f(t_2) - f(t_1)\| &= \varphi(t_2) - \varphi(t_1) \\ &= \varphi'(\theta t_2 + (1-\theta)t_1) \cdot (t_2 - t_1) \\ &= \langle y^*, f'(\theta t_2 + (1-\theta)t_1)\rangle \cdot (t_2 - t_1) \\ &\leqslant \|y^*\| \cdot \|f'(\theta t_2 + (1-\theta)t_1)\| \cdot |t_2 - t_1| \\ &= \|f'(\theta t_2 + (1-\theta)t_1)\| \cdot |t_2 - t_1|.\end{aligned}$$
> $\blacksquare$

### 2. 凸规划问题的 Lagrange 乘子

数学规划的理论建立在凸集分离定理 (定理 2.4.19) 的基础上. 为介绍这一应用, 我们首先引入凸规划的概念.

> [!definition] 定义 2.4.22 (凸规划)
> 设 $\mathscr{X}$ 是线性空间, $C \subset \mathscr{X}$ 是凸集, $f, g_1, \cdots, g_n$ 是 $C$ 上的凸函数. 求 $x_0 \in C$, 满足:
> $$\begin{cases}g_i(x_0) \leqslant 0 & (i = 1, 2, \cdots, n), \\ f(x_0) = \min \{f(x) \mid x \in C, g_i(x) \leqslant 0 \ (i = 1, 2, \cdots, n)\}\end{cases}$$
> 称为凸规划. 其中 $f(x)$ 称为目标函数, $g_i(x) \leqslant 0$ $(i = 1, 2, \cdots, n)$ 称为约束条件.

在 $\mathscr{X} = \mathbb{R}^n$ 情形, 凸规划就是求一个凸函数在凸集上的极小值问题.

凸规划有一个重要的性质, 就是 Lagrange 乘子的存在性.

> [!theorem] 定理 2.4.23
> 假设凸规划问题 (2.4.19) 是可行的 (即存在 $x \in C$, 使得 $g_i(x) \leqslant 0$, $i = 1, 2, \cdots, n$), 且 $x_0$ 是凸规划 (2.4.19) 的解, 则必存在 $\lambda_i \geqslant 0$ $(i = 0, 1, \cdots, n)$, 不全为 0, 使得
> $$\lambda_0 f(x_0) \leqslant \lambda_0 f(x) + \sum_{i=1}^{n} \lambda_i g_i(x) \quad (\forall x \in C). \qquad (2.4.20)$$
> 此外, (2.4.20) 式还有下列补充条件:
> $$\lambda_i g_i(x_0) = 0 \quad (i = 1, 2, \cdots, n). \qquad (2.4.21)$$
> (2.4.20) 式与 (2.4.21) 式合称为凸规划的 Karush-Kuhn-Tucker 条件 (简称 KKT 条件).

> [!proof]-
> 在 $\mathscr{X} \times \mathbb{R}^{n+1}$ 中考察集合
> $$\begin{aligned}A &\triangleq \{(u, t_0, t_1, \cdots, t_n) \in C \times \mathbb{R}^{n+1} \mid f(x) \leqslant t_0, \\ &\quad g_1(x) \leqslant t_1, \cdots, g_n(x) \leqslant t_n\},\\ B &\triangleq \{(u, t_0, t_1, \cdots, t_n) \in C \times \mathbb{R}^{n+1} \mid u = x_0, \\ &\quad t_0 < f(x_0), t_1 < 0, \cdots, t_n < 0\}.\end{aligned}$$
> 容易验证 $A$, $B$ 是 $\mathscr{X} \times \mathbb{R}^{n+1}$ 中的凸集, 且 $\mathring{A} \cap B = \varnothing$. 应用定理 2.4.19 (凸集分离定理), 存在不全为零的 $\lambda_0, \lambda_1, \cdots, \lambda_n \geqslant 0$ 及 $x^* \in \mathscr{X}^*$, 使得
> $$x^*(x) + \sum_{i=0}^{n} \lambda_i t_i \geqslant x^*(x_0) + \sum_{i=0}^{n} \lambda_i s_i$$
> 对 $\forall (x, t_0, \cdots, t_n) \in A$ 及 $\forall (x_0, s_0, \cdots, s_n) \in B$ 成立. 由此可推出 (2.4.20) 式及 (2.4.21) 式. $\blacksquare$

> [!remark] 注
> 若 $\lambda_0 > 0$, 则 (2.4.20) 式可以改写为
> $$f(x_0) \leqslant f(x) + \sum_{i=1}^{n} \frac{\lambda_i}{\lambda_0} g_i(x) \quad (\forall x \in C),$$
> 令 $\mu_i = \lambda_i / \lambda_0$ $(i = 1, 2, \cdots, n)$, 则 $\mu_i \geqslant 0$, 且
> $$L(x_0, \mu) \leqslant L(x, \mu) \quad (\forall x \in C),$$
> 其中 $L(x, \mu) = f(x) + \displaystyle\sum_{i=1}^{n} \mu_i g_i(x)$ 称为 Lagrange 函数, $\mu = (\mu_1, \mu_2, \cdots, \mu_n)$ 称为 Lagrange 乘子.

凸规划问题 $(P)$ 是指: 给定凸集 $C$ 上的凸函数 $f, g_1, g_2, \cdots, g_n$, 求 $x_0 \in C$, 满足

$$g_i(x_0) \leqslant 0 \quad (i = 1, 2, \cdots, n),$$

且

$$f(x_0) = \min \left\{ f(x) \big| x \in C, g_i(x) \leqslant 0 (i = 1, 2, \cdots, n) \right\}, \tag{2.4.25}$$

其中条件 $g_i(x_0) \leqslant 0 (i = 1, 2, \cdots, n)$ 称为约束.

在多元微分学中, 我们知道往往可以借助于 Lagrange 乘子法, 把带约束的极值问题化归为无约束的极值问题. 现在我们也希望这样做, 寻求条件来确定 $(\widehat{\lambda}_1, \widehat{\lambda}_2, \cdots, \widehat{\lambda}_n) \in \mathbb{R}^n$, 使得: 若 $x_0$ 是问题 $(P)$ 的解, 则

$$f(x_0) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0) = \min \left\{ f(x) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x) \big| x \in C \right\}. \tag{2.4.26}$$

这就通过 Lagrange 乘子 $(\widehat{\lambda}_1, \widehat{\lambda}_2, \cdots, \widehat{\lambda}_n)$ 把约束条件吸收到极值函数中去. 考察等式 (2.4.26), 它等价于不等式组

$$f(x_0) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0) \leqslant f(x) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x) \quad (\forall x \in C). \tag{2.4.27}$$

为了寻求 $(\widehat{\lambda}_1, \widehat{\lambda}_2, \cdots, \widehat{\lambda}_n)$, 我们宁可多引进一个参数 $\widehat{\lambda}_0$, 而考察较弱的一组不等式:

$$\widehat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0) \leqslant \widehat{\lambda}_0 f(x) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x) \quad (\forall x \in C). \tag{2.4.28}$$

如果能证明 $\widehat{\lambda}_0 > 0$, (2.4.28) 式就等价于 (2.4.27) 式.

寻求非零的 $(\widehat{\lambda}_0, \widehat{\lambda}_1, \cdots, \widehat{\lambda}_n) \in \mathbb{R}^{n+1}$, 在几何上相当于在 $\mathbb{R}^{n+1}$ 上找一个超平面, 而不等式组 (2.4.28) 就是这个超平面分离集合

$$E \triangleq \left\{ (t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \Bigg| \begin{aligned} &t_0 \leqslant f(x_0); \\ &t_i \leqslant 0 (i = 1, 2, \cdots, n) \end{aligned} \right\}$$

与

$$F \triangleq \left\{ (t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \Bigg| \begin{aligned} &\exists x \in C, \text{ 使得} \\ &t_0 \geqslant f(x), \text{ 并且} \\ &t_i \geqslant g_i(x) (i = 1, 2, \cdots, n) \end{aligned} \right\}$$

的结果. 因为 $f, g_1, \cdots, g_n$ 都是凸函数, 易证 $F$ 是 $\mathbb{R}^{n+1}$ 中的一个凸集, 而 $E$ 显然是一个有内点的凸集, 其内点全体是

$$\overset{\circ}{E} = \left\{ (t_0, t_1, \cdots, t_n) \in \mathbb{R}^{n+1} \Bigg| \begin{aligned} &t_0 < f(x_0); \\ &t_i < 0 (i = 1, 2, \cdots, n) \end{aligned} \right\}.$$

由于 $x_0$ 是问题 $(P)$ 的解, 所以 $\overset{\circ}{E} \cap F = \varnothing$. 现在应用定理 2.4.16 的注, 便得到

$$\widehat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0) \leqslant \widehat{\lambda}_0 (f(x) + \xi_0) + \sum_{i=1}^{n} \widehat{\lambda}_i (g_i(x) + \xi_i)$$

$$\qquad\qquad\qquad\qquad (\forall x \in C, \forall \xi_i \geqslant 0 (i = 0, 1, \cdots, n)). \tag{2.4.29}$$

由此可见 $\widehat{\lambda}_i \geqslant 0 (i = 0, 1, \cdots, n)$, 并且 (2.4.28) 式成立. 此外还有

$$\widehat{\lambda}_i g_i(x_0) = 0 \quad (i = 1, 2, \cdots, n). \tag{2.4.30}$$

这表明: 使 $g_i(x_0) < 0$ 的指标 $i$ 对应的约束实际上在此不起作用. 为了证明 (2.4.30) 式, 一方面, 由凸集分离定理 (定理 2.4.16),

$$\widehat{\lambda}_0 f(x_0) \leqslant \widehat{\lambda}_0 f(x_0) + \sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0),$$

因此,

$$\sum_{i=1}^{n} \widehat{\lambda}_i g_i(x_0) \geqslant 0.$$

另一方面, 由假设 $g_i(x_0) \leqslant 0$, 以及 $\widehat{\lambda}_i \geqslant 0$ 可见 (2.4.30) 式成立.

以下我们确定使 $\widehat{\lambda}_0 > 0$ 的条件.

> [!lemma] 引理 2.4.24
> 若 $\exists \widehat{x} \in C$ 满足
> $$g_i(\widehat{x}) < 0 \quad (i = 1, 2, \cdots, n), \tag{2.4.31}$$
> 则 $\widehat{\lambda}_0 > 0$.

> [!proof]-
> 用反证法. 倘若不然, $\widehat{\lambda}_0 = 0$. 由 (2.4.29) 式和 (2.4.30) 式便有
> $$\sum_{i=1}^{n} \widehat{\lambda}_i g_i(\widehat{x}) \geqslant 0. \tag{2.4.32}$$
> 因为 $(\widehat{\lambda}_0, \widehat{\lambda}_1, \cdots, \widehat{\lambda}_n) \neq \theta$, 所以 $(\widehat{\lambda}_1, \widehat{\lambda}_2, \cdots, \widehat{\lambda}_n) \neq (0, 0, \cdots, 0)$. 又 $\widehat{\lambda}_i \geqslant 0 (i = 1, 2, \cdots, n)$, 联合 (2.4.31) 式便有
> $$\sum_{i=1}^{n} \widehat{\lambda}_i g_i(\widehat{x}) < 0.$$
> 这与 (2.4.32) 式矛盾. $\blacksquare$

总结以上所述, 我们得到下面的定理.

> [!theorem] 定理 2.4.25 (Kuhn-Tucker)
> 设 $\mathscr{X}$ 是一个线性空间, $C$ 是 $\mathscr{X}$ 的一个凸子集. 又设 $f, g_1, \cdots, g_n$ 是 $C$ 上的凸泛函, 那么在引理 2.4.24 的假设下, 若 $x_0$ 是问题 $(P)$ 的解, 则必存在实数 $\lambda_1, \lambda_2, \cdots, \lambda_n \geqslant 0$, 适合
> $$f(x_0) = \min \left\{ f(x) + \sum_{i=1}^{n} \lambda_i g_i(x) \big| \forall x \in C \right\},$$
> 以及
> $$\lambda_i g_i(x_0) = 0 \quad (i = 1, 2, \cdots, n).$$

### 3. 凸泛函的次微分

Banach 空间 $\mathscr{X}$ 上的一个凸泛函 $f: \mathscr{X} \to \mathbb{R}$, 一般来说未必是可微的. 然而参照函数的导数与这函数图形的切线斜率之间的关系, 我们将利用凸泛函 $f$ 的上方图 $\text{epi}(f)$ 的承托超平面来推广导数的概念.

> [!definition] 定义 2.4.26 (次微分)
> 设 $f: \mathscr{X} \to \mathbb{R}$ 是凸的, $\forall x_0 \in \mathscr{X}$, 称集合
> $$\partial f(x_0) \triangleq \left\{ x^* \in \mathscr{X}^* \big| \langle x^*, x - x_0 \rangle + f(x_0) \leqslant f(x) (\forall x \in \mathscr{X}) \right\}$$
> 为函数 $f$ 在 $x_0$ 点的次微分, $\partial f(x_0)$ 中的任意泛函 $x^*$ 称为 $f$ 在 $x_0$ 点的次梯度.

> [!theorem] 定理 2.4.27
> 若 $f: \mathscr{X} \to \mathbb{R}$ 是凸的, 并在 $x_0 \in \mathscr{X}$ 连续, 则 $\partial f(x_0) \neq \varnothing$.

> [!proof]-
> 在空间 $\mathscr{X} \times \mathbb{R}$ 上, 考察凸集 $\text{epi}(f)$ 与单点集 $\{(x_0, f(x_0))\}$. 因为 $f$ 在 $x_0$ 点连续, 所以 $\text{epi}(f)$ 有内点 $(x_0, f(x_0) + 1)$, 并且
> $$\{(x_0, f(x_0))\} \cap \{\text{epi}(f)\}^{\circ} = \varnothing.$$
> 应用凸集分离定理 (定理 2.4.16), 有非零元 $(x^*, \xi) \in \mathscr{X}^* \times \mathbb{R}$ 分离 $\text{epi}(f)$ 与 $\{(x_0, f(x_0))\}$, 即有
> $$\langle x^*, x_0 \rangle + \xi f(x_0) \leqslant \langle x^*, x \rangle + \xi t \quad (\forall (x, t) \in \text{epi}(f)). \tag{2.4.33}$$
> 从而有 (令 $x = x_0$ 及 $t = f(x_0) + s (\forall s > 0)$) $\xi \geqslant 0$. 下证 $\xi \neq 0$. 倘若不然, $\xi = 0$, 那么由 (2.4.33) 式便有
> $$\langle x^*, x_0 - x \rangle \leqslant 0 \quad (\forall x \in \mathscr{X}),$$
> 即得 $x^* = \theta$. 这便与 $(x^*, \xi)$ 的非零性矛盾. 于是 $\xi > 0$. 这时可令 $x_0^* = -x^*/\xi$, 即得 $x_0^* \in \partial f(x_0)$. $\blacksquare$

### 习题

2.4.1 设 $p$ 是实线性空间 $\mathscr{X}$ 上的次线性泛函, 求证:

(1) $p(\theta) = 0$;

(2) $p(-x) \geqslant -p(x)$;

(3) 任意给定 $x_0 \in \mathscr{X}$, 在 $\mathscr{X}$ 上必有实线性泛函 $f$, 满足 $f(x_0) = p(x_0)$, 以及 $f(x) \leqslant p(x) (\forall x \in \mathscr{X})$.

2.4.2 设 $\mathscr{X}$ 是由实数列 $x = \{\alpha_n\}$ 全体组成的实线性空间, 其元素间相等和线性运算都按坐标定义, 并定义

$$p(x) = \varlimsup_{n \to \infty} \alpha_n \quad (\forall x = \{\alpha_n\} \in \mathscr{X}).$$

求证: $p(x)$ 是 $\mathscr{X}$ 上的次线性泛函.

2.4.3 设 $\mathscr{X}$ 是复线性空间, $p$ 是 $\mathscr{X}$ 上的半范数. $\forall x_0 \in \mathscr{X}$, $p(x_0) \neq 0$. 求证: 存在 $\mathscr{X}$ 上的线性泛函 $f$ 满足

(1) $f(x_0) = 1$;

(2) $|f(x)| \leqslant p(x)/p(x_0) (\forall x \in \mathscr{X})$.

2.4.4 设 $\mathscr{X}$ 是 $B^*$ 空间, $\{x_n\} (n = 1, 2, 3, \cdots)$ 是 $\mathscr{X}$ 中的点列. 如果 $\forall f \in \mathscr{X}^*$, 数列 $\{f(x_n)\}$ 有界, 求证: $\{x_n\}$ 在 $\mathscr{X}$ 内有界.

2.4.5 设 $\mathscr{X}_0$ 是 $B^*$ 空间 $\mathscr{X}$ 的闭子空间, 求证:

$$\rho(x, \mathscr{X}_0) = \sup \left\{ |f(x)| \big| f \in \mathscr{X}^*, \|f\| = 1, f(\mathscr{X}_0) = 0 \right\} \quad (\forall x \in \mathscr{X}),$$

其中 $\rho(x, \mathscr{X}_0) = \inf\limits_{y \in \mathscr{X}_0} \|x - y\|$.

2.4.6 设 $\mathscr{X}$ 是 $B^*$ 空间. 给定 $\mathscr{X}$ 中 $n$ 个线性无关的元素 $x_1, x_2, \cdots, x_n$ 与数域 $\mathbb{K}$ 中的 $n$ 个数 $C_1, C_2, \cdots, C_n$, 及 $M > 0$. 求证: 为了 $\exists f \in \mathscr{X}^*$ 适合 $f(x_k) = C_k (k = 1, 2, \cdots, n)$, 以及 $\|f\| \leqslant M$, 必须且仅须对任意的 $\alpha_1, \alpha_2, \cdots, \alpha_n \in \mathbb{K}$, 有

$$\left| \sum_{k=1}^{n} \alpha_k C_k \right| \leqslant M \left\| \sum_{k=1}^{n} \alpha_k x_k \right\|.$$

2.4.7 给定 $B^*$ 空间 $\mathscr{X}$ 中 $n$ 个线性无关的元素 $x_1, x_2, \cdots, x_n$, 求证: $\exists f_1, f_2, \cdots, f_n \in \mathscr{X}^*$, 使得

$$\langle f_i, x_j \rangle = \delta_{ij} \quad (i, j = 1, 2, \cdots, n).$$

2.4.8 设 $\mathscr{X}$ 是线性空间, 求证: 为了 $M$ 是 $\mathscr{X}$ 的极大线性子空间, 必须且仅须 $\dim(\mathscr{X} \setminus M) = 1$.

2.4.9 设 $\mathscr{X}$ 是复线性空间, $E$ 是 $\mathscr{X}$ 中的非空均衡集, $f$ 是 $\mathscr{X}$ 上的线性泛函. 求证:

$$|f(x)| \leqslant \sup_{y \in E} \text{Re} f(y) \quad (\forall x \in E).$$

2.4.10 设 $\mathscr{X}$ 是 $B^*$ 空间, $E \subset \mathscr{X}$ 是非空的均衡闭凸集, $\forall x_0 \in \mathscr{X} \setminus E$. 求证: $\exists f \in \mathscr{X}^*$ 及 $\alpha > 0$, 使得

$$|f(x)| < \alpha < |f(x_0)| \quad (\forall x \in E).$$

2.4.11 设 $E, F$ 是实的 $B^*$ 空间 $\mathscr{X}$ 中的两个互不相交的非空凸集, 并且 $E$ 是开的和均衡的. 求证: $\exists f \in \mathscr{X}^*$, 使得

$$|f(x)| < \inf_{y \in F} |f(y)| \quad (\forall x \in E).$$

2.4.12 设 $C$ 是实 $B^*$ 空间 $\mathscr{X}$ 中的一个凸集, 并设 $x_0 \in \overset{\circ}{C}$, $x_1 \in \partial C, x_2 = m(x_1 - x_0) + x_0 (m > 1)$. 求证: $x_2 \overline{\in} C$.

2.4.13 设 $M$ 是 $B^*$ 空间 $\mathscr{X}$ 中的闭凸集, 求证: $\forall x \in \mathscr{X} \setminus M$, 必 $\exists f_1 \in \mathscr{X}^*$, 满足 $\|f_1\| = 1$, 并且

$$\sup_{y \in M} f_1(y) \leqslant f_1(x) - d(x),$$

其中 $d(x) = \inf\limits_{z \in M} \|x - z\|$.

2.4.14 设 $M$ 是实 $B^*$ 空间 $\mathscr{X}$ 内的闭凸集, 求证:

$$\inf_{z \in M} \|x - z\| = \sup_{\substack{f \in \mathscr{X}^* \\ \|f\| = 1}} \left\{ f(x) - \sup_{z \in M} f(z) \right\} \quad (\forall x \in \mathscr{X}).$$

2.4.15 设 $\mathscr{X}$ 是一个 $B$ 空间, $f: \mathscr{X} \to \overline{\mathbb{R}} (\triangleq \mathbb{R} \cup \{\infty\})$ 是连续的凸泛函, 并且 $f(x) \not\equiv \infty$. 若定义 $f^*: \mathscr{X}^* \to \overline{\mathbb{R}}$ 为

$$f^*(x^*) = \sup_{x \in \mathscr{X}} \left\{ \langle x^*, x \rangle - f(x) \right\} \quad (\forall x^* \in \mathscr{X}^*),$$

求证: $f^*(x^*) \not\equiv \infty$.

2.4.16 设 $\mathscr{X}$ 是 $B$ 空间, $x(t): [a, b] \to \mathscr{X}$ 是连续的抽象函数. 又设 $\Delta$ 表示 $[a, b]$ 的分割:

$$a = t_0 < t_1 < t_2 < \cdots < t_n = b,$$

$$\|\Delta\| \triangleq \max_{0 \leqslant i \leqslant n-1} \{|t_{i+1} - t_i|\}.$$

求证: 在 $\mathscr{X}$ 中存在极限

$$\lim_{\|\Delta\| \to 0} \sum_{i=0}^{n-1} x(t_i)(t_{i+1} - t_i)$$

(此极限称为抽象函数 $x(t)$ 在 $[a, b]$ 上的 Riemann 积分).

2.4.17 设 $\mathscr{X}$ 是 Banach 空间, $G$ 是由 $\mathbb{C}$ 中的简单闭曲线 $L$ 围成的开区域. 如果 $x(z): \overline{G} \to \mathscr{X}$ 在 $G$ 内解析$^{\text{\textcircled{1}}}$, 且在 $\overline{G}$ 上连续. 求证: (推广的 Cauchy 定理)

$$\int_L x(z) \text{d}z = 0.$$

$^{\text{\textcircled{1}}}$即 $x(z)$ 在 $G$ 内每点可微 (参看本章 4.3 小节第一段). 换句话说, $\forall z_0 \in G$, 在 $\mathscr{X}$ 中存在极限 $\lim\limits_{z \to z_0} \dfrac{x(z) - x(z_0)}{z - z_0}$.

2.4.18 求证: (1) $|x|$ 在 $\mathbb{R}$ 中是凸的;

(2) $|x|$ 在 $x = 0$ 点的次微分 $\partial |x|(0) = [-1, 1]$.

## §5 共轭空间、弱收敛、自反空间

### 5.1 共轭空间的表示及应用

> [!definition] 定义 2.5.1 (共轭空间)
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $\mathscr{X}$ 上的所有连续线性泛函全体 $\mathscr{X}^*$ (见定义 2.1.12), 按范数
> $$\|f\| = \sup_{\|x\| = 1} |f(x)|$$
> 构成一个 $B$ 空间, 称为 $\mathscr{X}$ 的共轭空间.

> [!remark] 注
> $\mathscr{X}^*$ 的完备性直接根据定理 2.1.13: $\mathscr{X}^* = \mathscr{L}(\mathscr{X}, \mathbb{K})$ 导出.

> [!example] 例 2.5.2 $L^p[0, 1]$ 的共轭空间 $(1 \leqslant p < \infty)$
> 设 $q$ 是 $p$ 的共轭数, 即
> $$\begin{cases} \dfrac{1}{p} + \dfrac{1}{q} = 1, & \text{若 } p > 1, \\ q = \infty, & \text{若 } p = 1. \end{cases}$$
> 我们将证:
> $$L^p[0, 1]^* = L^q[0, 1]. \tag{2.5.1}$$
> 对于 $\forall g \in L^q[0, 1]$, 根据 Hölder 不等式
> $$\left| \int_0^1 f(x) g(x) \text{d}\mu \right| \leqslant \left( \int_0^1 |f(x)|^p \text{d}\mu \right)^{\frac{1}{p}} \left( \int_0^1 |g(x)|^q \text{d}\mu \right)^{\frac{1}{q}}$$
> ($\mu$ 是 $[0, 1]$ 上的 Lebesgue 测度), 我们知道:
> $$F_g(f) \triangleq \int_0^1 f(x) g(x) \text{d}\mu \quad (\forall f \in L^p[0, 1]) \tag{2.5.2}$$
> 定义了 $L^p[0, 1]$ 上的一个连续线性泛函, 并有
> $$\|F_g\|_{L^p[0, 1]^*} \leqslant \|g\|_{L^q[0, 1]}, \tag{2.5.3}$$
> 即映射 $g \mapsto F_g$ 将 $L^q[0, 1]$ 连续地嵌入 $L^p[0, 1]^*$.
> 以下证明映射 $g \mapsto F_g$ 是等距在上的. 这也就是, 对给定的 $F \in L^p[0, 1]^*$, 要找一个 $g \in L^q[0, 1]$, 使得
> $$F(f) = \int_0^1 f(x) g(x) \text{d}\mu \quad (\forall f \in L^p[0, 1]), \tag{2.5.4}$$
> 并且
> $$\|g\|_{L^q[0, 1]} = \|F\|. \tag{2.5.5}$$
> 对任意的可测集 $E \subset [0, 1]$, 令
> $$\nu(E) \triangleq F(\chi_E),$$
> 其中 $\chi_E$ 是 $E$ 的特征函数:
> $$\chi_E(x) = \begin{cases} 1, & \text{当 } x \in E, \\ 0, & \text{当 } x \overline{\in} E. \end{cases}$$
> 我们验证 $\nu$ 是一个完全可加测度. 事实上, 易见 $\nu$ 是有限可加的 (由于 $F$ 的可加性). 今设 $\{E_n\} \subset [0, 1]$, 满足
> $$E_1 \supset E_2 \supset \cdots \supset E_n \supset \cdots$$
> 以及
> $$\bigcap_{n=1}^{\infty} E_n = \varnothing,$$
> 那么
> $$\nu(E_n) = F(\chi_{E_n}) \leqslant \|F\| \cdot \|\chi_{E_n}\|_{L^p[0, 1]}$$
> $$= \|F\| \left( \int_0^1 |\chi_{E_n}|^p \text{d}\mu \right)^{\frac{1}{p}}$$
> $$= \|F\| \mu(E_n)^{\frac{1}{p}} \to 0 \quad (\text{当 } n \to \infty).$$
> 此外, 同理可知 $\nu$ 关于 $\mu$ 还是绝对连续的, 即由 $\mu(E) = 0$, 可以推出 $\nu(E) = 0$.
> 现在应用 Radon-Nikodym 定理 (定理 2.2.5), 存在可测函数 $g$, 使得对任意的可测集 $E$ 有
> $$\nu(E) = \int_E g \text{d}\mu.$$
> 从而
> $$F(\chi_E) = \int_0^1 \chi_E(x) g(x) \text{d}\mu.$$
> 于是对于一切简单函数 $f$, 都有
> $$F(f) = \int_0^1 f(x) g(x) \text{d}\mu.$$
> 进一步我们将要证明:
> $$\|g\|_{L^q[0, 1]} \leqslant \|F\|. \tag{2.5.6}$$
> 因为一旦 (2.5.6) 式得证, 我们立即推得 (2.5.4) 式. 事实上, 因为简单函数集在 $L^p[0, 1]$ 中是稠密的, 所以对 $\forall f \in L^p[0, 1]$, 存在简单函数列 $f_n \to f (L^p[0, 1])$. 从而有
> $$F(f) = \lim_{n \to \infty} F(f_n),$$
> 以及
> $$\left| \int_0^1 [f(x) - f_n(x)] g(x) \text{d}\mu \right|$$
> $$\leqslant \left( \int_0^1 |f(x) - f_n(x)|^p \text{d}\mu \right)^{\frac{1}{p}} \left( \int_0^1 |g(x)|^q \text{d}\mu \right)^{\frac{1}{q}}$$
> $$\leqslant \|F\| \cdot \|f - f_n\|_{L^p[0, 1]} \to 0 \quad (n \to \infty),$$
> 亦即
> $$F(f) = \lim_{n \to \infty} \int_0^1 f_n(x) g(x) \text{d}\mu = \int_0^1 f(x) g(x) \text{d}\mu.$$
> 于是 (2.5.4) 式得证.
> 以下分两种情形证明 (2.5.6) 式.
> (1) $1 < p < \infty$. 对 $\forall t > 0$, 记
> $$E_t \triangleq \{x \in [0, 1] \big| |g(x)| \leqslant t\}. \tag{2.5.7}$$
> 令
> $$f = \chi_{E_t} |g|^{q-2} g, \tag{2.5.8}$$
> 便有
> $$\int_{E_t} |g|^q \text{d}\mu = \int_0^1 f \cdot g \text{d}\mu = F(f)$$
> $$\leqslant \|F\| \cdot \|f\|_{L^p[0, 1]} = \|F\| \left( \int_{E_t} |g|^q \text{d}\mu \right)^{\frac{1}{p}},$$
> 亦即
> $$\left( \int_{E_t} |g|^q \text{d}\mu \right)^{\frac{1}{q}} \leqslant \|F\|.$$
> 令 $t \to \infty$, 即得 (2.5.6) 式.
> (2) $p = 1$. 这时 $q = \infty$. 对 $\forall \varepsilon > 0$, 令
> $$A \triangleq \{x \in [0, 1] \big| |g(x)| > \|F\| + \varepsilon\}.$$
> 再对 $\forall t > 0$, 还按 (2.5.7) 式定义 $E_t$, 并令
> $$f = \chi_{E_t \cap A} \cdot \overline{\text{sgn}(g)}. \tag{2.5.9}$$
> $$\begin{aligned} \text{其中} \quad \text{sgn}(g) \triangleq \begin{cases} g(x)/|g(x)|, & \text{当 } g(x) \neq 0, \\ 0, & \text{当 } g(x) = 0. \end{cases} \end{aligned}$$
> 从而 $\|f\|_{L^1[0, 1]} = \mu(E_t \cap A)$, 并且有
> $$\mu(E_t \cap A)(\|F\| + \varepsilon) \leqslant \int_{E_t \cap A} |g| \text{d}\mu = \int_0^1 f \cdot g \text{d}\mu \leqslant \|F\| \cdot \mu(E_t \cap A).$$
> 令 $t \to \infty$, 便得
> $$\mu(A)(\|F\| + \varepsilon) \leqslant \|F\| \cdot \mu(A).$$
> 由此推出 $\mu(A) = 0$, 从而
> $$\|g\|_{L^{\infty}[0, 1]} \leqslant \|F\|.$$
> 这就是当 $q = \infty$ 时的 (2.5.6) 式.

> [!remark] 注
> 结论 (2.5.1) 可以扩充到一般的 $\sigma$-有限的测度空间. 设 $(\Omega, \mathscr{B}, \mu)$ 是一个 $\sigma$-有限测度空间, 那么
> $$L^p(\Omega, \mathscr{B}, \mu)^* = L^q(\Omega, \mathscr{B}, \mu).$$

> [!example] 例 2.5.3 $C[0, 1]$ 的共轭空间
> 设
> $$BV[0, 1] \triangleq \left\{ g: \begin{aligned} &\text{(1) } g: [0, 1] \to \mathbb{C}, g(0) = 0; \\ &\text{(2) } g(t) \text{ 是有界变差函数} \\ &\quad\text{即 } \overset{1}{\underset{0}{\bigvee}}(g) < \infty \end{aligned} \right\}.$$
> 其中 $\overset{1}{\underset{0}{\bigvee}}(g)$ 是 $g$ 在 $[0, 1]$ 上的全变差 (定义见本小节注), 即
> $$\overset{1}{\underset{0}{\bigvee}}(g) = \sup_{\Delta} \sum_{j=0}^{n-1} |g(t_{j+1}) - g(t_j)|,$$
> 这里的上确界是对所有的 $[0, 1]$ 分割
> $$\Delta: 0 = t_0 < t_1 < t_2 < \cdots < t_n = 1$$
> 来取的. 在 $BV[0, 1]$ 上赋以范数
> $$\|g\|_v = \overset{1}{\underset{0}{\bigvee}}(g) \quad (\forall g \in BV[0, 1]),$$
> 那么 $BV[0, 1]$ 是 $B$ 空间 (证明留作习题). 回顾对 $\forall \varphi \in C[0, 1]$, $\forall g \in BV[0, 1]$, Stieltjes 积分 $\int_0^1 \varphi(t) \text{d}g(t)$ 定义为 $\forall \Delta \in \mathscr{D}[0, 1]$ 及 $\forall \xi_i \in [t_i, t_{i+1}]$, 作和
> $$S_\Delta = \sum_{i=0}^{n-1} \varphi(\xi_i)[g(t_{i+1}) - g(t_i)].$$
> 当 $\|\Delta\| \triangleq \max_{0 \leqslant i \leqslant n-1} |t_{i+1} - t_i| \to 0$ 时, 和 $S_\Delta$ 的极限存在, 即得 Stieltjes 积分.
> $$\int_0^1 \varphi(t) \text{d}g(t) = \lim_{\|\Delta\| \to 0} S_\Delta.$$
> 从定义易见
> $$\left| \int_0^1 \varphi(t) \text{d}g(t) \right| \leqslant \int_0^1 |\text{d}g(t)| \cdot \max_{0 \leqslant t \leqslant 1} |\varphi(t)|$$
> $$= \|g\|_v \cdot \|\varphi\|_{C[0, 1]}.$$
> 因此, $\forall g \in BV[0, 1]$,
> $$F_g(\varphi) \triangleq \int_0^1 \varphi(t) \text{d}g(t) \quad (\forall \varphi \in C[0, 1])$$
> 是 $C[0, 1]$ 上的一个连续线性泛函, 即 $F_g \in C[0, 1]^*$, 并且 $\|F_g\| \leqslant \|g\|_v$. 下面证明反向不等式. 对 $\forall g \in BV[0, 1]$, 令
> $$\widetilde{g}(s) = \begin{cases} g(s+0), & 0 \leqslant s < 1, \\ g(1), & s = 1, \end{cases}$$
> 其中 $g(s+0) \triangleq \lim\limits_{t \to s+0} g(t)$. 由此可见 $\widetilde{g}$ 在 $(0, 1)$ 上右连续. 今证若 $\varphi \in C[0, 1]$, $\forall \varepsilon > 0$, 存在 $\delta > 0$, 使得当
> $$0 = t_0 < t_1 < \cdots < t_n = 1, \quad \max_{1 \leqslant i \leqslant n} |t_i - t_{i-1}| < \delta$$
> 时, 有
> $$\left| \int_0^1 \varphi(t) \text{d}\widetilde{g}(t) - \sum_{i=0}^{n-1} \varphi(t_i)(\widetilde{g}(t_{i+1}) - \widetilde{g}(t_i)) \right|$$
> $$= \left| \sum_{i=0}^{n-1} \int_{t_i}^{t_{i+1}} [\varphi(t) - \varphi(t_i)] \text{d}\widetilde{g}(t) \right|$$
> $$\leqslant \varepsilon \cdot \overset{1}{\underset{0}{\bigvee}}(\widetilde{g}) = \varepsilon \cdot \|g\|_v.$$
> 这表明
> $$F_{\widetilde{g}}(\varphi) = \int_0^1 \varphi(t) \text{d}\widetilde{g}(t).$$
> 根据 Stieltjes 积分的定义 (或者直接通过简单函数逼近), 可以取 $\{t_i\}_{i=0}^{n-1}$ 使得
> $$\sum_{i=0}^{n-1} \varphi(t_i)[\widetilde{g}(t_{i+1}) - \widetilde{g}(t_i)]$$
> 任意逼近 $\int_0^1 \varphi \text{d}\widetilde{g}$. 事实上,
> $$\left| \int_0^1 \varphi \text{d}\widetilde{g} - \sum_{i=0}^{n-1} \varphi(t_i)[\widetilde{g}(t_{i+1}) - \widetilde{g}(t_i)] \right|$$
> $$\leqslant \sum_{i=0}^{n-1} \int_{t_i}^{t_{i+1}} |\varphi(t) - \varphi(t_i)| \cdot |\text{d}\widetilde{g}(t)|$$
> $$\leqslant \varepsilon \cdot \overset{1}{\underset{0}{\bigvee}}(\widetilde{g}) = \varepsilon \cdot \|g\|_v. \tag{2.5.10}$$
> 此外, 如果能将 $\varphi \in C[0, 1]$ 延拓到 $\widetilde{\varphi} \in C[0, 1]$ 满足 $\widetilde{\varphi}|_{[0, 1]} = \varphi$ 且 $\|\widetilde{\varphi}\|_{C[0, 1]} = \|\varphi\|_{C[0, 1]}$, 由 Hahn-Banach 定理 (定理 2.4.4), $\exists \widetilde{f} \in C[0, 1]^*$ 使得 $\|\widetilde{f}\| = \|f\|$ 且 $\widetilde{f}|_{[0, 1]} = f$. 于是我们可以先在 $C[0, 1]$ 上建立 (2.5.9) 式.
> $\forall g \in BV[0, 1], \forall f \in C[0, 1]^*$, 我们说: 能找到 $\psi \in L^{\infty}[0, 1]$ 及 $g \in BV[0, 1]$ 使得 $\text{d}g = \psi \text{d}\mu$ 成立 (其中 $\mu$ 是 Lebesgue 测度), 即
> $$\int_0^1 \varphi \text{d}g = \int_0^1 \varphi \psi \text{d}\mu \quad (\forall \varphi \in C[0, 1]). \tag{2.5.11}$$
> 事实上, 由 Lusin 定理 (定理 2.2.12), 存在 $\psi_n \in C[0, 1]$ 使得 $\|\psi_n\|_{L^{\infty}} \leqslant 1$ 且
> $$\psi_n(x) \to \text{sgn}(\psi)(x) \text{ a.e. }$$
> 令 $\psi_0 = \psi$, 那么根据控制收敛定理,
> $$F_g(\varphi) = \int_0^1 \varphi \psi \text{d}\mu = \lim_{n \to \infty} \int_0^1 \varphi \psi_n \text{d}\mu \quad (\forall \varphi \in C[0, 1]).$$
> $\forall f \in C[0, 1]^*$, 由于 $C[0, 1]$ 是 $L^{\infty}[0, 1]$ 的闭子空间, 利用 Hahn-Banach 定理以及前面例 2.5.2 的结果, 我们得到:
> $$\|F_g\|_{C[0, 1]^*} = \sup_{\substack{\varphi \in C[0, 1] \\ \|\varphi\| \leqslant 1}} \left| \int_0^1 \varphi(t) \text{d}g(t) \right|$$
> $$= \sup_{\substack{\varphi \in C[0, 1] \\ \|\varphi\| \leqslant 1}} \left| \int_0^1 \varphi(t) \psi(t) \text{d}t \right| = \|F_g\|_{L^1[0, 1]^*} = \|\psi\|_{L^{\infty}[0, 1]}. \tag{2.5.12}$$
> 现在注意到 $\psi \text{d}\mu = \text{d}g$, 因此 $|\psi| = 1$ a.e. 关于 $|\text{d}g|$ (即 $|\psi(t)| = 1$ 关于测度 $|\text{d}g|$ 几乎处处成立). 于是由 (2.5.12) 式,
> $$\|F_g\| = \|\psi\|_{L^{\infty}} = 1 \cdot \overset{1}{\underset{0}{\bigvee}}(g) = \|g\|_v.$$

> [!theorem] 定理 2.5.4 (Riesz 表示定理)
> $C[0, 1]$ 上每个连续线性泛函 $F$ 都可以唯一地表示为
> $$F(\varphi) = \int_0^1 \varphi \text{d}g, \quad \forall \varphi \in C[0, 1], \tag{2.5.13}$$
> 其中 $g \in BV[0, 1]$ 由 $F$ 唯一确定, 且满足 $\|g\|_v = \|F\|$.

> [!theorem] 定理 2.5.5 (Runge 定理)
> 设 $K$ 是复平面 $\mathbb{C}$ 上的一个紧子集, 又设 $\Lambda \subset \mathbb{C} \setminus K$ 是一个与 $\mathbb{C} \setminus K$ 的每一个分量都相交的集合. 若 $f$ 是 $K$ 的某邻域内的解析函数, 则必有极点只位于 $\Lambda$ 内的有理函数列, 在 $K$ 上一致收敛到 $f$.

> [!proof]-
> 证法的拓扑部分. 记 $\mathscr{B}$ 为极点在 $\Lambda$ 内的有理函数全体组成之集, 在 $C(K)$ 中考察 $R(K) \triangleq \overline{\mathscr{B}}$.
> 由 Hahn-Banach 定理 (定理 2.4.4), 为了证明 $R(K) = C(K)$, 即为了证明 $R(K)^{\perp} = \{\theta\}$, 必须且仅须证: $\forall \mu \in M(K)$ (即 $K$ 上复值有限可加测度构成的空间), 由
> $$\int_K g \text{d}\mu = 0 \quad (\forall g \in \mathscr{B}) \tag{2.5.14}$$
> 可推出 $\int_K f \text{d}\mu = 0$ (即 $f \in R(K)$).
> 为此, 我们需要如下引理:

> [!lemma] 引理 2.5.6
> 对 $\forall \mu \in M(K)$, 若设
> $$\widehat{\mu}(w) = \int_K \frac{\text{d}\mu(z)}{w - z},$$
> 那么对 $\forall R > 0$, $\widehat{\mu} \in L^1(B_R)$ (其中 $B_R$ 是中心在原点的半径为 $R$ 的圆), 且 $\widehat{\mu}$ 在 $\mathbb{C}_{\infty} \setminus K$ 上解析, 还满足 $\widehat{\mu}(\infty) = 0$.

> [!proof]- 引理 2.5.6 的证明
> (1) 证 $\widehat{\mu} \in L^1(B_R)$. 由定义我们有
> $$|\widehat{\mu}(w)| \leqslant \int_K \frac{\text{d}|\mu|(z)}{|w - z|}.$$
> 从而
> $$\int_{B_R} |\widehat{\mu}(w)| \text{d}x \text{d}y \leqslant \int_{B_R} \int_K \frac{\text{d}|\mu|(z)}{|w - z|} \text{d}x \text{d}y$$
> $$= \int_K \int_{B_R} \frac{\text{d}x \text{d}y}{|w - z|} \text{d}|\mu|(z) \quad (\text{用 Fubini 定理})$$
> $$\leqslant \int_K \int_{B(z, \rho)} \frac{\text{d}x \text{d}y}{|w - z|} \text{d}|\mu|(z)$$
> $$\leqslant 2\pi \rho |\mu|(K) < \infty,$$
> 其中 $\rho > R + \max\limits_{z \in K} |z|$.
> (2) $\widehat{\mu}$ 在 $\mathbb{C} \setminus K$ 解析. 这是由于 $K$ 紧, 所以可以在积分号下求微商.
> (3) $\widehat{\mu}$ 在 $\{\infty\}$ 解析, 且 $\widehat{\mu}(\infty) = 0$. 这是因为 $K$ 紧, 当 $|w| \to \infty$ 时, 在积分号下取极限, 便得 $\widehat{\mu}(w) \to 0$, 于是 $\infty$ 是可去奇点. $\blacksquare$

我们暂时承认这个引理. 从而得到

$$\left( \frac{\text{d}}{\text{d}w} \right)^n \widehat{\mu}(w_0) = n! \int_K (z - w_0)^{-n-1} \text{d}\mu(z) \quad (\forall w_0 \in \mathbb{C} \setminus K), \tag{2.5.16}$$

而在 $\infty$ 点附近它有展开

$$\widehat{\mu}(w) = -\frac{1}{w} \sum_{n=0}^{\infty} \int_K \left( \frac{z}{w} \right)^n \text{d}\mu(z) = -\sum_{n=0}^{\infty} \frac{a_n}{w^{n+1}}, \tag{2.5.17}$$

其中 $a_n = \int_K z^n \text{d}\mu(z)$. 进一步, 如果 $\mu \in M(K)$ 使得

$$\int_K g(z) \text{d}\mu(z) = 0, \tag{2.5.18}$$

其中 $g$ 是极点在 $E$ 内的有理函数, 那么我们有

$$\widehat{\mu}(w) = 0 \quad (\forall w \in \mathbb{C}_{\infty} \setminus K). \tag{2.5.19}$$

事实上, $\forall w_0 \in E$, 设 $\Omega(w_0)$ 是 $\mathbb{C}_{\infty} \setminus K$ 中含 $w_0$ 的分量, 由关于 $E$ 的假设, 我们有

$$\mathbb{C}_{\infty} \setminus K = \bigcup_{w_0 \in E} \Omega(w_0). \tag{2.5.20}$$

如果 $w_0 \neq \infty$, 由 (2.5.16) 式与假设 (2.5.18) 式, $\widehat{\mu}$ 在 $w_0$ 的各阶导数均为 0, 从而 $\widehat{\mu}$ 在 $\Omega(w_0)$ 内恒为 0; 如果 $w_0 = \infty$, 则由 (2.5.17) 式与假设 (2.5.18) 式, $\widehat{\mu}$ 在 $\Omega(w_0)$ 内也恒为 0. 于是由 (2.5.20) 式即得 (2.5.19) 式.

现在我们考察在 $K$ 的某邻域 $G$ 内解析的任意函数 $f$, 对它存在含于 $G \setminus K$ 内的折线 $\gamma_1, \gamma_2, \cdots, \gamma_n$ 使得

$$f(z) = \sum_{k=1}^{n} \frac{1}{2\pi \text{i}} \int_{\gamma_k} \frac{f(w)}{w - z} \text{d}w.$$

从而由 Fubini 定理,

$$\int_K f(z) \text{d}\mu(z) = \sum_{k=1}^{n} \frac{1}{2\pi \text{i}} \int_K \int_{\gamma_k} \frac{f(w)}{w - z} \text{d}w \text{d}\mu(z)$$

$$= \sum_{k=1}^{n} \frac{1}{2\pi \text{i}} \int_{\gamma_k} f(w) \widehat{\mu}(w) \text{d}w = 0, \tag{2.5.21}$$

这是因为 $\widehat{\mu}(w) = 0$ 于 $\gamma_k \subset \mathbb{C} \setminus K$ 上. 这样, 我们已从 (2.5.18) 式推出 (2.5.21) 式, 也就是证明了 (2.5.15) 式. $\blacksquare$

### 第二共轭空间与自反性

因为 $B^*$ 空间 $\mathscr{X}$ 的共轭空间 $\mathscr{X}^*$ 是一个 $B$ 空间, 所以我们还可以考虑 $\mathscr{X}^*$ 的共轭空间, 记作 $\mathscr{X}^{**}$, 称为 $\mathscr{X}$ 的第二共轭空间. 注意到 $\forall x \in \mathscr{X}$, 可以定义

$$X(f) = \langle f, x \rangle \quad (\forall f \in \mathscr{X}^*). \tag{2.5.22}$$

不难验证: $X$ 还是 $\mathscr{X}^*$ 上的一个线性泛函, 满足

$$|X(f)| \leqslant \|f\| \cdot \|x\|.$$

从而 $X$ 还是连续的, 满足

$$\|X\| \leqslant \|x\|. \tag{2.5.23}$$

称映射 $T: x \mapsto X$ 为自然映射, (2.5.23) 式表明 $T$ 是 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的连续嵌入. 注意到, 若 $\alpha, \beta \in \mathbb{C}, x, y \in \mathscr{X}$, 记 $X = Tx, Y = Ty$, 则有

$$\begin{aligned} T(\alpha x + \beta y)(f) &= f(\alpha x + \beta y) \\ &= \alpha f(x) + \beta f(y) = \alpha X(f) + \beta Y(f) \\ &= (\alpha X + \beta Y)(f) = (\alpha Tx + \beta Ty)(f) \quad (\forall f \in \mathscr{X}^*). \end{aligned}$$

因此, $T$ 还是一个线性同构. 又应用 Hahn-Banach 定理 (定理 2.4.4), $\exists f \in \mathscr{X}^*$, 使得

$$\|f\| = 1, \quad \text{且} \quad \langle f, x \rangle = \|x\|,$$

便得到

$$\|x\| = X(f) \leqslant \|X\| \cdot \|f\| = \|X\|. \tag{2.5.24}$$

联合 (2.5.23) 式与 (2.5.24) 式便知 $T$ 是等距的. 于是得到下面的定理.

> [!theorem] 定理 2.5.7
> $B^*$ 空间 $\mathscr{X}$ 与它的第二共轭空间 $\mathscr{X}^{**}$ 的一个子空间等距同构.

> [!remark] 注
> 有时, 我们对 $x$ 与 $X$ 不加区别, 简单写成 $\mathscr{X} \subset \mathscr{X}^{**}$.

> [!definition] 定义 2.5.8 (自反空间)
> 如果 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的自然映射 $T$ 是满射的, 则称 $\mathscr{X}$ 是自反的, 记作 $\mathscr{X} = \mathscr{X}^{**}$.

由前面的具体函数空间的共轭空间的例子可见: 当 $1 < p < \infty$ 时, 空间 $L^p(\Omega, \mathscr{B}, \mu)$ 是自反的; 但是当 $p = 1, \infty$ 时, 空间 $L^p(\Omega, \mathscr{B}, \mu)$ 不是自反的.

### 5.2 共轭算子

共轭算子概念是有穷维空间中转置矩阵概念的推广. 一个 $n \times m$ 矩阵 $A = (a_{ij})$ 可以看成由 $\mathbb{K}^m \to \mathbb{K}^n$ 的线性算子:

$$(Ax)_i = \sum_{j=1}^{m} a_{ij} x_j \quad (\forall x = (x_1, x_2, \cdots, x_m) \in \mathbb{K}^m, i = 1, 2, \cdots, n).$$

其转置矩阵定义为 $m \times n$ 矩阵 $A^* = (a_{ji})$, 作为 $\mathbb{K}^n \to \mathbb{K}^m$ 的线性算子:

$$(A^* y)_j = \sum_{i=1}^{n} a_{ij} y_i \quad (\forall y = (y_1, y_2, \cdots, y_n) \in \mathbb{K}^n, j = 1, 2, \cdots, m).$$

怎样把这关系推广到一般的 $B$ 空间? 这要利用对偶关系. 事实上, 我们有关系式

$$\langle y, Ax \rangle_n = \sum_{i=1}^{n} \left( \sum_{j=1}^{m} a_{ij} x_j \right) y_i = \sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij} x_j y_i$$

$$= \sum_{j=1}^{m} \left( \sum_{i=1}^{n} a_{ij} y_i \right) x_j = \langle A^* y, x \rangle_m,$$

这里

$$\langle y, z \rangle_n = \sum_{i=1}^{n} y_i z_i$$

$$(\forall y = (y_1, y_2, \cdots, y_n), z = (z_1, z_2, \cdots, z_n) \in \mathbb{K}^n),$$

$$\langle w, x \rangle_m = \sum_{j=1}^{m} w_j x_j$$

$$(\forall w = (w_1, w_2, \cdots, w_m), x = (x_1, x_2, \cdots, x_m) \in \mathbb{K}^m).$$

这启发我们通过共轭空间来定义共轭算子.

> [!definition] 定义 2.5.9 (共轭算子)
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, 算子 $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$. 算子 $T^*: \mathscr{Y}^* \to \mathscr{X}^*$ 称为是 $T$ 的共轭算子是指:
> $$f(Tx) = (T^* f)(x) \quad (\forall f \in \mathscr{Y}^*, \forall x \in \mathscr{X}).$$

> [!remark] 注
> $\forall T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, $T^*$ 是唯一存在的, 并且属于 $\mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$. 事实上, 对 $\forall f \in \mathscr{Y}^*$, 令
> $$g(x) = f(Tx) \quad (\forall x \in \mathscr{X}),$$
> 它是线性的, 并且有界:
> $$|g(x)| \leqslant \|f\| \cdot \|T\| \cdot \|x\| \quad (\forall x \in \mathscr{X}).$$
> 因此, $g \in \mathscr{X}^*$, 对应 $f \mapsto g$ 又是线性的, 正是 $T^*$. 按定义,
> $$\|T^* f\| = \|g\| \leqslant \|T\| \cdot \|f\| \quad (\forall f \in \mathscr{Y}^*). \tag{2.5.25}$$
> 因此, $T^* \in \mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$. (2.5.25) 式还蕴含
> $$\|T^*\| \leqslant \|T\|. \tag{2.5.26}$$
> 因此, $T^*$ 的唯一性显然. 事实上还有如下定理.

> [!theorem] 定理 2.5.10
> 映射 $*: T \mapsto T^*$ 是 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 到 $\mathscr{L}(\mathscr{Y}^*, \mathscr{X}^*)$ 内的等距同构.

> [!proof]-
> (1) 证对应 $*: T \mapsto T^*$ 是线性的:
> $$[(\alpha_1 T_1 + \alpha_2 T_2)^* f](x) = f[(\alpha_1 T_1 + \alpha_2 T_2)x]$$
> $$= \alpha_1 f(T_1 x) + \alpha_2 f(T_2 x) = [(\alpha_1 T_1^* + \alpha_2 T_2^*)f](x)$$
> $$(\forall x \in \mathscr{X}, \forall f \in \mathscr{Y}^*, \forall \alpha_1, \alpha_2 \in \mathbb{K}).$$
> (2) 再证等距. 已有 (2.5.26) 式, 只要再证 $\|T\| \leqslant \|T^*\|$. 对 $\forall x \in \mathscr{X}$, 若 $Tx \neq \theta$, 由推论 2.4.6, 必有 $f \in \mathscr{Y}^*$, 使得
> $$f(Tx) = \|Tx\|, \quad \text{且} \quad \|f\| = 1.$$
> 从而
> $$\|Tx\| = f(Tx) = (T^* f)(x)$$
> $$\leqslant \|T^* f\| \cdot \|x\| \leqslant \|T^*\| \cdot \|x\|,$$
> 即得 $\|T\| \leqslant \|T^*\|$. $\blacksquare$

同样地, 对 $T^*$ 还可以再考察它的共轭算子 $T^{**} = (T^*)^* \in \mathscr{L}(\mathscr{X}^{**}, \mathscr{Y}^{**})$. 注意到 $\mathscr{X} \subset \mathscr{X}^{**}, \mathscr{Y} \subset \mathscr{Y}^{**}$, 并设它们的自然嵌入映射分别为 $U$ 和 $V$, 那么

$$\langle T^{**} Ux, f \rangle = \langle Ux, T^* f \rangle$$

$$= \langle T^* f, x \rangle = \langle f, Tx \rangle$$

$$= \langle VTx, f \rangle \quad (\forall f \in \mathscr{Y}^*, \forall x \in \mathscr{X}).$$

从而有 $T^{**} Ux = VTx$. 即 $T^{**}$ 是 $T$ 在 $\mathscr{X}^{**}$ 上的扩张. 于是有

> [!theorem] 定理 2.5.11
> 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 那么 $T^{**} \in \mathscr{L}(\mathscr{X}^{**}, \mathscr{Y}^{**})$ 是 $T$ 在 $\mathscr{X}^{**}$ 上的延拓, 并满足 $\|T^{**}\| = \|T\|$.

> [!example] 例 2.5.12
> 设 $(\Omega, \mathscr{B}, \mu)$ 是一个测度空间, 又设 $K(x, y)$ 是 $\Omega \times \Omega$ 上的二元平方可积函数:
> $$\iint_{\Omega \times \Omega} |K(x, y)|^2 \text{d}\mu(x) \text{d}\mu(y) < \infty.$$
> 定义算子
> $$T: u \mapsto (Tu)(x) = \int_\Omega K(x, y) u(y) \text{d}\mu(y) \quad (\forall u \in L^2(\Omega, \mu)),$$
> 便有 $T \in \mathscr{L}(L^2(\Omega, \mu))$, 并且
> $$(T^* v)(x) = \int_\Omega K(y, x) v(y) \text{d}\mu(y) \quad (\forall v \in L^2(\Omega, \mu)).$$
> 其中 $\|\cdot\|$ 表示 $L^2(\Omega, \mu)$ 上的范数, 以及
> $$\langle T^* v, u \rangle = \langle v, Tu \rangle$$
> $$= \int_\Omega \left( \int_\Omega K(x, y) u(y) \text{d}\mu(y) \right) v(x) \text{d}\mu(x)$$
> $$\overset{\text{\textcircled{1}}}{=} \iint_{\Omega \times \Omega} K(x, y) u(y) v(x) \text{d}\mu(x) \text{d}\mu(y)$$
> $$= \int_\Omega \left( \int_\Omega K(x, y) v(x) \text{d}\mu(x) \right) u(y) \text{d}\mu(y)$$
> ($\forall u, v \in L^2(\Omega, \mu)$). 所以
> $$(T^* v)(y) = \int_\Omega K(x, y) v(x) \text{d}\mu(x) \quad (\forall v \in L^2(\Omega, \mu)).$$

> [!remark] 注
> 理由 \textcircled{1} 是因为
> $$\iint_{\Omega \times \Omega} |K(x, y)||u(y)||v(x)|\text{d}\mu(x)\text{d}\mu(y)$$
> $$\leqslant \|u\| \cdot \|v\| \left(\iint_{\Omega \times \Omega} |K(x, y)|^2\text{d}\mu(x)\text{d}\mu(y)\right)^{\frac{1}{2}} < \infty,$$
> 所以可以应用 Fubini 定理.

我们再来考察卷积算子和它的共轭算子.

> [!example] 例 2.5.13
> 设 $K(x)$ 是 $\mathbb{R}$ 上的 $L^1$ 函数, 考察空间 $L^p(\mathbb{R})$ $(1 \leqslant p \leqslant \infty)$ 上的卷积算子
> $$(K * f)(x) \triangleq \int_{-\infty}^{\infty} K(x - y)f(y)\text{d}y,$$
> 并求其共轭. 首先证明 $K*$ 是 $L^p(\mathbb{R})$ 到自身的有界线性算子. 为此我们需要如下引理.

> [!lemma] 引理 2.5.14 (Young 不等式)
> 设 $f \in L^p(\mathbb{R})(1 \leqslant p \leqslant \infty)$, $K \in L^1(\mathbb{R})$, 则
> $$\|K * f\|_p \leqslant \|K\|_1 \cdot \|f\|_p, \tag{2.5.27}$$
> 其中 $\|\cdot\|_p$ 表示 $L^p(\mathbb{R})$ 的范数 $(1 \leqslant p \leqslant \infty)$.

> [!proof]-
> 当 $1 < p < \infty$ 时. 由 Hölder 不等式,
> $$\left|\int_{-\infty}^{\infty} K(x - y)f(y)\text{d}y\right|$$
> $$\leqslant \int_{-\infty}^{\infty} |K(x - y)|^{\frac{1}{q}} \cdot |K(x - y)|^{\frac{1}{p}}|f(y)|\text{d}y$$
> $$\leqslant \left(\int_{-\infty}^{\infty} |K(x - y)|\text{d}y\right)^{\frac{1}{q}} \left(\int_{-\infty}^{\infty} |K(x - y)| \cdot |f(y)|^p\text{d}y\right)^{\frac{1}{p}},$$
> 而
> $$\int_{-\infty}^{\infty} \left|\int_{-\infty}^{\infty} K(x - y)f(y)\text{d}y\right|^p \text{d}x$$
> $$\leqslant \|K\|_1^{\frac{p}{q}} \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} |K(x - y)| \cdot |f(y)|^p \text{d}y\text{d}x$$
> $$= \|K\|_1^{\frac{p}{q}} \cdot \|f\|_p^p \cdot \|K\|_1.$$
> 由 Fubini 定理, $(K * f)(x)$ a.e. 存在有限, 而且 (2.5.27) 式成立.
> 当 $p = 1$ 或 $\infty$ 时, 不等式 (2.5.27) 是显然的. $\blacksquare$

现在我们来求 $K*$ 的共轭算子的表示. 若记 $\check{K}(x) \triangleq K(-x)$, 则由 Fubini 定理, 有

$$\int_{-\infty}^{\infty} \left(\int_{-\infty}^{\infty} K(x - y)f(y)\text{d}y\right)g(x)\text{d}x$$

$$= \int_{-\infty}^{\infty} f(y)\left(\int_{-\infty}^{\infty} K(x - y)g(x)\text{d}x\right)\text{d}y$$

$$= \int_{-\infty}^{\infty} (\check{K} * g)(y)f(y)\text{d}y.$$

由此可见, $T \triangleq K*$ 的共轭算子为 $T^* = \check{K}*$. $\blacksquare$

> [!remark] 注
> 以上考虑的共轭空间和共轭算子都是在实数域上的共轭. 若用复数域, 则每个 $L^q$ 函数 $g$ 对应着 $L^p$ 空间上的一个反连续线性泛函:
> $$F_g(f) = \int_\Omega f \cdot \overline{g}\text{d}\mu.$$
> 这时的复共轭算子为 $T^* = \overline{\check{K}}*$.

### 5.3 弱收敛及 *弱收敛

泛函分析主要研究无穷维空间的算子与泛函. 而有穷维 Banach 空间与无穷维 Banach 空间的根本区别之一是: 在有穷维空间中, 任意有界点列必有收敛子列, 但在无穷维空间中不具备这条性质 (见推论 1.4.30). 为了使有些有穷维空间具备的性质能够过渡到无穷维空间中去, 我们引进弱收敛与 *弱收敛的概念. 本节定理 2.5.28 与定理 2.5.29 给出在弱收敛及 *弱收敛意义下, 上述基本性质在无穷维空间中的推广.

> [!definition] 定义 2.5.15 (弱收敛)
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $\{x_n\} \subset \mathscr{X}$, $x \in \mathscr{X}$. 称 $\{x_n\}$ 弱收敛到 $x$, 记作 $x_n \rightharpoonup x$, 是指: 对于 $\forall f \in \mathscr{X}^*$ 都有
> $$\lim_{n \to \infty} f(x_n) = f(x).$$
> 这时 $x$ 称作点列 $\{x_n\}$ 的弱极限.

> [!remark] 注 1
> 为区别起见, 今后我们称 $x_n \to x$ (按范数收敛) 为 $\{x_n\}$ 强收敛到 $x$, 或 $x$ 是 $\{x_n\}$ 的强极限.

> [!proposition] 命题 2.5.16
> (1) 弱极限若存在必唯一. (2) 强极限若存在必是弱极限.

> [!proof]-
> (1) 若有 $x_n \rightharpoonup x$, $x_n \rightharpoonup y$ ($n \to \infty$), 由定义推得
> $$f(x) = \lim_{n \to \infty} f(x_n) = f(y) \quad (\forall f \in \mathscr{X}^*).$$
> 利用推论 2.4.6, 即得 $x = y$.
> (2) 若 $x_n \to x$ ($n \to \infty$), 则 $\forall f \in \mathscr{X}^*$ 有
> $$|f(x_n) - f(x)| \leqslant \|f\| \cdot \|x_n - x\| \to 0 \quad (n \to \infty),$$
> 即得 $\lim\limits_{n \to \infty} f(x_n) = f(x)$. 故 $x_n \rightharpoonup x$ ($n \to \infty$). $\blacksquare$

但反过来, 当 $\dim \mathscr{X} = \infty$ 时, 弱极限存在却未必有强极限.

> [!example] 例 2.5.17
> 在 $L^2[0, 1]$ 中, 设 $x_n = x_n(t) = \sin n\pi t$, 则根据 Riemann-Lebesgue 引理, 显然有
> $$\langle f, x_n \rangle = \int_0^1 f(t)\sin n\pi t \text{d}t \to 0 \quad (\forall f \in L^2[0, 1]),$$
> 即 $x_n \rightharpoonup \theta$ ($n \to \infty$). 但 $\|x_n\| = 1/\sqrt{2}$, 不可能有 $x_n \to \theta$ ($n \to \infty$).

这表明弱收敛确实与强收敛不同. 然而反过来, 若 $x_n \rightharpoonup x$ ($n \to \infty$), 我们却可以找到 $\{x_n\}$ 的凸组合序列, 使其强收敛到 $x$.

> [!theorem] 定理 2.5.18 (Mazur)
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $x_n \rightharpoonup x_0$ ($n \to \infty$), 则 $\forall \varepsilon > 0$, $\exists \lambda_i \geqslant 0 (i = 1, 2, \cdots, n)$, $\sum\limits_{i=1}^{n} \lambda_i = 1$, 使得
> $$\left\|x_0 - \sum_{i=1}^{n} \lambda_i x_i\right\| \leqslant \varepsilon.$$

> [!proof]-
> 我们要证: $\forall \varepsilon > 0$, $\exists N \in \mathbb{N}$, 以及 $\lambda_1, \cdots, \lambda_N \geqslant 0$, $\sum\limits_{i=1}^{N} \lambda_i = 1$, 使得 $\left\|x_0 - \sum\limits_{i=1}^{N} \lambda_i x_i\right\| < \varepsilon$. 事实上, 记 $M \triangleq \overline{\text{co}\{x_n\}}$ (即 $\{x_n\}$ 生成的闭凸包), 则 $M$ 是 $B^*$ 空间 $\mathscr{X}$ 中的一个闭凸集. 倘若 $x_0 \overline{\in} M$, 应用 Ascoli 定理 (推论 2.4.16), $\exists f \in \mathscr{X}^*$ 及 $\alpha \in \mathbb{R}$ 使得
> $$f(x) < \alpha < f(x_0) \quad (\forall x \in M).$$
> 从而
> $$f(x_n) < \alpha < f(x_0) \quad (\forall n \in \mathbb{N}).$$
> 这与 $x_n \rightharpoonup x_0$ ($n \to \infty$) 矛盾. 所以 $x_0 \in M$, 此即所求. $\blacksquare$

> [!theorem] 定理 2.5.27 (Pettis)
> 自反空间 $\mathscr{X}$ 的闭子空间 $\mathscr{X}_0$ 必是自反空间.

> [!proof]-
> 要证: 若 $z_0 \in \mathscr{X}_0^{**}$, 则必 $z_0 \in \mathscr{X}_0$; 也就是要证: $\exists x \in \mathscr{X}_0$, 使得
> $$\langle z_0, f_0 \rangle = \langle f_0, x \rangle \quad (\forall f_0 \in \mathscr{X}_0^*). \qquad (2.5.28)$$
> 今对 $\forall f \in \mathscr{X}^*$, 考察 $f$ 在 $\mathscr{X}_0$ 上的限制 $Tf = f_0 \in \mathscr{X}_0^*$. 因为
> $$\|f_0\| \leqslant \|f\|,$$
> 所以 $T \in \mathscr{L}(\mathscr{X}^*, \mathscr{X}_0^*)$. 于是 $z \triangleq T^* z_0 \in \mathscr{X}^{**}$, 又 $\mathscr{X}$ 自反, 因此 $\exists x \in \mathscr{X}$, 使得
> $$\langle z, f \rangle = \langle f, x \rangle \quad (\forall f \in \mathscr{X}^*). \qquad (2.5.29)$$
> 今证此 $x \in \mathscr{X}_0$. 倘若不然, 由定理 2.4.7, $\exists f \in \mathscr{X}^*$, 使得
> $$f(\mathscr{X}_0) = 0, \quad \text{且} \quad \langle f, x \rangle = 1,$$
> 从而 $Tf = \theta$. 但这导出矛盾:
> $$0 = \langle z_0, Tf \rangle = \langle T^* z_0, f \rangle = \langle z, f \rangle = \langle f, x \rangle = 1.$$
> 这就证明了 $\exists x \in \mathscr{X}_0$, 使得 (2.5.29) 式成立. 现在要证此 $x$ 还适合 (2.5.28) 式. 事实上, $\forall f_0 \in \mathscr{X}_0^*$, 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $f \in \mathscr{X}^*$, 使得 $f_0 = Tf$. 从而我们有
> $$\langle z_0, f_0 \rangle = \langle z_0, Tf \rangle = \langle z, f \rangle,$$
> 以及
> $$\langle f_0, x \rangle = \langle f, x \rangle \quad (\forall x \in \mathscr{X}_0).$$
> 由此可见, 适合 (2.5.29) 式的 $x$ 必适合 (2.5.28) 式. $\blacksquare$

> [!theorem] 定理 2.5.28 (Eberlein-Smulian)
> 自反空间的单位 (闭) 球是弱 (自) 列紧的.

> [!proof]-
> (1) 我们先证: 自反空间 $\mathscr{X}$ 中的任何有界点列 $\{x_n\}$ 必有一个在 $\mathscr{X}$ 中弱收敛的子列. 令
> $$\mathscr{X}_0 \triangleq \overline{\operatorname{span}\{x_n\}}.$$
> 根据定理 2.5.27, 因为 $\mathscr{X}$ 自反, 所以 $\mathscr{X}_0$ 也是自反的. 又显然 $\mathscr{X}_0$ 是可分的, 这表明 $(\mathscr{X}_0^*)^*$ 是可分的. 再由定理 2.5.26, $\mathscr{X}_0^*$ 也是可分的. 若记 $\{g_n\}$ 为 $\mathscr{X}_0^{**}$ 中的元素, 它适合
> $$\langle g_n, f \rangle = \langle f, x_n \rangle \quad (\forall f \in \mathscr{X}_0^*), \qquad (2.5.30)$$
> 则 $\{\|g_n\|\}$ 有界. 设 $M_0^*$ 是 $\mathscr{X}_0^*$ 中的可数稠密子集, 用对角线法则, 在 $\{g_n\}$ 中可以抽出一子列 $\{g_{n_k}\}$ 及 $\exists g \in \mathscr{X}_0^{**}$, 使得
> $$\lim_{k \to \infty} \langle g_{n_k}, f \rangle = \langle g, f \rangle \quad (\forall f \in M_0^*). \qquad (2.5.31)$$
> 再依定理 2.5.21, (2.5.31) 式蕴含
> $$\lim_{k \to \infty} \langle g_{n_k}, f \rangle = \langle g, f \rangle \quad (\forall f \in \mathscr{X}_0^*). \qquad (2.5.32)$$
> 还由 $\mathscr{X}_0$ 的自反性, $\exists x_0 \in \mathscr{X}_0$ 适合
> $$\langle g, f \rangle = \langle f, x_0 \rangle \quad (\forall f \in \mathscr{X}_0^*). \qquad (2.5.33)$$
> 联合 (2.5.30) 式, (2.5.32) 式与 (2.5.33) 式, 便得到
> $$\begin{aligned} \lim_{k \to \infty} \langle f, x_{n_k} \rangle &= \lim_{k \to \infty} \langle g_{n_k}, f \rangle \\ &= \langle f, x_0 \rangle \quad (\forall f \in \mathscr{X}_0^*). \end{aligned} \qquad (2.5.34)$$
> 进一步对 $\forall \widetilde{f} \in \mathscr{X}^*$, 记 $f \triangleq T\widetilde{f}$ 为 $\widetilde{f}$ 在 $\mathscr{X}_0$ 上的限制. 因为 $\{x_{n_k}\} \subset \mathscr{X}_0$ 及 $x_0 \in \mathscr{X}_0$, 依 (2.5.34) 式便有
> $$\begin{aligned} \lim_{k \to \infty} \langle \widetilde{f}, x_{n_k} \rangle &= \lim_{k \to \infty} \langle f, x_{n_k} \rangle \\ &= \langle f, x_0 \rangle = \langle \widetilde{f}, x_0 \rangle \quad (\forall \widetilde{f} \in \mathscr{X}^*), \end{aligned}$$
> 即得 $x_{n_k} \rightharpoonup x_0$. 于是 $\mathscr{X}$ 中的任意有界集是弱列紧集, 特别是单位球是弱列紧的. 同样, 单位闭球也是弱列紧的.
> (2) 证明单位闭球是弱自列紧的. 设 $x_{n_k} \rightharpoonup x_0$, 并且 $\|x_{n_k}\| \leqslant 1$. 由推论 2.4.6, $\exists f \in \mathscr{X}^*$ 适合
> $$f(x_0) = \|x_0\|, \quad \text{且} \quad \|f\| = 1.$$
> 因此, 我们有
> $$\|x_0\| = f(x_0) = \lim_{k \to \infty} f(x_{n_k}) \leqslant \|f\| \sup_{k \geqslant 1} \|x_{n_k}\| \leqslant 1,$$
> 即 $x_0$ 也在单位闭球内, 从而单位闭球是弱自列紧的. $\blacksquare$

> [!theorem] 定理 2.5.29 (Alaoglu)
> 设 $\mathscr{X}$ 是 $B^*$ 空间, 则 $\mathscr{X}^*$ 中的单位闭球是 $*$ 弱紧的.

$*$ 弱紧的定义及证明请参看下册第五章.

### 应用 $L^p[0, 2\pi](1 < p < \infty)$ 函数的 Fourier 级数的刻画

设 $f \in L^1[0, 2\pi]$, 我们称

$$c_n \triangleq \frac{1}{2\pi} \int_0^{2\pi} f(x) e^{-inx} dx \quad (n = 0, \pm 1, \pm 2, \cdots)$$

为 $f$ 的 Fourier 系数, 并称级数

$$\sum_{n=-\infty}^{\infty} c_n e^{inx} \qquad (2.5.35)$$

按 Young 不等式 (引理 2.5.14), 对 $\forall f \in L^p[0, 2\pi](1 \leqslant p < \infty)$, 有

$$\|\sigma_n(f)\|_{L^p} \leqslant \|f\|_{L^p}.$$

由此可见, 若 $f \in L^p$, 则其 Cesàro 部分和的 $L^p$ 范数是一致有界的. $\blacksquare$

现在我们要证明反过来的结论.

> [!theorem] 定理 2.5.30
> 若 $1 < p \leqslant \infty$, 又若级数 (2.5.35) 的 Cesàro 部分和级数 (2.5.36) 的 $L^p$ 范数是一致有界的, 即
> $$\sup_{n \geqslant 1} \|\sigma_n\|_{L^p} < \infty, \qquad (2.5.37)$$
> 那么必存在 $f \in L^p[0, 2\pi]$, 使得 $\sigma_n$ 是 $f$ 的 Fourier 级数的 Cesàro 部分和.

> [!proof]-
> 注意到 $L^p[0, 2\pi] = L^q[0, 2\pi]^*, \frac{1}{p} + \frac{1}{q} = 1$. 而 $L^q[0, 2\pi]$ 是可分的. 由条件 (2.5.37) 式应用定理 2.5.25, 可见存在 $f \in L^p[0, 2\pi]$ 及子列 $\{n_k\}$, 使得
> $$w^* - \lim_{k \to \infty} \sigma_{n_k}(x) = f(x) \quad (\text{在 } L^p[0, 2\pi] \text{ 中}).$$
> 因为 $e^{imx} \in L^q[0, 2\pi](m = 0, \pm 1, \pm 2, \cdots)$, 所以
> $$\begin{aligned} \frac{1}{2\pi} \int_0^{2\pi} f(x) e^{-imx} dx &= \lim_{k \to \infty} \frac{1}{2\pi} \int_0^{2\pi} \sigma_{n_k}(x) e^{-imx} dx \\ &= \lim_{k \to \infty} \left(1 - \frac{|m|}{n_k+1}\right) c_m = c_m, \end{aligned}$$
> 即得 $\sigma_n(x)$ 是 $f$ 的 Fourier 级数的 Cesàro 部分和 $\sigma_n(f)(x)$. $\blacksquare$

### 5.5 弱收敛的例子

在变分学和微分方程研究中通常需要刻画方程解 (或者逼近解) 的弱收敛行为. 常见的弱收敛而不强收敛的例子有下列三种类型: 振荡 (oscillation)、平移 (translation)、集中 (concentration). 下面我们通过具体例子来介绍这三种现象.

> [!example] 例 2.5.31 (振荡)
> (1) 令 $u_n(x) = \sin n\pi x$, 由 Riemann-Lebesgue 引理, 当 $n \to \infty$, $u_n$ 在 $L^2[0, 1]$ 中弱收敛但不强收敛于 0.
> (2) 锯齿型函数序列:
> $$u_n(x) = \begin{cases} x - \dfrac{k}{n}, & x \in \left[\dfrac{k}{n}, \dfrac{2k+1}{2n}\right], \\ -x + \dfrac{k+1}{n}, & x \in \left[\dfrac{2k+1}{2n}, \dfrac{k+1}{n}\right]. \end{cases}$$
> 容易证明, $\{u_n\}$ 在 $H^{1,2}(0, 1)$ 中弱收敛但不强收敛于 0, 造成这种现象的主要原因是函数列 $\{u_n\}$ 在区间 $(0, 1)$ 中的剧烈振荡. 在变分学中, 它经常作为某个泛函的不收敛的极小化子列出现. 如图 2.5.1 所示.

[图 2.5.1 锯齿形极小化序列 $u_n$]

序列 $\{u_n\}$ 不仅自身有界, 而且其逐段导数也是有界的.

> [!example] 例 2.5.32 (平移)
> 设 $f \in L^p(\mathbb{R}) \setminus \{0\}, 1 < p < \infty$, 令
> $$f_n(x) = f(x+n), \quad x \in \mathbb{R}, n = 1, 2, \cdots,$$
> 则 $f_n \rightharpoonup 0$, 但 $\|f_n\| = \|f\|$, 即 $f_n$ 弱收敛但不强收敛于 0.

> [!proof]-
> 应证对任意 $g \in (L^p(\mathbb{R}))^* = L^q(\mathbb{R}), \frac{1}{p} + \frac{1}{q} = 1$, 有
> $$\int_{\mathbb{R}} f_n(x) g(x) dx = \int_{\mathbb{R}} f(x+n) g(x) dx \to 0, \quad n \to \infty. \qquad (2.5.38)$$
> 因 $C_0^{\infty}(\mathbb{R})$ 在 $L^q(\mathbb{R})$ 中稠密, 由 Banach-Steinhaus 定理 (定理 2.3.17), 只需证 (2.5.38) 式对 $\forall g \in C_0^{\infty}(\mathbb{R})$ 成立即可. 由变量代换,
> $$\int_{\mathbb{R}} f(x+n) g(x) dx = \int_{\mathbb{R}} f(x) g(x-n) dx.$$
> 为证 (2.5.38) 式, 先设 $f \in C_0^{\infty}(\mathbb{R})$. 令 $\varphi_n(x) = f(x) g(x-n)$, 由 $g \in C_0^{\infty}(\mathbb{R})$ 得, 存在常数 $C_g > 0$, 使得
> $$|\varphi_n(x)| \leqslant C_g |f(x)|, \quad x \in \mathbb{R},$$
> 且 $\varphi_n(x) \to 0$, a.e., $n \to \infty$. 应用 Lebesgue 控制收敛定理,
> $$\begin{aligned} \lim_{n \to \infty} \int_{\mathbb{R}} f_n(x) g(x) dx &= \lim_{n \to \infty} \int_{\mathbb{R}} f(x+n) g(x) dx \\ &= \lim_{n \to \infty} \int_{\mathbb{R}} f(x) g(x-n) dx = 0, \end{aligned} \qquad (2.5.39)$$
> 即 (2.5.38) 式成立.
> 对一般 $f$, $\forall \varepsilon > 0$, 取 $f_{\varepsilon} \in C_0^{\infty}(\mathbb{R})$, 使
> $$\|f - f_{\varepsilon}\|_{L^p} < \frac{\varepsilon}{2(\|g\|_{L^q} + 1)},$$
> 则有
> $$\begin{aligned} \left|\int_{\mathbb{R}} f_n(x) g(x) dx\right| &= \left|\int_{\mathbb{R}} f(x) g(x-n) dx\right| \\ &\leqslant \|f - f_{\varepsilon}\|_{L^p} \cdot \|g\|_{L^q} + \left|\int_{\mathbb{R}} f_{\varepsilon}(x) g(x-n) dx\right| \\ &\leqslant \frac{\varepsilon}{2} + \left|\int_{\mathbb{R}} f_{\varepsilon}(x) g(x-n) dx\right|. \end{aligned} \qquad (2.5.40)$$
> 结合 (2.5.39) 式和 (2.5.40) 式, 存在 $N$, 当 $n \geqslant N$ 时,
> $$\left|\int_{\mathbb{R}} f_n(x) g(x) dx\right| < \varepsilon,$$
> 即 (2.5.38) 式成立. $\blacksquare$

> [!example] 例 2.5.33 (集中)
> 考虑由平面上定义的函数空间 $\mathscr{H}$, 它由旋转不变函数 $f(x, y) = u(r)$ 组成, 其中 $(x, y)$ 为平面的直角坐标, $r = \sqrt{x^2 + y^2}$, $u \in L^2_{\frac{4rdr}{(1+r^2)^2}}(\mathbb{R}_+^1)$; 其导函数 $u' \in L^2_{rdr}(\mathbb{R}_+^1)$, 它的范数平方为
> $$\|u\|^2 = \int_0^{\infty} |u(r)|^2 \frac{4rdr}{(1+r^2)^2} + \int_0^{\infty} |u'(r)|^2 r dr.$$
> 给定参数 $\lambda > 0$, 函数 $\phi_{\lambda}(r) = \dfrac{-1 + \lambda^2 r^2}{1 + \lambda^2 r^2}$, $\psi_{\lambda}(r) = \dfrac{2\lambda r}{1 + \lambda^2 r^2}$ 都属于 $\mathscr{H}$. 事实上,
> $$|\phi_{\lambda}(r)|^2 + |\psi_{\lambda}(r)|^2 = 1,$$
> 从而
> $$\int_0^{\infty} (|\phi_{\lambda}(r)|^2 + |\psi_{\lambda}(r)|^2) \frac{4rdr}{(1+r^2)^2} = 2.$$
> 又
> $$\begin{cases} (\phi_{\lambda}')_r = \dfrac{4\lambda^2 r}{(1+\lambda^2 r^2)^2}, \\ (\psi_{\lambda}')_r = \dfrac{2\lambda(1-\lambda^2 r^2)}{(1+\lambda^2 r^2)^2}, \end{cases}$$
> 从而
> $$\int_0^{\infty} (|(\phi_{\lambda}')_r|^2 + |(\psi_{\lambda}')_r|^2) r dr = 2.$$
> 因此, 任意一个趋于无穷的序列 $\lambda_j \to \infty$, $(\phi_{\lambda_j}, \psi_{\lambda_j})$ 必有弱收敛子列, 但 $\phi_{\lambda_j}$ 不强收敛. 因为除了 $r = 0$ 外, 当 $\lambda \to \infty$ 时, $(\phi_{\lambda}, \psi_{\lambda})$ 逐点收敛到常值函数 $(1, 0)$.
> 这个例子在几何上反映了这样一个重要事实: 一族能量有界的调和映射, 能量可以集中到一点.

### 习题

2.5.1 求证: $(l^p)^* = l^q \left(1 \leqslant p < \infty, \dfrac{1}{p} + \dfrac{1}{q} = 1\right)$.

2.5.2 设 $C$ 是收敛数列的全体, 赋以范数

$$\|\cdot\| : \{\xi_k\} \in C \mapsto \sup_{k \geqslant 1} |\xi_k|,$$

求证: $C^* = l^1$.

2.5.3 设 $C_0$ 是以 0 为极限的数列全体, 赋以范数

$$\|\cdot\| : \{\xi_k\} \in C \mapsto \sup_{k \geqslant 1} |\xi_k|,$$

求证: $C_0^* = l^1$.

2.5.4 求证: 有限维 $B^*$ 空间必是自反的.

2.5.5 求证: $B$ 空间是自反的, 当且仅当它的共轭空间是自反的.

2.5.6 设 $\mathscr{X}$ 是 $B^*$ 空间, $T$ 是从 $\mathscr{X}$ 到 $\mathscr{X}^{**}$ 的自然映射, 求证: $R(T)$ 是闭的充要条件是 $\mathscr{X}$ 是完备的.

2.5.7 在 $l^1$ 中定义算子

$$T : (x_1, x_2, \cdots, x_n, \cdots) \mapsto (0, x_1, x_2, \cdots, x_n, \cdots),$$

求证: $T \in \mathscr{L}(l^1)$ 并求 $T^*$.

2.5.8 在 $l^2$ 中定义算子

$$T : (x_1, x_2, \cdots, x_n, \cdots) \mapsto \left(x_1, \frac{x_2}{2}, \cdots, \frac{x_n}{n}, \cdots\right),$$

求证: $T \in \mathscr{L}(l^2)$ 并求 $T^*$.

2.5.9 设 $H$ 是 Hilbert 空间, $A \in \mathscr{L}(H)$ 并满足

$$(Ax, y) = (x, Ay) \quad (\forall x, y \in H),$$

求证: (1) $A^* = A$;

(2) 若 $R(A)$ 在 $H$ 中稠密, 则方程 $Ax = y$ 对 $\forall y \in R(A)$ 存在唯一解.

2.5.10 设 $\mathscr{X}, \mathscr{Y}$ 是 $B^*$ 空间, $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 又设 $A^{-1}$ 存在且 $A^{-1} \in \mathscr{L}(\mathscr{Y}, \mathscr{X})$, 求证:

(1) $(A^*)^{-1}$ 存在, 且 $(A^*)^{-1} \in \mathscr{L}(\mathscr{X}^*, \mathscr{Y}^*)$;

(2) $(A^*)^{-1} = (A^{-1})^*$.

2.5.11 设 $\mathscr{X}, \mathscr{Y}, \mathscr{Z}$ 是 $B^*$ 空间, 而 $B \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 以及 $A \in \mathscr{L}(\mathscr{Y}, \mathscr{Z})$, 求证: $(AB)^* = B^* A^*$.

2.5.12 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $T$ 是 $\mathscr{X}$ 到 $\mathscr{Y}$ 的线性算子, 又设对 $\forall g \in \mathscr{Y}^*$, $g(Tx)$ 是 $\mathscr{X}$ 上的有界线性泛函, 求证: $T$ 是连续的.

2.5.13 设 $\{x_n\} \subset C[a, b], x \in C[a, b]$ 且 $x_n \rightharpoonup x \ (n \to \infty)$, 求证:

$$\lim_{n \to \infty} x_n(t) = x(t) \quad (\forall t \in [a, b]) \quad (\text{点点收敛}).$$

2.5.14 已知在 $B^*$ 空间中 $x_n \rightharpoonup x_0 \ (n \to \infty)$, 求证:

$$\varliminf_{n \to \infty} \|x_n\| \geqslant \|x_0\|.$$

2.5.15 设 $H$ 是 Hilbert 空间, $\{e_n\}$ 是 $H$ 的正交规范基, 求证: 在 $H$ 中 $x_n \rightharpoonup x_0 \ (n \to \infty)$ 的充要条件是

(1) $\|x_n\|$ 有界;

(2) $(x_n, e_k) \to (x_0, e_k) (n \to \infty) (k = 1, 2, \cdots)$.

2.5.16 设 $S_n$ 是 $L^p(\mathbb{R})(1 \leqslant p < \infty)$ 到自身的算子:

$$(S_n u)(x) = \begin{cases} u(x), & |x| \leqslant n, \\ 0, & |x| > n, \end{cases}$$

其中 $u \in L^p(\mathbb{R})$ 是任意的, 求证: $\{S_n\}$ 强收敛于恒同算子 $I$, 但不一致收敛到 $I$.

2.5.17 设 $H$ 是 Hilbert 空间, 在 $H$ 中 $x_n \rightharpoonup x_0 \ (n \to \infty)$, 而且 $y_n \to y_0 \ (n \to \infty)$, 求证: $(x_n, y_n) \to (x_0, y_0) \ (n \to \infty)$.

2.5.18 设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的正交规范集, 求证: 在 $H$ 中 $e_n \rightharpoonup \theta \ (n \to \infty)$, 但 $e_n \not\to \theta \ (n \to \infty)$.

2.5.19 设 $H$ 是 Hilbert 空间, 求证: 在 $H$ 中 $x_n \to x (n \to \infty)$ 的充要条件是

(1) $\|x_n\| \to \|x\| \ (n \to \infty)$;

(2) $x_n \rightharpoonup x \ (n \to \infty)$.

2.5.20 求证: 在自反的 $B$ 空间中, 集合的弱列紧性与有界性是等价的.

2.5.21 求证: $B^*$ 空间中的闭凸集是弱闭的, 即若 $M$ 是闭凸集, $\{x_n\} \subset M$, 且 $x_n \rightharpoonup x_0 \ (n \to \infty)$, 则 $x_0 \in M$.

2.5.22 设 $\mathscr{X}$ 是自反的 $B$ 空间, $M$ 是 $\mathscr{X}$ 中的有界闭凸集, $\forall f \in \mathscr{X}^*$, 求证: $f$ 在 $M$ 上达到最大值和最小值.

2.5.23 设 $\mathscr{X}$ 是自反的 $B$ 空间, $M$ 是 $\mathscr{X}$ 中的非空闭凸集, 求证: $\exists x_0 \in M$, 使得 $\|x_0\| = \inf\{\|x\| | x \in M\}$.

## §6 线性算子的谱
线性代数用较大篇幅研究矩阵的特征值. 在微分方程和积分方程理论中也着重讨论了特征值问题. 这种研究有两方面的重要性:
(1) 直接来自物理学与工程的需要. 例如求振动的频率、判定系统的稳定性等都涉及相应算子的特征值或特征值的分布. 在量子力学里, 能量算符是 $L^2$ 空间上的一个自伴算子, 其特征值对应着该系统束缚态的能级. 特别地, 光谱就是某个算子的特征值的分布.
(2) 通过特征值或者更一般的谱的研究来了解算子本身的结构, 从而用以刻画相应方程的解的构造. 例如, 通过矩阵的特征值, 我们可以刻画这个矩阵的不变子空间, 写出它的标准形, 并且彻底弄清楚相应齐次或非齐次方程解的结构.
### 6.1 定义与例
现在我们在维数 $\geqslant 1$ 的复 Banach 空间 $\mathscr{X}$ 上, 考察闭线性算子 $A : D(A) \subset \mathscr{X} \to \mathscr{X}$. 仿照矩阵, $\lambda \in \mathbb{C}$ 称为是 $A$ 的特征值, 是指 $\exists x_0 \in D(A) \setminus \{\theta\}$, 适合:
$$Ax_0 = \lambda x_0,$$
并称相应的 $x_0$ 为对应于 $\lambda$ 的特征元.
从线性代数知道, 当 $\dim \mathscr{X} < \infty$ 时, $\forall \lambda \in \mathbb{C}$ 只有两种可能性:
(1) $\lambda$ 是特征值;
(2) $(\lambda I - A)^{-1}$ 作为矩阵存在, 即 $(\lambda I - A)^{-1} \in \mathscr{L}(\mathscr{X})$.
> [!definition] 定义 2.6.1 设 $\mathscr{X}$ 是 $B$ 空间, $A : D(A) \subset \mathscr{X} \to \mathscr{X}$ 是闭线性算子, 称集合
> $$\rho(A) \triangleq \{\lambda \in \mathbb{C} | (\lambda I - A)^{-1} \in \mathscr{L}(\mathscr{X})\}$$
> 为 $A$ 的预解集, $\rho(A)$ 中的 $\lambda$ 称为 $A$ 的正则值.
> 由定义 2.6.1, 在 $\dim \mathscr{X} < \infty$ 的情形下, $\forall \lambda \in \mathbb{C}$, 它或是 $A$ 的特征值, 或是正则值, 二者必居其一.
> 但当 $\dim \mathscr{X} = \infty$ 时, 情况就复杂多了. 从逻辑上分, 有如下几种情形:
> (1) $(\lambda I - A)^{-1}$ 不存在. 这相当于 $\lambda$ 是特征值.
> (2) $(\lambda I - A)^{-1}$ 存在, 且值域 $R(\lambda I - A) \triangleq (\lambda I - A)D(A) = \mathscr{X}$. 这相当于 $\lambda$ 是正则值 (Banach 逆算子定理 (定理 2.3.8)).
> (3) $(\lambda I - A)^{-1}$ 存在, $R(\lambda I - A) \neq \mathscr{X}$, 但 $\overline{R(\lambda I - A)} = \mathscr{X}$. 对于这部分 $\lambda$, 我们称其为 $A$ 的连续谱.
> (4) $(\lambda I - A)^{-1}$ 存在, 且 $\overline{R(\lambda I - A)} \neq \mathscr{X}$, 这部分 $\lambda$ 称为 $A$ 的剩余谱.
> 记 $\sigma(A) \triangleq \mathbb{C} \setminus \rho(A)$, 并称 $\sigma(A)$ 为 $A$ 的谱集. $\sigma(A)$ 中的点称为 $A$ 的谱点. 对应于情形 (1) 中的那部分 $\lambda$ 的集合, 记作 $\sigma_p(A)$, 称为 $A$ 的点谱. $A$ 的连续谱记作 $\sigma_c(A)$, $A$ 的剩余谱记作 $\sigma_r(A)$. 因此有:
> $$\sigma(A) = \sigma_p(A) \cup \sigma_c(A) \cup \sigma_r(A).$$
> 以下举例说明, 当 $\dim \mathscr{X} = \infty$ 时, 上述各种类型的谱都可能出现.

> [!example] 例 2.6.2 设 $\mathscr{X} = L^2[0, 1]$, 考虑算子 $A : u(t) \mapsto -\dfrac{d^2}{dt^2} u(t)$. 为了得到闭算子, 我们需要明确其定义域. 对于 $u \in \mathscr{X}$, 有 Fourier
> 级数展开
> $$u(t) = \sum_{n=-\infty}^{\infty} u_n e^{2\pi int},$$
> 其中
> $$u_n = \int_0^1 u(t) e^{-2\pi int} dt  (n \in \mathbb{Z}).$$
> 现在定义
> $$(Au)(t) = \sum_{n=-\infty}^{\infty} (2\pi n)^2 u_n e^{2\pi int},$$
> 容易看出, $u \in C^2[0, 1]$ 时, $(Au)(t) = -\dfrac{d^2}{dt^2} u(t)$. 令
> $$D(A) = \{u \in \mathscr{X} | Au \in \mathscr{X}\},$$
> 则 $A : D(A) \to \mathscr{X}$ 是闭线性算子且
> $$\sigma(A) = \sigma_p(A) = \{(2n\pi)^2 | n = 0, 1, 2, \cdots\}.$$

> [!proof]-
> 一方面, 我们有
> $$-\frac{d^2}{dt^2} \begin{Bmatrix} \sin \\ \cos \end{Bmatrix} 2n\pi t = (2n\pi)^2 \begin{Bmatrix} \sin \\ \cos \end{Bmatrix} 2n\pi t  (n = 0, 1, 2, \cdots),$$
> 所以 $(2n\pi)^2 \in \sigma_p(A)$, $n = 0, 1, 2, \cdots$.
> 另一方面, 当 $\lambda \neq (2n\pi)^2$ 时, $\forall f \in L^2[0, 1]$, 方程
> $$\left(-\frac{d^2}{dt^2} - \lambda\right) u(t) = f(t)$$
> 有唯一解
> $$u(t) = \sum_{n=-\infty}^{\infty} \frac{C_n}{(2n\pi)^2 - \lambda} e^{2\pi int},$$
> 其中
> $$C_n = \int_0^1 f(t) e^{-2\pi int} dt  (n \in \mathbb{Z}).$$
> 不难验证: $u \in D(A)$, 并且
> $$\|u\|^2 = \sum_{n=-\infty}^{\infty} \frac{|C_n|^2}{|(2n\pi)^2 - \lambda|^2} \leqslant M_{\lambda}^2 \sum_{n=-\infty}^{\infty} |C_n|^2 = M_{\lambda}^2 \|f\|^2,$$
> 其中
> $$M_{\lambda} = \sup_{n \in \mathbb{Z}} \frac{1}{|(2n\pi)^2 - \lambda^2|} < \infty.

> [!example] 例 2.6.3 设 $\mathscr{X} = C[0, 1], A : u(t) \mapsto t \cdot u(t)$. 这是一个有界线性算子, 并且
> $$\sigma(A) = \sigma_r(A) = [0, 1].$$

> [!proof]-
> $\forall \lambda \in [0, 1]$, 乘法算子 $(\lambda - t)^{-1}$ 是有界线性算子, 满足
> $$\left\|\frac{1}{\lambda - t} x(t)\right\| \leqslant \sup_{t \in [0, 1]} \frac{1}{|\lambda - t|} \|x\|.$$
> 而 $\forall \lambda \in [0, 1]$, 方程
> $$(\lambda - t) u(t) = 0$$
> 只有 $\theta$ 解: $u(t) \equiv 0 (\forall t \in [0, 1])$, 并且为了 $v \in R(\lambda I - A)$ 必须 $v(\lambda) = 0$, 从而 $1 \notin \overline{R(\lambda I - A)}$. 这就证明了:
> $$[0, 1] \subset \sigma_r(A) \subset \sigma(A) \subset [0, 1],$$
> 即得结论.

> [!example] 例 2.6.4 设 $\mathscr{X} = L^2[0, 1], A : u(t) \mapsto tu(t)$, 则 $A$ 是有界线性算子, 并且
> $$\sigma(A) = \sigma_c(A) = [0, 1].$$

> [!proof]-
> 和例 2.6.3 类似, 仅有的差别在于对 $\overline{R(\lambda I - A)}$ 的刻画. 现在, 因为 $L^2[0, 1]$ 与 $C[0, 1]$ 的拓扑不同, 从而闭包是不同的. 事实上, 一方面仍有 $1 \notin R(\lambda I - A)$, 这是因为 $(\lambda - t)^{-1} \notin L^2[0, 1]$; 另一方面, 注意到 $R(\lambda I - A)$ 中的函数在 $t = \lambda$ 的任一个小邻域外可以是任意的 $L^2[0, 1]$ 函数. 从而 $\overline{R(\lambda I - A)} = L^2[0, 1]$.

### 6.2 Gelfand 定理
现在我们来研究谱集 $\sigma(A)$. 当 $\dim \mathscr{X} < \infty$ 时, 我们知道 $\sigma(A) \neq \varnothing$. 这是因为矩阵的特征值就是特征多项式
$$\det(\lambda I - A) = 0$$
的根, 利用代数基本定理, 特征值总是存在的. 但是这个方法不能直接推广到无穷维空间. 我们只好退一步看, 多项式根的存在性可以用解析函数的 Liouville 定理得证. 现在我们也将设法利用解析性.
> [!definition] 定义 2.6.5 算子值函数 $R_{\lambda}(A) : \rho(A) \to \mathscr{L}(\mathscr{X})$ 定义为
> $$\lambda \mapsto (\lambda I - A)^{-1}  (\forall \lambda \in \rho(A)),$$
> 称为 $A$ 的预解式.
> 我们要想证明:
> (1) $\rho(A)$ 是开集;
> (2) $R_{\lambda}(A)$ 是 $\rho(A)$ 内的算子值解析函数 (定义见习题 2.4.17).
> 为证 (1), 需要下面的引理.

> [!lemma] 引理 2.6.6 设 $T \in \mathscr{L}(\mathscr{X}), \|T\| < 1$, 则 $(I - T)^{-1} \in \mathscr{L}(\mathscr{X})$, 并且
> $$\|(I - T)^{-1}\| \leqslant \frac{1}{1 - \|T\|}. \qquad (2.6.1)$$

> [!corollary] 推论 2.6.7 设 $\lambda_0 \in \rho(A)$, 则当 $|\lambda - \lambda_0| < \dfrac{1}{\|R_{\lambda_0}(A)\|}$ 时, $\lambda \in \rho(A)$, 并且
> $$R_{\lambda}(A) = \sum_{n=0}^{\infty} (\lambda_0 - \lambda)^n R_{\lambda_0}(A)^{n+1}. \qquad (2.6.3)$$

> [!proof]-
> 因为 $R_{\lambda_0}(A) \in \mathscr{L}(\mathscr{X})$, 所以当 $|\lambda - \lambda_0|$ 充分小时, 级数 (2.6.3) 按算子范数收敛. 而
> $$\begin{aligned} R_{\lambda_0}(A)^{-1}[I - (\lambda_0 - \lambda) R_{\lambda_0}(A)] &= [\lambda_0 I - A - (\lambda_0 - \lambda) I] \\ &= \lambda I - A, \end{aligned}$$
> 即
> $$[I - (\lambda_0 - \lambda) R_{\lambda_0}(A)] = R_{\lambda_0}(A)(\lambda I - A). \qquad (2.6.4)$$
> 同理有
> $$[I - (\lambda_0 - \lambda) R_{\lambda_0}(A)] = (\lambda I - A) R_{\lambda_0}(A). \qquad (2.6.5)$$
> 联合 (2.6.4) 式和 (2.6.5) 式, 即得
> $$(\lambda I - A)^{-1} = R_{\lambda_0}(A) \sum_{n=0}^{\infty} (\lambda_0 - \lambda)^n R_{\lambda_0}(A)^n \in \mathscr{L}(\mathscr{X}),$$
> 此即 (2.6.3) 式.

由推论 2.6.7 可知, $\rho(A)$ 是开集, 并且 $R_{\lambda}(A)$ 在 $\rho(A)$ 内局部可以有幂级数展开 (2.6.3). 此外, 由 (2.6.3) 式, 按习题 2.4.17 的记号, 我们有 $R_{\lambda_0}'(A) = -R_{\lambda_0}(A)^2$. 从而容易证明:
> [!proposition] 命题 2.6.8 预解式 $R_{\lambda}(A)$ 在 $\rho(A)$ 内是算子值解析函数.

现在来证明算子谱论的基石——Gelfand 定理.

> [!theorem] 定理 2.6.9 (Gelfand) 设 $\mathscr{X} \neq \{\theta\}$ 是复 Banach 空间, $A \in \mathscr{L}(\mathscr{X})$, 则 $\sigma(A) \neq \varnothing$.

> [!proof]-
> 倘若 $\sigma(A) = \varnothing$, 那么 $\rho(A) = \mathbb{C}$, 从而 $R_{\lambda}(A)$ 在整个复平面上解析. 由于
> $$R_{\lambda}(A) = \frac{1}{\lambda} \left(I - \frac{A}{\lambda}\right)^{-1} = \frac{1}{\lambda} \sum_{n=0}^{\infty} \left(\frac{A}{\lambda}\right)^n  (|\lambda| > \|A\|),$$
> 我们有
> $$\|R_{\lambda}(A)\| \leqslant \frac{1}{|\lambda|} \cdot \frac{1}{1 - \|A\|/|\lambda|} \to 0  (|\lambda| \to \infty). \qquad (2.6.6)$$
> 因此 $\|R_{\lambda}(A)\|$ 在复平面上有界.
> 为了得到矛盾, 对 $\forall f \in \mathscr{L}(\mathscr{X})^*$, 考察 (数值) 解析函数
> $$u_f(\lambda) \triangleq f(R_{\lambda}(A)).$$
> 因其在全平面有界解析函数, 按 Liouville 定理, $u_f(\lambda)$ 是仅依赖于 $f$ 的常值函数. 再由 Hahn-Banach 定理推论 2.4.6, $R_{\lambda}(A)$ 是与 $\lambda$ 无关的常值算子. 依第一预解公式, 这便是
> $$\theta = (\text{对 } \lambda \text{ 求导}) R_{\lambda}(A) = -R_{\lambda}(A)^2,$$
> 但这是不可能的, 因为 $R_{\lambda}(A) \neq \theta$.

下面我们估计谱集的范围.
> [!definition] 定义 2.6.10 设 $A \in \mathscr{L}(\mathscr{X})$, 令
> $$r_{\sigma}(A) \triangleq \sup\{|\lambda| | \lambda \in \sigma(A)\},$$
> 称 $r_{\sigma}(A)$ 为 $A$ 的谱半径.
> 由定义, 显然有 $r_{\sigma}(A) \leqslant \|A\|$. 我们想得到更精确的估计式. 利用等式 (2.6.6) 以及 Cauchy-Hadamard 收敛半径公式可见, 当
> $$|\lambda| > \sup_{\lambda \in \sigma(A)} |\lambda| = r_{\sigma}(A)$$
> 时, $R_{\lambda}(A) \in \mathscr{L}(\mathscr{X})$, 并且级数 (2.6.6) 绝对收敛. 而对于 $|\lambda| < r_{\sigma}(A)$, 一般地有 $\lim_{n \to \infty} \|A^n\|^{1/n} \geqslant r_{\sigma}(A)$. 由此可见 $\|A^n\|^{1/n}$ 是一个很有意义的上界. 在复变函数论中, 我们知道对解析函数来说幂级数展开式
> $$f(\lambda) = \sum_{n=0}^{\infty} a_n \lambda^n$$
> 的收敛半径公式是
> $$R = \frac{1}{\varlimsup_{n \to \infty} |a_n|^{1/n}}.$$
> 对于算子值解析函数可以证明类似的结果, 从而下面的 Gelfand 谱半径定理成立.

> [!theorem] 定理 2.6.11 设 $\mathscr{X}$ 是 $B$ 空间, $A \in \mathscr{L}(\mathscr{X})$, 则有 $r_{\sigma}(A) = \displaystyle\lim_{n \to \infty} \|A^n\|^{1/n}$.
> 为证定理 2.6.11, 先建立如下引理.

> [!lemma] 引理 2.6.12 设 $T \in \mathscr{L}(\mathscr{X}), \lambda_0 \in \rho(T)$, 又设 $p(z)$ 为复多项式, 且 $p(\lambda_0) \neq 0$, 则 $p(\lambda_0)^{-1} \in \rho(p(T))$.

> [!proof]-
> 留作习题.

> [!theorem] 定理 2.6.11 的证明 因为 $\forall \lambda \in \sigma(A)$, 由引理 2.6.12 可得 $\lambda^n \in \sigma(A^n) (n \geqslant 1)$. 因此
> $$|\lambda^n| \leqslant \|A^n\|  (n \geqslant 1),$$
> 从而
> $$r_{\sigma}(A) \leqslant \varliminf_{n \to \infty} \|A^n\|^{1/n}. \qquad (2.6.7)$$
> 另一方面, 当 $|\lambda| > \|A\|$ 时,
> $$R_{\lambda}(A) = \frac{1}{\lambda} \sum_{n=0}^{\infty} \left(\frac{A}{\lambda}\right)^n,$$
> 从而
> $$R_{\lambda}(A) = \sum_{n=0}^{\infty} \lambda^{-(n+1)} A^n. \qquad (2.6.8)$$
> 将 $R_{\lambda}(A)$ 在 $|\lambda| > r_{\sigma}(A)$ 上展开为 Laurent 级数. 对 $\forall f \in \mathscr{L}(\mathscr{X})^*$, 利用 (2.6.8) 式及 Laurent 展开式的唯一性, 可见
> $$f(A^n) = \frac{1}{2\pi i} \oint_{C_r} \lambda^n f(R_{\lambda}(A)) d\lambda, \qquad (2.6.9)$$
> 其中 $C_r$ 为圆周 $|\lambda| = r$, 且 $r > r_{\sigma}(A)$. 因此
> $$|f(A^n)| \leqslant r^{n+1} \|f\| \sup_{|\lambda|=r} \|R_{\lambda}(A)\|.$$
> 令 $M_r \triangleq r \sup_{|\lambda|=r} \|R_{\lambda}(A)\|$, 由共鸣定理, $\exists M_r' > 0$, 使得 $\|A^n\| \leqslant M_r' r^n (n = 0, 1, 2, \cdots)$. 因此
> $$\varlimsup_{n \to \infty} \|A^n\|^{1/n} \leqslant r  (\forall r > r_{\sigma}(A)).$$
> 从而
> $$\varlimsup_{n \to \infty} \|A^n\|^{1/n} \leqslant r_{\sigma}(A). \qquad (2.6.10)$$
> 联合 (2.6.7) 式和 (2.6.10) 式, 得到
> $$\lim_{n \to \infty} \|A^n\|^{1/n} = r_{\sigma}(A).

Gelfand 定理具有广泛的深刻应用.
> [!example] 例 2.6.13 (Volterra 积分方程解的存在性与唯一性) 设 $\lambda \in \mathbb{C}$, 考察方程
> $$x(t) - \lambda \int_0^t e^{t-s} x(s) ds = y(t), \qquad (2.6.11)$$
> 其中 $y(t) \in C[0, 1]$ 是一给定函数. 将方程改写为
> $$(I - \lambda K) x = y, \qquad (2.6.12)$$
> 其中 $K \in \mathscr{L}(C[0, 1])$ 定义为
> $$(Kx)(t) = \int_0^t e^{t-s} x(s) ds.$$
> 因为
> $$(K^n x)(t) = \int_0^t \frac{(t-s)^{n-1}}{(n-1)!} e^{t-s} x(s) ds,$$
> 从而
> $$\|K^n\| \leqslant \frac{e}{(n-1)!}  (n \geqslant 1).$$
> 所以
> $$\lim_{n \to \infty} \|K^n\|^{1/n} = 0,$$
> 即 $r_{\sigma}(K) = 0$. 根据定理 2.6.11, $\sigma(K) = \{0\}$. 因此, $\forall \lambda \in \mathbb{C} \setminus \{0\}$, 方程 (2.6.12) 有唯一解 $x \in C[0, 1]$.
> (2) $K$ 是全连续算子. 因为 $e^{t-s}$ 在 $[0, 1] \times [0, 1]$ 上一致连续, 当 $B \subset C[0, 1]$ 是有界集时, $\{Kx : x \in B\}$ 是等度连续的. 另外 $K$ 把有界集映成有界集, 所以 $K(B)$ 是 $C[0, 1]$ 中的相对紧集.

> [!corollary] 推论 2.6.14 (Gelfand) 设 $A \in \mathscr{L}(\mathscr{X})$, 且 $r_{\sigma}(A) < 1$, 则方程 $(I - A)x = y$ 对 $\forall y \in \mathscr{X}$ 有唯一解, 并且
> $$x = \sum_{n=0}^{\infty} A^n y,$$
> 级数按 $\mathscr{X}$ 的范数收敛.

> [!proof]-
> 因为 $r_{\sigma}(A) < 1$, 所以级数 $\sum_{n=0}^{\infty} A^n$ 按算子范数收敛, 其和为 $(I - A)^{-1}$.

### 6.3 紧算子的谱
(1) 闭值域定理. 设 $\mathscr{X}, \mathscr{Y}$ 是 Banach 空间, 现在要把 $\S 2$ 中的有限维空间上线性变换的值域与核空间的关系推广到一般的 Banach 空间.
对于给定的 $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 记
$$N(A) \triangleq \{x \in \mathscr{X} | Ax = \theta\}$$
为 $A$ 的零空间, $R(A) \triangleq A(\mathscr{X})$ 为 $A$ 的值域. 我们要研究四个空间:
$$N(A),  N(A^*),  R(A),  R(A^*).$$
首先注意 $N(A)$ 和 $N(A^*)$ 分别是 $\mathscr{X}$ 和 $\mathscr{Y}^*$ 中的闭线性子空间.
> [!lemma] 引理 2.6.15 设 $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 则
> $$\overline{R(A)} = N(A^*)^{\perp},  R(A^*)^{\perp} = N(A), \qquad (2.6.13)$$
> 其中 $N(A^*)^{\perp} \triangleq \{y \in \mathscr{Y} | f(y) = 0, \forall f \in N(A^*)\}$, $R(A^*)^{\perp} \triangleq \{x \in \mathscr{X} | g(x) = 0, \forall g \in R(A^*)\}$.

> [!proof]-
> 先证 $\overline{R(A)} = N(A^*)^{\perp}$. 一方面, 设 $y \in R(A)$, 则 $\exists x \in \mathscr{X}$, 使得 $y = Ax$. 于是对 $\forall f \in N(A^*)$, $f(y) = f(Ax) = (A^*f)(x) = 0$, 即 $y \in N(A^*)^{\perp}$, 从而 $R(A) \subset N(A^*)^{\perp}$. 由 $N(A^*)^{\perp}$ 是闭的, 故 $\overline{R(A)} \subset N(A^*)^{\perp}$.
> 另一方面, 设 $y \in \mathscr{Y} \setminus \overline{R(A)}$, 由 Ascoli 定理 (定理 2.4.7), $\exists f \in \mathscr{Y}^*$, 使得 $f(R(A)) = 0$ 且 $f(y) = d \triangleq \operatorname{dist}(y, R(A)) > 0$. 由此推出 $A^*f = \theta$, 即 $f \in N(A^*)$. 但 $f(y) = d \neq 0$, 所以 $y \notin N(A^*)^{\perp}$, 即 $\mathscr{Y} \setminus \overline{R(A)} \subset \mathscr{Y} \setminus N(A^*)^{\perp}$, 从而 $N(A^*)^{\perp} \subset \overline{R(A)}$. 综上即得 $\overline{R(A)} = N(A^*)^{\perp}$.
> 再证 $R(A^*)^{\perp} = N(A)$. 一方面, 若 $x \in N(A)$, 则 $Ax = \theta$, 从而 $\forall f \in \mathscr{Y}^*$, $A^*f(x) = f(Ax) = 0$, 即 $x \in R(A^*)^{\perp}$, 故 $N(A) \subset R(A^*)^{\perp}$.
> 另一方面, 若 $x \in R(A^*)^{\perp}$, 则 $\forall f \in \mathscr{Y}^*$, $A^*f(x) = f(Ax) = 0$, 由 Hahn-Banach 定理的推论 2.4.6, $Ax = \theta$, 即 $x \in N(A)$. 因此 $R(A^*)^{\perp} \subset N(A)$. 综上, $R(A^*)^{\perp} = N(A)$.

> [!corollary] 推论 2.6.16 $R(A)$ 是闭的 $\Longleftrightarrow$ $R(A) = N(A^*)^{\perp}$.

> [!theorem] 定理 2.6.17 若 $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 且 $R(A)$ 是闭的, 则
> $$R(A^*) = N(A)^{\perp} \triangleq \{f \in \mathscr{X}^* | f(x) = 0, \forall x \in N(A)\}.$$

> [!proof]-
> 参见 Kato T. "Perturbation Theory for Linear Operators", 定理 5.13. 
> (2) Fredholm 结论. 我们先引入以下记号. 记
> $$\operatorname{codim} R(A) \triangleq \dim (\mathscr{Y}/R(A))$$
> 为 $R(A)$ 的余维数, 又称 $\operatorname{ind}(A) \triangleq \dim N(A) - \operatorname{codim} R(A)$ 为 $A$ 的指标 (index).
> 设 $A \in \mathscr{L}(\mathscr{X})$, 如果 $R(A)$ 是闭的, 并且 $\dim N(A) < \infty$ 以及 $\operatorname{codim} R(A) < \infty$, 那么称 $A$ 是 Fredholm 算子. 这个定义可以推广到更一般闭线性算子的情形.

> [!theorem] 定理 2.6.18 (Fredholm) 设 $A \in \mathscr{L}(\mathscr{X})$ 是紧算子, 则
> (1) $R(I - A)$ 是闭的;
> (2) $\dim N(I - A) < \infty$;
> (3) $\operatorname{codim} R(I - A) = \dim N(I - A)$;
> (4) $\sigma(A) \setminus \{0\} = \sigma_p(A) \setminus \{0\}$.

> [!definition] 定义 2.6.19 设 $M$ 是由 $\mathscr{X}$ 的有限个线性无关向量张成的线性子空间, 称 $M$ 为 $\mathscr{X}$ 的有限维子空间.
> 由定理 2.6.18, 若 $A$ 是紧算子, 则 $(I - A)$ 是指标为 0 的 Fredholm 算子. 这就是通常所说的 Riesz-Fredholm 理论.

> [!theorem] 定理 2.6.20 设 $K \in \mathscr{L}(\mathscr{X})$ 是紧算子, $T = I - K$, 则
> (1) $T$ 是 Fredholm 算子;
> (2) $\operatorname{ind}(T) = 0$.
> 对于紧算子的谱, 我们有如下更精细的结论.

> [!theorem] 定理 2.6.21 设 $A \in \mathscr{L}(\mathscr{X})$ 是紧算子, 则 $\sigma(A)$ 是可数集, 0 是唯一可能的聚点, 且 $\forall \lambda \in \sigma_p(A) \setminus \{0\}$, 其对应的特征空间是有限维的.

> [!proof]-
> 设 $\lambda_n \in \sigma_p(A) \setminus \{0\} (n = 1, 2, \cdots)$, 且 $\lambda_i \neq \lambda_j (i \neq j)$. 令 $x_n$ 是对应于 $\lambda_n$ 的特征元. 我们要证明: $\{x_1, x_2, \cdots, x_n\}$ 线性无关.
> 用数学归纳法. 设 $\{x_1, \cdots, x_{n-1}\}$ 线性无关. 若 $x_n = \sum_{i=1}^{n-1} \alpha_i x_i$, 则
> $$\lambda_n x_n = Ax_n = \sum_{i=1}^{n-1} \alpha_i \lambda_i x_i,$$
> 从而
> $$\sum_{i=1}^{n-1} \alpha_i (\lambda_n - \lambda_i) x_i = \theta,$$
> 由 $\{x_1, \cdots, x_{n-1}\}$ 线性无关, $\alpha_i(\lambda_n - \lambda_i) = 0$, 即 $\alpha_i = 0$, 所以 $x_n = \theta$, 矛盾. 因此 $\{x_1, x_2, \cdots, x_n\}$ 线性无关.
> 令 $E_n = \operatorname{span}\{x_1, \cdots, x_n\}$, 则 $E_{n-1} \subsetneq E_n$. 由 Riesz 引理, $\exists y_n \in E_n$, $\|y_n\| = 1$, 且 $\operatorname{dist}(y_n, E_{n-1}) \geqslant 1/2$. 设 $y_n = \sum_{i=1}^{n} \beta_i x_i$, 则
> $$Ay_n = \sum_{i=1}^{n} \beta_i \lambda_i x_i = \lambda_n y_n + \sum_{i=1}^{n-1} \beta_i (\lambda_i - \lambda_n) x_i,$$
> 从而当 $m > n$ 时,
> $$\|Ay_m - Ay_n\| = \left\|\lambda_m y_m + \sum_{i=1}^{m-1} \beta_i (\lambda_i - \lambda_m) x_i - Ay_n\right\| \geqslant \frac{|\lambda_m|}{2}.$$
> 因为 $\{Ay_n\}$ 有收敛子列, 所以 $\lambda_m \to 0$.
> 下面证明 $\sigma_p(A) \setminus \{0\}$ 至多是可数集. 对每个 $n \geqslant 1$, 集合
> $$\Lambda_n = \left\{\lambda \in \sigma_p(A) \setminus \{0\} : |\lambda| \geqslant \frac{1}{n}\right\}$$
> 是有限集, 否则有聚点 $\lambda_0 \neq 0$, 而 $\lambda_0 \in \sigma_p(A)$, 对应的特征空间是有限维的, 矛盾. 而
> $$\sigma_p(A) \setminus \{0\} = \bigcup_{n=1}^{\infty} \Lambda_n,$$
> 所以是至多可数集.

> [!remark] 注 定理 2.6.21 说明, 对于紧算子而言, 非零谱点一定是特征值, 且对应的特征空间是有限维的. 这就是紧算子谱论的核心结果.

> [!example] 例 2.6.22 考虑积分算子
> $$(Ku)(x) = \int_0^1 k(x, y) u(y) dy,$$
> 其中 $k(x, y) \in C([0, 1] \times [0, 1])$. 可以证明 $K$ 是 $L^2[0, 1]$ 上的紧算子. 由定理 2.6.21, $\sigma(K) \setminus \{0\}$ 由至多可数个特征值组成, 且每个特征值对应的特征空间是有限维的.

### 6.4 Hilbert 空间上的紧算子
在本节中, 设 $\mathscr{H}$ 是 Hilbert 空间.
> [!theorem] 定理 2.6.23 设 $A \in \mathscr{L}(\mathscr{H})$ 是自伴紧算子, 则
> (1) $\sigma(A) \subset \mathbb{R}$;
> (2) 存在 $\mathscr{H}$ 的一组正交规范基, 它们由 $A$ 的特征向量组成.

> [!proof]-
> (1) 设 $\lambda \in \sigma_p(A)$, $x$ 是对应的特征向量, $\|x\| = 1$. 则
> $$(Ax, x) = (\lambda x, x) = \lambda (x, x) = \lambda.$$
> 另一方面,
> $$(Ax, x) = (x, Ax) = \overline{(Ax, x)} = \overline{\lambda},$$
> 所以 $\lambda = \overline{\lambda}$, 即 $\lambda \in \mathbb{R}$.
> (2) 对每个特征值 $\lambda$, 令 $E_{\lambda} = N(\lambda I - A)$ 为对应的特征空间. 由定理 2.6.21, $\dim E_{\lambda} < \infty$. 对不同的特征值 $\lambda \neq \mu$, $E_{\lambda} \perp E_{\mu}$. 事实上, 若 $x \in E_{\lambda}$, $y \in E_{\mu}$, 则
> $$(Ax, y) = (\lambda x, y) = \lambda (x, y),$$
> 且
> $$(Ax, y) = (x, Ay) = (x, \mu y) = \mu (x, y),$$
> 所以 $(\lambda - \mu)(x, y) = 0$, 即 $(x, y) = 0$.
> 令 $\mathscr{H}_0 = \overline{\operatorname{span}\{E_{\lambda} : \lambda \in \sigma_p(A)\}}$, 我们要证 $\mathscr{H}_0 = \mathscr{H}$. 若不然, 则 $\mathscr{H}_0^{\perp} \neq \{\theta\}$, 且 $A : \mathscr{H}_0^{\perp} \to \mathscr{H}_0^{\perp}$. 将 $A$ 限制在 $\mathscr{H}_0^{\perp}$ 上, 仍得到自伴紧算子. 由定理 2.6.21, 它必有非零特征值, 这与 $\mathscr{H}_0$ 的定义矛盾. 因此 $\mathscr{H}_0 = \mathscr{H}$.
> 取每个 $E_{\lambda}$ 的一组正交基, 它们的并就是 $\mathscr{H}$ 的一组由 $A$ 的特征向量组成的正交规范基.

> [!corollary] 推论 2.6.24 (Hilbert-Schmidt) 设 $A$ 是自伴紧算子, $\{\lambda_n\}$ 是 $A$ 的全部非零特征值 (计重数), $\{e_n\}$ 是对应的正交规范特征向量. 则
> $$Ax = \sum_{n} \lambda_n (x, e_n) e_n  (\forall x \in \mathscr{H}). \qquad (2.6.14)$$

> [!proof]-
> 因为 $\{e_n\} \cup \{e_{\alpha}'\}_{\alpha \in \Lambda}$ 是 $\mathscr{H}$ 的正交规范基, 其中 $\{e_{\alpha}'\}$ 是对应特征值 0 的特征向量, 所以
> $$x = \sum_{n} (x, e_n) e_n + \sum_{\alpha \in \Lambda} (x, e_{\alpha}') e_{\alpha}',$$
> 因此
> $$Ax = \sum_{n} \lambda_n (x, e_n) e_n.

> [!remark] 注 (2.6.14) 式表明, 自伴紧算子可以对角化, 其作用相当于沿各个正交方向 $e_n$ 以因子 $\lambda_n$ 进行伸缩.

> [!example] 例 2.6.25 (Sturm-Liouville 问题) 考虑边值问题
> $$\begin{cases} -u''(x) + q(x)u(x) = \lambda u(x), & x \in (0, 1), \\ u(0) = u(1) = 0, \end{cases}$$
> 其中 $q(x) \geqslant 0$ 且连续. 可以证明: 存在一列特征值 $\lambda_1 \leqslant \lambda_2 \leqslant \cdots$, $\lambda_n \to \infty$, 以及对应的特征函数 $\{\varphi_n\}$ 构成 $L^2[0, 1]$ 的一组正交基.

### 6.5 正常算子的谱
> [!definition] 定义 2.6.26 设 $N \in \mathscr{L}(\mathscr{H})$, 若 $N^*N = NN^*$, 则称 $N$ 为正常算子 (或正规算子).
> 正常算子是自伴算子的推广. 对于自伴算子 $A$, 总有 $A^*A = AA^*$, 但反过来不成立.

> [!theorem] 定理 2.6.27 设 $N$ 是正常算子, 则
> (1) $\|N^*x\| = \|Nx\|  (\forall x \in \mathscr{H})$;
> (2) $\|N^2\| = \|N\|^2$;
> (3) $r_{\sigma}(N) = \|N\|$.

> [!proof]-
> (1) $\|Nx\|^2 = (Nx, Nx) = (N^*Nx, x) = (NN^*x, x) = (N^*x, N^*x) = \|N^*x\|^2$.
> (2) 显然 $\|N^2\| \leqslant \|N\|^2$. 另一方面,
> $$\|Nx\|^2 = (N^*Nx, x) \leqslant \|N^*N\| \cdot \|x\|^2 = \|N^2\| \cdot \|x\|^2,$$
> 所以 $\|N\|^2 \leqslant \|N^2\|$. 因此 $\|N^2\| = \|N\|^2$.
> (3) 由 (2), $\|N^{2^n}\| = \|N\|^{2^n}$, 所以
> $$r_{\sigma}(N) = \lim_{n \to \infty} \|N^n\|^{1/n} = \lim_{n \to \infty} \|N^{2^n}\|^{1/2^n} = \|N\|.

> [!theorem] 定理 2.6.28 (谱分解定理) 设 $N$ 是 Hilbert 空间 $\mathscr{H}$ 上的正常算子, 则存在唯一谱测度 $E$, 使得
> $$N = \int_{\sigma(N)} \lambda dE(\lambda),$$
> 且对任意连续函数 $f \in C(\sigma(N))$,
> $$f(N) = \int_{\sigma(N)} f(\lambda) dE(\lambda).$$

> [!proof]-
> 此定理的证明超出了本课程的范围, 有兴趣的读者可参考泛函分析的相关专著.

> [!remark] 注 谱分解定理是有限维空间上正规矩阵酉对角化定理的推广. 在有限维情形, $N = UDU^*$, 其中 $U$ 是酉矩阵, $D$ 是对角矩阵. 在无穷维情形, 谱测度 $E$ 扮演了类似的角色.

> [!example] 例 2.6.29 设 $\mathscr{H} = L^2(\mathbb{R}, d\mu)$, $(Mu)(x) = \varphi(x)u(x)$, 其中 $\varphi$ 是有界可测函数. 则 $M$ 是正常算子, 且
> $$\sigma(M) = \operatorname{ess\,range}(\varphi) \triangleq \{\lambda \in \mathbb{C} : \mu(\{x : |\varphi(x) - \lambda| < \varepsilon\}) > 0, \forall \varepsilon > 0\}.$$

> [!proof]-
> 显然 $M^*u = \overline{\varphi}u$, 且 $M^*M = MM^* = |\varphi|^2 I$, 所以 $M$ 是正常算子.
> 若 $\lambda \notin \operatorname{ess\,range}(\varphi)$, 则存在 $\varepsilon > 0$, 使得 $\mu(\{x : |\varphi(x) - \lambda| < \varepsilon\}) = 0$. 令 $\psi(x) = \dfrac{1}{\varphi(x) - \lambda}$, 则 $\psi \in L^{\infty}(\mathbb{R}, d\mu)$, 且 $(M - \lambda I)^{-1} = M_{\psi}$, 所以 $\lambda \in \rho(M)$.
> 反过来, 若 $\lambda \in \rho(M)$, 则 $(M - \lambda I)^{-1} \in \mathscr{L}(\mathscr{H})$, 且是乘法算子 $M_{\psi}$, 其中 $\psi = \dfrac{1}{\varphi - \lambda} \in L^{\infty}$. 因此 $\lambda \notin \operatorname{ess\,range}(\varphi)$.

> [!theorem] 定理 2.6.30 设 $N$ 是正常算子, 则 $\sigma_r(N) = \varnothing$.

> [!proof]-
> 设 $\lambda \in \sigma(N) \setminus \sigma_p(N)$, 则 $N - \lambda I$ 是单射. 由于 $N$ 是正常算子, $(N - \lambda I)^*(N - \lambda I) = (N - \lambda I)(N - \lambda I)^*$. 由定理 2.6.27(1), $(N - \lambda I)x = \theta \Longleftrightarrow (N - \lambda I)^*x = \theta$, 所以
> $$\overline{R(N - \lambda I)} = N((N - \lambda I)^*)^{\perp} = N(N - \lambda I)^{\perp} = \mathscr{H},$$
> 即 $\lambda \in \sigma_c(N)$.

### 6.6 谱族与谱分解
在本节中, 我们将更深入地讨论自伴算子的谱理论.
> [!definition] 定义 2.6.31 设 $\mathscr{H}$ 是 Hilbert 空间, $\{E_{\lambda}\}_{\lambda \in \mathbb{R}}$ 是 $\mathscr{H}$ 上一族投影算子, 如果满足:
> (1) 单调性: 当 $\lambda \leqslant \mu$ 时, $E_{\lambda} \leqslant E_{\mu}$ (即 $E_{\lambda}E_{\mu} = E_{\lambda}E_{\mu} = E_{\min(\lambda,\mu)}$);
> (2) 右连续性: $\lim_{\mu \to \lambda+0} E_{\mu}x = E_{\lambda}x  (\forall x \in \mathscr{H})$;
> (3) $E_{-\infty} \triangleq \lim_{\lambda \to -\infty} E_{\lambda} = 0$, $E_{+\infty} \triangleq \lim_{\lambda \to +\infty} E_{\lambda} = I$;
> 则称 $\{E_{\lambda}\}$ 为 $\mathscr{H}$ 上的一个谱族 (spectral family).

> [!theorem] 定理 2.6.32 (自伴算子的谱分解) 设 $A$ 是 $\mathscr{H}$ 上的自伴算子, 则存在唯一的谱族 $\{E_{\lambda}\}$, 使得
> $$A = \int_{-\infty}^{+\infty} \lambda dE_{\lambda}, \qquad (2.6.15)$$
> 其意义是
> $$(Ax, y) = \int_{-\infty}^{+\infty} \lambda d(E_{\lambda}x, y)  (\forall x \in D(A), y \in \mathscr{H}).$$

> [!proof]-
> 参见 "Methods of Modern Mathematical Physics", Vol.1, M. Reed and B. Simon, Academic Press, 1972, Chapter VIII.

> [!remark] 注 1 当 $A$ 是紧自伴算子时, 设 $\{\lambda_n\}$ 是 $A$ 的全部非零特征值, $\{e_n\}$ 是对应的标准正交特征向量, 则
> $$E_{\lambda}x = \sum_{\lambda_n \leqslant \lambda} (x, e_n) e_n,$$
> 此时 (2.6.15) 式就化为 (2.6.14) 式.

> [!remark] 注 2 谱分解定理 (2.6.15) 是有限维自伴矩阵对角化的推广. 设 $A$ 是 $n \times n$ 自伴矩阵, 特征值为 $\lambda_1 \leqslant \lambda_2 \leqslant \cdots \leqslant \lambda_n$, 则
> $$A = \sum_{i=1}^{n} \lambda_i P_i,$$
> 其中 $P_i$ 是到特征值 $\lambda_i$ 的特征空间的投影算子. 在 (2.6.15) 式中, 积分扮演了求和的角色, 谱族 $\{E_{\lambda}\}$ 扮演了投影算子族的角色.

> [!remark] 注 3 利用谱分解定理, 可以定义自伴算子的函数演算. 对任意有界 Borel 可测函数 $f : \mathbb{R} \to \mathbb{C}$, 可以定义
> $$f(A) = \int_{-\infty}^{+\infty} f(\lambda) dE_{\lambda} \in \mathscr{L}(\mathscr{H}).$$
> 特别地, 可以定义自伴算子的指数函数 $e^{itA}$, 这在量子力学中具有重要的物理意义.

> [!example] 例 2.6.33 设 $\mathscr{H} = L^2(\mathbb{R})$, $(Af)(x) = xf(x)$, 定义域 $D(A) = \{f \in L^2(\mathbb{R}) : xf(x) \in L^2(\mathbb{R})\}$. 则 $A$ 是自伴算子, 且
> $$E_{\lambda}f(x) = \begin{cases} f(x), & x \leqslant \lambda, \\ 0, & x > \lambda. \end{cases}$$
> 这时 $\sigma(A) = \sigma_c(A) = \mathbb{R}$, 即 $A$ 只有连续谱, 没有点谱.

## 习题

> [!proof]-
> 只需证 $T^{-1} \in \mathscr{L}(\mathscr{X}) \Longleftrightarrow (T^*)^{-1} \in \mathscr{L}(\mathscr{X}^*)$.
> 必要性. 因为 $(T^*)^{-1} = (T^{-1})^*$ (见习题 2.5.10), 所以结论是显然的.
> 充分性. 设 $(T^*)^{-1} \in \mathscr{L}(\mathscr{X}^*)$, 由必要性的结论推得 $(T^{**})^{-1} \in \mathscr{L}(\mathscr{X}^{**})$. 又因 $T = T^{**}|_{\mathscr{X}}$, 所以 $T$ 是 1--1 的, 并且 $R(T) \subset \mathscr{X}$ 是闭的.
> 再证 $R(T) = \mathscr{X}$. 倘若不然, 存在 $x_0 \in \mathscr{X} \setminus R(T), x_0 \neq \theta$, 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $f \in \mathscr{X}^*$, 使得
> $f(x_0) = \|x_0\|,  f(x) = 0,  x \in R(T),$
> 即
> $0 = f(Ty) = (T^* f)(y),  \forall y \in \mathscr{X}.$
> 由此得 $T^* f = 0$, 即 $f \in N(T^*)$, 从而 $f = \theta$, 矛盾.

> [!proof]-
> 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $g_1, g_2, \cdots, g_n \in \mathscr{X}^*$, 满足
> $g_i(x_j) = \delta_{ij},  1 \leqslant i, j \leqslant n.$
> 令 $\mathscr{X}_1 = \bigcap_{i=1}^n N(g_i)$, 其中 $N(g) = \{x \in \mathscr{X} \mid g(x) = 0\}$, 则 $\mathscr{X}_1$ 是闭线性的, 满足
> (1) $\mathrm{span}\{x_1, x_2, \cdots, x_n\} \cap \mathscr{X}_1 = \{\theta\}$;
> (2) $\forall x \in \mathscr{X}$, 取 $c_i = g_i(x)$, 有 $x - \sum_{i=1}^n c_i x_i \in \mathscr{X}_1$.
> 从而有 $\mathscr{X} = \mathrm{span}\{x_1, x_2, \cdots, x_n\} \oplus \mathscr{X}_1$.

> [!proof]-
> 考察线性连续映射 $V : \mathscr{X} \to \mathbb{K}^m$ 如下:
> $V : x \mapsto (\langle f_1, x \rangle, \langle f_2, x \rangle, \cdots, \langle f_m, x \rangle).$
> 只要证明它是满射就够了. 如其不然, $V(\mathscr{X})$ 是 $\mathbb{K}^m$ 的一个真子空间. 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $\alpha = (\alpha_1, \alpha_2, \cdots, \alpha_m) \in \mathbb{K}^m \setminus \{0\}$, 使得 $\alpha$ 有 $V(\mathscr{X})$ 上为 0, 即
> $(\alpha, V(x))_{\mathbb{K}^m} = 0,  \forall x \in \mathscr{X},$
> 亦即
> $\left\langle \sum_{j=1}^m \alpha_j f_j, x \right\rangle = 0,  \forall x \in \mathscr{X}.$
> 从而 $\sum_{j=1}^m \alpha_j f_j = \theta$, 这与 $\{f_j\}_{j=1}^m$ 是 $N(T^*)$ 的一组基矛盾.

> [!proof]-
> (1) $\overline{R(T)} \subset N(T^*)^\perp$. 对 $x \in \mathscr{X}, f \in N(T^*)$, 有
> $f(Tx) = (T^* f)(x) = 0,$
> 即 $R(T) \subset N(T^*)^\perp$. 因 $N(T^*)^\perp$ 闭, 有 $\overline{R(T)} \subset N(T^*)^\perp$.
> (2) 设 $\overline{R(T)} \subsetneqq N(T^*)^\perp$, 取 $x_0 \in N(T^*)^\perp, x_0 \notin \overline{R(T)}$. 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $f \in \mathscr{X}^*$, 满足
> $f(x_0) = \|x_0\| \neq 0,  f(x) = 0,  \forall x \in \overline{R(T)}.$
> 此时有
> $f(Tx) = 0,  \forall x \in \mathscr{X},$
> 即 $T^* f = 0$. 又有 $x_0 \in N(T^*)^\perp$, 得 $f(x_0) = 0$, 矛盾.

> [!exercise] 3.5.1
> 设 $a_i(x)\in C^1(\Omega)\ (i=1,2,\cdots,n), U(x)\in C(\overline{\Omega})$, 其中 $\Omega$ 是 $\mathbb{R}^n$ 中的边界光滑的有界开区域, 讨论下列边值问题:
> $$\begin{cases} -\Delta u+\sum_{i=1}^{n}\partial_{x_i}(a_i(x)u)+U(x)u=f(x) & (x\in\Omega), \\ u|_{\partial\Omega}=0. \end{cases}$$
> 提示  应用 Lax-Milgram 定理 (定理 2.3.18).

> [!exercise] 3.5.2
> 在上题中, 讨论下列特征值问题:
> $$\begin{cases} -\Delta u+\sum_{i=1}^{n}\partial_{x_i}(a_i(x)u)+U(x)u=\lambda u & (x\in\Omega), \\ u|_{\partial\Omega}=0. \end{cases}$$



---



# 第三章 紧算子与 Fredholm 算子

在无穷维 Banach 空间中有一类特殊的线性算子, 它的性质与有限维空间中的矩阵很相似, 这就是紧算子. 它在积分方程理论和各种数学物理问题的研究中起着核心的作用.

关于线性代数方程的可解性结果可以推广到含紧算子的线性方程中去, 这就是 Riesz-Fredholm 理论. 它自然包括了带连续核的积分方程的 Fredholm 理论. 进一步, 为了解决含奇异核的积分方程问题, 我们引入 Fredholm 算子的概念.

对于紧算子的特征值问题可以讨论得比较透彻, 这个结果通常称为 Riesz-Schauder 理论.

## §1 紧算子的定义和基本性质

> [!definition] 定义 3.1.1
> 设 $\mathscr{X}$, $\mathscr{Y}$ 是 Banach 空间, 设 $A: \mathscr{X} \to \mathscr{Y}$ 线性. 称 $A$ 是**紧算子**, 如果 $\overline{A(B_1)}$ 是 $\mathscr{Y}$ 中的紧集, 其中 $B_1$ 是 $\mathscr{X}$ 中的单位球.

等价地, 若 $A$ 将 $\mathscr{X}$ 中的每个有界集映为 $\mathscr{Y}$ 中的列紧集, 则 $A$ 是紧算子.

> [!remark] 注 1
> 为了 $A$ 是紧算子, 必须且仅须: 对 $\mathscr{X}$ 中的任意有界点列 $\{x_n\}$, $\{Ax_n\}$ 在 $\mathscr{Y}$ 中必有收敛子列.

> [!remark] 注 2
> 紧算子必是有界算子. 事实上, 若 $A$ 是紧算子, 则 $A(B_1)$ 是紧集, 从而是有界集, 即 $\exists M > 0$, 使得 $\|Ax\| \leqslant M$ ($\forall x \in B_1$), 故 $A$ 有界.

记 $\mathfrak{C}(\mathscr{X}, \mathscr{Y}) = \{A \in \mathscr{L}(\mathscr{X}, \mathscr{Y}) \mid A \text{ 是紧算子}\}$, 当 $\mathscr{X} = \mathscr{Y}$ 时, 简记为 $\mathfrak{C}(\mathscr{X})$.

> [!proposition] 命题 3.1.2
> (1) 若 $A, B \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$, $\alpha, \beta \in \mathbb{R}$, 则 $\alpha A + \beta B \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$.
>
> (2) 若 $A_n \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$, $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 且 $\|A_n - A\| \to 0$, 则 $A \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$. 即 $\mathfrak{C}(\mathscr{X}, \mathscr{Y})$ 是 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 的闭子空间.
>
> (3) 若 $A \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$, $T_1 \in \mathscr{L}(\mathscr{W}, \mathscr{X})$, $T_2 \in \mathscr{L}(\mathscr{Y}, \mathscr{Z})$, 则 $T_2AT_1 \in \mathfrak{C}(\mathscr{W}, \mathscr{Z})$.

> [!proof]-
> (1) 设 $\{x_n\}$ 是 $\mathscr{X}$ 中的有界点列, 因 $A$ 紧, 故 $\{Ax_n\}$ 有收敛子列 $\{Ax_{n_k}\}$. 因 $B$ 紧, $\{Bx_{n_k}\}$ 有收敛子列 $\{Bx_{n_{k_l}}\}$. 于是 $\{(\alpha A + \beta B)x_{n_{k_l}}\}$ 收敛, 即 $\alpha A + \beta B$ 是紧算子.
>
> (2) 因为 $\mathscr{Y}$ 完备, 为了证明 $A$ 紧, 只要证 $\overline{A(B_1)}$ 列紧就够了. $\forall \varepsilon > 0$, 取 $n$ 充分大, 使 $\|A_n - A\| < \varepsilon/2$. 因 $A_n$ 紧, $\overline{A_n(B_1)}$ 列紧, 从而有有限 $\varepsilon/2$ 网 $\{y_1, y_2, \cdots, y_m\}$, 即
> $$\overline{A_n(B_1)} \subset \bigcup_{i=1}^{m} B(y_i, \varepsilon/2).$$
> 于是
> $$\overline{A(B_1)} \subset \bigcup_{i=1}^{m} B(y_i, \varepsilon).$$
> 事实上, $\forall y \in \overline{A(B_1)}$, $\exists x \in B_1$, 使 $\|y - Ax\| < \varepsilon/2$. 取 $x_i$ 使得 $\|A_nx_i - y_i\| < \varepsilon/2$ 对某个 $i$ 成立, 则
> $$\|y - y_i\| \leqslant \|y - Ax\| + \|Ax - A_nx\| + \|A_nx - y_i\|$$
> $$< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 这表明 $\{y_1, y_2, \cdots, y_m\}$ 是 $\overline{A(B_1)}$ 的有限 $\varepsilon$ 网, 故 $\overline{A(B_1)}$ 列紧, 即 $A$ 是紧算子.
>
> (3) 设 $\{w_n\}$ 是 $\mathscr{W}$ 中的有界点列, 则 $\{T_1w_n\}$ 是 $\mathscr{X}$ 中的有界点列. 因 $A$ 紧, $\{AT_1w_n\}$ 有收敛子列 $\{AT_1w_{n_k}\}$. 又因 $T_2$ 连续, $\{T_2AT_1w_{n_k}\}$ 收敛, 故 $T_2AT_1$ 是紧算子. $\blacksquare$

> [!remark] 注 1
> $\mathfrak{C}(\mathscr{X}, \mathscr{Y})$ 是 $\mathscr{L}(\mathscr{X}, \mathscr{Y})$ 的一个闭子空间, 因此 $\mathfrak{C}(\mathscr{X}, \mathscr{Y})$ 本身也是一个 Banach 空间.

> [!remark] 注 2
> 若 $\dim \mathscr{Y} < \infty$, 则任意 $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 都是紧算子. 特别地, 有限秩算子 (即值域是有限维的算子) 必是紧算子.

> [!remark] 注 3
> 恒等算子 $I$ 是紧算子当且仅当 $\dim \mathscr{X} < \infty$.

> [!example] 例 3.1.3 (积分算子)
> 设 $K(x, y) \in C([0, 1] \times [0, 1])$, 定义
> $$(Ku)(x) = \int_{0}^{1} K(x, y)u(y) \,\mathrm{d}y \quad (\forall u \in C[0, 1]),$$
> 则 $K \in \mathfrak{C}(C[0, 1])$.

> [!proof]-
> 设 $B$ 是 $C[0, 1]$ 中的有界集, 即 $\exists M > 0$, 使得 $\|u\| \leqslant M$ ($\forall u \in B$). 则
> $$|(Ku)(x)| \leqslant \int_{0}^{1} |K(x, y)||u(y)| \,\mathrm{d}y \leqslant M \max_{x,y}|K(x, y)|,$$
> 且
> $$|(Ku)(x_1) - (Ku)(x_2)| \leqslant M \int_{0}^{1} |K(x_1, y) - K(x_2, y)| \,\mathrm{d}y \to 0$$
> $$(\text{当 } x_1 \to x_2, \text{关于 } u \in B \text{ 一致}).$$
> 由 Arzelà-Ascoli 定理, $\{Ku \mid u \in B\}$ 是列紧集, 故 $K$ 是紧算子. $\blacksquare$

---
## 习题

3.1.1 设 $\mathscr{X}$ 是一个无穷维 $B$ 空间, 求证: 若 $A \in \mathfrak{C}(\mathscr{X})$, 则 $A$ 没有有界逆.
3.1.2 设 $\mathscr{X}$ 是一个 $B$ 空间, $A \in \mathscr{L}(\mathscr{X})$ 满足
^①有关研究可见文献: Enflo Per, "A Counterexample to the Approximation Problem in Banach Spaces," *Acta. Math.* 130, No. 1 (1973): 309--317.
^②有关研究可见文献: Davie A. M., "The Approximation Problem for Banach Spaces," *Bull. London Math. Soc.* 5(1973): 261--266.
$\|Ax\| \geqslant \alpha \|x\|  (\forall x \in \mathscr{X}),$
其中 $\alpha$ 是正常数. 求证: $A \in \mathfrak{C}(\mathscr{X})$ 的充要条件是 $\mathscr{X}$ 是有穷维的.
3.1.3 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y}), K \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$, 如果 $R(A) \subset R(K)$, 求证: $A \in \mathfrak{C}(\mathscr{X}, \mathscr{Y})$.
3.1.4 设 $H$ 是 Hilbert 空间, $A : H \to H$ 是紧算子, 又设 $x_n \rightharpoonup x_0, y_n \rightharpoonup y_0$, 求证:
$(x_n, Ay_n) \to (x_0, Ay_0)  (n \to \infty).$
3.1.5 设 $\mathscr{X}, \mathscr{Y}$ 是 $B$ 空间, $A \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$, 如果 $R(A)$ 闭且 $\dim R(A) = \infty$, 求证: $A \notin \mathfrak{C}(\mathscr{X}, \mathscr{Y})$.
3.1.6 设 $\omega_n \in \mathbb{K}, \omega_n \to 0 (n \to \infty)$, 求证: 映射
$T : \{\xi_n\} \mapsto \{\omega_n \xi_n\}  (\forall \{\xi_n\} \in l^p)$
是 $l^p (p \geqslant 1)$ 上的紧算子.
3.1.7 设 $\Omega \subset \mathbb{R}^n$ 是一个可测集, 又设 $f$ 是 $\Omega$ 上的有界可测函数, 求证: $F : x(t) \mapsto f(t)x(t)$ 是 $L^2(\Omega)$ 上的紧算子, 当且仅当 $f = 0$ (a.e. 于 $\Omega$).
3.1.8 设 $\Omega \subset \mathbb{R}^n$ 是一个可测集, 又设 $K \in L^2(\Omega \times \Omega)$, 求证:
$A : u(x) \mapsto \int_\Omega K(x, y) u(y) dy  (\forall u \in L^2(\Omega))$
是 $L^2(\Omega)$ 上的紧算子.
3.1.9 设 $H$ 是 Hilbert 空间, $A \in \mathfrak{C}(H), \{e_n\}$ 是 $H$ 的正交规范集, 求证: $\lim_{n \to \infty} (Ae_n, e_n) = 0$.
3.1.10 设 $\mathscr{X}$ 是 $B$ 空间, $A \in \mathfrak{C}(\mathscr{X}), \mathscr{X}_0$ 是 $\mathscr{X}$ 的闭子空间并使得 $A(\mathscr{X}_0) \subset \mathscr{X}_0$, 求证: 映射
$T : [x] \mapsto [Ax]$
是商空间 $\mathscr{X}/\mathscr{X}_0$ 上的紧算子.
3.1.11 设 $\mathscr{X}, \mathscr{Y}, \mathscr{Z}$ 是 $B$ 空间, $\mathscr{X} \subset \mathscr{Y} \subset \mathscr{Z}$, 如果 $\mathscr{X} \to \mathscr{Y}$ 的嵌入映射是紧的, $\mathscr{Y} \to \mathscr{Z}$ 的嵌入映射是连续的, 求证: $\forall \varepsilon > 0, \exists c(\varepsilon) > 0$, 使得
$\|x\|_\mathscr{Y} \leqslant \varepsilon \|x\|_\mathscr{X} + c(\varepsilon) \|x\|_\mathscr{Z}  (\forall x \in \mathscr{X}).$
## §2 Riesz-Fredholm 理论
本节研究与紧算子有关的算子方程的可解性问题, 具体地说, 设 $\mathscr{X}$ 是一个 $B$ 空间, $A \in \mathfrak{C}(\mathscr{X})$, 又设 $T = I - A$, 其中 $I$ 表示恒同算子. 我们要问:
$Tx = y \tag{3.2.1}$
对哪些 $y \in \mathscr{X}$ 有解? 解的结构如何?
1. 从 $\mathscr{X} = \mathbb{R}^n$ 入手, 这是线性代数中早就研究过的. 记 $T = (t_{ij})_{n \times n}, x = \{x_j\}_{j=1}^n, y = \{y_i\}_{i=1}^n$. 我们知道: 为了方程 (3.2.1) 有解 $x$, 即
$\sum_{j=1}^n t_{ij} x_j = y_i  (i = 1, 2, \cdots, n),$
必须且仅须
$y = \sum_{j=1}^n x_j T_j,$
其中 $T_j = \{t_{ij}\}_{i=1}^n \in \mathbb{R}^n (j = 1, 2, \cdots, n)$, 亦即 $y$ 可通过 $T_j (j = 1, 2, \cdots, n)$ 线性表出. 而这又等价于, 若 $z \in \mathbb{R}^n$, 则
$z \perp y \Longleftrightarrow z \perp T_j  (j = 1, 2, \cdots, n),$
即
$\langle z, y \rangle = 0 \Longleftrightarrow \sum_{i=1}^n t_{ij} z_i = 0  (j = 1, 2, \cdots, n). \tag{3.2.2}$
**结论 1** 为了 $y \in \mathbb{R}^n$ 使方程 (3.2.1) 有解, 必须且仅须
$\langle z, y \rangle = 0  (\forall z \in \mathbb{R}^n, \text{适合 } T^* z = \theta),$
其中 $T^*$ 表示 $T$ 的转置.
**结论 2** 关于方程 (3.2.1) 只有两种可能情形:
(1) 或者 $\forall y \in \mathbb{R}^n$, 方程 (3.2.1) 总有解, 而且是唯一的;
(2) 或者 $Tx = \theta$ 有非零解, 这时 $Tx = \theta$ 的非零解的极大线性无关组的个数与 $T^* x = \theta$ 的非零解的极大线性无关组的个数相等.
2. Fredholm 研究过下列积分方程: 设 $K \in C([0, 1] \times [0, 1])$, 考察方程
$x(t) = \int_0^1 K(t, s) x(s) ds + y(t), \tag{3.2.3}$
及其共轭方程
$f(t) = \int_0^1 K(s, t) f(s) ds + g(t), \tag{3.2.4}$
其中 $x, y, f, g \in L^2[0, 1]$. 他得到如下结论.
**结论 1** 关于方程 (3.2.3) 只有两种可能情形:
(1) $\forall y \in L^2[0, 1]$, 方程 (3.2.3) 存在唯一解 $x \in L^2[0, 1]$;
(2) 当 $y = \theta$ 时, 方程 (3.2.3) 有非零解.
**结论 2** 方程 (3.2.4) 与方程 (3.2.3) 的情形一样, 即当方程 (3.2.3) 的第一种可能发生时, 方程 (3.2.4) 也发生第一种可能性; 方程 (3.2.3) 发生第二种可能时, 方程 (3.2.4) 也发生第二种可能性, 并且方程 (3.2.3) 与方程 (3.2.4) 对应的齐次方程的**线性无关解**的个数是相同的有穷数.
**结论 3** 在第二种可能性下, 为了方程 (3.2.3) 有解, 必须且仅须
$\int_0^1 f(t) y(t) dt = 0,$
其中 $f$ 是方程 (3.2.4) 的齐次方程的解. 为了方程 (3.2.4) 有解, 必须且仅须
$\int_0^1 g(t) x(t) dt = 0,$
其中 $x$ 是方程 (3.2.3) 的齐次方程的解.
3. 比较代数方程组与积分方程, 它们的结论竟然惊人地相似, 实际上, 它们是更为一般的算子方程的普遍结论的特殊情形. 我们先引进记号.
**记号** $\forall T \in \mathscr{L}(\mathscr{X})$, 记
$R(T) \triangleq T(\mathscr{X}),$
以及
$N(T) \triangleq \{x \in \mathscr{X} \mid Tx = \theta\}.$
又对任意的 $M \subset \mathscr{X}, N \subset \mathscr{X}^*$, 记
$^\perp M \triangleq \{f \in \mathscr{X}^* \mid \langle f, x \rangle = 0, \forall x \in M\},$
$N^\perp \triangleq \{x \in \mathscr{X} \mid \langle f, x \rangle = 0, \forall f \in N\}.$
又若 $f \in \mathscr{X}^*, x \in \mathscr{X}$, 满足 $\langle f, x \rangle = 0$, 便简单地记作
$f \perp x.$
由这些记号, 当 $T = I - A$ 时, 其中
$A : x(t) \mapsto \int_0^1 K(t, s) x(s) ds,$
三个 Fredholm 结论可以用简练的形式表达如下:
**结论 1** $N(T) = \{\theta\} \Longrightarrow R(T) = \mathscr{X}$.
**结论 2** $\sigma(A) = \sigma(A^*)$, 且
$\dim N(T) = \dim N(T^*) < \infty.$
**结论 3** $R(T) = N(T^*)^\perp, R(T^*) = {}^\perp N(T)$.
以下我们对一般的 $T = I - A (A \in \mathfrak{C}(\mathscr{X}))$ 证明上面三个 Fredholm 结论.
> [!theorem] 定理 3.2.1 (Riesz-Fredholm)
> 设 $\mathscr{X}$ 是 $B$ 空间, $A \in \mathfrak{C}(\mathscr{X})$, $T = I - A$, 则
> (1) $\sigma(T) = \sigma(T^*)$;
> (2) $\dim N(T) = \dim N(T^*) < \infty$;
> (3) $R(T) = N(T^*)^\perp = \{x \in \mathscr{X} \mid f(x) = 0, \forall f \in N(T^*)\}$,
>  $R(T^*) = {}^\perp N(T) = \{f \in \mathscr{X}^* \mid f(x) = 0, \forall x \in N(T)\}$.
> 我们分几步来证明这个定理. 结论 (1) 对任意有界算子成立, 正是下面的定理.

> [!theorem] 定理 3.2.2
> 若 $T \in \mathscr{L}(\mathscr{X})$, 则 $\sigma(T) = \sigma(T^*)$.

> [!definition] 定义 3.2.3
> 称 $T \in \mathscr{L}(\mathscr{X})$ 是**闭值域算子**, 是指
> $R(T) = \overline{R(T)}.$

> [!theorem] 定理 3.2.4
> 若 $A \in \mathfrak{C}(\mathscr{X})$, 则 $T = I - A$ 是闭值域算子.

> [!proof]-
> 因为 $N(T)$ 是 $\mathscr{X}$ 的闭子空间, 考察
> $\widetilde{T} : \mathscr{X}/N(T) \to \mathscr{X},  \widetilde{T}[x] \triangleq Tx.$
> 显然 $R(\widetilde{T}) = R(T)$, 并且 $\widetilde{T}$ 还是有界线性的, 满足 $N(\widetilde{T}) = \{[\theta]\}$, 即 $\widetilde{T}$ 的逆算子存在. 为了证明 $R(T)$ 闭, 只需证 $\widetilde{T}^{-1}$ 是连续的. 用反证法, 倘若 $\widetilde{T}^{-1}$ 不连续, 那么 $\exists [w_m] \not\to 0$, 但 $\widetilde{T}[w_m] \to 0$, 从而有子列 $\|[w_{m_n}]\| \geqslant \varepsilon > 0$. 令 $[x_n] = \dfrac{[w_{m_n}]}{\|[w_{m_n}]\|}$, 则
> $\|[x_n]\| = 1  (n = 1, 2, \cdots),  \text{但}  \widetilde{T}[x_n] \to \theta  (n \to \infty).$
> 因此对 $\forall n \in \mathbb{N}, \exists x_n \in [x_n]$, 使得
> $\|x_n\| < 2  (n = 1, 2, \cdots),  (I - A)x_n \to \theta  (n \to \infty).$
> 由 $A$ 是紧的, 有子列 $\{x_{n_k}\}$, 使得 $Ax_{n_k} \to z (k \to \infty)$, 从而
> $x_{n_k} = Ax_{n_k} + (I - A)x_{n_k} \to z  (k \to \infty).$
> 于是有 $Tz = \theta$, 即得 $[z] = [\theta]$. 因此
> $\|[x_{n_k}]\| = \|[x_{n_k} - z]\| \leqslant \|x_{n_k} - z\| \to 0  (k \to \infty).$
> 这与 $\|[x_{n_k}]\| = 1$ 矛盾.

> [!theorem] 定理 3.2.5
> 若 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 且 $N(T) = \{\theta\}$, 则 $R(T) = \mathscr{X}$.

> [!theorem] 定理 3.2.1 的证明
> $\dim N(T) = 0$ 情形.
> 因 $\dim N(T) = 0$, 由定理 3.2.5, $R(T) = \mathscr{X}$, 所以 $T$ 是 1--1 满射. 由 Banach 逆算子定理 (定理 2.3.8), $T^{-1} \in \mathscr{L}(\mathscr{X})$, 即有 $0 \notin \sigma(T)$. 又因 $\sigma(T) = \sigma(T^*)$, 所以 $T^*$ 也是 1--1 满射, 即
> $\dim N(T^*) = 0 = \dim N(T),$
> $R(T^*) = \mathscr{X}^* = {}^\perp N(T),$
> $R(T) = \mathscr{X} = \{0\}^\perp = N(T^*)^\perp.$

下面我们转向 (2) 和 (3) 的证明.
> [!lemma] 引理 3.2.6
> 若 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 则
> $\dim N(T) < \infty,  \dim N(T^*) < \infty.$

> [!proof]-
> 令 $\mathscr{X}_0 = N(T), B_1 = \{x \in \mathscr{X}_0 \mid \|x\| \leqslant 1\}$, 这时
> $B_1 = \overline{A(B_1)}.$
> 因 $A$ 是紧算子, $B_1$ 是紧集, 从而
> $\dim \mathscr{X}_0 = \dim N(T) < \infty.$
> 因 $T^* = I - A^*$, 同样证明: $\dim N(T^*) < \infty$.

设 $x_1, x_2, \cdots, x_n \in N(T)$ 为 $N(T)$ 的一组基, $f_1, f_2, \cdots, f_m \in N(T^*)$ 为 $N(T^*)$ 的一组基, 需要证 $n = m$.
> [!lemma] 引理 3.2.7
> 存在闭线性 $\mathscr{X}_1 \subset \mathscr{X}$, 使得
> $\mathscr{X} = \mathrm{span}\{x_1, x_2, \cdots, x_n\} \oplus \mathscr{X}_1.$

> [!lemma] 引理 3.2.8
> 存在 $y_1, y_2, \cdots, y_m \in \mathscr{X}$, 使得
> $f_i(y_j) = \delta_{ij},  1 \leqslant i, j \leqslant m.$

$\dim N(T) = \dim N(T^*)$ 的证明: 需证 $n = m$. 设 $n < m$, 考虑
$\begin{aligned}$
$\widehat{T} : \mathscr{X} &= \mathrm{span}\{x_1, x_2, \cdots, x_n\} \oplus \mathscr{X}_1 \\$
$&\to \mathrm{span}\{y_1, y_2, \cdots, y_n\} \oplus R(T) \hookrightarrow \mathscr{X},$
$\end{aligned}$
$\widehat{T}\left(\sum_{i=1}^n c_i x_i + y\right) = \sum_{i=1}^n c_i y_i + Ty.$
从而根据前面结论, $\widehat{T}$ 是满射. 但显然有 $y_m \notin R(\widehat{T})$, 矛盾, 所以
$\dim N(T^*) \leqslant \dim N(T).$
同样,
$\dim N(T^{**}) \leqslant \dim N(T^*).$
因
$\dim N(T) \leqslant \dim N(T^{**}),$
所以有
$\dim N(T) = \dim N(T^*).$
> [!lemma] 引理 3.2.9
> 若 $T \in \mathscr{L}(\mathscr{X})$, 则 $\overline{R(T)} = N(T^*)^\perp$.

根据定理 3.2.4 和引理 3.2.9, 有
$\begin{aligned}$
$R(T) &= \overline{R(T)} = N(T^*)^\perp \\$
$&= \{x \in \mathscr{X} \mid f(x) = 0, \forall f \in N(T^*)\}.$
$\end{aligned}$
$R(T^*) = {}^\perp N(T)$ 的证明: 从前面 $\dim N(T) = \dim N(T^*)$ 知,
$\dim N(T^{**}) = \dim N(T^*) = \dim N(T).$
因 $N(T) \subset N(T^{**})$, 有 $N(T^{**}) = N(T)$, 则
$R(T^*) = \overline{R(T^*)} = N(T^{**})^\perp = {}^\perp N(T).$
从 Riesz-Fredholm 定理 (定理 3.2.1) 的证明中我们还可以得到下面的定理.
> [!theorem] 定理 3.2.10
> 设 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 则存在闭线性子空间 $\mathscr{X}_1$, 有限维子空间 $\mathscr{Y}_1, \dim \mathscr{Y}_1 = \dim N(T)$, 使得
> $\mathscr{X} = N(T) \oplus \mathscr{X}_1 = \mathscr{Y}_1 \oplus R(T).$

> [!definition] 定义 3.2.11
> 设 $M \subset \mathscr{X}$ 是一个闭线性子空间, $\mathrm{codim} M \triangleq \dim(\mathscr{X}/M)$ 称为 $M$ 的**余维数**.
> 由 Riesz-Fredholm 定理 (定理 3.2.1), 有

> [!theorem] 定理 3.2.12
> 设 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 则
> $\dim N(T) = \mathrm{codim}(R(T)) < \infty.$

## 习题
3.2.1 设 $\mathscr{X}$ 是 $B$ 空间, $M \subset \mathscr{X}$ 是一个闭线性子空间, $\mathrm{codim} M = n$, 求证: 存在线性无关集 $\{\varphi_k\}_{k=1}^\infty \subset \mathscr{X}^*$, 使得
$M = \bigcap_{k=1}^n N(\varphi_k).$
3.2.2 设 $\mathscr{X}, \mathscr{Y}$ 是两个 $B$ 空间, $T \in \mathscr{L}(\mathscr{X}, \mathscr{Y})$ 是满射的. 定义 $\widetilde{T} : \mathscr{X}/N(T) \to \mathscr{Y}$ 如下:
$\widetilde{T}[x] = Tx  (\forall x \in [x]) (\forall [x] \in \mathscr{X}/N(T)).$
求证: $\widetilde{T}$ 是线性同胚映射.
3.2.3 设 $\mathscr{X}$ 是 $B$ 空间, $M, N_1, N_2$ 都是 $\mathscr{X}$ 的闭线性子空间, 如果
$M \oplus N_1 = \mathscr{X} = M \oplus N_2,$
求证: $N_1$ 和 $N_2$ 同胚.
**提示** 只要证明 $N_1, N_2$ 都与 $\mathscr{X}/M$ 同胚.
3.2.4 设 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 求证:
(1) $\forall [x] \in \mathscr{X}/N(T), \exists x_0 \in [x]$, 使得 $\|x_0\| = \|[x]\|$;
(2) 若 $y \in \mathscr{X}$, 使方程 $Tx = y$ 有解, 则其中必有一个解达到范数最小.
3.2.5 设 $A \in \mathfrak{C}(\mathscr{X})$, 且 $T = I - A, \forall k \in \mathbb{N}$, 求证:
(1) $N(T^k)$ 是有穷维的;
(2) $R(T^k)$ 是闭的.
3.2.6 设 $M$ 是 $B$ 空间 $\mathscr{X}$ 的闭线性子空间, 称满足 $P^2 = P$ (**幂等性**) 的由 $\mathscr{X}$ 到 $M$ 上的一个有界线性算子 $P$ 为由 $\mathscr{X}$ 到 $M$ 上的**投影算子**. 求证:
(1) 若 $M$ 是 $\mathscr{X}$ 的有穷维线性子空间, 则必存在由 $\mathscr{X}$ 到 $M$ 上的投影算子;
(2) 若 $P$ 是由 $\mathscr{X}$ 到 $M$ 上的投影算子, 则 $I - P$ 是由 $\mathscr{X}$ 到 $R(I - P)$ 上的投影算子;
(3) 若 $P$ 是由 $\mathscr{X}$ 到 $M$ 上的投影算子, 则 $\mathscr{X} = M \oplus N$, 其中 $N = R(I - P)$;
(4) 若 $A \in \mathfrak{C}(\mathscr{X})$, 且 $T = I - A$, 则在代数与拓扑同构意义下,
$N(T) \oplus \mathscr{X}/N(T) = \mathscr{X} = R(T) \oplus \mathscr{X}/R(T).$
## §3 紧算子的谱理论
(Riesz-Schauder 理论)
这一节研究三个问题:
(1) 紧算子的谱的分布;
(2) 不变子空间;
(3) 紧算子的构造.
对应到矩阵, 每个问题都有清楚的答案:
(1) 矩阵有特征值, 其个数不大于空间的维数;
(2) 存在真不变子空间;
(3) 利用一列不变子空间, 可将矩阵化为 Jordan 标准形.
回顾第二章 \S 6, 这些问题是算子谱论的中心问题. 正如该节各例所示, 一般有界线性算子的谱集很复杂, 这些问题的答案通常是不完全的或不甚清楚的. 然而对于紧算子, 在本节中, 我们将进行详尽的讨论, 并得到满意的结果.
### 3.1 紧算子的谱
本小节考察问题 (1), 我们有如下定理.
> [!theorem] 定理 3.3.1
> 若 $A \in \mathfrak{C}(\mathscr{X})$, 则
> (1) $0 \in \sigma(A)$, 除非 $\dim \mathscr{X} < \infty$;
> (2) $\sigma(A) \setminus \{0\} = \sigma_p(A) \setminus \{0\}$;
> (3) $\sigma_p(A)$ 至多以 $0$ 为聚点.

### 3.2 不变子空间
本小节考察问题 (2).
> [!definition] 定义 3.3.2
> 设 $\mathscr{X}$ 是一个 $B$ 空间, $M \subset \mathscr{X}$ 称为算子 $A \in \mathscr{L}(\mathscr{X})$ 的**不变子空间**, 是指 $A(M) \subset M$.
> 由定义 3.3.2 可得如下命题.

> [!proposition] 命题 3.3.3
> 设 $\mathscr{X}$ 是一个 $B$ 空间, $A \in \mathscr{L}(\mathscr{X})$, 那么
> (1) $\{\theta\}, \mathscr{X}$ 都是 $A$ 的不变子空间;
> (2) 若 $M$ 是 $A$ 的不变子空间, 则 $\overline{M}$ 也是 $A$ 的不变子空间;
> (3) 若 $\lambda \in \sigma_p(A)$, 即 $\lambda$ 是 $A$ 的特征值, 则 $N(\lambda I - A)$ 是 $A$ 的不变子空间;
> (4) $\forall y \in \mathscr{X}$, 若记 $L_y \triangleq \{P(A)y \mid P \text{ 是任意多项式}\}$, 则 $L_y$ 是 $A$ 的不变子空间.
> 当 $\dim \mathscr{X} = \infty$ 时, $\forall A \in \mathscr{L}(\mathscr{X})$, 是否一定存在着 $A$ 的一个非平凡的闭不变子空间 (所谓平凡是指: $M = \{\theta\}$ 或 $\mathscr{X}$)? 这是一个长期未解决的根本性问题, 直至 1984 年才由 Read 举出反例. 他表明存在一个无穷维的 Banach 空间 $\mathscr{X}$ 及一个线性算子 $A \in \mathscr{L}(\mathscr{X})$, 使 $A$ 没有非平凡的不变子空间.^① 现在的问题是: 若 $\mathscr{X}$ 是 Hilbert 空间, $\dim \mathscr{X} = \infty$, 对 $\forall A \in \mathscr{L}(\mathscr{X})$, 是否存在着 $A$ 的非平凡的闭不变子空间? 然而对于紧算子, 有下面的定理.
> ^①有关研究可见文献: Read C. J., "A Solution to the Invariant Subspace Problem," *Bull. London Math. Soc.* 16 (1984): 337--401.

> [!theorem] 定理 3.3.4
> 若 $\dim \mathscr{X} \geqslant 2$, 则 $\forall A \in \mathfrak{C}(\mathscr{X})$, $A$ 必有非平凡的闭不变子空间.

> [!proof]-
> 我们不妨设 $\dim \mathscr{X} = \infty, A \neq 0$, 并且 $\sigma_p(A) \setminus \{0\} = \varnothing$. 于是由定理 3.3.1, 有 $\sigma(A) = \{0\}$. 倘若 $A$ 没有非平凡的闭不变子空间, 则 $\forall y \in \mathscr{X} \setminus \{\theta\}$, 命题 3.3.3 中定义的 $L_y$ 蕴含
> $\overline{L}_y = \mathscr{X}.$
> 不妨设 $\|A\| = 1$, 那么 $\exists x_0 \in \mathscr{X}$, 使得 $\|Ax_0\| > 1$. 于是 $\|x_0\| > 1$, 取 $C \triangleq \overline{AB(x_0, 1)}$, 便有 $C$ 是紧集, 并且
> $\theta \notin C.$
> 如今, $\forall y_0 \in C$, 存在多项式 $T_{y_0} = P(A)$, 使得
> $\|T_{y_0} y_0 - x_0\| < 1,$
> 从而有 $\delta_{y_0} > 0$, 使得
> $\|T_{y_0} y - x_0\| < 1  (\forall y \in B(y_0, \delta_{y_0})).$
> 由于 $C$ 是紧的, 存在有穷覆盖
> $\bigcup_{i=1}^n B(y_i, \delta_i) \supset C,$
> 其中 $\delta_i \triangleq \delta_{y_i} (i = 1, 2, \cdots, n)$. 从而 $\forall y \in C, \exists i_1 (1 \leqslant i_1 \leqslant n)$, 使得
> $\|T_{i_1} y - x_0\| < 1. \tag{3.3.1}$
> 这里及以下我们都记 $T_i \triangleq T_{y_i} (i = 1, 2, \cdots, n)$.
> 但因 (3.3.1) 式蕴含 $T_{i_1} y \in B(x_0, 1)$, 所以 $AT_{i_1} y \in C$, 又 $\exists i_2 (1 \leqslant i_2 \leqslant n)$, 使得
> $\|T_{i_2} AT_{i_1} y - x_0\| < 1.$
> 注意到 $T_{i_1}$ 是与 $A$ 可交换的多项式, 便得
> $\|T_{i_2} T_{i_1} Ay - x_0\| < 1.$
> 如此继续下去, $\exists i_1, \cdots, i_k, \cdots$, 使得
> $\left\|\prod_{j=1}^{k+1} T_{i_j} (A^k y) - x_0\right\| < 1,$
> 或者
> $\left\|\left(\prod_{j=1}^{k+1} T_{i_j}\right) (A^k y)\right\| > \|x_0\| - 1.$
> 设 $\mu = \max_{1 \leqslant i \leqslant n} \|T_i\|$, 便得
> $\|x_0\| - 1 \leqslant \mu^{k+1} \|A^k y\|  (\mu > 0, k \in \mathbb{N}).$
> 因此
> $\frac{1}{\mu} \left(\frac{\|x_0\| - 1}{\mu \|y\|}\right)^{\frac{1}{k}} \leqslant \left(\frac{\|A^k y\|}{\|y\|}\right)^{\frac{1}{k}} \leqslant \|A^k\|^{\frac{1}{k}}. \tag{3.3.2}$
> 当 $k \to \infty$ 时, (3.3.2) 式左端极限是 $1/\mu$, 而右端极限是 0 (定理 2.6.12), 这便导出了矛盾.

### 3.3* 紧算子的结构
本小节研究问题 (3).
回忆矩阵分解为 Jordan 标准形的过程, 步骤如下:
(1) 在有穷维向量空间 $V$ 上, 称 $T$ 是一个幂零阵, 是指存在正整数 $q$, 使得 $T^q = 0$, 记使 $T^q = 0$ 的最小的 $q$ 为这矩阵 $T$ 的指标. 对于幂零阵, 有如下结论: $\exists$ 正整数 $r$,
$q_1 \leqslant q_2 \leqslant \cdots \leqslant q_r \leqslant q  (q_i \in \mathbb{N}, i = 1, 2, \cdots, r),$
以及 $x_1, x_2, \cdots, x_r \in V$, 使得
$\begin{aligned}$
$\big\{&x_1,  Tx_1,  \cdots,  T^{q_1 - 1} x_1; \\$
$&x_2,  Tx_2,  \cdots,  T^{q_2 - 1} x_2; \\$
$& \vdots    \vdots     \vdots \\$
$&x_r,  Tx_r,  \cdots,  T^{q_r - 1} x_r\big\}$
$\end{aligned}$
构成 $V$ 的基, 并且 $T^{q_1} x_1 = \cdots = T^{q_r} x_r = \theta$. 于是在 $V$ 上, 幂零阵分解为 $q_1 + q_2 + \cdots + q_r$ 个 Jordan 块, 其对角线为 0.
(2) 为了从给定的 $V$ 上的矩阵 $A$ 构造出与之有关的幂零阵, 设 $\lambda$ 是 $A$ 的一个特征值. 在每个 $N((\lambda I - A)^j) (j = 1, 2, \cdots)$ 上, $\lambda I - A$ 都是幂零的, 并且 $N((\lambda I - A)^j)$ 还是 $A$ 的不变子空间. 由于向量空间 $V$ 是有穷维的, 必有 $p \in \mathbb{N}$, 使得
$N((\lambda I - A)^p) = N((\lambda I - A)^{p+1}) = \cdots.$
其关键的步骤是, 能证明 $V = N((\lambda I - A)^p) \oplus V_1$, 其中 $V_1$ 是 $V$ 的一个线性子空间, 满足: $(\lambda I - A)|_{V_1}$ 是可逆的, 特别地,
$V_1 = R((\lambda I - V)^p).$
有了这个结论, 我们便可以从 $A$ 的所有特征值 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 找到对应的 $p_1, p_2, \cdots, p_k$, 将空间 $V$ 分解为 $\bigoplus_{i=1}^k N((\lambda_i I - A)^{p_i})$, 因为每个 $N((\lambda_i I - A)^{p_i})$ 都是 $A$ 的不变子空间, 而
$(\lambda_i I - A)|_{N((\lambda_i I - A)^{p_i})}  (i = 1, 2, \cdots, k)$
是幂零阵. 我们就得到了 $A$ 的 Jordan 分解.
现在我们把这些步骤推广到紧算子. 设 $A \in \mathfrak{C}(\mathscr{X}), T = I - A$, 我们要证下面的定理.
> [!theorem] 定理 3.3.5
> 存在非负整数 $p$, 使得 $\mathscr{X} = N(T^p) \oplus R(T^p)$, 并且 $T_1 \triangleq T|_{R(T^p)}$ 存在有界线性逆算子.
> 为证这个定理, 先考察任意的 $T \in \mathscr{L}(\mathscr{X})$. 我们知道有如下链的包含关系:
> $\{\theta\} \subseteq N(T) \subseteq N(T^2) \subseteq \cdots,$
> 而且一旦有 $N(T^k) = N(T^{k+1})$, 就有 $N(T^k) = N(T^n) (\forall n \geqslant k)$. 事实上,
> $\begin{aligned}$
> $x \in N(T^{k+2}) &\Longrightarrow T^{k+1} Tx = \theta \\$
> $&\Longrightarrow Tx \in N(T^{k+1}) = N(T^k) \\$
> $&\Longrightarrow x \in N(T^{k+1}).$
> $\end{aligned}$
> 因此, 称此链中使得 $N(T^k) = N(T^{k+1})$ 成立的最小整数 $p$ 为**零链长**, 有时记为 $p(T)$.
> 同样, 我们也有下列链的包含关系:
> $\mathscr{X} \supseteq R(T) \supseteq R(T^2) \supseteq \cdots,$
> 而且一旦 $R(T^k) = R(T^{k+1})$, 就有 $R(T^k) = R(T^n) (\forall n \geqslant k)$. 事实上, 若 $x \in R(T^{k+1})$, 则 $\exists y \in \mathscr{X}$, 使得 $x = T^{k+1} y$. 令 $W = T^k y$, 便得
> $W \in R(T^k) = R(T^{k+1}) \Longrightarrow x = TW \in R(T^{k+2}).$
> 因此, 称此链中使得 $R(T^k) = R(T^{k+1})$ 成立的最小整数 $q$ 为**像链长**, 有时记为 $q(T)$. 由定义, 我们有
> $p = 0 \Longleftrightarrow N(T) = \{\theta\} \Longleftrightarrow T \text{ 是单射}, \tag{3.3.3}$
> $q = 0 \Longleftrightarrow R(T) = \mathscr{X} \Longleftrightarrow T \text{ 是满射}. \tag{3.3.4}$
> **问题**  $p, q$ 一定有穷吗? $p$ 与 $q$ 有什么关系?
> 一般来说, $p, q$ 都可能是 $\infty$, 然而有如下引理.

> [!lemma] 引理 3.3.6
> 若 $T = I - A, A \in \mathfrak{C}(\mathscr{X})$, 则 $p = q < \infty$.

> [!proof]-
> (1) $q < \infty$. 用反证法. 倘若不然, 则有
> $R(T) \supsetneqq R(T^2) \supsetneqq \cdots.$
> 注意到, 对 $\forall k \in \mathbb{N}$,
> $T^k = I + \sum_{j=1}^k \binom{k}{j} (-A)^j = I + \text{ 紧算子},$
> 所以 $R(T^k)$ 还是闭线性子空间. 应用 Riesz 引理 (引理 1.4.31), 即得矛盾 (推理过程与定理 3.2.5 的证明相同).
> (2) $p \leqslant q$. 由定义, $R(T^q) = R(T^{q+1})$, 应用定理 3.2.1,
> $\dim N(T^q) = \mathrm{codim} R(T^q) = \mathrm{codim} R(T^{q+1}) = \dim N(T^{q+1}).$
> 于是由 $\dim N(T^q) < \infty$, 可见 $N(T^q) = N(T^{q+1})$, 再由 $p$ 的定义, 即得 $p \leqslant q$.
> (3) $q \leqslant p$. 同理, 由定义 $N(T^p) = N(T^{p+1})$, 且有
> $\mathrm{codim} R(T^{p+1}) = \dim N(T^{p+1}) = \dim N(T^p) = \mathrm{codim} R(T^p).$

> [!theorem] 定理 3.3.5 的证明
> (1) $N(T^p) \cap R(T^p) = \{\theta\}$. 事实上, 若有 $y \in N(T^p) \cap R(T^p)$, 则 $\exists x \in \mathscr{X}$, 使得 $y = T^p x$, 且有 $T^p y = \theta$, 从而
> $x \in N(T^{2p}) = N(T^p) \Longrightarrow y = T^p x = \theta.$
> (2) $\mathscr{X} = N(T^p) \oplus R(T^p)$. 事实上, 对 $\forall x \in \mathscr{X}$, 有
> $T^p x \in R(T^p) = R(T^{2p}).$
> 因此 $\exists u \in \mathscr{X}$, 使得 $T^{2p} u = T^p x$. 令 $y \triangleq T^p u \in R(T^p)$, 便有 $z \triangleq x - y \in N(T^p)$, 这是因为 $T^p y = T^p x$. 于是得
> $x = y + z  (y \in R(T^p), z \in N(T^p)).$
> (3) $T_1 \triangleq T|_{R(T^p)}$ 存在有界线性逆算子. 事实上, 因为
> $R(T^p) = R(T^{p+1}),$
> 可见 $T_1$ 是满射的. 又 $T_1$ 是 1--1 的, 这是因为: 若 $y \in R(T^p)$, 且 $Ty = \theta$, 则 $\exists x \in \mathscr{X}$, 使得 $y = T^p x$, 从而
> $x \in N(T^{p+1}) = N(T^p),$
> 即得 $y = \theta$. 于是由 Banach 逆算子定理 (定理 2.3.8) 即得结论.

根据定理 3.3.5, 对任意的 $A \in \mathfrak{C}(\mathscr{X})$, 从它的一切非 0 特征值 $\lambda_1, \lambda_2, \cdots$, 我们可以找到对应于 $T_i = \lambda_i I - A$ 的零链长 $p_i (i = 1, 2, \cdots)$. 在空间 $\bigoplus_{i=1}^\infty N((\lambda_i - A)^{p_i})$ 上, 算子 $A$ 有对应的 Jordan 标准形.
更详细的讨论参看 Ringrose J. R., *Compact Non-self-adjoint Operators* (New York: Van Nostrand Reinhold, 1971).
## 习题
(本节习题中的 $\mathscr{X}$ 均指 $B$ 空间)
3.3.1 给定数列 $\{a_n\}_{n=1}^\infty$, 在空间 $l^1$ 上定义算子 $A$ 如下:
$A(x_1, x_2, \cdots) = (a_1 x_1, a_2 x_2, \cdots),  \forall x = (x_1, x_2, \cdots) \in l^1.$
求证: (1) $A \in \mathscr{L}(l^1)$ 的充要条件是 $\sup_{n \geqslant 1} |a_n| < \infty$;
  \; (2) $A^{-1} \in \mathscr{L}(l^1)$ 的充要条件是 $\inf_{n \geqslant 1} |a_n| > 0$;
  \; (3) $A \in \mathfrak{C}(l^1)$ 的充要条件是 $\lim_{n \to \infty} a_n = 0$.
3.3.2 在 $C[0, 1]$ 中, 考虑映射
$T : x(t) \mapsto \int_0^t x(s) ds,  \forall x(t) \in C[0, 1].$
(1) 求证: $T$ 是紧算子;
(2) 求 $\sigma(T)$ 及 $T$ 的一个非平凡的闭不变子空间.
3.3.3 设 $A \in \mathfrak{C}(\mathscr{X})$, 求证: 当且仅当 $x - Ax = \theta$ 只有零解时, 方程 $x - Ax = y$ 对 $\forall y \in \mathscr{X}$ 都有解.
3.3.4 设 $T \in \mathscr{L}(\mathscr{X})$, 并存在 $m \in \mathbb{N}$, 使得
$\mathscr{X} = N(T^m) \oplus R(T^m),$
求证: $p(T) = q(T) \leqslant m$.
3.3.5 设 $A, B \in \mathscr{L}(\mathscr{X})$, 并且 $AB = BA$, 求证:
(1) $R(A)$ 和 $N(A)$ 都是 $B$ 的不变子空间;
(2) $R(B^n)$ 和 $N(B^n)$ 都是 $B$ 的不变子空间 $(\forall n \in \mathbb{N})$.
3.3.6 设 $A \in \mathscr{L}(\mathscr{X})$, $M$ 是 $A$ 的有穷维的闭不变子空间, 求证: (1) $A$ 在 $M$ 上的作用可以用一个矩阵来表示;
  \; (2) $M$ 中存在 $A$ 的特征元.
3.3.7 设 $x_0 \in \mathscr{X}, f \in \mathscr{X}^*$, 满足 $\langle f, x_0 \rangle = 1$, 令 $A = x_0 \otimes f$, 并且 $T = I - A$, 求 $T$ 的零链长 $p$.
## §4 Hilbert-Schmidt 定理
在 Hilbert 空间上, 有一类有界线性算子, 它们是 $\mathbb{R}^n$ 上的对称矩阵, 是 $\mathbb{C}^n$ 上 Hermite 矩阵的推广, 称为对称算子.
> [!definition] 定义 3.4.1
> 设 $A \in \mathscr{L}(H)$, 其共轭算子 $A^*$ 由下式定义:
> $(Ax, y) = (x, A^* y)  (\forall x, y \in H). \tag{3.4.1}$
> 称 $A$ 是**对称的**, 若
> $(Ax, y) = (x, Ay)  (\forall x, y \in H). \tag{3.4.2}$

> [!remark] 注
> 比较 (3.4.1) 式和 (3.4.2) 式可见, 为了 $A$ 是对称算子必须且仅须 $A = A^*$. 正是这个缘故, 有时又把对称算子称为**自共轭**算子, 或**自伴算子** (注意: 前提是 $A \in \mathscr{L}(H)$).

> [!proposition] 命题 3.4.2
> 设 $A, B \in \mathscr{L}(H), \alpha \in \mathbb{C}$, 则有
> $\begin{aligned}$
> $(A + B)^* &= A^* + B^*,  (\alpha A)^* = \overline{\alpha} A^*, \\$
> $A^{**} &= A,  (AB)^* = B^* A^*, \\$
> $\sigma(A^*) &= \overline{\sigma(A)} = \{\overline{\lambda} \mid \lambda \in \sigma(A)\}.$
> $\end{aligned}$
> 证明很简单, 留给读者.

> [!example] 例 3.4.3
> 在 $\mathbb{R}^n$ 上, 若 $A$ 是对称矩阵, 则 $A$ 是对称的. 在 $\mathbb{C}^n$ 上, 若 $A$ 是 Hermite 矩阵, 则 $A$ 是对称的. 一般地有: $A$ 是 $\mathbb{R}^n$ 上的矩阵, $A^* = A^\mathrm{T}$, 这里 $A^\mathrm{T}$ 为 $A$ 的转置矩阵; $A$ 是 $\mathbb{C}^n$ 上的矩阵, $A^* = \overline{A}^\mathrm{T}$, 这里 $\overline{A}^\mathrm{T}$ 为 $A$ 的共轭转置矩阵.

> [!example] 例 3.4.4
> 在实的 $L^2(\Omega, \mathscr{B}, \mu)$ 上, 设 $K \in L^\infty(\Omega \times \Omega, \mathrm{d}\mu)$, 并且 $K(x, y) = K(y, x)$, 则
> $A : u(x) \mapsto \int_\Omega K(x, y) u(y) \mathrm{d}\mu(y)$
> 是 $L^2(\Omega, \mathscr{B}, \mu)$ 上的对称算子.

> [!example] 例 3.4.5
> 设 $H$ 是 Hilbert 空间, $M$ 是它的一个闭线性子空间. 由 $H$ 到 $M$ 上的投影算子 $P_M$ 便是对称的.

> [!proposition] 命题 3.4.6
> 关于 $H$ 上的对称算子, 有下列基本性质:
> (1) 为了 $A$ 对称, 必须且仅须 $(Ax, x) \in \mathbb{R} (\forall x \in H)$.

我们考虑在 $H$ 上对称紧算子的谱分解. 从二次型
$(Ax, x) = \int_{-\infty}^{+\infty} \lambda \, \mathrm{d}(E_\lambda x, x)$
的 Stieltjes 积分表示着手, 我们能否将它化简为无穷级数?
回答是肯定的. 为此, 我们首先要证明下列引理.
> [!lemma] 引理 3.4.7
> 设 $P$ 是 Hilbert 空间 $H$ 上的有界线性算子, 如果满足:
> (1) $P$ 是对称的, 即 $P = P^*$;
> (2) $P$ 是幂等的, 即 $P^2 = P$;
> 那么 $P$ 是 $H$ 上的正交投影算子. 反之亦然.

> [!proof]-
> 令 $M \triangleq R(P)$. 我们将证明 $P = P_M$.
> 首先证明 $M$ 是闭线性子空间. 事实上, $\forall y \in M$, $\exists x \in H$, 使得 $y = Px$. 于是由 (2),
> $(I - P)y = (I - P)Px = Px - P^2 x = \theta.$
> 因此 $y = Py$. 反之, 若 $y = Py$, 则显然 $y \in R(P) = M$. 所以 $M = \{y \in H \mid y = Py\}$. 由于 $P$ 有界, 故 $M$ 是闭线性子空间.
> 再证 $P_M = P$. 事实上, 分解
> $x = Px + (I - P)x  (\forall x \in H),$
> 其中 $Px \in M = R(P)$, 而 $(I - P)x \in M^\perp$, 这是因为 $\forall y \in M$,
> $((I - P)x, y) = (x, (I - P)y) = (x, y - Py) = (x, \theta) = 0.$
> 因此
> $x = P_M x + (I - P_M)x = Px + (I - P)x,$
> 由分解的唯一性, 即得 $P = P_M$.

> [!definition] 定义 3.4.8
> 设 $A$ 是 Hilbert 空间 $H$ 上的对称紧算子, 对 $\lambda \in \sigma_p(A) \setminus \{0\}$, 称
> $E_\lambda \triangleq P_{N(\lambda I - A)}$
> 为 $A$ 对应于 $\lambda$ 的**特征投影**.

> [!theorem] 定理 3.4.9 (Hilbert-Schmidt)
> 设 $A$ 是 Hilbert 空间 $H$ 上的对称紧算子, 则有
> $x = \sum_{\lambda \in \sigma_p(A)} E_\lambda x  (\forall x \in H), \tag{3.4.8}$
> 并且
> $A = \sum_{\lambda \in \sigma_p(A)} \lambda E_\lambda. \tag{3.4.9}$

> [!proof]-
> (1) 若 $H = \{\theta\}$, 则定理显然成立. 下设 $H \neq \{\theta\}$.
> 由定理 3.3.1, 此时或者 $\sigma_p(A) \setminus \{0\} \neq \varnothing$, 或者 $H = N(A)$. 在后一种情形, $A = \theta$, 此时定理自然成立. 因此, 我们不妨设 $\sigma_p(A) \setminus \{0\} \neq \varnothing$.
> (2) 先证明 $\{E_\lambda\}_{\lambda \in \sigma_p(A)}$ 是两两正交的投影算子. 事实上, 若 $\lambda, \mu \in \sigma_p(A), \lambda \neq \mu$, 则 $N(\lambda I - A) \perp N(\mu I - A)$ (命题 3.4.6 (4)). 因此 $R(E_\lambda) \perp R(E_\mu)$, 即 $E_\lambda E_\mu = 0$.
> (3) 令 $M_0 \triangleq \overline{\mathrm{span}\{R(E_\lambda) \mid \lambda \in \sigma_p(A)\}}$. 若 $M_0 \neq H$, 则 $M_0^\perp \neq \{\theta\}$. 因为 $A$ 是对称的, $M_0$ 是 $A$ 的不变子空间, 从而 $M_0^\perp$ 也是 $A$ 的不变子空间 (习题 3.3.5). 记 $A_0 = A|_{M_0^\perp}$, 则 $A_0$ 是 $M_0^\perp$ 上的对称紧算子. 由定理 3.3.1, 或者 $\sigma_p(A_0) \setminus \{0\} \neq \varnothing$, 或者 $M_0^\perp = N(A_0)$. 若前者成立, 则存在 $\lambda \neq 0$ 及 $x \in M_0^\perp \setminus \{\theta\}$, 使得 $A_0 x = \lambda x$, 即 $Ax = \lambda x$, 这与 $M_0$ 的定义矛盾. 因此只能是 $M_0^\perp = N(A_0)$. 但对 $\forall x \in M_0^\perp$, $x \perp N(A)$ (因为 $N(A) = R(E_0) \subset M_0$), 从而 $A_0 x = Ax = \theta$, 即 $x \in N(A_0)$. 因此 $M_0^\perp = N(A_0) = M_0^\perp$ 自然成立. 于是 $M_0^\perp \subset N(A)$. 但 $N(A) \subset M_0$, 所以 $M_0^\perp = \{\theta\}$, 即 $M_0 = H$.
> (4) 由 (3), 对 $\forall x \in H$, 有
> $x = \sum_{\lambda \in \sigma_p(A)} E_\lambda x.$
> 从而
> $Ax = A \sum_{\lambda \in \sigma_p(A)} E_\lambda x = \sum_{\lambda \in \sigma_p(A)} AE_\lambda x = \sum_{\lambda \in \sigma_p(A)} \lambda E_\lambda x.$
> 由 $x$ 的任意性, 即得 (3.4.9) 式.

> [!corollary] 推论 3.4.10
> 设 $A$ 是 Hilbert 空间 $H$ 上的对称紧算子, 则 $A$ 有一组正交规范特征向量 $\{e_n\}$, 对应的特征值为 $\{\lambda_n\}$, 满足:
> (1) $\lambda_n \in \mathbb{R}$, 且 $\lambda_n \to 0$ (当 $n \to \infty$);
> (2) $A e_n = \lambda_n e_n$;
> (3) 对 $\forall x \in H$, 有
> $x = \sum_{n=1}^\infty (x, e_n) e_n,  Ax = \sum_{n=1}^\infty \lambda_n (x, e_n) e_n.$

> [!proof]-
> 由定理 3.4.9, $\sigma_p(A) \setminus \{0\} = \{\lambda_1, \lambda_2, \cdots\}$, 其中 $|\lambda_1| \geqslant |\lambda_2| \geqslant \cdots > 0$, 且 $\lambda_n \to 0$. 对每个 $\lambda_n$, $N(\lambda_n I - A)$ 是有穷维的. 在每个 $N(\lambda_n I - A)$ 中取一组正交规范基 $\{e_n^{(k)}\}_{k=1}^{m_n}$, 其中 $m_n = \dim N(\lambda_n I - A)$. 再取 $N(A)$ 的一组正交规范基 $\{e_n^{(0)}\}$. 将所有这些特征向量排列起来, 记为 $\{e_n\}$, 对应的特征值记为 $\{\lambda_n\}$, 其中对应于 $N(A)$ 中的特征向量的特征值为 0. 则 $\{e_n\}$ 是 $H$ 中的正交规范集.
> 由 (3.4.8) 式, 对 $\forall x \in H$,
> $x = \sum_{\lambda \in \sigma_p(A)} E_\lambda x.$
> 对每个 $\lambda \in \sigma_p(A)$,
> $E_\lambda x = \sum_{k=1}^{m_\lambda} (x, e_\lambda^{(k)}) e_\lambda^{(k)}.$
> 因此
> $x = \sum_{n=1}^\infty (x, e_n) e_n.$
> 再由 (3.4.9) 式,
> $Ax = \sum_{n=1}^\infty \lambda_n (x, e_n) e_n.$

> [!remark] 注
> 推论 3.4.10 表明, 对于 Hilbert 空间上的对称紧算子 $A$, 存在由 $A$ 的特征向量组成的 $H$ 的正交规范基, 在此基下 $A$ 的作用就是对角化的. 这是有限维对称矩阵 (或 Hermite 矩阵) 谱定理在无穷维情形的推广.

> [!example] 例 3.4.11
> 考虑积分算子
> $(Au)(x) = \int_0^1 K(x, y) u(y) \mathrm{d}y,$
> 其中 $K \in C([0, 1] \times [0, 1])$, 且 $K(x, y) = K(y, x)$ (对称核). 则 $A$ 是 $L^2[0, 1]$ 上的对称紧算子. 由 Hilbert-Schmidt 定理, 存在 $A$ 的一组正交规范特征函数 $\{e_n\}$, 对应的特征值 $\{\lambda_n\} \subset \mathbb{R}$, $\lambda_n \to 0$, 使得对 $\forall u \in L^2[0, 1]$,
> $u = \sum_{n=1}^\infty (u, e_n) e_n,  Au = \sum_{n=1}^\infty \lambda_n (u, e_n) e_n.$
> 这就是著名的 Sturm-Liouville 理论在积分算子情形下的表现.
> **习题**
> (本节习题中的 $H$ 均指 Hilbert 空间)
> 3.4.1 设 $A \in \mathscr{L}(H)$, 求证: $A + A^*$, $AA^*$, $A^*A$ 都是对称算子, 并且
> $\|AA^*\| = \|A^*A\| = \|A\|^2.$
> 3.4.2 设 $A \in \mathscr{L}(H)$, 满足 $(Ax, x) \geqslant 0 (\forall x \in H)$, 且 $(Ax, x) = 0 \Longleftrightarrow x = \theta$, 求证:
> $\|Ax\|^2 \leqslant \|A\|(Ax, x)  (\forall x \in H).$
> 3.4.3 设 $A$ 是 $H$ 上的对称紧算子, 令
> $m(A) \triangleq \inf_{\|x\|=1} (Ax, x),  M(A) \triangleq \sup_{\|x\|=1} (Ax, x).$
> 求证:
> (1) 若 $m(A) \neq 0$, 则 $m(A) \in \sigma_p(A)$;
> (2) 若 $M(A) \neq 0$, 则 $M(A) \in \sigma_p(A)$.
> 3.4.4 设 $A$ 是 $H$ 上的对称紧算子, 求证:
> (1) 若 $A$ 正定, 即 $(Ax, x) > 0 (\forall x \neq \theta)$, 则 $A$ 的最小特征值 $\lambda_1 > 0$;
> (2) 设 $\lambda_1 \geqslant \lambda_2 \geqslant \cdots > 0$ 是 $A$ 的全部正特征值, 则
> $\lambda_n = \sup_{\substack{x \perp \mathrm{span}\{e_1, \cdots, e_{n-1}\} \\ x \neq \theta}} \frac{(Ax, x)}{(x, x)}  (n = 1, 2, \cdots),$
> 其中 $e_i$ 是对应于 $\lambda_i$ 的特征向量.
> 3.4.5 设 $A$ 是 $H$ 上的对称紧算子, $\{\lambda_n\}$ 是 $A$ 的全部特征值 (按重数计), $\{e_n\}$ 是对应的正交规范特征向量. 对 $f \in H$, 考虑方程
> $Ax - \lambda x = f.$
> 求证:
> (1) 当 $\lambda \notin \sigma_p(A)$ 时, 方程有唯一解
> $x = \sum_{n=1}^\infty \frac{(f, e_n)}{\lambda_n - \lambda} e_n;$
> (2) 当 $\lambda = \lambda_k$ 对某个 $k$ 成立时, 方程有解当且仅当 $(f, e_k) = 0$, 此时通解为
> $x = \sum_{n \neq k} \frac{(f, e_n)}{\lambda_n - \lambda_k} e_n + c e_k,$
> 其中 $c$ 为任意常数.
> 3.4.6 设 $A$ 是 $H$ 上的对称紧算子, $\{e_n\}$ 是 $H$ 的正交规范基, $\{a_n\}$ 是实数列, $a_n \to 0$, 定义算子
> $Ax = \sum_{n=1}^\infty a_n (x, e_n) e_n.$
> 求证: $A$ 是 $H$ 上的对称紧算子, 且 $\sigma(A) = \{a_n \mid n = 1, 2, \cdots\} \cup \{0\}$.
> 3.4.7 设 $A, B$ 是 $H$ 上的对称紧算子, $AB = BA$, 求证: 存在 $H$ 的一组正交规范基, 它们同时是 $A$ 和 $B$ 的特征向量.
> 3.4.8 设 $H$ 是可分的 Hilbert 空间, $\{e_n\}_{n=1}^\infty$ 是 $H$ 的正交规范基, $\{\lambda_n\}_{n=1}^\infty$ 是有界实数列. 定义
> $T : H \to H,  Tx = \sum_{n=1}^\infty \lambda_n (x, e_n) e_n.$
> 求证:
> (1) $T$ 是 $H$ 上的对称算子;
> (2) $T$ 是紧算子当且仅当 $\lambda_n \to 0 (n \to \infty)$;
> (3) 若 $\lambda_n \to 0$ 但不恒为 0, 求 $\sigma_p(T)$ 及每个特征子空间的维数.
> 3.4.9 设 $A \in \mathfrak{C}(H)$ 且 $A$ 对称, 令
> $m = \inf_{\|x\|=1} (Ax, x),  M = \sup_{\|x\|=1} (Ax, x).$
> 求证: $\sigma(A) \subset [m, M]$, 且 $m, M \in \sigma(A)$.
> 3.4.10 (极小极大原理) 设 $A$ 是 $H$ 上的对称紧算子, $\lambda_1 \geqslant \lambda_2 \geqslant \cdots \geqslant \lambda_n \geqslant \cdots > 0$ 是 $A$ 的全部正特征值 (按重数计). 求证:
> $\lambda_n = \max_{\substack{V \subset H \\ \dim V = n}} \min_{\substack{x \in V \\ x \neq \theta}} \frac{(Ax, x)}{(x, x)} = \min_{\substack{V \subset H \\ \mathrm{codim} V = n-1}} \max_{\substack{x \in V \\ x \neq \theta}} \frac{(Ax, x)}{(x, x)}.$
> 此式给出了对称紧算子特征值的变分刻画.

> [!proof]-
> 记 $c \triangleq \sup_{\|x\|=1}|(Ax,x)|$, $c \leqslant \|A\|$ 是显然的. 下证 $c \geqslant \|A\|$.
> 由 $A$ 的对称性和平行四边形法则, 有
> $$\begin{aligned}
> \operatorname{Re}(Ax,y) &= \frac{1}{4}[(A(x+y),x+y)-(A(x-y),x-y)] \\
> &\leqslant \frac{c}{4}(\|x+y\|^{2}+\|x-y\|^{2}) \leqslant c,
> \end{aligned}$$
> 其中 $x,y \in H$, 适合 $\|x\|=\|y\|=1$. 今取 $\alpha \in \mathbb{C}(|\alpha|=1)$, 使得
> $$\alpha(Ax,y)=|(Ax,y)|,$$
> 即得
> $$|(Ax,y)|=(Ax,\overline{\alpha}y)=\operatorname{Re}(Ax,\overline{\alpha}y) \leqslant c.$$
> 这便推出: $\|A\| \leqslant c$.

在 Hilbert 空间上, 对称紧算子 $A$ 的谱和算子结构将更为清楚. 对比有穷维情形的对称矩阵 $A$, 它可以通过正交变换对角化, 对角线上的元对应着 $A$ 的特征值, 而这些特征值又是 $A$ 所对应的二次型 $(Ax,x)$ 在单位球面 $\|x\|=1$ 上的各个临界值. 所有这些性质将被推广到无穷维空间.
我们从下列极值性质出发.
> [!theorem] 定理 3.4.7
> 若 $A$ 是对称紧算子, 则必有 $x_0 \in H$, $\|x_0\|=1$, 使得
$$|(Ax_0,x_0)|=\sup_{\|x\|=1}|(Ax,x)|,$$
并且满足
$$Ax_0=\lambda x_0, \qquad (3.4.6)$$
其中 $|\lambda|=|(Ax_0,x_0)|$.
> [!proof]-
> 用 $S_1$ 表示 $H$ 上的单位球面, 不妨设
> $$\sup_{x\in S_1}|(Ax,x)|=\sup_{x\in S_1}(Ax,x). \qquad (3.4.7)$$

### 4.1 自伴紧算子

> [!proof]-
> (否则用 $-A$ 代替 $A$). 取 $\lambda \triangleq \sup_{x\in S_1}(Ax,x)$, 考察 $S_1$ 上定义的函数
> $$f(x)=(Ax,x) \quad (\forall x\in S_1).$$
> 设 $\{x_n\} \subset S_1$, 满足 $f(x_n) \to \lambda$, 因为 $\|x_n\|=1$, 所以有弱收敛子列, 不妨仍记作 $\{x_n\}$. 设 $x_n \rightharpoonup x_0$, 由 $\overline{B}(\theta,1)$ 的弱闭性, 便有 $\|x_0\| \leqslant 1$. 再由 $A$ 的紧性推出
> $$Ax_n \to Ax_0 \quad (n\to\infty).$$
> 从而有 $f(x_n) \to (Ax_0,x_0)\ (n\to\infty)$, 即得
> $$(Ax_0,x_0)=\lambda. \qquad (3.4.8)$$
> 进一步要证: $\|x_0\|=1$. 用反证法. 倘若不然, 便有 $\|x_0\|<1$, 那么由命题 3.4.6(5) 和 (3.4.7) 式, 有
> $$(Ax_0,x_0) \leqslant \|A\|\cdot\|x_0\|^2 = \sup_{x\in S_1}(Ax,x)\|x_0\|^2 < \lambda,$$
> 这与 (3.4.8) 式矛盾. 于是我们证明了: $\exists x_0 \in S_1$, 使得
> $$(Ax_0,x_0)=\sup_{x\in S_1}(Ax,x). \qquad (3.4.9)$$
> 最后再证 (3.4.6) 式. $\forall y\in H$, 对于 $|t|$ 足够小的 $t$, 考察函数
> $$\varphi_y(t) \triangleq \frac{(A(x_0+ty),x_0+ty)}{(x_0+ty,x_0+ty)}.$$
> 注意到 $t=0$ 使 $\varphi_y(t)$ 达到极大, 从而有 $\varphi_y'(0)=0$, 算出就是
> $$\operatorname{Re}(y,Ax_0-\lambda x_0)=0,$$
> 而 $y\in H$ 是任意的, 故有 $Ax_0=\lambda x_0$. $\blacksquare$

设 $A$ 是 $H$ 上的紧算子, 按 Riesz-Schauder 理论,
$$\sigma(A)\setminus\{0\}=\sigma_p(A)\setminus\{0\}=\{\lambda_1,\lambda_2,\cdots\}.$$
如果 $\{\lambda_n\}$ 中有无穷多个是不同的, 那么满足 $\lambda_n \to 0$; 如果 $A$ 还是自伴的, 由命题 3.4.6(2), $\lambda_n$ 都是实数. 此外还有下面的定理.

> [!theorem] 定理 3.4.8 (Hilbert-Schmidt)
> 若 $A$ 是 Hilbert 空间 $H$ 上的对称紧算子, 则至多有可数个非零的, 只可能以 $0$ 为聚点的实数 $\{\lambda_i\}$, 它们是算子 $A$ 的特征值, 并对应一组正交规范基 $\{e_i\}$, 使得
> $$\begin{aligned}
> x &= \sum (x,e_i)e_i, \\
> Ax &= \sum \lambda_i(x,e_i)e_i.
> \end{aligned} \qquad (3.4.10)$$

> [!proof]-
> 对 $\forall \lambda \in \sigma_p(A)\setminus\{0\}$, 设 $N(\lambda I-A)$ 的正交规范基为
> $$\{e_i^{(\lambda)}\}_{i=1}^{m(\lambda)},$$
> 其中 $m(\lambda) \triangleq \dim N(\lambda I-A) < \infty$ (称为 $\lambda$ 的重数). 此外, 若 $0 \in \sigma_p(A)$, 则设 $N(A)$ 的正交规范基为
> $$\{e_i^{(0)}\},$$
> 它不一定是可数的. 如今我们令
> $$\begin{aligned}
> \{e_i'\} &\triangleq \bigcup_{\lambda\in\sigma_p(A)\setminus\{0\}} \{e_i^{(\lambda)}\}_{i=1}^{m(\lambda)}, \\
> \{e_i\} &\triangleq \begin{cases} \{e_i'\}, & 0 \overline{\in} \sigma_p(A), \\ \{e_i'\} \cup \{e_i^{(0)}\}, & 0 \in \sigma_p(A). \end{cases}
> \end{aligned}$$
> 再令 $M \triangleq \operatorname{span}\{e_i\}$, 在 $M$ 上 $A$ 显然有表示式 (3.4.10) 式.
>
> 现在证 $\overline{M}=H$. 用反证法. 倘若不然, 则 $M^\perp \neq \{\theta\}$. 记 $\widetilde{A} \triangleq A|_{M^\perp}$, 由定义, $\widetilde{A}$ 不能有特征值, 从而 $\widetilde{A} \neq 0$. 另一方面, 由定理 3.4.7, 有
> $$\|\widetilde{A}\|=\sup_{\substack{x\in M^\perp \\ \|x\|=1}}|(\widetilde{A}x,x)|=0,$$
> 即 $\widetilde{A}=0$, 便得矛盾. 从而 $\{e_i\}$ 构成 $H$ 的正交规范基. $\blacksquare$

> [!remark] 注 1
> 我们可以将特征值按绝对值递减的顺序编号, 并约定特征值的重数是几, 就把那特征值接连编上几个号码, 即排成:
> $$|\lambda_1| \geqslant |\lambda_2| \geqslant \cdots \geqslant |\lambda_n| \geqslant |\lambda_{n+1}| \geqslant \cdots.$$
> 于是
> $$A=\sum_{i=1}^{\infty} \lambda_i e_i \otimes e_i, \qquad (3.4.11)$$
> 更确切地有
> $$\left\|A-\sum_{i=1}^{n}\lambda_i e_i\otimes e_i\right\| \leqslant |\lambda_{n+1}| \to 0 \quad (n\to\infty).$$
> 事实上, 对 $\forall x\in H$, 有
> $$\begin{aligned}
> \left\|Ax-\sum_{i=1}^{n}\lambda_i(x,e_i)e_i\right\| &= \left\|\sum_{i=n+1}^{\infty}\lambda_i(x,e_i)e_i\right\| \\
> &= \left(\sum_{i=n+1}^{\infty}\lambda_i^2|(x,e_i)|^2\right)^{\frac{1}{2}} \\
> &\leqslant |\lambda_{n+1}|\left(\sum_{i=n+1}^{\infty}|(x,e_i)|^2\right)^{\frac{1}{2}} \leqslant |\lambda_{n+1}|\cdot\|x\|.
> \end{aligned}$$

> [!remark] 注 2
> 定理 3.4.8 表明: 对称紧算子可以对角化, 它的特征值具有极值性质:
> $$|\lambda_n|=\sup\{|(Ax,x)| \big| x\perp\operatorname{span}\{e_1,e_2,\cdots,e_{n-1}\}, \|x\|=1\}$$
> $(n=1,2,\cdots)$, 其中 $e_1,e_2,\cdots,e_{n-1}$ 是对应于 $\lambda_1,\lambda_2,\cdots,\lambda_{n-1}$ 的特征元.

特别地, 我们可以按正负值把特征值排列起来, 记作
$$\begin{aligned}
\lambda_1^+ &\geqslant \lambda_2^+ \geqslant \cdots \geqslant 0, \\
\lambda_1^- &\leqslant \lambda_2^- \leqslant \cdots < 0.
\end{aligned} \qquad (3.4.12)$$

> [!theorem] 定理 3.4.9 (极小极大刻画)
> 设 $A$ 是对称紧算子, 对应有特征值 (3.4.12) 式, 则
> $$\begin{aligned}
> \lambda_n^+ &= \inf_{E_{n-1}}\sup_{\substack{x\in E_{n-1}^\perp \\ x\neq\theta}}\frac{(Ax,x)}{(x,x)}, \\
> \lambda_n^- &= \sup_{E_{n-1}}\inf_{\substack{x\in E_{n-1}^\perp \\ x\neq\theta}}\frac{(Ax,x)}{(x,x)},
> \end{aligned} \qquad (3.4.13) \qquad (3.4.14)$$
> 其中 $E_{n-1}$ 是 $H$ 的任意 $n-1$ 维闭线性子空间.

> [!proof]-
> 我们只需证 (3.4.13) 式, 因为用 $-A$ 代替 $A$, 那么 (3.4.13) 式蕴含了 (3.4.14) 式. 注意到, 若
> $$x=\sum a_j^+ e_j^+ + \sum a_j^- e_j^-,$$
> 则
> $$\frac{(Ax,x)}{(x,x)}=\frac{\sum\lambda_j^+|a_j^+|^2+\sum\lambda_j^-|a_j^-|^2}{\sum|a_j^+|^2+\sum|a_j^-|^2}.$$
> 记 (3.4.13) 式右端为 $\mu_n$. 下面从两个方面证明 $\lambda_n^+=\mu_n$:
>
> (1) $\lambda_n^+ \leqslant \mu_n$. 事实上, $\forall E_{n-1}$, 在 $\operatorname{span}\{e_1^+,e_2^+,\cdots,e_n^+\}$ 中总有向量 $x_n\neq\theta$, 使得 $x_n\perp E_{n-1}$, 于是
> $$\sup_{\substack{x\perp E_{n-1} \\ x\neq\theta}}\frac{(Ax,x)}{(x,x)} \geqslant \frac{(Ax_n,x_n)}{(x_n,x_n)}=\frac{\sum_{j=1}^{n}\lambda_j^+|a_j^+|^2}{\sum_{j=1}^{n}|a_j^+|^2} \geqslant \lambda_n^+,$$
> 即得 $\lambda_n^+ \leqslant \mu_n$.
>
> (2) $\lambda_n^+ \geqslant \mu_n$. 事实上, 取 $E_{n-1}=\operatorname{span}\{e_1^+,e_2^+,\cdots,e_{n-1}^+\}$, 便有
> $$\lambda_n^+=\sup_{\substack{x\perp E_{n-1} \\ x\neq\theta}}\frac{(Ax,x)}{(x,x)},$$
> 即得 $\lambda_n^+ \geqslant \mu_n$. $\blacksquare$

> [!corollary] 推论 3.4.10
> 若两个对称紧算子 $A,B$ 满足 $A\leqslant B$, 即
> $$(Ax,x) \leqslant (Bx,x) \quad (\forall x\in H),$$
> 则
> $$\lambda_j^+(A) \leqslant \lambda_j^+(B) \quad (j=1,2,\cdots).$$

### 习题

> [!exercise] 3.4.1
> 设 $A\in\mathscr{L}(H)$, 求证: $A+A^*,AA^*,A^*A$ 都是对称算子, 并且
> $$\|AA^*\|=\|A^*A\|=\|A\|^2.$$

> [!exercise] 3.4.2
> 设 $A\in\mathscr{L}(H)$, 满足 $(Ax,x)\geqslant 0(\forall x\in H)$, 且
> $$(Ax,x)=0 \Longleftrightarrow x=\theta,$$
> 求证:
> $$\|Ax\|^2 \leqslant \|A\|(Ax,x) \quad (\forall x\in H).$$

> [!exercise] 3.4.3
> 设 $A$ 是 $H$ 上的有界对称算子, 令
> $$m(A)\triangleq\inf_{\|x\|=1}(Ax,x), \quad M(A)\triangleq\sup_{\|x\|=1}(Ax,x).$$
> 求证:
> (1) $\sigma(A)\subset[m(A),M(A)]$, 且 $m(A),M(A)\in\sigma(A)$.
> 进一步假设 $A$ 是 $H$ 上的对称紧算子, 求证:
> (2) 若 $m(A)\neq 0$, 则 $m(A)\in\sigma_p(A)$;
> (3) 若 $M(A)\neq 0$, 则 $M(A)\in\sigma_p(A)$.

> [!exercise] 3.4.4
> 设 $A$ 是对称紧算子, 求证:
> (1) 若 $A$ 非零, 则 $A$ 至少有一个不等于零的特征值;
> (2) 若 $M$ 是 $A$ 的非零不变子空间, 则 $M$ 上必含有 $A$ 的特征元.

> [!exercise] 3.4.5
> 求证: 为了 $P\in\mathscr{L}(H)$ 是一个正交投影算子, 必须且仅须:
> (1) $P$ 是对称的, 即 $P=P^*$;
> (2) $P$ 是幂等的, 即 $P^2=P$.

> [!exercise] 3.4.6
> 求证: 为了 $P\in\mathscr{L}(H)$ 是一个正交投影算子, 必须且仅须:
> $$(Px,x)=\|Px\|^2 \quad (\forall x\in H).$$

> [!exercise] 3.4.7
> 设 $A\in\mathscr{L}(H)$, 称其为**正算子**, 是指
> $$(Ax,x)\geqslant 0 \quad (\forall x\in H).$$
> 求证:
> (1) 正算子必是对称的;
> (2) 正算子的一切特征值都是非负实数.

> [!exercise] 3.4.8
> 求证: 为了 $H$ 的闭线性子空间 $L,M$ 满足 $L\subset M$, 必须且仅须 $P_M-P_L$ 是正算子.

> [!exercise] 3.4.9
> 设 $(a_{ij})(i,j=1,2,\cdots)$ 满足 $\sum_{i,j=1}^{\infty}|a_{ij}|^2<\infty$, 在 $l^2$ 空间上, 定义映射
> $$A: x=\{x_1,x_2,\cdots\} \mapsto y=\{y_1,y_2,\cdots\},$$
> 其中 $y_i\triangleq\sum_{j=1}^{\infty}a_{ij}x_j\ (i=1,2,\cdots)$. 求证:
> (1) $A$ 是 $H$ 上的紧算子;
> (2) 又若 $a_{ij}=\overline{a_{ji}}\ (i,j=1,2,\cdots)$, 则 $A$ 是对称紧算子.

> [!exercise] 3.4.10
> 设 $A$ 是 $H$ 上的对称算子, 并且存在一组由 $A$ 的特征元组成的 $H$ 的正交规范基. 又设
> (1) $\dim N(\lambda I-A)<\infty$ $\quad (\forall\lambda\in\sigma_p(A)\setminus\{0\})$;
> (2) $\forall\varepsilon>0$, $\sigma_p(A)\setminus[-\varepsilon,\varepsilon]$ 只有有限个值.
> 求证: $A$ 是 $H$ 上的紧算子.

## §5 对椭圆型方程的应用

这一节我们来研究下列边值问题:
$$\begin{cases} -\Delta u+U(x)u=f(x) & (x\in\Omega), \\ u|_{\partial\Omega}=0, \end{cases} \qquad (3.5.1)$$
其中 $\Omega\subset\mathbb{R}^n$ 是一个有界的、具有光滑边界的开区域. 给定 $U(x)\in C(\overline{\Omega}), f\in L^2(\Omega)$, 问在什么条件下, 问题 (3.5.1) 是可解的?

历史上, 有许多数学家致力于这个问题的研究, 通常采用位势积分将其化归成积分方程, 再用 Fredholm 理论导出原问题的解. 有了对称紧算子的 Riesz-Schauder 理论, 以及 Sobolev 空间结果以后, 我们便有可能撇开积分算子直接研究椭圆型方程的 Dirichlet 问题, 近代偏微分方程的理论采用后一种途径.

> [!definition]
> 称 $u\in H_0^1(\Omega)$ 是边值问题 (3.5.1) 的一个**弱解**, 是指:
> $$\int_\Omega (\nabla u\cdot\nabla v+U(x)uv)\mathrm{d}x=\int_\Omega fv\mathrm{d}x \quad (\forall v\in H_0^1(\Omega)). \qquad (3.5.2)$$

显然, 若 $u\in H^2(\Omega)$ 满足方程 (3.5.1), 则 $u$ 必是它的一个弱解. 反过来, 在偏微分方程理论中证明了: 方程 (3.5.1) 的弱解必是 $H^2(\Omega)$ 解. 因此, 从泛函分析应用的角度来说, 我们将只关心方程 (3.5.1) 的弱解的存在性.

> [!theorem] 定理 3.5.1
> 若方程 (3.5.1) 的齐次方程只有零解, 则 $\forall f\in L^2(\Omega)$, 方程 (3.5.1) 存在唯一的弱解; 否则, 方程 (3.5.1) 的齐次方程至多存在有穷个线性无关的弱解, 设它们为 $\{\varphi_1,\varphi_2,\cdots,\varphi_n\}$. 这时, 当且仅当
> $$\int_\Omega f\varphi_i\mathrm{d}x=0 \quad (i=1,2,\cdots,n),$$
> 方程 (3.5.1) 有解, 且其解空间的维数是 $n$.

下面转向考察方程 (3.5.1) 对应的特征值问题:
$$\begin{cases} -\Delta u+U(x)u=\lambda u & (x\in\Omega), \\ u|_{\partial\Omega}=0. \end{cases} \qquad (3.5.8)$$
它对应的方程 (3.5.7) 是
$$(I-(\lambda+\lambda_0)K_{\lambda_0}\iota)u=0.$$
应用 Riesz-Schauder 理论以及 Hilbert-Schmidt 定理 (定理 3.4.8), 我们知道 $\sigma(K_{\lambda_0}\iota)\setminus\{0\}$ 是实的, 而且至多有可数个, 记它们为 $\mu_1,\mu_2,\cdots,\mu_j,\cdots$. 又若 $\{\mu_j\}$ 有可数多个不同的值, 则 $\mu_j\to 0\ (j\to\infty)$. 特别是因为
$$(K_{\lambda_0}\iota u,u)_{\lambda_0}>0 \quad (\text{当 } u\neq 0),$$
所以 $\mu_j>0$, 并且 $0 \overline{\in} \sigma_p(K_{\lambda_0}\iota)$. 又由于 $H_0^1(\Omega)$ 是无穷维的, 不难验证 $\{\mu_j\}$ 有可数多个并且 $\mu_j\to 0\ (j\to\infty)$. 不妨设
$$\mu_1 \geqslant \mu_2 \geqslant \cdots \geqslant \mu_j \geqslant \cdots > 0.$$
于是方程 (3.5.8) 的特征值
$$\lambda_j=\frac{1}{\mu_j}-\lambda_0 \quad (j=1,2,\cdots)$$
满足 $\lambda_1 \leqslant \lambda_2 \leqslant \cdots \leqslant \lambda_j \leqslant \cdots$, 以及 $\lambda_j\to\infty$.

最后给出 $\lambda_j$ 的"极小极大"描写, 因为
$$\mu_j=\inf_{E_{j-1}}\sup_{\substack{u\in E_{j-1}^\perp \\ u\neq\theta}}\frac{(K_{\lambda_0}\iota u,u)_{\lambda_0}}{(u,u)_{\lambda_0}},$$
所以
$$\begin{aligned}
\lambda_j &= \frac{1}{\mu_j}-\lambda_0 = \sup_{E_{j-1}}\inf_{\substack{u\in E_{j-1}^\perp \\ u\neq\theta}}\frac{(u,u)_{\lambda_0}}{(K_{\lambda_0}\iota u,u)_{\lambda_0}}-\lambda_0 \\
&= \sup_{E_{j-1}}\inf_{\substack{u\in E_{j-1}^\perp \\ u\neq\theta}}\frac{\int_\Omega(|\nabla u|^2+Uu^2)\mathrm{d}x}{\int_\Omega u^2\mathrm{d}x},
\end{aligned}$$
其中 $E_{j-1}$ 是维数为 $j-1$ 的任意的闭线性子空间 $(j=1,2,\cdots)$.

总结起来, 有如下定理.

> [!theorem] 定理 3.5.2
> 方程 (3.5.8) 的特征值都是实的, 而且有可数个 $\lambda_1 \leqslant \lambda_2 \leqslant \cdots \leqslant \lambda_j \leqslant \cdots$, 适合 $\lambda_j\to\infty$, 并且它们对应的特征函数构成空间 $H_0^1(\Omega)$ 的完备正交集.

## §6 Fredholm 算子

在本章 \S 2 中, 我们曾指出具有连续核的积分方程 (或更一般的二元平方可和的核), 可以利用紧算子的 Fredholm 理论讨论可解性, 然而下列形式的奇异积分方程却不包含在紧算子理论的框架之中:
$$a(z)u(z)+\frac{b(z)}{\pi}\text{P.V.}\int_{S^1}\frac{u(s)}{z-s}\mathrm{d}s=f(z) \quad (z\in S^1), \qquad (3.6.1)$$
其中 $S^1$ 表示平面上的单位圆周, $a,b\in C(S^1), f\in L^2(S^1)$, P.V. 表示按主值意义的积分, 即
$$\text{P.V.}\int_{S^1}\frac{u(s)}{z-s}\mathrm{d}s \triangleq \lim_{\varepsilon\to 0}\int_{\substack{|s-z|\geqslant\varepsilon \\ s\in S^1}}\frac{u(s)}{z-s}\mathrm{d}s.$$

为了讨论形如 (3.6.1) 的方程的可解性, 我们回顾一下本章 \S 2 中关于可解性的讨论. 其实, 算子 $A$ 的紧性作用, 只在下列证明时用到:

(1) $R(T)$ 是闭的, 从而 Fredholm 结论 3 成立;
(2) $\dim N(T)=\dim N(T^*)<\infty$.

现在丢掉紧性条件, 我们直接引入如下定义.

> [!definition] 定义 3.6.1
> 设 $\mathscr{X},\mathscr{Y}$ 是 Banach 空间, $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 称为一个 **Fredholm 算子**, 是指:
> (1) $R(T)$ 是闭的;
> (2) $\dim N(T)<\infty$;
> (3) $\operatorname{codim}R(T)<\infty$.
> $\mathscr{X}\to\mathscr{Y}$ 的一切 Fredholm 算子的全体记作 $\mathscr{F}(\mathscr{X},\mathscr{Y})$, 特别地, 当 $\mathscr{Y}=\mathscr{X}$ 时, 记作 $\mathscr{F}(\mathscr{X})$.

> [!definition] 定义 3.6.2
> 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 令
> $$\operatorname{ind}(T)\triangleq\dim N(T)-\operatorname{codim}R(T),$$
> 并称其为 $T$ 的**指标**.

> [!example] 例 3.6.3
> 若 $A\in\mathfrak{C}(\mathscr{X})$, 则 $T=I-A\in\mathscr{F}(\mathscr{X})$, 并且
> $$\operatorname{ind}(T)=0.$$

> [!example] 例 3.6.4
> 若 $\mathscr{X}=l^2$, $T$ 是 $\mathscr{X}$ 上的左推移算子, 即
> $$T: x=(x_1,x_2,\cdots)\mapsto(x_2,x_3,\cdots),$$
> 则 $T\in\mathscr{F}(\mathscr{X})$, 并且 $\operatorname{ind}(T)=1$. 同理, $T^*$ 是右推移算子, 即
> $$T^*: x=(x_1,x_2,\cdots)\mapsto(0,x_1,x_2,\cdots),$$
> 有 $T^*\in\mathscr{F}(\mathscr{X})$, 并且 $\operatorname{ind}(T^*)=-1$. 一般地, 还有
> $$T^n\in\mathscr{F}(\mathscr{X}), \quad \operatorname{ind}(T^n)=n \quad (n=1,2,\cdots),$$
> 以及
> $$(T^*)^n\in\mathscr{F}(\mathscr{X}), \quad \operatorname{ind}((T^*)^n)=-n \quad (n=1,2,\cdots).$$

下面我们来刻画 Fredholm 算子.

> [!theorem] 定理 3.6.5
> (1) 若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 则必有 $S\in\mathscr{L}(\mathscr{Y},\mathscr{X})$ 以及 $A_1\in\mathfrak{C}(\mathscr{X}), A_2\in\mathfrak{C}(\mathscr{Y})$, 使得
> $$ST=I_x-A_1, \quad TS=I_y-A_2, \qquad (3.6.2)$$
> 其中 $I_x, I_y$ 分别表示 $\mathscr{X}$ 和 $\mathscr{Y}$ 上的恒同算子.
>
> (2) 如果 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 又有 $R_1,R_2\in\mathscr{L}(\mathscr{Y},\mathscr{X})$ 以及 $A_1\in\mathfrak{C}(\mathscr{X}), A_2\in\mathfrak{C}(\mathscr{Y})$, 使得
> $$R_1T=I_x-A_1, \quad TR_2=I_y-A_2, \qquad (3.6.3)$$
> 则 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$.

> [!proof]-
> (1) 考察图 3.6.1, 令
> $$\widetilde{T}[x]=Tx \quad (\forall x\in[x]) \quad (\forall[x]\in\mathscr{X}/N(T)).$$
> 由假设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 从而 $\widetilde{T}: \mathscr{X}/N(T)\to R(T)$ 有连续逆 $\widetilde{T}^{-1}$, 并且存在投影算子 (参看习题 3.2.6 与习题 3.1.10):
> $$\begin{aligned}
> A_1 &: \mathscr{X}\to N(T), \\
> A_2 &: \mathscr{Y}\to \mathscr{Y}/R(T).
> \end{aligned}$$
> 显然 $A_1$ 和 $A_2$ 都是有穷秩的, 从而是紧的. 令
> $$S\triangleq\widetilde{T}^{-1}(I_y-A_2),$$
> 便有
> $$ST=\widetilde{T}^{-1}(I_y-A_2)T=I_x-A_1,$$
> 以及
> $$TS=T\widetilde{T}^{-1}(I_y-A_2)=I_y-A_2.$$
>
> [图 3.6.1 的交换图, 展示了算子 $T$, $S$, $A_1$, $A_2$, $I_x-A_1$, $I_y-A_2$, $\widetilde{T}$, $\widetilde{T}^{-1}$ 之间的关系]
>
> (2) 如果存在 $R_1,R_2$ 及 $A_1,A_2$, 使得 (3.6.3) 式成立, 那么
> $$\begin{aligned}
> N(T) &\subset N(R_1T)=N(I_x-A_1) \\
> &\Longrightarrow \dim N(T)<\infty,
> \end{aligned}$$
> 以及
> $$\begin{aligned}
> R(T) &\supset R(TR_2)=R(I_y-A_2) \\
> &\Longrightarrow \operatorname{codim}R(T) \leqslant \operatorname{codim}R(I_y-A_2)<\infty.
> \end{aligned}$$
> 至于 $R(T)$ 闭性的验证, 可以仿照定理 3.2.4 的证明, 故从略. $\blacksquare$

> [!remark] 注 1
> 满足 (3.6.3) 式的 $R_1,R_2$ 分别称为 $T$ 的左、右**正则化子**. 在商掉紧算子集 $\mathfrak{C}(\mathscr{X})$ (以及 $\mathfrak{C}(\mathscr{Y})$) 意义下, 它们分别是 $T$ 的左、右逆. 在这个意义下, 定理 3.6.5(1) 表明 Fredholm 算子是 $\mathscr{L}(\mathscr{X},\mathscr{Y})$ 中商 $\mathfrak{C}(\mathscr{X})$ (及 $\mathfrak{C}(\mathscr{Y})$) 的可逆算子.

> [!remark] 注 2
> 从定理 3.6.5(2) 容易看出, 若 $R$ 同时是 $T$ 的左、右正则化子, 则 $R$ 本身也是 Fredholm 算子. 特别是由此推出: 若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 则 $\exists S\in\mathscr{F}(\mathscr{Y},\mathscr{X})$, 以及 $A_1\in\mathfrak{C}(\mathscr{X}), A_2\in\mathfrak{C}(\mathscr{Y})$, 使得 (3.6.2) 式成立.

关于 Fredholm 算子的指标有如下性质.

> [!theorem] 定理 3.6.6
> 若 $T_1\in\mathscr{F}(\mathscr{X},\mathscr{Y}), T_2\in\mathscr{F}(\mathscr{Y},\mathscr{Z})$, 其中 $\mathscr{X},\mathscr{Y},\mathscr{Z}$ 都是 Banach 空间, 则 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$, 且
> $$\operatorname{ind}(T_2T_1)=\operatorname{ind}(T_1)+\operatorname{ind}(T_2). \qquad (3.6.4)$$

> [!proof]-
> 由定理 3.6.5(1), $\exists S_1\in\mathscr{F}(\mathscr{Y},\mathscr{X}), S_2\in\mathscr{F}(\mathscr{Z},\mathscr{Y})$, 使得
> $$\begin{cases} S_1T_1=I_x-A_1^{(1)}, \\ T_1S_1=I_y-A_2^{(1)}, \end{cases} \quad \text{及} \quad \begin{cases} S_2T_2=I_y-A_1^{(2)}, \\ T_2S_2=I_z-A_2^{(2)}. \end{cases}$$
> 取 $S\triangleq S_1S_2$, 即得
> $$\begin{aligned}
> S(T_2T_1) &= S_1(S_2T_2)T_1=S_1(I_y-A_1^{(2)})T_1 \\
> &= S_1T_1-S_1A_1^{(2)}T_1 \\
> &= I_x-A_1^{(1)}-S_1A_1^{(2)}T_1=I_x-\text{紧算子}.
> \end{aligned}$$
> 同理可证 $(T_2T_1)S$ 是恒同减去紧算子, 从而 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$.
>
> 现在再证指标公式 (3.6.4). 为此我们先观察图 3.6.2.
>
> 记
> $$\begin{aligned}
> \mathscr{Y}_2 &= R(T_1)\cap N(T_2), & \mathscr{X}_2 &= T_1^{-1}\mathscr{Y}_2, \\
> \mathscr{Y}_1 &= R(T_1)\ominus\mathscr{Y}_2, & \mathscr{Y}_3 &= N(T_2)\ominus\mathscr{Y}_2, \\
> \mathscr{Y}_4 &= \mathscr{Y}/R(T_1)\ominus\mathscr{Y}_3, & \mathscr{Z}_4 &= T_2\mathscr{Y}_4,
> \end{aligned}$$
> 便有
> $$\begin{aligned}
> R(T_2) &\cong \mathscr{Y}/N(T_2)=\mathscr{Y}_1+\mathscr{Y}_4, \\
> \mathscr{X}_2 &\cong \mathscr{Y}_2, \quad \mathscr{Z}_4\cong\mathscr{Y}_4,
> \end{aligned}$$
> 以及
> $$\begin{aligned}
> N(T_2T_1) &= N(T_1)\oplus\mathscr{X}_2, \\
> R(T_2) &= R(T_2T_1)\oplus\mathscr{Z}_4.
> \end{aligned}$$
>
> [图 3.6.2 展示了空间 $\mathscr{X}$, $\mathscr{Y}$, $\mathscr{Z}$ 在算子 $T_1$, $T_2$ 作用下的分解关系图]
>
> 于是, 若记 $T=T_2T_1$, 则有
> $$\begin{aligned}
> \dim N(T) &= \dim N(T_1)+\dim\mathscr{X}_2=\dim N(T_1)+\dim\mathscr{Y}_2, \\
> \operatorname{codim}R(T) &= \operatorname{codim}R(T_2)+\dim\mathscr{Z}_4=\operatorname{codim}R(T_2)+\dim\mathscr{Y}_4, \\
> \operatorname{codim}R(T_1) &= \dim\mathscr{Y}_3+\dim\mathscr{Y}_4, \\
> \dim N(T_2) &= \dim\mathscr{Y}_2+\dim\mathscr{Y}_3.
> \end{aligned}$$
> 联合起来得到
> $$\begin{aligned}
> \operatorname{ind}(T) &= \dim N(T)-\operatorname{codim}R(T) \\
> &= \dim N(T_1)+\dim N(T_2)-\operatorname{codim}R(T_2) \\
> &\quad -\operatorname{codim}R(T_1) \\
> &= \operatorname{ind}(T_1)+\operatorname{ind}(T_2). \qquad \blacksquare
> \end{aligned}$$

> [!theorem] 定理 3.6.7
> 若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 则存在 $\varepsilon>0$, 使得当 $S\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 且 $\|S\|<\varepsilon$ 时, 有
> $$T+S\in\mathscr{F}(\mathscr{X},\mathscr{Y}),$$
> 且有
> $$\operatorname{ind}(T+S)=\operatorname{ind}(T).$$

> [!proof]-
> 由定理 3.6.5(1), $\exists R\in\mathscr{F}(\mathscr{Y},\mathscr{X})$ 及 $A_1\in\mathfrak{C}(\mathscr{X}), A_2\in\mathfrak{C}(\mathscr{Y})$, 使得
> $$RT=I_x-A_1, \quad TR=I_y-A_2. \qquad (3.6.5)$$
> 从而
> $$R(T+S)=I_x-A_1+RS.$$
> 当 $\|S\|<1/\|R\|$ 时, $E_1\triangleq(I_x+RS)^{-1}$ 有界, 因此
> $$E_1R(T+S)=I_x-E_1A_1. \qquad (3.6.6)$$
> 同理, 当 $\|S\|<1/\|R\|$ 时, $E_2\triangleq(I_y+SR)^{-1}$ 有界, 因此
> $$(T+S)RE_2=I_y-A_2E_2. \qquad (3.6.7)$$
> 因为 $E_1A_1\in\mathfrak{C}(\mathscr{X})$ 且 $A_2E_2\in\mathfrak{C}(\mathscr{Y})$, 所以, 由定理 3.6.5(2), 联合 (3.6.6) 式与 (3.6.7) 式便推出
> $$T+S\in\mathscr{F}(\mathscr{X},\mathscr{Y}) \quad \left(\text{当 }\|S\|<\frac{1}{\|R\|}\right).$$
> 因为当 $\|S\|<1/\|R\|$ 时, $E_1$ 存在有界逆, 所以这时
> $$E_1\in\mathscr{F}(\mathscr{X}), \quad \text{且} \quad \operatorname{ind}(E_1)=0. \qquad (3.6.8)$$
> 由 (3.6.6) 式及定理 3.6.6 得
> $$\operatorname{ind}(E_1)+\operatorname{ind}(R)+\operatorname{ind}(T+S)=0, \qquad (3.6.9)$$
> 又由 (3.6.5) 式及定理 3.6.6 得
> $$\operatorname{ind}(R)+\operatorname{ind}(T)=0. \qquad (3.6.10)$$
> 联合 (3.6.8) 式, (3.6.9) 式和 (3.6.10) 式, 即得
> $$\operatorname{ind}(T+S)=\operatorname{ind}(T) \quad \left(\text{当 }\|S\|<\frac{1}{\|R\|}\right). \qquad \blacksquare$$

> [!remark] 注
> 从定理的证明中可直接看出, 定理中的 $\varepsilon$ 有如下估计: 若 $R$ 是 $T$ 的一个正则化子, 则可取 $\varepsilon<1/\|R\|$.

作为例子, 我们来考察本节一开始提到的奇异积分算子. 设 $u\in L^2(S^1)$, 其中 $S^1$ 表示 $\mathbb{R}^2$ 上的单位圆周. 记
$$(Hu)(z)\triangleq\frac{1}{\pi i}\text{P.V.}\int_{S^1}\frac{u(s)}{s-z}\mathrm{d}s \quad (\forall z\in S^1).$$

> [!proposition] 命题 3.6.8
> $H\in\mathscr{L}(L^2(S^1))$.

> [!proof]-
> 首先我们用 Fourier 级数建立 $L^2(S^1)$ 与 $l^2$ 间的等距同构. $\forall u\in L^2(S^1)$, 将它展开成 Fourier 级数
> $$u(e^{i\theta})=\sum_{n=-\infty}^{\infty}c_n e^{in\theta} \quad (0\leqslant\theta<2\pi),$$
> 其中
> $$c_n=\frac{1}{2\pi}\int_0^{2\pi}u(e^{i\theta})e^{-in\theta}\mathrm{d}\theta \quad (n=0,\pm 1,\pm 2,\cdots).$$
> 容易验证:
> $$L^2(S^1)\ni u\mapsto\{c_n\}_{n=-\infty}^{\infty}\in l^2$$
> 是等距同构的. 其次, 注意到
> $$\begin{aligned}
> \frac{e^{i\varphi}}{e^{i\varphi}-e^{i\theta}} &= \frac{1}{2}\left(1+\frac{e^{i\varphi}+e^{i\theta}}{e^{i\varphi}-e^{i\theta}}\right) \\
> &= \frac{1}{2}\left(1+i\cot\frac{\theta-\varphi}{2}\right),
> \end{aligned}$$
> 可见
> $$\begin{aligned}
> (Hu)(e^{i\theta}) &= \frac{1}{2\pi}\text{P.V.}\int_0^{2\pi}\left(1+i\cot\frac{\theta-\varphi}{2}\right)u(e^{i\varphi})\mathrm{d}\varphi \\
> &= c_0+i\widetilde{u}(e^{i\theta}),
> \end{aligned}$$
> 其中
> $$\widetilde{u}(e^{i\theta})=\frac{1}{2\pi}\text{P.V.}\int_0^{2\pi}u(e^{i\varphi})\cot\frac{\theta-\varphi}{2}\mathrm{d}\varphi$$
> 是 $u$ 的**共轭函数**, 它有 Fourier 级数
> $$\widetilde{u}(e^{i\theta})=-i\sum_{n=-\infty}^{\infty}c_n \operatorname{sign}(n)e^{in\theta},$$
> 其中
> $$\operatorname{sign}(n)=\begin{cases} -1, & n<0, \\ 0, & n=0, \\ 1, & n>0. \end{cases}$$
> 因此 $\widetilde{u}\in L^2(S^1)$, 并且 $\|\widetilde{u}\|\leqslant\|u\|$. 此外, 易见
> $$P: u\mapsto\sum_{n=0}^{\infty}c_n e^{in\theta}$$
> 是 $L^2(S^1)$ 上的投影算子. 最后, 注意到关系式
> $$Pu=\frac{1}{2}(u+i\widetilde{u})+\frac{1}{2}c_0=\frac{1}{2}(u+Hu),$$
> 即得
> $$H=2P-I, \qquad (3.6.11)$$
> 所以有 $H\in\mathscr{L}(L^2(S^1))$. $\blacksquare$

> [!remark] 注
> 由 (3.6.11) 式立即得到: 若 $a,b\in C(S^1)$, 则
> $$aI+ibH=(a+ib)P+(a-ib)(I-P). \qquad (3.6.12)$$

> [!lemma] 引理 3.6.9
> $\forall \varphi\in C(S^1)$, 如果定义算子
> $$[\varphi,P]\triangleq\varphi\cdot P-P\varphi\cdot,$$
> 其中 $\varphi\cdot$ 表示 $L^2(S^1)$ 上的乘法算子, $P$ 是命题 3.6.8 的证明中引进的投影算子, 那么
> $$[\varphi,P]\in\mathfrak{C}(L^2(S^1)) \quad (\forall\varphi\in C(S^1)).$$

> [!proof]-
> (1) 若 $\varphi=e^{im\theta}\ (m\in\mathbb{Z})$, 则
> $$\begin{aligned}
> [\varphi,P]u &= \sum_{n=0}^{\infty}c_n e^{i(n+m)\theta}-\sum_{n\geqslant -m}^{\infty}c_n e^{i(m+n)\theta} \\
> &= \sum_{-m\leqslant n\leqslant 0}c_n e^{i(m+n)\theta},
> \end{aligned}$$
> 它是一个有穷秩算子.
>
> (2) 对任意的三角多项式 $\varphi=\sum_{|n|\leqslant N}d_n e^{in\theta}$, 由 (1), $[\varphi,P]$ 也是有穷秩算子.
>
> (3) $\forall\varphi\in C(S^1), \forall\varepsilon>0$, 存在三角多项式 $\varphi_\varepsilon$, 使得
> $$\|\varphi-\varphi_\varepsilon\|_{C(S^1)}<\frac{\varepsilon}{2},$$
> 从而
> $$\begin{aligned}
> \|[\varphi,P]-[\varphi_\varepsilon,P]\|_{\mathscr{L}(L^2(S^1))} \\
> &= \|[\varphi-\varphi_\varepsilon,P]\|_{\mathscr{L}(L^2(S^1))}<\varepsilon.
> \end{aligned}$$
> 于是, 由命题 3.1.2(3), 我们证明了:
> $$[\varphi,P]\in\mathfrak{C}(L^2(S^1)). \qquad \blacksquare$$

对 $\forall\varphi\in C(S^1)$, 我们称
$$\nu_\varphi\triangleq\frac{1}{2\pi}\int_0^{2\pi}\mathrm{d}\arg\varphi(e^{i\theta})$$
为函数 $\varphi$ 关于原点的**环绕数**.

> [!theorem] 定理 3.6.10
> 若 $c,d\in C(S^1)$, 满足 $(c\cdot d)(z)\neq 0\ (\forall z\in S^1)$, 则算子 $T=cP+d(I-P)\in\mathscr{F}(L^2(S^1))$, 并且
> $$\operatorname{ind}(T)=\nu_d-\nu_c,$$
> 其中 $\nu_c$ 和 $\nu_d$ 分别是函数 $c$ 和 $d$ 关于原点的环绕数.

> [!proof]-
> (1) 取 $S=\frac{1}{c}\cdot P+\frac{1}{d}\cdot(I-P)$, 按引理 3.6.9, 它是 $T$ 的正则化子.
>
> (2) 注意到, 由引理 3.6.9,
> $$\begin{aligned}
> T &= c\cdot P+d\cdot(I-P) \\
> &= Pc\cdot P+(I-P)d\cdot(I-P)+K,
> \end{aligned}$$
> 其中 $K\in\mathfrak{C}(L^2(S^1))$. 若用 $l_+^2,l_-^2$ 分别表示 $PL^2(S^1)$ 与 $(I-P)L^2(S^1)$ 按 Fourier 展开对应的 $l^2$ 子空间, 则
> $$Pc\cdot P\in\mathscr{F}(l_+^2), \quad (I-P)d\cdot(I-P)\in\mathscr{F}(l_-^2).$$
> 由假设 $c$ 的关于原点的环绕数是 $\nu_c$, 这表明: $\exists c$ 与 $e^{i\nu_c\theta}$ 间的同伦, 即存在连续映射
> $$F: [0,1]\times S^1\to\mathbb{C}\setminus\{0\},$$
> 使得
> $$F(0,e^{i\theta})=c(e^{i\theta}), \quad F(1,e^{i\theta})=e^{i\nu_c\theta}.$$
> 又因为 $|F|$ 在 $[0,1]\times S^1$ 上不为 $0$, 所以有下界 $\delta>0$, 分割 $[0,1]$ 为 $N$ 等分, 使得在每个小区间 $[t_j,t_{j+1}]$ 上,
> $$|\Delta_j F|\triangleq\max_{t,s\in[t_j,t_{j+1}]}|F(t,e^{i\theta})-F(s,e^{i\theta})|<\frac{1}{\delta}.$$
> 应用定理 3.6.7 及其注, 可得
> $$\operatorname{ind}(Pc\cdot P|_{l_+^2})=\operatorname{ind}(Pe^{i\nu_c\theta}\cdot P|_{l_+^2})=-\nu_c.$$
> 上式最后一个等号是因为 $Pe^{i\nu_c\theta}\cdot P|_{l_+^2}$ 是 $l_+^2$ 上的推移算子. 同理
> $$\begin{aligned}
> \operatorname{ind}((I-P)d\cdot(I-P)|_{l_-^2}) \\
> &= \operatorname{ind}((I-P)e^{i\nu_d\theta}\cdot(I-P)|_{l_-^2})=\nu_d.
> \end{aligned}$$
> 从而 (参看习题 3.6.2)
> $$\operatorname{ind}(T)=\nu_d-\nu_c. \qquad \blacksquare$$

> [!remark] 注
> 定理 3.6.10 的逆命题也是对的, 即如果
> $$c\cdot P+d\cdot(I-P)\in\mathscr{F}(L^2(S^1)),$$
> 那么 $(c\cdot d)(z)\neq 0\ (\forall z\in S^1)$. 参看本书下册第五章.

### 习题

> [!exercise] 3.6.1
> 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y}), A\in\mathfrak{C}(\mathscr{X},\mathscr{Y})$, 求证:
> (1) $T+A\in\mathscr{F}(\mathscr{X},\mathscr{Y})$;
> (2) $\operatorname{ind}(T+A)=\operatorname{ind}(T)$.

> [!exercise] 3.6.2
> 设 $T\in\mathscr{F}(\mathscr{X}), S\in\mathscr{F}(\mathscr{Y})$, 求证:
> (1) $T\oplus S\in\mathscr{F}(\mathscr{X}\oplus\mathscr{Y})$;
> (2) $\operatorname{ind}(T\oplus S)=\operatorname{ind}(T)+\operatorname{ind}(S)$.

> [!exercise] 3.6.3
> 设 $\mathscr{X}\subset\mathscr{Y}$, 并且 $\mathscr{X}\to\mathscr{Y}$ 的嵌入算子是紧的, 又设 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 满足:
> $$\|x\|_{\mathscr{X}}\leqslant c(\|x\|_{\mathscr{Y}}+\|Tx\|_{\mathscr{Y}}) \quad (\forall x\in\mathscr{X}), \qquad (3.6.13)$$
> 其中 $c$ 是一常数. 求证:
> (1) $\dim N(T)<\infty$;
> (2) $R(T)$ 是闭的.

> [!exercise] 3.6.4
> 在上题中, 如果将 (1) 与 (2) 作为假设, 求证: 存在常数 $c>0$, 使得 (3.6.13) 式成立.

> [!exercise] 3.6.5
> 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$, 求证:
> (1) $T^*\in\mathscr{F}(\mathscr{Y}^*,\mathscr{X}^*)$;
> (2) $\operatorname{ind}(T^*)=-\operatorname{ind}(T)$.

> [!exercise] 3.6.6
> 在例 3.6.4 中, 求 $T$ 的左、右正则化子.

> [!exercise] 3.6.7
> 设 $\Omega\subset\mathbb{R}^2$ 是由光滑曲线 $\Gamma$ 围成的区域, $\mathscr{X}\subset C(\overline{\Omega})$ 是由在 $\Omega$ 内解析、在 $\overline{\Omega}$ 上连续的函数组成的闭线性子空间. 求证: 限制算子
> $$R: u(z)\mapsto u(z)|_{z\in\Gamma}$$
> 是 $\mathscr{X}\to C(\Gamma)$ 的 Fredholm 算子, 并求它的指标.

> [!exercise] 3.6.8
> 设 $a_j(x)\in C[0,1]\ (j=1,2,\cdots,n)$,
> $$T=\left(\frac{\mathrm{d}}{\mathrm{d}x}\right)^n+a_1(x)\left(\frac{\mathrm{d}}{\mathrm{d}x}\right)^{n-1}+\cdots+a_n(x),$$
> 求证: $T\in\mathscr{F}(C^n[0,1],C[0,1])$, 并求 $\operatorname{ind}(T)$.

> [!exercise] 3.6.9
> 设 $a(x)\in C[0,1], T=a(x)$, 求证:
> $$T\in\mathscr{F}(C[0,1]) \Longleftrightarrow a(x)\neq 0 \quad (\forall x\in[0,1]).$$

> [!exercise] 3.6.10
> 设 $A\in\mathscr{L}(\mathscr{X})$, 并 $\exists n\in\mathbb{N}$, 使得
> $$I-A^n\in\mathfrak{C}(\mathscr{X}),$$
> 求证: $A\in\mathscr{F}(\mathscr{X})$.

> [!exercise] 3.6.11
> 设 $T_1\in\mathscr{L}(\mathscr{X},\mathscr{Y}), T_2\in\mathscr{L}(\mathscr{Y},\mathscr{Z})$, 使得 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$, 求证:
> $$T_1\in\mathscr{F}(\mathscr{X},\mathscr{Y}) \Longleftrightarrow T_2\in\mathscr{F}(\mathscr{Y},\mathscr{Z}).$$

> [!exercise] 3.6.12
> 设 $D$ 为复平面上的单位圆盘, $\widetilde{H}^2(D)$ 是 $D$ 上的 **Hardy 空间**, 它指在 $D$ 内解析且其 Taylor 系数序列属于 $l^2$ 的函数全体.
> $$(f,g)\triangleq\sum_{n=0}^{\infty}a_n\overline{b}_n \quad (\forall f,g\in\widetilde{H}^2(D)),$$
> 其中
> $$f(z)=\sum_{n=0}^{\infty}a_n z^n, \quad g(z)=\sum_{n=0}^{\infty}b_n z^n \quad (\forall z\in D).$$
> 又记 $S^1=\partial D$, 对 $\forall\varphi\in C(S^1)$, 定义 **Toeplitz 算子** $T_\varphi$ 如下:
> $$T_\varphi=PM_\varphi\iota,$$
> 其中 $P$ 是 $L^2(S^1)\to\widetilde{H}^2(D)$ 的正交投影算子, 即
> $$P: u(e^{i\theta})=\sum_{n=-\infty}^{\infty}c_n e^{in\theta}\mapsto u(z)=\sum_{n=0}^{\infty}c_n z^n \quad (\forall z\in D),$$
> $M_\varphi$ 是 $L^2(S^1)\to L^2(S^1)$ 的乘法算子, 即 $u\mapsto\varphi\cdot u$, 而 $\iota$ 是 $\widetilde{H}^2(D)\to L^2(S^1)$ 的嵌入算子, 即
> $$\iota: u(z)=\sum_{n=0}^{\infty}c_n z^n\mapsto u(e^{i\theta})=\sum_{n=0}^{\infty}c_n e^{in\theta}.$$
> 求证: 若 $\varphi(s)\neq 0\ (\forall s\in S^1)$, 则 $T_\varphi\in\mathscr{F}(\widetilde{H}^2(D))$, 并且
> $$\operatorname{ind}(T_\varphi)=-\frac{1}{2\pi}\int_0^{2\pi}\mathrm{d}\arg\varphi(e^{i\theta}).$$



---



# 第四章 广义函数与 Sobolev 空间

> [!example] 例 4.0.3 (广义微商)
> 在数学本身的发展中, 也时常要求冲破古典分析对一些基本运算 (如求微商和 Fourier 变换等) 使用范围所加的限制. 远在 20 世纪 30 年代, 苏联数学家 Sobolev 为了确定偏微分方程解的存在性和唯一性, 发现如果仅在古典意义下来理解微商及其所对应的方程, 那么一方面会造成很多不必要的限制, 另一方面还排斥了很多近代数学工具使用的可能性. 因而他推广了微商, 引进了广义微商的概念, 提出了广义函数的思想. Sobolev 广义微商的引入, 在偏微分方程发展中揭开了新的一页, 为泛函分析方法应用到微分方程理论建立了桥梁.

以上几方面都使我们看到: 虽然函数概念十分广泛, 但是, 不论从近代科学技术来看, 还是从数学本身要求来看, 都已经不适应很多需要了. 这样一来, 自然就有了扩充函数概念的要求. 我们也已经看到: 问题不仅在于要引进一些理想的函数, 更重要的是要使这些"理想的函数"能够比较自由地进行分析运算, 特别是要使"理想的函数"全部在新的意义下可微, 微商后还是某个"理想的函数"等.

首先我们引进一些记号. 记多重指标 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$, 其中 $\alpha_1,\alpha_2,\cdots,\alpha_n\geqslant 0$ 是整数,

$$\begin{aligned}
|\alpha| &= \sum_{i=1}^{n}\alpha_i, \quad \alpha!=\alpha_1!\alpha_2!\cdots\alpha_n!, \\
x^{\alpha} &= x_1^{\alpha_1}x_2^{\alpha_2}\cdots x_n^{\alpha_n} \quad (\forall x=(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n), \\
\partial^{\alpha} &= \partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\cdots\partial_{x_n}^{\alpha_n},
\end{aligned}$$

而且如果 $\beta\leqslant\alpha$ (系指 $\beta_j\leqslant\alpha_j, j=1,2,\cdots,n$), 则

$$\binom{\alpha}{\beta}=\frac{\alpha!}{\beta!(\alpha-\beta)!}=\binom{\alpha_1}{\beta_1}\binom{\alpha_2}{\beta_2}\cdots\binom{\alpha_n}{\beta_n}.$$

---

## §1 广义函数的概念

广义函数是定义在一类"性质很好"的函数空间上的连续线性泛函. 为此, 先引进这类"性质很好"的函数.

### 1.1 基本空间 $\mathscr{D}(\Omega)$

设 $\Omega\subset\mathbb{R}^n$ 是一个开集, $u\in C(\overline{\Omega})$, 称集合

$$F=\{x\in\Omega \big| u(x)\neq 0\}$$

的闭包 (关于 $\Omega$) 为 $u$ 的关于 $\Omega$ 的**支集**, 记作 $\operatorname{supp}(u)$. 换句话说, 连续函数 $u$ 的支集是在此集外 $u$ 恒为 $0$ 的相对于 $\Omega$ 的最小闭集.

对于整数 $k\geqslant 0$ (可以是 $\infty$), $C_0^k(\Omega)$ 表示支集在 $\Omega$ 内紧的全体 $C^k(\overline{\Omega})$ 函数所组成的集合, 于是

$$C_0^{\infty}(\Omega)\subset\cdots\subset C_0^{k+1}(\Omega)\subset C_0^k(\Omega)\subset\cdots\subset C_0^0(\Omega).$$

下例表明 $C_0^{\infty}(\Omega)$ 是非空的.

> [!example] 例 4.1.1
> 设
> $$j(x)\triangleq\begin{cases} C_n e^{-\frac{1}{1-|x|^2}}, & |x|<1, \\
> 0, & |x|\geqslant 1, \end{cases} \qquad (4.1.1)$$
> 其中
> $$C_n\triangleq\left(\int_{|x|\leqslant 1}e^{-\frac{1}{1-|x|^2}}\mathrm{d}x\right)^{-1}$$
> 是一个仅依赖于维数的常数, 那么 $j(x)\in C_0^{\infty}(\mathbb{R}^n)$, 并且
> $$\int_{\mathbb{R}^n}j(x)\mathrm{d}x=1.$$
> 从它出发, 可以得到许多 $C_0^{\infty}(\mathbb{R}^n)$ 的函数, $\forall\delta>0$, 令
> $$j_\delta(x)\triangleq\frac{1}{\delta^n}j\left(\frac{x}{\delta}\right), \qquad (4.1.2)$$

我们有如下命题.

> [!proposition] 命题 4.1.2
> 设 $u(x)$ 是一个可积函数, 并在 $\Omega$ 的一个紧子集 $K$ 外恒为 $0$, 则当 $\delta>0$ 足够小时, 函数
> $$u_\delta(x)\triangleq\int_\Omega u(y)j_\delta(x-y)\mathrm{d}y \qquad (4.1.3)$$
> 是 $C_0^{\infty}(\Omega)$ 的函数.

> [!proof]- 证
> 记 $K_\delta\triangleq\{x\in\mathbb{R}^n \big| \operatorname{dist}(x,K)\leqslant\delta\}$, 便有当 $\delta$ 足够小时, $K_\delta\subset\Omega$ 且 $u_\delta(x)=0(x\overline{\in}K_\delta)$ (见图 4.1.1), 而
> $$\partial^{\alpha}u_\delta(x)=\int_\Omega u(y)\partial^{\alpha}j_\delta(x-y)\mathrm{d}y \quad (\forall x\in K_\delta). \qquad (4.1.4)$$
> [图 4.1.1 展示了 $\Omega$, $K$, $K_\delta$, 以及 $B(x,\delta)$ 之间的关系示意图]
> 这是因为, 例如说对指标 $\alpha_0=(1,0,\cdots,0)$,
> $$\begin{aligned}
> \partial^{\alpha_0}u_\delta(x) &= \lim_{h\to 0}\int_\Omega\frac{1}{h}[j_\delta(x+he_1-y)-j_\delta(x-y)]u(y)\mathrm{d}y \\
> &= \lim_{h\to 0}\int_\Omega\partial^{\alpha_0}j_\delta(x+\theta he_1-y)u(y)\mathrm{d}y,
> \end{aligned}$$
> 其中 $\theta=\theta(x,y)\in(0,1), e_1=(1,0,\cdots,0)\in\mathbb{R}^n$, 利用 $j_\delta$ 的连续可微性, $\exists$ 常数 $M_{\alpha_0}$, 使得
> $$|\partial^{\alpha_0}j_\delta(z)|\leqslant M_{\alpha_0} \quad (\forall z\in\mathbb{R}^n).$$
> 再应用 Lebesgue 控制收敛定理, 即得
> $$\begin{aligned}
> \partial^{\alpha_0}u_\delta(x) &= \int_\Omega\lim_{h\to 0}\partial^{\alpha_0}j_\delta(x+\theta he_1-y)u(y)\mathrm{d}y \\
> &= \int_\Omega\partial^{\alpha_0}j_\delta(x-y)u(y)\mathrm{d}y.
> \end{aligned}$$
> 这显然是不可能的. ■

### 1.3 广义函数的收敛性

在 $\mathscr{D}'(\Omega)$ 上可以规定加法与数乘:

$$\langle (\lambda_1 f_1 + \lambda_2 f_2), \varphi \rangle = \lambda_1 \langle f_1, \varphi \rangle + \lambda_2 \langle f_2, \varphi \rangle$$

$$(\forall \varphi \in \mathscr{D}(\Omega), \forall \lambda_1, \lambda_2 \in \mathbb{R}),$$

从而 $\mathscr{D}'(\Omega)$ 构成一个线性空间. 现在在 $\mathscr{D}'(\Omega)$ 上引入 $*$ 弱收敛.

> [!definition] 定义 4.1.14
> 称 $\{f_j\} \subset \mathscr{D}'(\Omega)*$ **弱收敛**到 $f_0 \in \mathscr{D}'(\Omega)$, 是指:
> $$\langle f_j, \varphi \rangle \to \langle f_0, \varphi \rangle \quad (j \to \infty) \quad (\forall \varphi \in \mathscr{D}(\Omega)).$$

在此我们强调一下: 广义函数意义下的收敛是十分弱的收敛. 下面举几个例子来看一下.

> [!example] 例 4.1.15
> 在 $\mathbb{R}$ 上,
> $$f_j(x) = \frac{1}{\pi} \cdot \frac{\sin jx}{x} \quad (j = 1, 2, \cdots)$$
> 是一串 $L^1_{\mathrm{loc}}(\mathbb{R})$ 函数, 从而可以看成是广义函数列. 我们有
> $$f_j \to \delta(\mathscr{D}'(\Omega)) \quad (j \to \infty).$$

> [!proof]- 证
> 因为有
> $$\lim_{T \to \infty} \frac{1}{\pi} \int_{-T}^{T} \frac{\sin jx}{x} \mathrm{d}x = 1,$$
> 所以 $\forall \varphi \in \mathscr{D}(\mathbb{R})$, 存在 $T_0 > 0$, 使得 $\mathrm{supp}(\varphi) \subset [-T_0, T_0]$. 一方面, 当 $T > T_0$ 时,
> $$\int_{-\infty}^{\infty} f_j(x) \cdot \varphi(x) \mathrm{d}x = \int_{-T}^{T} f_j(x) \cdot \varphi(x) \mathrm{d}x;$$
> 另一方面, $\forall \varepsilon > 0$, 取 $T_1$ 足够大, 以致 $T > T_1$ 时,
> $$\left| \frac{1}{\pi} \int_{-T}^{T} \frac{\sin jx}{x} \mathrm{d}x - 1 \right| < \frac{\varepsilon}{2}.$$
> 从而当 $T > \max\{T_0, T_1\}$ 时,
> $$|\langle f_j, \varphi \rangle - \varphi(0)| \leqslant \left| \frac{1}{\pi} \int_{-T}^{T} \frac{\sin jx}{x} [\varphi(x) - \varphi(0)] \mathrm{d}x \right| + \frac{\varepsilon}{2} |\varphi(0)|$$
> $$= \frac{1}{\pi} \left| \int_{0}^{T} \sin jx \frac{\varphi(x) + \varphi(-x) - 2\varphi(0)}{x} \mathrm{d}x \right| + \frac{\varepsilon}{2} |\varphi(0)|.$$
> 固定 $T$, 由 Riemann-Lebesgue 引理, 存在正整数 $n_0$, 当 $j > n_0$ 时,
> $$\frac{1}{\pi} \left| \int_{0}^{T} \sin jx \frac{\varphi(x) + \varphi(-x) - 2\varphi(0)}{x} \mathrm{d}x \right| < \frac{\varepsilon}{2},$$
> 于是得 $\langle f_j, \varphi \rangle \to \varphi(0) = \langle \delta, \varphi \rangle (j \to \infty) (\forall \varphi \in \mathscr{D}(\mathbb{R}))$. ■

> [!example] 例 4.1.16
> 设 $j_\delta(x)$ 为例 4.1.1 中定义的函数, $\delta > 0$, 则当 $\delta \to 0$ 时, $j_\delta$ 作为广义函数列收敛到 $\delta(\mathscr{D}'(\mathbb{R}^n))$. 又若用 $\delta_{x_0}$ 表示广义函数:
> $$\langle \delta_{x_0}, \varphi \rangle = \varphi(x_0) \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 则 $j_\delta(x - x_0) \to \delta_{x_0}$ $(\delta \to 0)$.

> [!proof]- 证
> 直接利用定理 4.1.3. ■

对于在 $x_0 = \theta$ 点的 $\delta$ 函数, 在不会产生混淆的情况下, 也可以略去下标, 直接写成 $\delta$.

> [!example] 例 4.1.17
> 设 $f_j(x)$ 是 $\Omega$ 上的一串局部可积函数列, 并且对任意相对于 $\Omega$ 的紧集 $K$, 存在常数 $M_k$, 使得
> $$|f_j(x)| \leqslant M_k \quad (\forall x \in K, j = 0, 1, 2, \cdots),$$
> 并且 $f_j(x) \to f_0(x) (j \to \infty)(\mathrm{a.e.} x \in \Omega)$, 则作为广义函数列 $f_j$,
> $$\langle f_j, \varphi \rangle = \int_{\Omega} f_j(x) \varphi(x) \mathrm{d}x \quad (j = 0, 1, 2, \cdots),$$
> 在广义函数意义下收敛到 $f_0$.

> [!proof]- 证
> 由 Lebesgue 控制收敛定理直接得到. ■

> [!example] 例 4.1.18
> 设 $f_1(x) = e^{-\pi|x|^2}$, 令
> $$f_j(x) = j^{\frac{n}{2}} f_1(\sqrt{j}x) = j^{\frac{n}{2}} e^{-j\pi|x|^2} \quad (j = 2, 3, \cdots),$$
> 则有
> $$\langle f_j, \varphi \rangle \to \langle \delta, \varphi \rangle \quad (j \to \infty)(\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 其中 $f_j$ 是函数 $f_j(x)$ 所对应的广义函数 $(j = 1, 2, 3, \cdots)$.

证明从略, 留作习题.

---

**习题**

4.1.1 设 $1 \leqslant p < \infty$, 求证: $C_0^{\infty}(\Omega)$ 在 $L^p(\Omega)$ 中稠密.


## §2 B₀ 空间

> [!definition] 定义 4.2.1
> 设 $\mathscr{X}$ 是一个线性空间, 称它是**可数范数空间**(或 $B_0^*$ 空间), 是指在它上面有可数个半范数 $\{\|\cdot\|_m\}_{m=1}^{\infty}$, 满足:
> (1) $\|x + y\|_m \leqslant \|x\|_m + \|y\|_m \quad (\forall x, y \in \mathscr{X})$;
> (2) $\|\lambda x\|_m = |\lambda| \|x\|_m \quad (\lambda \in \mathbb{R}, x \in \mathscr{X})$;
> (3) $\|x\|_m \geqslant 0, \|\theta\|_m = 0 \quad (\forall x \in \mathscr{X})$.
> (4) $\|x\|_m = 0 \quad (m = 1, 2, \cdots) \Leftrightarrow x = \theta$.

> [!remark] 注 1
> 实际上每个 $\|\cdot\|_m$ 是半范数.

> [!remark] 注 2
> 在可数范数空间定义中, 可数个半范数可以换成满足下列条件的可数个半范数:
> $$\|x\|'_1 \leqslant \|x\|'_2 \leqslant \cdots \leqslant \|x\|'_m \leqslant \cdots \quad (\forall x \in \mathscr{X}).$$
> 事实上, 只需令
> $$\|x\|'_m = \max(\|x\|_1, \cdots, \|x\|_m) \quad (\forall x \in \mathscr{X}).$$

> [!definition] 定义 4.2.2
> 在线性空间 $\mathscr{X}$ 上给定两组可数个半范数
> $$\{\|\cdot\|_m\}_{m=1}^{\infty} \quad \text{与} \quad \{\|\cdot\|'_m\}_{m=1}^{\infty},$$
> 如果它们导出相同的收敛性, 则称它们是**等价的**.

> [!proposition] 命题 4.2.3
> 在线性空间 $\mathscr{X}$ 上, 为了两组可数个半范数
> $$\{\|\cdot\|_m\}_{m=1}^{\infty} \quad \text{与} \quad \{\|\cdot\|'_m\}_{m=1}^{\infty}$$
> 是等价的, 必须且仅须: $\forall m \in \mathbb{N}, \exists m' \in \mathbb{N}$ 及 $\exists C_{mm'} > 0$, 使得
> $$\|x\|_m \leqslant C_{mm'} \|x\|'_{m'} \quad (\forall x \in \mathscr{X}),$$
> 并且 $\forall n' \in \mathbb{N}, \exists n \in \mathbb{N}$ 及 $\exists C'_{n'n} > 0$, 使得
> $$\|x\|'_{n'} \leqslant C'_{n'n} \|x\|_n \quad (\forall x \in \mathscr{X}).$$

证明从略, 留作习题.

> [!proposition] 命题 4.2.4
> 每个 $B_0^*$ 空间 $\mathscr{X}$ 必是一个 $F^*$ 空间, 即若 $\{\|\cdot\|_m\}_{m=1}^{\infty}$ 是可数个半范数, 则
> $$\|x\| = \sum_{m=1}^{\infty} \frac{1}{2^m} \cdot \frac{\|x\|_m}{1 + \|x\|_m} \quad (\forall x \in \mathscr{X})$$
> 是一个准范数, 并且 $\|\cdot\|$ 导出的收敛性与 $\{\|\cdot\|_m\}_{m=1}^{\infty}$ 导出的收敛性一致.

> [!example] 例 4.2.5
> $\mathscr{D}_K$ 是 $B_0^*$ 空间, 其可数范数 $\|\cdot\|_m$ 按 (4.2.1) 式规定.

> [!example] 例 4.2.6 $\mathscr{E}(\Omega)$
> 设 $\Omega$ 是 $\mathbb{R}^n$ 中的任意开集, 又设 $K_m$ 是一串相对于 $\Omega$ 的紧集, 适合
> $$K_1 \subset \mathring{K}_2 \subset K_2 \subset \mathring{K}_3 \subset \cdots \subset K_m \subset \cdots \subset \Omega, \quad \bigcup_{m=1}^{\infty} K_m = \Omega,$$
> 并令
> $$\|\varphi\|_m = \sum_{|\alpha| \leqslant m} \max_{x \in K_m} |\partial^{\alpha}\varphi(x)| \quad (m = 1, 2, \cdots).$$
> 用 $\mathscr{E}(\Omega)$ 表示带有可数范数 $\{\|\varphi\|_m\}_{m=1}^{\infty}$ 的线性空间 $C^{\infty}(\Omega)$, 则 $\mathscr{E}(\Omega)$ 是一个 $B_0^*$ 空间 (易证). 按定义, 为了 $\varphi_j \to 0(\mathscr{E}(\Omega))$, 必须且仅须 $\forall \varepsilon > 0, \forall m \in \mathbb{N}, \exists N = N(\varepsilon, m)$, 使得
> $$\max_{x \in K_m} |\partial^{\alpha}\varphi_j(x)| < \varepsilon \quad (\forall |\alpha| \leqslant m, \forall j > N),$$
> 或者说, 在每一个相对于 $\Omega$ 的紧集 $K_m$ 上, 直到 $m$ 次导数一致收敛于 $0$.

> [!remark] 注
> $\mathscr{E}(\Omega)$ 上的收敛性与紧集列 $\{K_m\}$ 的选择无关, 即按不同的紧集列定义出的两组可数个半范数是等价的. 其证明留作习题.

> [!example] 例 4.2.7 $\mathscr{S}(\mathbb{R}^n)$
> 用 $\mathscr{S}(\mathbb{R}^n)$ 表示集合
> $$\{\varphi \in C^{\infty}(\mathbb{R}^n) | \sup_{x \in \mathbb{R}^n} |(1 + |x|^2)^{\frac{k}{2}} \partial^{\alpha}\varphi(x)| \leqslant M_{k,\alpha} < \infty$$
> $$\qquad \qquad (k, |\alpha| = 0, 1, 2, \cdots)\}.$$
> 定义半范数为
> $$\|\varphi\|_m = \sup_{\substack{|\alpha| \leqslant m \\ x \in \mathbb{R}^n}} |(1 + |x|^2)^{\frac{m}{2}} \partial^{\alpha}\varphi(x)| \quad (m = 0, 1, 2, \cdots).$$
> $\mathscr{S}(\mathbb{R}^n)$ 上的函数称为**速降函数**, 其任意阶导数在无穷远处比任何负幂次下降得都快. 确切地说, 对任意非负整数 $m$ 及多重指标 $\alpha$, 都有
> $$\lim_{|x| \to \infty} (1 + |x|^2)^{\frac{m}{2}} |\partial^{\alpha}\varphi(x)| = 0.$$

> [!definition] 定义 4.2.8 (完备性)
> 一个 $B_0^*$ 空间 $\mathscr{X}$ 称为是**完备的**, 是指其中的任何基本列都是收敛的. 完备的 $B_0^*$ 空间称为 $B_0$ 空间.

> [!example] 例 4.2.9
> $\mathscr{S}(\mathbb{R}^n)$ 是 $B_0$ 空间.

> [!proof]- 证
> 设 $\{\varphi_\nu(x)\}$ 是 $\mathscr{S}(\mathbb{R}^n)$ 中的一个基本列. 由定义, 对 $\forall m \in \mathbb{N}$ 及 $\forall \varepsilon > 0, \exists N = N(m, \varepsilon)$, 当 $\mu, \nu > N$ 时,
> $$\sup_{\substack{|\alpha| \leqslant m \\ x \in \mathbb{R}^n}} (1 + |x|^2)^{\frac{m}{2}} |\partial^{\alpha}(\varphi_\mu - \varphi_\nu)(x)| < \varepsilon. \qquad (4.2.2)$$
> (1) 因对每个 $m$, $\{\|\varphi_\nu\|_m\}$ 是有界的, 故必存在常数 $M_m$, 使得
> $$\sup_{\substack{|\alpha| \leqslant m \\ x \in \mathbb{R}^n}} (1 + |x|^2)^{\frac{m}{2}} |\partial^{\alpha}\varphi_\nu(x)| \leqslant M_m \quad (\nu = 1, 2, \cdots),$$
> 从而
> $$|\partial^{\alpha}\varphi_\nu(x)| \leqslant \frac{M_m}{(1 + |x|^2)^{m/2}}. \qquad (4.2.3)$$
> 此外, 在任意有界闭球 $|x| \leqslant R$ 上, $\{\partial^{\alpha}\varphi_\nu(x)\}$ 依一致范数是基本序列. 所以在 $|x| \leqslant R$ 上, $\{\partial^{\alpha}\varphi_\nu(x)\}$ 有一个一致极限 $\psi_\alpha(x)$, 满足
> $$|\psi_\alpha(x)| \leqslant \frac{M_m}{(1 + |x|^2)^{m/2}} \quad (|\alpha| \leqslant m). \qquad (4.2.4)$$
> (2) $\psi_\alpha(x) = \partial^{\alpha}\psi_0(x)$. 其实我们只要证明
> $$\psi_{(1,0,\cdots,0)}(x) = \partial_{x_1}\psi_0(x)$$
> 就够了, 因为其余部分用归纳法递推即可. 事实上, 对任意的 $R > 0$, 当 $|x| \leqslant R$ 时, 我们有
> $$\partial_{x_1}\varphi_\nu(x) \rightrightarrows \psi_{(1,0,\cdots,0)}(x) \quad (\nu \to \infty),$$
> 以及
> $$\varphi_\nu(x) \rightrightarrows \psi_0(x) \quad (\nu \to \infty).$$
> 对 $\forall \varepsilon > 0$, 取 $M'_1 > 0$, 及 $N_0 \in \mathbb{N}$, 使得
> $$\int_{|x_1| > M'_1} \frac{\mathrm{d}x_1}{(1 + |x_1|^2)^{1/2}} < \frac{\varepsilon}{4M_1},$$
> 以及
> $$|\psi_{(1,0,\cdots,0)}(x) - \partial_{x_1}\varphi_\nu(x)| < \frac{\varepsilon}{4M'_1} \quad (|x| \leqslant M'_1, \nu > N_0),$$
> 便有
> $$\left|\int_{-\infty}^{x_1} \psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) \mathrm{d}x' - \varphi_\nu(x_1, x_2, \cdots, x_n)\right|$$
> $$= \left|\int_{-\infty}^{x_1} [\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) - \partial_{x_1}\varphi_\nu(x', x_2, \cdots, x_n)] \mathrm{d}x'\right|$$
> $$\leqslant \int_{|x'| > M'_1} |\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n)| \mathrm{d}x'$$
> $$+ \int_{|x'| > M'_1} |\partial_{x_1}\varphi_\nu(x', x_2, \cdots, x_n)| \mathrm{d}x'$$
> $$+ \int_{|x'| \leqslant M'_1} |\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) - \partial_{x_1}\varphi_\nu(x', x_2, \cdots, x_n)| \mathrm{d}x'$$
> $$< 2M_1 \cdot \frac{\varepsilon}{4M_1} + 2M'_1 \cdot \frac{\varepsilon}{4M'_1} = \varepsilon.$$
> 从而
> $$\psi_0(x) = \int_{-\infty}^{x_1} \psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) \mathrm{d}x',$$
> 即
> $$\psi_{(1,0,\cdots,0)}(x) = \partial_{x_1}\psi_0(x).$$
> 这也同时证明了 $\psi_0(x) \in \mathscr{S}(\mathbb{R}^n)$.
> (3) $\|\varphi_\nu - \psi_0\|_m \to 0 (\nu \to \infty)$. 事实上, 对 $\forall \varepsilon > 0, \exists R > 0$, 使得当 $|x| > R$ 时,
> $$\sup_{|\alpha| \leqslant m} |\partial^{\alpha}(\varphi_\nu(x) - \psi_0(x))| \leqslant \frac{M_m}{(1 + |x|^2)^{m/2}} < \varepsilon.$$
> 再确定 $N$, 使得当 $\nu > N$ 时, 在 $|x| \leqslant R$ 上有
> $$\sup_{|\alpha| \leqslant m} |\partial^{\alpha}(\varphi_\nu(x) - \psi_0(x))| < \varepsilon.$$
> 从而
> $$\partial^{\alpha}\varphi_\nu(x) \rightrightarrows \partial^{\alpha}\psi_0(x) \quad (\nu \to \infty, \forall x \in \mathbb{R}^n).$$
> 因此, 在 (4.2.2) 式中令 $\mu \to \infty$, 即得
> $$\|\varphi_\nu - \psi_0\| \leqslant \varepsilon \quad (\forall \nu > N).$$
> 于是空间 $\mathscr{S}(\mathbb{R}^n)$ 是完备的. ■

注意, $\mathscr{D}(\Omega)$ 不是 $B_0^*$ 空间. 但是关于 $\mathscr{D}(\Omega)$ 的收敛性我们有如下命题.

> [!proposition] 命题 4.2.10
> 为了 $\varphi_\nu \to \varphi_0(\mathscr{D}(\Omega))$, 必须且仅须存在紧集 $K \subset \Omega$, 使得 $\varphi_0, \varphi_\nu \subset \mathscr{D}_K$, 而且
> $$\|\varphi_\nu - \varphi_0\|_{m,k} \to 0 \quad (\nu \to \infty, m = 1, 2, \cdots),$$
> 其中 $\|\varphi\|_{m,k}$ 是 $\mathscr{D}_k$ 上的可数范数.

证明从略, 留作习题.

正如在本章 §1 中见到的那样, $\mathscr{D}'(\Omega)$ 表示广义函数全体, 它是 $\mathscr{D}(\Omega)$ 的共轭空间. 对于 $\mathscr{D}_K(\Omega), \mathscr{E}(\Omega), \mathscr{S}(\mathbb{R}^n)$, 我们也要考虑相应的共轭空间, 分别记作 $\mathscr{D}'_K(\Omega), \mathscr{E}'(\Omega), \mathscr{S}'(\mathbb{R}^n)$, 特别当 $\Omega = \mathbb{R}^n$ 时, 简单地记作 $\mathscr{D}'_K, \mathscr{E}', \mathscr{S}'$. 显然有

$$\mathscr{E}' \subset \mathscr{S}' \subset \mathscr{D}'_K.$$

> [!lemma] 引理 4.2.11
> 设 $\mathscr{X}$ 是一个 $B_0$ 空间. 为了 $\mathscr{X}$ 上的线性泛函 $f$ 是连续的, 必须且仅须 $\exists m \in \mathbb{N}$ 及 $M_m > 0$, 使得
> $$|\langle f, \varphi \rangle| \leqslant M_m \|\varphi\|_m \quad (\forall \varphi \in \mathscr{X}).$$

> [!proof]- 证
> 充分性显然. 必要性用反证法. 倘若不然, 对 $\forall n \in \mathbb{N}, \exists x_n \in \mathscr{X}$, 使得
> $$|\langle f, x_n \rangle| > n\|x_n\|_n. \qquad (4.2.5)$$
> (1) 如果 $\exists N \in \mathbb{N}$, 使得 $\|x_n\|_n \neq 0 (\forall n \geqslant N)$, 令
> $$y_n \triangleq \frac{x_n}{n\|x_n\|_n} \quad (n \geqslant N),$$
> 那么
> $$\|y_n\|_p = \frac{\|x_n\|_p}{n\|x_n\|_n} \leqslant \frac{1}{n} \quad (\text{当 } n \geqslant \max(N, p)).$$
> 故 $y_n \to \theta (n \to \infty)$. 但 $|\langle f, y_n \rangle| > 1 (n \geqslant N)$, 这与 $f$ 的连续性矛盾.
> (2) 如果存在 $\{n_i\}_{i=1}^{\infty}$, 使得 $\|x_{n_i}\|_{n_i} = 0 (i = 1, 2, \cdots)$, 那么有 $|\langle f, x_{n_i} \rangle| > 0$, 令
> $$y_{n_i} = \frac{x_{n_i}}{\langle f, x_{n_i} \rangle} \quad (i = 1, 2, \cdots),$$
> 便有 $\langle f, y_{n_i} \rangle = 1$, 但 $\|y_{n_i}\|_{n_i} = 0 (i = 1, 2, \cdots)$. 这也与 $f$ 的连续性矛盾. ■

> [!theorem] 定理 4.2.12
> 任意 $B_0$ 空间 $\mathscr{X}$ 具有足够多的连续线性泛函.

> [!proof]- 证
> 若 $f_0$ 在 $\mathscr{X}$ 的一个线性闭子空间 $\mathscr{X}_0$ 上有定义且连续线性, 则存在半范数 $\|\cdot\|_m$ 及常数 $M_m > 0$, 使得
> $$|\langle f_0, x \rangle| \leqslant M_m \|x\|_m \quad (\forall x \in \mathscr{X}_0).$$
> 对于半范数 $\|\cdot\|_m$, 应用 Hahn-Banach 定理, $f_0$ 可以扩张到全空间 $\mathscr{X}$, 记做 $f$, 使得 $f|_{\mathscr{X}_0} = f_0$, 且
> $$|\langle f, x \rangle| \leqslant M_m \|x\|_m \quad (\forall x \in \mathscr{X}).$$
> 从而 $f \in \mathscr{X}^*$, 即得结论. ■

> [!proposition] 命题 4.2.13
> 如果有一个 $B_0$ 空间 $\mathscr{X}$, 满足 $\mathscr{D}(\Omega) \subset \mathscr{X}$, 即 $\mathscr{D}(\Omega) \subset \mathscr{X}$, 并且
> $$\varphi_j \to \varphi_0 (\mathscr{D}(\Omega)) \Longrightarrow \varphi_j \to \varphi_0 (\mathscr{X}),$$
> 那么 $\mathscr{X}$ 上的任意一个线性连续泛函 $f$, 必有 $f \in \mathscr{D}'(\Omega)$.

> [!example] 例 4.2.14
> $\mathscr{E}(\Omega)$ 或 $\mathscr{S}(\mathbb{R}^n)$ 上的每个线性连续泛函 $f$ 都是 $\mathscr{D}(\Omega)$ 或 $\mathscr{D}(\mathbb{R}^n)$ 上的广义函数, 即
> $$\mathscr{E}'(\Omega) \subset \mathscr{D}'(\Omega), \quad \mathscr{S}'(\mathbb{R}^n) \subset \mathscr{D}'(\mathbb{R}^n).$$

> [!remark] 注
> 在文献中, 常把 $\mathscr{E}'(\Omega)$ 中的元素称为 $\Omega$ 上的**紧支广义函数**, $\mathscr{S}'(\mathbb{R}^n)$ 中的元素称为 $\mathbb{R}^n$ 上的**缓增广义函数**.

下面我们就 $f \in \mathscr{S}'$ 时的积分表示来进行讨论.

> [!proposition] 命题 4.2.15
> 设 $f \in \mathscr{S}'$, 则必存在非负整数 $q$ 及 $u \in L^2(\mathbb{R}^n)$, 使得
> $$\langle f, \varphi \rangle = \int_{\mathbb{R}^n} u(x) (1 + |x|^2)^{\frac{q}{2}} \partial^{\alpha} \varphi(x) \mathrm{d}x$$
> $$\qquad \qquad (\forall \varphi \in \mathscr{S}(\mathbb{R}^n)). \qquad (4.2.6)$$

> [!proof]- 证
> 定义: $\mathscr{S} \to \mathscr{S}$
> $$\psi \mapsto (1 + |x|^2)^{\frac{m}{2}} \psi(x), \qquad (4.2.7)$$
> 其中 $m = 0, 1, 2, \cdots$. 则命题的证明只要对 $m$ 用归纳法即可.
> 对于 $m = 0$, 定义泛函:
> $$\langle g, \psi \rangle = \langle f, \psi \cdot (1 + |x|^2)^{-\frac{m}{2}} \rangle \quad (\forall \psi \in \mathscr{S}),$$
> 利用引理 4.2.11 的证法即得结论. ■

> [!remark] 注 1
> 如果 $f \in \mathscr{S}'$, 则 $f$ 的积分表示中, 实际上是对应 $u_\alpha \in L^2(\mathbb{R}^n)$, 以及偶数 $m$, 使得
> $$\langle f, \varphi \rangle = \sum_{|\alpha| \leqslant m} \int_{\Omega} u_\alpha(x) \partial^{\alpha}\varphi(x) \mathrm{d}x.$$

> [!remark] 注 2
> 从等式 (4.2.6) 可看出, $\mathscr{S}'$ 中的广义函数实际上是对 $\mathscr{S}$ 中的函数, 在微商增长性受到某种限制的意义下, 允许**多项式增长**.

---

**习题**

4.2.1 验证: 在例 4.2.6 中, $\mathscr{E}(\Omega)$ 上的收敛性与紧集列 $\{K_m\}$ 的特殊选择无关.

4.2.2 设 $\|\cdot\|_m$ 是 $\mathscr{D}(\Omega)$ 上的一列半范数, 适合:
$$\|\cdot\|_1 \leqslant \|\cdot\|_2 \leqslant \cdots \leqslant \|\cdot\|_m \leqslant \cdots,$$
并且 $\|\varphi\|_m = 0 (\forall m)$ 当且仅当 $\varphi = \theta$. 求证: 在 $\mathscr{D}(\Omega)$ 上定义距离
$$d(\varphi, \psi) = \sum_{m=1}^{\infty} \frac{1}{2^m} \cdot \frac{\|\varphi - \psi\|_m}{1 + \|\varphi - \psi\|_m},$$
那么 $\mathscr{D}(\Omega)$ 是 $F^*$ 空间.

## §3 广义函数的运算

### 3.1 广义微商

设 $\Omega = (a, b) \subset \mathbb{R}$, $f \in C^1(\Omega)$, $\varphi \in \mathscr{D}(\Omega)$. 利用分部积分法得到

$$\int_{a}^{b} f'(x) \cdot \varphi(x) \mathrm{d}x = -\int_{a}^{b} f(x) \cdot \varphi'(x) \mathrm{d}x.$$

在等式左边 $f'(x)$ 是 $f$ 的导函数, 而在等式右边, 仅涉及 $f$ 本身. 于是我们想到, 可以通过等式右端来定义 $f$ 的广义导数. 对于多元函数, 情况完全一样.

> [!definition] 定义 4.3.1
> 设 $\alpha$ 是多重指标, $f \in \mathscr{D}'(\Omega)$, 称广义函数 $g \in \mathscr{D}'(\Omega)$ 是 $f$ 的 $\alpha$ 阶**广义微商**(弱微商): $g = \widetilde{\partial}^{\alpha}f$, 如果
> $$\langle g, \varphi \rangle = (-1)^{|\alpha|} \langle f, \partial^{\alpha}\varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\Omega)). \qquad (4.3.1)$$

> [!remark] 注 1
> 若 $f(x) \in C^1(\Omega)$, 依自然对应:
> $$\langle f, \varphi \rangle = \int_{\Omega} f(x) \varphi(x) \mathrm{d}x \quad (\forall \varphi \in \mathscr{D}(\Omega)),$$
> 那么 $f$ 有广义微商 $\widetilde{\partial}_{x_i}f$ (即 $\widetilde{\partial}^{\alpha}f$, 当 $\alpha = (0, \cdots, 1, 0, \cdots, 0)$), 同时 $f(x)$ 有普通的连续偏微商 $\partial_{x_i}f$, 我们说 $\widetilde{\partial}_{x_i}f$ 正是 $\partial_{x_i}f$ 对应的广义函数. 这是因为
> $$\langle \widetilde{\partial}_{x_i}f, \varphi \rangle = -\langle f, \partial_{x_i}\varphi \rangle$$
> $$\qquad = -\int_{\Omega} f(x) \partial_{x_i}\varphi(x) \mathrm{d}x = \int_{\Omega} \partial_{x_i}f(x) \cdot \varphi(x) \mathrm{d}x \quad (\forall \varphi \in \mathscr{D}(\Omega)).$$

> [!remark] 注 2
> 广义函数对微商运算是封闭的, 即任意广义函数都可以求任意阶广义微商. 当然, 即使局部可积函数, 也不是每个都有通常的微商; 但是用广义微商的概念, 它可以有广义微商, 当然广义微商还是广义函数, 不一定是通常函数.

> [!remark] 注 3
> 若 $\alpha$, $\beta$ 是任意两个多重指标, 则
> $$\widetilde{\partial}^{\alpha} \cdot \widetilde{\partial}^{\beta} = \widetilde{\partial}^{\alpha+\beta} = \widetilde{\partial}^{\beta} \cdot \widetilde{\partial}^{\alpha}.$$

> [!remark] 注 4
> 由 $\widetilde{\partial}^{\alpha}$ 的连续性,
> $$f_j \to f_0 \quad (\mathscr{D}'(\Omega)) \Longrightarrow \widetilde{\partial}^{\alpha}f_j \to \widetilde{\partial}^{\alpha}f_0 \quad (\mathscr{D}'(\Omega)),$$
> 可见广义微商与极限总是可交换的.

> [!theorem] 公式 4.3.2
> 若
> $$Y(x) = \begin{cases} 1, & x > 0, \\ 0, & x \leqslant 0, \end{cases}$$
> 则
> $$\widetilde{\partial}_x Y(x) = \delta(x).$$

> [!proof]- 证
> $\langle \widetilde{\partial}_x Y, \varphi \rangle = -\langle Y, \partial_x \varphi \rangle = -\displaystyle\int_{0}^{\infty} \varphi'(x) \mathrm{d}x$
> $$= \varphi(0) = \langle \delta, \varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\mathbb{R})). \quad \blacksquare$$

> [!theorem] 公式 4.3.3
> 若 $\delta^{(\alpha)}$ 是例 4.1.9 引进的广义函数, 则
> $$\widetilde{\partial}^{\alpha}\delta = \delta^{(\alpha)}.$$

> [!proof]- 证
> $\langle \widetilde{\partial}^{\alpha}\delta, \varphi \rangle = (-1)^{|\alpha|}\langle \delta, \partial^{\alpha}\varphi \rangle$
> $$= (-1)^{|\alpha|}(\partial^{\alpha}\varphi)(\theta) = \langle \delta^{(\alpha)}, \varphi \rangle. \quad \blacksquare$$

> [!theorem] 公式 4.3.4
> 设 $\widetilde{\Delta} = \widetilde{\partial}_{x_1}^2 + \cdots + \widetilde{\partial}_{x_n}^2$, 那么
> $$\widetilde{\Delta}|x|^{2-n} = (2-n)\Omega_n \delta(x) \quad (n \geqslant 3),$$
> $$\widetilde{\Delta}\ln|x| = 2\pi\delta(x) \qquad (n = 2),$$
> 其中 $\Omega_n$ 是 $\mathbb{R}^n$ 中单位球面的面积.

> [!proof]- 证
> (1) 当 $n \geqslant 3$ 时, $\forall \varphi \in \mathscr{D}(\mathbb{R}^n)$, 我们有
> $$\langle \widetilde{\Delta}|x|^{2-n}, \varphi \rangle = \langle |x|^{2-n}, \Delta\varphi \rangle = \lim_{\varepsilon \to 0} \int_{|x| \geqslant \varepsilon} |x|^{2-n} \Delta\varphi(x) \mathrm{d}x$$
> $$\xlongequal{\text{Green 公式}} \lim_{\varepsilon \to 0} \left[ \int_{|x| \geqslant \varepsilon} \Delta|x|^{2-n} \varphi(x) \mathrm{d}x \right.$$
> $$+ \int_{|x|=\varepsilon} \left( \varphi \frac{\partial|x|^{2-n}}{\partial r} - r^{2-n} \frac{\partial\varphi}{\partial r} \right) \mathrm{d}\sigma \bigg],$$
> 其中 $\mathrm{d}\sigma$ 是球面 $\{x \in \mathbb{R}^n | |x| = \varepsilon\}$ 上的面积元, $r = |x|$. 上式之所以成立是由于 $\varphi$ 具有紧支集, 所以可以取一充分大的球 $B(\theta, R) = \{x \in \mathbb{R}^n | |x| < R\}$, 使得 $\mathrm{supp}(\varphi) \subset B(\theta, R)$, 再应用 Green 公式.
> 注意到
> $$\Delta|x|^{2-n} = 0 \quad (\text{当 } |x| \neq 0),$$
> $$\varepsilon^{2-n} \int_{|x|=\varepsilon} \frac{\partial\varphi}{\partial r} \mathrm{d}\sigma = O(\varepsilon) \to 0 \quad (\text{当 } \varepsilon \to 0),$$
> 而
> $$\varepsilon^{1-n} \int_{|x|=\varepsilon} \varphi(x) \mathrm{d}\sigma \to \varphi(0)\Omega_n \quad (\text{当 } \varepsilon \to 0),$$
> 即得
> $$\langle \Delta|x|^{2-n}, \varphi \rangle = (2-n)\varphi(0)\Omega_n$$
> $$= (2-n)\Omega_n \langle \delta, \varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)).$$
> (2) 同样方法证明
> $$\langle \Delta\ln|x|, \varphi \rangle = 2\pi \langle \delta, \varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^2)). \quad \blacksquare$$

### 3.2 广义函数的乘法

对于任意的 $\psi \in C^{\infty}(\Omega)$, 以及 $f \in \mathscr{D}'(\Omega)$, 定义

$$\langle \psi f, \varphi \rangle = \langle f, \psi\varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\Omega)),$$

即定义广义函数对 $C^{\infty}(\Omega)$ 函数的乘法为 $\mathscr{D}(\Omega)$ 上乘法算子的共轭算子. 显然它也是连续算子.

> [!theorem] 公式 4.3.5
> $$x^n \widetilde{\partial}^{\,m}\delta(x) = \begin{cases} \displaystyle(-1)^n \frac{m!}{(m-n)!} \delta^{(m-n)}(x), & m \geqslant n, \\ 0, & m < n. \end{cases}$$

> [!proof]- 证
> $\langle x^n \widetilde{\partial}^{\,m}\delta(x), \varphi(x) \rangle = (-1)^m \langle \delta(x), \partial^{\,m}(x^n\varphi(x)) \rangle$
> $$= (-1)^m \sum_{r=0}^{m} \binom{m}{r} (\partial^{\,r}x^n)(\partial^{\,m-r}\varphi(x))\bigg|_{x=0}$$
> $$= \begin{cases} \displaystyle\frac{(-1)^m m!}{n!(m-n)!} n! (\partial^{\,m-n}\varphi)(0), & \text{当 } m \geqslant n, \\ 0, & \text{当 } m < n \end{cases}$$
> $$= \begin{cases} \displaystyle\frac{(-1)^n m!}{(m-n)!} \langle \delta^{(m-n)}(x), \varphi \rangle, & \text{当 } m \geqslant n, \\ 0, & \text{当 } m < n. \end{cases} \quad \blacksquare$$

容易看出, 当 $f \in L^1_{\mathrm{loc}}(\Omega)$ 时, 对 $\forall \psi \in C^{\infty}(\Omega)$, $\psi f$ 的通常定义与作为广义函数的定义是一致的.

> [!remark] 注
> 一般不能定义两个广义函数的乘积, 特别是两个 $\delta$ 函数相乘, 因其结果不再是广义函数.

### 3.3 平移算子与反射算子

$\forall x_0 \in \mathbb{R}^n$, 定义 $\tau_{x_0}: \mathscr{D}(\mathbb{R}^n) \to \mathscr{D}(\mathbb{R}^n)$ 为

$$(\tau_{x_0}\varphi)(x) = \varphi(x - x_0) \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$

我们称 $\tau_{x_0}$ 为**平移算子**. 易见 $\tau_{x_0} \in \mathscr{L}(\mathscr{D}(\mathbb{R}^n))$.

> [!definition] 定义 4.3.6
> $\forall x_0 \in \mathbb{R}^n$, $\widetilde{\tau}_{x_0} \triangleq (\tau_{-x_0})^*$, 即对 $\forall f \in \mathscr{D}'(\mathbb{R}^n)$, 有
> $$\langle \widetilde{\tau}_{x_0}f, \varphi \rangle = \langle f, \tau_{-x_0}\varphi \rangle = \langle f, \varphi(x + x_0) \rangle \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)).$$

> [!remark] 注
> $\widetilde{\tau}_{x_0}$ 是平移算子的推广. 事实上, 若 $f(x) \in L^1_{\mathrm{loc}}(\mathbb{R}^n)$, 则对 $\forall x_0 \in \mathbb{R}^n$, 有
> $$\int_{\mathbb{R}^n} f(x - x_0)\varphi(x) \mathrm{d}x = \int_{\mathbb{R}^n} f(x)\varphi(x + x_0) \mathrm{d}x$$
> $$= \langle f, \tau_{-x_0}\varphi \rangle = \langle \widetilde{\tau}_{x_0}f, \varphi \rangle$$
> $$(\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 即得 $\widetilde{\tau}_{x_0}f = f(x - x_0) = \tau_{x_0}f$.

$\forall x \in \mathbb{R}^n$ 定义 $\sigma: \mathscr{D}(\mathbb{R}^n) \to \mathscr{D}(\mathbb{R}^n)$ 为

$$(\sigma\varphi)(x) = \varphi(-x) \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$

我们称 $\sigma$ 为**反射算子**. 易见 $\sigma \in \mathscr{L}(\mathscr{D}(\mathbb{R}^n))$.

> [!definition] 定义 4.3.7
> $\widetilde{\sigma} \triangleq \sigma^*$. 即对 $\forall f \in \mathscr{D}'(\mathbb{R}^n)$, 有
> $$\langle \widetilde{\sigma}f, \varphi \rangle = \langle \sigma^*f, \varphi \rangle = \langle f, \sigma\varphi \rangle \quad (\forall \varphi \in \mathscr{D}(\mathbb{R}^n)).$$

> [!remark] 注
> $\widetilde{\sigma}$ 是反射算子的推广. 事实上, 若 $f(x) \in L^1_{\mathrm{loc}}(\mathbb{R}^n)$, 则有
> $$\int_{\mathbb{R}^n} f(-x)\varphi(x) \mathrm{d}x = \int_{\mathbb{R}^n} f(x)\varphi(-x) \mathrm{d}x$$
> $$= \langle f, \sigma\varphi \rangle = \langle \widetilde{\sigma}f, \varphi \rangle$$
> $$(\forall \varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 即得 $\widetilde{\sigma}f = f(-x) = \sigma f$.

---

**习题**

4.3.1 计算:
(1) $\widetilde{\partial}_x^n |x|$;
(2) $\widetilde{\partial}^n x_+^{\lambda} (\lambda \in \mathbb{R}, \lambda \geqslant 0)$, 其中
$$x_+^{\lambda} = \begin{cases} x^{\lambda}, & x > 0, \\ 0, & x \leqslant 0. \end{cases}$$

4.3.2 求证:
$$\frac{\widetilde{\mathrm{d}}}{\mathrm{d}x} \ln|x| = \mathrm{P.V.}\left(\frac{1}{x}\right),$$
即
$$\left\langle \frac{\widetilde{\mathrm{d}}}{\mathrm{d}x} \ln|x|, \varphi \right\rangle = \lim_{\varepsilon \to 0+} \int_{|x| \geqslant \varepsilon} \frac{\varphi(x)}{x} \mathrm{d}x \quad (\forall \varphi \in \mathscr{D}(\mathbb{R})).$$

4.3.3 设 $\Omega = (\alpha, \beta) \subset \mathbb{R}$, $x_0 \in \Omega$, 又设 $f \in C^1(\Omega \setminus \{x_0\})$, $x_0$ 是 $f$ 的第一类间断点且 $f'$ 在 $\Omega \setminus \{x_0\}$ 内有界. 求证:
$$\frac{\widetilde{\mathrm{d}}}{\mathrm{d}x}f = f' + (f(x_0+0) - f(x_0-0))\delta(x_0).$$

4.3.4 求证: 对 $\forall f \in \mathscr{D}'(\mathbb{R}^n)$ 有
$$\widetilde{\partial}_{x_i}f = \lim_{h \to 0} \frac{1}{h}(\widetilde{\tau}_{-he_i}f - f),$$
其中
$$e_i = (\underbrace{0, \cdots, 0}_{i}, 1, 0, \cdots, 0) \quad (i = 1, 2, \cdots, n).$$

4.3.5 求证: 对 $\forall f \in \mathscr{D}'(\mathbb{R}^n)$, 以及 $\forall \varphi \in \mathscr{D}(\mathbb{R}^n)$, 函数
$$g(y) = \langle f, \tau_{-y}\varphi \rangle \in C^{\infty}(\mathbb{R}^n).$$

4.3.6 求证: 每个 $f \in \mathscr{S}'$ 必是 $L^2(\mathbb{R}^n)$ 函数乘以多项式的广义微商之有限和, 即 $\exists u_\alpha \in L^2(\mathbb{R}^n)$ 及偶数 $m$, 使得
$$f = (-1)^{|\alpha|} \sum_{|\alpha| \leqslant m} \widetilde{\partial}^{\alpha}\bigl[(1 + |x|^2)^{\frac{m}{2}}u_\alpha\bigr].$$
提示 利用 (4.2.7) 式. (4.2.7) 式中的 $m$ 可以认为是偶数, 这是因为必要的话可在 (4.2.6) 式中用 $2m$ 取代 $m$.

---

## §4 $\mathscr{S}'$ 上的 Fourier 变换

对于 $\varphi \in L^1(\mathbb{R}^n)$, $\varphi$ 的 Fourier 变换定义如下:

$$(\mathscr{F}\varphi)(\xi) = \int_{\mathbb{R}^n} \varphi(x) \exp(-2\pi i x \cdot \xi) \mathrm{d}x, \qquad (4.4.1)$$

其中 $x \cdot \xi = x_1\xi_1 + x_2\xi_2 + \cdots + x_n\xi_n$.

熟悉分析的人都知道, Fourier 变换无论是在理论上还是在应用上都是十分重要的工具. 但是, 能定义 Fourier 变换的函数实在受限制太强了. 一般的 $L^p(\mathbb{R}^n)(p > 1)$ 函数未必在 $L^1(\mathbb{R}^n)$ 中, 从而积分 (4.4.1) 可能没有意义. 最简单的函数 $\varphi(x) \equiv 1$ (或更一般的多项式), 更无从使 (4.4.1) 式的积分收敛. 引进广义函数的另一个重要推动力是扩大 Fourier 变换的定义, 使得这个重要工具能够方便而又灵活地运用.

> [!proposition] 命题 4.4.1
> $\mathscr{F} \in \mathscr{L}(\mathscr{S})$.

> [!proof]- 证
> 注意以下两个事实:
> (1) $\mathscr{F}(\partial^{\alpha}\varphi) = (2\pi i\xi)^{\alpha}(\mathscr{F}\varphi)(\xi)$,
> (2) $\mathscr{F}((-2\pi ix)^{\alpha}\varphi)(\xi) = \partial^{\alpha}(\mathscr{F}\varphi)(\xi)$,
> 便有
> $$\|\mathscr{F}\varphi\|_m = \sup_{\substack{\xi \in \mathbb{R}^n \\ |\alpha| \leqslant m}} (1 + |\xi|^2)^{\frac{m}{2}} |\partial^{\alpha}(\mathscr{F}\varphi)(\xi)|$$
> $$= \sup_{\substack{\xi \in \mathbb{R}^n \\ |\alpha| \leqslant m}} \left|\left(\mathscr{F}\left[\left(1 - \frac{\Delta}{4\pi^2}\right)^{\frac{m}{2}} (-2\pi ix)^{\alpha}\varphi\right]\right)(\xi)\right|$$
> $$\leqslant \sup_{|\alpha| \leqslant m} \int_{\mathbb{R}^n} \left|\left(1 - \frac{\Delta}{4\pi^2}\right)^{\frac{m}{2}} (-2\pi ix)^{\alpha}\varphi\right| \mathrm{d}x$$
> $$\leqslant \sup_{|\alpha| \leqslant m} \sum_{\substack{p \leqslant \alpha \\ q \leqslant m}} A_{\alpha,p,q} \int_{\mathbb{R}^n} |x^p \partial^{\,q}\varphi| \mathrm{d}x$$
> $$\leqslant M_m \sup_{\substack{x \in \mathbb{R}^n \\ |\alpha| \leqslant m}} (1 + |x|^2)^{\frac{m}{2} + n} |\partial^{\alpha}\varphi(x)|$$
> $$\leqslant M_m \|\varphi\|_{m+2n} \quad (m = 2, 4, 6, \cdots),$$
> 其中 $A_{\alpha,p,q}$ 及 $M_m$ 皆为常数. ■

称积分

$$(\overline{\mathscr{F}}\varphi)(\xi) = \int_{\mathbb{R}^n} \varphi(x) \exp(2\pi ix \cdot \xi) \mathrm{d}x$$

为函数 $\varphi$ 的 **Fourier 逆变换**, 或 **Fourier 积分**.

> [!proposition] 命题 4.4.2
> $\overline{\mathscr{F}} = \sigma\mathscr{F}$, 从而 $\overline{\mathscr{F}} \in \mathscr{L}(\mathscr{S})$.

> [!proposition] 命题 4.4.3
> 若 $\varphi, \psi \in \mathscr{S}$, 则
> $$\langle \mathscr{F}\varphi, \psi \rangle = \langle \varphi, \mathscr{F}\psi \rangle, \qquad (4.4.2)$$
> $$\langle \overline{\mathscr{F}}\varphi, \psi \rangle = \langle \varphi, \overline{\mathscr{F}}\psi \rangle. \qquad (4.4.3)$$

> [!proof]- 证
> $$\langle \mathscr{F}\varphi, \psi \rangle = \int_{\mathbb{R}^n} \left[\int_{\mathbb{R}^n} \varphi(x) \exp(-2\pi ix \cdot \xi) \mathrm{d}x\right] \psi(\xi) \mathrm{d}\xi$$
> $$\xlongequal{\text{Fubini定理}} \int_{\mathbb{R}^n} \varphi(x) \left(\int_{\mathbb{R}^n} \exp(-2\pi ix \cdot \xi) \psi(\xi) \mathrm{d}\xi\right) \mathrm{d}x$$
> $$= \langle \varphi, \mathscr{F}\psi \rangle,$$
> 即得 (4.4.2) 式. 同理可证 (4.4.3) 式. ■

> [!definition] 定义 4.4.4
> 在空间 $\mathscr{S}'$ 上定义 $\widetilde{\mathscr{F}} = \mathscr{F}^*(\overline{\widetilde{\mathscr{F}}} = (\overline{\mathscr{F}})^*)$, 称为**广义 Fourier (逆)变换**. 在不会引起混淆时, 记号 $\sim$ 可以略去. 有时为了方便, 简记 $\mathscr{F}\varphi = \widehat{\varphi}$.

从定义 4.4.4 容易推出如下命题.

> [!proposition] 命题 4.4.5
> $\mathscr{F} \in \mathscr{L}(\mathscr{S}')$, $\overline{\mathscr{F}} \in \mathscr{L}(\mathscr{S}')$, 而且当限制在 $\mathscr{S}$ 上时, 它们分别与普通的 Fourier 变换、Fourier 逆变换一致.

关于 Fourier 变换, 微商与乘法之间、平移与相移之间有着重要的联系, 见表 4.4.1. 在表中用 "$f \circ \mathrel{——} \cdot g$" 表示 $g = \mathscr{F}f$ 或 $f = \overline{\mathscr{F}}g$.

**表 4.4.1**

| 编号 | 假设 |
|------|------|
| | $f \circ \mathrel{——} \cdot g$ |
| (1) | $\widetilde{\partial}^{\alpha}f \circ \mathrel{——} \cdot (2\pi i\xi)^{\alpha}g$ |
| (2) | $(-2\pi ix)^{\alpha}f \circ \mathrel{——} \cdot \widetilde{\partial}^{\alpha}g$ |
| (3) | $\widetilde{\tau}_a f \circ \mathrel{——} \cdot \exp(-2\pi ia \cdot \xi)g$ |
| (4) | $\exp(2\pi ia \cdot x)f \circ \mathrel{——} \cdot \widetilde{\tau}_a g$ |

> [!theorem] 公式 4.4.6
> $\mathscr{F}(\exp(-\pi|x|^2)) = \exp(-\pi|\xi|^2)$.

> [!proof]- 证
> 设 $n = 1$, 令 $f(x) = \exp(-\pi x^2)$, 便有
> $$f'(x) + 2\pi x f(x) = 0, \quad f(0) = 1.$$
> 在方程两边做 Fourier 变换, 有
> $$2\pi i\xi (\mathscr{F}f)(\xi) + i(\mathscr{F}f)'(\xi) = 0,$$
> $$(\mathscr{F}f)(0) = \int_{-\infty}^{\infty} \exp(-\pi x^2) \mathrm{d}x = 1,$$
> 即 $\mathscr{F}f$ 与 $f$ 满足同一方程, 且具有相同初值, 利用常微分方程初值问题解的唯一性, 可得
> $$(\mathscr{F}f)(\xi) = f(\xi) = \exp(-\pi|\xi|^2) \quad (\forall \xi \in \mathbb{R}).$$
> 对于任意的 $n \in \mathbb{N}$, 利用分离变量立得如下公式. ■

> [!theorem] 公式 4.4.7
> $\mathscr{F}\delta = 1$, $\overline{\mathscr{F}}\delta = 1$.

> [!proof]- 证
> 因为 $\forall \varphi \in \mathscr{S}$,
> $$\langle \mathscr{F}\delta, \varphi \rangle = \langle \delta, \mathscr{F}\varphi \rangle = (\mathscr{F}\varphi)(0) = \int_{\mathbb{R}^n} \varphi(x) \mathrm{d}x = \langle 1, \varphi \rangle. \quad \blacksquare$$

> [!theorem] 公式 4.4.8
> $\mathscr{F}(1) = \delta$, $\overline{\mathscr{F}}(1) = \delta$.

> [!proof]- 证
> 由公式 4.4.6 可见
> $$\mathscr{F}\left[\exp\left(-\pi\frac{|x|^2}{m}\right)\right] = m^{\frac{n}{2}} \exp(-m\pi|\xi|^2).$$
> 当令 $m \to \infty$ 时,
> $$\exp\left(-\pi\frac{|x|^2}{m}\right) \to 1 \quad (\mathscr{S}'),$$
> 而
> $$m^{\frac{n}{2}} \exp(-m\pi|\xi|^2) \to \delta \quad (\mathscr{S}').$$
> 由 $\mathscr{F}$ 的连续性即得 $\mathscr{F}(1) = \delta$. 同理可证另一个公式. ■

> [!theorem] 公式 4.4.9
> (1) $\mathscr{F}(p(x)) = p\left(\dfrac{i}{2\pi}\widetilde{\partial}\right)\delta(\xi)$, 其中 $p(\cdot)$ 表示多项式;
> (2) $\mathscr{F}(\widetilde{\partial}^{\alpha}\delta) = (2\pi i\xi)^{\alpha}$.

> [!proof]- 证
> 表 4.4.1(2)+公式 4.4.8 $\Longrightarrow$ (1).
> 表 4.4.1(1)+公式 4.4.7 $\Longrightarrow$ (2). ■

> [!theorem] 定理 4.4.10
> $\overline{\mathscr{F}} = \mathscr{F}^{-1}$, 即 $\overline{\mathscr{F}}\mathscr{F} = \mathscr{F}\overline{\mathscr{F}} = I$.

> [!proof]- 证
> $\forall \varphi \in \mathscr{S}, \forall y \in \mathbb{R}^n$,
> $$\varphi(y) = \langle \delta, \tau_{-y}\varphi \rangle = \langle \widetilde{\tau}_y\delta, \varphi \rangle$$
> $$= \langle \mathscr{F}(\exp(2\pi i\xi \cdot y)), \varphi \rangle \quad (\text{表 4.4.1(4)})$$
> $$= \langle \exp(2\pi i\xi \cdot y), (\mathscr{F}\varphi)(\xi) \rangle$$
> $$= \int_{\mathbb{R}^n} \exp(2\pi i\xi \cdot y)(\mathscr{F}\varphi)(\xi) \mathrm{d}\xi = (\overline{\mathscr{F}}\mathscr{F}\varphi)(y),$$
> 即得 $\varphi = \overline{\mathscr{F}}\mathscr{F}\varphi$. 同理可证 $\varphi = \mathscr{F}\overline{\mathscr{F}}\varphi$. 于是对 $\forall f \in \mathscr{S}'$, 我们有
> $$\langle \mathscr{F}\overline{\mathscr{F}}f, \varphi \rangle = \langle f, \overline{\mathscr{F}}\mathscr{F}\varphi \rangle = \langle f, \varphi \rangle \quad (\forall \varphi \in \mathscr{S}),$$
> $$\langle \overline{\mathscr{F}}\mathscr{F}f, \varphi \rangle = \langle f, \mathscr{F}\overline{\mathscr{F}}\varphi \rangle = \langle f, \varphi \rangle \quad (\forall \varphi \in \mathscr{S}).$$
> 即得 $\overline{\mathscr{F}} = \mathscr{F}^{-1}$. ■

> [!corollary] 推论 4.4.11 (Plancherel 定理)
> 若 $f \in L^2$, 则 $\widetilde{\mathscr{F}}f \in L^2$, 并且
> $$\|f\|_{L^2} = \|\widetilde{\mathscr{F}}f\|_{L^2} \quad (\widetilde{\mathscr{F}} \text{ 保持范数不变}). \qquad (4.4.4)$$

> [!proof]- 证
> 因为对 $\forall \varphi \in \mathscr{S}$ 有
> $$\|\varphi\|_{L^2}^2 = \langle \varphi, \overline{\varphi} \rangle = \langle \overline{\mathscr{F}}\mathscr{F}\varphi, \overline{\varphi} \rangle = \langle \mathscr{F}\varphi, \overline{\mathscr{F}\varphi} \rangle = \|\mathscr{F}\varphi\|_{L^2}^2,$$
> 而 $\mathscr{S}$ 在 $L^2$ 中稠密 (见习题 4.1.1), 所以对 $\forall f \in L^2, \exists \{\varphi_m\} \subset \mathscr{S}$, 使得
> $$\|\varphi_m - f\|_{L^2} \to 0 \quad (m \to \infty).$$
> 于是对 $\forall p \in \mathbb{N}$, 我们有
> $$\|\mathscr{F}\varphi_{m+p} - \mathscr{F}\varphi_m\|_{L^2} \to 0 \quad (m \to \infty),$$
> 即 $\{\mathscr{F}\varphi_m\}_{m=1}^{\infty}$ 是 $L^2$ 中的基本列. 由于 $\mathscr{F}$ 在 $\mathscr{S}'$ 中连续以及 $L^2 \hookrightarrow \mathscr{S}'$, 可见
> $$\widetilde{\mathscr{F}}f = \lim_{m \to \infty} \mathscr{F}\varphi_m(L^2).$$
> 这表明 $\widetilde{\mathscr{F}}f \in L^2$, 并且
> $$\|\widetilde{\mathscr{F}}f\|_{L^2} = \lim_{m \to \infty} \|\mathscr{F}\varphi_m\|_{L^2} = \lim_{m \to \infty} \|\varphi_m\|_{L^2} = \|f\|_{L^2}. \quad \blacksquare$$

> [!remark] 注
> 根据习题 1.6.1 (极化恒等式) 与本推论可以容易推出: 若 $f, g \in L^2$, 则
> $$(f, g)_{L^2} = (\widetilde{\mathscr{F}}f, \widetilde{\mathscr{F}}g)_{L^2} \quad (\widetilde{\mathscr{F}} \text{ 保持内积不变}). \qquad (4.4.5)$$

---

**习题**

4.4.1 设 $H^m(\mathbb{R}^n) = \{u \in \mathscr{S}' | \widetilde{\partial}^{\alpha}u \in L^2(\mathbb{R}^n) (|\alpha| \leqslant m)\}$, 其中范数定义为
$$\|u\|_m = \left(\sum_{|\alpha| \leqslant m} \|\widetilde{\partial}^{\alpha}u\|_{L^2}^2\right)^{\frac{1}{2}}.$$
又对 $\forall u \in H^m(\mathbb{R}^n)$, 定义
$$\|u\|'_m = \left(\int_{\mathbb{R}^n} (1 + |\xi|^2)^m |(\mathscr{F}u)(\xi)|^2 \mathrm{d}\xi\right)^{\frac{1}{2}},$$
求证: (1) $\|u\|'_m < \infty$;
(2) $\|\cdot\|'_m$ 是 $H^m(\mathbb{R}^n)$ 的**等价范数**;
(3) $H^m(\mathbb{R}^n)$ 是完备的.

4.4.2 对任意的非负实数 $s$, 设
$$H^s(\mathbb{R}^n) \triangleq \{u \in L^2(\mathbb{R}^n) | (1 + |\xi|^2)^{s/2}\widehat{u}(\xi) \in L^2(\mathbb{R}^n)\},$$
其中范数定义为
$$\|u\|_s = \|(1 + |\xi|^2)^{s/2}\widehat{u}(\xi)\|_{L^2}.$$
设 $r < s < t$, 求证: $H^t(\mathbb{R}^n) \hookrightarrow H^s(\mathbb{R}^n)$, 并且
$$\|u\|_s \leqslant \|u\|_r^{\frac{t-s}{t-r}} \|u\|_t^{\frac{s-r}{t-r}}$$
$$\qquad \qquad (\forall u \in H^t(\mathbb{R}^n)).$$
(此不等式称为**插值不等式**).

---

## §5 Sobolev 空间与嵌入定理

> [!definition] 定义 4.5.1
> 设 $\Omega \subset \mathbb{R}^n$ 是一个开集, $m$ 是非负整数, $1 \leqslant p \leqslant \infty$, 对于 $\mathscr{D}(\Omega)$ 中的函数 $u$, 定义范数:
> $$\|u\|_{W^{m,p}(\Omega)} = \left(\sum_{|\alpha| \leqslant m} \|\partial^{\alpha}u\|_{L^p(\Omega)}^p\right)^{\frac{1}{p}} \quad (1 \leqslant p < \infty),$$
> $$\|u\|_{W^{m,\infty}(\Omega)} = \max_{|\alpha| \leqslant m} \|\partial^{\alpha}u\|_{L^{\infty}(\Omega)}.$$
> 称空间
> $$W^{m,p}(\Omega) = \overline{\mathscr{D}(\Omega)}^{\|\cdot\|_{W^{m,p}(\Omega)}}$$
> 为 **Sobolev 空间**, 即 $W^{m,p}(\Omega)$ 是 $\mathscr{D}(\Omega)$ 按范数 $\|\cdot\|_{W^{m,p}(\Omega)}$ 完备化所得的 Banach 空间.

> [!theorem] 定理 4.5.2
> 空间 $W^{m,p}(\Omega)$ 是完备的.

> [!proof]- 证
> 设 $\{u_k\}$ 是 $W^{m,p}(\Omega)$ 中的基本列, 那么当 $|\alpha| \leqslant m$ 时, $\{\partial^{\alpha}u_k\}$ 是 $L^p(\Omega)$ 中的基本列. 由 $L^p(\Omega)$ 的完备性, $\exists g_\alpha \in L^p(\Omega)$, 使得
> $$\|\partial^{\alpha}u_k - g_\alpha\|_{L^p} \to 0 \quad (k \to \infty)(|\alpha| \leqslant m).$$
> 于是 $\forall \varphi \in \mathscr{D}(\Omega)$, 当 $k \to \infty$ 时,
> $$\langle \partial^{\alpha}u_k, \varphi \rangle = (-1)^{|\alpha|} \langle u_k, \partial^{\alpha}\varphi \rangle$$
> $$\downarrow \qquad \qquad \downarrow$$
> $$\langle g_\alpha, \varphi \rangle \quad \cdots \quad (-1)^{|\alpha|} \langle g_0, \partial^{\alpha}\varphi \rangle$$
> 即得 $g_\alpha = \widetilde{\partial}^{\alpha}g_0$, 由此推出 $g_0 \in W^{m,p}(\Omega)$, 且
> $$\|u_k - g_0\|_{W^{m,p}(\Omega)} \to 0 \quad (k \to \infty).$$
> ■

> [!remark] 注 1
> $W^{m,2}(\Omega)$ 常记为 $H^m(\Omega)$. $H^m(\Omega)$ 按内积
> $$(u, v)_m = \sum_{|\alpha| \leqslant m} \int_{\Omega} \partial^{\alpha}u(x) \cdot \overline{\partial^{\alpha}v(x)} \mathrm{d}x$$
> 是一个 Hilbert 空间.

> [!remark] 注 2
> $W^{m,p}(\Omega)$ 中的函数可以用 $\mathscr{D}(\Omega)$ 中的函数来逼近, 即 $\mathscr{D}(\Omega)$ 在 $W^{m,p}(\Omega)$ 中是稠密的. 这个定理的证明要用到关于区域边界的某些限制, 在此从略 (可参看 K. Yosida, "Functional Analysis", Chap. VI).

> [!remark] 注 3
> 当 $p = 2$ 时, $W^{m,2}(\Omega) = H^m(\Omega)$ 是 Hilbert 空间; 当 $p = 1$ 时, $W^{m,1}(\Omega)$ 在偏微分方程理论中也很重要.

> [!theorem] 定理 4.5.3 (Sobolev 嵌入定理)
> 设 $\Omega \subset \mathbb{R}^n$ 是一个有界开区域, $1 \leqslant p < \infty$, $m \geqslant 0$ 是整数. 如果 $m > n/p$, 则
> $$W^{m,p}(\Omega) \hookrightarrow C(\overline{\Omega}),$$
> 且嵌入算子是连续的.

> [!proof]- 证
> 首先证明一个基本不等式: 若 $f \in W^{m,p}(\Omega) \cap \mathscr{D}(\Omega)$, 则
> $$\sup_{x \in \Omega} |f(x)| \leqslant C \|f\|_{W^{m,p}(\Omega)}, \qquad (4.5.1)$$
> 其中 $C$ 是仅依赖于 $\Omega$, $m$, $n$, $p$ 的常数.
> 事实上, 利用关于紧支函数的 Taylor 展开式以及 $m > n/p$ 的条件, 经过适当的计算即可得到 (4.5.1) 式. 详细证明从略.
> 由 (4.5.1) 式, 对任意 $f \in W^{m,p}(\Omega)$, 取 $\{f_k\} \subset \mathscr{D}(\Omega)$, 使得 $f_k \to f$ $(W^{m,p}(\Omega))$. 则
> $$\sup_{x \in \Omega} |f_k(x) - f_l(x)| \leqslant C \|f_k - f_l\|_{W^{m,p}(\Omega)} \to 0$$
> $$\qquad \qquad (k, l \to \infty).$$
> 这说明 $\{f_k\}$ 是 $C(\overline{\Omega})$ 中的基本列, 故 $\exists \widetilde{f} \in C(\overline{\Omega})$, 使得 $f_k \rightrightarrows \widetilde{f}$ 于 $\overline{\Omega}$, 且
> $$\|\widetilde{f}\|_{C(\overline{\Omega})} \leqslant C \|f\|_{W^{m,p}(\Omega)}.$$
> 由于 $f_k \to f(L^p(\Omega))$, 故 $f(x) = \widetilde{f}(x)$ (a.e. $x \in \Omega$), 即 $f$ 几乎处处等于一个连续函数. ■

> [!corollary] 推论 4.5.4
> 在定理 4.5.3 的条件下, 若 $m - n/p > k$, 其中 $k$ 是非负整数, 则
> $$W^{m,p}(\Omega) \hookrightarrow C^k(\overline{\Omega}).$$

> [!theorem] 定理 4.5.5 (Rellich 定理)
> 设 $\Omega \subset \mathbb{R}^n$ 是一个有界开区域, $1 \leqslant p < \infty$, $m \geqslant 1$ 是整数. 则嵌入映射
> $$W^{m,p}(\Omega) \hookrightarrow L^p(\Omega)$$
> 是紧的.

> [!proof]- 证
> 设 $A$ 是 $W^{m,p}(\Omega)$ 中的有界集, 即 $\exists M > 0$, 使得
> $$\|u\|_{W^{m,p}(\Omega)} \leqslant M \quad (\forall u \in A).$$
> 我们需要证明 $A$ 在 $L^p(\Omega)$ 中是列紧的.
> (1) 首先, 由 $W^{m,p}(\Omega)$ 的定义, 对 $\forall u \in A$, $\exists \{u_k\} \subset \mathscr{D}(\Omega)$, 使得 $u_k \to u$ $(W^{m,p}(\Omega))$. 因此, 对 $\forall \varepsilon > 0$, 可以找到与 $u$ 有关的函数 $v \in \mathscr{D}(\Omega)$, 使得
> $$\|u - v\|_{W^{m,p}(\Omega)} < \varepsilon.$$
> (2) 由于 $\Omega$ 有界, $\mathscr{D}(\Omega)$ 中的函数在 $\Omega$ 外可以视为 $0$, 因此对 $v \in \mathscr{D}(\Omega)$, 利用 Taylor 展开, 可以证明
> $$\|v(x + h) - v(x)\|_{L^p(\mathbb{R}^n)} \leqslant C |h| \cdot \|v\|_{W^{1,p}(\mathbb{R}^n)} \quad (\forall v \in \mathscr{D}(\Omega)).$$
> 由稠密性, 上式对 $v \in W^{1,p}(\Omega)$ 也成立.
> (3) 由于 $A$ 在 $W^{m,p}(\Omega)$ 中有界, 且 $m \geqslant 1$, 故 $A$ 在 $W^{1,p}(\Omega)$ 中也有界. 因此 $\exists M_1 > 0$, 使得
> $$\|u\|_{W^{1,p}(\Omega)} \leqslant M_1 \quad (\forall u \in A).$$
> 于是
> $$\|u(x + h) - u(x)\|_{L^p(\mathbb{R}^n)} \leqslant C M_1 |h| \quad (\forall u \in A).$$
> 这说明 $A$ 在 $L^p(\Omega)$ 中是等度平均连续的.
> (4) 由 Fréchet-Kolmogorov 定理, $A$ 在 $L^p(\Omega)$ 中是列紧的. ■

> [!remark] 注
> Rellich 定理是研究偏微分方程的重要工具, 它表明在一定条件下, Sobolev 空间中的有界集在 $L^p$ 空间中是列紧的.

---

**习题**

4.5.1 设 $\Omega = (a, b) \subset \mathbb{R}$, $f \in H^1(\Omega)$. 求证:
$$|f(x) - f(y)| \leqslant |x - y|^{1/2} \|f\|_{H^1} \quad (\forall x, y \in \Omega).$$

4.5.2 设 $\Omega \subset \mathbb{R}^n$ 是有界开集, $m > n/2$. 利用 Sobolev 嵌入定理证明: $H^m(\Omega)$ 是一个代数, 即若 $u, v \in H^m(\Omega)$, 则 $uv \in H^m(\Omega)$, 且
$$\|uv\|_{H^m} \leqslant C \|u\|_{H^m} \|v\|_{H^m}.$$

4.5.3 设 $\Omega \subset \mathbb{R}^n$ 是有界开集, $u \in W^{m,p}(\Omega)$ ($m \geqslant 1$, $1 \leqslant p < \infty$). 定义
$$u_h(x) = \frac{1}{h^n} \int_{\Omega} \rho\left(\frac{x - y}{h}\right) u(y) \mathrm{d}y,$$
其中 $\rho$ 是软化子 (见例 4.1.1). 求证: $u_h \in C^{\infty}(\overline{\Omega})$, 且
$$\|u_h - u\|_{W^{k,p}(\Omega')} \to 0 \quad (h \to 0) \quad (0 \leqslant k < m),$$
其中 $\Omega' \subset\subset \Omega$ (即 $\Omega'$ 是 $\Omega$ 的紧子集).

4.5.4 设 $\Omega \subset \mathbb{R}^n$ 是有界开集, 边界 $\partial\Omega$ 充分光滑. 证明 $C^{\infty}(\overline{\Omega})$ 在 $W^{m,p}(\Omega)$ 中稠密.

> [!example] 例 4.5.8
> 若 $\varOmega$ 是有界开区域, 具有一致 $C^m$ 光滑的边界, 则 $\varOmega$ 也是可扩张的.

> [!proof]-
> 证明可参看 Adams R. A. 所著 Sobolev Spaces (New York: Academic Press, 1975) 中的定理 4.26, 此处从略. 更一般的结果参看 Stein E. M., Singular Integrals and Differentiability Properties of Functions (Princeton N. J.: Princeton University Press, 1970), p.189.

> [!theorem] 定理 4.5.9 (Sobolev 嵌入定理)
> 若 $\varOmega \subset \mathbb{R}^n$ 是一个可扩张的区域, $m > n/2$, 则 $W^{m,2}(\varOmega)$ 可以连续地嵌入 $C(\overline{\varOmega})$.

> [!proof]-
> (1) 我们已经知道 (习题 4.4.1)
> $$\|u\|_m' = \left(\int_{\mathbb{R}^n}(1+|\xi|^2)^m|\widehat{u}(\xi)|^2\,\mathrm{d}\xi\right)^{\frac{1}{2}}$$
> 是 $W^{m,2}(\mathbb{R}^n)$ 的一个等价范数. 又因为 $L^1(\mathbb{R}^n)$ 函数的 Fourier (逆)变换是连续函数, 并且
> $$\|u\|_{C(\mathbb{R}^n)} \leqslant \int_{\mathbb{R}^n}|\widehat{u}(\xi)|\,\mathrm{d}\xi.$$
> 而当 $m > n/2$ 时,
> $$\int_{\mathbb{R}^n}|\widehat{u}(\xi)|\,\mathrm{d}\xi$$
> $$\leqslant \left(\int_{\mathbb{R}^n}(1+|\xi|^2)^m|\widehat{u}(\xi)|^2\,\mathrm{d}\xi\right)^{\frac{1}{2}}\left(\int_{\mathbb{R}^n}\frac{\mathrm{d}\xi}{(1+|\xi|^2)^m}\right)^{\frac{1}{2}}$$
> $$\leqslant c_{n,m}\|u\|_m'.$$
> 所以 $i: u \mapsto u$ 是 $W^{m,2}(\mathbb{R}^n) \to C(\mathbb{R}^n)$ 的一个连续嵌入.
>
> (2) 今设 $u \in W^{m,2}(\varOmega)$, 利用延拓算子 $T$, 我们有
> $$\|u\|_{C(\overline{\varOmega})} \leqslant \|Tu\|_{C(\mathbb{R}^n)} \leqslant c_{n,m}\|Tu\|_m'$$
> $$\leqslant c\|u\|_{W^{m,2}(\varOmega)},$$
> 即 $i: u \mapsto u$ 是 $W^{m,2}(\varOmega) \to C(\overline{\varOmega})$ 的连续嵌入. $\blacksquare$

> [!remark] 注
> 更一般的嵌入定理, 不必限制 $p=2$ 是属于 Sobolev 的:
> $$W^{m,p}(\varOmega) \hookrightarrow L^q(\varOmega) \quad \left(\frac{1}{q}=\frac{1}{p}-\frac{m}{n}\right)\left(\text{当 } m \leqslant \frac{n}{p}\right),$$
> $$W^{m,p}(\varOmega) \hookrightarrow C(\overline{\varOmega}) \quad \left(\text{当 } m > \frac{n}{p}\right),$$
> 其中 $\hookrightarrow$ 表示连续嵌入.

> [!theorem] 定理 4.5.10 (Rellich)
> 设 $\varOmega \subset \mathbb{R}^n$ 是一个有界可扩张区域, 则 $W^{1,2}(\varOmega)$ 中的单位球在 $L^2(\varOmega)$ 中是列紧的.

> [!corollary] 推论 4.5.11
> 若 $\varOmega \subset \mathbb{R}^n$ 是任意的有界开集, 则 $W_0^{1,2}(\varOmega)$ 的单位球在 $L^2(\varOmega)$ 中是列紧的.

> [!proof]-
> 与定理 4.5.10 的证明相似. $\blacksquare$

> [!remark] 注 1
> $W_0^{1,2}(\varOmega)$ 有时记作 $\overset{\circ}{W}_2^1(\varOmega)$, 根据定理 4.5.5, 它也就是例 1.6.16 中的 $H_0^1(\varOmega)$.

> [!remark] 注 2
> 更一般的结论是属于 Kontrashev 的, 参看 Adams R A: Sobolev Spaces (New York: Academic Press, 1975) 中的定理 6.2.

注意到
$$\mathscr{D}(\varOmega) \hookrightarrow H_0^m(\varOmega) \hookrightarrow L^2(\varOmega),$$
可见它们的共轭空间之间有如下联系:
$$L^2(\varOmega) \hookrightarrow H_0^m(\varOmega)^* \hookrightarrow \mathscr{D}'(\varOmega).$$
这表明 Sobolev 空间的共轭空间 $H_0^m(\varOmega)^*$ 是由比 $L^2(\varOmega)$ 函数更多的广义函数组成的. 以下将 $H_0^m(\varOmega)^*$ 记作 $H^{-m}(\varOmega)$, 并用积分形式把其中的元素表示出来.

> [!theorem] 定理 4.5.12
> 为了 $f \in H^{-m}(\varOmega)$, 必须且仅须 $\exists g_\alpha \in L^2(\varOmega)$ ($|\alpha| \leqslant m$), 使得
> $$\langle f, \varphi \rangle = \sum_{|\alpha|\leqslant m}\int_\varOmega g_\alpha(x) \cdot \partial^\alpha\varphi(x)\,\mathrm{d}x \quad (\forall \varphi \in H_0^m(\varOmega)).$$

> [!corollary] 推论 4.5.13
> 每个 $f \in H^{-m}(\varOmega)$ 是 $L^2(\varOmega)$ 函数的广义微商之有限和, 即
> $$f = (-1)^{|\alpha|}\sum_{|\alpha|\leqslant m}\widetilde{\partial}^\alpha g_\alpha \quad (g_\alpha \in L^2(\varOmega)). \qquad (4.5.9)$$

> [!proof]-
> 根据广义微商定义, (4.5.8) 式蕴含 (4.5.9) 式. $\blacksquare$

> [!remark] 注 1
> 如果先给定 $g_\alpha \in L^2(\varOmega)$, 那么由 (4.5.9) 式定义一个 $f \in \mathscr{D}'(\varOmega)$, 注意此 $f$ 在 $H^m(\varOmega)$ 上的连续延拓可能不是唯一的. 但是此 $f$ 在 $H_0^m(\varOmega)$ 上的连续延拓却是唯一的, 这是因为 $C_0^\infty(\varOmega)$ 在 $H_0^m(\varOmega)$ 中稠密 (定理 4.5.3), 并且 $\forall |\alpha| \leqslant m$ 有
> $$|\langle \widetilde{\partial}^\alpha g_\alpha, \varphi \rangle| \leqslant \|g_\alpha\|_{L^2(\varOmega)} \cdot \|\varphi\|_{H_0^m(\varOmega)} \quad (\forall \varphi \in C_0^\infty(\varOmega)).$$
> 因此, (4.5.9) 式给出了属于 $H^{-m}(\varOmega)$ 的广义函数的特征.

> [!remark] 注 2
> 根据嵌入定理 4.5.9, 当 $m > n/2$ 时, $H_0^m(\varOmega)$ 可以连续地嵌入 $C(\overline{\varOmega})$, 因此当 $m > n/2$ 时, $C(\overline{\varOmega})$ 上的连续线性泛函属于 $H^{-m}(\varOmega)$. 特别是 $\delta$ 函数属于 $H^{-m}(\varOmega)$. 例如当 $n=1$ 时, 设 $x_0 \in \varOmega \triangleq (a,b)$, 则
> $$\varphi \mapsto \langle \delta_{x_0}, \varphi \rangle = \varphi(x_0)$$
> 在 $C(\overline{\varOmega})$ 上是连续线性的, 从而 $\delta_{x_0} \in H^{-1}(\varOmega)$.

## 习题

4.5.1 就 $\varOmega = \mathbb{R}_+^n = \{(x_1,x_2,\cdots,x_n) \in \mathbb{R}^n \mid x_n > 0\}$ 的情形验证定理 4.5.5.

> [!remark] 提示
> $\forall u(x) \in W^{m,p}(\varOmega)$, $\forall \varepsilon > 0$, 请考虑 $u_\varepsilon(x) = u(x', x_n+\varepsilon)$, 其中 $x' \in \mathbb{R}^{n-1}$, $x_n > -\varepsilon$.

4.5.2 若 $\alpha \in \mathscr{D}$, $u \in W^{m,p}(\mathbb{R}^n)$, 则 $\alpha \cdot u \in W^{m,p}(\mathbb{R}^n)$, 并且有常数 $C$ (依赖于 $\alpha$), 使得
$$\|\alpha \cdot u\|_{W^{m,p}} \leqslant C\|u\|_{W^{m,p}}.$$

4.5.3 若 $m \geqslant l$, 求证: $W^{m,p}(\varOmega) \hookrightarrow W^{l,p}(\varOmega)$.

4.5.4 设 $\varOmega = (a,b)$, $\forall f \in L^2(\varOmega)$, 求证: $\exists! x \in H_0^1(\varOmega)$, 使得
$$\frac{\widetilde{\mathrm{d}}^2 x}{\mathrm{d}t^2} = f,$$
并且 $T: f \mapsto x$ 是 $L^2(\varOmega)$ 到 $H^2(\varOmega)$ 的连续线性算子.

4.5.5 设 $f(x) \in H_0^1(-1,1)$, 求证:
(1) $f(-1) = f(1) = 0$;
(2) $f(x)$ 绝对连续;
(3) $f'(x) \in L^2(-1,1)$ (这里 "$'$" 指的是求 a.e. 微商).

4.5.6 设 $f \in H^s(\mathbb{R}^n)$ (定义见习题 4.4.2), 求证: 当 $s > n/2$ 时,
(1) $\widehat{f}(\xi) \in L^1(\mathbb{R}^n)$;
(2) $f(x)$ 与一个 $\mathbb{R}^n$ 上的连续有界函数几乎处处相等.

4.5.7 设 $m \in \mathbb{N}$, 又设
$$H^{-m} \triangleq \{f \in \mathscr{S}' \mid (1+|\xi|^2)^{-\frac{m}{2}}\widehat{f}(\xi) \in L^2(\mathbb{R}^n)\},$$
在 $H^{-m}$ 中定义范数
$$\|f\|_{-m} = \|(1+|\xi|^2)^{-\frac{m}{2}}\widehat{f}(\xi)\|_{L^2(\mathbb{R}^n)} \quad (\forall f \in H^{-m}).$$
求证: 若 $f \in H^{-m}$, 则它可以表为有限个 $L^2(\mathbb{R}^n)$ 函数的导数之和.

> [!remark] 提示
> $(1+|\xi|^2)^{-\frac{m}{2}}\widehat{f}(\xi) \in L^2(\mathbb{R}^n)$
> $$\Longleftrightarrow \frac{\widehat{f}(\xi)}{1+|\xi_1|^m+\cdots+|\xi_n|^m} \in L^2(\mathbb{R}^n).$$

4.5.8 在空间 $L^2(-\infty,\infty)$ 上, 考察微分算子
$$A = \frac{\widetilde{\mathrm{d}}}{\mathrm{d}x}, \quad D(A) = H^1(-\infty,\infty),$$
求证:
(1) $\rho(A) = \{\lambda \in \mathbb{C} \mid \mathrm{Re}\lambda \neq 0\}$;
(2) $\sigma_p(A) = \varnothing$;
(3) $\sigma(A) = \sigma_c(A) = \{\lambda \in \mathbb{C} \mid \mathrm{Re}\lambda = 0\}$.

## 习题补充提示

1.1.6 设 $f(x) \triangleq \rho(x,Tx)$, 则 $f(x)$ 在 $M$ 上连续. 因为 $M$ 是 $\mathbb{R}^n$ 中的有界闭集, 所以 $\exists x_0 \in M$, 使得
$$\rho(x_0,Tx_0) = f(x_0) = \min_{x \in M}f(x) = \min_{x \in M}\rho(x,Tx).$$
如果 $\rho(x_0,Tx_0) = 0$, 那么 $x_0$ 就是不动点. 如果 $\rho(x_0,Tx_0) > 0$, 一方面, 根据假设 $\rho(Tx_0,T^2x_0) < \rho(x_0,Tx_0) = \min_{x \in M}\rho(x,Tx)$; 另一方面, $Tx_0, T^2x_0 \in M$, 这与 $\rho(x_0,Tx_0)$ 是最小值矛盾.

1.3.8 记 $d = \inf\{\rho(x,f(x)) \mid x \in \overline{M}\}$, 先证 $\exists x_0 \in \overline{M}$, 使得
$$\rho(x_0,f(x_0)) = d.$$
这从下确界的定义出发, $\forall n \in \mathbb{N}$, $\exists x_n \in M$, 使得
$$d \leqslant \rho(x_n,f(x_n)) < d + \frac{1}{n}.$$
又因为 $M$ 列紧, 故存在 $x_{n_k} \to x_0$, 将上面不等式中的 $n$ 改为 $n_k$, 并令 $k \to \infty$, 就证得 $\rho(x_0,f(x_0)) = d$. 再证 $d = 0$. 用反证法. 如果 $d > 0$, 则有
$$d \leqslant \rho(f(x_0),f(f(x_0))) < \rho(x_0,f(x_0)) = d,$$
矛盾.

1.4.3 考虑 $C^1[0,1]$ 中的函数列:
$$f_n(x) = \sqrt{x^2 + \frac{1}{n^2}} \quad (-1 \leqslant x \leqslant 1),$$
可以验证 $\{f_n(x)\}_{n=1}^\infty$ 按范数 $\|\cdot\|_1$ 是基本列, 但是
$$f_n(x) \to |x| \notin C^1[0,1].$$

1.4.5 不妨假设 $b > a > 0$, 显然有 $\|f\|_b \leqslant \|f\|_a$, 由此可见, 为了证明不等价性, 只要证不存在 $c > 0$, 使得 $\|f\|_a \leqslant c\|f\|_b$ ($\forall f \in BC[0,\infty)$). 只须证 $\exists f_n \in BC[0,\infty)$, 使得
$$\frac{\|f_n\|_a^2}{\|f_n\|_b^2} \to \infty \quad (n \to \infty).$$
令
$$g_n(x) \triangleq \begin{cases} \mathrm{e}^{ax}, & 0 \leqslant x \leqslant n, \\ \mathrm{e}^{an}(n+1-x), & n \leqslant x \leqslant n+1 \quad (\text{见图 }1), \\ 0, & x \geqslant n+1, \end{cases}$$
则有
$$f_n(x) \triangleq \sqrt{g_n(x)},$$
$$\|f\|_a^2 \geqslant \int_0^n \mathrm{e}^{-ax} \cdot \mathrm{e}^{ax}\,\mathrm{d}x = n,$$
$$\|f\|_b^2 \leqslant \int_0^\infty \mathrm{e}^{-bx} \cdot \mathrm{e}^{ax}\,\mathrm{d}x = \int_0^\infty \mathrm{e}^{-(b-a)x}\,\mathrm{d}x = \frac{1}{b-a},$$
$$\frac{\|f_n\|_a^2}{\|f_n\|_b^2} \geqslant n(b-a) \to \infty \quad (n \to \infty).$$

1.6.7 (1) 当 $b-a = 1$ 时, $\forall n$, $\{e^{2\pi inx}\}$ 的周期是 1, 故 $S^\perp = \{\theta\}$. 当 $b-a < 1$ 时, 若 $u \in L^2[a,b]$, 使得
$$\int_a^b u e^{2\pi inx}\,\mathrm{d}x = 0 \quad (n=1,2,\cdots),$$
令 $\widetilde{u} = \begin{cases} u, & x \in [a,b], \\ 0, & x \in [b,a+1], \end{cases}$ 则有
$$\int_a^{a+1}\widetilde{u}e^{2\pi inx}\,\mathrm{d}x = 0 \Longrightarrow \widetilde{u} = 0 \quad (x \in [a,a+1])$$
$$\Longrightarrow u = 0 \quad (x \in [a,b])$$
$$\Longrightarrow S^\perp = \{\theta\}.$$

(2) 若 $b-a > 1$, 这时 $\{e^{2\pi inx}\}_{n=-\infty}^\infty$ 是 $L^2[b-1,b]$ 上的一组正交基. 因此, $L^2[b-1,b]$ 上的函数可以由它的 Fourier 系数决定. 利用这一点, 对 $\forall u \in L^2[a,b-1]$, $u \neq \theta$. 可将它扩充为 $L^2[a,b]$ 上的函数 $v(x) \in S^\perp$, 而 $v(x) \neq \theta$.

事实上, 令
$$v = \begin{cases} u(x), & x \in [a,b-1], \\ \widetilde{u}(x), & x \in (b-1,b], \end{cases}$$
其中 $(b-1,b]$ 上的函数 $\widetilde{u}(x)$ 的 Fourier 系数通过 $u(x)$ 在 $[a,b-1]$ 上的值来计算, 即
$$\widetilde{u}_n = \int_{b-1}^b \widetilde{u}e^{2\pi inx}\,\mathrm{d}x = -\int_a^{b-1}ue^{2\pi inx}\,\mathrm{d}x,$$
于是
$$\widetilde{u} = \sum_{n=-\infty}^\infty \widetilde{u}_ne^{2\pi inx} \in L^2[b-1,b],$$
并且
$$\int_a^b ve^{2\pi inx}\,\mathrm{d}x = \int_a^{b-1}ue^{2\pi inx}\,\mathrm{d}x + \int_{b-1}^b\widetilde{u}e^{2\pi inx}\,\mathrm{d}x = 0,$$
即 $v(x) \in S^\perp$.

2.1.3 (2) 先证明 $\|f\| = \sup_{\|x\|<1}f(x)$. 一方面, $\forall \|x\|<1$, $x \neq \theta$,
$$f(x) = \|x\|f\left(\frac{x}{\|x\|}\right) \leqslant \|x\|\sup_{\|y\|=1}f(y)$$
$$\stackrel{(1)}{=} \|x\| \cdot \|f\| < \|f\|.$$
又 $x = \theta$, $f(\theta) = 0 \leqslant \|f\|$, 所以
$$\sup_{\|x\|<1}f(x) \leqslant \|f\|.$$
另一方面, $\forall \|x\| = 1$, $\forall \varepsilon > 0$,
$$f(x) = (1+\varepsilon)f\left(\frac{x}{1+\varepsilon}\right) \leqslant (1+\varepsilon)\sup_{\|x\|<1}f(x),$$
所以
$$\|f\| = \sup_{\|x\|=1}f(x) \leqslant (1+\varepsilon)\sup_{\|x\|<1}f(x)$$
$$\Longrightarrow \|f\| \leqslant \sup_{\|x\|<1}f(x),$$
故 $\|f\| = \sup_{\|x\|<1}f(x)$. 于是, 对 $\forall\delta > 0$,
$$\delta\|f\| = \sup_{\|x\|<1}f(\delta x) = \sup_{\|y\|<\delta}f(y).$$

2.1.4 容易证明 $\|f\| \leqslant \int_0^1|y(t)|\,\mathrm{d}t$. 为了建立相反的不等式. 对 $\forall\varepsilon > 0$, 根据 $y(t)$ 在 $[0,1]$ 上的一致连续性, $\exists n \in \mathbb{N}$, 将 $[0,1]$ $n$ 等分, 使得函数在每一等分区间上的振幅小于 $\varepsilon$. 我们把所有的等分区间分为两类: 在第一类区间上不含有函数 $y(t)$ 的零点, 这类区间记作 $\Delta$, 在第二类区间上至少含有函数 $y(t)$ 的一个零点, 这类区间记作 $\nabla$. 因为函数 $y(t)$ 在区间 $\nabla$ 上必有零点, 所以在每个区间 $\nabla$ 上有 $|y(t)| < \varepsilon$. 定义 $\widetilde{x}(t) \in C[0,1]$,
$$\widetilde{x}(t) = \begin{cases} \mathrm{sign}\,y(t), & t \in \Delta, \\ \text{线性函数}, & t \in \nabla. \end{cases}$$
同时, 如果第二类区间 $\nabla$ 的端点是 $a$ 或 $b$, 则令 $\widetilde{x}(a) = 0$ 或 $\widetilde{x}(b) = 0$, 则有
$$f(\widetilde{x}) = \int_0^1\widetilde{x}(t)y(t)\,\mathrm{d}t$$
$$= \sum_{\forall\Delta}\int_\Delta\widetilde{x}(t)y(t)\,\mathrm{d}t + \sum_{\forall\nabla}\int_\nabla\widetilde{x}(t)y(t)\,\mathrm{d}t$$
$$\geqslant \sum_{\forall\Delta}\int_\Delta|y(t)|\,\mathrm{d}t - \sum_{\forall\nabla}\int_\nabla|y(t)|\,\mathrm{d}t$$
$$= \int_0^1|y(t)|\,\mathrm{d}t - 2\sum_{\forall\nabla}\int_\nabla|y(t)|\,\mathrm{d}t$$
$$> \int_0^1|y(t)|\,\mathrm{d}t - 2\varepsilon.$$

2.1.5 $|f(x)| \leqslant \|f\| \cdot \|x\| \stackrel{f(x)=1}{\Longrightarrow} \|x\| \geqslant \frac{1}{\|f\|} \Longrightarrow d \geqslant \frac{1}{\|f\|}$.

$\forall\varepsilon > 0$, $\exists x_0 \neq 0$, 使得
$$\frac{|f(x_0)|}{\|x_0\|} \geqslant \|f\| - \varepsilon \Longrightarrow \left\|\frac{x_0}{f(x_0)}\right\| \leqslant \frac{1}{\|f\|-\varepsilon}.$$
注意到 $f\left(\frac{x_0}{f(x_0)}\right) = 1$, 故有 $d \leqslant \frac{1}{\|f\|-\varepsilon}$.

2.1.6 $\forall\eta > 0$, $\exists x_1$, 使得
$$\frac{|f(x_1)|}{\|x_1\|} > \|f\| - \eta \Longrightarrow \left\|\frac{x_1}{f(x_1)}\right\| \cdot \|f\| < \frac{\|f\|}{\|f\|-\eta}.$$
取 $\eta = \frac{\varepsilon}{1+\varepsilon}\|f\|$, 便有
$$\left\|\frac{x_1}{f(x_1)}\right\| \cdot \|f\| < 1 + \varepsilon.$$
再令 $x_0 = \frac{x_1}{f(x_1)}\|f\|$.

2.1.7 (2) 举一个反例. 设
$$\mathscr{X} = \left\{(\xi_1,\xi_2,\cdots,\xi_n,\cdots) \middle| \sum_{n=1}^\infty|\xi_n| < \infty\right\},$$
$$\forall x = (\xi_1,\xi_2,\cdots,\xi_n,\cdots) \in \mathscr{X}, \quad \|x\| = \sup_{n\geqslant 1}|\xi_n|.$$
定义 $f(x) = \sum_{n=1}^\infty\xi_n$, 对 $a = (1,-1,0,\cdots) \in \mathscr{X}$ 显然 $f(a) = 0$. 利用 $a$ 和 $f(x)$ 构造如下线性算子: $\forall x \in \mathscr{X}$, 定义 $Tx = x - af(x)$. 容易验证 $N(T) = \{\theta\}$, 当然 $N(T)$ 闭. 再指出 $T$ 无界, 为此先证 $f(x) = \sum_{n=1}^\infty\xi_n$ 无界. 令
$$e_k = \{\underbrace{0,0,\cdots,0}_{k},1,0,\cdots\}, \quad x_n = \sum_{k=1}^n e_k \in \mathscr{X}, \quad \|x_n\| = 1,$$
$$f(x_n) = n \Longrightarrow \frac{|f(x_n)|}{\|x_n\|} = n \to \infty \quad (n \to \infty),$$
即 $f$ 无界. 再证 $T$ 无界.

事实上, 从 $Tx = x - af(x) \Longrightarrow af(x) = x - Tx = (I-T)x$. 用反证法. 如果 $T$ 有界, 则 $I-T$ 有界, 从而
$$|f(x)| \stackrel{\|a\|=1}{=} \|a\| \cdot |f(x)| = \|af(x)\|$$
$$= \|(I-T)x\| \leqslant M\|x\|,$
即 $f$ 有界, 矛盾.

2.1.8 (1) 记 $N(f) = H_f^0$, 就是要证
$$|f(x)| = \|f\|\rho(x,N(f)).$$
$\forall\varepsilon > 0$, $\exists y_\varepsilon \in N(f)$,
$$\|x-y_\varepsilon\| < \rho(x,N(f)) + \varepsilon,$$
$$|f(x)| = |f(x-y_\varepsilon)| \leqslant \|f\| \cdot \|x-y_\varepsilon\| \leqslant \|f\| \cdot \|x-y_\varepsilon\|$$
$$< \|f\|(\rho(x,N(f)) + \varepsilon)$$
$$\stackrel{\varepsilon\to 0}{\Longrightarrow} |f(x)| \leqslant \|f\|\rho(x,N(f)).$$
另一方面, $\forall z \notin N(f)$, $\forall x \in \mathscr{X}$, 令 $y = x - \frac{f(x)}{f(z)}z$, 则 $y \in N(f)$, 且
$$f(z)(x-y) = f(x)z \frac{|f(z)|}{\|z\|}\|x-y\| = |f(x)|$$
$$\Longrightarrow \|x-y\|\sup_{z\neq\theta}\frac{|f(z)|}{\|z\|} \leqslant |f(x)|$$
$$\Longrightarrow \inf_{y\in N(f)}\|x-y\|\sup_{z\neq\theta}\frac{|f(z)|}{\|z\|} \leqslant |f(x)|,$$
即
$$\|f\|\rho(x,N(f)) \leqslant |f(x)|.$$

(2) $\forall x \in H_f^\lambda \Longrightarrow f(x) = \lambda \Longrightarrow \rho(x,H_f^0) \stackrel{(1)}{=} \frac{|f(x)|}{\|f\|} = \frac{|\lambda|}{\|f\|}$.

为了解释 (1) 和 (2) 的几何意义, 设 $\mathscr{X} = \mathbb{R}^2$, $\mathbb{K} = \mathbb{R}$, $\forall f \in \mathscr{X}^*$, $\|f\| = 1$, $\forall x = (\xi,\eta) \in \mathbb{R}^2$, 令 $x_1 = (1,0)$, $x_2 = (0,1)$, $\alpha = f(x_1)$, $\beta = f(x_2)$, 则
$$f(x) = \alpha\xi + \beta\eta, \quad \|f\| = 1 \Longrightarrow \sqrt{\alpha^2+\beta^2} = 1.$$
根据平面解析几何知识, $|f(x)| = |\alpha\xi + \beta\eta|$ 表示点 $x = (\xi,\eta)$ 到通过原点的直线 (如图 2 所示)
$$H_f^0 = \{x = (\xi,\eta) \mid f(x) = \alpha\xi + \beta\eta = 0\}$$
的距离, 即
$$|f(x)| = |\alpha\xi + \beta\eta| = \rho(x,H_f^0).$$
注意到 $H_f^\lambda$ 和 $H_f^0$ 是互相平行的直线, 所以对 $\forall x \in H_f^\lambda$,
$$\rho(x,H_f^0) = \rho(\theta,H_f^\lambda) = \frac{|\alpha\xi + \beta\eta - \lambda|}{\sqrt{\alpha^2+\beta^2}}\bigg|_{(\xi,\eta)=(0,0)} = |\lambda|.$$



---



## 索引

> 按汉语拼音顺序

### A

- Alaoglu 定理 171
- Arzelà-Ascoli 定理 20
- Ascoli 定理 135
### B

- 半范数 38
- 半模 38
- 半内积空间 63
- 闭集 2
- 闭图像定理 113
- 闭值域算子 205
- 变分不等式 85
- 不变子空间 214
- 不动点 3
- 不动点定理 4
- B 空间 30
- B* 空间 30
- B_0 空间 265
- B_0^* 空间 265
- Baire 纲定理 103
- Banach 不动点定理 6
- Banach 空间 30
- Banach-Steinhaus 定理 115
- Bessel 不等式 70
- Brouwer 不动点定理 56
### C

- 超平面 131
- 承托超平面 136
- 重数 226
- 稠密 12
- 次线性泛函 38
- C^k(overline{Omega}) 34
- C_0^m(Omega) 66
- C_0^infty(Omega) 252
- Cantor 集 103
- Caratheodory 定理 60
- Cauchy-Schwarz 不等式 64
- C(X) 193
- C(X,Y) 193
### D

- 单位球面 37
- 等度连续 20
- 等价范数定理 113
- 等距同构 12
- 等距同构映射 12
- 等值面 94
- 第二纲集 103
- 第二共轭空间 155
- 第一纲集 103
- --- Page 320 ---
- ·308· 泛函分析讲义(第二版)(上)
- 第一预解公式 184
- 度量空间 1
- 对称凸集 52
- 对角化 227
- 对角线法则 167
- Dirac 符号 250
- Dirichlet 边值问题 95
- δ 函数 256
- D(Omega) 255
- D'(Omega) 256
### E

- 二次型 62
- Eberlein-Smulian 定理 169
- epsilon 网 16
- E(Omega) 264
### F

- 范数 30
- 范数等价 36
- 复 Hahn-Banach 定理 125
- F 空间 27
- F* 空间 27
- F(X,Y) 196
- Fourier 变换 278
- Fourier 积分 280
- Fourier 逆变换 280
- Fourier 系数 69
- Fredholm 结论 204
- Fredholm 算子 236
- F(X) 236
- F(X,Y) 236
### G

- 共轭双线性函数 62
- 共轭算子 157
- 共鸣定理 114
- 广义函数 255
- 广义微商 273
- Gelfand 定理 188
- Gelfand 引理 120
- Green 公式 95
### H

- H^m(Omega) 35
- H^{-m}(Omega) 292
- H^{m,p}(Omega) 35
- H_0^m(Omega) 67
- H_f^r 131
- H^s(R^n) 283
- Hahn-Banach 定理 126
- Hausdorff 定理 17
- Hilbert 空间 66
- Hilbert-Schmidt 定理 226
### J

- 基本空间 255
- 基本列 2
- 极大线性子空间 130
- 极化恒等式 82
- 极小极大刻画 228
- 紧算子 194
- --- Page 321 ---
- 第四章 广义函数与Sobolev空间 ·309·
- 局部可积函数 256
- 距离空间 1
- 均衡凸集 53
- j_delta(x) 252
### K

- 开映射 102
- 开映射定理 106
- 可分 17
- 可扩张 288
- 可数范数空间 263
- Kuhn-Tucker 定理 141
### L

- 连续谱 180
- 列紧 16
- 零链长 218
- L_{loc}^1(Omega) 256
- L^p(Omega,mu) (1 <= p < infty) 30
- L^infty(Omega,mu) 31
- l^p (1 <= p < infty) 31
- l^infty 33
- Lagrange 乘子 138
- Laplace 方程 95
- Lax-Milgram 定理 116
- Lax 等价定理 118
- Lipschitz 空间 49
- L(X) 88
- L(X,Y) 88
### M

- Mazur 定理 136
- Meyers-Serrin 定理 287
- Minkowski 不等式 31
- Minkowski 泛函 51
### N

- 内积空间 63
- Newton 法 10
### P

- 平方平均逼近 81
- 平行四边形等式 66
- 谱半径 186
- 谱点 180
- 谱集 180
- Plancherel 定理 282
- Poincare 不等式 66
### Q

- 强极限 162
- 强收敛 162
- 全连续算子 194
### R

- 弱闭 178
- 弱极限 162
- 弱解 95
- 弱列紧 167
- 弱收敛 162
- Rellich 定理 290
- --- Page 322 ---
- ·310· 泛函分析讲义(第二版)(上)
- Riesz 表示定理 (Hilbert 空间) 93
- Riesz 表示定理 (连续函数空间) 153
- Riesz 引理 43
- Runge 定理 153
### S

- 商空间 44
- 剩余谱 180
- 实 Hahn-Banach 定理 123
- 收敛 2
- 疏集 103
- 速降函数 265
- Schauder 不动点定理 57
- Schauder 基 198
- Sobolev 空间 284
- Sobolev 嵌入定理 289
- S(R^n) 264
- S'(R^n) 267
### T

- 特征元 179
- 特征值 179
- 凸包 51
- 凸函数 48
- 凸集分离定理 134
- 图模 114
### W

- 完备 2
- 完备化 12
- 完全有界 16
- 维数 24
- W^{m,p}(Omega) 284
- W_p^m(Omega) 284
### X

- 吸收凸集 52
- 线性包 25
- 线性和 25
- 线性基 24
- 线性空间 23
- 线性流形 24
- 线性同构 24
- 线性相关 24
- 线性子空间 24
- 像链长 218
- 序列完备 255
### Y

- 压缩映射原理 6
- 严格凸 40
- 一致收敛 165
- 一致有界 20
- 一致有界定理 114
- 隐函数存在定理 7
- 有穷秩算子 196
- 余维数 210
- 预解集 180
- Young 不等式 160
### Z

- 真子空间 24
- 正交 68
- 正交补 68
- 正交分解 79
- 正交规范集 69
- 正交化 74
- 正交基 68
- 正交集 69
- 正交投影 80
- 正交投影算子 90
- 正则值 180
- 支集 252
- 直和 25
- 指标 236
- 秩 1 算子 197
- 准范数 26
- 准模 26
- 自反 156
- 自列紧 16
- 最佳逼近 39
- 最佳逼近元 40
- 最佳估计问题 81
- 最小二乘法 80
- Zorn 引理 69
- --- Page 323 ---
- [空白页]
- --- Page 324 ---
- [空白页]
- --- Page 325 ---
- [空白页]
- --- Page 326 ---
- [空白页]
- --- Page 327 ---
- [空白页]
- --- Page 328 ---
- [空白页]
- --- Page 329 ---
- [空白页]
- --- Page 330 ---
- [空白页 - 封底]

