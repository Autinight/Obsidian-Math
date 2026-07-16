
# 第二十二章 重积分

从本章开始进入多元函数积分学. 这一章主要介绍重积分 (含广义重积分) 及其在几何、物理和不等式证明中的应用.

本章分为六节. §22.1 和 §22.2 分别讲述二重积分的概念与计算. §22.3 讨论三重积分与 $n$ 重积分. §22.4 是广义重积分. §22.5 是重积分在几何、物理以及不等式证明中的应用. 最后一节是学习要点和两组参考题.

## §22.1 二重积分的概念

### 22.1.1 二重积分的定义

在形式上与一元函数的定积分类似, 可对二元函数的重积分定义如下:

设二元函数 $f$ 在可求面积的有界区域 $D \subset \mathbf{R}^2$ 上定义, 如果存在极限

$$
\lim _ {\| T \| \rightarrow 0} \sum f (\xi_ {i}, \eta_ {i}) \Delta \sigma_ {i},\tag{22.1}
$$

则称 f 在 D 上可积，并称其极限值为 f 在 D 上的二重积分，记为

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y.
$$

在(22.1)中， $T$ 是 $D$ 的任一分划， $\| T\|$ 为子区域的最大直径， $\sigma_{i}$ 为第 $i$ 个可求面积的子区域， $\Delta \sigma_{i}$ 为 $\sigma_{i}$ 的面积， $(\xi_i,\eta_i)$ 是 $\sigma_{i}$ 中任一点.

在上述定义中有两点是要加以特别说明的. 第一, 怎样定义可求面积的区域? 如何定义分划 $T$ 使子区域均可求面积? 第二, 为什么要用子区域的最大直径来刻画分划的模 $\| T\|$ ? 对于第二点比较容易理解. 因为如果用子区域的最大面积来刻画分划的模的话, 即使子区域的面积很小, 但在同一子区域的点可能相距很远. 因此“以直代曲”就不可能在一个小范围内实现. 对于第一点, 现行教科书中有两类解决的方案. 在一些教科书上是先考虑在矩形区域上的二重积分 (见 [36, 8] 等), 因而分划 $T$ 自然是用直线网来实现. 把 $D$ 分成有限个小矩形, (22.1) 式的含义也是很清楚的. 对于一般的区域 $D$ 上函数 $f$ 的二重积分, 通过 $f$ 对 $D$ 的特征函数

$$
f _ {D} (x, y) = \left\{ \begin{array}{l l} f (x, y), & \text {当} (x, y) \in D \text {时}, \\ 0, & \text {其他} \end{array} \right.
$$

来过渡. 第二类方案 (见 [24, 11, 28, 9] 等) 是先定义平面区域的面积. 一个平面区域 $D$ 可求面积是指 $\forall \varepsilon > 0$ , 存在有限个矩形组成的多边形 $\Sigma_1, \Sigma_2$ , 使 $\Sigma_1 \subset D \subset \Sigma_2$ , 且使得 $\Sigma_2$ 的面积 - $\Sigma_1$ 的面积 $< \varepsilon$ . 又如果一条曲线可用有限个面积任意小的矩形覆盖, 则称这条曲线是零面积的. 平面区域 $D$ 可求面积的充分必要条件为边界 $\partial D$ 是零面积的. 因此分划 $T$ 是用有限条零面积的曲线网来实现的. 读者可参考相应的教科书对这个定义作进一步的理解.

### 22.1.2 可积函数类

先引进平面 $R^{2}$ 内的零测度集 (参见上册 304 页关于一维零测度集的定义). 设 S 是 $R^{2}$ 内的一个点集, 如果 $\forall \varepsilon > 0$ , 存在可列个矩形 $\Delta_{1}, \Delta_{2}, \cdots, \Delta_{n}, \cdots$ , 使得

(1) $\sum_{n=1}^{\infty} \Delta_n \supset S$ , 即矩形集 $\{\Delta_n\}$ 覆盖了 $S$ ,

(2) $\sum_{n=1}^{\infty} |\Delta_n| < \varepsilon$ , 其中 $|\Delta_n|$ 为 $\Delta_n$ 的面积,

则称 S 是 $R^{2}$ 内的一个零测度集. 注意零面积集必是零测度集, 但零测度集不一定是零面积集. 例如 $R^{2}$ 中有理点全体组成的集是零测度集, 但不是零面积集.

与一元函数的定积分分类似, 我们有如下的可积充分必要条件 (参见上册 304 页的 Lebesgue 定理).

命题 22.1.1 设 D 为可求面积的有界闭区域, f 是定义在 D 上的有界函数, 则 f 在 D 上可积的充分必要条件是 f 在 D 上的所有不连续点的集合是零测度集.

命题22.1.1的证明可参见[28]等. 由命题22.1.1立得： $D$ 上的连续函数是可积的；只有至多可列个不连续点的有界函数是可积的；甚至若有界函数 $f$ 的所有不连续点组成 $D$ 的有限条零测度的曲线，则 $f$ 也是可积的.

二重积分的性质与一元函数的定积分完全类似, 这里不再重复. 如不作特殊申明, 以下均假设 D 为可求面积的有界闭区域.

例题22.1.1设曲线 $l: x = \varphi(t), y = \psi(t), \alpha \leqslant t \leqslant \beta$ ，其中 $\varphi, \psi$ 连续，且至少其中之一有连续导数，则曲线 $l$ 的面积为零。

证 不妨设 $\varphi(t)$ 在闭区间 $[\alpha,\beta]$ 上连续, $\psi(t)$ 有连续导函数. $\forall\varepsilon>0$ , 可作分割 $\alpha=t_{0}<t_{1}<\cdots<t_{n}=\beta$ , 使当 $s,t\in[t_{j-1},t_{j}], j=1,2,\cdots,n$ 时有

$$
| \varphi (s) - \varphi (t) | <   \varepsilon .
$$

令

$$
a _ {j} = \min _ {t _ {j - 1} \leqslant t \leqslant t _ {j}} \{\varphi (t) \}, \quad b _ {j} = \max _ {t _ {j - 1} \leqslant t \leqslant t _ {j}} \{\varphi (t) \},
$$

则有

$$
b _ {j} - a _ {j} \leqslant \varepsilon , j = 1, 2, \dots , n,
$$

又令

$$
c _ {j} = \min _ {t _ {j - 1} \leqslant t \leqslant t _ {j}} \{\psi (t) \}, d _ {j} = \max _ {t _ {j - 1} \leqslant t \leqslant t _ {j}} \{\psi (t) \}, I _ {j} = [ a _ {j}, b _ {j} ] \times [ c _ {j}, d _ {j} ],
$$

于是当 $t \in [t_{j-1}, t_j]$ 时 $(\varphi(t), \psi(t)) \in I_j$ ，故曲线 $l \subset \bigcup_{j=1}^{n} I_j$ 。由于 $\psi'(t)$ 在闭区间 $[\alpha, \beta]$ 上连续，所以

$$
| \psi^ {\prime} (t) | <   M, \quad \alpha \leqslant t \leqslant \beta .
$$

由微分中值定理得

$$
d _ {j} - c _ {j} \leqslant M (t _ {j} - t _ {j - 1}), j = 1, 2, \dots , n,
$$

因而

$$
\sum_ {j = 1} ^ {n} | I _ {j} | \leqslant \sum_ {j = 1} ^ {n} \varepsilon M (t _ {j} - t _ {j - 1}) = \varepsilon M (\beta - \alpha),
$$

其中 $|I_j|$ 表示矩形 $I_{j}$ 的面积. 因为 $\varepsilon$ 是任意的, 故曲线 $l$ 的面积为零.

注 在后面我们将要遇到的大多数区域 (如 $x$ 型区域、 $y$ 型区域) 都是由有限条满足上例条件的曲线段所围成的, 因此这样的区域都是可求面积的.

例题 22.1.2 设有界非负函数 f 在区域 D 上可积, 证明: 积分

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = 0\tag{22.2}
$$

的充分必要条件是 f 在其连续点处的值均为零 (参见上册 333 页题 9).

证 先证必要性. 用反证法. 若不然, 存在 $p_0(x_0, y_0) \in D$ , $f$ 在点 $p_0$ 连续, 且 $f(x_0, y_0) > 0$ . 由连续函数的局部保号性定理知存在 $\delta > 0$ , 使得

$$
f (x, y) > \frac {1}{2} f (x _ {0}, y _ {0}), \forall (x, y) \in O _ {\delta} (\boldsymbol {p} _ {0}) \subset D.
$$

于是

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y \geqslant \iint_ {O _ {\delta} (\boldsymbol {p} _ {0})} \frac {1}{2} f (x _ {0}, y _ {0}) \mathrm{d} x \mathrm{d} y = \frac {\pi}{2} \delta^ {2} f (x _ {0}, y _ {0}) > 0,
$$

与(22.2)矛盾.

再证充分性. 设 $f(x, y)$ 在其连续点处的函数值为 0. 对任意分划 $T$ 中可求面积的小区域 $\sigma_i$ , 如 $\Delta \sigma_i > 0$ , 则 $\sigma_i$ 不是零测度集. 由可积充分必要条件知在每一个 $\sigma_i$ 内至少有 $f$ 的一个连续点, 记之为 $(\xi_i, \eta_i)$ , 作和数 $\sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i$ , 则

$$
\sum_ {i = 1} ^ {n} f (\xi_ {i}, \eta_ {i}) \Delta \sigma_ {i} = 0.
$$

于是

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \lim _ {\| T \| \rightarrow 0} \sum_ {i = 1} ^ {n} f (\xi_ {i}, \eta_ {i}) \Delta \sigma_ {i} = 0.
$$

例题 22.1.3 设 $D_{R}$ 是由 x = R, y = 0, $y = \frac{2}{R}x - 1$ 围成, 求

$$
\lim _ {R \rightarrow + \infty} \iint_ {D _ {R}} \mathrm{e} ^ {- x} \arctan \frac {y}{x} \mathrm{d} x \mathrm{d} y.
$$

解 在图 22.1 中作出了区域 $D_{R}$ 的图形. 由于函数 $e^{-x}\arctan\frac{y}{x}$ 在 $D_{R}$ 上连续, 由积分中值定理, 存在 $(\xi,\eta)\in D_{R}$ , 使得

$$
\begin{array}{r l} \iint_ {D _ {R}} \mathrm{e} ^ {- x} \arctan \frac {y}{x} \mathrm{d} x \mathrm{d} y & = \mathrm{e} ^ {- \xi} \arctan \frac {\eta}{\xi} \cdot | D _ {R} | \\ & = \frac {R}{4} \mathrm{e} ^ {- \xi} \arctan \frac {\eta}{\xi}, \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/d9426926daff0ee3c6fc0c513ac5891b60cdae7d1293d3c5aabb361e0bb15fde.jpg)


其中 $\frac{R}{2} \leqslant \xi \leqslant R, 0 \leqslant \eta \leqslant 1$ . 于是当 $R \to +\infty$ 时

图22.1

$$
\left| \iint_ {D _ {R}} \mathrm{e} ^ {- x} \arctan \frac {y}{x} \mathrm{d} x \mathrm{d} y \right| \leqslant \frac {R}{4} \mathrm{e} ^ {- \frac {R}{2}} \arctan \frac {\eta}{\xi} \longrightarrow 0.
$$

### 22.1.3 思考题

1. 设 $f(x, y)$ , $g(x, y)$ 在 $D$ 上可积, 证明: $f(x, y) \cdot g(x, y)$ 也在 $D$ 上可积. 设 $f(x, y)$ 在 $D$ 上可积, 且 $f(x, y) \neq 0$ , 证明: $\frac{1}{f(x, y)}$ 也在 $D$ 上可积.

2. 设 $u = u(x, y)$ 在 $D$ 上可积, $f(u)$ 是 $u$ 的连续函数, 证明: $f(u(x, y))$ 在 $D$ 上可积. 如果 $f(u)$ 仅仅是 $u$ 的可积函数, $f(u(x, y))$ 是否一定在 $D$ 上可积?

3. 设 $f(x, y), g(x, y)$ 在 $D$ 上有界，且在 $D$ 上除了一个零面积集外处处相等，证明： $f(x, y)$ 与 $g(x, y)$ 在 $D$ 上有相同的可积性，可积时有相同的积分值。如果 $f(x, y)$ 与 $g(x, y)$ 在 $D$ 上除了一个零测度集外处处相等，情况又如何？

4. 如果 $f(x, y)$ 在 $\widetilde{D} \subset D$ 上有界可积，且 $D \setminus \widetilde{D}$ 为零面积集。我们可以认为 $f(x, y)$ 在 $D$ 上可积，且其积分值就取 $f(x, y)$ 在 $\widetilde{D}$ 上的积分值。讨论：

(1) $f(x,y) = \sin \frac{1}{(x^2 - 1)^2 + (y^2 - 1)^2}$ 在 $[-1,1] \times [-1,1]$ 上;

(2) $f(x,y) = \arctan{\frac{1}{y - x^2}}$ 在 $[0,1]\times [0,1]$ 上

的可积性.

### 22.1.4 练习题

1. 设 $f(x,y)$ , $g(x,y)$ 都是 D 上的可积函数, 证明:

$$
h (x, y) = \max \{f (x, y), g (x, y) \}
$$

也是 D 上的可积函数.

2. 设 $f(x,y)$ 在点 $\boldsymbol{p}_{0}(x_{0},y_{0})$ 的某邻域中连续, 求

$$
\lim _ {\rho \rightarrow 0} \frac {1}{\pi \rho^ {2}} \iint_ {(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2} \leqslant \rho^ {2}} f (x, y) \mathrm{d} x \mathrm{d} y.
$$

3. 证明：

$$
\iint_ {| x | + | y | \leqslant 1} f (x + y) \mathrm{d} x \mathrm{d} y = \int_ {- 1} ^ {1} f (u) \mathrm{d} u.
$$

4. 证明：

$$
\iint_ {D} f (x y) \mathrm{d} x \mathrm{d} y = \ln 2 \int_ {1} ^ {2} f (u) \mathrm{d} u,
$$

其中 D 为 xy = 1, xy = 2, y = x, y = 4x 在第一象限所围成的区域.

## §22.2 二重积分的计算

### 22.2.1 矩形区域上的二重积分

矩形上的二重积分在一定条件下可以化为二次积分进行计算.

设 $f(x,y)$ 在矩形 $A = [a,b]\times [c,d]$ 上可积，且对每个固定的 $x\in [a,b]$ ，积分

$$
\varphi (x) = \int_ {c} ^ {d} f (x, y) \mathrm{d} y
$$

存在, 则 $\varphi(x)$ 在 $[a, b]$ 上可积, 并且

$$
\iint_ {A} f (x, y) \mathrm{d} x \mathrm{d} y = \int_ {a} ^ {b} \mathrm{d} x \int_ {c} ^ {d} f (x, y) \mathrm{d} y.
$$

由此可以看出, 若 $f(x,y)$ 在 A 上连续, 则两个二次积分是相等的 (都等于二重积分), 积分值与积分顺序无关. 但积分顺序不同时, 积分的难度可能相差很大. 请看下面的例子.

例题22.2.1设 $A = [0,1]\times [0,1]$ ，求

$$
I = \iint_ {A} \frac {y \mathrm{d} x \mathrm{d} y}{(1 + x ^ {2} + y ^ {2}) ^ {3 / 2}}.
$$

解 先对 $y$ 后对 $x$ 积分, 得到

$$
\begin{array}{r l} I & = \int_ {0} ^ {1} \mathrm{d} x \int_ {0} ^ {1} \frac {y \mathrm{d} y}{(1 + x ^ {2} + y ^ {2}) ^ {3 / 2}} \\ & = \int_ {0} ^ {1} \left(\frac {1}{\sqrt {x ^ {2} + 1}} - \frac {1}{\sqrt {x ^ {2} + 2}}\right) \mathrm{d} x = \ln \frac {2 + \sqrt {2}}{1 + \sqrt {3}}. \end{array}
$$

先对 $x$ 后对 $y$ 积分，则得到

$$
\begin{array}{r l} I & = \int_ {0} ^ {1} y \mathrm{d} y \int_ {0} ^ {1} \frac {\mathrm{d} x}{(1 + x ^ {2} + y ^ {2}) ^ {3 / 2}} \\ & = \int_ {0} ^ {1} y \left[ \frac {1}{1 + y ^ {2}} \cdot \frac {x}{(1 + x ^ {2} + y ^ {2}) ^ {1 / 2}} \Big | _ {x = 0} ^ {x = 1} \right] \mathrm{d} y \\ & = \int_ {0} ^ {1} \frac {y \mathrm{d} y}{(1 + y ^ {2}) (2 + y ^ {2}) ^ {1 / 2}} (\sqrt {2 + y ^ {2}} = t) \\ & = \int_ {\sqrt {2}} ^ {\sqrt {3}} \frac {\mathrm{d} t}{t ^ {2} - 1} = \frac {1}{2} \ln \frac {t - 1}{t + 1} \Big | _ {\sqrt {2}} ^ {\sqrt {3}} = \frac {1}{2} \ln \frac {(\sqrt {3} - 1) (\sqrt {2} + 1)}{(\sqrt {3} + 1) (\sqrt {2} - 1)} \\ & = \frac {1}{2} \ln \frac {2 (\sqrt {2} + 1) ^ {2}}{(\sqrt {3} + 1) ^ {2}} = \ln \frac {2 + \sqrt {2}}{1 + \sqrt {3}}. \end{array}
$$

