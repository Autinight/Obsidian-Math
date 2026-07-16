
# 第十六章 无穷级数的应用

无穷级数作为一种分析手段具有多方面的应用, 本章只介绍其中的几点供教学中参考. §16.1 是级数在积分计算中的应用. §16.2 讨论级数求和问题. §16.3 是关于 Weierstrass 逼近定理的证明方法及其应用. §16.4 用无穷级数构造一些具有特殊性质的函数. 最后一节为学习要点和参考题.

## §16.1 积分计算

从上册第九章不定积分已经知道, 初等函数的原函数未必是初等函数. 因此在第十章中用 Newton-Leibniz 公式计算积分的方法的适用范围是有限的. 在 12.3.2 小节 (见上册 390 页) 中列举了几个特殊的广义积分的计算, 可以说每一个例题都有其特殊的方法. 本节将从方法论的角度介绍无穷级数在积分计算中的应用. 这方面的更一般性讨论见后面第二十三章的含参变量积分.

### 16.1.1 关于逐项积分的补充命题

利用函数项级数的逐项积分法可以计算出许多在定积分或广义积分理论中无法计算的积分。对于常义积分来说，应用一致收敛充分条件下的逐项积分，或者Arzelà控制收敛定理(命题14.2.4)一般就可以解决问题。但是对于广义积分问题则还需要补充几个新的工具。下面只对无穷限广义积分写出保证逐项积分成立的两个命题，它们当然可以推广到有限区间上的瑕积分上去。

命题 16.1.1 设在区间 $[a, +\infty)$ 上的连续函数列 $\{f_{n}\}$ 单调收敛于连续函数 $\varphi$ ，又设每个 $f_{n} (n = 1, 2, \cdots)$ 和 $\varphi$ 均在区间 $[a, +\infty)$ 上广义可积，则成立

$$
\lim _ {n \rightarrow \infty} \int_ {a} ^ {+ \infty} f _ {n} (x) \mathrm{d} x = \int_ {a} ^ {+ \infty} \varphi (x) \mathrm{d} x.
$$

证 为确定起见, 只对连续函数列 $\{f_n\}$ 单调减少的情况写出证明. 对于 $A > a$ 写出

$$
\begin{array}{r l} & 0 \leqslant \int_ {a} ^ {+ \infty} f _ {n} (x) \mathrm{d} x - \int_ {a} ^ {+ \infty} \varphi (x) \mathrm{d} x \\ & = \int_ {a} ^ {A} [ f _ {n} (x) - \varphi (x) ] \mathrm{d} x + \int_ {A} ^ {+ \infty} [ f _ {n} (x) - \varphi (x) ] \mathrm{d} x. \end{array}\tag{16.1}
$$

利用 $\{f_n\}$ 单调减少收敛于 $\varphi$ ，取定 $N$ ，由于 $f_{N}$ 和 $\varphi$ 在 $[a, +\infty)$ 上均广义可积，因此对于每个给定的 $\varepsilon >0$ ，可以取定 $A$ ，使得

$$
0 \leqslant \int_ {A} ^ {+ \infty} [ f _ {N} (x) - \varphi (x) ] \mathrm{d} x <   \varepsilon .
$$

因此当 n > N 时 (16.1) 右边的第二项满足估计:

$$
0 \leqslant \int_ {A} ^ {+ \infty} [ f _ {n} (x) - \varphi (x) ] \mathrm{d} x \leqslant \int_ {A} ^ {+ \infty} [ f _ {N} (x) - \varphi (x) ] \mathrm{d} x <   \varepsilon .
$$

然后在区间 $[a, A]$ 上利用 (42页上的) Dini定理知道 $\{f_n\}$ 一致收敛于 $\varphi$ ，因此存在 $N_1 > N$ ，使得当 $n > N_1$ 时 (16.1) 右边的第一项也小于 $\varepsilon$ .

注 对于函数项级数有相应的结论, 从略.

为建立更一般的充分条件, 需引入一个新的概念 (参见命题 14.2.2 后的说明).

定义 设函数列 $\{f_n\}$ 中的每个函数在区间 $[a, +\infty)$ 上均广义可积. 如果对于任意 $\varepsilon > 0$ , 存在 $A_0 > a$ , 使得当 $A > A_0$ 时 $\left|\int_{A}^{+\infty} f_n(x) \mathrm{d}x\right| < \varepsilon$ 对于所有 $n$ 同时成立, 则称 (含参变量 $n$ 的) 广义积分 $\int_{a}^{+\infty} f_n(x) \mathrm{d}x$ 关于 $n$ 一致收敛.

命题 16.1.2 设在区间 $[a, +\infty)$ 上函数列 $\{f_{n}\}$ 内闭一致收敛于函数 $\varphi$ ，又设 $\{f_{n}\}(n = 1, 2, \cdots)$ 在区间 $[a, +\infty)$ 上的广义积分关于 n 一致收敛，且极限函数 $\varphi$ 于 $[a, +\infty)$ 上内闭可积，则成立

$$
\lim _ {n \rightarrow \infty} \int_ {a} ^ {+ \infty} f _ {n} (x) \mathrm{d} x = \int_ {a} ^ {+ \infty} \varphi (x) \mathrm{d} x.
$$

证（只列出主要步骤）先用Cauchy收敛准则证明 $\varphi$ 于 $[a, +\infty)$ 上广义可积，然后可用三分法估计如下：

$$
\begin{array}{l} \left| \int_ {a} ^ {+ \infty} f _ {n} (x) \mathrm{d} x - \int_ {a} ^ {+ \infty} \varphi (x) \mathrm{d} x \right| \\ \leqslant \int_ {a} ^ {A} | \varphi (x) - f _ {n} (x) | \mathrm{d} x + \left| \int_ {A} ^ {+ \infty} \varphi (x) \mathrm{d} x \right| + \left| \int_ {A} ^ {+ \infty} f _ {n} (x) \mathrm{d} x \right|. \end{array}
$$

注 将上两个命题所要建立的等式改写为

$$
\lim _ {n \rightarrow \infty} \lim _ {A \rightarrow + \infty} \int_ {a} ^ {A} f _ {n} (x) \mathrm{d} x = \lim _ {A \rightarrow + \infty} \lim _ {n \rightarrow \infty} \int_ {a} ^ {A} f _ {n} (x) \mathrm{d} x,\tag{16.2}
$$

并应用极限顺序交换的基本原理（见命题14.2.1后的注以及命题14.2.2），就可以知道上述命题中的广义积分关于 $n$ 的一致收敛条件可以更换为

$$
\lim _ {n \rightarrow \infty} \int_ {a} ^ {A} f _ {n} (x) \mathrm{d} x = \int_ {a} ^ {A} \varphi (x) \mathrm{d} x
$$

关于 $A \in [a, +\infty)$ 的一致性.

### 16.1.2 例题

首先需指出, 这里的要点是将积分计算问题转化为级数求和问题. 在这之后的问题从数值角度来说就是近似计算问题. 至于是否所求的积分值都有简单的表达式, 即能够用熟悉的常数和有限次初等运算得到, 那当然不一定.

例题16.1.1 出现在一系列应用问题中的积分

$$
E (k) = \int_ {0} ^ {\pi / 2} \sqrt {1 - k ^ {2} \sin^ {2} \varphi} \mathrm{d} \varphi\tag{16.3}
$$

称为第二类完全椭圆积分, 其中 $k \in (0,1)$ 为参数. 试将 $E(k)$ 展开为 k 的幂级数, 并利用它研究椭圆周长近似公式

$$
s _ {1} = \frac {\pi}{2} [ a + b + \sqrt {2 a ^ {2} + 2 b ^ {2}} ]\tag{16.4}
$$

当椭圆偏心率充分小时的误差的渐近性态, 其中 a > b > 0 为椭圆的长半轴和短半轴, 偏心率 $\varepsilon = \sqrt{a^{2} - b^{2}} / a$ . (公式 (16.4) 来自上册 356 页的例题 11.3.3.)

解 除了 $k = 0,1$ 之外，积分(16.3)的被积函数没有初等原函数（参见上册297页），但要将 $E(k)$ 展开为幂级数则是容易的。在 $(1 - x)^{1 / 2}$ 的Maclaurin级数中令 $x = k^2\sin^2\varphi$ 代入，就得到

$$
(1 - k ^ {2} \sin^ {2} \varphi) ^ {1 / 2} = 1 - \sum_ {n = 1} ^ {\infty} \frac {(2 n - 3) ! !}{2 ^ {n} n !} k ^ {2 n} \sin^ {2 n} \varphi , 0 \leqslant k <   1.
$$

以 $k$ 为参数, 以 $\varphi \in [0, \pi / 2]$ 为自变量, 这是同号函数项级数, 从Dini定理可知一致收敛, 因此可以逐项积分, 这样就得到所要的展开式:

$$
E (k) = \frac {\pi}{2} \left(1 - \sum_ {n = 1} ^ {\infty} \left[ \frac {(2 n - 1) ! !}{(2 n) ! !} \right] ^ {2} \cdot \frac {k ^ {2 n}}{2 n - 1}\right).
$$

椭圆周长可以表示为

$$
s = 4 a \int_ {0} ^ {\pi / 2} \sqrt {1 - \varepsilon^ {2} \sin^ {2} \varphi} \mathrm{d} \varphi = 4 a E (\varepsilon), 0 <   \varepsilon <   1,
$$

因此就有

$$
\begin{array}{r l}s =&2 \pi a \left(1 - \frac {1}{4} \varepsilon^ {2} - \frac {3}{6 4} \varepsilon^ {4} - \frac {5}{2 5 6} \varepsilon^ {6} - \frac {1 7 5}{1 6 3 8 4} \varepsilon^ {8} \right.\\&\left. - \frac {4 4 1}{6 5 5 3 6} \varepsilon^ {1 0} - \frac {4 8 5 1}{1 0 4 8 5 7 6} \varepsilon^ {1 2}\right) + O (\varepsilon^ {1 4}) \quad (\varepsilon \rightarrow 0).\end{array}\tag{16.5}
$$

同时将近似计算公式(16.4)右边按 $\varepsilon$ 展开，并与上式比较得到：

$$
s _ {1} = s - 2 \pi a \cdot \frac {5}{1 6 3 8 4} \varepsilon^ {8} + O (\varepsilon^ {1 0}) \quad (\varepsilon \rightarrow 0).
$$

注 本题取材于 [44] 卷 2 第八章 §7. 其中还有椭圆周长的另一个近似公式

$$
s _ {2} = \pi \left[ \frac {3}{2} (a + b) - \sqrt {a b} \right].\tag{16.6}
$$

采用同样的分析方法可以知道

$$
s _ {2} = s + 2 \pi a \cdot \frac {3}{1 6 3 8 4} \varepsilon^ {8} + O (\varepsilon^ {1 0}) \quad (\varepsilon \rightarrow 0).
$$

容易看出, 这两个公式的误差符号相反, 若采取加权平均的方法就可能得到更好的结果: 将 (16.4) 乘 3/8 与 (16.6) 乘 5/8 再相加, 就得到新公式:

$$
s _ {3} = \pi \left[ \frac {9}{8} (a + b) + \frac {3}{1 6} \sqrt {2 a ^ {2} + 2 b ^ {2}} - \frac {5}{8} \sqrt {a b} \right].\tag{16.7}
$$

可以发现新公式的幂级数展开式的 $\varepsilon^{8}$ 项和 $\varepsilon^{10}$ 项的系数与 (16.5) 的展开式完全相同. 这里前者是预期的, 而后者是意外的. 于是误差的级别为 $O(\varepsilon^{12})$ :

$$
s _ {3} = s - 2 \pi a \cdot \frac {7}{1 0 4 8 5 7 6} \varepsilon^ {1 2} + O (\varepsilon^ {1 4}).
$$

从数值计算可以知道, 这个近似公式不仅在 $\varepsilon$ 充分小时有效, 而且直到 $\varepsilon = 0.9$ 时的相对误差还小于 $10^{-4}$ .

利用极限顺序交换的方法可以较简单地计算上册的命题 12.3.7 中的 Euler-Poisson 积分 (即概率积分).

例题16.1.2利用 $\lim_{n\to \infty}\left(1 + \frac{x^2}{n}\right)^{-n} = \mathrm{e}^{-x^2}$ 证明：

$$
\int_ {0} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \frac {\sqrt {\pi}}{2}.
$$

解 用平均值不等式可以看出

$$
\left(1 + \frac {x ^ {2}}{n}\right) ^ {n} = 1 \cdot \left(1 + \frac {x ^ {2}}{n}\right) ^ {n} \leqslant \left[ \frac {1 + n (1 + x ^ {2} / n)}{n + 1} \right] ^ {n + 1} = \left(1 + \frac {x ^ {2}}{n + 1}\right) ^ {n + 1},
$$

因此在区间 $[0, +\infty)$ 上函数列 $\left\{\left(1 + \frac{x^2}{n}\right)^{-n}\right\}$ 单调减少收敛于极限函数 $\mathrm{e}^{-x^2}$ . 应用命题16.1.1即有

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {+ \infty} \left(1 + \frac {x ^ {2}}{n}\right) ^ {- n} \mathrm{d} x = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x.
$$

用变量替换 $x = \sqrt{n}\tan t$ 计算左边极限号下的积分如下：

