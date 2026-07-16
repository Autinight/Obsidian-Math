# 第二十四章 曲线积分

本章在 §24.1 和 §24.2 两节中分别介绍第一型和第二型曲线积分的定义、计算、应用以及这两类曲线积分之间的关系。§24.3 介绍重要的 Green 公式、平面上曲线积分与路径无关的条件以及等周定理。在 §24.4 中介绍连续向量场的旋转度并用于证明 Brouwer 不动点定理和代数基本定理。最后一节是学习要点和两组参考题。

## §24.1 第一型曲线积分

### 24.1.1 第一型曲线积分的定义与计算

$R^{n}$ 中以点 A 为始点，点 B 为终点的连续不自交的曲线段 $\Gamma = AB$ 称为 $R^{n}$ 中的一条简单曲线。如果 A = B，则称 $\Gamma$ 为封闭曲线或闭曲线，否则为不封闭曲线。在 $\Gamma$ 上从 A 到 B 依次取有限个点 $A = A_{0}, A_{1}, \cdots, A_{k} = B$ ，它们确定了 $\Gamma$ 的一个分割 T。依次联结 $A_{0}, A_{1}, \cdots, A_{k}$ 的线段组成一条折线，称为 $\Gamma$ 的内接折线，其长度记为 $l(\Gamma, T)$ 。如果

$$
\sup _ {T} \{l (\Gamma , T) \} <   + \infty ,
$$

则称 $\Gamma$ 为可求长曲线，而且 $l(\Gamma) = \sup_{T}\{l(\Gamma, T)\}$ 称为 $\Gamma$ 的弧长.

下面定义在简单可求长曲线上的第一型曲线积分. 设函数 f 定义在 $\Gamma$ 上, 对于 $\Gamma$ 的任一分割 $T: A = A_{0}, A_{1}, A_{2}, \cdots, A_{k} = B$ , 记 $\Delta S_{i}$ 为从 $A_{i-1}$ 到 $A_{i}$ 的曲线段 $\widetilde{A_{i-1}A_{i}}$ 的弧长, $d(T) = \max_{1 \leq i \leq k} \{\Delta S_{i}\}$ . 任取 $\xi_{i} \in \widetilde{A_{i-1}A_{i}}$ , 如果

$$
\lim _ {d (T) \rightarrow 0} \sum_ {i = 1} ^ {k} f (\boldsymbol {\xi} _ {i}) \Delta S _ {i}
$$

收敛, 且极限与 $\Gamma$ 的具体分法无关, 则称函数 $f$ 在 $\Gamma$ 上的第一型 (或第一类) 曲线积分存在, 其极限值 $I$ 称为 $f$ 在 $\Gamma$ 上的第一型曲线积分. 记为

$$
I = \int_ {\Gamma} f (\boldsymbol {x}) \mathrm{d} s = \int_ {\widetilde {A B}} f (\boldsymbol {x}) \mathrm{d} s.
$$

第一型曲线积分也称为对弧长的积分, 它与曲线的方向选取无关. 对于同一条简单可求长曲线 $\Gamma = \widetilde{AB}$ , 也可选定 B 为始点, A 为终点, 记为 $\Gamma = \widetilde{BA}$ , 则

$$
\int_ {\widetilde {A B}} f (\boldsymbol {x}) \mathrm{d} s = \int_ {\widetilde {B A}} f (\boldsymbol {x}) \mathrm{d} s.
$$

若 $\Gamma$ 是 $\mathbf{R}^n$ 中简单可求长曲线, $f$ 在 $\Gamma$ 上连续, 则 $f$ 在 $\Gamma$ 上的第一型曲线积分存在.

若 $\Gamma$ 是 $R^{n}$ 中逐段光滑的简单曲线, 且有参数表示

$$
\Gamma : \boldsymbol {x} = \boldsymbol {x} (t) \in \mathbf {R} ^ {n}, \quad a \leqslant t \leqslant b,
$$

则弧长微分

$$
\mathrm{d} s = | \pmb {x} ^ {\prime} (t) | \mathrm{d} t = \left[ \sum_ {i = 1} ^ {n} (x _ {i} ^ {\prime} (t)) ^ {2} \right] ^ {\frac {1}{2}} \mathrm{d} t.
$$

从而

$$
\int_ {\Gamma} f (\boldsymbol {x}) \mathrm{d} s = \int_ {a} ^ {b} f (\boldsymbol {x} (t)) | \boldsymbol {x} ^ {\prime} (t) | \mathrm{d} t.\tag{24.1}
$$

例题24.1.1 求 $I = \oint_{C} x^{2} \, \mathrm{d}s$ , 其中 $C$ 为

$$
\left\{ \begin{array}{l} x ^ {2} + y ^ {2} + z ^ {2} = R ^ {2}, \\ x + y + z = 0. \end{array} \right.
$$

解1（常规方法）先写出曲线 $C$ 的参数表达式.由于 $C$ 是球面 $x^{2} + y^{2} + z^{2} = R^{2}$ 与经过球心的平面 $x + y + z = 0$ 的交线，因此是空间的一个圆周．它在 $xOy$ 平面上的投影为一个椭圆，这个椭圆方程可从两个曲面方程中消去 $z$ 得到.即以 $z = -(x + y)$ 代入 $x^{2} + y^{2} + z^{2} = R^{2}$ 中，得

$$
x ^ {2} + x y + y ^ {2} = \frac {R ^ {2}}{2}.
$$

将左边配方成平方和

$$
\left(\frac {\sqrt {3}}{2} x\right) ^ {2} + \left(\frac {x}{2} + y\right) ^ {2} = \frac {R ^ {2}}{2}.
$$

令

$$
\frac {\sqrt {3}}{2} x = \frac {R}{\sqrt {2}} \cos t, \quad \frac {x}{2} + y = \frac {R}{\sqrt {2}} \sin t, \quad t \in [ 0, 2 \pi ].
$$

即得到参数表示

$$
x = \sqrt {\frac {2}{3}} R \cos t, \quad y = \frac {R}{\sqrt {2}} \sin t - \frac {R}{\sqrt {6}} \cos t, \quad t \in [ 0, 2 \pi ].
$$

代入 $z = -(x + y)$ 中，得

$$
z = - \frac {R}{\sqrt {6}} \cos t - \frac {R}{\sqrt {2}} \sin t, \quad t \in [ 0, 2 \pi ].
$$

由此得

$$
\begin{array}{r l} \mathrm{d} s & = \sqrt {[ x ^ {\prime} (t) ] ^ {2} + [ y ^ {\prime} (t) ] ^ {2} + [ z ^ {\prime} (t) ] ^ {2}} \mathrm{d} t \\ & = R \sqrt {\frac {2}{3} \sin^ {2} t + \left(\frac {\cos t}{\sqrt {2}} + \frac {\sin t}{\sqrt {6}}\right) ^ {2} + \left(\frac {\sin t}{\sqrt {6}} - \frac {\cos t}{\sqrt {2}}\right) ^ {2}} \mathrm{d} t \\ & = R \mathrm{d} t. \end{array}
$$

故有

$$
\int_ {C} x ^ {2} \mathrm{d} s = \int_ {0} ^ {2 \pi} \frac {2}{3} R ^ {3} \cos^ {2} t \mathrm{d} t = \frac {2}{3} \pi R ^ {3}.
$$

解 2 (利用对称性) 由对称性有

$$
\int_ {C} x ^ {2} \mathrm{d} s = \int_ {C} y ^ {2} \mathrm{d} s = \int_ {C} z ^ {2} \mathrm{d} s,
$$

则

$$
\int_ {C} x ^ {2} \mathrm{d} s = \frac {1}{3} \int_ {C} (x ^ {2} + y ^ {2} + z ^ {2}) \mathrm{d} s = \frac {1}{3} R ^ {2} \int_ {C} \mathrm{d} s = \frac {2}{3} \pi R ^ {3}.
$$

### 24.1.2 第一型曲线积分的应用

为方便起见, 在 $R^{3}$ 中考虑以下问题.

求弧长 在(24.1)中令 $f\equiv1$ ，则得到弧长公式

$$
l = \int_ {\Gamma} \mathrm{d} s = \int_ {a} ^ {b} \sqrt {[ x ^ {\prime} (t) ] ^ {2} + [ y ^ {\prime} (t) ] ^ {2} + [ z ^ {\prime} (t) ] ^ {2}} \mathrm{d} t.
$$

求曲线的质量 设曲线 $\Gamma$ 的线密度为 $\rho(x,y,z)$ ，则曲线 $\Gamma$ 的质量

$$
\begin{array}{l} m = \int_ {\Gamma} \rho (x, y, z) \mathrm{d} s \\ = \int_ {a} ^ {b} \rho (x (t), y (t), z (t)) \sqrt {[ x ^ {\prime} (t) ] ^ {2} + [ y ^ {\prime} (t) ] ^ {2} + [ z ^ {\prime} (t) ] ^ {2}} \mathrm{d} t. \end{array}
$$

求曲线的质心坐标 曲线 $\Gamma$ 的质心坐标 $(x_{0}, y_{0}, z_{0})$ 由下面的公式确定：

$$
x _ {0} = \frac {1}{m} \int_ {\Gamma} x \rho (x, y, z) \mathrm{d} s, y _ {0} = \frac {1}{m} \int_ {\Gamma} y \rho (x, y, z) \mathrm{d} s, z _ {0} = \frac {1}{m} \int_ {\Gamma} z \rho (x, y, z) \mathrm{d} s,
$$

其中 $m=\int_{\Gamma}\rho(x,y,z)\mathrm{d}s$ 为曲线的质量.

例题 24.1.2 求曲线 $\Gamma$ :

$$
\left\{ \begin{array}{l} (x - y) ^ {2} = a (x + y), \\ x ^ {2} - y ^ {2} = \frac {9}{8} z ^ {2} \end{array} \right.
$$

从 $O(0,0,0)$ 到 $A(x_{0},y_{0},z_{0})$ 的弧长, 其中 a>0, $x_{0}>0$ .

解 在曲线方程第一式两边乘 $(x - y)$ ，并利用第二式得

$$
(x - y) ^ {3} = a (x ^ {2} - y ^ {2}) = \frac {9 a}{8} z ^ {2},
$$

即

$$
x - y = \frac {\sqrt [ 3 ]{9 a}}{2} z ^ {2 / 3}.\tag{24.2}
$$

将(24.2)代入第一式得

$$
x + y = \frac {3}{4} \sqrt [ 3 ]{\frac {3}{a}} z ^ {4 / 3}.\tag{24.3}
$$

由(24.2)，(24.3)把 $z$ 看成参数，得

$$
x = \frac {1}{2} \left(\frac {3}{4} \sqrt [ 3 ]{\frac {3}{a}} z ^ {4 / 3} + \frac {\sqrt [ 3 ]{9 a}}{2} z ^ {2 / 3}\right), \quad y = \frac {1}{2} \left(\frac {3}{4} \sqrt [ 3 ]{\frac {3}{a}} z ^ {4 / 3} - \frac {\sqrt [ 3 ]{9 a}}{2} z ^ {2 / 3}\right).
$$

微分后得到

$$
\mathrm{d} x = \frac {1}{2} \left(\sqrt [ 3 ]{\frac {3}{a}} z ^ {1 / 3} + \sqrt [ 3 ]{\frac {a}{3}} z ^ {- 1 / 3}\right) \mathrm{d} z, \quad \mathrm{d} y = \frac {1}{2} \left(\sqrt [ 3 ]{\frac {3}{a}} z ^ {1 / 3} - \sqrt [ 3 ]{\frac {a}{3}} z ^ {- 1 / 3}\right) \mathrm{d} z.
$$

于是

$$
\mathrm{d} s = \sqrt {\mathrm{d} x ^ {2} + \mathrm{d} y ^ {2} + \mathrm{d} z ^ {2}} = \frac {\sqrt {2}}{2} \left(\sqrt [ 3 ]{\frac {3}{a}} z ^ {1 / 3} + \sqrt [ 3 ]{\frac {a}{3}} z ^ {- 1 / 3}\right) \mathrm{d} z = \sqrt {2} \mathrm{d} x,
$$

所以弧长

$$
\int_ {\Gamma} \mathrm{d} s = \int_ {0} ^ {x _ {0}} \sqrt {2} \mathrm{d} x = \sqrt {2} x _ {0}.
$$

例题24.1.3 计算球面 $x^{2} + y^{2} + z^{2} = a^{2}$ 在第一卦限部分的边界的质心坐标 $(x_0, y_0, z_0)$ .

解 应用质心坐标公式, 其中 $\rho \equiv 1$ , $m = \frac{3}{2}\pi a$ . 如图 24.1 所示, 在 $\Gamma_{1}$ 上用极坐标系 $x = a\cos\theta, y = a\sin\theta$ , 则 ds = a d $\theta$ , 且

$$
\int_ {\Gamma_ {1}} x \mathrm{d} s = \int_ {0} ^ {\pi / 2} a \cos \theta a \mathrm{d} \theta = a ^ {2}.
$$

由对称性 $\int_{\Gamma_2} x \, \mathrm{d}s = a^2$ ，且

$$
\int_ {\Gamma_ {3}} x \mathrm{d} s = 0.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/ef11670faa12abb2128aeb45084edf30227e8304940472c9bc3d927919098c81.jpg)


于是

$$
x _ {0} = \frac {2}{3 \pi a} \left(\int_ {\Gamma_ {1}} x \mathrm{d} s + \int_ {\Gamma_ {2}} x \mathrm{d} s\right) = \frac {4 a}{3 \pi}.
$$

图24.1

再用对称性得

$$
y _ {0} = z _ {0} = \frac {4 a}{3 \pi}.
$$

### 24.1.3 练习题

1. 计算下列第一型曲线积分:

(1) $\int_{C} (x^{4/3} + y^{4/3}) \, \mathrm{d}s$ , 其中 $C$ 为星形线 $x^{2/3} + y^{2/3} = a^{2/3}$ ;

(2) $\int_{C} e^{\sqrt{x^{2}+y^{2}}} ds$ ，其中 C 为由曲线 r=a, $\varphi=0$ , $\varphi=\frac{\pi}{4}$ (r 和 $\varphi$ 为极坐标)
所界的凸围线;

(3) $\int_{C} |y| \mathrm{d}s$ , 其中 $C$ 为双纽线 $(x^{2} + y^{2})^{2} = a^{2}(x^{2} - y^{2})$ ;

(4) $\int_{C} \frac{\mathrm{d}s}{y^2}$ , 其中 $C$ 为悬链线 $y = a \operatorname{ch} \frac{x}{a}$ ;

(5) $\int_{C} z \, \mathrm{d}s$ , 其中 $C$ 为曲线 $x^{2} + y^{2} = z^{2}, y^{2} = ax$ 从 $(0,0,0)$ 到 $(a, a, \sqrt{2} a)$ 的弧.

2. 求下列空间曲线的弧长:

(1) $y = a \arcsin \frac{x}{a}, z = \frac{a}{4} \ln \frac{a - x}{a + x}$ 从 (0,0,0) 到 $(x_0, y_0, z_0)$ ;

$$
x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2}, \sqrt {x ^ {2} + y ^ {2}} \operatorname{ch} \Big (\arctan {\frac {y}{x}} \Big) = a   \text { 从 } (a, 0, 0)   \text { 到 } (x, y, z). \tag {2}
$$

