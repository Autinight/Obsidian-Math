# 第二十章 隐函数存在定理与隐函数求导

本章在 §20.1 讨论一个方程所确定的隐函数。在 §20.2 讨论方程组所确定的隐函数组，并用压缩映射原理证明了反函数组存在定理。在 §20.3 讨论微分式的变量替换。在 §20.4 讨论隐函数（组）的整体存在性，这可以作为习题课的补充材料。最后一节是学习要点和两组参考题。

## §20.1 一个方程的情形

### 20.1.1 隐函数存在定理

命题 20.1.1 (隐函数存在定理) 设二元函数 $F(x,y)$ 满足下列条件:

(1) 在矩形区域 $D = \{(x, y) \in \mathbf{R}^2 \mid |x - x_0| < a, |y - y_0| < b\}$ 上有关于 $x, y$ 的连续偏导数；

(2) $F(x_{0},y_{0})=0$ ; (3) $F_{y}(x_{0},y_{0})\neq0$ , 

则有：

(1) 在点 $(x_0, y_0)$ 的某个邻域内, 由方程 $F(x, y) = 0$ 可以确定惟一的函数 $y = f(x)$ , 也就是说, 存在 $\eta > 0$ , 当 $x \in O_{\eta}(x_0)$ 时有

$$
F (x, f (x)) = 0, \quad \text { 并且 } y _ {0} = f (x _ {0});
$$

(2) $f(x)$ 在 $O_{\eta}(x_0)$ 上连续;

(3) $f(x)$ 在 $O_{\eta}(x_0)$ 上有连续的导数

$$
f ^ {\prime} (x) = - \frac {F _ {x} (x , y)}{F _ {y} (x , y)}.\tag{20.1}
$$

称 $y = f(x)$ 为由方程 $F(x, y) = 0$ 确定的隐函数.

注1 视 $F(x,y) = 0$ 为方程, 我们知道一个方程只能解出一个未知量, 若我们视 $x$ 为已知, $y$ 为未知, 隐函数存在定理就是告诉我们在什么条件下可解出 $y = f(x)$ . 但一般教科书上定理的证明是非构造性的, 只是证明了存在性, 并没有说明如何由 $F(x,y)$ 的表达式去得到 $f(x)$ 的表达式. 事实上, 即使 $F(x,y)$ 的表达式很简单, 也未必能将隐函数从 $F(x,y) = 0$ 中具体解出来. 如天体力学中著名的Kepler方程 (见上册80, 146, 172页):

$$
F (x, y) = y - x - \varepsilon \sin y = 0, \quad 0 <   \varepsilon <   1.
$$

$F(x,y)$ 在 $(0,0)$ 点附近满足定理所述条件，从而隐函数 $y = f(x)$ (Kepler函数)存在、连续、可导，且按上述公式(20.1)可求出隐函数 $y = f(x)$ 的导数

$$
\frac {\mathrm{d} y}{\mathrm{d} x} = - \frac {F _ {x}}{F _ {y}} = \frac {1}{1 - \varepsilon \cos y}.\tag{20.2}
$$

然而 $F(x,y)=0$ 的隐函数不能解成初等函数.

注意在公式(20.1)的右端的表达式中, 隐函数的导数同时含有 $x$ 与 $y$ . 这一点与显函数的导数是不相同的①. 它应该理解为 $f'(x) = -\frac{F_x(x,y)}{F_y(x,y)} \big|_{y=f(x)}$ . 但这并不妨碍我们研究隐函数的性质. 如根据(20.2)可知Kepler函数是单调增加的. 由 $y$ 的可导性还可推知 $y''$ 的存在性等. 一般地, 若 $F(x,y)$ 二阶连续可微, 且满足隐函数存在定理的条件, 则对(20.1)两边对 $x$ 求导得

$$
y ^ {\prime \prime} (x) = - \frac {1}{F _ {y} ^ {2}} [ (F _ {x x} + F _ {x y} y ^ {\prime}) F _ {y} - (F _ {x y} + F _ {y y} y ^ {\prime}) F _ {x} ].
$$

将(20.1)代入得

$$
y ^ {\prime \prime} (x) = \frac {1}{F _ {y} ^ {3}} \left(2 F _ {x} F _ {y} F _ {x y} - F _ {x} ^ {2} F _ {y y} - F _ {y} ^ {2} F _ {x x}\right).
$$

注2 定理的结论是局部的, 即在 $(x_0, y_0)$ 的某个邻域内由方程 $F(x, y) = 0$ 可以惟一确定一个可微的满足 $y_0 = f(x_0)$ 的隐函数 $y = f(x)$ , 但定理并没有告诉我们这个邻域有多大.

注3 对于方程 $F(x_{1},x_{2},\cdots,x_{n},u)=0$ 在某点 $(x_{1}^{(0)},x_{2}^{(0)},\cdots,x_{n}^{(0)},u_{0})$ 附近确定一个 n 元的隐函数 $u=f(x_{1},x_{2},\cdots,x_{n})$ 也有类似的结果.

注4 从一般教科书上给出的隐函数定理的证明中可以看出, 如果只要求隐函数连续, 则命题20.1.1的条件可减弱. 对此, 我们有下面的结论.

命题20.1.2 如果

(1) $F(x,y)$ 在矩形 $D=\{(x,y)\in\mathbf{R}^{2}\mid|x-x_{0}|<a,|y-y_{0}|<b\}$ 上连续;

(2) $F(x_{0},y_{0})=0;$ 

(3) $F(x,y)$ 对每一个 $x\in (x_0 - a,x_0 + a)$ 关于 $y$ 严格单调，则有：

(1) 在点 $(x_0, y_0)$ 的某个邻域内，由方程 $F(x, y) = 0$ 可以确定惟一的函数

$y = f(x)$ ，也就是说，存在 $\eta >0$ ，当 $x\in O_{\eta}(x_0)$ 时有

$$
F (x, f (x)) = 0, \quad \text { 并且 } y _ {0} = f (x _ {0});
$$

(2) $f(x)$ 在 $O_{\eta}(x_0)$ 上连续.

例题 20.1.1 证明：在点 $(1,1)$ 的某一邻域内存在惟一的连续可微函数 $y = f(x)$ ，满足 $f(1) = 1$ ， $xf(x) + 2\ln x + 3\ln f(x) - 1 = 0$ ，并求 $f'(x)$ .

证 令 $F(x,y) = xy + 2\ln x + 3\ln y - 1$ ，则

(1) $F(x,y)$ 在点 $(1,1)$ 点的邻域内有关于 x,y 的连续偏导数;

(2) $F(1,1)=0;$ (3) $F_{y}(1,1)=\left(x+\frac{3}{y}\right)\bigg|_{(x,y)=(1,1)}\neq0.$ 

由隐函数存在定理, 在点 $(1,1)$ 的某邻域内存在惟一的连续可微函数 $y=f(x)$ , 满足 $f(1)=1, xf(x)+2\ln x+3\ln f(x)-1=0$ 且

$$
f ^ {\prime} (x) = - \frac {F _ {x} (x , y)}{F _ {y} (x , y)} = - \frac {y + \frac {2}{x}}{x + \frac {3}{y}} = - \frac {x y ^ {2} + 2 y}{x ^ {2} y + 3 x}.
$$

例题20.1.2设点 $(x_0,y_0,u_0)$ 满足 $u_{0} = y_{0} + x_{0}\varphi (u_{0})$ ，根据隐函数存在定理给函数 $\varphi$ 加上适当条件，使方程 $u = y + x\varphi (u)$ 可在点 $(x_0,y_0)$ 的某一个邻域内惟一确定一个连续可微函数 $u = f(x,y)$ 

解 令 $F(x,y,u) = u - y - x\varphi (u)$ ，则 $F(x_0,y_0,u_0) = 0$ 。由复合函数的性质知，当 $\varphi (u)$ 连续可微时， $F(x,y,u)$ 连续，有关于 $x,y,u$ 的连续偏导数，且

$$
F _ {u} = 1 - x \varphi^ {\prime} (u).
$$

从而当 $\varphi (u)$ 连续可微且

$$
x _ {0} \varphi^ {\prime} (u _ {0}) \neq 1
$$

时，方程 $u = y + x\varphi (u)$ 可在点 $(x_0,y_0)$ 的某一邻域内惟一确定一个连续可微函数 $u = f(x,y)$ □

### 20.1.2 隐函数求导

若已知由方程 $F(x, y) = 0$ 可惟一确定连续可微的隐函数 $y = f(x)$ ，或由方程 $F(x, y, z) = 0$ 可惟一确定连续可微的隐函数 $z = f(x, y)$ ，则在求导时既可直接应用公式，也可用复合函数求导法则解出欲求之导数。一般在隐函数求导中，总认为连续可微的隐函数已存在，故若无特殊声明，不必再验证条件。

例题 20.1.3 设 $z = f(x, y)$ 是由方程 $F(x - y, y - z) = 0$ 确定的隐函数，试求 $z_x, z_y$ 及 $z_{xy}$ .

解 先求 $z_{x}$ . 在 $F(x - y, y - z) = 0$ 两边对 $x$ 求导, 得

$$
F _ {1} - z _ {x} F _ {2} = 0,\tag{20.3}
$$

于是得 $z_{x}=\frac{F_{1}}{F_{2}}$ .

求 $z_{y}$ .可用公式

