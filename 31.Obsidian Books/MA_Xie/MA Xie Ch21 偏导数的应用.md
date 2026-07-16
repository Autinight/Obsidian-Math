

# 第二十一章 偏导数的应用

本章介绍偏导数在几个方面的应用. §21.1 是偏导数在几何上的应用. §21.2 是方向导数与梯度. §21.3 讨论 Taylor 公式与极值问题. §21.4 是条件极值与条件最值. §21.5 是向量值函数的 Rolle 定理, 这可以作为习题课的补充材料. 最后一节是学习要点和两组参考题.

我们在本章的讨论中特别强调用向量与矩阵语言描述和处理多元问题, 对条件最值的求解作了比较详细的讨论.

## §21.1 偏导数在几何上的应用

### 21.1.1 曲线的切向量、切线与法平面

设空间曲线 l 在点 $(x_{0}, y_{0}, z_{0})$ 处的切向量为

$$
\boldsymbol {\tau} = \left(\tau_ {x}, \tau_ {y}, \tau_ {z}\right),
$$

则曲线 l 在点 $(x_{0}, y_{0}, z_{0})$ 的切线方程与法平面方程分别是

$$
\begin{array}{c} \frac {x - x _ {0}}{\tau_ {x}} = \frac {y - y _ {0}}{\tau_ {y}} = \frac {z - z _ {0}}{\tau_ {z}}, \\ \tau_ {x} (x - x _ {0}) + \tau_ {y} (y - y _ {0}) + \tau_ {z} (z - z _ {0}) = 0. \end{array}
$$

如果空间曲线 $l$ 的参数方程是

$$
x = x (t), \quad y = y (t), \quad z = z (t), \quad a \leqslant t \leqslant b,
$$

其中 t 是参数. 又设 $x'(t)$ , $y'(t)$ , $z'(t)$ 都在 [a, b] 上连续, 并且不同时为 0, 这样的曲线称为光滑曲线. 这时曲线上点 $(x_{0}, y_{0}, z_{0}) = (x(t_{0}), y(t_{0}), z(t_{0}))$ 的切向量为

$$
\tau = (x ^ {\prime} (t _ {0}), y ^ {\prime} (t _ {0}), z ^ {\prime} (t _ {0})).
$$

如果空间曲线 $l$ 是用两个曲面

$$
F (x, y, z) = 0, \quad G (x, y, z) = 0
$$

的交线来表示的，又设 $F$ 和 $G$ 关于 $x, y, z$ 有连续的偏导数。点 $\pmb{p}_0(x_0, y_0, z_0)$ 满足这一方程组，即 $F(x_0, y_0, z_0) = 0, G(x_0, y_0, z_0) = 0$ ，并且 $F, G$ 的 Jacobi 矩阵

$$
\left( \begin{array}{c c c} \frac {\partial F}{\partial x} & \frac {\partial F}{\partial y} & \frac {\partial F}{\partial z} \\ \frac {\partial G}{\partial x} & \frac {\partial G}{\partial y} & \frac {\partial G}{\partial z} \end{array} \right)
$$

在点 $p_{0}$ 的秩为2，则曲线l在点 $p_{0}$ 的切向量为

$$
\tau = \left. \left(\frac {\partial (F , G)}{\partial (y , z)}, \frac {\partial (F , G)}{\partial (z , x)}, \frac {\partial (F , G)}{\partial (x , y)}\right) \right| _ {p _ {0}}.
$$

例题 21.1.1 设 $f(x,y)$ 为可微函数, 曲线方程为

$$
z = f (x, y), \frac {x - x _ {0}}{\cos \alpha} = \frac {y - y _ {0}}{\sin \alpha}.
$$

求曲线上点 $M_{0}(x_{0},y_{0},z_{0})$ 的切线与 xOy 平面所成角的正切.

解 令 $F(x,y,z) = z - f(x,y), G(x,y,z) = \sin \alpha (x - x_0) - \cos \alpha (y - y_0)$ ，则

$$
\frac {\partial (F , G)}{\partial (y , z)} = \left| \begin{array}{c c} - f _ {y} & 1 \\ - \cos \alpha & 0 \end{array} \right| = \cos \alpha , \quad \frac {\partial (F , G)}{\partial (z , x)} = \left| \begin{array}{c c} 1 & - f _ {x} \\ 0 & \sin \alpha \end{array} \right| = \sin \alpha ,
$$

$$
\frac {\partial (F , G)}{\partial (x , y)} = \left| \begin{array}{c c} - f _ {x} & - f _ {y} \\ \sin \alpha & - \cos \alpha \end{array} \right| = f _ {x} \cos \alpha + f _ {y} \sin \alpha .
$$

于是曲线上点 $M_0(x_0,y_0,z_0)$ 的切线与 $z$ 轴正方向所成夹角 $\varphi$ 的余弦为

$$
\cos \varphi = \frac {f _ {x} (x _ {0} , y _ {0}) \cos \alpha + f _ {y} (x _ {0} , y _ {0}) \sin \alpha}{\sqrt {1 + [ f _ {x} (x _ {0} , y _ {0}) \cos \alpha + f _ {y} (x _ {0} , y _ {0}) \sin \alpha ] ^ {2}}}.
$$

由此可计算出切线与 $xOy$ 平面所成角的正切为

$$
f _ {x} (x _ {0}, y _ {0}) \cos \alpha + f _ {y} (x _ {0}, y _ {0}) \sin \alpha .
$$

### 21.1.2 曲面的法向量、法线与切平面

光滑曲面 $z = f(x, y)$ 在点 $(x, y, z)$ 处的法向量为

$$
\boldsymbol {n} = \pm (f _ {x} (x, y), f _ {y} (x, y), - 1).
$$

这里所说的光滑是指偏导数连续.

由 $F(x,y,z)=0$ 确定的光滑曲面在 $(x,y,z)$ 处的法向量为

$$
\boldsymbol {n} = \pm (F _ {x} (x, y, z), F _ {y} (x, y, z), F _ {z} (x, y, z)),
$$

其中 $F_{x}, F_{y}, F_{z}$ 不同时为零.

由参数方程

$$
x = x (u, v), \quad y = y (u, v), \quad z = z (u, v)
$$

决定的光滑曲面在点 $(x,y,z)$ 的法向量为

$$
\boldsymbol {n} = \pm \left(\frac {\partial (y , z)}{\partial (u , v)}, \frac {\partial (z , x)}{\partial (u , v)}, \frac {\partial (x , y)}{\partial (u , v)}\right).
$$

有了法向量之后, 过曲面上任一点的法线方程和切平面方程都很容易写出来.

例题21.1.2 求曲面

$$
x = u + v, \quad y = u ^ {2} + v ^ {2}, \quad z = u ^ {3} + v ^ {3}
$$

的切平面当切点 $M(u,v)$ ， $u \neq v$ ，趋于曲面的边界 u = v 上的点 $M_{0}(u_{0}, v_{0})$ 时的极限位置.

解 先求 $u \neq v$ 时的切平面方程. 由于

$$
\frac {\partial (y , z)}{\partial (u , v)} = \left| \begin{array}{c c} 2 u & 2 v \\ 3 u ^ {2} & 3 v ^ {2} \end{array} \right| = 6 u v (v - u), \quad \frac {\partial (z , x)}{\partial (u , v)} = \left| \begin{array}{c c} 3 u ^ {2} & 3 v ^ {2} \\ 1 & 1 \end{array} \right| = 3 (u ^ {2} - v ^ {2}),
$$

$$
\frac {\partial (x , y)}{\partial (u , v)} = \left| \begin{array}{c c} 1 & 1 \\ 2 u & 2 v \end{array} \right| = 2 (v - u),
$$

于是过 $(x, y, z)$ 点的切平面方程为

$$
\begin{array}{r l} & 6 u v (v - u) (X - (u + v)) + 3 (u ^ {2} - v ^ {2}) (Y - (u ^ {2} + v ^ {2})) \\ & \qquad + 2 (v - u) (Z - (u ^ {3} + v ^ {3})) = 0. \end{array}
$$

消去 $v - u$ ，并整理得到

$$
6 u v X - 3 (u + v) Y + 2 Z = 3 u v (u + v) - u ^ {3} - v ^ {3}.
$$

令 $(u,v)\to (u_0,u_0)$ ，则有

$$
6 u _ {0} ^ {2} X - 6 u _ {0} Y + 2 Z = 4 u _ {0} ^ {3}.
$$

将 $(X,Y,Z)$ 改写为 $(x,y,z)$ ，可见所求的极限位置为

$$
3 u _ {0} ^ {2} x - 3 u _ {0} y + z = 2 u _ {0} ^ {3}.
$$

### 21.1.3 曲线的夹角、曲面的夹角

由解析几何知 $R^{2}$ 中两个相交向量 l 与 m 所交的角 $\omega$ 的余弦为

$$
\cos \omega = \frac {l \cdot m}{| l | \cdot | m |},
$$

其中“.”为Euclid内积， $|\cdot |$ 为Euclid范数．设连续可微的隐函数定义的曲线 $F(x,y) = 0$ 与 $G(x,y) = 0$ 在 $(x,y)$ 处相交.则在 $(x,y)$ 处两曲线相应的切向量分别为 $(F_y, - F_x)$ 与 $(G_y, - G_x)$ ，其夹角余弦为

$$
\cos \omega = \frac {F _ {x} G _ {x} + F _ {y} G _ {y}}{\sqrt {F _ {x} ^ {2} + F _ {y} ^ {2}} \cdot \sqrt {G _ {x} ^ {2} + G _ {y} ^ {2}}}.
$$

两曲线正交的条件是： $F_{x}G_{x} + F_{y}G_{y} = 0$ 

在 $\mathbf{R}^3$ 中也有类似的讨论. 设 $F(x,y,z) = 0$ 与 $G(x,y,z) = 0$ 为 $\mathbf{R}^3$ 中两光滑曲面. 它们在 $(x,y,z)$ 处相交. 两曲面夹角定义为相应切平面的夹角 (或相应法向量的夹角). 设 $\omega$ 为其夹角, 则有

$$
\cos \omega = \frac {F _ {x} G _ {x} + F _ {y} G _ {y} + F _ {z} G _ {z}}{\sqrt {F _ {x} ^ {2} + F _ {y} ^ {2} + F _ {z} ^ {2}} \cdot \sqrt {G _ {x} ^ {2} + G _ {y} ^ {2} + G _ {z} ^ {2}}}.
$$

两曲面正交的条件是： $F_{x}G_{x} + F_{y}G_{y} + F_{z}G_{z} = 0$ 

例题21.1.3设

$$
\frac {x y}{z} = u, \quad \sqrt {x ^ {2} + z ^ {2}} + \sqrt {y ^ {2} + z ^ {2}} = v \quad \text {和} \quad \sqrt {x ^ {2} + z ^ {2}} - \sqrt {y ^ {2} + z ^ {2}} = w
$$

是三个分别以 $u, v, w$ 为参数的单参数曲面族, 证明: 过同一点的三曲面族的三个曲面是两两正交的.

证 设三曲面交于点 $(x, y, z)$ 处，其法向量分别为

$$
\begin{array}{l} \left(\frac {y}{z}, \frac {x}{z}, - \frac {x y}{z ^ {2}}\right), \\ \left(\frac {x}{\sqrt {x ^ {2} + z ^ {2}}}, \frac {y}{\sqrt {y ^ {2} + z ^ {2}}}, \frac {z}{\sqrt {x ^ {2} + z ^ {2}}} + \frac {z}{\sqrt {y ^ {2} + z ^ {2}}}\right), \\ \left(\frac {x}{\sqrt {x ^ {2} + z ^ {2}}}, - \frac {y}{\sqrt {y ^ {2} + z ^ {2}}}, \frac {z}{\sqrt {x ^ {2} + z ^ {2}}} - \frac {z}{\sqrt {y ^ {2} + z ^ {2}}}\right). \end{array}
$$

由于这三个向量的两两内积均为0，所以过 $(x,y,z)$ 点的这三个曲面族的三个曲面是两两正交的.

### 21.1.4 练习题

1. 在曲线 $x = t, y = t^2, z = t^3$ 上求出一点，使该点的切线平行于平面 $x + 2y + z = 4$ .

2. 证明：斜驶线

$$
\tan \left({\frac {\pi}{4}} + {\frac {\psi}{2}}\right) = \mathrm{e} ^ {k \varphi}, \quad k = \text {常数},
$$

与地球的每一条子午线相交成定角, 其中 $\varphi$ 为地球上点的经度, $\psi$ 为地球上点的纬度.

3. 求曲线 $x^{2} + y^{2} + z^{2} = 6, x + y + z = 0$ 在点 $(1, -2, 1)$ 处的切线与法平面方程.

4. 求曲面 $z = \arctan \frac{y}{x}$ 在点 $\left(1, 1, \frac{\pi}{4}\right)$ 处的法线与切平面方程.

5. 证明：曲面 $xyz = a^3 (a > 0)$ 的每一个切平面与坐标面形成体积相同的四面体.

## §21.2 方向导数与梯度

### 21.2.1 方向导数

为方便起见, 我们在 $\mathbf{R}^3$ 中考虑. 设 $D$ 是 $\mathbf{R}^3$ 中的一个区域, $f$ 是定义在 $D$ 上的函数, 点 $\pmb{p}_0 \in D$ , $l$ 是 $\mathbf{R}^3$ 中的一个单位向量. 如果极限

$$
\lim _ {t \rightarrow 0 ^ {+}} \frac {f (\boldsymbol {p} _ {0} + t \boldsymbol {l}) - f (\boldsymbol {p} _ {0})}{t}
$$

存在, 则称此极限是函数 $f$ 在点 $\pmb{p}_0$ 处沿方向 $\pmb{l}$ 的方向导数, 记为 $\frac{\partial f}{\partial l} (\pmb{p}_0)$ . 它表示函数 $f$ 在点 $\pmb{p}_0$ 沿方向 $\pmb{l}$ 的变化率. 特别地, 若 $f$ 在 $\pmb{p}_0$ 处存在关于 $x$ 的偏导数, 则当 $\pmb{l} = (1,0,0)$ 时, $\frac{\partial f}{\partial l} (\pmb{p}_0) = \frac{\partial f}{\partial x} (\pmb{p}_0)$ ; 当 $\pmb{l} = (-1,0,0)$ 时, $\frac{\partial f}{\partial l} (\pmb{p}_0) = -\frac{\partial f}{\partial x} (\pmb{p}_0)$ .

