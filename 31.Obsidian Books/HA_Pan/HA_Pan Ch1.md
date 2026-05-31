# 第一章 预备知识

在“数学分析”课程中，已经对Fourier级数作过初步介绍，为了便于学习，我们在本章第一节把有关的基本知识简要地叙述一下。因为Fourier级数的部分和经过适当的运算可以化为Dirichlet积分的形式，也就是周期函数的卷积形式，而且Fourier级数通过各种求和法所得到的平均，通常也可以化成周期函数的卷积形式。此外对于Fourier积分，类似的问题也会出现卷积的形式，所以从本章第二节开始，还将介绍卷积与恒等逼近的理论。

### § 1.1 三角函数系及 Fourier 级数

我们称级数

$$
\frac {a _ {0}}{2} + \sum_ {k = 1} ^ {\infty} (a _ {k} \cos k x + b _ {k} \sin k x) \tag {1.1}
$$

为实型三角级数，其中 $a_{0}, a_{k}, b_{k} (k=1,2,\cdots)$ 是实数列，又称级数

$$
\sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k x} \tag {1.2}
$$

为复型三角级数，其中 $c_{k}(k=0,\pm1,\pm2,\cdots)$ 是复数列. $a_{0},a_{k},b_{k}(k=1,2,\cdots)$ 与 $c_{k}(k=0,\pm1,\pm2,\cdots)$ 称为相应的三角级数的系数.

函数系

$$
1, \cos x, \sin x, \dots , \cos k x, \sin k x, \dots \tag {1.3}
$$

称为三角函数系. 因为有关系式

$$
\mathrm{e} ^ {\mathrm{i} x} = \cos x + 1 \sin x,
$$

所以也称函数系

$$
\{\mathrm{e} ^ {\mathrm{i} k \tau} \} (k = 0, \pm 1, \pm 2, \dots) \tag {1.4}
$$

为三角函数系(复的形式).

三角函数系具有以下特性：

(1) 周期性 三角函数系中的函数都以 $2\pi$ 为周期.

(2) 正交性 它们在长度为 $2\pi$ 的任意区间 $I=(a,a+2\pi)$ 上组成正交函数系, 即有

$$
\begin{array}{l} \int_ {- \pi} ^ {\pi} \sin m x \sin n x \mathrm{d} x = 0, \quad m \neq n, \\ \int_ {- \pi} ^ {\pi} \cos m x \cos n x \mathrm{d} x = 0, \quad m \neq n, \\ \int_ {- \pi} ^ {\pi} \sin m x \cos n x \mathrm{d} x = 0, \\ \int_ {- \pi} ^ {\pi} \mathrm{e} ^ {\mathrm{i} m x} \overline {{\mathrm{e} ^ {\mathrm{i} n x}}} \mathrm{d} x = 0, \quad m \neq n. \\ \end{array}
$$

(将积分区间换成 $I=(a,a+2\pi)$ ，以上各式仍成立.)

(3) 完全性 若有 $f \in L(I)$ , 它在 $I$ 上与三角函数系 (1.3) (或 (1.4)) 中的每一个函数正交, 则 $f(x) = 0$ , a.e. (其证明见定理 1.1).

因为对给定函数 $f \in L(I), I = (a, a + 2\pi)$ ，总可以把它延拓成为实轴上周期为 $2\pi$ 的函数，而且使得它在每个长为 $2\pi$ 的区间上可积，所以今后常讨论周期可积函数。我们记

$$
\boldsymbol {T} = \{x: - \pi <   x \leqslant \pi \} = (- \pi , \pi ].
$$

用 $L(T)$ 表示在 $\pmb{T}$ 上可积，并且以 $2\pi$ 为周期的函数全体. 又用 $C(T)$ 表示在实轴上连续且以 $2\pi$ 为周期的函数全体.

若给定函数 $f \in L(T)$ , 三角级数(1.1)的系数由以下公式给定

$$
a _ {k} = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{cos} k x \mathrm{d} x, \quad k = 0, 1, 2, \dots , \tag {1.5}
$$

$$
b _ {k} = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \sin k x \mathrm{d} x, \quad k = 1, 2, \dots , \tag {1.6}
$$

则称该三角级数为 $f(x)$ 的(实型)Fourier级数，记为

$$
f (x) \sim \frac {a _ {o}}{2} + \sum_ {k = 1} ^ {\infty} (a _ {k} \cos k x + b _ {k} \sin k x). \tag {1.7}
$$

其系数 $a_{k}$ 及 $b_{k}$ 分别称为 $f$ 的Fourier余弦系数及Fourier正弦系数，或统称为三角型Fourier系数.同样地，若三角级数(1.2)的系数由公式

$$
c _ {k} = \iota_ {k} (f) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {- 1 k x} \mathrm{d} x \tag {1.8}
$$

给定,则称该三角级数为 f 的(复型)Fourier 级数,记为

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k x}. \tag {1.9}
$$

其系数 $c_k$ 称为 $f$ 的(复型)Fourier 系数, 或指数型 Fourier 系数. 级数(1.7)与(1.9)的系数之间有以下关系式

$$
c _ {0} = \frac {1}{2} a _ {0}, \quad c _ {k} = \frac {1}{2} (a _ {k} - \mathrm{i} b _ {k}),
$$

$$
c _ {- k} = \frac {1}{2} \left(a _ {k} + \mathrm{i} b _ {k}\right), \quad k = 1, 2, \dots . \tag {1.10}
$$

注意到当 f 是实值函数时, 其实型 Fourier 系数 $a_{0}, a_{k}, b_{k} (k = 1, 2, \cdots)$ 都是实数, 而其复型 Fourier 系数具有性质

$$
c _ {- k} = \overline {{{{c _ {k}}}}}, \quad k = 1, 2, \dots .
$$

如果 $I = (-\pi, \pi)$ ，且 $f$ 是 $I$ 上的偶函数，那么，

$$
a _ {k} = \frac {2}{\pi} \int_ {0} ^ {\pi} f (x) \cos k x \mathrm{d} x, \quad k = 0, 1, 2, \dots ,
$$

$$
b _ {k} = 0, \quad k = 1, 2, \dots .
$$

Fourier 级数(1.7)化为余弦级数

$$
\frac {a _ {o}}{2} + \sum_ {k = 1} ^ {\infty} a _ {k} \cos k x.
$$

若 $f$ 是 $I$ 上的奇函数，则

$$
a _ {k} = 0, \quad k = 0, 1, 2, \dots ,
$$

$$
b _ {k} = \frac {2}{\pi} \int_ {0} ^ {\pi} f (x) \sin k x \mathrm{d} x, \quad k = 1, 2, \dots .
$$

Fourier 级数(1.7)化为正弦级数

$$
\sum_ {k = 1} ^ {\infty} b _ {k} \sin k x.
$$

Fourier 级数的 $n$ 阶部分和为

$$
\begin{array}{l} S _ {n} (x) = S _ {n} (f, x) = \frac {a _ {0}}{2} + \sum_ {k = 1} ^ {n} \left(a _ {k} \cos k x + b _ {k} \sin k x\right) \\ = c _ {o} + \sum_ {k = 1} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x} + \sum_ {k = 1} ^ {n} c _ {- k} \mathrm{e} ^ {- \mathrm{i} k x} = \sum_ {k = - n} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x}, \tag {1.11} \\ \end{array}
$$

此式表明级数(1.9)的 $n$ 阶对称部分和就等于级数(1.7)的 $n$ 阶部分和，可根据关系式(1.10)验证.Fourier级数的两种形式各自有其优点，二者都是常用的.

以下定理说明了三角函数系的完全性.

定理1.1 设 $f \in L(T)$ , 若 $f$ 的一切Fourier系数为0, 即

$$
c _ {k} (f) = 0, \quad k = 0, \pm 1, \pm 2, \dots ,
$$

则 $f(x) = 0$ ，a.e..

证明 （1）先设 $f \in C(T)$ , $f(x)$ 为实值函数，并且对一切 k, $c_{k}(f)=0$ ，由此推证

$$
f (x) \equiv 0.
$$

如若不然，即 $f(x) \neq 0$ ，则必存在点 $x_0 \in [-\pi, \pi]$ ，使得

$$
\left| f (x _ {0}) \right| = \sup _ {x \in [ - \pi , \pi ]} | f (x) | = M > 0.
$$

不妨设 $f(x_0) = M$ . 因为 $f$ 连续，存在 $\delta > 0$ ，使得

$$
f (x) > \frac {1}{2} M, \quad \forall x \in (x _ {0} - \delta , x _ {0} + \delta) = I.
$$

现在考虑三角多项式

$$
P (x) = 1 + \cos \left(x - x _ {0}\right) - \cos \delta ,
$$

它在 $I$ 内严格大于1.取 $J = \left(x_0 - \frac{\delta}{2},x_0 + \frac{\delta}{2}\right)$ ，则存在 $r > 1$ ，使得

$$
P (x) \geqslant r, \quad \forall x \in J.
$$

而对一切 $x \in [x_0 - \pi, x_0 + \pi] \setminus I, |P(x)| \leqslant 1$ .

按假定 $f$ 的Fourier系数都是0，因此对任意三角多项式 $Q(x)$ ，必定有

$$
\int_ {- \pi} ^ {\pi} f Q \mathrm{d} x = 0.
$$

从而对一切 $N=1,2,\cdots,$