$$
z _ {y} = - \frac {F _ {y}}{F _ {z}} = - \frac {- F _ {1} + F _ {2}}{- F _ {2}} = \frac {F _ {2} - F _ {1}}{F _ {2}}.
$$

求 $z_{xy}$ . 在 (20.3) 两边对 $y$ 求导, 得

$$
- F _ {1 1} + F _ {1 2} (1 - z _ {y}) - \left\{\left[ - F _ {2 1} + F _ {2 2} (1 - z _ {y}) \right] z _ {x} + F _ {2} z _ {x y} \right\} = 0.\tag{20.4}
$$

将 $z_{x}, z_{y}$ 的表达式代入 (20.4), 得到

$$
- F _ {1 1} + F _ {1 2} \frac {F _ {1}}{F _ {2}} - \left[ \left(- F _ {2 1} + F _ {2 2} \frac {F _ {1}}{F _ {2}}\right) \frac {F _ {1}}{F _ {2}} + F _ {2} z _ {x y} \right] = 0.
$$

解出 $z_{xy}$ 得

$$
z _ {x y} = \frac {1}{F _ {2} ^ {3}} (2 F _ {1} F _ {2} F _ {1 2} - F _ {2} ^ {2} F _ {1 1} - F _ {1} ^ {2} F _ {2 2}).
$$

也可先在 $F_{1} - F_{2} + F_{2}z_{y} = 0$ 两边对 $x$ 求导，然后解出 $z_{xy}$ 

注意隐函数求导时, 涉及一系列的复合的隐函数. 必须明辨函数关系, 弄清哪些是自变量, 哪些是因变量, 以免漏项.

### 20.1.3 思考题

1. 证明：方程 $F(x, y) = (x - y)^2 = 0$ 在点 $(0, 0)$ 处有 $F_y(0, 0) = 0$ ，但在 $x = 0$ 附近仍存在惟一解 $y = x$ 且是连续可微的。这与隐函数存在定理的结论是否矛盾？

2. 设有方程 $x^{2} + y^{2} + z^{2} - 3xyz = 0$ ，证明：

(1) 可确定点 $(1,1,1)$ 附近的隐函数 $z = z(x,y)$ ，并求 $z_{x}(1,1)$ ;

(2) 可确定点 $(1,1,1)$ 附近的隐函数 $y=y(x,z)$ ，并求 $y_{x}(1,1)$ .

### 20.1.4 练习题

1. 设 $y = y(x)$ 由下述方程确定, 求 $y'$ , $y''$ :

(1) $\ln(x^{2}+y^{2})=\arctan\frac{y}{x};$ 

(2) $x^{y} = y^{x}$ ; 

(3) $xy - 2^{x} \ln 2 + 2^{y} = 0.$ 

2. 求在指定点的导数:

(1) $y^{3}+y-x^{2}=0$ , 求 $y'(0)$ ;

(2) $x^{\frac{2}{3}} + y^{\frac{2}{3}} - 4 = 0,$ 求在点 $(1,3\sqrt{3})$ 处的导数 $y'$ ;

(3) $\sin x + 2\cos y - 1 = 0,$ 求在点 $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$ 处的 $y', y''$ .

3. 设 $z = z(x, y)$ 是由下列方程确定的隐函数，求指定的导数或微分：

(1) $x + y + z = \mathrm{e}^{-(x + y + z)}$ ，求 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y},\frac{\partial^2z}{\partial y^2},\frac{\partial^2z}{\partial x^2},\frac{\partial^2z}{\partial x\partial y};$ 

(2) $x^{3} + y^{3} + z^{3} - 3xyz - 4 = 0,$ 求在点 $(1,1,2)$ 处的偏导数 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y};$ 

(3) $z = \sqrt{x^2 - y^2}\tan \frac{z}{\sqrt{x^2 - y^2}}$ 求 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y};$ 

(4) $\frac{x}{z} = \ln \frac{z}{y}$ , 求 $\mathrm{d} z$ ;

(5) $xy + yz + zx = 1$ ，求 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y},\frac{\partial^2z}{\partial y^2},\frac{\partial^2z}{\partial x^2},\frac{\partial^2z}{\partial x\partial y}.$ 

4. 设 $z = z(x, y)$ 由下列方程确定，求指定的导数或微分：

(1) $f(x + y + z, x^2 + y^2 + z^2) = 0$ , 求 $\mathrm{dz}$ ;

(2) $f(x,x + y,x + y + z) = 0,$ 求 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y};$ 

(3) $f(x + y,y + z,z + x) = 0,$ 求 $\frac{\partial^2z}{\partial x^2},\frac{\partial^2z}{\partial y^2},\frac{\partial^2z}{\partial x\partial y}.$ 

5. 验证下列各题中给出的隐函数满足指定的方程:

(1) $xz_{x} - yz_{y} = 2x$ ，其中 $z = z(x,y)$ 是由方程 $F(xy,z - 2x) = 0$ 确定的隐函数；

(2) $(x^{2}-y^{2}-z^{2})z_{x}+2xyz_{y}=2xz,$ 其中 $z=z(x,y)$ 是由方程 $x^{2}+y^{2}+z^{2}=yf\left(\frac{z}{y}\right)$ 确定的隐函数;

(3) $z_{xx}z_{yy}-z_{xy}^{2}=0$ , 其中 $z=z(x,y)$ 是由方程 $\frac{x}{z}=\varphi\left(\frac{y}{z}\right)$ 确定的隐函数, $\varphi$ 二次连续可微, 且 $x-y\varphi'\left(\frac{y}{z}\right)\neq0;$ 

(4) $u_{x}^{2} + u_{y}^{2} + u_{z}^{2} = 2(xu_{x} + yu_{y} + zu_{z})$ ，其中 $u = u(x,y,z)$ 是由方程

$$
\frac {x ^ {2}}{a ^ {2} + u} + \frac {y ^ {2}}{b ^ {2} + u} + \frac {z ^ {2}}{c ^ {2} + u} = 1
$$

确定的隐函数.

## §20.2 隐函数组

### 20.2.1 存在定理

不失一般性, 下面仅研究两个方程和四个变量的方程组