命题 21.2.1 设函数 f 在点 $p_{0}$ 可微, 则 f 在点 $p_{0}$ 沿任何方向 l 的方向导数存在, 且

$$
\frac {\partial f}{\partial l} \left(\boldsymbol {p} _ {0}\right) = \frac {\partial f}{\partial x} \left(\boldsymbol {p} _ {0}\right) \cos \alpha + \frac {\partial f}{\partial y} \left(\boldsymbol {p} _ {0}\right) \cos \beta + \frac {\partial f}{\partial z} \left(\boldsymbol {p} _ {0}\right) \cos \gamma ,\tag{21.1}
$$

其中 $\cos\alpha,\cos\beta,\cos\gamma$ 是方向 l 的方向余弦.

### 21.2.2 梯度

设函数 f 定义于某个区域 $D \subset R^{3}$ 上, 又设 f 具有关于各个变元的偏导数, 称向量

$$
\frac {\partial f}{\partial x} (x, y, z) \boldsymbol {i} + \frac {\partial f}{\partial y} (x, y, z) \boldsymbol {j} + \frac {\partial f}{\partial z} (x, y, z) \boldsymbol {k}
$$

是 f 在点 $(x, y, z)$ 的梯度，记为 $\operatorname{grad} f(x, y, z)$ 或 $\nabla f(x, y, z)$ .

由梯度的定义, $(21.1)$ 的方向导数公式可以写为

$$
\frac {\partial f}{\partial l} (x, y, z) = \nabla f (x, y, z) \cdot \boldsymbol {l} = | \nabla f (x, y, z) | \cos \theta ,\tag{21.2}
$$

其中 $\theta$ 是向量 $\nabla f(x,y,z)$ 与 $l$ 之间的夹角．由(21.2)可以看出在一个固定点 $(x,y,z),f(x,y,z)$ 沿任意方向的方向导数中以沿 $\nabla f$ 的方向导数为最大.其值为 $|\nabla f(x,y,z)|$ .从而梯度的方向就是函数在该点增加最快的方向.

例题 21.2.1 求 $u = x + y + z$ 在沿 $x^{2} + y^{2} + z^{2} = 1$ 上点的外法向的方向导数，并问在球面上何点该方向导数取：(1) 最大值；(2) 最小值；(3) 等于 0.

解 球面 $x^{2} + y^{2} + z^{2} = 1$ 上点的外法向方向为 $(x,y,z)$ ，函数 $u = x + y + z$ 沿 $(x,y,z)$ 方向的方向导数为

$$
\frac {\partial u}{\partial l} = \nabla u \cdot (x, y, z) = | \nabla u | \cos \theta = \sqrt {3} \cos \theta ,
$$

其中 $\theta$ 是向量 $\nabla u = (1,1,1)$ 与 $(x,y,z)$ 之间的夹角.于是当 $x = y = z > 0$ 时，方向导数取最大值 $\sqrt{3}$ ，此时 $x = y = z = \frac{\sqrt{3}}{3}$ ；当 $x = y = z < 0$ 时，方向导数取最小值 $-\sqrt{3}$ ，此时 $x = y = z = -\frac{\sqrt{3}}{3}$ ；当 $x + y + z = 0$ 时，方向导数为0. □

例题21.2.2若 $\mathbf{R}^2$ 上的可微函数 $f(x,y)$ 满足

$$
x f _ {x} (x, y) + y f _ {y} (x, y) = 0,\tag{21.3}
$$

则 $f(x,y)$ 恒为常数.

证1 设 $x = r\cos \theta, y = r\sin \theta,$ 取 $l = (\cos \theta ,\sin \theta)$ ，由(21.3)得

$$
\frac {\partial f}{\partial l} = \cos \theta f _ {x} (r \cos \theta , r \sin \theta) + \sin \theta f _ {y} (r \cos \theta , r \sin \theta) = 0.
$$

于是在任一从原点出发的射线上的方向导数 $\frac{\partial f}{\partial l} = 0$ ，因此 $f(x,y)$ 在该射线上为常数，即

$$
f (x, y) \equiv f (0, 0).
$$

证2 令 $x = r\cos \theta, y = r\sin \theta,$ 由(21.3)得

$$
\frac {\partial f}{\partial r} = f _ {x} \cos \theta + f _ {y} \sin \theta = 0,
$$

即 $f(r\cos \theta ,r\sin \theta)$ 与 $r$ 无关.对任意固定的 $\theta$ ，令 $r\to 0^{+}$ ，得

$$
f (x, y) = \lim _ {r \rightarrow 0 ^ {+}} f (r \cos \theta , r \sin \theta) = f (0, 0).
$$

证3 由(21.3)知

$$
x f _ {x} (x, y) + y f _ {y} (x, y) = 0 = 0 \cdot f (x, y),
$$

由齐次函数的充分必要条件 (命题 19.3.1) 知 f 为零次齐次函数, 于是 $\forall t \in R$ ,

$$
f (t x, t y) = t ^ {0} f (x, y) = f (x, y),
$$

于其中令 $t\to 0$ ，得

$$
f (x, y) = f (0, 0).
$$

证4 对任意固定的 $(x,y)\in \mathbf{R}^2$ ，定义一元函数

$$
\varphi (t) = f (t x, t y), \quad t \geqslant 0.
$$

则

$$
\varphi^ {\prime} (t) = x f _ {1} (t x, t y) + y f _ {2} (t x, t y).
$$

于是当 t > 0 时, 由 (21.3) 得

$$
\varphi^ {\prime} (t) = \frac {1}{t} [ t x f _ {1} (t x, t y) + t y f _ {2} (t x, t y) ] = 0,
$$

所以 $\varphi(t)$ 为常数. 取 $t = 1$ , 则 $\varphi(t) \equiv \varphi(1)$ . 即

$$
f (t x, t y) = f (x, y).
$$

令 $t\to 0$ ，得

$$
f (x, y) = f (0, 0).
$$

### 21.2.3 练习题

1. 求函数 $u = x^{2} + y^{2} + z^{2}$ 在沿椭球面 $\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1$ 上点 $(x, y, z)$ 处的外法线方向的方向导数.

2. 设 $\frac{\partial u}{\partial n}$ 和 $\frac{\partial v}{\partial n}$ 为函数 u 和 v 在沿曲面 $F(x,y,z)=0$ 上的点 $(x,y,z)$ 的法线方向 n 的方向导数, 证明:

$$
\frac {\partial}{\partial \boldsymbol {n}} (u v) = u \frac {\partial v}{\partial \boldsymbol {n}} + v \frac {\partial u}{\partial \boldsymbol {n}}.
$$

3. 设 $f(t)$ , $u = u(x, y, z)$ 为可微函数, 证明: $\nabla f(u) = f'(u) \nabla u$ .

4. 设 $f(x,y)$ 在点 $\boldsymbol{p}_{0}(x_{0},y_{0})$ 处可微, $l_{1},l_{2},\cdots,l_{n}$ 为 n 个单位向量, 相邻的两向量夹角为 $\frac{2\pi}{n}$ . 证明:

$$
\sum_ {i = 1} ^ {n} \frac {\partial f}{\partial l _ {i}} (x _ {0}, y _ {0}) = 0.
$$

5. 设 $u = \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} - \frac{z^{2}}{c^{2}}$ ，其中 a > b > c > 0。求在点 $(0, 0, 0)$ 处函数 u 增加最快的方向。

6. 设

$$
f (x, y) = \left\{ \begin{array}{l l} x - y + \frac {x y ^ {2}}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

证明: $f(x,y)$ 在原点处连续, 沿任何方向的方向导数存在, 但不可微.

## §21.3 Taylor 公式与极值问题

### 21.3.1 Taylor公式

在一元微分学中 (上册 §7.2), 我们对 Taylor 公式及其应用给予了足够的重视, 介绍了带有 Peano 余项和 Lagrange 余项的 Taylor 公式, 它们分别是对于一元函数的带有渐近误差估计和大范围误差估计的多项式逼近. 在多元函数中, 我们仍然有相应的 Taylor 公式. 为叙述方便起见, 仅讨论二元函数的情形.

Taylor 公式 设函数 $f(x, y)$ 在开圆盘 $D = \{(x, y) \mid (x - x_0)^2 + (y - y_0)^2 < a^2\}$ 上有关于 $x, y$ 的各个 $m + 1$ 阶连续偏导数。对 $D$ 内任意一点 $(x, y)$ ，记 $\Delta x = x - x_0, \Delta y = y - y_0$ ，则

$$
\begin{array}{r l} f (x, y) & = f (x _ {0}, y _ {0}) + \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) \Delta x + \frac {\partial f}{\partial y} (x _ {0}, y _ {0}) \Delta y \\ & \quad + \frac {1}{2 !} \left(\Delta x \frac {\partial}{\partial x} + \Delta y \frac {\partial}{\partial y}\right) ^ {2} f (x _ {0}, y _ {0}) + \dots \\ & \quad + \frac {1}{m !} \left(\Delta x \frac {\partial}{\partial x} + \Delta y \frac {\partial}{\partial y}\right) ^ {m} f (x _ {0}, y _ {0}) + R _ {m} (x, y), \end{array}
$$

其中

$$
R _ {m} (x, y) = \frac {1}{(m + 1) !} \left(\Delta x \frac {\partial}{\partial x} + \Delta y \frac {\partial}{\partial y}\right) ^ {m + 1} f (x _ {0} + \theta \Delta x, y _ {0} + \theta \Delta y),
$$

$0 < \theta < 1$ ，称为Lagrange余项.

在所述条件下（甚至条件可减弱为 $f(x,y)$ 在 $(x_0,y_0)$ 处有关于 $x,y$ 的各个 $m$ 阶连续偏导数)，也可取Peano余项 $R_{m}(x,y) = o(r^{m}),r\to 0,$ 其中 $r = \sqrt{(\Delta x)^2 + (\Delta y)^2}$ 

上述两个公式的证明均可化归为一元函数来证明。其中在Lagrange余项的证明中，令 $\varphi (t) = f(x_0 + t\Delta x,y_0 + t\Delta y)$ ；在Peano余项的证明中可先把 $f(x,y) = f(x_0 + \Delta x,y_0 + \Delta y)$ 作为 $\Delta x$ 的一元函数进行带Peano余项的一元Taylor公式展开，再对各阶偏导函数作 $\Delta y$ 的一元函数展开，然后整理.

命题 21.3.1 (Taylor 公式的惟一性) 设 $f(x,y)$ 具有 $m+1$ 阶连续偏导数, 若用某种方法得到展开式

$$
f (x, y) = \sum_ {i + j = 0} ^ {m} A _ {i j} (x - x _ {0}) ^ {i} (y - y _ {0}) ^ {j} + o (\rho^ {m}) (\rho \rightarrow 0),
$$

其中 $\rho = \sqrt{(x - x_0)^2 + (y - y_0)^2}$ , 则必有

$$
A _ {i j} = \frac {1}{i ! j !} \cdot \frac {\partial^ {i + j}}{\partial x ^ {i} \partial y ^ {j}} f (x _ {0}, y _ {0}).
$$

证明留作习题.

例题21.3.1设

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {1 - \mathrm{e} ^ {x (x ^ {2} + y ^ {2})}}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

求 $f(x,y)$ 在 $(0,0)$ 的4阶Taylor多项式，并求出 $\frac{\partial^2f}{\partial x\partial y}(0,0),\frac{\partial^4f}{\partial x^4} (0,0).$ 

解 由于

$$
\mathrm{e} ^ {x (x ^ {2} + y ^ {2})} = 1 + x (x ^ {2} + y ^ {2}) + \frac {1}{2} x ^ {2} (x ^ {2} + y ^ {2}) ^ {2} + o ([ x (x ^ {2} + y ^ {2}) ] ^ {2}),
$$

于是

$$
\frac {1 - \mathrm{e} ^ {x (x ^ {2} + y ^ {2})}}{x ^ {2} + y ^ {2}} = - x - \frac {1}{2} x ^ {2} (x ^ {2} + y ^ {2}) + o (x ^ {2} (x ^ {2} + y ^ {2})).
$$

由 Taylor 展式的惟一性知 $f(x,y)$ 的 4 阶 Taylor 展开式为

$$
- x - \frac {1}{2} x ^ {4} - \frac {1}{2} x ^ {2} y ^ {2}.
$$

由此得

$$
\frac {\partial^ {2} f}{\partial x \partial y} (0, 0) = 0, \quad \frac {\partial^ {4} f}{\partial x ^ {4}} (0, 0) = 4! (- \frac {1}{2}) = - 1 2.
$$

Taylor 公式有许多重要而有趣的应用, 下面举出几例. 我们先用向量与矩阵形式来重新表达 Taylor 公式, 这样的表达式简单明了. 特别是它的前三项, 与线性代数的知识紧密联系在一起. 建议读者要熟悉.

考虑定义在一个开区域 $D \subset R^{n}$ 上的 n 元二次连续可微函数 $f(x_{1}, x_{2}, \cdots, x_{n})$ . 设点 $\boldsymbol{p}_{0} = (x_{1}^{0}, x_{2}^{0}, \cdots, x_{n}^{0}) \in D$ . 带 Peano 余项的二阶 Taylor 展式可写为

$$
f \left(\boldsymbol {p} _ {0} + \Delta \boldsymbol {x}\right) = f \left(\boldsymbol {p} _ {0}\right) + \nabla f \left(\boldsymbol {p} _ {0}\right) \cdot \Delta \boldsymbol {x} ^ {\mathrm{T}} + \frac {1}{2 !} \Delta \boldsymbol {x} \boldsymbol {Q} \Delta \boldsymbol {x} ^ {\mathrm{T}} + o \left(r ^ {2}\right),
$$