$$
\begin{array}{r l} \int_ {0} ^ {+ \infty} \left(1 + \frac {x ^ {2}}{n}\right) ^ {- n} \mathrm{d} x & = \sqrt {n} \int_ {0} ^ {\pi / 2} \cos^ {2 n - 2} t \mathrm{d} t \\ & = \frac {\sqrt {n} \pi}{2} \cdot \frac {(2 n - 3) ! !}{(2 n - 2) ! !} \sim \frac {\sqrt {n} \pi}{2} \cdot \frac {1}{\sqrt {n \pi}} = \frac {\sqrt {\pi}}{2}, \end{array}
$$

这里最后一步利用了 Wallis 公式 (11.29).

例题 16.1.3 (Euler 积分) 证明: 若 0 < p < 1, 则

$$
\int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{x ^ {p} (1 + x)} = \frac {\pi}{\sin \pi p}.
$$

证 将积分拆开为区间 $[0,1]$ 和 $[1,+\infty)$ 上的两个积分.

在区间 $(0,1)$ 上 $\frac{1}{x^p(1 + x)} = \sum_{n=0}^{\infty} (-1)^n x^{n-p}$ , 它在 $(0,1)$ 上虽然不一致收敛, 但除去第一项之外, 级数的部分和在 $[0,1]$ 上一致有界, 因此可以根据 Arzelà 定理 (即命题 14.2.4) 交换积分与求和的顺序①, 得到

$$
\begin{array}{r l} \int_ {0} ^ {1} \frac {\mathrm{d} x}{x ^ {p} (1 + x)} & = \int_ {0} ^ {1} \left(\frac {1}{x ^ {p}} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} x ^ {n - p}\right) \mathrm{d} x = \frac {1}{1 - p} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} \int_ {0} ^ {1} x ^ {n - p} \mathrm{d} x \\ & = \frac {1}{1 - p} + \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n}}{n + 1 - p} = \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1}}{n - p}. \end{array}
$$

对于 $[1, +\infty)$ 上的积分可作变量替换变为 $[0, 1]$ 上的积分，经同样计算得到

$$
\begin{array}{r l} \int_ {1} ^ {+ \infty} \frac {\mathrm{d} x}{x ^ {p} (1 + x)} & = \int_ {0} ^ {1} \frac {\mathrm{d} x}{x ^ {1 - p} (1 + x)} \\ & = \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1}}{n - (1 - p)} = \frac {1}{p} + \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n}}{n + p}. \end{array}
$$

合并两个结果得到

$$
\begin{array}{r l} \int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{x ^ {p} (1 + x)} & = \frac {1}{p} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} \left(\frac {1}{p - n} + \frac {1}{p + n}\right) \\ & = \frac {1}{p} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} \frac {2 p}{p ^ {2} - n ^ {2}}. \end{array}
$$

最后利用余割函数 $\csc x$ 的部分分式展开式就得到所求结果. (该公式见15.2.7小节练习题3, 也可以从 $\sin x$ 的无穷乘积展开式(13.30)求导得到.)

注 本题的积分有各种不同的形式, 例如

$$
\int_ {0} ^ {+ \infty} \frac {x ^ {a - 1} \mathrm{d} x}{1 + x} (0 <   a <   1), \quad \int_ {0} ^ {+ \infty} \frac {x ^ {m - 1} \mathrm{d} x}{1 + x ^ {n}} (0 <   m <   n)
$$

等. 此外, 上册 402 页题 8 中的所有公式均为本题之特例, 且其中的参数 $m, n$ 等都可以不限于正整数. 读者可以对比两处所用方法, 从而知道在积分计算问题中我们已经取得的进步.

在上册 400 页的题 16 引进了 x > 0 时的 $\Gamma$ 函数的积分定义, 在例题 13.4.4 中又引进了它的无穷乘积定义. 利用积分号下取极限的过程, 我们可以证明当 x > 0 时两个定义是一致的.

例题16.1.4当 $x > 0$ 时成立

$$
\Gamma (x) = \int_ {0} ^ {+ \infty} t ^ {x - 1} \mathrm{e} ^ {- t} \mathrm{d} t = \lim _ {n \rightarrow \infty} \frac {n ! n ^ {x}}{x (x + 1) \cdots (x + n)}.
$$

证 在广义积分中作变量替换 $t = \ln \frac{1}{s}$ ，当 $t$ 从0到 $+\infty$ 时， $s$ 从1到0，于是得到

$$
\Gamma (x) = \int_ {0} ^ {1} \left(\ln \frac {1}{s}\right) ^ {x - 1} \mathrm{d} s.
$$

利用

$$
\ln \frac {1}{s} = \lim _ {n \rightarrow \infty} n \left(1 - s ^ {\frac {1}{n}}\right),
$$

而且右边的极限过程关于 n 单调, 就可以用命题 16.1.1 得到

$$
\Gamma (x) = \lim _ {n \rightarrow \infty} \int_ {0} ^ {1} \left[ n \left(1 - s ^ {\frac {1}{n}}\right)\right] ^ {x - 1} \mathrm{d} s.
$$

对于右边的积分用变量替换 $s^{\frac{1}{n}} = y$ ，然后多次分部积分即可.

### 16.1.3 练习题

1. (广义积分的控制收敛定理) 设函数列 $\{S_n(x)\}$ 在 $(- \infty, +\infty)$ 上内闭可积, 且内闭一致收敛于函数 $S$ , 如果存在函数 $F$ , 使 $|S_n(x)| \leqslant F(x)$ 对于每个 $n$ 和每个 $x$ 都成立, 且广义积分 $\int_{-\infty}^{+\infty} F(x) \, \mathrm{d}x$ 收敛, 证明:

$$
\lim _ {n \rightarrow \infty} \int_ {- \infty} ^ {+ \infty} S _ {n} (x) \mathrm{d} x = \int_ {- \infty} ^ {+ \infty} S (x) \mathrm{d} x.
$$

2. 设 $\sum_{n=0}^{\infty} a_n x^n$ 的系数均非负, 收敛半径为 $+\infty$ , 和函数为 $S(x)$ . 证明: 如果 $\sum_{n=0}^{\infty} a_n n!$ 收敛, 则广义积分 $\int_0^{+\infty} \mathrm{e}^{-x} S(x) \mathrm{d}x$ 也收敛, 且等于 $\sum_{n=0}^{\infty} a_n n!$ . (去掉系数非负条件后本题结论仍成立, 这时可以利用命题 16.1.2 后的注.)

3. 证明下列结果:
(1) $\int_{0}^{1}\frac{\ln(1-x)}{x}\mathrm{d}x=-\sum_{n=1}^{\infty}\frac{1}{n^{2}};$ (2) $\int_{0}^{1}\frac{\ln x}{1-x^{2}}\mathrm{d}x=-\frac{\pi^{2}}{8};$ (3) $\int_{0}^{1}\ln x\ln(1-x)\mathrm{d}x=2-\frac{\pi^{2}}{6};$ (4) $\int_{0}^{+\infty}\frac{x}{\mathrm{e}^{x}-\mathrm{e}^{-x}}\mathrm{d}x=\frac{\pi^{2}}{8}.$ 

4. 证明: $\int_{0}^{1} x^{-x} \, \mathrm{d}x = \sum_{n=1}^{\infty} n^{-n}$ .

5. 证明: $\int_{0}^{+\infty} x \mathrm{e}^{-\frac{x^2}{2}} \left(1 + \frac{x^2}{2^2} + \frac{x^4}{2^2 4^2} + \cdots + \frac{x^{2n}}{[(2n)!!]^2} + \cdots\right) \mathrm{d}x = \mathrm{e}^{\frac{1}{2}}$ .

## §16.2 级数求和计算

本节列举了级数求和的各种方法供读者参考. 其中级数和的概念是在通常意义下的. 关于 Cesàro 求和概念见 15.2.3 小节, 本节不再讨论.

### 16.2.1 级数求和法

对于收敛级数来说, 原则上已经可以通过数值计算来得到级数和的近似值. 但如果能够发现某个级数和 (的准确答案) 可以用已知常数经过简单运算得到, 则当然更好. 由 Euler 解决的 Basel 问题, 即求出

$$
1 + \frac {1}{4} + \frac {1}{9} + \dots + \frac {1}{n ^ {2}} + \dots = \frac {\pi^ {2}}{6},
$$

就是级数求和方面的一个光辉例子. 在得到这个答案之前, Euler 已经计算出级数和的近似值 1.644934… 直到 20 位有效数字, 但仍然看不出级数和是什么特殊的常数. 当然没有人想到这里会出现圆周率 (参见例题 13.4.3 后的注 3 以及 [16] 的第 3 章).

从上册命题 2.5.2 中的例子 $e = 1 + 1 + \frac{1}{2!} + \cdots + \frac{1}{n!} + \cdots$ 可以知道，一个收敛的数项级数（或函数项级数）的和（或和函数）未必能够用过去已经掌握的数或函数经过简单的运算表示出来。例如，直到现在为止对于 p 级数的和

$$
\zeta (p) = 1 + \frac {1}{2 ^ {p}} + \dots + \frac {1}{n ^ {p}} + \dots ,
$$

当 $p$ 为奇数时是否会与 $p$ 为偶数时 Euler 的结果 (见上册 217 页 (7.26) 和下面的例题 16.2.3) 有类似的表达式, 始终还只是个猜测. 目前最好的结果是在 1978 年 Apéry (阿佩里) 证明了 $\zeta(3)$ 为无理数 (见《美国数学月刊》(2001) 第 108 卷 222-231 页).

因此, 在本节只是根据经验列出求级数和的若干方法, 这里不可能有什么万能的方法.

方法一 以已知的数项级数或函数项级数展开式为基础的方法无疑是有用的.例如, 在一个幂级数展开式或 Fourier 级数展开式中, 将变量用不同的特定值代入,就可以得到无穷多个数项级数的和, 或者用简单运算将所要研究的级数变换为已知级数等等. 当然这完全依赖于积累和经验.

方法二 如果能利用所谓裂项相消法(或连锁消去法)得到部分和的紧凑形式, 则级数问题就转化为数列或函数列的极限问题(参见上册2.2.4小节的题3).

方法三 这也可以看成是方法一的范围, 即用函数项级数的逐项积分或逐项微分方法将未知的级数转变为已知的级数. 这在幂级数中是最常用的方法, 但也可能解决其他类型的函数项级数求和计算.

方法四 (Abel 方法) 这是以幂级数理论中的 Abel 第二定理为基础的级数求和方法: 对于给定的收敛级数 $\sum_{n=1}^{\infty} a_n$ , 研究幂级数 $\sum_{n=1}^{\infty} a_n x^n$ , 它的收敛半径不会小于 1. 如果能够求出它的和函数 $S(x)$ , 则所求的

$$
S = \sum_ {n = 1} ^ {\infty} a _ {n} = \lim _ {x \rightarrow 1 ^ {-}} S (x) = S (1).
$$

### 16.2.2 例题

例题 16.2.1 求下列级数的和:

$$
\frac {1 !}{x + 1} + \frac {2 !}{(x + 1) (x + 2)} + \dots + \frac {n !}{(x + 1) (x + 2) \cdots (x + n)} + \dots .
$$

解 1 (裂项相消法) 易见 x = 1 时级数发散. 对于 $x \neq 1$ 记级数通项为 $a_{n}$ ，从前后两项之间的关系式 $a_{n}(n + x) = na_{n-1} (a_{0} = 1)$ 出发得到

$$
(n + 1) a _ {n} + (x - 1) a _ {n} = n a _ {n - 1},
$$

可见于 $x \neq 1$ 时有

$$
a _ {n} = \frac {1}{x - 1} [ n a _ {n - 1} - (n + 1) a _ {n} ],
$$

从而可以得到级数的第 $n$ 个部分和为

$$
S _ {n} = \frac {1}{x - 1} - \frac {(n + 1) !}{(x - 1) (x + 1) \cdots (x + n)}, n = 1, 2, \dots .
$$

因此问题归结为上式右边第二项的敛散性．利用 Sapagof 判别法 (命题 13.2.3) 或渐近公式 (13.24) 知第二项当 x < 1 时发散，而当 x > 1 时收敛于 0．因此级数当 $x \leqslant 1$ 时发散，而当 x > 1 时收敛于和 $1/(x - 1)$ .

注 用裂项相消法求和时一般不必先讨论级数的敛散性. 若要讨论本题中的级数的敛散性, 则用渐近公式 (13.24) 即可. 当然也可用 Raabe 判别法.

解 2 (逐项积分法) 由敛散性讨论可知只要研究 x > 1 的情况. 级数的通项 (差一个因子 x) 可以写为积分形式:

$$
\frac {n !}{x (x + 1) \cdots (x + n)} = \int_ {0} ^ {1} (1 - t) ^ {x - 1} t ^ {n} \mathrm{d} t.
$$

(这里虽然 x 未必为正整数, 但上册 326 页的分部积分计算仍有效. 实际上这都是 23.3.1 小节中 Beta 函数的特例.) 用逐项积分法计算如下:

$$
\begin{array}{r l} S (x) & = x \int_ {0} ^ {1} \sum_ {n = 1} ^ {\infty} (1 - t) ^ {x - 1} t ^ {n} \mathrm{d} t = x \int_ {0} ^ {1} (1 - t) ^ {x - 2} t \mathrm{d} t \\ & = \frac {x}{x - 1} \int_ {0} ^ {1} (1 - t) ^ {x - 1} \mathrm{d} t = \frac {1}{x - 1}. \end{array}
$$

