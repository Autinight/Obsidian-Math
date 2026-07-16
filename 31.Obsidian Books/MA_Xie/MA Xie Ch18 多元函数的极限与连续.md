# 第十八章 多元函数的极限与连续

本章讨论多元函数的极限与连续性. 其中 §18.1 引进重极限与累次极限的概念, 讨论了它们的相互关系, 并介绍了一些常用方法. §18.2 讨论多元函数的连续性, 介绍了一些多元函数连续的充分条件及以集合语言刻画连续性的命题, 然后介绍紧集上的连续函数性质及其应用, 最后对于向量值函数介绍了 $\mathbf{R}^n$ 中的压缩映射原理. §18.3 是学习要点和两组参考题.

## §18.1 多元函数的极限

### 18.1.1 重极限

设点 $a \in \mathbf{R}^n$ , $n$ 元函数 $f$ 在 $a$ 的某个去心邻域中有定义, $A$ 为某一常数. 若

$\forall\varepsilon>0,\exists\delta>0,$ 当 $0<|x-a|<\delta$ 时，有 $|f(x)-A|<\varepsilon,$ 

则称 n 元函数 $f(x)$ 当 $x \to a$ 时以 A 为极限（又称它是 n 重极限），记为

$$
\lim _ {\pmb {x} \to \pmb {a}} f (\pmb {x}) = A \text {或简记为} f (\pmb {x}) \to A (\pmb {x} \to \pmb {a}).
$$

用邻域的语言来描述, 就是

$$
\forall \varepsilon > 0, \exists \delta > 0, \text {当} \pmb {x} \in O _ {\delta} (\pmb {a}) \setminus \{\pmb {a} \} \text {时,有} f (\pmb {x}) \in O _ {\varepsilon} (A).
$$

注 在定义重极限时, 可以放宽对函数定义域的要求, 只要 a 是定义域的聚点即可.

从邻域的观点看, 多元函数极限的定义与一元函数极限的定义完全一样. 但现在是在高维空间中讨论, $x \to a$ 是指点 $x$ 以任何方式或沿任何曲线趋于点 $a$ . 其趋近方式要比一元函数的情形复杂得多. 一个简单的例子是讨论 $f(x, y) = \frac{xy}{x^2 + y^2}$ 在点 $(0,0)$ 的二重极限是否存在. 容易看出, 当点 $(x, y)$ 沿直线 $y = mx$ (其中 $m$ 为任意实数) 趋于点 $(0,0)$ 时, $f(x, y)$ 的极限为 $\frac{m}{1 + m^2}$ , 与 $m$ 有关. 由此可以看出这个二元函数 $f(x, y)$ 在点 $(0,0)$ 的二重极限不存在.

与一元函数相仿, 也可以定义自变量趋于 $\pm \infty$ 或 $\infty$ 时的极限, 但现在是多个自变量, 于是可以出现某一些自变量趋于一个定数, 而另一些自变量趋于 $\pm \infty$ 或 $\infty$ 的情形. 以两个自变量为例, 可举出下述几种极限:

$$
\begin{array}{c} {(1) \lim _ {(x, y) \to (\infty , \infty)} f (x, y) = A \Longleftrightarrow \forall \varepsilon > 0, \exists M > 0, \text {当} | x | > M, | y | > M \text {时},} \\ {| f (x, y) - A | <   \varepsilon ;} \end{array}
$$

$$
\begin{array}{c} {(2) \lim _ {(x, y) \to (x _ {0}, + \infty)} f (x, y) = A \Longleftrightarrow \forall   \varepsilon > 0, \exists   \delta , M > 0, \text {当} 0 <   | x - x _ {0} | <   \delta ,} \\ {y > M \text {时}, | f (x, y) - A | <   \varepsilon ;} \end{array}
$$

(3) 

$$
\lim _ {(x, y) \to (- \infty , y _ {0})} f (x, y) = A \Longleftrightarrow \forall   \varepsilon > 0,   \exists   \delta ,   M > 0,   \text {当}   x <   - M,
$$

$$
0 <   | y - y _ {0} | <   \delta   \text {时,}   | f (x, y) - A | <   \varepsilon .
$$

还有其他一些情形, 在此不一一列举. 此外当 A 为 $\pm\infty$ 或 $\infty$ 时, 与一元函数类似, 我们称之为广义极限或极限不存在 (参见上册 98 页).

多元函数的极限的惟一性、局部有界性、局部保号性、局部比较原理、四则运算法则、Cauchy 收敛准则以及 Heine 归结原理的叙述与论证完全与一元函数相仿，这里就不再重复了（参见上册第四章）.

求多元函数的极限有如下常用方法:

1. 利用函数的连续性和函数极限的运算性质 (多元函数的连续性将在下一节讨论);

2. 利用不等式缩放或使用夹逼定理;

3. 利用变量替换化简或化为已知极限. 对含有三角函数或幂指函数的二重极限可考虑它是否能通过变形或变量代换化为一元函数中的基本极限, 如

$$
\lim _ {t \rightarrow 0} \frac {\sin t}{t} = 1, \quad \lim _ {t \rightarrow 0} \frac {\tan t}{t} = 1, \quad \lim _ {t \rightarrow \infty} (1 + \frac {1}{t}) ^ {t} = e
$$

等 (参见上册 116 页题 9), 然后利用这些基本极限去求重极限的值;

4. 利用初等变形, 如分母有理化、对指数形式取对数等等.

例题18.1.1 求 $\lim_{(x,y)\to (0,0)}\frac{x^3 + y^3}{x^2 + y^2}.$ 

分析 直观上看分子的多项式次数高于分母的多项式次数, 极限应该是 0. 这种题目一般用极坐标变换后可化为一个有界量与无穷小量的乘积.

解 令 $x = r\cos \theta, y = r\sin \theta,$ 则

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {x ^ {3} + y ^ {3}}{x ^ {2} + y ^ {2}} = \lim _ {r \rightarrow 0} r (\cos^ {3} \theta + \sin^ {3} \theta) = 0.
$$

例题18.1.2 求 $\lim_{(x,y)\to (0,0)}\frac{\sin(x^3 + y^3)}{x^2 + y^2}.$ 

解 由于

$$
\left| \sin (x ^ {3} + y ^ {3}) \right| \leqslant | x | ^ {3} + | y | ^ {3} \leqslant (| x | + | y |) (x ^ {2} + y ^ {2}),
$$

从而

$$
\lim _ {(x, y) \rightarrow (0, 0)} \left| \frac {\sin (x ^ {3} + y ^ {3})}{x ^ {2} + y ^ {2}} \right| \leqslant \lim _ {(x, y) \rightarrow (0, 0)} (| x | + | y |) = 0.
$$

所以

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {\sin (x ^ {3} + y ^ {3})}{x ^ {2} + y ^ {2}} = 0.
$$

注 也可对 $\sin (x^3 + y^3)$ 用一元Taylor展式

$$
\sin (x ^ {3} + y ^ {3}) = x ^ {3} + y ^ {3} + o (| x | ^ {3} + | y | ^ {3}) (| x | + | y | \rightarrow 0).
$$

例题18.1.3 求 $\lim_{(x,y)\to (0,0)}f(x,y)$ ，其中

