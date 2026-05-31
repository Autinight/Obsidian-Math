
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

