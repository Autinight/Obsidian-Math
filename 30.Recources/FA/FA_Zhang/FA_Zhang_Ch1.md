# 第一章  度量空间

## §1  压缩映射原理

度量空间 (metric space) 又称距离空间, 是一种拓扑空间, 其上的拓扑由指定的一个距离决定.

> [!definition] 定义 1.1.1
> 设 $\mathscr{X}$ 是一个非空集. $\mathscr{X}$ 叫作度量空间, 是指在 $\mathscr{X}$ 上定义了一个双变量的实值函数 $\rho(x,y)$, 满足下列三个条件:
> (1) $\rho(x,y)\ge 0$, 而且 $\rho(x,y)=0$, 当且仅当 $x=y$;
> (2) $\rho(x,y)=\rho(y,x)$;
> (3) $\rho(x,z)\le\rho(x,y)+\rho(y,z)$  ($\forall x,y,z\in\mathscr{X}$).

这里 $\rho$ 叫作 $\mathscr{X}$ 上的一个距离, 以 $\rho$ 为度量的度量空间 $\mathscr{X}$ 记作 $(\mathscr{X},\rho)$.

> [!remark]
> 距离概念是欧氏空间中两点间距离的抽象. 事实上, 如果对 $\forall x=(x_1,x_2,\cdots,x_n)$, $y=(y_1,y_2,\cdots,y_n)\in\mathbb{R}^n$, 令
>
> $$\rho(x,y)=\big[(x_1-y_1)^2+\cdots+(x_n-y_n)^2\big]^{1/2}. \tag{1.1.1}$$
>
> 容易看到条件 (1), (2), (3) 都满足. 以后当说到欧氏空间时, 我们始终用这个 $\rho$ 规定其上的距离.

> [!example] 例 1.1.2 (空间 $C[a,b]$)
> 区间 $[a,b]$ 上的连续函数全体记为 $C[a,b]$, 按距离
>
> $$\rho(x,y)\triangleq\max_{a\le t\le b}|x(t)-y(t)| \tag{1.1.2}$$
>
> 形成度量空间 $(C[a,b],\rho)$, 简记作 $C[a,b]$. 以后当说到连续函数空间 $C[a,b]$ 时, 我们始终用 (1.1.2) 式规定的 $\rho$ 作为其上的距离, 除非另外说明.

引进距离的目的是刻画收敛.

> [!definition] 定义 1.1.3
> 度量空间 $(\mathscr{X},\rho)$ 上的点列 $\{x_n\}$ 叫作收敛到 $x_0$ 是指: $\rho(x_n,x_0)\to0$ ($n\to\infty$). 这时记作 $\lim_{n\to\infty}x_n=x_0$, 或简单地记作 $x_n\to x_0$.

> [!remark]
> 在 $C[a,b]$ 中点列 $\{x_n\}$ 收敛到 $x_0$ 是指: $\{x_n(t)\}$ 一致收敛到 $x_0(t)$.

与实数集合一样, 对于一般的度量空间可引进闭集和完备性等概念.

> [!definition] 定义 1.1.4
> 度量空间 $(\mathscr{X},\rho)$ 中的一个子集 $E$ 称为闭集, 是指: $\forall\{x_n\}\subset E$, 若 $x_n\to x_0$, 则 $x_0\in E$.

> [!definition] 定义 1.1.5
> 度量空间 $(\mathscr{X},\rho)$ 上的点列 $\{x_n\}$ 叫作基本列, 是指: $\rho(x_n,x_m)\to0$ ($n,m\to\infty$). 这也就是说: $\forall\varepsilon>0$, $\exists N(\varepsilon)$, 使得 $m,n\ge N(\varepsilon)\implies\rho(x_n,x_m)<\varepsilon$. 如果空间中所有基本列都是收敛列, 那么就称该空间是完备的.

> [!example] 例 1.1.6
> $(\mathbb{R}^n,\rho)$ 是完备的, 其中 $\rho$ 按 (1.1.1) 式定义.

> [!example] 例 1.1.7
> $(C[a,b],\rho)$ 是完备的.

> [!proof]- 证
> 设 $\{x_n\}$ 是 $(C[a,b],\rho)$ 中的一串基本列, 那么 $\forall\varepsilon>0$, $\exists N(\varepsilon)$, 使得对 $\forall m,n\ge N(\varepsilon)$, 有
>
> $$\rho(x_m,x_n)=\max_{a\le t\le b}|x_m(t)-x_n(t)|<\varepsilon.$$
>
> 因此, 对 $\forall t\in[a,b]$,
>
> $$|x_m(t)-x_n(t)|<\varepsilon\quad(\forall m,n\ge N(\varepsilon)). \tag{1.1.3}$$
>
> 固定 $t\in[a,b]$, 我们看到数列 $\{x_n(t)\}$ 是基本的, 从而极限 $\lim_{n\to\infty}x_n(t)$ 存在. 让我们用 $x_0(t)$ 表示此极限, 在 (1.1.3) 式中令 $m\to\infty$ 得到 $|x_0(t)-x_n(t)|\le\varepsilon$ ($\forall n\ge N(\varepsilon)$). 由此可见 $x_n(t)$ 一致收敛到 $x_0(t)$, 从而 $x_0(t)$ 连续且在 $C[a,b]$ 中 $x_n$ 收敛到 $x_0$. ■

给定度量空间 $(\mathscr{X},\rho)$, $(\mathscr{Y},r)$, 考察映射 $T:\mathscr{X}\to\mathscr{Y}$.

> [!definition] 定义 1.1.8
> 设 $T:(\mathscr{X},\rho)\to(\mathscr{Y},r)$ 是一个映射, 称它是连续的, 如果对于 $\mathscr{X}$ 中的任意点列 $\{x_n\}$ 和点 $x_0$,
>
> $$\rho(x_n,x_0)\to0\implies r(Tx_n,Tx_0)\to0\quad(n\to\infty).$$

> [!proposition] 命题 1.1.9
> 为了 $T:(\mathscr{X},\rho)\to(\mathscr{Y},r)$ 是连续的, 必须且只须 $\forall\varepsilon>0$, $\forall x_0\in\mathscr{X}$, $\exists\delta=\delta(x_0,\varepsilon)>0$, 使得
>
> $$\rho(x,x_0)<\delta\implies r(Tx,Tx_0)<\varepsilon\quad(\forall x\in\mathscr{X}). \tag{1.1.4}$$

> [!proof]- 证
> 必要性. 若 (1.1.4) 式不成立, 必 $\exists x_0\in\mathscr{X}$, $\exists\varepsilon>0$, 使得 $\forall n\in\mathbb{N}$, $\exists x_n$, 使得 $\rho(x_n,x_0)<1/n$, 但 $r(Tx_n,Tx_0)\ge\varepsilon$, 即得 $\lim_{n\to\infty}\rho(x_n,x_0)=0$, 但 $\lim_{n\to\infty}r(Tx_n,Tx_0)\neq0$, 矛盾.
>
> 充分性. 设 (1.1.4) 式成立, 且 $\lim_{n\to\infty}\rho(x_n,x_0)=0$, 那么 $\forall\varepsilon>0$, $\exists N=N(\delta(x_0,\varepsilon))$, 使得当 $n>N$ 时, 有 $\rho(x_n,x_0)<\delta$. 从而 $r(Tx_n,Tx_0)<\varepsilon$, 即得 $\lim_{n\to\infty}r(Tx_n,Tx_0)=0$. ■

设 $\varphi$ 是 $\mathbb{R}$ 上定义的实函数, 求方程

$$\varphi(x)=0$$

的根的问题可以看成 $\mathbb{R}\to\mathbb{R}$ 的映射

$$f(x)=x-\varphi(x)$$

的不动点问题. 即求 $x\in\mathbb{R}$ 满足:

$$f(x)=x.$$

下列常微分方程的初值问题:

$$
\begin{cases}
\dfrac{\mathrm{d}x}{\mathrm{d}t}=F(t,x),\\[6pt]
x(0)=\xi,
\end{cases}\tag{1.1.5}
$$

或它的等价形式, 即求连续函数 $x(t)$ 满足下列积分方程的问题:

$$x(t)=\xi+\int_0^t F(\tau,x(\tau))\,\mathrm{d}\tau, \tag{1.1.6}$$

也可以看成是一个不动点问题. 为此, 在以 $t=0$ 为中心的某区间 $[-h,h]$ 上考察度量空间 $C[-h,h]$, 并引入映射

$$(Tx)(t)=\xi+\int_0^t F(\tau,x(\tau))\,\mathrm{d}\tau, \tag{1.1.7}$$

则 (1.1.6) 式等价于求 $C[-h,h]$ 上的一个点 $x$, 使得 $x=Tx$, 即求 $T$ 的不动点.

在度量空间上有一个很简单而基本的不动点定理 —— 压缩映射原理.

> [!definition] 定义 1.1.10
> 称 $T:(\mathscr{X},\rho)\to(\mathscr{X},\rho)$ 是一个压缩映射, 如果存在 $0<\alpha<1$, 使得 $\rho(Tx,Ty)\le\alpha\rho(x,y)$ ($\forall x,y\in\mathscr{X}$).

> [!example] 例 1.1.11
> 设 $\mathscr{X}=[0,1]$, $T(x)$ 是 $[0,1]$ 上的一个可微函数, 满足条件:
>
> $$T(x)\in[0,1]\quad(\forall x\in[0,1]), \tag{1.1.8}$$
>
> 以及
>
> $$|T'(x)|\le\alpha<1\quad(\forall x\in[0,1]), \tag{1.1.9}$$
>
> 则映射 $T:\mathscr{X}\to\mathscr{X}$ 是一个压缩映射.

> [!proof]- 证
> $$\begin{aligned}\rho(Tx,Ty)&=|T(x)-T(y)|\\&=|T'(\theta x+(1-\theta)y)(x-y)|\\&\le\alpha|x-y|=\alpha\rho(x,y)\quad(\forall x,y\in\mathscr{X},\;0<\theta<1).\end{aligned}$$ ■

**启发**  设 $T:[0,1]\to[0,1]$ 可微且满足 (1.1.8) 式及 (1.1.9) 式, 问 $T$ 是否存在不动点? 若存在, 有多少个?

**直观与算法**  $\forall x_0\in[0,1]$, 做迭代序列 $x_{n+1}=Tx_n$ ($n=0,1,2,\cdots$), 参见图 1.1.1.

因为

$$|x_{n+1}-x_n|=|Tx_n-Tx_{n-1}|\le\alpha|x_n-x_{n-1}|\le\cdots\le\alpha^n|x_1-x_0|,$$

图 1.1.1

从而对 $\forall p\in\mathbb{N}$,

$$\begin{aligned}|x_{n+p}-x_n|&\le\sum_{i=1}^p|x_{n+i}-x_{n+i-1}|\le\sum_{i=1}^p\alpha^{n+i-1}|x_1-x_0|\\&<\sum_{i=1}^\infty\alpha^{n+i-1}|x_1-x_0|=\frac{\alpha^n}{1-\alpha}|x_1-x_0|\to0\end{aligned}$$

(当 $n\to\infty$, 对 $\forall p\in\mathbb{N}$ 一致). 因此, $\{x_n\}$ 是一个基本列, 从而有极限. 从 $x_{n+1}=Tx_n$, 两边取极限（因 $T$ 连续）得

$$x^*=Tx^*,$$

即 $x^*$ 为一不动点. 这不动点还是唯一的. 事实上, 若 $x^*$, $x^{**}$ 都是不动点, 则

$$\begin{aligned}|x^*-x^{**}|&=|Tx^*-Tx^{**}|\\&\le\alpha|x^*-x^{**}|.\end{aligned}$$

由此推出

$$x^*=x^{**}.$$

抽去上述过程中实数与绝对值的具体内容, 不难把这个结论推广到一般度量空间上去. 若 $T:(\mathscr{X},\rho)\to(\mathscr{X},\rho)$ 是一个压缩映射, 则仿照上述过程, 任取初始点 $x_0\in\mathscr{X}$. 考察迭代产生的序列

$$x_{n+1}=Tx_n\quad(n=0,1,2,\cdots).$$

和前面一样, 我们有

$$\begin{aligned}\rho(x_{n+1},x_n)&=\rho(Tx_n,Tx_{n-1})\\&\le\alpha\rho(x_n,x_{n-1})\le\cdots\le\alpha^n\rho(x_1,x_0).\end{aligned}$$

从而对 $\forall p\in\mathbb{N}$,

$$\begin{aligned}\rho(x_{n+p},x_n)&\le\sum_{i=1}^p\rho(x_{n+i},x_{n+i-1})\\&\le\frac{\alpha^n}{1-\alpha}\,\rho(x_1,x_0)\to0\end{aligned}$$

(当 $n\to\infty$, 对 $\forall p\in\mathbb{N}$ 一致). 由此可见 $\{x_n\}$ 是一个基本列. 为了它有极限, 还要假定 $(\mathscr{X},\rho)$ 是完备的. 于是我们得到

> [!theorem] 定理 1.1.12 (Banach 不动点定理 —— 压缩映射原理)
> 设 $(\mathscr{X},\rho)$ 是一个完备的度量空间, $T$ 是 $(\mathscr{X},\rho)$ 到其自身的一个压缩映射, 则 $T$ 在 $\mathscr{X}$ 上存在唯一的不动点.

这个原理非常基本, 它是泛函分析中的一个最常用、最简单的存在性定理. 数学分析中的许多存在性定理是它的特殊情形.

> [!example] 例 1.1.13
> 常微分方程的初值问题 (1.1.5) 的局部存在唯一性.
>
> 我们已经把这个问题化归为一个求不动点的问题了. 先在 $C[-h,h]$ 上考察由 (1.1.7) 式定义的映射 $T$, 我们考察在 $F(t,x)$ 上添加什么条件可以使 $T$ 成为一个压缩映射. 注意到
>
> $$\begin{aligned}\rho(Tx,Ty)&=\max_{|t|\le h}\Bigl|\int_0^t F(\tau,x(\tau))\,\mathrm{d}\tau-\int_0^t F(\tau,y(\tau))\,\mathrm{d}\tau\Bigr|\\&\le h\max_{|t|\le h}\bigl|F(t,x(t))-F(t,y(t))\bigr|,\end{aligned}$$
>
> 因此, 比如说只要假设二元函数 $F(t,x)$ 对变元 $x$ 关于 $t$ 一致地满足局部 Lipschitz 条件: $\exists\delta>0$, $L>0$, 使得当 $|t|\le h$, $|x_1-\xi|\le\delta$, $|x_2-\xi|\le\delta$ 时, 有
>
> $$|F(t,x_1)-F(t,x_2)|\le L|x_1-x_2|, \tag{1.1.10}$$
>
> 这时就有
>
> $$\rho(Tx,Ty)\le Lh\,\rho(x,y)\quad(\forall x,y\in\overline{B}(\xi,\delta)),$$
>
> 其中
>
> $$\overline{B}(\xi,\delta)\triangleq\bigl\{x(t)\in C[-h,h]\;\big|\;\max_{|t|\le h}|x(t)-\xi|\le\delta\bigr\}.$$
>
> 在这里我们不能直接取 $C[-h,h]$ 为定理 1.1.12 中的度量空间 $\mathscr{X}$, 因为当 $Lh<1$ 时, $T$ 只是在 $C[-h,h]$ 的子集 $\overline{B}(\xi,\delta)$ 上才是压缩的. 在这里我们把常数 $\xi$ 看成是 $[-h,h]$ 上恒等于 $\xi$ 的常值函数.
>
> 我们取 $\mathscr{X}=\overline{B}(\xi,\delta)$, 为了要使 $T:\mathscr{X}\to\mathscr{X}$, 再设
>
> $$M\triangleq\max\bigl\{|F(t,x)|\;\big|\;(t,x)\in[-h,h]\times[\xi-\delta,\xi+\delta]\bigr\},$$
>
> 取 $h>0$ 足够小, 以使
>
> $$\max\bigl|(Tx)(t)-\xi\bigr|=\max\Bigl|\int_0^t F(\tau,x(\tau))\,\mathrm{d}\tau\Bigr|\le Mh\le\delta.$$
>
> 由于 $(C[-h,h],\rho)$ 是一个完备的度量空间, 而 $\mathscr{X}$ 又是它的一个闭子集, 因此 $(\mathscr{X},\rho)$ 还是一个完备的度量空间（习题 1.1.1）. 于是我们得到了下面的定理.

> [!theorem] 定理 1.1.14
> 设函数 $F(t,x)$ 在 $[-h,h]\times[\xi-\delta,\xi+\delta]$ 上定义、连续并满足条件 (1.1.10), 则当 $h<\min\{\delta/M,1/L\}$ 时, 初值问题 (1.1.5) 在 $[-h,h]$ 上存在唯一解.

> [!example] 例 1.1.15 (隐函数存在定理)
> 设 $f(x,y)=(f_1(x,y),\cdots,f_m(x,y)):\mathbb{R}^n\times\mathbb{R}^m\to\mathbb{R}^m$, $U\times V\subset\mathbb{R}^n\times\mathbb{R}^m$ 是 $(x_0,y_0)$ 在 $\mathbb{R}^n\times\mathbb{R}^m$ 中的一个邻域. 设 $f(x,y)$ 及
>
> $$\frac{\partial f(x,y)}{\partial y}=
> \begin{pmatrix}
> \dfrac{\partial f_1}{\partial y_1}(x,y), & \cdots, & \dfrac{\partial f_1}{\partial y_m}(x,y)\\[6pt]
> \vdots & & \vdots\\[6pt]
> \dfrac{\partial f_m}{\partial y_1}(x,y), & \cdots, & \dfrac{\partial f_m}{\partial y_m}(x,y)
> \end{pmatrix}$$
>
> 在 $U\times V$ 内连续, 又设
>
> $$f(x_0,y_0)=0,\quad\bigl[\det\bigl(\tfrac{\partial f}{\partial y}(x,y)\bigr)\bigr](x_0,y_0)\neq0,$$
>
> 则 $\exists(x_0,y_0)$ 的一个邻域 $U_0\times V_0\subset U\times V$ 以及唯一的连续函数 $\varphi:U_0\to V_0$, 满足
>
> $$
> \begin{cases}
> f(x,\varphi(x))=0 & (\text{当 }x\in U_0),\\
> \varphi(x_0)=y_0.
> \end{cases}
> $$

> [!proof]- 证
> 用 $(\frac{\partial f(x_0,y_0)}{\partial y})^{-1}\cdot f(x,y)^\mathsf{T}$ 代替 $f(x,y)^\mathsf{T}$, 可设
>
> $$\frac{\partial f}{\partial y}(x_0,y_0)=
> \begin{pmatrix}
> 1 & \cdots & 0\\
> \vdots & \ddots & \vdots\\
> 0 & \cdots & 1
> \end{pmatrix}$$
>
> 为恒等矩阵, 其中
>
> $$f(x,y)^\mathsf{T}=
> \begin{pmatrix}
> f_1(x,y)\\
> \vdots\\
> f_m(x,y)
> \end{pmatrix}.$$
>
> 考虑映射 $T:\varphi\mapsto T\varphi$,
>
> $$(T\varphi)(x)=\varphi(x)-f(x,\varphi(x)),$$
>
> 其中 $\varphi\in C(\overline{B}(x_0,r),\mathbb{R}^m)$, 这里 $r>0$, $C(\overline{B}(x_0,r),\mathbb{R}^m)$ 表示定义在闭球 $\overline{B}(x_0,r)$ 上取值于 $\mathbb{R}^m$ 上的向量值连续函数空间, 其距离定义为
>
> $$\rho(\varphi,\psi)\triangleq\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}|\varphi_i(x)-\psi_i(x)|,$$
>
> 其中 $\varphi=(\varphi_1,\cdots,\varphi_m)$, $\psi=(\psi_1,\cdots,\psi_m)$. 因为假设 $\dfrac{\partial f(x,y)}{\partial y}$ 在 $U\times V$ 上连续, 所以 $\exists\delta>0$, 使得
>
> $$\left|\delta_{ij}-\left[\frac{\partial f(x,y)}{\partial y}\right]_{ij}\right|<\frac{1}{2m},$$
>
> $$i,j=1,2,\cdots,m,\;x\in\overline{B}(x_0,\delta),\;y\in\overline{B}(y_0,\delta),$$
>
> 其中 $[\quad]_{ij}$ 表示括号内矩阵的第 $i$ 行, 第 $j$ 列元素, $\delta_{ij}=0$, $i\neq j$, $\delta_{ij}=1$, $i=j$. 记 $d_i(x)=\varphi_i(x)-\psi_i(x)$, $i=1,2,\cdots,m$, 根据微分中值定理,
>
> $$\begin{aligned}\rho(T\varphi,T\psi)&=\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}|d_i(x)-f_i(x,\varphi(x))+f_i(x,\psi(x))|\\&=\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}\left|d_i(x)-\sum_{j=1}^m\frac{\partial f_i(x,\widehat{y}(x))}{\partial y_j}d_j(x)\right|\\&\leqslant\frac12\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}|d_i(x)|=\frac12\rho(\varphi,\psi),\end{aligned}\qquad(1.1.11)$$
>
> 其中 $\varphi,\psi\in\mathscr{X}$, $\widehat{y}(x)=(\widehat{y}_1(x),\widehat{y}_2(x),\cdots,\widehat{y}_m(x))$, 这里
>
> $$\begin{aligned}\mathscr{X}&\triangleq\{\varphi\in C(\overline{B}(x_0,r),\mathbb{R}^m)\mid\varphi(x_0)=y_0,\\&\qquad\varphi(x)\in\overline{B}(y_0,\delta),\;x\in\overline{B}(x_0,r)\},\\\widehat{y}_i(x)&=\theta_i(x)\varphi(x)+(1-\theta_i(x))\psi(x),\\&\quad0<\theta_i(x)<1,\;x\in\overline{B}(x_0,r).\end{aligned}$$
>
> 因 $\mathscr{X}$ 在 $C(\overline{B}(x_0,r),\mathbb{R}^m)$ 中闭, 从而是一个完备度量空间. (1.1.11) 式表明, $T:\mathscr{X}\to C(\overline{B}(x_0,r),\mathbb{R}^m)$ 是压缩映射. 剩下来只要再证 $T:\mathscr{X}\to\mathscr{X}$ 就够了, 因为根据压缩映射原理 (定理 1.1.12), $T$ 存在唯一的不动点, 这就是我们所要证的. 注意到
>
> $$\begin{aligned}\rho(T\varphi,y_0)&\leqslant\rho(T\varphi,Ty_0)+\rho(Ty_0,y_0)\\&\leqslant\frac12\rho(\varphi,y_0)+\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}|f_i(x,y_0)|,\end{aligned}$$
>
> 这里把 $y_0$ 看成映射: $x\mapsto y_0$, $x\in\overline{B}(x_0,r)$, 此时有 $y_0\in\mathscr{X}$. 又由 $f$ 的连续性, $\exists\eta>0$, 使得
>
> $$\max_{\substack{x\in\overline{B}(x_0,r)\\1\leqslant i\leqslant m}}|f_i(x,y_0)|<\frac{\delta}{2}.$$
>
> 因此, 当 $0<r<\min\{\eta,\delta\}$ 时, $\rho(Ty_0,y_0)<\dfrac{\delta}{2}$,
>
> $$\rho(T\varphi,y_0)\leqslant\frac12\rho(\varphi,y_0)+\frac12\delta\leqslant\frac12\delta+\frac12\delta=\delta,\quad\varphi\in\mathscr{X}.$$
>
> 此外, 还有
>
> $$\begin{aligned}(T\varphi)(x_0)&=\varphi(x_0)-f(x_0,\varphi(x_0))\\&=y_0-f(x_0,y_0),\quad\varphi\in\mathscr{X}.\end{aligned}$$
>
> 所以 $T:\mathscr{X}\to\mathscr{X}$.

> [!exercise] 习题
>
> **1.1.1** 证明: 完备空间的闭子集是一个完备的子空间, 而任一度量空间中的完备子空间必是闭子集.
>
> **1.1.2** (Newton 法) 设 $f$ 是定义在 $[a,b]$ 上的二次连续可微的实值函数, $\widetilde{x}\in(a,b)$ 使得 $f(\widetilde{x})=0$, $f'(\widetilde{x})\neq0$. 求证: 存在 $\widetilde{x}$ 的邻域 $U(\widetilde{x})$, 使得 $\forall x_0\in U(\widetilde{x})$, 迭代序列
>
> $$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\quad(n=0,1,2,\cdots)$$
>
> 是收敛的, 并且
>
> $$\lim_{n\to\infty}x_n=\widetilde{x}.$$
>
> **1.1.3** 设 $(\mathscr{X},\rho)$ 是度量空间, 映射 $T:\mathscr{X}\to\mathscr{X}$ 满足
>
> $$\rho(Tx,Ty)<\rho(x,y)\quad(\forall x\neq y),$$
>
> 并已知 $T$ 有不动点, 求证: 此不动点是唯一的.
>
> **1.1.4** 设 $T$ 是度量空间上的压缩映射, 求证: $T$ 是连续的.
>
> **1.1.5** 设 $T$ 是压缩映射, 求证: $T^n\,(n\in\mathbb{N})$ 也是压缩映射, 并说明逆命题不一定成立.
>
> **1.1.6** 设 $M$ 是 $(\mathbb{R}^n,\rho)$ 中的有界闭集, 映射 $T:M\to M$ 满足: $\rho(Tx,Ty)<\rho(x,y)\,(\forall x,y\in M,\,x\neq y)$. 求证: $T$ 在 $M$ 中存在唯一的不动点.
>
> **1.1.7** 对于积分方程
>
> $$x(t)-\lambda\int_0^1\mathrm{e}^{t-s}x(s)\,\mathrm{d}s=y(t),$$
>
> 其中 $y(t)\in C[0,1]$ 为一给定函数, $\lambda$ 为常数, $|\lambda|<1$, 求证: 存在唯一解 $x(t)\in C[0,1]$.

## **§2 完备化**

在压缩映射原理 (定理 1.1.12) 中, 对空间 $(\mathscr{X},\rho)$ 的完备性要求一般来说是不能省略的. 这很容易从下例中看出. 大家知道: 函数 $T(x)\triangleq\dfrac12\sqrt{x+1}$ 在 $[0,1]$ 上有定义, 并且有唯一的不动点 $x_0=\dfrac{\sqrt{17}+1}{8}$. 然而若取 $\mathscr{X}=[0,1]\setminus\{x_0\}$, 那么 $T$ 仍然是 $\mathscr{X}\to\mathscr{X}$ 的压缩映射, 但它却不再有不动点. 因此在许多分析问题中, 我们经常要求所在的空间 $\mathscr{X}$ 是完备的. 不过, 空间是否完备与其上的距离紧密相连. 以 $C[a,b]$ 为例, 当赋以另一距离:

