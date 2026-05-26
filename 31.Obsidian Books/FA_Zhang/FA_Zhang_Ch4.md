# 第四章　广义函数与 Sobolev 空间

在 20 世纪 50 年代，"广义函数"还是一个有争议的概念，然而，今天它已几乎成为任何一个纯粹数学家与应用数学家都具备的常识了。

函数概念是在高等数学一开始就引进的："如果对于量 $x$ 的属于 $\mu$ 的一个（数）值，都对应着量 $y$ 的一个唯一确定的值，我们就说量 $y$ 是量 $x$ 确定在集合 $\mu$ 上的一个函数。"然而，这样一个基本的概念，在近代科学技术的发展中逐渐不够用了。我们下面用几个例子来说明：

> [!example] 例 4.0.1（脉冲）
> 20 世纪初，工程师 Heaviside 在解电路方程时，提出了一种运算方法，称之为算子演算（又称运算微积）。这套算法要求对如下的函数（称为 Heaviside 函数）
>
> $$\qquad Y(x)=\begin{cases}1,&x\ge 0,\\0,&x<0\end{cases}$$
>
> 求微商，并把这微商记作 $\delta(x)$。但是我们都知道函数 $Y(x)$ 并不可微（事实上它在 $x=0$ 点不连续），因此 $\delta(x)$ 不可能是函数。它除了作为一个记号进行形式演算外，在数学上本来是没有意义的。可有趣的是：这个 $\delta(x)$ 在实际中却是有意义的。它代表一种理想化了的"瞬时"单位脉冲。图 4.0.1 表示实际单位脉冲的电流 $i$ 和时间 $t$ 的关系图，在 $t=0$ 时接通电源，在 $t=t_0$ 时截断电源，总电量：
>
> $$\qquad\int_{-\infty}^{\infty}i(t)\,\mathrm{d}t=1.$$
>
> 图 4.0.2 表示理想化了的"瞬时"单位脉冲。所谓"单位"是指：总电量为 $1$；所谓瞬时，是指 $t_0\to0$。这样看来，代表瞬时单位脉冲的电流的符号 $\delta(t)$，实际上代表一串实际单位脉冲电流函数 $i_n(t)$ 在某种意义下的极限。$\delta(t)$ 本身并不是一个函数。然而在 Heaviside 的算法中，却还要求对 $\delta(t)$ 再求微商或做其他运算。于是问题便产生了：这一切在数学上究竟应当怎样解释呢？特别是它的一些运算法则推导的依据又是什么呢？
>
> 图 4.0.1
> 图 4.0.2

> [!example] 例 4.0.2（Dirac 符号）
> 在微观世界中，把可观测到的物质的状态用波函数来描述，最简单的波函数具有形式 $e^{i\lambda x}\,(-\infty<x<\infty)$，$\lambda$ 是实数。通常要考虑如下形式的积分：
>
> $$\qquad\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i\lambda x}\,\mathrm{d}x,$$
>
> 并把它按下列方式来理解：
>
> $$\qquad\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i\lambda x}\,\mathrm{d}x=\lim_{n\to\infty}\frac{1}{2\pi}\int_{-n}^{n}e^{i\lambda x}\,\mathrm{d}x=\lim_{n\to\infty}\frac{1}{\pi}\cdot\frac{\sin n\lambda}{\lambda}.$$
>
> 我们立刻就会发现：即便如此，极限还是不存在的。但是物理学家们却认为这个极限就是前面所说的瞬时单位脉冲"函数"，记作 $\delta(\lambda)$，并称为 Dirac 符号。在量子力学中，进一步发展了不少关于 $\delta(x)$ 的运算法则，并广泛地使用着。

> [!example] 例 4.0.3（广义微商）
> 在数学本身的发展中，也时常要求冲破古典分析对一些基本运算（如求微商和 Fourier 变换等）使用范围所加的限制。远在 20 世纪 30 年代，苏联数学家 Sobolev 为了确定偏微分方程解的存在性和唯一性，发现如果仅在古典意义下来理解微商及其所对应的方程，那么一方面会造成很多不必要的限制，另一方面还排斥了很多近代数学工具使用的可能性。因而他推广了微商，引进了广义微商的概念，提出了广义函数的思想。Sobolev 广义微商的引入，在偏微分方程发展中揭开了新的一页，为泛函分析方法应用到微分方程理论建立了桥梁。

以上几方面都使我们看到：虽然函数概念十分广泛，但是，不论从近代科学技术来看，还是从数学本身要求来看，都已经不适应很多需要了。这样一来，自然就有了扩充函数概念的要求。我们也已经看到：问题不仅在于要引进一些理想的函数，更重要的是要使这些"理想的函数"能够比较自由地进行分析运算，特别是要使"理想的函数"全部在新的意义下可微，微商后还是某个"理想的函数"等。

首先我们引进一些记号。记多重指标 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$，其中 $\alpha_1,\alpha_2,\cdots,\alpha_n\ge 0$ 是整数，

