

# 第十九章 偏导数与全微分

本章前两节分别讨论多元函数的偏导数与全微分. 在 §19.3 介绍求多元函数偏导数的链式法则. §19.4 是向量值函数的微分学定理. 最后一节是学习要点和参考题. 方向导数、梯度、Taylor 公式等将在第二十一章 (偏导数的应用) 中介绍.

## §19.1 偏导数

### 19.1.1 偏导数的定义

以二元函数为例. 设 $f(x, y)$ 在点 $(x_0, y_0)$ 的某个邻域上有定义. 固定 $y = y_0$ 将 $f(x, y)$ 视为 $x$ 的一元函数. 如果它在点 $x_0$ 可导, 则称此导数是二元函数 $f(x, y)$ 在点 $(x_0, y_0)$ 关于 $x$ 的偏导数, 记为 $\frac{\partial f}{\partial x} (x_0, y_0)$ 或 $f_x(x_0, y_0)$ , 即

$$
\frac {\partial f}{\partial x} (x _ {0}, y _ {0}) = \lim _ {\Delta x \rightarrow 0} \frac {f (x _ {0} + \Delta x , y _ {0}) - f (x _ {0} , y _ {0})}{\Delta x}.
$$

类似地可以定义 $\frac{\partial f}{\partial y}(x_{0},y_{0})$ 以及任意个变元的多元函数的偏导数.

例题19.1.1 求

$$
f (x, y) = \left\{ \begin{array}{l l} y \ln (x ^ {2} + y ^ {2}), & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0) \end{array} \right.
$$

在点 $(0,0)$ 的偏导数.

解 由于

$$
\begin{array}{l} \frac {f (\Delta x , 0) - f (0 , 0)}{\Delta x} = \frac {0 - 0}{\Delta x} = 0, \\ \frac {f (0 , \Delta y) - f (0 , 0)}{\Delta y} = \frac {\Delta y \ln (\Delta y) ^ {2}}{\Delta y} = \ln (\Delta y) ^ {2}, \end{array}
$$

从而

$$
\frac {\partial f}{\partial x} (0, 0) = 0, \quad \frac {\partial f}{\partial y} (0, 0) \text {不存在}.
$$

由于多元函数的偏导数是用一元函数的导数来定义的, 因此它具有导数的基本性质与运算法则, 例如偏导数的四则运算, 对复合函数求偏导数的链式法则等.

偏导数的几何意义 设 $z = f(x, y)$ 是空间 $\mathbf{R}^3$ 中的曲面, $f(x, y)$ 在点 $(x_0, y_0)$ 的偏导数存在, 则它与平面 $y = y_0$ 的交线 $l_x$ 在点 $\pmb{p}_0(x_0, y_0, z_0)$ 处的切向量 $\pmb{\tau}_x$ 为 $\left(1, 0, \frac{\partial f}{\partial y}(x_0, y_0)\right)$ , 与平面 $x = x_0$ 的交线 $l_y$ 在点 $\pmb{p}_0(x_0, y_0, z_0)$ 处的切向量 $\pmb{\tau}_y$ 为 $\left(0, 1, \frac{\partial f}{\partial x}(x_0, y_0)\right)$ .

### 19.1.2 偏导数与连续

在一元函数中, 可导可以推出连续. 但在多元函数中, 若 $f$ 在某一点对每一个变元的偏导数都存在, 却不能断言 $f$ 在该点连续, 甚至不能断言 $f$ 在该点的极限存在. 最简单的例子是

$$
f (x, y) = \left\{ \begin{array}{l l} 1, & \text {当} x y \neq 0, \\ 0, & \text {当} x y = 0. \end{array} \right.
$$

显然 $f_{x}(0,0) = f_{y}(0,0) = 0$ ，但 $f$ 在点 $(0,0)$ 不连续，甚至极限也不存在.

下面的命题说明, 如果偏导数在某一点的邻域上存在而且有界, 则可推出函数在该点连续.

命题 19.1.1 设函数 $f(x,y)$ 的两个偏导数 $\frac{\partial f}{\partial x}$ 和 $\frac{\partial f}{\partial y}$ 在点 $(x_{0},y_{0})$ 的某个邻域上存在且有界，则 f 在点 $(x_{0},y_{0})$ 连续.

证 注意到

$$
\begin{array}{r l} \Delta f & = f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0}, y _ {0}) \\ & = [ f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0}, y _ {0} + \Delta y) ] + [ f (x _ {0}, y _ {0} + \Delta y) - f (x _ {0}, y _ {0}) ], \end{array}
$$

利用一元函数的微分中值定理, 得

$$
\Delta f = \frac {\partial f}{\partial x} (x _ {0} + \theta_ {1} \Delta x, y _ {0} + \Delta y) \Delta x + \frac {\partial f}{\partial y} (x _ {0}, y _ {0} + \theta_ {2} \Delta y) \Delta y,
$$

其中 $0 < \theta_{1}, \theta_{2} < 1$ . 已知 $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$ 在点 $(x_{0}, y_{0})$ 的邻域上有界, 所以

$$
\lim _ {(\Delta x, \Delta y) \rightarrow (0, 0)} \Delta f = 0,
$$

即 $f(x,y)$ 在点 $(x_0,y_0)$ 连续.

### 19.1.3 高阶偏导数

就二元函数而论, 若 $f(x,y)$ 的两个偏导数 $f_{x}(x,y)$ 和 $f_{y}(x,y)$ 都存在, 则它们都是二元函数. 如果它们关于 $x$ 的偏导数存在或者关于 $y$ 的偏导数存在, 就称这些偏导数是 $f(x,y)$ 的二阶偏导数:

f 关于 x 的二阶偏导数, 记为 $\frac{\partial^{2}f}{\partial x^{2}}$ 或 $f_{xx}$ ;

$f$ 关于 $y$ 的二阶偏导数，记为 $\frac{\partial^2f}{\partial y^2}$ 或 $f_{yy}$ 

f 先关于 x 后关于 y 的二阶混合偏导数, 记为 $\frac{\partial^{2}f}{\partial y\partial x}$ 或 $f_{xy}$ ;

f 先关于 y 后关于 x 的二阶混合偏导数, 记为 $\frac{\partial^{2}f}{\partial x\partial y}$ 或 $f_{yx}$ .

更高阶的偏导数也可以同样定义. 请注意两个混合偏导数 $\frac{\partial^2 f}{\partial y \partial x}$ 与 $\frac{\partial^2 f}{\partial x \partial y}$ 并不总是相等的, 例如设

$$
f (x, y) = \left\{ \begin{array}{l l} x y \cdot \frac {x ^ {2} - y ^ {2}}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

则有

$$
\begin{array}{l} f _ {x} (x, y) = \left\{ \begin{array}{l l} y \cdot \frac {x ^ {4} + 4 x ^ {2} y ^ {2} - y ^ {4}}{(x ^ {2} + y ^ {2}) ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0), \end{array} \right. \\ f _ {y} (x, y) = \left\{ \begin{array}{l l} x \cdot \frac {x ^ {4} - 4 x ^ {2} y ^ {2} - y ^ {4}}{(x ^ {2} + y ^ {2}) ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0). \end{array} \right. \end{array}
$$

从而在原点处有

$$
\begin{array}{l} {f _ {x y} (0, 0) = \lim _ {\Delta y \to 0} \frac {f _ {x} (0 , \Delta y) - f _ {x} (0 , 0)}{\Delta y} = - 1,} \\ {f _ {y x} (0, 0) = \lim _ {\Delta x \to 0} \frac {f _ {y} (\Delta x , 0) - f _ {y} (0 , 0)}{\Delta x} = 1.} \end{array}
$$

由此可见

$$
f _ {y x} (0, 0) \neq f _ {x y} (0, 0).
$$

注 上面定义的函数 $f(x, y)$ 连续可微 (关于可微的定义见下一小节), 因为 $f_x$ 和 $f_y$ 都是处处连续的. 但如果混合偏导数 $f_{yx}$ 和 $f_{xy}$ 连续, 则构造上述反例是不可能的. 事实上, 如果在某一点 $(x_0, y_0)$ 的邻域内 $f_x, f_y$ 都存在, 且 $f_{yx}$ 与 $f_{xy}$ 都在该点连续, 那么在点 $(x_0, y_0)$ 一定成立 $f_{yx} = f_{xy}$ . 在一般的分析教科书上都有这个结论及其证明. 我们可以证明下述更强的结论.

命题19.1.2设 $f_{x}, f_{y}$ 在点 $(x_0, y_0)$ 的某邻域内存在且 $f_{xy}$ 在点 $(x_0, y_0)$ 连续，则 $f_{yx}(x_0, y_0)$ 存在，且

$$
f _ {y x} (x _ {0}, y _ {0}) = f _ {x y} (x _ {0}, y _ {0}).
$$

证 定义

$$
\varphi (x) = f (x, y _ {0} + \Delta y) - f (x, y _ {0}).
$$

由于函数 $f$ 存在关于 $x$ 的偏导数，所以 $\varphi(x)$ 可导，应用一元函数的中值定理，有

$$
\begin{array}{r l} \varphi (x _ {0} + \Delta x) - \varphi (x _ {0}) & = \varphi^ {\prime} (x _ {0} + \theta_ {1} \Delta x) \Delta x \\ & = [ f _ {x} (x _ {0} + \theta_ {1} \Delta x, y _ {0} + \Delta y) - f _ {x} (x _ {0} + \theta_ {1} \Delta x, y _ {0}) ] \Delta x, \end{array}
$$

其中 $0 < \theta_{1} < 1$ ，又由 $f_{x}$ 存在关于 $y$ 的偏导数，故对以 $y$ 为自变量的函数 $f_{x}(x_{0} + \theta_{1}\Delta x, y)$ 应用一元函数中值定理，上式化为

$$
\varphi (x _ {0} + \Delta x) - \varphi (x _ {0}) = f _ {x y} (x _ {0} + \theta_ {1} \Delta x, y _ {0} + \theta_ {2} \Delta y) \Delta x \Delta y,
$$

其中 $0 < \theta_{1}, \theta_{2} < 1$ . 因此

$$
\begin{array}{r l} & f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0} + \Delta x, y _ {0}) - f (x _ {0}, y _ {0} + \Delta y) + f (x _ {0}, y _ {0}) \\ & = f _ {x y} (x _ {0} + \theta_ {1} \Delta x, y _ {0} + \theta_ {2} \Delta y) \Delta x \Delta y. \end{array}
$$

在上式两边同除以 $\Delta y$ ，并令 $\Delta y \to 0$ ，由偏导数的定义以及 $f_{xy}$ 在点 $(x_0, y_0)$ 连续就得到

$$
f _ {y} (x _ {0} + \Delta x, y _ {0}) - f _ {y} (x _ {0}, y _ {0}) = f _ {x y} (x _ {0} + \theta_ {1} \Delta x, y _ {0}) \Delta x.
$$

再在上式两边同除以 $\Delta x$ ，并令 $\Delta x\to 0$ ，由 $f_{xy}$ 在点 $(x_0,y_0)$ 连续得到

$$
f _ {y x} (x _ {0}, y _ {0}) = f _ {x y} (x _ {0}, y _ {0}).
$$

例题19.1.2证明：函数 $u(x,t) = \frac{1}{2a\sqrt{\pi t}}\mathrm{e}^{-\frac{x^2}{4a^2t}}$ 在上半平面 $\mathbf{R}_+^2 = \{(x,t)\in$ $\mathbf{R}^2\mid t > 0\}$ 上满足热传导方程

$$
\frac {\partial u}{\partial t} - a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} = 0,\tag{19.1}
$$