$$\rho_1(x,y)\triangleq\int_a^b|x(t)-y(t)|\mathrm{d}t\qquad(1.2.1)$$

时, $(C[a,b],\rho_1)$ 就不是完备的 (请读者自己验证)! 以下我们将仿照实数理论中从有理数域出发定义无理数的方法, 对空间 $(\mathscr{X},\rho)$ 增添"理想元素", 使之"扩充"为一个完备空间.

> [!definition] 定义 1.2.1
> 设 $(\mathscr{X},\rho),(\mathscr{X}_1,\rho_1)$ 是两个度量空间, 如果存在映射 $\varphi:\mathscr{X}\to\mathscr{X}_1$ 满足
> (1) $\varphi$ 是满射,
> (2) $\rho(x,y)=\rho_1(\varphi x,\varphi y)\quad(\forall x,y\in\mathscr{X})$,
> 则称 $(\mathscr{X},\rho)$ 和 $(\mathscr{X}_1,\rho_1)$ 是**等距同构**的, 并称 $\varphi$ 为**等距同构映射**, 有时简称**等距同构**.

> [!remark]
> 由 (2) 导出 $\varphi$ 还是单射.

显然, 凡是等距同构的度量空间, 它们的一切与距离相联系的性质都是一样的. 因此今后我们将不再区分它们. 如果度量空间 $(\mathscr{X}_1,\rho_1)$ 与另一个度量空间 $(\mathscr{X}_2,\rho_2)$ 的子空间 $(\mathscr{X}_0,\rho_2)$ 是等距同构的, 我们就说 $(\mathscr{X}_1,\rho_1)$ 可以**嵌入** $(\mathscr{X}_2,\rho_2)$. 在上述意义下, 我们认为 $(\mathscr{X}_1,\rho_1)$ 就是 $(\mathscr{X}_2,\rho_2)$ 的一个子空间, 并简单地记作

$$(\mathscr{X}_1,\rho_1)\subset(\mathscr{X}_2,\rho_2).$$

在实数集合里, 我们知道什么叫稠密子集, 这个概念可以推广到一般的度量空间.

> [!definition] 定义 1.2.2
> 设 $(\mathscr{X},\rho)$ 是度量空间. 集合 $E\subset\mathscr{X}$ 叫作在 $\mathscr{X}$ 中的**稠密子集**, 如果 $\forall x\in\mathscr{X},\,\forall\varepsilon>0,\,\exists z\in E$, 使得 $\rho(x,z)<\varepsilon$. 换句话说: $\forall x\in\mathscr{X},\,\exists\{x_n\}\subset E$, 使得 $x_n\to x\;(n\to\infty)$.

> [!example] 例 1.2.3
> $[a,b]$ 上的多项式全体记为 $P[a,b]$. 根据 Weierstrass 定理可知 $P[a,b]$ 在 $C[a,b]$ 中稠密.

> [!definition] 定义 1.2.4
> 包含给定度量空间 $(\mathscr{X},\rho)$ 的最小的完备度量空间称为 $\mathscr{X}$ 的**完备化空间**, 其中最小的含义是: 任何一个以 $(\mathscr{X},\rho)$ 为子空间的完备度量空间都以此空间为子空间.

> [!proposition] 命题 1.2.5
> 如果 $(\mathscr{X}_1,\rho_1)$ 是一个以 $(\mathscr{X},\rho)$ 为子空间的完备度量空间, $\rho_1|_{\mathscr{X}\times\mathscr{X}}=\rho$, 并且 $\mathscr{X}$ 在 $\mathscr{X}_1$ 中稠密, 则 $\mathscr{X}_1$ 是 $\mathscr{X}$ 的完备化空间.

> [!proof]- 证
> 事实上, $\forall\xi\in\mathscr{X}_1$, $\exists x_n\in\mathscr{X}$, 使得 $\rho_1(x_n,\xi)\to0\;(n\to\infty)$. 如果存在 $(\mathscr{X}_2,\rho_2)$ 以 $(\mathscr{X},\rho)$ 为子空间, 因为
>
> $$\rho_2(x_n,x_m)=\rho_1(x_n,x_m)\to0\quad(n,m\to\infty),$$
>
> 所以 $\exists\widehat{\xi}\in\mathscr{X}_2$, 使得 $\rho_2(x_n,\widehat{\xi})\to0$. 做映射 $T:\mathscr{X}_1\to\mathscr{X}_2$, $T\xi=\widehat{\xi}$. 我们还要证 $T$ 是等距的. 因为 $\forall\eta\in\mathscr{X}_1$, 又 $\exists y_n\in\mathscr{X}$, 使得 $\rho_1(y_n,\eta)\to0$, 所以
>
> $$\rho_1(\xi,\eta)=\lim_{n\to\infty}\rho_1(x_n,y_n)=\lim_{n\to\infty}\rho_2(x_n,y_n)=\rho_2(\widehat{\xi},\widehat{\eta}).$$
>
> 这表明 $(\mathscr{X}_1,\rho_1)$ 是 $(\mathscr{X}_2,\rho_2)$ 的一个子空间.

> [!theorem] 定理 1.2.6
> 每一个度量空间都有一个完备化空间.

> [!proof]- 证
> 设 $(\mathscr{X},\rho)$ 是一个度量空间, 分三步证明它有一个完备化空间.
>
> (1) 将 $\mathscr{X}$ 中的基本列分类, 凡是满足
>
> $$\lim_{n\to\infty}\rho(x_n,y_n)=0$$
>
> 的两个基本列 $\{x_n\},\{y_n\}$ 称为等价的. 彼此等价的基本列归于同一类且只归一类, 称为等价类. 我们把一个等价类看成是一个元素, 并用 $\mathscr{X}_1$ 表示一切这种元素 (等价类) 组成的集合. 在 $\mathscr{X}_1$ 上定义距离: $\forall\xi,\eta\in\mathscr{X}_1$, 任取 $\{x_n\}\in\xi$, $\{y_n\}\in\eta$, 令
>
> $$\rho_1(\xi,\eta)=\lim_{n\to\infty}\rho(x_n,y_n).\qquad(1.2.2)$$
>
> 容易验证 (1.2.2) 式右端的极限的确存在并且极限值与 $\{x_n\},\{y_n\}$ 的选取无关 (请读者自己验证). 为了验证 (1.2.2) 式定义的 $\rho_1$ 的确是个距离, 注意到定义 1.1.1 中的 (1), (2) 是显然的, 而 (3) 可由
>
> $$\rho(x_n,y_n)\leqslant\rho(x_n,z_n)+\rho(z_n,y_n)$$
>
> 取极限得到，其中 $\{x_n\},\{y_n\},\{z_n\}$ 是分别属于等价类 $\xi,\eta,\zeta$ 的基本列。这样，我们就证明了 $(\mathscr{X}_1,\rho_1)$ 是一度量空间。
>
> (2) $\forall x\in\mathscr{X}$，我们用 $\xi_x\in\mathscr{X}_1$ 表示包含序列 $(x,x,\cdots,x,\cdots)$ 的等价类，这样的 $\xi_x$ 全体记为 $\mathscr{X}'$。显然 $\mathscr{X}'\subset\mathscr{X}_1$ 且映射 $T:x\mapsto\xi_x$ 作为 $(\mathscr{X},\rho)\to(\mathscr{X}',\rho_1)$ 的映射满足定义 1.2.1 中的 (1), (2)。因此，$(\mathscr{X},\rho)$ 和 $(\mathscr{X}',\rho_1)$ 等距同构，即有 $(\mathscr{X},\rho)\subset(\mathscr{X}_1,\rho_1)$。进一步容易验证 $\mathscr{X}$ 在 $\mathscr{X}_1$ 中稠密。
>
> (3) 证明 $(\mathscr{X}_1,\rho_1)$ 是完备的。设 $\{\xi^{(n)}\}$ 是 $\mathscr{X}_1$ 中的基本列。要证 $\exists\xi\in\mathscr{X}_1$，使得
>
> $$\rho_1(\xi^{(n)},\xi)\to0\quad(n\to\infty).$$
>
> $1^\circ$ 先证特殊情形，假定 $\{\xi^{(n)}\}\subset\mathscr{X}'$。令 $x_n=T^{-1}\xi^{(n)}$，则 $\{x_n\}$ 是 $\mathscr{X}$ 中的基本列。设 $\{x_n\}\in\xi$，便有 $\xi^{(n)}\to\xi$。
>
> $2^\circ$ 再证一般情形。由于 $\mathscr{X}'$ 在 $\mathscr{X}_1$ 中稠密，$\forall\xi^{(n)}\in\mathscr{X}_1$，$\exists\bar{\xi}^{(n)}\in\mathscr{X}'$，使得 $\rho_1(\bar{\xi}^{(n)},\xi^{(n)})<1/n$。由 $1^\circ$ 可设 $\bar{\xi}^{(n)}\to\xi\in\mathscr{X}_1$，即可推出 $\xi^{(n)}\to\xi$。
>
> 最后综合 (1), (2), (3) 并用命题 1.2.5 即得结论。

> [!example] 例 1.2.7
> $P[a,b]$（$[a,b]$ 上的多项式全体）按距离
>
> $$\rho(x,y)=\max_{a\leqslant t\leqslant b}|x(t)-y(t)|$$
>
> 的完备化空间是 $C[a,b]$。

> [!example] 例 1.2.8
> $C[a,b]$ 按照 (1.2.1) 式定义的距离 $\rho_1$ 完备化，完备化空间是 $L^1[a,b]$。

> [!exercise] 习 题
>
> **1.2.1**（空间 $S$）令 $S$ 为一切实（或复）数列
>
> $$x=(\xi_1,\xi_2,\cdots,\xi_n,\cdots)$$
>
> 组成的集合，在 $S$ 中定义距离为
>
> $$\rho(x,y)=\sum_{k=1}^{\infty}\frac{1}{2^k}\cdot\frac{|\xi_k-\eta_k|}{1+|\xi_k-\eta_k|},$$
>
> 其中 $x=(\xi_1,\xi_2,\cdots,\xi_k,\cdots),y=(\eta_1,\eta_2,\cdots,\eta_k,\cdots)$。求证：$S$ 为一个完备的度量空间。
>
> **1.2.2** 在一个度量空间 $(\mathscr{X},\rho)$ 上，求证：基本列是收敛列，当且仅当其中存在一串收敛子列。
>
> **1.2.3** 设 $F$ 是只有有限项不为 $0$ 的实数列全体，在 $F$ 上引进距离
>
> $$\rho(x,y)=\sup_{k\geqslant1}|\xi_k-\eta_k|,$$
>
> 其中 $x=\{\xi_k\}\in F,y=\{\eta_k\}\in F$，求证：$(F,\rho)$ 不完备，并指出它的完备化空间。
>
> **1.2.4** 求证：$[0,1]$ 上的多项式全体按距离
>
> $$\rho(p,q)=\int_0^1|p(x)-q(x)|\mathrm{d}x\quad(p,q\text{ 是多项式})$$
>
> 是不完备的，并指出它的完备化空间。
>
> **1.2.5** 在完备的度量空间 $(\mathscr{X},\rho)$ 中给定点列 $\{x_n\}$，如果 $\forall\varepsilon>0$，存在基本列 $\{y_n\}$，使得
>
> $$\rho(x_n,y_n)<\varepsilon\quad(n\in\mathbb{N}),$$
>
> 求证：$\{x_n\}$ 收敛。

## §3 列 紧 集

设 $(\mathscr{X},\rho)$ 是一个度量空间，$A$ 是 $\mathscr{X}$ 的一个子集，$A$ 称为是有界的，如果 $\exists x_0\in\mathscr{X}$ 及 $r>0$，使得 $A\subset B(x_0,r)$，其中

$$B(x_0,r)\triangleq\{x\in\mathscr{X}\mid\rho(x,x_0)<r\}.$$

在有穷维欧氏空间，有界无穷集必含有一个收敛子列，但这个性质不能推广到任意的度量空间。

> [!example] 例 1.3.1
> 在 $C[0,1]$ 上，考察点列
>
> $$x_n(t)=\begin{cases}0,&t\geqslant1/n,\\1-nt,&t<1/n\end{cases}\quad(n=1,2,\cdots).$$
>
> 显然 $\{x_n\}\subset B(\theta,1)$，其中 $\theta$ 表示恒等于 $0$ 的函数，但是 $\{x_n\}$ 不含有收敛子列。

> [!definition] 定义 1.3.2
> 设 $(\mathscr{X},\rho)$ 是一个度量空间，$A$ 为其一子集。称 $A$ 是列紧的，如果 $A$ 中的任意点列在 $\mathscr{X}$ 中有一个收敛子列。若这个子列还收敛到 $A$ 中的点，则称 $A$ 是自列紧的。如果空间 $\mathscr{X}$ 是列紧的，那么称 $\mathscr{X}$ 为列紧空间。

> [!proposition] 命题 1.3.3
> 在 $\mathbb{R}^n$ 中任意有界集是列紧集，任意有界闭集是自列紧集。

> [!proposition] 命题 1.3.4
> 列紧空间内任意（闭）子集都是（自）列紧集。

> [!proposition] 命题 1.3.5
> 列紧空间必是完备空间。

> [!proof]- 证
> 设 $(\mathscr{X},\rho)$ 是一个列紧空间，$\{x_n\}$ 是其中的一串基本列，不妨设其是一无穷点列。由列紧性，存在 $\{x_n\}$ 的子列 $\{y_n\}$ 收敛到 $x_0\in\mathscr{X}$。于是由习题 1.2.2 可知 $x_n\to x_0\ (n\to\infty)$。

在度量空间中我们来引入一个比有界性更强的概念。

> [!definition] 定义 1.3.6（$\varepsilon$ 网）
> 设 $M$ 是 $(\mathscr{X},\rho)$ 中的一个子集，$\varepsilon>0$，$N\subset M$。如果对于 $\forall x\in M$，$\exists y\in N$，使得 $\rho(x,y)<\varepsilon$，那么称 $N$ 是 $M$ 的一个 $\varepsilon$ 网。如果 $N$ 还是一个有穷集（个数依赖于 $\varepsilon$），那么称 $N$ 为 $M$ 的一个有穷 $\varepsilon$ 网。

> [!remark] 注
> 由定义显然有
>
> $$M\subset\bigcup_{y\in N}B(y,\varepsilon).$$

> [!definition] 定义 1.3.7（完全有界）
> 集合 $M$ 称为是完全有界的，如果 $\forall\varepsilon>0$，都存在着 $M$ 的一个有穷 $\varepsilon$ 网。

> [!theorem] 定理 1.3.8（Hausdorff）
> 为了（完备）度量空间 $(\mathscr{X},\rho)$ 中的集合 $M$ 是列紧的，必须（且仅须）$M$ 是完全有界集。

> [!proof]- 证
> 必要性。用反证法，若 $\exists\varepsilon_0>0$，$M$ 中没有有穷的 $\varepsilon_0$ 网。任取 $x_1\in M$，$\exists x_2\in M\setminus B(x_1,\varepsilon_0)$；
>
> 对 $\{x_1,x_2\}\in M$，$\exists x_3\in M\setminus B(x_1,\varepsilon_0)\cup B(x_2,\varepsilon_0)$；
>
> $\cdots\cdots$
>
> 对 $\{x_1,x_2,\cdots,x_n\}\in M$，$\exists x_{n+1}\in M\setminus\bigcup_{k=1}^n B(x_k,\varepsilon_0)$；
>
> $\cdots\cdots$
>
> 这样产生的点列 $\{x_n\}\subset M$ 显然满足 $\rho(x_n,x_m)\geqslant\varepsilon_0\ (n\neq m)$，它没有收敛的子列。这与 $M$ 的列紧性矛盾。
>
> 充分性。若 $\{x_n\}$ 是 $M$ 中的无穷点列，想找一个收敛子列。对 $1$ 网，$\exists y_1\in M$，$\{x_n\}$ 的子列 $\{x_n^{(1)}\}\subset B(y_1,1)$；
>
> 对 $1/2$ 网，$\exists y_2\in M$，$\{x_n^{(1)}\}$ 的子列 $\{x_n^{(2)}\}\subset B(y_2,1/2)$；
>
> $\cdots\cdots$
>
> 对 $1/k$ 网，$\exists y_k\in M$，$\{x_n^{(k-1)}\}$ 的子列 $\{x_n^{(k)}\}\subset B(y_k,1/k)$；
>
> $\cdots\cdots$
>
> 最后抽出对角线子列 $\{x_k^{(k)}\}$，它是一个基本列。事实上，$\forall\varepsilon>0$，当 $n>2/\varepsilon$ 时，对 $\forall p\in\mathbb{N}$ 有
>
> $$\begin{aligned}\rho(x_{n+p}^{(n+p)},x_n^{(n)})&\leqslant\rho(x_{n+p}^{(n+p)},y_n)+\rho(x_n^{(n)},y_n)\\&\leqslant\frac{2}{n}<\varepsilon.\end{aligned}$$

> [!definition] 定义 1.3.9
> 一个度量空间若有可数的稠密子集，就称这个度量空间是可分的。

> [!theorem] 定理 1.3.10
> 完全有界的度量空间是可分的。

> [!proof]- 证
> 取 $N_n$ 为有穷的 $1/n$ 网，则 $\bigcup_{n=1}^{\infty}N_n$ 是一个可数的稠密子集。

> [!definition] 定义 1.3.11
> 在拓扑空间 $\mathscr{X}$ 中，集合 $M$ 称为是紧的，如果 $\mathscr{X}$ 中每个覆盖 $M$ 的开集族中有有穷个开集覆盖集合 $M$。

> [!theorem] 定理 1.3.12
> 设 $(\mathscr{X},\rho)$ 是一个度量空间，为了 $M\subset\mathscr{X}$ 是紧的必须且仅须 $M$ 是自列紧集。

> [!proof]- 证
> 必要性。设 $M$ 是紧集。先证 $M$ 是闭集，只要证 $M$ 的余集是开集。$\forall x_0\in\mathscr{X}\setminus M$，因为
>
> $$M\subset\bigcup_{x\in M}B\left(x,\frac{1}{2}\rho(x,x_0)\right),$$
>
> 利用 $M$ 的紧性，$\exists x_k\in M\ (k=1,2,\cdots,n)$，使得
>
> $$M\subset\bigcup_{k=1}^n B\left(x_k,\frac{1}{2}\rho(x_k,x_0)\right).$$
>
> 取 $\displaystyle\delta=\min_{1\leqslant k\leqslant n}\frac{1}{2}\rho(x_k,x_0)$，则显然有 $\delta>0$，并且 $\forall x\in B(x_0,\delta)$ 有
>
> $$\rho(x,x_k)\geqslant\rho(x_k,x_0)-\rho(x_0,x)>\delta\quad(k=1,2,\cdots,n).$$
>
> 因此，$B(x_0,\delta)\cap M=\varnothing$，从而 $M$ 的余集是开集得证。
>
> 其次证 $M$ 是列紧集。用反证法。假若有 $M$ 中的点列 $\{x_n\}$ 不含有收敛子列，不妨假定 $x_n$ 是互异的。对每个 $n\in\mathbb{N}$，做集合 $S_n\triangleq\{x_1,x_2,\cdots,x_{n-1},x_{n+1},x_{n+2},\cdots\}$，显然每个 $S_n$ 是闭集（因为不含收敛子列），从而每个 $\mathscr{X}\setminus S_n$ 是开集。但
>
> $$\bigcup_{n=1}^{\infty}(\mathscr{X}\setminus S_n)=\mathscr{X}\setminus\bigcap_{n=1}^{\infty}S_n=\mathscr{X}\setminus\varnothing=\mathscr{X}\supset M,$$
>
> 由 $M$ 的紧性，$\exists N\in\mathbb{N}$，使得 $\displaystyle\bigcup_{n=1}^N(\mathscr{X}\setminus S_n)\supset M$，即得
>
> $$\mathscr{X}\setminus\{x_n\}_{n=N+1}^{\infty}\supset M,$$
>
> 但这是不可能的，因为 $x_{N+1}$ 属于上式右端而不属于上式左端。此矛盾说明 $M$ 是列紧的。
>
> 充分性。设 $M$ 是自列紧的，要在 $M$ 的任一开覆盖中取出有限覆盖。用反证法，如果某个开覆盖 $\bigcup_{\lambda\in\Lambda} G_\lambda \supset M$ 不能取出 $M$ 的有限覆盖。由于 $M$ 是自列紧的，$\forall n\in\mathbb{N}$，存在有穷的 $1/n$ 网
>
> $$N_n = \{x_1^{(n)}, x_2^{(n)}, \cdots, x_{k(n)}^{(n)}\},$$
>
> 显然 $\bigcup_{y\in N_n} B(y,1/n) \supset M$。因此，$\forall n\in\mathbb{N}$，$\exists y_n\in N_n$，使得 $B(y_n,1/n)$ 不能被有限个 $G_\lambda$ 所覆盖。由假定 $M$ 是自列紧集，必存在收敛子列 $y_{n_k}$ 收敛到一点 $y_0\in G_{\lambda_0}$。又 $G_{\lambda_0}$ 是开集，所以 $\exists\delta>0$，使得 $B(y_0,\delta) \subset G_{\lambda_0}$。对此 $\delta>0$，取 $k$ 足够大，使得 $n_k > 2/\delta$，并且 $\rho(y_{n_k},y_0) < \delta/2$，则 $\forall x\in B(y_{n_k},1/n_k)$，有
>
> $$\rho(x,y_0) \le \rho(x,y_{n_k}) + \rho(y_{n_k},y_0) \le 1/n_k + \delta/2 < \delta,$$
>
> 即 $x\in B(y_0,\delta)$，从而 $B(y_{n_k},1/n_k) \subset B(y_0,\delta) \subset G_{\lambda_0}$。这与每个 $B(y_n,1/n)$ 不能被有限个 $G_\lambda$ 所覆盖矛盾。 $\blacksquare$

我们曾考察过区间 $[a,b]$ 上的连续函数空间 $C[a,b]$，现在稍微做一点推广。设 $M$ 是一个紧的度量空间，带有距离 $\rho$，用 $C(M)$ 表示 $M\to\mathbb{R}$ 的一切连续映射全体。定义

$$d(u,v) = \max_{x\in M} |u(x)-v(x)|\qquad(\forall u,v\in C(M)).\tag{1.3.1}$$

> [!proposition] 命题 1.3.13
> $(C(M),d)$ 是一个度量空间。

> [!proof]- 证
> 其实只有定义本身的合理性是要验证的。即，对 $\forall u\in C(M)$，存在着最大值 $\max_{x\in M}|u(x)|$。事实上，$u(M)$ 是紧集。因为对任意点列 $y_n\in u(M)$，$\exists x_n\in M$，使得 $u(x_n)=y_n$。由于 $M$ 是紧的，从而有子列 $x_{n_k}\to x_0$，$k\to\infty$，而 $u$ 是连续的，便有 $u(x_{n_k})\to u(x_0)\in u(M)$，$k\to\infty$。令 $y_0 \triangleq u(x_0)$，即得 $y_{n_k}=u(x_{n_k})\to y_0$，从而 $u(M)$ 是紧集。这蕴含 $u(M)$ 是有界闭的数集。设
>
> $$\min u(M) = \alpha,\qquad\max u(M) = \beta,$$
>
> 由闭性推出 $\alpha,\beta\in u(M)$。这就证明了 $\max_{x\in M}|u(x)|$ 的存在性。 $\blacksquare$

> [!proposition] 命题 1.3.14
> $(C(M),d)$ 是完备的。

证明留给读者作为习题。

现在我们来讨论连续函数空间上列紧集的刻画。

> [!definition] 定义 1.3.15
> 设 $F$ 是 $C(M)$ 的一个子集。称 $F$ 是一致有界的，如果 $\exists M_1>0$，使得 $|\varphi(x)|\le M_1\ (\forall x\in M,\forall\varphi\in F)$；称 $F$ 是等度连续的，如果 $\forall\varepsilon>0$，总可以找到 $\delta(\varepsilon)>0$，使得
>
> $$|\varphi(x_1)-\varphi(x_2)|<\varepsilon\qquad(\forall x_1,x_2\in M,\ \rho(x_1,x_2)<\delta,\ \forall\varphi\in F).$$

> [!theorem] 定理 1.3.16（Arzelà-Ascoli）
> 为了 $F\subset C(M)$ 是一个列紧集，必须且仅须 $F$ 是一致有界且等度连续的函数族。

