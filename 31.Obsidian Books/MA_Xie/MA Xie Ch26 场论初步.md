


# 第二十六章 场论初步

场本来是物理学的研究对象，如温度场、电磁场、重力场等。这些场除了有各自不同的物理性质之外，表现在数量关系上可分为数量场与向量场。

本章介绍场论的初步数学知识. 在 §26.1 引入散度和旋度的概念, 然后将梯度、散度、旋度与 Green 公式、Gauss 公式、Stokes 公式融合在一起, 展现多元积分丰富多彩的一面. 在 §26.2 中介绍 Laplace 算子和有关调和函数的一些知识. 最后一节是学习要点和两组参考题.

## §26.1 散度和旋度

### 26.1.1 散度

设 $D$ 是 $\mathbf{R}^3$ 中的一个区域, $\pmb{a}(x,y,z) = P(x,y,z)\pmb{i} + Q(x,y,z)\pmb{j} + R(x,y,z)\pmb{k}$ 是定义在 $D$ 上的向量值函数, 称 $\pmb{a}$ 是定义在 $D$ 上的一个向量场. 又设 $P, Q, R$ 有连续的偏导数, 记

$$
\operatorname{div} \boldsymbol {a} = \frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y} + \frac {\partial R}{\partial z},
$$

称之为向量场 a 的散度, 它是一个数量, 有时也记为 $\nabla \cdot a$ . 注意与一个三元函数 f 的梯度 $\nabla f$ 的区别 (见 21.2.2 小节).

类似地在 $\mathbf{R}^2$ 中，若 $a = P(x,y)i + Q(x,y)j$ ，则

$$
\operatorname{div} \boldsymbol {a} = \frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y}.
$$

利用散度的记号, 可以将 Gauss 公式 (25.5), (25.6) 写为

$$
\iiint_ {D} \operatorname{div} \boldsymbol {a} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \oiint_ {\partial D} P \mathrm{d} y \mathrm{d} z + Q \mathrm{d} z \mathrm{d} x + R \mathrm{d} x \mathrm{d} y,\tag{26.1}
$$

$$
\iiint_ {D} \operatorname{div} \boldsymbol {a} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \oiint_ {\partial D} \boldsymbol {a} \cdot \boldsymbol {n} \mathrm{d} S,\tag{26.2}
$$

其中 $\boldsymbol{a} = (P, Q, R)$ ，n 是 $\partial D$ 上的单位外法向量。而将 Green 公式 (24.9)，(24.10) 写为

$$
\iint_ {D} \operatorname{div} \boldsymbol {a} \mathrm{d} x \mathrm{d} y = \oint_ {\partial D} - Q \mathrm{d} x + P \mathrm{d} y,\tag{26.3}
$$

$$
\iint_ {D} \operatorname{div} \boldsymbol {a} \mathrm{d} x \mathrm{d} y = \oint_ {\partial D} \boldsymbol {a} \cdot \boldsymbol {n} \mathrm{d} s.\tag{26.4}
$$

又可将公式 $(26.2)$ 与 $(26.4)$ 统一写为

$$
\int_ {D} \operatorname{div} \boldsymbol {a} \mathrm{d} V = \oint_ {\partial D} \boldsymbol {a} \cdot \boldsymbol {n} \mathrm{d} S.\tag{26.5}
$$

上述公式称为散度定理, 它对任意维数都是成立的.

n = 1 时，一元函数 $f(x)$ 的散度是 $f'(x)$ ，dV = dx，在区间的左端点 n = -1，在区间的右端点 n = 1，在区间端点的点积分理解为被积函数在该点的值，则 (26.5) 就是 Newton-Leibniz 公式.

n = 2 时 (26.5) 就是 Green 公式, dV 为面积元.

n = 3 时 (26.5) 就是 Gauss 公式, dV 是体积元, n 是 $\partial D$ 上的单位外法向量.

例题26.1.1 证明重积分的分部积分公式

$$
\iiint_ {\Omega} u \frac {\partial v}{\partial x} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \oiint_ {\Sigma} u v \mathrm{d} y \mathrm{d} z - \iiint_ {\Omega} v \frac {\partial u}{\partial x} \mathrm{d} x \mathrm{d} y \mathrm{d} z,
$$

其中 $\Sigma$ 是 $\Omega$ 的边界, 分片光滑, 取外侧. u, v 在 $\overline{\Omega}$ 上连续可微.

证 在(26.1)中令 $a=(uv,0,0)$ ，则

$$
\iiint_ {\Omega} \left(u \frac {\partial v}{\partial x} + v \frac {\partial u}{\partial x}\right) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\Sigma} u v \mathrm{d} y \mathrm{d} z.
$$

注 令 $v = 1$ ，则有

$$
\iiint_ {\Omega} \frac {\partial u}{\partial x} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\Sigma} u \mathrm{d} y \mathrm{d} z.
$$

### 26.1.2 旋度

设 $a = Pi + Qj + Rk$ 是定义在区域 D 上的向量场，又设 P, Q, R 在 D 上有连续偏导数。记