其中 a 为正常数.

证 $\forall (x,t)\in \mathbf{R}_+^2$ ，由于

$$
\begin{array}{r l} \frac {\partial u}{\partial t} (x, t) & = \frac {1}{2 a \sqrt {\pi}} \left(- \frac {1}{2 t ^ {3 / 2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} + \frac {1}{t ^ {1 / 2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {x ^ {2}}{4 a ^ {2} t ^ {2}}\right) \\ & = \frac {1}{4 a \sqrt {\pi} t ^ {3 / 2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \left(- 1 + \frac {x ^ {2}}{2 a ^ {2} t}\right), \end{array}
$$

$$
\frac {\partial u}{\partial x} (x, t) = \frac {1}{2 a \sqrt {\pi t}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \bigg (- \frac {x}{2 a ^ {2} t} \bigg),
$$

$$
\begin{array}{r l} \frac {\partial^ {2} u}{\partial x ^ {2}} (x, t) & = \frac {1}{2 a \sqrt {\pi t}} \left(\mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {x ^ {2}}{4 a ^ {4} t ^ {2}} - \frac {1}{2 a ^ {2} t} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}}\right) \\ & = \frac {1}{4 a ^ {3} \sqrt {\pi} t ^ {3 / 2}} \mathrm{e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \left(\frac {x ^ {2}}{2 a ^ {2} t} - 1\right), \end{array}
$$

所以方程(19.1)在 $R_{+}^{2}$ 上成立.

例题19.1.3设 $\Gamma (x,y;\xi ,\eta) = \frac{1}{2\pi}\ln \sqrt{(x - \xi)^2 + (y - \eta)^2}$ ，则

$$
\left| \frac {\partial \Gamma}{\partial y} \right| \leqslant \frac {1}{2 \pi} \left[ (x - \xi) ^ {2} + (y - \eta) ^ {2} \right] ^ {- \frac {1}{2}},
$$

$$
\left| \frac {\partial^ {2} \Gamma}{\partial x \partial y} \right| \leqslant \frac {1}{\pi} \left[ (x - \xi) ^ {2} + (y - \eta) ^ {2} \right] ^ {- 1}.
$$

证 由于

$$
\frac {\partial \Gamma}{\partial y} = \frac {1}{2 \pi} \frac {y - \eta}{(x - \xi) ^ {2} + (y - \eta) ^ {2}},
$$

$$
\frac {\partial^ {2} \Gamma}{\partial x \partial y} = - \frac {1}{\pi} \frac {(y - \eta) (x - \xi)}{[ (x - \xi) ^ {2} + (y - \eta) ^ {2} ] ^ {2}},
$$

从而结论成立.

## §19.2 全微分

### 19.2.1 全微分的定义与基本性质

为方便起见, 这里仅讨论二元函数. 设 $z = f(x, y)$ 在点 $(x_0, y_0)$ 的某邻域上有定义. 如果 $\Delta z = f(x_0 + \Delta x, y_0 + \Delta y) - f(x_0, y_0)$ 可以表示为

$$
\Delta z = A \Delta x + B \Delta y + o (r) (r \rightarrow 0),
$$

其中 $A, B$ 是两个仅与点 $(x_0, y_0)$ 有关而与 $\Delta x, \Delta y$ 无关的常数， $o(r)$ 是当 $r \to 0$ 时关于 $r$ 的高阶无穷小量， $r = \sqrt{(\Delta x)^2 + (\Delta y)^2}$ ，则称 $f$ 在点 $(x_0, y_0)$ 可微，且称 $A\Delta x + B\Delta y$ 是函数 $f$ 在点 $(x_0, y_0)$ 的全微分，记作

$$
\mathrm{d} z = A \Delta x + B \Delta y.
$$

习惯上，记 $\Delta x = \mathrm{d}x,\Delta y = \mathrm{d}y$ ，于是全微分 $\mathrm{dz}$ 又可以写为

$$
\mathrm{d} z = A \mathrm{d} x + B \mathrm{d} y.
$$

从全微分的定义可知, 如果函数 f 在点 $(x_{0}, y_{0})$ 可微, 那么在点 $(x_{0}, y_{0})$ 附近有

$$
f (x _ {0} + \Delta x, y _ {0} + \Delta y) \approx f (x _ {0}, y _ {0}) + A \Delta x + B \Delta y.
$$

上式右端是一个线性函数，因此可微的意义在于在点 $(x_0, y_0)$ 附近函数可用关于 $\Delta x$ 与 $\Delta y$ 的一个线性函数近似代替.

全微分具有下列性质：

(1) 如果 $f$ 在点 $(x_0, y_0)$ 可微，则

$$
A = \frac {\partial f}{\partial x} (x _ {0}, y _ {0}), B = \frac {\partial f}{\partial y} (x _ {0}, y _ {0});
$$

(2) 若 f 在点 $(x_{0}, y_{0})$ 可微，则 f 在点 $(x_{0}, y_{0})$ 连续.

由性质(1)知, 如果 f 在点 $(x_{0}, y_{0})$ 可微, 则 f 在点 $(x_{0}, y_{0})$ 的全微分是

$$
\mathrm{d} f = \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) \mathrm{d} x + \frac {\partial f}{\partial y} (x _ {0}, y _ {0}) \mathrm{d} y.
$$

类似地可定义高阶全微分

$$
\mathrm{d} ^ {n} f = \mathrm{d} (\mathrm{d} ^ {n - 1} f) = \left(\mathrm{d} x \frac {\partial}{\partial x} + \mathrm{d} y \frac {\partial}{\partial y}\right) ^ {n} f,
$$

其中 $\left(\mathrm{d}x\frac{\partial}{\partial x}+\mathrm{d}y\frac{\partial}{\partial y}\right)^{n}$ 是将 dx, dy, $\frac{\partial}{\partial x}$ , $\frac{\partial}{\partial y}$ 视为通常的量按照二项式定理展开而得到的对 f 的一个形式记号, 实际上是一个微分算子.

全微分的几何意义 设 $z = f(x, y)$ 是空间 $\mathbf{R}^3$ 中的曲面, 如果 $f$ 可微, 那么在点 $\pmb{p}_0(x_0, y_0, z_0)$ 附近, 曲面可以用它在点 $\pmb{p}_0$ 的切平面近似代替. 其差是关于 $r = \sqrt{(x - x_0)^2 + (y - y_0)^2}$ 的一个高阶无穷小量, 切平面由两个线性无关的切向量 $\tau_x, \tau_y$ 张成, 其法向量为

$$
\boldsymbol {n} = \left(\frac {\partial f}{\partial x} (x _ {0}, y _ {0}), \frac {\partial f}{\partial y} (x _ {0}, y _ {0}), - 1\right).
$$

与一元函数的情况类似, 全微分可用于近似计算与估计误差. 以二元函数为例,

$$
f (x _ {0} + \Delta x, y _ {0} + \Delta y) \approx f (x _ {0}, y _ {0}) + \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) \Delta x + \frac {\partial f}{\partial y} (x _ {0}, y _ {0}) \Delta y
$$

就是 $(x_{0},y_{0})$ 附近的一个近似公式,

$$
\Delta z \approx \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) \Delta x + \frac {\partial f}{\partial y} (x _ {0}, y _ {0}) \Delta y
$$

就是点 $(x_{0},y_{0})$ 附近的一个近似的误差估计式(参见上册6.3.2小节中的例题).

例题 19.2.1 求 $A = \sqrt{1 - (1.004)^{2} + (1.994)^{2}}$ 的近似值.

解 取 $z = f(x,y) = \sqrt{1 - x^2 + y^2}$ , $x_0 = 1$ , $y_0 = 2$ , $\Delta x = 0.004$ , $\Delta y = -0.006$ . 计算得

$$
\frac {\partial f}{\partial x} (1, 2) = - \frac {1}{2}, \quad \frac {\partial f}{\partial y} (1, 2) = 1.
$$

于是 $A = f(1.004, 1.994) \approx f(1, 2) - \frac{1}{2} \cdot (0.004) + 1 \cdot (-0.006) = 1.992$ .

### 19.2.2 多元函数的连续性、偏导数存在性及可微性之间的关系

多元函数在一个点处的连续性、偏导数存在性及可微性之间有下列关系：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/654eac26b783a5e9d82672ff8461419c6998c8eef691d5dde8b531abca0acf5a.jpg)


由此可得到证明一个函数 $f(x,y)$ 在点 $(x_{0},y_{0})$ 不可微的常用方法如下:

(1) $f(x,y)$ 在 $(x_0,y_0)$ 点至少有一个偏导数不存在；

(2) $f(x,y)$ 在 $(x_{0},y_{0})$ 点不连续;

(3) 从定义出发证明 $\Delta f - f_{x}(x_{0}, y_{0})\Delta x - f_{y}(x_{0}, y_{0})\Delta y \neq o(r)$ .

例题 19.2.2 设 $f(x,y)=\sqrt{|xy|}$ ，证明：

(1) $f(x,y)$ 在 $(0,0)$ 点连续;

(2) $\frac{\partial f}{\partial x}(0,0), \frac{\partial f}{\partial y}(0,0)$ 都存在;

(3) $f(x,y)$ 在 $(0,0)$ 点不可微.

证 (1) 由于 $|\Delta f| = |\Delta x|^{1/2}|\Delta y|^{1/2}$ , 于是

$$
\lim _ {(\Delta x, \Delta y) \rightarrow (0, 0)} f (x, y) = \lim _ {(\Delta x, \Delta y) \rightarrow (0, 0)} [ f (0, 0) + \Delta f ] = 0 = f (0, 0).
$$

(2) 直接按定义计算得

$$
\frac {\partial f}{\partial x} (0, 0) = \lim _ {\Delta x \rightarrow 0} \frac {f (\Delta x , 0) - f (0 , 0)}{\Delta x} = 0,
$$

$$
\frac {\partial f}{\partial y} (0, 0) = \lim _ {\Delta y \rightarrow 0} \frac {f (0 , \Delta y) - f (0 , 0)}{\Delta y} = 0.
$$

(3) 由于

$$
\Delta f - f _ {x} (0, 0) \Delta x - f _ {y} (0, 0) \Delta y = | \Delta x | ^ {\frac {1}{2}} | \Delta y | ^ {\frac {1}{2}},
$$

取 $\Delta x = \Delta y\to 0$ ，则

$$
\frac {\Delta f - f _ {x} (0 , 0) \Delta x - f _ {y} (0 , 0) \Delta y}{r} = \frac {| \Delta x | ^ {\frac {1}{2}} | \Delta y | ^ {\frac {1}{2}}}{\sqrt {(\Delta x) ^ {2} + (\Delta y) ^ {2}}} \longrightarrow \frac {1}{\sqrt {2}} \neq 0,
$$

所以 $f(x,y)$ 在 $(0,0)$ 点不可微.

注 $f(x,y)$ 在点 $(x_0,y_0)$ 处可微时，成立无穷小增量公式：

$$
f \left(x _ {0} + \Delta x, y _ {0} + \Delta y\right) = f \left(x _ {0}, y _ {0}\right) + f _ {x} \left(x _ {0}, y _ {0}\right) \Delta x + f _ {y} \left(x _ {0}, y _ {0}\right) \Delta y + o (| \Delta x | + | \Delta y |).
$$

上述例子说明仅有 $f_{x}(x_0,y_{0}),f_{y}(x_{0},y_{0})$ 存在还不足以保证二维无穷小增量公式成立.这与一维无穷小增量公式（上册159页(6.1))成立的条件是不一样的，由此可以体会一元导数与多元偏导数的区别.

