
## 第十二章 广义积分

广义积分 (也称反常积分) 作为变限积分函数的极限, 其许多性质与定积分类似. 本章共分 5 节. §12.1 讨论广义积分的定义. §12.2 与 §12.3 分别讨论广义积分的敛散性判别与计算. §12.4 讨论无穷限广义积分的一些特殊性质. 最后一节为学习要点和两组参考题.

广义积分与无穷级数之间有密切联系. 在各种数学分析教材中两者的教学顺序并不相同. 虽然本书在第二章中已经提到了无穷级数的概念 (见 2.2.3 小节末的注解以及例题 2.2.6, 2.2.9, 命题 2.5.2 等), 但是要到下册中才有关于无穷级数的全面论述. 因此这方面的联系也要到后面介绍 (例如下册命题 13.2.1 等).

## §12.1 广义积分的定义

## 12.1.1 基本定义

1. 在定积分一章中给出函数 $f$ 为 Riemann 可积的定义时, 有两个基本限制: (1) 积分区间 $[a, b]$ 必须有限, (2) 函数 $f$ 在 $[a, b]$ 上必须有界. 前者是在积分的分划定义中隐含的必要条件, 后者则可以作为可积的必要条件而得到 (见命题 10.1.1). 广义积分就是在这两个方面对于定积分定义的突破. 今后也称原有的 Riemann 积分为常义积分.

2. 为方便起见, 引入如下定义: 设 $I$ 为区间, 函数 $f$ 在 $I$ 上有定义, 如果对任意有界闭区间 $[a, b] \subseteq I$ , $f \in R[a, b]$ , 则称 $f$ 在 $I$ 上内闭可积.

3. 广义积分的定义方法是通过对常义积分取极限. 称 $b$ 为函数 $f(x)$ 在定义域区间 $[a, b)$ 上的奇点, 如果 $b = +\infty$ 或者 $f(x)$ 在点 $b$ 左侧邻近无界. 假如 $f(x)$ 在区间 $[a, b)$ 上内闭可积, $b$ 为 $f(x)$ 在 $[a, b)$ 上的奇点, 则定义广义积分

$$
\int_ {a} ^ {b} f = \int_ {a} ^ {b} f (x) \mathrm{d} x = \lim _ {b ^ {\prime} \rightarrow b ^ {-}} \int_ {a} ^ {b ^ {\prime}} f (x) \mathrm{d} x.
$$

如果上式右边极限存在且有限 (在 $b = +\infty$ 时, $b' \to b^{-}$ 是指 $b' \to +\infty$ ), 则称广义积分 $\int_{a}^{b} f$ 收敛或 $f$ 广义可积 (在不产生混淆时也可简称可积); 否则, 称广义积分 $\int_{a}^{b} f$ 发散或 $f$ 广义不可积 (简称不可积). 类似地, 定义以 $a$ 为奇点的广义积分 $\int_{a}^{b} f$ 及其敛散性.

4. 称广义积分 $\int_{a}^{b} f$ 绝对收敛或 $f$ (广义) 绝对可积, 若广义积分 $\int_{a}^{b} |f|$ 收敛.

5. 设 $b$ 为 $f$ 在 $[a, b)$ 上的奇点. 如果 $b = +\infty$ , 则称广义积分 $\int_{0}^{+\infty} f$ 为无穷限广义积分, 简称为无穷限积分或无限积分. 如果 $b$ 为有限数, 则称广义积分 $\int_{a}^{b} f$ 为无界广义积分, 简称为无界积分或瑕积分, 也称奇点 $b$ 为瑕点. 这两类广义积分不但往往可以用换元法互换, 而且它们的定义与很多性质也可以统一叙述.

6. 设 $a < c < b$ , 如果 $c$ 为 $f$ 在 $[a, c)$ 与 $(c, b]$ 上的奇点或 $a, b$ 分别为 $f$ 在 $(a, c]$ 与 $[c, b)$ 上的奇点, 则定义广义积分

$$
\int_ {a} ^ {b} f = \int_ {a} ^ {c} f + \int_ {c} ^ {b} f,
$$

当右边两个广义积分都收敛时, 称广义积分 $\int_{a}^{b} f$ 收敛; 否则, 称广义积分 $\int_{a}^{b} f$ 发散.

注1 上述无穷限积分与无界积分的统一叙述可以简化广义积分的许多结果的表达. 但两类广义积分毕竟还有区别 (例如见 §12.4), 学习本章时要注意两类广义积分的异同.

注2 对不定积分、定积分和广义积分, 可积的含义是不同的. 不定积分的可积是指其为初等函数族, 定积分的可积是指其 Riemann 可积, 即 Riemann 积分存在, 而广义积分可积是指广义积分收敛. 这似乎容易引起混淆, 但在上下文不会引起混淆的情况下, 使用可积这个术语可以简化叙述.

除了以上基本概念之外, 还需要知道广义积分的主值. 以下对两种广义积分分别给出它们的主值定义.

设函数 f 在 $(-∞,+∞)$ 上内闭可积, 定义

$$
P. V. \int_ {- \infty} ^ {+ \infty} f = \lim _ {A \rightarrow + \infty} \int_ {- A} ^ {A} f
$$

为广义积分 $\int_{-\infty}^{+\infty} f$ 的 Cauchy 主值, 如果右边极限存在的话.

对于无界积分, 设 f 在区间 $[a, b]$ 中只有一个瑕点 c, a < c < b, 则定义

$$
P. V. \int_ {a} ^ {b} f = \lim _ {\delta \rightarrow 0 ^ {+}} \left(\int_ {a} ^ {c - \delta} f + \int_ {c + \delta} ^ {b} f\right)
$$

为广义积分 $\int_{a}^{b} f$ 的 Cauchy 主值, 如果右边极限存在的话.

容易看出, 若广义积分收敛, 则其主值与广义积分的值相同; 但是当广义积分发散时, 它的主值仍可能存在. 因此主值是广义积分概念的一个推广, 它在理论和应用上都很有价值. 对于本章内容来说, 如果事先能判定某个广义积分收敛, 则在计算该广义积分时可以用主值来代替, 这有时会带来方便.

## 12.1.2 广义积分与和式极限

虽然广义积分是通过对常义积分取极限得到, 但在被积函数单调情况下也有可能如常义积分那样直接从积分和式取极限得到. 首先我们讨论有界区间上的无界广义积分. 下面就是这类结果之一.

例题12.1.1 设 $f$ 在 $(0,1)$ 上单调, 无界广义积分 $\int_0^1 f(x)\mathrm{d}x$ 收敛, 则有

$$
\lim _ {n \to \infty} \frac {f \left(\frac {1}{n}\right) + f \left(\frac {2}{n}\right) + \cdots + f \left(\frac {n - 1}{n}\right)}{n} = \int_ {0} ^ {1} f (x)   \mathrm{d} x.\tag{12.1}
$$

证 不妨只讨论 $f$ 单调增加, 则有不等式

$$
\int_ {0} ^ {1 - \frac {1}{n}} f (x) \mathrm{d} x \leqslant \frac {f \left(\frac {1}{n}\right) + f \left(\frac {2}{n}\right) + \cdots + f \left(\frac {n - 1}{n}\right)}{n} \leqslant \int_ {\frac {1}{n}} ^ {1} f (x) \mathrm{d} x.
$$

这里两边的积分中至少有一个是广义积分. 然后令 $n \to \infty$ 即可.

注 这里有几点需要注意. 首先, 单调性条件只要在奇点邻近满足即可. 其次, 在只有一个奇点的情况, 从等式 (12.1) 左边极限存在可推出右边的广义积分收敛. 然而对于有两个奇点的情况这是不成立的. 例如

$$
f (x) = \frac {1}{x} - \frac {1}{1 - x}
$$

就是如此 (见 [48] 第一卷 253 页).

对于无穷限广义积分也有类似结果. 但是这时的积分和式本身已经是无穷项求和, 也就是无穷级数. 在学习无穷级数理论之前, 可以先按照 2.2.3 小节末的注解来理解.

例题12.1.2 设 $f$ 在 $[0, +\infty)$ 上单调， $\int_0^{+\infty} f(x) \mathrm{d}x$ 收敛，则有

$$
\lim _ {h \to 0 ^ {+}} h \sum_ {n = 1} ^ {\infty} f (n h) = \int_ {0} ^ {+ \infty} f (x) \mathrm{d} x.
$$

证 不妨假定 $f$ 单调减少. 首先可以证明 $f$ 在 $[0, +\infty)$ 上非负. 用反证法. 如果在某点 $x_0$ 处有 $f(x_0) < 0$ , 则就有

$$
\int_ {x _ {0}} ^ {A} f (x) \mathrm{d} x \leqslant f (x _ {0}) (A - x _ {0}) \rightarrow - \infty \quad (A \rightarrow + \infty),
$$

这与无穷限广义积分收敛的条件矛盾.

于是, 对任意正整数 $n$ , 我们有

$$
\int_ {h} ^ {(n + 1) h} f (x) \mathrm{d} x \leqslant \sum_ {k = 1} ^ {n} h f (k h) = h \sum_ {k = 1} ^ {n} f (k h) \leqslant \int_ {0} ^ {n h} f (x) \mathrm{d} x.
$$

注意到中间的和式作为 $n$ 的函数 (即数列) 为单调增加, 且有上界, 因此存在极限. 令 $n \to +\infty$ , 得到

$$
\int_ {h} ^ {+ \infty} f (x) \mathrm{d} x \leqslant h \sum_ {n = 1} ^ {\infty} f (n h) \leqslant \int_ {0} ^ {+ \infty} f (x) \mathrm{d} x.
$$

再令 $h \rightarrow 0^{+}$ 即得所要求证的结果.

## 12.1.3 练习题

1. 设 $f$ 在 $[0, +\infty)$ 上非负连续, 且积分 $\int_0^{+\infty} f = 0$ , 证明: $f \equiv 0$ .

2. 如果广义积分 $\int_{a}^{b} f^{2}$ 收敛, 则称 $f$ 在 $[a, b]$ 上平方可积. 分无穷限积分与无界积分两种情况讨论广义积分的平方可积性与绝对可积性之间的关系.

3. 设 $f \in C(0,1]$ , $f(0^{+}) = +\infty$ , 定义函数 $f_{n}(x) = \min \{f(x), n\}$ , $0 < x \leqslant 1$ , $n \in \mathbf{N}_{+}$ . 证明: 广义积分 $\int_{0}^{1} f$ 收敛的充分必要条件是存在有限极限

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {1} f _ {n} (x) \mathrm{d} x.
$$

4. 设 $f$ 在 $(- \infty, + \infty)$ 上内闭可积, $\int_{-\infty}^{+\infty} f^2$ 收敛, 证明: 对于任何实数 $a$ , 下列广义积分也收敛:

$$
\int_ {- \infty} ^ {+ \infty} | f (x) f (x + a) | \mathrm{d} x.
$$