其中 $\Delta x = (\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}) = (x_{1} - x_{1}^{0}, x_{2} - x_{2}^{0}, \cdots, x_{n} - x_{n}^{0})$ ， $\nabla f(p_{0})$ 是 $f(x)$ 在 $p_{0}$ 处的梯度， $Q = \left(\frac{\partial^{2}f}{\partial x_{i}\partial x_{j}}\right)\bigg|_{x=p_{0}}$ 称为 Hesse（黑塞）矩阵.

记函数的增量 $\Delta f = f(p_0 + \Delta x) - f(p_0)$ . 易知当 $\nabla f(p_0) \neq 0$ 时可取不同的 $\Delta x$ , 使 $\Delta f$ 取到正值与负值, 因此当 $p_0$ 是可微函数 $f$ 的一个极值点时, $p_0$ 必是 $f$ 的驻点 (又称临界点), 即有①

$$
\nabla f (\boldsymbol {p} _ {0}) = \mathbf {0}.
$$

又当 $\nabla f(p_0) \neq 0$ ，且 $|\Delta x|$ 为定值时，在 $\Delta x$ 与 $\nabla f(p_0)$ 同向时 $\Delta f$ 取最大。因此梯度方向是函数增长最快的方向。当 $\nabla f(p_0) = 0$ 时，可根据 $Q$ 的情况来讨论函数增长最快的方向。

例题21.3.2设 $u = \frac{x^2}{a^2} +\frac{y^2}{b^2} +\frac{z^2}{c^2}$ ，其中 $a > b > c > 0$ 求在 $(0,0,0)$ 处函数增长最快的方向.

解 由于 $\nabla u(0,0,0)$ 为零向量, 故不能应用梯度方向是函数增长最快的方向的性质, 需另想办法. 考虑沿某单位方向 $l = (\alpha, \beta, \gamma)$ 函数 $u$ 的变化

$u(t\alpha,t\beta,t\gamma)-u(0,0,0)$ ，其中t是参数.

令 $\varphi(t) = u(t\alpha, t\beta, t\gamma)$ . 由 Taylor 展式

$$
\begin{array}{l} \varphi (t) - \varphi (0) = \varphi^ {\prime} (0) t + \frac {\varphi^ {\prime \prime} (0)}{2} t ^ {2} + o (t ^ {2}) \\ = \frac {1}{2} \left(\frac {\partial^ {2} u}{\partial x ^ {2}} (0, 0, 0) \alpha^ {2} + \frac {\partial^ {2} u}{\partial y ^ {2}} (0, 0, 0) \beta^ {2} + \frac {\partial^ {2} u}{\partial z ^ {2}} (0, 0, 0) \gamma^ {2}\right) t ^ {2} + o (t ^ {2}) \\ = \left(\frac {\alpha^ {2}}{a ^ {2}} + \frac {\beta^ {2}}{b ^ {2}} + \frac {\gamma^ {2}}{c ^ {2}}\right) t ^ {2} + o (t ^ {2}). \end{array}
$$

由于 $a > b > c$ 及 $\alpha^2 +\beta^2 +\gamma^2 = 1$ ，当 $t > 0$ 充分小时，沿方向 $l = (0,0,\pm 1)$ $\varphi (t) - \varphi (0)$ 最大，即函数 $u$ 增加最快. □

注 设二次连续可微函数 f 在点 $p_{0}$ 处的梯度为零向量, 但 Hesse 矩阵 Q 是非零矩阵, 则 f 增长最快的可能方向在 Q 的最大特征值对应的特征子空间中. 如最大特征值对应的特征子空间为一维空间, 则相应的方向就是 f 增长最快的方向 (第二组参考题 1).

例题21.3.3 设 $f(x, y)$ 在单位圆盘 $D = \{(x, y) \mid x^2 + y^2 \leqslant 1\}$ 上具有连续的一阶偏导数，且满足 $|f(x, y)| \leqslant 1, \forall (x, y) \in D$ 。证明：存在点

$$
(x _ {0}, y _ {0}) \in \operatorname{int} D = \{(x, y) \mid x ^ {2} + y ^ {2} <   1 \},
$$

使得在点 $(x_{0},y_{0})$ 处有不等式 $f_{x}^{2}+f_{y}^{2}\leqslant16.$ 

证 设 $g(x,y) = f(x,y) + 2(x^2 +y^2)$ .在单位圆周上显然有 $g(x,y)\geqslant 1$ ，而在原点 $g(0,0)\leqslant 1$ .所以或者 $g$ 在 $D$ 上恒等于1，或者 $g(x,y)$ 必在 $D$ 的某个内点 $(x_0,y_0)$ 处取到极小值.因此总存在 $(x_0,y_0)\in \mathrm{int}D,$ 使得

$$
\left. \frac {\partial g}{\partial x} \right| _ {(x _ {0}, y _ {0})} = \left. \frac {\partial g}{\partial y} \right| _ {(x _ {0}, y _ {0})} = 0,
$$

于是就有

$$
\left. (f _ {x} ^ {2} + f _ {y} ^ {2}) \right| _ {(x _ {0}, y _ {0})} \leqslant 1 6.
$$

例题 21.3.4 证明: 当 $|x|$ 和 $|y|$ 充分小时, 有近似式

$$
\frac {\cos x}{\cos y} \approx 1 - \frac {1}{2} x ^ {2} + \frac {1}{2} y ^ {2}.\tag{21.4}
$$

证 设 $f(x, y) = \frac{\cos x}{\cos y}$ ，则 $f(x, y)$ 在原点附近无穷次可微，且

$$
f (0, 0) = 1, \quad f _ {x} (0, 0) = 0, \quad f _ {y} (0, 0) = 0,
$$

$$
f _ {x x} (0, 0) = - 1, \quad f _ {y y} (0, 0) = 1, \quad f _ {x y} (0, 0) = 0.
$$

由 Taylor 公式, 当 $|x|$ 和 $|y|$ 充分小时, 有

$$
\frac {\cos x}{\cos y} = 1 - \frac {1}{2} x ^ {2} + \frac {1}{2} y ^ {2} + o (| x | ^ {2} + | y | ^ {2}),
$$

此即 (21.4).

### 21.3.2 极值问题

考虑定义在一个开区域 $D \subset R^{n}$ 上的 n 元二次连续可微函数 $f(x_{1}, x_{2}, \cdots, x_{n})$ . 设 $\boldsymbol{p}_{0} = (x_{1}^{0}, x_{2}^{0}, \cdots, x_{n}^{0}) \in D$ 是 f 的一个极值点, 那么 $\nabla f(\boldsymbol{p}_{0}) = \mathbf{0}$ . 由二阶 Taylor 展式得

$$
f (\boldsymbol {p} _ {0} + \Delta \boldsymbol {x}) = f (\boldsymbol {p} _ {0}) + \frac {1}{2 !} \Delta \boldsymbol {x} \boldsymbol {Q} \Delta \boldsymbol {x} ^ {\mathrm{T}} + o (r ^ {2}),
$$

因而可以根据二次型 $\Delta xQ\Delta x^{T}$ 的符号来确定 $f(x)$ 能否在 $p_{0}$ 处取到极值，即有如下的极值的充分条件：

设函数 f 在驻点 $p_{0}$ 的某邻域上有二阶连续偏导数，则

(1) 若 Q 是正定的, 则 $f(p_{0})$ 是极小值;

(2) 若 Q 是负定的, 则 $f(p_{0})$ 是极大值;

(3) 若 Q 是不定的 (即既有正的特征值, 也有负的特征值), 则 $p_{0}$ 点不是极值点;

(4) 若 Q 是半定的 (即所有特征值同号, 但有零特征值), 则需进一步判别.

注 Hesse 矩阵 Q 是否是正定、负定可以根据高等代数中学到的 Sylvester (西尔维斯特) 准则来判断, 即考虑 Q 的各阶主子式的符号. 特别有:

设 $f$ 是二元函数 $f(x,y)$ 。如果 $f(x,y)$ 在驻点 $(x_0,y_0)$ 的某个邻域上有二阶连续偏导数，并设 $A = f_{xx}(x_0,y_0)$ ， $B = f_{xy}(x_0,y_0)$ ， $C = f_{yy}(x_0,y_0)$ 以及 $\Delta = AC - B^2$ ，则

(1) 若 $\Delta > 0, A > 0$ , 则 $f$ 在点 $(x_0, y_0)$ 有极小值;

(2) 若 $\Delta > 0, A < 0$ , 则 $f$ 在点 $(x_0, y_0)$ 有极大值;

(3) 若 $\Delta < 0$ ，则 f 在点 $(x_{0}, y_{0})$ 没有极值；

(4) 若 $\Delta = 0$ ，则需进一步判别.

求多元函数 $z = f(x_{1}, x_{2}, \cdots, x_{n})$ 的极值的步骤可归结如下:

1. 通过解方程组 $f_{x_{i}}=0, i=1,2,\cdots,n$ ，求出驻点 $\boldsymbol{p}_{0}=(x_{1}^{0},x_{2}^{0},\cdots,x_{n}^{0})$ ;

2. 如果函数 $f$ 在驻点 $\pmb{p}_0$ 的某邻域上有二阶连续偏导数，则考查Hesse矩阵 $Q = \left(\frac{\partial^2f}{\partial x_i\partial x_j}\right)\bigg|_{\pmb{x} = \pmb{p}_0}$ ，利用上述的充分条件；

3. 考查 $f_{x_{i}}, i = 1, 2, \cdots, n,$ 不存在的点是否为极值点;

4. 考查没有二阶连续偏导数的驻点是否为极值点.

例题21.3.5 求 $z = \frac{1}{2} x^2 + xy + \frac{1}{2} y^2 - 2x - 2y + 5$ 的全部极值点与极值.

解 由于 $z_{x} = z_{y} = x + y - 2$ ，则直线 $x + y - 2 = 0$ 上的点都是驻点。又 $A = f_{xx} = 1$ ， $B = f_{xy} = 1$ ， $C = f_{yy} = 1$ ，于是 $\Delta = AC - B^2 = 0$ 。故不能用法则来判别这些驻点是否为极值点。从函数本身来看

$$
z = \frac {1}{2} (x + y) ^ {2} - 2 (x + y) + 5 = \frac {1}{2} [ (x + y) - 2 ] ^ {2} + 3,
$$

故 $x + y = 2$ 上的全部点均为 z 的极小值点, 极小值为 3.

由于 z 在 $R^{2}$ 上可微, 故无其他极值点.

注 本题表明, 对于二元函数, 即使它不是常值函数, 其驻点仍可以有无穷多个, 且可以构成曲线.

例题21.3.6设 $f(x,y) = (y - x^2)(y - 2x^2)$ .证明：沿着经过点 $(0,0)$ 的每一条直线，点 $(0,0)$ 均是 $f(x,y)$ 在该直线上的极小值点.但点 $(0,0)$ 不是 $f(x,y)$ 在整体上的极小值点.

证 在 $xOy$ 平面上画出 $S_{1}: y = x^{2}$ 和 $S_{2}: y = 2x^{2}$ 表示的两条抛物线, 可见 $S_{1}$ 和 $S_{2}$ 把平面分成四个区域. 在每个区域 $f$ 取确定的符号, 而过 $(0,0)$ 的每一条直线在 $(0,0)$ 附近都位于 $f$ 取“+”的区域内, $f(0,0) = 0$ , 所以 $(0,0)$ 是 $f$ 在该直线上取到极小值的点. 另一方面, $(0,0)$ 在 $\mathbf{R}^2$ 中的任一小邻域内都包含着上述四个小区域, 即 $f$ 可在这个小邻域取到正值, 也可以取到负值. 故 $f$ 在 $(0,0)$ 处不可能取到极值.

注 根据需要在不同的区域取不同的值是构造二元函数反例的常用手法.

### 21.3.3 最大最小值问题

与一元函数相仿 (参见上册 §8.3), 可以通过求驻点的办法求函数的最大、最小值. 以二元函数为例叙述如下:

1. 如果 $f(x,y)$ 定义在有界闭区域上，则先求出 D 内部的全部驻点、不可导点及相应的函数值，然后求出 f 在 $\partial D$ 上的最值（可将边界曲线代入 $f(x,y)$ ，化为求一元函数的最值问题），最后在所有这些函数值中取其最大者为最大值，最小者为最小值；

2. 如果 $f(x,y)$ 定义在无界区域上，则去掉明显取不到最值的某个无界子区域部分，使之成为有界区域上的最值问题；

3. 利用

$$
\max f = \max _ {x} \max _ {y} f (\text {或} \max _ {y} \max _ {x} f),
$$

对 $x, y$ 累次求最值;

4. 如果 $f(x,y)$ 定义在有界开区域 D 上, 有时需要先将 $f(x,y)$ 的定义域连续延拓到 $\overline{D}$ 上, 然后求有界闭区域上的最大、最小值, 最后求出所要的结果.

例题 21.3.7 求 $f(x,y)=x^{2}-xy+y^{2}-2x+y$ 在全平面上的最大、最小值.

解1 令 $f_{x} = 2x - y - 2 = 0$ , $f_{y} = -x + 2y + 1 = 0$ 得驻点(1,0). $A = f_{xx}(1,0) = 2 > 0$ , $B = f_{xy}(1,0) = -1$ , $C = f_{yy}(1,0) = 2$ , $\Delta = AC - B^2 > 0$ . 故(1,0)是极小值点, 极小值为 $f(1,0) = -1$ . 又有

$$
\begin{array}{r l}f (\rho \cos \theta , \rho \sin \theta)&= \rho^ {2} (1 - \sin \theta \cos \theta) - \rho (2 \cos \theta - \sin \theta)\\&\geqslant \frac {1}{2} \rho^ {2} - 3 \rho \rightarrow + \infty (\rho \rightarrow + \infty),\end{array}
$$

可见 $f(x,y)$ 在全平面上无最大值. 又可知存在 $\rho_0$ ，当 $\rho \geqslant \rho_0$ 时， $f > -1$ . 于是在 $x^2 + y^2 \geqslant \rho_0^2$ 内， $f$ 不可能取最小值，即 $f$ 在 $\mathbf{R}^2$ 上最小值与 $f$ 在 $D = \{x^2 + y^2 \leqslant \rho_0^2\}$ 上最小值相同，又 $f(x,y)$ 在 $D$ 内无不可导点，于是

