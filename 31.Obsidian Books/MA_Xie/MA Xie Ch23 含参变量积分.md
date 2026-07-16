


# 第二十三章 含参变量积分

在 §23.1 和 §23.2 两节中考虑含参变量积分的一般性质, 其中包括含参变量常义积分和含参变量广义积分. 对后者而言, 其分析性质的研究首先涉及这些广义积分的收敛性是否关于参变量一致. 然后给出许多具体计算的例子. 在 §23.3 中介绍两个重要的特殊函数: B 函数和 $\Gamma$ 函数. 最后一节是学习要点和参考题.

## §23.1 含参变量常义积分

### 23.1.1 定义与性质

在实际问题中我们经常会遇到带参数的积分，比如椭圆 $\frac{x^2}{a^2} +\frac{y^2}{b^2} = 1 (b>$ $a > 0)$ 的弧长为

$$
l = 4 \int_ {0} ^ {\pi / 2} \sqrt {a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t} \mathrm{d} t = 4 b \int_ {0} ^ {\pi / 2} \sqrt {1 - k ^ {2} \sin^ {2} t} \mathrm{d} t,
$$

其中 $k = \frac{\sqrt{b^2 - a^2}}{b}$ 是离心率. 这里 $I(k) = \int_0^{\pi / 2} \sqrt{1 - k^2 \sin^2 t} \, \mathrm{d}t$ 称为第二类完全椭圆积分, 它不能用初等函数表示①. $I(k)$ 就是含参变量积分的一个例子. 一般地, 设 $D \subset \mathbf{R}$ , 二元函数 $f(x,t)$ 定义在 $[a,b] \times D$ 上, $\forall t \in D$ , 设 $f(x,t)$ 作为 $x$ 的函数在 $[a,b]$ 上常义可积, 即通常所说的有界可积, 则

$$
\varphi (t) = \int_ {a} ^ {b} f (x, t) \mathrm{d} x
$$

是定义在 D 上的含参变量常义积分. 它具有如下主要性质.

命题23.1.1（极限性质）设 $t_0$ 是 $D$ 的聚点，如果 $\lim_{t\to t_0}f(x,t) = \psi (x)$ ，且收敛关于 $x\in [a,b]$ 是一致的，则 $\psi (x)$ 在 $[a,b]$ 上有界可积，且

$$
\lim _ {t \rightarrow t _ {0}} \varphi (t) = \lim _ {t \rightarrow t _ {0}} \int_ {a} ^ {b} f (x, t) \mathrm{d} x = \int_ {a} ^ {b} \psi (x) \mathrm{d} x.
$$

命题23.1.2（连续性）设 $f(x,t)$ 在 $[a,b]\times [c,d]$ 上连续，则

$$
\varphi (t) = \int_ {a} ^ {b} f (x, t) \mathrm{d} x
$$

在 $[c,d]$ 上连续.

命题23.1.3（交换积分次序）设 $f(x,t)$ 在 $[a,b]\times [c,d]$ 上连续，则

$$
\int_ {c} ^ {d} \mathrm{d} t \int_ {a} ^ {b} f (x, t) \mathrm{d} x = \int_ {a} ^ {b} \mathrm{d} x \int_ {c} ^ {d} f (x, t) \mathrm{d} t.
$$

命题23.1.4（可微性）设 $f(x,t)$ ， $f_{t}(x,t)$ 在 $[a,b]\times [c,d]$ 上连续，则

$$
\varphi (t) = \int_ {a} ^ {b} f (x, t) \mathrm{d} x
$$

在 $[c,d]$ 上可导，且

$$
\varphi^ {\prime} (t) = \int_ {a} ^ {b} f _ {t} (x, t) \mathrm{d} x.
$$

如果在积分限中也含有参变量, 则我们有如下更一般的结论.

命题23.1.5设 $f(x,t)$ 在 $[a,b]\times [c,d]$ 上连续， $\alpha (t)$ 和 $\beta (t)$ 都在 $[c,d]$ 上连续，且

$$
a \leqslant \alpha (t), \beta (t) \leqslant b, \forall t \in [ c, d ],
$$

则

$$
\varphi (t) = \int_ {\alpha (t)} ^ {\beta (t)} f (x, t) \mathrm{d} x
$$

在 $[c,d]$ 上连续. 进一步若 $f_{t}(x,t)$ 也在 $[a,b] \times [c,d]$ 上连续, $\alpha(t)$ 和 $\beta(t)$ 都在 $[c,d]$ 上可导, 则 $\varphi(t)$ 也在 $[c,d]$ 上可导, 且

$$
\varphi^ {\prime} (t) = f (\beta (t), t) \beta^ {\prime} (t) - f (\alpha (t), t) \alpha^ {\prime} (t) + \int_ {\alpha (t)} ^ {\beta (t)} f _ {t} (x, t) \mathrm{d} x.
$$

例题23.1.1 设 $f(x)$ 在 $[0,1]$ 上连续，考察函数

$$
F (t) = \int_ {0} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x
$$

的连续性.

解 显然 $F(t)$ 定义在 $(- \infty, + \infty)$ 上且 $\forall t_0 \neq 0$ , $h(x,t) = \frac{tf(x)}{x^2 + t^2}$ 在 $[0,1] \times \left[\frac{1}{2} t_0, 2t_0\right]$ 上连续 (或在 $[0,1] \times \left[2t_0, \frac{1}{2} t_0\right]$ 上连续), 由命题23.1.2知 $F(t)$ 在 $t_0$ 点连续.

下面讨论 $F(t)$ 在 t=0 处的连续性. 我们先考虑

$$
\lim _ {t \to 0 ^ {+}} F (t) = \lim _ {t \to 0 ^ {+}} \int_ {0} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x.
$$

注意到

$$
\int_ {0} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x = \int_ {0} ^ {t ^ {1 / 3}} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x + \int_ {t ^ {1 / 3}} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x.
$$

而当 $t \to 0^{+}$ 时，

$$
\int_ {0} ^ {t ^ {1 / 3}} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x = f (\xi) \arctan \frac {t ^ {1 / 3}}{t} \rightarrow f (0) \frac {\pi}{2},
$$

$$
\left| \int_ {t ^ {1 / 3}} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x \right| \leqslant \max _ {0 \leqslant x \leqslant 1} \{| f (x) | \} \cdot \frac {t}{t ^ {2 / 3} + t ^ {2}} \rightarrow 0.
$$

因此

$$
\lim _ {t \rightarrow 0 ^ {+}} \int_ {0} ^ {1} \frac {t}{x ^ {2} + t ^ {2}} f (x) \mathrm{d} x = f (0) \frac {\pi}{2}.
$$

同理可证

$$
\lim _ {t \rightarrow 0 ^ {-}} F (t) = - f (0) \frac {\pi}{2},
$$

所以当 $f(0)=0$ 时， $F(t)$ 在点 t=0 处连续，否则在该点处不连续.

例题23.1.2设

$$
F (t) = \int_ {0} ^ {t ^ {2}} \mathrm{d} x \int_ {x - t} ^ {x + t} \sin (x ^ {2} + y ^ {2} - t ^ {2}) \mathrm{d} y,
$$

求 $F'(t)$ .

解 令 $f(x,t) = \int_{x - t}^{x + t}\sin (x^2 +y^2 -t^2)\mathrm{d}y$ ，其中 $x,t$ 为参变量。由含参变量积分的求导公式

$$
F ^ {\prime} (t) = 2 t \int_ {t ^ {2} - t} ^ {t ^ {2} + t} \sin (t ^ {4} + y ^ {2} - t ^ {2})   \mathrm{d} y + \int_ {0} ^ {t ^ {2}} \left(\frac {\partial}{\partial t} \int_ {x - t} ^ {x + t} \sin (x ^ {2} + y ^ {2} - t ^ {2})   \mathrm{d} y\right) \mathrm{d} x.
$$

而

$$
\begin{array}{l} \frac {\partial}{\partial t} \int_ {x - t} ^ {x + t} \sin (x ^ {2} + y ^ {2} - t ^ {2}) \mathrm{d} y \\ = \sin [ x ^ {2} + (x + t) ^ {2} - t ^ {2} ] - (- 1) \cdot \sin [ x ^ {2} + (x - t) ^ {2} - t ^ {2} ] \\ + \int_ {x - t} ^ {x + t} (- 2 t) \cos (x ^ {2} + y ^ {2} - t ^ {2}) \mathrm{d} y \\ = 2 \sin 2 x ^ {2} \cos 2 x t - 2 t \int_ {x - t} ^ {x + t} \cos (x ^ {2} + y ^ {2} - t ^ {2}) \mathrm{d} y. \end{array}
$$

最后得到

$$
\begin{array}{r l} F ^ {\prime} (t) & = 2 t \int_ {t ^ {2} - t} ^ {t ^ {2} + t} \sin (t ^ {4} + y ^ {2} - t ^ {2}) \mathrm{d} y + 2 \int_ {0} ^ {t ^ {2}} \sin 2 x ^ {2} \cos 2 x t \mathrm{d} x \\ & \quad - 2 t \int_ {0} ^ {t ^ {2}} \mathrm{d} x \int_ {x - t} ^ {x + t} \cos (x ^ {2} + y ^ {2} - t ^ {2}) \mathrm{d} y. \end{array}
$$

### 23.1.2 几种常用的求参变量积分的方法

如果直接求 $\varphi(t)=\int_{a}^{b}f(x,t)\mathrm{d}x$ 有困难, 常采用以下两种方法.

1. 先求 $\varphi'(t)$ ，即先求 $\int_{a}^{b} f_{t}(x, t) \, dx$ ，然后再对 t 积分求出 $\varphi(t)$ .

2. 把 $f(x,t)$ 表示为积分形式, 再用积分号下求积分的方法. 此时通常要交换积分次序.

例题23.1.3 计算

$$
I (x) = \int_ {0} ^ {\pi / 2} \ln (\sin^ {2} \theta + x ^ {2} \cos^ {2} \theta) \mathrm{d} \theta , \quad 0 <   x <   + \infty .\tag{23.1}
$$

解 令 $f(x, \theta) = \ln (\sin^2 \theta + x^2 \cos^2 \theta)$ . $\forall x_0 \in (0, +\infty)$ , $f(x, \theta)$ 在 $\left[\frac{1}{2} x_0, 2x_0\right] \times \left[0, \frac{\pi}{2}\right]$ 上连续, 且 $f_x(x, \theta) = \frac{2x \cos^2 \theta}{\sin^2 \theta + x^2 \cos^2 \theta}$ 也在 $\left[\frac{1}{2} x_0, 2x_0\right] \times \left[0, \frac{\pi}{2}\right]$ 上连续. 应用积分号下求导的性质, 可得 $\forall x \in (0, +\infty)$ ,

$$
\begin{array}{r l} I ^ {\prime} (x) & = \int_ {0} ^ {\pi / 2} \frac {2 x \cos^ {2} \theta}{\sin^ {2} \theta + x ^ {2} \cos^ {2} \theta}   \mathrm{d} \theta = 2 x \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} \theta}{x ^ {2} + \tan^ {2} \theta} \quad (\text {令} \tan \theta = t) \\ & = 2 x \int_ {0} ^ {+ \infty} \frac {1}{x ^ {2} + t ^ {2}} \cdot \frac {1}{1 + t ^ {2}}   \mathrm{d} t \\ & = \frac {2 x}{x ^ {2} - 1} \int_ {0} ^ {+ \infty} \left(\frac {1}{1 + t ^ {2}} - \frac {1}{x ^ {2} + t ^ {2}}\right)   \mathrm{d} t \quad (x \neq 1) \\ & = \frac {2 x}{x ^ {2} - 1} \left(\frac {\pi}{2} - \frac {1}{x} \frac {\pi}{2}\right) = \frac {\pi}{1 + x}. \end{array}
$$

积分得

$$
I (x) = \pi \ln (1 + x) + C (x \neq 1).
$$

由 $I(x)$ 的连续性知上述表达式对 $x = 1$ 也成立. 在(23.1)中, 令 $x = 1$ , 则 $I(1) = 0$ , 从而 $C = -\pi \ln 2$ . 最后得到

$$
I (x) = \pi \ln \frac {1 + x}{2}.
$$

例题23.1.4 求

$$
I (\alpha) = \int_ {0} ^ {\pi / 2} \ln \frac {1 + \alpha \cos x}{1 - \alpha \cos x} \cdot \frac {1}{\cos x} \mathrm{d} x, | \alpha | <   1.
$$

解 由于

$$
\lim _ {x \rightarrow \pi / 2} \ln \frac {1 + \alpha \cos x}{1 - \alpha \cos x} \cdot \frac {1}{\cos x} = \lim _ {x \rightarrow \pi / 2} \left[ \frac {\ln (1 + \alpha \cos x)}{\cos x} - \frac {\ln (1 - \alpha \cos x)}{\cos x} \right] = 2 \alpha ,
$$

于是 $x = \frac{\pi}{2}$ 不是瑕点. 又注意到有

$$
\frac {\ln (1 + \alpha \cos x)}{\cos x} - \frac {\ln (1 - \alpha \cos x)}{\cos x} = \int_ {- \alpha} ^ {\alpha} \frac {\mathrm{d} y}{1 + y \cos x},
$$

令 $f(x,y) = 1 / (1 + y\cos x),\forall \alpha \in (-1,1),f(x,y)$ 在 $\left[0,\frac{\pi}{2}\right]\times [-\alpha ,\alpha ]$ 上连续，利用交换积分次序性质，即可得到

