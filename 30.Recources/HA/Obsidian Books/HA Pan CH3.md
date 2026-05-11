# 第三章  Fourier 变换与 Fourier 积分

上一章讨论用来描述周期现象的周期函数，并且研究了把它们展开成 Fourier 级数的问题。

我们知道，在各种问题中常出现定义在全实轴上的非周期函数，例如 $f(x)=\dfrac{1}{1+x^2}$, $g(x)=e^{-x^2}(-\infty<x<\infty)$ 等等．这些函数无法周期化，从而不可能展开成 Fourier 级数．但是，我们仍希望能用一些基本的函数，如指数函数或三角函数，通过迭加来表示它们，也就是想得到它们的展开式．这时的展开式不可能是离散形式的和式，而只能是连续形式的和式，也就是积分．

本章讨论用来描述非周期现象的函数，研究其 Fourier 积分．所用的方法以 Fourier 级数已有的结果为基础，所讨论的问题也与 Fourier 级数相平行．

## §3.1 定义与基本性质

我们考虑定义在 $(-\infty,\infty)$ 上的函数，设 $f\in L(R)$。如果只取 $f$ 在 $(-l,l)$ 上给定的值，那么可以写出它的 Fourier 级数展开式。然后令 $l\to+\infty$, 试图用极限的方法形式上导出 $f$ 的展开式。

$f(x)$ 在 $(-l,l)$ 上的 Fourier 级数是

$$
f(x)\sim\sum_{n=-\infty}^{\infty}\left[\dfrac{1}{2l}\int_{-l}^{l}f(y)e^{-\frac{n\pi y}{l}i}\,dy\right]e^{\frac{n\pi x}{l}i}.
$$

上式右端的级数可以改写成

$$
=\sum_{n=-\infty}^{\infty}\left[\dfrac{1}{2\pi}\int_{-l}^{l}f(y)e^{it_n(x-y)}\,dy\right]\Delta t_n,
$$

其中

$$
t_n=\dfrac{n\pi}{l},\quad \Delta t_n=t_{n+1}-t_n=\dfrac{\pi}{l},
$$

$n=0,\pm1,\pm2,\cdots$。

这个和式可以近似地看作关于 $t$ 的函数

$$
\dfrac{1}{2\pi}\int_{-\infty}^{\infty}f(y)e^{it(x-y)}\,dy
$$

在 $(-\infty,\infty)$ 上的积分和，令 $l\to+\infty$, 形式上得到它的极限是积分

$$
\int_{-\infty}^{\infty}\left[\dfrac{1}{2\pi}\int_{-\infty}^{\infty}f(y)e^{it(x-y)}\,dy\right]dt.
$$

由此导出 $f(x)$ 在 $(-\infty,\infty)$ 上的展开式应当是

$$
f(x)\sim\int_{-\infty}^{\infty}c(t)e^{itx}dt,\qquad (3.1)
$$

其中

$$
c(t)=\dfrac{1}{2\pi}\int_{-\infty}^{\infty}f(y)e^{-ity}dy.
$$

这是复型的展开式。实型的展开式应当是

$$
f(x)\sim\int_0^{\infty}[a(t)\cos tx+b(t)\sin tx]dt,\qquad (3.2)
$$

其中

$$
a(t)=\dfrac{1}{\pi}\int_{-\infty}^{\infty}f(y)\cos ty\,dy,
$$

$$
b(t)=\dfrac{1}{\pi}\int_{-\infty}^{\infty}f(y)\sin ty\,dy.
$$

以上只是从形式上导出函数的展开式。下面给出 Fourier 变换与 Fourier 积分的确切的定义。为了使有关的公式对称起见，我们把以上包含在分母中的 $2\pi$ 通过变换转移到指数上。

设 $f\in L(R)$, 我们称

$$
\hat f(t)=\int_{-\infty}^{\infty} f(x)e^{-2\pi ixt}\,dx\qquad\qquad\qquad\qquad\qquad(3.3)
$$

为 $f$ 的 Fourier 变换。同时记

$$
f(x)\sim\int_{-\infty}^{\infty}\hat f(t)e^{2\pi ixt}\,dt，\qquad\qquad\qquad\qquad\qquad(3.4)
$$

上式右端的积分称为 $f$ 的 Fourier 积分[^1]。本章将要讨论 $f$ 的 Fourier 积分是否收敛以及在什么条件下收敛到 $f(x)$ 等问题。

若 $f$ 是偶函数，即 $f(-x)=f(x)$，(3.3)式化为

$$
\hat f(t)=2\int_0^{\infty} f(x)\cos 2\pi tx\,dx.
$$

易证 $\hat f(t)$ 也是偶函数，(3.4)式化为只含余弦函数的公式

$$
f(x)\sim 2\int_0^{\infty}\hat f(t)\cos 2\pi xt\,dt
$$

$$
=2\int_0^{\infty}\left\{2\int_0^{\infty} f(u)\cos 2\pi tu\,du\right\}\cos 2\pi xt\,dt.
$$

类似地，若 $f$ 是奇函数，即 $f(-x)=-f(x)$，则 $\hat f(t)$ 也是奇函数，且可得到只含正弦函数的公式：

$$
i\hat f(t)=2\int_0^{\infty} f(u)\sin 2\pi tu\,du，
$$

$$
f(x)\sim 2i\int_0^{\infty}\hat f(t)\sin 2\pi xt\,dt
$$

$$
=2\int_0^{\infty}\left\{2\int_0^{\infty} f(u)\sin 2\pi tu\,du\right\}\sin 2\pi xt\,dt.
$$

如果 $f$ 只定义在 $(0,\infty)$ 上，设 $f\in L(0,\infty)$，令

$$
\hat f_c(t)=2\int_0^{\infty} f(u)\cos 2\pi tu\,du，\qquad\qquad\qquad\qquad\qquad(3.5)
$$

$$
\hat f_s(t)=2\int_0^{\infty} f(u)\sin 2\pi tu\,du，\qquad\qquad\qquad\qquad\qquad(3.6)
$$

这里的 $\hat f_c(t)$ 称为 $f$ 的 Fourier 余弦变换，$\hat f_s(t)$ 称为 $f$ 的 Fourier 正弦变换。我们可以把 $f(x)$ 延拓成为 $(-\infty,\infty)$ 上的偶（或奇）函数，再应用上述关于偶（奇）函数的 Fourier 积分公式。

> [!theorem] 定理 3.1
> 设 $f\in L(R)$，Fourier 变换 $\hat f(t)$ 由(3.3)式给定，则有
> 
> (i) $\lim_{|t|\to\infty}\hat f(t)=0$；
> 
> (ii) $|\hat f(t)|\le \|f\|_1$，$\quad t\in(-\infty,\infty)$，
> 
> 其中 $\|f\|_1=\int_{-\infty}^{\infty}|f(x)|\,dx$。映射 $f\to\hat f$ 可以看作是 $L^1(R)$ 到 $L^\infty(R)$ 的有界线性算子：
> 
> $\|\hat f\|_\infty\le \|f\|_1$；
> 
> (iii) $\hat f(t)$ 在 $(-\infty,\infty)$ 上一致连续；
> 
> (iv) 记平移算子为 $\tau_h$：$(\tau_h f)(x)=f(x-h)$，就有
> 
> $(\tau_h f)^\wedge(t)=e^{-2\pi ith}\hat f(t)$；
> 
> (v) $(e^{2\pi ihx}f)^\wedge(t)=\hat f(t-h)=(\tau_h\hat f)(t)$；
> 
> (vi) 记展缩算子为 $T_a$：$(T_a f)(x)=f(ax)$，对实数 $a\ne0$，有
> 
> $(T_a f)^\wedge(t)=\frac{1}{|a|}\hat f\left(\frac{t}{a}\right)$。

> [!proof]-
> (i) 这就是 Riemann-Lebesgue 引理（定理 2.4）的结论。
> 
> (ii) 由 $\hat f(t)$ 的定义及积分性质容易得到。
> 
> (iii) $|\hat f(t+h)-\hat f(t)|=\left|\int_{-\infty}^{\infty} f(u)e^{-2\pi itu}(e^{-2\pi ihu}-1)\,du\right|$
> 
> $$
> \le \int_{-\infty}^{\infty}|e^{-2\pi ihu}-1|\,|f(u)|\,du.
> $$
> 
> 以上不等式的右端与 $t$ 无关，被积函数不超过 $2|f(u)|$。根据控制收敛定理，当 $h\to0$ 时，它趋向于零，所以 $\hat f(t)$ 一致连续。
> 
> (iv)，(v)，(vi) 都可通过作积分变量的线性变换推得，以 (iv) 为例：令 $y=u-h$，可得
> 
> $(\tau_h f)^\wedge(t)=\int_{-\infty}^{\infty} f(u-h)e^{-2\pi itu}\,du$
> 
> $$
> =\int_{-\infty}^{\infty} f(y)e^{-2\pi it(y+h)}\,dy
> $$
> 
> $$
> =e^{-2\pi ith}\hat f(t).\quad\blacksquare
> $$

此外，设 $f,g\in L(R)$，由积分的线性性质易得

$$
(af+bg)^\wedge(t)=a\hat f(t)+b\hat g(t).
$$

> [!theorem] 定理 3.2
> 设 $f\in L(R)$，$f_n\in L(R)$，$n=1,2,\cdots$，若 $\|f_n-f\|_1\to0\ (n\to\infty)$，则 $\hat f_n(t)$ 关于 $t$ 一致收敛于 $\hat f(t)$。

> [!proof]-
> 由定理 3.1(ii)，有
> 
> $|\hat f_n(t)-\hat f(t)|\le \|f_n-f\|_1$，$\quad t\in(-\infty,\infty)$，
> 
> 令 $n\to\infty$，即得结论。$\quad\blacksquare$

> [!theorem] 定理 3.3
> 设 $f,g\in L(R)$，则以下乘法公式成立：
> 
> $$
> \int_{-\infty}^{\infty}\hat f(t)g(t)\,dt=\int_{-\infty}^{\infty} f(t)\hat g(t)\,dt.\qquad\qquad\qquad\qquad\qquad(3.7)
> $$

> [!proof]-
> 由 Tonelli 定理推知有以下不等式成立，
> 
> $$
> \int_{-\infty}^{\infty}\int_{-\infty}^{\infty}|e^{-2\pi itu}f(u)g(t)|\,du\,dt\le \|f\|_1\,\|g\|_1<+\infty，
> $$
> 
> 于是根据 Fubini 定理便得
> 
> $$
> \int_{-\infty}^{\infty}\hat f(t)g(t)\,dt=\int_{-\infty}^{\infty} g(t)\left\{\int_{-\infty}^{\infty} f(u)e^{-2\pi itu}\,du\right\}\,dt
> $$
> 
> $$
> =\int_{-\infty}^{\infty} f(u)\left\{\int_{-\infty}^{\infty} g(t)e^{-2\pi itu}\,dt\right\}\,du
> $$
> 
> $$
> =\int_{-\infty}^{\infty} f(u)\hat g(u)\,du.\quad\blacksquare
> $$

下面考虑 $(-\infty,\infty)$ 上函数的卷积的 Fourier 变换。已知：设 $f,g\in L(R)$，$f$ 与 $g$ 的卷积为

$$
(f*g)(x)=\int_{-\infty}^{\infty} f(x-u)g(u)\,du，\qquad\qquad\qquad\qquad\qquad(3.8)
$$

且知 $(f*g)(x)=(g*f)(x)$。

> [!theorem] 定理 3.4
> 设 $f,g\in L(R)$，则 $f*g\in L(R)$，满足
> 
> $$
> \|f*g\|_1\le \|f\|_1\,\|g\|_1，\qquad\qquad\qquad\qquad\qquad(3.9)
> $$
> 
> 并且
> 
> $$
> (f*g)^\wedge(t)=\hat f(t)\cdot\hat g(t).\qquad\qquad\qquad\qquad\qquad(3.10)
> $$

> [!proof]-
> 由定理 2.1 便得到 (3.9)。于是，根据 Fubini 定理可得
> 
> $(f*g)^\wedge(t)=\int_{-\infty}^{\infty}\left\{\int_{-\infty}^{\infty} f(x-u)g(u)\,du\right\}e^{-2\pi ixt}\,dx$
> 
> $$
> =\int_{-\infty}^{\infty} g(u)e^{-2\pi itu}\left\{\int_{-\infty}^{\infty} f(x-u)e^{-2\pi i(x-u)t}\,dx\right\}\,du
> $$
> 
> $$
> =\hat f(t)\cdot\hat g(t).
> $$
> 
> 以上最后一个等式由对花括号内的积分作平移变换 $y=x-u$ 而得到。$\quad\blacksquare$

现在我们讨论导函数的 Fourier 变换以及函数的 Fourier 变换的导函数。

> [!theorem] 定理 3.5
> (i) 设 $f\in L(R)$，$xf\in L(R)$，则 $\hat f(t)$ 可微，并且
> 
> $$
> (\hat f)'(t)=(-2\pi ixf)^\wedge(t).\qquad\qquad\qquad\qquad\qquad(3.11)
> $$
> 
> (ii) 设 $f\in L(R)$，又局部绝对连续（即，在任何有界闭区间上绝对连续），简记为 $f\in AC_{loc}$，并且 $f'(x)\in L(R)$，则
> 
> $$
> (f')^\wedge(t)=(2\pi it)\hat f(t).\qquad\qquad\qquad\qquad\qquad(3.12)
> $$

> [!proof]-
> (i) 考察差商
> 
> $$
> \frac{\hat f(t+h)-\hat f(t)}{h}=\int_{-\infty}^{\infty} f(x)\left(\frac{e^{-2\pi ixh}-1}{h}\right)e^{-2\pi ixt}\,dx，\qquad\qquad\qquad\qquad\qquad(3.13)
> $$
> 
> 因为有不等式
> 
> $$
> \left|f(x)\left(\frac{e^{-2\pi ixh}-1}{h}\right)\right|\le 2\pi|x|\,|f(x)|\in L(R)，
> $$
> 
> 而且
> 
> $$
> \lim_{h\to0}f(x)\left(\frac{e^{-2\pi ixh}-1}{h}\right)=-2\pi ix f(x)，a.e.，
> $$
> 
> 所以在 (3.13) 式两边令 $h\to0$，由控制收敛定理便得
> 
> $$
> (\hat f)'(t)=\int_{-\infty}^{\infty}[-2\pi ixf(x)]e^{-2\pi ixt}\,dx=(-2\pi ixf)^\wedge(t).
> $$
> 
> (ii) 因为 $f$ 及 $e^{-2\pi ixt}$ 绝对连续，且 $f'$ 在 $(-\infty,\infty)$ 上可积，所以对任意 $A>0$，$B>0$，用分部积分公式得
> 
> $$
> \int_{-B}^{A} f'(x)e^{-2\pi ixt}\,dt
> $$
> 
> $$
> =[f(x)e^{-2\pi ixt}]_{-B}^{A}-(-2\pi it)\int_{-B}^{A} f(x)e^{-2\pi ixt}\,dx.\qquad\qquad\qquad\qquad\qquad(3.14)
> $$
> 
> 下面证明
> 
> $$
> \lim_{x\to+\infty}f(x)=0=\lim_{x\to-\infty}f(x).\qquad\qquad\qquad\qquad\qquad(3.15)
> $$
> 
> 由 $f$ 局部绝对连续，我们有等式
> 
> $$
> f(x)-f(0)=\int_0^x f'(u)\,du.
> $$
> 
> 按假定 $f'\in L(R)$，从而上式右端当 $x\to+\infty$，或 $x\to-\infty$ 时极限必存在。于是存在极限
> 
> $$
> \lim_{x\to+\infty}f(x)=c_1，\quad \lim_{x\to-\infty}f(x)=c_2.
> $$
> 
> 根据 $f\in L(R)$，便可推知 $c_1=0=c_2$。否则，设 $c_1>0$，存在 $A_0>0$，当 $x>A_0$ 时，$f(x)>\frac{c_1}{2}$。若 $N>A_0$，有
> 
> $$
> \int_{A_0}^{N} f(x)\,dx\ge \frac{c_1}{2}(N-A_0)\to+\infty\quad (N\to+\infty).
> $$
> 
> 这与 $f$ 的可积性矛盾。类似可证 $c_2=0$。即有 (3.15) 式成立。在 (3.14) 两边，令 $A\to+\infty$，$B\to+\infty$，便得到 (3.12) 式。$\quad\blacksquare$

---

[^1]: Fourier 积分的定义还有另外两种形式：其一是(3.1)式，式中 $\omega(t)$ 即为 Fourier 变换；其二是令$$\hat f(t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x)e^{-ixt}\,dx$$为 $f$ 的 Fourier 变换，而 $f$ 的 Fourier 积分为$$f(x)\sim\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}\hat f(t)e^{ixt}\,dt.$$