其中逐项积分的合法性当 $x \geqslant 2$ 时可以用Dini定理知积分号下的函数项级数 $\sum_{n=1}^{\infty}(1-t)^{x-1}t^n$ 一致收敛来解决, 但是当 $1 < x < 2$ 时 $\int_0^1 (1-t)^{x-2}t\mathrm{d}t$ 为收敛的瑕积分, 因此需要用命题16.1.1的结论.

例题 16.2.2 (Euler) 求级数 $1 + \frac{1}{4} + \frac{1}{9} + \cdots + \frac{1}{n^{2}} + \cdots$ 的和.

这就是历史上的 Basel 问题 [16, 17]. Euler 是求出本题答案的第一人. 他根据类比猜测出正弦函数的无穷乘积展开式 (13.24). 将它改写为

$$
\frac {\sin x}{x} = \left(1 - \frac {x ^ {2}}{\pi^ {2}}\right) \left(1 - \frac {x ^ {2}}{2 ^ {2} \pi^ {2}}\right) \dots \left(1 - \frac {x ^ {2}}{n ^ {2} \pi^ {2}}\right) \dots ,
$$

其中左边当 x = 0 时理解为其极限值 1，因此左边为

$$
1 - \frac {x ^ {2}}{6} + O (x ^ {4}) (x \rightarrow 0).
$$

Euler 又将展开式和多项式的根与系数关系作类比, 看出右边应该是

$$
1 - \frac {x ^ {2}}{\pi^ {2}} \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} + O (x ^ {4}) (x \rightarrow 0),
$$

比较两边的 $x^{2}$ 项的系数就知道所求的级数和为 $\frac{\pi^2}{6}$ . 下面我们将 Euler 的方法严格化, 作为第一个解.

解1 在 $\frac{\sin x}{x}$ 的上述无穷乘积展开式中令 $y = x^2 / \pi^2$ ，然后讨论函数

$$
F (y) = \prod_ {n = 1} ^ {\infty} \left(1 - \frac {y}{n ^ {2}}\right).\tag{16.8}
$$

这时由于 $F(y)=1-y\pi^{2}/6+O(y^{2})$ ( $y\to0$ ), 因此只需要从 (16.8) 右边的无穷乘积出发证明函数 F 在 y=0 处的导数 $F'(0)=-\sum_{n=1}^{\infty}\frac{1}{n^{2}}$ 即可.

对函数 F 在 $|y| < 1$ 范围内取对数，并求导得到

$$
\frac {F ^ {\prime} (y)}{F (y)} = \sum_ {n = 1} ^ {\infty} \frac {- \frac {1}{n ^ {2}}}{1 - \frac {y}{n ^ {2}}} = - \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2} - y},
$$

其中右边逐项求导的合理性容易从Weierstrass一致收敛性判别法得到验证，同时这也保证了 $F$ 的可微性．然后令 $y = 0$ 代入，利用 $F(0) = 1$ ，可见所求结果成立.因此有

$$
F (y) = 1 - y \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} + o (y) (y \rightarrow 0),
$$

这样就知道有

$$
\prod_ {n = 1} ^ {\infty} \left(1 - \frac {x ^ {2}}{n ^ {2} \pi^ {2}}\right) = 1 - \frac {x ^ {2}}{\pi^ {2}} \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} + o (x ^ {2}) (x \rightarrow 0),
$$

因此 Euler 的方法是正确的.

注 在作代换 $y = x^{2} / \pi^{2}$ 时有 $y \geqslant 0$ ，但从(16.8)可见， $F$ 对于 $y < 0$ 仍有意义，因此上述计算是正确的。有兴趣的读者可以用 Euler 公式 $\mathrm{e}^{\mathrm{i}\theta} = \cos \theta + \mathrm{i}\sin \theta$ 对此作出解释。

解 2 (用反正弦函数的幂级数展开式)

先证明

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{(2 n - 1) ^ {2}} = \frac {\pi^ {2}}{8}.\tag{16.9}
$$

写出函数 $\arcsin x$ 在 $[-1, 1]$ 的幂级数展开式

$$
\arcsin x = x + \sum_ {n = 1} ^ {\infty} \frac {(2 n - 1) ! !}{(2 n) ! !} \frac {x ^ {2 n + 1}}{2 n + 1},
$$

在其中令 $x = \sin t$ ，得到

$$
t = \sin t + \sum_ {n = 1} ^ {\infty} \frac {(2 n - 1) ! !}{(2 n + 1) (2 n) ! !} \sin^ {2 n + 1} t, - \frac {\pi}{2} \leqslant t \leqslant \frac {\pi}{2}.
$$

将上式两端对 t 从 0 到 $\frac{\pi}{2}$ 积分，并对右端逐项积分，得到

$$
\frac {\pi^ {2}}{8} = 1 + \sum_ {n = 1} ^ {\infty} \frac {(2 n - 1) ! !}{(2 n + 1) (2 n) ! !} \int_ {0} ^ {\pi / 2} \sin^ {2 n + 1} t \mathrm{d} t
$$

$$
\begin{array}{l} = 1 + \sum_ {n = 1} ^ {\infty} \frac {(2 n - 1) ! !}{(2 n + 1) (2 n) ! !} \cdot \frac {(2 n) ! !}{(2 n + 1) ! !} \\ = 1 + \sum_ {n = 1} ^ {\infty} \frac {1}{(2 n + 1) ^ {2}} = \sum_ {n = 1} ^ {\infty} \frac {1}{(2 n - 1) ^ {2}}. \end{array}
$$

这就证明了(16.9). 然后从

$$
S = \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} = \sum_ {n = 1} ^ {\infty} \frac {1}{(2 n - 1) ^ {2}} + \sum_ {n = 1} ^ {\infty} \frac {1}{(2 n) ^ {2}} = \frac {\pi^ {2}}{8} + \frac {S}{4}
$$

即可解出 $S = \pi^{2}/6$ .

注1 解2也是Euler找到的, 发表于1743年(参见[16]), 又见于《美国数学月刊》(1987)第94卷662-663页和该刊(1988)第95卷331页. 实际上这个思路也出现在[40]的第二章的习题41中. 此外, 那里还指出从 $(\arcsin x)^2$ 的Maclaurin级数展开式出发也可以达到目的.

注2 有很多函数的Fourier级数展开式可用于此题.例如见例题15.2.2,这里不再重复.

以上的第一种解法可以推广到一般情况, 即利用正弦函数的无穷乘积展开式可以求出 $p$ 为偶数时的所有 $p$ 级数之和. 这是 Euler 最得意之作.

例题16.2.3 证明：对于所有正整数 $n, p = 2n$ 的 $p$ 级数之和为

$$
s _ {2 n} = \sum_ {m = 1} ^ {\infty} \frac {1}{m ^ {2 n}} = \frac {\overline {{{{B}}}} _ {n}}{2} \cdot \frac {(2 \pi) ^ {2 n}}{(2 n) !},\tag{16.10}
$$

其中 $\overline{B}_n$ ( $n \geqslant 1$ ) 为 Bernoulli 数. 前七个 Bernoulli 数为 $\overline{B}_1 = \frac{1}{6}$ , $\overline{B}_2 = \frac{1}{30}$ , $\overline{B}_3 = \frac{1}{42}$ , $\overline{B}_4 = \frac{1}{30}$ , $\overline{B}_5 = \frac{5}{66}$ , $\overline{B}_6 = \frac{691}{2730}$ , $\overline{B}_7 = \frac{7}{6}$ (见上册 7.2.3 小节).

证 从正弦函数的无穷乘积 (见例题 13.4.3)

$$
\sin x = x \left(1 - \frac {x ^ {2}}{\pi^ {2}}\right) \left(1 - \frac {x ^ {2}}{2 ^ {2} \pi^ {2}}\right) \dots = x \prod_ {n = 1} ^ {\infty} \left(1 - \frac {x ^ {2}}{n ^ {2} \pi^ {2}}\right)
$$

出发, 取绝对值后再取对数, 将无穷乘积转化为无穷级数:

$$
\ln | \sin x | = \ln | x | + \sum_ {n = 1} ^ {\infty} \ln \left| 1 - \frac {x ^ {2}}{n ^ {2} \pi^ {2}} \right|.
$$

对于 $x \neq k\pi (k \in \mathbf{Z})$ 的 x, 在上式两边求导, 得到 $^{①}$ 

$$
\cot x = \frac {1}{x} + \sum_ {n = 1} ^ {\infty} \frac {2 x}{x ^ {2} - n ^ {2} \pi^ {2}}.\tag{16.11}
$$

这里逐项求导的合理性不难用 Weierstrass 一致收敛性判别法加以验证, 从略. 然后在 $|x| < \pi$ 时作以下运算:

$$
\begin{array}{l} x \cot x = 1 + 2 \sum_ {m = 1} ^ {\infty} \frac {x ^ {2}}{x ^ {2} - m ^ {2} \pi^ {2}} = 1 - 2 \sum_ {m = 1} ^ {\infty} \frac {\frac {x ^ {2}}{m ^ {2} \pi^ {2}}}{1 - \frac {x ^ {2}}{m ^ {2} \pi^ {2}}} \\ = 1 - 2 \sum_ {m = 1} ^ {\infty} \sum_ {n = 1} ^ {\infty} \left(\frac {x ^ {2}}{m ^ {2} \pi^ {2}}\right) ^ {n} = 1 - 2 \sum_ {n = 1} ^ {\infty} \sum_ {m = 1} ^ {\infty} \left(\frac {x ^ {2}}{m ^ {2} \pi^ {2}}\right) ^ {n} \\ = 1 - 2 \sum_ {n = 1} ^ {\infty} \frac {s _ {2 n}}{\pi^ {2 n}} x ^ {2 n}, | x | <   \pi , \end{array}
$$

其中 $s_{2n}=\sum_{m=1}^{\infty}\frac{1}{m^{2n}}$ 即是 p=2n 时的 p 级数的和 (在以上计算中对二重正项级数求和利用了第十三章第一组参考题 9).

另一方面，从(14.25)已经得到公式

$$
x \cot x = 1 - \sum_ {n = 1} ^ {\infty} \frac {\overline {{{B}}} _ {n} 2 ^ {2 n}}{(2 n) !} x ^ {2 n}.\tag{16.12}
$$

根据幂级数展开式的惟一性 (命题 14.4.1) 就可以得到所要的结果.

注 由此可得到Bernoulli数的几个重要性质. 首先是 $\overline{B}_n = (-1)^{n-1} B_{2n} > 0$ . 其次, 容易证明 $1 < s_{2n} < 2n / (2n - 1)$ (见例题13.2.1), 因此由(16.10)和Stirling公式可以得到Bernoulli数的渐近公式:

$$
\overline {{{B}}} _ {n} \sim \frac {2 (2 n) !}{(2 \pi) ^ {2 n}} \sim 4 \sqrt {\pi n} \left(\frac {n}{\pi \mathrm{e}}\right) ^ {2 n}.\tag{16.13}
$$

这在确定例题14.4.2中的几个幂级数的收敛半径时有用. 又从

$$
\sqrt {2 \pi n} \left(\frac {n}{\mathrm{e}}\right) ^ {n} <   n! <   \sqrt {2 \pi n} \left(\frac {n}{\mathrm{e}}\right) ^ {n} \mathrm{e} ^ {\frac {1}{1 2 n}}
$$

(见上册374页题15)可知，用(16.13)右边的渐近公式可以对于Bernoulli数 $\overline{B}_n$ 给出相对误差很小的估计.最后，可由此看出在 $n > \pi \mathrm{e}\approx 8.54$ 之后Bernoulli数 $\{\overline{B}_n\}$ 的增长非常快，虽然 $\overline{B}_7$ 刚超过1，但 $\overline{B}_{13}$ 已经大于 $10^{6}$ 

下面的前半题已在本书中见过多次.

例题 16.2.4 (1) 求 Leibniz 型级数的和 $S = 1 - \frac{1}{2} + \cdots + \frac{(-1)^{n-1}}{n} + \cdots$ ;

(2) 令 $a_{n} = 1 - \frac{1}{2} + \cdots + \frac{(-1)^{n-1}}{n} - \ln 2, n = 1, 2, \cdots$ ，求 $\sum_{n=1}^{\infty} a_{n}$ 的和.

解 (1) 用 Abel 方法. 根据 Abel 第二定理, 有 $S = \lim_{x \to 1^{-}} S(x)$ , 其中

$$
S (x) = x - \frac {x ^ {2}}{2} + \dots + \frac {(- 1) ^ {n - 1} x ^ {n}}{n} + \dots .
$$

对上式右边的幂级数在 $(-1,1)$ 上逐项求导得到

$$
S ^ {\prime} (x) = 1 - x + \dots + (- 1) ^ {n - 1} x ^ {n - 1} + \dots = \frac {1}{1 + x},
$$

又利用 $S(0)=0$ ，因此可以求出

$$
S (x) = \int_ {0} ^ {x} \frac {1}{1 + t} \mathrm{d} t = \ln (1 + x), - 1 <   x <   1.
$$

从而得到

$$
S = \lim _ {x \rightarrow 1 ^ {-}} \ln (1 + x) = \ln 2.
$$