$$
\begin{array}{l} I (\alpha) = \int_ {- \alpha} ^ {\alpha} \mathrm{d} y \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + y \cos x} = \int_ {- \alpha} ^ {\alpha} \frac {2}{\sqrt {1 - y ^ {2}}} \arctan \left(\sqrt {\frac {1 - y}{1 + y}} \tan \frac {x}{2}\right) \Bigg | _ {0} ^ {\pi / 2} \mathrm{d} y \\ = \int_ {- \alpha} ^ {\alpha} \frac {2}{\sqrt {1 - y ^ {2}}} \arctan \sqrt {\frac {1 - y}{1 + y}} \mathrm{d} y \\ = \int_ {0} ^ {\alpha} \frac {2}{\sqrt {1 - y ^ {2}}} \left(\arctan \sqrt {\frac {1 - y}{1 + y}} + \arctan \sqrt {\frac {1 + y}{1 - y}}\right) \mathrm{d} y \\ = \pi \int_ {0} ^ {\alpha} \frac {\mathrm{d} y}{\sqrt {1 - y ^ {2}}} = \pi \arcsin \alpha . \end{array}
$$

注1 也可以用下面的方法求 $I(\alpha)$ :

$$
I (\alpha) = \int_ {- \alpha} ^ {\alpha} \mathrm{d} y \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 + y \cos x} = \int_ {- \alpha} ^ {\alpha} \mathrm{d} y \int_ {0} ^ {\pi / 2} \frac {(1 + y \cos x) \mathrm{d} x}{1 - y ^ {2} \cos^ {2} x}.
$$

由于 $\int_0^{\pi /2}\frac{y\cos x\mathrm{d}x}{1 - y^2\cos^2x}$ 是 $y$ 的奇函数，于是 $\int_{-\alpha}^{\alpha}\mathrm{d}y\int_0^{\pi /2}\frac{y\cos x\mathrm{d}x}{1 - y^2\cos^2x} = 0,$ 从而

$$
\begin{array}{r l} I (\alpha) & = \int_ {- \alpha} ^ {\alpha} \mathrm{d} y \int_ {0} ^ {\pi / 2} \frac {\mathrm{d} x}{1 - y ^ {2} \cos^ {2} x} = 2 \int_ {0} ^ {\alpha} \mathrm{d} y \int_ {0} ^ {+ \infty} \frac {\mathrm{d} u}{u ^ {2} + (1 - y ^ {2})} \\ & = 2 \int_ {0} ^ {\alpha} \frac {1}{\sqrt {1 - y ^ {2}}} \cdot \frac {\pi}{2} \mathrm{d} y = \pi \arcsin \alpha . \end{array}
$$

注 2 还可以用对参变量 $\alpha$ 求导的方法求 $I(\alpha)$ .

例题 23.1.5 证明:

$$
\int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \cos (t \sin \theta) \mathrm{d} \theta = 2 \pi .
$$

分析 注意上式左端是含参变量 t 的积分. 设 $f(t)=\int_{0}^{2\pi}\mathrm{e}^{t\cos\theta}\cos(t\sin\theta)\mathrm{d}\theta$ . 要证明 $f(t)\equiv2\pi$ , 即 $f(t)$ 为常函数. 显然有 $f(0)=2\pi$ , 于是只要证明 $f'(t)\equiv0$ .

证1 由求导性质

$$
\begin{array}{r l} f ^ {\prime} (t) & = \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \cos \theta \cos (t \sin \theta) \mathrm{d} \theta - \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \sin (t \sin \theta) \sin \theta \mathrm{d} \theta \\ & = \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \cos (t \sin \theta + \theta) \mathrm{d} \theta , \end{array}
$$

容易归纳证明

$$
f ^ {(n)} (t) = \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \cos (t \sin \theta + n \theta) \mathrm{d} \theta .
$$

于是

$$
f ^ {(n)} (0) = 0, n = 1, 2, \dots .
$$

从而可利用Taylor展式

$$
f (t) = f (0) + 0 + \dots + 0 + \frac {t ^ {n}}{n !} f ^ {(n)} (\xi),
$$

其中 $\xi$ 介于0与 $t$ 之间.因为

$$
| f ^ {(n)} (\xi) | = \left| \int_ {0} ^ {2 \pi} \mathrm{e} ^ {\xi \cos \theta} \cos (\xi \sin \theta + n \theta) \mathrm{d} \theta \right| \leqslant \int_ {0} ^ {2 \pi} \mathrm{e} ^ {| \xi |} \mathrm{d} \theta \leqslant 2 \pi \mathrm{e} ^ {| t |},
$$

所以对每一个固定的 $t \in (-\infty, +\infty)$ 有

$$
\lim _ {n \rightarrow \infty} \frac {t ^ {n}}{n !} f ^ {(n)} (\xi) = 0.
$$

最后得到

$$
f (t) \equiv f (0) = 2 \pi .
$$

证 2 利用下一章的曲线积分知识, 可以计算

$$
\begin{array}{l} f ^ {\prime} (t) = \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \cos \theta \cos (t \sin \theta) \mathrm{d} \theta - \int_ {0} ^ {2 \pi} \mathrm{e} ^ {t \cos \theta} \sin (t \sin \theta) \sin \theta \mathrm{d} \theta \\ = \oint_ {x ^ {2} + y ^ {2} = 1} \mathrm{e} ^ {t x} [ \cos (t y) \mathrm{d} y + \sin (t y) \mathrm{d} x ], \end{array}
$$

其中单位圆取逆时针方向. 用 Green 公式得

$$
f ^ {\prime} (t) = \iint_ {x ^ {2} + y ^ {2} \leqslant 1} \left\{\frac {\partial}{\partial x} [ \mathrm{e} ^ {t x} \cos (t y) ] - \frac {\partial}{\partial y} [ \mathrm{e} ^ {t x} \sin (t y) ] \right\} \mathrm{d} x \mathrm{d} y = 0.
$$

利用含参变量积分的性质，我们可以用嵌入法来计算一些定积分 $I = \int_{a}^{b} f(x) \, \mathrm{d}x$ 。这些定积分对应的不定积分不是初等函数，故不能用 Newton-Leibniz 公式进行计算。嵌入法的步骤是先引入参变量 $y$ ，构造 $I(y) = \int_{a}^{b} g(x, y) \, \mathrm{d}x$ ，使得 $I(y_0) = I(y_0 \text{为某定值})$ ，求出 $I(y)$ 后令 $y = y_0$ 。在应用含参变量积分性质时要注意条件检验。

例题23.1.6 求定积分

$$
I = \int_ {0} ^ {1} \frac {\ln (1 + x)}{1 + x ^ {2}} \mathrm{d} x.
$$

解 对这个积分在上册 325 页的例题 10.4.7 中已经给出一种解法, 下面的解法是利用含参变量积分的性质. 由于 $f(x) = \frac{\ln(1 + x)}{1 + x^2}$ 没有有限形式的原函数, 直接积分是不可能的. 引入变量 $\alpha$ , 定义

$$
I (\alpha) = \int_ {0} ^ {1} \frac {\ln (1 + \alpha x)}{1 + x ^ {2}} \mathrm{d} x.
$$

易见 $I(1) = I$ 可以验证 $f(x,\alpha) = \frac{\ln(1 + \alpha x)}{1 + x^2}$ 在 $[0,1]\times [0,1]$ 上满足积分号下求导的条件，于是

$$
\begin{array}{r l} I ^ {\prime} (\alpha) & = \int_ {0} ^ {1} \frac {x}{(1 + x ^ {2}) (1 + \alpha x)} \mathrm{d} x \\ & = \frac {1}{1 + \alpha^ {2}} \int_ {0} ^ {1} \left(\frac {\alpha + x}{1 + x ^ {2}} - \frac {\alpha}{1 + \alpha x}\right) \mathrm{d} x \\ & = \frac {1}{1 + \alpha^ {2}} \left[ \alpha \arctan x + \frac {1}{2} \ln (1 + x ^ {2}) - \ln (1 + \alpha x) \right] \Big | _ {0} ^ {1} \\ & = \frac {1}{1 + \alpha^ {2}} \left[ \frac {\pi}{4} \alpha + \frac {1}{2} \ln 2 - \ln (1 + \alpha) \right]. \end{array}
$$

由此得出

$$
\begin{array}{r l} I (1) & = I (0) + \int_ {0} ^ {1} I ^ {\prime} (\alpha) \mathrm{d} \alpha = \int_ {0} ^ {1} \frac {1}{1 + \alpha^ {2}} \left[ \frac {\pi}{4} \alpha + \frac {1}{2} \ln 2 - \ln (1 + \alpha) \right] \mathrm{d} \alpha \\ & = \left(\frac {\pi}{8} \ln (1 + \alpha^ {2}) + \frac {1}{2} \ln 2 \arctan \alpha\right) \Big | _ {0} ^ {1} - I (1). \end{array}
$$

移项得

$$
I (1) = \frac {\pi}{8} \ln 2.
$$

### 23.1.3 练习题

1. 求 $F(\theta) = \int_{0}^{\pi} \ln(1 + \theta \cos x) \, \mathrm{d}x$ ( $|\theta| < 1$ ).

2. 设 $f(s, t)$ 为可微函数, $F(x) = \int_{0}^{x} \mathrm{d}t \int_{t^{2}}^{x^{2}} f(t, s) \, \mathrm{d}s$ . 求 $F'(x)$ .

3. 设 $f(x, y)$ 在 $(a, b) \times (c, d)$ 上连续有界，证明：

$$
I (x) = \int_ {c} ^ {d} f (x, y) \mathrm{d} y
$$

在 $(a,b)$ 上连续.

4. 设 $I(a) = \int_{0}^{2\pi} \ln (R^2 + a^2 - 2aR\cos \theta) \, \mathrm{d}\theta, |a| < R,$ 证明: $I'(a) = 0.$ 

5. 设 $a, b > 0$ , 求 $\int_0^1 \frac{x^b - x^a}{\ln x} \sin (\ln \frac{1}{x}) \mathrm{d}x$ .

6. 设 $F(t) = \int_{0}^{a} \mathrm{d}x \int_{0}^{a} f(x + y + t) \, \mathrm{d}y$ ，其中 $f$ 为连续函数，证明：

$$
F ^ {\prime \prime} (t) = f (t + 2 a) - 2 f (t + a) + f (t).
$$

7. 设 $f(t) = \left(\int_{0}^{t} \mathrm{e}^{-x^2} \, \mathrm{d}x\right)^2$ ， $g(t) = \int_{0}^{1} \frac{\mathrm{e}^{-t^2(1 + x^2)}}{1 + x^2} \, \mathrm{d}x$ . 证明： $f(t) + g(t) \equiv \frac{\pi}{4}$ ，并由此计算 $\int_{0}^{+\infty} \mathrm{e}^{-x^2} \, \mathrm{d}x$ .

## §23.2 含参变量广义积分

函数项级数可看成离散求和的含参变量广义积分, 其中函数的自变量对应着参变量. 因此含参变量广义积分的分析性质的研究与函数项级数的分析性质的研究在许多地方是类似的, 可以比照第十四章相关内容. 此外还可以参见 §16.1 的内容, 其中涉及以 $n$ 为参变量的无穷限广义积分.

### 23.2.1 一致收敛性

含参变量 t 的广义积分

$$
\varphi (t) = \int_ {a} ^ {+ \infty} f (x, t) \mathrm{d} x, \quad t \in T\tag{23.2}
$$

(T 是有限或无穷区间) 的分析性质研究的一个重要条件是积分关于参变量的一致收敛性.

设积分对每一个 $t \in T$ 收敛. 如果 $\forall \varepsilon > 0$ , 存在 $A_0 = A_0(\varepsilon)$ , 当 $A > A_0$ 时, 对一切 $t \in T$ , 成立

$$
\left| \int_ {A} ^ {+ \infty} f (x, t) \mathrm{d} x \right| <   \varepsilon ,
$$

则称含参变量广义积分 (23.2) 关于 $t \in T$ 一致收敛.

除了用上述定义外, 判定含参变量广义积分 (23.2) 的一致收敛还有下述方法.

1. Cauchy 一致收敛准则 $\int_{a}^{+\infty} f(x, t) \mathrm{d}x$ 关于 $t \in T$ 一致收敛的充分必要条件是: $\forall \varepsilon > 0$ , 存在 $A_0 > a$ , 当 $A, A' > A_0$ 时, 对一切 $t \in T$ , 有

$$
\left| \int_ {A} ^ {A ^ {\prime}} f (x, t) \mathrm{d} x \right| <   \varepsilon .
$$

2. Weierstrass 判别法 (M-判别法) 设 $\int_{a}^{+\infty} f(x, t) \, dx$ 在 $t \in T$ 上收敛, 如果
(1) $|f(x,t)| \leqslant F(x), a \leqslant x < +\infty, t \in T,$ (2) $\int_{a}^{+\infty}F(x)\mathrm{d}x$ 收敛,
则 $\int_{a}^{+\infty}f(x,t)\mathrm{d}x$ 关于 $t\in T$ 一致收敛.

3. Abel 判别法 设

(1) $\int_{a}^{+\infty} f(x, t) \mathrm{d}x$ 关于 $t \in T$ 一致收敛,

(2) 函数 $g(x,t)$ 关于 x 单调，且作为二元函数是有界的，

则 $\int_{a}^{+\infty}f(x,t)g(x,t)\mathrm{d}x$ 关于 $t\in T$ 一致收敛.

4. Dirichlet 判别法 设

(1) $\int_{a}^{A} f(x, t) \mathrm{d}x, \forall A \geqslant a, t \in T$ 是一致有界的，

(2) 函数 $g(x, t)$ 关于 $x$ 单调, 且 $\lim_{x \to +\infty} g(x, t) = 0$ 关于 $t \in T$ 是一致的, 则 $\int_{a}^{+\infty} f(x, t) g(x, t) \mathrm{d}x$ 关于 $t \in T$ 一致收敛.