## §3.2 Fourier 变换的反演理论

对于周期函数，我们想得到函数的 Fourier 级数展开式。类似地，对于全实轴上的函数，也希望有函数的 Fourier 积分展开式，也就是使(3.4)式成为等式。当然不可能期望对任意函数都有展开式，必须附加一些条件才能使等式成立。

本节讨论积分展开式的逐点收敛性，将证明：若可积函数 f 在点 x₀ 处满足 Fourier 级数收敛的条件，便推知 f 的 Fourier 积分也在 x₀ 处收敛。下一节通过求和理论将进一步讨论几乎处处收敛性。

设 $f \in L(\mathbb{R})$，如果等式

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(t) e^{2\pi i x t} \, dt \qquad (3.16)
$$

成立，就称为反演公式成立。我们将讨论在什么条件下有反演公式成立。在此先讨论更弱的问题，即

$$
\lim_{R \to \infty} \int_{-R}^{R} \hat{f}(t) e^{2\pi i x t} \, dt
$$

是否存在？是否等于 $f(x)$？

我们记

$$
\begin{aligned}
f_R(x) &= \int_{-R}^{R} \hat{f}(t) e^{2\pi i x t} \, dt \\
&= \int_{-R}^{R} \left\{ \int_{-\infty}^{\infty} f(u) e^{-2\pi i u t} \, du \right\} e^{2\pi i x t} \, dt \\
&= \int_{-\infty}^{\infty} f(u) \left\{ \int_{-R}^{R} e^{2\pi i (x-u) t} \, dt \right\} du \\
&= \frac{1}{\pi} \int_{-\infty}^{\infty} f(u) \frac{\sin 2\pi R(x-u)}{x-u} \, du \\
&= \frac{1}{\pi} \int_{-\infty}^{\infty} f(x-t) \frac{\sin 2\pi R t}{t} \, dt. \qquad (3.17)
\end{aligned}
$$

上面第三个等式是用 Fubini 定理得到的。(3.17)式最末端的积分称为 f 的 Dirichlet 积分，其积分核 $\frac{\sin 2\pi R t}{t}$ 称为 Dirichlet 核。

如果直接令 $f_R(x)$ 为