5. 设 $f$ 在 $(- \infty, + \infty)$ 上内闭可积, 并且 $\lim_{x \to +\infty} f(x) = A$ , $\lim_{x \to -\infty} f(x) = B$ 都存在且有限. 证明: 对任意实数 $a > 0$ , 广义积分

$$
\int_ {- \infty} ^ {+ \infty} [ f (x + a) - f (x) ] \mathrm{d} x
$$

收敛, 并求它的值.

6. 找出以下广义积分计算中的错误, 说明理由, 并计算其主值. 在积分

$$
\int_ {- \frac {1}{2}} ^ {\frac {1}{2}} \frac {\mathrm{d} x}{x \sqrt {1 - x ^ {2}}}
$$

中, 由于被积函数是奇函数, 积分区间关于原点对称, 从而所求积分为 0.

## §12.2 广义积分的敛散性判别法

本节在第一小节中从一个例题开始, 讨论敛散性判别法. 对 Dirichlet 判别法和 Abel 判别法的必要性给出证明和改进. 在后两个小节中给出例题和练习题.

## 12.2.1 敛散性判别法

下面先看一个简单例题. 在其中我们将从基本定义出发进行讨论, 而不直接应用某个判别法, 其目的是说明这里所遇到的问题的一般特征.

例题 12.2.1 设 f 在 $[a, +\infty) (a > 1)$ 上内闭可积, 且已知广义积分

$$
\int_ {a} ^ {+ \infty} x f (x) \mathrm{d} x
$$

收敛, 证明: 广义积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 也收敛.

证 如果 $f$ 非负, 则可以写出不等式

$$
0 \leqslant \int_ {a} ^ {A} f (x) \mathrm{d} x \leqslant \int_ {a} ^ {A} x f (x) \mathrm{d} x,
$$

其中两个积分作为变上限 $A$ 的函数都是单调增加函数. 由于右边在 $A \to +\infty$ 时存在极限, 中间的积分作为 $A \in [a, +\infty)$ 的函数就是有上界的单调增加函数, 因此当 $A \to +\infty$ 时也有极限. 这就证明了 $f$ 在区间 $[a, +\infty)$ 上的广义积分收敛. 对于 $f$ 非正情况的讨论是类似的. 这就是比较判别法.

但是当 f 为变号函数时,上面的比较方法不能直接使用 $^{①}$ . 这时需要两个新的工具: (1) 广义积分的 Cauchy 收敛准则, (2) 积分第二中值定理.

任取 $a < A < A'$ , 对于积分

$$
\left| \int_ {A} ^ {A ^ {\prime}} f (x) \mathrm{d} x \right| = \left| \int_ {A} ^ {A ^ {\prime}} x f (x) \cdot \frac {1}{x} \mathrm{d} x \right|,
$$

利用右边积分号下第二个因子 $1 / x$ 单调且非负，就有 $\xi \in (A, A')$ ，使得成立

$$
\left| \int_ {A} ^ {A ^ {\prime}} f (x) \mathrm{d} x \right| = \left| \frac {1}{A} \int_ {A} ^ {\xi} x f (x) \mathrm{d} x \right|,
$$

然后利用条件就可以使得左边的积分当 $A, A'$ 充分大时小于事先给定的 $\varepsilon > 0$ ，因此 $f$ 在 $[a, +\infty)$ 上广义可积.

注1 注意在证明过程中两次应用Cauchy收敛准则，一次是用收敛的必要条件，另一次是用收敛的充分条件.实际上从广义积分开始，在后面的无穷级数和含参积分各章中各种形式的Cauchy收敛准则都要起非常重要的作用．其中的基本理由和上面这个简单例题是相同的．初学者可以复习一下§3.4中对于Cauchy收敛准则的基本内容.

注2 上面的证明实际上重复了Abel判别法与Dirichlet判别法的推导过程.当然可以直接应用这两个判别法之一来达到目的.

这里需要指出, Abel 判别法和 Dirichlet 判别法中的条件不仅是广义积分收敛的充分条件, 同时也是必要条件. 当然, Abel 判别法的必要性是平凡的. 但是 Dirichlet 判别法的必要性则是较新的发现, 多数教科书中都没有收入. 下面我们给出它的证明 (参见 [68]).

命题 12.2.1 (Dirichlet 判别法) 设 f 在 $[a, b)$ 上内闭可积, b 为奇点, 广义积分 $\int_{a}^{b} f$ 收敛的充分必要条件是存在分解 f = uv, 使得

(1) 函数 $u$ 在 $[a, b)$ 上单调, 且 $\lim_{x \to b^{-}} u(x) = 0$ ;

(2) 对任何 $b' > a$ ，积分 $\int_{a}^{b'} v(x) \, \mathrm{d}x$ 存在且有界.

证 充分性见一般教科书. 下面只对 $b = +\infty$ 情况的必要性给出证明, 对于其他情况的证明是类似的.

由于广义积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 根据 Cauchy 收敛准则, 存在 $A_{1} > a$ , 使得对于任何 $B > A \geqslant A_{1}$ , 成立 $\left|\int_{A}^{B} f(x) \, \mathrm{d}x\right| < 1$ .

归纳地可知, 对于 $n \geqslant 2$ , 存在 $A_{n} \geqslant A_{n-1} + 1$ , 使得对于任何 $B > A \geqslant A_{n}$ , 成立 $\left|\int_{A}^{B} f(x) \mathrm{d}x\right| < \frac{1}{n^3}$ . 这样得到的 $\{A_{n}\}$ 是严格单调增加的无穷大数列.

现在定义