$$
\int_ {x _ {0} - \pi} ^ {x _ {0} + \pi} f (x) P ^ {N} (x) \mathrm{d} x = \int_ {- \pi} ^ {\pi} f P ^ {N} \mathrm{d} x = 0. \tag {1.12}
$$

容易看到

$$
\left| \int_ {[ x _ {0} - \pi , r _ {0} + \pi ] \backslash I} f P ^ {N} \mathrm{d} x \right| \leqslant 2 \pi M \cdot 1 ^ {N} = 2 \pi M,
$$

而当 $N \to +\infty$ 时

$$
\int_ {I} f P ^ {N} \mathrm{d} x \geqslant \int_ {J} f P ^ {N} \mathrm{d} x \geqslant \frac {1}{2} M \cdot r ^ {N} \cdot \delta \rightarrow + \infty ,
$$

联合上述两个不等式,可得到

$$
\lim _ {N \rightarrow \infty} \int_ {x _ {0} - \pi} ^ {x _ {0} + \pi} f P ^ {N} \mathrm{d} x = + \infty .
$$

这与(1.12)矛盾, 因此必有 $f(x) \neq 0$ .

如果 $f$ 是复值连续函数，且对一切 $k, c_k(f)$ 都是0，不难推知 $c_k(\overline{f}) = c_{-k}(f)$ 也都是0。从而 $f$ 的实部与虚部的Fourier系数也都是0。由前面所证便知 $f$ 的实部与虚部都恒为0，即 $f \equiv 0$ 。

(2) 设 $f \in L(T)$ , 对一切 $k, c_k(f)$ 都是 0, 那么

$$
c _ {0} (f) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{d} x = 0.
$$

作函数

$$
F (x) = \int_ {- \pi} ^ {x} f (t) \mathrm{d} t,
$$

便有 $F(\pi) = 0 = F(-\pi)$ . 易知 $F(x)$ 绝对连续, 以 $2\pi$ 为周期. 记 $a = c_0(F)$ , 令

$$
G (x) = F (x) - a,
$$

则 $G(x)$ 也是绝对连续函数，以 $2\pi$ 为周期，并且

$$
c _ {0} (G) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} [ F (x) - a ] \mathrm{d} x = 0.
$$

因为 $G^{\prime}(x) = f(x)$ ，a.e.,由分部积分公式推知

$$
c _ {k} (f) = \mathrm{i} k c _ {k} (G),
$$

所以

$$
c _ {k} (G) = 0, \quad k = \pm 1, \pm 2, \dots .
$$

由前面(1)部分已证的结果,便知

$$
G (x) \equiv 0,
$$

从而 $f(x) = G'(x) = 0$ ，a.e..

这个定理也表明：在对等的意义下，可积函数由它的Fourier系数所唯一确定.

推论1.2 若 $f, g \in L(T)$ , 有

$$
c _ {k} (f) = c _ {k} (g), \quad k = 0, \pm 1, \pm 2, \dots ,
$$

则 $f(x) = g(x),\quad \mathrm{a.e.}$

由定理1.1容易推得此推论.

一般的 Fourier 级数定义是关于正交函数系给出的, 设 E 是实轴上具有正测度的子集. (复值) 函数 $\psi_{k} \in L^{2}(E) (k = 1, 2, \cdots)$ , 如果有以下等式成立

$$
\langle \psi_ {k}, \psi_ {j} \rangle = \int_ {E} \psi_ {k} \overline {{{{\psi}}}} _ {j} \mathrm{d} x = \left\{ \begin{array}{l l} 0, & k \neq j, \\ \lambda_ {k} > 0, & k = j, \end{array} \right.
$$

就称函数系 $\{\psi_k\}$ 为 $E$ 上的正交系.任给(复值)函数 $f\in L^{2}(E)$ ，称

$$
c _ {k} = \frac {1}{\lambda_ {k}} \int_ {E} f (x) \overline {{{{\psi_ {k} (x)}}}} \mathrm{d} x
$$

为 $f$ 关于 $\{\psi_k\}$ 的Fourier系数.级数

$$
\sum_ {k = 1} ^ {\infty} c _ {k} \psi_ {k} (x)
$$

称为 $f$ 关于 $\{\psi_k\}$ 的Fourier级数，记作

$$
f (x) \sim \sum_ {k = 1} ^ {\infty} c _ {k} \psi_ {k} (x).
$$

本书只讨论关于三角函数系的 Fourier 级数.

在实际应用的问题中, 常需要使用给定在任意区间上的函数的 Fourier 级数展开式. 为此介绍一般周期函数的 Fourier 级数.

设 $f(x)$ 以 $T$ 为周期 $(T > 0)$ , 在 $(-T / 2, T / 2)$ 上Lebesgue可积. 令 $\varphi(t) = f\left(\frac{T}{2\pi} t\right)$ , 则 $\varphi(t)$ 以 $2\pi$ 为周期, 且属于 $L(-\pi, \pi)$ . 我们用变量替换的方法, 可由 $\varphi$ 在 $(-π, π)$ 上的 Fourier 级数导出 $f(x)$ 在 $(-T/2, T/2)$ 上的 Fourier 级数, 得到

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {i k \frac {2 \pi}{T} x},
$$

其中Fourier系数为

$$
c _ {k} = \frac {1}{T} \int_ {- T / 2} ^ {T / 2} f (x) \mathrm{e} ^ {- \mathrm{i} k \frac {2 \pi}{T} x} \mathrm{d} x. 
$$

关于以 $2\pi$ 为周期的函数所得的结果都可以转换到以 $T$ 为周期的情形.

若在区间 $(a, a + T)$ 上给定一个可积函数 $f(x)$ , 我们可以把它延拓成为全实轴上以 $T$ 为周期的函数, 从而可以用上述方法得到它的 Fourier 级数.

## § 1.2 卷积

设 $f(x)$ 与 $g(x)$ 是 $\pmb{R}^n$ 上两个可测函数，如果对于几乎处处的 $x$ ，积分 $\int_{\mathbb{R}^n}f(x - y)g(y)\mathrm{d}y$ 存在，就称它是 $f$ 与 $g$ 的卷积，记为 $(f*g)(x)$ ，即

$$
(f * g) (x) = \int_ {\mathbb {R} ^ {n}} f (x - y) g (y) d y.
$$

本节将讨论卷积的性质.

定理1.3 设 $1 \leqslant p \leqslant \infty, f \in L^{p}(\mathbb{R}^{n}), g \in L(\mathbb{R}^{n})$ ，则 $f * g \in L^{p}(\mathbb{R}^{n})$ ，并且

$$
\| f * g \| _ {p} \leqslant \| f \| _ {p} \| g \| _ {1}. \tag {1.13}
$$

证明 设 $1 < p < \infty, q$ 是 $p$ 的共轭指标，即 $\frac{1}{p} + \frac{1}{q} = 1$ ，用Holder不等式可得

$$
\mid (f * g) (x) \mid \leqslant \int_ {\mathbb {R} ^ {n}} \mid f (x - y) \mid \mid g (y) \mid \mathrm{d} y
$$

$$
\begin{array}{l} = \int_ {R ^ {n}} | f (x - y) | | g (y) | ^ {1 / p} | g (y) | ^ {1 / q} d y \\ \leqslant \left(\int_ {R ^ {n}} | f (x - y) | ^ {p} | g (y) | \mathrm{d} y\right) ^ {1 / p} \left(\int_ {R ^ {n}} | g (y) | \mathrm{d} y\right) ^ {1 / q}. \\ \end{array}
$$

因此，由Fubini定理推知

$$
\begin{array}{l} \int_ {\mathbb {R} ^ {n}} | (f * g) (x) | ^ {p} d x = \| f * g \| _ {p} ^ {p} \\ \leqslant \left[ \int_ {R ^ {n}} \left(\int_ {R ^ {n}} | f (x - y) | ^ {p} | g (y) | d y\right) d x \right] \\ \times \left(\int_ {R ^ {n}} | g (y) | d y\right) ^ {p / q} \\ = \left[ \int_ {R ^ {n}} | g (y) | \left(\int_ {R ^ {n}} | f (x - y) | ^ {p} d x\right) d y \right] \| g \| _ {1} ^ {p / q} \\ = \| f \| _ {p} ^ {p} \| g \| _ {1} ^ {1 + (p / q)} = \| f \| _ {p} ^ {p} \| g \| _ {1} ^ {p}, \\ \end{array}
$$

便得(1.13).

设 p=1，根据 Tonelli 定理便可得到(1.13)式.

设 $p = \infty$ ，容易看到

$$
\left| (f * g) (x) \right| \leqslant \| f \| _ {\infty} \int_ {\mathbb {R} ^ {n}} | g (y) | d y = \| f \| _ {\infty} \| g \| _ {1},
$$

从而也得(1.13)式.

更一般地有以下 Young 卷积定理.

定理1.4 设 $1 \leqslant p \leqslant \infty, 1 \leqslant q \leqslant \infty$ ，以及 $\frac{1}{p} + \frac{1}{q} \geqslant 1$ ，并且 $\frac{1}{r} = \frac{1}{p} + \frac{1}{q} - 1$ 。如果 $f \in L^{p}(\mathbb{R}^{n})$ ， $g \in L^{q}(\mathbb{R}^{n})$ ，则 $f * g \in L^{r}(\mathbb{R}^{n})$ ，且有

$$
\| f * g \| _ {r} \leqslant \| f \| _ {p} \| g \| _ {q}. \tag {1.14}
$$

显然，当 $q = 1$ 时，(1.14)式就化为(1.13)式.

这里略去此定理的证明, 只给出下述提示: 设 $f, g \geqslant 0, p, q, r < \infty$ , 把 $f * g$ 改写成

$$
\begin{array}{l} (f * g) (x) = \int_ {\mathbb {R} ^ {n}} f (x - y) ^ {p / r} g (y) ^ {q / r} \cdot f (x - y) ^ {p (1 / p - 1 / r)}. \\ \cdot g (y) ^ {q (1 / q - 1 / r)} \mathrm{d} y, \\ \end{array}
$$

再对积分内三个相乘的函数关于指标 $r, p_1$ ，及 $p_2$ 用Holder不等式，其中 $\frac{1}{p_1} = \frac{1}{p} - \frac{1}{r}, \frac{1}{p_2} = \frac{1}{q} - \frac{1}{r}$ ，有兴趣的读者可以练习自证。

总结起来,可以证明 $L^{1}$ 中函数的卷积运算有以下简单性质:设 $f, g, h \in L(R^{n})$ , 则有

(1) $f*g = g*f$ （可交换性）；  
(2) $f*(g*h)=(f*g)*h$ （可结合性）；  
(3) $(\alpha f + \beta g) * h = \alpha (f * h) + \beta (g * h)$ （线性）；  
(4) $\| f*g\| _1\leqslant \| f\| _1\| g\| _1$ （连续性）.

对于给定的 $\mathcal{H}(x)$ , 由卷积 $f * \mathcal{H}$ 可以定义一个算子 $T: Tf = f * \mathcal{H}$ , 称 $T$ 是以 $\mathcal{H}$ 为核的卷积算子. 定理1.3表明, 具有可积核 $(\mathcal{H} \in L(R^n))$ 的卷积算子 $T$ 是把 $L^p$ 映到 $L^p$ 的有界线性算子, 并且

$$
\| T f \| _ {p} \leqslant \| \mathcal {K} \| _ {1} \| f \| _ {p},
$$

由此式可推知算子的模 $\| T\| \leqslant \| \mathcal{K}\| _1$

如果卷积算子 $T$ 的核具有某种光滑性, 我们研究它的映像 $Tf$ 是否也有同样的光滑性. 对于正整数 $m$ , 我们把 $\mathbb{R}^n$ 上具有直至 $m$ 阶连续偏微商的函数全体记为 $C^m = C^m(\mathbb{R}^n)$ . $C^m$ 中具有紧支集的函数全体记作 $C_0^m$ (函数 $f(x)$ 的支集是指: 点集 $\{x: f(x) \neq 0\}$ 的闭包). 还用 $C^{xx}$ 表示 $\mathbb{R}^n$ 上无穷次可微的函数全体; 用 $C_0^{\infty}$ 表示 $C^{xx}$ 中具有紧支集的函数全体.

设多重指标 $\alpha=(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})$ ，其中 $\alpha_{k}$ 是非负整数，记 $|\alpha|=\alpha_{1}+\cdots+\alpha_{n}$ ，函数 f 的 $\alpha$ 阶偏微商表示为

