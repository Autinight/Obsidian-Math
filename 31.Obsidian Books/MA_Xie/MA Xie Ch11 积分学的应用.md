

## 第十一章 积分学的应用

本章共有5节. §11.1是积分学在几何计算中的应用. §11.2介绍与积分有关的不等式. §11.3是积分的估计和近似计算. §11.4是积分学在分析中的其他应用, 其中包括数列极限计算、Wallis公式、Stirling公式、Taylor公式的积分型余项和 $\pi$ 的无理性证明等. 最后一节为学习要点和两组参考题.

## §11.1 积分学在几何计算中的应用

## 11.1.1 基本公式与方法

对于平面图形的面积计算, 除了可以用几个曲边梯形面积的代数和来计算之外, 还可以用下面两个公式, 它们在许多问题中比直角坐标下的公式要方便.

1. 设没有自交点的平面封闭曲线的参数方程为 $x = x(t), y = y(t), t \in [\alpha, \beta]$ ，当 $t$ 从 $\alpha$ 增加到 $\beta$ 时，点 $(x(t), y(t))$ 以逆时针方向绕闭曲线一周，则该闭曲线所围面积为

$$
S = \frac {1}{2} \int_ {\alpha} ^ {\beta} (x \mathrm{d} y - y \mathrm{d} x).\tag{11.1}
$$

这个公式实际上是下册的 §24.3 中关于第二型曲线积分的 Green (格林) 公式的特例. 对于比较简单的情况将在下面给出证明.

2. 在极坐标中由射线 $\theta = \theta_{1}, \theta = \theta_{2}$ (其中 $\theta_{1} < \theta_{2}$ ) 与连续曲线 $\rho = \rho(\theta)$ 围成的扇形面积为

$$
S = \frac {1}{2} \int_ {\theta_ {1}} ^ {\theta_ {2}} \rho^ {2} (\theta) \mathrm{d} \theta .\tag{11.2}
$$

在一定的条件下, 利用一元函数定积分还可以计算某些三维形体的体积和侧面积. 这些公式以及求曲线弧长的公式在一般教科书中都有, 这里不再列出.

需要学习的是导出这些公式中所用的方法.

关于体积与侧面积公式的严格讨论, 要以多元微积分为基础才能进行. 在现阶段, 它们的推导是基于微元法. 这种方法虽然并不完全严格, 但被广泛用于计算分布在区间 $[a, b]$ 上的几何量以及物理量, 其中实际上包含了两个内容:

(1) 以直代曲法 计算分布在充分小的区间 $[x, x + \Delta x] \subseteq [a, b]$ 上的部分几何量时, 对那些当 $\Delta x \to 0$ 时, 其长度趋于 0 的曲线段, 可以用连接曲线端点的直线段来代替进行计算. 如果由此得到的量可表示为 $f(\xi) \Delta x$ , 其中 $\xi \in [x, x + \Delta x]$ , 则所求的几何量为 $\int_{a}^{b} f(x) \mathrm{d}x$ .

(2) 舍弃高阶无穷小量法 如果存在 $M > 0, p > 1$ , 使在任一充分小的区间 $[x, x + \Delta x] \subseteq [a, b]$ 上, 成立

$$
| g (\eta) \Delta x - f (\xi) \Delta x | \leqslant M (\Delta x) ^ {p},
$$

其中 $\eta, \xi \in [x, x + \Delta x]$ , $f(\xi) \Delta x$ 为用以直代曲法得出的部分量, 则所求的几何量也可写成积分 $\int_{a}^{b} g$ . 在对具体问题应用舍弃高阶无穷小量法时, 我们往往取 $p = 2$ .

## 11.1.2 例题

平面图形的面积计算公式 (11.1) 往往很有用. 由于目前的各种教科书在定积分应用部分不一定都有介绍, 因此我们在这里仿照 [42] 给出简单情况下的一个证明, 其中假定运算所需要的连续和可微等条件均满足.

如图11.1所示的一条封闭曲线由参数方程 $x = x(t), y = y(t) (\alpha \leqslant t \leqslant \beta)$ 所描述。当 $t$ 从 $\alpha$ 到 $\beta$ 时，点 $(x(t), y(t))$ 从 $A$ 点出发按逆时针方向经过 $B$ 点绕曲线一周回到 $A$ 点。设 $A, B$ 两点的横坐标分别是函数 $x(t)$ 在区间 $[\alpha, \beta]$ 上的最小值和最大值。 $A$ 点对应的参数值是 $\alpha$ 和 $\beta, B$ 点对应的参数值为 $\gamma$ 。设从 $A$ 点到 $B$ 点的两段曲线在直角坐标下的方程为 $f_1(x)$ 和 $f_2(x)$ ， $a \leqslant x \leqslant b$ ，且如图所示在区间 $(a, b)$ 上有 $f_2(x) > f_1(x)$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/66334ab44f396e57946442ef2063556f3717466d58a73e40f9b2ae2a10c26738.jpg)



图11.1


这样就可以计算封闭曲线所包含的图形面积如下:

$$
\begin{array}{r l} S & = \int_ {a} ^ {b} [ f _ {2} (x) - f _ {1} (x) ] \mathrm{d} x \\ & = \int_ {\beta} ^ {\gamma} y (t) \mathrm{d} x (t) - \int_ {\alpha} ^ {\gamma} y (t) \mathrm{d} x (t) = - \int_ {\alpha} ^ {\beta} y (t) \mathrm{d} x (t), \end{array}
$$

由分部积分又可得到

$$
S = - y (t) x (t) \Big | _ {\alpha} ^ {\beta} + \int_ {\alpha} ^ {\beta} x (t) \mathrm{d} y (t) = \int_ {\alpha} ^ {\beta} x (t) \mathrm{d} y (t).
$$

取两者的平均值就得到公式 (11.1).

注1 从证明中可见实际上得到了计算面积 $S$ 的三个公式. 但是将前两个取平均值后得到的公式 (11.1) 在计算中一般较为方便, 这从下面举例就可明白. 此外, 如前所说, 该公式对于一般的没有自交点的参数曲线都是成立的.

注 2 由于极坐标下的 $\theta$ 就可看成为参数, 因此完全可以从公式 (11.1) 推导出极坐标下的扇形面积计算公式 (11.2) (留作为 11.1.4 小节的练习题 2).

例题 11.1.1 求由方程 $x^{2} + xy + y^{2} = 1$ 所确定的图形面积.

这就是求 174 页上图 6.5 所示椭圆的面积. 容易想到的一种思路是: 先用解析几何中的转轴方法消去交叉项, 由此确定椭圆的长、短半轴, 最后用简单的定积分计算即可求出椭圆面积. 以下是不用转轴的几种积分解法.

解 1 从方程解出

$$
y _ {1, 2} (x) = - \frac {x}{2} \pm \sqrt {1 - \frac {3}{4} x ^ {2}}, \quad - \frac {2}{\sqrt {3}} \leqslant x \leqslant \frac {2}{\sqrt {3}},
$$

然后计算定积分

$$
\begin{array}{r l} S & = \int_ {- 2 / \sqrt {3}} ^ {2 / \sqrt {3}} [ y _ {1} (x) - y _ {2} (x) ] \mathrm{d} x = 2 \int_ {- 2 / \sqrt {3}} ^ {2 / \sqrt {3}} \sqrt {1 - \frac {3}{4} x ^ {2}} \mathrm{d} x \\ & = \frac {4}{\sqrt {3}} \int_ {- \pi / 2} ^ {\pi / 2} \cos^ {2} \theta \mathrm{d} \theta = \frac {2 \pi}{\sqrt {3}}. \end{array}
$$

解 2 用极坐标, 以 $x = r \cos \theta, y = r \sin \theta$ 代入方程, 得到

$$
r ^ {2} = \frac {1}{1 + \sin \theta \cos \theta}.
$$

用公式 (11.2) 计算定积分:

$$
S = \frac {1}{2} \int_ {0} ^ {2 \pi} r ^ {2} \mathrm{d} \theta = \frac {1}{2} \int_ {0} ^ {2 \pi} \frac {\mathrm{d} \theta}{1 + \frac {1}{2} \sin 2 \theta} = \int_ {0} ^ {2 \pi} \frac {\mathrm{d} \varphi}{2 + \sin \varphi} = \frac {2 \pi}{\sqrt {3}}.
$$

注1 一个更简单的方法是: 从表达式 $r^{-2} = 1 + \frac{1}{2}\sin 2\theta$ 出发, 求出 $r$ 的最大值和最小值, 即椭圆的长半轴和短半轴, 然后利用椭圆面积公式就可计算出 $S$ .

解3 先将方程左边配方为

$$
x ^ {2} + x y + y ^ {2} = \frac {3}{4} x ^ {2} + \left(y + \frac {x}{2}\right) ^ {2} = 1,
$$

然后引入参数方程

$$
x = \frac {2}{\sqrt {3}} \cos t, y = \sin t - \frac {1}{\sqrt {3}} \cos t, 0 \leqslant t \leqslant 2 \pi .
$$

由于

$$
\begin{array}{l} {x (t)   y ^ {\prime} (t) - y (t)   x ^ {\prime} (t)} \\ {= \frac {2}{\sqrt {3}} \cos t \left(\cos t + \frac {1}{\sqrt {3}} \sin t\right) - \left(\sin t - \frac {1}{\sqrt {3}} \cos t\right) \left(- \frac {2}{\sqrt {3}} \sin t\right)} \\ {= \frac {2}{\sqrt {3}},} \end{array}
$$

因此最后的定积分计算极其简单:

$$
S = \frac {1}{2} \int_ {0} ^ {2 \pi} (x \mathrm{d} y - y \mathrm{d} x) = \frac {1}{2} \int_ {0} ^ {2 \pi} \frac {2}{\sqrt {3}} \mathrm{d} t = \frac {2 \pi}{\sqrt {3}}.
$$

注2 在[59]第二册的习题2406的讲解中,列举了求椭圆

$$
A x ^ {2} + 2 B x y + C y ^ {2} = 1 (A > 0, \Delta = A C - B ^ {2} > 0)
$$

所围面积的 10 种解法, 其中解 8 和解 9 是多元微积分知识的应用, 解 10 则是代数方法. 此外, 还对于这些解法能否推广做了一点评论.

例题 11.1.2 求由 $y^{2}-2xy+x^{3}=0$ 所确定的封闭曲线所包围的图形面积.

分析 为了知道图形的形状, 需要找出 y 随 x 变化的规律. 为此需要引入参数. 令 y = tx 是常用的方法. 这样就可以得到参数方程:

$$
x = 2 t - t ^ {2}, y = 2 t ^ {2} - t ^ {3}.
$$

首先分析 $x = x(t)$ 和 $y = y(t)$ 的变化情况, 然后就不难合成 $xOy$ 坐标平面上的曲线. 利用这些分析就可以画出题设的曲线图形如图11.2所示. (参看例题8.6.1中对于类似问题的分析.) 当变量 $t$ 从0到2时点 $(x(t), y(t))$ 从原点出发又回到原点, 恰好按照逆时针方向描出图中的一条封闭曲线.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/950c401e9a62911891459b9e8099081e497cc0b8f9443f2bd9c7ab7f1e89d337.jpg)



图11.2


解 1 利用直角坐标下的公式. 由于不难从方程直接解出

$$
y _ {1, 2} (x) = x (1 \pm \sqrt {1 - x}), 0 \leqslant x \leqslant 1,
$$

因此就有

$$
\begin{array}{r l} S & = \int_ {0} ^ {1} (x + x \sqrt {1 - x}) \mathrm{d} x - \int_ {0} ^ {1} (x - x \sqrt {1 - x}) \mathrm{d} x = 2 \int_ {0} ^ {1} x \sqrt {1 - x} \mathrm{d} x \\ & = 2 \int_ {0} ^ {1} (1 - t) \sqrt {t} \mathrm{d} t = 2 \left(\frac {2}{3} t ^ {3 / 2} - \frac {2}{5} t ^ {5 / 2}\right) \Big | _ {0} ^ {1} = \frac {8}{1 5}. \end{array}
$$

解 2 用公式 (11.1):

$$
\begin{array}{r l} S & = \frac {1}{2} \int_ {0} ^ {2} (x \mathrm{d} y - y \mathrm{d} x) = \frac {1}{2} \int_ {0} ^ {2} [ (2 t - t ^ {2}) \mathrm{d} (2 t ^ {2} - t ^ {3}) - (2 t ^ {2} - t ^ {3}) \mathrm{d} (2 t - t ^ {2}) ] \\ & = \frac {1}{2} \int_ {0} ^ {2} (4 t ^ {2} - 4 t ^ {3} + t ^ {4}) \mathrm{d} t = \frac {8}{1 5}. \end{array}
$$

例题11.1.3 设曲线方程为 $y = \int_0^x\sqrt{\sin t}\mathrm{d}t,0\leqslant x\leqslant \pi ,$ 求曲线的长度.

解 记方程为 $y = f(x)$ ，由弧长公式计算定积分：

$$
\begin{array}{r l} & {l = \int_ {0} ^ {\pi} \sqrt {1 + f ^ {\prime 2} (x)}   \mathrm{d} x = \int_ {0} ^ {\pi} \sqrt {1 + \sin x}   \mathrm{d} x} \\ & {\quad = \int_ {0} ^ {\pi} \left(\sin \frac {x}{2} + \cos \frac {x}{2}\right)   \mathrm{d} x    \left(\text {作代换} t = \frac {x}{2}\right)} \\ & {\quad = 2 \left(\int_ {0} ^ {\pi / 2} \sin t   \mathrm{d} t + \int_ {0} ^ {\pi / 2} \cos t   \mathrm{d} t\right) = 4 \int_ {0} ^ {\pi / 2} \sin t   \mathrm{d} t = 4.} \end{array}
$$

例题 11.1.4 求双曲抛物面 $z = x^{2} - y^{2}$ 与平面 x = 1, z = 0 所围成的立体体积.

分析 如图 11.3 所示, 该立体不是旋转体. 我们将用两种方法求解. 先计算平行于坐标平面 yOz 的平面或平行于坐标平面 xOy 的平面截立体所得的面积 A(x) 或 B(z), 然后计算定积分

$$
\int_ {0} ^ {1} A (x)   \mathrm{d} x \quad \text {或} \quad \int_ {0} ^ {1} B (z)   \mathrm{d} z
$$

得到所论立体的体积

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/6b7e1512945780594d925ebfccb92c79d865a42964af78b92e68f24f5bb18a34.jpg)



图11.3


解 1 x 的变化范围是 $0 \leqslant x \leqslant 1$ . 对每个固定的 $x \in [0,1]$ ，计算截面积 $A(x)$ 时， $z = x^{2} - y^{2}$ 成为抛物线的方程，其中 $y \in [-x, x]$ . 从而得到

$$
\begin{array}{r l} A (x) & = 2 \int_ {0} ^ {x} (x ^ {2} - y ^ {2}) \mathrm{d} y \\ & = 2 \left(x ^ {3} - \frac {1}{3} x ^ {3}\right) = \frac {4}{3} x ^ {3}. \end{array}
$$

因此，所求的体积为

$$
V = \frac {4}{3} \int_ {0} ^ {1} x ^ {3} \mathrm{d} x = \frac {1}{3}.
$$