3. 计算均匀的曲线 $y = a \operatorname{ch} \frac{x}{a}$ 从 $(0, a)$ 到 $(b, h)$ 的弧的质心坐标.

4. 设 $\Gamma = \widetilde{AB}$ 是 $R^{n}$ 中的简单可求长曲线, $\Gamma$ 的弧长记为 L. 对每一个 $s \in [0, L]$ , 存在惟一的 $x \in \Gamma$ , $\boldsymbol{x} = (x_{1}, x_{2}, \cdots, x_{n})$ , 使得 $\Gamma$ 上从 A 到 x 的曲线段 $\widetilde{Ax}$ 的弧长等于 s, 由此定义了一个 $[0, L]$ 上的函数

$$
\boldsymbol {x} = \boldsymbol {x} (s), \quad 0 \leqslant s \leqslant L.\tag{24.4}
$$

即曲线 $\Gamma$ 以弧长 $s$ 为参数的参数方程为 (24.4). 设 $f$ 是定义在 $\Gamma$ 上的函数, 如果 $f$ 在 $\Gamma$ 上的第一型曲线积分存在, 则

$$
\int_ {\Gamma} f (\boldsymbol {x}) \mathrm{d} s = \int_ {0} ^ {L} f (\boldsymbol {x} (s)) \mathrm{d} s.
$$

## §24.2 第二型曲线积分

### 24.2.1 第二型曲线积分的定义和计算

第二型曲线积分的物理背景之一是质点受力沿曲线运动所做的功. 因此我们给定了曲线的起点和终点. 这样的曲线称为有向曲线. 下面以 $\mathbf{R}^3$ 为例定义第二型曲线积分. 设 $\Gamma = \widetilde{AB}$ 是 $\mathbf{R}^3$ 中一条简单可求长的有向曲线

$$
\boldsymbol {F} = \boldsymbol {F} (x, y, z) = P (x, y, z) \boldsymbol {i} + Q (x, y, z) \boldsymbol {j} + R (x, y, z) \boldsymbol {k}
$$

为定义在 $\Gamma$ 上的向量值函数. 对于与 $\Gamma$ 方向一致的任意分割 T,

$$
T: A = A _ {0}, A _ {1}, A _ {2}, \dots , A _ {m} = B,
$$

记 $A_{i} = (x_{i},y_{i},z_{i}),\Delta x_{i} = x_{i} - x_{i - 1},\Delta y_{i} = y_{i} - y_{i - 1},\Delta z_{i} = z_{i} - z_{i - 1},\Delta S_{i}$ 为曲线段 $\widetilde{A_{i - 1}A_i}$ 的弧长， $d(T) = \max_{1\leqslant i\leqslant m}\{\Delta S_i\}$ .任取 $(\xi_i,\eta_i,\zeta_i)\in \widetilde{A_{i - 1}A_i}$ ，如果极限