$$
\begin{aligned}
f_R(x) &= \frac{1}{\pi} \int_{-\infty}^{\infty} f(x-t) \frac{\sin 2\pi R t}{t} \, dt \\
&= \frac{1}{\pi} \int_{-\infty}^{\infty} f(x+t) \frac{\sin 2\pi R t}{t} \, dt, \qquad (3.17')
\end{aligned}
$$

然后考虑 $f_R(x)$ 的极限，就不需要假定 $f \in L(\mathbb{R})$ 这样强的条件，而只需设 $\frac{f(x)}{1+|x|} \in L(\mathbb{R})$，由这个条件不难推知 f 在任何有界区间是可积的。

对于任给 $a \in \mathbb{R}$，作以下函数：

$$
f^{(a)}(x) = f(x), \quad x \in [a, a+2\pi),
$$

并且把它以 $2\pi$ 为周期延拓到全实轴。我们将证明下述论断：$f_R(x)$ 在 $(a, a+2\pi)$ 中的收敛性与周期函数 $f^{(a)}(x)$ 的 Fourier 级数部分和 $S_n(f^{(a)}, x)$ 的收敛性相同。

> [!theorem] 定理 3.6
> 设 $\frac{f(x)}{1+|x|} \in L(\mathbb{R})$，周期函数 $f^{(a)}(x)$ 与 $f(x)$ 在区间 $J_a = (a, a+2\pi)$ 上相等，则当 $R \to \infty$ 时，
> 
> $$
> f_R(x) - S_{[2\pi R]}(f^{(a)}, x) \to 0, \quad x \in J_a. \qquad (3.18)
> $$

> [!proof]- 证明
> 设 $x_0 \in J_a$，取 $\delta > 0$ 充分小，使 $x_0 \pm \delta \in J_a$。因为 $\left| \frac{f(x_0+t)}{t} \right|$ 在 $|t| \geq \delta$ 处可积，用 Riemann-Lebesgue 引理，可把(3.17')式化为
> 
> $$
> f_R(x_0) = \frac{1}{\pi} \int_{-\delta}^{\delta} f(x_0+t) \frac{\sin 2\pi R t}{t} \, dt + o(1).
> $$
> 
> 记 $R_1 = 2\pi R$，$R_2 = [R_1] + \frac{1}{2}$，则 $-\frac{1}{2} \leq R_1 - R_2 \leq \frac{1}{2}$。取 $n = [R_1]$，$f^{(a)}$ 的 Fourier 级数部分和可表示成
> 
> $$
> S_n(f^{(a)}, x_0) = \frac{1}{\pi} \int_{-\delta}^{\delta} f(x_0+t) \frac{\sin\left(n+\frac{1}{2}\right)t}{t} \, dt + o(1).
> $$
> 
> 于是，两者之差为
> 
> $$
> \begin{aligned}
> f_R(x_0) - S_{[2\pi R]}(f^{(a)}, x_0) 
> &= \frac{1}{\pi} \int_{-\delta}^{\delta} f(x_0+t) \frac{\sin R_1 t - \sin R_2 t}{t} \, dt + o(1) \\
> &= \left(\frac{R_1 - R_2}{\pi}\right) \int_{-\delta}^{\delta} f(x_0+t) \frac{2\sin\frac{1}{2}(R_1-R_2)t}{(R_1-R_2)t} \\
> &\quad \times \cos\frac{1}{2}(R_1+R_2)t \, dt + o(1) \\
> &= I_R + o(1) \quad (R \to \infty).
> \end{aligned}
> $$
> 
> 由于 $h(x) = \frac{\sin x}{x}$ 是偶函数（设 $h(0)=1$），它在 $[0, \frac{\pi}{2}]$ 是非负减函数。对被积函数中的因子 $2\sin\frac{1}{2}(R_1-R_2)t/(R_1-R_2)t$ 用积分第二中值定理可得
> 
> $$
> \begin{aligned}
> I_R &= \left(\frac{R_1 - R_2}{\pi}\right) \int_{0}^{\delta} [f(x_0+t) + f(x_0-t)] \\
> &\quad \times \frac{2\sin\frac{1}{2}(R_1-R_2)t}{(R_1-R_2)t} \cos\frac{1}{2}(R_1+R_2)t \, dt \\
> &= \left(\frac{R_1 - R_2}{\pi}\right) \int_{0}^{\xi} [f(x_0+t) + f(x_0-t)] \cos\frac{1}{2}(R_1+R_2)t \, dt,
> \end{aligned}
> $$
> 
> 其中 $0 < \xi < \delta$。再根据 Riemann-Lebesgue 引理得到
> 
> $$
> I_R = o(1) \quad (R \to \infty),
> $$
> 
> 于是
> 
> $$
> f_R(x_0) - S_{[2\pi R]}(f^{(a)}, x_0) \to 0 \quad (R \to \infty).
> $$
> 
> 注意，$I_R$ 式中的积分上限 $\xi$ 可能与 $R$ 有关，但由 Riemann-Lebesgue 引理的注可知 $I_R \to 0$ 关于 $\xi$ 是一致的。
> 
> 进一步的讨论还可以证明：对于 $J_a$ 内任何闭子区间 $J_a'$，
> 
> $$
> f_R(x) - S_{[2\pi R]}(f^{(a)}, x) \to 0 \quad (R \to \infty)
> $$
> 
> 关于 $x \in J_a'$ 是一致的。此证明省略（参看 Zygmund[7]第 XVI 章）。

> [!theorem] 推论 3.7
> 若 $\frac{f(x)}{1+|x|} \in L(\mathbb{R})$，如果对于 $x_0 \in J_a$，有
> 
> $$
> S_n(f^{(a)}, x_0) \to S \quad (n \to \infty),
> $$
> 
> 则
> 
> $$
> f_R(x_0) \to S \quad (R \to \infty).
> $$
> 
> 这个推论称为 Fourier 单积分定理。

> [!theorem] 推论 3.8
> 设 $f \in L(\mathbb{R})$，若 f 在 $x_0$ 处满足 Fourier 级数收敛的条件，则 f 的 Fourier 积分也在 $x_0$ 处收敛。特别地，
> 
> **(1)** 若存在 $\delta > 0$，使得
> 
> $$
> \int_{0}^{\delta} \frac{|\varphi_{x_0}(t) - f(x_0)|}{t} \, dt < \infty,
> $$
> 
> 其中 $\varphi_{x_0}(t) = \frac{1}{2}[f(x_0+t) + f(x_0-t)]$，则
> 
> $$
> \lim_{R \to \infty} \int_{-R}^{R} \hat{f}(t) e^{2\pi i x_0 t} \, dt = \lim_{R \to \infty} \int_{-R}^{R} dt \int_{-\infty}^{\infty} f(u) e^{2\pi i (x_0-u)t} \, du = f(x_0). \qquad (3.19)
> $$
> 
> **(ii)** 若 f 在 $x_0$ 的某个邻域上是有界变差的，则把(3.19)式右端改为 $\frac{1}{2}[f(x_0+0) + f(x_0-0)]$ 后，该等式成立。
> 
> 本推论又称为 Fourier 重积分定理。


## §3.3 求和理论

先考虑算术平均求和，设 $f\in L(\mathbb{R})$. 可以看到(3.17)式中的 $f_R(x)$相当于 Fourier 级数的部分和 $S_n(x)$，于是相应的算术平均应当为：对 $T>0$，

$$\sigma_T(x)=\frac{1}{T}\int_{0}^{T}f_R(x)dR=\frac{1}{T}\int_{0}^{T}{\int_{-R}^{R}\hat{f}(t)e^{2\pi ixt}dt}dR$$

$$=\frac{1}{T}{\int_{0}^{T}\hat{f}(t)e^{2\pi ixt}{\int_{t}^{T}dR}dt+\int_{-T}^{0}\hat{f}(t)e^{2\pi ixt}{\int_{-t}^{T}dR}dt}$$

$$=\int_{-T}^{T}\left(1-\frac{|t|}{T}\right)\hat{f}(t)e^{2\pi ixt}dt.$$

记函数

$$\Phi(t)=\begin{cases}1-|t|，&|t|\leq 1，\\0，&|t|>1，\end{cases}\tag{3.20}$$

则 $\sigma_T(x)$可改写成

$$\sigma_T(x)=\int_{-\infty}^{\infty}\Phi\left(\frac{t}{T}\right)\hat{f}(t)e^{2\pi ixt}dt。\tag{3.21}$$

由(3.20)容易看到 $\Phi\in L(\mathbb{R})$，且 $\Phi$ 是偶函数。

> [!theorem] 引理 3.9
> 设 $f\in L(\mathbb{R})$，$\Phi\in L(\mathbb{R})$，记 $\hat{\Phi}(t)=K(t)$，则对 $a>0$ 有
> 
> $$\int_{-\infty}^{\infty}\Phi(at)\hat{f}(t)e^{2\pi ixt}dt=\int_{-\infty}^{\infty}f(t)K_a(t-x)dt，\tag{3.22}$$
> 
> 其中 $K_a(t)=\frac{1}{a}K\left(\frac{t}{a}\right)$。

> [!proof]-
> 由乘法公式(3.7)以及定理 3.1(vi),(v)便可得到。

> [!example] 例 1
> 设 $\Phi(x)$由(3.20)给出，求 $\hat{\Phi}$。
> 
> **解** 通过计算可得
> 
> $$K(t)=\hat{\Phi}=\int_{-1}^{1}(1-|x|)e^{-2\pi ixt}dx$$
> 
> $$=\int_{0}^{1}(1-x)\cdot 2\cos 2\pi tx\,dx$$
> 
> $$=2\cdot\frac{1-\cos 2\pi t}{4\pi^2 t^2}=\left(\frac{\sin\pi t}{\pi t}\right)^2，\tag{3.23}$$
> 
> 还可算得
> 
> $$\int_{-\infty}^{\infty}K(t)dt=\frac{1}{\pi}\int_{-\infty}^{\infty}\left(\frac{\sin u}{u}\right)^2du=1。\tag{3.24}$$
> 
> 于是，根据(3.22)及(3.23)，令 $a=\frac{1}{T}$，得到
> 
> $$\sigma_T(x)=\int_{-\infty}^{\infty}\Phi\left(\frac{t}{T}\right)\hat{f}(t)e^{2\pi ixt}dt=\int_{-\infty}^{\infty}f(t)K_a(t-x)dt$$
> 
> $$=\int_{-\infty}^{\infty}f(t)\cdot T\cdot\left[\frac{\sin\pi T(t-x)}{\pi T(t-x)}\right]^2dt$$
> 
> $$=\int_{-\infty}^{\infty}f(x+u)\cdot\frac{1}{T}\left(\frac{\sin\pi Tu}{\pi u}\right)^2du$$
> 
> $$=\int_{-\infty}^{\infty}f(x-t)\cdot\frac{1}{T}\left(\frac{\sin\pi Tt}{\pi t}\right)^2dt。\tag{3.25}$$
> 
> 上式右端的积分称为 $f$ 的 Fejér 积分，$\frac{1}{T}\left(\frac{\sin\pi Tt}{\pi t}\right)^2$ 称为 Fejér 核。如果
> 
> $$\lim_{T\to\infty}\sigma_T(x)=S，$$
> 
> 就说 $f$ 的 Fourier 积分在点 $x$ 可算术平均求和于 $S$。

我们可以用与定理 2.22 类似的方法证明 $f$ 的 Fourier 积分几乎处处可算术平均求和于 $f(x)$。但在这里将与下面两种求和法一起用统一的方法来讨论。

其次考虑 Abel 求和法。如果有

$$\lim_{y\to0_+}\int_{-\infty}^{\infty}e^{-2\pi y|t|}\hat{f}(t)e^{2\pi ixt}dt=S，$$

就说 $f$ 的 Fourier 积分在点 $x$ 可 Abel 求和于 $S$。

> [!example] 例 2
> 设 $\Phi(x)=e^{-|x|}$，求 $\hat{\Phi}$。
> 
> **解**
> 
> $$K(t)=\hat{\Phi}(t)=\int_{-\infty}^{\infty}e^{-|x|}e^{-2\pi ixt}dx=2\int_0^{\infty}e^{-x}\cos 2\pi tx\,dx=\frac{2}{1+(2\pi t)^2}。\tag{3.26}$$
> 
> 用(3.22)式及(3.26)式可得 Abel 平均的公式如下：
> 
> $$\begin{aligned}
> u(x,y)&=\int_{-\infty}^{\infty}e^{-2\pi y|t|}\hat{f}(t)e^{2\pi ixt}dt\\
> &=\int_{-\infty}^{\infty}\Phi(2\pi yt)\hat{f}(t)e^{2\pi ixt}dt\\
> &=\frac{1}{\pi}\int_{-\infty}^{\infty}f(t)\frac{y}{(x-t)^2+y^2}dt\\
> &=\frac{1}{\pi}\int_{-\infty}^{\infty}f(x-t)\frac{y}{t^2+y^2}dt\quad(y>0)。
> \end{aligned}\tag{3.27}$$
> 
> 上式右端的积分称为 $f$ 的 Poisson 积分。令
> 
> $$P(x,y)=\frac{1}{\pi}\frac{y}{x^2+y^2}，$$
> 
> 它称为 Poisson 核。对于例 2 中的 $K(t)$也容易算得
> 
> $$\int_{-\infty}^{\infty}K(t)dt=\int_{-\infty}^{\infty}P(x,y)dx=\frac{1}{\pi}\int_{-\infty}^{\infty}\frac{1}{1+t^2}dt=1。$$

与 Abel 求和法类似的是 Gauss 求和法。$f$ 的 Fourier 积分的 Gauss 平均为

$$G(x,\alpha)=\int_{-\infty}^{\infty}e^{-4\pi^2\alpha^2 t^2}\hat{f}(t)e^{2\pi ixt}dt。$$

如果有

$$\lim_{\alpha\to0_+}G(x,\alpha)=S，$$

就说 $f$ 的 Fourier 积分可 Gauss 求和于 $S$。

> [!example] 例 3
> 设 $\Phi(x)=e^{-x^2}$，求 $\hat{\Phi}$。
> 
> **解** $K(t)=\hat{\Phi}(t)=\int_{-\infty}^{\infty}e^{-x^2}e^{-2\pi ixt}dx$。
> 
> 下面用复变函数论的方法来解此问题。设 $z=x+iy$，求函数 $e^{-z^2}$在图 3.1 所示闭曲线上的积分。因为 $e^{-z^2}$解析，由 Cauchy 定理知
> 
> $$\oint_\Gamma e^{-z^2}dz=0，\tag{3.28}$$
> 
> 其中在与 $x$ 轴垂直的两条直线段上的积分，当 $T\to\infty$ 时极限为 0。设 $t$ 固定，当 $T\to+\infty$，有
> 
> $$\left|\int_T^{T+it}e^{-z^2}dz\right|=\left|\int_0^te^{-(T+iy)^2}dy\right|\leq e^{-T^2}\int_0^te^{y^2}dy\to 0。$$
> 
> 类似地有
> 
> $$\left|\int_{-T+it}^{-T}e^{-z^2}dz\right|\to 0\quad(T\to+\infty)。$$
> 
> 于是根据(3.28)式推知 $\Gamma$ 中与 $x$ 轴平行的两条直线段上的积分的极限相等，即
> 
> $$\lim_{T\to+\infty}\int_{-T+it}^{T+it}e^{-z^2}dz=\lim_{T\to+\infty}\int_{-T}^Te^{-x^2}dx=\int_{-\infty}^{\infty}e^{-x^2}dx=\sqrt{\pi}。$$
> 
> 而上式的左端等于
> 
> $$\int_{-\infty}^{\infty}e^{-(x+it)^2}dx=e^{t^2}\int_{-\infty}^{\infty}e^{-(x^2+2ixt)}dx。$$
> 
> 联合两端的结果便得到
> 
> $$\int_{-\infty}^{\infty}e^{-x^2}e^{-2ixt}dx=\sqrt{\pi}\,e^{-t^2}。$$
> 
> 因此
> 
> $$K(t)=\hat{\Phi}(t)=\int_{-\infty}^{\infty}e^{-x^2}e^{-2\pi ixt}dx=\sqrt{\pi}\,e^{-(\pi t)^2}。\tag{3.29}$$
> 
> 容易算得
> 
> $$\int_{-\infty}^{\infty}K(t)dt=\frac{1}{\sqrt{\pi}}\int_{-\infty}^{\infty}e^{-u^2}du=1。$$
> 
> 用(3.22)及(3.29)式得到 Gauss 平均的公式
> 
> $$\begin{aligned}
> G(x,\alpha)&=\int_{-\infty}^{\infty}e^{-4\pi^2\alpha^2 t^2}\hat{f}(t)e^{2\pi ixt}dt\\
> &=\int_{-\infty}^{\infty}f(x-t)(4\pi\alpha)^{-\frac{1}{2}}e^{-\frac{t^2}{4\alpha}}dt。
> \end{aligned}\tag{3.30}$$
> 
> 上式右端的积分称为 Gauss-Weierstrass 积分，其中
> 
> $$w(x,\alpha)=(4\pi\alpha)^{-\frac{1}{2}}e^{-\frac{x^2}{4\alpha}}$$
> 
> 称为 Weierstrass 核。

以上各种求和可以统一考虑。只需讨论当 $\alpha\to+0$ 时，$(f*K_\alpha)(x)$是否收敛到 $f(x)$。

> [!theorem] 定理 3.10
> 设 $f\in L(\mathbb{R})$，$K(t)$是 $\mathbb{R}$ 上非负连续偶函数，它在 $[0,\infty)$单调递减，并且
> 
> $$\int_{-\infty}^{\infty}K(t)dt=1，\tag{3.31}$$
> 
> 则在 $f$ 的 Lebesgue 点 $x$ 处，有
> 
> $$\lim_{\alpha\to0_+}(f*K_\alpha)(x)=f(x)。\tag{3.32}$$

这个定理是定理 1.9 的特殊情形，它由定理 1.9 立即推得。因为 $f$ 的连续点必定是 $f$ 的 Lebesgue 点，所以对于 $f$ 的连续点 $x$ 有(3.32)式成立。

> [!theorem] 定理 3.11
> 设 $f\in L(\mathbb{R})$，则 $f$ 的 Fourier 积分在 $f$ 的 Lebesgue 点 $x$ 处可算术平均求和（可 Abel 求和或 Gauss 求和）于 $f(x)$。从而几乎处处可以算术平均求和于 $f(x)$，同样，也几乎处处可 Abel 求和（或 Gauss 求和）于 $f(x)$。

> [!proof]-
> 根据(3.26)及(3.29)便得知 Abel 平均及 Gauss 平均相应的 $K(t)$都满足定理 3.10 的条件，因此由定理 3.10 立刻得到本推论的结论。关于算术平均相应的 $K(t)$由(3.23)给出，它在 $[0,\infty)$不是单调递减的。但是存在常数 $C$，使得
> 
> $$0\leq K(t)=\left(\frac{\sin\pi t}{\pi t}\right)^2\leq\frac{C}{1+t^2}=H(t)。$$
> 
> 这里的 $H(t)$是非负连续偶函数，在 $[0,\infty)$单调递减，并且 $H(t)\in L(\mathbb{R})$。根据推论 1.10，便可得到关于算术平均求和的结论。

$f$ 的 Fourier 积分关于上述三种求和法，也可以得到与定理 2.18 类似的结论。此处不再讨论。

> [!theorem] 定理 3.12
> 设 $f\in L(\mathbb{R})$，则 $f$ 的 Fourier 积分按 $L^1$ 模可算术平均求和于 $f(x)$，即
> 
> $$\lim_{T\to\infty}\|\sigma_T-f\|_1=0。$$
> 
> 同样地，$f$ 的 Fourier 积分按 $L^1$ 模可 Abel 求和（或 Gauss 求和）于 $f(x)$。

> [!proof]-
> 只要把定理 1.8 用于算术平均，Abel 平均及 Gauss 平均（见(3.25),(3.27)以及(3.30)）。它们相应的 $K(t)$都满足定理 1.8 的条件。根据定理 1.8 即可得到结论。

> [!theorem] 定理 3.13
> 设 $f\in L(\mathbb{R})$，并且 $\hat{f}\in L(\mathbb{R})$，则 $f$ 的 Fourier 积分几乎处处收敛到 $f(x)$，即以下反演公式几乎处处成立：
> 
> $$\int_{-\infty}^{\infty}\hat{f}(t)e^{2\pi ixt}dt=f(x)，\quad \text{a.e.}\tag{3.33}$$
> 
> 如果 $f$ 还是连续的，则反演公式(3.33)处处成立。

> [!proof]-
> 由定理 3.11 得知，$f$ 的 Fourier 积分在 Lebesgue 点 $x$ 处可 Abel 求和到 $f(x)$，即
> 
> $$f(x)=\lim_{y\to0_+}\int_{-\infty}^{\infty}e^{-2\pi y|t|}\hat{f}(t)e^{2\pi ixt}dt，\quad \text{a.e.}\tag{3.34}$$
> 
> 注意到当 $y\to 0$ 时，上式右端被积函数的极限是 $\hat{f}(t)e^{2\pi ixt}$，并且
> 
> $$|e^{-2\pi y|t|}\hat{f}(t)e^{2\pi ixt}|\leq|\hat{f}(t)|\in L(\mathbb{R})，\quad y>0。$$
> 
> 于是，在(3.34)右端用控制收敛定理便得知反演公式几乎处处成立：
> 
> $$f(x)=\int_{-\infty}^{\infty}\hat{f}(t)e^{2\pi ixt}dt，\quad \text{a.e.}$$
> 
> 若 $f$ 连续，因为连续点必是 Lebesgue 点，因此对每点都有等式(3.33)成立。

> [!theorem] 定理 3.14
> 设 $f\in L(\mathbb{R})$并且有界，$\hat{f}(t)$非负，则 $f$ 的 Fourier 积分几乎处处收敛于 $f(x)$。若 $f(x)$是连续的，则反演公式处处成立。

> [!proof]-
> 在定理所给条件下，可以证明 $\hat{f}\in L(\mathbb{R})$。按假定
> 
> $$|f(x)|\leq M，\ \forall x\in\mathbb{R}。$$
> 
> 由(3.27)得
> 
> $$\begin{aligned}
> |u(x,y)|&=\left|\int_{-\infty}^{\infty}e^{-2\pi y|t|}\hat{f}(t)e^{2\pi ixt}dt\right|\\
> &=\left|\frac{1}{\pi}\int_{-\infty}^{\infty}f(x-t)\frac{y}{t^2+y^2}dt\right|\\
> &\leq\frac{M}{\pi}\int_{-\infty}^{\infty}\frac{y}{t^2+y^2}dt=M，\quad y>0。
> \end{aligned}$$
> 
> 特别，取 $x=0$，有
> 
> $$\left|u(0,y)\right|=\left|\int_{-\infty}^{\infty}e^{-2\pi y|t|}\hat{f}(t)dt\right|\leq M。$$
> 
> 因为 $\hat{f}$ 非负，上式积分中的被积函数非负，于是用 Fatou 定理得到
> 
> $$0\leq\int_{-\infty}^{\infty}\hat{f}(t)dt=\int_{-\infty}^{\infty}\lim_{y\to0_+}\{\hat{f}(t)e^{-2\pi y|t|}\}dt\leq\lim_{y\to+0}\int_{-\infty}^{\infty}\hat{f}(t)e^{-2\pi y|t|}dt\leq M。$$
> 
> 由此便知 $\hat{f}\in L(\mathbb{R})$。用定理 3.13 即得结论。

> [!theorem] 定理 3.15（Fourier 变换的唯一性）
> （i）设 $f\in L(\mathbb{R})$，并且 $\hat{f}(t)=0$，a.e. $t\in\mathbb{R}$，则 $f(x)=0$，a.e. $x\in\mathbb{R}$。
> 
> （ii）设 $f,g\in L(\mathbb{R})$，并且 $\hat{f}(t)=\hat{g}(t)$，a.e. $t\in\mathbb{R}$，则 $f(x)=g(x)$，a.e. $x\in\mathbb{R}$。

> [!proof]-
> （i）因为 $\hat{f}(t)=0$，a.e.，显然 $\hat{f}\in L(\mathbb{R})$。由定理 3.13 知反演公式几乎处处成立：
> 
> $$f(x)=\int_{-\infty}^{\infty}\hat{f}(t)e^{2\pi ixt}dt=0，\quad \text{a.e.}$$
> 
> 结论（ii）由（i）推得。它表明，两个不同的函数必有不同的 Fourier 变换。

> [!theorem] 定理 3.16
> 设 $f\in L(\mathbb{R})$，若存在 $g\in L(\mathbb{R})$ 使得 $\hat{g}(t)=(2\pi it)\hat{f}(t)$（$t\in\mathbb{R}$），则
> 
> $$f(x)=\int_{-\infty}^{x} g(y)dy，\quad \text{a.e.}，$$
> 
> 即存在 $\varphi\in AC_{\text{loc}}$，使 $f=\varphi$，a.e.，且 $\varphi'\in L(\mathbb{R})$。

> [!proof]-
> 我们有
> 
> $$[f(x)-f(x-h)]^{\wedge}(t)=(1-e^{-2\pi iht})\hat{f}(t)=\frac{1-e^{-2\pi iht}}{2\pi it}\hat{g}(t)，$$
> 
> 又有
> 
> $$\left\{\int_{-h}^{0}g(x+u)du\right\}^{\wedge}(t)=\int_{-\infty}^{\infty}\left\{\int_{-h}^{0}g(x+u)du\right\}e^{-2\pi ixt}dx=\int_{-h}^{0}\hat{g}(t)e^{2\pi iut}du=\hat{g}(t)\frac{1-e^{-2\pi iht}}{2\pi it}。$$
> 
> 由 Fourier 变换惟一性定理得知，对每个 $h>0$，
> 
> $$f(x)-f(x-h)=\int_{x-h}^{x}g(u)du，\quad \text{a.e. }x\in\mathbb{R}。$$
> 
> 于是有
> 
> $$\int_{0}^{y}[f(x)-f(x-h)]dx=\int_{0}^{y}\left[\int_{x-h}^{x}g(u)du\right]dx。$$
> 
> 对每个固定的 $y>0$，当 $h\to\infty$时，取上式左端的极限，因为 $f\in L(\mathbb{R})$，得
> 
> $$\lim_{h\to\infty}\int_{0}^{y}[f(x)-f(x-h)]dx=\int_{0}^{y}f(x)dx-\lim_{h\to\infty}\int_{-h}^{y-h}f(x)dx=\int_{0}^{y}f(x)dx。$$
> 
> 而由控制收敛定理，取前一式右端的极限得
> 
> $$\lim_{h\to\infty}\int_{0}^{y}\left[\int_{x-h}^{x}g(u)du\right]dx=\int_{0}^{y}\left[\int_{-\infty}^{x}g(u)du\right]dx，$$
> 
> 因此由不定积分的微分性质，便得到
> 
> $$f(x)=\int_{-\infty}^{x}g(u)du，\quad \text{a.e.}，$$
> 
> 若取 $\varphi(x)=\int_{-\infty}^{x}g(u)du$，便满足定理结论的要求。

> [!example] 例 4
> 设 $f(x)=\frac{1}{1+x^2}$，求 $\hat{f}(t)$。
> 
> **解** 由例 2 知，若 $\Phi(x)=e^{-|x|}$，$\hat{\Phi}(t)=\frac{2}{1+(2\pi t)^2}\in L(\mathbb{R})$。用定理 3.13 可知反演公式成立，即
> 
> $$\int_{-\infty}^{\infty}\frac{2}{1+(2\pi t)^2}e^{2\pi ixt}dt=e^{-|x|}。$$
> 
> 由此用定理 3.1(vi)，得
> 
> $$\hat{f}(t)=\frac{1}{2}\cdot 2\pi e^{-2\pi|t|}=\pi e^{-2\pi|t|}。$$


## §3.4 $L^2$ 中函数的 Fourier 变换

对于有限区间 $(a,b)$，属于 $L^2(a,b)$ 的函数必定属于 $L(a,b)$。而对无限区间，这样的论断不成立。属于 $L^2(\mathbb{R})$ 的函数不一定属于 $L(\mathbb{R})$。例如 $\frac{\sin^2 x}{x^2}\in L(\mathbb{R})$，若令 $f(x)=\frac{\sin x}{x}$，便有 $f\in L^2(\mathbb{R})$，但 $f\notin L(\mathbb{R})$。因此对于 $f\in L^2(\mathbb{R})$，按前面 (3.3) 的定义，它的 Fourier 变换可能不存在。本节将给出 $L^2(\mathbb{R})$ 中函数的 Fourier 变换的定义。

设 $f\in L^2(\mathbb{R})$，它必定局部可积。令

$$c_r(t)=\int_{-r}^{r}f(x)e^{-2\pi ixt}dx, \tag{3.35}$$

如果存在 $c(t)\in L^2(\mathbb{R})$，使得

$$\lim_{r\to\infty}\|c_r-c\|_2=0,$$

其中 $\|c_r-c\|_2=\left\{\int_{-\infty}^{\infty}|c_r(t)-c(t)|^2dt\right\}^{1/2}$，就称 $c(t)$ 为 $f$ 在 $L^2(\mathbb{R})$ 中的 Fourier 变换，也记作 $\hat{f}(t)$，表示成

$$\hat{f}(t)=c(t)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}f(x)e^{-2\pi ixt}dx, \tag{3.36}$$

这里的 l.i.m. 表示 $L^2$ 平均意义下的极限，是 limit in the mean 的缩写。

下面将证明 $c_r(t)$ 在 $L^2(\mathbb{R})$ 中的极限必定存在，即 $L^2(\mathbb{R})$ 中函数的 Fourier 变换总是存在的，并且有 Parseval 等式以及反演公式成立。为了证明这些论断，先给出以下引理。

> [!theorem] 引理 3.17
> 设 $f\in L^1\cap L^2(\mathbb{R})$，则
> 
> $$\|f\|_2=\|\hat{f}\|_2, \tag{3.37}$$
> 
> 其中 $\hat{f}(t)$ 由 (3.3) 定义。

> [!proof]- 证明
> 若能证明等式
> 
> $$\int_{-\infty}^{\infty}f(u)\overline{f(u-x)}du=\int_{-\infty}^{\infty}|\hat{f}(t)|^2e^{2\pi ixt}dt \tag{3.38}$$
> 
> 对一切 $x\in(-\infty,\infty)$ 成立，则只要令 $x=0$，便得到结论 (3.37)。
> 
> 为证明 (3.38)，作函数
> 
> $$h(x)=\int_{-\infty}^{\infty}f(u)\overline{f(u-x)}du, \tag{3.39}$$
> 
> 令 $g(y)=\overline{f(-y)}$，即有 $h(x)=(g*f)(x)$，根据定理 3.4 知 $h\in L(\mathbb{R})$，并且
> 
> $$\hat{h}(t)=\hat{g}(t)\cdot\hat{f}(t)=\overline{\hat{f}(t)}\cdot\hat{f}(t)=|\hat{f}(t)|^2\geq 0.$$
> 
> 又由 Cauchy-Schwarz 不等式有
> 
> $$|h(x)|\leq\|f\|_2\,\|f\|_2,$$
> 
> 即 $h(x)$ 有界。于是，由定理 3.14 得知反演公式几乎处处成立，即
> 
> $$h(x)=\int_{-\infty}^{\infty}|\hat{f}(t)|^2e^{2\pi ixt}dt, \quad \text{a.e.} \tag{3.40}$$
> 
> 可以证明 $h(x)$ 又是连续的：
> 
> $$|h(x+\delta)-h(x)|=\left|\int_{-\infty}^{\infty}f(u)[\overline{f(u-x-\delta)}-\overline{f(u-x)}]du\right| \leq\|f\|_2\left\{\int_{-\infty}^{\infty}|f(u-x-\delta)-f(u-x)|^2du\right\}^{1/2}\to 0, \quad \delta\to 0,$$
> 
> 根据 $f$ 的平均连续性得知上式右端趋向于零。因此反演公式 (3.38) 处处成立。令 $x=0$，得结论 (3.37)。

> [!theorem] 定理 3.18（Plancherel 定理）
> 设 $f\in L^2(\mathbb{R})$，则有
> 
> (i) 存在 $\hat{f}(t)\in L^2(\mathbb{R})$，使得
> 
> $$\hat{f}(t)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}f(x)e^{-2\pi ixt}dx, \tag{3.41}$$
> 
> 亦即 $\|\hat{f}-c_r\|_2\to 0$ $(r\to\infty)$；
> 
> (ii) Parseval 等式成立：
> 
> $$\|f\|_2=\|\hat{f}\|_2; \tag{3.42}$$
> 
> (iii) 反演公式成立：
> 
> $$f(x)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{f}(t)e^{2\pi ixt}dt. \tag{3.43}$$
> 
> 对任意函数 $g\in L^2(\mathbb{R})$，也有以下 Parseval 等式成立：
> 
> $$\int_{-\infty}^{\infty}f(x)\overline{g(x)}dx=\int_{-\infty}^{\infty}\hat{f}(t)\overline{\hat{g}(t)}dt, \tag{3.44}$$
> 
> $$\int_{-\infty}^{\infty}f(x)\hat{g}(x)dx=\int_{-\infty}^{\infty}\hat{f}(x)g(x)dx. \tag{3.45}$$