$$\qquad|\alpha|=\sum_{i=1}^{n}\alpha_i,\qquad\alpha!=\alpha_1!\alpha_2!\cdots\alpha_n!,$$
$$\qquad x^{\alpha}=x_1^{\alpha_1}x_2^{\alpha_2}\cdots x_n^{\alpha_n}\qquad(\forall x=(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n),$$
$$\qquad\partial^{\alpha}=\partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\cdots\partial_{x_n}^{\alpha_n},$$

而且如果 $\beta\le\alpha$（系指 $\beta_j\le\alpha_j$，$j=1,2,\cdots,n$），则

$$\qquad\binom{\alpha}{\beta}=\frac{\alpha!}{\beta!(\alpha-\beta)!}=\binom{\alpha_1}{\beta_1}\binom{\alpha_2}{\beta_2}\cdots\binom{\alpha_n}{\beta_n}.$$

## §1　广义函数的概念

广义函数是定义在一类"性质很好"的函数空间上的连续线性泛函。为此，先引进这类"性质很好"的函数。

### 1.1　基本空间 D(Ω)

设 $\Omega\subset\mathbb{R}^n$ 是一个开集，$u\in C(\bar{\Omega})$，称集合

$$
F=\{x\in\Omega\mid u(x)\neq 0\}
$$

的闭包（关于 $\Omega$）为 $u$ 的关于 $\Omega$ 的支集，记作 $\operatorname{supp}(u)$。换句话说，连续函数 $u$ 的支集是在此集外 $u$ 恒为 $0$ 的相对于 $\Omega$ 的最小闭集。

对于整数 $k\ge 0$（可以是 $\infty$），$C_0^k(\Omega)$ 表示支集在 $\Omega$ 内紧的全体 $C^k(\bar{\Omega})$ 函数所组成的集合，于是

$$
C_0^\infty(\Omega)\subset\cdots\subset C_0^{k+1}(\Omega)\subset C_0^k(\Omega)\subset\cdots\subset C_0^0(\Omega).
$$

下例表明 $C_0^\infty(\Omega)$ 是非空的。

> [!example] 例 4.1.1
> 设
> 
> $$
> j(x):=\begin{cases}
> C_n e^{-1/(1-|x|^2)}, &|x|<1,\\[4pt]
> 0, &|x|\ge 1,
> \end{cases}\qquad(4.1.1)
> $$
> 
> 其中
> 
> $$
> C_n:=\left(\int_{|x|\le 1}e^{-1/(1-|x|^2)}\,dx\right)^{-1}
> $$
> 
> 是一个仅依赖于维数的常数，那么 $j(x)\in C_0^\infty(\mathbb{R}^n)$，并且
> 
> $$
> \int_{\mathbb{R}^n}j(x)\,dx=1.
> $$
> 
> 从它出发，可以得到许多 $C_0^\infty(\mathbb{R}^n)$ 的函数，$\forall\delta>0$，令
> 
> $$
> j_\delta(x):=\frac{1}{\delta^n}j\!\left(\frac{x}{\delta}\right),\qquad(4.1.2)
> $$
> 
> 我们有如下命题。

> [!proposition] 命题 4.1.2
> 设 $u(x)$ 是一个可积函数，并在 $\Omega$ 的一个紧子集 $K$ 外恒为 $0$，则当 $\delta>0$ 足够小时，函数
> 
> $$
> u_\delta(x):=\int_\Omega u(y)\,j_\delta(x-y)\,dy\qquad(4.1.3)
> $$
> 
> 是 $C_0^\infty(\Omega)$ 的函数。

> [!proof]- 证
> 记 $K_\delta:=\{x\in\mathbb{R}^n\mid\operatorname{dist}(x,K)\le\delta\}$，便有当 $\delta$ 足够小时，$K_\delta\subset\Omega$ 且 $u_\delta(x)=0\;(x\notin K_\delta)$（见图 4.1.1），而
> 
> $$
> \partial^\alpha u_\delta(x)=\int_\Omega u(y)\,\partial^\alpha j_\delta(x-y)\,dy\quad(\forall x\in K_\delta).\qquad(4.1.4)
> $$
> 
> 图 4.1.1
> 
> 这是因为，例如说对指标 $\alpha_0=(1,0,\cdots,0)$，
> 
> $$
> \begin{aligned}
> \partial^{\alpha_0}u_\delta(x)&=\lim_{h\to0}\int_\Omega\frac{1}{h}\bigl[j_\delta(x+he_1-y)-j_\delta(x-y)\bigr]u(y)\,dy\\
> &=\lim_{h\to0}\int_\Omega\partial^{\alpha_0}j_\delta(x+\theta he_1-y)\,u(y)\,dy,
> \end{aligned}
> $$
> 
> 其中 $\theta=\theta(x,y)\in(0,1)$，$e_1=(1,0,\cdots,0)\in\mathbb{R}^n$，利用 $j_\delta$ 的连续可微性，$\exists$ 常数 $M_{\alpha_0}$，使得
> 
> $$
> |\partial^{\alpha_0}j_\delta(z)|\le M_{\alpha_0}\quad(\forall z\in\mathbb{R}^n).
> $$
> 
> 再应用 Lebesgue 控制收敛定理，即得
> 
> $$
> \begin{aligned}
> \partial^{\alpha_0}u_\delta(x)&=\int_\Omega\lim_{h\to0}\partial^{\alpha_0}j_\delta(x+\theta he_1-y)\,u(y)\,dy\\
> &=\int_\Omega\partial^{\alpha_0}j_\delta(x-y)\,u(y)\,dy.
> \end{aligned}
> $$
> 
> 逐次应用上述步骤，得任意指标 $\alpha$ 的等式 (4.1.4). ■

> [!theorem] 定理 4.1.3
> 若 $u\in C_0^k(\Omega)$，则
> $$
> \|u_\delta(x)-u(x)\|_{C^k(\bar{\Omega})}\to0\quad(\delta\to0).
> $$

> [!proof]- 证
> 把 $u(x)$ 定义延拓到全空间 $\mathbb{R}^n$，在 $\Omega$ 外补充为 $0$，对 $\forall\alpha=(\alpha_1,\alpha_2,\ldots,\alpha_n)$，当 $|\alpha|\le k$ 时，我们有
> 
> $$
> \begin{aligned}
> \partial^\alpha u_\delta(x)&=\int_{\mathbb{R}^n}u(y)\,\partial_x^\alpha j_\delta(x-y)\,dy\\
> &=(-1)^{|\alpha|}\int_{\mathbb{R}^n}u(y)\,\partial_y^\alpha j_\delta(x-y)\,dy\\
> &=\int_{\mathbb{R}^n}\partial_y^\alpha u(y)\,j_\delta(x-y)\,dy\\
> &=\int_{\mathbb{R}^n}\partial_y^\alpha u(x-\delta y)\,j(y)\,dy,
> \end{aligned}
> $$
> 
> 从而
> 
> $$
> |\partial^\alpha u_\delta(x)-\partial^\alpha u(x)|\le\int_{\mathbb{R}^n}|\partial^\alpha u(x-\delta y)-\partial^\alpha u(x)|\,j(y)\,dy.
> $$
> 
> 注意到 $j(y)=0\;(|y|\ge 1)$，而 $\partial^\alpha u(z)$ 在
> 
> $$
> (\operatorname{supp}(u))_1:=\{x\in\mathbb{R}^n\mid\operatorname{dist}(x,\operatorname{supp}(u))\le 1\}
> $$
> 
> 上一致连续。$\forall\varepsilon>0$，$\exists\,0<\delta_0<1/2$，当 $0<\delta<\delta_0$ 时，
> 
> $$
> |\partial^\alpha u(x-\delta y)-\partial^\alpha u(x)|<\varepsilon\quad(\forall x\in\mathbb{R}^n,\;|y|\le 1),
> $$
> 
> 所以有
> 
> $$
> \sup_{x\in\mathbb{R}^n}|\partial^\alpha u_\delta(x)-\partial^\alpha u(x)|<\varepsilon\int_{\mathbb{R}^n}j(y)\,dy=\varepsilon.
> $$
> 
> ■

> [!corollary] 推论 4.1.4
> 若 $\mu$ 是 $\Omega$ 上的一个完全可加测度，由
> $$
> \int_\Omega\varphi\,d\mu=0\quad(\forall\varphi\in C_0^\infty(\Omega)),
> $$
> 便能推出
> $$
> \int_\Omega\varphi\,d\mu=0\quad(\forall\varphi\in C_0^0(\Omega)).
> $$
> 证明从略，留作习题。

> [!definition] 定义 4.1.5
> 在集合 $C_0^\infty(\Omega)$ 上定义收敛性如下：我们说序列 $\{\varphi_j\}$ 收敛于 $\varphi_0$，如果
> 
> (1) 存在一个相对于 $\Omega$ 的紧集 $K\subset\Omega$，使得
> $$
> \operatorname{supp}(\varphi_j)\subset K\quad(j=0,1,2,\ldots);
> $$
> 
> (2) 对于任意指标 $\alpha=(\alpha_1,\alpha_2,\ldots,\alpha_n)$ 都有
> $$
> \max_{x\in K}|\partial^\alpha\varphi_j(x)-\partial^\alpha\varphi_0(x)|\to0\quad(j\to\infty).
> $$
> 
> 带上述收敛性的线性空间 $C_0^\infty(\Omega)$ 称为基本空间 $\mathscr{D}(\Omega)$。

> [!remark] 注
> 我们只在 $\mathscr{D}(\Omega)$ 上引进了收敛性，并没给定拓扑，而上述收敛性，并不能由任何范数，甚至准范数导出。$\mathscr{D}(\Omega)$ 不是 $B^*$ 空间。

> [!proposition] 命题 4.1.6
> $\mathscr{D}(\Omega)$ 是序列完备的，即若 $\{\varphi_j\}_{j=0}^\infty$ 是一个基本列，它适合
> 
> (1) $\exists$ 公共紧支集 $K$，使 $\operatorname{supp}(\varphi_j)\subset K$，
> 
> (2) $\forall\varepsilon>0$，$\forall\alpha$，$\exists N=N(\varepsilon,\alpha)\in\mathbb{N}$，使得
> $$
> \max_{x\in K}|\partial^\alpha\varphi_n(x)-\partial^\alpha\varphi_m(x)|<\varepsilon\quad(\text{当 }m,n>N),
> $$
> 
> 则必有 $\varphi_0\in\mathscr{D}(\Omega)$，使得 $\varphi_j\to\varphi_0\;(j\to\infty)$.
> 
> 证明从略，留作习题。

### 1.2 广义函数的定义和基本性质

> [!definition] 定义 4.1.7
> $\mathscr{D}(\Omega)$ 上的一切连续线性泛函都称为广义函数，即广义函数是这样的泛函 $f:\mathscr{D}(\Omega)\to\mathbb{R}$，满足
> 
> (1) 线性：
> $$
> \langle f,\lambda_1\varphi_1+\lambda_2\varphi_2\rangle=\lambda_1\langle f,\varphi_1\rangle+\lambda_2\langle f,\varphi_2\rangle\quad(\forall\varphi_1,\varphi_2\in\mathscr{D}(\Omega),\;\forall\lambda_1,\lambda_2\in\mathbb{R});
> $$
> 
> (2) 对于任意的 $\{\varphi_j\}\subset\mathscr{D}(\Omega)$，只要 $\varphi_j\to\varphi_0\;(\mathscr{D}(\Omega))$，都有
> $$
> \langle f,\varphi_j\rangle\to\langle f,\varphi_0\rangle\quad(j\to\infty).
> $$

一切广义函数所组成的集合记作 $\mathscr{D}'(\Omega)$。

> [!example] 例 4.1.8
> $\delta$ 函数。设 $\theta\in\Omega$，定义
> $$
> \langle\delta,\varphi\rangle=\varphi(\theta)\quad(\forall\varphi\in\mathscr{D}(\Omega)).
> $$
> 显然 $\delta$ 是线性的，而且当 $\varphi_j\to\varphi_0\;(\mathscr{D})$ 时，我们有
> $$
> |\varphi_j(\theta)-\varphi_0(\theta)|\to0\quad(j\to\infty).
> $$
> 从而
> $$
> \langle\delta,\varphi_j\rangle=\varphi_j(\theta)\to\varphi_0(\theta)=\langle\delta,\varphi_0\rangle\quad(j\to\infty),
> $$
> 即 $\delta$ 在 $\mathscr{D}(\Omega)$ 上是连续的，所以是一个广义函数。

> [!example] 例 4.1.9
> 对任意多重指标 $\alpha=(\alpha_1,\alpha_2,\ldots,\alpha_n)$，定义
> $$
> \langle\delta^{(\alpha)},\varphi\rangle=(-1)^{|\alpha|}(\partial^\alpha\varphi)(\theta)\quad(\forall\varphi\in\mathscr{D}(\Omega)),
> $$
> 则 $\delta^{(\alpha)}$ 也是一个广义函数。

> [!example] 例 4.1.10
> 设 $f(x)$ 是 $\Omega$ 上的一个局部可积函数，即对于任意相对于 $\Omega$ 的紧集 $K$，积分
> $$
> \int_K|f(x)|\,dx<\infty,
> $$
> 记作 $f(x)\in L^1_{\mathrm{loc}}(\Omega)$，那么 $f(x)$ 对应着一个广义函数
> $$
> \langle f,\varphi\rangle=\int_\Omega f(x)\,\varphi(x)\,dx\quad(\forall\varphi\in\mathscr{D}(\Omega)).\qquad(4.1.5)
> $$

> [!proof]- 证
> 线性条件显然，再验证连续性：若 $\varphi_j\to\varphi_0\;(\mathscr{D}(\Omega))$，则存在紧集 $K\subset\Omega$，使得
> $$
> \operatorname{supp}(\varphi_j)\subset K,\quad\text{且}\quad\max_{x\in K}|\varphi_j(x)-\varphi_0(x)|\to0\quad(j\to\infty).
> $$
> 从而由 Lebesgue 控制收敛定理，便有
> $$
> \begin{aligned}
> |\langle f,\varphi_j\rangle-\langle f,\varphi_0\rangle|
> &\le\int_K|f(x)|\cdot|\varphi_j(x)-\varphi_0(x)|\,dx\to0\quad(j\to\infty).
> \end{aligned}
> $$
> ■

> [!remark] 注 1
> 若把几乎处处相等的局部可积函数不加区别，则
> $$
> f(x)\mapsto f\quad(L^1_{\mathrm{loc}}(\Omega)\to\mathscr{D}'(\Omega))
> $$
> 的对应是 $1$–$1$ 的。事实上，要证：若 $f\in L^1_{\mathrm{loc}}(\Omega)$，且
> $$
> \int_\Omega f\cdot\varphi\,dx=0\quad(\forall\varphi\in\mathscr{D}(\Omega)),
> $$
> 则 $f(x)=0$ (a.e. 于 $\Omega$)。这只要证 $\forall$ 闭球 $B(x_0,\delta)\subset\Omega$，都有 $f(x)=0$ (a.e. 于 $B(x_0,\delta)$)。为此考察函数
> 
> $$
> \tilde{f}(x):=\begin{cases}
> \operatorname{sign}f(x), &x\in B(x_0,\delta),\\[4pt]
> 0, &x\notin B(x_0,\delta),
> \end{cases}
> $$
> 
> 显然有 $\tilde{f}\in L^1(\Omega)$，并且在 $\Omega$ 的一个紧集 $B(x_0,\delta)$ 外为 $0$。应用习题 4.1.1，$C_0^\infty(\Omega)$ 函数可以任意逼近这个函数，即函数
> $$
> \tilde{f}_\delta(x):=\int_\Omega\tilde{f}(y)\,j_\delta(x-y)\,dy.
> $$
> 当 $\delta>0$ 足够小时，有
> $$
> \|\tilde{f}_\delta-\tilde{f}\|_{L^1(\Omega)}\to0\quad(\delta\to0),
> $$
> 且 $\tilde{f}_\delta\in\mathscr{D}(\Omega)$。从而由 Riesz 表示定理（定理 2.5.4）和 Lebesgue 控制收敛定理，我们有
> $$
> \begin{aligned}
> \int_{B(x_0,\delta)}|f(x)|\,dx&=\int_\Omega f(x)\cdot\tilde{f}(x)\,dx\\
> &=\lim_{\delta_i\to0}\int_\Omega f(x)\cdot\tilde{f}_{\delta_i}(x)\,dx=0,
> \end{aligned}
> $$
> 其中 $\{\delta_i\}$ 是使得 $\tilde{f}_{\delta_i}\to\tilde{f}$ (a.e. 于 $\Omega$) 的正数列。即得
> $$
> f(x)=0\quad(\text{a.e. 于 }B(x_0,\delta)).
> $$

> [!remark] 注 2
> 并不是所有的函数都是广义函数。事实上，普通的不可测的函数并不能看成是广义函数。确切地说，广义函数只是局部可积函数的推广。每一个局部可积函数按 (4.1.5) 式对应一个广义函数，在这个意义上，我们说每个局部可积函数都是一个广义函数。今后，凡将一局部可积函数看成广义函数时，都按这种方式定义。值得注意的是这种对应并非在上的，也就是说 $\mathscr{D}'(\Omega)$ 含有比 $L^1_{\mathrm{loc}}(\Omega)$ 更多的元素（见习题 4.1.2）。也正因为如此，我们才把 $\mathscr{D}'(\Omega)$ 中的元素称为广义函数。

> [!example] 例 4.1.11
> 若 $\mu$ 是 $\Omega$ 上的一个完全可加测度，则
> $$
> \langle f,\varphi\rangle=\int_\Omega\varphi(x)\,d\mu(x)\quad(\forall\varphi\in\mathscr{D}(\Omega))
> $$
> 也定义了一个广义函数，这对应同样是 $1$–$1$ 的（推论 4.1.4）。

> [!example] 例 4.1.12
> 若 $\Omega=(0,1)$，则
> $$
> \langle f,\varphi\rangle=\sum_{j=1}^\infty\varphi^{(j)}\!\left(\frac{1}{j}\right)\quad(\forall\varphi\in\mathscr{D}(\Omega))
> $$
> 也是一个广义函数。

> [!theorem] 定理 4.1.13
> 为了 $f\in\mathscr{D}'(\Omega)$，必须且仅须对任意相对于 $\Omega$ 的紧集 $K$，存在着常数 $C$ 及非负整数 $m$，使得
> $$
> |\langle f,\varphi\rangle|\le C\sum_{|\alpha|\le m}\sup_{x\in K}|\partial^\alpha\varphi(x)|\quad(\forall\varphi\in\mathscr{D}(\Omega),\;\operatorname{supp}(\varphi)\subset K).\qquad(4.1.6)
> $$

> [!proof]- 证
> 充分性是显然的，下证必要性。用反证法。倘若不然，有紧集 $K$，使得 (4.1.6) 式不成立。因为 (4.1.6) 式对 $\varphi$ 是齐次的，所以对 $\forall j\in\mathbb{N}$，$\exists\varphi_j\in\mathscr{D}(\Omega)$，使得 $\operatorname{supp}(\varphi_j)\subset K$，并满足
> $$
> \sup_{x\in K}|\partial^\alpha\varphi_j|\le\frac{1}{j}\quad(|\alpha|\le j),
> $$
> 以及 $\langle f,\varphi_j\rangle=1$。因此，$\{\varphi_j\}$ 在 $\mathscr{D}(\Omega)$ 中收敛于 $0$，从而
> $$
> \langle f,\varphi_j\rangle\to0\quad(j\to\infty).
> $$
> 这显然是不可能的.

### 1.3 广义函数的收敛性

在 $\mathscr{D}'(\Omega)$ 上可以规定加法与数乘:
$$\langle(\lambda_1 f_1 + \lambda_2 f_2), \varphi\rangle = \lambda_1\langle f_1, \varphi\rangle + \lambda_2\langle f_2, \varphi\rangle$$
$$(\forall\varphi \in \mathscr{D}(\Omega),\ \forall\lambda_1, \lambda_2 \in \mathbb{R}),$$

从而 $\mathscr{D}'(\Omega)$ 构成一个线性空间. 现在在 $\mathscr{D}'(\Omega)$ 上引入 ${}^*$弱收敛.

> [!definition] 定义 4.1.14
> 称 $\{f_j\} \subset \mathscr{D}'(\Omega)$ ${}^*$弱收敛到 $f_0 \in \mathscr{D}'(\Omega)$, 是指:
> $$\langle f_j, \varphi\rangle \to \langle f_0, \varphi\rangle \quad (j \to \infty) \quad (\forall\varphi \in \mathscr{D}(\Omega)).$$

在此我们强调一下: 广义函数意义下的收敛是十分弱的收敛. 下面举几个例子来看一下.

> [!example] 例 4.1.15
> 在 $\mathbb{R}$ 上,
> $$f_j(x) = \frac{1}{\pi} \cdot \frac{\sin(jx)}{x} \quad (j = 1, 2, \cdots)$$
> 是一串 $L^1_{\text{loc}}(\mathbb{R})$ 函数, 从而可以看成是广义函数列. 我们有
> $$f_j \to \delta(\mathscr{D}'(\Omega)) \quad (j \to \infty).$$
>
> > [!proof]- 证
> > 因为有
> > $$\lim_{T\to\infty} \frac{1}{\pi} \int_{-T}^{T} \frac{\sin(jx)}{x} \,dx = 1,$$
> > 所以 $\forall\varphi \in \mathscr{D}(\mathbb{R})$, 存在 $T_0 > 0$, 使得 $\operatorname{supp}(\varphi) \subset [-T_0, T_0]$. 一方面, 当 $T > T_0$ 时,
> > $$\int_{-\infty}^{\infty} f_j(x)\cdot\varphi(x)\,dx = \int_{-T}^{T} f_j(x)\cdot\varphi(x)\,dx;$$
> > 另一方面, $\forall\varepsilon > 0$, 取 $T_1$ 足够大, 以致 $T > T_1$ 时,
> > $$\left|\frac{1}{\pi} \int_{-T}^{T} \frac{\sin(jx)}{x} \,dx - 1\right| < \frac{\varepsilon}{2}.$$
> > 从而当 $T > \max\{T_0, T_1\}$ 时,
> > $$|\langle f_j, \varphi\rangle - \varphi(0)| \le \left|\frac{1}{\pi} \int_{-T}^{T} \frac{\sin(jx)}{x} [\varphi(x) - \varphi(0)]\,dx\right| + \frac{\varepsilon}{2} |\varphi(0)|$$
> > $$= \frac{1}{\pi} \left|\int_0^T \frac{\sin(jx)(\varphi(x)+\varphi(-x)-2\varphi(0))}{x}\,dx\right| + \frac{\varepsilon}{2} |\varphi(0)|.$$
> > 固定 $T$, 由 Riemann-Lebesgue 引理, 存在正整数 $n_0$, 当 $j > n_0$ 时,
> > $$\frac{1}{\pi} \left|\int_0^T \frac{\sin(jx)(\varphi(x)+\varphi(-x)-2\varphi(0))}{x}\,dx\right| < \frac{\varepsilon}{2},$$
> > 于是得 $\langle f_j, \varphi\rangle \to \varphi(0) = \langle \delta, \varphi\rangle$ $(j \to \infty)$ $(\forall\varphi \in \mathscr{D}(\mathbb{R}))$.

> [!example] 例 4.1.16
> 设 $j_\delta(x)$ 为例 4.1.1 中定义的函数, $\delta > 0$, 则当 $\delta \to 0$ 时, $j_\delta$ 作为广义函数列收敛到 $\delta(\mathscr{D}'(\mathbb{R}^n))$. 又若用 $\delta_{x_0}$ 表示广义函数:
> $$\langle\delta_{x_0}, \varphi\rangle = \varphi(x_0) \quad (\forall\varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 则 $j_\delta(x - x_0) \to \delta_{x_0}$ $(\delta \to 0)$.
>
> > [!proof]- 证
> > 直接利用定理 4.1.3.

对于在 $x_0 = \theta$ 点的 $\delta$ 函数, 在不会产生混淆的情况下, 也可以略去下标, 直接写成 $\delta$.

> [!example] 例 4.1.17
> 设 $f_j(x)$ 是 $\Omega$ 上的一串局部可积函数列, 并且对任意相对于 $\Omega$ 的紧集 $K$, 存在常数 $M_K$, 使得
> $$|f_j(x)| \le M_K \quad (\forall x \in K,\ j = 0, 1, 2, \cdots),$$
> 并且 $f_j(x) \to f_0(x)$ $(j \to \infty)$ (a.e. $x \in \Omega$), 则作为广义函数列 $f_j$,
> $$\langle f_j, \varphi\rangle = \int_\Omega f_j(x)\varphi(x)\,dx \quad (j = 0, 1, 2, \cdots),$$
> 在广义函数意义下收敛到 $f_0$.
>
> > [!proof]- 证
> > 由 Lebesgue 控制收敛定理直接得到.

> [!example] 例 4.1.18
> 设 $f_1(x) = e^{-\pi|x|^2}$, 令
> $$f_j(x) = j^{n/2} f_1(\sqrt{j}\,x) = j^{n/2} e^{-j\pi|x|^2} \quad (j = 2, 3, \cdots),$$
> 则有
> $$\langle f_j, \varphi\rangle \to \langle \delta, \varphi\rangle \quad (j \to \infty) \quad (\forall\varphi \in \mathscr{D}(\mathbb{R}^n)),$$
> 其中 $f_j$ 是函数 $f_j(x)$ 所对应的广义函数 $(j = 1, 2, 3, \cdots)$.
>
> 证明从略, 留作习题.

**习 题**

> [!exercise] 4.1.1
> 设 $1 \le p < \infty$, 求证: $C_0^\infty(\Omega)$ 在 $L^p(\Omega)$ 中稠密.
>
> **提示** (1) 若 $u \in L^p(\Omega)$ $(1 < p < \infty)$, $u_\delta(x)$ 是按 (4.1.3) 式构造的函数, 则按 Young 不等式 (引理 2.5.14), 便有
> $$\|u_\delta\|_p \le \|u\|_p.$$
> (2) 用 Luzin 定理证明 $C_0^0(\Omega)$ 在 $L^p(\Omega)$ 中稠密.
> (3) 用典型的 $\varepsilon/3$ 论证法. 从 $u \in L^p(\Omega)$ 出发, 为了找到 $u_\delta \in C_0^\infty(\Omega)$, 使得它逼近 $u$ 的误差
> $$\|u_\delta - u\|_p < \varepsilon.$$
> 我们可以分三个步骤进行, 每步引进的误差各小于 $\varepsilon/3$.
> 第一步: 找 $\varphi \in C_0^0(\Omega)$, 使得 $\|u - \varphi\|_p < \varepsilon/3$;
> 第二步: 找 $\varphi_\delta \in C_0^\infty(\Omega)$, 使得 $\|\varphi - \varphi_\delta\|_p < \varepsilon/3$;
> 第三步: 找 $u_\delta \in C_0^\infty(\Omega)$, 使得 $\|\varphi_\delta - u_\delta\|_p < \varepsilon/3$.

> [!exercise] 4.1.2
> 求证: $\delta$ 函数不是局部可积函数.

> [!exercise] 4.1.3
> 设
> $$f_j(x) = (1 + x/j)^j \quad (j = 1, 2, \cdots) \quad (x \in \mathbb{R}),$$
> 求证:
> $$f_j(x) \to e^x \quad (\mathscr{D}'(\mathbb{R})).$$

> [!exercise] 4.1.4
> 在 $\mathscr{D}'(\mathbb{R})$ 中, 求证:
> $$(1)\quad \frac{1}{\pi} \cdot \frac{1}{x^2 + \varepsilon^2} \to \delta(x) \quad (\varepsilon \to 0^+);$$
> $$(2)\quad \frac{1}{2\sqrt{\pi t}} \exp\!\left(-\frac{x^2}{4t}\right) \to \delta(x) \quad (t \to 0^+).$$

> [!exercise] 4.1.5
> 设 $\Omega \subset \mathbb{R}^n$ 是一个开集, 又设 $K$ 是 $\Omega$ 的一个紧子集, 求证: 存在一个函数 $\varphi \in C_0^\infty(\Omega)$, 使得 $0 \le \varphi(x) \le 1$, 且 $\varphi(x)$ 在 $K$ 的一个邻域内恒为 $1$.

## §2 B₀ 空 间

我们来仔细分析 $\mathscr{D}(\Omega)$ 的收敛性, 同时也研究一些其他有关的空间. 设 $K$ 是相对于 $\Omega$ 的紧集, 又设 $C^\infty(\Omega)$ 表示 $\Omega$ 上的无穷次可微函数全体, 我们引入

$$\mathscr{D}_K = \{\varphi \in C^\infty(\Omega) \mid \operatorname{supp}(\varphi) \subset K\},$$

其收敛性规定如下: $\varphi_j \to \varphi_0$, 是指对任意的多重指标 $\alpha$,
$$\max_{x\in K} |\partial^\alpha(\varphi_j - \varphi_0)(x)| \to 0 \quad (j \to \infty).$$

我们当然想用范数来刻画这种收敛性, 但是无论如何这种收敛性不能用一个范数来描写. 事实上, 可以引入可数个范数:

$$\|\varphi\|_m = \sum_{|\alpha|\le m} \max_{x\in K} |\partial^\alpha \varphi(x)| \quad (m = 1, 2, \cdots). \tag{4.2.1}$$

$\mathscr{D}_K$ 上的收敛性是由这可数多个范数 $\{\|\varphi\|_m\}$ 描写的: 为了 $\varphi_j \to \theta$ $(\mathscr{D}_K)$, 必须且仅须对 $\forall m \in \mathbb{N}$, 有
$$\|\varphi_j\|_m \to 0 \quad (j \to \infty),$$

即 $\forall\varepsilon > 0$, $\forall m \in \mathbb{N}$, $\exists N = N(\varepsilon, m)$, 使得 $\|\varphi_j\|_m < \varepsilon$ $(j > N)$.

于是引出如下定义.

> [!definition] 定义 4.2.1
> 设 $\mathscr{X}$ 是一个线性空间, 称它是可数范数空间 (或 $B_0^*$ 空间), 是指在它上面有可数个半范数 $\{\|\cdot\|_m\}_{m=1}^\infty$, 满足:
> (1) $\|x + y\|_m \le \|x\|_m + \|y\|_m$ $(\forall x, y \in \mathscr{X})$;
> (2) $\|\lambda x\|_m = |\lambda|\,\|x\|_m$ $(\lambda \in \mathbb{R},\ x \in \mathscr{X})$;
> (3) $\|x\|_m \ge 0$, $\|\theta\|_m = 0$ $(\forall x \in \mathscr{X})$.
> (4) $\|x\|_m = 0$ $(m = 1, 2, \cdots)$ $\Leftrightarrow$ $x = \theta$.
>
> **注 1** 实际上每个 $\|\cdot\|_m$ 是半范数.
>
> **注 2** 在可数范数空间定义中, 可数个半范数可以换成满足下列条件的可数个半范数:
>
> $$\|x\|'_1 \le \|x\|'_2 \le \cdots \le \|x\|'_m \le \cdots \quad (\forall x \in \mathscr{X}).$$
>
> 事实上, 只需令
> $$\|x\|'_m = \max(\|x\|_1, \cdots, \|x\|_m) \quad (\forall x \in \mathscr{X}).$$

> [!definition] 定义 4.2.2
> 在线性空间 $\mathscr{X}$ 上给定两组可数个半范数
> $$\{\|\cdot\|_m\}_{m=1}^\infty \quad \text{与} \quad \{\|\cdot\|'_m\}_{m=1}^\infty,$$
> 如果它们导出相同的收敛性, 则称它们是等价的.

> [!proposition] 命题 4.2.3
> 在线性空间 $\mathscr{X}$ 上, 为了两组可数个半范数
> $$\{\|\cdot\|_m\}_{m=1}^\infty \quad \text{与} \quad \{\|\cdot\|'_m\}_{m=1}^\infty$$
> 是等价的, 必须且仅须: $\forall m \in \mathbb{N}$, $\exists m' \in \mathbb{N}$ 及 $\exists C_{mm'} > 0$, 使得
> $$\|x\|_m \le C_{mm'}\|x\|'_{m'} \quad (\forall x \in \mathscr{X}),$$
> 并且 $\forall n' \in \mathbb{N}$, $\exists n \in \mathbb{N}$ 及 $\exists C'_{n'n} > 0$, 使得
> $$\|x\|'_{n'} \le C'_{n'n}\|x\|_n \quad (\forall x \in \mathscr{X}).$$
>
> 证明从略, 留作习题.

> [!proposition] 命题 4.2.4
> 每个 $B_0^*$ 空间 $\mathscr{X}$ 必是一个 $F^*$ 空间，即若 $\{\|\cdot\|_m\}_{m=1}^\infty$ 是可数个半范数，则
> $$\|x\| = \sum_{m=1}^\infty \frac{1}{2^m} \cdot \frac{\|x\|_m}{1 + \|x\|_m} \quad (\forall x \in \mathscr{X})$$
> 是一个准范数，并且 $\|\cdot\|$ 导出的收敛性与 $\{\|\cdot\|_m\}_{m=1}^\infty$ 导出的收敛性一致。
>
> 证明从略，留作习题（参照 $\mathscr{S}$ 空间的收敛性，见例 1.4.7）。

以下举一些 $B_0^*$ 空间的例子。

> [!example] 例 4.2.5
> $\mathscr{D}_K$ 是 $B_0^*$ 空间，其可数范数 $\|\cdot\|_m$ 按 (4.2.1) 式规定。

> [!example] 例 4.2.6
> $\mathscr{E}(\Omega)$。设 $\Omega$ 是 $\mathbb{R}^n$ 中的任意开集，又设 $K_m$ 是一串相对于 $\Omega$ 的紧集，适合
> $$K_1 \subset K_2^\circ \subset K_2 \subset K_3^\circ \subset \cdots \subset K_m \subset \cdots \subset \Omega,\quad \bigcup_{m=1}^\infty K_m = \Omega,$$
> 并令
> $$\|\varphi\|_m = \sum_{|\alpha|\le m} \max_{x\in K_m} |\partial^\alpha \varphi(x)| \quad (m = 1,2,\cdots).$$
> 用 $\mathscr{E}(\Omega)$ 表示带有可数范数 $\{\|\varphi\|_m\}_{m=1}^\infty$ 的线性空间 $C^\infty(\Omega)$，则 $\mathscr{E}(\Omega)$ 是一个 $B_0^*$ 空间（易证）。按定义，为了 $\varphi_j \to 0(\mathscr{E}(\Omega))$，必须且仅须 $\forall\varepsilon > 0$, $\forall m \in \mathbb{N}$, $\exists N = N(\varepsilon,m)$，使得
> $$\max_{x\in K_m} |\partial^\alpha \varphi_j(x)| < \varepsilon \quad (\forall|\alpha| \le m,\ \forall j > N),$$
> 或者说，在每一个相对于 $\Omega$ 的紧集 $K_m$ 上，直到 $m$ 次导数一致收敛于 $0$。

> [!remark] 注
> $\mathscr{E}(\Omega)$ 上的收敛性与紧集列 $\{K_m\}$ 的选择无关，即按不同的紧集列定义出的两组可数个半范数是等价的。其证明留作习题。

> [!example] 例 4.2.7
> $\mathscr{S}(\mathbb{R}^n)$。用 $\mathscr{S}(\mathbb{R}^n)$ 表示集合
> $$\{\varphi \in C^\infty(\mathbb{R}^n) \mid \sup |(1+|x|^2)^{k/2} \partial^\alpha \varphi(x)| \le M_{k,\alpha} < \infty\ (k, |\alpha| = 0,1,2,\cdots)\}.$$
> 定义半范数为
> $$\|\varphi\|_m = \sup_{|\alpha|\le m,\ x\in\mathbb{R}^n} |(1+|x|^2)^{m/2} \partial^\alpha \varphi(x)| \quad (m = 0,1,2,\cdots).$$
> $\mathscr{S}(\mathbb{R}^n)$ 上的函数称为速降函数，其任意阶导数在无穷远处比任何负幂次下降得都快。确切地说，对任意非负整数 $m$ 及多重指标 $\alpha$，都有
> $$\lim_{|x|\to\infty} (1+|x|^2)^{m/2} |\partial^\alpha \varphi(x)| = 0.$$

> [!definition] 定义 4.2.8（完备性）
> 一个 $B_0^*$ 空间 $\mathscr{X}$ 称为是完备的，是指其中的任何基本列都是收敛的。完备的 $B_0^*$ 空间称为 $B_0$ 空间。

> [!example] 例 4.2.9
> $\mathscr{S}(\mathbb{R}^n)$ 是 $B_0$ 空间。
>
> > [!proof]- 证
> > 设 $\{\varphi_\nu(x)\}$ 是 $\mathscr{S}(\mathbb{R}^n)$ 中的一个基本列。由定义，对 $\forall m \in \mathbb{N}$ 及 $\forall\varepsilon > 0$, $\exists N = N(m,\varepsilon)$，当 $\mu, \nu > N$ 时，
> > $$\sup_{|\alpha|\le m,\ x\in\mathbb{R}^n} (1+|x|^2)^{m/2} |\partial^\alpha(\varphi_\mu - \varphi_\nu)(x)| < \varepsilon. \tag{4.2.2}$$
> >
> > (1) 因对每个 $m$，$\{\|\varphi_\nu\|_m\}$ 是有界的，故必存在常数 $M_m$，使得
> > $$\sup_{|\alpha|\le m,\ x\in\mathbb{R}^n} (1+|x|^2)^{m/2} |\partial^\alpha \varphi_\nu(x)| \le M_m \quad (\nu = 1,2,\cdots),$$
> > 从而
> > $$|\partial^\alpha \varphi_\nu(x)| \le \frac{M_m}{(1+|x|^2)^{m/2}}. \tag{4.2.3}$$
> > 此外，在任意有界闭球 $|x| \le R$ 上，$\{\partial^\alpha \varphi_\nu(x)\}$ 依一致范数是基本序列。所以在 $|x| \le R$ 上，$\{\partial^\alpha \varphi_\nu(x)\}$ 有一个一致极限 $\psi_\alpha(x)$，满足
> > $$|\psi_\alpha(x)| \le \frac{M_m}{(1+|x|^2)^{m/2}} \quad (|\alpha| \le m). \tag{4.2.4}$$
> >
> > (2) $\psi_\alpha(x) = \partial^\alpha \psi_0(x)$。其实我们只要证明
> > $$\psi_{(1,0,\cdots,0)}(x) = \partial_{x_1} \psi_0(x)$$
> > 就够了，因为其余部分用归纳法递推即可。事实上，对任意的 $R > 0$，当 $|x| \le R$ 时，我们有
> > $$\partial_{x_1} \varphi_\nu(x) \rightrightarrows \psi_{(1,0,\cdots,0)}(x) \quad (\nu \to \infty),$$
> > 以及
> > $$\varphi_\nu(x) \rightrightarrows \psi_0(x) \quad (\nu \to \infty).$$
> > 对 $\forall\varepsilon > 0$，取 $M'_1 > 0$，及 $N_0 \in \mathbb{N}$，使得
> > $$\int_{|x_1|>M'_1} \frac{dx_1}{(1+|x_1|^2)^{1/2}} < \frac{\varepsilon}{4M_1},$$
> > 以及
> > $$|\psi_{(1,0,\cdots,0)}(x) - \partial_{x_1} \varphi_\nu(x)| < \frac{\varepsilon}{4M'_1} \quad (|x| \le M'_1,\ \nu > N_0),$$
> > 便有
> > $$\begin{aligned}&\left|\int_{-\infty}^{x_1} \psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n)\,dx' - \varphi_\nu(x_1, x_2, \cdots, x_n)\right|\\
> > =\ &\left|\int_{-\infty}^{x_1} [\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) - \partial_{x_1} \varphi_\nu(x', x_2, \cdots, x_n)]\,dx'\right|\\
> > \le\ &\int_{|x'|>M'_1} |\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n)|\,dx'\\
> > &+ \int_{|x'|>M'_1} |\partial_{x_1} \varphi_\nu(x', x_2, \cdots, x_n)|\,dx'\\
> > &+ \int_{|x'|\le M'_1} |\psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n) - \partial_{x_1} \varphi_\nu(x', x_2, \cdots, x_n)|\,dx'\\
> > <\ &2M_1 \cdot \frac{\varepsilon}{4M_1} + 2M'_1 \cdot \frac{\varepsilon}{4M'_1} = \varepsilon.\end{aligned}$$
> > 从而
> > $$\psi_0(x) = \int_{-\infty}^{x_1} \psi_{(1,0,\cdots,0)}(x', x_2, \cdots, x_n)\,dx',$$
> > 即
> > $$\psi_{(1,0,\cdots,0)}(x) = \partial_{x_1} \psi_0(x).$$
> > 这也同时证明了 $\psi_0(x) \in \mathscr{S}(\mathbb{R}^n)$.
> >
> > (3) $\|\varphi_\nu - \psi_0\|_m \to 0$ $(\nu \to \infty)$。事实上，对 $\forall\varepsilon > 0$, $\exists R > 0$，使得当 $|x| > R$ 时，
> > $$\sup_{|\alpha|\le m} |\partial^\alpha(\varphi_\nu(x) - \psi_0(x))| \le \frac{M_m}{(1+|x|^2)^{m/2}} < \varepsilon.$$
> > 再确定 $N$，使得当 $\nu > N$ 时，在 $|x| \le R$ 上有
> > $$\sup_{|\alpha|\le m} |\partial^\alpha(\varphi_\nu(x) - \psi_0(x))| < \varepsilon.$$
> > 从而
> > $$\partial^\alpha \varphi_\nu(x) \rightrightarrows \partial^\alpha \psi_0(x) \quad (\nu \to \infty,\ \forall x \in \mathbb{R}^n).$$
> > 因此，在 (4.2.2) 式中令 $\mu \to \infty$，即得
> > $$\|\varphi_\nu - \psi_0\| \le \varepsilon \quad (\forall\nu > N).$$
> > 于是空间 $\mathscr{S}(\mathbb{R}^n)$ 是完备的。 $\blacksquare$

注意，$\mathscr{D}(\Omega)$ 不是 $B_0^*$ 空间。但是关于 $\mathscr{D}(\Omega)$ 的收敛性我们有如下命题。

> [!proposition] 命题 4.2.10
> 为了 $\varphi_\nu \to \varphi_0(\mathscr{D}(\Omega))$，必须且仅须存在紧集 $K \subset \Omega$，使得 $\varphi_0, \varphi_\nu \subset \mathscr{D}_K$，而且
> $$\|\varphi_\nu - \varphi_0\|_{m,k} \to 0 \quad (\nu \to \infty,\ m = 1,2,\cdots),$$
> 其中 $\|\varphi\|_{m,k}$ 是 $\mathscr{D}_K$ 上的可数范数。
>
> 证明从略，留作习题。

正如在本章 §1 中见到的那样，$\mathscr{D}'(\Omega)$ 表示广义函数全体，它是 $\mathscr{D}(\Omega)$ 的共轭空间。对于 $\mathscr{D}_K(\Omega)$, $\mathscr{E}(\Omega)$, $\mathscr{S}(\mathbb{R}^n)$，我们也要考虑相应的共轭空间，分别记作 $\mathscr{D}'_K(\Omega)$, $\mathscr{E}'(\Omega)$, $\mathscr{S}'(\mathbb{R}^n)$，特别当 $\Omega = \mathbb{R}^n$ 时，简单地记作 $\mathscr{D}'_K$, $\mathscr{E}'$, $\mathscr{S}'$。显然有
$$\mathscr{E}' \subset \mathscr{S}' \subset \mathscr{D}'_K.$$

首先，我们要论证这些空间有足够多元素，然后设法把它们表示出来。为此，我们把 $B$ 空间上线性泛函的连续性与有界性的关系（命题 2.1.11）推广到 $B_0$ 空间。

> [!lemma] 引理 4.2.11
> 设 $\mathscr{X}$ 是一个 $B_0$ 空间。为了 $\mathscr{X}$ 上的线性泛函 $f$ 是连续的，必须且仅须 $\exists m \in \mathbb{N}$ 及 $M_m > 0$，使得
> $$|\langle f, \varphi\rangle| \le M_m \|\varphi\|_m \quad (\forall\varphi \in \mathscr{X}).$$
>
> > [!proof]- 证
> > 充分性显然。必要性用反证法。倘若不然，对 $\forall n \in \mathbb{N}$, $\exists x_n \in \mathscr{X}$，使得
> > $$|\langle f, x_n\rangle| > n \|x_n\|_n. \tag{4.2.5}$$
> >
> > (1) 如果 $\exists N \in \mathbb{N}$，使得 $\|x_n\|_n \ne 0$ $(\forall n \ge N)$，令
> > $$y_n \triangleq \frac{x_n}{n \|x_n\|_n} \quad (n \ge N),$$
> > 那么
> > $$\|y_n\|_p = \frac{\|x_n\|_p}{n \|x_n\|_n} \le \frac{1}{n} \quad \text{（当 $n \ge \max(N,p)$）}.$$
> > 故 $y_n \to \theta$ $(n \to \infty)$。但 $|\langle f, y_n\rangle| > 1$ $(n \ge N)$，这与 $f$ 的连续性矛盾。
> >
> > (2) 如果存在 $\{n_i\}_{i=1}^\infty$，使得 $\|x_{n_i}\|_{n_i} = 0$ $(i = 1,2,\cdots)$，那么有 $|\langle f, x_{n_i}\rangle| > 0$，令
> > $$y_{n_i} = \frac{x_{n_i}}{\langle f, x_{n_i}\rangle} \quad (i = 1,2,\cdots),$$
> > 便有 $\langle f, y_{n_i}\rangle = 1$，但 $\|y_{n_i}\|_{n_i} = 0$ $(i = 1,2,\cdots)$。这也与 $f$ 的连续性矛盾。 $\blacksquare$

> [!theorem] 定理 4.2.12
> 任意 $B_0$ 空间 $\mathscr{X}$ 具有足够多的连续线性泛函。
>
> > [!proof]- 证
> > 若 $f_0$ 在 $\mathscr{X}$ 的一个线性闭子空间 $\mathscr{X}_0$ 上有定义且连续线性，则存在半范数 $\|\cdot\|_m$ 及常数 $M_m > 0$，使得
> > $$|\langle f_0, x\rangle| \le M_m \|x\|_m \quad (\forall x \in \mathscr{X}_0).$$
> > 对于半范数 $\|\cdot\|_m$，应用 Hahn-Banach 定理(定理2.4.4)，$f_0$ 可以扩张到全空间 $\mathscr{X}$，即 $f$ 满足 $f|_{\mathscr{X}_0} = f_0$，且
> > $$|\langle f,x\rangle| \le M_m \|x\|_m \quad (\forall x \in \mathscr{X}),$$
> > 从而 $f \in \mathscr{X}^*$。于是对 $\forall x_0 \ne \theta$, $\exists f \in \mathscr{X}^*$，使得 $\langle f,x_0\rangle = 1$。

由定义即可推出如下命题。

> [!proposition] 命题 4.2.13
> 如果有一个 $B_0$ 空间 $\mathscr{X}$，满足 $\mathscr{D}(\Omega) \hookrightarrow \mathscr{X}$，即 $\mathscr{D}(\Omega) \subset \mathscr{X}$，并且
> $$\varphi_j \to \varphi_0(\mathscr{D}(\Omega)) \implies \varphi_j \to \varphi_0(\mathscr{X}) \quad (j\to\infty),$$
> 那么 $\mathscr{X}$ 上的任意一个连续线性泛函 $f$，必有 $f \in \mathscr{D}'(\Omega)$。

> [!example] 例 4.2.14
> $\mathscr{X} = \mathscr{E}(\Omega)$ 或 $L^p(\Omega)$ $(1\le p<\infty)$ 或 $C^k(\Omega)$ $(k\in\mathbb{N})$ 等都满足 $\mathscr{D}(\Omega) \hookrightarrow \mathscr{X}$，从而有 $\mathscr{E}'(\Omega)$, $L^q(\Omega)$ $(1/p+1/q=1)$, $[C^k(\Omega)]^*$ 等都包含于 $\mathscr{D}'(\Omega)$。

现在我们来用积分表示 $\mathscr{S}'$ 中的广义函数。

> [!theorem] 定理 4.2.15
> 为了 $f \in \mathscr{S}'$，必须且仅须 $\exists m \in \mathbb{N}$ 及 $u_\alpha \in L^2(\mathbb{R}^n)$ $(|\alpha|\le m)$，使得
> $$\langle f,\varphi\rangle = \sum_{|\alpha|\le m} \int_{\mathbb{R}^n} u_\alpha(x)\,\partial^\alpha \varphi(x)\,(1+|x|^2)^{m/2}\,dx \quad (\forall\varphi \in \mathscr{S}).$$
>
> > [!proof]- 证
> > 充分性显然，只需证必要性。
> >
> > (1) 先证明
> > $$\|\varphi\|'_m := \left( \sum_{|\alpha|\le m} \int_{\mathbb{R}^n} (1+|x|^2)^m |\partial^\alpha \varphi(x)|^2\,dx \right)^{1/2} \quad (m=1,2,\dots)$$
> > 是 $\mathscr{S}$ 上的一组等价范数。这是因为
> > $$\begin{aligned}\|\varphi\|'^2_m &\le \sum_{|\alpha|\le m} \sup_{x\in\mathbb{R}^n} (1+|x|^2)^{m+n} |\partial^\alpha \varphi(x)|^2 \int_{\mathbb{R}^n} \frac{dx}{(1+|x|^2)^n}\\
> > &\le c \,\|\varphi\|_{m+n}^2,\end{aligned}$$
> > 以及
> > $$\begin{aligned}\|\varphi\|_m &= \sup_{|\alpha|\le m,\ x\in\mathbb{R}^n} |(1+|x|^2)^{m/2} \partial^\alpha \varphi(x)|\\
> > &\le \sup_{|\alpha|\le m} \int_{\mathbb{R}^n} \left| \frac{\partial^n}{\partial x_1\cdots\partial x_n} (1+|x|^2)^{m/2} \partial^\alpha \varphi(x) \right| dx\\
> > &\le c \sup_{|\alpha|\le m} \int_{\mathbb{R}^n} (1+|x|^2)^{m/2} |\partial^{\alpha+e} \varphi(x)|\,dx\\
> > &\qquad (\text{其中 } e = (1,\dots,1))\\
> > &\le C \sum_{|\alpha|\le m+n} \left( \int_{\mathbb{R}^n} (1+|x|^2)^{m+n} |\partial^\alpha \varphi(x)|^2\,dx \right)^{1/2}\\
> > &\qquad \times \left( \int_{\mathbb{R}^n} \frac{dx}{(1+|x|^2)^n} \right)^{1/2}\\
> > &\le c_1 \|\varphi\|'_{m+n}.\end{aligned}$$
> >
> > (2) 对 $f$ 应用引理 4.2.11，$\exists m \in \mathbb{N}$，使得
> > $$|\langle f,\varphi\rangle| \le c_m \|\varphi\|'_m \quad (\forall\varphi \in \mathscr{S}). \tag{4.2.6}$$
> > 于是 $f$ 可以连续地扩张到以 $\|\cdot\|'_m$ 为范数的 Banach 空间 $\mathscr{X}_m$ 上。注意到 $\|\cdot\|'_m$ 满足平行四边形等式，所以它可引出内积
> > $$(\varphi,\psi)_m = \sum_{|\alpha|\le m} \int_{\mathbb{R}^n} \partial^\alpha \varphi(x) \cdot \partial^\alpha \psi(x)\,(1+|x|^2)^{m/2}\,dx,$$
> > 并且构成 Hilbert 空间。
> >
> > (3) 现在应用 Riesz 表示定理(定理 2.5.4)，$f$ 对应着 $u \in \mathscr{X}_m$，使得
> > $$\langle f,\varphi\rangle = \sum_{|\alpha|\le m} \int_{\mathbb{R}^n} \partial^\alpha u(x) \cdot \partial^\alpha \varphi(x)\,(1+|x|^2)^{m/2}\,dx,$$
> > 其中
> > $$\int_{\mathbb{R}^n} |\partial^\alpha u(x)|^2 (1+|x|^2)^m\,dx < \infty.$$
> >
> > 令
> > $$u_\alpha(x) = (1+|x|^2)^{m/2}\,\partial^\alpha u(x) \quad (|\alpha|\le m),$$
> > 便有 $u_\alpha \in L^2(\mathbb{R}^n)$，并且对 $\forall\varphi \in \mathscr{S}$，有
> > $$\langle f,\varphi\rangle = \sum_{|\alpha|\le m} \int_{\mathbb{R}^n} u_\alpha(x)\,\partial^\alpha \varphi(x)\,(1+|x|^2)^{m/2}\,dx. \tag{4.2.7}$$

**习 题**

> [!exercise] 4.2.1
> 验证：在例 4.2.6 中，$\mathscr{E}(\Omega)$ 上的收敛性与紧集列 $\{K_m\}$ 的特殊选择无关。

> [!exercise] 4.2.2
> 设 $\|\varphi\|'_m = \sup_{|k|,|\alpha|\le m,\ x\in\mathbb{R}^n} |x^k \partial^\alpha \varphi(x)|$ $(m=0,1,2,\dots)$，求证：$\|\cdot\|'_m$ 是 $\mathscr{S}(\mathbb{R}^n)$ 上的等价可数范数。

> [!exercise] 4.2.3
> 验证：$\mathscr{D}_K(\Omega)$ 与 $\mathscr{E}(\Omega)$ 都是 $B_0$ 空间。

> [!exercise] 4.2.4
> 设 $G$ 是复平面中的有界开连通区域。记 $A(G)$ 为 $G$ 上的解析函数全体，按下列方式规定可数半范数组成的空间：设
> $$G_1 \subset \overline{G}_1 \subset G_2 \subset \overline{G}_2 \subset \cdots \subset G_m \subset \overline{G}_m \subset \cdots \subset G$$
> 是一列连通集，$G_m$ $(m=1,2,\dots)$ 是开的，其边界由有穷多段可求长的曲线围成，满足：$\bigcup_{m=1}^\infty \overline{G}_m = G$。令
> $$\|\varphi\|_m = \max_{z\in\overline{G}_m} |\varphi(z)| \quad (\forall\varphi \in A(G)).$$
> 求证：$A(G)$ 是 $B_0$ 空间，又若 $\{\varphi_n\}_{n=1}^\infty \subset A(G)$，有数列 $\{M_m\}_{m=1}^\infty$，使得
> $$\|\varphi_n\| \le M_m \quad (m=1,2,\dots;\ n=1,2,\dots),$$
> 则 $\{\varphi_n\}_{n=1}^\infty$ 必有收敛子列。

## §3 广义函数的运算

设 $A: \mathscr{D}(\Omega) \to \mathscr{D}(\Omega)$ 是一个线性算子，称它是连续的，是指
$$\varphi_j \to \varphi(\mathscr{D}(\Omega)) \implies A\varphi_j \to A\varphi(\mathscr{D}(\Omega)) \quad (j\to\infty).$$

> [!example] 例 4.3.1
> 任意微分算子 $\partial^\alpha$ 是 $\mathscr{D}(\Omega)$ 上的连续线性算子。
>
> > [!proof]- 证
> > $\forall$ 相对紧集 $K \subset \Omega$，$\partial^\alpha: \mathscr{D}_K \to \mathscr{D}_K$，并且
> > $$\|\partial^\alpha \varphi\|_m = \sum_{|\beta|\le m} \max_{x\in K} |\partial^{\beta+\alpha} \varphi(x)| \le \|\varphi\|_{m+|\alpha|}.$$
>
> $\partial^\alpha$ 在 $L^2(\Omega)$ 上不是连续的，但却是闭的。

> [!example] 例 4.3.2
> 乘法算子。设 $\psi \in C^\infty(\Omega)$，由 $\psi$ 决定一个乘法算子
> $$A: \varphi \mapsto \psi\cdot\varphi \quad (\forall\varphi \in \mathscr{D}(\Omega)),$$
> 那么 $A$ 是连续线性的。
>
> > [!proof]- 证
> > 因为 $\forall$ 相对紧集 $K \subset \Omega$，$A: \mathscr{D}_K \to \mathscr{D}_K$，且
> > $$\begin{aligned}\|\psi\cdot\varphi\|_m &= \sum_{|\alpha|\le m} \max_{x\in K} |\partial^\alpha(\psi\cdot\varphi)(x)|\\
> > &\le \sum_{|\alpha|\le m} \max_{x\in K} \left| \sum_{\beta\le\alpha} \binom{\alpha}{\beta} \partial^\beta \psi(x) \cdot \partial^{\alpha-\beta} \varphi(x) \right|\\
> > &\le C(m,\psi)\,\|\varphi\|_m.\end{aligned}$$

在 $\mathscr{D}'(\Omega)$ 上定义算子 $A^*$ 如下：
$$\langle A^*f, \varphi\rangle = \langle f, A\varphi\rangle \quad (\forall\varphi \in \mathscr{D}(\Omega),\ \forall f \in \mathscr{D}'(\Omega)).$$
显然，$A^*: \mathscr{D}'(\Omega) \to \mathscr{D}'(\Omega)$ 并且是连续的。事实上，如果 $f_j \to f$ $(\mathscr{D}'(\Omega))$, $j\to\infty$，那么对 $\forall\varphi \in \mathscr{D}(\Omega)$，有
$$\langle A^* f_j, \varphi\rangle = \langle f_j, A\varphi\rangle \to \langle f, A\varphi\rangle = \langle A^* f, \varphi\rangle \quad (j\to\infty),$$
即得 $A^* f_j \to A^* f$, $j\to\infty$。

按照这种方式我们来定义广义函数的各种运算。

### 3.1 广义微商

> [!definition] 定义 4.3.3
> 称 $\tilde{\partial}^\alpha=(-1)^{|\alpha|}(\partial^\alpha)^*$ 为 $\alpha$ 阶广义微商运算，即 $\forall f\in\mathscr{D}'(\Omega)$，
> $\langle\tilde{\partial}^\alpha f,\varphi\rangle=(-1)^{|\alpha|}\langle f,\partial^\alpha\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\Omega))$。

> [!remark] 注 1
> 若 $f(x)\in C^1(\Omega)$，依自然对应：
> $\langle f,\varphi\rangle=\int_\Omega f(x)\varphi(x)\,dx\;(\forall\varphi\in\mathscr{D}(\Omega))$
> 产生的广义函数仍然记作 $f$，$f$ 有广义微商 $\tilde{\partial}_{x_i}f$（即 $\tilde{\partial}^\alpha f$，$\alpha=(0,\ldots,0,1,0,\ldots,0)$），同时 $f(x)$ 有普通的微商 $\partial_{x_i}f$，我们说 $\tilde{\partial}_{x_i}f$ 正是 $\partial_{x_i}f$ 对应的广义函数。这是因为
> $\langle\tilde{\partial}_{x_i}f,\varphi\rangle=-\langle f,\partial_{x_i}\varphi\rangle=-\int_\Omega f(x)\partial_{x_i}\varphi(x)\,dx$
> $=\int_\Omega\partial_{x_i}f(x)\varphi(x)\,dx\;(\forall\varphi\in\mathscr{D}(\Omega))$。

> [!remark] 注 2
> 广义函数对微商运算是封闭的，即任意广义函数 $f\in\mathscr{D}'(\Omega)$ 都可以做任意次广义微商。当然，即使是局部可积函数，也未必能做普通微商，但当把它看作广义函数时，总可以做广义微商，做广义微商后所得的是广义函数，未必是普通函数。

> [!remark] 注 3
> 若 $\alpha,\beta$ 是任意两个多重指标，则
> $$\tilde{\partial}^\alpha\cdot\tilde{\partial}^\beta=\tilde{\partial}^{\alpha+\beta}=\tilde{\partial}^\beta\cdot\tilde{\partial}^\alpha.$$

> [!remark] 注 4
> 由 $\tilde{\partial}^\alpha$ 的连续性，
> $$f_j\to f_0\;(j\to\infty)\implies\tilde{\partial}^\alpha f_j\to\tilde{\partial}^\alpha f_0\;(j\to\infty),$$
> 可见广义微商与极限总是可交换的。

> [!theorem] 公式 4.3.4
> 若
> $$
> Y(x)=\begin{cases}
> 1, & x>0,\\
> 0, & x\le 0,
> \end{cases}
> $$
> 则
> $$\tilde{\partial}_x Y(x)=\delta(x).$$

> [!proof]- 证
> $\langle\tilde{\partial}_x Y,\varphi\rangle=-\langle Y,\partial_x\varphi\rangle=-\int_0^\infty\varphi'(x)\,dx$
> $=\varphi(0)=\langle\delta,\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\mathbb{R}))$.

> [!theorem] 公式 4.3.5
> 若 $\delta^{(\alpha)}$ 是例 4.1.9 引进的广义函数，则
> $$\tilde{\partial}^\alpha\delta=\delta^{(\alpha)}.$$

> [!proof]- 证
> $\langle\tilde{\partial}^\alpha\delta,\varphi\rangle=(-1)^{|\alpha|}\langle\delta,\partial^\alpha\varphi\rangle$
> $=(-1)^{|\alpha|}(\partial^\alpha\varphi)(\theta)=\langle\delta^{(\alpha)},\varphi\rangle$.

> [!theorem] 公式 4.3.6
> 设 $\tilde{\Delta}=\tilde{\partial}_{x_1}^2+\cdots+\tilde{\partial}_{x_n}^2$，那么
> $$\begin{aligned}
> \tilde{\Delta}|x|^{2-n}&=(2-n)\Omega_n\delta(x) && (n\ge 3),\\
> \tilde{\Delta}\ln|x|&=2\pi\delta(x) && (n=2),
> \end{aligned}$$
> 其中 $\Omega_n$ 是 $\mathbb{R}^n$ 中单位球面的面积。

> [!proof]- 证
> (1) 当 $n\ge 3$ 时，$\forall\varphi\in\mathscr{D}(\mathbb{R}^n)$，我们有
> 
> $\langle\tilde{\Delta}|x|^{2-n},\varphi\rangle=\langle|x|^{2-n},\Delta\varphi\rangle=\lim_{\varepsilon\to 0}\int_{|x|\ge\varepsilon}|x|^{2-n}\Delta\varphi(x)\,dx$
> 
> $\xrightarrow{\text{Green公式}}\lim_{\varepsilon\to 0}\bigl[\int_{|x|\ge\varepsilon}\Delta|x|^{2-n}\varphi(x)\,dx$
> $+\int_{|x|=\varepsilon}\bigl(\varphi\frac{\partial|x|^{2-n}}{\partial r}-r^{2-n}\frac{\partial\varphi}{\partial r}\bigr)\,d\sigma\bigr]$，
> 
> 其中 $d\sigma$ 是球面 $\{x\in\mathbb{R}^n\mid|x|=\varepsilon\}$ 上的面积元，$r=|x|$。上式之所以成立是由于 $\varphi$ 具有紧支集，所以可以取一充分大的球 $B(\theta,R)=\{x\in\mathbb{R}^n\mid|x|<R\}$，使得 $\operatorname{supp}(\varphi)\subset B(\theta,R)$，再应用 Green 公式。
> 
> 注意到
> 
> $\Delta|x|^{2-n}=0$（当 $|x|\neq 0$），
> $\varepsilon^{2-n}\int_{|x|=\varepsilon}\frac{\partial\varphi}{\partial r}\,d\sigma=O(\varepsilon)\to 0$（当 $\varepsilon\to 0$），
> 
> 而
> 
> $\varepsilon^{1-n}\int_{|x|=\varepsilon}\varphi(x)\,d\sigma\to\varphi(0)\Omega_n$（当 $\varepsilon\to 0$），
> 
> 即得
> 
> $\langle\Delta|x|^{2-n},\varphi\rangle=(2-n)\varphi(0)\Omega_n$
> $=(2-n)\Omega_n\langle\delta,\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^n))$.
> 
> (2) 同样方法证明
> 
> $\langle\Delta\ln|x|,\varphi\rangle=2\pi\langle\delta,\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^2))$.

### 3.2 广义函数的乘法

对于任意的 $\psi\in C^\infty(\Omega)$，以及 $f\in\mathscr{D}'(\Omega)$，定义

$$\langle\psi f,\varphi\rangle=\langle f,\psi\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\Omega)),$$

即定义广义函数对 $C^\infty(\Omega)$ 函数的乘法为 $\mathscr{D}(\Omega)$ 上乘法算子的共轭算子。显然它也是连续算子。

> [!theorem] 公式 4.3.7
> $$
> x^n\tilde{\partial}^m\delta(x)=\begin{cases}
> (-1)^n\dfrac{m!}{(m-n)!}\delta^{(m-n)}(x), & m\ge n,\\[10pt]
> 0, & m<n.
> \end{cases}
> $$

> [!proof]- 证
> $\langle x^n\tilde{\partial}^m\delta(x),\varphi(x)\rangle=(-1)^m\langle\delta(x),\partial^m(x^n\varphi(x))\rangle$
> 
> $\displaystyle=(-1)^m\sum_{r=0}^m C_m^r(\partial^r x^n)(\partial^{m-r}\varphi(x))|_{x=0}$
> 
> $=\begin{cases}
> (-1)^m\bigl[\dfrac{m!}{n!(m-n)!}\bigr]n!(\partial^{m-n}\varphi)(0), & m\ge n,\\[10pt]
> 0, & m<n
> \end{cases}$
> 
> $=\begin{cases}
> (-1)^n\dfrac{m!}{(m-n)!}\langle\delta^{(m-n)}(x),\varphi\rangle, & m\ge n,\\[10pt]
> 0, & m<n.
> \end{cases}$

容易看出，当 $f\in L^1_{\mathrm{loc}}(\Omega)$ 时，对 $\forall\psi\in C^\infty(\Omega)$，$\psi f$ 的通常定义与作为广义函数的定义是一致的。

> [!remark] 注
> 一般不能定义两个广义函数的乘积，特别是两个 $\delta$ 函数相乘，因其结果不再是广义函数。

### 3.3 平移算子与反射算子

$\forall x_0\in\mathbb{R}^n$，定义 $\tau_{x_0}:\mathscr{D}(\mathbb{R}^n)\to\mathscr{D}(\mathbb{R}^n)$ 为

$$(\tau_{x_0}\varphi)(x)=\varphi(x-x_0)\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)),$$