5. Dini 定理 设 $f(x, t)$ 在 $D = \{(x, t) \mid a \leqslant x < +\infty, \alpha \leqslant t \leqslant \beta\}$ 上连续且不变号， $\varphi(t) = \int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 在 $[\alpha, \beta]$ 上连续，则 $\int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 关于 $t \in [\alpha, \beta]$ 为一致收敛.

上面所说的含参变量的广义积分是指积分限是无穷大的情形, 同样可以研究有瑕点的含参变量的广义积分, 结论 (包括 5 个判别法) 完全相仿.

判定含参变量广义积分不一致收敛的常用方法如下.

1. 按定义: $\exists \varepsilon_0 > 0, \forall M > 0$ , 存在 $A(M) > M$ 以及 $t(M) \in T$ , 使得

$$
\left| \int_ {A (M)} ^ {+ \infty} f (x, t (M)) \mathrm{d} x \right| \geqslant \varepsilon_ {0}.
$$

2. 按 Cauchy 一致收敛准则: $\exists \varepsilon_0 > 0, \forall M$ , 存在 $A_1(M) > M, A_2(M) > M$ 以及 $t(M) \in T$ , 使得

$$
\left| \int_ {A _ {1} (M)} ^ {A _ {2} (M)} f (x, t (M)) \mathrm{d} x \right| \geqslant \varepsilon_ {0}.
$$

3. 若 $f(x, t)$ 在 $[a, +\infty) \times T$ 上连续, $t_0$ 为 $T$ 的一个聚点, $\int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 在 $T \setminus \{t_0\}$ 上收敛, 而 $\int_{a}^{+\infty} f(x, t_0) \, \mathrm{d}x$ 发散, 则 $\int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 在 $T$ 上必定不一致收敛.

4. 若 $f(x, t)$ 在 $D = \{a \leqslant x < +\infty, \alpha \leqslant t \leqslant \beta\}$ 上连续， $\varphi(t) = \int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 在 $[\alpha, \beta]$ 上存在但不连续，则 $\int_{a}^{+\infty} f(x, t) \, \mathrm{d}x$ 在 $[\alpha, \beta]$ 上不一致收敛.

### 23.2.2 例题

最常用的判别法是 M-判别法, 教科书上已有很多例子. 下面举一些用其他判别法的例子, 此时被积函数往往是变号的, 并且广义积分是非绝对收敛的.

例题23.2.1 讨论

$$
I (y) = \int_ {0} ^ {+ \infty} \frac {\sin x ^ {2}}{1 + x ^ {y}} \mathrm{d} x
$$

在 $y \in [0, +\infty)$ 中的一致收敛性.

解 1 (用 Abel 判别法) 首先对任意固定的 $y \geqslant 0$ ，原广义积分是收敛的.

又因为 $\int_0^{+\infty}\sin x^2\mathrm{d}x = \int_0^{+\infty}\frac{\sin t}{2\sqrt{t}}\mathrm{d}t$ 收敛，与 $y$ 无关，故关于 $y\in [0, + \infty)$ 是一致收敛的.

任意固定 $y \in [0, +\infty)$ , $\frac{1}{1 + x^y}$ 是 $x$ 的单调函数, 且 $\left|\frac{1}{1 + x^y}\right| < 1$ . 由 Abel 判别法知含参变量 $y$ 的广义积分

$$
\int_ {0} ^ {+ \infty} \frac {\sin x ^ {2}}{1 + x ^ {y}} \mathrm{d} x
$$

关于 y 在 $[0, +\infty)$ 上一致收敛.

解 2 (用 Dirichlet 判别法) 将 $I(y)$ 改写为

$$
\int_ {0} ^ {+ \infty} x \sin x ^ {2} \cdot \frac {1}{x (1 + x ^ {y})} \mathrm{d} x.
$$

由于

$$
\left| \int_ {0} ^ {A} x \sin x ^ {2} \mathrm{d} x \right| = \left| - \frac {1}{2} \cos x ^ {2} \right| _ {0} ^ {A} \Bigg | \leqslant 1, \forall y \in [ 0, + \infty).
$$

对每一个固定的 $y \in [0, +\infty)$ , $\frac{1}{x(1 + x^y)}$ 对 $x$ 单调, 且

$$
\left| \frac {1}{x (1 + x ^ {y})} \right| \leqslant \frac {1}{x} \rightarrow 0 (x \rightarrow + \infty),
$$

故当 $x \to +\infty$ 时, $\frac{1}{x(1 + x^y)}$ 关于 $y$ 一致收敛于0. 由Dirichlet判别法知原广义积分对 $y \in [0, +\infty)$ 一致收敛.

例题23.2.2 讨论

$$
I (\alpha) = \int_ {1} ^ {+ \infty} \frac {\sin x}{x ^ {\alpha}} \mathrm{d} x
$$

在(1) $\alpha\in[\alpha_{0},+\infty)$ ，其中 $\alpha_{0}>0$ ;(2) $\alpha\in(0,+\infty)$ 中的一致收敛性.

注 此题在上册 384 页的例题 12.2.3 中出现过, 但积分区间是 $(0, +\infty)$ , 点 $x = 0$ 可能是瑕点, 在那里是讨论广义积分的收敛性与绝对收敛性.

解 (1) 由于 $\forall A > 1$ 有

$$
\left| \int_ {1} ^ {A} \sin x \mathrm{d} x \right| \leqslant 2,
$$

即关于 $\alpha \in [\alpha_0, +\infty)$ 上述积分一致有界. 又对每一个 $\alpha \in [\alpha_0, +\infty)$ , $\frac{1}{x^{\alpha}}$ 对 $x$ 单调, 且 $\left|\frac{1}{x^{\alpha}}\right| \leqslant \frac{1}{x^{\alpha_0}} \to 0 (x \to +\infty)$ , 即当 $x \to +\infty$ 时, $\frac{1}{x^{\alpha}}$ 关于 $\alpha \in [\alpha_0, +\infty)$ 一致趋于 0, 由 Dirichlet 判别法知 $I(\alpha)$ 在 $[\alpha_0, +\infty)$ 上是一致收敛的.

(2) $\frac{\sin x}{x^{\alpha}}$ 在 $[1, +\infty) \times (0, +\infty)$ 中连续, 对每一个 $\alpha \in (0, +\infty)$ , 广义积分是收敛的, $\alpha = 0$ 是 $(0, +\infty)$ 的聚点. 因此由积分 $\int_{0}^{+\infty} \sin x \, \mathrm{d}x$ 发散知广义积分 $I(\alpha)$ 在 $(0, +\infty)$ 上不一致收敛.

例题23.2.3 讨论积分 $\int_0^1 x^{p - 1}\ln^2 x\mathrm{d}x$ 在(1) $p\geqslant p_0 > 0$ ；(2) $p > 0$ 上的一致收敛性.

解 (1) 当 $p \geqslant p_0 > 0$ 时, 积分以 $x = 0$ 为惟一瑕点. 由于当 $x \in (0,1)$ 时

$$
\left| x ^ {p - 1} \ln^ {2} x \right| \leqslant \frac {\ln^ {2} x}{x ^ {1 - p _ {0}}},
$$

而瑕积分 $\int_0^1\frac{\ln^2x}{x^{1 - p_0}}\mathrm{d}x$ 是收敛的，故由M-判别法知积分在 $p\geqslant p_0 > 0$ 上是一致收敛的.

(2) 当 $p$ 充分接近 0 时, $x^{p-1} \ln^2 x$ 与 $\frac{\ln^2 x}{x}$ 相接近, 而 $\int_0^1 \frac{\ln^2 x}{x} \mathrm{d}x$ 是发散的, 由此猜测 $p > 0$ 时原积分不是一致收敛的. 下面给出严格的证明: $\forall \xi \in (0,1)$ ,

$$
\left| \int_ {0} ^ {\xi} x ^ {p - 1} \ln^ {2} x \mathrm{d} x \right| = \int_ {0} ^ {\xi} x ^ {p - 1} \ln^ {2} x \mathrm{d} x \geqslant \ln^ {2} \xi \int_ {0} ^ {\xi} \frac {\mathrm{d} x}{x ^ {1 - p}} = \ln^ {2} \xi \cdot \frac {1}{p} \xi^ {p}.
$$

由于 $\lim_{\xi \to 0^{+}}\xi^{\xi} = 1$ ，取 $p = \xi \in (0,1)$ ，则当 $\xi \rightarrow 0^{+}$ 时

$$
\ln^ {2} \xi \cdot \frac {1}{p} \xi^ {p} = \frac {\ln^ {2} \xi}{\xi} \cdot \xi^ {\xi} \rightarrow + \infty .
$$

由极限的保号性知存在 $\xi_0\in [0,1]$ ，当 $0 < \xi \leqslant \xi_0$ 时， $\ln^2\xi \cdot \xi^{\xi -1} > 1$ ，所以存在 $\varepsilon_0 = 1,\forall \delta >0,$ 存在 $\xi_{1} = \min \{\delta ,\xi_{0}\}$ ， $p = \xi_{1}$ ，使

$$
\left| \int_ {0} ^ {\delta} x ^ {p - 1} \ln^ {2} x \mathrm{d} x \right| \geqslant \left| \int_ {0} ^ {\xi_ {1}} x ^ {\xi_ {1} - 1} \ln^ {2} x \mathrm{d} x \right| \geqslant \ln^ {2} \xi_ {1} \cdot \xi_ {1} ^ {\xi_ {1} - 1} \geqslant 1.
$$

由一致收敛的定义知瑕积分不是一致收敛的.

注 对瑕积分的一致收敛性的讨论, 也可以转化为无穷限积分的情形去讨论, 但这种转化中使用的变量代换不应与参变量发生关系, 否则会出现错误结论.

例题23.2.4 证明： $I(t) = \int_{1}^{+\infty}\frac{x\sin tx}{a^2 + x^2}\mathrm{d}x$ 在 $(0, + \infty)$ 上不一致收敛.

分析 被积函数中因子 $\frac{x}{a^2 + x^2}$ 当 $x \to +\infty$ 时的渐近性态与 $\frac{1}{x}$ 相同. 而 $\int_{1}^{+\infty} \frac{\sin tx}{x} \, \mathrm{d}x$ 在 $(0, +\infty)$ 上是不一致收敛的, 故可依此证明原含参变量广义积分在 $(0, +\infty)$ 上也是不一致收敛的. 下面给出具体的证明.

证1 反证法. 由于 $\frac{\sin tx}{x} = \frac{x\sin tx}{a^2 + x^2} \cdot \frac{a^2 + x^2}{x^2}$ , 若 $I(t) = \int_{1}^{+\infty} \frac{x\sin tx}{a^2 + x^2} \, \mathrm{d}x$ 在 $(0, +\infty)$ 上一致收敛, $\frac{a^2 + x^2}{x^2} = 1 + \frac{a^2}{x^2}$ 对 $x$ 单调且 $\left|1 + \frac{a^2}{x^2}\right| \leqslant 1 + a^2$ , 由Abel判别法知含参变量 $t$ 的广义积分

$$
\int_ {1} ^ {+ \infty} \frac {\sin t x}{x} \mathrm{d} x
$$

在 $(0,+\infty)$ 上也一致收敛. 引出矛盾.

证2 $\forall A > 0$ ，取 $A_0\geqslant A$ ，且令 $t_0 = \frac{1}{A_0}$ ，则

$$
\int_ {A _ {0}} ^ {2 A _ {0}} \frac {x \sin t _ {0} x}{a ^ {2} + x ^ {2}} \mathrm{d} x = \int_ {t _ {0} A _ {0}} ^ {2 t _ {0} A _ {0}} \frac {y \sin y}{a ^ {2} t _ {0} ^ {2} + y ^ {2}} \mathrm{d} y = \int_ {1} ^ {2} \frac {y \sin y}{\frac {a ^ {2}}{A _ {0} ^ {2}} + y ^ {2}} \mathrm{d} y.
$$

不妨设 $A_0 \geqslant a$ ，则当 $1 \leqslant y \leqslant 2$ 时有

$$
\frac {y}{\frac {a ^ {2}}{A _ {0} ^ {2}} + y ^ {2}} \geqslant \frac {y}{1 + y ^ {2}} = \frac {1}{y} \frac {y ^ {2}}{1 + y ^ {2}} \geqslant \frac {1}{2} \cdot \frac {1}{y},
$$

于是

$$
\int_ {A _ {0}} ^ {2 A _ {0}} \frac {x \sin t _ {0} x}{a ^ {2} + x ^ {2}} \mathrm{d} x \geqslant \frac {1}{2} \int_ {1} ^ {2} \frac {\sin y}{y} \mathrm{d} y = \varepsilon_ {0} > 0.
$$

由 Cauchy 准则知 $\int_{1}^{+\infty}\frac{x\sin tx}{a^{2}+x^{2}}dx$ 在 $(0,+\infty)$ 上不一致收敛.

### 23.2.3 练习题

1. 讨论下列广义积分的一致收敛性:
(1) $\int_0^{+\infty}\mathrm{e}^{-(1 + a^2)t}\sin t\mathrm{d}t,a\in (-\infty , + \infty);$ 

(2) $\int_0^{+\infty}\frac{\cos xy}{\sqrt{x + y}}\mathrm{d}x,y\in [y_0, + \infty),$ 其中 $y_{0} > 0;$ 

(3) $\int_{0}^{+\infty}\mathrm{e}^{-tx^2}\mathrm{d}x,t\in (0, + \infty);$ 

(4) $\int_{1}^{+\infty}\mathrm{e}^{-\alpha x}\frac{\cos x}{\sqrt{x}}\mathrm{d}x,\alpha \in [0, + \infty);$ 

(5) $\int_0^{+\infty}\mathrm{e}^{-(x - y)^2}\mathrm{d}x,y\in (-\infty , + \infty);$ 