$$
\lim _ {d (T) \rightarrow 0} \sum_ {i} \left[ P (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta x _ {i} + Q (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta y _ {i} + R (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta z _ {i} \right]
$$

存在且极限与 $\Gamma$ 的具体分法以及 $(\xi_i, \eta_i, \zeta_i)$ 的具体取法无关，则称 $F$ 沿 $\Gamma$ 的第二型曲线积分存在，极限值称为 $F$ 沿 $\Gamma$ 的第二型曲线积分，记为

$$
I = \int_ {\Gamma} P (x, y, z) \mathrm{d} x + Q (x, y, z) \mathrm{d} y + R (x, y, z) \mathrm{d} z
$$

或

$$
I = \int_ {\Gamma} \boldsymbol {F} (x, y, z) \cdot \mathrm{d} \boldsymbol {r}.
$$

第二型曲线积分又称为对坐标的积分.

若逐段光滑的有向曲线 $\Gamma$ 有参数表示

$$
x = x (t), \quad y = y (t), \quad z = z (t), \quad a \leqslant t \leqslant b,
$$

其中 $[a, b]$ 是实轴上的有向区间，参数 $t$ 从 $a$ 变到 $b$ 与 $\Gamma$ 的定向一致，设 $P(x, y, z)$ ， $Q(x, y, z)$ ， $R(x, y, z)$ 在 $\Gamma$ 上连续，则

$$
\begin{array}{l} \int_ {\Gamma} P (x, y, z) \mathrm{d} x + Q (x, y, z) \mathrm{d} y + R (x, y, z) \mathrm{d} z \\ = \int_ {a} ^ {b} [ P (x (t), y (t), z (t)) x ^ {\prime} (t) + Q (x (t), y (t), z (t)) y ^ {\prime} (t) + R (x (t), y (t), z (t)) z ^ {\prime} (t) ] \mathrm{d} t. \end{array}
$$

例题24.2.1 计算积分

$$
I = \int_ {C} (x ^ {2} + 2 x y) \mathrm{d} y,
$$

其中 C 表示逆时针方向的上半椭圆 $\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1$ .

解 利用椭圆的参数表达式

$$
x = a \cos t, \quad y = b \sin t,
$$

按给定方向 t 由 0 变到 $\pi$ ，将 x, y 用 t 的表达式代入并用 $b \cos t \, dt$ 来代替 dy，得

$$
\begin{array}{r l} I & = \int_ {0} ^ {\pi} (a ^ {2} \cos^ {2} t + 2 a b \cos t \sin t) b \cos t \mathrm{d} t \\ & = a ^ {2} b \int_ {0} ^ {\pi} \cos^ {3} t \mathrm{d} t + 2 a b ^ {2} \int_ {0} ^ {\pi} \cos^ {2} t \sin t \mathrm{d} t = \frac {4}{3} a b ^ {2}. \end{array}
$$

例题24.2.2 求 $I = \int_{\Gamma} y^{2} \, \mathrm{d}x + z^{2} \, \mathrm{d}y + x^{2} \, \mathrm{d}z,$ 其中 $\Gamma$ 为曲线

$$
\left\{ \begin{array}{l} x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2}, \\ x ^ {2} + y ^ {2} = a x (a > 0) \end{array} \right.
$$

上 $z \geqslant 0$ 的部分 (即 Viviani 体的顶部曲线), 且从 $x$ 轴正向看 $\Gamma$ 是逆时针方向.

解 参见图 22.11. 先求曲线 $\Gamma$ 的参数表达式. 若以 x, y, z 之一为参数, 则要涉及开方运算, 出现分支, 很不方便. 从第二个方程易见引入柱坐标

$$
x = r \cos \theta , \quad y = r \sin \theta , \quad z = z,
$$

于是 $\Gamma$ 的参数方程为

$$
\begin{array}{l} {x = a \cos^ {2} \theta , \quad y = a \cos \theta \sin \theta ,} \\ {z = \sqrt {a ^ {2} - r ^ {2}} = a | \sin \theta |, \quad - \frac {\pi}{2} \leqslant \theta \leqslant \frac {\pi}{2}.} \end{array}
$$

根据曲线定向, 有

$$
\begin{array}{r l} I = & \int_ {- \pi / 2} ^ {\pi / 2} \left[ a ^ {2} \cos^ {2} \theta \sin^ {2} \theta \cdot 2 a \cos \theta (- \sin \theta) \right. \\ & \left. + a ^ {2} \sin^ {2} \theta \cdot a (\cos^ {2} \theta - \sin^ {2} \theta) + a ^ {2} \cos^ {4} \theta \cdot z ^ {\prime} (\theta) \right] d \theta . \end{array}
$$

第一项是奇函数, 且因子 $z(\theta)$ 是偶函数, 所以 $z'(\theta)$ 是奇函数, 故第三项也是奇函数, 于是

$$
\begin{array}{r l} I & = \int_ {- \pi / 2} ^ {\pi / 2} a ^ {3} \sin^ {2} \theta (\cos^ {2} \theta - \sin^ {2} \theta) \mathrm{d} \theta \\ & = 2 a ^ {3} \int_ {0} ^ {\pi / 2} (\sin^ {2} \theta - 2 \sin^ {4} \theta) \mathrm{d} \theta = - \frac {\pi}{4} a ^ {3}. \end{array}
$$

有的时候空间曲线的参数方程不容易写出或写出来比较复杂, 我们可以借助下列命题把问题转化为平面曲线的曲线积分.

命题24.2.1设逐段光滑曲线 $\Gamma$ 在光滑曲面 $z = f(x,y)$ 上，曲线 $\Gamma$ 在 $xOy$ 平面上的投影曲线为 $\gamma$ ，函数 $P(x,y,z)$ 在 $\Gamma$ 上连续，则

$$
\oint_ {\Gamma} P (x, y, z) \mathrm{d} x = \oint_ {\gamma} P (x, y, f (x, y)) \mathrm{d} x,
$$

其中 $\gamma$ 的定向与 $\Gamma$ 的定向一致.

证 设 $\gamma$ 的参数方程为

$$
x = \varphi (t), \quad y = \psi (t), \quad a \leqslant t \leqslant b,
$$

则空间曲线 $\Gamma$ 的方程为

$$
x = \varphi (t), \quad y = \psi (t), \quad z = f (\varphi (t), \psi (t)).
$$

于是

$$
\begin{array}{r l} \oint_ {\Gamma} P (x, y, z) \mathrm{d} x & = \int_ {a} ^ {b} P [ \varphi (t), \psi (t), f (\varphi (t), \psi (t)) ] \varphi^ {\prime} (t) \mathrm{d} t \\ & = \oint_ {\gamma} P (x, y, f (x, y)) \mathrm{d} x. \end{array}
$$

### 24.2.2 两类曲线积分的关系

坐标微元 $\mathrm{d}\pmb {r} = \pmb{\tau}\mathrm{d}s,$ 其中 $\pmb{\tau}$ 为曲线沿指定方向的单位切向.因而就有

$$
\int_ {\Gamma} \boldsymbol {F} (\boldsymbol {x}) \cdot \mathrm{d} \boldsymbol {r} = \int_ {\Gamma} (\boldsymbol {F} (\boldsymbol {x}) \cdot \boldsymbol {\tau}) \mathrm{d} s.
$$

对于空间曲线 $\Gamma$ ，设 $\cos \alpha ,\cos \beta ,\cos \gamma$ 是切方向余弦，则

$$
\int_ {\Gamma} P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z = \int_ {\Gamma} (P \cos \alpha + Q \cos \beta + R \cos \gamma) \mathrm{d} s.\tag{24.5}
$$

当 $\Gamma$ 为平面曲线时, 取法线的方向 n 与切线的方向 $\tau$ 的夹角 $\angle(n,\tau)=\frac{\pi}{2}$ , 见图 24.2, 则

$$
\begin{array}{c} {{\angle (x, \pmb {n}) = \angle (x, \pmb {\tau}) + \angle (\pmb {\tau}, \pmb {n}) = \alpha - \frac {\pi}{2},}} \\ {{\text {即}}} \end{array}
$$

$$
\cos \alpha = - \sin (x, \boldsymbol {n}), \quad \sin \alpha = \cos (x, \boldsymbol {n}).
$$

于是 $\Gamma$ 为平面曲线时

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/b56b3ed71127fec09259530db92cd1f583802574bc23fd1d016772b6982067a0.jpg)



图24.2


$$
\int_ {\Gamma} P \mathrm{d} x + Q \mathrm{d} y = \int_ {\Gamma} [ - P \sin (x, \boldsymbol {n}) + Q \cos (x, \boldsymbol {n}) ] \mathrm{d} s.\tag{24.6}
$$

### 24.2.3 第二型曲线积分的应用

求变力做功

例题 24.2.3 已知一平面力场, 它的方向指向坐标原点, 它的大小与它到原点的距离 r 的平方成反比:

$$
F = \frac {\mu}{r ^ {2}},
$$

其中 $\mu$ 为常数. 计算当质量 $m = 1$ 的质点自位置 $A$ 移动到位置 $B$ (不通过原点)时力场做的功.

解 以 $(x, y)$ 表示点的坐标. 设力与 $x$ 轴的夹角 $\theta$ , 则

$$
\cos \theta = - \frac {x}{r}, \quad \sin \theta = - \frac {y}{r}.
$$

于是力在 $x, y$ 方向的分量分别为

$$
F _ {1} (x, y) = F \cos \theta = - \mu \frac {x}{r ^ {3}}, \quad F _ {2} (x, y) = F \sin \theta = - \mu \frac {y}{r ^ {3}}.
$$

而功可表示为曲线积分

容易看出

$$
\begin{array}{r l} w & = - \mu \int_ {\widetilde {A B}} \frac {x \mathrm{d} x + y \mathrm{d} y}{r ^ {3}}. \\ & - \frac {x \mathrm{d} x + y \mathrm{d} y}{r ^ {3}} = \mathrm{d} \frac {1}{r}, \end{array}\tag{24.7}
$$

且如将 $x, y$ 用参数表达式 $x = \varphi(t), y = \psi(t)$ 代入，其中 $a \leqslant t \leqslant b$ ，并令

$$
r = \sqrt {x ^ {2} + y ^ {2}} = \sqrt {\varphi^ {2} (t) + \psi^ {2} (t)}
$$

时, 等式 (24.7) 仍成立. 于是

$$
w = \mu \int_ {a} ^ {b} \mathrm{d} \frac {1}{r} = \left. \frac {\mu}{r} \right| _ {a} ^ {b} = \mu \left(\frac {1}{r _ {B}} - \frac {1}{r _ {A}}\right),
$$

其中 $r_{A}, r_{B}$ 分别表示原点到点 A, B 的距离.

梯度曲线 设 f 是区域 $D \subset R^{3}$ 上的 $C^{1}$ 函数，并设 $\nabla f$ 是在 D 上处处不为零的向量。若 $\Gamma$ 是自某点 $(x_{0}, y_{0}, z_{0}) \in D$ 出发的可微曲线，它的每一点的切线方向与 f 的梯度方向一致，就称 $\Gamma$ 为 f 在 D 上的梯度曲线。设 $\Gamma$ 的参数方程为

$$
x = x (t), \quad y = y (t), \quad z = z (t),
$$

则可取 $x(t)$ ， $y(t)$ 和 $z(t)$ 满足如下微分方程组：

$$
\frac {\mathrm{d} x}{\mathrm{d} t} = \frac {1}{| \nabla f |} \frac {\partial f}{\partial x}, \quad \frac {\mathrm{d} y}{\mathrm{d} t} = \frac {1}{| \nabla f |} \frac {\partial f}{\partial y}, \quad \frac {\mathrm{d} z}{\mathrm{d} t} = \frac {1}{| \nabla f |} \frac {\partial f}{\partial z},\tag{24.8}
$$

初始值为 $x(0) = x_0, y(0) = y_0, z(0) = z_0$ 。由常微分方程组解的存在性定理和延拓定理①， $x(t), y(t)$ 和 $z(t)$ 在 $D$ 内存在并可延伸到 $D$ 的边界。由 (24.8)， $\Gamma$ 的弧长微分满足

$$
\mathrm{d} s = \sqrt {(x ^ {\prime} (t)) ^ {2} + (y ^ {\prime} (t)) ^ {2} + (z ^ {\prime} (t)) ^ {2}} \mathrm{d} t = \mathrm{d} t.
$$

下面我们借助 $\mathbf{R}^2$ 中的梯度曲线重新讨论例题21.3.3.这是著名的美国大学Putnam竞赛第二十八届的B6题，它公布的标准答案就是例题21.3.3的解答.我们现在可以将那里的梯度模的最小值的上界估计从16改进为4.

例题24.2.4设 $f(x,y)$ 在单位圆盘 $D = \{(x,y)\mid x^2 +y^2\leqslant 1\}$ 上具有连续的一阶偏导数，且满足 $|f(x,y)|\leqslant 1,\forall (x,y)\in D$ ，证明：存在点 $\pmb {p}_0(x_0,y_0)\in \mathrm{int}D = \{(x,y)\mid x^2 +y^2 < 1\}$ ，使得 $(f_x^2 +f_y^2)\big|_{(x_0,y_0)}\leqslant 4.$ 

证 如果有点 $(x_0, y_0)$ , 使 $\nabla f(x_0, y_0) = 0$ , 即 $f_x(x_0, y_0) = f_y(x_0, y_0) = 0$ , 则估计式成立. 如果 $\nabla f$ 在 $D$ 中处处不为零向量, 则 $f$ 在 $D$ 中的梯度曲线存在. 设 $\Gamma$ 是 $f$ 在 $D$ 中的梯度曲线, 其参数方程为

$$
x = x (t), \quad y = y (t), \quad t \in [ 0, T ],
$$

Γ 的起点为原点, 终点为 $(x(T), y(T))$ . 由曲线积分公式得到

$$
\begin{array}{r l} f (x (T), y (T)) - f (0, 0) & = \int_ {0} ^ {T} \left(\frac {\partial f}{\partial x} x ^ {\prime} (t) + \frac {\partial f}{\partial y} y ^ {\prime} (t)\right) \mathrm{d} t \\ & = \int_ {0} ^ {T} \frac {\frac {\partial f}{\partial x} x ^ {\prime} (t) + \frac {\partial f}{\partial y} y ^ {\prime} (t)}{\sqrt {(x ^ {\prime} (t)) ^ {2} + (y ^ {\prime} (t)) ^ {2}}} \cdot \sqrt {(x ^ {\prime} (t)) ^ {2} + (y ^ {\prime} (t)) ^ {2}} \mathrm{d} t \\ & = \int_ {\Gamma} (\nabla f (x, y) \cdot \boldsymbol {\tau}) \mathrm{d} s. \end{array}
$$

设 l 是 $\Gamma$ 的弧长, 并且 $\Gamma$ 自原点出发到达 D 的边界, 则 $l \geqslant 1$ . 如果在 intD 上处处有 $\nabla f(x, y) \cdot \tau > 2$ , 则就有

$$
2 \geqslant | f (x (T), y (T)) - f (0, 0) | > 2 l \geqslant 2,
$$

引出矛盾. 因此存在 $(x_0, y_0) \in \mathrm{int}D$ , 使 $\nabla f(x_0, y_0) \cdot \tau \leqslant 2$ . 又因为 $\nabla f$ 与 $\tau$ 相切, 故 $\nabla f(x_0, y_0) \cdot \tau = |\nabla f(x_0, y_0)| \leqslant 2$ , 即 $(f_x^2 + f_y^2)|_{(x_0, y_0)} \leqslant 4$ .

注 用梯度曲线来估计函数差的下界也是十分有效的, 其依据就是函数沿梯度方向增长最快. 用这样的方法可以证明如下的高维中值定理 (见《美国数学月刊》(1999) 第 106 卷 674-675 页, 其证明作为第二组参考题 2).

设 $f(\pmb{x})$ 为定义在以 $r$ 为半径的 $n$ 维球

$$
D = \left\{\boldsymbol {x} = \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) \mid x _ {1} ^ {2} + x _ {2} ^ {2} + \dots + x _ {n} ^ {2} \leqslant r ^ {2} \right\}
$$

上的连续可微函数, 则存在点 $\boldsymbol{p}_{0}=(p_{1}^{0},p_{2}^{0},\cdots,p_{n}^{0})\in\mathrm{int}D$ , 使

$$
\max _ {\boldsymbol {x} \in D} \{f (\boldsymbol {x}) \} - \min _ {\boldsymbol {x} \in D} \{f (\boldsymbol {x}) \} = | \nabla f (\boldsymbol {p} _ {0}) | \cdot 2 r.
$$

利用这个结果或修改上述例题中的证明可以将估计值4改进为最佳的估计值1.

### 24.2.4 练习题

1. 计算 $\int_{L} xy \, dx + (y - x) \, dy$ ，其中 L 为曲线， $\widetilde{AB}$ 方向为由 A 到 B， $A = (1, 1)$ ， $B = (2, 3)$ :

(1) $\widetilde{AB}$ 是直线 $AB$ ; (2) $\widetilde{AB}$ 的方程是 $y = 2(x - 1)^2 + 1$ ; (3) $\widetilde{AB}$ 是折线 $\overline{ADB}, D = (2,1)$ .

2. 求 $\int_{C}\frac{x}{y}dx+\frac{1}{y-a}dy$ ，其中 C 是旋轮线 $x=a(t-\sin t)$ ， $y=a(1-\cos t)$ 对应于 $t=\frac{\pi}{6}$ 到 $t=\frac{\pi}{3}$ 的一段.

3. 求 $\int_{C} (x + y)^{2} \mathrm{d}x + (x^{2} - y^{2}) \mathrm{d}y$ ，其中 $C$ 是以 $A(1,1), B(3,2), D(3,1)$ 为顶点的三角形，取顺时针方向.

4. 求 $\int_{C} 4xy^{2} \mathrm{~d}x - 3x^{4} \mathrm{~d}y$ ，其中 $C$ 是抛物线 $y = \frac{1}{2} x^{2}$ 自 $(0,0)$ 到 $(2,2)$ 的一段.

5. 求 $\oint_{C} (y^2 + z^2) \, \mathrm{d}x + (z^2 + x^2) \, \mathrm{d}y + (x^2 + y^2) \, \mathrm{d}z$ ，其中 $C$ 是曲面 $x^2 + y^2 + z^2 = 2Rx$ ， $x^2 + y^2 = 2ax$ 的交线 $(0 < a < R, z > 0)$ ，且由 $z$ 轴正向看是逆时针方向。

6. 求 $\int_{C} y \, dx + z \, dy + x \, dz$ ，其中 C 为球面上的曲线： $x = R \sin \varphi \cos \theta, y = R \sin \varphi \sin \theta, z = R \cos \varphi,$ $R > 0, 0 \leqslant \varphi \leqslant \pi, 0 \leqslant \theta < 2\pi,$ 

并且使(1) $R, \varphi$ 为常数；或(2) $R, \theta$ 为常数.

7. 求 $\int_{C}(x^{2}+5y+3yz)\mathrm{d}x+(5x+3xy-2)\mathrm{d}y+(3xy-4z)\mathrm{d}z,$ 其中 C 为
(1) $x = a \cos t, y = a \sin t, z = \frac{bt}{2\pi}$ 自 t = 0 到 $2\pi$ 的一段;

(2) 直线段 AB, 起点 $A = (a, 0, 0)$ , 终点 $B = (a, 0, b)$ .

8. 已知力场 $\boldsymbol{F}(x,y,z)=y\boldsymbol{i}-x\boldsymbol{j}+(x+y+z)\boldsymbol{k}$ ，求质点沿曲线 $x=a\cos t, y=a\sin t, z=\frac{b}{2\pi}t$ 从点 $A(a,0,0)$ 运动到点 $B(a,0,b)$ 时，力场 F 对质点所做的功.

9. 质点在力场 $F = \frac{e^{x}}{1 + y^{2}} i + \frac{2y(1 - e^{x})}{(1 + y^{2})^{2}} j$ 作用下，沿 $x^{2} + (y - 1)^{2} = 1$ 由点 (0,0) 沿顺时针方向运动到点 (1,1)，求力场所做的功.

## §24.3 Green 公式

### 24.3.1 Green公式

Green 公式是将平面内的某区域上的二重积分与该区域边界上的一个特定的第二型曲线积分之间建立联系的一个重要公式.

设 $D$ 是 $\mathbf{R}^2$ 内的一个有界闭区域, 其边界 $\partial D$ 由光滑曲线或逐段光滑曲线组成. 又设函数 $P, Q$ 在 $D$ 上有关于自变量 $x$ 和 $y$ 的连续偏导数, 则下列 Green 公式成立:

$$
\iint_ {D} \left(- \frac {\partial P}{\partial y} + \frac {\partial Q}{\partial x}\right) \mathrm{d} x \mathrm{d} y = \oint_ {\partial D} P \mathrm{d} x + Q \mathrm{d} y,\tag{24.9}
$$

其中 $\partial D$ 的方向关于 D 是正向的.

由平面上两类曲线积分之间的关系式(24.6)知, Green 公式(24.9)又可以写为

$$
\begin{array}{r l} \iint_ {D} \left(\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y}\right) \mathrm{d} x \mathrm{d} y & = \oint_ {\partial D} - Q \mathrm{d} x + P \mathrm{d} y \\ & = \oint_ {\partial D} [ Q \sin (x, \boldsymbol {n}) + P \cos (x, \boldsymbol {n}) ] \mathrm{d} s, \end{array}
$$