例题19.2.3设 $f(x,y) = |x - y|\varphi (x,y)$ ，其中 $\varphi (x,y)$ 在点(0,0)的一个邻域上有定义，要求给函数 $\varphi (x,y)$ 加上适当的条件，使得

(1) $f(x,y)$ 在点 $(0,0)$ 连续;

(2) $f(x,y)$ 在点 $(0,0)$ 存在偏导数;

(3) $f(x,y)$ 在点 $(0,0)$ 可微.

解 (1) 由于 $f(0,0) = 0$ ，而在点 $(0,0)$ 附近

$$
| f (x, y) | \leqslant 2 \sqrt {x ^ {2} + y ^ {2}} | \varphi (x, y) |,
$$

于是当

$$
\lim _ {(x, y) \rightarrow (0, 0)} \sqrt {x ^ {2} + y ^ {2}} \varphi (x, y) = 0
$$

时， $f(x,y)$ 在 $(0,0)$ 点连续.

特别地，当 $\varphi(x,y)$ 在点 $(0,0)$ 附近有界时， $f(x,y)$ 在点 $(0,0)$ 连续.

(2) 由于单侧导数

$$
\begin{array}{r l}\left(\frac {\partial f}{\partial x}\right) _ {\pm} (0, 0)&= \lim _ {x \rightarrow 0 ^ {\pm}} \frac {f (x , 0) - f (0 , 0)}{x}\\&= \lim _ {x \rightarrow 0 ^ {\pm}} \frac {\pm x \varphi (x , 0)}{x} = \pm \lim _ {x \rightarrow 0 ^ {\pm}} \varphi (x, 0),\end{array}
$$

从而当 $\lim_{x\to 0^{+}}\varphi (x,0) = -\lim_{x\to 0^{-}}\varphi (x,0)$ 时， $\frac{\partial f}{\partial x} (0,0) = \lim_{x\to 0^{+}}\varphi (x,0).$ 

同理当 $\lim_{y\to 0^{+}}\varphi (0,y) = -\lim_{y\to 0^{-}}\varphi (0,y)$ 时， $\frac{\partial f}{\partial y} (0,0) = \lim_{y\to 0^{+}}\varphi (0,y)$ . 特别地，当 $\lim_{(x,y)\to (0,0)}\varphi (x,y) = 0$ 时， $\frac{\partial f}{\partial x} (0,0) = \frac{\partial f}{\partial y} (0,0) = 0.$ 

(3) 由于

$$
\begin{array}{r l} & {f (x, y) - \frac {\partial f}{\partial x} (0, 0) x - \frac {\partial f}{\partial y} (0, 0) y} \\ & {= | x - y |   \varphi (x, y) - [ \lim _ {x \to 0 ^ {+}} \varphi (x, 0) ] x - [ \lim _ {y \to 0 ^ {+}} \varphi (0, y) ] y} \\ & {= \left\{ \begin{array}{l l} {[ \varphi (x, y) - \lim _ {x \to 0 ^ {+}} \varphi (x, 0) ] x - [ \varphi (x, y) + \lim _ {y \to 0 ^ {+}} \varphi (0, y) ] y,} & {\text {若} x \geqslant y,} \\ {- [ \varphi (x, y) + \lim _ {x \to 0 ^ {+}} \varphi (x, 0) ] x + [ \varphi (x, y) - \lim _ {y \to 0 ^ {+}} \varphi (0, y) ] y,} & {\text {若} x <   y,} \end{array} \right.} \end{array}
$$

由此可以推出，当

$$
\lim _ {(x, y) \rightarrow (0, 0)} \varphi (x, y) = 0
$$

时， $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$ 且 $f(x,y)$ 在 $(0,0)$ 点可微.

### 19.2.3 思考题

1. 为什么说 $f_{x}(x_0, y_0)$ 存在就能保证一元函数 $f(x, y_0)$ 在点 $x_0$ 连续？由此能否进一步断言：对充分接近 $y_0$ 的 $y_1$ ，一元函数 $f(x, y_1)$ 在点 $x_0$ 连续？

2. 证明全微分的性质 (1), (2).

3. 举例说明：

(1) $f(x,y)$ 在某一点的邻域内存在偏导数，但在该点不一定连续，从而不一定可微；

(2) $f(x,y)$ 在某一点连续, 但在该点偏导数不一定存在, 从而不一定可微;

(3) $f(x,y)$ 在某一点可微, 但在该点偏导数不一定连续.

4. 证明: 若 $f_{x}(x, y)$ 在点 $(x_{0}, y_{0})$ 存在, $f_{y}(x, y)$ 在点 $(x_{0}, y_{0})$ 连续, 则 $f(x, y)$ 在点 $(x_{0}, y_{0})$ 可微.

5. 设 $z = f(x, y)$ 在开集 $D = (a, b) \times (c, d)$ 上可微，且全微分 $\mathrm{dz}$ 恒为零。问 $f(x, y)$ 在 $D$ 上是否应取常数值？证明你的结论。

### 19.2.4 练习题

1. 设 $f(x, y) = \begin{cases} \frac{\sqrt{|x - y|}}{x^2 + y^2} \sin (x^2 + y^2), & x^2 + y^2 \neq 0, \\ 0, & x^2 + y^2 = 0, \end{cases}$ 

讨论:

(1) $f(x,y)$ 在点 $(0,0)$ 是否连续?

(2) $f(x,y)$ 在点 $(0,0)$ 是否可微?

2. 设 $f(x, y) = \begin{cases} xy \sin \frac{1}{x^2 + y^2}, & x^2 + y^2 \neq 0, \\ 0, & x^2 + y^2 = 0. \end{cases}$ 

证明：

(1) $f_{x}(0,0), f_{y}(0,0)$ 都存在;

(2) $f_{x}(0,0), f_{y}(0,0)$ 在点 $(0,0)$ 不连续；

(3) $f(x,y)$ 在点 $(0,0)$ 可微.

(本题也说明从可微不能推出偏导数连续.)

3. 设 $f(x, y, z)$ 在开集 $D$ 上有定义， $f_x(x, y, z)$ 与 $f_y(x, y, z)$ 在 $D$ 上有界，且对固定的 $(x, y), f(x, y, z)$ 是 $z$ 的连续函数。证明： $f(x, y, z)$ 在 $D$ 上连续。

4. 求 $u = \ln (1 + x^2 + y^2)$ 在 $(x, y) = (1, 2)$ 处的全微分.

5. 已测得一圆柱体的底圆直径 $D_{0}=10.44$ ，高 $H_{0}=18.36$ ，且测量误差 $|\Delta D|\leqslant0.02,|\Delta H|\leqslant0.01$ 。试估计用体积公式 $V=\frac{1}{4}\pi D^{2}H$ 计算时的绝对误差 $\Delta V$ 与相对误差 $\Delta V/V$ 。

6. $f(x,y)$ 定义在矩形 $I = [a,b]\times [c,d]$ 上，且 $f_{y}$ 在 $I$ 上连续，证明： $f(x,y)$ 对 $y$ 满足一致Lipschitz条件，即 $\exists L > 0$ ，使得 $\forall (x,y_1),(x,y_2)\in I$ ，都有

$$
\left| f (x, y _ {1}) - f (x, y _ {2}) \right| \leqslant L \left| y _ {1} - y _ {2} \right|,
$$

其中 L 与 x 无关.

7. 若函数 $f(x, y)$ 的偏导数 $f_x$ 和 $f_y$ 在区域 $D$ 内存在，且 $\forall (x, y) \in D, f_x(x, y) = f_y(x, y) = 0$ . 证明： $f(x, y)$ 在 $D$ 上为常值函数.

8. 设 $\Omega \in \mathbf{R}^2$ 是开区域, $u(x,y), v(x,y)$ 在 $\Omega$ 内满足

$$
\frac {\partial u}{\partial x} = \frac {\partial v}{\partial y}, \quad \frac {\partial u}{\partial y} = - \frac {\partial v}{\partial x}, \quad u ^ {2} + v ^ {2} = C,
$$

其中 C 为常数, 证明: $u(x,y)$ , $v(x,y)$ 在 $\Omega$ 上均为常值函数.

9. 设 $f(x, y)$ 在 $G = \{(x, y) \mid x^2 + y^2 < 1\}$ 上有定义. 若 $f(x, 0)$ 在点 $x = 0$ 处连续，且 $f_y(x, y)$ 在 $G$ 上有界. 证明： $f(x, y)$ 在点 $(0, 0)$ 处连续.

## §19.3 复合函数求导 (链式法则)

### 19.3.1 复合函数偏导数的链式法则

若 $z = f(u_{1}, u_{2}, \cdots, u_{m})$ 在点 $(u_{1}, u_{2}, \cdots, u_{m})$ 可微， $u_{i} = g_{i}(x_{1}, x_{2}, \cdots, x_{n})$ $(i = 1, 2, \cdots, m)$ 在点 $(x_{1}, x_{2}, \cdots, x_{n})$ 有关于 $x_{j} (j = 1, 2, \cdots, n)$ 的偏导数，则复合函数

$$
z = f \left[ g _ {1} \left(x _ {1}, x _ {2}, \dots , x _ {n}\right), g _ {2} \left(x _ {1}, x _ {2}, \dots , x _ {n}\right), \dots , g _ {m} \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) \right]
$$