我们称 $\tau_{x_0}$ 为平移算子。易见 $\tau_{x_0}\in\mathcal{L}(\mathscr{D}(\mathbb{R}^n))$。

> [!definition] 定义 4.3.8
> $\forall x_0\in\mathbb{R}^n$，$\tilde{\tau}_{x_0}\triangleq(\tau_{-x_0})^*$，即对 $\forall f\in\mathscr{D}'(\mathbb{R}^n)$，有
> $$\langle\tilde{\tau}_{x_0}f,\varphi\rangle=\langle f,\tau_{-x_0}\varphi\rangle=\langle f,\varphi(x+x_0)\rangle\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)).$$

> [!remark] 注
> $\tilde{\tau}_{x_0}$ 是平移算子的推广。事实上，若 $f(x)\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$，则对 $\forall x_0\in\mathbb{R}^n$，有
> $$\begin{aligned}
> \int_{\mathbb{R}^n}f(x-x_0)\varphi(x)\,dx&=\int_{\mathbb{R}^n}f(x)\varphi(x+x_0)\,dx\\
> &=\langle f,\tau_{-x_0}\varphi\rangle=\langle\tilde{\tau}_{x_0}f,\varphi\rangle\\
> &(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)),
> \end{aligned}$$
> 即得 $\tilde{\tau}_{x_0}f=f(x-x_0)=\tau_{x_0}f$.