> [!proof]- 证
> 因为 $C(M)$ 是完备的，所以由定理 1.3.8，为了 $F$ 是列紧的，必须且仅须它是完全有界的。
>
> 必要性。因为完全有界集是有界集，所以 $F$ 是一致有界函数族。$\forall\varepsilon>0$，要证 $\exists\delta=\delta(\varepsilon)$，使得 $\forall\varphi\in F$ 有
>
> $$|\varphi(x_1)-\varphi(x_2)|<\varepsilon\qquad(\text{当 }\rho(x_1,x_2)<\delta).$$
>
> 因为 $F$ 的 $\varepsilon/3$ 网是一个有穷集 $N(\varepsilon/3)=\{\varphi_1,\varphi_2,\cdots,\varphi_n\}$，对这有穷个函数，由连续性，$\exists\delta=\delta(\varepsilon/3)$，当 $\rho(x_1,x_2)<\delta$ 有
>
> $$|\varphi_i(x_1)-\varphi_i(x_2)|<\varepsilon/3\qquad(i=1,2,\cdots,n).$$
>
> 因为 $\forall\varphi\in F$，$\exists\varphi_i\in N(\varepsilon/3)$，使得 $d(\varphi,\varphi_i)<\varepsilon/3$，所以
>
> $$\begin{aligned}|\varphi(x)-\varphi(x')| &\le |\varphi(x)-\varphi_i(x)| + |\varphi_i(x)-\varphi_i(x')| + |\varphi_i(x')-\varphi(x')|\\&\le 2d(\varphi,\varphi_i) + |\varphi_i(x)-\varphi_i(x')| < \varepsilon\qquad(\text{当 }\rho(x,x')<\delta).\end{aligned}$$
>
> 充分性。设 $F$ 一致有界且等度连续，我们要找有穷的 $\varepsilon$ 网。由于 $F$ 是等度连续的，$\exists\delta=\delta(\varepsilon/3)>0$，使得当 $\rho(x,x')<\delta$ 时，
>
> $$|\varphi(x)-\varphi(x')|<\varepsilon/3\qquad(\forall\varphi\in F).$$
>
> 就此 $\delta$，选取空间 $M$ 上的有穷 $\delta$ 网 $N(\delta)=\{x_1,x_2,\cdots,x_n\}$。做映射 $T:F\to\mathbb{R}^n$，
>
> $$T\varphi \triangleq (\varphi(x_1),\varphi(x_2),\cdots,\varphi(x_n))\qquad(\forall\varphi\in F).$$
>
> 记 $\widetilde{F}=T(F)$，则 $\widetilde{F}$ 是 $\mathbb{R}^n$ 中的有界集。事实上，设 $|\varphi|\le M_1\ (\forall\varphi\in F)$，则
>
> $$\biggl(\sum_{i=1}^n |\varphi(x_i)|^2\biggr)^{1/2} \le \sqrt{n}\max_{x\in M}|\varphi(x)| \le \sqrt{n} M_1\qquad(\forall\varphi\in F).$$
>
> 从而 $\widetilde{F}$ 是列紧集，利用定理 1.3.8，$\widetilde{F}$ 有有穷的 $\varepsilon/3$ 网
>
> $$\widetilde{N}(\varepsilon/3) = \{T\varphi_1,T\varphi_2,\cdots,T\varphi_m\}.$$
>
> 从而 $\{\varphi_1,\varphi_2,\cdots,\varphi_m\}$ 是 $F$ 的 $\varepsilon$ 网，这是因为 $\forall\varphi\in F$，$\exists\varphi_i$，使得 $\rho_n(T\varphi,T\varphi_i)<\varepsilon/3$，于是取定 $x_r\in N(\delta)$，使得 $\rho(x,x_r)<\delta$，有
>
> $$\begin{aligned}|\varphi(x)-\varphi_i(x)|&\le |\varphi(x)-\varphi(x_r)| + |\varphi(x_r)-\varphi_i(x_r)| + |\varphi_i(x_r)-\varphi_i(x)|\\&< (2/3)\varepsilon + \rho_n(T\varphi,T\varphi_i) < \varepsilon,\end{aligned}$$
>
> 其中 $\rho_n$ 表示 $\mathbb{R}^n$ 上的距离。 $\blacksquare$

> [!example] 例 1.3.17
> 设 $\Omega\subset\mathbb{R}^n$ 是有界开凸集。若 $M_1,M_2$ 是两个给定的正数，则集合
>
> $$F \triangleq \{\varphi\in C^{(1)}(\overline{\Omega})\mid |\varphi(x)|\le M_1,\ |\mathrm{grad}\,\varphi(x)|\le M_2\ (\forall x\in\Omega)\}$$
>
> 是 $C(\overline{\Omega})$ 上的一个列紧集，其中 $C^{(1)}(\overline{\Omega})$ 表示 $\overline{\Omega}$ 上的连续可微函数全体。

> [!proof]- 证
> 因为 $\forall\varphi\in F$，$\forall x_1,x_2\in\overline{\Omega}$，$\exists\theta\in(0,1)$，使得
>
> $$\varphi(x_1)-\varphi(x_2) = \mathrm{grad}\,\varphi(\theta x_1+(1-\theta)x_2)\cdot(x_1-x_2),$$
>
> 所以
>
> $$|\varphi(x_1)-\varphi(x_2)| \le M_2 \rho_n(x_1,x_2)\qquad(\forall\varphi\in F).$$
>
> 这表明 $F$ 是等度连续的。此外 $F$ 显然是一致有界的。 $\blacksquare$

> [!exercise] 习 题
>
> **1.3.1** 在完备的度量空间中求证：子集 $A$ 列紧的充要条件是对 $\forall\varepsilon>0$，存在 $A$ 的列紧的 $\varepsilon$ 网。
>
> **1.3.2** 在度量空间中求证：紧集上的连续函数必是有界的，并且达到它的上、下确界。
>
> **1.3.3** 在度量空间中求证：完全有界的集合是有界的，并通过考虑 $\ell^2$ 的子集 $E=\{e_k\}_{k=1}^\infty$，其中
>
> $$e_k = \{0,0,\cdots,0,1,0,\cdots\},$$
>
> 第 $k$ 个分量为 $1$，其余为 $0$，来说明一个集合可以是有界但不完全有界的。
>
> **1.3.4** 设 $(\mathscr{X},\rho)$ 是度量空间，$F_1,F_2$ 是它的两个紧子集，求证：$\exists x_i\in F_i\ (i=1,2)$，使得 $\rho(F_1,F_2)=\rho(x_1,x_2)$，其中
>
> $$\rho(F_1,F_2) \triangleq \inf\{\rho(x,y)\mid x\in F_1,\ y\in F_2\}.$$
>
> **1.3.5** 设 $M$ 是 $C[a,b]$ 中的有界集，求证：集合
>
> $$\{F(x)=\int_a^x f(t)\,dt \mid f\in M\}$$
>
> 是列紧集。
>
> **1.3.6** 设 $E=\{\sin nt\}_{n=1}^\infty$，求证：$E$ 在 $C[0,\pi]$ 中不是列紧的。
>
> **1.3.7** 求证：$S$ 空间（定义见习题 1.2.1）的子集 $A$ 列紧的充要条件是：$\forall n\in\mathbb{N}$，$\exists C_n>0$，使得对 $\forall x=(\xi_1,\xi_2,\cdots,\xi_n,\cdots)\in A$，有 $|\xi_n|\le C_n\ (n=1,2,\cdots)$。
>
> **1.3.8** 设 $(\mathscr{X},\rho)$ 是度量空间，$M$ 是 $\mathscr{X}$ 中的列紧集，映射 $f:\mathscr{X}\to M$ 满足
>
> $$\rho(f(x_1),f(x_2)) < \rho(x_1,x_2)\qquad(\forall x_1,x_2\in\mathscr{X},\ x_1\neq x_2).$$
>
> 求证：$f$ 在 $\mathscr{X}$ 中存在唯一的不动点。
>
> **1.3.9** 设 $(M,\rho)$ 是一个紧度量空间，又 $E\subset C(M)$，$E$ 中的函数一致有界并满足下列 Hölder 条件：
>
> $$|x(t_1)-x(t_2)| \le C\rho(t_1,t_2)^\alpha\qquad(\forall x\in E,\ \forall t_1,t_2\in M),$$
>
> 其中 $0<\alpha\le 1$，$C>0$。求证：$E$ 在 $C(M)$ 中是列紧集。

## §4  赋范线性空间

上一节我们在度量空间上讨论了映射的不动点问题. 然而度量空间只有拓扑结构, 对于许多分析问题只考虑拓扑结构不考虑代数结构是不够用的, 因为在分析中通常遇到的函数空间, 不但要考察收敛而且要考虑元素间的代数运算.

### 4.1  线性空间

在线性代数中，我们学过线性空间的概念。

> [!definition] 定义 1.4.1
> 设 $\mathscr{X}$ 是一个非空集，$\mathbb{K}$ 是复（或实）数域。如果下列条件满足，便称 $\mathscr{X}$ 为一复（或实）线性空间：
>
> (1) $\mathscr{X}$ 是一加法交换群，即对 $\forall x,y\in\mathscr{X}$，$\exists u\in\mathscr{X}$，记作 $u=x+y$，称 $u$ 为 $x,y$ 之和，适合
>
> (1.1) $x+y = y+x$；
>
> (1.2) $(x+y)+z = x+(y+z)$；
>
> (1.3) 存在唯一的 $\theta\in\mathscr{X}$，对 $\forall x\in\mathscr{X}$，$x+\theta = \theta+x$；
>
> (1.4) 对任意的 $x\in\mathscr{X}$，$\exists x'\in\mathscr{X}$，使得 $x+x'=\theta$，记此 $x'$ 为 $-x$。
>
> (2) 定义了数域 $\mathbb{K}$ 中的数 $\alpha$ 与 $x \in \mathscr{X}$ 的数乘运算，即 $\forall(\alpha, x) \in \mathbb{K} \times \mathscr{X}$，$\exists u \in \mathscr{X}$，记作 $u = \alpha x$，称 $u$ 为 $x$ 对 $\alpha$ 的数乘，适合
>
> (2.1) $\alpha(\beta x) = (\alpha\beta)x$ $(\forall\alpha, \beta \in \mathbb{K}, \forall x \in \mathscr{X})$；
>
> (2.2) $1 \cdot x = x$；
>
> (2.3) $(\alpha + \beta)x = \alpha x + \beta x$ $(\forall\alpha, \beta \in \mathbb{K}, \forall x \in \mathscr{X})$，
> $\alpha(x + y) = \alpha x + \alpha y$ $(\forall x, y \in \mathscr{X}, \forall\alpha \in \mathbb{K})$。

线性空间的元素又称为向量，因而线性空间又称为向量空间。下述概念是线性空间的基本概念。

**线性同构** 设 $\mathscr{X},\mathscr{X}_1$ 都是线性空间，$T : \mathscr{X} \to \mathscr{X}_1$ 称为是一个线性同构，如果

(1) 它既是单射又是满射，即它是一对一的并且是在上的；

(2) $T(\alpha x + \beta y) = \alpha Tx + \beta Ty$ $(\forall x, y \in \mathscr{X}, \forall\alpha, \beta \in \mathbb{K})$。

**线性子空间** 设 $E \subset \mathscr{X}$，若 $E$ 依 $\mathscr{X}$ 上的加法与数乘还构成一个线性空间，则称 $E$ 是 $\mathscr{X}$ 的一个线性子空间。

$\mathscr{X}$ 以及 $\{\theta\}$ 都是 $\mathscr{X}$ 的线性子空间，我们称它们为平凡的子空间，而称其他的子空间为真子空间。

**线性流形** 设 $E \subset \mathscr{X}$，若 $\exists x_0 \in \mathscr{X}$ 及线性子空间 $E_0 \subset \mathscr{X}$，使得 $E = E_0 + x_0 \triangleq \{x + x_0 \mid x \in E_0\}$，则称 $E$ 为线性流形。简单地说，线性流形就是子空间对某个向量的平移。

**线性相关** 一组向量 $x_1, x_2, \cdots , x_n \in \mathscr{X}$ 称为是线性相关的，如果存在 $\lambda_1, \lambda_2, \cdots , \lambda_n \in \mathbb{K}$ 不全为 $0$，使得

$$\lambda_1x_1 + \lambda_2x_2 + \cdots + \lambda_nx_n = \theta;$$

否则称为是线性无关的。

**线性基** 若 $A$ 是 $\mathscr{X}$ 中的一个极大线性无关向量组，即 $A$ 中的向量是线性无关的，而且任意的 $x \in \mathscr{X}$ 都是 $A$ 中的向量的线性组合，则称 $A$ 是 $\mathscr{X}$ 的一组线性基。

**维数** 线性空间中的线性基的元素个数（势），称为维数。

**线性包** 设 $\Lambda$ 是一个指标集，$\{x_\lambda \mid \lambda \in \Lambda\}$ 是 $\mathscr{X}$ 中的向量族，一切由 $\{x_\lambda \mid \lambda \in \Lambda\}$ 的有穷线性组合组成的集合

$$\{y = \alpha_1x_{\lambda_1} + \cdots + \alpha_nx_{\lambda_n} \mid \lambda_i \in \Lambda,\ \alpha_i \in \mathbb{K},\ i = 1, 2, \cdots , n\}$$

称为 $\{x_\lambda \mid \lambda \in \Lambda\}$ 的线性包。这线性包是一个线性子空间，不难证明它是包含 $\{x_\lambda \mid \lambda \in \Lambda\}$ 的一切线性子空间的交。因此称线性包为 $\{x_\lambda \mid \lambda \in \Lambda\}$ 张成的线性子空间，记为

$$\operatorname{span}\{x_\lambda \mid \lambda \in \Lambda\}.$$

**线性和与直和** 设 $E_1, E_2$ 是 $\mathscr{X}$ 的子空间，我们称集合 $\{x + y \mid x \in E_1,\ y \in E_2\}$ 为 $E_1$ 与 $E_2$ 的线性和，记为 $E_1 + E_2$。对于任意有限个子空间，定义以此类推。又若 $(E_1, E_2)$ 中的任意一对非零向量都是线性无关的，则称线性和 $E_1 + E_2$ 为直和，记作 $E_1 \oplus E_2$，这时 $E_1 \cap E_2 = \{\theta\}$，对 $\forall x \in E_1 \oplus E_2$，有唯一的分解：

$$x = x_1 + x_2\qquad(x_i \in E_i,\ i = 1, 2).$$

### 4.2 线性空间上的距离

我们引进过一个空间 $\mathscr{X}$ 的代数结构 —— 线性空间, 也引进过它的拓扑结构 —— 距离 $\rho$, 现在要把这两者结合起来, 即是要求:

(1) 距离的平移不变性:

    $\rho(x+z,\,y+z)=\rho(x,y)$ $(\forall x,y,z\in\mathscr{X})$.

由此推出, $\rho$ 对加法是连续的, 即

  $\left.\begin{array}{l}\rho(x_n,x)\to 0\\\rho(y_n,y)\to 0\end{array}\right\}\implies\rho(x_n+y_n,\,x+y)\to 0$ $(n\to\infty)$.

事实上,

  $\rho(x_n+y_n,\,x+y)=\rho(x_n+y_n-x-y,\,\theta)$
  $=\rho(x_n-x,\,y-y_n)$
  $\le\rho(x_n-x,\,\theta)+\rho(y-y_n,\,\theta)$
  $=\rho(x_n,x)+\rho(y,y_n)\to 0$ $(n\to\infty)$.

反之, 如果距离 $\rho$ 对加法连续, 则满足平移不变性. 证明详见关肇直、张恭庆、冯德兴著的《线性泛函分析入门》(上海科学技术出版社, 1979).

(2) 数乘的连续性:

(2.1) $\rho(x_n,x)\to 0\implies\rho(\alpha x_n,\alpha x)\to 0$ $(n\to\infty)$ $(\forall\alpha\in\mathbb{K})$;

(2.2) $\alpha_n\to\alpha(\mathbb{K})\implies\rho(\alpha_n x,\alpha x)\to 0$ $(n\to\infty)$ $(\forall x\in\mathscr{X})$.

若令 $p:\mathscr{X}\to\mathbb{R}$, $p(x)\triangleq\rho(x,\theta)$ $(\forall x\in\mathscr{X})$, 则由 (1) 有

    $p(x-y)=\rho(x-y,\theta)=\rho(x,y)$.

这时由距离公理逐条化为函数 $p$ 的条件:

  $\rho(x,y)\ge 0\iff p(x)\ge 0$ $(\forall x,y\in\mathscr{X})$;
  $\rho(x,y)=0$, 当且仅当 $x=y\iff p(x)=0$, 当且仅当 $x=\theta$;
  $\rho(x,y)\le\rho(x,z)+p(z,y)\iff\rho(x+y)\le p(x)+p(y)$;
  $\rho(x,y)=\rho(y,x)\iff\rho(-x)=p(x)$.

此外,

  (2.1) $\iff p(\alpha x_n)\to 0$ (当 $p(x_n)\to 0$);
  (2.2) $\iff p(\alpha_n x)\to 0$ (当 $\alpha_n\to 0$).

于是导向下列定义:

> [!definition] 定义 1.4.2
> 线性空间 $\mathscr{X}$ 上的准范数 (准模) 定义为这空间上的一个函数 $\|\cdot\|:\mathscr{X}\to\mathbb{R}$, 满足条件:
>
> (1) $\|x\|\ge 0$ $(\forall x\in\mathscr{X})$; $\|x\|=0\iff x=\theta$;
>
> (2) $\|x+y\|\le\|x\|+\|y\|$ $(\forall x,y\in\mathscr{X})$;
>
> (3) $\|-x\|=\|x\|$ $(\forall x\in\mathscr{X})$;
>
> (4) $\lim\limits_{\alpha_n\to 0}\|\alpha_n x\|=0$, $\lim\limits_{\|x_n\|\to 0}\|\alpha x_n\|=0$ $(\forall x\in\mathscr{X},\,\forall\alpha\in\mathbb{K})$.

> [!definition] 定义 1.4.3
> 一个赋准范数的线性空间 $\mathscr{X}$, 如果按照
>
>     $\|x_n-x\|\to 0$ $(n\to\infty)$
>
> 来定义 $x_n\to x$ $(n\to\infty)$, 那么便称其为 $F^*$ 空间.

> [!definition] 定义 1.4.4
> 完备的 $F^*$ 空间称为 $\mathrm{Fr\acute{e}chet}$ 空间, 简称 $F$ 空间.

$F^*$ 空间的例子很多.

> [!example] 例 1.4.5
> 空间 $C(M)$ ($M$ 是一个紧度量空间). 显然
>
>     $\|u\|=\max\limits_{x\in M}|u(x)|$
>
> 是一个准范数, $C(M)$ 是一个 $F$ 空间.

> [!example] 例 1.4.6
> $\mathrm{Euclid}$ 空间 $\mathbb{R}^n$. 设 $x=(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n$, 定义
>
>     $\|x\|=\bigl(\sum_{i=1}^{n}|x_i|^2\bigr)^{1/2}$,
>
> 显然它是一个准范数, $\mathbb{R}^n$ 是一个 $F$ 空间.

> [!example] 例 1.4.7
> 空间 $S$. 用 $S$ 表示一切序列 $x=(x_1,x_2,\cdots,x_n,\cdots)$ 组成的线性空间, 加法与数乘按自然方式定义:
>
>   $x+y=(x_1+y_1,\,x_2+y_2,\,\cdots,\,x_n+y_n,\,\cdots)$,
>   $\alpha x=(\alpha x_1,\,\alpha x_2,\,\cdots,\,\alpha x_n,\,\cdots)$ $(\alpha\in\mathbb{K})$,
>
> 其中 $x=(x_1,x_2,\cdots,x_n,\cdots)$, $y=(y_1,y_2,\cdots,y_n,\cdots)$. 对 $\forall x\in S$ 定义
>
>     $\|x\|=\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n|}{1+|x_n|}$,
>
> 那么它是一个准范数. 事实上, 准范数的条件 (1), (3) 是明显成立的. 下面先验证条件 (2), 注意到初等不等式
>
> $\dfrac{\alpha+\beta}{1+\alpha+\beta}=\dfrac{\alpha}{1+\alpha+\beta}+\dfrac{\beta}{1+\alpha+\beta}\le\dfrac{\alpha}{1+\alpha}+\dfrac{\beta}{1+\beta}$
> $(\forall\alpha,\beta>0)$,
>
> 便得到
>
> $\|x+y\|=\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n+y_n|}{1+|x_n+y_n|}$
> $\le\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n|+|y_n|}{1+|x_n|+|y_n|}$
> $\le\sum_{n=1}^{\infty}\frac{1}{2^n}\Bigl(\frac{|x_n|}{1+|x_n|}+\frac{|y_n|}{1+|y_n|}\Bigr)$
> $=\|x\|+\|y\|$.
>
> 其次验证条件 (4). 因为还有初等不等式
>
> $\dfrac{\alpha\beta}{1+\alpha\beta}\le\begin{cases}
> \dfrac{\alpha\beta}{1+\beta},&\text{当 }\alpha\ge 1,\,\beta\ge 0,\\[6pt]
> \dfrac{\beta}{1+\beta},&\text{当 }0<\alpha<1,\,\beta\ge 0,
> \end{cases}$
>
> 所以 $\forall\alpha\in\mathbb{K}$, 有
>
>     $\|\alpha x_n\|\le\max(|\alpha|,1)\|x_n\|\to 0$ $(\|x_n\|\to 0)$.
>
> 又若 $|\alpha_m|\to 0$, $\forall\varepsilon>0$, 取 $n_0$, 使得 $1/2^{n_0}<\varepsilon/2$, 固定住 $n_0$, 取 $N=N(\varepsilon/2)$, 使得当 $m>N$ 时有
>
>     $|\alpha_m|\max\limits_{1\le i\le n_0}|x_i|<\varepsilon/2$,
>
> 则
>
> $\begin{aligned}\|\alpha_m x\|&=\sum_{n=1}^{n_0}\frac{1}{2^n}\cdot\frac{|\alpha_m x_n|}{1+|\alpha_m x_n|}+\sum_{n=n_0+1}^{\infty}\frac{1}{2^n}\cdot\frac{|\alpha_m x_n|}{1+|\alpha_m x_n|}\\[2pt]
> &\le\frac{\varepsilon}{2}\sum_{n=1}^{n_0}\frac{1}{2^n}+\sum_{n=n_0+1}^{\infty}\frac{1}{2^n}<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.\end{aligned}$
>
> 这就证明了 $S$ 是一个 $F^*$ 空间.
>
> 最后再验证完备性. 若
>
> $\|x^{(m+p)}-x^{(m)}\|=\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n^{(m+p)}-x_n^{(m)}|}{1+|x_n^{(m+p)}-x_n^{(m)}|}\to 0$
>
> (当 $m\to\infty$, $\forall p\in\mathbb{N}$), 则对 $\forall n\in\mathbb{N}$, $|x_n^{(m+p)}-x_n^{(m)}|\to 0$ (当 $m\to\infty$, $\forall p\in\mathbb{N}$). 于是存在 $x_n^*$, 使得 $x_n^{(m)}\to x_n^*$ (当 $m\to\infty$). 因此, $\forall\varepsilon>0$, 取 $n_0$, 使得 $1/2^{n_0}<\varepsilon/2$, 再取 $N$, 使得当 $m>N$ 时有
>
> $|x_n^{(m)}-x_n^*|<\varepsilon/2$ $(n=1,2,\cdots,n_0)$,
>
> 便得到
>
> $\begin{aligned}\|x^{(m)}-x^*\|&=\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n^{(m)}-x_n^*|}{1+|x_n^{(m)}-x_n^*|}\\
> &\le\sum_{n=1}^{n_0}\frac{1}{2^n}|x_n^{(m)}-x_n^*|+\sum_{n=n_0+1}^{\infty}\frac{1}{2^n}\\
> &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon\quad(\text{当 }m>N),\end{aligned}$
>
> 其中 $x^*=(x_1^*,x_2^*,\cdots,x_n^*,\cdots)$. 于是 $S$ 是一个 $F$ 空间. $\blacksquare$

> [!remark]
> 由上面的推演不难看出: 点列
>
> $x^{(m)}=(x_1^{(m)},x_2^{(m)},\cdots,x_n^{(m)},\cdots)$ $(m=1,2,\cdots)$
>
> 收敛于 $\theta=(0,0,\cdots,0,\cdots)$ (当 $m\to\infty$), 必须且仅须对每个正整数 $n$ 都有 $x_n^{(m)}\to 0$ (当 $m\to\infty$). 这意味着按 $S$ 距离收敛与按坐标收敛是等价的.

> [!example] 例 1.4.8
> $C(\mathbb{R}^n)$ 空间表示 $\mathbb{R}^n$ 上一切连续函数全体, 并令
>
> $\|u\|=\sum_{k=1}^{\infty}\frac{1}{2^k}\cdot\dfrac{\max_{|x|\le k}|u(x)|}{1+\max_{|x|\le k}|u(x)|}$,
>
> 其中 $u(x)\in C(\mathbb{R}^n)$, $x=(x_1,x_2,\cdots,x_n)$, $|x|=\sqrt{x_1^2+x_2^2+\cdots+x_n^2}$. 这时 $\|\cdot\|$ 是一个准范数, 并且 $C(\mathbb{R}^n)$ 构成一个 $F$ 空间.

### 4.3 范数与 Banach 空间

考察以上诸例, 还可以发现如下差异, 例 1.4.5 和例 1.4.6 的准范数具有齐次性:

$\|\alpha x\|=|\alpha|\cdot\|x\|$ $(\forall\alpha\in\mathbb{K},\,\forall x\in\mathscr{X})$.

而例 1.4.7 和例 1.4.8 的准范数则不具有此性质.

具有齐次性的准范数叫作范数, 有时又称为模.

> [!definition] 定义 1.4.9
> 线性空间 $\mathscr{X}$ 上的范数 $\|\cdot\|$ 是一个非负值函数: $\mathscr{X}\to\mathbb{R}$ 满足
>
> (1) $\|x\|\ge 0$ $(\forall x\in\mathscr{X})$, $\|x\|=0\iff x=\theta$ (正定性);
>
> (2) $\|x+y\|\le\|x\|+\|y\|$ $(\forall x,y\in\mathscr{X})$ (三角形不等式);
>
> (3) $\|\alpha x\|=|\alpha|\cdot\|x\|$ $(\forall\alpha\in\mathbb{K},\,\forall x\in\mathscr{X})$ (齐次性).

显然, 范数必是准范数.

> [!definition] 定义 1.4.10
> 当赋准范数的线性空间中的准范数是范数时, 这空间叫作赋范线性空间, 或称 $B^*$ 空间. 完备的 $B^*$ 空间叫作 $B$ 空间或 $\mathrm{Banach}$ 空间.

除了上面的例 1.4.5 和例 1.4.6 外, 我们再举一些经常遇到的函数空间是 $B$ 空间的例子.

> [!example] 例 1.4.11
> 空间 $L^p(\Omega,\mu)$ $(1\le p<\infty)$. 设 $(\Omega,\mathscr{B},\mu)$ 是一个测度空间, $u$ 是 $\Omega$ 上的可测函数, 而且 $|u(x)|^p$ 在 $\Omega$ 上是可积的. 这种函数 $u$ 的全体记作 $L^p(\Omega,\mu)$, 叫作 $(\Omega,\mathscr{B},\mu)$ 上的 $p$ 次可积函数空间. $L^p(\Omega,\mu)$ 按通常的加法与数乘规定运算, 并且把几乎处处 (记作 $\mathrm{a.e.}$) 相等的两个函数看成是同一个向量, 经这样处理过的空间 $L^p(\Omega,\mu)$ 仍是一个线性空间, 并且定义
>
> $\|u\|=\bigl(\int_{\Omega}|u(x)|^p\,\mathrm{d}\mu\bigr)^{1/p}$,
>
> 那么 $\|\cdot\|$ 是一个范数. 这是因为定义 1.4.9 中的条件 (1), (3) 都是显然的, 而条件 (2) 正是著名的 $\mathrm{Minkowski}$ 不等式:
>
> $\bigl(\int_{\Omega}|u(x)+v(x)|^p\,\mathrm{d}\mu\bigr)^{1/p}\le\bigl(\int_{\Omega}|u(x)|^p\,\mathrm{d}\mu\bigr)^{1/p}+\bigl(\int_{\Omega}|v(x)|^p\,\mathrm{d}\mu\bigr)^{1/p}$.
>
> 又由 $\mathrm{Riesz}$-$\mathrm{Fisher}$ 定理, $L^p(\Omega,\mu)$ 还是一个 $B$ 空间.