解 2 z 的变化范围也是 $0 \leqslant z \leqslant 1$ ，这可由 x = 1 时 $z = 1 - y^{2}$ ，而 $|y| \leqslant 1$ 得到。计算 $B(z)$ 时，也应把 z 看作在 [0,1] 上取值的固定数，于是 $z = x^{2} - y^{2}$ 成为双曲线方程 $y^{2} = x^{2} - z, x \in [\sqrt{z}, 1]$ 或 $y = \pm \sqrt{x^{2} - z}, x \in [\sqrt{z}, 1]$ 。这样， $B(z)$ 便是平面 Z = z 上的上述双曲线与 x = 1 围成的弓形面积，因此利用图形关于 x 轴的对称性，可以计算得到

$$
\begin{array}{l} B (z) = 2 \int_ {\sqrt {z}} ^ {1} \sqrt {x ^ {2} - z} \mathrm{d} x = \left(x \sqrt {x ^ {2} - z} - z \ln \left(x + \sqrt {x ^ {2} - z}\right)\right) \Bigg | _ {\sqrt {z}} ^ {1} \\ = \sqrt {1 - z} - z \ln \left(1 + \sqrt {1 - z}\right) + z \ln \sqrt {z}. \end{array}
$$

因此所求的体积为

$$
\begin{array}{r l} & V = \int_ {0} ^ {1} B (z) \mathrm{d} z \\ & = \int_ {0} ^ {1} \sqrt {1 - z} \mathrm{d} z - \int_ {0} ^ {1} z \ln \left(1 + \sqrt {1 - z}\right) \mathrm{d} z + \int_ {0} ^ {1} z \ln \sqrt {z} \mathrm{d} z. \end{array}
$$

显然这三个积分的计算要比解 1 中的计算复杂得多 (细节从略), 最后结果为

$$
V = \frac {2}{3} - \frac {5}{2 4} - \frac {1}{8} = \frac {1}{3}.
$$

注 由此可见, 在利用平行的截面面积求体积的问题中, 选择合适的截面是十分重要的. 请读者考虑, 本题如果通过用平行于坐标平面 $xOz$ 的平面去截所论立体, 先计算与 $y$ 有关的截面积后再积分的方法求体积, 计算过程是否简便?

## 11.1.3 Guldin定理

质心是一个物理量. Guldin (古尔丁) 的第一和第二定理将求旋转体的体积和侧面积转化为求质心, 体现了数学问题与物理问题之间的内在联系.

命题 11.1.1 (质心公式) 设密度均匀的平面图形分布在直线 X = a, X = b 和 Y = c, Y = d 之间，且对任一 $x \in [a, b]$ 和 $y \in [c, d]$ ，直线 X = x 和 Y = y 截图形的线段长度为 $s(x)$ 和 $t(y)$ ，则图形的质心的横坐标与纵坐标分别为

$$
x _ {c} = \frac {\int_ {a} ^ {b} x s (x) \mathrm{d} x}{\int_ {a} ^ {b} s (x) \mathrm{d} x}, \quad y _ {c} = \frac {\int_ {c} ^ {d} y t (y) \mathrm{d} y}{\int_ {c} ^ {d} t (y) \mathrm{d} y};\tag{11.3}
$$

而密度均匀的分段光滑曲线 $y = f(x) (a \leqslant x \leqslant b)$ 的质心的横坐标与纵坐标分别为

$$
x _ {c} = \frac {\int_ {a} ^ {b} x \sqrt {1 + f ^ {\prime 2} (x)} \mathrm{d} x}{\int_ {a} ^ {b} \sqrt {1 + f ^ {\prime 2} (x)} \mathrm{d} x}, \quad y _ {c} = \frac {\int_ {a} ^ {b} f (x) \sqrt {1 + f ^ {\prime 2} (x)} \mathrm{d} x}{\int_ {a} ^ {b} \sqrt {1 + f ^ {\prime 2} (x)} \mathrm{d} x}.\tag{11.4}
$$

由上面的质心公式, 可以得到下面两条定理 (证明见 [59] 第二册 §4.9).

命题 11.1.2 (Guldin 第一定理) 设平面曲线的质心坐标为 $(x_{c}, y_{c})$ ，且曲线位于右半平面内，则曲线绕 y 轴旋转一周所产生的旋转曲面的面积 $S_{y}$ 等于质心绕 y 轴一周所经过的路程 $2\pi x_{c}$ 乘以曲线的弧长 l，即 $S_{y} = 2\pi x_{c} l$ .

命题 11.1.3 (Guldin 第二定理) 设平面图形的质心坐标为 $(x_{c}, y_{c})$ ，且图形位于右半平面内，则图形绕 y 轴旋转一周所产生的旋转立体的体积 $V_{y}$ 等于质心绕 y 轴一周所经过的路程 $2\pi x_{c}$ 乘以图形的面积 S，即 $V_{y} = 2\pi x_{c}S$ .

例题11.1.5 设曲线 $y = f(x) (a \leqslant x \leqslant b)$ 分段光滑. 求曲边梯形

$$
\{(x, y) \mid 0 \leqslant a \leqslant x \leqslant b, 0 \leqslant y \leqslant f (x) \}
$$

绕 y 轴旋转一周得到的旋转体体积.

解1 由微元法, 对曲边梯形在充分小的区间 $[x, x + \Delta x] \subseteq [a, b]$ 上的部分, 取 $\xi \in [x, x + \Delta x]$ . 我们用过点 $(\xi, f(\xi))$ 而平行于 $x$ 轴的直线段代替 $y = f(x)$ 的对应曲线段, 然后将所得到的矩形绕 $y$ 轴旋转一周, 这样得到的旋转体体积为

$$
\Delta V = \pi f (\xi) [ (x + \Delta x) ^ {2} - x ^ {2} ] = \pi f (\xi) [ 2 x \Delta x - (\Delta x) ^ {2} ],
$$

舍弃高阶无穷小量 $\pi f(\xi)(\Delta x)^{2}$ 后在 $[a,b]$ 上积分, 就得到旋转体体积

$$
V = 2 \pi \int_ {a} ^ {b} x f (x) \mathrm{d} x.
$$

解2 由Guldin第二定理, 曲边梯形 $\{(x,y) \mid 0 \leqslant a \leqslant x \leqslant b, 0 \leqslant y \leqslant f(x)\}$ 绕 $y$ 轴旋转一周得到的旋转体体积等于曲边梯形的质心 $(x_c, y_c)$ 绕 $y$ 轴一周所经过的路程 $2\pi x_c$ 乘以图形的面积 $S$ , 即有

$$
V = 2 \pi x _ {c} S.\tag{11.5}
$$

将质心公式 (11.3) 中关于 $x_{c}$ 的公式与曲边梯形的面积公式 $S = \int_{a}^{b} f$ 代入 (11.5), 便得到

$$
V = 2 \pi \cdot \frac {\int_ {a} ^ {b} x f (x) \mathrm{d} x}{\int_ {a} ^ {b} f (x) \mathrm{d} x} \cdot \int_ {a} ^ {b} f (x) \mathrm{d} x = 2 \pi \int_ {a} ^ {b} x f (x) \mathrm{d} x.
$$

例题 11.1.6 求上题的旋转体中由曲线 $y = f(x) (a \leqslant x \leqslant b)$ 生成的侧面积.

解1 由以曲代直法, 曲线 $y = f(x)$ 在充分小的区间 $[x, x + \Delta x] \subseteq [a, b]$ 上的曲线段绕 $y$ 轴旋转一周得到的面积可用连接点 $(x, f(x))$ 与点 $(x + \Delta x, f(x + \Delta x))$ 的直线段绕 $y$ 轴旋转一周得到的圆台的侧面积来代替, 即

$$
\begin{array}{r l} & {\Delta S _ {\text {侧}} = 2 \pi \cdot \frac {1}{2} [ x + (x + \Delta x) ] \sqrt {(\Delta x) ^ {2} + (\Delta f (x)) ^ {2}}} \\ & {\qquad = 2 \pi \cdot \frac {1}{2} [ x + (x + \Delta x) ] \sqrt {1 + \left(\frac {\Delta f (x)}{\Delta x}\right) ^ {2}} \Delta x.} \end{array}
$$

舍弃高阶无穷小量 $\pi \sqrt{1 + \left(\frac{\Delta f(x)}{\Delta x}\right)^2} (\Delta x)^2$ 后在 $[a,b]$ 上积分，得旋转体侧面积

$$
S _ {\text {侧}} = 2 \pi \int_ {a} ^ {b} x \sqrt {1 + f ^ {\prime 2} (x)}   \mathrm{d} x.
$$

解 2 由 Guldin 第一定理, 所求的侧面积等于曲线段 $y = f(x) (a \leqslant x \leqslant b)$ 的质心 $(x_{c}, y_{c})$ 绕 y 轴一周所经过的路程 $2\pi x_{c}$ 乘以曲线的弧长 l, 即有

$$
S _ {\mathrm{侧}} = 2 \pi x _ {c} l.\tag{11.6}
$$

将弧长公式 $l = \int_{a}^{b}\sqrt{1 + (f'(x))^2}\mathrm{d}x$ 与质心公式(11.4)中 $x_{c}$ 的公式代入(11.6)，便得到

$$
S _ {\text {侧}} = 2 \pi \int_ {a} ^ {b} x \sqrt {1 + f ^ {\prime 2} (x)}   \mathrm{d} x.
$$

## 11.1.4 练习题

由于在习题集 [27] (及其学习指引 [59]) 和各种教科书中都有许多几何计算题可用, 因此本节只收入少量练习题作为补充.

1. 设椭圆方程为 $Ax^2 + 2Bxy + Cy^2 = 1$ ，其中 $A > 0, \Delta = AC - B^2 > 0$ . 试用例题11.1.1中的第三种方法（即公式(11.1)）证明：由该椭圆所围的面积等于 $\pi / \sqrt{\Delta}$ .

2. 试以公式 (11.1) 为出发点, 推导出极坐标下的扇形面积计算公式 (11.2).

3. 已知三个半径为 $r$ 的圆, 其中每个圆的圆周都通过另外两个圆的圆心, 求三个圆公共部分的面积.

(本题有不用微积分的初等解法.)

4. 周长一定的等腰三角形, 腰与底的比例为多少时, 它绕底边旋转所得的旋转体体积最大?

5. 半轴长为 $a$ 和 $b$ 的一个椭圆在曲线 $y = c\sin (x / a)$ 上进行无滑动的滚动. 问 $a, b, c$ 之间的关系怎样时, 椭圆在曲线上滚动了曲线的一个周期时, 它正好转了一周?

6. 在单位圆周上任意取一段位于第一象限且长度为 $s$ 的弧, 设位于该弧下方、 $x$ 轴上方的曲边梯形的面积为 $A$ , 而位于该弧左侧、 $y$ 轴右侧的曲边梯形的面积为 $B$ . 证明: $A + B$ 只依赖于弧的长度 $s$ , 而与弧的位置无关.

7. 试求由抛物线 $y^{2} = 2x$ 与过其焦点的弦所围的图形面积的最小值.

8. 至少用两种方法计算下列三个圆的公共部分的面积:

$$
x ^ {2} + y ^ {2} \leqslant 4, (x - 2) ^ {2} + y ^ {2} \leqslant 4, x ^ {2} + (y - 2) ^ {2} \leqslant 4.
$$

9. 求椭圆柱 $\frac{x^2}{16} + \frac{y^2}{100} \leqslant 1$ 夹在平面 $z = 0, y = 2z$ 之间部分的体积.

10. 求圆柱面 $x^{2} + y^{2} = a^{2}$ 与 $x^{2} + z^{2} = a^{2}$ 所围立体区域的体积.

(这个立体区域在中国古代数学史上称为牟合方盖, 它是刘徽在研究球体积计算问题中提出来的, 见 [35]. 在这之前, Archimedes 在其著作《方法》的命题 15 中已经给出了这个立体区域的体积计算 (参见 [60] 的 192 页). )

## §11.2 不等式

在 §1.3 和 §8.5 已经接触到了许多不等式. 现在有了积分学的工具, 可以得到的不等式就更多了. 由于这方面的材料较多, 我们将分成几小节来介绍.

## 11.2.1 凸函数不等式

凸函数的基本定义和主要理论见 §8.4 和第八章的部分参考题. 需要指出, 本书中的下凸函数和上凸函数分别与有的文献中的凸函数和凹函数相对应.

在含有积分的凸函数不等式中, 先介绍 Hadamard 不等式.

例题11.2.1 (Hadamard不等式) 设 $f$ 是 $(a,b)$ 上的下凸函数, 则对每一对 $x_{1}, x_{2} \in (a,b), x_{1} < x_{2}$ , 有

$$
f \left(\frac {x _ {1} + x _ {2}}{2}\right) \leqslant \frac {1}{x _ {2} - x _ {1}} \int_ {x _ {1}} ^ {x _ {2}} f (t) \mathrm{d} t \leqslant \frac {f (x _ {1}) + f (x _ {2})}{2}.\tag{11.7}
$$

从图11.4上可以看出Hadamard不等式具有明显的几何意义.由于 $f$ 是 $[a,b]$ 上的下凸函数，曲线段 $y = f(x)$ $(x_{1}\leqslant x\leqslant x_{2})$ 位于曲线过点 $\left(\frac{1}{2} (x_1 + x_2),f\left(\frac{1}{2} (x_1 + x_2)\right)\right)$ 的切线段上方①，并位于连接点 $(x_{1},f(x_{1}))$ 与点 $(x_{2},f(x_{2}))$ 

的直线段下方, 因此曲线段 $y = f(x)$ ( $x_1 \leqslant x \leqslant x_2$ ) 与直线 $x = x_1$ , $x = x_2$ 及 $x$ 轴围成的曲边梯形面积应在上述两直线段分别与直线 $x = x_1$ , $x = x_2$ 及 $x$ 轴围成的两个梯形的面积之间.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/ee9ec7b63bc1ad0caa8b8378e34b69309b62e1856e89b3e8a02195894d8e132b.jpg)



图11.4


证 从命题8.4.2知道 $f$ 连续, 因此可积性没有问题. 注意到点 $\frac{1}{2} (x_1 + x_2)$ 不仅是 $x_{1}$ 和 $x_{2}$ 的中点, 同时也是 $x_{1} + \lambda (x_{2} - x_{1})$ 和 $x_{2} - \lambda (x_{2} - x_{1})$ 的中点, 其中 $\lambda \in [0,1]$ . 利用 $f$ 为下凸函数, 则就有不等式

$$
\frac {1}{2} [ f (x _ {1} + \lambda (x _ {2} - x _ {1})) + f (x _ {2} - \lambda (x _ {2} - x _ {1})) ] \geqslant f \left(\frac {x _ {1} + x _ {2}}{2}\right).\tag{11.8}
$$

将上式两边对 $\lambda$ 从 0 到 1 积分, 经计算后就可以得到

$$
\frac {1}{x _ {2} - x _ {1}} \int_ {x _ {1}} ^ {x _ {2}} f (t) \mathrm{d} t \geqslant f \left(\frac {x _ {1} + x _ {2}}{2}\right).\tag{11.9}
$$

另一方面, 由 f 是下凸函数又可得到

$$
\begin{array}{r l} \frac {1}{x _ {2} - x _ {1}} \int_ {x _ {1}} ^ {x _ {2}} f (t) \mathrm{d} t & = \int_ {0} ^ {1} f (\lambda x _ {2} + (1 - \lambda) x _ {1}) \mathrm{d} \lambda \\ & \leqslant \int_ {0} ^ {1} [ \lambda f (x _ {2}) + (1 - \lambda) f (x _ {1}) ] \mathrm{d} \lambda \\ & = \frac {f (x _ {1}) + f (x _ {2})}{2}. \end{array}
$$

注 Hadamard 不等式 (11.7) 含有左边和右边的两个不等式. 可以证明, 其中每一个不等式都是函数下凸的充分必要条件. 还可以证明, 若其中任何一个不等式对所有 $x_{1}, x_{2} \in (a, b)$ 成立等号, 则 $f$ 只能是线性函数 (留作本章第二组参考题 7).

第二个重要的凸函数不等式可以从命题 8.4.7 (Jensen 不等式) 取极限得到:

命题11.2.1 (Jensen不等式) 设 $f, p \in R[a, b], m \leqslant f(x) \leqslant M, p(x)$ 非负

且 $\int_{a}^{b} p(x) > 0$ , 则当 $\varphi$ 是 $[m, M]$ 上的下凸函数时, 成立不等式:

$$
\varphi \left(\frac {\int_ {a} ^ {b} p (x) f (x) \mathrm{d} x}{\int_ {a} ^ {b} p (x) \mathrm{d} x}\right) \leqslant \frac {\int_ {a} ^ {b} p (x) \varphi (f (x)) \mathrm{d} x}{\int_ {a} ^ {b} p (x) \mathrm{d} x}.
$$

若 $\varphi$ 为上凸函数则不等式反向.

Jensen 不等式包含了很多不等式. 取 $p(x) \equiv 1$ , 就得到

$$
\varphi \left(\frac {1}{b - a} \int_ {a} ^ {b} f (t) \mathrm{d} t\right) \leqslant \frac {1}{b - a} \int_ {a} ^ {b} \varphi (f (t)) \mathrm{d} t.
$$

又若 $\int_{a}^{b}p(x)\mathrm{d}x = 1$ ，并利用 $\mathrm{e}^x$ 为下凸函数和 $\ln x$ 为上凸函数就得到

$$
\exp \left(\int_ {a} ^ {b} p (x) \ln f (x) \mathrm{d} x\right) \leqslant \int_ {a} ^ {b} p (x) f (x) \mathrm{d} x \leqslant \ln \left(\int_ {a} ^ {b} p (x) \exp f (x) \mathrm{d} x\right).\tag{11.10}
$$

左边的不等式就是广义的平均值不等式 (命题 8.5.1) 的积分形式.

下一个不等式也是 Jensen 不等式的特例. 设 $f \in R[a, b]$ , $f(x) \geqslant m > 0$ , 则成立不等式:

$$
\ln \left(\frac {1}{b - a} \int_ {a} ^ {b} f (x) \mathrm{d} x\right) \geqslant \frac {1}{b - a} \int_ {a} ^ {b} \ln f (x) \mathrm{d} x.
$$

以上的每个不等式又包含了许多具体的不等式. 例如

例题 11.2.2 若 f 为 $[0,1]$ 上的上凸函数, 则对每个正整数 n 成立不等式:

$$
\int_ {0} ^ {1} f (x ^ {n}) \mathrm{d} x \leqslant f \left(\frac {1}{n + 1}\right).
$$

## 11.2.2 Schwarz积分不等式

Schwarz 积分不等式是最基本的积分不等式之一, 应用非常广泛.

命题11.2.2（Schwarz积分不等式）设 $f,g\in R[a,b]$ ，则

$$
\left(\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x\right) ^ {2} \leqslant \int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x \int_ {a} ^ {b} g ^ {2} (x) \mathrm{d} x.
$$

证1（用证明Cauchy不等式(命题1.3.5)的同样方法.)如果 $\int_{a}^{b}f^{2}(x)\mathrm{d}x$ 与 $\int_{a}^{b}g^{2}(x)\mathrm{d}x$ 两个积分中至少有一个不等于0,我们不妨设 $\int_{a}^{b}f^{2}(x)\mathrm{d}x\neq 0.$ 由于对一切实数 $\lambda ,$ 在 $[a,b]$ 上 $[\lambda f(x) - g(x)]^2\geqslant 0,$ 因此有