$$
\min _ {\mathbf {R} ^ {2}} f = \min _ {D} f = \min \{f (1, 0), f | _ {\partial D} \} = - 1.
$$

解2 由 $f(x,y) = y^{2} + (1 - x)y + (x^{2} - 2x)$ ，先固定 $x$ ，求 $\min_{y\in \mathbf{R}}\{f(x,y)\}$ . 将 $f(x,y)$ 改写为

$$
f (x, y) = \left(y + \frac {1 - x}{2}\right) ^ {2} + \left(\frac {3}{4} x ^ {2} - \frac {3}{2} x - \frac {1}{4}\right),
$$

于是

$$
\min _ {y \in \mathbf {R}} \{f (x, y) \} = \frac {3}{4} x ^ {2} - \frac {3}{2} x - \frac {1}{4} = \frac {3}{4} (x - 1) ^ {2} - 1,
$$

从而

$$
\min _ {x \in \mathbf {R}} \left\{\min _ {y \in \mathbf {R}} \{f (x, y) \} \right\} = \min _ {x \in \mathbf {R}} \left\{\frac {3}{4} (x - 1) ^ {2} - 1 \right\} = - 1,
$$

所以

$$
\min _ {\mathbf {R} ^ {2}} \{f (x, y) \} = - 1.
$$

又 $f(0,y)=y^{2}+y$ 无最大值，因此 $f(x,y)$ 也无最大值.

解 3 $f(x,y)=\left(x-\frac{y}{2}-1\right)^{2}+\frac{3}{4}y^{2}-1\geqslant-1$ 且 $f(1,0)=-1$ ，于是 $f(x,y)$ 在 $(1,0)$ 点取得最小值 -1，无最大值.

注 在上例的解 1 中, 能否像一元函数那样 (上册 242 页练习题 1), 根据 $f(x, y)$ 在 $\mathbf{R}^2$ 上只有惟一的极值点, 就断言该极值点是最值点呢? 回答是否定的, 考虑 $f(x, y) = x^3 - 4x^2 + 2xy - y^2$ 在 $\mathbf{R}^2$ 上的情况 (见下一小节的练习题 5).

例题21.3.8设 $D$ 为有界闭区域， $u(x,y)$ 在 $D$ 上连续，存在偏导数，且 $\frac{\partial u}{\partial x} +$ $\frac{\partial u}{\partial y} = u,u|_{\partial D} = 0,$ 则 $u$ 在 $D$ 上恒为零.

证 用反证法. 假设 $u$ 在 $D$ 上有正的最大值或负的最小值. 由条件 $u|_{\partial D} = 0$ 知这样的最大值或最小值只能在 $D$ 的内部达到. 不妨设 $(x_0, y_0) \in \mathrm{int}D$ , 且满足

$$
u (x _ {0}, y _ {0}) > 0, \quad u (x _ {0}, y _ {0}) \geqslant u (x, y), \forall (x, y) \in D.\tag{21.5}
$$

于是 $(x_0, y_0)$ 也是极大值点，从而

$$
\frac {\partial u}{\partial x} (x _ {0}, y _ {0}) = \frac {\partial u}{\partial y} (x _ {0}, y _ {0}) = 0.\tag{21.6}
$$

另一方面，由已知条件

$$
\frac {\partial u}{\partial x} (x _ {0}, y _ {0}) + \frac {\partial u}{\partial y} (x _ {0}, y _ {0}) = u (x _ {0}, y _ {0}),
$$

此与(21.5)，(21.6)矛盾，从而 $u \equiv 0$ 

例题21.3.9（Fermat三村问题）在平面上给定不在同一直线上的三点 $M_{i}(a_{i},b_{i}),i = 1,2,3.$ 求平面内的一点，使它到三定点的距离之和为最小.

解 任取点 $M(x,y)$ ，令

$$
\rho_ {i} = \sqrt {(x - a _ {i}) ^ {2} + (y - b _ {i}) ^ {2}}, \quad i = 1, 2, 3.
$$

于是所给问题为研究函数

$$
u (x, y) = \sum_ {i = 1} ^ {3} \rho_ {i} = \sum_ {i = 1} ^ {3} \sqrt {(x - a _ {i}) ^ {2} + (y - b _ {i}) ^ {2}}
$$

的最小值. 除了在三个给定点以外, 它处处存在着偏导数

$$
\frac {\partial u}{\partial x} = \sum_ {i = 1} ^ {3} \frac {x - a _ {i}}{\rho_ {i}} = \sum_ {i = 1} ^ {3} \cos \theta_ {i},
$$

$$
\frac {\partial u}{\partial y} = \sum_ {i = 1} ^ {3} \frac {y - a _ {i}}{\rho_ {i}} = \sum_ {i = 1} ^ {3} \sin \theta_ {i},
$$

其中 $\theta_{i}$ 表示 x 轴正向与以 $M_{i}$ 为起点的射线 $M_{i}M$ 的夹角（见图 21.1）.

首先找驻点 $M_0$ ，令两个偏导数为0得

$$
\begin{array}{l} \cos \theta_ {1} + \cos \theta_ {2} + \cos \theta_ {3} = 0, \\ \sin \theta_ {1} + \sin \theta_ {2} + \sin \theta_ {3} = 0. \end{array}
$$

第一式乘以 $\sin\theta_{2}$ ，第二式乘以 $\cos\theta_{2}$ ，相减得

$$
\sin (\theta_ {2} - \theta_ {1}) = \sin (\theta_ {3} - \theta_ {2}).\tag{21.7}
$$

同样可得

$$
\sin (\theta_ {3} - \theta_ {2}) = \sin (\theta_ {1} - \theta_ {3}).\tag{21.8}
$$

由图21.1可以算出 $\angle M_1M_0M_2 = \theta_2 - \theta_1,\angle M_2M_0M_3 = \theta_3 - \theta_2,$ 

$\angle M_{3}M_{0}M_{1} = \theta_{1} - \theta_{3} + 2\pi .$ 由(21.7)，(21.8)得

$$
\sin \angle M _ {1} M _ {0} M _ {2} = \sin \angle M _ {2} M _ {0} M _ {3} = \sin \angle M _ {3} M _ {0} M _ {1}.
$$

由于三个角都在0与 $2\pi$ 之间，且三个角之和为 $2\pi$ ，于是

$$
\angle M _ {1} M _ {0} M _ {2} = \angle M _ {2} M _ {0} M _ {3} = \angle M _ {3} M _ {0} M _ {1} = \frac {2}{3} \pi .
$$

于是点 $M_{0}$ 可由下列方法求得：在三角形 $M_{1}M_{2}M_{3}$ 的三边上各作一含圆周角为 $\frac{2}{3}\pi$ 的弧，三弧的公共点为 $M_{0}$ (称为 Fermat 点).

若三角形没有大于或等于 $\frac{2\pi}{3}$ 的内角，则此弧确能在三角形之内相交而确定 $M_0$ ，这时，各边显然都对着顶点在 $M_0$ 的等于 $\frac{2\pi}{3}$ 的角(见图21.1)，在这种情形，就必须比较 $u(x,y)$ 在 $M_0,M_1,M_2,M_3$ 这四个点的值．我们将证明，在驻点 $M_0$ 处的 $u(x,y)$ 的数值必小于其他三个数值．实际上由余弦定理以及 $\angle M_{1}M_{0}M_{2} = \frac{2}{3}\pi ,$ 有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/07320a33da3b4875ac3eeae2ad524b2d3248ab91011222d73de5070c731831c4.jpg)



图21.1


$$
\begin{array}{r l} & {(M _ {1} M _ {2}) ^ {2} = (M _ {0} M _ {2}) ^ {2} + (M _ {0} M _ {1}) ^ {2} + M _ {0} M _ {2} \cdot M _ {0} M _ {1}} \\ & {\qquad > \left(M _ {0} M _ {2} + \frac {1}{2} M _ {0} M _ {1}\right) ^ {2},} \end{array}
$$

于是 $M_{1}M_{2} > M_{0}M_{2} + \frac{1}{2} M_{0}M_{1}$ ，同理 $M_{1}M_{3} > M_{0}M_{3} + \frac{1}{2} M_{0}M_{1}$ ，两式相加得

$$
M _ {1} M _ {2} + M _ {1} M _ {3} > M _ {0} M _ {1} + M _ {0} M _ {2} + M _ {0} M _ {3},
$$

即 $u(M_{1}) > u(M_{0})$ . 显然此处的 $M_{1}$ 可以换成 $M_{2}$ 或 $M_{3}$ .

若三角形 $M_{1}M_{2}M_{3}$ 有一个内角大于或等于 $\frac{2\pi}{3}$ 时，情形就不同了，这时三条圆弧没有公共点，驻点也就不存在了。而函数 $f(x,y)$ 在 $M_{1}, M_{2}, M_{3}$ 中之一处，也就是在钝角的顶点处达到其最小值。

注 这一问题再一次说明, 在探求函数的最大最小值时, 除了驻点以外, 导数不存在的点也必须考虑在内.

例题 21.3.10 (最小二乘法) 设通过观测或实验得到一列数据 $(x_{i}, y_{i}), i = 1, 2, \cdots, n.$ 它们大体上满足线性关系, 即大体上可以用直线方程来反映变量 x 与变量 y 之间的对应关系. 确定直线方程使这些数据代入后的偏差的平方和最小.

解 不妨设 $x_{i} (i = 1, 2, \cdots, n)$ 不全相等，即直线是非垂直的，设方程为 $y = ax + b$ 。偏差的平方和为

$$
f (a, b) = \sum_ {i = 1} ^ {n} (a x _ {i} + b - y _ {i}) ^ {2}.
$$

现要确定 $a, b$ ，使得 $f(a, b)$ 为最小。为此，令

$$
f _ {a} = 2 \sum_ {i = 1} ^ {n} x _ {i} (a x _ {i} + b - y _ {i}) = 0, \quad f _ {b} = 2 \sum_ {i = 1} ^ {n} (a x _ {i} + b - y _ {i}) = 0,
$$

按 $a, b$ 合并整理得

$$
a \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + b \sum_ {i = 1} ^ {n} x _ {i} = \sum_ {i = 1} ^ {n} x _ {i} y _ {i}, \quad a \sum_ {i = 1} ^ {n} x _ {i} + b n = \sum_ {i = 1} ^ {n} y _ {i}.
$$

解此方程组得惟一的驻点 $(a = \bar{a}, b = \bar{b})$ 。为进一步确定该点是否取到极小值，我们计算得到

$$
A = f _ {a a} = 2 \sum_ {i = 1} ^ {n} x _ {i} ^ {2}, \quad B = f _ {a b} = 2 \sum_ {i = 1} ^ {n} x _ {i}, \quad C = f _ {b b} = 2 n,
$$

$$
D = A C - B ^ {2} = 4 n \sum_ {i = 1} ^ {n} x _ {i} ^ {2} - 4 \left(\sum_ {i = 1} ^ {n} x _ {i}\right) ^ {2} > 0.
$$

由前述定理 $f(a,b)$ 在点 $(\bar{a},\bar{b})$ 取到惟一极小值，并且由 $x_{i}(i=1,2,\cdots,n)$ 不全相等的假定知道对任意 $(a,b)$ 有

$$
\max _ {1 \leqslant i \leqslant n} \left\{\left| a x _ {i} + b \right| \right\} > 0.
$$

从而

$$
\min _ {a ^ {2} + b ^ {2} = 1} \left\{\max _ {1 \leqslant i \leqslant n} \{| a x _ {i} + b | \} \right\} \geqslant \delta > 0,
$$

由此得到

$$
\begin{array}{r l}\lim _ {| a | + | b | \rightarrow + \infty} f (a, b)&= \lim _ {| a | + | b | \rightarrow + \infty} (a ^ {2} + b ^ {2}) \sum_ {i = 1} ^ {n} \left(\frac {a x _ {i} + b - y _ {i}}{\sqrt {a ^ {2} + b ^ {2}}}\right) ^ {2}\\&\geqslant (a ^ {2} + b ^ {2}) \left[ \delta^ {2} - o \left(\frac {1}{a ^ {2} + b ^ {2}}\right)\right]\rightarrow + \infty .\end{array}
$$

因此 $f$ 的最小值在有界闭区域上取到. 故所得的惟一极小值就是最小值. $\square$ 

注 1 在具体问题中 (主要指应用问题), 如果问题确有最值, 而边界值明显不是最值, 在区域内部驻点又惟一, 则此驻点必是最值点.

注2 如例题21.3.7的注所指出的, 多元函数的惟一极值点并不一定是最值点. 但如果 $f$ 是二次函数, 则 $f$ 的极值点一定是最值点. 证明如下: 设 $\pmb{p}_0$ 是 $f$ 的极值点, 则 $\pmb{p}_0$ 是 $f$ 的驻点. 在 $\pmb{p}_0$ 处作Taylor展开, 有

$$
f (\boldsymbol {x}) = f \left(\boldsymbol {p} _ {0}\right) + \frac {1}{2} \left(\boldsymbol {x} - \boldsymbol {p} _ {0}\right) ^ {\mathrm{T}} \boldsymbol {Q} \left(\boldsymbol {x} - \boldsymbol {p} _ {0}\right).
$$

由于 $f$ 是二次函数, 故 $\pmb{Q}$ 是常值矩阵. 并且 $f$ 在 $\pmb{p}_0$ 附近取到极值, 因此 $\pmb{Q}$ 是半正定或半负定矩阵. 如果 $\pmb{Q}$ 是半正定矩阵, 则 $f(\pmb{x}) - f(\pmb{p}_0) \geqslant 0, \forall \pmb{x}$ . 所以 $f(\pmb{p}_0)$ 是最小值. 如果 $\pmb{Q}$ 是半负定矩阵, 则 $f(\pmb{x}) - f(\pmb{p}_0) \leqslant 0, \forall \pmb{x}$ , 所以 $f(\pmb{p}_0)$ 是最大值. 由此也得到了最小二乘法中惟一极小值就是最小值的另一种证明.