> [!proof]- 证明
> 设 $f\in L^2(\mathbb{R})$，作以下截断函数
> 
> $$f_r(x)=\begin{cases}
> f(x), & |x|\leq r,\\
> 0, & |x|>r, \ r>0.
> \end{cases}$$
> 
> 易知 $f_r\in L^1\cap L^2(\mathbb{R})$。如果设 $r'>r$，当 $r',r\to\infty$ 时，有
> 
> $$\|f_r-f_{r'}\|_2=\left(\int_{r<|x|\leq r'}|f(x)|^2dx\right)^{1/2}\to 0. \tag{3.46}$$
> 
> $f_r$ 的 Fourier 变换正是 (3.35) 中的 $c_r(t)$，
> 
> $$\hat{f}_r(t)=\int_{-r}^{r}f(x)e^{-2\pi ixt}dx=c_r(t),$$
> 
> 根据引理 3.17 以及 (3.46) 式，我们有
> 
> $$\|\hat{f}_r-\hat{f}_{r'}\|_2=\|f_r-f_{r'}\|_2\to 0 \quad (r,r'\to\infty).$$
> 
> 于是，由 $L^2(\mathbb{R})$ 的完备性，便知必存在 $\hat{f}_r(t)$ 在 $L^2(\mathbb{R})$ 中的极限 $\hat{f}(t)\in L^2(\mathbb{R})$，使得
> 
> $$\|c_r-\hat{f}\|_2=\|\hat{f}_r-\hat{f}\|_2\to 0 \quad (r\to\infty).$$
> 
> 因此有 (3.41) 成立，$\hat{f}(t)$ 就是 $f$ 在 $L^2(\mathbb{R})$ 中的 Fourier 变换。而由引理 3.17，有
> 
> $$\|f_r\|_2=\|\hat{f}_r\|_2.$$
> 
> 令 $r\to\infty$，因为 $\lim_{r\to\infty}\|f_r-f\|_2=0$，便得到
> 
> $$\|f\|_2=\|\hat{f}\|_2,$$
> 
> 这就是 Parseval 等式。
> 
> 下面证明反演公式 (3.43) 成立。因 $f\in L^2(\mathbb{R})$，存在紧支集的阶梯函数 $\varphi_n$，使得
> 
> $$\lim_{n\to\infty}\|f-\varphi_n\|_2=0. \tag{3.47}$$
> 
> 显然 $\varphi_n\in L^1\cap L^2(\mathbb{R})$。按 $L^1$ 中函数的 Fourier 变换定义，有
> 
> $$\hat{\varphi}_n(t)=\int_{-\infty}^{\infty}\varphi_n(x)e^{-2\pi ixt}dx=\lim_{r\to\infty}\int_{-r}^{r}\varphi_n(x)e^{-2\pi ixt}dt. \tag{3.48}$$
> 
> 因为阶梯函数 $\varphi_n$ 是有界变差函数，它除有限个点外是连续的。从而由推论 3.8 的 (ii) 得到
> 
> $$\varphi_n(x)=\lim_{r\to\infty}\int_{-r}^{r}\hat{\varphi}_n(t)e^{2\pi ixt}dt, \quad \text{a.e.} \tag{3.49}$$
> 
> 又因 $\varphi_n\in L^2(\mathbb{R})$，根据已证明的 (3.41) 得知它有按 $L^2$ 意义的 Fourier 变换 $c_n(t)\in L^2(\mathbb{R})$，使得
> 
> $$c_n(t)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\varphi_n(x)e^{-2\pi ixt}dx.$$
> 
> 注意到：若函数列几乎处处点收敛的极限与 $L^2$ 平均收敛的极限都存在，则二者必几乎处处相等。因此 $c_n(t)=\hat{\varphi}_n(t)$ a.e.，也就是
> 
> $$\hat{\varphi}_n(t)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\varphi_n(x)e^{-2\pi ixt}dx, \tag{3.50}$$
> 
> 并且 $\hat{\varphi}_n(t)\in L^2(\mathbb{R})$，根据已证明的结论 (i)，可知 $\varphi_n$ 也有 $L^2$ 意义的 Fourier 变换，即
> 
> $$\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{\varphi}_n(t)e^{2\pi ixt}dt$$
> 
> 存在，从而它与 (3.49) 式右端所表示的逐点极限应当几乎处处相等，即
> 
> $$\varphi_n(x)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{\varphi}_n(t)e^{2\pi ixt}dt. \tag{3.51}$$
> 
> 由结论 (ii) 的 Parseval 等式及 (3.47) 式得到
> 
> $$\|\hat{f}-\hat{\varphi}_n\|_2 = \|f-\varphi_n\|_2 \to 0 \quad (n\to\infty).$$
> 
> 因为 $\hat{f}\in L^2(\mathbb{R})$，根据结论 (i) 可知 (3.43) 右端的 $L^2$ 极限必定存在，记它为
> 
> $$f_1(x)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{f}(t)e^{2\pi ixt}dt = \text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{f}(-t)e^{-2\pi ixt}dt,$$
> 
> 它可以看作是 $\hat{f}(-t)$ 按 $L^2$ 意义的 Fourier 变换，于是有
> 
> $$f_1(x)-\varphi_n(x) = (\hat{f}(-t)-\hat{\varphi}_n(-t))^{\wedge}(x).$$
> 
> 从而由 Parseval 等式得
> 
> $$\|f_1-\varphi_n\|_2 = \|\hat{f}-\hat{\varphi}_n\|_2 \to 0 \quad (n\to\infty),$$
> 
> 再由 (3.47) 式便知 $f_1$ 与 $f$ 都是 $\varphi_n$ 在 $L^2(\mathbb{R})$ 中的极限，因此
> 
> $$f_1(x)=f(x), \quad \text{a.e.},$$
> 
> 也就是有
> 
> $$f(x)=\text{l.i.m.}_{r\to\infty}\int_{-r}^{r}\hat{f}(t)e^{2\pi ixt}dt, \quad \text{a.e.},$$
> 
> 这就是反演公式 (3.43)。
> 
> 若有任意函数 $g\in L^2(\mathbb{R})$，对 $f+g$ 以及 $f+ig$ 用 Parseval 等式 (3.42)。先由
> 
> $$\|f+g\|_2^2 = \|\hat{f}+\hat{g}\|_2^2$$
> 
> 得到
> 
> $$\|f+g\|_2^2 = \|f\|_2^2 + \int_{-\infty}^{\infty} f \bar{g}dx + \int_{-\infty}^{\infty} \bar{f}gdx + \|g\|_2^2 = \|\hat{f}+\hat{g}\|_2^2 = \|\hat{f}\|_2^2 + \int_{-\infty}^{\infty} \hat{f} \bar{\hat{g}}dx + \int_{-\infty}^{\infty} \bar{\hat{f}} \hat{g}dx + \|\hat{g}\|_2^2.$$
> 
> 因为 $\|f\|_2=\|\hat{f}\|_2$，$\|g\|_2=\|\hat{g}\|_2$，所以由上式便得到
> 
> $$\text{Re}\left(\int_{-\infty}^{\infty} f \bar{g}dx\right) = \text{Re}\left(\int_{-\infty}^{\infty} \hat{f} \bar{\hat{g}}dx\right).$$
> 
> 类似地由
> 
> $$\|f+ig\|_2^2 = \|\hat{f}+i\hat{g}\|_2^2$$
> 
> 推知
> 
> $$\text{Im}\left(\int_{-\infty}^{\infty} f \bar{g}dx\right) = \text{Im}\left(\int_{-\infty}^{\infty} \hat{f} \bar{\hat{g}}dx\right).$$
> 
> 从而得知等式 (3.44) 成立。在 (3.44) 式的左端用 $\hat{g}=(\bar{g})^{\wedge}$ 代替 $\bar{g}$，右端用 $(\bar{g})^{\wedge}=\bar{g}$ 代入，便得到 (3.45) 式。

**注** 若令

$$f_{a,b}(x)=\begin{cases}
f(x), & a\leq x\leq b,\\
0, & \text{其他}.
\end{cases}$$

用定理证明中类似的方法可以得到当 $b,b'\to\infty$，$a,a'\to-\infty$ 时，

$$\|\hat{f}_{ab}-\hat{f}_{a',b'}\|_2 = \|f_{a,b}-f_{a',b'}\|_2 \to 0,$$

从而得到 Fourier 变换的更一般形式

$$\hat{f}(t)=\text{l.i.m.}_{\substack{b\to\infty\\a\to-\infty}}\int_{a}^{b}f(x)e^{-2\pi ixt}dt.$$

由此式与由 (3.41) 式所决定的 $\hat{f}(t)$ 相同。类似地，反演公式可改写为

$$f(x)=\text{l.i.m.}_{\substack{b\to\infty\\a\to-\infty}}\int_{a}^{b}\hat{f}(t)e^{2\pi ixt}dt.$$

如果记 $L^2(\mathbb{R})$ 中的映射 $\mathcal{F}$ 为：$f\mapsto\hat{f}$，即 $(\mathcal{F}f)(t)=\hat{f}(t)$，则由 Plancherel 定理可推知：

$$(\mathcal{F}^2f)(x)=f(-x),$$
$$(\mathcal{F}^4f)(x)=f(x), \quad f\in L^2(\mathbb{R}).$$

映射 $\mathcal{F}$ 不仅是 $L^2(\mathbb{R})$ 到 $L^2(\mathbb{R})$ 的保范算子：

$$\|\mathcal{F}f\|_2 = \|f\|_2,$$

而且它的逆算子是 $\mathcal{F}^{-1}=\mathcal{F}^3$，还有，

$$(\mathcal{F}^{-1}f)(x)=(\mathcal{F}f)(-x),$$

$\mathcal{F}^{-1}$ 的定义域是 $L^2(\mathbb{R})$，亦即 $\mathcal{F}$ 的值域是 $L^2(\mathbb{R})$ 全空间，因此可称 $\mathcal{F}$ 是 $L^2(\mathbb{R})$ 到 $L^2(\mathbb{R})$ 的酉变换。

Plancherel 定理还有另一形式，写成以下定理。

> [!theorem] 定理 3.19
> 设 $f\in L^2(\mathbb{R})$，则
> 
> $$\hat{f}(t)=\frac{d}{dt}\int_{-\infty}^{\infty}f(x)\frac{e^{-2\pi ixt}-1}{-2\pi ix}dx, \quad \text{a.e.}, \tag{3.52}$$
> 
> 并且
> 
> $$f(x)=\frac{d}{dx}\int_{-\infty}^{\infty}\hat{f}(t)\frac{e^{2\pi ixt}-1}{2\pi it}dt, \quad \text{a.e.}, \tag{3.53}$$

> [!proof]- 证明
> 为了证明 (3.52) 式，先证明以下等式
> 
> $$\int_{0}^{t}\hat{f}(u)du = \int_{-\infty}^{\infty}\frac{e^{-2\pi ixt}-1}{-2\pi ix}f(x)dx. \tag{3.54}$$
> 
> 因 $f\in L^2(\mathbb{R})$，且 $\frac{e^{-2\pi ixt}-1}{-2\pi ix}\in L^2(\mathbb{R})$，故上式右端的被积函数是 Lebesgue 可积的。上式左端的 $\hat{f}(u)$ 满足 (3.41) 式。若记
> 
> $$c_r(u)=\int_{-r}^{r}f(x)e^{-2\pi ixu}dx,$$
> 
> 再令
> 
> $$\Phi_r(t)=\int_{0}^{t}c_r(u)du = \int_{0}^{t}\left[\int_{-r}^{r}f(x)e^{-2\pi ixu}dx\right]du = \int_{-r}^{r}f(x)\frac{e^{-2\pi ixt}-1}{-2\pi ix}dx,$$
> 
> $$\Phi(t)=\int_{0}^{t}\hat{f}(u)du.$$
> 
> 那么，对任意固定的 $t$ 有
> 
> $$|\Phi(t)-\Phi_r(t)| = \left|\int_{0}^{t}[\hat{f}(u)-c_r(u)]du\right| \leq |t|^{1/2}\|\hat{f}-c_r\|_2 \to 0, \quad r\to\infty.$$
> 
> 由此推知
> 
> $$\Phi(t)=\lim_{r\to\infty}\Phi_r(t),$$
> 
> 便可得到 (3.54) 式：
> 
> $$\int_{0}^{t}\hat{f}(u)du = \lim_{r\to\infty}\int_{-r}^{r}f(x)\frac{e^{-2\pi ixt}-1}{-2\pi ix}dx = \int_{-\infty}^{\infty}f(x)\frac{e^{-2\pi ixt}-1}{-2\pi ix}dx.$$
> 
> 上式左端是 $\hat{f}$ 的不定积分，两端关于 $t$ 取微商，便得到 (3.52)。类似可证 (3.53)。

## §3.5 卷积及其 Fourier 变换

在定理3.4中曾指出：若 $f,g∈L¹(R)$，则 $f∗g$ 也属于 $L¹(R)$，且 $(f∗g)^(t)=f̂(t)·ĝ(t)$。但如果 $f$ 与 $g$ 都属于 $L²(R)$，那么还不能推知 $f∗g$ 是平方可积或可积的，也就得不到上述等式。这时 $f·g$ 及 $f̂·ĝ$ 都是可积的，从而可以得到相当于上述等式经过逆运算所得的结果。

> [!theorem] 定理3.20
> 设 $f,g∈L²(R)$，则
> 
> $$(f·g)^(t) = (f̂∗ĝ)(t). \tag{3.55}$$

> [!proof]- 证明
> 设 $t$ 固定。若记
> 
> $$h(x)=g(x)ē^{2πixt}，$$
> 
> 我们有
> 
> $$\begin{aligned} ĥ(u) &= \text{l.i.m.}_{r→∞} ∫_{-r}^{r} ḡ(x)e^{2πixt}e^{-2πixu}dx \\ &= \text{l.i.m.}_{r→∞} ∫_{-r}^{r} ḡ(x)e^{-2πix(t-u)}dx \\ &= ĝ̄(t-u). \end{aligned}$$
> 
> 因为 $(f·g)∈L(R)$，根据定理3.18的(3.44)式，便得
> 
> $$\begin{aligned} (f·g)^(t) &= ∫_{-∞}^{∞} f(x)g(x)e^{-2πixt}dx \\ &= ∫_{-∞}^{∞} f h̄dx = ∫_{-∞}^{∞} f̂ ĥ̄du \\ &= ∫_{-∞}^{∞} f̂(u)ĝ(t-u)du \\ &= (f̂∗ĝ)(t)， \end{aligned}$$
> 
> 即(3.55)式成立。 ■

前面曾说过，记 $(𝓕f)(t)=f̂(t)$，由反演公式(3.43)知

$$f(x)=𝓕^{-1}(𝓕f)(x)= \text{l.i.m.}_{r→∞} ∫_{-r}^{r} f̂(t)e^{2πixt}dt.$$

因此对于 $g∈L²(R)$，它的 Fourier 逆变换满足

$$\begin{aligned} (𝓕^{-1}g)(x) &= \text{l.i.m.}_{r→∞} ∫_{-r}^{r} g(t)e^{2πixt}dt \\ &= (𝓕g)(-x)， \end{aligned} \tag{3.56}$$

$$𝓕^{-1}(g(t)) = 𝓕(g(-t)). \tag{3.57}$$

> [!theorem] 推论3.21
> 设 $f,g∈L²(R)$，则 $f∗g$ 是 $f̂·ĝ$ 的 Fourier 逆变换，即
> 
> $$∫_{-∞}^{∞} f̂(t)ĝ(t)e^{2πixt}dt = (f∗g)(x). \tag{3.58}$$

> [!proof]- 证明
> 根据(3.57)，并用(3.55)，可得
> 
> $$\begin{aligned} ∫_{-∞}^{∞} f̂(t)ĝ(t)e^{2πixt}dt &= ∫_{-∞}^{∞} f̂(-t)ĝ(-t)e^{-2πixt}dt \\ &= 𝓕(f̂(-t))∗𝓕(ĝ(-t)) = (f∗g)(x). \end{aligned}$$

如果 $f$ 与 $g$ 都属于 $L²(R)$，我们推知 $f∗g∈L^∞(R)$，尚不能讨论 $f∗g$ 的 Fourier 变换。但若 $f$ 与 $g$ 中有一个属于 $L¹(R)$，便知 $f * g∈L²(R)$，它的 Fourier 变换就有意义了。

> [!theorem] 定理 3.22
> 设 $f∈L²(R)$，$g∈L¹(R)$，则
> 
> $$(f * g)^∧(t) = f̂(t) · ĝ(t). \tag{3.59}$$

> [!proof]- 证明
> 因为有 $‖f * g‖₂ ≤ ‖f‖₂‖g‖₁$，所以知 $f * g∈L²(R)$，而由 $f̂∈L²(R)$，$ĝ∈L^∞(R)$，可知 $f̂·ĝ∈L²(R)$。我们来证明下式成立：
> 
> $$𝓕⁻¹(f̂ ĝ) = f * g. \tag{3.60}$$
> 
> 先考虑
> 
> $$\begin{aligned} ∫_{-r}^r f̂(t)ĝ(t)e^{2πixt}dt &= ∫_{-r}^r f̂(t)e^{2πixt}\left\{∫_{-∞}^∞ g(u)e^{-2πiut}du\right\}dt \\ &= ∫_{-∞}^∞ g(u)\left\{∫_{-r}^r f̂(t)e^{2πi(x-u)t}dt\right\}du \\ &= ∫_{-∞}^∞ g(u)fᵣ(x-u)du = (fᵣ * g)(x)， \end{aligned}$$
> 
> 其中第二个等号是根据 Fubini 定理。又记
> 
> $$fᵣ(x) = ∫_{-r}^r f̂(t)e^{2πixt}dt，$$
> 
> 由(3.43)知 $\lim_{r→∞} ‖fᵣ - f‖₂ = 0$，便得
> 
> $$‖fᵣ * g - f * g‖₂ ≤ ‖fᵣ - f‖₂‖g‖₁ → 0，\quad r→∞。$$
> 
> 因此有
> 
> $$\begin{aligned} 𝓕⁻¹(f̂ ĝ) &= \text{l.i.m.}_{r→∞} ∫_{-r}^r f̂(t)ĝ(t)e^{2πixt}dt \\ &= \text{l.i.m.}_{r→∞} (fᵣ * g) = f * g. \end{aligned}$$
> 
> 根据 Plancherel 定理，对(3.60)式两边作用算子 $𝓕$，便得到(3.59)。

## §3.6 应用与例

Fourier 变换与 Fourier 积分在数学，物理与无线电等许多方面都有广泛的应用。在这里我们只能对部分例子作一些介绍。

### 1．求积分的值

我们可以利用某些已知函数的 Fourier 变换的表示式以及 Fourier 变换的性质或关系式，求出一些积分的值。

> [!example] 例 1　求下述广义积分与积分的值：
>
> $$D_1(x) = \lim_{R \to \infty} \frac{1}{\pi} \int_{-R}^R \frac{\sin t}{t} \cos xt \, dt,$$
>
> $$I(a, \lambda) = \frac{1}{\pi} \int_{-\infty}^\infty \frac{\sin t}{t} \frac{\sin \lambda(t-a)}{t-a} \, dt,$$
>
> 其中 $a$ 是实数，$\lambda > 0$。

> [!solution]- 解　考虑函数
>
> $$D(x) = \begin{cases} 1, & |x| < 1, \\ 0, & |x| > 1, \\ \frac{1}{2}, & |x| = 1 \end{cases}$$
>
> （见图 3.2），显然 $D \in L^1(\mathbb{R}) \cap L^2(\mathbb{R})$。它的 Fourier 变换为
>
> $$\hat{D}(t) = \int_{-1}^1 e^{-2\pi ixt} \, dx = \frac{\sin 2\pi t}{\pi t}.$$
>
> $\hat{D} \in L^2(\mathbb{R})$。因为 $D(x)$ 在任意有界区间上是有界变差的，所以根据推论 3.8 得知
>
> $$\lim_{R \to \infty} \int_{-R}^R \frac{\sin 2\pi t}{\pi t} e^{2\pi ixt} \, dt = D(x).$$
>
> 上式左右两端的实部应当相等，由此得到
>
> $$\lim_{R \to \infty} \frac{1}{\pi} \int_{-R}^R \frac{\sin 2\pi t}{t} \cos 2\pi xt \, dt = D(x).$$
>
> 令 $u = 2\pi t$，便算得
>
> $$D_1(x) = \lim_{R \to \infty} \frac{1}{\pi} \int_{-R}^R \frac{\sin u}{u} \cos xu \, du = D(x).$$
>
> 下面利用 Parseval 等式 (3.44) 来计算 $I(a, \lambda)$。根据定理 3.1 及 $\hat{D}(t)$ 的表示式可算得
>
> $$\left[D\left(\frac{2\pi x}{\lambda}\right)\right]^\wedge(t) = \frac{\lambda}{2\pi} \hat{D}\left(\frac{\lambda t}{2\pi}\right) = \frac{\sin \lambda t}{\pi t},$$
>
> $$\left[e^{2\pi iax} D\left(\frac{2\pi x}{\lambda}\right)\right]^\wedge(t) = \frac{\sin \lambda(t-a)}{\pi(t-a)}.$$
>
> 于是由 (3.44) 式便得到
>
> $$\frac{1}{\pi^2} \int_{-\infty}^\infty \frac{\sin t}{t} \frac{\sin \lambda(t-a)}{t-a} \, dt = \int_{-\infty}^\infty D(2\pi x) e^{-2\pi iax} D\left(\frac{2\pi}{\lambda} x\right) \, dx$$
>
> $$= \int_{-\infty}^\infty D(2\pi x) D\left(\frac{2\pi}{\lambda} x\right) e^{-2\pi iax} \, dx,$$
>
> 从而把 $D(x)$ 的表示式代入算得：若 $a \neq 0$，
>
> $$I(a, \lambda) = \begin{cases} \pi \displaystyle\int_{-1/2\pi}^{1/2\pi} e^{-2\pi iax} \, dx = \frac{\sin a}{a}, & \lambda \geq 1, \\ \pi \displaystyle\int_{-\lambda/2\pi}^{\lambda/2\pi} e^{-2\pi iax} \, dx = \frac{\sin \lambda a}{a}, & 0 < \lambda < 1, \end{cases}$$
>
> $$I(0, \lambda) = \begin{cases} 1, & \lambda \geq 1, \\ \lambda, & 0 < \lambda < 1. \end{cases}$$
>
> 当 $\lambda < 0$ 时，也可由 $I(a, \lambda) = -I(a, |\lambda|)$ 算得它的值。特别，若 $a = 0$，$\lambda = 1$，得到
>
> $$I(0, 1) = 1,$$
>
> 亦即 (3.24) 式成立。

> [!example] 例 2　设函数
>
> $$\Omega(x) = \Omega(x; \delta, h) = \begin{cases} 1, & |x| \leq \delta, \\ 0, & |x| \geq \delta + h, \\ \text{线性函数}, & \delta \leq x \leq \delta + h, \\ \text{线性函数}, & -(\delta + h) \leq x \leq -\delta \end{cases}$$
>
> （见图 3.3），求 $\hat{\Omega}(t)$。

> [!solution]- 解　$\Omega(x)$ 可以看作函数 $\Delta(x)$（见图 3.4）通过适当的展缩后，所作的线性组合，其中
>
> $$\Delta(x) = \Delta_1(x) = \begin{cases} 1 - |x|, & |x| \leq 1, \\ 0, & |x| > 1. \end{cases}$$
>
> 令
>
> $$\Delta_R(x) = \Delta_1(x/R) = \begin{cases} 1 - \frac{|x|}{R}, & |x| \leq R, \\ 0, & |x| > R, \end{cases}$$
>
> 不难验证
>
> $$\Omega(x; \delta, h) = \frac{1}{h} \left[(\delta + h)\Delta_{\delta+h}(x) - \delta\Delta_\delta(x)\right]$$
>
> （见图 3.5）。由 (3.23) 式知
>
> $$\hat{\Delta}(t) = \left(\frac{\sin \pi t}{\pi t}\right)^2,$$
>
> 于是由定理 3.1 得
>
> $$\hat{\Delta}_R(t) = \frac{1}{R} \left(\frac{\sin \pi Rt}{\pi t}\right)^2.$$
>
> 从而由前面的关系式便得到
>
> $$\hat{\Omega}(t) = \frac{\sin^2\pi(\delta + h)t - \sin^2\pi\delta t}{h(\pi t)^2}.$$


### 2．求积分方程的解

在一些应用问题中常遇到以下类型的积分方程

$$
\int_{-\infty}^{\infty} K(x - y)\phi(y)dy = f(x).
$$

若函数 $K(x) \in L^1(\mathbb{R})$，$f(x) \in L^2(\mathbb{R})$，我们求这个积分方程的属于 $L^2(\mathbb{R})$ 的解 $\phi$。由定理 1.3 知左端的 $K * \phi \in L^2(\mathbb{R})$，对该方程两边取 Fourier 变换，得到

$$
\hat{K}(t) \cdot \hat{\phi}(t) = \hat{f}(t).
$$

只要 $\hat{K}(t) \neq 0$，便有

$$
\hat{\phi}(t) = \frac{\hat{f}(t)}{\hat{K}(t)}.
$$

如果此式右端是 $L^2(\mathbb{R})$中的函数，利用 Fourier 逆变换便可解得

$$
\phi(x) = \mathcal{F}^{-1}[\hat{f}/\hat{K}](x)，
$$

也可写成

$$
\phi(x) = [\hat{f}/\hat{K}]^{\wedge}(-x).
$$

> [!example] 例 3
> 设 $f \in L^2(\mathbb{R})$，求满足以下积分方程的解 $\phi \in L^2(\mathbb{R})$：
> 
> $$
> \phi(x) - \lambda\int_{-\infty}^{\infty} e^{-|x-y|}\phi(y)dy = f(x).
> $$

> [!solution]- 解
> 根据(3.59)和(3.26)式，对方程两边取 Fourier 变换，得到
> 
> $$
> \hat{\phi}(t) - \lambda\frac{2}{1 + 4\pi^2 t^2}\hat{\phi}(t) = \hat{f}(t)，
> $$
> 
> 解得
> 
> $$
> \hat{\phi}(t) = \frac{1 + 4\pi^2 t^2}{1 + 4\pi^2 t^2 - 2\lambda} \hat{f}(t).
> $$
> 
> 注意到若 $\lambda \geq 1/2$，对某些 $t$ 的值上式右端的分母为零；而对于其他情形，即 $\lambda$ 是小于 $1/2$ 的实数，或 $\lambda$ 是虚部不等于零的复数，分母不为零，我们有
> 
> $$
> \phi(x) = \mathcal{F}^{-1}\left(\frac{1 + 4\pi^2 t^2}{1 + 4\pi^2 t^2 - 2\lambda} \cdot \hat{f}(t)\right).
> $$
> 
> 作为一个特例，设 $f(x) = e^{-|x|}$，则
> 
> $$
> \phi(x) = \mathcal{F}^{-1}\left(\frac{1 + 4\pi^2 t^2}{1 + 4\pi^2 t^2 - 2\lambda} \cdot \frac{2}{1 + 4\pi^2 t^2}\right)
> $$
> 
> $$
> = \int_{-\infty}^{\infty} \frac{2}{1 - 2\lambda + 4\pi^2 t^2} e^{2\pi ixt} dt.
> $$
> 
> 若 $\lambda < 1/2$，利用(3.26)的反演公式，便可求得解为
> 
> $$
> \phi(x) = \frac{1}{\sqrt{1 - 2\lambda}} e^{-\sqrt{1 - 2\lambda}|x|}.
> $$


### 3. 求微分方程的解

此处需用到函数微商的 Fourier 变换与函数自身的 Fourier 变换的关系式，即(3.12)式。

> [!example] 例 4
> 求常微分方程
> 
> $$u'' - u = -f \tag{3.61}$$
> 
> 的解。

> [!solution]- 解
> 我们先形式地作运算（即假定 $u$ 与 $f$ 都满足运算所需的条件），对方程两边取 Fourier 变换，得
> 
> $$(2\pi it)^2\hat{u} - \hat{u} = -\hat{f},$$
> 
> 即得
> 
> $$\hat{u} = \frac{1}{1 + (2\pi t)^2} \hat{f}.$$
> 
> 根据(3.26)的反演公式得到
> 
> $$u = \left(\frac{1}{2} e^{-|x|}\right) * f = \frac{1}{2} \int_{-\infty}^{\infty} e^{-|x-y|} f(y) \, dy. \tag{3.62}$$
> 
> 若 $f$ 满足适当的条件，可以验证由(3.62)式表示的 $u$ 满足方程(3.61)。例如，设 $f \in C(\mathbb{R}) \cap L^1(\mathbb{R})$，可以验证：(1) $u \in C^2(\mathbb{R}) \cap L^1(\mathbb{R})$，$u'' \in L^1(\mathbb{R})$；(2) $u$ 满足方程(3.61)。为此将(3.62)式改写成：
> 
> $$\begin{aligned}
> 2u &= \int_{-\infty}^{\infty} e^{-|x-y|} f(y) \, dy \\
> &= \int_{-\infty}^{x} e^{-(x-y)} f(y) \, dy + \int_{x}^{\infty} e^{-(y-x)} f(y) \, dy \\
> &= e^{-x} \int_{-\infty}^{x} e^{y} f(y) \, dy + e^{x} \int_{x}^{\infty} e^{-y} f(y) \, dy.
> \end{aligned}$$
> 
> 在假设 $f \in C(\mathbb{R}) \cap L^1(\mathbb{R})$ 的条件下，不难验证 $u$ 符合可微的条件，可求得
> 
> $$\begin{aligned}
> (2u)' &= -e^{-x} \int_{-\infty}^{x} e^{y} f(y) \, dy + e^{-x} \cdot e^{x} f(x) \\
> &\quad + e^{x} \int_{x}^{\infty} e^{-y} f(y) \, dy - e^{x} \cdot e^{-x} f(x) \\
> &= \int_{-\infty}^{\infty} -[\operatorname{sgn}(x - y)] e^{-|x-y|} f(y) \, dy.
> \end{aligned}$$
> 
> $u'$ 仍可微，求得
> 
> $$\begin{aligned}
> (2u)'' &= e^{-x} \int_{-\infty}^{x} e^{y} f(y) \, dy - e^{-x} \cdot e^{x} f(x) \\
> &\quad + e^{x} \int_{x}^{\infty} e^{-y} f(y) \, dy - e^{x} \cdot e^{-x} f(x) \\
> &= 2u - 2f,
> \end{aligned}$$
> 
> 故 $u$ 满足方程(3.61)。而由以上各式及关于 $f$ 的假定不难验证结论(1)。

> [!example] 例 5
> 考虑无穷长杆的热传导问题，假设给定了初始温度 $f(x)$：
> 
> $$\begin{cases}
> \dfrac{\partial u}{\partial t} = a \dfrac{\partial^2 u}{\partial x^2}, & x \in \mathbb{R}^1, \, t > 0, \\[6pt]
> u(x,0) = f(x).
> \end{cases} \tag{3.63}$$
> 
> 因为没有边界，所以在 $t > 0$ 时无边界条件；但我们将假定 $f(x)$ 在无穷远处足够快地下降到零使得 $f$ 在全实轴上可积。

> [!solution]- 解
> 我们对方程(3.63)两边形式地取 Fourier 变换，得到
> 
> $$\frac{\partial \hat{u}(\xi,t)}{\partial t} = -4\pi^2 a \xi^2 \hat{u}(\xi,t),$$
> 
> $$\hat{u}(\xi,0) = \hat{f}(\xi).$$
> 
> 令
> 
> $$v(\xi,t) = \hat{u}(\xi,t),$$
> 
> 问题化为
> 
> $$\begin{cases}
> \dfrac{\partial v}{\partial t} = -4\pi^2 a \xi^2 v, \\[6pt]
> v(\xi,0) = \hat{f}(\xi).
> \end{cases}$$
> 
> 对每个固定的 $\xi$，这是带有初始条件的常微分方程，它的解不难求得，就是
> 
> $$v(\xi,t) = \hat{u}(\xi,t) = \hat{f}(\xi) e^{-4\pi^2 a \xi^2 t}.$$
> 
> 由反演公式得到
> 
> $$u(x,t) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{-4\pi^2 a \xi^2 t} e^{2\pi i x \xi} \, d\xi.$$
> 
> 而根据公式(3.30)，其中 $\alpha = at$，又可得到
> 
> $$u(x,t) = (f * w)(x) = \frac{1}{\sqrt{4\pi a t}} \int_{-\infty}^{\infty} f(y) e^{-(x-y)^2/4at} \, dy, \tag{3.64}$$
> 
> 其中 $w(x,\alpha)$ 是 Weierstrass 核。不难验证 $w(x,at)$ 满足热传导方程(3.63)。假设 $f \in L^1(\mathbb{R})$，根据定理 1.5 及其后的注可以推知，对于按(3.64)式表示的 $u(x,t)$ 可以在积分号下取微商，由此得知 $u(x,t)$ 也满足热传导方程(3.63)。再根据定理 1.9 便得知
> 
> $$\lim_{t \to 0} u(x,t) = f(x), \quad \text{a.e.}$$
> 
> 如果还假定 $f(x)$ 连续，则上式处处成立，亦即 $u(x,t)$ 满足初始条件。


### 4. Poisson 求和公式

> [!theorem]
设 $f(x)$ 连续，并满足
$$|f(x)| \leq C(1 + |x|)^{-1-\delta}$$
$$|\hat{f}(x)| \leq C(1 + |x|)^{-1-\delta}, \quad x \in \mathbb{R}$$
其中 $\delta > 0$，则有以下等式成立：
$$\sum_{m=-\infty}^{\infty} f(x + m) = \sum_{m=-\infty}^{\infty} \hat{f}(m)e^{2\pi imx} \tag{3.65}$$
$$\sum_{m=-\infty}^{\infty} f(m) = \sum_{m=-\infty}^{\infty} \hat{f}(m) \tag{3.66}$$
我们称这两式为 Poisson 求和公式.

> [!proof]-
证明 根据对 $f$ 的假定，易见(3.65)左端的级数在 $0\leq x\leq 1$ 一致收敛，记其和为 $g(x)$，
$$g(x) = \sum_{m=-\infty}^{\infty} f(x + m)$$
于是 $g(x)$ 是以 1 为周期的连续函数. 我们来计算它的 Fourier 系数，
$$d_k = \int_0^1 g(x)e^{-2\pi ikx} dx$$
（由 §1.1 我们知以 $T$ 为周期的函数 $g$ 的 Fourier 系数为 $\frac{1}{T} \int_0^T g(x)e^{-2\pi ikx/T}dx$. 把 $g(x)$ 的级数表示式代入，并由级数的一致收敛性推知，该式中的求和与积分可以交换顺序，从而得到
$$d_k = \int_0^1 \left[ \sum_{m=-\infty}^{\infty} f(x + m) \right] e^{-2\pi ikx} dx$$
$$= \sum_{m=-\infty}^{\infty} \int_0^1 f(x + m)e^{-2\pi ikx} dx$$
$$= \sum_{m=-\infty}^{\infty} \int_{m}^{m+1} f(t)e^{-2\pi ikt} dt$$
$$= \int_{-\infty}^{\infty} f(t)e^{-2\pi ikt} dt = \hat{f}(k)$$
由此可见，(3.65)式的右端正好是 $g(x)$ 的 Fourier 级数，而由对 $\hat{f}$ 的假定可知这个级数一致收敛. 根据第一章习题第 1 题便可推知(3.65)式成立. 该式左、右端都是连续函数，等式是处处成立的. 令 $x = 0$，就得到(3.66)式.

> [!example]
令
$$f_t(x) = e^{-\pi tx^2}, \quad \hat{f}_t(y) = \frac{1}{\sqrt{t}} e^{-\pi y^2/t}, \quad t > 0$$
在(3.66)式中，特别取 $f$ 等于 $f_t$，便得到
$$\sum_{m=-\infty}^{\infty} e^{-\pi m^2 t} = \frac{1}{\sqrt{t}} \sum_{m=-\infty}^{\infty} e^{-\pi m^2/t}$$
这正是 § 2.8 关于 theta 函数的 Jacobi 恒等式.


### 5. Heisenberg 不等式与测不准原理

大家知道，微观粒子的运动是量子力学研究的对象。物理学家揭示出微观粒子具有与宏观质点根本不同的性质，即具有微粒和波动的双重性质。于是在量子力学中，用波来描述粒子（例如电子）的运动。

在一维情形，用波函数 $f(x)$ 来刻画粒子沿 $x$ 轴的运动状态（认定 $f \in L^2(\mathbb{R})$）。根据实验事实，用波的强度（即 $f(x)$ 的振幅的平方）来表示该粒子位于点 $x$ 处的概率密度。从而粒子位于区间 $[a,b]$ 的概率为

$$\int_a^b |f(x)|^2 dx.$$

显然，粒子必然位于 $x$ 轴上，即粒子位于 $x$ 轴上的概率应等于 1，也就是应当有

$$\int_{-\infty}^{\infty} |f(x)|^2 dx = 1,$$

这个条件称为规一化条件。

由波函数 $f(x)$ 的 Fourier 变换可以给出粒子动量为 $p$ 的概率密度。我们定义 Fourier 变换的某种变型为 $f^*(p)$，令

$$f^*(p) = \frac{1}{\sqrt{2\pi h}} \int_{-\infty}^{\infty} f(x)e^{-ipx/h}dx = \frac{1}{\sqrt{2\pi h}} \hat{f}(p/2\pi h),$$

其中 $h$ 是 Planck 常数。$|f^*(p)|^2$ 可解释为粒子具有动量 $p$ 的概率密度。根据 Plancherel 定理可得到

$$\int_{-\infty}^{\infty} |f^*(p)|^2 dp = \frac{1}{2\pi h} \int_{-\infty}^{\infty} |\hat{f}(p/2\pi h)|^2 dp = \int_{-\infty}^{\infty} |\hat{f}(y)|^2 dy = \|f\|_2^2 = 1.$$

位置与动量的测不准关系是由物理学家 W. Heisenberg 首先得出的，这是量子力学的基本结果之一。它指出：微观粒子的位置确定得愈准，则粒子的动量值愈确定得不准，反之亦然。这个原理表明，对微观粒子的运动不能应用古典质点按轨道运动的观念（质点在每一时间具有一定的位置和一定的动量）。

为了给出更精确的定量结果，设 $f\in L^2(\mathbb{R})$，引进一个量

$$\Delta_a f = \frac{\int_{-\infty}^{\infty} (x-a)^2|f(x)|^2 dx}{\int_{-\infty}^{\infty} |f(x)|^2 dx}.$$

量 $\Delta_a f$ 是对 $f$ 在多大程度上没有集中在 $a$ 点附近的一种度量：若 $f$ 的值在 $a$ 点的一个小邻域以外非常小，则 $\Delta_a f$ 小；反之，若 $f$ 的值集中在远离 $a$ 点处，则 $\Delta_a f$ 大。换句话说，$\Delta_a f$ 是 $f$ 离开 $a$ 点的平方偏差。对于 $f^*$，$\Delta_\alpha f^*$ 有类似的含义。

> [!theorem] Heisenberg 不等式
> 设 $f\in L^2(\mathbb{R})$，则对任意 $a, \alpha\in\mathbb{R}$，有
> $$(\Delta_a f)(\Delta_\alpha f^*) \geq (16\pi^2)^{-1}. \tag{3.67}$$

通过变量替换不难算得

$$\Delta_\alpha f^* = (2\pi h)^2\Delta_{\alpha/2\pi h}\hat{f}.$$

于是，(3.67)式就化为

$$(\Delta_a f)(\Delta_\alpha f^*) \geq \frac{h^2}{4}. \tag{3.67'}$$

它反映了位置与动量的测不准关系：粒子的位置确定得愈准（$\Delta_a f$ 小），则粒子的动量值确定得愈不准（$\Delta_\alpha f^*$ 大），反之亦然。

不等式(3.67)表明：$f$ 与 $\hat{f}$ 不能两者都集中在单个点附近。这个结论由以下数学事实不难理解。

设函数 $f\in L^2(\mathbb{R})$，并且对一切 $|\xi|>b$，$\hat{f}(\xi)=0$。作积分

$$F(z) = \int_{-\infty}^{\infty} \hat{f}(\xi)e^{2\pi i x\xi}d\xi.$$

它对一切复数 $z$ 有意义，并且可以在积分号下取微商。由此得知 $F(z)$ 是解析的。把整函数 $F(z)$ 限制在 $x$ 轴上，根据反演公式便知它等于 $f(x)$。若 $f(x)$ 在某个有限区间之外为零，则由整函数的性质推知 $F(z)$ 恒为零，从而 $f$ 恒为零，这是平凡的情形。对一般的情形，以上讨论表明：如果 $\hat{f}$ 在某个小区间以外是零，那么 $f$ 的值不会集中在一个有限区间上，而必定是散布在全实轴上。

> [!proof]- Heisenberg 不等式的证明
> 首先设 $a=\alpha=0$。一般情形将归结为这种情形。这时(3.67)式化为
> 
> $$\left(\int_{-\infty}^{\infty} x^2|f(x)|^2 dx\right)\left(\int_{-\infty}^{\infty} \xi^2|\hat{f}(\xi)|^2 d\xi\right) \geq (16\pi^2)^{-1}\|f\|_2^4, \tag{3.68}$$
> 
> 其中 $\|f\|_2=\left(\int_{-\infty}^{\infty} |f|^2 dx\right)^{1/2}$。
> 
> 不妨假定 $\|xf\|_2<\infty$，并且 $\|\xi\hat{f}\|_2<\infty$。因为，若(3.68)式左端两个因子中有一个为 $+\infty$，另一个大于零，则(3.68)式显然成立；而若有一个因子为零，可推知 $f(x)=0$, a.e.，即 $\|f\|_2=0$，则(3.68)也显然成立。按假定 $f, xf\in L^2(\mathbb{R})$，由 Hölder 不等式便得
> 
> $$\int_{-\infty}^{\infty} |f|dx \leq \left(\int_{-\infty}^{\infty} \frac{1}{1+x^2}dx\right)^{1/2}\left[\int_{-\infty}^{\infty} (1+x^2)|f|^2 dx\right]^{1/2} < +\infty,$$
> 
> 即 $f\in L^1(\mathbb{R})$。类似地，由 $\hat{f}, \xi\hat{f}\in L^2(\mathbb{R})$，也推知 $\hat{f}\in L^1(\mathbb{R})$。从而 $f$ 的反演公式(3.33)几乎处处成立。
> 
> 在上述假定下，我们可以取到 $f_n\in C^\infty(\mathbb{R})$，并且在无穷远处速降（见 §6.1），使得
> 
> $$\lim_{n\to\infty} \int_{-\infty}^{\infty} (1+4\pi^2\xi^2)|\hat{f}_n(\xi)-\hat{f}(\xi)|^2 d\xi = 0 \tag{3.69}$$
> 
> （参看第一章习题第 12 题）。由此得知 $\{2\pi i\xi\hat{f}_n\}$ 是 $L^2(\mathbb{R})$中的基本列，因此，必存在 $g\in L^2(\mathbb{R})$，使得
> 
> $$\lim_{n\to\infty} \|2\pi i\xi\hat{f}_n-\hat{g}\|_2 = 0.$$
> 
> 而由(3.69)可推知
> 
> $$\lim_{n\to\infty} \|2\pi i\xi\hat{f}_n-2\pi i\xi\hat{f}\|_2 = 0,$$
> 
> 于是 $\hat{g}=2\pi i\xi\hat{f}$, a.e.。
> 
> 考虑不定积分 $\int_0^x g(y)dy$，可以证明它是 $\int_0^x f'_n dy$ 的极限：对每个固定的 $x\in\mathbb{R}$，由 Hölder 不等式得
> 
> $$\left|\int_0^x g(y)dy-\int_0^x f'_n(y)dy\right| \leq \sqrt{x} \left(\int_0^x |g-f'_n|^2 dy\right)^{1/2} \leq \sqrt{x} \|g-f'_n\|_2 = \sqrt{x} \|\hat{g}-\hat{f}'_n\|_2 = \sqrt{x} \|2\pi i\xi\hat{f}-2\pi i\xi\hat{f}_n\|_2 \to 0, \quad n\to\infty.$$
> 
> 上式对 $f_n$ 用到定理 3.5。
> 
> 不妨假定 $f(x)$ 连续，否则根据反演公式，我们用连续函数 $\int_{-\infty}^{\infty} \hat{f}(\xi)e^{2\pi i x\xi}d\xi$ 来代替对等的 $f(x)$。于是用反演公式得到
> 
> $$|f_n(x)-f(x)| \leq \|\hat{f}_n-\hat{f}\|_1 \leq \left(\int_{-\infty}^{\infty} \frac{1}{1+4\pi^2\xi^2}d\xi\right)^{1/2}\left(\int_{-\infty}^{\infty} (1+4\pi^2\xi^2)|\hat{f}_n-\hat{f}|^2 d\xi\right)^{1/2} \to 0, \quad n\to\infty.$$
> 
> 从而得知
> 
> $$\int_0^x g(y)dy = \lim_{n\to\infty} \int_0^x f'_n(y)dy = \lim_{n\to\infty}[f_n(x)-f_n(0)] = f(x)-f(0).$$
> 
> 这表明 $f(x)$ 绝对连续，并且对几乎一切点 $x$，$f'(x)=g(x)\in L^2(\mathbb{R})$。由 Plancherel 定理得知
> 
> $$\|2\pi i\xi\hat{f}\|_2 = \|\hat{g}\|_2 = \|g\|_2 = \|f'\|_2.$$
> 
> 现在我们可得下面的不等式
> 
> $$\begin{aligned}
> 4\pi^2\left(\int_{-\infty}^{\infty} x^2|f(x)|^2 dx\right)\left(\int_{-\infty}^{\infty} \xi^2|\hat{f}(\xi)|^2 d\xi\right) &= \left(\int_{-\infty}^{\infty} |xf(x)|^2 dx\right)\left(\int_{-\infty}^{\infty} |2\pi i\xi\hat{f}(\xi)|^2 d\xi\right) \\
> &= \left(\int_{-\infty}^{\infty} |xf(x)|^2 dx\right)\left(\int_{-\infty}^{\infty} |f'(x)|^2 dx\right) \\
> &\geq \left(\int_{-\infty}^{\infty} |xf f'| dx\right)^2 \quad \text{（由 Schwarz 不等式）} \\
> &\geq \left[\int_{-\infty}^{\infty} x\cdot\frac{1}{2}(\bar{f}f'+f\bar{f}')dx\right]^2 \quad \text{（因 }\frac{1}{2}(a+\bar{a})=\text{Re }a \leq |a|\text{）} \\
> &= \frac{1}{4}\left[\int_{-\infty}^{\infty} x(|f|^2)' dx\right]^2 \\
> &= \frac{1}{4}\left[x|f|^2\Big|_{-\infty}^{\infty} - \int_{-\infty}^{\infty} |f|^2 dx\right]^2 \\
> &= \frac{1}{4}\left[\int_{-\infty}^{\infty} |f|^2 dx\right]^2,
> \end{aligned}$$
> 
> 这就是(3.68)式。以上最后一个等式成立是因为：由前面的不等式及 $f\in L^2(\mathbb{R})$不难证明
> 
> $$\lim_{A\to+\infty} A|f(A)|^2 \quad \text{及} \quad \lim_{B\to+\infty}(-B|f(-B)|^2)$$
> 
> 存在并且必等于零。
> 
> 对于任意的 $a, \alpha\in\mathbb{R}$，令
> 
> $$G(x)=e^{-2\pi i\alpha x}f(x+a),$$
> 
> 显然 $G\in L^2(\mathbb{R})$。容易验证
> 
> $$\Delta_a f = \Delta_0 G, \quad \Delta_\alpha \hat{f} = \Delta_0 \hat{G}.$$
> 
> 于是由前面已证的结论得到
> 
> $$(\Delta_a f)(\Delta_\alpha \hat{f}) = (\Delta_0 G)(\Delta_0 \hat{G}) \geq (16\pi^2)^{-1},$$
> 
> 即(3.67)式成立。


## §3.7 多元函数的 Fourier 变换

我们用 $\mathbb{R}^n$ 表示 $n$ 维(实)欧氏空间, $\mathbb{R}^n$ 中的元为 $x=(x_1, x_2, \cdots, x_n)$, $t=(t_1, t_2, \cdots, t_n)$, 记 $x$ 与 $t$ 的内积为 $x \cdot t = x_1 t_1 + \cdots + x_n t_n$, $x$ 的模为 $|x|=(x_1^2 + \cdots + x_n^2)^{1/2}$. 若 $f \in L(\mathbb{R}^n)$, $f$ 的 Fourier 变换 $\hat{f}$ 定义为

$$
\hat{f}(t) = \int_{\mathbb{R}^n} f(x) e^{-2\pi i x \cdot t} \, dx.
$$

§3.1 中关于一元函数的 Fourier 变换的各个定理都可相应地推广到多元函数的情形, 只有少数结论要作适当改动, 以显示它与维数的关系, 叙述如下:

> [!theorem] 定理 3.1′ (vi)
> 记展缩算子为 $T_a$: $(T_a f)(x) = f(ax)$, 对实数 $a \neq 0$, 有
> 
> $$
> (T_a f)^{\wedge}(t) = \frac{1}{|a|^n} \hat{f}\left(\frac{t}{a}\right). \tag{3.70}
> $$

> [!theorem] 定理 3.5′ (i)
> 设 $f \in L(\mathbb{R}^n)$, $x_k f \in L(\mathbb{R}^n)$, 这里 $x_k$ 是 $x$ 的第 $k$ 个分量, 则 $\hat{f}$ 关于 $x_k$ 可微, 且
> 
> $$
> \frac{\partial \hat{f}}{\partial t_k}(t) = (-2\pi i x_k f(x))^{\wedge}(t). \tag{3.71}
> $$

> [!theorem] 定理 3.5′ (ii)
> 设 $f \in L(\mathbb{R}^n)$, $f$ 关于 $x_k$ 局部绝对连续, 且 $\frac{\partial f}{\partial x_k} \in L(\mathbb{R}^n)$, 则
> 
> $$
> \left(\frac{\partial f}{\partial x_k}\right)^{\wedge}(t) = 2\pi i t_k \hat{f}(t). \tag{3.72}
> $$

为了得到定理 3.5′(ii)的结论, 还可给出另一种形式的条件, 为此介绍下述概念: 设 $f \in L^1(\mathbb{R}^n)$, 如果存在 $g \in L^1(\mathbb{R}^n)$, 使得当 $h_k \to 0$ 时,

$$
\left(\int_{\mathbb{R}^n} \left|\frac{f(x+h) - f(x)}{h_k} - g(x)\right| dx\right) \to 0,
$$

其中 $h = (0, \cdots, 0, h_k, 0, \cdots, 0)$, 就称 $f$ 按 $L^1$ 范数关于 $x_k$ 可微，而函数 $g$ 就是 $f$ 按 $L^1$ 范数关于 $x_k$ 的偏导数。我们有以下论断：

> [!theorem] 定理 3.5′ (iii)
> 设 $f \in L^1(\mathbb{R}^n)$, $g$ 是 $f$ 按 $L^1$ 范数关于 $x_k$ 的偏导数，则
> 
> $$
> \hat{g}(t) = 2\pi i t_k \hat{f}(t). \tag{3.73}
> $$

> [!proof]- 证明
> 根据定理 3.1(iv) 的 $n$ 维推广，我们有
> 
> $$
> \begin{aligned}
> |\hat{g}(t) - \hat{f}(t) \frac{e^{2\pi i h \cdot t} - 1}{h_k}|
> &= \left|\hat{g}(t) - \left(\frac{f(x+h) - f(x)}{h_k}\right)^{\wedge}(t)\right| \\
> &\leq \int_{\mathbb{R}^n} \left|g(x) - \frac{f(x+h) - f(x)}{h_k}\right| dx \to 0, \quad h_k \to 0.
> \end{aligned}
> $$
> 
> 而上式左端当 $h_k \to 0$ 时的极限为 $|\hat{g}(t) - 2\pi i t_k \hat{f}(t)|$，由此得到 (3.73) 式。■

定理 3.5′ 可以推广到高阶导数，其条件就不再详述，只介绍以下公式，它们在适当条件下成立：

$$
(D^\alpha \hat{f})(x) = ((-2\pi i x)^\alpha f(x))^{\wedge}(t), \tag{3.74}
$$

$$
(D^\alpha f)^{\wedge}(t) = (2\pi i t)^\alpha \hat{f}(t), \tag{3.75}
$$

其中 $\alpha$ 是 $n$ 元非负整数组 $\alpha = (\alpha_1, \alpha_2, \cdots, \alpha_n)$，$x^\alpha = x_1^{\alpha_1} x_2^{\alpha_2} \cdots x_n^{\alpha_n}$,

$$
D^\alpha = \frac{\partial^{\alpha_1 + \alpha_2 + \cdots + \alpha_n}}{\partial x_1^{\alpha_1} \partial x_2^{\alpha_2} \cdots \partial x_n^{\alpha_n}}.
$$

我们的主要问题仍然是考虑反演公式

$$
f(x) = \int_{\mathbb{R}^n} \hat{f}(t) e^{2\pi i x \cdot t} \, dt
$$

是否成立？一般来说，$\hat{f}$ 不一定可积，上式的积分可能不收敛。为此要考虑求和法。

$f$ 的 Fourier 积分的 Abel 平均是

$$
u(x, y) = \int_{\mathbb{R}^n} e^{-2\pi y |t|} \hat{f}(t) e^{2\pi i x \cdot t} \, dt, \quad y > 0.
$$

若有极限 $\lim_{y \to 0} u(x, y) = S$，就称 $f$ 的 Fourier 积分在点 $x$ 可 Abel 求和于 $S$.

类似地，$f$ 的 Fourier 积分的 Gauss 平均是

$$
G(x, \alpha) = \int_{\mathbb{R}^n} e^{-4\pi^2 \alpha |t|^2} \hat{f}(t) e^{2\pi i x \cdot t} \, dt, \quad \alpha > 0.
$$

若有极限 $\lim_{\alpha \to 0} G(x, \alpha) = S$，就称 $f$ 的 Fourier 积分在点 $x$ 可 Gauss 求和于 $S$.

> [!theorem] 引理 3.9′
> 若 $f \in L(\mathbb{R}^n)$, $\Phi \in L(\mathbb{R}^n)$, $\hat{\Phi}(t) = K(t)$, 则对于 $\alpha > 0$, 令 $K_\alpha(t) = \frac{1}{\alpha^n} K\left(\frac{t}{\alpha}\right)$, 有
> 
> $$
> \int_{\mathbb{R}^n} \hat{\Phi}(\alpha t) \hat{f}(t) e^{2\pi i x \cdot t} \, dt = \int_{\mathbb{R}^n} f(t) K_\alpha(t - x) \, dt. \tag{3.76}
> $$

为了应用 (3.76) 式，先要求出 $e^{-2\pi |x|}$ 及 $e^{-4\pi^2 |x|^2}$ 的 Fourier 变换，其结果为：

$$
(e^{-2\pi |x|})^{\wedge} = \frac{c_n}{(1 + |t|^2)^{(n+1)/2}}, \quad \text{其中 } c_n = \frac{\Gamma\left(\frac{n+1}{2}\right)}{\pi^{(n+1)/2}}; \tag{3.77}
$$

$$
(e^{-4\pi^2 |x|^2})^{\wedge} = 2^{-n} \pi^{-n/2} e^{-|t|^2/4}. \tag{3.78}
$$

(3.78) 式可以归结为利用一维情形的 (3.29) 式。因为 $|x|^2 = x_1^2 + x_2^2 + \cdots + x_n^2$，于是

$$
\begin{aligned}
\int_{\mathbb{R}^n} e^{-4\pi^2 |x|^2} e^{-2\pi i x \cdot t} \, dx
&= \left[\int_{-\infty}^{\infty} e^{-4\pi^2 x_1^2} e^{-2\pi i x_1 t_1} \, dx_1\right] \cdots \left[\int_{-\infty}^{\infty} e^{-4\pi^2 x_n^2} e^{-2\pi i x_n t_n} \, dx_n\right] \\
&= \left(\frac{1}{2\sqrt{\pi}}\right)^n e^{-(t_1^2 + \cdots + t_n^2)/4}.
\end{aligned}
$$

为了验证 (3.77) 式，先建立下列三个等式：

### 等式 (1)

$$
\frac{1}{1 + x^2} = \int_0^\infty e^{-(1+x^2)u} \, du. \tag{3.79}
$$

这个等式是显然的。

### 等式 (2)

$$
e^{-\beta} = \frac{1}{\pi} \int_{-\infty}^{\infty} \frac{e^{i\beta x}}{1 + x^2} \, dx, \quad \beta > 0. \tag{3.80}
$$

此式由留数计算公式不难算得。令

$$
f(z) = \frac{e^{i\beta z}}{1 + z^2} = \frac{\varphi(z)}{\psi(z)},
$$

$z = i$ 是分母的一级零点，因此 $f$ 在 $z = i$ 点的留数为 $\frac{\varphi(i)}{\psi'(i)}$。取 $r > 1$，闭曲线 $\Gamma$ 由实轴上 $(-r, r)$ 与圆周 $|z| = r$ 的上半部所组成（见图 3.6），便有

$$
\frac{1}{2\pi i} \int_\Gamma \frac{e^{i\beta z}}{1 + z^2} \, dz = \frac{\varphi(i)}{\psi'(i)} = \frac{e^{-\beta}}{2i}. \tag{3.81}
$$

在上半圆周 $z = re^{i\theta}$, $0 \leq \theta \leq \pi$,

$$
|f(z)| \leq \frac{e^{-\beta r \sin\theta}}{r^2 - 1},
$$

因此 $f$ 在上半圆周的积分当 $r \to \infty$ 时极限为零。于是由 (3.81) 式，令 $r \to \infty$，便推得 (3.80) 式。

### 等式 (3)

$$
e^{-\beta} = \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{e^{-u}}{\sqrt{u}} e^{-\beta^2/4u} \, du, \quad \beta > 0. \tag{3.82}
$$

此式通过把 (3.79) 式代入 (3.80) 式，再交换积分顺序，并且用 (3.29) 得到：

$$
\begin{aligned}
e^{-\beta}
&= \frac{1}{\pi} \int_{-\infty}^{\infty} \frac{e^{i\beta x}}{1 + x^2} \, dx \\
&= \frac{1}{\pi} \int_{-\infty}^{\infty} e^{i\beta x} \left\{\int_0^\infty e^{-(1+x^2)u} \, du\right\} dx \\
&= \frac{1}{\pi} \int_0^\infty e^{-u} \left\{\int_{-\infty}^{\infty} e^{-ux^2} e^{i\beta x} \, dx\right\} du \\
&= \frac{1}{\pi} \int_0^\infty e^{-u} \cdot \frac{1}{\sqrt{u}} \cdot \sqrt{\pi} e^{-\beta^2/4u} \, du \\
&= \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{e^{-u}}{\sqrt{u}} e^{-\beta^2/4u} \, du.
\end{aligned}
$$

利用 (3.82) 式，再用 (3.78) 与 (3.70) 式便可导出 (3.77) 式：

$$
\begin{aligned}
\int_{\mathbb{R}^n} e^{-2\pi |x|} e^{-2\pi i x \cdot t} \, dx
&= \int_{\mathbb{R}^n} \left\{\frac{1}{\sqrt{\pi}} \int_0^\infty \frac{e^{-u}}{\sqrt{u}} e^{-4\pi^2 |x|^2/4u} \, du\right\} e^{-2\pi i x \cdot t} \, dx \\
&= \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{e^{-u}}{\sqrt{u}} \left\{\int_{\mathbb{R}^n} e^{-4\pi^2 |x|^2/4u} e^{-2\pi i x \cdot t} \, dx\right\} du \\
&= \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{e^{-u}}{\sqrt{u}} \left\{\left(\frac{u}{\pi}\right)^{n/2} e^{-u|t|^2}\right\} du \\
&= \frac{1}{\pi^{(n+1)/2}} \int_0^\infty u^{(n-1)/2} e^{-(1+|t|^2)u} \, du \\
&= \frac{1}{\pi^{(n+1)/2}} \cdot \frac{1}{(1 + |t|^2)^{1 + (n-1)/2}} \int_0^\infty y^{(n-1)/2} e^{-y} \, dy \\
&= \frac{1}{\pi^{(n+1)/2}} \Gamma\left(\frac{n+1}{2}\right) \cdot \frac{1}{(1 + |t|^2)^{(n+1)/2}}.
\end{aligned}
$$

用 (3.76) 及 (3.77) 式便可得到 Abel 平均的表达式，

$$
\begin{aligned}
u(x, y)
&= \int_{\mathbb{R}^n} e^{-2\pi y |t|} \hat{f}(t) e^{2\pi i x \cdot t} \, dt \\
&= \int_{\mathbb{R}^n} f(t) \cdot \frac{y^{-n} c_n}{\left(1 + \left|\frac{t-x}{y}\right|^2\right)^{(n+1)/2}} \, dt \\
&= \int_{\mathbb{R}^n} f(t) P(x-t, y) \, dt, \quad y > 0, \tag{3.83}
\end{aligned}
$$

其中

$$
c_n = \frac{\Gamma\left(\frac{n+1}{2}\right)}{\pi^{(n+1)/2}},
$$

$$
P(x, y) = \frac{c_n y}{(y^2 + |x|^2)^{(n+1)/2}}.
$$

$P(x, y)$ 称为（上半空间 $\mathbb{R}_+^{n+1}$ 的）Poisson 核。

类似地，用 (3.76) 及 (3.78) 式可以得到 Gauss 平均的表达式

$$
\begin{aligned}
G(x, \alpha)
&= \int_{\mathbb{R}^n} e^{-4\pi^2 \alpha |t|^2} \hat{f}(t) e^{-2\pi i x \cdot t} \, dt \\
&= \int_{\mathbb{R}^n} f(t) \alpha^{-n/2} 2^{-n} \pi^{-n/2} e^{-|t-x|^2/(4\alpha)} \, dt \\
&= \int_{\mathbb{R}^n} f(t) W(x-t, \alpha) \, dt, \quad \alpha > 0, \tag{3.84}
\end{aligned}
$$

其中

$$
W(x, \alpha) = (4\pi\alpha)^{-n/2} e^{-|x|^2/(4\alpha)},
$$

称为 Weierstrass 核。

可以证明以下两个等式

$$
\int_{\mathbb{R}^n} W(x, \alpha) \, dx = 1, \quad \alpha > 0. \tag{3.85}
$$

$$
\int_{\mathbb{R}^n} P(x, y) \, dx = 1, \quad y > 0. \tag{3.86}
$$

这里的 (3.85) 式是等式

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

的直接推论。为证明 (3.86) 式，可用球坐标变换，令 $r = |x|$, $x = rx'$, 用 $\Sigma_{n-1}$ 表示 $\mathbb{R}^n$ 中单位球面 $|x| = 1$，$dx'$ 表示 $\Sigma_{n-1}$ 上的面积元。

单位球面 $\Sigma_{n-1}$ 的面积 $\omega_{n-1} = \frac{2\pi^{n/2}}{\Gamma(n/2)}$. 我们有

$$
\begin{aligned}
\int_{\mathbb{R}^n} \frac{y}{(y^2 + |x|^2)^{(n+1)/2}} \, dx &= \int_{\mathbb{R}^n} \frac{1}{(1 + |x|^2)^{(n+1)/2}} \, dx \\
&= \int_0^\infty \left(\int_{\Sigma_{n-1}} \frac{1}{(1+r^2)^{(n+1)/2}} \, dx'\right) r^{n-1} \, dr \\
&= \omega_{n-1} \int_0^\infty \frac{r^{n-1}}{(1+r^2)^{(n+1)/2}} \, dr \quad (\text{令 } r = \tan\theta) \\
&= \omega_{n-1} \int_0^{\pi/2} \sin^{n-1}\theta \, d\theta \\
&= \frac{2\pi^{n/2}}{\Gamma(n/2)} \cdot \frac{\sqrt{\pi}}{2} \cdot \frac{\Gamma(n/2)}{\Gamma\left(\frac{n+1}{2}\right)} = \frac{1}{c_n},
\end{aligned}
$$

其中用到了积分公式

$$
\int_0^{\pi/2} \sin^{n-1}\theta \, d\theta = \frac{\sqrt{\pi}}{2} \frac{\Gamma(n/2)}{\Gamma\left(\frac{n+1}{2}\right)}
$$

（此式见菲赫金哥尔茨《微积分学教程》第二卷第三分册 688 页）。

在一维情形的定理 3.11 至定理 3.15 都可以推广到 $n$ 维情形，其证明与一维情形类似。

关于 $L^2(\mathbb{R}^n)$ 中函数的 Fourier 变换也与一维情形相同，有 Plancherel 定理成立，只需把 (3.41) 式改为

$$
\hat{f}(t) = \underset{r \to \infty}{\text{l.i.m.}} \int_{|x| \leq r} f(x) e^{-2\pi i x \cdot t} \, dx,
$$

反演公式 (3.43) 改为

$$
f(x) = \underset{r \to \infty}{\text{l.i.m.}} \int_{|t| \leq r} \hat{f}(t) e^{2\pi i x \cdot t} \, dt.
$$

其余各式类似，只需把积分区域从 $\mathbb{R}^1$ 改为 $\mathbb{R}^n$.


## 习题

> [!exercise] 1. 求以下函数的 Fourier 变换：
> 
> （1）$f(x)=\chi_{[-a,a]}(x)=\begin{cases}1, & |x|\leq a, a>0,\\0, & |x|>a;\end{cases}$
> 
> （2）$f(x)=\begin{cases}\cos(\pi x/2), & |x|\leq 1,\\0, & |x|>1;\end{cases}$
> 
> （3）$f(x)=e^{-|x|}\sin x$；
> 
> （4）$f(x)=\frac{1}{\text{ch}\,ax}=\frac{1}{(e^{ax}+e^{-ax})/2}$  （$a>0$）。
> 
> > [!hint]- 提示
> > 利用欧拉积分
> > $$\int_0^\infty \frac{x^{a-1}}{1+x}\,dx = \frac{\pi}{\sin\pi a}, \quad 0<a<1$$
> > 的扩广形式：
> > $$\int_{-\infty}^\infty \frac{e^{zt}}{1+e^t}\,dt = \frac{\pi}{\sin\pi z}, \quad 0<\text{Re}\,z<1.$$

> [!exercise] 2. 若 $0<a<1$，当 $x\neq 0$，求
> $$\lim_{R\to\infty}\frac{1}{\pi}\int_0^\infty \frac{1}{t^a}\cdot\frac{\sin R(x-t)}{x-t}\,dt = \,?$$

> [!exercise] 3. 求以下函数的 Fourier 变换：
> 
> > [!hint]- 提示
> > 利用已知函数的 Fourier 变换及 Fourier 变换的性质。
> 
> （1）$f(x)=\left(\frac{\sin ax}{x}\right)^2$，$a>0$；
> 
> （2）$f(x)=e^{-a(x-b)^2}$，$a>0$；
> 
> （3）$f(x)=e^{-|x|}\cdot\frac{\sin x}{x}$。

> [!exercise] 4. 求以下积分的值：
> 
> （1）$\displaystyle\frac{1}{\pi}\int_{-\infty}^\infty \left(\frac{\sin t}{t}\right)^2\cos xt\,dt = \,?$
> 
> （2）$\displaystyle\frac{1}{\pi}\int_{-\infty}^\infty \left(\frac{\sin t}{t}\right)^4 dt = \,?$

> [!exercise] 5. 设 $g\in L(\mathbb{R})$，$\int_{\mathbb{R}} g(x)\,dx=1$，
> 
> （1）证明：对一切 $\xi\in\mathbb{R}$，
> $$\lim_{\delta\to 0}\hat{g}(\delta\xi)=1；$$
> 
> （2）设连续的 $f\in L(\mathbb{R})$，且 $\hat{f}\in L(\mathbb{R})$，证明：
> $$\lim_{\delta\to 0}\int_{-\infty}^\infty \hat{g}(\delta\xi)\hat{f}(\xi)e^{2\pi i\xi x}\,d\xi = f(x)$$
> 对一切 $x$ 成立。

> [!exercise] 6. 利用 Fourier 变换来证明以下等式：$a>0$，$b>0$，
> 
> （1）$f_a*f_b=f_{a+b}$，其中 $f_a=\dfrac{a}{\pi(x^2+a^2)}$；
> 
> （2）$g_a*g_b=g_{\min(a,b)}$，其中 $g_a=\dfrac{\sin ax}{\pi x}$。

> [!exercise] 7. 
> 
> （1）设 $f\in L(\mathbb{R})$，且 $(f*f)(x)=f(x)$，a.e.，试证 $f(x)=0$，a.e.；
> 
> （2）设 $f\in L(\mathbb{R})$，且 $(f*f)(x)=0$，a.e.，试证 $f(x)=0$，a.e.。

> [!exercise] 8. 用 Parseval 等式来证明以下关系式：当 $a>0$，$b>0$ 时，
> 
> （1）$\displaystyle\int_{-\infty}^\infty \frac{\sin(at)\sin(bt)}{t^2}\,dt = \pi\min(a,b)$；
> 
> （2）$\displaystyle\int_{-\infty}^\infty \frac{t^2}{(t^2+a^2)(t^2+b^2)}\,dt = \frac{\pi}{a+b}$。

> [!exercise] 9. 求积分方程
> $$\int_{-\infty}^\infty \frac{u(t)}{(x-t)^2+a^2}\,dt = \frac{1}{t^2+b^2}, \quad 0<a<b$$
> 的解 $u(t)\in L^2(\mathbb{R})$。

> [!exercise] 10. 设 $f\in L(\mathbb{R}^2)$ 是一个径向函数，即：$f(x)=f_0(|x|)$。试证明：$f$ 的 Fourier 变换 $\hat{f}(t)$ 也是径向函数，并且
> $$\hat{f}(t)=2\pi\int_0^\infty f_0(r)J_0(2\pi|t|r)\,r\,dr,$$
> 其中 $J_0$ 是 Bessel 函数，
> $$J_0(r)=\frac{1}{2\pi}\int_0^{2\pi} e^{ir\cos\theta}\,d\theta.$$

> [!exercise] 11. 寻找两个函数 $f$，$g\in L(\mathbb{R})$，二者都不是处处为零的，使得
> $$(f*g)(x)=0.$$