关于自变量 $x_{j}$ 的偏导数存在且

$$
\frac {\partial z}{\partial x _ {j}} = \sum_ {i = 1} ^ {m} \frac {\partial f}{\partial u _ {i}} \cdot \frac {\partial u _ {i}}{\partial x _ {j}}, j = 1, 2, \dots , n.\tag{19.2}
$$

写成矩阵的形式为

$$
\left(\frac {\partial z}{\partial x _ {1}}, \frac {\partial z}{\partial x _ {2}}, \dots , \frac {\partial z}{\partial x _ {n}}\right) = \left(\frac {\partial f}{\partial u _ {1}}, \frac {\partial f}{\partial u _ {2}}, \dots , \frac {\partial f}{\partial u _ {m}}\right) \left( \begin{array}{c c c c} \frac {\partial u _ {1}}{\partial x _ {1}} & \frac {\partial u _ {1}}{\partial x _ {2}} & \dots & \frac {\partial u _ {1}}{\partial x _ {n}} \\ \frac {\partial u _ {2}}{\partial x _ {1}} & \frac {\partial u _ {2}}{\partial x _ {2}} & \dots & \frac {\partial u _ {2}}{\partial x _ {n}} \\ \vdots & \vdots & & \vdots \\ \frac {\partial u _ {m}}{\partial x _ {1}} & \frac {\partial u _ {m}}{\partial x _ {2}} & \dots & \frac {\partial u _ {m}}{\partial x _ {n}} \end{array} \right).
$$

特款1 若 $z = f(x,y)$ ，而 $x = \varphi (t),y = \psi (t)$ ，则

$$
\frac {\mathrm{d} z}{\mathrm{d} t} = \frac {\partial f}{\partial x} \varphi^ {\prime} (t) + \frac {\partial f}{\partial y} \psi^ {\prime} (t).\tag{19.3}
$$

特款2 若 $z = f(x,y,t)$ ，而 $x = \varphi (s,t),y = \psi (s,t)$ ，则

$$
\frac {\partial z}{\partial s} = \frac {\partial f}{\partial x} \frac {\partial \varphi}{\partial s} + \frac {\partial f}{\partial y} \frac {\partial \psi}{\partial s},\tag{19.4}
$$

$$
\frac {\partial z}{\partial t} = \frac {\partial f}{\partial x} \frac {\partial \varphi}{\partial t} + \frac {\partial f}{\partial y} \frac {\partial \psi}{\partial t} + \frac {\partial f}{\partial t}.\tag{19.5}
$$

注意: 最后一个等式左边的 $\frac{\partial z}{\partial t}$ 与等式右边的 $\frac{\partial f}{\partial t}$ 不一样, $\frac{\partial z}{\partial t}$ 表示函数

$$
z = f [ \varphi (s, t), \psi (s, t), t ]
$$

对 $t$ 求偏导, 此时视 $s$ 为常数, 而 $\frac{\partial f}{\partial t}$ 是 $z = f(x, y, t)$ 对 $t$ 求偏导, 把 $x, y$ 视为常数. 为了避免混乱, 有时引入下面的记号

$$
f _ {1} = \frac {\partial f}{\partial x} (x, y, t), \quad f _ {2} = \frac {\partial f}{\partial y} (x, y, t), \quad f _ {3} = \frac {\partial f}{\partial t} (x, y, t),
$$

其中下标 $i$ $(i = 1,2,3)$ 表示对第 $i$ 个自变量求偏导，于是可将(19.4)，(19.5)写为

$$
z _ {s} = f _ {1} \varphi_ {s} + f _ {2} \psi_ {s}, \quad z _ {t} = f _ {1} \varphi_ {t} + f _ {2} \psi_ {t} + f _ {3}.
$$

写成矩阵的形式为

$$
(z _ {s}, z _ {t}) = (f _ {1}, f _ {2}, f _ {3}) \left( \begin{array}{c c} \varphi_ {s} & \varphi_ {t} \\ \psi_ {s} & \psi_ {t} \\ 0 & 1 \end{array} \right).
$$

### 19.3.2 例题

例题 19.3.1 对于幂指函数 $u = x^{y}$ ，令 $x = \varphi(t)$ ， $y = \psi(t)$ ，求 $\frac{du}{dt}$ .

解 由(19.3)得

$$
\begin{array}{r l} \frac {\mathrm{d} u}{\mathrm{d} t} & = \frac {\partial u}{\partial x} \varphi^ {\prime} (t) + \frac {\partial u}{\partial y} \psi^ {\prime} (t) \\ & = y x ^ {y - 1} \varphi^ {\prime} (t) + x ^ {y} \ln x \psi^ {\prime} (t) = x ^ {y} \left(\frac {y}{x} \varphi^ {\prime} (t) + \ln x \psi^ {\prime} (t)\right) \\ & = [ \varphi (t) ] ^ {\psi (t)} \left\{\frac {\psi (t)}{\varphi (t)} \varphi^ {\prime} (t) + [ \ln \psi (t) ] \psi^ {\prime} (t) \right\}. \end{array}
$$

(以前我们曾用另外的方法证明过它, 参见上册 165-166 页的对数求导法.)

作为公式(19.3)的另一个应用, 讨论行列式

$$
\Delta = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|
$$

的求导, 其中假定元素 $a_{ij} (i, j = 1, 2, \cdots, n)$ 都是 t 的一元函数, 它们关于 t 的导数 $\frac{da_{ij}}{dt}$ 都存在.

例题 19.3.2 证明: 行列式 $\Delta$ 的导数等于把 $\Delta$ 内的第 1 行直到第 n 行的元素依次换成它们的导数而得出的 n 个行列式之和.

证 回忆行列式关于第 $i$ 行元素的展开式

$$
\Delta = \sum_ {j = 1} ^ {n} A _ {i j} a _ {i j},
$$

其中 $A_{ij}$ 为 $a_{ij}$ 的代数余子式. 容易看出 $A_{i1}, A_{i2}, \cdots, A_{in}$ 中不含有元素 $a_{ij}, 1 \leqslant j \leqslant n$ , 于是

$$
\frac {\partial \Delta}{\partial a _ {i j}} = A _ {i j}.
$$

按照公式 (19.3) 有

$$
\frac {\mathrm{d} \Delta}{\mathrm{d} t} = \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} \frac {\partial \Delta}{\partial a _ {i j}} \cdot \frac {\mathrm{d} a _ {i j}}{\mathrm{d} t} = \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} \frac {\mathrm{d} a _ {i j}}{\mathrm{d} t}.
$$