### 21.3.4 练习题

1. 设 $u(x, y)$ 在 $(x_0, y_0)$ 的邻域上具有连续的二阶偏导数，证明：当 $h \to 0$ 时有

$$
\begin{array}{r l} \frac {\partial^ {2} u}{\partial x ^ {2}} (x _ {0}, y _ {0}) + \frac {\partial^ {2} u}{\partial y ^ {2}} (x _ {0}, y _ {0}) & = \frac {1}{h ^ {2}} [ u (x _ {0} + h, y _ {0}) + u (x _ {0} - h, y _ {0}) \\ & + u (x _ {0}, y _ {0} + h) + u (x _ {0}, y _ {0} - h) - 4 u (x _ {0}, y _ {0}) ] + o (1). \end{array}
$$

2. 对于下列函数, 点 $(0,0)$ 是否为驻点? 是否为极值点?

(1) $f(x,y)=x^{2}-4xy+5y^{2}-1;$ 

(2) $f(x,y) = \sqrt{x^2 + y^2};$ 

(3) $f(x,y)=(x+y)^{2}-y^{2}.$ 

3. 求下列函数的极值点及相应的极值:

(1) $u(x,y)=x^{2}(y-1)^{2};$ 

(2) $u(x,y) = 3x^{2}y - x^{4} - 2y^{2};$ 

(3) $u(x,y)=(1+\mathrm{e}^{y})\cos x-y\mathrm{e}^{y}.$ 

4. 求 $f(x,y)=\sin x \sin y \sin(x+y)$ 在 $D=\{(x,y) \mid x \geqslant 0, y \geqslant 0, x+y \leqslant \pi\}$ 上的最大、最小值.

5. 证明：函数 $f(x, y) = x^3 - 4x^2 + 2xy - y^2$ 在 $\mathbf{R}^2$ 上有惟一的极大值点，但该极大值点不是最大值点.

## §21.4 条件极值与条件最值

### 21.4.1 条件极值

在满足约束条件 $\varphi_{i}(x_{1},x_{2},\cdots,x_{n})=0(i=1,2,\cdots,m,m<n)$ 时，求函数 $f(x_{1},x_{2},\cdots,x_{n})$ 的极值问题，可归结为对 Lagrange 函数

$$
L (x _ {1}, x _ {2}, \dots , x _ {n}) = f (x _ {1}, x _ {2}, \dots , x _ {n}) + \sum^ {m} \lambda_ {i} \varphi_ {i} (x _ {1}, x _ {2}, \dots , x _ {n})\tag{21.9}
$$

求普通函数极值的问题, 其中 $\lambda_{i}\ (i=1,2,\cdots,m)$ 为常数因子. 这种方法称为 Lagrange 乘子法. Lagrange 乘子法的证明见 [55] 第三册的 6.7.5 小节 (其中证明了 4 个命题), 其几何解释可见教科书 [9, 24, 63] 等.

Lagrange 乘子法的具体步骤是:

1. 作出 Lagrange 函数 (21.9);

2. 由 $L_{x_{i}} = 0 (i = 1, 2, \cdots, n)$ 与 $\varphi_{i} = 0 (i = 1, 2, \cdots, m)$ 联立解出 L 的全部驻点与 $\lambda_{i} (i = 1, 2, \cdots, m)$ 的具体值，并要求驻点处矩阵

$$
\left( \begin{array}{c c c c} \frac {\partial \varphi_ {1}}{\partial x _ {1}} & \frac {\partial \varphi_ {1}}{\partial x _ {2}} & \dots & \frac {\partial \varphi_ {1}}{\partial x _ {n}} \\ \frac {\partial \varphi_ {2}}{\partial x _ {1}} & \frac {\partial \varphi_ {2}}{\partial x _ {2}} & \dots & \frac {\partial \varphi_ {2}}{\partial x _ {n}} \\ \vdots & \vdots & & \vdots \\ \frac {\partial \varphi_ {m}}{\partial x _ {1}} & \frac {\partial \varphi_ {m}}{\partial x _ {2}} & \dots & \frac {\partial \varphi_ {m}}{\partial x _ {n}} \end{array} \right)\tag{21.10}
$$

的秩为 $m$ ;

3. 对每个驻点 $p_{0}$ ，算出 Hesse 矩阵 $\boldsymbol{H}(\boldsymbol{p}_{0})=\left(\frac{\partial^{2}L}{\partial x_{i}\partial x_{j}}\right)_{n\times n}(\boldsymbol{p}_{0})$ .

(1) 若 $H(p_{0})$ 正定, 则 $p_{0}$ 为 (条件) 极小值点;

(2) 若 $H(p_{0})$ 负定，则 $p_{0}$ 为 (条件) 极大值点;

(3) 若 $H(p_0)$ 既不是正定, 也不是负定, 则由

$$
\mathrm{d} \varphi_ {i} (x _ {1}, x _ {2}, \dots , x _ {n}) = \frac {\partial \varphi_ {i}}{\partial x _ {i}} \mathrm{d} x _ {i} = 0, i = 1, 2, \dots , m
$$

以及矩阵(21.10)的秩为m，解出 $dx_{1},dx_{2},\cdots,dx_{n}$ 中的m个。不妨设可解出 $dx_{1},dx_{2},\cdots,dx_{m}$ ，将其代入n元二次型 $\left(\mathrm{d}x_{1}\frac{\partial}{\partial x_{1}}+\mathrm{d}x_{2}\frac{\partial}{\partial x_{2}}+\cdots+\mathrm{d}x_{n}\frac{\partial}{\partial x_{n}}\right)^{2}L(p_{0})$ 中，化为二次型 $\sum_{i,j=1}^{n-m}a_{ij}dx_{i}dx_{j}$ 。令 $A=(a_{ij})_{(n-m)\times(n-m)}$ 。若A是正定的，则 $p_{0}$ 为(条件)极小值点。若A是负定的，则 $p_{0}$ 为(条件)极大值点。若A是不定的，则 $p_{0}$ 不是(条件)极值点。若A是半定的，则需进一步判定。

如此看来, 若出现 $H(p_{0})$ 既不正定, 也不负定的情况下, 讨论将相当复杂.

例题21.4.1 求 $f(x, y) = ax^2 + 2bxy + cy^2 (b \neq 0)$ 在条件 $x^2 + y^2 = 1$ 之下的极值.

解1 作Lagrange函数

$$
L (x, y, \lambda) = a x ^ {2} + 2 b x y + c y ^ {2} - \lambda \left(x ^ {2} + y ^ {2} - 1\right).
$$

解方程组

$$
L _ {x} = 2 a x + 2 b y - 2 \lambda x = 0,\tag{21.11}
$$

$$
L _ {y} = 2 b x + 2 c y - 2 \lambda y = 0,\tag{21.12}
$$

$$
x ^ {2} + y ^ {2} = 1.\tag{21.13}
$$

由(21.13)知 $x, y$ 不可能同时为零，于是由(21.11)，(21.12)得

$$
\left| \begin{array}{c c} a - \lambda & b \\ b & c - \lambda \end{array} \right| = \lambda^ {2} - (a + c) \lambda + a c - b ^ {2} = 0.\tag{21.14}
$$

因判别式 $\Delta = (a + c)^2 - 4(ac - b^2) = (a - c)^2 + 4b^2 > 0$ ，从而解得两个相异实根

$$
\lambda_ {\pm} = \frac {1}{2} [ a + c \pm \sqrt {(a - c) ^ {2} + 4 b ^ {2}} ].
$$

对每个 $\lambda$ ，由 (21.11) (或(21.12)) 与 (21.13) 解出两组解

$$
(\lambda_ {+}, x _ {1}, y _ {1}), (\lambda_ {+}, x _ {2}, y _ {2}), (\lambda_ {-}, x _ {3}, y _ {3}), (\lambda_ {-}, x _ {4}, y _ {4}),
$$

且 $y_{1}y_{2}y_{3}y_{4}\neq 0.$ 由(21.11)与(21.12)知

$$
\left| \begin{array}{c c} L _ {x x} & L _ {x y} \\ L _ {x y} & L _ {y y} \end{array} \right| = \left| \begin{array}{c c} 2 (a - \lambda) & 2 b \\ 2 b & 2 (c - \lambda) \end{array} \right| = 0.
$$

从而在驻点, 矩阵 $\begin{pmatrix} L_{xx} & L_{xy} \\ L_{xy} & L_{yy} \end{pmatrix}$ 既不是正定的, 也不是负定的. 此时, 对 (21.13) 求微分得

$$
2 x \mathrm{d} x + 2 y \mathrm{d} y = 0,
$$

解出

$$
\mathrm{d} y = - \frac {x}{y} \mathrm{d} x.
$$

然后代入 $\mathrm{d}^2 L = 2(a - \lambda)\mathrm{d}x^2 +4b\mathrm{d}x\mathrm{d}y + 2(c - \lambda)\mathrm{d}y^2$ 中，得