在 f 不满足可积或累次可积的条件时, 情况就比较复杂, 请看下面反例.

例题22.2.2 设函数 $f$ 定义在 $A = [0,1] \times [0,1]$ 上，

$$
f (x, y) = \left\{ \begin{array}{l l} 1, & \text {当} x \text {是无理数}, \\ 2 y, & \text {当} x \text {是有理数}, \end{array} \right.
$$

则 (1) $f$ 在 $A$ 上不可积;

(2) $\int_{0}^{1}\mathrm{d}x\int_{0}^{1}f(x,y)\mathrm{d}y$ 存在, $\int_{0}^{1}\mathrm{d}y\int_{0}^{1}f(x,y)\mathrm{d}x$ 不存在.

证 (1) $\forall y \in [0,1]$ , $y \neq \frac{1}{2}$ , $f(x,y)$ 作为 $x$ 的函数在 $[0,1]$ 内处处不连续, 所以 $f(x,y)$ 在 $A$ 上的 $y \neq \frac{1}{2}$ 的每点处都不连续. 于是 $f$ 在 $A$ 上不可积.

(2) 由于

$$
\int_ {0} ^ {1} f (x, y)   \mathrm{d} y = \left\{ \begin{array}{l l}  \int_ {0} ^ {1} \mathrm{d} y = 1, & \text {当} x \text {为无理数}, \\  \int_ {0} ^ {1} 2 y   \mathrm{d} y = 1, & \text {当} x \text {为有理数}, \end{array} \right.
$$

所以

$$
\int_ {0} ^ {1} \mathrm{d} x \int_ {0} ^ {1} f (x, y) \mathrm{d} y = \int_ {0} ^ {1} \mathrm{d} x = 1.
$$

另一方面， $\forall y \in [0,1], y \neq \frac{1}{2}, f(x,y)$ 作为 $x$ 的一元函数，在 $[0,1]$ 内每一点处都不连续，于是 $\int_0^1 f(x,y) \mathrm{d}x$ 对每个 $y \neq \frac{1}{2}$ 都不存在，从而

$$
\int_ {0} ^ {1} \mathrm{d} y \int_ {0} ^ {1} f (x, y) \mathrm{d} x
$$

不存在.

类似地, 也有二重积分存在, 但两个二次积分不存在以及两个二次积分存在且相等, 但二重积分不存在的例子.

### 22.2.2 一般区域上的二重积分

设 f 是区域 D 上的可积函数, 又设 D 可以表示为 x 型区域:

$$
D = \{(x, y) \mid y _ {1} (x) \leqslant y \leqslant y _ {2} (x), a \leqslant x \leqslant b \},
$$

其中 $y_{1}(x)$ , $y_{2}(x)$ 为 x 的函数, 且对每一个固定的 $x \in [a, b]$ , 积分

$$
\varphi (x) = \int_ {y _ {1} (x)} ^ {y _ {2} (x)} f (x, y) \mathrm{d} y
$$

存在, 则 $\varphi(x)$ 在 $[a, b]$ 上可积, 且 $f$ 在 $D$ 上的二重积分可化为先对 $y$ 后对 $x$ 的积分

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \int_ {a} ^ {b} \mathrm{d} x \int_ {y _ {1} (x)} ^ {y _ {2} (x)} f (x, y) \mathrm{d} y.
$$

同样地, 如果区域 D 可以表示为 y 型区域

$$
D = \{(x, y) \mid x _ {1} (y) \leqslant x \leqslant x _ {2} (y), c \leqslant y \leqslant d \},
$$

其中 $x_{1}(y)$ , $x_{2}(y)$ 为 y 的函数, 且对每一个固定的 $y \in [a, b]$ , 积分

$$
\psi (y) = \int_ {x _ {1} (y)} ^ {x _ {2} (y)} f (x, y) \mathrm{d} x
$$

存在, 则 $\psi(y)$ 在 $[c,d]$ 上可积, 且有

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \int_ {c} ^ {d} \mathrm{d} y \int_ {x _ {1} (y)} ^ {x _ {2} (y)} f (x, y) \mathrm{d} x.
$$

对于一般区域, 如区域可分成若干个不相交的 x 型区域和 y 型区域的并, 则可先分别计算这些区域上积分的值, 然后通过积分的区域可加性求原积分的值.

在具体计算时, 应根据积分区域和被积函数的情况, 以方便计算为原则, 权衡利弊, 决定采用哪种积分区域的分解与积分顺序. 画出积分区域的草图往往有助于做出正确的选择.

例题22.2.3设区域 $D = \{(x,y)\mid 2y\leqslant x^2 +y^2\leqslant 4y,x\geqslant 0\}$ .分别将 $D$ 表示为 $x$ 型区域和 $y$ 型区域.

解 (1) 表示为 $x$ 型区域, $D$ 可分为三块 (见图22.2), 其中

$$
D _ {1} = \left\{ \begin{array}{l} 0 \leqslant x \leqslant 1, \\ 2 - \sqrt {4 - x ^ {2}} \leqslant y \leqslant 1 - \sqrt {1 - x ^ {2}}, \end{array} \right.
$$

$$
D _ {2} = \left\{ \begin{array}{l} 0 \leqslant x \leqslant 1, \\ 1 + \sqrt {1 - x ^ {2}} \leqslant y \leqslant 2 + \sqrt {4 - x ^ {2}}, \end{array} \right.
$$

$$
D _ {3} = \left\{ \begin{array}{l l} 1 \leqslant x \leqslant 2, \\ 2 - \sqrt {4 - x ^ {2}} \leqslant y \leqslant 2 + \sqrt {4 - x ^ {2}}. \end{array} \right.
$$

(2) 表示为 $y$ 型区域, $D$ 可分为两块 (见图 22.3), 其中

$$
E _ {1} = \left\{ \begin{array}{l l} 0 \leqslant y \leqslant 2, \\ \sqrt {2 y - y ^ {2}} \leqslant x \leqslant \sqrt {4 y - y ^ {2}}, \end{array} \right. E _ {2} = \left\{ \begin{array}{l l} 2 \leqslant y \leqslant 4, \\ 0 \leqslant x \leqslant \sqrt {4 y - y ^ {2}}. \end{array} \right.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/5b6682fe880e4fffffa00a66fa606e177f0297a4fd80a5d2c98efd622b6a26d3.jpg)



图22.2


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/cbebfbe0f8f536181e745dd34fe13650040766807842b2d32da85d345badf4bf.jpg)



图22.3


当 $f(x,y)$ 中含有 $x^{2} + y^{2}$ 项或 $D$ 的边界表达式中有 $x^{2} + y^{2}$ 项，则可利用

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \iint_ {D} f (r \cos \theta , r \sin \theta) r \mathrm{d} r \mathrm{d} \theta\tag{22.3}
$$

先化为极坐标下的二重积分, 然后化为关于 r 和 $\theta$ 的二次积分去求解.

例题 22.2.4 将例题 22.2.3 中的区域 D 分解为 $\theta$ 型区域与 r 型区域.

解 在极坐标系中, D 的边界

$$
x ^ {2} + y ^ {2} = 2 y, x ^ {2} + y ^ {2} = 4 y, x = 0
$$

分别为

$$
r = 2 \sin \theta , r = 4 \sin \theta , \theta = \frac {\pi}{2}.
$$

于是表示为 $\theta$ 型区域是

$$
0 \leqslant \theta \leqslant \frac {\pi}{2}, \quad 2 \sin \theta \leqslant r \leqslant 4 \sin \theta ;
$$

表示为 r 型区域为 (见图 22.4):

$$
D _ {1} = \left\{ \begin{array}{l l} 0 \leqslant r \leqslant 2, \\ \arcsin \frac {r}{4} \leqslant \theta \leqslant \arcsin \frac {r}{2}, \end{array} \right.
$$

$$
D _ {2} = \left\{ \begin{array}{l l} 2 \leqslant r \leqslant 4, \\ \arcsin \frac {r}{4} \leqslant \theta \leqslant \frac {\pi}{2}. \end{array} \right.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/964d46bb7e21d3159f30b10fdd2898e375b3211d5c9c1b7055682fce51fd15b0.jpg)



图22.4


例题22.2.5 求 $\lim_{R\to +\infty}\iint \limits_{\substack{|x|\leqslant R\\ |y|\leqslant R}}(x^2 +y^2)\mathrm{e}^{-(x^2 +y^2)}\mathrm{d}x\mathrm{d}y.$ 

解记

$$
I _ {R} = \iint_ {\substack {| x | \leqslant R \\ | y | \leqslant R}} (x ^ {2} + y ^ {2}) \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y,
$$

$$
C _ {R} = \iint_ {x ^ {2} + y ^ {2} \leqslant R ^ {2}} (x ^ {2} + y ^ {2}) \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y,
$$

则 $C_R \leqslant I_R \leqslant C_{2R}$ , 且

$$
\begin{array}{r l}C _ {R}&= \int_ {0} ^ {2 \pi} \mathrm{d} \theta \int_ {0} ^ {R} r ^ {3} \mathrm{e} ^ {- r ^ {2}} \mathrm{d} r = \pi \int_ {0} ^ {R ^ {2}} t \mathrm{e} ^ {- t} \mathrm{d} t\\&= \pi (1 - \mathrm{e} ^ {- R ^ {2}} - R ^ {2} \mathrm{e} ^ {- R ^ {2}}) \longrightarrow \pi \quad (R \rightarrow + \infty).\end{array}
$$

同理可证 $C_{2R}\to \pi (R\to +\infty)$ .于是

$$
\lim _ {R \rightarrow + \infty} I _ {R} = \pi .
$$

例题 22.2.6 作极坐标变换, 将二重积分

$$
\iint_ {D} f \left(\sqrt {x ^ {2} + y ^ {2}}\right) \mathrm{d} x \mathrm{d} y
$$

化为定积分, 其中 $D=\{(x,y)\mid0\leqslant y\leqslant x\leqslant1\}$ .

解 令 $x = r\cos \varphi, y = r\sin \varphi,$ 则

$$
\begin{array}{r l} & \iint_ {D} f (\sqrt {x ^ {2} + y ^ {2}}) \mathrm{d} x \mathrm{d} y = \iint_ {D} f (r) r \mathrm{d} r \mathrm{d} \varphi \\ & = \int_ {0} ^ {1} \mathrm{d} r \int_ {0} ^ {\pi / 4} f (r) r \mathrm{d} \varphi + \int_ {1} ^ {\sqrt {2}} \mathrm{d} r \int_ {\arccos (1 / r)} ^ {\pi / 4} f (r) r \mathrm{d} \varphi \\ & = \frac {\pi}{4} \int_ {0} ^ {1} f (r) r \mathrm{d} r + \int_ {1} ^ {\sqrt {2}} \left(\frac {\pi}{4} - \arccos \frac {1}{r}\right) f (r) r \mathrm{d} r \\ & = \frac {\pi}{4} \int_ {0} ^ {\sqrt {2}} f (r) r \mathrm{d} r - \int_ {1} ^ {\sqrt {2}} \arccos \frac {1}{r} f (r) r \mathrm{d} r. \end{array}
$$

### 22.2.3 二重积分的变量替换

极坐标变换 (见 (22.3) 式) 是一种特殊的变量替换, 下面是一般的变量替换定理. 设

$$
x = x (u, v), \quad y = y (u, v), \quad (u, v) \in D ^ {\prime},
$$

这一代换满足：

(1) 建立了 $D$ 与 $D'$ 之间的一一对应;

(2) x, y 在 $D'$ 上具有关于各个变元的连续偏导数，并且其逆变换 $u = u(x, y)$ ， $v = v(x, y)$ 在 D 上也具有关于各个变元的连续偏导数；

(3) 代换的 Jacobi 行列式 $J = \frac{\partial(x, y)}{\partial(u, v)}$ 在 $D'$ 内无零点 (称这代换为正则), 则

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \iint_ {D ^ {\prime}} f (x (u, v), y (u, v)) \left| \frac {\partial (x , y)}{\partial (u , v)} \right| \mathrm{d} u \mathrm{d} v.\tag{22.4}
$$

回忆一下 (一元) 定积分的变量替换公式, 容易看出公式 (22.4) 是定积分的变量替换公式的推广. 定理的证明要比一元情况复杂得多, 请参考相应的教科书.

例题22.2.7 求由曲线 $\left(\frac{x^2}{a^2} + \frac{y^2}{b^2}\right)^2 = \frac{x^2}{a^2} - \frac{y^2}{b^2}$ 所围的面积.

解 应用广义极坐标变换

$$
x = a \rho \cos \theta , \quad y = b \rho \sin \theta ,
$$

则 $J = \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = ab\rho ,$ 所围成积分区域的曲线变为 $\rho^2 = \cos 2\theta$ （双纽线），于是所求的面积

$$
S = \iint_ {D} \mathrm{d} x \mathrm{d} y = 4 \int_ {0} ^ {\pi / 4} \mathrm{d} \theta \int_ {0} ^ {\sqrt {\cos 2 \theta}} a b \rho \mathrm{d} \rho = a b.
$$

例题22.2.8 求 $\iint_{D} \left( \sqrt{\frac{x - c}{a}} + \sqrt{\frac{y - c}{b}} \right) \mathrm{d}x \mathrm{d}y$ ，其中 $D$ 由曲线 $\sqrt{\frac{x - c}{a}} + \sqrt{\frac{y - c}{b}} = 1$ 和 $x = c, y = c$ 所围成，并且 $a, b, c > 0$ .

解 见图 22.5, 被积函数与积分区域的部分边界具有相同的形式, 因此要设法把被积函数表达式化成简单的形式.

$$
\begin{array}{r l} & {\text {令}} \\ & {x = c + a \rho \cos^ {4} \theta , \quad y = c + b \rho \sin^ {4} \theta ,} \\ & {\text {则}} \end{array}
$$

$$
J = \left| \frac {\partial (x , y)}{\partial (\rho , \theta)} \right| = 4 a b \rho \cos^ {3} \theta \sin^ {3} \theta .
$$

而积分区域变为 $\{0 \leqslant \theta \leqslant \frac{\pi}{2}, 0 \leqslant \rho \leqslant 1\}$ ,
于是

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/9c8960861878c86649cc209637c0284f6799e492c7cc9b66f78efb56befe9164.jpg)



图22.5


$$
\iint_ {D} \left(\sqrt {\frac {x - c}{a}} + \sqrt {\frac {y - c}{b}}\right) \mathrm{d} x \mathrm{d} y = \int_ {0} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {1} 4 a b \rho \cos^ {3} \theta \sin^ {3} \theta \sqrt {\rho} \mathrm{d} \rho = \frac {2 a b}{1 5}.
$$

注 一般而言, 广义极坐标变换

$$
x = \frac {1}{a} \left(c + r ^ {\frac {1}{p}} \cos^ {\frac {2}{p}} \theta\right), \quad y = \frac {1}{b} \left(d + r ^ {\frac {1}{p}} \sin^ {\frac {2}{p}} \theta\right),
$$

能把 $(ax - c)^p + (by - d)^p$ 变为 $r$ , 但其中的 $r, \theta$ 一般不再具有通常的极径, 极角的意义.

例题 22.2.9 求 $I=\iint_{\Omega}(x+y)\,\mathrm{d}x\,\mathrm{d}y$ ，其中 $\Omega$ 是由 $y^{2}=2x, x+y=4, x+y=12$ 围成.

解 积分区域如图 22.6, 作变换

$$
u = x + y, \quad v = y,
$$

则变换后的积分区域为

$$
\begin{array}{c} {4 \leqslant u \leqslant 1 2,} \\ {- 1 - \sqrt {2 u + 1} \leqslant v \leqslant - 1 + \sqrt {2 u + 1},} \end{array}
$$

且 $J = \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = 1.$ 于是

$$
\begin{array}{r l} I & = \int_ {4} ^ {1 2} u \mathrm{d} u \int_ {- 1 - \sqrt {2 u + 1}} ^ {- 1 + \sqrt {2 u + 1}} \mathrm{d} v \\ & = \int_ {4} ^ {1 2} 2 u \sqrt {2 u + 1} \mathrm{d} u \quad (\sqrt {2 u + 1} = t) \\ & = \int_ {3} ^ {5} (t ^ {2} - 1) t ^ {2} \mathrm{d} t = \frac {8 1 5 6}{1 5}. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/90ffe914d240416e19ac043c09c3327666f7a475fb07f8e6922d1d2bccf0426f.jpg)



图22.6


函数的奇偶性和积分区域的对称性常可用来简化积分的计算，如

1. 积分区域 D 关于 x 轴对称, 且有: (1) $f(x,y) = -f(x,-y)$ , 则 $\iint_{D} f(x,y) \, dx \, dy = 0$ ; (2) $f(x,y) = f(x,-y)$ , 则 $\iint_{D} f(x,y) \, dx \, dy = 2 \iint_{D \cap \{y \geqslant 0\}} f(x,y) \, dx \, dy$ .

2. 积分区域 $D$ 关于 $y$ 轴对称, 且有: (1) $f(x,y) = -f(-x,y)$ , 则 $\iint_{D} f(x,y) \mathrm{d}x \mathrm{d}y = 0$ ; (2) $f(x,y) = f(-x,y)$ , 则 $\iint_{D} f(x,y) \mathrm{d}x \mathrm{d}y = 2 \iint_{D \cap \{x \geqslant 0\}} f(x,y) \mathrm{d}x \mathrm{d}y$ .

3. 若 $D$ 关于原点对称, 且有: $(1)f(x,y) = -f(-x,-y)$ , 则 $\iint_{0} f(x,y) \, \mathrm{d}x \, \mathrm{d}y = 0$ ;

(2) $f(x,y)=f(-x,-y)$ ，则 $\iint_{D}f(x,y)\mathrm{d}x\mathrm{d}y=2\iint_{D_{1}}f(x,y)\mathrm{d}x\mathrm{d}y$ ，其中 $D_{1}$ 是区域D的一半.

### 22.2.4 练习题

1. 试把累次积分

$$
I = \int_ {0} ^ {R / \sqrt {1 + R ^ {2}}} \mathrm{d} x \int_ {0} ^ {R x} f (x, y) \mathrm{d} y + \int_ {R / \sqrt {1 + R ^ {2}}} ^ {R} \mathrm{d} x \int_ {0} ^ {\sqrt {R ^ {2} - x ^ {2}}} f (x, y) \mathrm{d} y
$$

改写为先对 x 后对 y 的累次积分形式.

2. 设 $f(x)$ 在 $[0,1]$ 上连续, 证明:

$$
\int_ {0} ^ {1} \mathrm{d} x \int_ {x} ^ {1} f (t) \mathrm{d} t = \int_ {0} ^ {1} t f (t) \mathrm{d} t.
$$

3. D 由 $y = \pi - x, x = \pi, y = \pi$ 围成，求 $\iint_{D} \frac{\sin x}{x} \, dx \, dy$ .

4. D 由 $y = 0, y = x^{2}, x + y = 2$ 围成的第一象限的部分，求 $\iint_{D} (x^{2} + y^{2}) \, dx \, dy$ .

5. 求由 $(x^{2} + y^{2})^{2} = a^{2}(x^{2} - y^{2}), z = x^{2} - y^{2}, z = 0$ 围成之立体的体积.

6. 设 D 是由 $x^{2}=ay, x^{2}=by, y^{2}=px, y^{2}=qx$ 所围成的区域, 其中 0<a<b, 0<p<q, 求 $\iint_{D}\frac{x^{2}\sin xy}{y}dx dy$ .

7. 证明: $\int_{a}^{b} \mathrm{d}y \int_{a}^{y} (y - x)^{n} f(x) \, \mathrm{d}x = \frac{1}{n + 1} \int_{a}^{b} (b - x)^{n + 1} f(x) \, \mathrm{d}x$ .

8. 设 D 是第一象限内由 y 轴及两个圆 $x^{2} + y^{2} = a^{2}, x^{2} - 2ax + y^{2} = 0$ 所围成的区域, 求 $\iint_{D} \sqrt{x^{2} + y^{2}} \, dx \, dy$ .

9. 求由四条直线 $x + y = p, x + y = q, y = ax, y = bx$ (0 < p < q, 0 < a < b) 所围成的图形的面积.

10. 求由曲线 $\sqrt[4]{\frac{x}{a}} + \sqrt[4]{\frac{y}{b}} = 1$ 与直线 x = 0, y = 0 所围成图形的面积.

11. 求 $\iint_{D} f(\sqrt{x^2 + y^2}) \, \mathrm{d}x \, \mathrm{d}y$ , 其中 $D = \{(x, y) \mid |y| < |x| \leqslant 1\}$ .

12. 求 $\iint_{D} x \, dx \, dy$ ，其中 D 由 $xy = 1, x^{2} + y^{2} = 4$ 围成.

13. 给定积分 $I = \iint_{D} \left[ \left( \frac{\partial f}{\partial x} \right)^2 + \left( \frac{\partial f}{\partial y} \right)^2 \right] \mathrm{d}x \mathrm{d}y$ ，作正则变换 $x = x(u, v), y = y(u, v)$ ，区域 $D$ 变为 $\Omega$ ，如果变换满足

$$
\frac {\partial x}{\partial u} = \frac {\partial y}{\partial v}, \quad \frac {\partial x}{\partial v} = - \frac {\partial y}{\partial u},
$$

证明：

$$
I = \iint_ {\Omega} \left[ \left(\frac {\partial f}{\partial u}\right) ^ {2} + \left(\frac {\partial f}{\partial v}\right) ^ {2} \right] \mathrm{d} u \mathrm{d} v.
$$

14. 求积分

$$
\int_ {0} ^ {\sqrt {2}} \mathrm{d} y \int_ {y} ^ {\sqrt {4 - y ^ {2}}} \frac {1}{\sqrt {1 + x ^ {2} + y ^ {2}}} \mathrm{d} x.
$$

15. 证明：

$$
\iint_ {| x | + | y | \leqslant 1} \left(\sqrt {| x y |} + | x y |\right) \mathrm{d} x \mathrm{d} y \leqslant \frac {3}{2}.
$$

16. 计算二重积分

$$
I = \iint_ {D} | x - y ^ {2} | \mathrm{d} x \mathrm{d} y,
$$

其中 $D=\{(x,y)\mid0\leqslant x\leqslant1,-1\leqslant y\leqslant1\}$ .

17. 求 $\iint_{D}\ln\frac{x}{y^{2}}dx dy,$ 其中 D 是由 y=x, y=1, x=2 围成的三角形.

## §22.3 三重积分, n 重积分

三重积分的定义与二重积分类似, 这里不再重复.

### 22.3.1 三重积分在直角坐标系中的计算

1. 先一后二：即先做一次关于某个变量的单积分，然后做关于另外两个变量的二重积分.

设 $\Omega$ 是 $\mathbf{R}^3$ 中的有界区域, 假设平行于 $z$ 轴且穿过闭区域 $\Omega$ 内部的直线与 $\Omega$ 的边界相交不多于两点. 把 $\Omega$ 投影到 $xOy$ 平面上, 得一平面闭区域 $D$ , 即 (见图22.7):

$$
\begin{array}{c} \Omega = \{(x, y, z) \mid (x, y) \in D, \\ z _ {1} (x, y) \leqslant z \leqslant z _ {2} (x, y) \}, \end{array}
$$

其中 $z_{1}(x,y),z_{2}(x,y)$ 在 $D$ 上连续.如果 $f(x,y,z)$ 在 $\Omega$ 上有界可积，且对任意 $(x,y)\in$ $D,f(x,y,z)$ 作为 $z$ 的函数在 $[z_1(x,y),z_2(x,y)]$ 上可积，则

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/bec0af400b218efa84efb8444648f56edac0d4e4b8a04132e7e88e127e1f8a0f.jpg)



图22.7


$$
\iiint_ {D} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {D} \mathrm{d} x \mathrm{d} y \int_ {z _ {1} (x, y)} ^ {z _ {2} (x, y)} f (x, y, z) \mathrm{d} z.
$$

此种积分方法称为“先一后二”.

2. 先二后一: 即先作关于某两个变量的二重积分, 然后做关于另一个变量的单积分. 这种积分方法对区域没有任何特殊要求. 设

$$
\Omega = \{(x, y, z) \mid a \leqslant z \leqslant b, (x, y) \in D (z) \},
$$

其中 $D(z)$ 是 $xOy$ 平面上随 $z$ 连续变化的有界闭区域. 如果 $f(x,y,z)$ 在 $\Omega$ 上有界可积, 对任意 $z \in [a,b], f(x,y,z)$ 作为 $x,y$ 的函数在 $D(z)$ 上可积, 则

$$
\iiint_ {D} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \int_ {a} ^ {b} \mathrm{d} z \iint_ {D (z)} f (x, y, z) \mathrm{d} x \mathrm{d} y.
$$

对这个公式可这样来理解：把 $\Omega$ 看作是一个物质立体， $f(x, y, z)$ 为物质在 $\Omega$ 上的分布密度，那么上式左端的三重积分就是物质立体的质量。而上式右端则表明先把立体切成薄片，再把所有薄片的质量积累起来。

当然, 我们不一定非固定 $z$ 而先计算关于 $x, y$ 的二重积分不可, 也可根据被积函数的具体情况和积分域的构成, 把 $y$ (或 $x$ ) 固定而先计算关于 $z, x$ (或 $y, z$ ) 的二重积分.

例题22.3.1 求积分

$$
I = \iiint_ {\Omega} z ^ {2} \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 $\Omega$ 为两个球 $x^{2} + y^{2} + z^{2}\leqslant R^{2},x^{2} + y^{2} + z^{2}\leqslant 2Rz$ 的公共部分.

解 先画出积分区域, 如图 22.8.

综合被积函数和积分区域, 可把积分视成在 $z \in [0, R]$ 上一系列带权 $z^{2}$ 的小薄片的求和. 根据积分区域 $\Omega$ 的构成情况, 可将 $\Omega$ 分成两个子区域 $\Omega_{1}$ 与 $\Omega_{2}$ .

$$
\Omega_ {1}: \left\{ \begin{array}{l} x ^ {2} + y ^ {2} + z ^ {2} \leqslant 2 R z, \\ 0 \leqslant z \leqslant \frac {R}{2}, \end{array} \right.
$$

$$
\Omega_ {2}: \left\{ \begin{array}{l} x ^ {2} + y ^ {2} + z ^ {2} \leqslant R ^ {2}, \\ \frac {R}{2} \leqslant z \leqslant R. \end{array} \right.
$$

当 $z \in \left[0, \frac{R}{2}\right]$ 时，由 $x^{2} + y^{2} + z^{2} \leqslant 2Rz$ 可得到薄片面积为 $\pi(2Rz - z^2)$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/9938a721d5f1f07ca5c65a214fd6770ada4886e32b7328a3f246de52e5b1cb88.jpg)


当 $z \in \left[\frac{R}{2}, R\right]$ 时，由 $x^{2} + y^{2} + z^{2} \leqslant R^{2}$ 可得到薄片面积为 $\pi(R^{2} - z^{2})$ 。所以


图22.8


$$
\begin{array}{r l} I & = \int_ {0} ^ {R / 2} \pi z ^ {2} (2 R z - z ^ {2}) \mathrm{d} z + \int_ {R / 2} ^ {R} \pi z ^ {2} (R ^ {2} - z ^ {2}) \mathrm{d} z \\ & = \left(\frac {1}{2} \pi R z ^ {4} - \frac {1}{5} \pi z ^ {5}\right) \Big | _ {0} ^ {R / 2} + \left(\frac {1}{3} \pi R ^ {2} z ^ {3} - \frac {1}{5} \pi z ^ {5}\right) \Big | _ {R / 2} ^ {R} = \frac {5 9}{4 8 0} \pi R ^ {5}. \end{array}
$$

### 22.3.2 三重积分的变量替换

类似于二重积分的变量替换, 有如下三重积分变量替换定理. 设

$$
x = x (u, v, w), \quad y = y (u, v, w), \quad z = z (u, v, w), \quad (u, v, w) \in \Omega^ {\prime}.
$$

这一代换满足：

(1) 建立了 $\Omega$ 与 $\Omega'$ 之间的一一对应;

(2) $x, y, z$ 在 $\Omega'$ 上关于各个变元有连续偏导数，并且逆变换 $u = u(x, y, z)$ ，

$v = v(x, y, z)$ , $w = w(x, y, z)$ 在 $\Omega$ 上也关于各个变元有连续偏导数;

(3) 代换的 Jacobi 行列式 $J = \frac{\partial(x, y, z)}{\partial(u, v, w)}$ 在 $\Omega'$ 内没有零点，则

$$
\iiint_ {\Omega} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iiint_ {\Omega^ {\prime}} f (x (u, v, w), y (u, v, w), z (u, v, w)) \left| \frac {\partial (x , y , z)}{\partial (u , v , w)} \right| \mathrm{d} u \mathrm{d} v \mathrm{d} w.
$$

常用的三重积分变换有下列两个.

#### (1) 柱坐标变换

$$
\begin{array}{c} {x = \rho \cos \theta , y = \rho \sin \theta , z = z,} \\ {0 \leqslant \rho <   + \infty , 0 \leqslant \theta <   2 \pi , - \infty <   z <   + \infty .} \end{array}
$$

空间直角坐标系下的三重积分与柱坐标系下的三重积分的关系是

$$
\iiint_ {\Omega} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iiint_ {\Omega^ {\prime}} f (\rho \cos \theta , \rho \sin \theta , z) \rho \mathrm{d} \rho \mathrm{d} \theta \mathrm{d} z.
$$

如果积分区域为柱形或被积函数中含有 $x^{2} + y^{2}$ 项，则往往将积分在柱坐标系中计算.在计算时，常常是把三重积分化为对 $z$ 的单积分与关于 $\rho ,\theta$ 的二重积分来计算，至于是“先一后二”，还是“先二后一”，那要看具体情况.

我们可以看出, 柱坐标变换就是 z 不变, 而将 x, y 用极坐标变换. 在二重积分中我们曾提到广义极坐标变换, 因此对应过来也有广义柱坐标变换.

#### (2) 球坐标变换

$$
\begin{array}{r l} & x = \rho \sin \varphi \cos \theta , y = \rho \sin \varphi \sin \theta , z = \rho \cos \varphi , \\ & 0 \leqslant \rho <   + \infty , 0 \leqslant \theta <   2 \pi , 0 \leqslant \varphi \leqslant \pi . \end{array}
$$

空间直角坐标系下的三重积分与球坐标系下的三重积分的关系是

$$
\iiint_ {\Omega} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iiint_ {\Omega^ {\prime}} f (\rho \sin \varphi \cos \theta , \rho \sin \varphi \sin \theta , \rho \cos \varphi) \rho^ {2} \sin \varphi \mathrm{d} \rho \mathrm{d} \theta \mathrm{d} \varphi .
$$

注 利用球坐标系计算三重积分, 一般说来适用于积分区域是球心在原点或过原点而球心在坐标轴上的球体, 顶点在原点以坐标轴为旋转轴的圆锥体以及被积函数中出现 $x^{2} + y^{2} + z^{2}$ 的三重积分.

使用球坐标时对 $\rho, \theta, \varphi$ 的几何意义要十分清楚. 比如在我们上面给出的球坐标变换下, $\rho$ 是球半径 $(0 \leqslant \rho \leqslant +\infty)$ , $\theta$ 是转动角 $(0 \leqslant \theta \leqslant 2\pi)$ , $\varphi$ 是仰角 (与 $z$ 轴正向的夹角, $0 \leqslant \varphi \leqslant \pi$ ). 在有的教科书上给出了几种不相同的球坐标系, 建议只取一种记忆, 以免混淆. 此外对应于二重积分的广义极坐标变换, 也有广义球坐标变换.

### 22.3.3 例题

例题22.3.2 求 $I = \iiint_{\Omega} (x + y) \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z$ ，其中 $\Omega$ 为由 $x = 0, x = 1, x^2 + 1 = \frac{y^2}{a^2} + \frac{z^2}{b^2}$ 所围成.

解 由积分区域 (见图 22.9) 的构成宜采用“先二后一”的积分次序.

$$
I = \int_ {0} ^ {1} \mathrm{d} x \iint_ {D (x)} (x + y) \mathrm{d} y \mathrm{d} z,
$$

其中 $D(x) = \{(x,y,z)\mid \frac{y^2}{a^2} +\frac{z^2}{b^2}\leqslant 1 + x^2\} .$ 对于二重积分 $\iint_{D(x)}y\mathrm{d}y\mathrm{d}z,$ 由于 $D(x)$ 在 $yOz$ 平面上的投影关于原点对称，且 $f(y,z) = y = -f(-y, - z)$ .由22.2.3小节中最后一部分关于简化积分的说明知 $\iint_{D(x)}y\mathrm{d}y\mathrm{d}z = 0,$ 而

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/6fba15065b91150551fb2edc43f8544370dad9bf6e4e2b63db8b3388738af9bf.jpg)



图22.9


$$
\iint_ {D (x)} x \mathrm{d} y \mathrm{d} z = \pi a b x (1 + x ^ {2}).
$$

于是

$$
I = \pi a b \int_ {0} ^ {1} x (1 + x ^ {2}) \mathrm{d} x = \frac {3}{4} \pi a b.
$$

例题22.3.3 计算积分

$$
H = \iiint \limits_{\substack{x,y,z\geqslant 0\\ x^{2} + y^{2} + z^{2}\leqslant R^{2}}}\frac{xyz\mathrm{d}x\mathrm{d}y\mathrm{d}z}{\sqrt{a^{2}x^{2} + b^{2}y^{2} + c^{2}z^{2}}},\quad \text{其中} a > b > c > 0.
$$

解 在球坐标下

$$
H = \int_ {0} ^ {\pi / 2} \int_ {0} ^ {\pi / 2} \int_ {0} ^ {R} \frac {r ^ {4} \sin^ {3} \varphi \cos \varphi \sin \theta \cos \theta \mathrm{d} r \mathrm{d} \varphi \mathrm{d} \theta}{\sqrt {a ^ {2} \sin^ {2} \varphi \cos^ {2} \theta + b ^ {2} \sin^ {2} \varphi \sin^ {2} \theta + c ^ {2} \cos^ {2} \varphi}}.
$$

令 $\sin^2\varphi = u,\sin^2\theta = v$ ，则

$$
\begin{array}{l} H = \frac {1}{4} \int_ {0} ^ {1} \int_ {0} ^ {1} \int_ {0} ^ {R} r ^ {4} \frac {u \mathrm{d} r \mathrm{d} u \mathrm{d} v}{\sqrt {a ^ {2} u (1 - v) + b ^ {2} u v + c ^ {2} (1 - u)}} \\ = \frac {1}{2 0} R ^ {5} \int_ {0} ^ {1} u \mathrm{d} u \int_ {0} ^ {1} \frac {\mathrm{d} v}{\sqrt {[ c ^ {2} + (a ^ {2} - c ^ {2}) u ] + (b ^ {2} - a ^ {2}) u v}} \\ = \frac {1}{2 0} R ^ {5} \int_ {0} ^ {1} \left\{\frac {2}{(b ^ {2} - a ^ {2}) u} \sqrt {[ c ^ {2} + (a ^ {2} - c ^ {2}) u ] + (b ^ {2} - a ^ {2}) u v} \right\} \Big | _ {v = 0} ^ {v = 1} u \mathrm{d} u \\ = \frac {R ^ {5}}{1 0 (b ^ {2} - a ^ {2})} \int_ {0} ^ {1} \left\{\sqrt {[ c ^ {2} + (a ^ {2} - c ^ {2}) u ] + (b ^ {2} - a ^ {2}) u} - \sqrt {c ^ {2} + (a ^ {2} - c ^ {2}) u} \right\} \mathrm{d} u \\ = \frac {R ^ {5}}{1 0 (b ^ {2} - a ^ {2})} \left\{\frac {2}{3 (b ^ {2} - c ^ {2})} [ c ^ {2} + (b ^ {2} - c ^ {2}) u ] ^ {\frac {3}{2}} - \frac {2}{3 (a ^ {2} - c ^ {2})} [ c ^ {2} + (a ^ {2} - c ^ {2}) u ] ^ {\frac {3}{2}} \right\} \Big | _ {0} ^ {1} \\ = \frac {R ^ {5}}{1 0 (b ^ {2} - a ^ {2})} \left[ \frac {2}{3 (b ^ {2} - c ^ {2})} (b ^ {3} - c ^ {3}) - \frac {2}{3 (a ^ {2} - c ^ {2})} (a ^ {3} - c ^ {3}) \right] \\ = \frac {R ^ {5}}{1 5} \cdot \frac {1}{b ^ {2} - a ^ {2}} \left(\frac {b ^ {2} + b c + c ^ {2}}{b + c} - \frac {a ^ {2} + a c + c ^ {2}}{a + c}\right) \\ = \frac {R ^ {5}}{1 5} \cdot \frac {a b + b c + c a}{(a + b) (b + c) (c + a)}. \end{array}
$$

□ 

例题22.3.4设 $H(x) = \sum_{i,j = 1}^{3}a_{ij}x_{i}x_{j},\pmb {A} = (a_{ij})$ 是3阶正定对称阵.求

$$
I = \iiint_ {H (x) \leqslant 1} \mathrm{e} ^ {\sqrt {H (x)}} \mathrm{d} x _ {1} \mathrm{d} x _ {2} \mathrm{d} x _ {3}.
$$

解 存在 3 阶正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\mathrm{T}} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c} \lambda_ {1} & 0 & 0 \\ 0 & \lambda_ {2} & 0 \\ 0 & 0 & \lambda_ {3} \end{array} \right),
$$