其中 n 是 $\partial D$ 上的单位外法向量. 利用 $\angle(x,n)=\angle(x,y)+\angle(y,n)=\frac{\pi}{2}+\angle(y,n)$ (参见图 24.2), 则

$$
\iint_ {D} \left(\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y}\right) \mathrm{d} x \mathrm{d} y = \oint_ {\partial D} [ P \cos (x, \boldsymbol {n}) + Q \cos (y, \boldsymbol {n}) ] \mathrm{d} s.\tag{24.10}
$$

公式 (24.9), (24.10) 给我们提供了间接求平面上曲线积分的方法, 即利用 Green 公式将曲线积分化为二重积分, 即使曲线 $C$ 不封闭, 也可以采用添加“辅助线”的方法去做.

例题 24.3.1 C 为抛物线 $2x = \pi y^{2}$ 自 $(0,0)$ 到 $\left(\frac{\pi}{2},1\right)$ 的弧段, 求

$$
I = \int_ {C} (2 x y ^ {3} - y ^ {2} \cos x) \mathrm{d} x + (1 - 2 y \sin x + 3 x ^ {2} y ^ {2}) \mathrm{d} y.
$$

解 令 $P(x,y) = 2xy^{3} - y^{2}\cos x, Q(x,y) = 1 - 2y\sin x + 3x^{2}y^{2}$ ，则

$$
- \frac {\partial P}{\partial y} + \frac {\partial Q}{\partial x} = 0.
$$

为了利用 Green 公式 (24.9), 添加辅助线 (如图 24.3), 则

$$
I = \int_ {C} + \int_ {\widetilde {B A}} + \int_ {\widetilde {A O}} + \int_ {\widetilde {A B}} + \int_ {\widetilde {O A}}.
$$

由 Green 公式, 前三项的积分为零, 于是

$$
\begin{array}{r l} I & = \int_ {\widetilde {A B}} + \int_ {\widetilde {O A}} \\ & = \int_ {0} ^ {1} \left[ 1 - 2 y \sin \frac {\pi}{2} + 3 \left(\frac {\pi}{2}\right) ^ {2} y ^ {2} \right] \mathrm{d} y = \frac {\pi^ {2}}{4}. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/7ae11022847a5a2f81f1466d5be1134c1b1a4367102718223e66d8e2125cf81a.jpg)



图24.3


例题24.3.2 计算积分

$$
I = \oint_ {C} \frac {\cos (\boldsymbol {r} , \boldsymbol {n})}{r} \mathrm{d} s,
$$

其中 C 为逐段光滑的简单闭曲线, $\boldsymbol{r} = (x, y)$ , $r = |r| = \sqrt{x^{2} + y^{2}}$ , n 是 C 上的单位外法向量.

解 由 $\cos (\pmb {r},\pmb{n}) = \frac{\pmb{r}\cdot\pmb{n}}{r} = \frac{1}{r} (x\cos (\pmb {n},x) + y\cos (\pmb {n},y))$ 得到

$$
I = \oint_ {C} \left(\frac {x}{r ^ {2}} \cos (\boldsymbol {n}, x) + \frac {y}{r ^ {2}} \cos (\boldsymbol {n}, y)\right) d s.
$$

当 $(0,0)$ 在C外时，利用Green公式(24.10)，则

$$
I = \iint_ {D} \left[ \partial_ {x} (\frac {x}{r ^ {2}}) + \partial_ {y} (\frac {y}{r ^ {2}}) \right] \mathrm{d} x \mathrm{d} y = 0,
$$

其中 D 是以 C 为边界的区域.

当 $(0,0)$ 在 $C$ 内时，以 $(0,0)$ 为圆心，以充分小的 $\varepsilon$ 为半径作圆 $C_{\varepsilon}$ ，使得 $C_{\varepsilon}$ 在 $C$ 内，以 $C$ 及 $C_{\varepsilon}$ 为边界的区域为 $D_{\varepsilon}$ ，则

$$
\begin{array}{r l} I = & \oint_ {C} \left(\frac {x}{r ^ {2}} \cos (\boldsymbol {n}, x) + \frac {y}{r ^ {2}} \cos (\boldsymbol {n}, y)\right) \mathrm{d} s + \oint_ {C _ {\varepsilon}} \left(\frac {x}{r ^ {2}} \cos (\boldsymbol {n}, x) + \frac {y}{r ^ {2}} \cos (\boldsymbol {n}, y)\right) \mathrm{d} s \\ & - \oint_ {C _ {\varepsilon}} \left(\frac {x}{r ^ {2}} \cos (\boldsymbol {n}, x) + \frac {y}{r ^ {2}} \cos (\boldsymbol {n}, y)\right) \mathrm{d} s. \end{array}
$$

其中 $C_{\varepsilon}$ 上的单位法向量 $\pmb{n}$ 的方向指向坐标原点.对前两项用Green公式，则

$$
I = - \oint_ {C _ {\varepsilon}} \left(\frac {x}{r ^ {2}} \cos (\boldsymbol {n}, x) + \frac {y}{r ^ {2}} \cos (\boldsymbol {n}, y)\right) d s.
$$

在圆周 $C_{\varepsilon}$ 上，

$$
\cos (\boldsymbol {n}, x) = - \frac {x}{\varepsilon}, \cos (\boldsymbol {n}, y) = - \frac {y}{\varepsilon}, r = \varepsilon ,
$$

从而

$$
I = \oint_ {C _ {\varepsilon}} \frac {1}{\varepsilon} \mathrm{d} s = 2 \pi .
$$

当 $(0,0)\in C$ 时，过原点作曲线 $C$ 的切线 $OA,OB,$ 设 $OA,OB$ 的夹角为 $\theta$ （见图24.4），如果曲线 $C$ 在原点光滑，则 $\theta = \pi$ 

作一个以 $(0,0)$ 点为心， $\varepsilon$ 为半径的圆 $B_{\varepsilon}$ ，记 $B_{\varepsilon}$ 的圆周在 C 内的部分为 $C_{\varepsilon}$ ，由上面的计算知

$$
I = \lim _ {\varepsilon \rightarrow 0} \int_ {C _ {\varepsilon}} \frac {1}{\varepsilon} \mathrm{d} s = \lim _ {\varepsilon \rightarrow 0} \theta_ {\varepsilon} = \theta ,
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/b3350c595128530fb88cfee4bca3b95202eb7cc248fa01ac2282c38e948ebb20.jpg)


其中 $\theta_{\varepsilon}$ 是 $C_{\varepsilon}$ 所对应的圆心角.


图24.4


注 注意使用 Green 公式的条件: P, Q 在 D 上连续可微. 这正是在本题中要区分 $(0,0)$ 在 C 外, C 内和 C 上三种情况讨论的缘故. 许多学生没有能够注意到这里的区别, 尤其是当点 $(0,0)$ 在 C 内时, 他们会错误地认为被积函数在 C 上是连续可微的, 因而 Green 公式就可以了.

例题24.3.3 计算

$$
I = \oint_ {C} \frac {\mathrm{e} ^ {y}}{x ^ {2} + y ^ {2}} \left[ (x \sin x + y \cos x) \mathrm{d} x + (y \sin x - x \cos x) \mathrm{d} y \right],
$$

其中 $C: x^{2} + y^{2} = 1$ ，取逆时针方向.

解令

$$
P (x, y) = \frac {\mathrm{e} ^ {y}}{x ^ {2} + y ^ {2}} (x \sin x + y \cos x),
$$

$$
Q (x, y) = \frac {\mathrm{e} ^ {y}}{x ^ {2} + y ^ {2}} (y \sin x - x \cos x),
$$

由计算知 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ ，从而可在不包含原点的区域上用Green公式．为此取 $C_{\varepsilon}:x^{2} + y^{2} = \varepsilon^{2}$ ，取逆时针方向，则

$$
I = \oint_ {C} - \oint_ {C _ {\varepsilon}} + \oint_ {C _ {\varepsilon}}.
$$

对等式右边前两项用 Green 公式, 于是

$$
\begin{array}{l} I = \oint_ {C _ {\varepsilon}} \frac {\mathrm{e} ^ {y}}{x ^ {2} + y ^ {2}} \left[ (x \sin x + y \cos x) \mathrm{d} x + (y \sin x - x \cos x) \mathrm{d} y \right] \\ = \frac {1}{\varepsilon^ {2}} \oint_ {C _ {\varepsilon}} \mathrm{e} ^ {y} \left[ (x \sin x + y \cos x) \mathrm{d} x + (y \sin x - x \cos x) \mathrm{d} y \right]. \end{array}
$$

记 $C_{\varepsilon}$ 围成的区域为 $D_{\varepsilon}$ ，再用一次Green公式，则

$$
I = \frac {1}{\varepsilon^ {2}} \iint_ {D _ {\varepsilon}} - 2 \mathrm{e} ^ {y} \cos x \mathrm{d} x \mathrm{d} y.
$$

应用积分中值定理得到

$$
I = \frac {1}{\varepsilon^ {2}} (- 2 \pi \varepsilon^ {2} \mathrm{e} ^ {\eta} \cos \xi) = - 2 \pi \mathrm{e} ^ {\eta} \cos \xi ,
$$

其中 $(\xi, \eta) \in D_{\varepsilon}$ . 上述等式 $\forall \varepsilon > 0$ 都对, 令 $\varepsilon \to 0$ , 得

$$
I = \lim _ {\varepsilon \rightarrow 0 ^ {+}} (- 2 \pi \mathrm{e} ^ {\eta} \cos \xi) = - 2 \pi .
$$

平面图形的面积 作为 Green 公式的直接推论, 可以得到如下的面积公式.

由逐段光滑的简单曲线 C 所界的面积 S 可用曲线积分表示为

$$
S = \oint_ {C} x \mathrm{d} y = - \oint_ {C} y \mathrm{d} x = \frac {1}{2} \oint_ {C} x \mathrm{d} y - y \mathrm{d} x,
$$

其中曲线的正向为逆时针方向(参见上册336-340页的公式(11.1)及例题).

例题24.3.4 计算双纽线

$$
(x ^ {2} + y ^ {2}) ^ {2} = a ^ {2} (x ^ {2} - y ^ {2})\tag{24.11}
$$

所围区域的面积.

解 1 由对称性只需计算第一、四象限的面积. 令

$$
x = r \cos \theta , y = r \sin \theta , - \frac {\pi}{4} \leqslant \theta \leqslant \frac {\pi}{4},
$$

