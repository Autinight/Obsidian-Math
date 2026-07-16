
# 第二十五章 曲面积分

曲面积分与曲线积分一样也有两类: 与曲面的方向无关的第一型曲面积分和与曲面的方向有关的第二型曲面积分. 本章在 §25.1 和 §25.2 两节中讨论 $\mathbf{R}^{3}$ 中的这两类曲面积分以及它们之间的关系, 所有的概念和结果都可以推广到 $\mathbf{R}^{n}$ ( $n > 3$ ) 的情况. 在 §25.3 中介绍 Gauss 公式 (第二型曲面积分与三重积分之间的关系), Stokes (斯托克斯) 公式 (第二型曲面积分与第二型曲线积分之间的关系), 以及在 $\mathbf{R}^{3}$ 中曲线积分与路径无关的条件. 在 §25.4 中介绍一些外微分的初步知识. 最后一节是习题课教案一例、学习要点和参考题.

## §25.1 第一型曲面积分

### 25.1.1 第一型曲面积分的定义和计算

在 22.5.1 小节中我们在假定曲面面积存在的情况下, 推导出了曲面面积的计算公式, 下面给出曲面面积的严格定义. 考虑一个以分段光滑的闭曲线 L 为边界的光滑曲面 S, 设这一曲面被一个分段光滑的曲线网分成许多部分 $S_{1}, S_{2}, \cdots, S_{m}$ , 并在每一部分 $S_{i}$ 内任取一点 $M_{i}$ , 把元素 $S_{i}$ 垂直地投影到曲面在点 $M_{i}$ 处的切平面上, 得到在切平面内的平面图形 $T_{i}$ , 其面积 $\Delta T_{i} (i = 1, 2, \cdots, m)$ 的和在各个元素 $S_{i}$ 的直径趋于零时的极限

$$
\lim _ {\lambda \rightarrow 0} \sum_ {i} \Delta T _ {i}
$$

称为曲面 S 的面积, 其中 $\lambda = \max_{1 \leqslant i \leqslant m} \{d(S_i)\}$ 为 $S_i (i = 1, 2, \cdots, m)$ 中的最大直径. 如果极限为有限数, 则称曲面 S 为可求面积的.

设 S 是 $R^{3}$ 中的可求面积的曲面, 函数 f 在 S 上有定义. 对于 S 的任一分割 $T: \{S_{1}, S_{2}, \cdots, S_{m}\}$ , 用 $\Delta S_{i}$ 表示 $S_{i}$ 的面积, 任取 $(\xi_{i}, \eta_{i}, \zeta_{i}) \in S_{i}$ , 如果当 $d(T) = \max_{1 \leqslant i \leqslant m} \{d(S_{i})\} \to 0$ 时, 和数