$$
(D ^ {a} f) (x) = \frac {\partial^ {a} f (x)}{\partial x ^ {a}} = \left(\frac {\partial^ {a _ {1} + \cdots + a _ {n}}}{\partial x _ {1} ^ {a _ {1}} \cdots \partial x _ {n} ^ {a _ {n}}} f\right) (x).
$$

定理1.5 设 $1 \leqslant p \leqslant \infty, f \in L^{p}(\mathbb{R}^{n})$ 及 $\mathcal{H} \in C_{0}^{m}$ , 则 $f * \mathcal{H} \in C^{m}$ , 并且

$$
D ^ {a} (f * \mathcal {K}) (x) = (f * D ^ {a} \mathcal {K}) (x), \quad | \alpha | \leqslant m. \tag {1.15}
$$

证明 先证明：如果 $\mathcal{K}$ 是具有紧支集的连续核，即 $\mathcal{K} \in$

$C_0$ ，则 $f*\mathcal{K}$ 连续.这是因为：

若 $1 < p < \infty, \frac{1}{p} + \frac{1}{q} = 1$ ，则

$$
\begin{array}{l} \left| (f * \mathscr {K}) (x + h) - (f * \mathscr {K}) (x) \right| \\ = \left| \int_ {R ^ {n}} f (y) \mathscr {K} (x + h - y) d y - \int_ {R ^ {n}} f (y) \mathscr {K} (x - y) d y \right| \\ = \left| \int_ {R ^ {n}} f (x - t) [ \mathscr {K} (t + h) - \mathscr {K} (t) ] \mathrm{d} t \right| = I \\ \leqslant \| f \| _ {p} \left(\int_ {\mathbb {R} ^ {n}} | \mathscr {K} (t + h) - \mathscr {K} (t) | ^ {q} \mathrm{d} t\right) ^ {1 / q}. \tag {1.16} \\ \end{array}
$$

由于 $\mathcal{K}$ 连续又具有紧支集，从而一致连续，推知

$$
\left(\int_ {R ^ {n}} | \mathcal {K} (t + h) - \mathcal {K} (t) | ^ {q} \mathrm{d} t\right) ^ {1 / q} \rightarrow 0 \quad (h \rightarrow 0).
$$

若 $p = 1$ ，由控制收敛定理可推知

$$
I = \left| \int_ {\mathbb {R} ^ {n}} f (x - t) [ \mathscr {K} (t + h) - \mathscr {K} (t) ] \mathrm{d} t \right|\rightarrow 0 \quad (h \rightarrow 0).
$$

若 $p = \infty$ ，有

$$
I \leqslant \| f \| _ {\infty} \int_ {R ^ {n}} | \mathcal {K} (t + h) - \mathcal {K} (t) | \mathrm{d} t \rightarrow 0 \quad (h \rightarrow 0).
$$

因此， $f*\mathcal{K}$ 连续.

其次，设 $K \in C_{0}^{m}, m \geqslant 1$ ，对某个固定的 $j, 1 \leqslant j \leqslant n$ ，令 $h = (0, \cdots, 0, h_{j}, 0, \cdots, 0)$ ，由中值定理推知

$$
\begin{array}{l} \frac {(f * \mathcal {K}) (x + h) - (f * \mathcal {K}) (x)}{h _ {j}} - \left(f * \frac {\partial \mathcal {K}}{\partial x _ {j}}\right) (x) \\ = \int_ {R ^ {n}} f (t) \frac {\left[ \mathscr {K} (x - t + h) - \mathscr {K} (x - t) \right]}{h _ {j}} d t \\ - \left(f * \frac {\partial \mathscr {K}}{\partial x _ {j}}\right) (x) \\ = \int_ {R ^ {n}} f (t) \left[ \frac {\partial \mathcal {K}}{\partial x _ {j}} (x - t + \xi) - \frac {\partial \mathcal {K}}{\partial x _ {j}} (x - t) \right] d t, \tag {1.17} \\ \end{array}
$$

其中 $\xi=(0,\cdots,0,\xi_{j},0,\cdots,0)$ ， $\xi_{j}$ 是 0 到 $h_{j}$ 之间的某个值。由于 $K\in C_{0}^{m}$ ，用证明(1.16)式中的 I 趋向于零同样的方法，可以证明当 h→0 时, (1.17)式右端的积分收敛到零. 这表明 $\frac{\partial}{\partial x_j} (f*\mathcal{K})(x)$ 存在并且等于 $\left(f*\frac{\partial\mathcal{K}}{\partial x_j}\right)(x)$ , 又由第一部分的证明可知它连续. 由此证得定理对于 $m = 1$ 的情形成立. 对于 $m \geqslant 2$ , 只要重复使用上述证明便可得到.

推论 1.6 设 $f \in L^{p}(\mathbb{R}^{n})$ , $1 \leqslant p \leqslant \infty$ , 及 $K \in C_{0}^{\infty}$ , 则 $f * K \in C^{\infty}$ .

注 在定理 1.5 中要求核函数 $\mathcal{H}$ 具有紧支集的条件可以适当放宽, 只要能保证 (1.16) 及 (1.17) 式右端分别趋向于 0 (当 $h \to 0$ 时), 则同样可以得到定理的结论. 例如: 设 $1 < p \leqslant \infty$ , $f \in L^{p}(\mathbb{R}^{n})$ , $\mathcal{H} \in C^{m}(\mathbb{R}^{n})$ , 并且 $D^{\alpha} \mathcal{H} \in L^{q}(\mathbb{R}^{n})$ , 其中 $\frac{1}{p} + \frac{1}{q} = 1, |\alpha| \leqslant m$ , 则可以证明定理的结论成立. 只需注意到根据平均连续性, 对 $1 \leqslant q < \infty$ , 有

$$
\left(\int_ {\mathbb {R} ^ {n}} \left| D ^ {a} \mathcal {K} (t + h) - D ^ {a} \mathcal {K} (t) \right| ^ {q} \mathrm{d} t\right) ^ {1 / q} \rightarrow 0 \quad (h \rightarrow 0),
$$

如果设 $p = 1, f \in L^{1}(\mathbb{R}^{n}), \mathcal{K} \in C^{m}(\mathbb{R}^{n})$ ，那么还需添设其他条件方可得到定理的结论。例如：设 $\mathcal{K}$ 及其直到 $m$ 阶的各阶偏微商都一致连续，或设 $\mathcal{K}$ 有 $m + 1$ 阶偏微商且各阶偏微商都有界便可。

## § 1.3 恒等逼近