$$
\int_ {a} ^ {b} [ \lambda f (x) - g (x) ] ^ {2} \mathrm{d} x \geqslant 0.
$$

将它展开, 得到关于 $\lambda$ 的非负二次三项式

$$
\lambda^ {2} \int_ {a} ^ {b} f (x) ^ {2}   \mathrm{d} x - 2 \lambda \int_ {a} ^ {b} f (x)   g (x)   \mathrm{d} x + \int_ {a} ^ {b} g ^ {2} (x)   \mathrm{d} x \geqslant 0,
$$

因此它的判别式 $\Delta \leqslant 0$ ，即

$$
\left(\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x\right) ^ {2} - \int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x \int_ {a} ^ {b} g ^ {2} (x) \mathrm{d} x \leqslant 0,
$$

移项即得所欲证的不等式.

如果积分 $\int_{a}^{b}f^{2}(x)\mathrm{d}x = \int_{a}^{b}g^{2}(x)\mathrm{d}x = 0,$ 则可以如下证明：

$$
\begin{array}{r l} \left| \int_ {a} ^ {b} f (x) g (x) \mathrm{d} x \right| & \leqslant \int_ {a} ^ {b} | f (x) g (x) | \mathrm{d} x \leqslant \int_ {a} ^ {b} \frac {f ^ {2} (x) + g ^ {2} (x)}{2} \mathrm{d} x \\ & = \frac {1}{2} \int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x + \frac {1}{2} \int_ {a} ^ {b} g ^ {2} (x) \mathrm{d} x = 0. \end{array}
$$

证 2 将 $[a,b]$ 作等距分划, 令 $x_{i}=a+\frac{i}{n}(b-a), i=0,1,\cdots,n,$ 应用 Cauchy 不等式 (命题 1.3.5) 得到

$$
\left(\frac {1}{n} \sum_ {i = 1} ^ {n} f (x _ {i}) g (x _ {i})\right) ^ {2} \leqslant \frac {1}{n} \sum_ {i = 1} ^ {n} f ^ {2} (x _ {i}) \cdot \frac {1}{n} \sum_ {i = 1} ^ {n} g ^ {2} (x _ {i}),
$$

令 $n\to \infty$ ，即得

$$
\left(\int_ {a} ^ {b} f (x) g (x) \mathrm{d} x\right) ^ {2} \leqslant \int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x \int_ {a} ^ {b} g ^ {2} (x) \mathrm{d} x.
$$

注 1 以上两个证明表明, 为了得到与离散不等式对应的积分不等式, 经常有两条思路可用: (1) 用过去的方法; (2) 从对应的离散不等式取极限.

注2 从证1就可以得到Schwarz不等式成立等号的充分必要条件.实际上，从判别式 $\Delta = 0$ 知道存在某个 $\lambda_0$ ，使得 $(\lambda_0f - g)^2$ 在 $[a,b]$ 上的积分等于0.利用第十章的Lebesgue定理(命题10.1.6)和该章的第一组参考题9,可见在 $[a,b]$ 上几乎处处成立 $\lambda_0f(x) = g(x)$ . 回顾证1, 这是在 $f^2$ 于区间 $[a, b]$ 上的积分大于0的前提下得到的. 对于 $g^2$ 的积分不等于0的情况有类似的结论.

注3 从上述证明可见 Schwarz 不等式与 Cauchy 不等式本质上是同一不等式, 只是前者用积分形式表示而已. 因此 Schwarz 不等式也称为 Cauchy-Schwarz 不等式, 或者 Cauchy-Schwarz-Bunyakowskii (布尼亚科夫斯基) 不等式.

Schwarz 积分不等式在本书中有多次应用, 下面先举一个例子.

例题 11.2.3 设 $f \in C^{1}[a, b]$ ，且 $f(a) = 0$ ，证明：

$$
\int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x \leqslant \frac {(b - a) ^ {2}}{2} \int_ {a} ^ {b} \left(f ^ {\prime} (x)\right) ^ {2} \mathrm{d} x.
$$

证 利用条件 $f(a) = 0$ 可以写出

$$
f (x) = \int_ {a} ^ {x} f ^ {\prime} (t) \mathrm{d} t,
$$

然后用 Schwarz 不等式作如下估计:

$$
f ^ {2} (x) = \left(\int_ {a} ^ {x} f ^ {\prime} (t) \mathrm{d} t\right) ^ {2} \leqslant \left(\int_ {a} ^ {x} (f ^ {\prime} (x)) ^ {2} \mathrm{d} x\right) (x - a) \leqslant (x - a) \int_ {a} ^ {b} (f ^ {\prime} (x)) ^ {2} \mathrm{d} x,
$$

再将两边对 x 从 a 到 b 积分就得到所求的结果.

## 11.2.3 其他著名积分不等式

除了 Schwarz 不等式, 还有许多其他的著名积分不等式. 下面我们再介绍三个在分析中的基本不等式, 即 Young 不等式, Hölder 积分不等式与 Minkowski 积分不等式.

命题 11.2.3 (Young 不等式) 设 f 在 $[0, +\infty)$ 上连续可导且严格单调增加, $f(0) = 0, a, b > 0$ , 则有

$$
a b \leqslant \int_ {0} ^ {a} f (x) \mathrm{d} x + \int_ {0} ^ {b} g (y) \mathrm{d} y.\tag{11.11}
$$

其中 $g(y)$ 是 $f(x)$ 的反函数, 而等号当且仅当 $b = f(a)$ 时成立.

注 Young 不等式的几何意义十分清楚. 由于定积分在几何上等于曲边梯形的面积, 可能发生的只有图 11.5 所示的 (a)、(b)、(c) 三种情况. 定积分 $\int_{0}^{a} f(x) \mathrm{d}x$ 和定积分 $\int_{0}^{b} g(y) \mathrm{d}y$ 的值在每一张分图中分别等于带有阴影的两个曲边三角形的面积. 对于前两种情况, 这两个面积之和都严格大于边长为 $a$ 和 $b$ 的矩形面积, 而在第三种情况则相等. 这个矩形在图11.5(a)和(b)中的边界是由曲边三角形的部分边界和一段虚线构成的.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/d62ece6c96ccea29a03be9b8ced425e5b77877f7b2fc84e2010f8177b89cb566.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/6d529d8105ebf00131fc71605bb65f3d9ed0ebb8bb5d5b32be9d22f63b3ddcb8.jpg)



(b)



图11.5


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db65b727-9f50-4b0d-85a8-cedb3e698701/63802a0b93d2fdcdec50c8b0058f9741f0ab036a4e880de6dea2be7915f81cc1.jpg)



(c)


证 将 (11.11) 右边的两个积分之和记为 $I$ . 利用 $g(f(x)) \equiv x$ , 对其中第二个积分作变量代换 $y = f(x)$ , 即 $x = g(y)$ , 然后分部积分得到:

$$
\begin{array}{r l} I & = \int_ {0} ^ {a} f (x) \mathrm{d} x + \int_ {0} ^ {b} g (y) \mathrm{d} y = \int_ {0} ^ {a} f (x) \mathrm{d} x + \int_ {0} ^ {g (b)} x \mathrm{d} f (x) \\ & = \int_ {0} ^ {a} f (x) \mathrm{d} x + x f (x) \Big | _ {0} ^ {g (b)} - \int_ {0} ^ {g (b)} f (x) \mathrm{d} x \\ & = b g (b) - \int_ {a} ^ {g (b)} f (x) \mathrm{d} x, \end{array}\tag{11.12}
$$

其中利用了 $f(g(b)) = b$ 如果 $a = g(b)$ ，也就是 $b = f(a)$ ，则已经得到(11.11)中成立等号的情况（见图11.5(c)).

在 $a < g(b)$ 时, 对于 (11.12) 中的积分利用 $f(x)$ 在区间 $[a, g(b)]$ 上严格单调增加, $f(x) \leqslant f(g(b)) = b$ , 就得到 $I > bg(b) - [g(b) - a]b = ab$ . 在 $a > g(b)$ 时, 类似地可得到

$$
I = b g (b) + \int_ {g (b)} ^ {a} f (x) \mathrm{d} x > b g (b) + [ a - g (b) ] b = a b.
$$

注 可以发现以上证明的每一步都有明显的几何意义. 此外, Young 不等式中的条件 “ $f \in C^{1}[0, \infty)$ ” 可以降低为 “ $f \in C[0, \infty)$ ”. 但这样改变条件后, 不能再用分部积分法, 而需要从积分定义出发来建立 (11.12). 这个证明及 Young 不等式的另一边估计留作为本章的第二组参考题 6.

下面的 Hölder 不等式和 Minkowski 不等式都可以从 §8.5 中对应的离散不等式取极限或者用与那里类似的方法得到, 因此这里不再给出证明.

命题11.2.4（Hölder不等式）设 $f,g\in R[a,b],p,q$ 为满足 $\frac{1}{p} +\frac{1}{q} = 1$ 的一对正实数(共轭实数)，则成立

$$
\left(\int_ {a} ^ {b} | f (x) g (x) | \mathrm{d} x\right) \leqslant \left(\int_ {a} ^ {b} | f (x) | ^ {p} \mathrm{d} x\right) ^ {\frac {1}{p}} \left(\int_ {a} ^ {b} | g (x) | ^ {q} \mathrm{d} x\right) ^ {\frac {1}{q}}.\tag{11.13}
$$

命题11.2.5（Minkowski不等式）设 $f,g\in R[a,b],1\leqslant p <   + \infty$ ，则成立

$$
\left(\int_ {a} ^ {b} | f (x) + g (x) | ^ {p} \mathrm{d} x\right) ^ {\frac {1}{p}} \leqslant \left(\int_ {a} ^ {b} | f (x) | ^ {p} \mathrm{d} x\right) ^ {\frac {1}{p}} + \left(\int_ {a} ^ {b} | g (x) | ^ {p} \mathrm{d} x\right) ^ {\frac {1}{p}},\tag{11.14}
$$

当 0 < p < 1 时不等式反向成立.

注 Hölder 积分不等式与 Minkowski 积分不等式是“实变函数”与“泛函分析”课程中的两个基本不等式. 当然在那里对于函数 $f, g$ 的条件要更为一般. 此外, 在 Hölder 不等式中成立等号的条件是存在常数 $c$ , 使得 $|f(x)|^p = c|g(x)|^q$ (或者对换 $f$ 和 $g$ 并将 $p$ 换为 $q$ ); 在 Minkowski 不等式中成立等号的条件是存在非负常数 $c$ , 使得 $f(x) = cg(x)$ (或者对换 $f$ 和 $g$ ). 但即使是在 Riemann 可积条件下, 这两个条件中的等式都应当理解为几乎处处成立 (参见命题 10.1.6).

## 11.2.4 不等式的其他例题

用积分学方法可以建立过去要用 Taylor 定理才能得到的某些不等式. 下面就是一个例子 (见《美国数学月刊》(1990) 第 97 卷 912-915 页).

例题 11.2.4 用积分学方法求出 $\sin x$ 和 $\cos x$ 的一些基本不等式.

解 在 x > 0 时从 $\cos x \leqslant 1$ 出发, 从 0 到 x 积分, 得到不等式 (命题 1.3.6)

$$
\sin x <   x.
$$

再对两边从 0 到 x 积分, 得到 $1 - \cos x < \frac{x^{2}}{2}$ . 将它改写为

$$
\cos x > 1 - \frac {x ^ {2}}{2},
$$

然后再做一次积分得到

$$
\sin x > x - \frac {x ^ {3}}{6},
$$

即例题8.5.3中的不等式.于是已经有

$$
x - \frac {x ^ {3}}{6} <   \sin x <   x.
$$

再一次积分后可以得到

$$
1 - \frac {x ^ {2}}{2} <   \cos x <   1 - \frac {x ^ {2}}{2} + \frac {x ^ {4}}{2 4}.
$$