$$
\begin{array}{r l} \mathrm{d} ^ {2} L & = \frac {2}{y ^ {2}} [ (a - \lambda) y ^ {2} - 2 b x y + (c - \lambda) x ^ {2} ] \mathrm{d} x ^ {2} \\ & = \frac {2}{y ^ {2}} (a + c - 2 \lambda) \mathrm{d} x ^ {2} \left\{ \begin{array}{l l} <   0, & \lambda = \lambda_ {+}, \\ > 0, & \lambda = \lambda_ {-}. \end{array} \right. \end{array}
$$

因此, 对应于 $\lambda_{+}(\lambda_{-})$ , f 取得极大 (小) 值.

解 2 用隐函数方法.

容易证明 $b \neq 0$ 时, f 的极值不在 $(\pm1,0)$ 取得, 而除去这两点外, $x^{2} + y^{2} - 1 = 0$ 在单位圆上任意点的某邻域内有连续可导的隐函数 $y = h(x)$ , 且 $y' = -\frac{x}{y}$ .

记 $F(x) = f(x,h(x))$ ，则

$$
\begin{array}{r l} F ^ {\prime} (x) & = 2 a x + 2 b (y + x y ^ {\prime}) + 2 c y y ^ {\prime} \\ & = 2 (a x + b y) + 2 (b x + c y) \left(- \frac {x}{y}\right) = \frac {2}{y} [ (a - c) x y + b (y ^ {2} - x ^ {2}) ]. \end{array}
$$

令 $F'(x)=0$ ，记 $u=\frac{x}{y}$ ，由上式得

$$
b u ^ {2} - (a - c) u - b = 0.
$$

它的判别式 $\Delta=(a-c)^{2}+4b^{2}>0$ ，故方程有相异实根

$$
u _ {\pm} = \frac {1}{2 b} [ a - c \pm \sqrt {(a - c) ^ {2} + 4 b ^ {2}} ],
$$

且异号. 将它们代入 $x^{2} + y^{2} = 1$ 中可解得对应于 $u_{+}$ 的解 $x_{1}, x_{2}$ 和对应于 $u_{-}$ 的解 $x_{3}, x_{4}$ . 在这些驻点上

$$
\begin{array}{r l} F ^ {\prime \prime} (x) & = \frac {2}{y} \left\{(a - c) y - 2 b x + [ (a - c) x + 2 b y ] \left(- \frac {x}{y}\right) \right\} \\ & = \frac {2}{y ^ {2}} \left[ (a - c) (y ^ {2} - x ^ {2}) - 4 b x y \right] \\ & = \frac {2 x y}{y ^ {2}} \left[ - \frac {(a - c) ^ {2}}{b} - 4 b \right] \\ & = - \frac {2 u}{b} \left[ (a - c) ^ {2} + 4 b ^ {2} \right] \left\{ \begin{array}{l l} <   0, & u = u _ {+}, \\ > 0, & u = u _ {-}. \end{array} \right. \end{array}
$$

故 $x_{1}, x_{2}$ 是 $f$ 的极大值点, $x_{3}, x_{4}$ 是 $f$ 的极小值点, 其极大值和极小值分别为

$$
(a u _ {+} ^ {2} + 2 b u _ {+} + c) / (u _ {+} ^ {2} + 1) \text {和} (a u _ {-} ^ {2} + 2 b u _ {-} + c) / (u _ {-} ^ {2} + 1).
$$

解3 注意到

$$
f (x, y) = (x, y) \left( \begin{array}{c c} a & b \\ b & c \end{array} \right) \binom{x}{y}
$$

是一个实的二元二次型, 利用高等代数中的有关定理: 任意一个实二次型

$$
\sum_ {i, j = 1} ^ {n} a _ {i j} x _ {i} x _ {j} \quad (a _ {i j} = a _ {j i}, i, j = 1, 2, \dots , n)
$$

都可以经过正交的线性变换变成平方和

$$
\lambda_ {1} y _ {1} ^ {2} + \lambda_ {2} y _ {2} ^ {2} + \dots + \lambda_ {n} y _ {n} ^ {2},
$$

其中平方项的系数 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 就是矩阵 $(a_{ij})_{n \times n}$ 的特征多项式全部的根. 因此 $f(x, y)$ 可化为

$$
f (x, y) = \lambda_ {1} u ^ {2} + \lambda_ {2} v ^ {2}, \text {且} u ^ {2} + v ^ {2} = 1,
$$

其中 u, v 是 x, y 的线性组合, 然后再用 Lagrange 乘子法或初等方法求解. □

注 有些极值问题会有初等解法,但这些初等解法一般都有一定的局限性.

### 21.4.2 条件最值

在很多实际问题中, 要求的是条件最值. 从理论上讲, 可通过求条件极值及与边界值、不可导点的值等的比较来得到条件最值. 但从上节看到, 确定条件极值是一件比较麻烦的事. 在实际解题过程中, 有许多简捷的方法, 下面作些讨论.

以三元函数 $u = f(x,y,z)$ 和一个约束条件 $g(x,y,z) = 0$ 为例（设 $f,g$ 在其定义域上连续可微).在求 $u$ 的最值时，只要最值存在，且 $g_{x},g_{y},g_{z}$ 在 $D_{1} = \{(x,y,z)\mid g(x,y,z) = 0\}$ 上不同时为0，则最值点必是极值点，从而必是Lagrange函数的驻点.事实上，设 $\pmb{p}_0(x_0,y_0,z_0)$ 是最值点，且 $g_{z}(\pmb {p}_{0})\neq 0$ ，则存在点 $(x_0,y_0)$ 的邻域 $O(x_0,y_0)$ ，使在其中确定隐函数 $z = z(x,y)$ .于是 $u = f(x,y,z(x,y))$ 在 $O(x_0,y_0)$ 中有定义，且于点 $(x_0,y_0)$ 处取最值.因为 $O(x_0,y_0)$ 是开区域，所以 $u = f(x,y,z(x,y))$ 在点 $(x_0,y_0)$ 处取极值.由此可得求条件最值的方法如下：

1. 若约束为标准形式 $g(x, y, z) = 0$ ，且约束集合 $D_{1} = \{(x, y, z) \mid g(x, y, z) = 0\}$ 是有界闭集（此时最值必定存在）。设 $g_{x}, g_{y}, g_{z}$ 在 $D_{1}$ 上不同时为 0，则求出 Lagrange 函数的全部驻点及相应的函数值，再取其最值即可；

2. 若约束为标准形式 $g(x, y, z) = 0$ ，但 $D_{1}$ 为无界集。通常加上附加约束，转化为具有附加约束条件的有界域上的条件最值问题；

3. $D_{1}$ 为有界集，并有附加约束情况（如 $x^{2} + y^{2} + z^{2} = 1, x > 0, y > 0, z > 0$ ）。先扩充为有界闭集（如 $x^{2} + y^{2} + z^{2} = 1, x \geqslant 0, y \geqslant 0, z \geqslant 0$ ），从而最值存在，其次求出Lagrange函数全部驻点及相应的 $f$ 的值，令其最大者为 $M_{1}$ ，最小者为 $m_{1}$ ，然后求出 $f$ 在附加约束边界上的最大值 $M_{2}$ 和最小值 $m_{2}$ ，若 $M_{1} \geqslant M_{2}$ ，则条件最大值为 $M_{1}$ ；若 $M_{1} < M_{2}$ ，则条件最大值不存在。条件最小值可类似讨论；

4. 标准约束 $g(x,y,z)=0$ , $D_{1}$ 无界, 且具有附加约束 (如 $x+y+z=1$ , x>0, y>0, z>0). 通常应该首先证明条件最值存在, 再证明条件最值点只能在某一有界域中, 从而转化为情形 3.

注 对具体问题要作具体分析. 对某个具体问题, 很可能有体现这个问题特点的更为简捷的方法, 甚至是完全初等的方法.

例题21.4.2椭球面 $\frac{x^2}{3} + y^2 + \frac{z^2}{2} = 1$ 被通过原点的平面 $2x + y + z = 0$ 截成一个椭圆 $l$ . 求此椭圆的面积.

解 只要求出椭圆 l 的长短半轴即可. 于是问题转化为在约束条件

$$
F (x, y, z) \equiv \frac {x ^ {2}}{3} + y ^ {2} + \frac {z ^ {2}}{2} - 1 = 0,\tag{21.15}
$$

$$
G (x, y, z) \equiv 2 x + y + z = 0\tag{21.16}
$$

下求 $r^2 = x^2 + y^2 + z^2$ 之最大、最小值. 为此定义

$$
L (x, y, z, \lambda , \mu) = x ^ {2} + y ^ {2} + z ^ {2} + \lambda \left(\frac {x ^ {2}}{3} + y ^ {2} + \frac {z ^ {2}}{2} - 1\right) + \mu (2 x + y + z).
$$

令

$$
L _ {x} = 2 x + \frac {2}{3} \lambda x + 2 \mu = 0,\tag{21.17}
$$

$$
L _ {y} = 2 y + 2 \lambda y + \mu = 0,\tag{21.18}
$$

$$
L _ {z} = 2 z + \lambda z + \mu = 0.\tag{21.19}
$$

将(21.17)—(21.19)分别乘x,y,z,然后相加,利用(21.15),(21.16)得

$$
\lambda = - r ^ {2}.\tag{21.20}
$$

将 (21.20) 代入 (21.17), 得

$$
(r ^ {2} - 3) x = 3 \mu .
$$

若 $r^2 = 3$ ，则 $\mu = 0$ .代入(21.18)，(21.19)，得 $y = z = 0$ ，显然不满足(21.15)和(21.16).因此 $r^2 -3\neq 0$ .所以

$$
x = \frac {3 \mu}{r ^ {2} - 3}.\tag{21.21}
$$

同理将 (21.20) 代入 (21.18), (21.19) 得

$$
y = \frac {\mu}{2 (r ^ {2} - 1)}, \quad z = \frac {\mu}{r ^ {2} - 2}.\tag{21.22}
$$

将(21.21)，(21.22)代入(21.16)，得

$$
\frac {6 \mu}{r ^ {2} - 3} + \frac {\mu}{2 (r ^ {2} - 1)} + \frac {\mu}{r ^ {2} - 2} = 0.\tag{21.23}
$$

由于 $\mu \neq 0$ ，消去 $\mu$ ，得

$$
1 5 (r ^ {2}) ^ {2} - 4 9 r ^ {2} + 3 6 = 0.
$$

由此可以解出两个根 $r_1^2$ 和 $r_2^2$ 即为条件驻点对应的函数值. 由于约束集合是有界闭集, 故 $r^2$ 的最值存在, 又因为在约束集合上 $\frac{\partial(F,G)}{\partial(y,z)}, \frac{\partial(F,G)}{\partial(z,x)}, \frac{\partial(F,G)}{\partial(x,y)}$ 不同时为

0, 故最值必定在条件驻点达到, 因而这两个值也即为 $r^2$ 的最大最小值, 即长、短半轴的平方. 根据 Viète 定理有 $r_1^2 \cdot r_2^2 = \frac{36}{15} = \frac{12}{5}$ , 于是所求的面积为

$$
s = \pi r _ {1} r _ {2} = 2 \pi \sqrt {\frac {3}{5}}.
$$

注 1 本题所用解法也是条件极值或最值问题中常用的技巧, 其特点是不必求出条件驻点, 而直接求出所要求的条件最值.

注 2 在得到 (21.20) 之后可用下面的解法来求 $\lambda$ :

由(21.15)知 $x, y, z$ 不能同时为0，于是在方程组(21.16)—(21.19)中视 $x, y, z$ ， $\mu$ 为未知量， $\lambda$ 为系数，则方程组有非零解。于是系数矩阵的行列式为0，即

$$
\begin{array}{l} \left| \begin{array}{c c c c} 2 + \frac {2}{3} \lambda & 0 & 0 & 2 \\ 0 & 2 + 2 \lambda & 0 & 1 \\ 0 & 0 & 2 + \lambda & 1 \\ 2 & 1 & 1 & 0 \end{array} \right| \\ = \left(2 + \frac {2}{3} \lambda\right) \left| \begin{array}{c c c} 2 + 2 \lambda & 0 & 1 \\ 0 & 2 + \lambda & 1 \\ 1 & 1 & 0 \end{array} \right| - 2 \left| \begin{array}{c c c} 0 & 2 + 2 \lambda & 0 \\ 0 & 0 & 2 + \lambda \\ 2 & 1 & 1 \end{array} \right| \\ = - \left(2 + \frac {2}{3} \lambda\right) (2 + \lambda + 2 + 2 \lambda) - 4 (2 + 2 \lambda) (2 + \lambda) = 0, \end{array}
$$

即

$$
1 5 \lambda^ {2} - 4 9 \lambda + 3 6 = 0.
$$

例题21.4.3设 $p\geqslant 1$ 求 $f(x,y) = \frac{1}{2} (x^{p} + y^{p})$ 在 $x + y = C$ （ $C$ 为正常数）， $x\geqslant 0,y\geqslant 0$ 的条件下的最小值.

解设

令

$$
L (x, y, \lambda) = \frac {1}{2} (x ^ {p} + y ^ {p}) + \lambda (x + y - C).
$$

$$
\begin{array}{c} L _ {x} = \frac {p}{2} x ^ {p - 1} + \lambda = 0, \\ L _ {y} = \frac {p}{2} y ^ {p - 1} + \lambda = 0, \\ x + y = C. \end{array}
$$

解得驻点 $x = y = \frac{C}{2}$ . 由于约束集是有界闭集, 比较驻点值与附加约束集合边界点的值 $f\left(\frac{C}{2}, \frac{C}{2}\right) = \left(\frac{C}{2}\right)^p$ , $f(0, C) = f(C, 0) = \frac{1}{2} C^p$ , 可知 $\left(\frac{C}{2}\right)^p$ 为 $f$ 在条件 $x, y \geqslant 0$ 下的最小值.

注 由本题结论可得

$$
\frac {1}{2} (x ^ {p} + y ^ {p}) \geqslant \left(\frac {x + y}{2}\right) ^ {p}.
$$

一般地, 可以证明: 若 $p \geqslant 1, x_{i} \geqslant 0, i = 1, 2, \cdots, n$ , 则有 (参见上册 259 页题 8)

$$
\frac {1}{n} \sum_ {i = 1} ^ {n} x _ {i} ^ {p} \geqslant \left(\frac {1}{n} \sum_ {i = 1} ^ {n} x _ {i}\right) ^ {p}.
$$

很多不等式都可以类似地化为条件最值问题来证明.

例题21.4.4 求 $f(x, y, z) = \ln x + 2\ln y + 3\ln z$ 的最大值，其中 $x^{2} + y^{2} + z^{2} = 6r^{2} (r > 0), x > 0, y > 0, z > 0$ . 且证明对任何正数 $a, b, c$ ，有

$$
a b ^ {2} c ^ {3} \leqslant 1 0 8 \left(\frac {a + b + c}{6}\right) ^ {6}.\tag{21.24}
$$

分析 原问题等价于求 $u = xy^2 z^3$ 的最大值, 这样做是因为对数函数在零点无定义, 而幂函数则不然, 因而可将约束条件化为 $x \geqslant 0, y \geqslant 0, z \geqslant 0$ . 注意到在边界上 $u$ 取最小值. 故在 $D_1 = \{(x, y, z) \mid x^2 + y^2 + z^2 = 6r^2, x \geqslant 0, y \geqslant 0, z \geqslant 0\}$ 的内部一定有 $u$ 的最大值点.

解 构造 Lagrange 函数

$$
L (x, y, z, \lambda) = x y ^ {2} z ^ {3} + \lambda (x ^ {2} + y ^ {2} + z ^ {2} - 6 r ^ {2}).
$$

令

$$
L _ {x} = y ^ {2} z ^ {3} + 2 \lambda x = 0,\tag{21.25}
$$

$$
L _ {y} = 2 x y z ^ {3} + 2 \lambda y = 0,\tag{21.26}
$$

$$
L _ {z} = 3 x y ^ {2} z ^ {2} + 2 \lambda z = 0,\tag{21.27}
$$

$$
x ^ {2} + y ^ {2} + z ^ {2} = 6 r ^ {2}.\tag{21.28}
$$

在(21.25)—(21.27)两边分别乘以x,y,z,然后相加,利用(21.28)得

$$
x y ^ {2} z ^ {3} = - 2 \lambda r ^ {2}.\tag{21.29}
$$

再将(21.29)代入(21.25)—(21.27)中,明显地 $\lambda\neq0$ ,则

$$
x = r, y = \sqrt {2} r, z = \sqrt {3} r, \lambda = - 3 \sqrt {3} r ^ {4}
$$

对应了惟一驻点，于是 $xy^{2}z^{3}$ 的最大值为 $6\sqrt{3} r^6$ ，即

$$
x y ^ {2} z ^ {3} \leqslant 6 \sqrt {3} r ^ {6}.
$$

两边平方得

$$
x ^ {2} y ^ {4} z ^ {6} \leqslant 1 0 8 r ^ {1 2}.
$$

令 $a = x^{2}, b = y^{2}, c = z^{2}$ , 则 $r^2 = \frac{a + b + c}{6}$ . 于是

$$
a b ^ {2} c ^ {3} \leqslant 1 0 8 \left(\frac {a + b + c}{6}\right) ^ {6}.
$$

注 也可以用算术平均值-几何平均值不等式(上册第4页)证不等式(21.24):

$$
a b ^ {2} c ^ {3} = 2 ^ {2} 3 ^ {3} a \left(\frac {b}{2}\right) ^ {2} \left(\frac {c}{3}\right) ^ {3} \leqslant 1 0 8 \left(\frac {a + b + c}{6}\right) ^ {6}.\tag{21.30}
$$

### 21.4.3 隐函数的极值

求隐函数的极值有两种方法: 第一种是用隐函数求导, 称为直接法; 第二种是化为条件极值去做, 称为间接法. 下面的例子给出了求隐函数极值的这两种方法.

例题21.4.5 求由方程

$$
2 x ^ {2} + y ^ {2} + z ^ {2} + 2 x y - 2 x - 2 y - 4 z + 4 = 0\tag{21.31}
$$

所确定的函数 $z = z(x, y)$ 的极值.

解1（直接法）设 $g(x,y,z) = 2x^{2} + y^{2} + z^{2} + 2xy - 2x - 2y - 4z + 4,$ $\frac{\partial g}{\partial z} = 2z - 4.$ 由 $\frac{\partial g}{\partial z}\neq 0$ 得 $z\neq 2.$ 在满足(21.31)的 $(x,y,z),z\neq 2$ 附近确定了隐函数 $z = z(x,y)$ .由(21.31)对隐函数 $z = z(x,y)$ 求导，得

$$
4 x + 2 z \frac {\partial z}{\partial x} + 2 y - 2 - 4 \frac {\partial z}{\partial x} = 0,\tag{21.32}
$$

$$
2 y + 2 z \frac {\partial z}{\partial y} + 2 x - 2 - 4 \frac {\partial z}{\partial y} = 0.\tag{21.33}
$$

令 $\frac{\partial z}{\partial x} = \frac{\partial z}{\partial y} = 0$ ，则

$$
2 x + y - 1 = 0, \quad y + x - 1 = 0.
$$

由此得驻点为 $(0,1)$ ，将之代入 $(21.31)$ 得

$$
z ^ {2} - 4 z + 3 = 0.
$$

于是 $z_{1} = 1, z_{2} = 3,$ 在(21.32)，(21.33)两边求导，得

$$
4 + 2 \left(\frac {\partial z}{\partial x}\right) ^ {2} + 2 z \frac {\partial^ {2} z}{\partial x ^ {2}} - 4 \frac {\partial^ {2} z}{\partial x ^ {2}} = 0,\tag{21.34}
$$

$$
2 \frac {\partial z}{\partial x} \frac {\partial z}{\partial y} + 2 z \frac {\partial^ {2} z}{\partial x \partial y} + 2 - 4 \frac {\partial^ {2} z}{\partial x \partial y} = 0,\tag{21.35}
$$

$$
2 + 2 \left(\frac {\partial z}{\partial y}\right) ^ {2} + 2 z \frac {\partial^ {2} z}{\partial y ^ {2}} - 4 \frac {\partial^ {2} z}{\partial y ^ {2}} = 0.\tag{21.36}
$$

在(21.34)—(21.36)中令 $(x,y,z)=(0,1,1)$ ， $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial y}=0$ ，得 $A=z_{xx}=2,B=z_{xy}=1,C=z_{yy}=1$ ，于是 $D=AC-B^{2}>0$ 。故z=1为极小值。