$$
f (x, y) = \left\{ \begin{array}{l l} { \frac {\sin x y}{x},} & {\text {当} x \neq 0,} \\ {y,} & {\text {当} x = 0, y \neq 0.} \end{array} \right.
$$

解 由于

$$
| f (x, y) | = \left\{ \begin{array}{l l} {\Big | \frac {\sin x y}{x} \Big | \leqslant | y |,} & {\text {当} x \neq 0,} \\ {| y |,} & {\text {当} x = 0, y \neq 0,} \end{array} \right.
$$

所以

$$
\lim _ {(x, y) \rightarrow (0, 0)} | f (x, y) | \leqslant \lim _ {(x, y) \rightarrow (0, 0)} | y | = 0.
$$

于是

$$
\lim _ {(x, y) \to (0, 0)} f (x, y) = 0.
$$

例题18.1.4 求极限

$$
\lim _ {(x, y) \rightarrow (0, 0)} (x ^ {2} + y ^ {2}) ^ {x y}.
$$

解 先求其对数的极限 $\lim_{(x,y)\to (0,0)}xy\ln (x^2 +y^2)$ 设 $r = \sqrt{x^2 + y^2}$ ，由于

$$
\left| x y \ln \left(x ^ {2} + y ^ {2}\right)\right| \leqslant r ^ {2} \ln r ^ {2} \rightarrow 0 \quad (r \rightarrow 0 ^ {+}),
$$

所以

$$
\lim _ {(x, y) \rightarrow (0, 0)} x y \ln (x ^ {2} + y ^ {2}) = 0,
$$

故

$$
\lim _ {(x, y) \rightarrow (0, 0)} (x ^ {2} + y ^ {2}) ^ {x y} = 1.
$$

例题 18.1.5 证明:

$$
\lim _ {(x, y) \rightarrow (+ \infty , + \infty)} \left(\frac {x y}{x ^ {2} + y ^ {2}}\right) ^ {x ^ {2}} = 0.
$$

证 此题底数的极限并不存在, 但可用夹逼方法. 注意到 x > 0, y > 0 时

$$
0 <   \frac {x y}{x ^ {2} + y ^ {2}} \leqslant \frac {1}{2},
$$

所以

$$
0 <   \left(\frac {x y}{x ^ {2} + y ^ {2}}\right) ^ {x ^ {2}} \leqslant \left(\frac {1}{2}\right) ^ {x ^ {2}}.
$$

由于 $\lim_{(x,y)\to (+\infty , + \infty)}\left(\frac{1}{2}\right)^{x^2} = 0,$ 从而有

$$
\lim _ {(x, y) \rightarrow (+ \infty , + \infty)} \left(\frac {x y}{x ^ {2} + y ^ {2}}\right) ^ {x ^ {2}} = 0.
$$

关于证明重极限不存在的方法, 我们将在累次极限之后介绍.

### 18.1.2 累次极限

为方便起见, 在 $R^{2}$ 中讨论, 设 $f(x,y)$ 在点 $(x_{0},y_{0})$ 的某个去心邻域上有定义, 称下列两个极限 (如果存在的话)

$$
\lim _ {y \to y _ {0}} \lim _ {x \to x _ {0}} f (x, y), \quad \lim _ {x \to x _ {0}} \lim _ {y \to y _ {0}} f (x, y)
$$

分别是函数 f 在点 $(x_{0}, y_{0})$ 的先 x 后 y 的二次极限和先 y 后 x 的二次极限，统称它们是累次极限.

重极限与累次极限的关系反映在下面的命题中.

命题18.1.1当重极限存在且 $\lim_{(x,y)\to (x_0,y_0)}f(x,y) = A$ 时，

(1) 如果 $y \neq y_0$ 时， $\lim_{x \to x_0} f(x, y)$ 存在，则 $\lim_{y \to y_0} \lim_{x \to x_0} f(x, y) = A;$ 

(2) 如果 $x \neq x_0$ 时, $\lim_{y \to y_0} f(x, y)$ 存在, 则 $\lim_{x \to x_0} \lim_{y \to y_0} f(x, y) = A$ .

由此命题可见: 当重极限和某个累次极限都存在时, 则该累次极限的值应该等于重极限的值. 但在一般情况下, 重极限与累次极限没有什么必然的关系.

当重极限存在时, 两个二次极限可以都不存在, 也可以一个存在而另一个不存在, 例如

$$
f (x, y) = \left\{ \begin{array}{l l} x \sin \frac {1}{y}, & y \neq 0, \\ 0, & y = 0. \end{array} \right.
$$

此时 $\lim_{(x,y)\to (0,0)}f(x,y) = \lim_{y\to 0}\lim_{x\to 0}f(x,y) = 0,$ 但 $\lim_{x\to 0}\lim_{y\to 0}f(x,y)$ 不存在.

当重极限不存在时, 可以是两个二次极限存在且相等, 也可以是两个二次极限存在但不相等, 还可以是两个二次极限中一个存在而另一个不存在. 例如

$$
f (x, y) = \frac {y}{x}, \text {当} x \neq 0,
$$

显然有 $\lim_{x\to 0}\lim_{y\to 0}f(x,y) = 0,$ 但是 $\lim_{(x,y)\to (0,0)}f(x,y)$ 与 $\lim_{y\to 0}\lim_{x\to 0}f(x,y)$ 都不存在.

### 18.1.3 证明函数的重极限不存在的常用方法

1. 找两种特殊的趋近方式, 使得在两种方式下函数的极限值不同. 例如

$$
f (x, y) = \left\{ \begin{array}{l l} 0, & x ^ {2} \leqslant | y | \text {或} y = 0, \\ 1, & \text {其他}. \end{array} \right.
$$

当点 $(x,y)$ 沿过原点的任何直线y=kx趋于点 $(0,0)$ 时，有

$$
\lim _ {(x, y = k x) \rightarrow (0, 0)} f (x, y) = 0.
$$

但点 $(x,y)$ 沿曲线 $y = \frac{1}{2} x^2$ 趋于点 $(0,0)$ 时

$$
\lim _ {(x, y = x ^ {2} / 2) \rightarrow (0, 0)} f (x, y) = 1,
$$

所以 $f(x,y)$ 在点 $(0,0)$ 处的重极限不存在.

2. 证明两个累次极限存在但不相等, 例如

$$
f (x, y) = \frac {x ^ {2} - y ^ {2}}{x ^ {2} + y ^ {2}},
$$

由于

$$
\begin{array}{l} \lim _ {x \to 0} \lim _ {y \to 0} f (x, y) = 1, \\ \lim _ {y \to 0} \lim _ {x \to 0} f (x, y) = - 1, \end{array}
$$

可见重极限不存在. 因为如果重极限存在, 两个累次极限又存在, 由命题 18.1.1 知道三个极限值应该相等.

### 18.1.4 思考题

1. 证明多元函数极限的 Heine 归结原理: 设点 $a \in \mathbf{R}^n, A \in \mathbf{R}$ , 则 $\lim_{x \to a} f(x) = A$ 的充分必要条件是: 对满足条件 $x_n \neq a (n = 1, 2, \cdots)$ , $\lim_{n \to \infty} x_n = a$ 的每个点列 $\{x_n\}$ , 都有 $\lim_{n \to \infty} f(x_n) = A$ . (参见上册 104-105 页.)

2. 证明多元函数极限的 Cauchy 收敛准则: 函数 $f(\boldsymbol{x})$ 在点 $\boldsymbol{a}$ 有极限的充分必要条件是对每一个 $\varepsilon > 0$ , $\exists \delta > 0$ , 使得对于 $O_{\delta}(\boldsymbol{a}) \setminus \{\boldsymbol{a}\}$ 中的每一对点 $\boldsymbol{x}'$ , $\boldsymbol{x}''$ , 满足不等式 $|f(\boldsymbol{x}') - f(\boldsymbol{x}'')| < \varepsilon$ .

### 18.1.5 关于累次极限换序

命题 18.1.1 告诉我们, 如果在某一点二元函数的重极限与两个累次极限都存在, 则对 x 和 y 取极限的顺序可以交换, 即

$$
\lim _ {x \to x _ {0}} \lim _ {y \to y _ {0}} f (x, y) = \lim _ {y \to y _ {0}} \lim _ {x \to x _ {0}} f (x, y).
$$

如果我们并不知道重极限是否存在或者甚至知道重极限不存在, 那么在什么条件下, 累次极限可以交换次序呢? 下面的命题回答了这个问题.

命题 18.1.2 $f(x,y)$ 在点 $(x_{0},y_{0})$ 的一个去心邻域上有定义, 如果

(1) 对 $x_0$ 临近的每个 $x \neq x_0$ , $\lim_{y \to y_0} f(x, y) = g(x)$ 存在;

(2) $\lim_{x\to x_0}f(x,y) = h(y)$ 关于 $y$ 在 $0 < |y - y_0| < \eta$ 上一致，则 $\lim_{x\to x_0}g(x) = \lim_{y\to y_0}h(y)$ ，即

$$
\lim _ {x \rightarrow x _ {0}} \lim _ {y \rightarrow y _ {0}} f (x, y) = \lim _ {y \rightarrow y _ {0}} \lim _ {x \rightarrow x _ {0}} f (x, y).
$$

分析 这是一个极限换序问题, 而条件 (2) 已给出对 $y$ 的一致性, 这使我们想到利用一致收敛的函数列与求极限的有关性质 (参见在 14.2.1 小节中的讨论).

证 1 根据 Heine 归结原理, 我们只要证明 $\forall x_{n}, x_{n} \neq x_{0}, n = 1, 2, \cdots, x_{n} \rightarrow x_{0}$ , 都有

$$
\lim _ {n \rightarrow \infty} g (x _ {n}) = \lim _ {y \rightarrow y _ {0}} h (y).
$$

为此, 我们定义 $f_{n}(y) = f(x_{n}, y)$ . 由条件 (2) 知函数列 $\{f_{n}(y)\}$ 在 $y_{0}$ 的去心邻域 $0 < |y - y_{0}| < \eta$ 上一致收敛, 因此有

$$
\lim _ {n \rightarrow \infty} f _ {n} (y) = \lim _ {n \rightarrow \infty} f (x _ {n}, y) = h (y).
$$

另一方面，由条件(1)得到

$$
\lim _ {y \rightarrow y _ {0}} f _ {n} (y) = \lim _ {y \rightarrow y _ {0}} f (x _ {n}, y) = g (x _ {n}).
$$

由一致收敛的函数列求极限的性质（见命题14.2.1）知下列两个极限存在且相等：

$$
\lim _ {n \rightarrow \infty} g (x _ {n}) = \lim _ {y \rightarrow y _ {0}} h (y).
$$

再由 Heine 归结原理, 得到

$$
\lim _ {x \rightarrow x _ {0}} g (x) = \lim _ {y \rightarrow y _ {0}} h (y).
$$

证2 直接证明. 由于 $\lim_{x\to x_0}f(x,y) = h(y)$ 在 $0 < |y - y_0| < \eta$ 上对 $y$ 一致, 于是 $\forall \varepsilon > 0, \exists \delta > 0$ , 当 $0 < |x' - x_0| < \delta$ 且 $0 < |x'' - x_0| < \delta$ 时, $|f(x',y) - f(x'',y)| < \varepsilon$ 对 $y \in O_{\eta}(y_0) \setminus \{y_0\}$ 一致. 令 $y \to y_0$ 得到

$$
\left| g (x ^ {\prime}) - g (x ^ {\prime \prime}) \right| \leqslant \varepsilon .
$$

由 Cauchy 收敛准则， $\lim_{x\to x_{0}}g(x)$ 存在，记为 A. 由此可知 $\forall\varepsilon>0,\exists\delta_{1}>0,$ 当 $0<|x-x_{0}|<\delta_{1}$ 时

$$
| g (x) - A | <   \varepsilon / 3,
$$

又由条件(2)知同时还可以成立

$$
| h (y) - f (x, y) | <   \varepsilon / 3, \forall   y \in O _ {\eta} (y _ {0}) \setminus \{y _ {0} \}.
$$

取定 $\overline{x} \in O_{\delta_1}(x_0) \setminus \{x_0\}$ . 由条件 (1) 知 $\exists \delta \in (0, \eta)$ , 使得当 $0 < |y - y_0| < \delta$ 时

$$
\left| f (\overline {{{x}}}, y) - g (\overline {{{x}}}) \right| <   \varepsilon / 3,
$$

从而当 $0 < |y - y_0| < \delta$ 时

$$
\left| h (y) - A \right| \leqslant \left| h (y) - f (\overline {{x}}, y) \right| + \left| f (\overline {{x}}, y) - g (\overline {{x}}) \right| + \left| g (\overline {{x}}) - A \right| <   \varepsilon ,
$$

于是

$$
\lim _ {y \to y _ {0}} h (y) = A.
$$

### 18.1.6 练习题

1. 求下列极限：

(1) $\lim_{(x,y)\to(0,a)}\frac{\sin xy}{x};$ 

(2) $\lim_{(x,y)\to(0,0)}(x+y)\ln(x^{2}+y^{2});$ 

(3) $\lim_{(x,y)\to(0,0)}f(x,y)$ ，其中

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {\ln (1 + x y)}{x}, & \text {当} x \neq 0, \\ y, & \text {当} x = 0; \end{array} \right.
$$

(4) $\lim_{(x,y)\to (\infty ,0)}\left(1 + \frac{1}{x}\right)^{\frac{x^2}{x + y}};$ 

$$
\lim _ {(x, y) \rightarrow (\infty , \infty)} \frac {x + y}{x ^ {2} - x y + y ^ {2}}. \tag {5}
$$

2. 证明: $\lim_{(x,y)\to (0,0)}\frac{x^2y^2}{x^3 + y^3}$ 不存在.

3. 讨论下列函数在点 $(0,0)$ 的重极限与累次极限：

$$
\frac {x ^ {2} y ^ {2}}{x ^ {2} y ^ {2} + (x - y) ^ {2}}; \tag {1}
$$

$$
(2) (x + y) \sin \frac {1}{x} \sin \frac {1}{y};
$$

$$
(3) f (x, y) = \left\{ \begin{array}{l l} { \frac {x y}{x ^ {2} + y ^ {2}} + y \sin \frac {1}{x},} & {\text {当} x \neq 0,} \\ {0,} & {\text {当} x = 0.} \end{array} \right.
$$

4. 设一元函数 $f(t)$ 在 $\mathbf{R}$ 上有连续导数, 定义二元函数

$$
g (x, y) = \frac {f (x) - f (y)}{x - y}, \quad \text {当} x \neq y,
$$

求 $\lim_{(x,y)\to(t,t)}g(x,y)$ .

5. 叙述并证明二元函数极限存在的惟一性定理、局部有界性定理与局部保号性定理.

6. 设 $\lim_{y\to y_{0}}\varphi(y)=A,\lim_{x\to x_{0}}\psi(x)=0,$ 且在点 $(x_{0},y_{0})$ 附近有 $|f(x,y)-\varphi(y)|\leqslant\psi(x),$ 证明： $\lim_{(x,y)\to(x_{0},y_{0})}f(x,y)=A$ .

7. 证明：在命题18.1.2中若 $f(x, y)$ 除直线 $x = x_0, y = y_0$ 外有定义，其他条件不变，则重极限与两个累次极限都存在，并且相等.

## §18.2 多元函数的连续性

### 18.2.1 定义与基本性质

设 S 是 $R^{n}$ 中的点集, f 是定义在 S 上的函数, $x_{0} \in S$ 且是 S 的聚点. 若

$$
\lim _ {\boldsymbol {x} \rightarrow \boldsymbol {x} _ {0}} f (\boldsymbol {x}) = f (\boldsymbol {x} _ {0}),
$$

则称 $f$ 在点 $\pmb{x_0}$ 连续，否则就说 $f$ 在点 $\pmb{x_0}$ 不连续或间断.如果 $f$ 在 $S$ 上的每一点都连续，则称 $f$ 在 $S$ 上连续

从定义可以看出, 在形式上多元函数的连续性的定义与一元函数的连续性的定义是相同的. 因此在连续性方面多元函数也有许多与一元函数相同的性质, 如保号性, 和、差、积、商的连续性, 复合函数的连续性等, 它们的叙述与证明都是和一元函数相同的 (参见上册第五章).

但与多元极限情况类似的是: 一个多元函数如果对每个变元都连续, 则并不能推出它是一个多元连续函数. 例如函数

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {x y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0), \\ 0, & (x, y) = (0, 0) \end{array} \right.
$$

在全平面上对 x, y 都分别连续, 在原点当然也是如此, 但它作为二元函数在原点是不连续的 (见 147 页上的讨论).

例题18.2.1令

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {\ln (1 + x y)}{x}, & x \neq 0, \\ y, & x = 0, \end{array} \right.
$$

则 $f(x,y)$ 在其定义域上是连续的.

证 $f(x,y)$ 的定义域是 $\{(x,y) | xy > -1\}$ 且 $f(x,y)$ 在 $x \neq 0$ 处是连续的，所以只须证明 $f(x,y)$ 作为二元函数在 $y$ 轴上的每一点处连续. 以下分两种情况讨论.

(1) 在点 $(0,0)$ .

由于 $f(0,0) = 0$ ，而当 $x\neq 0$ 时

$$
f (x, y) = \frac {\ln (1 + x y)}{x} = \left\{ \begin{array}{l l} 0, & y = 0, \\ y \ln (1 + x y) ^ {\frac {1}{x y}}, & y \neq 0. \end{array} \right.
$$

又由于

$$
\lim _ {(x, y) \to (0, 0)} \ln (1 + x y) ^ {\frac {1}{x y}} = 1,
$$

从而 $\exists \delta_1 > 0$ ，当 $0 < |x| < \delta_1$ ， $0 < |y| < \delta_1$ 时

$$
\left| \frac {\ln (1 + x y)}{x} \right| \leqslant | y | \cdot \left| \ln (1 + x y) ^ {\frac {1}{x y}} \right| \leqslant 2 | y |.
$$

由 $f(x,y)$ 的表达式知只要 $|x| < \delta_1, |y| < \delta_1$ ，无论 $x = 0$ 还是 $x \neq 0$ 都有 $|f(x,y)| \leqslant 2|y|$ .

所以

$$
\lim _ {(x, y) \rightarrow (0, 0)} f (x, y) = 0 = f (0, 0).
$$

(2) 在点 $(0, y_{0})$ , $y_{0} \neq 0$ .

当 $x \neq 0$ 时

$$
\begin{array}{r l} | f (x, y) - f (0, y _ {0}) | & = \left| y \ln (1 + x y) ^ {\frac {1}{x y}} - y _ {0} \right| \\ & = \left| y \left[ \ln (1 + x y) ^ {\frac {1}{x y}} - 1 \right] + (y - y _ {0}) \right| \\ & \leqslant | y | \cdot \left| \ln (1 + x y) ^ {\frac {1}{x y}} - 1 \right| + | y - y _ {0} |. \end{array}
$$

而当 $x = 0$ 时

$$
\left| f (x, y) - f \left(0, y _ {0}\right) \right| = \left| y - y _ {0} \right|.
$$

注意到当 $y_0 \neq 0$ 时

$$
\lim _ {(x, y) \rightarrow (0, y _ {0})} \ln (1 + x y) ^ {\frac {1}{x y}} = 1.
$$

结合上述各式得

$$
\lim _ {(x, y) \rightarrow (0, y _ {0})} (f (x, y) - f (0, y _ {0})) = 0.
$$

所以 $f(x,y)$ 在点 $(0,y_{0})$ 处连续，从而在其定义域上是连续的.

例题18.2.2（多元函数连续的若干充分条件）设 $f(x,y)$ 在 $D\subset \mathbf{R}^2$ 上分别对 $x$ 和 $y$ 连续.证明：当下列条件之一满足时 $f(x,y)$ 是 $D$ 上的二元连续函数

(1) $f(x,y)$ 在 $D$ 上对 $x$ 连续且关于 $y$ 一致, 即 $\forall x_0, \forall \varepsilon > 0$ , $\exists \delta = \delta (\varepsilon, x_0) > 0$ (与 $y$ 无关), $|x - x_0| < \delta$ 时, $\forall y$ , 点 $(x,y), (x_0,y) \in D$ 恒有

$$
| f (x, y) - f (x _ {0}, y) | <   \varepsilon ;
$$

(2) $f(x,y)$ 在 $D$ 上对 $x$ 局部满足Lipschitz条件且关于 $y$ 一致，即： $\forall p_0 = (x_0,y_0)\in D,\exists r > 0$ 及 $L > 0,$ 使得 $\forall (x_1,y),(x_2,y)\in D\cap B_r(p_0)$ ，恒有

$$
\left| f \left(x _ {1}, y\right) - f \left(x _ {2}, y\right) \right| <   L \left| x _ {1} - x _ {2} \right|;
$$

(3) $f(x,y)$ 关于变量 $y$ 是单调的.

证 (1) 由定义, 并用拆项补项的方法.

(2) 逐点连续是局部性质, 可由定义并用拆项补项的方法来证.

(3) 为证 $f(x, y)$ 在点 $(x_0, y_0)$ 连续，可找 $(x_0, y_0)$ 的一个矩形邻域 $D_1 = [x_0 - \delta_1, x_0 + \delta_1] \times [y_0 - \delta_2, y_0 + \delta_2]$ . 先利用 $f(x_0, y)$ 在直线 $x = x_0$ 上的连续性，可选取 $\delta_2$ 足够小，使 $f$ 在 $D_1$ 的上下边中点 $(x_0, y_0 \pm \delta_2)$ 的值与 $f(x_0, y_0)$ 的误差不超过 $\frac{1}{2}\varepsilon$ ; 然后再由 $f(x, y_0 \pm \delta_2)$ 在直线 $y = y_0 \pm \delta_2$ 上的连续性，可取 $\delta_1$ 足够小，使 $f$ 在 $D_1$ 的上下边上的值与 $f(x_0, y_0)$ 的误差不超过 $\varepsilon$ . 最后利用 $f$ 关于 $y$ 的单调性，即可得 $f$ 在 $D_1$ 上的值与 $f(x_0, y_0)$ 的误差不超过 $\varepsilon$ .

连续性除了可用极限刻画之外, 也可用集合来刻画. 下面是一些等价描述.

命题18.2.1设 $f$ 是定义在 $\mathbf{R}^n$ 上的函数，则下述几个条件等价：

(1) $f(\pmb {x})$ 连续；

(2) 任何开集的原象是开集;

(3) 任何闭集的原象是闭集;

(4) 对 $\mathbf{R}^n$ 中的任意子集 $E$ , 有 $f(\overline{E}) \subset \overline{f(E)}$ .

证 我们采用循环证明的方法.

(1) $\Rightarrow$ (2): 设 $f(\pmb{x})$ 在 $\mathbf{R}^n$ 上连续, $A$ 是 $\mathbf{R}$ 中的任一开集. 如果 $f^{-1}(A)$ 是空集, 结论自然成立; 若 $f^{-1}(A)$ 非空, $\forall \pmb{x}_0 \in f^{-1}(A)$ , 则 $f(\pmb{x}_0) \in A$ . 而 $A$ 是 $\mathbf{R}$ 中开集, 于是存在 $\varepsilon > 0$ , 使得 $f(\pmb{x}_0)$ 的开邻域 $(f(\pmb{x}_0) - \varepsilon, f(\pmb{x}_0) + \varepsilon) \subset A$ . 由 $f(\pmb{x})$ 在点 $\pmb{x}_0$ 连续知 $\exists \delta > 0$ , 当 $|\pmb{x} - \pmb{x}_0| < \delta$ 时 $f(\pmb{x}) \in (f(\pmb{x}_0) - \varepsilon, f(\pmb{x}_0) + \varepsilon)$ . 于是 $O_{\delta}(\pmb{x}_0) = \{\pmb{x} \in \mathbf{R}^n \mid |\pmb{x} - \pmb{x}_0| < \delta\} \subset f^{-1}(A)$ , 从而 $f^{-1}(A)$ 为开集.

(2) $\Rightarrow$ (3): 设 S 是 R 中的任一集合, 则

$$
f ^ {- 1} (S ^ {c}) = [ f ^ {- 1} (S) ] ^ {c}.\tag{18.1}
$$

事实上，由于点 $x \in f^{-1}(S^c) \iff f(x) \in S^c$ ，而 $x \in [f^{-1}(S)]^c \iff x \notin f^{-1}(S) \iff f(x) \notin S$ ，由此可以看出 (18.1) 成立.

设 F 是 R 中的任一闭集, 由 (18.1) 得

$$
f ^ {- 1} (F) = f ^ {- 1} ((F ^ {c}) ^ {c}) = [ f ^ {- 1} (F ^ {c}) ] ^ {c}.
$$

由条件(2)及 $F^{c}$ 为开集知 $f^{-1}(F)$ 为闭集.

(3) $\Rightarrow$ (4): 要证 $f(\overline{E}) \subset \overline{f(E)}$ , 只要证 $\overline{E} \subset f^{-1}(\overline{f(E)})$ . 事实上, 下面的包含关系显然成立,

$$
E \subset f ^ {- 1} (f (E)) \subset f ^ {- 1} (\overline {{f (E)}}).
$$

又由条件(3)及 $\overline{f(E)}$ 是闭集知

$$
\overline {{{{E}}}} \subset f ^ {- 1} (\overline {{{{f (E)}}}}).
$$

(4) $\Rightarrow$ (1): 反证法. 若不然, $\exists x_{0} \in R^{n}$ , $f(x)$ 在点 $x_{0}$ 不连续, 由 Heine 归结原理知, $\exists \varepsilon_{0} > 0$ 及点列 $\{x_{n}, n = 1, 2, \cdots\}$ , $x_{n} \to x_{0}$ 但

$$
\left| f \left(\boldsymbol {x} _ {n}\right) - f \left(\boldsymbol {x} _ {0}\right) \right| \geqslant \varepsilon_ {0}.\tag{18.2}
$$

取 $E = \{\pmb{x}_n\}_{n\in \mathbf{N}_+}$ ，则 $\pmb{x_0}\in \overline{E},f(E) = \{f(\pmb {x}_n)\}_{n\in \mathbf{N}_+}$ 由条件(4）知 $f(x_0)\in$ $\overline{f(E)} = \overline{\{f(\pmb{x_n})\}}_{n\in \mathbf{N}_+}$ ，与(18.2）矛盾. □

例题18.2.3 函数 $f(x, y)$ 定义在正方形 $I_1 = \{(x, y) \mid 0 \leqslant x \leqslant 1, 0 \leqslant y \leqslant 1\}$ 上，在底边 $I_0 = \{(x, 0) \mid 0 \leqslant x \leqslant 1\}$ 上连续，证明： $\exists \delta > 0$ 使得 $f(x, y)$ 在 $I_\delta = \{(x, y) \mid 0 \leqslant x \leqslant 1, 0 \leqslant y \leqslant \delta\}$ 上有界.

证1（用凝聚定理）用反证法. 若不然, 则 $\forall \delta > 0$ , $f(x, y)$ 在 $I_{\delta}$ 上都无界, 于是 $\exists (x_n, y_n) \in I_{\underline{1}}$ 使得

$$
\exists (x _ {n}, y _ {n}) \in I _ {\frac {1}{n}}
$$

$$
\left| f (x _ {n}, y _ {n}) \right| > n.\tag{18.3}
$$

由于 $\{(x_{n},y_{n})\}$ 有界，由凝聚定理知存在子列 $(x_{n_k},y_{n_k})\to (x_0,y_0)$ ，且 $x_0\in [0,1],y_0 = 0,$ 由 $f(x,y)$ 在点 $(x_0,0)$ 的连续性知

$$
\lim _ {k \rightarrow \infty} f (x _ {n _ {k}}, y _ {n _ {k}}) = f (x _ {0}, 0).
$$

此与(18.3)矛盾.

证2（用紧性定理） $\forall x_0\in [0,1]$ ，由 $f(x,y)$ 在点 $(x_0,0)$ 的连续性知 $\exists \delta_0 > 0$ 使得 $f(x,y)$ 在 $V(x_0) = \{(x,y)\mid |x - x_0| <   \delta_0,|y| <   \delta_0\} \cap I_1$ 上有界，由此得到一族开集覆盖有界闭集 $I_{0}$ 。由紧性定理可选出有限个 $V(x_{i}), i=1,2,\cdots,n$ ，使得 $\bigcup_{i=1}^{n}V(x_{i})\supset I_{0}$ 。取 $\delta=\min_{1\leqslant i\leqslant n}\{\delta_{i}\}$ ，则 $f(x,y)$ 在 $I_{\delta}$ 上有界。

例题 18.2.4 设 $f(\theta)$ 是以 $2\pi$ 为周期的连续函数, 定义

$$
u (\rho , \theta) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \frac {(1 - \rho^ {2}) f (\varphi + \theta)}{1 - 2 \rho \cos \varphi + \rho^ {2}} d \varphi ,
$$

则对于任意 $\theta_0\in \mathbf{R}$ ，有

$$
\lim _ {(\rho , \theta) \rightarrow (1 ^ {-}, \theta_ {0})} u (\rho , \theta) = f (\theta_ {0}).
$$

证 首先要用一个结果

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \frac {1 - \rho^ {2}}{1 - 2 \rho \cos \varphi + \rho^ {2}} \mathrm{d} \varphi = 1,
$$

即 $f \equiv 1$ 时, $u \equiv 1$ . 这个关系式可用多种方法证明, 例如通过万能变换 (参见上册291页以及296页题4) 求出下面的不定积分

$$
\int \frac {\mathrm{d} \varphi}{1 + \varepsilon \cos \varphi} = \frac {2}{\sqrt {1 - \varepsilon^ {2}}} \arctan \left(\sqrt {\frac {1 - \varepsilon}{1 + \varepsilon}} \tan \frac {\varphi}{2}\right) (| \varepsilon | <   1)
$$

来证明. 由这个结果就可以得到如下的表达式

$$
u (\rho , \theta) - f (\theta_ {0}) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \frac {1 - \rho^ {2}}{1 - 2 \rho \cos \varphi + \rho^ {2}} [ f (\varphi + \theta) - f (\theta_ {0}) ] d \varphi .
$$

$\forall \varepsilon > 0$ ，要找 $\delta > 0$ ，使得当 $1 - \delta < \rho < 1$ ， $|\theta - \theta_0| < \delta$ 时，有

$$
\left| u (\rho , \theta) - f \left(\theta_ {0}\right) \right| <   \varepsilon .
$$

为此先由 $f$ 的连续性知 $\forall \varepsilon > 0, \exists \delta > 0,$ 使得当 $|\varphi| < \delta, |\theta - \theta_0| < \delta$ 时，有

$$
\left| f (\varphi + \theta) - f \left(\theta_ {0}\right) \right| <   \frac {\varepsilon}{2}.
$$

将要估计的积分分为三部分, 即

$$
u (\rho , \theta) - f (\theta_ {0}) = \frac {1}{2 \pi} \left(\int_ {- \pi} ^ {- \delta} + \int_ {- \delta} ^ {\delta} + \int_ {\delta} ^ {\pi}\right) = I _ {1} + I _ {2} + I _ {3}.
$$

由于在 $(- \pi, -\delta)$ 上， $\cos \varphi \leqslant \cos \delta$ 。于是

$$
1 - 2 \rho \cos \varphi + \rho^ {2} \geqslant 1 - 2 \rho \cos \delta + \rho^ {2} = (1 - \rho) ^ {2} + 2 \rho (1 - \cos \delta) \geqslant 4 \rho \sin^ {2} \frac {\delta}{2}.
$$

又由 f 的连续性知 $\exists M > 0$ ，使得

$$
\left| f (\varphi + \theta) - f (\theta_ {0}) \right| \leqslant M.
$$

于是

$$
\left| I _ {1} \right| \leqslant \frac {1}{2 \pi} \cdot \frac {(1 - \rho^ {2}) M}{4 \rho \sin^ {2} \frac {\delta}{2}} (\pi - \delta) \leqslant \frac {(1 - \rho^ {2}) M}{8 \rho \sin^ {2} \frac {\delta}{2}}.
$$

从而 $\exists \delta_{1}$ ，使得当 $1 - \delta_{1} <   \rho <  1$ 时，有

$$
\left| I _ {1} \right| <   \frac {\varepsilon}{4}.
$$

同理可证，此时

$$
\left| I _ {3} \right| <   \frac {\varepsilon}{4}.
$$

最后估计 $I_{2}$ ，有

$$
\begin{array}{r l} | I _ {2} | & \leqslant \frac {1}{2 \pi} \cdot \frac {\varepsilon}{2} \cdot \int_ {- \delta} ^ {\delta} \frac {1 - \rho^ {2}}{1 - 2 \rho \cos \varphi + \rho^ {2}} \mathrm{d} \varphi \\ & \leqslant \frac {\varepsilon}{4 \pi} \int_ {- \pi} ^ {\pi} \frac {1 - \rho^ {2}}{1 - 2 \rho \cos \varphi + \rho^ {2}} \mathrm{d} \varphi = \frac {\varepsilon}{2}. \end{array}
$$

于是 $\exists \delta, \delta_1$ ，使得当 $1 - \delta_1 < \rho < 1$ ， $|\theta - \theta_0| < \delta$ 时，有

$$
\left| u (\rho , \theta) - f \left(\theta_ {0}\right) \right| <   \varepsilon .
$$

### 18.2.2 紧集上多元连续函数的性质

定义在紧集上的多元连续函数也具有与定义在有界闭集上的一元连续函数相同的性质: 有界性, 存在最大、最小值, 一致连续性以及值域也是紧集等.

命题 18.2.2 紧集上的连续函数的值域必是紧集 (有界闭集), 从而紧集上的连续函数必有界, 并存在最大、最小值.

命题 18.2.3 (Cantor 定理) 紧集上的连续函数必定一致连续.

例题18.2.5 设 $f(x,y,z)$ 在 $a \leqslant x, y, z \leqslant b$ 上连续，令

$$
\varphi (x) = \max _ {a \leqslant y \leqslant x} \left\{\min _ {a \leqslant z \leqslant b} \{f (x, y, z) \} \right\},
$$

则 $\varphi(x)$ 在 $[a,b]$ 上连续.

证 我们将证明分成两步.

第一步: 设

$$
\psi (x, y) = \min _ {a \leqslant z \leqslant b} \{f (x, y, z) \}, a \leqslant x, y \leqslant b.
$$

因为 $f(x,y,z)$ 在有界闭区域上连续，从而一致连续.于是 $\forall \varepsilon >0,\exists \delta >0$ ，当 $|x - x_0| <   \delta ,|y - y_0| <   \delta$ 时

$$
f (x _ {0}, y _ {0}, z) - \varepsilon <   f (x, y, z) <   f (x _ {0}, y _ {0}, z) + \varepsilon .
$$

对 $z$ 在 $[a,b]$ 上取最小值得到

$$
\psi (x _ {0}, y _ {0}) - \varepsilon <   \psi (x, y) <   \psi (x _ {0}, y _ {0}) + \varepsilon .
$$

可见 $\psi(x,y)$ 在正方形 $[a,b]\times[a,b]$ 上连续.

第二步: 令 $y = a + k(x - a)$ ，其中 $0 \leqslant k \leqslant 1$ ，则

$$
\varphi (x) = \max _ {a \leqslant y \leqslant x} \{\psi (x, y) \} = \max _ {0 \leqslant k \leqslant 1} \{\psi (x, a + k (x - a)) \}.
$$

由 $\psi$ 在 $\{(x,y)\mid a\leqslant x\leqslant b,a\leqslant y\leqslant x\}$ 上连续知 $\psi(x,a+k(x-a))$ 在 $\{(x,k)\mid a\leqslant x\leqslant b,0\leqslant k\leqslant1\}$ 上连续，用与第一步相同的方法可证 $\varphi(x)$ 在 $[a,b]$ 上连续. ☐

注 从上面第二步所用的方法, 可以联想到一元函数中的一个题目:

设 $f(x)$ 在 $[a,b]$ 上连续，则

$$
g (x) = \max _ {a \leqslant \xi \leqslant x} \{f (\xi) \} \quad \text {与} \quad h (x) = \min _ {a \leqslant \xi \leqslant x} \{f (\xi) \}
$$

都在 $[a, b]$ 上连续（见上册155页的题10）.

我们可以证明如下：设 $\xi = a + k(x - a), 0 \leqslant k \leqslant 1$ ，则

$$
g (x) = \max _ {0 \leqslant k \leqslant 1} \left\{f (a + k (x - a)) \right\}.
$$

由于二元函数 $f(a + k(x - a))$ 在 $\{(x,k)\mid a\leqslant x\leqslant b,0\leqslant k\leqslant 1\}$ 上连续，用例题18.2.5中的第一步的证法可证 $g(x)$ 在 $[a,b]$ 上连续，同理 $h(x)$ 也在 $[a,b]$ 上连续.

从上例可见, 有些一元函数的问题可以在多元函数理论中得到较好的解决.

例题 18.2.6 设 A 是 $n \times n$ 矩阵, 它的行列式 $\det A \neq 0$ . 证明: 存在 $\alpha > 0$ , 使对任意点 $x \in R^{n}$ 都有 $|Ax| \geqslant \alpha |x|$ .

证 容易证明 $|Ay|$ 是定义在有界闭集 $S^1 = \{y \in \mathbf{R}^n \mid |y| = 1\}$ 上的连续函数。因为 $\operatorname{det} A \neq 0$ ，故对点 $y \in S^1$ ，有 $|Ay| > 0$ 。因此由命题18.2.2, $\min_{y \in S^1} \{|Ay|\} = \alpha > 0$ 。从而当点 $x \neq 0$ 时， $|A(x / |x|)| \geqslant \alpha$ ，即 $|Ax| \geqslant \alpha |x|$ 。当 $x = 0$ 时，不等式显然成立。

例题 18.2.7 设 E 是 $R^{n}$ 中的点集, 点 $x \in R^{n}$ , $d(x, E)$ 是上一章 (140 页) 所定义的 x 和 E 的距离. 证明: $d(x, E)$ 在 $R^{n}$ 上一致连续.

证 任取点 $y \in \mathbf{R}^n$ ，点 $z \in E$ ，则

$$
d (\boldsymbol {x}, E) \leqslant d (\boldsymbol {x}, \boldsymbol {y}) + d (\boldsymbol {y}, \boldsymbol {z}).
$$

对所有 $z \in E$ 取下确界得 $d(\pmb{x}, E) \leqslant d(\pmb{x}, \pmb{y}) + d(\pmb{y}, E)$ . 同理得到 $d(\pmb{y}, E) \leqslant d(\pmb{x}, \pmb{y}) + d(\pmb{x}, E)$ . 因而

$$
\left| d (\boldsymbol {x}, E) - d (\boldsymbol {y}, E) \right| \leqslant | \boldsymbol {x} - \boldsymbol {y} |.
$$

取 $\delta = \varepsilon$ ，则由 $|\pmb {x} - \pmb{y}| < \delta$ 推出 $|d(\pmb {x},E) - d(\pmb {y},E)| < \varepsilon .$ 所以 $d(\pmb {x},E)$ 在 $\mathbf{R}^n$ 上一致连续. □

例题18.2.8设 $E\subset \mathbf{R}^n$ ， $f(x)$ 定义在 $E$ 上.对于点 $\pmb{a}$ 的邻域 $O_{\delta}(\pmb {a})$ 定义 $f$ 在这个邻域上的振幅为

$$
\omega_ {f} (\boldsymbol {a}, \delta) = \sup _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \{f (\boldsymbol {x}) \} - \inf _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \{f (\boldsymbol {x}) \}.
$$

然后令

$$
\omega_ {f} (\boldsymbol {a}) = \lim _ {\delta \rightarrow 0 ^ {+}} \omega_ {f} (\boldsymbol {a}, \delta),
$$

称为函数 $f$ 在点 $\pmb{a}$ 的振幅. 证明：

(1) 若 $f(\pmb{x})$ 在 $E$ 上有界, 则 $\forall \pmb{a} \in E, \omega_f(\pmb{a})$ 存在;

(2) $f(x)$ 在点 a 连续的充分必要条件是 $\omega_{f}(a)=0$ .

(参见上册 124 页的定义和 129 页的题 12.)

证 (1) 对固定的点 $a \in E$ , 由定义知 $\sup_{x \in O_{\delta}(a)} \{f(x)\}$ 与 $\inf_{x \in O_{\delta}(a)} \{f(x)\}$ 分别是 $\delta$ 的单调增加与单调减少函数. 由 $f(x)$ 的有界性知, 当 $\delta$ 充分小时, $\sup_{x \in O_{\delta}(a)} \{f(x)\}$ 与 $\inf_{x \in O_{\delta}(a)} \{f(x)\}$ 都是 $\delta$ 的有界函数, 于是 $\omega_f(a, \delta)$ 是 $\delta$ 的单调增加有界函数, 从而 $\lim_{\delta \to 0^+} \omega_f(a, \delta)$ 存在.

(2) 若 $f(\pmb{x})$ 在点 $\pmb{a}$ 连续, 则 $\forall \varepsilon > 0, \exists \delta > 0$ , 当 $\pmb{x} \in O_{\delta}(\pmb{a})$ 时, $|f(\pmb{x}) - f(\pmb{a})| < \varepsilon$ . 此时应有

$$
\omega_ {f} (\boldsymbol {a}, \delta) \leqslant \sup _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} - f (\boldsymbol {a}) + f (\boldsymbol {a}) - \inf _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} \leqslant 2 \varepsilon ,
$$

于是

$$
\omega_ {f} (\boldsymbol {a}) = \lim _ {\delta \rightarrow 0 ^ {+}} \omega_ {f} (\boldsymbol {a}, \delta) = 0.
$$

反之，若 $\lim_{\delta \to 0^{+}}\omega_{f}(\pmb {a},\delta) = 0,$ 则 $\forall \varepsilon >0,\exists \delta_0 > 0,$ 当 $\delta \leqslant \delta_0$ 时

$$
\sup _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} - \inf _ {\boldsymbol {x} \in O _ {\delta} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} = \omega_ {f} (\boldsymbol {a}, \delta) <   \varepsilon ,
$$

于是当 $x \in O_{\delta_0}(a)$ 时

$$
| f (\boldsymbol {x}) - f (\boldsymbol {a}) | \leqslant \sup _ {\boldsymbol {x} \in O _ {\delta_ {0}} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} - \inf _ {\boldsymbol {x} \in O _ {\delta_ {0}} (\boldsymbol {a})} \left\{f (\boldsymbol {x}) \right\} <   \varepsilon ,
$$

即 $f(x)$ 在点 a 处连续.

### 18.2.3 多元连续函数的介值定理

一元连续函数的介值定理(上册§5.2)建立在区间的连通性上. 多元连续函数也有类似的讨论.

命题 18.2.4 设 f 是定义在 $R^{n}$ 中连通集合 D 上的连续函数, 点 $a, b \in D$ , 则对任意数 $C \in (f(a), f(b))$ , 存在点 $c \in D$ , 使得 $f(c) = C$ .

证 首先证明连续函数把 $\mathbf{R}^n$ 中连通集合 $D$ 映到 $\mathbf{R}$ 中的连通集 $f(D)$ . 设有分解式 $f(D) = A \cup B$ , 其中 $A, B$ 为两个不相交的非空子集. 于是

$$
D = E \cup F,
$$

其中 $E = f^{-1}(A), F = f^{-1}(B)$ . 易知 $E, F$ 非空且不相交. 由 $D$ 的连通性, 可设 $E$ 中有 $F$ 的聚点, 即存在点列 $\{\pmb{x}_i\} \subset f^{-1}(B)$ 收敛到点 $\pmb{x} \in f^{-1}(A)$ . 由 $f$ 的连续性, $\{f(\pmb{x}_i)\}$ 收敛到 $f(\pmb{x}) \in A$ . 这表明 $A$ 中有 $B$ 的聚点. 故 $f(D)$ 是 $\mathbf{R}$ 中的连通集.

不难证明 $f(D)$ 是区间 (见第十七章的第二组参考题 2). 因此由 $f(\boldsymbol{a}), f(\boldsymbol{b}) \in f(D)$ 得 $[f(\boldsymbol{a}), f(\boldsymbol{b})] \subset f(D)$ . 故 $C \in f(D)$ , 即存在点 $c \in D$ , 使 $f(c) = C$ . ☐

### 18.2.4 向量值函数

向量值函数是一个从 $\mathbf{R}^n$ 到 $\mathbf{R}^m$ 的映射 $(n, m \geqslant 1)$ 。对应于每一个自变量$x \in R^{n}$ ，函数值是一个向量，即它的每一个分量是一个多元函数（或一元函数），因此多元函数的极限与连续的概念都可以推广到向量值函数上来.

定义 设 $\Omega \subset \mathbf{R}^n$ , $f: \Omega \to \mathbf{R}^n$ , 满足

(1) $f(\Omega) \subset \Omega;$ 

(2) $\forall x_{1}, x_{2} \in \Omega$ , 有

$$
\left| f \left(\boldsymbol {x} _ {1}\right) - f \left(\boldsymbol {x} _ {2}\right) \right| \leqslant L \left| \boldsymbol {x} _ {1} - \boldsymbol {x} _ {2} \right|,
$$

其中 0 < L < 1，则称 f 是 $\Omega$ 上的一个压缩映射（参见上册 77 页）.

从以上定义可以看出, 有关向量值函数的压缩映射的定义是一元函数压缩映射定义的推广. 类似于一元函数, 我们也有下面的压缩映射原理.

命题18.2.5（压缩映射原理）设 $\Omega$ 是 $\mathbf{R}^n$ 中的闭集， $f$ 是 $\Omega$ 上的一个压缩映射，则在 $\Omega$ 中存在 $f$ 的惟一不动点 $x^*$ ，即

$$
f (x ^ {*}) = x ^ {*}.
$$

证明与一维情况的命题 3.4.4 类似, 从略. 压缩映射原理有许多重要的应用, 这将在后面的章节中介绍 (例如在 §20.2 中用于证明反函数组存在定理).

### 18.2.5 练习题

1. 设二元函数 $f(x,y)$ 在 $[a,b]\times[c,d]$ 上连续，函数列 $\varphi_{n}(x)$ ( $n=1,2,\cdots$ ) 在 $[a,b]$ 上一致收敛并满足条件 $c\leqslant\varphi_{n}(x)\leqslant d$ ，证明：函数列 $F_{n}(x)=f(x,\varphi_{n}(x))$ ( $n=1,2,\cdots$ ) 在 $[a,b]$ 上一致收敛.

2. 证明: $f(x, y) = \sqrt{x^2 + y^2}$ 在 $\mathbf{R}^2$ 上一致连续.

3. 在命题 18.2.1 中, 由 (1) 直接证 (4).

4. 如果 f 把 R 中的任意开集映为开集, 问 f 是否是 R 上的连续函数.

5. $f(x,y)$ 在 $\mathbf{R}^2$ 上连续，且 $\lim_{|x| + |y|\to \infty}f(x,y)$ 存在.证明： $f(x,y)$ 在 $\mathbf{R}^2$ 上有界，且一致连续.

6. 证明: 若 $D \subset \mathbf{R}^2$ 是有界闭域, $f$ 为 $D$ 上连续函数, 则 $f(D)$ 是一个有界闭区间.

7. 利用命题 18.2.1 和例题 18.2.7 重新证明上一章的第一组参考题 5.

8. (14.1.1 小节中 Dini 判别法的推广) 设 $D$ 是 $\mathbf{R}^n$ 中的紧集, $\{f_k\}$ 是 $D$ 上的连续函数列, 且对每一点 $\pmb{x} \in D$ 有 $f_1(\pmb{x}) \geqslant f_2(\pmb{x}) \geqslant \cdots \geqslant f_k(\pmb{x}) \geqslant \cdots$ 以及 $\lim_{k \to \infty} f_k(\pmb{x}) = 0$ . 证明: 函数列 $\{f_k\}$ 在 $D$ 上一致收敛.

9. 证明：在例题18.2.8中的 $\omega_{f}(\pmb{a})$ 可改用 $\lim_{\delta \to 0^{+}}\sup_{|\pmb {a} - \pmb {x}|\leqslant \delta}\{|f(\pmb {a}) - f(\pmb {x})|\}$ 

10. 证明: 连续映射把紧集映为紧集.

## §18.3 对于教学的建议

### 18.3.1 学习要点

1. 学生在学习多元函数极限与连续性时, 面临着两个任务: 一方面要复习, 巩固以前学到的 $\varepsilon - \delta$ 方法, 这是数学分析的基本功; 另一方面, 多元函数的情况更为复杂, 有许多新的问题产生, 如何对以前的方法进行调整, 有哪些新的注意事项, 都要一一弄清. 为此, 要十分注意习题课内容的条理性.

2. 例子在这一章的学习中有着十分重要的地位。学生首先是模仿，然后自己要能举出一些说明问题的反例。比如，针对重极限与累次极限的关系、多元函数连续与一元函数连续的相同点与不同点的一些例子。

3. 对习题课的建议

(1) 关于求极限. 极坐标变换是讨论二元函数极限的有效手段, 学生们很喜欢用, 但在使用时必须小心. 例如

$$
f (x, y) = \frac {x ^ {2} y}{x ^ {4} + y ^ {2}}, \quad (x, y) \neq (0, 0)
$$

的极限 $\lim_{(x,y)\to (0,0)}f(x,y)$ 不存在，但如果用极坐标变换，则

$$
f (x, y) = \frac {r \cos^ {2} \theta \sin \theta}{r ^ {2} \cos^ {4} \theta + \sin^ {2} \theta} \to 0, \quad \text {如果}   \theta \neq 0, \pi ;
$$

而当 $\theta = 0, \pi$ 时， $y = 0$ ，故 $f(x, y) = 0$ ，因此容易误认为 $\lim_{(x, y) \to (0, 0)} f(x, y) = 0$ 。产生错误的原因在于忽视了用极坐标变换计算二元函数极限时，要求极限过程对 $\theta \in [0, 2\pi)$ 一致地成立。而上述计算中极限过程与 $\theta$ 有关。事实上，如果我们选择一条特殊的趋于原点的曲线

$$
L = \{(r, \theta) \mid \sin \theta = r \cos^ {2} \theta \},
$$

则

$$
f (x, y) | _ {L} = \frac {r \cos^ {2} \theta \sin \theta}{r ^ {2} \cos^ {4} \theta + \sin^ {2} \theta} \Big | _ {L} = \frac {1}{2},
$$

从而二元函数极限不存在.

(2) 关于连续性. 在证明函数 $f(x, y)$ 在点 $(x_0, y_0)$ 连续时, 如果需要的话, 学生们都会将 $f(x, y) - f(x_0, y_0)$ 写为

$$
f (x, y) - f \left(x _ {0}, y _ {0}\right) = \left[ f (x, y) - f \left(x _ {0}, y\right) \right] + \left[ f \left(x _ {0}, y\right) - f \left(x _ {0}, y _ {0}\right) \right].
$$

但经常会犯的错误是，由 $f$ 对 $x$ 的连续性得出 $\forall \varepsilon > 0, \exists \delta > 0,$ 当 $|x - x_0| < \delta$ 时

$$
\left| f (x, y) - f \left(x _ {0}, y\right) \right| <   \frac {\varepsilon}{2}.
$$

要提醒他们, 对每一个 $y$ , $f(x,y)$ 是一个关于 $x$ 的一元函数, 但含有 $y$ . 因此 $f(x,y)$ 是一族含参数 $y$ 的关于 $x$ 的一元函数, 所以上述 $\delta$ 应该与 $y$ 有关. 这还不是我们在二元连续时需要的 $\delta$ .

可以要求学生总结一下: 如果一个二元函数对每个变元分别连续, 还须加何种条件才可保证二元函数连续 (结合例题 18.2.2). 这个问题可以作为习题课上进一步深入的一个内容.

### 18.3.2 参考题

#### 第一组参考题

1. 设 $f(x, y)$ 关于 $x$ 在 $[a, b]$ 上连续，且关于 $y$ 单调增加。如果有

$$
\lim _ {y \rightarrow d ^ {-}} f (x, y) = f (x, d), x \in [ a, b ],
$$

证明：这一收敛关于 $x \in [a, b]$ 是一致的，即 $\forall \varepsilon > 0$ ，存在 $\delta > 0$ ，当 $0 < d - y < \delta$ 时，对所有的 $x \in [a, b]$ ，都有

$$
\left| f (x, y) - f (x, d) \right| <   \varepsilon .
$$

2. 设 $f$ 在 $[a, b] \times [a, b]$ 上连续，定义

$$
\varphi (x) = \max _ {a \leqslant \xi \leqslant x} \left\{\max _ {a \leqslant y \leqslant \xi} \{f (\xi , y) \} \right\},
$$

证明： $\varphi(x)$ 在 $[a,b]$ 上连续.

3. 设 $D$ 是 $\mathbf{R}^n$ 的紧子集, $f$ 为定义在 $D$ 上的函数, 证明: $f$ 在 $D$ 上连续的充分必要条件是下列集合

$$
\{(x, y) \in \mathbf {R} ^ {n + 1} \mid y = f (x), x \in D \}
$$

是 $R^{n+1}$ 中的紧集.

4. 设 $f_{1}, f_{2}, \cdots, f_{n}$ 是 [0,1] 上的 n 个连续函数，称 $f_{1}, f_{2}, \cdots, f_{n}$ 在 [0,1] 上线性相关，若存在不全为零的常数 $c_{1}, c_{2}, \cdots, c_{n}$ ，使得

$$
\sum_ {j = 1} ^ {n} c _ {j} f _ {j} (x) \equiv 0, x \in [ 0, 1 ].
$$

证明： $f_{1},f_{2},\cdots,f_{n}$ 在 [0,1] 上线性相关的充分必要条件是

$$
\det \left(\left[ \int_ {0} ^ {1} f _ {i} (x) f _ {j} (x) \mathrm{d} x \right] _ {n \times n}\right) = 0,
$$

其中 $\det(A)$ 是 A 的行列式.

5. 设 $p_{1}, p_{2}, \cdots, p_{k}$ 是 $R^{2}$ 上的 k 个相异的点, 证明: 存在一个最小半径的圆盘 B, 把这 k 个点覆盖. 对于 $R^{n}$ 中的点, 也有类似的命题.

6. 设 A, B 是两个 n 阶的实对称方阵, 其中 B 是正定矩阵. 设函数 $G(x) = (x^{\mathrm{T}}Bx)^{-1}(x^{\mathrm{T}}Ax)$ 定义在 $E = R^{n} \setminus \{0\}$ 上, 其中 $x^{T}$ 是 x 的转置. 证明:

(1) $G(\pmb{x})$ 可以在 $E$ 上取到最大值;

(2) $G(x)$ 的最大值点是与 A, B 有关的某个矩阵的特征向量. 请写出这个矩阵.

#### 第二组参考题

1. 设 $\mathcal{T}$ 是 $\mathbf{R}^n$ 到 $\mathbf{R}^n$ 的一个映射, 如果存在常数 $\theta$ , $0 \leqslant \theta < 1$ 以及正整数 $n_0$ , 使得

$$
\left| \mathcal {T} ^ {n _ {0}} \boldsymbol {x} - \mathcal {T} ^ {n _ {0}} \boldsymbol {y} \right| \leqslant \theta | \boldsymbol {x} - \boldsymbol {y} |, \forall \boldsymbol {x}, \boldsymbol {y} \in \mathbf {R} ^ {n},
$$

证明：映射 T 有惟一的不动点.

2. 设 $\Omega$ 是 $\mathbf{R}^n$ 中的有界闭集, $f$ 是 $\Omega$ 到 $\Omega$ 的一个映射, 满足

$$
| f (x) - f (y) | <   | x - y |, \forall x, y \in \Omega , x \neq y.
$$

证明：f 在 $\Omega$ 中存在惟一的不动点。能否把命题中有界闭集的假设减弱为一般的有界集或无界的闭集？

3. 证明：连续映射将连通集映为连通集.

4. 设 $\Omega$ 是 $\mathbf{R}^n$ 中的区域, 函数 $f$ 定义在 $\Omega$ 上, 对于点 $x_0 \in \Omega$ , 如果 $\forall \varepsilon > 0$ , 存在 $\delta > 0$ , 使得当点 $x \in \Omega$ , 且 $|x - x_0| < \delta$ 时

$$
f (\pmb {x}) <   f (\pmb {x} _ {0}) + \varepsilon \quad (\text {或} f (\pmb {x}) > f (\pmb {x} _ {0}) - \varepsilon),
$$

则称 f 在点 $x_{0}$ 处上半连续 (或下半连续). 证明:

(1) f 在点 $x_{0}$ 处上半连续的充分必要条件是 f 在点 $x_{0}$ 的邻近有上界，且

$$
\varlimsup_ {\Omega \ni \boldsymbol {x} \rightarrow \boldsymbol {x} _ {0}} f (\boldsymbol {x}) \leqslant f (\boldsymbol {x} _ {0});
$$

(2) $f$ 在点 $\pmb{x}_0$ 处下半连续的充分必要条件是 $f$ 在点 $\pmb{x}_0$ 的邻近有下界，且

$$
\varliminf_ {\Omega \ni x \to x _ {0}} f (x) \geqslant f (x _ {0}).
$$

5. 设 $\Omega$ 是 $R^{n}$ 中的紧集, f 是 $\Omega$ 上的上半连续函数 (下半连续函数), 则 f 在 $\Omega$ 上有上界并达到最大值 (有下界并达到最小值).

6. 设 $\{f_k\}$ 是 $\mathbf{R}^n$ 中紧集 $\Omega$ 上的连续函数列, 如果对每个点 $x \in \Omega$ , 均有

$$
\sup _ {k} \left\{f _ {k} (\boldsymbol {x}) \right\} <   + \infty ,
$$

证明：函数

$$
f (\boldsymbol {x}) = \sup _ {k} \left\{f _ {k} (\boldsymbol {x}) \right\}
$$

在 $\Omega$ 上达最小值.

7. (Peano 曲线 $^{①}$ ) 设 $\Delta$ 是 $R^{2}$ 中由 y = 0, $y = \sqrt{3}x$ 和 $y = -\sqrt{3}x + \sqrt{3}$ 所围成的正三角形闭区域. 映射 $f_{0} : [0,1] \to \Delta$ 定义为 $f_{0}(0) = (0,0)$ , $f_{0}\left(\frac{1}{2}\right) =$ $\left(\frac{1}{2}, \frac{\sqrt{3}}{6}\right)$ , $f_{0}(1) = (1,0)$ , 其余线性联结. 则 $f_{0}([0,1])$ 是 $\Delta$ 中从端点 $A$ 到重心 $K$ 再到端点 $B$ 的一条折线 $L$ (见图 18.1(a)).

然后将 $\Delta$ 等分成四个边长为 $\frac{1}{2}$ 的小正三角形区域 $\Delta_{i}, i = 1,2,3,4, L$ 等分成长度为 $\frac{\sqrt{3}}{6}$ 的四段 $L_{i}, i = 1,2,3,4$ . 设 $g_{0}: L \to \Delta$ 以类似于 $f_{0}$ 的方式依次把 $L_{i}, i = 1,2,3,4$ 映到 $\Delta_{i}, i = 1,2,3,4$ 中. 令 $f_{1} = g_{0} \circ f_{0}$ , 则 $f_{1}([0,1])$ 就是 $\Delta$ 中一条联结 $A, B$ 的折线, 由 $2 \times 4$ 段直线段连成 (见图18.1(b)).

再设 $g_{1}$ 把 $f_{1}([0,1])$ 的每一段作类似于 $\pmb{g}_0$ 那样的变换. 令 $f_{2} = g_{1} \circ f_{1}$ , 则 $f_{2}([0,1])$ 就如图所示是一条由 $2 \times 4^{2}$ 段直线段连成的折线 (见图18.1(c)).

依类似的方式定义 $f_{k} = g_{k-1} \circ f_{k-1} : [0,1] \to \Delta, k = 3,4,\cdots$ ，使得 $f_{k}([0,1])$ 是一条由 $2 \times 4^{k}$ 段直线段连成的折线，每段直线分别位于边长为 $\frac{1}{2^{k}}$ 的小正三角形区域中，且 $g_{k-1}$ 保持 $f_{k-1}([0,1])$ 的点在它所在的小正三角形区域中.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/a459123c928ab20cefe6c1ced25dd932b384c3c46e8bfaf013b14a541b6f9d46.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/bed5da1b0f743c98bfe8ea02a37d9c628a4a16f114106927299f3ec31c2a03a0.jpg)



图18.1


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/b9ca01e7-5cc6-472c-94bd-8ca5acdc35de/ee5379551cdf7d19fe362bbc551a7530a94cd304e012269be398189a29a6a8f7.jpg)



(c)


(1) 证明: 任取 n > m, 有 $\left|f_{n}(t) - f_{m}(t)\right| \leqslant \frac{1}{2^{m}}$ , 从而 $f_{n}(t) (n = 1, 2, \cdots)$ 在 [0,1] 上一致收敛. 设其极限映射为 f, 证明 $f : [0,1] \to \Delta$ 连续;

(2) 证明: $f([0,1]) = \Delta$ , 即连续映射 $f$ 把一个区间 $[0,1]$ 映为 $\mathbf{R}^2$ 中的一个面积为 $\frac{\sqrt{3}}{4}$ 的区域 $\Delta$ .

8. (Tietze (蒂策) 扩张定理) 设 $D \subset \mathbf{R}^n$ 为闭子集, $f: D \to \mathbf{R}$ 为连续函数, 且 $|f(\pmb{x})| \leqslant M$ , $\pmb{x} \in D$ . 设 $g_0(\pmb{x}) = 0$ , $g_k(\pmb{x})$ 归纳定义为

$$
g _ {k} (\boldsymbol {x}) = \frac {2 ^ {k - 1} d (\boldsymbol {x} , A _ {k})}{3 ^ {k} (d (\boldsymbol {x} , A _ {k}) + d (\boldsymbol {x} , B _ {k}))} - \frac {2 ^ {k - 1} d (\boldsymbol {x} , B _ {k})}{3 ^ {k} (d (\boldsymbol {x} , A _ {k}) + d (\boldsymbol {x} , B _ {k}))},
$$

其中

$$
A _ {k} = \Big \{\pmb {x} \in D \Big | \varphi_ {k} (\pmb {x}) \geqslant \frac {2 ^ {k - 1}}{3 ^ {k}} M \Big \},
$$

$$
B _ {k} = \left\{\boldsymbol {x} \in D \mid \varphi_ {k} (\boldsymbol {x}) \leqslant - \frac {2 ^ {k - 1}}{3 ^ {k}} M \right\},
$$

$$
\text { 而 } \varphi_ {k} (\pmb {x}) = f (\pmb {x}) - [ g _ {0} (\pmb {x}) + g _ {1} (\pmb {x}) + \dots + g _ {k - 1} (\pmb {x}) ], k = 1, 2, \dots .
$$

(1) 证明: $g_{k}(\pmb{x}) (k = 1,2,\dots)$ 连续, 级数 $\sum_{k=1}^{\infty} g_{k}(\pmb{x})$ 在 $\mathbf{R}^{n}$ 上一致收敛到 $\mathbf{R}^{n}$ 上的连续函数 $g(\pmb{x})$ , 并且当 $\pmb{x} \in D$ 时 $g(\pmb{x}) = f(\pmb{x})$ . 因此 $g$ 称为 $f$ 在 $\mathbf{R}^{n}$ 上的连续扩张, 也称连续开拓;

(2) 证明: (1) 的结论当 $f$ 并不有界时也成立.

(以上两题取自 [2], 又见 [3] 之 §16.3.)

9. 是否能把开集上的连续函数连续扩张到全空间？一致连续函数呢？考察 R 中的例子.

10. 证明: 可以把定义在 $\mathbf{R}^n$ 中有理点集上的一致连续函数惟一扩张到全空间.