(2) 从 (1) 可见 $a_{n}$ 就是该级数的第 $n$ 个余项 (再乘以 $-1$ ), 因此可以得到 $a_{n} = \int_{0}^{1} \frac{(-1)^{n+1} x^{n}}{1 + x} \mathrm{d}x$ , 再用 $\sum \int = \int \sum$ 即可得到 $\sum_{n=1}^{\infty} a_{n} = \ln 2 - \frac{1}{2}$ .

注 过去已经知道 (1) 中的级数和, 但主要是通过 Catalan 恒等式 (见上册 55 页) 将问题转化为求数列 $\left\{\frac{1}{n+1} + \frac{1}{n+2} + \cdots + \frac{1}{2n}\right\}$ 的极限问题而解决的 (见上册例题 11.4.1 的注). 因此过去的这种方法太特殊了, 不如本题的 Abel 求和法可以解决不少级数求和问题.

Abel 方法也有可能解决某些函数项级数的求和问题.

例题16.2.5 求三角级数 $\sum_{n=1}^{\infty} \frac{\cos nx}{n}$ 的和函数①.

解 从函数项级数的敛散性判别法可以知道级数在 $x \neq 2k\pi (k \in \mathbf{Z})$ 时收敛，因此只需求出 $(0,2\pi)$ 上的和函数 $S(x)$ . 又从内闭一致收敛知 $S(x)$ 连续.

以 $x$ 为参数，另行引入变量 $\alpha \in (-1,1)$ ，由Abel第二定理有

$$
S (x) = \lim _ {\alpha \rightarrow 1 ^ {-}} f (\alpha),
$$

其中

$$
f (\alpha) = \sum_ {n = 1} ^ {\infty} \frac {\cos n x}{n} \alpha^ {n}.
$$

为简明起见在 $f(\alpha)$ 中没有指出与参数 $x$ 的依赖关系. 在 $(-1,1)$ 上将此幂级数对 $\alpha$ 逐项求导，并用Euler公式计算如下：

$$
\begin{array}{r l} f ^ {\prime} (\alpha) & = \sum_ {n = 1} ^ {\infty} \alpha^ {n - 1} \cos n x = \mathrm{Re} \sum_ {n = 1} ^ {\infty} \alpha^ {n - 1} \mathrm{e} ^ {\mathrm{i} n x} \\ & = \mathrm{Re} \frac {\mathrm{e} ^ {\mathrm{i} x}}{1 - \alpha \mathrm{e} ^ {\mathrm{i} x}} = \frac {\cos x - \alpha}{1 - 2 \alpha \cos x + \alpha^ {2}}. \end{array}
$$

然后再利用 $f(0) = 0$ 求积得到

$$
f (\alpha) = - \frac {1}{2} \ln (1 - 2 \alpha \cos x + \alpha^ {2}), - 1 <   \alpha <   1.
$$

最后就有：

$$
S (x) = \lim _ {\alpha \rightarrow 1 ^ {-}} f (\alpha) = f (1) = - \frac {1}{2} \ln 2 (1 - \cos x) = - \ln 2 - \ln \left| \sin \frac {x}{2} \right|.
$$

注 由所得的等式

$$
\ln \left| \sin \frac {x}{2} \right| = - \ln 2 - \sum_ {n = 1} ^ {\infty} \frac {\cos n x}{n}
$$

出发, 可以利用命题 16.1.2 逐项积分, 或者利用 Fourier 级数的逐项积分定理 (命题 15.2.9) 得到 Euler 积分 (命题 12.3.4) 的值:

$$
\int_ {0} ^ {\pi / 2} \ln \sin x \mathrm{d} x = - \frac {\pi}{2} \ln 2,
$$

从而对该积分的计算提供了一种级数解法.

下面是 1996 年新发现的圆周率公式 (BBP 公式).

例题 16.2.6 证明:

$$
\pi = \sum_ {n = 0} ^ {\infty} \frac {1}{1 6 ^ {n}} \left(\frac {4}{8 n + 1} - \frac {2}{8 n + 4} - \frac {1}{8 n + 5} - \frac {1}{8 n + 6}\right).\tag{16.14}
$$

证 利用逐项积分可知在 k > 0 和 0 < x < 1 时成立

$$
\begin{array}{r l} \int_ {0} ^ {x} \frac {t ^ {k - 1}}{1 - t ^ {8}} \mathrm{d} t & = \int_ {0} ^ {x} (t ^ {k - 1} + t ^ {k + 7} + \dots + t ^ {k - 1 + 8 n} + \dots) \mathrm{d} t \\ & = \frac {x ^ {k}}{k} + \frac {x ^ {k + 8}}{k + 8} + \dots + \frac {x ^ {k + 8 n}}{k + 8 n} + \dots . \end{array}
$$

令 $x = \sqrt{2} / 2$ 代入得到

$$
\int_ {0} ^ {\sqrt {2} / 2} \frac {t ^ {k - 1}}{1 - t ^ {8}} \mathrm{d} t = \frac {1}{2 ^ {k / 2}} \sum_ {n = 0} ^ {\infty} \frac {1}{1 6 ^ {n}} \cdot \frac {1}{8 n + k}.
$$

将这个结果与所求公式的右边比较, 可见已经得到右边的积分形式为:

$$
\int_ {0} ^ {\sqrt {2} / 2} \frac {4 \sqrt {2} - 8 x ^ {3} - 4 \sqrt {2} x ^ {4} - 8 x ^ {5}}{1 - x ^ {8}} \mathrm{d} x.
$$

这是一个有理函数的定积分, 不难按照标准方法计算出它的值等于 $\pi$ (已作为上册第十章的最后一个参考题).

注 利用这个公式可以快速计算圆周率在小数点后的任意指定位数上的单个数字, 而不必求出在该位之前的所有数字. 由于这与过去所有算法的思路 (例如8.7.1 小节中的刘徽-Archimedes 算法和 Salamin-Brent 算法) 不同, 因此有人称之为圆周率的后现代算法, 见 [56] 的 §6.6. 有兴趣的读者还可以参考 [6, 52], 在后者的第二十章中附有为此编制的 Mathematica 程序. 但是要指出, 这里的圆周率在小数点后是按 16 进制展开的. 还不清楚是否存在与十进制对应的这类算法, 至少到现在还没有找到.

### 16.2.3 练习题

1. 设已知 $\sum_{n=1}^{\infty} (-1)^{n-1} a_n = A, \sum_{n=1}^{\infty} a_{2n-1} = B$ , 证明: $\sum_{n=1}^{\infty} a_n$ 收敛并求其和.

2. 设 $P(x)=a_{0}+a_{1}x+\cdots+a_{m}x^{m}$ 为 m 次多项式, 求级数 $\sum_{n=0}^{\infty}\frac{P(n)}{n!}$ 的和.

3. 求 $1 - \frac{2^{3}}{1!} + \frac{3^{3}}{2!} - \frac{4^{3}}{3!} + \cdots$ 的和.

4. 求下列级数和: (1) $\sum_{n=1}^{\infty} \arctan \frac{1}{2n^2}$ ; (2) $\sum_{n=1}^{\infty} \arctan \frac{2}{n^2}$ .

5. 设 $a > 1$ , 求 $\sum_{n=0}^{\infty} \frac{2^n}{a^{2^n} + 1}$ 的和.

6. 求 $1 + \frac{1}{3} - \frac{1}{5} - \frac{1}{7} + \frac{1}{9} + \frac{1}{11} - \cdots$ 的和.

7. 求 $1 - \frac{1}{7} + \frac{1}{9} - \frac{1}{15} + \frac{1}{17} - \frac{1}{23} + \cdots$ 的和.

8. 求 $1 - \frac{1}{4} + \frac{1}{7} - \frac{1}{10} + \cdots$ 的和.

9. 设 $a_{n}=1+\frac{1}{2}+\cdots+\frac{1}{n}, n=1,2,\cdots$ ，求 $\sum_{n=1}^{\infty}\frac{a_{n}}{n(n+1)}$ 的和.

10. 求 $\sum_{n=0}^{\infty}\left(\frac{1}{4n+1}+\frac{1}{4n+3}-\frac{1}{2n+2}\right)$ 的和.

11. 求 $1 - \frac{1}{4} + \frac{1}{6} - \frac{1}{9} + \frac{1}{11} - \frac{1}{14} + \cdots$ 的和.

12. 求 $\frac{x^{3}}{3!} + \frac{x^{9}}{9!} + \frac{x^{15}}{15!} + \cdots$ 的和函数

13. 求 $\sum_{n=1}^{\infty} \frac{[(n-1)!]^2}{(2n)!}(2x)^{2n}$ 的和函数.

14. 求 $\sum_{n=1}^{\infty} \frac{x^{n+1}}{(1 - x^n)(1 - x^{n+1})}$ 的和函数.

15. 设 $\sum_{n=1}^{\infty}\frac{1}{a_{n}}$ 为发散的正项级数, x > 0, 求 $\sum_{n=1}^{\infty}\frac{a_{1}a_{2}\cdots a_{n}}{(a_{2}+x)(a_{3}+x)\cdots(a_{n+1}+x)}$ 的和函数.

16. 设 x > 1，求 $\frac{x}{x + 1} + \frac{x^{2}}{(x + 1)(x^{2} + 1)} + \frac{x^{4}}{(x + 1)(x^{2} + 1)(x^{4} + 1)} + \cdots$ 的和函数.

## §16.3 连续函数的逼近定理

在一个区间上将一个函数展开为某种函数项级数是研究无穷级数的基本目的之一. 这样就有可能用比较简单的函数来逼近原来的函数. 因此, 这类函数项级数的通项应当尽可能简单. 幂级数的优点就在于此. 但是能够展开为幂级数的函数类太窄, 一个函数即使无限阶可微也还不能保证它能展开为幂级数, 而即使能展开的话, 收敛域也可能太小, 不能满足要求.

Weierstrass 的连续函数逼近定理克服了所有这些困难. 这就是下面的 Weierstrass 第一逼近定理和第二逼近定理.

命题 16.3.1 (Weierstrass 多项式逼近定理) 有界闭区间 $[a, b]$ 上的连续函数 f 一定可以用多项式一致逼近到任意程度, 这就是说对于每个给定的 $\varepsilon > 0$ , 存在 $n = n(\varepsilon)$ 次多项式 $P_{n}$ , 使得 $|f(x) - P_{n}(x)| < \varepsilon$ 对于 $x \in [a, b]$ 同时成立.

命题16.3.2（Weierstrass三角多项式逼近定理）周期 $2\pi$ 的周期连续函数 $f$ 一定可以用三角多项式一致逼近到任意程度，这就是说对于每个给定的 $\varepsilon >0$ 存在三角多项式 $S_{n}(x) = a_{0} / 2 + \sum_{k = 1}^{n}(a_{k}\cos kx + b_{k}\sin kx)$ ，其中 $n = n(\varepsilon)$ ，使得 $|f(x) - S_n(x)| <   \varepsilon$ 对于一切 $x$ 成立.

注 逼近定理的其他叙述方式可以是: 在第一逼近定理中, $f$ 是一致收敛的多项式序列的极限函数, 也是一致收敛的多项式级数的和函数; 在第二逼近定理中, $f$ 是一致收敛的三角多项式序列的极限函数, 也是一致收敛的三角多项式级数的和函数.

毫无疑问, Weierstrass 的逼近定理是数学分析中的头等重要的结果, 无论在理论上还是实际应用上都有重大的意义.

本节将对 Weierstrass 逼近定理的证明方法作介绍, 然后以例题的形式举出它的几个应用.

### 16.3.1 核函数方法

在介绍 Fourier 级数的第十五章中已经见到了 Dirichlet 核与 Fejér 核 (在其参考题中还有 de la Vallée Poussin 核). 在 Weierstrass 逼近定理的证明方法中, 很多都可以归入核函数方法之中.

定义 设 $\Delta_{n}(x)$ 是在 $\mathbf{R}=(-\infty,+\infty)$ 上定义的以 n 为参数的函数，且具有下列性质：

1. $\Delta_{n}(x)$ 为非负函数, 即 $\Delta_{n}(x) \geqslant 0, \forall x \in \mathbf{R};$ 

2. $\Delta_{n}(x)$ 在 $\mathbf{R}$ 上广义可积，且 $\int_{-\infty}^{+\infty}\Delta_n(x)\mathrm{d}x = 1;$ 

3. 对每个给定的 $\delta > 0$ ，成立 $\lim_{n \to \infty} \int_{-\delta}^{\theta} \Delta_n(x) \, \mathrm{d}x = 1$ ，这（在性质2成立时）等价于

$$
\lim _ {n \rightarrow \infty} \left(\int_ {- \infty} ^ {- \delta} + \int_ {\delta} ^ {+ \infty}\right) \Delta_ {n} (x) \mathrm{d} x = 0,
$$

则称 $\Delta_{n}(x)$ 为 (正) 核函数.

注1 由定义可见, 可以将核函数看成为一个函数列. 但我们经常将它看成是以 $n$ 为参数的函数 (或函数族). 实际上还可以定义带有连续参数的核函数. 在Fourier级数一章中的Dirichlet核与Fejér核的性质与这里的条件有些差异. 首先, Dirichlet核不满足第一个条件, 即不是正核. 其次, 它们都是周期 $2\pi$ 的周期函数, 因此需要将后两个条件中的 $\mathbf{R}$ 改为长度为一个周期的闭区间 $[- \pi, \pi]$ .