$$
\left\{ \begin{array}{l} F (x, y, u, v) = 0, \\ G (x, y, u, v) = 0 \end{array} \right.
$$

在什么条件下可以确定 $u, v$ 是 $x, y$ 的函数

$$
u = u (x, y), \quad v = v (x, y),
$$

并且 u, v 关于 x, y 有连续偏导数. 我们有如下的隐函数组存在定理.

命题20.2.1（隐函数组存在定理）设

(1) $F(x,y,u,v)$ 和 $G(x,y,u,v)$ 在点 $\boldsymbol{p}_{0}(x_{0},y_{0},u_{0},v_{0})$ 的一个邻域内对各个变元有连续的偏导数;

(2) $F(x_0,y_0,u_0,v_0) = G(x_0,y_0,u_0,v_0) = 0;$ 

(3) $J(\pmb{p}_0) = \frac{\partial(F,G)}{\partial(u,v)}\bigg|_{\pmb{p}_0} = \left|\begin{array}{cc}F_u(\pmb{p}_0) & F_v(\pmb{p}_0)\\ G_u(\pmb{p}_0) & G_v(\pmb{p}_0) \end{array}\right|\neq 0,$ 其中 $\frac{\partial(F,G)}{\partial(u,v)}$ 称为Jacobi行列式，

则存在 $p_0$ 点的一个邻域，在此邻域内由方程组

$$
\left\{ \begin{array}{l} F (x, y, u, v) = 0, \\ G (x, y, u, v) = 0 \end{array} \right.
$$

可以惟一确定一对函数

$$
u = u (x, y), \quad v = v (x, y),
$$

使满足 $F(x,y,u(x,y),v(x,y)) = G(x,y,u(x,y),v(x,y)) = 0$ 及 $u_0 = u(x_0,y_0)$ $v_{0} = v(x_{0},y_{0})$ ，且 $u,v$ 具有关于 $x,y$ 的连续偏导数

$$
\frac {\partial u}{\partial x} = - J ^ {- 1} \frac {\partial (F , G)}{\partial (x , v)}, \quad \frac {\partial u}{\partial y} = - J ^ {- 1} \frac {\partial (F , G)}{\partial (y , v)},
$$

$$
\frac {\partial v}{\partial x} = - J ^ {- 1} \frac {\partial (F , G)}{\partial (u , x)}, \quad \frac {\partial v}{\partial y} = - J ^ {- 1} \frac {\partial (F , G)}{\partial (u , y)},
$$

其中 $J = \frac{\partial(F, G)}{\partial(u, v)}$ .

命题 20.2.2（反函数组存在定理）若

$$
u = f (x, y), \quad v = g (x, y)
$$

在点 $(x_0, y_0)$ 的某个邻域中连续可微， $u_0 = f(x_0, y_0), v_0 = g(x_0, y_0)$ ，且

$$
\left. \frac {\partial (u , v)}{\partial (x , y)} \right| _ {(x _ {0}, y _ {0})} \neq 0,
$$

则在 $(u_0, v_0)$ 的某一邻域内存在惟一的反函数组

$$
x = x (u, v), \quad y = y (u, v)
$$

满足 $u_0 = u(x_0,y_0),v_0 = v(x_0,y_0)$ ，且成立

$$
\frac {\partial (x , y)}{\partial (u , v)} \cdot \frac {\partial (u , v)}{\partial (x , y)} = 1.
$$

例题20.2.1 给定函数 $u = \mathrm{e}^{y}\sin x, v = \mathrm{e}^{y}\cos x, w = 2 - \cos z$ ，根据反函数组存在定理判断在哪些点 $(x, y, z)$ 所对应的点 $(u, v, w)$ 的邻域内存在反函数 $x = x(u, v, w), y = y(u, v, w), z = z(u, v, w)$ ?

解 函数 $e^{y}\sin x, e^{y}\cos x, 2 - \cos z$ 在 $R^{3}$ 中连续可微，且

$$
\frac {\partial (u , v , w)}{\partial (x , y , z)} = \left| \begin{array}{c c c} \mathrm{e} ^ {y} \cos x & \mathrm{e} ^ {y} \sin x & 0 \\ - \mathrm{e} ^ {y} \sin x & \mathrm{e} ^ {y} \cos x & 0 \\ 0 & 0 & \sin z \end{array} \right| = \mathrm{e} ^ {2 y} \sin z.
$$

所以在 $D=\left\{(x,y,z)\mid z\neq k\pi,k=0,\pm1,\pm2,\cdots\right\}$ 内任一点所对应的点 $(u,v,w)$ 处，存在一个邻域，在此邻域内存在反函数.

### 20.2.2 思考题

1. 若由 $F(x,y,z,u)=0, G(x,y,z,u)=0, H(x,y,z,u)=0$ 可解出 $x=x(u)$ , $y=y(u), z=z(u)$ ，根据隐函数组存在定理应如何对函数 F, G, H 假设条件？

2. 对极坐标变换

$$
x = r \cos \theta , \quad y = r \sin \theta ,
$$

在哪些点 $(r_0, \theta_0)$ 附近可存在反函数组 $r = r(x, y), \theta = \theta(x, y)$ ? 在 $(0, \theta_0)$ 附近能否存在反函数组？对结论做出直观解释.

### 20.2.3 求已知函数组所确定的隐函数组的导数

在这类问题中，一般认为隐函数组、反函数组存在且可微的条件均已满足，因而注重于运算的正确与熟练。此外，在计算导数时，一般不用求导公式，因为这些公式既不便于记忆，也不便于使用。往往是对已知函数组求导数，然后解所得的方程组便可得到所要的导数。

例题 20.2.2 设 $u(x,y)$ 是由方程组 $u=f(x,y,z,t)$ ， $g(y,z,t)=0$ ， $h(z,t)=0$ 确定的函数，其中 f, g, h 均连续可微，且 $\frac{\partial(g,h)}{\partial(z,t)}\neq0$ ，求 $\frac{\partial u}{\partial y}$ .

解1 首先应该认清函数关系, 因为 $\frac{\partial(g,h)}{\partial(z,t)} \neq 0$ , 故由

$$
g (y, z, t) = 0, \quad h (z, t) = 0\tag{20.5}
$$

可确定 $z, t$ 为 $y$ 的函数, 所以 $u = f(x, y, z(y), t(y))$ , 即 $u$ 是以 $z, t$ 为中间变量的 $x, y$ 的函数, 有了这个认识就可以具体地作求导运算.

由于

$$
\frac {\partial u}{\partial y} = f _ {2} + f _ {3} z ^ {\prime} (y) + f _ {4} t ^ {\prime} (y),\tag{20.6}
$$

为求 $z'(y)$ 和 $t'(y)$ ，在方程组 (20.5) 两边对 y 求导，得

$$
\begin{array}{l} g _ {y} + g _ {z} z ^ {\prime} + g _ {t} t ^ {\prime} = 0, \\ h _ {z} z ^ {\prime} + h _ {t} t ^ {\prime} = 0. \end{array}
$$

由此得到

$$
z ^ {\prime} = - g _ {y} h _ {t} \left(\frac {\partial (g , h)}{\partial (z , t)}\right) ^ {- 1}, t ^ {\prime} = g _ {y} h _ {z} \left(\frac {\partial (g , h)}{\partial (z , t)}\right) ^ {- 1},
$$

代入 (20.6) 得

$$
\frac {\partial u}{\partial y} = f _ {y} - g _ {y} \left(f _ {z} h _ {t} - f _ {t} h _ {z}\right) \left(\frac {\partial (g , h)}{\partial (z , t)}\right) ^ {- 1}.\tag{20.7}
$$

解 2 也可以直接考虑如下的方程组

$$
F (x, y, z, t, u) = 0,\tag{20.8}
$$

$$
g (y, z, t) = 0,\tag{20.9}
$$

$$
h (z, t) = 0,\tag{20.10}
$$

其中 $F(x,y,z,t,u) = u - f(x,y,z,t)$ . 由于

$$
\frac {\partial (F , g , h)}{\partial (u , z , t)} = \frac {\partial (g , h)}{\partial (z , t)} \neq 0,
$$

从而我们可视 $x, y$ 为自变量, $u, z, t$ 为 $x, y$ 的函数, 在 (20.8)—(20.10) 两边对 $y$ 求导数, 则

$$
\begin{array}{c} u _ {y} - f _ {y} - f _ {z} z _ {y} - f _ {t} t _ {y} = 0, \\ g _ {y} + g _ {z} z _ {y} + g _ {t} t _ {y} = 0, \\ h _ {z} z _ {y} + h _ {t} t _ {y} = 0. \end{array}
$$

解此方程组可得(20.7).

例题 20.2.3 设 $z = z(x, y)$ 由球变换 $x = \cos \varphi \cos \psi$ , $y = \cos \varphi \sin \psi$ , $z = \sin \varphi$ 确定, 求 $\frac{\partial^{2} z}{\partial x^{2}}$ .

解1 由所给方程组的前两个方程可确定 $\varphi = \varphi(x, y), \psi = \psi(x, y)$ ，故 $z = \sin \varphi(x, y)$ ，即 $z$ 是以 $\varphi$ 为中间变量的 $x, y$ 的函数，所以

$$
z _ {x} = \cos \varphi \cdot \varphi_ {x}.\tag{20.11}
$$

在前两个方程两边对 $x$ 求导，得

$$
\begin{array}{l} 1 = - \sin \varphi \cdot \varphi_ {x} \cos \psi + \cos \varphi (- \sin \psi) \cdot \psi_ {x}, \\ 0 = - \sin \varphi \cdot \varphi_ {x} \sin \psi + \cos \varphi \cos \psi \cdot \psi_ {x}. \end{array}
$$

解出

$$
\varphi_ {x} = - \frac {\cos \psi}{\sin \varphi}, \quad \psi_ {x} = - \frac {\sin \psi}{\cos \varphi},\tag{20.12}
$$

代入(20.11)得

$$
z _ {x} = - \cot \varphi \cos \psi .
$$

在上式两边再对 $x$ 求导得

$$
z _ {x x} = \csc^ {2} \varphi \cdot \varphi_ {x} \cos \psi + \cot \varphi \sin \psi \cdot \psi_ {x}.
$$

将 $(20.12)$ 代入, 得到

$$
z _ {x x} = \frac {\cos^ {2} \varphi \sin^ {2} \psi - 1}{\sin^ {3} \varphi}.
$$

解 2 由已知条件得 $x^{2} + y^{2} + z^{2} = 1$ ，两边对 x 求两次导数，注意到 y 与 x 是各自独立的变量，得

$$
x + z z _ {x} = 0, \quad 1 + z _ {x} ^ {2} + z z _ {x x} = 0,
$$

于是

$$
\begin{array}{l} z _ {x} = - \frac {x}{z}, \\ z _ {x x} = - \frac {z ^ {2} + x ^ {2}}{z ^ {3}} = \frac {y ^ {2} - 1}{z ^ {3}} = \frac {\cos^ {2} \varphi \sin^ {2} \psi - 1}{\sin^ {3} \varphi}. \end{array}
$$

例题 20.2.4 设 $u = f(x - ut, y - ut, z - ut)$ , $g(x, y, z) = 0$ , 试求 $u_x, u_y$ . 这时 t 是自变量还是因变量?

解 由两个方程确定两个隐函数. 一个是 u, 另一个由第二个方程看出应为 z. 因此 t 是自变量. 两个方程分别关于 x 求导得

$$
u _ {x} = f _ {1} (1 - u _ {x} t) + f _ {2} (- u _ {x} t) + f _ {3} (z _ {x} - u _ {x} t),
$$

$$
g _ {1} + g _ {3} z _ {x} = 0.
$$

解此方程组得

$$
u _ {x} = \frac {f _ {1} + f _ {3} \cdot \left(- \frac {g _ {1}}{g _ {3}}\right)}{1 + (f _ {1} + f _ {2} + f _ {3}) t}.
$$

同理有

$$
u _ {y} = \frac {f _ {2} + f _ {3} \cdot \left(- \frac {g _ {2}}{g _ {3}}\right)}{1 + (f _ {1} + f _ {2} + f _ {3}) t}.
$$

### 20.2.4 存在定理的证明

本节我们应用压缩映射原理证明反函数组存在定理, 把隐函数组存在定理的证明作为参考题. 由于定理的叙述与证明较抽象, 故这部分内容可作为补充材料. 我们先用映射的语言叙述反函数组存在定理, 或称为局部逆映射存在定理.

命题 20.2.3（局部逆映射存在定理）设 $f: E \subset R^{n} \to R^{n}$ 是 $C^{1}$ 映射，点 $a \in E, b = f(a)$ ，并且 Jacobi 矩阵 $f'(a)$ 可逆。则

(1) 存在开集 $U \subset E$ 和 V，使得 $a \in U, b \in V$ ，并且 f: $U \to V$ 是 1-1 满映射；

(2) 设 $g = f^{-1}: V \to U$ , 则 $g$ 是 $C^1$ 映射, 并且

$$
\boldsymbol {g} ^ {\prime} (\boldsymbol {y}) = \left[ \boldsymbol {f} ^ {\prime} (\boldsymbol {g} (\boldsymbol {y})) \right] ^ {- 1}, \quad \boldsymbol {y} \in V.
$$

证 (1) 设 $A = f'(a)$ , 取 $\lambda > 0$ , 使得 $2\lambda \| A^{-1} \| = 1$ , 其中 $\| \cdot \|$ 表示矩阵的模 ( $\| A \| = \max_{|x| = 1} |Ax|$ ). 因为 $f'$ 在 $a$ 连续, 故可取以 $a$ 为中心的开球 $U$ , 使得

$$
\| \boldsymbol {f} ^ {\prime} (\boldsymbol {x}) - \boldsymbol {A} \| <   \lambda , \quad \boldsymbol {x} \in U.\tag{20.13}
$$

对 $\pmb{y}\in \mathbf{R}^n$ ，定义

$$
\varphi (\boldsymbol {x}) = \boldsymbol {x} + \boldsymbol {A} ^ {- 1} (\boldsymbol {y} - \boldsymbol {f} (\boldsymbol {x})), \boldsymbol {x} \in U.\tag{20.14}
$$

则 $f(x) = y$ 当且仅当 $\pmb{x}$ 是 $\varphi$ 的不动点. 再记 $V = f(U)$ , 下面证明由 (20.14) 定义的映射有惟一不动点 $\pmb{x}$ , 即存在惟一的 $\pmb{x}$ 满足 $f(x) = y$ . 这就证明了 $\pmb{f}$ 是 $U$ 到 $V$ 的 1-1 可逆映射. 为此, 先对 $\varphi$ 作估计, 其 Jacobi 矩阵为

$$
\varphi^ {\prime} (\boldsymbol {x}) = \boldsymbol {I} - \boldsymbol {A} ^ {- 1} \boldsymbol {f} ^ {\prime} (\boldsymbol {x}) = \boldsymbol {A} ^ {- 1} [ \boldsymbol {A} - \boldsymbol {f} ^ {\prime} (\boldsymbol {x}) ].
$$

由(20.13)及Schwarz不等式得 $\| \varphi^{\prime}(\pmb {x})\| <  \frac{1}{2},\pmb {x}\in U.$ 再由拟微分中值定理得

$$
| \varphi (\boldsymbol {x} _ {1}) - \varphi (\boldsymbol {x} _ {2}) | \leqslant \frac {1}{2} | \boldsymbol {x} _ {1} - \boldsymbol {x} _ {2} |, \quad \boldsymbol {x} _ {1}, \boldsymbol {x} _ {2} \in U.\tag{20.15}
$$

因此 $\varphi$ 是一个压缩映射. 其次, 注意到 $\forall y_0 \in V$ , 存在 $x_0 \in U$ , 使 $f(x_0) = y_0$ . 取 $r$ 足够小, 使以 $x_0$ 为中心 $r$ 为半径的开球 $B$ 的闭包 $\overline{B} \subset U$ . 限制 $y$ 满足 $|y - y_0| < \lambda r$ , 此时对于 $\overline{B}$ 中的点 $x$ 有

$$
\begin{array}{r l} & {| \varphi (x) - x _ {0} | \leqslant | \varphi (x) - \varphi (x _ {0}) | + | \varphi (x _ {0}) - x _ {0} | \leqslant \frac {1}{2} | x - x _ {0} | + | A ^ {- 1} (y - y _ {0}) |} \\ & {\quad \leqslant \frac {r}{2} + \| A ^ {- 1} \| \cdot \lambda r \leqslant r,} \end{array}
$$

因此 $\varphi(x) \in \overline{B}$ , 从而 $\varphi$ 是 $\overline{B}$ 上的压缩映射. 故存在惟一的 $x \in \overline{B}$ , 使 $\varphi(x) = x$ . 也即只要 $y$ 满足 $|y - y_0| < \lambda r$ , 就存在惟一的 $x \in \overline{B}$ , 使 $f(x) = y$ , 即 $y \in f(\overline{B}) \subset f(U) = V$ . 这一方面证明了以 $y_0$ 为中心 $\lambda r$ 为半径的开球位于 $V$ 中, 故 $V$ 是开集. 另一方面也证明了 $f$ 是 $U$ 到 $V = f(U)$ 的 1-1 可逆映射.

(2) 因为 $f$ 是 $C^1$ 映射, 故 $\operatorname{det} f'(x)$ 是 $x$ 的连续函数. $f'(a)$ 可逆, 即 $\operatorname{det} f'(a) \neq 0$ , 故不妨认为在 (1) 中给出的邻域 $U$ 内, 都有 $\operatorname{det} f'(x) \neq 0$ . 即 $f'(x)$ 可逆. 记其逆为 $T$ . 设 $g$ 是 $f$ 的逆, 即 $x = g(y)$ . 取 $y \in V$ , $y + k \in V$ . 于是 $\exists h \in \mathbf{R}^n$ , 使 $x \in U$ , $x + h \in U$ 及 $y = f(x)$ , $y + k = f(x + h)$ . 用 (20.14) 中的估计有

$$
\varphi (x + h) - \varphi (x) = h + A ^ {- 1} [ f (x) - f (x + h) ] = h - A ^ {- 1} k,
$$

由(20.15)得 $|h-A^{-1}k|\leqslant\frac{1}{2}|h|$ ，即 $|A^{-1}k|\geqslant\frac{1}{2}|h|$ ，从而

$$
| k | \geqslant \lambda | h |.\tag{20.16}
$$

于是

$$
g (y + k) - g (y) - T k = - T [ f (x + h) - f (x) - f ^ {\prime} (x) h ].
$$

所以

$$
\frac {| g (y + k) - g (y) - T k |}{| k |} \leqslant \frac {\| T \| \cdot | f (x + h) - f (x) - f ^ {\prime} (x) h |}{\lambda | h |},
$$

且当 $|k| \to 0$ ，由(20.16)也有 $|h| \to 0$ ，上式右边的极限为0。这就证明了 $\pmb{g}$ 是可微映射，且 $\pmb{g}'(\pmb{y}) = \pmb{T} = [\pmb{f}'(\pmb{g}(\pmb{y}))]^{-1}$ 。关于 $\pmb{g}'(\pmb{y})$ 为连续的证明留给读者。

注 设 $f: E \subset \mathbf{R}^{n+m} \to \mathbf{R}^n$ 是 $C^1$ 映射, $(a, b) \in E$ , 使 $f(a, b) = 0$ , 并且 Jacobi 矩阵 $f'(a, y)$ 可逆, 其中 “ $l''$ ” 表示固定 $a$ 而把 $y$ 看成自变量而得到的全导数. 这时方程 $f(x, y) = 0$ 在点 $(a, b)$ 的邻域内存在惟一 $C^1$ 隐映射 $y = y(x)$ 的局部隐映射存在定理可通过定义 $F(x, y) = (f(x, y), y)$ 而转化为 $F$ 的局部逆映射存在定理. 其证明作为参考题.

### 20.2.5 练习题

1. 设 $x = \mathrm{e}^{v} + u^{3}$ , $y = \mathrm{e}^{u} - v^{3}$ , 求反函数组的一阶偏导数 $\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}$ .