(6) $\int_0^{+\infty} x \ln x \mathrm{e}^{-t\sqrt{x}} \mathrm{d}x,$ (1) $t \in [t_0, +\infty)$ , 其中 $t_0 > 0$ , (2) $t \in (0, +\infty)$ ;

(7) $\int_{1}^{+\infty}\frac{1 - \mathrm{e}^{-ut}}{t}\cos t\mathrm{d}t,u\in [0,1];$ 

(8) $\int_0^{+\infty}\frac{\alpha t}{1 + \alpha^2 + t^2}\cdot \mathrm{e}^{-\alpha^2 t^2}\cos \alpha^2 t^2\mathrm{d}t,\alpha \in (0, + \infty);$ 

(9) $\int_0^{+\infty}\mathrm{e}^{-x^2 (1 + y^2)}\sin y\mathrm{d}y,x\in (0, + \infty);$ 

(10) $\int_0^{+\infty}\frac{\alpha\mathrm{d}x}{1 + \alpha^2x^2},\alpha \in (0,1);$ 

(11) $\int_0^2\frac{x^t}{\sqrt[3]{(x - 1)(x - 2)}}\mathrm{d}x,|t| <   \frac{1}{2};$ 

(12) $\int_0^1 (1 - x)^{u - 1}\mathrm{d}x,$ (1) $u\in [a, + \infty)$ ，其中 $a > 0$ ，(2） $u\in (0, + \infty)$ 

2. 设 $\int_{0}^{+\infty} x^{\lambda} f(x) \, \mathrm{d}x$ 当 $\lambda = a, \lambda = b$ 时收敛 ( $a < b$ ). 证明: $\int_{0}^{+\infty} x^{\lambda} f(x) \, \mathrm{d}x$ 关于 $\lambda \in [a, b]$ 一致收敛.

3. 证明：积分 $\int_0^{+\infty} x \mathrm{e}^{-xy} \mathrm{d}y$ 在 $(0, +\infty)$ 上不一致收敛.

### 23.2.4 主要性质

与函数项级数类似, 含参变量的广义积分有如下主要性质.

命题23.2.1（连续性）设 $f(x,t)$ 在 $D = \{(x,t)\mid a\leqslant x <   + \infty ,\alpha \leqslant t\leqslant \beta \}$ 上连续，且 $\int_{a}^{+\infty}f(x,t)\mathrm{d}x$ 关于 $t$ 在 $[\alpha ,\beta ]$ 上一致收敛于 $\varphi (t)$ ，则 $\varphi (t)$ 在 $[\alpha ,\beta ]$ 上连续，即 $\forall t_0\in [\alpha ,\beta ]$ ，有

$$
\lim _ {t \to t _ {0}} \int_ {a} ^ {+ \infty} f (x, t) \mathrm{d} x = \int_ {a} ^ {+ \infty} \lim _ {t \to t _ {0}} f (x, t) \mathrm{d} x.
$$

命题23.2.2（可微性）设 $f(x,t)$ ， $f_{t}(x,t)$ 在 $D$ 上连续， $\int_{a}^{+\infty}f(x,t)\mathrm{d}x$ 在 $[\alpha ,\beta ]$ 上收敛于 $\varphi (t),\int_{a}^{+\infty}f_{t}(x,t)\mathrm{d}x$ 关于 $t\in [\alpha ,\beta ]$ 一致收敛，则 $\varphi (t)$ 在 $[\alpha ,\beta ]$ 上可微，且

$$
\varphi^ {\prime} (t) = \frac {\mathrm{d}}{\mathrm{d} t} \int_ {a} ^ {+ \infty} f (x, t) \mathrm{d} x = \int_ {a} ^ {+ \infty} f _ {t} (x, t) \mathrm{d} x.
$$

命题 23.2.3 (交换积分次序) 情形 1: 在命题 23.2.1 的条件下, $\varphi(t)$ 在 $[\alpha, \beta]$ 上可积, 且

$$
\int_ {\alpha} ^ {\beta} \mathrm{d} t \int_ {a} ^ {+ \infty} f (x, t) \mathrm{d} x = \int_ {a} ^ {+ \infty} \mathrm{d} x \int_ {\alpha} ^ {\beta} f (x, t) \mathrm{d} t.
$$

情形 2: 若 $f(x,t)$ 在 $x \geqslant a, t \geqslant c$ 上连续,

$$
\int_ {a} ^ {+ \infty} f (x, t)   \mathrm{d} x    \text {与}    \int_ {c} ^ {+ \infty} f (x, t)   \mathrm{d} t\tag{23.3}
$$

在任意有穷区间上一致收敛(第一个关于t, 第二个关于x), 并且两个累次积分

$$
\int_ {c} ^ {+ \infty} \mathrm{d} t \int_ {a} ^ {+ \infty} | f (x, t) |   \mathrm{d} x    \text {与}    \int_ {a} ^ {+ \infty} \mathrm{d} x \int_ {c} ^ {+ \infty} | f (x, t) |   \mathrm{d} t
$$

中至少有一个存在, 则两个累次积分

$$
\int_ {c} ^ {+ \infty} \mathrm{d} t \int_ {a} ^ {+ \infty} f (x, t)   \mathrm{d} x    \text {与}    \int_ {a} ^ {+ \infty} \mathrm{d} x \int_ {c} ^ {+ \infty} f (x, t)   \mathrm{d} t\tag{23.4}
$$

都存在并且相等.

注1(Dini定理) 如果 $f(x,t)$ 连续非负，且(23.3)中两个积分都是连续的(第一个关于 $t$ ，第二个关于 $x$ )，则(23.4)中的两个累次积分中的一个存在可推出另一个也存在，并且二者相等.关于这个定理的证明可见[8].

注2 关于命题23.2.1中的极限号与积分号的换序, 如果将 $f(x,t)$ 视为 $f_{t}(x)$ , 将 $t$ 与命题16.1.1, 16.1.2中的下标 $n$ 等同, 将 $t \to t_{0}$ 视为 $n \to \infty$ , 则也有相应的极限与积分的换序定理.

### 23.2.5 例题

本小节的例题分为三种类型.

1. 应用 Dirichlet 积分

$$
\int_ {0} ^ {+ \infty} \frac {\sin x}{x} \mathrm{d} x = \frac {\pi}{2}, \quad \int_ {0} ^ {+ \infty} \frac {\sin \alpha x}{x} \mathrm{d} x = \frac {\pi}{2} \cdot \operatorname{sgn} \alpha
$$

或 Euler-Poisson 积分

$$
\int_ {0} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x = \frac {\sqrt {\pi}}{2}, \quad \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \alpha x ^ {2}} \mathrm{d} x = \frac {\sqrt {\pi}}{2 \sqrt {\alpha}} (\alpha > 0)
$$

求其他广义积分的值.

2. 讨论含参变量广义积分的分析性质.

3. 用积分号下求导或积分的方法, 求含参变量广义积分. 并用“嵌入法”计算广义积分.

例题23.2.5 求 $\int_0^{+\infty} \frac{1}{x^2} (\mathrm{e}^{-\alpha x^2} - 1) \, \mathrm{d}x,$ 其中 $\alpha \geqslant 0$ .

解 由于 $\lim_{x\to 0^{+}}\frac{\mathrm{e}^{-\alpha x^2} - 1}{x^2} = -\alpha$ ，所以 $x = 0$ 不是瑕点.原广义积分与Poisson积分比较，多了和因子-1与积因子 $\frac{1}{x^2}$ ，现设法用分部积分吸收掉

$$
\begin{array}{r l} \int_ {0} ^ {+ \infty} \frac {1}{x ^ {2}} (\mathrm{e} ^ {- \alpha x ^ {2}} - 1) \mathrm{d} x & = - \int_ {0} ^ {+ \infty} (\mathrm{e} ^ {- \alpha x ^ {2}} - 1) \mathrm{d} \frac {1}{x} \\ & = - \frac {1}{x} \left(\mathrm{e} ^ {- \alpha x ^ {2}} - 1\right) \Big | _ {0} ^ {+ \infty} + \int_ {0} ^ {+ \infty} \frac {1}{x} \mathrm{e} ^ {- \alpha x ^ {2}} \cdot (- 2 \alpha x) \mathrm{d} x \\ & = - 2 \alpha \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \alpha x ^ {2}} \mathrm{d} x = - \sqrt {\pi \alpha}. \end{array}
$$

注 本题目也可以用在积分号下求导的方法去求解.

例题23.2.6 证明： $F(\alpha) = \int_{0}^{+\infty}\frac{x\mathrm{d}x}{2 + x^{\alpha}}$ 在 $(2, + \infty)$ 上连续.

证 $\forall \varepsilon > 0$ ，当 $\alpha \in [2 + \varepsilon, +\infty)$ 时有

$$
\left| \frac {x}{2 + x ^ {\alpha}} \right| \leqslant \frac {1}{x ^ {1 + \varepsilon}}, \quad x \in [ 1, + \infty).\tag{23.5}
$$

由M-判别法知

$$
\int_ {1} ^ {+ \infty} \frac {x}{2 + x ^ {\alpha}} \mathrm{d} x\tag{23.6}
$$

关于 $\alpha \in [2 + \varepsilon, +\infty)$ 是一致收敛的. 由此以及一致收敛的定义知 $\int_0^{+\infty} \frac{x}{2 + x^\alpha} \mathrm{d}x$ 关于 $\alpha \in [2 + \varepsilon, +\infty)$ 也是一致收敛的. 于是 $F(\alpha)$ 在 $[2 + \varepsilon, +\infty)$ 上连续. 由 $\varepsilon$ 的任意性知 $F(\alpha)$ 在 $(2, +\infty)$ 上连续.

注1 由于连续性本质上是一种局部的分析性质, 我们可以先证明 $F(\alpha)$ 在 $(2, +\infty)$ 上的内闭一致收敛性, 然后用连续性定理得到内闭连续, 而内闭连续等价于在开区间上连续. 也可以对于 $(2, +\infty)$ 中的任一点 $\alpha_0$ , 在 $\alpha_0$ 的小的闭邻域中证明 $F(\alpha)$ 的连续性, 再从 $\alpha_0$ 的任意性推出 $F(\alpha)$ 在 $(2, +\infty)$ 上的连续性. 这种想法也可用于可微性证明.

注2 由于不等式(23.5)只对 $x \in [1, +\infty)$ 成立，在 $x \in [0, +\infty)$ 上不成立，因此由M-判别法只能证明(23.6)是一致收敛的。但由一致收敛的定义，

$$
\int_ {0} ^ {+ \infty} {\frac {x}{2 + x ^ {\alpha}}}   \mathrm{d} x    \text {与}    \int_ {1} ^ {+ \infty} {\frac {x}{2 + x ^ {\alpha}}}   \mathrm{d} x
$$

的一致收敛性是等价的. 因此由后者的一致收敛性可推知前者的一致收敛性, 这种方法称为“截断法”.

例题23.2.7 证明：当 $b \neq 0$ 时

$$
F (a) = \int_ {0} ^ {+ \infty} \frac {1}{t} (1 - \mathrm{e} ^ {- a t}) \cos b t \mathrm{d} t
$$

在 $[0, +\infty)$ 上连续，在 $(0, +\infty)$ 上可导.

证 由于 $\lim_{t\to 0^{+}}\frac{1}{t} (1 - \mathrm{e}^{-at}) = a,$ 所以 $t = 0$ 不是瑕点.

(1) 证明 $F(a)$ 在 $[0, +\infty)$ 上连续. 令

$$
f (t, a) = \left\{ \begin{array}{l l} \frac {1}{t} (1 - \mathrm{e} ^ {- a t}) \cos b t, & t > 0, a \geqslant 0, \\ a, & t = 0, a \geqslant 0, \end{array} \right.
$$

则 $f(t,a)$ 在 $[0,+\infty)\times[0,+\infty)$ 上连续.

由 $b \neq 0$ 知 $\int_{1}^{+\infty} \frac{\cos bt}{t} \, \mathrm{d}t$ 关于 $a \in [0, +\infty)$ 一致收敛，又 $1 - \mathrm{e}^{-at}$ 对 $t$ 单调，且 $|1 - \mathrm{e}^{-at}| \leqslant 2$ ，故由Abel判别法知 $\int_{1}^{+\infty} \frac{1}{t} (1 - \mathrm{e}^{-at}) \cos bt \, \mathrm{d}t$ 关于 $a \in [0, +\infty)$ 一致收敛。从而 $\int_{1}^{+\infty} \frac{1}{t} (1 - \mathrm{e}^{-at}) \cos bt \, \mathrm{d}t$ 在 $a \in [0, +\infty)$ 上连续。又由本章第一节的命题23.1.2（连续性）知 $\int_{0}^{1} \frac{1}{t} (1 - \mathrm{e}^{-at}) \cos bt \, \mathrm{d}t$ 也是 $a \in [0, +\infty)$ 上的连续函数，所以 $F(a)$ 在 $a \in [0, +\infty)$ 上连续。

(2) 证明 $F(a)$ 在 $(0, +\infty)$ 上可导. 由

$$
\frac {\partial f}{\partial a} (t, a) = \mathrm{e} ^ {- a t} \cos b t, \quad t \geqslant 0, a \geqslant 0
$$

知 $f(t,a)$ 与 $f_{a}(t,a)$ 都在 $[0, + \infty)\times [0, + \infty)$ 上连续，且 $\forall \varepsilon >0$ ，当 $a\geqslant \varepsilon$ 时

$$
\left| f _ {a} (t, a) \right| \leqslant \mathrm{e} ^ {- a t} \leqslant \mathrm{e} ^ {- \varepsilon t}, \quad t \in [ 0, + \infty),
$$

而 $\int_0^{+\infty}\mathrm{e}^{-\varepsilon t}\mathrm{d}t$ 收敛，由M-判别法知 $\int_0^{+\infty}f_a(t,a)\mathrm{d}t$ 关于 $a\in [\varepsilon , + \infty)$ 是一致收敛的.于是 $F(a)$ 在 $[\varepsilon , + \infty)$ 上可导，由 $\varepsilon$ 的任意性知 $F(a)$ 在 $(0, + \infty)$ 上可导，且

$$
F ^ {\prime} (a) = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- a t} \cos b t \mathrm{d} t, a \in (0, + \infty).\tag{23.7}
$$