$$
\begin{array}{l} \operatorname{curl} \boldsymbol {a} = \left| \begin{array}{c c c} \boldsymbol {i} & \boldsymbol {j} & \boldsymbol {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right| \\ = \left(\frac {\partial R}{\partial y} - \frac {\partial Q}{\partial z}\right) \boldsymbol {i} + \left(\frac {\partial P}{\partial z} - \frac {\partial R}{\partial x}\right) \boldsymbol {j} + \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \boldsymbol {k}, \end{array}
$$

称之为向量场 a 的旋度. 它是一个向量, 有时也记为 $\nabla \times a$ . 利用旋度的记号, 可将 Stokes 公式 (25.13) 写为

$$
\iint_ {D} \operatorname{curl} \boldsymbol {a} \cdot \boldsymbol {n} \mathrm{d} S = \oint_ {\partial D} \boldsymbol {a} \cdot \boldsymbol {\tau} \mathrm{d} s,
$$

其中 D 是空间曲面, $\partial D$ 是它的边界, $\boldsymbol{a} = (P, Q, R)$ , 等式左端的 n 为 D 的单位外法向量, 等式右端的 $\tau$ 是 $\partial D$ 的切向量. 它们两者的方向服从右手系法则.

在下面需要星形区域的概念.

定义 设 M 是区域 G 内一点, 称 G 是关于 M 的星形区域, 如果对任意一点 $P \in G$ , 都有 P 与 M 之间的直线段 $PM \subset G$ .

例题 26.1.2 设 G 是 $R^{3}$ 中关于其内一点 M 的星形区域. $\boldsymbol{F} = (P, Q, R)$ 是 G 上的光滑向量场, 且 div F = 0. 证明: 存在 G 上的光滑向量场 A, 使得

$$
\boldsymbol {F} = \operatorname{curl} \boldsymbol {A}.
$$

证 不妨设 $M$ 为原点. 由于 $G$ 关于原点为星形区域, 于是对任何 $(x, y, z) \in G$ , 有

$$
\begin{array}{r l} P (x, y, z) & = \int_ {0} ^ {1} \frac {\partial}{\partial t} [ t ^ {2} P (t x, t y, t z) ] \mathrm{d} t \\ & = 2 \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t + \int_ {0} ^ {1} t ^ {2} \frac {\partial}{\partial t} P (t x, t y, t z) \mathrm{d} t. \end{array}\tag{26.6}
$$

由已知条件有 $\frac{\partial P}{\partial x} = -\frac{\partial Q}{\partial y} - \frac{\partial R}{\partial z}$ ，将它代入 (26.6) 中，则

$$
\begin{array}{r l} P (x, y, z) & = 2 \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t \\ & \quad - \int_ {0} ^ {1} t ^ {2} x \left[ \frac {\partial Q}{\partial y} (t x, t y, t z) + \frac {\partial R}{\partial z} (t x, t y, t z) \right] \mathrm{d} t \\ & \quad + \int_ {0} ^ {1} t ^ {2} y \frac {\partial P}{\partial y} (t x, t y, t z) \mathrm{d} t + \int_ {0} ^ {1} t ^ {2} z \frac {\partial P}{\partial z} (t x, t y, t z) \mathrm{d} t \\ & = \frac {\partial}{\partial y} \left[ y \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t - x \int_ {0} ^ {1} t Q (t x, t y, t z) \mathrm{d} t \right] \\ & \quad - \frac {\partial}{\partial z} \left[ x \int_ {0} ^ {1} t R (t x, t y, t z) \mathrm{d} t - z \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t \right]. \end{array}
$$

记

$$
\begin{array}{l} A _ {1} (x, y, z) = z \int_ {0} ^ {1} t Q (t x, t y, t z) \mathrm{d} t - y \int_ {0} ^ {1} t R (t x, t y, t z) \mathrm{d} t, \\ A _ {2} (x, y, z) = x \int_ {0} ^ {1} t R (t x, t y, t z) \mathrm{d} t - z \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t, \\ A _ {3} (x, y, z) = y \int_ {0} ^ {1} t P (t x, t y, t z) \mathrm{d} t - x \int_ {0} ^ {1} t Q (t x, t y, t z) \mathrm{d} t, \end{array}
$$

则

$$
P (x, y, z) = \frac {\partial A _ {3}}{\partial y} - \frac {\partial A _ {2}}{\partial z}.
$$

同理可证

$$
Q (x, y, z) = \frac {\partial A _ {1}}{\partial z} - \frac {\partial A _ {3}}{\partial x}, R (x, y, z) = \frac {\partial A _ {2}}{\partial x} - \frac {\partial A _ {1}}{\partial y}.
$$

令 $\boldsymbol{A}=(A_{1},A_{2},A_{3})$ ，则

$$
\boldsymbol {F} = \operatorname{curl} \boldsymbol {A}.
$$

### 26.1.3 Hamilton算子 $\nabla$

$\nabla$ 是一个算子符号, 称为 Hamilton (哈密顿) 算子. 它的定义是

$$
\nabla = i \frac {\partial}{\partial x} + j \frac {\partial}{\partial y} + k \frac {\partial}{\partial z}.
$$

其具体含义如下: 设 f 是一个可微函数, 则

$$
\nabla f = i \frac {\partial f}{\partial x} + j \frac {\partial f}{\partial y} + k \frac {\partial f}{\partial z},
$$

即

$$
\nabla f = \mathrm{grad} f (f \text {   的梯度 }).
$$

设 a 是一个向量场, $a = Pi + Qj + Rk$ , 则

$$
\begin{array}{c} \nabla \cdot \boldsymbol {a} = \operatorname{div} \boldsymbol {a}, \\ \nabla \times \boldsymbol {a} = \operatorname{curl} \boldsymbol {a}. \end{array}
$$

因此, 我们也常用 $\nabla \cdot a$ 和 $\nabla \times a$ 分别表示 a 的散度与旋度. 直接运算可以证明下列关系式 (其中 $\alpha, \beta$ 为常数, f, g 为数量函数, a, b 为向量函数):

$$
\nabla (\alpha f + \beta g) = \alpha \nabla f + \beta \nabla g,\tag{26.7}
$$

$$
\nabla \cdot (\alpha \boldsymbol {a} + \beta \boldsymbol {b}) = \alpha \nabla \cdot \boldsymbol {a} + \beta \nabla \cdot \boldsymbol {b},\tag{26.8}
$$

$$
\nabla \times (\alpha \boldsymbol {a} + \beta \boldsymbol {b}) = \alpha \nabla \times \boldsymbol {a} + \beta \nabla \times \boldsymbol {b},\tag{26.9}
$$

$$
\nabla (f g) = (\nabla f) g + f (\nabla g),\tag{26.10}
$$

$$
\nabla \cdot (f \boldsymbol {a}) = f (\nabla \cdot \boldsymbol {a}) + (\nabla f) \cdot \boldsymbol {a},\tag{26.11}
$$

$$
\nabla \times (f \boldsymbol {a}) = f (\nabla \times \boldsymbol {a}) + (\nabla f) \times \boldsymbol {a},\tag{26.12}
$$

$$
\nabla \cdot (\nabla \times \boldsymbol {a}) = 0 \quad (\text {即任一向量函数的旋度的散度为零}),\tag{26.13}
$$

$$
\nabla \times (\nabla f) = \mathbf {0} \quad (\text {即任一数量函数的梯度的旋度为零向量}).\tag{26.14}
$$

例题 26.1.3 A, B 为可微的向量函数, 则

$$
\nabla \cdot (\boldsymbol {A} \times \boldsymbol {B}) = \boldsymbol {B} \cdot (\nabla \times \boldsymbol {A}) - \boldsymbol {A} \cdot (\nabla \times \boldsymbol {B}).
$$

证 设 $\boldsymbol{A}=(a_{1},a_{2},a_{3}),\boldsymbol{B}=(b_{1},b_{2},b_{3})$ ，则有

$$
\boldsymbol {A} \times \boldsymbol {B} = \left| \begin{array}{c c c} \boldsymbol {i} & \boldsymbol {j} & \boldsymbol {k} \\ a _ {1} & a _ {2} & a _ {3} \\ b _ {1} & b _ {2} & b _ {3} \end{array} \right|.
$$

于是

$$
\begin{array}{r l} \nabla \cdot (\boldsymbol {A} \times \boldsymbol {B}) & = \frac {\partial}{\partial x} \left| \begin{array}{l l} a _ {2} & a _ {3} \\ b _ {2} & b _ {3} \end{array} \right| - \frac {\partial}{\partial y} \left| \begin{array}{l l} a _ {1} & a _ {3} \\ b _ {1} & b _ {3} \end{array} \right| + \frac {\partial}{\partial z} \left| \begin{array}{l l} a _ {1} & a _ {2} \\ b _ {1} & b _ {2} \end{array} \right| \\ & = \left| \begin{array}{l l} \partial_ {x} a _ {2} & \partial_ {x} a _ {3} \\ b _ {2} & b _ {3} \end{array} \right| - \left| \begin{array}{l l} \partial_ {y} a _ {1} & \partial_ {y} a _ {3} \\ b _ {1} & b _ {3} \end{array} \right| + \left| \begin{array}{l l} \partial_ {z} a _ {1} & \partial_ {z} a _ {2} \\ b _ {1} & b _ {2} \end{array} \right| \\ & + \left| \begin{array}{l l} a _ {2} & a _ {3} \\ \partial_ {x} b _ {2} & \partial_ {x} b _ {3} \end{array} \right| - \left| \begin{array}{l l} a _ {1} & a _ {3} \\ \partial_ {y} b _ {1} & \partial_ {y} b _ {3} \end{array} \right| + \left| \begin{array}{l l} a _ {1} & a _ {2} \\ \partial_ {z} b _ {1} & \partial_ {z} b _ {2} \end{array} \right| \\ & = I _ {1} + I _ {2}, \end{array}
$$

其中 $I_{1}$ 为前三项, $I_{2}$ 为后三项. 经计算验证有

$$
I _ {1} = b _ {1} \left(\partial_ {y} a _ {3} - \partial_ {z} a _ {2}\right) + b _ {2} \left(\partial_ {z} a _ {1} - \partial_ {x} a _ {3}\right) + b _ {3} \left(\partial_ {x} a _ {2} - \partial_ {y} a _ {1}\right) = \boldsymbol {B} \cdot (\nabla \times \boldsymbol {A}),
$$

同理可证

$$
I _ {2} = - \boldsymbol {A} \cdot (\nabla \times \boldsymbol {B}).
$$

例题 26.1.4 设 $u(x,y,z)$ 在 $\overline{B}_{R}(M_{0})$ 上二阶连续可微, 其中 $M_{0}=(x_{0},y_{0},z_{0})$ , $B_{R}(M_{0})$ 是以 $M_{0}$ 为心, 以 R 为半径的球. 对于 $0<\rho\leqslant R$ , 如果都有

$$
\oiint_ {\partial B _ {\rho} (M _ {0})} \frac {\partial u}{\partial \boldsymbol {n}} (x, y, z) \mathrm{d} S = 0,
$$

其中 $\partial B_{\rho}(M_{0})$ 是以 $M_{0}$ 为心，以 $\rho$ 为半径的球面，n 是球面上的单位外法向量，则

$$
u (M _ {0}) = \frac {1}{4 \pi R ^ {2}} \iint_ {\partial B _ {R} (M _ {0})} u (x, y, z) \mathrm{d} S.
$$

即球心的值等于球面上的积分平均值.

证令

$$
\begin{array}{c} x = x _ {0} + \rho \sin \varphi \cos \theta , y = y _ {0} + \rho \sin \varphi \sin \theta , z = z _ {0} + \rho \cos \varphi , \\ 0 \leqslant \theta \leqslant 2 \pi , 0 \leqslant \varphi \leqslant \pi . \end{array}
$$

则在 $\partial B_{\rho}(M_0)$ 上有

$$
\begin{array}{r l} \frac {\partial u}{\partial \boldsymbol {n}} (x, y, z) & = \nabla u \cdot \boldsymbol {n} \\ & = \frac {\mathrm{d} u}{\mathrm{d} \rho} (x _ {0} + \rho \sin \varphi \cos \theta , y _ {0} + \rho \sin \varphi \sin \theta , z _ {0} + \rho \cos \varphi) \\ & = \frac {\mathrm{d} u}{\mathrm{d} \rho} (\boldsymbol {M} _ {0} + \rho \boldsymbol {n}). \end{array}
$$

于是

$$
\begin{array}{r l} & {0 = \iint_ {\partial B _ {\rho} (M _ {0})} \frac {\partial u}{\partial n} (x, y, z)   \mathrm{d} S = \rho^ {2} \iint_ {\partial B _ {1} (0)} \frac {\mathrm{d} u}{\mathrm{d} \rho} (M _ {0} + \rho n)   \mathrm{d} S _ {1} \qquad (\text {由} (2 5. 2 8))} \\ & {\qquad = \rho^ {2} \frac {\mathrm{d}}{\mathrm{d} \rho} \iint_ {\partial B _ {1} (0)} u (M _ {0} + \rho n)   \mathrm{d} S _ {1}.} \end{array}
$$

由此可得到

$$
\frac {\mathrm{d}}{\mathrm{d} \rho} \oiint_ {\partial B _ {1} (\mathbf {0})} u (M _ {0} + \rho \boldsymbol {n}) \mathrm{d} S _ {1} = 0,
$$

即

$$
\frac {\mathrm{d}}{\mathrm{d} \rho} \left[ \rho^ {- 2} \oiint_ {\partial B _ {\rho} (\mathbf {0})} u (M _ {0} + \rho n) \mathrm{d} S _ {\rho} \right] = 0.
$$

因此对于 $0 < \rho \leqslant R,$ 

$$
\rho^ {- 2} \oiint_ {\partial B _ {\rho} (\mathbf {0})} u (M _ {0} + \rho \boldsymbol {n}) \mathrm{d} S _ {\rho} = R ^ {- 2} \oiint_ {\partial B _ {R} (\mathbf {0})} u (M _ {0} + R \boldsymbol {n}) \mathrm{d} S _ {R}.
$$

另一方面，当 $\rho \to 0^{+}$ 时，

$$
\rho^ {- 2} \oiint_ {\partial B _ {\rho} (\mathbf {0})} u (M _ {0} + \rho n) \mathrm{d} S _ {\rho} \rightarrow 4 \pi u (M _ {0}).
$$

### 26.1.4 几种常用的场

记 $A = A(x, y, z)$ 是一个向量场. 以下是一些常用的场.

无源场: 如果 div A = 0, 则称 A 为无源场 (或管形场).

无旋场: 如果 $\operatorname{curl} A = 0$ , 则称 $A$ 为无旋场.

梯度场: 如果存在数量场 $u(x,y,z)$ ，使得 $A=\nabla u$ ，则称 A 为梯度场（或有势场），u 称为 A 的势函数.

散度场: 一个数量场 $u(x, u, z)$ 称为散度场, 如果存在向量场 $\boldsymbol{B}(x, y, z)$ , 使得 $u = \operatorname{div} \boldsymbol{B}$ .

旋度场: 如果存在向量场 $B(x,y,z)$ ，使得 A = curl B，则称 A 为旋度场.

在讨论线积分与路径无关时，曾涉及保守场，即如果存在 $u(x,y,z)$ （原函数），使得 $\int_{\widetilde{AB}}\pmb {A}\cdot \mathrm{d}\pmb {s} = u(B) - u(A)$ （积分与路径无关），则称 $\pmb{A}$ 为保守场.上述各种场之间的关系如下：

命题 26.1.1 (1) A 为梯度场 (即有势场) $\Longleftrightarrow$ A 为保守场 $\Longleftrightarrow$ A 为无旋场 $\Longleftrightarrow$ 对任意简单闭曲线 C，环量 $\oint_{C} A \cdot ds = 0;$ 

(2) A 为无源场 $\Longleftrightarrow$ A 为旋度场 $\Longleftrightarrow$ 对任意闭曲面 $\Sigma$ ，通量 $\oiint_{\Sigma} A \cdot n \, dS = 0$ ，其中 n 为 $\Sigma$ 的定侧单位法向量.

该命题的证明留作下一小节练习题2.

### 26.1.5 练习题

1. 证明关系式 (26.7)—(26.14).

2. 证明命题 26.1.1.

3. $V \subset D \subset \mathbf{R}^3, A$ 在 $D$ 上连续可微, 证明: $\forall p_0 \in V$ , 成立

(1) $\operatorname{div} A(p_0) = \lim_{\dim V \to 0} \frac{1}{|V|} \oiint_{\Sigma} A \cdot n \, \mathrm{d}S,$ 

其中 $\Sigma = \partial V$ 为 V 的边界, $\dim V$ 是 V 的直径, $|V|$ 为 V 的体积, n 为 $\Sigma$ 的单位外法向量;

(2) $\operatorname{curl} A(p_0) = \lim_{\dim V \to 0} \frac{1}{|V|} \oiint_{\Sigma} n \times A \, \mathrm{d}S$ ; 

(3) $\operatorname{grad} \varphi(p_0) = \lim_{\dim V \to 0} \frac{1}{|V|} \oiint_{\Sigma} \varphi n \, \mathrm{d}S$ ，其中 $\varphi(x, y, z)$ 在 $D$ 上连续可微.

4. 设 $f$ 是 $\mathbf{R}$ 上的可微函数, $\pmb{r} = x\pmb{i} + y\pmb{j} + z\pmb{k}$ , $r = |\pmb{r}|$ , 求 $\operatorname{grad} f(r)$ , $\operatorname{div}(f(r)\pmb{r})$ 和 $\operatorname{curl}(f(r)\pmb{r})$ .

5. 设 $r = xi + yj + zk, c$ 是常向量，证明：

(1) $\operatorname{curl} r = 0;$ 

(2) $\text{curl}(c \times r) = 2c.$ 

6. 求满足 $\mathrm{div}(f(r)\boldsymbol{r})=0$ 的函数 $f(r)$ .

7. 设 A, B 是无旋场, 证明: $A \times B$ 是无源场.

## §26.2 Laplace 算子与调和函数

### 26.2.1 Laplace 算子

Laplace 算子 $\Delta$ 的定义如下:

$$
\text { 在 } \mathbf {R} ^ {2} \text { 中 }: \Delta u = \frac {\partial^ {2} u}{\partial x ^ {2}} + \frac {\partial^ {2} u}{\partial y ^ {2}};
$$

$$
\text { 在 } \mathbf {R} ^ {3} \text { 中 }: \quad \Delta u = \frac {\partial^ {2} u}{\partial x ^ {2}} + \frac {\partial^ {2} u}{\partial y ^ {2}} + \frac {\partial^ {2} u}{\partial z ^ {2}}.
$$

简单的计算表明，

$$
\Delta u = \nabla \cdot \nabla u,
$$

即 Laplace 算子对一个函数的作用等于这个函数的梯度的散度.

例题 26.2.1 (第一 Green 恒等式) 设 $\Sigma$ 为区域 $\Omega$ 的边界曲面, 分片光滑, u, v 在 $\overline{\Omega}$ 上二阶连续可微, 证明:

$$
\iiint_ {\Omega} \Delta u \cdot v \mathrm{d} x \mathrm{d} y \mathrm{d} z + \iiint_ {\Omega} \nabla u \cdot \nabla v \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\Sigma} v \frac {\partial u}{\partial n} \mathrm{d} S,
$$