注意到 $\sum_{j=1}^{n}A_{ij}\frac{da_{ij}}{dt}$ 也表示一个行列式的展开式, 它同已知行列式 $\Delta$ 的差别仅在于把 $\Delta$ 中第 i 行的元素 $a_{i1}, a_{i2}, \cdots, a_{in}$ 换成它们的导数 $\frac{da_{i1}}{dt}, \frac{da_{i2}}{dt}, \cdots, \frac{da_{in}}{dt}$ , 由此可知结论成立.

注 在使用链式法则 (19.2) 时, 要求 $f(u_{1}, u_{2}, \cdots, u_{m})$ 在点 $(u_{1}, u_{2}, \cdots, u_{m})$ 可微, 否则公式 (19.2) 有可能失效, 请看下面的例子:

$$
f (x, y) = \left\{ \begin{array}{l l} { \frac {x ^ {2} y}{x ^ {2} + y ^ {2}},} & {\text {当} (x, y) \neq (0, 0),} \\ {0,} & {\text {当} (x, y) = (0, 0).} \end{array} \right.
$$

由于

$$
f _ {x} (x, y) = \left\{ \begin{array}{l l} { \frac {2 x y ^ {3}}{(x ^ {2} + y ^ {2}) ^ {2}},} & {\text {当} (x, y) \neq (0, 0),} \\ {0,} & {\text {当} (x, y) = (0, 0),} \end{array} \right.
$$

$$
f _ {y} (x, y) = \left\{ \begin{array}{l l} { \frac {x ^ {2} (x ^ {2} - y ^ {2})}{(x ^ {2} + y ^ {2}) ^ {2}},} & {\text {当} (x, y) \neq (0, 0),} \\ {0,} & {\text {当} (x, y) = (0, 0),} \end{array} \right.
$$

可以看出 $f_{x}$ 与 $f_{y}$ 都在 $(0,0)$ 点不连续，容易证明 $f(x,y)$ 在 $(0,0)$ 点不可微.令 $x = y = t$ ，则 $f(t,t) = \frac{1}{2} t$ ，从而 $\frac{\mathrm{d}f}{\mathrm{d}t} = \frac{1}{2}$ .如果用链式法则，有

$$
\frac {\mathrm{d} f}{\mathrm{d} t} = f _ {x} x _ {t} ^ {\prime} + f _ {y} y _ {t} ^ {\prime}.
$$

当 $(x,y)=(0,0)$ 时， $\frac{df}{dt}=0.$ 

问题出在 $f(x,y)$ 在点 $(0,0)$ 不可微，也就是不满足链式法则的条件.

例题 19.3.3 设 $f(x,y)$ 在 $R^{2}$ 上有连续偏导数，且 $f(x,x^{2})\equiv1$ .

(1) 若 $f_{x}(x, x^{2}) = x$ , 求 $f_{y}(x, x^{2})$ ;

(2) 若 $f_y(x, y) = x^2 + 2y$ , 求 $f(x, y)$ .

解 (1) 对 $f(x, x^2) \equiv 1$ 两边求导得

$$
f _ {x} + 2 x f _ {y} = 0.
$$

由条件得

$$
x + 2 x f _ {y} = 0,
$$

所以当 $x \neq 0$ 时, $f_{y}(x, x^{2}) = -\frac{1}{2}$ . 由 $f_{y}$ 的连续性知, 当 $x = 0$ 时也有 $f_{y}(x, x^{2}) = -\frac{1}{2}$ .

(2) 令 $F(x, y) = f(x, y) - (x^2y + y^2)$ ，则 $F(x, y)$ 在 $\mathbf{R}^2$ 上连续可微，且

$$
F _ {y} (x, y) = 0.
$$

于是 $F(x,y)$ 只是 $x$ 的函数，即 $F(x,y) = \varphi (x)$ ，从而

$$
f (x, y) = x ^ {2} y + y ^ {2} + \varphi (x).
$$

再由 $f(x,x^2)\equiv 1$ 得 $\varphi (x) = 1 - 2x^{4}$ ，所以

$$
f (x, y) = x ^ {2} y + y ^ {2} + 1 - 2 x ^ {4}.
$$

例题19.3.4设 $u = f(x,y)$ ， $v = g(x,y,u)$ ， $w = h(x,u,v)$ ，求 $\frac{\partial w}{\partial x},\frac{\partial w}{\partial y}.$ 

解 复合这几个函数得到

$$
w = h [ x, f (x, y), g (x, y, f (x, y)) ].
$$

从而

$$
\frac {\partial w}{\partial x} = h _ {1} + h _ {2} \frac {\partial f}{\partial x} + h _ {3} \left(g _ {1} + g _ {3} \frac {\partial f}{\partial x}\right),
$$

$$
\frac {\partial w}{\partial y} = h _ {2} \frac {\partial f}{\partial y} + h _ {3} \left(g _ {2} + g _ {3} \frac {\partial f}{\partial y}\right).
$$

例题 19.3.5 设二元连续可微函数 F 在直角坐标下可写为 $F(x,y)=f(x)g(y)$ ，在极坐标系中可写为 $F(r\cos\theta,r\sin\theta)=h(r)$ 。若 $F(x,y)$ 无零点，求 $F(x,y)$ 。

解 注意

$$
\begin{array}{r l} \frac {\partial F}{\partial \theta} & = \frac {\partial F}{\partial x} \frac {\partial x}{\partial \theta} + \frac {\partial F}{\partial y} \frac {\partial y}{\partial \theta} \\ & = f ^ {\prime} (x) g (y) (- r \sin \theta) + f (x) g ^ {\prime} (y) r \cos \theta \\ & = - y f ^ {\prime} (x) g (y) + x f (x) g ^ {\prime} (y). \end{array}
$$

另一方面有

$$
\frac {\partial F}{\partial \theta} = \frac {\partial h (r)}{\partial \theta} = 0.
$$

于是 $-yf'(x)g(y)+xf(x)g'(y)=0.$ 当 $x\neq0,\ y\neq0$ 时有

$$
\frac {f ^ {\prime} (x)}{x f (x)} = \frac {g ^ {\prime} (y)}{y g (y)}.\tag{19.6}
$$

由于上式对任意的 $x \neq 0, y \neq 0$ 恒成立，于是

$$
\frac {f ^ {\prime} (x)}{x f (x)} = \frac {g ^ {\prime} (y)}{y g (y)} = \lambda ,\tag{19.7}
$$

其中 $\lambda$ 为任一常数. 由 (19.7) 得

$$
\frac {f ^ {\prime} (x)}{f (x)} = \lambda x,
$$

即 $(\ln f)' = \left(\frac{\lambda}{2} x^2\right)'$ ，所以

$$
\ln f (x) = \frac {\lambda}{2} x ^ {2} + C,\tag{19.8}
$$

其中 C 为任意常数. 由 (19.8) 得到

$$
f (x) = C _ {1} \mathrm{e} ^ {\frac {\lambda x ^ {2}}{2}},
$$

其中 $C_1$ 为任意常数. 由(19.7)还可得到

$$
g (y) = C _ {2} \mathrm{e} ^ {\frac {\lambda y ^ {2}}{2}},
$$

其中 $C_2$ 为任意常数. 最后得到

$$
F (x, y) = C \mathrm{e} ^ {\frac {\lambda \left(x ^ {2} + y ^ {2}\right)}{2}},
$$

其中 $C, \lambda$ 为任意常数. $F(x, y)$ 在 $x = 0$ 或 $y = 0$ 的值由连续性得到.

例题 19.3.6 设 $a, b \neq 0, f$ 具有二阶连续偏导数，且

$$
a ^ {2} \frac {\partial^ {2} f}{\partial x ^ {2}} + b ^ {2} \frac {\partial^ {2} f}{\partial y ^ {2}} = 0,\tag{19.9}
$$

$$
f (a x, b x) = a x,\tag{19.10}
$$

$$
f _ {x} (a x, b x) = b x ^ {2}.\tag{19.11}
$$

求 $f_{xx}(ax,bx), f_{xy}(ax,bx), f_{yy}(ax,bx)$ .

解 对 (19.10) 两边求导, 得

$$
a f _ {x} (a x, b x) + b f _ {y} (a x, b x) = a.\tag{19.12}
$$

对 $(19.11)$ ， $(19.12)$ 两边求导得

$$
a f _ {x x} (a x, b x) + b f _ {x y} (a x, b x) = 2 b x,\tag{19.13}
$$

$$
a ^ {2} f _ {x x} (a x, b x) + 2 a b f _ {x y} (a x, b x) + b ^ {2} f _ {y y} (a x, b x) = 0.\tag{19.14}
$$

由(19.9)，(19.14)得

$$
f _ {x y} (a x, b x) = 0.\tag{19.15}
$$

将(19.15)代入(19.13)得

$$
f _ {x x} (a x, b x) = \frac {2 b}{a} x.
$$

最后将(19.16)代入(19.9)得

$$
f _ {y y} (a x, b x) = - \frac {2 a}{b} x.\tag{19.16}
$$

### 19.3.3 齐次函数

定义 如果函数 $f(x,y)$ 满足 $f(tx,ty)=t^{n}f(x,y)$ ，其中 t>0，则称 f 是 n 次齐次函数。齐次函数有如下性质：

命题 19.3.1 设 f 有连续偏导数, 则 f 是 n 次齐次函数的充分必要条件是

$$
x \frac {\partial f}{\partial x} (x, y) + y \frac {\partial f}{\partial y} (x, y) = n f (x, y).
$$

命题19.3.2设 $f(x,y)$ 是二次连续可微的 $n$ 次齐次函数，则

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} f (x, y) = n (n - 1) f (x, y),
$$

这里 $\left(x\frac{\partial}{\partial x} + y\frac{\partial}{\partial y}\right)^2 = x^2\left(\frac{\partial}{\partial x}\right)^2 + 2xy\left(\frac{\partial}{\partial x}\right)\left(\frac{\partial}{\partial y}\right) + y^2\left(\frac{\partial}{\partial y}\right)^2$ 是一种缩写的形式记号，即把 $x, y, \frac{\partial}{\partial x}, \frac{\partial}{\partial y}$ 都看成为常数后按二项式展开，但并不是将算子 $x\frac{\partial}{\partial x} + y\frac{\partial}{\partial y}$ 对 $f(x, y)$ 接连作用两次.

命题 19.3.3 若 $f(x,y)$ 是二次连续可微的 n 次齐次函数, 则 $f_{x}(x,y), f_{y}(x,y)$ 是 $(n-1)$ 次齐次函数.

命题 19.3.4 若 $f(x,y)$ 是在 $R^{2} \setminus \{0\}$ 上连续的 n 次齐次函数，则

$$
| f (x, y) | \leqslant C (x ^ {2} + y ^ {2}) ^ {\frac {n}{2}},
$$

其中 C 为正常数.

以上命题都可以推广到任意个自变量的情形. 它们的证明都不难, 留给读者.

例题19.3.7 证明： $u = \varphi \left(\frac{y}{x}\right) + y\psi \left(\frac{y}{x}\right)$ 满足方程

$$
x ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} + 2 x y \frac {\partial^ {2} u}{\partial x \partial y} + y ^ {2} \frac {\partial^ {2} u}{\partial y ^ {2}} = 0,\tag{19.17}
$$

其中 $\varphi, \psi$ 均为二次连续可微函数.

分析 当然可以通过复合函数求导数来验证方程, 但观其特点, 首先是由 $\varphi$ 和 $\psi$ 的任意性知 $\varphi\left(\frac{y}{x}\right)$ 与 $y\psi\left(\frac{y}{x}\right)$ 都应该满足方程. 又注意到 $\varphi\left(\frac{y}{x}\right)$ 为零次齐次函数, $y\psi\left(\frac{y}{x}\right)$ 为一次齐次函数, 且方程 (19.17) 可写为

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} u = 0.
$$