例题 23.2.8 求例题 23.2.7 中的 $F(a)$ .

解 1 利用表达式 (23.7), 则 a > 0 时

$$
F ^ {\prime} (a) = \frac {\mathrm{e} ^ {- a t}}{a ^ {2} + b ^ {2}} (b \sin b t - a \cos b t) \Big | _ {0} ^ {+ \infty} = \frac {a}{a ^ {2} + b ^ {2}}.
$$

于是

$$
F (a) = \frac {1}{2} \ln (a ^ {2} + b ^ {2}) + C.\tag{23.8}
$$

由于 $F(a)$ 在 $[0, +\infty)$ 上连续，且 $F(0) = 0$ ，于是在(23.8)中令 $a\to 0$ ，得到

$$
0 = \frac {1}{2} \ln b ^ {2} + C.
$$

所以 $C = -\frac{1}{2}\ln b^2$ ，最后得到

$$
F (a) = \frac {1}{2} \ln \frac {a ^ {2} + b ^ {2}}{b ^ {2}}.
$$

解2 用“嵌入法”. 注意到 $F(a)$ 的被积函数中难处理的因子是 $\frac{1}{t}$ . 可以像解1那样用对 $a$ 求导的办法消去 $\frac{1}{t}$ , 又可以把 $\frac{1}{t} (1 - e^{-at})$ 写成一个特殊的积分值, 即引入

$$
I (\beta) = \int_ {0} ^ {+ \infty} \frac {1}{t} \left(\mathrm{e} ^ {- \beta t} - \mathrm{e} ^ {- \alpha t}\right) \cos b t \mathrm{d} t,
$$

其中 $\alpha > 0, b \neq 0$ 固定，则 $F(\alpha) = I(0)$ . 因为

$$
\frac {1}{t} (\mathrm{e} ^ {- \beta t} - \mathrm{e} ^ {- \alpha t}) = - \int_ {\alpha} ^ {\beta} \mathrm{e} ^ {- t y} \mathrm{d} y,
$$

所以

$$
I (\beta) = - \int_ {0} ^ {+ \infty} \mathrm{d} t \int_ {\alpha} ^ {\beta} \mathrm{e} ^ {- t y} \cos b t \mathrm{d} y.
$$

形式上交换积分次序得

$$
I (\beta) = - \int_ {\alpha} ^ {\beta} \mathrm{d} y \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- t y} \cos b t \mathrm{d} t = - \int_ {\alpha} ^ {\beta} \frac {y}{y ^ {2} + b ^ {2}} \mathrm{d} y = \frac {1}{2} \ln \frac {\alpha^ {2} + b ^ {2}}{\beta^ {2} + b ^ {2}}.
$$

若上式对 $\beta = 0$ 成立，则可得 $F(\alpha) = I(0) = \frac{1}{2}\ln \frac{\alpha^2 + b^2}{b^2}$ .

下面验证条件. 先考查对哪些 $\beta$ 积分可换序.

(1) 设 $f(y, t) = \mathrm{e}^{-ty} \cos bt$ ，则 $\forall \alpha, \beta, f(y, t)$ 在 $[\alpha, \beta] \times [0, +\infty)$ 上连续.

(2) 设 $\beta > 0, \alpha > 0$ ，由 $|\mathrm{e}^{-ty}\cos bt| \leqslant \mathrm{e}^{-\min \{\alpha, \beta\} t}$ 及 M-判别法知含参变量广义积分 $\int_{0}^{+\infty} \mathrm{e}^{-ty}\cos bt \, \mathrm{d}t$ 在 $[\alpha, \beta]$ (或 $[\beta, \alpha]$ ) 上关于 $y$ 一致收敛。因此当 $\beta > 0$ 时，积分可换序，故

$$
I (\beta) = \frac {1}{2} \ln \frac {\alpha^ {2} + b ^ {2}}{\beta^ {2} + b ^ {2}}.
$$

最后验证在 $\alpha > 0, b \neq 0$ 时， $I(\beta)$ 在 $\beta = 0$ 处右连续。令

$$
f (t, \beta) = \left\{ \begin{array}{l l} \frac {1}{t} (\mathrm{e} ^ {- \beta t} - \mathrm{e} ^ {- \alpha t}) \cos b t, & t > 0, \beta \geqslant 0, \\ - \beta + \alpha , & t = 0, \beta \geqslant 0, \end{array} \right.
$$

则 $f(t,\beta)$ 在 $[0, + \infty)\times [0, + \infty)$ 上连续.

下面用 Abel 判别法证明 $I(\beta)=\int_{0}^{+\infty}\frac{1}{t}(e^{-\beta t}-e^{-\alpha t})\cos bt dt$ 关于 $\beta$ 在 $[0,+\infty)$ 上一致收敛，从而 $I(\beta)$ 在 $\beta=0$ 处右连续。事实上

(1) $\int_{1}^{+\infty}\frac{1}{t}\cos bt\mathrm{d}t$ 关于 $\beta \in [0, + \infty)$ 是一致收敛的；

(2) 对任意固定的 $\beta \geqslant 0$ ,

$$
\frac {\mathrm{d}}{\mathrm{d} t} \left(\mathrm{e} ^ {- \beta t} - \mathrm{e} ^ {- \alpha t}\right) = - \beta \mathrm{e} ^ {- \beta t} + \alpha \mathrm{e} ^ {- \alpha t} = \mathrm{e} ^ {- \alpha t} [ \alpha - \beta \mathrm{e} ^ {(\alpha - \beta) t} ]
$$

当 $t$ 足够大时是定号的，故 $\mathrm{e}^{-\beta t} - \mathrm{e}^{-\alpha t}$ 当 $t$ 充分大时是单调的，又 $|\mathrm{e}^{-\beta t} - \mathrm{e}^{-\alpha t}| \leqslant 2$ 由Abel判别法知 $I(\beta) = \int_0^{+\infty} \frac{1}{t} (\mathrm{e}^{-\beta t} - \mathrm{e}^{-\alpha t}) \cos bt \, \mathrm{d}t$ 关于 $\beta$ 在 $[0, +\infty)$ 上一致收敛，从而 $I(\beta)$ 在 $\beta = 0$ 右连续.

### 23.2.6 练习题

1. 设 $\int_{a}^{+\infty} f(x, y) \mathrm{d}y$ 对于 $x$ 在 $x_0$ 的邻域 $U(x_0)$ 中收敛， $f_x(x, y)$ 在 $U(x_0) \times [a, +\infty)$ 中存在，且当 $x \to x_0$ 时， $f_x(x, y)$ 关于 $y$ 在任何有限区间上一致收敛于 $f_x(x_0, y)$ ，又知积分 $\int_{a}^{+\infty} f_x(x, y) \mathrm{d}y$ 在 $U(x_0)$ 上一致收敛。证明： $\frac{\mathrm{d}}{\mathrm{d}x} \left( \int_{a}^{+\infty} f(x, y) \mathrm{d}y \right) \bigg|_{x = x_0}$ 存在且等于 $\int_{a}^{+\infty} f_x(x_0, y) \mathrm{d}y$ 。

2. $F(\alpha) = \int_{0}^{+\infty}\frac{\sin(1 - \alpha^2)x}{x}\mathrm{d}x,$ 证明： $F(\alpha)$ 在 $(- \infty , - 1)\cup (-1,1)\cup (1, + \infty)$ 上连续，在 $\alpha = \pm 1$ 处间断.

3. 证明: $F(\alpha) = \int_{0}^{+\infty} \frac{\sin \alpha x^{2}}{x} \mathrm{d} x$ 在 $\alpha \in (0, +\infty)$ 上不一致收敛, 但在 $(0, +\infty)$ 上连续.

4. 证明： $F(x)=\int_{1}^{+\infty}\frac{xe^{-yx}}{y}\mathrm{d}y$ 在 $[0,+\infty)$ 上连续，在 $(0,+\infty)$ 上 $F'(x)$ 存在，且 $F'(x)=\int_{1}^{+\infty}\frac{\partial}{\partial x}\left(\frac{x}{y}\mathrm{e}^{-yx}\right)\mathrm{d}y.$ 

5. 设 $F(\alpha) = \int_{0}^{\pi} \frac{\sin x}{x^{\alpha} (\pi - x)^{2 - \alpha}} \, \mathrm{d}x$ ，证明： $F(\alpha)$ 在 (0,2) 中连续.

6. 设 $F(y) = \int_{0}^{+\infty} y \mathrm{e}^{-x^2 y^2} \cos[x(1 - y)] \, \mathrm{d}x$ , 求 $\lim_{y \to 1} F(y)$ .

7. 利用 Dirichlet 积分或 Euler-Poisson 积分求下列积分值:

(1) $\int_{-\infty}^{+\infty}\left(\frac{\sin x}{x}\right)^2\mathrm{d}x;$ 

(2) $\int_{0}^{+\infty}\frac{\sin^3x}{x}\mathrm{d}x;$ 

$$
\int_ {0} ^ {+ \infty} x ^ {2} \mathrm{e} ^ {- \alpha x ^ {2}} \mathrm{d} x (\alpha > 0); \tag {3}
$$

(4) $\int_{-\infty}^{+\infty}\mathrm{e}^{-(ax^2 +bx + c)}\mathrm{d}x (a > 0).$ 

8. 利用积分号下求导的方法求下列积分:

(1) $I(a) = \int_{0}^{+\infty}\mathrm{e}^{-ax}\frac{\sin x}{x}\mathrm{d}x (a\geqslant 0);$ 

$$
I (\alpha) = \int_ {0} ^ {+ \infty} \frac {\arctan \alpha x}{x (1 + x ^ {2})} \mathrm{d} x (\alpha \geqslant 0); \tag {2}
$$

(3) $f(x) = \int_{1}^{+\infty}\frac{1}{y} x\mathrm{e}^{-yx}\mathrm{d}y (x\geqslant 0).$ 

9. 利用积分号下求积分的方法求下列积分:

(1) 

$$
I (\alpha) = \int_ {0} ^ {+ \infty} {\frac {\arctan \alpha x}{x (1 + x ^ {2})}}   \mathrm{d} x (\alpha \geqslant 0) (\text {提示:} {\frac {\arctan \alpha x}{x}} = \int_ {0} ^ {\alpha} {\frac {\mathrm{d} y}{1 + y ^ {2} x ^ {2}}});
$$

$$
\int_ {0} ^ {+ \infty} {\frac {\cos \beta x}{x ^ {2} + \alpha^ {2}}}   \mathrm{d} x   (\text {提示:}   {\frac {1}{x ^ {2} + \alpha^ {2}}} = \lim _ {\varepsilon \to 0 ^ {+}} \int_ {\varepsilon} ^ {+ \infty} \mathrm{e} ^ {- t (x ^ {2} + \alpha^ {2})}   \mathrm{d} t).
$$

10. 求含参变量瑕积分

$$
I (\alpha) = \int_ {0} ^ {1} \frac {\ln (1 - \alpha^ {2} x ^ {2})}{\sqrt {1 - x ^ {2}}} \mathrm{d} x \quad (| \alpha | \leqslant 1).
$$

11. 计算

$$
I (y) = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- x ^ {2}} \cos (2 y x) \mathrm{d} x (- \infty <   y <   + \infty).
$$

## §23.3 B 函数与 Γ 函数

在计算积分或者解常微分方程时, 常常遇到其解不能表示为初等函数的问题. 解决这个问题的方法之一是引进一些新的函数, 它们可能是函数项级数的和函数, 或者是用含参变量积分表示的函数, 然后研究它们的性质, 甚至做出函数值表. 这类函数一般称为特殊函数. 这一节介绍的 Beta 函数 (记为 B 函数) 与 Gamma 函数 (记为 $\Gamma$ 函数) 就属于最重要特殊函数之列. 它们在数学的很多分支中都有应用. 有不少重要的定积分值可以用它们表示出来. 此外, Gamma 函数的一些性质的证明也是数学分析中很好的训练, 在 23.3.4 小节中的部分内容可作为习题课的补充材料. 这方面还可参考 [25, 55] 的 §7.4 中的内容.

### 23.3.1 B函数

B 函数也称为第一类 Euler 积分. B 函数是一个二元函数, 它的定义是

$$
\mathrm{B} (p, q) = \int_ {0} ^ {1} x ^ {p - 1} (1 - x) ^ {q - 1} \mathrm{d} x, \quad p, q > 0.\tag{23.9}
$$

它还有下列等价的积分表示

$$
\begin{array}{r l} \mathrm{B} (p, q) & = \int_ {0} ^ {+ \infty} \frac {y ^ {p - 1}}{(1 + y) ^ {p + q}} \mathrm{d} y = \int_ {0} ^ {+ \infty} \frac {y ^ {q - 1}}{(1 + y) ^ {p + q}} \mathrm{d} y \\ & = \frac {1}{2} \int_ {0} ^ {+ \infty} \frac {y ^ {p - 1} + y ^ {q - 1}}{(1 + y) ^ {p + q}} \mathrm{d} y, \end{array}
$$

$$
\mathrm{B} (p, q) = 2 \int_ {0} ^ {\pi / 2} \cos^ {2 p - 1} \theta \sin^ {2 q - 1} \theta \mathrm{d} \theta .
$$

B 函数的主要性质如下:

1. 对称性: $\mathrm{B}(p,q)=\mathrm{B}(q,p)$ ;

