# 第九章 不定积分

本章主要讨论不定积分的计算, 要点是掌握不定积分的基本计算方法与常见的可积函数类. 本章共分三节: 在 §9.1 中以分部积分法和换元积分法为中心, 通过例题介绍不定积分的计算方法; 在 §9.2 中讨论几类主要的可积函数; 最后一节为学习要点和参考题.

## §9.1 不定积分的计算方法

## 9.1.1 内容提要

1. 求原函数的运算是求导数运算的逆运算, 即从函数 $F(x)$ 的导函数 $F'(x)$ 出发去求 $F(x)$ .

2. 关于原函数的三个基本问题: (1) 存在性, (2) 唯一性, (3) 如何求. 其中问题 (1) 要到下一章才能解决 (见命题 10.3.3), 问题 (2) 已在前面解决 (见例题 7.1.6). 本章主要是解决问题 (3), 即计算不定积分.

3. 如果函数 $f(x)$ 在区间 $I$ 上有原函数, 则在此区间上 $f(x)$ 是某个函数的导函数, 因此它必须满足导函数的特有性质. 例如, 它一定具有介值性, 且不会有第一类间断点. 反之, 在区间 $I$ 上有第一类间断点的函数在此区间上一定没有原函数. (参见 Darboux 定理 (即命题 7.1.6) 和例题 7.1.1.)

4. $f(x)$ 的不定积分 $\int f(x)\mathrm{d}x$ 是 $f(x)$ 的原函数全体, 它是一族函数, 而不止是一个函数. 由于不定积分 $\int f(x)\mathrm{d}x$ 中任意两个函数相差一个常值函数, 因此, 求 $\int f(x)\mathrm{d}x$ 时只要求出 $f(x)$ 的一个原函数, 再加上一个任意常值函数.

5. 初等函数 $f(x)$ 的原函数 $\int f(x) \, \mathrm{d}x$ 不一定是初等函数. 如果 $\int f(x) \, \mathrm{d}x$ 也是初等函数, 则称 $\int f(x) \, \mathrm{d}x$ 可积或积得出来; 反之, 则称其不可积或积不出来. 不定积分的计算就是求出原函数为初等函数的不定积分.

## 9.1.2 思考题

1. “不定积分”与“原函数”这两个概念有什么区别？有什么联系？

2. 在 $x = 0$ 点不连续的函数