证 由命题19.3.2知

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \varphi \left(\frac {y}{x}\right) = 0 (0 - 1) \varphi \left(\frac {y}{x}\right) = 0,
$$

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \left[ y \psi \left(\frac {y}{x}\right) \right] = 1 \cdot 0 \cdot \left[ y \psi \left(\frac {y}{x}\right) \right] = 0.
$$

于是

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \left[ \varphi \left(\frac {y}{x}\right) + y \psi \left(\frac {y}{x}\right) \right] = 0.
$$

这就是所要证明的.

### 19.3.4 练习题

1. 设 $u = \mathrm{e}^{x} + \sin y + t, x = st, y = s + t,$ 求 $\frac{\partial u}{\partial t}$ .

2. 设 $u = f(s, t)$ , $s = \frac{x}{y}$ , $t = \frac{y}{z}$ , 求 $\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial u}{\partial z}$ .

3. 设 $u = f(s, t, y)$ , $s = \varphi(x, y)$ , $t = \psi(x, y)$ , 求 $\frac{\partial u}{\partial x}$ , $\frac{\partial u}{\partial y}$ .

4. 设 $u = e^{x} \sin y, x = 2st, y = t + s^{2}$ ，求 $\frac{\partial u}{\partial s}, \frac{\partial u}{\partial t}$ .

5. 设 $u = f(ax^2 + by^2 + cz^2)$ , 求 $\mathrm{d}u$ .

6. 设 $f(x, y, z) = \left(\frac{x}{y}\right)^{1/z}$ ，求 $\mathrm{d}f(1, 1, 1)$ .

7. 设 $w = F(xy, yz)$ , $F$ 为有连续偏导数的二元函数, 证明:

$$
x \frac {\partial w}{\partial x} + z \frac {\partial w}{\partial z} = y \frac {\partial w}{\partial y}.
$$

8. 设 $z = f(xy)$ , $f$ 为可微的一元函数, 证明:

$$
x \frac {\partial z}{\partial x} - y \frac {\partial z}{\partial y} = 0.
$$

9. 设二元函数 $u = F(x, y)$ 满足方程

$$
x \frac {\partial u}{\partial x} + y \frac {\partial u}{\partial y} = 0,
$$

证明： $F(x,y)$ 在极坐标系下只是 $\theta$ 的函数.

10. 设二元函数 $F$ 在直角坐标系中可写成 $F(x, y) = f(x)g(y)$ , 在极坐标中可写成 $F(r \cos \theta, r \sin \theta) = h(\theta)$ , 求 $F(x, y)$ .

11. 证明: $u = \varphi(x + at) + \psi(x - at)$ 满足方程

$$
\frac {\partial^ {2} u}{\partial t ^ {2}} - a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} = 0,
$$

其中 $\varphi,\psi$ 为具有二阶连续导数的一元函数.

12. 设 $x = x(u, v), y = y(u, v)$ 满足

$$
\frac {\partial x}{\partial u} = \frac {\partial y}{\partial v}, \quad \frac {\partial x}{\partial v} = - \frac {\partial y}{\partial u},
$$

又设 $w = w(x,y)$ 满足方程

$$
\frac {\partial^ {2} w}{\partial x ^ {2}} + \frac {\partial^ {2} w}{\partial y ^ {2}} = 0,
$$

证明：

(1) $w = w(x(u, v), y(u, v))$ 满足方程 $\frac{\partial^{2}w}{\partial u^{2}} + \frac{\partial^{2}w}{\partial v^{2}} = 0;$ 

(2) $\frac{\partial^2(xy)}{\partial u^2} + \frac{\partial^2(xy)}{\partial v^2} = 0.$ 

13. 证明：可微函数 $z = f(x, y)$ 仅是 $ax + by (ab \neq 0)$ 的函数的充分必要条件是

$$
b \frac {\partial z}{\partial x} = a \frac {\partial z}{\partial y}.
$$

14. 设 $u(x,y)$ 有连续二阶偏导数, $F(s,t)$ 有连续一阶偏导数, 且满足

$$
F (u _ {x}, u _ {y}) = 0, \quad F _ {s} ^ {2} + F _ {t} ^ {2} \neq 0,
$$

证明： $u_{xx}u_{yy} - u_{xy}^2 = 0.$ 

15. 设 $u = f(\sqrt{x^{2} + y^{2}})$ 有连续二阶偏导数，且满足 $\frac{\partial^{2}u}{\partial x^{2}} + \frac{\partial^{2}u}{\partial y^{2}} = 0$ . 试求 $u(x, y)$ .

## §19.4 向量值函数的微分学定理

### 19.4.1 无穷小增量公式与拟微分平均值定理

设 D 是 $R^{n}$ 中的一个开集, $f: D \rightarrow R^{m}$ 是一个向量值函数, 即

$$
\boldsymbol {f} (\boldsymbol {x}) = \left(f _ {1} (\boldsymbol {x}), f _ {2} (\boldsymbol {x}), \dots , f _ {m} (\boldsymbol {x})\right), \quad \boldsymbol {x} = \left(x _ {1}, x _ {2}, \dots , x _ {n}\right),
$$

其中 $f_{1}, f_{2}, \cdots, f_{m}$ 均是 n 元实函数. 当 $f_{1}, f_{2}, \cdots, f_{m}$ 均是 D 上的可微函数时, 称 f 是 D 上的可微向量值函数, 或者是 D 上的可微映射. 当 f 在点 $x_{0} \in D$ 处可微时, 称 Jacobi (雅可比) 矩阵

$$
\left(\frac {\partial f _ {i}}{\partial x _ {j}} \left(\boldsymbol {x} _ {0}\right)\right) _ {m \times n}
$$

为 f 在点 $x_{0}$ 处的全导数，记为 $f'(x_{0})$ （又记为 $Jf(x_{0})$ ），它表示了一个自 $R^{n}$ 到 $R^{m}$ 的线性变换。当 f 在点 $x_{0}$ 处可微时，我们有如下无穷小增量公式，它给出了向量值函数的差的局部估计。

命题 19.4.1 设开区域 $D \subset R^{n}$ , $f: D \to R^{m}$ 在 D 上可微, 点 $x_{0}, x \in D$ , 则

$$
\boldsymbol {f} (\boldsymbol {x}) = \boldsymbol {f} \left(\boldsymbol {x} _ {0}\right) + J \boldsymbol {f} \left(\boldsymbol {x} _ {0}\right) \left(\boldsymbol {x} - \boldsymbol {x} _ {0}\right) + o \left(\boldsymbol {x} - \boldsymbol {x} _ {0}\right).
$$

其中 $o(\boldsymbol{x}-\boldsymbol{x}_{0})$ 表示当 $|x-x_{0}|\rightarrow0$ 时模为高阶无穷小量的向量.

所以, 可微映射在局部可以线性化, 它是一个常值映射与一个线性变换的和. 例题 19.2.2 说明偏导数存在还不足以保证无穷小增量公式成立.

在一元微分学中，Lagrange中值定理给出了一元函数的差(即增量)的大范围估计.对于定义在凸区域 $D\subset \mathbf{R}^n$ 上的 $n$ 元可微函数 $f(x)$ ，也有类似的微分中值定理，即当 $\pmb {a},\pmb {b}\in D$ 时， $\exists \theta \in (0,1)$ ，使

$$
f (\boldsymbol {b}) - f (\boldsymbol {a}) = \nabla f (\boldsymbol {a} + \theta (\boldsymbol {b} - \boldsymbol {a})) \cdot (\boldsymbol {b} - \boldsymbol {a}),
$$

其中 $\nabla f(\boldsymbol{x})=\left(\frac{\partial f}{\partial x_{1}},\frac{\partial f}{\partial x_{2}},\cdots,\frac{\partial f}{\partial x_{n}}\right)$ ，“.”表示内积.事实上我们可以证明：