2. B(p,q) 在其定义域上连续, 且有任意阶连续偏导数;

3. 递推公式:

$$
\mathrm{B} (p, q + 1) = \frac {q}{p + q} \mathrm{B} (p, q), \quad \mathrm{B} (p + 1, q) = \frac {p}{p + q} \mathrm{B} (p, q).
$$

如果 $m, n$ 都是正整数，则

$$
\mathrm{B} (m, n) = \frac {(m - 1) ! (n - 1) !}{(m + n - 1) !} \quad (\text {参见上册326页例题10.4.10}).
$$

### 23.3.2 $\Gamma$ 函数

Γ 函数也称为第二类 Euler 积分. 它是一元函数, 其含参积分定义为

$$
\Gamma (x) = \int_ {0} ^ {+ \infty} t ^ {x - 1} \mathrm{e} ^ {- t} \mathrm{d} t, x > 0.\tag{23.10}
$$

它有如下的 Gauss 无穷乘积分解 (也称为 Euler-Gauss 公式) $^{①}$ 

$$
\Gamma (x) = \lim _ {n \rightarrow \infty} \frac {n ! n ^ {x}}{x (x + 1) \cdots (x + n)}.\tag{23.11}
$$

$\Gamma$ 函数的主要性质如下：

1. $\Gamma$ 函数与B函数的关系

$$
\mathrm{B} (p, q) = \frac {\Gamma (p) \cdot \Gamma (q)}{\Gamma (p + q)}, \quad p > 0, q > 0;
$$

2. $\Gamma(x)$ 在 $(0, +\infty)$ 上为严格下凸函数，它及其任意阶导数都连续，且

$$
\Gamma^ {(n)} (x) = \int_ {0} ^ {+ \infty} t ^ {x - 1} (\ln t) ^ {n} \mathrm{e} ^ {- t} \mathrm{d} t;
$$

3. 递推公式 (由此从 $\Gamma(1) = 1$ 出发得到 $\Gamma(n+1) = n!, \forall n \in \mathbf{N}_{+}$ )

$$
\Gamma (x + 1) = x \Gamma (x), \quad x > 0;\tag{23.12}
$$

4. $\ln\Gamma(x)$ 在 $(0,+\infty)$ 上为严格下凸函数;

5. Legendre 加倍公式: 对于 $x > 0$ 有

$$
\Gamma (2 x) = \frac {2 ^ {2 x - 1}}{\sqrt {\pi}} \Gamma (x) \Gamma \left(x + \frac {1}{2}\right);
$$

6. 余元公式: 对于 $0 < x < 1$ 有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/3c8ea90a18b731a0ba624888454f322eaa65d09dfb7bcb3de3ee2e9e5b70e079.jpg)


$$
\Gamma (x) \Gamma (1 - x) = \frac {\pi}{\sin \pi x}.
$$

图23.1

注1 从积分定义(23.10)出发, 利用递推公式(23.12)可以将 $\Gamma$ 函数的定义域开拓如下. 将(23.12)变形为

$$
\Gamma (x) = \frac {\Gamma (x + 1)}{x}.\tag{23.13}
$$

注意到右边当 -1 < x < 0 时也有定义, 于是我们用 (23.13) 的右边来定义 -1 < x < 0 时的 $\Gamma$ 函数的值, 以此类推, $\Gamma$ 函数的定义域可以开拓到除去 0 和负整数的一切实数. 当然这样的开拓结果与 (13.37) 的无穷乘积定义完全一致.

注2 在所列举的 $\Gamma$ 函数的性质中, 前三个在一般教科书中都有. 为证明 $\ln \Gamma(x)$ 下凸, 从 §8.4 中的下凸函数的定义出发, 用无穷限积分的 Hölder 不等式即可得到. 最后两个性质的证明比较困难, 见下面的 23.3.4 小节.

注3 在本章末的图23.2显示了延拓后的 $\Gamma$ 函数在区间[-5,4.1]上的图像.

### 23.3.3 例题

例题 23.3.1 设平面 x = 0, y = 0, z = 0 与 $x + y + z = 1$ 围成四面体 V，证明：

$$
\iiint_ {V} x ^ {a - 1} y ^ {b - 1} z ^ {c - 1} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \frac {\Gamma (a) \Gamma (b) \Gamma (c)}{(a + b + c) \Gamma (a + b + c)} (a, b, c > 0).
$$

证 作以下计算即可:

$$
\begin{array}{l} I = \iiint_ {V} x ^ {a - 1} y ^ {b - 1} z ^ {c - 1} \mathrm{d} x \mathrm{d} y \mathrm{d} z = \int_ {0} ^ {1} \mathrm{d} x \int_ {0} ^ {1 - x} \mathrm{d} y \int_ {0} ^ {1 - x - y} x ^ {a - 1} y ^ {b - 1} z ^ {c - 1} \mathrm{d} z \\ = \int_ {0} ^ {1} x ^ {a - 1} \mathrm{d} x \int_ {0} ^ {1 - x} \left(y ^ {b - 1} \frac {1}{c} z ^ {c}\right) \Big | _ {0} ^ {1 - x - y} \mathrm{d} y \\ = \frac {1}{c} \int_ {0} ^ {1} x ^ {a - 1} \mathrm{d} x \int_ {0} ^ {1 - x} y ^ {b - 1} (1 - x - y) ^ {c} \mathrm{d} y. \end{array}
$$

再令 $y = (1 - x)t$ ，则

$$
\begin{array}{l} I = \frac {1}{c} \int_ {0} ^ {1} x ^ {a - 1} \mathrm{d} x \int_ {0} ^ {1} (1 - x) ^ {b - 1} t ^ {b - 1} (1 - x) ^ {c} (1 - t) ^ {c} (1 - x) \mathrm{d} t \\ = \frac {1}{c} \int_ {0} ^ {1} x ^ {a - 1} (1 - x) ^ {b + c} \mathrm{d} x \int_ {0} ^ {1} t ^ {b - 1} (1 - t) ^ {c} \mathrm{d} t \\ = \frac {1}{c} \mathrm{B} (a, b + c + 1) \mathrm{B} (b, c + 1) \\ = \frac {1}{c} \frac {\Gamma (a) \Gamma (b + c + 1)}{\Gamma (a + b + c + 1)} \cdot \frac {\Gamma (b) \Gamma (c + 1)}{\Gamma (b + c + 1)} \\ = \frac {\Gamma (a) \Gamma (b) \Gamma (c)}{(a + b + c) \Gamma (a + b + c)}. \end{array}
$$

例题23.3.2 确定 $\alpha, \beta, \gamma,$ 使

$$
I = \iiint_ {D} \frac {\mathrm{d} x \mathrm{d} y \mathrm{d} z}{1 + x ^ {\alpha} + y ^ {\beta} + z ^ {\gamma}} <   + \infty ,
$$

并求 I 的值, 其中 $D=\{(x,y,z)\mid x\geqslant0,y\geqslant0,z\geqslant0\}$ .

解 首先应该有 $\alpha > 0, \beta > 0, \gamma > 0$ . 至于进一步的条件, 我们将在计算中得到. 令 $x = u^{2 / \alpha}, y = v^{2 / \beta}, z = w^{2 / \gamma}$ , 则

$$
I = \frac {8}{\alpha \beta \gamma} \iiint_ {\Omega} \frac {u ^ {2 / \alpha - 1} v ^ {2 / \beta - 1} w ^ {2 / \gamma - 1}}{1 + u ^ {2} + v ^ {2} + w ^ {2}} \mathrm{d} u \mathrm{d} v \mathrm{d} w,
$$

其中 $\Omega = \{(u,v,w) \mid u \geqslant 0, v \geqslant 0, w \geqslant 0\}$ . 再作球坐标变换

$$
u = \rho \sin \varphi \cos \theta , v = \rho \sin \varphi \sin \theta , w = \rho \cos \varphi ,
$$

$$
\rho \geqslant 0, 0 \leqslant \varphi \leqslant \frac {\pi}{2}, 0 \leqslant \theta \leqslant \frac {\pi}{2},
$$

则

$$
\begin{array}{l} I = \frac {8}{\alpha \beta \gamma} \int_ {0} ^ {\pi / 2} \cos^ {2 / \alpha - 1} \theta \sin^ {2 / \beta - 1} \theta d \theta \cdot \int_ {0} ^ {\pi / 2} \sin^ {2 (\frac {1}{\alpha} + \frac {1}{\beta}) - 1} \varphi \cos^ {2 / \gamma - 1} \varphi d \varphi \\ \times \int_ {0} ^ {+ \infty} \frac {\rho^ {2 (\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma}) - 1}}{1 + \rho^ {2}} d \rho \\ = \frac {1}{\alpha \beta \gamma} B \left(\frac {1}{\alpha}, \frac {1}{\beta}\right) B \left(\frac {1}{\alpha} + \frac {1}{\beta}, \frac {1}{\gamma}\right) \int_ {0} ^ {+ \infty} \frac {t ^ {\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma} - 1}}{1 + t} d t. \end{array}
$$

可见当且仅当 $\frac{1}{\alpha} +\frac{1}{\beta} +\frac{1}{\gamma} <  1$ 时后一个积分收敛，并且有

$$
\int_ {0} ^ {+ \infty} \frac {t ^ {\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma} - 1}}{1 + t} d t = B \left(\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma}, 1 - \left(\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma}\right)\right),
$$

这样便得到

$$
I = \frac {1}{\alpha \beta \gamma} \Gamma \left(\frac {1}{\alpha}\right) \Gamma \left(\frac {1}{\beta}\right) \Gamma \left(\frac {1}{\gamma}\right) \Gamma \left(1 - \left(\frac {1}{\alpha} + \frac {1}{\beta} + \frac {1}{\gamma}\right)\right).
$$

例题 23.3.3 求积分 (见上册 395 页练习题 6(2))

$$
I (t) = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(x ^ {2} + \frac {t ^ {2}}{x ^ {2}}\right)} \mathrm{d} x, \quad t > 0.
$$

解 1 由 M-判别法, $I(t)$ 关于 t > 0 是一致收敛的, 形式上求导得

$$
I ^ {\prime} (t) = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(x ^ {2} + \frac {t ^ {2}}{x ^ {2}}\right)} \left(- \frac {2 t}{x ^ {2}}\right) \mathrm{d} x.
$$

$\forall t_0 > 0$ ，上述积分在 $t_0$ 的邻域上一致收敛，所以上面的求导可行.令 $x = \frac{1}{y}$ ，则

$$
I ^ {\prime} (t) = \int_ {+ \infty} ^ {0} \mathrm{e} ^ {- \left(\frac {1}{y ^ {2}} + y ^ {2} t ^ {2}\right)} 2 t \mathrm{d} y.
$$

再令 $yt = z$ ，则

$$
I ^ {\prime} (t) = - 2 \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(z ^ {2} + \frac {t ^ {2}}{z ^ {2}}\right)} \mathrm{d} z = - 2 I (t).
$$

所以

$$
\begin{array}{c} \ln I (t) = - 2 t + C, \\ I (t) = C \mathrm{e} ^ {- 2 t}. \end{array}
$$

考虑到 $I(0)=\int_{0}^{+\infty}\mathrm{e}^{-x^{2}}\mathrm{d}x=\frac{\sqrt{\pi}}{2}$ ，所以

$$
I (t) = \frac {\sqrt {\pi}}{2} \mathrm{e} ^ {- 2 t}.
$$

解 2 下面的方法需要的工具不多, 但不容易想到: 令 $y = \frac{t}{x}$ , 则

$$
I (t) = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(\frac {t ^ {2}}{y ^ {2}} + y ^ {2}\right)} \frac {t}{y ^ {2}} \mathrm{d} y.
$$

与原表达式相加得

$$
\begin{array}{r l} 2 I (t) & = \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(x ^ {2} + \frac {t ^ {2}}{x ^ {2}}\right)} \left(1 + \frac {t}{x ^ {2}}\right) \mathrm{d} x = \mathrm{e} ^ {- 2 t} \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \left(x - \frac {t}{x}\right) ^ {2}} \mathrm{d} \left(x - \frac {t}{x}\right) \\ & = \mathrm{e} ^ {- 2 t} \int_ {- \infty} ^ {+ \infty} \mathrm{e} ^ {- u ^ {2}} \mathrm{d} u = \sqrt {\pi} \mathrm{e} ^ {- 2 t}. \end{array}
$$

例题23.3.4 证明Riemann的zeta函数的积分形式

$$
\zeta (s) = \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {s}} = \frac {1}{\Gamma (s)} \int_ {0} ^ {+ \infty} \frac {x ^ {s - 1}}{\mathrm{e} ^ {x} - 1} \mathrm{d} x, \quad s > 1.
$$

证 对于 $x > 0$ 有展开式

$$
\begin{array}{r l} \frac {1}{\mathrm{e} ^ {x} - 1} & = \frac {\mathrm{e} ^ {- x}}{1 - \mathrm{e} ^ {- x}} \\ & = \mathrm{e} ^ {- x} (1 + \mathrm{e} ^ {- x} + \mathrm{e} ^ {- 2 x} + \dots) = \sum_ {n = 1} ^ {\infty} \mathrm{e} ^ {- n x}. \end{array}
$$

于是 $\forall A > 0$ 有

$$
\int_ {0} ^ {A} \frac {x ^ {s - 1}}{\mathrm{e} ^ {x} - 1} \mathrm{d} x = \int_ {0} ^ {A} x ^ {s - 1} \left(\sum_ {n = 1} ^ {\infty} \mathrm{e} ^ {- n x}\right) \mathrm{d} x.
$$

对于固定的 $s > 1$ ，级数 $\sum_{n = 1}^{\infty}x^{s - 1}\mathrm{e}^{-nx}$ 关于 $x\in [0, + \infty)$ 是一致收敛的，所以