设给定一族核 $\{\mathcal{K}_{\varepsilon}\}_{\varepsilon >0}$ ，如果它使得按照某种意义（模收敛或点收敛）有 $f*\mathcal{K}_{\varepsilon}\rightarrow f$ （当 $\varepsilon \to 0$ )成立，就称它是恒等逼近(approximations of identity)或卷积单位.

设给定函数 $\mathcal{K}(x)$ . 我们考虑函数族

$$
\mathcal {K} _ {\varepsilon} (x) = \varepsilon^ {- n} \mathcal {K} \left(\frac {x}{\varepsilon}\right) = \varepsilon^ {- n} \mathcal {K} \left(\frac {x _ {1}}{\varepsilon}, \dots , \frac {x _ {n}}{\varepsilon}\right), \quad \varepsilon > 0. \tag {1.18}
$$

先研究这样的函数族的性质.例如,取

$$
\mathcal {K} (x) = \chi_ {B _ {1}} (x), \quad B _ {1} = \{x \in R ^ {n}: | x | <   1 \},
$$

即 $\mathcal{K}(x)$ 为单位球的特征函数，则

$$
\mathcal {K} _ {\varepsilon} (x) = \varepsilon^ {- n} \chi_ {\{| x | <   \varepsilon \}} (x) = \left\{ \begin{array}{l l} \frac {1}{\varepsilon^ {n}}, & | x | <   \varepsilon , \\ 0, & | x | \geqslant \varepsilon . \end{array} \right.
$$

可见 $\mathcal{K}_{\varepsilon}$ 的支集是半径为 $\varepsilon$ 的小球，当 $\varepsilon$ 越小，支集就越小，但 $\mathcal{K}_{\varepsilon}$ 的峰值 $\varepsilon^{-n}$ 却越大.

引理1.7 若 $\mathcal{K} \in L^{1}(R^{n})$ ，则有

(i) $\int_{R^n}\mathcal{K}_e\mathrm{d}x = \int_{R^n}\mathcal{K}\mathrm{d}x;$ (1.19)

(ii) 对任意确定的 $\delta > 0$ ,

$$
\lim _ {\varepsilon \rightarrow 0} \int_ {| x | > \delta} | \mathcal {K} _ {\varepsilon} | \mathrm{d} x = 0. \tag {1.20}
$$

证明 (i) 由变量替换 $y = x / \varepsilon$ 便可得到.

(ii) 固定 $\delta > 0$ ，令 $y = x / \varepsilon$ ，得到

$$
\int_ {| x | > \delta} \left| \mathcal {K} _ {\varepsilon} (x) \right| \mathrm{d} x = \varepsilon^ {- n} \int_ {| x | > \delta} \left| \mathcal {K} \left(\frac {x}{\varepsilon}\right) \right| \mathrm{d} x = \int_ {| y | > \delta / \varepsilon} \left| \mathcal {K} (y) \right| \mathrm{d} y.
$$

当 $\varepsilon \to 0$ 时， $\delta / \varepsilon \to +\infty$ ，因此上式右端趋向于零。

如果设 $\mathcal{K} \geqslant 0$ . (i) 中等式表明 $\mathcal{K}$ 和 $\mathcal{K}_{\varepsilon}$ 的图像下面的体积相同. 而(ii)中极限等式表明, 对于很小的 $\varepsilon, \mathcal{K}_{\varepsilon}$ 的图像下面的体积集中在原点的一个小邻域的上方.

下面将讨论对于满足适当条件的 $\mathcal{K}$ , 能使 $f * \mathcal{K}_{\varepsilon} \to f$ . 今后 $\mathcal{K}_{\varepsilon}$ 均由(1.18)式给定.

定理1.8 设 $\mathcal{K} \in L^{1}(R^{n})$ ，并且 $\int_{\mathbb{R}^n} \mathcal{K} \mathrm{d}x = 1$ .

(i) 若 $f \in L^{p}(\mathbb{R}^{n}), 1 \leqslant p < \infty$ ，则有

$$
\lim _ {\epsilon \to 0} \| f * \mathcal {K} _ {\epsilon} - f \| _ {p} = 0; \tag {1.21}
$$

(ii) 若 $f \in L^{\infty}(\mathbb{R}^{n})$ ，则在 $f$ 的连续点 $x$ 处，有

$$
\lim _ {\varepsilon \rightarrow 0} (f * \mathcal {K} _ {\varepsilon}) (x) = f (x). \tag {1.22}
$$

证明 记 $f_{\epsilon} = f * \mathcal{K}_{\epsilon}$ .

(i) 设 $f \in L^{p}, 1 \leqslant p < \infty$ ，用(1.19)式及定理条件得知

$$
f _ {\varepsilon} (x) - f (x) = \int_ {R ^ {n}} [ f (x - y) - f (x) ] \mathcal {K} _ {\varepsilon} (y) \mathrm{d} y.
$$

用广义 Minkowski 不等式推得

$$
\begin{array}{l} \| f _ {\varepsilon} - f \| _ {p} = \left\{\int_ {\mathbb {R} ^ {n}} \left| \int_ {\mathbb {R} ^ {n}} [ f (x - y) - f (x) ] \mathscr {K} _ {\varepsilon} (y) d y \right| ^ {p} d x \right\} ^ {1 / p} \\ \leqslant \int_ {\mathbb {R} ^ {n}} \left[ \int_ {\mathbb {R} ^ {n}} | f (x - y) - f (x) | ^ {p} \mathrm{d} x \right] ^ {1 / p} | \mathcal {K} _ {\epsilon} (y) | \mathrm{d} y \\ = \int_ {\mathbb {R} ^ {n}} \left[ \int_ {\mathbb {R} ^ {n}} | f (x - \varepsilon t) - f (x) | ^ {p} \mathrm{d} x \right] ^ {1 / p} | \mathcal {K} (t) | \mathrm{d} t. \tag {1.23} \\ \end{array}
$$

根据平均连续性,对每个 $t \in R^{n}$ ,有

$$
\lim _ {\varepsilon \rightarrow 0} \left[ \int_ {R ^ {n}} | f (x - \varepsilon t) - f (x) | ^ {p} \mathrm{d} x \right] ^ {1 / p} = 0,
$$

并且

$$
\left[ \int_ {\mathbb {R} ^ {n}} | f (x - \varepsilon t) - f (x) | ^ {p} \mathrm{d} x \right] ^ {1 / p} \leqslant 2 \| f \| _ {p},
$$

因此用控制收敛定理便推知(1.23)式右端的积分趋向于零(当 $\varepsilon \rightarrow 0$ 时)，从而(1.21)成立.

(11) 设 $f \in L^{n}(R^n)$ , $x$ 是 $f$ 的连续点, 我们有

$$
\begin{array}{l} \left| f _ {\varepsilon} (x) - f (x) \right| \leqslant \int_ {R ^ {n}} | f (x - y) - f (x) | \left| \mathcal {K} _ {\varepsilon} (y) \right| d y \\ = \int_ {\mathbb {R} ^ {n}} | f (x - \varepsilon t) - f (x) | | \mathcal {K} (t) | \mathrm{d} t. \tag {1.24} \\ \end{array}
$$

因为 $x$ 是 $f$ 的连续点，故对每个 $t \in \mathbb{R}^n$ ，有

$$
\lim _ {\varepsilon \rightarrow 0} | f (x - \varepsilon t) - f (x) | = 0,
$$

并且

$$
\left| f (x - \varepsilon t) - f (x) \right| \leqslant 2 \| f \| _ {\infty},
$$

于是由控制收敛定理推知(1.24)式右端趋向于零(当 $\varepsilon \rightarrow 0$ 时)，即(1.22)式成立.

下面讨论逐点收敛.

定理1.9 设 $\mathcal{K}(x) \in L(R^n)$ , 且

$$
\int_ {\mathbb {R} ^ {n}} \mathcal {K} (x) \mathrm{d} x = 1.
$$

令

$$
\psi (x) = \sup _ {| y | \geqslant | x |} | \mathcal {K} (y) | ^ {(1)},
$$

假设 $\psi \in L(R^n)$ . 若 $f \in L^p(R^n), 1 \leqslant p \leqslant \infty$ , 则在 $f$ 的Lebesgue点 $x$ 处, 有②

$$
\lim _ {\varepsilon \rightarrow 0} (f * \mathcal {K} _ {\varepsilon}) (x) = f (x). \tag {1.25}
$$

证明 注意到 $\psi(x)$ 是非负径向函数，即，若 $|x_1| = |x_2|$ ，则 $\psi(x_1) = \psi(x_2)$ ；并且 $\psi(x)$ 关于 $|x|$ 非增，即对于 $|x| = r$ ，记 $\psi_0(r) = \psi(x), \psi_0(r)$ 是 $r$ 的递减函数。可以证明

$$
r ^ {n} \psi_ {0} (r) \rightarrow 0 \quad (\text { 当 } r \rightarrow 0 \text { 或 } r \rightarrow \infty).
$$

这是因为：若记单位球面为 $\sum_{n-1} = \{x' \in R^n : |x'| = 1\}$ ，它的面积为 $\omega_{n-1}$ ，对于 $r > 0$ 我们有

$$
\begin{array}{l} \int_ {\frac {r}{2} <   | x | <   r} \psi (x) \mathrm{d} x = \int_ {\frac {r}{2}} ^ {r} \psi_ {0} (\rho) \rho^ {n - 1} \mathrm{d} \rho \int_ {\sum_ {n - 1}} \mathrm{d} x ^ {\prime} \\ \geqslant \omega_ {n - 1} \psi_ {0} (r) r ^ {n} \cdot \frac {1}{n} (1 - 2 ^ {- n}). \\ \end{array}
$$

当 $r \to 0$ 或 $r \to \infty$ 时，上述不等式的左端趋向于零，从而推知 $r^n \psi_0(r)$ 趋向于0.由此易得知，存在常数 $M$ ，使

$$
r ^ {n} \psi_ {0} (r) \leqslant M, \quad r \in (0, \infty).
$$

现在任意取定 $f$ 的一个Lebesgue点 $\pmb{x}$ ，则对任给 $\delta >0$ ，可找

到 $\eta > 0$ ，使得当 $0 < r \leqslant \eta$ 时，有

$$
r ^ {- n} \int_ {| y | \leqslant t} | f (x - y) - f (x) | \mathrm{d} y <   \delta .
$$

上式左端可按球极坐标改写为

$$
r ^ {- n} \int_ {0} ^ {r} \rho^ {n - 1} \mathrm{d} \rho \int_ {\sum_ {n = 1}} | f (x - \rho y ^ {\prime}) - f (x) | \mathrm{d} y ^ {\prime}.
$$

若记

$$
g (\rho) = \int_ {\sum_ {n - 1}} | f (x - \rho y ^ {\prime}) - f (x) | d y ^ {\prime},
$$

$$
G (r) = \int_ {0} ^ {r} g (\rho) \rho^ {n - 1} \mathrm{d} \rho ,
$$

由前面所述便知当 $0 < r \leqslant \eta$ 时， $r^{-n} G(r) < \delta$ . 我们有

$$
\begin{array}{l} (f * \mathcal {K} _ {\varepsilon}) (x) - f (x) \\ = \int_ {R ^ {n}} [ f (x - y) - f (x) ] \mathscr {K} _ {\varepsilon} (y) d y \\ = \int_ {| y | <   \eta} [ f (x - y) - f (x) ] \mathscr {K} _ {\epsilon} (y) d y \\ + \int_ {| y | \geqslant \eta} [ f (x - y) - f (x) ] \mathcal {K} _ {\varepsilon} (y) d y \\ = I _ {1} + I _ {2}. \\ \end{array}
$$

先估计 $I_{1}$

$$
\begin{array}{l} \left| I _ {1} \right| \leqslant \int_ {| y | <   \eta} | f (x - y) - f (x) | \varepsilon^ {- n} \psi \left(\frac {y}{\varepsilon}\right) d y \\ = \int_ {0} ^ {\eta} r ^ {n - 1} g (r) \varepsilon^ {- n} \psi_ {0} \left(\frac {r}{\varepsilon}\right) d r \\ = G (r) \varepsilon^ {- n} \psi_ {0} \left(\frac {r}{\varepsilon}\right) \Big | _ {0} ^ {\eta} - \int_ {0} ^ {\eta} G (r) \varepsilon^ {- n} d \left(\psi_ {0} \left(\frac {r}{\varepsilon}\right)\right) \\ = \left[ r ^ {- n} G (r) \right] \left(\frac {r}{\varepsilon}\right) ^ {n} \psi_ {0} \left(\frac {r}{\varepsilon}\right) \Bigg | _ {0} ^ {\eta} - \int_ {0} ^ {\eta} G (r) \varepsilon^ {- n} d \left(\psi_ {0} \left(\frac {r}{\varepsilon}\right)\right) \\ = J _ {1} + J _ {2}. \\ \end{array}
$$

根据前面的估计式得

$$
J _ {1} \leqslant M \delta ,
$$

注意到 $\psi_{0}(r)$ 是减函数, 可得

$$
\begin{array}{l} J _ {2} = - \int_ {0} ^ {\eta} r ^ {- n} G (r) \left(\frac {r}{\varepsilon}\right) ^ {n} d \left(\psi_ {0} \left(\frac {r}{\varepsilon}\right)\right) \\ \leqslant \delta \left[ - \int_ {0} ^ {\infty} \left(\frac {r}{\varepsilon}\right) ^ {n} d \left(\psi_ {0} \left(\frac {r}{\varepsilon}\right)\right) \right] = B \delta , \\ \end{array}
$$

其中

$$
\begin{array}{l} B = - \left(\frac {r}{\varepsilon}\right) ^ {n} \psi_ {0} \left(\frac {r}{\varepsilon}\right) \Big | _ {0} ^ {\infty} + \int_ {0} ^ {\infty} \psi_ {0} \left(\frac {r}{\varepsilon}\right) n \left(\frac {r}{\varepsilon}\right) ^ {n - 1} d \left(\frac {r}{\varepsilon}\right) \\ = n \int_ {0} ^ {\infty} \psi_ {0} (\rho) \rho^ {n - 1} d \rho = \frac {n}{\omega_ {n - 1}} \int_ {R ^ {n}} \psi (x) d x. \\ \end{array}
$$

因此 $|I_1|\leqslant (M + B)\delta .$

下面估计 $I_{2}$ . 令 $\psi_{\varepsilon}(y) = \varepsilon^{-n}\psi \left(\frac{y}{\varepsilon}\right)$ . 设 $1 < p < \infty, \frac{1}{p} + \frac{1}{q} = 1$ ,

$$
\begin{array}{l} \left| I _ {2} \right| \leqslant \int_ {| y | \geqslant \eta} | f (x - y) | \psi_ {\varepsilon} (y) d y + | f (x) | \int_ {| y | \geqslant \eta} \psi_ {\varepsilon} (y) d y \\ \leqslant \| f \| _ {p} \left(\int_ {| y | \geqslant \eta} \psi_ {\varepsilon} (y) ^ {q} \mathrm{d} y\right) ^ {1 / q} + | f (x) | \int_ {| y | \geqslant \eta / \varepsilon} \psi (y) \mathrm{d} y. \\ \end{array}
$$

显然当 $\eta$ 取定， $\epsilon \to 0$ 时，上式右端第二项趋向于零，而第一项由于 $\psi_0(r)$ 的递减性有

$$
\begin{array}{l} \int_ {| y | \geqslant \eta} \psi_ {\varepsilon} (y) ^ {q} \mathrm{d} y = \int_ {| y | \geqslant \eta} \psi_ {\varepsilon} (y) \psi_ {\varepsilon} (y) ^ {q - 1} \mathrm{d} y \\ \leqslant \left[ \varepsilon^ {- n} \psi_ {0} \left(\frac {\eta}{\varepsilon}\right) \right] ^ {q - 1} \int_ {| y | \geqslant \eta} \psi_ {\varepsilon} (y) d y \\ = \left[ \eta^ {- n} \left(\frac {\eta}{\varepsilon}\right) ^ {n} \psi_ {0} \left(\frac {\eta}{\varepsilon}\right)\right] ^ {q - 1} \int_ {| y | \geqslant \eta / \epsilon} \psi (y) d y \rightarrow 0 \quad (\varepsilon \rightarrow 0). \\ \end{array}
$$

类似地，若 $p = 1$ ，有

$$
\left| I _ {2} \right| \leqslant \| f \| _ {1} \left[ \eta^ {- n} \left(\frac {\eta}{\varepsilon}\right) ^ {n} \psi_ {0} \left(\frac {\eta}{\varepsilon}\right) \right] + | f (x) | \int_ {| y | \geqslant \eta / \epsilon} \psi (y) d y.
$$

若 $p = \infty$ ，有

$$
\left| I _ {2} \right| \leqslant 2 \| f \| _ {\infty} \int_ {| y | \geqslant \eta / \varepsilon} \psi (y) d y.
$$

于是，均可得到：当 $\varepsilon \rightarrow 0(\eta$ 取定)时，有 $I_{2} \rightarrow 0$ ，再由 $\delta$ 的任意性，便得到(1.25).

推论1.10 设 $\mathcal{K} \in L(R^n)$ , 且 $\int_{R^n} \mathcal{K} \mathrm{d}x = 1$ . 又设存在一个非负径向函数 $\varphi(x) \in L(R^n)$ , 当 $|x| = r$ , 记 $\varphi_0(r) = \varphi(x)$ , 使得 $\varphi_0(r)$ 是 $r$ 的递减函数, 并且

$$
\left| \mathcal {K} (x) \right| \leqslant \varphi (x), \quad \text { a.e. } x \in R ^ {n},
$$

若 $f \in L^{p}(\mathbb{R}^{n}), 1 \leqslant p \leqslant \infty$ ，则定理1.9的结论成立。

显然, 在定理 1.9 的证明中把 $\psi(x)$ 换成本推论中的 $\varphi(x)$ , 所有的论证都成立.

下面介绍 Fourier 分析中一些常用的核.

例 1 Fejer 核. 令

$$
\mathcal {K} (x) = \frac {1}{\pi} \left(\frac {\sin x}{x}\right) ^ {2}, \quad x \in R.
$$

显然 $\mathcal{K} \in L^{1}(\pmb{R})$ ，且

$$
\begin{array}{l} \int_ {R ^ {1}} \mathcal {K} \mathrm{d} x = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \left(\frac {\sin x}{x}\right) ^ {2} \mathrm{d} x = \frac {2}{\pi} \int_ {0} ^ {\infty} \frac {\sin^ {2} x}{x ^ {2}} \mathrm{d} x \\ = \frac {2}{\pi} \left\{- \frac {\sin^ {2} x}{x} \Big | _ {0} ^ {\infty} + \int_ {0} ^ {\infty} \frac {2 \sin x \cos x}{x} d x \right\} \\ = \frac {2}{\pi} \int_ {0} ^ {\infty} \frac {\sin t}{t} d t = \frac {2}{\pi} \cdot \frac {\pi}{2} = 1. \\ \end{array}
$$

又因为有

$$
\frac {1}{\pi} \left(\frac {\sin x}{x}\right) ^ {2} \leqslant \frac {1}{\pi} \frac {2}{1 + x ^ {2}}, \quad x \in R.
$$

取 $\varphi(x) = \frac{1}{\pi} \frac{2}{1 + x^2} \in L(R)$ , 易见它满足推论 1.10 的条件, 因此对于 $f \in L^p (1 \leqslant p \leqslant \infty)$ 有定理 1.8 及定理 1.9 的结论成立.

例 2 Poisson 核. 令

$$
P (x) = \frac {1}{\pi} \frac {1}{1 + x ^ {2}}, \quad x \in R.
$$

易见 $P(x)\in L^{1}(\pmb {R})$ ，以及

$$
\frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {1}{1 + x ^ {2}} d x = \left. \frac {1}{\pi} \arctan x \right| _ {- \infty} ^ {\infty} = 1.
$$

我们有

$$
P _ {\epsilon} (x) = \frac {1}{\varepsilon} P \left(\frac {x}{\varepsilon}\right) = \frac {1}{\pi} \frac {\varepsilon}{\varepsilon^ {2} + x ^ {2}}.
$$

用 $y$ 代替 $\varepsilon$ , 可得 Poisson 核 $P_y(x), f$ 的 Poisson 积分为

$$
u (x, y) = \left(f * P _ {y}\right) (x) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) \frac {y}{(x - t) ^ {2} + y ^ {2}} d t.
$$