$\forall x\in\mathbb{R}^n$ 定义 $\sigma:\mathscr{D}(\mathbb{R}^n)\to\mathscr{D}(\mathbb{R}^n)$ 为

$$(\sigma\varphi)(x)=\varphi(-x)\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)),$$

我们称 $\sigma$ 为反射算子。易见 $\sigma\in\mathcal{L}(\mathscr{D}(\mathbb{R}^n))$。

> [!definition] 定义 4.3.9
> $\tilde{\sigma}\triangleq\sigma^*$。即对 $\forall f\in\mathscr{D}'(\mathbb{R}^n)$，有
> $$\langle\tilde{\sigma}f,\varphi\rangle=\langle\sigma^*f,\varphi\rangle=\langle f,\sigma\varphi\rangle\;(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)).$$

> [!remark] 注
> $\tilde{\sigma}$ 是反射算子的推广。事实上，若 $f(x)\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$，则有
> $$\begin{aligned}
> \int_{\mathbb{R}^n}f(-x)\varphi(x)\,dx&=\int_{\mathbb{R}^n}f(x)\varphi(-x)\,dx\\
> &=\langle f,\sigma\varphi\rangle=\langle\tilde{\sigma}f,\varphi\rangle\\
> &(\forall\varphi\in\mathscr{D}(\mathbb{R}^n)),
> \end{aligned}$$
> 即得 $\tilde{\sigma}f=f(-x)=\sigma f$.

> [!exercise] 习 题

> [!exercise] 4.3.1
> 计算：
> (1) $\tilde{\partial}_x^n|x|$；
> (2) $\tilde{\partial}^n x_+^\lambda\;(\lambda\in\mathbb{R},\lambda\ge 0)$，其中
> $$
> x_+^\lambda=\begin{cases}
> x^\lambda, & x>0,\\
> 0, & x\le 0.
> \end{cases}
> $$

> [!exercise] 4.3.2
> 求证：
> $$\frac{\tilde{d}}{dx}\ln|x|=\mathrm{P.V.}(1/x),$$
> 即
> $$\bigl\langle\frac{\tilde{d}}{dx}\ln|x|,\varphi\bigr\rangle=\lim_{\varepsilon\to 0+}\int_{|x|\ge\varepsilon}\frac{\varphi(x)}{x}\,dx\;(\forall\varphi\in\mathscr{D}(\mathbb{R})).$$

> [!exercise] 4.3.3
> 设 $\Omega=(\alpha,\beta)\subset\mathbb{R}$，$x_0\in\Omega$，又设 $f\in C^1(\Omega\setminus\{x_0\})$，$x_0$ 是 $f$ 的第一类间断点且 $f'$ 在 $\Omega\setminus\{x_0\}$ 内有界。求证：
> $$\frac{\tilde{d}}{dx}f=f'+(f(x_0+0)-f(x_0-0))\delta(x_0).$$

> [!exercise] 4.3.4
> 求证：对 $\forall f\in\mathscr{D}'(\mathbb{R}^n)$ 有
> $$\tilde{\partial}_{x_i}f=\lim_{h\to 0}\frac{1}{h}(\tilde{\tau}_{-he_i}f-f),$$
> 其中
> $$e_i=(0,\cdots,0,\underset{i}{1},0,\cdots,0)\;(i=1,2,\cdots,n).$$

> [!exercise] 4.3.5
> 求证：对 $\forall f\in\mathscr{D}'(\mathbb{R}^n)$，以及 $\forall\varphi\in\mathscr{D}(\mathbb{R}^n)$，函数
> $$g(y)=\langle f,\tau_{-y}\varphi\rangle\in C^\infty(\mathbb{R}^n).$$

> [!exercise] 4.3.6
> 求证：每个 $f\in\mathscr{S}'$ 必是 $L^2(\mathbb{R}^n)$ 函数乘以多项式的广义微商之有限和，即 $\exists u_\alpha\in L^2(\mathbb{R}^n)$ 及偶数 $m$，使得
> $$f=(-1)^{|\alpha|}\sum_{|\alpha|\le m}\tilde{\partial}^\alpha\bigl[(1+|x|^2)^{m/2}u_\alpha\bigr].$$
> 
> 提示 利用 (4.2.7) 式。(4.2.7) 式中的 $m$ 可以认为是偶数，这是因为必要的话可在 (4.2.6) 式中用 $2m$ 取代 $m$.

## §4  𝒮' 上的 Fourier 变换

对于 $\varphi\in L^1(\mathbb{R}^n)$, $\varphi$ 的 Fourier 变换定义如下:

$$(\mathscr{F}\varphi)(\xi)=\int_{\mathbb{R}^n}\varphi(x)\exp(-2\pi i x\cdot\xi)dx,\qquad(4.4.1)$$

其中 $x\cdot\xi=x_1\xi_1+x_2\xi_2+\cdots+x_n\xi_n$.
熟悉分析的人都知道，Fourier 变换无论是在理论上还是在应用上都是十分重要的工具。但是，能定义 Fourier 变换的函数实在受限制太强了。一般的 $L^p(\mathbb{R}^n)(p>1)$ 函数未必在 $L^1(\mathbb{R}^n)$ 中，从而积分 (4.4.1) 可能没有意义。最简单的函数 $\varphi(x)\equiv 1$（或更一般的多项式），更无从使 (4.4.1) 式的积分收敛。引进广义函数的另一重要推动力是扩大 Fourier 变换的定义，使得这个重要工具能够方便而又灵活地运用。

> [!proposition] 命题 4.4.1
> $\mathscr{F}\in\mathscr{L}(\mathscr{S})$。