例题 19.4.1 设 F 是 $R^{n}$ 的开集 G 到 $R^{m}$ 的可微映射 (向量值函数), $x, y \in G$ , $x \neq y$ , 证明: 若线段 $\overline{xy} \in G$ , 则 $\forall a \in R^{m}, \exists z \in \overline{xy}$ , 使得

$$
\boldsymbol {a} \cdot [ F (\boldsymbol {y}) - F (\boldsymbol {x}) ] = \boldsymbol {a} \cdot J F (\boldsymbol {z}) (\boldsymbol {y} - \boldsymbol {x}).\tag{19.18}
$$

证 定义一元函数

$$
f (\lambda) = \boldsymbol {a} \cdot [ \boldsymbol {F} (\boldsymbol {x} + \lambda (\boldsymbol {y} - \boldsymbol {x})) - \boldsymbol {F} (\boldsymbol {x}) ],
$$

则 $f(1) = a \cdot [F(y) - F(x)]$ ， $f(0) = 0$ ，由一元函数的中值定理得

$$
\boldsymbol {a} \cdot [ \boldsymbol {F} (\boldsymbol {y}) - \boldsymbol {F} (\boldsymbol {x}) ] = f (1) - f (0) = f ^ {\prime} (\xi) = \boldsymbol {a} \cdot J \boldsymbol {F} (\boldsymbol {x} + \xi (\boldsymbol {y} - \boldsymbol {x})) (\boldsymbol {y} - \boldsymbol {x}),
$$

其中 $0 < \xi < 1$ . 令 $z = x + \xi(y - x)$ , 则 $z \in \overline{xy}$ , (19.18) 得证.

但不含内积的向量值函数的中值定理是不成立的, 下面是一个反例.

例题 19.4.2 设 $f(t)=(\cos t,\sin t)$ ， $t\in[0,2\pi]$ ，则 $Jf(t)=(-\sin t,\cos t)$ 。注意到 $f(0)=f(2\pi)$ ，故不存在 $\theta\in(0,1)$ ，使 $f(2\pi)-f(0)=Jf(\theta\cdot2\pi)(2\pi-0)$ 。事实上， $Jf(t)$ 恒不为零向量。

不过我们仍然有如下的向量值函数的差的全局估计.

命题 19.4.2（拟微分平均值定理）设凸区域 $D \subset R^{n}$ ，f 在 D 上可微， $a, b \in D$ ，则 $\exists \theta \in (0,1)$ ，使

$$
| f (b) - f (a) | \leqslant \| J f (a + \theta (b - a)) \| \cdot | b - a |,
$$

这里 $\|\cdot\|$ 表示矩阵的模, 即 $\|A\|=\max_{|x|=1}|Ax|$ .

证设

$$
\varphi (t) = \langle \boldsymbol {f} (\boldsymbol {a} + t (\boldsymbol {b} - \boldsymbol {a})) - \boldsymbol {f} (\boldsymbol {a}), \boldsymbol {f} (\boldsymbol {b}) - \boldsymbol {f} (\boldsymbol {a}) \rangle , \quad t \in [ 0, 1 ].
$$

由一元函数的微分中值定理和复合函数求导得到 $\theta \in (0,1)$ ，使

$$
\begin{array}{r l} | \boldsymbol {f} (b) - \boldsymbol {f} (a) | ^ {2} & = \varphi (1) - \varphi (0) \\ & = \langle J \boldsymbol {f} (\boldsymbol {a} + \theta (\boldsymbol {b} - \boldsymbol {a})) (\boldsymbol {b} - \boldsymbol {a}), \boldsymbol {f} (\boldsymbol {b}) - \boldsymbol {f} (\boldsymbol {a}) \rangle \end{array}
$$

再由 Cauchy-Schwarz 不等式有

$$
\left| f (b) - f (a) \right| ^ {2} \leqslant \left\| J f (a + \theta (b - a)) \right\| \cdot | b - a | \cdot | f (b) - f (a) |.
$$

所以得到

$$
| f (b) - f (a) | \leqslant \| J f (a + \theta (b - a)) \| \cdot | b - a |.
$$

例题 19.4.3 设 f 是凸区域 $D \subset R^{n}$ 上的可微映射，并且全导数 $Jf(x)$ 处处为 0（取值为零向量的零变换），则 f 是 D 上的常值映射.

证 取定点 $x_0 \in D$ ，任取另一点 $x \in D$ ，则由拟微分平均值定理有

$$
\left| \boldsymbol {f} (\boldsymbol {x}) - \boldsymbol {f} \left(\boldsymbol {x} _ {0}\right) \right| \leqslant \| \boldsymbol {0} \| \cdot | \boldsymbol {x} - \boldsymbol {x} _ {0} | = 0.
$$

由于 $f(x)=f(x_{0}),\forall x\in D,$ 所以 f 是常值映射.

注 可以把凸区域 D 的结论推广到一般的开区域 D. 证明留给读者.

在第二十一章, 我们还将介绍一些向量值函数中值定理的几何形式.

### 19.4.2 练习题

1. 设 $f: D \subset R^{n} \to R^{m}, x_{0} \in D,$ 且存在矩阵 A, 使得在点 $x_{0}$ 的邻域上有

$$
\boldsymbol {f} (\boldsymbol {x}) = \boldsymbol {f} (\boldsymbol {x} _ {0}) + \boldsymbol {A} (\boldsymbol {x} - \boldsymbol {x} _ {0}) + o (\boldsymbol {x} - \boldsymbol {x} _ {0}),
$$

其中 $o(\pmb{x} - \pmb{x}_0)$ 表示当 $|\pmb{x} - \pmb{x}_0| \to 0$ 时，模为高阶无穷小量的向量。证明： $\pmb{f}$ 在点 $\pmb{x}_0$ 处可微，且 $J\pmb{f}(\pmb{x}_0) = \pmb{A}$ 。

2. 设 $f: R \rightarrow R^{3}$ 是可微的向量值函数, 满足条件 $|f(t)| = 1, \forall t \in \mathbb{R}$ . 证明 $f'(t) \cdot f(t) = 0$ , 并对这个结果进行几何上的解释.

3. 设 $u(x,y), v(x,y)$ 在区域 $\mathbf{R}^2$ 上有一阶连续偏导数，且存在 $C > 0$ ，对任意两点 $(x_i, y_i) \in \mathbf{R}^2 (i = 1,2)$ 均成立

$$
(u _ {1} - u _ {2}) ^ {2} + (v _ {1} - v _ {2}) ^ {2} \geqslant C [ (x _ {1} - x _ {2}) ^ {2} + (y _ {1} - y _ {2}) ^ {2} ],
$$

其中 $u_{i} = u(x_{i},y_{i})$ ， $v_{i} = v(x_{i},y_{i})(i = 1,2)$ ，则 $\forall (x,y)\in \mathbf{R}^2$ 有

$$
\frac {\partial (u , v)}{\partial (x , y)} \neq 0.
$$

## §19.5 对于教学的建议

### 19.5.1 学习要点

1. 在多元函数中, 让一个自变量变化, 其他自变量固定, 就成为一元函数. 这个一元函数的导数就是原来函数的偏导数. 偏导数反映了函数在某个坐标轴方向的变化率, 并不完全反映函数在一点附近的全面变化. 反映函数在一点附近的全面变化的量是全微分, 它是函数在一点附近的线性逼近和线性主部. 有些教科书是先引入全微分的概念, 如 [24]. 这就是沿着线性逼近或线性主部的线索来展开. 我们先讨论偏导数, 从计算上讲更具体些.

2. 在一元函数中, 可导等价于可微 (参见上册 177 页 6.3.1 小节), 很多学生对两者不予区分. 故这一章在概念上的重点是微分, 应当要求学生能从可微的定义出发去证明一个函数在一点可微或不可微, 同时能清楚多元函数连续与偏导数存在、偏导数连续与可微之间的关系, 并能举出反例.

3. 复合函数求导的链式法则是计算训练的重点，初学者最容易犯的错误是漏项。批改作业时要注意学生的计算过程。

4. 对习题课的建议 在强调多元函数连续性、可微性的条件时，也要注意另一种倾向，即学生太小心以至不敢用一元函数的有关定理。例如学生们往往不能确定如下结论：

(1) 若 $f_{x}(x_{0}, y_{0})$ 存在, 就能保证一元函数 $f(x, y_{0})$ 在 $x_{0}$ 点连续;

(2) 若 $f_{x}(x,y)$ 在 $(x_0,y_0)$ 的邻域上有界，则 $f(x,y_0)$ 在 $x_0$ 的邻域上连续.

又如, 他们在证明命题 19.1.1 时, 知道要将 $\Delta f$ 写成如下形式:

$$
\Delta f = \left[ f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0}, y _ {0} + \Delta y) \right] + \left[ f (x _ {0}, y _ {0} + \Delta y) - f (x _ {0}, y _ {0}) \right],
$$

但再往下有些学生不敢应用一元函数的微分中值定理，因为他们知道微分中值定理要求函数在闭区间上连续，在开区间上可导。但现在是要证明函数的连续性，怎么可以应用中值定理呢？事实上，他们混淆了一元函数和多元函数的连续性。

有些学生错误地认为偏导数连续是可微的必要条件, 因此应该告诉他们一个反例, 例如 19.2.4 小节的练习题 2 就是一个反例. 19.2.3 小节的思考题 4 表明两个偏导数中只需要一个连续, 便可证出可微性. 因此如果 $f(x,y)$ 在点 $(x_0,y_0)$ 存在偏导数 $f_x(x,y)$ 和 $f_y(x,y)$ , 且 $f(x,y)$ 在点 $(x_0,y_0)$ 不可微, 则任何一个偏导数 $f_x(x,y)$ 和 $f_y(x,y)$ 不可能在点 $(x_0,y_0)$ 连续.