在(21.34)—(21.36)中令 $(x,y,z)=(0,1,3)$ ， $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial y}=0$ ，得 $A=z_{xx}=-2,B=z_{xy}=-1,C=z_{yy}=-1$ ，于是 $D=AC-B^{2}>0$ 。由此可见z=3为极大值。

解 2 以 (21.31) 为约束条件, 取目标函数 $f(x,y,z)=z$ , 则 Lagrange 函数为

$$
L (x, y, z, \lambda) = z + \lambda \left(2 x ^ {2} + y ^ {2} + z ^ {2} + 2 x y - 2 x - 2 y - 4 z + 4\right).
$$

令

$$
L _ {x} = 4 \lambda x + 2 \lambda y - 2 \lambda = 0,\tag{21.37}
$$

$$
L _ {y} = 2 \lambda x + 2 \lambda y - 2 \lambda = 0,\tag{21.38}
$$

$$
L _ {z} = 1 + 2 \lambda z - 4 \lambda = 0.\tag{21.39}
$$

显然 $\lambda \neq 0$ ，于是由 (21.37) 和 (21.38) 得驻点为 (0,1). 代入 (21.31) 得 $z_{1} = 1, z_{2} = 3$ . 再由 (21.39) 得 $\lambda_{1} = \frac{1}{2}, \lambda_{2} = -\frac{1}{2}$ . 由于

$$
L _ {x x} = 4 \lambda , L _ {y y} = L _ {z z} = 2 \lambda , L _ {x y} = 2 \lambda , L _ {x z} = L _ {y z} = 0,
$$

于是 L 在 $(0,1,1)$ 与 $(0,1,3)$ 的 Hesse 矩阵分别为

$$
\left( \begin{array}{c c c} 2 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 1 \end{array} \right), \quad \left( \begin{array}{c c c} - 2 & - 1 & 0 \\ - 1 & - 1 & 0 \\ 0 & 0 & - 1 \end{array} \right),
$$

前者正定, 后者负定, 所以 z = 1 为极小值, z = 3 为极大值.

注 在上述条件极值问题中约束条件给出了一个有界闭集, 所以条件最值一定取到. 而且可以证明条件最值一定是条件极值, 所以 $z = 1$ 和 $z = 3$ 分别是 (21.31) 确定的隐函数 $z = z(x, y)$ 的最小值和最大值.

### 21.4.4 练习题

1. 求 $f(x,y,z)=x^{4}+y^{4}+z^{4}$ 在条件 xyz=1 下的极值.

2. 求 $u = x - 2y + 2z$ 在条件 $x^{2} + y^{2} + z^{2} = 1$ 下的极值.

3. 求 $z = \cos^{2} x + \cos^{2} y$ 满足条件 $x - y = \frac{\pi}{4}$ 时的极值.

4. 求 $f(x, y, z) = x^{l}y^{m}z^{n}$ 满足条件 $ax + by + cz = k$ 的极值，常数和变量均正.

5. 求 $u = \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}}$ 在条件 $x^{2} + y^{2} + z^{2} = 1, x \cos \alpha + y \cos \beta + z \cos \gamma = 0$ 下的极值，其中 $a > b > c > 0, \cos^{2}\alpha + \cos^{2}\beta + \cos^{2}\gamma = 1$ 

$$
a > b > c > 0, \cos^ {2} \alpha + \cos^ {2} \beta + \cos^ {2} \gamma = 1.
$$

6. 设约束条件为 $\frac{1}{x_{1}} + \frac{1}{x_{2}} + \cdots + \frac{1}{x_{n}} = \frac{1}{a}, x_{i} > 0, i = 1, 2, \cdots, n,$ 而 a > 0 为定值. 求 $u = x_{1}x_{2} \cdots x_{n}$ 的极值.

7. 求满足约束条件 $x + y + z = \frac{\pi}{2}$ ，x > 0, y > 0, z > 0 时， $u = \sin x \cdot \sin y \cdot \sin z$ 的极值.

8. 若 $\frac{x_{1}}{a_{1}} + \frac{x_{2}}{a_{2}} + \cdots + \frac{x_{n}}{a_{n}} = 1$ ，求 $u = x_{1}^{2} + x_{2}^{2} + \cdots + x_{n}^{2}$ 的极值，其中 $a_{i} > 0$ ( $i = 1, 2, \cdots, n$ ) 是常数，变量 $x_{1}, x_{2}, \cdots, x_{n}$ 均大于 0.

9. 求 $u = x^{3} + y^{3} + z^{3} - 2xyz$ 在 $x^{2} + y^{2} + z^{2} \leqslant 1$ 中的最大、最小值.

10. 求 $z = x^{2} - xy + y^{2}$ 在 $|x| + |y| \leqslant 1$ 中的最大、最小值.

11. 在球面 $x^{2} + y^{2} + z^{2} = 1$ 上求一点，使其到 n 个已知点 $M_{i}(x_{i}, y_{i}, z_{i}) (i = 1, 2, \cdots, n)$ 距离的平方和最小.

12. 求点 $(-1,0)$ 到半立方抛物线 $y^{2}=x^{3}$ 的最短距离.

13. 在周长为定数的三角形中, 求面积为最大的三角形.

14. 分解正数 a 为 n 个因子, 使其倒数和最小.

15. 长为 $a$ 的铁丝截成两段, 一段围成一个正方形, 另一段围成一个圆. 这两段各为多少时, 正方形与圆面积之和达最大值.

16. 过椭圆 $3x^{2} + 2xy + 3y^{2} = 1$ 上任意点作此椭圆的切线, 求切线与两坐标轴围成的三角形面积最小者.

17. 求原点到曲面 $(x - y)^2 + z^2 = 1$ 的最短距离.

18. 求 $x^{2} - xy + y^{2} - z^{2} = 1$ 与 $x^{2} + y^{2} = 1$ 的交线到原点的最近距离.

19. 在圆外切三角形中, 求面积最小的三角形.

20. 设四边形各边长为定数, 求面积最大的四边形.

21. 在一个已知凸四边形内求一点 C，使其到四个顶点距离的平方和最小.

22. 证明: 椭圆的内接三角形中, 面积达最大的三角形的一个顶点处的法线, 必定与此三角形的该顶点所对的边正交, 并求面积最大的内接三角形.

23. 在椭圆 $x^{2} + 4y^{2} = 4$ 上求一点, 使到直线 $3x + 4y = 12$ 的距离最短.

24. 设椭圆 $\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1$ 的任一切线与 x, y 轴分别交于 A, B 两点, 试求线段 AB 长度的最小值.

25. 在抛物线 $y = x^{2}$ 的所有与法线重合的弦中求长度最短的弦.

26. 设椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ 将圆 $(x - 1)^2 + y^2 = 1$ 包围于其内. 试求 $a, b$ 的值, 使符合上述条件的椭圆的面积为最小.

27. 设方程 $F(x,y)=0$ 满足隐函数定理的条件，并由此确定了隐函数 $y=f(x)$ ，又设 $F(x,y)$ 具有连续的二阶偏导数.

(1) 求 $f''(x)$ ;

(2) 若 $F(x_{0}, y_{0}) = 0, y_{0} = f(x_{0})$ 为 $f(x)$ 的一个极值，证明：当 $F_{y}(x_{0}, y_{0})$ 与 $F_{xx}(x_{0}, y_{0})$ 同号时， $f(x_{0})$ 为极大值，当 $F_{y}(x_{0}, y_{0})$ 与 $F_{xx}(x_{0}, y_{0})$ 异号时， $f(x_{0})$ 为极小值；

(3) 对方程 $x^{2} + xy + y^{2} = 27$ 在隐函数形式下(不解出 y)，求 $y = f(x)$ 的极值，并用 (2) 的结论判别极大或极小.

28. 设 $D$ 是由两抛物线 $y = x^{2} - 1, y = -x^{2} + 1$ 所围成的闭域, 试在 $D$ 内求一椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ , 使其面积为最大.

## §21.5 高维 Rolle 定理

本节可看成多元微分学应用的一个例子, 主要材料取自《美国数学月刊》(1995) 第 102 卷 243-249 页.

首先我们给出如下形式的 Rolle 定理.

命题 21.5.1 设函数 f 在 $R^{n}$ 中的闭球 $\overline{B}(0;r)$ 上连续，在它的边界上等于常值，并且在开球 $B(0;r)$ 上可微，则在球内至少有一个点是函数的临界点（驻点），即存在 $(x_{1}^{*}, x_{2}^{*}, \cdots, x_{n}^{*}) \in B(0;r)$ ，使 $\nabla f(x_{1}^{*}, x_{2}^{*}, \cdots, x_{n}^{*}) = 0$ .

证 如果 $f$ 在 $\overline{B}(0;r)$ 上为常值, 结论显然. 如果 $f$ 在 $\overline{B}(0;r)$ 上不为常值, 则至少有一个最值在内部取到. 因此这个最值点就是极值点, 从而为 $f$ 的临界点 (驻点).

当 $n = 2$ 时，设 $z = f(x,y)$ 表示定义在闭圆盘 $\overline{B}(0;r)$ 上的连续可微曲面 $\Sigma$ 曲面在点 $(x_0,y_0)$ 处的切平面的法方向是 $\left(\frac{\partial f}{\partial x} (x_0,y_0),\frac{\partial f}{\partial y} (x_0,y_0),\pm 1\right)$ 。上述定理表明存在点 $(x_0,y_0)$ ，使该点的切平面的法方向是 $(0,0,\pm 1)$ 。因而切平面平行于 $\Sigma$ 的边界所在的平面 $z = c,c$ 为常值。

下面考虑在 $B(0,r)\subset \mathbf{R}^n$ 上的可微映射 $\pmb{F}$ .有如下形式的Rolle定理：

命题 21.5.2 设 $F: B(0, r) \to \mathbf{R}^{m}$ 可微，在闭球 $\overline{B}(0, r)$ 上连续，且存在非零向量 $v \in R^{m}$ 使

$$
\pmb {v} \cdot \pmb {F} (\pmb {x}) = 0 \text {对任意} \pmb {x} \in \partial B (0, r) \text {成立},\tag{21.40}
$$

则存在 $\pmb{\xi} \in B(0, r)$ , 使对任意 $\pmb{u} \in \mathbf{R}^n$ 都有

$$
\boldsymbol {v} \cdot J \boldsymbol {F} (\boldsymbol {\xi}) \boldsymbol {u} = 0.\tag{21.41}
$$

几何分析 在给出这个定理的证明之前, 先看一下它的几何含义是什么. 如果 $n = 2, m = 3$ , 则 $\pmb{F}$ 就表示定义在圆盘 $\overline{B}(0,r)$ 上的一个双参数曲面 $\Sigma$ . 条件 (21.40) 表明这个曲面在边界位于以 $\pmb{v}$ 为法向量的一个平面 $\Pi$ 上 (即法向量与平面的生成向量正交). 然后再分别取 $\pmb{u} = \pmb{e}_1, \pmb{e}_2$ 为 $\mathbf{R}^2$ 的标准基, 则 $\alpha = JF(\xi)e_1$ 和 $\beta = JF(\xi)e_2$ 就是 $JF(\xi)$ 的两个线性无关的列向量, 因此

$$
\boldsymbol {v} \cdot J \boldsymbol {F} (\boldsymbol {\xi}) \boldsymbol {e} _ {j} = 0, \quad j = 1, 2
$$

表明 $\pmb{v}$ 与该两个线性无关向量正交. 另一方面, 这两个向量正是过 $F(\xi)$ 的切平面 $\Pi_{\xi}$ 的生成向量. 因此, $\pmb{v}$ 是 $\Pi_{\xi}$ 的法向量. 也就是说 $\Pi_{\xi}$ 与 $\Pi$ 平行. 一个定义在圆盘上的双参数可微曲面, 如果它在边界上的点都位于一个平面 $\Pi$ 上, 则必可在圆盘内部找到一参量 $\pmb{\xi}$ , 使对应于 $\pmb{\xi}$ 的曲面的点的切平面 $\Pi_{\xi}$ 与 $\Pi$ 平行.

命题21.5.2的证明 定义多元函数 $g(\pmb{x}) = \pmb{v} \cdot \pmb{F}(\pmb{x})$ ，则 $g$ 是 $B(0, r)$ 上的可微函数，在 $\overline{B}(0, r)$ 上连续，并且当 $\pmb{x} \in \partial B(0, r)$ 时， $g(\pmb{x}) = 0$ 。因此 $g$ 的最大值和最小值中至少有一个在开球 $B(0, r)$ 中的点 $\pmb{\xi}$ 上取到。从而 $\pmb{\xi}$ 必为 $g$ 的极值点，因此 $\nabla g(\pmb{\xi}) = 0$ 。所以， $\forall \pmb{u} \in \mathbf{R}^m$ ，有 $\nabla g(\pmb{\xi}) \cdot \pmb{u} = 0$ ，即