2. 对由方程组

$$
\left\{ \begin{array}{l} x + y + z = 0, \\ x ^ {2} + y ^ {2} + z ^ {2} = 1 \end{array} \right.
$$

确定的函数 $x = x(z), y = y(z)$ ，求在点 $\left(\frac{1}{\sqrt{2}}, \frac{-1}{\sqrt{2}}, 0\right)$ 处的导数 $\frac{\mathrm{d}x}{\mathrm{d}z}, \frac{\mathrm{d}y}{\mathrm{d}z}$ .

3. 对方程组

$$
\left\{ \begin{array}{l} x ^ {3} + y ^ {3} + z ^ {3} = 3 x y z, \\ x + y + z = a \end{array} \right.
$$

确定的隐函数组 $y = y(x), z = z(x)$ ，求出导数 $\frac{\mathrm{dy}}{\mathrm{dx}}, \frac{\mathrm{dz}}{\mathrm{dx}}, \frac{\mathrm{d}^2y}{\mathrm{dx}^2}, \frac{\mathrm{d}^2z}{\mathrm{dx}^2}$ .

4. 设

$$
\left\{ \begin{array}{l} x = u \cos \frac {v}{u}, \\ y = \sin \frac {v}{u}, \end{array} \right.
$$

求反函数组的偏导数 $u_{x}, u_{y}, v_{x}, v_{y}$ .

5. 设 $u = u(x)$ 是由方程组 $u = f(x, y, z), g(x, y, z) = 0, h(x, y, z) = 0$ 所确定. 求 $\frac{\mathrm{d}u}{\mathrm{d}x}, \frac{\mathrm{d}^2u}{\mathrm{d}x^2}$ .

6. 求由方程组 $x = u\cos v, y = u\sin v, z = v$ 确定的 $z = z(x, y)$ 的所有二阶偏导数.

7. 设 $z = z(x, y)$ 为由方程组 $x = \mathrm{e}^{u + v}, y = \mathrm{e}^{u - v}, z = uv$ 所定义的函数，求当 $(u, v) = (0, 0)$ 时的 $\mathrm{dz}, \mathrm{d}^2 z$ .

8. 设 $u = f(x, y, z), g(x^2, \mathrm{e}^y, z) = 0, y = \sin x$ ，且已知 $f$ 与 $g$ 都有一阶连续偏导数，求 $\frac{\mathrm{d}u}{\mathrm{d}x}$ .

## §20.3 变量代换问题

今后, 例如在偏微分方程的求解过程中, 经常需要对自变量或函数作变量代换, 以求简化方程形式乃至求出方程的解. 变量代换计算的关键是隐函数组或反函数组的求导.

### 20.3.1 仅变换自变量的情形

例题 20.3.1 在方程 $\left(\frac{\partial u}{\partial x}\right)^{2}+\left(\frac{\partial u}{\partial y}\right)^{2}=u$ 中作极坐标变换 $x=r\cos\theta, y=r\sin\theta,$ 试求方程在变换后的形式.

解1 认为 $u(x,y) = u(r\cos \theta ,r\sin \theta)$ ，则

$$
\begin{array}{l} u _ {r} = u _ {x} \cos \theta + u _ {y} \sin \theta , \\ u _ {\theta} = r (- u _ {x} \sin \theta + u _ {y} \cos \theta). \end{array}
$$

解此方程组得

$$
u _ {x} = \frac {1}{r} (r \cos \theta u _ {r} - \sin \theta u _ {\theta}),
$$

$$
u _ {y} = \frac {1}{r} (r \sin \theta u _ {r} + \cos \theta u _ {\theta}).
$$

代入原方程中得

$$
u _ {r} ^ {2} + \frac {1}{r ^ {2}} u _ {\theta} ^ {2} = u.
$$

解2 认为 $u(r,\theta) = u\left(\sqrt{x^2 + y^2},\arctan \frac{y}{x}\right)$ ，则

$$
u _ {x} = u _ {r} \frac {x}{r} - u _ {\theta} \frac {y}{r ^ {2}},
$$

$$
u _ {y} = u _ {r} \frac {y}{r} + u _ {\theta} \frac {x}{r ^ {2}}.
$$

于是 $u_{x}^{2} + u_{y}^{2} = u_{r}^{2} + \frac{1}{r^{2}} u_{\theta}^{2}$ ，从而方程化为

$$
u _ {r} ^ {2} + \frac {1}{r ^ {2}} u _ {\theta} ^ {2} = u.
$$

注 上述两种方法是自变量变换中通常使用的方法, 具体用哪一种方法使运算简单, 视具体情况而定.

例题20.3.2 通过代换 $x = uv, y = \frac{1}{2}(u^2 - v^2)$ , 变换方程

$$
\left(\frac {\partial z}{\partial x}\right) ^ {2} + \left(\frac {\partial z}{\partial y}\right) ^ {2} = \frac {1}{\sqrt {x ^ {2} + y ^ {2}}}.
$$

解 由链式法则

$$
z _ {u} = v z _ {x} + u z _ {y}, \quad z _ {v} = u z _ {x} - v z _ {y}.
$$

两式平方后相加得

$$
z _ {u} ^ {2} + z _ {v} ^ {2} = (u ^ {2} + v ^ {2}) (z _ {x} ^ {2} + z _ {y} ^ {2}).
$$

于是

$$
z _ {x} ^ {2} + z _ {y} ^ {2} = \frac {1}{u ^ {2} + v ^ {2}} (z _ {u} ^ {2} + z _ {v} ^ {2}).
$$

另一方面

$$
x ^ {2} + y ^ {2} = \frac {1}{4} (u ^ {2} + v ^ {2}) ^ {2},
$$

代入原方程得

$$
z _ {u} ^ {2} + z _ {v} ^ {2} = 2.
$$

### 20.3.2 自变量与因变量同时变换的情形

这种情况比只变换自变量的情况稍复杂些, 它要多一个函数关系分析的步骤.

例题20.3.3通过代换 $x = t, y = \frac{t}{1 + tu}, z = \frac{t}{1 + tv}$ ，试把方程

$$
x ^ {2} z _ {x} + y ^ {2} z _ {y} = z ^ {2}\tag{20.17}
$$

变为以 v 为因变量, t, u 为自变量的形式.

分析 题目的意思是有一个函数 $z = z(x,y)$ 满足方程(20.17)，作自变量代换

$$
x = t, \quad y = \frac {t}{1 + t u}\tag{20.18}
$$

以及因变量代换

$$
z = \frac {t}{1 + t v}\tag{20.19}
$$

得到函数 $v = v(t, u)$ . 求 $v = v(t, u)$ 满足的方程.

解 1 直接从关系式 (20.19) 出发求 $z_{x}$ 和 $z_{y}$ :

$$
z _ {x} = \left(\frac {t}{1 + t v}\right) _ {t} t _ {x} + \left(\frac {t}{1 + t v}\right) _ {v} (v _ {t} t _ {x} + v _ {u} u _ {x}),\tag{20.20}
$$

$$
z _ {y} = \left(\frac {t}{1 + t v}\right) _ {t} t _ {y} + \left(\frac {t}{1 + t v}\right) _ {v} (v _ {t} t _ {y} + v _ {u} u _ {y}).\tag{20.21}
$$

由(20.18)得

$$
t = x, \quad u = \frac {1}{y} - \frac {1}{x}.
$$

于是

$$
t _ {x} = 1, \qquad t _ {y} = 0,
$$

$$
u _ {x} = \frac {1}{x ^ {2}}, \qquad u _ {y} = - \frac {1}{y ^ {2}}.
$$

将它们代入(20.20)，(20.21)，得到

$$
z _ {x} = \left(\frac {t}{1 + t v}\right) _ {t} + \left(\frac {t}{1 + t v}\right) _ {v} \left(v _ {t} + \frac {1}{x ^ {2}} v _ {u}\right),
$$

$$
z _ {y} = - \left(\frac {t}{1 + t v}\right) _ {v} \frac {1}{y ^ {2}} v _ {u}.
$$

将以上式子代入 (20.17), 得到

$$
x ^ {2} \left[ \left(\frac {t}{1 + t v}\right) _ {t} + \left(\frac {t}{1 + t v}\right) _ {v} v _ {t} \right] = z ^ {2}.
$$

整理得

$$
v _ {t} = 0.
$$

解2 从(20.19)中解出 $v$ 得

$$
v = \frac {1}{z} - \frac {1}{t},
$$

于是

$$
v _ {t} = - \frac {1}{z ^ {2}} \left(z _ {x} x _ {t} + z _ {y} y _ {t}\right) + \frac {1}{t ^ {2}},\tag{20.22}
$$

$$
v _ {u} = - \frac {1}{z ^ {2}} (z _ {x} x _ {u} + z _ {y} y _ {u}).\tag{20.23}
$$

由(20.18)得

$$
\begin{array}{l} x _ {t} = 1, \quad x _ {u} = 0, \\ y _ {t} = \frac {1}{(1 + t u) ^ {2}}, \quad y _ {u} = - \frac {t ^ {2}}{(1 + t u) ^ {2}}. \end{array}
$$

将它们代入 $(20.22)$ ， $(20.23)$ 得

$$
v _ {t} = - \frac {1}{z ^ {2}} \left[ z _ {x} + \frac {1}{(1 + t u) ^ {2}} z _ {y} \right] + \frac {1}{t ^ {2}},
$$

$$
v _ {u} = \frac {1}{z ^ {2}} \cdot \frac {t ^ {2}}{(1 + t u) ^ {2}} z _ {y}.
$$

由此解出 $z_{x}, z_{y}$ , 得

$$
z _ {x} = z ^ {2} \left(\frac {1}{t ^ {2}} - v _ {t}\right) - \frac {z ^ {2}}{t ^ {2}} v _ {u},
$$

$$
z _ {y} = \frac {z ^ {2} (1 + t u) ^ {2}}{t ^ {2}} v _ {u}.
$$

将它们代入原方程, 得

$$
v _ {t} = 0.
$$

### 20.3.3 练习题

1. 把方程 $(x-y)\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=0$ 变为 x 作因变量, y,z 为自变量的形式.

2. 引用新函数 $r = \sqrt{x^2 + y^2}, \varphi = \arctan{\frac{y}{x}}$ 变换微分式

$$
w = x \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} - y \frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}}.
$$