$$
\sum_ {i} f (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta S _ {i}
$$

收敛, 且极限不依赖于 $S$ 的具体分割与 $(\xi_i, \eta_i, \zeta_i) \in S_i$ 的具体选择, 则称函数 $f$ 在 $S$ 上的第一型曲面积分存在, 该极限值称为 $f(x, y, z)$ 在 $S$ 上的第一型曲面积分, 记为

$$
\iint_ {S} f (x, y, z) \mathrm{d} S = \lim _ {d (T) \rightarrow 0} \sum_ {i} f (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta S _ {i}.
$$

如果曲面 $S$ 的参数方程是

$$
x = x (u, v), \quad y = y (u, v), \quad z = z (u, v), \quad (u, v) \in D,
$$

$D$ 是 $uOv$ 平面上可求面积的区域, $x(u,v), y(u,v), z(u,v)$ 在 $D$ 上有连续偏导数, 则

$$
\mathrm{d} S = \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v,
$$

其中

$$
\begin{array}{l} {E = x _ {u} ^ {2} + y _ {u} ^ {2} + z _ {u} ^ {2},} \\ {F = x _ {u} x _ {v} + y _ {u} y _ {v} + z _ {u} z _ {v},} \\ {G = x _ {v} ^ {2} + y _ {v} ^ {2} + z _ {v} ^ {2},} \end{array}
$$

且

$$
\iint_ {S} f (x, y, z) \mathrm{d} S = \iint_ {D} f (x (u, v), y (u, v), z (u, v)) \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v.\tag{25.1}
$$

特别地，若曲面 $S$ 的方程为

$$
z = z (x, y), \quad (x, y) \in D,
$$

则

$$
\iint_ {S} f (x, y, z) \mathrm{d} S = \iint_ {D} f (x, y, z (x, y)) \sqrt {1 + z _ {x} ^ {2} + z _ {y} ^ {2}} \mathrm{d} x \mathrm{d} y.\tag{25.2}
$$

例题 25.1.1 设 S 为 $z = \sqrt{x^{2} + y^{2}}$ 被 $x^{2} + y^{2} = 2ax$ 割下的部分, 求

$$
I = \iint_ {S} \left(x ^ {2} y ^ {2} + y ^ {2} z ^ {2} + z ^ {2} x ^ {2}\right) \mathrm{d} S.
$$

解 1 见图 25.1, 在直角坐标系中计算

$$
\begin{array}{c} z _ {x} = \frac {x}{z}, \quad z _ {y} = \frac {y}{z}, \\ \sqrt {1 + z _ {x} ^ {2} + z _ {y} ^ {2}} = \sqrt {2}, \\ I = \iint_ {x ^ {2} + y ^ {2} \leqslant 2 a x} [ x ^ {2} y ^ {2} + (x ^ {2} + y ^ {2}) ^ {2} ] \sqrt {2} \mathrm{d} x \mathrm{d} y. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/b8ecb196e66b40e7abaaf6214fee035e37aecaf1ab523ad16f7aa363e9388df9.jpg)



图25.1


用极坐标变换求上述二重积分，则

$$
\begin{array}{r l} I & = \sqrt {2} \int_ {- \pi / 2} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {2 a \cos \theta} (r ^ {4} \cos^ {2} \theta \sin^ {2} \theta + r ^ {4}) r \mathrm{d} r \\ & = \sqrt {2} \int_ {- \pi / 2} ^ {\pi / 2} (\cos^ {2} \theta \sin^ {2} \theta + 1) \cdot \left(\frac {1}{6} r ^ {6} \Big | _ {0} ^ {2 a \cos \theta}\right) \mathrm{d} \theta \\ & = \frac {\sqrt {2}}{6} (2 a) ^ {6} \int_ {- \pi / 2} ^ {\pi / 2} \cos^ {6} \theta (\cos^ {2} \theta \sin^ {2} \theta + 1) \mathrm{d} \theta = \frac {2 9}{8} \sqrt {2} \pi a ^ {6}. \end{array}
$$

解2 用参数式计算. $z = \sqrt{x^2 + y^2}$ 在球坐标系中的方程为 $\varphi = \frac{\pi}{4}$ , 因此 $S$ 的参数方程为

$$
x = \frac {1}{\sqrt {2}} r \cos \theta , y = \frac {1}{\sqrt {2}} r \sin \theta , z = \frac {1}{\sqrt {2}} r, (r, \theta) \in D.
$$

又 $S$ 的边界线

$$
z = \sqrt {x ^ {2} + y ^ {2}}, \quad x ^ {2} + y ^ {2} = 2 a x
$$

的球坐标表示为

$$
\varphi = \frac {\pi}{4}, \quad r ^ {2} \sin^ {2} \varphi = 2 a r \sin \varphi \cos \theta .
$$

于是

$$
D = \left\{(r, \theta) \mid - \frac {\pi}{2} \leqslant \theta \leqslant \frac {\pi}{2}, 0 \leqslant r \leqslant 2 \sqrt {2} a \cos \theta \right\}.
$$

计算得

$$
E = \frac {r ^ {2}}{2}, F = 0, G = 1,
$$

最后得到

$$
\begin{array}{l} I = \int_ {- \pi / 2} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {2 \sqrt {2} a \cos \theta} \left(\frac {1}{4} r ^ {4} \cos^ {2} \theta \sin^ {2} \theta + \frac {1}{4} r ^ {4}\right) \frac {r}{\sqrt {2}} \mathrm{d} r \\ = \frac {2 9}{8} \sqrt {2} \pi a ^ {6}. \end{array}
$$

### 25.1.2 第一型曲面积分的应用

1. 求曲面的面积. 在 (25.2) 与 (25.1) 中令 $f \equiv 1$ , 则曲面 $S$ 的面积为

$$
\iint_ {S} \mathrm{d} S = \iint_ {D _ {x y}} \sqrt {1 + z _ {x} ^ {2} + z _ {y} ^ {2}} \mathrm{d} x \mathrm{d} y = \iint_ {D _ {u v}} \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v.
$$

2. 求曲面的质量. 设曲面 S 的面密度为 $\rho(x,y,z)$ ，则它的质量

$$
\begin{array}{l} m = \iint_ {S} \rho (x, y, z) \mathrm{d} S \\ = \iint_ {D} \rho (x (u, v), y (u, v), z (u, v)) \sqrt {E G - F ^ {2}} \mathrm{d} u \mathrm{d} v. \end{array}
$$

3. 求曲面的质心坐标. 曲面 S 的质心坐标 $(x_{0}, y_{0}, z_{0})$ 由下面的公式确定:

$$
x _ {0} = \frac {1}{m} \iint_ {S} x \rho (x, y, z) \mathrm{d} S,
$$

$$
y _ {0} = \frac {1}{m} \iint_ {S} y \rho (x, y, z) \mathrm{d} S,
$$

$$
z _ {0} = \frac {1}{m} \iint_ {S} z \rho (x, y, z) \mathrm{d} S.
$$

例题 25.1.2 求上半球面 $z = \sqrt{a^{2} - x^{2} - y^{2}}$ 被 $x^{2} + y^{2} = ax$ 截取部分的面积与质心坐标, 其中 a > 0.

解 见图 22.11, 这就是 Viviani 体的上表面. 由于

故所求面积

$$
\begin{array}{r l} z _ {x} & = \frac {- x}{\sqrt {a ^ {2} - x ^ {2} - y ^ {2}}}, z _ {y} = \frac {- y}{\sqrt {a ^ {2} - x ^ {2} - y ^ {2}}}, \\ S & = \iint_ {x ^ {2} + y ^ {2} \leqslant a x} \frac {a}{\sqrt {a ^ {2} - x ^ {2} - y ^ {2}}} \mathrm{d} x \mathrm{d} y \\ & = \int_ {- \pi / 2} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {a \cos \theta} \frac {a r}{\sqrt {a ^ {2} - r ^ {2}}} \mathrm{d} r \\ & = (\pi - 2) a ^ {2}. \end{array}
$$

下面求质心坐标, 由对称性知 $y_{0}=0$ , 且

$$
\begin{aligned} x_{0} & = \frac{1}{(\pi - 2)a^{2}}\iint \limits_{S}x\mathrm{d}S\\ & = \frac{2}{(\pi - 2)a^{2}}\iint \limits_{\substack{x^{2} + y^{2}\leqslant ax\\ y\geqslant 0}}\frac{ax}{\sqrt{a^{2} - x^{2} - y^{2}}}\mathrm{d}x\mathrm{d}y\\ & = \frac{2}{(\pi - 2)a}\int_{0}^{\pi /2}\cos \theta \mathrm{d}\theta \int_{0}^{a\cos \theta}\frac{r}{\sqrt{a^{2} - r^{2}}} r\mathrm{d}r\quad (r = a\cos t)\\ & = \frac{2}{(\pi - 2)a}\int_{0}^{\pi /2}\cos \theta \mathrm{d}\theta \int_{\pi /2}^{\theta}\frac{a^{2}\cos^{2}t}{a\sin t} (-a\sin t)\mathrm{d}t\\ & = \frac{a}{\pi - 2}\int_{0}^{\pi /2}\cos \theta \left(\frac{\pi}{2} -\theta -\sin \theta \cos \theta\right)\mathrm{d}\theta \\ & = \frac{2a}{3(\pi - 2)};\\ z_{0} & = \frac{1}{(\pi - 2)a^{2}}\iint \limits_{S}z\mathrm{d}S\\ & = \frac{1}{(\pi - 2)a^{2}}\iint \limits_{x^{2} + y^{2}\leqslant ax}\frac{a}{\sqrt{a^{2} - x^{2} - y^{2}}}\sqrt{a^{2} - x^{2} - y^{2}}\mathrm{d}x\mathrm{d}y\\ & = \frac{\pi a}{4(\pi - 2)}. \end{aligned}
$$

### 25.1.3 练习题

1. 求 $\iint_{S} z^{2} \mathrm{~d} S$ , 其中

(1) S 为 $z^{2}=x^{2}+y^{2}$ 在 $x^{2}+y^{2}+z^{2}=R^{2}$ 内的上半部分 ( $z\geqslant0$ );

(2) $S$ 为 $x = r\sin \alpha \cos \theta, y = r\sin \alpha \sin \theta, z = r\cos \alpha, 0 \leqslant r \leqslant a, 0 \leqslant \theta \leqslant 2\pi.$ 

2. 求 $\iint_{S}(x+y+z)\mathrm{d}S$ ，其中 S 为上半单位球面 $x^{2}+y^{2}+z^{2}=1(z\geqslant0)$ .

3. 求 $\iint_{S}(x+y+z)^{2}\mathrm{d}S$ ，其中 S 为单位球面 $x^{2}+y^{2}+z^{2}=1$ .

4. 求 $\iint_{S}(x^{4}-y^{4}+y^{2}z^{2}-z^{2}x^{2}+1)\mathrm{d}S,$ 其中 S 是锥面 $z^{2}=x^{2}+y^{2}$ 被柱面 $x^{2}+y^{2}=2x$ 割下的部分.

5. 求 $\iint_{S}|xyz|$ dS，其中

(1) S 为 $|x| + |y| + |z| = 1;$ 

(2) $S$ 是抛物面 $z = x^{2} + y^{2}$ 被 $z = 1$ 割下的部分.

6. 求 $\iint_{S} (x^{2} + y^{2} + z^{2}) \, \mathrm{d}S$ , $S$ 为 $|x| + |y| + |z| = a$ .

7. 求 $F(t) = \iint_{x^2 + y^2 + z^2 = t^2} f(x, y, z) \, \mathrm{d}S$ , 其中

$$
f (x, y, z) = \left\{ \begin{array}{l l} x ^ {2} + y ^ {2}, & \text {当} z \geqslant \sqrt {x ^ {2} + y ^ {2}}, \\ 0, & \text {当} z <   \sqrt {x ^ {2} + y ^ {2}}. \end{array} \right.
$$

8. 求 $F(x,y,z,t)=\iint_{S}f(\xi,\eta,\zeta)\mathrm{d}S$ ，其中 S 为 $(x-\xi)^{2}+(y-\eta)^{2}+(z-\zeta)^{2}=t^{2}$ ， $t>0,(x,y,z)$ 为满足 $\sqrt{x^{2}+y^{2}+z^{2}}>a>0$ 的定点，

$$
f (\xi , \eta , \zeta) = {\left\{ \begin{array}{l l} {1,} & {{\text {当}} \xi^ {2} + \eta^ {2} + \zeta^ {2} <   a ^ {2},} \\ {0,} & {{\text {当}} \xi^ {2} + \eta^ {2} + \zeta^ {2} \geqslant a ^ {2}.} \end{array} \right.}
$$

9. 求 $\iint_{S} \frac{\mathrm{d} S}{(1 + x + y)^2}$ , 其中 $S$ 为立体 $x + y + z \leqslant 1, x \geqslant 0, y \geqslant 0, z \geqslant 0$ 的表面.

10. 求 $\iint_{S}\frac{|x|}{z}dS$ ，其中 S 是柱面 $x^{2}+y^{2}=2ay$ 被锥面 $z=\sqrt{x^{2}+y^{2}}$ 和平面 z=2a 所截下的部分.

11. 求 $\iint_{S} (x^{2} + y^{2}) \, \mathrm{d}S$ , $S$ 是锥面 $z = \sqrt{x^{2} + y^{2}}$ 被 $z = 1$ 割下的部分.

## §25.2 第二型曲面积分

### 25.2.1 第二型曲面积分的定义和计算

设 S 是逐片光滑的定向曲面, P, Q, R 是在曲面 S 上有定义的函数. 在曲面 S 所指定的一侧作分割 T, 它把曲面 S 分为 n 个小曲面 $S_{1}, S_{2}, \cdots, S_{n}$ , 分割 T 的细度 $\|T\|=\max_{1\leqslant i\leqslant n}\{S_{i}$ 的直径}, 以 $\Delta S_{i}^{(1)},\Delta S_{i}^{(2)},\Delta S_{i}^{(3)}$ 分别表示 $S_{i}$ 在 yOz, zOx, xOy 三个坐标平面上的投影区域的面积. 它们的符号由 $S_{i}$ 的方向来确定, 当 $S_{i}$ 的法线正向与 z 轴正向成锐角时, $S_{i}$ 在 xOy 平面的投影区域的面积 $\Delta S_{i}^{(3)}$ 为正, 反之面积为负. $\Delta S_{i}^{(1)}$ 与 $\Delta S_{i}^{(2)}$ 的符号可类似地定义. 在每个 $S_{i}$ 上任取一点 $(\xi_{i},\eta_{i},\zeta_{i})$ , 若

$$
\begin{array}{l}\lim _ {\| T \| \rightarrow 0} \sum_ {i = 1} ^ {n} P (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta S _ {i} ^ {(1)} + \lim _ {\| T \| \rightarrow 0} \sum_ {i = 1} ^ {n} Q (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta S _ {i} ^ {(2)}\\+ \lim _ {\| T \| \rightarrow 0} \sum_ {i = 1} ^ {n} R (\xi_ {i}, \eta_ {i}, \zeta_ {i}) \Delta S _ {i} ^ {(3)}\end{array}
$$

存在, 且与曲面 S 的分割 T 以及 $(\xi_{i}, \eta_{i}, \zeta_{i})$ 在 $S_{i}$ 上的取法无关, 则称此极限为函数 P, Q, R 在曲面 S 上所指定的一侧上的第二型曲面积分, 记为

$$
\iint_ {S} P (x, y, z) \mathrm{d} y \mathrm{d} z + Q (x, y, z) \mathrm{d} z \mathrm{d} x + R (x, y, z) \mathrm{d} x \mathrm{d} y.
$$

设 $R(x,y,z)$ 是定义在光滑曲面

$$
S: z = z (x, y), \quad (x, y) \in D _ {x y}
$$

上的连续函数，以 $S$ 的上侧为正侧，则有

$$
\iint_ {S} R (x, y, z) \mathrm{d} x \mathrm{d} y = \pm \iint_ {D _ {x y}} R (x, y, z (x, y)) \mathrm{d} x \mathrm{d} y.
$$

如果在正侧积分, 积分号前取正号; 如果在负侧积分, 积分号前取负号.

类似地，当 $P(x,y,z)$ 在光滑曲面

$$
S: x = x (y, z), \quad (y, z) \in D _ {y z}
$$

上连续时，有

$$
\iint_ {S} P (x, y, z) \mathrm{d} y \mathrm{d} z = \pm \iint_ {D _ {y z}} P (x (y, z), y, z) \mathrm{d} y \mathrm{d} z,
$$

这里 S 是以 S 的法线方向与 x 轴的正向成锐角的那一侧为正侧.

当 $Q(x,y,z)$ 在光滑曲面

$$
S: y = y (z, x), \quad (z, x) \in D _ {z x}
$$

上连续时，有

$$
\iint_ {S} Q (x, y, z) \mathrm{d} z \mathrm{d} x = \pm \iint_ {D _ {z x}} Q (x, y (z, x), z) \mathrm{d} z \mathrm{d} x,
$$

这里 S 是以 S 的法线方向与 y 轴的正向成锐角的那一侧为正侧.

如果光滑曲面 S 由参数方程给出:

$$
S: x = x (u, v), \quad y = y (u, v), \quad z = z (u, v), \quad (u, v) \in D,
$$

且行列式

$$
A = \frac {\partial (y , z)}{\partial (u , v)}, B = \frac {\partial (z , x)}{\partial (u , v)}, C = \frac {\partial (x , y)}{\partial (u , v)}
$$

不同时为0，则

$$
\iint_ {S} P \mathrm{d} y \mathrm{d} z + Q \mathrm{d} z \mathrm{d} x + R \mathrm{d} x \mathrm{d} y = \pm \iint_ {D} (P A + Q B + R C) \mathrm{d} u \mathrm{d} v,\tag{25.3}
$$

其中积分号前正负号的选取法则如下：若向量 $(A,B,C)$ 与曲面S上预先选定的侧的法向量方向所成角不大于直角，则取“+”号，否则取“-”号.

例题 25.2.1 设 $\Sigma$ 为上半单位球面 $z = \sqrt{1 - (x^{2} + y^{2})}$ ，取内侧，求

$$
I = \iint_ {\Sigma} \mathrm{d} y \mathrm{d} z + \mathrm{d} z \mathrm{d} x + \mathrm{d} x \mathrm{d} y.
$$

解 1 用直角坐标系计算

$$
I = \iint_ {\Sigma} \mathrm{d} y \mathrm{d} z + \iint_ {\Sigma} \mathrm{d} z \mathrm{d} x + \iint_ {\Sigma} \mathrm{d} x \mathrm{d} y = I _ {1} + I _ {2} + I _ {3}.
$$

计算 $I_{1}:\Sigma = \Sigma_{1} + \Sigma_{2}$ ，其中

$\Sigma_{1}:x=\sqrt{1-y^{2}-z^{2}},\quad(y,z)\in D_{yz}=\{y^{2}+z^{2}\leqslant1,z\geqslant0\}$ ，取后侧，

$\Sigma_{2}:x = -\sqrt{1 - y^{2} - z^{2}},(y,z)\in D_{yz}$ ，取前侧，

则

$$
I _ {1} = \iint_ {\Sigma_ {1}} \mathrm{d} y \mathrm{d} z + \iint_ {\Sigma_ {2}} \mathrm{d} y \mathrm{d} z = - \iint_ {D _ {y z}} \mathrm{d} y \mathrm{d} z + \iint_ {D _ {y z}} \mathrm{d} y \mathrm{d} z = 0.
$$

同理有

$$
I _ {2} = 0, I _ {3} = - \iint_ {D _ {x y}} \mathrm{d} x \mathrm{d} y = - \pi .
$$

最后得到

$$
I = - \pi .
$$

解2 用参数方程

$$
\begin{array}{c} {{\Sigma : x = \sin \varphi \cos \theta , y = \sin \varphi \sin \theta , z = \cos \varphi ,}} \\ {{0 \leqslant \varphi \leqslant \frac {\pi}{2}, 0 \leqslant \theta \leqslant 2 \pi ,}} \end{array}
$$

计算行列式

$$
A = \frac {\partial (y , z)}{\partial (\varphi , \theta)} = \sin^ {2} \varphi \cos \theta , B = \frac {\partial (z , x)}{\partial (\varphi , \theta)} = \sin^ {2} \varphi \sin \theta ,
$$

$$
C = \frac {\partial (x , y)}{\partial (\varphi , \theta)} = \sin \varphi \cos \varphi .
$$

因为 $(A, B, C)$ 的方向与上半球面 $S$ 内侧的法线方向相反, 故积分号前取“-”号, 得到

$$
\begin{array}{r l} I & = - \iint_ {D} (\sin^ {2} \varphi \cos \theta + \sin^ {2} \varphi \sin \theta + \sin \varphi \cos \varphi) \mathrm{d} \varphi \mathrm{d} \theta \\ & = - \int_ {0} ^ {\pi / 2} \mathrm{d} \varphi \int_ {0} ^ {2 \pi} [ \sin^ {2} \varphi (\cos \theta + \sin \theta) + \sin \varphi \cos \varphi ] \mathrm{d} \theta \\ & = - 2 \pi \int_ {0} ^ {\pi / 2} \sin \varphi \cos \varphi \mathrm{d} \varphi = - \pi . \end{array}
$$

例题25.2.2 求

$$
I = \iint_ {\Sigma} (z + x) \mathrm{d} y \mathrm{d} z + (x + y) \mathrm{d} z \mathrm{d} x + (y + z) \mathrm{d} x \mathrm{d} y,
$$

其中 $\Sigma$ 是由 $x^{2}+y^{2}=1, z=1$ 及三个坐标平面围成的立体在第一卦限的部分的表面，取外侧.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/8032555c34f09dafda31eef3d785e5022560fb1fc66d2fa00f2fa015a4119450.jpg)



图25.2


解 见图 25.2, 因为 $\Sigma$ 分块较多 (需分 5 块), 不便于用参数式, 故应在直角坐标系中计算. 记 $\Sigma = \Sigma_{1} + \Sigma_{2} + \Sigma_{3} + \Sigma_{4} + \Sigma_{5}$ , 其中 $\Sigma_{1}$ 为圆柱面, $\Sigma_{2}$ 为下底面, $\Sigma_{3}$ 为上底面, $\Sigma_{4}$ 为左侧面 y = 0, $\Sigma_{5}$ 为右侧面 x = 0, 则有

$$
I = \iint_ {\Sigma} (z + x) \mathrm{d} y \mathrm{d} z + \iint_ {\Sigma} (x + y) \mathrm{d} z \mathrm{d} x + \iint_ {\Sigma} (y + z) \mathrm{d} x \mathrm{d} y = I _ {1} + I _ {2} + I _ {3}.
$$

计算 $I_{1}$ ，有

$$
I _ {1} = \sum_ {i = 1} ^ {5} \iint_ {\Sigma_ {i}} (x + z) \mathrm{d} y \mathrm{d} z.
$$

因为 $\Sigma_{2}, \Sigma_{3}, \Sigma_{4}$ 在 yOz 平面上的投影面积为零, 于是

$$
\iint_ {\Sigma_ {i}} (x + z) \mathrm{d} y \mathrm{d} z = 0, \quad i = 2, 3, 4,
$$

而

$\Sigma_{1}: x=\sqrt{1-y^{2}}, (y,z)\in D_{yz}=\{0\leqslant y\leqslant1,0\leqslant z\leqslant1\}$ ，取前侧，

$\Sigma_{5}: x=0, (y,z) \in D_{yz}$ ，取后侧.

于是

$$
\begin{array}{r l} I _ {1} & = \iint_ {\Sigma_ {1}} (x + z) \mathrm{d} y \mathrm{d} z + \iint_ {\Sigma_ {5}} (x + z) \mathrm{d} y \mathrm{d} z \\ & = \iint_ {D _ {y z}} (\sqrt {1 - y ^ {2}} + z) \mathrm{d} y \mathrm{d} z - \iint_ {D _ {y z}} z \mathrm{d} y \mathrm{d} z \\ & = \int_ {0} ^ {1} \int_ {0} ^ {1} \sqrt {1 - y ^ {2}} \mathrm{d} y \mathrm{d} z = \frac {\pi}{4}. \end{array}
$$

用类似的方法可求出 $I_{2}=\frac{\pi}{4}$ .

然后求

$$
I _ {3} = \sum_ {i = 1} ^ {5} \iint_ {\Sigma_ {i}} (y + z) \mathrm{d} x \mathrm{d} y.
$$

显然有

$$
\iint_ {\Sigma_ {i}} (y + z) \mathrm{d} x \mathrm{d} y = 0, i = 1, 4, 5,
$$

而

$\Sigma_{2}: z=0, (x,y) \in D_{xy} = \{x^{2} + y^{2} \leqslant 1, x \geqslant 0, y \geqslant 0\}$ ，取下侧，

$\Sigma_{3}: z=1, (x,y) \in D_{xy},$ 取上侧，

于是

$$
\begin{array}{r l} I _ {3} & = \iint_ {\Sigma_ {2}} (y + z) \mathrm{d} x \mathrm{d} y + \iint_ {\Sigma_ {3}} (y + z) \mathrm{d} x \mathrm{d} y \\ & = - \iint_ {D _ {x y}} y \mathrm{d} x \mathrm{d} y + \iint_ {D _ {x y}} (1 + y) \mathrm{d} x \mathrm{d} y \\ & = \iint_ {D _ {x y}} \mathrm{d} x \mathrm{d} y = \frac {\pi}{4}. \end{array}
$$

最后得到

$$
I = I _ {1} + I _ {2} + I _ {3} = \frac {3}{4} \pi .
$$

注 我们已经知道, 利用第二型曲线积分可以计算平面图形的面积. 类似地, 利用第二型曲面积分也可以计算空间立体的体积 (见表达式 (25.7)—(25.11)).

### 25.2.2 两类曲面积分之间的关系

设 S 是可定向曲面, n 是 S 上选定的某一侧的法向量, 则

$$
\begin{array}{l} \iint_ {S} P \mathrm{d} y \mathrm{d} z + Q \mathrm{d} z \mathrm{d} x + R \mathrm{d} x \mathrm{d} y \\ = \iint_ {S} [ P \cos (\boldsymbol {n}, x) + Q \cos (\boldsymbol {n}, y) + R \cos (\boldsymbol {n}, z) ] \mathrm{d} S. \end{array}\tag{25.4}
$$

上述关系式的用处之一是可简化曲面积分的计算, 当某一类曲面积分的计算比较复杂时, 可利用公式 (25.4) 转化为另一类曲面积分进行计算.

例题25.2.3 求

$$
I = \iint_ {\Sigma} x y z (y ^ {2} z ^ {2} + z ^ {2} x ^ {2} + x ^ {2} y ^ {2}) \mathrm{d} S,
$$

其中 $\Sigma$ 为第一卦限中的球面 $x^{2} + y^{2} + z^{2} = a^{2} (x \geqslant 0, y \geqslant 0, z \geqslant 0)$ .

解 见图 25.3, 不论用参数式或直角坐标式, 直接计算均相当复杂, 取 $\Sigma$ 的上侧, 则 $(x, y, z)$ 处的单位外法向量为 $\left(\frac{x}{a}, \frac{y}{a}, \frac{z}{a}\right)$ , 利用公式 (25.4),

$$
\begin{array}{r l} I & = a \iint_ {\Sigma} \left(y ^ {3} z ^ {3} \frac {x}{a} + z ^ {3} x ^ {3} \frac {y}{a} + x ^ {3} y ^ {3} \frac {z}{a}\right) \mathrm{d} S \\ & = a \iint_ {\Sigma} y ^ {3} z ^ {3} \mathrm{d} y \mathrm{d} z + z ^ {3} x ^ {3} \mathrm{d} z \mathrm{d} x + x ^ {3} y ^ {3} \mathrm{d} x \mathrm{d} y \\ & = 3 a \iint_ {\Sigma} x ^ {3} y ^ {3} \mathrm{d} x \mathrm{d} y = 3 a \iint_ {D _ {x y}} x ^ {3} y ^ {3} \mathrm{d} x \mathrm{d} y, \end{array}
$$

其中 $D_{xy} = \{x^2 +y^2\leqslant a^2,x\geqslant 0,y\geqslant 0\}$ ，作极坐标变换得

$$
\begin{array}{r l} I & = 3 a \int_ {0} ^ {\pi / 2} \mathrm{d} \theta \int_ {0} ^ {a} r ^ {7} \sin^ {3} \theta \cos^ {3} \theta \mathrm{d} r \\ & = \frac {3}{6 4} a ^ {9} \int_ {0} ^ {\pi / 2} \sin^ {3} 2 \theta \mathrm{d} \theta = \frac {1}{3 2} a ^ {9}. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/75c0c98db16e1cfaa43f72b2b6522cb5ecd687b50f923b2e87db3f5f81effd90.jpg)



图25.3


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/bfeb31eb554444b14cc573866a791424b6da9b9d4cd547f15354325fb7e779aa.jpg)



图25.4


例题25.2.4求

$$
I = \iint_ {\Sigma} (y - z) \mathrm{d} y \mathrm{d} z + (z - x) \mathrm{d} z \mathrm{d} x + (x - y) \mathrm{d} x \mathrm{d} y,
$$

其中 $\Sigma$ 是球面 $x^{2} + y^{2} + z^{2} = 2Rx$ 被柱面 $x^{2} + y^{2} = 2rx (0 < r < R)$ 截下的位于 $z \geqslant 0$ 的部分, 取外侧.

解 见图 25.4, 改写球面方程为 $(x - R)^{2} + y^{2} + z^{2} = R^{2}$ , 其外侧的法向量

$$
\boldsymbol {n} = \left(\frac {x - R}{R}, \frac {y}{R}, \frac {z}{R}\right).
$$

由公式(25.4)，有

$$
\begin{array}{r l} I & = \iint_ {\Sigma} (y - z, z - x, x - y) \cdot \boldsymbol {n} \mathrm{d} S \\ & = \frac {1}{R} \iint_ {\Sigma} [ (y - z) (x - R) + (z - x) y + (x - y) z ] \mathrm{d} S \\ & = \iint_ {\Sigma} (z - y) \mathrm{d} S. \end{array}
$$

由于 $\Sigma$ 关于 xOz 平面对称, 而函数 y 是奇函数, 于是

$$
\begin{array}{l} I = \iint_ {\Sigma} z \mathrm{d} S = \iint_ {x ^ {2} + y ^ {2} \leqslant 2 r x} \sqrt {2 R x - x ^ {2} - y ^ {2}} \frac {R}{\sqrt {2 R x - x ^ {2} - y ^ {2}}} \mathrm{d} x \mathrm{d} y \\ = R \cdot \pi r ^ {2} = \pi R r ^ {2}. \end{array}
$$

### 25.2.3 练习题

1. 设曲面 $\Sigma$ 的方程为 $z = z(x, y), (x, y) \in D$ , 且 $z(x, y)$ 在 $\overline{D}$ 中连续可微, 证明:

$$
\begin{array}{l} \iint_ {\Sigma} P (x, y, z) \mathrm{d} y \mathrm{d} z + Q (x, y, z) \mathrm{d} z \mathrm{d} x + R (x, y, z) \mathrm{d} x \mathrm{d} y \\ = \pm \iint_ {D} (- P z _ {x} - Q z _ {y} + R) \Big | _ {z = z (x, y)} \mathrm{d} x \mathrm{d} y. \end{array}
$$

当 $\Sigma$ 取上侧时符号取 “+”，当 $\Sigma$ 取下侧时符号取 “-”.

2. 若 $\Sigma$ 分块光滑, 且关于 $xOy$ 平面对称, $f(x,y,z)$ 在 $\overline{\Sigma}$ 上连续, 且满足 $f(x,y,z) = -f(x,y,-z)$ , 问: $\iint_{\Sigma} f(x,y,z) \mathrm{d}S = 2 \iint_{\Sigma_1} f(x,y,z) \mathrm{d}S$ 还是等于 0? (其中 $\Sigma_1$ 是 $\Sigma$ 在 $xOy$ 平面以上的部分.)

3. 若 $\Sigma$ 分块光滑, 且关于 $xOy$ 平面对称, $R(x,y,z)$ 在 $\overline{\Sigma}$ 上连续, 满足 $R(x,y,z) = -R(x,y,-z)$ , 问: $\iint_{\Sigma} R(x,y,z) \mathrm{d}x \mathrm{d}y = 2 \iint_{\Sigma_1} R(x,y,z) \mathrm{d}x \mathrm{d}y$ 还是等于 0? (其中 $\Sigma_1$ 是 $\Sigma$ 在 $xOy$ 平面以上的部分, 取侧与 $\Sigma$ 取侧相一致.)

4. 设 $\Sigma$ 是平面 $\Pi$ 内的一个有界区域, 其面积为 $S$ , $\Pi$ 取上侧的法向量为 $\pmb{n}$ , 且 $\cos (\pmb{n}, z) = \mu$ . 证明: $\Sigma$ 在 $xOy$ 平面上的投影的面积为 $\mu S$ , 并利用这个结果重新计算例题21.4.2.

5. 求 $I_{1} = \iint_{\Sigma} z \, \mathrm{d}x \, \mathrm{d}y, I_{2} = \iint_{\Sigma} z^{2} \, \mathrm{d}x \, \mathrm{d}y, \Sigma$ 是球面 $x^{2} + y^{2} + z^{2} = a^{2}$ , 取外侧.

6. 计算 $\iint_{S} xz \, \mathrm{d}y \, \mathrm{d}z + yx \, \mathrm{d}z \, \mathrm{d}x + yz \, \mathrm{d}x \, \mathrm{d}y$ , $S$ 是圆柱面 $x^{2} + y^{2} = 1$ 在 $-1 \leqslant z \leqslant 1$ 及 $x \geqslant 0$ 的部分, 取前侧.

7. 求 $\iint_{S} x(z^{2}-y^{2}) \, \mathrm{d}y \, \mathrm{d}z + y(x^{2}-z^{2}) \, \mathrm{d}z \, \mathrm{d}x + z(y^{2}-x^{2}) \, \mathrm{d}x \, \mathrm{d}y$ ，其中 S 是 $y^{2} + z^{2} = 1$ 被 x = 0, x = 1, $z + y = 0$ , z - y = 0 截取的上方部分，取外侧.

## §25.3 Gauss 公式与 Stokes 公式

### 25.3.1 Gauss公式

Gauss 公式是将 $R^{3}$ 中某区域上的三重积分与这一区域的边界上特定的曲面积分建立联系的一个重要公式.

设 D 是 $R^{3}$ 内的一个有界区域, 其边界 $\partial D$ 由光滑曲面或逐片光滑曲面组成, 方向是外侧 (相对于区域 D 而言). 又设函数 P, Q, R 都在 D 上有关于 x, y, z 的连续偏导数, 则成立下列 Gauss 公式:

$$
\iiint_ {D} \left(\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y} + \frac {\partial R}{\partial z}\right) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \iint_ {\partial D} P \mathrm{d} y \mathrm{d} z + Q \mathrm{d} z \mathrm{d} x + R \mathrm{d} x \mathrm{d} y.\tag{25.5}
$$

利用两类曲面积分之间的关系, Gauss 公式也可以写成

$$
\begin{array}{l} \iiint_ {D} \left(\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y} + \frac {\partial R}{\partial z}\right) \mathrm{d} x \mathrm{d} y \mathrm{d} z \\ = \oint_ {\partial D} \left(P \cos (\boldsymbol {n}, x) + Q \cos (\boldsymbol {n}, y) + R \cos (\boldsymbol {n}, z)\right) \mathrm{d} S, \end{array}\tag{25.6}
$$

