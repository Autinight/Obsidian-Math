## 第十章 定积分

这一章是一元函数积分学的基本理论.

在 §10.1 中利用可积性的三个充分必要条件对于可积函数类进行了深入讨论. §10.2 为定积分的性质, 主要是积分中值定理与对积分求极限. 在 §10.3 中讨论变限积分与微积分基本定理. §10.4 为定积分的计算. 最后一节为学习要点和两组参考题.

定积分的应用极其广泛, 将在下一章中分专题介绍.

## §10.1 定积分概念与可积条件

## 10.1.1 定积分的定义

设函数 f 在区间 $[a, b]$ 上有定义.

1. 称点集 $P = \{x_{0}, x_{1}, \cdots, x_{n-1}, x_{n}\}$ 为 $[a, b]$ 的一个分划，如果满足条件：

$$
a = x _ {0} <   x _ {1} <   \dots <   x _ {n - 1} <   x _ {n} = b.
$$

记 $\Delta x_{i}=x_{i}-x_{i-1},\quad i=1,\cdots,n,$ 并称 $\|P\|=\max_{1\leqslant i\leqslant n}\{\Delta x_{i}\}$ 为分划 P 的细度. 如果 $\Delta x_{i}=\frac{b-a}{n},\quad i=1,\cdots,n,$ 则称 P 为等距分划.

2. 设 $P = \{x_{0}, x_{1}, \cdots, x_{n-1}, x_{n}\}$ 为区间 $[a, b]$ 的一个分划。对每个子区间 $[x_{i-1}, x_{i}]$ ，任取 $\xi_{i} \in [x_{i-1}, x_{i}]$ ，则称 $\xi = \{\xi_{i} \mid i = 1, 2, \cdots, n\}$ 为从属于 P 的一个介点集；并称和式 $\sum_{i=1}^{n} f(\xi_{i}) \Delta x_{i}$ 或 $\sum_{P} f(\xi_{i}) \Delta x_{i}$ 为 f 在区间 $[a, b]$ 上的一个 Riemann（积分）和。

3. 设 $I$ 为实数, 且有 $\lim_{\| P \| \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i = I$ , 即 $\forall \varepsilon > 0, \exists \delta > 0$ , 对 $\| P \| < \delta$ 的每个分划 $P$ , 以及对从属于 $P$ 的每个介点集 $\xi$ , 成立 $\left|\sum_{i=1}^{n} f(\xi_i) \Delta x_i - I\right| < \varepsilon$ , 则称函数 $f$ 在区间 $[a, b]$ 上 Riemann 可积或简称可积, 记为

$$
f \in R [ a, b ],
$$

并称 $I$ 为 $f$ 在区间 $[a, b]$ 上的 Riemann 积分或定积分, 简称积分, 记为 $\int_{a}^{b} f(x) \mathrm{d}x = I$ , 或其简化记号 $\int_{a}^{b} f = I$ .

注1 在上述定义中, 虽然仍然是用记号 $\lim$ , 但是这里的极限与以前的函数极限或数列极限是不一样的. 主要区别在于, 在函数极限或数列极限的定义中, 自变量简单地就是 $x$ 或 $n$ . 但这里对于每个确定的细度 $\|P\|$ , 区间 $[a,b]$ 的分划 $P$ 可以有无限多个, 而相对于每个 $P$ , 介点集 $\xi$ 的取法又有无限多个, 因此就有无限多个不同的 Riemann 和. 尽管如此, 函数极限和数列极限的许多性质, 例如, 极限的唯一性、极限运算与线性运算可以交换次序等, 对于这种新的极限仍然成立.

注2 定积分 $\int_{a}^{b} f(x) \, \mathrm{d}x$ 是一个数, 它的值仅仅与被积函数 $f$ 和积分区间 $[a, b]$ 有关, 而与积分变量用什么符号无关, 即有

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \int_ {a} ^ {b} f (t) \mathrm{d} t = \int_ {a} ^ {b} f (u) \mathrm{d} u = \dots .
$$

因此在不需要写出积分变量时, 就可以使用定积分的简化记号 $\int_{a}^{b} f$ .

## 10.1.2 可积条件

利用积分定义中介点集的任意性就可以得到可积的一个必要条件.

命题 10.1.1 设 $f \in R[a, b]$ ，则 f 在 $[a, b]$ 上有界.

证 若记 $\int_{a}^{b} f(x) \, \mathrm{d}x = I$ , 则从可积定义知道, 对于 $\varepsilon = 1$ , 存在一个分划 $P$ , 使得对于从属于这个 $P$ 的任何介点集 $\xi$ , 均成立不等式

$$
\left| \sum_ {i = 1} ^ {n} f (\xi_ {i}) \Delta x _ {i} - I \right| <   1.\tag{10.1}
$$

以下只要证明 $f$ 在每个 $I_{i} = [x_{i - 1},x_{i}]$ 上有界即可.对于确定的子区间 $I_{i}$ ，固定所有 $\xi_{k}(k\neq i)$ ，就可以从不等式(10.1)出发对于 $f(\xi_i)$ 作出估计如下：

$$
\frac {1}{\Delta x _ {i}} (I - 1 - \sum_ {k \neq i} f (\xi_ {k}) \Delta x _ {k}) <   f (\xi_ {i}) <   \frac {1}{\Delta x _ {i}} (I + 1 - \sum_ {k \neq i} f (\xi_ {k}) \Delta x _ {k}).
$$

由于 $\xi_{i}\in I_{i} = [x_{i - 1},x_{i}]$ 的任意性，可见 $f$ 在 $I_{i}$ 上有界.

为叙述可积的充分必要条件, 需要引入以下概念. 设函数 f 在区间 $[a, b]$ 上有界, $P = \{x_{0}, x_{1}, \cdots, x_{n-1}, x_{n}\}$ 为 $[a, b]$ 的一个分划, 对 $i = 1, \cdots, n$ , 记

$$
M _ {i} = \sup \{f (x) \mid x \in [ x _ {i - i}, x _ {i} ] \} \quad {\text {与}} \quad m _ {i} = \inf \{f (x) \mid x \in [ x _ {i - i}, x _ {i} ] \},
$$

称 $\omega_{i} = M_{i} - m_{i}$ 为 $f$ 在 $[x_{i - 1},x_i]$ 上的振幅， $\sum_{i = 1}^{n}\omega_{i}\Delta x_{i}$ 为 $f$ 的振幅面积.

在一般的分析教科书中对下面两个最常用的可积充分必要条件都有证明.

命题10.1.2（可积的第一充分必要条件）有界函数 $f \in R[a, b]$ 的充分必要条件是

$$
\lim _ {\| P \| \rightarrow 0} \sum_ {i = 1} ^ {n} \omega_ {i} \Delta x _ {i} = 0.
$$

命题 10.1.3 (可积的第二充分必要条件) 有界函数 $f \in R[a, b]$ 的充分必要条件是对每个 $\varepsilon > 0$ ，存在区间 $[a, b]$ 的一个分划 P，使成立

$$
\sum_ {P} \omega_ {i} \Delta x _ {i} <   \varepsilon .
$$

注1 条件“ $\lim_{\|P\| \to 0}\sum_{i=1}^{n}\omega_i\Delta x_i = 0$ ”是指“ $\forall \varepsilon > 0, \exists \delta > 0,$ 对 $[a, b]$ 的任意分划 $P$ ，只要 $\|P\| < \delta$ ，就都成立 $\sum_{P} \omega_i\Delta x_i < \varepsilon$ ”。而在可积的第二充分必要条件中，对于每一个给定的 $\varepsilon$ ，只要存在一个分划 $P$ 就够了。因此，要证明给定函数的可积性，用可积的第二充分必要条件方便得多。

注2 在数列极限或函数极限的收敛定义中, 似乎没有与上述第二充分必要条件对应的结果, 但是对于单调数列 (以及单调函数) 却有类似的结果. 例如, 单调增加数列 $\{x_{n}\}$ 收敛于数 $a$ 的充分必要条件是: 对每个 $\varepsilon > 0$ , 存在数列的某一项 $x_{N}$ , 使成立 $a - \varepsilon < x_{N} \leqslant a$ . 这个结果已用于例题3.1.1中. 这个类比并非偶然. 可积的第二充分必要条件就是来源于Riemann和对于分划的某种“单调性”. 对此有兴趣的读者可以参考[14]第三卷附录中的Moore-Smith收敛.

利用上面的充分必要条件, 就可以证明关于 Riemann 可积函数类的三个结论:

1. 设 $f \in C[a, b]$ ，则 $f \in R[a, b]$ .

2. 设 f 在 $[a, b]$ 上有界且只有有限个间断点，则 $f \in R[a, b]$ .

3. 设 f 在 $[a, b]$ 上单调，则 $f \in R[a, b]$ .

另一方面，设 $D(x)$ 为Dirichlet函数(见4.1.5小节题11)，则对任意区间 $[a,b]$ 以及 $[a,b]$ 的任意分划 $P$ ，当 $\xi_{i}$ 均取有理数时，有 $\sum_P f(\xi_i)\Delta x_i = b - a,$ 而当 $\xi_{i}$ 均取无理数时，则有 $\sum_P f(\xi_i)\Delta x_i = 0.$ 因此振幅面积总是等于 $b - a$ .由此可见，Dirichlet函数在任何有界区间 $[a,b]$ 上都不可积.

下面是另一个可积的充分必要条件, 它在讨论较为复杂的函数的可积性时, 往往比可积的第二充分必要条件更为方便.

命题 10.1.4（可积的第三充分必要条件）有界函数 $f \in R[a, b]$ 的充分必要条件是 $\forall \varepsilon, \eta > 0$ ，存在 $[a, b]$ 的分划 P，使振幅不小于 $\eta$ 的子区间的长度之和小于 $\varepsilon$ .

证 设在 $[a, b]$ 上有 $m \leqslant f(x) \leqslant M$ .

先证充分性. 对于 $\varepsilon > 0$ , 取

$$
\varepsilon^ {\prime} = \frac {\varepsilon}{2 (M - m)}, \quad \eta = \frac {\varepsilon}{2 (b - a)}.
$$

根据条件, 存在 $[a, b]$ 的分划 $P$ , 使振幅不小于 $\eta$ 的子区间的长度之和小于 $\varepsilon'$ (见图10.1). 对 $P$ , 用 $\sum'$ 和 $\sum''$ 分别表示在积分和式中对振幅不小于 $\eta$ 的子区间和对振幅小于 $\eta$ 的子区间求和. 我们有

$$
\begin{array}{l} \sum^ {\prime} \omega_ {i} \Delta x _ {i} \leqslant (M - m) \sum^ {\prime} \Delta x _ {i} \leqslant (M - m) \varepsilon^ {\prime}, \\ \sum^ {\prime \prime} \omega_ {i} \Delta x _ {i} <   \eta \sum^ {\prime \prime} \Delta x _ {i} \leqslant \eta (b - a). \end{array}
$$

合并得到

$$
\sum \omega_ {i} \Delta x _ {i} \leqslant (M - m) \varepsilon^ {\prime} + \eta (b - a) <   \varepsilon .
$$

由可积的第二充分必要条件可见 f 在 $[a, b]$ 上 Riemann 可积.

再证必要性. 设 $f$ 在 $[a, b]$ 上 Riemann 可积, 则由可积的第二充分必要条件, 对给定的 $\varepsilon, \eta > 0$ , 存在 $[a, b]$ 的分划 $P$ , 使 $\sum_{p} \omega_{i} \Delta x_{i} < \varepsilon \eta$ . 用 $\sum^{\prime}$ 表示对振幅不小于 $\eta$ 的子区间求和, 则

$$
\eta \sum^ {\prime} \Delta x _ {i} \leqslant \sum^ {\prime} \omega_ {i} \Delta x _ {i} \leqslant \sum_ {P} \omega_ {i} \Delta x _ {i} <   \varepsilon \eta .
$$

因此 $\sum^{\prime}\Delta x_{i}<\varepsilon,$ 即振幅不小于 $\eta$ 的子区间的长度之和小于 $\varepsilon.$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/9100657f342e71834b64bf605ea19c6290f63e8be52c232850c9541a8c406fb2.jpg)



图10.1


对于有无限多个间断点的函数, 用可积的第三充分必要条件来讨论其可积性比较容易.

例题10.1.1 证明函数

$$
f (x) = \left\{ \begin{array}{l l} \frac {1}{x} - [ \frac {1}{x} ], & x \in (0, 1 ], \\ 0, & x = 0 \end{array} \right.
$$

在 $[0,1]$ 上可积.

分析 虽然 $f$ 在 $[0,1]$ 内有无限个间断点, 然而由于这些间断点可以看成为收敛于 0 的数列, 因此可用总长度任意小的有限个区间把所有间断点覆盖住, 这就是下列证明的要点.

证 对给定的 $\varepsilon, \eta > 0$ 取 n 充分大, 使得

$$
\delta = \frac {1}{n + \frac {1}{2}} <   \frac {\varepsilon}{2}.
$$

将区间 $[0,1]$ 分成 $[0,\delta)$ 和 $[\delta,1]$ . f 在 $[\delta,1]$ 内的所有间断点是 $\{1/i \mid i=2,\cdots,n\}$ . 用包含于 $(\delta,1]$ 中的 n-1 个互不相交的开区间覆盖这些间断点，并要求这些开区间的总长度小于 $\varepsilon/2$ (见图 10.2). 从 $[0,1]$ 中挖掉这些子区间与 $[0,\delta)$ ，剩余的部分是 n 个闭子区间. 因为 f 在这些闭子区间上一致连续，因此我们能够将这些子区间细分为更小的子区间，使 f 在每个子区间上的振幅都小于 $\eta$ . 上面所有子区间的端点构成 $[0,1]$ 的一个分划. 其中振幅不小于 $\eta$ 的子区间的长度之和小于 $\varepsilon$ ，由可积的第三充分必要条件可知 $f \in R[a,b]$ . □

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/422d3e7df6d4ffcb1d94ff98cf55043f4fb39257c797149d9ceea1b2b7daa9f8.jpg)



图10.2


这样我们就看到 Riemann 可积函数可以有无限多个不连续点. 不仅如此, 这些不连续点的分布还可能比例题 10.1.1 中的情况复杂得多. 例如, 例题 5.1.4 中的 Riemann 函数以所有的有理数点为间断点, 但它仍然是可积函数 (留作 10.1.3 小节的练习题 10).