函数 $u(x,y)$ 定义在上半平面

$$
R _ {+} ^ {2} = \{(x, y) | x \in (- \infty , \infty), y > 0 \},
$$

注意到：若 $z = x + \mathrm{i}y$ ，函数 $\left(-\frac{1}{z}\right)$ 在上半平面解析，因此它的虚部 $\frac{y}{x^2 + y^2}$ 是上半平面的调和函数.从而得知 $P_{y}(x)$ 满足Laplace方程

$$
\left(\frac {\partial^ {2}}{\partial x ^ {2}} + \frac {\partial^ {2}}{\partial y ^ {2}}\right) P _ {y} (x) = 0 \quad (\text {当} y > 0).
$$

若 $f \in L^p, 1 \leqslant p \leqslant \infty$ ，则可推得

$$
\begin{array}{l} \left(\frac {\partial^ {2}}{\partial x ^ {2}} + \frac {\partial^ {2}}{\partial y ^ {2}}\right) u (x, y) = \int_ {- \infty} ^ {\infty} f (t) \left(\frac {\partial^ {2}}{\partial x ^ {2}} + \frac {\partial^ {2}}{\partial y ^ {2}}\right) p _ {y} (x - t) d t \\ = 0 \quad (y > 0) \\ \end{array}
$$