其中 n 为曲面 $\partial D$ 上的外法向量.

可以看出, Green 公式 (24.9) 与 Gauss 公式 (25.6) 的表达形式是类似的, 仅仅是空间的维数不同而已.

与 Green 公式相仿, Gauss 公式 (25.5) 与 (25.6) 为我们提供了一种新的计算曲面积分的方法.

例题25.3.1求

$$
I = \iint_ {\Sigma} 4 x z \mathrm{d} y \mathrm{d} z - 2 y z \mathrm{d} z \mathrm{d} x + (1 - z ^ {2}) \mathrm{d} x \mathrm{d} y,
$$

其中 $\Sigma$ 是曲线 $z = e^{y} (0 \leqslant y \leqslant a)$ 绕 z 轴旋转生成的旋转面, 取下侧.

解 $\Sigma$ 的方程为

$$
z = \mathrm{e} ^ {\sqrt {x ^ {2} + y ^ {2}}} (x ^ {2} + y ^ {2} \leqslant a ^ {2}).
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/8a8037f21b3cce3059489a69e5123c6fc96a0a9553b2c9ab7223a48274bfd8aa.jpg)



图25.5


直接计算比较复杂. 考虑用 Gauss 公式. 由于 $\Sigma$ 不闭, 需要添加辅助面

$\Sigma_{1}:z=\mathrm{e}^{a}(x^{2}+y^{2}\leqslant a^{2})$ ，取上侧.

见图25.5, 设 $\Sigma$ 与 $\Sigma_{1}$ 围成的区域为 $D$ . 令

$$
P = 4 x z, Q = - 2 y z, R = 1 - z ^ {2},
$$

则

$$
\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y} + \frac {\partial R}{\partial z} = 0.
$$

由公式(25.5)，得

$$
\begin{array}{l} I = \left(\iint_ {\Sigma} + \iint_ {\Sigma_ {1}} - \iint_ {\Sigma_ {1}}\right) (1 - z ^ {2}) \mathrm{d} x \mathrm{d} y = - \iint_ {\Sigma_ {1}} (1 - z ^ {2}) \mathrm{d} x \mathrm{d} y \\ = (\mathrm{e} ^ {2 a} - 1) \iint_ {x ^ {2} + y ^ {2} \leqslant a ^ {2}} \mathrm{d} x \mathrm{d} y = (\mathrm{e} ^ {2 a} - 1) \pi a ^ {2}. \end{array}
$$

例题25.3.2 计算曲面积分

$$
I = \iint_ {S} \frac {x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y}{(a x ^ {2} + b y ^ {2} + c z ^ {2}) ^ {3 / 2}},
$$

其中 S 是球面 $x^{2} + y^{2} + z^{2} = 1$ ，取外侧 $(a > 0, b > 0, c > 0)$ .

解1 记 $P(x,y,z) = \frac{x}{(ax^2 + by^2 + cz^2)^{3 / 2}}, Q(x,y,z) = \frac{y}{(ax^2 + by^2 + cz^2)^{3 / 2}},$ $R(x,y,z) = \frac{z}{(ax^2 + by^2 + cz^2)^{3 / 2}}$ ，则在不包含原点的任何区域上

$$
\frac {\partial P}{\partial x} + \frac {\partial Q}{\partial y} + \frac {\partial R}{\partial z} = 0.
$$

为了利用 Gauss 公式, 对充分小的 $\varepsilon > 0$ , 作闭曲面

$$
S _ {\varepsilon} = \left\{a x ^ {2} + b y ^ {2} + c z ^ {2} = \varepsilon^ {2} \right\},
$$

取外侧. 由 Gauss 公式

$$
I = \iint_ {S _ {\varepsilon}} \frac {x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y}{(a x ^ {2} + b y ^ {2} + c z ^ {2}) ^ {3 / 2}} = \frac {1}{\varepsilon^ {3}} \iint_ {S _ {\varepsilon}} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y.
$$

上述积分在 $S_{\varepsilon}$ 的外侧. 再一次用Gauss公式, 则

$$
I = \frac {3}{\varepsilon^ {3}} \iiint_ {a x ^ {2} + b y ^ {2} + c z ^ {2} \leqslant \varepsilon^ {2}} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \frac {3}{\varepsilon^ {3}} \cdot \frac {4 \pi}{3} \cdot \frac {\varepsilon^ {3}}{\sqrt {a b c}} = \frac {4 \pi}{\sqrt {a b c}}.
$$

解 2 (不用 Gauss 公式而直接计算) 利用单位球面的参数方程

$$
\begin{array}{c} {x = \sin \varphi \cos \theta , y = \sin \varphi \sin \theta , z = \cos \varphi ,} \\ {0 \leqslant \varphi \leqslant \pi , 0 \leqslant \theta \leqslant 2 \pi ,} \end{array}
$$

计算得到

$$
\begin{array}{l} {A = \frac {\partial (y , z)}{\partial (\varphi , \theta)} = \sin^ {2} \varphi \cos \theta , B = \frac {\partial (z , x)}{\partial (\varphi , \theta)} = \sin^ {2} \varphi \sin \theta ,} \\ {C = \frac {\partial (x , y)}{\partial (\varphi , \theta)} = \sin \varphi \cos \varphi .} \end{array}
$$

容易看出， $(A,B,C)$ 的方向与单位球面外侧法线方向相同，故积分号前取“+”号，由(25.3)得

$$
I = 8 \int_ {0} ^ {\pi / 2} \int_ {0} ^ {\pi / 2} \frac {\sin \varphi \mathrm{d} \varphi \mathrm{d} \theta}{(a \sin^ {2} \varphi \cos^ {2} \theta + b \sin^ {2} \varphi \sin^ {2} \theta + c \cos^ {2} \varphi) ^ {3 / 2}}.
$$

先计算对 $\varphi$ 的积分, 我们令 $\cos \varphi = t$ , 则

$$
\begin{array}{l} \int_ {0} ^ {\pi / 2} \frac {\sin \varphi \mathrm{d} \varphi}{(a \sin^ {2} \varphi \cos^ {2} \theta + b \sin^ {2} \varphi \sin^ {2} \theta + c \cos^ {2} \varphi) ^ {3 / 2}} \\ = \int_ {0} ^ {1} \frac {\mathrm{d} t}{\left[ (a \cos^ {2} \theta + b \sin^ {2} \theta) - (a \cos^ {2} \theta + b \sin^ {2} \theta - c) t ^ {2} \right] ^ {3 / 2}} \\ = \frac {1}{(a \cos^ {2} \theta + b \sin^ {2} \theta)} \cdot \frac {t}{\left[ (a \cos^ {2} \theta + b \sin^ {2} \theta) - (a \cos^ {2} \theta + b \sin^ {2} \theta - c) t ^ {2} \right] ^ {1 / 2}} \Bigg | _ {t = 0} ^ {t = 1} \\ = \frac {1}{\sqrt {c}} \cdot \frac {1}{a \cos^ {2} \theta + b \sin^ {2} \theta}. \end{array}
$$

最后得到

$$
\begin{array}{r l} I & = \frac {8}{\sqrt {c}} \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} \theta}{a \cos^ {2} \theta + b \sin^ {2} \theta} = \frac {8}{\sqrt {c}} \int_ {0} ^ {+ \infty} \frac {\mathrm{d} t}{a + b t ^ {2}} (t = \tan \theta) \\ & = \frac {8}{\sqrt {c}} \frac {1}{\sqrt {a b}} \arctan \left(\sqrt {\frac {b}{a}} t\right) \Big | _ {0} ^ {+ \infty} = \frac {4 \pi}{\sqrt {a b c}}. \end{array}
$$

注 利用 Gauss 公式来计算曲面积分在很多情况下是一种有效的手段, 但要注意使用 Gauss 公式的条件, 要弄清楚在什么情况下要“挖洞” (即用封闭曲面把 P, Q, R 无定义或不可微的点围住) 以及选择什么曲面“挖洞”计算更简便.

利用 Gauss 公式可导出用曲面积分表示 $R^{3}$ 中具有逐片光滑边界的有界闭区域 $\Omega$ 的体积公式