这里要注意, 虽然有理数在数轴上处处稠密, 但仍然可以用总长度任意小的开区间族来覆盖. 不过这时开区间的个数不是有限个, 而是可列个. 关键是用有理数的可列性, 先将它们记为一个数列 $\{r_n\}$ . 对于给定的 $\varepsilon > 0$ , 用长度 $\frac{1}{2}\varepsilon$ 的开区间覆盖点 $r_1$ , 用长度 $\frac{1}{4}\varepsilon$ 的开区间覆盖 $r_2, \cdots$ , 用长度 $\frac{1}{2^n}\varepsilon$ 的开区间覆盖 $r_n$ , 如此进行下去, 就可以覆盖所有有理数, 而所用的开区间的总长度不超过 $\varepsilon$ .

从可积的第三充分必要条件不难得到下面对于可积函数的很一般的刻画.

命题 10.1.5 设函数 f 在区间 $[a, b]$ 上有界, 如果 f 的所有不连续点可以用总长度任意小的至多可列个开区间覆盖, 则 $f \in R[a, b]$ .

证 对于给定的 $\varepsilon, \eta > 0$ , 先用总长度小于 $\varepsilon$ 的有限个或可列个开区间覆盖 $f$ 的所有不连续点. 然后对于每个连续点, 设为 $x_0$ , 用一个邻域 $O(x_0)$ 覆盖, 且要求 $f$ 在这个邻域上的振幅小于 $\eta$ . 由于 $f$ 在点 $x_0$ 的连续性, 这是能够满足的.

对于每个连续点都取这样的邻域, 于是所有这些邻域和覆盖不连续点的开区间一起就构成为区间 $[a, b]$ 的一个开覆盖, 记为 $\{\mathcal{O}_{\alpha}\}$ .

利用加强形式的覆盖定理 (即例题 3.5.3), 存在 Lebesgue 数 $\delta$ , 使得在区间 $[a, b]$ 中的相距不超过 $\delta$ 的任何两点可以用开覆盖 $\{\mathcal{O}_{\alpha}\}$ 中的某一个开区间同时覆盖.

对于区间 $[a, b]$ 取细度不超过 $\delta$ 的等距分划 $P$ . 这时每个子区间被开覆盖中的一个开区间所覆盖. 如果子区间是由原来覆盖不连续点的开区间所覆盖, 则这类子区间的总长度必小于 $\varepsilon$ . 而覆盖所有其他子区间的开区间都是原先用于覆盖连续点的邻域, 因此 $f$ 在每一个这类子区间上的振幅小于 $\eta$ .

根据可积的第三充分必要条件, 可知 f 在 $[a, b]$ 上可积.

注 在实变函数论中, 如果一个点集可以用总长度任意小的至多可列个开区间覆盖, 就称这个点集为零测度集. 如果某种性质在一个零测度集之外成立, 就说这个性质几乎处处成立. 应用这些术语, 我们就可以叙述实变函数论中的 Lebesgue 定理, 它给出了 Riemann 可积函数的完整刻画, 非常有用.

命题10.1.6（Lebesgue定理）若函数 $f$ 在 $[a,b]$ 上有界，则 $f\in R[a,b]$ 的充分必要条件是 $f$ 在 $[a,b]$ 上几乎处处连续.

证 这个定理的充分性部分就是上面的命题 10.1.5. 其必要性证明简述如下 (对细节有兴趣的读者可以参考 [8]).

设 $f \in R[a, b]$ , 则从积分的第三充分必要条件可知, 对于 $\varepsilon, \eta > 0$ , 存在分划 $P$ , 使得其中振幅不小于 $\eta$ 的子区间的长度之和小于 $\varepsilon$ . 利用函数在一点的振幅概念 (见5.1.1小节的第5点), 可见 $f$ 的振幅超过 $\eta$ 的不连续点或者落在振幅超过 $\eta$ 的子区间内 (而所有这类子区间的总长度小于 $\varepsilon$ ), 或者是分划 $P$ 的某些分点. 再增加几个长度充分小的开区间来覆盖这些分点, 就可以用总长度小于 $\varepsilon$ 的有限个开区间将所有振幅超过 $\eta$ 的不连续点全部覆盖住.

现在取 $\eta_{n} = 1 / 2^{n},\varepsilon_{n} = \varepsilon /2^{n}$ ，并对每个 $n$ 重复以上过程，就可用总长度不超过 $\varepsilon$ 的至多可列个开区间覆盖 $f$ 的所有不连续点.由于这对每个 $\varepsilon >0$ 都能做到，因此 $f$ 在 $[a,b]$ 上几乎处处连续. □

## 10.1.3 练习题

对下面的前 10 个题来说, 每题至少可以举出两个解法. 其中的一个解法是从定积分定义出发, 而另一个解法则是以 Lebesgue 定理 (命题 10.1.6) 为根据的, 这两种解法的思路很不一样. 初学者通过这样的训练既可以熟悉定积分的基本出发点, 又可以学会如何应用 Lebesgue 定理和有关的概念去处理一般的 Riemann 可积函数. 对于今后遇到的有关可积函数的问题都可以如此考虑.

1. 设