归纳地进行下去就可以得到关于正弦和余弦函数的一般性不等式, 其中包括了8.5.3小节的练习题15中的不等式. 此外, 还可以得到以下两个对所有 $x$ 成立的绝对值不等式

$$
\begin{array}{c} {{\left| \sin x - \sum_ {k = 0} ^ {n} (- 1) ^ {k} \frac {x ^ {2 k + 1}}{(2 k + 1) !} \right| \leqslant \frac {| x | ^ {2 n + 3}}{(2 n + 3) !},}} \\ {{\left| \cos x - \sum_ {k = 0} ^ {n} (- 1) ^ {k} \frac {x ^ {2 k}}{(2 k) !} \right| \leqslant \frac {| x | ^ {2 n + 2}}{(2 n + 2) !}.}} \end{array}
$$

此外, 对于每个固定的 $x$ , 令 $n \to \infty$ , 就可得到正弦和余弦函数的 Taylor 级数展开式 (参见下册 §14.4 关于 Taylor 级数的一般性讨论).

例题11.2.5 设函数 $f \in C[a, b]$ 且单调增加, 证明:

$$
\int_ {a} ^ {b} x f (x) \mathrm{d} x \geqslant \frac {a + b}{2} \int_ {a} ^ {b} f (x) \mathrm{d} x.
$$

注 当 $f$ 非负时, 本题有明显的物理意义: 如果曲线 $y = f(x)$ 单调增加, 则密度均匀的曲边梯形

$$
\{(x, y) \mid a \leqslant x \leqslant b, 0 \leqslant y \leqslant f (x) \}
$$

的质心不可能落在直线 $x = \frac{a + b}{2}$ 的左边（参见(11.3）中关于 $x_{c}$ 的公式）

分析 本题的解法很多 (参见 [13, 30]), 下面举出其中的两个证明. 关键是要利用 $f$ 的单调性和 $x - \frac{a + b}{2}$ 关于积分区间的中点为奇函数的性质.

证 1 因为 f 单调增加, 所以成立

$$
\left(x - \frac {a + b}{2}\right) \left[ f (x) - f \left(\frac {a + b}{2}\right) \right] \geqslant 0.\tag{11.15}
$$

将上式对 x 从 a 到 b 积分, 又利用

$$
\int_ {a} ^ {b} \left(x - \frac {a + b}{2}\right) \mathrm{d} x = 0,
$$

就可以得到所要的不等式.

证 2 将 $[a, b]$ 分为两个区间, 分别用第一中值定理, 就得到

$$
\begin{array}{r l} & {\int_ {a} ^ {b} \left(x - \frac {a + b}{2}\right) f (x) \mathrm{d} x} \\ & {= \int_ {a} ^ {\frac {a + b}{2}} \left(x - \frac {a + b}{2}\right) f (x) \mathrm{d} x + \int_ {\frac {a + b}{2}} ^ {b} \left(x - \frac {a + b}{2}\right) f (x) \mathrm{d} x} \\ & {= f (\xi_ {1}) \int_ {a} ^ {\frac {a + b}{2}} \left(x - \frac {a + b}{2}\right) \mathrm{d} x + f (\xi_ {2}) \int_ {\frac {a + b}{2}} ^ {b} \left(x - \frac {a + b}{2}\right) \mathrm{d} x} \\ & {= [ f (\xi_ {2}) - f (\xi_ {1}) ] \cdot \frac {(b - a) ^ {2}}{2} \geqslant 0,} \end{array}
$$

因为其中 $a < \xi_1 < \frac{1}{2} (a + b) < \xi_2 < b,$ 而 $f$ 单调增加.

下面是对于广义算术平均值－几何平均值不等式(例题8.5.1)的一个新的积分学证明，见《美国数学月刊》(1996)第103卷585页.

例题 11.2.6 设有 n 个非负数 $x_{1}, \cdots, x_{n}$ 和 n 个正数 $\lambda_{1}, \cdots, \lambda_{n}$ ，且 $\lambda_{1} + \cdots + \lambda_{n} = 1$ ，则成立不等式

$$
G _ {n} \equiv \prod_ {i = 1} ^ {n} x _ {i} ^ {\lambda_ {i}} \leqslant \sum_ {i = 1} ^ {n} \lambda_ {i} x _ {i} \equiv A _ {n},\tag{11.16}
$$

其中当且仅当 $x_{1}=x_{2}=\cdots=x_{n}$ 时成立等号.

证 只需对 n 个正数 $x_{1}, \cdots, x_{n}$ 证明即可. 不妨设已有 $x_{1} \leqslant \cdots \leqslant x_{n}$ ，则存在 $k \in \{1, \cdots, n-1\}$ ，使得 $x_{k} \leqslant G_{n} \leqslant x_{k+1}$ . 这时用拟合法得到

$$
\begin{array}{r l} & {\frac {A _ {n}}{G _ {n}} - 1 = \sum_ {i = 1} ^ {n} \lambda_ {i} \left(\frac {x _ {i} - G _ {n}}{G _ {n}}\right) = \sum_ {i = 1} ^ {n} \lambda_ {i} \int_ {G _ {n}} ^ {x _ {i}} \frac {\mathrm{d} t}{G _ {n}}} \\ & {\qquad = - \sum_ {i = 1} ^ {k} \lambda_ {i} \int_ {x _ {i}} ^ {G _ {n}} \frac {\mathrm{d} t}{G _ {n}} + \sum_ {i = k + 1} ^ {n} \lambda_ {i} \int_ {G _ {n}} ^ {x _ {i}} \frac {\mathrm{d} t}{G _ {n}}.} \end{array}
$$

又用拟合法（“无中生有”）写出

$$
\begin{array}{r l} 0 & = \ln G _ {n} - \sum_ {i = 1} ^ {n} \lambda_ {i} \ln x _ {i} = \sum_ {i = 1} ^ {n} \lambda_ {i} (\ln G _ {n} - \ln x _ {i}) = \sum_ {i = 1} ^ {n} \lambda_ {i} \int_ {x _ {i}} ^ {G _ {n}} \frac {\mathrm{d} t}{t} \\ & = \sum_ {i = 1} ^ {k} \lambda_ {i} \int_ {x _ {i}} ^ {G _ {n}} \frac {\mathrm{d} t}{t} - \sum_ {i = k + 1} ^ {n} \lambda_ {i} \int_ {G _ {n}} ^ {x _ {i}} \frac {\mathrm{d} t}{t}. \end{array}
$$

将两式相加得到

$$
\frac {A _ {n}}{G _ {n}} - 1 = \sum_ {i = 1} ^ {k} \lambda_ {i} \int_ {x _ {i}} ^ {G _ {n}} \left(\frac {1}{t} - \frac {1}{G _ {n}}\right) \mathrm{d} t + \sum_ {i = k + 1} ^ {n} \lambda_ {i} \int_ {G _ {n}} ^ {x _ {i}} \left(\frac {1}{G _ {n}} - \frac {1}{t}\right) \mathrm{d} t,
$$

由于右边的每一项都非负, 因此就得到 $A_{n} \geqslant G_{n}$ , 而且可直接看出等号成立的充分必要条件是 $x_{i} = G_{n}, i = 1, \cdots, n$ , 也就是 $x_{1} = \cdots = x_{n}$ .

注 这个证明确有新意, 但关键并不在于用积分工具. 如果对于中间一步的 $\ln G_{n} - \ln x_{i}, i = 1,2,\dots ,n,$ 用Lagrange中值定理(命题7.1.4)也可以进行到底.

## 11.2.5 练习题

1. 设 $f$ 在 $[a, b]$ 上单调增加, 证明: 对每个 $c \in (a, b)$ , 函数 $F(x) = \int_{c}^{x} f(t) \, \mathrm{d}t$ 为 $[a, b]$ 上的下凸函数.

2. 设 $f$ 在 $[0, +\infty)$ 上是下凸函数, 证明: 函数 $F(x) = \frac{1}{x} \int_{0}^{x} f(t) \, \mathrm{d}t$ 是 $(0, +\infty)$ 上的下凸函数.

3. 设 $f$ 于 $[0,1]$ 上为非负的上凸函数, 证明: $\int_0^1 2f(x)\mathrm{d}x\geqslant \max_{x\in [0,1]}\{f(x)\}$ .

4. 设 $f$ 在 $[a, b]$ 上为上凸可微函数, $f(a) = f(b) = 0$ , $f'(a) = \alpha > 0$ , $f'(b) = \beta < 0$ , 证明:

$$
0 \leqslant \int_ {a} ^ {b} f (x) \mathrm{d} x \leqslant \frac {1}{2} \alpha \beta \cdot \frac {(b - a) ^ {2}}{\beta - \alpha}.
$$

5. 设 $f \in C^1[0,2]$ , $f(0) = f(2) = 1$ , $|f'(x)| \leqslant 1$ , 证明: $\left|\int_0^2 f(x) \, \mathrm{d}x\right| \geqslant 1$ .

6. 已知函数 $f \in C[a, b]$ ，且 $f(x)$ 处处大于 0，证明：

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x \int_ {a} ^ {b} {\frac {1}{f (x)}} \mathrm{d} x \geqslant (b - a) ^ {2}.
$$

7. 已知非负函数 $f \in R[a, b]$ , $\int_{a}^{b} f(x) \, \mathrm{d}x = 1$ , $k$ 为实数, 证明:

$$
\left(\int_ {a} ^ {b} f (x) \cos k x \mathrm{d} x\right) ^ {2} + \left(\int_ {a} ^ {b} f (x) \sin k x \mathrm{d} x\right) ^ {2} \leqslant 1.
$$

8. 设 $f \in C^{1}[a, b]$ 且 $f(a) = 0$ ，证明比例题 11.2.3 更强的不等式：

$$
\int_ {a} ^ {b} f ^ {2} (x) \mathrm{d} x \leqslant \frac {(b - a) ^ {2}}{2} \int_ {a} ^ {b} \left(f ^ {\prime} (x)\right) ^ {2} \mathrm{d} x - \frac {1}{2} \int_ {a} ^ {b} \left(f ^ {\prime} (x)\right) ^ {2} (x - a) ^ {2} \mathrm{d} x.
$$

9. 设 $f$ 在 $[0,1]$ 上可微且当 $x \in (0,1)$ 时, $0 \leqslant f'(x) \leqslant 1$ , $f(0) = 0$ . 证明:

$$
\left(\int_ {0} ^ {1} f (x) \mathrm{d} x\right) ^ {2} \geqslant \int_ {0} ^ {1} f ^ {3} (x) \mathrm{d} x,
$$

且仅当 $f(x) \equiv 0$ 或 $f(x) = x$ 时成立等号.

10. (1) 试用 Young 不等式证明: 当 $a, b \geqslant 1$ 时成立 $ab \leqslant e^{a - 1} + b \ln b$ ;

(2) 设函数 $f \in R[a, b]$ ，试用 Minkowski 不等式证明下面两个不等式不能同时成立：

$$
\int_ {0} ^ {\pi} | f (x) - \sin x | ^ {2}   \mathrm{d} x \leqslant {\frac {3}{4}} \quad {\text {和}} \quad \int_ {0} ^ {\pi} | f (x) - \cos x | ^ {2}   \mathrm{d} x \leqslant {\frac {3}{4}}.
$$

## §11.3 积分估计与近似计算

## 11.3.1 积分值的估计

在许多实际问题中, 我们往往不一定需要知道定积分的精确值, 而只需要对积分值的可能范围进行估计. 这里的方法很多, 其中最基本的方法是先估计被积函数在积分区间上的最小值和最大值 (或者下确界和上确界), 然后乘以区间的长度. 其次就是用积分中值定理和各种不等式进行估计. 当然需要考虑被积函数在积分区间上的具体特性. 下面先通过一个例子来说明各种方法.

例题 11.3.1 估计积分 $I=\int_{a}^{b}\frac{\sin x}{x}dx$ 的值, 其中 0<a<b.

解 如果利用 $|\sin x| \leqslant |x|$ , 则只能得到

$$
| I | \leqslant b - a.\tag{11.17}
$$

这个估计在 b-a 较大时当然很差.

利用积分第一中值定理, 由于因子 1/x 不变号, 就得到

$$
| I | = \left| \sin \xi \int_ {a} ^ {b} \frac {\mathrm{d} x}{x} \right| \leqslant \int_ {a} ^ {b} \frac {\mathrm{d} x}{x} = \ln \frac {b}{a} = \ln \left(1 + \frac {b - a}{a}\right) <   \frac {b}{a} - 1.\tag{11.18}
$$

如果 $a > 1$ ，则这个估计比(11.17)要好.但是对于 $b - a$ 很大的情况仍然不好

利用积分第二中值定理和因子 1/x 单调非负, 就有

$$
| I | = \left| \frac {1}{a} \int_ {a} ^ {\xi} \sin x \mathrm{d} x \right| \leqslant \frac {1}{a} | \cos \xi - \cos a | \leqslant \frac {2}{a}.\tag{11.19}
$$

如果 $a > 1$ ，则对于 $b - a$ 很大的情况这个估计明显比前两个要好.观察该被积函数的特性(其图像见图4.2(a))，当积分区间较大时，必须将 $\sin x$ 所起的正负抵消的作用考虑进去，而不能如前两个估计那样只利用 $|\sin x| \leqslant |x|$ 和 $|\sin x| \leqslant 1$ .这就是估计(11.19)优于它们的理由所在.

估计 (11.19) 与区间右端无关. 下面一个估计则对任何 $0 \leqslant a < b$ 都成立:

$$
\left| \int_ {a} ^ {b} \frac {\sin x}{x} \mathrm{d} x \right| <   3.\tag{11.20}
$$

这里不妨设 $0 \leqslant a < 1 < b$ , 否则下面的估计更为简单. 这时将积分拆开, 并利用 (11.17) 和 (11.19) 就得到

$$
| I | \leqslant \left| \int_ {a} ^ {1} {\frac {\sin x}{x}}   \mathrm{d} x \right| + \left| \int_ {1} ^ {b} {\frac {\sin x}{x}}   \mathrm{d} x \right| <   1 + 2 = 3.\tag{11.21}
$$

当然这还是一个很粗的估计. 与区间无关的最优估计问题留作为本章第二组参考题5. 又若 $a, b$ 是给定的具体数值, 则还需要利用被积函数在 $[a, b]$ 上的具体特性才能作出较好的估计. 下面就是一个例子 (即是[27]中的2328题).

例题11.3.2 估计定积分 $I = \int_{100\pi}^{200\pi}\frac{\sin x}{x}\mathrm{d}x$ 的值.

解 1 将积分区间按 $\pi$ 的整倍数拆开, 就不难证明 I > 0 (细节从略). 又利用上面已有的估计式 (11.19), 就得到 [27] 中的答案:

$$
I = \frac {\theta}{5 0 \pi}, 0 <   \theta \leqslant 1.
$$

解 2 利用被积函数的分母大于 $100\pi$ ，而如下分部积分后会变得更大，就有

$$
\begin{array}{r l} I & = \left(- \frac {\cos x}{x} - \frac {\sin x}{x ^ {2}}\right) \Bigg | _ {1 0 0 \pi} ^ {2 0 0 \pi} - 2 \int_ {1 0 0 \pi} ^ {2 0 0 \pi} \frac {\sin x}{x ^ {3}}   \mathrm{d} x \\ & = \frac {1}{2 0 0 \pi} - 2 \int_ {1 0 0 \pi} ^ {2 0 0 \pi} \frac {\sin x}{x ^ {3}}   \mathrm{d} x. \end{array}
$$

对于右边的积分用积分第二中值定理估计, 就有

$$
\left| I - \frac {1}{2 0 0 \pi} \right| \leqslant \frac {2}{1 0 ^ {6} \pi^ {3}} \left| \int_ {1 0 0 \pi} ^ {\xi} \sin x \mathrm{d} x \right| \leqslant \frac {4}{1 0 ^ {6} \pi^ {3}} \approx 0. 1 2 9 \times 1 0 ^ {- 6}.
$$

也就是说积分 $I \approx \frac{1}{200\pi} \approx 0.00159$ .

注 用 Mathematica 计算得到 $I \approx 0.00159149$ . 实际上, 如果对上面的最后一个积分再用分部积分和第二中值定理, 则可以得到更为精确的近似值.

各种不等式在估计中都可能有用. 其中 Cauchy 不等式与 Schwarz 不等式更是常用的工具. 例如, 椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 (a, b > 0)$ 的周长为

$$
s = 4 \int_ {0} ^ {\pi / 2} \sqrt {a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t} \mathrm{d} t,
$$

其中被积函数的原函数不是初等函数, 因此不可能用 Newton-Leibniz 公式来计算 (可参看 [50] 中的 138–142 页). 下面我们分别用 Schwarz 不等式和 Cauchy 不等式来估计这个积分的上界和下界. 它们的平均值即是在某些数学手册中关于椭圆周长的近似公式之一.

例题11.3.3 证明： $\pi (a + b)\leqslant s\leqslant \pi \sqrt{2a^2 + 2b^2}.$ 

证 首先, 不难由 Schwarz 不等式得到上界估计:

$$
\begin{array}{r l} & s = 4 \int_ {0} ^ {\pi / 2} \sqrt {a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t} \mathrm{d} t \\ & \leqslant 4 \left[ \int_ {0} ^ {\pi / 2} (a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t) \mathrm{d} t \right] ^ {\frac {1}{2}} \left(\int_ {0} ^ {\pi / 2} \mathrm{d} t\right) ^ {\frac {1}{2}} \\ & = 4 \left[ \frac {\pi}{4} (a ^ {2} + b ^ {2}) \right] ^ {\frac {1}{2}} \left(\frac {\pi}{2}\right) ^ {\frac {1}{2}} = \pi \sqrt {2 a ^ {2} + 2 b ^ {2}}. \end{array}
$$

然后 (反方向) 用 Cauchy 不等式求出被积函数的下界:

$$
\begin{array}{r l} \sqrt {a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t} & = \sqrt {a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t} \cdot \sqrt {\sin^ {2} t + \cos^ {2} t} \\ & \geqslant a \sin t \cdot \sin t + b \cos t \cdot \cos t \\ & = a \sin^ {2} t + b \cos^ {2} t, \end{array}
$$

对两边积分再乘 4 就得到积分的下界估计:

$$
s \geqslant 4 \int_ {0} ^ {\pi / 2} (a \sin^ {2} t + b \cos^ {2} t) \mathrm{d} t = \pi (a + b).
$$

## 11.3.2 积分的近似计算

在数学分析教科书中对于积分的近似计算一般是介绍三种方法，即梯形公式、矩形公式和抛物线公式（也称为 Simpson (辛普森) 公式）。这些公式以及更深入的数值积分方法都是以下面的定理为基础的。

命题 11.3.1 (Euler-Maclaurin 求和公式) 设函数 $f \in C^{(2m+2)}[a, b]$ , $h = (b - a)/n$ , $x_i = a + ih$ , $i = 0, 1, \cdots, n$ , 则

$$
\begin{array}{l} \frac {b - a}{n} \sum_ {i = 1} ^ {n} \frac {1}{2} [ f (x _ {i - 1}) + f (x _ {i}) ] - \int_ {a} ^ {b} f (x) \mathrm{d} x \\ = \sum_ {k = 1} ^ {m} \frac {B _ {2 k}}{(2 k) !} h ^ {2 k} [ f ^ {(2 k - 1)} (b) - f ^ {(2 k - 1)} (a) ] \\ + \frac {B _ {2 m + 2}}{(2 m + 2) !} h ^ {2 m + 2} f ^ {(2 m + 2)} (\xi) (b - a), \end{array}\tag{11.22}
$$

其中 $\xi\in[a,b]$ , $B_{2k}\ (k=1,2,\cdots,m+1)$ 是 Bernoulli 数 (见 7.2.3 小节), 其中前三个是:

$$
B _ {2} = \frac {1}{6}, B _ {4} = - \frac {1}{3 0}, B _ {6} = \frac {1}{4 2}.
$$

容易看出, 上述公式的左边就是对于区间 $[a, b]$ 的 $n$ 等距分划下的梯形公式与积分之差, 因此公式给出了梯形公式的误差表达式. 通过组合就可以得到矩形公式和抛物线公式的误差估计.

公式 (11.22) 的证明并不困难, 主要是用分部积分法. 下面给出的几个例题主要是介绍方法. 将例题中所得的结果用于等距分划的每个子区间, 并加以合并就可以得到 $m = 0, 1$ 时的 Euler-Maclaurin 公式. 它们提供了梯形公式和矩形公式的误差估计.

例题11.3.4设 $f\in C^2 [0,h]$ ，则存在 $\xi \in [0,h]$ ，使成立

$$
\int_ {0} ^ {h} f (x) \mathrm{d} x = \frac {h}{2} [ f (0) + f (h) ] - \frac {1}{1 2} f ^ {\prime \prime} (\xi) h ^ {3}.\tag{11.23}
$$

证 如下用两次分部积分得到

$$
\begin{array}{r l} \int_ {0} ^ {h} f (x) \mathrm{d} x & = \int_ {0} ^ {h} f (x) \left(x - \frac {h}{2}\right) ^ {\prime} \mathrm{d} x \\ & = f (x) \left(x - \frac {h}{2}\right) \Big | _ {0} ^ {h} - \int_ {0} ^ {h} f ^ {\prime} (x) \left(x - \frac {h}{2}\right) \mathrm{d} x \\ & = \frac {h}{2} [ f (0) + f (h) ] - \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime} (x) [ x (x - h) ] ^ {\prime} \mathrm{d} x \\ & = \frac {h}{2} [ f (0) + f (h) ] + \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) [ x (x - h) ] \mathrm{d} x. \end{array}\tag{11.24}
$$