$$
\begin{array}{r l} | \Omega | & = \iint_ {\partial \Omega} x \mathrm{d} y \mathrm{d} z = \iint_ {\partial \Omega} y \mathrm{d} z \mathrm{d} x = \iint_ {\partial \Omega} z \mathrm{d} x \mathrm{d} y \\ & = \frac {1}{3} \iint_ {\partial \Omega} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y. \end{array}\tag{25.7}
$$

上述积分在 $\partial \Omega$ 的外侧进行. 由两类曲面积分之间的关系, 又有

$$
| \Omega | = \frac {1}{3} \iint_ {\partial \Omega} (x \cos \alpha + y \cos \beta + z \cos \gamma) d S,\tag{25.8}
$$

其中 $(\cos \alpha, \cos \beta, \cos \gamma)$ 为 $\partial \Omega$ 的单位外法向量. 如果 $\partial \Omega$ 有参数表示

$$
x = x (u, v), \quad y = y (u, v), \quad z = z (u, v), \quad (u, v) \in D,
$$

则

$$
V = \frac {1}{3} \left| \iint_ {D} (A x + B y + C z) \mathrm{d} u \mathrm{d} v \right|,\tag{25.9}
$$

其中

$$
A = \frac {\partial (y , z)}{\partial (u , v)}, B = \frac {\partial (z , x)}{\partial (u , v)}, C = \frac {\partial (x , y)}{\partial (u , v)}.
$$

(25.9) 也可以写为

$$
V = \frac {1}{3} \left| \iint_ {D} \left| \begin{array}{c c c} x & y & z \\ x _ {u} & y _ {u} & z _ {u} \\ x _ {v} & y _ {v} & z _ {v} \end{array} \right| \mathrm{d} u \mathrm{d} v \right|.\tag{25.10}
$$

特别地, 若一个立体的表面在球坐标系中由方程

$$
r = r (\varphi , \theta), \quad (\varphi , \theta) \in D
$$

给出，则

$$
x = r (\varphi , \theta) \sin \varphi \cos \theta , y = r (\varphi , \theta) \sin \varphi \sin \theta , z = r (\varphi , \theta) \cos \varphi , (\varphi , \theta) \in D.
$$

代入公式 (25.10) 中得到

$$
V = \frac {1}{3} \iint_ {D} r ^ {3} (\varphi , \theta) \sin \varphi \mathrm{d} \varphi \mathrm{d} \theta .\tag{25.11}
$$

当然, 公式 (25.11) 也可以从三重积分中直接得到, 事实上

$$
\begin{aligned} V = & \iiint \limits_{\Omega}\mathrm{d}x\mathrm{d}y\mathrm{d}z = \iiint \limits_{\substack{(\varphi ,\theta)\in D\\ 0\leqslant \rho \leqslant r(\theta ,\varphi)}}\rho^{2}\sin \varphi   \mathrm{d}\rho   \mathrm{d}\theta   \mathrm{d}\varphi \\ = & \iint \limits_{D}\sin \varphi   \mathrm{d}\varphi   \mathrm{d}\theta \int_{0}^{r(\varphi ,\theta)}\rho^{2}  \mathrm{d}\rho \\ = & \frac{1}{3}\iint \limits_{D}r^{3}(\varphi ,\theta)  \sin \varphi   \mathrm{d}\varphi   \mathrm{d}\theta . \end{aligned}
$$

### 25.3.2 练习题

1. 利用 Gauss 公式计算积分:

(1) $\oiint_{S} y(x - z) \, \mathrm{d}y \, \mathrm{d}z + z^2 \, \mathrm{d}z \, \mathrm{d}x + (y^2 + xz) \, \mathrm{d}x \, \mathrm{d}y,$ 其中 $S$ 是正立方体 $\{(x, y, z) | 0 \leqslant x \leqslant a, 0 \leqslant y \leqslant a, 0 \leqslant z \leqslant a\}$ ( $a > 0$ ) 的表面，取内侧.

(2) $\iint_{\Sigma} (x^3 + x) \, \mathrm{d}y \, \mathrm{d}z + (y^2 - xz) \, \mathrm{d}z \, \mathrm{d}x + (z^3 + z) \, \mathrm{d}x \, \mathrm{d}y,$ 其中 $\Sigma$ 是球面 $x^2 + y^2 + z^2 = 2z,$ 取外侧.

(3) 设 $A_{1} = x^{3} - x^{2}y + z^{3}, A_{2} = xy^{2} + y^{3}, A_{3} = xz + z^{2}, \Sigma$ 是由 $yOz$ 平面上的抛物线 $z = 1 - y^{2}$ 与 $z = 0$ 所围成的平面区域绕 $z$ 轴旋转后所得的旋转体的表面，取外侧。试求

$\oiint_{\Sigma}\left(\frac{\partial A_3}{\partial y} -\frac{\partial A_2}{\partial z}\right)\mathrm{d}y\mathrm{d}z + \left(\frac{\partial A_1}{\partial z} -\frac{\partial A_3}{\partial x}\right)\mathrm{d}z\mathrm{d}x + \left(\frac{\partial A_2}{\partial x} -\frac{\partial A_1}{\partial y}\right)\mathrm{d}x\mathrm{d}y.$ 

2. 先添加辅助面, 再用 Gauss 公式计算下列曲面积分:

(1) $\iint_{\Sigma} (x^2 \cos \alpha + y^2 \cos \beta + z^2 \cos \gamma) \, \mathrm{d}S,$ 其中 $\Sigma$ 是锥面 $z^2 = x^2 + y^2$ 在 $0 \leqslant z \leqslant h$ 的一段， $(\cos \alpha, \cos \beta, \cos \gamma)$ 为 $\Sigma$ 上的单位法向量，其方向为下方.

(2) $\iint_{\Sigma} x^{3} \, \mathrm{d}y \, \mathrm{d}z + y^{3} \, \mathrm{d}z \, \mathrm{d}x + z^{3} \, \mathrm{d}x \, \mathrm{d}y,$ 其中 $\Sigma$ 为球面 $x^{2} + y^{2} + z^{2} = a^{2}$ 之上半部分，取上侧.

(3) $\iint_{\Sigma}\left(\frac{x^3}{a^3} + y^3 z^3\right)\mathrm{d}y\mathrm{d}z + \left(\frac{y^3}{b^3} + z^3 x^3\right)\mathrm{d}z\mathrm{d}x + \left(\frac{z^3}{c^3} + x^3 y^3\right)\mathrm{d}x\mathrm{d}y,$ 其中 $\Sigma$ 为椭球面 $\frac{x^2}{a^2} +\frac{y^2}{b^2} +\frac{z^2}{c^2} = 1,x\geqslant 0,$ 取后侧.

3. $F(x,y,z)$ 是定义在 $\mathbf{R}^3$ 上的光滑函数，且 $F(x,y,z) = 0$ 是一个以原点为顶点的锥面 $\Sigma$ ，如果 $\Sigma$ 与平面 $\Pi :Ax + By + Cz = D$ 围成一个锥体，证明：此锥体的体积

$$
V = \frac {1}{3} S H,
$$

其中 S 为平面 $\Pi$ 上锥底部分的面积, H 为顶点到锥底的高.

4. 求由曲面 $(x^{2} + y^{2} + z^{2})^{2} = a^{2}xy$ 所围成的立体的体积.

5. 求 $\iint_{\Sigma}(x^{3}+y^{3})\mathrm{d}y\mathrm{d}z+(x^{3}+2x^{2}y)\mathrm{d}z\mathrm{d}x-x^{2}z\mathrm{d}x\mathrm{d}y,$ 其中 $\Sigma$ 是单叶双曲面 $x^{2}+y^{2}-z^{2}=1$ 在 $0\leqslant z\leqslant\sqrt{3}$ 的部分，取外侧.

6. $V = \{(x,y,z)\mid x^2 +y^2 <  z <   1\} ,S = \partial V,$ 求积分

$$
\oiint_ {S} y z \mathrm{d} z \mathrm{d} x + (x ^ {2} + y ^ {2}) z \mathrm{d} x \mathrm{d} y,
$$

积分沿外法线方向.

7. 求第二型曲面积分

$$
\oiint_ {S} z \mathrm{d} y \mathrm{d} z + \cos y \mathrm{d} z \mathrm{d} x + \mathrm{d} x \mathrm{d} y,
$$

其中 S 为 $x^{2} + y^{2} + z^{2} = 1$ 的外侧.

### 25.3.3 Stokes 公式

Stokes 公式是将空间曲面上的第二型曲面积分与该曲面边界上的第二型曲线积分之间建立联系的一个重要公式.

设 D 是 $R^{3}$ 中的分片光滑曲面, D 的边界 $\partial D$ 由分段光滑曲线组成, 又设 P, Q, R 有关于 x, y, z 的连续偏导数, 则成立下列 Stokes 公式:

$$
\oint_ {\partial D} P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z = \iint_ {D} \left| \begin{array}{c c c} \mathrm{d} y \mathrm{d} z & \mathrm{d} z \mathrm{d} x & \mathrm{d} x \mathrm{d} y \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right|,\tag{25.12}
$$

其中 $\partial D$ 的方向和 D 的方向服从右手法则. 由两类曲面积分之间的关系 (25.4), (25.12) 又可以写为

$$
\oint_ {\partial D} P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z = \iint_ {D} \left| \begin{array}{c c c} \cos \alpha & \cos \beta & \cos \gamma \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right| \mathrm{d} S,\tag{25.13}
$$

其中 $\cos \alpha, \cos \beta, \cos \gamma$ 是曲面 $D$ 上法向量的方向余弦。如果曲面 $D$ 在 $xOy$ 平面上，则公式(25.12)，(25.13)就是Green公式。公式(25.12)与(25.13)给我们提供了一个求曲线积分与曲面积分的新方法。

例题25.3.3 求

$$
I = \oint_ {C} (y ^ {2} - z ^ {2}) \mathrm{d} x + (z ^ {2} - x ^ {2}) \mathrm{d} y + (x ^ {2} - y ^ {2}) \mathrm{d} z,
$$

其中 C 是立方体 $\{(x,y,z) \mid 0 \leqslant x \leqslant a, 0 \leqslant y \leqslant a, 0 \leqslant z \leqslant a\}$ 的表面与平面 $x + y + z = \frac{3}{2}a$ 的交线，取向从 z 轴正向看去是逆时针方向.

分析 见图 25.6, 分六段积分的计算量很大, 且 C 也不便于表示为一个统一的参数式. 因 C 为闭曲线, 且 $P = y^{2} - z^{2}, Q = z^{2} - x^{2}, R = x^{2} - y^{2}$ 连续可微, 故考虑用 Stokes 公式.

解 令 $\Sigma$ 为 $x + y + z = \frac{3}{2} a$ 被 $C$ 所围的一块, 取上侧, 则 $C$ 的取向与 $\Sigma$ 的取侧相容. 应用Stokes公式(25.13),

$$
\begin{array}{l} I = \iint_ {\Sigma} \left| \begin{array}{c c c} \frac {1}{\sqrt {3}} & \frac {1}{\sqrt {3}} & \frac {1}{\sqrt {3}} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ y ^ {2} - z ^ {2} & z ^ {2} - x ^ {2} & x ^ {2} - y ^ {2} \end{array} \right| \mathrm{d} S \\ = \frac {1}{\sqrt {3}} \iint_ {\Sigma} - 4 (x + y + z) \mathrm{d} S \\ = - \frac {4}{\sqrt {3}} \iint_ {\Sigma} \frac {3}{2} a \mathrm{d} S = - 2 \sqrt {3} a \cdot | \Sigma | \\ = - 2 \sqrt {3} a \cdot \frac {3 \sqrt {3}}{4} a ^ {2} = - \frac {9}{2} a ^ {3}. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/27d20f102e61648ced2d3dfec33c81a0a3b6d4aabff0d3f433b229bea0c01ebd.jpg)



图25.6


例题 25.3.4 设 $\Sigma$ 是分片光滑的闭曲面, n 为 $\Sigma$ 上的单位外法向量, 证明:

$$
I = \oiint_ {\Sigma} \left| \begin{array}{c c c} \cos (\boldsymbol {n}, x) & \cos (\boldsymbol {n}, y) & \cos (\boldsymbol {n}, z) \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right| \mathrm{d} S = 0,
$$

其中分两种情形：(1) P, Q, R 在 $\overline{\Omega}$ 上二阶连续可微， $\Omega$ 为 $\Sigma$ 所围的立体；(2) P, Q, R 在 $\Sigma$ 上一阶连续可微.

证 对情形(1)用 Gauss 公式

$$
\begin{array}{l} I = \iint_ {\Sigma} \left(\frac {\partial R}{\partial y} - \frac {\partial Q}{\partial z}\right) \mathrm{d} y \mathrm{d} z + \left(\frac {\partial P}{\partial z} - \frac {\partial R}{\partial x}\right) \mathrm{d} z \mathrm{d} x \\ \qquad + \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \mathrm{d} x \mathrm{d} y \\ = \iiint_ {\Omega} \left[ \frac {\partial}{\partial x} \left(\frac {\partial R}{\partial y} - \frac {\partial Q}{\partial z}\right) + \frac {\partial}{\partial y} \left(\frac {\partial P}{\partial z} - \frac {\partial R}{\partial x}\right) \right. \\ \qquad + \left. \frac {\partial}{\partial z} \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \right] \mathrm{d} x \mathrm{d} y \mathrm{d} z \\ = 0. \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/5a7920b80cd5aa140d11d2cee729ae4d67802f7828a624a829f7735ae21936e1.jpg)



图25.7


情形(2)参见图25.7. 在 $\Sigma$ 上任取一条逐段光滑的闭曲线 $C, C$ 分 $\Sigma$ 为两部分 $\Sigma_{1}$ 与 $\Sigma_{2}$ , 在 $\Sigma_{1}, \Sigma_{2}$ 上分别应用Stokes公式, 则对于 $i = 1, 2$ ,

$$
\iint_ {\Sigma_ {i}} \left| \begin{array}{c c c} \cos (\boldsymbol {n}, x) & \cos (\boldsymbol {n}, y) & \cos (\boldsymbol {n}, z) \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right| \mathrm{d} S = \oint_ {C _ {i}} P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z.
$$

因 $\Sigma_{1},\Sigma_{2}$ 分居 $C$ 两侧，故 $C_1,C_2$ 为同一条曲线 $C$ ，只是它们的定向相反.若记 $C_1$ 为 $C_{+}$ ，则 $C_2$ 为 $C_{-}$ ，从而

$$
\begin{array}{l} I = \left(\iint_ {\Sigma_ {1}} + \iint_ {\Sigma_ {2}}\right) \left| \begin{array}{c c c} \cos (\boldsymbol {n}, x) & \cos (\boldsymbol {n}, y) & \cos (\boldsymbol {n}, z) \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ P & Q & R \end{array} \right| \mathrm{d} S \\ = \left(\oint_ {C _ {+}} + \oint_ {C _ {-}}\right) P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z = 0. \end{array}
$$

例题25.3.5 试用Stokes公式计算

$$
I = \oint_ {C} (y ^ {2} + z ^ {2}) \mathrm{d} x + (z ^ {2} + x ^ {2}) \mathrm{d} y + (x ^ {2} + y ^ {2}) \mathrm{d} z,
$$

其中 C 为 $x^{2} + y^{2} + z^{2} = 2Rx$ 与 $x^{2} + y^{2} = 2rx$ 的交线 $(0 < r < R, z > 0)$ ，C 的定向使得 C 所包围的球面上较小区域保持在左边.

解 见图 25.4, 设 S 为球面 $x^{2} + y^{2} + z^{2} = 2Rx$ 被柱面 $x^{2} + y^{2} = 2rx$ 所截部分的外侧, 由 Stokes 公式 (25.13)

