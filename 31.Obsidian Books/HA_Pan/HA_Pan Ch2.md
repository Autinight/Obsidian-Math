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

定理2.32 设 $f \in L(\mathbb{T})$，对 $f$ 的 Fourier 级数进行逐项积分必有等式成立，即
$$
\begin{aligned}
\int_{0}^{t} f(\tau) \, \mathrm{d}\tau 
&= \sum_{n=-\infty}^{\infty} \int_{0}^{t} c_{n} \mathrm{e}^{\mathrm{i} n \tau} \, \mathrm{d}\tau \\
&= c_{0} t + \mathrm{i} \sum_{n \neq 0} \frac{c_{n}}{n} - \mathrm{i} \sum_{n \neq 0} \frac{c_{n}}{n} \mathrm{e}^{\mathrm{i} n t},
\end{aligned}
$$
并且上式右端的级数一致收敛。


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

### 2. 关于 theta 函数的 Jacobi 恒等式

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

### 3. 热传导方程的解

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

### 4. 等周问题

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