(参看定理 1.5 及其后的注), 即 $u(x, y)$ 是上半平面的调和函数. 若 $f(x)$ 还在 $(-\infty, \infty)$ 上连续, 则根据定理 1.9 推知

$$
\lim _ {y \rightarrow 0} u (x, y) = f (x).
$$

因此 $u(x,y)$ 是Laplace方程在上半平面的Dirichlet问题的解.

例 3 Gauss-Weierstrass 核. 令

$$
\mathcal {K} (x) = \sqrt {\pi} \mathrm{e} ^ {- \pi^ {2} x ^ {2}}.
$$

显然 $\mathcal{K}(x) \in L^1$ ，并且

$$
\sqrt {\pi} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- \pi^ {2} x ^ {2}} \mathrm{d} x = \frac {1}{\sqrt {\pi}} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- y ^ {2}} \mathrm{d} y = 1.
$$

我们有 $\mathcal{K}_{\epsilon}(x) = (\sqrt{\pi} / \varepsilon)\mathrm{e}^{-\pi^2 x^2 /\varepsilon^2}$ . 取 $\varepsilon = 2\pi$ $\sqrt{t}$ ( $t > 0$ ), 得到

Gauss-Weierstrass 核

$$
w (x, t) = (4 \pi t) ^ {- \frac {1}{2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 t}}.
$$

可验证 $w(x,t)$ 满足热传导方程

$$
\frac {\partial^ {2} w}{\partial x ^ {2}} = \frac {\partial w}{\partial t}.
$$

令 $G(x,t) = \int_{-\infty}^{\infty}f(y)w(x - y,t)\mathrm{d}y.$

若 $f$ 满足例2中所述同样的条件，则类似可得

$$
\frac {\partial^ {2} G}{\partial x ^ {2}} = \frac {\partial G}{\partial t}, \tag {1.26}
$$

$$
\lim _ {t \rightarrow 0} G (x, t) = f (x),
$$

这表明 $G(x,t)$ 是齐次热传导方程(1.26)的Cauchy问题的解.

推论1.11 设 $1 \leqslant p < \infty$ ，则 $C_0^\infty(\mathbb{R}^n)$ 在 $L^p(\mathbb{R}^n)$ 中稠密.

证明 这里的 $C_0^\infty (\pmb {R})$ 是指紧支集无穷次可微的函数全体组成的集合.（函数 $f$ 的支集是使 $f(x)\neq 0$ 的全体点集的闭包，记为 $\operatorname {supp}(f)$ ).令

$$
\varphi (x) = \left\{ \begin{array}{l l} \mathrm{e} ^ {- \frac {1}{1 - | x | ^ {2}}}, & | x | <   1, \\ 0, & | x | \geqslant 1. \end{array} \right.
$$

可以证明 $\varphi \in C_0^\infty (\mathbb{R}^n)$ （习题5). 取 $a = 1 / \left(\int_{\mathbb{R}^n}\varphi (x)\mathrm{d}x\right)$ ，令 $\psi (x) = a\varphi (x)$ ，则 $\int_{\mathbb{R}^n}\psi (x)\mathrm{d}x = 1$ 。若 $f\in L^{p}(\mathbb{R}^{n})$ ，任给 $\delta >0$ ，可以取到紧支集函数 $g\in L^{p}(\mathbb{R}^{n})$ ，使得 $\| f - g\| _p\leqslant \delta /2$ 。取 $g_{\varepsilon} = g*\psi_{\varepsilon},\psi_{\varepsilon}(x) = \varepsilon^{-n}\psi \left(\frac{x}{\varepsilon}\right)$ ，则由推论1.6及习题2知 $g_{\varepsilon}\in C_0^\infty (\mathbb{R}^n)$ 。由定理1.8知 $\| g - g_{\varepsilon}\| _p\to 0(\varepsilon \to 0)$ 。取到 $\varepsilon_0 > 0$ ，使当 $0 < \varepsilon < \varepsilon_0$ 时，

$$
\| g - g _ {\epsilon} \| _ {p} <   \frac {\delta}{2}.
$$

用 Minkowski 不等式便得到当 $0 < \varepsilon < \varepsilon_{0}$ 时，

$$
\| f - g _ {\varepsilon} \| _ {p} \leqslant \| f - g \| _ {p} + \| g - g _ {\varepsilon} \| _ {p}
$$

$$
<   \frac {\delta}{2} + \frac {\delta}{2} = \delta ,
$$

即得本推论的结论.

## § 1.4 周期函数的卷积与恒等逼近

若 $f(x), g(x)$ 是两个以 $2\pi$ 为周期的可积函数，它们的卷积为

$$
(f * g) (x) = \int_ {- \pi} ^ {\pi} f (x - y) g (y) \mathrm{d} y,
$$

就有 $(f*g)(x) = (g*f)(x)$ . 显然 $(f*g)(x)$ 也是以 $2\pi$ 为周期的函数. 有类似的 Young 不等式成立.

定理 1.4' 设 $1 \leqslant p \leqslant \infty, 1 \leqslant q \leqslant \infty$ ，及 $\frac{1}{p} + \frac{1}{q} \geqslant 1$ ，如果 f 与 g 以 $2\pi$ 为周期， $f \in L^{p}(T), g \in L^{q}(T)$ ，则 $f * g \in L^{r}(T)$ ，且

$$
\| f * g \|, \leqslant \| f \| _ {p} \| g \| _ {q},
$$

其中 $\frac{1}{r} = \frac{1}{p} +\frac{1}{q} -1,\| f\| _p = \left\{\int_{-\pi}^{\pi}\mid f(x)\mid^{p}\mathrm{d}x\right\}^{1 / p}.$

设 $\{\mathcal{H}_r(x)\}$ 是一族以 $2\pi$ 为周期的核，如果按某种收敛（模收敛或点收敛）意义有

$$
\lim _ {r \rightarrow r _ {0}} (f * \mathcal {K} _ {r}) (x) = f (x)
$$

成立 $(r_0$ 是有限数或 $\infty)$ ，就称 $\{\mathcal{K}_r\}$ 是恒等逼近核.

定理1.12 设周期核 $\{\mathcal{K}_r(x)\}$ 满足下列条件.

$(a_{1})\int_{-\pi}^{\pi}\mathcal{K},(x)\mathrm{d}x = 1;$

(b1) $\int_{-\pi}^{\pi}|\mathcal{K}_r(x)|\mathrm{d}x\leqslant C;$

$(c_{1})$ 对任意取定的 $\delta\in(0,\pi]$ ，有