$$
u (x) = \left\{ \begin{array}{l l} 1, & a \leqslant x \leqslant A _ {1}, \\ \frac {1}{n}, & A _ {n} <   x \leqslant A _ {n + 1}, n \in \mathbf {N} _ {+} \end{array} \right.\tag{12.2}
$$

和

$$
v (x) = \frac {f (x)}{u (x)}, a \leqslant x <   + \infty ,\tag{12.3}
$$

这样就有分解 $f = uv$ ，其中函数 $u$ 满足条件 (1) 是明显的，下面只需验证函数 $v$ 满足条件 (2). 容易看出 $v$ 在 $[a, +\infty)$ 上内闭可积，因此只需要证明它在任何区间 $[a, A]$ 上的积分有界.

由于当 $a \leqslant A \leqslant A_1$ 时 $v(x) = f(x)$ , 因此存在常数 $L > 0$ , 使得对这样的 $A$ 成立

$$
\left| \int_ {a} ^ {A} v (x) \mathrm{d} x \right| <   L.
$$

若 $A > A_{1}$ , 则存在 $n$ , 使得 $A_{n} < A \leqslant A_{n+1}$ . 这时根据定义 (12.3) 和 (12.2), 可以先作分解:

$$
\int_ {a} ^ {A} v (x) \mathrm{d} x = \left[ \int_ {a} ^ {A _ {1}} + \int_ {A _ {1}} ^ {A _ {2}} + 2 \int_ {A _ {2}} ^ {A _ {3}} + \dots + (n - 1) \int_ {A _ {n - 1}} ^ {A _ {n}} + n \int_ {A _ {n}} ^ {A} \right] f (x) \mathrm{d} x,
$$

然后就不难作出所需要的估计如下:

$$
\begin{array}{r l} \left| \int_ {a} ^ {A} v (x) \mathrm{d} x \right| & \leqslant \left| \int_ {a} ^ {A _ {1}} f \right| + \left| \int_ {A _ {1}} ^ {A _ {2}} f \right| + 2 \left| \int_ {A _ {2}} ^ {A _ {3}} f \right| + \dots + (n - 1) \left| \int_ {A _ {n - 1}} ^ {A _ {n}} f \right| + n \left| \int_ {A _ {n}} ^ {A} f \right| \\ & \leqslant L + 1 + 2 \cdot \frac {1}{2 ^ {3}} + \dots + (n - 1) \cdot \frac {1}{(n - 1) ^ {3}} + n \cdot \frac {1}{n ^ {3}} \\ & = L + 1 + \frac {1}{2 ^ {2}} + \dots + \frac {1}{n ^ {2}} \\ & <   L + 1 + \frac {1}{1 \cdot 2} + \dots + \frac {1}{(n - 1) n} <   L + 2. \end{array}
$$

下面我们再观察 Abel 判别法.

命题 12.2.2 (Abel 判别法) 设 f 在 $[a, b)$ 上内闭可积, b 为奇点, 广义积分 $\int_{a}^{b} f$ 收敛的充分必要条件是存在分解 f = uv, 使得

(1) 函数 u 在 $[a, b)$ 上单调有界;

(2) 积分 $\int_{a}^{b} v(x) \, dx$ 收敛.

众所周知, Abel 判别法的充分性可以从 Dirichlet 判别法导出, 同时其必要性是平凡的, 因为可以令 $u \equiv 1$ , $v \equiv f$ . 但是应用 Dirichlet 判别法的必要性可以证明, 在 Abel 判别法中的必要性可以加强为: $u(x)$ 不仅单调, 而且 $u(b^{-}) = 0$ (见 [68]).

证明是简单的. 设 $f = uv$ 是满足Dirichlet判别法条件的分解. 不妨设其中 $u$ 非负. 然后令

$$
u _ {1} = \sqrt {u}, v _ {1} = \sqrt {u} v,
$$

就不难看出 $f = u_{1}v_{1}$ 是满足 Abel 判别法条件的分解, 而且 $u_{1}(b^{-}) = 0$ .

## 12.2.2 例题

例题 12.2.2 讨论下列广义积分的敛散性:

(1) $\int_{1}^{+\infty}\left(\frac{x}{x^2 + p} -\frac{p}{x + 1}\right)\mathrm{d}x;$ (2) $\int_0^1 |\ln x|^p\mathrm{d}x;$ (3) $\int_0^{+\infty}\frac{\mathrm{d}x}{\sqrt[3]{x^2(x - 1)^2}};$ (4) $\int_0^{+\infty}\frac{\mathrm{d}x}{x^p(1 + x^2)} (p > 0).$ 

解 容易验证, 这 4 个题的被积函数都在奇点附近不变号, 因此都可用比较判别法和 Cauchy 判别法 (见教科书) 来解, 并且它们的收敛性就是绝对收敛性.

(1) 这是一个无穷限积分. 由通分可得

$$
\frac {x}{x ^ {2} + p} - \frac {p}{x + 1} = \frac {(1 - p) x ^ {2} + x - p ^ {2}}{(x ^ {2} + p) (x + 1)}.
$$

当 $p = 1$ 时，由

$$
\lim _ {x \rightarrow + \infty} x ^ {2} \cdot \frac {x - 1}{(x ^ {2} + 1) (x + 1)} = 1
$$

及 Cauchy 判别法, 知原广义积分收敛.

当 $p \neq 1$ 时, 由

$$
\lim _ {x \rightarrow + \infty} x \cdot \frac {(1 - p) x ^ {2} + x - p ^ {2}}{(x ^ {2} + p) (x + 1)} = 1 - p \neq 0
$$

及 Cauchy 判别法, 知原广义积分发散.

(2) 当 $p = 0$ 时这是常义积分, 而当 $p \neq 0$ 时这是瑕积分.

当 $p > 0$ 时, 瑕点是 $x = 0$ . 这时, 由 $\lim_{x \to 0^{+}} x^{\frac{1}{2}} |\ln x|^p = 0$ , 知 $\int_0^1 |\ln x|^p \mathrm{d}x$ 总是收敛的.

当 $p < 0$ 时, 虽然被积函数在 $x = 0$ 处无定义, 但由于 $\lim_{x \to 0^{+}} |\ln x|^{p} = 0$ , 可见 $x = 0$ 并不是瑕点. 这里要注意: 定积分的可积性和积分值与被积函数在有限个点处的值无关, 因此可以采取补充定义的方法来讨论, 而且可积性和积分值与补充定义的具体方法无关.

由 $\lim_{x\to 1^{-}}|\ln x|^p = +\infty$ 知 $x = 1$ 是瑕点.由

$$
| \ln x | ^ {p} = | \ln (1 - (1 - x)) | ^ {p} \sim (1 - x) ^ {p} = \frac {1}{(1 - x) ^ {- p}} \quad (x \rightarrow 1 ^ {-})
$$

可知, 原积分在 -1 < p < 0 时收敛, 而在 $p \leqslant -1$ 时发散.

(3) 此广义积分的瑕点为 $x = 0, 1$ . 我们可以分别讨论被积函数在区间 $\left[0, \frac{1}{2}\right]$ , $\left[\frac{1}{2}, 1\right]$ , $\left[1, \frac{3}{2}\right]$ 和 $\left[\frac{3}{2}, +\infty\right)$ 上的积分, 并将在这四个区间上的积分分别记为 $I_i$ , $i = 1, 2, 3, 4$ . 这时每个积分只有一个奇点, 而且奇点是积分区间的端点.

记被积函数为 $f(x) = \frac{1}{\sqrt[3]{x^2(x - 1)^2}}$ 

对 $I_{1}$ ，由 $f(x)\sim x^{-\frac{2}{3}}(x\to 0^{+})$ ，可知 $I_{1}$ 收敛.

对 $I_{2}$ 和 $I_{3}$ , 由 $f(x) \sim (x - 1)^{-\frac{z}{3}} (x \to 1)$ , 可知 $I_{2}, I_{3}$ 均收敛.

最后, 由 $f(x) \sim x^{-\frac{4}{3}} (x \to +\infty)$ , 可知 $I_4$ 收敛.

因为 $I_{1}, I_{2}, I_{3}, I_{4}$ 都收敛, 所以原广义积分收敛.

(4) 这是一个无穷限积分, 同时 $x = 0$ 又是瑕点. 下面我们分别讨论被积函数在区间 $[0,1]$ 和 $[1, +\infty)$ 上的积分, 并将这两个积分记为 $I_1$ 和 $I_2$ .

对 $I_{1}$ ，由于

$$
\lim _ {x \to 0 ^ {+}} x ^ {p} \cdot \frac {1}{x ^ {p} (1 + x ^ {2})} = 1,
$$

因此 p < 1 时 $I_{1}$ 收敛, 而 $p \geqslant 1$ 时 $I_{1}$ 发散.

对 $I_{2}$ ，由于

$$
\lim _ {x \to + \infty} x ^ {p + 2} \frac {1}{x ^ {p} (1 + x ^ {2})} = 1,
$$

而由 p > 0 知 $p + 2 > 1$ ，因此 $I_{2}$ 收敛.

合并以上讨论, 知原广义积分在 $p \geqslant 1$ 时发散, 在 $0 < p < 1$ 时收敛.

注 在题(1)中两个广义积分 $\int_{1}^{+\infty}\frac{x}{x^2 + p}\mathrm{d}x$ 与 $\int_1^{+\infty}\frac{p}{x + 1}\mathrm{d}x$ 都是发散的，但不能因此得出

$$
\int_ {1} ^ {+ \infty} \left(\frac {x}{x ^ {2} + p} - \frac {p}{x + 1}\right) \mathrm{d} x
$$

是发散的结论.

解题 (2) 时, 由于无论 $p$ 取何值, $|\ln x|^p$ 在 $x = 0$ 处总是无定义的, 因此初学者容易在 $p < 0$ 时, 仍然将 $x = 0$ 当作瑕点. 教学时应该向学生强调, 判别积分区间的一个端点 (或内点) 是不是瑕点的根据不是被积函数是否在该点有定义, 而是被积函数是否在该点邻近无界. 例如, 对于

$$
\int_ {0} ^ {+ \infty} \frac {\sin x}{x} \mathrm{d} x, \quad \int_ {0} ^ {+ \infty} x \ln x \mathrm{d} x
$$

等广义积分, x = 0 都不是瑕点.

解题 (3) 时, 初学者容易犯的错误是忽略位于积分区间内部的瑕点 $x = 1$ .

此外要注意, 在没有判定收敛性之前, 没有根据写出积分分解的等式. 例如对于题 (3), 等式

$$
\int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{\sqrt [ 3 ]{x ^ {2} (x - 1) ^ {2}}} = \left(\int_ {0} ^ {\frac {1}{2}} + \int_ {\frac {1}{2}} ^ {1} + \int_ {1} ^ {\frac {3}{2}} + \int_ {\frac {3}{2}} ^ {+ \infty}\right) \frac {\mathrm{d} x}{\sqrt [ 3 ]{x ^ {2} (x - 1) ^ {2}}}
$$

只有在判定右边每个积分收敛之后才成立, 而不是在此前.

例题 12.2.3 讨论广义积分 $\int_{0}^{+\infty}\frac{\sin x}{x^{p}}\mathrm{d}x\ (p>0)$ 的敛散性, 对于收敛的情况还要判别是条件收敛还是绝对收敛.

解 (1) 当 $0 < p \leqslant 1$ 时, 由 $0 \leqslant \lim_{x \to 0^{+}} \frac{\sin x}{x^p} \leqslant 1$ 知 $x = 0$ 不是瑕点.

因为 $\left|\int_{0}^{A}\sin x\,dx\right| \leqslant 2$ 对每个有限的 A 成立， $\frac{1}{x^{p}}$ 在 $[0, +\infty)$ 上单调减少且 $\lim_{x \to +\infty} \frac{1}{x^{p}} = 0$ ，由 Dirichlet 判别法知道原广义积分收敛.

下面讨论其绝对收敛性. 如果 $\int_0^{+\infty} \frac{|\sin x|}{x^p} \, \mathrm{d}x$ 收敛, 则 $\int_1^{+\infty} \frac{|\sin x|}{x^p} \, \mathrm{d}x$ 也收敛. 但从

$$
\frac {| \sin x |}{x ^ {p}} \geqslant \frac {\sin^ {2} x}{x ^ {p}} = \frac {1}{2} \left(\frac {1}{x ^ {p}} - \frac {\cos 2 x}{x ^ {p}}\right),
$$

而且 $\int_{1}^{+\infty}\frac{1}{x^p}\mathrm{d}x$ 发散, $\int_{1}^{+\infty}\frac{\cos 2x}{x^p}\mathrm{d}x$ 收敛, 可见 $\int_{1}^{+\infty}\frac{|\sin x|}{x^p}\mathrm{d}x$ 发散, 从而积分 $\int_{0}^{+\infty}\frac{|\sin x|}{x^p}\mathrm{d}x$ 也发散. 因此原广义积分在 $0 < p \leqslant 1$ 时条件收敛.

(2) 当 p > 1 时, x = 0 是瑕点. 分解

$$
\int_ {0} ^ {+ \infty} \frac {\sin x}{x ^ {p}} \mathrm{d} x = \left(\int_ {0} ^ {1} + \int_ {1} ^ {+ \infty}\right) \frac {\sin x}{x ^ {p}} \mathrm{d} x = I _ {1} + I _ {2}.
$$

对 $I_{2}$ ，由 $\left|\frac{\sin x}{x^p}\right| \leqslant \frac{1}{x^p}$ 及 $\int_1^{+\infty} \frac{\mathrm{d}x}{x^p}$ 收敛，知 $I_{2}$ 绝对收敛.

对 $I_{1}$ , 由 $\frac{\sin x}{x^{p}} \sim x^{1 - p} (x \to 0^{+})$ 知 $I_{1}$ 在 $1 - p > -1$ , 即 $1 < p < 2$ 时绝对收敛, 在 $1 - p \leqslant -1$ , 即 $p \geqslant 2$ 时发散.

因此, 原广义积分在 $1 < p < 2$ 时绝对收敛, 在 $p \geqslant 2$ 时发散.

在判别广义积分的敛散性时, 我们往往要进行不等式的放大与缩小, 有时还要进行恒等式的变换.

例题 12.2.4 设 p > 0, 证明广义积分

$$
\int_ {0} ^ {+ \infty} \frac {\sin x}{x ^ {p} + \sin x} \mathrm{d} x
$$

在 $0 < p \leqslant \frac{1}{2}$ 时发散, 在 $\frac{1}{2} < p \leqslant 1$ 时条件收敛, 在 $p > 1$ 时绝对收敛.

分析 由被积函数的形式, 容易联想起利用广义积分 $\int_{0}^{+\infty}\frac{\sin x}{x^{p}}dx$ . 检验两个被积函数之差:

$$
\frac {\sin x}{x ^ {p} + \sin x} - \frac {\sin x}{x ^ {p}} = - \frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + \sin x)},\tag{12.4}
$$

可以发现上式右边的分母上比被积函数的分母多了一个因子 $x^{p}$ , 其广义积分的敛散性要好处理一些.

证 由于被积函数 $\frac{\sin x}{x^p + \sin x}$ 在 $x = 0$ 右侧有界, $x = 0$ 不是瑕点. 因此我们只要讨论广义积分

$$
\int_ {1} ^ {+ \infty} \frac {\sin x}{x ^ {p} + \sin x} \mathrm{d} x.\tag{12.5}
$$

由(12.4)得到

$$
{\frac {\sin x}{x ^ {p} + \sin x}} = {\frac {\sin x}{x ^ {p}}} - {\frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + \sin x)}}.
$$

由上一个例题知, 右边第一项的广义积分

$$
\int_ {1} ^ {+ \infty} \frac {\sin x}{x ^ {p}} \mathrm{d} x
$$

在 $0 < p \leqslant 1$ 时条件收敛, 而在 p > 1 时绝对收敛. 下面考虑广义积分

$$
\int_ {1} ^ {+ \infty} \frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + \sin x)} \mathrm{d} x.\tag{12.6}
$$

当 $0 < p \leqslant \frac{1}{2}$ 时, 由

$$
\frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + \sin x)} \geqslant \frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + 1)}
$$

与

$$
\int_ {1} ^ {+ \infty} \frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + 1)} \mathrm{d} x
$$

发散, 知道广义积分 (12.6) 发散. 而当 $p > \frac{1}{2}$ 时, 由

$$
\frac {\sin^ {2} x}{x ^ {p} (x ^ {p} + \sin x)} \leqslant \frac {1}{x ^ {p} (x ^ {p} - 1)} \sim \frac {1}{x ^ {2 p}} (x \rightarrow + \infty)
$$