3. 以 $\xi = x + y, \eta = x - y$ 为新自变量, 变换方程 $\frac{\partial z}{\partial x} = \frac{\partial z}{\partial y}$ .

4. 取 $u = y + ze^{-x}, v = x + ze^{-y}$ 为新的自变量，变换微分式

$$
F = (z + \mathrm{e} ^ {x}) \frac {\partial z}{\partial x} + (z + \mathrm{e} ^ {y}) \frac {\partial z}{\partial y} - (z ^ {2} - \mathrm{e} ^ {x + y}).
$$

5. 设 $u = x e^{z}, v = y e^{z}, w = z e^{z}$ ，试以 w 为新的因变量，u, v 为新的自变量，变换方程 $\frac{\partial z}{\partial x} = \frac{\partial z}{\partial y}$ .

6. 以 w 为新的因变量, $\xi, \eta, \zeta$ 为新的自变量, 变换方程

$$
x \frac {\partial u}{\partial x} + y \frac {\partial u}{\partial y} + z \frac {\partial u}{\partial z} = u + \frac {x y}{z},
$$

其中 $\xi=\frac{x}{z},\eta=\frac{y}{z},\zeta=z,w=\frac{u}{z}.$ 

7. 试求 $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0$ 在球坐标下的形式.

8. 以 $u = x + 2y + 2, v = x - y - 1$ 为新的自变量，变换方程