对于多元函数连续、偏导数存在、偏导数连续和可微之间的关系, 最好组织学生自己进行小结.

要引导学生选择简捷的方法进行计算, 以达到快速准确解题的目的. 下面是一个很好的例子.

例题19.5.1 设 $u = xyz\mathrm{e}^{x + y + z}$ , 求 $\frac{\partial^k u}{\partial x^p\partial y^q\partial z^r}$ , 其中 $p + q + r = k$ .

解 由于

$$
\frac {\partial^ {k} u}{\partial x ^ {p} \partial y ^ {q} \partial z ^ {r}} = \frac {\partial^ {p}}{\partial x ^ {p}} (x \mathrm{e} ^ {x}) \frac {\partial^ {q}}{\partial y ^ {q}} (y \mathrm{e} ^ {y}) \frac {\partial^ {r}}{\partial z ^ {r}} (z \mathrm{e} ^ {z}),
$$

而

$$
\frac {\partial^ {p}}{\partial x ^ {p}} (x \mathrm{e} ^ {x}) = (p + x) \mathrm{e} ^ {x},
$$

从而

$$
\frac {\partial^ {k} u}{\partial x ^ {p} \partial y ^ {q} \partial z ^ {r}} = (p + x) (q + y) (r + z) \mathrm{e} ^ {x + y + z}.
$$

建议将例题 19.2.3 或类似的题布置为学生的课外题, 该类题可引导学生自己去推导出必要条件, 而不是在某种预先给定的条件下去证明结论.

### 19.5.2 参考题

1. 设 $u(x,t) = \frac{1}{2\sqrt{\pi t}}\mathrm{e}^{-\frac{x^2}{4t}}$ ，证明：当 $t > 0$ 时 $\left|\frac{\partial^2u}{\partial x^2}\right| \leqslant Ct^{-\frac{3}{2}}\mathrm{e}^{-\lambda \frac{x^2}{t}}$ ，其中 $C$ 为正常数， $\lambda$ 为小于 $\frac{1}{4}$ 的正常数。

2. 设 $\Gamma(x, y, z; \xi, \eta, \zeta) = -\frac{1}{4\pi} \left[ (x - \xi)^2 + (y - \eta)^2 + (z - \zeta)^2 \right]^{-\frac{1}{2}}$ ，证明：

$$
\left| \frac {\partial \Gamma}{\partial z} \right| \leqslant \frac {1}{4 \pi} \left[ (x - \xi) ^ {2} + (y - \eta) ^ {2} + (z - \zeta) ^ {2} \right] ^ {- 1},
$$

$$
\left| \frac {\partial^ {2} \Gamma}{\partial y \partial z} \right| \leqslant \frac {3}{4 \pi} \left[ (x - \xi) ^ {2} + (y - \eta) ^ {2} + (z - \zeta) ^ {2} \right] ^ {- \frac {3}{2}},
$$

$$
\left| \frac {\partial^ {3} \Gamma}{\partial x \partial y \partial z} \right| \leqslant C \left[ (x - \xi) ^ {2} + (y - \eta) ^ {2} + (z - \zeta) ^ {2} \right] ^ {- 2},
$$

其中 C 为正常数.

3. 设 $u(x,y)$ 有二阶偏导数, 无零点. 证明: u 满足方程

$$
u \frac {\partial^ {2} u}{\partial x \partial y} = \frac {\partial u}{\partial x} \cdot \frac {\partial u}{\partial y}
$$

的充分必要条件是 $u(x,y)=f(x)g(y)$ .

4. 证明: 关于 n 次齐次函数的命题 19.3.1—19.3.4.

5. 设 $u = \left| \begin{array}{ccc} 1 & 1 & \cdots & 1 \\ x_{1} & x_{2} & \cdots & x_{n} \\ x_{1}^{2} & x_{2}^{2} & \cdots & x_{n}^{2} \\ \vdots & \vdots & & \vdots \\ x_{1}^{n-1} & x_{2}^{n-1} & \cdots & x_{n}^{n-1} \end{array} \right|$ ，证明：
(1) $\sum_{i=1}^{n}\frac{\partial u}{\partial x_{i}}=0;$ (2) $\sum_{i=1}^{n}x_{i}\frac{\partial u}{\partial x_{i}}=\frac{n(n-1)}{2}u.$ 

6. 设 $A = (a_{ij})_{n \times n}$ 是正交矩阵, $f(y)$ 是定义在 $\mathbf{R}^n$ 上的二次可微函数, $F(x) = f(Ax)$ . 证明: 当 $y = Ax$ 时有

$$
\sum_ {i = 1} ^ {n} \left(\frac {\partial f}{\partial y _ {i}}\right) ^ {2} = \sum_ {i = 1} ^ {n} \left(\frac {\partial F}{\partial x _ {i}}\right) ^ {2}; \tag {1}
$$

$$
\sum_ {i = 1} ^ {n} \frac {\partial^ {2} f}{\partial y _ {i} ^ {2}} = \sum_ {i = 1} ^ {n} \frac {\partial^ {2} F}{\partial x _ {i} ^ {2}}. \tag {2}
$$

7. 求下列变换的 Jacobi 行列式:

(1) $x_{1} = r\cos \theta ,x_{2} = r\sin \theta$ ，求 $\frac{\partial(x_1,x_2)}{\partial(r,\theta)}$ 

(2) $x_{1} = r\cos \theta_{1}, x_{2} = r\sin \theta_{1}\cos \theta_{2}, x_{3} = r\sin \theta_{1}\sin \theta_{2}$ , 求 $\frac{\partial(x_1, x_2, x_3)}{\partial(r, \theta_1, \theta_2)}$ 

$$
\left\{ \begin{array}{l} x _ {1} = r \cos \theta_ {1}, \\ x _ {2} = r \sin \theta_ {1} \cos \theta_ {2}, \\ x _ {3} = r \sin \theta_ {1} \sin \theta_ {2} \cos \theta_ {3}, \\ \dots \dots \\ x _ {m - 1} = r \sin \theta_ {1} \sin \theta_ {2} \sin \theta_ {3} \dots \sin \theta_ {m - 2} \cos \theta_ {m - 1}, \\ x _ {m} = r \sin \theta_ {1} \sin \theta_ {2} \sin \theta_ {3} \dots \sin \theta_ {m - 2} \sin \theta_ {m - 1}, \end{array} \right.\tag{3}
$$

这里 $r \geqslant 0, 0 \leqslant \theta_{1}, \theta_{2}, \cdots, \theta_{m-2} \leqslant \pi, 0 \leqslant \theta_{m-1} \leqslant 2\pi,$ 试用数学归纳法求

$$
\frac {\partial (x _ {1} , x _ {2} , \cdots , x _ {m})}{\partial (r , \theta_ {1} , \theta_ {2} , \cdots , \theta_ {m - 1})}.
$$

8. 函数值计算的相对误差估计:

(1) 利用可微函数定义与近似等式 $\Delta f(x; h) \approx \mathrm{d}f(x)h$ ，证明：设 $f(x) = f_{1} \cdot f_{2} \cdot \cdots \cdot f_{n}$ 是 n 个不为零的因子的乘积，若 $\delta_{i}$ 是第 i 个因子的相对误差，则它们乘积的相对误差为 $\delta = \delta(f(x); h) \approx \sum_{i=1}^{n} \delta_{i}$ ;

(2) 利用等式 $\mathrm{d}\ln f(x)=\frac{1}{f(x)}\mathrm{d}f(x)$ ，再次得到上题结果并证明：一般的分式 $\frac{f_{1}f_{2}\cdots f_{n}}{g_{1}g_{2}\cdots g_{n}}(x_{1},x_{2},\cdots,x_{m})$ 的相对误差是函数 $f_{1},f_{2},\cdots,f_{n},g_{1},g_{2},\cdots,g_{n}$ 的值的相对误差的和.

9. 设 $x_{1}(t)$ , $x_{2}(t)$ , $\cdots$ , $x_{n}(t)$ 是 R 上的可微函数, 满足:

$$
\left\{ \begin{array}{l} x _ {1} ^ {\prime} (t) = a _ {1 1} x _ {1} (t) + a _ {1 2} x _ {2} (t) + \dots + a _ {1 n} x _ {n} (t), \\ x _ {2} ^ {\prime} (t) = a _ {2 1} x _ {1} (t) + a _ {2 2} x _ {2} (t) + \dots + a _ {2 n} x _ {n} (t), \\ \dots \dots \\ x _ {n} ^ {\prime} (t) = a _ {n 1} x _ {1} (t) + a _ {n 2} x _ {2} (t) + \dots + a _ {n n} x _ {n} (t), \end{array} \right.
$$

其中 $a_{ij} \geqslant 0, i, j = 1, 2, \cdots, n.$ 假如对任何 i，当 $t \to +\infty$ 时， $x_{i}(t) \to 0.$ 问函数 $x_{1}(t), x_{2}(t), \cdots, x_{n}(t)$ 必定是线性相关的吗（这里函数线性相关的定义见上一章的第一组参考题 4）？

10. 设 f 为 $R^{n}$ 上的 $C^{2}$ 映射. $Jf(x)$ 为 Jacobi 矩阵, 它的元素为 $\frac{\partial f_{j}}{\partial x_{i}}(x), i, j = 1, 2, \cdots, n$ . 在 Jacobi 行列式 $\det(Jf(x))$ 中对应的代数余子式为 $A_{ij}(x), i, j = 1, 2, \cdots, n$ . 证明如下的 Hadamard 恒等式:

$$
\sum_ {i = 1} ^ {n} \frac {\partial A _ {i j}}{\partial x _ {i}} (\boldsymbol {x}) = 0, \quad j = 1, 2, \dots , n.
$$