> [!proof]-
> 注意以下两个事实：
>
> (1) $\mathscr{F}(\partial^\alpha\varphi)=(2\pi\mathrm{i}\xi)^\alpha(\mathscr{F}\varphi)(\xi)$，
>
> (2) $\mathscr{F}((-2\pi\mathrm{i}x)^\alpha\varphi)(\xi)=\partial^\alpha(\mathscr{F}\varphi)(\xi)$，
>
> 便有
>
> $$\begin{aligned}\|\mathscr{F}\varphi\|_m&=\sup_{\substack{\xi\in\mathbb{R}^n\\|\alpha|\leqslant m}}(1+|\xi|^2)^{\frac{m}{2}}|\partial^\alpha(\mathscr{F}\varphi)(\xi)|\\&=\sup_{\substack{\xi\in\mathbb{R}^n\\|\alpha|\leqslant m}}\left|\left(\mathscr{F}\left[\left(1-\frac{\Delta}{4\pi^2}\right)^{\frac{m}{2}}(-2\pi\mathrm{i}x)^\alpha\varphi\right]\right)(\xi)\right|\\&\leqslant\sup_{|\alpha|\leqslant m}\int_{\mathbb{R}^n}\left|\left(1-\frac{\Delta}{4\pi^2}\right)^{\frac{m}{2}}(-2\pi\mathrm{i}x)^\alpha\varphi\right|\mathrm{d}x\\&\leqslant\sup_{|\alpha|\leqslant m}\sum_{\substack{p\leqslant\alpha\\q\leqslant m}}A_{\alpha,p,q}\int_{\mathbb{R}^n}|x^p\partial^q\varphi|\mathrm{d}x\\&\leqslant M_m\sup_{\substack{x\in\mathbb{R}^n\\|\alpha|\leqslant m}}(1+|x|^2)^{\frac{m}{2}+n}|\partial^\alpha\varphi(x)|\\&\leqslant M_m\|\varphi\|_{m+2n}\quad(m=2,4,6,\cdots),\end{aligned}$$
>
> 其中 $A_{\alpha,p,q}$ 及 $M_m$ 皆为常数。

称积分

$$(\overline{\mathscr{F}}\varphi)(\xi)=\int_{\mathbb{R}^n}\varphi(x)\exp(2\pi\mathrm{i}x\cdot\xi)\mathrm{d}x$$

为函数 $\varphi$ 的 Fourier 逆变换，或 Fourier 积分。

> [!proposition] 命题 4.4.2
> $\overline{\mathscr{F}}=\sigma\mathscr{F}$，从而 $\overline{\mathscr{F}}\in\mathscr{L}(\mathscr{S})$。

> [!proposition] 命题 4.4.3
> 若 $\varphi,\psi\in\mathscr{S}$，则
>
> $$\langle\mathscr{F}\varphi,\psi\rangle=\langle\varphi,\mathscr{F}\psi\rangle,\qquad(4.4.2)$$
>
> $$\langle\overline{\mathscr{F}}\varphi,\psi\rangle=\langle\varphi,\overline{\mathscr{F}}\psi\rangle.\qquad(4.4.3)$$

> [!proof]-
>
> $$\begin{aligned}\langle\mathscr{F}\varphi,\psi\rangle&=\int_{\mathbb{R}^n}\left[\int_{\mathbb{R}^n}\varphi(x)\exp(-2\pi\mathrm{i}x\cdot\xi)\mathrm{d}x\right]\psi(\xi)\mathrm{d}\xi\\&\xlongequal{\text{Fubini定理}}\int_{\mathbb{R}^n}\varphi(x)\left(\int_{\mathbb{R}^n}\exp(-2\pi\mathrm{i}x\cdot\xi)\psi(\xi)\mathrm{d}\xi\right)\mathrm{d}x\\&=\langle\varphi,\mathscr{F}\psi\rangle,\end{aligned}$$
>
> 即得 (4.4.2) 式。同理可证 (4.4.3) 式。

> [!definition] 定义 4.4.4
> 在空间 $\mathscr{S}'$ 上定义 $\widetilde{\mathscr{F}}=\mathscr{F}^*(\overline{\widetilde{\mathscr{F}}=(\overline{\mathscr{F}})^*})$，称为广义 Fourier（逆）变换。在不会引起混淆时，记号 $\sim$ 可以略去。有时为了方便，简记 $\mathscr{F}\varphi=\widehat{\varphi}$。

从定义 4.4.4 容易推出如下命题。

> [!proposition] 命题 4.4.5
> $\mathscr{F}\in\mathscr{L}(\mathscr{S}')$，$\overline{\mathscr{F}}\in\mathscr{L}(\mathscr{S}')$，而且当限制在 $\mathscr{S}$ 上时，它们分别与普通的 Fourier 变换、Fourier 逆变换一致。

关于 Fourier 变换，微商与乘法之间、平移与相移之间有着重要的联系，见表 4.4.1。在表中用 "$f\circ\text{——}\cdot g$" 表示 $g=\mathscr{F}f$ 或 $f=\overline{\mathscr{F}}g$。

**表 4.4.1**

| 编号 | 假设 |
|------|------|
| | $f\circ\text{——}\cdot g$ |
| (1) | $\widetilde{\partial}^\alpha f\circ\text{——}\cdot(2\pi\mathrm{i}\xi)^\alpha g$ |
| (2) | $(-2\pi\mathrm{i}x)^\alpha f\circ\text{——}\cdot\widetilde{\partial}^\alpha g$ |
| (3) | $\widetilde{\tau}_a f\circ\text{——}\cdot\exp(-2\pi\mathrm{i}a\cdot\xi)g$ |
| (4) | $\exp(2\pi\mathrm{i}a\cdot x)f\circ\text{——}\cdot\widetilde{\tau}_a g$ |

**公式 4.4.6**　$\mathscr{F}(\exp(-\pi|x|^2))=\exp(-\pi|\xi|^2)$。

> [!proof]-
> 设 $n=1$，令 $f(x)=\exp(-\pi x^2)$，便有
>
> $$f'(x)+2\pi xf(x)=0,\quad f(0)=1.$$
>
> 在方程两边做 Fourier 变换，有
>
> $$\begin{aligned}&2\pi\mathrm{i}\xi(\mathscr{F}f)(\xi)+\mathrm{i}(\mathscr{F}f)'(\xi)=0,\\&(\mathscr{F}f)(0)=\int_{-\infty}^{\infty}\exp(-\pi x^2)\mathrm{d}x=1,\end{aligned}$$
>
> 即 $\mathscr{F}f$ 与 $f$ 满足同一方程，且具有相同初值，利用常微分方程初值问题解的唯一性，可得
>
> $$(\mathscr{F}f)(\xi)=f(\xi)=\exp(-\pi|\xi|^2)\quad(\forall\xi\in\mathbb{R}).$$
>
> 对于任意的 $n\in\mathbb{N}$，利用分离变量立得如下公式。

**公式 4.4.7**　$\mathscr{F}\delta=1$，$\overline{\mathscr{F}}\delta=1$。

> [!proof]-
> 因为 $\forall\varphi\in\mathscr{S}$，
>
> $$\langle\mathscr{F}\delta,\varphi\rangle=\langle\delta,\mathscr{F}\varphi\rangle=(\mathscr{F}\varphi)(0)=\int_{\mathbb{R}^n}\varphi(x)\mathrm{d}x=\langle1,\varphi\rangle.$$

**公式 4.4.8**　$\mathscr{F}(1)=\delta$，$\overline{\mathscr{F}}(1)=\delta$。