> [!remark]
> 本例有两个重要的特殊情形:
> (1) $\Omega$ 是 $\mathbb{R}^n$ 中的一个可测集, 而 $\mathrm{d}\mu$ 即是普通的 $\mathrm{Lebesgue}$ 测度, 这时, 对应的空间记作 $L^p(\Omega)$.
> (2) $\Omega=\mathbb{N}$, 而测度 $\mu$ 是等分布的: $\mu(\{n\})=1$ $(\forall n\in\mathbb{N})$, 这时空间 $L^p(\Omega,\mu)$ 由满足 $\sum_{n=1}^{\infty}|u_n|^p<\infty$ 的序列 $u=\{u_n\}_{n=1}^{\infty}$ 组成, 对应的空间记作 $\ell^p$, 其范数是
>
> $\|u\|=\bigl(\sum_{n=1}^{\infty}|u_n|^p\bigr)^{1/p}$.

> [!example] 例 1.4.12
> 空间 $L^{\infty}(\Omega,\mu)$. 设 $(\Omega,\mathscr{B},\mu)$ 是一个测度空间, $\mu$ 对于 $\Omega$ 是 $\sigma$-有限的, $u(x)$ 是 $\Omega$ 上的可测函数. 如果 $u(x)$ 与 $\Omega$ 上的一个有界函数几乎处处相等, 则称 $u(x)$ 是 $\Omega$ 上的一个本性有界可测函数. $\Omega$ 上的一切本性有界可测函数 (把 $\mathrm{a.e.}$ 相等的两个函数视为同一个向量) 的全体记作 $L^{\infty}(\Omega,\mu)$, 在其上规定:
>
> $\|u\|=\inf_{\substack{\mu(E_0)=0\\E_0\subset\Omega}}\bigl(\sup_{x\in\Omega\setminus E_0}|u(x)|\bigr)$.  (1.4.1)
>
> 此式右端有时也记作 $\displaystyle\operatorname*{ess\,sup}_{x\in\Omega}|u(x)|$ 或 $\mathrm{l.u.b}\,|u(x)|$. 显然 $L^{\infty}(\Omega,\mu)$ 是一个线性空间, 以下验证 $\|\cdot\|$ 是一个范数. 事实上, 定义 1.4.9 中的条件 (3) 及 $\|u\|\ge 0$ 都是显然的, 需验证:
>
> (1) $\|u\|=0\iff u=\theta$. 充分性是显然的. 为了证必要性, 若 $\|u\|=0$, 则 $\forall n\in\mathbb{N}$, $\exists E_n\subset\Omega$, 使得 $\mu(E_n)=0$, 并且
>
> $\sup_{x\in\Omega\setminus E_n}|u(x)|<1/n$.
>
> 令
>
> $\Omega_1\triangleq\bigcap_{n=1}^{\infty}(\Omega\setminus E_n)=\Omega\setminus\bigcup_{n=1}^{\infty}E_n$.
>
> 因为 $u(x)=0$ (当 $x\in\Omega_1$), $\mu(\bigcup_{n=1}^{\infty}E_n)=0$, 所以
>
> $u(x)=0$ $(\mathrm{a.e.}\,x\in\Omega)$, 即 $u=\theta$.
>
> (2) $\|u+v\|\le\|u\|+\|v\|$. $\forall\varepsilon>0$, $\exists E_0,E_1\subset\Omega$, 使得 $\mu(E_0)=\mu(E_1)=0$, 且
>
> $\sup_{x\in\Omega\setminus E_0}|u(x)|\le\|u\|+\varepsilon/2$,
> $\sup_{x\in\Omega\setminus E_1}|v(x)|\le\|v\|+\varepsilon/2$.
>
> 因此
>
> $\begin{aligned}\|u+v\|&\le\sup_{x\in\Omega\setminus(E_0\cup E_1)}|u(x)+v(x)|\\
> &\le\sup_{x\in\Omega\setminus E_0}|u(x)|+\sup_{x\in\Omega\setminus E_1}|v(x)|\\
> &\le\|u\|+\|v\|+\varepsilon,\end{aligned}$
>
> 而 $\varepsilon>0$ 是任意的, 即得所要证的结论.
>
> 最后来证 $L^{\infty}(\Omega,\mu)$ 是完备的. 设
>
> $\|u_{n+p}-u_n\|\to 0$ (当 $n\to\infty$, $\forall p\in\mathbb{N}$).  (1.4.2)
>
> 根据 $L^{\infty}(\Omega,\mu)$ 中范数定义, $\exists Z_{n,p}\subset\Omega$, $\mu(Z_{n,p})=0$, 使得
>
> $|u_{n+p}(x)-u_n(x)|\le\|u_{n+p}-u_n\|+1/2^{n+p}$ $(\forall x\in\Omega\setminus Z_{n,p})$.  (1.4.3)
>
> 令 $Z=\bigcup_{n,p}Z_{n,p}$, 则 $\mu(Z)=0$, 且
>
> $|u_{n+p}(x)-u_n(x)|\le\|u_{n+p}-u_n\|+1/2^{n+p}$ $(x\in\Omega\setminus Z,\;n,p\in\mathbb{N})$.  (1.4.4)
>
> 由 (1.4.2) 式和 (1.4.4) 式, $\forall\varepsilon>0$, $\exists N\in\mathbb{N}$, 使 $\forall n\ge N$, $p\in\mathbb{N}$ 有
>
> $|u_{n+p}(x)-u_n(x)|<\varepsilon+1/2^{n+p}$ $(x\in\Omega\setminus Z)$.  (1.4.5)
>
> 由此 $\lim_{n\to\infty}u_n(x)=u(x)$ 存在, $x\in\Omega\setminus Z$, 在 (1.4.5) 式中令 $p\to\infty$ 得
>
> $|u(x)-u_n(x)|\le\varepsilon$ $(x\in\Omega\setminus Z)$,
>
> 即
>
> $\sup_{x\in\Omega\setminus Z}|u(x)-u_n(x)|\le\varepsilon$.
>
> 因 $\mu(Z)=0$, 所以 $u\in L^{\infty}(\Omega,\mu)$, 且
>
> $\|u_n-u\|\le\varepsilon$ $(n\ge N)$,
>
> 即
>
> $\|u_n-u\|\to 0$ $(n\to\infty)$. $\blacksquare$

> [!remark]
> 当 $\Omega$ 是 $\mathbb{R}^n$ 中的一个可测集时, 对应的空间记作 $L^{\infty}(\Omega)$; 当 $\Omega=\mathbb{N}$ 时, 对应的空间记作 $\ell^{\infty}$, 它是由一切有界序列 $u=\{u_n\}_{n=1}^{\infty}$ 组成的空间, 其范数是 $\|u\|=\sup_{n\ge 1}|u_n|$.

> [!example] 例 1.4.13
> $C^k(\overline{\Omega})$. 设 $\Omega$ 是 $\mathbb{R}^n$ 中的一个有界连通开区域, $k\in\mathbb{N}$, 用 $C^k(\overline{\Omega})$ 表示在 $\overline{\Omega}$ 上具有直到 $k$ 阶连续偏导数的函数 $u(x)=u(x_1,x_2,\cdots,x_n)$ 的全体, 加法与数乘按自然法则定义, 再规定范数为
>
> $\displaystyle\|u\|=\max_{|\alpha|\le k}\max_{x\in\overline{\Omega}}|\partial^{\alpha}u(x)|$,  (1.4.6)
>
> 其中 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$, $|\alpha|=\alpha_1+\alpha_2+\cdots+\alpha_n$, 以及
>
> $\displaystyle\partial^{\alpha}u(x)=\frac{\partial^{|\alpha|}}{\partial x_1^{\alpha_1}\partial x_2^{\alpha_2}\cdots\partial x_n^{\alpha_n}}u(x)$.  (1.4.7)
>
> 容易验证 (1.4.6) 式定义的 $\|\cdot\|$ 是一个范数, 从而 $C^k(\overline{\Omega})$ 是一个赋范线性空间. 再证它是完备的, 从而是 $\mathrm{Banach}$ 空间. 事实上, 若 $\{u_n\}$ 是一个基本列, 则必存在连续函数 $v_{\alpha}$, 使得
>
> $\partial^{\alpha}u_n(x)\rightrightarrows v_{\alpha}(x)$ $(n\to\infty,\,|\alpha|\le k,$ 对 $x\in\overline{\Omega}$ 一致$)$.
>
> 我们只要再证明 $v_{\alpha}=\partial^{\alpha}v_{\theta}$ 就够了. 先证
>
> $v_{(1,0,\cdots,0)}=\dfrac{\partial}{\partial x_1}v_{(0,0,\cdots,0)}$.  (1.4.8)
>
> 因为
>
> $\dfrac{\partial}{\partial x_1}u_n(x)\rightrightarrows v_{(1,0,\cdots,0)}(x)$ $(n\to\infty,$ 对 $x\in\overline{\Omega}$ 一致$)$,
> $u_n(x)\rightrightarrows v_{(0,0,\cdots,0)}(x)$ $(n\to\infty,$ 对 $x\in\overline{\Omega}$ 一致$)$,
>
> 以及
>
> $u_n(x)=\int_{x_1^0}^{x_1}\frac{\partial}{\partial\xi}u_n(\xi,x_2,\cdots,x_n)\mathrm{d}\xi+u_n(x_1^0,x_2,\cdots,x_n)$,
>
> 所以有
>
> $\begin{aligned}v_{(0,0,\cdots,0)}(x)&=\int_{x_1^0}^{x_1}v_{(1,0,\cdots,0)}(\xi,x_2,\cdots,x_n)\mathrm{d}\xi\\
> &\quad+v_{(0,0,\cdots,0)}(x_1^0,x_2,\cdots,x_n),\end{aligned}$
>
> 即得 (1.4.8) 式. 同理有
>
> $v_{(0,0,\cdots,0,\underset{j}{1},0,\cdots,0)}=\dfrac{\partial}{\partial x_j}v_{(0,0,\cdots,0)}$ $(j=2,3,\cdots,n)$.
>
> 其余对 $|\alpha|$ 用数学归纳法类推.

> [!example] 例 1.4.14
> $\mathrm{Sobolev}$ 空间 $H^{m,p}(\Omega)$. 设 $\Omega$ 是 $\mathbb{R}^n$ 中的一个有界连通开区域, $m$ 是一个非负整数, $1\le p<\infty$, 对于 $C^m(\overline{\Omega})$ 中的任意 $u$, 代替范数 (1.4.6) 式定义
>
> $\displaystyle\|u\|_{m,p}=\Bigl(\sum_{|\alpha|\le m}\int_{\Omega}|\partial^{\alpha}u(x)|^p\,\mathrm{d}x\Bigr)^{1/p}$.  (1.4.9)
>
> 不难验证 $\|\cdot\|_{m,p}$ 是范数, 但 $C^m(\overline{\Omega})$ 依 $\|\cdot\|_{m,p}$ 不是完备的.
>
> 根据 §2, 我们知道任意不完备的赋范线性空间 $\mathscr{X}$, 可以把它完备化, 即确定一个完备的赋范线性空间 $\widetilde{\mathscr{X}}$, $\mathscr{X}$ 可以连续地嵌入 $\widetilde{\mathscr{X}}$ 成为其稠密的子空间. 将 $C^m(\Omega)$ 的子集
>
> $S\triangleq\{u\in C^m(\Omega)\mid\|u\|_{m,p}<\infty\}$
>
> 按照范数 (1.4.9) 式完备化, 得到的完备化空间称为 $\mathrm{Sobolev}$ 空间, 记作 $H^{m,p}(\Omega)$. 它在偏微分方程论中起着非常基本的重要作用. 特别当 $p=2$ 时, $H^{m,2}(\Omega)$ 简单地记成 $H^m(\Omega)$.

### 4.4 赋范线性空间上的范数等价

在许多分析问题中, 引进范数或引进距离是为了研究一种收敛性. 因此, 如果我们关心的只是按照一定意义的收敛性而不是距离本身的大小, 那么在空间上我们就可以认为决定同一种收敛性的不同范数是等价的.

> [!definition] 定义 1.4.15
> 设在线性空间 $\mathscr{X}$ 上给定了两个范数 $\|\cdot\|_1$ 与 $\|\cdot\|_2$, 我们说 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 是指
>
> $\|x_n\|_2\to 0\implies\|x_n\|_1\to 0$ $(n\to\infty)$.
>
> 如果 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 而且 $\|\cdot\|_1$ 又比 $\|\cdot\|_2$ 强, 则称 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价.

> [!proposition] 命题 1.4.16
> 为了 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 必须且仅须存在常数 $C>0$, 使得
>
> $\|x\|_1\le C\|x\|_2$ $(\forall x\in\mathscr{X})$.  (1.4.10)

> [!proof]- 证
> 充分性是显然的, 下证必要性. 用反证法. 若 (1.4.10) 式不成立, 则对 $\forall n\in\mathbb{N}$, $\exists x_n\in\mathscr{X}$, 使得 $\|x_n\|_1>n\|x_n\|_2$. 令 $y_n\triangleq x_n/\|x_n\|_1$. 一方面 $\|y_n\|_1=1$, 另一方面因为
>
> $0\le\|y_n\|_2<1/n$ $(\forall n\in\mathbb{N})$,
>
> 所以 $\|y_n\|_2\to 0$ $(n\to\infty)$. 又因为 $\|\cdot\|_2$ 比 $\|\cdot\|_1$ 强, 所以 $\|y_n\|_1\to 0$ $(n\to\infty)$. 这显然是一个矛盾.

> [!corollary] 推论 1.4.17
> 为了 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价必须且仅须存在常数 $C_1,C_2>0$, 使得
>
> $C_1\|x\|_1\le\|x\|_2\le C_2\|x\|_1$ $(\forall x\in\mathscr{X})$.

如果线性空间 $\mathscr{X}$ 的维数是有穷数 $n$, 则记 $\dim\mathscr{X}=n$, 否则记为 $\dim\mathscr{X}=\infty$. 设 $\mathscr{X}$ 是一个赋范线性空间, 并且设 $\dim\mathscr{X}=n$, 这时 $\mathscr{X}$ 存在一组基: $e_1,e_2,\cdots,e_n$. 任意一个元素 $x\in\mathscr{X}$ 有下列唯一的表示:

$x=\xi_1 e_1+\xi_2 e_2+\cdots+\xi_n e_n$.  (1.4.11)

利用这种表示, 我们知道在代数同构意义下, 两个有穷维线性空间等价的充要条件是它们有相同的维数. 现在我们关心的是两个有穷维赋范线性空间, 如果维数相同, 那么它们的拓扑之间有什么关系? 根据 (1.4.11) 式, 每个 $x\in\mathscr{X}$ 唯一地对应着 $\mathbb{K}^n$ 空间中的一点 $\xi=Tx\triangleq(\xi_1,\xi_2,\cdots,\xi_n)$. 自然希望建立 $x$ 在 $\mathscr{X}$ 中的范数 $\|x\|$ 与 $Tx$ 在 $\mathbb{K}^n$ 中的范数

$|Tx|=|\xi|\triangleq\bigl(\sum_{j=1}^{n}|\xi_j|^2\bigr)^{1/2}$

之间的关系. 为此, 考察函数 $p(\xi)\triangleq\|\sum_{j=1}^{n}\xi_j e_j\|$ $(\forall\xi\in\mathbb{K}^n)$.

首先 $p$ 对 $\xi$ 是一致连续的. 事实上, $\forall\xi=(\xi_1,\xi_2,\cdots,\xi_n)$ 和 $\eta=(\eta_1,\eta_2,\cdots,\eta_n)\in\mathbb{K}^n$, 由三角不等式与 $\mathrm{Schwarz}$ 不等式有

$\begin{aligned}|p(\xi)-p(\eta)|&\le p(\xi-\eta)\\
&\le\sum_{i=1}^{n}|\xi_i-\eta_i|\|e_i\|\\
&\le\bigl(\sum_{i=1}^{n}|\xi_i-\eta_i|^2\bigr)^{1/2}\bigl(\sum_{i=1}^{n}\|e_i\|^2\bigr)^{1/2}\\
&\le|\xi-\eta|\bigl(\sum_{i=1}^{n}\|e_i\|^2\bigr)^{1/2}.\end{aligned}$

其次, 根据范数的齐次性, 对 $\forall\xi\in\mathbb{K}^n\setminus\{\theta\}$ 有

$p(\xi)=|\xi|\,\Bigl\|\sum_{j=1}^{n}\frac{\xi_j}{|\xi|}e_j\Bigr\|=|\xi|\,p(\xi/|\xi|)$.  (1.4.12)

注意到 $\mathbb{K}^n$ 的单位球面 $S_1\triangleq\{\xi\in\mathbb{K}^n\mid|\zeta|=1\}$ 是一个紧集, 因此 $p(\xi)$ 在 $S_1$ 上必有非负的最小值 $C_1$ 与最大值 $C_2$, 即有

$C_1\le p(\xi)\le C_2$ $(\forall\xi\in S_1)$.

按 (1.4.12) 式便有

$C_1|\xi|\le p(\xi)\le C_2|\xi|$ $(\forall\xi\in\mathbb{K}^n)$.  (1.4.13)

下面证明其中 $C_1>0$. 用反证法, 假若 $C_1=0$, 那么 $\exists\xi^*\in S_1$ 满足 $p(\xi^*)=0$. 设 $\xi^*=(\xi_1^*,\xi_2^*,\cdots,\xi_n^*)$, 即有

$\xi_1^* e_1+\xi_2^* e_2+\cdots+\xi_n^* e_n=0$.  (1.4.14)

因为 $\{e_1,e_2,\cdots,e_n\}$ 是基, 所以 (1.4.14) 式蕴含 $\xi^*=\theta$. 这与 $\xi^*\in S_1$ 矛盾. 改写 (1.4.13) 式为

$C_1|Tx|\le\|x\|\le C_2|Tx|$ $(\forall x\in\mathscr{X})$.  (1.4.15)

如果我们将 $|Tx|$ 看作是在 $\mathscr{X}$ 空间中引入的另一范数 $\|x\|_T$, 即 $\|x\|_T\triangleq|Tx|$ $(\forall x\in\mathscr{X})$, 那么 (1.4.15) 式表明 $\|\cdot\|$ 与 $\|\cdot\|_T$ 是等价的. 以后简称 $\|\cdot\|_T$ 为 $\mathscr{X}$ 的 $\mathbb{K}^n$ 范数. 于是 $n$ 维赋范线性空间的范数与其 $\mathbb{K}^n$ 范数等价.

> [!theorem] 定理 1.4.18
> 设 $\mathscr{X}$ 是一个有穷维线性空间, 若 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 都是 $\mathscr{X}$ 上的范数, 则必有正常数 $C_1$ 与 $C_2$, 使得
>
> $C_1\|x\|_1\le\|x\|_2\le C_2\|x\|_1$ $(\forall x\in\mathscr{X})$.

> [!proof]- 证
> 设 $\dim\mathscr{X}=n$. 因为 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 都与 $\mathbb{K}^n$ 范数等价, 所以 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价.

> [!remark]
> 本定理表明: 具有相同维数的两个有穷维赋范线性空间在代数上是同构的, 在拓扑上是同胚的.

> [!corollary] 推论 1.4.19
> 有穷维 $B^*$ 空间必是 $B$ 空间.

> [!corollary] 推论 1.4.20
> $B^*$ 空间上的任意有穷维子空间必是闭子空间.

> [!definition] 定义 1.4.21
> 设 $P:\mathscr{X}\to\mathbb{R}$ 是线性空间 $\mathscr{X}$ 上的一个函数, 若它满足
>
> (1) $P(x+y)\le P(x)+P(y)$ $(\forall x,y\in\mathscr{X})$ (次可加性),
>
> (2) $P(\lambda x)=\lambda P(x)$ $(\forall\lambda>0,\,\forall x\in\mathscr{X})$ (正齐次性),
>
> 则称 $P$ 为 $\mathscr{X}$ 上的一个次线性泛函.

> [!remark]
> 如果 $P$ 还满足 $P(x)\ge 0$ $(\forall x\in\mathscr{X})$, 并且代替条件 (2) 的是齐次性: $P(\alpha x)=|\alpha|P(x)$ $(\forall\alpha\in\mathbb{K},\,\forall x\in\mathscr{X})$, 则称 $P$ 是一个半范数或半模.

类似于定理 1.4.18 的证明, 还有如下定理.

> [!theorem] 定理 1.4.22
> 设 $P$ 是有穷维 $B^*$ 空间 $\mathscr{X}$ 上的一个次线性泛函, 如果 $P(x)\ge 0$ $(\forall x\in\mathscr{X})$, 并且 $P(x)=0\iff x=\theta$, 则存在正常数 $C_1,C_2$, 使得
>
> $C_1\|x\|\le P(x)\le C_2\|x\|$ $(\forall x\in\mathscr{X})$.

### 4.5 应用: 最佳逼近问题

逼近论的一个基本问题是: 给定了一组函数 $\varphi_1,\varphi_2,\cdots,\varphi_n$ 和一个函数 $f$, 用 $\varphi_1,\varphi_2,\cdots,\varphi_n$ 的线性组合去逼近 $f$ (按某种尺度), 问是否有最佳的逼近存在? 例如 $f$ 是 $[0,2\pi]$ 上的一个周期函数, $\varphi_i(x)=\cos ix\;(i=1,2,\cdots,n)$, 用 $\sum\lambda_i\varphi_i$ 去逼近 $f$, 求在 $L^p[0,2\pi]$ 意义下的最佳逼近.

提出 $B^*$ 空间的问题: 给定一个 $B^*$ 空间 $X$, 并给定 $X$ 中的有穷个向量 $e_1,e_2,\cdots,e_n$. 对于给定的向量 $x\in X$, 求一组数 $(\lambda_1,\lambda_2,\cdots,\lambda_n)\in\mathbb{K}^n$, 使得
$$\|x-\sum\lambda_ie_i\|=\min_{a\in\mathbb{K}^n}\|x-\sum a_ie_i\|,\quad(1.4.16)$$
其中 $a=(a_1,a_2,\cdots,a_n)$.

首先要回答: 这组数 $(\lambda_1,\lambda_2,\cdots,\lambda_n)$ 是否存在? 当然, 不妨设 $e_1,e_2,\cdots,e_n$ 是线性无关的. 我们要求函数 $F(a)=\|x-\sum a_ie_i\|\;(a\in\mathbb{K}^n)$ 的最小值. 容易看出 $F$ 是 $\mathbb{K}^n$ 上的连续函数. 又注意到
$$F(a)\geqslant\|\sum a_ie_i\|-\|x\|\quad(\forall a\in\mathbb{K}^n).\quad(1.4.17)$$

令 $P(a)\triangleq\|\sum a_ie_i\|$, 显然 $P(\cdot)$ 是 $\mathbb{K}^n$ 上的一个范数, 而 $\mathbb{K}^n$ 是有穷维空间, 应用定理 1.4.18, $\exists c_1>0$, 使得
$$P(a)\geqslant c_1|a|\quad(\forall a\in\mathbb{K}^n),\quad(1.4.18)$$
其中
$$|a|\triangleq(|a_1|^2+|a_2|^2+\cdots+|a_n|^2)^{1/2}\quad(\forall a=(a_1,a_2,\cdots,a_n)\in\mathbb{K}^n).$$

联合 (1.4.17) 式和 (1.4.18) 式推出 $F(a)\to\infty$ (当 $|a|\to\infty$). 于是函数 $F$ 有最小值存在, 这就是下面的定理.

> [!theorem] 定理 1.4.23
> 设 $X$ 是一个 $B^*$ 空间. 若 $e_1,e_2,\cdots,e_n$ 是 $X$ 中给定的向量组, 则 $\forall x\in X$, 存在最佳逼近系数 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 适合 (1.4.16) 式.

> [!remark] 注
> 若记 $M\triangleq\operatorname{span}\{e_1,e_2,\cdots,e_n\}$, $\rho(x,M)\triangleq\inf_{y\in M}\|x-y\|$, $x_0\triangleq\sum\lambda_ie_i$, 则可改写 (1.4.16) 式为
> $$\rho(x,x_0)=\rho(x,M).\quad(1.4.19)$$
> 适合 (1.4.19) 式的 $x_0\in M$ 称为 $x$ 在 $M$ 上的最佳逼近元. 本定理表明: 在 $B^*$ 空间中, 任一指定元素在给定的有限维子空间上的最佳逼近元总是存在的.

进一步问: 最佳逼近元是不是唯一的? 显然我们事先要假设给定的向量组 $e_1,e_2,\cdots,e_n$ 是线性无关的, 但即使如此, 唯一性还依赖于 $B^*$ 空间 $X$ 的范数的性质.

> [!definition] 定义 1.4.24
> $B^*$ 空间 $(X,\|\cdot\|)$ 称为严格凸的, 是指 $\forall x,y\in X$, $x\neq y$, 必有
> $$\|x\|=\|y\|=1\Longrightarrow\|\alpha x+\beta y\|<1\quad(\forall\alpha,\beta>0,\alpha+\beta=1).\quad(1.4.20)$$

如果 $X$ 是严格凸的 $B^*$ 空间, 那么就不能有两个不同的最佳逼近元. 事实上, 倘若 $d\triangleq\rho(x,M)>0$, 并有 $\|x-y\|=\|x-z\|=d$, 则对 $\forall\alpha,\beta>0$, $\alpha+\beta=1$, 由严格凸性有
$$\frac{1}{d}\|x-(\alpha y+\beta z)\|=\frac{1}{d}\|\alpha(x-y)+\beta(x-z)\|=\left\|\alpha\frac{x-y}{d}+\beta\frac{x-z}{d}\right\|<1,$$
即 $\|x-(\alpha y+\beta z)\|<d$. 这显然与 $d$ 的定义矛盾. 但若 $d=0$, $y$ 是相应的最佳逼近元, 则必有 $\|x-y\|=0$, 即 $y=x$. 从而最佳逼近元必是唯一的.