与

$$
\int_ {1} ^ {+ \infty} \frac {1}{x ^ {2 p}} \mathrm{d} x
$$

收敛, 知道广义积分 (12.6) 绝对收敛.

因此, 广义积分 (12.5) 当 $0 < p \leqslant \frac{1}{2}$ 时, 为收敛的广义积分与发散的广义积分之差, 从而发散; 当 $\frac{1}{2} < p \leqslant 1$ 时, 为条件收敛的广义积分与绝对收敛的广义积分之差, 从而条件收敛; 当 $p > 1$ 时, 为两个都是绝对收敛的广义积分之差, 从而绝对收敛.

注1 本例虽然有 $\lim_{x\to +\infty}\frac{1}{x^p + \sin x} = 0$ ，且 $\left|\int_{a}^{A}\sin x\mathrm{d}x\right| \leqslant 2$ 对每个 $A > a$ 成立，但在 $0 < p \leqslant \frac{1}{2}$ 时，所论广义积分仍发散。这说明在Dirichlet判别法中，单调性的条件是不能缺少的。

注 2 本例最后利用了两个推理: (1) 如果一个广义积分能表示为条件收敛的广义积分与绝对收敛的广义积分之差, 则必然条件收敛; (2) 如果一个广义积分能表示为两个绝对收敛的广义积分之和或差, 则必然绝对收敛.

现在考虑一个很不一般的广义积分. 图 12.1 是其中的被积函数的图像, 它具有非常奇特的性质, 可以说明一些重要的问题.

例题12.2.5 判别广义积分 $\int_0^{+\infty}\frac{x\mathrm{d}x}{1 + x^6\sin^2x}$ 的敛散性.

解 由于被积函数在 x > 0 时大于 0, 因此只需要研究变上限积分

$$
F (A) = \int_ {0} ^ {A} \frac {x \mathrm{d} x}{1 + x ^ {6} \sin^ {2} x}
$$

在 $[0, \infty)$ 上的有界性. 若有界则收敛, 否则即发散. 又因 $F$ 单调增加, 因此只要观察 $F$ 在趋于无穷大的一个点列 $\{A_n\}$ 上的函数值序列是否有界即可.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/5127ba2e5e79b6c6248dd2809ea7e6ed5ba04076c9260fbffa4ed0b1f2c336ad.jpg)


取 $A_{n}=n\pi, n\in N_{+}$ ，则可分解积分为

图12.1

$\int_0^{n\pi}\frac{x\mathrm{d}x}{1 + x^6\sin^2x} = \sum_{k = 1}^n u_k$ ，其中 $u_{k} = \int_{(k - 1)\pi}^{k\pi}\frac{x\mathrm{d}x}{1 + x^{6}\sin^{2}x}.$ 

对于 $u_{k}$ 可估计如下 $(k\geqslant 2)$ ，其中对于区间 $\left[0,\frac{\pi}{2}\right]$ 上的 $\sin x$ 应用Jordan不等式 $\sin x\geqslant 2x / \pi$ (例题8.5.6):

$$
\begin{array}{r l}u _ {k}&\leqslant k \pi \int_ {(k - 1) \pi} ^ {k \pi} \frac {\mathrm{d} x}{1 + (k - 1) ^ {6} \pi^ {6} \sin^ {2} x} = k \pi \int_ {0} ^ {\pi} \frac {\mathrm{d} x}{1 + (k - 1) ^ {6} \pi^ {6} \sin^ {2} x}\\&= 2 k \pi \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + (k - 1) ^ {6} \pi^ {6} \sin^ {2} x} \leqslant 2 k \pi \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + 4 (k - 1) ^ {6} \pi^ {4} x ^ {2}}\\&= \frac {k}{\pi (k - 1) ^ {3}} \int_ {0} ^ {(k - 1) ^ {3} \pi^ {3}} \frac {\mathrm{d} t}{1 + t ^ {2}} \sim \frac {1}{2 k ^ {2}} (k \rightarrow \infty).\end{array}
$$

由于

$$
1 + \frac {1}{2 ^ {2}} + \dots + \frac {1}{n ^ {2}} <   1 + \frac {1}{1 \cdot 2} + \dots + \frac {1}{(n - 1) n} <   2
$$

与 n 无关, 可见函数值序列 $\{F(n\pi)\}$ 有界, 从而函数 $F(A)$ 在 $0 \leqslant A < +\infty$ 上有界, 因此本题的广义积分收敛. □

注 如图 12.1 所示, 这个收敛积分的被积函数满足等式 $f(k\pi) = k\pi$ . 这表明函数图像与第一象限的角平分线 y = x 有无穷多个交点. 交点的坐标是 $(k\pi, k\pi)$ , k 取所有非负整数. 但是当 $x \neq k\pi$ 时函数值 $f(x)$ 就急剧下降, 当 $x > \pi$ 时函数图像在图 12.1 上已经与 x 轴很难区分开. 由这个例子可见, 无穷限广义积分 $\int_{a}^{+\infty} f(x) \, dx$ 收敛时, 其被积函数的极限 $f(+\infty)$ 不仅可以不存在, 而且可以有 $\lim_{x \to +\infty} f(x) = +\infty$ (这里的上极限是 §3.6 中的相应概念在连续情况的推广).

## 12.2.3 练习题

1. 讨论下列广义积分的敛散性, 若是收敛, 还要讨论是条件收敛还是绝对收敛:

(1) $\int_0^{+\infty}x\sin^4 x\mathrm{d}x;$ (2) $\int_3^{+\infty}\frac{\ln\ln x}{\ln x}\sin x\mathrm{d}x;$ 

(3) $\int_0^{+\infty}\frac{1}{x}\mathrm{e}^{\cos x}\sin (\sin x)\mathrm{d}x;$ (4) $\int_1^{+\infty}\ln \frac{x^2}{x^2 - 1}\mathrm{d}x;$ 

(5) $\int_{1}^{+\infty}\ln \left(\cos \frac{1}{x} +\sin \frac{1}{x}\right)\mathrm{d}x;$ (6) $\int_0^1\frac{1}{x}\ln \frac{1 + x}{1 - x}\mathrm{d}x;$ 

(7) $\int_0^{+\infty}\left[\frac{1}{\sqrt{x}} -\sqrt{\ln\left(1 + \frac{1}{x}\right)}\right]\mathrm{d}x;$ (8) $\int_0^{+\infty}\frac{\sin x}{\sqrt{x + \cos x}}\mathrm{d}x.$ 

2. 对于以下含有参数的广义积分, 确定出使积分绝对收敛、条件收敛和发散的参数范围:
(1) $\int_{0}^{\pi/2}\frac{dx}{\sin^{p}x\cos^{q}x};$ (2) $\int_{0}^{+\infty}\frac{\cos x}{1+x^{p}}dx$ (p>0);

(3) $\int_{0}^{+\infty}\frac{\sin x}{x}|\ln x|^{p}dx;$ (4) $\int_{0}^{+\infty}\frac{\ln(1+x)}{x^{p}}dx;$ (5) $\int_{0}^{+\infty}\frac{\sin x^{2}}{1+x^{p}}dx$ ( $p\geqslant0$ );

(6) $\int_{0}^{+\infty}\frac{x^{p}\sin x}{1+x^{q}}dx;$ (7) $\int_{0}^{+\infty}\frac{e^{\sin x}\sin2x}{x^{p}}dx;$ (8) $\int_{e}^{+\infty}\frac{dx}{(x-e)^{p}(\ln\ln x)^{q}}.$ 

3. 设 $a_{1}, \cdots, a_{n}$ 为互不相同的实数, $p_{1}, \cdots, p_{n} > 0$ , 讨论广义积分

$$
\int_ {- \infty} ^ {+ \infty} \frac {\mathrm{d} x}{| x - a _ {1} | ^ {p _ {1}} | x - a _ {2} | ^ {p _ {2}} \cdots | x - a _ {n} | ^ {p _ {n}}}
$$

的敛散性.

4. 讨论广义积分 $\int_0^{+\infty}\left[\ln \left(1 + \frac{1}{x}\right) - \frac{1}{1 + x}\right]\mathrm{d}x$ 的敛散性.

5. 判别广义积分 $\int_0^{+\infty} \frac{x \, \mathrm{d}x}{1 + x^4 \sin^2 x}$ 的敛散性.

6. 求函数 $F(x) = \int_{0}^{+\infty} \left| t^2 - \frac{1}{t^2} \right|^x \, \mathrm{d}t$ 的定义域.

7. 设 $f' \in C[0,1]$ 且 $f'(x)$ 处处大于 0, 证明: 广义积分

$$
\int_ {0} ^ {1} \frac {f (x) - f (0)}{x ^ {p}} \mathrm{d} x
$$

在 p < 2 时收敛, $p \geqslant 2$ 时发散.

8. 设 $\int_{a}^{+\infty} f$ 为条件收敛, 证明:
(1) 广义积分 $\int_{a}^{+\infty} (|f| \pm f)$ 发散;
(2) $\lim_{x \to +\infty} \frac{\int_{a}^{x} (|f| + f)}{\int_{a}^{x} (|f| - f)} = 1.$ 

9. 设 $f \in C^1 [a, +\infty)$ 单调, 且 $f(+\infty) = 0$ , 证明: $\int_{a}^{+\infty} f'(x) \sin^2 x \, \mathrm{d}x$ 收敛.

10. 设 $f, g \in C^{1}[a, +\infty)$ , $f'(x)$ 非负, $f(+\infty) = 0$ , 且 $g(x)$ 在 $[a, +\infty)$ 上有界, 证明: $\int_{a}^{+\infty} f(x) g'(x) \mathrm{d}x$ 收敛.

## §12.3 广义积分的计算

广义积分是定积分与函数极限的结合, 因此定积分计算的公式与技巧几乎都能应用于广义积分. 这方面的例题放在下面第一小节中. 第二小节则专门介绍几个特殊广义积分的计算, 它们都有重要的应用, 也都需要用特殊的技巧来计算.

与常义积分的计算不同之处是, 在计算一个广义积分之前应当先观察它是否收敛, 如果该广义积分是发散的, 就不必做无用功了. (在某些问题中这时还需要考虑其主值是否存在和怎样计算的问题.)

## 12.3.1 例题

例题12.3.1 计算广义积分 $I = \int_{0}^{+\infty}\frac{\ln x}{1 + x^2}\mathrm{d}x.$ 

解 这时的积分以 0 和 +∞ 为奇点, 容易验证其收敛性. 因此可以将积分拆开成两个积分:

$$
\int_ {0} ^ {+ \infty} {\frac {\ln x}{1 + x ^ {2}}}   \mathrm{d} x = \int_ {0} ^ {1} {\frac {\ln x}{1 + x ^ {2}}}   \mathrm{d} x + \int_ {1} ^ {+ \infty} {\frac {\ln x}{1 + x ^ {2}}}   \mathrm{d} x,
$$