$$
\begin{array}{l} I = \iint_ {S} \left| \begin{array}{c c c} \frac {x - R}{R} & \frac {y}{R} & \frac {z}{R} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ y ^ {2} + z ^ {2} & z ^ {2} + x ^ {2} & x ^ {2} + y ^ {2} \end{array} \right| \mathrm{d} S \\ = \frac {2}{R} \iint_ {S} [ (y - z) (x - R) + (z - x) y + (x - y) z ] \mathrm{d} S \\ = 2 \iint_ {S} (z - y) \mathrm{d} S = 2 \iint_ {S} z \mathrm{d} S = 2 R \iint_ {x ^ {2} + y ^ {2} \leqslant 2 r x} \mathrm{d} x \mathrm{d} y = 2 \pi r ^ {2} R. \end{array}
$$

### 25.3.4 练习题

1. 设 C 是平面 $x \cos \alpha + y \cos \beta + z \cos \gamma - p = 0$ 上逐段光滑的闭曲线, C 所界的面积为 S, C 的定向与 $(\cos \alpha, \cos \beta, \cos \gamma)$ 成右手系, 试计算积分

$$
\oint_ {C} \left| \begin{array}{c c c} \mathrm{d} x & \mathrm{d} y & \mathrm{d} z \\ \cos \alpha & \cos \beta & \cos \gamma \\ x & y & z \end{array} \right|.
$$

2. 求 $\oint_{C}(y-z)\mathrm{d}x+(z-x)\mathrm{d}y+(x-y)\mathrm{d}z, C$ 为 $x^{2}+y^{2}=1$ 与 $x+y+z=1$ 的交线，从 x 轴正向看是逆时针方向.

3. 求 $\int_{C}(z^{3}+3x^{2}y)\mathrm{d}x+(x^{3}+3y^{2}z)\mathrm{d}y+(y^{3}+3z^{2}x)\mathrm{d}z,$ 其中 C 是 $z=\sqrt{a^{2}-x^{2}-y^{2}}$ 与 x=y 的交线，自 $A\left(\frac{a}{\sqrt{2}},\frac{a}{\sqrt{2}},0\right)$ 到 $B\left(-\frac{a}{\sqrt{2}},-\frac{a}{\sqrt{2}},0\right).$ 

4. 用 Stokes 公式求 $\int_{C} \mathrm{e}^{x + z}\{[(x + 1)y^2 + 1] \, \mathrm{d}x + 2xy \, \mathrm{d}y + xy^2 \, \mathrm{d}z\}$ , 其中 $C$ 是右半柱面 $|x| + |y| = a (y > 0)$ 与平面 $y = z$ 的交线上从 $(-a, 0, 0)$ 到 $(a, 0, 0)$ 的一段 $(a > 0)$ .

5. 设 C 是空间任一逐段光滑的简单闭曲线, $f(x)$ , $g(x)$ , $h(x)$ 是任意连续函数. 证明:

$$
\oint_ {C} [ f (x) - y z ] \mathrm{d} x + [ g (y) - x z ] \mathrm{d} y + [ h (z) - x y ] \mathrm{d} z = 0.
$$

6. 求

$$
\iint_ {\Sigma} \left| \begin{array}{c c c} \cos \alpha & \cos \beta & \cos \gamma \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ x - z & x ^ {3} - y z & - 3 x y ^ {2} \end{array} \right| d S,
$$

其中 $\Sigma$ 是 $x^{2} + y^{2} + z^{2} = R^{2}$ 在 $z\geqslant 0$ 的部分， $(\cos \alpha ,\cos \beta ,\cos \gamma)$ 是 $\Sigma$ 下侧的单位法向量.

7. 求 $\oint_{C} y \, dx + z \, dy + x \, dz$ ，其中 C 是 $x^{2} + y^{2} + z^{2} = a^{2}$ 与 $x + y + z = 0$ 的交线，从 z 轴正向看是逆时针方向.

### 25.3.5 $\mathbb{R}^3$ 中曲线积分与路径无关的条件

利用Stokes公式可将24.3.2小节中平面曲线积分与路径无关的条件推广到 $\mathbf{R}^3$ 中，但首先要清楚什么是 $\mathbf{R}^3$ 中的“单连通区域”，为此我们要求无论 $L$ 是区域 $\Omega$ 内的什么样的简单闭路，总存在一个以 $L$ 为边界而且全部包含在 $\Omega$ 内的曲面 $S.$ 这时称空间区域 $\Omega$ 是曲面单连通区域．例如两个同心球面之间的部分是曲面单连通区域；一个球打了一个贯通的柱形孔洞后剩下的部分，如

$$
\Omega = \{(x, y, z) \mid x ^ {2} + y ^ {2} + z ^ {2} \leqslant 1, x ^ {2} + y ^ {2} \geqslant \frac {1}{2} \}
$$

不是曲面单连通区域; $R^{3}$ 中的圆环面

$$
T ^ {2}: (\sqrt {x ^ {2} + y ^ {2}} - a) ^ {2} + z ^ {2} = b ^ {2} (0 <   b <   a)
$$

所围的区域也不是曲面单连通区域.

如果 D 是 $R^{3}$ 中的曲面单连通区域, $w = P(x, y, z) \, dx + Q(x, y, z) \, dy + R(x, y, z) \, dz$ , 其中 P, Q, R 都在 D 上有连续偏导数, 则下列结论等价:

(1) 对 D 内任意一条闭曲线 C, 有

$$
\oint_ {C} w = 0;
$$

(2) 对 D 内的任意一条路径 $C, \int_{C} w$ 仅与 C 的起点和终点有关, 而与所沿的路径无关;

(3) 在 $D$ 内 (处处) 成立

$$
\frac {\partial Q}{\partial x} = \frac {\partial P}{\partial y}, \frac {\partial R}{\partial y} = \frac {\partial Q}{\partial z}, \frac {\partial P}{\partial z} = \frac {\partial R}{\partial x};
$$

(4) 存在势函数 $\varphi(x, y, z)$ , 使得在 $D$ 内成立

$$
\mathrm{d} \varphi (x, y, z) = P (x, y, z) \mathrm{d} x + Q (x, y, z) \mathrm{d} y + R (x, y, z) \mathrm{d} z,
$$

且

$$
\begin{array}{r l} \varphi (x, y, z) & = \int_ {x _ {0}} ^ {x} P (x, y, z) \mathrm{d} x + \int_ {y _ {0}} ^ {y} Q (x _ {0}, y, z) \mathrm{d} y \\ & \quad + \int_ {z _ {0}} ^ {z} R (x _ {0}, y _ {0}, z) \mathrm{d} z + C, \end{array}\tag{25.14}
$$

$$
\int_ {(x _ {0}, y _ {0}, z _ {0})} ^ {(x, y, z)} P \mathrm{d} x + Q \mathrm{d} y + R \mathrm{d} z = \varphi \Big | _ {(x _ {0}, y _ {0}, z _ {0})} ^ {(x, y, z)} = \varphi (x, y, z) - \varphi (x _ {0}, y _ {0}, z _ {0}).
$$

例题25.3.6 对于微分式

$$
z \left(\frac {1}{x ^ {2} y} - \frac {1}{x ^ {2} + z ^ {2}}\right) \mathrm{d} x + \frac {z}{x y ^ {2}} \mathrm{d} y + \left(\frac {x}{x ^ {2} + z ^ {2}} - \frac {1}{x y}\right) \mathrm{d} z,
$$

判断原函数的存在性并求出之.

解1 容易验证

$$
\frac {\partial P}{\partial y} = \frac {\partial Q}{\partial x} = - \frac {z}{x ^ {2} y ^ {2}},
$$

$$
\frac {\partial Q}{\partial z} = \frac {\partial R}{\partial y} = \frac {1}{x y ^ {2}},
$$

$$
\frac {\partial R}{\partial x} = \frac {\partial P}{\partial z} = \frac {1}{x ^ {2} y} + \frac {z ^ {2} - x ^ {2}}{(x ^ {2} + z ^ {2}) ^ {2}},
$$

因此该微分式有原函数. 根据微分式的特点, 为计算简单起见取 $z_0 = 0$ , $x_0, y_0 > 0$ , 积分路径为 $(x_0, y_0, 0) \longrightarrow (x, y_0, 0) \longrightarrow (x, y, 0) \rightarrow (x, y, z)$ , 则

$$
\varphi (x, y, z) = \int_ {0} ^ {z} \left(\frac {x}{x ^ {2} + z ^ {2}} - \frac {1}{x y}\right) \mathrm{d} z + C = \arctan \frac {z}{x} - \frac {z}{x y} + C.
$$

解 2 求原函数时也可用下面求不定积分的方法: 由

$$
\frac {\partial \varphi}{\partial z} = \frac {x}{x ^ {2} + z ^ {2}} - \frac {1}{x y},
$$

则

$$
\varphi (x, y, z) = \int \left(\frac {x}{x ^ {2} + z ^ {2}} - \frac {1}{x y}\right) \mathrm{d} z = \arctan \frac {z}{x} - \frac {z}{x y} + \psi (x, y).
$$

由此得

$$
\frac {\partial \varphi}{\partial x} = - \frac {z}{x ^ {2} + z ^ {2}} + \frac {z}{x ^ {2} y} + \frac {\partial \psi}{\partial x},
$$

$$
\frac {\partial \varphi}{\partial y} = \frac {z}{x y ^ {2}} + \frac {\partial \psi}{\partial y}.
$$

由 $\frac{\partial\varphi}{\partial x} = P, \frac{\partial\varphi}{\partial y} = Q,$ 得

$$
\frac {\partial \psi}{\partial x} = \frac {\partial \psi}{\partial y} = 0.
$$

即 $\psi (x,y)$ 为常数，所以

$$
\varphi (x, y, z) = \arctan \frac {z}{x} - \frac {z}{x y} + C.
$$

### 25.3.6 练习题

1. 证明：下列微分式为全微分，并求出其原函数：

(1) $(x^{2}-2yz)\mathrm{d}x+(y^{2}-2xz)\mathrm{d}y+(z^{2}-2xy)\mathrm{d}z;$ 

$$
\left[ \frac {x}{(x ^ {2} - y ^ {2}) ^ {2}} - \frac {1}{x} + 2 x ^ {2} \right] \mathrm{d} x + \left[ \frac {1}{y} - \frac {y}{(x ^ {2} - y ^ {2}) ^ {2}} + 3 y ^ {3} \right] \mathrm{d} y + 5 z ^ {3} \mathrm{d} z. \tag {2}
$$

2. 求 $\int_{(1,2,3)}^{(6,1,1)} yz \mathrm{~d}x + xz \mathrm{~d}y + xy \mathrm{~d}z$ .

3. 设 C 是由球面 $x^{2} + y^{2} + z^{2} = a^{2}$ 上的任一点沿任一路径运动到球面 $x^{2} + y^{2} + z^{2} = b^{2} (b > a)$ 上的任一点的轨迹, C 分段光滑, 证明:

$$
\int_ {C} r ^ {3} (x \mathrm{d} x + y \mathrm{d} y + z \mathrm{d} z) = \frac {1}{5} (b ^ {5} - a ^ {5}),
$$

其中 $r = \sqrt{x^2 + y^2 + z^2}$ 

## §25.4 向量的外积, 微分形式的外微分与一般的 Stokes 公式

虽然在多数院校的教学计划中, 也许没有讲授这些内容的足够的教学时间. 但应该看到, 微分形式、外积和外微分已成为近代分析的基本工具, 其简练的表达, 精致的结构给微积分基本问题的处理带来了极大的方便. 因而, 我们觉得这些内容即使不在课上讲, 也很值得推荐给学生作为课外阅读材料 $^{①}$ .

### 25.4.1 向量的外积

先考虑平面 $\mathbf{R}^2$ 上两个线性无关的向量 $a = (a_1, a_2)$ , $b = (b_1, b_2)$ . $\Pi$ 为由 $a, b$ 张成的平行四边形. 现在规定, 当自 $a$ 到 $b$ 是逆时针方向旋转时, 其平行四边形的面积为正, 否则为负, 则由解析几何知识知, 二阶行列式 $\left| \begin{array}{cc} a_1 & a_2 \\ b_1 & b_2 \end{array} \right|$ 就是上述意义下 $\Pi$ 的有向面积.

定义向量 $a$ 与 $b$ 的外积为

$$
\boldsymbol {a} \wedge \boldsymbol {b} = \left| \begin{array}{c c} a _ {1} & a _ {2} \\ b _ {1} & b _ {2} \end{array} \right|.
$$

可以证明外积运算具有下列性质:

(1) 反对称性:

$$
\pmb {a} \wedge \pmb {b} = - \pmb {b} \wedge \pmb {a}, \forall \pmb {a}, \pmb {b} \in \mathbf {R} ^ {2}, \text {由此得到} \pmb {a} \wedge \pmb {a} = 0, \forall \pmb {a} \in \mathbf {R} ^ {2}.
$$

(2) 线性分配律:

$$
\boldsymbol {a} \wedge (\boldsymbol {b} + \boldsymbol {c}) = \boldsymbol {a} \wedge \boldsymbol {b} + \boldsymbol {a} \wedge \boldsymbol {c}, \quad (\boldsymbol {a} + \boldsymbol {b}) \wedge \boldsymbol {c} = \boldsymbol {a} \wedge \boldsymbol {c} + \boldsymbol {b} \wedge \boldsymbol {c},
$$

$$
(\lambda \boldsymbol {a}) \wedge \boldsymbol {b} = \boldsymbol {a} \wedge (\lambda \boldsymbol {b}) = \lambda (\boldsymbol {a} \wedge \boldsymbol {b}), \forall \boldsymbol {a}, \boldsymbol {b}, \boldsymbol {c} \in \mathbf {R} ^ {2}, \lambda \in \mathbf {R}.
$$

一般地, 定义 $R^{n}$ 中向量 $\boldsymbol{a}_{i}=(a_{i1},a_{i2},\cdots,a_{in})(i=1,2,\cdots,n)$ 的外积为

$$
\boldsymbol {a} _ {1} \wedge \boldsymbol {a} _ {2} \wedge \dots \wedge \boldsymbol {a} _ {n} = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|.
$$

这样的外积运算满足反对称性和线性分配律.

当 $n = 3$ 时，可见三个线性无关向量 $\pmb{a}_1, \pmb{a}_2, \pmb{a}_3$ 的外积就是以它们为棱的平行六面体的有向体积. $\pmb{a}_1, \pmb{a}_2, \pmb{a}_3$ 构成右手系时，体积为正，否则为负.

### 25.4.2 微分形式

先看一个 n 元连续可微函数 $f(x_{1}, x_{2}, \cdots, x_{n})$ 的全微分

$$
\mathrm{d} f = \sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {i}} \mathrm{d} x _ {i},
$$

其中 $\mathrm{d}x_{i}\ (i=1,2,\cdots,n)$ 是各自独立的自变量增量，与 $x_{i}\ (i=1,2,\cdots,n)$ 的具体取值是无关的。这样把 $\mathrm{d}x_{1},\mathrm{d}x_{2},\cdots,\mathrm{d}x_{n}$ 看成一组基，df 就可视为由这组基生成的线性空间的元素。为此，我们构造如下一次微分形式的线性空间。

设 U 为 $R^{n}$ 中的区域, $\boldsymbol{x}=(x_{1},x_{2},\cdots,x_{n})\in U$ , $C^{0}(U)$ 是 U 上全体连续函数. 设 $a_{i}(\boldsymbol{x})\in C^{0}(U)$ , $i=1,2,\cdots,n$ , 则称