其中 $\lambda_{i}>0, i=1,2,3.$ 作正交变换 x=Py，这里 $x, y \in R^{3}$ ，则

$$
H (\boldsymbol {x}) = H (\boldsymbol {P} \boldsymbol {y}) = \lambda_ {1} y _ {1} ^ {2} + \lambda_ {2} y _ {2} ^ {2} + \lambda_ {3} y _ {3} ^ {2},
$$

且变换的Jacobi行列式 $\operatorname{det}P\equiv 1$ ，从而

$$
I = \iiint_ {\lambda_ {1} y _ {1} ^ {2} + \lambda_ {2} y _ {2} ^ {2} + \lambda_ {3} y _ {3} ^ {2} \leqslant 1} \mathrm{e} ^ {\sqrt {\lambda_ {1} y _ {1} ^ {2} + \lambda_ {2} y _ {2} ^ {2} + \lambda_ {3} y _ {3} ^ {2}}} \mathrm{d} y _ {1} \mathrm{d} y _ {2} \mathrm{d} y _ {3}.
$$

令

$$
\begin{array}{l} {y _ {1} = \frac {1}{\sqrt {\lambda_ {1}}} r \sin \varphi \cos \theta , y _ {2} = \frac {1}{\sqrt {\lambda_ {2}}} r \sin \varphi \sin \theta ,} \\ {y _ {3} = \frac {1}{\sqrt {\lambda_ {3}}} r \cos \varphi ,} \end{array}
$$