注2这里需要强调指出，从15.2.1小节的Dirichlet积分开始，所用的方法与第十四章中的对积分求极限的方法完全不同.实际上从Riemann引理（上册313页）已经可以看到，当 $n$ （或其他参数)趋于无穷大时，在积分号下的表达式未必有极限, 然而积分作为 n (或其他参数) 的函数仍可能存在极限. 这里当然不可能用交换极限顺序的方法来求极限.

对于核函数而言, 一般将 $n \to \infty$ 时核函数的极限函数称为 Dirac (狄拉克) 的 $\delta$ -函数, 也就是广义函数. 从核函数的定义可知, 这里的极限过程与广义函数都不能按照极限和函数的通常意义来理解. 广义函数是泛函分析中的研究内容. 例如可参看 [54] 的第七章广义函数.

注3 关于核函数方法(或奇异积分方法)在数学分析中的介绍可以参考[18]第三卷的740小节，[63]的卷2第17章§4和[13]的第5章等. 还可以参考[35]的第10章对于奇异积分的系统论述. 其中的记号和条件不尽相同.

下面举出几个核函数的例子.

1. 定义阶梯函数 $\Delta_{n}(x)=\left\{\begin{aligned}&n,&-\frac{1}{2n}\leqslant x\leqslant\frac{1}{2n},\\ &0,& 其他 x,\end{aligned}\right.$ 则不难验证它满足核函数定义中的所有条件.

2. Weierstrass 逼近定理的 Landau 证明 (1908 年) 所用的核函数为

$$
\Delta_ {n} (x) = \left\{ \begin{array}{l l} \frac {1}{I _ {n}} (1 - x ^ {2}) ^ {n}, & | x | \leqslant 1, \\ 0, & | x | > 1, \end{array} \right.
$$

其中 $I_{n} = \int_{-1}^{1}(1 - x^{2})^{n}\mathrm{d}x.$ 这时核函数定义中的前两个条件显然满足.对于条件3，当 $0 < \delta < 1$ 时，从

$$
0 \leqslant \int_ {\delta} ^ {1} (1 - x ^ {2}) ^ {n} \mathrm{d} x \leqslant \int_ {\delta} ^ {1} (1 - \delta^ {2}) ^ {n} \mathrm{d} x = (1 - \delta^ {2}) ^ {n} (1 - \delta),
$$

以及对于 $I_{n}$ 的估计

$$
I _ {n} = \int_ {- 1} ^ {1} (1 - x ^ {2}) ^ {n} \mathrm{d} x > 2 \int_ {0} ^ {1} (1 - x) ^ {n} \mathrm{d} x = \frac {2}{n + 1},
$$

就知道

$$
0 \leqslant \left(\int_ {- \infty} ^ {- \delta} + \int_ {\delta} ^ {+ \infty}\right) \Delta_ {n} (x) \mathrm{d} x \leqslant (n + 1) (1 - \delta^ {2}) ^ {n} (1 - \delta),
$$

因此当 $n\to \infty$ 时极限为0.

3. 实际上构造核函数的一个很一般的方法是先在 $\mathbf{R}$ 上定义一个非负可积函数 $f(x)$ ，使它在某个区间 $[-a, a] (a > 0)$ 之外恒等于 0，但积分 $I = \int_{-a}^{a} f(x) \mathrm{d}x > 0$ ，然后令 $\Delta_n(x) = \frac{n}{I} f(nx)$ 即可.

核函数的作用在于它与另一个函数 f 通过卷积运算得到的新的函数 $f * \Delta_{n}$ :

$$
(f * \Delta_ {n}) (x) = \int_ {- \infty} ^ {+ \infty} f (t) \Delta_ {n} (x - t) \mathrm{d} t = \int_ {- \infty} ^ {+ \infty} f (x - u) \Delta_ {n} (u) \mathrm{d} u.\tag{16.15}
$$

在数学文献中称这些积分为奇异积分.

对于上面的第一个例子的核函数, 这就是

$$
(f * \Delta_ {n}) (x) = n \int_ {x - 1 / 2 n} ^ {x + 1 / 2 n} f (t) \mathrm{d} t,
$$

也就是函数 $f$ 在区间 $[x - 1 / 2n, x + 1 / 2n]$ 上的积分平均值. 容易直接证明: 若 $f$ 于点 $x$ 连续, 则有

$$
\lim _ {n \rightarrow \infty} n \int_ {x - 1 / 2 n} ^ {x + 1 / 2 n} f (t) \mathrm{d} t = f (x).
$$

实际上这是下列命题的特例.

命题 16.3.3 设 f 是在 R 上定义而在某个区间 $[-a, a]$ 外恒等于 0 的连续函数, $\Delta_{n}$ 是某个核函数, 则对于每个 x 成立

$$
\lim _ {n \rightarrow \infty} (f * \Delta_ {n}) (x) = f (x),
$$

而且这个收敛过程在区间 $[-a, a]$ 上是一致的.

证 根据条件可知 $f$ 与 $\Delta_{n}$ 的卷积存在. 为方便起见记 $f * \Delta_{n} = f_{n}$ . 利用核函数定义中的条件2, 只需估计下列积分:

$$
f _ {n} (x) - f (x) = \int_ {- \infty} ^ {+ \infty} [ f (x - u) - f (x) ] \Delta_ {n} (u) \mathrm{d} u.
$$

对于每个给定的 $\varepsilon > 0$ ，在区间 $[-a - 1, a + 1]$ 上利用 $f$ 的一致连续性，存在 $0 < \delta < 1$ ，使得当 $x, x' \in [-a - 1, a + 1]$ ， $|x - x'| < \delta$ 时，有 $|f(x) - f(x')| < \varepsilon$ 。又设 $|f(x)| < M, \forall x \in \mathbf{R}$ 。于是从核函数条件1和3有

$$
\left| \int_ {- \infty} ^ {- \delta} + \int_ {\delta} ^ {+ \infty} [ f (x - u) - f (x) ] \Delta_ {n} (u) \mathrm{d} u \right| \leqslant 2 M \left| \int_ {- \infty} ^ {- \delta} + \int_ {\delta} ^ {+ \infty} \Delta_ {n} (u) \mathrm{d} u \right| = o (1),
$$

且与 $x$ 无关. 因此存在 $N$ , 使得当 $n > N$ 时左边的值小于 $\varepsilon$ .

在区间 $[- \delta, \delta]$ 上的估计如下：

$$
\begin{array}{r l} \left| \int_ {- \delta} ^ {\delta} [ f (x - u) - f (x) ] \Delta_ {n} (u) \mathrm{d} u \right| & \leqslant \int_ {- \delta} ^ {\delta} | f (x - u) - f (x) | \Delta_ {n} (u) \mathrm{d} u \\ & \leqslant \varepsilon \int_ {- \delta} ^ {\delta} \Delta_ {n} (u) \mathrm{d} u \leqslant \varepsilon . \end{array}
$$

注意这个估计对于 $x \in [-a, a]$ 一致. 于是当 $n > N$ 时就在 $[-a, a]$ 上一致成立所要的估计式:

$$
\left| f _ {n} (x) - f (x) \right| <   2 \varepsilon .
$$

注1 若取 $a = 1 / 2, \Delta_n$ 为Landau的核函数，则 $f_{n}(x)$ 是次数不超过 $2n$ 的多项式，因此我们就已经对于命题中的连续函数证明了Weierstrass第一逼近定理，即命题16.3.1.为了推广到定义在一般区间 $[a, b]$ 上的连续函数 $f$ ，则可以将 $f$ 先线性延拓到 $[a - 1, b + 1]$ ，使得 $f(a - 1) = f(b + 1) = 0$ ，然后作线性变换使区间$[a - 1, b + 1]$ 映射为某个区间 $[-c, c] (c > 0)$ , 这时 $f(-c) = f(c) = 0$ , 然后在该区间之外将 $f$ 作恒等于 0 的延拓.

注 2 Landau 证明在很多教科书中出现, 例如可以参看 [36, 57] 的不同论述.

### 16.3.2 Bernstein 证明的概率解释

目前许多教科书往往采取 Bernstein 的方法来证明 Weierstrass 逼近定理. 这个证明无疑具有一系列优点, 例如, 除了 Cantor 的一致连续性定理之外, 可以不用微积分工具, 又能给出逼近多项式的显式表达式等等. 但是初学者往往难以明白它的思想从何而来. 因为 Bernstein 是从概率论出发得到这个证明的 (1912). 下面我们不重复在许多教科书中关于 Bernstein 证明的细节, 而是致力于用通俗的语言来阐明它的概率意义. 希望这些解释会对初学者有点启发作用.

首先，将证明的主要过程列出如下.

对于区间 $[0,1]$ 上的连续函数 $f$ 写出Bernstein多项式

$$
B _ {n} (f) (x) = \sum_ {i = 0} ^ {n} f \left(\frac {i}{n}\right) \binom {n} {i} x ^ {i} (1 - x) ^ {n - i}, 0 \leqslant x \leqslant 1.\tag{16.16}
$$

这里可以将 $B_{n}$ 看成是带有参数 n 的算子, 它作用于 f 就得到一个多项式 $B_{n}(f)$ .

利用恒等式

$$
\sum_ {i = 0} ^ {n} \binom {n} {i} x ^ {i} (1 - x) ^ {n - i} = 1,\tag{16.17}
$$

就可以用拟合法得到:

$$
B _ {n} (f) (x) - f (x) = \sum_ {i = 0} ^ {n} \left[ f \left(\frac {i}{n}\right) - f (x) \right] \binom {n} {i} x ^ {i} (1 - x) ^ {n - i}.
$$

利用 f 在 $[0,1]$ 上一致连续，对于每个给定的 $\varepsilon > 0$ ，存在 $\delta > 0$ ，使得当 $x, x' \in [0,1]$ ，且 $|x - x'| < \delta$ 时成立 $|f(x) - f(x')| < \varepsilon$ 。然后将上面的和式按照 $|x - i/n| < \delta$ 和 $|x - i/n| \geqslant \delta$ 分拆，即有

$$
\left| \sum_ {i = 0} ^ {n} \left[ f \left(\frac {i}{n}\right) - f (x) \right] \binom {n} {i} x ^ {i} (1 - x) ^ {n - i} \right| \leqslant \left| \sum_ {| x - \frac {i}{n} | <   \delta} \right| + \left| \sum_ {| x - \frac {i}{n} | \geqslant \delta} \right|.
$$

对于第一个和式利用一致连续性和(16.17)估计如下:

$$
\begin{array}{l} \left| \sum_ {| x - \frac {i}{n} | <   \delta} \left[ f \left(\frac {i}{n}\right) - f (x) \right] \binom {n} {i} x ^ {i} (1 - x) ^ {n - i} \right| \\ \leqslant \sum_ {| x - \frac {i}{n} | <   \delta} \left| f \left(\frac {i}{n}\right) - f (x) \right| \binom {n} {i} x ^ {i} (1 - x) ^ {n - i} \leqslant \varepsilon . \end{array}
$$

对第二个和式则需要用一个恒等式:

$$
\sum_ {i = 0} ^ {n} \left(\frac {i}{n} - x\right) ^ {2} \binom {n} {i} x ^ {i} (1 - x) ^ {n - i} = \frac {x (1 - x)}{n},\tag{16.18}
$$

又假设 $|f(x)| \leqslant M, \forall x \in [-1, 1]$ , 然后就不难证明存在 $N$ (这里的细节见收有这个证明的教科书), 使得当 $n > N$ 时第二个和式的绝对值也小于 $\varepsilon$ . 从而就在 $n > N$ 时得到所要的估计:

$$
\sup _ {x \in [ 0, 1 ]} \left\{\left| f (x) - B _ {n} (f) (x) \right| \right\} <   2 \varepsilon .
$$

现在我们从概率角度来解释以上过程。其中的有关知识可以在概率论的教科书中找到（例如[19]）。这里所用的概率模型是Bernoulli的独立试验序列概型。其中设事件 $A$ 的概率为 $x \in [0,1]$ ，每一次试验只有两种结果，即 $A$ 出现，或者 $A$ 不出现。假设作 $n$ 次独立试验，于是其中事件 $A$ 出现 $i$ 次的概率就是

$$
B _ {i} ^ {n} (x) = \binom {n} {i} x ^ {i} (1 - x) ^ {n - i}.\tag{16.19}
$$

这里的组合数 $\binom{n}{i}$ 是在 $n$ 次试验中事件 $A$ 出现 $i$ 次的可能情况的个数.例如，在前 $i$ 次接连出现 $A$ 但以后就再不出现 $A$ 就是其中的可能情况之一.

这样就可以理解恒等式(16.17)是什么意思了. 它简单地说就是事件 $A$ 在 $n$ 次试验中出现0次, 1次, 直到出现 $n$ 次的概率之和, 当然就等于1.

下面的问题就是在估计 (16.16) 时为什么要将和式作分拆？又为什么要根据 $|x - i / n| < \delta$ 和 $|x - i / n| \geqslant \delta$ 来分拆？为此最好要观察概率 (16.19) 作为 $i$ 的函数的变化规律。在图 16.1 中取定 $x = 0.2$ 后对于 $n = 20$ 与 $n = 100$ 的两种情况作出示意图。在每张图中作出了坐标为 $(i / n, B_i^n(0.2)) (i = 0, 1, \dots, n)$ 的 $n + 1$ 个点。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/b9feeb7d79c41cf905a565a6bf602d4a3b94ef94a3fd10540eebb964098ab777.jpg)



图16.1


从图上可以看出, 将点 $(i/n, B_{i}^{n}(0.2)) (i = 0, 1, \cdots, n)$ 相连得到的是一条单峰曲线, 它的最大值差不多就是 i/n 与 x = 0.2 最接近的地方. 这一点从概率角度是很直观的事实. 我们往往称 i/n 为频率. 由于事件 A 出现的概率是 x = 0.2, 平时我们就说成每 5 次独立试验时事件 A 出现 1 次. 这当然不可能是完全准确的预言. 但是当试验次数 n 越来越大时, 频率应当接近 x = 0.2. 这个直观的猜测在概率论中有理论上的证明, 这里从略.

对比图 16.1 的两种情况, 可以看出当 n 从 n = 20 增加到 n = 100 时, 峰变得越来越窄. 这就是说当 n 变大时, 频率 i/n 越来越向概率值 x = 0.2 靠拢. 这种现象在概率论中也有专门讨论.

此外, 还要注意恒等式 (16.18) 的概率意义是度量频率偏离概率的程度, 在概率论中称为方差. 这个恒等式可以用微分法或组合计算得到. 其右边的表达式表明当 $n$ 增大时方差是如何降低的.

最后, 将和式 (16.16) 分拆的处理表明, 在和式中第一个和式是提供接近 $f(x)$ 的主要部分, 原因就在于图 16.1 中的单峰现象. 而第二个和式则依赖于 (16.18) 来解决.

注1 虽然Bernstein证明有着自己的特点, 但从本质上说仍然可以归纳入核函数方法之内. 只不过代替卷积的是离散的和式(16.16). 核函数定义中的三个条件在这里都是满足的.

注2 关于Bernstein多项式在逼近理论中的地位, 以及由于Bézier(贝齐尔)方法的出现而得到新的发展等可以参看数学分析教科书[8]的第一册第5章. 此外, 对Weierstrass逼近定理的Bernstein证明并不一定要从概率角度来理解. Korovkin(科罗夫金)的证明(1953)完全从函数论出发, 可以参考教科书[9].

### 16.3.3 逼近定理的一个初等证明

这里所说的初等证明是指不必使用微积分工具, 同时其思路也比较简单.

这类证明已有多个. 这里介绍的是由 H. Cohen (科恩) 给出的证明, 见 Archiv der Mathematik (1964) 第 15 卷 316-317 页 (参见 [53]).

第一步是对于一个多项式序列的分析.

命题 16.3.4 对于任意正数 $\delta \in \left(0, \frac{1}{2}\right)$ ，多项式序列 $Q_{n}(x) = (1 - x^{n})^{2^{n}} (n = 1, 2, \cdots)$ 在区间 $[0, \delta]$ 和 $[1 - \delta, 1]$ 上分别一致收敛于 1 和 0.

证 在图 16.2 上作出了 n = 1, 2, 4, 10, 20 的 $Q_{n}(x)$ 的图像. 容易证明

$$
\lim _ {n \to \infty} Q _ {n} \left(\frac {1}{2}\right) = \frac {1}{\mathrm{e}} \approx 0. 3 6 8.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/f691e403b3c77611307df2f2fc6cdb26e7d87c704ef63c4a07d480e5bce0814e.jpg)



图16.2


以下的主要工具是Bernoulli不等式(见上册第3页的命题1.3.1):

当 $h > -1, n \in \mathbf{N}_{+}$ 时，有

$$
(1 + h) ^ {n} \geqslant 1 + n h.
$$

容易看出 $Q_{n}(x)$ 在区间 $[0,1]$ 上严格单调减少. 在区间 $[0,\delta]$ 上

$$
1 \geqslant Q _ {n} (x) \geqslant Q _ {n} (\delta) = (1 - \delta^ {n}) ^ {2 ^ {n}} \geqslant 1 - 2 ^ {n} \delta^ {n} = 1 - (2 \delta) ^ {n} \rightarrow 1.
$$

又记 $\eta = 1 - \delta > 1/2$ ，则在区间 $[\eta, 1]$ 上，有 $0 \leqslant Q_n(x) \leqslant Q_n(\eta)$ ，且有

$$
\frac {1}{Q _ {n} (\eta)} = \left(\frac {1}{1 - \eta^ {n}}\right) ^ {2 ^ {n}} = \left(1 + \frac {\eta^ {n}}{1 - \eta^ {n}}\right) ^ {2 ^ {n}} \geqslant 1 + \frac {2 ^ {n} \eta^ {n}}{1 - \eta^ {n}} > (2 \eta) ^ {n} \rightarrow + \infty .
$$

可见结论成立.

作为上述命题的推论就可以得到

命题 16.3.5 令 $P_{n}(x)=Q_{n}[(1-x)/2], n=1,2,\cdots$ ，则对于任意正数 $\delta\in(0,1)$ ，多项式序列 $\{P_{n}\}$ 在 $0<\delta\leqslant|x|\leqslant1$ 上一致收敛于单位跳跃函数（即 Heaviside（赫维塞德）函数）

$$
H (x) = \left\{ \begin{array}{l l} 0, & x <   0, \\ 1, & x \geqslant 0. \end{array} \right.
$$

第一逼近定理的证明 设 $f \in C[0,1]$ , 且不妨设 $f(0) = 0$ . 对任意 $\varepsilon > 0$ , 利用关于一致连续性的 Cantor 定理知, 存在阶梯函数 $T(x)$ , 使得在区间 $[0,1]$ 上 $|f(x) - T(x)| < \varepsilon / 3$ 成立. 利用上述 Heaviside 函数, 可以取 $T(x)$ 为

$$
T (x) = \sum_ {k = 1} ^ {n} s _ {k} H (x - x _ {k}),
$$

其中 $0 < x_{1} < \cdots < x_{n} < 1$ ，且 $|s_{k}| < \varepsilon/3, k = 1, 2, \cdots, n.$ 

现在取 $\delta > 0$ 充分小, 使得所有区间 $(x_{k} - \delta, x_{k} + \delta) (k = 1, 2, \cdots, n)$ 均不相交. 然后对于这个 $\delta > 0$ , 根据命题 16.3.5, 存在充分大的 n, 使得成立

$$
\left| P _ {n} (x) - H (x) \right| <   \frac {\varepsilon}{3 s}, \forall 0 <   \delta \leqslant | x | \leqslant 1,
$$

其中 $s = \sum_{k=1}^{n}|s_k|$ . 此外还要注意 $P_n(x)$ 的取值范围必在 0 和 1 之间.

现在构造多项式

$$
P (x) = \sum_ {k = 1} ^ {n} s _ {k} P _ {n} (x - x _ {k}),
$$

则当 $x$ 属于某个区间 $(x_{i} - \delta ,x_{i} + \delta)$ （ $1\leqslant i\leqslant n$ ）时，就有

$$
\begin{array}{l} | T (x) - P (x) | \leqslant \sum_ {k \neq i} | s _ {k} | \cdot | H (x - x _ {k}) - P _ {n} (x - x _ {k}) | + | s _ {i} | \cdot | H (x - x _ {i}) - P _ {n} (x - x _ {i}) | \\ <   s \cdot \frac {\varepsilon}{3 s} + | s _ {i} | \cdot 1 <   \frac {2 \varepsilon}{3}; \end{array}
$$

而当 x 不属于任何 $(x_{k}-\delta, x_{k}+\delta)$ $(k=1,2,\cdots,n)$ 时，则上述不等式右边只有一项，估计更为简单，即小于 $\varepsilon/3$ .

因此就得到

$$
| f (x) - P (x) | \leqslant | f (x) - T (x) | + | T (x) - P (x) | <   \varepsilon .
$$

### 16.3.4 逼近定理的其他证明

Weierstrass 逼近定理的证法很多, 在这里我们将浏览一下其他证明.

首先需要指出两个逼近定理是等价的, 即从其中之一可以推出另一个成立. 有兴趣的读者可以参考 [1, 35, 47] 等著作中关于等价性的证明, 这里从略.

在第十五章已经用两种方法证明了命题 16.3.2, 即第二逼近定理. 第一种方法是用 Fejér 核 (见命题 15.2.4 的注 2), 第二种方法是用 Fourier 级数的一致收敛定理 (见命题 15.2.8 的注). 此外, 还有在该章参考题 19 中的 de la Vallée Poussin 的证明, 它也是一种核方法 (参见 [44] 卷 2).

此外, 虽然我们在前面强调了核函数方法的价值, 但是从上一小节的证明已经知道, 逼近定理有不用核函数方法的初等证明.

对于第一逼近定理, 这里较为常见的不用核函数的方法是由 Lebesgue 给出的. 其基本思路非常直观. 先用分段线性函数来逼近连续函数, 然后证明可以将分段线性函数用函数 $f(x) = |x|$ 的平移和 $x$ 的线性组合得到. 从而最后问题归结为证明在任意区间 $[a, b]$ 上存在多项式一致逼近 $y = |x|$ . 这里我们见到的至少有三种方法. 第一种方法是利用在例题 14.1.9 介绍的 Visser 定理, 它利用迭代方法得到了在 $[-1, 1]$ 上一致收敛于 $|x|$ 的多项式序列, 而无需微积分工具. 第二种方法是在 $(1 + x)^{1/2}$ 的 Maclaurin 展开式中将 $x$ 用 $x^2 - 1$ 代替得到所要的多项式级数展开式. 读者可以在 [31, 34, 47] 找到详细的证明过程. 第三种方法是先证明函数列

$$
f _ {n} (x) = \frac {\int_ {0} ^ {x} (1 - t ^ {2}) ^ {n} \mathrm{d} t}{\int_ {0} ^ {1} (1 - t ^ {2}) ^ {n} \mathrm{d} t}, n = 1, 2, \dots\tag{16.20}
$$

对于每个给定的 $\varepsilon \in (0,1)$ ，在区间 $[-1, -\varepsilon]$ 上和 $[\varepsilon, 1]$ 上一致收敛于 $\operatorname{sgn} x^{\text{①}}$ ，然后不难证明函数列

$$
g _ {n} (x) = \int_ {0} ^ {x} f _ {n} (t) \mathrm{d} t, n = 1, 2, \dots
$$

在 $[-1,1]$ 上一致收敛于 $|x|$ (参见 [7]).

最后还应当指出, Weierstrass 逼近定理有许多推广. Weierstrass 本人已经得到高维空间的逼近定理. 最有意义的推广是 Stone (斯通)-Weierstrass 定理, 它包含了许多逼近定理为其特例, 已经成为现代分析的理论支柱之一. 读者可以参考在 [14, 47] 中的证明, 其中后者给出了 Weierstrass 逼近定理的 Stone 证明, 它可以几乎不加修改地用于证明 Stone 定理.

### 16.3.5 逼近定理的应用举例

在举具体例题前需要指出 Weierstrass 逼近定理对于一些基本问题的启示.

首先，在闭区间上的每个连续函数都有用多项式级数或者三角多项式级数的解析表达式，而不需要任何其他条件。因此连续函数与我们过去已经熟悉的可以展开为幂级数的许多初等函数具有共同点：即都可以展开为函数项级数，而且不需要增加其他条件。

有了逼近定理, 又可以将连续函数与能够展开为幂级数的函数非常清楚地区分开来. 我们已经知道, 要将一个函数展开为幂级数, 至少要求该函数无限次可导, 而且这还不是充分的. 一般称这类函数为实解析函数.

如何求出逼近定理中的逼近多项式或三角多项式当然是很重要的问题. 这是函数逼近论的研究课题. Weierstrass 逼近定理就是逼近论的最重要的起点.

下面只是逼近定理在数学分析中的几个应用, 希望起到抛砖引玉的作用.

例题 16.3.1 (Lebesgue) 证明: 区间上的连续函数必有原函数.

证 设 $f \in C[a, b]$ , 则根据逼近定理知, 存在多项式序列 $\{P_n\}$ 于区间 $[a, b]$ 上一致收敛于 $f$ .

对每个多项式 $P_{n}$ , 存在多项式 $Q_{n}$ , 使得在 $[a, b]$ 上满足 $Q_{n}^{\prime} = P_{n}$ . 同时总可以令 $Q_{n}(a) = 0$ 成立. 这样就得到多项式序列 $\{Q_{n}\}$ .

以下分两步, 先证明 $\{Q_n\}$ 在 $[a, b]$ 上一致收敛, 然后证明其极限函数的导函数就是 $f$ .

(1) 根据 $\{P_n\}$ 于 $[a, b]$ 上一致收敛, 由 Cauchy 一致收敛准则 (的必要性) 知道, 对于每个 $\varepsilon > 0$ , 存在 $N$ , 使得对于每个 $n \geqslant N$ 和正整数 $p$ , 对每个 $x \in [a, b]$ 同时成立

$$
\left| P _ {n + p} (x) - P _ {n} (x) \right| <   \varepsilon .\tag{16.21}
$$

于是可以在区间 $[a, x]$ 上用Lagrange微分中值定理得到

$$
\begin{array}{r l} | Q _ {n + p} (x) - Q _ {n} (x) | & = | [ Q _ {n + p} (x) - Q _ {n} (x) ] - [ Q _ {n + p} (a) - Q _ {n} (a) ] | \\ & = | P _ {n + p} (\xi) - P _ {n} (\xi) | <   \varepsilon . \end{array}
$$

由于这对于所有 $n \geqslant N$ 和正整数 $p$ 以及所有 $x \in [a, b]$ 都成立，再次使用Cauchy一致收敛准则（的充分性），就知道 $\{Q_n\}$ 于 $[a, b]$ 一致收敛。记其极限函数为 $F$ 。它满足条件 $F(a) = 0$ 。

(2) 为了建立 $F' = f$ ，只需对于每个点 $x_0 \in [a, b]$ 和每个给定的 $\varepsilon > 0$ ，证明存在 $\delta > 0$ ，使得当 $0 < |h| < \delta$ 时，成立关于差商的不等式

$$
\left| \frac {F (x _ {0} + h) - F (x _ {0})}{h} - f (x _ {0}) \right| <   3 \varepsilon .\tag{16.22}
$$

这里当然假设 $x_0 + h \in [a, b]$ .

利用三分法可以将(16.22)的左边分拆成

$$
\begin{array}{l} \left| \frac {F (x _ {0} + h) - F (x _ {0})}{h} - f (x _ {0}) \right| \leqslant \left| \frac {Q _ {n} (x _ {0} + h) - Q _ {n} (x _ {0})}{h} - P _ {n} (x _ {0}) \right| \\ + | f (x _ {0}) - P _ {n} (x _ {0}) | + \left| \frac {F (x _ {0} + h) - Q _ {n} (x _ {0} + h) - F (x _ {0}) + Q _ {n} (x _ {0})}{h} \right|. \end{array}\tag{16.23}
$$

首先, 对于 $\varepsilon > 0$ , 存在 $N$ , 当 $n \geqslant N$ 时有 $|f(x_0) - P_n(x_0)| < \varepsilon$ . 又不妨 $N$ 已经足够大, 使得对 $n \geqslant N$ , 对每个正整数 $p$ 和每个 $x \in [a, b]$ , 不等式 (16.21) 也已经成立. 然后在 (16.23) 右边取定 $n = N$ .

对固定的 $n = N$ ，对于(16.23)右边的第一项用微分中值定理得到

$$
\left| \frac {Q _ {N} (x _ {0} + h) - Q _ {N} (x _ {0})}{h} - P _ {N} (x _ {0}) \right| = | P _ {N} (x _ {0} + \theta h) - P _ {N} (x _ {0}) |,
$$

其中 $0 < \theta < 1$ . 利用 $P_{N}(x)$ 在 $[a, b]$ 上的一致连续性, 存在 $\delta > 0$ , 使得当 $|h| < \delta$ 时, 上式右边小于 $\varepsilon / 3$ .

为估计(16.23)右边的第三项, 先对下列不等式的分子用微分中值定理, 得到

$$
\begin{array}{l} \left| \frac {[ Q _ {N + p} (x _ {0} + h) - Q _ {N} (x _ {0} + h) ] - [ Q _ {N + p} (x _ {0}) - Q _ {N} (x _ {0}) ]}{h} \right| \\ \leqslant | P _ {N + p} (x + \theta h) - P _ {N} (x + \theta h) | <   \frac {\varepsilon}{3}, \end{array}
$$

其中 p 为任意正整数, $0 < \theta < 1$ , 并利用在 $[a, b]$ 一致成立的不等式 (16.21). 最后, 在上式左边令 $p \to \infty$ , 就知道 (16.23) 右边第三项不超过 $\varepsilon$ , 因此所求证的不等式 (16.22) 成立. □

注 这个证明的意义在于, 连续函数的原函数的存在性完全不需要定积分概念就可以建立. 以上证明是依据 [31] 中的叙述作了改写. (参见按照传统思路安排下的命题 10.3.3.)

在Fourier级数的收敛性理论中最重要的工具是Riemann引理（见例题10.2.6).由于在大多数教科书中均有该引理的证明，因此本书在前面对它未作证明.下面是用Weierstrass逼近定理的一个证明

例题 16.3.2 (Riemann 引理) 设 $f \in R[a, b]$ ，则

$$
\lim _ {p \rightarrow + \infty} \int_ {a} ^ {b} f (x) \sin p x \mathrm{d} x = 0, \quad \lim _ {p \rightarrow + \infty} \int_ {a} ^ {b} f (x) \cos p x \mathrm{d} x = 0.
$$

证 只证第一个即可. 对于可积函数 $f$ 与每个给定的 $\varepsilon > 0$ , 存在连续函数 $g \in C[a, b]$ , 使得

$$
\int_ {a} ^ {b} | f (x) - g (x) | \mathrm{d} x <   \varepsilon
$$

(见上册第十章第一组参考题 5).

根据逼近定理, 对于 g 存在于 $[a, b]$ 上一致逼近 g 的多项式 P, 满足

$$
\int_ {a} ^ {b} | g (x) - P (x) | \mathrm{d} x <   \varepsilon .
$$

因此就有

$$
\int_ {a} ^ {b} | f (x) - P (x) | \mathrm{d} x \leqslant \int_ {a} ^ {b} | f (x) - g (x) | \mathrm{d} x + \int_ {a} ^ {b} | g (x) - P (x) | \mathrm{d} x <   2 \varepsilon .
$$

然后从

$$
\begin{array}{r l} \left| \int_ {a} ^ {b} f (x) \sin p x \mathrm{d} x \right| & \leqslant \left| \int_ {a} ^ {b} [ f (x) - P (x) ] \sin p x \mathrm{d} x \right| + \left| \int_ {a} ^ {b} P (x) \sin p x \mathrm{d} x \right| \\ & \leqslant \int_ {a} ^ {b} | f (x) - P (x) | \mathrm{d} x + \left| \int_ {a} ^ {b} P (x) \sin p x \mathrm{d} x \right| \end{array}
$$

可见, 只需要对于多项式证明引理的结论就够了. 然而对于连续可微函数的 Riemann 引理的证明特别容易, 只需要用分部积分法即可, 以下从略. □

### 16.3.6 练习题

1. 设 $f$ 在 $[a, b]$ 上有定义，且对每个 $\varepsilon > 0$ ，存在多项式 $P$ ，使得满足条件 $|f(x) - P(x)| < \varepsilon, \forall x \in [a, b]$ ，证明： $f \in C[a, b]$ .

2. 设 $f \in C[a, b]$ , 证明:

(1) f 可以在 $[a, b]$ 上展开为一致收敛的多项式级数，且在级数中除第一项之外均为在 $[a, b]$ 上非负的多项式；

(2) f 可以在 $[a, b]$ 上展开为绝对一致收敛的多项式级数;

(3) 对于给定的收敛正项级数 $\sum_{n=1}^{\infty}a_{n}$ ，其中有无限多项大于 0，存在于区间 $[a,b]$ 上一致收敛于 f 的多项式级数 $\sum_{n=1}^{\infty}P_{n}(x)$ ，使满足条件 $\sup_{x\in[a,b]}\{|P_{n}(x)|\}\leqslant a_{n},\forall n=1,2,\cdots.$ 

3. 设 $f \in R[a, b]$ , 则对于每个 $\varepsilon > 0$ , 存在两个多项式 $p(x)$ 和 $P(x)$ , 使得满足条件: (1) $p(x) \leqslant f(x) \leqslant P(x), \forall x \in [a, b]$ ; (2) $\int_{a}^{b} [P(x) - p(x)] \mathrm{d}x < \varepsilon$ .

4. 设 $f \in C[a, b]$ ，且对每个非负整数 $n$ 满足条件 $\int_{a}^{b} x^{n} f(x) \, \mathrm{d}x = 0$ ，证明： $f$ 为恒等于 0 的常值函数。又若条件改为对于大于某个正整数 $n_0$ 的所有 $n$ 成立，则也有相同结论。

5. (1) 设 $f \in C[-1, 1]$ , 且对每个非负整数 $n$ 满足条件 $\int_{-1}^{1} x^{2n} f(x) \, \mathrm{d}x = 0$ , 则 $f$ 必为奇函数;

(2) 设 $f \in C[-1,1]$ ，且对每个非负整数 $n$ 满足条件 $\int_{-1}^{1} x^{2n+1} f(x) \, \mathrm{d}x = 0$ ，则 $f$ 必为偶函数.

6. 设 $f \in C[0,1]$ ，证明：存在每项为奇次项的多项式序列在 $[0,1]$ 上一致收敛于 $f$ 的充分必要条件为 $f(0) = 0$ .

7. 设 $f \in R[a, b]$ ，且对每个非负整数 $n$ 满足条件 $\int_{a}^{b} x^{n} f(x) \, \mathrm{d}x = 0$ ，证明： $f$ 在每个连续点上等于 0.

8. 设函数 $f$ 在区间 $(- \infty, + \infty)$ 上可以展开为一致收敛的多项式级数，证明： $f$ 本身必是多项式。（这断定了 Weierstrass 定理不可能不作改变而推广到无限区间上去。）

## §16.4 用级数构造函数

无穷级数不仅是研究函数的工具, 而且可以用于构造出具有各种特殊性质的函数, 其中有不少例子在数学发展史上起了重要的作用.

这里应当指出, 认为这些“病态”函数只是用作反例而没有其他意义的观点早已过时. 与 §5.6 介绍的混沌几乎同时发展起来的另一个新的非线性科学领域是“分形”(fractal), 其中的主要角色就是包括本节内容在内的各种“怪物”. 对此有兴趣的读者可以参考 [32, 20].

### 16.4.1 处处连续处处不可微的函数

在很长时间内人们对于连续性与可微性之间的关系不清楚, 许多人猜测连续函数只会在个别点或很少的点上不可微. 由于举出了处处连续处处不可微函数的例子, 这个问题得到了彻底解决.

这类例子最早出现在 Bolzano 的 1830 年的手稿中, 但只有曲线, 并无解析表达式, 也没有证明 (见 [15]). 正式发表并有严格证明的第一个例子则属于 Weierstrass (1872 年) (可参考 [15, 26, 29] 等).

Weierstrass 函数是一个缺项 Fourier 级数:

$$
F (x) = \sum_ {n = 1} ^ {\infty} a ^ {n} \sin (b ^ {n} \pi x),
$$

其中 $b$ 为奇数, $0 < a < 1$ , 且 $ab > 1 + \frac{3\pi}{2}$ . 由于右边的级数一致收敛, 因此函数 $F$ 的连续性是明显的. 关于 $F$ 处处不可微的证明可以在 [51, 29] 中找到.

目前教科书中在介绍处处连续处处不可微函数时一般均用 van der Waerden (范德瓦尔登) 于 1930 年提出的例子. 它在几何上相当直观, 证明也比较简单. 下面的证明可能比 [18] 第二卷的 444 小节更简单一些. 主要工具是利用关于差商的一个简单命题①: 若函数 $f$ 于点 $x_0$ 可导, 且 $\{[a_n, b_n]\}$ 是以点 $x_0$ 为惟一公共点的闭

区间套，则就有

$$
\lim _ {n \rightarrow \infty} \frac {f (b _ {n}) - f (a _ {n})}{b _ {n} - a _ {n}} = f ^ {\prime} (x _ {0}).\tag{16.24}
$$

与Weierstrass函数类似，van der Waerden函数是用无穷级数来构造的.现在按照下列步骤定义这个无穷级数的通项 $\{f_n\}$ 

1. 将区间 $[-1,1]$ 上的函数 $f(x)=|x|$ 按周期 2 延拓成为 $(-∞,+∞)$ 上的周期连续函数，仍记为 f.

2. 以 f 为模板构造函数列 $\{f_{n}\}$ :

$$
f _ {n} (x) = \frac {1}{2 ^ {n}} f (2 ^ {n} x), n = 1, 2, \dots , x \in (- \infty , + \infty).\tag{16.25}
$$

可以看出 $f_{n}$ 为周期 $\frac{1}{2^{n-1}}$ 的连续周期函数, 且有 $0 \leqslant f_{n}(x) \leqslant \frac{1}{2^{n}}$ . 还可看出 $f_{n}$ 的极值点等距分布, 相邻极值点之间的距离也是 $\frac{1}{2^{n}}$ .

3. 重要的是 $f_{n}$ 与 $f_{n + 1}$ 之间有如下的关系：

(1) $f_{n}$ 的极值点必是 $f_{n + 1}$ 的零点，

(2) $f_{n + 1}$ 的任意两个相邻极值点必落在 $f_{n}$ 为线性的一个子区间内.

4. 对任意正整数 $n$ , 设 $a_{n}, b_{n}$ 为 $f_{n}$ 的任意两个相邻的极值点, 则

(1) $k > n$ 时, 由3.(1)知 $a_{n}, b_{n}$ 为 $f_{k}$ 的零点, 因此

$$
\frac {f _ {k} (a _ {n}) - f _ {k} (b _ {n})}{a _ {n} - b _ {n}} = 0.\tag{16.26}
$$

(2) $k \leqslant n$ 时, 由3.(2)知

$$
\frac {f _ {k} (a _ {n}) - f _ {k} (b _ {n})}{a _ {n} - b _ {n}} = 1 \text {或} - 1.\tag{16.27}
$$

以上关于 $\{f_n\}$ 的性质非常直观，读者可以对照图16.3(a)中对于 $f_{1}, f_{2}, f_{3}$ 在区间[0,1]上的曲线段来理解这些性质

现在定义 van der Waerden 函数如下:

$$
W (x) = \sum_ {n = 1} ^ {\infty} f _ {n} (x), x \in (- \infty , + \infty).\tag{16.28}
$$

从 $|f_n(x)| \leqslant \frac{1}{2^n}$ 可知 (16.28) 右边的函数项级数一致收敛, 因此和函数 $W(x)$ 在 $(- \infty, +\infty)$ 内处处连续. 最后, 我们来证明:

命题 16.4.1 连续函数 W 在 $(-∞,+∞)$ 内处处不可导.

证 对任意指定的点 $x_0$ ，由(16.24)可知，只要能找到以 $x_0$ 为惟一公共点的闭区间套 $\{[a_n, b_n]\}$ ，使得极限

$$
\lim _ {n \rightarrow \infty} \frac {W (b _ {n}) - W (a _ {n})}{b _ {n} - a _ {n}}
$$

不存在即可.

利用 $f_{n}$ 的极值点等距分布，且相邻极值点的距离为 $1 / 2^{n}$ ，取 $a_{n}$ 和 $b_{n}$ 为 $f_{n}$ 的两个极值点，满足条件：(1) $a_{n} \leqslant x_{0} \leqslant b_{n}$ ，(2) $b_{n} - a_{n} = \frac{1}{2^{n}}$ 。

记 $d_{n}=\frac{W(b_{n})-W(a_{n})}{b_{n}-a_{n}},\quad n=1,2,\cdots,$ 则

$$
d _ {n} = \frac {1}{b _ {n} - a _ {n}} \left(\sum_ {k = 1} ^ {\infty} f _ {k} (b _ {n}) - \sum_ {k = 1} ^ {\infty} f _ {k} (a _ {n})\right) = \sum_ {k = 1} ^ {\infty} \frac {f _ {k} (b _ {n}) - f _ {k} (a _ {n})}{b _ {n} - a _ {n}}.
$$

由式(16.26)知上式右边和式中的项当k>n时均为0,因此有

$$
d _ {n} = \sum_ {k = 1} ^ {n} \frac {f _ {k} (b _ {n}) - f _ {k} (a _ {n})}{b _ {n} - a _ {n}}.
$$

由式(16.27)知上式右边和式的每一项为-1或1.因此当 $n$ 为偶数时 $d_{n}$ 为偶整数，而当 $n$ 为奇数时 $d_{n}$ 为奇整数．由此可见这样的数列 $\{d_n\}$ 一定发散，从而函数 $W$ 在点 $x_0$ 处不可导. □

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/2ca36a8aca5054953341315c15bc97cca119a4a96ec724fe5d2239c7cd2987e3.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/36a4167c17685c64dc12cc6695e8678b567994f9c810506de504933d8103c2be.jpg)



图16.3


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/ca1bdfc167b04e7e2341a1940a64235a4f59726af639e6a14ebd0d9eb4be405b.jpg)