$$
a _ {1} (\boldsymbol {x}) \mathrm{d} x _ {1} + a _ {2} (\boldsymbol {x}) \mathrm{d} x _ {2} + \dots + a _ {n} (\boldsymbol {x}) \mathrm{d} x _ {n}\tag{25.15}
$$

为 U 上 $C^{0}$ 类的一次微分形式, 简称 1-形式. 其全体记为 $\Lambda^{1}$ (或 $\Lambda^{1}(U)$ ).

注 1 如果 $a_{i}(\boldsymbol{x}) \in C^{k}(U)$ , $i = 1, 2, \cdots, n$ , k 为某个正整数, 则称 (25.15) 为 U 上的 $C^{k}$ 类的一次微分形式.

注 2 以 $dx_{1}, dx_{2}, \cdots, dx_{n}$ 为基，系数取 $C^{0}(U)$ 中的函数，按通常的线性运算，可证明 $\Lambda^{1}$ 是一个 $C^{0}(U)$ 上的线性空间.

下面形式地定义高次微分形式.

在 $dx_{1}, dx_{2}, \cdots, dx_{n}$ 中任取 2 个组成有序元，记为 $dx_{i} \wedge dx_{j} (i, j = 1, 2, \cdots, n)$ ，称为 $dx_{i}$ 与 $dx_{j}$ 的外积（暂时先将它看作一种记号）.

仿照向量的外积, 规定

$$
\mathrm{d} x _ {i} \wedge \mathrm{d} x _ {j} = - \mathrm{d} x _ {j} \wedge \mathrm{d} x _ {i}, \quad \mathrm{d} x _ {i} \wedge \mathrm{d} x _ {i} = 0, \quad i, j = 1, 2, \dots , n.
$$

因此共有 $C_n^2$ 个有序元

$$
\mathrm{d} x _ {i} \wedge \mathrm{d} x _ {j}, \quad 1 \leqslant i <   j \leqslant n.
$$

同 $\pmb{\Lambda}^{1}$ 的构造类似，以这些有序元为基就可以构造一个线性空间 $\pmb{\Lambda}^{2},\pmb{\Lambda}^{2}$ 的元素称为二次微分形式，简称2-形式，于是 $\pmb{\Lambda}^{2}$ 的元素就可表为

$$
\sum_ {1 \leqslant i <   j \leqslant n} g _ {i j} (\boldsymbol {x}) \mathrm{d} x _ {i} \wedge \mathrm{d} x _ {j}.
$$

这称为2-形式的标准形式.

一般地，在 $\left\{dx_{1},dx_{2},\cdots,dx_{n}\right\}$ 中任取 p 个组成有序元，记为

$$
\mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}},
$$

这里 $i_{1}, i_{2}, \cdots, i_{p}$ 是从集合 $1, 2, \cdots, n$ 中选取的任意 p 个整数（同样地，我们把 $\wedge$ 称为外积）。规定

$$
\begin{array}{l} \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {r}} \wedge \mathrm{d} x _ {i _ {r + 1}} \wedge \mathrm{d} x _ {i _ {r + 2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}} \\ = - \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {r + 1}} \wedge \mathrm{d} x _ {i _ {r}} \wedge \mathrm{d} x _ {i _ {r + 2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}}, \quad 1 \leqslant r \leqslant p - 1, \end{array}
$$

而且如果 $i_{1}, i_{2}, \cdots, i_{p}$ 中有两个是相同的，则 $dx_{i_{1}} \wedge dx_{i_{2}} \wedge \cdots \wedge dx_{i_{p}} = 0$ 。因此共有 $C_{n}^{p}$ 个有序元

$$
\mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}}, \quad 1 \leqslant i _ {1} <   i _ {2} <   \dots <   i _ {p} \leqslant n.
$$

以这些有序元为基构造一个线性空间 $\pmb{\Lambda}^p, \pmb{\Lambda}^p$ 的元素称为 $p$ 次微分形式，简称 $p$ -形式. 于是一般 $p$ -形式就可表示为

$$
\sum_ {1 \leqslant i _ {1} <   i _ {2} <   \dots <   i _ {p} \leqslant n} g _ {i _ {1}, i _ {2}, \dots , i _ {p}} (\boldsymbol {x}) \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}},
$$

这称为 p-形式的标准形式.

特别地, $\Lambda^{n}$ 是 $C_{n}^{n}=1$ 维的线性空间, 它的基为 $dx_{1}\wedge dx_{2}\wedge\cdots\wedge dx_{n}$ , 因此一般 n-形式为

$$
g (\boldsymbol {x}) \mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} \wedge \dots \wedge \mathrm{d} x _ {n}.
$$

当 p > n 时，总有 $dx_{i_{1}} \wedge dx_{i_{2}} \wedge \cdots \wedge dx_{i_{p}} = 0$ 。因此当 p > n 时， $\Lambda^{p} = \{0\}$ .

$U$ 上的连续可微函数称为 $(C^1$ 类的) 0-形式, 它们的全体记为 $\pmb{\Lambda}^0$ , 它也是一个线性空间, 函数 $g \equiv 1$ 是它的一个基.

### 25.4.3 微分形式的外积

在上节我们定义了抽象的线性空间 $\Lambda^{0}, \Lambda^{1}, \cdots, \Lambda^{n}$ . 按照线性空间的直积可

得到一个 $C_{n}^{0} + C_{n}^{1} + \cdots + C_{n}^{n} = 2^{n}$ 维的线性空间

$$
\boldsymbol {\Lambda} = \boldsymbol {\Lambda} ^ {0} + \boldsymbol {\Lambda} ^ {1} + \dots + \boldsymbol {\Lambda} ^ {n}.
$$

它的基是 $\Lambda^{0}, \Lambda^{1}, \cdots, \Lambda^{n}$ 的基的全体. $\Lambda$ 中的元素的一般形式为

$$
\omega = \omega_ {0} + \omega_ {1} + \dots + \omega_ {n}, \quad \omega_ {i} \in \Lambda^ {i}, i = 0, 1, \dots , n.
$$

现在在 $\pmb{\Lambda}$ 上引入外积运算 $\wedge$ 

记 $dx_{I} = dx_{i_{1}} \wedge dx_{i_{2}} \wedge \cdots \wedge dx_{i_{p}}, dx_{J} = dx_{j_{1}} \wedge dx_{j_{2}} \wedge \cdots \wedge dx_{j_{q}}$ ，则 $dx_{I}$ 与 $dx_{J}$ 的外积定义为

$$
\mathrm{d} x _ {I} \wedge \mathrm{d} x _ {J} = \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}} \wedge \mathrm{d} x _ {j _ {1}} \wedge \mathrm{d} x _ {j _ {2}} \wedge \dots \wedge \mathrm{d} x _ {j _ {q}},
$$

它是 $(p+q)$ -形式. 如果 $\{i_{1},i_{2},\cdots,i_{p}\}$ 和 $\{j_{1},j_{2},\cdots,j_{q}\}$ 有公共元素, 那么 $dx_{I}\wedge dx_{J}=0$ . 对于一般的p-形式 $\omega=\sum_{I}g_{I}(\boldsymbol{x})dx_{I}$ 和q-形式 $\eta=\sum_{J}h_{J}(\boldsymbol{x})dx_{J}$ , 定义 $\omega$ 和 $\eta$ 的外积 $\omega\wedge\eta$ 为

$$
\omega \wedge \eta = \sum_ {I, J} g _ {I} (\boldsymbol {x}) h _ {J} (\boldsymbol {x}) \mathrm{d} x _ {I} \wedge \mathrm{d} x _ {J},
$$

它是 $(p+q)$ -形式.

对于 0-形式 f, 我们补充定义

$$
f \omega = f \wedge \omega = \sum_ {I} f (\boldsymbol {x}) g _ {I} (\boldsymbol {x}) \mathrm{d} x _ {I}, \quad \omega \in \Lambda^ {p}.
$$

这样 $\wedge$ 是微分形式空间上的一种运算, 它有如下性质.

性质1 设 $\omega \in \pmb{\Lambda}^p, \eta \in \pmb{\Lambda}^q$ ，则当 $p + q > n$ 时

$$
\omega \wedge \eta = 0.
$$

这是因为当 $p + q > n$ 时， $\{i_1,i_2,\dots ,i_p\}$ 和 $\{j_{1},j_{2},\dots ,j_{q}\}$ 必有公共元素.

性质2 设 $\omega \in \Lambda^p, \eta \in \Lambda^q$ ，则

$$
\omega \wedge \eta = (- 1) ^ {p q} \eta \wedge \omega .
$$

推论 设 $\omega \in A^{p}, \omega \neq 0,$ 则当 p 为奇数时, $\omega \wedge \omega = 0.$ 

注 我们现在定义的外积 $\wedge$ 与 $\mathbf{R}^n$ 的向量的外积 $\wedge$ 在形式上两者都符合反对称性和线性分配律, 至于其他的结论都是各自的推论. 比如, 我们在 $\mathbf{R}^n$ 空间中仅仅定义了 $n$ 个向量的外积, 并且如果这 $n$ 个向量中有两个相等, 则其外积为零. 特别地, $\forall a \in \mathbf{R}^2$ , 有 $a \wedge a = 0$ . 但在 $a \in \mathbf{R}^n$ , $n > 2$ 时, 我们并没有给出 $a \wedge a$ 的定义. 在微分形式的外积定义中, 我们允许 $n$ 个微分中任意 $p$ 个组成 $p$ -形式的外积, 从而有当 $\omega \in A^p$ , $\omega \neq 0$ , $p$ 为偶数时, 不一定成立 $\omega \wedge \omega = 0$ .

例如取 $\mathbf{R}^4$ 上的微分形式, 如果 $\omega = \mathrm{d}x_{1} \wedge \mathrm{d}x_{2} + \mathrm{d}x_{3} \wedge \mathrm{d}x_{4}$ , 那么

$$
\begin{array}{r l} \omega \wedge \omega & = (\mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} + \mathrm{d} x _ {3} \wedge \mathrm{d} x _ {4}) \wedge (\mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} + \mathrm{d} x _ {3} \wedge \mathrm{d} x _ {4}) \\ & = \mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} \wedge \mathrm{d} x _ {3} \wedge \mathrm{d} x _ {4} + \mathrm{d} x _ {3} \wedge \mathrm{d} x _ {4} \wedge \mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} \\ & = 2 \mathrm{d} x _ {1} \wedge \mathrm{d} x _ {2} \wedge \mathrm{d} x _ {3} \wedge \mathrm{d} x _ {4}. \end{array}
$$

性质3 对于任意 $\omega, \eta, \sigma \in \Lambda$ 成立

分配律： $(\omega +\eta)\wedge \sigma = \omega \wedge \sigma +\eta \wedge \sigma ,$ 

$$
\sigma \wedge (\omega + \eta) = \sigma \wedge \omega + \sigma \wedge \eta ;
$$

结合律： $(\omega \wedge \eta)\wedge \sigma = \omega \wedge (\eta \wedge \sigma).$ 

### 25.4.4 微分形式的外微分

设 $U \subset R^{n}$ 是区域, $f(x_{1}, x_{2}, \cdots, x_{n})$ 是 U 上的可微函数, 其全微分

$$
\mathrm{d} f = \sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {j}} \mathrm{d} x _ {i},
$$

可理解为对0-形式 $f$ 作了微分运算后成为了1-形式.对 $\pmb{A}^p$ 中一个形如

$$
\omega = g (\boldsymbol {x}) \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}}
$$

的 $p$ -形式，定义

$$
\mathrm{d} \omega = \sum_ {i = 1} ^ {n} \frac {\partial g}{\partial x _ {i}} (\boldsymbol {x}) \mathrm{d} x _ {i} \wedge \mathrm{d} x _ {i _ {1}} \wedge \mathrm{d} x _ {i _ {2}} \wedge \dots \wedge \mathrm{d} x _ {i _ {p}},
$$

然后按线性和数乘分配律定义微分运算 $\mathrm{d}:\pmb{\Lambda}\to \pmb{\Lambda}$ ，即

$$
\mathrm{d} (\alpha \omega + \beta \eta) = \alpha \mathrm{d} \omega + \beta \mathrm{d} \eta , \forall \alpha , \beta \in \mathbf {R} ^ {n}, \omega , \eta \in \Lambda .
$$

并且称 $d\omega$ 为微分形式 $\omega$ 的外微分.

例题 25.4.1 设 $\omega = dx_{i_{1}} \wedge dx_{i_{2}} \wedge \cdots \wedge dx_{i_{k}}$ ，则 $d\omega = 0$ .

证 $\mathrm{d}\omega=\mathrm{d}(1\mathrm{d}x_{i_{1}}\wedge\mathrm{d}x_{i_{2}}\wedge\cdots\wedge\mathrm{d}x_{i_{k}})$ $=(\mathrm{d}1)\wedge\mathrm{d}x_{i_{1}}\wedge\mathrm{d}x_{i_{2}}\wedge\cdots\wedge\mathrm{d}x_{i_{k}}=0.$ 

例题25.4.2设 $\omega = P\mathrm{d}x + Q\mathrm{d}y + R\mathrm{d}z$ 为 $\mathbf{R}^3$ 上的 $C^1$ 类1-形式，计算 $\mathrm{d}\omega$ 

$$
\begin{array}{r l} {\mathrm{d} \omega = (\mathrm{d} P) \wedge \mathrm{d} x + (\mathrm{d} Q) \wedge \mathrm{d} y + (\mathrm{d} R) \wedge \mathrm{d} z} \\ & {= \left(\frac {\partial P}{\partial x} \mathrm{d} x + \frac {\partial P}{\partial y} \mathrm{d} y + \frac {\partial P}{\partial z} \mathrm{d} z\right) \wedge \mathrm{d} x + \left(\frac {\partial Q}{\partial x} \mathrm{d} x + \frac {\partial Q}{\partial y} \mathrm{d} y + \frac {\partial Q}{\partial z} \mathrm{d} z\right) \wedge \mathrm{d} y} \\ & {+ \left(\frac {\partial R}{\partial x} \mathrm{d} x + \frac {\partial R}{\partial y} \mathrm{d} y + \frac {\partial R}{\partial z} \mathrm{d} z\right) \wedge \mathrm{d} z} \\ & {= \left(\frac {\partial R}{\partial y} - \frac {\partial Q}{\partial z}\right) \mathrm{d} y \mathrm{d} z + \left(\frac {\partial P}{\partial z} - \frac {\partial R}{\partial x}\right) \mathrm{d} z \mathrm{d} x + \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \mathrm{d} x \mathrm{d} y.} \end{array}
$$

例题 25.4.3 设 $f \in \Lambda^{0}$ 是 $C^{2}$ 类的 0-形式, 即 f 是二次连续可微的函数, 则 $d^{2}f = 0$ .

证 由于 $\frac{\partial^2f}{\partial x_i\partial x_j} = \frac{\partial^2f}{\partial x_j\partial x_i}$ $(i,j = 1,2,\dots ,n)$ ，所以

$$
\begin{array}{r l} \mathrm{d} ^ {2} f & = \mathrm{d} (\mathrm{d} f) = \mathrm{d} \left(\sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {i}} \mathrm{d} x _ {i}\right) = \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} \frac {\partial^ {2} f}{\partial x _ {j} \partial x _ {i}} \mathrm{d} x _ {i} \wedge \mathrm{d} x _ {j} \\ & = \sum_ {i <   j} \left(\frac {\partial^ {2} f}{\partial x _ {i} \partial x _ {j}} - \frac {\partial^ {2} f}{\partial x _ {j} \partial x _ {i}}\right) \mathrm{d} x _ {i} \wedge \mathrm{d} x _ {j} = 0. \end{array}
$$