则

$$
\begin{array}{r l} I & = \frac {1}{\sqrt {\lambda_ {1} \lambda_ {2} \lambda_ {3}}} \int_ {0} ^ {2 \pi} \mathrm{d} \theta \int_ {0} ^ {\pi} \mathrm{d} \varphi \int_ {0} ^ {1} r ^ {2} \mathrm{e} ^ {r} \sin \varphi \mathrm{d} r \\ & = \frac {4 \pi}{\sqrt {\lambda_ {1} \lambda_ {2} \lambda_ {3}}} \int_ {0} ^ {1} r ^ {2} \mathrm{e} ^ {r} \mathrm{d} r = \frac {4 \pi}{\sqrt {\lambda_ {1} \lambda_ {2} \lambda_ {3}}} (\mathrm{e-2}). \end{array}
$$

由于 A 的行列式 $\det A = \lambda_{1} \lambda_{2} \lambda_{3}$ ，所以

$$
I = \frac {4 \pi}{\sqrt {\det A}} (\mathrm{e} - 2).
$$

注 正交变换是一种很有用的坐标变换. 它的特点是刚体变换, 仅仅旋转坐标轴, 保持区域体积不变. 特别是保持单位球不变.

### 22.3.4 $n$ 重积分

以四重积分为例, 按照三重积分的思路, 可以采用“先一后三”或者“先三后一”或者“先二后二”的积分次序, 而对于其中的“三”或者“二”, 则采用三重积分或者二重积分化累次积分的方法. 也可以用四维的变量替换.

例题22.3.5 求四维空间中的单位球

$$
x ^ {2} + y ^ {2} + z ^ {2} + t ^ {2} \leqslant a ^ {2}
$$

的体积 V.

解 用四维空间中的球坐标变换

$$
\begin{array}{l l} x = r \sin \varphi_ {1} \sin \varphi_ {2} \cos \theta , & y = r \sin \varphi_ {1} \sin \varphi_ {2} \sin \theta , \\ z = r \sin \varphi_ {1} \cos \varphi_ {2}, & t = r \cos \varphi_ {1}, \end{array}\tag{22.5}
$$

(22.6) 

其中 $0 \leqslant r \leqslant a, 0 \leqslant \theta < 2\pi, 0 \leqslant \varphi_1, \varphi_2 \leqslant \pi$ ，则

$$
\left| \frac {\partial (x , y , z , t)}{\partial (r , \varphi_ {1} , \varphi_ {2} , \theta)} \right| = r ^ {3} \sin^ {2} \varphi_ {1} \sin \varphi_ {2}.
$$

于是

$$
\begin{array}{l} V = \iiint_ {x ^ {2} + y ^ {2} + z ^ {2} + t ^ {2} \leqslant a ^ {2}} \mathrm{d} x \mathrm{d} y \mathrm{d} z \mathrm{d} t \\ = \int_ {0} ^ {2 \pi} \mathrm{d} \theta \int_ {0} ^ {\pi} \mathrm{d} \varphi_ {1} \int_ {0} ^ {\pi} \mathrm{d} \varphi_ {2} \int_ {0} ^ {a} r ^ {3} \sin^ {2} \varphi_ {1} \sin \varphi_ {2} \mathrm{d} r \\ = \frac {\pi a ^ {4}}{2} \int_ {0} ^ {\pi} \sin^ {2} \varphi_ {1} \mathrm{d} \varphi_ {1} \int_ {0} ^ {\pi} \sin \varphi_ {2} \mathrm{d} \varphi_ {2} = \frac {\pi^ {2} a ^ {4}}{2}. \end{array}
$$

### 22.3.5 练习题

1. 计算积分

$$
\int_ {0} ^ {1} \mathrm{d} x \int_ {0} ^ {1 - x} \mathrm{d} z \int_ {0} ^ {1 - z - x} (1 - y) \mathrm{e} ^ {- (1 - y - z) ^ {2}} \mathrm{d} y.
$$

2. 将累次积分

$$
\int_ {0} ^ {2} \mathrm{d} x \int_ {- \sqrt {2 x - x ^ {2}}} ^ {0} \mathrm{d} y \int_ {0} ^ {x} f (x, y, z) \mathrm{d} z
$$

化为在柱坐标系下的累次积分.

3. 求 $\iiint_{\Omega}(x^{2}+y^{2})\mathrm{d}x\mathrm{d}y\mathrm{d}z,$ 其中 $\Omega$ 是由曲线 $y^{2}=2z, x=0$ 绕 z 轴旋转而成的曲面，平面 z=2 与平面 z=8 所围成的区域.

4. 求 $\iiint_{\Omega} xyz \, dx \, dy \, dz$ ，其中 $\Omega$ 为 $x^{2} + y^{2} + z^{2} \leqslant 4$ 与 $x^{2} + y^{2} + (z - 2)^{2} \leqslant 4$ 的公共部分，且 $x \geqslant 0, y \geqslant 0$ .

5. 求 $\iiint_{\Omega}\frac{dx\,dy\,dz}{r}$ ，其中 $\Omega$ 为一半径为 R 的球，r 为球外一固定点到球域内任一点的距离.

6. 计算积分 $I = \iiint_{\Omega} \frac{xyz}{x^2 + y^2} \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z$ ，其中 $\Omega$ 由曲面 $(x^2 + y^2 + z^2)^2 = a^2xy$ 与平面 $z = 0$ 所围成，曲面在上方，平面在下方.

7. 求

$$
\iiint \limits_{\substack{x,y,z,u\geqslant 0\\ x^{2} + y^{2} + z^{2} + u^{2}\leqslant 1}}\sqrt{\frac{1 - x^{2} - y^{2} - z^{2} - u^{2}}{1 + x^{2} + y^{2} + z^{2} + u^{2}}}\mathrm{d}x\mathrm{d}y\mathrm{d}z\mathrm{d}u.
$$

8. 设

$$
F (t) = \iiint_ {x ^ {2} + y ^ {2} + z ^ {2} \leqslant t ^ {2}} f (x ^ {2} + y ^ {2} + z ^ {2}) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 f 为连续函数, $f(1)=1$ . 证明: $F'(1)=4\pi$ .

9. 设 $f(x, y, z) = \sqrt{x^2 + y^2 + z^2}$ , 区域 $\Omega \subset \mathbf{R}^3$ 由 $z \geqslant \sqrt{x^2 + y^2}$ 和 $4 \leqslant x^2 + y^2 + z^2 \leqslant 16$ 所确定, 试计算函数 $f$ 关于 $\Omega$ 的积分平均值

$$
\frac {1}{| \Omega |} \iiint_ {\Omega} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 $|\Omega|$ 是 $\Omega$ 的体积.

10. 设区域 $\Omega$ 由 $z = x^{2} + y^{2}, z = 0, xy = 1, xy = 2, y = 3x, y = 4x$ 所围成，求积分

$$
I = \iiint_ {\Omega} x ^ {2} y ^ {2} z \mathrm{d} x \mathrm{d} y \mathrm{d} z.
$$

11. 利用正交变换计算三重积分 $\iiint_{V} \cos(ax + by + cz) \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z$ . 其中 $V: x^2 + y^2 + z^2 \leqslant 1, a, b, c$ 是不全为零的常数.

## §22.4 广义重积分

### 22.4.1 广义重积分的定义

与上册第十二章类似, 对于重积分也可作两方面的推广: 无界区域上的积分和无界函数的积分. 我们仅考虑 $\mathbf{R}^2$ 的情况, 其结论很容易推广到 $\mathbf{R}^n (n \geqslant 3)$ 中去.

先考虑无界区域上的广义二重积分.

设 $D$ 是 $\mathbf{R}^2$ 中的无界区域, 其边界由有限条光滑或逐段光滑曲线组成. 函数 $f$ 定义在 $D$ 上, 且在 $D$ 内的任何可求面积的有界子区域上可积. 设 $D_r$ 是 $D$ 内的任一可求面积的有界子区域, 包含 $D \cap B_r$ , 其中 $B_r$ 是 $\mathbf{R}^2$ 中以 $r$ 为半径的闭圆盘. 若极限

$$
I = \lim _ {r \rightarrow + \infty} \iint_ {D _ {r}} f (x, y) \mathrm{d} x \mathrm{d} y
$$

存在且有限, 并与 $D_{r}$ 的取法无关, 则称 $f$ 在 $D$ 上的 (广义) 积分收敛, 或者称 $f$ 在 $D$ 上广义可积. 否则称 $f$ 在 $D$ 上的 (广义) 积分发散. 极限值 $I$ 称为 $f$ 在 $D$ 上的广义积分的值, 记为 $\iint_{D} f(x, y) \, \mathrm{d}x \, \mathrm{d}y$ .

如果函数 f 非负, 且在 D 内的任何可求面积的有界子区域上可积, $D_{n}$ 是包含 $D \cap B_{n}, n = 1, 2, \cdots$ 的一列可求面积的有界子区域, 则 f 在 D 上可积的充分必要条件是

$$
\lim _ {n \rightarrow \infty} \iint_ {D _ {n}} f (x, y) \mathrm{d} x \mathrm{d} y
$$

存在. 这个条件也相当于

$$
\sup _ {n} \left\{\iint_ {D _ {n}} f (x, y) \mathrm{d} x \mathrm{d} y <   + \infty \right\}.
$$

无界函数在有界区域上的广义二重积分可定义如下：

设 $D$ 为 $\mathbf{R}^2$ 上的可求面积的有界区域, 点 $\pmb{p}_0 \in D$ , 函数 $f$ 定义在 $D \setminus \{\pmb{p}_0\}$ 上, 且对任何点 $\pmb{p}_0$ 的可求面积的邻域 $\Delta$ , $f$ 在 $D \setminus \Delta$ 上有界可积. 如果

$$
I = \lim _ {d (\Delta) \rightarrow 0} \iint_ {D \backslash \Delta} f (x, y) \mathrm{d} x \mathrm{d} y
$$

存在且有限, 并与 $\Delta$ 的取法无关, 其中 $d(\Delta)$ 是 $\Delta$ 的直径, 则称 $f$ 在 $D$ 上的 (广义) 积分收敛, 或者称 $f$ 在 $D$ 上广义可积. 否则称 $f$ 在 $D$ 上的 (广义) 积分发散. 极限值 $I$ 称为 $f$ 在 $D$ 上的广义积分的值, 记为 $\iint_{D} f(x, y) \, \mathrm{d}x \, \mathrm{d}y$ .

注 在上述定义中, 还可将函数 $f$ 在 $D$ 内有一个奇点改为在 $D$ 内有一条奇线 $\gamma$ , 即曲线 $\gamma$ 上每一点都是 $f$ 的奇点. 设 $D_{l}$ 是任意可以将 $\gamma$ 围起来的可求面积区域, 设 $f$ 在 $D \setminus D_l$ 中可积. 令 $D_l$ 收缩为 $\gamma$ , 记为 $D_l \to \gamma$ , 如果极限

$$
\lim _ {D _ {l} \rightarrow \gamma} \iint_ {D \backslash D _ {l}} f (x, y) \mathrm{d} x \mathrm{d} y
$$