由于 $x(x-h)$ 不变号, 对右边的积分用第一中值定理就得到所要的结果:

$$
\frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) [ x (x - h) ] \mathrm{d} x = \frac {1}{2} f ^ {\prime \prime} (\xi) \int_ {0} ^ {h} x (x - h) \mathrm{d} x = - \frac {1}{1 2} f ^ {\prime \prime} (\xi) h ^ {3}.
$$

注 如果引进变上限积分 $F(x) = \int_0^x f(t)\mathrm{d}t, 0 \leqslant x \leqslant h$ ，就可以看出本题与第七章第一组参考题9(3)相同。两者在条件和结论上的差异不是本质的，只要应用第十章第一组参考题11就可以解决。此外，这也说明在积分学中的许多问题用微分学也是可以解决的。

例题 11.3.5 设 $f \in C^{4}[0, h]$ ，证明：存在 $\xi \in [0, h]$ ，使成立

$$
\int_ {0} ^ {h} f (x) \mathrm{d} x = \frac {h}{2} [ f (0) + f (h) ] - \frac {h ^ {2}}{1 2} [ f ^ {\prime} (h) - f ^ {\prime} (0) ] + \frac {1}{7 2 0} f ^ {(4)} (\xi) h ^ {5}.\tag{11.25}
$$

证 从上一例题中推导得到的等式 (11.24) 继续做下去:

$$
\begin{array}{l} \int_ {0} ^ {h} f (x) \mathrm{d} x - \frac {h}{2} [ f (0) + f (h) ] \\ = \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) [ x (x - h) ] \mathrm{d} x \\ = - \frac {h ^ {2}}{1 2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) \mathrm{d} x + \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) \left(x ^ {2} - h x + \frac {h ^ {2}}{6}\right) \mathrm{d} x \\ = - \frac {h ^ {2}}{1 2} [ f ^ {\prime} (h) - f ^ {\prime} (0) ] + \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime} (x) \left(\frac {x ^ {3}}{3} - \frac {h x ^ {2}}{2} + \frac {h ^ {2} x}{6}\right) ^ {\prime} \mathrm{d} x \\ = - \frac {h ^ {2}}{1 2} [ f ^ {\prime} (h) - f ^ {\prime} (0) ] - \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime \prime} (x) \left(\frac {x ^ {3}}{3} - \frac {h x ^ {2}}{2} + \frac {h ^ {2} x}{6}\right) \mathrm{d} x \\ = - \frac {h ^ {2}}{1 2} [ f ^ {\prime} (h) - f ^ {\prime} (0) ] - \frac {1}{2} \int_ {0} ^ {h} f ^ {\prime \prime \prime} (x) \left(\frac {x ^ {4}}{1 2} - \frac {h x ^ {3}}{6} + \frac {h ^ {2} x ^ {2}}{1 2}\right) ^ {\prime} \mathrm{d} x \\ = - \frac {h ^ {2}}{1 2} [ f ^ {\prime} (h) - f ^ {\prime} (0) ] + \frac {1}{2 4} \int_ {0} ^ {h} f ^ {(4)} (x) [ x ^ {2} (x - h) ^ {2} ] \mathrm{d} x, \end{array}
$$

在最后一个积分中, 利用因子 $x^{2}(h - x)^{2}$ 不变号, 再用积分第一中值定理就可得到所要的等式.

以上结果对于梯形公式和矩形公式的误差估计已经够用。为了对抛物线公式作出误差估计，还需要 $m = 2$ 时的Euler-Maclaurin公式，其证明方法与上面完全一样，读者可自己完成。此外，在[14,17]等教科书中均对抛物线公式采用微分学方法作出误差估计。下面只是对于抛物线方法中的基本公式作一点介绍。

例题 11.3.6 (万能公式) 若 $p(x)$ 是不超过 3 次的多项式, 则有

$$
\int_ {a} ^ {b} p (x) \mathrm{d} x = \frac {1}{6} \left[ p (a) + 4 p \left(\frac {1}{2} (a + b)\right) + p (b) \right] (b - a).\tag{11.26}
$$

证 令 $q(t) = f(a + t(b - a))$ ，就可以将要证明的公式变为等价的

$$
\int_ {0} ^ {1} q (t) \mathrm{d} t = \frac {1}{6} \left[ q (0) + 4 q \left(\frac {1}{2}\right) + q (1) \right].
$$

然后利用积分为线性运算, 分别用 $q(t)=1, t, t^{2}, t^{3}$ 代入验算即可.

注 这个公式在初等数学的体积计算中有万能公式的美名：只要将一个立体的顶截面、中截面和底截面的面积分别乘 $1:4:1$ 并相加，然后除以6，再乘高度即可. 容易验证它对于球、圆锥和圆台等形体的体积都给出了准确的答案.

## 11.3.3 练习题

1. 证明:

(1) $\int_{0}^{\sqrt{2\pi}}\sin x^{2}\mathrm{d}x>0;$ (2) $\frac{1}{20\sqrt[3]{2}}<\int_{0}^{1}\frac{x^{19}}{\sqrt[3]{1+x^{6}}}\mathrm{d}x<\frac{1}{20};$ (3) $\int_{0}^{\pi/2}x\left(\frac{\sin nx}{\sin x}\right)^{4}\mathrm{d}x<\frac{n^{2}\pi^{2}}{4};$ (4) $0<\frac{\pi}{2}-\int_{0}^{\pi/2}\frac{\sin x}{x}\mathrm{d}x<\frac{\pi^{3}}{144};$ (5) $0.005<\int_{0}^{100}\frac{\mathrm{e}^{-x}}{x+100}\mathrm{d}x<0.01;$ (6) $\frac{2}{9}\pi^{2}<\int_{\pi/6}^{\pi/2}\frac{2x}{\sin x}\mathrm{d}x<\frac{1}{3}\pi^{2}.$ 

2. 设 f 在 $[0, a]$ (a > 0) 上有可积的导函数, 证明:

$$
| f (0) | \leqslant {\frac {1}{a}} \int_ {0} ^ {a} | f (x) |   \mathrm{d} x + \int_ {0} ^ {a} | f ^ {\prime} (x) |   \mathrm{d} x.
$$

3. 设 $f$ 在 $[0,1]$ 上有可积的导函数, 证明:

$$
\int_ {0} ^ {1} | f (x) | \mathrm{d} x \leqslant \max \left\{\int_ {0} ^ {1} | f ^ {\prime} (x) | \mathrm{d} x, \left| \int_ {0} ^ {1} f (x) \mathrm{d} x \right| \right\}.
$$

4. 设函数 $f$ 在 $[a, b]$ 上可微, $|f'(x)| \leqslant M$ , 且 $\int_{a}^{b} f(x) \mathrm{d}x = 0$ . 对于函数 $F(x) = \int_{a}^{x} f(t) \mathrm{d}t$ ,

(1) 证明: $|F(x)| \leqslant \frac{M(b - a)^2}{8}$ ;

(2) 在增加条件 $f(a) = f(b) = 0$ 时证明: $|F(x)| \leqslant \frac{M(b - a)^2}{16}$ .

5. 证明: 对每个正整数 $n$ , 成立

$$
\frac {2}{3} n \sqrt {n} <   1 + \sqrt {2} + \dots + \sqrt {n} <   \frac {4 n + 3}{6} \sqrt {n}.
$$

6. 设 $f$ 在 $[a, b]$ 上可微, $f(a) = f(b) = 0$ , $|f'(x)| \leqslant M$ , 证明:

$$
\left| \int_ {a} ^ {b} f (x) \mathrm{d} x \right| \leqslant \frac {M}{4} (b - a) ^ {2}.
$$

7. 设 $f$ 在 $[a, b]$ 上二阶可微, $f(a) = f(b) = 0$ , $|f''(x)| \leqslant M$ , 证明:

$$
\left| \int_ {a} ^ {b} f (x) \mathrm{d} x \right| \leqslant \frac {M}{1 2} (b - a) ^ {3}.
$$

8. (矩形公式) 设 $f \in C^2[a, b]$ , 证明: 存在 $\xi \in (a, b)$ , 使成立

$$
\int_ {a} ^ {b} f - (b - a) f \left(\frac {a + b}{2}\right) = \frac {f ^ {\prime \prime} (\xi) (b - a) ^ {3}}{2 4}.
$$

9. 设 $f$ 于 $[-1, 1]$ 上可微, 且有 $a \in (0, 1)$ , 使得 $\int_{-a}^{a} f(x) \mathrm{d}x = 0$ , 证明:

$$
\left| \int_ {- 1} ^ {1} f (x) \mathrm{d} x \right| \leqslant M (1 - a ^ {2}).
$$

10. 设 $f$ 于 $[0,1]$ 上可微, $|f'(x)| \leqslant M$ , 证明:

$$
\left| \int_ {0} ^ {1} f (x) \mathrm{d} x - \frac {1}{n} \sum_ {k = 1} ^ {n} f \left(\frac {k}{n}\right) \right| \leqslant \frac {M}{2 n}.
$$

11. 设 $f$ 在区间 $[0,1]$ 上可微, 且 $f' \in R[0,1]$ , 对正整数 $n$ 定义

$$
A _ {n} = \int_ {0} ^ {1} f (x) \mathrm{d} x - \frac {1}{n} \sum_ {k = 1} ^ {n} f \left(\frac {k}{n}\right),
$$