> [!theorem] 定理 1.4.25
> 设 $X$ 是严格凸的 $B^*$ 空间, $\{e_1,e_2,\cdots,e_n\}$ 是 $X$ 上给定的一组线性无关向量, 则 $\forall x\in X$, 存在着唯一的一组最佳逼近系数 $\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$ 适合 (1.4.16) 式.

> [!example] 例 1.4.26
> 空间 $L^p(\Omega,\mu)\;(1<p<\infty)$ 是严格凸的.

> [!proof]- 证
> 因为 Minkowski 不等式 $\|u+v\|\leqslant\|u\|+\|v\|$ 等号成立的充要条件是: $\exists k_1,k_2\geqslant0\;(k_1+k_2>0)$, 使得 $k_1u=k_2v$(a.e.). 这意味着 $\forall u,v\in L^p(\Omega,\mu)$, 当 $\|u\|=\|v\|=1$, $u\neq v$ 时,
> $$\|tu+(1-t)v\|<t\|u\|+(1-t)\|v\|=1\quad(\forall\,0<t<1),$$
> 即 $L^p(\Omega,\mu)$ 是严格凸的.

> [!example] 例 1.4.27
> $C(M)$ 及 $L^1(\Omega,\mu)$ 都不是严格凸的.
>
> 以 $C[0,1]$ 为例. 取 $x(t)\equiv1$, $y(t)=t$, 都满足 $\|x\|=\|y\|=1$, 但
> $$\left\|\frac{1}{2}(x+y)\right\|=1.$$
>
> 以 $L^1[0,1]$ 为例. 取 $x(t)\equiv1$, $y(t)=2t$, 都满足 $\|x\|=\|y\|=1$, 但
> $$\left\|\frac{1}{2}(x+y)\right\|=1.$$

有了存在唯一性以后, 最佳逼近的计算方法化归求一凸函数的极小值 (见习题 1.4.12). 数值最优化技术给这类问题提供了许多具体的算法.

### 4.6 有穷维 B* 空间的刻画

我们已经知道有穷维 $B^*$ 空间 $X$ 上的单位球面
$$S_1\triangleq\{x\in X\mid\|x\|=1\}$$
是列紧的, 现在反过来证明: 如果一个 $B^*$ 空间 $X$ 的单位球面是列紧的, 那么这空间必是有穷维的. 事实上, 倘若在 $S_1$ 上给定了有穷个线性无关的向量 $\{x_1,x_2,\cdots,x_n\}$, 如果它们的线性包 $M_n$ 张不满 $X$, 那么 $\exists x_{n+1}\in S_1$, 使得
$$\|x_{n+1}-x_i\|\geqslant1\quad(i=1,2,\cdots,n).$$

这是因为任取 $y\notin M_n$, 按定理 1.4.23, $\exists x\in M_n$, 使得
$$\|y-x\|=d\triangleq\rho(y,M_n).$$

令 $x_{n+1}\triangleq(y-x)/d$, 显然 $x_{n+1}\in S_1$, 并且
$$\|x_{n+1}-x_i\|=\frac{1}{d}\|y-(x+dx_i)\|\geqslant\frac{1}{d}d=1\quad(i=1,2,\cdots,n).$$

照此办法, 如果 $X$ 是无穷维的, 我们便可以逐次在 $S_1$ 上抽选出一串 $\{x_n\}_{n=1}^\infty$ 适合 $\|x_n-x_m\|\geqslant1\;(n,m\in\mathbb{N},n\neq m)$. 这样 $S_1$ 就不是列紧的. 于是我们得到如下定理.

> [!theorem] 定理 1.4.28
> 为了 $B^*$ 空间 $X$ 是有穷维的, 必须且仅须 $X$ 的单位球面是列紧的.

> [!definition] 定义 1.4.29
> $B^*$ 空间 $X$ 上的一个子集 $A$ 称为是有界的, 如果存在常数 $c>0$, 使得 $\|x\|\leqslant c\;(\forall x\in A)$.

> [!corollary] 推论 1.4.30
> 为了 $B^*$ 空间 $X$ 是有穷维的, 必须且仅须其任意有界集是列紧的.

上述方法被 F. Riesz 用来导出如下非常有用的引理.

> [!lemma] 引理 1.4.31 (Riesz 引理)
> 如果 $X_0$ 是 $B^*$ 空间 $X$ 的一个真闭子空间, 那么对 $\forall\,0<\varepsilon<1$, $\exists y\in X$, 使得 $\|y\|=1$, 并且
> $$\|y-x\|\geqslant1-\varepsilon\quad(\forall x\in X_0).$$