其中 $\pmb{n}$ 为 $\Sigma$ 上的单位外法向量， $\frac{\partial u}{\partial n}$ 是 $u$ 在 $\pmb{n}$ 方向上的方向导数

证 根据方向导数的计算公式,

$$
\oiint_ {\Sigma} v \frac {\partial u}{\partial \boldsymbol {n}} \mathrm{d} S = \oiint_ {\Sigma} v \left[ \frac {\partial u}{\partial x} \cos (\boldsymbol {n}, x) + \frac {\partial u}{\partial y} \cos (\boldsymbol {n}, y) + \frac {\partial u}{\partial z} \cos (\boldsymbol {n}, z) \right] \mathrm{d} S.
$$

利用公式 (26.2)，则

$$
\begin{array}{r l} \iint_ {\Sigma} v \frac {\partial u}{\partial \boldsymbol {n}} \mathrm{d} S & = \iiint_ {\Omega} \left[ \frac {\partial}{\partial x} (v u _ {x}) + \frac {\partial}{\partial y} (v u _ {y}) + \frac {\partial}{\partial z} (v u _ {z}) \right] \mathrm{d} x \mathrm{d} y \mathrm{d} z \\ & = \iiint_ {\Omega} \Delta u \cdot v \mathrm{d} x \mathrm{d} y \mathrm{d} z + \iiint_ {\Omega} \nabla u \cdot \nabla v \mathrm{d} x \mathrm{d} y \mathrm{d} z. \end{array}
$$