然后对上式右边的第二个积分作倒代换, 就得到

$$
\int_ {1} ^ {+ \infty} \frac {\ln x}{1 + x ^ {2}} \mathrm{d} x = - \int_ {0} ^ {1} \frac {\ln x}{1 + x ^ {2}} \mathrm{d} x,
$$

因此原广义积分等于0.

注 以上计算的实质是什么？试作代换 $x = \tan t$ ，就得到

$$
I = \int_ {0} ^ {\pi / 2} \ln \tan t \mathrm{d} t.
$$

由于

$$
\ln \tan \left(\frac {\pi}{2} - t\right) = \ln \cot t = - \ln \tan t,
$$

因此被积函数 $\ln \tan t$ 在区间 $(0, \pi / 2)$ 上关于区间中点为奇函数. 如果与命题10.4.5作比较, 可见积分等于0的原因在于对称性. 关于命题10.4.5在广义积分情况的推广留作为12.3.3小节的练习题1.

例题12.3.2 计算广义积分 $\int_0^1 (\ln x)^n\mathrm{d}x,n\in \mathbf{N}_+$ 

解 这是一个无界积分, $x = 0$ 是瑕点. 由 $\lim_{x \to 0^{+}} x^{\frac{1}{2}} (\ln x)^n = 0$ , 知所求广义积分收敛. 设 $I_n = \int_0^1 (\ln x)^n \, \mathrm{d}x$ , 应用分部积分法得到

$$
\begin{array}{r l} & I _ {n} = x (\ln x) ^ {n} \Big | _ {0 ^ {+}} ^ {1} - \int_ {0} ^ {1} n (\ln x) ^ {n - 1} \mathrm{d} x = - n \int_ {0} ^ {1} (\ln x) ^ {n - 1} \mathrm{d} x = - n I _ {n - 1} \\ & \qquad = (- 1) ^ {2} n (n - 1) I _ {n - 2} = \dots = (- 1) ^ {n} n! I _ {0} = (- 1) ^ {n} n!. \end{array}
$$

在广义积分计算中也可以用分部积分, 但这时需要注意, 如果在积分外出现非有限数, 则不能得到正确结果.

例题12.3.3 计算广义积分 $\int_0^{+\infty}\frac{x\ln x}{(1 + x^2)^2}\mathrm{d}x.$ 

分析 这个广义积分的收敛性是容易判别的, 而且 $x = 0$ 不是瑕点. 为了计算它的值, 可以用与例题12.3.1完全相同的方法, 答案也是0, 同时那里的注解对本题也一样有效, 细节从略.

但是由于本题的被积函数的形式, 容易使我们产生用分部积分的想法. 这时用分部积分得到

$$
\begin{array}{r l} \int_ {0} ^ {+ \infty} \frac {x \ln x}{(1 + x ^ {2}) ^ {2}} \mathrm{d} x & = \int_ {0} ^ {+ \infty} \ln x \mathrm{d} \left(- \frac {1}{2 (1 + x ^ {2})}\right) \\ & = - \frac {\ln x}{2 (1 + x ^ {2})} \Bigg | _ {0 ^ {+}} ^ {+ \infty} + \int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{2 x (1 + x ^ {2})}. \end{array}
$$

这时右边的第一项当 $x \to 0^{+}$ 时发散, 同时最后一个积分也发散, 出现了 $\infty - \infty$ 型的不等式. 造成错误的原因是忽视了运用广义积分分部积分法的基本条件: 在 $\int_{a}^{b} u \, \mathrm{d}v$ , $\int_{a}^{b} v \, \mathrm{d}u$ , $uv\bigg|_{a}^{b-}$ 中至少要知道已有两个收敛.

注 类似的问题对于常义积分也是存在的, 这在例题 10.4.1 中已经遇到过, 但对于广义积分却难以用那里介绍的待定常数法来解决. 当然, 也可以如例题 9.1.5 那样, 用分部积分法先求出本题的被积函数的不定积分, 然后用广义的 Newton-Leibniz 公式进行计算.

## 12.3.2 几个特殊广义积分的计算

本节介绍几个有名的广义积分, 其中的方法和结果都是重要的. 利用这些积分还可以计算出很多其他积分 (见下一小节的练习题 3—6).

例题12.3.4（Euler积分）计算积分 $I = \int_0^{\pi /2}\ln \sin x\mathrm{d}x.$ 

解 1 这是无界积分, 瑕点为 x = 0. 利用 Cauchy 判别法, 容易验证其收敛性. 应用命题 10.4.6 在无界积分情况的推广就容易计算如下:

$$
\begin{array}{r l} I & = \int_ {0} ^ {\pi / 4} (\ln \sin x + \ln \cos x) \mathrm{d} x = \int_ {0} ^ {\pi / 4} (\ln \sin 2 x - \ln 2) \mathrm{d} x \\ & = \frac {1}{2} \int_ {0} ^ {\pi / 2} \ln \sin y \mathrm{d} y - \frac {\pi}{4} \ln 2 = \frac {1}{2} I - \frac {\pi}{4} \ln 2, \end{array}
$$

所以 $I = -\frac{\pi}{2} \ln 2.$ 

解 2 先作代换 x = 2t, 得到

$$
I = \int_ {0} ^ {\pi / 4} 2 \ln \sin 2 t \mathrm{d} t = \frac {\pi}{2} \ln 2 + \int_ {0} ^ {\pi / 4} 2 \ln \sin t \mathrm{d} t + \int_ {0} ^ {\pi / 4} 2 \ln \cos t \mathrm{d} t,
$$

对右边最后一个积分用代换 $t = \pi /2 - u,$ 得到

$$
\begin{array}{r l} I & = \frac {\pi}{2} \ln 2 + \int_ {0} ^ {\pi / 4} 2 \ln \sin t \mathrm{d} t + \int_ {\pi / 4} ^ {\pi / 2} 2 \ln \sin u \mathrm{d} u \\ & = \frac {\pi}{2} \ln 2 + \int_ {0} ^ {\pi / 2} 2 \ln \sin t \mathrm{d} t = \frac {\pi}{2} \ln 2 + 2 I, \end{array}
$$

所以 $I = -\frac{\pi}{2} \ln 2.$ 

例题 12.3.5 (Froullani (伏汝兰尼) 积分) 设函数 f 在 $[0, +\infty)$ 上连续, 极限 $f(+\infty)$ 存在且有限, 0 < a < b, 计算积分

$$
\int_ {0} ^ {+ \infty} \frac {f (a x) - f (b x)}{x} \mathrm{d} x.
$$

解 本题的广义积分的收敛性将在下面的计算过程中建立. 对 $0 < r < R < +\infty$ , 由定积分的换元积分法, 成立

$$
\begin{array}{r l} \int_ {r} ^ {R} \frac {f (a x) - f (b x)}{x} \mathrm{d} x & = \int_ {r} ^ {R} \frac {f (a x)}{x} \mathrm{d} x - \int_ {r} ^ {R} \frac {f (b x)}{x} \mathrm{d} x \\ & = \int_ {a r} ^ {a R} \frac {f (x)}{x} \mathrm{d} x - \int_ {b r} ^ {b R} \frac {f (x)}{x} \mathrm{d} x \\ & = \int_ {a r} ^ {b r} \frac {f (x)}{x} \mathrm{d} x - \int_ {a R} ^ {b R} \frac {f (x)}{x} \mathrm{d} x. \end{array}
$$

对上式右边的两个定积分分别应用积分第一中值定理, 得到

$$
\int_ {a r} ^ {b r} \frac {f (x)}{x} \mathrm{d} x = f (\xi) \int_ {a r} ^ {b r} \frac {\mathrm{d} x}{x} = f (\xi) \ln \frac {b}{a} (a r <   \xi <   b r),
$$

$$
\int_ {a R} ^ {b R} \frac {f (x)}{x} \mathrm{d} x = f (\eta) \int_ {a R} ^ {b R} \frac {\mathrm{d} x}{x} = f (\eta) \ln \frac {b}{a} (a R <   \eta <   b R).
$$

在上两式中分别令 $r \to 0^{+}$ , $R \to +\infty$ , 注意到这时 $\xi \to 0^{+}$ , $\eta \to +\infty$ , 由于 $f(0^{+}) = f(0)$ , $f(+\infty)$ 存在且有限, 而且 $\int_{r}^{R} \frac{f(ax) - f(bx)}{x} \mathrm{d}x$ 在这时的极限就是 Froullani 积分, 便得到

$$
\int_ {0} ^ {+ \infty} {\frac {f (a x) - f (b x)}{x}}   \mathrm{d} x = [ f (0) - f (+ \infty) ] \cdot \ln {\frac {b}{a}}.
$$

注 从上面的证明过程可以得到 Froullani 积分的两种变形:

(1) 若 $x \to +\infty$ 时 $f(x)$ 没有有限极限, 但是对某个 A > 0, 积分

$$
\int_ {A} ^ {+ \infty} \frac {f (x)}{x} \mathrm{d} x
$$

收敛，则有

$$
\int_ {0} ^ {+ \infty} {\frac {f (a x) - f (b x)}{x}}   \mathrm{d} x = f (0) \cdot \ln {\frac {b}{a}}.
$$

(2) 若 f 在 0 点不连续, 甚至右极限也不存在, 但对于某个 A > 0, 积分

$$
\int_ {0} ^ {A} \frac {f (x)}{x} \mathrm{d} x
$$

收敛，则有

$$
\int_ {0} ^ {+ \infty} {\frac {f (a x) - f (b x)}{x}}   \mathrm{d} x = f (+ \infty) \cdot \ln {\frac {b}{a}}.
$$

例题12.3.6（Dirichlet积分）证明：积分 $\int_0^{+\infty}\frac{\sin x}{x}\mathrm{d}x = \frac{\pi}{2}.$ 

解 从例题12.2.3已知这个广义积分为条件收敛.为了计算它的值，要利用在例题10.4.3中已经得到的结果(也有称为Dirichlet积分的):

$$
\int_ {0} ^ {\pi} \frac {\sin \left(n + \frac {1}{2}\right) x}{2 \sin \frac {x}{2}} \mathrm{d} x = \frac {\pi}{2}.
$$

先观察将其分母换为 $x$ 所产生的影响. 用 L'Hospital 法则, 有

$$
f (x) = \frac {1}{x} - \frac {1}{2 \sin \frac {x}{2}} = O (x) (x \rightarrow 0),
$$

因此 $f$ 在 $[0, \pi]$ 上常义可积. 应用 Riemann 引理 (例题 10.2.6), 有

$$
\lim _ {n \to \infty} \int_ {0} ^ {\pi} f (x) \sin \left(n + \frac {1}{2}\right) x   \mathrm{d} x = 0,
$$

并且得到

$$
\lim _ {n \to \infty} \int_ {0} ^ {\pi} \frac {\sin \left(n + \frac {1}{2}\right) x}{x} \mathrm{d} x = \lim _ {n \to \infty} \int_ {0} ^ {\pi} \frac {\sin \left(n + \frac {1}{2}\right) x}{2 \sin \frac {x}{2}} \mathrm{d} x = \frac {\pi}{2}.
$$