注1 在图16.3(b),(c)中分别作出了(16.28)右边级数的前3个和第7个部分和函数,后者与 $W(x)$ 已很接近.读者可以结合证明来理解van der Waerden函数处处不可导的直观原因.在[18]等著作中一般是证明两个单侧导数都不存在,讨论比这里要更细致一点.此外,在定义 $f_{n}$ 的公式(16.25)中的比例因子 $2^{n}$ 改为 $4^{n}$ 或 $10^{n}$ 都是可以的.在[15]中的证明则完全不依赖于几何直观,也可供参考.

注 2 这方面的工作很多, 较近的成果见《美国数学月刊》(2002) 第 109 卷 378-380 页上的一文及其中的文献.

### 16.4.2 填满正方形的连续曲线

Cantor 首先证明: 直线上的所有点全体和平面上的所有点全体之间存在一一对应. 同样在区间 $[0,1]$ 内的所有点全体和单位正方形 $[0,1;0,1]$ 内的所有点全体之间也存在一一对应.

填满正方形的连续曲线就是将区间 $[0,1]$ 连续映射到单位正方形的满射. Peano在1890年第一次构造出了这样的例子. 此后人们经常将这类曲线称为

Peano 曲线. 它使我们对于如何合理定义曲线的概念起了重要的推动作用 (参见 [5, 31]). 这里要注意, Peano 曲线一定有自交点. 这是因为在 [0, 1] 和 [0, 1; 0, 1] 之间的一一映射不可能是连续的.