注1 令 $v = 1$ ，则有

$$
\oiint_ {\Sigma} \frac {\partial u}{\partial \boldsymbol {n}} \mathrm{d} S = \iiint_ {\Omega} \Delta u \mathrm{d} x \mathrm{d} y \mathrm{d} z.\tag{26.15}
$$

注2 由第一Green恒等式可以证明第二Green恒等式，见26.2.4小节的练习题2.

例题26.2.2设 $h(x,y,z)$ 在 $\mathbf{R}^3$ 上二阶连续可微， $\partial B_r(M)$ 是以 $M = (x,y,z)$ 为心， $r$ 为半径的球面，定义

$$
\boldsymbol {M} _ {h} (x, y, z, r) = \frac {1}{4 \pi r ^ {2}} \oiint_ {\partial B _ {r} (\boldsymbol {M})} h (\xi , \eta , \zeta) \mathrm{d} S _ {r},
$$

其中 $r > 0$ ，证明：

(1) $M_{h}$ 是 x, y, z, r 的二次连续可微函数;

$$
\Delta M _ {h} (x, y, z, r) = \left(\frac {\partial^ {2}}{\partial r ^ {2}} + \frac {2}{r} \frac {\partial}{\partial r}\right) M _ {h} (x, y, z, r), \tag {2}
$$