最后在利用代换得到的等式

$$
\int_ {0} ^ {\pi} \frac {\sin \left(n + \frac {1}{2}\right) x}{x} \mathrm{d} x = \int_ {0} ^ {\left(n + \frac {1}{2}\right) \pi} \frac {\sin t}{t} \mathrm{d} t
$$

的两边令 $n \rightarrow \infty$ ，就得到所要的结果。

下面的一个广义积分称为概率积分(也称为 Euler-Poisson 积分), 它的值在概率统计中是一个基本量.

例题 12.3.7 (Euler-Poisson 积分) 证明: 积分 $\int_{0}^{+\infty} e^{-t^{2}} dt = \frac{\sqrt{\pi}}{2}$ .

解 积分的收敛性是明显的. 利用对于每个 $t$ , 数列 $\left\{\left(1 - \frac{t^2}{n}\right)^n\right\}$ 的极限是 $\mathrm{e}^{-t^2}$ , 我们研究积分

$$
I _ {n} = \int_ {0} ^ {\sqrt {n}} \left(1 - \frac {t ^ {2}}{n}\right) ^ {n} \mathrm{d} t.
$$

作代换 $t = \sqrt{n}\sin x$ ，就有

$$
I _ {n} = \sqrt {n} \int_ {0} ^ {\pi / 2} \cos^ {2 n + 1} x \mathrm{d} x = \sqrt {n} \cdot \frac {(2 n) ! !}{(2 n + 1) ! !} \rightarrow \frac {\sqrt {\pi}}{2} (n \rightarrow \infty).
$$

这里利用了例题 10.4.9 和 Wallis 公式 (11.29). 由于右边的极限值已经是概率积分的数值, 而且又有

$$
\int_ {0} ^ {+ \infty} \mathrm{e} ^ {- t ^ {2}} \mathrm{d} t = \lim _ {n \to \infty} \int_ {0} ^ {\sqrt {n}} \mathrm{e} ^ {- t ^ {2}} \mathrm{d} t,
$$

因此只需要再证明

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {\sqrt {n}} \left[ \mathrm{e} ^ {- t ^ {2}} - \left(1 - \frac {t ^ {2}}{n}\right) ^ {n} \right] \mathrm{d} t = 0.
$$

利用关于指数函数的一个不等式 (见例题 8.5.4): 当 $a \geqslant 1$ 时在区间 $[0, a]$ 上成立

$$
0 \leqslant \mathrm{e} ^ {- x} - \left(1 - \frac {x}{a}\right) ^ {a} \leqslant \frac {x ^ {2}}{a} \mathrm{e} ^ {- x},\tag{12.7}
$$

在其中令 $x = t^2, a = n$ ，就得到估计式

$$
0 \leqslant \int_ {0} ^ {\sqrt {n}} \left[ \mathrm{e} ^ {- t ^ {2}} - \left(1 - \frac {t ^ {2}}{n}\right) ^ {n} \right] \mathrm{d} t \leqslant \frac {\int_ {0} ^ {\sqrt {n}} t ^ {4} \mathrm{e} ^ {- t ^ {2}} \mathrm{d} t}{n}.
$$

由于当 $n \to \infty$ 时右边分子上的广义积分收敛, 因此右边极限为 0.

注 计算概率积分的方法很多. 比较传统的方法有: (1) 从简单不等式

$$
1 - x ^ {2} \leqslant \mathrm{e} ^ {- x ^ {2}} \leqslant \frac {1}{1 + x ^ {2}} (x \geqslant 0)\tag{12.8}
$$

出发, 用夹逼方法, 见 [14] 第二卷 492 小节 (留作为第二组参考题 1); (2) 二重广义积分方法, 见 [14] 第三卷 617 小节与本书下册例题 22.4.1; (3) 含参积分中交换积分次序的方法, 见 [14] 第二卷 522 小节; (4) 对广义积分取极限的方法, 见本书下册例题 16.1.2. 上面所用的方法见《美国数学月刊》(1956) 第 63 卷 35-37 页.

## 12.3.3 练习题

1. 根据例题 12.3.1 的注, (1) 写出命题 10.4.5 在广义积分情况的推广, 并作出证明; (2) 推广该例题, 也就是说当 f 在区间 $[0, +\infty)$ 上满足什么条件时, 可以利用类似的方法, 或命题 10.4.5 的推广形式, 证明 f 在这个区间上的广义积分等于 0.

2. 计算下列广义积分:

(1) $\int_0^{+\infty}\mathrm{e}^{-x}|\sin x|\mathrm{d}x;$ (2) $\int_1^{+\infty}\frac{\mathrm{d}x}{\mathrm{e}^{x + 1} + \mathrm{e}^{3 - x}};$ 

(3) $\int_{a}^{b}\frac{\mathrm{d}x}{\sqrt{(x - a)(b - x)}};$ 

(4) $\int_0^{+\infty}\frac{\mathrm{d}x}{(1 + x^2)^n}$ $(n\in \mathbf{N}_{+})$ 

(5) $\int_0^1 x^n\left(\ln \frac{1}{x}\right)^m\mathrm{d}x (n,m\in \mathbf{N}_+)$ ; 

(6) $\int_0^{+\infty}\frac{\sin\left(x - \frac{1}{x}\right)}{x}\mathrm{d}x;$ 

$$
\int_ {0} ^ {+ \infty} \frac {\ln x}{(x ^ {2} + 1) (x ^ {2} + 4)} \mathrm{d} x;
$$

(8) $\int_{-1}^{1} \frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{1}{1 + 2^{\frac{1}{x}}} \right) \mathrm{d}x.$ 

## 3. 利用 Euler 积分 (例题 12.3.4) 计算下列积分:

(1) $\int_0^{\pi /2}\ln \tan x\mathrm{d}x;$ (2) $\int_0^1\frac{\ln x}{\sqrt{1 - x^2}}\mathrm{d}x;$ 

(3) $\int_0^1\frac{\arcsin x}{x}\mathrm{d}x;$ (4) $\int_0^{\pi /2}x\cot x\mathrm{d}x;$ 

(5) $\int_0^\pi x\ln \sin x\mathrm{d}x;$ (6) $\int_0^\pi \frac{x\sin x}{1 - \cos x}\mathrm{d}x;$ 

(7) $\int_{0}^{+\infty}\frac{x}{\sqrt{\mathrm{e}^{2x} - 1}}\mathrm{d}x;$ (8) $\int_0^{\pi /2}\ln |\sin^2 x - a^2 |\mathrm{d}x(a^2\leqslant 1).$ 

## 4. 利用 Froullani 积分 (例题 12.3.5 及其注) 计算下列积分 $(a, b > 0)$ :

(1) $\int_0^{+\infty}\frac{\arctan ax - \arctan bx}{x}\mathrm{d}x;$ (2) $\int_0^{+\infty}\frac{\mathrm{e}^{-ax} - \mathrm{e}^{-bx}}{x}\mathrm{d}x;$ 

(3) $\int_0^{+\infty}\frac{\cos ax - \cos bx}{x}\mathrm{d}x;$ (4) $\int_0^{+\infty}\frac{\sin ax\sin bx}{x}\mathrm{d}x;$ 

(5) $\int_0^1\frac{x^{a - 1} - x^{b - 1}}{\ln x}\mathrm{d}x;$ (6) $\int_0^{+\infty}\frac{b\sin ax - a\sin bx}{x^2}\mathrm{d}x.$ 

## 5. 利用 Dirichlet 积分 (例题 12.3.6) 计算下列积分:

(1) $\int_0^{+\infty}\frac{\sin^2x}{x^2}\mathrm{d}x;$ (2) $\int_0^{+\infty}\frac{\sin^4x}{x^2}\mathrm{d}x;$ 

(3) $\int_0^{+\infty}\frac{\sin^4x}{x^4}\mathrm{d}x;$ (4) $\int_0^{+\infty}\frac{x - \sin x}{x^3}\mathrm{d}x;$ 

(5) $\int_{-\infty}^{+\infty}\frac{\sin x}{x(x - \pi)}\mathrm{d}x;$ (6) $\int_0^{+\infty}\frac{\sin x^2}{x}\mathrm{d}x.$ 

6. 利用概率积分 (例题 12.3.7) 计算下列积分:

$$
\int_ {0} ^ {+ \infty} \frac {\mathrm{e} ^ {- x ^ {2}}}{\left(x ^ {2} + \frac {1}{2}\right) ^ {2}} \mathrm{d} x;
$$

$$
\int_ {0} ^ {+ \infty} \mathrm{e} ^ {- a ^ {2} x ^ {2} - \frac {b ^ {2}}{x ^ {2}}} \mathrm{d} x.
$$

7. 若 $a, b > 0$ , 广义积分 $\int_0^{+\infty} f\left(ax + \frac{b}{x}\right) \mathrm{d}x$ 收敛, 证明:

$$
\int_ {0} ^ {+ \infty} f \left(a x + \frac {b}{x}\right) \mathrm{d} x = \frac {1}{a} \int_ {0} ^ {+ \infty} f (\sqrt {t ^ {2} + 4 a b}) \mathrm{d} t.
$$

## §12.4 广义积分的特殊性质

这方面只提出需要注意的两点. 第一点是: 对广义积分, 绝对可积必可积, 但反之未必; 对定积分, 可积必绝对可积, 但反之未必. 两者恰恰相反. 就此点而言, 广义积分与其说像定积分, 倒不如说更像数项级数 (见下册命题 13.3.1). 第二点是无穷限广义积分所特有的性质, 将在本节讨论.

## 12.4.1 收敛无穷限积分的被积函数在无穷远处的性质

由例题2.2.9及其注知道, 如果无穷级数 $\sum_{n=1}^{\infty} a_n$ 收敛, 则 $\lim_{n \to \infty} a_n = 0$ . 与之类比, 初学者容易认为对无穷限广义积分应当成立以下结论:

$$
\int_ {a} ^ {+ \infty} f (x)   \mathrm{d} x   \text {收敛} \Longrightarrow \lim _ {x \to + \infty} f (x) = 0.
$$

但是从例题 12.2.5 和图 12.1 中我们知道极限 $f(+\infty)$ 完全可以不存在.

首先建立以下基本结论:

例题12.4.1 设无穷限广义积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 且 $\lim_{x \to +\infty} f(x)$ 有意义, 则它一定等于0.

证 若 $f(+\infty)$ 为有限正数或正无穷大, 则都存在 $x_0 > a$ 和 $c > 0$ , 使得当 $x > x_0$ 时成立 $f(x) > c$ . 因此对于 $A > x_0$ , 有

$$
\begin{array}{r l}&{\int_ {a} ^ {A} f (x) \mathrm{d} x = \int_ {a} ^ {x _ {0}} f (x) \mathrm{d} x + \int_ {x _ {0}} ^ {A} f (x) \mathrm{d} x}\\&{\qquad > \int_ {a} ^ {x _ {0}} f (x) \mathrm{d} x + c (A - x _ {0}) \rightarrow + \infty (A \rightarrow + \infty).}\end{array}
$$