存在且有限, 并与 $D_{l}$ 的取法无关, 则称 $f$ 在 $D$ 上可积. 设 $l$ 为 $D_{l}$ 的边界, 其中 $D_{l}$ 收缩为 $\gamma$ 可理解为

$$
\sup _ {x \in l} \left\{\operatorname{dist} \{x, \gamma \} \right\}\rightarrow 0.
$$

对于非负函数,也有与有界区域上广义重积分类似的可积充分必要条件.

### 22.4.2 收敛性判别法

由上节关于非负函数可积的充分必要条件, 我们可以得到如下收敛性判别法:

比较判别法 设 D 为无界区域, 其边界由有限条光滑或逐段光滑曲线组成. 函数 f, g 在 D 上有定义, 对于 D 内的任一可求面积的有界子区域 $D_{r}$ , f, g 均在 $D_{r}$ 上有界可积. 如果 g 非负, 且

$$
| f (x, y) | \leqslant g (x, y), \forall (x, y) \in D,
$$

则当 g 在 D 上 (广义) 可积时, f 也在 D 上 (广义) 可积. 反之, 如果

$$
| f (x, y) | \geqslant g (x, y), \forall (x, y) \in D,
$$

则当 g 在 D 上的广义积分发散时，f 在 D 上的广义积分也发散.

记 $r = \sqrt{x^2 + y^2}$ 并取 $g(x,y) = \frac{C}{r^p}$ , $C$ 为常数, 由上述比较判别法可得如下判别法:

Cauchy 判别法 设 D 为无界区域, 其边界由有限条光滑或逐段光滑曲线组成, f 在 D 内的任一可求面积的有界子区域上可积, 则

(1) 如果对充分大的 r，有

$$
| f (x, y) | \leqslant \frac {C}{r ^ {p}}, \quad p > 2,
$$

则广义积分 $\iint_{D} f(x, y) \, \mathrm{d}x \, \mathrm{d}y$ 收敛.

(2) 如果 D 内含有一个顶点在原点的无限扇形: $D' = \{\alpha \leqslant \theta \leqslant \beta, r \geqslant r_{0}\}$ ，且在 $D'$ 上，

$$
| f (x, y) | \geqslant \frac {C}{r ^ {p}}, \quad p \leqslant 2,
$$

则广义积分 $\iint_{D} f(x, y) \, \mathrm{d}x \, \mathrm{d}y$ 发散.

与一元函数在无限区间上的广义积分不同, 广义重积分的收敛性判别有一个重要特点: 积分的收敛与绝对收敛是等价的. 证明可见 [9, 18] 等.

对于无界函数在有界区域上的广义二重积分, 讨论是类似的.

### 22.4.3 例题

例题22.4.1 计算 $\iint_{\mathbf{R}^2} \mathrm{e}^{-(x^2 + y^2)} \, \mathrm{d}x \, \mathrm{d}y$ ，并求 Poisson 积分 $\int_{-\infty}^{+\infty} \mathrm{e}^{-x^2} \, \mathrm{d}x$ .

解 被积函数为 $\mathrm{e}^{-r^2}$ . 当 $r \to +\infty$ 时, 它比任何 $\frac{1}{r^p} (p > 2)$ 都更快地趋于零, 所以广义二重积分是收敛的.

取同心圆族

$$
\Omega_ {\rho} = \{x ^ {2} + y ^ {2} \leqslant \rho^ {2} \},
$$

于是

$$
\begin{array}{r l}\iint_ {\mathbf {R} ^ {2}} \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y&= \lim _ {\rho \rightarrow + \infty} \iint_ {\Omega_ {\rho}} \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y\\&= \lim _ {\rho \rightarrow + \infty} \int_ {0} ^ {2 \pi} \mathrm{d} \theta \int_ {0} ^ {\rho} \mathrm{e} ^ {- r ^ {2}} r \mathrm{d} r = \lim _ {\rho \rightarrow + \infty} \pi (1 - \mathrm{e} ^ {- \rho^ {2}}) = \pi .\end{array}
$$

在上述计算中, 如果取正方形族

$$
\Omega_ {l} = \{- l \leqslant x \leqslant l, - l \leqslant y \leqslant l \},
$$

则

$$
\begin{array}{r l}\iint_ {\mathbf {R} ^ {2}} \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y&= \lim _ {l \rightarrow + \infty} \iint_ {\Omega_ {l}} \mathrm{e} ^ {- (x ^ {2} + y ^ {2})} \mathrm{d} x \mathrm{d} y\\&= \lim _ {l \rightarrow + \infty} \left\{\int_ {- l} ^ {l} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x \int_ {- l} ^ {l} \mathrm{e} ^ {- y ^ {2}} \mathrm{d} y \right\} = \left\{\int_ {- \infty} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x \right\} ^ {2}.\end{array}
$$

因此

$$
\int_ {- \infty} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \sqrt {\pi}.
$$

注 Poisson 积分中 $e^{-x^{2}}$ 的原函数不是初等函数, Poisson 敏锐地观察到极坐标下二重积分有因子 $r \, dr \, d\theta$ , 由此出发他给出了上述巧妙的算法 $^{①}$ .

例题22.4.2 讨论广义重积分

$$
I = \iint_ {D} \frac {\mathrm{d} x \mathrm{d} y}{(x + y) ^ {p}}
$$

的收敛性, 其中 $D = \{(x, y) \mid 0 \leqslant x \leqslant 1, x + y \geqslant 1\}$ . 当积分收敛时, 求积分的值.

解 由于被积函数恒正, 因此可以取任一列趋于 D 的有界区域列, 使得积分容易计算, 为此取

$$
D _ {n} = \{(x, y) \mid 0 \leqslant x \leqslant 1, 1 \leqslant x + y \leqslant n \},
$$

则

$$
I _ {n} = \iint_ {D _ {n}} \frac {\mathrm{d} x \mathrm{d} y}{(x + y) ^ {p}}.
$$

作变量替换 $x = u, x + y = v$ ，则

$$
I _ {n} = \int_ {0} ^ {1} \mathrm{d} u \int_ {1} ^ {n} \frac {\mathrm{d} v}{v ^ {p}} = \frac {1}{1 - p} (n ^ {1 - p} - 1).
$$

从而当 p > 1 时，积分收敛，且

$$
\iint_ {D} \frac {\mathrm{d} x \mathrm{d} y}{(x + y) ^ {p}} = \frac {1}{p - 1}.
$$

注 如果取

$$
D _ {n} = \{(x, y) \mid 0 \leqslant x \leqslant 1, x + y \geqslant 1, y \leqslant n \},
$$

则计算要复杂得多.

例题 22.4.3 证明: 广义二重积分

$$
\iint \limits_{\substack{x\geqslant 1\\ y\geqslant 1}}\frac{x^{2} - y^{2}}{(x^{2} + y^{2})^{2}}  \mathrm{d}x  \mathrm{d}y
$$

发散.

证 我们将证明在无限扇形 $D' = \{(x, y) \mid 2y \leqslant x \leqslant 3y, x \geqslant 1, y \geqslant 1\}$ 上

$$
\left| \frac {x ^ {2} - y ^ {2}}{(x ^ {2} + y ^ {2}) ^ {2}} \right| \geqslant \frac {C}{r ^ {2}},
$$

其中 $r = \sqrt{x^2 + y^2}, C$ 为正常数. 事实上当 $2y \leqslant x \leqslant 3y$ 时，

$$
4 y ^ {2} \leqslant x ^ {2} \leqslant 9 y ^ {2}, \quad 3 y ^ {2} \leqslant x ^ {2} - y ^ {2} \leqslant 8 y ^ {2}, \quad 5 y ^ {2} \leqslant x ^ {2} + y ^ {2} \leqslant 1 0 y ^ {2},
$$

从而

$$
x ^ {2} - y ^ {2} \geqslant 3 y ^ {2} = \frac {3}{1 0} \cdot 1 0 y ^ {2} \geqslant \frac {3}{1 0} (x ^ {2} + y ^ {2}).
$$

于是

$$
\frac {x ^ {2} - y ^ {2}}{(x ^ {2} + y ^ {2}) ^ {2}} \geqslant \frac {3}{1 0 r ^ {2}},
$$

所以原广义二重积分发散.

### 22.4.4 练习题

1. 讨论下列广义积分的收敛性:

$$
\iint_ {\mathbf {R} ^ {2}} \frac {\mathrm{d} x \mathrm{d} y}{(1 + | x | ^ {p}) (1 + | y | ^ {q})};
$$

(2) 

$$
\iint_ {| x | + | y | \geqslant 1} \frac {\mathrm{d} x \mathrm{d} y}{| x | ^ {p} + | y | ^ {q}};
$$

(3) 

$$
\iint_ {x + y \geqslant 1} \frac {\sin x \sin y}{(x + y) ^ {p}} \mathrm{d} x \mathrm{d} y.
$$

2. 设 D 是 $R^{2}$ 中的无界区域, $\{D_{n}\}$ 是 D 中的单调增加的闭区域序列, 且 $\bigcup_{n=1}^{\infty} D_{n} = D$ . 若 f 在 D 上非负, 且在每一个 $D_{n}$ 上可积, 则

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = \lim _ {n \rightarrow \infty} \iint_ {D _ {n}} f (x, y) \mathrm{d} x \mathrm{d} y,
$$

这里左端与右端同时有意义或同时无意义. (提示: 设 D 和 $D_{n}$ ( $n = 1, 2, \cdots$ ) 为可求面积的有界闭区域时结论已经成立.)

3. 计算下列积分: $\iint_{y\geqslant x^{2}+1}\frac{dx\,dy}{x^{4}+y^{2}}$ .

4. 讨论下列二重广义积分的收敛性:

(1) $\iint_{D} \frac{\mathrm{d}x \, \mathrm{d}y}{x^2 + y^2}$ , 其中 $D$ 由条件 $|y| \leqslant x^2, x^2 + y^2 \leqslant 1$ 所确定;

(2) $\iint_{x^2 + y^2 \leqslant 1} \frac{\mathrm{d}x\mathrm{d}y}{(x^2 + xy + y^2)^p};$ (3) $\iint_{x^2 + y^2 \leqslant 1} \frac{\mathrm{d}x\mathrm{d}y}{(1 - x^2 - y^2)^p}$ . 

5. 设函数 $f(x)$ 在 $[a, A]$ 上连续, 讨论

$$
\iint_ {D} \frac {\mathrm{d} x \mathrm{d} y}{| y - f (x) | ^ {p}}
$$

的收敛性, 其中 $D = [a, A] \times [b, B]$ .

6. 计算下列积分:

(1) $\iint_{x^2 + y^2 \leqslant 1} \ln \frac{1}{\sqrt{x^2 + y^2}} \, \mathrm{d}x \, \mathrm{d}y;$ 

(2) $\iint_{D} \ln \sin(x - y) \, \mathrm{d}x \, \mathrm{d}y$ , 其中 $D$ 是由直线 $y = 0, y = x, x = \pi$ 所界定.

## §22.5 重积分的应用举例

除前面提到的用重积分计算曲面所围的空间几何体的体积和物体的质量外，重积分还有许多其他应用。本节再举一些例子。

### 22.5.1 几何应用

类似于上册 §11.1 所介绍的, 几何、物理上计算重积分时也经常采用比较简捷的产生积分的方法——微元法. 即根据计算的目的把问题归结到一系列很小的面积元素或体积元素(微元)上, 然后对这些微元进行相应的几何或是物理量的分析, 分析完后把得到的对每个特定的微元的结果看成为带“权”的微元(当然此时的“权”与位置有关), 然后按面积或体积求和. 比如前面22.3.1小节中介绍的先一后二的计算三重积分的方法可看成在给定区域 $D$ 上每一个带“权”的“小竖条”

$$
\left(\int_ {z _ {1} (x, y)} ^ {z _ {2} (x, y)} f (x, y) \mathrm{d} z\right) \mathrm{d} x \mathrm{d} y
$$

的求和. 上式括号中的积分可看成“高度”， $\mathrm{dxdy}$ 表示微元的底面积. 先二后一的计算方法则是在区间上具有带“权”面积的“小薄片”

$$
\left(\iint_ {D (z)} f (x, y, z) \mathrm{d} x \mathrm{d} y\right) \mathrm{d} z
$$

的求和. 上式括号中的积分可视为“面积”, dz 是微元的厚度. 在引力计算中, 就要考虑每个引力微元, 它是体积微元所受到的引力. 微元法思维对准确、快速计算重积分十分有用. 下面先介绍微元法在几何应用中的一些具体例子.

#### 旋转体的体积

例题22.5.1设 $V$ 是由曲线 $x = \varphi (z),a\leqslant z\leqslant b,$ 绕 $z$ 轴旋转而围成的体积，这里曲线不与 $z$ 轴相交且旋转体被 $z = a$ 和 $z = b$ 所围住.证明公式

$$
V = \pi \int_ {a} ^ {b} \varphi^ {2} (z) \mathrm{d} z.
$$

证 把 $V$ 视为一个由一系列垂直于 $z$ 轴的小薄片 (小圆盘) 所组成的体积, 则在 $z$ 处, 圆盘面积为 $\pi \varphi^2(z)$ , 厚度为 $\mathrm{d}z$ , 薄片体积微元为 $\mathrm{d}V = \pi \varphi^2(z)$ , 因而

$$
V = \pi \int_ {a} ^ {b} \varphi^ {2} (z) \mathrm{d} z.
$$

曲面的面积 曲面面积的定义需小心对待, 见相应的教科书或 25.1.1 小节. 我们这里用微元法给出一些曲面面积的计算公式, 其中假定曲面面积是存在的.

先设曲面 $S$ 由方程

$$
z = f (x, y), \quad (x, y) \in D
$$

表示, 其中 $D$ 是平面上可求面积的有界区域, $f(x, y)$ 是连续可微函数. 给定平面上一个小的可求面积区域 $\Delta D$ , 我们用“以平代曲”的方法计算其对应的曲面微元 $\Delta S$ , 即计算 $S$ 对应于 $\Delta D$ 那部分的切平面面积, 以之取作 $\Delta S$ 的近似值. 为此取 $(\xi, \eta) \in \Delta D$ . 设 $S$ 在点 $(\xi, \eta, f(\xi, \eta))$ 处的法向量为

$$
\boldsymbol {n} = (\cos \alpha , \cos \beta , \cos \gamma).
$$

再记对应于 $\Delta D$ 那部分的切平面面积为 $\Delta\sigma$ ，则由投影定理有

$$
\Delta \sigma = \frac {\Delta D}{| \cos \gamma |}.
$$

根据法向量的表达, 有

因此

$$
\boldsymbol {n} = (f _ {x} (\xi , \eta), f _ {y} (\xi , \eta), \pm 1).
$$

$$
\cos \gamma = \frac {\pm 1}{\sqrt {1 + f _ {x} ^ {2} (\xi , \eta) + f _ {y} ^ {2} (\xi , \eta)}}.
$$

即

$$
\Delta S \approx \Delta \sigma = \sqrt {1 + f _ {x} ^ {2} (\xi , \eta) + f _ {y} ^ {2} (\xi , \eta)} \Delta D.
$$

这样我们就得到了面积微分

$$
\mathrm{d} S = \sqrt {1 + f _ {x} ^ {2} (x , y) + f _ {y} ^ {2} (x , y)} \mathrm{d} x \mathrm{d} y.
$$

曲面面积即为

$$
S = \iint_ {D} \sqrt {1 + f _ {x} ^ {2} (x , y) + f _ {y} ^ {2} (x , y)} \mathrm{d} x \mathrm{d} y.
$$

如果曲面 $S$ 由参数方程

$$
x = x (u, v), \quad y = y (u, v), \quad z = z (u, v), \quad (u, v) \in D
$$

表示, 其中 D 是参数平面上可求面积的区域, $x(u,v)$ , $y(u,v)$ , $z(u,v)$ 在 D 上有连续偏导数, 则

$$
\mathrm{d} S = \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v,
$$

其中

$$
\begin{array}{l} {E = x _ {u} ^ {2} + y _ {u} ^ {2} + z _ {u} ^ {2},} \\ {F = x _ {u} x _ {v} + y _ {u} y _ {v} + z _ {u} z _ {v},} \\ {G = x _ {v} ^ {2} + y _ {v} ^ {2} + z _ {v} ^ {2}.} \end{array}
$$

因而

$$
S = \iint_ {D} \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v.
$$

例题22.5.2 设连续曲线 $z = \varphi(x)$ , $a \leqslant x \leqslant b$ , 绕 $z$ 轴旋转所得曲面为 $\Sigma$ . 求 $\Sigma$ 的面积 $S$ .

解 用柱坐标把 $\Sigma$ 参数化, 有

$$
\begin{array}{c} x = r \cos \theta , \quad y = r \sin \theta , \quad z = \varphi (r), \\ a \leqslant r \leqslant b, \quad 0 \leqslant \theta \leqslant 2 \pi . \end{array}
$$