代入方程(24.11)得 $r=a\sqrt{\cos2\theta}$ ，则参数方程为

$$
x (\theta) = a \cos \theta \sqrt {\cos 2 \theta}, y (\theta) = a \sin \theta \sqrt {\cos 2 \theta}, - \frac {\pi}{4} \leqslant \theta \leqslant \frac {\pi}{4}.
$$

并且

$$
x ^ {\prime} (\theta) = a (- \sin \theta) \sqrt {\cos 2 \theta} + a \cos \theta \frac {- \sin 2 \theta}{\sqrt {\cos 2 \theta}},
$$

$$
y ^ {\prime} (\theta) = a \cos \theta \sqrt {\cos 2 \theta} + a \sin \theta \frac {- \sin 2 \theta}{\sqrt {\cos 2 \theta}},
$$

所以

$$
x y ^ {\prime} - y x ^ {\prime} = a ^ {2} \cos 2 \theta .
$$

由面积公式得到

$$
S = 2 \cdot \frac {1}{2} \oint x \mathrm{d} y - y \mathrm{d} x = \int_ {- \pi / 4} ^ {\pi / 4} a ^ {2} \cos 2 \theta \mathrm{d} \theta = a ^ {2}.
$$

解 2 (用定积分求面积) 在极坐标系中, 双纽线 (24.11) 的方程为

$$
r ^ {2} = a ^ {2} \cos 2 \theta , \theta \in \left[ - \frac {\pi}{4}, \frac {\pi}{4} \right] \cup \left[ \frac {3 \pi}{4}, \frac {5 \pi}{4} \right].
$$

于是

$$
S = 4 \cdot \frac {1}{2} \int_ {0} ^ {\pi / 4} r ^ {2} \mathrm{d} \theta = 2 \int_ {0} ^ {\pi / 4} a ^ {2} \cos 2 \theta \mathrm{d} \theta = a ^ {2}.
$$

### 24.3.2 平面曲线积分与路径无关的条件

在力学上一种非常重要的力场是保守场. 质点在保守场中移动, 保守场所做的功只与质点的起点和终点的位置有关, 与移动的具体路径无关. 什么样的力场是保守场的问题从数学上看就是在什么条件下第二型曲线积分与路径无关, 这个问题不仅具有明显的实际背景, 而且在理论上也有很重要的意义.

设 $\Omega$ 是 $\mathbf{R}^2$ 内的区域, $P(x,y), Q(x,y)$ 在 $\Omega$ 上连续, 记

$$
w = P (x, y) \mathrm{d} x + Q (x, y) \mathrm{d} y,
$$

任取点 $A, B \in \Omega$ . $\Omega$ 内从 $A$ 到 $B$ 的一条逐段光滑的简单曲线称为 $\Omega$ 内从 $A$ 到 $B$ 的一条路径, 对于 $\Omega$ 内从 $A$ 到 $B$ 的任意路径 $L$ , 如果第二型曲线积分

$$
\int_ {L} w = \int_ {L} P \mathrm{d} x + Q \mathrm{d} y
$$

只与 A, B 有关, 而与 L 的具体选取无关, 则称一阶微分形式 w 在 $\Omega$ 内的曲线积分与路径无关.

如果平面区域 $D$ 内的任意简单闭曲线所包围的区域都完全在 $D$ 中，则称 $D$ 是单连通区域。设 $D$ 是平面内的单连通区域， $w = P\mathrm{d}x + Q\mathrm{d}y$ ，其中 $P, Q$ 都在 $D$ 上有连续的偏导数，则下列结论等价：

1. 对 D 内的任意一条闭曲线 C, 有

$$
\oint_ {C} w = 0;
$$

2. 对 D 内的任一条路径 C, 积分 $\int_{C} w$ 仅与 C 的起点和终点有关, 而与所沿的路径无关;

3. 在 D 内 (处处) 成立

$$
\frac {\partial P}{\partial y} = \frac {\partial Q}{\partial x};
$$

4. 存在函数 $\varphi(x, y)$ , 使得在 $D$ 内成立

$$
\mathrm{d} \varphi (x, y) = P (x, y) \mathrm{d} x + Q (x, y) \mathrm{d} y,
$$

即 $P\mathrm{d}x + Q\mathrm{d}y$ 是函数 $\varphi$ 的全微分. 这时称 $\varphi$ 是 $w$ 的势函数或原函数, 又称 $w$ 是一个恰当微分形式, 此时

$$
\varphi (x, y) = \int_ {x _ {0}} ^ {x} P (x, y _ {0}) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x, y) \mathrm{d} y + C,\tag{24.12}
$$

其中 $(x_{0},y_{0})$ 为D内任一点，C为任意常数，且

$$
\int_ {(x _ {0}, y _ {0})} ^ {(x, y)} P \mathrm{d} x + Q \mathrm{d} y = \varphi \Big | _ {(x _ {0}, y _ {0})} ^ {(x, y)} = \varphi (x, y) - \varphi (x _ {0}, y _ {0}).
$$

注 回忆例题24.2.3的求解过程, 由(24.7)知 $-\frac{x \mathrm{~d} x + y \mathrm{~d} y}{r^{3}}$ 是 $\frac{1}{r}$ 的全微分, 则积分与路径无关, 于是

$$
w = \mu \left(\frac {1}{r _ {B}} - \frac {1}{r _ {A}}\right).
$$

但当时我们不知道可以这样计算第二型曲线积分.

例题24.3.5设 $P(x,y),Q(x,y)$ 有连续偏导数，则 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ 的充分必要条件是

$$
\int_ {x _ {0}} ^ {x} P (x, y) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x _ {0}, y) \mathrm{d} y = \int_ {x _ {0}} ^ {x} P (x, y _ {0}) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x, y) \mathrm{d} y.\tag{24.13}
$$

证 先证充分性. 设 (24.13) 成立, 两边对 $x$ 求导, 得

$$
P (x, y) = P (x, y _ {0}) + \int_ {y _ {0}} ^ {y} \frac {\partial Q}{\partial x} (x, y) \mathrm{d} y.
$$

两边再对 $y$ 求导，则

$$
\frac {\partial P}{\partial y} (x, y) = \frac {\partial Q}{\partial x} (x, y).
$$

再证必要性. 由条件知 $w = P\mathrm{d}x + Q\mathrm{d}y$ 与积分路径无关. 取路径为从 $(x_0, y_0)$ 经 $(x_0, y)$ 到 $(x, y)$ , 则势函数

$$
\varphi (x, y) = \int_ {x _ {0}} ^ {x} P (x, y) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x _ {0}, y) \mathrm{d} y + C _ {1}.
$$

取路径为从 $(x_{0},y_{0})$ 经 $(x,y_{0})$ 到 $(x,y)$ ，则

$$
\varphi (x, y) = \int_ {x _ {0}} ^ {x} P (x, y _ {0}) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x, y) \mathrm{d} y + C _ {2}.
$$

令 $(x,y)=(x_{0},y_{0})$ ，得 $C_{1}=C_{2}$ .

例题 24.3.6 设 a, b, c 为常数, 满足 $ac - b^{2} > 0$ ,

$$
w = \frac {x \mathrm{d} y - y \mathrm{d} x}{a x ^ {2} + 2 b x y + c y ^ {2}},
$$

易见 $w$ 在 $(0,0)$ 以外的区域有定义，且为恰当微分形式. 求 $w$ 关于原点 $(0,0)$ 的循环常数 $\oint_{C} w$ ，其中 $C$ 可取围绕 $(0,0)$ 的任一简单封闭曲线，并约定取逆时针方向为正向.

解 设 $P(x,y) = \frac{-y}{ax^2 + 2bxy + cy^2}$ , $Q(x,y) = \frac{x}{ax^2 + 2bxy + cy^2}$ , 则 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ . 可以看出, 沿椭圆 $C$ :

$$
a x ^ {2} + 2 b x y + c y ^ {2} = 1
$$

来计算曲线积分最为简便, 因为此时

$$
\oint_ {C} P \mathrm{d} x + Q \mathrm{d} y = \oint_ {C} x \mathrm{d} y - y \mathrm{d} x,
$$

上述积分值恰为椭圆的面积的两倍, 于是

$$
\oint_ {C} w = \frac {2 \pi}{\sqrt {a c - b ^ {2}}}.
$$

### 24.3.3 练习题

1. 应用 Green 公式求下列第二型曲线积分.

(1) $\oint_{C} (x^{2} + xy) \, \mathrm{d}x + (x^{2} + y^{2}) \, \mathrm{d}y, C$ 为由 $x = \pm 1, y = \pm 1$ 围成的正方形，取正向；

(2) 求 $\oint_{C}\ln\frac{2+y}{1+x^{2}}dx+\frac{x(y+1)}{2+y}dy, C$ 的定义同 (1);

(3) 求 $\oint_{C}(x^{2}-y^{2})\mathrm{d}x-2xy\mathrm{d}y, C$ 是由 $x^{2}+y^{2}=1, x=y$ 及 y 轴围成的曲边三角形, 取正向;

(4) 求 $\int_{C}\frac{1}{x^{2}+y^{2}}(x\mathrm{d}y-y\mathrm{d}x)$ ，其中 C 是：(a) 旋轮线 $x=a(t-\sin t)-a\pi, y=a(1-\cos t)$ 对应于 t=0 到 $t=2\pi$ 的一拱；(b) $(x-1)^{2}+(y-1)^{2}=1$ 从 (2,1) 经上半圆到 (0,1) 的一段弧.

2. 设 $f(x)$ 连续可微, L 为逐段光滑闭曲线, 证明:

(1) $\oint_{L} f(xy)(y \, \mathrm{d}x + x \, \mathrm{d}y) = 0$ ; 

(2) $\oint_{L} f(x^{2} + y^{2})(x \, \mathrm{d}x + y \, \mathrm{d}y) = 0.$ 

3. 求 $\oint_{C} \frac{\partial u}{\partial n} \, \mathrm{d}s$ . 其中 $u = x^2 + y^2$ , $C$ 为 $x^2 + y^2 = 6x$ , $n$ 为 $C$ 上的单位外法向量.

4. 设 C 为逐段光滑的简单闭曲线, l 为给定方向, 证明:

$$
\oint_ {C} \cos (\boldsymbol {l}, \boldsymbol {n}) \mathrm{d} s = 0,
$$

其中 n 为 C 上的单位外法向量.

5. 设 C 为包围原点的逐段光滑的简单闭曲线, $a_{ij} (i,j=1,2)$ 均为常数, X =

$$
a _ {1 1} x + a _ {1 2} y, Y = a _ {2 1} x + a _ {2 2} y, a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1} \neq 0,
$$

$$
\oint_ {C} \frac {X \mathrm{d} Y - Y \mathrm{d} X}{X ^ {2} + Y ^ {2}} = 2 \pi \mathrm{sgn} (a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1}).
$$

6. 设 L 是单位圆周 $x^{2} + y^{2} = 1$ ，方向为逆时针，求积分

$$
\oint_ {L} \frac {(x - y) \mathrm{d} x + (x + 4 y) \mathrm{d} y}{x ^ {2} + 4 y ^ {2}}.
$$

7. 利用曲线积分求下述曲线所围区域的面积:

(1) $x = a\cos^3 t, y = b\sin^3 t, 0 \leqslant t \leqslant 2\pi;$ 

(2) $x^{3} + y^{3} = 3axy;$ 

(3) $\left(\frac{x}{a}\right)^{2n + 1} + \left(\frac{y}{b}\right)^{2n + 1} = C\left(\frac{x}{a}\right)^n\left(\frac{y}{b}\right)^n, a, b, C > 0, n$ 为正整数.

8. 先证明曲线积分与路径无关, 然后计算积分值:

(1) $\int_{(1,2)}^{(3,4)}\varphi (x)\mathrm{d}x + \psi (y)\mathrm{d}y,$ 其中 $\varphi (x),\psi (y)$ 是连续函数；

(2) $\int_{(1,0)}^{(6,8)}\frac{x\mathrm{d}x + y\mathrm{d}y}{x^2 + y^2}$ , 沿不通过原点的路径.

9. 对于以下一阶微分形式 $w$ , 求函数 $M(x, y) \neq 0$ , 使得在适当的区域内 $Mw$ 为全微分, 并求其原函数:

$$
w = \left[ - y \sqrt {x ^ {2} + y ^ {2} + 1} - x (x ^ {2} + y ^ {2}) \right] \mathrm{d} x + \left[ x \sqrt {x ^ {2} + y ^ {2} + 1} - y (x ^ {2} + y ^ {2}) \right] \mathrm{d} y;
$$