证明： $\lim_{n\to \infty}nA_n = \frac{1}{2} (f(0) - f(1)).$ 

12. 设 $f$ 在区间 $[0,1]$ 上二阶可微, 且 $f'' \in R[0,1]$ , 对正整数 $n$ 定义

$$
B _ {n} = \int_ {0} ^ {1} f (x) \mathrm{d} x - \frac {1}{n} \sum_ {k = 1} ^ {n} f \left(\frac {2 k - 1}{2 n}\right),
$$

证明： $\lim_{n\to \infty}n^2 B_n = \frac{1}{24} [f'(1) - f'(0)].$ 

## §11.4 积分学在分析中的其他应用

## 11.4.1 利用定积分求数列极限

从第二章开始, 已经介绍过求数列极限的许多方法. 下面再介绍一种求数列极限的新方法——将求数列极限化为求定积分. 它的原理如下:

设 $f \in R[a, b]$ , 则有与等距分划对应的极限等式:

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \lim _ {n \rightarrow \infty} \sum_ {i = 1} ^ {n} f \left(a + i \frac {b - a}{n}\right) \frac {b - a}{n}
$$

或

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x = \lim _ {n \rightarrow \infty} \sum_ {i = 1} ^ {n} f \left(a + (i - 1) \frac {b - a}{n}\right) \frac {b - a}{n}.
$$

因此, 如果能将某个数列 $\{a_{n}\}$ 的通项 $a_{n}$ 写成如上面右边的积分和式那样的表达式, 则就将极限计算问题转换为定积分的计算问题了. 当然还可以有与不等距分划相对应的变形.

应当指出, 这个新方法有时很有效, 但有时也不一定比过去的方法简单. 它的优点是至少对于一类问题提供了一种统一的思路.

例题 11.4.1 计算数列 $\{a_{n}\}$ 的极限, 其中通项为

$$
a _ {n} = \frac {1}{n + 1} + \frac {1}{n + 2} + \dots + \frac {1}{2 n}.
$$

解 这里用定积分方法的计算非常简单:

$$
\begin{array}{r l} \lim _ {n \to \infty} a _ {n} & = \lim _ {n \to \infty} \frac {1}{n} \left(\frac {1}{1 + \frac {1}{n}} + \frac {1}{1 + \frac {2}{n}} + \dots + \frac {1}{1 + \frac {n}{n}}\right) \\ & = \int_ {0} ^ {1} \frac {\mathrm{d} x}{1 + x} = \ln 2. \end{array}
$$

注 在过去对于本题已经有了两个解法. 这就是例题 2.5.4, 其中以 Euler 常数的命题 2.5.6 为工具, 以及 2.8.3 小节中巧用夹逼定理的方法. 本节的解法虽然需要积分学的知识, 但思路要简明得多.

例题 11.4.2 证明: $\lim_{n\to\infty}\frac{\sqrt[n]{n!}}{n}=\frac{1}{e}$ .

证 1 取对数后就不难写成积分和式:

$$
\ln \frac {\sqrt [ n ]{n !}}{n} = \frac {1}{n} \ln (n!) - \ln n = \frac {1}{n} \sum_ {k = 1} ^ {n} \ln k - \frac {1}{n} \sum_ {k = 1} ^ {n} \ln n = \frac {1}{n} \sum_ {k = 1} ^ {n} \ln \left(\frac {k}{n}\right).
$$

令 $n \to \infty$ , 注意到上式右端的极限为 $\int_0^1 \ln x \, \mathrm{d}x = -1$ , 便得到

$$
\lim _ {n \to \infty} \frac {\sqrt [ n ]{n !}}{n} = \frac {1}{\mathrm{e}}.
$$

注 这个题在过去已有几种解法 (见例题 2.5.3). 这里的方法从思路上是清楚的, 但是函数 $\ln x$ 在 $x = 0$ 右侧邻近无界, 因此所涉及的积分是第十二章中的广义积分. 而用和式取极限计算广义积分是要另行讨论的问题 (见例题 12.1.1).

不用积分和式的方法, 也可以用积分估计证明如下.

证 2 由于对数函数单调增加, 因而成立不等式

$$
\sum_ {k = 1} ^ {n - 1} \ln k <   \int_ {1} ^ {n} \ln x \mathrm{d} x <   \sum_ {k = 2} ^ {n} \ln k,
$$

这就是

$$
\ln (n - 1)! <   (x \ln x - x) \Big | _ {1} ^ {n} = n \ln n - n + 1 <   \ln n!,
$$

整理后得到关于 n! 的双边不等式:

$$
\mathrm{e} \left(\frac {n}{\mathrm{e}}\right) ^ {n} <   n! <   n \mathrm{e} \left(\frac {n}{\mathrm{e}}\right) ^ {n}.
$$

开 $n$ 次根后取极限, 利用 $\lim_{n\to \infty}\sqrt[n]{e} = 1,\lim_{n\to \infty}\sqrt[n]{n} = 1,$ 即可达到目的. □

在用定积分方法计算数列的极限时, 配合 Taylor 公式分离出主要部分也是需要掌握的方法.

## 例题11.4.3 计算极限

$$
\lim _ {n \rightarrow \infty} \left[\left(1 + \frac {1}{n}\right) \sin \frac {\pi}{n ^ {2}} + \left(1 + \frac {2}{n}\right) \sin \frac {2 \pi}{n ^ {2}} + \dots + \left(1 + \frac {n}{n}\right) \sin \frac {n \pi}{n ^ {2}} \right].
$$

解 记表达式为 $a_{n}$ . 由 Taylor 公式, 我们有

$$
\sin {\frac {k \pi}{n ^ {2}}} = \frac {k \pi}{n ^ {2}} + o \left(\left(\frac {k}{n ^ {2}}\right) ^ {2}\right) = \frac {k \pi}{n ^ {2}} + o \left(\frac {1}{n ^ {2}}\right), k = 1, 2, \dots , n.
$$

因此可计算如下:

$$
\begin{array}{r l} \lim _ {n \to \infty} a _ {n} & = \lim _ {n \to \infty} \left[ \sum_ {k = 1} ^ {n} \left(1 + \frac {k}{n}\right) \cdot \frac {k \pi}{n ^ {2}} + o \left(\frac {1}{n}\right) \right] \\ & = \lim _ {n \to \infty} \sum_ {k = 1} ^ {n} \frac {\pi}{n} \cdot \frac {k}{n} \cdot \left(1 + \frac {k}{n}\right) \\ & = \int_ {0} ^ {1} \pi x (1 + x)   \mathrm{d} x = \frac {5}{6} \pi . \end{array}
$$

## 11.4.2 Wallis 公式与 Stirling 公式

本小节将介绍与阶乘 $n!$ 有关的两个重要公式, 它们在处理有关阶乘的极限问题时非常有用.

第一个公式是数学家 Wallis 得到的 (1655 年), 因此称为 Wallis 公式 (其原文见 [4]). 它与 Viète 公式 (见 4.3.4 小节题 5) 都是关于圆周率的无穷乘积公式, 但在 Wallis 公式中只需要乘除运算, 连开方运算也不需要. Wallis 公式对于 $\pi$ 的近似计算没有直接影响, 但是在导出 Stirling 公式中将起重要作用.

命题 11.4.1 (Wallis 公式)

$$
\lim _ {n \to \infty} {\frac {1}{2 n + 1}} \left[ {\frac {2 \cdot 4 \cdot \cdots \cdot (2 n)}{1 \cdot 3 \cdot \cdots \cdot (2 n - 1)}} \right] ^ {2} = {\frac {\pi}{2}}.\tag{11.27}
$$

分析 回顾 2.3.2 小节的练习题 8 和 9, 我们看到 (11.27) 左边的极限存在性是容易证明的, 困难在于求出这个极限.

从例题10.4.9的积分计算已知 $I_{n} = \int_{0}^{\pi /2}\sin^{n}x\mathrm{d}x$ 的表达式为

$$
I _ {2 n} = \frac {(2 n - 1) ! !}{(2 n) ! !} \cdot \frac {\pi}{2}, \quad I _ {2 n + 1} = \frac {(2 n) ! !}{(2 n + 1) ! !}.\tag{11.28}
$$

这里的差异是显著的, 圆周率 $\pi$ 只出现在一个公式中!

将 $I_{n}$ 作为一个数列的通项, 则从例题10.2.4已知 $\{I_n\}$ 是无穷小量: $\lim_{n\to \infty}I_n = 0$ . 可以想像, 当 $n$ 充分大时, $I_{n}$ 与 $I_{n + 1}$ 之间的差是更高阶的无穷小量 (见310页的图10.3), 从而 $I_{2n + 1} / I_{2n}$ 的极限很有可能是1. 如果真是如此, 则就有可能得到关于 $\pi$ 的某种结果. 当然这里又遇到了0/0型的不定式, 但是由于有表达式(11.28), 因此不难处理.

证 在 $0 < x < \frac{\pi}{2}$ 时有 $0 < \sin x < 1$ , 因此就有 $\sin^{2n+2}x < \sin^{2n+1}x < \sin^{2n}x$ . 这样就成立 (积分) 不等式 $I_{2n+2} < I_{2n+1} < I_{2n}$ . 利用 (11.28), 得到

$$
I _ {2 n + 2} = \frac {2 n + 1}{2 n + 2} \cdot I _ {2 n} <   I _ {2 n + 1} <   I _ {2 n}.
$$

两边除以 $I_{2n}$ , 并取极限 (即夹逼), 可见确实有

$$
\lim _ {n \rightarrow \infty} \frac {I _ {2 n + 1}}{I _ {2 n}} = 1.
$$

再用 (11.28) 代入, 就得到所要的结果:

$$
\lim _ {n \rightarrow \infty} \frac {1}{2 n + 1} \left[ \frac {(2 n) ! !}{(2 n - 1) ! !} \right] ^ {2} \cdot \frac {2}{\pi} = 1.
$$

注 在应用中, Wallis 公式的几个等价形式有时更为方便, 例如:

$$
\frac {(2 n) ! !}{(2 n - 1) ! !} \sim \sqrt {\pi n},\tag{11.29}
$$

$$
\frac {(n !) ^ {2} 2 ^ {2 n}}{(2 n) !} \sim \sqrt {\pi n}.\tag{11.30}
$$

特别是公式 (11.29) 刻画了双阶乘 $(2n)!!$ 与 $(2n - 1)!!$ 之比的渐近性态, 是 Wallis 公式的一种便于使用的形式.

Stirling 公式 是关于阶乘 $n!$ 的重要结果, 具有广泛的应用. 其一般形式为

$$
\begin{array}{r l} \ln n! & = \ln \sqrt {2 \pi} + \left(n + \frac {1}{2}\right) \ln n - n + \frac {B _ {2}}{1 \cdot 2 n} + \frac {B _ {4}}{3 \cdot 4 n ^ {3}} + \dots \\ & + \frac {B _ {2 m}}{(2 m - 1) (2 m)   n ^ {2 m - 1}} + \theta_ {n} \cdot \frac {B _ {2 m + 2}}{(2 m + 1) (2 m + 2)   n ^ {2 m + 1}}, \end{array}\tag{11.31}
$$

其中 $0 < \theta_{n} < 1, B_{2n}$ 是Bernoulli数（见7.2.3小节）.

本书只给出含有上述公式右边前三项的最简单形式的Stirling公式的证明，而在第二组参考题15中指出如何可以得到更为精细的下一个公式的证明。一般形式的Stirling公式(11.31)可以从Euler-Maclaurin公式(11.22)推出。其他证明方法还有很多，有兴趣的读者可以参看近年来在《美国数学月刊》上发表的许多新方法。

命题 11.4.2（最简单形式的 Stirling 公式）关于阶乘 n! 有渐近公式:

$$
n! \sim \sqrt {2 \pi n} \left(\frac {n}{\mathrm{e}}\right) ^ {n} (n \rightarrow \infty).\tag{11.32}
$$

分析 关于阶乘 $n!$ 的结果很多. 就本书来说, 在前面的 1.3.2, 2.5.5, 2.7.3 各小节中都有关于 $n!$ 的不等式, 此外还有许多与极限有关的结果. 在 2.7.1 小节中还有对于 $n!$ 作为无穷大量的比较: $a^n \ll n! \ll n^n (a > 1)$ . 但如何确切地刻画 $n!$ 的渐近性态, 当时还是不清楚. 这就是 Stirling 公式要解决的问题.

从以前的结果出发, 可以得到许多启示. 首先, 从 2.5.5 小节练习题 7 就有对每个 $n \in \mathbf{N}_{+}$ 成立的不等式:

$$
\left(1 + \frac {1}{n}\right) ^ {n} <   b _ {n} = \frac {n ! \mathrm{e} ^ {n}}{n ^ {n}} <   n \cdot \left(1 + \frac {1}{n}\right) ^ {n + 1}.
$$

为了研究 $\{b_n\}$ 的性态, 自然要观察它的前后项之比, 这样就有

$$
\frac {b _ {n}}{b _ {n + 1}} = \frac {1}{\mathrm{e}} \left(1 + \frac {1}{n}\right) ^ {n} <   1,
$$

因此数列 $\{b_n\}$ 严格单调增加。这里只不过利用了关于数e的最初讨论（见命题2.5.1）。再利用例题8.2.3的结论，可见以 $\left(1 + \frac{1}{n}\right)^{n + \frac{1}{2}}$ 为通项的数列严格单调减少，且收敛于e。这样就得到

$$
\frac {b _ {n} \sqrt {n + 1}}{b _ {n + 1} \sqrt {n}} = \frac {b _ {n}}{b _ {n + 1}} \left(1 + \frac {1}{n}\right) ^ {\frac {1}{2}} = \frac {1}{\mathrm{e}} \left(1 + \frac {1}{n}\right) ^ {n + \frac {1}{2}} > 1,
$$

它就是下面证明的出发点.

证 定义数列

$$
a _ {n} = \frac {n ! \mathrm{e} ^ {n}}{n ^ {n + \frac {1}{2}}}, \quad n \in \mathbf {N} _ {+},
$$

则只需证明 $\{a_{n}\}$ 收敛于 $\sqrt{2\pi}$ . 为此写出其前后项之比:

$$
\frac {a _ {n}}{a _ {n + 1}} = \frac {1}{\mathrm{e}} \left(1 + \frac {1}{n}\right) ^ {n + \frac {1}{2}}.\tag{11.33}
$$

利用 $f(x) = 1 / x$ 下凸, 在 Hadamard 不等式 (例题 11.2.1) 中, 令 $x_{1} = n$ , $x_{2} = n + 1$ 代入, 得到不等式:

$$
\frac {1}{n + \frac {1}{2}} \leqslant \ln \left(1 + \frac {1}{n}\right) \leqslant \frac {1}{2} \left(\frac {1}{n} + \frac {1}{n + 1}\right).
$$

将上式乘 $\left(n + \frac{1}{2}\right)$ 并作整理, 得到等价的不等式:

$$
0 \leqslant \left(n + \frac {1}{2}\right) \ln \left(1 + \frac {1}{n}\right) - 1 \leqslant \frac {1}{4} \left(\frac {1}{n} - \frac {1}{n + 1}\right).\tag{11.34}
$$

将它与(11.33)作比较, 就有

$$
1 \leqslant \frac {a _ {n}}{a _ {n + 1}} \leqslant \mathrm{e} ^ {\frac {1}{4} \left(\frac {1}{n} - \frac {1}{n + 1}\right)}.\tag{11.35}
$$