$$
2 \frac {\partial^ {2} z}{\partial x ^ {2}} + \frac {\partial^ {2} z}{\partial x \partial y} - \frac {\partial^ {2} z}{\partial y ^ {2}} + \frac {\partial z}{\partial x} + \frac {\partial z}{\partial y} = 0.
$$

9. 以 w 为新的因变量, u, v 为新的自变量, 变换方程

$$
\frac {\partial^ {2} z}{\partial x ^ {2}} - 2 \frac {\partial^ {2} z}{\partial x \partial y} + \left(1 + \frac {y}{x}\right) \frac {\partial^ {2} z}{\partial y ^ {2}} = 0,
$$

其中 $u = x, v = x + y, w = x + y + z.$ 

10. 设 $xu = x^2 + y^2, yv = x^2 + y^2$ ，证明： $\frac{\partial(u, v)}{\partial(x, y)} = -\frac{uv}{xy}$ .

11. 若 $u(x,y,z), v(x,y,z)$ 可微, 证明:

$$
\frac {\partial (u , v)}{\partial (y , z)} \frac {\partial u}{\partial x} + \frac {\partial (u , v)}{\partial (z , x)} \frac {\partial u}{\partial y} + \frac {\partial (u , v)}{\partial (x , y)} \frac {\partial u}{\partial z} = 0.
$$

12. 设 $u = xy, v = \frac{x}{y}$ , 试求 $\frac{\partial(u, v)}{\partial(x, y)}, \frac{\partial(x, y)}{\partial(u, v)}$ .

13. 设 $u = \frac{x}{r^2}, v = \frac{y}{r^2}, w = \frac{z}{r^2}$ ，其中 $r^2 = x^2 + y^2 + z^2$ ，试求 $\frac{\partial(u, v, w)}{\partial(x, y, z)}$ .

## §20.4 隐函数及隐函数组的整体存在性

隐函数的整体存在性是一个比较复杂的问题. 设 $F(x, y)$ 在 $D = (a, b) \times (c, d)$ 上连续, $F_y(x, y) \neq 0$ , $(x, y) \in D$ . 于是在 $D$ 中每一点附近方程 $F(x, y) = 0$ 可惟一确定一个隐函数 $y = f(x)$ . 但我们不知道当 $y$ 在 $(c, d)$ 变化时, 满足方程的 $x$ 是否会布满 $(a, b)$ . 所以我们并不清楚隐函数 $y = f(x)$ 是否可定义在 $(a, b)$ 上. 在很多时候 $y = f(x)$ 不能定义在 $(a, b)$ 上. 读者可考察例子 $F(x, y) = y - 2x$ , $D = (-1, 1) \times (-1, 1)$ . 下面是隐函数整体存在的一个充分性命题.

命题 20.4.1 设 $F(x,y)$ 在 $D=\{(x,y)\in\mathbf{R}^{2}\mid a<x<b,-\infty<y<+\infty\}$ 中连续, $F_{y}$ 处处存在且 $F_{y}\geqslant m>0$ , 则 $F(x,y)=0$ 在 $(a,b)$ 中存在惟一连续解 $y=f(x)$ .

证 $\forall x_0\in (a,b)$ ，对任意 $y_{2} > y_{1}$ ，考虑

$$
F (x _ {0}, y _ {2}) - F (x _ {0}, y _ {1}) = F _ {y} (x _ {0}, \xi) (y _ {2} - y _ {1}) \geqslant m (y _ {2} - y _ {1}).
$$

固定 $y_{1}$ ，令 $y_{2}\rightarrow +\infty$ ，由 $F(x_0,y_2)\geqslant F(x_0,y_1) + m(y_2 - y_1)$ ，知

$$
\lim _ {y \rightarrow + \infty} F (x _ {0}, y) = + \infty .
$$

固定 $y_{2}$ ，令 $y_{1}\rightarrow -\infty$ ，由 $F(x_0,y_1)\leqslant F(x_0,y_2) - m(y_2 - y_1)$ ，知

$$
\lim _ {y \rightarrow - \infty} F (x _ {0}, y) = - \infty .
$$

由介值定理, 存在 $y_{0} \in R$ (且是惟一的), 使得 $F(x_{0}, y_{0}) = 0$ . 由 $x_{0}$ 的任意性知存在 $y = f(x)$ , 使得 $F(x, f(x)) = 0, x \in (a, b)$ .

至此已证明了 $y = f(x)$ 的存在惟一性, $y = f(x)$ 的连续性的证明与隐函数存在定理中的证明相同. □

注意到以上命题中 $F_{y} \geqslant m > 0$ 是一个很强的条件，它保证了对每个固定的 $x \in (a, b)$ ，存在惟一的 $y = f(x)$ ，使得 $F(x, f(x)) = 0$ 。在高维情况就要复杂得多。

下面只讨论映射 $F: R^{n} \rightarrow R^{n}$ 是否存在定义在 $R^{n}$ 上的整体逆映射 $F^{-1}$ 的问题. 如果 F 与 $F^{-1}$ 都是连续映射, 则称 F 是 $R^{n}$ 上的同胚. 如果 F 与 $F^{-1}$ 都是 $C^{k}$ 映射 (即各个分量函数都是 k 次连续可微函数), 则称 F 是 $R^{n}$ 上的 $C^{k}$ 同胚. 反函数组定理告诉我们, 如果 $\forall x \in R^{n}, \det JF(x) \neq 0$ , 则对每一个 x 都存在 x 的邻域 U 和 $F(x)$ 的邻域 V, 使 F 是 U 到 V 的同胚. 但 F 不一定是 $R^{n}$ 上的整体同胚, 即使有类似于命题 20.4.1 的条件也不行. 例如考虑可微映射

$$
u = \sqrt {2} \mathrm{e} ^ {\frac {x}{2}} \cos (y \mathrm{e} ^ {- x}), \quad v = \sqrt {2} \mathrm{e} ^ {\frac {x}{2}} \sin (y \mathrm{e} ^ {- x}),\tag{20.24}
$$

其 Jacobi 行列式 $\frac{\partial(u,v)}{\partial(x,y)}\equiv 1$ 。在 $\mathbf{R}^2$ 的每一点的附近存在逆映射。但映射 (20.24) 是周期的，故其确定的映射不是单射，因而其逆映射在 $\mathbf{R}^2$ 中并不是整体存在的。这里单射是关键，事实上我们有如下逆映射定理。

命题 20.4.2 设开集 $D \subset R^{n}, f: D \to R^{n}$ . 如果

(1) f 是 D 上的连续可微映射;

(2) 对每一个 $x \in D$ , $\det J f(x) \neq 0$ ,

则 $G = f(D)$ 为一开集. 又如果 $\pmb{f}$ 是 $D$ 上的单射, 那么存在由 $G$ 到 $D$ 上的连续可微映射 $\pmb{f}^{-1}$ 满足: 对一切 $\pmb{y} \in G$ 有

$$
\boldsymbol {f} \circ \boldsymbol {f} ^ {- 1} (\boldsymbol {y}) = \boldsymbol {y}, \quad J \boldsymbol {f} ^ {- 1} (\boldsymbol {y}) = (J \boldsymbol {f} (\boldsymbol {x})) ^ {- 1},\tag{20.25}
$$

其中 $x = f^{-1}(y)$ .

证 $\forall y \in f(D), \exists x \in D,$ 使 $f(x) = y, f$ 定义在 $x$ 的某个邻域上，且 $\operatorname{det} J f(x) \neq 0.$ 由反函数组存在定理，存在 $y$ 的邻域 $V$ ，使逆映射在 $V$ 上惟一存在，即存在惟一的 $f^{-1}(y)$ ，使

$$
\boldsymbol {f} \circ \boldsymbol {f} ^ {- 1} (\boldsymbol {y}) = \boldsymbol {y}, \forall \boldsymbol {y} \in D.
$$

所以 $V \subset f(D)$ ，这就证明了 y 是 $f(D)$ 的内点。由 y 的任意性就证明了 $f(D)$ 是开集。当 f 是 D 到 G 的 1-1 映射时，逆映射是惟一存在的。且整体惟一的逆映射必是局部惟一的逆映射，再结合反函数组存在定理就可证明 (20.25)。

关于整体同胚有许多漂亮的充分必要条件与充分条件, 下面是很经典的两个.

命题 20.4.3 (Hadamard 定理) 设 $F: R^{n} \rightarrow R^{n}$ 是 $C^{1}$ 映射，并且 $\forall x \in R^{n}$ ，有 $\det JF(x) \neq 0$ ，即 Jacobi 矩阵 $JF(x)$ 的逆矩阵 $JF^{-1}(x)$ 存在。如果还存在 M > 0，使得 $\|JF^{-1}(x)\| \leqslant M, \forall x \in R^{n}$ ，其中 $\|\cdot\|$ 表示矩阵的模（如 $\|A\| = \max_{1 \leqslant i,j \leqslant n} \{|a_{ij}|\}$ ，则 F 是 $R^{n}$ 到 $R^{n}$ 的 $C^{1}$ 同胚。