(2) $w = x[(ay + bx)^3 + ay^3]\mathrm{d}x + y[(ay + bx)^3 + bx^3]\mathrm{d}y.$ 

### 24.3.4 等周定理

等周问题是一个古老而又十分有趣的几何问题. 它可以表述为: 在周长相等的一切简单闭曲线 (即封闭而不自相交的曲线) 中, 怎样的曲线包围的图形具有最大的面积. 早在古代希腊, 人们就已经意识到这样的闭曲线应该是圆周 $^{①}$ , 但这一事实的严格的数学证明还是在近代才得到的. 下面的经典证明是由 E. Schmidt (施密特) 在 1939 年给出的. 我们只讨论分段光滑曲线的情况.

设 $\Gamma$ 是平面上长为 $L$ 的分段光滑的简单闭曲线, $\Gamma$ 所围区域的面积为 $A$ . 取 $\Gamma$ 的一对平行切线 $l_{1}, l_{2}$ , 它们把 $\Gamma$ 夹在里面. 再取一圆周 $S$ , 也被 $l_{1}, l_{2}$ 所夹, 取 $S$ 的圆心为坐标原点, $x$ 轴垂直于 $l_{1}, l_{2}$ . 假设 $x = x(s)$ , $y = y(s)$ 是 $\Gamma$ 的弧长参数方程, 以逆时针方向为曲线的正向, $0 \leqslant s \leqslant L$ , 其中 $x, y$ 为 $s$ 的连续分段可微函数. 设 $l_{1}, l_{2}$ 与 $\Gamma$ 的两个切点的参数值分别为 $s = s_{1}$ 和 $s = 0$ , 即把 $l_{2}$ 与 $\Gamma$ 的一个切点取为曲线 $\Gamma$ 的起始点. 下面我们借助圆 $S$ 得到 $A$ 与 $L$ 的关系. 由 Green 公式, 曲线 $\Gamma$ 所围区域的面积为

$$
A = \int_ {0} ^ {L} x (s) y ^ {\prime} (s) \mathrm{d} s.
$$

另一方面，设圆 $S$ 的半径为 $r$ ，圆面积就为 $\pi r^2$ .定义

$$
\tilde {y} (s) = \left\{ \begin{array}{l l} \sqrt {r ^ {2} - x ^ {2} (s)}, & 0 \leqslant s \leqslant s _ {1}, \\ - \sqrt {r ^ {2} - x ^ {2} (s)}, & s _ {1} \leqslant s \leqslant L, \end{array} \right.
$$

则方程 $x = x(s), y = \tilde{y}(s), 0 \leqslant s \leqslant L$ 描画出与 $S$ 同样的轨迹. 一般地, 这不是圆周 $S$ 的参数表达式. 但由定积分的定义, 可以证明 $S$ 所围面积的代数和为

$$
\int_ {0} ^ {L} \tilde {y} (s) x ^ {\prime} (s) \mathrm{d} s = \int_ {0} ^ {s _ {1}} \tilde {y} (s) x ^ {\prime} (s) \mathrm{d} s + \int_ {s _ {1}} ^ {L} \tilde {y} (s) x ^ {\prime} (s) \mathrm{d} s = - \frac {\pi r ^ {2}}{2} - \frac {\pi r ^ {2}}{2} = - \pi r ^ {2}.
$$

由于 $s$ 是 $\Gamma$ 的弧长参数, 又有 $(x'(s))^2 + (y'(s))^2 \equiv 1, 0 \leqslant s \leqslant L$ . 在积分号下用 Cauchy 不等式 (见上册 6 页), 得到

$$
\begin{array}{r l} A + \pi r ^ {2} & = \int_ {0} ^ {L} (x (s) y ^ {\prime} (s) - \tilde {y} (s) x ^ {\prime} (s)) \mathrm{d} s \leqslant \int_ {0} ^ {L} | (- \tilde {y} (s), x (s)) \cdot (x ^ {\prime} (s), y ^ {\prime} (s)) | \mathrm{d} s \\ & \leqslant \int_ {0} ^ {L} \sqrt {(x ^ {\prime} (s)) ^ {2} + (y ^ {\prime} (s)) ^ {2}} \cdot \sqrt {(- \tilde {y} (s)) ^ {2} + (x (s)) ^ {2}} \mathrm{d} s \\ & = r \int_ {0} ^ {L} \mathrm{d} s = L r. \end{array}
$$

再由算术平均值-几何平均值不等式得

$$
\sqrt {A \cdot \pi r ^ {2}} \leqslant \frac {A + \pi r ^ {2}}{2} \leqslant \frac {L r}{2},
$$

即

$$
4 \pi A \leqslant L ^ {2}.
$$

这就是等周不等式.

为使 $4\pi A = L^2$ ，就必须在上述计算过程中使不等号均取等号，因此有 $A = \pi r^2$ 即 $L = 2\pi r$ .由Cauchy不等式取等号条件有

$$
(- \tilde {y} (s), x (s)) = c (s) (x ^ {\prime} (s), y ^ {\prime} (s)),
$$

于是 $\sqrt{x^2(s) + \tilde{y}^2(s)} = r = |c(s)|$ ，即 $c(s) = \pm r$ 。由 $\sqrt{x^2(s) + \tilde{y}^2(s)}$ 的连续性知不会出现在有些 $s$ 点， $c(s) = r$ ，在另外一些 $s$ 点， $c(s) = -r$ 。即

$$
(- \tilde {y} (s), x (s)) = \pm r (x ^ {\prime} (s), y ^ {\prime} (s)).\tag{24.14}
$$

从圆周 $S$ 的极坐标表达式

$$
x = r \cos \theta , \quad \tilde {y} = r \sin \theta , \quad 0 \leqslant \theta \leqslant 2 \pi ,
$$

可得

$$
\frac {\mathrm{d} x}{\mathrm{d} \theta} = - r \sin \theta = - \tilde {y}, \quad \frac {\mathrm{d} \tilde {y}}{\mathrm{d} \theta} = r \cos \theta = x.
$$

代入 (24.14) 得

$$
\frac {1}{r} \left(\frac {\mathrm{d} x}{\mathrm{d} \theta}, \frac {\mathrm{d} \tilde {y}}{\mathrm{d} \theta}\right) = \pm \left(\frac {\mathrm{d} x}{\mathrm{d} s}, \frac {\mathrm{d} y}{\mathrm{d} s}\right).\tag{24.15}
$$

故 $\frac{1}{r}\frac{\mathrm{d}x}{\mathrm{d}\theta} = \pm \frac{\mathrm{d}x}{\mathrm{d}s}$ . 由一阶微分的形式不变性, 可得

$$
r \mathrm{d} \theta = \pm \mathrm{d} s.
$$

再回到(24.15)，得

$$
\frac {\mathrm{d} \tilde {y}}{\mathrm{d} s} = \frac {\mathrm{d} y}{\mathrm{d} s}.
$$

因此， $\tilde{y}(s) = y(s) + h$ ，其中 $h$ 是与 $S$ 无关的某常数。这说明封闭曲线 $\Gamma$ 与圆周 $S$ 差一个沿 $y$ 方向的平移。这就证明了等周不等式取等号时， $\Gamma$ 必定是半径为 $r = \frac{L}{2\pi}$ 的一个圆周。

## §24.4 连续向量场的旋转度

连续向量场的旋转度可以通过曲线积分来定义, 它是多元微积分应用的一个重要例子. 本节可作为习题课的补充材料. 以 $\mathbf{R}^2$ 为例, 设 $F: \mathbf{R}^2 \to \mathbf{R}^2$ 是连续映射, 我们也称 $F$ 是 $\mathbf{R}^2$ 上的一个连续向量场. 即对每一点 $(x, y) \in \mathbf{R}^2$ , 确定一个随 $(x, y)$ 连续变化的向量 $F(x, y)$ .

设 $\mathcal{L} \subset \mathbf{R}^2$ 是逐段光滑的定向封闭曲线. 如果 $F$ 在 $\mathcal{L}$ 上恒不取零向量, 则称 $F$ 在 $\mathcal{L}$ 上非退化. 定义 $T(x,y) = \frac{F(x,y)}{|F(x,y)|}$ , 则 $T$ 把 $\mathcal{L}$ 映射到单位圆周 $S$ . 当点 $(x,y)$ 在 $\mathcal{L}$ 上逆时针方向绕 $\mathcal{L}$ 一周时, 向量 $T(x,y)$ 在 $S$ 上绕整数圈. 所绕圈数的代数和 (逆时针方向为正) 称为向量场 $F$ 沿 $\mathcal{L}$ 的旋转度, 记为 $\gamma(F,\mathcal{L})$ . 当 $F(x,y) = (u(x,y),v(x,y))$ 是一阶连续可微向量场时, 有

$$
\gamma (\boldsymbol {F}, \mathcal {L}) = \frac {1}{2 \pi} \oint_ {\mathcal {L}} \mathrm{d} \arctan \frac {v}{u}.\tag{24.16}
$$

若 $D \subset R^{2}$ 是单连通或多连通闭区域, $\partial D$ 由有限条逐段光滑的封闭曲线组成, 即

$$
\partial D = \bigcup_ {i = 1} \partial D _ {i},
$$

规定 $\partial D$ 上的定向按其与内法线成正直角的方向为正定向. 设 $F(x, y)$ 在 $\partial D$ 上非退化, 定义 $\gamma(F, \partial D)$ 是 $F(x, y)$ 沿 $D$ 的所有边界的旋转度的总和, 即

$$
\gamma (\boldsymbol {F}, \partial D) = \sum_ {i = 1} ^ {n} \gamma (\boldsymbol {F}, \partial D _ {i}).
$$

以下我们都假定区域 D 的边界是逐段光滑的封闭曲线.

连续向量场的旋转度有下列几条性质.

性质1 若两个闭连通区域 $D_{1}$ 与 $D_{2}$ 的内部不相交， $D = D_{1} \cup D_{2}$ ，则

$$
\gamma (\boldsymbol {F}, \partial D) = \gamma (\boldsymbol {F}, \partial D _ {1}) + \gamma (\boldsymbol {F}, \partial D _ {2}).
$$

性质 2 若在有界闭连通区域 D 上 $F(x,y)$ 非退化，则 $\gamma(F,\partial D)=0$ .
证 先设 D 是单连通区域, $\partial D = L$ .

当 $F(x,y)$ 是光滑向量场，即 $u(x,y), v(x,y) \in C^{1}$ 时，有

$$
\begin{array}{r l} \gamma (\boldsymbol {F}, \mathcal {L}) & = \frac {1}{2 \pi} \oint_ {\mathcal {L}} \mathrm{d} \arctan \frac {v}{u} = \frac {1}{2 \pi} \oint_ {S} \frac {u \mathrm{d} v - v \mathrm{d} u}{u ^ {2} + v ^ {2}} \\ & = \frac {1}{2 \pi} \iint_ {U} \left[ \frac {\partial}{\partial u} \left(\frac {u}{u ^ {2} + v ^ {2}}\right) + \frac {\partial}{\partial v} \left(\frac {v}{u ^ {2} + v ^ {2}}\right) \right] \mathrm{d} u \mathrm{d} v \\ & = \frac {1}{2 \pi} \iint_ {U} \left[ \frac {(u ^ {2} + v ^ {2}) - 2 u ^ {2} + (u ^ {2} + v ^ {2}) - 2 v ^ {2}}{(u ^ {2} + v ^ {2}) ^ {2}} \right] \mathrm{d} u \mathrm{d} v \\ & = 0, \end{array}
$$

其中 S 是 L 在 uOv 坐标面上的映像, U 是由 S 所包围的区域.

当 $F(x,y)$ 是连续向量场时, 我们要用到 n 维空间中的 Weierstrass 逼近定理 (参见命题 16.3.1): $R^{n}$ 中紧集上的连续函数可以用多项式函数任意逼近.

故 $\partial D$ 上的每一连续非退化向量场可以由光滑非退化向量场一致逼近到任意精确度. 另外, 由于旋转度是一个整数, 于是充分接近连续向量场的光滑向量场与这连续向量场都具有同样的旋转度. 这样性质2既然对光滑向量场成立, 对连续向量场自然也成立.

当 D 是多连通区域时, 可把 D 分割成若干个单连通区域来证明.

设 $D \subset \mathbf{R}^2$ 是有界闭区域, $\pmb{F}_0$ , $\pmb{F}_1$ 是 $\partial D$ 上的连续非退化向量场. 如果存在连续依赖于参数 $\lambda$ 的连续向量场 $\pmb{G}: \partial D \times [0,1] \to \mathbf{R}^2$ , 且使 $G(x,y,0) = F_0(x,y)$ , $G(x,y,1) = F_1(x,y)$ , 则称 $\pmb{G}$ 是自 $F_0$ 到 $F_1$ 的连续形变. 如果 $\pmb{G}$ 在 $\partial D$ 上关于 $\lambda \in [0,1]$ 均非退化, 则称 $\pmb{G}$ 是非退化形变. 若存在自 $F_0$ 到 $F_1$ 的连续非退化形变, 则称 $F_0$ 与 $F_1$ 同伦. 容易证明同伦有传递关系, 即若 $F_0$ 与 $F_1$ 同伦, $F_1$ 与 $F_2$ 同伦, 则 $F_0$ 与 $F_2$ 同伦.

性质 3 设 $D \subset R^{2}$ 是有界闭区域, 则 $\partial D$ 上的同伦向量场有相同的旋转度.

证 因为 $\gamma(G(x, y, \lambda), \partial D)$ 是一个整数，且对 $\lambda$ 连续，所以当 $\lambda$ 变化时它只能是一个常数，即有

$$
\begin{array}{r l} \gamma (\pmb {F} _ {0} (x, y), \partial D) & = \gamma (\pmb {G} (x, y, 0), \partial D) = \gamma (\pmb {G} (x, y, 1), \partial D) \\ & = \gamma (\pmb {F} _ {1} (x, y), \partial D). \end{array}
$$

下面我们举出一些向量场旋转度应用的例子. 我们先用旋转度证明如下著名的 Brouwer 不动点定理在 $R^{2}$ 中的形式:

例题24.4.1设 $D$ 是 $\mathbf{R}^2$ 中的一个有界闭凸区域，其边界 $\partial D$ 是一条光滑闭曲线. $F$ 是自 $D$ 到 $D$ 的连续映射，则在 $D$ 内必存在 $F$ 的一个不动点，即 $\exists \xi \in D$ ，使 $F(\xi) = \xi .$ 

证 由于 $\partial D$ 是一条光滑闭曲线, 我们知 $\partial D$ 上的沿逆时针方向的单位切向量组成 $\partial D$ 上的一个光滑的非退化向量场 $\pmb{\tau}(x,y)$ , 且当 $(x,y) \in \partial D$ 逆时针转一圈时, $\pmb{\tau}(x,y)$ 也转了一圈, 即 $\gamma(\pmb{\tau},\partial D) = 1$ . 同理, 设 $\pmb{n}(x,y)$ 是 $\partial D$ 上的内法向量场, 则 $\gamma(\pmb{n},\partial D) = 1$ . 又 $\pmb{F}$ 是自闭凸区域 $D$ 映到 $D$ 内的映射, 若 $\pmb{F}$ 没有不动点, 则以 $(x,y) \in \partial D$ 为起点, $\pmb{F}(x,y) \in D$ 为终点的有向线段指向切线的内侧, 即与内法向的夹角不大于 $\frac{\pi}{2}$ . 于是有

$$
[ \boldsymbol {F} (x, y) - (x, y) ] \cdot \boldsymbol {n} (x, y) \geqslant 0, \forall (x, y) \in \partial D.
$$

设 $\boldsymbol{G}(x,y,\lambda)=\lambda[\boldsymbol{F}(x,y)-(x,y)]+(1-\lambda)\boldsymbol{n}(x,y)$ . 当 $\lambda=0,1$ 时， $\boldsymbol{G}(x,y,\lambda)$ 在 $\partial D$ 上非退化. $\lambda\in(0,1)$ 时

$$
\boldsymbol {n} (x, y) \cdot \boldsymbol {G} (x, y, \lambda) \geqslant (1 - \lambda) | \boldsymbol {n} (x, y) | ^ {2} > 0, \forall (x, y) \in \partial D,
$$

所以 $G(x,y,\lambda)$ 也在 $\partial D$ 上非退化. 故 $F(x,y)-(x,y)$ 与 $n(x,y)$ 是在 $\partial D$ 上的同伦向量场,

$$
\gamma (\boldsymbol {F} - \mathrm{id}, \partial D) = \gamma (\boldsymbol {n}, \partial D) = 1.
$$

由性质2可知 $F(x,y)-(x,y)$ 必定是D上的退化向量场. 即 $\exists\xi\in D,$ 使 $F(\xi)-\xi=0,$ 故 $\xi$ 是F的不动点. □

一般形式的 Brouwer 不动点定理为:

$R^{n}$ 中的非空紧凸子集 B 上的连续自映射 F 必有不动点. 即存在 $\xi \in B$ , 使 $F(\xi) = \xi$ .

其证明要用到一些拓扑知识, 可参考 [48, 33].

第二个例子是用旋转度证明代数基本定理.

例题24.4.2（代数基本定理）复数 $z$ 的 $n$ 次多项式 $P_{n}(z)$ 在复域上至少有一个根.

证 设 $z = x + \mathrm{i}y, x, y \in \mathbf{R}$ . $P_{n}(z) = R(P_{n}(z)) + \mathrm{i}I(P_{n}(z))$ , 其中 $R(\cdot)$ 与 $I(\cdot)$ 分别表示复数的实部和虚部. 构造一个映射

$$
\boldsymbol {F}: (x, y) \rightarrow (R (P _ {n} (x + \mathrm{i} y)), I (P _ {n} (x + \mathrm{i} y))).
$$

$\pmb{F}$ 是 $\mathbf{R}^2$ 上的 $n$ 次多项式映射. $P_{n}(z)$ 在复域上有根的问题归结为 $\pmb{F}$ 在 $\mathbf{R}^2$ 上是否是退化向量场.

如果 F 是非退化向量场，则由性质 2, $\gamma(F, S_{r}) = 0$ ，其中 $S_{r}$ 表示以 r 为半径的单位圆周。另一方面，我们从其他性质计算 $\gamma(F, S_{r})$ 。

我们先计算 $P_{n}(z) = z^{n}$ 的情况. 设对应的多项式映射为 $\pmb{F}_0$ ，则

$$
\begin{array}{r l} \gamma (\boldsymbol {F} _ {0}, S _ {r}) & = \frac {1}{2 \pi} \oint_ {S _ {r}} \frac {R \mathrm{d} I - I \mathrm{d} R}{R ^ {2} + I ^ {2}} \\ & = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} \frac {r ^ {2} \cos n t (n \cos n t) - r ^ {2} \sin n t (- n \sin n t)}{r ^ {2}} \mathrm{d} t = n. \end{array}
$$