这表明正数列 $\{a_{n}\}$ 单调减少, 因此收敛, 记其极限为 $\alpha$ . 同时从 (11.35) 的右边不等式又知道另一个正数列 $\{a_{n} \mathrm{e}^{-\frac{1}{4n}}\}$ 单调增加. 由于它的极限也是 $\alpha$ , 这样就证明了 $\alpha > 0$ .

利用 Wallis 公式 (11.27) 或 (11.30), 并用 $n! = a_n \cdot \frac{n^{n + \frac{1}{2}}}{\mathrm{e}^n}$ 代入, 就有

$$
\sqrt {\pi} = \lim _ {n \to \infty} \frac {(n !) ^ {2} 2 ^ {2 n}}{(2 n) ! \sqrt {n}} = \lim _ {n \to \infty} \frac {a _ {n} ^ {2}}{a _ {2 n} \sqrt {2}} = \frac {\alpha^ {2}}{\alpha \sqrt {2}},\tag{11.36}
$$

可见极限 $\alpha = \sqrt{2\pi}$ .

注 对于数列 $\{a_{n}\}$ 不仅要证明它收敛, 而且还必须证明其极限 $\alpha > 0$ , 否则 (11.36) 的最后一步通不过. 有不少文献忽略了这一点. 上述证明来自 [8].

## 11.4.3 Taylor 公式的积分型余项

在第七章“微分学的基本定理”中已介绍了带有 Peano 余项、Lagrange 余项与 Cauchy 余项的 Taylor 公式. 这里将介绍带积分型余项的 Taylor 公式.

命题11.4.3设 $f(x)$ 在区间 $(x_0 - r, x_0 + r)$ 上有 $n + 1$ 阶连续导函数，则对每个 $x \in (x_0 - r, x_0 + r)$ 成立

$$
f (x) = \sum_ {k = 0} ^ {n} {\frac {f ^ {(k)} (x _ {0})}{k !}} (x - x _ {0}) ^ {k} + R _ {n} (x),
$$

其中余项

$$
R _ {n} (x) = \frac {1}{n !} \int_ {x _ {0}} ^ {x} f ^ {(n + 1)} (t) (x - t) ^ {n} \mathrm{d} t.\tag{11.37}
$$

证 从

$$
R _ {n} (x) = f (x) - \sum_ {k = 0} ^ {n} {\frac {f ^ {(k)} (x _ {0})}{k !}} (x - x _ {0}) ^ {k},
$$

可以得到

$$
R _ {n} ^ {(k)} (x _ {0}) = 0, k = 1, 2, \dots , n, R _ {n} ^ {(n + 1)} (x) = f ^ {(n + 1)} (x).
$$

利用逐次分部积分运算就可以有

$$
\begin{array}{r l} R _ {n} (x) & = \int_ {x _ {0}} ^ {x} R _ {n} ^ {\prime} (t) \mathrm{d} t = (t - x) R _ {n} ^ {\prime} (t) \Big | _ {x _ {0}} ^ {x} + \int_ {x _ {0}} ^ {x} R _ {n} ^ {\prime \prime} (t) (x - t) \mathrm{d} t \\ & = \int_ {x _ {0}} ^ {x} R _ {n} ^ {\prime \prime} (t) (x - t) \mathrm{d} t = \frac {1}{2} \int_ {x _ {0}} ^ {x} R _ {n} ^ {\prime \prime \prime} (t) (x - t) ^ {2} \mathrm{d} t \\ & = \dots = \frac {1}{n !} \int_ {x _ {0}} ^ {x} R _ {n} ^ {(n + 1)} (t) (x - t) ^ {n} \mathrm{d} t \\ & = \frac {1}{n !} \int_ {x _ {0}} ^ {x} f ^ {(n + 1)} (t) (x - t) ^ {n} \mathrm{d} t. \end{array}
$$

注 (1) 对余项 (11.37) 右边用第一中值定理, 在 $x_0$ 与 $x$ 之间有 $\xi$ , 使得

$$
\begin{array}{r l} R _ {n} (x) & = \frac {1}{n !} \int_ {x _ {0}} ^ {x} f ^ {(n + 1)} (t) (x - t) ^ {n} \mathrm{d} t = \frac {1}{n !} f ^ {(n + 1)} (\xi) \int_ {x _ {0}} ^ {x} (x - t) ^ {n} \mathrm{d} t \\ & = - \frac {1}{(n + 1) !} f ^ {(n + 1)} (\xi) (x - t) ^ {n + 1} \Bigg | _ {x _ {0}} ^ {x} \\ & = \frac {1}{(n + 1) !} f ^ {(n + 1)} (\xi) (x - x _ {0}) ^ {n + 1}. \end{array}
$$

这就是 Lagrange 余项 (命题 7.2.3).

(2) 在 (11.37) 右边的积分中, 把被积函数看作 $f^{(n + 1)}(t)(x - t)^n$ 与 1 的乘积, 由积分第一中值定理, 存在 $\xi$ 在 $x_0$ 与 $x$ 之间, 使

$$
\begin{array}{r l} R _ {n} (x) & = \frac {1}{n !} f ^ {(n + 1)} (\xi) (x - \xi) ^ {n} \int_ {x _ {0}} ^ {x} \mathrm{d} t \\ & = \frac {1}{n !} f ^ {(n + 1)} (\xi) (x - \xi) ^ {n} (x - x _ {0}). \end{array}
$$

将 $\xi$ 改写成 $\xi = x_0 + \eta (x - x_0), 0 \leqslant \eta \leqslant 1$ , 则上式成为

$$
R _ {n} (x) = \frac {1}{n !} f ^ {(n + 1)} (x _ {0} + \eta (x - x _ {0})) (1 - \eta) ^ {n} (x - x _ {0}) ^ {n + 1}.
$$

这就是 Cauchy 余项 (命题 7.2.4).

(3) Lagrange 余项与 Cauchy 余项分别含有不完全确定的中值 $\xi$ 与 $\eta$ , 而积分型余项中则不含中值, 这无疑是一个优点. 由于这个原因, 带积分型余项的 Taylor 公式常被用于比较精确的表达式中.

## 11.4.4 $\pi$ 的无理性证明

作为定积分的又一方面的应用, 我们证明 $\pi$ 是无理数. 下面的证法是由 I. Niven (尼文) 提出的 (见 [4]). 这方面较新的材料见《美国数学月刊》(2001) 第 108 卷 222-231 页 (《数学译林》(2001) 第 3 期).

命题 11.4.4 $\pi$ 是无理数.

证 用反证法. 假定 $\pi$ 是有理数, 则可设 $\pi = \frac{a}{b}$ , 其中 $a, b$ 为正整数. 定义辅助函数

$$
f (x) = \frac {x ^ {n} (a - b x) ^ {n}}{n !} = \frac {b ^ {n} x ^ {n} (\pi - x) ^ {n}}{n !}.
$$

这是一个多项式, 其中各项的次数从 $n$ 到 $2n$ . 可以证明: 对每一项求任意阶导数后, 再令 $x = 0$ 代入, 只能得到 0 或者整数. 实际上这里只有三种情况: (1) 该项求导后仍含有因子 $x$ ; (2) 该项求导后已经是常数 0; (3) 该项求导后为非零常数. 只需要讨论情况 (3). 假设求导之前该项为 $cx^k$ , 则情况 (3) 只能是对该项求 $k$ 阶导数的结果, 这时得到的值是 $k!c$ . 由于 $c$ 是整数除以 $n!$ 得到的有理数, 而 $k \geqslant n$ , 因此 $k!c$ 一定是整数.

这就证明了对任意正整数 i, $f^{(i)}(0)$ 都是整数.

又由 $f(x)$ 的表达式可知 $f(x) = f(\pi - x)$ , 因此对任意正整数 $i$ , $f^{(i)}(\pi) = (-1)^n f^{(i)}(0)$ 也是整数.

然后我们要证明定积分

$$
\int_ {0} ^ {\pi} f (x) \sin x \mathrm{d} x\tag{11.38}
$$

的值也是整数. 对这个积分用分部积分得到

$$
\begin{array}{r l} \int_ {0} ^ {\pi} f (x) \sin x \mathrm{d} x & = f (x) (- \cos x) \Big | _ {0} ^ {\pi} + \int_ {0} ^ {\pi} f ^ {\prime} (x) \cos x \mathrm{d} x \\ & = f (0) + f (\pi) + f ^ {\prime} (x) \sin x \Big | _ {0} ^ {\pi} - \int_ {0} ^ {\pi} f ^ {\prime \prime} (x) \sin x \mathrm{d} x \\ & = f (0) + f (\pi) - \int_ {0} ^ {\pi} f ^ {\prime \prime} (x) \sin x \mathrm{d} x. \end{array}
$$

由于 f 为 2n 次多项式, 重复以上过程, 最后的结果是

$$
\int_ {0} ^ {\pi} f (x) \sin x \mathrm{d} x = f (0) + f (\pi) - f ^ {\prime \prime} (0) - f ^ {\prime \prime} (\pi) + \dots + (- 1) ^ {n} f ^ {(2 n)} (0) + (- 1) ^ {n} f ^ {(2 n)} (\pi).
$$

根据前面的分析, 可见左边的积分值是整数.

另一方面，在区间 $[0, \pi]$ 上， $0 \leqslant a - bx = b(\pi - x) \leqslant a$ ，因此对 $f(x)$ 有估计式

$$
0 \leqslant f (x) = \frac {x ^ {n} (a - b x) ^ {n}}{n !} \leqslant \frac {\pi^ {n} a ^ {n}}{n !},
$$

这样就得到对于积分 (11.38) 的估计:

$$
0 <   \int_ {0} ^ {\pi} f (x) \sin x \mathrm{d} x \leqslant \int_ {0} ^ {\pi} f (x) \mathrm{d} x <   \frac {\pi^ {n + 1} a ^ {n}}{n !}.
$$

由于当 $n \to \infty$ 时 $n!$ 是较 $\pi^n a^n$ 更为高阶的无穷大量, 因此只要取 $n$ 充分大, 上式右边就小于1. 这与积分 (11.38) 为整数不相容. 因此 $\pi$ 不能是有理数, 而只能是无理数.

一个复数, 如果它是某个整系数代数方程的根, 则称之为代数数, 否则, 就称之为超越数. 命题 2.5.5 已经证明数 e 是无理数. 在它的注解中还提到 e 还是超越数. $\pi$ 的情况也是如此. Lindemann (林德曼) 于 1882 年证明了 $\pi$ 是超越数, 从而最后解决了用圆规和直尺不可能化圆为方这个古希腊三大几何难题中的最后一个问题. 关于 e 和 $\pi$ 的超越性证明可看 [53, 55, 4] 等.

## 11.4.5 练习题

1. 求下列极限:

(1) $\lim_{n\to\infty}n\left(\frac{1}{n^{2}+1^{2}}+\frac{1}{n^{2}+2^{2}}+\cdots+\frac{1}{2n^{2}}\right);$ 

(2) $\lim_{n\to\infty}\left[\frac{1}{\sqrt{n^{2}}}+\frac{1}{\sqrt{n(n+1)}}+\cdots+\frac{1}{\sqrt{n(2n-1)}}\right];$ 

(3) $\lim_{n\to\infty}\frac{\left[1^{a}+3^{a}+\cdots+(2n+1)^{a}\right]^{b+1}}{\left[2^{b}+4^{b}+\cdots+(2n)^{b}\right]^{a+1}}$ ，其中 $a,b\neq-1$ ;

$$
\lim _ {n \to \infty} \prod_ {k = 0} ^ {n - 1} \left(2 + \cos \frac {k \pi}{n}\right) ^ {\pi / n}; \tag {4}
$$

$$
\lim _ {n \rightarrow \infty} \frac {1}{n} \sqrt [ n ]{n (n + 1) \cdots (2 n - 1)}; \tag {5}
$$

$$
\lim _ {n \to \infty} \frac {1}{n ^ {2}} \sum_ {k = 1} ^ {n} \sqrt {(n x + k) (n x + k - 1)} \quad (x > 0). \tag {6}
$$

(题 (4) 可利用第十一章第二组参考题 2 中的 Poisson 积分, 题 (6) 可利用第十章第一组参考题 3.)

2. 证明对于区间 $\left(\frac{2}{3}, 1\right)$ 中的数 $A$ , 存在 $N$ 使 $n > N$ 时, 成立

$$
\sqrt {1} + \sqrt {2} + \dots + \sqrt {n} <   A n ^ {\frac {3}{2}},
$$

并与 11.3.3 小节的题 5 在方法和结果上进行比较.

3. 设 $f(x) \in C[0,1]$ , $f(x)$ 处处大于 0, 求极限

$$
\lim _ {n \rightarrow \infty} \sqrt [ n ]{f \left(\frac {1}{n}\right) f \left(\frac {2}{n}\right) \dots f \left(\frac {n - 1}{n}\right) f (1)},
$$

由此导出算术平均值 - 几何平均值不等式的积分形式, 并与 11.2.1 小节的不等式 (11.10) 作比较.

4. 设 $A_{n}=\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{2n}$ ，求 $\lim_{n\to\infty}n(\ln2-A_{n})$ .

5. 设 $B_{n}=\frac{2}{2n+1}+\frac{2}{2n+3}+\cdots+\frac{2}{4n-1}$ ，求 $\lim_{n\to\infty}n^{2}(\ln2-B_{n})$ .

6. 求 $\lim_{n\to \infty}\sqrt{n}\int_{-1}^{1}(1 - x^2)^n\mathrm{d}x.$ 

7. 试从 Stirling 公式 (命题 11.4.2) 的证明中推导出

$$
n! = \sqrt {2 \pi n} \left(\frac {n}{\mathrm{e}}\right) ^ {n} \mathrm{e} ^ {\frac {\theta_ {n}}{4 n}},
$$

其中 $0 < \theta_{n} < 1$ .

(在第十一章第二组参考题 15 中有更好的结果, 但需要比 (11.34) 更强的不等式.)

8. 试写出 $(2n)!!, (2n - 1)!!$ 和 $\mathrm{C}_{2n}^{n}$ 的渐近公式.

9. 利用 Stirling 公式计算下列极限:

(1) $\lim_{n\to \infty}\left(1 + \frac{1}{n}\right)^{n^2}\cdot \frac{n!}{n^n\sqrt{n}};$ (2) $\lim_{n\to \infty}(-1)^{n}\binom{-1 / 2}{n}\sqrt{n}.$ 

10. 证明: $\lim_{n\to \infty}\sqrt{n}\prod_{k=1}^{n}\frac{\mathrm{e}^{1-\frac{1}{k}}}{\left(1+\frac{1}{k}\right)^k}=\frac{\sqrt{2\pi}}{\mathrm{e}^{1+\gamma}}$ , 其中 $\gamma$ 是 Euler 常数.

## §11.5 对于教学的建议

## 11.5.1 学习要点

1. 在第一节中所说的“微元法”虽然不是一种严格的数学方法, 但是在学习多元微积分以前, 对于一些利用定积分进行计算的几何与物理问题, 我们还经常要利用它. 在教学上, 对这种方法不作严格论证, 只要使学生在一些具体计算问题中能够使用就行了.

2. 本章分各个专题介绍积分学的应用, 与上一章一起组成积分学的比较完整的内容. 本章的取材是围绕积分学中的基本内容来选取的, 其中考虑到了本科和考研两方面的需要. 由于篇幅所限, 没有能够收入积分学在力学和物理学等方面的应用, 在数值积分方面也未作更多的介绍. 在这些方面 [27, 59] 的第四章提供了一定的补充材料, 可供读者选用.