外微分有如下两个常用的性质.

性质 1 设 $\omega$ 和 $\eta$ 分别为 $C^{1}$ 类的 p-形式和 q-形式，则

$$
\mathrm{d} (\omega \wedge \eta) = \mathrm{d} \omega \wedge \eta + (- 1) ^ {p} \omega \wedge \mathrm{d} \eta .
$$

性质 2 设 $\omega$ 是 $C^{2}$ 类的微分形式, 则 $\mathrm{d}(\mathrm{d}\omega)=0$ .

证明作为练习.

在后几节的实例中, 我们将会看到以上这些抽象的运算是如何恰到好处地反映了不同的实际问题的实质内容, 而这正是数学的特点之一.

### 25.4.5 变换与Jacobi行列式

设 A 是 $R^{3}$ 上的一个线性变换, 其矩阵为 $\boldsymbol{A} = (a_{ij})_{3 \times 3}$ , 设 $\Omega$ 是 $R^{3}$ 中的一个立方体, 其边长分别是 $\alpha, \beta, \gamma$ , 则其体积为 $V = \alpha \beta \gamma$ . 用向量外积的语言, 就是

$$
V = \alpha i \wedge \beta j \wedge \gamma k = \alpha \beta \gamma i \wedge j \wedge k.
$$

再考虑 $\Omega$ 在 $\pmb{A}$ 下的象集 $A(\Omega)$ 的体积, 注意 $A(\Omega)$ 是由 $\xi = a_{11}\alpha i + a_{21}\alpha j + a_{31}\alpha k$ , $\eta = a_{12}\beta i + a_{22}\beta j + a_{32}\beta k$ , $\zeta = a_{13}\gamma i + a_{23}\gamma j + a_{33}\gamma k$ 所张成的平行六面体, 因而其有向体积为

$$
\boldsymbol {\xi} \wedge \boldsymbol {\eta} \wedge \boldsymbol {\zeta} = \left| \begin{array}{l l l} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| \cdot \alpha \beta \gamma \boldsymbol {i} \wedge \boldsymbol {j} \wedge \boldsymbol {k} = \det \boldsymbol {A} \cdot \alpha \beta \gamma \boldsymbol {i} \wedge \boldsymbol {j} \wedge \boldsymbol {k}.
$$

当 $\det A > 0$ 时, 可知 $\xi, \eta, \zeta$ 构成右手系, 或者说它们的方向与 i, j, k 一致.

现设 $\Omega$ 是 $\mathbf{R}^3$ 中一个可求体积的有界闭集，由重积分的定义以及体积的平移不变性（即一个平行四面体的体积在平移后不变），就得到 $A(\Omega)$ 的有向体积

$$
V = \iiint_ {\boldsymbol {A} (\Omega)} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \det \boldsymbol {A} \iiint_ {\Omega} \mathrm{d} u \mathrm{d} v \mathrm{d} w = \det \boldsymbol {A} \cdot V.
$$

因此, $\det A$ 表示了线性变换 A 的 (体积) “膨胀系数”; 当 $\det A \neq 0$ 时, $\det A$ 的符号表示了线性变换 A 的 “方向”. 特别地, $|\det A| = 1$ 称为保体变换; $\det A > 0$ 时称为保向变换.

这样的概念可推广到一般的变换(映射). 设 $f: R^{3} \rightarrow R^{3}$ 是一个可微映射, 则在每个点 $(u_{0}, v_{0}, w_{0})$ 附近, 可用一个线性映射 $A(u_{0}, v_{0}, w_{0})$ 近似替代, 其行列式就是 Jacobi 行列式 $\left.\frac{\partial(x, y, z)}{\partial(u, v, w)}\right|_{(u_{0}, v_{0}, w_{0})}$ . 如果 $\frac{\partial(x, y, z)}{\partial(u, v, w)} > 0$ 恒成立, 则称 f 是保向的; 如果 $\left|\frac{\partial(x, y, z)}{\partial(u, v, w)}\right| = 1$ 恒成立, 则称 f 是保体积的.

### 25.4.6 重积分的变量代换

我们可以用微分形式的外微分来理解重积分的变量代换.

设三重积分的重积分元为 $\mathrm{d}x\mathrm{d}y\mathrm{d}z$ ，在 $O - xyz$ 右手坐标系中，正是边长为 $\mathrm{d}x$ dy, $\mathrm{d}z$ 的小方体的体积.故我们合理地把 $\mathrm{d}x\mathrm{d}y\mathrm{d}z$ 记为 $\mathrm{d}x\wedge \mathrm{d}y\wedge \mathrm{d}z.$ 设坐标变换 $T:D\subset \mathbf{R}^3\to \mathbf{R}^3$ 为

$$
x = x (u, v, w), \quad y = y (u, v, w), \quad z = z (u, v, w),
$$

并记 $\mathrm{du}\mathrm{dv}\mathrm{dw}$ 为 $\mathrm{du}\wedge \mathrm{dv}\wedge \mathrm{dw}$ . 取微分, 并根据外积运算, 有

$$
\mathrm{d} x \wedge \mathrm{d} y \wedge \mathrm{d} z = \frac {\partial (x , y , z)}{\partial (u , v , w)} \mathrm{d} u \wedge \mathrm{d} v \wedge \mathrm{d} w.\tag{25.16}
$$

由(25.16)，前面讲过的重积分变量代换公式就很容易地变成

$$
\begin{array}{l} \int_ {T (D)} f (x, y, z) \mathrm{d} x \wedge \mathrm{d} y \wedge \mathrm{d} z \\ = \int_ {D} f (x (u, v, w), y (u, v, w), z (u, v, w)) \frac {\partial (x , y , z)}{\partial (u , v , w)} \mathrm{d} u \wedge \mathrm{d} v \wedge \mathrm{d} w. \end{array}\tag{25.17}
$$

注 (25.17) 最大的好处是无需对 Jacobi 行列式加上绝对值. 这正是设计微分形式这个抽象的数学工具的目的之一. 注意到 $\mathrm{dx} \wedge \mathrm{dy} \wedge \mathrm{dz}$ 中外积的次序是重要的, 而 $\mathrm{dx} \wedge \mathrm{dy} \wedge \mathrm{dz} = \mathrm{dx} \mathrm{dy} \mathrm{dz}$ 被称为正体积元是因为外积的次序与 $O - xyz$ 右手系的次序一致, 而 $\mathrm{dy} \wedge \mathrm{dx} \wedge \mathrm{dz} = -\mathrm{dx} \mathrm{dy} \mathrm{dz} = \mathrm{dy} \mathrm{dx} \mathrm{dz}$ . 类似的结论对 $n$ 重积分也成立.

例题25.4.4 极坐标变换 $x = r\cos \theta, y = r\sin \theta,$ 有

$$
\mathrm{d} x \wedge \mathrm{d} y = \frac {\partial (x , y)}{\partial (r , \theta)} \mathrm{d} r \wedge \mathrm{d} \theta = r \mathrm{d} r \wedge \mathrm{d} \theta .
$$

### 25.4.7 一般的Stokes公式

先看 Green 公式. 设 D 是 $R^{2}$ 中的区域, $\partial D$ 是 D 的边界, 取右手系的诱导定向, 于是就有

$$
\oint_ {\partial D} P \mathrm{d} x + Q \mathrm{d} y = \iint_ {D} \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \mathrm{d} x \mathrm{d} y = \iint_ {D} \left(\frac {\partial Q}{\partial x} - \frac {\partial P}{\partial y}\right) \mathrm{d} x \wedge \mathrm{d} y,
$$

如记 $\omega = P\mathrm{d}x + Q\mathrm{d}y$ 则可证 $\mathrm{d}\omega = \left(\frac{\partial Q}{\partial x} -\frac{\partial P}{\partial y}\right)\mathrm{d}x\wedge \mathrm{d}y,$ 因而有

$$
\oint_ {\partial D} \omega = \int_ {D} \mathrm{d} \omega .
$$

再看Stokes公式. 设 $\Sigma$ 是 $\mathbf{R}^3$ 中的曲面, $\partial \Sigma$ 是 $\Sigma$ 边界. 也取右手系的诱导定向, 如记 $\omega = P\mathrm{d}x + Q\mathrm{d}y + R\mathrm{d}z$ , 就有

$$
\oint_ {\partial \Sigma} \omega = \int_ {\Sigma} \mathrm{d} \omega .
$$

对于 Gauss 公式, 记 $\Omega$ 是 $R^{3}$ 中的区域, $\partial\Omega$ 是 $R^{3}$ 的边界, 取右手系的诱导定向, 记 $\omega = P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy$ , 有

$$
\oint_ {\partial \Omega} \omega = \int_ {\Omega} \mathrm{d} \omega .
$$

最后回顾 Newton-Leibniz 公式

$$
\int_ {a} ^ {b} \mathrm{d} f (x) = f (x) \Big | _ {a} ^ {b},
$$

如果将上式右端视为0-形式 $f(x)$ 在区间 $D = [a,b]$ 的诱导定向边界 $\partial D = \{a,b\}$ 上的积分，那么上式就可以表为

$$
\int_ {\partial D} f = \int_ {D} \mathrm{d} f.
$$

这样, Newton-Leibniz 公式, Green 公式, Gauss 公式和 Stokes 公式就都可以统一地写成如下形式:

$$
\oint_ {\partial M} \omega = \int_ {M} \mathrm{d} \omega .
$$

这个式子统称为一般的 Stokes 公式. 它说明了, 高次的微分形式 $\mathrm{d}\omega$ 在给定区域 $M$ 上的积分等于低一次的微分形式 $\omega$ 在低一维的区域边界 $\partial M$ 上的积分. Stokes 公式是单变量情形的 Newton-Leibniz 公式在多变量情形的推广, 是数学分析中最精彩的结论之一. 读者在今后的课程中还会看到它的广泛应用.

## §25.5 对于教学的建议

### 25.5.1 习题课教案一例

作为大课的补充, 建议将下面的三个问题放在习题课上讲解.

#### 1. 关于第一类曲面积分在正交变换下的不变性

第一类曲面积分在正交变换下的不变性, 即

$$
\iint_ {S} f (\boldsymbol {X}) \mathrm{d} S = \iint_ {\Sigma} f (\boldsymbol {A} ^ {\mathrm{T}} \boldsymbol {U}) \mathrm{d} \Sigma ,\tag{25.18}
$$

其中 $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ , $U = \begin{pmatrix} u \\ v \\ w \end{pmatrix}$ , A 是正交矩阵. 满足

$$
\boldsymbol {U} = \boldsymbol {A X},\tag{25.19}
$$

$A^{T}$ 为 A 的转置. 曲面 $\Sigma$ 是曲面 S 在正交变换 A 下的像.

公式 (25.18) 的证明如下: 设 $S$ 的参数方程为

$$
S: x = x (s, t), y = y (s, t), z = z (s, t), \quad (s, t) \in D.
$$

通过(25.19)可得 $\Sigma$ 的参数方程为

$$
\Sigma : u = u (s, t), v = v (s, t), w = w (s, t), \quad (s, t) \in D.
$$

则

$$
\iint_ {S} f (\boldsymbol {X}) \mathrm{d} S = \iint_ {D} f (\boldsymbol {X} (s, t)) \sqrt {E G - F ^ {2}} \mathrm{d} s \mathrm{d} t,\tag{25.20}
$$

$$
\iint_ {\Sigma} f (\boldsymbol {A} ^ {\mathrm{T}} \boldsymbol {U}) \mathrm{d} \Sigma = \iint_ {D} f (\boldsymbol {A} ^ {\mathrm{T}} \boldsymbol {U} (s, t)) \sqrt {E _ {1} G _ {1} - F _ {1} ^ {2}} \mathrm{d} s \mathrm{d} t,\tag{25.21}
$$

其中

$$
E = \pmb {X} _ {s} ^ {2}, \quad F = \pmb {X} _ {s} \cdot \pmb {X} _ {t}, \quad G = \pmb {X} _ {t} ^ {2},
$$

$$
E _ {1} = \boldsymbol {U} _ {s} ^ {2}, \quad F _ {1} = \boldsymbol {U} _ {s} \cdot \boldsymbol {U} _ {t}, \quad G _ {1} = \boldsymbol {U} _ {t} ^ {2}.
$$

由(25.19)得

$$
\boldsymbol {U} _ {s} = \boldsymbol {A} \boldsymbol {X} _ {s}, \quad \boldsymbol {U} _ {t} = \boldsymbol {A} \boldsymbol {X} _ {t}.
$$

从而

$$
E = E _ {1}, F = F _ {1}, G = G _ {1}.\tag{25.22}
$$

由 $(25.20)$ — $(25.22)$ 知 $(25.18)$ 成立.

例题 25.5.1 设 S 是球面 $x^{2} + y^{2} + z^{2} = 1$ , f 是连续函数, 证明:

$$
\iint_ {S} f (a x + b y + c z) \mathrm{d} S = 2 \pi \int_ {- 1} ^ {1} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \mathrm{d} u,
$$

其中 a, b, c 是常数.

证 不妨设 $a^2 + b^2 + c^2 \neq 0$ ，设 $\begin{pmatrix} u \\ v \\ w \end{pmatrix} = A \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ ，其中矩阵 $A$ 为正交矩阵，且 $A$ 的第一行的元素为 $\frac{a}{\sqrt{a^2 + b^2 + c^2}}, \frac{b}{\sqrt{a^2 + b^2 + c^2}}, \frac{c}{\sqrt{a^2 + b^2 + c^2}}$ 。由 (25.18) 知

$$
\begin{array}{l} \iint_ {S} f (a x + b y + c z) \mathrm{d} S = \iint_ {u ^ {2} + v ^ {2} + w ^ {2} = 1} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \mathrm{d} S \\ = 2 \int_ {- 1} ^ {1} \int_ {- \sqrt {1 - u ^ {2}}} ^ {\sqrt {1 - u ^ {2}}} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \frac {1}{\sqrt {1 - u ^ {2} - v ^ {2}}} \mathrm{d} u \mathrm{d} v \\ = 4 \int_ {- 1} ^ {1} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \mathrm{d} u \int_ {0} ^ {\sqrt {1 - u ^ {2}}} \frac {\mathrm{d} v}{\sqrt {1 - u ^ {2} - v ^ {2}}} \end{array}
$$

$$
\begin{array}{l} = 4 \int_ {- 1} ^ {1} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \mathrm{d} u \int_ {0} ^ {\pi / 2} \mathrm{d} t \quad (v = \sqrt {1 - u ^ {2}} \sin t) \\ = 2 \pi \int_ {- 1} ^ {1} f (u \sqrt {a ^ {2} + b ^ {2} + c ^ {2}}) \mathrm{d} u. \end{array}
$$

#### 2. 第二型曲面积分符号的确定（公式(25.3)的证明）

在计算第二型曲面积分时, 要将第二型曲面积分化为二重积分, 其中的困难之一是如何决定二重积分前的符号. 在直角坐标系中计算时往往还比较容易. 当用参数方程计算时就要麻烦一些. 下面是公式 (25.3) 的证明:

首先由两类曲面积分之间的关系有

$$
\iint_ {S} P \mathrm{d} y \mathrm{d} z + Q \mathrm{d} z \mathrm{d} x + R \mathrm{d} x \mathrm{d} y = \iint_ {S} (P \cos \alpha + Q \cos \beta + R \cos \gamma) \mathrm{d} S,
$$

这里 $(\cos \alpha, \cos \beta, \cos \gamma)$ 为 $S$ 所指定的一侧的单位法向量. 我们知道 $S$ 在参数方程下的法向量