其中 $\Delta=\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}+\frac{\partial^{2}}{\partial z^{2}};$ 

$$
\lim _ {r \to 0 ^ {+}} \frac {\partial}{\partial r} M _ {h} (x, y, z, r) = 0. \tag {3}
$$

证 (1) 由 (25.27), $M_h$ 的表达式可改写为

$$
M _ {h} (x, y, z, r) = \frac {1}{4 \pi} \oiint_ {\partial B _ {1} (\mathbf {0})} h (x + r \alpha_ {1}, y + r \alpha_ {2}, z + r \alpha_ {3}) \mathrm{d} S _ {1},
$$

其中 $(\alpha_{1},\alpha_{2},\alpha_{3})$ 是球面 $\partial B_1(\mathbf{0})$ 的单位外法向量， $\mathrm{d}S_{1}$ 是 $\partial B_{1}(\mathbf{0})$ 的面积元.由含参变量积分的性质知 $M_h$ 是 $x,y,z,r$ 的二次连续可微函数

(2) 由含参变量积分的求导公式得

$$
\Delta M _ {h} (x, y, z, r) = \frac {1}{4 \pi} \oiint_ {\partial B _ {1} (\mathbf {0})} \Delta h (x + r \alpha_ {1}, y + r \alpha_ {2}, z + r \alpha_ {3}) \mathrm{d} S _ {1},\tag{26.16}
$$

$$
\begin{array}{r l} \frac {\partial M _ {h}}{\partial r} & = \frac {1}{4 \pi} \oiint_ {\partial B _ {1} (\mathbf {0})} \left(\frac {\partial h}{\partial x} \alpha_ {1} + \frac {\partial h}{\partial y} \alpha_ {2} + \frac {\partial h}{\partial z} \alpha_ {3}\right) \mathrm{d} S _ {1} \\ & = \frac {1}{4 \pi r ^ {2}} \oiint_ {\partial B _ {1} (\mathbf {0})} \left(\frac {\partial h}{\partial x} \alpha_ {1} + \frac {\partial h}{\partial y} \alpha_ {2} + \frac {\partial h}{\partial z} \alpha_ {3}\right) \mathrm{d} S _ {r}. \end{array} \tag {由(25.26)}\tag{26.17}
$$

应用 Gauss 公式 (26.2), 则

$$
\frac {\partial M _ {h}}{\partial r} = \frac {1}{4 \pi r ^ {2}} \iiint_ {B _ {r} (M)} \Delta h (\xi , \eta , \zeta) \mathrm{d} \xi \mathrm{d} \eta \mathrm{d} \zeta .\tag{26.18}
$$

应用例题 25.5.3(2) 中的结果, 则

$$
\frac {\partial^ {2} M _ {h}}{\partial r ^ {2}} = - \frac {1}{2 \pi r ^ {3}} \iiint_ {B _ {r} (M)} \Delta h (\xi , \eta , \zeta) \mathrm{d} \xi \mathrm{d} \eta \mathrm{d} \zeta + \frac {1}{4 \pi r ^ {2}} \oiint_ {\partial B _ {r} (M)} \Delta h (\xi , \eta , \zeta) \mathrm{d} S _ {r}. \tag {26.19}\tag{26.19}
$$

由(26.18)，(26.19)得

$$
\begin{array}{r l} \frac {\partial^ {2} M _ {h}}{\partial r ^ {2}} + \frac {2}{r} \frac {\partial M _ {h}}{\partial r} & = \frac {1}{4 \pi r ^ {2}} \oiint_ {\partial B _ {r} (M)} \Delta h (\xi , \eta , \zeta)   \mathrm{d} S _ {r} \\ & = \frac {1}{4 \pi r ^ {2}} \oiint_ {\partial B _ {r} (0)} \Delta h (x + r \alpha_ {1}, y + r \alpha_ {2}, z + r \alpha_ {3})   \mathrm{d} S _ {r} \\ & = \Delta M _ {h} (x, y, z, r). \qquad (\text {由(26.16)}) \end{array}
$$

(3) 利用 (26.18) 以及积分中值定理可知

$$
\lim _ {r \rightarrow 0 ^ {+}} \frac {\partial}{\partial r} M _ {h} (x, y, z, r) = \lim _ {r \rightarrow 0 ^ {+}} \frac {1}{4 \pi r ^ {2}} \Delta h (\xi^ {*}, \eta^ {*}, \zeta^ {*}) \cdot \frac {4}{3} \pi r ^ {3} = 0,
$$

其中 $(\xi^{*},\eta^{*},\zeta^{*})\in B_{r}(M)$ .

### 26.2.2 调和函数

如果在区域 $\Omega$ 内 $\Delta u = 0$ , 则称 $u$ 是 $\Omega$ 上的调和函数. 调和函数有一些特殊的性质, 其中较重要的是下面的两条:

性质1（平均值公式）记 $M_0 = (x_0, y_0, z_0)$ ，设函数 $u(x, y, z)$ 是某区域 $\Omega$ 上的调和函数， $M_0$ 是 $\Omega$ 中任一点。以 $M_0$ 为心， $R$ 为半径的球 $B_R(M_0)$ 完全落在 $\Omega$ 的内部，则