3. 对习题课的建议 本章除了积分学在几何上的应用之外, 对于本科学习来说, 至少需要学习利用定积分计算某些数列的极限 (11.4.1 小节) 和 Stirling 公式 (11.32). 这些内容对于前面的数列极限内容也是重要的补充和发展. 至于其他内容, 则机动余地较大, 教师可以根据教材和学生情况来决定取舍.

## 11.5.2 参考题

## 第一组参考题

1. 设 $f \in C^{1}[0,1]$ ，且 $f(0) = 0, f(1) = 1$ ，证明：

$$
\int_ {0} ^ {1} | f (x) - f ^ {\prime} (x) | \mathrm{d} x \geqslant \frac {1}{\mathrm{e}}.
$$

2. 设 $a > 0$ , 证明:

$$
\int_ {0} ^ {\pi} x a ^ {\sin x} \mathrm{d} x \int_ {0} ^ {\pi / 2} a ^ {- \cos x} \mathrm{d} x \geqslant \frac {\pi^ {3}}{4}.
$$

3. (Tchebycheff (切比雪夫) 不等式) (1) 设 $F \in C[a, b]$ , 处处大于 0, 且单调减少, 证明:

$$
\int_ {a} ^ {b} F (x) \mathrm{d} x \int_ {a} ^ {b} x F ^ {2} (x) \mathrm{d} x \leqslant \int_ {a} ^ {b} F ^ {2} (x) \mathrm{d} x \int_ {a} ^ {b} x F (x) \mathrm{d} x;
$$

(2) 设 $f, g$ 在区间 $[a, b]$ 上可积, 且对于任何 $x < y$ 具有性质 $(f(x) - f(y))(g(x) - g(y)) \geqslant 0$ , 又设 $p \in R[a, b]$ , 且处处大于 0, 证明:

$$
\int_ {a} ^ {b} p (x) f (x) \mathrm{d} x \int_ {a} ^ {b} p (x) g (x) \mathrm{d} x \leqslant \int_ {a} ^ {b} p (x) \mathrm{d} x \int_ {a} ^ {b} p (x) f (x) g (x) \mathrm{d} x.
$$

4. 设 $f$ 在 $[0,1]$ 上连续, 且 $0 \leqslant f(x) < 1$ , 证明:

$$
\int_ {0} ^ {1} \frac {f (x)}{1 - f (x)} \mathrm{d} x \geqslant \frac {\int_ {0} ^ {1} f (x) \mathrm{d} x}{1 - \int_ {0} ^ {1} f (x) \mathrm{d} x}.
$$

5. 证明不等式:

$$
\int_ {0} ^ {1} {\frac {\cos x}{\sqrt {1 - x ^ {2}}}} \mathrm{d} x \geqslant \int_ {0} ^ {1} {\frac {\sin x}{\sqrt {1 - x ^ {2}}}} \mathrm{d} x.
$$

6. 设 $f^{(2n)} \in C[a, b]$ ，且 $f^{(k)}(a) = f^{(k)}(b) = 0, k = 0, 1, 2, \cdots, n - 1$ ，证明：

$$
\left| \int_ {a} ^ {b} f (x) \mathrm{d} x \right| \leqslant \frac {(n !) ^ {2} (b - a) ^ {2 n + 1}}{(2 n) ! (2 n + 1) !} \cdot \max _ {a \leqslant x \leqslant b} \{| f ^ {(2 n)} (x) | \}.
$$

7. 设函数 $f, g \in C[a, b]$ , 且 $f(x) \neq 0$ , $g(x)$ 处处大于 0. 记

$$
d _ {n} = \int_ {a} ^ {b} | f (x) | ^ {n} g (x) \mathrm{d} x, n = 1, 2, \dots ,
$$

证明: 数列 $\left\{\frac{d_{n+1}}{d_{n}}\right\}$ 收敛, 并求出其极限.

8. 计算 $\lim_{n\to\infty}\left[\frac{\sin(\pi/n)}{n+1}+\frac{\sin(2\pi/n)}{n+1/2}+\cdots+\frac{\sin\pi}{n+1/n}\right]$ .

9. 对任意实数 $a$ , 证明: $\lim_{n \to \infty} \prod_{k=1}^{n+1} \cos \left( \frac{\sqrt{2k-1}}{n} a^2 \right) = e^{-\frac{a^4}{2}}$ .

10. 设 $f$ 是 $[1, +\infty)$ 上的非负单调减少函数, 令

$$
a _ {n} = \sum_ {k = 1} ^ {n} f (k) - \int_ {1} ^ {n} f (x) \mathrm{d} x, n \in \mathbf {N} _ {+},
$$

证明: 数列 $\{a_{n}\}$ 收敛.

(这是“面积原理”的一种简单情况 (参见 [26]). 取 $f(x) = \frac{1}{x}$ ，就得到关于 Euler 常数的命题 2.5.6; 取 $f(x) = \frac{1}{\sqrt{x}}$ ，就是第二章第一组参考题 14.)

11. 计算积分 $\int_0^1\sin x^2\mathrm{d}x,$ 使得误差不超过0.001.

12. 证明: 函数 $F(x) = \int_{0}^{x} \sin \frac{1}{t} \, \mathrm{d}t$ 在区间 $(0,1]$ 上有无穷多个零点.

13. 设 $f$ 在 $[a, b]$ 上可导, $f'$ 单调增加且有 $f'(x) \geqslant m > 0$ , 证明:

$$
\left| \int_ {a} ^ {b} \cos f (x) \mathrm{d} x \right| \leqslant \frac {2}{m}.
$$

14. 设 $f$ 在 $[a, b]$ 上连续可微, 且满足 $f'(x) \geqslant m > 0$ , $|f(x)| \leqslant \pi$ , 证明:

$$
\left| \int_ {a} ^ {b} \sin f (x) \mathrm{d} x \right| \leqslant \frac {2}{m}.
$$

15. 对 $n \in \mathbf{N}_{+}$ , 定义

$$
S _ {n} = 1 + \frac {n - 1}{n + 2} + \frac {n - 1}{n + 2} \cdot \frac {n - 2}{n + 3} + \dots + \frac {n - 1}{n + 2} \cdot \frac {n - 2}{n + 3} \cdot \dots \cdot \frac {1}{2 n},
$$

证明： $\lim_{n\to \infty}\frac{S_n}{\sqrt{n}} = \frac{\sqrt{\pi}}{2}.$ 

## 第二组参考题

1. 曲线 $K$ 的极坐标方程为 $\rho = \rho(\theta)$ , $0 \leqslant \theta \leqslant \pi$ , $\rho \in C[0, \pi]$ , 且已知 $K$ 上任何两点之间的距离不超过 1, 证明: 由曲线 $K$ 与射线 $\theta = 0$ , $\theta = \pi$ 围成的扇形面积

$$
S = \frac {1}{2} \int_ {0} ^ {\pi} \rho^ {2} (\theta) \mathrm{d} \theta \leqslant \frac {\pi}{4}.
$$

(由此可见, 直径不超过 1 的图形面积最多为 $\pi/4$ .)

2. 设 $f \in C[a, b]$ ，且处处大于 0。记 $f_{kn} = f(a + kh_n)$ ， $h_n = (b - a)/n$ ， $k = 1, 2, \cdots, n$ 。证明：

$$
\lim _ {n \to \infty} {\sqrt [ n ]{f _ {1 n} f _ {2 n} \cdots f _ {n n}}} = \exp \left[ {\frac {1}{b - a}} \int_ {a} ^ {b} \ln f (x)   \mathrm{d} x \right],
$$

并用于证明 (Poisson 积分):

$$
\frac {1}{2 \pi} \int_ {0} ^ {2 \pi} \ln (1 - 2 r \cos x + r ^ {2}) \mathrm{d} x = 2 \ln r,
$$

其中 $r > 1$ 

3. 设 $f \in C[0,1]$ , $\int_{0}^{1} x^{2} f(x) \, \mathrm{d}x = 1$ .

(1) 证明: $\max_{0 \leqslant x \leqslant 1} \{|f(x)|\} \geqslant 3$ ;

(2) 又知 $\int_{0}^{1} x f(x) \, \mathrm{d}x = 0$ , 证明: $\max_{0 \leqslant x \leqslant 1} \{|f(x)|\} > 10.2$ .

4. 设 $f \in C[0,1]$ , 如果对某个正整数 $n > 1$ , 成立

$$
\int_ {0} ^ {1} f (x) \mathrm{d} x = \int_ {0} ^ {1} x f (x) \mathrm{d} x = \dots = \int_ {0} ^ {1} x ^ {n - 1} f (x) \mathrm{d} x = 0, \int_ {0} ^ {1} x ^ {n} f (x) \mathrm{d} x = 1,
$$

求证: $M = \max_{0 \leqslant x \leqslant 1} \{|f(x)|\} \geqslant 2^{n}(n+1)$ .

5. 求出使不等式

$$
c _ {1} \leqslant \int_ {a} ^ {b} \frac {\sin x}{x} \mathrm{d} x \leqslant c _ {2}
$$

成立的最佳常数 $c_{1}, c_{2}$ ，对其中的积分限分两种情况讨论: (1) $0 \leqslant a < b$ ; (2) a < b.

6. 在命题 11.2.3 (即 Young 不等式) 中的可微条件可以去掉, 此外还可以得到另一个方向的不等式. 设 $f \in C[0, +\infty)$ , 严格单调增加, 且 $f(0) = 0$ , 记其反函数为 $g(y)$ . 对 $a, b > 0$ , 证明下列不等式并解释其几何意义:

$$
a b \leqslant \int_ {0} ^ {a} f (x) \mathrm{d} x + \int_ {0} ^ {b} g (y) \mathrm{d} y \leqslant b g (b) + a f (a) - f (a) g (b),
$$

其中成立等号的充分必要条件是 $b = f(a)$ (即 $a = g(b)$ ).

7. 设 $f \in C(a, b)$ , 证明:

(1) 若对任何 $a < x_{1} < x_{2} < b$ 成立不等式

$$
f \left(\frac {x _ {1} + x _ {2}}{2}\right) \leqslant \frac {1}{x _ {2} - x _ {1}} \int_ {x _ {1}} ^ {x _ {2}} f (x) \mathrm{d} x,
$$

则 f 为下凸函数;

(2) 若对任何 $a < x_{1} < x_{2} < b$ 成立不等式

$$
\frac {1}{x _ {2} - x _ {1}} \int_ {x _ {1}} ^ {x _ {2}} f (x) \mathrm{d} x \leqslant \frac {f (x _ {1}) + f (x _ {2})}{2},
$$

则 f 为下凸函数;

(3) 若以上两个不等式中的任何一个始终成立等号, 则 $f$ 只能是线性函数.

(因此 Hadamard 不等式 (11.7) 中的每个不等式都是 f 下凸的充分必要条件.)

8. 设 $f \in C^{1}[0, a]$ , $f(0) = 0$ .

(1) 证明:

$$
\int_ {0} ^ {a} | f (x) f ^ {\prime} (x) | \mathrm{d} x \leqslant \frac {a}{2} \int_ {0} ^ {a} | f ^ {\prime} (x) | ^ {2} \mathrm{d} x,
$$

且其中成立等号当且仅当 $f(x)=cx;$ 

(2) (Opial 不等式) 增加条件 $f(a) = 0$ , $f$ 在 $(0, a)$ 上大于 0, 证明:

$$
\int_ {0} ^ {a} | f (x) f ^ {\prime} (x) | \mathrm{d} x \leqslant \frac {a}{4} \int_ {0} ^ {a} | f ^ {\prime} (x) | ^ {2} \mathrm{d} x.
$$

9. (Bellman-Gronwall 不等式) 设当 $x \geqslant 0$ 时 $f(x), g(x)$ 为非负连续函数, 且有

$$
f (x) \leqslant A + \int_ {0} ^ {x} f (t) g (t) \mathrm{d} t,
$$

其中 $A > 0$ ，证明：当 $x\geqslant 0$ 时

$$
f (x) \leqslant A \exp \left(\int_ {0} ^ {x} g (t) \mathrm{d} t\right).
$$

10. 设 $f \in C^2[0,1]$ , $f(0) = f(1) = 0$ , $f$ 在 (0,1) 中无零点, 证明:

$$
\int_ {0} ^ {1} \left| \frac {f ^ {\prime \prime} (x)}{f (x)} \right| \mathrm{d} x > 4,
$$

且其中 4 是最佳下界.

11. 设 $f$ 在 $[0,1]$ 上可积, 且有 $0 < m \leqslant f(x) \leqslant M$ , 则有

$$
\int_ {0} ^ {1} f (x) \mathrm{d} x \int_ {0} ^ {1} {\frac {1}{f (x)}} \mathrm{d} x \leqslant {\frac {(m + M) ^ {2}}{4 m M}}.
$$

(这是 Cauchy-Schwarz 不等式的反向不等式, 也称为 Kantorovich (康托罗维奇) 不等式.)

12. 设非常值函数 $f$ 在区间 $[a, b]$ 上可微, 且 $f(a) = f(b) = 0$ , 证明: 在 $[a, b]$ 内至少存在一点 $\xi$ , 使

$$
| f ^ {\prime} (\xi) | > \frac {4}{(b - a) ^ {2}} \int_ {a} ^ {b} | f (x) | \mathrm{d} x.
$$

13. 设 $f \in C^2[0,1]$ , $f(0) = f(1) = f'(0) = 0$ , $f'(1) = 1$ , 证明:

$$
\int_ {0} ^ {1} (f ^ {\prime \prime} (x)) ^ {2} \mathrm{d} x \geqslant 4,
$$

且其中成立等式当且仅当 $f(x)=x^{3}-x^{2}$ .

14. 设函数 $f$ 在区间 $[a, b]$ 上处处大于 0，且对于 $L > 0$ 满足 Lipschitz 条件 $|f(x_1) - f(x_2)| \leqslant L|x_1 - x_2|$ ，又已知对于 $a \leqslant c \leqslant d \leqslant b$ 有

$$
\int_ {c} ^ {d} \frac {\mathrm{d} x}{f (x)} = \alpha , \quad \int_ {a} ^ {b} \frac {\mathrm{d} x}{f (x)} = \beta ,
$$

证明下列积分不等式:

$$
\int_ {a} ^ {b} f (x) \mathrm{d} x \leqslant \frac {\mathrm{e} ^ {2 L \beta} - 1}{2 L \alpha} \int_ {c} ^ {d} f (x) \mathrm{d} x.
$$

15. 先用微分学或其他方法证明: 当 $0 < x < 1$ 时, 成立不等式

$$
0 <   \frac {1}{2} \ln \frac {1 + x}{1 - x} - x <   \frac {x ^ {3}}{3 (1 - x ^ {2})},
$$

并用 $x = 1 / (2n + 1)$ 代入, 得到比 (11.34) 更强的不等式. 然后证明比 (11.32) 更为精细的 Stirling 公式, 也就是一般性公式 (11.31) 中 $m = 0$ 的情况:

$$
\ln n! = \ln \sqrt {2 \pi} + \left(n + \frac {1}{2}\right) \ln n - n + \frac {\theta_ {n}}{1 2 n},
$$

或者其等价形式:

$$
n! = \sqrt {2 \pi n} \left(\frac {n}{\mathrm{e}}\right) ^ {n} \mathrm{e} ^ {\frac {\theta_ {n}}{1 2 n}},
$$

其中 $0 < \theta_{n} < 1$ .