> [!proof]-
> 由公式 4.4.6 可见
>
> $$\mathscr{F}\left[\exp\left(-\pi\frac{|x|^2}{m}\right)\right]=m^{\frac{n}{2}}\exp(-m\pi|\xi|^2).$$
>
> 当令 $m\to\infty$ 时，
>
> $$\exp\left(-\pi\frac{|x|^2}{m}\right)\to1\quad(\mathscr{S}'),$$
>
> 而
>
> $$m^{\frac{n}{2}}\exp(-m\pi|\xi|^2)\to\delta\quad(\mathscr{S}').$$
>
> 由 $\mathscr{F}$ 的连续性即得 $\mathscr{F}(1)=\delta$。同理可证另一个公式。

**公式 4.4.9**

(1) $\mathscr{F}(p(x))=p\left(\dfrac{\mathrm{i}}{2\pi}\widetilde{\partial}\right)\delta(\xi)$，其中 $p(\cdot)$ 表示多项式；

(2) $\mathscr{F}(\widetilde{\partial}^\alpha\delta)=(2\pi\mathrm{i}\xi)^\alpha$。

> [!proof]-
> 表 4.4.1(2)+公式 4.4.8 $\Longrightarrow$ (1)。
>
> 表 4.4.1(1)+公式 4.4.7 $\Longrightarrow$ (2)。

> [!theorem] 定理 4.4.10
> $\overline{\mathscr{F}}=\mathscr{F}^{-1}$，即 $\overline{\mathscr{F}}\mathscr{F}=\mathscr{F}\overline{\mathscr{F}}=I$。

> [!proof]-
> $\forall\varphi\in\mathscr{S}$，$\forall y\in\mathbb{R}^n$，
>
> $$\begin{aligned}\varphi(y)&=\langle\delta,\tau_{-y}\varphi\rangle=\langle\widetilde{\tau}_y\delta,\varphi\rangle\\&=\langle\mathscr{F}(\exp(2\pi\mathrm{i}\xi\cdot y)),\varphi\rangle\quad(\text{表 4.4.1(4)})\\&=\langle\exp(2\pi\mathrm{i}\xi\cdot y),(\mathscr{F}\varphi)(\xi)\rangle\\&=\int_{\mathbb{R}^n}\exp(2\pi\mathrm{i}\xi\cdot y)(\mathscr{F}\varphi)(\xi)\mathrm{d}\xi=(\overline{\mathscr{F}}\mathscr{F}\varphi)(y),\end{aligned}$$
>
> 即得 $\varphi=\overline{\mathscr{F}}\mathscr{F}\varphi$。同理可证 $\varphi=\mathscr{F}\overline{\mathscr{F}}\varphi$。于是对 $\forall f\in\mathscr{S}'$，我们有
>
> $$\begin{aligned}&\langle\mathscr{F}\overline{\mathscr{F}}f,\varphi\rangle=\langle f,\overline{\mathscr{F}}\mathscr{F}\varphi\rangle=\langle f,\varphi\rangle\quad(\forall\varphi\in\mathscr{S}),\\&\langle\overline{\mathscr{F}}\mathscr{F}f,\varphi\rangle=\langle f,\mathscr{F}\overline{\mathscr{F}}\varphi\rangle=\langle f,\varphi\rangle\quad(\forall\varphi\in\mathscr{S}).\end{aligned}$$
>
> 即得 $\overline{\mathscr{F}}=\mathscr{F}^{-1}$。

> [!corollary] 推论 4.4.11（Plancherel 定理）
> 若 $f\in L^2$，则 $\widetilde{\mathscr{F}}f\in L^2$，并且
>
> $$\|f\|_{L^2}=\|\widetilde{\mathscr{F}}f\|_{L^2}\quad(\widetilde{\mathscr{F}}\text{ 保持范数不变}).\qquad(4.4.4)$$

> [!proof]-
> 因为对 $\forall\varphi\in\mathscr{S}$ 有
>
> $$\|\varphi\|_{L^2}^2=\langle\varphi,\overline{\varphi}\rangle=\langle\overline{\mathscr{F}}\mathscr{F}\varphi,\overline{\varphi}\rangle=\langle\mathscr{F}\varphi,\overline{\mathscr{F}}\overline{\varphi}\rangle=\|\mathscr{F}\varphi\|_{L^2}^2,$$
>
> 而 $\mathscr{S}$ 在 $L^2$ 中稠密（见习题 4.1.1），所以对 $\forall f\in L^2$，$\exists\{\varphi_m\}\subset\mathscr{S}$，使得
>
> $$\|\varphi_m-f\|_{L^2}\to0\quad(m\to\infty).$$
>
> 于是对 $\forall p\in\mathbb{N}$，我们有
>
> $$\|\mathscr{F}\varphi_{m+p}-\mathscr{F}\varphi_m\|_{L^2}\to0\quad(m\to\infty),$$
>
> 即 $\{\mathscr{F}\varphi_m\}_{m=1}^\infty$ 是 $L^2$ 中的基本列。由于 $\mathscr{F}$ 在 $\mathscr{S}'$ 中连续以及 $L^2\hookrightarrow\mathscr{S}'$，可见
>
> $$\widetilde{\mathscr{F}}f=\lim_{m\to\infty}\mathscr{F}\varphi_m\,(L^2).$$
>
> 这表明 $\widetilde{\mathscr{F}}f\in L^2$，并且
>
> $$\|\widetilde{\mathscr{F}}f\|_{L^2}=\lim_{m\to\infty}\|\mathscr{F}\varphi_m\|_{L^2}=\lim_{m\to\infty}\|\varphi_m\|_{L^2}=\|f\|_{L^2}.$$

> [!remark]
> 根据习题 1.6.1（极化恒等式）与本推论可以容易推出：若 $f,g\in L^2$，则
>
> $$(f,g)_{L^2}=(\widetilde{\mathscr{F}}f,\widetilde{\mathscr{F}}g)_{L^2}\quad(\widetilde{\mathscr{F}}\text{ 保持内积不变}).\qquad(4.4.5)$$

**习 题**

> [!exercise] 4.4.1
> 设 $H^m(\mathbb{R}^n)=\{u\in\mathscr{S}'\,|\,\widetilde{\partial}^\alpha u\in L^2(\mathbb{R}^n)\,(|\alpha|\leqslant m)\}$，其中范数定义为
>
> $$\|u\|_m=\left(\sum_{|\alpha|\leqslant m}\|\widetilde{\partial}^\alpha u\|_{L^2}^2\right)^{\frac{1}{2}}.$$
>
> 又对 $\forall u\in H^m(\mathbb{R}^n)$，定义
>
> $$\|u\|'_m=\left(\int_{\mathbb{R}^n}(1+|\xi|^2)^m\,|(\mathscr{F}u)(\xi)|^2\mathrm{d}\xi\right)^{\frac{1}{2}},$$
>
> 求证：(1) $\|u\|'_m<\infty$；
>
> (2) $\|\cdot\|'_m$ 是 $H^m(\mathbb{R}^n)$ 的等价范数；
>
> (3) $H^m(\mathbb{R}^n)$ 是完备的。

> [!exercise] 4.4.2
> 对任意的非负实数 $s$，设
>
> $$H^s(\mathbb{R}^n)\triangleq\{u\in L^2(\mathbb{R}^n)\,|\,(1+|\xi|^2)^{s/2}\widehat{u}(\xi)\in L^2(\mathbb{R}^n)\},$$
>
> 其中范数定义为
>
> $$\|u\|_s=\|(1+|\xi|^2)^{s/2}\widehat{u}(\xi)\|_{L^2}.$$
> 求证：(1) 当 $s=m\in\mathbb{N}$ 时，这种定义与原来 $H^m(\mathbb{R}^n)$ 的定义等价；
> (2) $H^s(\mathbb{R}^n)$ 中可引进内积 $(\cdot,\cdot)$，使得 $\|u\|_s=(u,u)^{1/2}$；
> (3) 设 $u\in H^s(\mathbb{R}^n)'$，求证：存在 $\widetilde{u}\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$，使得
>     $\widetilde{u}(\xi)(1+|\xi|^2)^{-s/2}\in L^2(\mathbb{R}^n)$，
> 并且
>     $\langle u,\mathscr{F}\varphi\rangle=\int_{\mathbb{R}^n}\varphi(\xi)\cdot\widetilde{u}(\xi)d\xi$ $(\forall\varphi\in\mathscr{S}')$.

> [!exercise] 4.4.3
> 设 $f(x)\in L^1(\mathbb{R}^n)$，求证：
>     $(\mathscr{F}\widetilde{f})(\xi)=\int_{\mathbb{R}^n}f(x)e^{-2\pi i x\cdot\xi}dx$，
> 即 $f(x)$ 按 $\mathscr{S}'$ 的 Fourier 变换与普通的 Fourier 变换一致.

> [!exercise] 4.4.4
> 求证：方程 $\Delta f=f$ 在 $\mathscr{S}'(\mathbb{R}^n)$ 中无非零解.

## §5 Sobolev 空间与嵌入定理

> [!definition] 定义 4.5.1
> 设 $\Omega\subset\mathbb{R}^n$ 是一个开集，$m$ 是非负整数，$1\leq p<\infty$，称集合
>     $W^{m,p}(\Omega)=\{u\in L^p(\Omega)|\widetilde{\partial}^\alpha u\in L^p(\Omega),|\alpha|\leq m\}$
> 按范数
> $$
> \|u\|_{m,p}=(\sum_{|\alpha|\leq m}\|\widetilde{\partial}^\alpha u\|_{L^p(\Omega)}^p)^{1/p}
> =(\sum_{|\alpha|\leq m}\int_\Omega|\widetilde{\partial}^\alpha u(x)|^p dx)^{1/p}
> $$
> 构成的空间为 Sobolev 空间，记作 $W^{m,p}(\Omega)$ 或 $W_p^m(\Omega)$.

> [!theorem] 定理 4.5.2
> 空间 $W^{m,p}(\Omega)$ 是完备的.

> [!proof]-
> 设 $\{u_k\}_{k=1}^\infty$ 是 $W^{m,p}(\Omega)$ 中的基本列，那么 $\{\widetilde{\partial}^\alpha u_k\}$ 是 $L^p(\Omega)$ 中的基本列. $\forall\alpha(|\alpha|\leq m)$，由 $L^p(\Omega)$ 的完备性，$\exists g_\alpha\in L^p(\Omega)$，使得
>     $\|\widetilde{\partial}^\alpha u_k-g_\alpha\|_{L^p(\Omega)}\to0$ $(k\to\infty)$ $(|\alpha|\leq m)$.
> 从而 $\forall\varphi\in\mathscr{D}(\Omega)$，当 $k\to\infty$ 时，
>     $\langle\widetilde{\partial}^\alpha u_k,\varphi\rangle=(-1)^{|\alpha|}\langle u_k,\partial^\alpha\varphi\rangle$
>     $\downarrow$              $\downarrow$
>     $\langle g_\alpha,\varphi\rangle$    $(-1)^{|\alpha|}\langle g_0,\partial^\alpha\varphi\rangle$
> 即得 $g_\alpha=\widetilde{\partial}^\alpha g_0$. 由此推出 $g_0\in W^{m,p}(\Omega)$，且
>     $\|u_k-g_0\|_{m,p}\to0$ $(k\to\infty)$.  $\blacksquare$

> [!theorem] 定理 4.5.3
> $\mathscr{D}(\mathbb{R}^n)$ 在 $W^{m,p}(\mathbb{R}^n)$ 中是稠密的.

> [!proof]-
> 设 $u\in W^{m,p}(\mathbb{R}^n)$，即 $\widetilde{\partial}^\alpha u\in L^p(\mathbb{R}^n)(|\alpha|\leq m)$. 我们对 $\forall\delta>0$，令
>     $u_\delta(x)=\int_{\mathbb{R}^n}u(y)\cdot j_\delta(x-y)dy$,         (4.5.1)
> 其中 $j_\delta$ 是按 (4.1.2) 式定义的函数. 稍稍修饰命题 4.1.2 的证明，即得 $u_\delta\in C^\infty(\mathbb{R}^n)$，并且
> $$
> \begin{aligned}
> \partial_x^\alpha u_\delta(x)&=\int_{\mathbb{R}^n}u(y)\cdot\partial_x^\alpha j_\delta(x-y)dy\\
> &=(-1)^{|\alpha|}\int_{\mathbb{R}^n}u(y)\cdot\partial_y^\alpha j_\delta(x-y)dy\\
> &=\int_{\mathbb{R}^n}\widetilde{\partial}^\alpha u(y)\cdot j_\delta(x-y)dy,
> \end{aligned}
> $$
> 即 $\partial^\alpha u_\delta=(\widetilde{\partial}^\alpha u)_\delta$. 应用 Young 不等式（引理 2.5.14），$\forall v\in L^p(\mathbb{R}^n)$ 有
>     $\|v_\delta\|_{L^p}\leq\|v\|_{L^p}$.             (4.5.2)
>
> 然而 $L^p(\mathbb{R}^n)$ 函数可以被 $C_0^0(\mathbb{R}^n)$ 函数任意逼近. 对 $\widetilde{\partial}^\alpha u\in L^p(\mathbb{R}^n)$，即有 $\forall\varepsilon>0$，$\exists v_\alpha\in C_0^0(\mathbb{R}^n)$，使得
>     $\|v_\alpha-\widetilde{\partial}^\alpha u\|_{L^p}<\varepsilon/3$.           (4.5.3)
> 按 (4.5.2) 式得
>     $\|(v_\alpha)_\delta-(\widetilde{\partial}^\alpha u)_\delta\|_{L^p}<\varepsilon/3$.   (4.5.4)
> 再应用定理 4.1.3，$\exists\delta_0=\delta_0(\varepsilon,\alpha)>0$，当 $0<\delta<\delta_0$ 时，
>     $\|(v_\alpha)_\delta-v_\alpha\|_{L^p}<\varepsilon/3$          (4.5.5)
> （注意：$\mathrm{supp}(v_\alpha)$ 是紧的）. 联合 (4.5.3) 式、(4.5.4) 式与 (4.5.5) 式得
>     $\|(\widetilde{\partial}^\alpha u)_\delta-\widetilde{\partial}^\alpha u\|_{L^p}<\varepsilon$，
> 即 $\|\partial^\alpha u_\delta-\widetilde{\partial}^\alpha u\|_{L^p}<\varepsilon$ $(|\alpha|\leq m)$.  $\blacksquare$

> [!remark]
> 如果用 $W_0^{m,p}(\mathbb{R}^n)$ 表示 $C_0^\infty(\mathbb{R}^n)$ 按范数 $\|\cdot\|_{m,p}$ 完备化产生的空间，则依此定理有
>     $W_0^{m,p}(\mathbb{R}^n)=W^{m,p}(\mathbb{R}^n)$.
> 但是对于一般的开集 $\Omega$，$W_0^{m,p}(\Omega)=W^{m,p}(\Omega)$ 未必成立.

在第一章，我们曾把 $H^{m,p}(\Omega)$ 定义为集合
    $S\triangleq\{u\in C^\infty(\Omega)\mid\|u\|_{m,p}<\infty\}$       (4.5.6)
在范数 $\|\cdot\|_{m,p}$ 下的完备化空间，并把它称为 Sobolev 空间. 现在我们又称 $W^{m,p}(\Omega)$ 为 Sobolev 空间，它们之间究竟有什么关系？
定理 4.5.2 表明：$H^{m,p}(\Omega)\subset W^{m,p}(\Omega)$. 其实还可以证明它们二者等价. 这要用到一个在微分流形中重要的 $C^\infty$ 单位分解定理.

> [!theorem] 定理 4.5.4
> 若 $A\subset\mathbb{R}^n$，而且 $\mathscr{O}$ 是 $A$ 的一个开覆盖，那么必有一族 $C^\infty$ 函数 $\mathscr{F}$，使得 $\forall\varphi\in\mathscr{F}$ 定义在包含 $A$ 的一个开集上，具有下列性质：
> (1) $0\leq\varphi(x)\leq1$ $(\forall x\in A)$；
> (2) $\forall x\in A$，$\exists$ 含 $x$ 的开集 $V$，使得只有有穷多个 $\varphi\in\mathscr{F}$ 在其上非零；
> (3) $\sum_{\varphi\in\mathscr{F}}\varphi(x)\equiv1$ $(\forall x\in A)$；
> (4) $\forall\varphi\in\mathscr{F}$，$\exists U\in\mathscr{O}$，使得 $\mathrm{supp}(\varphi)\subset U$.

这个定理的证明在许多关于微分流形的教科书上都可以找到.

> [!theorem] 定理 4.5.5 (Meyers-Serrin)
> 若 $1\leq p<\infty$，则
>     $H^{m,p}(\Omega)=W^{m,p}(\Omega)$.

> [!proof]-
> 只需证明 (4.5.6) 式定义的集合 $S$ 在 $W^{m,p}(\Omega)$ 中是稠密的. 记
>     $\Omega_k\triangleq\{x\in\Omega\mid\|x\|<k\;\text{且}\; \mathrm{dist}(x,\partial\Omega)>1/k\}$
>           $(k=1,2,\cdots)$，
> 并记 $\Omega_0=\Omega_{-1}=\varnothing$，那么
>     $\mathscr{O}=\{U_k\mid U_k=\Omega_{k+1}\cap C\overline{\Omega}_{k-1},\;k=1,2,\cdots\}$
> 是 $\Omega$ 的一族开覆盖. 记 $\mathscr{F}$ 为 $C^\infty$ 单位分解定理 (定理 4.5.4) 中的关于 $\mathscr{O}$ 的一族 $C^\infty$ 函数. 注意到 $\overline{U}_k$ 是紧集，由 $C^\infty$ 单位分解定理 (定理 4.5.4) 的性质 (2)，$\mathscr{F}$ 中只有有限多个函数 $\varphi$，使得 $\mathrm{supp}(\varphi)\subset U_k$，记 $\psi_k$ 为这些函数之和，那么
>     $\psi_k\in C_0^\infty(U_k)$， 而且 $\sum_{k=1}^\infty\psi_k(x)\equiv1$ $(\forall x\in\Omega)$.
>
> 设 $u\in W^{m,p}(\Omega)$，$\forall\varepsilon>0$，下面要找 $S$ 中的函数 $\varphi$，使得
>     $\|u-\varphi\|_{m,p}\leq\varepsilon$.
>
> 当 $0<\delta<1/(k+1)(k+2)$ 时，用 (4.5.1) 式中定义的记号，可见
>     $\mathrm{supp}(\psi_k u)_\delta\subset\Omega_{k+2}\cap C\overline{\Omega}_{k-2}$.
> 按定理 4.5.3 证明中的办法可见，$\exists\delta_k\in(0,1/(k+1)(k+2))$，适合：
>     $\|\psi_k u-(\psi_k u)_{\delta_k}\|_{m,p}<\varepsilon/2^k$.
>
> 令 $\varphi=\sum_{k=1}^\infty(\psi_k u)_{\delta_k}$，因为对 $\forall x\in\Omega$，在 $x$ 的邻域这个和式中只有有限项不为 $0$，所以 $\varphi\in C^\infty(\Omega)$. 又 $\forall k\in\mathbb{N}$，在 $\Omega_k$ 上，
>     $u(x)=\sum_{j=1}^{k+2}\psi_j(x)u(x)$，
>     $\varphi(x)=\sum_{j=1}^{k+2}(\psi_j u)_{\delta_j}(x)$，
> 因此
>     $\|u-\varphi\|_{W^{m,p}(\Omega_k)}\leq\sum_{j=1}^{k+2}\|(\psi_j u)_{\delta_j}-\psi_j u\|_{m,p}<\varepsilon$.
> 再令 $k\to\infty$，即得 $\|u-\varphi\|_{m,p}\leq\varepsilon$. 显然可见 $\varphi\in S$，这就是我们所要的.  $\blacksquare$

> [!definition] 定义 4.5.6
> $\mathbb{R}^n$ 中的开区域 $\Omega$ 称为可扩张的，如果 $\forall m\in\mathbb{N}$，$\forall p\in[1,\infty]$，$\exists T:W^{m,p}(\Omega)\to W^{m,p}(\mathbb{R}^n)$ 是连续线性算子，并满足
>     $Tu|_\Omega=u$ $(\forall u\in W^{m,p}(\Omega))$.

> [!example] 例 4.5.7
> $\mathbb{R}_+^n=\{(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n\mid x_n>0\}$ 是可扩张的. 扩张算子构造如下：$\forall m\in\mathbb{N}$，$\forall u\in C^\infty(\mathbb{R}_+^n)$，我们定义
> $$
> E_m u(x)=\begin{cases}
> u(x),&\text{当 }x_n>0,\\
> \sum_{j=1}^{m+1}\lambda_j u(x_1,\cdots,x_{n-1},-jx_n),&\text{当 }x_n\leq0,
> \end{cases}
> $$
> 其中系数 $\lambda_1,\lambda_2,\cdots,\lambda_{m+1}$ 是下面的线性方程组
>
> $\sum_{j=1}^{m+1}(-j)^i\lambda_j=1$ $(i=0,1,\cdots,m)$
>
> 的唯一解. 不难验证: 如果 $u\in C^m(\overline{\mathbb{R}_+^n})$, 则 $E_m u\in C^m(\mathbb{R}^n)$, 并且
>
> $\|E_m u\|_{W^{m,p}(\mathbb{R}^n)}\leq M_{m,p}\|u\|_{W^{m,p}(\mathbb{R}_+^n)}$,
>
> 其中 $M_{m,p}$ 是一个常数.
>
> 利用习题 4.5.1, $E_m$ 可以连续地扩张到 $W^{m,p}(\mathbb{R}_+^n)$ 上去, 使 $\mathbb{R}_+^n$ 成为可扩张的. $\blacksquare$

> [!example] 例 4.5.8
> 若 $\Omega$ 是有界开区域, 具有一致 $C^m$ 光滑的边界, 则 $\Omega$ 也是可扩张的.
>
> 证明可参看 Adams R. A. 所著 Sobolev Spaces (New York: Academic Press, 1975) 中的定理 4.26, 此处从略. 更一般的结果参看 Stein E. M., Singular Integrals and Differentiability Properties of Functions (Princeton N. J.: Princeton University Press, 1970), p.189.

> [!theorem] 定理 4.5.9 (Sobolev 嵌入定理)
> 若 $\Omega\subset\mathbb{R}^n$ 是一个可扩张的区域, $m>n/2$, 则 $W^{m,2}(\Omega)$ 可以连续地嵌入 $C(\overline{\Omega})$.

> [!proof]-
> (1) 我们已经知道 (习题 4.4.1)
>
> $\|u\|'_m=(\int_{\mathbb{R}^n}(1+|\xi|^2)^m|\widehat{u}(\xi)|^2 d\xi)^{1/2}$
>
> 是 $W^{m,2}(\mathbb{R}^n)$ 的一个等价范数. 又因为 $L^1(\mathbb{R}^n)$ 函数的 Fourier (逆) 变换是连续函数, 并且
>
> $\|u\|_{C(\mathbb{R}^n)}\leq\int_{\mathbb{R}^n}|\widehat{u}(\xi)| d\xi$.
>
> 而当 $m>n/2$ 时,
>
> $$
> \begin{aligned}
> \int_{\mathbb{R}^n}|\widehat{u}(\xi)| d\xi
> &\leq\left(\int_{\mathbb{R}^n}(1+|\xi|^2)^m|\widehat{u}(\xi)|^2 d\xi\right)^{1/2}\left(\int_{\mathbb{R}^n}\frac{d\xi}{(1+|\xi|^2)^m}\right)^{1/2}\\
> &\leq c_{n,m}\|u\|'_m.
> \end{aligned}
> $$
>
> 所以 $i:u\mapsto u$ 是 $W^{m,2}(\mathbb{R}^n)\to C(\mathbb{R}^n)$ 的一个连续嵌入.
>
> (2) 今设 $u\in W^{m,2}(\Omega)$, 利用延拓算子 $T$, 我们有
>
> $$
> \begin{aligned}
> \|u\|_{C(\overline{\Omega})}&\leq\|Tu\|_{C(\mathbb{R}^n)}\leq c_{n,m}\|Tu\|'_m\\
> &\leq c\|u\|_{W^{m,2}(\Omega)},
> \end{aligned}
> $$
>
> 即 $i:u\mapsto u$ 是 $W^{m,2}(\Omega)\to C(\overline{\Omega})$ 的连续嵌入. $\blacksquare$

> [!remark]
> 更一般的嵌入定理, 不必限制 $p=2$ 是属于 Sobolev 的:
>
> $W^{m,p}(\Omega)\hookrightarrow L^q(\Omega)$ $(1/q=1/p-m/n)$ (当 $m\leq n/p$),
>
> $W^{m,p}(\Omega)\hookrightarrow C(\overline{\Omega})$ (当 $m>n/p$),
>
> 其中 $\hookrightarrow$ 表示连续嵌入.

> [!theorem] 定理 4.5.10 (Rellich)
> 设 $\Omega\subset\mathbb{R}^n$ 是一个有界可扩张区域, 则 $W^{1,2}(\Omega)$ 中的单位球在 $L^2(\Omega)$ 中是列紧的.

> [!proof]-
> 要证: 由 $\{u_m\}_{m=1}^\infty\subset W^{1,2}(\Omega)$, $\|u_m\|_{W^{1,2}}\leq1$, 可抽出子列 $\{u_{m'}\}$, 使得 $\{u_{m'}\}$ 在 $L^2(\Omega)$ 中收敛. 为此记 $U_m=Tu_m$, 其中 $T$ 是扩张算子, 并且由习题 4.5.2, 不妨设 $U_m$ 在公共的、在 $\mathbb{R}^n$ 中紧的集合 $K$ 外为 $0$. 我们要证
>
> $\|u_{p'}-u_{m'}\|_{L^2(\Omega)}\to0$ (当 $m',p'\to\infty$).
>
> 注意到
>
> $$
> \begin{aligned}
> \|u_{p'}-u_{m'}\|_{L^2(\Omega)}^2&\leq C\|U_{p'}-U_{m'}\|_{L^2(\mathbb{R}^n)}^2\\
> &=C\int_{\mathbb{R}^n}|\widehat{U}_{p'}(\xi)-\widehat{U}_{m'}(\xi)|^2 d\xi,
> \end{aligned}
> $$
>
> 而
>
> $$
> \begin{aligned}
> \widehat{U}_m(\xi)&=\int_K U_m(x)e^{-2\pi i x\cdot\xi}dx\\
> &=\langle e^{-2\pi i x\cdot\xi}\alpha_k,U_m\rangle,  \qquad(4.5.7)
> \end{aligned}
> $$
>
> 其中
>
> $\alpha_k(x)=\begin{cases}1,&x\in K,\\0,&x\notin K.\end{cases}$
>
> 由于 $\|U_m\|_{L^2(\mathbb{R}^n)}\leq C$ 以及 $\alpha_k e^{-2\pi i x\cdot\xi}\in L^2(\mathbb{R}^n)$, 再根据 Hilbert 空间 $L^2(\mathbb{R}^n)$ 的自反性和 Eberlein-Smulian 定理 (定理 2.5.28), 有子列 $\{m'\}$, 使得 $\{U_{m'}\}$ 弱收敛. 从而 (4.5.7) 式蕴含了对 $\forall\xi\in\mathbb{R}^n$, $\widehat{U}_{m'}(\xi)$ 收敛. 又
>
> $$
> \begin{aligned}
> |\widehat{U}_m(\xi)|&\leq\left(\int_K dx\right)^{1/2}\left(\int_K|U_m(x)|^2 dx\right)^{1/2}\\
> &\leq[\mathrm{mes}(K)]^{1/2}\|U_m\|_{L^2}\leq\mathrm{const}.
> \end{aligned}
> $$
>
> 这时 $\forall r>0$,
>
> $\int_{\mathbb{R}^n}|\widehat{U}_{m'}(\xi)-\widehat{U}_{p'}(\xi)|^2 d\xi=\int_{|\xi|\leq r}+\int_{|\xi|\geq r}=I+II$.
>
> 然而
>
> $$
> \begin{aligned}
> II&\leq r^{-2}\int_{|\xi|\geq r}(1+|\xi|^2)|\widehat{U}_{m'}(\xi)-\widehat{U}_{p'}(\xi)|^2 d\xi\\
> &\leq2r^{-2}\int_{|\xi|\geq r}(1+|\xi|^2)(|\widehat{U}_{m'}(\xi)|^2+|\widehat{U}_{p'}(\xi)|^2) d\xi\\
> &\leq2r^{-2}(\|U_{m'}\|_1^2+\|U_{p'}\|_1^2)\leq Mr^{-2},
> \end{aligned}
> $$
>
> 其中 $M$ 是一个仅依赖于扩张算子 $T$ 的常数.
>
> $\forall\varepsilon>0$, 取 $r$ 足够大, 使 $Mr^{-2}<\varepsilon/2$, 固定 $r$, 根据 Lebesgue 控制收敛定理, 当 $m',p'$ 足够大时,
>
> $I=\int_{|\xi|\leq r}|\widehat{U}_{m'}(\xi)-\widehat{U}_{p'}(\xi)|^2 d\xi<\varepsilon/2$,
>
> 即得
>
> $\|u_{m'}-u_{p'}\|_{L^2(\Omega)}\to0$ (当 $m',p'\to\infty$). $\blacksquare$

> [!corollary] 推论 4.5.11
> 若 $\Omega\subset\mathbb{R}^n$ 是任意的有界开集, 则 $W_0^{1,2}(\Omega)$ 的单位球在 $L^2(\Omega)$ 中是列紧的.

> [!proof]-
> 与定理 4.5.10 的证明相似. $\blacksquare$

> [!remark] 注 1
> $W_0^{1,2}(\Omega)$ 有时记作 $\mathring{W}_2^1(\Omega)$, 根据定理 4.5.5, 它也就是例 1.6.16 中的 $H_0^1(\Omega)$.

> [!remark] 注 2
> 更一般的结论是属于 Kontrashev 的, 参看 Adams R A: Sobolev Spaces (New York: Academic Press, 1975) 中的定理 6.2.

注意到

$\mathscr{D}(\Omega)\hookrightarrow H_0^m(\Omega)\hookrightarrow L^2(\Omega)$,

可见它们的共轭空间之间有如下联系:

$L^2(\Omega)\hookrightarrow H_0^m(\Omega)^*\hookrightarrow\mathscr{D}'(\Omega)$.

这表明 Sobolev 空间的共轭空间 $H_0^m(\Omega)^*$ 是由比 $L^2(\Omega)$ 函数更多的广义函数组成的. 以下将 $H_0^m(\Omega)^*$ 记作 $H^{-m}(\Omega)$, 并用积分形式把其中的元素表示出来.

> [!theorem] 定理 4.5.12
> 为了 $f\in H^{-m}(\Omega)$, 必须且仅须 $\exists g_\alpha\in L^2(\Omega)$ $(|\alpha|\leq m)$, 使得
>
> $\langle f,\varphi\rangle=\sum_{|\alpha|\leq m}\int_\Omega g_\alpha(x)\cdot\partial^\alpha\varphi(x)dx$ $(\forall\varphi\in H_0^m(\Omega))$.

> [!proof]-
> 充分性显然, 只需证必要性. 设 $f\in H^{-m}(\Omega)$, 因为 $H_0^m(\Omega)$ 是 Hilbert 空间, 应用 Riesz 表示定理 (定理 2.5.4), $f$ 对应着一个
>
> $h\in H_0^m(\Omega)$, 使得
>
> $$
> \begin{aligned}
> \langle f,\varphi\rangle&=(\varphi,h)_m=\sum_{|\alpha|\leq m}\int_\Omega\overline{\partial^\alpha h(x)}\cdot\partial^\alpha\varphi(x)dx\\
> &=\sum_{|\alpha|\leq m}\int_\Omega g_\alpha(x)\partial^\alpha\varphi(x)dx\quad(\forall\varphi\in H_0^m(\Omega)),  \qquad(4.5.8)
> \end{aligned}
> $$
>
> 其中 $g_\alpha(x)\triangleq\overline{\partial^\alpha h(x)}\in L^2(\Omega)$. $\blacksquare$

> [!corollary] 推论 4.5.13
> 每个 $f\in H^{-m}(\Omega)$ 是 $L^2(\Omega)$ 函数的广义微商之有限和, 即
>
> $f=(-1)^{|\alpha|}\sum_{|\alpha|\leq m}\widetilde{\partial}^\alpha g_\alpha$ $(g_\alpha\in L^2(\Omega))$.  (4.5.9)

> [!proof]-
> 根据广义微商定义, (4.5.8) 式蕴含 (4.5.9) 式. $\blacksquare$

> [!remark] 注 1
> 如果先给定 $g_\alpha\in L^2(\Omega)$, 那么由 (4.5.9) 式定义一个 $f\in\mathscr{D}'(\Omega)$, 注意此 $f$ 在 $H^m(\Omega)$ 上的连续延拓可能不是唯一的. 但是此 $f$ 在 $H_0^m(\Omega)$ 上的连续延拓却是唯一的, 这是因为 $C_0^\infty(\Omega)$ 在 $H_0^m(\Omega)$ 中稠密 (定理 4.5.3), 并且 $\forall|\alpha|\leq m$ 有
>
> $|\langle\partial^\alpha g_\alpha,\varphi\rangle|\leq\|g_\alpha\|_{L^2(\Omega)}\cdot\|\varphi\|_{H_0^m(\Omega)}$ $(\forall\varphi\in C_0^\infty(\Omega))$.
>
> 因此, (4.5.9) 式给出了属于 $H^{-m}(\Omega)$ 的广义函数的特征.

> [!remark] 注 2
> 根据嵌入定理 4.5.9, 当 $m>n/2$ 时, $H_0^m(\Omega)$ 可以连续地嵌入 $C(\overline{\Omega})$, 因此当 $m>n/2$ 时, $C(\overline{\Omega})$ 上的连续线性泛函属于 $H^{-m}(\Omega)$. 特别是 $\delta$ 函数属于 $H^{-m}(\Omega)$. 例如当 $n=1$ 时, 设 $x_0\in\Omega\triangleq(a,b)$, 则
>
> $\varphi\mapsto\langle\delta_{x_0},\varphi\rangle=\varphi(x_0)$
>
> 在 $C(\overline{\Omega})$ 上是连续线性的, 从而 $\delta_{x_0}\in H^{-1}(\Omega)$.

## 习 题

> [!exercise] 4.5.1
> 就 $\Omega=\mathbb{R}_+^n=\{(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n\mid x_n>0\}$ 的情形验证定理 4.5.5.
> 提示 $\forall u(x)\in W^{m,p}(\Omega)$, $\forall\varepsilon>0$, 请考虑 $u_\varepsilon(x)=u(x',x_n+\varepsilon)$, 其中 $x'\in\mathbb{R}^{n-1}$, $x_n>-\varepsilon$.

> [!exercise] 4.5.2
> 若 $\alpha\in\mathscr{D}$, $u\in W^{m,p}(\mathbb{R}^n)$, 则 $\alpha\cdot u\in W^{m,p}(\mathbb{R}^n)$, 并且有常数 $C$ (依赖于 $\alpha$), 使得
> $\|\alpha\cdot u\|_{W^{m,p}}\leq C\|u\|_{W^{m,p}}$.

> [!exercise] 4.5.3
> 若 $m\geq l$, 求证: $W^{m,p}(\Omega)\hookrightarrow W^{l,p}(\Omega)$.

> [!exercise] 4.5.4
> 设 $\Omega=(a,b)$, $\forall f\in L^2(\Omega)$, 求证: $\exists! x\in H_0^1(\Omega)$, 使得
> $\widetilde{d}^2x/dt^2=f$,
> 并且 $T:f\mapsto x$ 是 $L^2(\Omega)$ 到 $H^2(\Omega)$ 的连续线性算子.

> [!exercise] 4.5.5
> 设 $f(x)\in H_0^1(-1,1)$, 求证:
> (1) $f(-1)=f(1)=0$;
> (2) $f(x)$ 绝对连续;
> (3) $f'(x)\in L^2(-1,1)$ (这里" $'$ "指的是求 a.e. 微商).

> [!exercise] 4.5.6
> 设 $f\in H^s(\mathbb{R}^n)$ (定义见习题 4.4.2), 求证: 当 $s>n/2$ 时,
> (1) $\widehat{f}(\xi)\in L^1(\mathbb{R}^n)$;
> (2) $f(x)$ 与一个 $\mathbb{R}^n$ 上的连续有界函数几乎处处相等.

> [!exercise] 4.5.7
> 设 $m\in\mathbb{N}$, 又设
> $H^{-m}\triangleq\{f\in\mathscr{S}'\mid(1+|\xi|^2)^{-m/2}\widehat{f}(\xi)\in L^2(\mathbb{R}^n)\}$,
> 在 $H^{-m}$ 中定义范数
> $\|f\|_{-m}=\|(1+|\xi|^2)^{-m/2}\widehat{f}(\xi)\|_{L^2(\mathbb{R}^n)}$ $(\forall f\in H^{-m})$.
>
> 求证: 若 $f\in H^{-m}$, 则它可以表为有限个 $L^2(\mathbb{R}^n)$ 函数的导数之和.
> 提示 $(1+|\xi|^2)^{-m/2}\widehat{f}(\xi)\in L^2(\mathbb{R}^n)$
> $\Leftrightarrow\widehat{f}(\xi)/(1+|\xi_1|^m+\cdots+|\xi_n|^m)\in L^2(\mathbb{R}^n)$.

> [!exercise] 4.5.8
> 在空间 $L^2(-\infty,\infty)$ 上, 考察微分算子
> $A=\widetilde{d}/dx$, $D(A)=H^1(-\infty,\infty)$,
> 求证:
> (1) $\rho(A)=\{\lambda\in\mathbb{C}\mid\mathrm{Re}\,\lambda\neq0\}$;
> (2) $\sigma_p(A)=\varnothing$;
> (3) $\sigma(A)=\sigma_c(A)=\{\lambda\in\mathbb{C}\mid\mathrm{Re}\,\lambda=0\}$.

**习题补充提示**

**1.1.6** 设 $f(x)\triangleq\rho(x,Tx)$, 则 $f(x)$ 在 $M$ 上连续. 因为 $M$ 是 $\mathbb{R}^n$ 中的有界闭集, 所以 $\exists x_0\in M$, 使得
$\rho(x_0,Tx_0)=f(x_0)=\min_{x\in M}f(x)=\min_{x\in M}\rho(x,Tx)$.
如果 $\rho(x_0,Tx_0)=0$, 那么 $x_0$ 就是不动点. 如果 $\rho(x_0,Tx_0)>0$, 一方面, 根据假设 $\rho(Tx_0,T^2x_0)<\rho(x_0,Tx_0)=\min_{x\in M}\rho(x,Tx)$; 另一方面, $Tx_0,T^2x_0\in M$, 这与 $\rho(x_0,Tx_0)$ 是最小值矛盾.

**1.3.8** 记 $d=\inf\{\rho(x,f(x))\mid x\in\overline{M}\}$, 先证 $\exists x_0\in\overline{M}$, 使得
$\rho(x_0,f(x_0))=d$.
这从下确界的定义出发, $\forall n\in\mathbb{N}$, $\exists x_n\in M$, 使得
$d\leq\rho(x_n,f(x_n))<d+1/n$.
又因为 $M$ 列紧, 故存在 $x_{n_k}\to x_0$, 将上面不等式中的 $n$ 改为 $n_k$, 并令 $k\to\infty$, 就证得 $\rho(x_0,f(x_0))=d$. 再证 $d=0$. 用反证法. 如果 $d>0$, 则有
$d\leq\rho(f(x_0),f(f(x_0)))<\rho(x_0,f(x_0))=d$,
矛盾.

**1.4.3** 考虑 $C^1[0,1]$ 中的函数列:
$f_n(x)=\sqrt{x^2+1/n^2}$ $(-1\leq x\leq1)$,
可以验证 $\{f_n(x)\}_{n=1}^\infty$ 按范数 $\|\cdot\|_1$ 是基本列, 但是
$f_n(x)\to|x|\notin C^1[0,1]$.

**1.4.5** 不妨假设 $b>a>0$, 显然有 $\|f\|_b\leq\|f\|_a$, 由此可见, 为了证明不等价性, 只要证不存在 $c>0$, 使得 $\|f\|_a\leq c\|f\|_b$ $(\forall f\in BC[0,\infty))$. 只须证 $\exists f_n\in BC[0,\infty)$, 使得
$\|f_n\|_a^2/\|f_n\|_b^2\to\infty$ $(n\to\infty)$.

令
$$
g_n(x)\triangleq\begin{cases}
e^{ax},&0\leq x\leq n,\\
e^{an}(n+1-x),&n\leq x\leq n+1\;(\text{见图1}),\\
0,&x\geq n+1,
\end{cases}
$$
则有
$f_n(x)\triangleq\sqrt{g_n(x)}$,
$\|f\|_a^2\geq\int_0^n e^{-ax}\cdot e^{ax}dx=n$,
$\|f\|_b^2\leq\int_0^\infty e^{-bx}\cdot e^{ax}dx=\int_0^\infty e^{-(b-a)x}dx=1/(b-a)$,
$\|f_n\|_a^2/\|f_n\|_b^2\geq n(b-a)\to\infty$ $(n\to\infty)$.

图1

**1.6.7** (1) 当 $b-a=1$ 时, $\forall n$, $\{e^{2\pi i nx}\}$ 的周期是 $1$, 故 $S^\perp=\{\theta\}$. 当 $b-a<1$ 时, 若 $u\in L^2[a,b]$, 使得
$\int_a^b u e^{2\pi i nx}dx=0$ $(n=1,2,\cdots)$,
令 $\widetilde{u}=\begin{cases}u,&x\in[a,b],\\0,&x\in[b,a+1],\end{cases}$
则有
$\int_a^{a+1}\widetilde{u}e^{2\pi i nx}dx=0\Longrightarrow\widetilde{u}=0$ $(x\in[a,a+1])$
$\Longrightarrow u=0$ $(x\in[a,b])$
$\Longrightarrow S^\perp=\{\theta\}$.

(2) 若 $b-a>1$, 这时 $\{e^{2\pi i nx}\}_{n=-\infty}^\infty$ 是 $L^2[b-1,b]$ 上的一组正交基. 因此, $L^2[b-1,b]$ 上的函数可以由它的 Fourier 系数决定. 利用这一点, 对 $\forall u\in L^2[a,b-1]$, $u\neq\theta$. 可将它扩充为 $L^2[a,b]$ 上的函数 $v(x)\in S^\perp$, 而 $v(x)\neq\theta$.
事实上, 令
$v=\begin{cases}u(x),&x\in[a,b-1],\\\widetilde{u}(x),&x\in(b-1,b],\end{cases}$
其中 $(b-1,b]$ 上的函数 $\widetilde{u}(x)$ 的 Fourier 系数通过 $u(x)$ 在 $[a,b-1]$ 上的值来计算, 即
$\widetilde{u}_n=\int_{b-1}^b\widetilde{u}e^{2\pi i nx}dx=-\int_a^{b-1}u e^{2\pi i nx}dx$,
于是
$\widetilde{u}=\sum_{n=-\infty}^\infty\widetilde{u}_n e^{2\pi i nx}\in L^2[b-1,b]$,
并且
$\int_a^b v e^{2\pi i nx}dx=\int_a^{b-1}u e^{2\pi i nx}dx+\int_{b-1}^b\widetilde{u}e^{2\pi i nx}dx=0$,
即 $v(x)\in S^\perp$.

**2.1.3** (2) 先证明 $\|f\|=\sup_{\|x\|<1}f(x)$. 一方面, $\forall\|x\|<1$, $x\neq\theta$,
$$
\begin{aligned}
f(x)&=\|x\| f(x/\|x\|)\leq\|x\|\sup_{\|y\|=1}f(y)\\
&=\|x\|\cdot\|f\|<\|f\|.
\end{aligned}
$$
又 $x=\theta$, $f(\theta)=0\leq\|f\|$, 所以
$\sup_{\|x\|<1}f(x)\leq\|f\|$.
另一方面, $\forall\|x\|=1$, $\forall\varepsilon>0$,
$f(x)=(1+\varepsilon)f(x/(1+\varepsilon))\leq(1+\varepsilon)\sup_{\|x\|<1}f(x)$,
所以
$$
\begin{aligned}
\|f\|&=\sup_{\|x\|=1}f(x)\leq(1+\varepsilon)\sup_{\|x\|<1}f(x)\\
&\Rightarrow\|f\|\leq\sup_{\|x\|<1}f(x),
\end{aligned}
$$
故 $\|f\|=\sup_{\|x\|<1}f(x)$. 于是, 对 $\forall\delta>0$,
$\delta\|f\|=\sup_{\|x\|<1}f(\delta x)=\sup_{\|y\|<\delta}f(y)$.

**2.1.4** 容易证明 $\|f\|\leq\int_0^1|y(t)|dt$. 为了建立相反的不等式. 对 $\forall\varepsilon>0$, 根据 $y(t)$ 在 $[0,1]$ 上的一致连续性, $\exists n\in\mathbb{N}$, 将 $[0,1]$ $n$ 等分, 使得函数在每一等分区间上的振幅小于 $\varepsilon$. 我们把所有的等分区间分为两类: 在第一类区间上不含有函数 $y(t)$ 的零点, 这类区间记作 $\Delta$, 在第二类区间上至少含有函数 $y(t)$ 的一个零点, 这类区间记作 $\nabla$. 因为函数 $y(t)$ 在区间 $\nabla$ 上必有零点, 所以在每个区间 $\nabla$ 上有 $|y(t)|<\varepsilon$. 定义 $\widetilde{x}(t)\in C[0,1]$,

$\widetilde{x}(t)=\begin{cases}\mathrm{sign}\,y(t),&t\in\Delta,\\\text{线性函数},&t\in\nabla.\end{cases}$

同时, 如果第二类区间 $\nabla$ 的端点是 $a$ 或 $b$, 则令 $\widetilde{x}(a)=0$ 或 $\widetilde{x}(b)=0$, 则有
$$
\begin{aligned}
f(\widetilde{x})&=\int_0^1\widetilde{x}(t)y(t)dt\\
&=\sum_{\forall\Delta}\int_\Delta\widetilde{x}(t)y(t)dt+\sum_{\forall\nabla}\int_\nabla\widetilde{x}(t)y(t)dt\\
&\geq\sum_{\forall\Delta}\int_\Delta|y(t)|dt-\sum_{\forall\nabla}\int_\nabla|y(t)|dt\\
&=\int_0^1|y(t)|dt-2\sum_{\forall\nabla}\int_\nabla|y(t)|dt\\
&>\int_0^1|y(t)|dt-2\varepsilon.
\end{aligned}
$$

**2.1.5** $|f(x)|\leq\|f\|\cdot\|x\|$ ——$f(x)=1$——> $\|x\|\geq1/\|f\|\Rightarrow d\geq1/\|f\|$.
$\forall\varepsilon>0$, $\exists x_0\neq0$, 使得
$|f(x_0)|/\|x_0\|\geq\|f\|-\varepsilon\Rightarrow\|x_0/f(x_0)\|\leq1/(\|f\|-\varepsilon)$.

注意到 $f(x_0/f(x_0))=1$, 故有 $d\leq1/(\|f\|-\varepsilon)$.

**2.1.6** $\forall\eta>0$, $\exists x_1$, 使得
$|f(x_1)|/\|x_1\|>\|f\|-\eta\Rightarrow\|x_1/f(x_1)\|\cdot\|f\|<\|f\|/(\|f\|-\eta)$.
取 $\eta=\varepsilon/(1+\varepsilon)\|f\|$, 便有
$\|x_1/f(x_1)\|\cdot\|f\|<1+\varepsilon$.
再令 $x_0=x_1/f(x_1)\|f\|$.

**2.1.7** (2) 举一个反例. 设
$X=\{(\xi_1,\xi_2,\ldots,\xi_n,\ldots)\mid\sum_{n=1}^\infty|\xi_n|<\infty\}$,
$\forall x=(\xi_1,\xi_2,\ldots,\xi_n,\ldots)\in X$, $\|x\|=\sup_{n\geq1}|\xi_n|$.
定义 $f(x)=\sum_{n=1}^\infty\xi_n$, 对 $a=(1,-1,0,\ldots)\in X$ 显然 $f(a)=0$. 利用 $a$ 和 $f(x)$ 构造如下线性算子: $\forall x\in X$, 定义 $Tx=x-af(x)$. 容易验证 $N(T)=\{\theta\}$, 当然 $N(T)$ 闭. 再指出 $T$ 无界, 为此先证 $f(x)=\sum_{n=1}^\infty\xi_n$ 无界. 令
$e_k=\{0,0,\ldots,0,1,0,\ldots\}$ ($1$在第$k$位)
$x_n=\sum_{k=1}^n e_k\in X$, $\|x_n\|=1$,
$f(x_n)=n\Rightarrow|f(x_n)|/\|x_n\|=n\to\infty$ $(n\to\infty)$,
即 $f$ 无界. 再证 $T$ 无界.
事实上, 从 $Tx=x-af(x)\Rightarrow af(x)=x-Tx=(I-T)x$. 用反证法. 如果 $T$ 有界, 则 $I-T$ 有界, 从而
$|f(x)|$ ——$\|a\|=1$—— $=\|a\|\cdot|f(x)|=\|af(x)\|$
$=\|(I-T)x\|\leq M\|x\|$,

即 $f$ 有界, 矛盾.

**2.1.8** (1) 记 $N(f)=H_f^0$, 就是要证
$|f(x)|=\|f\|\rho(x,N(f))$.
$\forall\varepsilon>0$, $\exists y_\varepsilon\in N(f)$,
$\|x-y_\varepsilon\|<\rho(x,N(f))+\varepsilon$,
$$
\begin{aligned}
|f(x)|&=|f(x-y_\varepsilon)|\leq\|f\|\cdot\|x-y_\varepsilon\|\leq\|f\|\cdot\|x-y_\varepsilon\|\\
&<\|f\|(\rho(x,N(f))+\varepsilon)
\end{aligned}
$$
——$\varepsilon\to0$——> $|f(x)|\leq\|f\|\rho(x,N(f))$.
另一方面, $\forall z\notin N(f)$, $\forall x\in X$, 令 $y=x-f(x)/f(z)z$, 则 $y\in N(f)$, 且
$f(z)(x-y)=f(x)z$ $|f(z)|/\|z\|\|x-y\|=|f(x)|$
$\Rightarrow\|x-y\|\sup_{z\neq\theta}|f(z)|/\|z\|\leq|f(x)|$
$\Rightarrow\inf_{y\in N(f)}\|x-y\|\sup_{z\neq\theta}|f(z)|/\|z\|\leq|f(x)|$,
即
$\|f\|\rho(x,N(f))\leq|f(x)|$.
(2) $\forall x\in H_f^\lambda\Rightarrow f(x)=\lambda\Rightarrow\rho(x,H_f^0)$ ——(1)—— $|f(x)|=|\lambda|$.
为了解释 (1) 和 (2) 的几何意义, 设 $X=\mathbb{R}^2$, $\mathbb{K}=\mathbb{R}$, $\forall f\in X^*$, $\|f\|=1$, $\forall x=(\xi,\eta)\in\mathbb{R}^2$, 令 $x_1=(1,0)$, $x_2=(0,1)$, $\alpha=f(x_1)$, $\beta=f(x_2)$, 则
$f(x)=\alpha\xi+\beta\eta$, $\|f\|=1\Rightarrow\sqrt{\alpha^2+\beta^2}=1$.
根据平面解析几何知识, $|f(x)|=|\alpha\xi+\beta\eta|$ 表示点 $x=(\xi,\eta)$ 到通过原点的直线 (如图 2 所示)
$H_f^0=\{x=(\xi,\eta)\mid f(x)=\alpha\xi+\beta\eta=0\}$

的距离, 即
$|f(x)|=|\alpha\xi+\beta\eta|=\rho(x,H_f^0)$.
注意到 $H_f^\lambda$ 和 $H_f^0$ 是互相平行的直线, 所以对 $\forall x\in H_f^\lambda$,
$\rho(x,H_f^0)=\rho(\theta,H_f^\lambda)=|\alpha\xi+\beta\eta-\lambda|/\sqrt{\alpha^2+\beta^2}|_{(\xi,\eta)=(0,0)}=|\lambda|$.

**2.3.6** 令 $\|x\|_1=\|x\|+\sup_{\alpha\in S^1}p(\alpha x)$, 其中 $S^1$ 是复平面上的单位圆周. 先证 $\|x\|_1$ 是 $X$ 上的完备范数, 再用等价范数定理 (推论 2.3.14).

**2.3.11** 设 $N(A)=\{x\in X\mid Ax=0\}$, 考虑映射 $\widetilde{A}:X/N(A)\to Y$, $\forall[x]\in X/N(A)$, $\widetilde{A}[x]=Ax$, $\forall x\in[x]$. 证明 $\widetilde{A}$ 是单射、满射. 再由
$\|\widetilde{A}[x]\|_Y=\|Ax'\|\_Y\leq\|A\|\cdot\|x'\|\leq2\|A\|\cdot\|[x]\|$,
推出 $\widetilde{A}$ 有界. 由 Banach 逆算子定理 (定理 2.3.8), $\widetilde{A}^{-1}\in\mathcal{L}(Y,X/N(A))$. 不妨假设 $y_0=0$, $y_n\to0$, 记 $[x_n]=\widetilde{A}^{-1}y_n$, 则有
$\|[x_n]\|=\|\widetilde{A}^{-1}y_n\|\leq\|\widetilde{A}^{-1}\|\cdot\|y_n\|$.
于是, 取 $x_n\in[x_n]$, 使得 $\|x_n\|\leq2\|[x_n]\|$, 便有 $\|x_n\|\leq C\|y_n\|$, 其中 $C=2\|\widetilde{A}^{-1}\|$.

**2.3.12** (3) 注意到 $X/N(T)$ 是 B 空间. 考虑 $\widetilde{T}:X/N(T)\to Y$, $\widetilde{T}[x]=Tx$,
$D(\widetilde{T})=\{[x]\in X/N(T)\mid x\in D(T)\}$,

显然, $N(\widetilde{T})=[\theta]$, $R(\widetilde{T})=R(T)$.
只要证明 $\widetilde{T}$ 是闭算子, 用 (2) 的结果, 便有
$\|[x]\|_0\leq\alpha\|\widetilde{T}[x]\|$,
即 $d(x,N(T))\leq\alpha\|Tx\|$.

**2.4.4** $x_n\in X\subset X^{**}=\mathcal{L}(X^*,\mathbb{K})$,
$\|x_n\|_{X^{**}}=\|x_n\|_X$, $\langle x_n,f\rangle=\langle f,x_n\rangle$,
$\sup_n|\langle x_n,f\rangle|=\sup_n|\langle f,x_n\rangle|$
$=\sup_n|f(x_n)|<\infty$ $(\forall f\in X^*)$.
由共鸣定理 (定理 2.3.16) $\|x_n\|_{X^{**}}\leq M$, 即得 $\|x_n\|_X=\|x_n\|_{X^{**}}\leq M$.

**2.4.12** 用反证法. 假定 $x_2\in C$, 记 $\lambda=1/m$, 则 $x_1=\lambda x_2+(1-\lambda)x_0$. 只要能找到一个 $d>0$, 使得 $B(x_1,d)\subset C$, 便与 $x_1\in\partial C$ 的假设矛盾.
因为 $x_0\in\mathring{C}$, 所以 $\exists\delta>0$, 使得 $B(x_0,\delta)\subset C$. 这样, $\forall y\in B(x_0,\delta)$, 都有
$z=\lambda x_2+(1-\lambda)y\in C$,
$\{x_1=\lambda x_2+(1-\lambda)x_0$,
$\{z=\lambda x_2+(1-\lambda)y\}\Rightarrow z-x_1=(1-\lambda)(y-x_0)$
$\Rightarrow\|z-x_1\|=(1-\lambda)\|y-x_0\|<(1-\lambda)\delta$.
由此可见, 只要取 $d=(1-\lambda)\delta$ 即可. 事实上, 当 $\|z-x_1\|<d$, 取辅助点
$y=x_0+(z-x_1)/(1-\lambda)\in B(x_0,\delta)\subset C$,
从而
$$
\begin{aligned}
z&=x_1+(1-\lambda)(y-x_0)\\
&=\lambda x_2+(1-\lambda)x_0+(1-\lambda)(y-x_0)\\
&=\lambda x_2+(1-\lambda)y\in C.
\end{aligned}
$$

**2.4.13** 注意到条件 $M$ 是闭凸集与有内点的凸集 $B(x,d)$ 是可分离的. 即根据凸集分离定理 (定理 2.4.16), 存在 $f\in\mathscr{X}^*$, $\alpha\in\mathbb{R}$, 使得对 $\forall y\in M$, $z\in B(x,d)$, 成立 $f(y)\leq\alpha\leq f(z)$. 于是

$$
\begin{aligned}
\sup_{y\in M}f(y)&\leq\inf_{z\in B(x,d)}f(z)=\inf_{y\in B(\theta,1)}f(x-d(x)y)\\
&=\inf_{y\in B(\theta,1)}[f(x)-d(x)f(y)]=f(x)-d(x)\sup_{y\in B(\theta,1)}f(y)\\
&=f(x)-d(x)\|f\|.
\end{aligned}
$$

由此可见, 取 $f_1=f/\|f\|$ 即为所求.

**2.5.17** 注意到 $(e^n/2)\int_{|x|>n}e^{-|x|}dx=1$, 令

$u_n(x)\triangleq\chi_{|x|>n}(x)((e^{n-|x|})/2)^{1/p}$,

则

$$
\begin{aligned}
\|u_n\|_p&=\left(\int_\mathbb{R}|u_n(x)|^p dx\right)^{1/p}\\
&=((e^n/2)\int_{|x|>n}e^{-|x|}dx)^{1/p}=1,
\end{aligned}
$$

$\|I-S_n\|\geq\|u_n\|_p=1$.

**2.5.24** 设 $d=\inf_{x\in M}\{\|x\|\}$, $\forall n$, $\exists x_n\in M$, 使得 $d\leq\|x_n\|<d+1/n\leq d+1$,
$\{x_n\}$ 有界. 根据定理 2.5.28, 存在 $x_{n_k}\to x_0$. 对此 $x_0$, 根据推论 2.4.6,
$\exists f\in\mathscr{X}^*$, 使得 $\|f\|=1$, $f(x_0)=\|x_0\|$. 于是, 一方面

$x_0\in M\Longrightarrow\|x_0\|\geq d$,

另一方面

$\|x_0\|=f(x_0)=\lim_{k\to\infty}f(x_{n_k})\leq\lim_{k\to\infty}\|f\|\cdot\|x_{n_k}\|=d$,

故有

$\|x_0\|=d=\inf_{x\in M}\{\|x\|\}$.


**3.1.3**  $\forall[x]\in\mathscr{X}/N(K)$, $\widetilde{K}[x]\triangleq Kx$,

$K\in\mathfrak{c}(\mathscr{X},\mathscr{Y})\Longrightarrow\widetilde{K}\in\mathfrak{c}(\mathscr{X},\mathscr{Y})$,

$S\triangleq B_{\mathscr{X}}(0,1)\Longrightarrow S+N(K)$ 是 $\mathscr{X}/N(K)$ 中的单位球, 且 $\widetilde{K}(S+N(K))=$
$K(S)$ 是列紧的, 从而 $\widetilde{K}$ 是紧算子. 又 $\widetilde{K}$ 是单射连续算子 $\Longrightarrow\widetilde{K}^{-1}$ 闭, 且

$D(\widetilde{K}^{-1})=R(K)\supset R(A)$.

从而 $\widetilde{K}^{-1}A:\mathscr{X}\to\mathscr{X}/N(K)$ 是闭算子, 且定义域是全空间. 根据闭图像
定理 (定理 2.3.15), $\widetilde{K}^{-1}A$ 有界, 故有

$A=\widetilde{K}(\widetilde{K}^{-1}A)\in\mathfrak{c}(\mathscr{X},\mathscr{Y})$.
    紧   有界

**3.1.11** 令 $v=x/\|x\|_{\mathscr{X}}$, 则 $\|v\|_{\mathscr{X}}=1$, 要证的结论可改述为: 对 $\forall\varepsilon>0$,
存在 $c(\varepsilon)$, 使得

$\|y\|_{\mathscr{Y}}\leq\varepsilon+c(\varepsilon)\|v\|_{\mathscr{X}}$   $(\forall v\in B_{\mathscr{X}}(\theta,1))$.

用反证法. 如果 $\exists\varepsilon_0>0$, 对 $\forall n\in\mathbb{N}$, $\exists v_n\in B_{\mathscr{X}}(\theta,1)$ 使得 $\|v_n\|_{\mathscr{Y}}>$
$\varepsilon_0+n\|v_n\|_{\mathscr{X}}$, 那么一方面, $\|v_n\|_{\mathscr{Y}}>\varepsilon_0$, 另一方面, $v_n\to0$ $(n\to\infty)$. 但
是从 $\|v_n\|_{\mathscr{X}}=1$ 和 $\mathscr{X}\hookrightarrow\mathscr{Y}$ 紧, 可推出 $\exists v_{n_k}\to v$, 再从 $\mathscr{Y}\hookrightarrow\mathscr{Z}$ 连
续, 便有 $v_{n_k}\to v$. 这样, 一方面, 我们联合 $v_n\to0$ 和 $v_{n_k}\to v$ 得
到 $v=0$, 另一方面, $\|v_n\|_{\mathscr{Y}}>\varepsilon_0\Longrightarrow\|v\|_{\mathscr{Y}}\geq\varepsilon_0$, 即引出矛盾.

**3.6.3**  (1) 用 $\tau$ 表示 $\mathscr{X}\to\mathscr{Y}$ 的嵌入算子, 那么

$$
\begin{aligned}
\|x\|_{\mathscr{X}}&\leq c(\|x\|_{\mathscr{Y}}+\|Tx\|_{\mathscr{Y}})\\
&\Longrightarrow\|x\|_{\mathscr{X}}\leq c(\|\tau x\|_{\mathscr{Y}}+\|Tx\|_{\mathscr{Y}})\\
&\Longrightarrow\|x\|_{\mathscr{X}}\leq c\|\tau x\|_{\mathscr{Y}},\quad\forall x\in N(T).
\end{aligned}
$$

特别对于 $x_n\in N(T)$, $\|x_n\|=1$, 有 $\{\tau x_n\}$ 有收敛子列, 不妨仍记作 $\{\tau x_n\}$,

$\|x_n-x_m\|_{\mathscr{X}}\leq c\|\tau x_n-\tau x_m\|_{\mathscr{Y}}\Longrightarrow\{x_n\}$ 收敛,

从而 $N(T)$ 上的单位球列紧, 故 $\dim N(T)<\infty$.


(2) 令 $\widetilde{T}[x]\triangleq Tx$. $\forall[x]\in\mathscr{X}/N(T)$, 则 $R(T)=R(\widetilde{T})$. 为了证明 $R(\widetilde{T})$
闭, 由习题 2.3.4 (4), 只要证 $\widetilde{T}^{-1}$ 连续.

用反证法. 如果 $\widetilde{T}^{-1}$ 不连续, 则 $\exists\|[x_n]\|=1$, 使得 $Tx_n\to0$.

$\|[x_n]\|=1\Longrightarrow\|x_n\|<2\Longrightarrow\{\tau x_n\}$ 有收敛子列,

不妨假设这子列就是全体. 这样 $Tx_n$ 与 $\tau x_n$ 都是基本列, 并且

$\|x_n\|_{\mathscr{X}}\leq c(\|\tau x_n\|_{\mathscr{Y}}+\|Tx_n\|_{\mathscr{Y}})$,

于是有 $\|x_n-x_m\|_{\mathscr{X}}\to0$.

又因为 $\mathscr{X}$ 完备,

$\exists x_n\to x_0\Longrightarrow Tx_n\to Tx_0\Longrightarrow T[x_n]\to Tx_0$,

联合 $T[x_n]\to0$ 便有

$Tx_0=0\Longrightarrow x_0\in N(T)\Longrightarrow[x_0]=[0]$

以及

$\|[x_n]\|=\|[x_n]-[x_0]\|\leq\|x_n-x_0\|\to0$,

这样与 $\|[x_n]\|=1$ 矛盾.


**索引**
(按汉语拼音顺序)

**A**
Alaoglu 定理                     171
Arzelà-Ascoli 定理                20
Ascoli 定理                      135

**B**
半范数                            38
半模                              38
半内积空间                         63
闭集                               2
闭图像定理                        113
闭值域算子                        205
变分不等式                         85
不变子空间                        214
不动点                             3
不动点定理                          4
B 空间                            30
B$^*$ 空间                           30
B$_0$ 空间                          265
B$_0^*$ 空间                         265
Baire 纲定理                     103
Banach 不动点定理                   6
Banach 空间                      30
Banach-Steinhaus 定理            115
Bessel 不等式                    70
Brouwer 不动点定理                56

**C**
超平面                           131
承托超平面                       136
重数                             226
稠密                              12
次线性泛函                        38
$C^k(\overline{\Omega})$                           34
$C_0^m(\Omega)$                          66
$C_0^\infty(\Omega)$                        252
Cantor 集                       103
Caratheodory 定理                60
Cauchy-Schwarz 不等式            64
$\mathfrak{c}(\mathscr{X})$                            193
$\mathfrak{c}(\mathscr{X},\mathscr{Y})$                         193

**D**
单位球面                          37
等度连续                         20
等价范数定理                     113
等距同构                          12
等距同构映射                       12
等值面                            94
第二纲集                         103
第二共轭空间                     155
第一纲集                         103

第一预解公式                      184
度量空间                           1
对称凸集                          52
对角化                           227
对角线法则                       167
Dirac 符号                      250
Dirichlet 边值问题               95
$\delta$ 函数                          256
$\mathscr{D}(\Omega)$                            255
$\mathscr{D}'(\Omega)$                           256

**E**
二次型                            62
Eberlein-Smulian 定理           169
$\varepsilon$ 网                             16
$\mathscr{E}(\Omega)$                            264

**F**
范数                              30
范数等价                          36
复 Hahn-Banach 定理             125
F 空间                            27
F$^*$ 空间                           27
$F(\mathscr{X},\mathscr{Y})$                        196
Fourier 变换                    278
Fourier 积分                    280
Fourier 逆变换                   280
Fourier 系数                     69
Fredholm 结论                   204
Fredholm 算子                   236
$\mathscr{F}(\mathscr{X})$                           236
$\mathfrak{F}(\mathscr{X},\mathscr{Y})$                        236

**G**
共轭双线性函数                     62
共轭算子                         157
共鸣定理                         114
广义函数                        255
广义微商                        273
Gelfand 定理                    188
Gelfand 引理                    120
Green 公式                       95

**H**
$H^m(\Omega)$                           35
$H^{-m}(\Omega)$                         292
$H^{m,p}(\Omega)$                          35
$H_0^m(\Omega)$                          67
$H_f^r$                          131
$H^s(\mathbb{R}^n)$                         283
Hahn-Banach 定理                126
Hausdorff 定理                   17
Hilbert 空间                     66
Hilbert-Schmidt 定理            226

**J**
基本空间                        255
基本列                             2
极大线性子空间                   130
极化恒等式                       82
极小极大刻画                     228
紧算子                          194

**K**
局部可积函数 256
距离空间 1
均衡凸集 53
$j_\delta(x)$ 252
开映射 102
开映射定理 106
可分 17
可扩张 288
可数范数空间 263
Kuhn-Tucker 定理 141

**L**
连续谱 180
列紧 16
零链长 218
$L^1_{\mathrm{loc}}(\Omega)$ 256
$L^p(\Omega,\mu)(1\leq p<\infty)$ 30
$L^\infty(\Omega,\mu)$ 31
$\ell^p(1\leq p<\infty)$ 31
$\ell^\infty$ 33
Lagrange 乘子 138
Laplace 方程 95
Lax-Milgram 定理 116
Lax 等价定理 118
Lipschitz 空间 49
$\mathcal{L}(X)$ 88
$\mathcal{L}(X,Y)$ 88

**M**
Mazur 定理 136
Meyers-Serrin 定理 287
Minkowski 不等式 31
Minkowski 泛函 51

**N**
内积空间 63
Newton 法 10

**P**
平方平均逼近 81
平行四边形等式 66
谱半径 186
谱点 180
谱集 180
Plancherel 定理 282
Poincaré 不等式 66

**Q**
强极限 162
强收敛 162
全连续算子 194

**R**
弱闭 178
弱极限 162
弱解 95
弱列紧 167
弱收敛 162
Rellich 定理 290

Riesz 表示定理 (Hilbert 空间) 93
Riesz 表示定理 (连续函数空间) 153
Riesz 引理 43
Runge 定理 153

**S**
商空间 44
剩余谱 180
实 Hahn-Banach 定理 123
收敛 2
疏集 103
速降函数 265
Schauder 不动点定理 57
Schauder 基 198
Sobolev 空间 284
Sobolev 嵌入定理 289
$\mathscr{S}(\mathbb{R}^n)$ 264
$\mathscr{S}'(\mathbb{R}^n)$ 267

**T**
特征元 179
特征值 179
凸包 51
凸函数 48
凸集分离定理 134
图模 114

**W**
完备 2
完备化 12
完全有界 16
维数 24
$W^{m,p}(\Omega)$ 284
$W_p^m(\Omega)$ 284

**X**
吸收凸集 52
线性包 25
线性和 25
线性基 24
线性空间 23
线性流形 24
线性同构 24
线性相关 24
线性子空间 24
像链长 218
序列完备 255

**Y**
压缩映射原理 6
严格凸 40
一致收敛 165
一致有界 20
一致有界定理 114
隐函数存在定理 7
有穷秩算子 196
余维数 210
预解集 180
Young 不等式 160

**Z**
障碍问题 98

真子空间 24
正交 68
正交补 68
正交分解 79
正交规范集 69
正交化 74
正交基 68
正交集 69
正交投影 80
正交投影算子 90
正则值 180
支集 252

直和 25
指标 236
秩1算子 197
准范数 26
准模 26
自反 156
自列紧 16
最佳逼近 39
最佳逼近元 40
最佳估计问题 81
最小二乘法 80
Zorn 引理 69

Lecture Notes on Functional Analysis

泛函分析讲义（第二版）（上）

本书是两册泛函分析教材中的上册，系统地介绍了线性泛函分析的基础知识。全书共分四章：度量空间、线性算子与线性泛函、紧算子与 Fredholm 算子，以及广义函数与 Sobolev 空间。本书的主要特点是侧重于分析若干基本概念和重要理论的来源和背景，强调培养读者运用泛函方法解决问题的能力，注意介绍泛函分析理论与数学其他分支的联系。书中包含丰富的例子与应用，对于掌握基础理论有很大帮助。

本书第二版对内容做了一定调整，如加强了对于弱收敛的介绍，将原来的紧算子与 Fredholm 算子一章提前等，并优化了部分证明，以更好地适应教学与科研的新形势。

本书适于用作数学专业本科生与研究生的教材，且可供其他理工科专业师生，以及数学、物理领域科研人员和工程技术人员参考。

为帮助读者更好地掌握泛函分析的基本内容以及解题的思路与方法，本书有配套的学习辅导书《泛函分析学习指南》（北京大学出版社），供读者选用。

ISBN 978-7-301-30964-3
定价：38.00元