> [!proof]- 证
> 任取 $y_0\in X\setminus X_0$. 因为 $X_0$ 是闭的, 所以
> $$d\triangleq\inf_{x\in X_0}\|y_0-x\|>0.$$
> 因此, $\forall\eta>0$, $\exists x_0\in X_0$ 使得 $d\leqslant\|y_0-x_0\|<d+\eta$ (参看图 1.4.1).
>
> 图 1.4.1
>
> 若 $y\triangleq(y_0-x_0)/\|y_0-x_0\|$, 则 $\|y\|=1$, 并且对 $\forall x\in X_0$ 有
> $$\|y-x\|=\frac{\|y_0-x'\|}{\|y_0-x_0\|}>\frac{d}{d+\eta}=1-\frac{\eta}{d+\eta},\quad(1.4.21)$$
> 其中 $x'=x_0+\|y_0-x_0\|x\in X_0$. 于是对于 $\forall\,0<\varepsilon<1$, 只要 $\eta=\frac{d\varepsilon}{1-\varepsilon}$, 便得到 $\|y-x\|>1-\varepsilon$. $\blacksquare$

### 4.7 商空间

设 $(\mathscr{X},\|\cdot\|)$ 是 $B^*$ 空间, $\mathscr{X}_0\subset\mathscr{X}$ 是一个闭线性子空间, $x',x''\in\mathscr{X}$, 记 $x'\sim x''$, 若 $x'-x''\in\mathscr{X}_0$. 这是一个等价关系, 用 $[x]$ 表示 $x$ 所在的等价类, 所有等价类组成的空间称为关于 $\mathscr{X}_0$ 的商空间, 记为 $\mathscr{X}/\mathscr{X}_0$, 其中加法和数乘定义如下:
(1) $[x]+[y]=[x+y]\quad([x],[y]\in\mathscr{X}/\mathscr{X}_0)$;
(2) $\lambda[x]=[\lambda x]\quad(\lambda\in\mathbb{K},[x]\in\mathscr{X}/\mathscr{X}_0)$.
容易验证, $\mathscr{X}/\mathscr{X}_0$ 关于上述运算组成一个线性空间.

> [!theorem] 定理 1.4.32
> 设 $[x]\in\mathscr{X}/\mathscr{X}_0$, 定义
> $$\|[x]\|_0=\inf_{y\in[x]}\|y\|,$$
> 则 $(\mathscr{X}/\mathscr{X}_0,\|\cdot\|_0)$ 是 $B^*$ 空间, 又当 $(\mathscr{X},\|\cdot\|)$ 是 $B$ 空间时, $(\mathscr{X}/\mathscr{X}_0,\|\cdot\|_0)$ 也是 $B$ 空间.

> [!proof]- 证
> 根据定义, $\mathscr{X}/\mathscr{X}_0$ 中零元素为 $[x],x\in\mathscr{X}_0$. 又
> $$\|[x]\|_0\geqslant0,\quad\|\lambda[x]\|_0=|\lambda|\,\|[x]\|_0,\quad\forall[x]\in\mathscr{X}/\mathscr{X}_0,\lambda\in\mathbb{R}$$
> 显然成立. 三角不等式验证如下:
> $$\|[x]+[y]\|_0=\|[x+y]\|_0=\inf_{z\in[x+y]}\|z\|.$$
> 取 $x_n\in[x],y_n\in[y]$, 使
> $$\|x_n\|\to\|[x]\|_0,\quad\|y_n\|\to\|[y]\|_0\quad(n\to\infty),$$
> 这时 $x_n+y_n\in[x+y]$, 从而
> $$\|[x]+[y]\|_0\leqslant\|x_n+y_n\|\leqslant\|x_n\|+\|y_n\|\to\|[x]\|_0+\|[y]\|_0\quad(n\to\infty),$$
> 即成立三角不等式:
> $$\|[x]+[y]\|_0\leqslant\|[x]\|_0+\|[y]\|_0.$$
>
> 现设 $\|[x]\|_0=0$. 根据定义, 存在 $x_n\in[x]$, 使得 $\|x_n\|\to0$, $n\to\infty$. 因 $\mathscr{X}_0$ 是闭子空间, 由 $x-x_n\in\mathscr{X}_0$ 得
> $$x=\lim_{n\to\infty}(x-x_n)\in\mathscr{X}_0,$$
> 即 $[x]=\theta$ 为 $\mathscr{X}/\mathscr{X}_0$ 中的零元素, 从而 $(\mathscr{X}/\mathscr{X}_0,\|\cdot\|_0)$ 是 $B^*$ 空间.
>
> 再设 $(\mathscr{X},\|\cdot\|)$ 是 $B$ 空间, 下证 $(\mathscr{X}/\mathscr{X}_0,\|\cdot\|_0)$ 完备. 令 $\{[x_n]\}$ 是 Cauchy 列, 则有
> $$\|[x_n]-[x_m]\|_0=\|[x_n-x_m]\|_0\to0\quad(n,m\to\infty).$$
> 取子列, 仍记为 $\{[x_n]\}$, 使得
> $$\|[x_n-x_{n+1}]\|_0\leqslant\frac{1}{2^{n+1}}.$$
> 由定义, 存在 $y_{n,n+1}\in\mathscr{X},y_{n,n+1}\in[x_n-x_{n+1}]$, 满足
> $$\|y_{n,n+1}\|\leqslant\|[x_n-x_{n+1}]\|_0+\frac{1}{2^{n+1}}\leqslant\frac{1}{2^n}.$$
> 记 $y_1=x_1,y_{n+1}=y_n-y_{n,n+1},n\geqslant1$, 存在 $z_{n,n+1}\in\mathscr{X}_0$, 使
> $$y_{n+1}=y_n-(x_n-x_{n+1}+z_{n,n+1}),$$
> 即
> $$y_{n+1}-x_{n+1}=y_n-x_n-z_{n,n+1}\in\mathscr{X}_0.$$
> 因为 $y_1=x_1$, 所以 $[y_{n+1}]=[x_{n+1}]$. 这时,
> $$\|y_n-y_{n+p}\|\leqslant\|y_n-y_{n+1}\|+\cdots+\|y_{n+p-1}-y_{n+p}\|$$
> $$=\|y_{n,n+1}\|+\cdots+\|y_{n+p-1,n+p}\|$$
> $$\leqslant\frac{1}{2^{n+1}}+\cdots+\frac{1}{2^{n+p}}\leqslant\frac{1}{2^n}.$$
> 即 $\{y_n\}$ 是 $\mathscr{X}$ 中的 Cauchy 列, 于是有 $y\in\mathscr{X}$ 使得
> $$\|y_n-y\|\to0\quad(n\to\infty).$$
>
> 因此,
> $$\|[x_n]-[y]\|_0=\|[y_n]-[y]\|_0=\|[y_n-y]\|_0\leqslant\|y_n-y\|\to0\quad(n\to\infty),$$
> 即 $(\mathscr{X}/\mathscr{X}_0,\|\cdot\|_0)$ 完备.

### 习 题

> [!exercise] 1.4.1
> 在二维空间 $\mathbb{R}^2$ 中, 对每一点 $z=(x,y)$, 令
> $$\|z\|_1=|x|+|y|;\qquad\qquad\|z\|_2=\sqrt{x^2+y^2};$$
> $$\|z\|_3=\max(|x|,|y|);\qquad\|z\|_4=(x^4+y^4)^{\frac{1}{4}}.$$
> (1) 求证 $\|\cdot\|_i\;(i=1,2,3,4)$ 都是 $\mathbb{R}^2$ 的范数.
> (2) 画出 $(\mathbb{R}^2,\|\cdot\|_i)\;(i=1,2,3,4)$ 各空间中的单位球面图形.
> (3) 在 $\mathbb{R}^2$ 中取定三点 $O=(0,0),A=(1,0),B=(0,1)$, 试在上述四种不同范数下求出 $\triangle OAB$ 三边的长度.

> [!exercise] 1.4.2
> 设 $C(0,1]$ 表示 $(0,1]$ 上连续且有界的函数 $x(t)$ 全体. 对 $\forall x\in C(0,1]$, 令 $\|x\|=\sup\limits_{0<t\leqslant1}|x(t)|$. 求证:
> (1) $\|\cdot\|$ 是 $C(0,1]$ 上的范数;
> (2) $l^\infty$ 与 $C(0,1]$ 的一个子空间是等距同构的.

> [!exercise] 1.4.3
> 在 $C^1[a,b]$ 中, 令
> $$\|f\|_1=\left(\int_a^b(|f|^2+|f'|^2)\mathrm{d}x\right)^{\frac{1}{2}}\quad(\forall f\in C^1[a,b]),$$
> (1) 求证 $\|\cdot\|_1$ 是 $C^1[a,b]$ 上的范数.
> (2) 问 $(C^1[a,b],\|\cdot\|_1)$ 是否完备?

> [!exercise] 1.4.4
> 在 $C[0,1]$ 中, 对每一个 $f\in C[0,1]$, 令
> $$\|f\|_1=\left(\int_0^1|f(x)|^2\mathrm{d}x\right)^{\frac{1}{2}},$$
> $$\|f\|_2=\left(\int_0^1(1+x)|f(x)|^2\mathrm{d}x\right)^{\frac{1}{2}},$$
> 求证: $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是 $C[0,1]$ 中的两个等价范数.

> [!exercise] 1.4.5
> 设 $BC[0,\infty)$ 表示 $[0,\infty)$ 上连续且有界的函数 $f(x)$ 全体, 对于每个 $f\in BC[0,\infty)$ 及 $a>0$, 定义
> $$\|f\|_a=\left(\int_0^\infty\mathrm{e}^{-ax}|f(x)|^2\mathrm{d}x\right)^{\frac{1}{2}}.$$
> (1) 求证 $\|\cdot\|_a$ 是 $BC[0,\infty)$ 上的范数.
> (2) 若 $a,b>0,a\neq b$, 求证 $\|\cdot\|_a$ 与 $\|\cdot\|_b$ 作为 $BC[0,\infty)$ 上的范数是不等价的.

> [!exercise] 1.4.6
> 设 $\mathscr{X}_1,\mathscr{X}_2$ 是两个 $B^*$ 空间, $x_1\in\mathscr{X}_1$ 和 $x_2\in\mathscr{X}_2$ 的序对 $(x_1,x_2)$ 全体构成空间 $\mathscr{X}=\mathscr{X}_1\times\mathscr{X}_2$, 并赋以范数
> $$\|x\|=\max(\|x_1\|_1,\|x_2\|_2),$$
> 其中 $x=(x_1,x_2),x_1\in\mathscr{X}_1,x_2\in\mathscr{X}_2,\|\cdot\|_1$ 和 $\|\cdot\|_2$ 分别是 $\mathscr{X}_1$ 和 $\mathscr{X}_2$ 的范数. 求证: 如果 $\mathscr{X}_1,\mathscr{X}_2$ 是 $B$ 空间, 那么 $\mathscr{X}$ 也是 $B$ 空间.

> [!exercise] 1.4.7
> 设 $\mathscr{X}$ 是 $B^*$ 空间. 求证: $\mathscr{X}$ 是 $B$ 空间, 必须且仅须对 $\forall\{x_n\}_{n=1}^\infty\subset\mathscr{X},\sum\limits_{n=1}^\infty\|x_n\|<\infty\Longrightarrow\sum\limits_{n=1}^\infty x_n$ 收敛.

> [!exercise] 1.4.8
> 记 $[a,b]$ 上次数不超过 $n$ 的多项式全体为 $\mathbb{P}_n$. 求证: $\forall f(x)\in C[a,b],\exists P_0(x)\in\mathbb{P}_n$, 使得
> $$\max_{a\leqslant x\leqslant b}|f(x)-P_0(x)|=\min_{P\in\mathbb{P}_n}\max_{a\leqslant x\leqslant b}|f(x)-P(x)|.$$
> 也就是说, 如果用所有次数不超过 $n$ 的多项式去对 $f(x)$ 一致逼近, 那么 $P_0(x)$ 是最佳的.

> [!exercise] 1.4.9
> 在 $\mathbb{R}^2$ 中, 对 $\forall x=(x_1,x_2)\in\mathbb{R}^2$, 定义范数
> $$\|x\|=\max(|x_1|,|x_2|),$$
> 并设 $e_1=(1,0),x_0=(0,1)$. 求 $a\in\mathbb{R}$ 适合
> $$\|x_0-ae_1\|=\min_{\lambda\in\mathbb{R}}\|x_0-\lambda e_1\|,$$
> 并问这样的 $a$ 是否唯一? 请对结果做出几何解释.

> [!exercise] 1.4.10
> 求证: 范数的严格凸性等价于下列条件:
> $$\|x+y\|=\|x\|+\|y\|\;(\forall x\neq\theta,y\neq\theta)\Longrightarrow x=cy\;(c>0).$$

> [!exercise] 1.4.11
> 设 $\mathscr{X}$ 是赋范线性空间, 函数 $\varphi:\mathscr{X}\to\mathbb{R}$ 称为凸的, 如果不等式
> $$\varphi(\lambda x+(1-\lambda)y)\leqslant\lambda\varphi(x)+(1-\lambda)\varphi(y)\quad(\forall\,0\leqslant\lambda\leqslant1)$$
> 成立. 求证: 凸函数的局部极小值必然是全空间最小值.

> [!exercise] 1.4.12
> 设 $(\mathscr{X},\|\cdot\|)$ 是一赋范线性空间, $M$ 是 $\mathscr{X}$ 的有限维子空间, $\{e_1,e_2,\cdots,e_n\}$ 是 $M$ 的一组基, 给定 $g\in\mathscr{X}$, 引进函数 $F:\mathbb{K}^n\to\mathbb{R}$, 对 $\forall c=(c_1,c_2,\cdots,c_n)\in\mathbb{K}^n$ 规定
> $$F(c)=F(c_1,c_2,\cdots,c_n)=\left\|\sum_{i=1}^nc_ie_i-g\right\|.$$
> (1) 求证: $F$ 是一个凸函数.
> (2) 若 $F(c)$ 的最小值点是 $c=(c_1,c_2,\cdots,c_n)$, 求证:
> $$f\triangleq\sum_{i=1}^nc_ie_i$$
> 给出 $g$ 在 $M$ 中的最佳逼近元.

> [!exercise] 1.4.13
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的线性子空间, 假定 $\exists c\in(0,1)$, 使得
> $$\inf_{x\in\mathscr{X}_0}\|y-x\|\leqslant c\|y\|\quad(\forall y\in\mathscr{X}).$$
> 求证: $\mathscr{X}_0$ 在 $\mathscr{X}$ 中稠密.

> [!exercise] 1.4.14
> 设 $C_0$ 表示以 $0$ 为极限的实数全体, 并在 $C_0$ 中赋以范数
> $$\|x\|=\max_{n\geqslant1}|\xi_n|\quad(\forall x=(\xi_1,\xi_2,\cdots,\xi_n)\in C_0).$$
> 又设 $M\triangleq\left\{x=\{\xi_n\}_{n=1}^\infty\in C_0\left|\sum_{n=1}^\infty\frac{\xi_n}{2^n}=0\right.\right\}$.
>
> (1) 求证: $M$ 是 $C_0$ 的闭线性子空间.
>
> (2) 设 $x_0=(2,0,\cdots,0,\cdots)$, 求证:
> $$\inf_{z\in M}\|x_0-z\|=1,$$
> 但 $\forall y\in M$ 有 $\|x_0-y\|>1$.
>
> 注 本题提供一个例子说明: 对于无穷维闭线性子空间来说, 给定其外一点 $x_0$, 未必能在其上找到一点 $y$ 适合
> $$\|x_0-y\|=\inf_{z\in M}\|x_0-z\|.$$
> 换句话说, 给定 $x_0\overline{\in}M$, 未必能在 $M$ 上找到最佳逼近元.

> [!exercise] 1.4.15
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $M$ 是 $\mathscr{X}$ 的有限维真子空间. 求证: $\exists y\in\mathscr{X},\|y\|=1$, 使得
> $$\|y-x\|\geqslant1\quad(\forall x\in M).$$

> [!exercise] 1.4.16
> 若 $f$ 是定义在区间 $[0,1]$ 上的复值函数, 定义
> $$\omega_\delta(f)=\sup\left\{|f(x)-f(y)|\left|\forall x,y\in[0,1],|x-y|\leqslant\delta\right.\right\}.$$
> 如果 $0<\alpha\leqslant1$ 对应的 Lipschitz 空间 $\operatorname{Lip}\alpha$, 由满足
> $$\|f\|\triangleq|f(0)|+\sup_{\delta>0}\{\delta^{-\alpha}\omega_\delta(f)\}<\infty$$
> 的一切 $f$ 组成, 并以 $\|f\|$ 为范数. 又设
> $$\operatorname{lip}\alpha\triangleq\left\{f\in\operatorname{Lip}\alpha\left|\lim_{\delta\to0}\delta^{-\alpha}\omega_\delta(f)=0\right.\right\}.$$
> 求证: $\operatorname{Lip}\alpha$ 是 $B$ 空间, 而且 $\operatorname{lip}\alpha$ 是 $\operatorname{Lip}\alpha$ 的闭子空间.

> [!exercise] 1.4.17
> 设有商空间 $\mathscr{X}/\mathscr{X}_0$.
>
> (1) 设 $[x]\in\mathscr{X}/\mathscr{X}_0$, 求证: 对 $\forall x\in[x]$, 有
> $$\inf_{z\in\mathscr{X}_0}\|x-z\|=\|[x]\|_0.$$
>
> (2) 定义映射 $\varphi:\mathscr{X}\to\mathscr{X}/\mathscr{X}_0$ 为
> $$\varphi(x)=[x]\triangleq x+\mathscr{X}_0\quad(\forall x\in\mathscr{X}),$$
> 求证: $\varphi$ 是连续线性映射.
>
> (3) $\forall[x]\in\mathscr{X}/\mathscr{X}_0$, 求证: $\exists x\in\mathscr{X}$, 使得
> $$\varphi(x)=[x],\quad\text{且}\quad\|x\|\leqslant2\|[x]\|_0.$$
>
> (4) 设 $\mathscr{X}=C[0,1]$, $\mathscr{X}_0=\{f\in\mathscr{X}\mid f(0)=0\}$, 求证:
> $$\mathscr{X}/\mathscr{X}_0\cong\mathbb{K},$$
> 其中记号 "$\cong$" 表示等距同构.

## § 5凸集与不动点

### 5.1 定义与基本性质

一般线性空间中的凸集概念是从平面凸集的特征性质中抽象出来的. 这性质是: 若 $E$ 是一个平面凸集, 则对于 $E$ 中任意两点 $x,y$, 联结这两点的线段也在 $E$ 内, 即
$$\lambda x+(1-\lambda)y\in E\quad(\forall x,y\in E,\forall0\leqslant\lambda\leqslant1).$$
这个性质并不要求空间具有拓扑结构, 所以这个概念可以扩充到一般的线性空间.

> [!definition] 定义 1.5.1
> 设 $\mathscr{X}$ 是线性空间, $E\subset\mathscr{X}$, 称 $E$ 为一凸集, 如果
> $$\lambda x+(1-\lambda)y\in E\quad(\forall x,y\in E,\forall0\leqslant\lambda\leqslant1).$$

下面命题可从定义直接推出.

> [!proposition] 命题 1.5.2
> 若 $\{E_\lambda\mid\lambda\in\varLambda\}$ 是线性空间 $\mathscr{X}$ 中的一族凸集, 则 $\bigcap_{\lambda\in\varLambda}E_\lambda$ 也是凸集.

> [!definition] 定义 1.5.3
> 设 $\mathscr{X}$ 是线性空间, $A\subset\mathscr{X}$. 若 $\{E_\lambda\mid\lambda\in\varLambda\}$ 为 $\mathscr{X}$ 中包含 $A$ 的一切凸集, 那么称 $\bigcap_{\lambda\in\varLambda}E_\lambda$ 为 $A$ 的凸包, 并记作 $\operatorname{co}(A)$. 又对 $\forall n\in\mathbb{N},x_1,x_2,\cdots,x_n\in A$, 称 $\sum_{i=1}^n\lambda_ix_i$ 为 $x_1,x_2,\cdots,x_n$ 的凸组合, 是指其中系数满足 $\lambda_i\geqslant0,\sum_{i=1}^n\lambda_i=1$.

> [!proposition] 命题 1.5.4
> 设 $\mathscr{X}$ 是线性空间, $A\subset\mathscr{X}$, 那么 $A$ 的凸包是 $A$ 中元素任意凸组合的全体, 即
> $$\operatorname{co}(A)=\left\{\sum_{i=1}^n\lambda_ix_i\left|\sum_{i=1}^n\lambda_i=1,\lambda_i\geqslant0,x_i\in A,i=1,2,\cdots,n,\forall n\in\mathbb{N}\right.\right\}.\tag{1.5.1}$$
> 
> > [!proof]- 证
> > 若令 $S$ 表示 (1.5.1) 式右端, 则 $A\subset S$ 而且 $S$ 是凸集, 从而 $S\supset\operatorname{co}(A)$. 反之, 设 $F$ 为包含 $A$ 的任一凸集, 那么 $x_i\in F(i=1,2,\cdots,n)$, 从而 $\sum_{i=1}^n\lambda_ix_i\in F$, 即得 $S\subset F$, 从而 $S\subset\operatorname{co}(A)$. $\blacksquare$

> [!definition] 定义 1.5.5
> 设 $\mathscr{X}$ 是线性空间, $C$ 是 $\mathscr{X}$ 上含有 $\theta$ 的凸子集, 在 $\mathscr{X}$ 上规定一个取值于 $[0,\infty]$ 的函数
> $$P(x)=\inf\left\{\lambda>0\left|\frac{x}{\lambda}\in C\right.\right\}\quad(\forall x\in\mathscr{X})\tag{1.5.2}$$
> 与 $C$ 对应, 称函数 $P$ 为 $C$ 的 Minkowski 泛函.

> [!proposition] 命题 1.5.6
> 设 $\mathscr{X}$ 是线性空间, $C$ 是 $\mathscr{X}$ 上含有 $\theta$ 的凸子集. 若 $P$ 为 $C$ 的 Minkowski 泛函, 则 $P$ 具有下列性质:
> 
> (1) $P(x)\in[0,\infty],P(\theta)=0$;
> 
> (2) $P(\lambda x)=\lambda P(x)\quad(\forall x\in\mathscr{X},\forall\lambda>0)$ (正齐次性);
> 
> (3) $P(x+y)\leqslant P(x)+P(y)\quad(\forall x,y\in\mathscr{X})$ (次可加性).
> 
> > [!proof]- 证
> > 只有 (3) 是需要验证的. 不妨设 $P(x),P(y)$ 有穷, 对 $\forall\varepsilon>0$, 取 $\lambda_1=P(x)+\varepsilon/2,\lambda_2=P(y)+\varepsilon/2$, 则有
> > $$\frac{x}{\lambda_1}\in C,\quad\frac{y}{\lambda_2}\in C.$$
> > 因为 $C$ 是凸的, 所以
> > $$\frac{x+y}{\lambda_1+\lambda_2}=\frac{\lambda_1}{\lambda_1+\lambda_2}\cdot\frac{x}{\lambda_1}+\frac{\lambda_2}{\lambda_1+\lambda_2}\cdot\frac{y}{\lambda_2}\in C.$$
> > 这表明
> > $$P(x+y)\leqslant\lambda_1+\lambda_2=P(x)+P(y)+\varepsilon.$$
> > 由 $\varepsilon>0$ 的任意性得到 (3). $\blacksquare$

何时 $P(x)$ 是真正的函数, 即不取 $\infty$? 又何时正齐次性成为齐次性? 为了回答这些问题我们引进如下的概念.

> [!definition] 定义 1.5.7
> 线性空间 $\mathscr{X}$ 中, 含有 $\theta$ 的凸集 $C$ 称为是吸收的, 如果 $\forall x\in\mathscr{X},\exists\lambda>0$, 使得 $x/\lambda\in C$; 称 $C$ 是对称的, 如果 $x\in C\Longrightarrow -x\in C$.

图 1.5.1 显示平面上吸收凸集和对称凸集的图形.

根据定义显然有如下命题.

> [!proposition] 命题 1.5.8
> 为了 $C$ 是吸收凸集, 必须且仅须其 Minkowski 泛函 $P(x)$ 是实值函数; 为了 $C$ 是对称凸集, 必须 $P(x)$ 是实齐次的, 即
> $$P(\alpha x)=|\alpha|P(x)\quad(\forall\alpha\in\mathbb{R}).$$

对于复数域线性空间上的凸集, 我们引进均衡性的概念代替对称性.

图 1.5.1

> [!definition] 定义 1.5.9
> 复线性空间 $\mathscr{X}$ 的一个子集 $C$ 称为是均衡的, 是指
> $$x\in C\Longrightarrow\alpha x\in C\quad(\forall\alpha\in\mathbb{C},|\alpha|=1).$$

结合半范数定义 (见定义 1.4.21 的注) 我们有如下命题.

> [!proposition] 命题 1.5.10
> 复线性空间 $\mathscr{X}$ 上的任一个均衡吸收凸集 $C$, 决定了这空间上的一个半范数.

对于赋范线性空间 $\mathscr{X}$, 我们有更强的结果.

> [!proposition] 命题 1.5.11
> 设 $\mathscr{X}$ 是一个 $B^*$ 空间, $C$ 是一个含有 $\theta$ 点的闭凸集. 如果 $P(x)$ 是 $C$ 的 Minkowski 泛函, 那么 $P(x)$ 下半连续, 且有
> $$C=\left\{x\in\mathscr{X}\left|P(x)\leqslant1\right.\right\}.\tag{1.5.3}$$
> 此外, 如果 $C$ 还是有界的, 那么 $P(x)$ 适合
> $$P(x)=0\iff x=\theta.$$
> 又若 $C$ 以 $\theta$ 为一内点, 那么 $C$ 是吸收的, 并且 $P(x)$ 还是一致连续的.
> 
> > [!proof]- 证
> > (1) $\forall\alpha>0$, 若 $x\in\alpha C$, 即 $x/\alpha\in C$, 由 $P(x)$ 的定义便有 $P(x)\le\alpha$; 反之, 若 $P(x)\le\alpha$, 则对 $\forall n\in\mathbb{N}$, 有
> > $$x/(\alpha+1/n)\in C,\quad x/(\alpha+1/n)\to x/\alpha\quad(n\to\infty).$$
> > 又因为 $C$ 是闭的, 所以 $x\in\alpha C$. 这就证得
> > $$\alpha C=\{x\in\mathscr{X}\mid P(x)\le\alpha\}\quad(\forall\alpha>0).\tag{1.5.4}$$
> > 特别地, 令 $\alpha=1$ 即得 (1.5.3) 式. 又因为 $\forall\alpha>0$, $\alpha C$ 是闭集, 所以 $P$ 是下半连续的.
> > (2) 因为 $\theta\in C$, 所以 $P(\theta)=0$ 是显然的. 在 $C$ 有界假定下, 即 $\exists r>0$, 使得 $C\subset B(\theta,r)$, 于是
> > $$\forall x\in\mathscr{X}\setminus\{\theta\}\implies rx/\|x\|\in C\implies P(x)\ge\|x\|/r.$$
> > 由此可见, 当 $P(x)=0$ 时, $x=\theta$.
> > (3) 若 $C$ 以 $\theta$ 为内点, 即 $\exists r>0$, 使得 $B(\theta,r)\subset C$, 那么
> > $$rx/(2\|x\|)\in C\quad(\forall x\in\mathscr{X}\setminus\{\theta\}).$$
> > 因此 $C$ 是吸收的, 并且有 $P(x)\le 2\|x\|/r(\forall x\in\mathscr{X})$. 于是
> > $$|P(x)-P(y)|\le\max(P(x-y),P(y-x))\le(2/r)\|x-y\|\quad(\forall x,y\in\mathscr{X}),$$
> > 从而 $P(x)$ 是一致连续的. $\blacksquare$

> [!corollary] 推论 1.5.12
> 若 $C$ 是 $\mathbb{R}^n$ 中的一个紧凸子集, 则必存在正整数 $m\le n$, 使得 $C$ 同胚于 $\mathbb{R}^m$ 中的单位球.
> 
> > [!proof]- 证
> > (1) 用 $E$ 表示包含 $C$ 的最小闭线性子流形. 设其维数是 $m(\le n)$. 于是在 $C$ 上必有 $m+1$ 个向量 $e_1,e_2,\cdots,e_m,e_{m+1}$, 使得 $e_i-e_{m+1}(i=1,2,\cdots,m)$ 是线性无关的.
> > (2) 令
> > $$e_0=\frac{1}{m+1}\sum_{i=1}^{m+1}e_i.$$
> > 因为 $e_0\in C\subset E$, 所以 $E-e_0$ 是一个 $m$ 维线性子空间. 于是对 $\forall y\in E$, 存在唯一的表示
> > $$y=\sum_{i=1}^m\mu_i(e_i-e_0)+e_0,\tag{1.5.5}$$
> > 并在 $E-e_0$ 上可引进一个等价范数
> > $$\|z\|=\left(\sum_{i=1}^m|\mu_i|^2\right)^{1/2}\quad(z=y-e_0,\;y\in E).\tag{1.5.6}$$
> > (3) 我们要证: 当 (1.5.6) 式所表示的 $\|z\|$ 足够小时, 蕴含 (1.5.5) 式所表示的 $y\in C$. 事实上, 因为
> > $$\begin{aligned}
> > y&=\sum_{i=1}^m\mu_ie_i+\left(1-\sum_{j=1}^m\mu_j\right)e_0\\
> > &=\sum_{i=1}^m\left[\mu_i+\frac{1}{m+1}\left(1-\sum_{j=1}^m\mu_j\right)\right]e_i\\
> > &\quad+\frac{1}{m+1}\left(1-\sum_{j=1}^m\mu_j\right)e_{m+1},
> > \end{aligned}\tag{1.5.7}$$
> > 当 $|\mu_j|(j=1,2,\cdots,m)$ 足够小时, (1.5.7) 式右端各项系数都是正的, 并且各项系数的总和满足
> > $$\sum_{i=1}^m\left[\mu_i+\frac{1}{m+1}\left(1-\sum_{j=1}^m\mu_j\right)\right]+\frac{1}{m+1}\left(1-\sum_{j=1}^m\mu_j\right)=1,$$
> > 所以 $y\in\operatorname{co}\{e_1,e_2,\cdots,e_m,e_{m+1}\}\subset C$.
> > (4) 在 $E-e_0$ 上, $C-e_0$ 是一个以 $\theta$ 为内点的有界闭凸集, 它的 Minkowski 泛函 $P(z)$ 是 $E-e_0$ 上的一个一致连续、正齐次、次可加泛函, 适合 $P(z)=0\iff z=\theta$. 应用定理 1.4.22, $\exists$ 常数 $C_1,C_2>0$, 使得
> > $$C_1\|z\|\le P(z)\le C_2\|z\|\quad(\forall z\in E-e_0).$$
> > 设 $B^m(\theta,1)$ 是 $E-e_0$ 中的单位球, 若令
> > $$\varphi(z)=e_0+\begin{cases}
> > \dfrac{\|z\|z}{P(z)}, & z\neq\theta,\\[10pt]
> > 0, & z=\theta,
> > \end{cases}$$
> > 则 $\varphi:B^m(\theta,1)\to C$ 是一个在上同胚.

### 5.2 Brouwer 与 Schauder 不动点定理

在拓扑学中有一个重要的属于 Brouwer 的不动点定理, 引用如下:

> [!theorem] 定理 1.5.13 (Brouwer)①
> 设 $B$ 是 $\mathbb{R}^n$ 中的闭单位球, 又设 $T:B\to B$ 是一个连续映射, 那么 $T$ 必有一个不动点 $x\in B$.

①这个定理的证明有好多个, 除了代数拓扑的证明外, 还有几个初等的、纯分析的证明, 例如参看 Milnor J., "Analytic Proofs of the 'Hairy Ball Theorem' and the Brouwer Fixed Point Theorem," Amer. Math. Monthly 85, No.7 (1978): 521–524. Franklin J., Methods of Mathematical Economics (New York: Springer Verlag, 1980), pp. 232–246.

联合推论 1.5.12 与 Brouwer 不动点定理 (定理 1.5.13), 有

> [!corollary] 推论 1.5.14
> 设 $C$ 是 $\mathbb{R}^n$ 中的一个紧凸子集, $T:C\to C$ 是连续的, 则 $T$ 必有一个在 $C$ 上的不动点.
> 
> > [!proof]- 证
> > 由于 $C$ 与 $\mathbb{R}^m(m\le n)$ 中的一个单位球同胚, 记此同胚为 $\varphi:B^m(\theta,1)\to C$. 考察映射
> > $$T_\varphi=\varphi^{-1}\circ T\circ\varphi.$$
> > 显然 $T_\varphi:B^m(\theta,1)\to B^m(\theta,1)$. 对 $T_\varphi$ 应用 Brouwer 不动点定理 (定理 1.5.13), 存在 $x\in B^m(\theta,1)$ 使得 $T_\varphi x=x$. 由此得到 $y=\varphi x\in C$ 是 $T$ 的不动点. $\blacksquare$

现在我们把有穷维空间的不动点定理推广到无穷维空间中去.

> [!theorem] 定理 1.5.15 (Schauder)
> 设 $C$ 是 $B^*$ 空间 $\mathscr{X}$ 中的一个闭凸子集, $T:C\to C$ 连续且 $T(C)$ 列紧, 则 $T$ 在 $C$ 上必有一个不动点.
> 
> > [!proof]- 证
> > (1) 因为 $T(C)$ 是列紧集, 所以对 $\forall n\in\mathbb{N}$, 存在 $1/n$ 网 $N_n=\{y_1,y_2,\cdots,y_{r_n}\}$, 即
> > $$T(C)\subset\bigcup_{i=1}^{r_n}B(y_i,1/n)\quad(y_i\in T(C),\;i=1,2,\cdots,r_n).$$
> > 记 $E_n=\operatorname{span}N_n$, 即 $E_n$ 为由 $N_n$ 张成的有穷维线性子空间.
> > (2) 做 $T(C)\to\operatorname{co}(N_n)$ 的映射 $I_n$ 如下:
> > $$I_n(y)=\sum_{i=1}^{r_n}y_i\lambda_i(y)\quad(\forall y\in T(C)),\tag{1.5.8}$$
> > 其中
> > $$\lambda_i(y)=\frac{m_i(y)}{\sum_{i=1}^{r_n}m_i(y)},\quad
> > m_i(y)=\begin{cases}
> > 1-n\|y-y_i\|, & y\in B(y_i,1/n),\\
> > 0, & y\notin B(y_i,1/n).
> > \end{cases}$$
> > 因为 $m_i(y)\ge0$, 并且 $\forall y\in T(C)$, $\exists i_0(1\le i_0\le r_n)$, 使得
> > $$y\in B(y_{i_0},1/n),\quad\text{于是}\quad m_{i_0}(y)>0,$$
> > 所以 $\sum_{i=1}^{r_n}m_i(y)>0(\forall y\in T(C))$. 因此, $\lambda_i(y)(1\le i\le r_n)$ 有定义并满足
> > $$\lambda_i(y)\ge0\;(1\le i\le r_n),\quad\sum_{i=1}^{r_n}\lambda_i(y)=1.\tag{1.5.9}$$
> > 于是 $I_n$ 在 $T(C)$ 上有定义, 并且 (1.5.8) 式与 (1.5.9) 式蕴含 $I_n(y)$ 是 $N_n$ 元素的凸组合, 从而 $I_n(y)\in\operatorname{co}(N_n)$. 此外还有
> > $$\begin{aligned}
> > \|I_ny-y\|&=\left\|\sum_{i=1}^{r_n}y_i\lambda_i(y)-\sum_{i=1}^{r_n}y\lambda_i(y)\right\|\\
> > &=\left\|\sum_{i=1}^{r_n}(y_i-y)\lambda_i(y)\right\|\le\sum_{i=1}^{r_n}\|y_i-y\|\lambda_i(y)\\
> > &=\sum_{y\in B(y_i,1/n)}^{r_n}\|y_i-y\|\lambda_i(y)
> > +\sum_{y\notin B(y_i,1/n)}^{r_n}\|y_i-y\|\lambda_i(y)\\
> > &<1/n+0=1/n.
> > \end{aligned}\tag{1.5.10}$$
> > (3) 注意到 $T:C\to C$, $N_n\subset T(C)$, 而 $C$ 是凸的, 所以 $\operatorname{co}(N_n)\subset C$. 令 $T_n\triangleq I_n\circ T$, 那么 $T_n:\operatorname{co}(N_n)\to\operatorname{co}(N_n)$. 又注意到 $\operatorname{co}(N_n)$ 是 $E_n$ 中的一个有界闭凸子集, 应用推论 1.5.14, $\exists x_n\in\operatorname{co}(N_n)\subset C$, 使得
> > $$T_nx_n=x_n.\tag{1.5.11}$$
> > 又因为 $T(C)$ 是列紧集而 $C$ 是闭集, 所以存在子列 $n_k$ 及 $x\in C$, 使得
> > $$Tx_{n_k}\to x\quad(k\to\infty).\tag{1.5.12}$$
> > 联合 (1.5.10) 式与 (1.5.11) 式得到
> > $$\begin{aligned}
> > \|x_n-x\|&=\|T_nx_n-x\|\\
> > &=\|I_nTx_n-Tx_n+Tx_n-x\|\\
> > &\le\|I_nTx_n-Tx_n\|+\|Tx_n-x\|\\
> > &<\frac{1}{n}+\|Tx_n-x\|\quad(\forall n\in\mathbb{N}).
> > \end{aligned}\tag{1.5.13}$$
> > 联合 (1.5.12) 式与 (1.5.13) 式即得 $x_{n_k}\to x(k\to\infty)$, 再利用 $T$ 的连续性和 (1.5.12) 式即得
> > $$Tx=x.\;\blacksquare$$

> [!definition] 定义 1.5.16
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E$ 是 $\mathscr{X}$ 的一个子集, 称映射 $T:E\to\mathscr{X}$ 是紧的, 如果它是连续的并且把 $E$ 中的任意有界集映为 $\mathscr{X}$ 中的列紧集.

> [!corollary] 推论 1.5.17
> 设 $C$ 为 $B^*$ 空间 $\mathscr{X}$ 中的一个有界闭凸子集, $T:C\to C$ 是紧的, 则 $T$ 在 $C$ 上必有不动点.

### 5.3 应用

再考察常微分方程初值问题的存在性定理. 现在只假设函数
$$f(t, x): \mathbb{R} \times \mathbb{R} \to \mathbb{R}$$
在 $[-h, h] \times [\xi-b, \xi+b]$ 上二元连续 (从而有常数 $M > 0$, 使得 $|f(t,x)| \le M$). 考察 $C[-h,h]$ 中的球 $\overline{B}(\xi,b)$ 上的映射:
$$(Tx)(t) = \xi + \int_0^t f(\tau, x(\tau)) \mathrm{d}\tau.$$

我们来证明: 对足够小的 $h$, $T$ 映 $\overline{B}(\xi,b)$ 到自身, 并且 $T$ 是紧的. 事实上,
$$\|Tx - \xi\|_{C[-h,h]} \le Mh \quad (\forall x \in \overline{B}(\xi,b)),$$
故当 $h \le b/M$ 时, $T$ 映 $\overline{B}(\xi,b)$ 到自身. 又因为
$$\begin{aligned}
|(Tx)(t) - (Tx)(t')| &= \left| \int_{t'}^t f(\tau, x(\tau)) \mathrm{d}\tau \right| \\
&\le M|t - t'| \quad (\forall t, t' \in [-h,h]),
\end{aligned}$$
$$|(Tx)(t)| \le |\xi| + Mh \quad (\forall t \in [-h,h]),$$
所以 $T$ 连续, 并根据 Arzelà-Ascoli 定理 (定理 1.3.16), $\overline{B}(\xi,b)$ 在 $T$ 映射下的像是列紧的. 应用 Schauder 不动点定理 (定理 1.5.15), 立得下述定理.

> [!theorem] 定理 1.5.18 (Caratheodory)
> 假设函数 $f(t,x)$ 在 $[-h,h] \times [\xi-b, \xi+b]$ 上二元连续, $|f(t,x)| \le M$, 那么当 $h < b/M$ 时, 方程的初值问题
> $$\begin{cases} \dot{x}(t) = f(t, x(t)), \\ x(0) = \xi \end{cases}$$
> 在 $[-h,h]$ 上存在解 $x(t)$.

**习题**

> [!exercise] 1.5.1
> 设 $\mathscr{X}$ 是 $B^*$ 空间, $E$ 是以 $\theta$ 为内点的真凸子集, $P$ 是由 $E$ 产生的 Minkowski 泛函, 求证:
> (1) $x \in \mathring{E} \Longleftrightarrow P(x) < 1$;
> (2) $\overline{\mathring{E}} = \overline{E}$.

> [!exercise] 1.5.2
> 求证: 在 $B$ 空间中, 列紧集的凸包是列紧集.

> [!exercise] 1.5.3
> 设 $C$ 是 $B^*$ 空间 $\mathscr{X}$ 中的一个紧凸集, 映射 $T: C \to C$ 连续, 求证: $T$ 在 $C$ 上有一个不动点.

> [!exercise] 1.5.4
> 设 $C$ 是 $B$ 空间 $\mathscr{X}$ 中的一个有界闭凸集, 映射 $T_i: C \to \mathscr{X} (i=1,2)$ 适合
> (1) $\forall x, y \in C \Longrightarrow T_1 x + T_2 y \in C$;
> (2) $T_1$ 是一个压缩映射, $T_2$ 是一个紧映射.
> 求证: $T_1 + T_2$ 在 $C$ 上至少有一个不动点.

> [!exercise] 1.5.5
> 设 $A$ 是 $n \times n$ 矩阵, 其元素 $a_{ij} > 0 (1 \le i, j \le n)$, 求证: 存在 $\lambda > 0$ 及各分量非负但不全为零的向量 $x \in \mathbb{R}^n$, 使得
> $$Ax = \lambda x.$$
> 
> **提示** 在 $\mathbb{R}^n$ 上考察子集
> $$C \triangleq \left\{ x = (x_1, \cdots, x_n) \in \mathbb{R}^n \left| \sum_{i=1}^n x_i = 1, x_i \ge 0 (i=1,2,\cdots,n) \right. \right\},$$
> 并做映射
> $$f(x) = \frac{Ax}{\sum_{j=1}^n (Ax)_j}.$$

> [!exercise] 1.5.6
> 设 $K(x,y)$ 是 $[0,1] \times [0,1]$ 上的正值连续函数, 定义映射
> $$(Tu)(x) = \int_0^1 K(x,y) u(y) \mathrm{d}y \quad (\forall u \in C[0,1]).$$
> 求证: 存在 $\lambda > 0$ 及非负但不恒为零的连续函数 $u$, 满足
> $$Tu = \lambda u.$$

## §6 内积空间

$B^*$ 空间上虽然有了范数, 可以定义收敛, 但是缺少一个重要概念 —— "角度", 所以还不能说两个向量相互垂直. 欧氏空间 $\mathbb{R}^n$ 上两个向量的夹角是通过内积来定义的, 在无穷维空间上也可引入类似的概念.

### 6.1 定义与基本性质

我们先从共轭双线性函数的概念入手.

> [!definition] 定义 1.6.1
> 线性空间 $\mathscr{X}$ 上的一个二元函数 $a(\cdot,\cdot):\mathscr{X}\times\mathscr{X}\to\mathbb{K}$, 称为是共轭双线性函数 (sesquilinear), 如果
> (1) $a(x,\alpha_1 y_1+\alpha_2 y_2)=\overline{\alpha}_1 a(x,y_1)+\overline{\alpha}_2 a(x,y_2)$,
> (2) $a(\alpha_1 x_1+\alpha_2 x_2,y)=\alpha_1 a(x_1,y)+\alpha_2 a(x_2,y)$,
> 其中 $\forall x,y,x_1,x_2,y_1,y_2\in\mathscr{X},\forall\alpha_1,\alpha_2\in\mathbb{K}$. 我们还称由
> $$q(x)\triangleq a(x,x)\quad(\forall x\in\mathscr{X})$$
> 定义的函数为 $\mathscr{X}$ 上由 $a$ 诱导的二次型.

> [!proposition] 命题 1.6.2
> 设 $a$ 是 $\mathscr{X}$ 上的共轭双线性函数, $q$ 是由 $a$ 诱导的二次型, 那么
> $$q(x)\in\mathbb{R}(\forall x\in\mathscr{X})\Longleftrightarrow a(x,y)=\overline{a(y,x)}\quad(\forall x,y\in\mathscr{X}).$$

> [!proof]- 证
> "$\Longleftarrow$" 是显然的. 下证 "$\Longrightarrow$". 从
> $$q(x+y)=\overline{q(x+y)}\quad(\forall x,y\in\mathscr{X}),$$
> 容易推出
> $$a(x,y)+a(y,x)=\overline{a(x,y)}+\overline{a(y,x)}.\quad(1.6.1)$$
> 在 (1.6.1) 式中换 $y$ 为 $\mathrm{i}y$, 即得
> $$-a(x,y)+a(y,x)=\overline{a(x,y)}-\overline{a(y,x)}.\quad(1.6.2)$$
> (1.6.1) 式与 (1.6.2) 式相减即得 $a(x,y)=\overline{a(y,x)}$. $\blacksquare$

> [!definition] 定义 1.6.3
> 线性空间 $\mathscr{X}$ 上的一个共轭双线性函数
> $$(\cdot,\cdot):\mathscr{X}\times\mathscr{X}\to\mathbb{K}$$
> 称为是一个内积, 如果它满足:
> (1) $(x,y)=\overline{(y,x)}\quad(\forall x,y\in\mathscr{X})$ (共轭对称性);
> (2) $(x,x)\ge0\quad(\forall x\in\mathscr{X}),(x,x)=0\Longleftrightarrow x=\theta$ (正定性).
> 具有内积的线性空间称为内积空间, 记作 $(\mathscr{X},(\cdot,\cdot))$.

> [!remark] 注
> 若在 (2) 中仅保存非负定条件: $(x,x)\ge0(\forall x\in\mathscr{X})$, 则称 $(\cdot,\cdot)$ 为一个半内积, 对应的空间称为半内积空间.

显然, 这个内积概念是有穷维欧氏空间上相应概念的推广.

> [!example] 例 1.6.4
> $\mathbb{R}^n,\mathbb{C}^n$ 都是内积空间, 它们的内积分别定义为
> $$(x,y)=\sum_{i=1}^n x_i y_i\quad(\forall x,y\in\mathbb{R}^n),$$
> $$(x,y)=\sum_{i=1}^n x_i\overline{y}_i\quad(\forall x,y\in\mathbb{C}^n),$$
> 其中 $x=(x_1,x_2,\cdots,x_n),y=(y_1,y_2,\cdots,y_n)$.

> [!example] 例 1.6.5
> $l^2$ 空间 (定义见例 1.4.11 的注 (2)) 是内积空间, 规定内积
> $$(x,y)=\sum_{i=1}^{\infty}x_i\overline{y}_i,$$
> 其中 $x=(x_1,x_2,\cdots,x_i,\cdots),y=(y_1,y_2,\cdots,y_i,\cdots)\in l^2$.

> [!example] 例 1.6.6
> $L^2(\Omega,\mu)$ (定义见例 1.4.11) 是内积空间, 规定内积
> $$(u,v)=\int_{\Omega}u(x)\cdot\overline{v(x)}\mathrm{d}\mu,$$
> 其中 $u,v\in L^2(\Omega,\mu)$.

> [!example] 例 1.6.7
> 在空间 $C^k(\overline{\Omega})$ (定义见例 1.4.13) 中, 规定内积
> $$(u,v)=\sum_{|\alpha|\le k}\int_{\Omega}\partial^{\alpha}u(x)\cdot\overline{\partial^{\alpha}v(x)}\,\mathrm{d}x\quad(\forall u,v\in C^k(\overline{\Omega})).$$
> 那么 $(C^k(\overline{\Omega}),(\cdot,\cdot))$ 是一个内积空间.

和欧氏空间 $\mathbb{R}^n$ 一样, 由内积可以导出范数, 这要用到下面一个重要的不等式.

> [!proposition] 命题 1.6.8
> (Cauchy-Schwarz 不等式) 设 $(\mathscr{X},(\cdot,\cdot))$ 是内积空间. 若令
> $$\|x\|=(x,x)^{\frac12}\quad(\forall x\in\mathscr{X}),\tag{1.6.3}$$
> 则有
> $$|(x,y)|\leqslant\|x\|\cdot\|y\|\quad(\forall x,y\in\mathscr{X}),\tag{1.6.4}$$
> 而且 (1.6.4) 式中的等号当且仅当 $x$ 与 $y$ 线性相关时成立.

我们就更一般的情形证明不等式 (1.6.4).

> [!proposition] 命题 1.6.9
> 设 $a$ 是线性空间 $\mathscr{X}$ 上的共轭双线性函数, $q(x)$ 是由 $a$ 诱导的二次型. 如果
> $$q(x)\geqslant0\quad(\forall x\in\mathscr{X})\quad\text{且}\quad q(x)=0\Longleftrightarrow x=\theta,$$
> 那么
> $$|a(x,y)|\leqslant[q(x)q(y)]^{\frac12}\quad(\forall x,y\in\mathscr{X}),\tag{1.6.5}$$
> 而且 (1.6.5) 式中的等号当且仅当 $x$ 与 $y$ 线性相关时成立.

> [!proof]- 证
> 不妨设 $y\neq\theta$, 对 $\forall\lambda\in\mathbb{K}$ 考察
> $$q(x+\lambda y)=q(x)+\bar\lambda a(x,y)+\lambda a(y,x)+|\lambda|^2q(y)\geqslant0.\tag{1.6.6}$$
> 取 $\lambda=-a(x,y)/q(y)$, 因为 $a(x,y)=\overline{a(y,x)}$ (这是由假设 $q(x)\geqslant0$, 根据命题 1.6.2 推出的), 所以
> $$q(x)-\frac{2|a(x,y)|^2}{q(y)}+\frac{|a(x,y)|^2}{q(y)}\geqslant0,$$
> 由此立得 (1.6.5) 式. 又当 $x=-\lambda y(\lambda\in\mathbb{K})$ 时, (1.6.5) 式中的等号成立. 反之, 若 (1.6.5) 式中的等号成立, 则 (1.6.6) 式中的等号成立, 从而 $x=-\lambda y(\lambda\in\mathbb{K})$. ■

> [!proposition] 命题 1.6.10
> 内积空间 $(\mathscr{X},(\cdot,\cdot))$ 按 (1.6.3) 式定义范数, 是一个 $B^*$ 空间.

> [!proof]- 证
> 只要证明按 (1.6.3) 式定义的 $\|\cdot\|$ 是范数. 事实上, 定义 1.4.9 中的 (1) 和 (3) 都是显然成立的, 下面来验证 (2).
> $$\begin{aligned}\|x+y\|^2&=(x+y,x+y)\\&=(x,x)+(x,y)+(y,x)+(y,y)\\&\leqslant\|x\|^2+2\|x\|\|y\|+\|y\|^2\\&=(\|x\|+\|y\|)^2\quad(\forall x,y\in\mathscr{X}).\end{aligned}$$ ■

> [!proposition] 命题 1.6.11
> 在内积空间 $(\mathscr{X},(\cdot,\cdot))$ 中, 内积 $(x,y)$ 是 $\mathscr{X}\times\mathscr{X}$ 上关于范数 $\|\cdot\|$ 的连续函数.

> [!proof]- 证
> 设 $x_n\to x,y_n\to y$. 那么 $\|x_n\|$ 和 $\|y_n\|$ 有界, 用 $M$ 表示它们的一个上界, 便有
> $$\begin{aligned}|(x_n,y_n)-(x,y)|&\leqslant|(x_n,y_n)-(x,y_n)|+|(x,y_n)-(x,y)|\\&\leqslant\|x_n-x\|\cdot\|y_n\|+\|x\|\cdot\|y_n-y\|\\&\leqslant M\|x_n-x\|+\|x\|\|y_n-y\|\to0\quad(n\to\infty).\end{aligned}$$ ■

> [!proposition] 命题 1.6.12
> 内积空间 $(\mathscr{X},(\cdot,\cdot))$ 是严格凸的 $B^*$ 空间.

> [!proof]- 证
> $\forall0<\lambda<1$, 根据命题 1.6.8 我们有
> $$\begin{aligned}&\|\lambda x+(1-\lambda)y\|^2\\&\quad=\lambda^2\|x\|^2+2\lambda(1-\lambda)\operatorname{Re}(x,y)+(1-\lambda)^2\|y\|^2\\&\quad<[\lambda+(1-\lambda)]^2=1\quad(\text{当 }\|x\|=\|y\|=1,x\neq y).\end{aligned}$$ ■

我们还要问: 什么样的 $B^*$ 空间 $(\mathscr{X},\|\cdot\|)$ 可以引入一个内积 $(\cdot,\cdot)$ 适合
$$(x,x)^{\frac12}=\|x\|\quad(\forall x\in\mathscr{X}).\tag{1.6.7}$$

> [!proposition] 命题 1.6.13
> 在 $B^*$ 空间 $(\mathscr{X},\|\cdot\|)$ 中, 为了在 $\mathscr{X}$ 上可引入一个内积 $(\cdot,\cdot)$ 适合 (1.6.7) 式, 必须且仅须范数 $\|\cdot\|$ 满足如下平行四边形等式:
> $$\|x+y\|^2+\|x-y\|^2=2(\|x\|^2+\|y\|^2)\quad(\forall x,y\in\mathscr{X}).\tag{1.6.8}$$

> [!proof]- 证
> 必要性可通过直接计算得到. 为了证充分性, 令
> $$(x,y)=\begin{cases}\dfrac14(\|x+y\|^2-\|x-y\|^2),&\text{当 }\mathbb{K}=\mathbb{R},\\[6pt]\dfrac14(\|x+y\|^2-\|x-y\|^2+\mathrm i\|x+\mathrm iy\|^2\\[6pt]\qquad-\mathrm i\|x-\mathrm iy\|^2),&\text{当 }\mathbb{K}=\mathbb{C}.\end{cases}$$
> 容易验证它是一个满足 (1.6.7) 式的内积. ■

> [!definition] 定义 1.6.14
> 完备的内积空间称为 Hilbert 空间.

例 1.6.4, 例 1.6.5 和例 1.6.6 都是 Hilbert 空间. 下面我们再举一个在偏微分方程边值问题理论中特别有用的内积空间 —— $H_0^m(\Omega)$ 作为例子, 为此先证明如下引理.

> [!lemma] 引理 1.6.15
> (Poincaré 不等式) 设 $C_0^m(\Omega)$ 表示有界开区域 $\Omega\subset\mathbb{R}^n$ 上一切 $m$ 次连续可微, 并在边界 $\partial\Omega$ 的某邻域内为 $0$ 的函数集合, 即
> $$C_0^m(\Omega)=\{u\in C^m(\overline\Omega)\mid u(x)=0,\text{ 当 }x\in\partial\Omega\text{ 的某邻域}\}.$$
> 那么 $\forall u\in C_0^m(\Omega)$ 有
> $$\sum_{|\alpha|<m}\int_\Omega|\partial^\alpha u(x)|^2\mathrm dx\leqslant C\sum_{|\alpha|=m}\int_\Omega|\partial^\alpha u(x)|^2\mathrm dx,\tag{1.6.9}$$
> 其中 $C$ 是仅依赖于区域 $\Omega$ 及 $m$ 的常数.

> [!proof]- 证
> 因为 $\Omega$ 是有界的, 我们可以把 $\Omega$ 放在某个边长为 $a$ 的立方体 $\Omega_1$ 内, 适当选择坐标系, 使得
> $$\Omega_1=\{(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n\mid0\leqslant x_i\leqslant a\,(i=1,2,\cdots,n)\}.$$
> 在 $\Omega_1\setminus\Omega$ 上补充定义 $u=0$, 经补充定义后, $u(x)$ 在 $\Omega_1$ 上 $m$ 次连续可微, 而且在边界上等于 $0$. $\forall x\in\Omega_1$,
> $$u(x)=\int_0^{x_1}\frac{\partial u}{\partial t}(t,x_2,\cdots,x_n)\mathrm dt.$$
> 再利用 Cauchy-Schwarz 不等式 (命题 1.6.8), 我们有
> $$|u(x)|^2\leqslant a\int_0^a\left|\frac{\partial u}{\partial x_1}\right|^2\mathrm dx_1.\tag{1.6.10}$$
> 在 $\Omega_1$ 上积分不等式 (1.6.10), 我们得
> $$\begin{aligned}\int_\Omega|u(x)|^2\mathrm dx&\leqslant a^2\int_\Omega\left|\frac{\partial u}{\partial x_1}\right|^2\mathrm dx\\&\leqslant a^2\int_\Omega|\operatorname{grad}u(x)|^2\mathrm dx.\end{aligned}\tag{1.6.11}$$
> 然后逐次应用不等式 (1.6.11) 于 $\partial^\alpha u(x)(|\alpha|<m)$, 即得不等式 (1.6.9). ■

引理 1.6.15 表明在 $C_0^m(\Omega)$ 上,
$$\|u\|_m\triangleq\left(\sum_{|\alpha|=m}\int_\Omega|\partial^\alpha u(x)|^2\mathrm dx\right)^{\frac12}\tag{1.6.12}$$
和
$$\|u\|\triangleq\left(\sum_{|\alpha|\leqslant m}\int_\Omega|\partial^\alpha u(x)|^2\mathrm dx\right)^{\frac12}\tag{1.6.13}$$
是一对等价范数. 记 $C_0^m(\Omega)$ 按 (1.6.12) 式完备化后的空间为 $H_0^m(\Omega)$. 它是 $H^m(\Omega)$ (定义见例 1.4.14) 的一个闭子空间.

> [!example] 例 1.6.16
> $H_0^m(\Omega)$ 是一个 Hilbert 空间, 其内积定义为
> $$(u,v)_m=\sum_{|\alpha|=m}\int_\Omega\partial^\alpha u(x)\cdot\overline{\partial^\alpha v(x)}\mathrm dx\quad(\forall u,v\in C_0^m(\Omega)).\tag{1.6.14}$$

> [!remark] 注
> 当 $\Omega$ 的边界 $\partial\Omega$ 具有光滑的法向导数时, $H_0^m(\Omega)$ 中的元素实际上是满足边界条件:
> $$\left.u\right|_{\partial\Omega}=\left.\frac{\partial u}{\partial n}\right|_{\partial\Omega}=\cdots=\left.\left(\frac{\partial}{\partial n}\right)^{m-1}u\right|_{\partial\Omega}=0$$
> 的 $C^m(\Omega)$ 函数 $u$ 的一种推广, 其中 $\partial/\partial n$ 是 $\partial\Omega$ 上的法向导数.

### 6.2 正交与正交基

在内积空间 $\mathscr{X}$ 中, 可以引入两个向量夹角的概念, 从而可定义什么叫垂直或正交. 和欧氏空间一样, 对内积空间中的两个向量 $x,y$, 我们用
$$\theta\triangleq\cos^{-1}\frac{|(x,y)|}{\|x\|\cdot\|y\|}$$
表示它们之间的夹角.

> [!definition] 定义 1.6.17
> 内积空间 $\mathscr{X}$ 上的两个元素 $x$ 与 $y$ 称为是正交的, 是指
> $$(x,y)=0,$$
> 记作 $x\perp y$. 又设 $M$ 是 $\mathscr{X}$ 的一个非空子集, $x\in\mathscr{X}$. 若对 $\forall y\in M$ 都有 $x\perp y$, 则称 $x$ 与 $M$ 正交, 记作 $x\perp M$. 此外我们还称集合
> $$\{x\in\mathscr{X}\mid x\perp M\}$$
> 为 $M$ 的正交补, 记作 $M^\perp$.

由定义可以直接推出

> [!proposition] 命题 1.6.18
> 设 $\mathscr{X}$ 是内积空间, $M$ 是 $\mathscr{X}$ 的一个非空子集.
> (1) 若 $x\perp y_i\,(i=1,2)$, 则
> $$x\perp\lambda_1y_1+\lambda_2y_2\quad(\forall\lambda_1,\lambda_2\in\mathbb{K}).$$
> (2) 若 $x=y+z$, 且 $y\perp z$, 则
> $$\|x\|^2=\|y\|^2+\|z\|^2.$$
> (3) 若 $x\perp y_n$ $(n\in\mathbb{N})$, 且 $y_n\to y$, 则 $x\perp y$.
> (4) 若 $x\perp M$, 则 $x\perp\operatorname{span}M$.
> (5) $M^\perp$ 是 $\mathscr{X}$ 的一个闭线性子空间.

现在我们把欧氏空间中的直角坐标系概念推广到一般的内积空间中去.

> [!definition] 定义 1.6.19
> 设 $\mathscr{X}$ 是一个内积空间, 集合 $S=\{e_\alpha\mid\alpha\in A\}$ 是 $\mathscr{X}$ 的一个子集. 称 $S$ 为正交集, 是指
> $$e_\alpha\perp e_\beta\quad(\text{当 }\alpha\neq\beta,\forall\alpha,\beta\in A).$$
> 如果还有 $\|e_\alpha\|=1$ ($\forall\alpha\in A$), 则称 $S$ 为正交规范集. 又如果在 $\mathscr{X}$ 中不存在非零元与 $S$ 正交, 即 $S^\perp=\{\theta\}$, 那么称 $S$ 为完备的.

一个内积空间是否一定有完备的正交集? 为了回答这个问题, 我们引用一个与无穷归纳法等价的命题 —— Zorn 引理.

> [!lemma] 引理 1.6.20
> (Zorn) 设 $\mathscr{X}$ 是一个半序集. 如果它的每一个全序子集有一个上界, 那么 $\mathscr{X}$ 有一个极大元.

> [!proposition] 命题 1.6.21
> 非 $\{\theta\}$ 内积空间 $\mathscr{X}$ 中必存在完备正交集.

> [!proof]- 证
> 因为 $\mathscr{X}\neq\{\theta\}$, 所以 $\mathscr{X}$ 中的正交集依包含关系构成一个半序集类, 并且每个全序子集类有一个上界, 就是这些集之并集. 依 Zorn 引理 (引理 1.6.20), 这个半序集类有极大元. 我们来证明: 这个极大元 (记作 $S$) 就是完备正交集. 因若不然, 则必 $\exists x_0\in S^\perp$, $x_0\neq\theta$, 令 $S_1=\{x_0\}\cup S$, 得到 $S_1$ 还是正交集, 并且 $S\subsetneq S_1$, 这便与 $S$ 的极大性相矛盾.

> [!definition] 定义 1.6.22
> 内积空间 $\mathscr{X}$ 中的正交规范集 $S=\{e_\alpha\mid\alpha\in A\}$, 称为一个基 (或封闭的) 是指 $\forall x\in\mathscr{X}$, 有下列表示:
> $$x=\sum_{\alpha\in A}(x,e_\alpha)e_\alpha,\tag{1.6.15}$$
> 其中 $\{(x,e_\alpha)\mid\alpha\in A\}$ 称为 $x$ 关于基 $\{e_\alpha\mid\alpha\in A\}$ 的 Fourier 系数.

> [!theorem] 定理 1.6.23
> (Bessel 不等式) 设 $\mathscr{X}$ 是一个内积空间. 如果 $S=\{e_\alpha\mid\alpha\in A\}$ 是 $\mathscr{X}$ 中的正交规范集, 那么 $\forall x\in\mathscr{X}$, 有
> $$\sum_{\alpha\in A}|(x,e_\alpha)|^2\le\|x\|^2.\tag{1.6.16}$$

> [!proof]- 证
> 首先对 $A$ 的任意有限子集, 不妨设它们是 $1,2,\dots,n$, 证明
> $$\sum_{i=1}^n|(x,e_i)|^2\le\|x\|^2.\tag{1.6.17}$$
> 因为
> $$0\le\|x-\sum_{i=1}^n(x,e_i)e_i\|^2$$
> $$=(x-\sum_{i=1}^n(x,e_i)e_i,x-\sum_{j=1}^n(x,e_j)e_j)$$
> $$=\|x\|^2-\sum_{i=1}^n|(x,e_i)|^2,$$
> 所以 (1.6.17) 式成立. 由此可见, 对 $\forall n\in\mathbb{N}$, 适合 $|(x,e_\alpha)|>1/n$ 的 $\alpha\in A$ 至多只有有穷多个, 从而 $(x,e_\alpha)\neq0$ 的 $\alpha\in A$ 至多有可数多个. 于是 (1.6.16) 式的左端实际上是至多可数项求和的级数.
> 再由 (1.6.17) 式我们有
> $$\sum_{\alpha\in A_f}|(x,e_\alpha)|^2\le\|x\|^2,$$
> 其中 $A_f$ 表示 $A$ 的任意有限子集. 由此立得 (1.6.16) 式.

> [!corollary] 推论 1.6.24
> 假设 $\mathscr{X}$ 是 Hilbert 空间, 且 $\{e_\alpha\mid\alpha\in A\}$ 是 $\mathscr{X}$ 中的正交规范集. 那么对 $\forall x\in\mathscr{X}$, 有
> $$\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\in\mathscr{X},$$
> 且
> $$\|x-\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\|^2=\|x\|^2-\sum_{\alpha\in A}|(x,e_\alpha)|^2.\tag{1.6.18}$$

> [!proof]- 证
> 不妨设使得 $(x,e_\alpha)\neq0$ 的可数多个 $\alpha\in A$ 是 $1,2,\dots,n,\dots$, 那么
> $$\sum_{\alpha\in A}(x,e_\alpha)e_\alpha=\sum_{n=1}^\infty(x,e_n)e_n,$$
> 并由 Bessel 不等式 (定理 1.6.23) 可知 $\sum_{n=1}^\infty|(x,e_n)|^2$ 收敛, 因此有
> $$\|\sum_{n=m}^{m+p}(x,e_n)e_n\|^2=\sum_{n=m}^{m+p}|(x,e_n)|^2\to0\quad(m\to\infty,\forall p\in\mathbb{N}).$$
> 于是, $\{x_m=\sum_{n=1}^m(x,e_n)e_n\}$ 是基本列, 从而
> $$\sum_{\alpha\in A}(x,e_\alpha)e_\alpha=\sum_{n=1}^\infty(x,e_n)e_n=\lim_{m\to\infty}x_m\in\mathscr{X}.$$
> 又因为 $x-\sum_{n=1}^\infty(x,e_n)e_n\perp\sum_{n=1}^\infty(x,e_n)e_n$, 所以
> $$\|x-\sum_{n=1}^\infty(x,e_n)e_n\|^2=\|x\|^2-\sum_{n=1}^\infty|(x,e_n)|^2.$$
> 这就是 (1.6.18) 式.

何时 Bessel 不等式 (1.6.16) 式取等号? 何时 $\sum_{\alpha\in A}(x,e_\alpha)e_\alpha$ 等于 $x$? 请看如下定理.

> [!theorem] 定理 1.6.25
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, 若 $S=\{e_\alpha\mid\alpha\in A\}$ 是 $\mathscr{X}$ 中的正交规范集, 则如下三条等价:
> (1) $S$ 是封闭的;
> (2) $S$ 是完备的;
> (3) Parseval 等式
> $$\|x\|^2=\sum_{\alpha\in A}|(x,e_\alpha)|^2\quad(\forall x\in\mathscr{X}).\tag{1.6.19}$$
> 成立.

> [!proof]- 证
> (1)$\Rightarrow$(2). 若 $S$ 不完备, 则 $\exists x\in\mathscr{X}\backslash\{\theta\}$, 使得
> $$(x,e_\alpha)=0\quad(\forall\alpha\in A).$$
> 但由封闭性有 $x=\sum_{\alpha\in A}(x,e_\alpha)e_\alpha=\theta$, 矛盾.
> (2)$\Rightarrow$(3). 若 $\exists x\in\mathscr{X}$ 使 Parseval 等式 (1.6.19) 不成立, 则由 (1.6.18) 式,
> $$\|x-\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\|^2=\|x\|^2-\sum_{\alpha\in A}|(x,e_\alpha)|^2>0.$$
> 于是 $y\triangleq x-\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\neq\theta$, 但 $y\in S^\perp$. 这与 $S$ 完备性矛盾.
> (3)$\Rightarrow$(1). 联合 Parseval 等式 (1.6.19) 与 (1.6.18) 式得到
> $$\|x-\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\|^2=\|x\|^2-\sum_{\alpha\in A}|(x,e_\alpha)|^2=0.$$
> 因此有
> $$x=\sum_{\alpha\in A}(x,e_\alpha)e_\alpha.$$

下面举一些正交规范基的例子.

> [!example] 例 1.6.26
> 在 $L^2[0,2\pi]$ 上,
> $$e_n(t)=\frac{1}{\sqrt{2\pi}}e^{int}\quad(n=0,\pm1,\pm2,\dots)$$
> 是一组正交规范基. $\forall u\in L^2[0,2\pi]$, 对应的 Fourier 系数是
> $$(u,e_n)=\frac{1}{\sqrt{2\pi}}\int_0^{2\pi}u(t)e^{-int}dt\quad(n=0,\pm1,\pm2,\dots).$$

> [!example] 例 1.6.27
> 在 $l^2$ 空间上,
> $$e_n=(0,0,\dots,0,1,0,\dots)\quad(n=1,2,3,\dots)$$
> 是一组正交规范基.

> [!example] 例 1.6.28
> 设 $D$ 是 $\mathbb{C}$ 中的单位开圆域, $H^2(D)$ 表示在 $D$ 内满足
> $$\iint_D|u(z)|^2dxdy<\infty\quad(z=x+iy)$$
> 的解析函数全体组成的空间. 规定内积为
> $$(u,v)=\iint_D u(z)\overline{v(z)}\,dxdy.$$
> 这时函数组
> $$\varphi_n(z)=\sqrt{\frac{n}{\pi}}z^{n-1}\quad(n=1,2,3,\dots)$$
> 是一组正交规范基. 设 $u(z)=\sum_{k=0}^\infty b_k z^k\in H^2(D)$, 它对应的 Fourier 系数是
> $$(u,\varphi_n)=\iint_D\sum_{k=0}^\infty b_k z^k\sqrt{\frac{n}{\pi}}\bar{z}^{n-1}dxdy$$
> $$=\sum_{k=0}^\infty b_k\sqrt{\frac{\pi}{k+1}}(\varphi_{k+1},\varphi_n)$$
> $$=b_{n-1}\sqrt{\frac{\pi}{n}}\quad(n=1,2,3,\dots).$$

### 6.3 正交化与 Hilbert 空间的同构

> [!theorem] 定理（正交化）
> 设 $\{x_n\}$ 是内积空间 $H$ 中的一列线性无关元素，则必存在 $H$ 中的一列元素 $\{e_n\}$ 适合
>
> (1) $\{e_n\}$ 两两正交；
>
> (2) $\{x_1,\dots,x_n\} = \{e_1,\dots,e_n\}$（$n=1,2,\dots$）.

> [!proof]- 证明
> 在 $\{x_n\}$ 中逐次取出，令 $e_1 = x_1/\|x_1\|$，
>
> 　　　　$y_2 = x_2 - (x_2,e_1)e_1$，　　　$e_2 = y_2/\|y_2\|$，
>
> 　　　　$\dots$
>
> 　　　　$y_n = x_n - \sum_{k=1}^{n-1}(x_n,e_k)e_k$，　$e_n = y_n/\|y_n\|$，
>
> $\dots$ 其中分母均不为零，这是因为 $y_n\neq 0$. 从上面便可看出 $y_n$ 与 $e_1,\dots,e_{n-1}$ 正交，而 $e_n$ 与 $e_1,\dots,e_{n-1}$ 只差一个常数因子，所以 $e_n$ 与 $e_1,\dots,e_{n-1}$ 正交，从而 $\{e_n\}$ 两两正交. 此外，由于 $\{y_n\}$ 可由 $\{x_1,\dots,x_n\}$ 线性表出，而 $x_n$ 可由 $\{y_1,\dots,y_n\}$ 线性表出，从而 $\{e_1,\dots,e_n\}$ 与 $\{x_1,\dots,x_n\}$ 等价（$n=1,2,\dots$）.

> [!definition] 定义1.6.29
> 设 $H_1,H_2$ 是两个内积空间，如果存在线性同构 $T\colon H_1\to H_2$，使得
>
> 　　　　$(Tx,Ty) = (x,y)$　　$(\forall x,y\in H_1)$，
>
> 则称内积空间 $H_1$ 与 $H_2$ 是同构的.

> [!theorem] 定理1.6.30
> 任一可分 Hilbert 空间 $H$ 必与一个 $\ell^2$ 空间或它的一个有限维子空间同构.

> [!proof]- 证明
> 因为 $H$ 可分，所以有 $H$ 中一列线性无关元素 $\{y_n\}$，使得 $\{y_n\}$ 在 $H$ 中稠密. 对 $\{y_n\}$ 应用正交化定理，得到 $H$ 中的一列两两正交元素 $\{e_n\}$，使得 $\{\sum_{k=1}^n a_k e_k \mid a_k\in\Phi\} = \{\sum_{k=1}^n a_k y_k \mid a_k\in\Phi\}$（$n=1,2,\dots$）. 由于 $\{y_n\}$ 在 $H$ 中稠密，所以 $\{\sum_{k=1}^n a_k e_k \mid a_k\in\Phi\}$ 在 $H$ 中稠密. 从而 $\{\sum_{k=1}^n a_k e_k \mid a_k\in\Phi\}$ 的闭包等于 $H$. 根据 Bessel 不等式及 Parseval 等式，
>
> 　　　　$\sum_{k=1}^\infty |(x,e_k)|^2 = \|x\|^2$　　$(\forall x\in H)$.
>
> 令 $E = \{\sum_{k=1}^n a_k e_k \mid a_k+ib_k\in\mathbb{Q},\; k=1,\dots,n,\; n=1,2,\dots\}$，则 $E$ 是 $H$ 中的一个可数稠密子集. 对 $x\in H$，定义 $Tx = \{(x,e_k)\}_{k=1}^\infty\in\ell^2$. 由 Parseval 等式可知 $T$ 是 $H$ 到 $\ell^2$ 的线性映射，且
>
> 　　　　$\|Tx\|^2 = \sum_{k=1}^\infty |(x,e_k)|^2 = \|x\|^2$　　$(\forall x\in H)$.
>
> 下面证明 $T$ 是到 $\ell^2$ 的满射. 任取 $\{a_k\}\in\ell^2$，令 $x_n = \sum_{k=1}^n a_k e_k$，则当 $m>n$ 时，
>
> 　　　　$\|x_m - x_n\|^2 = \|\sum_{k=n+1}^m a_k e_k\|^2 = \sum_{k=n+1}^m |a_k|^2 \to 0$　　$(m,n\to\infty)$.
>
> 所以 $\{x_n\}$ 是 $H$ 中的基本列，从而存在 $x\in H$ 使得 $x_n\to x$. 由连续性，
>
> 　　　　$(x,e_k) = \lim_{n\to\infty} (x_n,e_k) = a_k$　　$(k=1,2,\dots)$.
>
> 所以 $Tx = \{a_k\}$，即 $T$ 是满射. 最后，对 $x,y\in H$，
>
> 　　　　$(Tx,Ty) = \sum_{k=1}^\infty (x,e_k)\overline{(y,e_k)} = (x,y)$.
>
> 因此 $H$ 与 $\ell^2$ 同构. 如果 $H$ 的维数为 $n$，则上述证明中取 $\{e_1,\dots,e_n\}$ 为 $H$ 的一组标准正交基，同理可证 $H$ 与 $\mathbb{C}^n$ 同构.

### 6.4 再论最佳逼近问题

前面我们讨论过最佳逼近问题：给定 Hilbert 空间 $H$ 中的一个有限维子空间 $M$ 及 $x\in H$，求 $y\in M$ 使得 $\|x-y\|$ 为 $M$ 到 $x$ 的最短距离，即

　　　　$\|x-y\| = \inf_{z\in M} \|x-z\|$.

本节中将把这个问题推广到更一般的情形，即对给定的闭凸子集 $C$ 及 $x\in H$，求 $y\in C$ 使得 $\|x-y\|$ 为 $C$ 到 $x$ 的最短距离. 从几何上看，这就是求 $x$ 到闭凸集 $C$ 的"垂足". 在一般的 Banach 空间中，这个问题不一定有解，即使有解也不一定唯一. 但在 Hilbert 空间中，我们有如下结论：

> [!theorem] 定理1.6.31
> 设 $H$ 是 Hilbert 空间，$C$ 是 $H$ 中的闭凸子集，则对 $\forall y\in H$，存在唯一的 $x_0\in C$ 使得
>
> 　　　　$\|y-x_0\| = \inf_{x\in C} \|y-x\|$.　　　　　　(1.6.20)

> [!proof]- 证明
> (1) 存在性. 令 $m = \inf_{x\in C} \|y-x\|$. 由下确界的定义，存在 $\{x_n\}\subset C$ 使得 $\|y-x_n\|\to m$. 由于 $C$ 是凸集，对 $\forall m,n$ 有 $(x_m+x_n)/2\in C$，从而
>
> 　　　　$\|y - (x_m+x_n)/2\| \ge m$.
>
> 由平行四边形公式，
>
> 　　　　$\begin{aligned} \|x_m - x_n\|^2 &= \|(y-x_m)-(y-x_n)\|^2 \\
> &= 2(\|y-x_m\|^2 + \|y-x_n\|^2) - \|(y-x_m)+(y-x_n)\|^2 \\
> &= 2(\|y-x_m\|^2 + \|y-x_n\|^2) - 4\|y - (x_m+x_n)/2\|^2 \\
> &\le 2(\|y-x_m\|^2 + \|y-x_n\|^2) - 4m^2 \to 0 \quad (m,n\to\infty). \end{aligned}$
>
> 所以 $\{x_n\}$ 是基本列. 由 $H$ 的完备性，存在 $x_0\in H$ 使得 $x_n\to x_0$. 又 $C$ 是闭集，故 $x_0\in C$，且
>
> 　　　　$\|y-x_0\| = \lim_{n\to\infty} \|y-x_n\| = m$.
>
> (2) 唯一性. 设 $x_0, \hat{x}_0\in C$ 都满足 (1.6.20)，则由平行四边形公式，
>
> 　　　　$\begin{aligned} 0 \le \|x_0 - \hat{x}_0\|^2 &= \|(y-\hat{x}_0)-(y-x_0)\|^2 \\
> &= 2(\|y-\hat{x}_0\|^2 + \|y-x_0\|^2) - \|(y-\hat{x}_0)+(y-x_0)\|^2 \\
> &= 4m^2 - 4\|y - (x_0+\hat{x}_0)/2\|^2 \le 0. \end{aligned}$
>
> 所以 $x_0 = \hat{x}_0$（见图1.6.1）.

图1.6.1

> [!corollary] 推论1.6.32
> 若 $C$ 是 Hilbert 空间 $H$ 中的闭凸子集，则对 $\forall y\in H$，存在唯一的 $x_0\in C$ 使得
>
> 　　　　$\|y-x_0\| = \inf_{x\in C} \|y-x\|$,
>
> 并且 $x_0$ 是最佳逼近元 $\Leftrightarrow \operatorname{Re}(y-x_0, x_0-x) \ge 0$　　$(\forall x\in C)$.　　　(1.6.21)

> [!proof]- 证明
> "$\Rightarrow$". 由定理1.6.31，$x_0$ 是唯一的最佳逼近元. 对 $\forall x\in C$ 及 $\forall t\in[0,1]$，由于 $C$ 是凸集，$tx+(1-t)x_0\in C$，从而
>
> 　　　　$\begin{aligned} \|y-x_0\|^2 &\le \|y - (tx+(1-t)x_0)\|^2 = \|(y-x_0)-t(x-x_0)\|^2 \\
> &= \|y-x_0\|^2 - 2t\operatorname{Re}(y-x_0, x-x_0) + t^2\|x-x_0\|^2. \end{aligned}$
>
> 所以　　　　　　　　　　　　　　$2t\operatorname{Re}(y-x_0, x-x_0) \le t^2\|x-x_0\|^2$.
>
> 两边除以 $t$ 并令 $t\to 0^+$，得 $\operatorname{Re}(y-x_0, x_0-x) \ge 0$.
>
> "$\Leftarrow$". 若 (1.6.21) 成立，则对 $\forall x\in C$，
>
> 　　　　$\begin{aligned} \|y-x\|^2 - \|y-x_0\|^2 &= \|(y-x_0)+(x_0-x)\|^2 - \|y-x_0\|^2 \\
> &= 2\operatorname{Re}(y-x_0, x_0-x) + \|x_0-x\|^2 \ge 0. \end{aligned}$
>
> 所以 $x_0$ 是最佳逼近元.

特别地，当 $C$ 是 $H$ 中的闭线性子空间 $M$ 时，由推论1.6.32可得到如下结论：

> [!theorem] 定理1.6.34
> 设 $C$ 是 Hilbert 空间 $H$ 中的闭凸子集，$x\in H$，为了 $y_0$ 是 $x$ 在 $C$ 上的最佳逼近元，必须且仅须
>
> 　　　　$\operatorname{Re}(x-y_0, y_0-y) \ge 0$　　$(\forall y\in C)$.　　　　　　(1.6.22)

> [!proof]- 证明
> 考察函数
>
> 　　　　$\varphi_x(t) = \|x - (ty+(1-t)y_0)\|^2$，　$t\in[0,1]$，
>
> 显然 $y_0$ 是 $x$ 在 $C$ 上的最佳逼近元的充分必要条件是：$\varphi_x(t)$ 在 $t=0$ 处达到最小值，即
>
> 　　　　$\varphi_x(t) \ge \varphi_x(0)$　　$(\forall t\in[0,1])$.　　　　　　(1.6.23)
>
> 下面我们证明 (1.6.23)$\Leftrightarrow$(1.6.22). 因为
>
> 　　　　$\begin{aligned} \varphi_x(t) &= \|(x-y_0)+t(y_0-y)\|^2 \\
> &= \|x-y_0\|^2 + 2t\operatorname{Re}(x-y_0, y_0-y) + t^2\|y_0-y\|^2, \end{aligned}$
>
> 所以　　　　　　$\varphi_x'(t) = 2\operatorname{Re}(x-y_0, y_0-y) + 2t\|y_0-y\|^2$.　　　　　　(1.6.25)
>
> 充分性. 设 (1.6.22) 成立，即 $\operatorname{Re}(x-y_0, y_0-y) \ge 0$，则由 (1.6.25) 知 $\varphi_x'(t) \ge 0$（$\forall t\in[0,1]$），所以 $\varphi_x(t)$ 在 $[0,1]$ 上单调增加，从而 (1.6.23) 成立.
>
> 必要性. 设 (1.6.23) 成立，即 $\varphi_x(t)$ 在 $t=0$ 处达到最小值，则 $\varphi_x'(0) \ge 0$，由 (1.6.25) 即得 (1.6.22).
>
> 又由 (1.6.24)，
>
> 　　　　$\varphi_x(t) - \varphi_x(0) = \|y_0-y\|^2 t^2 + 2\operatorname{Re}(x-y_0, y_0-y)t$.　　　　(1.6.26)
>
> 如果 $y_0$ 是 $x$ 在 $C$ 上的最佳逼近元，则 $\varphi_x(t)-\varphi_x(0) \ge 0$（$\forall t\in[0,1]$）. 特别地，取 $t=1$，得 $\operatorname{Re}(x-y_0, y_0-y) \ge 0$（$\forall y\in C$），即 (1.6.22) 成立. 反之，若 (1.6.22) 成立，则由 (1.6.26) 知 $\varphi_x(t)-\varphi_x(0) \ge 0$（$\forall t\in[0,1]$），即 (1.6.23) 成立，从而 $y_0$ 是最佳逼近元.
>
> 对二次函数 $\varphi_x(t)-\varphi_x(0) = \|y_0-y\|^2 t(t-t_0)$，其中
>
> 　　　　$t_0 = -2\operatorname{Re}(x-y_0, y_0-y)/\|y_0-y\|^2$.
>
> 若 (1.6.22) 成立，则 $t_0 \le 0$，从而 $\varphi_x(t)-\varphi_x(0) \ge 0$（$\forall t\in[0,1]$）；若存在 $y\in C$ 使 $\operatorname{Re}(x-y_0, y_0-y) < 0$，则 $t_0 > 0$，从而当 $0 < t < \min\{1,t_0\}$ 时，$\varphi_x(t)-\varphi_x(0) < 0$，与 (1.6.23) 矛盾. 因此 (1.6.23)$\Leftrightarrow$(1.6.22).

> [!corollary] 推论1.6.35
> 设 $M$ 是 Hilbert 空间 $H$ 中的闭线性子空间，$x\in H$，为了 $y$ 是 $x$ 在 $M$ 上的最佳逼近元，必须且仅须它适合
>
> 　　　　$x-y\perp M$.　　　　　　　　　　　　　　　　　　　(1.6.28)

> [!proof]- 证明
> 由定理 1.6.34, 为了 $y$ 是 $x$ 在 $M$ 上的最佳逼近元, 必须且仅须
>
> 　　$\operatorname{Re}(x-y, y-z) \ge 0$　$(\forall z \in M)$.　　　　　　　　　　　　　　(1.6.29)
>
> 因为 $M$ 是线性流形, 所以 $\forall z \in M$ 可表示为
>
> 　　$z = y + w$　$(w \in M-\{y\})$.　　　　　　　　　　　　　　　　(1.6.30)
>
> 注意到 $M-\{y\}$ 是线性子空间, 且当 $z$ 跑遍 $M$ 时, $w$ 跑遍 $M-\{y\}$. 将 (1.6.30) 式代入 (1.6.29) 式得
>
> 　　$\operatorname{Re}(x-y, w) \le 0$　$(\forall w \in M-\{y\})$.　　　　　　　　　　　　(1.6.31)
>
> 在 (1.6.31) 式中, 用 $-w$ 代替 $w$, 便推出
>
> 　　$\operatorname{Re}(x-y, w) = 0$　$(\forall w \in M-\{y\})$.　　　　　　　　　　　　(1.6.32)
>
> 进一步在 (1.6.32) 式中用 $iw$ 代替 $w$, 便推出
>
> 　　$(x-y, w) = 0$　$(\forall w \in M-\{y\})$.
>
> 这就是 (1.6.28) 式.　■

> [!example] 特例 1.6.36
> 当 $M$ 是闭线性子空间时, $M-\{y\} = M$. 因此, 为了 $y$ 是 $x$ 在 $M$ 上的最佳逼近元, 必须且仅须 $x-y \perp M$.

> [!corollary] 推论 1.6.37（正交分解）
> 设 $M$ 是 Hilbert 空间 $\mathscr{X}$ 上的一个闭线性子空间. 那么 $\forall x \in \mathscr{X}$, 存在下列唯一的正交分解:
>
> 　　$x = y + z$　$(y \in M, z \in M^\perp)$.　　　　　　　　　　　　　(1.6.33)

> [!proof]- 证明
> 取 $y$ 为 $x$ 在 $M$ 上的最佳逼近元, 而 $z = x-y$, 即为满足 (1.6.33) 式的分解. 又若还存在另外一种分解:
>
> 　　$x = y' + z'$　$(y' \in M, z' \in M^\perp)$,
>
> 则
>
> 　　$y - y' = z - z'(\in M \cap M^\perp) = \theta$,
>
> 即得分解的唯一性.　■

> [!remark] 注
> 由 $x$ 的正交分解产生的 $y$ 称为 $x$ 在 $M$ 上的正交投影（见图 1.6.2）.

图 1.6.2

### 6.5　应用: 最小二乘法

(1) 实际观测问题. 许多实际观测数据的处理问题如下: 已知量 $y$ 与量 $x_1, x_2, \cdots, x_n$ 之间呈线性关系:

　　$y = \lambda_1 x_1 + \lambda_2 x_2 + \cdots + \lambda_n x_n$.

但事先这些线性系数 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是不知道的. 为了确定它们观测数据 $m$ 次, 即测得 $m$ 组数, 如表 1.6.3 所示. 如果观测绝对精确, 原则上只要测量 $m = n$ 次. 通过线性方程组就可以解出 $\lambda_1, \lambda_2, \cdots, \lambda_n$. 事实上, 任何观测都不可避免带有误差. 这样便多观测些次数, 即 $m > n$. 于是方程的个数大于未知数的个数. 今按下述意义确定系数: 求 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 使得

　　$\displaystyle \min_{\alpha_1,\alpha_2,\cdots,\alpha_n} \sum_{j=1}^{m} \bigl|y^{(j)} - \sum_{i=1}^{n} \alpha_i x_i^{(j)}\bigr|^2 = \sum_{j=1}^{m} \bigl|y^{(j)} - \sum_{i=1}^{n} \lambda_i x_i^{(j)}\bigr|^2$.

这个问题可以看成是在空间 $\mathbb{R}^m$ 中, 求由表 1.6.3 中的后 $n$ 列向量张成的子空间上的元素, 对于给定的表 1.6.3 中的第一列向量的最佳逼近.


表 1.6.3

$y^{(1)}$,　$x_1^{(1)}$,　$x_2^{(1)}$,　$\cdots$,　$x_n^{(1)}$
$y^{(2)}$,　$x_1^{(2)}$,　$x_2^{(2)}$,　$\cdots$,　$x_n^{(2)}$
$y^{(3)}$,　$x_1^{(3)}$,　$x_2^{(3)}$,　$\cdots$,　$x_n^{(3)}$
　$\vdots$　　　　$\vdots$　　　　$\vdots$　　　　　　$\vdots$
$y^{(m)}$,　$x_1^{(m)}$,　$x_2^{(m)}$,　$\cdots$,　$x_n^{(m)}$

(2) 平方平均逼近. 在函数逼近论中, 对于给定的一般函数 $f \in L^2[a,b]$, 要求用给定的 $n$ 个 $L^2[a,b]$ 函数 $\varphi_1, \varphi_2, \cdots, \varphi_n$ 的线性组合按平方平均意义求最佳逼近, 即求系数 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 使得

　　$\displaystyle \min_{\alpha_1,\alpha_2,\cdots,\alpha_n} \int_a^b \bigl|f(x) - \sum_{i=1}^{n} \alpha_i \varphi_i(x)\bigr|^2 dx = \int_a^b \bigl|f(x) - \sum_{i=1}^{n} \lambda_i \varphi_i(x)\bigr|^2 dx$.

(3) 最佳估计问题. 设 $(\Omega, \mathscr{B}, P)$ 是一个概率空间, 即一个测度空间, 满足 $P(\Omega) = 1$. 所谓一个随机变量 $X$ 就是 $(\Omega, \mathscr{B}, P)$ 上的一个可测函数. 在随机过程中, 常对随机变量 $X(\omega)$ 用另一组随机变量 $X_1(\omega), X_2(\omega), \cdots, X_n(\omega)$ 的线性组合来估计. 设 $X, X_1, X_2, \cdots, X_n \in L^2(\Omega, \mathscr{B}, P)$, 求系数 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 使得

　　$\displaystyle \min_{(\alpha_1,\alpha_2,\cdots,\alpha_n)\in\mathbb{R}^n} \int_\Omega \bigl|X(\omega) - \sum_{i=1}^{n} \alpha_i X_i(\omega)\bigr|^2 dP(\omega) = \int_\Omega \bigl|X(\omega) - \sum_{i=1}^{n} \lambda_i X_i(\omega)\bigr|^2 dP(\omega)$.

上面三个问题本质上是一个: 在 Hilbert 空间 $\mathscr{X}$ 上给定 $x$ 及 $x_1, x_2, \cdots, x_n$, 要求出 $(\lambda_1, \lambda_2, \cdots, \lambda_n) \in \mathbb{R}^n$, 使得

　　$\displaystyle \min_{(\alpha_1,\alpha_2,\cdots,\alpha_n)\in\mathbb{R}^n} \bigl\|x - \sum_{i=1}^{n} \alpha_i x_i\bigr\| = \bigl\|x - \sum_{i=1}^{n} \lambda_i x_i\bigr\|$.


从几何上看, 就是求 $x$ 在由 $x_1, x_2, \cdots, x_n$ 张成的子空间 $M$ 上的正交投影. 不妨设 $\{x_1, x_2, \cdots, x_n\}$ 是线性无关的. 根据特例 1.6.36, 为了 $x_0 = \sum_{i=1}^{n} \lambda_i x_i$ 是所求的解, 必须且仅须

　　$(x - x_0, x_j) = 0$　$(j = 1, 2, \cdots, n)$,

即

　　$\sum_{i=1}^{n} \lambda_i (x_i, x_j) = (x, x_j)$　$(j = 1, 2, \cdots, n)$.　　　(1.6.34)

因为解 $\{\lambda_i\}_1^n$ 是存在唯一的, 所以线性方程组 (1.6.34) 的系数行列式不等于 $0$. 由此求得

$$
\lambda_i = \frac{
\begin{vmatrix}
(x_1,x_1) & \cdots & (x,x_1) & \cdots & (x_n,x_1) \\
(x_1,x_2) & \cdots & (x,x_2) & \cdots & (x_n,x_2) \\
\vdots & & \vdots & & \vdots \\
(x_1,x_n) & \cdots & (x,x_n) & \cdots & (x_n,x_n)
\end{vmatrix}
}{
\begin{vmatrix}
(x_1,x_1) & \cdots & (x_i,x_1) & \cdots & (x_n,x_1) \\
(x_1,x_2) & \cdots & (x_i,x_2) & \cdots & (x_n,x_2) \\
\vdots & & \vdots & & \vdots \\
(x_1,x_n) & \cdots & (x_i,x_n) & \cdots & (x_n,x_n)
\end{vmatrix}
}
\qquad (i = 1, 2, \cdots, n).
$$


## 习　题

> [!exercise] 1.6.1（极化恒等式）
> 设 $a$ 是复线性空间 $\mathscr{X}$ 上的共轭双线性函数, $q$ 是由 $a$ 诱导的二次型, 求证: 对 $\forall x, y \in \mathscr{X}$ 有
>
> 　　$a(x,y) = \frac{1}{4}[q(x+y) - q(x-y) + iq(x+iy) - iq(x-iy)]$.

> [!exercise] 1.6.2
> 求证: 在 $C[a,b]$ 中不可能引进一种内积 $(\cdot,\cdot)$, 使其满足
>
> 　　$(f,f)^{1/2} = \max_{a\le x\le b} |f(x)|$　$(\forall f \in C[a,b])$.

> [!exercise] 1.6.3
> 在 $L^2[0,T]$ 中, 求证: 函数
>
> 　　$x \mapsto \bigl|\int_0^T e^{-(T-\tau)} x(\tau) d\tau\bigr|$　$(\forall x \in L^2[0,T])$
>
> 在单位球面上达到最大值, 并求出此最大值和达到最大值的元素 $x$.
>
> 　　提示　利用 Cauchy-Schwarz 不等式 (命题 1.6.8) 及其取等号的条件.

> [!exercise] 1.6.4
> 设 $M, N$ 是内积空间中的两个子集, 求证:
>
> 　　$M \subset N \implies N^\perp \subset M^\perp$.

> [!exercise] 1.6.5
> 设 $M$ 是 Hilbert 空间 $\mathscr{X}$ 的子集, 求证:
>
> 　　$(M^\perp)^\perp = \overline{\operatorname{span} M}$.

> [!exercise] 1.6.6
> 在 $L^2[-1,1]$ 中, 问偶函数集的正交补是什么? 证明你的结论.

> [!exercise] 1.6.7
> 在 $L^2[a,b]$ 中, 考察函数集 $S = \{e^{2\pi i n x}\}$.
>
> (1) 若 $|b-a| \le 1$, 求证: $S^\perp = \{\theta\}$;
>
> (2) 若 $|b-a| > 1$, 求证: $S^\perp \neq \{\theta\}$.

> [!exercise] 1.6.8
> 设 $\mathscr{X}$ 表示闭单位圆上的解析函数全体, 内积定义为
>
> 　　$(f,g) = \frac{1}{i} \oint_{|z|=1} f(z)\overline{g(z)}/z\,dz$　$(\forall f, g \in \mathscr{X})$.
>
> 求证: $\{z^n/\sqrt{2\pi}\}$ 是一组正交规范集.

> [!exercise] 1.6.9
> 设 $\{e_n\}_{n=1}^\infty, \{f_n\}_{n=1}^\infty$ 是 Hilbert 空间 $\mathscr{X}$ 中的两个正交规范集, 满足条件
>
> 　　$\sum_{n=1}^\infty \|e_n - f_n\|^2 < 1$.
>
> 求证: $\{e_n\}$ 和 $\{f_n\}$ 两者中一个完备蕴含另一个完备.

> [!exercise] 1.6.10
> 设 $\mathscr{X}$ 是 Hilbert 空间, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的闭线性子空间, $\{e_n\}, \{f_n\}$ 分别是 $\mathscr{X}_0$ 和 $\mathscr{X}_0^\perp$ 的正交规范基. 求证: $\{e_n\}\cup\{f_n\}$ 是 $\mathscr{X}$ 的正交规范基.

> [!exercise] 1.6.11
> 设 $H^2(D)$ 是按例 1.6.28 定义的内积空间.
>
> (1) 如果 $u(z)$ 的 Taylor 展开式是 $u(z)=\sum_{k=0}^\infty b_k z^k$, 求证:
>
> 　　$\sum_{k=0}^\infty |b_k|^2/(1+k) < \infty$.
>
> (2) 设 $u(z), v(z)\in H^2(D)$, 并且
>
> 　　$u(z)=\sum_{k=0}^\infty a_k z^k$,  $v(z)=\sum_{k=0}^\infty b_k z^k$,
>
> 　　求证:
>
> 　　$(u,v)=\pi \sum_{k=0}^\infty a_k \overline{b_k}/(k+1)$.
>
> (3) 设 $u(z)\in H^2(D)$, 求证:
>
> 　　$|u(z)|\le\|u\|/(\sqrt{\pi}(1-|z|))$  $(\forall |z|<1)$.
>
> (4) 验证 $H^2(D)$ 是 Hilbert 空间.

> [!exercise] 1.6.12
> 设 $\mathscr{X}$ 是内积空间, $\{e_n\}$ 是 $\mathscr{X}$ 中的正交规范集, 求证:
>
> 　　$\bigl|\sum_{n=1}^\infty (x,e_n)\overline{(y,e_n)}\bigr| \le \|x\|\cdot\|y\|$  $(\forall x,y\in\mathscr{X})$.

> [!exercise] 1.6.13
> 设 $\mathscr{X}$ 是一个内积空间, $\forall x_0\in\mathscr{X}, \forall r>0$, 令
>
> 　　$C=\{x\in\mathscr{X} \mid \|x-x_0\|\le r\}$.
>
> (1) 求证: $C$ 是 $\mathscr{X}$ 中的闭凸集.
>
> (2) $\forall x\in\mathscr{X}$, 令
>
> 　　$y = \begin{cases} x_0+r(x-x_0)/\|x-x_0\|, & \text{当 } x\notin C,\\ x, & \text{当 } x\in C. \end{cases}$
>
> 　　求证: $y$ 是 $x$ 在 $C$ 中的最佳逼近元.

> [!exercise] 1.6.14
> 求 $(a_0,a_1,a_2)\in\mathbb{R}^3$, 使得 $\int_0^1|e^t-a_0-a_1t-a_2t^2|^2dt$ 取最小值.

> [!exercise] 1.6.15
> 设 $f(x)\in C^2[a,b]$, 满足边界条件
>
> 　　$f(a)=f(b)=0$,  $f'(a)=1$,  $f'(b)=0$.
>
> 求证:
>
> 　　$\int_a^b |f''(x)|^2dx \ge 4/(b-a)$.

> [!exercise] 1.6.16（变分不等式）
> 设 $\mathscr{X}$ 是一个 Hilbert 空间, $a(x,y)$ 是 $\mathscr{X}$ 上的共轭对称的双线性函数, $\exists M>0, \delta>0$, 使得
>
> 　　$\delta\|x\|^2 \le a(x,x) \le M\|x\|^2$  $(\forall x\in\mathscr{X})$.
>
> 又设 $u_0\in\mathscr{X}$, $C$ 是 $\mathscr{X}$ 上的一个闭凸子集. 求证: 函数
>
> 　　$x \mapsto a(x,x) - \operatorname{Re}(u_0,x)$
>
> 在 $C$ 上达到最小值, 并且达到最小值的点 $x_0$ 唯一, 且满足
>
> 　　$\operatorname{Re}[2a(x_0,x-x_0)-(u_0,x-x_0)] \ge 0$  $(\forall x\in C)$.