$$
f (x) = \left\{ \begin{array}{l l} 2 x \sin \frac {1}{x} - \cos \frac {1}{x}, & \text {当} x \neq 0, \\ 0, & \text {当} x = 0 \end{array} \right.
$$

在 $(-∞,+∞)$ 上是否有原函数?

3. 在不定积分公式 $\int \operatorname{sgn} x \, \mathrm{d}x = |x| + C$ 和 $\int \frac{1}{x} \, \mathrm{d}x = \ln |x| + C$ 中为什么会出现绝对值号？

4. 下列等式是否正确？说明理由：
(1) $\mathrm{d}\int f(x)\mathrm{d}x=f(x);$ (2) $\mathrm{d}\int f(x)\mathrm{d}x=f(x)\mathrm{d}x;$ (3) $\int\mathrm{d}f(x)=f(x);$ (4) $\mathrm{d}\int\mathrm{d}f(x)=\mathrm{d}f(x);$ 

其中 $\mathrm{d}\int f(x)\mathrm{d}x$ 是指对于 $\int f(x)\mathrm{d}x$ 中每一个函数求微分所得到的集合.

5. 以下推导中有什么错误？用分部积分公式可得到以下等式：

$$
\int \frac {\mathrm{d} x}{x} = x \cdot \frac {1}{x} - \int x \mathrm{d} \left(\frac {1}{x}\right) = 1 + \int \frac {\mathrm{d} x}{x},
$$

因此推出 0 = 1.

## 9.1.3 基本计算方法

不定积分的基本计算方法有:

1. 第一换元法——凑微分法, 也称为直接代换法: 设 $\int f(u) \mathrm{d}u = F(u) + C$ , $u = u(x)$ 可微, 则 $\int f(u(x)) u'(x) \mathrm{d}x = F(u(x)) + C$ .

我们称这个方法为凑微分法, 是因为在实际计算时, $u(x)$ 的形式是“凑出来”的, 目的是使得被积表达式可以看成为 $f(u) \, du$ , 同时能积出来.

2. 第二换元法——代入换元法, 也称为逆代换法: 设不定积分 $\int f(x) \mathrm{d}x$ 存在, $x = x(t)$ 可微且存在反函数 $t = t(x)$ , 又若 $\int f(x(t)) x'(t) \mathrm{d}t = F(t) + C$ , 则 $\int f(x) \mathrm{d}x = F(t(x)) + C$ .

在使用第二换元法时, 往往会遇到一个问题: 是否一定要求存在反函数, 以及反函数是否要求处处可导? 对此在各种教科书上有不同的条件, 缺乏比较和讨论. 根据《美国数学月刊》(1994) 第 101 卷 520—526 页(译文见《数学译林》(1994) 348—352 页) 一文的调查, 这确实是在绝大多数教科书中都没有说清楚的一个问题. 我们在下面将介绍其中的证明. 从证明中可以看出, 对于 $t(x)$ 只有一个要求, 即满足恒等式 $x(t(x)) \equiv x$ , 其他均无须考虑. 此外, 在 [42] 的 235—236 页中也注意到了这个问题.

3. 分部积分法: 设 $u(x)$ 与 $v(x)$ 可微, 且在 $u(x)v'(x)$ 和 $v(x)u'(x)$ 中至少有一个存在原函数, 则

$$
\int u (x) v ^ {\prime} (x) \mathrm{d} x = u (x) v (x) - \int v (x) u ^ {\prime} (x) \mathrm{d} x.
$$

注1 计算不定积分的一般步骤是: 通过代数运算、三角函数公式或换元、分部积分先将被积函数化为若干简单函数的和, 然后应用不定积分的线性运算法则与基本积分公式求出最后的结果. 为此, 在学习时除了必须牢记基本积分公式外, 还需要熟练掌握中学数学中的一些常用公式.

注2 分部积分法是与求导运算中的乘积求导法则相对应的积分法则. 如果被积函数中出现幂函数、指数函数、三角函数这三类函数中两类或两类以上函数的乘积, 或者出现对数函数、反三角函数, 都可以考虑用分部积分法. 应用分部积分法, 最重要的是如何正确选择 $u(x)$ 与 $v(x)$ . 一般说来, 要注意下面两个原则:

(1) $v(x)$ 比较容易求出； (2) $\int v\mathrm{d}u$ 要比 $\int u\mathrm{d}v$ 容易计算.

对于上面提到的五类初等函数, 有人总结出“反对幂三指”五个字, 这里“反”“对”“幂”“三”“指”依次是反三角函数、对数函数、幂函数、三角函数和指数函数, 积分时, 一般应将排列次序在后面的函数优先与 dx 结合成为 dv. (有兴趣的读者可看 [42] 的 237 页和《美国数学月刊》(1983) 第 90 卷 211 页.)

命题 9.1.1 (第二换元法的证明) 设 $f(x)$ 有原函数, $x = x(t)$ 可微且有 $t = t(x)$ 满足 $x(t(x)) \equiv x$ , 又若 $\int f(x(t))x'(t)\mathrm{d}t = F(t) + C$ , 则 $\int f(x)\mathrm{d}x=F(t(x))+C.$ 

证 已知 $f(x)$ 有原函数, 记为 $U(x)$ , 则有 $U'(x) = f(x)$ . 又已知 $F(t)$ 满足

$$
F ^ {\prime} (t) = f (x (t)) x ^ {\prime} (t).
$$

从复合函数求导法则得到

$$
\frac {\mathrm{d} U (x (t))}{\mathrm{d} t} = U ^ {\prime} (x (t)) x ^ {\prime} (t) = f (x (t)) x ^ {\prime} (t) = F ^ {\prime} (t).
$$

因此 $U(x(t))$ 和 $F(t)$ 只相差一个常值函数，即有

$$
U (x (t)) = F (t) + C.
$$

用 $t = t(x)$ 代入，且利用恒等式 $x(t(x)) \equiv x$ ，于是就有

$$
U (x (t (x))) = U (x) = F (t (x)) + C,
$$

因此

$$
\frac {\mathrm{d} F (t (x))}{\mathrm{d} x} = U ^ {\prime} (x) = f (x).
$$

## 9.1.4 例题

首先, 我们通过一题多解来说明计算不定积分时的多种可能性.

例题9.1.1 计算 $I = \int \frac{\mathrm{d}x}{x\sqrt{x^2 - 1}}.$ 

解1 $I = \int \frac{\mathrm{d}x}{x^2\sqrt{1 - \left(\frac{1}{x}\right)^2}} = -\int \frac{\mathrm{d}\left(\frac{1}{x}\right)}{\sqrt{1 - \left(\frac{1}{x}\right)^2}} = -\arcsin \frac{1}{x} +C.$ 

注1 这是第一换元法, 在其中将 $1 / x$ 看成为 $u$ , 将被积表达式看成 $\frac{\mathrm{d}u}{\sqrt{1 - u^2}}$ , 然后用基本积分公式. 但实际上也可以说是用第二换元法. 令 $x = 1 / t$ , 这时

$$
\mathrm{d} x = - \frac {1}{t ^ {2}} \mathrm{d} t, \frac {1}{x \sqrt {x ^ {2} - 1}} = \frac {t ^ {2}}{\sqrt {1 - t ^ {2}}},
$$

于是就有

$$
I = - \int \left(\frac {1}{t ^ {2}}\right) \cdot \frac {t ^ {2}}{\sqrt {1 - t ^ {2}}} \mathrm{d} t = - \int \frac {\mathrm{d} t}{\sqrt {1 - t ^ {2}}},
$$

以下与解1相同. 这个解法中的变换称为“倒代换”，是一种常用的变量代换. 更一般的还有代换 $x = t^{\alpha}$ ，其中 $\alpha$ 待定.

$$
\text { 解 } 2 \quad I = \int {\frac {x \mathrm{d} x}{x ^ {2} {\sqrt {x ^ {2} - 1}}}} = \int {\frac {\mathrm{d} {\sqrt {x ^ {2} - 1}}}{({\sqrt {x ^ {2} - 1}}) ^ {2} + 1}} = \arctan {\sqrt {x ^ {2} - 1}} + C.
$$

解3 令 $x = \sec t$ ，则 $\mathrm{dx} = \sec t\tan t\mathrm{dt},$ 

$$
I = \int \frac {\sec t \tan t}{\sec t \tan t} \mathrm{d} t = \int \mathrm{d} t = t + C = \arccos \frac {1}{x} + C.
$$

解4 令 $\sqrt{x^2 - 1} = x - t$ ，则可解出 $x = \frac{t^2 + 1}{2t}$ ，并计算得到

$$
\mathrm{d} x = \frac {t ^ {2} - 1}{2 t ^ {2}} \mathrm{d} t, \sqrt {x ^ {2} - 1} = \frac {1 - t ^ {2}}{2 t}.
$$

因此

$$
\begin{array}{l} I = \int \frac {2 t \cdot 2 t (t ^ {2} - 1)}{(t ^ {2} + 1) (1 - t ^ {2}) 2 t ^ {2}} \mathrm{d} t = - 2 \int \frac {\mathrm{d} t}{1 + t ^ {2}} \\ = - 2 \arctan t + C = - 2 \arctan (x - \sqrt {x ^ {2} - 1}) + C. \end{array}
$$

解5 令 $\sqrt{x^2 - 1} = t(x - 1)$ , 则可解出 $x = (t^2 + 1) / (t^2 - 1)$ , 并计算得到

$$
\mathrm{d} x = - \frac {4 t \mathrm{d} t}{(t ^ {2} - 1) ^ {2}}, \sqrt {x ^ {2} - 1} = \frac {2 t}{t ^ {2} - 1}.
$$

因此

$$
\begin{array}{r l} I & = \int \frac {(t ^ {2} - 1) ^ {2} (- 4 t)}{(t ^ {2} + 1) 2 t (t ^ {2} - 1) ^ {2}} \mathrm{d} t = - 2 \int \frac {\mathrm{d} t}{1 + t ^ {2}} \\ & = - 2 \arctan t + C = - 2 \arctan \frac {\sqrt {x ^ {2} - 1}}{x - 1} + C. \end{array}
$$

注 2 最后两种解法中所用的变换称为 Euler 变换, 可以证明, 对于形如

$$
\int R (x, \sqrt {a x ^ {2} + b x + c}) \mathrm{d} x \quad (a \neq 0)
$$

的不定积分 (其中 $R$ 为有理分式), 利用 Euler 变换一定能解决, 见 [14] 第二卷 281 小节和 [59] 第二册的 3.3.3 小节. 然而, 过于一般的方法对于具体问题往往不是最简单的方法. 正如本题的解 3 所示, 对形如 $\int R(x, \sqrt{x^2 - a^2}) \mathrm{d}x (a > 0)$ 的不定积分, 用变换 $x = a \sec t$ 有时要比利用 Euler 变换简单得多. 一般来说, 对形如 $\int R(x, \sqrt{a^2 - x^2}) \mathrm{d}x$ 与 $\int R(x, \sqrt{x^2 + a^2}) \mathrm{d}x (a > 0)$ 的不定积分, 较为简单的常用变换分别是 $x = a \sin t$ 与 $x = a \tan t$ .

注3 本题的5种解法的答案表面上均不相同, 这在不定积分计算中是常见的现象. 由于不定积分是以一个原函数加上任意常值函数的形式来表示的, 而其中原函数的选择是任意的, 彼此之间只相差一个常值函数, 因此表面上就可能不一样, 但它们的导函数必须相同, 否则就出错了. 请初学者注意: 要养成用求导运算来检验不定积分计算结果是否正确的习惯.

例题9.1.2 计算不定积分 $I = \int x^{2}\sqrt{x^{2} + 1}\mathrm{d}x.$ 

解 1 将根号外的一个因子 x 移入到根号下, 并将积分表达式看成为 $f(u) \, du$ , 其中 $u = x^{2}$ , 就可计算如下:

$$
\begin{array}{r l} I & = \frac {1}{2} \int \sqrt {x ^ {4} + x ^ {2}}   \mathrm{d} x ^ {2} \\ & = \frac {1}{2} \int \sqrt {\left(x ^ {2} + \frac {1}{2}\right) ^ {2} - \left(\frac {1}{2}\right) ^ {2}}   \mathrm{d} \left(x ^ {2} + \frac {1}{2}\right) \\ & = \frac {1}{4} \left(x ^ {2} + \frac {1}{2}\right) \sqrt {x ^ {4} + x ^ {2}} - \frac {1}{1 6} \ln \left(x ^ {2} + \frac {1}{2} + \sqrt {x ^ {4} + x ^ {2}}\right) + C _ {1} \\ & = \frac {1}{8} x (2 x ^ {2} + 1) \sqrt {x ^ {2} + 1} - \frac {1}{1 6} \ln (x + \sqrt {x ^ {2} + 1}) ^ {2} + C \quad \left(C = C _ {1} + \frac {\ln 2}{1 6}\right) \\ & = \frac {1}{8} x (2 x ^ {2} + 1) \sqrt {x ^ {2} + 1} - \frac {1}{8} \ln (x + \sqrt {x ^ {2} + 1}) + C. \end{array}
$$

解 2 因为 $\int x\sqrt{x^{2}+1}\mathrm{d}x=\frac{1}{2}\int\sqrt{x^{2}+1}\mathrm{d}(x^{2}+1)=\frac{1}{3}(x^{2}+1)^{\frac{3}{2}}+C_{1}$ ，所以由分部积分法，可得

$$
\begin{array}{r l} I & = \frac {1}{3} \int x \mathrm{d} (x ^ {2} + 1) ^ {\frac {3}{2}} = \frac {1}{3} x (x ^ {2} + 1) ^ {\frac {3}{2}} - \frac {1}{3} \int (x ^ {2} + 1) ^ {\frac {3}{2}} \mathrm{d} x \\ & = \frac {1}{3} x (x ^ {2} + 1) ^ {\frac {3}{2}} - \frac {1}{3} \int (x ^ {2} + 1) \sqrt {x ^ {2} + 1} \mathrm{d} x \\ & = \frac {1}{3} x (x ^ {2} + 1) ^ {\frac {3}{2}} - \frac {1}{3} \int x ^ {2} \sqrt {x ^ {2} + 1} \mathrm{d} x - \frac {1}{3} \int \sqrt {x ^ {2} + 1} \mathrm{d} x \\ & = \frac {1}{3} x (x ^ {2} + 1) ^ {\frac {3}{2}} - \frac {I}{3} - \frac {1}{6} \left[ x \sqrt {x ^ {2} + 1} + \ln (x + \sqrt {x ^ {2} + 1}) \right]. \end{array}
$$

将 $\frac{1}{3} I$ 移项到左边，且对两边同除以 $\frac{4}{3}$ ，得到

$$
I = \frac {1}{4} x (x ^ {2} + 1) ^ {\frac {3}{2}} - \frac {1}{8} \left[ x \sqrt {x ^ {2} + 1} + \ln \left(x + \sqrt {x ^ {2} + 1}\right) \right] + C.
$$

本题还有下列解法, 这种解法虽然不容易想到, 但十分简洁.

## 解3 因为

$$
\left(x ^ {3} \sqrt {x ^ {2} + 1}\right) ^ {\prime} = 3 x ^ {2} \sqrt {x ^ {2} + 1} + \frac {x ^ {4}}{\sqrt {x ^ {2} + 1}} = 4 x ^ {2} \sqrt {x ^ {2} + 1} - \sqrt {x ^ {2} + 1} + \frac {1}{\sqrt {x ^ {2} + 1}},
$$

所以

$$
x ^ {2} \sqrt {x ^ {2} + 1} = \frac {1}{4} \left[ \left(x ^ {3} \sqrt {x ^ {2} + 1}\right) ^ {\prime} + \sqrt {x ^ {2} + 1} - \frac {1}{\sqrt {x ^ {2} + 1}} \right].
$$

于是

$$
I = \frac {1}{4} \left[ x ^ {3} \sqrt {x ^ {2} + 1} + \frac {x}{2} \sqrt {x ^ {2} + 1} - \frac {1}{2} \ln (x + \sqrt {x ^ {2} + 1}) \right] + C.
$$

注1 可由此设计不定积分 $\int x^{k}\sqrt{x^{2} + 1}\mathrm{d}x$ 和 $\int \frac{x^k}{\sqrt{x^2 + 1}}\mathrm{d}x$ 的一般解法.

注 2 如解 1 所示, 往往可通过加减一个常数的方法来化简不定积分的结果.

注3 本题解2通过分部积分法产生一个关于所求积分的方程, 然后解这个方程得到所求积分, 这样运用分部积分的方法可称为“循环法”, 是一种常用的技巧. 特别当被积函数中含有指数函数与三角函数的乘积时, 往往可以用循环法来进行积分. 下面我们再看一道用循环法进行积分的例题.

例题9.1.3 计算 $I = \int \csc^4 x\mathrm{d}x.$ 

解

$$
\begin{array}{r l} I & = \int \csc^ {2} x \mathrm{d} (- \cot x) = - \cot x \csc^ {2} x + \int \cot x \mathrm{d} (\csc^ {2} x) \\ & = - \cot x \csc^ {2} x - 2 \int (\csc^ {4} x - \csc^ {2} x) \mathrm{d} x \\ & = - \cot x \csc^ {2} x - 2 I - 2 \cot x, \end{array}
$$

因此得到 $I = -\frac{1}{3} \cot x \csc^{2} x - \frac{2}{3} \cot x + C.$ 

例题9.1.4 计算 $I = \int x\tan x\sec^2 x\mathrm{d}x.$ 

解 用分部积分法计算:

$$
\begin{array}{r l} I & = \int x \mathrm{d} \left(\frac {1}{2} \sec^ {2} x\right) = \frac {1}{2} x \sec^ {2} x - \frac {1}{2} \int \sec^ {2} x \mathrm{d} x \\ & = \frac {1}{2} (x \sec^ {2} x - \tan x) + C. \end{array}
$$

注 有人用下面的方法做这道题:

错误解法 令 $x = \pi - t$ ，则

$$
\begin{array}{l} I = \int \frac {(\pi - t) \sin t}{\cos^ {3} t} \mathrm{d} t = \pi \int \frac {\sin t}{\cos^ {3} t} \mathrm{d} t - \int \frac {t \sin t}{\cos^ {3} t} \mathrm{d} t \\ = \pi \int \mathrm{d} \left(\frac {1}{2 \cos^ {2} t}\right) - I = \frac {\pi}{2} \sec^ {2} t - I, \end{array}
$$

所以得到

$$
I = \frac {\pi}{4} \sec^ {2} x + C.
$$

用求导还原的方法就可以发现上述结果是错的. 原因是: 虽然 $\int \frac{t \sin t}{\cos^3 t} \mathrm{d}t$ 与 $\int \frac{x \sin x}{\cos^3 x} \mathrm{d}x$ 的被积函数有相同形式, 但它们是不同变量 $t$ 与 $x$ 的函数, 且有关系 $x = \pi - t$ , 不能合并. 同样, $\sec^2 t$ 与 $\sec^2 x$ 也是不同的函数, 不能任意替换.

当被积函数含有指数函数、对数函数和反三角函数时, 其不定积分既可以用换元积分法求, 也可以用分部积分法求或用两种方法结合求. 但是, 同一道题, 用不同的方法去解, 其解法的难易程度可能很不相同.

例题9.1.5 求不定积分 $\int \frac{x\ln x}{(1 + x^2)^2}\mathrm{d}x.$ 

解 用分部积分法计算:

$$
\begin{array}{r l} \int \frac {x \ln x}{(1 + x ^ {2}) ^ {2}} \mathrm{d} x & = - \frac {1}{2} \int \ln x \mathrm{d} \left(\frac {1}{1 + x ^ {2}}\right) \\ & = - \frac {1}{2} \left(\frac {\ln x}{1 + x ^ {2}} - \int \frac {1}{1 + x ^ {2}} \mathrm{d} \ln x\right) \\ & = - \frac {1}{2} \left[ \frac {\ln x}{1 + x ^ {2}} - \int \frac {\mathrm{d} x}{x (1 + x ^ {2})} \right] \\ & = - \frac {1}{2} \left[ \frac {\ln x}{1 + x ^ {2}} - \int \left(\frac {1}{x} - \frac {x}{1 + x ^ {2}}\right) \mathrm{d} x \right] \\ & = - \frac {1}{2} \left[ \frac {\ln x}{1 + x ^ {2}} - \ln x + \frac {1}{2} \ln (1 + x ^ {2}) \right] + C \\ & = - \frac {1}{2} \frac {\ln x}{1 + x ^ {2}} + \frac {1}{4} \ln \frac {x ^ {2}}{1 + x ^ {2}} + C. \end{array}
$$

例题9.1.6 求不定积分 $\int \frac{x\arctan x}{(1 + x^2)^2}\mathrm{d}x.$ 

解 将分部积分法和换元法结合起来就很容易解决这个积分问题. 首先用分部积分法计算如下:

$$
\begin{array}{r l} \int \frac {x \arctan x}{(1 + x ^ {2}) ^ {2}} \mathrm{d} x & = - \frac {1}{2} \int \arctan x \mathrm{d} \left(\frac {1}{1 + x ^ {2}}\right) \\ & = - \frac {\arctan x}{2 (1 + x ^ {2})} + \frac {1}{2} \int \frac {\mathrm{d} \arctan x}{1 + x ^ {2}}. \end{array}
$$

然后对最后一个积分用代换 $\arctan x = t$ ，就有

$$
\begin{array}{r l} \frac {1}{2} \int \frac {\mathrm{d} \arctan x}{1 + x ^ {2}} & = \frac {1}{2} \int \frac {\mathrm{d} t}{1 + \tan^ {2} t} \\ & = \frac {1}{2} \int \cos^ {2} t \mathrm{d} t = \frac {1}{4} \int (\cos 2 t + 1) \mathrm{d} t \\ & = \frac {1}{8} \sin 2 t + \frac {1}{4} t + C \\ & = \frac {x}{4 (1 + x ^ {2})} + \frac {1}{4} \arctan x + C. \end{array}
$$

合并以上结果就得到

$$
\begin{array}{r l} \int \frac {x \arctan x}{(1 + x ^ {2}) ^ {2}} \mathrm{d} x & = - \frac {\arctan x}{2 (1 + x ^ {2})} + \frac {x}{4 (1 + x ^ {2})} + \frac {1}{4} \arctan x + C \\ & = \frac {x ^ {2} - 1}{4 (x ^ {2} + 1)} \cdot \arctan x + \frac {x}{4 (1 + x ^ {2})} + C. \end{array}
$$

注 从以上例题的解法可以看出, 对于不定积分而言, 并不存在能对一切情况都适用的固定方法. 初学者必须通过相当数量的解题训练, 积累经验, 才能掌握计算不定积分的技能.

## 9.1.5 特殊计算方法

## (一) 配对积分法

先看下面这道例题:

例题9.1.7 计算不定积分 $I = \int \frac{\sin x \, \mathrm{d}x}{2\sin x + 3\cos x}$ .

解 注意到 $\int \frac{2\sin x + 3\cos x}{2\sin x + 3\cos x}\mathrm{d}x = \int \mathrm{d}x = x + C,$ 又有

$$
\int {\frac {(2 \sin x + 3 \cos x) ^ {\prime}}{2 \sin x + 3 \cos x}} \mathrm{d} x = \int {\frac {2 \cos x - 3 \sin x}{2 \sin x + 3 \cos x}} \mathrm{d} x = \ln | 2 \sin x + 3 \cos x | + C,
$$

不难看出, 如果设 $J = \int \frac{\cos x}{2 \sin x + 3 \cos x} \, dx$ , 则 $2I + 3J$ 与 2J - 3I 是直接可以求出的. 因此为了求 I, 只要解代数方程组就行了. 具体计算从略. □

从上面这道题我们看到, 有时为了计算不定积分 $I(x) = \int f(x) \mathrm{d}x$ , 可以找另一个不定积分 $J(x) = \int g(x) \mathrm{d}x$ 及实数 $a, b, c, d (ad - bc \neq 0)$ , 使 $af + bg$ 和 $cf + dg$ 的积分都比 $\int f(x) \mathrm{d}x$ 容易计算. 计算出 $aI(x) + bJ(x)$ 和 $cI(x) + dJ(x)$ 之后, 就容易用代数方法求出 $I(x)$ .

例题9.1.8 求不定积分 $\int \frac{\mathrm{d}x}{1 + x^4}$ .

解 令 $M(x) = \int \frac{\mathrm{d}x}{1 + x^4}, N(x) = \int \frac{x^2\mathrm{d}x}{1 + x^4}$ ，则有

$$
\begin{array}{r l} M (x) - N (x) & = \int \frac {1 - x ^ {2}}{1 + x ^ {4}} \mathrm{d} x = - \int \frac {1 - \frac {1}{x ^ {2}}}{x ^ {2} + \frac {1}{x ^ {2}}} \mathrm{d} x \\ & = - \int \frac {\mathrm{d} \left(x + \frac {1}{x}\right)}{\left(x + \frac {1}{x}\right) ^ {2} - 2} = - \frac {1}{2 \sqrt {2}} \ln \frac {x ^ {2} - \sqrt {2} x + 1}{x ^ {2} + \sqrt {2} x + 1} + C, \end{array}
$$

$$
\begin{array}{r l} M (x) + N (x) & = \int \frac {1 + x ^ {2}}{1 + x ^ {4}} \mathrm{d} x = \int \frac {1 + \frac {1}{x ^ {2}}}{x ^ {2} + \frac {1}{x ^ {2}}} \mathrm{d} x = \int \frac {\mathrm{d} \left(x - \frac {1}{x}\right)}{\left(x - \frac {1}{x}\right) ^ {2} + 2} \\ & = \frac {1}{\sqrt {2}} \arctan \frac {x - \frac {1}{x}}{\sqrt {2}} + C = \frac {1}{\sqrt {2}} \arctan \frac {x ^ {2} - 1}{\sqrt {2} x} + C, \end{array}
$$

因此得到

$$
\begin{array}{r l} M (x) & = \frac {1}{2} [ (M (x) + N (x)) + (M (x) - N (x)) ] \\ & = - \frac {1}{4 \sqrt {2}} \ln \frac {x ^ {2} - \sqrt {2} x + 1}{x ^ {2} + \sqrt {2} x + 1} + \frac {1}{2 \sqrt {2}} \arctan \frac {x ^ {2} - 1}{\sqrt {2} x} + C. \end{array}
$$

注 本题也可用后面 9.2.1 小节中的标准方法做, 但计算量却要大得多.

(二) 递推法

设 $f_{n}(x)$ 是变量 $x$ 的函数, 其表达式中含有参数 $n \in \mathbf{N}_{+}$ . 为了计算积分 $I_{n} = \int f_{n}(x) \mathrm{d}x$ , 可以用各种方法将它化成求参数值较小的积分 $I_{n - k} = \int f_{n - k}(x) \mathrm{d}x (0 < k \leqslant n)$ , 并且继续如此做下去, 直到最后把问题化为求参数值最小的一个或几个积分. 这种计算不定积分的方法, 称为递推法.

例题 9.1.9 导出求不定积分 $I_{n}=\int\frac{\mathrm{d}x}{(1+x^{2})^{n}}$ (n 是正整数) 的递推公式.

解 由分部积分法, 我们有

$$
\begin{array}{r l} I _ {n} & = \int \frac {\mathrm{d} x}{(1 + x ^ {2}) ^ {n}} = \frac {x}{(1 + x ^ {2}) ^ {n}} + 2 n \int \frac {x ^ {2}}{(1 + x ^ {2}) ^ {n + 1}} \mathrm{d} x \\ & = \frac {x}{(1 + x ^ {2}) ^ {n}} + 2 n \int \left[ \frac {1}{(1 + x ^ {2}) ^ {n}} - \frac {1}{(1 + x ^ {2}) ^ {n + 1}} \right] \mathrm{d} x \\ & = \frac {x}{(1 + x ^ {2}) ^ {n}} + 2 n I _ {n} - 2 n I _ {n + 1}, \end{array}
$$

因此得到递推公式

$$
I _ {n + 1} = \frac {1}{2 n} \cdot \frac {x}{(1 + x ^ {2}) ^ {n}} + \left(1 - \frac {1}{2 n}\right) I _ {n}, \quad n \in \mathbf {N} _ {+}.
$$

例题9.1.10 设对正整数 $m, n,$ 定义 $I(m,n) = \int \cos^m x\sin^n x\mathrm{d}x,$ 证明：

$$
I (m, n) = \frac {\cos^ {m - 1} x \sin^ {n + 1} x}{m + n} + \frac {m - 1}{m + n} I (m - 2, n).
$$

证 用分部积分法得到

$$
\begin{array}{r l} I (m, n) & = \int \cos^ {m} x \sin^ {n} x \mathrm{d} x = \int \cos^ {m - 1} x \sin^ {n} x \mathrm{d} (\sin x) \\ & = \cos^ {m - 1} x \sin^ {n + 1} x - \int \sin x \mathrm{d} (\cos^ {m - 1} x \sin^ {n} x), \end{array}
$$

而最后一个积分可以计算如下

$$
\begin{array}{l} \int \sin x \mathrm{d} (\cos^ {m - 1} x \sin^ {n} x) \\ = \int \sin x [ - (m - 1) \cos^ {m - 2} x \sin^ {n + 1} x + n \cos^ {m} x \sin^ {n - 1} x ] \mathrm{d} x \\ = - (m - 1) \int \cos^ {m - 2} x (1 - \cos^ {2} x) \sin^ {n} x \mathrm{d} x + n \int \cos^ {m} x \sin^ {n} x \mathrm{d} x \\ = - (m - 1) I (m - 2, n) + (m + n - 1) I (m, n), \end{array}
$$

加以整理并除以 $m + n$ ，即得所要的递推公式.

虽然建立不定积分的递推公式主要是用分部积分法, 但有时还需要考虑其他方法. 下面我们看一道例题.

例题 9.1.11 设对正整数 n > 2, 定义 $I_{n} = \int \frac{\sin nx}{\sin x} dx$ , 证明:

$$
I _ {n} = \frac {2}{n - 1} \sin (n - 1) x + I _ {n - 2}.
$$

证 考虑降 n,

$$
\begin{array}{r l} I _ {n} & = \int \frac {\sin (n - 1) x \cos x + \sin x \cos (n - 1) x}{\sin x} \mathrm{d} x \\ & = \int \frac {\sin (n - 1) x \cos x}{\sin x} \mathrm{d} x + \int \cos (n - 1) x \mathrm{d} x \\ & = \frac {1}{2} \int \frac {\sin n x + \sin (n - 2) x}{\sin x} \mathrm{d} x + \int \cos (n - 1) x \mathrm{d} x \\ & = \frac {1}{2} I _ {n} + \frac {1}{2} I _ {n - 2} + \frac {1}{n - 1} \sin (n - 1) x, \end{array}
$$

所以

$$
I _ {n} = \frac {2}{n - 1} \sin (n - 1) x + I _ {n - 2}.
$$

## 9.1.6 练习题

1. 计算下列不定积分:

(1) $\int \frac{x}{1 + x^4} \, \mathrm{d}x$ ; 

(2) $\int \frac{\mathrm{d}x}{\sqrt{x(1 - x)}};$ 

(3) $\int \ln (1 + x^2)\mathrm{d}x;$ 

(4) $\int \frac{\arctan\sqrt{x}}{\sqrt{x}(1 + x)}\mathrm{d}x;$ 

(5) $\int \frac{\mathrm{d}x}{\mathrm{e}^x - 1}$ ; 

(6) $\int \frac{x\ln(x + \sqrt{1 + x^2})}{(1 + x^2)^2}\mathrm{d}x;$ 

(7) $\int \frac{x\mathrm{e}^x}{(1 + x)^2}\mathrm{d}x;$ 

(8) $\int \frac{1 + x}{x(1 + x\mathrm{e}^x)}\mathrm{d}x;$ 

(9) $\int \ln^2 (x + \sqrt{1 + x^2})\mathrm{d}x;$ 

(10) $\int \frac{\mathrm{e}^{\arctan x}}{(1 + x^2)^{\frac{3}{2}}} \, \mathrm{d}x.$ 

2. 用配对积分法计算下列不定积分:

(1) $\int \frac{\mathrm{d}x}{1 + x^2 + x^4};$ 

(2) $\int \frac{\mathrm{e}^x\mathrm{d}x}{\mathrm{e}^x + \mathrm{e}^{-x}};$ 

(3) $\int \frac{b\sin x + a\cos x}{a\sin x + b\cos x}\mathrm{d}x (a\neq b);$ 

(4) $\int \frac{\mathrm{d}x}{1 + x^3}$ . 

3. 通过计算不定积分

$$
\int (\cos^ {4} x - \sin^ {4} x)   \mathrm{d} x \quad {\text {与}} \quad \int (\cos^ {4} x + \sin^ {4} x)   \mathrm{d} x,
$$

进而求出不定积分

$$
\int \cos^ {4} x   \mathrm{d} x \quad {\text {和}} \quad \int \sin^ {4} x   \mathrm{d} x.
$$

4. 导出计算下列不定积分的递推公式:
(1) $\int \sin^{n} x \, dx;$ (2) $\int \tan^{n} x \, dx;$ (3) $\int \sec^{n} x \, dx;$ (4) $\int \frac{1}{x^{n}\sqrt{1+x^{2}}} \, dx.$ 

5. 试求: (1) $\int x f''(x) \, \mathrm{d}x$ ; (2) $\int f'(2x) \, \mathrm{d}x$ .

6. 设对任意正整数 $m, n$ , 定义 $I(m, n) = \int \cos^m x \sin^n x \, \mathrm{d}x$ , 证明:

$$
I (m, n) = - \frac {\sin^ {n - 1} x \cos^ {m + 1} x}{m + n} + \frac {n - 1}{m + n} \cdot I (m, n - 2);
$$

(2) $I(n,n) = -\frac{\cos 2x \sin^{n-1} 2x}{n \cdot 2^{n+1}} + \frac{n-1}{4n} \cdot I(n-2, n-2).$ 

## §9.2 几类可积函数

## 9.2.1 有理函数的积分

有理函数是最基本的可积函数类, 其他可积函数类都是化为有理函数进行积分的. 有理函数可以分解为多项式与真分式的和, 而真分式又可以分解为部分分式的和并求出积分, 因此有理函数的原函数一定是初等函数.

在将真分式分解为部分分式的和时, 理论上是将问题归结为求解线性代数方程组. 这方面的标准理论见 [14] 的第八章第 2 节.

实际上许多问题还可以有很灵活的解法. 这里有一些常用的技巧. 下面我们举例说明.

例题 9.2.1 将 $\frac{1}{1+x^{3}}$ 化为部分分式的和.

解 对待定的表达式

$$
\frac {1}{1 + x ^ {3}} = \frac {1}{(1 + x) (1 - x + x ^ {2})} = \frac {A}{1 + x} + \frac {B x + C}{1 - x + x ^ {2}}\tag{9.1}
$$

两边同乘 $1 + x$ 后，令 $x \to -1$ ，得 $A = \frac{1}{3}$ 

又将(9.1)两边同乘 $x$ 后，令 $x\to +\infty$ ，得 $A + B = 0$ ，因此 $B = -A = -\frac{1}{3}$ 再在(9.1）两边用 $x = 0$ 代入，得 $1 = A + C$ ，因此 $C = 1 - A = \frac{2}{3}$ □

注 从一般理论知道在求部分分式的计算中用四则代数运算就够了. 以上引入的极限计算也是如此. 容易看出, 求 $A$ 的过程就是在 (9.1) 的左边将分母的因子 $(1 + x)$ 去掉之后再用 $x = -1$ 代入的结果.

下面举一个比较复杂的例子 (见 [72]), 其中的解 1 中不仅有极限计算, 还有求导计算和在复数域中的计算.

例题9.2.2 求不定积分

$$
\int \frac {x ^ {7} - 2 x ^ {6} + 4 x ^ {5} - 5 x ^ {4} + 4 x ^ {3} - 5 x ^ {2} - x}{(x - 1) ^ {2} (x ^ {2} + 1) ^ {2}} \mathrm{d} x.
$$

解 1 记被积函数为 $R(x)$ . 首先要分离出真分式, 得到

$$
R (x) = x + \frac {x ^ {5} - x ^ {4} + x ^ {3} - 3 x ^ {2} - 2 x}{(x - 1) ^ {2} (x ^ {2} + 1) ^ {2}}.
$$

根据部分分式理论, 一定有唯一的分解如下:

$$
\frac {x ^ {5} - x ^ {4} + x ^ {3} - 3 x ^ {2} - 2 x}{(x - 1) ^ {2} (x ^ {2} + 1) ^ {2}} = \frac {A}{(x - 1) ^ {2}} + \frac {B}{x - 1} + \frac {C x + D}{(x ^ {2} + 1) ^ {2}} + \frac {E x + F}{x ^ {2} + 1}.\tag{9.2}
$$

两边同乘 $(x - 1)^2$ 后令 $x\to 1$ ，就得到 $A = -1$ .又两边同乘 $(x - 1)^{2}$ 后求在点 $x = 1$ 处的导数值，则就可用求导法则计算如下：

$$
B = \frac {(5 - 4 + 3 - 6 - 2) \cdot 4 - 8 \cdot (1 - 1 + 1 - 3 - 2)}{1 6} = 1.
$$

又在 (9.2) 两边同乘 $(x^{2} + 1)^{2}$ , 再令 $x \to \mathrm{i}$ (复数域中的极限), 就得到①,

$$
C \mathrm{i} + D = \frac {\mathrm{i} - 1 - \mathrm{i} + 3 - 2 \mathrm{i}}{- 2 \mathrm{i}} = 1 + \mathrm{i},
$$

因此 C = D = 1. 再在 (9.2) 两边令 x = 0 代入, 得到 $A - B + D + F = 0$ , 因此 F = 1. 最后在 (9.2) 两边同乘以 x, 并令 $x \to +\infty$ , 就得到 $1 = B + E$ , 因此 E = 0. 以下的积分没有困难, 我们只列出结果为

$$
\int R (x) \mathrm{d} x = \frac {1}{2} x ^ {2} + \frac {1}{x - 1} + \frac {x - 1}{2 (x ^ {2} + 1)} + \ln | x - 1 | + \frac {3}{2} \arctan x + C.
$$

代替用各种手段去确定 (9.2) 中的未知数的思路, 另外还有一种方法值得介绍, 它看似笨拙, 实际上往往很有效 (见 [72]).

解 2 写出 (9.2) 并求出 A = -1 之后, 将右边这一项移到左边, 计算出

$$
\begin{array}{r l} & {\frac {x ^ {5} - x ^ {4} + x ^ {3} - 3 x ^ {2} - 2 x}{(x - 1) ^ {2} (x ^ {2} + 1) ^ {2}} - \frac {- 1}{(x - 1) ^ {2}}} \\ & {= \frac {x ^ {5} + x ^ {3} - x ^ {2} - 2 x + 1}{(x - 1) ^ {2} (x ^ {2} + 1) ^ {2}}} \\ & {= \frac {x ^ {4} + x ^ {3} + 2 x ^ {2} + x - 1}{(x - 1) (x ^ {2} + 1) ^ {2}} = \frac {B}{x - 1} + \dots ,} \end{array}
$$

然后就容易求出 B = 1. 再将这右边的第一项移到左边, 计算得到

$$
\begin{array}{r l} \frac {x ^ {4} + x ^ {3} + 2 x ^ {2} + x - 1}{(x - 1) (x ^ {2} + 1) ^ {2}} - \frac {1}{x - 1} & = \frac {x ^ {3} + x - 2}{(x - 1) (x ^ {2} + 1) ^ {2}} = \frac {x ^ {2} + x + 2}{(x ^ {2} + 1) ^ {2}} \\ & = \frac {x + 1}{(x ^ {2} + 1) ^ {2}} + \frac {1}{x ^ {2} + 1}, \end{array}
$$

以下从略.

在将真分式分解为部分分式的和时, 除了用观察法与待定系数法外, 对于一些特殊的情况, 另外有一些方法.

(1) 形如 $\int \frac{Q_m(x)}{(x - a)^n} \mathrm{d}x$ 的积分, 其中 $Q_m(x)$ 为 $m$ 次多项式. 对此类积分, 可用换元 $u = x - a$ 或者将 $Q_m(x)$ 展开为 $x = a$ 处的 Taylor 多项式.

例题9.2.3 计算 $\int \frac{1 - x^3}{(1 + x)^4} \, \mathrm{d}x$ .

解 令 $u = 1 + x$ ，则 $x = u - 1$ ，因此

$$
\begin{array}{r l} \int \frac {1 - x ^ {3}}{(1 + x) ^ {4}} \mathrm{d} x & = \int \frac {1 - (u - 1) ^ {3}}{u ^ {4}} \mathrm{d} u = \int \left(- \frac {1}{u} + \frac {3}{u ^ {2}} - \frac {3}{u ^ {3}} + \frac {2}{u ^ {4}}\right) \mathrm{d} u \\ & = - \ln | u | - \frac {3}{u} + \frac {3}{2 u ^ {2}} - \frac {2}{3 u ^ {3}} + C \\ & = - \ln | x + 1 | - \frac {3}{x + 1} + \frac {3}{2 (x + 1) ^ {2}} - \frac {2}{3 (x + 1) ^ {3}} + C. \end{array}
$$

(2) 形如 $\int \frac{Q_m(x)}{(x^2 + px + q)^n} \mathrm{d}x$ 的积分, 其中分母无实根, $Q_m(x)$ 为 $m$ 次多项式. 这时可用带余除法将 $Q_m(x)$ 化成 $Q_{m-2}(x)(x^2 + px + q)$ 与一个余项的和, 如果 $m - 2 \geqslant 2$ , 继续对 $Q_{m-2}(x)$ 作带余除法, 直到其次数小于 2 (例题从略).

## 9.2.2 三角函数有理式的积分

三角函数有理式的积分 $\int R(\sin x, \cos x) \mathrm{d}x$ 都可以用“万能变换” $t = \tan \frac{x}{2}$ 化为有理函数进行积分。但这时产生的有理函数的分母的次数较高，计算工作量较大。因此我们往往避免用万能变换，而是根据具体情况寻找较为简单的解法。例如，下面的几种变换的计算量往往比用万能变换要小。

1. 如果 $R(-\sin x, \cos x) = -R(\sin x, \cos x)$ ，则令 $t = \cos x;$ 

2. 如果 $R(\sin x, -\cos x) = -R(\sin x, \cos x)$ ，则令 $t = \sin x;$ 

3. 如果 $R(-\sin x, -\cos x) = R(\sin x, \cos x)$ ，则令 $t = \tan x$ .

例题9.2.4 计算 $I = \int \frac{\mathrm{d}x}{\sin x\cos 2x}$ 

解 这属于上面的情况 1, 所以可试用 $t = \cos x$ 计算如下:

$$
\begin{array}{l} I = \int \frac {\sin x \mathrm{d} x}{(1 - \cos^ {2} x) (2 \cos^ {2} x - 1)} = \int \frac {\mathrm{d} \cos x}{(\cos^ {2} x - 1) (2 \cos^ {2} x - 1)} \\ = \int \frac {\mathrm{d} t}{(t ^ {2} - 1) (2 t ^ {2} - 1)} = \int \left(\frac {1}{t ^ {2} - 1} - \frac {2}{2 t ^ {2} - 1}\right) \mathrm{d} t \\ = \frac {1}{2} \ln \left| \frac {t - 1}{t + 1} \right| - \frac {1}{\sqrt {2}} \ln \left| \frac {\sqrt {2} t - 1}{\sqrt {2} t + 1} \right| + C \\ = \frac {1}{2} \ln \left| \frac {\cos x - 1}{\cos x + 1} \right| - \frac {1}{\sqrt {2}} \ln \left| \frac {\sqrt {2} \cos x - 1}{\sqrt {2} \cos x + 1} \right| + C. \end{array}
$$

例题9.2.5 计算 $I = \int \frac{\cos 2x}{\sin^4 x + \cos^4 x} \, \mathrm{d}x.$ 

解 1 这属于上面的情况 3, 因此可令 $t = \tan x$ 计算如下:

$$
\begin{array}{l} I = \int \frac {\frac {\cos^ {2} x - \sin^ {2} x}{\cos^ {2} x}}{\frac {\sin^ {4} x + \cos^ {4} x}{\cos^ {4} x}} \cdot \frac {1}{\cos^ {2} x} \mathrm{d} x = \int \frac {1 - \tan^ {2} x}{1 + \tan^ {4} x} \mathrm{d} \tan x = \int \frac {1 - t ^ {2}}{1 + t ^ {4}} \mathrm{d} t \\ = \frac {1}{2 \sqrt {2}} \ln \frac {t ^ {2} + \sqrt {2} t + 1}{t ^ {2} - \sqrt {2} t + 1} + C = \frac {1}{2 \sqrt {2}} \ln \frac {\sec^ {2} x + \sqrt {2} \tan x}{\sec^ {2} x - \sqrt {2} \tan x} + C, \end{array}
$$

上面最后一个积分利用了例题 9.1.8 中的结果.

解 2 如下解法更为简单:

$$
\begin{array}{r l} I & = \int \frac {\cos 2 x}{(\sin^ {2} x + \cos^ {2} x) ^ {2} - 2 \sin^ {2} x \cos^ {2} x} \mathrm{d} x \\ & = \int \frac {\cos 2 x}{2 - \sin^ {2} 2 x} \mathrm{d} (2 x) = \int \frac {\mathrm{d} \sin 2 x}{2 - \sin^ {2} 2 x} \\ & = \frac {1}{2 \sqrt {2}} \ln \left| \frac {\sin 2 x + \sqrt {2}}{\sin 2 x - \sqrt {2}} \right| + C. \end{array}
$$

注 上面的例题表明, 求三角函数有理式的不定积分时, 不必拘泥于所提到的各种变换, 而应根据具体问题去寻求最适当的解法. 下面我们再举一例.

例题9.2.6 计算 $I = \int \sin^4 x\mathrm{d}x.$ 

分析 本题属于上面的情况 3, 但如果用变换 $t = \tan x$ 做, 计算量较大. 下面介绍两种解法.

解 1 用分部积分法可进行如下:

$$
\begin{array}{r l} I & = - \int \sin^ {3} x \mathrm{d} \cos x \\ & = - \sin^ {3} x \cos x + \int \cos x \mathrm{d} \sin^ {3} x \\ & = - \sin^ {3} x \cos x + 3 \int \sin^ {2} x \cos^ {2} x \mathrm{d} x \\ & = - \sin^ {3} x \cos x + 3 \int \sin^ {2} x (1 - \sin^ {2} x) \mathrm{d} x \\ & = - \sin^ {3} x \cos x + 3 \int \sin^ {2} x \mathrm{d} x - 3 \int \sin^ {4} x \mathrm{d} x \\ & = - \sin^ {3} x \cos x + \frac {3}{2} \int (1 - \cos 2 x) \mathrm{d} x - 3 I \\ & = - \sin^ {3} x \cos x + \frac {3}{2} x - \frac {3}{4} \sin 2 x - 3 I, \end{array}
$$

所以得到

$$
I = - \frac {1}{4} \sin^ {3} x \cos x + \frac {3}{8} x - \frac {3}{1 6} \sin 2 x + C.
$$

解 2 如果用三角函数的倍角公式, 则可得到更简单的解法:

$$
\begin{array}{r l} I & = \int \left(\frac {1 - \cos 2 x}{2}\right) ^ {2} \mathrm{d} x = \frac {1}{4} \int (1 - 2 \cos 2 x + \cos^ {2} 2 x) \mathrm{d} x \\ & = \frac {1}{4} \int \left(1 - 2 \cos 2 x + \frac {1 + \cos 4 x}{2}\right) \mathrm{d} x \\ & = \frac {3}{8} x - \frac {1}{4} \sin 2 x + \frac {1}{3 2} \sin 4 x + C. \end{array}
$$

## 9.2.3 无理函数积分的例子

一般来说, 无理函数的不定积分并不总是积得出来的. 例如, 即使看似简单的二项式微分式的积分

$$
\int x ^ {m} (a + b x ^ {n}) ^ {p} \mathrm{d} x,
$$

其中 $a, b$ 为常数, $m, n, p$ 为有理数, 也仅仅在 $p, (m + 1) / n$ 或 $(m + 1) / n + p$ 为整数这三种特殊情况下才能积得出来. 其余情况下的二项式微分式都积不出来, 见[14]第二卷279小节. 在前面我们已经提到, 对于形如 $\int R(x, \sqrt{ax^2 + bx + c}) \, \mathrm{d}x$ ( $a \neq 0$ ), 其中 $R$ 为有理分式的不定积分, 可以利用Euler变换或三角变换化为有理函数进行积分 (见例题9.1.1的注2). 下面我们再举一些例题, 说明如何对一些特殊的无理函数进行积分.

例题9.2.7 计算不定积分 $\int \frac{1}{x}\sqrt{\frac{x + 2}{x - 2}}\mathrm{d}x.$ 

解 令 $t = \sqrt{\frac{x + 2}{x - 2}}$ ，则 $x = \frac{2(t^2 + 1)}{t^2 - 1}$ ， $\mathrm{d}x = -\frac{8t}{(t^2 - 1)^2}\mathrm{d}t.$ 因此

$$
\begin{array}{r l} \int \frac {1}{x} \sqrt {\frac {x + 2}{x - 2}} \mathrm{d} x & = \int \frac {4 t ^ {2}}{(1 - t ^ {2}) (1 + t ^ {2})} \mathrm{d} t \\ & = 2 \int \left(\frac {1}{1 - t ^ {2}} - \frac {1}{1 + t ^ {2}}\right) \mathrm{d} t \\ & = \ln \left| \frac {1 + t}{1 - t} \right| - 2 \arctan t + C \\ & = \ln \left| \frac {1 + \sqrt {\frac {x + 2}{x - 2}}}{1 - \sqrt {\frac {x + 2}{x - 2}}} \right| - 2 \arctan \sqrt {\frac {x + 2}{x - 2}} + C \\ & = \ln | x + \sqrt {x ^ {2} - 4} | + \arctan \frac {\sqrt {x ^ {2} - 4}}{2} + C. \end{array}
$$

注 对于形如 $\int R\left(x, \sqrt[n]{\frac{ax + b}{cx + d}}\right) \mathrm{d}x (n > 1, ad - bc \neq 0)$ 的不定积分，一般只要令 $t = \sqrt[n]{\frac{ax + b}{cx + d}}$ ，就可以将其化为有理函数积分。

例题9.2.8 计算不定积分 $I = \int \frac{1 - \sqrt{x + 1}}{(x + 1)(1 + \sqrt[3]{x + 1})} \mathrm{d}x.$ 

解 令 $t = \sqrt[6]{x + 1}$ , 则 $x = t^6 - 1$ , $\mathrm{d}x = 6t^5\mathrm{d}t$ . 因此

$$
\begin{array}{l} I = \int \frac {6 (1 - t ^ {3}) t ^ {5}}{t ^ {6} (1 + t ^ {2})} \mathrm{d} t \\ = 6 \int \frac {1 - t ^ {3}}{t (1 + t ^ {2})} \mathrm{d} t \\ = 6 \int \frac {(1 + t ^ {2}) - t (t - 1) - t (1 + t ^ {2})}{t (1 + t ^ {2})} \mathrm{d} t \\ = 6 \int \left(\frac {1}{t} - \frac {t - 1}{t ^ {2} + 1} - 1\right) \mathrm{d} t \\ = 6 \left(\ln | t | - \frac {1}{2} \ln (1 + t ^ {2}) + \arctan t - t\right) + C \\ = 6 \left(\ln \sqrt [ 6 ]{x + 1} - \frac {1}{2} \ln (1 + \sqrt [ 3 ]{x + 1}) + \arctan \sqrt [ 6 ]{x + 1} - \sqrt [ 6 ]{x + 1}\right) + C \\ = 3 \ln \frac {\sqrt [ 3 ]{x + 1}}{1 + \sqrt [ 3 ]{x + 1}} + 6 \arctan \sqrt [ 6 ]{x + 1} - 6 \sqrt [ 6 ]{x + 1} + C. \end{array}
$$

注 对于形如 $\int R(x, \sqrt[n]{ax + b}, \sqrt[m]{ax + b}) \mathrm{d}x$ 的不定积分, 其中 $m, n$ 是正整数, 可以用 $t = \sqrt[p]{ax + b}$ , 其中 $p$ 是 $m, n$ 的最小公倍数, 将其有理化.

最后, 我们举出一些被积函数既含有无理式, 又含有超越函数 (指数函数、对数函数、三角函数与反三角函数) 的不定积分例题. 对这类题, 并没有固定的一般解法, 只有根据经验, 对具体问题进行分析和尝试, 寻找合适的解法.

例题9.2.9 计算不定积分 $I = \int \sqrt{1 + \sin x} \, \mathrm{d}x$ .

分析 关键是去掉根号或化掉根号下的三角函数. 我们介绍下列两种方法.

解 1 用适当的三角恒等式, 可计算如下:

$$
\begin{array}{l} I = \int \sqrt {\sin^ {2} \frac {x}{2} + \cos^ {2} \frac {x}{2} + 2 \sin \frac {x}{2} \cos \frac {x}{2}} \mathrm{d} x \\ = \int \left(\sin \frac {x}{2} + \cos \frac {x}{2}\right) \mathrm{d} x \\ = - 2 \cos \frac {x}{2} + 2 \sin \frac {x}{2} + C. \end{array}
$$

解 2 用代换法, 令 $t = \sqrt{1 + \sin x}$ , 则

$$
x = \arcsin (t ^ {2} - 1), \quad \mathrm{d} x = \frac {2 t \mathrm{d} t}{\sqrt {2 t ^ {2} - t ^ {4}}},
$$

因此

$$
I = \int {\frac {2 t ^ {2} \mathrm{d} t}{\sqrt {2 t ^ {2} - t ^ {4}}}} = \int {\frac {\mathrm{d} t ^ {2}}{\sqrt {2 - t ^ {2}}}} = - 2 \sqrt {2 - t ^ {2}} + C = - 2 \sqrt {1 - \sin x} + C.
$$

例题 9.2.10 计算不定积分 $I=\int\arctan\sqrt{\frac{a-x}{a+x}}\mathrm{d}x(a>0)$ .

解 1 用分部积分法:

$$
\begin{array}{l} I = x \arctan \sqrt {\frac {a - x}{a + x}} - \int x \cdot \frac {1}{1 + \frac {a - x}{a + x}} \cdot \frac {1}{2 \sqrt {\frac {a - x}{a + x}}} \cdot \frac {- 2 a}{(a + x) ^ {2}} \mathrm{d} x \\ = x \arctan \sqrt {\frac {a - x}{a + x}} + \frac {1}{2} \int \frac {x}{\sqrt {a ^ {2} - x ^ {2}}} \mathrm{d} x \\ = x \arctan \sqrt {\frac {a - x}{a + x}} - \frac {1}{2} \sqrt {a ^ {2} - x ^ {2}} + C. \end{array}
$$

解2 令 $x = a\cos t$ ，则有

$$
\arctan \sqrt {\frac {a - x}{a + x}} = \arctan \sqrt {\frac {1 - \cos t}{1 + \cos t}} = \arctan \sqrt {\frac {2 \sin^ {2} \frac {t}{2}}{2 \cos^ {2} \frac {t}{2}}} = \arctan \left(\tan \frac {t}{2}\right) = \frac {t}{2},
$$

因此

$$
\begin{array}{r l} & I = a \int \frac {t}{2} \mathrm{d} \cos t = a \cdot \frac {t}{2} \cos t - \frac {a}{2} \int \cos t \mathrm{d} t \\ & \quad = \frac {a t}{2} \cos t - \frac {a}{2} \sin t + C \\ & \quad = \frac {x}{2} \arccos \frac {x}{a} - \frac {1}{2} \sqrt {a ^ {2} - x ^ {2}} + C. \end{array}
$$

## 9.2.4 练习题

1. 用观察法将被积函数拆开后计算不定积分:

(1) $\int \frac{x}{(x + 1)(x + 2)}\mathrm{d}x;$ 

(2) $\int \frac{x^2 + x + 1}{x(1 + x^2)}\mathrm{d}x;$ 

(3) $\int \frac{\mathrm{d}x}{x^4(x^2 + 1)}$ ; 

(4) $\int \frac{4x^2 + 3}{(x^2 + 1)(x^2 + 2)}\mathrm{d}x.$ 

2. 计算下列有理函数的不定积分:

(1) $\int \frac{x^5 - x}{1 + x^8} \, \mathrm{d}x;$ 

(2) $\int \frac{\mathrm{d}x}{x(x^n + a)} (a \neq 0)$ ; 

(3) $\int \frac{x\mathrm{d}x}{(x + 1)(x^2 + 3)};$ 

(4) $\int \frac{x - 1}{(x^2 + 2x + 3)^2} \, \mathrm{d}x;$ 

(5) $\int \frac{1 + x + x^2}{(x - 2)^{10}}\mathrm{d}x;$ 

(6) $\int \frac{x^3 + 1}{x^3 - 5x^2 + 6x} \, \mathrm{d}x;$ 

(7) $\int \frac{\mathrm{d}x}{1 + x^6};$ 

(8) $\int \frac{x^2 - x + 3}{(x^2 + x + 1)(x - 1)^2} \, \mathrm{d}x.$ 

3. 计算下列三角函数有理式的不定积分:

(1) $\int \frac{\mathrm{d}x}{1 + \cos x}$ ; 

(2) $\int \frac{\mathrm{d}x}{\sin x\cos^4 x};$ 

(3) $\int \frac{\mathrm{d}x}{2 + \tan^2 x};$ 

(4) $\int \tan^5 x\sec^3 x\mathrm{d}x;$ 

(5) $\int \frac{\sec x}{(1 + \sec x)^2} \, \mathrm{d}x;$ 

(6) $\int \frac{\sin^2 x \cos x}{\sin x + \cos x} \, \mathrm{d}x;$ 

(7) $\int \frac{\sin x \cos x}{1 + \sin^4 x} \, \mathrm{d}x;$ 

(8) $\int \frac{\mathrm{d}x}{\sin^4 x \cos^2 x}$ . 

4. 计算 Poisson (泊松) 积分 $\int \frac{1 - r^2}{1 - 2r\cos x + r^2}\mathrm{d}x$ $(-1 < r < 1)$ .

5. 计算下列无理函数的不定积分:

(1) $\int \frac{\mathrm{d}x}{\sqrt{\sin x\cos^7x}};$ 

(2) $\int \frac{\mathrm{d}x}{x\sqrt{2x^2 + 3}};$ 

(3) $\int \sqrt{\tan^2 x + 2} \, \mathrm{d}x$ ; 

(4) $\int \frac{x\mathrm{e}^x\mathrm{d}x}{\sqrt{1 + \mathrm{e}^x}};$ 

(5) $\int \frac{\mathrm{d}x}{\sqrt{(x - 1)^3(x - 2)}};$ 

(6) $\int \frac{\sqrt{x} - 1}{\sqrt[3]{x} + 1} \, \mathrm{d}x.$ 

## §9.3 对于教学的建议

## 9.3.1 学习要点

1. 计算不定积分是微积分课程的基本技能之一 (这方面可参看 [59] 第二册的第三章). 在计算机科学突飞猛进的今天, 许多不定积分都可以在计算机上用 Mathematica, Maple 等软件直接求出. 因此, 许多教师在教“不定积分”这一章时, 可能会产生这样一个问题: 关于求不定积分的方法与技巧, 究竟应该教些什么? 本章的内容反映了我们对这个问题的观点. 有兴趣的读者可以参看《美国数学月刊》(1985) 第 92 卷 214—215 页中的意见.

2. 不定积分的计算含有大量的技巧。这些技巧对于爱好数学的大学一年级学生往往有很大的吸引力。当然，学生需要进行必要的训练来掌握这一项技能，这对于今后的学习与数学素养的提高都是必不可少的。但是如果在这方面花费太多的精力与时间，特别是追求一些针对特殊类型不定积分的特殊技巧，则是枉费心机和得不偿失的。教师需要向学生强调，例如

$$
\begin{array}{l} \int \mathrm{e} ^ {- x ^ {2}} \mathrm{d} x, \int \sin x ^ {2} \mathrm{d} x, \int \cos x ^ {2} \mathrm{d} x, \\ \int \frac {\sin x}{x} \mathrm{d} x, \int \frac {\cos x}{x} \mathrm{d} x, \int \frac {\mathrm{d} x}{\ln x}, \\ \int \frac {\mathrm{d} x}{\sqrt {1 - k ^ {2} \sin^ {2} x}}, \int \sqrt {1 - k ^ {2} \sin^ {2} x} \mathrm{d} x, \\ \int \frac {\mathrm{d} x}{(1 + k ^ {2} \sin^ {2} x) \sqrt {1 - k ^ {2} \sin^ {2} x}} (0 <   k <   1) \end{array}
$$

等在各种领域有重要应用的许多不定积分都不是初等函数. 这些不定积分的可积性, 就像中学时代遇到过的“用尺规三等分任意角”问题一样, 不是未解决的难题, 而是在 19 世纪早已解决的问题. (关于二项式微分式除三种情况外不可积的证明见 [11] 中的第六章.)

3. 许多初等函数的原函数不是初等函数并不是坏事, 而是好事. 例如上面列出的许多非初等不定积分都是有重要意义和多方面应用的新函数.

4. 利用求导运算是求不定积分的逆运算, 而求导运算要容易得多, 初学者在求得不定积分后应当用求导运算加以验证, 这样就可以纠正绝大部分错误.

5. 对习题课的建议 不定积分计算灵活多变, 在学习中可以用一些不是很困难的题引导学生寻找多种解法. 这对于掌握基本技能很有好处. 例如

$$
\int {\frac {\mathrm{d} x}{(x ^ {2} + a ^ {2}) ^ {2}}}, \int {\frac {\mathrm{d} x}{\sin x}}, \int {\frac {\sin x \mathrm{d} x}{\sin x + \cos x}}
$$

都是值得使用的积分题. 此外, 根据教材和时间的情况还可以介绍双曲代换和复数计算方法等内容.

## 9.3.2 参考题

1. 设 $f'(\sin^{2}x) = \cos 4x + \tan^{2}x, 0 < x < 1$ ，求函数 $f(x)$ .

2. 计算下列不定积分:

(1) $\int x\arctan x\ln (1 + x^2)\mathrm{d}x;$ (2) $\int \frac{1 - \ln x}{(x - \ln x)^2}\mathrm{d}x;$ 

(3) $\int [x]|\sin \pi x|\mathrm{d}x (x\geqslant 0);$ 

(4) $\int \sin x \ln (\sin x) \, \mathrm{d}x$ ; 

$$
\int \frac {\mathrm{d} x}{\sin (x + a) \sin (x + b)};
$$

$$
\int \frac {1 - x ^ {n}}{x (1 + x ^ {n})} \mathrm{d} x (n \in \mathbf {N} _ {+}). \tag {6}
$$

3. 对每个正整数 $n$ , 定义 $I_{n} = \int \frac{(ax + b)^{n}}{\sqrt{cx + b}} \mathrm{d}x$ , 求出计算 $I_{n}$ 的递推公式.

4. 对于实数 $a \neq 0$ 与正整数 $n > 2$ , 定义 $I_{n} = \int \left[\frac{\sin (x - a) / 2}{\sin (x + a) / 2}\right]^{n} \mathrm{d}x$ . 证明: 对于 $I_{n}$ 有递推公式

$$
I _ {n} = - I _ {n - 2} + 2 \cos a \cdot I _ {n - 1} + \frac {2 \sin a}{n - 1} \left[ \frac {\sin (x - a) / 2}{\sin (x + a) / 2} \right] ^ {n - 1}.
$$

5. 设 Q 为 n 次多项式, 且具有 n 个相异实根 $x_{i}, i = 1, 2, \cdots, n$ . 又设 P 是与 Q 不可约的 m 次多项式, 且 m < n, 证明:

$$
\int \frac {P (x)}{Q (x)} \mathrm{d} x = \sum_ {i = 1} ^ {n} \frac {P (x _ {i})}{Q ^ {\prime} (x _ {i})} \ln | x - x _ {i} | + C.
$$

6. 求 $\int f(x) \mathrm{d}x$ , 其中 $f(x)$ 为 $x$ 到离其最近的整数的距离.

7. Liouville 在 19 世纪 30 年代对于初等函数的不定积分在什么条件下是初等函数进行过深入的研究 (参见 [55]), 他得到的一个结果是:

定理 设 $f, g$ 为有理函数, $g$ 不是常值函数, 如果 $\int f(x) \mathrm{e}^{g(x)} \mathrm{d}x$ 是初等函数, 则存在有理函数 $h$ , 使得

$$
\int f (x) \mathrm{e} ^ {g (x)} \mathrm{d} x = h (x) \mathrm{e} ^ {g (x)} + C.
$$

试用这个定理证明: $\int e^{-x^{2}}dx$ 和 $\int\frac{e^{x}}{x}dx$ 都是非初等不定积分 (由后者又可推出 $\int\frac{dx}{\ln x}$ 也是非初等不定积分).