$$
\lim _ {r \rightarrow r _ {0}} \int_ {\delta \leqslant | x | \leqslant \pi} | \mathcal {K} _ {r} (x) | \mathrm{d} x = 0.
$$

若 $f \in L^{p}(\pmb{T}), 1 \leqslant p < \infty$ ，则

$$
\| f * \mathcal {K} _ {r} - f \| _ {p} \rightarrow 0 (r \rightarrow r _ {0}).
$$

证明 用条件 $(\mathbf{a}_1)$ 可得

$$
\begin{array}{l} (f * \mathscr {K} _ {r}) (x) - f (x) \\ = \int_ {- \pi} ^ {\pi} \mathcal {K} _ {r} (t) [ f (x - t) - f (x) ] d t \\ = \int_ {| t | <   \delta} \mathscr {K} _ {r} (t) [ f (x - t) - f (x) ] d t \\ + \int_ {\delta \leqslant | t | \leqslant \pi} \mathcal {K} _ {r} (t) [ f (x - t) - f (x) ] d t \\ = I _ {1} (x) + I _ {2} (x). \tag {1.27} \\ \end{array}
$$

因为 $f \in L^{p}(T)$ , 根据平均连续性, 对任给 $\varepsilon > 0$ , 可以取到 $\delta > 0$ , 使当 $|t| < \delta$ 时

$$
\left\{\int_ {- \pi} ^ {\pi} | f (x - t) - f (x) | ^ {p} \mathrm{d} x \right\} ^ {1 / p} <   \varepsilon .
$$

取定此 $\delta$ 为(1.27)式中的 $\delta$ . 用广义 Minkowski 不等式推得

$$
\begin{array}{l} \left\| I _ {1} \right\| _ {p} = \left. \left\{\int_ {- \pi} ^ {\pi} \right| \int_ {| t | <   \delta} \mathscr {K} _ {r} (t) [ f (x - t) - f (x) ] d t \right| ^ {p} d x \Bigg \} ^ {1 / p} \\ \leqslant \int_ {| t | <   \delta} \left| \mathscr {K} _ {r} (t) \right| \left\{\int_ {- \pi} ^ {\pi} | f (x - t) - f (x) | ^ {p} d x \right\} ^ {1 / p} d t \\ \leqslant C \varepsilon . \\ \end{array}
$$

类似地可推得

$$
\begin{array}{l} \left\| I _ {2} \right\| _ {p} \leqslant \int_ {\delta \leqslant | t | \leqslant \pi} \left| \mathscr {K} _ {r} (t) \right| \left\{\int_ {- \pi} ^ {\pi} | f (x - t) - f (x) | ^ {p} d x \right\} ^ {1 / p} d t \\ \leqslant 2 \| f \| _ {p} \int_ {\delta \leqslant | t | \leqslant \pi} | \mathcal {K} _ {r} (t) | \mathrm{d} t, \\ \end{array}
$$

由条件 $(c_{1})$ 可知上式右端趋向于零，而由Minkowski不等式得

$$
\| f * \mathscr {K}, - f \| _ {p} \leqslant \| I _ {1} \| _ {p} + \| I _ {2} \| _ {p}.
$$

因此由以上讨论便得定理结论.

例1 Fejer核

$$
K _ {n} (x) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} D _ {k} (x) = \frac {1}{2 \pi (n + 1)} \left[ \frac {\sin \frac {(n + 1) x}{2}}{\sin \frac {x}{2}} \right] ^ {2}.
$$