$$
u (M _ {0}) = \frac {1}{4 \pi R ^ {2}} \oiint_ {\partial B _ {R} (M _ {0})} u (x, y, z) \mathrm{d} S.
$$

证 对于 $0 < \rho \leqslant R$ ，由Green公式得

$$
\oiint_ {\partial B _ {\rho} (M _ {0})} \frac {\partial u}{\partial n} (x, y, z) \mathrm{d} S = \iiint_ {B _ {\rho} (M _ {0})} \Delta u \mathrm{d} x \mathrm{d} y \mathrm{d} z = 0,
$$

由例题26.1.4知结论成立.

性质 2 (极值原理) 记 $M = (x, y, z)$ ，设函数 $u(M)$ 是区域 $\Omega$ 上的调和函数，且不恒等于常数，则 u 在 $\Omega$ 的任何内点上的值不可能达到它在 $\Omega$ 上的上界或下界.

证 用反证法, 设调和函数 $u(M)$ 不恒等于常数, 且在区域 $\Omega$ 上的上界为 $K$ (这里假定函数 $u(M)$ 在 $\Omega$ 上有上界, 否则结论自然成立), 而 $u(M)$ 在 $\Omega$ 内某点 $M_0$ 取值为 $K$ , 我们来找出矛盾.

因为 $u(M)$ 不恒等于常数，则至少存在一点 $M_1 = (x_1, y_1, z_1) \in \Omega$ 使得 $u(M_1) < K$ . 在 $\Omega$ 中作一条连接 $M_0, M_1$ 的连续曲线 $\Gamma$ (见图26.1)，设 $\Gamma$ 的参数方程为

$$
\Gamma : x = x (t), y = y (t), z = z (t), 0 \leqslant t \leqslant T,
$$

并且

$$
\begin{array}{l l l} x (0) = x _ {0}, & y (0) = y _ {0}, & z (0) = z _ {0}, \\ x (T) = x _ {1}, & y (T) = y _ {1}, & z (T) = z _ {1}. \end{array}
$$

定义

$$
t ^ {*} = \max \{t \mid 0 \leqslant t \leqslant T, u (x (t), y (t), z (t)) = K \},
$$

则 $0 \leqslant t^{*} < T$ . 以 $M^{*} = (x(t^{*}), y(t^{*}), z(t^{*}))$ 为心, 充分小的 $\delta$ 为半径, 作一个完全落在 $\Omega$ 内部的球 $B_{\delta}(M^{*})$ , 并且曲线

$$
x = x (t), \quad y = y (t), \quad z = z (t), \quad t ^ {*} \leqslant t \leqslant T,
$$

与球面 $\partial B_{\delta}(M^{*})$ 至少有一个交点 $P$ (见图26.1)，也就是说 $u(P) < K$ 。由函数 $u(M)$ 在 $P$ 点的连续性知存在 $P$ 点的一个邻域，使得在该邻域上 $u(M) < K$ ，因此 $u(M)$ 在 $\partial B_{\delta}(M^{*})$ 上的积分平均值

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/f5c457e576836fdec48090703e59486989849183c758d61846067dd4bb2d8796.jpg)



图26.1


$$
\frac {1}{4 \pi \delta^ {2}} \oiint_ {\partial B _ {\delta} (M ^ {*})} u (x, y, z) \mathrm{d} S <   \frac {1}{4 \pi \delta^ {2}} \oiint_ {\partial B _ {\delta} (M ^ {*})} K \mathrm{d} S = K.
$$

但由平均值公式有

$$
\frac {1}{4 \pi \delta^ {2}} \oiint_ {\partial B _ {\delta} (M ^ {*})} u (x, y, z) \mathrm{d} S = u (M ^ {*}) = K,
$$

由此得到矛盾. 同理可证 $u$ 也不能在 $\Omega$ 的内点取得 $u$ 在 $\Omega$ 上的下界.

注1 上述两个性质对任意维数的调和函数都是成立的.

注 2 若 $\Omega$ 是有界区域, u 在 $\overline{\Omega}$ 上连续, 在 $\Omega$ 上调和, 则 u 的最大最小值只能在 $\Omega$ 的边界上达到.

### 26.2.3 Poisson积分公式

在这一节我们证明, 平面上每一个在单位圆周上的连续函数可惟一连续延拓成为单位开圆盘上的调和函数. 为此设 $f(\theta)$ 是以 $2\pi$ 为周期的连续函数, 我们要在单位圆盘上证明存在惟一的连续函数

$$
u (r \cos \theta , r \sin \theta),
$$

当 $0 \leqslant r < 1$ 时是调和函数，且

$$
u (\cos \theta , \sin \theta) = f (\theta).
$$

证惟一性. 设 $u, v$ 都满足条件, 则 $w = u - v$ 当 $0 \leqslant r < 1$ 时是调和函数, 且

$$
w (\cos \theta , \sin \theta) = 0, \quad 0 \leqslant \theta <   2 \pi .
$$

由极值原理 (性质 2) 知 $w \equiv 0$ , 于是惟一性成立.

存在性的证明要困难得多. 利用调和算子在极坐标系 $(r, \theta)$ 中的表达式

$$
\Delta := \frac {\partial^ {2}}{\partial x ^ {2}} + \frac {\partial^ {2}}{\partial y ^ {2}} = \frac {\partial^ {2}}{\partial r ^ {2}} + \frac {1}{r} \frac {\partial}{\partial r} + \frac {1}{r ^ {2}} \frac {\partial^ {2}}{\partial \theta^ {2}},
$$

容易证明 $\Delta(r^{n}\cos n\theta)=\Delta(r^{n}\sin n\theta)=0,n=0,1,2,\cdots$ 由此，我们令

$$
u (r \cos \theta , r \sin \theta) = \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} (a _ {n} \cos n \theta + b _ {n} \sin n \theta) r ^ {n}.
$$

令 $r = 1$ ，由已知条件得到

$$
f (\theta) = \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} (a _ {n} \cos n \theta + b _ {n} \sin n \theta).
$$

由周期函数的Fourier级数理论知

$$
a _ {n} = \frac {1}{\pi} \int_ {0} ^ {2 \pi} f (\varphi) \cos n \varphi \mathrm{d} \varphi , b _ {n} = \frac {1}{\pi} \int_ {0} ^ {2 \pi} f (\varphi) \sin n \varphi \mathrm{d} \varphi ,
$$

代入 $u$ 的表达式中得到