$$
\begin{array}{r l} \int_ {0} ^ {A} \frac {x ^ {s - 1}}{\mathrm{e} ^ {x} - 1} \mathrm{d} x & = \sum_ {n = 1} ^ {\infty} \int_ {0} ^ {A} x ^ {s - 1} \mathrm{e} ^ {- n x} \mathrm{d} x = \sum_ {n = 1} ^ {\infty} \int_ {0} ^ {n A} \left(\frac {y}{n}\right) ^ {s - 1} \left(\frac {\mathrm{e} ^ {- y}}{n}\right) \mathrm{d} y \\ & = \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {s}} \int_ {0} ^ {n A} y ^ {s - 1} \mathrm{e} ^ {- y} \mathrm{d} y. \end{array}
$$

这个级数对于 $A \in [0, +\infty)$ 是一致收敛的，于是令 $A \to +\infty$ ，得

$$
\int_ {0} ^ {+ \infty} \frac {x ^ {s - 1}}{\mathrm{e} ^ {x} - 1} \mathrm{d} x = \Gamma (s) \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {s}}.
$$

例题23.3.5 求 $\int_0^1\frac{\ln x}{1 - x}\mathrm{d}x.$ 

解 令 $x = \mathrm{e}^{-t}$ , 则

$$
\int_ {0} ^ {1} \frac {\ln x}{1 - x} \mathrm{d} x = \int_ {+ \infty} ^ {0} \frac {- t}{1 - \mathrm{e} ^ {- t}} \mathrm{e} ^ {- t} (- \mathrm{d} t) = - \int_ {0} ^ {+ \infty} \frac {t}{\mathrm{e} ^ {t} - 1} \mathrm{d} t.
$$

在上题的结论中取 s = 2，则

$$
\int_ {0} ^ {1} \frac {\ln x}{1 - x} \mathrm{d} x = - \Gamma (2) \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} = - \frac {\pi^ {2}}{6}.
$$

例题23.3.6 求 $I = \iiint_{\Omega} \left(\sqrt{a^2 - x^2 - y^2}\right)^p \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z,$ 其中 $a > 0, p \geqslant 0, \Omega$ 是球体 $x^2 + y^2 + z^2 \leqslant a^2$ 被圆柱面 $x^2 + y^2 = ay$ 割下的区域（即Viviani体）.

解 见图 22.11 (现在 x, y 轴的位置有变化). 用柱坐标系, 则

$$
\Omega = \{(r, \theta , z) \mid 0 \leqslant \theta \leqslant \pi , 0 \leqslant r \leqslant a \sin \theta , - \sqrt {a ^ {2} - r ^ {2}} \leqslant z \leqslant \sqrt {a ^ {2} - r ^ {2}} \}.
$$

于是

$$
\begin{array}{l} I = \int_ {0} ^ {\pi} \mathrm{d} \theta \int_ {0} ^ {a \sin \theta} \mathrm{d} r \int_ {- \sqrt {a ^ {2} - r ^ {2}}} ^ {\sqrt {a ^ {2} - r ^ {2}}} \left(\sqrt {a ^ {2} - r ^ {2}}\right) ^ {p} r \mathrm{d} z = \int_ {0} ^ {\pi} \mathrm{d} \theta \int_ {0} ^ {a \sin \theta} 2 r (a ^ {2} - r ^ {2}) ^ {\frac {p + 1}{2}} \mathrm{d} r \\ = - \int_ {0} ^ {\pi} \left(\frac {2}{p + 3} (a ^ {2} - r ^ {2}) ^ {\frac {p + 3}{2}}\right) \Bigg | _ {0} ^ {a \sin \theta} \mathrm{d} \theta = \frac {4 a ^ {p + 3}}{p + 3} \int_ {0} ^ {\pi / 2} (1 - \cos^ {p + 3} \theta) \mathrm{d} \theta \\ = \frac {4 a ^ {p + 3}}{p + 3} \left(\frac {\pi}{2} - \frac {\Gamma \left(\frac {p + 4}{2}\right) \Gamma \left(\frac {1}{2}\right)}{2 \Gamma \left(\frac {p + 5}{2}\right)}\right). \end{array}
$$

### 23.3.4 $\Gamma$ 函数的特征刻画和几个重要公式的证明

前面已介绍过 $\Gamma$ 函数满足如下三条性质:

1. 当 x > 0 时, $\Gamma(x) > 0$ , 且 $\Gamma(1) = 1$ ;

2. $\Gamma(x+1)=x\Gamma(x);$ 

3. $\ln\Gamma(x)$ 在 $(0,+\infty)$ 上为下凸函数.

关于 $\Gamma$ 函数的一个非常漂亮的结果是Bohr(玻尔)与Mollerup(莫勒鲁普)定理(1922年)，即上面的三条性质完全刻画了 $\Gamma$ 函数.

命题 23.3.1 (Bohr-Mollerup 定理) 如果定义在 $(0, +\infty)$ 上的函数 f 满足下列三个条件:

(1) $f(x)>0$ , 且 $f(1)=1$ ,

(2) $f(x+1)=xf(x)$ , 

(3) $\ln f(x)$ 是 $(0, +\infty)$ 上的下凸函数,

则 $f(x) \equiv \Gamma(x), x \in (0, +\infty).$ 

证 已知 $\Gamma$ 函数满足上述三条, 故只要证明 $f$ 是由 (1), (2), (3) 惟一确定的函数就可以了. 而由 (2) 只要对 $x \in (0,1)$ 进行证明. 令 $\varphi(x) = \ln f(x)$ , 则

$$
\varphi (x + 1) = \varphi (x) + \ln x, \quad 0 <   x <   + \infty ,\tag{23.14}
$$

$\varphi (1) = 0$ ，且 $\varphi$ 是下凸函数.设 $0 <   x <   1$ ，考虑 $\varphi$ 在

$$
[ n, n + 1 ], \quad [ n + 1, n + 1 + x ], \quad [ n + 1, n + 2 ]
$$

三个闭区间上的差商，有

$$
\begin{array}{r l} \ln n & = \varphi (n + 1) - \varphi (n) \leqslant \frac {\varphi (n + 1 + x) - \varphi (n + 1)}{x} \\ & \leqslant \varphi (n + 2) - \varphi (n + 1) = \ln (n + 1). \end{array}\tag{23.15}
$$

另一方面，重复(23.14)可得

$$
\varphi (n + 1 + x) = \varphi (x) + \ln [ x (x + 1) \dots (x + n) ].
$$

代入(23.15)并整理得

$$
0 \leqslant \varphi (x) - \ln \left(\frac {n ! n ^ {x}}{x (x + 1) \cdots (x + n)}\right) \leqslant x \ln \left(1 + \frac {1}{n}\right).
$$

由对数函数的连续性, 令 $n \to \infty$ , 得

$$
\varphi (x) = \ln \left(\lim _ {n \rightarrow \infty} \frac {n ! n ^ {x}}{x (x + 1) \cdots (x + n)}\right).
$$

因此

$$
f (x) = \lim _ {n \rightarrow \infty} \frac {n ! n ^ {x}}{x (x + 1) \cdots (x + n)}.
$$

利用例题 16.1.4 的结论知 $f(x)=\Gamma(x)$ .

注 既然这个定理完全刻画了 $\Gamma$ 函数, 因此就可以由它出发导出 $\Gamma$ 函数的基本性质 (参见 [7] 的第 7 章), 下面就是一个例子.

命题23.3.2（Legendre加倍公式）对于 $x > 0$ 成立

$$
\Gamma (2 x) = \frac {2 ^ {2 x - 1}}{\sqrt {\pi}} \Gamma (x) \Gamma \left(x + \frac {1}{2}\right).
$$

证 设 $g(x) = \frac{2^{x - 1}}{\sqrt{\pi}}\Gamma \left(\frac{x}{2}\right)\Gamma \left(\frac{x + 1}{2}\right)$ , 利用 $\Gamma \left(\frac{1}{2}\right) = \sqrt{\pi}$ , 容易检验 $g(x)$ 满足 Bohr-Mollerup 定理中的条件 (1)-(3), 可见有

$$
\Gamma (x) = \frac {2 ^ {x - 1}}{\sqrt {\pi}} \Gamma \left(\frac {x}{2}\right) \Gamma \left(\frac {x + 1}{2}\right),
$$

将其中 x 换为 2x 就得到所要的加倍公式.

命题23.3.3（余元公式）对于 $0 < x < 1$ 成立

$$
\Gamma (x) \Gamma (1 - x) = \frac {\pi}{\sin \pi x}.
$$

根据本书前面的知识, 我们可以对余元公式给出下列三种证法:

证1利用 $\Gamma$ 函数的Euler-Gauss无穷乘积表达式(23.11)(即(13.38))与正弦函数的无穷乘积表达式(13.30).具体细节见例题13.4.4以及(13.40).

证2 首先利用 $\Gamma$ 函数与B函数的关系得到

$$
\Gamma (x) \Gamma (1 - x) = \mathrm{B} (x, 1 - x) = \int_ {0} ^ {+ \infty} \frac {1}{y ^ {x} (1 + y)} \mathrm{d} y,
$$

然后利用例题 16.1.3 的 Euler 积分公式.

证3 利用上册402页参考题8(2)的结果：当 $2m + 1 < 2n$ 时，有

$$
\int_ {- \infty} ^ {+ \infty} \frac {x ^ {2 m}}{1 + x ^ {2 n}} \mathrm{d} x = \frac {\pi}{n} \csc \frac {(2 m + 1) \pi}{2 n},
$$

于是有

$$
\begin{array}{r l} \Gamma \left(\frac {2 m + 1}{2 n}\right) \Gamma \left(1 - \frac {2 m + 1}{2 n}\right) & = \mathrm{B} \left(\frac {2 m + 1}{2 n}, 1 - \frac {2 m + 1}{2 n}\right) \\ & = \int_ {0} ^ {+ \infty} \frac {y ^ {\frac {2 m + 1}{2 n} - 1}}{1 + y} \mathrm{d} y \\ & = 2 n \int_ {0} ^ {+ \infty} \frac {x ^ {2 m}}{1 + x ^ {2 n}} \mathrm{d} x \\ & = \pi \csc \frac {(2 m + 1) \pi}{2 n}, \end{array}
$$

当 $x$ 为无理数时, 通过形如 $\frac{2m + 1}{2n}$ 的有理数取极限.

命题 23.3.4 ( $\Gamma$ 函数的 Stirling 公式) 关于 $\Gamma$ 函数有渐近公式 $^{①}$ :

$$
\Gamma (x + 1) \sim \sqrt {2 \pi x} \left(\frac {x}{\mathrm{e}}\right) ^ {x} (x \rightarrow + \infty).\tag{23.16}
$$

证（此证明取自[46]）在 $\Gamma (x) = \int_0^{+\infty}t^{x - 1}\mathrm{e}^{-t}\mathrm{d}t$ 中令 $t = x(1 + u)$ ，得到

$$
\Gamma (x + 1) = x ^ {x + 1} \mathrm{e} ^ {- x} \int_ {- 1} ^ {+ \infty} [ (1 + u) \mathrm{e} ^ {- u} ] ^ {x} \mathrm{d} u.\tag{23.17}
$$

令