下面这个例子是1938年由Schoenberg(舍恩贝格)作出的.显然，这样的曲线需要用参数方程

$$
x = x (t), y = y (t), x \in [ 0, 1 ]
$$

来表示. 定义

$$
\varphi (t) = \left\{ \begin{array}{l l} 0, & t \in [ 0, 1 / 3 ], \\ 3 t - 1, & t \in (1 / 3, 2 / 3 ], \\ 1, & t \in (2 / 3, 1 ]. \end{array} \right.
$$

按照

$$
\varphi (t) = \varphi (- t), \varphi (t + 2) = \varphi (t), t \in (- \infty , + \infty)
$$

将 $\varphi(t)$ 延拓到 $(- \infty, +\infty)$ 上，再令

$$
x (t) = \sum_ {n = 1} ^ {\infty} \frac {\varphi \left(3 ^ {2 n - 2} t\right)}{2 ^ {n}}, y (t) = \sum_ {n = 1} ^ {\infty} \frac {\varphi \left(3 ^ {2 n - 1} t\right)}{2 ^ {n}}, t \in [ 0, 1 ].
$$

这就是所要作的曲线. 将正方形 $[0,1;0,1]$ 中每个点的坐标 $(x,y)$ 用二进制展开就不难证明存在 $t\in [0,1]$ , 使得 $x(t) = x, y(t) = y$ (可以参看[8,15]等).

## §16.5 对于教学的建议

### 16.5.1 学习要点

本章只是对于前三章的补充, 在教学中可根据情况选用.

1. 在许多积分计算中无穷级数经常有用, 它在求出有限形式答案和近似计算方面都是不可缺少的手段. 这里的问题已经与含参变量的积分有关, 但其中的参数只是离散的正整数.

2. 级数求和有很多内容, §16.2 列出的都是常用方法. 关于幂级数求和的材料见 14.3.3 小节的例题, 这里不再叙述.

3. Weierstrass 逼近定理在教科书中都有, 但一般只举出一种证法. §16.3 对此给出一个综述, 同时还对其应用举例.

4. 利用无穷级数构造具有特殊性质的函数是个经典问题. 这方面可用下面的几个参考题进行训练.

### 16.5.2 参考题

1. 求下列级数之和:

(1) $\frac{1}{1 \cdot 2 \cdot 3} + \frac{1}{3 \cdot 4 \cdot 5} + \frac{1}{5 \cdot 6 \cdot 7} + \cdots$ ; 

(2) $\frac{1}{2 \cdot 3 \cdot 4} + \frac{1}{4 \cdot 5 \cdot 6} + \frac{1}{6 \cdot 7 \cdot 8} + \cdots$ ; 

(3) $\frac{1}{1 \cdot 2 \cdot 3 \cdot 4} + \frac{1}{4 \cdot 5 \cdot 6 \cdot 7} + \frac{1}{7 \cdot 8 \cdot 9 \cdot 10} + \cdots$ . 

2. 求 Leibniz 型级数 $\sum_{n=1}^{\infty}(-1)^{n-1}\frac{\ln n}{n}$ 之和.

3. 证明： $\sum_{m = 1}^{\infty}\sum_{\substack{n = 1\\ n\neq m}}^{\infty}\frac{1}{m^{2} - n^{2}} = -\frac{\pi^{2}}{8}.$ 

4. (Goldbach (哥德巴赫)) 设 $q$ 取遍所有大于 1 的正整数的乘幂, 且其指数均大于 1, 证明: $\sum_{q} \frac{1}{q - 1} = 1$ .

5. 设 $a_{1}=2, a_{2}=8, a_{n}=4a_{n-1}-a_{n-2}, n=3,4,5,\cdots$ ，证明：

$$
\sum_ {n = 1} ^ {\infty} \operatorname{arccot} a _ {n} ^ {2} = \frac {\pi}{1 2}.
$$

6. 证明: $\pi = \sum_{n=0}^{\infty} \frac{(n!)^{2} 2^{n+1}}{(2n+1)!}$ .

7. 设 $\{g_{n}\}$ 是 $[0,1]$ 上非负连续函数列，且对每个 $x^{k} (k=0,1,\cdots)$ 存在极限

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {1} x ^ {k} g _ {n} (x) \mathrm{d} x,
$$

证明：对任意的 $f \in C[0,1]$ ，存在极限

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {1} f (x) g _ {n} (x) \mathrm{d} x.
$$

8. 设 f 在 $[a, b]$ 上有界且有原函数, $g \in C[a, b]$ , 证明: $f \cdot g$ 在 $[a, b]$ 上有原函数.

9. 设 $f$ 在 $[a, b]$ 上有界且有原函数, $g \in C^{1}[0, 1]$ 且 $g'(x) > 0$ , 证明: 复合函数 $f \circ g$ 在 $[0, 1]$ 上有原函数.

10. 题8中 $f$ 有界的条件不可去掉（见[62]的第二册340页).在[0,1]上定义