命题 20.4.4 设 $F: R^{n} \rightarrow R^{n}$ 是 $C^{1}$ 映射，并且 $\forall x \in R^{n}$ ，有 $\det JF(x) \neq 0$ 。则 F 是 $R^{n}$ 到 $R^{n}$ 的 $C^{1}$ 同胚的充分必要条件是

$$
\lim _ {| \boldsymbol {x} | \rightarrow + \infty} | \boldsymbol {F} (\boldsymbol {x}) | = + \infty .
$$

尽管这两个命题的表述在数学分析的范围内很好理解, 但它们的证明要用到进一步的数学知识. 有兴趣的读者可在以后参考 Deimling K 的专著: Nonlinear Functional Analysis (Berlin: Springer-Verlag, 1985) 的第 152–153, 171 页.

我们在参考题中列举了一些可以用多元微积分的知识来讨论的命题.

## §20.5 对于教学的建议

### 20.5.1 学习要点

1. 隐函数 (组) 的概念和存在定理的证明对于初学者来说都不容易掌握. 最基本的要求是理解隐函数 (组) 的概念, 能叙述隐函数 (组) 存在定理并了解隐函数存在定理的证明.

2. 求隐函数 (组), 反函数 (组) 的导数和用变量代换去计算微分表达式的一个重要环节是分析哪些变量是自变量, 哪些是因变量. 很多学生在解题时不重视这个环节, 这是他们不会做题或出错的真正原因. 关于变量代换的计算方法与大量实例还可以参看 [55] 第三册的 §6.4.

3. 对于习题课的建议 告诉学生求隐函数的导数以及变量替换时, 首先要搞清楚自变量、因变量与它们的相互关系. 其次是要有耐心. 在求二阶以上导数时, 极易漏项. 可从学生作业中找出共同性的问题, 进行评讲. 处理繁琐题目的耐心也是一种基本的数学素养.

对于计算, 也绝非无技巧可言. 下面的两个例题用引入简单的微分算子的方法, 对我们会有所启发.

例题20.5.1 设 $z = z(x, y)$ 二阶连续可微，在微分方程

$$
\frac {1}{(x + y) ^ {2}} \left(\frac {\partial^ {2} z}{\partial x ^ {2}} + 2 \frac {\partial^ {2} z}{\partial x \partial y} + \frac {\partial^ {2} z}{\partial y ^ {2}}\right) - \frac {1}{(x + y) ^ {3}} \left(\frac {\partial z}{\partial x} + \frac {\partial z}{\partial x}\right) = 0
$$

中，作变量代换

$$
u = x y, \quad v = x - y.\tag{20.26}
$$

求变换后的方程.

分析 注意到方程中的导数部分, 第一部分是 $\left(\frac{\partial}{\partial x} + \frac{\partial}{\partial y}\right)^{2}$ , 第二部分是 $\frac{\partial}{\partial x} + \frac{\partial}{\partial y}$ . 于是只要求出在变量替换 (20.26) 下 $\frac{\partial}{\partial x} + \frac{\partial}{\partial y}$ 的表达式即可.

解 利用链式求导法则得到

$$
z _ {x} = z _ {u} u _ {x} + z _ {v} v _ {x} = y z _ {u} + z _ {v}, \quad z _ {y} = z _ {u} u _ {y} + z _ {v} v _ {y} = x z _ {u} - z _ {v}.
$$

两式相加得

$$
\left(\frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) z = (x + y) \frac {\partial z}{\partial u}.\tag{20.27}
$$

于是我们得到在变换(20.26)之下有

$$
\frac {\partial}{\partial x} + \frac {\partial}{\partial y} = (x + y) \frac {\partial}{\partial u}.\tag{20.28}
$$

在(20.27)两边再作用算子 $\frac{\partial}{\partial x} +\frac{\partial}{\partial y}$ ，并利用(20.28)，则

$$
\begin{array}{r l} \left(\frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) ^ {2} z & = \left(\frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) \left[ (x + y) \frac {\partial z}{\partial u} \right] \\ & = \left[ \left(\frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) (x + y) \right] \frac {\partial z}{\partial u} + (x + y) \left(\frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) \frac {\partial z}{\partial u} \\ & = 2 \frac {\partial z}{\partial u} + (x + y) ^ {2} \frac {\partial^ {2} z}{\partial u ^ {2}}. \end{array} \tag {2}\tag{20.29}
$$

将(20.27)，(20.29)代入原微分方程中，则得到

$$
\frac {1}{(x + y) ^ {2}} \left[ 2 \frac {\partial z}{\partial u} + (x + y) ^ {2} \frac {\partial^ {2} z}{\partial u ^ {2}} \right] - \frac {1}{(x + y) ^ {3}} (x + y) \frac {\partial z}{\partial u} = 0,
$$

加以整理并将(20.26)代入得

$$
\frac {\partial^ {2} z}{\partial u ^ {2}} + \frac {1}{v ^ {2} + 4 u} \frac {\partial z}{\partial u} = 0,
$$

即已将原方程化为 v 作参数的二阶线性常微分方程.

例题20.5.2 设方程

$$
a \frac {\partial^ {2} z}{\partial x ^ {2}} + 2 b \frac {\partial^ {2} z}{\partial x \partial y} + c \frac {\partial^ {2} z}{\partial y ^ {2}} = 0,
$$

其中 $a, b, c$ 都是常数， $b^2 - ac = 0, c \neq 0$ ，作代换

$$
u = x + \alpha y, \quad v = x + \beta y.\tag{20.30}
$$

问如何选择 $\alpha, \beta,$ 能使代换后的方程有简单的形式?

解 不妨设 $c = 1$ ，则 $a = b^{2}$ ，于是原方程变为

$$
\left(b \frac {\partial}{\partial x} + \frac {\partial}{\partial y}\right) ^ {2} z = 0.
$$

若 b=0 则原方程已是最简形式. 以下设 $b\neq0$ , 则我们的任务是在 (20.30) 中适当选取 $\alpha,\beta,$ 使得

$$
b \frac {\partial}{\partial x} + \frac {\partial}{\partial y} = \frac {\partial}{\partial u}.\tag{20.31}
$$

由(20.30)得

$$
\frac {\partial}{\partial x} = \frac {\partial}{\partial u} + \frac {\partial}{\partial v},
$$

$$
\frac {\partial}{\partial y} = \alpha \frac {\partial}{\partial u} + \beta \frac {\partial}{\partial v}.
$$

明显地只要取 $\beta = -b, \alpha = 1 - b,$ 则 (20.31) 成立. 此时原方程化为

$$
\frac {\partial^ {2} z}{\partial u ^ {2}} = 0.\tag{20.32}
$$

事实上，只要取 $\beta = -b, \alpha \neq -b$ ，则 (20.32) 仍成立.

### 20.5.2 参考题

#### 第一组参考题

1. 设 $f(x, y)$ 在点(0,1)附近连续可微，且 $f_y(0,1) \neq 0, f(0,1) = 0$ . 证明：

$f(x,\int_{0}^{t}\sin x\mathrm{d}x)=0$ 在点 $\left(0,\frac{\pi}{2}\right)$ 附近确定一个隐函数 $t=\varphi(x)$ ，并求 $\varphi'(0)$ .

2. 证明：由方程 $y = x + \frac{1}{2}\sin y$ 可在 $(- \infty, + \infty)$ 中确定隐函数 $y = y(x)$ ，且 $y(x) \in C^{\infty}(\mathbf{R})$ ，即 $y(x)$ 是 $\mathbf{R}$ 上的无穷次可微函数.

3. 设 $x = y + \varphi(y), \varphi$ 满足 $\varphi(0) = 0, \varphi'(y)$ 在 $(-a, a)$ 中连续，且 $|\varphi'(0)| \leqslant k < 1$ . 证明：存在 $\delta > 0$ ，使当 $-\delta < x < \delta$ 时有惟一可微函数 $y = y(x)$ 满足方程 $x = y + \varphi(y)$ 且 $y(0) = 0$ .

4. 证明：方程 $F(x, y) = 1 - \mathrm{e}^{-x} + y^3 \mathrm{e}^{-y} = 0$ 在 $\{x > 0, y \in \mathbf{R}^1\}$ 中存在惟一解 $y = y(x) (x > 0)$ ，且 $y(x)$ 连续可微.

5. 设 $f(x, y)$ 满足: $f_x$ 在 $\mathbf{R}^2$ 上存在, $f_y$ 在 $\mathbf{R}^2$ 上存在且连续, 且

$$
\left| f _ {x} \right| <   M \left| f _ {y} \right|, \quad f (x _ {0}, y _ {0}) = 0,
$$

这里 $M$ 是正常数．证明： $f(x,y) = 0$ 惟一确定一个定义在 $\mathbf{R}$ 上的可微解 $y = y(x)$ ，且满足 $y(x_0) = y_0$ 再问条件 $|f_x| <   M|f_y|$ 是否是必要的？若去掉 $f(x_0,y_0) = 0$ 这个条件，结论是否仍成立？