$$
f (x) = \left\{ \begin{array}{l l} x (1 - x), & x \text {是有理数}, \\ 0, & x \text {是无理数}. \end{array} \right.
$$

问 $f$ 在 $[0,1]$ 上是否可积？

2. 设 $f, g \in R[a, b]$ , 且 $f$ 的值域在 $[a, b]$ 中, 问 $g \circ f$ 在 $[a, b]$ 上是否可积? 又若 $f, g$ 在 $[a, b]$ 上都不可积, 问 $g \circ f$ 在 $[a, b]$ 上是否一定不可积?

3. 讨论区间 $[a, b]$ 上 $f, |f|$ , $f^2$ 的可积性之间的关系.

4. 设 $f \in R[a, b]$ , $g$ 与 $f$ 在 $[a, b]$ 上仅在有限个点上取不同值, 证明: $g \in R[a, b]$ , 并且 $\int_{a}^{b} f = \int_{a}^{b} g^{\text{①}}$ . 又问: 如果 $f$ 和 $g$ 在 $[a, b]$ 上几乎处处相等, 例如只在所有有理数点上的函数值不同, 则是否有相同结论?

5. 设 $f \in R[a, b]$ , 且对每个 $(\alpha, \beta) \subseteq [a, b], \exists x_1, x_2 \in (\alpha, \beta)$ , 使 $f(x_1)f(x_2) \leqslant 0$ , 问定积分 $\int_{a}^{b} f$ 的值是多少? 为什么?

6. 设 $g \in R[a, b]$ , $M = \sup_{x \in [a, b]} \{g(x)\}$ , $m = \inf_{x \in [a, b]} \{g(x)\}$ , 如果 $m < M$ , $f \in C[m, M]$ , 证明: $f \circ g \in R[a, b]$ .

7. 设 $f \in R[a, b]$ , 且 $1 / f$ 在 $[a, b]$ 上有界, 证明: $1 / f \in R[a, b]$ .

8. 设 $f$ 在 $[a, b]$ 上有界, 且其所有间断点构成一个收敛数列, 证明: $f \in R[a, b]$ .

9. 设 $f$ 在区间 $[a, b]$ 的每一点的极限都存在且为零, 证明: $f \in R[a, b]$ 且 $\int_{a}^{b} f = 0$ .

10. 证明: Riemann 函数 (见例题 5.1.4) 在每个有界区间 $[a, b]$ 上可积.

11. 对连续函数, 能否如下定义定积分: 如果 $f \in C[a, b]$ 且存在实数 $I$ , 使

$$
\lim _ {n \to \infty} \frac {b - a}{n} \sum_ {i = 1} ^ {n} f \left(a + \frac {i}{n} (b - a)\right) = I,
$$

则 $f \in R[a, b]$ 且 $\int_{a}^{b} f = I$ .

12. 设 $f, g \in R[a, b]$ , $P = \{x_{0}, x_{1}, \cdots, x_{n}\}$ 是区间 $[a, b]$ 的分划，证明： $\forall \varepsilon > 0$ , $\exists \delta > 0$ , 使对于满足 $\|P\| < \delta$ 的任意分划 P, 成立

$$
\left| \sum_ {k = 1} ^ {n} f (x _ {k}) \sin (g (x _ {k}) \Delta x _ {k}) - \int_ {a} ^ {b} f (x) g (x) \mathrm{d} x \right| <   \varepsilon .
$$

## §10.2 定积分的性质

本节只列出最重要的两个积分中值定理, 介绍一般书中不放在正文中的两个基本性质, 并讨论第一中值定理的中值 $\xi$ 的取值范围. 此外还介绍对积分求极限的几个重要例题. 关于积分中值定理的应用将在 10.4.5 小节作专题介绍.

## 10.2.1 积分中值定理

命题10.2.1（积分第一中值定理）设 $f, g \in R[a, b]$ , $m \leqslant f(x) \leqslant M, \forall x \in [a, b]$ , $g$ 在 $[a, b]$ 上不变号, 则存在 $\eta \in [m, M]$ , 使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = \eta \int_ {a} ^ {b} g (x) \mathrm{d} x.
$$

如果 $f \in C[a, b]$ , $g \in R[a, b]$ 且在 $[a, b]$ 上不变号, 则存在 $\xi \in [a, b]$ , 使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = f (\xi) \int_ {a} ^ {b} g (x) \mathrm{d} x.\tag{10.2}
$$

特别是, 如果 $f \in C[a, b]$ , 则存在 $\xi \in [a, b]$ , 使 $\int_{a}^{b} f(x) \mathrm{d}x = f(\xi)(b - a)$ .

注 与微分中值定理 (见 §7.1) 作比较, 自然会提出一个问题: 在 (10.2) 中的 $\xi \in [a, b]$ 能否改进为 $\xi \in (a, b)$ ? 答案是肯定的. 证明见后面的例题 10.2.2.

命题10.2.2（积分第二中值定理）设 $f \in R[a, b]$ ， $g$ 在 $[a, b]$ 上单调，则存在 $\xi \in [a, b]$ ，使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = g (a) \int_ {a} ^ {\xi} f (x) \mathrm{d} x + g (b) \int_ {\xi} ^ {b} f (x) \mathrm{d} x.
$$

特别是, 如果 $g$ 在 $[a, b]$ 上单调增加且 $g(x) \geqslant 0$ , 则存在 $\xi \in [a, b]$ , 使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = g (b) \int_ {\xi} ^ {b} f (x) \mathrm{d} x;
$$

如果 $g$ 在 $[a,b]$ 上单调减少且 $g(x)\geqslant 0$ ，则存在 $\xi \in [a,b]$ ，使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = g (a) \int_ {a} ^ {\xi} f (x) \mathrm{d} x.
$$

注 积分第二中值定理有几种形式. 上述形式的证明可在很多教科书中找到, 例如 [25] 上册第九章第 5 节. 证明中一般需用 Abel 变换 (见本书下册 (13.21) 和 [62] 的第一章). 但在实际应用中往往不需要这么强的形式. 本书中只在 “ $f \in C[a,b]$ , $g$ 在 $[a,b]$ 上可微且 $g'(x) \leqslant 0$ (或 $\geqslant 0$ ), $\forall x \in (a,b)$ ” 的条件下作出证明, 这时只需用积分第一中值定理 (见例题 10.4.11), 中值的取值范围也可改进为 $\xi \in (a,b)$ .

## 思考题

1. 举例说明: 在积分第一中值定理中 g 的保号性条件不满足时, 定理的结论可以不成立.

2. 举例说明: 在积分第二中值定理中 g 不是单调函数时, 定理的结论可以不成立.

## 10.2.2 例题

下面一个例题的结果是定积分的一个基本性质. 它对于连续的被积函数是平凡的. 对于一般的可积函数则可以用积分定义中介点集的任意性得到.

例题10.2.1 设 $f \in R[a, b]$ , 且 $I = \int_{a}^{b} f(x) \mathrm{d}x > 0$ , 则有子区间 $[c, d] \subset [a, b]$ 和 $\mu > 0$ , 使在区间 $[c, d]$ 上成立 $f(x) \geqslant \mu$ .

证 1 从积分定义可知, 存在 $[a,b]$ 的一个分划 $P=\{x_{0},x_{1},\cdots,x_{n}\}$ ，使得对从属于 P 的任何介点集 $\xi$ ，成立

$$
\sum_ {i = 1} ^ {n} f (\xi_ {i}) \Delta x _ {i} > \frac {I}{2} > 0.
$$

记 $m_{i}=\inf_{x\in[x_{i-1},x_{i}]}f(x), i=1,2,\cdots,n,$ 并对于上面的和式取下确界, 就得到

$$
\sum_ {i = 1} ^ {n} m _ {i} \Delta x _ {i} \geqslant \frac {I}{2} > 0.
$$

显然在和式中至少有一项大于0. 设这一项是第 $k$ 项, 则就可取 $\mu = m_k$ , $[c, d] = [x_{k-1}, x_k]$ .

证2 用反证法. 若结论不成立, 则 (由对偶法则) 对于每个 $\mu > 0$ 和每个子区间 $[c, d]$ , 存在 $\xi \in [c, d]$ , 满足 $f(\xi) < \mu$ . 在 $f$ 的 Riemann 和式中对于任何分划都取满足这个要求的介点集, 这样就得到 $\int_{a}^{b} f(x) \mathrm{d}x \leqslant \mu(b - a)$ . 由于 $\mu > 0$ 是任意的, 因此只能得到 $\int_{a}^{b} f(x) \mathrm{d}x \leqslant 0$ , 与条件矛盾.

注 若在教科书中有上、下和的 Darboux 理论, 则上题的证明可更为简单.

在上一个例题的基础上就可以解决关于积分第一中值定理 (命题 10.2.1) 中的中值取值范围问题.

例题 10.2.2 (对积分第一中值定理的改进) 如果 $f \in C[a, b]$ , $g \in R[a, b]$ 且在 $[a, b]$ 上不变号，则有 $\eta \in [m, M] = f([a, b])$ 使得成立等式

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = \eta \int_ {a} ^ {b} g (x) \mathrm{d} x,\tag{10.3}
$$

而且一定存在 $\xi\in(a,b)$ ，使得 $\eta=f(\xi)$ .

证 在此没有必要重复积分第一中值定理的经典证明过程, 下面只讨论一个问题: 能否在开区间 $(a, b)$ 内取到中值 $\xi$ .

下列三种情况是平凡的, 不需要多讨论.

(1) 如果积分 $\int_{a}^{b} g(x) \, \mathrm{d}x = 0$ , 则从积分第一中值定理可见 (10.3) 左边也等于 0, 于是 $\xi$ 可任取, 结论已成立.

(2) 如果 $f$ 在 $[a, b]$ 上的最小值和最大值相等, 即有 $m = M$ , 则 $f$ 为常值函数, 因此 $\xi$ 也可任取.

(3) 如果 $m < M$ , 且在等式 (10.3) 中的 $\eta \in (m, M)$ , 则从连续函数的介值性可知存在 $\xi \in (a, b)$ 使得 $f(\xi) = \eta$ .

要讨论的只是以上三种情况之外的问题. 不妨设 $g$ 在区间 $[a, b]$ 上非负, 且有 $\int_{a}^{b} g(x) \mathrm{d}x > 0$ . 又设 $m < M$ , 且不妨只讨论情况 $\eta = m$ .

从例题10.2.1知道存在子区间 $[c,d]$ 和 $\mu > 0$ ，使得在 $[c,d]$ 上有

$$
g (x) \geqslant \mu > 0.\tag{10.4}
$$

又由于 $f(x) - m$ 和 $g(x)$ 在 $[a,b]$ 上均非负，因此从等式(10.3)得到

$$
0 = \int_ {a} ^ {b} (f (x) - m) g (x)   \mathrm{d} x \geqslant \int_ {c} ^ {d} (f (x) - m) g (x)   \mathrm{d} x \geqslant \mu \int_ {c} ^ {d} (f (x) - m)   \mathrm{d} x \geqslant 0,
$$

可见上式最右边的积分等于0. 由于 $f \in C[c, d]$ , 这只能导致在 $[c, d]$ 上成立

$$
f (x) \equiv m.
$$

因此在 $(c,d)\subset (a,b)$ 中任取一点作为中值 $\xi$ 即可.

注 关于这个问题的讨论有许多文献, 可以参考 [53, 57]. 在 [53] 中指出, 若 $f$ 的连续性条件改为只是可积, 则结论不成立. 而在 [57] 中则证明: 如果 $f$ 既可积又有原函数, 则仍有 $\xi \in (a, b)$ (这将作为本章的第一组参考题 11).

下一例题的结论与例题 10.2.1 具有某种互补性, 也是可积函数的一个基本性质. 从方法上看则需要用实数系的基本定理 (参见第三章).

例题 10.2.3 设在区间 $[a, b]$ 上处处大于 0 的函数 $f \in R[a, b]$ ，则有

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x > 0.
$$

证 用反证法. 这时易知 $f$ 在 $[a, b]$ 上的定积分非负. 如果有 $\int_{a}^{b} f(x) \, \mathrm{d}x = 0$ , 则可如下导致矛盾.

首先, 为在记号上不引起混淆, 将例题 10.2.1 的部分结论用文字概述如下:

若某定积分大于0，则其被积函数必在积分区间的某子区间上大于0. (10.5)

对于 $\varepsilon > 0$ ，在反证法的前提 $\int_{a}^{b} f(x) \, \mathrm{d}x = 0$ 下，函数 $\varepsilon - f$ 在 $[a, b]$ 上的定积分为 $\varepsilon(b - a) > 0$ 。用 (10.5) 就可以得到

$\int_{a}^{b} (\varepsilon - f(x)) \, \mathrm{d}x > 0 \Longrightarrow \exists [c, d] \subset [a, b]$ ，使得 $f(x) < \varepsilon, \forall x \in [c, d]$ . 这时 $f$ 在 $[c, d]$ 上的积分仍然是 0.

(10.6) 

以下应用实数系的闭区间套定理 (见 §3.2).

令 $\varepsilon_{n} = 1 / n, n\in \mathbf{N}_{+}$ .对于 $n = 1$ ，改记(10.6)中的 $[c,d]$ 为 $[a_1,b_1]$ .在 $[a_1,b_1]$ 上 $f$ 的积分为0．对于 $n = 2$ 用(10.6)得到的 $[c,d]$ 记为 $[a_2,b_2]$ .如此归纳地用(10.6)，就得到闭区间套 $\{[a_n,b_n]\}$ ，使得对每个 $n$ ，在区间 $[a_n,b_n]$ 上成立不等式

$$
f (x) <   \frac {1}{n}.
$$

根据闭区间套定理, 在 $[a, b]$ 中存在属于每个闭区间 $[a_n, b_n]$ 的点 $\xi$ , 也就是说对每个 $n$ 成立

$$
f (\xi) <   \frac {1}{n}.
$$

于是只能是 $f(\xi) \leqslant 0$ ，但这与假设条件中 $f$ 在 $[a, b]$ 上处处大于 0 相矛盾。

注 如 10.1.3 小节开始所说, 上面的例题 10.2.1 和 10.2.3 均可从 Lebesgue 定理 (命题 10.1.6) 推得. 读者可以一试. 但 “杀鸡可不用牛刀”, 因此我们只从积分定义出发给出它们的证明. 例题 10.2.3 也可从第一组参考题 8 推出.

## 10.2.3 对积分求极限

定积分是一个数. 如果其中的被积函数带有参数, 则就会得到数列或函数, 从而就会出现对积分求极限的问题 (也称为在积分号下求极限的问题). 这一小节主要考虑离散参数情况.

设有一列函数 $f_{n}(x) \in R[a, b], n \in \mathbf{N}_{+}$ , 又在 $[a, b]$ 上处处有极限 $\lim_{n \to \infty} f_{n}(x) = f(x)$ , 而且极限函数 $f \in R[a, b]$ , 这时经常会问下列等式是否成立:

$$
\lim _ {n \to \infty} \int_ {a} ^ {b} f _ {n} (x)   \mathrm{d} x \stackrel {?} {=} \int_ {a} ^ {b} \lim _ {n \to \infty} f _ {n} (x)   \mathrm{d} x = \int_ {a} ^ {b} f (x)   \mathrm{d} x.\tag{10.7}
$$

这就是两种极限运算是否可以交换顺序的问题.

“不幸”的是, 对于问题 (10.7) 的答案是“不一定”. 例如, 设

$$
f _ {n} (x) = {\left\{ \begin{array}{l l} {n,} & {0 <   x \leqslant {\frac {1}{n}},} \\ {0,} & {{\frac {1}{n}} <   x \leqslant 1 {\text {或}} x = 0,} \end{array} \right.}
$$

则对一切 $x \in [0,1]$ , 有

$$
f (x) = \lim _ {n \to \infty} f _ {n} (x) = 0.
$$

但容易验证

$$
\lim _ {n \to \infty} \int_ {0} ^ {1} f _ {n} (x)   \mathrm{d} x = 1 \neq 0 = \int_ {0} ^ {1} f (x)   \mathrm{d} x.
$$

这说明在对积分求极限 (也称为在积分号下求极限) 时, 不能随意将求极限运算与求积分运算交换顺序. 对于这种交换极限顺序问题的一般性讨论, 需要函数项级数和多元微积分的知识, 将在本书下册的 §14.2 和 18.1.5 小节中介绍. 下面将通过一个典型例题, 说明如何利用定积分的性质和一些技巧来解决一些较简单的问题.

例题10.2.4 证明： $\lim_{n\to \infty}\int_0^{\pi /2}\sin^n x\mathrm{d}x = 0.$ 

由于本题的积分是定积分的重要结果 (见例题 10.4.9), 因此可将本题变为普通的数列极限问题, 而且还可以引用 2.3.2 小节的练习题 8. 但这种方法过分地依赖于定积分计算, 积不出怎么办? 所以我们下面要介绍新的方法.

分析 首先是从几何上作观察. 在图 10.3 中作出了 $n = 1,4,20,100,500$ 时的函数 $\sin^n x$ 的几何图像.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/db8a1dcdabf6b0eb7026cb13821fcf57877ec66b7bbe9674ae6a7cd25dc2834d.jpg)



图10.3


从图中可以看出, 由于 $\sin \frac{\pi}{2} = 1$ , 因此对每个 $n$ , 当 $x$ 与 $\frac{\pi}{2}$ 充分接近时, 函数值 $\sin^n x$ 一定接近 1. 另一方面, 对于固定的 $x$ 值, 只要 $x$ 小于 $\frac{\pi}{2}$ , 则当 $n$ 增加时函数值 $\sin^n x$ 就很快趋于 0. 这就是下面的“分而治之”方法的几何背景.

证 按照数列极限的 $\varepsilon-N$ 定义写出证明.

对于给定的 $\varepsilon > 0$ ，不妨设 $\varepsilon < \pi$ ，可以将积分分拆如下（参看图 10.3）：

$$
\begin{array}{r l} & 0 \leqslant \int_ {0} ^ {\pi / 2} \sin^ {n} x   \mathrm{d} x = \int_ {0} ^ {(\pi - \varepsilon) / 2} \sin^ {n} x   \mathrm{d} x + \int_ {(\pi - \varepsilon) / 2} ^ {\pi / 2} \sin^ {n} x   \mathrm{d} x \\ & \quad \leqslant \frac {\pi}{2} \sin^ {n} \frac {\pi - \varepsilon}{2} + \frac {\varepsilon}{2}. \end{array}\tag{10.8}
$$

由 $0 < \sin \frac{\pi - \varepsilon}{2} < 1$ , 可见 $\lim_{n \to \infty} \sin^n \frac{\pi - \varepsilon}{2} = 0$ . 从而对上述 $\varepsilon, \exists N$ , 使 $n > N$ 时, 成立

$$
0 <   \frac {\pi}{2} \sin^ {n} \frac {\pi - \varepsilon}{2} <   \frac {\varepsilon}{2}.
$$

因此 $n > N$ 时，就有 $0 \leqslant \int_{0}^{\pi / 2} \sin^n x \, \mathrm{d}x < \varepsilon$ .

注1 利用上、下极限工具(见 §3.6)，还可将证明写得简洁一些。在 (10.8) 的不等式中直接令 $n \to \infty$ ，就得到

$$
0 \leqslant \varliminf_ {n \to \infty} \int_ {0} ^ {\pi / 2} \sin^ {n} x   \mathrm{d} x \leqslant \varlimsup_ {n \to \infty} \int_ {0} ^ {\pi / 2} \sin^ {n} x   \mathrm{d} x \leqslant \frac {\varepsilon}{2}.
$$

利用 $\varepsilon > 0$ 的任意性, 可见上、下极限相等且为 0.

注 2 在分拆积分时可以采取动态方法, 例如在 [41] 中按照区间

$$
\left[ 0, \frac {\pi}{2} - \frac {1}{\sqrt [ 3 ]{n}} \right] \text {和} \left[ \frac {\pi}{2} - \frac {1}{\sqrt [ 3 ]{n}}, \frac {\pi}{2} \right]
$$

拆成两个积分, 然后分别证明它们 (作为数列) 当 $n \to \infty$ 时的极限都是 0. 读者可以一试.

注 3 本题的常见错误如下:

证 由积分第一中值定理, $\exists \xi \in \left(0, \frac{\pi}{2}\right)$ , 使得

$$
\int_ {0} ^ {\pi / 2} \sin^ {n} x \mathrm{d} x = \sin^ {n} \xi \int_ {0} ^ {\pi / 2} \mathrm{d} x = \frac {\pi}{2} \sin^ {n} \xi .
$$

不难看出一定有 $0 < \sin \xi < 1$ 成立, 因此得到

$$
\lim _ {n \to \infty} \int_ {0} ^ {\pi / 2} \sin^ {n} x \mathrm{d} x = \lim _ {n \to \infty} \frac {\pi}{2} \sin^ {n} \xi = 0.
$$

错误分析 错误在于 $\xi$ 不是常数, 而是随着 $n$ 的变化而变化的, 应该记为 $\xi_{n}$ . 当 $n \to \infty$ 时, 不难证明有 $\xi_{n} \to \frac{\pi}{2}$ , 因此 $\sin^{n} \xi_{n}$ 是 $1^{\infty}$ 型的不定式. 回忆数列极限的内容, 我们知道, 从一个数列 $\{a_{n}\}$ 的每一项满足 $0 < a_{n} < 1$ 是得不出 $\lim_{n \to \infty} a_{n}^{n} = 0$ 的 (试举例).

下一题是例题2.2.3在积分学中的推广.

例题 10.2.5 设非负函数 $f \in C[a, b]$ ，证明：

$$
\lim _ {n \to \infty} \left(\int_ {a} ^ {b} f ^ {n} (x)   \mathrm{d} x\right) ^ {\frac {1}{n}} = \max \{f (x) \mid x \in [ a, b ] \}.\tag{10.9}
$$

分析 设 $M = \max \{f(x) \mid x \in [a, b]\}$ . 由于 $M = 0$ 时等式显然成立, 因此只要考虑 $M > 0$ . 利用熟知的极限 $\lim_{n \to \infty} \sqrt[n]{a} = 1 (a > 0)$ , 可见若存在区间 $[\alpha, \beta] \subseteq [a, b]$ , 使在这个区间上有

$$
f (x) \geqslant M,\tag{10.10}
$$

那么由

$$
\left(\int_ {a} ^ {b} f ^ {n} (x) \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant \left(\int_ {\alpha} ^ {\beta} f ^ {n} (x) \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant M (\beta - \alpha) ^ {\frac {1}{n}} \rightarrow M (n \rightarrow \infty),
$$

问题便解决了. 但 $M$ 是函数 $f$ 的最大值, 因此一般来说 (10.10) 不可能成立. 现在我们退而求其次, 对 $0 < \varepsilon < M$ , 将 (10.10) 中的 $M$ 改为 $M - \varepsilon$ 则不难实现. 下面就是将这个证法写出来而已.

证 如果 $f(x) \equiv 0$ ，则所证等式显然成立。否则，设 $M = \max \{f(x) \mid x \in [a, b]\}$ ，则 $M > 0$ 。

对 $0 < \varepsilon < M, \exists [\alpha, \beta] \subseteq [a, b]$ , 使得

$$
M - \varepsilon \leqslant f (x) \leqslant M, \quad x \in [ \alpha , \beta ].
$$

于是有

$$
\left(\int_ {a} ^ {b} f ^ {n} (x) \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant \left(\int_ {\alpha} ^ {\beta} f ^ {n} (x) \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant (M - \varepsilon) (\beta - \alpha) ^ {\frac {1}{n}}.
$$

对于不等式

$$
M (b - a) ^ {\frac {1}{n}} \geqslant \left(\int_ {a} ^ {b} f ^ {n} (x) \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant (M - \varepsilon) (\beta - \alpha) ^ {\frac {1}{n}},
$$

利用上、下极限工具就得到

$$
M \geqslant \varlimsup_ {n \rightarrow \infty} \left(\int_ {a} ^ {b} f ^ {n} (x)   \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant \varliminf_ {n \rightarrow \infty} \left(\int_ {a} ^ {b} f ^ {n} (x)   \mathrm{d} x\right) ^ {\frac {1}{n}} \geqslant M - \varepsilon .
$$

从 $\varepsilon$ 的任意性可见上、下极限相等且等于 M.

对含有参数的积分求极限的例题很多. 下面的 Riemann 引理是研究 Fourier (傅里叶) 级数的基本工具, 其证明在一般教科书中都可找到.

例题10.2.6（Riemann引理）设 $f\in R[a,b]$ ，则

$$
\lim _ {p \to + \infty} \int_ {a} ^ {b} f (x) \sin p x \mathrm{d} x = 0, \quad \lim _ {p \to + \infty} \int_ {a} ^ {b} f (x) \cos p x \mathrm{d} x = 0.
$$

这个结论可以推广为

例题10.2.7（Riemann定理）设 $f\in R[a,b],g$ 以 $T$ 为周期且在 $[0,T]$ 上可积，则

$$
\lim _ {p \rightarrow + \infty} \int_ {a} ^ {b} f (x) g (p x) \mathrm{d} x = \frac {1}{T} \int_ {0} ^ {T} g (x) \mathrm{d} x \int_ {a} ^ {b} f (x) \mathrm{d} x.
$$

其证明留作为本章的第二组参考题4. 需要指出, 以上两个结果对于 (第十二章中的) 广义可积函数 $f$ 也是成立的, 但这时要求 $f$ 还是绝对可积的.

## 10.2.4 练习题

1. 设 $f \in C[a, b]$ ，且对满足条件 $g(a) = g(b) = 0$ 的每个函数 $g \in C[a, b]$ ，都有 $\int_{a}^{b} f(x)g(x) \, \mathrm{d}x = 0$ ，证明： $f \equiv 0$ .

2. 设非负函数 $f \in R[a, b]$ ，且 $\int_{a}^{b} f > 0$ ，若有多项式 $P$ 使 $\int_{a}^{b} P^{2}(x)f(x) \, \mathrm{d}x = 0$ ，证明： $P \equiv 0$ .

3. 设 $f \in C[-1,1]$ , 且对 $[-1,1]$ 上的每个可积偶函数 $g$ 都有 $\int_{-1}^{1} f(x)g(x) \, \mathrm{d}x = 0$ , 证明: $f$ 是 $[-1,1]$ 上的奇函数.

4. 计算极限 $\lim_{n\to \infty}\int_0^1 (1 - x^2)^n\mathrm{d}x.$ 

5. 分析例题 10.2.4 的条件和证明过程, 试写出它的可能推广, 并作出证明.
(这是一道开放题, 要求设计出一定的条件, 使 $\lim_{n\to\infty}\int_{a}^{b}f^{n}(x)\mathrm{d}x=0$ 成立.)

6. 已知 $x_{n} \in \left[0, \frac{\pi}{2}\right]$ ， $n = 1, 2, \cdots$ ，且满足 $\frac{2}{\pi} \int_{0}^{\pi/2} \sin^{n} x \, dx = \sin^{n} x_{n}$ ，计算极限 $\lim_{n \to \infty} x_{n}$ .

7. 设 $f \in C[-1, 1]$ ，证明： $\lim_{h \to 0^+} \int_{-1}^{1} \frac{h}{h^2 + x^2} f(x) \, \mathrm{d}x = \pi f(0)$ .

8. 设 $f \in C[0,1]$ , 计算:

(1) $\lim_{n\to \infty}\int_0^1 x^n f(x)\mathrm{d}x,$ (2) $\lim_{n\to \infty}\int_0^1 nx^n f(x)\mathrm{d}x.$ 

9. 设正数列 $\{a_{n}\}$ 满足 $\lim_{n\to \infty}\int_0^{a_n}x^n\mathrm{d}x = 2,$ 计算极限 $\lim_{n\to \infty}a_n$ 

10. 设 $n \in \mathbf{N}_+$ , $I_n = \int_0^{\pi/2} \frac{\sin^2 nt}{\sin t} \, dt$ , 计算极限 $\lim_{n \to \infty} \frac{I_n}{\ln n}$ .

## §10.3 变限积分与微积分基本定理

本节的例题和练习题以变限积分方法为中心, 而将以 Newton-Leibniz 公式为主的内容放在下一节中.

## 10.3.1 主要命题

关于变限积分的主要结果是下面两个命题.

命题10.3.1设 $f\in R[a,b]$ ，则变上限积分 $\int_{a}^{x}f(t)\mathrm{d}t$ 与变下限积分 $\int_{x}^{b}f(t)\mathrm{d}t$ 都是 $[a,b]$ 上的连续函数.

命题10.3.2 设 $f \in R[a, b]$ , $x \in [a, b]$ 是 $f$ 的连续点, 则

$$
\frac {\mathrm{d}}{\mathrm{d} x} \int_ {a} ^ {x} f (t) \mathrm{d} t = f (x).
$$

由此就给出了原函数存在的一个充分条件.

命题10.3.3（原函数存在定理）设 $f \in C[a, b]$ ，则 $f$ 在 $[a, b]$ 上存在原函数.

命题10.3.4（微积分基本公式）设 $F$ 在 $[a,b]$ 上有连续的导函数，则对每个 $x\in [a,b]$ ，成立Newton-Leibniz公式：

$$
\int_ {a} ^ {x} F ^ {\prime} (t) \mathrm{d} t = F (x) - F (a).
$$

在多数文献中将命题 10.3.2 和 (或) 命题 10.3.4 称为微积分基本定理. 这是 Newton 和 Leibniz 发现的. 在他们之前, 微分和积分的许多个别结果已经得到. 但是只有当 Newton 和 Leibniz 发现了微分和积分运算的互逆关系之后, 微积分才成为统一的整体并开始了全新的发展 (这方面可参看 [6] 和 [60] 的第三章).

比命题10.3.4更一般的是

命题 10.3.5 设 $f \in R[a, b]$ ，F 是 f 在 $[a, b]$ 上的一个原函数，则对每个 $x \in [a, b]$ ，成立 Newton-Leibniz 公式：

$$
\int_ {a} ^ {x} f (t) \mathrm{d} t = F (x) - F (a).
$$

注1 这个命题也被称为微积分基本定理, 但是它的证明完全不需要关于变上限积分的命题. 此外, 两个条件缺一不可. 关于这些问题有许多深入的研究, 例如可以参考 [57] 以及其中所引的文献.

注2 命题10.3.5可推广如下. 设 $f \in R[a, b]$ , $F \in C[a, b]$ , 且除了有限个点之外满足条件 $F' = f$ , 则对于每个 $x \in [a, b]$ , 仍成立等式

$$
\int_ {a} ^ {x} f (t) \mathrm{d} t = F (x) - F (a),
$$

这有时称为广义的 Newton-Leibniz 公式.

例如有

$$
\int_ {- 1} ^ {3} \operatorname{sgn} x \mathrm{d} x = | x | \Big | _ {- 1} ^ {3} = 2.
$$

思考题 举例: (1) 可积函数未必有原函数; (2) 有原函数的函数未必可积.

注 由于有第一类间断点的函数不能是导函数, 因此 (1) 是容易的. 对于 (2), 可以考虑在区间 $[-1, 1]$ 上的下列函数的导函数是否可积:

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2} \sin \frac {1}{x ^ {2}}, & x \neq 0, \\ 0, & x = 0. \end{array} \right.
$$

## 10.3.2 例题

在命题10.3.1中出现的变限积分不仅在建立微积分基本定理时有用，而且是一种非常有效的工具。对于 $f \in C[a, b]$ ，引入变限积分 $F(x) = \int_{a}^{x} f(t) \mathrm{d}t$ ，则 $F(x)$ 为 $[a, b]$ 上的连续可微函数。因此，我们就有可能同时用微分学和积分学的工具去研究它。

下一题的证明和应用一般出现在二重积分理论中, 但在这里用变限积分方法来证明还是很容易的.

例题 10.3.1 设 $f \in C[0, +\infty)$ , a > 0, 证明:

$$
\int_ {0} ^ {a} \left(\int_ {0} ^ {x} f (t) \mathrm{d} t\right) \mathrm{d} x = \int_ {0} ^ {a} f (x) (a - x) \mathrm{d} x.
$$

证 将 $a$ 看成非负变量, 等式两边就成为变上限积分. 当 $a = 0$ 时两边都等于 0 , 然后将两边对 $a$ 求导, 右边求导后得到

$$
\left(\int_ {0} ^ {a} f (x) (a - x) \mathrm{d} x\right) ^ {\prime} = \left(a \int_ {0} ^ {a} f (x) \mathrm{d} x - \int_ {0} ^ {a} x f (x) \mathrm{d} x\right) ^ {\prime} = \int_ {0} ^ {a} f (x) \mathrm{d} x,
$$

与左边求导结果相同, 从 Newton-Leibniz 公式就得到所求的等式.

下一题虽然不难, 但很容易出错. 先看正确的做法.

例题 10.3.2 设 $f \in R[A, B]$ , $a, b \in (A, B)$ 是 f 的两个连续点, 证明:

$$
\lim _ {h \to 0} \int_ {a} ^ {b} {\frac {f (x + h) - f (x)}{h}}   \mathrm{d} x = f (b) - f (a).
$$

证 要点是利用变量代换改变积分限, 然后利用命题 10.3.2 计算如下:

$$
\begin{array}{r l} \lim _ {h \to 0} \int_ {a} ^ {b} \frac {f (x + h) - f (x)}{h} \mathrm{d} x & = \lim _ {h \to 0} \frac {1}{h} \left(\int_ {a} ^ {b} f (x + h) \mathrm{d} x - \int_ {a} ^ {b} f (x) \mathrm{d} x\right) \\ & = \lim _ {h \to 0} \frac {1}{h} \left(\int_ {a + h} ^ {b + h} f (x) \mathrm{d} x - \int_ {a} ^ {b} f (x) \mathrm{d} x\right) \\ & = \lim _ {h \to 0} \frac {1}{h} \left(\int_ {b} ^ {b + h} f (x) \mathrm{d} x - \int_ {a} ^ {a + h} f (x) \mathrm{d} x\right) \\ & = f (b) - f (a). \end{array}
$$

错误证法分析 下面的“证法”是很有诱惑力的:

$$
\begin{array}{r l} \lim _ {h \to 0} \int_ {a} ^ {b} \frac {f (x + h) - f (x)}{h} \mathrm{d} x & = \int_ {a} ^ {b} \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h} \mathrm{d} x \\ & = \int_ {a} ^ {b} f ^ {\prime} (x) \mathrm{d} x = f (b) - f (a). \end{array}
$$

请初学者注意: 上面的三步推导中的每一步都是错误的, 即犯了三个错误: (1) 没有根据就将求极限与求积分运算交换顺序; (2) 对差商求极限时忘记了题中 f 只在两点连续, 并无可导条件; (3) 即使 f 在 $[a, b]$ 上可导, 但导函数也不一定可积, 因此不能用 Newton-Leibniz 公式.

下一题的第一个证明是引进变限积分方法的典型应用.

例题 10.3.3 设 $f \in C[a, b]$ ，且满足条件

$$
\int_ {a} ^ {b} x ^ {k} f (x) \mathrm{d} x = 0 \quad (k = 0, 1, \dots , n),
$$

证明: 函数 f 在 $(a, b)$ 内至少有 $n + 1$ 个不同的零点.

证1 用数学归纳法. 对于 $n = 0$ , 从 $\int_{a}^{b} f(x) \, \mathrm{d}x = 0$ 和 $f \in C[a, b]$ 可见 $f$ 在 $(a, b)$ 上或变号, 或恒等于 0 , 因此至少有一个零点.

设对于 $n$ 的结论已成立, 我们讨论 $n + 1$ 的情况. 引入辅助函数

$$
F (x) = \int_ {a} ^ {x} f (t) \mathrm{d} t,
$$

这时 $F(a) = 0$ 。从 $f$ 满足的条件 $\int_{a}^{b} f(x) \, \mathrm{d}x = 0$ 得到 $F(b) = 0$ 。又从分部积分可见对 $k \geqslant 1$ 有

$$
\begin{array}{r l} & {\int_ {a} ^ {b} x ^ {k} f (x) \mathrm{d} x = \int_ {a} ^ {b} x ^ {k} \mathrm{d} F (x) = x ^ {k} F (x) \Big | _ {a} ^ {b} - \int_ {a} ^ {b} k x ^ {k - 1} F (x) \mathrm{d} x} \\ & {\qquad = - \int_ {a} ^ {b} k x ^ {k - 1} F (x) \mathrm{d} x,} \end{array}
$$

因此有

$$
\int_ {a} ^ {b} x ^ {k} f (x) \mathrm{d} x = 0 \Longrightarrow \int_ {a} ^ {b} x ^ {k - 1} F (x) \mathrm{d} x = 0, \quad k = 1, \dots , n + 1.
$$

根据归纳假设, $F$ 在 $(a,b)$ 内至少有 $n + 1$ 个零点. 将它们记为 $x_{1} < x_{2} < \dots < x_{n + 1}$ . 由于 $a$ 和 $b$ 又都是 $F$ 的零点, 改记 $a = x_0$ , $b = x_{n + 2}$ , 并对 $[x_i, x_{i + 1}]$ , $i = 0,1,\dots ,n + 1$ , 用 $n + 2$ 次Rolle定理, 就得到所要求的 $n + 2$ 个零点.

下面再给出不利用变限积分的一个证明.

证 2 用反证法. 设有一个 f 满足所有题设条件, 但其零点个数不超过 n.

这时 $f$ 在 $[a, b]$ 内的任何闭子区间上不会恒等于0，因此从条件 $\int_{a}^{b} f(x) \mathrm{d}x = 0$ 可见 $f$ 在区间 $[a, b]$ 上一定变号.

利用 f 的所有零点或其中的一部分, 可以作出区间 $[a, b]$ 的一个分划

$$
P = \{x _ {0}, x _ {1}, \dots , x _ {k} \},
$$

其中 $x_0 = a, x_k = b,$ 中间的 $k - 1$ 个分点都是 $f$ 的零点， $f$ 在每个子区间上不变号，而在相邻的子区间上 $f$ 的符号相反.

由反证法前提可见 $k - 1 \leqslant n$ .

对于分划 P 可以构造辅助多项式

$$
g (x) = (x - x _ {1}) (x - x _ {2}) \dots (x - x _ {k - 1}).
$$

$g$ 关于分划 $P$ 具有与 $f$ 相同的性质: 即在每个子区间上不变号, 而在相邻的子区间上符号相反. 这样就知道 $f \cdot g$ 在整个区间 $[a, b]$ 上不变号, 因此

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x > 0 (<   0).
$$

另一方面, 由于 g 是次数不超过 n 的多项式, 从题设条件可见上述积分应当等于 0, 从而引出矛盾. □

## 10.3.3 练习题

1. 计算下列各题:

(1) $\left(\int_{0}^{x} t \sin \frac{1}{t} \, \mathrm{d}t\right)'_{x=0}$ ; 

(3) $\lim_{x\to 0}\frac{\int_0^x(\arctan t)^2\mathrm{d}t}{x^2};$ 

(2) $\frac{\mathrm{d}}{\mathrm{d}x}\int_{x^2}^{x^3}\frac{\sin t}{t}\mathrm{d}t;$ 

(4) $\lim_{x\to +\infty}\frac{\left(\int_0^x\mathrm{e}^{t^2}\mathrm{d}t\right)^2}{\int_0^x\mathrm{e}^{2t^2}\mathrm{d}t}.$ 

2. 设 $f \in C[a, b]$ , 且存在常数 $M, \eta > 0$ , 使对每个 $[\alpha, \beta] \subseteq [a, b]$ , 恒有

$$
\left| \int_ {\alpha} ^ {\beta} f (x) \mathrm{d} x \right| \leqslant M (\beta - \alpha) ^ {1 + \eta},
$$

证明： $f\equiv 0$ 

3. 设 $f \in C[a, b]$ ，且在 $[a, b]$ 上满足不等式 $f(x) \leqslant \int_{a}^{x} f(t) \, \mathrm{d}t$ ，证明：在 $[a, b]$ 上 $f(x) \leqslant 0$ .

4. 设函数 $f \in C[0, \pi]$ ，且有 $\int_{0}^{\pi} f(t) \cos t \, \mathrm{d}t = \int_{0}^{\pi} f(t) \sin t \, \mathrm{d}t = 0$ ，证明： $f$ 在区间 $(0, \pi)$ 内至少有两个零点.

5. 设 $f$ 为周期函数, 且于每个有界区间上可积, 证明: 变上限积分

$$
F (x) = \int_ {0} ^ {x} f (t) \mathrm{d} t
$$

可以表示为一个周期函数与一个线性函数之和.

6. 设 $f \in C(-\infty, +\infty)$ ，且积分 $\int_{a}^{a + T} f(x) \, \mathrm{d}x$ 的值与 $a$ 无关，证明： $f$ 为周期函数.

7. 设 $f \in C(0, +\infty)$ ，且对任何 $a, b > 0$ 的积分 $\int_{a}^{ab} f(x) \, \mathrm{d}x$ 的值与 $a$ 无关，试求函数 $f$ .

8. 设 $f \in R[a, b]$ , 证明: 存在 $\xi \in [a, b]$ , 使成立 $\int_{\xi}^{b} f(x) \mathrm{d}x = \int_{a}^{\xi} f(x) \mathrm{d}x$ , 并举例说明这样的 $\xi$ 在 $(a, b)$ 内不一定存在.

9. 设 $f \in C[a, b]$ , 且处处大于 0, 证明: 在 $[a, b]$ 上有

$$
\frac {\mathrm{d}}{\mathrm{d} x} \left(\int_ {a} ^ {x} f (t) \mathrm{d} t - \int_ {x} ^ {b} \frac {\mathrm{d} t}{f (t)}\right) \geqslant 2.
$$

10. 设 $a(t), b(t), c(t), d(t)$ 均为变量 $t$ 的多项式, 证明:

$$
\int_ {1} ^ {x} a (t) c (t) \mathrm{d} t \int_ {1} ^ {x} b (t) d (t) \mathrm{d} t - \int_ {1} ^ {x} a (t) d (t) \mathrm{d} t \int_ {1} ^ {x} b (t) c (t) \mathrm{d} t
$$

可被 $(x-1)^{4}$ 整除.

11. 设 $f \in C(-\infty, +\infty)$ , $g(x) = f(x) \int_{0}^{x} f(t) \, \mathrm{d}t$ 且单调减少, 证明: $f \equiv 0$ .

12. 设 $f$ 在 $[0, +\infty)$ 上可微, 且满足 $\int_0^x t f(t) \mathrm{d}t = \frac{x}{3} \int_0^x f(t) \mathrm{d}t$ , 求 $f$ .

## §10.4 定积分的计算

一般来说, 从定义出发来计算定积分是不切实际的. 本节以 Newton-Leibniz 公式 (见命题 10.3.4 和 10.3.5) 为基础, 在前三小节中介绍定积分计算, 在最后一小节则与定积分计算相结合介绍积分中值定理的应用. (有关不等式、积分估计和近似计算等例题见下一章.)

## 10.4.1 计算公式与法则

与不定积分的计算法则相对应, 定积分的计算法则有以下两个.

命题 10.4.1 (定积分的分部积分法) 设 $u'(x), v'(x) \in R[a, b]$ ，则

$$
\int_ {a} ^ {b} u (x) \mathrm{d} v (x) = u (x) v (x) \Big | _ {a} ^ {b} - \int_ {a} ^ {b} v (x) \mathrm{d} u (x).\tag{10.11}
$$

注 在应用上述公式时, 如果 $u(a)v(a)$ 或 $u(b)v(b)$ 不存在, 或者 $u(x)v(x)$ 在点 $x = a$ 或 $x = b$ 不连续, 则应当将公式右边的第一项 $u(x)v(x)|_a^b$ 理解为 $\lim_{x\to b^{-}}u(x)v(x) - \lim_{x\to a^{+}}u(x)v(x)$ . (虽然这时 $u'(x), v'(x)$ 在点 $x = a$ 或 $x = b$ 可能不存在, 但是由于函数在一个区间上的可积性以及积分值与其在有限点处的定义无关, 因此这不会影响 $u'(x), v'(x)$ 的可积性以及积分值.)

命题 10.4.2（定积分的换元积分法）设 $f \in R[a, b]$ ， $x = g(t)$ 在 $[\alpha, \beta]$ 上严格单调增加， $g'(t)$ 在 $[\alpha, \beta]$ 上可积，且满足 $g(\alpha) = a$ ， $g(\beta) = b$ ，则

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \int_ {\alpha} ^ {\beta} f (g (t)) g ^ {\prime} (t) \mathrm{d} t.
$$

注1 如果 $f \in C[a, b]$ , 则 $g$ 的单调性条件可换为较弱的条件 $g([\alpha, \beta]) \subset [a, b]$ . 两种情况的证明均可见 [59] 第二册 140 页的命题 6.1 和 6.2 及其注.

注2 尽管定积分的换元积分法与不定积分的相应法则在形式上是类似的, 但两者还是有区别的, 不能把前者简单地看成为后者与 Newton-Leibniz 公式的结合. 两者的主要区别在于: 定积分的计算与积分区间紧密关联, 不仅换元以后积分限要作相应的改变, 而且在采用变换前必须考虑进行变换所需的条件在有关区间上是否满足. 相对来说, 应用不定积分的换元法时对此不必多作强调, 只有当需要写出原函数时才会与区间联系起来.

从下面的很多例子中可以看到, 对定积分用换元法和分部积分法时往往能使一些积分项相互抵消, 因此有时即使被积函数的原函数不是初等函数, 我们仍然有可能计算出定积分的值. 因此, 定积分计算并不要求被积函数的原函数一定是初等函数, 这与不定积分计算完全不同.

## 10.4.2 例题

例题10.4.1 计算 $I = \int_{0}^{\pi /2}\sin x\ln \sin x\mathrm{d}x.$ 

解 1 被积函数在 x = 0 时没有定义, 但是从 $\sin x \sim x (x \to 0^{+})$ 和 $x \ln x \to 0 (x \to 0^{+})$ 可以知道被积函数在 x = 0 右侧有界.

如果如下分部积分, 则有

$$
I = \int_ {0} ^ {\pi / 2} \ln \sin x \mathrm{d} (- \cos x) = - \cos x \left. \ln \sin x \right| _ {0 ^ {+}} ^ {\pi / 2} + \int_ {0} ^ {\pi / 2} \cos x \mathrm{d} \ln \sin x.
$$

由于右边第一项为无穷大, 因此不能解决问题. 克服这个困难的方法也很简单, 只要将上面的 $\mathrm{d}(-\cos x)$ 改为 $\mathrm{d}(1 - \cos x)$ 即可. 利用 $1 - \cos x \sim \frac{1}{2} x^2 (x \to 0)$ , 就可计算如下:

$$
\begin{array}{l} I = \int_ {0} ^ {\pi / 2} \ln \sin x \mathrm{d} (1 - \cos x) \\ = (1 - \cos x) \left. \ln \sin x \right| _ {0 ^ {+}} ^ {\pi / 2} - \int_ {0} ^ {\pi / 2} (1 - \cos x) \mathrm{d} (\ln \sin x) \\ = - \int_ {0} ^ {\pi / 2} (1 - \cos x) \cdot \frac {\cos x}{\sin x} \mathrm{d} x = - \int_ {0} ^ {\pi / 2} \frac {\sin x \cos x}{1 + \cos x} \mathrm{d} x \\ = \int_ {0} ^ {\pi / 2} \left(- \sin x + \frac {\sin x}{1 + \cos x}\right) \mathrm{d} x \\ = [ \cos x - \ln (1 + \cos x) ] | _ {0} ^ {\pi / 2} = \ln 2 - 1. \end{array}
$$

解2 从作代换 $x = 2t$ 开始可计算如下

$$
\begin{array}{r l} & \int_ {0} ^ {\pi / 2} \sin x \ln \sin x \mathrm{d} x \\ & = \int_ {0} ^ {\pi / 4} 2 \sin 2 t \ln \sin 2 t \mathrm{d} t \\ & = 2 \ln 2 \int_ {0} ^ {\pi / 4} \sin 2 t \mathrm{d} t + \int_ {0} ^ {\pi / 4} 2 \sin 2 t \ln \sin t \mathrm{d} t + \int_ {0} ^ {\pi / 4} 2 \sin 2 t \ln \cos t \mathrm{d} t \end{array}
$$

(对第一个积分作代换 2t = x, 对最后一个积分作代换 $s = \frac{\pi}{2} - t$ )

$$
= \ln 2 + \int_ {0} ^ {\pi / 4} 2 \sin 2 t \ln \sin t \mathrm{d} t + \int_ {\pi / 4} ^ {\pi / 2} 2 \sin 2 s \ln \sin s \mathrm{d} s
$$

(利用定积分与积分变量无关的特点合并两个积分)

$$
= \ln 2 + \int_ {0} ^ {\pi / 2} 4 \sin t \cos t \ln \sin t d t
$$

(对积分再作代换 $\sin t = u$ )

$$
\begin{array}{l} = \ln 2 + \int_ {0} ^ {1} 4 u \ln u \mathrm{d} u \\ = \ln 2 + 2 u ^ {2} \ln u \Big | _ {0 ^ {+}} ^ {1} - \int_ {0} ^ {1} 2 u \mathrm{d} u = \ln 2 - 1. \end{array}
$$

注1 本题解1中处理分部积分的方法具有普遍意义, 因此要再强调一下. 具体来说, 由于两个不同的原函数之间只差一个常值函数, 因此在分部积分公式(10.11)中左边的 $u(x)\mathrm{d}v(x)$ 可改为 $u(x)\mathrm{d}(v(x)+c)$ , 其中 $c$ 待定. 利用这一点灵活性可以解决不少问题.

注2有的文献将本题与广义积分中的Euler积分 $\int_0^{\pi /2}\ln \sin x\mathrm{d}x$ （见例题12.3.4)相联系.实际上本题是常义积分，且有初等原函数，这与Euler积分的情况并不相同.但是本题的解2确实与例题12.3.4的解2中的方法类似.

下面是一个简单的题, 但其中还是有不少知识点需要注意.

例题 10.4.2 设 n 为大于 1 的正整数, 求 $\int_{0}^{n}(x - [x]) \, dx$ , 其中 [x] 表示不超过 x 的最大整数.

解 由于被积函数在积分区间上只有有限个间断点, 积分的存在性没有问题. 但由于这有限个间断点是跳跃间断点, 被积函数在整个区间上的原函数不存在 (例题 7.1.1), 需分段计算积分. 在区间 $[0,1]$ 上, $x - [x]$ 与函数 $f(x) = x$ 仅在点 $x = 1$ 处有不同的值, 因此它们的可积性和积分值相同, 这样就有

$$
\int_ {0} ^ {1} (x - [ x ]) \mathrm{d} x = \int_ {0} ^ {1} x \mathrm{d} x = \frac {1}{2}.
$$

又由于 $x - [x]$ 是周期为1的周期函数, 它在每个长度为1的区间上的积分相同, 所以就可以得到

$$
\begin{array}{r l} \int_ {0} ^ {n} (x - [ x ]) \mathrm{d} x & = \left(\int_ {0} ^ {1} + \int_ {1} ^ {2} + \dots + \int_ {n - 1} ^ {n}\right) (x - [ x ]) \mathrm{d} x \\ & = n \int_ {0} ^ {1} (x - [ x ]) \mathrm{d} x = \frac {n}{2}. \end{array}
$$

下面的例题说明, 与计算不定积分一样, 熟练地掌握初等代数或三角函数的运算公式, 对于定积分的计算也是十分重要的.

例题10.4.3在区间 $(0,\pi)$ 上定义 $D_{n}(x) = \frac{\sin\frac{(2n + 1)x}{2}}{2\sin\frac{x}{2}}, n\in \mathbf{N}_{+}$ ，计算 $\int_0^\pi D_n(x)\mathrm{d}x.$ 

解 虽然 $D_{n}(x)$ 在 $x = 0$ 时无定义, 但容易证明 $\lim_{x\to 0^{+}}D_{n}(x) = (2n + 1) / 2,$ 因此 $D_{n}(x)$ 在 $[0,\pi ]$ 上可积. 直接对 $D_{n}(x)$ 积分是困难的, 我们作如下变换. 利用三角恒等式

$$
2 \sin {\frac {x}{2}} \left(\frac {1}{2} + \sum_ {k = 1} ^ {n} \cos k x\right) = \sin {\frac {(2 n + 1) x}{2}},
$$

就可以将 $D_{n}$ 分解如下：

$$
D _ {n} (x) = \frac {1}{2} + \sum_ {k = 1} ^ {n} \cos k x.
$$

逐项积分就得到

$$
\begin{array}{r l} \int_ {0} ^ {\pi} D _ {n} (x) \mathrm{d} x & = \int_ {0} ^ {\pi} \left(\frac {1}{2} + \sum_ {k = 1} ^ {n} \cos k x\right) \mathrm{d} x \\ & = \frac {\pi}{2} + \sum_ {k = 1} ^ {n} \int_ {0} ^ {\pi} \cos k x \mathrm{d} x = \frac {\pi}{2}. \end{array}\tag{10.12}
$$

注 这个积分有时也称为Dirichlet积分, 其中的被积函数 $D_{n}$ 称为Dirichlet核, (10.12) 又可写成

$$
1 = \frac {2}{\pi} \int_ {0} ^ {\pi} \frac {\sin \frac {(2 n + 1) x}{2}}{2 \sin \frac {x}{2}} \mathrm{d} x.\tag{10.13}
$$

Dirichlet 核与公式 (10.13) 在积分理论与级数理论中有重要的应用.

下一题虽然是对变限积分求导, 但是不能直接应用命题 10.3.2. 同时它也表明, 该命题只给出了变限积分可导的充分条件. 变限积分在被积函数不连续点上仍有可能是可导的.

例题 10.4.4 设 $F(x)=\int_{0}^{x}\sin\frac{1}{t}\mathrm{d}t,$ 求 $F'(0)$ .

解 由于 $x = 0$ 是被积函数的第二类间断点, 不能用对变动上限求导的方法来求 $F'(0)$ , 而只能按照定义来计算导数. 根据定义 $F(0) = 0$ , 而当 $x \neq 0$ 时, 由分部积分公式可以得到

$$
\begin{array}{r l} F (x) & = \int_ {0} ^ {x} t ^ {2} \mathrm{d} \cos \frac {1}{t} = t ^ {2} \cos \frac {1}{t} \Big | _ {0} ^ {x} - \int_ {0} ^ {x} \cos \frac {1}{t} \mathrm{d} (t ^ {2}) \\ & = x ^ {2} \cos \frac {1}{x} - \int_ {0} ^ {x} 2 t \cos \frac {1}{t} \mathrm{d} t. \end{array}\tag{10.14}
$$

按照导数的定义计算极限:

$$
F ^ {\prime} (0) = \lim _ {x \to 0} \frac {F (x) - F (0)}{x} = \lim _ {x \to 0 ^ {+}} x \cos \frac {1}{x} - \lim _ {x \to 0 ^ {+}} \frac {\int_ {0} ^ {x} 2 t \cos \frac {1}{t} \mathrm{d} t}{x}.
$$

右边的第一项极限明显为 0. 第二项是 $\frac{0}{0}$ 的不定式, 用 L'Hospital 法则就得到结果是 0. 因此 $F'(0) = 0$ . □

注 $F^{\prime}(0)$ 的计算也可以如下进行：虽然函数 $2t\cos \frac{1}{t}$ 在 $t = 0$ 没有定义，但是可以补充定义在该点的函数值为0.这时(10.14)中最后一个积分的被积函数在 $t = 0$ 连续，从而可以直接用命题10.3.2.

## 10.4.3 对称性在定积分计算中的应用

设积分区间关于原点对称, 例如为 $[-a, a] (a > 0)$ . 则容易知道, 当被积函数 $f$ 是奇函数, 即其图像关于原点为中心对称时, 就有 $\int_{-a}^{a} f(x) \mathrm{d}x = 0$ ; 而当 $f$ 为偶函数, 即其图像关于 $y$ 轴为对称时, 就有 $\int_{-a}^{a} f(x) \mathrm{d}x = 2 \int_{0}^{a} f(x) \mathrm{d}x$ .

如果将以上的对称性进一步推广, 则对于某些积分的计算是很有好处的. 下面我们会看到利用对称性甚至可以计算出被积函数没有初等原函数的某些定积分. 在举例之前先列出三个简单而有用的事实, 其证明留给读者.

命题 10.4.3 设函数 f 在区间 $[a, b]$ 上可积, 则成立

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \int_ {a} ^ {b} f (a + b - x) \mathrm{d} x,
$$

特别当积分区间为 $[0, a]$ 时则有

$$
\int_ {0} ^ {a} f (x) \mathrm{d} x = \int_ {0} ^ {a} f (a - x) \mathrm{d} x.
$$

命题 10.4.4 设函数 f 在区间 $[0, a]$ 上可积, 且有 $f(x) = f(a - x)$ , 即关于区间的中点为偶函数 (也就是关于直线 x = a/2 为偶函数), 则成立

$$
\int_ {0} ^ {a} f (x) \mathrm{d} x = 2 \int_ {0} ^ {a / 2} f (x) \mathrm{d} x.
$$

命题 10.4.5 设函数 f 在区间 $[0, a]$ 上可积, 且有 $f(x) = -f(a - x)$ , 即关于区间的中点为奇函数, 则成立

$$
I = \int_ {0} ^ {a} f (x) \mathrm{d} x = 0.
$$

由于 $f(x) + f(a - x)$ 关于点 $x = a / 2$ 总是偶函数, 因此就可得到以下更为有力的命题, 它包含了以上两个命题为其特例.

命题10.4.6 设函数 $f$ 在 $[0, a]$ 上可积, 记 $f(x) + f(a - x) = g(x)$ , 则成立

$$
\int_ {0} ^ {a} f (x) \mathrm{d} x = \int_ {0} ^ {a / 2} g (x) \mathrm{d} x.
$$

下面 4 个定积分计算题是利用对称性的典型例题, 它们都可以用命题 10.4.6 直接解决.

例题10.4.5 对任意两个不同时为零的实数 $a, b$ , 计算

$$
\int_ {0} ^ {\pi} \frac {\cos x}{\sqrt {a ^ {2} \sin^ {2} x + b ^ {2} \cos^ {2} x}} \mathrm{d} x.
$$

解 由于被积函数关于积分区间的中点 $\frac{\pi}{2}$ 为奇函数, 因此用命题10.4.5(或命题10.4.6)即知该积分等于0.

例题10.4.6 计算 $I = \int_{0}^{\pi}\frac{x\sin x}{1 + \cos^{2}x}\mathrm{d}x.$ 

解1 用命题10.4.6先计算

$$
\frac {x \sin x}{1 + \cos^ {2} x} + \frac {(\pi - x) \sin (\pi - x)}{1 + \cos^ {2} (\pi - x)} = \frac {\pi \sin x}{1 + \cos^ {2} x},
$$

因此就有

$$
I = \int_ {0} ^ {\pi / 2} \frac {\pi \sin x}{1 + \cos^ {2} x} \mathrm{d} x = - \pi \arctan (\cos x) \Big | _ {0} ^ {\pi / 2} = \frac {\pi^ {2}}{4}.
$$

解 2 本题中所利用的对称性可以如下理解: 由于被积函数 f 中除去因子 x 后的部分关于直线 $x = \frac{\pi}{2}$ 为偶函数, 而因子 x 关于点 $\left(\frac{\pi}{2}, \frac{\pi}{2}\right)$ 是奇函数, 因此如果将因子 $x$ 换为 $x - \frac{\pi}{2}$ , 整个被积函数就是关于区间中点的奇函数. 从命题10.4.5知其积分为0, 因此也可如下计算:

$$
\begin{array}{r l} I & = \int_ {0} ^ {\pi} \frac {\left(x - \frac {\pi}{2}\right) \sin x}{1 + \cos^ {2} x} \mathrm{d} x + \frac {\pi}{2} \int_ {0} ^ {\pi} \frac {\sin x}{1 + \cos^ {2} x} \mathrm{d} x \\ & = \pi \int_ {0} ^ {\pi / 2} \frac {\sin x}{1 + \cos^ {2} x} \mathrm{d} x = - \pi \arctan (\cos x) \Big | _ {0} ^ {\pi / 2} = \frac {\pi^ {2}}{4}. \end{array}
$$

例题10.4.7 计算 $I = \int_{0}^{1}\frac{\ln(1 + x)}{1 + x^{2}}\mathrm{d}x.$ 

解 作代换 $x = \tan t, \mathrm{d}x = \sec^2 t \mathrm{d}t,$ 就得到

$$
I = \int_ {0} ^ {1} \frac {\ln (1 + x)}{1 + x ^ {2}} \mathrm{d} x = \int_ {0} ^ {\pi / 4} \ln (1 + \tan t) \mathrm{d} t.\tag{10.15}
$$

用命题10.4.6计算上式的最后一个积分.先计算

$$
\begin{array}{r l} \ln (1 + \tan t) + \ln \left[ 1 + \tan \left(\frac {\pi}{4} - t\right) \right] & = \ln (1 + \tan t) + \ln \left(1 + \frac {1 - \tan t}{1 + \tan t}\right) \\ & = \ln (1 + \tan t) + \ln \frac {2}{1 + \tan t} = \ln 2, \end{array}
$$

然后就得到

$$
I = \int_ {0} ^ {\pi / 8} \ln 2 \mathrm{d} x = \frac {\pi}{8} \ln 2.
$$

下一题的积分值关于被积函数中的参数 a 为常数, 在作代换 $\tan x = t$ 之后可以得到关于广义积分的相应结果 (见第十二章第一组参考题 1).

例题 10.4.8 证明: 对任意实数 a, 成立恒等式

$$
\int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + \tan^ {a} x} \equiv \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + \cot^ {a} x} \equiv \frac {\pi}{4}.
$$

证 因 $\cot x = \tan \left(\frac{\pi}{2} - x\right)$ , 用命题10.4.3知两个积分相等. 用命题10.4.6, 从

$$
\frac {1}{1 + \tan^ {\alpha} x} + \frac {1}{1 + \cot^ {\alpha} x} = \frac {1}{1 + \tan^ {\alpha} x} + \frac {\tan^ {\alpha} x}{1 + \tan^ {\alpha} x} = 1
$$

即知结论成立.

## 10.4.4 用递推方法求定积分

设有一列函数 $f_{n}(x) \in R[a, b]$ , 其中下标 $n \in \mathbf{N}_{+}$ 为参数. 为了计算积分 $\int_{a}^{b} f_{n}(x) \mathrm{d}x$ , 我们可用各种方法将下标为 $n$ 的积分 $\int_{a}^{b} f_{n}(x) \mathrm{d}x$ 化成与下标 $k < n$ 的积分 $\int_{a}^{b} f_{k}(x) \mathrm{d}x$ 有关的表达式 (即递推公式). 继续如此做下去, 就有可能将问题化为求下标最小的一个或几个积分. 计算定积分的这种方法, 称为递推方法.

例题10.4.9 计算 $I_{n} = \int_{0}^{\pi /2}\sin^{n}x\mathrm{d}x = \int_{0}^{\pi /2}\cos^{n}x\mathrm{d}x.$ 

解 两个积分相等可以由换元 $t = \frac{\pi}{2} - x$ 得到. 由定积分的分部积分法,

$$
\begin{array}{r l} I _ {n} & = \int_ {0} ^ {\pi / 2} \sin^ {n - 1} x \mathrm{d} (- \cos x) = - \sin^ {n - 1} x \cos x \Big | _ {0} ^ {\pi / 2} + \int_ {0} ^ {\pi / 2} \cos x \mathrm{d} (\sin^ {n - 1} x) \\ & = (n - 1) \int_ {0} ^ {\pi / 2} \sin^ {n - 2} x \cos^ {2} x \mathrm{d} x = (n - 1) I _ {n - 2} - (n - 1) I _ {n}, \end{array}
$$

移项后得递推公式:

$$
I _ {n} = \frac {n - 1}{n} I _ {n - 2} (n \geqslant 2).
$$

重复使用上述公式, 由于

$$
I _ {0} = \int_ {0} ^ {\pi / 2} \mathrm{d} x = \frac {\pi}{2}, \quad I _ {1} = \int_ {0} ^ {\pi / 2} \sin x \mathrm{d} x = 1,
$$

就得到

$$
I _ {n} = \left\{ \begin{array}{l l} { \frac {(n - 1) ! !}{n ! !},} & {n \text {为奇数},} \\ { \frac {(n - 1) ! !}{n ! !} \cdot \frac {\pi}{2},} & {n \text {为偶数}.} \end{array} \right.\tag{10.16}
$$

注 请初学者注意, 在定积分的计算中, 公式 (10.16) 经常有用, 因此需要记住这个公式并能熟练应用. 此外, $I_{n}$ 在 $n$ 为奇数和偶数时的表达式不同是今后导出 Wallis 公式 (命题 11.4.1) 的关键.

例题 10.4.10 设 m, n 为正整数, 计算含双参数的积分

$$
B (m, n) = \int_ {0} ^ {1} x ^ {m - 1} (1 - x) ^ {n - 1} \mathrm{d} x.
$$

解 令 $x^{m - 1}\mathrm{d}x = \mathrm{d}v,(1 - x)^{n - 1} = u,$ 进行分部积分，得到递推公式：

$$
\begin{array}{r l} B (m, n) & = \frac {x ^ {m} (1 - x) ^ {n - 1}}{m} \Big | _ {0} ^ {1} + \frac {n - 1}{m} \int_ {0} ^ {1} x ^ {m} (1 - x) ^ {n - 2} \mathrm{d} x \\ & = \frac {n - 1}{m} B (m + 1, n - 1), \end{array}
$$

连续应用上述公式, 得到

$$
\begin{array}{r l} B (m, n) & = \frac {(n - 1) (n - 2) \cdots (n - (n - 1))}{m (m + 1) \cdots (m + n - 2)} B (m + n - 1, 1) \\ & = \frac {(n - 1) !}{m (m + 1) \cdots (m + n - 2)} \int_ {0} ^ {1} x ^ {m + n - 2} \mathrm{d} x \\ & = \frac {(n - 1) !}{m (m + 1) \cdots (m + n - 2) (m + n - 1)} \\ & = \frac {(n - 1) ! (m - 1) !}{(m + n - 1) !}. \end{array}
$$

注 读者可将本题与例题9.1.10比较, 以看出定积分的分部积分法与不定积分的分部积分法之间的差别.

## 10.4.5 积分中值定理的应用

同微分中值定理一样, 积分中值定理在数学分析中同样十分重要. 应该指出, 应用积分中值定理的例题五花八门, 举不胜举, 其解题的方法与技巧也多种多样, 在研究生入学考试的数学分析试卷中更是经常出现. 由于篇幅限制, 我们不可能举出大量这样的例题, 希望初学者能通过模仿与实践, 举一反三, 拓宽自己的思路. 以下只是一些初步的例子, 更多的应用见下一章.

首先给出积分第二中值定理的一个证明, 它同时也是积分第一中值定理的典型应用. (注意其中的条件比命题 10.2.2 要强.)

例题 10.4.11 设 $f \in C[a, b]$ ，g 在区间 $[a, b]$ 上可微， $g' \in R[a, b]$ 且不变号，则有 $\xi \in (a, b)$ ，使成立

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = g (a) \int_ {a} ^ {\xi} f (x) \mathrm{d} x + g (b) \int_ {\xi} ^ {b} f (x) \mathrm{d} x.
$$

证 在积分 $\int_{a}^{b} f(x) g(x) \, \mathrm{d}x$ 中, 令 $\mathrm{d}v = f(x) \, \mathrm{d}x$ , $u = g(x)$ , 作分部积分:

$$
\begin{array}{r l} \int_ {a} ^ {b} f (x) g (x) \mathrm{d} x & = \left(g (x) \int_ {a} ^ {x} f (t) \mathrm{d} t\right) \bigg | _ {a} ^ {b} - \int_ {a} ^ {b} g ^ {\prime} (x) F (x) \mathrm{d} x \\ & = g (b) \int_ {a} ^ {b} f (x) \mathrm{d} x - \int_ {a} ^ {b} g ^ {\prime} (x) F (x) \mathrm{d} x. \end{array}
$$

注意到变限积分 $F(x) = \int_{a}^{x}f(t)\mathrm{d}t$ 连续和 $g^{\prime}(x)$ 不变号，对右边最后一个积分用积分第一中值定理(及其在例题10.2.2中的改进)，知道存在 $\xi \in (a,b)$ ，使得成立

$$
\begin{array}{r l} \int_ {a} ^ {b} g ^ {\prime} (x) F (x) \mathrm{d} x & = F (\xi) \int_ {a} ^ {b} g ^ {\prime} (x) \mathrm{d} x \\ & = [ g (b) - g (a) ] \int_ {a} ^ {\xi} f (x) \mathrm{d} x. \end{array}
$$

因此得到

$$
\begin{array}{r l} \int_ {a} ^ {b} f (x) g (x) \mathrm{d} x & = g (b) \int_ {a} ^ {b} f (x) \mathrm{d} x - [ g (b) - g (a) ] \int_ {a} ^ {\xi} f (x) \mathrm{d} x \\ & = g (a) \int_ {a} ^ {\xi} f (x) \mathrm{d} x + g (b) \int_ {\xi} ^ {b} f (x) \mathrm{d} x, \quad \xi \in (a, b). \end{array}
$$

下一个例题实际上是 Riemann 定理 (例题 10.2.7) 的一个特例.

例题 10.4.12 设 $f \in C[0, 2\pi]$ ，证明：

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {2 \pi} f (x) | \sin n x | \mathrm{d} x = \frac {2}{\pi} \int_ {0} ^ {2 \pi} f (x) \mathrm{d} x.\tag{10.17}
$$

解 先将积分区间 $[0,2\pi]$ 划分为 $\sin nx$ 的定号区间, 再用第一中值定理:

$$
\begin{array}{r l} \int_ {0} ^ {2 \pi} f (x) | \sin n x | \mathrm{d} x & = \sum_ {k = 1} ^ {n} \int_ {2 (k - 1) \pi / n} ^ {2 k \pi / n} f (x) | \sin n x | \mathrm{d} x \\ & = \sum_ {k = 1} ^ {n} f (\xi_ {k}) \int_ {2 (k - 1) \pi / n} ^ {2 k \pi / n} | \sin n x | \mathrm{d} x, \end{array}
$$

其中 $\xi_{k}\in(2(k-1)\pi/n,2k\pi/n), k=1,2,\cdots,n.$ 又直接计算得到

$$
\int_ {2 (k - 1) \pi / n} ^ {2 k \pi) / n} | \sin n x | \mathrm{d} x = \frac {1}{n} \int_ {0} ^ {2 \pi} | \sin t | \mathrm{d} t = \frac {4}{n} \int_ {0} ^ {\pi / 2} \sin t \mathrm{d} t = \frac {4}{n},
$$

因此有

$$
\int_ {0} ^ {2 \pi} f (x) | \sin n x | \mathrm{d} x = \frac {4}{n} \sum_ {k = 1} ^ {n} f (\xi_ {k}) = \frac {2}{\pi} \left(\sum_ {k = 1} ^ {n} f (\xi_ {k}) \cdot \frac {2 \pi}{n}\right).
$$

上式右边的和式可看成 $[0,2\pi]$ 上的连续函数 $f$ 在 $[0,2\pi]$ 的 $n$ 等距分划下的一个Riemann和.令 $n\to \infty$ 就得到所求证的结果.

注1 本题采用的证明方法可称为“子区间法”，即在计算一列函数 $\{f_n(x)\}$ 在某个区间上的定积分的极限值时，对每个正整数 $n$ ，把该区间划分成 $n$ 个子区间，分别计算出函数 $f_{n}(x)$ 在这些子区间上的定积分，然后相加。一般会得到一个与 $n$ 有关的值，最后取极限即可。

注2 本题也可以通过如下方法证明：先对阶梯函数 $f$ 证明 (10.17) 成立，然后用阶梯函数来逼近连续函数，从而证明 (10.17) 对一般的连续函数成立.

注3 如例题10.2.7的Riemann定理(又见本章第二组参考题4)所示, 本题的积分区间改换为一般的区间 $[a, b]$ (此时 $f \in C[a, b]$ ) 时结论仍然成立.

下一题的方法很多, 然而用积分中值定理的方法在思路上非常清晰.

例题 10.4.13 设对每个 $n \in N_{+}, f_{n}(x) \in C[0,1]$ ，且有 $\int_{0}^{1} f_{n}^{2}(x) \, dx = 1$ ，证明：存在 N 和常数 $c_{i}, i = 1, 2, \cdots, N$ ，使得

$$
\sum_ {n = 1} ^ {N} c _ {n} ^ {2} = 1, \quad \max _ {0 \leqslant x \leqslant 1} \left\{\left| \sum_ {n = 1} ^ {N} c _ {n} f _ {n} (x) \right| \right\} > 1 0 0.
$$

证 容易看出题中的 100 换成其他大数都是可以的. 对于积分等式

$$
\int_ {0} ^ {1} \left[ f _ {1} ^ {2} (x) + f _ {2} ^ {2} (x) + \dots + f _ {N} ^ {2} (x) \right] \mathrm{d} x = N
$$

的左边, 用积分第一中值定理, 知道存在 $\xi \in (0,1)$ , 使得

$$
f _ {1} ^ {2} (\xi) + f _ {2} ^ {2} (\xi) + \dots + f _ {N} ^ {2} (\xi) = N.
$$

将上式左边看成 $N$ 维Euclid空间中的一个向量

$$
\boldsymbol {v} = (f _ {1} (\xi), f _ {2} (\xi), \dots , f _ {N} (\xi))
$$

的长度平方, 则这个向量的长度就是 $\sqrt{N}$ .

另一方面, 可以将待定的 N 个数 $c_{1}, \cdots, c_{N}$ 看成一个单位长度的待定向量 c. 这样一来就只要使得

$$
\left| c _ {1} f _ {1} (\xi) + c _ {2} f _ {2} (\xi) + \dots + c _ {N} f _ {N} (\xi) \right| > 1 0 0
$$

就够了. 而上式的左边可以看成是向量 $\pmb{v}$ 与单位向量 $\pmb{c}$ 的内积的绝对值. 为了使它尽可能大, 只要使它们同方向即可. 这时的内积等于向量 $\pmb{v}$ 的长度 $\sqrt{N}$ . 因此, 只要取 $N = 10001 > 100^2$ 和

$$
c _ {i} = \frac {f _ {i} (\xi)}{\sqrt {N}}, \quad i = 1, 2, \dots , N,
$$

就可以满足要求.

## 10.4.6 练习题

1. Cauchy 曾经用下面的例子说明用 Newton-Leibniz 公式时必须验证条件. 请指出以下计算中的错误并作更正:

$$
\int_ {0} ^ {3 \pi / 4} {\frac {\sin x}{1 + \cos^ {2} x}}   \mathrm{d} x = \arctan (\sec x) \Big | _ {0} ^ {3 \pi / 4} = - \arctan {\sqrt {2}} - {\frac {\pi}{4}}.
$$

2. 计算下列各题:

(1) $\int_0^2 |1 - x|\mathrm{d}x;$ 

(3) $\lim_{x\to +\infty}\sqrt{x}\int_{x}^{x + 1}\frac{\mathrm{d}t}{\sqrt{t + \cos t}};$ 

$$
\int_ {- 2} ^ {2} \min \left\{\frac {1}{| x |}, x ^ {2} \right\} \mathrm{d} x; \tag {2}
$$

(5) $\int_0^\pi \left(\int_0^x\frac{\sin t}{\pi - t}\mathrm{d}t\right)\mathrm{d}x;$ 

(4) $\int_{-\pi / 4}^{\pi / 4} \frac{\cos^2 x}{1 + \mathrm{e}^{-x}} \, \mathrm{d}x;$ 

(6) $\int_0^\pi \frac{\mathrm{d}x}{a^2\sin^2x + b^2\cos^2x}$ $(ab\neq 0)$ . 

3. 利用对称性, 计算下列各题:

(1) $\int_0^\pi \frac{x\mathrm{d}x}{1 + \cos^2x};$ 

(2) $\int_0^1\frac{x}{\mathrm{e}^x + \mathrm{e}^{1 - x}}\mathrm{d}x;$ 

(3) $\int_{-2}^{2} x \ln (1 + \mathrm{e}^x) \, \mathrm{d}x$ ; 

(4) $\int_0^{\pi /4}\ln (1 + \tan x)\mathrm{d}x;$ 

(5) $\int_0^{\pi /2}\frac{\sin^nx}{\sin^nx + \cos^nx}\mathrm{d}x;$ 

(6) $\int_0^\pi \frac{a^n\sin^2x + b^n\cos^2x}{a^{2n}\sin^2x + b^{2n}\cos^2x}\mathrm{d}x.$ 

4. 设 $f \in C[0, a], a > 0$ .

(1) 在 $[0, a]$ 上 $f(x) + f(a - x) \neq 0$ , 计算 $I = \int_{0}^{a} \frac{f(x)}{f(x) + f(a - x)} \mathrm{d}x$ ;

(2) 在 $[0, a]$ 上 $f(x)f(a - x) \equiv 1$ , 计算 $I = \int_{0}^{a} \frac{\mathrm{d}x}{1 + f(x)}$ .

5. 设 f 为连续函数, 证明下列等式:

(1) $\int_0^\pi xf(\sin x)\mathrm{d}x = \frac{\pi}{2}\int_0^\pi f(\sin x)\mathrm{d}x;$ 

(2) $\int_{1}^{a} f\left(x^{2} + \frac{a^{2}}{x^{2}}\right) \frac{\mathrm{d}x}{x} = \int_{1}^{a} f\left(x + \frac{a^{2}}{x}\right) \frac{\mathrm{d}x}{x};$ 

(3) $\int_0^{2\pi}f(a\cos x + b\sin x)\mathrm{d}x = 2\int_0^\pi f(\sqrt{a^2 + b^2}\cos x)\mathrm{d}x.$ 

6. 设 $n \in \mathbf{N}_{+}$ , 计算 $\int_{0}^{\pi} \sin^{2n-1} x \cos(2n+1) x \, \mathrm{d}x$ 与 $\int_{0}^{\pi} \cos^{2n-1} x \sin(2n+1) x \, \mathrm{d}x$ .

7. 计算 $I(m, n) = \int_{0}^{1} x^{m} \ln^{n} x \, \mathrm{d}x$ ，其中 $m, n$ 是正整数.

8. 计算 $J(m, n) = \int_{0}^{\pi / 2} \sin^{m} x \cos^{n} x \, \mathrm{d}x$ ，其中 $m, n$ 是正整数.

9. 求 $F'(0)$ , 其中 $F(x) = \int_{0}^{x} \cos \frac{1}{t} \, \mathrm{d}t$ .

10. (Fejér (费耶尔) 积分) 证明: $\int_{0}^{\pi / 2}\left(\frac{\sin nx}{\sin x}\right)^{2} \mathrm{d}x = \frac{n\pi}{2}$ .

11. 定义 $f(x) = \int_{x}^{x + \pi / 2} |\sin t| \, \mathrm{d}t, x \in (-\infty, +\infty)$ .

(1) 证明: $f$ 是周期为 $\pi$ 的周期函数;

(2) 求 f 的最大值与最小值.

12. 设 $f \in C[0,1]$ ，且在 (0,1) 上可微。如果 $\int_{7/8}^{1} f(x) \mathrm{d}x = \frac{1}{8} f(0)$ ，证明：存在 $\xi \in (0,1)$ ，使 $f'(\xi) = 0$ 。

## §10.5 对于教学的建议

## 10.5.1 学习要点

1. 可积的三个充分必要条件对于本科阶段的学习一般已经足够。但是近年来不少数学分析教科书(例如[8, 42]等)将原先在实变函数课程中的Lebesgue定理(见命题10.1.6)写入教材，并出现了各种处理方法。这是数学分析课程改革中的一个新动向。本书避免了对于零测度集的正面叙述，但仍给出了Lebesgue定理的证明，其中的方法来自[8]。我们认为其中的思路和处理还是比较容易接受的。

2. 微积分基本定理使得微分学和积分学成为统一的整体。因此到了目前的学习阶段时，解题方法非常丰富，各种应用极其广泛。为了选材和安排方便起见，本章的题基本上还是围绕基本内容来选取的，参考题一般也都比较容易；较为困难的应用大都放在下一章内，其中有很多材料是为考研服务的，请读者根据自己的需要选用。

3. 对习题课的建议 本章定理较多, 在应用这些定理时, 学生往往容易忽视检验定理的某些条件. 例如, 在应用积分中值定理时, 忽视检验第一中值定理条件中的 $g(x)$ 在 $[a, b]$ 上不变号与第二中值定理条件中的 $g(x)$ 在 $[a, b]$ 上单调, 在应用定积分的换元积分法时, 忽视检验 $g'(t)$ 在 $[\alpha, \beta]$ 上连续, 而在对积分上限 $x$ 求导时, 忽视检验被积函数在 $x$ 点的连续性. 在习题课上可以举出反例, 以加深学生对这些条件的印象.

下面是一些可供学生思考和讨论的例题, 其中的解法或证法都有错误, 请分析原因, 并作改正.

例题 10.5.1 证明: $\int_{-1}^{1} x^{2} dx = 0$ .

证 因为 $x^{2} = x\cdot x$ ，因此由积分第一中值定理，存在 $\xi \in (-1,1)$ ，使

$$
\int_ {- 1} ^ {1} x ^ {2} \mathrm{d} x = \xi \int_ {- 1} ^ {1} x \mathrm{d} x = \left. \frac {1}{2} \xi \cdot x ^ {2} \right| _ {- 1} ^ {1} = 0.
$$

错误分析 应用第一中值定理的必要前提是被积函数的两个因子之一在积分区间上不变号, 而本题的上述做法不满足这个条件.

例题 10.5.2 设 f 是周期为 T 的可积函数, 证明: 对于任意实数 a, 成立

$$
\int_ {a} ^ {a + T} f (x) \mathrm{d} x = \int_ {0} ^ {T} f (x) \mathrm{d} x.
$$

证 定义函数 $F(a) = \int_{a}^{a + T}f(x)\mathrm{d}x,a\in (-\infty , + \infty)$ .则

$$
F ^ {\prime} (a) = \left(\int_ {0} ^ {a + T} f (x) \mathrm{d} x - \int_ {0} ^ {a} f (x) \mathrm{d} x\right) ^ {\prime} = f (a + T) - f (a) = 0.
$$

因此 $F(a)\equiv C$ (C为常数), 又 $C = F(0) = \int_0^T f(x)\mathrm{d}x,$ 所以

$$
\int_ {a} ^ {a + T} f (x) \mathrm{d} x = C = \int_ {0} ^ {T} f (x) \mathrm{d} x.
$$

错误分析 本题只假定 $f$ 可积, 因此不能在函数 $F(a) = \int_{a}^{a + T} f(x) \, \mathrm{d}x$ 中对变动积分限求导.

例题10.5.3 计算 $\int_0^\pi \frac{\mathrm{d}x}{2 + \cos 2x}$ 

解 先求不定积分, 得

$$
\int {\frac {\mathrm{d} x}{2 + \cos 2 x}} = {\frac {1}{\sqrt {3}}} \arctan \left({\frac {\tan x}{\sqrt {3}}}\right) + C.
$$

然后用 Newton-Leibniz 公式, 可以得到

$$
\int_ {0} ^ {\pi} \frac {\mathrm{d} x}{2 + \cos 2 x} = \left. \frac {1}{\sqrt {3}} \arctan \left(\frac {\tan x}{\sqrt {3}}\right) \right| _ {0} ^ {\pi} = 0.
$$

错误分析 由于 $\frac{1}{\sqrt{3}}\arctan \left(\frac{\tan x}{\sqrt{3}}\right)$ 在区间 $[0,\pi ]$ 上有间断点 $x = \frac{\pi}{2}$ , 因此不能用Newton-Leibniz公式.

## 10.5.2 参考题

## 第一组参考题

1. 设 $m$ 为正整数, $0 < a < b$ , 试从定积分的定义出发计算 $\int_{a}^{b} x^{m} \mathrm{d}x$ .

2. (1) 举例: 从 $|f| \in R[a, b]$ 未必能推出 $f \in R[a, b]$ ;

(2) 证明: 若 $f$ 是导函数, 则当 $|f| \in R[a, b]$ 时, 就一定有 $f \in R[a, b]$ .

3. 设 $f, g \in R[a, b]$ , $\xi$ 和 $\xi'$ 是从属于分划 $P$ 的两个不同介点集, 证明:

$$
\lim _ {\| P \| \rightarrow 0} \sum_ {k = 1} ^ {n} f (\xi_ {k}) g (\xi_ {k} ^ {\prime}) \Delta x _ {k} = \int_ {a} ^ {b} f (x) g (x) \mathrm{d} x.
$$

4. 设 $f$ 在区间 $I = (a, b)$ 上为下凸函数, 证明: $f$ 的两个单侧导函数 $f_{-}^{\prime}(x)$ 和 $f_{+}^{\prime}(x)$ 在 $I$ 中的任意有界闭区间 $[c, d]$ 上可积, 且成立 Newton-Leibniz 公式:

$$
f (d) - f (c) = \int_ {c} ^ {d} f _ {-} ^ {\prime} (x) \mathrm{d} x = \int_ {c} ^ {d} f _ {+} ^ {\prime} (x) \mathrm{d} x.
$$

5. 设 $f \in R[a, b]$ , 证明: 对于每一个给定的 $\varepsilon > 0$ , 存在函数 $g$ , 使得

$$
\int_ {a} ^ {b} | f (x) - g (x) | \mathrm{d} x <   \varepsilon ,
$$

其中的 g 是: (1) 阶梯函数; (2) 折线函数; (3) 连续函数; (4) 连续可微函数.

6. 证明积分的连续性命题: 设 $f \in R[a - \delta, b + \delta]$ , 其中 $\delta > 0$ , 则有

$$
\lim _ {h \to 0} \int_ {a} ^ {b} | f (x + h) - f (x) |   \mathrm{d} x = 0.
$$

7. 设 $f \in R[a, b]$ , 证明: $\forall \varepsilon > 0$ , $\exists [c, d] \subseteq [a, b]$ , 使 $f$ 在子区间 $[c, d]$ 上的振幅 $\omega_{f[c, d]} < \varepsilon$ .

8. 设 $f \in R[a, b]$ , 证明: $f$ 的连续点在 $[a, b]$ 中稠密 (即 $f$ 在 $[a, b]$ 的每个子区间 $(c, d)$ 中有连续点).

9. 设非负函数 $f \in R[a, b]$ ，求证：积分 $\int_{a}^{b} f(x) \, \mathrm{d}x = 0$ 的充分必要条件是 $f$ 在所有连续点处的值都等于 0.

10. 设 $f, g \in R[a, b]$ , 且在 $[a, b]$ 的每个子区间中有 $x$ 使 $f(x) = g(x)$ , 证明:

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \int_ {a} ^ {b} g (x) \mathrm{d} x.
$$

11. (积分第一中值定理的一种推广) 证明: 设 $f, g \in R[a, b]$ , 其中 $f$ 在 $[a, b]$ 上有原函数, $g$ 在 $[a, b]$ 上不变号, 则存在 $\xi \in (a, b)$ , 使

$$
\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x = f (\xi) \int_ {a} ^ {b} g (x) \mathrm{d} x.
$$

12. 计算以下渐近等式

$$
\int_ {0} ^ {1} \frac {x ^ {n - 1}}{1 + x} \mathrm{d} x = \frac {a}{n} + \frac {b}{n ^ {2}} + o \left(\frac {1}{n ^ {2}}\right) (n \rightarrow \infty)
$$

中的待定常数 a, b.

13. 设非负严格单调增加函数 $f$ 在区间 $[a, b]$ 上连续. 由积分中值定理, 对于每个 $p > 0$ , 存在唯一的 $x_{p} \in (a, b)$ , 使

$$
f ^ {p} (x _ {p}) = \frac {1}{b - a} \int_ {a} ^ {b} f ^ {p} (t) \mathrm{d} t.
$$

试求 $\lim_{p\to +\infty}x_p$ 

14. 设 $f \in C[0, +\infty)$ , $a > 0$ , 且存在有限极限 $\lim_{x \to +\infty} \left( f(x) + a \int_{0}^{x} f(t) \, \mathrm{d}t \right)$ , 证明: $f(+\infty) = 0$ .

15. 设 $f \in C(-\infty, +\infty)$ , 定义 $F(x) = \int_{a}^{b} f(x + t) \cos t \, \mathrm{d}t, a \leqslant x \leqslant b$ .

(1) 证明 F 在 $[a, b]$ 上可导; (2) 计算 $F'(x)$ .

16. 设 $n \in \mathbf{N}_{+}$ , 计算积分 $\int_{0}^{\pi/2} \frac{\sin nx}{\sin x} \, dx$ .

17. 令 $B(m, n) = \sum_{k=0}^{n} \mathrm{C}_n^k \frac{(-1)^k}{m+k+1}, m, n \in \mathbf{N}_+$ .

(1) 证明 $B(m, n) = B(n, m)$ ; (2) 计算 $B(m, n)$ .

18. 证明: 当 m < 2 时, $\lim_{x \to 0^{+}} \frac{1}{x^{m}} \int_{0}^{x} \sin \frac{1}{t} dt = 0.$ 

19. 证明: 当 $\lambda < 1$ 时, $\lim_{R \to +\infty} R^{\lambda} \int_{0}^{\pi/2} \mathrm{e}^{-R \sin \theta} \mathrm{d}\theta = 0$ .

20. 设 $f \in C^2[0, \pi]$ ，且 $f(\pi) = 2$ ， $\int_0^\pi(f(x) + f''(x)) \sin x \, \mathrm{d}x = 5$ ，求 $f(0)$ .

21. 寻找同时满足以下三个条件:

$$
\int_ {0} ^ {1} f (x) \mathrm{d} x = 1, \int_ {0} ^ {1} x f (x) \mathrm{d} x = a, \int_ {0} ^ {1} x ^ {2} f (x) \mathrm{d} x = a ^ {2}
$$

的非负连续函数 f, 其中 a 为给定实数.

22. 设 f 在 $[0,1]$ 上可微, 且满足条件 $f(1)=3\int_{0}^{1/3}\mathrm{e}^{x-1}f(x)\mathrm{d}x$ , 证明: 存在 $\xi\in(0,1)$ , 使得 $f(\xi)+f'(\xi)=0$ .

23. 设 $f$ 于 $[0,1]$ 上非负连续, 且 $f^2(t) \leqslant 1 + 2\int_0^t f(s)\mathrm{d}s$ , 证明: $f(t) \leqslant 1 + t$ .

24. 设 $f \in C^{1}[1, +\infty)$ , $f(1) = 1$ , 且当 $x \geqslant 1$ 时有 $f'(x) = \frac{1}{x^{2} + f^{2}(x)}$ , 证明: 存在有限极限 $f(+\infty)$ , 且 $f(+\infty) < 1 + \frac{1}{4}\pi$ .
(本题与8.5.3小节题13相同, 当然这里可以用积分方法做.)

25. 证明: $\int_{0}^{2\pi}\left(\int_{x}^{2\pi}\frac{\sin t}{t}\mathrm{d}t\right)\mathrm{d}x = 0.$ 

## 第二组参考题

1. (连续量的平均值) 设 $f$ 为 $[0, +\infty)$ 上的单调函数, 定义 $f$ 的平均值为

$$
F (x) = \left\{ \begin{array}{l l} f (0 ^ {+}), & x = 0, \\ \frac {1}{x} \int_ {0} ^ {x} f (t) \mathrm{d} t, & x > 0. \end{array} \right.
$$

证明：(1) $F$ 在 $[0, +\infty)$ 上为单调连续函数，且与 $f$ 具有相同的单调性；(2) $F(+\infty) = f(+\infty)$ .

2. 证明: $f \in R[a, b]$ 且 $\int_{a}^{b} f = I$ 的充分必要条件是存在 $[a, b]$ 的一个分划序列 $\{P_k\}_{k \in \mathbf{N}_+\}$ , 满足条件 $\lim_{k \to \infty} \| P_k \| = 0$ , 使得 $\lim_{k \to \infty} \sum_{i=1}^{n_k} f(\xi_{k,i}) \Delta x_{k,i} = I$ , 而且极限值不依赖于介点集的选取.
(本题表明在 Riemann 积分的定义中分划的任意性要求可以降低. 例如用等距分划也是可以的.)

3. 设 f 在 $[a, b]$ 上有界, 证明: 如果存在常数 I, 使对每个 $\varepsilon > 0$ , 存在 $\delta > 0$ , 对 $[a, b]$ 的任意分划 $P = \{x_{0}, x_{1}, \cdots, x_{n}\}$ , 只要 $\|P\| < \delta$ , 就有 $\left|\sum_{i=1}^{n} f(x_{i}) \Delta x_{i} - I\right| < \varepsilon$ , 则 $f \in R[a, b]$ 且 $\int_{a}^{b} f = I$ .
(不引入介点集来定义的积分在历史上称为 Cauchy 积分. 本题表明对于有界函数来说, Cauchy 积分与 Riemann 积分一致.)

4. (Riemann 定理) 设 $f \in R[a, b]$ , $g$ 以 $T$ 为周期且在 $[0, T]$ 上可积, 证明:

$$
\lim _ {p \rightarrow + \infty} \int_ {a} ^ {b} f (x) g (p x) \mathrm{d} x = \frac {1}{T} \int_ {0} ^ {T} g (x) \mathrm{d} x \int_ {a} ^ {b} f (x) \mathrm{d} x.
$$

5. 设 f 是一个 n 次多项式, 且满足条件 $\int_{0}^{1} x^{k} f(x) \, dx = 0, k = 1, 2, \cdots, n,$ 证明: $\int_{0}^{1}f^{2}(x)\mathrm{d}x=(n+1)^{2}\left(\int_{0}^{1}f(x)\mathrm{d}x\right)^{2}.$ 

6. 计算下列积分:
(1) $\int_{0}^{\pi/2}\cos^{n}x\cos nx dx;$ (2) $\int_{0}^{\pi/2}\cos^{n}x\sin nx dx.$ 

7. 证明: $\lim_{n\to \infty}\int_0^1\cos^n\frac{1}{x}dx = 0.$ 

8. 1996 年发现了计算圆周率的全新算法, 它可以计算圆周率在任意指定位数上的数字, 而不必求出在这一位之前的每一位数字. 这种算法的基础是关于圆周率的新公式. 它涉及一个积分的两种计算方法. 下面的问题就是其中的前一半. 其余部分见下册的例题 16.2.6.

证明:

$$
\int_ {0} ^ {1 / \sqrt {2}} \frac {4 \sqrt {2} - 8 x ^ {3} - 4 \sqrt {2} x ^ {4} - 8 x ^ {5}}{1 - x ^ {8}} \mathrm{d} x = \pi .
$$
