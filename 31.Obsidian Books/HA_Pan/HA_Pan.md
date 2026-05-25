
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

# 第二章 Fourier 级数

本章将在Lebesgue积分理论的基础上进一步讲述Fourier级数的理论及其应用.

首先介绍Fourier系数的性质, 其中包括对于某些类型的函数估计其Fourier系数收敛于零的速度. 其次研究Fourier级数的中心问题: 对于以 $2\pi$ 为周期的可积函数 $f(x)$ , 讨论其Fourier级数在什么条件下收敛, 是否收敛到 $f(x)$ 等问题, 也就是Fourier级数的逐点收敛与发散的问题. 随后介绍在函数的间断点附近, 由于函数的Fourier级数不一致收敛而出现的Gibbs现象. 由前面的讨论可知, 函数的Fourier级数在某些点处可能是发散的, 为了研究它们能否在某种平均意义下收敛, 我们进一步讨论两种常用的求和法(算术平均求和法与Abel求和法). 然后讨论 $L^2$ 中函数的Fourier级数在 $L^2$ 模意义下的收敛性及Parseval等式等问题. 最后介绍Fourier级数的各种应用和例子.

## § 2.1 Fourier 系数的性质

先介绍Fourier系数的一些初等性质.

定理2.1 设 $f, g \in L^{1}(T)$ , 若

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k \tau}, \quad g (x) \sim \sum_ {k = - \infty} ^ {\infty} d _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

则

$$
(1) a f (x) + b g (x) \sim \sum_ {k = - \infty} ^ {\infty} (a c _ {k} + b d _ {k}) \mathrm{e} ^ {\mathrm{i} k x};
$$

(ii) $f(-x)\sim \sum_{k = -\infty}^{\infty}c_{-k}\mathrm{e}^{ikx};$

(iii) $\overline{f(x)}\sim \sum_{k = -\infty}^{\infty}\overline{c_{-k}}\mathrm{e}^{ikx};$

(iv) $f(x + h)\sim \sum_{k = -\infty}^{\infty}c_k\mathrm{e}^{ikh}\mathrm{e}^{ikx};$

(v) $\mathrm{e}^{\mathrm{i}nx}f(x)\sim \sum_{k = -\infty}^{\infty}c_{k - n}\mathrm{e}^{\mathrm{i}kx}$ （ $n$ 为整数）；

(v1) 对任意整数 $k$ , 有

$$
\left| c _ {k} \right| \leqslant \frac {1}{2 \pi} \| f \| _ {1}, \quad \| f \| _ {1} = \int_ {- \pi} ^ {\pi} | f (x) | \mathrm{d} x;
$$

(vii) 设 $f$ 在 $[- \pi, \pi]$ 上绝对连续，则

$$
f ^ {\prime} (x) \sim \sum_ {k = - \infty} ^ {\infty} \mathrm{i} k c _ {k} \mathrm{e} ^ {\mathrm{i} k x}.
$$

证明 根据 $c_k$ 的定义, 并利用积分的线性性质以及积分变量替换, 不难得到 (i) 至 (iii). 下面只证明 (iv) 至 (vii) 四个结论, 其余结论证明省略.

$$
\begin{array}{l} = \left(\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (t + h) \mathrm{e} ^ {- \mathrm{i} k (t + h)} \mathrm{d} t\right) \mathrm{e} ^ {\mathrm{i} k h} \\ = c _ {k} \mathrm{e} ^ {i k h}. \\ \end{array}
$$

(iv) $\frac{1}{2\pi}\int_{-\pi}^{\pi}f(t + h)\mathrm{e}^{-ikt}\mathrm{d}t$

(v) $\frac{1}{2\pi}\int_{-\pi}^{\pi}\mathrm{e}^{int}f(t)\mathrm{e}^{-kt}\mathrm{d}t = \frac{1}{2\pi}\int_{-\pi}^{\pi}f(t)\mathrm{e}^{-1(k - n)t}\mathrm{d}t = c_{k - n}.$

(vi) $|c_k| = \left|\frac{1}{2\pi}\int_{-\pi}^{\pi}f(t)\mathrm{e}^{-ikt}\mathrm{d}t\right| \leqslant \frac{1}{2\pi}\int_{-\pi}^{\pi}|f(t)|\mathrm{d}t.$

$$
\begin{array}{l} = \frac {1}{2 \pi} \left[ f (t) \mathrm{e} ^ {- \mathrm{i} k t} \right| _ {- \pi} ^ {\pi} - (- \mathrm{i} k) \int_ {- \pi} ^ {\pi} f (t) \mathrm{e} ^ {- \mathrm{i} k t} \mathrm{d} t ] \\ = \mathrm{i} k c _ {k}. \\ \end{array}
$$

(vii) $\frac{1}{2\pi}\int_{-\pi}^{\pi}f'(t)\mathrm{e}^{-tkt}\mathrm{d}t$

类似的计算可得到

$$
a _ {k} (f ^ {\prime}) = k b _ {k} (f), \quad b _ {k} (f ^ {\prime}) = - k a _ {k} (f).
$$

推论 2.2 设 $f_{j} \in L^{1}(T)$ , $j = 1, 2, \cdots$ , 且 $\lim_{j \to \infty} \|f_{j} - f\|_{1} = 0$ , 则当 $j \to \infty$ 时, $c_{k}(f_{j})$ 关于 k 一致收敛于 $c_{k}(f)$ .

此推论由定理 2.1 的 (vi) 即可推得.

定理2.3 设 $f, g \in L^{1}(T)$ , 则 $(f * g)(x)$ 也是在 $\pmb{T}$ 上可积且周期为 $2\pi$ 的函数, 此外还有

$$
\| f * g \| _ {1} \leqslant \| f \| _ {1} \| g \| _ {1}. \tag {2.1}
$$

若 $f \sim \sum c_k e^{ikx}, g \sim \sum d_k e^{ikx}$ , 则

$$
(f * g) (x) \sim \sum 2 \pi c _ {k} d _ {k} \mathrm{e} ^ {\mathrm{i} k x}. \tag {2.2}
$$

证明 $(f*g)(x)$ 的周期性是显然的, 为了证明它可积只需用(2.1)式, 而此式不过是 Young 不等式的特殊情形 (请参看 §1.4).

用Fubini定理及函数的周期性容易得到

$$
\begin{array}{l} c _ {k} (f * g) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \left[ \int_ {- \pi} ^ {\pi} f (x - t) g (t) \mathrm{d} t \right] \mathrm{e} ^ {- i k \tau} \mathrm{d} x \\ = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} g (t) \mathrm{e} ^ {- 1 k t} \left[ \int_ {- \pi} ^ {\pi} f (x - t) \mathrm{e} ^ {- 1 k (x - t)} \mathrm{d} x \right] \mathrm{d} t \\ = 2 \pi c _ {k} d _ {k}. \\ \end{array}
$$

因此有(2.2)成立.

下面介绍一个重要的定理. 通常被称为 Riemann-Lebesgue 引理.

定理2.4 设 $f \in L(R), \lambda$ 是实数，则当 $\lambda \to +\infty$ ，或 $\lambda \to -\infty$ 时，

$$
\gamma_ {\lambda} (f) = \int_ {- \infty} ^ {\infty} f (x) \mathrm{e} ^ {i \lambda x} \mathrm{d} x \rightarrow 0.
$$

证明 因为紧支集的阶梯函数全体在 $L(R)$ 中稠密, 所以对任意给定的 $\varepsilon > 0$ , 存在紧支集的阶梯函数 $f_{\varepsilon}(x) = \sum_{j=1}^{k} c_{j} \chi_{(a_{j}, b_{j})}(x)$ , 使得

$$
\int_ {- \infty} ^ {\infty} | f - f _ {\varepsilon} | \mathrm{d} x <   \frac {\varepsilon}{2}.
$$

对以上取定的 $f_{\varepsilon}$ ，存在 $N$ ，当 $|\lambda| > N$ 时，

$$
\begin{array}{l} \left| \int_ {- \infty} ^ {\infty} f _ {\epsilon} (x) \mathrm{e} ^ {i \lambda x} \mathrm{d} x \right| = \left| \sum_ {j = 1} ^ {k} c _ {j} \int_ {a _ {j}} ^ {b _ {j}} \mathrm{e} ^ {i \lambda x} \mathrm{d} x \right| \\ \leqslant \sum_ {j = 1} ^ {k} | c _ {j} | \left| \frac {\mathrm{e} ^ {\mathrm{i} \lambda b _ {j}} - \mathrm{e} ^ {\mathrm{i} \lambda a _ {j}}}{\mathrm{i} \lambda} \right| \leqslant \frac {2}{| \lambda |} \sum_ {j = 1} ^ {k} | c _ {j} | <   \frac {\varepsilon}{2}. \\ \end{array}
$$

于是，当 $|\lambda| > N$ 时，

$$
\begin{array}{l} \left| \gamma_ {\lambda} (f) \right| \leqslant \left| \int_ {- \infty} ^ {\infty} [ f (x) - f _ {\varepsilon} (x) ] e ^ {i \lambda t} d x \right| \\ + \left| \int_ {- \infty} ^ {\infty} f _ {\varepsilon} (x) \mathrm{e} ^ {i \lambda x} \mathrm{d} x \right| \\ \leqslant \frac {\varepsilon}{2} + \frac {\varepsilon}{2} = \varepsilon . \\ \end{array}
$$

注 此定理可修改为：设 $f \in L(R)$ ，则当 $\lambda \to +\infty$ （或 $-\infty$ ）时，

$$
\gamma_ {\lambda} (f; a, b) = \int_ {a} ^ {b} f (x) \mathrm{e} ^ {\mathrm{i} \lambda x} \mathrm{d} x \rightarrow 0
$$

关于 $a, b$ 一致 $(a, b$ 是实数，或者是 $+\infty$ 与 $-\infty)$ .

我们只要注意到有

$$
\left| \int_ {a} ^ {b} f _ {\varepsilon} (x) \mathrm{e} ^ {1 \lambda x} \mathrm{d} x \right| = \left| \sum_ {j = 1} ^ {k} c _ {j} \int_ {(a, b) \cap (a _ {j}, b _ {j})} \mathrm{e} ^ {1 \lambda x} \mathrm{d} x \right| \leqslant \sum_ {j = 1} ^ {k} | c _ {j} | \cdot \frac {2}{| \lambda |},
$$

其余部分的证明与原定理类似.

推论2.5 设 $f \in L(-\pi, \pi)$ ，则 $\lim_{k \to \pm \infty} c_k(f) = 0$ ，同时有

$$
\lim _ {k \to \infty} a _ {k} (f) = 0, \quad \lim _ {k \to \infty} b _ {k} (f) = 0.
$$

我们只要假定 $f$ 在 $(- \pi, \pi)$ 以外为零，便可由定理2.4得到此推论。

如果对函数假定更强的条件,则可以更进一步来估计 $c_{k}$ 收敛于零的速度.为简便起见,今后说周期是指以 $2\pi$ 为周期,说周期函数可积是指它在一个周期上可积.

定理2.6 设 $f(x)$ 为周期函数，并且它的 $(m - 1)$ 阶 $(m \geqslant 1)$ 微商在 $[- \pi, \pi]$ 上绝对连续，则

$$
c _ {k} (f) = o \left(\frac {1}{| k | ^ {m}}\right), \quad | k | \rightarrow \infty . \tag {2.3}
$$

特别，若 $f$ 绝对连续，则 $c_{k}(f) = o\left(\frac{1}{|k|}\right)$ ，这里的小 $o$ 表示 $c_{k}$ 是比 $\frac{1}{|k|}$ 高阶的无穷小量。 $a_{k}, b_{k}$ 有同样的估计式。

证明 设 $m = 1$ ，由定理2.1的(vii)知

$$
c _ {k} (f ^ {\prime}) = \mathrm{i} k c _ {k} (f),
$$

即 $c_{k}(f) = \frac{1}{1k} c_{k}(f^{\prime})(k\neq 0)$ ，而由推论2.5便知 $c_{k}(f^{\prime}) = o(1)$ ，故

$$
c _ {k} (f) = o \left(\frac {1}{| k |}\right), \quad | k | \rightarrow \infty .
$$

对于 $m \geqslant 2$ ，只要注意到有

$$
c _ {k} (f ^ {(m)}) = (\mathrm{i} k) ^ {m} c _ {k} (f),
$$

用上述方法类似可证.

对于周期函数 $f(x)$ ，我们称

$$
\omega (\delta) = \omega (\delta ; f) = \sup_ {\substack {0 \leqslant h \leqslant \delta \\ - \infty <   r <   \infty}} | f (x + h) - f (x) |
$$

为 $f(x)$ 的连续模，又称

$$
\omega_ {1} (\delta ; f) = \sup _ {0 \leqslant h \leqslant \delta} \int_ {- \pi} ^ {\pi} | f (x + h) - f (x) | \mathrm{d} x
$$

为 $f(x)$ 的积分连续模. 如果存在常数 $C$ , 使得

$$
\left| \omega (\delta ; f) \right| \leqslant C \delta^ {\alpha},
$$

其中 $0 \leqslant \alpha \leqslant 1$ ，就称 $f(x)$ 满足 $\alpha$ 次的 Lipschitz 条件，记作 $f \in \operatorname{Lip} \alpha$ . 容易看到，如果 $f$ 周期连续，则 $\omega(\delta; f)$ 是 $\delta$ 的不减函数，且

$$
\lim _ {\delta \rightarrow 0} \omega (\delta ; f) = 0.
$$

如果 $f$ 周期可积，则 $\omega_{1}(\delta ;f)$ 是 $\delta$ 的不减函数，且

$$
\lim _ {\delta \rightarrow 0} \omega_ {1} (\delta ; f) = 0.
$$

定理2.7 设 $f \in L(T)$ , 则

$$
\left| c _ {k} (f) \right| \leqslant \frac {1}{4 \pi} \omega_ {1} \left(\frac {\pi}{| k |}; f\right). \tag {2.4}
$$

$a_{k}(f), b_{k}(f)$ 有相同的估计式，但常数 $\frac{1}{4\pi}$ 换成 $\frac{1}{2\pi}$ . 若 $f$ 还是连续的，则

$$
\left| c _ {k} (f) \right| \leqslant \frac {1}{2} \omega \left(\frac {\pi}{| k |}; f\right). \tag {2.5}
$$

$a_{k}(f), b_{k}(f)$ 有相同的估计式，但常数 $\frac{1}{2}$ 换成1.

证明 由变量替换 $x = t + \frac{\pi}{|k|}$ ，可得

$$
c _ {k} (f) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {- 1 k x} \mathrm{d} x = - \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f \left(t + \frac {\pi}{| k |}\right) \mathrm{e} ^ {- 1 k t} \mathrm{d} t,
$$

把 $c_{k}(f)$ 这两个表示式相加再除以2，得到

$$
c _ {k} (f) = \frac {1}{4 \pi} \int_ {- \pi} ^ {\pi} [ f (x) - f (x + \frac {\pi}{| k |}) ] e ^ {- i k x} d x,
$$

于是

$$
\begin{array}{l} \left| c _ {k} (f) \right| \leqslant \frac {1}{4 \pi} \int_ {- \pi} ^ {\pi} \left| f (x) - f \left(x + \frac {\pi}{| k |}\right) \right| d x \\ \leqslant \frac {1}{4 \pi} \omega_ {1} \left(\frac {\pi}{| k |}; f\right). \\ \end{array}
$$

当 $f$ 连续，由上面的第一个不等式便可推得(2.5).用(1.10)可得 $a_{k},b_{k}$ 的估计式.

我们把 $[- \pi, \pi]$ 上定义的有界变差函数类记为 BV. 设 $f \in$ BV, 它在 $[- \pi, \pi]$ 上的全变差记为 $V(f) = \bigvee_{-\pi}^{\pi}(f)$ .

定理2.8 设周期函数 $f \in \mathrm{BV}$ , 则

$$
\left| c _ {k} (f) \right| \leqslant \frac {1}{4 | k |} V (f). \tag {2.6}
$$

证明 作变换可得

$$
c _ {k} (f) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {- 1 k x} \mathrm{d} x = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f \left(t + \frac {j \pi}{| k |}\right) \mathrm{e} ^ {- 1 k t} \mathrm{e} ^ {- 1 \frac {k}{| k |} j \pi} \mathrm{d} t,
$$

其中 $\mathrm{e}^{-1\frac{k}{|k|^j\pi}} = (-1)^j$ .对于任意整数 $j$ ，把 $c_{k}$ 关于 $j$ 与 $j - 1$ 的两个

表示式相加再除以 2, 得

$$
\left| c _ {k} (f) \right| \leqslant \frac {1}{4 \pi} \int_ {- \pi} ^ {\pi} \left| f \left(x + \frac {j \pi}{| k |}\right) - f \left(x + \frac {(j - 1) \pi}{| k |}\right) \right| d x.
$$

对于 $j = -|k| + 1, \cdots, 0, 1, \cdots, |k|$ ，我们把相应的 $2|k|$ 个不等式两边分别相加，再除以 $2|k|$ ，便得到

$$
\begin{array}{l} \left| c _ {k} (f) \right| \leqslant \frac {1}{8 | k | \pi} \int_ {- \pi} ^ {\pi} \sum_ {j = - | k | + 1} ^ {| k |} \left| f \left(x + \frac {j \pi}{| k |}\right) \right. \\ - f \left(x + \frac {(j - 1) \pi}{| k |}\right) \mid d x \\ \leqslant \frac {1}{8 | k | \pi} V (f) \cdot 2 \pi = \frac {1}{4 | k |} V (f). \\ \end{array}
$$

对于 $a_{k}, b_{k}$ 可以得到类似的估计式，但常数 $\frac{1}{4|k|}$ 换成 $\frac{1}{2k}$ .

例1 设函数

$$
f (x) = | x |, \quad - \pi \leqslant x \leqslant \pi ,
$$

并且 $f$ 以 $2\pi$ 为周期，求 $f(x)$ 的Fourier级数.

解 因为 $f$ 是偶函数, 故

$$
\begin{array}{l} b _ {k} = 0, \quad k = 1, 2, \dots , \\ a _ {0} = \frac {2}{\pi} \int_ {0} ^ {\pi} x \mathrm{d} x = \pi , \\ a _ {k} = \frac {2}{\pi} \int_ {0} ^ {\pi} x \cos k x \mathrm{d} x \\ = \frac {2}{\pi} \left[ x \frac {\sin k x}{k} \right| _ {0} ^ {\pi} - \int_ {0} ^ {\pi} \frac {\sin k x}{k} d x ] \\ = \frac {2}{\pi} \frac {(- 1) ^ {k} - 1}{k ^ {2}}, \quad k = 1, 2, \dots . \\ \end{array}
$$

从而

$$
f (x) \sim \frac {\pi}{2} - \frac {4}{\pi} \sum_ {k = 1} ^ {\infty} \frac {\cos (2 k - 1) x}{(2 k - 1) ^ {2}}.
$$

这里的 f 在 $[-π, π]$ 上绝对连续，可以对照定理 2.6 的结果.

例2 设函数 $f(x)$ 为

$$
f (x) = x, \quad - \pi <   x \leqslant \pi ,
$$

并且 f 以 $2\pi$ 为周期, 求其 Fourier 级数.

解 我们有

$$
c _ {0} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} x \mathrm{d} x = 0,
$$

$$
c _ {k} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} x \mathrm{e} ^ {- 1 k x} \mathrm{d} x = \frac {(- 1) ^ {k + 1}}{1 k}, \quad k \neq 0.
$$

从而

$$
f (x) \sim \sum_ {k \neq 0} \frac {(- 1) ^ {k + 1}}{1 k} \mathrm{e} ^ {\mathrm{i} k x},
$$

这里的 $f \in \mathrm{BV}$ , 但不是绝对连续. 可以对照定理2.8的结果.

## § 2.2 Fourier 级数的收敛性

本节将考虑 Fourier 级数的逐点收敛问题, 只介绍最常用的结果. 不失一般性, 我们假定 $f$ 是实值函数.

设 $f \in L(T)$ ,

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

将右端的级数记成 $S(f, x)$ ，它的部分和为

$$
\begin{array}{l} S _ {n} (x) = \sum_ {k = - n} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (t) \sum_ {k = - n} ^ {n} \mathrm{e} ^ {\mathrm{i} k (x - t)} \mathrm{d} t \\ = \int_ {- \pi} ^ {\pi} f (t) D _ {n} (x - t) \mathrm{d} t. \tag {2.7} \\ \end{array}
$$

我们记

$$
\begin{array}{l} D _ {n} (t) = \frac {1}{2 \pi} \sum_ {k = - n} ^ {n} \mathrm{e} ^ {\mathrm{i} k t} = \frac {1}{2 \pi} \frac {\mathrm{e} ^ {- \mathrm{i} n t} - \mathrm{e} ^ {\mathrm{i} (n + 1) t}}{1 - \mathrm{e} ^ {\mathrm{i} t}} \\ = \left\{ \begin{array}{l l} \frac {1}{2 \pi} \frac {\sin \left(n + \frac {1}{2}\right) t}{\sin \frac {1}{2} t}, & t \neq 2 j \pi , \\ \frac {1}{2 \pi} (2 n + 1), & t = 2 j \pi , \end{array} \right. \tag {2.8} \\ \end{array}
$$

其中 $j$ 为整数， $D_{n}(t)$ 称为Dirichlet核，它是周期为 $2\pi$ 的连续偶函数，(2.7)式右端的积分称为 $f(x)$ 的Dirichlet积分，由(2.8)式经过逐项积分计算可得

$$
\int_ {- \pi} ^ {\pi} D _ {n} (t) \mathrm{d} t = 1. \tag {2.9}
$$

因 $D_{n}(t)$ 是偶函数，部分和还可改写成

$$
\begin{array}{l} S _ {n} (x) = \left(f * D _ {n}\right) (x) = \int_ {- \pi} ^ {\pi} f (x - t) D _ {n} (t) d t \\ = \int_ {0} ^ {\pi} [ f (x + t) + f (x - t) ] D _ {n} (t) d t \\ = 2 \int_ {0} ^ {\pi} \varphi_ {x} (t) D _ {n} (t) \mathrm{d} t, \tag {2.10} \\ \end{array}
$$

其中

$$
\varphi_ {x} (t) = \frac {1}{2} [ f (x + t) + f (x - t) ]. \tag {2.11}
$$

定理2.9 (i) (Riemann局部化定理) 函数 $f$ 的Fourier级数 $S(f, x)$ 在一点 $x_0$ 处的收敛性质只与 $f$ 在 $x_0$ 的任意小的邻域内的函数值有关.

(11) 级数 $S(f, x)$ 在 $x_0$ 点收敛于 $s$ 的充分必要条件是对任一确定的 $\delta (0 < \delta < \pi)$ 有

$$
\lim _ {n \rightarrow t} \int_ {0} ^ {\delta} \left[ \varphi_ {t _ {0}} (t) - s \right] D _ {n} (t) \mathrm{d} t = 0.
$$

证明 (1) 由(2.9)及(2.10)得到

$$
S _ {n} (x) - s = 2 \int_ {0} ^ {\pi} [ \varphi_ {i} (t) - s ] D _ {n} (t) \mathrm{d} t. \tag {2.12}
$$

由此可知， $S_{n}(x)$ 收敛于 $\mathfrak{s}$ 的充分必要条件是上式右端的积分趋向于零.由三角函数的公式得

$$
\frac {\sin \left(n + \frac {1}{2}\right) t}{2 \sin \frac {t}{2}} = \frac {1}{2 \tan \frac {t}{2}} \sin n t + \frac {1}{2} \cos n t. \tag {2.13}
$$

对于 $\delta \in (0, \pi)$ , (2.12)式可改写成

$$
\begin{array}{l} S _ {n} \left(x _ {0}\right) - s = \frac {1}{\pi} \int_ {0} ^ {\delta} \frac {\varphi_ {x _ {0}} (t) - s}{\tan \frac {t}{2}} \sin n t d t + \frac {1}{\pi} \int_ {\delta} ^ {\pi} \frac {\varphi_ {x _ {0}} (t) - s}{\tan \frac {t}{2}} \sin n t d t \\ + \frac {1}{\pi} \int_ {0} ^ {\pi} \left[ \varphi_ {x _ {0}} (t) - s \right] \cos n t d t \\ = \frac {1}{\pi} \int_ {0} ^ {\delta} \frac {\varphi_ {x _ {0}} (t) - s}{\tan \frac {t}{2}} \sin n t d t + I _ {1} + I _ {2}. \tag {2.14} \\ \end{array}
$$

因 $\tan (t / 2)$ 在 $[\delta, \pi]$ 有正下界，故 $\frac{\varphi_{x_0}(t) - s}{\tan(t / 2)}$ 在 $[\delta, \pi]$ 上可积，又 $[\varphi_{x_0}(t) - s]$ 在 $[0, \pi]$ 上可积，于是由Riemann-Lebesgue引理便可推知当 $n \to \infty$ 时， $I_1$ 及 $I_2$ 都趋向于零（但它们趋于零的速度与点 $x_0$ 有关），即有

$$
S _ {n} \left(x _ {0}\right) - s = \frac {1}{\pi} \int_ {0} ^ {\delta} \frac {\varphi_ {x _ {0}} (t) - s}{\tan \frac {t}{2}} \sin n t d t + o (1). \tag {2.15}
$$

由此可见，是否存在 $s$ 使得 $S_{n}(x_{0})$ 收敛于 $s$ ，只取决于 $f$ 在 $(x_0 - \delta, x_0 + \delta)$ 的值.

(ii) 与前面类似可推得

$$
S _ {n} (x _ {0}) - s = 2 \int_ {0} ^ {\delta} [ \varphi_ {x _ {0}} (t) - s ] D _ {n} (t) \mathrm{d} t + o (1),
$$

从而(ii)的结论成立.

由(2.15)可推得以下推论.

推论2.10 设 $f \in L(T)$ 且

$$
f (x) = 0, \quad \forall x \in (a, b) \subset [ - \pi , \pi ],
$$

则 $\lim_{n\to \infty}S_n(x) = 0$ ，对一切 $x\in (a,b)$

由此可知, 如果两个函数在 $x_0$ 的一个小邻域内的值相等, 则不管它们在此邻域以外的值是如何不相同, 它们的 Fourier 级数在 $x_0$ 处或收敛于同一个值, 或同时发散. 我们知道 Fourier 系数是与函数在 $(- \pi, \pi)$ 上几乎一切点的值有关的, 从而上述两个函数的Fourier系数可以完全不同，但它们的Fourier级数在 $x_0$ 处的收敛性却相同.这样的结果是不容易料想到的.

下面讨论Fourier级数逐点收敛的条件.

定理2.11(Dini判别法）若有 $s$ ，对某个 $\delta >0$ ，使得下述积分为有限

$$
\int_ {0} ^ {\delta} \frac {| \varphi_ {x} (t) - s |}{t} \mathrm{d} t <   \infty , \tag {2.16}
$$

式中 $\varphi_{x}(t)$ 由(2.11)给定，则级数 $S(f,x)$ 在点 $x$ 收敛于 $s$ ，即

$$
S _ {n} (x) \rightarrow s \quad (n \rightarrow \infty).
$$

证明 令

$$
g (t) = \left\{ \begin{array}{l l} \frac {1}{2 \tan \frac {t}{2}} - \frac {1}{t}, & t \in [ - \pi , \pi ] \backslash \{0 \}, \\ 0, & t = 0, \end{array} \right.
$$

不难验证 $g(t)$ 在 $[- \pi, \pi]$ 上连续，从而有界。由Riemann-Lebesgue引理，(2.15)式可以改写为

$$
S _ {n} (x) - s = \frac {2}{\pi} \int_ {0} ^ {\delta} [ \varphi_ {x} (t) - s ] \frac {\sin n t}{t} d t + o (1). \tag {2.17}
$$

若 Dini 条件(2.16)成立, 由(2.17)式再用 Riemann-Lebesgue 引理, 便推得 $S_{n}(x) \to s (n \to \infty)$ .

为了今后使用方便,介绍以下引理.

引理2.12 存在常数 $M$ ，使得对于任意常数 $a, b$ ，有

$$
\left| \int_ {a} ^ {b} \frac {\sin t}{t} \mathrm{d} t \right| \leqslant M.
$$

特别，当 $M = 6$ 时上式成立.

证明 因为 $\frac{\sin t}{t}$ 是偶函数, 所以只需对于 $0 \leqslant a \leqslant b$ 证明结论.

首先, 设 $1 \leqslant a \leqslant b$ , 用积分第二中值定理得知, 存在 $\xi \in [a, b]$ , 使得

$$
\int_ {a} ^ {b} \frac {\sin t}{t} \mathrm{d} t = \frac {1}{a} \int_ {a} ^ {\xi} \sin t \mathrm{d} t = \frac {1}{a} (\cos a - \cos \xi),
$$

于是有

$$
\left| \int_ {a} ^ {b} \frac {\sin t}{t} \mathrm{d} t \right| \leqslant 2.
$$

其次，设 $0 \leqslant a \leqslant b \leqslant 1$ ，有 $0 \leqslant b - a \leqslant 1$

$$
0 \leqslant \int_ {a} ^ {b} \frac {\sin t}{t} \mathrm{d} t \leqslant \int_ {a} ^ {b} 1 \mathrm{d} t \leqslant 1.
$$

其余的情形为 $0 \leqslant a \leqslant 1 \leqslant b$ ，这时有

$$
\left| \int_ {a} ^ {b} \frac {\sin t}{t} \mathrm{d} t \right| \leqslant \left| \int_ {a} ^ {1} \frac {\sin t}{t} \mathrm{d} t \right| + \left| \int_ {1} ^ {b} \frac {\sin t}{t} \mathrm{d} t \right| \leqslant 1 + 2 = 3.
$$

总之，若 $0 \leqslant a \leqslant b$ ，取 $M = 3$ 便得结论. 若 $a, b$ 为任意常数，取 $M = 6$ 便有结论成立.

定理 2.13(Jordan 判别法) 设 f 在点 x 的某个邻域 $[x-\delta, x+\delta]$ 上是有界变差的 $(\delta>0)$ ，则 Fourier 级数 $S(f,x)$ 在 x 处收敛于 $\frac{1}{2}[f(x+0)+f(x-0)]$ 。如果 x 是 f 的连续点，则级数 $S(f,x)$ 收敛于 $f(x)$ 。

证明 因为 $f$ 在 $[x - \delta, x + \delta]$ 上是有界变差的，所以 $f(x + 0), f(x - 0)$ 显然存在。令 $s = \frac{1}{2} [f(x + 0) + f(x - 0)]$ ，则函数 $\psi(t) = \varphi_x(t) - s$ 是 $[0, \delta]$ 上的有界变差函数，它可以表示成两个增函数的差

$$
\psi (t) = h _ {1} (t) - h _ {2} (t).
$$

当 $x_0 = 0$ 时，我们记 $\psi (x_0 + 0)$ 为 $\psi (+0)$ . 因为 $\psi (+0) = 0$ ，所以总能取到增函数 $h_1(t), h_2(t)$ ，使得 $h_1(+0) = h_2(+0) = 0$ ，从而 $h_1(t), h_2(t)$ 在 $[0, \delta]$ 上非负. 于是，任给 $\varepsilon > 0$ ，可取到 $\delta_1 > 0$ ，使得当 $0 < t \leqslant \delta_1$ 时，

$$
0 \leqslant h _ {j} (t) <   \varepsilon , \quad j = 1, 2.
$$

不妨设 $\delta_{1} \leqslant \delta$ . 对以上的 $\delta_{1}$ , 可取到充分大的 $N$ , 使得当 $n \geqslant N$ 时, (2.17) 式中的 $o(1)$ 项小于 $\varepsilon$ . 把 $\psi(t)$ 的表示式代入 (2.17) 式, 可得

$$
\left| S _ {n} (x) - s \right| \leqslant \sum_ {j = 1} ^ {2} \frac {2}{\pi} \left| \int_ {0} ^ {\delta_ {1}} h _ {j} (t) \frac {\sin n t}{t} d t \right| + \varepsilon .
$$

对右端头两项用积分第二中值定理,有

$$
\frac {2}{\pi} \left| \int_ {0} ^ {\delta_ {1}} h _ {j} (t) \frac {\sin n t}{t} d t \right| = \frac {2}{\pi} \left| h _ {j} \left(\delta_ {1}\right) \int_ {\varepsilon_ {j}} ^ {\delta_ {1}} \frac {\sin n t}{t} d t \right|
$$

$$
\leqslant \frac {2}{\pi} \varepsilon \left| \int_ {n \xi_ {j}} ^ {n \delta_ {1}} \frac {\sin t}{t} d t \right| \leqslant \frac {2 M}{\pi} \varepsilon ,
$$

其中 $0 \leqslant \xi_{1} \leqslant \delta_{1}, M$ 是引理2.12中的绝对常数. 综上所述，得

$$
\left| S _ {n} (x) - s \right| \leqslant \left(\frac {4 M}{\pi} + 1\right) \varepsilon , \quad n \geqslant N,
$$

即有定理的结论. 如果 $f$ 在点 $x$ 连续, 那么上述 $s = f(x)$ .

推论 2.14 (i) 若在点 $x_{0}$ ，存在 $\delta > 0$ ，使得有

$$
f (x _ {0} + t) - f (x _ {0}) = O \left(\frac {1}{| \ln | t | | ^ {1 + \delta}}\right) \quad (t \rightarrow 0),
$$

则 $S_{n}(f,x_{0})\to f(x_{0})$ $(n\to \infty)$

(ii) 若有 $\alpha > 0$ ，使得

$$
f (x _ {0} + t) - f (x _ {0}) = O (| t | ^ {a}) \quad (t \rightarrow 0),
$$

则 $S_{n}(f,x_{0})\to f(x_{0})(n\to \infty)$ .特别，若 $\alpha = 1$ ，即 $f$ 在 $x_0$ 点是Lipschitz连续的，便有 $S_{n}(f,x_{0})\rightarrow f(x_{0})(n\rightarrow \infty)$

(iii) 若 $f(x)$ 在 $x_0$ 处可微，则

$$
S _ {n} (f, x _ {0}) \rightarrow f (x _ {0}) \quad (n \rightarrow \infty).
$$

(iv) 若周期函数 $f(x)$ 在 $[- \pi, \pi]$ 上逐段单调，则对任意点 $x$

$$
S _ {n} (f, x) \rightarrow \frac {1}{2} [ f (x + 0) + f (x - 0) ]
$$

(这就是 Dirichlet 判别法).

证明 (i) 取 $s = f(x_0)$ , 满足 Dini 条件 (2.16), 根据 Dini 判别法可得结论.

(11) 由 Dini 判别法可推得.

(iii) 由 $f$ 在 $x_0$ 处可微, 则有

$$
f (x _ {0} + h) - f (x _ {0}) = O (h),
$$

归结为(11)中 $\alpha=1$ 的情形.

(iv) 用 Jordan 判别法可推得.

例1 §2.1的例1中的 $f(x)$ 在每点Lipschitz连续，因此由

推论 2.14 的(ii)可得以下等式：

$$
| x | = \frac {\pi}{2} - \frac {4}{\pi} \sum_ {k = 1} ^ {\infty} \frac {\cos (2 k - 1) x}{(2 k - 1) ^ {2}}, \quad x \in [ - \pi , \pi ]
$$

(见图 2.1).

![](2c6086d27001c7294d5e977b05f87379977325964cc7401381079a2269fa601f.jpg)

<details>
<summary>text_image</summary>

-2π -π
O π
2π
x
y
π
</details>

图2.1

![](41801a74731208af3f6bfacc5a93e64f9abc70b4827144922d97980cfdcd8482.jpg)

<details>
<summary>line</summary>

| x | y |
|---|---|
| -2π | π/2 |
| -π | -π/2 |
| O | π |
| π | 0 |
| 2π | -π/2 |
</details>

图2.2

例2 设 $f(x) = \frac{1}{2} (\pi - x), 0 < x < 2\pi$ . 计算得

$$
a _ {k} = 0, \quad k = 0, 1, 2, \dots ,
$$

$$
b _ {k} = \frac {1}{k}, \quad k = 1, 2, \dots .
$$

$f(x)$ 在开区间 $(0,2\pi)$ 上每点是可微的，从而以下展开式成立：

$$
\frac {1}{2} (\pi - x) = \sum_ {k = 1} ^ {\infty} \frac {\sin k x}{k}, \quad 0 <   x <   2 \pi ,
$$

在 $x = 0$ 及 $x = 2\pi$ 处，级数的和为0（见图2.2).在上述展开式中，令 $x = \frac{\pi}{2}$ ，得到Leibniz级数

$$
\frac {\pi}{4} = 1 - \frac {1}{3} + \frac {1}{5} - \frac {1}{7} + \dots .
$$

注意,以上关于 Fourier 级数收敛的各种判别条件都是充分条件.

## § 2.3 Fourier 级数的发散及 Lebesgue 常数

当初, Fourier 在研究热传导问题时引导出 Fourier 级数, 他曾以为对任意函数 $f(x)$ , 其 Fourier 级数都收敛. 后来 Dirichlet对于收敛条件进行了研究, 给出了 Dirichlet 判别法(1829 年). 在 Dirichlet 的研究工作之后的许多年里, 人们以为任何一个连续函数的 Fourier 级数都收敛到该函数自身, 但是 Du Bois-Reymond (1873 年) 给出了一个连续函数, 它的 Fourier 级数在某点发散. 甚至他们还举出了一个连续函数, 它的 Fourier 级数在一个(处处稠密的)无穷点集上发散. 这一发现引起人们的震动. 那么, 是否存在函数, 其 Fourier 级数几乎处处发散? A. Kolomogorov (1926 年) 证明了: 存在 $f \in L(-\pi, \pi)$ , 其 Fourier 级数处处发散.

但在很长的时间里, 人们仍然不知道: 连续函数的 Fourier 级数是否一定几乎处处收敛? 直到 1966 年, L. Carleson 证明了: 若 $f \in L^{2}(-\pi, \pi)$ , 则它的 Fourier 级数在几乎处处的 $x$ 上收敛于 $f(x)$ . 1967 年 R. A. Hunt 把此结果推广到 $L^{p}(-\pi, \pi), p > 1$ . 在 $[- \pi, \pi]$ 上连续的函数显然属于 $L^{2}(-\pi, \pi)$ , 因此它的 Fourier 级数必定几乎处处收敛.

关于 Carleson 结果的证明过程相当复杂, 这里不作介绍. 下面给出关于存在连续函数, 其 Fourier 级数在某点发散的两个证明, 其中一个用存在性的方法, 另一个用构造性的方法.

记 $L_{n} = \int_{-\pi}^{\pi}|D_{n}(t)|\mathrm{d}t,$ (2.18)

称 $L_{n}$ 为三角函数系的Lebesgue常数.

定理 2.15 以下估计式成立：

$$
L _ {n} = \frac {4}{\pi^ {2}} \ln n + O (1) \quad (n \rightarrow \infty), \tag {2.19}
$$

其中 $O(1)$ 表示有界量.

证明 在下式中令 $x = 2y$ ，得到

$$
\begin{array}{l} L _ {n} = \int_ {- \pi} ^ {\pi} | D _ {n} (t) | \mathrm{d} t = 2 \int_ {0} ^ {\pi} | D _ {n} (x) | \mathrm{d} x \\ = \frac {1}{\pi} \int_ {0} ^ {\pi} \left| \frac {\sin \left(n + \frac {1}{2}\right) x}{\sin \frac {x}{2}} \right| d x \\ \end{array}
$$

$$
= \frac {2}{\pi} \int_ {0} ^ {\pi / 2} \left| \frac {\sin (2 n + 1) y}{\sin y} \right| d y.
$$

令 $g(y) = \frac{1}{\sin y} -\frac{1}{y},y\in \left(0,\frac{\pi}{2}\right]$ ，可以证明 $g(y)$ 在 $\left(0,\frac{\pi}{2}\right]$ 上有界，因此由上式推得，当 $n\to \infty$ 时，

$$
L _ {n} = \frac {2}{\pi} \int_ {0} ^ {\pi / 2} \frac {| (\sin (2 n + 1) y) |}{y} d y + O (1) = I _ {n} + O (1).
$$

在上式 $I_{n}$ 中令 $t = (2n + 1)y$ ，得

$$
\begin{array}{l} I _ {n} = \frac {2}{\pi} \int_ {0} ^ {\frac {(2 n + 1) \pi}{2}} \frac {| \sin t |}{t} d t = \frac {2}{\pi} \sum_ {k = 0} ^ {2 n} \int_ {\frac {k}{2} \pi} ^ {\frac {(k + 1) \pi}{2}} \frac {| \sin t |}{t} d t \\ = \frac {2}{\pi} \sum_ {k = 0} ^ {2 n} \int_ {0} ^ {\frac {\pi}{2}} \frac {u _ {k} (s)}{\frac {k}{2} \pi + s} \mathrm{d} s \quad (\text {令} t = \frac {k}{2} \pi + s), \\ \end{array}
$$

其中 $u_{k}(s) = \left|\sin \left(\frac{k}{2}\pi + s\right)\right| = \left\{ \begin{array}{ll}\sin s, & k = 2j,\\ \cos s, & k = 2j + 1, \end{array} \right.$

$j=0,1,2,\cdots,n,s\in\left(0,\frac{\pi}{2}\right)$ . 显然

$$
\int_ {0} ^ {\frac {\pi}{2}} u _ {k} (s) \mathrm{d} s = 1.
$$

注意到若 $k \geqslant 1, s \in \left(0, \frac{\pi}{2}\right)$ ，则

$$
0 \leqslant \frac {1}{\frac {k}{2} \pi} - \frac {1}{\frac {k}{2} \pi + s} = \frac {s}{\frac {k}{2} \pi \left(\frac {k}{2} \pi + s\right)} \leqslant \frac {\frac {\pi}{2}}{\left(\frac {k}{2} \pi\right) ^ {2}} = \frac {2}{k ^ {2} \pi},
$$

而当 $k = 0$

$$
\int_ {0} ^ {\frac {\pi}{2}} \frac {u _ {0} (s)}{s} d s = \int_ {0} ^ {\frac {\pi}{2}} \frac {\sin s}{s} d s
$$

是一个有限数,可以并到有界量 $O(1)$ 中. 因此 $I_{n}$ 可以化为

$$
I _ {n} = \frac {2}{\pi} \sum_ {k = 1} ^ {2 n} \frac {1}{\frac {k}{2} \pi} \int_ {0} ^ {\frac {\pi}{2}} u _ {k} (s) d s
$$

$$
+ \frac {2}{\pi} \sum_ {k = 1} ^ {2 n} \int_ {0} ^ {\frac {\pi}{2}} u _ {k} (s) \left[ \frac {1}{\frac {k}{2} \pi + s} - \frac {1}{\frac {k}{2} \pi} \right] d s + O (1)
$$

$$
= \frac {2}{\pi} \sum_ {k = 1} ^ {2 n} \frac {2}{k \pi} + O (1),
$$

由于 $\sum_{k=1}^{\infty} \frac{1}{k^2} < +\infty$ ，上式第一个等号右端的第二部分可归到 $O(1)$ 中，再由

$$
\sum_ {k = 1} ^ {2 n} \frac {1}{k} = \ln n + O (1),
$$

便得到

$$
L _ {n} = \frac {4}{\pi^ {2}} \sum_ {k = 1} ^ {2 n} \frac {1}{k} + O (1) = \frac {4}{\pi^ {2}} \ln n + O (1). \quad \text {   I   }
$$

定理2.16 存在周期连续函数 $f \in C(T)$ , 使得 $S_{n}(f, x)$ 在某点发散.

证明 只需证明存在 $f \in C(T)$ 使得在 $x = 0$ 点 $S_{n}(f,0)$ 发散.

(1) 用存在性的方法. 把

$$
v _ {n} (f) = s _ {n} (f, 0) = \int_ {- \pi} ^ {\pi} f (t) D _ {n} (t) \mathrm{d} t
$$

看作 $C(T)$ 上的连续线性泛函, 可以验证其范数

$$
\| v _ {n} \| = \int_ {- \pi} ^ {\pi} | D _ {n} (t) | \mathrm{d} t = I _ {n}.
$$

假如对每个 $f \in C(T)$ , 极限

$$
\lim _ {n \to (x)} v _ {n} (f) = \lim _ {n \to (x)} S _ {n} (f, 0)
$$

都存在, 根据共鸣定理的推论 (Banach-Steinhaus 定理) 推知 $\{\|v_{n}\|\}$ 有界. 但由定理 2.15 已经知道 $\{\|v_{n}\|\}=\{L_{n}\}$ 无界. 因此至少存在一个 $f\in C(T)$ , 使得 $\{S_{n}(f,0)\}$ 极限不存在.

(2) 用构造性方法. 令 $g(x) = \frac{1}{2} (\pi - x), 0 < x < 2\pi; g(x) = 0, x = 0$ 或 $x = 2\pi$ ，并以 $2\pi$ 为周期开拓到全实轴，由 §2.2 例 2 知

$$
g (x) \sim \sum_ {j = 1} ^ {\infty} \frac {\sin j x}{j},
$$

$g(x)$ 在 $[- \pi, \pi]$ 上是有界变差的，由后面的定理2.21的(ii)(或本章习题第3题)可知部分和 $S_{n}(g, x)$ 一致有界：

$$
\left| S _ {n} (g, x) \right| \leqslant M, \quad n = 1, 2, \dots , x \in [ 0, 2 \pi ].
$$

对于 $1 \leqslant m < n$ ，考虑如下的三角多项式

$$
\begin{array}{l} Q _ {m, n} (x) = \frac {\cos m x}{n} + \frac {\cos (m + 1) x}{n - 1} + \dots + \frac {\cos (m + n - 1) x}{1} \\ - \left[ \frac {\cos (m + n + 1) x}{1} + \frac {\cos (m + n + 2) x}{2} \right. \\ \left. + \dots + \frac {\cos (m + 2 n) x}{n} \right] \\ = \sum_ {j = 1} ^ {n} \frac {1}{j} [ \cos (m + n - j) x - \cos (m + n + j) x ] \\ = 2 \sin (m + n) x \sum_ {j = 1} ^ {n} \frac {\sin j x}{j}. \tag {2.20} \\ \end{array}
$$

(2.20)式右端的和式正是 $S_{n}(g,x)$ ，由 $S_{n}(g,x)$ 的有界性推知

$$
\left| Q _ {m, n} (x) \right| \leqslant 2 M, \quad x \in [ 0, 2 \pi ]. \tag {2.21}
$$

如果取两列上升的自然数列 $\{m_k\}$ 与 $\{n_k\}$ , 使得

$$
m _ {k} + 2 n _ {k} <   m _ {k + 1}, \tag {2.22}
$$

并作级数

$$
\sum_ {k = 1} ^ {\infty} \frac {1}{k ^ {2}} Q _ {m _ {k}, n _ {k}} (x), \tag {2.23}
$$

那么由(2.21)知此级数一致收敛.倘若记它的和函数为 $f(x)$ , 则 $f(x)$ 必定连续. 由条件(2.22)可知三角多项式 $Q_{m_k, n_k}$ 所含单项式的阶数不会互相重叠. 因此若把(2.23)写成三角级数的形式, 根据级数(2.23)一致收敛便可推知它就是 $f(x)$ 的 Fourier 级数, 即

$$
f (x) \sim \frac {\cos m _ {1} x}{n _ {1}} + \frac {\cos (m _ {1} + 1) x}{n _ {1} - 1} + \dots + \frac {\cos (m _ {1} + n _ {1} - 1) x}{1}
$$

$$
\begin{array}{l} - \frac {\cos \left(m _ {1} + n _ {1} + 1\right) x}{1} - \dots - \frac {\cos \left(m _ {1} + 2 n _ {1}\right) x}{n _ {1}} + \dots \\ + \frac {\cos m _ {k} x}{k ^ {2} n _ {k}} + \dots + \frac {\cos (m _ {k} + n _ {k} - 1) x}{k ^ {2} \cdot 1} \\ - \frac {\cos \left(m _ {k} + n _ {k} + 1\right) x}{k ^ {2} \cdot 1} - \dots - \frac {\cos \left(m _ {k} + 2 n _ {k}\right) x}{k ^ {2} \cdot n _ {k}} + \dots . \\ \end{array}
$$

特别，在取 $m_{k} = 2^{k^{2}}, n_{k} = 2m_{k}$ 时，显然满足条件(2.22).

下面说明 $S_{n}(f,x)$ 在 $x = 0$ 处发散. 容易看到 $S_{m_k + 2n_k}(f,0) = 0$ , 而

$$
\begin{array}{l} S _ {m _ {k} + n _ {k} - 1} (f, 0) = \frac {1}{k ^ {2}} \left(\frac {1}{n _ {k}} + \dots + \frac {1}{2} + 1\right) \\ \geqslant \frac {1}{k ^ {2}} \ln n _ {k} = \frac {k ^ {2} + 1}{k ^ {2}} \ln 2 \geqslant \ln 2. \\ \end{array}
$$

可见部分和 $S_{n}(f,0)$ 没有极限，即 $f$ 的Fourier级数在 $x = 0$ 处发散.不过这时 $S_{n}(f,0)$ 还是有界的.若取 $m_{k} = 2^{k^{3}}$ ， $n_k = 2m_k$ ，则部分和 $S_{n}(f,0)$ 无界.

## § 2.4 在间断点附近的性质——Gibbs 现象

若有界变差的周期函数 $f$ 有间断点 $x_0$ , 则 $f$ 的 Fourier 级数在任意包含 $x_0$ 的小区间上不可能一致收敛. 因为 Fourier 级数的部分和总是连续的, 而连续函数列一致收敛的极限也是连续的. 19 世纪末年, J. W. Gibbs 在回答一位物理学家对于有间断点的函数 $f$ 用连续函数 $S_n(f, x)$ 来代替所产生的疑问时, 指出了这种不一致收敛的缺点. 此后, 关于 Fourier 级数在函数 $f$ 的间断点附近出现的这类现象就称为 Gibbs 现象.

为了阐述这一现象,我们先考虑以下函数

$$
\psi (x) = \left\{ \begin{array}{l l} 1, & 0 <   x <   \pi , \\ 0, & x = 0, \pm \pi , \\ - 1, & - \pi <   x <   0. \end{array} \right. \tag {2.24}
$$

它的Fourier级数为

$$
\psi (x) \sim \frac {4}{\pi} \sum_ {k = 1} ^ {\infty} \frac {\sin (2 k - 1) x}{2 k - 1},
$$

由 Jordan 判别法知道部分和 $S_{n}(\psi,x)$ 收敛到 $\psi(x)$ . x=0 是 $\psi$ 的间断点. 我们将研究部分和

$$
S _ {2 n - 1} (x) = \frac {4}{\pi} \sum_ {k = 1} ^ {n} \frac {\sin (2 k - 1) x}{2 k - 1} \quad (S _ {2 n} (x) = S _ {2 n - 1} (x))
$$

在 $x = 0$ 附近的性质. 因为它是奇函数, 我们只需在 $[0, \pi]$ 上考虑. 又因为 $S_{2n-1}(\pi - x) = S_{2n-1}(x)$ , 所以只在 $[0, \pi/2]$ 上讨论即可, $S_{2n-1}(x)$ 只含有限项, 是连续可微的, 通过逐项微商得

$$
\begin{array}{l} S _ {2 n - 1} ^ {\prime} (x) = \frac {4}{\pi} \sum_ {k = 1} ^ {n} \cos (2 k - 1) x \\ = \frac {4}{\pi} \sum_ {k = 1} ^ {n} \frac {\sin 2 k x - \sin 2 (k - 1) x}{2 \sin x} \\ = \frac {2}{\pi} \frac {\sin 2 n x}{\sin x}, \quad x \neq 0. \\ \end{array}
$$

从而我们有

$$
S _ {2 n - 1} (x) = \frac {2}{\pi} \int_ {0} ^ {x} \frac {\sin 2 n t}{\sin t} \mathrm{d} t.
$$

容易得知 $S_{2n-1}^{\prime}\left(\frac{k\pi}{2n}\right)=0, k=1,2,\cdots,n.$ 根据微商的性质可以判定 $x_{k}^{(n)}=\frac{k\pi}{2n}$ 是 $S_{2n-1}(x)$ 的极值点，当 k 为奇数时它是极大值点，当 k 为偶数时它是极小值点 $(S_{2n-1}(x))$ 的极大值从左向右减小，而极小值从左向右增大，见图 2.3). $S_{2n-1}(x)$ 在 x=0 右边的第一个极大值点是 $x_{1}^{(n)}=\pi/(2n)$ ，在这点的极大值为

$$
\begin{array}{l} S _ {2 n - 1} (x _ {1} ^ {(n)}) = \frac {2}{\pi} \int_ {0} ^ {\frac {\pi}{2 n}} \frac {\sin 2 n t}{\sin t} d t = \frac {2}{\pi} \int_ {0} ^ {\pi} \frac {\sin t}{2 n \sin \frac {t}{2 n}} d t \\ = \frac {2}{\pi} \int_ {0} ^ {\pi} \frac {\sin t}{t} \frac {\frac {t}{2 n}}{\sin \frac {t}{2 n}} d t. \\ \end{array}
$$

![](0b0a92f5ea520e1a4e5f1d71621a9aae67ab73bbf7e532501598d4e8f4634c59.jpg)

<details>
<summary>line</summary>

| x       | y     |
| ------- | ----- |
| 0       | 0.90  |
| δ       | 1.18  |
| π/2     | 1.0   |
</details>

图2.3

因为对于 $t \in (0, \pi)$ 有

$$
\left| \frac {\frac {t}{2 n}}{\sin \frac {t}{2 n}} \right| \leqslant \frac {\pi}{2}, \quad \lim _ {n \rightarrow \infty} \frac {\frac {t}{2 n}}{\sin \frac {t}{2 n}} = 1,
$$

所以由控制收敛定理便推得

$$
\lim _ {n \rightarrow \infty} S _ {2 n - 1} (x _ {1} ^ {(n)}) = \frac {2}{\pi} \int_ {0} ^ {\pi} \frac {\sin t}{t} \mathrm{d} t = 1. 1 7 8 9 8 \dots .
$$

现在来说明 $S_{2n-1}(x)$ 收敛于 $\psi(x)$ 的特性. 对于充分小的 $\delta > 0, S_{2n-1}(x)$ 在 $[\delta, \pi/2]$ 上一致收敛于 $\psi(x)$ ; 而在 $[0, \delta]$ 上其收敛是不一致的, 即不论 $n$ 多大, 都有一个点 $x_1^{(n)} = \frac{\pi}{2n}$ , 使 $S_{2n-1}(x)$ 在这点达到一个峰值, 其值大约为 1.17898, 它比 $\psi(x_1^{(n)}) = 1$ 的值大约超出 $18\%$ . 当 $n \to \infty$ 时, 达到峰值的点 $x_1^{(n)}$ 趋近于零点. 这种现象就是 Gibbs 现象 (关于在 $[\delta, \pi/2]$ 的一致收敛性见 §2.5 定理 2.21).

以上对一个特殊的函数阐述了 Gibbs 现象, 对于一般情形可给出如下定义:

假设函数列 $\{f_n(x)\}$ 在 $(x_0, x_0 + h)$ 收敛于极限 $f(x), h > 0$ ，并且 $f(x_0 + 0)$ 存在。假若有以下不等式成立

$$
\varlimsup_ {\substack {n \to x _ {0} \\ x \to x _ {0} + 0}} f _ {n} (x) > f (x _ {0} + 0) \quad (\text{或} \varliminf_ {\substack {n \to x _ {0} \\ x \to x _ {0} + 0}} f _ {n} (x) <   f (x _ {0} + 0)),
$$

就说对于 $\{f_n(x)\}$ 在点 $x_0$ 的右半邻域有局部的 Gibbs 现象. 对于左半邻域有类似的定义.

定理2.17 设周期函数 $f(x)$ 在 $[- \pi, \pi]$ 上是有界变差函数。若 $[- \pi, \pi]$ 上的点 $x_0$ 是 $f$ 的间断点， $l = f(x_0 + 0) - f(x_0 - 0) \neq 0$ ，并且存在 $h > 0$ ，使 $f$ 在 $(x_0 - h, x_0)$ 及 $(x_0, x_0 + h)$ 连续，则 $f$ 的Fourier级数的部分和 $\{S_n(f, x)\}$ 在 $x_0$ 的邻域有局部Gibbs现象。

证明 不妨假定 $f(x_0) = \frac{1}{2} [f(x_0 + 0) + f(x_0 - 0)]$ 。作函数

$$
g (x) = f (x) - \frac {l}{2} \cdot \psi (x - x _ {0}),
$$

其中 $\psi$ 由(2.24)给出. 容易验证 $g(x)$ 在 $x_0$ 点连续, 从而 $g(x)$ 在 $(x_0 - h, x_0 + h)$ 连续, 并且在 $[- \pi, \pi]$ 上是有界变差函数. 因此, 根据 §2.5 定理 2.21, $S_n(g, x)$ 在 $(x_0 - h, x_0 + h)$ 内的闭区间上一致收敛. 因为

$$
S _ {n} (g, x) = S _ {n} (f, x) - \frac {l}{2} \cdot S _ {n} (\psi , x - x _ {0}),
$$

由 $\{S_n(\psi, x - x_0)\}$ 在 $x_0$ 的邻域有局部 Gibbs 现象我们可推知 $\{S_n(f, x)\}$ 在 $x_0$ 的邻域有局部 Gibbs 现象.

## § 2.5 算术平均求和法

在 §2.3, 我们指出了连续函数 $f$ 的 Fourier 级数可能在某些点发散, 并且知道存在可积函数, 其 Fourier 级数处处发散. 这样一来, 就有必要研究发散级数的求和法, 以便我们能按某种意义给出一些发散级数的和. 本书只介绍对 Fourier 级数特别有意义的两种求和法: 算术平均求和法及 Abel 求和法.

本节介绍算术平均求和法. 设给定序列 $S_{0}, S_{1}, \cdots, S_{n}, \cdots$ ，考虑其算术平均

$$
\sigma_ {n} = \frac {1}{n + 1} (S _ {0} + S _ {1} + \dots + S _ {n}) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} S _ {k},
$$

$$
n = 0, 1, 2, \dots .
$$

如果 $\sigma_{n} \to S (n \to \infty)$ , $S$ 是有限数, 就称序列 $\{S_{n}\}$ 可算术平均求和于 $S$ . 设 $S_{n}$ 是级数 $\sum_{k=0}^{\infty} u_{k}$ 的部分和, 若 $\sigma_{n} \to S$ , 就称此级数可算术平均求和于 $S$ . 这时, 记 $S_{n} = \sum_{k=0}^{n} u_{k}$ , 就有

$$
\begin{array}{l} \sigma_ {n} = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} (u _ {0} + \dots + u _ {k}) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} (n + 1 - k) u _ {k} \\ = \sum_ {k = 0} ^ {n} \left(1 - \frac {k}{n + 1}\right) u _ {k}. \tag {2.25} \\ \end{array}
$$

$$
S _ {n} - \sigma_ {n} = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} k u _ {k}. \tag {2.26}
$$

用数学分析的方法不难证明：若级数 $\sum_{k=0}^{\infty}u_{k}$ 收敛，即它的部分和 $S_{n}\rightarrow S(n\rightarrow\infty)$ ，则有 $\sigma_{n}\rightarrow S(n\rightarrow\infty)$ ，但逆命题一般不成立。例如，级数 $\sum_{k=0}^{\infty}(-1)^{k}$ 是发散的。因为当 $n=2j$ 时， $S_{n}=1$ ；当 $n=2j+1$ 时， $S_{n}=0,j=0,1,2,\cdots$ 。但容易算得：当 $n\rightarrow\infty$ 时， $\sigma_{n}\rightarrow\frac{1}{2}$ 。

下面考虑 Fourier 级数的算术平均求和. 由于 Fejer 对这个问题做了有成效的研究, 所以算术平均求和法称为 Fejer 求和法, 有时也称为 $(C,1)$ 求和法.

设 $f \in L(T)$ , 它的 Fourier 级数部分和是 $S_{n}(x) = \sum_{k=-n}^{n} c_{k} e^{ikx}$ , 其算术平均为

$$
\sigma_ {n} (x) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} S _ {k} (x) = \sum_ {k = - n} ^ {n} \left(1 - \frac {| k |}{n + 1}\right) c _ {k} \mathrm{e} ^ {\mathrm{i} k x}. \tag {2.27}
$$

由(2.10)得

$$
\sigma_ {n} (x) = \sigma_ {n} (f; x) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} (f * D _ {k}) (x)
$$

$$
\begin{array}{l} = \left(f * \frac {1}{n + 1} \sum_ {k = 0} ^ {n} D _ {k}\right) (x) = \left(f * K _ {n}\right) (x) \\ = \int_ {- \pi} ^ {\pi} f (x - t) K _ {n} (t) \mathrm{d} t, \tag {2.28} \\ \end{array}
$$

其中

$$
\begin{array}{l} K _ {n} (t) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} D _ {k} (t) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \frac {\sin \left(k + \frac {1}{2}\right) t}{2 \pi \sin \frac {t}{2}} \\ = \frac {1}{n + 1} \frac {1}{2 \pi \sin \frac {t}{2}} \sum_ {k = 0} ^ {n} \frac {\cos k t - \cos (k + 1) t}{2 \sin \frac {t}{2}} \\ = \frac {1}{n + 1} \frac {1 - \cos (n + 1) t}{4 \pi \left(\sin \frac {t}{2}\right) ^ {2}} \\ = \frac {1}{2 \pi (n + 1)} \left(\frac {\sin \frac {(n + 1) t}{2}}{\sin \frac {t}{2}}\right) ^ {2}. \tag {2.29} \\ \end{array}
$$

$K_{n}(t)$ 称为 Fejer 核. (2.28) 式右端的积分称为 $f(x)$ 的 Fejer 积分. $K_{n}(t)$ 以 $2\pi$ 为周期, 并具有以下性质:

(a) $K_{n}(t)\geqslant 0;\quad K_{n}(-t) = K_{n}(t).$   
(b) $\int_{-\pi}^{\pi} K_n(t) \, \mathrm{d}t = 1$ .   
(c) $|K_n(t)| \leqslant \frac{n+1}{2\pi}, \quad t > 0;$

$|K_{n}(t)|\leqslant\frac{A}{(n+1)t^{2}},\quad0<t\leqslant\pi,A$ 是常数.

性质(a)与(b)是显然的.(c)的第一部分由(2.29)中第一个等式以及 $\left|D_{k}(t)\right|\leqslant\frac{2k+1}{2\pi}$ 推得；第二部分由(2.29)及 $\sin t\geqslant\frac{2}{\pi}t\left(0\leqslant t\leqslant\frac{\pi}{2}\right)$ 推得。从性质(c)的第二部分可以得到：

$(c^{\prime})$ 对任意取定的 $\delta \in (0,\pi)$ ，令

$$
M _ {n} (\delta) = \sup _ {\delta \leqslant | t | \leqslant \pi} | K _ {n} (t) |,
$$

有 $\lim_{n\to\infty}M_n(\delta)=0.$

根据 $K_{n}(t)$ 的性质可以推导出以下定理：

定理 2.18(Fejer 定理) 设 $f \in L(T)$ .

(i) 在 $f$ 的连续点 $x$ 处, $f$ 的Fourier级数可算术平均求和于 $f(x)$ , 即

$$
\sigma_ {n} (x) \rightarrow f (x) \quad (n \rightarrow \infty);
$$

在 $f$ 的第一类间断点 $\pmb{x}$ 处

$$
\sigma_ {n} (x) \rightarrow \frac {1}{2} [ f (x + 0) + f (x - 0) ] \quad (n \rightarrow \infty).
$$

(ii) 设 $f$ 在 $(a, b)$ 上连续，则 $\sigma_{n}(x)$ 在 $(a, b)$ 内任一闭子区间上一致收敛于 $f(x)$ ；若 $f \in C(T)$ ，则 $\sigma_{n}(x)$ 在 $[- \pi, \pi]$ 上（在实轴上）一致收敛于 $f(x)$ .

证明 (i) 设 $x$ 是 $f$ 的第一类间断点, 令 $S = \frac{1}{2} [f(x + 0) + f(x - 0)]$ , 由性质(a), (b) 推知

$$
S = \int_ {- \pi} ^ {\pi} K _ {n} (t) S \mathrm{d} t = \int_ {0} ^ {\pi} K _ {n} (t) \cdot 2 S \mathrm{d} t,
$$

$$
\begin{array}{l} \sigma_ {n} (x) - S = \int_ {0} ^ {\pi} \left\{\left[ f (x + t) - f (x + 0) \right] \right. \\ + \left[ f (x - t) - f (x - 0) \right] \} \cdot K _ {n} (t) \mathrm{d} t, \\ \end{array}
$$

$$
\begin{array}{l} \left| \sigma_ {n} (x) - S \right| \leqslant \int_ {0} ^ {\pi} [ | f (x + t) - f (x + 0) | \\ + \left| f (x - t) - f (x - 0) \right| ] K _ {n} (t) \mathrm{d} t = I. \\ \end{array}
$$

任给 $\varepsilon > 0$ ，存在 $\delta > 0$ 足够小，使得当 $0 \leqslant t \leqslant \delta$ 时，

$$
\left| f (x + t) - f (x + 0) \right| <   \varepsilon ,
$$

$$
\left| f (x - t) - f (x - 0) \right| <   \varepsilon .
$$

取定这个 $\delta$ ，将 $I$ 写成

$$
I = \int_ {0} ^ {\pi} = \int_ {0} ^ {\delta} + \int_ {\delta} ^ {\pi} = I _ {1} + I _ {2},
$$

式中各积分的被积函数都与 $I$ 相同. 可得到

$$
\begin{array}{l} \left| I _ {1} \right| \leqslant 2 \varepsilon \int_ {0} ^ {\delta} K _ {n} (t) \mathrm{d} t \leqslant 2 \varepsilon \int_ {- \pi} ^ {\pi} K _ {n} (t) \mathrm{d} t = 2 \varepsilon , \\ \left| I _ {2} \right| \leqslant M _ {n} (\delta) \int_ {\delta} ^ {\pi} [ | f (x + t) | + | f (x - t) | \\ + | f (x + 0) | + | f (x - 0) | ] \mathrm{d} t \\ \leqslant M _ {n} (\delta) \left\{2 \int_ {- \pi} ^ {\pi} | f (t) | \mathrm{d} t + \pi (| f (x + 0) | \right. \\ \left. + | f (x - 0) |\right) \Bigg \}. \\ \end{array}
$$

由 $(\mathbf{c}^{\prime})$ 得知当 $n\to \infty$ 时 $I_{2}\rightarrow 0.$ 综合可得当 $n\to \infty$ 时 $I\to 0$ ，即

$$
\lim _ {n \rightarrow \infty} \sigma_ {n} (x) = S.
$$

若 $f$ 在 $x$ 点连续，取 $S = f(x)$ ，其证明与上面类似.

(ii) 设 $f$ 在 $(a, b)$ 连续，从而在 $(a, b)$ 的任一闭子区间上一致连续。设 $[\alpha, \beta] \subset (a, b)$ ，对任给 $\varepsilon > 0$ ，存在 $\delta > 0$ ，使得当 $|t| \leqslant \delta$ 时，

$$
\left| f (x \pm t) - f (x) \right| <   \varepsilon , \quad \forall x \in [ \alpha , \beta ].
$$

我们有

$$
\begin{array}{l} \left| \sigma_ {n} (x) - f (x) \right| \leqslant \int_ {- \pi} ^ {\pi} | f (x - t) - f (x) | K _ {n} (t) d t \\ = \int_ {| t | <   \delta} | f (x - t) - f (x) | K _ {n} (t) d t \\ + \int_ {\delta \leqslant | t | \leqslant \pi} | f (x - t) - f (x) | K _ {n} (t) d t \\ = I _ {1} + I _ {2}, \\ \end{array}
$$

于是对一切 $x \in [\alpha, \beta]$ , 有

$$
\left| I _ {1} \right| \leqslant \varepsilon \int_ {| t | <   \delta} K _ {n} (t) \mathrm{d} t \leqslant \varepsilon .
$$

令 $M = \max_{a\leqslant x\leqslant \beta}|f(x)|$ ，则

$$
\left| I _ {2} \right| \leqslant M _ {n} (\delta) \left\{\int_ {- \pi} ^ {\pi} | f (t) | \mathrm{d} t + 2 \pi M \right\}.
$$

从而根据 $(\mathbf{c}^{\prime})$ ，当 $n\to \infty$ 时，关于 $x\in [\alpha ,\beta ]$ 一致地有 $I_{2}$ 趋向于零.

综合起来得知 $\sigma_{n}(x)$ 在 $[\alpha, \beta]$ 上一致收敛于 $f(x)$ . 设 $f \in C(T)$ , 由前面讨论显然推得所述结论.

推论 2.19(Weierstrass 第二定理) 任一连续周期函数, 可用三角多项式一致逼近.

证明 设 $f \in C(T)$ , 由定理2.18的(ii)可知 $\sigma_{n}(x)$ 在 $[- \pi, \pi]$ 上一致收敛于 $f(x)$ . 而 $\sigma_{n}(x)$ 是由三角多项式作算术平均所得, 所以它也是三角多项式.

为了从 Fejer 定理导出关于 Fourier 级数一致收敛性的推论，先证明以下定理.

定理 2.20(Hardy 定理) 若级数 $\sum_{n=0}^{\infty}u_{n}$ 可算术平均求和于有限值 S，并设

$$
\left| u _ {n} \right| \leqslant A / n \quad (n = 1, 2, \dots),
$$

其中 $A$ 是常数，则 $\sum_{n=0}^{\infty} u_n$ 收敛于 $S$ .

证明 我们考虑如下表示式

$$
\sigma_ {n, k} = \frac {1}{k} (S _ {n + 1} + \dots + S _ {n + k}), \tag {2.30}
$$

它叫做延迟的算术平均, 其中 $k$ 是非负整数. 不难用算术平均来表示它:

$$
\begin{array}{l} \sigma_ {n, k} = \frac {1}{k} \left[ (S _ {0} + \dots + S _ {n + k}) - (S _ {0} + \dots + S _ {n}) \right] \\ = \frac {1}{k} [ (n + k + 1) \sigma_ {n + k} - (n + 1) \sigma_ {n} ] \\ = \frac {(n + 1)}{k} (\sigma_ {n - k} - \sigma_ {n}) + \sigma_ {n + k}. \tag {2.31} \\ \end{array}
$$

如果我们取正整数列 $k_{n}$ ，使得当 $n \to \infty$ 时， $\frac{n + 1}{k_n}$ 有界，则根据(2.31)，由 $\sigma_{n} \to S$ 便推知 $\sigma_{n, k_{n}} \to S$ 。此外，(2.30)式可化为

$$
\sigma_ {n, k} = S _ {n} + \frac {1}{k} \left[ \left(S _ {n + 1} - S _ {n}\right) + \dots + \left(S _ {n + k} - S _ {n}\right) \right]
$$

$$
\begin{array}{l} = S _ {n} + \frac {1}{k} \sum_ {j = 1} ^ {k} \left(u _ {n + 1} + \dots + u _ {n + j}\right) \\ = S _ {n} + \frac {1}{k} \sum_ {j = 1} ^ {k} (k - j + 1) u _ {n + j}, \\ \end{array}
$$

从而

$$
\left| \sigma_ {n, k} - S _ {n} \right| \leqslant \sum_ {j = 1} ^ {k} \left| u _ {n + j} \right| \leqslant \frac {k}{n + 1} A. \tag {2.32}
$$

对于任意给定的 $\varepsilon > 0$ ，我们取 $k = k_n = [\varepsilon(n + 1)]$ ，其中 $[x]$ 表示 $x$ 的整数部分。必存在足够大的 $n_0$ ，使当 $n \geqslant n_0$ 时， $\frac{n + 1}{k_n}$ 有界（因为 $[x] \geqslant x - 1)$ ）。如前所述，可推知 $\sigma_{n, k_n} \to S (n \to \infty)$ 。而由(2.32)式可推得

$$
\left| \sigma_ {n, k _ {n}} - S _ {n} \right| \leqslant A \varepsilon \quad (n \geqslant n _ {0}).
$$

综合这两个事实,便得 $\lim_{n\to\infty}S_n=S.$

定理 2.21(Dirichlet-Jordan) 设 $f(x)$ 以 $2\pi$ 为周期，并且在 $[- \pi, \pi]$ 是有界变差的.

(i) 设 $f$ 在 $(a, b)$ 上连续，则在 $(a, b)$ 内任一闭子区间上， $S_{n}(f, x)$ 一致收敛于 $f(x)$ ；

(ii) 部分和 $S_{n}(f, x)$ 一致有界，即有常数 $M$ ，使

$$
\left| S _ {n} (f, x) \right| \leqslant M, \quad x \in [ - \pi , \pi ], n = 0, 1, 2, \dots .
$$

证明 (1) 根据定理 2.8 知

$$
\left| c _ {k} \right| \leqslant \frac {1}{4 | k |} V (f) = \frac {A}{| k |}.
$$

于是由定理 2.18 的(ii)，以及定理 2.20 中的(2.31)式与(2.32)式，便可推得结论.

(ii) 因为 $f$ 有界, 由 $\sigma_{n}(x) = (f * K_{n})(x)$ 及 $K_{n}(t)$ 满足条件 (a), (b), 便可推知 $\sigma_{n}(x)$ 一致有界. 由 $|c_{k}| \leqslant A / |k|$ , 再用 (2.27) 式就推知 $S_{n}(x)$ 一致有界.

在实变函数理论中, 我们知道, 设 $f \in L(a, b)$ , 若对 $x_0 \in (a, b)$ , 有

$$
\lim _ {h \rightarrow 0} \frac {1}{h} \int_ {0} ^ {h} | f (x _ {0} + t) - f (x _ {0}) | \mathrm{d} t = 0 \tag {2.33}
$$

成立, 就称 $x_0$ 是 $f$ 的Lebesgue点, 并知可积函数在 $(a, b)$ 中几乎一切点是Lebesgue点. 利用这一概念, 可得到Fejer求和的进一步结果.

定理 2.22(Lebesgue) 设 $f \in L(T)$ ，则

(1) 在 $f$ 的Lebesgue点 $x_0$ 处， $f$ 的Fourier级数可算术平均求和于 $f(x_0)$ ，即

$$
\lim _ {n \rightarrow \infty} \sigma_ {n} (x _ {0}) = f (x _ {0});
$$

(11) $f$ 的Fourier级数几乎处处可算术平均求和于 $f(x)$ .

证明 (i) 设 $x_0$ 是 $f$ 的Lebesgue点，记

$$
\psi_ {x _ {0}} (t) = f \left(x _ {0} + t\right) + f \left(x _ {0} - t\right) - 2 f \left(x _ {0}\right).
$$

由(2.33)推知

$$
\frac {1}{h} \int_ {0} ^ {h} | \psi_ {x _ {0}} (t) | \mathrm{d} t = o (1) \quad (h \rightarrow + 0). \tag {2.34}
$$

于是

$$
\begin{array}{l} \sigma_ {n} \left(x _ {0}\right) - f \left(x _ {0}\right) = \left(f * K _ {n}\right) \left(x _ {0}\right) - f \left(x _ {0}\right) \\ = \int_ {- \pi} ^ {\pi} K _ {n} (t) [ f (x _ {0} - t) - f (x _ {0}) ] d t = \int_ {0} ^ {\pi} K _ {n} (t) \psi_ {x _ {0}} (t) d t \\ = \int_ {0} ^ {\frac {1}{n}} K _ {n} (t) \psi_ {x _ {0}} (t) \mathrm{d} t + \int_ {\frac {1}{n}} ^ {\pi} K _ {n} (t) \psi_ {x _ {0}} (t) \mathrm{d} t \\ = I _ {n} + J _ {n}. \\ \end{array}
$$

将 $K_{n}(t)$ 的性质(c)改写成

$$
\left| K _ {n} (t) \right| \leqslant n, \quad \left| K _ {n} (t) \right| \leqslant \frac {A}{n t ^ {2}} \quad (n \geqslant 1, 0 <   t \leqslant \pi). \tag {2.35}
$$

我们用(2.35)的第一式及(2.34)，得

$$
\left| I _ {n} \right| \leqslant n \int_ {0} ^ {\frac {1}{n}} \left| \psi_ {x _ {0}} (t) \right| \mathrm{d} t \rightarrow 0 \quad (n \rightarrow \infty).
$$

令 $\Phi(t) = \int_{0}^{t} |\psi_{x_0}(u)| \mathrm{d}u$ ，用(2.35)的第二式，然后作分部积分，得到

$$
\begin{array}{l} \left| J _ {n} \right| \leqslant \frac {A}{n} \int_ {\frac {1}{n}} ^ {\pi} \frac {\left| \psi_ {x _ {0}} (t) \right|}{t ^ {2}} d t \\ = \frac {A}{n} \left[ \frac {\Phi (\pi)}{\pi^ {2}} - \frac {\Phi \left(\frac {1}{n}\right)}{\left(\frac {1}{n}\right) ^ {2}} \right] + \frac {2 A}{n} \int_ {1 / n} ^ {\pi} \frac {\Phi (t)}{t ^ {3}} d t. \\ \end{array}
$$

用(2.34)可推知上式右端的第一部分趋向于零(当 $n\to\infty$ 时).

下面证明第二部分也趋向于零. 由(2.34)知, 对任给的 $\varepsilon > 0$ , 存在充分小的 $\delta > 0$ , 使得当 $0 < t \leqslant \delta$ 时, 有

$$
0 \leqslant \frac {\Phi (t)}{t} <   \varepsilon .
$$

把积分分成两部分，

$$
\frac {1}{n} \int_ {\frac {1}{n}} ^ {\pi} \frac {\Phi (t)}{t ^ {3}} \mathrm{d} t = \frac {1}{n} \int_ {\frac {1}{n}} ^ {\delta} \frac {\Phi (t)}{t ^ {3}} \mathrm{d} t + \frac {1}{n} \int_ {\delta} ^ {\pi} \frac {\Phi (t)}{t ^ {3}} \mathrm{d} t,
$$

分别估计得

$$
\begin{array}{l} \frac {1}{n} \int_ {\frac {1}{n}} ^ {\delta} \frac {\Phi (t)}{t ^ {3}} \mathrm{d} t \leqslant \frac {\varepsilon}{n} \int_ {\frac {1}{n}} ^ {\delta} \frac {d t}{t ^ {2}} = \frac {\varepsilon}{n} (n - \frac {1}{\delta}) \leqslant \varepsilon , \\ \frac {1}{n} \int_ {\delta} ^ {\pi} \frac {\Phi (t)}{t ^ {3}} \mathrm{d} t \leqslant \frac {1}{n} \left(\frac {1}{\delta^ {3}} \int_ {\delta} ^ {\pi} \Phi (t) \mathrm{d} t\right). \tag {2.36} \\ \end{array}
$$

取定 $\delta > 0$ ，(2.36)式右端括号内为固定值，当 $n$ 充分大，可使得 (2.36)式右端小于 $\varepsilon$ . 综合以上所述，即得

$$
\lim _ {n \rightarrow \infty} [ \sigma_ {n} (x _ {0}) - f (x _ {0}) ] = 0.
$$

(ii) 由于 $f \in L(T)$ , 从而几乎所有的点是 $f$ 的Lebesgue点, 根据(1)便知

$$
\lim _ {n \rightarrow \infty} \sigma_ {n} (x) = f (x), \quad \text { a.e. }.
$$

根据上一章的定理1.12，可以得到关于按 $L^p$ 模收敛的如下

结果.

定理2.23 设 $f \in L^{p}(T), 1 \leqslant p < \infty$ ，则 $f$ 的Fourier级数部分和的算术平均按 $L^{p}$ 模收敛于 $f(x)$ ，即

$$
\lim _ {n \rightarrow \infty} \| f - \sigma_ {n} (f) \| _ {p} = 0.
$$

注 $f \in L^{p}(\pmb{T})$ 是指 $f(x)$ 以 $2\pi$ 为周期，并且 $|f|^{p} \in L(\pmb{T})$ .

## § 2.6 Abel 求和法与 Poisson 积分

本节介绍 Abel 求和法. 设给定级数 $\sum_{k=0}^{\infty} u_{k}$ ，假定幂级数

$$
A (r) = \sum_ {k = 0} ^ {\infty} u _ {k} r ^ {k} \tag {2.37}
$$

在 $0 \leqslant r < 1$ 是收敛的, 如果当 $r \to 1 - 0$ 时, $A(r)$ 有极限 $S$ , 就称级数 $\sum_{k=0}^{\infty} u_k$ 可 Abel 求和于 $S$ .

先讨论级数收敛与 Abel 可求和的关系,以及算术平均可求和与 Abel 可求和的关系.

定理2.24 若级数 $\sum_{k=0}^{\infty} u_k$ 收敛于 $S$ , 则它必可Abel求和于 $S$ .

证明 记 $S_{n} = \sum_{k=0}^{n} u_{k} (n \geqslant 0)$ , $S_{-1} = 0$ . 由假定 $\lim_{n \to \infty} S_{n} = S, S$ 为有限数. 易知(2.37)中的级数在 $0 \leqslant r < 1$ 处收敛. 可以证明有以下等式成立: 对于 $0 \leqslant r < 1$ ,

$$
A (r) = \sum_ {n = 0} ^ {\infty} u _ {n} r ^ {n} = (1 - r) \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n}. \tag {2.38}
$$

这是因为 $\{S_n\}$ 为有界列，从而(2.38)式右边的级数收敛，我们有

$$
\begin{array}{l} \sum_ {n = 0} ^ {\infty} u _ {n} r ^ {n} = \sum_ {n = 0} ^ {\infty} (S _ {n} - S _ {n - 1}) r ^ {n} = \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n} - \sum_ {n = 1} ^ {\infty} S _ {n - 1} r ^ {n} \\ = \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n} - \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n + 1} = (1 - r) \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n}. \\ \end{array}
$$

用此式以及等式 $\sum_{n=0}^{\infty} r^n = \frac{1}{1 - r} (0 \leqslant r < 1)$ , 可得

$$
A (r) - S = (1 - r) \sum_ {n = 0} ^ {\infty} (S _ {n} - S) r ^ {n}.
$$

由于 $S_{n} \rightarrow S$ ，于是对任给 $\varepsilon > 0$ ，存在正整数 $N$ ，使得当 $n > N$ 时，有 $|S_{n} - S| < \varepsilon$ 。固定这个 $N$ ，将上述级数分成两部分

$$
\begin{array}{l} A (r) - S = (1 - r) \sum_ {n = 0} ^ {N} (S _ {n} - S) r ^ {n} + (1 - r) \sum_ {n = N + 1} ^ {\infty} (S _ {n} - S) r ^ {n} \\ = I _ {1} + I _ {2}, \\ \end{array}
$$

可得

$$
\begin{array}{l} \left| I _ {2} \right| \leqslant \varepsilon (1 - r) \sum_ {n = N + 1} ^ {\infty} r ^ {n} \leqslant \varepsilon (1 - r) \sum_ {n = 0} ^ {\infty} r ^ {n} = \varepsilon , \\ \left| I _ {1} \right| \leqslant (1 - r) \sum_ {n = 0} ^ {N} \left| S _ {n} - S \right|. \tag {2.39} \\ \end{array}
$$

这里 N 固定, 令 $r \to 1 - 0$ , (2.39) 式右端趋向于零. 从而便得

$$
\lim _ {r \rightarrow 1 - 0} A (r) = S. \quad \text { I   I }
$$

定理2.25 若级数 $\sum_{k=0}^{\infty} u_k$ 可算术平均求和于 $S$ , 则它必可Abel求和于 $S$ .

证明 由幂级数的性质知, 当 $0 \leqslant r < 1$ 时有

$$
\sum_ {n = 0} ^ {\infty} r ^ {n} = \frac {1}{1 - r}, \quad \frac {1}{(1 - r) ^ {2}} = \sum_ {n = 1} ^ {\infty} n r ^ {n - 1} = \sum_ {n = 0} ^ {\infty} (n + 1) r ^ {n}. \tag {2.40}
$$

按假定 $\sigma_{n} = \frac{1}{n + 1}\sum_{k = 0}^{n}S_{k}\rightarrow S(n\rightarrow \infty)$ ，由此得

$$
\begin{array}{l} \frac {S _ {n}}{n} = \frac {1}{n} [ (n + 1) \sigma_ {n} - n \sigma_ {n - 1} ] \\ = \left(\frac {n + 1}{n}\right) \sigma_ {n} - \sigma_ {n - 1} \rightarrow 0 (n \rightarrow \infty), \\ \end{array}
$$

即 $S_{n} = o(n)$ .令

$$
S _ {n} ^ {(1)} = \sum_ {k = 0} ^ {n} S _ {k} = (n + 1) \sigma_ {n}.
$$

根据 $\sigma_{n}$ 收敛及 $S_{n} = o(n)$ ，用(2.40)的第二式，可推知级数 $\sum_{n=0}^{\infty} S_{n} r^{n}$ 及 $\sum_{n=0}^{\infty} S_{n}^{(1)} r^{n}$ 收敛 $(0 \leqslant r < 1)$ . 我们用(2.38)及其证明方法可得

$$
\begin{array}{l} \sum_ {n = 0} ^ {\infty} u _ {n} r ^ {n} = (1 - r) \sum_ {n = 0} ^ {\infty} S _ {n} r ^ {n} = (1 - r) ^ {2} \sum_ {n = 0} ^ {\infty} S _ {n} ^ {(1)} r ^ {n} \\ = (1 - r) ^ {2} \sum_ {n = 0} ^ {\infty} (n + 1) \sigma_ {n} r ^ {n}. \\ \end{array}
$$

再用(2.40)的第二式便得

$$
\begin{array}{l} A (r) - S = \sum_ {n = 0} ^ {\infty} u _ {n} r ^ {n} - S \\ = (1 - r) ^ {2} \sum_ {n = 0} ^ {\infty} (n + 1) (\sigma_ {n} - S) r ^ {n}. \tag {2.41} \\ \end{array}
$$

用定理 2.24 中类似的方法, 可由此式证明

$$
\lim _ {r \rightarrow 1 - 0} A (r) = S, \quad \text { I }
$$

注意, 定理的逆命题不成立. 由 Abel 可求和不能断定算术平均可求和. 例如讨论级数

$$
1 - 2 + 3 - 4 + \dots = \sum_ {n = 0} ^ {\infty} (- 1) ^ {n} (n + 1).
$$

计算得到

$$
S _ {2 m} = m + 1, \quad S _ {2 m + 1} = - (m + 1),
$$

$$
\sigma_ {2 m + 1} = 0, \quad \sigma_ {2 m} = \frac {m + 1}{2 m + 1}.
$$

可见 $\sigma_{n}$ 不收敛，即级数不是算术平均可求和的.但它却Abel可求和：

$$
A (r) = \sum_ {n = 0} ^ {\infty} (- 1) ^ {n} (n + 1) r ^ {n} = \frac {1}{(1 + r) ^ {2}} \quad (0 \leqslant r <   1),
$$

得到 $\lim_{r\to 1 - 0}A(r) = 1 / 4.$ 可见Abel求和法可应用到更广泛的情形.

再看级数 $1 + 1 + 1 + \dots, A(r) = \sum_{n=0}^{\infty} r^n = \frac{1}{1 - r} \to \infty (r \to 1 - 0)$ ，这个级数不是Abel可求和的。

下面考虑Fourier级数的Abel求和，它与调和函数有密切的联系.设 $f\in L(T)$

$$
f (x) \sim \frac {1}{2} a _ {0} + \sum_ {n = 1} ^ {\infty} (a _ {n} \cos n x + b _ {n} \sin n x),
$$

考察 Abel 平均, 即

$$
f (r, x) = \frac {1}{2} a _ {0} + \sum_ {n = 1} ^ {\infty} (a _ {n} \cos n x + b _ {n} \sin n x) r ^ {n}, \tag {2.42}
$$

此级数在 $0 \leqslant r < 1$ 显然收敛. 如果用复的形式 $f(x) \sim \sum_{n=-\infty}^{\infty} c_n e^{inx}$ , 则(2.42)式化为

$$
f (r, x) = \sum_ {n = - \infty} ^ {\infty} c _ {n} \mathrm{e} ^ {i n x} r ^ {| n |}. \tag {2.43}
$$

把 $a_{n}, b_{n}$ 的表示式(1.5)，(1.6)代入(2.42)，得

$$
\begin{array}{l} f (r, x) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (t) \mathrm{d} t + \sum_ {n = 1} ^ {\infty} r ^ {n} \cdot \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \cos n (x - t) \mathrm{d} t \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \left[ \frac {1}{2} + \sum_ {n = 1} ^ {\infty} r ^ {n} \cos n (x - t) \right] d t \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) P (r, x - t) \mathrm{d} t, \tag {2.44} \\ \end{array}
$$

其中

$$
P (r, t) = \frac {1}{2} + \sum_ {n = 1} ^ {\infty} r ^ {n} \cos n t
$$

叫做 Poisson 核, $f(r,x)$ 叫做 f 的 Poisson 积分.

由观察得知 $P(r,t)$ 是以下级数的实部：令 $z=re^{u}$ ,

$$
\begin{array}{l} \frac {1}{2} + \sum_ {n = 1} ^ {\infty} r ^ {n} (\cos n t + 1 \sin n t) = \frac {1}{2} + \sum_ {n = 1} ^ {\infty} z ^ {n} = \frac {1}{2} + \frac {z}{1 - z} \\ = \frac {1}{2} \frac {1 + z}{1 - z} = \frac {1}{2} \frac {1 + r e ^ {u}}{1 - r e ^ {u}} = \frac {1}{2} \frac {1 - r ^ {2} + i 2 r \sin t}{1 - 2 r \cos t + r ^ {2}}, \tag {2.45} \\ \end{array}
$$

由此算得

$$
\begin{array}{l} P (r, t) = \frac {1}{2} \frac {1 - r ^ {2}}{1 - 2 r \cos t + r ^ {2}} \\ = \frac {1}{2} \frac {1 - r ^ {2}}{(1 - r) ^ {2} + 4 r \sin^ {2} \frac {t}{2}}. \tag {2.46} \\ \end{array}
$$

根据定理 2.25, 可由定理 2.18 及定理 2.22 推出以下结论:

定理2.26 设 $f \in L(T)$ , 则

(1) $f$ 的 Fourier 级数在 $f$ 的连续点 $x$ 处, 可 Abel 求和于 $f(x)$ ; 在 $f$ 的第一类间断点 $x$ 处, 可 Abel 求和于

$$
\frac {1}{2} [ f (x + 0) + f (x - 0) ].
$$

(ii) 设 $f$ 在 $(a, b)$ 连续，则在 $(a, b)$ 内任一闭区间 $[\alpha, \beta]$ 上， $f(r, x)$ 一致收敛于 $f(x)$ （当 $r \to 1 - 0$ 时）.

为了证明这里的(ii)，只要注意由(2.41)有

$$
f (r, x) - f (x) = (1 - r) ^ {2} \sum_ {n = 0} ^ {\infty} (n + 1) [ \sigma_ {n} (x) - f (x) ] r ^ {n},
$$

再由定理 2.18 的(ii)便可得结论.

定理2.27 设 $f \in L(T)$ , 则

(1) 在 $f$ 的Lebesgue点 $\pmb{x}$ 处， $f$ 的Fourier级数可Abel求和于 $f(x)$ ；  
(ii) $f$ 的Fourier级数几乎处处可Abel求和于 $f(x)$ .

上述两个定理也可以利用下面叙述的 Poisson 核的性质直接证明, 其证明与定理 2.18 及定理 2.22 类似.

Poisson 核 $P(r,t)$ 是关于 t 的周期函数, 具有以下性质:

(a) $P(r,t)\geqslant 0;P(r, - t) = P(r,t);$   
(b) $\frac{1}{\pi}\int_{-\pi}^{\pi}P(r,t)\mathrm{d}t = 1;$   
(c) $P(r,t)\leqslant \frac{1}{1 - r}, P(r,t)\leqslant A\frac{1 - r}{rt^2}$ $(0 <   r <   1,|t|\leqslant \pi)$

根据定理 1.12, 可得到关于按 $L^{p}$ 模可求和的论断.

定理2.28 设 $f \in L^{p}(\pmb{T}), 1 \leqslant p < \infty$ ，则 $f$ 的Fourier级数的

Abel 平均按 $L^p$ 模收敛于 $f(x)$ , 即

$$
\| f * \frac {1}{\pi} P _ {r} - f \| _ {p} \longrightarrow 0 (r \rightarrow 1 - 0),
$$

这里记 $P_{r}(t) = P(r,t)$

下面讨论 Poisson 积分与调和函数的联系.

设实值函数 $f \in L(T)$ , 研究幂级数

$$
c _ {0} + 2 \sum_ {n = 1} ^ {\infty} c _ {n} z ^ {n} = \frac {1}{2} a _ {0} + \sum_ {n = 1} ^ {\infty} (a _ {n} - \mathrm{i} b _ {n}) z ^ {n}, \tag {2.47}
$$

它的系数所含的 $c_{0}, c_{n}, a_{0}, a_{n}, b_{n} (n = 1,2,\dots)$ 是 $f$ 的Fourier系数. 易知它在 $|z| < 1$ 收敛，记其和函数为 $F(z)$ ，则知 $F(z)$ 在单位圆 $|z| < 1$ 内解析. 令 $z = r e^{i x} (0 \leqslant r < 1)$ ，代入(2.47)便可得知 $f$ 的Poisson积分是 $F(z)$ 的实部. 若记

$$
F (z) = f (r, x) + \mathrm{i} v (r, x),
$$

则它的虚部为

$$
v (r, x) = \sum_ {n = 1} ^ {\infty} (- b _ {n} \cos n x + a _ {n} \sin n x) r ^ {n}. \tag {2.48}
$$

由此可知在单位圆内，解析函数 $F(z)$ 的实部 $f(r, x)$ 与虚部 $v(r, x)$ 都是调和函数.

定理2.26表明：若在单位圆周 $z = \mathrm{e}^{\mathrm{i}x}$ 上，给定函数 $f\in C(T)$ 则存在单位圆内的调和函数

$$
u (r \mathrm{e} ^ {\mathrm{i} x}) = f (r, x) = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) P (r, x - t) \mathrm{d} t,
$$

它以 $u(\mathrm{e}^{\mathrm{i}x}) = f(x)$ 为（圆周上的）边值. 根据定理2.27，若 $f \in L(T)$ ，则在几乎一切的 $x$ 上， $u(re^{\mathrm{i}x}) = f(r, x)$ 的径向极限为 $f(x)$ ，即

$$
\lim _ {r \rightarrow 1 - 0} u (r e ^ {i x}) = f (x).
$$

还可以进一步证明：在几乎一切的 $x$ 上， $u(re^{1x})$ 的非切向极限为 $f(x)$ （证明省略，参看河田龍夫[1]中的定理7.3.2）.

级数(2.47)的虚部 $v(r,x)$ 可以改写成

$$
\begin{array}{l} v (r, x) = \sum_ {n = 1} ^ {\infty} r ^ {n} \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \sin n (x - t) d t \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \sum_ {n = 1} ^ {\infty} r ^ {n} \sin n (x - t) d t \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) Q (r, x - t) \mathrm{d} t, \tag {2.49} \\ \end{array}
$$

其中 $0 \leqslant r < 1$

$$
Q (r, t) = \sum_ {n = 1} ^ {\infty} r ^ {n} \sin n t = \frac {r \sin t}{1 - 2 r \cos t + r ^ {2}}, \tag {2.50}
$$

上式的最后等式是由(2.45)算得的.

上述 $Q(r, t)$ 称为共轭 Poisson 核, $v(r, x)$ 称为 $f$ 的共轭 Poisson 积分. 在单位圆周 $r = 1$ 上, 级数 (2.48) 化为

$$
\sum_ {n = 1} ^ {\infty} \left(- b _ {n} \cos n x + a _ {n} \sin n x\right), \tag {2.51}
$$

它称为级数(1.7)的共轭级数. 关于共轭级数在第四章将进一步讨论.

## § 2.7 $L^2$ 中函数的 Fourier 级数

$L^2 (T)$ 是Hilbert空间，它是 $L(T)$ 的子空间.根据定理1.1可知，三角函数系是 $L^2 (T)$ 中的完全正交系.本节讨论 $L^2 (T)$ 中函数的Fourier级数，将证明 $L^2$ 函数的Fourier级数部分和按 $L^2$ 模收敛于函数自身，并且有Parseval等式成立.还将进一步导出对 $L(T)$ 中函数的Fourier级数有逐项积分公式成立.

定理2.29(Bessel不等式）设 $f\in L^2 (T)$ ，则有以下Bessel不等式成立

$$
\sum_ {n = - \infty} ^ {\infty} \left| c _ {n} \right| ^ {2} \leqslant \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f (x) | ^ {2} \mathrm{d} x, \tag {2.52}
$$

其中 $\{c_n\}$ 是 $f$ 的Fourier系数.

证明 对于部分和 $S_{n}(x) = \sum_{k = -n}^{n}c_{k}\mathrm{e}^{\mathrm{i}k\tau}$ ，有

$$
\begin{array}{l} 0 \leqslant \int_ {- \pi} ^ {\pi} | f (x) - S _ {n} (x) | ^ {2} \mathrm{d} x \\ = \int_ {- \pi} ^ {\pi} [ f (x) - \sum_ {k = - n} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x} ] [ \overline {{f (x)}} - \sum_ {k = - h} ^ {h} \overline {{c _ {k}}} \mathrm{e} ^ {- \mathrm{i} k x} ] \mathrm{d} x \\ = \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x - 2 \pi \sum_ {k = - n} ^ {n} c _ {k} \overline {{{c _ {k}}}} - 2 \pi \sum_ {k = - n} ^ {n} \overline {{{c _ {k}}}} c _ {k} + 2 \pi \sum_ {k = - n} ^ {n} c _ {k} \overline {{{c _ {k}}}} \\ = \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x - 2 \pi \sum_ {k = - n} ^ {n} \left| c _ {k} \right| ^ {2}. \tag {2.53} \\ \end{array}
$$

移项之后,得到

$$
\sum_ {k = - n} ^ {n} \left| c _ {k} \right| ^ {2} \leqslant \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x.
$$

令 $n \to \infty$ ，便得到(2.52).

定理2.30 设 $f \in L^{2}(T)$ ,

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k x}, \quad S _ {n} (x) = \sum_ {k = - n} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

则有

$$
\lim _ {n \rightarrow \infty} \| f - S _ {n} \| _ {2} = \lim _ {n \rightarrow \infty} \left(\int_ {- \pi} ^ {\pi} | f (x) - S _ {n} (x) | ^ {2} \mathrm{d} x\right) ^ {1 / 2} = 0, \tag {2.54}
$$

并且有以下 Parseval 等式成立

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f (x) | ^ {2} \mathrm{d} x = \sum_ {n = - \infty} ^ {\infty} | c _ {n} | ^ {2}. \tag {2.55}
$$

设 $g \in L^2(T)$ ,

$$
g (x) \sim \sum_ {k = - \infty} ^ {\infty} d _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

则有以下 Parseval 等式成立

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = \sum_ {n = - \infty} ^ {\infty} c _ {n} d _ {- n}, \tag {2.56}
$$

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \overline {{{g (x)}}} \mathrm{d} x = \sum_ {n = - \infty} ^ {\infty} c _ {n} \overline {{{d _ {n}}}}. \tag {2.57}
$$

若用实型Fourier级数，

$$
f (x) \sim \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x + b _ {n} \sin n x\right),
$$

$$
g (x) \sim \frac {a _ {0} ^ {\prime}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} ^ {\prime} \cos n x + b _ {n} ^ {\prime} \sin n x\right),
$$

则 Parseval 等式相应地化为以下形式

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} | f (x) | ^ {2} \mathrm{d} x = \frac {1}{2} | a _ {0} | ^ {2} + \sum_ {n = 1} ^ {\infty} (| a _ {n} | ^ {2} + | b _ {n} | ^ {2}), \tag {2.58}
$$

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = \frac {1}{2} a _ {0} a _ {0} ^ {\prime} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} a _ {n} ^ {\prime} + b _ {n} b _ {n} ^ {\prime}\right), \tag {2.59}
$$

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \overline {{{{g (x)}}}} \mathrm{d} x = \frac {1}{2} a _ {0} \overline {{{{a _ {0} ^ {\prime}}}}} + \sum_ {n = 1} ^ {\infty} (a _ {n} \overline {{{{a _ {n} ^ {\prime}}}}} + b _ {n} \overline {{{{b _ {n} ^ {\prime}}}}}). \tag {2.60}
$$

并且, Parseval 等式右端的级数绝对收敛.

证明 先证(2.54). 根据 Bessel 不等式(2.52), 可知它左端的级数收敛. 再由三角函数系的正交性, 得到

$$
\| S _ {n + p} - S _ {n} \| _ {2} ^ {2} = 2 \pi \sum_ {n + 1 \leqslant | k | \leqslant n + p} | c _ {k} | ^ {2} \rightarrow 0 \quad (n \rightarrow \infty),
$$

其中 $p$ 是任意非负整数. 这表明 $\{S_n\}$ 是 $L^2(T)$ 中的基本列. 因为空间 $L^2(T)$ 是完备的, 所以必存在 $\{S_n\}$ 的极限函数 $f_0 \in L^2(T)$ , 即

$$
\lim _ {n \rightarrow \infty} \| f _ {0} - S _ {n} \| _ {2} = 0. \tag {2.61}
$$

下面证明 $f_0$ 的Fourier系数也是 $\{c_k\}$ . 对任意固定的 $k$ , 取 $n \geqslant |k|$ ,

$$
\begin{array}{l} \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f _ {0} (x) \mathrm{e} ^ {- 1 k r} \mathrm{d} x \\ = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} S _ {n} (x) \mathrm{e} ^ {- 1 k x} \mathrm{d} x \\ + \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \left[ f _ {0} (x) - S _ {n} (x) \right] e ^ {- 1 k \tau} d x \\ = c _ {k} + I _ {n}, \tag {2.62} \\ \end{array}
$$

用 Schwarz 不等式得

$$
\begin{array}{l} \left| I _ {n} \right| \leqslant \frac {1}{2 \pi} \left(\int_ {- \pi} ^ {\pi} \left| f _ {0} (x) - S _ {n} (x) \right| ^ {2} \mathrm{d} x\right) ^ {1 / 2} \left(\int_ {- \pi} ^ {\pi} \left| \mathrm{e} ^ {- 1 k x} \right| ^ {2} \mathrm{d} x\right) ^ {1 / 2} \\ = \frac {1}{\sqrt {2 \pi}} \| f _ {0} - S _ {n} \| _ {2}, \\ \end{array}
$$

由(2.61)便知 $\lim_{n\to \infty}I_n = 0$ ，从而根据(2.62)式，令 $n\to \infty$ ，可得知 $f_0$ 的Fourier系数是 $\{c_k\}$ ，与 $f$ 的Fourier系数相同，根据推论1.2推知

$$
f (x) = f _ {0} (x), \quad \mathrm{a.e.}.
$$

于是由(2.61)式得知(2.54)式成立.

由(2.53)式, 令 $n \to \infty$ , 我们得到

$$
\int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x - 2 \pi \sum_ {k = - \infty} ^ {\infty} | c _ {k} | ^ {2} = \lim _ {n \rightarrow \infty} \| f - S _ {n} \| ^ {2} = 0,
$$

亦即(2.55)式成立.

对于 $f + g$ 以及 $f + \mathrm{i}g$ 作 Parseval 等式 (2.55)，通过左右相抵消以及两式各乘适当常数后相加等运算可以得到 (2.57) 式，再利用 $g = \overline{g}$ 和定理 2.1 的 (iii)，便由 (2.57) 式导出 (2.56) 式.

根据前面已证的结果,再利用实型 Fourier 系数与复型 Fourier 系数的关系式,便可得到(2.58),(2.59)与(2.60).由 Cauchy 不等式可推知 Parseval 等式右端的级数绝对收敛.

Parseval 等式是个很有用的工具, 下面的进一步讨论表明 Parseval 等式除对 $L^{2}$ 函数外, 还可在其他情形成立.

定理2.31 设 $f \in L(T), g(x)$ 是 $[- \pi, \pi]$ 上的有界变差函数且以 $2\pi$ 为周期，则 Parseval 等式 (2.56)，(2.57)，(2.59) 及 (2.60) 成立.

证明 只需证明(2.56)成立即可.设

$$
f (x) \sim \sum_ {k = - \infty} ^ {\infty} c _ {k} \mathrm{e} ^ {\mathrm{i} k x}, \quad g (x) \sim \sum_ {k = - \infty} ^ {\infty} d _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

则有

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) S _ {n} (g, x) \mathrm{d} x = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \left[ \sum_ {k = - n} ^ {n} d _ {k} \mathrm{e} ^ {\mathrm{i} k x} \right] \mathrm{d} x
$$

$$
\begin{array}{l} = \sum_ {k = - n} ^ {n} \mathrm{d} _ {k} \left[ \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {\mathrm{i} k x} \mathrm{d} x \right] \\ = \sum_ {k = - n} ^ {n} c _ {- k} d _ {k}. \tag{2.56} \\ \end{array}
$$

下面证明其左端的极限是 $\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)g(x)\mathrm{d}x.$

按定理的假定, $g(x)$ 是有界变差函数. 则它的间断点至多可列个. 根据 Jordan 判别法便知

$$
\lim _ {n \rightarrow \infty} S _ {n} (g, x) = g (x), \quad \text { a.e. }.
$$

而由定理2.21又知 $S_{n}(g,x)$ 一致有界，即

$$
\left| S _ {n} (g, x) \right| \leqslant M, \quad n = 1, 2, \dots , x \in [ - \pi , \pi ].
$$

于是，根据控制收敛定理便得到

$$
\lim _ {n \rightarrow \infty} \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) S _ {n} (g, x) \mathrm{d} x = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x.
$$

在(2.56')式中令 $n\to\infty$ ，并且在其右端作变换 $k'=-k$ ，就得到(2.56)式.

注意：在本定理的条件下，Parseval 等式右端的级数不一定绝对收敛.

定理2.32 设 $f \in L(T)$ , 对 $f$ 的Fourier级数进行逐项积分必有等式成立, 即

$$
\begin{array}{l} \int_ {0} ^ {t} f (x) \mathrm{d} x = \sum_ {n = - (\infty)} ^ {\infty} \int_ {0} ^ {t} c _ {n} \mathrm{e} ^ {\mathrm{i} n \tau} \mathrm{d} x \\ = c _ {0} t + 1 \sum_ {n \neq 0} \frac {\iota_ {n}}{n} - \mathrm{i} \sum_ {n \neq 0} \frac {\iota_ {n}}{n} \mathrm{e} ^ {\mathrm{i} n t}, \tag {2.63} \\ \end{array}
$$

并且上式右端的级数一致收敛.

证明 设 $t \in (0, \pi]$ , 令

$$
g (x) = \left\{ \begin{array}{l l} 1, & 0 <   x <   t, \\ 0, & x \in [ - \pi , \pi ] \backslash (0, t), \end{array} \right.
$$

g 的 Fourier 系数为

$$
d _ {n} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} g (x) \mathrm{e} ^ {- 1 n x} \mathrm{d} x = \frac {1}{2 \pi} \int_ {0} ^ {t} \mathrm{e} ^ {- 1 n x} \mathrm{d} x
$$

$$
= \left\{ \begin{array}{l l} \frac {1}{2 \pi} \frac {\mathrm{e} ^ {- \mathrm{i} n t} - 1}{- \mathrm{i} n}, & n \neq 0, \\ \frac {1}{2 \pi} t, & n = 0. \end{array} \right.
$$

设 $f(x)$ 的Fourier系数为 $\{c_n\}$ ，根据定理2.31，用(2.56)式，便得到

$$
\frac {1}{2 \pi} \int_ {0} ^ {t} f (x) \mathrm{d} x = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = \sum_ {n = - \infty} ^ {\infty} c _ {n} d _ {- n},
$$

将 $d_{n}$ 的表示式代入就可推知逐项积分公式(2.63)成立.

若 $t \in [-\pi, 0)$ , 类似可证. 对一般的积分区间 $[a, b]$ , 有类似的逐项积分公式成立.

注意： $f$ 的Fourier级数并不一定收敛，但逐项积分之后可得等式成立.

令 $\psi(t) = \int_{0}^{t} f(x) \, \mathrm{d}x - c_{0}t$ ，计算得知

$$
\psi (0) = 0, \quad \psi (2 \pi) = \int_ {0} ^ {2 \pi} f \mathrm{d} x - 2 \pi c _ {0} = 0,
$$

易见 $\psi$ 在 $[0,2\pi]$ 绝对连续，且 $\psi(0)=\psi(2\pi)$ ，有

$$
\psi^ {\prime} (x) = f (x) - c _ {0}, \quad \mathrm{a.e.}.
$$

从而知 $c_{k}(\psi^{\prime}) = c_{k}(k\neq 0)$ ，由定理2.1得知 $c_{k}(\psi) = c_{k} / \mathrm{i}k$ ， $k\neq 0$

$$
c _ {0} (\psi) = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} \psi (x) \mathrm{d} x = c _ {0} \pi - \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} x f (x) \mathrm{d} x.
$$

根据定理 2.21, 我们知道 $\psi$ 的 Fourier 级数一致收敛, 由此推知 (2.63) 右端的级数一致收敛.

对于以 $T$ 为周期的函数 $f(x)$ , 若 $f \in L^{2}(-T/2, T/2)$ , 则通过变量替换可把 Parseval 等式 (2.55) 转化为

$$
\frac {1}{T} \int_ {- T / 2} ^ {T / 2} | f (x) | ^ {2} \mathrm{d} x = \sum_ {k = - \infty} ^ {\infty} | c _ {k} | ^ {2}, \tag{2.55}
$$

其中

$$
c _ {k} = \frac {1}{T} \int_ {- T / 2} ^ {T / 2} f (x) \mathrm{e} ^ {- \mathrm{i} k \frac {2 \pi}{T} x} \mathrm{d} x.
$$

类似地可把(2.56)，(2.57)转化为对以 $T$ 为周期的函数的相应等式.

例1 设 $f(x) = \frac{1}{2} (\pi - x) (0 < x < 2\pi)$ . 由 §2.2 例2知 $f(x) \sim \sum_{k=1}^{\infty} \frac{\sin kx}{k}$ . 由 Parseval 等式(2.55)可得

$$
\frac {1}{\pi} \int_ {0} ^ {2 \pi} | f | ^ {2} \mathrm{d} x = \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}},
$$

而

$$
\begin{array}{l} \frac {1}{\pi} \int_ {0} ^ {2 \pi} | f | ^ {2} \mathrm{d} x = \frac {1}{\pi} \int_ {0} ^ {2 \pi} \frac {1}{4} (\pi - x) ^ {2} \mathrm{d} x \\ = \frac {1}{4 \pi} \left(- \frac {1}{3}\right) (\pi - x) ^ {3} \Bigg | _ {0} ^ {2 \pi} \\ = \frac {1}{1 2 \pi} (2 \pi^ {3}) = \frac {\pi^ {2}}{6}, \\ \end{array}
$$

由此得 $\sum_{n=1}^{(\infty)} \frac{1}{n^2} = \frac{\pi^2}{6}$ .

例2 设 $f(x) = |x|, x \in [-\pi, \pi]$ . 由 §2.1 例1知

$$
f (x) \sim \frac {\pi}{2} - \frac {4}{\pi} \sum_ {k = 1} ^ {\infty} \frac {\cos (2 k - 1) x}{(2 k - 1) ^ {2}}.
$$

根据 Jordan 判别法, 对于 x=0 有

$$
0 = \frac {\pi}{2} - \frac {4}{\pi} \sum_ {k = 1} ^ {\infty} \frac {1}{(2 k - 1) ^ {2}},
$$

得 $\sum_{k=1}^{\infty} \frac{1}{(2k - 1)^2} = \frac{\pi^2}{8}$ . 再用 Parseval 等式得

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x = \frac {\pi^ {2}}{2} + \frac {1 6}{\pi^ {2}} \sum_ {k = 1} ^ {\infty} \frac {1}{(2 k - 1) ^ {4}},
$$

但

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x = \frac {2}{\pi} \int_ {0} ^ {\pi} x ^ {2} \mathrm{d} x = \frac {2}{3} \pi^ {2},
$$

于是

$$
\sum_ {k = 1} ^ {\infty} \frac {1}{(2 k - 1) ^ {4}} = \left(\frac {2}{3} - \frac {1}{2}\right) \pi^ {2} \cdot \frac {\pi^ {2}}{1 6} = \frac {\pi^ {4}}{9 6}.
$$

在实际应用时,常遇到以下的函数类:

设 $-\infty < a < b < \infty$ ，如果满足

(i) f 在 $[a, b]$ 上除有限个点 $x_{1}, x_{2}, \cdots, x_{k}$ 外都连续；  
(ii) 在每个点 $x_{j}(j=1,2,\cdots,k)$ 上，f 的左、右极限 $f(x_{j}+0)$ 及 $f(x_{j}-0)$ 存在，若 $x_{j}$ 是端点 a（或 b）则只设右（或左）极限存在，就称 f 在 $[a,b]$ 上逐段连续，常记作 $f \in \mathrm{PC}(a,b)$ .

如果 $f$ 及其一阶导数 $f'$ 都在 $[a, b]$ 上逐段连续，就称 $f$ 在 $[a, b]$ 上逐段光滑，也记作 $f \in \mathrm{PS}(a, b)$ . 参见下图，图2.4是逐段光滑函数，而图2.5为非逐段光滑函数.

![](e7e8208d8160cc77cd079a320eb051d154602855d1c9082a9b994798a4f5e133.jpg)

<details>
<summary>text_image</summary>

Hand-drawn mathematical graph showing a piecewise function with x-axis and y-axis labeled, including a local minimum at origin and a peak near x=0.
</details>

图24

![](4d2b5434d4c1f787104e6f5734635c6dd2dbf24e3a1f512128a08d7d3dd369da.jpg)

<details>
<summary>text_image</summary>

Graph of a hyperbola with asymptotes and vertex at origin, labeled with x and y axes
</details>

图2.5

根据前面所讲的理论,可以得到以下结论.

定理2.33 设 $f$ 以 $2\pi$ 为周期, 连续, 并且逐段光滑, 则 $f$ 的Fourier级数在 $\pmb{R}$ 上绝对一致收敛于 $f(x)$ , 并且有常数 $C$ , 使得

$$
\| S _ {n} (f) - f \| _ {\infty} \leqslant C n ^ {- 1 / 2}.
$$

证明 由于 $f$ 以 $2\pi$ 为周期, 连续及逐段光滑, 可推知 $f$ 在 $[- \pi, \pi]$ 上绝对连续, 从而由定理1.1知

$$
\iota_ {k} (f ^ {\prime}) = \mathrm{i} k c _ {k} (f).
$$

从而对于 $n < m < \infty$ ，有

$$
\begin{array}{l} \left| S _ {n} (f, x) - S _ {m} (f, x) \right| \leqslant \sum_ {| k | > n} \left| c _ {k} (f) \right| = \sum_ {| k | > n} \left| \frac {1}{1 k} c _ {k} (f ^ {\prime}) \right| \\ \leqslant \left(\sum_ {| k | > n} \left| c _ {k} (f ^ {\prime}) \right| ^ {2}\right) ^ {1 / 2} \left(\sum_ {| k | > n} \frac {1}{k ^ {2}}\right) ^ {1 / 2} \\ \end{array}
$$

$$
\leqslant \left(\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f ^ {\prime} (x) | ^ {2} \mathrm{d} x\right) ^ {1 / 2} \cdot n ^ {- 1 / 2}. \tag {2.64}
$$

最后的不等式利用了Bessel不等式以及

$$
\sum_ {k = n + 1} ^ {\infty} \frac {1}{k ^ {2}} \leqslant \int_ {n} ^ {\infty} \frac {1}{x ^ {2}} \mathrm{d} x = \frac {1}{n}
$$

(由定理的假定可推知 $f' \in L^{2}[-\pi, \pi]$ ).

按定理的假定及推论2.14便知对每点 $x$ 有

$$
S _ {m} (f, x) \rightarrow f (x) \quad (m \rightarrow \infty).
$$

因此在(2.64)式中令 $m \to \infty$ 便得到对每点 $x$ ,

$$
\left| S _ {n} (f, x) - f (x) \right| \leqslant \left\| f ^ {\prime} \right\| _ {2} \cdot n ^ {- 1 / 2}.
$$

于是有

$$
\| S _ {n} (f) - f \| _ {\infty} \leqslant C \cdot n ^ {- \frac {1}{2}}.
$$

## § 2.8 应用与例

Fourier 级数与三角级数在许多方面都有应用,例如:

(1) 在逼近论中, 基本问题之一是用三角多项式来逼近函数. 如果所给定的函数连续, 可以用它的 Fourier 级数部分和的算术平均 $\sigma_{n}(x)$ 来一致逼近.  
(2) 在微分方程中, 常用 Fourier 级数方法来解常微分方程或偏微分方程.  
(3) 可利用 Fourier 级数的某些关系式(如: 收敛性, Parseval 等式等)来求一些数值级数的和.  
(4) 利用 Fourier 级数的性质证明某些不等式或恒等式.  
(5) 利用三角级数来构造某些具有特殊性质的函数,例如处处连续但处处不可微的 Weierstrass 函数.

§ 2.7 中已经给出利用 Fourier 级数求级数的和的例子(例 1 与例 2). 下面再给出若干应用 Fourier 级数的例子.

### 1. Wirtinger 不等式

对任意有界区间 $[a, b]$ ，若函数 $f \in C^1[a, b]$ 且满足 $f(a) = f(b) = 0$ ，则有Wirtinger不等式

$$
\int_ {a} ^ {b} | f | ^ {2} \mathrm{d} x \leqslant \frac {(b - a) ^ {2}}{\pi^ {2}} \int_ {a} ^ {b} \left| f ^ {\prime} \right| ^ {2} \mathrm{d} x \tag {2.65}
$$

成立，式中的常数 $(b - a)^2 / \pi^2$ 不能改进.

证明 不妨设区间是 $[0, \pi]$ . 因为若证明了(2.65)式对于 $[0, \pi]$ 成立, 则对任意区间 $[a, b]$ 作变换 $y = \pi\left(\frac{x - a}{b - a}\right)$ , 显然 $x = a$ 与 $x = b$ 分别映成 $y = 0$ 与 $y = \pi$ . 记 $g(y) = f\left(\left(\frac{b - a}{\pi}\right)y + a\right) = f(x)$ , 便得到

$$
\begin{array}{l} \int_ {a} ^ {b} | f (x) | ^ {2} \mathrm{d} x = \frac {(b - a)}{\pi} \int_ {0} ^ {\pi} | g (y) | ^ {2} \mathrm{d} y \\ \leqslant \frac {(b - a)}{\pi} \int_ {0} ^ {\pi} | g ^ {\prime} (y) ^ {2} | d y \\ = \frac {(b - a)}{\pi} \int_ {a} ^ {b} \left| f ^ {\prime} (x) \left(\frac {b - a}{\pi}\right) \right| ^ {2} \frac {\pi}{(b - a)} d x \\ = \frac {(b - a) ^ {2}}{\pi^ {2}} \int_ {a} ^ {b} | f ^ {\prime} (x) | \mathrm{d} x, \\ \end{array}
$$

即(2.65)式对于任意 $[a,b]$ 成立.

现在设 $f \in C^{1}[0, \pi]$ 且 $f(0) = f(\pi) = 0$ . 延拓 $f$ 使得当 $x \in [-\pi, 0)$ 时, $f(x) = -f(-x)$ . 于是 $f$ 成为 $[- \pi, \pi]$ 上的奇函数, 并且 $f \in C^{1}[-\pi, \pi], f(\pi) = 0 = f(-\pi)$ . $f$ 可延拓成为实轴上以 $2\pi$ 为周期的函数. 注意到有

$$
c _ {0} (f) = 0,
$$

$$
c _ {0} \left(f ^ {\prime}\right) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f ^ {\prime} (x) d x = \frac {1}{2 \pi} [ f (\pi) - f (- \pi) ] = 0.
$$

由 Parseval 等式推得

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f ^ {\prime} (x) | ^ {2} \mathrm{d} x = \sum_ {k \neq 0} \left| c _ {k} \left(f ^ {\prime}\right) \right| ^ {2} = \sum_ {k \neq 0} \left| 1 k c _ {k} (f) \right| ^ {2}
$$

$$
\geqslant \sum_ {k \neq 0} | c _ {k} (f) | ^ {2} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f (x) | ^ {2} \mathrm{d} x.
$$

因 $|f|^2$ 及 $|f'|^2$ 是偶函数，便得知(2.65)式对于 $[0, \pi]$ 成立.

特别，若 $f(x) = 2\sin x, f'(x) = 2\cos x$ ，有

$$
\begin{array}{l} \int_ {0} ^ {\pi} | f | ^ {2} \mathrm{d} x = 2 \int_ {0} ^ {\pi} (1 - \cos 2 x) \mathrm{d} x = 2 \pi , \\ \int_ {0} ^ {\pi} \left| f ^ {\prime} \right| ^ {2} \mathrm{d} x = 2 \int_ {0} ^ {\pi} (1 + \cos 2 x) \mathrm{d} x = 2 \pi . \\ \end{array}
$$

(2.65)式等号成立,因此式中的常数不能再改进.

# 2. 关于 theta 函数的 Jacobi 恒等式

由下述级数的和

$$
\theta (t) = \sum_ {n = - \infty} ^ {\infty} \mathrm{e} ^ {- \pi n ^ {2} t}, \quad t > 0 \tag {2.66}
$$

定义的函数称为“theta 函数”，它是一个重要的超越函数，出现在数论，椭圆函数，热传导及统计力学等许多领域中.

关于 theta 函数的 Jacobi 恒等式为

$$
\theta (t) = t ^ {- 1 / 2} \theta (1 / t). \tag {2.67}
$$

当 $t$ 很小时用此式计算 $\theta$ 函数的值很有好处. 例如, 若 $t = 0.01$ , 为了算得左端一位有效数字, 需要取级数 (2.66) 中的 21 项 ( $|n| \leqslant 10$ ), 而在 (2.67) 的右端取级数的第一项 ( $n = 0$ ) 便可给出精确到 130 位有效数字的值.

证明 作函数

$$
f (x) = \sum_ {k = - \infty} ^ {\infty} \mathrm{e} ^ {- (x - 2 k \pi) ^ {2} / (2 t)}, \quad t > 0. \tag {2.68}
$$

注意到当 $|k|\geqslant 2$ 且 $0\leqslant x\leqslant 2\pi$ 时，

$$
\vert 2 k \pi - x \vert \geqslant \vert 2 k \pi \vert - \vert x \vert \geqslant \vert k \pi \vert .
$$

从而

$$
0 \leqslant e ^ {- (x - 2 k \pi) ^ {2} / (2 t)} \leqslant e ^ {- k ^ {2} \pi^ {2} / (2 t)}.
$$

由此可见级数(2.68)对于 x 在 $[0,2\pi]$ 上一致收敛. 因此 $f(x)$ 在$[0,2\pi]$ 连续，容易检验 $f$ 以 $2\pi$ 为周期. 现在计算 $f$ 的Fourier系数：

$$
\begin{array}{l} c _ {n} (f) = \sum_ {k = - \infty} ^ {\infty} \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} \mathrm{e} ^ {- (x - 2 k \pi) ^ {2} / (2 t)} \mathrm{e} ^ {- m x} \mathrm{d} x \\ = \sum_ {k = - \infty} ^ {\infty} \frac {1}{2 \pi} \int_ {- 2 k \pi} ^ {- 2 (k - 1) \pi} \mathrm{e} ^ {- u ^ {2} / (2 t)} \mathrm{e} ^ {- i n u} \mathrm{d} u \\ = \frac {1}{2 \pi} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- u ^ {2} / (2 t)} \mathrm{e} ^ {- 1 m u} \mathrm{d} u \\ = \frac {1}{2 \pi} \int_ {- \infty} ^ {\infty} e ^ {- s ^ {2}} e ^ {- 1 n \sqrt {2 t}} \cdot \sqrt {2 t} d s \\ = \frac {\sqrt {t}}{\sqrt {2 \pi}} e ^ {- n ^ {2} t / 2}, \\ \end{array}
$$

其中第二个等式与第四个等式分别通过作变换 $x - 2k\pi = u$ 及 $u = \sqrt{2t}s$ 而得到，最后一个等式利用第三章将要证明的关系式(3.29)，即

$$
\int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- r ^ {2}} \mathrm{e} ^ {- 2 \pi i x y} \mathrm{d} x = \sqrt {\pi} \mathrm{e} ^ {- (\pi y) ^ {2}}.
$$

因为 $c_{n}(f)$ 当 $n \to \pm \infty$ 时速降，因此 $f$ 的Fourier级数 $\sum_{n = -\infty}^{\infty} c_{n}(f) \mathrm{e}^{i n x}$ 一致收敛，根据第一章习题1便知它的和是 $f(x)$ . 于是得到等式

$$
\sum_ {n = - \infty} ^ {\infty} \mathrm{e} ^ {- (x - 2 n \pi) ^ {2} / (2 t)} = \sqrt {\frac {t}{2 \pi}} \sum_ {n = - \infty} ^ {\infty} \mathrm{e} ^ {- n ^ {2} t / 2} \mathrm{e} ^ {\mathrm{i} n x}.
$$

在此式中取 $x = 0$ 并用 $2\pi t$ 代替原式中的 $t$ ，便得到

$$
\theta (1 / t) = \sum_ {n = - \infty} ^ {\infty} \mathrm{e} ^ {- \pi n ^ {2} / t} = \sqrt {t} \sum_ {n = - \infty} ^ {\infty} \mathrm{e} ^ {- \pi n ^ {2} t} = \sqrt {t} \theta (t),
$$

即(2.67)成立. 此恒等式也可以由 Fourier 变换推得, 见 §3.6 的 4.

# 3. 热传导方程的解

为简单起见,我们考虑一维的热传导问题.可以想象为有一根长为 l 的金属杆,沿它的侧面绝热,热传导只能在两端进行,并且假定两端温度保持为零度.于是得到热传导方程的混合问题：

$$
\left\{ \begin{array}{l} \frac {\partial u}{\partial t} = a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}}, \\ u (0, t) = u (l, t) = 0, \quad t > 0, \\ u (x, 0) = f (x), \quad 0 \leqslant x \leqslant l. \end{array} \right. \tag {2.69}
$$

用分离变量法求形如

$$
u (x, t) = X (x) T (t)
$$

的解, 将它代入(2.69), 得到

$$
X (x) T ^ {\prime} (t) = a ^ {2} X ^ {\prime \prime} (x) T (t),
$$

通过除法,分离成如下形式

$$
\frac {T ^ {\prime} (t)}{a ^ {2} T (t)} = \frac {X ^ {\prime \prime} (x)}{X (x)}.
$$

其左端只依赖于 $t$ ，而右端只依赖于 $x$ 。要使它们恒等，必须两端都等于同一常数 $\lambda$ ：

$$
T ^ {\prime} (t) = \lambda a ^ {2} T (t), \tag {2.70}
$$

$$
X ^ {\prime \prime} (x) = \lambda X (x). \tag {2.71}
$$

关于 $T$ 的常微分方程(2.70)的通解是

$$
T (t) = c _ {0} \mathrm{e} ^ {\lambda a ^ {2} t}.
$$

关于 $X$ 的方程(2.71)的解还必须满足条件

$$
X (0) = X (l) = 0.
$$

由此判定必须 $\lambda=-(n\pi/l)^{2}, n=1,2,\cdots$ . 这就得到一族非零解

$$
X _ {n} (x) = c _ {n} \sin \frac {n \pi x}{l}, \quad n = 1, 2, \dots .
$$

于是得到满足方程(2.69)及边界条件的一族解

$$
u _ {n} (x, t) = \exp \left(\frac {- n ^ {2} \pi^ {2} a ^ {2} t}{l ^ {2}}\right) \sin \frac {n \pi x}{l}.
$$

取它们的线性组合,得到一般解

$$
u (x, t) = \sum_ {n = 1} ^ {\infty} b _ {n} \exp \left(\frac {- n ^ {2} \pi^ {2} a ^ {2} t}{l ^ {2}}\right) \sin \frac {n \pi x}{l}. \tag {2.72}
$$

要使它满足初始条件 $u(x,0) = f(x)$ ，则应当有

$$
f (x) = \sum_ {n = 1} ^ {\infty} b _ {n} \sin \frac {n \pi x}{l}. \tag {2.73}
$$

问题是： $f(x)$ 是否可以表示成这样的正弦级数？由(2.72)给定的 $u(x,t)$ 是否就是热传导问题(2.69)的解？为解决这些问题，应要求初始温度 $f(x)$ 满足适当条件。现在叙述以下结论。

设 $f(x)$ 在 $[0, l]$ 上连续，逐段光滑，并且 $f(0) = f(l) = 0$ ，则热传导方程的混合问题(2.69)有解 $u(x, t)$ ，它由级数(2.72)给出，其中

$$
b _ {n} = \frac {2}{l} \int_ {0} ^ {l} f (x) \sin \frac {n \pi x}{l} \mathrm{d} x.
$$

此结论不难验证, 先取 $f(x)$ 在 $[-l, l]$ 的奇延拓, 再将它以 $2l$ 为周期作延拓, 所得函数仍是连续且逐段光滑的. 根据定理 2.33 及其证明得知: $f(x)$ 可以展成级数 (2.73), 并且 $\sum_{n=1}^{\infty} |b_n| < +\infty$ . 这后一事实由以下不等式便知,

$$
\begin{array}{l} \sum_ {k = - \infty} ^ {\infty} | c _ {k} (f) | = | c _ {0} | + \sum_ {k \neq 0} \left| \frac {c _ {k} \left(f ^ {\prime}\right)}{k} \right| \\ \leqslant \left| c _ {0} \right| + \left(\sum_ {k \neq 0} \frac {1}{k ^ {2}}\right) ^ {1 / 2} \left(\sum_ {k \neq 0} \left| c _ {k} \left(f ^ {\prime}\right) \right| ^ {2}\right) ^ {1 / 2} <   + \infty . \\ \end{array}
$$

由Weierstrass判别法可推知，级数(2.72)在区域 $\{(x,t):0\leqslant x\leqslant l,t\geqslant 0\}$ 上一致收敛.从而 $u(x,t)$ 在此区域连续.特别地，有

$$
\lim _ {t \rightarrow 0} u (x, t) = u (x, 0) = f (x), \quad x \in [ 0, l ],
$$

$$
\begin{array}{c} \lim _ {x \to 0} u (x, t) = u (0, t) = 0, \\ \lim _ {x \to l} u (x, t) = u (l, t) = 0, \quad t > 0. \end{array}
$$

下面证明 $u(x,t)$ 是热传导方程的解. 由前述 $u_{n}(x,t)$ 的构成已经知道, 在级数(2.72)中每一项都是热传导方程(2.69)的解. 为了说明 $u(x,t)$ 也是热传导方程的解, 只需说明: 对级数(2.72)逐项取微商后所得的级数一致收敛. 根据前面讨论, 我们知道 $b_{n}$ 有界, 即

$$
\left| b _ {n} \right| \leqslant C, \quad n = 1, 2, \dots .
$$

对任给 $\delta > 0$ ，若 $t \geqslant \delta$ ，便有

$$
\left| b _ {n} \exp \left(- \frac {n ^ {2} \pi^ {2} a ^ {2} t}{l ^ {2}}\right) \sin \frac {n \pi x}{l} \right| \leqslant C \mathrm{e} ^ {- d n ^ {2}},
$$

其中 $d = \frac{\pi^2a^2\delta}{l^2} >0.$ 因为级数 $\sum_{n = 1}^{\infty}n^{k}\mathrm{e}^{-dn^{2}}$ 对于任意整数 $k$ 收敛，所以推知：对级数(2.72)关于 $t$ 逐项取一阶微商，或者关于 $x$ 逐项取一阶与二阶微商所得的级数在区域 $\{(x,t):0\leqslant x\leqslant l,t\geqslant \delta \}$ 上一致收敛，这表明对级数(2.72)可以逐项取微商，由此推知 $u(x,t)$ 是热传导方程(2.69)的混合问题的解.

若 $f(x)$ 的条件减弱一些，处理将更复杂，此处不再讨论.

以上只讨论了热传导问题解的存在性,至于解的唯一性也是成立的,可参看偏微分方程的书.

# 4. 等周问题

等周问题就是：在具有给定周长的所有闭平面曲线中，求一条曲线使得它所围的面积最大。可以证明：圆周所围的面积最大。

下面用数学分析的方式更确切地叙述这个问题. 设平面曲线 $L$ 的参数方程为

$$
x = x (t), \quad y = y (t), \quad a \leqslant t \leqslant b.
$$

假定它是闭曲线，即 $x(a) = x(b), y(a) = y(b)$ ，又是简单的光滑曲线。等周问题就是要求找出 $x(t)$ 与 $y(t)$ ，使得其曲线总长

$$
l = \int_ {a} ^ {b} \sqrt {\left[ x ^ {\prime} (t) \right] ^ {2} + \left[ y ^ {\prime} (t) \right] ^ {2}} \mathrm{d} t
$$

等于给定的常数,而曲线包围的面积

$$
A = \frac {1}{2} \int_ {a} ^ {b} [ x (t) y ^ {\prime} (t) - x ^ {\prime} (t) y (t) ] \mathrm{d} t
$$

取到最大值.

不妨设给定的曲线总长度为 l=1，并且取曲线的弧长作为参数方程中的参数，即曲线 L 为：

$$
x = x (s), \quad y = y (s), \quad 0 \leqslant s \leqslant 1,
$$

并且弧长为

$$
s = \int_ {0} ^ {t} \sqrt {\left[ x ^ {\prime} (t) \right] ^ {2} + \left[ y ^ {\prime} (t) \right] ^ {2}} d t.
$$

从而得知

$$
[ x ^ {\prime} (s) ] ^ {2} + [ y ^ {\prime} (s) ] ^ {2} = 1, \quad 0 \leqslant s \leqslant 1. \tag {2.74}
$$

这时等周问题归结为证明：曲线所围面积

$$
A = \frac {1}{2} \int_ {0} ^ {1} [ x (s) y ^ {\prime} (s) - x ^ {\prime} (s) y (s) ] \mathrm{d} s \tag {2.75}
$$

满足不等式

$$
A \leqslant \frac {1}{4 \pi}, \tag {2.76}
$$

且只有当曲线 $L$ 是圆周时，等号成立. 当 $L$ 是圆周时， $l = 2\pi r = 1$ 得 $r = \frac{1}{2\pi}$ ，便有面积

$$
A = \pi r ^ {2} = \frac {1}{4 \pi}.
$$

证明如下, 按前述假定知 $x(s), y(s)$ 可延拓成以 1 为周期的实值函数, 并且属于 $C^1[0,1]$ , 从而 $x'(s), y'(s)$ 属于 $L^2[0,1]$ . 根据 Fourier 级数理论, 有

$$
x (s) \sim \sum_ {n = - \infty} ^ {\infty} \hat {x} (n) \mathrm{e} ^ {2 \pi i n s},
$$

其中的Fourier系数为

$$
\hat {x} (n) = \int_ {0} ^ {1} x (s) \mathrm{e} ^ {- 2 \pi n s} \mathrm{d} s.
$$

$x^{\prime}(s),y(s),y^{\prime}(s)$ 有类似的Fourier级数.对于 $x(s)$ 与 $y(s)$ ，其Fourier级数展式等号成立，并且

$$
\hat {x} ^ {\prime} (n) = 2 \pi \mathrm{i} n \hat {x} (n), \quad \hat {y} ^ {\prime} (n) = 2 \pi \mathrm{i} n \hat {y} (n). \tag {2.77}
$$

由(2.74)以及 Parseval 等式推得

$$
1 = \int_ {0} ^ {1} \left\{\left[ x ^ {\prime} (s) \right] ^ {2} + \left[ y ^ {\prime} (s) \right] ^ {2} \right\} d s
$$

$$
\begin{array}{l} = \sum_ {n = - \infty} ^ {\infty} \left[ | \hat {x} ^ {\prime} (n) | ^ {2} + | \hat {y} ^ {\prime} (n) | ^ {2} \right] \\ = \sum_ {n = - \infty} ^ {\infty} 4 \pi^ {2} n ^ {2} [ | \hat {x} (n) | ^ {2} + | \hat {y} (n) | ^ {2} ]. \tag {2.78} \\ \end{array}
$$

注意到 $x(s), y(s)$ 都是实值函数，由(2.75)及 Parseval 等式还得到

$$
\begin{array}{l} A = \frac {1}{2} \sum_ {n = - \infty} ^ {\infty} [ \hat {x} (n) \overline {{{\hat {y} ^ {\prime} (n)}}} - \overline {{{\hat {x} ^ {\prime} (n)}}} \hat {y} (n) ] \\ = \frac {1}{2} \sum_ {n = - \infty} ^ {\infty} 2 \pi 1 n [ \overline {{\hat {x} (n)}} \hat {y} (n) - \hat {x} (n) \overline {{\hat {y} (n)}} ]. \tag {2.79} \\ \end{array}
$$

于是，由(2.78)及(2.79)两式经运算得到

$$
\begin{array}{l} \frac {1}{\pi} \left(\frac {1}{4 \pi} - A\right) = \sum_ {n = - \infty} ^ {\infty} \left\{n ^ {2} \left[ | \hat {x} (n) | ^ {2} + | \hat {y} (n) | ^ {2} \right] \right. \\ - 1 n \left[ \overline {{\hat {x} (n)}} \hat {y} (n) - \hat {x} (n) \overline {{\hat {y} (n)}} \right] \} \\ = \sum_ {n = - \infty} ^ {\infty} [ | n \hat {x} (n) - \mathrm{i} \hat {y} (n) | ^ {2} + (n ^ {2} - 1) | \hat {y} (n) | ^ {2} ]. \tag {2.80} \\ \end{array}
$$

(2.80)式右端的级数中每项都是非负的,由此便得到结论(2.76): $\frac{1}{4\pi} \geqslant A$ , 此式等号成立等价于(2.80)式右端级数的和为 0.

容易推知: 当且仅当以下条件

(a) 当 $|n| \geqslant 2$ 时, $\hat{x}(n) = 0, \hat{y}(n) = 0$ ;

(b) 当 $n = 1$ 时, $\hat{x}(1) = 1\hat{y}(1)$ ;

当 $n = -1$ 时， $\hat{x}(-1) = -\mathrm{i}\hat{y}(-1)$

成立时，(2.80)右端级数的和为0.而当条件(a)与(b)成立时，曲线的参数方程化为以下形式：

$$
x (s) = \hat {x} (0) + \hat {x} (1) \mathrm{e} ^ {2 m s} + \hat {x} (- 1) \mathrm{e} ^ {- 2 m s},
$$

$$
y (s) = \hat {y} (0) + \hat {y} (1) e ^ {2 \pi i s} + \hat {y} (- 1) e ^ {- 2 \pi i s}.
$$

由这两式及条件(b)，可推得

$$
\begin{array}{l} [ x (s) - \hat {x} (0) ] ^ {2} + [ y (s) - \hat {y} (0) ] ^ {2} \\ = [ \hat {x} (1) \mathrm{e} ^ {2 \pi \mathrm{s}} + \hat {x} (- 1) \mathrm{e} ^ {- 2 \pi \mathrm{s}} ] [ \overline {{\hat {x} (1)}} \mathrm{e} ^ {- 2 \pi \mathrm{s}} + \overline {{\hat {x} (- 1)}} \mathrm{e} ^ {2 \pi \mathrm{s}} ] \\ \end{array}
$$

$$
+ [ \hat {y} (1) \mathrm{e} ^ {2 \pi \mathrm{s}} + \hat {y} (- 1) \mathrm{e} ^ {- 2 \pi \mathrm{s}} ] [ \overline {{\hat {y} (1)}} \mathrm{e} ^ {- 2 \pi \mathrm{s}} + \overline {{\hat {y} (- 1)}} \mathrm{e} ^ {2 \pi \mathrm{s}} ]
$$

$$
= [ | \hat {x} (1) | ^ {2} + | \hat {y} (1) | ^ {2} ] + [ | \hat {x} (- 1) | ^ {2} + | \hat {y} (- 1) | ^ {2} ].
$$

再由(2.78)式及条件(a)得到

$$
1 = 4 \pi^ {2} \left\{\left[ | \hat {x} (1) | ^ {2} + | \hat {y} (1) | ^ {2} \right] + \left[ | \hat {x} (- 1) | ^ {2} + | \hat {y} (- 1) | ^ {2} \right] \right\}.
$$

综合起来便有

$$
[ x (s) - \hat {x} (0) ] ^ {2} + [ y (s) - \hat {y} (0) ] ^ {2} = \frac {1}{4 \pi^ {2}},
$$

这正是圆周的方程. 也就是说, (2.76) 式等号成立时, 曲线 $L$ 是圆周.

注 上述等周问题中假定了曲线 $L$ 是光滑曲线, 若换成假定: 曲线 $L$ 是连续且逐段光滑的曲线, 其论证仍成立.

## 习题

1. 设实值函数 $f(x)$ 在 $(0,2\pi)$ 上单调减，试证明其Fourier正弦系数 $b_{n} \geqslant 0$ .  
2. 设 $f(x) = \cos ax, x \in [-\pi, \pi]$ ，其中 $a$ 为非整数。试求 $f$ 的实型 Fourier 级数。并证明以下等式成立：

(1) $\frac{\pi}{\sin a\pi} = \frac{1}{a} + 2a\sum_{k=1}^{\infty}\frac{(-1)^k}{a^2 - k^2};$

(2) $\frac{\pi}{\tan a\pi} = \frac{1}{a} + 2a\sum_{k=1}^{\infty}\frac{1}{a^2 - k^2};$

(3) $\frac{\pi^2}{\sin^2 a \pi} = \sum_{k=-\infty}^{\infty} \frac{1}{(a-k)^2}$ .

3. 设 $f(x)$ 周期为 $2\pi$ ，且在 $[- \pi, \pi]$ 上有有界变差，试证明其Fourier级数部分和一致有界，即：存在常数 $M$ ，

$$
\left| S _ {n} (x) \right| \leqslant M, \quad x \in [ - \pi , \pi ], n = 1, 2, \dots .
$$

4. 试证明 Dini 判别法与 Jordan 判别法是互不包含的(提示: 考虑如下函数:

$$
f (x) = \left\{ \begin{array}{l l} \frac {1}{\ln \frac {x}{2 \pi}}, & 0 <   x <   \pi , \\ f (- x), & - \pi <   x <   0; \end{array} \right.
$$

$$
g (x) = \left\{ \begin{array}{l l} x ^ {a} \sin \frac {1}{x}, & 0 <   x \leqslant \pi , \\ g (- x), & - \pi \leqslant x <   0, \end{array} \right.
$$

其中 $\alpha\in(0,1)$ .

5. 试用算术平均求和法求以下级数的广义和：

(1) $\frac{1}{2} + \sum_{k=1}^{\infty} \cos kx, x \in [-\pi, \pi] \setminus \{0\}$ ;   
(2) $\sum_{k=1}^{\infty} \sin kx, \quad x \in [-\pi, \pi]$ .

6. 设 $f(x)$ 以 $2\pi$ 为周期，且 $f \in \mathrm{Lip1}$ ，试证明：

$$
\left| \sigma_ {n} (x) - f (x) \right| \leqslant A \frac {\ln n}{n}, \quad x \in [ - \pi , \pi ], n > 1,
$$

其中 $\sigma_{n}(x)$ 是 $S(f)$ 的部分和的算术平均.

7. 设 $f(x) = x^2, -\pi \leqslant x \leqslant \pi$ ，求 $f$ 的 Fourier 级数，并利用它证明等式

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {4}} = \frac {\pi^ {4}}{9 0}.
$$

8. 设 $f, g \in L^2(T)$ , 并且 $f(x) \sim \sum_{n=1}^{\infty} c_n e^{inx}$ ,

$$
g (x) \sim \sum_ {n = - (x)} ^ {\infty} d _ {n} \mathrm{e} ^ {i n x},
$$

$$
f (x) \cdot g (x) \sim \sum_ {n = - \infty} ^ {\infty} \gamma_ {n} \mathrm{e} ^ {\mathrm{i} n \tau},
$$

试证明： $\gamma_{n} = \sum_{k = -\infty}^{(x)}c_{k}d_{n - k}$

9. 设 $f \in L(T)$ ,

$$
f (x) \sim \frac {1}{2} a _ {0} + \sum_ {k = 1} ^ {\infty} (a _ {k} \cos k x + b _ {k} \sin k x).
$$

(1) 令 $F(x) = \int_{0}^{x} f(x) \, \mathrm{d}t - \frac{1}{2} a_{0} x, x \in [0, 2\pi]$ ，试证明： $F(0) = F(2\pi)$ ，并且

$$
F (x) \sim \frac {1}{2} A _ {0} + \sum_ {k = 1} ^ {\infty} \frac {1}{k} (a _ {k} \sin k x - b _ {k} \cos k x),
$$

右端的级数一致收敛,其中

$$
\frac {1}{2} A _ {0} = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} x [ c _ {0} - f (x) ] \mathrm{d} x.
$$

(ii) 试证明：级数 $\sum_{n=1}^{\infty} \frac{b_n}{n}$ 是收敛的，它的和为 $\frac{1}{2} A_0$ .

10. 证明三角级数

$$
\sum_ {n = 1} ^ {\infty} \frac {\sin n x}{\ln (n + 1)}
$$

在 $[-π,π]$ 收敛，但它不是任何可积函数的Fourier级数.

11. 设 $f \in L^2(T)$ , $f \sim \sum_{k=-\infty}^{\infty} c_k e^{ikx}$ . 对每个 $n$ , 令

$$
\gamma_ {n} = \sum_ {k \neq n} c _ {k} \frac {1}{n - k} = \sum_ {k \neq 0} c _ {n - k} \frac {1}{k}.
$$

试证明：

$$
\sum_ {n = - \infty} ^ {\infty} | \gamma_ {n} | ^ {2} \leqslant \pi^ {2} \sum_ {k = - \infty} ^ {\infty} | c _ {k} | ^ {2}.
$$

12. 设

$$
f (x) = \left\{ \begin{array}{l l} 1, & 0 <   x \leqslant h, \\ 0, & h <   x \leqslant 2 \pi , \end{array} \right.
$$

其中 $h \in (0, 2\pi]$ , 试求 $f$ 的复型 Fourier 系数, 并且

(1) 利用 Parseval 等式求出以下级数的和:

$$
\sum_ {n = 1} ^ {\infty} \frac {\sin^ {2} \left(\frac {1}{2} n h\right)}{n ^ {2}}, \quad 0 \leqslant h \leqslant \pi ;
$$

(2) 求级数 $\sum_{n=1}^{\infty} \frac{1}{n^2} \cos n h$ 的和 $(|h| \leqslant \pi)$ .

13. 设 $a_{n}, b_{n}$ 是实数 $(n = 1,2,\dots)$ , 令 $c_{n} = \frac{1}{2}(a_{n} - \mathrm{i}b_{n}), n > 0$ , $c_{-n} = \overline{c_{n}}$ . 试证明: 当 $M$ 与 $N$ 彼此独立地趋于 $+\infty$ 时,

$$
\lim_{\substack{N\to +\infty \\ M\to +\infty}}\sum_{n = -M}^{N}c_{n}\mathrm{e}^{\mathrm{i}n\tau_{0}}
$$

存在的充分必要条件是:下述两个级数

$$
\begin{array}{l} \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x _ {0} + b _ {n} \sin n x _ {0}\right), \\ \sum_ {n = 1} ^ {\infty} \left(a _ {n} \sin n x _ {0} - b _ {n} \cos n x _ {0}\right) \\ \end{array}
$$

同时收敛.

14. 设 $f \in C^{1}[-\pi, \pi]$ , 是以 $2\pi$ 为周期的实值函数, 试用 Parseval 等式证明: 在 $L^{2}(-\pi, \pi)$ 中 $f'$ 与 $f$ 正交 (注: 另一方法是直接用事实 $2ff' = (f^{2})'$ ).

15. 设 $f \in L^{p}(T), 1 \leqslant p \leqslant \infty$ ，试证明：

$$
\| \sigma_ {n} (f) \| _ {p} \leqslant \| f \| _ {p}.
$$

# 第三章 Fourier 变换与 Fourier 积分

上一章讨论用来描述周期现象的周期函数,并且研究了把它们展开成 Fourier 级数的问题.

我们知道, 在各种问题中常出现定义在全实轴上的非周期函数, 例如 $f(x) = \frac{1}{1 + x^2}, g(x) = \mathrm{e}^{-x^2} (-\infty < x < \infty)$ 等等. 这些函数无法周期化, 从而不可能展开成 Fourier 级数. 但是, 我们仍希望能用一些基本的函数, 如指数函数或三角函数, 通过迭加来表示它们, 也就是想得到它们的展开式. 这时的展开式不可能是离散形式的和式, 而只能是连续形式的和式, 也就是积分.

本章讨论用来描述非周期现象的函数,研究其 Fourier 积分.所用的方法以 Fourier 级数已有的结果为基础,所讨论的问题也与 Fourier 级数相平行.

## § 3.1 定义与基本性质

我们考虑定义在 $(-\infty, \infty)$ 上的函数，设 $f \in L(R)$ . 如果只取 $f$ 在 $(-l, l)$ 上给定的值，那么可以写出它的Fourier级数展开式. 然后令 $l \to +\infty$ ，试图用极限的方法形式上导出 $f$ 的展开式.

$f(x)$ 在 $(-l, l)$ 上的Fourier级数是

$$
f (x) \sim \sum_ {n = - \infty} ^ {\infty} \left[ \frac {1}{2 l} \int_ {- l} ^ {l} f (y) \mathrm{e} ^ {- \mathrm{i} n \pi y / l} \mathrm{d} y \right] \mathrm{e} ^ {\mathrm{i} n \pi x / l}.
$$

上式右端的级数可以改写成

$$
\sum_ {n = - \infty} ^ {\infty} \frac {1}{2 l} \int_ {- l} ^ {l} f (y) e ^ {i \frac {n \pi}{l} (x - y)} d y
$$

$$
= \sum_ {n = - \infty} ^ {\infty} \left[ \frac {1}{2 \pi} \int_ {- l} ^ {l} f (y) \mathrm{e} ^ {\mathrm{i} t _ {n} (x - y)} \mathrm{d} y \right] \Delta t _ {n},
$$

其中

$$
t _ {n} = \frac {n \pi}{l}, \quad \Delta t _ {n} = t _ {n + 1} - t _ {n} = \frac {\pi}{l},
$$

$$
n = 0, \pm 1, \pm 2, \dots .
$$

这个和式可以近似地看作关于 $t$ 的函数

$$
\frac {1}{2 \pi} \int_ {- \infty} ^ {\infty} f (y) \mathrm{e} ^ {i t (x - y)} \mathrm{d} y
$$

在 $(-\infty, \infty)$ 上的积分和，令 $l \to +\infty$ ，形式上得到它的极限是积分

$$
\int_ {- \infty} ^ {\infty} \left[ \frac {1}{2 \pi} \int_ {- \infty} ^ {\infty} f (y) \mathrm{e} ^ {i t (x - y)} \mathrm{d} y \right] \mathrm{d} t.
$$

由此导出 $f(x)$ 在 $(-\infty, \infty)$ 上的展开式应当是

$$
f (x) \sim \int_ {- \infty} ^ {\infty} c (t) \mathrm{e} ^ {i t x} \mathrm{d} t, \tag {3.1}
$$

其中

$$
c (t) = \frac {1}{2 \pi} \int_ {- \infty} ^ {\infty} f (y) \mathrm{e} ^ {- t y} \mathrm{d} y.
$$

这是复型的展开式. 实型的展开式应当是

$$
f (x) \sim \int_ {0} ^ {\infty} [ a (t) \mathrm{cos} t x + b (t) \mathrm{sint} x ] \mathrm{d} t, \tag {3.2}
$$

其中

$$
a (t) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (y) \cos t y d y,
$$

$$
b (t) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (y) \sin t y d y.
$$

以上只是从形式上导出函数的展开式. 下面给出 Fourier 变换与 Fourier 积分的确切的定义. 为了使有关的公式对称起见, 我们把以上包含在分母中的 $2\pi$ 通过变换转移到指数上.

设 $f \in L(\mathbb{R})$ ，我们称

$$
\hat {f} (t) = \int_ {- \infty} ^ {\infty} f (x) \mathrm{e} ^ {- 2 \pi \mathrm{i} x t} \mathrm{d} x \tag {3.3}
$$

为 $f$ 的Fourier变换. 同时记

$$
f (x) \sim \int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t, \tag {3.4}
$$

上式右端的积分称为 $f$ 的Fourier积分①.本章将要讨论 $f$ 的Fourier积分是否收敛以及在什么条件下收敛到 $f(x)$ 等问题.

若 $f$ 是偶函数，即 $f(-x) = f(x)$ ，(3.3)式化为

$$
\hat {f} (t) = 2 \int_ {0} ^ {\infty} f (x) \cos 2 \pi t x \mathrm{d} x.
$$

易证 $\hat{f}(t)$ 也是偶函数，(3.4)式化为只含余弦函数的公式

$$
\begin{array}{l} f (x) \sim 2 \int_ {0} ^ {\infty} \hat {f} (t) \cos 2 \pi x t d t \\ = 2 \int_ {0} ^ {\infty} \left(2 \int_ {0} ^ {\infty} f (u) \cos 2 \pi t u d u\right) \cos 2 \pi x t d t. \\ \end{array}
$$

类似地, 若 f 是奇函数, 即 $f(-x) = -f(x)$ , 则 $\hat{f}(t)$ 也是奇函数, 且可得到只含正弦函数的公式:

$$
\mathrm{i} \hat {f} (t) = 2 \int_ {0} ^ {\infty} f (u) \sin 2 \pi t u \mathrm{d} u,
$$

$$
\begin{array}{l} f (x) \sim 2 \mathrm{i} \int_ {0} ^ {\infty} \hat {f} (t) \sin 2 \pi x t \mathrm{d} t \\ = 2 \int_ {0} ^ {\infty} \left(2 \int_ {0} ^ {\infty} f (u) \sin 2 \pi t u d u\right) \sin 2 \pi x t d t. \\ \end{array}
$$

如果 $f$ 只定义在 $(0, \infty)$ 上，设 $f \in L(0, \infty)$ ，令

$$
\hat {f} (t) = \frac {1}{\sqrt {2 \pi}} \int_ {- \infty} ^ {\infty} f (x) e ^ {- 1 2 t} d x
$$

为 $f$ 的Fourier变换，而 $f$ 的Fourier积分为

$$
f (x) \sim \frac {1}{\sqrt {2 \pi}} \int_ {- \infty} ^ {\infty} \hat {f} (t) e ^ {i x t} d t.
$$

$$
\hat {f} _ {\iota} (t) = 2 \int_ {0} ^ {\infty} f (u) \cos 2 \pi t u d u, \tag {3.5}
$$

$$
\hat {f} _ {,} (t) = 2 \int_ {0} ^ {\infty} f (u) \sin 2 \pi t u \mathrm{d} u, \tag {3.6}
$$

这里的 $\hat{f}_c(t)$ 称为 $f$ 的Fourier余弦变换， $\hat{f}_c(t)$ 称为 $f$ 的Fourier正弦变换. 我们可以把 $f(x)$ 延拓成为 $(-\infty, \infty)$ 上的偶(或奇)函数，再应用上述关于偶(奇)函数的Fourier积分公式.

定理3.1 设 $f \in L(R)$ , Foureir 变换 $\hat{f}(t)$ 由(3.3)式给定, 则有

(1) $\lim_{|t|\to \infty}\hat{f} (t) = 0;$   
(ii) $|\hat{f}(t)| \leqslant \| f \|_1, t \in (-\infty, \infty)$ ,

其中 $\| f \|_1 = \int_{-\infty}^{\infty} |f(x)| \mathrm{d}x$ 。映射 $f \to \hat{f}$ 可以看作是 $L^1(R)$ 到 $L^\frac{1}{\infty}(R)$ 的有界线性算子：

$$
\| \hat {f} \| _ {\infty} \leqslant \| f \| _ {1};
$$

(iii) $\hat{f}(t)$ 在 $(-\infty, \infty)$ 上一致连续；  
(iv) 记平移算子为 $\tau_h: (\tau_h f)(x) = f(x - h)$ , 就有

$$
\left(\tau_ {h} f\right) ^ {\wedge} (t) = \mathrm{e} ^ {- 2 \pi \mathrm{i} h t} \hat {f} (t);
$$

(v) $(\mathrm{e}^{2\pi h x}f)^{\wedge}(t) = \hat{f} (t - h) = (\tau_h\hat{f})(t)$ ;   
(vi) 记展缩算子为 $T_{a}: (T_{a}f)(x) = f(ax)$ , 对实数 $a \neq 0$ , 有

$$
(T _ {a} f) ^ {\wedge} (t) = \frac {1}{| a |} \hat {f} \left(\frac {t}{a}\right).
$$

证明 (i) 这就是 Riemann-Lebesgue 引理(定理 2.4)的结论.

(ii) 由 $\hat{f}(t)$ 的定义及积分性质容易得到.

(iii) $|\hat{f}(t + h) - \hat{f}(t)| = \left|\int_{-\infty}^{\infty}f(u)\mathrm{e}^{-2\pi itu}\left(\mathrm{e}^{-2\pi ihu} - 1\right)\mathrm{d}u\right|$

$$
\leqslant \int_ {- \infty} ^ {\infty} | e ^ {- 2 \pi i h u} - 1 | | f (u) | d u.
$$

以上不等式的右端与 $t$ 无关，被积函数不超过 $2|f(u)|$ 。根据控制收敛定理，当 $h \to 0$ 时，它趋向于零，所以 $\hat{f}(t)$ 一致连续。

(iv), (v), (vi) 都可通过作积分变量的线性变换推得, 以 (iv) 为例: 令 $y = u - h$ , 可得

$$
\begin{array}{l} \left(\tau_ {h} t\right) ^ {\wedge} (t) = \int_ {- \infty} ^ {\infty} f (u - h) \mathrm{e} ^ {- 2 \pi u t u} \mathrm{d} u \\ = \int_ {- \infty} ^ {\infty} f (y) \mathrm{e} ^ {- 2 \pi u (y + h)} \mathrm{d} y \\ = \mathrm{e} ^ {- 2 \pi i t h} \hat {f} (t). \quad \| \\ \end{array}
$$

此外，设 $f, g \in L(R)$ ，由积分的线性性质易得

$$
(a f + b g) ^ {\wedge} (t) = a \hat {f} (t) + b \hat {g} (t).
$$

定理 3.2 设 $f \in L(R)$ , $f_{n} \in L(R)$ , $n = 1, 2, \cdots$ , 若 $\|f_{n} - f\|_{1} \to 0 (n \to \infty)$ , 则 $\hat{f}_{n}(t)$ 关于 t 一致收敛于 $\hat{f}(t)$ .

证明 由定理 3.1(ii)，有

$$
\left| \hat {f} _ {n} (t) - \hat {f} (t) \right| \leqslant \| f _ {n} - f \| _ {1}, \quad t \in (- \infty , \infty),
$$

令 $n \to \infty$ ，即得结论。

定理3.3 设 $f, g \in L(R)$ , 则以下乘法公式成立:

$$
\int_ {- \infty} ^ {\infty} \hat {f} (t) g (t) \mathrm{d} t = \int_ {- \infty} ^ {\infty} f (t) \hat {g} (t) \mathrm{d} t. \tag {3.7}
$$

证明 由 Tonelli 定理推知有以下不等式成立，

$$
\int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} \left| e ^ {- 2 \pi i t u} f (u) g (t) \right| d u d t \leqslant \| f \| _ {1} \| g \| _ {1} <   + \infty ,
$$

于是根据Fubini定理便得

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} \hat {f} (t) g (t) \mathrm{d} t = \int_ {- \infty} ^ {\infty} g (t) \left(\int_ {- \infty} ^ {\infty} f (u) \mathrm{e} ^ {- 2 \pi u t u} \mathrm{d} u\right) \mathrm{d} t \\ = \int_ {- \infty} ^ {\infty} f (u) \left(\int_ {- \infty} ^ {\infty} g (t) \mathrm{e} ^ {- 2 \pi u t u} \mathrm{d} t\right) \mathrm{d} u \\ = \int_ {- \infty} ^ {\infty} f (u) \hat {g} (u) d u. \quad I \\ \end{array}
$$

下面考虑 $(-\infty, \infty)$ 上函数的卷积的Fourier变换. 由第一章

已知: 设 $f, g \in L(R)$ , f 与 g 的卷积为

$$
(f * g) (x) = \int_ {- \infty} ^ {\infty} f (x - u) g (u) \mathrm{d} u, \tag {3.8}
$$

且知 $(f*g)(x) = (g*f)(x)$ .

定理3.4 设 $f, g \in L(R)$ , 则 $f * g \in L(R)$ , 满足

$$
\| f * g \| _ {1} \leqslant \| f \| _ {1} \| g \| _ {1}, \tag {3.9}
$$

并且

$$
(f * g) ^ {\wedge} (t) = \hat {f} (t) \cdot \hat {g} (t). \tag {3.10}
$$

证明 由定理2.1便得到(3.9).于是，根据Fubini定理可得

$$
\begin{array}{l} (f * g) ^ {\wedge} (t) = \int_ {- \infty} ^ {\infty} \left\{\int_ {- \infty} ^ {\infty} f (x - u) g (u) d u \right\} e ^ {- 2 \pi i t x} d x \\ = \int_ {- \infty} ^ {\infty} g (u) \mathrm{e} ^ {- 2 \pi u t u} \left\{\int_ {- \infty} ^ {\infty} f (x - u) \mathrm{e} ^ {- 2 \pi u (x - u)} \mathrm{d} x \right\} \mathrm{d} u \\ = \hat {f} (t) \cdot \hat {g} (t). \\ \end{array}
$$

以上最后一个等式由对花括号内的积分作平移变换 $y = x - u$ 而得到.

现在我们讨论导函数的 Fourier 变换以及函数的 Fourier 变换的导函数.

定理3.5 (i) 设 $f \in L(R), xf \in L(R)$ , 则 $\hat{f}(t)$ 可微, 并且

$$
(\hat {f}) ^ {\prime} (t) = (- 2 \pi \mathrm{i} x f) ^ {\wedge} (t). \tag {3.11}
$$

(ii) 设 $f \in L(\mathbb{R})$ , 又局部绝对连续 (即, 在任何有界闭区间上绝对连续), 简记为 $f \in AC_{\mathrm{loc}}$ , 并且 $f'(x) \in L(\mathbb{R})$ , 则

$$
(f ^ {\prime}) ^ {\wedge} (t) = (2 \pi \mathrm{i} t) \hat {f} (t). \tag {3.12}
$$

证明 (1) 考察差商

$$
\frac {\hat {f} (t + h) - \hat {f} (t)}{h} = \int_ {- \infty} ^ {\infty} f (x) \left(\frac {\mathrm{e} ^ {- 2 \pi i x h} - 1}{h}\right) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x. \tag {3.13}
$$

因为有不等式

$$
\left| f (x) \left(\frac {\mathrm{e} ^ {- 2 \pi i x h} - 1}{h}\right) \right| \leqslant 2 \pi | x | | f (x) | \in L (\boldsymbol {R}),
$$

而且

$$
\lim _ {h \to 0} f (x) \left(\frac {\mathrm{e} ^ {- 2 \pi i x h} - 1}{h}\right) = - 2 \pi \mathrm{i} x f (x), \quad \text { a.e. },
$$

所以在(3.13)式两边令 $h\to0$ ，由控制收敛定理便得

$$
(\hat {f}) ^ {\prime} (t) = \int_ {- \infty} ^ {\infty} [ - 2 \pi \mathrm{i} x f (x) ] \mathrm{e} ^ {- 2 \pi \mathrm{i} x t} \mathrm{d} x = (- 2 \pi \mathrm{i} x f) ^ {\wedge} (t).
$$

(ii) 因为 $f$ 及 $\mathrm{e}^{-2\pi i t x}$ 绝对连续，且 $f'$ 在 $(-\infty, \infty)$ 上可积，所以对任意 $A > 0, B > 0$ ，用分部积分公式得

$$
\begin{array}{l} \int_ {- B} ^ {A} f ^ {\prime} (x) \mathrm{e} ^ {- 2 \pi x t} \mathrm{d} t \\ = [ f (x) \mathrm{e} ^ {- 2 \pi i x t} ] \left| _ {- B} ^ {A} - (- 2 \pi \mathrm{i} t) \int_ {- B} ^ {A} f (x) \mathrm{e} ^ {- 2 \pi i t x} \mathrm{d} x. \right. \tag {3.14} \\ \end{array}
$$

下面证明

$$
\lim _ {x \rightarrow + \infty} f (x) = 0 = \lim _ {x \rightarrow - \infty} f (x). \tag {3.15}
$$

由 $f$ 局部绝对连续，我们有等式

$$
\dot {f} (x) - f (0) = \int_ {0} ^ {x} f ^ {\prime} (u) \mathrm{d} u.
$$

按假定 $f^{\prime} \in L(R)$ , 从而上式右端当 $x \to +\infty$ , 或 $x \to -\infty$ 时极限必存在. 于是存在极限

$$
\lim _ {x \rightarrow + \infty} f (x) = c _ {1}, \quad \lim _ {x \rightarrow - \infty} f (x) = c _ {2}.
$$

根据 $f \in L(\mathbb{R})$ ，便可推知 $c_{1} = 0 = c_{2}$ . 否则，设 $c_{1} > 0$ ，存在 $A_{0} > 0$ ，当 $x > A_{0}$ 时， $f(x) > \frac{c_{1}}{2}$ . 若 $N > A_{0}$ ，有

$$
\int_ {A _ {0}} ^ {N} f (x) \mathrm{d} x \geqslant \frac {c _ {1}}{2} (N - A _ {0}) \rightarrow + \infty \quad (N \rightarrow + \infty).
$$

这与 $f$ 的可积性矛盾. 类似可证 $c_{2} = 0$ . 即有(3.15)式成立. 在(3.14)两边, 令 $A \to +\infty, B \to +\infty$ , 便得到(3.12)式.

## § 3.2 Fourier 变换的反演理论

对于周期函数,我们想得到函数的 Fourier 级数展开式.类似地, 对于全实轴上的函数, 也希望有函数的 Fourier 积分展开式, 也就是使(3.4)式成为等式. 当然不可能期望对任意函数都有展开式, 必须附加一些条件才能使等式成立.

本节讨论积分展开式的逐点收敛性, 将证明: 若可积函数 $f$ 在点 $x_0$ 处满足 Fourier 级数收敛的条件, 便推知 $f$ 的 Fourier 积分也在 $x_0$ 处收敛. 下一节通过求和理论将进一步讨论几乎处处收敛性.

设 $f \in L(R)$ , 如果等式

$$
f (x) = \int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t \tag {3.16}
$$

成立, 就称为反演公式成立. 我们将讨论在什么条件下有反演公式成立. 在此先讨论更弱的问题, 即

$$
\lim _ {R \rightarrow \infty} \int_ {- R} ^ {R} \hat {f} (t) \mathrm{e} ^ {2 \pi | x t} \mathrm{d} t
$$

是否存在？是否等于 $f(x)$ ？

我们记

$$
\begin{array}{l} f _ {R} (x) = \int_ {- R} ^ {R} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t \\ = \int_ {- R} ^ {R} \left\{\int_ {- \infty} ^ {\infty} f (u) \mathrm{e} ^ {- 2 \pi u t} \mathrm{d} u \right\} \mathrm{e} ^ {2 \pi x t} \mathrm{d} t \\ = \int_ {- \infty} ^ {\infty} f (u) \left\{\int_ {- R} ^ {R} \mathrm{e} ^ {2 \pi (\mathbf {x} - u) t} \mathrm{d} t \right\} \mathrm{d} u \\ = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (u) \frac {\sin 2 \pi R (x - u)}{x - u} d u \\ = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x - t) \frac {\sin 2 \pi R t}{t} \mathrm{d} t. \tag {3.17} \\ \end{array}
$$

上面第三个等式是用Fubini定理得到的.(3.17)式最末端的积分称为 $f$ 的Dirichlet积分,其积分核 $\frac{\sin 2\pi Rt}{t}$ 称为Dirichlet核.

如果直接令 $f_{R}(x)$ 为

$$
f _ {R} (x) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x - t) \frac {\sin 2 \pi R t}{t} d t
$$

$$
= \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x + t) \frac {\sin 2 \pi R t}{t} \mathrm{d} t
$$

然后考虑 $f_{R}(x)$ 的极限，就不需要假定 $f \in L(R)$ 这样强的条件，而只需设 $\frac{f(x)}{1 + |x|} \in L(R)$ ，由这个条件不难推知 $f$ 在任何有界区间是可积的。

对于任给 $a \in \mathbb{R}$ , 作以下函数:

$$
f ^ {(a)} (x) = f (x), \quad x \in [ a, a + 2 \pi),
$$

并且把它以 $2\pi$ 为周期延拓到全实轴. 我们将证明下述论断: $f_{R}(x)$ 在 $(a, a + 2\pi)$ 中的收敛性与周期函数 $f^{(a)}(x)$ 的 Fourier 级数部分和 $S_{n}(f^{(a)}, x)$ 的收敛性相同.

定理3.6 设 $\frac{f(x)}{1 + |x|} \in L(R)$ , 周期函数 $f^{(a)}(x)$ 与 $f(x)$ 在区间 $J_{a} = (a, a + 2\pi)$ 上相等, 则当 $R \to \infty$ 时,

$$
f _ {R} (x) - S _ {[ 2 \pi R ]} \left(f ^ {(a)}, x\right)\rightarrow 0, \quad x \in J _ {a}. \tag {3.18}
$$

证明 设 $x_0 \in J_a$ ，取 $\delta > 0$ 充分小，使 $x_0 \pm \delta \in J_a$ 。因为 $\left|\frac{f(x_0 + t)}{t}\right|$ 在 $|t| \geqslant \delta$ 处可积。用 Riemann-Lebesgue 引理，可把 (3.17') 式化为

$$
f _ {R} (x _ {0}) = \frac {1}{\pi} \int_ {- \delta} ^ {\delta} f (x _ {0} + t) \frac {\sin 2 \pi R t}{t} \mathrm{d} t + o (1).
$$

记 $R_{1} = 2\pi R, R_{2} = [R_{1}] + \frac{1}{2}$ , 则 $-\frac{1}{2} \leqslant R_{1} - R_{2} \leqslant \frac{1}{2}$ . 取 $n = [R_{1}]$ , $f^{(a)}$ 的Fourier级数部分和可表示成

$$
S _ {n} \left(f ^ {(a)}, x _ {0}\right) = \frac {1}{\pi} \int_ {- \delta} ^ {\delta} f (x _ {0} + t) \frac {\sin \left(n + \frac {1}{2}\right) t}{t} \mathrm{d} t + o (1).
$$

于是，两者之差为

$$
\begin{array}{l} f _ {R} (x) - S _ {[ R _ {1} ]} \left(f ^ {(a)}; x _ {0}\right) \\ = \frac {1}{\pi} \int_ {- \delta} ^ {\delta} f \left(x _ {0} + t\right) \frac {\sin R _ {1} t - \sin R _ {2} t}{t} d t + o (1) \\ \end{array}
$$

$$
= \left(\frac {R _ {1} - R _ {2}}{\pi}\right) \int_ {- \delta} ^ {\delta} f \left(x _ {0} + t\right) \frac {2 \sin \frac {1}{2} \left(R _ {1} - R _ {2}\right) t}{\left(R _ {1} - R _ {2}\right) t}
$$

$$
\times \cos \frac {1}{2} \left(R _ {1} + R _ {2}\right) t d t + o (1)
$$

$$
= I _ {R} + o (1) \quad (R \rightarrow \infty).
$$

由于 $h(x) = \frac{\sin x}{x}$ 是偶函数（设 $h(0) = 1$ ），它在 $\left[0, \frac{\pi}{2}\right)$ 是非负减函数。对被积函数中的因子 $2\sin \frac{1}{2}(R_1 - R_2)t / (R_1 - R_2)t$ 用积分第二中值定理可得

$$
\begin{array}{l} I _ {R} = \left(\frac {R _ {1} - R _ {2}}{\pi}\right) \int_ {0} ^ {\delta} [ f (x _ {0} + t) + f (x _ {0} - t) ] \\ \times \frac {2 \sin \frac {1}{2} \left(R _ {1} - R _ {2}\right) t}{\left(R _ {1} - R _ {2}\right) t} \cos \frac {1}{2} \left(R _ {1} + R _ {2}\right) t d t \\ = \left(\frac {R _ {1} - R _ {2}}{\pi}\right) \int_ {0} ^ {\zeta} [ f (x _ {0} + t) + f (x _ {0} - t) ] \cos \frac {1}{2} (R _ {1} + R _ {2}) t d t, \\ \end{array}
$$

其中 $0 < \zeta < \delta$ . 再根据 Riemann-Lebesgue 引理得到

$$
I _ {R} = o (1) \quad (R \rightarrow \infty),
$$

于是

$$
f _ {R} \left(x _ {0}\right) - S _ {\lceil 2 \pi R \rceil} \left(f ^ {(a)}, x _ {0}\right)\rightarrow 0 \quad (R \rightarrow \infty).
$$

注意, $I_{R}$ 式中的积分上限 $\zeta$ 可能与R有关,但由Riemann-Lebesgue引理的注可知 $I_{R}\rightarrow0$ 关于 $\zeta$ 是一致的.

进一步的讨论还可以证明:对于 $J_{a}$ 内任何闭子区间 $J_{a}^{\prime}$ ,

$$
f _ {R} (x) - S _ {[ 2 \pi R ]} (f ^ {(a)}, x) \rightarrow 0 \quad (R \rightarrow \infty)
$$

关于 $x \in J_a'$ 是一致的. 此证明省略(参看Zygmund[7]第XVI章).

推论3.7 若 $\frac{f(x)}{1 + |x|} \in L(R)$ , 如果对于 $x_0 \in J_a$ , 有

$$
S _ {n} \left(f ^ {(a)}, x _ {0}\right)\rightarrow S \quad (n \rightarrow \infty),
$$

则

$$
f _ {R} (x _ {0}) \rightarrow S \quad (R \rightarrow \infty).
$$

这个推论称为 Fourier 单积分定理.

推论3.8 设 $f \in L(R)$ , 若 $f$ 在 $x_0$ 处满足Fourier级数收敛的条件, 则 $f$ 的Fourier积分也在 $x_0$ 处收敛. 特别地,

(i) 若存在 $\delta > 0$ ，使得

$$
\int_ {0} ^ {\delta} \frac {\left| \varphi_ {x _ {0}} (t) - f (x _ {0}) \right|}{t} \mathrm{d} t <   \infty ,
$$

其中 $\varphi_{x_0}(t) = \frac{1}{2} [f(x_0 + t) + f(x_0 - t)]$ ，则

$$
\lim _ {R \rightarrow \infty} \int_ {- R} ^ {R} \hat {f} (t) \mathrm{e} ^ {2 \pi i x _ {0} t} \mathrm{d} t = \lim _ {R \rightarrow \infty} \int_ {- R} ^ {R} \mathrm{d} t \int_ {- \infty} ^ {\infty} f (u) \mathrm{e} ^ {2 \pi i (x _ {0} - u) t} \mathrm{d} u = f (x _ {0}). \tag {3.19}
$$

(ii) 若 $f$ 在 $x_0$ 的某个邻域上是有界变差的, 则把(3.19)式右端改为 $\frac{1}{2} [f(x_0 + 0) + f(x_0 - 0)]$ 后, 该等式成立.

本推论又称为 Fourier 重积分定理.

## § 3.3 求和理论

先考虑算术平均求和, 设 $f \in L(R)$ . 可以看到(3.17)式中的 $f_{R}(x)$ 相当于 Fourier 级数的部分和 $S_{n}(x)$ , 于是相应的算术平均应当为: 对 $T > 0$ ,

$$
\begin{array}{l} \sigma_ {T} (x) = \frac {1}{T} \int_ {0} ^ {T} f _ {R} (x) \mathrm{d} R = \frac {1}{T} \int_ {0} ^ {T} \left\{\int_ {- R} ^ {R} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t \right\} \mathrm{d} R \\ = \frac {1}{T} \left\{\int_ {0} ^ {T} \hat {f} (t) \mathrm{e} ^ {2 m x t} \left(\int_ {t} ^ {T} \mathrm{d} R\right) \mathrm{d} t + \int_ {- T} ^ {0} \hat {f} (t) \mathrm{e} ^ {2 m x t} \left(\int_ {- t} ^ {T} \mathrm{d} R\right) \mathrm{d} t \right\} \\ = \int_ {- T} ^ {T} \left(1 - \frac {| t |}{T}\right) \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t. \\ \end{array}
$$

记函数

$$
\Phi (t) = \left\{ \begin{array}{l l} 1 - | t |, & | t | \leqslant 1, \\ 0, & | t | > 1, \end{array} \right. \tag {3.20}
$$

则 $\sigma_T(x)$ 可改写成

$$
\sigma_ {T} (x) = \int_ {- \infty} ^ {\infty} \Phi \left(\frac {t}{T}\right) \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t. \tag {3.21}
$$

由(3.20)容易看到 $\Phi \in L(R)$ , 且 $\Phi$ 是偶函数.

引理3.9 设 $f \in L(R), \Phi \in L(R)$ , 记 $\hat{\Phi}(t) = K(t)$ , 则对 $\alpha > 0$ 有

$$
\int_ {- \infty} ^ {\infty} \Phi (\alpha t) \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = \int_ {- \infty} ^ {\infty} f (t) K _ {a} (t - x) \mathrm{d} t, \tag {3.22}
$$

其中 $K_{\alpha}(t) = \frac{1}{\alpha} K\left(\frac{t}{\alpha}\right)$ .

证明 由乘法公式(3.7)以及定理 3.1(vi)，(v)便可得到.

例 1 设 $\Phi(x)$ 由 (3.20) 给出, 求 $\hat{\Phi}$ .

解 通过计算可得

$$
\begin{array}{l} K (t) = \hat {\Phi} = \int_ {- 1} ^ {1} (1 - | x |) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x \\ = \int_ {0} ^ {1} (1 - x) \cdot 2 \cos 2 \pi t x d x \\ = 2 \frac {(1 - \cos 2 \pi t)}{4 \pi^ {2} t ^ {2}} = \left(\frac {\sin \pi t}{\pi t}\right) ^ {2}, \tag {3.23} \\ \end{array}
$$

还可算得

$$
\int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \left(\frac {\sin u}{u}\right) ^ {2} \mathrm{d} u = 1. \tag {3.24}
$$

于是，根据(3.22)及(3.23)，令 $\alpha=\frac{1}{T}$ ，得到

$$
\begin{array}{l} \sigma_ {T} (x) = \int_ {- \infty} ^ {\infty} \Phi \left(\frac {t}{T}\right) \hat {f} (t) \mathrm{e} ^ {2 \pi x t} \mathrm{d} t = \int_ {- \infty} ^ {\infty} f (t) K _ {a} (t - x) \mathrm{d} t \\ = \int_ {- \infty} ^ {\infty} f (t) \cdot T \cdot \left[ \frac {\sin \pi T (t - x)}{\pi T (t - x)} \right] ^ {2} d t \\ = \int_ {- \infty} ^ {\infty} f (x + u) \cdot \frac {1}{T} \left(\frac {\sin \pi T u}{\pi u}\right) ^ {2} d u \\ = \int_ {- \infty} ^ {\infty} f (x - t) \cdot \frac {1}{T} \left(\frac {\sin \pi T t}{\pi t}\right) ^ {2} \mathrm{d} t. \tag {3.25} \\ \end{array}
$$

上式右端的积分称为 $f$ 的Fejer积分， $\frac{1}{T}\left(\frac{\sin\pi Tt}{\pi t}\right)^2$ 称为Fejer

核. 如果 $\lim_{T\to \infty}\sigma_T(x) = S$ ，就说 $f$ 的Fourier积分在点 $x$ 可算术平均求和于 $S$ .

我们可以用与定理2.22类似的方法证明 $f$ 的Fourier积分几乎处处可算术平均求和于 $f(x)$ . 但在这里将与下面两种求和法一起用统一的方法来讨论.

其次考虑 Abel 求和法. 如果有

$$
\lim _ {y \rightarrow 0 _ {+}} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = S,
$$

就说 $f$ 的Fourier积分在点 $\pmb{x}$ 可Abel求和于 $S$ .

例2 设 $\Phi(x) = \mathrm{e}^{-|x|}$ , 求 $\hat{\Phi}$ .

解 $K(t) = \hat{\Phi}(t) = \int_{-\infty}^{\infty}\mathrm{e}^{-|x|}\mathrm{e}^{-2\pi xt}\mathrm{d}x$

$$
= 2 \int_ {0} ^ {\infty} \mathrm{e} ^ {- x} \cos 2 \pi t x \mathrm{d} x = \frac {2}{1 + (2 \pi t) ^ {2}}. \tag {3.26}
$$

用(3.22)式及(3.26)式可得 Abel 平均的公式如下：

$$
\begin{array}{l} u (x, y) = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi x t} \mathrm{d} t = \int_ {- \infty} ^ {\infty} \Phi (2 \pi y t) \hat {f} (t) \mathrm{e} ^ {2 \pi x t} \mathrm{d} t \\ = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) \frac {y}{(x - t) ^ {2} + y ^ {2}} d t \\ = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x - t) \frac {y}{t ^ {2} + y ^ {2}} \mathrm{d} t \quad (y > 0). \tag {3.27} \\ \end{array}
$$

上式右端的积分称为 $f$ 的 Poisson 积分. 令

$$
P (x, y) = \frac {1}{\pi} \frac {y}{x ^ {2} + y ^ {2}},
$$

它称为 Poisson 核. 对于例 2 中的 $K(t)$ 也容易算得

$$
\int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t = \int_ {- \infty} ^ {\infty} P (x, y) \mathrm{d} x = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {1}{1 + t ^ {2}} \mathrm{d} t = 1.
$$

与 Abel 求和法类似的是 Gauss 求和法. f 的 Fourier 积分的 Gauss 平均为

$$
G (x, \alpha) = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 4 \pi^ {2} \alpha t ^ {2}} \hat {f} (t) \mathrm{e} ^ {2 \pi | x t} \mathrm{d} t.
$$

如果有

$$
\lim _ {\alpha \rightarrow 0 _ {+}} G (x, \alpha) = S,
$$

就说 $f$ 的Fourier积分可Gauss求和于 $S$ .

例3 设 $\Phi(x) = \mathrm{e}^{-x^2}$ , 求 $\hat{\Phi}$ .

解 $K(t) = \hat{\Phi}(t) = \int_{-\infty}^{\infty}\mathrm{e}^{-x^2}\mathrm{e}^{-2\pi ixt}\mathrm{d}x.$

下面用复变函数论的方法来解此问题. 设 $z = x + \mathrm{i}y$ , 求函数 $\mathrm{e}^{-z^2}$ 在图3.1所示闭曲线上的积分. 因为 $\mathrm{e}^{-z^2}$ 解析, 由Cauchy定理知

$$
\int_ {\Gamma} \mathrm{e} ^ {- z ^ {2}} \mathrm{d} z = 0, \tag {3.28}
$$

![](9c6ae6a2fa427bac3d0e3f4e94bb3b8b0389c1a506f3349c3de97d9ffabcaab3.jpg)

<details>
<summary>text_image</summary>

-T+1t
Γ
T+1u
-T
O
T
x
y
</details>

图3.1

其中在与 x 轴垂直的两条直线段上的积分, 当 $T \to \infty$ 时极限为 0.
设 t 固定, 当 $T \to +\infty$ , 有

$$
\left| \int_ {T} ^ {T + 1 t} \mathrm{e} ^ {- z ^ {2}} \mathrm{d} z \right| = \left| \int_ {0} ^ {t} \mathrm{e} ^ {- (T + 1 y) ^ {2}} \mathrm{d} y \right| \leqslant \mathrm{e} ^ {- T ^ {2}} \int_ {0} ^ {t} \mathrm{e} ^ {y ^ {2}} \mathrm{d} y \rightarrow 0.
$$

类似地有 $\left|\int_{-T + u}^{-T}\mathrm{e}^{-z^2}\mathrm{d}z\right| \to 0 (T \to +\infty)$ . 于是根据(3.28)式推知 $\Gamma$ 中与 $x$ 轴平行的两条直线段上的积分的极限相等，即

$$
\lim _ {T \rightarrow + \infty} \int_ {- T + t} ^ {T + t} \mathrm{e} ^ {- z ^ {2}} \mathrm{d} z = \lim _ {T \rightarrow + \infty} \int_ {- T} ^ {T} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \sqrt {\pi}.
$$

而上式的左端等于

$$
\int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- (x + t) ^ {2}} \mathrm{d} x = \mathrm{e} ^ {t ^ {2}} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- (x ^ {2} + 2 i x t)} \mathrm{d} x.
$$

联合两端的结果便得到

$$
\int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{e} ^ {- 2 i x t} \mathrm{d} x = \sqrt {\pi} \mathrm{e} ^ {- t ^ {2}}.
$$

因此

$$
K (t) = \hat {\Phi} (t) = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{e} ^ {- 2 m x t} \mathrm{d} x = \sqrt {\pi} \mathrm{e} ^ {- (\pi t) ^ {2}}. \tag {3.29}
$$

容易算得

$$
\int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t = \frac {1}{\sqrt {\pi}} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- u ^ {2}} \mathrm{d} u = 1.
$$

用(3.22)及(3.29)式得到 Gauss 平均的公式

$$
\begin{array}{l} G (x, \alpha) = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 4 \pi^ {2} \alpha t ^ {2}} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t \\ = \int_ {- \infty} ^ {\infty} f (x - t) (4 \pi \alpha) ^ {- \frac {1}{2}} \mathrm{e} ^ {- \frac {t ^ {2}}{4 \alpha}} \mathrm{d} t. \tag {3.30} \\ \end{array}
$$

上式右端的积分称为 Gauss-Weierstrass 积分, 其中

$$
w (x, \alpha) = (4 \pi \alpha) ^ {- \frac {1}{2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a}}
$$

称为 Weierstrass 核.

以上各种求和可以统一考虑. 只需讨论当 $\alpha \to +0$ 时, $(f*K_{\alpha})(x)$ 是否收敛到 $f(x)$ .

定理3.10 设 $f \in L(R), K(t)$ 是 $\pmb{R}$ 上非负连续偶函数，它在 $[0, \infty)$ 单调递减，并且

$$
\int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t = 1, \tag {3.31}
$$

则在 $f$ 的Lebesgue点 $\pmb{x}$ 处，有

$$
\lim _ {\alpha \rightarrow 0 _ {+}} (f * K _ {\alpha}) (x) = f (x). \tag {3.32}
$$

这个定理是定理 1.9 的特殊情形, 它由定理 1.9 立即推得.

因为 $f$ 的连续点必定是 $f$ 的Lebesgue点，所以对于 $f$ 的连续点 $\pmb{x}$ 有(3.32)式成立.

定理3.11 设 $f \in L(R)$ , 则 $f$ 的Fourier积分在 $f$ 的Lebesgue点 $x$ 处可算术平均求和(可Abel求和或Gauss求和)于 $f(x)$ . 从而几乎处处可以算术平均求和于 $f(x)$ , 同样, 也几乎处处可 Abel 求和(或 Gauss 求和)于 $f(x)$ .

证明 根据(3.26)及(3.29)便得知 Abel 平均及 Gauss 平均相应的 $K(t)$ 都满足定理 3.10 的条件, 因此由定理 3.10 立刻得到本推论的结论. 关于算术平均相应的 $K(t)$ 由 (3.23) 给出, 它在 $[0, \infty)$ 不是单调递减的. 但是存在常数 C, 使得

$$
0 \leqslant K (t) = \left(\frac {\sin \pi t}{\pi t}\right) ^ {2} \leqslant \frac {C}{1 + t ^ {2}} = H (t).
$$

这里的 $H(t)$ 是非负连续偶函数，在 $[0, \infty)$ 单调递减，并且 $H(t) \in L(R)$ . 根据推论1.10，便可得到关于算术平均求和的结论。

$f$ 的Fourier积分关于上述三种求和法，也可以得到与定理2.18类似的结论.此处不再讨论.

定理3.12 设 $f \in L(R)$ , 则 $f$ 的Fourier积分按 $L^1$ 模可算术平均求和于 $f(x)$ , 即

$$
\lim _ {T \rightarrow \infty} \| \sigma_ {T} - f \| _ {1} = 0.
$$

同样地， $f$ 的 Fourier 积分按 $L^1$ 模可 Abel 求和（或 Gauss 求和）于 $f(x)$ .

证明 只要把定理 1.8 用于算术平均, Abel 平均及 Gauss 平均 (见 (3.25), (3.27) 以及 (3.30)). 它们相应的 $K(t)$ 都满足定理 1.8 的条件. 根据定理 1.8 即可得到结论.

定理3.13 设 $f \in L(R)$ , 并且 $f \in L(R)$ , 则 $f$ 的Fourier积分几乎处处收敛到 $f(x)$ , 即以下反演公式几乎处处成立:

$$
\int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = f (x), \quad \text { a.e. } \tag {3.33}
$$

如果 f 还是连续的, 则反演公式(3.33)处处成立.

证明 由定理3.11得知， $f$ 的Fourier积分在Lebesgue点 $x$ 处可Abel求和到 $f(x)$ ，即

$$
f (x) = \lim _ {y \to 0 _ {+}} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t, \quad \text { a.e. } \tag {3.34}
$$

注意到当 $y \to 0$ 时，上式右端被积函数的极限是 $f(t)\mathrm{e}^{2\pi ixt}$ ，并且

$$
\left| \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \right| \leqslant | \hat {f} (t) | \in L (\boldsymbol {R}), \quad y > 0.
$$

于是，在(3.34)右端用控制收敛定理便得知反演公式几乎处处成立：

$$
f (x) = \int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t, \quad \text { a   .   e   . }.
$$

若 $f$ 连续, 因为连续点必是Lebesgue点, 因此对每点都有等式(3.33)成立.

定理3.14 设 $f \in L(R)$ 并且有界, $\hat{f}(t)$ 非负, 则 $f$ 的Fourier积分几乎处处收敛于 $f(x)$ . 若 $f(x)$ 是连续的, 则反演公式处处成立.

证明 在定理所给条件下, 可以证明 $\hat{f} \in L(R)$ . 按假定 $|f(x)| \leqslant M, \forall x \in R$ . 由 (3.27) 得

$$
\begin{array}{l} | u (x, y) | = \left| \int_ {- \infty} ^ {\infty} e ^ {- 2 \pi y | t |} \hat {f} (t) e ^ {2 \pi x t} d t \right| \\ = \left| \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x - t) \frac {y}{t ^ {2} + y ^ {2}} d t \right| \\ \leqslant \frac {M}{\pi} \int_ {- \infty} ^ {\infty} \frac {y}{t ^ {2} + y ^ {2}} \mathrm{d} t = M, \quad y > 0. \\ \end{array}
$$

特别，取 $x = 0$ ，有

$$
\left| u (0, y) \right| = \left| \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{d} t \right| \leqslant M.
$$

因为 $\hat{f}$ 非负，上式积分中的被积函数非负，于是用Fatou定理得到

$$
\begin{array}{l} 0 \leqslant \int_ {- \infty} ^ {\infty} \hat {f} (t) d t = \int_ {- \infty} ^ {\infty} \lim _ {y \rightarrow 0 _ {+}} \left\{\hat {f} (t) e ^ {- 2 \pi y | t |} \right\} d t \\ \leqslant \lim _ {y \rightarrow + 0} \int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {- 2 \pi y | t |} \mathrm{d} t \leqslant M. \\ \end{array}
$$

由此便知 $\hat{f} \in L(R)$ . 用定理3.13即得结论.

定理 3.15(Fourier 变换的唯一性)

(i) 设 $f \in L(R)$ , 并且 $\hat{f}(t) = 0$ , a.e. $t \in R$ , 则 $f(x) = 0$ , a.e. $x \in R$ .

(ii) 设 $f, g \in L(R)$ , 并且 $\hat{f}(t) = \hat{g}(t)$ , a.e. $t \in R$ , 则 $f(x) =$

$$
g (x), \text { a.e. } x \in R.
$$

证明 (i) 因为 $\hat{f}(t) = 0$ , a.e., 显然 $\hat{f} \in L(R)$ . 由定理3.13知反演公式几乎处处成立：

$$
f (x) = \int_ {- \infty} ^ {\infty} \hat {f} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t = 0, \quad \text { a.e. }.
$$

.结论(ii)由(1)推得.它表明,两个不同的函数必有不同的Fourier变换.

定理 3.16 设 $f \in L(R)$ ，若存在 $g \in L(R)$ 使得 $\hat{g}(t) = (2\pi it) \cdot \hat{f}(t)(t \in R)$ ，则

$$
f (x) = \int_ {- \infty} ^ {x} g (y) \mathrm{d} y, \quad \mathrm{a.e.},
$$

即存在 $\varphi \in AC_{\mathrm{loc}}$ ，使 $f = \varphi$ ，a.e.，且 $\varphi^{\prime}\in L(R)$

证明 我们有

$$
\left[ f (x) - f (x - h) \right] ^ {\wedge} (t) = (1 - \mathrm{e} ^ {- 2 \pi h t}) \hat {f} (t) = \frac {1 - \mathrm{e} ^ {- 2 \pi h t}}{2 \pi \mathrm{i} t} \hat {g} (t),
$$

又有

$$
\begin{array}{l} \left(\int_ {- h} ^ {0} g (x + u) \mathrm{d} u\right) ^ {\wedge} (t) = \int_ {- \infty} ^ {\infty} \left(\int_ {- h} ^ {0} g (x + u) \mathrm{d} u\right) \mathrm{e} ^ {- 2 \pi i t} \mathrm{d} x \\ = \int_ {- h} ^ {0} \hat {g} (t) \mathrm{e} ^ {2 \pi i u t} \mathrm{d} u = \hat {g} (t) \frac {1 - \mathrm{e} ^ {- 2 \pi i h t}}{2 \pi i t}. \\ \end{array}
$$

由Fourier变换唯一性定理得知，对每个 $h > 0$

$$
f (x) - f (x - h) = \int_ {r - h} ^ {x} g (u) \mathrm{d} u, \quad \text { a.e. } x \in R.
$$

于是有

$$
\int_ {0} ^ {y} [ f (x) - f (x - h) ] \mathrm{d} x = \int_ {0} ^ {y} \left[ \int_ {x - h} ^ {x} g (u) \mathrm{d} u \right] \mathrm{d} x.
$$

对每个固定的 $y > 0$ ，当 $h\to \infty$ 时，取上式左端的极限，因为 $f\in L(R)$ ，得

$$
\lim _ {h \rightarrow \infty} \int_ {0} ^ {y} [ f (x) - f (x - h) ] \mathrm{d} x
$$

$$
= \int_ {0} ^ {y} f (x) \mathrm{d} x - \lim _ {h \rightarrow \infty} \int_ {- h} ^ {y - h} f (x) \mathrm{d} x = \int_ {0} ^ {y} f (x) \mathrm{d} x.
$$

而由控制收敛定理,取前一式右端的极限得

$$
\lim _ {h \rightarrow \infty} \int_ {0} ^ {y} \left[ \int_ {x - h} ^ {x} g (u) \mathrm{d} u \right] \mathrm{d} x = \int_ {0} ^ {y} \left[ \int_ {- \infty} ^ {x} g (u) \mathrm{d} u \right] \mathrm{d} x,
$$

因此由不定积分的微分性质,便得到

$$
f (x) = \int_ {- \infty} ^ {x} g (u) \mathrm{d} u, \quad \text { a.e., }
$$

若取 $\varphi(x) = \int_{-\infty}^{x} g(u) \mathrm{d}u$ ，便满足定理结论的要求。

例4 设 $f(x) = \frac{1}{1 + x^2}$ , 求 $\hat{f}(t)$ .

解 由例2知, 若 $\Phi(x) = \mathrm{e}^{-|x|}, \hat{\Phi}(t) = \frac{2}{1 + (2\pi t)^2} \in L(R)$ . 用定理3.13可知反演公式成立, 即

$$
\int_ {- \infty} ^ {\infty} \frac {2}{1 + (2 \pi t) ^ {2}} e ^ {2 \pi i x t} d t = e ^ {- | x |}.
$$

由此用定理 3.1(vi)，得

$$
\hat {f} (t) = \frac {1}{2} \cdot 2 \pi \mathrm{e} ^ {- 2 \pi | t |} = \pi \mathrm{e} ^ {- 2 \pi | t |}.
$$

## § 3.4 $L^2$ 中函数的 Fourier 变换

对于有限区间 $(a, b)$ , 属于 $L^2(a, b)$ 的函数必定属于 $L(a, b)$ . 而对无限区间, 这样的论断不成立. 属于 $L^2(R)$ 的函数不一定属于 $L(R)$ . 例如 $\frac{\sin^2 x}{x^2} \in L(R)$ , 若令 $f(x) = \frac{\sin x}{x}$ , 便有 $f \in L^2(R)$ , 但 $f \in L(R)$ . 因此对于 $f \in L^2(R)$ , 按前面(3.3)的定义, 它的 Fourier 变换可能不存在. 本节将给出 $L^2(R)$ 中函数的 Fourier 变换的定义.

设 $f \in L^{2}(\mathbb{R})$ ，它必定局部可积。令

$$
c _ {r} (t) = \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x, \tag {3.35}
$$

如果存在 $c(t)\in L^2 (\pmb {R})$ ，使得

$$
\lim _ {r \rightarrow \infty} \| c _ {r} - c \| _ {2} = 0,
$$

其中 $\| c_r - c \|_2 = \left\{\int_{-\infty}^{\infty}|c_r(t) - c(t)|^2\mathrm{d}t\right\}^{1/2}$ , 就称 $c(t)$ 为 $f$ 在 $L^2(R)$ 中的 Fourier 变换, 也记作 $\hat{f}(t)$ , 表示成

$$
\hat {f} (t) = c (t) = 1. 1. \mathrm{m}. \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi x t} \mathrm{d} x, \tag {3.36}
$$

这里的 l.1.m. 表示 $L^{2}$ 平均意义下的极限, 是 limit in the mean 的缩写.

下面将证明 $c_{r}(t)$ 在 $L^2 (\pmb {R})$ 中的极限必定存在，即 $L^2 (\pmb {R})$ 中函数的Fourier变换总是存在的，并且有Parseval等式以及反演公式成立.为了证明这些论断，先给出以下引理.

引理3.17 设 $f \in L^{1} \cap L^{2}(R)$ , 则

$$
\| f \| _ {2} = \| \hat {f} \| _ {2}, \tag {3.37}
$$

其中 $\hat{f}(t)$ 由 (3.3) 定义.

证明 若能证明等式

$$
\int_ {- \infty} ^ {\infty} f (u) \overline {{{f (u - x)}}} \mathrm{d} u = \int_ {- \infty} ^ {\infty} | \hat {f} (t) | ^ {2} \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t \tag {3.38}
$$

对一切 $x \in (-\infty, \infty)$ 成立，则只要令 $x = 0$ ，便得到结论(3.37).为证明(3.38)，作函数

$$
h (x) = \int_ {- \infty} ^ {\infty} f (u) \overline {{{f (u - x)}}} \mathrm{d} u, \tag {3.39}
$$

令 $g(y) = \overline{f(-y)}$ ，即有 $h(x) = (g * f)(x)$ ，根据定理3.4知 $h \in L(R)$ ，并且

$$
\hat {h} (t) = \hat {g} (t) \cdot \hat {f} (t) = \overline {{\hat {f} (t)}} \cdot \hat {f} (t) = | \hat {f} (t) | ^ {2} \geqslant 0.
$$

又由Cauchy-Schwarz不等式有

$$
\left| h (x) \right| \leqslant \| f \| _ {2} \| f \| _ {2},
$$

即 $h(x)$ 有界.于是，由定理3.14得知反演公式几乎处处成立，即

$$
h (x) = \int_ {- \infty} ^ {\infty} | \hat {f} (t) | ^ {2} \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t, \quad \text {a.e.}. \tag {3.40}
$$

可以证明 $h(x)$ 又是连续的：

$$
\left| h (x + \delta) - h (x) \right| = \int_ {- \infty} ^ {\infty} f (u) \overline {{\left[ f (u - x - \delta) - f (u - x) \right]}} d u
$$

$$
\leqslant \| f \| _ {2} \left(\int_ {- \infty} ^ {\infty} | f (u - x - \delta) - f (u - x) | ^ {2} \mathrm{d} u\right) ^ {1 / 2} \rightarrow 0, \delta \rightarrow 0,
$$

根据 $f$ 的平均连续性得知上式右端趋向于零. 因此反演公式 (3.38) 处处成立. 令 $x = 0$ , 得结论 (3.37).

定理3.18(Plancherel定理）设 $f\in L^2 (\pmb {R})$ ，则有

(i) 存在 $\hat{f}(t) \in L^2(R)$ , 使得

$$
\hat {f} (t) = \mathrm{l.i.m.} \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x, \tag {3.41}
$$

亦即 $\| \hat{f} - c_r \|_2 \to 0 (r \to \infty)$ ;

(11) Parseval 等式成立：

$$
\| f \| _ {2} = \| \hat {f} \| _ {2}; \tag {3.42}
$$

(iii) 反演公式成立：

$$
f (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t. \tag {3.43}
$$

对任意函数 $g \in L^2(\mathbb{R})$ ，也有以下 Parseval 等式成立：

$$
\int_ {- \infty} ^ {\infty} f (x) \overline {{g (x)}} \mathrm{d} x = \int_ {- \infty} ^ {\infty} \hat {f} (t) \overline {{\hat {g} (t)}} \mathrm{d} t, \tag {3.44}
$$

$$
\int_ {- \infty} ^ {\infty} f (x) \hat {g} (x) \mathrm{d} x = \int_ {- \infty} ^ {\infty} \hat {f} (x) g (x) \mathrm{d} x. \tag {3.45}
$$

证明 设 $f \in L^{2}(\mathbb{R})$ ，作以下截断函数

$$
f _ {r} (x) = \left\{ \begin{array}{l l} f (x), & | x | \leqslant r, \\ 0, & | x | > r, r > 0. \end{array} \right.
$$

易知 $f_{r} \in L^{1} \cap L^{2}(\mathbb{R})$ . 如果设 $r' > r$ ，当 $r', r \to \infty$ 时，有

$$
\left\| f _ {r} - f _ {r ^ {\prime}} \right\| _ {2} = \left(\int_ {r <   | x | \leqslant r ^ {\prime}} | f (x) | ^ {2} \mathrm{d} x\right) ^ {1 / 2} \rightarrow 0. \tag {3.46}
$$

$f_{r}$ 的Fourier变换正是(3.35)中的 $c_{r}(t)$ ，

$$
\hat {f} _ {r} (t) = \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x = c _ {r} (t),
$$

根据引理 3.17 以及(3.46)式,我们有

$$
\| \hat {f} _ {r} - \hat {f} _ {r ^ {\prime}} \| _ {2} = \| f _ {r} - f _ {r ^ {\prime}} \| _ {2} \rightarrow 0 (r, r ^ {\prime} \rightarrow \infty).
$$

于是，由 $L^2 (\pmb {R})$ 的完备性，便知必存在 $\hat{f}_r(t)$ 在 $L^2 (\pmb {R})$ 中的极限 $\hat{f}(t)$ $\in L^{2}(\pmb {R})$ ，使得

$$
\| \iota_ {r} - \hat {f} \| _ {2} = \| \hat {f} _ {r} - \hat {f} \| _ {2} \rightarrow 0 (r \rightarrow \infty).
$$

因此有(3.41)成立, $\hat{f}(t)$ 就是f在 $L^{2}(\mathbb{R})$ 中的Fourier变换.而由引理3.17,有

$$
\| f _ {r} \| _ {2} = \| \hat {f} _ {r} \| _ {2}.
$$

令 $r \to \infty$ ，因为 $\lim_{r \to \infty} \| f_r - f \|_2 = 0$ ，便得到

$$
\| f \| _ {2} = \| \hat {f} \| _ {2},
$$

这就是 Parseval 等式.

下面证明反演公式(3.43)成立. 因 $f \in L^{2}(\mathbb{R})$ , 存在紧支集的阶梯函数 $\varphi_{n}$ , 使得

$$
\lim _ {n \to \infty} \| f - \varphi_ {n} \| _ {2} = 0. \tag {3.47}
$$

显然 $\varphi_{n} \in L^{1} \cap L^{2}(\mathbb{R})$ . 按 $L^{1}$ 中函数的 Fourier 变换定义, 有

$$
\hat {\varphi} _ {n} (t) = \int_ {- \infty} ^ {\infty} \varphi_ {n} (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x = \lim _ {r \rightarrow \infty} \int_ {- r} ^ {r} \varphi_ {n} (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} t. \tag {3.48}
$$

因为阶梯函数 $\varphi_{n}$ 是有界变差函数，它除有限个点外是连续的。从而由推论3.8的(ii)得到

$$
\varphi_ {n} (x) = \lim _ {r \to \infty} \int_ {- r} ^ {r} \hat {\varphi} _ {n} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t, \quad \text { a.e. } \tag {3.49}
$$

又因 $\varphi_{n} \in L^{2}(\mathbb{R})$ ，根据已证明的(3.41)得知它有按 $L^{2}$ 意义的Fourier变换 $\iota_{n}(t) \in L^{2}(\mathbb{R})$ ，使得

$$
c _ {n} (t) = 1. 1. \mathrm{m.} \int_ {- r} ^ {r} \varphi_ {n} (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x.
$$

注意到：若函数列几乎处处点收敛的极限与 $L^2$ 平均收敛的极限都存在，则二者必几乎处处相等. 因此 $c_n(t) = \hat{\varphi}_n(t)$ a.e., 也就是

$$
\hat {\varphi} _ {n} (t) = 1. 1. \mathrm{m}. \int_ {- r} ^ {r} \varphi_ {n} (x) \mathrm{e} ^ {- 2 \mathrm{m} x t} \mathrm{d} x, \tag {3.50}
$$

并且 $\hat{\varphi}_n(t) \in L^2(R)$ , 根据已证明的结论 (i), 可知 $\hat{\varphi}_n$ 也有 $L^2$ 意义的 Fourier 变换, 即

$$
1. \mathrm{i.m.} \int_ {- r} ^ {r} \hat {\varphi} _ {n} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t
$$

存在,从而它与(3.49)式右端所表示的逐点极限应当几乎处处相等,即

$$
\varphi_ {n} (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} \hat {\varphi} _ {n} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t. \tag {3.51}
$$

由结论(ii)的 Parseval 等式及(3.47)式得到

$$
\| \hat {f} - \hat {\varphi} _ {n} \| _ {2} = \| f - \varphi_ {n} \| _ {2} \rightarrow 0 \quad (n \rightarrow \infty).
$$

因为 $\hat{f} \in L^2(R)$ , 根据结论 (i) 可知 (3.43) 右端的 $L^2$ 极限必定存在, 记它为

$$
f _ {1} (x) = 1. \underset {r \rightarrow \infty} {\mathrm{i.m.}} \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = 1. \underset {r \rightarrow \infty} {\mathrm{i.m.}} \int_ {- r} ^ {r} \hat {f} (- t) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} t,
$$

它可以看作是 $\hat{f}(-t)$ 按 $L^2$ 意义的Fourier变换，于是有

$$
f _ {1} (x) - \varphi_ {n} (x) = (\hat {f} (- t) - \hat {\varphi} _ {n} (- t)) ^ {\wedge} (x).
$$

从而由 Parseval 等式得

$$
\| f _ {1} - \varphi_ {n} \| _ {2} = \| \hat {f} - \hat {\varphi} _ {n} \| _ {2} \rightarrow 0 (n \rightarrow \infty),
$$

再由(3.47)式便知 $f_{1}$ 与 $f$ 都是 $\varphi_{n}$ 在 $L^2 (\pmb {R})$ 中的极限，因此

$$
f _ {1} (x) = f (x), \quad \mathrm{a.e.},
$$

也就是有

$$
f (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t, \quad \text { a   .   e   . },
$$

这就是反演公式(3.43).

若有任意函数 $g \in L^2(\mathbb{R})$ . 对 $f + g$ 以及 $f + \mathrm{i}g$ 用 Parseval 等

式(3.42). 先由

$$
\| f + g \| _ {2} ^ {2} = \| \hat {f} + \hat {g} \| _ {2} ^ {2}
$$

得到

$$
\begin{array}{l} \| f + g \| _ {2} ^ {2} = \| f \| _ {2} ^ {2} + \int_ {- \infty} ^ {\infty} f \overline {{{g}}} \mathrm{d} x + \int_ {- \infty} ^ {\infty} \overline {{{f}}} g \mathrm{d} x + \| g \| _ {2} ^ {2} \\ = \| \hat {f} + \hat {g} \| _ {2} ^ {2} = \| \hat {f} \| _ {2} ^ {2} + \int_ {- \infty} ^ {\infty} \hat {f} \overline {{{\hat {g}}}} d x + \int_ {- \infty} ^ {\infty} \overline {{{\hat {f}}}} \hat {g} d x + \| \hat {g} \| _ {2} ^ {2}. \\ \end{array}
$$

因为 $\| f\| _2 = \| \hat{f}\| _2,\| g\| _2 = \| \hat{g}\| _2$ ，所以由上式便得到

$$
\operatorname{Re} \left(\int_ {- \infty} ^ {\infty} f \overline {{{g}}} \mathrm{d} x\right) = \operatorname{Re} \left(\int_ {- \infty} ^ {\infty} \hat {f} \overline {{{\hat {g}}}} \mathrm{d} x\right).
$$

类似地由

$$
\| f + \mathrm{i} g \| _ {2} ^ {2} = \| \hat {f} + \mathrm{i} \hat {g} \| _ {2} ^ {2}
$$

推知

$$
\operatorname{Im} \left(\int_ {- \infty} ^ {\infty} f \bar {g} \mathrm{d} x\right) = \operatorname{Im} \left(\int_ {- \infty} ^ {\infty} \hat {f} \overline {{{\hat {g}}}} \mathrm{d} x\right).
$$

从而得知等式(3.44)成立. 在(3.44)式的左端用 $\hat{g} = (\overline{\hat{g}})$ 代替 $\overline{g}$ , 右端用 $(\overline{\hat{g}})^{\wedge} = \overline{g}$ 代入, 便得到(3.45)式.

注 若令

$$
f _ {a, b} (x) = \left\{ \begin{array}{l l} f (x), & a \leqslant x \leqslant b, \\ 0, & \text {其他}. \end{array} \right.
$$

用定理证明中类似的方法可以得到当 $b, b' \to \infty, a, a' \to -\infty$ 时，

$$
\| \hat {f} _ {a b} - \hat {f} _ {a ^ {\prime}, b ^ {\prime}} \| _ {2} = \| f _ {a, b} - f _ {a ^ {\prime}, b ^ {\prime}} \| _ {2} \rightarrow 0,
$$

从而得到Fourier变换的更一般形式

$$
\hat{f} (t) = 1,1,\mathrm{m.}\int \limits_{\substack{b\to \infty \\ a\to -\infty}}^{b}f(x)\mathrm{e}^{-2\pi xt}\mathrm{d}t.
$$

由此式与由(3.41)式所决定的 $\hat{f}(t)$ 相同. 类似地, 反演公式可改写为

$$
f (x) = \operatorname * {l. i. m.} _ {\substack {b \to \infty \\ a \to - (\infty)}} \int_ {a} ^ {b} \hat {f} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t.
$$

如果记 $L^2 (\pmb {R})$ 中的映射 $\mathcal{F}$ 为： $f\to \hat{f}$ ，即 $(\mathcal{F}f)(t) = \hat{f} (t)$ ，则由Plancherel定理可推知：

$$
\left(\mathcal {F} ^ {2} f\right) (x) = f (- x),
$$

$$
\left(\mathcal {F} ^ {4} f\right) (x) = f (x), \quad f \in L ^ {2} (\boldsymbol {R}).
$$

映射 $\mathcal{F}$ 不仅是 $L^2 (R)$ 到 $L^2 (R)$ 的保范算子：

$$
\| \mathcal {F} f \| _ {2} = \| f \| _ {2},
$$

而且它的逆算子是 $\mathcal{F}^{-1} = \mathcal{F}^3$ ，还有，

$$
\left(\mathcal {F} ^ {- 1} f\right) (x) = (\mathcal {F} f) (- x),
$$

$\mathcal{F}^{-1}$ 的定义域是 $L^2 (\pmb {R})$ ，亦即 $\mathcal{F}$ 的值域是 $L^2 (\pmb {R})$ 全空间，因此可称 $\mathcal{F}$ 是 $L^2 (\pmb {R})$ 到 $L^2 (\pmb {R})$ 的酉变换.

Plancherel 定理还有另一形式,写成以下定理.

定理3.19 设 $f \in L^2(R)$ , 则

$$
\hat {f} (t) = \frac {\mathrm{d}}{\mathrm{d} t} \int_ {- \infty} ^ {\infty} f (x) \frac {\mathrm{e} ^ {- 2 \pi i x t} - 1}{- 2 \pi \mathrm{i} x} \mathrm{d} x, \quad \text { a.e., } \tag {3.52}
$$

并且

$$
f (x) = \frac {\mathrm{d}}{\mathrm{d} x} \int_ {- \infty} ^ {\infty} \hat {f} (t) \frac {\mathrm{e} ^ {2 \pi \mathrm{i} x t} - 1}{2 \pi \mathrm{i} t} \mathrm{d} t, \quad \text { a.e. } \tag {3.53}
$$

证明 为了证明(3.52)式,先证明以下等式

$$
\int_ {0} ^ {t} \hat {f} (u) \mathrm{d} u = \int_ {- \infty} ^ {\infty} \frac {\mathrm{e} ^ {- 2 \pi \mathrm{i} x t} - 1}{- 2 \pi \mathrm{i} x} f (x) \mathrm{d} x. \tag {3.54}
$$

因 $f \in L^2(\mathbb{R})$ ，且 $\frac{\mathrm{e}^{-2\pi i x t} - 1}{-2\pi \mathrm{i}x} \in L^2(\mathbb{R})$ ，故上式右端的被积函数是Lebesgue可积的。上式左端的 $\hat{f}(u)$ 满足(3.41)式。若记

$$
c _ {r} (u) = \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi i x u} \mathrm{d} x,
$$

再令

$$
\begin{array}{l} \Phi_ {r} (t) = \int_ {0} ^ {t} c _ {r} (u) \mathrm{d} u = \int_ {0} ^ {t} \left[ \int_ {- r} ^ {r} f (x) \mathrm{e} ^ {- 2 \pi i x u} \mathrm{d} x \right] \mathrm{d} u \\ = \int_ {- r} ^ {r} f (x) \frac {\mathrm{e} ^ {- 2 \pi \mathrm{i} x t} - 1}{- 2 \pi \mathrm{i} x} \mathrm{d} x, \\ \end{array}
$$

$$
\Phi (t) = \int_ {0} ^ {t} \hat {f} (u) \mathrm{d} u.
$$

那么,对任意固定的 t 有

$$
\begin{array}{l} \left| \Phi (t) - \Phi_ {r} (t) \right| = \left| \int_ {0} ^ {t} [ \hat {f} (u) - c _ {r} (u) ] d u \right| \\ \leqslant | t | ^ {\frac {1}{2}} \| \hat {f} - c _ {r} \| _ {2} \rightarrow 0, r \rightarrow \infty . \\ \end{array}
$$

由此推知

$$
\Phi (t) = \lim _ {r \rightarrow \infty} \Phi_ {r} (t),
$$

便可得到(3.54)式：

$$
\begin{array}{l} \int_ {0} ^ {t} \hat {f} (u) \mathrm{d} u = \lim _ {r \rightarrow \infty} \int_ {- r} ^ {r} f (x) \frac {\mathrm{e} ^ {- 2 \pi i x t} - 1}{- 2 \pi i x} \mathrm{d} x \\ = \int_ {- \infty} ^ {(\infty)} f (x) \frac {\mathrm{e} ^ {- 2 \pi i x t} - 1}{- 2 \pi \mathrm{i} x} \mathrm{d} x. \\ \end{array}
$$

上式左端是 $f$ 的不定积分, 两端关于 $t$ 取微商, 便得到 (3.52). 类似可证 (3.53).

## § 3.5 卷积及其 Fourier 变换

在定理3.4中曾指出：若 $f, g \in L^{1}(\mathbb{R})$ ，则 $f * g$ 也属于 $L^{1}(\mathbb{R})$ ，且 $(f * g)^{\wedge}(t) = \hat{f}(t) \cdot \hat{g}(t)$ . 但如果 $f$ 与 $g$ 都属于 $L^{2}(\mathbb{R})$ ，那么还不能推知 $f * g$ 是平方可积或可积的，也就得不到上述等式. 这时 $f \cdot g$ 及 $\hat{f} \cdot \hat{g}$ 都是可积的，从而可以得到相当于上述等式经过逆运算所得的结果.

定理3.20 设 $f, g \in L^{2}(\mathbb{R})$ ，则

$$
(f \cdot g) ^ {\wedge} (t) = (\hat {f} * \hat {g}) (t). \tag {3.55}
$$

证明 设 t 固定, 若记

$$
h (x) = \overline {{{g (x)}}} \mathrm{e} ^ {2 \pi i x t},
$$

我们有

$$
\hat {h} (u) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} (\overline {{{{g (x)}}}} \mathrm{e} ^ {2 \pi u t}) \mathrm{e} ^ {- 2 \pi u x} \mathrm{d} x
$$

$$
\begin{array}{l} = 1, \text { i   .   m   . } \int_ {- r} ^ {r} g (x) \mathrm{e} ^ {- 2 \pi x (t - u)} \mathrm{d} x \\ = \overline {{\hat {g} (t - u)}}. \\ \end{array}
$$

因为 $(f\cdot g)\in L(R)$ ，根据定理3.18的(3.44)式，便得

$$
\begin{array}{l} (f \cdot g) ^ {\wedge} (t) = \int_ {- \infty} ^ {\infty} f (x) g (x) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x \\ = \int_ {- \infty} ^ {\infty} f \bar {h} d x = \int_ {- \infty} ^ {\infty} \hat {f} \bar {h} d u \\ = \int_ {- \infty} ^ {\infty} \hat {f} (u) \hat {g} (t - u) d u \\ = (\hat {f} * \hat {g} (t), \\ \end{array}
$$

即(3.55)式成立.

前面曾说过，记 $(\mathcal{F}f)(t) = \hat{f} (t)$ ，由反演公式(3.43)知

$$
f (x) = \mathcal {F} ^ {- 1} (\mathcal {F} f) (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t.
$$

因此对于 $g \in L^2(R)$ , 它的 Fourier 逆变换满足

$$
\left(\mathcal {F} ^ {- 1} g\right) (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {- r} ^ {r} g (t) \mathrm{e} ^ {2 \pi x t} \mathrm{d} t
$$

$$
= (\mathcal {F} g) (- x), \tag {3.56}
$$

$$
\mathcal {F} ^ {- 1} (g (t)) = \mathcal {F} (g (- t)). \tag {3.57}
$$

推论3.21 设 $f, g \in L^{2}(\mathbb{R})$ ，则 $f * g$ 是 $\hat{f} \cdot \hat{g}$ 的Fourier逆变换，即

$$
\int_ {- \infty} ^ {\infty} \hat {f} (t) \hat {g} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = (f * g) (x). \tag {3.58}
$$

证明 根据(3.57)，并用(3.55)，可得

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} \hat {f} (t) \hat {g} (t) \mathrm{e} ^ {2 m x t} \mathrm{d} t = \int_ {- \infty} ^ {\infty} \hat {f} (- t) \hat {g} (- t) \mathrm{e} ^ {- 2 m x t} \mathrm{d} t \\ = \mathscr {F} (\hat {f} (- t)) * \mathscr {F} (\hat {g} (- t)) = (f * g) (x). \\ \end{array}
$$

如果 $f$ 与 $g$ 都属于 $L^2(R)$ , 我们推知 $f * g \in L^\infty(R)$ , 尚不能讨论 $f * g$ 的 Fourier 变换. 但若 $f$ 与 $g$ 中有一个属于 $L^1(R)$ , 便知 $f*g\in L^{2}(\pmb {R})$ ，它的Fourier变换就有意义了.

定理3.22 设 $f \in L^{2}(\pmb{R}), g \in L^{1}(\pmb{R})$ ，则

$$
(f * g) ^ {\wedge} (t) = \hat {f} (t) \cdot \hat {g} (t). \tag {3.59}
$$

证明 因为有 $\| f * g \|_2 \leqslant \| f \|_2 \| g \|_1$ ，所以知 $f * g \in L^2(R)$ ，而由 $\hat{f} \in L^2(R), \hat{g} \in L^\infty(R)$ ，可知 $\hat{f} \cdot \hat{g} \in L^2(R)$ . 我们来证明下式成立：

$$
\mathcal {F} ^ {- 1} (\hat {f} \hat {g}) = f * g. \tag {3.60}
$$

先考虑

$$
\begin{array}{l} \int_ {- r} ^ {r} \hat {f} (t) \hat {g} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi i x t} \left\{\int_ {- \infty} ^ {\infty} g (u) \mathrm{e} ^ {- 2 \pi i u} \mathrm{d} u \right\} \mathrm{d} t \\ = \int_ {- \infty} ^ {\infty} g (u) \left\{\int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 \pi \mathrm{i} (t - u) t} \mathrm{d} t \right\} \mathrm{d} u \\ = \int_ {- \infty} ^ {\infty} g (u) f _ {r} (x - u) d u = \left(f _ {r} * g\right) (x), \\ \end{array}
$$

其中第二个等号是根据Fubini定理.又记

$$
f _ {r} (x) = \int_ {- r} ^ {r} \hat {f} (t) \mathrm{e} ^ {2 m x t} \mathrm{d} t,
$$

由(3.43)知 $\lim_{r\to \infty}\| f_r - f\| _2 = 0$ ，便得

$$
\| f, * g - f * g \| _ {2} \leqslant \| f, - f \| _ {2} \| g \| _ {1} \rightarrow 0, r \rightarrow \infty .
$$

因此有

$$
\begin{array}{l} \mathcal {F} ^ {- 1} (\hat {f} \hat {g}) = 1, 1, \mathrm{m}. \int_ {- r} ^ {r} \hat {f} (t) \hat {g} (t) \mathrm{e} ^ {2 \pi \mathrm{i} x t} \mathrm{d} t \\ = \underset {r \rightarrow \infty} {\mathrm{l.i.m.}} (f _ {r} * g) = f * g. \\ \end{array}
$$

根据 Plancherel 定理, 对 (3.60) 式两边作用算子 $\mathcal{F}$ , 便得到 (3.59).

## § 3.6 应用与例

Fourier 变换与 Fourier 积分在数学, 物理与无线电等许多方面都有广泛的应用. 在这里我们只能对部分例子作一些介绍.

### 1. 求积分的值

我们可以利用某些已知函数的 Fourier 变换的表示式以及 Fourier 变换的性质或关系式, 求出一些积分的值.

例1 求下述广义积分与积分的值：

$$
D _ {1} (x) = \lim _ {R \rightarrow \infty} \frac {1}{\pi} \int_ {- R} ^ {R} \frac {\sin t}{t} \cos x t \mathrm{d} t,
$$

$$
I (a, \lambda) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {\sin t}{t} \frac {\sin \lambda (t - a)}{t - a} \mathrm{d} t,
$$

其中 a 是实数, $\lambda > 0$ .

解 考虑函数

$$
D (x) = \left\{ \begin{array}{l l} 1, & | x | <   1, \\ 0, & | x | > 1, \\ \frac {1}{2}, & | x | = 1 \end{array} \right.
$$

(见图 3.2), 显然 $D \in L^{1}(\mathbb{R}) \cap L^{2}(\mathbb{R})$ . 它的 Fourier 变换为

![](5849ca8a28a4701ff9b8fad30bdccede350d9394626c70b7bce6d3a6db0d5e22.jpg)

<details>
<summary>text_image</summary>

y
1 D(x)
-1 O 1 x
</details>

图3.2

$$
\hat {D} (t) = \int_ {- 1} ^ {1} \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} x = \frac {\sin 2 \pi t}{\pi t}.
$$

$\hat{D} \in L^{2}(\mathbb{R})$ . 因为 $D(x)$ 在任意有界区间上是有界变差的, 所以根据推论3.8得知

$$
\lim _ {R \rightarrow \infty} \int_ {- R} ^ {R} \frac {\sin 2 \pi t}{\pi t} \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t = D (x),
$$

上式左右两端的实部应当相等,由此得到

$$
\lim _ {R \rightarrow \infty} \frac {1}{\pi} \int_ {- R} ^ {R} \frac {\sin 2 \pi t}{t} \cos 2 \pi x t d t = D (x).
$$

令 $u = 2\pi t$ ，便算得

$$
D _ {1} (x) = \lim _ {R \rightarrow \infty} \frac {1}{\pi} \int_ {- R} ^ {R} \frac {\sin u}{u} \cos x u \mathrm{d} u = D (x).
$$

下面利用 Parseval 等式(3.44)来计算 $I(a,\lambda)$ . 根据定理 3.1112

及 $\hat{D}(t)$ 的表示式可算得

$$
\left[ D \left(\frac {2 \pi x}{\lambda}\right) \right] ^ {\wedge} (t) = \frac {\lambda}{2 \pi} \hat {D} \left(\frac {\lambda}{2 \pi} t\right) = \frac {\sin \lambda t}{\pi t},
$$

$$
\left[ \mathrm{e} ^ {2 \pi \max} D \left(\frac {2 \pi}{\lambda} x\right) \right] ^ {\wedge} (t) = \frac {\sin \lambda (t - a)}{\pi (t - a)}.
$$

于是由(3.44)式便得到

$$
\frac {1}{\pi^ {2}} \int_ {- \infty} ^ {\infty} \frac {\sin t}{t} \frac {\sin \lambda (t - a)}{t - a} d t = \int_ {- \infty} ^ {\infty} D (2 \pi x) \overline {{{\mathrm{e} ^ {2 \pi a x} D \left(\frac {2 \pi}{\lambda} x\right)}}} d x
$$

$$
= \int_ {- \infty} ^ {\infty} D (2 \pi x) D \left(\frac {2 \pi}{\lambda} x\right) \mathrm{e} ^ {- 2 \pi a x} \mathrm{d} x,
$$

从而把 $D(x)$ 的表示式代入算得：若 $a \neq 0$

$$
I (a, \lambda) = \left\{ \begin{array}{l l} \pi \int_ {- 1 / 2 \pi} ^ {1 / 2 \pi} \mathrm{e} ^ {- 2 \pi \mathrm{i} a x} \mathrm{d} x = \frac {\sin a}{a}, & \lambda \geqslant 1, \\ \pi \int_ {- \lambda / 2 \pi} ^ {\lambda / 2 \pi} \mathrm{e} ^ {- 2 \pi \mathrm{i} a x} \mathrm{d} x = \frac {\sin \lambda a}{a}, & 0 <   \lambda <   1, \end{array} \right.
$$

$$
I (0, \lambda) = \left\{ \begin{array}{l l} 1, & \lambda \geqslant 1, \\ \lambda , & 0 <   \lambda <   1. \end{array} \right.
$$

当 $\lambda < 0$ 时，也可由 $I(a, \lambda) = -I(a, |\lambda|)$ 算得它的值。特别，若 $a = 0, \lambda = 1$ ，得到

$$
I (0, 1) = 1,
$$

亦即(3.24)式成立.

例2 设函数

$$
\Omega (x) = \Omega (x; \delta , h) = \left\{ \begin{array}{l l} 1, & | x | \leqslant \delta , \\ 0, & | x | \geqslant \delta + h, \\ \text {线性函数}, & \delta \leqslant x \leqslant \delta + h, \\ & - (\delta + h) \leqslant x \leqslant - \delta \end{array} \right.
$$

(见图 3.3), 求 $\hat{\Omega}(t)$ .

解 $\Omega(x)$ 可以看作函数 $\Delta(x)$ (见图3.4)通过适当的展缩后，所作的线性组合，其中

$$
\Delta (x) = \Delta_ {1} (x) = \left\{ \begin{array}{l l} 1 - | x |, & | x | \leqslant 1, \\ 0, & | x | > 1. \end{array} \right.
$$

令

![](c69b3051d2e8e352fd008da717ca0d2b3ae6af8d44da9042aa61be36750fd42a.jpg)

<details>
<summary>text_image</summary>

y
1 Ω(x)
- (δ+h) -δ O δ δ+h x
</details>

图3.3

$$
\Delta_ {R} (x) = \Delta_ {1} \left(\frac {x}{R}\right) = \left\{ \begin{array}{l l} 1 - \frac {| x |}{R}, & | x | \leqslant R, \\ 0, & | x | > R, \end{array} \right.
$$

不难验证

$$
\Omega (x; \delta , h) = \frac {1}{h} [ (\delta + h) \Delta_ {\delta + h} (x) - \delta \Delta_ {\delta} (x) ]
$$

(见图 3.5). 由(3.23)式知

$$
\hat {\Delta} (t) = \left(\frac {\sin \pi t}{\pi t}\right) ^ {2},
$$

![](15ce7deaff13faabe989080f960bac0b9059f2e117b4298d0a2dcf3c204be37d.jpg)

<details>
<summary>text_image</summary>

y
1
Δ(x)
-1 O 1 x
</details>

图3.4

![](fd67aa2d31331ea7cd234e9a799d3fc931e95c4d0d99dc72cc297f82c889594d.jpg)

<details>
<summary>text_image</summary>

y
δ+h
δ
- (δ+h) -δ O δ δ+h x
</details>

图3.5

于是由定理3.1得

$$
\hat {\Delta} _ {R} (t) = \frac {1}{R} \left(\frac {\sin \pi R t}{\pi t}\right) ^ {2}.
$$

从而由前面的关系式便得到

$$
\hat {\Omega} (t) = \frac {\sin^ {2} \pi (\delta + h) t - \sin^ {2} \pi \delta t}{h (\pi t) ^ {2}}.
$$

# 2. 求积分方程的解

在一些应用问题中常遇到以下类型的积分方程

$$
\int_ {- \infty} ^ {\infty} K (x - y) \varphi (y) \mathrm{d} y = f (x).
$$

若函数 $K(x) \in L^{1}(\pmb{R}), f(x) \in L^{2}(\pmb{R})$ ，我们求这个积分方程的属于 $L^{2}(\pmb{R})$ 的解 $\varphi$ 。由定理 1.3 知左端的 $K * \varphi \in L^{2}(\pmb{R})$ ，对该方程两边取 Fourier 变换，得到

$$
\hat {K} (t) \cdot \hat {\varphi} (t) = \hat {f} (t).
$$

只要 $\hat{K}(t) \neq 0$ ，便有

$$
\hat {\varphi} (t) = \frac {\hat {f} (t)}{\hat {K} (t)}.
$$

如果此式右端是 $L^2 (\pmb {R})$ 中的函数，利用Fourier逆变换便可解得

$$
\varphi (x) = \mathcal {F} ^ {- 1} \left(\frac {\hat {f}}{\hat {K}}\right) (x),
$$

也可写成

$$
\varphi (x) = \left(\frac {\hat {f}}{\hat {K}}\right) ^ {\wedge} (- x).
$$

例3 设 $f \in L^{2}(\mathbb{R})$ ，求满足以下积分方程的解 $\varphi \in L^{2}(\mathbb{R})$ ：

$$
\varphi (x) - \lambda \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- | x - y |} \varphi (y) \mathrm{d} y = f (x).
$$

解 根据(3.59)和(3.26)式,对方程两边取Fourier变换,得到

$$
\hat {\varphi} (t) - \lambda \left(\frac {2}{1 + 4 \pi^ {2} t ^ {2}}\right) \hat {\varphi} (t) = \hat {f} (t),
$$

解得

$$
\hat {\varphi} (t) = \frac {1 + 4 \pi^ {2} t ^ {2}}{1 + 4 \pi^ {2} t ^ {2} - 2 \lambda} \hat {f} (t).
$$

注意到若 $\lambda \geqslant \frac{1}{2}$ , 对某些 $t$ 的值上式右端的分母为零. 而对于其他情形, 即 $\lambda$ 是小于 $\frac{1}{2}$ 的实数, 或 $\lambda$ 是虚部不等于零的复数, 分母不为零, 我们有

$$
\varphi (x) = \mathcal {F} ^ {- 1} \left(\frac {1 + 4 \pi^ {2} t ^ {2}}{1 + 4 \pi^ {2} t ^ {2} - 2 \lambda} \cdot \hat {f} (t)\right).
$$

作为一个特例，设 $f(x) = \mathrm{e}^{-|x|}$ ，则

$$
\begin{array}{l} \varphi (x) = \mathscr {F} ^ {- 1} \left(\frac {1 + 4 \pi^ {2} t ^ {2}}{1 + 4 \pi^ {2} t ^ {2} - 2 \lambda} \cdot \frac {2}{1 + 4 \pi^ {2} t ^ {2}}\right) \\ = \int_ {- \infty} ^ {\infty} \frac {2}{1 - 2 \lambda + 4 \pi^ {2} t ^ {2}} \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t. \\ \end{array}
$$

若 $\lambda < \frac{1}{2}$ , 利用(3.26)的反演公式, 便可求得解为

$$
\varphi (x) = \frac {1}{\sqrt {1 - 2 \lambda}} \mathrm{e} ^ {- \sqrt {1 - 2 \lambda} | x |}.
$$

# 3. 求微分方程的解

此处需用到函数微商的 Fourier 变换与函数自身的 Fourier 变换的关系式, 即(3.12)式.

例4 求常微分方程

$$
u ^ {\prime \prime} - u = - f \tag {3.61}
$$

的解.

解 我们先形式地作运算(即假定 u 与 f 都满足运算所需的条件), 对方程两边取 Fourier 变换, 得

$$
(2 \pi \mathrm{i} t) ^ {2} \hat {u} - \hat {u} = - \hat {f},
$$

即得

$$
\hat {u} = \frac {1}{1 + (2 \pi t) ^ {2}} \hat {f}.
$$

根据(3.26)的反演公式得到

$$
u = \left(\frac {1}{2} \mathrm{e} ^ {- | x |}\right) * f = \frac {1}{2} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- | x - y |} f (y) \mathrm{d} y. \tag {3.62}
$$

若 $f$ 满足适当的条件, 可以验证由(3.62)式表示的 $u$ 满足方程(3.61). 例如, 设 $f \in C(R) \cap L^{1}(R)$ , 可以验证: (1) $u \in C^{2}(R) \cap L^{1}(R), u'' \in L^{1}(R)$ ; (2) $u$ 满足方程(3.61). 为此将(3.62)式改写成:

$$
\begin{array}{l} 2 u = \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- | x - y |} f (y) \mathrm{d} y \\ = \int_ {- \infty} ^ {x} \mathrm{e} ^ {- (x - y)} f (y) \mathrm{d} y + \int_ {x} ^ {\infty} \mathrm{e} ^ {- (y - x)} f (y) \mathrm{d} y \\ = \mathrm{e} ^ {- x} \int_ {- \infty} ^ {x} \mathrm{e} ^ {y} f (y) \mathrm{d} y + \mathrm{e} ^ {x} \int_ {x} ^ {\infty} \mathrm{e} ^ {- y} f (y) \mathrm{d} y. \\ \end{array}
$$

在假设 $f \in C(\mathbb{R}) \cap L^{1}(\mathbb{R})$ 的条件下，不难验证 $u$ 符合可微的条件，可求得

$$
\begin{array}{l} (2 u) ^ {\prime} = - \mathrm{e} ^ {- x} \int_ {- \infty} ^ {x} \mathrm{e} ^ {y} f (y) \mathrm{d} y + \mathrm{e} ^ {- x} \cdot \mathrm{e} ^ {x} f (x) \\ + \mathrm{e} ^ {x} \int_ {a} ^ {\infty} \mathrm{e} ^ {- y} f (y) \mathrm{d} y - \mathrm{e} ^ {x} \cdot \mathrm{e} ^ {- x} f (x) \\ = \int_ {- \infty} ^ {\infty} - [ \operatorname{sgn} (x - y) ] \mathrm{e} ^ {- | x - y |} f (y) \mathrm{d} y. \\ \end{array}
$$

$u^{\prime}$ 仍可微，求得

$$
\begin{array}{l} (2 u) ^ {\prime \prime} = \mathrm{e} ^ {- x} \int_ {- \infty} ^ {x} \mathrm{e} ^ {y} f (y) \mathrm{d} y - \mathrm{e} ^ {- x} \cdot \mathrm{e} ^ {x} f (x) \\ + \mathrm{e} ^ {x} \int_ {x} ^ {\infty} \mathrm{e} ^ {- y} f (y) \mathrm{d} y - \mathrm{e} ^ {x} \cdot \mathrm{e} ^ {- x} f (x) \\ = 2 u - 2 f, \\ \end{array}
$$

故 u 满足方程(3.61). 而由以上各式及关于 f 的假定不难验证结论(1).

例 5 考虑无穷长杆的热传导问题, 假设给定了初始温度 $f(x)$ :

$$
\left\{ \begin{array}{l} \frac {\partial u}{\partial t} = a \frac {\partial^ {2} u}{\partial x ^ {2}}, \quad x \in R ^ {1}, t > 0, \\ u (x, 0) = f (x). \end{array} \right. \tag {3.63}
$$

因为没有边界,所以在 t>0 时无边界条件,但我们将假定 $f(x)$ 在无穷远处足够快地下降到零使得 f 在全实轴上可积.

我们对方程(3.63)两边形式地取Fourier变换，得到

$$
\frac {\partial \hat {u} (\xi , t)}{\partial t} = - 4 \pi^ {2} a \xi^ {2} \hat {u} (\xi , t),
$$

$$
\hat {u} (\xi , 0) = \hat {f} (\xi).
$$

令

$$
v (\xi , t) = \hat {u} (\xi , t),
$$

问题化为

$$
\left\{ \begin{array}{l} \frac {\partial v}{\partial t} = - 4 \pi^ {2} a \xi^ {2} v, \\ v (\xi , 0) = \hat {f} (\xi). \end{array} \right.
$$

对每个固定的 $\xi$ ，这是带有初始条件的常微分方程，它的解不难求得，就是

$$
v (\xi , t) = \hat {u} (\xi , t) = \hat {f} (\xi) \mathrm{e} ^ {- 4 \pi^ {2} a \xi^ {2} t}.
$$

由反演公式得到

$$
u (x, t) = \int_ {- \infty} ^ {\infty} \hat {f} (\xi) \mathrm{e} ^ {- 4 \pi^ {2} a \xi^ {2} t} \mathrm{e} ^ {2 m x \xi} \mathrm{d} \xi .
$$

而根据公式(3.30)，其中 $\alpha = at$ ，又可得到

$$
u (x, t) = (f * w) (x) = \frac {1}{\sqrt {4 \pi a t}} \int_ {- \infty} ^ {\infty} f (y) \mathrm{e} ^ {- (x - y) ^ {2} / 4 a t} \mathrm{d} y, \tag {3.64}
$$

其中 $w(x, \alpha)$ 是Weierstrass核. 不难验证 $w(x, at)$ 满足热传导方程(3.63). 假设 $f \in L^{1}(\mathbb{R})$ , 根据定理1.5及其后的注可以推知, 对于按(3.64)式表示的 $u(x, t)$ 可以在积分号下取微商, 由此得知 $u(x, t)$ 也满足热传导方程(3.63). 再根据定理1.9便得知

$$
\lim _ {t \to 0} u (x, t) = f (x), \quad \text { a.e. }
$$

如果还假定 $f(x)$ 连续，则上式处处成立，亦即 $u(x,t)$ 满足初始条件.

# 4. Poisson 求和公式

设 $f(x)$ 连续，并满足

$$
\left| f (x) \right| \leqslant C (1 + | x |) ^ {- 1 - \delta},
$$

$$
\left| \hat {f} (x) \right| \leqslant C (1 + | x |) ^ {- 1 - \delta}, \quad x \in R,
$$

其中 $\delta>0$ ，则有以下等式成立：

$$
\sum_ {m = - \infty} ^ {\infty} f (x + m) = \sum_ {m = - \infty} ^ {\infty} \hat {f} (m) \mathrm{e} ^ {2 \pi i m x}, \tag {3.65}
$$

$$
\sum_ {m = - \infty} ^ {\infty} f (m) = \sum_ {m = - \infty} ^ {\infty} \hat {f} (m). \tag {3.66}
$$

我们称这两式为 Poisson 求和公式.

证明 根据对 $f$ 的假定, 易见(3.65)左端的级数在 $0 \leqslant x \leqslant 1$ 一致收敛, 记其和为 $g(x)$ ,

$$
g (x) = \sum_ {m = - \infty} ^ {\infty} f (x + m),
$$

于是 $g(x)$ 是以1为周期的连续函数. 我们来计算它的Fourier系数，

$$
d _ {k} = \int_ {0} ^ {1} g (x) \mathrm{e} ^ {- 2 \pi k x} \mathrm{d} x.
$$

(由 §1.1 我们知以 $T$ 为周期的函数 $g$ 的 Fourier 系数为 $\frac{1}{T} \int_{0}^{T} g(x) \mathrm{e}^{-2\pi i k x / T} \mathrm{d}x$ ). 把 $g(x)$ 的级数表示式代入, 并由级数的一致收敛性推知, 该式中的求和与积分可以交换顺序, 从而得到

$$
\begin{array}{l} d _ {k} = \int_ {0} ^ {1} \left[ \sum_ {m = - \infty} ^ {\infty} f (x + m) \right] \mathrm{e} ^ {- 2 \pi i k x} \mathrm{d} x \\ = \sum_ {m = - \infty} ^ {\infty} \int_ {0} ^ {1} f (x + m) \mathrm{e} ^ {- 2 \pi i k x} \mathrm{d} x \\ = \sum_ {m = - \infty} ^ {\infty} \int_ {m} ^ {m + 1} f (t) \mathrm{e} ^ {- 2 \pi i k t} \mathrm{d} t \\ = \int_ {- \infty} ^ {(x)} f (t) \mathrm{e} ^ {- 2 \pi \mathrm{i} k t} \mathrm{d} t = \hat {f} (k). \\ \end{array}
$$

由此可见，(3.65)式的右端正好是 $g(x)$ 的Fourier级数，而由对 $\hat{f}$ 的假定可知这个级数一致收敛.根据第一章习题第1题便推知(3.65)式成立.该式左、右端都是连续函数，等式是处处成立的.令 $x = 0$ ，就得到(3.66)式.

令

$$
f _ {t} (x) = \mathrm{e} ^ {- \pi t x ^ {2}}, \quad \hat {f} _ {t} (y) = \frac {1}{\sqrt {t}} \mathrm{e} ^ {- \pi y ^ {2} / t}, \quad t > 0.
$$

在(3.66)式中,特别取 f 等于 $f_{t}$ ,便得到

$$
\sum_ {m = - \infty} ^ {\infty} \mathrm{e} ^ {- \pi m ^ {2} t} = \frac {1}{\sqrt {t}} \sum_ {m = - \infty} ^ {\infty} \mathrm{e} ^ {- \pi m ^ {2} / t},
$$

这正是 §2.8 关于 theta 函数的 Jacobi 恒等式.

# 5. Heisenberg 不等式与测不准原理

大家知道,微观粒子的运动是量子力学研究的对象.物理学家揭示出微观粒子具有与宏观质点根本不同的性质,即具有微粒和波动的双重性质.于是在量子力学中,用波来描述粒子(例如电子)的运动.

在一维情形, 用波函数 $f(x)$ 来刻画粒子沿 $x$ 轴的运动状态 (认定 $f \in L^{2}(\mathbb{R})$ ). 根据实验事实, 用波的强度 (即 $f(x)$ 的振幅的平方) 来表示该粒子位于点 $x$ 处的概率密度. 从而粒子位于区间 $[a, b]$ 的概率为

$$
\int_ {a} ^ {b} | f (x) | ^ {2} \mathrm{d} x.
$$

显然,粒子必然位于 x 轴上,即粒子位于 x 轴上的概率应等于 1,也就是应当有

$$
\int_ {- \infty} ^ {\infty} | f (x) | ^ {2} \mathrm{d} x = 1,
$$

这个条件称为规一化条件.

由波函数 $f(x)$ 的Fourier变换可以给出粒子动量为 $\pmb{p}$ 的概

率密度. 我们定义 Fourier 变换的某种变型为 $f^{*}(p)$ , 令

$$
f ^ {*} (p) = \frac {1}{\sqrt {2 \pi h}} \int_ {- \infty} ^ {\infty} f (x) \mathrm{e} ^ {- \mathrm{i} p x / h} \mathrm{d} x = \frac {1}{\sqrt {2 \pi h}} \hat {f} \left(\frac {p}{2 \pi h}\right),
$$

其中 $h$ 是Planck常数. $|f^{*}(p)|^{2}$ 可解释为粒子具有动量 $\pmb{p}$ 的概率密度. 根据Plancherel定理可得到

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} | f ^ {*} (p) | ^ {2} \mathrm{d} p = \frac {1}{2 \pi h} \int_ {- \infty} ^ {\infty} \left| \hat {f} \left(\frac {p}{2 \pi h}\right) \right| ^ {2} \mathrm{d} p \\ = \int_ {- \infty} ^ {\infty} | \hat {f} (y) | ^ {2} d y = \| f \| _ {2} ^ {2} = 1. \\ \end{array}
$$

位置与动量的测不准关系是由物理学家 W. Heisenberg 首先得出的, 这是量子力学的基本结果之一. 它指出: 微观粒子的位置确定得愈准, 则粒子的动量值愈确定得不准, 反之亦然. 这个原理表明, 对微观粒子的运动不能应用古典质点按轨道运动的观念 (质点在每一时间具有一定的位置和一定的动量).

为了给出更精确的定量结果, 设 $f \in L^{2}(R)$ , 引进一个量

$$
\Delta_ {a} f = \frac {\int_ {- \infty} ^ {\infty} (x - a) ^ {2} | f (x) | ^ {2} \mathrm{d} x}{\int_ {- \infty} ^ {\infty} | f (x) | ^ {2} \mathrm{d} x}.
$$

量 $\Delta_{a}f$ 是对 $f$ 在多大程度上没有集中在 $a$ 点附近的一种度量: 若 $f$ 的值在 $a$ 点的一个小邻域以外非常小, 则 $\Delta_{a}f$ 小; 反之, 若 $f$ 的值集中在远离 $a$ 点处, 则 $\Delta_{a}f$ 大. 换句话说, $\Delta_{a}f$ 是 $f$ 离开 $a$ 点的平方偏差. 对于 $f^{*}, \Delta_{a}f^{*}$ 有类似的含义.

Heisenberg 不等式为：设 $f \in L^{2}(\mathbb{R})$ ，则对任意 $a, \alpha \in \mathbb{R}$ ，有

$$
(\Delta_ {a} f) (\Delta_ {a} \dot {f}) \geqslant (1 6 \pi^ {2}) ^ {- 1}. \tag {3.67}
$$

通过变量替换不难算得

$$
\Delta_ {\alpha} f ^ {*} = (2 \pi h) ^ {2} \Delta_ {\alpha / 2 \pi h} \hat {f}.
$$

于是，(3.67)式就化为

$$
(\Delta_ {a} f) (\Delta_ {a} f ^ {*}) \geqslant \frac {h ^ {2}}{4}. \tag {3.67}
$$

它反映了位置与动量的测不准关系:粒子的位置确定得愈准( $\Delta_{a}f$ 小),则粒子的动量值确定得愈不准( $\Delta_{a}f^{*}$ 大),反之亦然.

不等式(3.67)表明： $f$ 与 $\hat{f}$ 不能两者都集中在单个点附近。这个结论由以下数学事实不难理解。

设函数 $f \in L^{2}(\mathbb{R})$ ，并且对一切 $|\xi| > b, \hat{f}(\xi) = 0$ . 作积分

$$
F (z) = \int_ {- \infty} ^ {\infty} \hat {f} (\xi) \mathrm{e} ^ {2 \pi \mathrm{i} \xi z} \mathrm{d} \xi .
$$

它对一切复数 $z$ 有意义，并且可以在积分号下取微商。由此得知 $F(z)$ 是解析的。把整函数 $F(z)$ 限制在 $x$ 轴上，根据反演公式便知它等于 $f(x)$ 。若 $f(x)$ 在某个有限区间之外为零，则由整函数的性质推知 $F(z)$ 恒为零，从而 $f$ 恒为零，这是平凡的情形。对一般的情形，以上讨论表明：如果 $\hat{f}$ 在某个小区间以外是零，那么 $f$ 的值不会集中在一个有限区间上，而必定是散布在全实轴上。

下面给出 Heisenberg 不等式的证明.

首先设 $a = \alpha = 0$ 。一般情形将归结为这种情形。这时(3.67)式化为

$$
\left(\int_ {- \infty} ^ {\infty} x ^ {2} | f (x) | ^ {2} \mathrm{d} x\right) \left(\int_ {- \infty} ^ {\infty} \xi^ {2} | \hat {f} (\xi) | ^ {2} \mathrm{d} \xi\right) \geqslant (1 6 \pi^ {2}) ^ {- 1} \| f \| _ {2} ^ {4}, \tag {3.68}
$$

其中 $\| f\| _2 = \left(\int_{-\infty}^{\infty}|f|^2\mathrm{d}x\right)^{1 / 2}$

不妨假定 $\| xf\| _2 <   \infty$ ，并且 $\| \xi \hat{f}\| _2 <   \infty .$ 因为，若(3.68)式左端两个因子中有一个为 $+\infty$ ，另一个大于零，则(3.68)式显然成立；而若有一个因子为零，可推知 $f(x) = 0$ ,a.e.,即 $\| f\| _2 = 0$ ，则(3.68)也显然成立.按假定 $f,xf\in L^{2}(\pmb {R})$ ，由Holder不等式便得

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} | f | \mathrm{d} x \leqslant \left(\int_ {- \infty} ^ {\infty} \frac {1}{1 + x ^ {2}} \mathrm{d} x\right) ^ {1 / 2} \left[ \int_ {- \infty} ^ {\infty} (1 + x ^ {2}) | f | ^ {2} \mathrm{d} x \right] ^ {1 / 2} \\ <   + \infty , \\ \end{array}
$$

即 $f \in L^{1}(\mathbb{R})$ . 类似地，由 $\hat{f}, \xi \hat{f} \in L^{2}(\mathbb{R})$ ，也推知 $\hat{f} \in L^{1}(\mathbb{R})$ . 从而 $f$

的反演公式(3.33)几乎处处成立.

在上述假定下,我们可以取到 $f_{n} \in C^{\infty}(\mathbb{R})$ , 并且在无穷远处速降(见 §6.1), 使得

$$
\lim _ {n \to \infty} \int_ {- \infty} ^ {\infty} (1 + 4 \pi^ {2} \xi^ {2}) \left| \hat {f} _ {n} (\xi) - \hat {f} (\xi) \right| ^ {2} \mathrm{d} \xi = 0 \tag {3.69}
$$

(参看第一章习题第12题). 由此得知 $\{2\pi \mathrm{i}\xi \hat{f}_n\}$ 是 $L^2 (\pmb {R})$ 中的基本列, 因此, 必存在 $g \in L^{2}(\pmb {R})$ , 使得

$$
\lim _ {n \rightarrow \infty} \| 2 \pi \mathrm{i} \xi \hat {f} _ {n} - \hat {g} \| _ {2} = 0.
$$

而由(3.69)可推知

$$
\lim _ {n \rightarrow \infty} \| 2 \pi \mathrm{i} \xi \hat {f} _ {n} - 2 \pi \mathrm{i} \xi \hat {f} \| _ {2} = 0,
$$

于是 $\hat{g} = 2\pi \mathrm{i}\xi \hat{f}$ a.e..

考虑不定积分 $\int_0^x g(y)\mathrm{d}y$ ，可以证明它是 $\int_0^x f_n'\mathrm{d}y$ 的极限：对每个固定的 $x\in R$ ，由Holder不等式得

$$
\begin{array}{l} \left| \int_ {0} ^ {x} g (y) \mathrm{d} y - \int_ {o} ^ {x} f _ {n} ^ {\prime} (y) \mathrm{d} y \right| \leqslant \sqrt {x} \left(\int_ {0} ^ {x} | g - f _ {n} ^ {\prime} | ^ {2} \mathrm{d} y\right) ^ {1 / 2} \\ \leqslant \sqrt {x} \| g - f _ {n} ^ {\prime} \| _ {2} = \sqrt {x} \| \hat {g} - \hat {f} _ {n} ^ {\prime} \| _ {2} \\ = \sqrt {x} \| 2 \pi \mathrm{i} \xi \hat {f} - 2 \pi \mathrm{i} \xi \hat {f} _ {n} \| _ {2} \rightarrow 0, n \rightarrow \infty . \\ \end{array}
$$

上式对 $f_{n}$ 用到定理3.5.

不妨假定 $f(x)$ 连续，否则根据反演公式，我们用连续函数 $\int_{-\infty}^{\infty}\hat{f} (\xi)\mathrm{e}^{2mx\xi}\mathrm{d}\xi$ 来代替对等的 $f(x)$ . 于是用反演公式得到

$$
\begin{array}{l} \left| f _ {n} (x) - f (x) \right| \leqslant \left\| \hat {f} _ {n} - \hat {f} \right\| _ {1} \\ \leqslant \left(\int_ {- \infty} ^ {\infty} \frac {1}{1 + 4 \pi^ {2} \xi^ {2}} \mathrm{d} \xi\right) ^ {1 / 2} \left(\int_ {- \infty} ^ {\infty} (1 + 4 \pi^ {2} \xi^ {2}) | \hat {f} _ {n} - \hat {f} | ^ {2} \mathrm{d} \xi\right) ^ {1 / 2} \\ \rightarrow 0, \quad n \rightarrow \infty . \\ \end{array}
$$

从而得知

$$
\int_ {0} ^ {x} g (y) \mathrm{d} y = \lim _ {n \rightarrow \infty} \int_ {0} ^ {x} f _ {n} ^ {\prime} (y) \mathrm{d} y = \lim _ {n \rightarrow \infty} [ f _ {n} (x) - f _ {n} (0) ]
$$

$$
= f (x) - f (0).
$$

这表明 $f(x)$ 绝对连续，并且对几乎一切点 $x, f'(x) = g(x) \in L^2(R)$ . 由 Plancherel 定理得知

$$
\| 2 \pi \mathrm{i} \xi \hat {f} \| _ {2} = \| \hat {g} \| _ {2} = \| g \| _ {2} = \| f ^ {\prime} \| _ {2}.
$$

现在我们可得下面的不等式

$$
\begin{array}{l} 4 \pi^ {2} \left(\int_ {- \infty} ^ {\infty} x ^ {2} | f (x) | ^ {2} \mathrm{d} x\right) \left(\int_ {- \infty} ^ {\infty} \xi^ {2} | \hat {f} (\xi) | ^ {2} \mathrm{d} \xi\right) \\ = \left(\int_ {- \infty} ^ {\infty} | x f (x) | ^ {2} \mathrm{d} x\right) \left(\int_ {- \infty} ^ {\infty} | 2 \pi \mathrm{i} \xi \hat {f} (\xi) | ^ {2} \mathrm{d} \xi\right) \\ = \left(\int_ {- \infty} ^ {\infty} | x f (x) | ^ {2} \mathrm{d} x\right) \left(\int_ {- \infty} ^ {\infty} | f ^ {\prime} (x) | ^ {2} \mathrm{d} x\right) \\ \geqslant \left(\int_ {- \infty} ^ {\infty} | x \overline {{f f}} f ^ {\prime} | \mathrm{d} x\right) ^ {2} \quad (\text {由 Schwarz 不等式}) \\ \geqslant \left[ \int_ {- \infty} ^ {\infty} x \cdot \frac {1}{2} (\overline {{f}} f ^ {\prime} + f \overline {{f ^ {\prime}}}) \mathrm{d} x \right] ^ {2} \\ \end{array}
$$

(因 $\frac{1}{2}(a+\bar{a})=\operatorname{Re}a\leqslant|a|$ )

$$
= \frac {1}{4} \left[ \int_ {- \infty} ^ {\infty} x (| f | ^ {2}) ^ {\prime} \mathrm{d} x \right] ^ {2}
$$

$$
= \frac {1}{4} \left[ x | f | ^ {2} \right| _ {- \infty} ^ {\infty} - \int_ {- \infty} ^ {\infty} | f | ^ {2} \mathrm{d} x ] ^ {2}
$$

$$
= \frac {1}{4} \left[ \int_ {- \infty} ^ {\infty} | f | ^ {2} \mathrm{d} x \right] ^ {2},
$$

这就是(3.68)式. 以上最后一个等式成立是因为: 由前面的不等式及 $f \in L^{2}(\mathbb{R})$ 不难证明

$$
\lim _ {A \to + \infty} A   | f (A) | ^ {2}    \text {及}    \lim _ {B \to + \infty} (- B   | f (- B) | ^ {2})
$$

存在并且必等于零.

对于任意的 $a, \alpha \in \mathbb{R}$ , 令

$$
G (x) = \mathrm{e} ^ {- 2 \pi i a x} f (x + a),
$$

显然 $G \in L^{2}(\mathbb{R})$ . 容易验证

$$
\Delta_ {a} f = \Delta_ {0} G, \quad \Delta_ {a} \hat {f} = \Delta_ {0} \hat {G}.
$$

于是由前面已证的结论得到

$$
(\Delta_ {a} f) (\Delta_ {a} \hat {f}) = (\Delta_ {0} G) (\Delta_ {0} \hat {G}) \geqslant (1 6 \pi^ {2}) ^ {- 1},
$$

即(3.67)式成立.

## § 3.7 多元函数的 Fourier 变换

我们用 $R^{n}$ 表示 n 维(实)欧氏空间, $R^{n}$ 中的元为 $x=(x_{1},x_{2},\cdots,x_{n}), t=(t_{1},t_{2},\cdots,t_{n})$ , 记 x 与 t 的内积为 $x \cdot t = x_{1}t_{1} + \cdots + x_{n}t_{n}$ , x 的模为 $|x|=(x_{1}^{2}+\cdots+x_{n}^{2})^{1/2}$ . 若 $f \in L(R^{n})$ , f 的 Fourier 变换 $\hat{f}$ 定义为

$$
\hat {f} (t) = \int_ {\mathbb {R} ^ {n}} f (x) \mathrm{e} ^ {- 2 \pi i x \cdot t} \mathrm{d} x.
$$

§ 3.1 中关于一元函数的 Fourier 变换的各个定理都可相应地推广到多元函数的情形, 只有少数结论要作适当改动, 以显示它与维数的关系, 叙述如下:

定理 3.1' (vi) 记展缩算子为 $T_{a}:(T_{a}f)(x)=f(ax)$ ，对实数 $a\neq0$ ，有

$$
(T _ {a} f) ^ {\wedge} (t) = \frac {1}{| a | ^ {n}} \hat {f} \left(\frac {t}{a}\right). \tag {3.70}
$$

定理 3.5' (1) 设 $f \in L(\mathbb{R}^n), x_k f \in L(\mathbb{R}^n)$ , 这里 $x_k$ 是 $x$ 的第 $k$ 个分量, 则 $\hat{f}$ 关于 $x_k$ 可微, 且

$$
\left(\frac {\partial}{\partial t _ {k}} \hat {f}\right) (t) = (- 2 \pi 1 x _ {k} f (x)) ^ {\wedge} (t). \tag {3.71}
$$

(11) 设 $f \in L(\mathbb{R}^n)$ , $f$ 关于 $x_k$ 局部绝对连续, 且 $\frac{\partial f}{\partial x_k} \in L(\mathbb{R}^n)$ , 则

$$
\left(\frac {\partial f}{\partial x _ {k}}\right) ^ {\wedge} (t) = 2 \pi \mathrm{i} t _ {k} \hat {f} (t). \tag {3.72}
$$

为了得到定理 3.5'(11) 的结论, 还可给出另一种形式的条件, 为此介绍下述概念: 设 $f \in L^{1}(\mathbb{R}^{n})$ , 如果存在 $g \in L^{1}(\mathbb{R}^{n})$ , 使得当 $h_{k} \to 0$ 时,

$$
\left(\int_ {R ^ {n}} \left| \frac {f (x + h) - f (x)}{h _ {k}} - g (x) \right| \mathrm{d} x\right)\rightarrow 0,
$$

其中 $h=(0,\cdots,0,h_{k},0,\cdots,0)$ ，就称 f 按 $L^{1}$ 范数关于 $x_{k}$ 可微，而函数 g 就是 f 按 $L^{1}$ 范数关于 $x_{k}$ 的偏导数。我们有以下论断：

定理 3.5' (iii) 设 $f \in L^{1}(R^{n})$ , g 是 f 按 $L^{1}$ 范数关于 $x_{k}$ 的偏导数, 则

$$
\hat {g} (t) = 2 \pi \mathrm{i} t _ {k} \hat {f} (t). \tag {3.73}
$$

证明 根据定理 3.1(iv) 的 n 维推广, 我们有

$$
\begin{array}{l} \left| \hat {g} (t) - \hat {f} (t) \frac {\mathrm{e} ^ {2 \pi \mathrm{i} h \cdot t} - 1}{h _ {k}} \right| \\ = \left| \hat {g} (t) - \left(\frac {f (x + h) - f (x)}{h _ {k}}\right) ^ {\wedge} (t) \right| \\ \leqslant \int_ {R ^ {n}} \left| g (x) - \frac {f (x + h) - f (x)}{h _ {k}} \right| \mathrm{d} x \rightarrow 0, \quad h _ {k} \rightarrow 0. \\ \end{array}
$$

而上式左端当 $h_k \to 0$ 时的极限为 $\left|\hat{g}(t) - 2\pi \mathrm{i}t_k \hat{f}(t)\right|$ ，由此得到 (3.73) 式。

定理 3.5' 可以推广到高阶导数, 其条件就不再详述, 只介绍以下公式, 它们在适当条件下成立:

$$
\left(\mathrm{D} ^ {a} \hat {f}\right) (x) = \left((- 2 \pi \mathrm{i} x) ^ {a} f (x)\right) ^ {\wedge} (t), \tag {3.74}
$$

$$
\left(\mathrm{D} ^ {\alpha} f\right) ^ {\wedge} (t) = (2 \pi \mathrm{i} t) ^ {\alpha} \hat {f} (t), \tag {3.75}
$$

其中 $\alpha$ 是 n 元非负整数组 $\alpha=(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})$ ， $x^{\alpha}=x_{1}^{\alpha_{1}}x_{2}^{\alpha_{2}}\cdots x_{n}^{\alpha_{n}}$

$$
\mathrm{D} ^ {\alpha} = \frac {\partial^ {\alpha_ {1} + \alpha_ {2} + \cdots + \alpha_ {n}}}{\partial x _ {1} ^ {\alpha_ {1}} \partial x _ {2} ^ {\alpha_ {2}} \cdots \partial x _ {n} ^ {\alpha_ {n}}}.
$$

我们的主要问题仍然是考虑反演公式

$$
f (x) = \int_ {\mathbb {R} ^ {n}} \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t
$$

是否成立?一般来说, $\hat{f}$ 不一定可积,上式的积分可能不收敛.为此要考虑求和法.

$f$ 的Fourier积分的Abel平均是

$$
u (x, y) = \int_ {\mathbb {R} ^ {n}} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t, \quad y > 0.
$$

若有极限 $\lim_{y\to 0}u(x,y) = S$ ，就称 $f$ 的Fourier积分在点 $x$ 可Abel求和于 $S$

类似地， $f$ 的 Fourier 积分的 Gauss 平均是

$$
G (x, \alpha) = \int_ {\mathbb {R} ^ {n}} \mathrm{e} ^ {- 4 \pi^ {2} \alpha | t | ^ {2}} \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t, \quad \alpha > 0.
$$

若有极限 $\lim_{\alpha \to 0} G(x, \alpha) = S$ ，就称 $f$ 的 Fourier 积分在点 $x$ 可 Gauss 求和于 $S$ .

引理3.9' 若 $f \in L(\mathbb{R}^n), \Phi \in L(\mathbb{R}^n), \hat{\Phi}(t) = K(t)$ ，则对于 $\alpha > 0$ ，令 $K_{\alpha}(t) = \frac{1}{\alpha^n} K\left(\frac{t}{\alpha}\right)$ ，有

$$
\int_ {R ^ {n}} \Phi (\alpha t) \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t = \int_ {R ^ {n}} f (t) K _ {\alpha} (t - x) \mathrm{d} t. \tag {3.76}
$$

为了应用(3.76)式,先要求出 $e^{-2\pi|x|}$ 及 $e^{-4\pi^{2}|x|^{2}}$ 的 Fourier 变换,其结果为:

(1) $(\mathrm{e}^{-2\pi |x|})^{\Lambda} = c_{n} / (1 + |t|^{2})^{\frac{n + 1}{2}}$ ，其中 $c_{n} = \Gamma \left(\frac{n + 1}{2}\right) / \pi^{\frac{n + 1}{2}}$ ; (3.77)

(ii) $(\mathrm{e}^{-4\pi^2|x|^2})^\Lambda = 2^{-n}\pi^{-n / 2}\mathrm{e}^{-|t|^2 /4}$ . (3.78)

(3.78)式可以归结为利用一维情形的(3.29)式. 因为 $|x|^2 = x_1^2 + x_2^2 + \cdots + x_n^2$ , 于是

$$
\begin{array}{l} \int_ {R _ {n}} \mathrm{e} ^ {- 4 \pi^ {2} | x | ^ {2}} \mathrm{e} ^ {- 2 \pi i x \cdot t} \mathrm{d} x \\ = \left[ \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 4 \pi^ {2} x _ {1} ^ {2}} \mathrm{e} ^ {- 2 \pi \mathrm{i} x _ {1} t _ {1}} \mathrm{d} x \right] \dots \left[ \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- 4 \pi^ {2} x _ {n} ^ {2}} \mathrm{e} ^ {- 2 \pi \mathrm{i} x _ {n} t _ {n}} \mathrm{d} x _ {n} \right] \\ = \left(\frac {1}{2 \sqrt {\pi}}\right) ^ {n} \mathrm{e} ^ {- (t _ {1} ^ {2} + \cdot + t _ {n} ^ {2}) / 4}. \\ \end{array}
$$

为了验证(3.77)式,先建立下列三个等式:

(1) $\frac{1}{1 + x^2} = \int_0^\infty \mathrm{e}^{-(1 + x^2)u}\mathrm{d}u.$ (3.79)

这个等式是显然的.

(2) $\mathrm{e}^{-\beta} = \frac{1}{\pi}\int_{-\infty}^{\infty}\frac{\mathrm{e}^{i\beta\tau}}{1 + x^2}\mathrm{d}x,\quad \beta >0.$ (3.80)

此式由留数计算公式不难算得. 令

$$
f (z) = \frac {\mathrm{e} ^ {1 \beta z}}{1 + z ^ {2}} = \frac {\varphi (z)}{\psi (z)},
$$

$z = 1$ 是分母的一级零点，因此 $f$ 在 $z = \mathrm{i}$ 点的留数为 $\frac{\varphi(\mathrm{i})}{\psi'(\mathrm{i})}$ . 取 $r > 1$ ，闭曲线 $\Gamma$ 由实轴上 $(-r, r)$ 与圆周 $|z| = r$ 的上半部所组成（见图3.6），便有

$$
\frac {1}{2 \pi \mathrm{i}} \int_ {\Gamma} \frac {\mathrm{e} ^ {\mathrm{i} \beta z}}{1 + z ^ {2}} \mathrm{d} z = \frac {\varphi (1)}{\psi^ {\prime} (1)} = \frac {\mathrm{e} ^ {- \beta}}{2 \mathrm{i}}. \tag {3.81}
$$

在上半圆周 $z = r\mathrm{e}^{i\theta}, 0 \leqslant \theta \leqslant \pi,$

$$
\left| f (z) \right| \leqslant \frac {\mathrm{e} ^ {- \beta r \sin \theta}}{r ^ {2} - 1},
$$

因此 $f$ 在上半圆周的积分当 $r \to \infty$ 时极限为零. 于是由(3.81)式, 令 $r \to \infty$ , 便推得(3.80)式.

![](f6c9a143093bb66c07ba165fed934ca7f1e2e133899a5ec50dbd9aaa3dd08964.jpg)

<details>
<summary>text_image</summary>

y
Γ
1
-r O r i
</details>

图3.6

(3) $\mathrm{e}^{-\beta} = \frac{1}{\sqrt{\pi}}\int_{0}^{\infty}\frac{\mathrm{e}^{-u}}{\sqrt{u}}\mathrm{e}^{-\beta^{2}/4u}\mathrm{d}u,\quad \beta >0.$ (3.82)

此式通过把(3.79)式代入(3.80)式,再交换积分顺序,并且用(3.29)得到:

$$
\mathrm{e} ^ {- \beta} = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {\mathrm{e} ^ {1 \beta x}}{1 + x ^ {2}} \mathrm{d} x = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \mathrm{e} ^ {1 \beta x} \left\{\int_ {0} ^ {\infty} \mathrm{e} ^ {- (1 + x ^ {2}) u} \mathrm{d} u \right\} \mathrm{d} x
$$

$$
\begin{array}{l} = \frac {1}{\pi} \int_ {0} ^ {\infty} \mathrm{e} ^ {- u} \left\{\int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- u x ^ {2}} \mathrm{e} ^ {\mathrm{i} \beta x} \mathrm{d} x \right\} \mathrm{d} u \\ = \frac {1}{\pi} \int_ {0} ^ {\infty} \mathrm{e} ^ {- u} \cdot \frac {1}{\sqrt {u}} \sqrt {\pi} \mathrm{e} ^ {- \beta^ {2} / 4 u} \mathrm{d} u \\ = \frac {1}{\sqrt {\pi}} \int_ {0} ^ {\infty} \frac {\mathrm{e} ^ {- u}}{\sqrt {u}} \mathrm{e} ^ {- \beta^ {2} / 4 u} \mathrm{d} u. \\ \end{array}
$$

利用(3.82)式,再用(3.78)与(3.70)式便可导出(3.77)式:

$$
\begin{array}{l} \int_ {R ^ {n}} \mathrm{e} ^ {- 2 \pi | x |} \mathrm{e} ^ {- 2 \pi x \cdot t} \mathrm{d} t = \int_ {R ^ {n}} \left\{\frac {1}{\sqrt {\pi}} \int_ {0} ^ {\infty} \frac {\mathrm{e} ^ {- u}}{\sqrt {u}} \mathrm{e} ^ {- 4 \pi^ {2} | x | ^ {2} / 4 u} \mathrm{d} u \right\} \mathrm{e} ^ {- 2 \pi x \cdot t} \mathrm{d} x \\ = \frac {1}{\sqrt {\pi}} \int_ {0} ^ {\infty} \frac {\mathrm{e} ^ {- u}}{\sqrt {u}} \left\{\int_ {R ^ {n}} \mathrm{e} ^ {- 4 \pi^ {2} | x | ^ {2} / 4 u} \mathrm{e} ^ {- 2 \pi i x \cdot t} \mathrm{d} x \right\} \mathrm{d} u \\ = \frac {1}{\sqrt {\pi}} \int_ {0} ^ {\infty} \frac {\mathrm{e} ^ {- u}}{\sqrt {u}} \left\{\left(\frac {u}{\pi}\right) ^ {n / 2} \mathrm{e} ^ {- u | t | ^ {2}} \right\} \mathrm{d} u \\ = \frac {1}{\pi^ {(n + 1) / 2}} \int_ {0} ^ {\infty} u ^ {(n - 1) / 2} \mathrm{e} ^ {- (1 + | t | ^ {2}) u} \mathrm{d} u \\ = \frac {1}{\pi^ {(n + 1) / 2}} \frac {1}{(1 + | t | ^ {2}) ^ {1 + (n - 1) / 2}} \int_ {0} ^ {\infty} y ^ {(n - 1) / 2} e ^ {- y} d y \\ = \frac {1}{\pi^ {(n + 1) / 2}} \Gamma \left(\frac {n + 1}{2}\right) \frac {1}{(1 + | t | ^ {2}) ^ {(n + 1) / 2}}. \\ \end{array}
$$

用(3.76)及(3.77)式便可得到 Abel 平均的表达式，

$$
\begin{array}{l} u (x, y) = \int_ {R ^ {n}} \mathrm{e} ^ {- 2 \pi y | t |} \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t \\ = \int_ {R ^ {n}} f (t) \cdot y ^ {- n} c _ {n} \frac {1}{\left(1 + \frac {\left| t - x \right| ^ {2}}{y ^ {2}}\right) ^ {(n + 1) / 2}} d t \\ = \int_ {\mathbb {R} ^ {n}} f (t) P (x - t, y) \mathrm{d} t, \quad y > 0, \tag {3.83} \\ \end{array}
$$

其中

$$
c _ {n} = \Gamma \left(\frac {n + 1}{2}\right) / \pi^ {(n + 1) / 2},
$$

$$
P (x, y) = c _ {n} \frac {y}{\left(y ^ {2} + | x | ^ {2}\right) ^ {(n + 1) / 2}}.
$$

$P(x,y)$ 称为(上半空间 $\pmb{R}_{+}^{n + 1}$ 的)Poisson核.

类似地，用(3.76)及(3.78)式可以得到 Gauss 平均的表达式

$$
\begin{array}{l} G (x, \alpha) = \int_ {\mathbb {R} ^ {n}} \mathrm{e} ^ {- 4 \pi^ {2} \alpha | t | ^ {2}} \hat {f} (t) \mathrm{e} ^ {- 2 \pi i x \cdot t} \mathrm{d} t \\ = \int_ {\mathbb {R} ^ {n}} f (t) \alpha^ {- n / 2} 2 ^ {- n} \pi^ {- n / 2} \mathrm{e} ^ {- | t - x | ^ {2} / (4 \alpha)} \mathrm{d} t \\ = \int_ {R ^ {n}} f (t) W (x - t, \alpha) \mathrm{d} t, \quad \alpha > 0, \tag {3.84} \\ \end{array}
$$

其中

$$
W (x, \alpha) = (4 \pi \alpha) ^ {- n / 2} \mathrm{e} ^ {- | x | ^ {2} / (4 \alpha)},
$$

称为 Weierstrass 核.

可以证明以下两个等式

$$
\int_ {\mathbb {R} ^ {n}} W (x, \alpha) \mathrm{d} x = 1, \quad \alpha > 0. \tag {3.85}
$$

$$
\int_ {R ^ {n}} P (x, y) \mathrm{d} x = 1, \quad y > 0. \tag {3.86}
$$

这里的(3.85)式是等式

$$
\int_ {- \infty} ^ {\infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \sqrt {\pi}
$$

的直接推论. 为证明(3.86)式, 可用球坐标变换, 令 $r = |x|, x = rx'$ , 用 $\Sigma_{n-1}$ 表示 $\mathbb{R}^n$ 中单位球面 $|x| = 1, \mathrm{d}x'$ 表示 $\Sigma_{n-1}$ 上的面积元.

单位球面 $\Sigma_{n - 1}$ 的面积 $\omega_{n - 1} = 2\pi^{n / 2}\Big / \Gamma \left(\frac{n}{2}\right)$ . 我们有

$$
\begin{array}{l} \int_ {\mathbb {R} ^ {n}} \frac {y}{(y ^ {2} + | x | ^ {2}) ^ {(n + 1) / 2}} d x = \int_ {\mathbb {R} ^ {n}} \frac {1}{(1 + | x | ^ {2}) ^ {(n + 1) / 2}} d x \\ = \int_ {0} ^ {\infty} \left(\int_ {\Sigma_ {n - 1}} \frac {1}{(1 + r ^ {2}) ^ {(n + 1) / 2}} d x ^ {\prime}\right) r ^ {n - 1} d r \\ = \omega_ {n - 1} \int_ {0} ^ {\infty} \frac {r ^ {n - 1}}{\left(1 + r ^ {2}\right) ^ {(n + 1) / 2}} \mathrm{d} r \quad (\text {令} r = \tan \theta) \\ = \omega_ {n - 1} \int_ {0} ^ {\frac {\pi}{2}} \sin^ {n - 1} \theta d \theta \\ \end{array}
$$

$$
= \frac {2 \pi^ {n / 2}}{\Gamma \left(\frac {n}{2}\right)} \cdot \frac {\sqrt {\pi}}{2} \frac {\Gamma \left(\frac {n}{2}\right)}{\Gamma \left(\frac {n + 1}{2}\right)} = \frac {1}{c _ {n}},
$$

其中用到了积分公式

$$
\int_ {0} ^ {\frac {\pi}{2}} \sin^ {n - 1} \theta \mathrm{d} \theta = \frac {\sqrt {\pi}}{2} \Gamma \left(\frac {n}{2}\right) / \Gamma \left(\frac {n + 1}{2}\right)
$$

(此式见菲赫金哥尔茨《微积分学教程》第二卷第三分册 688 页).

在一维情形的定理 3.11 至定理 3.15 都可以推广到 n 维情形, 其证明与一维情形类似.

关于 $L^2 (\pmb{R}^n)$ 中函数的Fourier变换也与一维情形相同，有Plancherel定理成立，只需把(3.41)式改为

$$
\hat {f} (t) = 1. 1. \mathrm{m}. \int_ {| x | \leqslant r} f (x) \mathrm{e} ^ {- 2 \pi i x \cdot t} \mathrm{d} x,
$$

反演公式(3.43)改为

$$
f (x) = 1. \underset {r \rightarrow \infty} {\text { i   .   m   . }} \int_ {| t | \leqslant r} \hat {f} (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t.
$$

其余各式类似,只需把积分区域从 $R^{1}$ 改为 $R^{n}$ .

## 习题

1. 求以下函数的 Fourier 变换：

(1) $f(x) = \chi_{[-a, a]}(x) = \begin{cases} 1, & |x| \leqslant a, & a > 0, \\ 0, & |x| > a; \end{cases}$   
(2) $f(x)=\left\{\begin{aligned}&\cos\frac{\pi}{2}x,&|x|\leqslant1,\\ &0,&|x|>1;\end{aligned}\right.$   
(3) $f(x) = \mathrm{e}^{-|x|}\sin x;$   
(4) $f(x) = \frac{1}{\cosh ax} = \frac{1}{(\mathrm{e}^{ax} + \mathrm{e}^{-ax}) / 2} \quad (a > 0).$

(提示：利用欧拉积分

$$
\int_ {0} ^ {\infty} \frac {x ^ {\alpha - 1}}{1 + x} \mathrm{d} x = \frac {\pi}{\sin \pi \alpha}, \quad 0 <   \alpha <   1
$$

的拓广形式：

$$
\int_ {- \infty} ^ {\infty} \frac {\mathrm{e} ^ {z t}}{1 + \mathrm{e} ^ {t}} \mathrm{d} t = \frac {\pi}{\sin \pi z}, \quad 0 <   \operatorname{Re} z <   1).
$$

2. 若 $0 < \alpha < 1$ ，当 $x \neq 0$ ，求

$$
\lim _ {R \rightarrow \infty} \frac {1}{\pi} \int_ {0} ^ {\infty} \frac {1}{t ^ {a}} \frac {\sin R (x - t)}{x - t} d t = ?
$$

3. 求以下函数的 Fourier 变换：

(提示：利用已知函数的 Fourier 变换及 Fourier 变换的性质)

(1) $f(x) = \left(\frac{\sin ax}{x}\right)^2, a > 0;$   
(2) $f(x) = \mathrm{e}^{-a(x - b)^2}, a > 0;$   
(3) $f(x) = \mathrm{e}^{-|x|\frac{\sin x}{x}}.$

4. 求以下积分的值：

(1) $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^2 \cos xt \, dt = ?$   
(2) $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^4 \mathrm{d}t = ?$

5. 设 $g \in L(R)$ , $\int_{R} g(x) \mathrm{d}x = 1$ ,

(1) 证明：对一切 $\xi \in R$ ,

$$
\lim _ {\delta \rightarrow 0} \hat {g} (\delta \xi) = 1;
$$

(2) 设连续的 $f \in L(R)$ ，且 $\hat{f} \in L(R)$ ，证明：

$$
\lim _ {\delta \rightarrow 0} \int_ {- \infty} ^ {\infty} \hat {g} (\delta \xi) \hat {f} (\xi) \mathrm{e} ^ {2 m \xi x} \mathrm{d} x = f (x)
$$

对一切 $x$ 成立.

6. 利用 Fourier 变换来证明以下等式: $a > 0, b > 0$ ,

(1) $f_{a} * f_{b} = f_{a + b}$ , 其中 $f_{a} = \frac{a}{\pi(x^{2} + a^{2})}$ ;  
(2) $g_{a} * g_{b} = g_{\min(a, b)}$ ，其中 $g_{a} = \frac{\sin ax}{\pi x}$ .

7. (1) 设 $f \in L(R)$ ，且 $(f * f)(x) = f(x)$ ，a.e., 试证 $f(x)$

$$
= 0, \quad \mathrm{a.e.};
$$

(2) 设 $f \in L(\mathbb{R})$ ，且 $(f * f)(x) = 0$ ，a.e., 试证 $f(x) = 0$ ，a.e..

8. 用 Parseval 等式来证明以下关系式：当 $a > 0, b > 0$ 时，

(1) $\int_{-\infty}^{\infty} \frac{\sin(at)\sin(bt)}{t^2} \mathrm{d}t = \pi \min(a, b)$ ;   
(2) $\int_{-\infty}^{\infty} \frac{t^2}{(t^2 + a^2)(t^2 + b^2)} \, \mathrm{d}t = \frac{\pi}{a + b}$ .

9. 求积分方程

$$
\int_ {- \infty} ^ {\infty} \frac {u (t)}{(x - t) ^ {2} + a ^ {2}} \mathrm{d} t = \frac {1}{t ^ {2} + b ^ {2}}, \quad 0 <   a <   b
$$

的解 $u(t) \in L^{2}(\pmb{R})$ .

10. 设 $f \in L(R^2)$ 是一个径向函数, 即: $f(x) = f_0(|x|)$ . 试证明: $f$ 的 Fourier 变换 $\hat{f}(t)$ 也是径向函数, 并且

$$
\hat {f} (t) = 2 \pi \int_ {0} ^ {\infty} f _ {0} (r) J _ {0} (2 \pi | t | r) r \mathrm{d} r,
$$

其中 $J_{0}$ 是Bessel函数，

$$
J _ {0} (r) = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} \mathrm{e} ^ {\mathrm{i} r \cos \theta} \mathrm{d} \theta .
$$

11. 寻找两个函数 $f, g \in L(\mathbb{R})$ ，二者都不是处处为零的，使得 $(f * g)(x) = 0$ .

# 第四章 共轭函数与Hilbert变换

在 §2.6 讨论 Poisson 积分时, 曾讲到 $f$ 的 Poisson 积分是幂级数 (2.47) 的和函数 $F(z)$ 的实部, $F(z)$ 的虚部便是 $f$ 的共轭 Poisson 积分. 上述幂级数 (2.47) 在单位圆周 $z = \mathrm{e}^{\mathrm{i}x} (0 \leqslant x \leqslant 2\pi)$ 上的实部正是 $f$ 的 Fourier 级数, 而其虚部 (2.51) 是 Fourier 级数 (1.7) 的共轭级数, 也叫做 $f$ 的共轭 Fourier 级数. 在适当的条件下, $f$ 的共轭 Fourier 级数收敛到 $f$ 的共轭函数 $\tilde{f}$ . 把共轭函数拓广到非周期情形, 便得到 Hilbert 变换.

上述 $F(z)$ 是解析函数, 对 Fourier 级数及共轭 Fourier 级数的一些讨论便可以借助于解析函数理论来进行. 这就为 Fourier 分析提供了复变函数论的方法.

我们由第二章习题第13题可以看出,如果考虑级数(1.9)的非对称部分和

$$
\sum_ {n = - M} ^ {N} c _ {n} \mathrm{e} ^ {\mathrm{i} n x},
$$

当 M 与 N 相互独立地趋向于 $+\infty$ 时, 它的收敛性就与级数 (1.7) 及其共轭级数 (2.51) 两者的收敛性都有关.

Hilbert 变换是奇异积分理论的基本来源. 一般的奇异积分算子正是 Hilbert 变换到高维空间的推广. 对它们的研究与微分方程, 积分方程等有着密切的联系.

本章只简要地介绍有关共轭函数与 Hilbert 变换的基本概念和某些基本结论.

## § 4.1 共轭 Fourier 级数的收敛性与可求和性

设 $f(x)$ 是实值函数， $f \in L(T)$ ，则它的Fourier系数 $a_{k}$ 与 $b_{k}$

是实数. 不难验证它的 Fourier 级数

$$
\frac {1}{2} a _ {0} + \sum_ {k = 1} ^ {\infty} \left(a _ {k} \cos k x + b _ {k} \sin k x\right) \tag {4.1}
$$

是以下幂级数

$$
\frac {1}{2} a _ {0} + \sum_ {k = 1} ^ {\infty} \left(a _ {k} - 1 b _ {k}\right) z ^ {k} \tag {4.2}
$$

当 $z$ 取值在单位圆周 $(z = \mathrm{e}^{\mathrm{i}x})$ 时的实部. 这时, 幂级数(4.2)的虚部是级数

$$
\sum_ {k = 1} ^ {\infty} \left(- b _ {k} \cos k x + a _ {k} \sin k x\right), \tag {4.3}
$$

它称为 $f$ 的共轭Fourier级数，记成 $\widetilde{S}(f,x)$ .若把(4.1)写成复的形式 $\sum_{k = -\infty}^{\infty}c_k\mathrm{e}^{ikx}$ ，则其共轭级数(4.3)可改写成

$$
\sum_ {k = - \infty} ^ {\infty} (- 1 \mathrm{sgn} k) c _ {k} \mathrm{e} ^ {i k x}, \tag {4.4}
$$

其中 $\operatorname{sgn} k$ 是符号函数（我们约定 $\operatorname{sgn} 0 = 0$ ）。如果不是先给定函数 $f$ ，而是只给定实数列 $a_k$ 与 $b_k$ ，也称(4.3)(或(4.4))是三角级数(4.1)(或它的复形式)的共轭级数。注意， $f$ 的共轭Fourier级数不一定是某个函数的Fourier级数①。

$f$ 的共轭Fourier级数的 $\pmb{n}$ 阶部分和为

$$
\begin{array}{l} \widetilde {S} _ {n} (x) = \sum_ {k = 1} ^ {n} \left(- b _ {k} \cos k x + a _ {k} \sin k x\right) \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \left\{\sum_ {k = 1} ^ {n} \sin k (x - t) \right\} d t \\ = \int_ {- \pi} ^ {\pi} f (t) \widetilde {D} _ {n} (x - t) d t \\ \end{array}
$$

$$
= (f * \widetilde {D} _ {n}) (x), \tag {4.5}
$$

其中 $\widetilde{D}_n(t) = \frac{1}{\pi}\sum_{k = 1}^n\sin kt$ ，它是下式

$$
\frac {1}{\pi} \left[ \frac {1}{2} + \sum_ {k = 1} ^ {n} \mathrm{e} ^ {\mathrm{i} k t} \right] = \frac {1}{\pi} \left[ \frac {1}{2} + \frac {\mathrm{e} ^ {\mathrm{i} (n + 1) t} - \mathrm{e} ^ {\mathrm{i} t}}{\mathrm{e} ^ {\mathrm{i} t} - 1} \right]
$$

的虚部,由此计算得到

$$
\widetilde {D} _ {n} (t) = \frac {1}{\pi} \frac {\cos \frac {t}{2} - \cos \left(n + \frac {1}{2}\right) t}{2 \sin \frac {t}{2}}. \tag {4.6}
$$

易见 $\widetilde{D}_n(t)$ 是周期为 $2\pi$ 的奇函数，因此有

$$
\int_ {- \pi} ^ {\pi} \widetilde {D} _ {n} (t) \mathrm{d} t = 0.
$$

(4.6)式通过运算可化为

$$
\widetilde {D} _ {n} (t) = \frac {1}{\pi} \left\{\frac {1}{2 \tan \frac {t}{2}} - \frac {\cos n t}{2 \tan \frac {t}{2}} + \frac {1}{2} \sin n t \right\}.
$$

若记

$$
\varphi_ {x} (t) = f (x + t) - f (x - t),
$$

根据 Riemann-Lebesgue 引理可知

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {\pi} \varphi_ {x} (t) \sin n t \mathrm{d} t = 0.
$$

从而由(4.5)式可得知，当 $n\to\infty$ 时

$$
\begin{array}{l} \widetilde {S} _ {n} (x) = \int_ {- \pi} ^ {\pi} f (x - t) \widetilde {D} _ {n} (t) \mathrm{d} t \\ = - \int_ {0} ^ {\pi} [ f (x + t) - f (x - t) ] \widetilde {D} _ {n} (t) d t \\ = - \frac {1}{\pi} \int_ {0} ^ {\pi} \varphi_ {x} (t) \left[ \frac {1}{2 \tan \frac {t}{2}} - \frac {\cos n t}{2 \tan \frac {t}{2}} \right] d t + o (1). \tag {4.7} \\ \end{array}
$$

容易看到 $\widetilde{S}_n(x)$ 的收敛性与下述积分

$$
\begin{array}{l} \widetilde {f} (x) = \lim _ {\delta \rightarrow + 0} \left\{- \frac {1}{\pi} \int_ {\delta} ^ {\pi} \frac {\varphi_ {r} (t)}{2 \tan \frac {t}{2}} d t \right\} \\ = \lim _ {\delta \rightarrow + 0} \frac {1}{\pi} \int_ {\delta \leqslant | t | \leqslant \pi} \frac {f (x - t)}{2 \tan \frac {t}{2}} \mathrm{d} t \tag {4.8} \\ \end{array}
$$

的存在性相联系.(4.8)式右端的积分就是在 t=0 处按主值意义下的积分. 如果它存在, 我们用 $\widetilde{f}(x)$ 来表示. $\widetilde{f}(x)$ 叫做 $f(x)$ 的共轭函数.

下面介绍共轭 Fourier 级数的收敛判别法.

定理4.1 设 $f \in L(T), \varphi_x(t) = f(x + t) - f(x - t)$ ，若

$$
\int_ {0} ^ {\pi} \frac {| \varphi_ {x} (t) |}{t} \mathrm{d} t <   + \infty ,
$$

则 $f(x)$ 的共轭Fourier级数在 $\pmb{x}$ 点收敛于 $\tilde{f} (x)$

证明 由定理的条件可知共轭函数 $\tilde{f}(x)$ 存在. 用 Riemann-Lebesgue 引理, 对 (4.7) 式令 $n \to \infty$ , 便可得到定理的结论.

此定理与Dini判别法是对应的.

定理 4.2(Young 定理) 设 $f(x)$ 在 x 点连续，并且在 x 的某一邻域 $[x-\delta, x+\delta]$ 上是有界变差函数，则 f 的共轭 Fourier 级数在 x 点收敛的充分必要条件是共轭函数 $\widetilde{f}(x)$ 存在。如果 $\widetilde{f}(x)$ 存在，则 $\widetilde{S}_{n}(x)$ 收敛于 $\widetilde{f}(x)$ 。

证明 若记

$$
\widetilde {f} (x, h) = - \frac {1}{\pi} \int_ {h} ^ {\pi} \frac {\varphi_ {x} (t)}{2 \tan \frac {t}{2}} \mathrm{d} t,
$$

我们先证明：在定理的条件下，有

$$
\widetilde {S} _ {n} (x) - \widetilde {f} \left(x, \frac {\pi}{n}\right)\rightarrow 0, \quad n \rightarrow \infty .
$$

由(4.7)式可推知

$$
\begin{array}{l} \widetilde {S} _ {n} (x) - \widetilde {f} \left(x, \frac {\pi}{n}\right) = \frac {1}{\pi} \int_ {\frac {\pi}{n}} ^ {\pi} \varphi_ {x} (t) \frac {\cos n t}{2 \tan \frac {t}{2}} d t \\ - \frac {1}{\pi} \int_ {0} ^ {\frac {\pi}{n}} \frac {\varphi_ {x} (t)}{2 \tan \frac {t}{2}} (1 - \cos n t) d t + o (1) \\ = I _ {1} + I _ {2} + o (1). \tag {4.9} \\ \end{array}
$$

由假定知 $\varphi_{x}(t)$ 在 $[0,\delta]$ 上有有界变差，所以它可以表示成

$$
\varphi_ {x} (t) = g _ {1} (t) - g _ {2} (t), \quad t \in [ 0, \delta ],
$$

其中 $g_{1}, g_{2}$ 是增函数（与 $x$ 有关）。又因 $f$ 在 $x$ 点连续，即有 $\lim_{t \to +0} \varphi_{x}(t) = 0$ ，可取得 $g_{1}$ 与 $g_{2}$ 使之满足 $\lim_{t \to +0} g_{1}(t) = 0 = \lim_{t \to +0} g_{2}(t)$ 。从而推知 $g_{1}, g_{2}$ 在 $[0, \delta]$ 上非负。

对任给 $\varepsilon > 0$ ，存在 $h_0$ 充分小， $0 < h_0 \leqslant \delta$ ，使得

$$
0 \leqslant g _ {k} (t) <   \varepsilon , \quad t \in [ 0, h _ {0} ].
$$

当 $n > \frac{\pi}{h_0}$ 时， $\frac{\pi}{n} < h_0$ ，可得以下估计：

$$
I _ {1} = \frac {1}{\pi} \int_ {\frac {\pi}{n}} ^ {h _ {0}} \varphi_ {x} (t) \frac {\cos n t}{2 \tan \frac {t}{2}} d t + \frac {1}{\pi} \int_ {h _ {0}} ^ {\pi} \varphi_ {x} (t) \frac {\cos n t}{2 \tan \frac {t}{2}} d t
$$

$$
= J _ {1} + J _ {2}.
$$

固定 $h_0$ ，由Riemann-Lebesgue引理知

$$
\lim _ {n \rightarrow \infty} J _ {2} = 0,
$$

$$
J _ {1} = \frac {1}{\pi} \int_ {\frac {\pi}{n}} ^ {h _ {0}} g _ {1} (t) \frac {\cos n t}{2 \tan \frac {t}{2}} d t - \frac {1}{\pi} \int_ {\frac {\pi}{n}} ^ {h _ {0}} g _ {2} (t) \frac {\cos n t}{2 \tan \frac {t}{2}} d t
$$

$$
= J _ {1} ^ {\prime} + J _ {1} ^ {\prime \prime},
$$

为估计 $J_{1}^{\prime}$ ，我们用两次积分第二中值定理，得

$$
J _ {1} ^ {\prime} = \frac {1}{\pi} \frac {1}{2 \tan \frac {\pi}{2 n}} \int_ {\frac {\pi}{n}} ^ {\xi} g _ {1} (t) \cos n t d t = \frac {1}{\pi} \frac {1}{2 \tan \frac {\pi}{2 n}} g _ {1} (\xi) \int_ {\eta} ^ {\xi} \cos n t d t,
$$

其中 $\frac{\pi}{n} \leqslant \xi \leqslant h_0, \frac{\pi}{n} \leqslant \eta \leqslant \xi$ ，便可推知

$$
\left| J _ {1} ^ {\prime} \right| \leqslant \frac {n}{\pi^ {2}} g _ {1} (\xi) \cdot \frac {2}{n} <   \frac {\varepsilon}{2},
$$

这是因为 $2\pi \tan \frac{\pi}{2n} \geqslant \frac{\pi^2}{n}$ , 而且

$$
\left| \int_ {\eta} ^ {\xi} \cos n t \mathrm{d} t \right| = \left| \frac {\sin n \xi - \sin n \eta}{n} \right| \leqslant \frac {2}{n}.
$$

$J_{1}^{\prime \prime}$ 的估计式类似. 从而得

$$
\left| J _ {1} \right| <   \varepsilon .
$$

再估计 $I_{2}$

$$
\begin{array}{l} \left| I _ {2} \right| \leqslant \frac {1}{\pi} \int_ {0} ^ {\frac {\pi}{n}} \left| \varphi_ {x} (t) \right| 2 \sin^ {2} \frac {n t}{2} / \left(2 \tan \frac {t}{2}\right) d t \\ \leqslant \frac {2 \varepsilon}{\pi} \int_ {0} ^ {\frac {\pi}{n}} \sin^ {2} \frac {n t}{2} / \tan \frac {t}{2} d t \\ <   \varepsilon \int_ {0} ^ {\frac {\pi}{n}} \left(\frac {n}{2} t\right) ^ {2} / \frac {t}{2} \mathrm{d} t = \varepsilon \int_ {0} ^ {\frac {\pi}{n}} \frac {n ^ {2}}{2} t \mathrm{d} t \\ = \varepsilon \cdot \frac {n ^ {2}}{4} \cdot \frac {\pi^ {2}}{n ^ {2}} <   3 \varepsilon . \\ \end{array}
$$

根据(4.9)式及其各项的估计,就得到

$$
\lim _ {n \rightarrow \infty} \left[ \widetilde {S} _ {n} (x) - \widetilde {f} \left(x, \frac {\pi}{n}\right)\right] = 0. \tag {4.10}
$$

其次，对于充分小的 $h > 0$ ，总可以取到 $\pmb{n}$ 使得 $\frac{\pi}{n + 1} < h \leqslant \frac{\pi}{n}$ . 又因 $f$ 在 $[x - \delta, x + \delta]$ 有界，所以有 $|\varphi_x(t)| \leqslant M, t \in [0, \delta]$ . 于是

$$
\begin{array}{l} \left| \widetilde {f} \left(x, \frac {\pi}{n}\right) - \widetilde {f} (x, h) \right| = \frac {1}{\pi} \left| \int_ {h} ^ {\frac {\pi}{n}} \frac {\varphi_ {x} (t)}{2 \tan \frac {t}{2}} \mathrm{d} t \right| \leqslant \frac {1}{\pi} \int_ {h} ^ {\frac {\pi}{n}} \frac {| \varphi_ {x} (t) |}{t} \mathrm{d} t \\ \leqslant M \int_ {\frac {\pi}{n + 1}} ^ {\frac {\pi}{n}} \frac {\mathrm{d} t}{t} = M \ln \left(1 + \frac {1}{n}\right)\rightarrow 0, \quad n \rightarrow \infty . \\ \end{array}
$$

还可看到，在这里 $n \to \infty$ ，与 $h \to 0$ 是互相等价的。

若 $\widetilde{S}_n(x)$ 收敛，由(4.10)可推知 $\lim_{n\to \infty}\widetilde{f}\left(x,\frac{\pi}{n}\right)$ 存在，再由上面

的讨论得知 $\lim_{h\to 0}\widetilde{f} (x,h)$ 存在，即共轭函数 $\widetilde{f} (x)$ 存在. 反之，若 $\widetilde{f}(x)$ 存在，由(4.10)易见 $\widetilde{S}_n(x)$ 收敛，其极限就是 $\widetilde{f}(x)$ .

注 若 $f$ 在 $x$ 点不连续, 且在 $x$ 的邻域有有界变差, 则 $x$ 点是第一类间断点, 即有 $f(x + 0) - f(x - 0) = l \neq 0$ , 不难证明

$$
\lim _ {h \rightarrow 0} \int_ {h} ^ {\pi} \frac {\varphi_ {x} (t)}{2 \tan \frac {t}{2}} d t
$$

不存在, 即共轭函数 $\tilde{f}(x)$ 不存在. 还可以进一步证明

$$
\widetilde {S} _ {n} (x) = - \frac {l}{\pi} \ln n + o (\ln n) \quad (n \rightarrow \infty),
$$

即 $\widetilde{S}_{n}(x)$ 发散(证明省略).

与Fourier级数类似，可以讨论共轭Fourier级数的求和理论.共轭Fourier级数的部分和 $\widetilde{S}_n(x)$ 如(4.7)式所表示，它的算术平均为

$$
\begin{array}{l} \widetilde {\sigma} _ {n} (x) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \widetilde {S} _ {k} (x) = \int_ {- \pi} ^ {\pi} f (x - t) \left[ \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \widetilde {D} _ {k} (t) \right] d t \\ = - \int_ {0} ^ {\pi} \varphi_ {x} (t) \left[ \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \widetilde {D} _ {k} (t) \right] \mathrm{d} t = - \int_ {0} ^ {\pi} \varphi_ {x} (t) \widetilde {K} _ {n} (t) \mathrm{d} t, \tag {4.11} \\ \end{array}
$$

其中 $\widetilde{D}_0(t) = 0$

$$
\begin{array}{l} \widetilde {K} _ {n} (t) = \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \widetilde {D} _ {k} (t) = \frac {1}{n + 1} \frac {1}{\pi} \sum_ {k = 0} ^ {n} \frac {\cos \frac {t}{2} - \cos \left(k + \frac {1}{2}\right) t}{2 \sin \frac {t}{2}} \\ = \frac {1}{\pi} \left[ \frac {1}{2 \tan \frac {t}{2}} - \frac {1}{n + 1} \frac {\sin (n + 1) t}{4 \sin^ {2} \frac {t}{2}} \right]. \tag {4.12} \\ \end{array}
$$

定理4.3 设 $f \in L(T)$ , 则对 $f$ 的每个Lebesgue点 $x$ , 有

$$
\lim _ {n \rightarrow \infty} \left[ \widetilde {\sigma} _ {n} (x) - \widetilde {f} \left(x, \frac {\pi}{n}\right)\right] = 0. \tag {4.13}
$$

从而在 $f$ 的Lebesgue点 $\pmb{x}$ 处，共轭函数 $\tilde{f} (x)$ 的存在等价于 $\lim_{n\to \infty}\widetilde{\sigma}_n(x)$ 存在.当它们存在时，便有

$$
\lim _ {n \rightarrow \infty} \widetilde {\sigma} _ {n} (x) = \widetilde {f} (x).
$$

证明 由(4.11)可得

$$
\begin{array}{l} \widetilde {\sigma} _ {n} (x) - \widetilde {f} \left(x, \frac {\pi}{n}\right) \\ = - \int_ {0} ^ {\frac {\pi}{n}} \varphi_ {i} (t) \widetilde {K} _ {n} (t) \mathrm{d} t + \int_ {\frac {\pi}{n}} ^ {\pi} \varphi_ {\tau} (t) \left[ \frac {1}{\pi} \frac {1}{2 \tan \frac {t}{2}} - \widetilde {K} _ {n} (t) \right] \mathrm{d} t \\ = I _ {1} + I _ {2}. \\ \end{array}
$$

由观察得知 $|\widetilde{D}_k(t)| = \left|\frac{1}{\pi}\sum_{j=1}^{k}\sin jt\right| \leqslant k$ ，于是

$$
\left| \widetilde {K} _ {n} (t) \right| = \left| \frac {1}{n + 1} \sum_ {k = 0} ^ {n} \widetilde {D} _ {k} (t) \right| \leqslant \frac {1}{n + 1} \sum_ {k = 0} ^ {n} k \leqslant n. \tag {4.14}
$$

又由(4.12)得到,对某个常数C>0,有

$$
\left| \frac {1}{\pi} \frac {1}{2 \tan \frac {t}{2}} - \widetilde {K} _ {n} (t) \right| = \left| \frac {1}{(n + 1) \pi} \frac {\sin (n + 1) t}{4 \sin^ {2} \frac {t}{2}} \right| \leqslant \frac {C}{n t ^ {2}}. \tag {4.15}
$$

注意到若 $x$ 是 $f$ 的Lebesgue点，便有

$$
\lim _ {n \rightarrow \infty} n \int_ {0} ^ {\frac {\pi}{n}} | \varphi_ {x} (t) | \mathrm{d} t = 0.
$$

于是用(4.14)得

$$
\mid I _ {1} \mid \leqslant n \int_ {0} ^ {\frac {\pi}{n}} \mid \varphi_ {x} (t) \mid \mathrm{d} t \rightarrow 0, \quad n \rightarrow \infty .
$$

再用(4.15)，又令 $\Phi(t) = \int_{0}^{t} |\varphi_{\tau}(u)| \, \mathrm{d}u$ ，可得

$$
\left| I _ {2} \right| \leqslant \frac {c}{n} \int_ {\frac {\pi}{n}} ^ {\pi} \frac {| \varphi_ {x} (t) |}{t ^ {2}} d t = \frac {c}{n} \left[ \frac {\Phi (\pi)}{\pi^ {2}} - \frac {\Phi (\pi / n)}{(\pi / n) ^ {2}} + 2 \int_ {\frac {\pi}{n}} ^ {\pi} \frac {\Phi (t)}{t ^ {3}} d t \right].
$$

用定理 2.22 中估计 $J_{n}$ 的类似方法, 可以证明上述不等式右端当

$n \to \infty$ 时趋向于零，从而得到(4.13)式成立.

由(4.13)式易知，若 $\widetilde{f}(x)$ 存在，则 $\widetilde{\sigma}_n(x)$ 极限存在，并且

$$
\lim _ {n \rightarrow \infty} \widetilde {\sigma} _ {n} (x) = \widetilde {f} (x). \tag {4.16}
$$

反之，若 $\lim_{n\to \infty}\widetilde{\sigma}_n(x)$ 存在，推知 $\lim_{n\to \infty}\widetilde{f}\left(x,\frac{\pi}{n}\right)$ 存在.对充分小的 $h > 0$ 可以选到 $n$ ，使得 $\frac{\pi}{n + 1} < h\leqslant \frac{\pi}{n}$ ，于是

$$
\begin{array}{l} \left| \widetilde {f} \left(x, \frac {\pi}{n}\right) - \widetilde {f} (x, h) \right| \leqslant \frac {1}{\pi} \int_ {h} ^ {\frac {\pi}{n}} \frac {| \varphi_ {x} (t) |}{t} d t \\ \leqslant \frac {1}{\pi} \frac {1}{h} \int_ {h} ^ {\frac {\pi}{n}} | \varphi_ {x} (t) | \mathrm{d} t \leqslant \frac {n + 1}{\pi^ {2}} \int_ {0} ^ {\frac {\pi}{n}} | \varphi_ {x} (t) | \mathrm{d} t, \\ \end{array}
$$

由 $x$ 是Lebesgue点，可知当 $n\to \infty$ 时，上式右端趋向于零.从而由 $\lim_{n\to \infty}\widetilde{f}\left(x,\frac{\pi}{n}\right)$ 存在便推知共轭函数存在，并且(4.16)式也成立．

类似地可以讨论 $f(x)$ 的共轭Fourier级数的Abel求和.对于 $0\leqslant r < 1$

$$
\begin{array}{l} v (r, x) = \sum_ {n = 1} ^ {\infty} (- b _ {n} \cos n x + a _ {n} \sin n x) r ^ {n} \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) \left[ \sum_ {n = 1} ^ {\infty} r ^ {n} \sin n (x - t) \right] d t \\ = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) Q (r, x - t) d t, \\ \end{array}
$$

其中 $Q(r,t)$ 是(2.45)式的虚部, 得到

$$
Q (r, t) = \frac {r \sin t}{1 - 2 r \cos t + r ^ {2}}.
$$

关于 Abel 求和有以下结果.

定理4.4 设 $f \in L(T)$ , 则对 $f$ 的每个Lebesgue点 $x$ , 有

$$
\lim _ {r \rightarrow 1 - 0} [ v (r, x) - \tilde {f} (x, h _ {r}) ] = 0,
$$

其中 $h_r = \arcsin (1 - r)$ （由 $r \to 1 - 0$ 可推得 $h_r \to 0$ ），若共轭函数 $\tilde{f}(x)$ 存在，则

$$
\lim _ {r \rightarrow 1 - 0} v (r, x) = \tilde {f} (x).
$$

定理的证明省略.

## § 4.2 共轭函数的存在性

上节的讨论告诉我们, 共轭 Fourier 级数的收敛或求和, 都与共轭函数的存在性密切联系. 因此有必要讨论在什么条件下共轭函数存在.

定理4.5 若 $f \in L^2(T)$ , 则它的共轭函数 $\widetilde{f}(x)$ 几乎处处存在, 满足 $\| \widetilde{f} \|_2 \leqslant \| f \|_2$ , 并且 $f$ 的共轭Fourier级数就是 $\widetilde{f}$ 的Fourier级数, 即 $\widetilde{S}(f, x) = S(\widetilde{f}, x)$ .

证明 设 $f \in L^2(T)$ , 若其 Fourier 级数是 $f(x) \sim \sum_{-\infty}^{\infty} c_k e^{ikx}$ , 则 $\sum_{k=-\infty}^{\infty} |c_k|^2 < +\infty$ . 由 (4.4) 知

$$
\widetilde {S} (f, x) = \sum_ {k = - \infty} ^ {\infty} (- \operatorname{isgn} k) c _ {k} \mathrm{e} ^ {\mathrm{i} k x}.
$$

记 $\tilde{c}_k = (-\mathrm{i}\mathrm{sgn}k)c_k$ ，显然 $\sum_{k = -\infty}^{\infty}|\tilde{c}_k|^2\leqslant \sum_{k = -\infty}^{\infty}|c_k|^2 < + \infty .$ 用第二章定理2.30中类似的论证，可以证明存在函数 $g(x)\in L^{2}(T)$ ，使得 $\| \widetilde{S}_n\dots g\| _2\to 0(n\to \infty)$ ，进而证明 $g$ 的Fourier系数是 $\{\tilde{c}_k\}$ ，从而得知 $\widetilde{S}(f,x) = S(g,x)$ ，并且

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | g | ^ {2} \mathrm{d} x = \sum_ {- \infty} ^ {\infty} | \tilde {c} _ {k} | ^ {2}.
$$

于是有

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | g | ^ {2} \mathrm{d} x \leqslant \sum_ {- \infty} ^ {\infty} | c _ {k} | ^ {2} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} | f | ^ {2} \mathrm{d} x,
$$

即有 $\| g\| _2\leqslant \| f\| _2.$

根据定理 2.22 可知, 对于几乎一切的 x, g 的 Fourier 级数可算术

平均求和到 $g(x)$ ，即

$$
\lim _ {n \rightarrow \infty} \sigma_ {n} (g, x) = g (x), \quad \text { a.e. }
$$

但因 $\widetilde{S}_n(f,x) = S_n(g,x)$ ，所以 $\widetilde{\sigma}_n(f,x) = \sigma_n(g,x)$ ，由此推知，对几乎一切 $x$ ，以下极限

$$
\lim _ {n \rightarrow \infty} \tilde {\sigma} _ {n} (f, x) = g (x)
$$

存在. 根据定理 4.3, 便知对几乎一切点 $x$ , 共轭函数 $\tilde{f}(x)$ 存在并且等于 $g(x)$ , 由前面关于 $g$ 的结果便得到

$$
\| \widetilde {f} \| _ {2} \leqslant \| f \| _ {2},
$$

并且 $\widetilde{S}(f,x) = S(\widetilde{f},x)$

定理4.6 设 $f \in L(T)$ , 则共轭函数 $\widetilde{f}(x)$ 几乎处处存在.

证明省略(参看 Hardy-Rogosinski[2]).

注意：定理4.6虽然由 $f$ 可积推知共轭函数 $\widetilde{f}(x)$ 几乎处处存在，但是 $\widetilde{f}(x)$ 不一定可积。以下例子可以说明此事实。设 $f$ 是一个以 $2\pi$ 为周期的可积函数，它在 $\left(0, \frac{\pi}{2}\right)$ 中非负，而在 $(- \pi, \pi) \setminus \left(0, \frac{\pi}{2}\right)$ 中取值为0，那么对于 $-\frac{\pi}{2} < x < 0$ （当 $t \in \left(0, \frac{\pi}{2}\right)$ 时有 $x - t < 0$ ），就有

$$
\begin{array}{l} \widetilde {f} (x) = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} \frac {f (t)}{2 \tan \frac {x - t}{2}} \mathrm{d} t = \frac {1}{\pi} \int_ {0} ^ {\frac {\pi}{2}} \frac {f (t)}{2 \tan \frac {x - t}{2}} \mathrm{d} t \\ \leqslant \frac {1}{\pi} \int_ {0} ^ {| x} \frac {f (t)}{2 \tan \frac {x - t}{2}} \mathrm{d} t = - \frac {1}{\pi} \int_ {0} ^ {| x |} \frac {f (t)}{2 \tan \frac {t + | x |}{2}} \mathrm{d} t, \\ \end{array}
$$

$$
| \widetilde {f} (x) | \geqslant \frac {1}{\pi} \int_ {0} ^ {| x |} \frac {f (t)}{2 \tan \frac {t + | x |}{2}} \mathrm{d} t \geqslant \frac {1}{2 \pi \tan | x |} \int_ {0} ^ {| x |} f (t) \mathrm{d} t.
$$

现在我们取

$$
f (t) = \left\{ \begin{array}{l l} \frac {1}{t \ln^ {2} t} = \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {- 1}{\ln t}\right) = \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {1}{\ln \frac {1}{t}}\right), & 0 <   t <   \frac {\pi}{2}, \\ 0, \quad t \in [ - \pi , \pi ] \backslash \left(0, \frac {\pi}{2}\right). \end{array} \right.
$$

容易看到 f 在 $(-π, π)$ 可积，但是存在 c > 0 及适当小的 $\delta > 0$ ，

$$
| \widetilde {f} (x) | \geqslant \frac {c}{| x | \ln \left(\frac {1}{| x |}\right)}, \quad x \in (- \delta , 0),
$$

由此可知 $\tilde{f}$ 在 $x = 0$ 的邻域不可积.

## § 4.3 Hilbert 变换

在周期函数的情形,曾定义共轭函数为

$$
\widetilde {f} (x) = \lim _ {\delta \rightarrow + 0} \frac {1}{\pi} \int_ {\delta \leqslant | t | \leqslant \pi} \frac {f (x - t)}{2 \tan \frac {t}{2}} \mathrm{d} t.
$$

容易看到 $\widetilde{f}(x)$ 的存在性与 $\lim_{\delta \to +0} \frac{1}{\pi} \int_{\delta \leqslant |t| \leqslant \pi} \frac{f(x - t)}{t} \mathrm{d}t$ 的存在性等价.

对于定义在全实轴 $\pmb{R}$ 上的函数，设 $f\in L^{p}(\pmb {R}),1\leqslant p <   \infty$ ，我们定义

$$
\widetilde {f} (x) = \lim _ {\delta \rightarrow + 0} \frac {1}{\pi} \int_ {\delta \leqslant | t |} \frac {f (x - t)}{t} \mathrm{d} t = \lim _ {\delta \rightarrow + 0} \frac {1}{\pi} \int_ {\delta \leqslant | x - t |} \frac {f (t)}{x - t} \mathrm{d} t,
$$

$\tilde{f}$ 称为 $f$ 的Hilbert变换(或共轭函数)，也记为 $Hf$

不妨设 $f$ 是实值函数. 我们考虑函数

$$
F (z) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {f (t)}{z - t} \mathrm{d} t,
$$

其中 $z = x + 1y$ ，记 $\pmb{R}_{+}^{2} = \{x + \mathrm{i}y:x\in R,y > 0\}$ .用复变函数理论不难证明 $F(z)$ 在 $\pmb{R}_{+}^{2}$ 上解析.将 $z = x + 1y$ 代入，算得

$$
\begin{array}{l} F (z) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) \left\{\frac {y}{(x - t) ^ {2} + y ^ {2}} + \mathrm{i} \frac {(x - t)}{(x - t) ^ {2} + y ^ {2}} \right\} \mathrm{d} t \\ = u (x, y) + \mathrm{i} v (x, y), \tag {4.17} \\ \end{array}
$$

它的实部 $u(x,y)$ 与虚部 $v(x,y)$ 分别表示为：

$$
\begin{array}{l} u (x, y) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) \frac {y}{(x - t) ^ {2} + y ^ {2}} d t \\ = \int_ {- \infty} ^ {\infty} f (t) P (x - t, y) d t, \\ \end{array}
$$

$$
v (x, y) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) \frac {x - t}{(x - t) ^ {2} + y ^ {2}} d t
$$

$$
= \int_ {- \infty} ^ {\infty} f (t) Q (x - t, y) d t,
$$

其中 $P(x,y) = \frac{1}{\pi}\frac{y}{x^2 + y^2}, Q(x,y) = \frac{1}{\pi}\frac{x}{x^2 + y^2}.$

$P(x,y)$ 就是 Poisson 核, $Q(x,y)$ 称为共轭 Poisson 核, $v(x,y)$ 等式右端的积分叫做共轭 Poisson 积分. $u(x,y)$ 与 $v(x,y)$ 都是在 $\pmb{R}_{+}^{2}$ 上的调和函数.

我们将利用解析函数的性质证明 $\lim_{y\to 0}v(x,y)$ 对几乎一切 $x$ 存在，由此推知Hilbert变换的存在性.

定理4.7 设 $f \in L^{p}(\mathbb{R}), 1 \leqslant P < \infty$ ，则它的Hilbert变换 $\widetilde{f}(x)$ 在几乎一切的 $x$ 上存在。

此结论通过以下三个引理得到.

引理4.8 若 $G(z)$ 在 $y > 0$ 处解析并且有界， $z = x + \mathrm{i}y$ ，则当 $y \to 0$ 时，对几乎一切 $x, G(z)$ 有极限（实际上是有角形边值）.

引理证明省略(参见普里瓦洛夫《解析函数的边界性质》).

引理4.9 设实值函数 $f \in L^{p}(\mathbb{R}), 1 \leqslant p < \infty, F(z)$ 由(4.17)式给出， $z = x + \mathrm{i}y \in \mathbb{R}_{+}^{2}$ ，则当 $y \to 0$ 时，对于几乎一切 $x \in (-\infty, \infty)$ ，函数 $F(z)$ 有极限。

证明 因为 $f$ 可以分成正部与负部, 即 $f = f_{+} - f_{-}$ , 所以不妨设 $f \geqslant 0$ . 根据 Poisson 积分的定义容易推知 $u(x, y) \geqslant 0$ . 令

$$
G (z) = \mathrm{e} ^ {- F (z)} = \mathrm{e} ^ {- u (x, y) - i v (x, y)},
$$

便得知 $|G(z)| = \mathrm{e}^{-u(x,\gamma)}\leqslant 1.$

根据引理4.8可知当 $y \to 0$ 时，对于几乎一切 $x, G(z)$ 趋向于有限的极限。因为只有当 $u(x, y)$ 的极限为 $+\infty$ 时， $G(z)$ 的极限才可能为零。但这里 $u(x, y)$ 是 $f$ 的Poisson积分，当 $y \to 0$ 时，对几乎一切 $x$ ，它的极限是 $f(x)$ ，亦即，它的极限几乎处处是有限数。因此 $G(z)$ 的极限几乎处处不为零。从而 $F(z)$ 几乎处处趋于有限的极限，它的虚部 $v(x, y)$ 也就几乎处处趋于有限的极限（当 $y \to 0$ 时， $v(x, y)$ 的极限点形如 $a + 2k\pi, k$ 是整数。而由 $v(x, y)$ 在 $\mathbb{R}_+^2$ 的连续性推知它只有一个极限点。参看E.M.Stein，G.Weiss[4]第五章引理2.6）。

引理4.10 设 $f \in L^{p}(\mathbb{R}), 1 \leqslant p < \infty$ ，则在 $f$ 的Lebesgue点 $x$ 处，有

$$
\lim _ {y \rightarrow + 0} \left\{v (x, y) - \frac {1}{\pi} \int_ {y \leqslant | t |} \frac {f (x - t)}{t} \mathrm{d} t \right\} = 0.
$$

证明 只需证明

$$
\lim _ {y \rightarrow + 0} \left\{\int_ {- \infty} ^ {\infty} f (x - t) \frac {t}{t ^ {2} + y ^ {2}} \mathrm{d} t - \int_ {y \leqslant | t |} \frac {f (x - t)}{t} \mathrm{d} t \right\} = 0.
$$

令

$$
K (t) = \left\{ \begin{array}{l l} \frac {t}{t ^ {2} + 1} - \frac {1}{t}, & | t | \geqslant 1, \\ \frac {t}{t ^ {2} + 1}, & | t | <   1. \end{array} \right.
$$

因为 $|t|\geqslant 1$ 时， $K(t) = \frac{-1}{t(t^2 + 1)}$ ，容易看到 $K(t)\in L^{1}(\pmb {R})$ .而且因

$$
\psi (x) = \sup _ {| t | \geqslant | \tau |} | K (t) | = \left\{ \begin{array}{l l} \frac {1}{| x | (1 + x ^ {2})}, & | x | \geqslant 1, \\ \frac {1}{2}, & | x | <   1, \end{array} \right.
$$

也知 $\psi (x)\in L^{1}(\pmb {R}).K(t)$ 是奇函数，因此

$$
\int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t = 0.
$$

对于 $\varepsilon > 0$ ，令 $K_{\varepsilon}(t) = \varepsilon^{-1} K\left(\frac{t}{\varepsilon}\right)$ . 根据本书第14页处的注②，有结论(1.25)，即

$$
\lim _ {\varepsilon \rightarrow 0} (f * K _ {\varepsilon}) (x) = f (x) \int_ {- \infty} ^ {\infty} K (t) \mathrm{d} t,
$$

其中 $x$ 是 $f$ 的Lebesgue点. 用上述 $K(t)$ 代入, 便得知在 $f$ 的Lebesgue点 $x$ 处, 有

$$
\begin{array}{l} \lim _ {\varepsilon \rightarrow 0} (f * K _ {\varepsilon}) (x) \\ = \lim _ {\varepsilon \rightarrow 0} \left\{\int_ {- \infty} ^ {\infty} f (x - t) \frac {t}{t ^ {2} + \varepsilon^ {2}} \mathrm{d} t - \int_ {\varepsilon \leqslant | t |} \frac {f (x - t)}{t} \mathrm{d} t \right\} \\ = 0. \\ \end{array}
$$

综合引理 4.9 与引理 4.10. 便推知在几乎一切点 x 处, 有极限 $\lim_{\varepsilon\to+0}\int\limits_{\varepsilon\leqslant|t|}\frac{f(x-t)}{t}dt$ 存在, 亦即 Hilbert 变换 $\widetilde{f}(x)$ 几乎处处存在.

定理4.11 设 $f \in L^2(\mathbb{R})$ ，则 $f$ 的Hilbert变换 $\widetilde{f} \in L^2(\mathbb{R})$ ，并且有

(1) $\| \widetilde{f} \|_2 = \| f \|_2$ ;   
(2) $(\tilde{f})^{\wedge}(t) = -\mathrm{i}(\operatorname{sgn}t)\hat{f}(t)$ ;   
(3) $\lim_{\delta \to +0} \| \widetilde{f} - \widetilde{f}_{\delta} \|_2 = 0,$

其中

$$
\widetilde {f} _ {\delta} (x) = \frac {1}{\pi} \int_ {| t | \geqslant \delta} \frac {f (x - t)}{t} \mathrm{d} t.
$$

证明 对于 $0 < \delta < \eta < \infty$ ，作

$$
K _ {\delta \eta} (x) = \left\{ \begin{array}{l l} { \frac {1}{x},} & {\delta \leqslant | x | \leqslant \eta ,} \\ {0,} & {\text {其他}.} \end{array} \right.
$$

令

$$
\begin{array}{l} \widetilde {f} _ {\delta \eta} (x) = \frac {1}{\pi} \int_ {\delta \leqslant | t | \leqslant \eta} \frac {f (x - t)}{t} d t \\ = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (x - t) \mathscr {K} _ {\delta \eta} (t) d t \\ = \frac {1}{\pi} (f * \mathscr {K} _ {\delta \eta}) (x), \\ \end{array}
$$

因为 $f \in L^2(\mathbb{R})$ , $\mathcal{K}_{\delta \eta} \in L^1(\mathbb{R})$ , 所以根据定理 1.3 可知 $f * \mathcal{K}_{\delta \eta} \in L^2(\mathbb{R})$ . 计算 $\mathcal{K}_{\delta \eta}$ 的 Fourier 变换得

$$
\begin{array}{l} \hat {\mathcal {H}} _ {\delta \eta} = \int_ {- \infty} ^ {\infty} \mathcal {K} _ {\delta \eta} (x) e ^ {- 2 \pi x t} d x \\ = \left(\int_ {- \eta} ^ {- \delta} \frac {1}{x} \mathrm{e} ^ {- 2 \pi x t} \mathrm{d} x + \int_ {\delta} ^ {\eta} \frac {1}{x} \mathrm{e} ^ {- 2 \pi x t} \mathrm{d} x\right) \\ = \int_ {\delta} ^ {\eta} \left(- \frac {1}{x}\right) \left(\mathrm{e} ^ {2 \pi u t x} - \mathrm{e} ^ {- 2 \pi u t x}\right) \mathrm{d} x \\ = - 2 \mathrm{i} \int_ {\delta} ^ {\eta} \frac {\sin 2 \pi x t}{x} \mathrm{d} x \\ = - 2 \mathrm{i} (\operatorname{sgn} t) \int_ {2 \pi \delta | t |} ^ {2 \pi \eta | t |} \frac {\sin x}{x} \mathrm{d} x. \tag {4.18} \\ \end{array}
$$

根据定理 3.22, 有

$$
(\tilde {f} _ {\delta \eta}) ^ {\wedge} (t) = \frac {1}{\pi} \hat {f} (t) \cdot \hat {\mathcal {K}} _ {\delta \eta} (t).
$$

由(4.18)式可得

$$
\lim _ {\delta \rightarrow 0} \lim _ {\eta \rightarrow \infty} \hat {\mathcal {K}} _ {\delta \eta} (t) = - 2 \mathrm{i} (\operatorname{sgn} t) \cdot \frac {\pi}{2} = - 1 \pi (\operatorname{sgn} t),
$$

并且有常数 M>0，使对一切 $\delta,\eta(0<\delta<\eta<\infty)$ ，

$$
\left| \mathcal {H} _ {\delta \eta} (t) \right| \leqslant M, \quad t \in R.
$$

因此，若记

$$
\varphi (t) = - 1 (\operatorname{sgn} t) \cdot \hat {f} (t),
$$

便有 $\lim_{\delta \to 0}\lim_{\eta \to \infty}(\widetilde{f}_{\delta \eta})^{\wedge}(t) = -\mathrm{i}(\operatorname {sgn}t)\cdot \hat{f} (t) = \varphi (t),$

$$
\left| \left(\tilde {f} _ {\delta \eta}\right) ^ {\wedge} (t) \right| \leqslant M | \hat {f} (t) |.
$$

根据控制收敛定理可知，当 $\delta\to0,\eta\to\infty$ 时，

$$
\left\|\left(\widetilde {f} _ {\delta \eta}\right) ^ {\wedge} - \varphi \right\| _ {2} ^ {2} = \int_ {- \infty} ^ {\infty} \left| (\widetilde {f} _ {\delta \eta}) ^ {\wedge} (t) - (- \operatorname{isgn} t) \hat {f} (t) \right| ^ {2} \mathrm{d} t \rightarrow 0.
$$

因 $f \in L^{2}(\mathbb{R})$ ，知 $\hat{f} \in L^{2}(\mathbb{R})$ ，所以 $\varphi \in L^{2}(\mathbb{R})$ 。令

$$
\varphi_ {1} (t) = \varphi (- t), \quad g (t) = \hat {\varphi} _ {1} (t),
$$

根据 $L^2$ 中函数的Fourier变换的性质便得

$$
\hat {g} (t) = \hat {\varphi} _ {1} (t) = \varphi_ {1} (- t) = \varphi (t).
$$

于是由 Parseval 等式可得

$$
\begin{array}{l} \| \widetilde {f} _ {\delta \eta} - g \| _ {2} = \| (\widetilde {f} _ {\delta \eta}) ^ {\wedge} - \hat {g} \| _ {2} \\ = \left\| (\widetilde {f _ {\delta \eta}}) ^ {\wedge} - \varphi \right\| _ {2} \rightarrow 0, \quad \delta \rightarrow 0, \eta \rightarrow \infty . \tag {4.19} \\ \end{array}
$$

根据定理 4.7, 我们知道有

$$
\lim _ {\delta \to 0} \lim _ {\eta \to \infty} \widetilde {f} _ {\delta \eta} (x) = \widetilde {f} (x), \quad \text { a.e. } \tag {4.20}
$$

由(4.19)与(4.20)便可推知

$$
g (x) = \widetilde {f} (x), \quad \text { a.e., }
$$

因此有

$$
(\tilde {f}) ^ {\wedge} (t) = \varphi (t) = - 1 (\operatorname{sgn} t) \hat {f} (t), \quad \text { a.e., }
$$

$$
\| \tilde {f} \| _ {2} = \| (\tilde {f}) ^ {\wedge} \| _ {2} = \| \varphi \| _ {2} = \| \hat {f} \| _ {2} = \| f \| _ {2}.
$$

最后证明结论(3). 容易看到

$$
\widetilde {f} _ {\delta} (x) = \lim _ {\eta \rightarrow \infty} \widetilde {f} _ {\delta \eta} (x).
$$

由 Fatou 引理可知

$$
\begin{array}{l} \| \widetilde {f} - \widetilde {f _ {\delta}} \| _ {2} ^ {2} = \int_ {- \infty} ^ {\infty} | \widetilde {f} (x) - \widetilde {f _ {\delta}} (x) | ^ {2} d x \\ \leqslant \lim _ {\eta \rightarrow \infty} \int_ {- \infty} ^ {\infty} | \widetilde {f} (x) - \widetilde {f} _ {\delta \eta} (x) | ^ {2} \mathrm{d} x, \tag {4.21} \\ \end{array}
$$

而由(4.19)式又知

$$
\lim _ {\delta \rightarrow 0} \lim _ {\eta \rightarrow \infty} \| \widetilde {f} - \widetilde {f} _ {\delta \eta} \| _ {2} = 0.
$$

于是，在(4.21)式两边令 $\delta \rightarrow 0$ ，便得到

$$
\lim _ {\delta \rightarrow 0} \| \widetilde {f} - \widetilde {f} _ {\delta} \| _ {2} = 0. \quad \|
$$

定理4.12 设 $f \in L^{2}(\mathbb{R}), g \in L^{2}(\mathbb{R})$ ，则

$$
\int_ {- \infty} ^ {\infty} \widetilde {f} (x) g (x) \mathrm{d} x = - \int_ {- \infty} ^ {\infty} f (x) \widetilde {g} (x) \mathrm{d} x, \tag {4.22}
$$

$$
\int_ {- \infty} ^ {\infty} f (x) \overline {{{{g (x)}}}} \mathrm{d} x = \int_ {- \infty} ^ {\infty} \widetilde {f} (x) \overline {{{{\widetilde {g} (x)}}}} \mathrm{d} x. \tag {4.23}
$$

证明 先证明(4.22)式. 我们将应用 Parseval 等式

$$
\int_ {- \infty} ^ {\infty} f \hat {g} \mathrm{d} x = \int_ {- \infty} ^ {\infty} \hat {f} g \mathrm{d} x. \tag {4.24}
$$

对于 $L^2$ 中的函数 $g$ , 由 Plancherel 定理知

$$
(\mathcal {F} ^ {- 1} g) (x) = \hat {g} (- x), \quad g = (\mathcal {F} ^ {- 1} g) ^ {\wedge}.
$$

于是用(4.24)以及定理4.11中的(2)，可得

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} \tilde {f} g d x = \int_ {- \infty} ^ {\infty} \tilde {f} (\mathscr {F} ^ {- 1} g) ^ {\wedge} d x \\ = \int_ {- \infty} ^ {\infty} (\tilde {f}) ^ {\wedge} (x) \mathscr {F} ^ {- 1} g (x) d x \\ = \int_ {- \infty} ^ {\infty} (\tilde {f}) ^ {\wedge} (x) \hat {g} (- x) d x \\ = \int_ {- \infty} ^ {\infty} - 1 (\operatorname{sgn} x) \hat {f} (x) \hat {g} (- x) \mathrm{d} x \\ = \int_ {- \infty} ^ {\infty} 1 (\operatorname{sgn} t) \hat {f} (- t) \hat {g} (t) d t \\ = - \int_ {- \infty} ^ {\infty} [ - i (\operatorname{sgn} t) \hat {g} (t) ] \hat {f} (- t) d t \\ = - \int_ {- \infty} ^ {(\infty)} (\widetilde {g}) ^ {\wedge} (t) \mathscr {F} ^ {- 1} f (t) d t \\ = - \int_ {- \infty} ^ {\infty} f (x) \widetilde {g} (x) \mathrm{d} x. \\ \end{array}
$$

类似地,用 Parseval 等式

$$
\int_ {- \infty} ^ {\infty} f \overline {{g}} \mathrm{d} x = \int_ {- \infty} ^ {\infty} \dot {f} \overline {{\hat {g}}} \mathrm{d} x
$$

可以证明(4.23)式成立.

## § 4.4 Hilbert 变换的反演

由定理 4.11 可知 $L^{2}$ 中函数的 Hilbert 变换仍属于 $L^{2}$ . 现对 $L^{2}$ 中函数的 Hilbert 变换证明其反演公式成立.

定理 4.13 设 $f \in L^{2}(R)$ ，则它的 Hilbert 变换 $\widetilde{f}$ 的 Hilbert 变换几乎处处等于 $-f(x)$ ，即

$$
(H ^ {2} f) (x) = - f (x), \quad \mathrm{a.e.,} \tag {4.25}
$$

亦即

$$
f (x) = - \lim _ {\delta \rightarrow + 0} \frac {1}{\pi} \int_ {\delta \leqslant | t |} \frac {\widetilde {f} (x - t)}{t} \mathrm{d} t, \quad \text {a.e.,} \tag {4.26}
$$

此式称为 Hilbert 变换的反演公式.

证明 由(4.22)式,其中用 $\widetilde{f}$ 代替 $f$ ,再任取 $g \in L^{2}(\mathbb{R})$ ,用 $\overline{g}$ 代替式中的 $g$ ,得到

$$
\int_ {- \infty} ^ {\infty} \widetilde {f} \overline {{{g}}} \mathrm{d} x = - \int_ {- \infty} ^ {\infty} \widetilde {f} \tilde {\overline {{{g}}}} \mathrm{d} x = - \int_ {- \infty} ^ {\infty} \widetilde {f} \overline {{{\overline {{{g}}}}}} \mathrm{d} x = - \int_ {- \infty} ^ {\infty} f \overline {{{g}}} \mathrm{d} x,
$$

上面最后一个等式是根据(4.23)式得到的. 由此可知, 对任给 $g \in L^{2}(\mathbb{R})$ , 有

$$
\int_ {- \infty} ^ {\infty} (\widetilde {f} + f) \overline {{{g}}} \mathrm{d} x = 0,
$$

特别，取 $g = \tilde{f} + f$ ，便得到

$$
\int_ {- \infty} ^ {\infty} | \tilde {f} + f | ^ {2} \mathrm{d} x = 0.
$$

因此推知

$$
H ^ {2} f = \tilde {\tilde {f}} (x) = - f (x), \quad \text { a.e. }.
$$

当 $f \in L(\mathbb{R})$ 时, 虽然由定理4.7知道它的Hilbert变换 $\widetilde{f}(x)$ 是几乎处处存在的, 但一般来说, 不能推断 $\widetilde{f}$ 属于 $L(\mathbb{R})$ . 例如, 设

$$
f (x) = \frac {1}{1 + x ^ {2}} \in L (\boldsymbol {R}),
$$

它的 Hilbert 变换是 $^{①}$

$$
\widetilde {f} (x) = \frac {x}{1 + x ^ {2}} \overline {{{\in}}} L (\boldsymbol {R}).
$$

为了研究 Hilbert 变换的反演, 我们还需假定 $\tilde{f} \in L(R)$ .

引理4.14 设 $f \in L^{2}(\mathbb{R})$ ，则对于 $y > 0$ ，有

$$
\frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) Q (x - t, y) \mathrm{d} t = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \widetilde {f} (t) P (x - t, y) \mathrm{d} t, \tag {4.27}
$$

$$
\frac {1}{\pi} \int_ {- \infty} ^ {\infty} f (t) P (x - t, y) \mathrm{d} t = - \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \widetilde {f} (t) Q (x - t, y) \mathrm{d} t. \tag {4.28}
$$

若 $f \in L(\mathbb{R})$ ，且 $\widetilde{f} \in L(\mathbb{R})$ ，则也有(4.27)及(4.28)式成立.

证明 设 $f \in L^{2}(\pmb{R})$ ，而且

$$
P _ {y} (x) = P (x, y) = \frac {1}{\pi} \frac {y}{x ^ {2} + y ^ {2}},
$$

$$
Q _ {y} (x) = Q (x, y) = \frac {1}{\pi} \frac {x}{x ^ {2} + y ^ {2}}
$$

都属于 $L^2 (\pmb {R})$ .由 §3.3中例2及定理3.13得知

$$
\hat {P} _ {y} (t) = \mathrm{e} ^ {- 2 \pi y | t |}.
$$

又可以算得

$$
\hat {Q} _ {y} (t) = - \mathrm{i} (\operatorname{sgn} t) \mathrm{e} ^ {- 2 \pi \nu | t |}.
$$

① 我们有

$$
\widetilde {f} _ {\delta} (x) = \frac {1}{\pi} \int_ {| x - u | \geqslant \delta} \frac {1}{(x - u) (1 + u ^ {2})} \mathrm{d} u,
$$

分解因式得

$$
\begin{array}{l} \frac {1}{(x - u) (1 + u ^ {2})} = \frac {1}{1 + x ^ {2}} \left[ \frac {1}{x - u} + \frac {x + u}{1 + u ^ {2}} \right] \\ = \frac {1}{(1 + x ^ {2}) (x - u)} + \frac {1}{2 (x - 1) (1 + 1 u)} + \frac {1}{2 (x + 1) (1 - 1 u)}. \\ \end{array}
$$

于是,可以算得(详见河田龍夫[1])

$$
\widetilde {f} (x) = \lim _ {\delta \rightarrow + 0} \widetilde {f} _ {\delta} (x) = \frac {1}{2} \left(\frac {1}{x - 1} + \frac {1}{x + 1}\right) = \frac {x}{1 + x ^ {2}}.
$$

再由定理 4.11, 便得到

$$
\hat {f} (t) \cdot \hat {Q} _ {y} (t) = (\tilde {f}) ^ {\wedge} (t) \cdot \hat {P} _ {y} (t).
$$

于是，根据推论3.21可推知

$$
(f * Q _ {y}) (x) = (\widetilde {f} * P _ {y}) (x),
$$

即(4.27)式成立.类似可证(4.28)式成立.

若 $f \in L(R), \tilde{f} \in L(R)$ . 记

$$
v _ {y} (x) = v (x, y) = \left(f * Q _ {y}\right) (x).
$$

因有 $\lim_{y\to +0}\| v_y - \widetilde{f}\| _1 = 0$

(参看河田龍夫[1]第十二章评注4)，所以由定理3.2推得

$$
(\tilde {f}) ^ {\wedge} (t) = \lim _ {y \rightarrow + 0} \hat {v} _ {y} (t) = - \mathrm{i} (\operatorname{sgn} t) \cdot \hat {f} (t).
$$

再根据定理 3.22, 也可得到 (4.27) 及 (4.28) 式.

定理 4.15 设 $f \in L(R)$ ，而且 $\widetilde{f} \in L(R)$ ，则有 (4.25)（及 (4.26)) 式成立.

证明 根据引理 4.10 及定理 3.11, 在 (4.28) 式两边令 $y \to +0$ , 便得到

$$
f (x) = - \tilde {f} ^ {\approx} (x), \quad \text { a.e. }.
$$

## 习题

1. 设 $f(x) = \chi_{[a,b]}(x)$ (区间 $[a,b]$ 的特征函数), 求 $f$ 的Hilbert变换.  
2. 设 $f \in L^2(R), v(x, y) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(x - t) \frac{t}{t^2 + y^2} \mathrm{d}t$ ，试证明： $\lim_{y \to \infty} v(x, y) = 0$ .

3. 设 $f \in L^2(\mathbb{R})$ ，记 $v_y(x) = v(x, y)$ （见第2题），试证明：

$$
\lim _ {y \rightarrow 0 +} \| v _ {y} - \widetilde {f} _ {y} \| _ {2} = 0,
$$

其中 $\widetilde{f}_{y}(x) = \frac{1}{\pi}\int_{|t|\geqslant y}\frac{f(x - t)}{t}\mathrm{d}t.$

# 第五章 广义函数

广义函数概念是函数概念的一种推广. 由于物理学以及数学自身的发展, 在对许多问题的认识和处理上, 古典的函数概念限制过多, 需要提出新的概念以满足更广泛的要求.

例如,物理学家早就用 $\delta$ 函数作为点电荷,点光源,瞬时脉冲等物理概念的数学描述. $\delta$ 函数具有以下性质:

$$
\delta (x) = \left\{ \begin{array}{l l} 0, & x \neq 0, \\ \infty , & x = 0, \end{array} \right.
$$

$$
\int_ {- \infty} ^ {\infty} \delta (x) \mathrm{d} x = 1,
$$

并且对于相当好的函数 $\varphi(x)$ , 有

$$
\int_ {- \infty} ^ {\infty} \delta (x) \varphi (x) \mathrm{d} x = \varphi (0).
$$

显然, 按照经典的函数概念, 这样的函数不可能存在. 为此需要提出新的概念使得对 $\delta$ 函数及其微商能给出数学解释.

又如工程师 Heaviside 在解电路方程时, 提出了一套运算微积的法则. 这种算法要对如下的 Heaviside 函数

$$
H (x) = \left\{ \begin{array}{l l} 1, & x \geqslant 0, \\ 0, & x <   0 \end{array} \right.
$$

求微商, 并认为它的微商就是 $\delta(x)$ . 但是按照古典分析中的微分法则, $H(x)$ 在 $x = 0$ 点是不可微的. 这就要求人们研究这套运算法则的数学依据.

在数学本身的发展中,也提出了冲破古典分析中一些概念与运算的要求.例如,研究偏微分方程解的存在唯一性问题时发现,如果仅限于在古典分析的范围内理解微商并求微分方程的古典解, 就会在使用近代数学工具的可能性上受到限制. 为了使泛函分析的方法能够应用于微分方程, 就必须扩充微商概念. 早在 30 年代, 苏联数学家索伯列夫就引入了广义微商概念并把它用于偏微分方程的研究中. 他的工作为广义函数理论提供了雏形. 又如, Fourier 变换是应用数学的一个重要工具, 但在古典意义下, 连 $f(x) \equiv 1$ 这样简单的函数, 它的 Fourier 变换都没有定义. 这给应用造成了许多麻烦. 因此需要扩充 Fourier 变换的概念. 建立更广泛的 Fourier 变换的理论.

L. Schwartz 建立的广义函数理论有效地解决了上述问题①. 在这一理论中, 每个连续函数都可看作广义函数, 每个广义函数都是无穷次可微的. 对广义函数定义的各种运算破除了古典分析中对运算的种种约束, 从而能够在更大的范围内进行运算, 使它们运用起来很方便. 现在, 广义函数论已在许多学科领域中起着积极作用.

## § 5.1 基本函数空间与广义函数

我们的目标是建立广义函数概念,使得它满足以下要求:(1)它包含在物理、无线电及各领域中出现的奇异函数,例如 $\delta$ 函数;同时也包含一切连续函数.(2)它有任意阶微商,并且使通常的微分法则也成立.(3)它的Fourier变换总有意义.

按照 L. Schwartz 的广义函数理论, 广义函数实质上就是定义在由一类性质很好的函数组成的基本空间上的连续线性泛函, 对广义函数的各种要求都体现在基本空间中的函数上.

为了叙述简单起见,我们主要介绍一维欧氏空间 R 上的广义函数.首先要介绍基本函数空间.因为复值函数可以分成实部与虚

部,所以只需考虑实值函数.

定义在 $\pmb{R}$ 上的具有任意阶连续微商的函数全体组成的空间记作 $C^\infty (\pmb{R})$ 。例如，常数函数，多项式函数，正弦函数等就都属于 $C^\infty (\pmb{R})$ 。它们是无限次可微的，在可微性上非常好，但是，它们在 $\pmb{R}$ 上不一定可积。而我们却需要基本空间里的函数不但自身可积，而且乘上任意可积函数之后仍然可积。为此考虑 $C^\infty (\pmb{R})$ 中支集是紧集的函数，它们满足上述各种要求。（函数 $f(x)$ 的支集是使得 $f(x) \neq 0$ 的全体点集的闭包， $f$ 的支集记为 $\operatorname{supp}(f) = \{x \in \overline{\mathbb{R}}: f(x) \neq 0\}$ ）。 $C^\infty (\pmb{R})$ 中具有紧支集的函数全体所组成的空间记为 $C_0^\infty (\pmb{R})$ 。例如，函数

$$
\varphi (x) = \left\{ \begin{array}{l l} \mathrm{e} ^ {- 1 / (1 - | x | ^ {2})}, & | x | <   1, \\ 0, & | x | \geqslant 1 \end{array} \right.
$$

属于 $C_0^\infty (\pmb {R})$

$C_0^\infty (\pmb {R})$ 只是由函数组成的集合，还必须在 $C_0^\infty (\pmb {R})$ 中定义收敛性，才有可能以它为定义域定义连续线性泛函，而且还应当使得它按这种收敛性成为完备的空间.

定义 5.1 设 $\varphi, \varphi_{j} \in C_{0}^{(\alpha)}(R)$ ，如果满足以下条件：

(1) 存在 $\pmb{R}$ 中的紧集 $\pmb{K}$ , 使得 $\varphi$ 与 $\varphi_{j}$ 的支集都包含在 $\pmb{K}$ 中, 即

$$
\operatorname{supp} (\varphi) \subset K, \quad \operatorname{supp} (\varphi_ {j}) \subset K, \quad j = 1, 2, \dots .
$$

(ii) $\varphi_{j}$ 以及 $\varphi_{j}$ 的任意阶微商一致收敛于 $\varphi$ 及其相应的微商. 即, 对任意非负整数 $m$ , 有

$$
\begin{array}{l} \lim _ {j \rightarrow \infty} (\sup _ {x \in R} | \varphi_ {j} ^ {(m)} (x) - \varphi^ {(m)} (x) |) \\ = \lim _ {j \rightarrow \infty} (\max _ {x \in K} | D ^ {m} \varphi_ {j} (x) - D ^ {m} \varphi (x) |) = 0, \\ D ^ {m} = \frac {\mathrm{d} ^ {m}}{\mathrm{d} x ^ {m}}, \\ \end{array}
$$

就称 $\varphi_{j}$ 收敛于 $\varphi, C_0^\infty(R)$ 是一个线性空间. 在给定了上述收敛性后称它为基本空间 $\mathcal{D}(R)$ . 上述收敛记为

$$
\lim _ {j \to \infty} \varphi_ {j} = \varphi \quad (\text {在}   \mathcal {D} (R)   \text {中}).
$$

可见, 基本函数空间(基本空间) $\mathcal{D}(\boldsymbol{R})$ 与 $C_{0}^{\infty}(\boldsymbol{R})$ 所含元素相同, 并且定义有上述收敛性. $\mathcal{D}(\boldsymbol{R})$ 有时也简记为 $\mathcal{D}, \mathcal{D}$ 中的元称为基本函数或试验函数.

$\mathcal{D}$ 中的基本列定义如下：设 $\varphi_{j} \in \mathcal{D}$ ，若存在紧集 $K$ ，使得

$$
\operatorname{supp} \left(\varphi_ {j}\right) \subset K, \quad j = 1, 2, \dots ,
$$

并且对任意非负整数 $m$ ，有

$$
\lim _ {t, j \to \infty} (\max _ {x \in K} | D ^ {m} \varphi_ {j} (x) - D ^ {m} \varphi_ {i} (x) |) = 0,
$$

就称 $\{\varphi_{j}\}$ 是D中的基本列.

命题 5.1 D 中的基本列必是收敛列, 从而 D 是完备的.

证明 设 $\{\varphi_{j}\}$ 是 D 中基本列. 对每个点 $x \in R, \{D^{m}\varphi_{j}(x)\} (j=1,2,\cdots)$ 是基本数列, 由实数域的完备性得知存在极限

$$
\lim _ {j \rightarrow \infty} \mathrm{D} ^ {m} \varphi_ {j} (x) \stackrel {\text { def }} {=} \psi_ {m} (x), \quad m = 0, 1, 2, \dots .
$$

再由一致收敛性可知 $\psi_{m}(x)$ 连续. 利用微积分基本定理有

$$
\varphi_ {j} (x) - \varphi_ {j} (a) = \int_ {a} ^ {x} \mathrm{D} \varphi_ {j} (t) \mathrm{d} t,
$$

其中固定 $a \in \mathbb{R}$ . 根据一致收敛性, 令 $j \to \infty$ , 得

$$
\psi_ {0} (x) - \psi_ {0} (a) = \int_ {a} ^ {x} \psi_ {1} (t) \mathrm{d} t,
$$

由此知 $\psi_{0}$ 可微，并且 $\mathrm{D}\psi_{0}(x)=\psi_{1}(x)$ . 类似可得

$$
\mathrm{D} ^ {m} \psi_ {0} (x) = \psi_ {m} (x), \quad m = 2, 3, \dots .
$$

因有紧集 $\pmb{K}$ , 使得 $\operatorname{supp}(\varphi_j) \subset \pmb{K}$ , 故 $\operatorname{supp}(\psi_0) \subset \pmb{K}$ . 由此推知 $\psi_0 \in \mathcal{D}$ , 并且可以验证

$$
\lim _ {j \to \infty} \varphi_ {j} = \psi_ {0} (\text {在} \mathcal {D} \text {中}).
$$

定义 5.2 D 上的连续线性泛函称为 D 上的广义函数 (generalized function) 或分布 (distribution). 亦即, 若 D 上的实值泛函 u 满足条件: (i) 线性. 即对一切 $\varphi_{1}, \varphi_{2} \in D, \lambda_{1}, \lambda_{2} \in R$ ,

$$
u \left(\lambda_ {1} \varphi_ {1} + \lambda_ {2} \varphi_ {2}\right) = \lambda_ {1} u \left(\varphi_ {1}\right) + \lambda_ {2} u \left(\varphi_ {2}\right).
$$

(ii) 连续性. 即, 若 $\varphi, \varphi_j \in \mathcal{D}$ , 并且 $\lim_{j \to \infty} \varphi_j = \varphi$ (在 $\mathcal{D}$ 中), 便有

$$
\lim _ {j \rightarrow \infty} u (\varphi_ {j}) = u (\varphi),
$$

就称 $u$ 是 $\mathcal{D}$ 上的广义函数，有时也用记号

$$
u (\varphi) = \langle u, \varphi \rangle , \quad \varphi \in \mathcal {D}.
$$

$\mathcal{D}(\pmb {R})$ 上广义函数全体组成的空间记为 $\mathcal{D}'(\pmb {R})$ ，或简记为 $\mathcal{D}^{\prime}$

例1 设 $f$ 是 $\pmb{R}$ 上的局部可积函数(即 $f$ 在 $\pmb{R}$ 的任何紧子集上可积). 定义 $\mathcal{D}$ 上的泛函 $u_{j}$ 为

$$
u _ {f} (\varphi) = \int_ {\mathbb {R}} f (x) \varphi (x) \mathrm{d} x, \quad \varphi \in \mathscr {D}. \tag {5.1}
$$

因为 $\varphi \in \mathcal{D}$ , 它具有紧支集并且有界, 所以上述积分存在并且取有限值. 泛函 $u_{f}$ 显然是线性的, 它还是连续的, 因为: 设 $\lim_{j \to \infty} \varphi_{j} = 0$ (在 $\mathcal{D}$ 中), 必存在紧集 $\pmb{K}$ , 使 $\operatorname{supp}(\varphi_{j}) \subset \pmb{K}$ , 且

$$
\lim _ {j \rightarrow \infty} (\max _ {i \in K} | \varphi_ {j} (x) |) = 0.
$$

从而

$$
\left| u _ {j} \left(\varphi_ {j}\right)\right| \leqslant \left\{\max _ {i \in K} \left| \varphi_ {j} (x) \right|\right\} \int_ {K} | f (x) | \mathrm{d} x \rightarrow 0 \quad (j \rightarrow \infty).
$$

由 $u_{f}$ 是线性的，便知若 $\lim_{j\to \infty}\varphi_j = \varphi$ （在 $\mathcal{D}$ 中），便有 $\lim_{j\to \infty}u_f(\varphi_j) = u_f(\varphi)$ ，即 $u_{f}$ 连续。从而 $u_{f}$ 是 $\mathcal{D}$ 上广义函数。有时把 $u_{f}$ 就记为 $f$ 。

由(5.1)式确定的广义函数称为正则的. 其他类型的广义函数称为奇异的.

类似地, 若 $\mu$ 是 R 上的 Borel 测度, 由下式

$$
u _ {\mu} (\varphi) = \int_ {R} \varphi (x) \mathrm{d} \mu , \quad \varphi \in \mathcal {D}
$$

定义的泛函 $u_{\mu} \in \mathcal{D}'$

例2 任意取定 $x_0 \in \mathbb{R}$ , 定义泛函

$$
\delta_ {x _ {0}} (\varphi) = \varphi (x _ {0}), \quad \varphi \in \mathcal {D}.
$$

它显然是 $\mathcal{D}$ 上的线性泛函，并且，若 $\lim_{j\to \infty}\varphi_j = 0$ （在 $\mathcal{D}$ 中），便有

$$
\left| \delta_ {x _ {0}} (\varphi_ {j}) \right| = \left| \varphi_ {j} (x _ {0}) \right| \leqslant \sup _ {x \in R} \left| \varphi_ {j} (x) \right|\rightarrow 0 \quad (j \rightarrow \infty).
$$

可知 $\delta_{x_0}$ 连续. 于是 $\delta_{x_0}$ 是广义函数. 当 $x_0 = 0, \delta = \delta_0$ 就是物理上常用的Dirac函数.

例 1 曾指出每个局部可积函数都可以看作一个广义函数(即由(5.1)式定义一个广义函数). 可以证明 $\delta$ 函数并不是任何由局部可积函数按(5.1)式所决定的广义函数, 因此广义函数并非都是可以由局部可积函数决定的, 其证明如下:

假设存在局部可积函数 $f(x)$ ，使得

$$
\delta (\varphi) = \varphi (0) = \int_ {R} f (x) \varphi (x) \mathrm{d} x, \quad \varphi \in \mathcal {D}.
$$

特别，取函数 $\varphi$ 为

$$
\varphi (x, a) = \left\{ \begin{array}{l l} \mathrm{e} ^ {- \frac {a ^ {2}}{a ^ {2} - | x | ^ {2}}}, & | x | <   a, \\ 0, & | x | \geqslant a, \end{array} \right. \quad a > 0.
$$

可知 $\varphi (x,a)\in C_0^\infty (\pmb {R})$ .按上述假定便有

$$
\int_ {R} f (x) \varphi (x, a) \mathrm{d} x = \varphi (0, a) = \mathrm{e} ^ {- 1},
$$

但左端的积分又有

$$
\begin{array}{l} \left| \int_ {R} f (x) \varphi (x, a) \mathrm{d} x \right| = \left| \int_ {| x | <   a} f (x) \mathrm{e} ^ {- a ^ {2} / \left(a ^ {2} - | x | ^ {2}\right)} \mathrm{d} x \right| \\ \leqslant \int_ {| x | <   a} | f (x) | \mathrm{d} x \to 0 \quad (\text {当} a \to 0), \\ \end{array}
$$

这两式是矛盾的. 因此 $\delta$ 函数不能由任何局部可积函数按(5.1)式给出, 它是奇异的广义函数.

例3 设

$$
f (x) = \left\{ \begin{array}{l l} \frac {1}{x}, & x \neq 0, \\ 0, & x = 0, \end{array} \right.
$$

它在 $x = 0$ 点的邻域不可积. 因此对一般的 $\varphi \in \mathcal{D}$ , (5.1)式右边的积分可能发散. 但我们能够建立 $\mathcal{D}$ 上的一个泛函 $u$ , 使得它对于在 $x = 0$ 的邻域中等于 0 的基本函数 $\varphi$ , 有 (5.1)式成立. 我们用取积分主值的办法来定义 $u$ : 对一切 $\varphi \in \mathcal{D}$ , 令

$$
\begin{array}{l} u (\varphi) = \int_ {- 1} ^ {1} \frac {\varphi (t) - \varphi (0)}{t} d t + \int_ {1} ^ {\infty} \frac {\varphi (t)}{t} d t + \int_ {- \infty} ^ {- 1} \frac {\varphi (t)}{t} d t \\ = \lim _ {\varepsilon \rightarrow 0} \left\{\int_ {- \infty} ^ {- \varepsilon} \frac {\varphi (t)}{t} d t + \int_ {\varepsilon} ^ {(\infty)} \frac {\varphi (t)}{t} d t \right\} = \lim _ {\varepsilon \rightarrow 0} \int_ {| t | \geqslant \varepsilon} \frac {\varphi (t)}{t} d t, \tag {5.2} \\ \end{array}
$$

以上等式成立是因为 $\frac{1}{t}$ 是奇函数，并且由微分中值定理可推知

$$
\lim _ {\varepsilon \rightarrow 0} \int_ {- \varepsilon} ^ {\varepsilon} \frac {\varphi (t) - \varphi (0)}{t} \mathrm{d} t = 0.
$$

u 是线性的, 若 $\varphi_{j}\rightarrow0$ (在 D 中), 知存在有界区间 $[-A,A]$ , 使 supp( $\varphi_{j})\subset[-A,A], j=1,2,\cdots$ , 不妨设 $A\geqslant1$ , 我们有

$$
u (\varphi_ {j}) = \int_ {- 1} ^ {1} \frac {\varphi_ {j} (t) - \varphi_ {j} (0)}{t} \mathrm{d} t + \int_ {1 \leqslant | t | \leqslant A} \frac {\varphi_ {j} (t)}{t} \mathrm{d} t.
$$

因为 $\varphi_{j}$ 及 $\varphi_{j}^{\prime}$ 都在 $[-A, A]$ 一致收敛到0，再用微分中值定理不难推知 $u(\varphi_{j}) \to 0 (j \to \infty)$ . 综上所述，得知 $u \in \mathcal{D}'$ . 由(5.2)式可见 $u$ 等于由 $\frac{1}{x}$ 的主值(principal value)确定的泛函，它称为 $f$ 的正则化泛函.

更一般地,可以定义 f 对应的泛函为

$$
u _ {f} (\varphi) = \int_ {- \infty} ^ {- a} \frac {\varphi (t)}{t} \mathrm{d} t + \int_ {- a} ^ {b} \frac {\varphi (t) - \varphi (t)}{t} \mathrm{d} t + \int_ {b} ^ {+ \infty} \frac {\varphi (t)}{t} \mathrm{d} t, \tag {5.3}
$$

其中， $a, b > 0$ 是任意给定的。不同的 $a, b$ 所得的两个泛函之差为 $\delta$ 函数的常数倍。因此(5.3)式与(5.2)式给定的泛函之差是 $C\delta, C$ 是某个常数。今后为确定起见，广义函数 $\frac{1}{x} = x^{-1}$ 就表示由(5.2)式给定的 $u$ 。

关于 D 上线性泛函是否连续,有以下判别准则.

定理 5.2 设 u 是 D 上的线性泛函，则 $u \in D'$ 的充分必要条件是：对于 R 上每个紧集 K，存在常数 $C = C(K)$ 及非负整数 N = N(K)，使得对于任意满足条件 supp( $\varphi \subset K$ 的 $\varphi \in D$ ，有

$$
\left| u (\varphi) \right| \leqslant C \sum_ {0 \leqslant m \leqslant N} \sup _ {x \in K} \left| D ^ {m} \varphi (x) \right|. \tag {5.4}
$$

证明 充分性是显然的. 下面用反证法证明必要性. 设 $u$ 连续, 但对某个紧集 $\pmb{K}$ , 不存在 $C, N$ 使(5.4)成立, 则对一切自然数 $j$ , 必存在 $\psi_j \in \mathcal{D}, \operatorname{supp}(\psi_j) \subset \pmb{K}$ , 有

$$
\left| u \left(\psi_ {j}\right) \right| > j \sum_ {0 \leqslant m \leqslant j} \sup _ {r \in K} \left| D ^ {m} \psi_ {j} (x) \right|. \tag {5.5}
$$

令 $\varphi_{j} = \psi_{j} / u(\psi_{j})$ ，显然 $\varphi_{j}\in \mathcal{D},\mathrm{supp}(\varphi_{j})\subset K,u(\varphi_{j}) = 1.$ 但由（5.5）式推知

$$
\sup _ {x \in K} | \mathrm{D} ^ {m} \varphi_ {j} (x) | <   \frac {1}{j} \quad (0 \leqslant m \leqslant j),
$$

因此 $\lim_{j\to \infty}\varphi_j = 0$ （在 $\mathcal{D}$ 中），由 $u$ 连续便得

$$
\lim _ {j \rightarrow \infty} u (\varphi_ {j}) = 0,
$$

这与 $u(\varphi_{j}) = 1$ 是矛盾的.

注 设 $u \in \mathcal{D}'$ ，如果存在与 $\pmb{K}$ 无关的非负整数 $N_0$ ，使得对于一切紧集 $\pmb{K} \subset \pmb{R}$ ，(5.4)式中的 $N(\pmb{K}) \leqslant N_0$ ，就称 $\pmb{u}$ 具有有限阶。这样的 $N_0$ 中的最小者称为广义函数 $\pmb{u}$ 的阶。如果上述 $N_0$ 不存在，则称 $\pmb{u}$ 具有无穷阶。

广义函数的定义可以从一维空间 R 推广到 n 维空间 $R^{n}$ . 先把定义 5.1 的 (ii) 中等式修改成: 对任意多重指标 $\alpha = (\alpha_{1}, \cdots, \alpha_{n})$ , 有

$$
\lim _ {j \rightarrow \infty} (\max _ {x \in K} | D ^ {\alpha} \varphi_ {j} (x) - D ^ {\alpha} \varphi (x) |) = 0
$$

(记号 $\mathbf{D}^{\alpha}$ 见 §3.7), 便得到 $\mathcal{D}(\pmb{R}^{n})$ 中收敛性的定义. 类似地, 还可以定义 $\mathcal{D}(\Omega)$ 及其中的收敛性, 这里的 $\Omega$ 是 $\pmb{R}^{m}$ 中的非空开集, 只需要求定义5.1(i)中的紧集 $\pmb{K} \subset \Omega$ . 然后便可定义 $\mathcal{D}(\pmb{R}^{n})$ 上的广义函数 (或 $\mathcal{D}(\Omega)$ 上的广义函数) 为 $\mathcal{D}(\pmb{R}^{n})(\mathcal{D}(\Omega))$ 上的连续线性泛函.

例 4 设 $\Omega$ 是 R 中的区间 $(0,1)$ ，按下式定义 $\mathcal{D}(\Omega)$ 上的线性泛函 u，

$$
u (\varphi) = \sum_ {j = 2} ^ {\infty} \varphi^ {(j)} \left(\frac {1}{j}\right), \quad \varphi \in \mathcal {D} (\Omega),
$$

其中 $\varphi^{(j)}(x_0) = \frac{\mathrm{d}^j\varphi(x)}{\mathrm{d}x^j}\Bigg|_{x = x_0}$ . 不难证明 $u \in \mathcal{D}'(\Omega)$ , 且 $u$ 具有无穷阶.

前面我们假定基本函数只取实值,广义函数也是实值的,对一般情形,可以考虑复值的广义函数.为此先考虑复值基本函数,它的实部与虚部都是实值基本函数,复值基本函数的全体构成复基本空间,在此空间中定义了线性运算及与前面相同的收敛性.在复基本空间上的复值线性连续泛函就称为复广义函数.

复广义函数空间中的加法以及与复数的乘法由以下公式定义：

$$
\langle u _ {1} + u _ {2}, \varphi \rangle = \langle u _ {1}, \varphi \rangle + \langle u _ {2}, \varphi \rangle ,
$$

$$
\langle \alpha u, \varphi \rangle = \bar {\alpha} \langle u, \varphi \rangle = \langle u, \bar {\alpha} \varphi \rangle .
$$

复广义函数的共轭广义函数 $\overline{u}$ 定义为：

$$
\langle \bar {u}, \varphi \rangle = \overline {{\langle u , \bar {\varphi} \rangle}}.
$$

对于局部可积的复值函数 $f(x)$ ，与它相应的广义函数 $f$ 为

$$
\langle f, \varphi \rangle = \int_ {R} \overline {{{f (x)}}} \varphi (x) \mathrm{d} x.
$$

关于实值广义函数所得到的结果,大部分可以转到复值的情况,不过需按上面所述公式作适当改变.

为简单起见,下面只讨论实值广义函数.

## § 5.2 广义函数序列的极限

广义函数空间 $\mathcal{D}^{\prime}(\boldsymbol{R})$ 是线性空间，在 $\mathcal{D}^{\prime}$ 上定义收敛性如下：

定义 5.3 设 $u, u_{j} \in D', j = 1, 2, \cdots$ . 若对每个 $\varphi \in D$ , 有

$$
\lim _ {j \rightarrow \infty} u _ {j} (\varphi) = u (\varphi)
$$

成立，就称广义函数列 $\{u_{j}\}$ 收敛于 $u$ 。记为

$$
\lim _ {j \to \infty} u _ {j} = u \quad (\text {在} \mathcal {D} ^ {\prime} \text {中}).
$$

例 1 设 $f_{j}$ 局部可积, $j=1,2,\cdots$ . 若

$$
\lim _ {j \rightarrow \infty} f _ {j} (x) = f (x), \quad \text { a   .   e   . },
$$

并且在每个紧集 $\pmb{K}$ 上 $\{|f_j|\}$ 被一个可积函数所控制，则对每个 $\varphi \in \mathcal{D}$ ，有

$$
\lim _ {j \rightarrow \infty} \int_ {R} f _ {j} (x) \varphi (x) \mathrm{d} x = \int_ {R} f (x) \varphi (x) \mathrm{d} x.
$$

于是，根据定义5.3，按(5.1)式确定的相应的广义函数有

$$
\lim _ {j \to \infty} u _ {f _ {j}} = u _ {f} \quad (\text {在} \mathcal {D} ^ {\prime} \text {中}).
$$

例 2 设 $f_{j}(x)=\frac{1}{\pi}\frac{\sin jx}{x}, x\in R, j=1,2,\cdots$ ，可以证明

$$
\lim _ {j \rightarrow \infty} u _ {f _ {j}} = \delta .
$$

这是因为根据(3.17')式及定理3.6, 若 $\varphi \in \mathcal{D}$ , 有

$$
\lim _ {j \rightarrow \infty} \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \varphi (x + t) \frac {\sin j t}{t} d t = \varphi (x).
$$

取 $x = 0$ ，便得到

$$
\lim _ {j \rightarrow \infty} u _ {f _ {j}} (\varphi) = \lim _ {j \rightarrow \infty} \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \varphi (t) \frac {\sin j t}{t} d t = \varphi (0) = \delta (\varphi).
$$

更一般地, 如果函数 $f_{j}$ 局部可积, 而它所对应的广义函数列收敛于 $\delta$ 函数, 即

$$
\lim _ {j \to \infty} u _ {f _ {j}} = \delta \quad (\text {在}   {\mathcal D} ^ {\prime}   \text {中}),
$$

就称 $\{f_{j}\}$ 是 $\delta$ 型序列.

上面的讨论表明 $\left\{\frac{1}{\pi} \frac{\sin jx}{x}\right\}$ 是 $\delta$ 型序列.

例3 设 $f_{\varepsilon}(x) = \frac{1}{\pi} \frac{\varepsilon}{x^2 + \varepsilon^2}, x \in \mathbb{R}, \varepsilon > 0$ ，则

$$
\lim _ {\varepsilon \to + 0} u _ {f _ {\varepsilon}} = \delta \quad (\text {在}   \mathcal {D} ^ {\prime}   \text {中}).
$$

这是因为，取 $K(x) = \frac{1}{\pi}\frac{1}{x^2 + 1}$ ，则

$$
K _ {\varepsilon} (x) = \frac {1}{\varepsilon} K \left(\frac {x}{\varepsilon}\right) = f _ {\varepsilon} (x).
$$

根据定理3.10，在(3.32)式中取 $x = 0$ 可得

$$
\lim _ {\varepsilon \rightarrow + 0} u _ {f _ {\varepsilon}} (\varphi) = \varphi (0).
$$

定理 5.3 设 $u_{j} \in D', j = 1, 2, \cdots$ ，若对于每个 $\varphi \in D$ ，极限 $\lim_{j \to \infty} u_{j}(\varphi)$ 存在，并记

$$
u (\varphi) = \lim _ {j \rightarrow \infty} u _ {j} (\varphi),
$$

则 $u \in \mathcal{D}'$ ，即 $\lim_{j \to \infty} u_j = u$ （在 $\mathcal{D}'$ 中）.

定理的证明省略,可参看 Z. Szmydt[11]或 W. Rudin[13].

由此可知，若 $\{u_{j}\}$ 是 $\mathcal{D}'$ 中的基本列，即，对一切 $\varphi \in \mathcal{D}$ ， $\lim_{j,k \to \infty} (u_{j} - u_{k})(\varphi) = 0$ ，则必存在极限 $\lim_{j \to \infty} u_{j}(\varphi) = u(\varphi)$ . 从而由定理5.3推知 $u \in \mathcal{D}'$ ， $\lim_{j \to \infty} u_{j} = u$ （在 $\mathcal{D}'$ 中）. 因此，在这个意义上可以说 $\mathcal{D}'$ 具有完备性（称为序列完备性）.

## § 5.3 广义函数的微商,广义函数与函数的乘积

在引进广义函数概念时曾指出:应当使得广义函数具有任意阶微商.同时,对于连续可微的函数,把它看作广义函数时的微商也应与古典的微商相一致.由此可以引导出定义广义函数微商的方法.

设 $f(x)$ 是 $\pmb{R}$ 上连续可微的函数， $\varphi \in \mathcal{D}$ ，知 $\varphi$ 必在某个有界区间 $[a, b]$ 之外为零，由分部积分得

$$
\begin{array}{l} \int_ {- \infty} ^ {\infty} f ^ {\prime} (x) \varphi (x) \mathrm{d} x = f (x) \varphi (x) \Big | _ {- \infty} ^ {\infty} - \int_ {- \infty} ^ {\infty} f (x) \varphi^ {\prime} (x) \mathrm{d} x \\ = - \int_ {- \infty} ^ {\infty} f (x) \varphi^ {\prime} (x) \mathrm{d} x, \\ \end{array}
$$

看作广义函数亦即 $\langle f',\varphi\rangle=-\langle f,\varphi'\rangle$ ，由此导出广义函数微商的定义.

定义5.4 设 $u \in \mathcal{D}'$ ，定义 $u$ 的微商 $u'$ 为 $\mathcal{D}$ 上线性泛函，满足：

$$
u ^ {\prime} (\varphi) = - u \left(\varphi^ {\prime}\right), \quad \varphi \in \mathcal {D}. \tag {5.6}
$$

$u^{\prime}$ 也记为 $\frac{\mathrm{d}u}{\mathrm{d}x}$ 或 $\mathrm{D}u$

因为由 $\varphi \in \mathcal{D}$ 可推知 $\varphi' \in \mathcal{D}$ , 所以定义 $u'$ 的 (5.6) 式的右端是有意义的. 还可证明线性泛函 $u'$ 连续. 设 $\lim_{j \to \infty} \varphi_j = 0$ (在 $\mathcal{D}$ 中), 由等式

$$
(\varphi_ {j} ^ {\prime}) ^ {(m)} = \varphi_ {j} ^ {(m + 1)},
$$

可推知 $\lim_{j\to \infty}\varphi_j' = 0$ （在 $\mathcal{D}$ 中).因 $u$ 连续，便有 $\lim_{j\to \infty}u(\varphi_j') = 0$ ，从而

$$
\lim _ {j \rightarrow \infty} u ^ {\prime} (\varphi_ {j}) = 0,
$$

即 $u^{\prime}\in \mathcal{D}$

按定义容易推知 u 有任意阶微商,并且

$$
\mathrm{D} ^ {m} u (\varphi) = (- 1) ^ {m} u (\mathrm{D} ^ {m} \varphi).
$$

例1 Heaviside函数 $H(x)$ 为

$$
H (x) = \left\{ \begin{array}{l l} 1, & x \geqslant 0, \\ 0, & x <   0, \end{array} \right.
$$

它按(5.1)式可定义广义函数 $u_{H}$ ，下面求 $u_{H}^{\prime}$ .

$$
\begin{array}{l} u _ {H} ^ {\prime} (\varphi) = - u _ {H} \left(\varphi^ {\prime}\right) = - \int_ {- \infty} ^ {\infty} H (x) \varphi^ {\prime} (x) \mathrm{d} x = - \int_ {0} ^ {\infty} \varphi^ {\prime} (x) \mathrm{d} x \\ = \varphi (0) = \delta (\varphi), \quad \varphi \in \mathcal {D}. \\ \end{array}
$$

即得 $u_{H}^{\prime}=\delta$ . 有时把 $u_{H}$ 仍记为 H, 便得到 $H^{\prime}=\delta$ .

例2 设 $f(x) \in C^{1}(\mathbb{R} \setminus \{0\})$ ， $f$ 在 $x = 0$ 点的左、右极限存在但不相等，即

$$
l = f (+ 0) - f (- 0) \neq 0.
$$

又设 $f$ 及 $f'$ 都在 $\pmb{R}$ 上局部可积，则

$$
\frac {\mathrm{d}}{\mathrm{d} x} u _ {f} = l \delta + u _ {f ^ {\prime}}. \tag {5.7}
$$

这是因为对于 $\varphi \in \mathcal{D}$

$$
\begin{array}{l} \frac {\mathrm{d}}{\mathrm{d} x} u _ {f} (\varphi) = - u _ {f} \left(\varphi^ {\prime}\right) = - \int_ {- \infty} ^ {0} f (x) \varphi^ {\prime} (x) \mathrm{d} x - \int_ {0} ^ {\infty} f (x) \varphi^ {\prime} (x) \mathrm{d} x \\ = - f (- 0) \varphi (0) + \int_ {- \infty} ^ {0} f ^ {\prime} (x) \varphi (x) d x \\ + f (+ 0) \varphi (0) + \int_ {0} ^ {\infty} f ^ {\prime} (x) \varphi (x) \mathrm{d} x \\ \end{array}
$$

$$
\begin{array}{l} = l \varphi (0) + \int_ {- \infty} ^ {r} f ^ {\prime} (x) \varphi (x) d x \\ = l \delta (\varphi) + u _ {f ^ {\prime}} (\varphi). \\ \end{array}
$$

以上讨论说明: 如果 $f \in C^{1}(\mathbb{R})$ ，则有 $u_{f}^{\prime}(\varphi) = u_{f^{\prime}}(\varphi)$ 。否则，如例 1，例 2 的情形，广义函数的微商 $u_{f}^{\prime}$ 可能不同于古典意义的微商 $f^{\prime}$ 对应的广义函数 $u_{f^{\prime}}$ 。

例 3 设 k 为正整数, 对任意 $\varphi \in D$ ,

$$
\mathrm{D} ^ {k} \delta (\varphi) = (- 1) ^ {k} \delta (\mathrm{D} ^ {k} \varphi) = (- 1) ^ {k} \mathrm{D} ^ {k} \varphi (0).
$$

例4 设 $-1 < \lambda < 0$

$$
x _ {+} ^ {\lambda} = \left\{ \begin{array}{l l} 0, & x \leqslant 0, \\ x ^ {\lambda}, & x > 0, \end{array} \right.
$$

它的广义函数仍记作 $x_{+}^{\lambda}$ ，求其导数.对 $\varphi \in \mathcal{D}$

$$
\begin{array}{l} \langle \left(x _ {+} ^ {\lambda}\right) ^ {\prime}, \varphi \rangle = - \langle x _ {+} ^ {\lambda}, \varphi^ {\prime} \rangle = - \int_ {0} ^ {\infty} x ^ {\lambda} \varphi^ {\prime} (x) d x \\ = - \lim _ {\varepsilon \rightarrow 0} \int_ {\varepsilon} ^ {\infty} x ^ {\lambda} \varphi^ {\prime} (x) d x \\ = - \lim _ {\varepsilon \rightarrow 0} \left\{ \right.x ^ {\lambda} [ \varphi (x) - \varphi (0) ] \left. \right| _ {\varepsilon} ^ {(\nu)} - \int_ {\varepsilon} ^ {x} \lambda x ^ {\lambda - 1} [ \varphi (x) - \varphi (0) ] d x \Bigg \} \\ = \int_ {0} \lambda x ^ {\lambda - 1} [ \varphi (x) - \varphi (0) ] \mathrm{d} x. \tag {5.8} \\ \end{array}
$$

由(5.8)式右边确定的广义函数用 $\lambda x_{+}^{\lambda -1}$ 表示，便得到

$$
(x _ {+} ^ {\lambda}) ^ {\prime} = \lambda x _ {+} ^ {\lambda^ {- 1}}.
$$

例5 求 $\ln |x|$ 作为广义函数的导数. 对 $\varphi \in \mathcal{D}$ ,

$$
\begin{array}{l} \left\langle \frac {\mathrm{d}}{\mathrm{d} x} \ln | x |, \varphi \right\rangle = - \langle \ln | x |, \varphi^ {\prime} \rangle = - \int_ {- \infty} ^ {\infty} (\ln | x |) \varphi^ {\prime} (x) \mathrm{d} x \\ = - \lim _ {\varepsilon \rightarrow 0} \int_ {| x | > \varepsilon} \varphi^ {\prime} (x) \ln | x | d x \\ = - \lim _ {\varepsilon \rightarrow 0} \left\{ \right.\varphi (x) \ln | x | \left. \right| _ {\varepsilon} ^ {\infty} + \varphi (x) \ln | x | \Bigg | _ {- \infty} ^ {- \varepsilon} \\ - \int_ {| x | \geqslant \varepsilon} \frac {\varphi (x)}{x} d x \Bigg \} \\ \end{array}
$$

$$
= \lim _ {\varepsilon \rightarrow 0} \int_ {| x | \geqslant \varepsilon} \frac {\varphi (x)}{x} \mathrm{d} x.
$$

从而由(5.2)式知

$$
\frac {\mathrm{d}}{\mathrm{d} x} \ln | x | = \frac {1}{x}.
$$

广义函数具有逐项可微性. 即: 若 $\lim_{j \to \infty} u_j = u$ (在 $\mathcal{D}'$ 中), 则

$$
\lim _ {j \to \infty} \mathrm{D} u _ {j} = \mathrm{D} u \quad (\text {在}   {\mathcal {D}} ^ {\prime}   \text {中}).
$$

此性质容易验证，因为：对于 $\varphi \in \mathcal{D}$ ，有

$$
\lim _ {j \rightarrow \infty} (\mathrm{D} u _ {j}) (\varphi) = - \lim _ {j \rightarrow \infty} u _ {j} (\varphi^ {\prime}) = - u (\varphi^ {\prime}) = \mathrm{D} u (\varphi).
$$

下面定义广义函数与无限次可微函数的乘积.

定义 5.5 设 $u \in \mathcal{D}'(R)$ , $f \in C^{\infty}(R)$ ，则它们的乘积 fu 为

$$
(f u) (\varphi) = u (f \varphi), \quad \varphi \in \mathcal {D} (\pmb {R}). \tag {5.9}
$$

容易验证 $fu \in \mathcal{D}'(\mathbb{R})$ .

对于定义5.5中的乘积 $fu$ 有以下微商公式

$$
\mathrm{D} (f u) = f u ^ {\prime} + f ^ {\prime} u.
$$

这是因为，对于 $\varphi \in \mathcal{D}$ ，有

$$
(\mathrm{D} (f u)) (\varphi) = - (f u) (\varphi^ {\prime}) = - u (f \varphi^ {\prime}) = - u ((f \varphi) ^ {\prime} - f ^ {\prime} \varphi)
$$

$$
= u ^ {\prime} (f \varphi) + u (f ^ {\prime} \varphi) = (f u ^ {\prime} + f ^ {\prime} u) (\varphi).
$$

我们知道, 若 $f, g \in C^{\infty}(\mathbb{R}^{n})$ , 则它们的乘积的微商满足 Leib-niz 公式:

$$
\mathrm{D} ^ {\alpha} (f g) = \sum_ {\beta \leqslant \alpha} c _ {\alpha \beta} (\mathrm{D} ^ {\alpha - \beta} f) (\mathrm{D} ^ {\beta} g), \tag {5.10}
$$

其中 $\alpha=(\alpha_{1},\cdots,\alpha_{n}),\beta=(\beta_{1},\cdots,\beta_{n})$ ,

$$
c _ {\alpha \beta} = \frac {\alpha !}{\beta ! (\alpha - \beta) !}, \quad \alpha ! = \alpha_ {1}! \dots \alpha_ {n}!,
$$

$\beta\leqslant\alpha$ 是指 $\beta_{j}\leqslant\alpha_{j}, j=1,2,\cdots,n.$

对于 $f \in C^{\infty}(\mathbb{R}^{n}), u \in \mathcal{D}'(\mathbb{R}^{n})$ ，它们的乘积的微商也满足Leibniz公式

$$
\mathrm{D} ^ {\alpha} (f u) = \sum_ {\beta \leqslant \alpha} c _ {\alpha \beta} (\mathrm{D} ^ {\alpha - \beta} f) (\mathrm{D} ^ {\alpha} u), \tag {5.11}
$$

其中 $\alpha, \beta, c_{\alpha \beta}$ 等均如前面所述.

## § 5.4 广义函数的支集

根据线性泛函的定义可知,我们说 $\mathcal{D}(\Omega)$ 上两个广义函数 $u_{1}$ 与 $u_{2}$ 相等,是指:对一切 $\varphi\in\mathcal{D}(\Omega)$ ,

$$
\langle u _ {1}, \varphi \rangle = \langle u _ {2}, \varphi \rangle .
$$

设 $V$ 是 $\Omega$ 的一个开子集，属于 $\mathcal{D}'(\Omega)$ 的 $u_{1}$ 与 $u_{2}$ 可能并不相等，但如果对一切 $\varphi \in \mathcal{D}(V)$ ，有

$$
\langle u _ {1}, \varphi \rangle = \langle u _ {2}, \varphi \rangle ,
$$

就称

$$
u _ {1} = u _ {2} (\text { 在 } V \text { 中 }),
$$

或记作 $u_{1}|_{V} = u_{2}|_{V}$ . 同理，设 $u \in \mathcal{D}'(\Omega)$ ，若

$$
\langle u, \varphi \rangle = 0, \quad \varphi \in \mathcal {D} (V),
$$

就称 u 在 V 上等于零, 或记成 $u|_{V}=0$ .

定义 5.6 设 $u \in \mathcal{D}'(\Omega)$ , u 的支集由 $\Omega$ 中所有如下的点 x 组成: $x \in \Omega$ , 不存在 x 的一个邻域, 使得 u 在此邻域上为零. 记 u 的支集为 supp u. 或 supp(u).

若记 $u$ 的支集在 $\Omega$ 中的补集为

$$
W = \Omega \backslash \operatorname{supp} u,
$$

则由以上定义显然得知:对每点 $x \in W$ , 必存在它的一个邻域 $V_{x}$ , 使得 u 在 $V_{i}$ 上等于零. 可以进一步证明 u 在 W 中等于零(根据单位分解定理, 此处省略. 参见 W. Rudin[13]), 并且 W 是 $\Omega$ 中使 $u|_{V}=0$ 的开子集 V 中的最大者. 于是 u 的支集就是 $\Omega$ 中使 u 在其补集等于零的最小闭子集, 也是 $\Omega$ 中满足条件 $u|_{V}=0$ 的最大开集的补集. 这个定义与连续函数的支集的定义形式上相同. 若 u 是由一个常义函数所确定的, 则它作为广义函数的支集与它作为普通函数的支集相一致.

不难推知: 若 $u \in \mathcal{D}'(\Omega)$ , $\varphi \in \mathcal{D}(\Omega)$ , 并且 u 的支集与 $\varphi$ 的支

集的交集是空集,即

$$
\operatorname{supp} u \cap \operatorname{supp} \varphi = \emptyset ,
$$

则

$$
\langle u, \varphi \rangle = 0.
$$

例1 Heaviside 函数 $H(x)$ 的支集是半轴 $x \geqslant 0$ ，即

$$
\operatorname{supp} H = \{x \in R; x \geqslant 0 \}.
$$

例 2 supp $\delta=\{0\}$ , supp $D^{k}\delta=\{0\}$ , 其中 k 是非负整数.

例3 设 $u = x^2$ . 虽然 $x^2$ 在 $x = 0$ 处为零, 但广义函数 $u$ 的支集是全实轴 $\pmb{R}$ .

例4 设 $u \in \mathcal{D}'(R)$ , 我们有

$$
\operatorname{supp} \mathrm{D} ^ {k} u \subset \operatorname{supp} u.
$$

这是因为, 若开集 $V \subset W = R \setminus \operatorname{supp} u$ , 且 $\varphi \in \mathcal{D}(V)$ , 则 $\mathrm{D}^k \varphi \in \mathcal{D}(V)$ , 所以 $u$ 的支集与 $\mathrm{D}^k \varphi$ 的支集的交集是空集, 便有

$$
\langle \mathrm{D} ^ {k} u, \varphi \rangle = (- 1) ^ {k} \langle u, \mathrm{D} ^ {k} \varphi \rangle = 0.
$$

由此得知 $\mathrm{D}^k u|_V = 0$ 。这表明使 $\mathrm{D}^k u|_V = 0$ 的最大开集包含 $W$ ，即

$$
\boldsymbol {R} \backslash \operatorname{supp} \mathrm{D} ^ {k} u \supset W.
$$

取其补集便得所述结论.

## § 5.5 具有紧支集的广义函数

本节将证明 $\mathcal{D}'(\Omega)$ 中具有紧支集的广义函数全体组成的子空间与 $C^\infty (\Omega)$ 上连续线性泛函组成的空间等同.

$C^\infty (\Omega)$ 是定义在 $\Omega$ 上具有任意阶连续微商的函数全体组成的空间，其中 $\Omega$ 是实轴上的非空开集.我们必须在 $C^\infty (\Omega)$ 中定义收敛性，才能讨论在其上定义的连续线性泛函.

为了定义 $C^\infty (\Omega)$ 中的收敛性，我们在 $\Omega$ 中选取一紧集列 $\pmb{K}_{j}$ 使得

$$
\pmb {K} _ {j} \subset \pmb {K} _ {j + 1}, \quad j = 0, 1, 2, \dots ,
$$

$$
\Omega = \bigcup_ {j = 0} ^ {\infty} K _ {j},
$$

若 $\Omega = R$ ，取 $K_{j} = \{x \in R; |x| \leqslant j\}$ 即可。然后定义 $C^{\infty}(\Omega)$ 中一列半范数为

$$
q _ {N} (f) = \sup \left\{\left| \mathrm{D} ^ {\alpha} f (x) \right|: x \in K _ {N}, | \alpha | \leqslant N \right\}, N = 0, 1, 2, \dots ,
$$

其中 $f \in C^{\infty}(\Omega)$ . 显然有 $q_{N}(f) \leqslant q_{N+1}(f)$ .

定义5.7 设 $f_{j} \in C^{(x)}(\Omega)$ , 如果对每个 $N$ 有

$$
\lim _ {j \rightarrow \infty} q _ {N} (f _ {j}) = 0, \quad N = 0, 1, 2, \dots ,
$$

就称 $C^{\omega}(\Omega)$ 中的元列 $\{f_j\}$ 收敛于零.

$C^{\infty}(\Omega)$ 中给定了上述收敛性后，就称为空间 $\mathcal{E}(\Omega),\mathcal{E}(\Omega)$ 中的元列 $\{f_i\}$ 收敛于零，记为

$$
\lim _ {j \to \infty} f _ {j} = 0, \quad (\text {在}   \mathcal {E} (\Omega)   \text {中}).
$$

注意: 在 $\mathcal{E}(\Omega)$ 中可以定义距离为

$$
d (f, g) = \sum_ {N = 0} ^ {\infty} \frac {1}{2 ^ {N}} \frac {q _ {N} (f - g)}{1 + q _ {N} (f - g)}, \quad f, g \in \mathscr {E} (\Omega).
$$

但可以证明,若要求保持上述收敛性,则 $\mathcal{E}(\Omega)$ 是不可赋范的(根据拓扑线性空间理论.参看 Rudin[13]).

可以证明 $\mathcal{E}(\Omega)$ 按上述收敛性(或距离)是完备的. 证明省略.

$\mathcal{E}(\Omega)$ 上的线性泛函称为连续的，是指：若在 $\mathcal{E}(\Omega)$ 中 $\lim_{j\to \infty}f_j = 0$ ，便有

$$
\lim _ {j \rightarrow \infty} u (f _ {j}) = 0.
$$

$\mathcal{E}(\Omega)$ 上连续线性泛函的全体组成的空间记为 $\mathcal{E}^{\prime}(\Omega)$ .

定理5.4 设 $u$ 是 $\mathcal{E}(\Omega)$ 上的线性泛函，则 $u \in \mathcal{E}'(\Omega)$ 的充分必要条件是存在常数 $C > 0$ 和非负整数 $N$ ，使得

$$
| \langle u, f \rangle | \leqslant C q _ {N} (f), \quad f \in \mathcal {E} (\Omega). \tag {5.12}
$$

此定理的证明与定理 5.2 类似, 省略(也可参看下一章的定理 6.7).

引理5.5 若 $f_{j} \in \mathcal{D}(\Omega)$ , 并且

$$
\lim _ {j \to \infty} f _ {j} = 0 \quad (\text {在}   \mathcal {D} (\Omega)   \text {中}),
$$

则也有

$$
\lim _ {j \to \infty} f _ {j} = 0 \quad (\text {在}   \mathcal {E} (\Omega)   \text {中}).
$$

本引理的结论由 $\mathcal{D}(\Omega)$ 及 $\mathcal{E}(\Omega)$ 中的收敛性定义不难证得.

引理 5.6 $\mathcal{D}(\Omega)$ 是 $\mathcal{E}(\Omega)$ 的稠密子集.

证明 设 $K_{j}$ 是定义 $\mathcal{E}(\Omega)$ 中收敛性所取的 $\Omega$ 中的紧子集，

$$
\pmb {K} _ {0} \subset \pmb {K} _ {1} \subset \pmb {K} _ {2} \subset \dots , \quad \Omega = \bigcup_ {j = 0} ^ {\infty} \pmb {K} _ {j},
$$

按照推论1.15，可取到一列函数 $g_{i} \in \mathcal{D}(\Omega)$ ，使得当 $x \in K_{j}$ 时， $g_{j}(x) = 1$ 。于是，对任给 $f \in \mathcal{E}(\Omega)$ ，令 $f_{j} = f - g_{j}f$ ，显然有 $f_{j}(x) = 0, x \in K_{j}$ 。由此推知，对于 $0 \leqslant N \leqslant j$ ，

$$
q _ {N} (f _ {j}) = 0.
$$

从而得到,对每个 N,

$$
\lim _ {j \rightarrow \infty} q _ {N} (f _ {j}) = 0, \quad N = 0, 1, 2, \dots .
$$

以上讨论表明: 对任给 $f \in \mathcal{E}(\Omega)$ ，可以找到一列函数 $g, f \in \mathcal{D}(\Omega)$ ，使得

$$
\lim _ {j \to \infty} g _ {j} f = f \quad (\text {在}   \mathcal {E} (\Omega)   \text {中}),
$$

即 $\mathcal{D}(\Omega)$ 在 $\mathcal{E}(\Omega)$ 中稠密.

定理 5.7 $\mathcal{E}^{\prime}(\Omega)\subset\mathcal{D}^{\prime}(\Omega)$ ，更确切地说， $\mathcal{E}^{\prime}(\Omega)$ 等同于 $\mathcal{D}^{\prime}(\Omega)$ 中具有紧支集的广义函数全体组成的子空间.

证明 因为 $C_0^\infty (\Omega)$ 是 $C^\infty (\Omega)$ 的子空间，而且根据引理5.5，由 $\mathcal{D}(\Omega)$ 中的收敛性可推出 $\mathcal{E}(\Omega)$ 中的收敛性，所以，不仅按元素集合的包含关系，而且按空间的收敛性来说，都有

$$
\mathcal {D} (\Omega) \subset \mathcal {E} (\Omega).
$$

由此推知，若 $u \in \mathcal{E}'(\Omega)$ ，则它限制在 $\mathcal{D}(\Omega)$ 上也连续，即它也属于 $\mathcal{D}'(\Omega)$ . 此外，若 $u_j \in \mathcal{E}'(\Omega)$ ，

$$
\lim _ {j \rightarrow \infty} \langle u _ {j}, f \rangle = 0, \quad f \in \mathcal {E} (\Omega),
$$

则显然有

$$
\lim _ {j \rightarrow \infty} \langle u _ {j}, \varphi \rangle = 0, \quad \varphi \in \mathcal {D} (\Omega).
$$

于是，按照广义函数序列的收敛性，也有嵌入关系

$$
\mathcal {E} ^ {\prime} (\Omega) \subset \mathcal {D} ^ {\prime} (\Omega).
$$

设 $u \in \mathcal{E}'(\Omega)$ , 由定理5.4可知, 存在 $C$ 与 $N_0$ , 使得(5.12)式, 即下式成立:

$$
\mid \langle u, f \rangle \mid \leqslant C q _ {N _ {0}} (f), \quad f \in \mathcal {E} (\Omega).
$$

若 $\varphi \in \mathcal{D}(\Omega)$ , 并且 $\operatorname{supp} \varphi \subset \Omega \setminus K_{N_0}$ , 则显然有 $q_{N_0}(\varphi) = 0$ . 又由 (5.12) 式推知 $\langle u, \varphi \rangle = 0$ . 根据广义函数的支集概念可知, 若 $u$ 限制在 $\mathcal{D}(\Omega)$ 上, 则其支集必满足 $\operatorname{supp} u \subset K_{N_0}$ , 也就是 $u$ 具有紧支集.

反之，设 $u \in \mathcal{D}'(\Omega)$ ，并且它的支集是紧集，我们可以按以下方式把 $u$ 延拓成 $\mathcal{E}(\Omega)$ 上的连续线性泛函。根据推论1.15，可作函数 $g \in \mathcal{D}(\Omega)$ ，使得当 $x \in V, g(x) = 1$ ，其中开集 $V$ 满足

$$
\operatorname{supp} u \subset V \subset \Omega .
$$

当 $\varphi \in \mathcal{D}(\Omega)$ 时，因为

$$
\varphi (x) - g (x) \varphi (x) = 0, \quad x \in V,
$$

便知

$$
\operatorname{supp} (\varphi - g \varphi) \cap \operatorname{supp} u = \emptyset ,
$$

所以 $\langle u, \varphi - g\varphi \rangle = 0$ ，即有

$$
\langle u, \varphi \rangle = \langle u, g \varphi \rangle
$$

成立.

对任给 $f \in \mathcal{E}(\Omega)$ , 按照等式

$$
\langle u, f \rangle = \langle u, g f \rangle , \tag {5.13}
$$

得到定义在 $\mathcal{E}(\Omega)$ 上的线性泛函 $u$ . 它限制在 $\mathcal{D}(\Omega)$ 上就是原来给定的属于 $\mathcal{D}'(\Omega)$ 的 $u$ . 下面只需证明由(5.13)式给定的 $u$ 在 $\mathcal{E}(\Omega)$ 上连续.

记 $K = \operatorname{supp} g$ ，它是紧集。因为 $u \in \mathcal{D}'(\Omega)$ ，根据定理5.2，对于紧集 $K$ ，存在常数 $C$ 及非负整数 $N$ ，使得 $K \subset K_N$ ，对任意满足条件 $\operatorname{supp} \varphi \subset K$ 的 $\varphi \in \mathcal{D}(\Omega)$ ，有

$$
\mid \langle u, \varphi \rangle \mid \leqslant C \sum_ {0 \leqslant m \leqslant N} \sup _ {x \in K} \mid \mathrm{D} ^ {m} \varphi (x) \mid \leqslant C _ {1} q _ {N} (\varphi),
$$

其中 $C_1 = C(N + 1)$ . 对于 $f \in C^\infty(\Omega)$ , 根据 Leibniz 公式 (5.10) 及 $g \in \mathcal{D}(\Omega)$ , 可推知存在 $C_2$ , 使得

$$
q _ {N} (g f) \leqslant C _ {2} q _ {N} (f).
$$

于是，对任给 $f \in C^{\infty}(\Omega)$ ，因为 $gf \in \mathcal{D}(\Omega), \operatorname{supp}(gf) \subset K$ ，所以由(5.13)式及前面的讨论，得

$$
\mid \langle u, f \rangle \mid \leqslant \mid \langle u, g f \rangle \mid \leqslant C _ {1} q _ {N} (g f) \leqslant C _ {1} C _ {2} q _ {N} (f).
$$

根据定理5.4便知 $u$ 在 $\mathcal{E}(\Omega)$ 上连续. 又由引理5.6可以推断具有紧支集的广义函数 $u \in \mathcal{D}'(\Omega)$ 到 $\mathcal{E}(\Omega)$ 上的连续延拓是唯一的.

因此,可以认为 $\mathcal{E}(\Omega)$ 上的广义函数与 $\mathcal{D}(\Omega)$ 上具有紧支集的广义函数是等同的.

本节以及上一节的定义与定理,都可以推广到 $\Omega$ 是 $R^{n}$ 中开集的情形.

## § 5.6 广义函数的直积

本节考虑两个普通函数 $f(x)$ 与 $g(y)$ 的乘积 $f(x)g(y)$ 在广义函数中的推广，即两个广义函数的直积.

记 $\mathcal{D}_m = \mathcal{D}(\pmb{R}^m),\mathcal{D}_n = \mathcal{D}(\pmb{R}^n)$ 以及 $\mathcal{D}_{m + n} = \mathcal{D}(\pmb{R}^{m + n})$ .设 $f(x)$ 与 $g(y)$ 分别是 $\pmb{R}^m$ 与 $\pmb{R}^n$ 上的局部可积函数，则函数 $f(x)g(y)$ 在 $\pmb{R}^{m + n}$ 上局部可积.于是，由它可定义如下的正则广义函数：对于 $\varphi (x,y)\in \mathcal{D}_{m + n}$

$$
\begin{array}{l} \langle f (x) g (y), \varphi (x, y) \rangle = \int_ {\mathbb {R} ^ {m}} f (x) \int_ {\mathbb {R} ^ {n}} g (y) \varphi (x, y) d y d x \\ = \langle f (x), \langle g (y), \varphi (x, y) \rangle \rangle , \tag {5.14} \\ \end{array}
$$

或

$$
\langle g (y) f (x), \varphi (x, y) \rangle = \int_ {\mathbb {R} ^ {n}} g (y) \int_ {\mathbb {R} ^ {m}} f (x) \varphi (x, y) d x d y
$$

$$
= \langle g (y), \langle f (x), \varphi (x, y) \rangle \rangle , \tag {5.15}
$$

我们按照(5.14)式的形式,定义两个广义函数的直积.

定义 5.8 设 $u(x) \in \mathcal{D}_{m}^{\prime}, v(y) \in \mathcal{D}_{n}^{\prime}$ ，用 $u(x) \times v(y)$ 表示 $u(x)$ 与 $v(y)$ 的直积，其定义为：对于 $\varphi(x, y) \in \mathcal{D}_{m+n}$ ，

$$
\begin{array}{l} \langle u (x) \times v (y), \varphi (x, y) \rangle \\ = \langle u (x), \langle v (y), \varphi (x, y) \rangle \rangle . \tag {5.16} \\ \end{array}
$$

为了说明(5.16)式右端确定了 $\mathcal{D}_{m + n}$ 上一个连续线性泛函，我们证明以下定理.

定理5.8 设 $u(x) \in \mathcal{D}_m'$ , $v(y) \in \mathcal{D}_n'$ , 则(5.16)式右端定义了 $\mathcal{D}_{m+n}$ 上的一个广义函数, 即 $u \times v \in \mathcal{D}'_{m+n}$ .

证明 设 $\varphi(x, y) \in \mathcal{D}_{m+n}$ , 记函数

$$
\psi (x) = \langle v (y), \varphi (x, y) \rangle .
$$

我们要证明 $\psi (x)\in C_0^\infty (\mathbb{R}^m)$

首先注意到因为 $\varphi(x,y)$ 有紧支集, 因此可取到足够大的 r > 0, 使得

$$
\operatorname{supp} \varphi \subset \{(x, y): | x | \leqslant r, | y | \leqslant r \}.
$$

这表明，当 $|x| > r$ 时， $\varphi(x, y) = 0$ ，从而这时，

$$
\psi (x) = \langle v (y), \varphi (x, y) \rangle = \langle v (y), 0 \rangle = 0.
$$

由此可知 $\psi(x)$ 有紧支集.

其次验证 $\psi(x)$ 是连续函数. 取定一点 $x \in \mathbb{R}^m$ , 设点列 $\{x_l\}$ 的极限是 $x$ , 显然, $\varphi(x_l, y)$ 及 $\varphi(x, y)$ 若看作 $y$ 的函数, 则它们的支集都包含在有界集 $\{y \in \mathbb{R}^n : |y| \leqslant r\}$ 中. 又因为 $\varphi \in C_0^\infty(\mathbb{R}^{m+n})$ , $\varphi$ 及其各阶微商都有一致连续性, 所以不难推知

$$
\lim _ {l \to \infty} \varphi (x _ {l}, y) = \varphi (x, y) \quad (\text {在}   \mathcal {D} _ {n}   \text {中}).
$$

再由 $v(y) \in \mathcal{D}_n'$ ，便得知当 $l \to \infty$ 时，

$$
\psi (x _ {l}) = \langle v (y), \varphi (x _ {l}, y) \rangle \rightarrow \langle v (y), \varphi (x, y) \rangle = \psi (x),
$$

即 $\psi(x)$ 连续.

然后证明 $\psi$ 可微，并且

$$
\mathrm{D} _ {x} ^ {\alpha} \psi (x) = \langle v (y), \mathrm{D} _ {x} ^ {\alpha} \varphi (x, y) \rangle . \tag {5.17}
$$

我们取定一点 $x \in \mathbb{R}^m$ ，令 $\Delta_j = (0, \cdots, \cdots, h, 0, \cdots, 0)$ ，它的第 $j$ 个分量是 $h$ ，其余分量都是 0。与前面类似，可以证明有

$$
\begin{array}{l} \frac {1}{h} [ \psi (x + \Delta_ {j}) - \psi (x) ] = \left\langle v (y), \frac {1}{h} [ \varphi (x + \Delta_ {j}, y) - \varphi (x, y) ] \right\rangle \\ \rightarrow \left\langle v (y), \frac {\partial \varphi (x , y)}{\partial x _ {j}} \right\rangle , \quad h \rightarrow 0, \\ \end{array}
$$

亦即

$$
\frac {\partial}{\partial x _ {j}} \psi (x) = \left\langle v (y), \frac {\partial \varphi (x , y)}{\partial x _ {j}} \right\rangle .
$$

反复运用这样的步骤,便得知 $\psi(x)$ 任意阶可微,并且有(5.17)式成立.

综上所述, 知 $\psi(x) \in \mathcal{D}(\mathbb{R}^m)$ . 因此 (5.16) 式的右端 $\langle u, \psi \rangle$ 是有定义的, 并且 $u \times v$ 是 $\mathcal{D}_{m+n}$ 上的线性泛函.

最后,我们来证明这个线性泛函连续.设任给在 $\mathcal{D}_{m+n}$ 中收敛于零的元列 $\{\varphi_{i}(x,y)\}$ . 根据定义知道必存在适当的大的 $r>0$ , 使得

$$
\operatorname{supp} \varphi_ {l} \subset \{(x, y): | x | \leqslant r, | y | \leqslant r \} = K _ {1} \times K _ {2}.
$$

记 $K=K_{1}\times K_{2}$ ，其中

$$
\boldsymbol {K} _ {1} = \{x \in \boldsymbol {R} ^ {m}: | x | \leqslant r \}, \quad \boldsymbol {K} _ {2} = \{y \in \boldsymbol {R} ^ {n}: | y | \leqslant r \},
$$

并且对于任意多重指标 $\alpha$ ，有

$$
\lim _ {l \rightarrow \infty} (\sup _ {(x, y) \in K} | D ^ {\alpha} \varphi_ {l} (x, y) |) = 0.
$$

现在记

$$
\psi_ {l} (x) = \langle v (y), \varphi_ {l} (x, y) \rangle .
$$

由前面的讨论知 $\psi_{i}\in \mathcal{D}_{m}$ ，并且

$$
\operatorname{supp} \left(\psi_ {i}\right) \subset K _ {1}.
$$

因为 $v(y) \in \mathcal{D}_n'$ ，根据定理5.2得知，对于紧集 $\pmb{K}_2$ ，存在常数

$C$ 与非负整数 $N$ , 使得对于任意满足 $\operatorname{supp} \varphi \subset K_2$ 的 $\varphi(y) \in \mathcal{D}_n$ , 有

$$
\left| \langle v (y), \varphi (y) \rangle \right| \leqslant C \sum_ {| \beta | \leqslant N ^ {y} \in K _ {2}} \sup \left| D _ {y} ^ {\beta} \varphi (y) \right|.
$$

由此推知，任意给定多重指标 $\alpha$

$$
\begin{array}{l} \left| \mathrm{D} _ {\tau} ^ {a} \psi_ {l} (x) \right| = \left| \langle v (y), \mathrm{D} _ {\tau} ^ {a} \varphi_ {l} (x, y) \rangle \right| \\ \leqslant C \sum_ {| \beta | \leqslant N} \sup _ {y \in K _ {2}} \left| D _ {y} ^ {\beta} D _ {x} ^ {\alpha} \varphi_ {l} (x, y) \right|, \quad x \in K _ {1}. \\ \end{array}
$$

即得知，当 $l \to \infty$ 时，

$$
\sup _ {x \in K _ {1}} | \mathrm{D} _ {x} ^ {\alpha} \psi_ {l} (x) | \leqslant C \sum_ {| \beta | \leqslant N} \sup _ {(x, y) \in K} | \mathrm{D} _ {y} ^ {\beta} \mathrm{D} _ {x} ^ {\alpha} \varphi_ {l} (x, y) | \rightarrow 0.
$$

于是，

$$
\lim _ {l \to \infty} \psi_ {l} = 0 \quad (\text {在}   \mathcal {D} _ {m}   \text {中}).
$$

由 $u(x)\in \mathcal{D}_m^I$ ，便可得到

$$
\lim _ {l \rightarrow \infty} \langle u \times v, \varphi_ {l} \rangle = \lim _ {l \rightarrow \infty} \langle u (x), \psi_ {l} (x) \rangle = 0.
$$

这表明 $u \times v \in \mathcal{D}_{m+n}^{\prime}$ .

广义函数的直积具有以下性质：

性质1 可交换性：

$$
u (x) \times v (y) = v (y) \times u (x).
$$

证明 设基本函数 $\varphi(x, y) \in \mathcal{D}_{m+n}$ 具有以下形式

$$
\varphi (x, y) = \sum_ {j = 1} ^ {k} \varphi_ {j} (x) \psi_ {j} (y), \quad \varphi_ {j} \in \mathcal {D} _ {m}, \psi_ {j} \in \mathcal {D} _ {n}. \tag {5.18}
$$

按照定义 5.8 便得知

$$
\langle u \times v, \varphi \rangle = \sum_ {j = 1} ^ {k} \langle u, \varphi_ {j} \rangle \langle v, \psi_ {j} \rangle = \langle v \times u, \varphi \rangle ,
$$

亦即对于形如(5.18)的基本函数 $\varphi$ ，交换性成立。可以证明形如(5.18)的基本函数全体组成的集合，在空间 $\mathcal{D}_{m+n}$ 中稠密（参见[12])。于是便得到本性质。

性质 2 连续性, 即若

$$
\lim _ {l \to \infty} u _ {l} = u \quad (\text {在}   \mathcal {D} _ {m} ^ {\prime}   \text {中}),
$$

则有

$$
\lim _ {l \rightarrow \infty} u _ {l} (x) \times v (y) = u (x) \times v (y).
$$

性质3 结合律：

$$
u (x) \times [ v (y) \times w (z) ] = [ u (x) \times v (y) ] \times w (z).
$$

性质4 可微性：

$$
\mathrm{D} _ {x} ^ {a} [ u (x) \times v (y) ] = [ \mathrm{D} _ {x} ^ {a} u (x) ] \times v (y).
$$

性质5 与 $C^\infty$ 函数的乘法. 若 $a(x) \in C^\infty(R^m)$ , 则

$$
a (x) [ u (x) \times v (y) ] = [ a (x) u (x) ] \times v (y).
$$

以上各性质根据定义不难验证，略.

性质6 支集 $\operatorname{supp}(u \times v) = (\operatorname{supp} u) \times (\operatorname{supp} v)$ . (5.19)

证明 记

$$
A = \operatorname{supp} u, \quad B = \operatorname{supp} v, \quad E = \operatorname{supp} (u \times v).
$$

先证明

$$
A \times B \subset E.
$$

设点 $(x_0, y_0) \in A \times B$ ，即 $x_0 \in A, y_0 \in B$ . 若 $(x_0, y_0) \in E$ ，则必存在点 $(x_0, y_0)$ 的一个邻域 $V$ ，使得 $u \times v$ 在 $V$ 上等于零. 我们可以取到 $\mathbb{R}^m$ 中 $x_0$ 的邻域 $V_1$ 以及 $\mathbb{R}^n$ 中 $y_0$ 的邻域 $V_2$ ，使得

$$
V _ {1} \times V _ {2} \subset V.
$$

因为 $x_0 \in A$ ，所以 $u(x)$ 在 $V_1$ 上不为零，可取到 $\varphi(x) \in \mathcal{D}(V_1)$ ，使得

$$
\langle u, \varphi \rangle \neq 0.
$$

类似地可取到 $\psi(y) \in \mathcal{D}(V_2)$ , 使得

$$
\langle u, \psi \rangle \neq 0.
$$

于是

$$
\langle u (x) \times v (y), \varphi (x) \psi (y) \rangle = \langle u, \varphi \rangle \langle v, \psi \rangle \neq 0.
$$

但又知

$$
\operatorname{supp} (\varphi (x) \psi (y)) \subset V _ {1} \times V _ {2} \subset V,
$$

由 $u \times v$ 在 $V$ 上等于零推知

$$
\langle u (x) \times v (y), \varphi (x) \psi (y) \rangle = 0.
$$

这是矛盾的. 因此, 必定有 $(x_0, y_0) \in E$ .

下面证明

$$
A \times B \supset E.
$$

等价地只需证明其补集的包含关系

$$
(A \times B) ^ {i} \subset E ^ {i}.
$$

设 $x_0 \in A$ ，即 $x_0 \in A^c = R^m \setminus A$ ，必存在 $x_0$ 在 $R^m$ 中的一个邻域 $V_1$ ，使得若 $\varphi \in \mathcal{D}(V_1)$ ，则有

$$
\langle u (x), \varphi (x) \rangle = 0.
$$

任给 $y_0 \in \mathbb{R}^n$ ，取 $y_0$ 的邻域 $V_2 \subset \mathbb{R}^n$ 。若 $\varphi(x, y) \in \mathcal{D}(V_1 \times V_2)$ ，则 $\psi(x) = \langle v(y), \varphi(x, y) \rangle \in \mathcal{D}(V_1)$ ，于是

$$
\langle u (x) \times v (y), \varphi (x, y) \rangle = \langle u (x), \psi (x) \rangle = 0.
$$

这表明 $(x_0, y_0) \in E$ . 类似地，若 $y_0 \in B^c$ ，对任给 $x_0 \in R^m, (x_0, y_0) \in E$ . 综上所述，得到

$$
E ^ {i} \supset [ A ^ {i} \times R ^ {n} ] \cup [ R ^ {m} \times B ^ {i} ] \supset (A \times B) ^ {i}.
$$

因此

$$
E \subset A \times B.
$$

于是，(5.19)式成立.

## § 5.7 广义函数的卷积

$R^n$ 上两个可积函数 $f(x)$ 与 $g(x)$ 的卷积定义为

$$
(f * g) (x) = \int_ {\mathbb {R} ^ {n}} f (x - y) g (y) \mathrm{d} y = (g * f) (x),
$$

由定理1.3得知它也可积.因此，由它可以定义一个正则广义函数，即

$$
\begin{array}{l} \langle f * g, \varphi \rangle = \int_ {R ^ {n}} (f * g) (z) \varphi (z) \mathrm{d} z \\ = \int_ {R ^ {n}} \left[ \int_ {R ^ {n}} f (z - y) g (y) d y \right] \varphi (z) d z \\ = \int_ {R ^ {n}} g (y) \left[ \int_ {R ^ {n}} f (z - y) \varphi (z) \mathrm{d} z \right] \mathrm{d} y \\ \end{array}
$$

$$
\begin{array}{l} = \int_ {R ^ {n}} g (y) \left[ \int_ {R ^ {n}} f (x) \varphi (x + y) d x \right] d y \\ = \langle f (x) \times g (y), \varphi (x + y) \rangle , \quad \varphi \in \mathcal {D} (\boldsymbol {R} ^ {n}). \tag {5.20} \\ \end{array}
$$

根据(5.20)式,我们可以定义两个广义函数的卷积.

定义 5.9 设 $u, v \in \mathcal{D}'(R^{n})$ ，如果以下等式

$$
\langle w, \varphi \rangle = \langle u (x) \times v (y), \varphi (x + y) \rangle , \varphi \in \mathcal {D} (\boldsymbol {R} ^ {n}) \tag {5.21}
$$

定义了一个广义函数 $w \in \mathcal{D}'(R^n)$ , 那么, $w$ 就称为 $u$ 与 $v$ 的卷积, 并且记为

$$
w = u * v.
$$

注意到 $\langle u(x) \times v(y), \psi(x, y) \rangle$ 对一切 $\psi \in C_0^{n+1}(\mathbb{R}^{2n})$ 是有定义的，但在(5.21)中 $\varphi \in \mathcal{D}(\mathbb{R}^n)$ . 令

$$
\psi (x, y) = \varphi (x + y), \quad x, y \in R ^ {n}.
$$

显然 $\psi \in C^{(x)}(R^{2n})$ ，它的支集

$$
\operatorname{supp} \psi = \{(x, y): x + y \in \operatorname{supp} \varphi \} \tag {5.22}
$$

是闭集,但一般来说不是有界的,除非 $\varphi=0$ .

以 $n = 1$ 的情形为例. 若 $\varphi$ 的支集为

$$
\{x: | x | \leqslant M \},
$$

则 $\psi$ 的支集为

$$
\{(x, y): | x + y | \leqslant M \}.
$$

如图5.1, 可以看到 $\psi$ 的支集是位于 $x + y = M$ 与 $x + y = -M$ 两

![](29c969848545d38bdc7c373d77caa30359afc9106d1078a5fd79660057c4d80b.jpg)

<details>
<summary>text_image</summary>

x + y = -M
M
-M
O
M
x
-M
x + y = M
</details>

图5.1

条直线之间的无限长条.

由此可见，(5.21)式的右端可能没有意义，因此，必须考虑它在什么情形有意义。也就是说，并不是对任意两个广义函数都可以定义卷积的，我们要讨论在什么条件下，它们的卷积存在。

引理5.9 设 $u \in \mathcal{D}'(R^n)$ , 若函数 $\sigma(x) \in C^\infty(R^n)$ , 它使得集合

$$
\boldsymbol {K} = \operatorname{supp} u \cap \operatorname{supp} \sigma
$$

是紧集,则可以把 u 的定义延拓到 $\sigma$ 上.

证明 根据推论 1.15, 取函数 $g \in C_0^\infty(R^n)$ , 使得在 $\pmb{K}$ 的一个邻域上 $g(x) = 1$ (若 $\pmb{K}$ 是空集, 则取 $g$ 任意). 显然 $g\sigma \in C_0^\infty$ . 因此, 我们定义 $u$ 在 $\sigma$ 上的值为

$$
\langle u, \sigma \rangle = \langle u, g \sigma \rangle . \tag {5.23}
$$

可以证明:由(5.23)定义 u 的延拓不依赖于函数 g 的选取. 因为, 若有另一函数 $g_{1} \in C_{0}^{\infty}$ , 使在 K 的某个邻域上 $g_{1}(x) = 1$ , 则 $(g - g_{1})\sigma \in C_{0}^{\infty}$ , 并且

$$
\operatorname{supp} (g - g _ {1}) \sigma \subset K ^ {c} \cap \operatorname{supp} \sigma ,
$$

从而

$$
\operatorname{supp} u \cap \operatorname{supp} (g - g _ {1}) \sigma \subset K \cap K ^ {c} = \varnothing ,
$$

于是，由 §5.4 的讨论得知

$$
\langle u, (g - g _ {1}) \sigma \rangle = 0,
$$

即

$$
\langle u, g \sigma \rangle = \langle u, g _ {1} \sigma \rangle .
$$

如果 $\sigma \in C_0^\infty$ ，与上面的讨论类似，可知

$$
\langle u, (1 - g) \sigma \rangle = 0,
$$

即 $\langle u, \sigma \rangle = \langle u, g\sigma \rangle$ . 这表明, 当 $\sigma \in C_0^\infty$ 时, 延拓后的定义与原定义是一致的.

下面给出保证卷积存在的条件.

条件 5.1 设 $u, v \in D_{n}^{\prime}$ ，满足以下条件：令 A = supp u, B = supp v，对于 $R^{n}$ 中每个紧集 F，由下式所定义的集合

$$
\widetilde {F} = (A \times B) \cap \{(x, y): x + y \in F \} \tag {5.24}
$$

都是 $R^{n} \times R^{n}$ 中的有界集.

定理 5.10 若 $u, v \in \mathcal{D}'(R^n)$ ，满足条件 5.1，则 $u * v$ 存在并且属于 $\mathcal{D}'(R^n)$ .

证明 对于 $\varphi \in \mathcal{D}_n$ ，令 $F = \operatorname{supp} \varphi$ ，按假定条件5.1成立，便知相应的 $\widetilde{F}$ 有界，亦即集合

$$
\operatorname{supp} (u \times v) \cap \{(x, y): x + y \in F \}
$$

有界.令

$$
\psi (x, y) = \varphi (x + y),
$$

则

$$
\operatorname{supp} \psi = \{(x, y): x + y \in F \}.
$$

按照引理5.9所述方法，取一个函数 $g(x,y)\in \mathcal{D}_{2n}$ ，使它在 $\widetilde{F}$ 的一个邻域上等于1，对于 $\varphi \in \mathcal{D}_n$ ，定义泛函 $\pmb{w}$ 为

$$
\begin{array}{l} \langle w, \varphi \rangle = \langle u (x) \times v (y), \varphi (x + y) \rangle \\ \stackrel {\text { def }} {=} \langle u (x) \times v (y), g (x, y) \psi (x, y) \rangle . \tag {5.25} \\ \end{array}
$$

根据引理5.9知 $\pmb{w}$ 的定义与 $g$ 的选取无关. $\pmb{w}$ 显然是 $\mathcal{D}_n$ 上的线性泛函. 下面证明 $\pmb{w}$ 连续.

设 $\mathcal{D}_n$ 中一列元素 $\varphi_j$ 收敛于零. 必存在一个紧集 $K$ , 使 $\operatorname{supp} \varphi_j \subset K$ . 由 (5.24) 式给定的集合 $\widetilde{K}$ 是有界集. 取函数 $g(x, y) \in \mathcal{D}_{2n}$ , 使它在 $\widetilde{K}$ 的一个邻域上等于 1. 由

$$
\lim _ {j \to \infty} \varphi_ {j} = 0 \quad (\text {在}   \mathcal {D} _ {n}   \text {中}),
$$

便推知

$$
\lim _ {j \to \infty} [ g (x, y) \varphi_ {j} (x + y) ] = 0 \quad (\text {在}   \mathcal {D} _ {2 n}   \text {中}).
$$

因为直积 $u(x) \times v(y) \in \mathcal{D}_{2n}^{\prime}$ , 所以按(5.25)式可得知

$$
\lim _ {j \rightarrow \infty} \langle w, \varphi_ {j} \rangle = \lim _ {j \rightarrow \infty} \langle u (x) \times v (y), g (x, y) \varphi_ {j} (x + y) \rangle = 0,
$$

这表明 $w \in \mathcal{D}_n'$ . 因此, 卷积 $w = u * v$ 存在并且属于 $\mathcal{D}_n'$ .

现在给出满足条件 5.1 的一些例子.

例1 设 $u, v \in \mathcal{D}_n'$ . 若 $u, v$ 之中至少有一个具有紧支集, 则满

足条件 5.1. 从而卷积 $u \times v$ 存在.

先设 v 有紧支集, 必有常数 M 使

$$
B = \operatorname{supp} v \subset \{y: | y | \leqslant M \}.
$$

对于紧集 $F$ 也有 $M_{1}$ 使

$$
F \subset \{x: | x | \leqslant M _ {1} \}.
$$

任给 $(x, y) \in \widetilde{F}$ , 必满足条件:

$$
| y | \leqslant M, \quad | x + y | \leqslant M _ {1},
$$

从而推知 $|x| \leqslant M + M_1$ . 因此 $\widetilde{F}$ 有界. 参看图5.2.

![](2193d5801af53c66684a53b3256d6871e2d204e2355060f7d6a11d886cf851c3.jpg)

<details>
<summary>text_image</summary>

y
M
M₁
M₁ M+M₁
- (M+M₁) -M₁ O x
-M₁
-M
</details>

图5.2

![](4972ae9cdcfbe9fe1761d198bc43ba5bf95b3bb7ff5cdfff4164e972b4fcc070.jpg)

<details>
<summary>text_image</summary>

y
M₂
M
M
- (M+M₂) -M O M₁ x
- (M+M₁)
</details>

图5.3

若 u 有紧支集, 其证明类似.

例2 设 $n = 1, u, v \in \mathcal{D}_1'$ . 若 $u$ 与 $v$ 的支集在同一边有界（即，它们同时有上界，或同时有下界），则满足条件5.1. 故 $u * v$ 存在.

设 u 与 v 的支集同时有上界, 即设

$$
\operatorname{supp} u = A \subset \{x: x \leqslant M _ {1} \}, \quad \operatorname{supp} v = B \subset \{y: y \leqslant M _ {2} \}.
$$

对于紧集 $F$ ，必存在 $M$ ，使

$$
F \subset \{x: | x | \leqslant M \}.
$$

任给 $(x,y)\in \widetilde{F}$ 必须满足

$$
x \leqslant M _ {1}, \quad y \leqslant M _ {2}, \quad - M \leqslant x + y \leqslant M.
$$

由此推知

$$
- (M + M _ {2}) \leqslant x \leqslant M _ {1}, - (M + M _ {1}) \leqslant y \leqslant M _ {2}.
$$

即 $\widetilde{F}$ 有界. 参看图 5.3.

同时有下界的情形类似可证.

例3 设 $n \geqslant 2, u, v \in \mathcal{D}_n'$ . 若集合 $A = \operatorname{supp} u$ 是包含在锥体

$$
\{(x _ {1}, \dots , x _ {n}): x _ {1} \geqslant 0, x _ {1} ^ {2} - k (x _ {2} ^ {2} + \dots + x _ {n} ^ {2}) \geqslant 0 \}
$$

中的子集, 其中 k 是正数, $B = supp v$ 是半空间

$$
\{(y _ {1}, \dots , y _ {n}): y _ {1} \geqslant 0 \}
$$

中的子集,则满足条件 5.1,故 $u \times v$ 存在.

对于紧集 $F \subset \{x: |x| \leqslant M\}$ . 任给 $(x, y) \in \widetilde{F}$ , 必有

$$
0 \leqslant x _ {1} + y _ {1} \leqslant | x + y | \leqslant M,
$$

从而

$$
0 \leqslant x _ {1} \leqslant M, \quad 0 \leqslant y _ {1} \leqslant M.
$$

又因为

$$
k (x _ {2} ^ {2} + \dots + x _ {n} ^ {2}) \leqslant x _ {1} ^ {2},
$$

可推知 $x_{2}, \cdots, x_{n}$ 有界. 而由 $x + y$ 的有界性与 x 的有界性, 便推知 y 的有界性. 故 $\widetilde{F}$ 有界.

广义函数的卷积具有以下性质：

性质1 可交换性. 若 $u, v$ 满足条件5.1, 则 $u * v$ 与 $v * u$ 都存在, 并且

$$
u * v = v * u.
$$

由定理 5.10 及广义函数的直积的可交换性. 可得到此性质.

性质 2 可微性. 设 u, v 满足条件 5.1, 则对于多重指标 $\alpha$ 有

$$
\mathrm{D} ^ {a} (u * v) = (\mathrm{D} ^ {a} u) * v = u * (\mathrm{D} ^ {a} v). \tag {5.26}
$$

证明 只需对一阶偏微商 $\frac{\partial}{\partial x_j}$ 证明(5.26)式. 对于 $\varphi \in \mathcal{D}_n$ ，由定义及直积的可交换性，有

$$
\begin{array}{l} \left\langle \frac {\partial}{\partial x _ {j}} (u * v), \varphi \right\rangle = (- 1) \left\langle u * v, \frac {\partial \varphi}{\partial x _ {j}} \right\rangle \\ = (- 1) \left\langle u (x) \times v (y), \frac {\partial \varphi}{\partial x _ {j}} (x + y) \right\rangle \\ \end{array}
$$

$$
\begin{array}{l} = \left\langle v (y), \left\langle - u (x), \frac {\partial \varphi}{\partial x _ {j}} (x + y) \right\rangle \right\rangle \\ = \left\langle v (y), \left\langle \frac {\partial}{\partial x _ {j}} u (x), \varphi (x + y) \right\rangle \right\rangle \\ = \left\langle \frac {\partial}{\partial x _ {j}} u (x) \times v (y), \varphi (x + y) \right\rangle \\ = \left\langle \frac {\partial u}{\partial x _ {j}} * v, \varphi \right\rangle \quad j = 1, 2, \dots , n, \\ \end{array}
$$

即

$$
\frac {\partial}{\partial x _ {j}} (u * v) = \frac {\partial u}{\partial x _ {j}} * v, \quad j = 1, 2, \dots , n.
$$

再由性质1可得(5.26)的第二个等式.

性质 3 对于 $\delta$ 函数, 有

$$
\delta * u = u * \delta = u, \quad u \in \mathcal {D} _ {n} ^ {\prime}. \tag {5.27}
$$

证明 因为 $\delta$ 函数的支集是单点集 $\{0\}$ , 显然是紧集. 于是对任意 $u \in \mathcal{D}_n'$ , $\delta * u$ 存在, 我们有

$$
\begin{array}{l} \langle \delta * u, \varphi \rangle = \langle \delta (x) \times u (y), \varphi (x + y) \rangle \\ = \langle u (y), \langle \delta (x), \varphi (x + y) \rangle \rangle \\ = \langle u (y), \varphi (y) \rangle , \quad \varphi \in \mathscr {D} _ {n}, \\ \end{array}
$$

即

$$
\delta * u = u.
$$

根据性质 2, 进一步可得

$$
\mathrm{D} ^ {a} u = \mathrm{D} ^ {a} \delta * u. \tag {5.27}
$$

性质4 卷积的支集. 设 $u, v$ 满足条件5.1, 则

$$
\operatorname{supp} (u * v) \subset A + B,
$$

其中 $A = \operatorname{supp} u, B = \operatorname{supp} v$

$$
A + B = \{x: x = \xi + \eta , \xi \in A, \eta \in B \}.
$$

证明 不难验证点集 $E = A + B$ 是闭集. 我们只需证明对于 $\varphi \in \mathcal{D}_n$ , 若 $\operatorname{supp} \varphi \subset E^c$ , 则 $\langle u * v, \varphi \rangle = 0$ .

令

$$
F = \operatorname{supp} \varphi , \quad \psi (x, y) = \varphi (x + y).
$$

由(5.21)式知

$$
\langle u * v, \varphi \rangle = \langle u \times v, \psi \rangle ,
$$

并且

$$
\operatorname{supp} \psi = \{(x, y): x + y \in F \}.
$$

由 §5.6 中性质 6 知 $\operatorname{supp}(u \times v) = A \times B$ .

容易验证

$$
A \times B \subset \{(x, y): x + y \in E \}.
$$

因为 $F \cap E = \varnothing$ ，所以

$$
\operatorname{supp} (u \times v) \cap \operatorname{supp} \psi
$$

$$
\subset \{(x, y): x + y \in E \} \cap \{(x, y): x + y \in F \} = \varnothing .
$$

从而

$$
\langle u * v, \varphi \rangle = \langle u \times v, \psi \rangle = 0. \quad \|
$$

性质 5 连续性. 设广义函数列 $u_{j} \in \mathcal{D}_{n}^{\prime}(j=1,2,\cdots)$ , $u, v \in D_{n}^{\prime}$ ，并且

$$
\lim _ {j \to \infty} u _ {j} = u \quad (\text {在}   \mathcal {D} _ {n} ^ {\prime}   \text {中}),
$$

若以下两条件之一成立：

(a) 设 v 有紧支集, 即 supp v = K 是紧集;

(b) 设存在紧集 K, 使得

$$
\operatorname{supp} u _ {j} \subset K,
$$

则有

$$
\lim _ {j \to \infty} (u _ {j} * v) = u * v \quad (\text {在}   {\mathcal D} _ {n} ^ {\prime}   \text {中}).
$$

证明 设条件(a)成立,根据定理5.10知卷积 $u*v$ 及 $u_{j}*v$ 存在.按广义函数的收敛定义,只需证明

$$
\lim _ {j \rightarrow \infty} \langle u _ {j} * v, \varphi \rangle = \langle u * v, \varphi \rangle , \quad \varphi \in \mathcal {D} _ {n}.
$$

记 $A_{j} = \operatorname{supp} u_{j}$ . (5.24)式中用 $A_{j}$ 取代 $A$ 得到 $\widetilde{F}_{j}$ . 用例1的方法可得知有 $\mathbb{R}^{2n}$ 中的有界集 $\widetilde{K}$ , 使得 $\widetilde{F}_{j} \subset \widetilde{K}$ . 用定理5.10的做法, 取一个函数 $g(x, y) \in \mathcal{D}_{2n}$ , 使它在 $\widetilde{K}$ 的一个邻域上等于1, 而由

(5.25)式知道,对于 $\varphi\in D_{n}$ ,

$$
\begin{array}{l} \langle u _ {j} * v, \varphi \rangle = \langle u _ {j} (x) \times v (y), g (x, y) \varphi (x + y) \rangle \\ = \langle u _ {j} (x), \langle v (y), g (x, y) \varphi (x + y) \rangle \rangle . \tag {5.28} \\ \end{array}
$$

记函数

$$
\sigma (x) = \langle v (y), g (x, y) \varphi (x + y) \rangle , \quad x \in R ^ {n}.
$$

用定理5.8的方法可以证明 $\sigma (x)\in \mathcal{D}_n$ .于是

$$
\lim _ {j \rightarrow \infty} \langle u _ {j}, \sigma \rangle = \langle u, \sigma \rangle .
$$

应用(5.28)式便得到

$$
\lim _ {j \rightarrow \infty} \langle u _ {j} * v, \varphi \rangle = \langle u, \sigma \rangle = \langle u * v, \varphi \rangle .
$$

设条件(b)成立,类似可证.

性质6 结合律. 设 $u, v, w \in \mathcal{D}_n'$ . 如果这三个广义函数中至少有两个具有紧支集, 那么

$$
(u * v) * w = u * (v * w).
$$

更一般地,考虑以下条件:

条件5.2 设 $u, v, w \in \mathcal{D}_n$ ，令

$$
A = \operatorname{supp} u, \quad B = \operatorname{supp} v, \quad C = \operatorname{supp} w,
$$

对于 $R^{n}$ 中每个紧集 F，由下式

$$
\widetilde {F} = \{(x, y, z): x \in A, y \in B, z \in C, x + y + z \in F \}
$$

所定义的集合 $\widetilde{F}$ 是有界集.

一般的结论是：若 $u, v, w \in \mathcal{D}_n'$ 满足条件5.2，则由关系式

$$
\langle S, \varphi \rangle = \langle u (x) \times v (y) \times w (z), \varphi (x + y + z) \rangle , \quad \varphi \in \mathcal {D} _ {n},
$$

定义了一个广义函数 $S \in \mathcal{D}_n'$ ，它称为 $u, v, w$ 的卷积 $u * v * w$ ，并且有

$$
S = u * v * w = (u * v) * w = u * (v * w).
$$

证明省略.

注 只假定 $u * (v * w)$ 存在并不能推知 $(u * v) * w$ 存在以及二者相等.

作为广义函数的卷积的特殊情形,可以考虑广义函数与基本

函数的卷积. 我们有以下定理.

定理 5.11 假设下述条件之一成立：

(i) $\sigma \in C_0^\infty (\mathbb{R}^n), u \in \mathcal{D}'(\mathbb{R}^n)$ ;

(ii) $\sigma \in C^{\infty}(\mathbb{R}^{n}), u \in \mathcal{E}^{l}(\mathbb{R}^{n})$

则卷积 $u * \sigma$ 是一个 $C^\infty$ 类的函数 $h$ , 其定义为

$$
h (\xi) = \langle u (x), \sigma (\xi - x) \rangle , \quad \xi \in R ^ {n}. \tag {5.29}
$$

证明 设条件(1)成立. 首先可以证明由(5.29)式给定的 $h(\xi)$ 是属于 $C^\infty$ 的(其证明方法参考定理5.8).

其次根据卷积的定义,对于 $\varphi\in\mathcal{D}_{n}$ ,有

$$
\begin{array}{l} \langle u * \sigma , \varphi \rangle = \langle u (x), \langle \sigma (y), \varphi (x + y) \rangle \rangle \\ = \left\langle u (x), \int \sigma (y) \varphi (x + y) \mathrm{d} y \right\rangle \\ = \left\langle u (x), \int \sigma (\xi - x) \varphi (\xi) \mathrm{d} \xi \right\rangle \\ = \int \langle u (x), \sigma (\xi - x) \varphi (\xi) \rangle \mathrm{d} \xi \\ = \int h (\xi) \varphi (\xi) \mathrm{d} \xi , \\ \end{array}
$$

以上各式中积分区域均为 $R^{n}$ ，其中第四个等式的证明省略（利用Riemann 和来逼近积分值，并且根据 u 是连续线性泛函）。于是得到

$$
(u * \sigma) (\xi) = h (\xi) = \langle u (x), \sigma (\xi - x) \rangle . \tag {5.29}
$$

情形(ii)的证明省略.

由 $(5.29')$ 式取 $\xi=0$ ，可得

$$
(u * \sigma) (0) = \langle u (x), \sigma (- x) \rangle . \tag {5.30}
$$

记函数 $\sigma$ 的反射为 $\check{\sigma}$ , 即 $\check{\sigma}(x) = \sigma(-x)$ . 显然 $\sigma = (\check{\sigma})^{\checkmark}$ . 由 (5.30) 便得

$$
\langle u, \sigma \rangle = (u * \check {\sigma}) (0). \tag {5.31}
$$

下面讨论空间 $\mathcal{D}$ 以及 $\mathcal{D}'$ 中的恒等逼近.

定理5.12 设函数 $h \in \mathcal{D}_n$ ，并且

$$
\int_ {R ^ {n}} h (x) \mathrm{d} x = 1.
$$

令 $h_{\epsilon}(x) = \varepsilon^{-n}h(x / \varepsilon),\epsilon >0.$ 若 $u\in \mathcal{D}_n^{\prime},\varphi \in \mathcal{D}_n$ ，则有

(i) $\lim_{\varepsilon_j \to 0} \varphi * h_{\varepsilon_j} = \varphi$ (在 $\mathcal{D}_n$ 中);  
(ii) $\lim_{\varepsilon_j \to 0} u * h_{\varepsilon_j} = u$ (在 $\mathcal{D}_n^1$ 中).

证明 (i) 用 §1.5 的方法可证: 当 $\varepsilon_{j} \to 0$ 时, $\varphi * h_{\varepsilon_{j}}$ 的支集包含在一个固定的紧集中, 而且 $\varphi * h_{\varepsilon_{j}}$ 一致收敛于 $\varphi$ , 同时, $\varphi * h_{\varepsilon_{j}}$ 的各阶微商也一致收敛于 $\varphi$ 的相应阶微商.

(ii) 由(5.31)式及前面的(1)，对于 $\varphi \in \mathcal{D}_n$ ，我们有

$$
\begin{array}{l} \lim _ {\varepsilon_ {j} \rightarrow 0} \langle u * h _ {\varepsilon_ {j}}, \varphi \rangle = \lim _ {\varepsilon_ {j} \rightarrow 0} ((u * h _ {\varepsilon_ {j}}) * \check {\varphi}) (0) = \lim _ {\varepsilon_ {j} \rightarrow 0} \langle u, (\check {\varphi} * h _ {\varepsilon_ {j}}) ^ {\vee} \rangle \\ = \lim _ {\varepsilon_ {j} \rightarrow 0} \langle u, \varphi * \check {h} _ {\varepsilon_ {j}} \rangle = \langle u, \varphi \rangle . \\ \end{array}
$$

推论 5.13 空间 D 在 $D'$ 中稠密.

证明 设 $u \in \mathcal{D}_n'$ . 取一个函数 $h(x)$ 非负, 而且满足定理 5.12 中的条件, 令

$$
\varepsilon_ {j} = \frac {1}{j}, \quad u _ {j} = u * h _ {\varepsilon_ {j}}.
$$

又取一列函数 $g_{j} \in C^{\infty}(\mathbb{R}^{n})$ ，使得

$$
\begin{array}{l} g _ {j} (x) = 1, \quad | x | \leqslant j; \\ g _ {j} (x) = 0, \quad | x | \geqslant 2 j; \\ 0 \leqslant g _ {j} (x) \leqslant 1, \quad x \in R ^ {n}, \\ \end{array}
$$

则有

$$
\lim _ {j \rightarrow \infty} \langle g _ {j} u _ {j}, \varphi \rangle = \lim _ {j \rightarrow \infty} \langle u _ {j}, g _ {j} \varphi \rangle = \langle u, \varphi \rangle , \quad \varphi \in \mathcal {D} _ {n},
$$

其中第二个等式请读者作为练习自行验证（例如，可以证明 $\lim_{j\to \infty}g_j\varphi *h_{\varepsilon_j} = \varphi$ （在 $\mathcal{D}_n$ 中）).由定理5.11知 $u_{j}$ 是 $C^\infty$ 类的函数， $g_{j}\in C_0^\infty$ ，故 $g_{j}u_{j}\in \mathcal{D}$

## 习题

1. 试证明:由级数

$$
u (\varphi) = \sum_ {j = 1} ^ {\infty} (\mathrm{D} ^ {j} \varphi) (j), \quad \varphi \in \mathcal {D} (\boldsymbol {R}),
$$

定义了一个广义函数 $u \in \mathcal{D}'(R)$ , 它是无穷阶的.

2. 函数 $f(x) = \frac{\ln x}{x}$ 在 $(0, +\infty)$ 上局部可积，试证明：对一切 $\varphi \in \mathcal{D}(R)$ ，由公式

$$
\left(\frac {\ln | x |}{x}\right) (\varphi) = \lim _ {\varepsilon \rightarrow + 0} \left\{\int_ {- \infty} ^ {- \varepsilon} \frac {\ln | x |}{x} \varphi (x) d x + \int_ {\varepsilon} ^ {\infty} \frac {\ln | x |}{x} \varphi (x) d x \right\}
$$

定义了一个广义函数 $\left(\frac{\ln|x|}{x}\right) \in \mathcal{D}'(R)$ .

3. 设 $f(x) = H(x)\cos x, g(x) = H(x)\sin x$ ，其中 $H(x)$ 是 Heaviside 函数。试证明：

$$
f ^ {\prime} = \delta - g, \quad g ^ {\prime} = f.
$$

4. 试证明：在 $\mathcal{D}'(R)$ 中，

$$
(| x |) ^ {\prime} = \operatorname{sgn} x, \quad (| x |) ^ {\prime \prime} = 2 \delta .
$$

5. 设 $\psi$ 是一个紧支集连续函数, $\int_{\mathbb{R}} \psi \mathrm{d}x = 1$ . 试证明: 对于 $x_0 \in \mathbb{R}$ ,

$$
\lim _ {\varepsilon \to + 0} \frac {1}{\varepsilon} \psi \bigg (\frac {x - x _ {0}}{\varepsilon} \bigg) = \delta_ {x _ {0}} \quad (\text {在}   \mathcal {D} ^ {\prime} (R)   \text {中}).
$$

6. 设

$$
f _ {n} (x) = \frac {2 n ^ {3} x ^ {2}}{\pi (1 + n ^ {2} x ^ {2}) ^ {2}}, \quad x \in R,
$$

试证明:对每点 $x \in R, \lim_{n \to \infty} f_n(x) = 0$ , 及

$$
\lim _ {n \to \infty} f _ {n} = \delta \quad (\text {在}   \mathcal {D} ^ {\prime} (R)   \text {中}).
$$

7. 设在 $R$ 上定义

$$
f _ {\varepsilon} (x) = \left\{ \begin{array}{l l} 0, & | x | \geqslant \varepsilon , \\ \frac {1}{2 \varepsilon}, & | x | <   \varepsilon , \end{array} \right. \quad \varepsilon > 0,
$$

验证 $\int_{-\infty}^{\infty}f_{\varepsilon}(x)\mathrm{d}x = 1$ ，并且证明
$$
\lim _ {\varepsilon \to 0} f _ {\varepsilon} (0) = + \infty , \quad \lim _ {\varepsilon \to 0} f _ {\varepsilon} (x) = 0 (\text {对} x \neq 0),
$$

$$
\lim _ {\varepsilon \to 0} f _ {\varepsilon} = \delta \quad (\text {在}   \mathcal {D} ^ {\prime} (R)   \text {中}).
$$

8. 证明：

(1) $e^x\delta = \delta ;$   
(2) $x\delta' = -\delta$ ;

(3) $(\sin ax)\delta' = -a\delta$ .

9. 我们定义广义函数 $x^{-n}(n=1,2,\cdots)$ 如下: 对于 $\varphi \in D$ ,

$$
\begin{array}{l} \langle x ^ {- 2 m}, \varphi \rangle = \int_ {0} ^ {\infty} x ^ {- 2 m} \left\{\varphi (x) + \varphi (- x) - 2 [ \varphi (0) \right. \\ \left. \left. + \frac {x ^ {2}}{2 !} \varphi^ {\prime \prime} (0) + \dots + \frac {x ^ {2 m - 2}}{(2 m - 2) !} \varphi^ {2 m - 2} (0) \right] \right\} d x, \\ \langle x ^ {- 2 m - 1}, \varphi \rangle = \int_ {0} ^ {\infty} x ^ {- 2 m - 1} \left\{\varphi (x) - \varphi (- x) - 2 \left[ x \varphi^ {\prime} (0) \right. \right. \\ \left. \left. + \frac {x ^ {3}}{3 !} \varphi^ {\prime \prime \prime} (0) + \dots + \frac {x ^ {2 m - 1}}{(2 m - 1) !} \varphi^ {(2 m - 1)} (0) \right] \right\} d x, \\ \end{array}
$$

证明： $\frac{\mathrm{d}}{\mathrm{d}x} (x^{-1}) = -x^{-2}$ ；一般地，

$$
\frac {\mathrm{d}}{\mathrm{d} x} (x ^ {- n}) = - n x ^ {- n - 1}.
$$

10. 证明 Dirac 函数 $\delta$ 的支集只含原点，

$$
\operatorname{supp} \delta = \{0 \}.
$$

11. 设 $\Omega$ 是 $R^n$ 中的开集, 证明: $u$ 在 $\Omega$ 上为零当且仅当

$$
\operatorname{supp} u \subset \Omega^ {c},
$$

其中 $\Omega^{\iota}$ 是 $\Omega$ 的补集， $u \in \mathcal{D}'(R^n)$ .

12. 设 $u \in \mathcal{D}'(\Omega)$ 具有紧支集 $\pmb{K} \subset \Omega$ ，试证： $u$ 可以唯一地延拓成具有同样支集 $\pmb{K}$ 的广义函数 $\tilde{u} \in \mathcal{D}'(\pmb{R}^n)$ .

13. 求下述广义函数的支集： $\varphi \in \mathcal{D}(\pmb{R})$ ，

(1) $\langle u, \varphi \rangle = \int_{0}^{\infty} x^{2} \varphi(x) \mathrm{d}x$ ;   
(2) $\langle u, \varphi \rangle = \int_{0}^{1} e^{-1/x} \varphi(x) \mathrm{d}x$ ;

(3) $\langle u, \varphi \rangle = \int_{-1}^{1} e^{-1/(1 - x^2)} \varphi(x) \mathrm{d}x.$

14. 设 $h \in C_0(\mathbb{R}^n)$ , $\int_{\mathbb{R}^n} h \mathrm{d}x = 1, x_0 \in \mathbb{R}^n$ .

(1) 试证明：

$$
\lim _ {\varepsilon \rightarrow + 0} \frac {1}{\varepsilon^ {n}} h \left(\frac {x - x _ {0}}{\varepsilon}\right) = \delta_ {x _ {0}};
$$

(2) 令 $h_{\varepsilon}(x) = \varepsilon^{-n} h\left(\frac{x}{\varepsilon}\right), \varepsilon > 0.$ 若 $u \in \mathcal{D}_n'$ , 试证明:

$$
\lim _ {\varepsilon \to + 0} u * h _ {\varepsilon} = u \quad (\text {在}   \mathcal {D} _ {n} ^ {\prime}   \text {中}).
$$

15. 设 $\delta$ 是 Dirac 函数, $\delta'$ 是它的微商, $H$ 是 Heaviside 函数, 试计算: $(1 * \delta') * H$ 和 $1 * (\delta' * H)$ , 并验证二者不相等.

16. 若 $u \in \mathcal{D}'$ ，试证明：

$$
\delta_ {x _ {0}} * u = \tau_ {x _ {0}} u,
$$

其中

$$
\langle \tau_ {x _ {0}} u, \varphi \rangle = \langle u (x), \varphi (x + x _ {0}) \rangle , \quad \varphi \in \mathcal {D}.
$$

17. 设广义函数 $u$ 与函数 $\sigma$ 满足下述条件之一：

(i) $u \in \mathcal{D}'(R^n), \sigma \in C_0^\infty(R^n)$ ;

(ii) $u \in \mathcal{O}^{\prime}(R^{n}), \sigma \in C^{\infty}(R^{n})$ .

令

$$
h (\xi) = \langle u (x), \sigma (x + \xi) \rangle .
$$

试证明： $h(\xi)\in C^{\infty}(\mathbb{R}^{n})$

# 第六章 缓增广义函数及其 Fourier 变换

Fourier 变换是分析中一个很有效的工具, 因此在建立广义函数理论时, 有必要引进广义函数的 Fourier 变换概念, 容易想到, 定义广义函数的 Fourier 变换需要借助于基本函数的 Fourier 变换. 但基本函数空间 $\mathcal{D}$ 中的函数的 Fourier 变换一般来说不是紧支集的, 因此就不再属于 $\mathcal{D}$ , 它们组成其他空间. 为了使用方便起见, 这里不讨论空间 $\mathcal{D}$ 中函数的 Fourier 变换组成的空间, 我们介绍一个比 $\mathcal{D}$ 更广的速降函数空间 $\mathcal{S}$ , Fourier 变换是把 $\mathcal{S}$ 映到自身的一对一的连续线性映射. 由此可以建立缓增广义函数 ( $\mathcal{S}$ 上的广义函数) 的 Fourier 变换理论.

# § 6.1 速降函数及其 Fourier 变换

定义6.1 若 $f \in C^{\infty}(\mathbb{R})$ ，并且对于任意非负整数 $k$ 与 $N$ 都有

$$
\sup _ {r \in R} (1 + | x ^ {2} |) ^ {N} | D ^ {k} f (x) | <   \infty , \tag {6.1}
$$

就称 $f$ 是速降函数. 速降函数全体组成的线性空间记为 $\mathcal{S}(\pmb{R})$ , 或简记为 $\mathcal{S}$ .

按定义可知, 若 $f \in S$ , 对于每对非负整数 k 与 N, 都有常数 C, 使得

$$
\left| \mathrm{D} ^ {k} f (x) \right| \leqslant C (1 + | x | ^ {2}) ^ {- N}, \quad x \in R.
$$

由此可见 $f$ 以及它的各阶微商在无穷远处趋于零的速度比 $\vert x\vert$ 的任意次负幂都快，也就是说，它们在无穷远处急速下降到零，所以称 $f$ 为速降函数.

显然 $C_0^\infty (\pmb {R})$ 中的函数都是速降函数，又可以验证 $\mathrm{e}^{-|x|^2}$ 是速降函数.易见有以下的包含关系

$$
C _ {0} ^ {\infty} (\boldsymbol {R}) \subset \mathscr {S} (\boldsymbol {R}) \subset C ^ {\infty} (\boldsymbol {R}).
$$

为了定义 $\mathcal{S}$ 中的收敛性. 先在 $\mathcal{S}$ 中定义一列半范数 (实质上是范数) $p_N(\varphi)^{\textcircled{1}}$ : 设 $\varphi \in \mathcal{S}$ , 令

$$
p _ {N} (\varphi) = \sup _ {0 \leqslant k \leqslant N} \sup _ {x \in R} (1 + | x | ^ {2}) ^ {N} | D ^ {k} \varphi (x) |, \tag {6.2}
$$

$N = 0,1,2,\dots .$ 显然 $p_N(\varphi)\leqslant p_{N + 1}(\varphi).$

定义6.2 设 $\varphi_{j} \in \mathcal{S}$ , 如果有

$$
\lim _ {j \rightarrow \infty} p _ {N} (\varphi_ {j}) = 0, \quad N = 0, 1, 2, \dots
$$

成立，就称 $\varphi_{j}$ 在 $\mathcal{S}$ 中收敛到0，记为

$$
\lim _ {j \to \infty} \varphi_ {j} = 0 \quad (\text {在} \mathcal {S} \text {中}).
$$

如果 $\varphi \in \mathcal{S},\varphi_j\in \mathcal{S}$ ，并且 $\lim_{j\to \infty}(\varphi_j - \varphi) = 0$ （在 $\mathcal{S}$ 中），就称 $\varphi_{j}$ 在 $\mathcal{S}$ 中收敛到 $\varphi$ ，记为

$$
\lim _ {j \to \infty} \varphi_ {j} = \varphi \quad (\text {在} \mathcal {S} \text {中}).
$$

$\{\varphi_j\}$ 称为 $\mathcal{S}$ 中的基本列是指

$$
\lim _ { \begin{array}{c} {{j \to \infty}} \\ {{m \to \infty}} \end{array} } (\varphi_ {j} - \varphi_ {m}) = 0 \quad (\text {在} \mathcal {S} \text {中}).
$$

命题 6.1 S 中的基本列必是收敛列, 从而 S (按它的收敛性) 是完备的.

证明 若 $\{\varphi_j\}$ 是 $\mathcal{S}$ 中的基本列, 于是对每个非负整数 $N$ , 有 $p_N(\varphi_j - \varphi_m) \to 0 (j, m \to \infty)$ . 从而可知对每个非负整数 $k$ , 取 $N \geqslant k$ , 就有

$$
\sup _ {x \in R} | \mathrm{D} ^ {k} \varphi_ {j} (x) - \mathrm{D} ^ {k} \varphi_ {m} (x) | \leqslant p _ {N} (\varphi_ {j} - \varphi_ {m}) \rightarrow 0.
$$

由此推知 $\{\mathrm{D}^k\varphi_j(x)\}$ 有极限，记其极限为 $g_{k}(x)$ ，

$$
g _ {k} (x) = \lim _ {j \rightarrow \infty} \mathrm{D} ^ {k} \varphi_ {j} (x),
$$

并且 $\{\mathrm{D}^k\varphi_j(x)\}$ 在 $x\in R$ 上是一致收敛的.记

$$
\varphi (x) = g _ {0} (x).
$$

与命题 5.1 类似, 可用微积分基本定理证明 $\varphi$ 可微, 而且有

$$
\mathrm{D} \varphi (x) = \mathrm{D} g _ {0} (x) = g _ {1} (x) = \lim _ {j \rightarrow \infty} \mathrm{D} \varphi_ {j} (x),
$$

$$
\mathrm{D} ^ {k} \varphi (x) = g _ {k} (x) = \lim _ {j \rightarrow \infty} \mathrm{D} ^ {k} \varphi_ {j} (x).
$$

也就是说， $\varphi(x)$ 具有任意阶微商.

任意取定非负整数 $N$ ，对任给 $\varepsilon > 0$ ，存在 $n_0 = n_0(N)$ ，当 $j \geqslant n_0, m \geqslant n_0$ 时，有

$$
\begin{array}{l} (1 + | x | ^ {2}) ^ {N} \left| \mathrm{D} ^ {k} \varphi_ {j} (x) - \mathrm{D} ^ {k} \varphi_ {m} (x) \right| \\ \leqslant p _ {N} (\varphi_ {j} - \varphi_ {m}) <   \varepsilon , \quad x \in R, 0 \leqslant k \leqslant N. \\ \end{array}
$$

令 $m \to \infty$ ，便得

$$
(1 + | x | ^ {2}) ^ {N} \left| \mathrm{D} ^ {k} \varphi_ {j} (x) - \mathrm{D} ^ {k} \varphi (x) \right| \leqslant \varepsilon , \quad x \in R, 0 \leqslant k \leqslant N.
$$

从而，当 $j \geqslant n_0$ 时

$$
p _ {N} (\varphi_ {j} - \varphi) \leqslant \varepsilon .
$$

用三角不等式得

$$
p _ {N} (\varphi) \leqslant p _ {N} (\varphi_ {n _ {0}}) + p _ {N} (\varphi - \varphi_ {n _ {0}}) <   + \infty ,
$$

即知 $\varphi \in \mathcal{S}$ . 同时, 由 $\varepsilon$ 的任意性便知

$$
\lim _ {j \rightarrow \infty} p _ {N} (\varphi_ {j} - \varphi) = 0,
$$

再由 $N$ 的任意性，可得

$$
\lim _ {j \to \infty} \varphi_ {j} = \varphi \quad (\text {在} \mathcal {S} \text {中}).
$$

命题6.2 设 $Q$ 是多项式, $g \in \mathcal{S}$ , 则以下三个映射:

$$
\varphi \mapsto Q \varphi , \quad \varphi \mapsto g \varphi , \quad \varphi \mapsto \mathrm{D} \varphi
$$

是 $\mathcal{S}$ 映入 $\mathcal{S}$ 中的连续线性映射.

证明 若 $\varphi \in \mathcal{S}$ , 用 Leibniz 公式(5.10)可推知 $Q\varphi \in \mathcal{S}$ . 设 $\lim_{j \to \infty} \varphi_j = 0$ (在 $\mathcal{S}$ 中), 我们有

$$
\begin{array}{l} p _ {N} (Q \varphi_ {j}) = \sup _ {0 \leqslant k \leqslant N} \sup _ {\tau \in R} (1 + | x | ^ {2}) ^ {N} | D ^ {k} (Q \varphi_ {j}) (x) | \\ = \sup _ {0 \leqslant k \leqslant N} \sup _ {r \in R} (1 + | x | ^ {2}) ^ {N} \left| \sum_ {0 \leqslant m \leqslant k} c _ {k m} \left(\mathrm{D} ^ {k - m} Q\right) \left(\mathrm{D} ^ {m} \varphi_ {i}\right) \right| \\ \end{array}
$$

$$
\leqslant C p _ {N + l} (\varphi_ {j}),
$$

其中 $l$ 是多项式 $Q$ 的最高次幂数. 由此可推得

$$
\lim _ {j \to \infty} Q \varphi_ {j} = 0 \quad (\text {在} \mathcal {S} \text {中}).
$$

这表明映射 $\varphi \mapsto Q\varphi$ 是连续的. 其他两个映射类似可证.

若 $\varphi \in \mathcal{S}$ , 它显然属于 $L(R)$ , $\varphi$ 的 Fourier 变换是

$$
\hat {\varphi} (t) = \int_ {- \infty} ^ {\infty} \varphi (x) \mathrm{e} ^ {- 2 \pi i t x} \mathrm{d} x.
$$

有时也用算子 $\mathcal{F}$ 来表示 Fourier 变换： $\mathcal{F}\varphi = \hat{\varphi}$ . 关于 Fourier 变换的基本性质见 §3.1. 根据定理 3.5 可知：若 $\varphi \in \mathcal{S}$ ，有

$$
(\mathbf {D} ^ {k} \varphi) ^ {\wedge} (t) = (2 \pi \mathrm{i} t) ^ {k} \hat {\varphi} (t), \tag {6.3}
$$

$$
(\mathrm{D} ^ {k} \hat {\varphi}) (t) = ((- 2 \pi \mathrm{i} x) ^ {k} \varphi (x)) ^ {\wedge} (t), \tag {6.4}
$$

其中 k 是正整数.

定理 6.3 Fourier 变换 $F\varphi$ 是 S 映入 S 中的连续线性映射, 它是一对一的满映射. F 的逆映射也连续, 并且有下式成立:

$$
\mathcal {F} ^ {4} \varphi = \varphi , \quad \varphi \in \mathcal {S}.
$$

证明 设 $\varphi \in \mathcal{S}$ , 取 $N$ 适当大使得

$$
\int_ {R} \frac {\mathrm{d} x}{(1 + | x | ^ {2}) ^ {N}} <   + \infty ,
$$

(在一维情形,这里取 N=1 便可),我们有

$$
\begin{array}{l} \left| \hat {\varphi} (t) \right| \leqslant \int_ {R} | \varphi (x) | \mathrm{d} x \\ \leqslant p _ {N} (\varphi) \left(\int_ {\mathbb {R}} \frac {\mathrm{d} x}{(1 + | x | ^ {2}) ^ {N}}\right) = C _ {N} p _ {N} (\varphi). \tag {6.5} \\ \end{array}
$$

由(6.1)及(6.4)可知 $\hat{\varphi}$ 无限次可微. 只要再验证对 $\hat{\varphi}$ 有(6.1)式成立, 便可知 $\hat{\varphi}$ 为速降函数. 对非负整数 $k, m$ , 令 $g = (-2\pi \mathrm{i}x)^{k}\varphi$ , 根据命题6.2便知 $g \in \mathcal{S}$ , 而且 $\left(1 - \frac{1}{4\pi^2}\mathrm{D}^2\right)^m g \in \mathcal{S}$ . 由(6.4)及(6.3)式可推得以下等式:

$$
\mathrm{D} ^ {k} \hat {\varphi} = \hat {g},
$$

$$
(1 + | t | ^ {2}) \mathrm{D} ^ {k} \hat {\varphi} (t) = (1 + | t | ^ {2}) \hat {g} (t) = \left(\left(1 - \frac {1}{4 \pi^ {2}} \mathrm{D} ^ {2}\right) g\right) ^ {\wedge} (t),
$$

$$
(1 + | t | ^ {2}) ^ {m} \mathrm{D} ^ {k} \hat {\varphi} (t) = \left(\left(1 - \frac {1}{4 \pi^ {2}} \mathrm{D} ^ {2}\right) ^ {m} g\right) ^ {\wedge} (t).
$$

于是由(6.5)式可推知对于 $\hat{\varphi}$ 有(6.1)式成立：

$$
\begin{array}{l} \sup _ {t \in R} (1 + | t | ^ {2}) ^ {m} \left| D ^ {k} \hat {\varphi} (t) \right| = \sup _ {t \in R} \left| \left(\left(1 - \frac {1}{4 \pi^ {2}} D ^ {2}\right) ^ {m} g\right) ^ {\wedge} (t) \right| \\ \leqslant C _ {N} p _ {N} \left(\left(1 - \frac {1}{4 \pi^ {2}} \mathrm{D} ^ {2}\right) ^ {m} g\right) \leqslant C _ {N} ^ {\prime} p _ {N + 2 m} ((- 2 \pi 1 x) ^ {k} \varphi) \\ \leqslant C _ {N} ^ {\prime \prime} p _ {N + 2 m + k} (\varphi) <   + \infty . \tag {6.6} \\ \end{array}
$$

因此 $\hat{\varphi} \in \mathcal{S}$ . 现设 $\lim_{j \to \infty} \varphi_j = 0$ (在 $\mathcal{S}$ 中), 由(6.6)可得

$$
\begin{array}{l} p _ {m} \left(\hat {\varphi} _ {j}\right) = \sup _ {0 \leqslant k \leqslant m} \sup _ {t \in R} (1 + | t | ^ {2}) ^ {m} \left| D ^ {k} \hat {\varphi} _ {j} (t) \right| \\ \leqslant C _ {N} ^ {\prime \prime} p _ {N + 2 m + m} (\varphi_ {j}), \\ \end{array}
$$

于是由 $\lim_{j\to\infty}p_{m}(\varphi_{j})=0(m=0,1,2,\cdots)$ 推知 $\lim_{j\to\infty}p_{m}(\hat{\varphi}_{j})=0(m=0,1,2,\cdots)$ ，即有 $\lim_{j\to\infty}\hat{\varphi}_{j}=0$ （在S中）。这就证明了F是S映入S中的连续线性映射。

对于 $\varphi \in \mathcal{S}$ , 由前面的证明知 $\hat{\varphi} \in \mathcal{S}$ , 根据定理3.13便知反演公式

$$
\varphi (x) = \int_ {- \infty} ^ {\infty} \hat {\varphi} (t) \mathrm{e} ^ {2 \pi i x t} \mathrm{d} t
$$

对一切 $x \in \mathbb{R}$ 成立. 如果 $f \in \mathcal{S}, \hat{f} = 0$ , 则由反演公式推知 $f = 0$ . 这表明映射 $\mathcal{F}$ 是一对一的. 又由反演公式得知

$$
(\mathcal {F} ^ {2} \varphi) (x) = \varphi (- x),
$$

从而有 $(\mathcal{F}^4\varphi)(x) = \varphi (x)$ . 由此可推知 $\mathcal{F}$ 是 $\mathcal{S}$ 映入 $\mathcal{S}$ 的满映射，并且 $\mathcal{F}$ 的逆映射 $\mathcal{F}^{-1} = \mathcal{F}^3$ . 于是由 $\mathcal{F}$ 连续便推知 $\mathcal{F}^{-1}$ 连续.

定理6.4 若 $f, g \in \mathcal{S}$ , 则有

(1) $f*g\in \mathcal{S}$ ;   
(11) $(fg)^{\wedge} = \hat{f} * \hat{g}$ .

证明 (i) 设 $f, g \in \mathcal{S}$ , 则 $\hat{f}, \hat{g} \in \mathcal{S}$ , 由命题6.2知 $\hat{f} \cdot \hat{g} \in$

$\mathcal{S}$ ，由(3.10)式及定理6.3知

$$
f * g = \mathcal {F} ^ {- 1} (\hat {f} \cdot \hat {g}) \in \mathscr {S}.
$$

(ii) 用 $\hat{f}$ 与 $\hat{g}$ 代替(3.10)中的 $f$ 与 $g$ , 得到

$$
\mathcal {F} (\hat {f} * \hat {g}) = \mathcal {F} ^ {2} f \cdot \mathcal {F} ^ {2} g = (f \cdot g) (- x) = \mathcal {F} ^ {2} (f g).
$$

对上式两边作用算子 $\mathcal{F}^{-1}$ , 即可得到结论.

# § 6.2 缓增广义函数

定义 6.3 定义在 $\mathcal{S}(\boldsymbol{R})$ 上的连续线性泛函称为 $\mathcal{S}(\boldsymbol{R})$ 上的广义函数, 又称为缓增广义函数 (tempered distribution). 全体缓增广义函数组成的空间记为 $\mathcal{S}'(\boldsymbol{R})$ , 或简记为 $S'$ .

$\mathcal{D}$ 与 $\mathcal{S}$ 只看作函数集合显然有包含关系 $\mathcal{D} \subset \mathcal{S}$ . 可以证明按照空间的收敛性, 它们也有如下关系:

命题6.5 (i) $\mathcal{D}$ 中的收敛列必是 $\mathcal{S}$ 中的收敛列；

(ii) $\mathcal{D}$ 在 $\mathcal{S}$ 中稠密.

证明 (1) 设 $\lim_{j\to \infty}\varphi_j = 0$ （在 $\mathcal{D}$ 中），则必存在紧集 $K$ ，使 $\operatorname {supp}(\varphi_j)\subset K$ ，注意到 $(1 + |x|^2)^N$ 在紧集 $K$ 上是有界的.由此得到

$$
p _ {N} \left(\varphi_ {j}\right) = \sup _ {0 \leqslant k \leqslant N} \sup _ {x \in K} (1 + | x | ^ {2}) ^ {N} \left| D ^ {k} \varphi_ {j} (x) \right|
$$

$$
\leqslant C _ {N} (\boldsymbol {K}) \sup _ {0 \leqslant k \leqslant N} \sup _ {x \in \boldsymbol {K}} | D ^ {k} \varphi_ {j} (x) |.
$$

由 $\varphi_{j}$ 在 D 中收敛于 0 便知当 $j\to\infty$ 时，上式右端趋向于 $0(N=0,1,2,\cdots)$ . 由此便知

$$
\lim _ {j \to \infty} \varphi_ {j} = 0 \quad (\text {在} \mathcal {S} \text {中}).
$$

(ii) 对任给 $\varphi \in \mathcal{S}$ , 要寻找 $\mathcal{D}$ 中的函数逼近它, 为此, 根据推论1.15选取一个函数 $\psi \in \mathcal{D}$ , 使得

$$
0 \leqslant \psi (x) \leqslant 1, \quad x \in R,
$$

$$
\psi (x) = 1, \quad | x | \leqslant 1.
$$

对以上给定的 $\varphi \in \mathcal{S}$ ，作函数

$$
f _ {r} (x) = \varphi (x) \psi (r x), \quad x \in R, r > 0,
$$

易知 $f_{r} \in \mathcal{D}$ . 下面证明 $\lim_{r \to 0} f_{r} = \varphi$ (在 $\mathcal{S}$ 中). 我们有

$$
(\varphi - f _ {r}) (x) = \varphi (x) [ 1 - \psi (r x) ].
$$

由 $\psi$ 的取法可知：当 $|x| < \frac{1}{r}$ 时， $\psi(rx) = 1$ 。从而在 $|x| < \frac{1}{r}$ 中，有

$$
\mathrm{D} ^ {m} [ 1 - \psi (r x) ] = 0 \quad (m = 0, 1, 2, \dots).
$$

又对于任意非负整数 $k \leqslant N$ ，有

$$
(1 + | x | ^ {2}) ^ {N} | \mathrm{D} ^ {k} \varphi (x) | \leqslant (1 + | x | ^ {2}) ^ {- 1} p _ {N + 1} (\varphi).
$$

于是，设 $r < 1$

$$
\begin{array}{l} \sup _ {0 \leqslant k \leqslant N} \sup _ {x \in R} (1 + | x | ^ {2}) ^ {N} \left| D ^ {k} (\varphi - f _ {r}) (x) \right| \\ = \sup _ {0 \leqslant k \leqslant N} \sup _ {| x | \geqslant \frac {1}{r}} (1 + | x | ^ {2}) ^ {N} \left| D ^ {k} \{\varphi (x) [ 1 - \psi (r x) ] \} \right| \\ \leqslant \sup _ {0 \leqslant k \leqslant N} \sup _ {| z | \geqslant \frac {1}{r}} (1 + | x | ^ {2}) ^ {N} \sum_ {m \leqslant k} c _ {k m} | (\mathrm{D} ^ {k - m} \varphi) (x) | r ^ {m} | \mathrm{D} ^ {m} [ 1 - \psi (r x) ] | \\ \leqslant \sup _ {0 \leqslant k \leqslant N} \sup _ {| z | \geqslant \frac {1}{r}} (1 + | x | ^ {2}) ^ {- 1} p _ {N + 1} (\varphi) \left[ 1 + \sum_ {m \leqslant k} c _ {k m} | D ^ {m} \psi (r x) | \right] \\ \leqslant C r ^ {2} p _ {N + 1} (\varphi) \sup _ {0 \leqslant m \leqslant N} \sup _ {x \in R} | D ^ {m} \psi (x) |. \\ \end{array}
$$

当 $r \to 0$ 时，上式右端趋向于0，即有

$$
\lim _ {r \rightarrow 0} p _ {N} (\varphi - f _ {r}) = 0 \quad (N = 0, 1, 2, \dots).
$$

因此

$$
\lim _ {r \to 0} f _ {r} = \varphi (\text {在} \mathcal {S} \text {中}).
$$

定理6.6 缓增广义函数在 $\mathcal{D}$ 上的限制是 $\mathcal{D}$ 上的广义函数. 两个不同的缓增广义函数在 $\mathcal{D}$ 上的限制是 $\mathcal{D}$ 上两个不同的广义函数. 如果把缓增广义函数与它在 $\mathcal{D}$ 上的限制看作同一个元, 则 $\mathcal{S}'$ 等同于 $\mathcal{D}'$ 的一个子空间, 即有 $\mathcal{S}' \subset \mathcal{D}'$ .

证明 设 $u \in \mathcal{S}'$ ，它在 $\mathcal{D}$ 上的限制是 $\mathcal{D}$ 上的线性泛函，设 $\lim_{j \to \infty} \varphi_j = 0$ （在 $\mathcal{D}$ 中），根据命题6.5可知 $\lim_{j \to \infty} \varphi_j = 0$ （在 $\mathcal{S}$ 中），因此有

$$
\lim _ {j \rightarrow \infty} u (\varphi_ {j}) = 0.
$$

这表明 $u$ 在 $\mathcal{D}$ 上连续，即 $u$ 在 $\mathcal{D}$ 上的限制是 $\mathcal{D}$ 上的广义函数。因为 $\mathcal{D}$ 在 $\mathcal{S}$ 上稠密，所以 $\mathcal{S}'$ 中两个不同的广义函数在 $\mathcal{D}$ 上的限制不能是 $\mathcal{D}$ 上相同的广义函数。

以上讨论表明：缓增广义函数实际上是 $\mathcal{D}$ 上这样的广义函数 $u$ ，它能连续地延拓到 $\mathcal{S}$ 上去。但并不是每个 $\mathcal{D}$ 上的广义函数都能连续延拓到 $\mathcal{S}$ 上去的。例如函数 $f(x) = \mathrm{e}^{x^2}$ 局部可积，它按(5.1)式确定 $\mathcal{D}$ 上一个广义函数，这个广义函数不能延拓成为 $\mathcal{S}$ 上的连续线性泛函（请读者自行验证）。

与 $\mathcal{D}'$ 类似，可以在 $\mathcal{S}'$ 中定义收敛性如下：

定义 6.4 设 $u, u_{j} \in S'$ ，若对每个 $\varphi \in S$ ，有

$$
\lim _ {j \rightarrow \infty} u _ {j} (\varphi) = u (\varphi)
$$

成立，就称缓增广义函数列 $\{u_{j}\}$ 收敛到 $u$ 。记为

$$
\lim _ {j \to \infty} u _ {j} = u \quad (\text {在} \mathcal {S} ^ {\prime} \text {中}).
$$

可以证明 $S'$ 在这样定义的收敛意义下是完备的. 证明省略.

例 1 $\delta$ 函数是缓增广义函数.

对于 $\varphi \in \mathcal{S}, \delta(\varphi) = \varphi(0)$ 显然是 $\mathcal{S}$ 上的线性泛函. 若 $\lim_{j \to \infty} \varphi_j = 0$ (在 $\mathcal{S}$ 中), 因有

$$
\left| \delta (\varphi_ {j}) \right| = \left| \varphi_ {j} (0) \right| \leqslant p _ {0} (\varphi_ {j}) \rightarrow 0 \quad (j \rightarrow \infty),
$$

即 $\lim_{j\to \infty}\delta (\varphi_j) = 0$ ，因此 $\delta$ 连续.故 $\delta \in \mathcal{S}^{\prime}$

定理 6.7 设 u 是 S 上的线性泛函, 则 u 在 S 上连续的充分必要条件是存在一个常数 C 与一个非负整数 N, 使得

$$
\left| u (\varphi) \right| \leqslant C p _ {N} (\varphi), \quad \varphi \in \mathcal {S}. \tag {6.7}
$$

证明 充分性显然. 现在用反证法证明必要性. 设 $u$ 连续, 但不存在 $C$ 与 $N$ 使 (6.7) 式成立. 那么, 对任意 $m$ , 必有 $\psi_{m} \in \mathcal{S}$ , 使得

$$
u (\psi_ {m}) > m p _ {m} (\psi_ {m}).
$$

令 $\varphi_{m} = \psi_{m} / |u(\psi_{m})|$ . 易见 $\varphi_{m} \in \mathcal{S}$ , 并且

$$
p _ {m} (\varphi_ {m}) = p _ {m} (\psi_ {m}) / | u (\psi_ {m}) | <   \frac {1}{m}.
$$

任给 $k \leqslant m$ ，由 $p_k(\varphi)$ 的上升性质可知

$$
p _ {k} (\varphi_ {m}) \leqslant p _ {m} (\varphi_ {m}) <   \frac {1}{m}.
$$

因此对任意固定的 $k, \lim_{m \to \infty} p_k(\varphi_m) = 0$ ，即得 $\lim_{m \to \infty} \varphi_m = 0$ （在 $\mathcal{S}$ 中）。由 $u$ 连续，便得

$$
\lim _ {m \rightarrow \infty} u (\varphi_ {m}) = 0.
$$

但

$$
\left| u \left(\varphi_ {m}\right) \right| = \left| u \left(\psi_ {m}\right) \right| / \left| u \left(\psi_ {m}\right) \right| = 1,
$$

两式矛盾. 从而必有 $C$ 与 $N$ 使(6.7)式成立.

例 2 设 $\mu$ 是 R 上的正 Borel 测度, 如果对于某个非负整数 k, 有

$$
\int_ {R} (1 + | x | ^ {2}) ^ {- k} \mathrm{d} \mu <   \infty ,
$$

则由下式

$$
u (\varphi) = \int_ {R} \varphi \mathrm{d} \mu , \quad \varphi \in \mathcal {S}
$$

确定一个缓增广义函数. 我们只需证明 $u$ 的连续性: 若 $\lim_{j \to \infty} \varphi_j = 0$ (在 $\mathcal{S}$ 中), 则

$$
\begin{array}{l} \left| u \left(\varphi_ {j}\right) \right| = \left| \int_ {R} (1 + | x | ^ {2}) ^ {k} \varphi_ {j} (x) (1 + | x | ^ {2}) ^ {- k} \mathrm{d} \mu \right| \\ \leqslant \left(\int_ {R} (1 + | x | ^ {2}) ^ {- k} \mathrm{d} \mu\right) p _ {k} (\varphi_ {j}) \rightarrow 0 \quad (j \rightarrow \infty). \\ \end{array}
$$

故 $u \in \mathcal{S}'$ .

例3 设 $f$ 是 $\pmb{R}$ 上的可测函数. 如果存在某个 $p(1 \leqslant p < \infty)$ , 以及某个非负整数 $N$ , 使得

$$
\int_ {R} \mid (1 + \mid x \mid^ {2}) ^ {- N} f (x) \mid^ {p} \mathrm{d} x = C <   \infty , \tag {6.8}
$$

则由下式

$$
u (\varphi) = \int_ {\mathbb {R}} f (x) \varphi (x) \mathrm{d} x, \quad \varphi \in \mathcal {S} \tag {6.9}
$$

确定一个缓增广义函数. 我们用定理 6.7 验证 u 的连续性. 设 p > 1, 由 Hölder 不等式及 (6.8) 式得知对一切 $\varphi \in S$ ,

$$
| u (\varphi) | = \left| \int_ {R} (1 + | x | ^ {2}) ^ {N} \varphi (x) \cdot (1 + | x | ^ {2}) ^ {- N} f (x) d x \right|
$$

$$
\leqslant C ^ {1 / p} \left\{\int_ {R} | (1 + | x | ^ {2}) ^ {N} \varphi (x) | ^ {q} d x \right\} ^ {1 / q}
$$

$$
\leqslant C ^ {1 / q} \left\{\int_ {R} (1 + | x | ^ {2}) ^ {- q} d x \right\} ^ {1 / q} p _ {N + 1} (\varphi),
$$

其中 $q$ 是 $p$ 的共轭指标， $\frac{1}{p} +\frac{1}{q} = 1$ ；设 $p = 1$ ，有

$$
\left| u (\varphi) \right| \leqslant \left(\int_ {R} (1 + | x | ^ {2}) ^ {- N} f (x) | \mathrm{d} x\right) p _ {N} (\varphi) \leqslant C p _ {N} (\varphi).
$$

由定理 6.7 便知 $u \in S'$ .

特别, 若 $f \in L^{p}(\mathbb{R})(1 \leqslant p \leqslant \infty)$ , 有 $N = 0$ 使 (6.8) 式成立, 所以 $f$ 按 (6.9) 式确定一个缓增广义函数; 任一个多项式显然能取到 $N$ 使 (6.8) 式成立, 所以多项式也可确定一个缓增广义函数; 若可测函数 $f$ 能被某个多项式所控制:

$$
\left| f (x) \right| \leqslant C (1 + | x | ^ {2}) ^ {m}, \quad x \in R,
$$

则 $f$ 也确定一个缓增广义函数.

例4 设 $f \in C^{\infty}(\mathbb{R})$ ，并且对于每个非负整数 $k$ ，存在常数 $C_k$ 以及非负整数 $N_k$ ，使得

$$
\left| \mathrm{D} ^ {k} f (x) \right| \leqslant C _ {k} (1 + | x | ^ {2}) ^ {N _ {k}}, \quad x \in R,
$$

就称 $f$ 是(在无穷远处)慢增的 $C^\infty$ 函数. 这样的函数全体组成的空间记为 $\mathcal{D}_M(R)$ . 由例3可知, 每个 $f \in \mathcal{D}_M(R)$ 确定一个缓增广义函数.

可以验证：若 $f \in \mathcal{D}_M(\pmb{R})$ ，映射

$$
\varphi \mapsto f \varphi
$$

是由 $\mathcal{S}$ 映入 $\mathcal{S}$ 中的连续线性映射. 因此可以定义 $\mathcal{D}_M(\pmb{R})$ 中函数 $f$ 与缓增广义函数 $u \in \mathcal{S}'$ 的乘法如下：

$$
(f u) (\varphi) = u (f \varphi), \quad \varphi \in \mathcal {S} (\boldsymbol {R}).
$$

这样定义的 $fu \in \mathcal{S}'$ (请读者自行验证).

例5 设 $f(x) = (\cos e^x)' = -\mathrm{e}^x\sin e^x$ . $f$ 不是慢增函数, 但它可以定义一个 $\mathcal{S}$ 上的广义函数:

$$
\langle f, \varphi \rangle = - \int_ {R} (\mathrm{cose} ^ {x}) \varphi^ {\prime} (x) \mathrm{d} x, \quad \varphi \in \mathcal {S}. \tag {6.10}
$$

它显然是 $\mathcal{S}$ 上的线性泛函，因为有

$$
| \langle f, \varphi \rangle | \leqslant \int_ {R} | \varphi^ {\prime} (x) | \mathrm{d} x \leqslant \left(\int_ {R} \frac {1}{1 + | x | ^ {2}} \mathrm{d} x\right) p _ {1} (\varphi), \quad \varphi \in \mathcal {S}.
$$

由定理 6.7 可知它是连续的, 亦即由 (6.10) 式定义的 $f \in \mathcal{S}'$ .

例6 我们记Dirac $\delta$ 函数为

$$
\delta (\varphi) = \langle \delta (x), \varphi (x) \rangle = \varphi (0),
$$

并且对于 $x_0 \in R$

$$
\delta_ {x _ {0}} (\varphi) = \langle \delta (x - x _ {0}), \varphi (x) \rangle = \varphi (x _ {0}).
$$

令

$$
u (x) = \sum_ {m = 1} ^ {\infty} \delta (x - m),
$$

不难证明 $u$ 是缓增广义函数，因为有

$$
\mid \langle u, \varphi \rangle \mid = \left| \sum_ {m = 1} ^ {\infty} \varphi (m) \right| \leqslant \left(\sum_ {m = 1} ^ {\infty} \frac {1}{1 + m ^ {2}}\right) p _ {1} (\varphi), \quad \varphi \in \mathscr {S}.
$$

函数 $\mathrm{e}^{x^2}\in C^\infty (\mathbb{R})$ ，但 $\mathrm{e}^{\tau^2}u(x)$ 不是缓增广义函数.这是因为：取 $\varphi (x) = \mathrm{e}^{-x^2}\in \mathcal{S}$

$$
\langle \mathrm{e} ^ {x ^ {2}} u (x), \varphi (x) \rangle = \langle u (x), \mathrm{e} ^ {x ^ {2}} \varphi (x) \rangle = 1 + 1 + \dots + 1 + \dots ,
$$

这个级数不收敛, 不能给出这个泛函的值. 可见不能一般地定义 $C^\infty$ 函数与缓增广义函数的乘法.

如果看作 $u \in \mathcal{D}'$ ，却可以推知 $\mathrm{e}^{x^2} u(x) \in \mathcal{D}'$ 。因为任给 $\varphi \in \mathcal{D}$ ， $\varphi$ 有紧支集，

$$
\langle \mathrm{e} ^ {x ^ {2}} u (x), \varphi (x) \rangle = \sum_ {m = 1} ^ {\infty} \mathrm{e} ^ {m ^ {2}} \varphi (m),
$$

上式右端只含有有限多个非零项，用定理5.2可以证明 $\mathrm{e}^{x^2}u(x)$ 是

连续的.

# § 6.3 缓增广义函数的 Fourier 变换

若 $f \in L(R)$ , 根据定理3.3得知有乘法公式

$$
\int_ {R} \hat {f} \varphi \mathrm{d} x = \int_ {R} f \hat {\varphi} \mathrm{d} x
$$

对一切 $\varphi \in \mathcal{S}$ 成立. 类似地, 若 $f \in L^{2}(\pmb{R})$ , 由 Plancherel 定理可知上式也对一切 $\varphi \in \mathcal{S}$ 成立 (见(3.45)式). 由这个等式可以引导出缓增广义函数 Fourier 变换的定义.

定义 6.5 设 $u \in S'$ ，定义 u 的 Fourier 变换 $\hat{u}$ 为

$$
\hat {u} (\varphi) = u (\hat {\varphi}), \quad \varphi \in \mathcal {S}.
$$

由定理6.3知 $\varphi \mapsto \hat{\varphi}$ 是 $\mathcal{S}$ 映入 $\mathcal{S}$ 中的连续线性映射. 按假定 $u \in \mathcal{S}'$ , 即 $u$ 在 $\mathcal{S}$ 上连续. 由此推知 $\hat{u}$ 在 $\mathcal{S}$ 上连续, 即 $\hat{u} \in \mathcal{S}'$ .

若 $f \in L(R)$ , 按定义 6.5 以及 (6.9) 式, 由 $f$ 所确定的缓增广义函数 $u_{f}$ 的 Fourier 变换 $\hat{u}_{f}$ 与作为 $L$ 函数的 Fourier 变换 $\hat{f}$ 所确定的缓增广义函数 $u_{\hat{f}}$ 是相同的:

$$
\hat {u} _ {f} (\varphi) = u _ {f} (\hat {\varphi}) = \int_ {R} f \hat {\varphi} d x = \int_ {R} \hat {f} \varphi d x = u _ {\hat {f}} (\varphi), \quad \forall \varphi \in \mathscr {S},
$$

即

$$
\hat {u} _ {f} = u _ {\hat {f}}. \tag {6.11}
$$

若 $f \in L^{2}(\mathbb{R})$ ，同样有(6.11)式。

由 $\mathcal{S}$ 中函数的Fourier变换的优美性质(见定理6.3)可以推知缓增广义函数也有类似的性质.

定义 6.6 若 $u \in S'$ , u 的反射 $\check{u}$ 定义为

$$
\check {u} (\varphi) = u (\check {\varphi}), \quad \varphi \in \mathcal {S},
$$

其中函数 $\varphi$ 的反射(函数) $\check{u}$ 为

$$
\check {u} (x) = \varphi (- x).
$$

定理 6.8 Fourier 变换 $\mathcal{F}u=\hat{u}$ 是 $S'$ 映入 $S'$ 的连续线性映射, 它是一对一的满映射, 并且

$$
\mathscr {F} ^ {2} u = \check {u}, \quad u \in \mathscr {S} ^ {\prime}, \tag {6.12}
$$

$$
\mathcal {F} ^ {4} u = u, \quad u \in \mathscr {S} ^ {\prime}. \tag {6.13}
$$

$\mathcal{F}$ 的逆映射也连续.

证明 设 $\mathcal{S}'$ 中元列 $\{u_j\}$ 收敛到 $u \in \mathcal{S}'$ ，即 $\lim_{j \to \infty} u_j(\varphi) = u(\varphi)$ ， $\forall \varphi \in \mathcal{S}$ ，则

$$
\lim _ {j \rightarrow \infty} \mathscr {S} u _ {j} (\varphi) = \lim _ {j \rightarrow \infty} u _ {j} (\hat {\varphi}) = u (\hat {\varphi}) = \hat {u} (\varphi), \quad \forall \varphi \in \mathscr {S},
$$

即 $\lim_{j\to \infty}\dot{u}_j = \hat{u}$ 因此 $\mathcal{S}$ 是 $\mathcal{S}'$ 映入 $\mathcal{S}'$ 的连续线性映射.

下面证明(6.12)式,它实质上是函数的Fourier变换的反演公式的推广.由定理6.3可知对于 $\varphi \in \mathcal{S}$ ,有

$$
\mathscr {F} ^ {2} \varphi = \check {\varphi}, \quad \mathscr {F} ^ {4} \varphi = \varphi .
$$

从而对一切 $\varphi \in \mathcal{S}$

$$
(\mathcal {F} ^ {2} u) (\varphi) = u (\mathcal {F} ^ {2} \varphi) = u (\check {\varphi}) = \check {u} (\varphi).
$$

这就是(6.12)式. 类似可证(6.13)式. 由(6.13)式易知 $\mathcal{F}^{-1} = \mathcal{F}^{3}$ . 由 $\mathcal{F}$ 连续推知 $\mathcal{F}^{-1}$ 连续.

为了定义广义函数的平移,先看函数 $\varphi$ 的平移是

$$
(\tau_ {h} \varphi) (x) = \varphi (x - h).
$$

再看到若 $f$ 可积，有

$$
\begin{array}{l} \langle \tau_ {h} f, \varphi \rangle = \int_ {R} f (x - h) \varphi (x) d x = \int_ {R} f (x) \varphi (x + h) d x \\ = \langle f, \tau_ {- h} \varphi \rangle . \\ \end{array}
$$

定义 6.7 若 $u \in S'$ ，对于 $h \in R, u$ 的平移 $\tau_{h}u$ 定义为

$$
(\tau_ {h} u) (\varphi) = u (\tau_ {- h} \varphi), \quad \varphi \in \mathcal {S}.
$$

定理6.9 设 $u \in \mathcal{S}'$ ，则有

$$
\left(\mathrm{D} ^ {k} u\right) ^ {\wedge} = (2 \pi 1 t) ^ {k} \hat {u}, \tag {6.14}
$$

$$
\mathrm{D} ^ {k} \hat {u} = ((- 2 \pi \mathrm{i} x) ^ {k} u) ^ {\wedge}, \tag {6.15}
$$

$$
\left(\tau_ {h} u\right) ^ {\wedge} = \mathrm{e} ^ {- 2 \pi \mathrm{i} h t} \hat {u}, \tag {6.16}
$$

$$
\tau_ {h} \hat {u} = \left(\mathrm{e} ^ {2 \pi \mathrm{i} h x} u\right) ^ {\wedge}, \tag {6.17}
$$

其中 k 为非负整数, $h \in R$ .

证明 根据对于函数 $\varphi \in \mathcal{S}$ 有类似等式以及用有关定义便可推出.例如证明(6.14)式：根据定义及(6.4)式，对 $\varphi \in \mathcal{S}$ 有

$$
\begin{array}{l} \left(\mathrm{D} ^ {k} u\right) ^ {\wedge} (\varphi) = \left(\mathrm{D} ^ {k} u\right) (\hat {\varphi}) = (- 1) ^ {k} u \left(\mathrm{D} ^ {k} \hat {\varphi}\right) \\ = (- 1) ^ {k} u \left(\left((- 2 \pi \mathrm{i} t) ^ {k} \varphi\right) ^ {\wedge}\right) \\ = (- 1) ^ {k} \hat {u} ((- 2 \pi 1 t) ^ {k} \varphi) \\ = ((2 \pi \mathrm{i} t) ^ {k} \hat {u}) (\varphi). \\ \end{array}
$$

又如证明(6.16)式：根据定义及定理3.1(v)，对 $\varphi \in \mathcal{S}$ 有

$$
\left(\tau_ {h} u\right) ^ {\wedge} (\varphi) = \left(\tau_ {h} u\right) (\hat {\varphi}) = u \left(\tau_ {- h} \hat {\varphi}\right) = u \left(\left(e ^ {- 2 m h t} \varphi\right) ^ {\wedge}\right)
$$

$$
= \hat {u} \left(\mathrm{e} ^ {- 2 \pi \mathrm{i} h t} \varphi\right) = \left(\mathrm{e} ^ {- 2 \pi \mathrm{i} h t} \hat {u}\right) (\varphi).
$$

其余两式请读者自行证明.

又由(6.14)与(6.15)式可以推知,对于多项式 $P(x)$ ,有

$$
(P (\mathrm{D}) u) ^ {\wedge} = P (2 \pi \mathrm{i} t) \hat {u}, \tag {6.18}
$$

$$
P (\mathrm{D}) \hat {u} = (P (- 2 \pi \mathrm{i} x) u) ^ {\wedge}. \tag {6.19}
$$

# § 6.4 Fourier 变换的例子

上节已经给出缓增广义函数的 Fourier 变换的定义. 至于怎样求出具体的缓增广义函数的 Fourier 变换, 下面将介绍一些例子.

为简便起见,今后把由函数 f 所确定的广义函数仍记作 f.

例 1 $\hat{1}=\delta,\hat{\delta}=1.$

这里 1 表示函数值恒为 1 的函数所确定的广义函数, 即

$$
1 (\varphi) = \langle 1, \varphi \rangle = \int_ {R} \varphi (x) \mathrm{d} x, \quad \varphi \in \mathcal {S}.
$$

由定义及对于 $\varphi \in \mathcal{S}$ 的反演公式(当 $x = 0$ 时)可以得到

$$
\langle \hat {1}, \varphi \rangle = \langle 1, \hat {\varphi} \rangle = \int_ {R} \hat {\varphi} d x = \varphi (0) = \langle \delta , \varphi \rangle , \quad \varphi \in \mathscr {S}.
$$

同样由Fourier变换定义可得

$$
\langle \hat {\delta}, \varphi \rangle = \langle \delta , \hat {\varphi} \rangle = \hat {\varphi} (0) = \int_ {R} \varphi (x) d x = \langle 1, \varphi \rangle , \quad \varphi \in \mathscr {S}.
$$

例 2 设 $P(x)$ 是多项式, 根据 (6.14), (6.15) 以及例 1, 可得

$$
\begin{array}{l} (x ^ {k}) ^ {\wedge} = \frac {1}{(- 2 \pi \mathrm{i}) ^ {k}} ((- 2 \pi \mathrm{i} x) ^ {k} \cdot 1) ^ {\wedge} \\ = \frac {1}{(- 2 \pi \mathrm{i}) ^ {k}} \mathrm{D} ^ {k} \delta = \left(\frac {1}{2 \pi} \mathrm{D}\right) ^ {k} \delta . \\ \end{array}
$$

$$
(\mathrm{D} ^ {k} \delta) ^ {\wedge} = (2 \pi \mathrm{i} t) ^ {k} \hat {\delta} = (2 \pi \mathrm{i} t) ^ {k},
$$

$$
(P (x)) ^ {\wedge} = P \left(\frac {\mathrm{i}}{2 \pi} \mathrm{D}\right) \delta ,
$$

$$
(P (\mathrm{D}) \delta) ^ {\wedge} = P (2 \pi \mathrm{i} t).
$$

例3 若 $a \in R$ ，我们有

$$
\langle \tau_ {a} \delta , \varphi \rangle = \langle \delta (x - a), \varphi (x) \rangle = \varphi (a) = \langle \delta_ {a} (x), \varphi (x) \rangle .
$$

由(6.16)，(6.17)以及例1可得到

$$
\begin{array}{l} \left(\delta_ {a}\right) ^ {\wedge} = \left(\tau_ {a} \delta\right) ^ {\wedge} = e ^ {- 2 \pi i a t}, \\ \left(\mathrm{e} ^ {2 \pi a. x}\right) ^ {\wedge} = \tau_ {a} \hat {1} = \tau_ {a} \delta = \delta_ {a}. \\ \end{array}
$$

例4 若 $a \in \mathbb{R}$ , 我们有

$$
(\sin a x) ^ {\wedge} = \left[ \frac {1}{2 \mathrm{i}} (\mathrm{e} ^ {\mathrm{i} a x} - \mathrm{e} ^ {- \mathrm{i} a r}) \right] ^ {\wedge} = \frac {1}{2 \mathrm{i}} (\delta_ {\frac {a}{2 \pi}} - \delta_ {- \frac {a}{2 \pi}})
$$

$$
= \frac {1}{2} \left[ \delta \left(t + \frac {a}{2 \pi}\right) - \delta \left(t - \frac {a}{2 \pi}\right) \right].
$$

类似地，可求得

$$
(\cos a x) ^ {\wedge} = \frac {1}{2} \left(\delta_ {\frac {a}{2 \pi}} + \delta_ {- \frac {a}{2 \pi}}\right) = \frac {1}{2} \left[ \delta \left(t + \frac {a}{2 \pi}\right) + \delta \left(t - \frac {a}{2 \pi}\right) \right].
$$

例5 $\left(\frac{1}{x}\right)^{\wedge} = -\pi \mathrm{i}\operatorname {sgn}t,$

其中 $\operatorname{sng} t$ 是 $t$ 的符号函数, $\frac{1}{x}$ 是由(5.2)式给定的广义函数.

我们记 $f = \frac{1}{x}$ . 由(5.2)式, 对 $\varphi \in \mathcal{S}$ ,

$$
\langle f, \varphi \rangle = f (\varphi) = \lim _ {\varepsilon \rightarrow + 0} \left\{\int_ {\varepsilon} ^ {\infty} \frac {\varphi (x)}{x} d x + \int_ {- \infty} ^ {- \varepsilon} \frac {\varphi (x)}{x} d x \right\}.
$$

令

$$
f _ {\varepsilon , R} (x) = \left\{ \begin{array}{l l} \frac {1}{x}, & \varepsilon <   | x | <   R, \\ 0, & \text {其他}. \end{array} \right.
$$

由 $f(\varphi)$ 的定义式(5.2)容易得知

$$
\lim _ {\substack {\varepsilon \to + 0 \\ R \to \infty}} f _ {\varepsilon , R} = f \quad (\text {在} \mathcal {S} ^ {\prime} \text {中}).
$$

于是根据定理6.3推知

$$
\lim _ {\substack {\epsilon \to + 0 \\ R \to \infty}} \hat {f} _ {\epsilon , R} = \hat {f} \quad (\text{在}   \mathcal {S} ^ {\prime}   \text{中}).
$$

我们先求出 $f_{\varepsilon, R}(x)$ 的Fourier变换及其极限：

$$
\begin{array}{l} \hat {f} _ {\varepsilon , R} (t) = \int_ {\varepsilon} ^ {R} \frac {\mathrm{e} ^ {- 2 \pi i x t}}{x} \mathrm{d} x + \int_ {- R} ^ {- \varepsilon} \frac {\mathrm{e} ^ {- 2 \pi i x t}}{x} \mathrm{d} x \\ = (- 2 \mathrm{i}) \int_ {\varepsilon} ^ {R} \frac {\sin 2 \pi x t}{x} \mathrm{d} x = (- 2 \mathrm{i}) \int_ {2 \pi \varepsilon} ^ {2 \pi R} \frac {\sin x t}{x} \mathrm{d} x \\ \rightarrow (- 2 \mathrm{i}) \int_ {0} ^ {\infty} \frac {\sin x t}{x} \mathrm{d} x = - \pi \mathrm{sgn} t \\ (\text {当} \varepsilon \rightarrow + 0, R \rightarrow + \infty). \\ \end{array}
$$

又因为 $\hat{f}_{\varepsilon, R}(t) = (-2\mathrm{i})\int_{2\pi \varepsilon t}^{2\pi Rt}\frac{\sin y}{y}\mathrm{d}y$ 关于 $\varepsilon, R, t$ 一致有界，于是根据控制收敛定理可知

$$
\begin{array}{l} \langle \hat{f},\varphi \rangle = \lim_{\substack{\epsilon \to +0\\ R\to \infty}}\langle \hat{f}_{\epsilon ,R},\varphi \rangle = \lim_{\substack{\epsilon \to +0\\ R\to \infty}}\int_{R}\hat{f}_{\epsilon ,R}(t)\varphi (t)dt \\ = \int_ {R} (- \pi 1 \operatorname{sgn} t) \varphi (t) \mathrm{d} t, \quad \forall \varphi \in \mathscr {S}. \\ \end{array}
$$

于是 $\hat{f} = -\pi \mathrm{i}$ sgnt.

例6 $(\arctan x)^{\wedge} = -\frac{\mathrm{i}}{2}\left(\frac{\mathrm{e}^{-2\pi|t|}}{t}\right)$ .

令 $f(x) = \arctan x$ ，它是有界函数，因此 $f\in \mathcal{S}^{\prime}$ .我们有

$$
f ^ {\prime} (x) = \frac {1}{1 + x ^ {2}}.
$$

因为已知 $(\mathrm{e}^{-|x|})^{\wedge} = \frac{2}{1 + (2\pi t)^2}$ ，所以由反演公式可推知

$$
\left(\frac {1}{1 + x ^ {2}}\right) ^ {\Lambda} = \pi \mathrm{e} ^ {- 2 \pi | t |}.
$$

根据(6.14)， $(f')^{\wedge} = 2\pi \mathrm{i}t\hat{f}$ ，于是得到

$$
\hat {f} = \frac {1}{2 \pi \mathrm{i} t} (f ^ {\prime}) ^ {\wedge} = \frac {\pi}{2 \pi \mathrm{i} t} \mathrm{e} ^ {- 2 \pi | t |} = - \frac {\mathrm{i}}{2} \frac {\mathrm{e} ^ {- 2 \pi | t |}}{t}.
$$

注意到 $\frac{\mathrm{e}^{-2\pi|t|}}{t}$ 在 $t = 0$ 附近不是可积的，但可以用 §5.1 例3的类似方法来定义它所对应的主值意义的广义函数 $\left(\frac{\mathrm{e}^{-2\pi|t|}}{t}\right)$ . 又注意到对任意常数 $C$ ，都有 $(f + C)' = \frac{1}{1 + x^2}$ ，所以一般来说，应得到

$$
(f + C) ^ {\wedge} = - \frac {1}{2} \frac {\mathrm{e} ^ {- 2 \pi | t |}}{t},
$$

从而 $\dot{f} = -\frac{\mathrm{i}}{2}\left(\frac{\mathrm{e}^{-2\pi|t|}}{t}\right) - C\delta .$

为了确定常数 $C$ ，取 $g(x) = \mathrm{e}^{-\tau^2},\hat{g} (t) = \sqrt{\pi}\mathrm{e}^{-(\pi t)^2},g$ 与 $\hat{g}$ 都属于 $\mathcal{S}$ .因为arc tan $x$ 是奇函数，

$$
\langle \hat {f}, g \rangle = \langle f, \hat {g} \rangle = \int_ {R} (\arctan x) \sqrt {\pi} e ^ {- \pi^ {2} x ^ {2}} d x = 0.
$$

但

$$
\begin{array}{l} \langle \hat {f}, g \rangle = \left\langle \left(- \frac {\mathrm{i}}{2} \left(\frac {\mathrm{e} ^ {- 2 \pi | t |}}{t}\right) - C \delta\right), g \right\rangle \\ = - \frac {1}{2} \lim _ {\varepsilon \rightarrow + 0} \int_ {| t | \geqslant \varepsilon} \frac {\mathrm{e} ^ {- 2 \pi | t |}}{t} \mathrm{e} ^ {- t ^ {2}} \mathrm{d} t - C g (0) = - C. \\ \end{array}
$$

因此由两式相等推知 $C = 0$ ，即得

$$
\hat {f} = - \frac {1}{2} \left(\frac {\mathrm{e} ^ {- 2 \pi | t |}}{t}\right).
$$

例7 $\left(\frac{1}{|x|}\right)^{\wedge} = -2(\gamma +\ln 2\pi |t|)$ ，其中 $\gamma$ 是如下的Euler常

数

$$
\gamma = \int_ {0} ^ {1} \frac {1 - \cos y}{y} d y - \int_ {1} ^ {\infty} \frac {\cos y}{y} d y,
$$

[Unreadable]

广义函数 $\frac{1}{|x|}$ 定义为

$$
\left\langle \frac {1}{| x |}, \varphi \right\rangle = \int_ {- 1} ^ {1} \frac {\varphi (x) - \varphi (0)}{| x |} d x + \int_ {| x | > 1} \frac {\varphi (x)}{| x |} d x, \quad \varphi \in \mathscr {S}.
$$

按定义,对一切 $\varphi\in S$ ,

$$
\begin{array}{l} \left\langle \left(\frac {1}{| x |}\right) ^ {\wedge}, \varphi \right\rangle = \left\langle \frac {1}{| x |}, \hat {\varphi} \right\rangle \\ = \int_ {- 1} ^ {1} \frac {\hat {\varphi} (x) - \hat {\varphi} (0)}{| x |} d x + \int_ {| x | > 1} \frac {\hat {\varphi} (x)}{| x |} d x \\ = \int_ {- 1} ^ {1} \frac {1}{| x |} \left\{\int_ {R} \varphi (t) \left(\mathrm{e} ^ {- 2 \pi x t} - 1\right) \mathrm{d} t \right\} \mathrm{d} x \\ + \int_ {| x | > 1} \frac {1}{| x |} \left\{\int_ {R} \varphi (t) \mathrm{e} ^ {- 2 \pi i x t} \mathrm{d} t \right\} \mathrm{d} x \\ = 2 \int_ {0} ^ {1} \int_ {R} \varphi (t) \frac {\cos 2 \pi x t - 1}{x} d t d x + 2 \int_ {1} ^ {\infty} \int_ {R} \varphi (t) \frac {\cos 2 \pi x t}{x} d t d x \\ = 2 \int_ {R} \varphi (t) \left\{\int_ {0} ^ {1} \frac {\cos 2 \pi x t - 1}{x} d x + \int_ {1} ^ {\infty} \frac {\cos 2 \pi x t}{x} d x \right\} d t \\ = 2 \int_ {R} \varphi (t) \left\{\int_ {0} ^ {2 \pi | t |} \frac {\cos y - 1}{y} d y + \int_ {2 \pi | t |} ^ {\infty} \frac {\cos y}{y} d y \right\} d t \\ = 2 \int_ {R} \varphi (t) \left\{\int_ {0} ^ {1} \frac {\cos y - 1}{y} d y + \int_ {1} ^ {2 \pi | t |} \frac {\cos y - 1}{y} d y \right. \\ \left. + \int_ {1} ^ {\infty} \frac {\cos y}{y} d y - \int_ {1} ^ {2 \pi | t |} \frac {\cos y}{y} d y \right\rbrace d t \\ = 2 \int_ {R} \varphi (t) \left\{- \left[ \int_ {0} ^ {1} \frac {1 - \cos y}{y} d y - \int_ {1} ^ {\infty} \frac {\cos y}{y} d y \right] - \int_ {1} ^ {2 \pi | t |} \frac {d y}{y} \right\} d t \\ = \int_ {R} \varphi (t) \{(- 2) [ \gamma + \ln 2 \pi | t | ] \} d t, \\ \end{array}
$$

即得 $\left(\frac{1}{|x|}\right)^{\wedge} = -2[\gamma +\ln 2\pi |t|].$

由上式两边取 Fourier 变换, 可得

$$
(\ln 2 \pi | t |) ^ {\wedge} = - \frac {1}{2} \left(\frac {1}{| x |}\right) ^ {\vee} - \gamma \delta = - \frac {1}{2} \left(\frac {1}{| x |}\right) - \gamma \delta .
$$

# § 6.5 缓增广义函数的卷积

根据前面的讨论得知,三个基本函数空间有以下关系: $D\subset S\subset E$ ,而与它们相应的广义函数空间的关系却是

$$
\mathcal {D} ^ {\prime} \supset \mathcal {S} ^ {\prime} \supset \mathcal {E} ^ {\prime}.
$$

于是缓增广义函数的卷积定义可以沿用定义5.9，并且也可以类似地讨论卷积的存在性.

关于缓增广义函数与紧支集广义函数的卷积,我们有以下结论.

定理6.10 若 $u \in \mathcal{S}'(R^n), v \in \mathcal{E}'(R^n)$ ，则 $u * v \in \mathcal{S}'(R^n)$ .

证明 任给 $\varphi \in \mathcal{S}$ , 由命题6.5可知存在元列 $\{\varphi_j\}, \varphi_j \in \mathcal{D}$ , 使得

$$
\lim _ {j \to \infty} \varphi_ {j} = \varphi \quad (\text {在} \mathcal {S} \text {中}).
$$

根据 §5.7 的讨论可知下式

$$
\langle u * v, \varphi_ {j} \rangle = \langle u (x), \langle v (y), \varphi_ {j} (x + y) \rangle \rangle
$$

是有意义的.

下面只需证明：若 $\varphi_{j} \in \mathcal{S}$ ，

$$
\lim _ {j \to \infty} \varphi_ {j} = \varphi \quad (\text {在} \mathcal {S} \text {中}),
$$

则有

$$
\lim _ {j \to \infty} \langle v (y), \varphi_ {j} (x + y) \rangle = \langle v (y), \varphi (x + y) \rangle \quad (\text {在}   \mathscr {S}   \text {中}). \tag {6.20}
$$

令 $\psi_{j} = \varphi_{j} - \varphi$ ，便化为由

$$
\lim _ {j \to \infty} \psi_ {j} = 0 \quad (\text {在} \mathcal {S} \text {中})
$$

去推证

$$
\lim _ {j \to \infty} \langle v (y), \psi_ {j} (x + y) \rangle = 0 \quad (\text {在} \mathcal {S} \text {中}).
$$

记

$$
g _ {j} (x) = \langle v (y), \psi_ {j} (x + y) \rangle ,
$$

用 §5.6 中类似的方法可以证明函数 $g_{j} \in C^{\infty}(R^{n})$ ，并且对于多重指标 $\beta$ ，有

$$
\mathrm{D} ^ {\beta} g _ {j} (x) = \langle v (y), \mathrm{D} _ {x} ^ {\beta} \psi_ {j} (x + y) \rangle .
$$

因 $v \in \mathcal{E}^l$ ，由定理5.4得知，存在 $C$ 与 $N$ ，使得对一切 $f \in \mathcal{E}$ ，有下式成立：

$$
\mid (v, f) \mid \leqslant C q _ {N} (f) = C \sup _ {| a | \leqslant N} \sup _ {y \in K _ {N}} \left| D ^ {a} f (y) \right|.
$$

于是，对任意多重指标 $\beta$ ，

$$
\begin{array}{l} \left| \mathrm{D} ^ {\beta} g _ {j} (x) \right| = \left| \langle v (y), \mathrm{D} _ {x} ^ {\beta} \psi_ {j} (x + y) \rangle \right| \\ \leqslant C \sup _ {| \alpha | \leqslant N} \sup _ {y \in K _ {N}} | D _ {y} ^ {\alpha} D _ {x} ^ {\beta} \psi_ {j} (x + y) |. \\ \end{array}
$$

由此推知

$$
\begin{array}{l} p _ {r} (g _ {j}) = \sup _ {| \beta | \leqslant 1} \sup _ {x \in R ^ {n}} (1 + | x | ^ {2}) ^ {r} | D ^ {\beta} g _ {j} (x) | \\ \leqslant C \sup _ {| \alpha | \leqslant N, | \beta | \leqslant r} \sup _ {x \in R ^ {n}, y \in K _ {N}} (1 + | x | ^ {2}) ^ {r} | D _ {y} ^ {\alpha} D _ {x} ^ {\beta} \psi_ {j} (x + y) | \\ \leqslant C \sup _ {| \alpha | \leqslant N, | \beta | \leqslant r} \sup _ {\xi \in R ^ {n}, y \in K _ {N}} (1 + | \xi - y | ^ {2}) ^ {r} | D _ {\xi} ^ {\alpha + \beta} \psi_ {j} (\xi) | \\ \leqslant C _ {N, r} p _ {N + r} \left(\psi_ {j}\right)\rightarrow 0, \quad j \rightarrow \infty , r = 0, 1, 2, \dots , \\ \end{array}
$$

其中最后一个不等式的成立用到了以下不等式

$$
\begin{array}{l} 1 + | \xi - y | ^ {2} \leqslant 1 + 2 (| \xi | ^ {2} + | y | ^ {2}) \\ \leqslant 2 (1 + | y | ^ {2}) (1 + | \xi | ^ {2}), \tag {6.21} \\ \end{array}
$$

常数 $C_{N,r}$ 与 $N$ 及 $\pmb{r}$ 有关.即得

$$
\lim _ {j \to \infty} g _ {j} = 0 \quad (\text {在} \mathcal {S} \text {中}),
$$

从而(6.20)成立.

由以上类似的论证可推知

$$
\langle v (y), \varphi (x + y) \rangle = g (x) \in \mathscr {S}.
$$

根据(6.20)式以及 $u \in \mathcal{S}'$ ，便得到

$$
\lim _ {j \rightarrow \infty} \langle u (x), \langle v (y), \varphi_ {j} (x + y) \rangle \rangle = \langle u (x), \langle v (y), \varphi (x + y) \rangle \rangle .
$$

按照定义 5.9 与定义 5.8 以及前面的讨论可知 $u * v$ 有意义，并且对一切 $\varphi \in S$ ，

$$
\langle u * v, \varphi \rangle = \langle u (x), \langle v (y), \varphi (x + y) \rangle \rangle .
$$

显然 $u * v$ 是 $\mathcal{S}$ 上的线性泛函，由(6.20)式以及 $u \in \mathcal{S}'$ ，便得知 $u * v$ 的连续性.于是， $u * v \in \mathcal{S}'$ .

关于缓增广义函数与速降函数的卷积,有以下定理.

定理6.11 设 $u \in \mathcal{S}'(R^n), f \in \mathcal{S}(R^n)$ , 则 $u * f \in C^\infty(R^n)$ , 对每个多重指标 $\alpha$ , 有等式

$$
\mathrm{D} ^ {a} (u * f) = (\mathrm{D} ^ {a} u) * f = u * (\mathrm{D} ^ {a} f) \tag {6.22}
$$

成立，并且存在常数 $C$ 与正整数 $N$ ，使得

$$
\mid (u * f) (x) \mid \leqslant C (1 + | x | ^ {2}) ^ {N}, \quad x \in \mathbb {R} ^ {n}, \tag {6.23}
$$

亦即 $u * f$ 是慢增的 $C^\infty$ 函数.

证明 设 $u \in \mathcal{S}'$ . $f \in \mathcal{S}$ , 对于 $\varphi \in \mathcal{S}$ , 令

$$
\begin{array}{l} g (x) = \langle f (y), \varphi (x + y) \rangle = \int_ {\mathbb {R} ^ {n}} f (y) \varphi (x + y) d y \\ = \int_ {\mathbb {R} ^ {n}} f (\xi - x) \varphi (\xi) \mathrm{d} \xi = (\check {f} * \varphi) (x), \\ \end{array}
$$

根据定理6.4知 $g \in \mathcal{S}$ , 并且有

$$
\hat {g} (t) = (\check {f}) ^ {\wedge} (t) \cdot \hat {\varphi} (t) = \hat {f} (- t) \cdot \hat {\varphi} (t).
$$

由命题6.2与定理6.3推知， $\varphi \mapsto \hat{g}$ 是连续线性映射.再根据定理6.3便得知 $\varphi \mapsto g$ 是 $\mathcal{S}$ 映入 $\mathcal{S}$ 中的连续线性映射.

对于 $\varphi \in \mathcal{S}$

$$
\langle u * f, \varphi \rangle = \langle u (x), \langle f (y), \varphi (x + y) \rangle \rangle , \tag {6.24}
$$

由前面的讨论可知此式右端有意义,而且因为 $u \in S'$ , 推知由此式定义的 $u * f \in S'$ .

我们用与定理5.11类似的方法可以证明

$$
(u * f) (\xi) = h (\xi) = \langle u (x), f (\xi - x) \rangle . \tag {6.25}
$$

再由(6.24)式不难推得

$$
\left\langle \frac {\partial}{\partial x _ {j}} (u * f), \varphi \right\rangle = - \left\langle u * f, \frac {\partial}{\partial x _ {j}} \varphi \right\rangle
$$

$$
= - \left\langle u (x), \left\langle f (y), \frac {\partial}{\partial x _ {j}} \varphi (x + y) \right\rangle \right\rangle = - \left\langle u (x), \frac {\partial}{\partial x _ {j}} g (x) \right\rangle
$$

$$
= \left\langle \frac {\partial}{\partial x _ {j}} u (x), g (x) \right\rangle = \left\langle \left(\frac {\partial}{\partial x _ {j}} u\right) * f, \varphi \right\rangle , \quad \varphi \in \mathscr {S}.
$$

这就得到(6.22)的第一个等式.(6.22)的第二个等式类似可证.从而知 $u*f\in C^{\infty}$ .

因 $u \in \mathcal{S}'$ ，根据定理6.7知存在常数 $C$ 与 $N$ ，使得

$$
\mid \langle u, \varphi \rangle \mid \leqslant C p _ {N} (\varphi), \quad \varphi \in \mathscr {S}.
$$

所以，由上式及(6.21)式，得到

$$
\begin{array}{l} \left| (u * f) (\xi) \right| = \left| \langle u (x), f (\xi - x) \rangle \right| \\ \leqslant C \sup _ {| \alpha | \leqslant N} \sup _ {x \in R ^ {n}} (1 + | x | ^ {2}) ^ {N} \left| D ^ {\alpha} f (\xi - x) \right| \\ = C \sup _ {| \alpha | \leqslant N} \sup _ {y \in R ^ {n}} (1 + | \xi - y | ^ {2}) ^ {N} | D ^ {\alpha} f (y) | \\ \leqslant C \cdot 2 ^ {N} (1 + | \xi | ^ {2}) ^ {N} p _ {N} (f), \quad \xi \in R ^ {n}. \\ \end{array}
$$

由此得到(6.23)式,即知 $u * f$ 是慢增的 $C^{\infty}$ 函数.

定理6.12 设 $u \in \mathcal{S}'$ , $f \in \mathcal{S}$ , 则

$$
(u * f) ^ {\wedge} = \hat {f} \hat {u}, \tag {6.26}
$$

$$
\hat {u} * \hat {f} = (f u) ^ {\wedge}. \tag {6.27}
$$

证明 根据定义可得

$$
\langle (u * f) ^ {\wedge}, \varphi \rangle = \langle u * f, \hat {\varphi} \rangle = \langle u (x), \langle f (y), \hat {\varphi} (x + y) \rangle \rangle , \quad \varphi \in \mathscr {S}.
$$

而

$$
\begin{array}{l} \langle f (y), \hat {\varphi} (x + y) \rangle = \int_ {\mathbb {R} ^ {n}} f (y) \hat {\varphi} (x + y) d y \\ = \int_ {R ^ {n}} f (\xi - x) \hat {\varphi} (\xi) d \xi = (\check {f} * \hat {\varphi}) (x) \\ = (\hat {f} \cdot \varphi) ^ {\wedge} (x), \tag {6.28} \\ \end{array}
$$

(6.28)中最后的等式是根据定理 6.4 以及等式 $\check{f} = (\hat{f})^{\wedge}$ . 于是我们有

$$
\langle (u * f) ^ {\wedge}, \varphi \rangle = \langle u, (\hat {f} \cdot \varphi) ^ {\wedge} \rangle = \langle \hat {u}, \hat {f} \cdot \varphi \rangle
$$

$$
= \langle \hat {f} \hat {u}, \varphi \rangle , \quad \varphi \in \mathscr {S}.
$$

即得(6.26)式.(6.27)式可由(6.26)式导出.

例1 设 $u \in \mathcal{S}'$ ，则有

$$
\delta_ {a} * u = \tau_ {a} u.
$$

证明 对于 $\varphi \in \mathcal{S}$ , 根据定理 6.10 得

$$
\begin{array}{l} \langle \delta_ {a} * u, \varphi \rangle = \langle u (y), \langle \delta_ {a} (x), \varphi (x + y) \rangle \rangle \\ = \langle u (y), \varphi (a + y) \rangle \\ = \langle u, \tau_ {- a} \varphi \rangle = \langle \tau_ {a} u, \varphi \rangle . \\ \end{array}
$$

例2 设 $\varphi \in \mathcal{S}, H$ 是 Heaviside 函数, 则

$$
(H * \varphi) (x) = \int_ {- \infty} ^ {x} \varphi (y) d y.
$$

证明 对于 $\varphi \in \mathcal{S}$ . 由(6.25)式得

$$
\begin{array}{l} (H * \varphi) (x) = \langle H (y), \varphi (x - y) \rangle \\ = \int_ {- \infty} ^ {\infty} H (y) \varphi (x - y) d y \\ = \int_ {0} ^ {\infty} \varphi (x - y) \mathrm{d} y = \int_ {- \infty} ^ {x} \varphi (z) \mathrm{d} z. \\ \end{array}
$$

# § 6.6 在微分方程中的应用

考虑 m 阶微分算子 L，

$$
L u = \sum_ {| a | \leqslant m} a _ {a} (x) \mathrm{D} ^ {a} u, \tag {6.29}
$$

其中所有系数 $a_{\alpha} \in C^{\infty}(\mathbb{R}^{n})$ 。设 $f \in \mathcal{D}'(\mathbb{R}^{n})$ ，若广义函数 $u \in \mathcal{D}'(\mathbb{R}^{n})$ 满足方程

$$
L u = f, \tag {6.30}
$$

即对一切 $\varphi \in \mathcal{D}(\pmb{R}^n)$ ，有

$$
\langle L u, \varphi \rangle = \langle f, \varphi \rangle , \tag {6.31}
$$

则称 $u$ 是方程(6.30)的解. 方程的解可能属于以下情形之一：

(1) 解 u 是足够光滑的函数, 即它本身连同出现在方程中的所有阶导数都连续, 从而(6.30)式中的运算可以按经典意义下进行, 使之成为等式, 这时解 u 是经典解.

(2) 解 u 是非足够光滑的函数, 所以 (6.30) 式中的运算不能按经典意义进行, 但 u 满足 (6.31). 因为由广义函数的运算可得

$$
\begin{array}{l} \langle L u, \varphi \rangle = \sum_ {| \alpha | \leqslant m} \langle a _ {\alpha} (x) \mathrm{D} ^ {\alpha} u, \varphi \rangle \\ = \sum_ {| a | \leqslant m} (- 1) ^ {| a |} \langle u, \mathrm{D} ^ {a} (a _ {a} (x) \varphi (x)) \rangle \\ = \langle u, L ^ {*} \varphi \rangle , \quad \varphi \in \mathcal {D}, \\ \end{array}
$$

其中 $L^{*}\varphi = \sum_{|\alpha |\leqslant m}(-1)^{|\alpha |}\mathrm{D}^{\alpha}(a_{\alpha}(x)\varphi (x)).$

所以(6.31)成立当且仅当

$$
\langle u, L ^ {*} \varphi \rangle = \langle f, \varphi \rangle , \quad \varphi \in \mathcal {D} \tag {6.32}
$$

成立. 这时解 $u$ 是弱解.

(3) 解 u 是奇异的广义函数, 满足 (6.31), 这时 u 是一个分布 (广义函数) 解.

以上各种情形的解统称为广义解.

在处理数学物理的重要方程时,我们通常先寻找广义解,再根据方程的适当性质,可以找到经典解.有些方程有广义解但没有经典解,也有些方程的每个广义解都是经典解.

例1 考虑最简单的微分方程

$$
\frac {\mathrm{d} u}{\mathrm{d} x} = 0, \tag {6.33}
$$

可以证明它只有广义解 u=c.

证明 方程(6.33)的解 u 满足

$$
\langle u ^ {\prime}, \varphi \rangle = - \langle u, \varphi^ {\prime} \rangle = 0, \quad \varphi \in \mathcal {D}. \tag {6.33}
$$

记 $\Phi_{0}$ 为可以表示成其他基本函数的导数的基本函数的集合, 即

$$
\Phi_ {0} = \{\psi :   \psi \in \mathcal {D}; \exists   \varphi \in \mathcal {D}, \text {使}   \psi = \varphi \}.
$$

(6.33')表明：若 $\psi \in \Phi_0$ ，则

$$
\langle u, \psi \rangle = 0.
$$

下面证明： $\mathcal{D}$ 中函数 $\psi$ 能表示成另一个基本函数 $\varphi$ 的导数的充分必要条件是

$$
\int_ {- \infty} ^ {\infty} \psi (x) \mathrm{d} x = 0. \tag {6.34}
$$

首先，若 $\psi (x) = \varphi^{\prime}(x),\varphi \in \mathcal{D}$ ，则

$$
\int_ {- \infty} ^ {\infty} \psi (x) \mathrm{d} x = \varphi (x) \Big | _ {- \infty} ^ {\infty} = 0.
$$

反之，若对 $\psi \in \mathcal{D}$ 有(6.34)成立，我们令

$$
\varphi (x) = \int_ {- \infty} ^ {x} \psi (t) \mathrm{d} t.
$$

显然 $\varphi'(x) = \psi(x)$ , 且 $\varphi \in C^\infty$ . 设 $\psi$ 的支集包含在区间 $[-A, A]$ 中, 则 $\varphi(x)$ 在 $[-A, A]$ 之外等于常数, 再由条件 (6.34) 可推知 $\varphi(x)$ 在 $[-A, A]$ 之外为零, 即 $\varphi$ 有紧支集. 故 $\psi \in \Phi_0$ .

现在取定一个基本函数 $\varphi_{1} \in \mathcal{D}$ , 它满足

$$
\int_ {- \infty} ^ {\infty} \varphi_ {1} (x) \mathrm{d} x = 1. \tag {6.35}
$$

任给 $\varphi \in \mathcal{D}$ , 取一个对应的 $\psi$ 为

$$
\psi (x) = \varphi (x) - \varphi_ {1} (x) \int_ {- \infty} ^ {\infty} \varphi (t) \mathrm{d} t, \tag {6.36}
$$

由条件(6.35)易知

$$
\int_ {- \infty} ^ {\infty} \psi (x) \mathrm{d} x = \int_ {- \infty} ^ {\infty} \varphi (x) \mathrm{d} x - \left(\int_ {- \infty} ^ {\infty} \varphi (t) \mathrm{d} t\right) \left(\int_ {- \infty} ^ {\infty} \varphi_ {1} (x) \mathrm{d} x\right) = 0,
$$

从而知 $\psi \in \Phi_0$ 于是

$$
\langle u, \psi \rangle = 0.
$$

由此式及(6.36)式,可得

$$
\langle u, \varphi \rangle = \langle u, \psi \rangle + \langle u, \varphi_ {1} \rangle \left(\int_ {- \infty} ^ {\infty} \varphi d t\right) = \langle u, \varphi_ {1} \rangle \left(\int_ {- \infty} ^ {\infty} \varphi d t\right).
$$

记 $c = \langle u, \varphi_1 \rangle$ ，它是一个常数。由上式便得

$$
\langle u, \varphi \rangle = c \int_ {- \infty} ^ {\infty} \varphi \mathrm{d} t = \int_ {- \infty} ^ {\infty} c \varphi \mathrm{d} t = \langle c, \varphi \rangle ,
$$

对任给 $\varphi \in \mathcal{D}$ 成立. 由此推知 $u = c$ .

这个解是经典解.

例2 求常微分方程

$$
x \frac {\mathrm{d} u}{\mathrm{d} x} = 1 \tag {6.37}
$$

的解.

解 由 §5.3 的例 5 知

$$
\frac {\mathrm{d}}{\mathrm{d} x} (\ln | x |) = \frac {1}{x},
$$

即知 $\ln |x|$ 满足(6.37). 又可知齐次方程

$$
x \frac {\mathrm{d} u}{\mathrm{d} x} = 0 \tag {6.38}
$$

的解 $u$ 在 $(0, \infty)$ 上必为常数（与例1类似），在 $(- \infty, 0)$ 上也必为常数。从而知(6.38)有两个线性无关解： $u_{1} = 1, u_{2} = H(x)$ ，其中 $H(x)$ 是 Heaviside 函数。亦即(6.38)有通解

$$
u = c _ {1} + c _ {2} H (x).
$$

可以验证如下：

$$
\langle x u ^ {\prime}, \varphi \rangle = \langle c _ {2} x \delta , \varphi \rangle = c _ {2} \langle \delta , x \varphi \rangle = 0, \quad \varphi \in \mathcal {D}.
$$

综上所述推知

$$
u = c _ {1} + c _ {2} H (x) + \ln | x |
$$

是方程(6.37)的通解. 这个解 u 不是在全实轴 R 上可微的函数, 所以它不是经典解, 而是弱解.

下面介绍基本解的概念,它在常系数微分方程的理论中有着重要的意义.

定义6.8 一个广义函数 $E \in \mathcal{D}'(R^n)$ 如果满足方程

$$
L E = \delta , \tag {6.39}
$$

就称为算子 $L$ 的基本解，其中 $L$ 由(6.29)给定.

若 $E$ 与 $E_{1}$ 都是 $L$ 的基本解，则 $u = E - E_{1}$ 必满足齐次方程 $Lu = 0$ . 也就是说，其他任意基本解与基本解 $E$ 只相差齐次方程的一个解 $u$ .

现在设 $P(x)$ 是一个 $m$ 阶的 $n$ 元多项式，考虑算子

$$
L = P (\mathrm{D}) = \sum_ {| \alpha | \leqslant m} a _ {\alpha} \mathrm{D} ^ {\alpha}, \tag {6.40}
$$

它是一个 $m$ 阶常系数微分算子.

定理 6.13 设 E 是由(6.40)给定的常系数微分算子 L 的一个基本解 $^{①}$ . 若广义函数 $f \in D'$ 使得卷积 $u = E * f$ 存在 $^{②}$ ，则 u 是方程

$$
L u = f
$$

的一个解.

证明 由(5.26)及(5.27)式,我们有

$$
L u = P (\mathrm{D}) u = (P (\mathrm{D}) E) * f = \delta * f = f.
$$

我们进一步介绍 Fourier 变换在常系数微分方程中的应用.

如果多项式 $P(x)$ 使得存在正数 $\varepsilon$ ，有以下不等式成立

$$
\left| P (2 \pi \mathrm{i} y) \right| \geqslant \varepsilon > 0, \quad y \in R ^ {n}, \tag {6.41}
$$

就可以得到下面的结论.

命题6.14 若 $f \in \mathcal{S}'(R^n)$ , 并设 $n$ 元多项式 $P(x)$ 满足条件 (6.41), 则方程

$$
P (\mathrm{D}) u = f \tag {6.42}
$$

恰有一解在空间 $\mathcal{S}'(R^n)$ 中，这个解由下式给出：

$$
u = \mathcal {F} ^ {- 1} \left(\frac {1}{P (2 \pi_ {1} y)} \hat {f}\right). \tag {6.43}
$$

证明 设方程(6.42)有一个解 u 在 $S'$ 中, 即 u 使(6.42)成为等式. 两边取 Fourier 变换得到

$$
(P (\mathrm{D}) u) ^ {\wedge} = \hat {f}, \tag {6.44}
$$

根据(6.18)式,上式可改写为

$$
P (2 \pi \mathrm{i} y) \hat {u} = \hat {f}. \tag {6.45}
$$

因有条件(6.41)式成立,由此便得

$$
\hat {u} = \frac {1}{P (2 \pi \mathrm{i} y)} \hat {f}.
$$

对此式两边取Fourier逆变换 $\mathcal{F}^{-1}$ ，就得到

$$
u = \mathcal {F} ^ {- 1} \left(\frac {1}{P (2 \pi \mathrm{i} y)} \hat {f}\right).
$$

即方程(6.42)的属于 $\mathcal{S}^{\prime}$ 的解是由(6.43)给出的.

反之, 我们可验证(6.43)式给出的 $u$ 是方程(6.42)的解. 首先按假定 $f \in \mathcal{S}'$ , 因条件(6.41)成立便推知 $\frac{1}{P(2\pi y)} \hat{f}$ 属于 $\mathcal{S}'$ , 从而由(6.43)式给出的 $u$ 也属于 $\mathcal{S}'$ . 我们在(6.43)式两边取 Fourier 变换, 推得(6.45)式. 从而得到(6.44)式, 对此式两边取 Fourier 逆变换便得到(6.42)式成立.

如果空间 $\mathcal{S}'$ 换成 $\mathcal{S}$ 或 $L^2$ , 也有类似的结论.

命题6.15 若 $f \in \mathcal{S}$ (或 $f \in L^2$ ), 多项式 $P(x)$ 满足条件(6.41), 则方程(6.42)恰有一解在空间 $\mathcal{S}$ 中 (在 $L^2$ 中), 该解由(6.43)式给出.

证明省略.

例3 求解偏微分方程

$$
\Delta u - u = f, \tag {6.46}
$$

其中 $f \in \mathcal{S}'(\mathbb{R}^n), \Delta = \sum_{k=1}^{n} \frac{\partial^2}{\partial x_k^2}$ .

解 方程(6.46)是(6.42)的特殊情形,它对应的微分算子为

$$
P (\mathrm{D}) = \sum_ {k = 1} ^ {n} \mathrm{D} _ {k} ^ {2} - 1,
$$

$$
P (2 \pi \mathrm{i} y) = - 4 \pi^ {2} | y | ^ {2} - 1.
$$

可见 $P(x)$ 满足条件(6.41). 若 $f \in \mathcal{S}'$ , 由命题6.14可得到方程(6.46)在 $\mathcal{S}'$ 中的唯一解

$$
u = \mathcal {F} ^ {- 1} \left(\frac {1}{- (4 \pi | y | ^ {2} + 1)} \hat {f}\right).
$$

注 解 $u$ 属于 $\mathcal{S}$ 相当于是一类边界条件(它限制了 $u$ 上升的速度,例如指数函数就被排除在外),因此方程还可以有不在 $\mathcal{S}^{\prime}$ 中的其他解.

对于条件(6.41)不成立的情形,可以考虑先在 $S'$ 中寻找 $P(D)$ 的基本解.我们对方程

$$
P (\mathrm{D}) E = \delta
$$

取Fourier变换可得出

$$
P (2 \pi \mathrm{i} y) \hat {E} = 1.
$$

若 $\frac{1}{P(2\pi\mathrm{i}y)}$ 是一个缓增广义函数, 则对它取 Fourier 逆变换就可以找到一个基本解.

命题6.16 若方程

$$
P (2 \pi \mathrm{i} y) v = 1
$$

有一个解 $v \in \mathcal{S}'$ ，则 $E = \mathcal{F}^{-1}v$ 是算子 $P(D)$ 的基本解.

证明 由 $\hat{E} = v$ 不难得到

$$
(P (\mathrm{D}) E) ^ {\wedge} = P (2 \pi \mathrm{i} y) \hat {E} = P (2 \pi \mathrm{i} y) v = 1 = \hat {\delta}.
$$

对上式两边取 Fourier 逆变换,便得到

$$
P (\mathrm{D}) E = \delta ,
$$

即 E 是基本解.

例4 在 $\pmb{R}^3$ 中求Laplace算子

$$
\Delta = \frac {\partial^ {2}}{\partial x _ {1} ^ {2}} + \frac {\partial^ {2}}{\partial x _ {2} ^ {2}} + \frac {\partial^ {2}}{\partial x _ {3} ^ {2}}
$$

的基本解.

解 对方程

$$
\Delta E = \delta
$$

两边取 Fourier 变换, 得到

$$
- 4 \pi^ {2} | y | ^ {2} \hat {E} = 1.
$$

令函数 $g$ 为

$$
g (y) = - \frac {1}{4 \pi^ {2} | y | ^ {2}}, \quad y \neq 0.
$$

函数 g 在 $R^{3}$ 中局部可积，在无穷远处有界，因此属于 $\mathcal{S}'(R^{3})$ . 根据命题 6.16 可知 $E = F^{-1}g$ 是算子 $\Delta$ 的基本解.

下面求出 $E = \mathcal{F}^{-1}g$ 的具体表示式. 对任给 $\varphi \in \mathcal{S}(R^3)$ , 我们有

$$
\begin{array}{l} \langle E, \varphi \rangle = \langle \mathcal {F} ^ {- 1} g, \varphi \rangle = \langle g, \mathcal {F} ^ {- 1} \varphi \rangle \\ = - \frac {1}{4 \pi^ {2}} \int_ {\mathbb {R} ^ {3}} \frac {1}{| x | ^ {2}} (\mathcal {F} ^ {- 1} \varphi) (x) d x \\ = - \frac {1}{4 \pi^ {2}} \lim _ {R \rightarrow \infty} \int_ {| x | \leqslant R} \frac {1}{| x | ^ {2}} \left(\int_ {R ^ {3}} \varphi (t) \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} t\right) \mathrm{d} x \\ = - \frac {1}{4 \pi^ {2}} \lim _ {R \rightarrow \infty} \int_ {\mathbb {R} ^ {3}} \varphi (t) \left(\int_ {| x | \leqslant R} \frac {1}{| x | ^ {2}} e ^ {2 \pi i x \cdot t} d x\right) d t \\ = \lim _ {R \rightarrow \infty} \int_ {\mathbb {R} ^ {3}} \varphi (t) f _ {R} (t) \mathrm{d} t, \tag {6.47} \\ \end{array}
$$

其中记

$$
f _ {R} (t) = - \frac {1}{4 \pi^ {2}} \int_ {| x | \leqslant R} \frac {1}{| x | ^ {2}} \mathrm{e} ^ {2 \pi i x \cdot t} \mathrm{d} x.
$$

用球极坐标计算上述积分,可得

$$
\begin{array}{l} f _ {R} (t) = - \frac {1}{2 \pi} \int_ {0} ^ {R} \int_ {0} ^ {\pi} \mathrm{e} ^ {2 \pi i r | t | \cos \theta} \sin \theta \mathrm{d} \theta \mathrm{d} r \\ = - \frac {1}{2 \pi} \int_ {0} ^ {R} \frac {\sin 2 \pi r | t |}{\pi r | t |} d r \\ = - \frac {1}{2 \pi^ {2} | t |} \int_ {0} ^ {2 \pi | t | R} \frac {\sin y}{y} d y \\ \rightarrow - \frac {1}{4 \pi | t |} (R \rightarrow \infty , 0 \neq t \in R ^ {3}), \\ \end{array}
$$

又由上式可推知存在常数 $M$ 使得

$$
\left| f _ {R} (t) \right| \leqslant \frac {M}{| t |}.
$$

因为对于 $\varphi \in \mathcal{S}(\mathbb{R}^3)$ ， $\left|\frac{\varphi(t)}{t}\right|$ 在 $R^3$ 上可积，所以由控制收敛定理推得

$$
\lim _ {R \rightarrow \infty} \int_ {\mathbb {R} ^ {3}} f _ {R} (t) \varphi (t) \mathrm{d} t = - \frac {1}{4 \pi} \int_ {\mathbb {R} ^ {3}} \frac {\varphi (t)}{| t |} \mathrm{d} t.
$$

根据(6.47)式便得到

$$
\langle E, \varphi \rangle = - \frac {1}{4 \pi} \int_ {\mathbb {R} ^ {3}} \frac {\varphi (t)}{| t |} \mathrm{d} t, \quad \varphi \in \mathcal {S} (\mathbb {R} ^ {3}).
$$

于是我们得到基本解

$$
E = - \frac {1}{4 \pi | t |}, \quad t \in R ^ {3}.
$$

下面介绍求常系数常微分方程的基本解的一种方法.

设微分算子

$$
L = \sum_ {j = 0} ^ {m} a _ {j} \mathrm{D} ^ {j}, \quad \mathrm{D} = \frac {\mathrm{d}}{\mathrm{d} x}, \quad a _ {m} = 1.
$$

又设有 $C^\infty$ 函数 $v(x)$ 满足齐次方程的初值问题：

$$
\left\{ \begin{array}{l} L v = 0, \\ v (0) = v ^ {\prime} (0) = \dots = v ^ {(m - 2)} (0) = 0, v ^ {(m - 1)} (0) = 1. \end{array} \right.
$$

令函数

$$
E (x) = v (x) \cdot H (x), \quad x \in R,
$$

其中 $H(x)$ 是Heaviside函数.因为有

$$
H ^ {\prime} = \delta ,
$$

以及对 $\varphi \in \mathcal{D}$

$$
\langle v ^ {(j)} \delta , \varphi \rangle = 0, \quad j = 0, 1, \dots , m - 2,
$$

$$
\langle v ^ {(m - 1)} \delta , \varphi \rangle = \varphi (0) = \langle \delta , \varphi \rangle ,
$$

所以由Leibniz公式，我们得

$$
\mathrm{D} ^ {j} E = (\mathrm{D} ^ {j} v) \cdot H, \quad j = 0, 1, \dots , m - 1,
$$

$$
\mathrm{D} ^ {m} E = (\mathrm{D} ^ {m} v) \cdot H + \delta .
$$

于是 $LE = (Lv)\cdot H + a_m\delta = \delta ,$

即 $E = v \cdot H$ 是 $L$ 的基本解.

例5 求算子 $L = \frac{\mathrm{d}}{\mathrm{d}x} + a$ 的基本解 $(a > 0)$ .

解 求出初值问题

$$
\left\{ \begin{array}{l} \frac {\mathrm{d} v}{\mathrm{d} x} + a v = 0, \\ v (0) = 1 \end{array} \right.
$$

的解为 $v(x) = \mathrm{e}^{-ax}$ . 根据前面讨论知

$$
E = H (x) \mathrm{e} ^ {- a x}
$$

是 $L$ 的基本解.

# § 6.7 在信号分析中的应用

本节介绍 Fourier 分析在信号分析中的一些应用.

在实际课题中,一个信号也许是一个电磁波,或是一个声波和光波.而在数学中,信号(连续信号或模拟信号)多数可用实数t的实函数(或复函数) $f(t)$ 来表示.

如果 $f(t)$ 是一个周期函数, 它代表着一个周期性的信号. 把周期性信号展开成 Fourier 级数, 然后对它的各次谐波的频率、振幅、相位以及它们的关系进行分析, 就叫做频谱分析.

设有周期为 T 的信号 $f(t)$ ，它的 Fourier 级数为

$$
f (t) \sim \sum_ {n = - \infty} ^ {\infty} c _ {n} \mathrm{e} ^ {i n \omega_ {0} t},
$$

其中 $\omega_{0}=2\pi/T$ ,

$$
c _ {n} = \frac {1}{T} \int_ {- T / 2} ^ {T / 2} f (t) \mathrm{e} ^ {- \mathrm{i} n \omega_ {0} t} \mathrm{d} t.
$$

$|c_{n}|$ 称为信号 $f(t)$ 的离散(振幅)频谱, 幅角 $\operatorname{Arg} c_{n}$ 为离散相位谱.

设非周期信号 $f(t)$ 在 R 上可积, 其 Fourier 变换为

$$
F (\omega) = \hat {f} (\omega) = \int_ {- \infty} ^ {\infty} f (t) \mathrm{e} ^ {- 2 \pi i \omega t} \mathrm{d} t.
$$

表示成 $F(\omega) = |F(\omega)|\mathrm{e}^{\mathrm{i}\varphi (\omega)}$ . $|F(\omega)|$ 称为信号 $f(t)$ 的连续(振幅)频谱，幅角 $\operatorname {Arg}F(\omega) = \varphi (\omega)$ 为相位频谱.

信号 $f(t)$ 的功率与振幅的平方 $\left|f(t)\right|^2$ 成正比，从而信号的

总能量与积分 $\int_{-\infty}^{\infty}|f(t)|^2\mathrm{d}t$ 成正比. 若假定信号的总能量为有限, 也就是 $f \in L^{2}(R)$ , 则其Fourier变换的含义见 §3.4. 更一般地, 若 $f$ 可看作广义函数, 则其Fourier变换的定义见 §6.3.

例1 设矩形脉冲 $f(t)$ 为

$$
f (t) = \left\{ \begin{array}{l l} 1, & | t | <   a, \\ 0, & | t | > a \end{array} \right.
$$

(见图 6.1), 则

$$
F (\omega) = \frac {\sin 2 \pi a \omega}{\pi \omega}
$$

(见图 6.2).

![](e8eae50834f4d00ab2763087c0fa5620ab61f159c738764af8d5cf4e56ede114.jpg)

<details>
<summary>text_image</summary>

y
1
f(t)
-a O a t
</details>

图6.1

![](d9f55e2cc4430e2a0c5118e136311a0b200c3b9c8b39ff8e1af51d82bdbf6eca.jpg)

<details>
<summary>line</summary>

| ω       | F(ω) |
| ------- | ---- |
| 0       | 2a   |
| 1/2a    | 0    |
| 1/a     | 0    |
| 3/2a    | 0    |
</details>

图6.2

例2 设

$$
f (t) = \sum_ {m = - \infty} ^ {\infty} \delta (t - m T), \tag {6.48}
$$

其中 $T > 0$ （见图6.3），则

$$
F (\omega) = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \delta \left(\omega - \frac {m}{T}\right) \tag {6.49}
$$

(见图 6.4).

此结果验证如下:首先注意到,在 Poisson 求和公式(3.65), (3.66)中,把周期为 1 换成周期为 T,可以改写成

$$
\sum_ {m = - \infty} ^ {\infty} f (x + m T) = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \hat {f} \left(\frac {m}{T}\right) \mathrm{e} ^ {\frac {2 \pi m x}{T}}, \tag{3.65}
$$

$$
\sum_ {m = - \infty} ^ {\infty} f (m T) = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \hat {f} \left(\frac {m}{T}\right). \tag{3.66}
$$

其次，对于由(6.48)式给出的广义函数 $f(t)$ ，设 $\varphi \in \mathcal{S}$ ，显然 $\varphi$ 与 $\hat{\varphi}$ 满足 Poisson 求和公式成立的条件，按定义可得

$$
\begin{array}{l} \langle \hat {f}, \varphi \rangle = \langle f, \hat {\varphi} \rangle = \left\langle \sum_ {m = - \infty} ^ {\infty} \delta (t - m T), \hat {\varphi} (t) \right\rangle = \sum_ {m = - \infty} ^ {\infty} \hat {\varphi} (m T) \\ = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \varphi \left(\frac {m}{T}\right) = \left\langle \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \delta \left(\omega - \frac {m}{T}\right), \varphi (\omega) \right\rangle , \\ \end{array}
$$

其中第四个等号成立用到(3.66').由 $\varphi$ 的任意性便知

$$
\hat {f} (\omega) = F (\omega) = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \delta \left(\omega - \frac {m}{T}\right),
$$

即(6.49)式成立.

![](64202b81f22f09c1c79b3b96b11176381f69d99e07fbe3df24632543c7eb7cc9.jpg)

<details>
<summary>text_image</summary>

y
f(t)
O T t
</details>

图6.3

![](bbea5ec8ff20222944669a14a1e17ac1c1a7e6d2799213450d563cd7a98dbfbb.jpg)

<details>
<summary>text_image</summary>

y
F(ω)
O 1/T̅ ω
</details>

图6.4

给定某个物理系统(电路或光学系统等), 令一个输入信号 $f(t)$ 通过它, 就得到一个输出信号 $g(t)$ . 在无线电技术中, 研究信号通过电路的变化(也叫做电路对信号的响应), 是一个很重要的问题. 求解信号的这种变化常需要列出微分方程, 从而要用到 §6.6 中讲述的 Fourier 分析方法.

例 3 设输入端的电压信号为 $f(t)$ ,

$$
f (t) = \left\{ \begin{array}{l l} V, & t > 0, \\ 0, & t <   0, \end{array} \right.
$$

通过 RC 电路(如图 6.5 所示), 其输出端的电压信号为 $g(t)$ . 求 $g(t)$ .

解 根据回路电压定律,可以列出 RC 串联电路中电容 C 上电压 $u_{t}$ 满足的微分方程(省略),从而得知输出端电压 $g(t)$ (与电

![](049daf1dc6ff08b18b4821e28550738167a67367a908b14ebf2e089593b2432c.jpg)

<details>
<summary>text_image</summary>

R
f(t)
C
g(t)
</details>

图 6.5

容上的电压相同)满足微分方程

$$
R C \frac {\mathrm{d} g (t)}{\mathrm{d} t} + g (t) = f (t),
$$

把它改写成

$$
\frac {\mathrm{d} g (t)}{\mathrm{d} t} + \frac {1}{R C} g (t) = \frac {1}{R C} f (t). \tag {6.50}
$$

利用 §6.6 例 5 可知算子 $L = \frac{\mathrm{d}}{\mathrm{d}t} + \frac{1}{RC}$ 的基本解为

$$
E = H (t) \mathrm{e} ^ {- \frac {t}{R C}}.
$$

于是,根据定理 6.13 求得方程(6.50)的解为

$$
\begin{array}{l} g (t) = \left(E * \frac {1}{R C} f\right) (t) = \frac {1}{R C} \int_ {- \infty} ^ {\infty} H (x) \mathrm{e} ^ {- \frac {x}{R C}} f (t - x) \mathrm{d} x \\ = \frac {V}{R C} \int_ {0} ^ {t} \mathrm{e} ^ {- \frac {x}{R C}} \mathrm{d} x = V (1 - \mathrm{e} ^ {- \frac {x}{R C}}), \quad t \geqslant 0. \\ \end{array}
$$

这就是输出电压信号.

下面介绍信号分析的一个基本定理,它结合了 Fourier 级数与 Fourier 变换的技巧.

设 $f(t)$ 是连续信号, 若通过测量只取到它在某个时间序列 $\{t_{j}\}$ $(t_{1}<t_{2}<\cdots)$ 处的值, 由此想要知道 f 在其他点的值, 一般是办不到的. 但是, 如果信号 $f(t)$ 的频率范围是有限的, 其频率不超过 M, 亦即, $\hat{f}(\omega)$ 在有限区间 $[-M, M]$ 之外为零, 那么, 就能够由 f 的离散值集 $\{f(t_{j})\}$ (通常是每隔一段时间 $\Delta t$ 取出一个瞬时值) 来确定 $f(t)$ 的值, 也就是由离散信号 $\{f(t_{j})\}$ 可以恢复连续信号 $f(t)$ .

定理 6.17(时间抽样定理) 设 $f \in L^{2}(R)$ ，并且当 $|\omega| \geqslant M$ 时 $\hat{f}(\omega) = 0$ ，则 f 的值可由它在时间间隔为 $\frac{1}{2M}$ 的可列个值 $f\left(\frac{n}{2M}\right) (n = 0, \pm 1, \pm 2, \cdots)$ 所确定，有以下等式成立：

$$
f (t) = \sum_ {n = - \infty} ^ {\infty} f \left(\frac {n}{2 M}\right) \frac {\sin \pi (2 M t - n)}{\pi (2 M t - n)}. \tag {6.51}
$$

若记 $T = \frac{1}{2M}$ ，上式可改写为

$$
f (t) = T \sum_ {n = - \infty} ^ {\infty} f (n T) \frac {\sin 2 \pi M (t - n T)}{\pi (t - n T)}. \tag{6.51}
$$

证明 对于 $f \in L^2(R)$ , 有以下反演公式成立,

$$
f (t) = 1, 1. \mathrm{m}. \int_ {- r} ^ {r} \hat {f} (\omega) \mathrm{e} ^ {2 \pi i t \omega} \mathrm{d} \omega = \int_ {- M} ^ {M} \hat {f} (\omega) \mathrm{e} ^ {2 \pi i t \omega} \mathrm{d} \omega . \tag {6.52}
$$

把 $\hat{f}(\omega)$ 与 $e^{2\pi mt\omega}$ 看作 $L^{2}[-M,M]$ 中的函数，它们的 Fourier 系数分别记为 $c_{n}$ 与 $d_{n}$ . 按定义及 (6.52) 得到

$$
c _ {- n} = \frac {1}{2 M} \int_ {- M} ^ {M} \hat {f} (\omega) \mathrm{e} ^ {\frac {| n \pi \omega |}{M}} \mathrm{d} \omega = \frac {1}{2 M} f \left(\frac {n}{2 M}\right),
$$

$$
d _ {n} = \frac {1}{2 M} \int_ {- M} ^ {M} \mathrm{e} ^ {2 \pi i t \omega} \mathrm{e} ^ {- \frac {i n \pi \omega}{M}} \mathrm{d} \omega = \frac {\sin (2 M t - n) \pi}{(2 M t - n) \pi},
$$

于是，把 Parseval 等式(2.56)换成周期为 $2M$ 的变形，由它得到

$$
f (t) = \int_ {- M} ^ {M} \hat {f} (\omega) \mathrm{e} ^ {2 \pi i t \omega} \mathrm{d} \omega = 2 M \sum_ {n = - \infty} ^ {\infty} c _ {- n} d _ {n}
$$

$$
= \sum_ {n = - \infty} ^ {\infty} f \left(\frac {n}{2 M}\right) \frac {\sin (2 M t - n) \pi}{(2 M t - n) \pi}. \quad I
$$

时间抽样定理有一个对偶形式, 就是频率抽样定理: 设 $f \in L^{2}(R)$ , 当 $|t| > A$ 时, $f(t) = 0$ , 则

$$
\hat {f} (\omega) = \sum_ {n = - \infty} ^ {\infty} \hat {f} \left(\frac {n}{2 A}\right) \frac {\sin (2 A \omega - n) \pi}{(2 A \omega - n) \pi}.
$$

其证明类似.

(6.51)式中级数收敛的速度不够快,因为当 $x \to \infty$ 时, $\frac{\sin x}{x}$ 衰减速度较慢. 欲知提高收敛速度的方法,请看习题中第 14 题.

# 习题

1. 设 $f(x)$ 是实轴上的慢增 $C^\infty$ 函数，试证明：

$$
\lim _ {\varepsilon \rightarrow + 0} \langle f (x) \mathrm{e} ^ {- \varepsilon | x |}, \varphi (x) \rangle = \langle f, \varphi \rangle , \quad \varphi \in \mathcal {S},
$$

也就是

$$
\lim _ {\varepsilon \to + 0} f (x) \mathrm{e} ^ {- \varepsilon | x |} = f (x) \quad (\text {在}   \mathcal {S} ^ {\prime}   \text {中}).
$$

2. 求下列 Fourier 变换：

(1) $(\operatorname{sgn} x)^{\wedge}$ ;   
(2) $(H(x))^{\wedge}, H(x)$ 是 Heaviside 函数.

(提示：可用 sgnx 与常数函数的线性组合来表示 $H(x)$ )

3. 利用等式

$$
x ^ {- m} = \frac {(- 1) ^ {m - 1}}{(m - 1) !} \frac {\mathrm{d} ^ {m - 1}}{\mathrm{d} x ^ {m - 1}} (x ^ {- 1}), \quad m \geqslant 1,
$$

求 Fourier 变换 $(x^{-m})^{\wedge}$ .

4. 利用平移变换求下列 Fourier 变换：

(1) $\left(\frac{1}{x - a}\right)^{\wedge}$ ;

(2) $\left(\frac{1}{(x - a)^m}\right)^\wedge$ .

5. 设 $m \geqslant 1$ ，求：

(1) $[x^{m}H(x)]^{\wedge}$ ;

(2) $[x^{m}\mathrm{sgn}x]^{\wedge}$ .

6. 求下列函数的 Fourier 变换：

(1) $(x^{2} - 4)^{-1}$ ;

(2) $[x^2 (1 + x^2)]^{-1}$ .

(提示：利用部分分式)

7. 求 $x^{m}\delta^{(n)}(x)$ 的Fourier变换, 其中 $m$ 与 $n$ 是正整数.

8. 设 $u \in \mathcal{S}'$ ，如果对一切奇(偶)函数 $\varphi \in \mathcal{S}$ 有

$$
\langle u (x), \varphi (x) \rangle = 0,
$$

就称 $u$ 是偶(奇)的. 试证明：

(1) $\frac{1}{x}$ 是奇的；  
(2) $\delta(x)$ 是偶的；当 $k$ 是偶数（奇数）时， $\delta^{(k)}(x)$ 是偶（奇）的；

(3) 若 $u(x)$ 是偶(奇)的，则 $u'(x)$ 是奇(偶)的；  
(4) 若 $u(x)$ 是偶(奇)的，则 $\hat{u}(x)$ 是偶(奇)的.

9. 证明： $\psi\in\mathcal{S}(\boldsymbol{R}^{1}),\psi^{(j)}(0)=0(j=1,2,\cdots,k-1)$ 的充分必要条件是存在一个函数 $\varphi\in\mathcal{S}(\boldsymbol{R})$ 使得 $\psi(x)=x^{k}\varphi(x),x\in\boldsymbol{R}$ .

10. 证明：

(1) 方程 $xv = 1$ 在 $\mathcal{S}'(\pmb{R})$ 中的通解是

$$
v = \frac {1}{x} + c \delta ,
$$

其中 $1 / x$ 是由(5.2)式给定的主值意义下的广义函数， $c$ 是任意常数；

(2) 方程 $xv = \ln |x|$ 在 $\mathcal{S}'(R)$ 中的通解是

$$
v = \frac {\ln | x |}{x} + c \delta ,
$$

其中 $c$ 是任意常数， $\frac{\ln|x|}{x}$ 是下述广义函数

$$
\begin{array}{l} \left\langle \frac {\ln | x |}{x}, \varphi \right\rangle = \lim _ {\varepsilon \rightarrow + 0} \left(\int_ {- \infty} ^ {- \varepsilon} \frac {\ln | x |}{x} \varphi (x) d x \right. \\ \left. + \int_ {\varepsilon} ^ {+ \infty} \frac {\ln | x |}{x} \varphi (x) \mathrm{d} x\right), \quad \varphi \in \mathcal {S} (\boldsymbol {R}). \\ \end{array}
$$

11. 证明：方程 $xv = \delta$ 在 $\mathcal{D}'(R)$ 中的通解是

$$
v = c \delta - \delta^ {\prime},
$$

其中 $c$ 是任意常数.

12. 求下列算子的基本解：

(1) $\frac{\mathrm{d}}{\mathrm{d}x}$ ; (2) $\frac{\mathrm{d}^2}{\mathrm{d}x^2} + a^2, a > 0.$

13. 叙述并证明时间抽样定理在下述情形的变型: 设 $\hat{f}(\omega)=0$ , 对一切 $\omega\in[a,b]$ , 试给出由 f 的离散值 $\left\{f\left(\frac{n}{b-a}\right)\right\}$ 确定 $f(t)$ 的公式. (提示: 作 $g(t)$ , 使得 $\hat{g}(\omega)=\hat{f}(\omega+h)$ , 且 $\hat{g}$ 在 $|\omega|>\frac{b-a}{2}$ 处为零.)

14. 设 $f \in L^{2}(\mathbb{R})$ ，当 $|\omega| \geqslant M$ 时， $\hat{f}(\omega) = 0$ ，又设 $\lambda > 1$ . 作函数 $g_{\lambda}$ ，使得

$$
\hat {g} _ {\lambda} (x) = \Omega (x, M, (\lambda - 1) M) = \left\{ \begin{array}{l l} 1, & | x | \leqslant M, \\ 0, & | x | \geqslant \lambda M, \\ \text {线性函数}, M \leqslant | x | \leqslant \lambda M \end{array} \right.
$$

(参看 §3.6 例 2). 观察得知 $\hat{f} = \hat{g}_{\lambda} \cdot \hat{f}$ . 试证明:

$$
\begin{array}{l} f (t) = \int_ {- \lambda M} ^ {\lambda M} \hat {f} (\omega) \hat {g} _ {\lambda} (\omega) \mathrm{e} ^ {2 \pi i t \omega} \mathrm{d} \omega \\ = \frac {1}{2 \lambda M} \sum_ {n = - \infty} ^ {\infty} f \left(\frac {n}{2 \lambda M}\right) g _ {\lambda} \left(t - \frac {n}{2 \lambda M}\right), \\ \end{array}
$$

其中

$$
g _ {\lambda} (t) = \frac {\sin^ {2} \pi \lambda M t - \sin^ {2} \pi M t}{(\lambda - 1) M \pi^ {2} t ^ {2}}.
$$

(本题给出 $f(t)$ 的一个抽样公式, 使得级数中的函数 $g_{\lambda}(t)$ 在无穷远处以 $t^{-2}$ 的速度趋于零.)

15. 设 $f(x)$ 是 $\pmb{R}$ 上以 $2\pi$ 为周期的局部可积函数，它的Fourier系数为

$$
c _ {k} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {- 1 k x} \mathrm{d} x.
$$

试证明：在(周期)广义函数的意义下，

$$
f (x) = \lim _ {n \rightarrow \infty} \sum_ {k = - n} ^ {n} c _ {k} \mathrm{e} ^ {\mathrm{i} k x},
$$

亦即 $\langle f, \varphi \rangle = \lim_{n \to \infty} \left\langle \sum_{k=-n}^{n} c_k e^{ikx}, \varphi(x) \right\rangle, \quad \varphi \in \mathcal{D}_{2\pi}(R)$ ,

其中 $\mathcal{D}_{2\pi}(\pmb {R})$ 表示 $C^\infty (\pmb {R})$ 中以 $2\pi$ 为周期的函数全体，并且

$$
\langle f, \varphi \rangle = \int_ {- \pi} ^ {\pi} f (x) \varphi (x) \mathrm{d} x.
$$

16. 试证明：在 $\mathcal{S}'(R)$ 中有

$$
\sum_ {m = - \infty} ^ {\infty} \delta (t - m T) = \frac {1}{T} \sum_ {m = - \infty} ^ {\infty} \mathrm{e} ^ {- \frac {2 \pi i m t}{T}}.
$$

# 附录 I 多重 Fourier 级数

前面对于一元函数给出的 Fourier 级数的概念不难推广到多元函数.

在 $\pmb{R}^n$ 中记 $T^n$ 为以下立方体

$$
\boldsymbol {T} ^ {n} = \{x = (x _ {1}, \dots , x _ {n}): - \pi <   x _ {j} \leqslant \pi , j = 1, 2, \dots , n \}.
$$

用 $L^{p}(T^{n})$ 表示在 $T^{n}$ 上属于 $L^{p}$ 的周期函数(它们按每个自变量 $x_{j}$ 都以 $2\pi$ 为周期). 而 $C(T^{n})$ 则表示连续的周期函数. 用 $Z^{n}$ 表示 $R^{n}$ 中的格子点全体(每个坐标都是整数的点称为格子点). 对于 $m \in Z^{n}, m \cdot x = m_{1}x_{1} + \cdots + m_{n}x_{n}$ .

函数系 $\{\mathrm{e}^{im\cdot r}\}_{m\in \mathbb{Z}^n}$ 具有如下性质：(i）周期性；(ii）正交性，即

$$
\int_ {T ^ {n}} \mathrm{e} ^ {\mathrm{i} m \cdot x} \overline {{\mathrm{e} ^ {\mathrm{i} k \cdot x}}} \mathrm{d} x = 0, \quad m \neq k (m _ {j} \neq k _ {j}, j = 1, 2, \dots , n);
$$

(111) 完全性, 即若 $f \in L(T^n)$ , 且对一切 $m \in \mathbf{Z}^n$ ,

$$
\int_ {T ^ {n}} f (x) \mathrm{e} ^ {- 1 m \cdot x} \mathrm{d} x = 0,
$$

则 $f(x) = 0$ ，a.e..

此完全性可由一维情形的完全性推知. 以 $n = 2$ 为例. 按假定对一切 $(m_{1}, m_{2}) \in \mathbf{Z}^{2}$ 有

$$
\int_ {- \pi} ^ {\pi} \int_ {- \pi} ^ {\pi} f (x _ {1}, x _ {2}) \mathrm{e} ^ {- 1 m _ {1} x _ {1}} \cdot \mathrm{e} ^ {- 1 m _ {2} x _ {2}} \mathrm{d} x _ {1} \mathrm{d} x _ {2} = 0. \tag {1}
$$

记 $f_{m_1}(x_2) = \int_{-\pi}^{\pi} f(x_1, x_2) \mathrm{e}^{-im_1 x_1} \mathrm{d}x_1$ ，(1)式化为

$$
\int_ {- \pi} ^ {\pi} f _ {m _ {1}} (x _ {2}) \mathrm{e} ^ {- 1 m _ {2} x _ {2}} \mathrm{d} x _ {2} = 0, \quad m _ {2} \in \mathbf {Z} ^ {1}.
$$

由 $\{\mathrm{e}^{im_2x_2}\}_{m_2\in \mathbb{Z}^1}$ 的完全性推知 $f_{m_1}(x_2) = 0$ ,a.e.,即有点集 $E_{2,m_1}\subset T$ $= (-\pi ,\pi ]$ ，且 $m(E_{2,m_1}) = 0$ ，使得

$$
f _ {m _ {1}} (x _ {2}) = 0, \quad x _ {2} \in T ^ {1} \backslash E _ {2, m _ {1}}.
$$

令 $E_{2} = \bigcup_{m_{1}\in \mathbf{Z}^{1}}E_{2,m_{1}}$ ，可推知 $m(E_2) = 0.$ 再由 $\{\mathrm{e}^{\mathrm{i}m_1x_1}\}_{m_1\in \mathbf{Z}^1}$ 的完全性推知，对于 $x_{2}\in T^{1}\backslash E_{2}$

$$
f (x _ {1}, x _ {2}) = 0, \quad x _ {1} \in T ^ {1} \backslash E _ {1}, m (E _ {1}) = 0, E _ {1} \subset T ^ {1}.
$$

不难得知 $(T^{1} \backslash E_{1}) \times (T^{1} \backslash E_{2})$ 对于 $T^{2}$ 的补集是零测集. 因此在 $T^{2}$ 中, $f(x_{1}, x_{2}) = 0$ , a.e..

设 $f \in L(T^n)$ , 它的 Fourier 系数定义为

$$
c _ {m} = c _ {m} (f) = \frac {1}{(2 \pi) ^ {n}} \int_ {T ^ {n}} f (x) \mathrm{e} ^ {- \mathrm{i} m \cdot x} \mathrm{d} x, \quad m \in \mathbb {Z} ^ {n}. \tag {2}
$$

$f$ 的Fourier级数为

$$
f (x) \sim \sum_ {m \in Z ^ {n}} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}. \tag {3}
$$

多重Fourier级数理论中有一些是一维结果的直接推广. 我们将着重介绍在多维情形中与一维情形不同的一些问题及结果，或者其证明有新的思想的结果.

# § 1 三种部分和的定义与局部性定理

在一维情形,关于 Fourier 系数的一个基本结果是 Riemann-Lebesgue 引理. 在 n 维情形有类似的结果.

定理1 若 $f \in L(T^n)$ , 则 $\lim_{|m| \to \infty} c_m = 0$ .

证明 可以与一维情形类似,用阶梯函数逼近可积函数的方法来证明.但这里介绍另一种方法.

设 $f \in C^{\infty}(\mathbf{T}^{n})$ ，不妨设 $m \neq 0$ 。若 $m_{j} \neq 0$ ，则由分部积分可得

$$
\int_ {- \pi} ^ {\pi} f (x) \mathrm{e} ^ {- \mathrm{i} m \cdot x} \mathrm{d} x _ {j} = \frac {1}{(\mathrm{i} m _ {j}) ^ {N}} \int_ {- \pi} ^ {\pi} \mathrm{e} ^ {- \mathrm{i} m \cdot x} \frac {\partial^ {N}}{\partial x _ {j} ^ {N}} f (x) \mathrm{d} x _ {j}, \tag {4}
$$

这里 N 是任意正整数.

由 $m \neq 0$ 知，必定 $|m| \geqslant 1$ . 对每个这样的 $m$ ，若取 $j$ 使

$$
\left| m _ {j} \right| = \max \left\{\left| m _ {1} \right|, \dots , \left| m _ {n} \right| \right\},
$$

则有

$$
\begin{array}{l} \left| m \right| = (m _ {1} ^ {2} + \dots + m _ {n} ^ {2}) ^ {\frac {1}{2}} \leqslant \sqrt {n} \left| m _ {j} \right|, \\ \frac {1}{2} (1 + | m |) \leqslant \sqrt {n} | m _ {j} |. \\ \end{array}
$$

从而由(4)推知

$$
\left| c _ {m} \right| \leqslant \frac {A}{\left| m _ {j} \right| ^ {N}} \leqslant \frac {A ^ {\prime}}{(1 + | m |) ^ {N}}. \tag {5}
$$

这表明若 $f \in C^{\infty}(T^{n})$ ，必有 $\lim_{|m| \to \infty} c_{m}(f) = 0$ .

设 $f \in L(T^n)$ . 对任给 $\varepsilon > 0$ , 存在 $g \in C^\infty(T^n)$ , 使得

$$
\int_ {T ^ {n}} | f - g | \mathrm{d} x <   \frac {\varepsilon}{2}.
$$

对这个 $g$ ，由(5)知存在 $M$ ，当 $|m| > M$ 时， $\left|c_m(g)\right| <   \frac{\varepsilon}{2}$ .于是

$$
\begin{array}{l} \left| c _ {m} (f) \right| \leqslant \frac {1}{(2 \pi) ^ {n}} \left| \int_ {T ^ {n}} [ f (x) - g (x) ] e ^ {- i m \cdot x} d x \right| + \left| c _ {m} (g) \right| \\ <   \frac {\varepsilon}{2} + | c _ {m} (g) | <   \varepsilon , \quad | m | > M. \\ \end{array}
$$

推论2 若 $f \in C^{\infty}(T^n)$ , 则 $f$ 的Fourier级数绝对一致收敛于 $f(x)$ .

注 推论 2 的条件可以减弱, 见定理 7.

关于多重 Fourier 级数部分和的定义是与一维情形大不相同的.

在 $n$ 维情形, $n \geqslant 2$ , 设 $E_{j}$ 是 $\mathbb{R}^{n}$ 中的有界域, 并且当 $j \to \infty$ 时, $E_{j}$ 趋向于全空间, 我们把 $f$ 的 Fourier 级数(3)的部分和记为

$$
S _ {E _ {j}} (x) = S _ {E _ {j}} (f, x) = \sum_ {m \in E _ {j}} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}.
$$

可以考虑当 $j \to \infty$ 时, $S_{E_j}(x)$ 是否有极限. 在一维情形, 我们只需讨论区间 $E_N = [-N, N]$ , 部分和为 $S_N(x) = \sum_{|k| \leqslant N} c_k e^{ikx}$ . 而在多维情形, $E_j$ 可以有各种不同的形状, 情况要复杂得多. 由于 Fourier 级数不是正项级数, 如果级数不绝对收敛, 那么, 不同形式的部分和(也就是求和的顺序不同),其收敛性质就会不同.

最重要的特殊情形是区域 $E_{j}$ 为球形或矩形(也叫做 $\pmb{n}$ 维区间)的情形. 我们介绍以下三种部分和：

(i) 球形部分和

$$
S _ {R} (x) = S _ {R} (f, x) = \sum_ {| m | <   R} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}, \tag {6}
$$

即对于 $m \in E_R = \{x : |x| < R\}$ 求和.

(ii) 矩形部分和, 对于 $N=(N_{1},\cdots,N_{n})$ ,

$$
S _ {N} (f, x) = S _ {N _ {1}, \dots , N _ {n}} (x) = \sum_ {\substack {| m _ {j} | \leqslant N _ {j} \\ j = 1, 2, \dots , n}} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}, \tag{7}
$$

一般来说, $N_{j}$ 可以互不相同,但也可以相同.因此,它以方形部分和作为特殊情形.

(iii) 方形部分和, 对于 $N_{1}=N_{2}=\cdots=N_{n}=k$ ,

$$
S _ {k, \dots , k} (f, x) = \sum_ {\substack {| m _ {j} | \leqslant k \\ j = 1, 2, \dots , n}} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}. \tag{8}
$$

对这些不同形式的部分和讨论收敛问题或求和问题时，取极限的方式也不相同。对于球形部分和，讨论 $S_{R}(f,x)$ 当 $R\to\infty$ 时的极限；对于方形部分和，讨论 $S_{k,\ldots,k}(f,x)$ 当 $k\to\infty$ 时的极限；对于矩形部分和，则讨论 $S_{N_{1},\ldots,N_{n}}(f,x)$ 当 $N_{j}\to\infty(j=1,2,\cdots,n)$ 时的极限，我们用 $N\to\infty$ 来表示 $N_{j}\to\infty,j=1,2,\cdots,n$ 。

关于矩形部分和, 可用以下方法化为卷积形式. 先将(2)代入(7), 再多次利用一维的公式(2.8)式, 得到

$$
\begin{array}{l} S _ {N _ {1}, \dots , N _ {n}} (f, x) = \int_ {T ^ {n}} f (t) D _ {N} (x - t) \mathrm{d} t \\ = \int_ {T ^ {n}} f (x - t) D _ {N} (t) \mathrm{d} t, \tag {9} \\ \end{array}
$$

其中

$$
\begin{array}{l} D _ {N} (t) = D _ {N _ {1}} (t _ {1}) \dots D _ {N _ {n}} (t _ {n}) \\ = \frac {1}{\pi^ {n}} \frac {\sin \left(N _ {1} + \frac {1}{2}\right) t _ {1}}{2 \sin \frac {t _ {1}}{2}} \dots \frac {\sin \left(N _ {n} + \frac {1}{2}\right) t _ {n}}{2 \sin \frac {t _ {n}}{2}}. \tag {10} \\ \end{array}
$$

特别,如果函数 $f(x)=f_{1}(x_{1})\cdot f_{2}(x_{2})\cdot\cdots\cdot f_{n}(x_{n})$ , 则

$$
S _ {N _ {1}, \dots , N _ {n}} (f, x) = S _ {N _ {1}} (f _ {1}, x _ {1}) \dots S _ {N _ {n}} (f _ {n}, x _ {n}),
$$

其中 $S_{N_{j}}(f_{j},x_{j})$ 是一维情形的 Fourier 级数部分和， $j=1,2,\cdots,n$ .

在 §2.2 曾指出, 一维情形有局部化定理 (定理 2.9 及推论 2.10). 而在 $n$ 维情形 $(n \geqslant 2)$ , 设 $f \in C(T^n)$ , 它在原点的一个邻域 $\{x: |x| < \delta\}$ 中为零, 由此并不能推知它的矩形部分和 $S_N(f, 0)$ 收敛于零.

我们举出反例来说明. 不妨设 $n = 2$ , 并且设 $f_{1}, f_{2}$ 是一元连续函数, $f(x) = f_{1}(x_{1})f_{2}(x_{2})$ . 取 $f_{1}$ 使得当 $|x_{1}| < \delta$ 时, $f_{1}(x_{1}) = 0$ . 又取 $f_{2}$ 使得它的 Fourier 级数部分和 $S_{N_2}(f_2, 0)$ 无界 (见定理 2.16 末尾的说明, 若取 $f_{2}$ 为该处的 $f$ , 取 $N_{2} = 3 \times 2^{k^3} - 1$ , 便可使 $S_{N_2}(f_2, 0) \geqslant k\ln 2$ ). 以上取法使得当 $|x| < \delta$ 时, $f(x) = 0$ , 并且

$$
S _ {N _ {1}, N _ {2}} (f, 0) = S _ {N _ {1}} \left(f _ {1}, 0\right) S _ {N _ {2}} \left(f _ {2}, 0\right).
$$

虽然当 $N_{1} \to \infty$ 时 $S_{N_1}(f_1,0)$ 的极限为零，但可以取到适当的 $f_{1}$ ，使得对于无穷多个 $N_{1}, S_{N_{1}}(f,0) = A_{N_{1}} \neq 0$ ，从而取 $N_{2}$ 上升得足够快，可以使得 $S_{N_{2}}(f_{2},0)$ 上升得很快（例如使 $S_{N_{2}}(f_{2},0) \geqslant k_{N_{1}} \ln 2 \geqslant \frac{N_{1}}{|A_{N_{1}}|}$ ），以至于 $S_{N_{1},N_{2}}(f,0) = S_{N_{1}}(f_{1},0) S_{N_{2}}(f_{2},0)$ 仍然无界，它不收敛于零。这表明，即使 $f$ 连续，关于矩形部分和的局部化定理对于球形邻域并不成立（关于方形部分和也不成立，证明省略）。

给定一点 $x^{0}=(x_{1}^{0},\cdots,x_{n}^{0})$ 及 $\delta>0$ ，我们称至少满足以下不等式

$$
\left| x _ {1} - x _ {1} ^ {0} \right| <   \delta , \dots , \left| x _ {n} - x _ {n} ^ {0} \right| <   \delta
$$

中之一个的点 $x=(x_{1},\cdots,x_{n})$ 组成的集合为 $x^{0}$ 的一个十字邻域 $\Omega_{\delta}$ ，亦即

$$
\Omega_ {\delta} = \bigcup_ {j = 1} ^ {n} \left\{x: | x _ {j} - x _ {j} ^ {0} | <   \delta \right\},
$$

当 $n = 2$ 时， $\Omega_{\delta}$ 的形状就像一个十字（见图I.1）.

![](8fbcbac62b2161af8ae711f3750aac4aab3bdaba9906b0924ec4ec4d99b4da30.jpg)

<details>
<summary>text_image</summary>

x₂
(x₁⁰, x₂⁰)
O
x₁
</details>

图1.1

定理3 设 $f \in L^{1}(\pmb{T}^{n})$ ，若在 $x^{0}$ 的一个十字邻域 $\Omega_{\delta}$ 内 $f(x) = 0$ ，则当 $N \to \infty$ 时，矩形部分和 $S_{N}(f, x^{0}) \to 0$ .

根据(9)，(10)式以及Riemann-Lebesgue引理便可推得此结论.而且实际上不仅对于点 $x^{0}$ ，对于一切点 $x\in I_{\delta}=\{x:|x_{j}-x_{j}^{0}|<\delta,j=1,2,\cdots,n\}$ ，也有 $\lim_{N\to\infty}S_{N}(f,x)=0$ .

# § 2 收敛与求和

$f$ 的Fourier级数按上述三种部分和来研究, 其收敛性是不相同的.

对于球形部分和,为了便于讨论,常考虑以下的 Bochner-Riesz 平均

$$
S _ {R} ^ {\alpha} (f, x) = \sum_ {| m | <   R} \left(1 - \frac {| m | ^ {2}}{R ^ {2}}\right) ^ {\alpha} c _ {m} e ^ {i m \cdot x}, \tag {11}
$$

$\alpha=\frac{n-1}{2}$ 叫做临界指标.

若 $\alpha >\frac{n - 1}{2},f\in L(T^n)$ ，则有

$$
\lim _ {R \rightarrow \infty} S _ {R} ^ {\alpha} (f, x) = f (x)
$$

几乎处处成立(在Lebesgue点 $x$ 处成立)，并且

$$
\lim _ {R \rightarrow \infty} \| S _ {R} ^ {\alpha} (f) - f \| _ {L (T ^ {n})} = 0.
$$

当 $a \leqslant \frac{n - 1}{2}, n \geqslant 2$ 时，有下述否定性结论：

(i) 存在函数 $f \in L(T^n)$ 使得

$$
\varlimsup_ {R \rightarrow \infty} S _ {R} ^ {(n - 1) / 2} (f, x) = \infty , \quad \text { a.e. }.
$$

这表明对于临界指标,几乎处处可求和不能成立.对于可积函数,关于临界指标的局部化定理也不成立 $^{①}$ .

(ii) 存在 $f \in L^{p}(\mathbf{T}^{n}), 1 < p < 2$ , 使得 $S_{R}(f, x)$ (即 $S_{R}^{0}(f, x)$ ) 几乎处处发散②. 也就是说, 对于 $L^{p}(\mathbf{T}^{n})$ 中的函数 $(1 < p < 2)$ , 球形部分和的几乎处处收敛性不成立.

以上结果详见 E. M. Stein, G. Weiss[4]第七章以及陆善镇，王昆扬著“Bochner-Riesz 平均”.

对于方形部分和,有些一维的结果可以推广到 n 维.70 年代初,C.Fefferman 等人证明了:若 $f \in L^{p}(T^{n}), p > 1$ ,则方形部分和

$$
\lim _ {R \rightarrow \infty} S _ {k, \dots , k} (f, x) = f (x), \quad \text { a.e. }.
$$

对于多维情形, 矩形部分和的收敛性是很差的. C. Fefferman (1971) 证明: 存在 $[0, 2\pi] \times [0, 2\pi]$ 上的二元连续函数 $f$ , 它的 Fourier 级数的矩形部分和 $S_{N_1, N_2}(f, x)$ 处处发散 ( $N_1 \to \infty, N_2 \to \infty$ ).

于是, 有必要讨论矩形部分和的各种求和法. 这里只介绍 $(C,1)$ 平均(即算术平均)与 Abel 平均.

设 $f \in L(T^n), (C, 1)$ 平均为

$$
\begin{array}{l} \sigma_ {N} (f, x) = \sigma_ {N _ {1}, \dots , N _ {n}} (x) \\ = \frac {1}{(N _ {1} + 1) \cdots (N _ {n} + 1)} \sum_ {k _ {1} = 0} ^ {N _ {1}} \dots \sum_ {k _ {n} = 0} ^ {N _ {n}} S _ {k _ {1}, \dots , k _ {n}} (x) \\ \end{array}
$$

$$
= \int_ {T ^ {n}} f (x - t) K _ {n} (t) \mathrm{d} t, \tag {12}
$$

其中 $K_{N}(t)=K_{N_{1}}(t_{1})\cdots K_{N_{n}}(t_{n})$ ,

$$
K _ {N _ {j}} \left(t _ {j}\right) = \frac {1}{N _ {j} + 1} \sum_ {k = 0} ^ {N _ {j}} D _ {k} \left(t _ {j}\right) = \frac {1}{2 \pi \left(N _ {j} + 1\right)} \left[ \frac {\sin \frac {1}{2} \left(N _ {j} + 1\right) t _ {j}}{\sin \left(\frac {t _ {j}}{2}\right)} \right] ^ {2}.
$$

Abel 平均为

$$
\begin{array}{l} f (r, x) = \sum_ {m \in \mathbf {Z} ^ {n}} c _ {m _ {1}, \dots , m _ {n}} r _ {1} ^ {| m _ {1} |} \dots r _ {n} ^ {| m _ {n} |} e ^ {i \left(m _ {1} x _ {1} + \dots + m _ {n} x _ {n}\right)} \\ = \frac {1}{\pi^ {n}} \int_ {T ^ {n}} f (x - t) P (r, t) \mathrm{d} t, \tag {13} \\ \end{array}
$$

其中 $r=(r_{1},\cdots,r_{n}),0\leqslant r_{j}<1,j=1,2,\cdots,n,$

$$
P (r, t) = P \left(r _ {1}, t _ {1}\right) \dots P \left(r _ {n}, t _ {n}\right),
$$

$$
P \left(r _ {j}, t _ {j}\right) = \frac {1 - r _ {j} ^ {2}}{2 \left(1 - 2 r _ {j} \cos t _ {j} + r _ {j} ^ {2}\right)}.
$$

显然有

$$
\int_ {T ^ {n}} K _ {N} (t) \mathrm{d} t = 1, \quad \frac {1}{\pi^ {n}} \int_ {T ^ {n}} P (r, t) \mathrm{d} t = 1. \tag {14}
$$

以下定理是 Fejer 定理对多重 Fourier 级数的推广. 记 $Q=\{x:-\pi\leqslant x_{j}\leqslant\pi,j=1,2,\cdots,n\}$ .

定理4 设 $f$ 有界, 则在 $f$ 的连续点 $x^0$ 处有

$$
\lim _ {N \rightarrow \infty} \sigma_ {N} (f, x ^ {0}) = f \left(x ^ {0}\right), \tag {15}
$$

并且在 $Q$ 中由连续点组成的任何闭集上，其收敛是一致的.

证明 我们知 $K_{N}(x)$ 非负及有(14)的第一式，又有

$$
\lim _ {N \rightarrow \infty} \int_ {\substack {| t | \geqslant \delta\\t \in Q}} K _ {N} (t) \mathrm{d} t = 0, \quad 0 <   \delta <   \pi . \tag{16}
$$

此式证明如下，由 $|t| = (t_1^2 + \cdots + t_n^2)^{1/2} \geqslant \delta$ 推知至少有一个 $j_0$ ，使得 $|t_{j_0}| \geqslant \delta / \sqrt{n}$ （否则，对 $j = 1, 2, \cdots, n, |t_j| < \delta / \sqrt{n}$ ，便有 $t_1^2 + \cdots + t_n^2 < \delta^2$ ，矛盾），所以

$$
\begin{array}{l} 0 \leqslant \int_ {\substack {| t | \geqslant \delta \\ t \in Q}} K _ {N} (t) \mathrm{d} t \\ \leqslant \int_ {\pi \geqslant | t _ {j _ {0}} | \geqslant \delta / \sqrt {n}} K _ {N _ {J _ {0}}} (t _ {J _ {0}}) \mathrm{d} t _ {J _ {0}} \cdot \left[ \prod_ {\substack {j = 1 \\ j \neq J _ {0}}} ^ {n} \int_ {- \pi} ^ {\pi} K _ {N _ {j}} (t _ {j}) \mathrm{d} t _ {j} \right] \\ \leqslant \int_ {\pi \geqslant | t _ {j _ {0}} | \geqslant \delta / \sqrt {n}} K _ {N _ {J _ {0}}} (t _ {J _ {0}}) \mathrm{d} t _ {J _ {0}} \rightarrow 0 (N _ {j} \rightarrow \infty , j = 1, 2, \dots , n). \\ \end{array}
$$

设 $x^0$ 是 $f$ 的连续点

$$
\begin{array}{l} \sigma_ {N} \left(f, x ^ {0}\right) - f \left(x ^ {0}\right) = \int_ {Q} \left[ f \left(x ^ {0} - t\right) - f \left(x ^ {0}\right) \right] K _ {N} (t) d t \\ = \int_ {t \in Q, | t | <   \delta} [ f (x ^ {0} - t) - f (x ^ {0}) ] K _ {N} (t) d t \\ + \int_ {t \in Q, | t | \geqslant \delta} [ f (x ^ {0} - t) - f (x ^ {0}) ] K _ {N} (t) \mathrm{d} t \\ = I _ {1} + I _ {2}. \tag {17} \\ \end{array}
$$

任给 $\varepsilon > 0$ ，存在 $\delta > 0$ ，当 $|t| < \delta$ 时，

$$
\left| f (x ^ {0} - t) - f (x ^ {0}) \right| <   \frac {\varepsilon}{2}, \tag {18}
$$

取这个 $\delta$ 作为(17)中的 $\delta$ ，便有 $|I_1| \leqslant \frac{\varepsilon}{2}$ . 又因 $f$ 有界， $|f(x)| \leqslant M$ ，所以

$$
\left| I _ {2} \right| \leqslant 2 M \int_ {t \in Q, | t | \geqslant \delta} K _ {N} (t) \mathrm{d} t.
$$

由(16)式知，取 A 充分大，当 $N_{j} \geqslant A (j = 1, 2, \cdots, n)$ 时，有 $|I_{2}| \leqslant \frac{\varepsilon}{2}$ .

因为 $f(x)$ 在 $Q$ 中由连续点组成的闭集上一致连续，可以取到共同的 $\delta$ 使对这些点有(18)式成立，所以(15)式的收敛是一致的。

推论5 若 $f \in C(T^n)$ , 则

$$
\lim _ {N \rightarrow \infty} \sigma_ {N} (f, x) = f (x)
$$

对 $x \in Q$ 一致收敛. 因此存在三角多项式一致逼近 $f(x)$ .

定理6 若 $f \in L^{p}(T^{n}), 1 \leqslant p < \infty$ ，则

$$
\| \sigma_ {N} (f) \| _ {p} \leqslant \| f \| _ {p} = \left(\int_ {\mathbf {T} ^ {n}} | f (x) | ^ {p} \mathrm{d} x\right) ^ {1 / p}, \tag {19}
$$

$$
\| \sigma_ {N} (f) - f \| _ {p} \rightarrow 0 \quad (\text {当} N \rightarrow \infty). \tag {20}
$$

证明 用广义 Minkowski 不等式, 得

$$
\begin{array}{l} \left(\int_ {T ^ {n}} \left| \sigma_ {N} (x) \right| ^ {p} \mathrm{d} x\right) ^ {1 / p} = \left(\int_ {T ^ {n}} \left| \int_ {T ^ {n}} f (x - t) K _ {N} (t) \mathrm{d} t \right| ^ {p} \mathrm{d} x\right) ^ {1 / p} \\ \leqslant \int_ {T ^ {n}} \left(\int_ {T ^ {n}} | f (x - t) | ^ {p} \mathrm{d} x\right) ^ {1 / p} K _ {N} (t) \mathrm{d} t = \| f \| _ {p}. \\ \end{array}
$$

对任给 $\varepsilon > 0$ ，可取到 $\varphi \in C(T^n)$ ，使

$$
\| f - \varphi \| _ {p} <   \varepsilon .
$$

于是用(19)式便得到

$$
\begin{array}{l} \| f - \sigma_ {N} (f) \| _ {p} \leqslant \| f - \varphi \| _ {p} + \| \varphi - \sigma_ {N} (\varphi) \| _ {p} \\ + \left\| \sigma_ {N} (\varphi - f) \right\| _ {p} \\ \leqslant \varepsilon + \| \varphi - \sigma_ {N} (\varphi) \| _ {p} + \varepsilon . \\ \end{array}
$$

再由推论5可推知 $\lim_{N\to \infty}\| \varphi -\sigma_N(\varphi)\| _p = 0.$ 这样就得到(20)式.

定理 4 及定理 6 的结果对于 Abel 求和也成立.

关于矩形部分和及方形部分和的讨论详见 Zygmund[7]第十七章以及 S. Igari “Lectures on Fourier Series of Several Variables”.

若 $f \in L^{2}(T^{n})$ ，其Fourier级数为(3)，则具有与一维情形类似的Bessel不等式，并有Parseval等式如下：

$$
(2 \pi) ^ {- n} \int_ {T ^ {n}} | f (x) | ^ {2} \mathrm{d} x = \sum_ {m \in Z ^ {n}} \left| c _ {m} \right| ^ {2}. \tag {21}
$$

其证明与一维情形类似(单重积分换成 n 重积分).

定理7 设对某个 $k > \frac{n}{2}, f \in C^{(k)}(\mathbf{T}^n)$ ，则 $\sum_{m \in \mathbb{Z}^n} |c_m| < \infty$ ，并且 $f$ 的Fourier级数绝对一致收敛于 $f(x)$ .

证明 利用周期性,通过分部积分可得

$$
\int_ {T ^ {n}} (\mathrm{D} ^ {a} f) (x) \mathrm{e} ^ {- \mathrm{i} m \cdot x} \mathrm{d} x = (\mathrm{i} m) ^ {a} \int_ {T ^ {n}} f (x) \mathrm{e} ^ {- \mathrm{i} m \cdot x} \mathrm{d} x
$$

$$
= (2 \pi) ^ {n} (\mathrm{i} m) ^ {\alpha} c _ {m}, \quad | \alpha | \leqslant k,
$$

即 $\mathrm{D}^a f$ 的Fourier系数为 $\{(im)^a c_m\}_{m\in \mathbb{Z}^n}$

当 $|\alpha| \leqslant k$ 时, $\mathrm{D}^{\alpha}f$ 连续, 显然平方可积. 由 Parseval 等式 (21) 可知

$$
\sum_ {m \in \mathbb {Z} ^ {n}} \left| c _ {m} \right| ^ {2} \left| m ^ {\alpha} \right| ^ {2} = (2 \pi) ^ {- n} \| D ^ {\alpha} f \| _ {2} ^ {2} <   + \infty ,
$$

式中 $m^{\alpha}=m_{1}^{\alpha_{1}}\cdots m_{n}^{\alpha_{n}}$ . 由此得知

$$
\sum_ {| \alpha | = k} \left(\sum_ {m \in \mathbb {Z} ^ {n}} \left| c _ {m} \right| ^ {2} \left| m ^ {\alpha} \right| ^ {2}\right) <   + \infty , \quad | \alpha | = \alpha_ {1} + \dots + \alpha_ {n}. \tag {22}
$$

我们由多项式定理得到

$$
\begin{array}{l} \left| m \right| ^ {2 k} = \left(m _ {1} ^ {2} + \dots + m _ {n} ^ {2}\right) ^ {k} = \sum_ {a _ {1} + \dots + a _ {n} = k} a _ {\alpha} \left(m _ {1} ^ {2}\right) ^ {\alpha_ {1}} \dots \left(m _ {n} ^ {2}\right) ^ {\alpha_ {n}} \\ \leqslant A \sum_ {a _ {1} + \dots + a _ {n} = k} \left(m _ {1} ^ {2}\right) ^ {a _ {1}} \dots \left(m _ {n} ^ {2}\right) ^ {a _ {n}} = A \sum_ {| a | = k} \left| m ^ {\alpha} \right| ^ {2}, \tag {23} \\ \end{array}
$$

其中 $a_{\alpha}=\frac{k!}{\alpha_{1}!\cdots\alpha_{n}!}, A=\max\{a_{\alpha}: \alpha_{1}+\cdots+\alpha_{n}=k\}$ . 于是, 用(23)式及 Holder 不等式可推得

$$
\begin{array}{l} \sum_ {| m | > 0} \left| c _ {m} \right| \leqslant \sum_ {| m | > 0} \left| c _ {m} \right| \left[ \left(A \sum_ {| \alpha | = k} \left| m ^ {\alpha} \right| ^ {2}\right) ^ {\frac {1}{2}} | m | ^ {- k} \right] \\ \leqslant A ^ {\frac {1}{2}} \left[ \sum_ {| m | > 0} \left| c _ {m} \right| ^ {2} \left(\sum_ {| \alpha | = k} \left| m ^ {\alpha} \right| ^ {2}\right) \right] ^ {\frac {1}{2}} \left(\sum_ {| m | > 0} | m | ^ {- 2 k}\right) ^ {\frac {1}{2}}. \tag {24} \\ \end{array}
$$

注意到当 $k > \frac{n}{2}$ 时，级数 $\sum_{|m| > 0}|m|^{-2k}$ 收敛.因此由(24)及(22)式推知 $\sum_{m\in \mathbf{Z}^n}|c_m| < +\infty$

由此可知级数 $\sum_{m\in \mathbb{Z}^n}c_m\mathrm{e}^{1m\cdot x}$ 绝对一致收敛.记级数的和为 $g(x)$ ，即

$$
g (x) = \sum_ {m \in \mathbf {Z} ^ {n}} c _ {m} \mathrm{e} ^ {\mathrm{i} m \cdot x}.
$$

显然知 $g \in C(T^n)$ , 它的 Fourier 系数是 $\{c_m\}_{m \in \mathbb{Z}^n}$ . 这表明 $f(x) - g(x)$ 的一切 Fourier 系数为零. 根据三角函数系 $\{\mathrm{e}^{\mathrm{i}m \cdot x}\}_{m \in \mathbb{Z}^n}$ 的完全性便推知 $f(x) = g(x)$ . 因此 $f$ 的 Fourier 级数绝对一致收敛到 $f(x)$ .

# 附录Ⅱ 快速 Fourier 变换

因为各式各样的问题都能用 Fourier 变换来处理, 所以, 很希望能用计算机来计算 Fourier 变换. 本附录研究 Fourier 变换

$$
F (\omega) = \hat {f} (\omega) = \int_ {- \infty} ^ {\infty} f (t) \mathrm{e} ^ {- 2 \pi i \omega t} \mathrm{d} t \tag {1}
$$

的数值计算问题.

# § 1 离散 Fourier 变换

为了计算 $F(\omega)$ ，必须将(1)式中的积分改为有限积分，然后用求和来逼近积分，最后计算对一组离散的 $\omega$ 值的求和.

Poisson 求和公式是把(1)变为有限积分的基础. 我们引进函数

$$
g (t) = \sum_ {n = - \infty} ^ {\infty} f (t + n T), \quad G (\omega) = \sum_ {n = - \infty} ^ {\infty} F (\omega + n \omega_ {1}). \tag {2}
$$

易见 $g(t)$ 是以 $T$ 为周期的函数, $G(\omega)$ 是以 $\omega_{1}$ 为周期的函数. 根据 §6.7 中给出的 Poisson 求和公式 (3.65') 得知

$$
g (t) = \frac {1}{T} \sum_ {n = - \infty} ^ {\infty} F \left(\frac {n}{T}\right) \mathrm{e} ^ {\frac {2 \pi i n t}{T}} = \frac {1}{T} \sum_ {n = - \infty} ^ {\infty} F \left(n \omega_ {0}\right) \mathrm{e} ^ {2 \pi i n \omega_ {0} t}, \omega_ {0} = \frac {1}{T}. \tag {3}
$$

类似地有

$$
G (\omega) = \frac {1}{\omega_ {1}} \sum_ {m = - \infty} ^ {\infty} f (m T _ {1}) \mathrm{e} ^ {- 2 m m T _ {1} \omega}, \quad T _ {1} = \frac {1}{\omega_ {1}}. \tag {4}
$$

§ 3.6 曾给出 Poisson 求和公式成立的充分条件, 此处不再讨论它们成立的条件①.

由(3)形式地可知 $F(n\omega_{0})$ 是周期函数 $T \cdot g(t)$ 的 Fourier 系

数，即

$$
F (n \omega_ {0}) = \int_ {- \frac {T}{2}} ^ {\frac {T}{2}} g (t) \mathrm{e} ^ {- 2 \pi i n \omega_ {0} t} \mathrm{d} t. \tag {5}
$$

要计算 $F(\omega)$ 的取样值 $F(n\omega_0)$ ，需用到以下结论：

若 T 是任意正常数, N 是任意正整数, 及

$$
\omega_ {0} = \frac {1}{T}, T _ {1} = \frac {T}{N}, \omega_ {1} = \frac {1}{T _ {1}} = N \omega_ {0},
$$

则对任意 $m$ ，有

$$
g (m T _ {1}) = \frac {1}{T} \sum_ {n = 0} ^ {N - 1} G (n \omega_ {0}) W _ {N} ^ {m n}, \tag {6}
$$

其中 $W_{N} = \mathrm{e}^{12\pi / N}, g$ 与 $G$ 由(2)式给出.

这个结论可如下导出. 由(3)式知

$$
g \left(m T _ {1}\right) = \frac {1}{T} \sum_ {k = - \infty} ^ {\infty} F \left(k \omega_ {0}\right) \mathrm{e} ^ {2 \pi i k \omega_ {0} m T _ {1}} = \frac {1}{T} \sum_ {k = - \infty} ^ {\infty} F \left(k \omega_ {0}\right) W _ {N} ^ {k m}, \tag {7}
$$

其中 $W_{N} = \mathrm{e}^{2\pi n / N}$ . 设用 $N$ 去除 $k$ 后得余数为 $n, k$ , 可以写成

$$
k = n + j N.
$$

k 的变化范围是从 $-\infty$ 到 $\infty$ ，从而 j 的变化范围也是从 $-\infty$ 到 $\infty$ 。而 n 的取值范围是 $n=0,1,\cdots,N-1$ 。注意到

$$
W _ {N} ^ {N} = 1, W _ {N} ^ {k m} = W _ {N} ^ {(n + j N) m} = W ^ {n m}.
$$

于是(7)可改写成

$$
\begin{array}{l} g \left(m T _ {1}\right) = \frac {1}{T} \sum_ {n = 0} ^ {N - 1} \sum_ {j = - \infty} ^ {\infty} F \left(\left(n + j N\right) \omega_ {0}\right) W _ {N} ^ {(n + j N) m} \\ = \frac {1}{T} \sum_ {n = 0} ^ {N - 1} W _ {N} ^ {n m} \sum_ {j = - \infty} ^ {\infty} F ((n + j N) \omega_ {0}), \tag {8} \\ \end{array}
$$

式中

$$
\sum_ {j = - \infty} ^ {\infty} F ((n + j N) \omega_ {0}) = \sum_ {j = - \infty} ^ {\infty} F (n \omega_ {0} + j \omega_ {1}) = G (n \omega_ {0}).
$$

因此由(8)便得到(6)式.

在(6)式中, 令 $m=0,1,\cdots,N-1$ , 得到 $N$ 个方程. 求这个方程组的解 $\{G(n\omega_0)\}(n=0,1,\cdots,N-1)$ , 亦即求出用取样值

$g(mT_{1})$ 表示 $G(n\omega_{0})$ 的关系式.

一般来说，求出 $G(n\omega_0)$ 还不能决定 $F(n\omega_0)$ . 但是，若

$$
F (\omega) = 0, \quad | \omega | > \sigma , \tag {9}
$$

并且 $\omega_{1} > 2\sigma$ ，则

$$
F (\omega) = G (\omega), | \omega | <   \sigma . \tag {10}
$$

如果函数 $f(t)$ 虽然并不满足条件(9)，但是取 $\omega_{1}$ 足够大，当 $|\omega|>\frac{\omega_{1}}{2}$ 时， $F(\omega)$ 可以忽略，那么，当 $|n\omega_0|<\frac{\omega_1}{2}$ 时， $F(n\omega_0)$ 近似地等于 $G(n\omega_0)$ . 称 $F(n\omega_0)-G(n\omega_0)$ 为误差.

以上讨论表明：计算傅里叶变换的取样值 $F(n\omega_{0})$ 可以简化为求形如以下 N 个方程组成的方程组的解，

$$
A _ {m} = \sum_ {n = 0} ^ {N - 1} a _ {n} W _ {N} ^ {m n}, \quad m = 0, 1, \dots , N - 1, \tag {11}
$$

其中 $W_{N} = \mathrm{e}^{i2\pi /N}$ .这个方程组的解为

$$
a _ {n} = \frac {1}{N} \sum_ {k = 0} ^ {N - 1} A _ {k} W _ {N} ^ {- k n}, \quad n = 0, 1, \dots , N - 1. \tag {12}
$$

只要注意到 $W_{N}^{N} = 1$ ，以及

$$
\sum_ {n = 0} ^ {N - 1} W _ {N} ^ {n (m - k)} = \left\{ \begin{array}{l l} \frac {W _ {N} ^ {N (m - k)} - 1}{W _ {N} ^ {(m - k)} - 1}, & m \neq k, \\ N, & m = k. \end{array} \right.
$$

将(12)式代入(11)式,便可验证(12)式给出的 $a_{n}$ 是方程组(11)的解.因此,方程组(6)的解是

$$
G \left(n \omega_ {0}\right) = T _ {1} \sum_ {k = 0} ^ {N - 1} g \left(k T _ {1}\right) W _ {N} ^ {- k n}, \quad n = 0, 1, \dots , N - 1. \tag {13}
$$

# § 2 快速 Fourier 变换(FFT)

本节研究(12)式给定的 N 个数 $a_{N}$ 的具体算法(亦即(13)式的具体算法). 由于加法运算通常比乘法运算快, 所以快速算法的思想就是要尽量减少乘法运算. 例如 $ab + ac = a(b + c)$ , 用左式计算要做两次乘法, 而用右式计算则只做一次乘法. 由(12)式计算 $a_{n}$ 时, 对每个确定的 $n$ , 要做 $N$ 次乘法, 总共要做 $N^{2}$ 次乘法. 若用以下快速算法 (把一些相同的项合并), 当 $N = 2^{m}$ 时, 就可以把乘法总数由 $N^{2}$ 减少到 $\frac{N}{2} \ln_{2} N$ . 当 $N$ 数很大时, 计算速度明显提高. 这种“快速傅里叶变换”的算法是 1965 年由 Cooley-Tukey 提出的.

设 $N = 2^{m}, m$ 是正整数. 记 $E_{N} = W_{N}^{-1} = \mathrm{e}^{-2\pi / N}$ , 易知 $E_{N}^{N} = 1$ . 又记 $c_{k} = \frac{1}{N} A_{k}$ , 于是(12)改写成

$$
a _ {n} = \sum_ {k = 0} ^ {N - 1} c _ {k} E _ {N} ^ {k n}, \quad n = 0, 1, \dots , N - 1. \tag {14}
$$

下面以 $N=2^{3}=8$ 为例介绍这种算法, 这时(14)式中 n=0,1, …,7. 我们用二进制数表示 k 与 n 为

$$
k = 2 ^ {2} k _ {2} + 2 ^ {1} k _ {1} + 2 ^ {0} k _ {0}, \quad k _ {j} = 0, 1, j = 0, 1, 2. \tag {15}
$$

$$
n = 2 ^ {2} n _ {2} + 2 ^ {1} n _ {1} + 2 ^ {0} n _ {0}, \quad n _ {l} = 0, 1, l = 0, 1, 2.
$$

对(15)式表示的 $k$ 与 $\pmb{n}$ 记为

$$
k = \left(k _ {2}, k _ {1}, k _ {0}\right), \quad n = \left(n _ {2}, n _ {1}, n _ {0}\right), \tag {16}
$$

例如， $2=(0,1,0)$ ， $5=(1,0,1)$ .

记 $E=E_{8}$ ，将(15)代入(14)，得到

$$
\begin{array}{l} a _ {n} = a \left(n _ {2}, n _ {1}, n _ {0}\right) = \sum_ {k = 0} ^ {7} c _ {k} E ^ {k n} \\ = \sum_ {k _ {0} = 0} ^ {1} \sum_ {k _ {1} = 0} ^ {1} \sum_ {k _ {2} = 0} ^ {1} c (k _ {2}, k _ {1}, k _ {0}) E ^ {(2 ^ {2} k _ {2} + 2 k _ {1} + k _ {0}) (2 ^ {2} n _ {2} + 2 n _ {1} + n _ {0})}. \tag {17} \\ \end{array}
$$

注意到 $E^0 = E^8 = E^{16} = 1$ ，我们有

$$
\begin{array}{l} E ^ {\left(2 ^ {2} k _ {2} + 2 k _ {1} + k _ {0}\right) \left(2 ^ {2} n _ {2} + 2 n _ {1} + n _ {0}\right)} = E ^ {2 ^ {2} k _ {2} n _ {0} + 2 k _ {1} \left(2 n _ {1} + n _ {0}\right) + k _ {0} \left(2 ^ {2} n _ {2} + 2 n _ {1} + n _ {0}\right)} \\ = E ^ {k _ {2} \left(n _ {0}, 0, 0\right)} \cdot E ^ {k _ {1} \left(n _ {1}, n _ {0}, 0\right)} \cdot E ^ {k _ {0} \left(n _ {2}, n _ {1}, n _ {0}\right)}, \tag {18} \\ \end{array}
$$

把(18)式代入(17)式,得到

$$
\begin{array}{l} a \left(n _ {2}, n _ {1}, n _ {0}\right) \\ = \sum_ {k _ {0} = 0} ^ {1} \left\{\sum_ {k _ {1} = 0} ^ {1} \left[ \sum_ {k _ {2} = 0} ^ {1} c \left(k _ {2}, k _ {1}, k _ {0}\right) E ^ {k _ {2} \left(n _ {0}, 0, 0\right)} \right] E ^ {k _ {1} \left(n _ {1}, n _ {0}, 0\right)} \right\} E ^ {k _ {0} \left(n _ {2}, n _ {1}, n _ {0}\right)}. \tag {19} \\ \end{array}
$$

在(19)式中,方括号内的和只与 $n_{0},k_{1},k_{0}$ 有关,我们记它为 $c_{1}(n_{0},k_{1},k_{0})$ ,

$$
c _ {1} (n _ {0}, k _ {1}, k _ {0}) = \sum_ {k _ {2} = 0} ^ {1} c (k _ {2}, k _ {1}, k _ {0}) E ^ {k _ {2} (n _ {0}, 0, 0)}.
$$

类似地记花括号内的和为

$$
c _ {2} (n _ {0}, n _ {1}, k _ {0}) = \sum_ {k _ {1} = 0} ^ {1} c _ {1} (n _ {0}, k _ {1}, k _ {0}) E ^ {k _ {1} (n _ {1}, n _ {0}, 0)}.
$$

然后由(19)式得到

$$
a (n _ {2}, n _ {1}, n _ {0}) = c _ {3} (n _ {0}, n _ {1}, n _ {2}) = \sum_ {k _ {0} = 0} ^ {1} c _ {2} (n _ {0}, n _ {1}, k _ {0}) E ^ {k _ {0} (n _ {2}, n _ {1}, n _ {0})}.
$$

这就是 N=8 情形所要计算的结果.

一般地，设 $N = 2^{m}.k$ 与 $\pmb{n}$ 的二进制表示为

$$
k = \left(k _ {m - 1}, \dots , k _ {1}, k _ {0}\right) = 2 ^ {m - 1} k _ {m - 1} + \dots + 2 k _ {1} + k _ {0},
$$

$$
n = \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right) = 2 ^ {m - 1} n _ {m - 1} + \dots + 2 n _ {1} + n _ {0},
$$

$k_{1}, n_{j}$ 取值为 0 或 $1, j=0,1,\cdots,m-1$ . 由此(14)式可写成

$$
a _ {n} = a \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right)
$$

$$
= \sum_ {k _ {0}} \sum_ {k _ {1}} \dots \sum_ {k _ {m - 1}} c \left(k _ {m - 1}, \dots , k _ {1}, k _ {0}\right) E _ {N} ^ {\left(k _ {m - 1}, \dots , k _ {1}, k _ {0}\right) \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right)} (2 0)
$$

式中的和号 $\sum_{k_{j}}=\sum_{k_{j}=0}^{1},\quad j=0,1,\cdots,m-1.$ 因为 $E_{N}^{N}=1;$ 当 $k\equiv l(\bmod N)$ 时， $E_{N}^{k}=E_{N}^{l}.$ 我们有

$$
E _ {N ^ {m - 1}, \dots , k _ {1}, k _ {0}) (n _ {m - 1}, \dots , n _ {1}, n _ {0})} = E _ {N} ^ {(2 ^ {m - 1} k _ {m - 1} + \dots + 2 k _ {1} + k _ {0}) (2 ^ {m - 1} n _ {m - 1} + \dots + 2 n _ {1} + n _ {0})}
$$

$$
= E _ {N} ^ {2 ^ {m - 1} k _ {m - 1} n _ {0} + 2 ^ {m - 2} k _ {m - 2} \left(2 n _ {1} + n _ {0}\right) + \dots + k _ {0} \left(2 ^ {m - 1} n _ {m - 1} + \dots + 2 n _ {1} + n _ {0}\right)}
$$

$$
= E _ {N} ^ {k _ {m - 1} \left(n _ {0}, 0, \dots , 0\right)} \cdot E _ {N} ^ {k _ {m - 2} \left(n _ {1}, n _ {0}, 0, \dots , 0\right)} \dots E _ {N} ^ {k _ {0} \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right)}.
$$

将它代入(20)式,得到

$$
\begin{array}{l} a \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right) \\ = \sum_ {k _ {0}} \left\{\sum_ {k _ {1}} \dots \left[ \sum_ {k _ {m - 2}} \left(\sum_ {k _ {m - 1}} c (k _ {m - 1}, \dots , k _ {1}, k _ {0}) E _ {N} ^ {k _ {m - 1} (n _ {0}, 0, \dots , 0)}\right) \right. \right. \\ \left. \cdot E _ {N} ^ {k _ {m - 2} (n _ {1}, n _ {0}, 0, \cdot , 0)} \right] \dots E _ {N} ^ {k _ {1} (n _ {m - 2}, \dots , n _ {1}, n _ {0}, 0)} \Bigg \} E _ {N} ^ {k _ {0} (n _ {m - 1}, \dots , n _ {1}, n _ {0})}. \\ \end{array}
$$

由此得到递推公式：

$$
\begin{array}{l} c _ {0} (k _ {m - 1}, \dots k _ {1}, k _ {0}) = c (k _ {m - 1}, \dots , k _ {1}, k _ {0}), \\ c _ {1} (n _ {0}, k _ {m - 2}, \dots k _ {1}, k _ {0}) = \sum_ {k _ {m - 1}} c _ {0} (k _ {m - 1}, \dots , k _ {1}, k _ {0}) E _ {N} ^ {k _ {m - 1} (n _ {0}, 0, \dots , 0)}, \\ c _ {2} (n _ {0}, n _ {1}, k _ {m - 3}, \dots , k _ {1}, k _ {0}) \\ = \sum_ {k _ {m - 2}} c _ {1} (n _ {0}, k _ {m - 2}, \dots , k _ {1}, k _ {0}) E _ {N} ^ {k _ {m - 2} (n _ {1}, n _ {0}, 0, \dots , 0)}, \\ \end{array}
$$

$$
\begin{array}{l} c _ {2} (n _ {0}, n _ {1}, k _ {m - 3}, \dots , k _ {1}, k _ {0}) \\ = \sum_ {k _ {m - 2}} c _ {1} (n _ {0}, k _ {m - 2}, \dots , k _ {1}, k _ {0}) E _ {N} ^ {k _ {m - 2} (n _ {1}, n _ {0}, 0, \dots , 0)}, \\ \end{array}
$$

● ● ● ● ● ● ● ● ● ●

$$
\begin{array}{l} c _ {l} (n _ {0}, n _ {1}, \dots , n _ {l - 1}, k _ {m - l - 1}, \dots k _ {1}, k _ {0}) \\ = \sum_ {k _ {m - l}} c _ {l - 1} (n _ {0}, n _ {1}, \dots , n _ {l - 2}, k _ {m - l}, \dots , k _ {1}, k _ {0}) E _ {N} ^ {k _ {m - l} (n _ {l - 1}, \dots , n _ {0}, 0, \dots , 0)}, \\ \end{array}
$$

●●●●●●●●●●●

$$
c _ {m} (n _ {0}, n _ {1}, \dots , n _ {m - 1}) = \sum_ {k _ {0}} c _ {m - 1} (n _ {0}, n _ {1}, \dots , n _ {m - 2}, k _ {0}) E _ {N} ^ {k _ {0} (n _ {m - 1}, \dots , n _ {1}, n _ {0})}.
$$

而且最后有

$$
a \left(n _ {m - 1}, \dots , n _ {1}, n _ {0}\right) = c _ {m} \left(n _ {0}, n _ {1}, \dots , n _ {m - 1}\right).
$$

附表 1 一些函数的 Fourier 变换

<table><tr><td>f(x)</td><td> $\hat{f}(t)=\int_{-\infty}^{\infty}f(x)e^{-2\pi i2t}dx$ </td></tr><tr><td> $(\tau_h f)(x)=f(x-h)$ </td><td> $e^{-2\pi ih t}\hat{f}(t)$ </td></tr><tr><td> $e^{2\pi ih x}f(x)$ </td><td> $\hat{f}(t--h)$ </td></tr><tr><td> $f(ax)\quad(a\neq0)$ </td><td> $|a|^{-1}\hat{f}(t/a)$ </td></tr><tr><td> $(f*g)(x)$ </td><td> $\hat{f}(t)\cdot\hat{g}(t)$ </td></tr><tr><td> $f(x)g(x)$ </td><td> $(\hat{f}* \hat{g})(t)$ </td></tr><tr><td> $f'(x)$ </td><td> $(2\pi it)\hat{f}(t)$ </td></tr><tr><td> $xf(x)$ </td><td> $(2\pi)^{-1}_{1}(f)'(t)$ </td></tr><tr><td> $\chi_a(x)=\begin{cases}1, & |x|\leqslant a, \\0, & |x|>a\end{cases}$ </td><td> $\frac{\sin 2\pi at}{\pi t}$ </td></tr><tr><td> $(1-|x|)\chi_1(x)$ </td><td> $\left(\frac{\sin\pi t}{\pi t}\right)^2$ </td></tr><tr><td> $e^{-2\pi y|t|}\quad(y>0)$ </td><td> $\frac{y}{\pi(t^2+y^2)}$ </td></tr><tr><td> $e^{-|r^2 a}\quad(\alpha>0)$ </td><td> $(4\pi\alpha)^{-1/2}e^{-t^2/4\alpha}$ </td></tr><tr><td> $\frac{1}{1+x^2}$ </td><td> $\pi e^{-2\pi|t|}$ </td></tr><tr><td> $\frac{x}{\pi(x^2+y^2)}$ </td><td> $-1(\text{sgn}t)e^{-2\pi y|t|}$ </td></tr><tr><td> $\widetilde{f}(x)=\lim_{\delta\to+0}\frac{1}{\pi}\int_{|u|\geqslant\delta}\frac{f(x-u)}{u}du$ </td><td> $-1(\text{sgn}t)\hat{f}(t)$ </td></tr></table>

注 表中 Fourier 变换结果成立所需的条件不再叙述, 详见书中有关章节.

附表 2 一些广义函数的 Foruier 变换

<table><tr><td>u(∈S&#x27;)</td><td>ˆu(ˆu,φ)=ˆu,φ∈S)</td></tr><tr><td>Dk u</td><td>(2π1t)kˆu</td></tr><tr><td>(-2πix)k u</td><td>Dkˆu</td></tr><tr><td>τh u</td><td>e-2πihtˆu</td></tr><tr><td>e2πihx u</td><td>τhˆu</td></tr><tr><td>1</td><td>δ(t)</td></tr><tr><td>δ(x)</td><td>1</td></tr><tr><td>xk</td><td>(i/2π)kDkδ(t)</td></tr><tr><td>Dkδ(x)</td><td>(2π1t)k</td></tr><tr><td>τaδ(x)=δ(x-a)</td><td>e-2πiat</td></tr><tr><td>e2max</td><td>δ(t-a)</td></tr><tr><td>sinax</td><td>1/2[δ(t+a/2π)-δ(t-a/2π)]</td></tr><tr><td>cosax</td><td>1/2[δ(t+a/2π)+δ(t-a/2π)]</td></tr><tr><td>x-1</td><td>-πisgnt</td></tr><tr><td>arc tanx</td><td>(-1/2)e-2π|t|/t</td></tr><tr><td>|x|-1</td><td>-2(γ+ln2π|t|)</td></tr><tr><td>ln2π|x|</td><td>- [1/2|t|+γδ(t)]</td></tr><tr><td>∑m=-∞δ(x-mT)</td><td>1/T ∑m=-∞δ(t-m/T)</td></tr></table>

注 表中的常数 $\gamma = \int_{0}^{1}\frac{1 - \cos y}{y}\mathrm{d}y - \int_{1}^{\infty}\frac{\cos y}{y}\mathrm{d}y.$