6. 设 $u = f(x, y)$ , $v = g(x, y)$ 在区域 $\Omega \subset \mathbf{R}^2$ 上有连续偏导数. 证明:

(1) 如果在 $\Omega$ 上的 Jacobi 矩阵的秩恒等于 1, 则对 $\Omega$ 内任一点 $(x_0, y_0)$ , 存在 $(x_0, y_0)$ 的邻域 $U$ 和连续可微的函数 $F(u, v)$ , $(F_u')^2 + (F_v')^2 \neq 0$ , 使 $F(f(x, y), g(x, y)) = 0$ 在 $U$ 上恒成立;

(2) 若有连续可微函数 $F(u, v), (F_u')^2 + (F_v')^2 \neq 0$ ，使 $F(f(x, y), g(x, y)) = 0$ 在 $\Omega$ 上恒成立，则

$$
\frac {\partial (u , v)}{\partial (x , y)} \equiv 0, \quad (x, y) \in \Omega .
$$

7. 设空间曲线 C 的方程是:

$$
x = f (t), y = \varphi (t), z = {\frac {f ^ {\prime} (t)}{\varphi^ {\prime} (t)}}, \quad - 1 <   t <   1,
$$

其中 $f, \varphi$ 在 $(-1, 1)$ 上有二阶连续导数，且一阶导数处处不等于0. 设点集

$$
E = \left\{(x, y, z) \mid x = s ^ {2} + \frac {f ^ {\prime} (t)}{\varphi^ {\prime} (t)} s + f (t), \right.
$$

$$
y = 2 s + \varphi (t), z = \frac {f ^ {\prime} (t)}{\varphi^ {\prime} (t)}, s, t \in (- 1, 1) \Big \}.
$$

证明： $E$ 中与曲线 $C$ 充分接近（即 $|s|$ 充分小）的一些点，组成一张连续曲面 $z = z(x,y)$ 

8. 设函数 $f(x, y), g(x, y)$ 是定义在平面开区域 $G$ 上的两个函数，在 $G$ 上均有连续的一阶偏导数，且在 $G$ 内任意点处均有

$$
\frac {\partial f}{\partial x} \frac {\partial g}{\partial y} - \frac {\partial f}{\partial y} \frac {\partial g}{\partial x} \neq 0.
$$

又设有界闭区域 $D \subset G$ . 证明: 在 D 中满足方程组

$$
f (x, y) = 0, \quad g (x, y) = 0
$$

的点至多有有限个.

9. 设 $f$ 是 $\mathbf{R}^3$ 上的连续可微函数. 若 $f(x, y, z) = 0$ , 则 $\frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial x} \cdot \frac{\partial x}{\partial z} = -1$ .

(1) 解释上述命题的精确含义;

(2) 对 Clapeyron (克拉佩隆) 公式 $\frac{P \cdot V}{T} =$ 常数, 验证上述命题的正确性;

(3) 对于 n 元连续可微函数 $f(x_{1}, x_{2}, \cdots, x_{n})$ 确定的关系式 $f(x_{1}, x_{2}, \cdots, x_{n}) = 0$ 是否有上述类似公式？验证你的判断.

10. 设 $f: R^{2} \rightarrow R^{2}$ 为 $C^{1}$ 映射. 若只存在有限多个点 $x_{1}, x_{2}, \cdots, x_{r}$ ，使得 $\det J f(x_{i}) = 0, i = 1, 2, \cdots, r$ ，并且对每个正数 M， $\{z \in R^{2} \mid |f(z)| \leqslant M\}$ 是有界集，证明：f 把 $R^{2}$ 映满 $R^{2}$ .

11. 设 $f: \mathbf{R}^n \to \mathbf{R}^n$ 为 $C^1$ 映射, 且 $Jf(x_0)$ 可逆. 证明: $\forall x \in \mathbf{R}^n$ , 只要 $|x|$ 充分小, 就存在 $z \in \mathbf{R}^n$ , $z = o(|x|)$ , 使得

$$
f (x _ {0} + x + z) - f (x _ {0}) - J f (x _ {0}) x = 0.
$$

#### 第二组参考题

1. 试用压缩映射原理证明如下局部微分同胚定理: 设 U 是 $R^{n}$ 的开集, $f: U \rightarrow R^{n}$ 是 $C^{k}$ 映射, $x_{0} \in U$ , $\det J f(x_{0}) \neq 0$ . 则存在 $x_{0}$ 的邻域 $W \subset U$ 和 $f(x_{0})$ 的邻域 V, 使得 $f: W \rightarrow V$ 是 $C^{k}$ 微分同胚.

2. 设 $f: \mathbf{R}^n \to \mathbf{R}^n$ 是 $C^1$ 映射, 且存在 $\alpha > 0$ 使 $\forall x \in \mathbf{R}^n$ 有

$$
\boldsymbol {u} ^ {\mathrm{T}} \cdot J \boldsymbol {f} (\boldsymbol {x}) \cdot \boldsymbol {u} \geqslant \alpha | \boldsymbol {u} | ^ {2}, \forall \boldsymbol {u} \in \mathbf {R} ^ {n},
$$

其中 $u^{T}$ 表示 u 的转置. 证明:

$$
| f (x) - f (y) | \geqslant \alpha | x - y |, \forall x, y \in \mathbf {R} ^ {n},
$$

且 f 是 $R^{n}$ 上的微分同胚.

3. 用映射的语言叙述隐函数组存在定理, 将它化为逆映射存在定理或直接用压缩映射原理证明.

4. 20.2.4 小节的逆映射存在性证明是构造性的, 它给出了逆映射的迭代构造格式. 设 $y \in V$ , 取合适的初始点 $x_{0} \in U$ , 则

$$
\boldsymbol {x} _ {n} = \boldsymbol {x} _ {n - 1} + (\boldsymbol {f} ^ {\prime} (\boldsymbol {a})) ^ {- 1} (\boldsymbol {y} - \boldsymbol {f} (\boldsymbol {x} _ {n - 1}))
$$

就给出了迭代列 $\{\pmb{x}_n\}$ 的公式. 讨论映射

$$
\boldsymbol {T}: u = \frac {1}{2} (x ^ {2} - y ^ {2}), v = x y
$$

的逆映射. 设 $\boldsymbol{a} = (1, 1)^{\mathrm{T}}$ . 先求

$$
\boldsymbol {T} ^ {\prime} (\boldsymbol {a}) = \left. \left( \begin{array}{c c} \frac {\partial u}{\partial x} & \frac {\partial u}{\partial y} \\ \frac {\partial v}{\partial x} & \frac {\partial v}{\partial y} \end{array} \right) \right| _ {(x, y) = (1, 1)},
$$

再利用迭代公式

$$
\binom {x _ {n}} {y _ {n}} = \binom {x _ {n - 1}} {y _ {n - 1}} + (\boldsymbol {T} ^ {\prime} (\boldsymbol {a})) ^ {- 1} \left[ \binom {u} {v} - \binom {\frac {1}{2} (x _ {n - 1} ^ {2} - y _ {n - 1} ^ {2})} {x _ {n - 1} y _ {n - 1}} \right]
$$

在 a 的邻域内求 $T^{-1}$ 的二次迭代解 $(x_{2}, y_{2})^{\mathrm{T}}$ ，并用它与逆映射的一次微分近似

$$
\boldsymbol {T} ^ {- 1} \binom{u}{v} \approx \binom{1}{1} + \left( \begin{array}{c c} 1 & - 1 \\ 1 & 1 \end{array} \right) ^ {- 1} \binom{u}{v - 1}
$$

作比较.

5. 设 U 是 $R^{m}$ 的开集, $f: U \rightarrow R^{n}$ 是 $C^{k}$ 映射, 满足条件:

$$
\pmb {f} (\mathbf {0}) = \mathbf {0}, \quad J \pmb {f} (\mathbf {0}) \text {的秩为} m (m \leqslant n).
$$

证明：存在 $R^{n}$ 中含 0 的两个邻域 V 及 W, $C^{k}$ 微分同胚 h: $V \rightarrow W$ 使得 $h(0) = 0$ ，并且

$$
\boldsymbol {h} \circ \boldsymbol {f} (x _ {1}, x _ {2}, \dots , x _ {m}) = (x _ {1}, x _ {2}, \dots , x _ {m}, 0, 0, \dots , 0), \forall (x _ {1}, x _ {2}, \dots , x _ {m}) \in \boldsymbol {f} ^ {- 1} (V).
$$

6. 设 $U$ 是 $\mathbf{R}^m$ 的开集, $\pmb{f}: U \to \mathbf{R}^n$ 是 $C^k$ 映射, 满足条件:

$$
\pmb {f} (\mathbf {0}) = \mathbf {0}, \quad J \pmb {f} (\mathbf {0}) \text {的秩为} n (m \geqslant n).
$$

证明：存在 $\mathbf{R}^m$ 中含0的两个邻域 $V$ 及 $W, C^k$ 微分同胚 $\varphi: V \to W$ 使得 $\varphi(0) = 0$ ，并且

$$
\boldsymbol {f} \circ \varphi (x _ {1}, x _ {2}, \dots , x _ {m}) = (x _ {1}, x _ {2}, \dots , x _ {n}), \forall (x _ {1}, x _ {2}, \dots , x _ {m}) \in V.
$$

(以上两个命题称为秩定理, 如何对它们作一个简单的几何解释?)