$$
\begin{array}{r l} u (r \cos \theta , r \sin \theta) & = \frac {1}{\pi} \int_ {0} ^ {2 \pi} f (\varphi) \left[ \frac {1}{2} + \sum_ {n = 1} ^ {\infty} r ^ {n} \cos n (\theta - \varphi) \right] \mathrm{d} \varphi \\ & = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \operatorname{Re} \left[ \frac {1 + r \mathrm{e} ^ {\mathrm{i} (\theta - \varphi)}}{1 - r \mathrm{e} ^ {\mathrm{i} (\theta - \varphi)}} \right] \mathrm{d} \varphi \\ & = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \frac {1 - r ^ {2}}{1 - 2 r \cos (\theta - \varphi) + r ^ {2}} \mathrm{d} \varphi . \end{array}
$$

下面证明它的确提供了问题的解.

首先证明 $u$ 在单位圆盘上是调和函数, 这只是一个对含参变量常义积分求二阶偏导数的计算, 所以留作练习, 其中要将 $u$ 的表达式改写为

$$
u (x, y) = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \frac {1 - x ^ {2} - y ^ {2}}{1 - 2 (x \cos \varphi + y \sin \varphi) + x ^ {2} + y ^ {2}} \mathrm{d} \varphi .
$$

最后证明对每一个 $\theta_{0}$ ,

$$
\lim _ {(\theta , r) \rightarrow (\theta_ {0}, 1 ^ {-})} \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \frac {1 - r ^ {2}}{1 - 2 r \cos (\theta - \varphi) + r ^ {2}} \mathrm{d} \varphi = f (\theta_ {0}),
$$

这件事我们已经在例题18.2.4中证明过了. 这就完成了下面命题的证明.

命题 26.2.1 若 f 是以 $2\pi$ 为周期的连续函数, 则

$$
u (r \cos \theta , r \sin \theta) = \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \frac {1 - r ^ {2}}{1 - 2 r \cos (\theta - \varphi) + r ^ {2}} \mathrm{d} \varphi
$$

是单位圆盘上的调和函数，且

$$
\lim _ {(\theta , r) \rightarrow (\theta_ {0}, 1 ^ {-})} \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} f (\varphi) \frac {1 - r ^ {2}}{1 - 2 r \cos (\theta - \varphi) + r ^ {2}} \mathrm{d} \varphi = f (\theta_ {0}).
$$

推论 若 $u$ 是半径为 $R > 0$ 的圆盘上的调和函数, 则对于 $0 \leqslant r < R$ 有

$$
\begin{array}{l} {u (r \cos \theta , r \sin \theta)} \\ {= \frac {1}{2 \pi} \int_ {0} ^ {2 \pi} u (R \cos \varphi , R \sin \varphi)   \frac {R ^ {2} - r ^ {2}}{R ^ {2} - 2 R r \cos (\theta - \varphi) + r ^ {2}}   \mathrm{d} \varphi .} \end{array}\tag{26.20}
$$

称 (26.20) 为 Poisson 积分公式.

证 若 R = 1, 结论就是命题 26.2.1. 对于一般情形只需作一相似变换, 具体细节留作练习. □

### 26.2.4 练习题

1. 证明：

(1) $\nabla \times (\nabla f) = 0;$ 

(2) $\nabla (\nabla \cdot \pmb {a}) - \nabla \times (\nabla \times \pmb {a}) = \Delta \pmb {a}$ , 其中 $\Delta \pmb {a} = (\Delta a_1, \Delta a_2, \Delta a_3)$ .

2. (第二 Green 恒等式) 设 $\Sigma$ 为分片光滑封闭曲面, 围成的区域为 $\Omega$ , $u, v$ 在 $\overline{\Omega}$ 上二次连续可微. 证明:

$$
\iiint_ {\Omega} (v \Delta u - u \Delta v) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\Sigma} \left(v \frac {\partial u}{\partial n} - u \frac {\partial v}{\partial n}\right) \mathrm{d} S,
$$

其中 n 为 $\Sigma$ 的单位外法向量.

3. $\Sigma$ 为分片光滑封闭曲面, 围成的区域为 $\Omega$ , $u$ 在 $\overline{\Omega}$ 上二次连续可微, 在 $\Omega$ 上调和. 证明:

$$
\iiint_ {\Omega} | \nabla u | ^ {2} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\Sigma} u \frac {\partial u}{\partial \boldsymbol {n}} \mathrm{d} S,
$$

并由此证明调和函数的惟一性, 即调和函数在 $\Omega$ 内部的值由它在边界 $\Sigma$ 上的值惟一确定.

4. 在调和函数性质 1 的条件下, 证明:

$$
u (M _ {0}) = \frac {1}{\frac {4}{3} \pi R ^ {3}} \iiint_ {B _ {R} (M _ {0})} u (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z.
$$

5. 证明命题26.2.1的推论.

6. 证明: Poisson 积分公式 (26.20) 定义的函数是调和函数.

7. 证明：调和函数无限次可微.

8. 若 $f$ 和 $g \circ f$ 都是一连通开集上的调和函数, $g$ 二阶连续可微, $f$ 不是常值函数, 证明: $g$ 是线性函数.

9. 证明：问题

$$
\Delta u = f (x, y, z), (x, y, z) \in D, \frac {\partial u}{\partial n} = g (x, y, z), (x, y, z) \in \partial D
$$

有解 $u$ 的必要条件是

$$
\iiint_ {D} f \mathrm{d} x \mathrm{d} y \mathrm{d} z = \oiint_ {\partial D} g \mathrm{d} S.
$$

## §26.3 对于教学的建议

### 26.3.1 学习要点

1. 本章涉及的定义和概念较多。定义了散度、旋度之后，Green 公式、Gauss 公式与 Stokes 公式从表面上看是简单化了。散度定理 (26.5) (或者是 (26.2), (26.4)) 的用处非常之广，当需要证明重积分与曲线 (面) 积分具有某种关系时，散度定理是一个非常有效的出发点。

2. 由于 Laplace 算子对一个函数的作用等于这个函数的梯度的散度, 因此当积分号后面出现 Laplace 算子, 再应用散度定理时, 各类积分变得丰富多彩, 能够熟练运用 Laplace 算符与散度定理是本章的主要目的之一.

3. 调和函数是一类性质非常好的函数, 调和二字表现在处处满足平均值公式, 事实上反过来的结论也成立, 即处处满足平均值公式的连续函数一定是调和函数 (见第二组参考题1). 在本章只介绍了调和函数的一点基本知识, 在复变函数、数学物理方程等后续课程中还要进一步学习.

4. 对习题课教学的建议

(1) 在习题课上证明命题 26.1.1, 虽然题目并不难, 但却是对各种算子的定义、各种场的定义、Green 公式、Gauss 公式、Stokes 公式、曲线积分与路径无关的一个综合练习.

(2) 关于 Laplace 算子, 要求学生会证明第一和第二 Green 恒等式.

(3) 关于调和函数, 要求学生会证明平均值公式, 并能利用 Poisson 积分公式证明调和函数的一些性质.

### 26.3.2 参考题

#### 第一组参考题

1. 设 A, B 为光滑向量场. 证明:

$$
(1) \nabla (\boldsymbol {A} \cdot \boldsymbol {B}) = \boldsymbol {A} \times (\nabla \times \boldsymbol {B}) + \boldsymbol {B} \times (\nabla \times \boldsymbol {A}) + (\boldsymbol {B} \cdot \nabla) \boldsymbol {A} + (\boldsymbol {A} \cdot \nabla) \boldsymbol {B};
$$

(2) $\nabla \times (\mathbf{A} \times \mathbf{B}) = (\mathbf{B} \cdot \nabla)\mathbf{A} - (\mathbf{A} \cdot \nabla)\mathbf{B} + (\nabla \cdot \mathbf{B})\mathbf{A} - (\nabla \cdot \mathbf{A})\mathbf{B}$ . 

2. 设 G 是 $R^{3}$ 中关于原点 O 的星形区域, $F(x,y,z)$ 为 G 上的光滑无源场. 定义

$$
\boldsymbol {A} (x, y, z) = \int_ {0} ^ {1} [ t \boldsymbol {F} (t x, t y, t z) \times \boldsymbol {r} ] \mathrm{d} t.
$$

利用上题(2)证明:

$$
\nabla \times \boldsymbol {A} = \boldsymbol {F}.
$$

3. 设 A 是 $R^{3}$ 上的光滑向量场, B 是 $R^{3}$ 上二次连续可微的向量场, 满足

$$
\nabla \times \boldsymbol {B} = \frac {1}{r} (\nabla r \times \boldsymbol {A}),
$$

其中 $r = \sqrt{x^2 + y^2 + z^2}$ , 证明:

$$
\oint_ {L} \boldsymbol {A} \cdot \boldsymbol {\tau} \mathrm{d} s = 0,
$$

其中 L 是以原点为中心的球面上的封闭光滑简单定向曲线, $\tau$ 是 L 上与其方向一致的单位切向量.

4. 设长度为 $l$ 的平面简单闭曲线 $C$ 由方程 $F(x, y) = 0$ 确定. $F(x, y)$ 二阶连续可微, 且 $\nabla F(x, y) \neq \mathbf{0}$ , 设 $D = \{(x, y) \mid F(x, y) > 0\}$ 为曲线 $C$ 围成的区域, 计算二重积分

$$
\iint_ {D} \nabla \cdot \left(\frac {\nabla F}{| \nabla F |}\right) \mathrm{d} x \mathrm{d} y.
$$

5. 设 $u(x, y, z)$ 是连续函数, 它在 $\pmb{M}(x_0, y_0, z_0)$ 处有连续二阶偏导数, 记

$$
F (R) = \frac {1}{4 \pi R ^ {2}} \oiint_ {\partial B _ {R} (M)} u (x, y, z) \mathrm{d} S,
$$

其中 $\partial B_{R}(M)$ 是以 M 为心, R 为半径的球面. 证明:

$$
\lim _ {R \to 0} F (R) = u (M).
$$

若 $\Delta u(M)$ 不等于零, 求无穷小量 $F(R)-u(M)$ 的主要部分.

6. 设 $u, v$ 在 $\overline{\Omega}$ 上二阶连续可微，且在 $\Omega$ 的边界上 $u = v$ . 如果 $u$ 是调和函数，则

$$
\iiint_ {\Omega} | \nabla u | ^ {2} \mathrm{d} x \mathrm{d} y \mathrm{d} z \leqslant \iiint_ {\Omega} | \nabla v | ^ {2} \mathrm{d} x \mathrm{d} y \mathrm{d} z.
$$

7. 设 $u(x, y)$ 在 $x^{2} + y^{2} < 1$ 二阶连续可微，且 $\Delta u = \mathrm{e}^{-(x^2 + y^2)}$ ，证明：

$$
\iint_ {x ^ {2} + y ^ {2} <   1} \left(x \frac {\partial u}{\partial x} + y \frac {\partial u}{\partial y}\right) \mathrm{d} x \mathrm{d} y = \frac {\pi}{2 \mathrm{e}}.
$$

#### 第二组参考题

1. 证明：处处满足平均值公式的连续函数一定是调和函数.

2. 设 $u_{n}(x,y)$ 是定义在圆盘 $B_{R}$ 上的调和函数序列, 都在 $\overline{B}_{R}$ 上连续, 若 $u_{n}(x,y)$ 在 $B_{R}$ 的边界 $\partial B_{R}$ 上一致收敛, 则 $u_{n}(x,y)$ 在 $B_{R}$ 上也一致收敛, 并且极限函数也是调和函数.

3. 设 $u(x, y, z)$ 在区域 $D$ 上二阶连续可微, 证明: $\Delta u \geqslant 0 (\forall (x, y, z) \in D)$ 的充分必要条件是

$$
u (M _ {0}) \leqslant \frac {1}{4 \pi R ^ {2}} \oiint_ {\partial B _ {R} (M _ {0})} u (x, y, z) \mathrm{d} S, \quad \forall B _ {R} (M _ {0}) \subset D.
$$

4. 设 $u(x, y, z)$ 是由光滑曲面 $S$ 所包围的有界区域 $\Omega$ 上的调和函数，则

$$
u (x, y, z) = \frac {1}{4 \pi} \oiint_ {S} \left[ u (\xi , \eta , \zeta) \frac {\cos (\boldsymbol {r} , \boldsymbol {n})}{r ^ {2}} + \frac {1}{r} \frac {\partial u (\xi , \eta , \zeta)}{\partial \boldsymbol {n}} \right] d S,
$$

其中 $\boldsymbol{r}=(\xi-x,\eta-y,\zeta-z)$ ， $r=|r|$ .

5. 利用 Poisson 积分公式证明不等式

$$
\frac {R - r}{R + r} u (x _ {0}, y _ {0}) \leqslant u (x, y) \leqslant \frac {R + r}{R - r} u (x _ {0}, y _ {0}),
$$

其中 u 是以 R 为半径, $(x_{0}, y_{0})$ 为圆心的开圆盘上的非负调和函数, r < R 是 $(x, y)$ 与 $(x_{0}, y_{0})$ 的距离.

6. 证明: 全平面上有界的调和函数一定是常数.