$$
\boldsymbol {v} \cdot J \boldsymbol {F} (\boldsymbol {x}) \boldsymbol {u} = 0.
$$

注1 在命题21.5.2中，开球 $B(0,r)$ 可换成任一个有界开区域

注2 在命题21.5.2中，条件(21.40)可换成： $\exists x_0\in B(0,r)$ ，使

$$
\pmb {v} \cdot (\pmb {F} (\pmb {x}) - \pmb {F} (\pmb {x} _ {0})) \text {在} \partial B (0, r) \text {上不变号}.
$$

注3 命题21.5.2有很多有趣的几何应用，如本章第二组参考题2,3.

## §21.6 对于教学的建议

### 21.6.1 学习要点

1. 在解有关几何的习题中, 许多学生惧怕“方向”, 如切向、法向等, 到了曲线、曲面积分部分更是如此. 要从这一章起开始培养学生用数学分析处理空间问题的兴趣和信心. 几何应用方面的习题可以参考 [25, 55] 的 §6.5.

2. Taylor 公式是微分学应用的基础. 用向量与矩阵的语言叙述和运用 Taylor 公式也许一上来要多费些时间, 但从长远来看是非常值得的.

3. 极值问题 (包括条件极值、条件最值) 是本章的一个重点, 材料十分丰富, 我们在很多地方加进了自己的学习体会. 一些重要的应用问题, 如距离问题、面积问题和不等式等是研究生入学试题中的常客. 21.4.4 小节中许多练习题选自实际试题, 可用于考研复习. 还可以参考 [25, 55] 6.7.4 小节中的许多应用题.

4. 对习题课的建议 现在有一种不好的苗头是削减多元微积分的课时, 有些老师把多元微积分上成了单纯的“计算”课. 但实际上多元微积分中包含了极为丰富的数学思想和解题技巧. 它所体现的综合性、空间性、应用性也不可能被一元微积分所替代. 本章集中了多元微分学应用最重要的一些内容, 在习题课安排上要给予充分的时间保证, 让学生逐步形成使用微分学工具描述、处理多维问题的能力. 由于向量与矩阵是处理多维问题最基本的数学工具, 在训练中, 要有意识地引导学生使用这些工具. 可多举一些结合高等代数知识的例子.

在解条件极值问题时，除认真分析目标函数、限制条件，正确写出Lagrange函数外，对如何快速准确地求出结果，要注意两点．下面以例题21.4.2为例说明：

(1) 在令偏导数为 0, 解代数方程组求驻点时, 要充分利用方程组的特点. 在例题 21.4.2 中, (21.15)—(21.19) 是 5 个方程, 5 个未知量的方程组. 如果不充分利用方程组的特点, 是很难解出的. 一般来说首先像例题中那样得到表达式 (21.20);

(2) 在解方程组 (21.15)—(21.19) 时, 不需要将全部 5 个未知量都解出. 事实上由 (21.20) 知只需要将 $\lambda$ 求出即可.

### 21.6.2 参考题

#### 第一组参考题

1. 曲面 $z = z(x, y)$ 由方程 $F\left(\frac{x - a}{z - c}, \frac{y - b}{z - c}\right) = 0$ 确定，其中 $a, b, c$ 为常数。证明：

(1) 曲面的切平面经过定点 $(a, b, c)$ ;

(2) 函数 $z = z(x, y)$ 满足方程

$$
\frac {\partial^ {2} z}{\partial x ^ {2}} \cdot \frac {\partial^ {2} z}{\partial y ^ {2}} - \left(\frac {\partial^ {2} z}{\partial x \partial y}\right) ^ {2} = 0.
$$

2. 在平面上给定一个边长为 $a, b, c$ 的三角形，在它上面可作无数个等体积的给定高 $h$ 的三棱锥，在其中求出有最小侧面积 $S$ 的那一个.

3. 设 $u = f(x, y, z)$ 为二次可微函数, 记 $\cos \alpha, \cos \beta, \cos \gamma$ 为方向 $l$ 的方向余弦. 求 $\frac{\partial^2 u}{\partial l^2} = \frac{\partial}{\partial l} \left( \frac{\partial u}{\partial l} \right)$ .

4. 设 $u = f(x, y, z)$ 为二次可微函数, $l_{i} = (\cos \alpha_{i}, \cos \beta_{i}, \cos \gamma_{i})$ , i = 1, 2, 3 为三个互相垂直的单位向量, 证明:

$$
\left(\frac {\partial u}{\partial l _ {1}}\right) ^ {2} + \left(\frac {\partial u}{\partial l _ {2}}\right) ^ {2} + \left(\frac {\partial u}{\partial l _ {3}}\right) ^ {2} = \left(\frac {\partial u}{\partial x}\right) ^ {2} + \left(\frac {\partial u}{\partial y}\right) ^ {2} + \left(\frac {\partial u}{\partial z}\right) ^ {2};
$$

$$
\frac {\partial^ {2} u}{\partial l _ {1} ^ {2}} + \frac {\partial^ {2} u}{\partial l _ {2} ^ {2}} + \frac {\partial^ {2} u}{\partial l _ {3} ^ {2}} = \frac {\partial^ {2} u}{\partial x ^ {2}} + \frac {\partial^ {2} u}{\partial y ^ {2}} + \frac {\partial^ {2} u}{\partial z ^ {2}}; \tag {2}
$$

(3) 若 $\frac{\partial f}{\partial l_i} = 0, i = 1,2,3,$ 则 $f(x,y,z)$ 在 $\mathbf{R}^3$ 中恒为常数.

5. 设 $f$ 在 $O_{\delta}(\pmb{x}_0) \subset \mathbf{R}^n$ 上连续, 在 $O_{\delta}(\pmb{x}_0) \setminus \{\pmb{x}_0\}$ 可微, 证明:

(1) 如果 $\forall x \in O_{\delta}(x_0) \setminus \{x_0\}$ , 有 $(x - x_0) \cdot \nabla f(x) < 0$ , 则 $x_0$ 是 $f$ 的一个极大值点;

(2) 如果 $\forall x \in O_{\delta}(x_0) \setminus \{x_0\}$ , 有 $(x - x_0) \cdot \nabla f(x) > 0$ , 则 $x_0$ 是 $f$ 的一个极小值点.

6. 设 $f$ 在 $O_{\delta_0}(\pmb{x}_0) \subset \mathbf{R}^n$ 上二次连续可微, Hesse 矩阵 $\left(\frac{\partial^2 f}{\partial x_i \partial x_j} (\pmb{x}_0)\right)$ 为正定阵, $\nabla f(\pmb{x}_0) = \mathbf{0}$ . 证明: $\exists \delta \in (0, \delta_0)$ , 使 $(\pmb{x} - \pmb{x}_0) \cdot \nabla f(\pmb{x}) > 0, \forall \pmb{x} \in O_\delta(\pmb{x}_0) \setminus \{\pmb{x}_0\}$ .

7. 用条件极值的方法证明 Hölder 不等式:

$$
\sum_ {i = 1} ^ {n} a _ {i} x _ {i} \leqslant \left(\sum_ {i = 1} ^ {n} a _ {i} ^ {p}\right) ^ {\frac {1}{p}} \left(\sum_ {i = 1} ^ {n} x _ {i} ^ {q}\right) ^ {\frac {1}{q}},
$$

其中 $a_{i} \geqslant 0, x_{i} \geqslant 0, i = 1, 2, \cdots, n; p, q > 1, \frac{1}{p} + \frac{1}{q} = 1.$ 

8. 证明: 二次型

$$
f (x, y, z) = A x ^ {2} + B y ^ {2} + C z ^ {2} + 2 D y z + 2 E z x + 2 F x y
$$

在单位球面 $x^{2} + y^{2} + z^{2} = 1$ 上的最大值与最小值恰好是矩阵

$$
\left( \begin{array}{c c c} A & F & E \\ F & B & D \\ E & D & C \end{array} \right)
$$

的最大特征值与最小特征值.

9. 设 $\boldsymbol{A}=(a_{ij})$ 是 n 阶方阵，且设 $\sum_{j=1}^{n}a_{ij}^{2}=H_{i}, i=1,2,\cdots,n,$ 其中 $H_{1}, H_{2}, \cdots, H_{n}$ 是 n 个确定的非负实数.

(1) 证明: 如果矩阵 A 的行向量是 $R^{n}$ 中两两正交的向量, 则 $(\det A)^{2}$ 取到极值;

(2) 根据等式 $(\det A)^{2} = \det A \cdot \det A^{\mathrm{T}}$ ，其中 $A^{T}$ 是矩阵 A 的转置矩阵，证明： $\max\left\{\left(\det A\right)^{2}\right\}=H_{1}\times H_{2}\times\cdots\times H_{n};$ 

(3) 证明: 对任意的矩阵 $B = (b_{ij})$ 有 Hadamard 不等式

$$
(\det B) ^ {2} \leqslant \prod_ {j = 1} ^ {n} \left(\sum_ {i = 1} ^ {n} b _ {i j} ^ {2}\right);
$$

(4) 给 Hadamard 不等式以直观的几何解释.

10. 设 $u(x, y)$ 在 $x^{2} + y^{2} \leqslant 1$ 上连续，在 $x^{2} + y^{2} < 1$ 上满足 $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = u$ ，则

(1) 若在 $x^{2} + y^{2} = 1$ 上 $u(x,y)\geqslant 0$ ，证明：当 $x^{2} + y^{2}\leqslant 1$ 时， $u(x,y)\geqslant 0;$ 

(2) 若在 $x^{2} + y^{2} = 1$ 上 $u(x,y) > 0$ , 证明: 当 $x^{2} + y^{2} \leqslant 1$ 时, $u(x,y) > 0$ .

11. 对多元函数极值的充分性定理给出详细的证明.

12. 仿照 21.4.2 小节对具有多个约束条件的条件最值的确定给出详细的讨论.

#### 第二组参考题

1. 设二次连续可微函数 $f$ 在点 $\pmb{p}_0$ 处的梯度为零向量, 但 Hesse 矩阵 $\pmb{Q}$ 为非零矩阵. 证明: $f$ 在 $\pmb{p}_0$ 处的函数值增长最快的方向位于 $\pmb{Q}$ 的最大特征值对应的特征子空间中. 如最大特征值对应的特征子空间为一维空间, 则相应的方向就是 $f$ 增长最快的方向.

2. 设 $\mathbf{R}^3$ 中的光滑曲线段 $L$ 的参数表达式为

$$
x = x (t), \quad y = y (t), \quad z = z (t), \quad t \in [ a, b ].
$$

$P(x(a),y(a),z(a))$ , $Q(x(b),y(b),z(b))$ 为 L 的起点与终点. $\Pi$ 是通过直线段 PQ 的任一平面. 证明: $\exists\xi\in(a,b)$ , 使得向量 $(x'(\xi),y'(\xi),z'(\xi))$ 与 $\Pi$ 平行.

3. (Sanderson (桑德森) 中值定理) 设 $f: [a, b] \rightarrow R^{m}$ 为 k 次可微向量值函数，并且非零向量 v 与 $f(a), f(b)$ 及 $f^{(j)}(a), j = 1, 2, \cdots, k - 1$ 正交。证明： $\exists \xi \in (a, b)$ ，使 v 与 $f^{(k)}(\xi)$ 正交。其中 $f^{(j)}$ 表示 f 的各个分量函数的 j 阶导数组成的向量。

4. 证明：与曲面 $ax^2 + by^2 + cz^2 = 1 (abc \neq 0)$ 相切的三个互相垂直的平面的交点在球面 $x^2 + y^2 + z^2 = \frac{1}{a} + \frac{1}{b} + \frac{1}{c}$ 上.

5. 设曲面 $\Sigma: z = f(x, y), (x, y) \in D$ 的每一点的法线与 $z$ 轴相交, 其中 $D$ 是 $\mathbf{R}^2$ 中的圆环或圆盘, $f$ 是 $C^1$ 函数. 证明: $\Sigma$ 是一个旋转曲面.

6. 证明: 不等式

$$
2 a b \leqslant \mathrm{e} ^ {a - 1} + a \ln a + \mathrm{e} ^ {b - 1} + b \ln b
$$

对所有 a > 0, b > 0 成立. 并求出等式成立的充分必要条件.

7. 设 $T: u = \varphi(x, y), v = \psi(x, y)$ 是平面上的一个变换. 如果在该变换下任何两条相交曲线的交角保持不变, 则称该变换是保角的.

(1) 如果 $\varphi$ 与 $\psi$ 满足 $\varphi_{x} = \psi_{y}, \varphi_{y} = -\psi_{x}$ ，则 T 是保角变换；

(2) 证明: 下面的反演变换是保角的

$$
\xi = \frac {x}{x ^ {2} + y ^ {2}}, \quad \eta = \frac {y}{x ^ {2} + y ^ {2}};
$$

(3) 证明: 任一圆的反演像是另一圆或直线;

(4) 求出反演变换的 Jacobi 行列式;

(5) 证明: 连续可微变换 $T$ 是保角的充分必要条件是它满足 Cauchy-Riemann 方程

$$
\varphi_ {x} = \psi_ {y}, \varphi_ {y} = - \psi_ {x} \text {或} \varphi_ {x} = - \psi_ {y}, \varphi_ {y} = \psi_ {x}.
$$

第一种情况保持角度方向, 第二种情况角度反向.

8. 由公式

$$
\xi = \frac {x}{x ^ {2} + y ^ {2} + z ^ {2}}, \quad \eta = \frac {y}{x ^ {2} + y ^ {2} + z ^ {2}}, \quad \zeta = \frac {z}{x ^ {2} + y ^ {2} + z ^ {2}}
$$

定义三维反演变换.

(1) 证明: 任何两个曲面之间的夹角在反演变换下不变;

(2) 证明: 球面被变换为球面或平面;

(3) 求变换的 Jacobi 行列式.