对于一般的 n 次多项式 $P_{n}(z)$ ，不妨设其首系数为 1，作复多项式的形变

$$
G (z, \lambda) = \lambda z ^ {n} + (1 - \lambda) P _ {n} (z).
$$

可知

$$
\overline {{{{z}}}} ^ {n} \cdot G (z, \lambda) = \lambda | z | ^ {2 n} + (1 - \lambda) | z | ^ {2 n} + Q (z).
$$

其中 $Q(z)$ 满足 $\frac{|Q(z)|}{|z|^{2n}}\to 0(|z|\rightarrow +\infty)$ . 因此

$$
\overline {{{{z}}}} ^ {n} \cdot G (z, \lambda) = | z | ^ {2 n} + o (| z | ^ {2 n}) \quad (| z | \rightarrow + \infty).
$$

所以当 $r$ 足够大时， $G(z, \lambda)$ 在复平面的单位圆周 $S_r$ 上取不到零点。这说明 $P_n(z)$ 对应的 $n$ 次多项式映射 $\pmb{F}$ 与 $\pmb{F}_0$ 在 $S_r$ 上同伦， $\gamma(\pmb{F}, S_r) = n$ 。这就证明 $\pmb{F}$ 必定是 $\mathbf{R}^2$ 上的退化向量场。也证明了 $P_n(z)$ 在复域中至少有一根。

最后我们用旋转度解决 1995 年匈牙利的 Miklós Schweitzer (施魏策尔) 数学竞赛中的一个积分问题. 这个积分问题在几何学和博弈论中有有趣的背景. 我们的材料取自《美国数学月刊》(1999) 第 106 卷 227-240 页.

例题24.4.3 设 $f$ 和 $g$ 是 $[0,1]$ 上的两个可积函数，满足

$$
\int_ {0} ^ {1} f (x) \mathrm{d} x = \int_ {0} ^ {1} g (x) \mathrm{d} x = 1.
$$

证明：存在 $[0,1]$ 中的某个闭区间 $[a,b]$ ，使

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \int_ {a} ^ {b} g (x) \mathrm{d} x = \frac {1}{2}.
$$

证 我们定义

$$
D = \{(x, y) \in \mathbf {R} ^ {2} \mid 0 \leqslant x \leqslant y \leqslant 1 \},
$$

并令

$$
\boldsymbol {G} (x, y) = \left(\int_ {x} ^ {y} f (s) \mathrm{d} s - \frac {1}{2}, \int_ {x} ^ {y} g (s) \mathrm{d} s - \frac {1}{2}\right).
$$

由 $f, g$ 的可积性, 可知 $\pmb{G}$ 是闭的单连通区域 $D$ 上的连续向量场. 如果 $\pmb{G}(x, y)$ 在 $D$ 的某一点 $(a, b)$ 上取零向量, 就证明了我们所要的结论. 否则, 可以考虑 $\gamma(\pmb{G}, \partial D)$ . $\partial D$ 由三条直线段组成. 在对角线 $x = y$ 上取常值, 故旋转角度为0. 在水平边界和垂直边界上, 注意到

$$
\boldsymbol {G} (0, x) + \boldsymbol {G} (x, 1) = (0, 0), \quad 0 \leqslant x \leqslant 1.
$$

因而

$$
\boldsymbol {G} (x, 1) = - \boldsymbol {G} (0, x), \quad 0 \leqslant x \leqslant 1.
$$

因此水平边界的任一点的向量恰好与垂直边界上对应点的向量反向. 这说明 G 沿水平边界的旋转角度与其沿垂直边界的旋转角度一样. 而 $G(0,0)=\left(-\frac{1}{2},-\frac{1}{2}\right)$ , $G(0,1)=\left(\frac{1}{2},\frac{1}{2}\right)$ . 故 G 沿垂直边界的旋转角度为 $2k\pi+\pi$ , k 为整数. 所以有

$$
\gamma (G, \partial D) = \frac {0 + 2 (2 k \pi + \pi)}{2 \pi} = 2 k + 1 \neq 0.
$$

由旋转度的性质 2 知, G 必在 D 上某点 $(a, b)$ 处取零向量, 也即

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \frac {1}{2} = \int_ {a} ^ {b} g (x) \mathrm{d} x.
$$

注 这个问题表面上看可以利用积分值关于积分区间端点的介值性质来解决，即： $\exists a_0$ ，使 $\forall a \in (0, a_0)$ ，有 $a$ 的连续函数值 $b(a)$ ，使 $\int_{a}^{b(a)} f(x) \mathrm{d}x = \frac{1}{2}$ 。实际上不可行，这是因为上述 $b(a)$ 并不一定连续。比如我们考虑如下的 $f(x)$ ，它的原函数 $F(x) = \int_{0}^{x} f(s) \mathrm{d}s$ 在 $[0, 1]$ 上连续可微，满足：当 $0 < x < 1$ 时， $0 < F(x) < 1$ ； $F(0) = 0$ ；在 $[0, \frac{1}{2}]$ 上严格单调增加并在 $x = \frac{1}{2}$ 时取到惟一极大值 $\frac{3}{4}$ ，然后严格单调减少至 $x = \frac{2}{3}$ 时取到惟一极小值 $\frac{2}{3}$ ，然后严格单调增加至 $F(1) = 1$ 。考察使 $\int_{a}^{b(a)} f(x) \mathrm{d}x = \frac{1}{2}$ 的点 $a$ 与 $b(a)$ 。注意到此时必有 $F(b(a)) - F(a) = \frac{1}{2}$ 。设 $F(a_0) = \frac{1}{2}$ ，则 $0 < a_0 < \frac{1}{2}$ ，因而 $a \in (0, a_0)$ 。对应地有 $b(a_0) = 1$ 。当 $a$ 自 $a_0$ 连续地移向 0 时， $b(a)$ 自 1 连续地减少。至 $F(a_1) = \frac{1}{6}$ 时， $b(a_1) = \frac{2}{3}$ 。另一方面 $F(a) < \frac{1}{6}$ 时， $F(b(a)) < \frac{2}{3}$ ，故必有 $b(a) < \frac{1}{2}$ 。因此 $a_1$ 不是 $b(a)$ 的连续点。