故

$$
\begin{array}{c} E = 1 + (\varphi^ {\prime} (r)) ^ {2}, \quad F = 0, \quad G = r ^ {2}, \\ S = \int_ {0} ^ {2 \pi} \mathrm{d} \theta \int_ {a} ^ {b} r \sqrt {1 + (\varphi^ {\prime} (r)) ^ {2}} \mathrm{d} r = 2 \pi \int_ {a} ^ {b} r \sqrt {1 + (\varphi^ {\prime} (r)) ^ {2}} \mathrm{d} r. \end{array}
$$

注 如果以 $z = \varphi(x)$ 的曲线弧长 $s$ 为参数, 而以 $u(s)$ 表示 $s$ 处曲线到 $z$ 轴的距离, $u'(s) \geqslant 0$ , $0 \leqslant s \leqslant l$ . 设 $u(0) = a$ , $u(l) = b$ , 则 $\Sigma$ 的参数方程为

$$
x = u (s) \cos \theta , \quad y = u (s) \sin \theta , \quad z = \varphi (u (s)),
$$

$$
0 \leqslant s \leqslant l, \quad 0 \leqslant \theta \leqslant 2 \pi .
$$

故

$$
S = 2 \pi \int_ {0} ^ {l} \sqrt {1 + (\varphi^ {\prime} (u (s))) ^ {2}} \cdot u ^ {\prime} (s) u (s) \mathrm{d} s,
$$

其中 l 为曲线的弧长. 平面曲线 $z = \varphi(x)$ 在弧长参数下质心的 x 坐标

$$
X _ {c} = \frac {1}{l} \int_ {0} ^ {l} \sqrt {1 + (\varphi^ {\prime} (u (s))) ^ {2}} \cdot u ^ {\prime} (s) u (s) d s.
$$

因此我们重新得到了Guldin第一定理（见上册342页命题11.1.2）

$$
S = 2 \pi X _ {c} \cdot l.
$$

如果曲面 S 的密度函数为 $f(x,y,z)$ ，则其质量为

$$
\iint_ {S} f (x, y, z) \mathrm{d} S.
$$

移动曲面扫过的体积 下面考虑一个稍微复杂一点的几何问题.

例题 22.5.3 设 V 是这样的几何体, 它是由参数曲面 $\Sigma_{t}:\varphi(x,y,z)=t$ 自 t 从 a 到 b 所扫成的, 证明: V 的体积

$$
| V | = \int_ {a} ^ {b} \left(\iint_ {S _ {t}} \frac {1}{\sqrt {\varphi_ {x} ^ {2} + \varphi_ {y} ^ {2} + \varphi_ {z} ^ {2}}} \mathrm{d} S\right) \mathrm{d} t,\tag{22.7}
$$

其中 $S_{t}$ 表示曲面 $\Sigma_{t}$ 所对应的曲面区域, dS 表示曲面 $\Sigma_{t}$ 的面积微分.

证 关键是考虑 $t$ 到 $t + \Delta t$ 时沿 $\varphi(x, y, z) = t$ 的法向距离的移动. 注意到此时的曲面 $\Sigma_t$ 在 $(x, y, z)$ 处的法向量为

$$
\boldsymbol {n} = \left(\varphi_ {x}, \varphi_ {y}, \varphi_ {z}\right).
$$