$$
h (u) = \left\{ \begin{array}{l l} \frac {2}{u ^ {2}} [ u - \ln (1 + u) ], & - 1 <   u <   + \infty , \quad u \neq 0, \\ 1, & u = 0, \end{array} \right.
$$

则 h 在 $(-1, +\infty)$ 上为单调减少的连续函数，并满足

$$
(1 + u) \mathrm{e} ^ {- u} = \exp \left(- \frac {u ^ {2}}{2} h (u)\right).
$$

于是, 对 (23.17) 作代换 $u = s\sqrt{\frac{2}{x}}$ , 得

$$
\Gamma (x + 1) = x ^ {x} \mathrm{e} ^ {- x} \sqrt {2 x} \int_ {- \infty} ^ {+ \infty} \psi_ {x} (s) \mathrm{d} s,
$$

其中

$$
\psi_ {x} (s) = \left\{ \begin{array}{l l} \exp \left[ - s ^ {2} h \left(s \sqrt {\frac {2}{x}}\right) \right], & - \sqrt {\frac {x}{2}} <   s <   + \infty , \\ 0, & s \leqslant - \sqrt {\frac {x}{2}}. \end{array} \right.
$$

可以验证:

(1) 对每个 $s$ 而言, 当 $x \to +\infty$ 时, $\psi_x(s) \to \mathrm{e}^{-s^2}$ ;

(2) 当 $x \geqslant 1$ 时, 对 $s > 0$ , 有 $0 < \psi_x(s) < \psi_1(s)$ ;

(3) 对 $s < 0$ , 有 $0 < \psi_x(s) < \mathrm{e}^{-s^2}$ ;

(4) 对任意 A > 0, 含参变量 x 的广义积分 $\int_{-\infty}^{+\infty}\psi_{x}(s)\,\mathrm{d}s$ 在闭区间 $[-A,A]$ 上一致收敛;

(5) $\int_{0}^{+\infty}\psi_{1}(s)\mathrm{d}s$ 收敛.

因而，就可以得到

$$
\lim _ {x \rightarrow + \infty} \int_ {- \infty} ^ {+ \infty} \psi_ {x} (s) \mathrm{d} s = \int_ {- \infty} ^ {+ \infty} \mathrm{e} ^ {- s ^ {2}} \mathrm{d} s = \sqrt {\pi},
$$

即

$$
\lim _ {x \rightarrow + \infty} \frac {\Gamma (x + 1)}{\sqrt {2 \pi x} x ^ {x} \mathrm{e} ^ {- x}} = 1,
$$

这就是关于 $\Gamma$ 函数的 Stirling 公式 (23.16).

注 这只是关于 $\Gamma$ 函数的Stirling公式的最简单形式. 与上册363页(11.31)类似的关于 $\Gamma$ 函数的一般Stirling公式见[18](第二卷的540小节)等参考书.

### 23.3.5 练习题

1. 计算

(1) $\int_{0}^{1}\frac{\mathrm{d}x}{\sqrt{x\ln\frac{1}{x}}};\quad(2)\int_{0}^{+\infty}\frac{\sqrt[4]{x}}{(1+x)^{2}}\mathrm{d}x.$ 

2. 试用 $\Gamma$ 函数或 B 函数表示

$$
\int_ {0} ^ {\pi / 2} \tan^ {\alpha} x \mathrm{d} x (| \alpha | <   1); \tag {1}
$$

$$
(2) \int_ {- 1} ^ {1} (1 + x) ^ {a} (1 - x) ^ {b} \mathrm{d} x (a, b > 0).
$$

3. $n$ 为正整数, $p > 0$ , 证明:

$$
\mathrm{B} (p, n) = \frac {(n - 1) !}{p (p + 1) \cdots (p + n - 1)}.
$$

4. 证明: $\ln \Gamma(x)$ 是下凸函数.

5. 按照下列步骤证明公式 $\mathrm{B}(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$ .

(1) $\Gamma(p) = 2\int_{0}^{+\infty}u^{2p - 1}\mathrm{e}^{-u^2}\mathrm{d}u;$ 

$$
\begin{array}{r l} & {\Gamma (p)   \Gamma (q) = \underset {A \to + \infty} {\lim} 4    \iint_ {G (A)} f (u, v)   \mathrm{d} u   \mathrm{d} v,   \text {其中}} \\ & {\qquad \qquad \qquad f (u, v) = u ^ {2 p - 1} v ^ {2 q - 1} \mathrm{e} ^ {- (u ^ {2} + v ^ {2})},} \\ & {\qquad \qquad \qquad G (A) = \{(u, v)   |   0 \leqslant u \leqslant A,   0 \leqslant v \leqslant A \};} \end{array}\tag{2}
$$

$$
\begin{array}{r l} {(3) \text {令} D (R) = \Big \{(r, \theta) \Big | 0 \leqslant r \leqslant R,   0 \leqslant \theta \leqslant \frac {\pi}{2} \Big \}, \text {则}} \\ & {\quad \lim _ {A \to + \infty} \iint_ {D (A)} f (u, v)   \mathrm{d} u   \mathrm{d} v = \frac {1}{4} \mathrm{B} (p, q)   \Gamma (p + q),} \\ & {\quad \lim _ {A \to + \infty} \iint_ {D (\sqrt {2} A)} f (u, v)   \mathrm{d} u   \mathrm{d} v = \frac {1}{4} \mathrm{B} (p, q)   \Gamma (p + q);} \end{array}
$$

(4) $\mathrm{B}(p, q) = \frac{\Gamma(p) \Gamma(q)}{\Gamma(p + q)}.$ 

## §23.4 对于教学的建议

### 23.4.1 学习要点

1. 含参变量积分是我们遇到的又一种新的函数表示方式。对于它的分析性质的研究，如连续性、可微性和可积性等，涉及积分运算和其他分析运算的运算次序的交换性。一致收敛性给出了保证交换运算次序的重要条件。在很多情况下，可以用 M-判别法判断一致收敛性，这是应该熟练掌握的。

2. 用嵌入法计算广义积分的值体现了数学中的“嵌入”思想。假设要考虑一个1维的问题（比如计算一个定积分）。我们不妨把这个问题放到更高维的框架中，例如再引入一个参变量，把这个积分作为含参变量积分的特例。由于在引入的高维框架中，我们可以有更多的可施展数学工具（如积分、微分等）的天地，就有可能从另一个角度（而这一个角度是我们引入高维框架后带来的）把我们的问题简化，从而达到解决原有问题的目的。在具体计算过程中，要作一些分析。在什么地方引入参变量比较合适，用微分法还是用积分法，都是有讲究的。比如计算Dirichlet积分 $\int_0^{+\infty} \frac{\sin x}{x} \, \mathrm{d}x$ 。把它看成是含参变量积分 $\varphi(\alpha) = \int_0^{+\infty} \mathrm{e}^{-\alpha x} \frac{\sin x}{x} \, \mathrm{d}x$ 当 $\alpha = 0$ 时的值。引入因子 $\mathrm{e}^{-\alpha x}$ 有两个作用，对 $\alpha$ 求导可消去导致不可积的因子 $\frac{1}{x}$ ，同时 $\mathrm{e}^{-\alpha x}$ 又是收敛因子，保证了在 $\alpha > 0$ 时积分 $\int_0^{+\infty} \left( \mathrm{e}^{-\alpha x} \frac{\sin x}{x} \right)'_{\alpha} \, \mathrm{d}x$ 的内闭一致收敛性。故可在积分号下求导，则有

$$
\varphi^ {\prime} (\alpha) = - \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- \alpha x} \sin x \mathrm{d} x = - \frac {1}{1 + \alpha^ {2}}.
$$

再积分就有 $\varphi (\alpha) = \frac{\pi}{2} -\arctan \alpha ,\alpha >0.$ 如果 $\varphi (\alpha)$ 在 $[0, + \infty)$ 上连续，则

$$
\int_ {0} ^ {+ \infty} \frac {\sin x}{x} \mathrm{d} x = \varphi (0) = \lim _ {\alpha \rightarrow 0 ^ {+}} \varphi (\alpha) = \frac {\pi}{2}.
$$

3. 含参变量积分的一致收敛性的判别与函数项级数有许多类似之处，同时也要注意到利用积分自身的特点，如变量代换、分部积分等。以 $\int_{1}^{+\infty}\frac{\cos x^{2}}{x^{p}}dx$ 为例，作变换 $x^{2}=t$ ，就化为 $\int_{1}^{+\infty}\frac{\cos t}{2t^{(p+1)/2}}dt$ ，成为我们熟悉的类型。

4. B 函数的三个积分表达式, 各有各的长处, 应加以记忆. 这样, 遇到相应的积分, 就可写成特殊的 B 值, 再利用余元公式等得到积分值.

5. 对习题课的建议 许多学生对讨论含参变量广义积分的一致收敛性有畏难情绪, 习题课上要由浅入深地进行引导, 分析难点, 找出办法. 大多数题目只需使用 M-判别法. 在用嵌入法计算一些特殊的广义积分的值时, 如果觉得证明计算合理性 (如检验一致收敛性等) 的过程较长, 可以在解题时先进行形式运算, 算出积分值后再给出运算合理性的证明.

本章的内容综合性强, 计算题大多具有一定的技巧性. 因此应在习题课上作比较系统的示范和总结.

### 23.4.2 参考题

1. 设 $f(x,t), f_x(x,t)$ 连续, 记 $u(x,t) = \frac{1}{2a} \int_0^t \mathrm{d}\tau \int_{x-a(t-\tau)}^{x+a(t-\tau)} f(\xi,\tau) \mathrm{d}\xi$ , 其中 $a$ 为正常数, 证明: $u(x,t)$ 满足

$$
\frac {\partial^ {2} u}{\partial t ^ {2}} = a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} + f (x, t).
$$

2. 设 n 为正整数, 证明: Bessel 函数

$$
J _ {n} (x) = \frac {1}{\pi} \int_ {0} ^ {\pi} \cos (n \varphi - x \sin \varphi) \mathrm{d} \varphi
$$

满足

$$
x ^ {2} J _ {n} ^ {\prime \prime} (x) + x J _ {n} ^ {\prime} (x) + (x ^ {2} - n ^ {2}) J _ {n} (x) = 0.
$$

3. 设 $f(x)$ 在 $[0,1]$ 上连续可微，且 $f(0)=0$ ，定义

$$
\varphi (x) = \int_ {0} ^ {x} \frac {f (t)}{\sqrt {x - t}} \mathrm{d} t, 0 <   x \leqslant 1, \varphi (0) = 0.
$$

证明：

(1) $\varphi(x)$ 在 $[0,1]$ 上一阶连续可导，且

$$
\varphi^ {\prime} (x) = \int_ {0} ^ {x} \frac {f ^ {\prime} (t)}{\sqrt {x - t}} \mathrm{d} t, 0 <   x \leqslant 1, \varphi^ {\prime} (0) = 0;
$$

(2) $f(x) = \frac{1}{\pi} \int_{0}^{x} \frac{\varphi'(t)}{\sqrt{x - t}} \, \mathrm{d}t, \quad 0 < x \leqslant 1.$ 

4. 设 $f(x)$ 在 $[0, A]$ 上单调 $(A > 0)$ , 证明:

$$
\lim _ {\alpha \rightarrow + \infty} \int_ {0} ^ {A} f (x) \frac {\sin \alpha x}{x} \mathrm{d} x = \frac {\pi}{2} f (0 ^ {+}).
$$

5. 设 $F(t) = t \int_{0}^{+\infty} \mathrm{e}^{-tx} f(x) \, \mathrm{d}x$ ，其中 $f(x)$ 在 $[0, b]$ 上有界可积 ( $\forall b > 0$ )，且 $\lim_{x \to +\infty} f(x) = \alpha$ ，证明： $\lim_{t \to 0^+} F(t) = \alpha$ .

6. 设 $f(x)$ 连续, 且 $\int_{-\infty}^{+\infty} f^2(x) \mathrm{d}x$ 收敛, 证明:

(1) $g(t) = \int_{-\infty}^{+\infty} f(t + u) f(u) \, \mathrm{d}u$ 在 $(- \infty, +\infty)$ 上连续且有界;

$$
\lim _ {\varepsilon \rightarrow 0 ^ {+}} \frac {1}{2 \sqrt {\varepsilon \pi}} \int_ {- \infty} ^ {+ \infty} \mathrm{e} ^ {- t ^ {2} / (4 \varepsilon)} g (t) \mathrm{d} t = \int_ {- \infty} ^ {+ \infty} f ^ {2} (x) \mathrm{d} x. \tag {2}
$$

7. 讨论下列函数在 $(0,1)$ 上的连续性:

$$
f (\alpha) = \int_ {0} ^ {+ \infty} \frac {\mathrm{e} ^ {- t}}{| \sin t | ^ {\alpha}} \mathrm{d} t; \tag {1}
$$

(2) $g(\alpha) = \int_{0}^{1}\frac{f(t)}{\sqrt{|t - \alpha|}}\mathrm{d}t,$ 其中 $f(t)$ 是[0,1]上的有界可积函数.

8. 求曲面 $(x^{2} + y^{2})^{2} + z^{4} = y$ 所围立体的体积.

9. 求立体

$$
\left(\frac {x}{a}\right) ^ {\frac {1}{n}} + \left(\frac {y}{b}\right) ^ {\frac {1}{n}} + \left(\frac {z}{c}\right) ^ {\frac {1}{n}} \leqslant 1, \quad x, y, z \geqslant 0
$$

的质心的 x 坐标.

10. 求星形线 $x^{\frac{2}{3}} + y^{\frac{2}{3}} = R^{\frac{2}{3}}$ 所包围的面积对 $x$ 轴的惯性矩.

11. 设 $f(x)$ 在 $[0,1]$ 中连续, 证明:

$$
\lim _ {t \rightarrow + \infty} \int_ {0} ^ {1} t \mathrm{e} ^ {- t ^ {2} x ^ {2}} f (x) \mathrm{d} x = \frac {\sqrt {\pi}}{2} f (0).
$$

12. 设 $\int_{0}^{+\infty} f(x) \, dx$ 收敛, 证明:

$$
\lim _ {y \rightarrow 0 ^ {+}} \int_ {0} ^ {+ \infty} \mathrm{e} ^ {- x y} f (x) \mathrm{d} x = \int_ {0} ^ {+ \infty} f (x) \mathrm{d} x.
$$

13. 求 $\int_0^{+\infty}\cos x^p\mathrm{d}x$ ，其中 $p > 1$ 

14. 求 $\int_0^1\ln \Gamma (x)\mathrm{d}x.$ 

15. 求 Laplace (拉普拉斯) 积分

$$
I _ {k} = \int_ {0} ^ {+ \infty} \frac {\cos b x}{(a ^ {2} + x ^ {2}) ^ {k}} \mathrm{d} x, \quad J _ {k} = \int_ {0} ^ {+ \infty} \frac {x \sin b x}{(a ^ {2} + x ^ {2}) ^ {k}} \mathrm{d} x, a, b > 0, k \in \mathbf {N} _ {+}.
$$

16. 应用 $\Gamma$ 函数的 Gauss 乘积分解公式 (13.38) 证明: Euler 常数

$$
\gamma = \lim _ {n \rightarrow \infty} \left(1 + \frac {1}{2} + \dots + \frac {1}{n} - \ln n\right) = - \Gamma^ {\prime} (1).
$$

17. (1) 利用 $n$ 次单位根分解式证明:

$$
1 + x + \dots + x ^ {n - 1} = \prod_ {k = 1} ^ {n - 1} \left(x - \mathrm{e} ^ {\frac {2 k \pi \mathrm{i}}{n}}\right);
$$

(2) 利用 (1) 证明:

$$
\prod_ {k = 1} ^ {n - 1} \sin \frac {k \pi}{n} = \frac {n}{2 ^ {n - 1}};
$$

(3) 证明: Euler 乘积

$$
\Gamma \left(\frac {1}{n}\right) \Gamma \left(\frac {2}{n}\right) \dots \Gamma \left(\frac {n - 1}{n}\right) = \frac {(2 \pi) ^ {\frac {n - 1}{2}}}{\sqrt {n}}.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4da44404-6041-46d2-9ef7-e44a2db08287/a8989dbb365718dd2c4a9dfceafcd9a26d50d3e10fbf97c2a32e53c34fa31fbd.jpg)



图23.2