这与无穷限积分收敛的条件矛盾, 可见 $f(+\infty)$ 不可能是有限正数或正无穷大. 同样地可以证明 $f(+\infty)$ 也不可能是负数或负无穷大, 因此得到 $f(+\infty)=0$ . $\square$ 

若 $f$ 单调, 则 $f(+\infty)$ 一定有意义, 从而有 $f(+\infty) = 0$ . 但是实际上这时还有更强的结论.

例题12.4.2 若无穷限积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 且 $f$ 单调, 则有

$$
\lim _ {x \to + \infty} x f (x) = 0.
$$

证 不妨设 $f$ 单调减少. 与例题12.4.1的证明类似, 可以知道 $f$ 非负. 由于广义积分收敛, 对于 $\varepsilon > 0$ , 有正数 $M > a$ , 使得对于任何一对 $A_{1}, A_{2} > M$ , 成立不等式

$$
\left| \int_ {A _ {1}} ^ {A _ {2}} f (t) \mathrm{d} t \right| <   \varepsilon .
$$

取 $A_{1} = x, A_{2} = 2x$ ，则当 $x > M$ 时，就有

$$
0 \leqslant x f (2 x) \leqslant \int_ {x} ^ {2 x} f (t) \mathrm{d} t <   \varepsilon ,
$$

即已经得到 $\lim_{x\to+\infty}xf(x)=0.$ 

下面是无穷限积分 $\int_{a}^{+\infty}f(x)\mathrm{d}x$ 收敛时使 $\lim_{x\to +\infty}f(x) = 0$ 成立的主要结果.

命题12.4.1 设无穷限积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 且被积函数 $f$ 在 $[a, +\infty)$ 上一致连续, 则

$$
\lim _ {x \rightarrow + \infty} f (x) = 0.
$$

证 用反证法. 假设 $\lim_{x\to +\infty}f(x) = 0$ 不成立, 则 $\exists \varepsilon_0 > 0$ , 使 $\forall A > a$ , $\exists x_0 > A$ , 满足 $|f(x_0)|\geqslant 2\varepsilon_0$ .

因为 $f(x)$ 在 $[a, +\infty)$ 上一致连续，因此对 $\varepsilon_0 > 0, \exists \delta > 0, \forall x', x'' \in [a, +\infty)$ ( $|x' - x''| < \delta)$ ，成立 $|f(x') - f(x'')| < \varepsilon_0$ 。所以当 $x \in (x_0, x_0 + \delta)$ 时，有

$$
| f (x) | \geqslant | f (x _ {0}) | - | f (x _ {0}) - f (x) | > \varepsilon_ {0},
$$

并且 $f(x)$ 与 $f(x_0)$ 同号. 因此就有

$$
\left| \int_ {x _ {0}} ^ {x _ {0} + \delta} f (x) \mathrm{d} x \right| \geqslant \varepsilon_ {0} \int_ {x _ {0}} ^ {x _ {0} + \delta} \mathrm{d} x = \varepsilon_ {0} \delta .\tag{12.9}
$$

由于这个不等式右边的 $\varepsilon_0\delta$ 是一个固定的正数, 而对于每个 $A > a$ , 都存在 $x_0 > A$ 满足 (12.9), 因此与无穷限积分的 Cauchy 收敛准则矛盾.

注 在无穷限积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛时, 我们不知道保证 $f(+\infty) = 0$ 的充分必要条件是什么. 但若有 $f \in C[a, +\infty)$ , 则在积分收敛时, 条件 $f(+\infty) = 0$ 等价于 $f$ 在 $[a, +\infty)$ 上一致连续 (参见例题5.4.6).

此外下面的一个结论也是基本的, 它表明虽然极限 $f(+\infty)$ 不一定存在, 但若将数列的极限点概念 (3.6.1 小节) 推广到函数极限, 则当连续被积函数的无穷限广义积分收敛时, 必有一个极限点是 0.

例题12.4.3设 $f\in C[a, + \infty)$ ，且 $\int_{a}^{+\infty}f(x)\mathrm{d}x$ 收敛，则存在数列 $\{x_{n}\} \subset [a, + \infty)$ ，满足条件

$$
\lim _ {n \rightarrow \infty} x _ {n} = + \infty , \quad \lim _ {n \rightarrow \infty} f (x _ {n}) = 0.
$$

证 根据广义积分收敛的条件得到

$$
\lim _ {n \to \infty} \int_ {n} ^ {n + 1} f (x) \mathrm{d} x = 0.
$$

对上面的积分用积分第一中值定理, 并且用 $x_{n}$ 记其中的中值, 就有

$$
\lim _ {n \to \infty} f (x _ {n}) = 0,
$$

这时 $x_{n}\in (n,n + 1)$ .因此 $\{f(x_n)\}$ 是无穷小量，而 $\{x_{n}\}$ 是正无穷大量. □

注 可以进一步证明存在数列 $\{x_{n}\} \subset [a, +\infty)$ ，满足条件 $\lim_{n\to \infty}x_n = +\infty$ ， $\lim_{n\to \infty}x_nf(x_n) = 0$ 。见下面的练习题6.

## 12.4.2 练习题

1. 设 $f$ 于 $[a, +\infty)$ 上可导, $f'$ 内闭可积, 且广义积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 和 $\int_{a}^{+\infty} f'(x) \mathrm{d}x$ 都收敛, 证明: $\lim_{x \to +\infty} f(x) = 0$ .

2. 设函数 $f(x)$ 在 $[a, +\infty)$ 上有有界的导函数且无穷限积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 证明: $\lim_{x \to +\infty} f(x) = 0$ .

3. 举例说明例题12.4.2之逆不成立, 也就是说, 当函数 $f$ 在 $[a, +\infty)$ 上单调, 且满足条件 $\lim_{x \to +\infty} x f(x) = 0$ 时, 广义积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 仍可能发散.

4. 若 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛, 且 $xf(x)$ 单调, 证明: $\lim_{x \to +\infty} xf(x) \ln x = 0$ .

5. 设函数 $f$ 在 $[a, +\infty)$ 上可微且无穷限积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 收敛, 证明: 存在数列 $\{x_{n}\}$ , 使 $\lim_{n \to \infty} x_{n} = +\infty$ , $\lim_{n \to \infty} f'(x_{n}) = 0$ .

6. (1) 设 $f \in C[a, +\infty)$ ，且 $\int_{a}^{+\infty}|f(x)|\mathrm{d}x$ 收敛，证明存在数列 $\{x_{n}\} \subset [a, +\infty)$ ，满足条件 $\lim_{n\to \infty}x_n = +\infty$ ， $\lim_{n\to \infty}x_nf(x_n) = 0;$ 

(2) 证明在 $f \in C[a, +\infty)$ , 且 $f$ 在 $[a, +\infty)$ 上的广义积分为条件收敛时有与 (1) 同样的结论;

(3) 问: 在 $f$ 不满足连续条件时结论是否成立? 根据 $f$ 在 $[a, +\infty)$ 上的广义积分为绝对收敛和条件收敛分别讨论.

## §12.5 对于教学的建议

## 12.5.1 学习要点

1. 在很多教科书中, 无穷限积分与无界积分的定义、性质、敛散性判别和计算等都是分成两部分来讲授的. 这样做必然会使得可以统一的许多结果必须分成两次重复叙述了. 我们倾向于将它们放在一起叙述, 而在需要分开的地方再分开叙述, 这样不但可以精简文字, 而且可以突出两类广义积分的异同之处.

2. 广义积分的许多敛散性判别法与数项级数的敛散性判别法是平行的, 例如比较判别法、Cauchy 收敛准则、Abel 判别法与 Dirichlet 判别法等. 这在学了级数之后就非常清楚. 如果所用教材中数项级数的讲授安排在广义积分之前, 则应当加入这方面的例题和练习题.

3. 对习题课的建议 广义积分内容在各种数学分析教科书中所占篇幅一般不多, 因此主要的训练内容集中在敛散性判别法上, 而关于计算和估计就比较少. 但是从目前考研的情况来看, 在常义积分方面的每种题型都可能在广义积分中出现. 因此我们在参考题中较多地收入了这方面的题, 希望引起注意. 在这方面较有特色的不仅有传统题, 也有过去注意不多的题. 前者如用代换 $x = t - 1 / t$ 解决积分

$$
\int_ {0} ^ {+ \infty} {\frac {1}{1 + x ^ {4}}} \mathrm{d} x = \int_ {0} ^ {+ \infty} {\frac {x ^ {2}}{1 + x ^ {4}}} \mathrm{d} x = {\frac {1}{2}} \int_ {0} ^ {+ \infty} {\frac {1 + x ^ {2}}{1 + x ^ {4}}} \mathrm{d} x
$$

的计算, 后者如第一组参考题 1, 2, 第二组参考题 7, 8.

## 12.5.2 参考题

## 第一组参考题

1. 证明: 对于任何实数 $\alpha$ , 成立恒等式

$$
\int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{(1 + x ^ {2}) (1 + x ^ {\alpha})} = \int_ {1} ^ {+ \infty} \frac {\mathrm{d} x}{1 + x ^ {2}} = \frac {\pi}{4},
$$

并计算以下积分:

(1) $\int_0^{+\infty}\frac{\mathrm{d}x}{(1 + x^2)(1 + x^6)};$ 

(2) $\int_0^{\pi /2}\frac{\mathrm{d}x}{1 + \tan^{100}x}.$ 

2. 证明 (或改进) 对以下广义积分的估计:

(1) $\frac{1}{29} < \int_{1}^{+\infty} \frac{x^{30} + 1}{x^{60} + 1} \, \mathrm{d}x < \frac{1}{29} + \frac{1}{59}$ ; 

(2) $\frac{\pi}{10} < \int_{0}^{2} \frac{\mathrm{d}x}{(4 + \sqrt{\sin x})\sqrt{4 - x^2}} < \frac{\pi}{8}$ ; 

(3) $\frac{1}{30} < \int_{2}^{+\infty} \frac{\sqrt{x^3 - x^2 + 3}}{x^5 + x^2 + 1} \, \mathrm{d}x < \frac{\sqrt{2}}{20}$ ; 

(4) $0.0099 < \int_{0}^{+\infty}\frac{\mathrm{e}^{-x}}{x + 100}\mathrm{d}x < 0.01.$ 

3. 设 $f$ 在 $(- \infty, + \infty)$ 上内闭可积, $p \geqslant 1$ , 且 $|f|^p$ 在 $(- \infty, + \infty)$ 上可积, 证明:

$$
\lim _ {h \rightarrow 0} \int_ {- \infty} ^ {+ \infty} | f (x + h) - f (x) | ^ {p} \mathrm{d} x = 0.
$$

4. 设 $f, g$ 在 $(- \infty, + \infty)$ 上内闭可积, $p > 1$ , 且 $|f|^p$ , $|g|^{p / (p - 1)}$ 在 $(- \infty, + \infty)$ 上可积, 证明: 函数

$$
I (t) = \int_ {- \infty} ^ {+ \infty} f (x + t) g (x) \mathrm{d} x
$$

在 $(-∞,+∞)$ 上连续.

5. 设 $f \in C^1 [a, +\infty)$ , 单调减少, 且 $f(+\infty) = 0$ , 证明: 广义积分 $\int_{a}^{+\infty} f(x) \, \mathrm{d}x$ 收敛的充分必要条件是 $\int_{a}^{+\infty} x f'(x) \, \mathrm{d}x$ 收敛.

6. 设 $f$ 在 $[a, +\infty)$ 上为内闭可积的正函数, 且有 $\lim_{x \to +\infty} \frac{\ln f(x)}{\ln x} = p$ , 则当 $-\infty \leqslant p < -1$ 时, 积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 收敛, 而当 $-1 < p \leqslant +\infty$ 时, 积分 $\int_{a}^{+\infty} f(x) \mathrm{d}x$ 发散.

7. 证明: $\int_{1}^{+\infty}\left(\frac{1}{[x]} - \frac{1}{x}\right) \mathrm{d}x = \gamma$ , 其中 $\gamma$ 是 Euler 常数 (见 2.5.3 小节).

8. 判别广义积分 $\int_0^{+\infty}\left[\left(1 - \frac{\sin x}{x}\right)^{-\frac{1}{3}} - 1\right]\mathrm{d}x$ 的收敛性与绝对收敛性.

9. 讨论以下带有参数的广义积分的敛散性, 确定使得积分绝对收敛、条件收敛和发散的参数范围:
(1) $\int_{0}^{+\infty}\frac{x^{p}}{1+x^{q}\left|\sin x\right|^{r}}\mathrm{d}x\ (p,q,r>0);$ (2) $\int_{1}^{+\infty}\frac{\sin x\cos\frac{1}{x}}{x^{p}}\mathrm{d}x.$ 

10. 设 $f$ 在 $[a, +\infty)$ 上单调有界, 广义积分 $\int_{a}^{+\infty} f(x) \sin px \, \mathrm{d}x$ 在 $p > 0$ 时收敛, 证明: $\lim_{p \to +\infty} \int_{a}^{+\infty} f(x) \sin px \, \mathrm{d}x = 0.$ 

11. 设 $f \in C[0, +\infty)$ , 广义积分 $\int_{0}^{+\infty} \varphi(x) \mathrm{d}x$ 绝对收敛, 证明: $\lim_{n \to \infty} \int_{0}^{\sqrt{n}} f\left(\frac{x}{n}\right) \varphi(x) \mathrm{d}x = f(0) \int_{0}^{+\infty} \varphi(x) \mathrm{d}x.$ 

12. 设 $f$ 在 $(- \infty, + \infty)$ 上绝对可积, 证明:
(1) $\lim_{n\to \infty}\int_{-\infty}^{+\infty}f(x)\sin nx\mathrm{d}x = 0;$ (2) $\lim_{n\to \infty}\int_{-\infty}^{+\infty}f(x)|\sin nx|\mathrm{d}x = \frac{2}{\pi}\int_{-\infty}^{+\infty}f(x)\mathrm{d}x.$ 

13. 在常义积分的积分第二中值定理的基础上, 证明广义积分第二中值定理: 设广义积分 $\int_{a}^{b} g(x) \mathrm{d}x$ 收敛 (奇点为 $a$ 或 $b$ , 或者 $a$ 和 $b$ 都是奇点), 如果 $f$ 在 $(a, b)$ 上单调有界, 则存在 $\xi \in [a, b]$ , 使 $\int_{a}^{b} f(x) g(x) \mathrm{d}x = f(a^{+}) \int_{a}^{\xi} g(x) \mathrm{d}x + f(b^{-}) \int_{\xi}^{b} g(x) \mathrm{d}x.$ 

14. 设广义积分 $\int_{1}^{+\infty} f(x) \, \mathrm{d}x$ 收敛. 证明: 存在 $\xi \in (1, +\infty)$ , 使得 $\int_{1}^{+\infty} x^{-1} f(x) \, \mathrm{d}x = \int_{1}^{\xi} f(x) \, \mathrm{d}x$ .

15. 设 $a > 0, f$ 在 $[a, +\infty)$ 上平方可积, 证明: 积分 $\int_{a}^{+\infty} \frac{f(x)}{x} \mathrm{d}x$ 收敛.

16. 在 $x > 0$ 时定义特殊函数 $\Gamma(x) = \int_{0}^{+\infty} t^{x-1} \mathrm{e}^{-t} \, \mathrm{d}t$ , 证明: (1) $\Gamma(x) < +\infty, \forall x > 0$ ; (2) $\Gamma(x+1) = x \Gamma(x)$ ; (3) $\Gamma(1) = 1$ , $\Gamma(n+1) = n!$ , $\forall n \in \mathbf{N}_{+}$ ; (4) $\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$ .

(从 (3) 可见 $\Gamma(x)$ 是阶乘 $n!$ 的连续化. 这在一定条件下是唯一的, 见下册 §23.3 对 $\Gamma(x)$ 的介绍和命题 23.3.1, 或参见 [14, 55].)

## 第二组参考题

1. 先证明不等式 (12.8), 然后由

$$
\int_ {0} ^ {1} (1 - x ^ {2}) ^ {n} \mathrm{d} x \leqslant \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- n x ^ {2}} \mathrm{d} x \leqslant \int_ {0} ^ {+ \infty} \frac {\mathrm{d} x}{(1 + x ^ {2}) ^ {n}}
$$