考虑曲面随参数 $t$ 的变化的性质．设 $x = x(t), y = y(t), z = z(t)$ 表示了 $\Sigma_t$ 中一串连续可微变化的质点，则质点速度为 $(x'(t), y'(t), z'(t))$ ．注意到质点总满足 $\varphi(x(t), y(t), z(t)) = t$ ，因而又有

$$
1 = \varphi_ {x} x ^ {\prime} (t) + \varphi_ {y} y ^ {\prime} (t) + \varphi_ {z} z ^ {\prime} (t).
$$

所以从运动角度看，点 $(x,y,z)$ 处的法向速度（即速度在法向上的投影）为

$$
C = \frac {\varphi_ {x} x ^ {\prime} (t) + \varphi_ {y} y ^ {\prime} (t) + \varphi_ {z} z ^ {\prime} (t)}{\sqrt {\varphi_ {x} ^ {2} + \varphi_ {y} ^ {2} + \varphi_ {z} ^ {2}}} = \frac {1}{\sqrt {\varphi_ {x} ^ {2} + \varphi_ {y} ^ {2} + \varphi_ {z} ^ {2}}}.
$$

按微元法, 在 $\Delta t$ 时间内 $\Sigma_{t}$ 所移厚度为 $\Sigma_{t}$ 的面积 $\iint_{S_{t}} dS$ 乘以 $\Delta t$ 的法向分量 $C\Delta t$ .
从而

$$
| V | = \int_ {a} ^ {b} \left(\iint_ {S _ {t}} C \mathrm{d} S\right) \mathrm{d} t.
$$

注 (22.7) 是一个一般的公式, 它有许多具体的应用. 比如, 设 $\Sigma_{t}$ 是一个平面图形, 则曲面为

$$
\xi (t) x + \eta (t) y + \zeta (t) z = p (t),
$$

其中 $(\xi (t),\eta (t),\zeta (t))$ 为单位法向.设 $\Sigma_{t}$ 上点 $(x(t),y(t),z(t))$ 随 $t$ 连续可微变化.按隐函数求导法则及注意到 $\xi^2 (t) + \eta^2 (t) + \zeta^2 (t)\equiv 1,$ 我们有

$$
C = - [ \xi^ {\prime} (t) x + \eta^ {\prime} (t) y + \zeta^ {\prime} (t) z - p ^ {\prime} (t) ],
$$

因而

$$
- \iint_ {S _ {t}} C \mathrm{d} S = \xi^ {\prime} (t) \iint_ {S _ {t}} x \mathrm{d} S + \eta^ {\prime} (t) \iint_ {S _ {t}} y \mathrm{d} S + \zeta^ {\prime} (t) \iint_ {S _ {t}} z \mathrm{d} S - p ^ {\prime} (t) \iint_ {S _ {t}} \mathrm{d} S.
$$

设 $(X(t), Y(t), Z(t))$ 是 $\Sigma_t$ 的形心坐标, 就有

$$
X (t) = \frac {\iint_ {S _ {t}} x \mathrm{d} S}{\iint_ {S _ {t}} \mathrm{d} S}, \quad Y (t) = \frac {\iint_ {S _ {t}} y \mathrm{d} S}{\iint_ {S _ {t}} \mathrm{d} S}, \quad Z (t) = \frac {\iint_ {S _ {t}} z \mathrm{d} S}{\iint_ {S _ {t}} \mathrm{d} S}.
$$

从而

$$
\iint_ {S _ {t}} C \mathrm{d} S = - [ X (t) \xi^ {\prime} (t) + Y (t) \eta^ {\prime} (t) + Z (t) \zeta^ {\prime} (t) - p ^ {\prime} (t) ] \cdot \sigma_ {t},\tag{22.8}
$$

其中 $\sigma_{t}$ 是 $\Sigma_{t}$ 的面积.

同时，形心也位于 $\Sigma_{t}$ 上，故有

$$
X (t) \xi (t) + Y (t) \eta (t) + Z (t) \zeta (t) = p (t).
$$

求导并结合 (22.8) 得

$$
\iint_ {S _ {t}} C \mathrm{d} S = \left[ X ^ {\prime} (t) \xi (t) + Y ^ {\prime} (t) \eta (t) + Z ^ {\prime} (t) \zeta (t) \right] \cdot \sigma_ {t}.
$$

注意到上式右端第一个因子正是形心关于 t 的速度在法向上的投影, 因此

$$
\int_ {a} ^ {b} \left[ X ^ {\prime} (t) \xi (t) + Y ^ {\prime} (t) \eta (t) + Z ^ {\prime} (t) \zeta (t) \right] \mathrm{d} t = l,
$$

其中 l 为形心所经过的路径长度. 特别地, 如果 $S_{t}$ 的面积为常值 A, 应用 (22.7) 式得到

$$
V = A \cdot l.\tag{22.9}
$$

对于由平面图形 S 所成的旋转体, 设其形心到旋转轴垂直距离为 d, 则

$$
V = A \cdot 2 \pi d,
$$

这是Guldin第二定理(见上册命题11.1.3)，因而(22.9)称为广义的Guldin公式

### 22.5.2 物理应用

矩力学中的某些量常常与物体的密度函数的各阶矩有关. 下面讨论三维的情形, 二维的情形是类似的.

设 V 是由分片光滑的连续曲面围成的区域. $\mu(x,y,z)$ 在 V 上连续, 分别称

$$
M _ {x} (k) = \iiint_ {V} x ^ {k} \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
M _ {y} (k) = \iiint_ {V} y ^ {k} \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
M _ {z} (k) = \iiint_ {V} z ^ {k} \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z
$$

为密度函数 $\mu$ 关于 $x, y, z$ 的 $k$ 阶矩. 利用微元法容易得到

1. 质量 $m = M_{x}(0) = M_{y}(0) = M_{z}(0) = M(0) = \iiint_{V} \mu(x, y, z) \, dx \, dy \, dz.$ 2. 质心 $(X, Y, Z)$ ，其中

2. 质心 $(X_{c}, Y_{c}, Z_{c})$ ，其中

$$
X _ {c} = \frac {M _ {x} (1)}{M (0)} = \frac {1}{m} \iiint_ {V} x \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
Y _ {c} = \frac {M _ {y} (1)}{M (0)} = \frac {1}{m} \iiint_ {V} y \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
Z _ {c} = \frac {M _ {z} (1)}{M (0)} = \frac {1}{m} \iiint_ {V} z \mu (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z.
$$

3. 转动惯量为

$$
\begin{array}{c} I _ {x} = M _ {y} (2) + M _ {z} (2), \quad I _ {y} = M _ {z} (2) + M _ {x} (2), \quad I _ {z} = M _ {x} (2) + M _ {y} (2), \\ I _ {y z} = M _ {x} (2), \quad I _ {z x} = M _ {y} (2), \quad I _ {x y} = M _ {z} (2). \end{array}
$$

例题22.5.4若直线 $x = 0, x = a, y = 0$ 与正连续曲线 $y = f(x)$ 围成的区域的质心的 $x$ 坐标是 $g(a)$ ，证明：

$$
f (x) = \frac {A g ^ {\prime} (x)}{[ x - g (x) ] ^ {2}} \exp \left(\int \frac {\mathrm{d} x}{x - g (x)}\right),
$$

其中 A 为正常数, a 是参数.

证 见图 22.10,

$$
g (a) = \frac {M _ {x} (1)}{M (0)} = \frac {\int_ {0} ^ {a} x f (x) \mathrm{d} x}{\int_ {0} ^ {a} f (x) \mathrm{d} x},
$$

即

$$
g (a) \int_ {0} ^ {a} f (x) \mathrm{d} x = \int_ {0} ^ {a} x f (x) \mathrm{d} x.
$$

两边对 $a$ 求导得

$$
g (a) f (a) + g ^ {\prime} (a) \int_ {0} ^ {a} f (x) \mathrm{d} x = a f (a).
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/6fe64440c494293c8ea26b104a67788117adba31c2c65df75d493ccd7d131018.jpg)


令 $F(a)=\int_{0}^{a}f(x)\mathrm{d}x,$ 注意到 $a-g(a)\neq0,$ 则

图22.10

$$
\frac {F ^ {\prime} (a)}{F (a)} = \frac {g ^ {\prime} (a)}{a - g (a)}.
$$

两边对 $a$ 积分，得

$$
\ln F (a) = \int \frac {g ^ {\prime} (a)}{a - g (a)} \mathrm{d} a + C.
$$

所以

$$
\int_ {0} ^ {a} f (x) \mathrm{d} x = F (a) = A \exp \left(\int \frac {g ^ {\prime} (a)}{a - g (a)} \mathrm{d} a\right).
$$

两边对 $a$ 求导得

$$
f (a) = \frac {A g ^ {\prime} (a)}{a - g (a)} \exp \left(\int \frac {g ^ {\prime} (a)}{a - g (a)} \mathrm{d} a\right).
$$

考虑到

$$
\begin{array}{r l} \int \frac {g ^ {\prime} (a)}{a - g (a)} \mathrm{d} a & = \int \frac {g ^ {\prime} (a) - 1}{a - g (a)} \mathrm{d} a + \int \frac {\mathrm{d} a}{a - g (a)} \\ & = - \ln (a - g (a)) + \int \frac {\mathrm{d} a}{a - g (a)}, \end{array}
$$

则

$$
f (a) = \frac {A g ^ {\prime} (a)}{[ a - g (a) ] ^ {2}} \exp \left(\int \frac {\mathrm{d} a}{a - g (a)}\right).
$$

引力 考虑体密度函数为 $\mu(x,y,z)$ 的立体 V 对具有质量 m 的点 $\boldsymbol{p}_{0}(x_{0},y_{0},z_{0})$ 的引力 F. 由引力定律及微元法得 $\boldsymbol{F}=(F_{x},F_{y},F_{z})$ ，其中

$$
F _ {x} = \iiint_ {V} \frac {G m \mu (x , y , z) (x - x _ {0})}{r ^ {3}} \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
F _ {y} = \iiint_ {V} \frac {G m \mu (x , y , z) (y - y _ {0})}{r ^ {3}} \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

$$
F _ {z} = \iiint_ {V} \frac {G m \mu (x , y , z) (z - z _ {0})}{r ^ {3}} \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 G 为引力常量, $r = \left[(x - x_{0})^{2} + (y - y_{0})^{2} + (z - z_{0})^{2}\right]^{1/2}$ .

### 22.5.3 重积分与不等式

本段介绍重积分在不等式中的一些应用。先介绍如何用重积分的技巧证明一元的积分不等式。

例题 22.5.5 设 f 在 $[0,1]$ 上为正连续函数, 证明:

$$
1 \leqslant \int_ {0} ^ {1} \frac {\mathrm{d} x}{f (x)} \int_ {0} ^ {1} f (x) \mathrm{d} x \leqslant \frac {(m + M) ^ {2}}{4 m M},\tag{22.10}
$$

其中 m, M 分别为 $f(x)$ 在 $[0,1]$ 上的最小值和最大值 (参见上册 374 页题 11).

证设

$$
I = \int_ {0} ^ {1} {\frac {\mathrm{d} x}{f (x)}} \int_ {0} ^ {1} f (x)   \mathrm{d} x = \int_ {0} ^ {1} {\frac {\mathrm{d} x}{f (x)}} \int_ {0} ^ {1} f (y)   \mathrm{d} y = \int_ {0} ^ {1} \int_ {0} ^ {1} {\frac {f (y)}{f (x)}}   \mathrm{d} x   \mathrm{d} y.
$$

由对称性

$$
I = \frac {1}{2} \int_ {0} ^ {1} \int_ {0} ^ {1} \left(\frac {f (y)}{f (x)} + \frac {f (x)}{f (y)}\right) \mathrm{d} x \mathrm{d} y.
$$

令 $F(z) = z + \frac{1}{z}, z > 0$ ，则 $F(z) \geqslant 2, F''(z) > 0$ ，故 $F(z)$ 是凸函数。当 $F(\alpha) = F(\beta)$ 时，对 $z \in [\alpha, \beta]$ 有 $F(z) \leqslant F(\alpha) = F(\beta)$ 。取 $z = \frac{f(y)}{f(x)}, \alpha = \frac{m}{M}, \beta = \frac{M}{m}$ ，得

$$
2 \leqslant \frac {f (y)}{f (x)} + \frac {f (x)}{f (y)} \leqslant \frac {m}{M} + \frac {M}{m},
$$

从而

$$
1 \leqslant I \leqslant \frac {m ^ {2} + M ^ {2}}{2 m M}.
$$

但这与不等式 (22.10) 相比还不够精确. 为此分析 (22.10), 由右端的平方启发用算术平均值-几何平均值不等式 (上册第 4 页) 得

$$
I = \int_ {0} ^ {1} \frac {\mathrm{d} x}{f (x)} \cdot \int_ {0} ^ {1} f (x) \mathrm{d} x \leqslant \frac {1}{4} \left[ \int_ {0} ^ {1} \left(f (x) + \frac {1}{f (x)}\right) \mathrm{d} x \right] ^ {2}.\tag{22.11}
$$

但当 $m \leqslant f(x) \leqslant M$ 时不能充分利用 $z + \frac{1}{z}$ 的凸性来估计 $f(x) + \frac{1}{f(x)}$ . 观察 $I$ 的特点, 用 $\frac{f(x)}{\sqrt{mM}}$ 替代 $f(x)$ 得

$$
I = \int_ {0} ^ {1} \frac {\sqrt {m M}}{f (x)} \mathrm{d} x \cdot \int_ {0} ^ {1} \frac {f (x)}{\sqrt {m M}} \mathrm{d} x \leqslant \frac {1}{4} \left[ \int_ {0} ^ {1} \left(\frac {f (x)}{\sqrt {m M}} + \frac {\sqrt {m M}}{f (x)}\right) \mathrm{d} x \right] ^ {2}.
$$

再取 $z = \frac{f(x)}{\sqrt{mM}},\alpha = \sqrt{\frac{m}{M}},\beta = \sqrt{\frac{M}{m}}$ ，由 $z + \frac{1}{z}$ 的凸性得

$$
I \leqslant \frac {1}{4} \left(\sqrt {\frac {m}{M}} + \sqrt {\frac {M}{m}}\right) ^ {2} \leqslant \frac {(m + M) ^ {2}}{4 m M}.
$$

不等式 (22.10) 得证.

从上述证明过程可见, 对学到的各种方法要善于比较, 综合运用 (本题还可参见上册 415 页的提示). 下面再举一个通过交换积分次序证明不等式的例子.

例题22.5.6设 $f, \frac{\partial f}{\partial x}, \frac{\partial f}{\partial t}, \frac{\partial^2 f}{\partial x^2}$ 均为 $[0,1] \times [0,1]$ 中的连续函数，且在 $[0,1] \times [0,1]$ 中成立 $\frac{\partial f}{\partial t} = \frac{\partial^2 f}{\partial x^2}$ 和 $\left|\frac{\partial f}{\partial x}\right| \leqslant 1.$ 

(1) 证明: 对任何 $(x, t_1), (x, t_2) \in [0, 1] \times [0, 1]$ , 存在 $\xi \in [0, 1]$ , 使得 $|\xi - x| \leqslant \frac{1}{2} |t_1 - t_2|$ 且 $|f(\xi, t_1) - f(\xi, t_2)| \leqslant 4|t_1 - t_2|^{\frac{1}{2}}$ ;

(2) 由 (1) 的结论证明: 对任何 $(x, t_1), (x, t_2) \in [0, 1] \times [0, 1]$ 成立

$$
\left| f \left(x, t _ {1}\right) - f \left(x, t _ {2}\right) \right| \leqslant 5 \left| t _ {1} - t _ {2} \right| ^ {\frac {1}{2}}.
$$

分析 题目给出了 $f(x,t)$ 在 $x$ 方向上的性质: $\left|\frac{\partial f}{\partial x}\right| \leqslant 1$ . 由此证明在 $t$ 方向上的性质. 可用的条件是 $f$ 在 $x$ 方向和 $t$ 方向之间的关系: $\frac{\partial f}{\partial t} = \frac{\partial^2 f}{\partial x^2}$ . 我们通过交换累次积分次序来转换.

证 (1) 由题设

$$
f (x, t _ {1}) - f (x, t _ {2}) = \int_ {t _ {1}} ^ {t _ {2}} \frac {\partial f}{\partial t} (x, t) \mathrm{d} t = \int_ {t _ {1}} ^ {t _ {2}} \frac {\partial^ {2} f}{\partial x ^ {2}} (x, t) \mathrm{d} t.
$$

从而，对任何 $\overline{x} \in [0,1]$ ，由累次积分次序可交换，成立

$$
\begin{array}{l} \int_ {x} ^ {\overline {{x}}} [ f (x, t _ {1}) - f (x, t _ {2}) ] \mathrm{d} x = \int_ {x} ^ {\overline {{x}}} \left(\int_ {t _ {1}} ^ {t _ {2}} \frac {\partial^ {2} f}{\partial x ^ {2}} (x, t) \mathrm{d} t\right) \mathrm{d} x \\ = \int_ {t _ {1}} ^ {t _ {2}} \left(\int_ {x} ^ {\overline {{x}}} \frac {\partial^ {2} f}{\partial x ^ {2}} (x, t) \mathrm{d} x\right) \mathrm{d} t = \int_ {t _ {1}} ^ {t _ {2}} \left(\frac {\partial f}{\partial x} (t, \overline {{x}}) - \frac {\partial f}{\partial x} (x, t)\right) \mathrm{d} t. \end{array}
$$

对上式左端应用积分中值定理, 右端利用已知条件 $\left|\frac{\partial f}{\partial x}\right| \leqslant 1$ , 得

$$
\left| f \left(\xi , t _ {1}\right) - f \left(\xi , t _ {2}\right) \right| \cdot | x - \bar {x} | \leqslant 2 \left| t _ {1} - t _ {2} \right|,
$$

其中 $\xi$ 在 $x$ 和 $\overline{x}$ 之间. 对任何 $x, t_1$ 和 $t_2 \in [0,1]$ 总可找到某个 $\overline{x} \in [0,1]$ , 使得

$$
\left| x - \overline {{{{x}}}} \right| = \frac {1}{2} \left| t _ {1} - t _ {2} \right| ^ {\frac {1}{2}},
$$

代入前式即得

$$
\left| f (\xi , t _ {1}) - f (\xi , t _ {2}) \right| \leqslant 4 \left| t _ {1} - t _ {2} \right| ^ {\frac {1}{2}}.
$$

(2) 利用 (1) 得

$$
\begin{array}{r l} & {| f (x, t _ {1}) - f (x, t _ {2}) | \leqslant | f (x, t _ {1}) - f (\xi , t _ {1}) | + | f (\xi , t _ {1}) - f (\xi , t _ {2}) | + | f (x, t _ {2}) - f (\xi , t _ {2}) |} \\ & {\quad \leqslant 1 \cdot | x - \xi | + 4 | t _ {1} - t _ {2} | ^ {\frac {1}{2}} + 1 \cdot | x - \xi |} \\ & {\quad \leqslant | x - \overline {{{x}}} | + 4 | t _ {1} - t _ {2} | ^ {\frac {1}{2}} + | x - \overline {{{x}}} | = 5 | t _ {1} - t _ {2} | ^ {\frac {1}{2}}.} \end{array}
$$

最后, 我们证明重积分形式的 Hölder 不等式, 并由此推出一些有用的估计.

设 $\Omega$ 是 $\mathbf{R}^2$ 中可求面积的有界区域, 函数 $f$ 定义在 $\Omega$ 上, 如果 $|f|^p (p > 0)$ 在 $\Omega$ 上广义可积, 则称 $f$ 是在 $\Omega$ 上 $p$ 次 (广义) 可积. $\Omega$ 上的 $p$ 次可积函数的全体记为 $L^p (\Omega)$ , 且记

$$
\| f \| _ {p} = \left(\iint_ {\Omega} | f (x, y) | ^ {p} \mathrm{d} x \mathrm{d} y\right) ^ {\frac {1}{p}}.
$$

例题22.5.7（Hölder不等式）设 $u\in L^{p}(\Omega),v\in L^{q}(\Omega),p,q > 1,$ 且 $\frac{1}{p} +$ $\frac{1}{q} = 1$ ，则

$$
\| u v \| _ {1} \leqslant \| u \| _ {p} \| v \| _ {q}.
$$

证 不妨设 $\| u\| _p > 0,\| v\| _q > 0.$ 令

$$
a = \frac {| u |}{\| u \| _ {p}}, \quad b = \frac {| v |}{\| v \| _ {q}}.
$$

由 Young 不等式 (上册 259 页题 10):

$$
a b \leqslant \frac {a ^ {p}}{p} + \frac {b ^ {q}}{q},
$$

其中 $p, q > 1, \frac{1}{p} + \frac{1}{q} = 1, a, b \geqslant 0,$ 得到

$$
\frac {| u | \cdot | v |}{\| u \| _ {p} \| v \| _ {q}} \leqslant \frac {| u | ^ {p}}{p \| u \| _ {p} ^ {p}} + \frac {| v | ^ {q}}{q \| v \| _ {q} ^ {q}}.
$$

两边在 $\Omega$ 上积分得

$$
\frac {\iint_ {\Omega} | u | \cdot | v | \mathrm{d} x \mathrm{d} y}{\| u \| _ {p} \| v \| _ {q}} \leqslant \frac {1}{p} + \frac {1}{q} = 1.
$$

由此得出所要证明的不等式(参见上册349-350页).

例题22.5.8 设 $u \in L^{q}(\Omega)$ , $0 < p \leqslant q$ , 则

$$
\left| \Omega \right| ^ {- \frac {1}{p}} \| u \| _ {p} \leqslant \left| \Omega \right| ^ {- \frac {1}{q}} \| u \| _ {q}.
$$

其中 $|\Omega|$ 表示 $\Omega$ 的体积.

证 由 Hölder 不等式

$$
\begin{array}{r l} & {\| u \| _ {p} ^ {p} = \iint_ {\Omega} | u | ^ {p} \mathrm{d} x \mathrm{d} y \leqslant \left[ \iint_ {\Omega} (| u | ^ {p}) ^ {\frac {q}{p}} \mathrm{d} x \mathrm{d} y \right] ^ {\frac {p}{q}} \left[ \iint_ {\Omega} 1 ^ {\frac {q}{q - p}} \mathrm{d} x \mathrm{d} y \right] ^ {\frac {q - p}{q}}} \\ & {\quad = | \Omega | ^ {\frac {q - p}{q}} \| u \| _ {q} ^ {p},} \end{array}
$$

两边开 $p$ 次方，则

$$
\| u \| _ {p} \leqslant | \Omega | ^ {\frac {1}{p} - \frac {1}{q}} \| u \| _ {q}.
$$

注 由上例的结论知对任意 $0 < p \leqslant q, L^{q}(\Omega) \subset L^{p}(\Omega)$ .

例题22.5.9 设 $u \in L^{r}(\Omega), 0 < p \leqslant q \leqslant r,$ 则

其中 $\lambda$ 满足 $\frac{1}{q} = \frac{\lambda}{p} + \frac{1 - \lambda}{r}$ .

证 由 Hölder 不等式

$$
\begin{array}{l} \| u \| _ {q} ^ {q} = \iint_ {\Omega} | u | ^ {q} \mathrm{d} x \mathrm{d} y = \iint_ {\Omega} | u | ^ {\lambda q} | u | ^ {(1 - \lambda) q} \mathrm{d} x \mathrm{d} y \\ \leqslant \left[ \iint_ {\Omega} (| u | ^ {\lambda q}) ^ {\frac {p}{\lambda q}} \mathrm{d} x \mathrm{d} y \right] ^ {\frac {\lambda q}{p}} \left[ \iint_ {\Omega} (| u | ^ {(1 - \lambda) q}) ^ {\frac {r}{(1 - \lambda) q}} \right] ^ {\frac {(1 - \lambda) q}{r}} \\ = \| u \| _ {p} ^ {\lambda q} \| u \| _ {r} ^ {(1 - \lambda) q}, \end{array}
$$

两边开 q 次方即为所求.

例题22.5.10设 $u, u_x, u_y$ 在有界区域 $\Omega \subset \mathbf{R}^2$ 上连续，且在 $\Omega$ 的边界 $\partial \Omega$ 上 $u = u_x = u_y = 0$ ，则对于 $1 \leqslant p < 2$ 有

$$
\left\| u \right\| _ {\frac {2 p}{2 - p}} \leqslant C \big (\left\| u _ {x} \right\| _ {p} + \left\| u _ {y} \right\| _ {p} \big),
$$

其中 C 只与 p 有关, 与 u 无关.

证 先设 $p = 1$ . 当 $(x, y) \in \mathbf{R}^2 \setminus \Omega$ 时, 定义 $u(x, y) = 0$ , 则

$$
u (x, y) = \int_ {- \infty} ^ {x} u _ {x} (x, y)   \mathrm{d} x, \quad \text {且} u (x, y) = \int_ {- \infty} ^ {y} u _ {y} (x, y)   \mathrm{d} y.
$$

从而

$$
| u (x, y) | \leqslant \int_ {- \infty} ^ {x} | u _ {x} |   \mathrm{d} x, \quad \text {且}   | u (x, y) | \leqslant \int_ {- \infty} ^ {y} | u _ {y} |   \mathrm{d} y.
$$

由此得

$$
| u (x, y) | ^ {2} \leqslant \int_ {- \infty} ^ {+ \infty} | u _ {x} (x, y) | \mathrm{d} x \int_ {- \infty} ^ {+ \infty} | u _ {y} (x, y) | \mathrm{d} y.
$$

两边在 $\mathbf{R}^2$ 上积分得到

$$
\iint_ {\Omega} | u (x, y) | ^ {2} \mathrm{d} x \mathrm{d} y \leqslant \iint_ {\Omega} | u _ {x} | \mathrm{d} x \mathrm{d} y \iint_ {\Omega} | u _ {y} | \mathrm{d} x \mathrm{d} y.
$$

两边开平方, 得

$$
\| u \| _ {2} \leqslant \| u _ {x} \| _ {1} ^ {\frac {1}{2}} \| u _ {y} \| _ {1} ^ {\frac {1}{2}}.
$$

利用 $\sqrt{a}\sqrt{b} \leqslant \frac{1}{2}(a + b)$ , 就有

$$
\| u \| _ {2} \leqslant \frac {1}{2} (\| u _ {x} \| _ {1} + \| u _ {y} \| _ {1}).\tag{22.12}
$$

这就证明了 p = 1 时的结论.

当 $1 < p < 2$ 时，令 $\gamma = \frac{p}{2 - p}$ ，在(22.12)中用 $u^{\gamma}$ 代替 $u$ ，则

$$
\begin{array}{r l} \| u ^ {\gamma} \| _ {2} & \leqslant \frac {1}{2} (\| \gamma u ^ {\gamma - 1} u _ {x} \| _ {1} + \| \gamma u ^ {\gamma - 1} u _ {y} \| _ {1}) \\ & \leqslant \frac {\gamma}{2} (\| u ^ {\gamma - 1} \| _ {q} \| u _ {x} \| _ {p} + \| u ^ {\gamma - 1} \| _ {q} \| u _ {y} \| _ {p}), \end{array}\tag{22.13}
$$

其中 q 满足 $\frac{1}{p} + \frac{1}{q} = 1$ ，即 $q = \frac{p}{p - 1}$ 。由于

$$
\| u ^ {\gamma} \| _ {2} = \| u \| _ {2 \gamma} ^ {\gamma} = \| u \| _ {\frac {2 p}{2 - p}} ^ {\gamma},
$$

$$
\| u ^ {\gamma - 1} \| _ {q} = \| u \| _ {(\gamma - 1) q} ^ {\gamma - 1} = \| u \| _ {\frac {2 p}{2 - p}} ^ {\gamma - 1},
$$

由(22.13)得

$$
\| u \| _ {\frac {2 p}{2 - p}} \leqslant \frac {\gamma}{2} \left(\| u _ {x} \| _ {p} + \| u _ {y} \| _ {p}\right).
$$

### 22.5.4 练习题

1. 计算由下列曲面围成的立体体积:

(1) $a_{i}x + b_{i}y + c_{i}z = \pm h_{i}, i = 1,2,3,$ 其中三个平面的法向线性无关；

(2) $(x^{2} + y^{2} + z^{2})^{2} = a^{3}z$ ，其中 $a > 0$ 

(3) $\left(\frac{x^2}{a^2} +\frac{y^2}{b^2} +\frac{z^2}{c^2}\right)^2 = \frac{x^2}{a^2} +\frac{y^2}{b^2};$ 

(4) $(x^{2}+y^{2})^{2}+z^{4}=z.$ 

2. 计算下列曲面的面积:

(1) $(x^{2} + y^{2} + z^{2})^{2} = x^{2} - y^{2};$ 

(2) $(x^{2} + y^{2} + z^{2})^{2} = z^{3};$ 

(3) 连续曲线 $y = f(x) (\geqslant 0)$ , $x \in [a, b]$ ，绕 x 轴旋转所得曲面.

3. 设抛物面壳 $z = \frac{1}{2} (x^2 + y^2) (0 \leqslant z \leqslant 1)$ 的面密度 $\rho = z$ ，求质量

4. 半径为 R 的均匀圆盘, 其密度为 $\mu$ . 过圆心且与圆垂直的直线上有一密度为 $\rho$ 的均匀细棒, 棒长为 l, 其近圆盘的一端与圆心相距为 a. 求圆盘对细棒的引力.

5. 半径为 $a$ 的圆盘, 其各点的密度等于该点到圆心的距离. 今从圆盘上挖去一个半径为 $\frac{a}{2}$ 而其圆心离圆盘中心为 $\frac{a}{2}$ 的小圆盘. 求剩下几何图形的重心坐标.

6. 假定物体有连续的密度函数, 证明: 凸形物体的重心必在其体内,

7. 设 $u_{i} \in L^{p_{i}}(\Omega), p_{i} > 0, i = 1, 2, \cdots, m,$ 且 $\sum_{i=1}^{m} \frac{1}{p_{i}} = 1.$ 证明:

$$
\iint_ {\Omega} u _ {1} u _ {2} \dots u _ {m} \mathrm{d} x \mathrm{d} y \leqslant \| u _ {1} \| _ {p _ {1}} \| u _ {2} \| _ {p _ {2}} \dots \| u _ {m} \| _ {p _ {m}}.
$$

8. 证明：

$$
\left\{\int_ {a} ^ {b} \mathrm{d} x \left[ \int_ {c} ^ {d} f (x, y) \mathrm{d} y \right] ^ {2} \right\} ^ {1 / 2} \leqslant \int_ {c} ^ {d} \mathrm{d} y \left[ \int_ {a} ^ {b} f ^ {2} (x, y) \mathrm{d} x \right] ^ {1 / 2},
$$

其中 f 是连续函数.

## §22.6 对于教学的建议

### 22.6.1 学习要点

1. 如何快速准确计算出重积分的值是本章的重点之一. 为此有三点是至关重要的: 一是选择坐标变换, 二是选择积分顺序, 三是要优先利用对称性, 即积分区域的对称性与被积函数的奇偶性.

2. 计算重积分的过程中, 画出积分区域的示意图是很重要的一个步骤. 示意图的要点是区域所处的象限 (或卦限)、曲线的交点 (曲面的交线). 用球坐标时尤其要准确标出交线. 即使画不出图, 也要作必要的几何分析. 例如对 $(x^{2} + y^{2})^{2} + z^{4} = z$ 所围立体, 首先从方程看出立体位于平面 $z = 0$ 和 $z = 1$ 之间, 其次可看出这是一个旋转面, 令 $y = 0$ 得母线 $x^{4} = z - z^{4}$ .

3. 要充分重视重积分的应用部分的教学。这里微元法是个重点。要注意微元法的“求和”并不是简单的相加。在“曲”的坐标下考虑的是求和方向上的分量相加。比如求移动曲面扫过的体积，我们必须考虑移动的法向速度方向上的求和。

4. 重积分的计算是熟能生巧, 需要做大量的习题. 限于篇幅, 我们仅仅列举一些有特点的例子. 在一般的教科书上 (如 [24]) 都给出了足够丰富的例题与习题. 请读者自己把握. 还可以参考 [25, 55] 第八章的前 10 节.

5. 对习题课的建议 应该根据实际需要选择坐标变换, 不能只会一种. 任何一种坐标变换都不是万能的. 球坐标变换很重要, 但并不是积分区域与球有关就要用球坐标. 如例题 22.3.1, 用球坐标就不简单.

关于积分顺序, 应该观察被积函数与积分区域两者的特点, 尽可能使积分变得简单. 仍考察例题 22.3.1, 被积函数中有 $z$ , 当然应该选择“先二后一”的顺序, 而且是先对 $x, y$ , 后对 $z$ , 这样对 $x, y$ 作二重积分时, 被积函数是常数, 因而可以提到积分号之外.

对称性的使用不仅可以简化计算, 还有助于避免错误. 下面的例子可以很清楚地说明这一点.

例题22.6.1 求球体 $x^{2} + y^{2} + z^{2} \leqslant a^{2}$ 和圆柱体 $x^{2} + y^{2} \leqslant ax (a > 0)$ 的公共部分所成的空间区域 (Viviani (维维亚尼) 体) 的体积 $V$ .

解 如图 22.11 (半个 Viviani 体) 所示,

$$
\begin{array}{l} V = 2 \iint_ {x ^ {2} + y ^ {2} \leqslant a x} \sqrt {a ^ {2} - x ^ {2} - y ^ {2}} \mathrm{d} x \mathrm{d} y \\ = 2 \int_ {- \pi / 2} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {a \cos \theta} r \sqrt {a ^ {2} - r ^ {2}} \mathrm{d} r \\ = \int_ {- \pi / 2} ^ {\pi / 2} - \frac {2}{3} (a ^ {2} - r ^ {2}) ^ {3 / 2} \Big | _ {0} ^ {a \cos \theta} \mathrm{d} \theta \\ = - \frac {2}{3} \int_ {- \pi / 2} ^ {\pi / 2} \left[ (a ^ {2} \sin^ {2} \theta) ^ {3 / 2} - a ^ {3} \right] \mathrm{d} \theta . \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/ad5c3ef7c8df9ee06e82722c8e5935a56a5e6f5fe37def2b8478954685eabd24.jpg)