$$
\boldsymbol {n} = \pm (A, B, C).
$$

于是

$$
\left( \begin{array}{c} \cos \alpha \\ \cos \beta \\ \cos \gamma \end{array} \right) = \pm \left( \begin{array}{c} \frac {A}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} \\ \frac {B}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} \\ \frac {C}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} \end{array} \right).
$$

由此可以看出, 其中 $\pm$ 号的选取应该是使 $\pm(A, B, C)$ 的方向与 S 所选的那一侧的法向量 $(\cos \alpha, \cos \beta, \cos \gamma)$ 的方向一致. 另一方面, 由 $A^{2} + B^{2} + C^{2} = EG - F^{2}$ 得到

$$
\mathrm{d} S = \sqrt {A ^ {2} + B ^ {2} + C ^ {2}} \mathrm{d} u \mathrm{d} v,
$$

于是 $(25.3)$ 式成立.

例题25.5.2 求第二类曲面积分

$$
\iint_ {S} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y,
$$

其中 $S$ 是柱体 $x^{2} + y^{2}\leqslant 1$ 被两个平面 $z = 0$ 和 $z = 4$ 所截部分的边界，积分沿边界的外侧.

解 设上底面为 $S_{1}$ ，下底面为 $S_{2}$ ，侧面为 $S_{3}$ ，则

$$
\iint_ {S _ {1}} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y = \iint_ {S _ {1}} z \mathrm{d} x \mathrm{d} y = 4 \iint_ {S _ {1}} \mathrm{d} x \mathrm{d} y = 4 \pi .
$$

在 $S_{2}$ 上， $z = \mathrm{d}z = 0$ ，于是在 $S_{2}$ 上的积分为零。下面计算在 $S_{3}$ 上的积分。令

$$
x = \cos \theta , y = \sin \theta , z = z,
$$

$$
(\theta , z) \in D = \{0 \leqslant \theta \leqslant 2 \pi , 0 \leqslant z \leqslant 4 \},
$$

则

$$
A = \cos \theta , B = \sin \theta , C = 0.
$$

于是

$$
\iint_ {S _ {3}} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y = \iint_ {D} (\cos^ {2} \theta + \sin^ {2} \theta) \mathrm{d} \theta \mathrm{d} z = 8 \pi .
$$

这里积分号前取正号是因为向量 $(A, B, C)$ 与柱面外侧法方向一致，最后得到

$$
\iint_ {S} x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y = 1 2 \pi .
$$

#### 3. 球面上的曲面积分（证明关系式(25.28))

若曲面 $S$ 是以 $M_0 = (x_0, y_0, z_0)$ 为球心， $r$ 为半径的球面 $\partial B_r(M_0)$ ，则其参数方程为

$$
\begin{array}{c} x = x _ {0} + r \sin \varphi \cos \theta , y = y _ {0} + r \sin \varphi \sin \theta , z = z _ {0} + r \cos \varphi , \\ 0 \leqslant \theta \leqslant 2 \pi , 0 \leqslant \varphi \leqslant \pi . \end{array}
$$

由此计算出

$$
\begin{array}{l} {E = x _ {\theta} ^ {2} + y _ {\theta} ^ {2} + z _ {\theta} ^ {2} = r ^ {2} \sin^ {2} \varphi ,} \\ {F = x _ {\theta} x _ {\varphi} + y _ {\theta} y _ {\varphi} + z _ {\theta} z _ {\varphi} = 0,} \\ {G = x _ {\varphi} ^ {2} + y _ {\varphi} ^ {2} + z _ {\varphi} ^ {2} = r ^ {2},} \end{array}
$$

于是

$$
\sqrt {E G - F ^ {2}} = r ^ {2} \sin \varphi .
$$

与直角坐标系中三重积分化为球坐标积分的Jacobi行列式一样，但这里的 $r$ 是常数.于是

$$
\begin{array}{l} \oiint_ {\partial B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} S _ {r} \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi} f (x _ {0} + r \sin \varphi \cos \theta , y _ {0} + r \sin \varphi \sin \theta , z _ {0} + r \cos \varphi) r ^ {2} \sin \varphi \mathrm{d} \theta \mathrm{d} \varphi , \end{array}\tag{25.23}
$$

其中 $dS_{r}$ 是半径为 r 的球面的面积元. 从上面的计算可以看出

$$
\mathrm{d} S _ {r} = r ^ {2} \sin \varphi \mathrm{d} \theta \mathrm{d} \varphi ,\tag{25.24}
$$

$$
\mathrm{d} S _ {1} = \sin \varphi \mathrm{d} \theta \mathrm{d} \varphi ,\tag{25.25}
$$

于是就有

$$
\mathrm{d} S _ {r} = r ^ {2} \mathrm{d} S _ {1},\tag{25.26}
$$

如果记

$$
\sin \varphi \cos \theta = \alpha_ {1}, \quad \sin \varphi \sin \theta = \alpha_ {2}, \quad \cos \varphi = \alpha_ {3},
$$

注意这里 $\alpha_{1},\alpha_{2},\alpha_{3}$ 都是 $\varphi ,\theta$ 的函数，则(25.23)可改写为

$$
\begin{array}{r l} \iint_ {\partial B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} S _ {r} & = \iint_ {\partial B _ {r} (\mathbf {0})} f (x _ {0} + r \alpha_ {1}, y _ {0} + r \alpha_ {2}, z _ {0} + r \alpha_ {3}) \mathrm{d} S _ {r} \\ & = r ^ {2} \iint_ {\partial B _ {1} (\mathbf {0})} f (x _ {0} + r \alpha_ {1}, y _ {0} + r \alpha_ {2}, z _ {0} + r \alpha_ {3}) \mathrm{d} S _ {1}. \end{array}\tag{25.27}
$$

另一方面， $(\alpha_{1}, \alpha_{2}, \alpha_{3})$ 恰是球面 $\partial B_{r}(\mathbf{0})$ （也是 $\partial B_{1}(\mathbf{0})$ ）上的单位法向量 $n$ ，方向指向球面的外部，因此上述表达式又可以简写为

$$
\begin{array}{r l} \oint_ {\partial B _ {r} (M _ {0})} f (x, y, z)   \mathrm{d} S _ {r} & = \oint_ {\partial B _ {r} (\mathbf {0})} f (M _ {0} + r \mathbf {n})   \mathrm{d} S _ {r} \\ & = r ^ {2} \oint_ {\partial B _ {1} (\mathbf {0})} f (M _ {0} + r \mathbf {n})   \mathrm{d} S _ {1}. \end{array}\tag{25.28}
$$

例题25.5.3设 $B_{r}(M_0)$ 是以 $M_0 = (x_0,y_0,z_0)$ 为心， $r$ 为半径的球， $\partial B_r(M_0)$ 是以 $M_0 = (x_0,y_0,z_0)$ 为心， $r$ 为半径的球面，证明：

$$
\begin{array}{l} (1) \iiint_ {B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \int_ {0} ^ {r} \oiint_ {\partial B _ {\rho} (M _ {0})} f (x, y, z) \mathrm{d} S _ {\rho} \mathrm{d} \rho , \\ (2) \frac {\mathrm{d}}{\mathrm{d} r} \iiint_ {B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z = \oiint_ {\partial B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} S _ {r}. \end{array}
$$

证 只证 (1), 因为在 (1) 的两边对 $r$ 求导便得到 (2). 作球坐标变换

$$
\begin{array}{r l} x = x _ {0} + \rho \sin \varphi \cos \theta , y = y _ {0} + \rho \sin \varphi \sin \theta , z = z _ {0} + \rho \cos \varphi , \\ 0 \leqslant \theta \leqslant 2 \pi , 0 \leqslant \varphi \leqslant \pi , 0 \leqslant \rho \leqslant r. \end{array}
$$

则

$$
\begin{array}{l} \iiint_ {B _ {r} (M _ {0})} f (x, y, z) \mathrm{d} x \mathrm{d} y \mathrm{d} z \\ = \int_ {0} ^ {r} \int_ {0} ^ {\pi} \int_ {0} ^ {2 \pi} f (x _ {0} + \rho \sin \varphi \cos \theta , y _ {0} + \rho \sin \varphi \sin \theta , z _ {0} + \rho \cos \varphi) \rho^ {2} \sin \varphi \mathrm{d} \theta \mathrm{d} \varphi \mathrm{d} \rho \\ = \int_ {0} ^ {r} \oiint_ {\partial B _ {\rho} (M _ {0})} f (x, y, z) \mathrm{d} S _ {\rho} \mathrm{d} \rho . \end{array}
$$

最后一个等号是由(25.23)得出.

### 25.5.2 学习要点

1. 求空间第二型曲线积分 $\int_{C} P \, \mathrm{d}x + Q \, \mathrm{d}y + R \, \mathrm{d}z$ 的几种方法:

(1) 用 Stokes 公式化为第二型曲面积分;

(2) 若满足 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}, \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$ , 如果曲线 $C$ 不封闭, 可考虑用求出原函数的方法;

(3) 利用曲线的参数方程化为定积分求解.

2. 求空间第二型曲面积分的几种方法:

(1) 用 Stokes 公式化为第二型曲线积分;

(2) 用 Gauss 公式化为三重积分;

(3) 利用曲面的参数方程化为二重积分求解, 要特别注意积分号前正负号的确定, 这在 25.2.1 和 25.5.1 小节中已分析得比较透彻了.

3. 计算第一型曲面积分一般都直接应用公式 (25.1) 或 (25.2)，若计算过于复杂，则可考虑利用两类曲面积分之间的关系转化为求第二型曲面积分.

4. 利用曲线积分与路径无关的条件可以判断原函数的存在并求出原函数，求原函数的两种方法见例题25.3.6. 同时利用曲线积分与路径无关的条件还可以简化曲线积分的计算，当在原来的路径上曲线积分的计算较复杂时，可换一条新的路径，使得曲线积分在新的路径上的计算可能变得简单.

5. 在球面上的曲面积分看似简单,实际上有很多技巧.

(1) 若把球心移到坐标原点, 用球坐标系中的 $\theta, \varphi$ 作为球面的参数方程中的参数时, 向量

$$
(\sin \varphi \cos \theta , \sin \varphi \sin \theta , \cos \varphi)
$$

的长度为1, 方向与该点的矢径的方向相同, 因此它就是球面上的单位外法向量, 这在应用 Gauss 公式时带来一些运算上的方便.

(2) 在公式 (25.28) 中的两个表达式

$$
\oiint_ {\partial B _ {r} (\mathbf {0})} f (M _ {0} + r \boldsymbol {n}) \mathrm{d} S _ {r}, \quad r ^ {2} \oiint_ {\partial B _ {1} (\mathbf {0})} f (M _ {0} + r \boldsymbol {n}) \mathrm{d} S _ {1}
$$

各有用处. 前者表达简捷, 但由于积分限与被积函数中都有 r, 因此需要对 r 求导数时, 用后者方便.

(3) 例题 25.5.3 中的两个结论是非常有用的关系式.

### 25.5.3 参考题

1. 设 S 是平面 $x + y + z = t$ 上被球面 $x^{2} + y^{2} + z^{2} = 1$ 所割下的部分，

$$
\varphi (x, y, z) = \left\{ \begin{array}{l l} {1 - x ^ {2} - y ^ {2} - z ^ {2},} & {\text {当} x ^ {2} + y ^ {2} + z ^ {2} \leqslant 1,} \\ {0,} & {\text {当} x ^ {2} + y ^ {2} + z ^ {2} > 1.} \end{array} \right.
$$

证明：

$$
\iint_ {S} \varphi (x, y, z)   \mathrm{d} S = \left\{ \begin{array}{l l} { \frac {\pi}{1 8} (3 - t ^ {2}) ^ {2},} & {\text {当}   | t | \leqslant \sqrt {3},} \\ {0,} & {\text {当}   | t | > \sqrt {3}.} \end{array} \right.
$$

2. 证明：

$$
\int_ {0} ^ {2 \pi} \mathrm{d} x \int_ {0} ^ {\pi} \sin y \mathrm{e} ^ {\sin y (\cos x - \sin x)} \mathrm{d} y = \sqrt {2} \pi (\mathrm{e} ^ {\sqrt {2}} - \mathrm{e} ^ {- \sqrt {2}}).
$$

3. 设 $\Omega$ 为空间第一卦限中的区域, 函数 $f(x, y, z)$ 在 $\Omega$ 上有连续一阶偏导数. $S$ 为 $\Omega$ 中任一光滑闭曲面, 试给出第二型曲面积分

$$
\iint_ {S} f (x, y, z) (x \mathrm{d} y \mathrm{d} z + y \mathrm{d} z \mathrm{d} x + z \mathrm{d} x \mathrm{d} y) = 0
$$

的充分必要条件，并证明之.

4. 设 $\Sigma$ 是光滑的闭曲面，围成的区域为 $\Omega, n$ 为 $\Sigma$ 上单位外法向量， $(x_{0}, y_{0}, z_{0})$ 为 $\Omega$ 内固定一点， $(x, y, z) \in \Sigma, r = (x - x_{0}, y - y_{0}, z - z_{0})$ ，证明：

$$
\oiint_ {\Sigma} \cos (\boldsymbol {n}, \boldsymbol {r}) \mathrm{d} S = 2 \iiint_ {\Omega} \frac {\mathrm{d} x \mathrm{d} y \mathrm{d} z}{| \boldsymbol {r} |}.
$$

5. 已给平面 $\Pi: Ax + By + Cz = D$ , 对于 $\Pi$ 的任一定向, 求 $w = P(x, y, z) \mathrm{d}x + Q(x, y, z) \mathrm{d}y + R(x, y, z) \mathrm{d}z$ , 使得沿 $\Pi$ 上任意逐段光滑简单封闭曲线 $\Gamma$ ( $\Gamma$ 的定向与 $\Pi$ 的定向一致) 恒有

$$
\oint_ {\Gamma} w = S (\Gamma),
$$

其中 $S(\Gamma)$ 为 $\Gamma$ 在 $\Pi$ 上所围区域的面积.

6. 设 $\Gamma$ 是 $\mathbf{R}^3$ 中逐段光滑简单封闭定向曲线, 对于 $(x, y, z) \notin \Gamma$ , 定义

$$
\begin{array}{l} P (x, y, z) = \oint_ {\Gamma} \frac {(\zeta - z) \mathrm{d} \eta - (\eta - y) \mathrm{d} \zeta}{r ^ {3}}, \\ Q (x, y, z) = \oint_ {\Gamma} \frac {(\xi - x) \mathrm{d} \zeta - (\zeta - z) \mathrm{d} \xi}{r ^ {3}}, \\ R (x, y, z) = \oint_ {\Gamma} \frac {(\eta - y) \mathrm{d} \xi - (\xi - x) \mathrm{d} \eta}{r ^ {3}}, \end{array}
$$

其中 $(\xi, \eta, \zeta) \in \Gamma$ 是积分变元，

$$
r = \sqrt {(\xi - x) ^ {2} + (\eta - y) ^ {2} + (\zeta - z) ^ {2}}.
$$

证明：

$$
\frac {\partial Q}{\partial x} = \frac {\partial P}{\partial y}, \frac {\partial R}{\partial y} = \frac {\partial Q}{\partial z}, \frac {\partial P}{\partial z} = \frac {\partial R}{\partial x}.
$$

7. 在上题中求函数 $u(x,y,z)$ ，使得 $du = P dx + Q dy + R dz$ .

8. 利用 Gauss 公式证明 Archimedes 的流体静力学定律: 物体在液体中所受的浮力等于物体排开液体的重量, 方向垂直向上.