出发, 用夹逼方法计算概率积分.

2. (Gordon 不等式) 证明: 函数 $f(x) = \mathrm{e}^{\frac{x^2}{2}} \int_{x}^{+\infty} \mathrm{e}^{-\frac{t^2}{2}} \, \mathrm{d}t$ 在 $x > 0$ 时严格单调减少, 且成立

$$
\frac {x}{x ^ {2} + 1} <   f (x) <   \frac {1}{x}.
$$

3. 设 $f \in C[0, +\infty)$ 且平方可积, 令 $g(x) = \int_{0}^{x} f(t) \, \mathrm{d}t$ , 证明: $\frac{g(x)}{x}$ 在 $[0, +\infty)$ 上平方可积, 且成立

$$
\int_ {0} ^ {+ \infty} {\frac {g ^ {2} (x)}{x ^ {2}}}   \mathrm{d} x \leqslant 4 \int_ {0} ^ {+ \infty} f ^ {2} (x)   \mathrm{d} x.
$$

4. 设 $f$ 在 $[0, +\infty)$ 上二阶可微, $f$ 和 $f''$ 在这个区间上均平方可积, 证明: $f'$ 在这个区间上也平方可积.

5. 设 $f \in C^1[0, +\infty)$ ，且 $xf(x)$ 和 $f'(x)$ 在这个区间上均平方可积，证明：

(1) $f$ 也在这个区间上平方可积;

(2) 成立不等式

$$
\int_ {0} ^ {+ \infty} f ^ {2} (x) \mathrm{d} x \leqslant 2 \left(\int_ {0} ^ {+ \infty} x ^ {2} f ^ {2} (x) \mathrm{d} x \int_ {0} ^ {+ \infty} (f ^ {\prime} (x)) ^ {2} \mathrm{d} x\right) ^ {\frac {1}{2}};
$$

(3) 在上述不等式中成立等号的充分必要条件是 $f(x)=ae^{-bx^{2}}$ ，其中 b>0.

6. 问 $a, b$ 是怎样的正实数时, 广义积分

$$
\int_ {0} ^ {+ \infty} \left(\sqrt {\sqrt {x + a} - \sqrt {x}} - \sqrt {\sqrt {x} - \sqrt {x - b}}\right) \mathrm{d} x
$$

是收敛的？

7. 设有理函数 $f(x)=P(x)/Q(x)$ 在 $(-∞,+∞)$ 上可积, 证明:

$$
\int_ {- \infty} ^ {+ \infty} \frac {P (x)}{Q (x)} \mathrm{d} x = 2 \pi \mathrm{i} \sum_ {k} A _ {k},
$$

其中 $A_{k}$ 是有理函数 $f$ 的部分分式分解中 $1 / x_{k}$ 项的系数， $x_{k}$ 是分母 $Q(x)$ 的零点，和式只对虚部大于0的 $x_{k}$ 求和。当 $x_{k}$ 为单根时，有简单公式 $A_{k} = P(x_{k}) / Q'(x_{k})$ 。

8. 应用上题的结果于下列各小题:

(1) 证明: 对 $n \in \mathbf{N}_{+}$ 成立 $\int_{-\infty}^{+\infty} \frac{1}{1 + x^{2n}} \, \mathrm{d}x = \frac{\pi}{n} \csc \frac{\pi}{2n}$ ;

(2) 证明: 若 $n, m \in \mathbf{N}_{+}$ 满足条件 $2m + 1 < 2n$ , 则成立

$$
\int_ {- \infty} ^ {+ \infty} \frac {x ^ {2 m}}{1 + x ^ {2 n}} \mathrm{d} x = \frac {\pi}{n} \csc \frac {(2 m + 1) \pi}{2 n};
$$

(3) 计算积分: (a) $\int_{0}^{+\infty}\frac{x^{50}}{x^{100}+1}dx$ , (b) $\int_{0}^{+\infty}\frac{x^{30}+1}{x^{60}+1}dx$ .

9. 设 $f$ 是 $(- \infty, + \infty)$ 上的非负函数, 且满足以下条件:

$$
\int_ {- \infty} ^ {+ \infty} f (x)   \mathrm{d} x = 1, \int_ {- \infty} ^ {+ \infty} x f (x)   \mathrm{d} x = 0, \int_ {- \infty} ^ {+ \infty} x ^ {2} f (x)   \mathrm{d} x = 1,
$$

证明:

(1) 在 $x > 0$ 时, 成立 $\int_{-\infty}^{x} f(t) \mathrm{d}t \geqslant \frac{x^2}{1 + x^2}$ ;

(2) 在 $x < 0$ 时, 成立 $\int_{-\infty}^{x} f(t) \mathrm{d}t \leqslant \frac{1}{1 + x^2}$ .

(本题是概率论中的基本不等式, 且不能再改进 (见 [30]). 它表明期望与方差有限的连续随机变量的分布函数 (在标准化之后) 所必须满足的限制.)

10. 设 $p > 0$ , 定义

$$
g (x) = \left\{ \begin{array}{l l} p \left[ \frac {x}{p} \right] + \frac {p}{2}, & x \geqslant 0, \\ - g (- x), & x <   0. \end{array} \right.
$$

证明：对所有 $x$ ，成立

$$
\frac {p}{2 \pi} \int_ {- \infty} ^ {+ \infty} \sum_ {n = - [ x / p ]} ^ {[ x / p ]} \frac {\sin \left(n + \frac {1}{2}\right) p t}{\sin \frac {1}{2} p t} \cdot \frac {\sin x t}{t} d t = \frac {1}{2} [ g (x ^ {+}) + g (x ^ {-}) ].
$$