## §24.5 对于教学的建议

### 24.5.1 学习要点

1. 本章的重点之一是计算两型曲线积分, 从计算公式可以发现, 写出曲线的参数方程是计算的关键部分. 一般来说, 一条曲线可以有多种参数方程的形式, 到底哪一种给计算带来方便, 要视具体情况. 对如何求曲线的参数方程总结如下.

平面曲线

$$
F (x, y) = 0.\tag{24.17}
$$

方法1 若能从(24.17)中解出 $y = f(x)$ 或 $x = g(y)$ ，则平面曲线(24.17)以 $x$ 或 $y$ 为参数的参数方程分别为

$$
x = x, \quad y = f (x)
$$

或

$$
x = g (y), \quad y = y.
$$

方法 2 将极坐标表达式 $x = r \cos \theta$ , $y = r \sin \theta$ 代入(24.17) 得

$$
F (r \cos \theta , r \sin \theta) = 0.\tag{24.18}
$$

若能从(24.18)中解出 $r = f(\theta)$ 或 $\theta = g(r)$ ，则平面曲线(24.17)的以 $\theta$ 或 $r$ 为参数的参数方程分别为

$$
x = f (\theta) \cos \theta , \quad y = f (\theta) \sin \theta
$$

或

$$
x = r \cos g (r), \quad y = r \sin g (r).
$$

空间曲线

$$
F (x, y, z) = 0, \quad G (x, y, z) = 0.\tag{24.19}
$$

方法1 若能从(24.19)中解出两个字母, 不妨设可解出 $y, z$ 为 $x$ 的函数 $y = \varphi(x), z = \psi(x)$ , 则空间曲线(24.19)的参数方程为

$$
x = x, y = \varphi (x), z = \psi (x).
$$

方法 2 将球坐标变换或柱坐标代换代入 (24.19) 得

$$
F (r \sin \varphi \cos \theta , r \sin \varphi \sin \theta , r \cos \varphi) = 0,\tag{24.20}
$$

$$
G (r \sin \varphi \cos \theta , r \sin \varphi \sin \theta , r \cos \varphi) = 0\tag{24.21}
$$

或

$$
F (r \cos \theta , r \sin \theta , z) = 0,\tag{24.22}
$$

$$
G (r \cos \theta , r \sin \theta , z) = 0.\tag{24.23}
$$

若能从(24.20),(24.21)中或(24.22),(24.23)中解出两个字母为第三个字母的函数,同样也可以得到参数方程.

方法3 从(24.19)中消去一个字母(例如 $z$ ), 得一条平面曲线

$$
f (x, y) = 0.\tag{24.24}
$$

它实际上是空间曲线(24.19)在xOy平面上的投影,先写出(24.24)的参数方程

$$
x = \varphi (t), \quad y = \psi (t),\tag{24.25}
$$

再将 (24.25) 代入 (24.19) 中的某一个方程, 得

$$
z = w (t).\tag{24.26}
$$

(24.25), (24.26) 就是空间曲线 (24.19) 的参数方程.

2. 关于两类曲线积分之间的关系, 关系式 (24.5) 是基本的, 也是便于记忆的, 在平面上也是正确的. 但是在平面上常用的是法方向, 而不是切方向. 所以我们或者记住表达式 (24.6), 或者用图 24.2 临时再推导一下.

3. 关于 Green 公式, 比较方便于记忆的形式是

$$
\oint_ {\partial D} P \mathrm{d} x + Q \mathrm{d} y = \iint_ {D} \left| \begin{array}{c c} \frac {\partial}{\partial x} & \frac {\partial}{\partial y} \\ P & Q \end{array} \right| \mathrm{d} x \mathrm{d} y.
$$

4. 总结求平面上第二型曲线积分 $\int_{C} P \, dx + Q \, dy$ 的几种方法:

(1) 用 Green 公式化为二重积分. 若 C 为闭曲线, 可直接用, 若 C 不闭可添加辅助线后用 Green 公式;

(2) 若满足 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ , 如果曲线 $C$ 不封闭, 可考虑用求出原函数的方法;

(3) 利用曲线的参数方程化为定积分求解.

### 24.5.2 参考题

#### 第一组参考题

1. 证明不等式

$$
\left| \int_ {C} P (x, y) \mathrm{d} x + Q (x, y) \mathrm{d} y \right| \leqslant M L,
$$

其中 $L$ 是曲线 $C$ 的弧长， $M = \max_{(x,y) \in C} \left\{\sqrt{P^2(x,y) + Q^2(x,y)}\right\}$ ，并利用这个不等式证明 $\lim_{R \to +\infty} I_R = 0$ ，其中

$$
I _ {R} = \oint_ {x ^ {2} + y ^ {2} = R ^ {2}} \frac {y \mathrm{d} x - x \mathrm{d} y}{(x ^ {2} + x y + y ^ {2}) ^ {2}}.
$$

2. 求第一型曲线积分

$$
\begin{array}{l} (1) \int_ {x ^ {2} + y ^ {2} = R ^ {2}} \ln \sqrt {(x - a) ^ {2} + y ^ {2}} \mathrm{d} s (| a | \neq R); \\ (2) \int_ {x ^ {2} + y ^ {2} = R ^ {2}} \ln \sqrt {(x - a) ^ {2} + (y - b) ^ {2}} \mathrm{d} s (a ^ {2} + b ^ {2} \neq R ^ {2}). \end{array}
$$

3. 设 $f(x,y)$ 在 L 上连续, L 是逐段光滑的简单闭曲线, 证明:

$$
u (x, y) = \oint_ {L} f (\xi , \eta) \ln \sqrt {(x - \xi) ^ {2} + (y - \eta) ^ {2}} d s
$$

当 $x^{2} + y^{2}\rightarrow +\infty$ 时趋于0的充分必要条件是

$$
\oint_ {L} f (\xi , \eta) \mathrm{d} s = 0.
$$

4. 设 $u(x, y)$ 在 $\mathbf{R}^2$ 上连续, 证明:

$$
u (x, y) = \frac {1}{\pi r ^ {2}} \iint_ {(x - \xi) ^ {2} + (y - \eta) ^ {2} \leqslant r ^ {2}} u (\xi , \eta) \mathrm{d} \xi \mathrm{d} \eta
$$

$\forall r>0$ 都成立的充分必要条件是

$$
u (x, y) = \frac {1}{2 \pi r} \oint_ {(x - \xi) ^ {2} + (y - \eta) ^ {2} = r ^ {2}} u (\xi , \eta) \mathrm{d} s
$$

$\forall r > 0$ 都成立.

5. 设 $f(x, y)$ 在 $G$ 上一阶连续可微，在 $\partial G$ 上 $f(x, y) = 0$ ， $G = \{x^2 + y^2 \leqslant a^2\}$ . 证明：

$$
\left| \iint_ {G} f (x, y) \mathrm{d} x \mathrm{d} y \right| \leqslant \frac {\pi}{3} a ^ {3} \max _ {G} \left\{\left(f _ {x} ^ {2} + f _ {y} ^ {2}\right) ^ {\frac {1}{2}} \right\}.
$$

6. 设 $P(x, y), Q(x, y)$ 在平面上有连续偏导数，而且对以 $\forall (x_0, y_0) \in \mathbf{R}^2$ 为心，以 $\forall r > 0$ 为半径的上半圆 $C: x = x_0 + r\cos \theta, y = y_0 + r\sin \theta (0 \leqslant \theta \leqslant \pi)$ 都有

$$
\int_ {C} P (x, y) \mathrm{d} x + Q (x, y) \mathrm{d} y = 0.
$$

证明： $P(x,y)=\frac{\partial Q}{\partial x}(x,y)=0\quad(\forall(x,y)\in\mathbf{R}^{2}).$ 

#### 第二组参考题

1. 给出旋转度性质 2 的一个不用曲线积分的证明.

2. 证明如下形式的高维中值定理: 设 $f(\pmb{x})$ 为定义在以 $r$ 为半径的球

$$
D = \left\{\boldsymbol {x} = \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) \mid x _ {1} ^ {2} + x _ {2} ^ {2} + \dots + x _ {n} ^ {2} \leqslant r ^ {2} \right\}
$$

上的连续可微函数, 则存在点 $\boldsymbol{p}_{0}=(p_{1}^{0},p_{2}^{0},\cdots,p_{n}^{0})\in\mathrm{int}D$ , 使

$$
\max _ {\boldsymbol {x} \in D} \{f (\boldsymbol {x}) \} - \min _ {\boldsymbol {x} \in D} \{f (\boldsymbol {x}) \} = | \nabla f (\boldsymbol {p} _ {0}) | \cdot 2 r.
$$

3. 设 $(a_{1}, b_{1}), (a_{2}, b_{2}), \cdots, (a_{n}, b_{n})$ 是 n 边形的 n 个顶点，而且原点在其内部，证明：存在正实数 x 和 y，使得

$$
(a _ {1}, b _ {1}) x ^ {a _ {1}} y ^ {b _ {1}} + (a _ {2}, b _ {2}) x ^ {a _ {2}} y ^ {b _ {2}} + \dots + (a _ {n}, b _ {n}) x ^ {a _ {n}} y ^ {b _ {n}} = (0, 0).
$$

4. 设 D 是半径为 r 的一个圆所围成的平面区域, 对 D 内的点 $(x, y)$ , 用 $l(x, y)$ 表示以 $(x, y)$ 为圆心, $\delta$ 为半径的圆在 D 外边的那段弧的长度. 试求

$$
\lim _ {\delta \rightarrow 0} \frac {1}{\delta^ {2}} \iint_ {D} l (x, y) \mathrm{d} x \mathrm{d} y.
$$

5. 设 $B$ 是 $\mathbf{R}^2$ 中的单位圆盘, $C$ 是单位圆周. $\pmb{g}: B \to \mathbf{R}^2 \setminus \{0\}$ 是二阶连续可微映射.

(1) 用 Green 公式把 $\iint_{B} \frac{\partial (g_1, g_2)}{\partial (x_1, x_2)} \mathrm{d}x_1 \mathrm{d}x_2$ 表示成 $C$ 上的第二型曲线积分;

(2) 如果 g 在 C 上的限制是恒等映射, 即 $g(x) = x, \forall x \in C$ , 证明:

$$
\oint_ {C} x _ {1} \mathrm{d} x _ {2} = \oint_ {C} g _ {1} \mathrm{d} g _ {2} = \oint_ {C} g _ {1} \frac {\partial g _ {2}}{\partial x _ {1}} \mathrm{d} x _ {1} + g _ {1} \frac {\partial g _ {2}}{\partial x _ {2}} \mathrm{d} x _ {2};
$$

(3) 证明: 不存在满足 $g(x) = x, x \in C$ 及 $g(B) \subset C$ 的二阶连续可微映射 g;

(4) 对上述命题给出一个几何上的解释.

6. (1) 设 $B, C$ 与题5相同, $\pmb{f}: B \to B$ 是二阶连续可微映射, $\pmb{f}(\pmb{x}) \neq \pmb{x}, \forall \pmb{x} \in B$ , 从几何上可见以 $\pmb{f}(\pmb{x})$ 为起点和 $\pmb{x}$ 为终点的有向线段与 $B$ 的边界 $C$ 相交, 则交点可表示为

$$
\boldsymbol {g} (\boldsymbol {x}) = \boldsymbol {f} (\boldsymbol {x}) + t (\boldsymbol {x}) (\boldsymbol {x} - \boldsymbol {f} (\boldsymbol {x})),
$$

其中 $t(\pmb{x})$ 是与 $\pmb{x}$ 有关的参数，证明： $t(\pmb{x})$ 满足二次方程

$$
t ^ {2} (\boldsymbol {x}) | \boldsymbol {x} - \boldsymbol {f} (\boldsymbol {x}) | ^ {2} + 2 t (\boldsymbol {x}) \boldsymbol {f} (\boldsymbol {x}) \cdot (\boldsymbol {x} - \boldsymbol {f} (\boldsymbol {x})) + | \boldsymbol {f} (\boldsymbol {x}) | ^ {2} - 1 = 0;
$$

(2) 证明 (1) 中的 g 满足 $g(x) = x, x \in C$ 及 $g(B) \subset C;$ 

(3) 结合上题证明满足 (1) 的 $f$ 是不存在的, 即若 $f: B \to B$ 是二阶连续可微映射, 则 $\exists \xi \in B$ , 使 $f(\xi) = \xi$ . 我们得到了 Brouwer 不动点定理的另一个证明. 你能否举几个运用 Brouwer 不动点定理的实际例子.
