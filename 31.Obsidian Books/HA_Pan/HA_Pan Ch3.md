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

### 2. 求积分方程的解

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

### 3. 求微分方程的解

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

### 4. Poisson 求和公式

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

### 5. Heisenberg 不等式与测不准原理

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