$$
f (x) = \left\{ \begin{array}{l l} \frac {1}{\sqrt {x}} \sin \frac {1}{x}, & 0 <   x \leqslant 1, \\ 0, & x = 0, \end{array} \right. \quad g (x) = \left\{ \begin{array}{l l} \sqrt {x} \sin \frac {1}{x}, & 0 <   x \leqslant 1, \\ 0, & x = 0, \end{array} \right.
$$

验证它们满足题8中除 $f$ 有界的所有条件，但 $f \cdot g$ 在[0,1]上无原函数.

11. 设函数 $f$ 在有界开区间 $(a, b)$ 上可以展开为一致收敛的多项式级数, 证明: $f$ 必在 $(a, b)$ 上一致连续.

12. 设 $f \in C[1, +\infty)$ , $f(+\infty) = A$ , 则对于每个 $\varepsilon > 0$ , 存在多项式 $P$ , 使得

$$
\left| f (x) - P \left(\frac {1}{x}\right) \right| <   \varepsilon , x \in [ 1, + \infty).
$$

13. 设 $f \in C[0, +\infty)$ , $f(+\infty) = A$ , 则对于每个 $\varepsilon > 0$ , 存在多项式 $P$ , 使得

$$
\left| f (x) - P \left(\mathrm{e} ^ {- x}\right) \right| <   \varepsilon , x \in (0, + \infty).
$$

14. (处处连续处处不可导的函数) 将 $(0,1)$ 中的数 x 按照十进制小数展开为 $x = \sum_{k=1}^{\infty} \frac{x_k}{10^k}$ ，其中 $x_k$ 为 0 到 9 的个位数字。对于 x 有两种十进制表示的情况，约定取从某位后全为 0 的一种表示。定义函数

$$
f (x) = \sum_ {k = 1} ^ {\infty} \frac {u _ {k}}{2 ^ {k}},
$$

其中 $u_{1} = 1$ ，而当 $k\geqslant 1$ 时

$$
u _ {k + 1} = \left\{ \begin{array}{l l} u _ {k}, & \text {若} x _ {k + 1} = x _ {k}, \\ 1 - u _ {k}, & \text {若} x _ {k + 1} \neq x _ {k}. \end{array} \right.
$$

证明：f 于 $(0,1)$ 内处处连续，但处处不可微.

(本例见《美国数学月刊》(1952)第59卷222-225页, 又见[29].)

15. 设对每个正整数 $n, u_n(x)$ 是区间 $[0,1]$ 上的非负单调增加函数且级数 $\sum_{n=1}^{\infty} u_n(1)$ 收敛. 令 $S(x) = \sum_{n=1}^{\infty} u_n(x)$ , 则 $S(x)$ 的不连续点集等于所有 $u_n(x)$ 的不连续点集之并.

16. (有稠密间断点的单调函数) 设数列 $\{x_{n}\}$ 是 $(0,1)$ 内的有理数全体, 又任取一个收敛的正项级数 $\sum_{n=1}^{\infty} a_{n}$ , 其中要求每个 $a_{n} > 0$ . 然后对每个正整数 $n$ 定义

$$
u _ {n} (x) = \left\{ \begin{array}{l l} 0, & 0 \leqslant x \leqslant x _ {n}, \\ a _ {n}, & x _ {n} <   x \leqslant 1. \end{array} \right.
$$

然后定义 $f(x) = \sum_{n=1}^{\infty} u_n(x), 0 < x < 1$ , 并补充定义 $f(0) = -1, f(1) = 1 + \sum_{n=1}^{\infty} a_n$ . 证明: $f$ 是在 $[0,1]$ 上以所有有理点为其间断点的单调函数.

17. (有稠密间断点的导函数) 已知函数

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2} \sin \frac {1}{x}, & \text {当} x \neq 0, \\ 0, & \text {当} x = 0 \end{array} \right.
$$

的导函数以 $x = 0$ 为其（第二类）间断点（见上册164页).设 $\{r_n\}$ 为区间(0,1)内的所有有理点，构造在区间(0,1)上的函数项级数

$$
\sum_ {n = 1} ^ {\infty} \frac {f (x - r _ {n})}{2 ^ {n}},
$$

将其和函数记为 F，用逐项微分定理求出导函数 $F'$ ，并证明： $F'$ 在 $(0,1)$ 内以每个 $r_{n}$ 为其第二类间断点，而在其他点上连续.