参见 §2.5 中所指出, $K_{n}(x)$ 满足性质(a), (b), (c)及 $(c')$ , 由此推知 $K_{n}(x)$ 满足 $(a_{1})$ , $(b_{1})$ 以及 $(c_{1})$ .

例2 Poisson核

$$
\begin{array}{l} P (r, t) = P _ {r} (t) = \frac {1}{2} + \sum_ {n = 1} ^ {\infty} r ^ {n} \cos n t \\ = \frac {1 - r ^ {2}}{2 (1 - 2 r \cos t + r ^ {2})}. \\ \end{array}
$$

参见 §2.6 中所述, $\frac{1}{\pi} P(r,t)$ 满足性质 (a), (b), (c), 从而推知它满足本节的条件 $(\mathbf{a}_1), (\mathbf{b}_1)$ 及 $(\mathbf{c}_1)$ .

## § 1.5 函数的正则化 $^{①}$

设函数 $\psi$ 满足下述条件：

$$
\begin{array}{l} \psi (x) \geqslant 0, \quad x \in R ^ {n}, \\ \psi \in C _ {0} ^ {\infty} \left(\boldsymbol {R} ^ {n}\right), \quad \operatorname{supp} (\psi) \subset \overline {{B (0 , 1)}}, \\ \int_ {R ^ {n}} \psi (x) \mathrm{d} x = 1. \tag {1.28} \\ \end{array}
$$

推论1.11中曾给出这样的函数的例子.

我们用 $L_{\mathrm{loc}}^{1}(\mathbb{R}^{n})$ 表示 $\mathbb{R}^n$ 上所有局部可积函数组成的空间. 函数 $f$ 局部可积是指 $f$ 在 $\mathbb{R}^n$ 中每个紧集上可积. 记

$$
\psi_ {\varepsilon} (x) = \varepsilon^ {- n} \psi \left(\frac {x}{\varepsilon}\right).
$$

设 $f \in L_{\mathrm{loc}}^{\perp}(\mathbb{R}^{n})$ ，且函数 $\psi$ 满足本节初所述条件。对于 $\varepsilon > 0$ ，由公式

$$
\begin{array}{l} f _ {\varepsilon} (x) = \left(f * \psi_ {\varepsilon}\right) (x) = \int_ {R ^ {n}} f (x - y) \psi_ {\varepsilon} (y) d y \\ = \int_ {R ^ {n}} f (x - \varepsilon y) \psi (y) d y \\ \end{array}
$$

定义的函数族 $\{f_{\epsilon}\}$ 称为 $f$ 的正则化.

命题1.13 设 $f \in L_{\mathrm{loc}}^{1}(\mathbb{R}^{n}), f_{\epsilon} = f * \psi_{\epsilon}$ , 则

(i) $f_{\varepsilon} \in C^{\infty}(\mathbb{R}^{n})$ ;

(ii) 若 $f$ 具有紧支集, $F = \operatorname{supp}(f)$ , 则

$$
f _ {\varepsilon} (x) = 0, \quad \text {当} x \overline {{{\in}}} F _ {\varepsilon},
$$

其中

$$
F _ {\varepsilon} = \bigcup_ {x \in F} \overline {{{B (x , \varepsilon)}}}, \quad B (x, \varepsilon) = \{y: | y - x | <   \varepsilon \},
$$

亦即 $\operatorname{supp}(f_{\varepsilon}) \subset F_{\varepsilon}$ ;

(111) 若在 $x_0$ 的邻域 $B(x_0, \varepsilon)$ 中 $f(x) = C$ , 则 $f_{\varepsilon}(x_0) = C$ .

证明 (1)的证明同定理 1.5 及其推论.

由于 $\operatorname{supp}(\psi) \subset \overline{B(0,1)}$ ，我们有

$$
f _ {\varepsilon} (x) = \int_ {| y | \leqslant 1} f (x - \varepsilon y) \psi (y) \mathrm{d} y.
$$

因此可知 $f_{\epsilon}(x_0)$ 的值只与 $f(x)$ 在 $\overline{B(x_0,\epsilon)}$ 上的值有关. 由此推得 (ii) 与 (iii).

定理 1.14 设 f 具有紧支集.

(1) 若 $f \in L^{p}(\mathbb{R}^{n}), 1 \leqslant p < \infty$ , 则 $f_{\epsilon} = f * \psi_{\epsilon} \in C_{0}^{\infty}(\mathbb{R}^{n})$ , 且

$$
\lim _ {\varepsilon \rightarrow 0} \| f - f _ {\varepsilon} \| _ {p} = 0;
$$

(11) 若 $f$ 在 $\pmb{R}^n$ 上连续, 则 $f_{\varepsilon} \in C_0^\infty(\pmb{R}^n)$ , 且

$$
\lim _ {\varepsilon \rightarrow 0} f _ {\varepsilon} (x) = f (x)
$$

在 $R^{n}$ 上一致成立，即 $f_{\varepsilon}$ 在 $R^{n}$ 上一致收敛于 f；

(iii) 若 $f \in C^{m}(\mathbb{R}^{n})(m < \infty)$ , 则对于多重指标 $\alpha, |\alpha| \leqslant m$ , $D^{a}f_{\varepsilon}(x)$ 在 $\mathbb{R}^{n}$ 上一致收敛于 $D^{a}f(x)$ (若 $f \in C^{\infty}(\mathbb{R}^{n})$ , 则以上结论对于任意多重指标 $\alpha$ 成立).

证明 (1) 由定理 1.8 及推论 1.11 可得到结论.

(11) 由命题 1.13 便知 $f_{\epsilon} \in C_0^{\infty}(\mathbb{R}^n)$ , 因为

$$
f _ {\varepsilon} (x) - f (x) = \int_ {| y | \leqslant 1} [ f (x - \varepsilon y) - f (x) ] \psi (y) \mathrm{d} y,
$$

按假定 $f$ 连续且具有紧支集, 便知 $f$ 在 $\mathbb{R}^n$ 上一致连续, 所以由上式便可推得(ii)的结论.

(iii) 证明省略.

推论1.15 设开集 $\Omega \subset R^n$ ，紧集 $F \subset \Omega$ ，则存在函数 $g \in C_0^\infty(R^n)$ ，使得

$$
\operatorname{supp} (g) \subset \Omega , \quad 0 \leqslant g (x) \leqslant 1 \quad (x \in R ^ {n}),
$$

$$
g (x) = 1 \quad (x \in F).
$$

证明 若 $\Omega$ 的补集 $\Omega^c$ 非空，令

$$
d = d (F, \Omega^ {c})
$$

是 $F$ 到 $\Omega^c$ 的距离；若 $\Omega^c$ 是空集，令 $d = \infty$ .

取 $\varepsilon_0, \varepsilon_1$ ，使得 $0 < \varepsilon_1 < \varepsilon_0$ ，且 $\varepsilon_0 + \varepsilon_1 < d$ . 作函数

$$
f (x) = \left\{ \begin{array}{l l} 1, & x \in F _ {\varepsilon_ {0}}, \\ 0, & x \overline {{\in}} F _ {\varepsilon_ {0}}, \end{array} \right.
$$

其中 $F_{\varepsilon_0} = \bigcup_{x\in F}\overline{B(x,\varepsilon_0)}$ .根据命题1.13可知 $f$ 的正则化 $f_{\varepsilon_1} = f*$ $\psi_{\varepsilon_1}$ 在 $F_{\varepsilon_0 + \varepsilon_1}$ 之外等于零，且 $f_{\varepsilon_1}\in C^\infty (\mathbb{R}^n)$ .又因为在 $F_{\varepsilon_0}$ 上 $f(x) = 1$ ，所以由命题1.13的(iii)可知在 $F_{\varepsilon_0 - \varepsilon_1}$ 上 $f_{\varepsilon_1}(x) = 1.$ 注意到 $F_{\varepsilon_0 + \varepsilon_1}$ $\subset \Omega$ 以及 $F\subset F_{\varepsilon_0 - \varepsilon_1}$ .再由 $f$ 非负及 $\psi$ 满足(1.28)，易得

$$
0 \leqslant f _ {\varepsilon_ {1}} (x) = \int_ {| y | \leqslant 1} f (x - \varepsilon_ {1} y) \psi (y) d y
$$

$$
\leqslant \int_ {| y | \leqslant 1} \psi (y) \mathrm{d} y = 1, \quad x \in R ^ {n}.
$$

于是取 $g = f_{\epsilon_1}$ 便满足要求.

## 习题

1. 设 $f \in C(T)$ , 若 $f(x)$ 的 Fourier 级数一致收敛, 则该级数的和为 $f(x)$ .  
2. 设 $f$ 与 $\mathcal{K}$ 分别具有紧支集 $S_{1}$ 与 $S_{2}$ , 试证明: $f * \mathcal{K}$ 也具有紧支集, 并且它的支集

$$
\operatorname{supp} (f * \mathscr {K}) \subset S _ {1} + S _ {2},
$$

其中 $S_{1} + S_{2} = \{x = x_{1} + x_{2}:x_{1}\in S_{1},x_{2}\in S_{2}\} .$

3. 若 $f \in L^{p}(\mathbb{R}^{n}), \mathcal{K} \in L^{q}(\mathbb{R}^{n}), 1 \leqslant p \leqslant \infty, \frac{1}{p} + \frac{1}{q} = 1$ ，证明： $f * \mathcal{K}$ 在 $\mathbb{R}^{n}$ 上有界并且连续。

4. (1) 设函数 $h(x)$ 定义为

$$
h (x) = \left\{ \begin{array}{l l} \mathrm{e} ^ {- 1 / x ^ {2}}, & x > 0, \\ 0, & x \leqslant 0, \end{array} \right.
$$

证明 $h(x)$ 属于 $C^\infty (\pmb {R})$

(2) 设函数 $g(x) = h(x - a)h(b - x), a < b$ ，证明 $g(x)$ 属于 $C^\infty(R)$ ，并且支集为 $[a, b]$ .  
(3) 构造  $C\_{0}^{\infty}(\mathbb{R}^{n})$中的一个函数, 使得它的支集是一个区间$I = {x = (x\_{1}, x\_{2}, \cdots, x\_{n}): a\_{i} \leqslant x\_{i} \leqslant b\_{i}, i = 1, 2, \cdots, n}$.

5. 设函数

$$
\psi (x) = \left\{ \begin{array}{l l} \mathrm{e} ^ {- \frac {1}{1 - | x | ^ {2}}}, & | x | <   1, \\ 0, & | x | \geqslant 1, \end{array} \right.
$$

证明： $\psi\in C_{0}^{\infty}(R^{n})$ .

6. 设

$$
f (x) = \left\{ \begin{array}{l l} 1, & - 1 \leqslant x \leqslant 1, \\ 0, & \text {其他}, \end{array} \right.
$$

求 $(f*f)(x),(f*f*f)(x).$

7. 对于 $s, t \geqslant 0$ ，设 $\mathcal{K}(s, t)$ 满足 $\mathcal{K} \geqslant 0$ ，并且 $\mathcal{K}(\lambda s, \lambda t) = \lambda^{-1}\mathcal{K}(s, t)$ ，对一切 $\lambda > 0$ ，还假定对某个 $p, 1 \leqslant p \leqslant \infty$ ，有

$$
\int_ {0} ^ {\infty} t ^ {- 1 / p} \mathcal {K} (1, t) \mathrm{d} t = \gamma <   + \infty
$$

(例如, 对 $1 < p < \infty$ , $\mathcal{K}(s, t) = 1 / (s + t)$ 满足上述条件), 若令

$$
(T f) (s) = \int_ {0} ^ {\infty} f (t) \mathcal {K} (s, t) \mathrm{d} t \quad (s \geqslant 0),
$$

试证明 $\| Tf\| _p\leqslant \gamma \| f\| _p,$

其中 $\| f\| _p = \left(\int_0^\infty |f(x)|^p\mathrm{d}x\right)^{1 / p}$

8. 设 $\mathcal{K}(x) \in L(\mathbb{R})$ , $\int_{\mathbb{R}^1} \mathcal{K}(x) \mathrm{d}x = 1$ , 并且当 $|x| \to \infty$ 时, $\mathcal{K}(x) = o(|x|^{-1})$ . 若 $f \in L^1(\mathbb{R}^1)$ , 试证明: 在 $f$ 的每个连续点 $x_0$ 处, 有

$$
\lim _ {\varepsilon \rightarrow 0} (f * \mathcal {K} _ {\varepsilon}) (x _ {0}) = f (x _ {0})
$$

成立，其中 $\mathcal{K}_{\varepsilon}(x) = \varepsilon^{-1}\mathcal{K}(x / \varepsilon),\varepsilon >0.$

9. 设 $\mathcal{K}(x) \in L(R)$ , 及 $\int_{R} \mathcal{K}(x) \mathrm{d}x = a$ , 若 $f \in L^{p}(R)$ , $1 \leqslant p < \infty$ , 证明:

$$
\lim _ {\epsilon \rightarrow 0} \| f * \mathcal {K} _ {\epsilon} - a f \| _ {p} = 0.
$$

10. 设 $D$ 是 $\mathbb{R}^n$ 中的一个紧集, 对于 $\varepsilon > 0$ , 令

$$
D _ {\varepsilon} = \bigcup_ {x \in D} \overline {{{B (x , \varepsilon)}}},
$$

其中 $B(x,\varepsilon) = \{y\in R^n:|y - x| <   \varepsilon \}$ .设 $\chi (x)$ 是点集 $D_{2\varepsilon}$ 的特征函数（即， $\chi (x) = 1$ ，对 $x\in D_{2\varepsilon};\chi (x) = 0$ ，对 $x\overline{\in} D_{2\varepsilon})$ ，令

$$
\chi_ {\varepsilon} (x) = (\chi * \psi_ {\varepsilon}) (x) = \varepsilon^ {- n} \int_ {D _ {2 \varepsilon}} \psi \left(\frac {x - y}{\varepsilon}\right) d y,
$$

其中 $\psi$ 是一个非负函数，属于 $C_0^\infty (\mathbb{R}^n)$ ，它的支集包含在闭单位球 $\overline{B(0,1)}$ 中，且 $\int_{\mathbb{R}^n}\psi (x)\mathrm{d}x = 1.$ 试证明： $\chi_{\varepsilon}(x)$ 属于 $C_0^\infty (\mathbb{R}^n)$ ，在 $D_{\varepsilon}$ 上 $\chi_{\varepsilon}(x) = 1$ ，并且支集

$$
\operatorname{supp} \left(\chi_ {\varepsilon}\right) \subset D _ {3 \varepsilon}.
$$

11. 设 $G$ 与 $G_{1}$ 是 $\mathbb{R}^{n}$ 中的有界开子集，且 $\overline{G_1} \subset G$ . 试构造一个函数 $h \in C_0^\infty(\mathbb{R}^n)$ ，使得在 $G_{1}$ 上 $h(x)=1$ ，并且对 $G$ 以外的点 $x$ ， $h(x)=0$ .

12. 设给定连续的权函数 $\omega(x) \geqslant 1$ ，试证明： $C_0^\infty(R^n)$ 在 $L_{\omega}^{p}(R^{n})$ 中稠密，其中 $f \in L_{\omega}^{p}(R^{n})$ 的模为

$$
\| f \| _ {p} = \left\{\int_ {\mathbb {R} ^ {n}} | f (x) | ^ {p} \omega (x) \mathrm{d} x \right\} ^ {1 / p}.
$$