图22.11


再往下作就有两种可能了，一种是

$$
(\sin^ {2} \theta) ^ {3 / 2} = \sin^ {3} \theta \quad (\text { 这是错的! }),
$$

应该是

$$
(\sin^ {2} \theta) ^ {3 / 2} = | \sin \theta | ^ {3}.
$$

但如果一开始就利用对称性, 得

$$
V = 4 \iint_ {x ^ {2} + y ^ {2} \leqslant a x, y \geqslant 0} \sqrt {a ^ {2} - x ^ {2} - y ^ {2}} \mathrm{d} x \mathrm{d} y,
$$

不但使运算简便, 而且无形中避免了上述错误的发生.

### 22.6.2 参考题

#### 第一组参考题

1. 设 $f(x, y)$ 在 $D = \{(x, y) \mid 0 \leqslant x \leqslant 1, 0 \leqslant y \leqslant 1\}$ 上有如下定义：

$$
f (x, y) = \left\{ \begin{array}{l l} { \frac {1}{q _ {x}},} & {\text {当} x =  \frac {p _ {x}}{q _ {x}}, y \text {是无理数时},} \\ { \frac {1}{q _ {y}},} & {\text {当} y =  \frac {p _ {y}}{q _ {y}}, x \text {是无理数时},} \\ {0,} & {\text {其他情况},} \end{array} \right.
$$

其中 $q_{x}, q_{y}$ 分别表示有理数 $x, y$ 写成既约分数后的分母. 则 $f(x, y)$ 在 $D$ 上可积, 但两个二次积分不存在.

2. 设 $f(x, y)$ 定义在 $D = \{(x, y) \mid 0 \leqslant x \leqslant 1, 0 \leqslant y \leqslant 1\}$ 上，

$f(x,y)=\left\{\begin{aligned}&1,& 当 x 和 y 都是非零有理数,\\&0,& 其他情况,\end{aligned}\right.$ 

其中 $q_{x}, q_{y}$ 表示有理数 $x, y$ 写成既约分数后的分母. 证明 $f(x, y)$ 在 $D$ 上不可积, 但两个二次积分存在且相等.

3. (1) 计算积分 $A = \int_{0}^{1} \int_{0}^{1} |xy - \frac{1}{4}| \, \mathrm{d}x \, \mathrm{d}y$ ;

(2) 设 $z = f(x, y)$ 在闭正方形 $D = \{(x, y) \mid 0 \leqslant x \leqslant 1, 0 \leqslant y \leqslant 1\}$ 上连续，且满足下列条件：

$$
\iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y = 0, \quad \iint_ {D} x y f (x, y) \mathrm{d} x \mathrm{d} y = 1.
$$

求证: $\exists(\xi,\eta)\in D$ 使得 $|f(\xi,\eta)|\geqslant\frac{1}{A}$ .

4. 证明：

$$
1. 9 6 <   \iint_ {| x | + | y | \leqslant 1 0} \frac {1}{1 0 0 + \cos^ {2} x + \cos^ {2} y} \mathrm{d} x \mathrm{d} y <   2.
$$

2. 设 f 是连续函数, 证明:

$$
\iiint_ {x ^ {2} + y ^ {2} + z ^ {2} \leqslant 1} f (a x + b y + c z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \pi \int_ {- 1} ^ {1} (1 - u ^ {2}) f (k u) \mathrm{d} u,
$$

其中 $k = \sqrt{a^2 + b^2 + c^2}$ .

6. 证明 Poincaré (彭加勒) 不等式: 设函数 $f(x, y), \frac{\partial f}{\partial y} (x, y)$ 在闭区域

$$
D = \{(x, y) \mid a \leqslant x \leqslant b, \varphi (x) \leqslant y \leqslant \psi (x) \}
$$

上连续, 其中 $\varphi, \psi$ 在 $[a, b]$ 上连续. $f(x, \varphi(x)) = 0$ , 则存在常数 $K > 0$ , 使得

$$
\iint_ {D} f ^ {2} (x, y) \mathrm{d} x \mathrm{d} y \leqslant K \iint_ {D} \left(\frac {\partial f}{\partial y}\right) ^ {2} \mathrm{d} x \mathrm{d} y.
$$

(Poincaré 不等式可看成是 Wirtinger 不等式 (见第十五章参考题 8) 在高维空间的推广, 见 [27] 及其中所引文献.)

7. 设 $u, v \in L^{p}(\Omega), p \geqslant 1$ . 利用 Hölder 不等式证明 Minkowski 不等式

$$
\| u + v \| _ {p} \leqslant \| u \| _ {p} + \| v \| _ {p}.
$$

讨论 Hölder 不等式和 Minkowski 不等式取等号的条件.

8. 设函数 $f(x, y)$ 在区域 $D = [0, 1] \times [0, 1]$ 上四次连续可微，在其边界上取零，并且

$$
\left| \frac {\partial^ {4} f}{\partial x ^ {2} \partial y ^ {2}} (x, y) \right| \leqslant B, \quad (x, y) \in D.
$$

证明：

$$
\left| \iint_ {D} f (x, y) \mathrm{d} x \mathrm{d} y \right| \leqslant \frac {B}{1 4 4}.
$$

9. 设二重积分 $\iint_{D} f(x,y) \, dx \, dy > 0$ . 证明: 存在 D 的闭子区域 U, 使当 $(x,y) \in U$ 时, 有 $f(x,y) > 0$ .

10. 证明多重积分的中值定理: 设 $f(x_{1}, x_{2}, \cdots, x_{n})$ 在有界闭区域 $\Omega \subset \mathbf{R}^{n}$ 上连续, 则 $\exists \pmb{\xi} \in \Omega$ , 使

$$
\int \int_ {\Omega} \dots \int f (x _ {1}, x _ {2}, \ldots , x _ {n})   \mathrm{d} x _ {1} \mathrm{d} x _ {2} \dots   \mathrm{d} x _ {n} = f (\pmb {\xi}) \cdot (\varOmega   \text {的体积}).
$$

11. 设函数 $p$ 在 $[a, b]$ 上非负连续， $f, g$ 在 $[a, b]$ 上连续单调增加，则

$$
\left(\int_ {a} ^ {b} p (x) f (x) \mathrm{d} x\right) \left(\int_ {a} ^ {b} p (x) g (x) \mathrm{d} x\right) \leqslant \left(\int_ {a} ^ {b} p (x) \mathrm{d} x\right) \left(\int_ {a} ^ {b} p (x) f (x) g (x) \mathrm{d} x\right).
$$

12. 设 $f$ 在 $[0,1]$ 上连续、单调减少且恒取正值，则

$$
\frac {\int_ {0} ^ {1} x f ^ {2} (x) \mathrm{d} x}{\int_ {0} ^ {1} x f (x) \mathrm{d} x} \leqslant \frac {\int_ {0} ^ {1} f ^ {2} (x) \mathrm{d} x}{\int_ {0} ^ {1} f (x) \mathrm{d} x}.
$$

13. 设

$$
I = \iiint_ {x ^ {2} + y ^ {2} + z ^ {2} \leqslant R ^ {2}} \frac {\mathrm{d} x \mathrm{d} y \mathrm{d} z}{\sqrt {(x - a) ^ {2} + (y - b) ^ {2} + (z - c) ^ {2}}},
$$

其中 $A = \sqrt{a^2 + b^2 + c^2} > R > 0$ ，则

$$
\frac {4 \pi}{3} \frac {R ^ {3}}{A + R} \leqslant I \leqslant \frac {4 \pi}{3} \frac {R ^ {3}}{A - R}.
$$

14. 设 $f(t)$ 是连续函数, 令

$$
F (t) = \iiint_ {D} f (x y z) \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 $D = \{(x,y,z)\mid 0\leqslant x\leqslant t,0\leqslant y\leqslant t,0\leqslant z\leqslant t\}$ .证明：

$$
F ^ {\prime} (t) = \frac {3}{t} \int_ {0} ^ {t ^ {3}} \frac {g (u)}{u} \mathrm{d} u,
$$

其中 $g(u)=\int_{0}^{u}f(s)\mathrm{d}s.$ 

15. 设坐标平面上有一周长为 $2\pi l$ 的椭圆 $\Gamma$ , 在其上选定一点作为计算弧长 $s$ 的起点, 以逆时针方向作为计算弧长的方向, 这时 $\Gamma$ 有参数方程

$$
x = f (s), y = \varphi (s), \quad 0 \leqslant s \leqslant 2 \pi l.
$$

x 轴的正半轴绕原点作逆时针旋转, 首次转到与点 $(f(s), \varphi(s))$ 处切线正向一致时的倾角为 $\theta(s)$ . 记 D 为 $\Gamma$ 的外部区域内与 $\Gamma$ 的距离小于 l 的所有点构成的区域.

(1) 如果用 $t$ 表示 $D$ 内一点 $(x, y)$ 到 $\Gamma$ 的距离, 试将 $x, y$ 表示成 $s, t$ 的函数

$$
x = x (s, t), \quad y = y (s, t), \quad 0 \leqslant s \leqslant 2 \pi l, 0 <   t <   l;
$$

(2) 用计算验证区域 D 的面积为 $3\pi l^{2}$ .

#### 第二组参考题

1. 证明：对任意 $\varepsilon > 0$ 

$$
a b \leqslant \frac {\varepsilon a ^ {p}}{p} + \frac {\varepsilon^ {- q / p} b ^ {q}}{q} \leqslant \varepsilon a ^ {p} + \varepsilon^ {- q / p} b ^ {q},
$$

其中 $a \geqslant 0, b \geqslant 0, p, q > 0, \frac{1}{p} + \frac{1}{q} = 1.$ 

2. 利用上题以及例题 22.5.9 的结论证明内插不等式:

$$
\| u \| _ {q} \leqslant \varepsilon \| u \| _ {r} + \varepsilon^ {- \mu} \| u \| _ {p},
$$

其中 $\mu=\left(\frac{1}{p}-\frac{1}{q}\right)/\left(\frac{1}{q}-\frac{1}{r}\right)$ ，0<p<q<r, $\varepsilon>0$ .

3. 设 $\Omega$ 是 $\mathbf{R}^2$ 中有界闭区域, $u(x,y)$ 在 $\Omega$ 上连续且恒取正值, 定义

$$
\Phi_ {p} (u) = \left(\frac {1}{| \Omega |} \iint_ {\Omega} u ^ {p} \mathrm{d} x \mathrm{d} y\right) ^ {\frac {1}{p}},
$$

其中 $|\Omega|$ 是 $\Omega$ 的面积, 证明:

(1) $\lim_{p\to+\infty}\Phi_{p}(u)=\max_{(x,y)\in\Omega}\{u(x,y)\};$ 

(2) $\lim_{p\to-\infty}\Phi_{p}(u)=\min_{(x,y)\in\Omega}\{u(x,y)\};$ 

$$
\lim _ {p \rightarrow 0} \Phi_ {p} (u) = \exp \left\{\frac {1}{| \Omega |} \iint_ {\Omega} \ln u d x d y \right\}.
$$

4. 设 $P_{0}$ 为半径等于 R 的球内的一定点，从点 $P_{0}$ 向球面上任意一点 Q 处的切平面作垂线，垂足为点 P。当点 Q 在球面上变动时，点 P 的轨迹形成一封闭曲面。

(1) 求此曲面所围成的立体的体积;

(2) 问当点 $P_{0}$ 沿什么方向变化时, 上述体积的变化率最大?

5. 证明不等式

$$
\frac {\sqrt {\pi}}{2} \left(1 - \mathrm{e} ^ {- a ^ {2}}\right) ^ {\frac {1}{2}} <   \int_ {0} ^ {a} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x <   \frac {\sqrt {\pi}}{2} \left(1 - \mathrm{e} ^ {- \frac {4 a ^ {2}}{\pi}}\right) ^ {\frac {1}{2}}.
$$

6. 设连续函数 $f(x, y)$ 的等位线是简单封闭曲线， $S(v_1, v_2)$ 是由曲线 $f(x, y) = v_1, f(x, y) = v_2$ 所围成的域。证明 Catalan 公式

$$
\iint_ {S (v _ {1}, v _ {2})} f (x, y) \mathrm{d} x \mathrm{d} y = \int_ {v _ {1}} ^ {v _ {2}} v F ^ {\prime} (v) \mathrm{d} v,
$$

其中 $F(v)$ 为由曲线 $f(x,y)=v_{1}, f(x,y)=v$ 所包围的面积, 还假设 $F(v)$ 可微且导函数 $F'(v)$ 可积.

注 题 6 即 [25] 的习题 3983, 它代表了重积分计算中的 Catalan 方法. 这种方法在一定的条件下可以将多重积分 (直接) 转化为单重积分. 较详细的介绍见 [55] 第三册 8.1.6 小节中的命题 8.1、8.2 与例题, 以及它们在 §8.6 (三重积分计算) 和 §8.10 (n 重积分计算) 中的一系列应用. Catalan 方法也可用于求解本章中的若干积分计算题, 例如 22.3.5 小节的练习题 7、8 和第一组参考题 5 等.
