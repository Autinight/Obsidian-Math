

## 第四章 函数极限

本章为一元函数的极限理论, 是数列极限的推广. 由于数列也可看成是以正整数集 $\mathbf{N}_{+}$ 为定义域的一元函数, 所以我们约定, 本章及以后凡讲到一元函数, 若不另作说明的话, 其定义域一般均为区间或区间的并. 按照流行的术语, 也就是说以下讨论的一元函数的自变量均为连续而不是离散的.

本章计算函数极限的方法只是在数列极限的基础上引申出来的一些基本方法. 计算函数极限最有力的方法, 即 L'Hospital (洛必达) 法则和 Taylor (泰勒) 公式, 均以一元微分学为基础, 将在 §8.1 和 §8.2 中介绍.

本章的前三节依次为函数极限的定义、性质和两个重要极限. 在 §4.4 对无穷小量、有界量和无穷大量作一个小结, 重点讨论等价量代换法, 并指出乱用这个方法会造成的错误. 最后一节为学习要点和参考题.

## §4.1 函数极限的定义

## 4.1.1 函数极限的基本类型

函数极限有多种类型, 本书中将下面定义的函数极限称为基本类型.

1. 函数 $f$ 在点 $a$ 处有极限 (即收敛) 的定义是: 存在数 $A$ , 使得函数 $f(x)$ 在 $x$ 趋于 $a$ 时以 $A$ 为极限 (其定义见下一项).

2. 函数 $f(x)$ 在 $x$ 趋于 $a$ 时以 $A$ 为极限 (或函数 $f$ 在点 $a$ 处有极限 $A$ ) 的定义是: 设 $a, A \in \mathbb{R}$ , 函数 $f$ 在点 $a$ 的一个去心邻域上有定义, 若对每一个给定的 $\varepsilon > 0$ , 存在 $\delta > 0$ , 使得当 $x \in O_{\delta}(a) - \{a\}$ (即 $0 < |x - a| < \delta$ ) 时, 成立 $|f(x) - A| < \varepsilon$ .

3. 上述定义用逻辑符号 $\forall$ 和 $\exists$ 可简写为: $\forall \varepsilon > 0, \exists \delta > 0, \forall x \in O_{\delta}(a) - \{a\}$ , 成立 $|f(x) - A| < \varepsilon$ .

4. 若函数 $f(x)$ 在 $x$ 趋于 $a$ 时存在极限 $A$ , 则记为 $\lim_{x \to a} f(x) = A$ 或 $f(x) \to A (x \to a)$ . 注意: 数列 $\{a_n\}$ 收敛于 $a$ 可简记为 $a_n \to a$ , 但在函数极限的记号 $f(x) \to A (x \to a)$ 中的 $(x \to a)$ 一般不能省略 (除非另有约定).

5. 函数 $f(x)$ 在 $x$ 趋于 $a$ 时是否收敛, 在收敛时极限是什么, 这完全由函数在点 $a$ 附近 (但不包括点 $a$ ) 的性质决定, 因此是函数在点 $a$ 附近的局部性质. 初学者应注意这个特点在解题中的作用, 并由此体会函数极限的意义.

6. 中学教材里的初等函数均成立 $\lim_{x\to a}f(x) = f(a)$ . 实际上这是函数 $f(x)$ 在点 $a$ 处连续的定义, 它是下一章的内容. 但对于高等数学来说, 将函数的极限和连续这两个有密切联系但又不同的概念区分开来是必要的.

7. 称 $O_{\delta}(a) - \{a\}$ 为点 $a$ 的一个去心邻域 (或空心邻域). 注意: $x \in O_{\delta}(a) -$ 

$$
\{a \} \Longleftrightarrow 0 <   | x - a | <   \delta \Longleftrightarrow x \in (a - \delta) \cup (a + \delta).
$$

## 4.1.2 函数极限的其他类型

首先, 恰如在数列极限的情况那样, 在记号 $\lim_{x\to a}f(x) = A$ 或 $f(x)\rightarrow A(x\to a)$ 中的 $A$ 既可以是有限数, 又可以是 $\infty , + \infty$ 和 $-\infty$ 

其次, 在记号 $\lim_{x\to a}f(x) = A$ 中的 $a$ 也可以从有限数换为 $\infty, +\infty$ 和 $-\infty$ 中间的任何一种. 在今后可用记号 $f(\infty), f(+\infty), f(-\infty)$ 表示这三类极限.

还有, 在 $a$ 为有限数时, 自变量 $x$ 趋于 $a$ 时又可以受到 $x < a$ 或 $x > a$ 的限制, 这样一来又产生两种单侧极限, 即左侧极限与右侧极限, 分别记为

$$
\lim _ {x \to a ^ {-}} f (x)   \text {与}   \lim _ {x \to a ^ {+}} f (x).
$$

此外, 单侧极限还有自己的特殊记号: $f(a^{-})$ 与 $f(a^{+})$ .

因此从函数极限的基本类型

$$
\lim _ {x \rightarrow a} f (x) = A\tag{4.1}
$$

出发, 其中 $x \to a$ 可以换成 $x \to \infty$ , $x \to +\infty$ , $x \to -\infty$ , $x \to a^{-}$ 和 $x \to a^{+}$ , 共有 6 种. 另一方面, 在 (4.1) 中右边的 (有限数) $A$ 可以换成 $\infty, +\infty$ 和 $-\infty$ , 共有 4 种. 这样组合就可以得到 24 种不同的极限. 在 $A$ 不是有限数时可称为广义极限 (或非正常极限). 如果再加上数列极限和无穷大数列, 就一共有 28 种.

## 4.1.3 思考题

1. 下列几种叙述能否作为函数极限 $\lim_{x\to a}f(x) = A$ 的等价定义？

(1) $\forall \varepsilon > 0, \exists \delta > 0, \forall x \in O_{\delta}(a) - \{a\}$ , 成立 $|f(x) - A| \leqslant \varepsilon$ ;

(2) $\forall \varepsilon > 0, \exists \delta > 0, \forall x \in O_{\delta}(a) - \{a\}$ , 成立 $|f(x) - A| < k\varepsilon$ ( $k$ 为常数);

(3) $\forall n\in \mathbf{N}_{+},\exists \delta >0,\forall x\in O_{\delta}(a) - \{a\}$ ，成立 $|f(x) - A| <   1 / n;$ 

(4) $\forall \varepsilon > 0, \exists n, \forall x \in O_{\frac{1}{n}}(a) - \{a\}$ , 成立 $|f(x) - A| < \varepsilon$ .

2. 下列几种叙述能否作为函数极限 $\lim_{x\to a}f(x)=A$ 的等价定义？

(1) $\exists \delta > 0, \forall \varepsilon > 0, \forall x \in O_{\delta}(a) - \{a\}$ , 成立 $|f(x) - A| < \varepsilon$ ;

(2) $\forall \delta > 0, \exists \varepsilon > 0, \forall x \in O_{\delta}(a) - \{a\}$ , 成立 $|f(x) - A| < \varepsilon$ ;

(3) 当 $x$ 充分靠近 $a$ 时, $f(x)$ 越来越接近 $A$ .

3. 用对偶法则给出: (1) “ $f(x)$ 在点 $a$ 不收敛于 $A$ ” 的正面叙述; (2) “ $f(x)$ 在点 $a$ 处没有极限”的正面叙述.

4. 怎样用正面方式叙述下列否定性概念:

(1) $\lim_{x\to \infty}f(x)\neq A;$ (2) $\lim_{x\to -\infty}f(x)\neq A;$ 

(3) $\lim_{x\to a}f(x)\neq \infty ;$ (4) $\lim_{x\to a^{-}}f(x)\neq A;$ 

(5) $\lim_{x\to a^{+}}f(x)\neq +\infty .$ 

## 4.1.4 例题

请初学者在以下例题中注意: 处理函数极限的方法与数列极限类似, 但还是有自己的特点. 我们从最简单的例题开始, 逐步增加复杂性.

例题4.1.1 证明 $\lim_{x\to 1}\frac{x^2 - 1}{x - 1} = 2.$ 

证 根据极限定义, 尽管函数 $f(x) = \frac{x^2 - 1}{x - 1}$ 在 $x = 1$ 处没有定义, 仍可以考虑它在该点的极限. 由于在 $x \to 1$ 的极限定义中 $x \neq 1$ , 因此在函数 $f$ 的分子和分母中的因子 $x - 1$ 可以约去. 这样就有

$$
| f (x) - 2 | = \left| \frac {x ^ {2} - 1}{x - 1} - 2 \right| = | x - 1 |.
$$

对 $\varepsilon > 0$ ，取 $\delta = \varepsilon$ ，就可以使 $0 < |x - 1| < \delta$ 时，成立 $|f(x) - 2| < \varepsilon$ .

例题 4.1.2 求极限 $\lim_{x\to1}(x^{2}+5)$ .

解 将 $x^{2} + 5$ 写为 $x^{2} + 5 = (x - 1)^{2} + 2(x - 1) + 6,$ 可见极限会是6.分析

$$
\left| \left(x ^ {2} + 5\right) - 6 \right| = \left| (x - 1) ^ {2} + 2 (x - 1) \right| = | x - 1 | \cdot | x + 1 |,
$$

不妨一开始就限制 $\delta \leqslant 1$ ，也就是说将 $x$ 的范围限制在 $|x - 1| < 1$ （即 $0 < x < 2$ ）之内.这时因子 $|x + 1| < 3,$ 因此对于给定的 $\varepsilon >0,$ 只要取 $\delta = \min \left\{1,\frac{1}{3}\varepsilon \right\}$ ，就可以从 $0 < |x - 1| < \delta$ 得到

$$
\left| x ^ {2} + 5 - 6 \right| = | x + 1 | \cdot | x - 1 | \leqslant 3 | x - 1 | <   3 \delta \leqslant \varepsilon ,
$$

故所求的极限确实是6.

注 虽然本题很简单, 但仍值得注意. 由于极限类型是 $x \to 1$ , 因此关键在于找出因子 $(x - 1)$ . 与此相反的是, 另一个因子 $|x + 1|$ 是非本质的, 问题只在于如何估计. 本题的方法在函数极限问题中具有典型性. 这就是对尚未确定的 $\delta$ 事先加一个限制, 然后估计就容易了. 这完全相当于在数列极限的讨论中, 在对 $\varepsilon > 0$ 取 $N$ 时, 可以根据情况假定 $N$ 已大于某个值, 然后再求出最后的 $N$ . 在讨论函数极限时 (以基本类型 $\lim_{x \to a} f(x)$ 为例), 由于问题只与 $f$ 在点 $a$ 附近的性态有关, 因此可以根据需要取 $a$ 的某个邻域, 将讨论限制在这个邻域中.

思考题 对多项式 $p_{n}(x)=a_{0}x^{n}+a_{1}x^{n-1}+\cdots+a_{n}$ 证明： $\lim_{x\to a}p_{n}(x)=p_{n}(a)$ .

例题4.1.3 证明 $\lim_{x\to 0}\sin x = 0.$ 

证 1 根据定义, 对 $\varepsilon > 0$ , 考虑不等式 $-\varepsilon < \sin x < \varepsilon$ . 不妨设已有 $\varepsilon < 1$ . 利用反正弦函数, 上述不等式等价于

$$
- \arcsin \varepsilon <   x <   \arcsin \varepsilon .
$$

因此只要取 $\delta = \arcsin \varepsilon$ ，就保证当 $|x| < \delta$ 时成立 $|\sin x| < \varepsilon$ 

证2 从第一章中的三角函数不等式 (即命题1.3.6) 可以知道不等式 $|\sin x| \leqslant |x|$ 对一切 $x$ 成立. 因此, 对给定的 $\varepsilon > 0$ , 只要取 $\delta = \varepsilon$ 即可.

注 这个例子似乎太简单, 但还是值得分析. 证1是求解不等式, 这种方法不可能解决稍为复杂一点的问题 (参见2.1.3小节对数列的讨论). 证2利用了一个基本不等式 $|\sin x| \leqslant |x|$ , 处理就非常方便. 这就是适当放大或者说简化方法. 例如, 用同样的方法, 几乎原封不动地就可以证明

$$
\lim _ {x \to 0} x \sin {\frac {1}{x}} = 0.
$$

例题 4.1.4 证明: $\lim_{x\to1^{-}}\left(\sqrt{\frac{1}{1-x}+1}-\sqrt{\frac{1}{1-x}-1}\right)=0.$ 

证 在这里作代换

$$
y = \frac {1}{1 - x}
$$

是很合适的. 由于 $x \to 1^{-} \Longleftrightarrow y \to +\infty$ , 因此只要证明

$$
\lim _ {y \to + \infty} (\sqrt {y + 1} - \sqrt {y - 1}) = 0.
$$

由于 $y \to +\infty$ ，可以假定 $y > 1$ 已成立。这时就可以估计出

$$
0 <   \sqrt {y + 1} - \sqrt {y - 1} = \frac {2}{\sqrt {y + 1} + \sqrt {y - 1}} <   \frac {2}{\sqrt {y}}.
$$

到这里已容易看出, 只要令 $y > M = 4/\varepsilon^{2}$ , 就能使得

$$
0 <   \sqrt {y + 1} - \sqrt {y - 1} <   \frac {2}{\sqrt {y}} <   \varepsilon .
$$

例题 4.1.5 设已知 $\lim_{x\to+\infty}f(x)=a,$ 证明： $\lim_{x\to+\infty}\frac{\left[xf(x)\right]}{x}=a.$ 

证 利用关于整数部分记号 $[x]$ 的基本不等式是本题的唯一要点. 从

$$
x f (x) - 1 <   [ x f (x) ] \leqslant x f (x)
$$

知 (设 $x > 0$ )

$$
\frac {x f (x) - 1}{x} = f (x) - \frac {1}{x} <   \frac {[ x f (x) ]}{x} \leqslant f (x)
$$

成立. 令 $x \to +\infty$ , 用夹逼定理, 可见所求证的结论成立.

我们经常发现, 根据具体问题作适当的变量代换是非常有用的手段. 这里有一个在求极限时作变量代换的合理性问题. 具体来说, 要求极限

$\lim_{x\to a}F(x),$ 其中 $F(x) = f(g(x))$ ，又已知 $\lim_{x\to a}g(x) = A$ 和 $\lim_{y\to A}f(y) = B.$ 问：是否成立

$$
\lim _ {x \rightarrow a} F (x) = \lim _ {x \rightarrow a} f (g (x)) \stackrel {?} {=} \lim _ {y \rightarrow A} f (y) = B.\tag{4.2}
$$

如果这并不是无条件成立的话, 那么在什么条件下成立?

实际上, (4.2) 并不是无条件成立的. 例如, 设 $a = 0, A = 0$ , 函数 $g(x) \equiv 0$ ,

$$
f (y) = \left\{ \begin{array}{l l} 1, & y = 0, \\ 0, & y \neq 0, \end{array} \right.
$$

则有 $f(g(x)) \equiv 1$ . 由于 $\lim_{y \to 0} f(y) = 0, \lim_{x \to 0} f(g(x)) = 1$ , 因此等式 (4.2) 不成立.

在下一个命题中给出使(4.2)成立的三个充分条件,但都不是必要条件.

命题 4.1.1 设 $\lim_{x\to a}g(x)=A,\lim_{y\to A}f(y)=B$ 成立, 且在点 a 的某个邻域上 $g(x)=y$ . 如果满足以下条件之一:

1. 存在点 $a$ 的一个空心邻域 $O_{\delta_0}(a) - \{a\}$ , 在其中 $g(x) \neq A$ ,

2. $\lim_{y\to A}f(y)=f(A),$ 

3. $A = \infty$ ，且 $\lim_{y\to A}f(y)$ 有意义，

则成立

$$
\lim _ {x \to a} f (g (x)) = \lim _ {y \to A} f (y) = B.
$$

证 在条件 1 或条件 2 满足时, 先将条件 $\lim_{y\to A}f(y)=B$ 写为

$$
\forall   \varepsilon > 0, \exists   \delta > 0, \forall   0 <   | y - A | <   \delta ,    \text { 成立 }   | f (y) - B | <   \varepsilon ,\tag{B}
$$

又将条件 $\lim_{x\to a}g(x) = A$ 写为

$$
\forall   \delta > 0, \exists   \eta > 0, \forall   0 <   | x - a | <   \eta ,    \text { 成立 }   | g (x) - A | <   \delta ,\tag{A}
$$

就可以发现不能简单地用代换 $y = g(x)$ 得到 $\lim_{x\to a}f(g(x)) = \lim_{y\to A}f(y) = B$ . 这是因为在 (B) 中的 $0 < |y - A| < \delta$ 和 (A) 中的 $|g(x) - A| < \delta$ 不一致.

如果满足条件1, 则在(A)中就得到 $0 < |g(x) - A| < \delta$ , 因此就消除了上面的不一致性. 如果满足条件2, 则就有 $f(A) = B$ , 而在(B)中就只要 $|y - A| < \delta$ , 这样也消除了上面所说的不一致性.

对于条件 3, 这时 $A = \infty$ , 上面的 (B) 和 (A) 应改写为

$$
\forall   \varepsilon > 0, \exists   M > 0, \forall   | y | > M,   \text { 成立 }   | f (y) - B | <   \varepsilon ,\tag{B'}
$$

和

$$
\forall M > 0, \exists \eta > 0, \forall 0 <   | x - a | <   \eta , \text { 成立 } | g (x) | > M,\tag{A'}
$$

因此只要令 $g(x)=y$ 就可以得到所要的结果.

思考题 设 $\lim_{x\to a}g(x)=A,\lim_{y\to A}f(y)=B,$ 证明 $\lim_{x\to a}f(g(x))$ 只有3种可能性：
(1) $\lim_{x\to a}f(g(x))=B;\quad(2)\lim_{x\to a}f(g(x))=f(A);\quad(3)$ 极限 $\lim_{x\to a}f(g(x))$ 不存在.
(本题来自《美国数学月刊》(1975)第82卷63—64页.)

下一个例题中的内容也经常出现在极限计算中.

例题 4.1.6 若 $\lim_{x\to a}f(x)=A>0,\lim_{x\to a}g(x)=B,$ 是否有 $\lim_{x\to a}f(x)^{g(x)}=A^{B}$ 成立?

解 设已知 $\lim_{x\to a}\ln x=\ln a(a>0)$ 和 $\lim_{x\to b}e^{x}=e^{b}$ 成立 (留作练习题 7 和 8). 在此基础上, 分析以下推导 (其中将 $e^{u}$ 写成 $\exp(u)$ ):

$$
\begin{array}{r l} \lim _ {x \to a} f (x) ^ {g (x)} & = \lim _ {x \to a} \exp [ g (x) \ln f (x) ] = \exp [ \lim _ {x \to a} (g (x) \ln f (x)) ] \\ & = \exp [ \lim _ {x \to a} g (x) \cdot \lim _ {x \to a} \ln f (x) ] = \exp (B \ln A) = A ^ {B}. \end{array}
$$

可以看出其中只有

$$
\lim _ {x \rightarrow a} (g (x) \ln f (x)) = \lim _ {x \rightarrow a} g (x) \cdot \lim _ {x \rightarrow a} \ln f (x)\tag{4.3}
$$

这一步可能出问题. 实际上, 在以下三种情况时等式 (4.3) 不一定能够成立. 这就是 (1) $A = 0, B = 0$ ; (2) $A = +\infty, B = 0$ ; (3) $A = 1, B = \infty$ . 它们均使 (4.3) 的左方为 $0 \cdot \infty$ 的不定式, 因此不能用普通的乘法运算法则得到等式 (4.3). 按习惯将这三种情况分别称为 $0^0, \infty^0$ 和 $1^\infty$ 型的不定式.

注 从数列极限开始, 除了常见的 $\frac{0}{0}, \frac{\infty}{\infty}, 0 \cdot \infty$ 和 $\infty - \infty$ 外, 还经常遇到这三种不定式. 例如: $\left\{\left(1 + \frac{1}{n}\right)^n\right\}$ 是 $1^\infty$ 型不定式, $\{\sqrt[n]{n}\}$ 是 $\infty^0$ 型不定式. 如将后者取倒数, 就是 $0^0$ 型不定式.

## 4.1.5 练习题

下列各题要求按照函数极限的定义来做:

1. 证明: $\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x} = 1$ .

2. 证明: $\lim_{x \to 1} \frac{x^2 + x - 2}{x(x^2 - 3x + 2)} = -3$ .

3. 证明: $\lim_{x \to +\infty} \frac{x + 1}{x^2 - x} = 0$ .

4. 当 $a$ 取什么数值时， $\lim_{x \to -1} \frac{x^3 - ax^2 - x + 4}{x + 1}$ 存在？此时极限为何？

5. 求 $a, b$ , 使 $\lim_{x \to 2} \frac{x^2 + ax + b}{x^2 - x - 2} = 2$ .

6. 问: 使得 $\lim_{x \to 0^{+}} \frac{a + \sin \frac{1}{x}}{x} = \pm \infty$ 的参数 $a$ 是什么?

7. 证明: $\lim_{x \to a} \ln x = \ln a$ , 其中 $a > 0$ .

8. 证明: $\lim_{x \to a} e^{x} = e^{a}$ .

9. 证明 $\lim_{x\to 0}f(x)$ 与 $\lim_{x\to 0}f(x^3)$ 同时存在或不存在, 而当它们存在时必相等.

10. 问 $\lim_{x\to 0}f(x)$ 与 $\lim_{x\to 0}f(x^2)$ 是否一定同时存在或不存在？

11. 证明: Dirichlet (狄利克雷) 函数

$$
D (x) = \left\{ \begin{array}{l l} 1, & x \text {   是有理数 }, \\ 0, & x \text {   是无理数 } \end{array} \right.
$$

在每一点都没有极限.

(试用几个不同方法证明这个结论. 例如: 从极限的定义出发, 或者用下节中的 Cauchy 收敛准则和 Heine 归结原理.)

12. 试举出一个在区间 $(- \infty, + \infty)$ 上定义的函数, 使得它在点 $x = 1$ 处有极限, 但在区间的其他点都没有极限.

13. 证明: 若 $f$ 为周期函数, 且 $\lim_{x \to +\infty} f(x) = 0$ , 则 $f(x) \equiv 0$ .

14. 证明: 任何非常值的周期函数不可能是有理分式函数.

## §4.2 函数极限的基本性质

## 4.2.1 基本性质

数列极限的一系列基本性质都可以移植到每一种函数极限(或广义极限)上去.对于基本类型 $\lim_{x\to a}f(x) = a$ ，以下几个基本性质或定理在教科书中都有证明：

1. 函数极限如果存在, 一定唯一.

2. 函数极限的局部有界性定理, 即若函数在点 a 有极限, 则函数在点 a 局部有界 (可以在点 a 无定义).

3. 函数极限的局部比较定理, 包括局部保号性定理.

4. 函数极限的四则运算.

函数极限的其他基本性质, 包括单调函数必有单侧极限 (或广义极限)、Heine 归结原理和 Cauchy 收敛准则等, 将在下面作为基本命题逐个介绍.

## 4.2.2 基本命题

下面是单侧极限与非单侧极限之间的重要联系(它的证明留给读者).

命题 4.2.1 设 a 为有限实数, 则 $\lim_{x\to a}f(x)=A$ 的充分必要条件是 $f(a^{-})=f(a^{+})=A$ , 其中 A 可以是有限数, 也可以是无穷大量.

与单调数列的情况相似, 有单调函数的极限存在定理 (以下只是一种情况).

命题 4.2.2（单调函数的单侧极限存在定理）设 f 在区间 $(a, b)$ 上单调，则 $f(b^{-}) = \lim_{x \to b^{-}} f(x)$ 一定有意义。当 f 单调增加时，如 f 在 $(a, b)$ 上有上界，则 $f(b^{-})$ 为有限数，否则 $f(b^{-}) = +\infty$ 。对 f 单调减少有类似的结论成立。

证 不失一般性, 可设 f 单调增加. 考虑函数 f 的值域, 即数集

$$
S = \{y \mid \text { 存在 } x \in (a, b), \text { 使 } y = f (x) \}.
$$

分两种情况讨论.

(1) 值域 S 有上界. 由确界存在定理, 存在有限数 $\beta = \sup S$ . 我们要证明

$$
\lim _ {x \to b ^ {-}} f (x) = \beta .
$$

由上确界定义知, $\forall \varepsilon > 0$ , 数 $\beta - \varepsilon$ 不是数集 $S$ 的上界, 因此存在 $x_0 \in (a, b)$ , 使 $f(x_0) > \beta - \varepsilon$ . 取 $\delta = b - x_0$ , 则当 $0 < b - x < \delta = b - x_0$ 时, 也就是 $x_0 < x < b$ 时, 成立

$$
\beta - \varepsilon <   f (x _ {0}) \leqslant f (x) \leqslant \beta ,
$$

即 $|f(x) - \beta| < \varepsilon$ . 因此得到 $\lim_{x \to b^{-}} f(x) = f(b^{-}) = \beta$ .

(2) 值域 $S$ 无上界. 这时 $\sup S = +\infty$ . 对任何给定的数 $G > 0$ , 都存在 $x_{1} \in (a, b)$ , 使 $f(x_{1}) > G$ . 取 $\delta = b - x_{1}$ , 则当 $0 < b - x < \delta = b - x_{1}$ 时, 也就是 $x_{1} < x < b$ 时, 成立

$$
f (x) \geqslant f (x _ {1}) > G,
$$

因此得到 $\lim_{x\to b^{-}}f(x)=f(b^{-})=+\infty.$ 

Heine 归结原理是函数极限的又一个基本性质, 它是沟通函数极限与数列极限的桥梁. 利用这个原理, 可以将许多函数极限问题归结为数列极限问题去解决, 因此具有独特的重要性. 此外, 它的证明方法也是极限理论中的基本内容.

命题 4.2.3 (Heine 归结原理) 设 $a, A \in R$ . 存在极限 $\lim_{x \to a} f(x) = A$ 的充分必要条件是: 对满足条件 $x_{n} \neq a, \forall n \in N_{+}, \lim_{n \to \infty} x_{n} = a$ 的每个数列 $\{x_{n}\}$ , 都有 $\lim_{n \to \infty} f(x_{n}) = A$ .

证 先证必要性. 既然极限 $\lim_{x\to a}f(x) = A$ 存在, 因此 $\forall \varepsilon >0$ , 有 $\delta >0$ , 使得当 $0 < |x - a| < \delta$ 时, 成立 $|f(x) - A| < \varepsilon$ . 如果数列 $\{x_n\}$ 满足定理中所说的条件, 则对上述 $\delta >0$ , 存在 $N$ , 当 $n > N$ 时, 成立 $0 < |x_n - a| < \delta$ . 因此也就有

$$
\left| f (x _ {n}) - A \right| <   \varepsilon .
$$

这就证明了数列 $\{f(x_{n})\}$ 收敛于 A.

再证充分性. 这时对每个数列 $\{x_{n}\}$ , 只要它满足条件 $x_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} x_{n} = a$ , 数列 $\{f(x_{n})\}$ 就一定收敛于 $A$ . 用反证法. 如果结论 $\lim_{x \to a} f(x) = A$ 不真, 则由对偶法则 (见 §1.4) 知存在一个 $\varepsilon_{0} > 0$ , 对于每一个 $\delta > 0$ , 存在 $x$ 同时满足条件 $0 < |x - a| < \delta$ 和 $|f(x) - A| \geqslant \varepsilon_{0}$ .

取 $\delta_{n} = 1 / n,$ 将上述 $x$ 记为 $x_{n}$ ，并对于每一个 $n\in \mathbf{N}_+$ 都这样做，就得到数列 $\{x_{n}\}$ ，它满足条件

$$
0 <   | x _ {n} - a | <   \frac {1}{n}, | f (x _ {n}) - A | \geqslant \varepsilon_ {0} > 0.
$$

容易看出两点: (1) 这个数列 $\{x_{n}\}$ 满足定理中对它的全部要求; (2) 数列 $\{f(x_{n})\}$ 不会收敛于 A, 因此与定理的条件相矛盾. ☐

注 在数列极限中有一个与 Heine 归结原理相似的命题: 数列收敛的充分必要条件是其每个子列收敛于相同极限. 由于数列本身也是一个子列, 因此这个命题的充分性只是空话. 但其必要性的证明与归结原理的证明确有类似之处.

Heine 归结原理还有一个变形, 有时也很有用.

命题 4.2.4 (Heine 归结原理的推论) 函数 f 在点 a 存在极限 $\lim_{x\to a}f(x)$ 的充分必要条件是: 对满足条件 $x_{n}\neq a,\forall n\in N_{+},\lim_{n\to\infty}x_{n}=a$ 的每个数列 $\{x_{n}\}$ ，对应的数列 $\{f(x_{n})\}$ 一定收敛.

证 必要性不成问题, 讨论充分性. 为此只要证明, 在命题的条件下, 所得的每个数列 $\{f(x_{n})\}$ 都收敛于同一极限, 然后就可用 Heine 归结原理.

用反证法. 假设存在两个数列 $\{x_{n}\}$ 和 $\{y_{n}\}$ , 分别满足条件 $x_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} x_{n} = a$ 和 $y_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} y_{n} = a$ , 而且有

$$
\lim _ {n \rightarrow \infty} f (x _ {n}) = A _ {1}, \lim _ {n \rightarrow \infty} f (y _ {n}) = A _ {2}, A _ {1} \neq A _ {2}.
$$

这时我们可以构造一个新的数列 $\{z_{n}\}$ , 只要令 $z_{2k-1} = x_{k}, z_{2k} = y_{k} (k \in \mathbf{N}_{+})$ , 就可以知道它满足条件 $z_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} z_{n} = a$ , 但同时 $\{f(z_{n})\}$ 发散. 因为它的奇数项子列和偶数项子列收敛于不同极限. 这与本命题条件矛盾. □

函数极限的基本性质, 从极限的唯一性定理到四则运算法则, 一般地说至少可以用两个方法来证明. 第一个方法就是仿照数列极限理论中采用的方法, 第二个方法就是用 Heine 归结原理将问题转化为数列的相应问题去解决. 以下举一个例子来说明后一个方法.

例题 4.2.1（函数极限的除法运算法则）如果有 $\lim_{x\to a}f(x)=A,\lim_{x\to a}g(x)=B,$ 且 $B\neq0,$ 则成立

$$
\lim _ {x \to a} \frac {f (x)}{g (x)} = \frac {\lim _ {x \to a} f (x)}{\lim _ {x \to a} g (x)} = \frac {A}{B}.
$$

证 根据 Heine 原理的必要性, 对任意数列 $\{a_{n}\}$ , 只要满足条件 $a_{n} \neq a, \forall n \in \mathbf{N}_{+}$ 和 $\lim_{n \to \infty} a_{n} = a$ , 就有

$$
\lim _ {n \to \infty} f (a _ {n}) = A   \text {和}   \lim _ {n \to \infty} g (a _ {n}) = B.
$$

应用关于收敛数列的除法运算法则, 知道有

$$
\lim _ {n \rightarrow \infty} \frac {f (a _ {n})}{g (a _ {n})} = \frac {\lim _ {n \rightarrow \infty} f (a _ {n})}{\lim _ {n \rightarrow \infty} g (a _ {n})} = \frac {A}{B}.
$$

再根据 Heine 原理的充分性, 既然对满足上述条件的任意数列 $\{a_{n}\}$ 有

$$
\lim _ {n \to \infty} \frac {f (a _ {n})}{g (a _ {n})} = \frac {A}{B},
$$

那就得到

$$
\lim _ {x \to a} \frac {f (x)}{g (x)} = \frac {A}{B} \left(= \frac {\lim _ {x \to a} f (x)}{\lim _ {x \to a} g (x)}\right).
$$

与数列的情况类似, 可以从函数 $f$ 在点 $a$ 附近的性态本身判定它在点 $a$ 是否收敛. 这就是函数极限的 Cauchy 收敛准则. 在以下证明中我们可以看到 Heine 归结原理是如何起作用的.

命题 4.2.5（函数极限的 Cauchy 收敛准则）函数 f 在点 a 有极限的充分必要条件是：对每一个给定的 $\varepsilon > 0$ ，存在 $\delta > 0$ ，使得对于在 $O_{\delta}(a) - \{a\}$ 中的每一对点 $x', x''$ ，满足不等式 $|f(x') - f(x'')| < \varepsilon$ .

证 先证必要性. 由函数 $f$ 在点 $a$ 有极限知, 存在 $A$ , 使 $\lim_{x \to a} f(x) = A$ . 因此对每个给定的 $\varepsilon > 0$ , 存在 $\delta > 0$ , 当 $0 < |x - a| < \delta$ 时, 成立 $|f(x) - A| < \frac{1}{2}\varepsilon$ . 于是当 $x_1, x_2 \in O_\delta(a) - \{a\}$ 时, 就有

$$
| f (x _ {1}) - f (x _ {2}) | \leqslant | f (x _ {1}) - A | + | A - f (x _ {2}) | <   \frac {\varepsilon}{2} + \frac {\varepsilon}{2} = \varepsilon .
$$

再证充分性. 按照 Heine 归结原理的上述推论, 只要证明, 凡满足要求 $x_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} x_{n} = a$ 的数列 $\{x_{n}\}$ , 它对应的数列 $\{f(x_{n})\}$ 必定收敛.

对给定的 $\varepsilon > 0$ , 根据命题的条件, 有 $\delta > 0$ , 当 $x', x'' \in O_{\delta}(a) - \{a\}$ 时, 成立 $|f(x') - f(x'')| < \varepsilon$ .

由于 $x_{n} \neq a, \forall n \in \mathbf{N}_{+}, \lim_{n \to \infty} x_{n} = a,$ 所以对上述 $\delta > 0$ , 存在 $N$ , 当 $n > N$ 时, 成立 $0 < |x_{n} - a| < \delta$ . 因此当 $n, m > N$ 时, 就有 $x_{n}, x_{m} \in O_{\delta}(a) - \{a\}$ , 并成立

$$
\left| f (x _ {n}) - f (x _ {m}) \right| <   \varepsilon .
$$

这就是说数列 $\{f(x_{n})\}$ 是基本数列．从关于收敛数列的Cauchy收敛准则可见 $\{f(x_n)\}$ 收敛. □

注 可以看出, 必要性部分的证明与数列情况的证明完全一样 (参见命题 3.4.1). 但是充分性部分的证明则是利用 Heine 归结原理转化为数列问题, 然后利用收敛数列的 Cauchy 收敛准则, 因而比数列情况的证明容易得多.

## 4.2.3 思考题

1. 试就 $\lim_{x\to +\infty}f(x) = A$ 和 $\lim_{x\to a^{+}}f(x) = A$ 两类极限叙述极限的唯一性定理、局部有界性定理、局部保号性定理、比较定理、夹逼定理、Heine归结原理和Cauchy收敛准则.

2. 回答下列有关极限的四则运算法则方面的问题:

(1) 若 $\lim_{x\to a}[f(x) + g(x)]$ 存在, 则当 $x$ 趋于 $a$ 时在 $f(x)$ 和 $g(x)$ 的敛散性之间有何联系?

(2) 若 $\lim_{x\to a}f(x)$ 存在， $\lim_{x\to a}g(x)$ 不存在，则 $\lim_{x\to a}f(x)g(x)$ 是否存在？

3. 找出下列运算中的错误:

$$
\lim _ {x \to 2} \frac {x - 2}{\sin \frac {1}{x - 2}} = \frac {\lim _ {x \to 2} (x - 2)}{\lim _ {x \to 2} \sin \frac {1}{x - 2}} = \frac {0}{\lim _ {x \to 2} \sin \frac {1}{x - 2}} = 0; \tag {1}
$$

$$
\lim _ {x \rightarrow \infty} \frac {\sin x}{x} = \lim _ {x \rightarrow \infty} \frac {1}{x} \cdot \lim _ {x \rightarrow \infty} \sin x = 0 \cdot \lim _ {x \rightarrow \infty} \sin x = 0. \tag {2}
$$

4. 对于极限的加法运算法则作出两个证明: (1) 用函数极限定义; (2) 用 Heine 归结原理.

5. 对于各种类型的函数极限中 $A = \infty$ 但不是有确定符号的无穷大量的情况, 夹逼定理不成立. 为什么? 举出反例.

## 4.2.4 例题

例题 4.2.2 证明: 如果存在极限 $\lim_{x\to+\infty}(a\sin x+b\cos x)$ ，则只能是 a=b=0.

证1 记 $f(x) = a\sin x + b\cos x$ 。令 $x_{n} = n\pi, n \in \mathbf{N}_{+}$ ，有 $f(x_{n}) = b(-1)^{n}$ 。由归结原理， $\{f(x_{n})\}$ 收敛，因此 $b = 0$ 。再令 $x_{n}^{\prime} = \left(n + \frac{1}{2}\right)\pi, n \in \mathbf{N}_{+}$ ，就类似地可得到 $a = 0$ 。

证 2 用反证法. 若 a 和 b 不全为 0, 则可以将表达式改写如下:

$$
a \sin x + b \cos x = \sqrt {a ^ {2} + b ^ {2}} \sin (x + \varphi),
$$

其中 $\varphi$ 为某常数. 取 $x_{n} = 2n\pi + \frac{1}{2}\pi - \varphi$ 和 $x_{n}^{\prime} = 2n\pi - \varphi$ 分别代入, 并令 $n \to \infty$ , 由 Heine 归结原理知两个极限存在且相等, 由此得到 $\sqrt{a^2 + b^2} = 0$ , 引出矛盾. $\square$ 

例题4.2.3 证明函数 $\sin \frac{1}{x}$ 在 $x = 0$ 处不收敛.

证 1 (用 Heine 归结原理) 考虑两个均为无穷小量的数列

$$
x _ {n} = \frac {1}{2 n \pi + \frac {\pi}{2}}, y _ {n} = \frac {1}{2 n \pi}, n \in \mathbf {N} _ {+}.
$$

则有

$$
\sin {\frac {1}{x _ {n}}} = \sin \left(2 n \pi + {\frac {\pi}{2}}\right) = 1,   \sin {\frac {1}{y _ {n}}} = \sin 2 n \pi = 0,   n \in \mathbf {N} _ {+}.
$$

因此数列 $\left\{\sin\frac{1}{x_{n}}\right\}$ 和 $\left\{\sin\frac{1}{y_{n}}\right\}$ 分别收敛于 1 和 0. 根据 Heine 归结原理, 函数 $\sin\frac{1}{x}$ 在 x=0 不可能有极限. □

证 2 (用 Cauchy 收敛准则) 用反证法. 若函数 $\sin \frac{1}{x}$ 在 x = 0 处收敛, 则对 $\varepsilon = \frac{1}{2}$ , 存在 $\delta > 0$ , 使得当 $0 < |x'|, |x''| < \delta$ 时, 成立

$$
\left| \sin x ^ {\prime} - \sin x ^ {\prime \prime} \right| <   \frac {1}{2}.\tag{4.4}
$$

现在令

$$
x ^ {\prime} = \frac {1}{2 n \pi + \frac {\pi}{2}}, x ^ {\prime \prime} = \frac {1}{2 n \pi},
$$

其中取正整数 n 充分大, 必可使条件 $0 < |x'|, |x''| < \delta$ 成立. 这时总有 $\sin x' = 1, \sin x'' = 0$ 成立. 因此 (4.4) 不能成立, 引出矛盾. ☐

下一个例题是 Heine 归结原理在极限 $\lim_{x\to+\infty}f(x)=A$ 上的推广，并具有一些新的特点。它在今后学习级数与积分时有一定的用处。

例题 4.2.4 设 A 为有限数. 存在极限 $\lim_{x\to+\infty}f(x)=A$ 的充分必要条件是: 对每个严格单调增加的正无穷大数列 $\{x_{n}\}$ ，都有 $\lim_{n\to\infty}f(x_{n})=A$ .

证 先证必要性. 既然 $\lim_{x\to +\infty}f(x) = A$ 存在, 因此对 $\varepsilon >0$ , 有 $M > 0$ , 当 $x > M$ 时, 成立 $|f(x) - A| < \varepsilon$ . 若 $\{x_{n}\}$ 满足题设条件, 有 $\lim_{n\to \infty}x_n = +\infty$ , 则对于上述 $M > 0$ , 存在 $N$ , 当 $n > N$ 时, 成立 $x_{n} > M$ . 因此就有 $|f(x_{n}) - A| < \varepsilon$ . 这就证明了数列 $\{f(x_{n})\}$ 收敛于 $A$ (这时 $\{x_{n}\}$ 的严格单调增加不起作用).

再证充分性. 这时对每个满足题中所说条件的数列 $\{x_{n}\}$ (即 $\{x_{n}\}$ 为严格单调增加的正无穷大量), 成立 $\lim_{n\to \infty}f(x_n) = A$ . 用反证法. 如果结论 $\lim_{x\to a}f(x) = A$ 不真, 则由对偶法则 (见 §1.4) 知存在一个 $\varepsilon_0 > 0$ , 对于每一个 $M > 0$ , 存在 $x$ , 同时满足条件 $x > M$ 和 $|f(x) - A| \geqslant \varepsilon_0$ .

任取 $M_{1} \geqslant 1$ , 得到 $x_{1} > M_{1}$ , 满足 $|f(x_{1}) - A| \geqslant \varepsilon_{0}$ . 然后取 $M_{2} = \max \{2, x_{1}\}$ , 得到 $x_{2} > M_{2}$ , 满足 $|f(x_{2}) - A| \geqslant \varepsilon_{0}$ . 归纳地进行下去, 在有了 $x_{n}$ 后取 $M_{n+1} = \max \{n + 1, x_{n}\}$ , 得到 $x_{n+1} > M_{n+1}$ , 满足 $|f(x_{n+1}) - A| \geqslant \varepsilon_{0}$ . 可以看出, 这样取出的数列 $\{x_{n}\}$ 是严格单调增加的正无穷大量. 但对应的数列 $\{f(x_{n})\}$ 不会收敛于 $A$ . 因此与定理的条件相矛盾.

思考题 Heine 归结原理的推论在这里也成立. 试证之.

## 4.2.5 练习题

1. 证明:

(1) $\lim_{x\to +\infty}\frac{x^k}{a^x} = 0 (a > 1, k > 0)$ ; (2) $\lim_{x\to +\infty}\frac{\ln x}{x^k} = 0 (k > 0)$ ; (3) $\lim_{x\to \infty}\sqrt[x]{a} = 1 (a > 0)$ ; (4) $\lim_{x\to +\infty}\sqrt[x]{x} = 1$ . 

2. 求 $\lim_{y\to +\infty}\frac{\sqrt{1 + y^3}}{\sqrt{y^2 + y^3} + y}$ .

3. 求 $\lim_{x\to+\infty}\left(\frac{x^{2}-1}{x^{2}+1}\right)^{\frac{x-1}{x+2}}$ 

4. 求 $\lim_{x\to0}\frac{\sqrt[n]{1+x}-1}{x}$ ，其中 n 为正整数.

5. 设已知 $\lim_{x\to 0}\frac{f(x)}{x} = l, b\neq 0,$ 求 $\lim_{x\to 0}\frac{f(bx)}{x}$ .

6. 证明: $\lim_{x \to 0} \frac{\sqrt{1 + \sin x} - \sqrt{1 - \sin x}}{\sin x} = 1$ .

7. 证明: 在区间 $(a, +\infty)$ 上单调有界函数 $f$ 一定存在极限 $\lim_{x \to +\infty} f(x)$ .

8. 设 $f(x)$ 在区间 $(a, b)$ 上为单调增加函数，且存在一个数列 $\{x_n\} \subset (a, b)$ ，使得 $\lim_{n \to \infty} x_n = b, \lim_{n \to \infty} f(x_n) = A.$ 证明：

(1) $f$ 在区间 $(a, b)$ 上以 $A$ 为上界; (2) $\lim_{x \to b^{-}} f(x) = A$ .

9. 设 $\lim_{x\to +\infty}f(x) = A > 0$ ，证明：对每个 $c\in (0,A)$ ，存在 $M > 0$ ，当 $x > M$ 时，成立 $f(x) > c$ 

(这是对于极限类型为 $\lim_{x\to+\infty}f(x)$ 的保号性定理.)

10. 设 $f(a^{-}) < f(a^{+})$ . 证明: 存在 $\delta > 0$ , 当 $x \in (a - \delta, a)$ 和 $y \in (a, a + \delta)$ 时, 成立 $f(x) < f(y)$ .

11. 试用 Heine 归结原理证明单调函数的单侧极限存在定理.

(这里先要将 Heine 归结原理 (命题 4.2.3) 推广到单侧极限. 注意这时在条件中的数列可限于单调数列.)

## §4.3 两个重要极限

本节将以命题的形式证明两个重要极限. 在它们的基础上可以解决许多极限的计算问题, 特别是从这两个极限出发可以导出微分学中基本初等函数的所有求导法则 (见 [49]), 因此是进入微分学之前的必要准备.

4.3.1 $\lim_{x\to0}\frac{\sin x}{x}=1$ 

在所见的多数教科书 (例如 [14]) 中均利用三角形和扇形之间的面积关系得到初等不等式 (即命题 1.3.6)

$$
\sin x <   x <   \tan x, \forall x \in \left(0, \frac {\pi}{2}\right),
$$

然后用于证明本小节的极限. 在教材 [41, 42] 中对这个问题采取了不同的处理方法. 下面的证法见《数学的实践与认识》(1987) 第 4 期 79—81 页, 其中不需要上述不等式, 但需要例题 4.1.3 的结论 $\lim_{x \to 0} \sin x = 0$ . (那里的证 1 不需要用上述不等式.)

命题4.3.1（第一个重要极限） $\lim_{x\to 0}\frac{\sin x}{x} = 1.$ 

证 在单位圆内用圆心角 $2x (0 < x \leqslant \frac{\pi}{2})$ 分圆, 作出圆的一个内接多边形. 如果 $\pi / x = n$ 为正整数, 就得到内接正 $n$ 边形. 否则记

$$
n = \left[ \frac {\pi}{x} \right],
$$

就可以得到圆的一个内接 $n + 1$ 边形, 其中的 $n$ 条边所对应的圆心角都是 $2x$ . 将余下的一条边所对应的圆心角记为 $\theta_{x}$ , 可以计算出有

$$
0 <   \theta_ {x} = 2 \pi - 2 n x = 2 \pi - 2 x \left[ \frac {\pi}{x} \right] = 2 x \left(\frac {\pi}{x} - \left[ \frac {\pi}{x} \right]\right) <   2 x.
$$

又令 $\theta_{x} = 0$ 对应于 $\pi / x$ 为正整数的情况. 将上述内接 $n$ 或 $n + 1$ 边形的周长记为 $S_{x}$ , 就可得到

$$
\begin{array}{r l} S _ {x} & = 2 n \sin x + 2 \sin {\frac {\theta_ {x}}{2}} = 2 \left[ \frac {\pi}{x} \right] \sin x + 2 \sin {\frac {\theta_ {x}}{2}} \\ & = 2 \pi \cdot \frac {\sin x}{x} + 2 \left(\left[ \frac {\pi}{x} \right] - \frac {\pi}{x}\right) \sin x + 2 \sin {\frac {\theta_ {x}}{2}}. \end{array}
$$

利用 $\lim_{x\to 0}\sin x = 0$ （见例题4.1.3），可见有

$$
S _ {x} = 2 \pi \cdot \frac {\sin x}{x} + o (1) (x \rightarrow 0 ^ {+}).
$$

当 $x \to 0^{+}$ 时, 上述圆内接多边形的每条边长都趋于 0 , 因此就有 $\lim_{x \to 0^{+}} S_{x} = 2\pi$ . 这样就得到

$$
\lim _ {x \rightarrow 0 ^ {+}} \frac {\sin x}{x} = \lim _ {x \rightarrow 0} \left(\frac {S _ {x}}{2 \pi} + o (1)\right) = 1.
$$

由于 $\frac{\sin x}{x}$ 为偶函数, 因此就得到所要求证的结果.

注 函数 $\frac{\sin x}{x}$ 在理论和应用 (例如信号处理) 方面都很重要, 也是数学分析中的重要例子. 它在 $x > 0$ 的图像见图4.2(a)(又见图8.7(b)). 在例题8.5.2中研究了它的单调性. 在 $x = 0$ 处补充定义函数值为1后, 可以证明函数在该点无限次可微, 它的Maclaurin(麦克劳林)公式见例题7.2.3(参见例题8.1.9的注解3). 它在积分学中还会一再出现(如例题11.3.1, 11.3.2, 12.3.6等).

4.3.2 $\lim_{x\to0}(1+x)^{\frac{1}{x}}=e$ 

这是 §2.5 的极限 $\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^{n}=e$ 的重要推广.

命题 4.3.2 (第二个重要极限) $\lim_{x\to0}(1+x)^{\frac{1}{x}}=e.$ 

证 先考虑 $x \to 0^{+}$ 时的单侧极限 (如图4.1).

对 $x \in (0,1)$ , 可有 $n \in \mathbf{N}_{+}$ , 使得

$$
\frac {1}{n + 1} <   x \leqslant \frac {1}{n}
$$

成立. 实际上将这个不等式改写一下, 即是

$$
n \leqslant {\frac {1}{x}} <   n + 1,
$$

可见 n 是由以下公式确定的:

$$
n = \left[ \frac {1}{x} \right].\tag{4.5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4de3daf1-9060-438b-922e-b08a2393aad1/99ab4782ac7319a4673b197ab68e0f6ec48ecb90f90c032b5deeaebdb0394161.jpg)



图4.1


这时就可以得到估计

$$
\left(1 + \frac {1}{n + 1}\right) ^ {n} <   (1 + x) ^ {\frac {1}{x}} <   \left(1 + \frac {1}{n}\right) ^ {n + 1},\tag{4.6}
$$

其中的 n 由公式 (4.5) 与 x 相联系. 若将 n 看成独立的自变量, 就有

$$
\lim _ {n \to \infty} \left(1 + {\frac {1}{n + 1}}\right) ^ {n} = \mathrm{e} \quad {\text {和}} \quad \lim _ {n \to \infty} \left(1 + {\frac {1}{n}}\right) ^ {n + 1} = \mathrm{e}
$$

成立. 因此, $\forall \varepsilon > 0$ , 存在 $N$ , 当 $n > N$ 时, 同时成立

$$
\Big | \Big (1 + {\frac {1}{n + 1}} \Big) ^ {n} - \mathrm{e} \Big | <   \varepsilon \quad {\text {和}} \quad \Big | \Big (1 + {\frac {1}{n}} \Big) ^ {n + 1} - \mathrm{e} \Big | <   \varepsilon .\tag{4.7}
$$

利用 (4.5), 可见只要有 $0 < x < \delta = \frac{1}{N + 1}$ , 即 $\frac{1}{x} > N + 1$ , 就可以使

$$
n = \left[ \frac {1}{x} \right] > \frac {1}{x} - 1 > N
$$

成立, 从而由 (4.6) 和 (4.7) 得到 $\left|(1 + x)^{\frac{1}{x}} - \mathrm{e}\right| < \varepsilon$ . 这样就证明了

$$
\lim _ {x \rightarrow 0 ^ {+}} (1 + x) ^ {\frac {1}{x}} = \mathrm{e}.
$$

为了讨论 $x \to 0^{-}$ , 可以取 $z = -x$ , 则当 $x \to 0^{-}$ 时 $z \to 0^{+}$ , 因此

$$
\begin{array}{r l} \lim _ {x \to 0 ^ {-}} (1 + x) ^ {\frac {1}{x}} & = \lim _ {z \to 0 ^ {+}} (1 - z) ^ {- \frac {1}{z}} = \lim _ {z \to 0 ^ {+}} \left(\frac {1}{1 - z}\right) ^ {\frac {1}{z}} \\ & = \lim _ {z \to 0 ^ {+}} \left(1 + \frac {z}{1 - z}\right) ^ {\frac {1}{z}} = \lim _ {z \to 0 ^ {+}} \left(1 + \frac {z}{1 - z}\right) ^ {\frac {1 - z}{z}} = \mathrm{e}. \end{array}
$$

合并两个单侧极限就得到所求证的结果.

注1 对(4.6)不加分析就直接用夹逼定理是不妥当的. 由于该式中间是函数, 当然不可能用数列极限的夹逼定理. 如果用函数极限的夹逼定理, 则(4.6)的两侧又是什么样的函数? 为什么它们的极限都等于e?

实际上该式两侧并非是数列(的通项)，而是 $x$ 的函数．它们在每个区间 $[k, k + 1) (k \in \mathbf{N}_{+})$ 上取常值. 若将它们分别记为 $f$ 和 $g$ , 则先要证明当 $x \to 0^{+}$ 时它们的极限均为 $\mathrm{e}$ , 在这以后才可以用函数极限的夹逼定理. 读者可以将这个做法与上面从单侧极限的 $\varepsilon - \delta$ 定义出发的证明作比较.

注2 将函数 $(1 + x)^{1 / x}$ 在 $x = 0$ 处补充定义使它连续后, 就可以证明延拓后的函数在原点无限次可微. 它的Maclaurin公式计算见例题7.2.4.

由以上两个重要极限可以导出以下几个基本结果. 由于一般教科书中都有它们的证明, 这里不再重复. 要求读者能记得, 会证明.

(1) $\lim_{x\to 0}\frac{\tan x}{x} = 1;$ 

(3) $\lim_{x\to 0}\frac{\ln(1 + x)}{x} = 1;$ 

(2) $\lim_{x\to 0}\frac{1 - \cos x}{x^2} = \frac{1}{2};$ 

$$
\lim _ {x \to 0} \frac {a ^ {x} - 1}{x} = \ln a (a > 0). \tag {4}
$$

## 4.3.3 例题

下面的 3 个例题表明, 利用复合函数的极限方法, 即变量代换法 (参见命题 4.1.1), 可以扩大以上两个重要极限的适用范围 (证明从略).

例题 4.3.1 若 $\lim_{t\to t_{0}}g(t)=0,$ 且当 $t\neq t_{0}$ 时 $g(t)\neq0,$ 则 $\lim_{t\to t_{0}}\frac{\sin g(t)}{g(t)}=1.$ 

例题4.3.2 若 $\lim_{t\to t_0}g(t) = +\infty (-\infty)$ ，则 $\lim_{t\to t_0}\left(1 + \frac{1}{g(t)}\right)^{g(t)} = \mathrm{e}.$ 

例题 4.3.3 设 $\lim_{t\to t_{0}}g(t)=0,$ 且 $t\neq t_{0}$ 时 $g(t)\neq0,$ 则 $\lim_{t\to t_{0}}\frac{\ln(1+g(t))}{g(t)}=1.$ 

例题4.3.4 求 $\lim_{x\to 0}(\cos x)^{\frac{1}{x^2}}$ 

解 首先看出这个问题是 $1^{\infty}$ 型的不定式, 因此可以试用上述第二个重要极限. 改写原问题如下:

$$
\begin{array}{r l} \lim _ {x \to 0} (\cos x) ^ {\frac {1}{x ^ {2}}} & = \lim _ {x \to 0} \left(1 - 2 \sin^ {2} \frac {x}{2}\right) ^ {\frac {1}{x ^ {2}}} \\ & = \lim _ {x \to 0} \left(1 - 2 \sin^ {2} \frac {x}{2}\right) ^ {\frac {1}{- 2 \sin^ {2} \frac {x}{2}} \cdot \frac {- 2 \sin^ {2} \frac {x}{2}}{x ^ {2}}}. \end{array}
$$

由于 $\lim_{x\to 0}\frac{2\sin^2{\frac{x}{2}}}{x^2} = \lim_{x\to 0}\left(\frac{\sin{\frac{x}{2}}}{\frac{x}{2}}\right)^2\cdot \frac{1}{2} = \frac{1}{2},$ 因此答案是 $\mathrm{e}^{-\frac{1}{2}}$ 

例题4.3.5 求 $\lim_{x\to \infty}\left(\sin \frac{1}{x} +\cos \frac{1}{x}\right)^x.$ 

解 与上一题类似, 可将原式改写如下:

$$
\begin{array}{l}\lim _ {x \rightarrow \infty} \left[ 1 + \left(\sin \frac {1}{x} + \cos \frac {1}{x} - 1\right)\right] ^ {x}\\= \lim _ {x \rightarrow \infty} \left[ 1 + \left(\sin \frac {1}{x} + \cos \frac {1}{x} - 1\right)\right] ^ {\frac {x}{\sin \frac {1}{x} + \cos \frac {1}{x} - 1} \cdot (\sin \frac {1}{x} + \cos \frac {1}{x} - 1)},\end{array}
$$

可见只要计算出

$$
\lim _ {x \to \infty} x \left(\sin {\frac {1}{x}} + \cos {\frac {1}{x}} - 1\right) = \lim _ {x \to \infty} \left({\frac {\sin {\frac {1}{x}}}{\frac {1}{x}}} - {\frac {2 \sin^ {2} {\frac {1}{2 x}}}{\frac {1}{2 x} \cdot 2}}\right) = 1,
$$

即知原问题的答案为 e.

注 以上两个例题的求解在写法上可以利用 $u^v = \mathrm{e}^{v\ln u}$ 和例题4.3.3改写如下(只写出后一例题):

$$
\begin{array}{r l} \lim _ {x \to \infty} x \ln \left(\sin \frac {1}{x} + \cos \frac {1}{x}\right) & = \lim _ {x \to \infty} x \ln \left[ 1 + \left(\sin \frac {1}{x} + \cos \frac {1}{x} - 1\right) \right] \\ & = \lim _ {x \to \infty} x \left(\sin \frac {1}{x} + \cos \frac {1}{x} - 1\right), \end{array}
$$

以下同上. 又如果一开始作代换 $y = 1 / x$ ，则在书写上更方便一些.

## 4.3.4 练习题

1. 计算下列极限:

(1) $\lim_{x\to +\infty}\left(\frac{2}{\pi}\arctan x\right)^x;$ (2) $\lim_{x\to \frac{\pi}{2}^{-}}(\sin x)^{\tan x};$ (3) $\lim_{x\to \infty}\left(\frac{x^2 - 1}{x^2 + 1}\right)^{x^2};$ (4) $\lim_{x\to \frac{\pi}{2}^{-}}(\cos x)^{\frac{\pi}{2} -x};$ (5) $\lim_{x\to 0}\frac{\sin 2x - 2\sin x}{x^3};$ (6) $\lim_{x\to 1}(1 - x)\tan \left(\frac{\pi}{2} x\right).$ 

2. 注意下列两个“不等式”并求出正确值：
(1) $\lim_{x\to+\infty}\frac{\sin x}{x}\neq1;$ (2) $\lim_{x\to+\infty}(1+x)^{\frac{1}{x}}\neq\mathrm{e}.$ 

3. 设 $a > 0, b > 0$ , 求极限 $\lim_{n \to \infty} \left( \frac{\sqrt[n]{a} + \sqrt[n]{b}}{2} \right)^n$ .

(本题是数列极限问题, 但现在可以用函数极限知识来解决.)

4. 设 $a_{1}, \cdots, a_{n}$ 为正数, $n \geqslant 2$ , $f(x) = \left( \frac{a_{1}^{x} + a_{2}^{x} + \cdots + a_{n}^{x}}{n} \right)^{\frac{1}{x}}$ , 求 $\lim_{x \to 0} f(x)$ .

5. 计算极限 $\lim_{n\to \infty}\prod_{k = 1}^{n}\cos \frac{x}{2^k}$ ，并证明Viète(韦达)公式

$$
\frac {\pi}{2} = \frac {1}{\sqrt {\frac {1}{2}} \cdot \sqrt {\frac {1}{2} + \frac {1}{2} \sqrt {\frac {1}{2}}} \cdot \sqrt {\frac {1}{2} + \frac {1}{2} \sqrt {\frac {1}{2} + \frac {1}{2} \sqrt {\frac {1}{2}}}} \cdot \cdots}
$$

(这是数学家 Viète 在 1593 年发表的. 它是数学史上第一次用无穷乘积来表示一个数, 同时也是对于圆周率 $\pi$ 的认识上的重大突破.)

## §4.4 无穷小量、有界量、无穷大量和阶的比较

从数列开始, 就已接触到无穷小量、有界量和无穷大量的概念. 在本节将介绍如何将它们用于函数极限计算, 其中特别是等价量代换法将成为计算函数极限的基本方法之一.

## 4.4.1 记号 $o, O$ 与 $\sim$

设 $f(x)$ 和 $g(x)$ 在点 $a$ 的某个去心邻域 $O(a) - \{a\}$ 上定义, 并且 $g(x) \neq 0$ . (对于 $a$ 为无穷大量的情况和单侧极限等情况可类推.)

1. $f(x) = o(g(x))(x\to a)$ 的定义是： $\lim_{x\to a}\frac{f(x)}{g(x)} = 0,$ 如果当 $x\to a$ 时 $f(x)$ 和 $g(x)$ 都是无穷小量，则称当 $x\to a$ 时 $f(x)$ 是比 $g(x)$ 更高阶的无穷小量

2. $f(x) = o(1)(x \to a)$ 的定义是: $\lim_{x \to a} f(x) = 0$ . 因此与数列情况一样, 记号 $o(1)$ 用于表示关于某个极限过程的无穷小量.

3. $f(x) = O(g(x))(x\to a)$ 的定义是：存在常数 $M > 0$ ，使得 $\left|\frac{f(x)}{g(x)}\right| \leqslant M$ 在 $a$ 的某个去心邻域上成立,因此成立不等式 $|f(x)|\leqslant M|g(x)|$ 

4. $f(x) = O(1) (x \to a)$ 的定义是: 存在 $a$ 的某个去心邻域, 使 $f$ 在其上有界. 这与数列情况不太一样, 在那里 $O(1)$ 就是有界量, 而在这里记号 $O(1) (x \to a)$ 用于表示在点 $a$ 的某个去心邻域上的一个有界量, 因此也称为局部有界量.

5. 如果有 $\lim_{x\to a}\frac{f(x)}{g(x)} = A\neq 0$ ，而且当 $x\to a$ 时 $f$ 和 $g$ 都是无穷小量(无穷大量)，则称 $f$ 和 $g$ 是同阶无穷小量(无穷大量).

6. $f(x) \sim g(x) (x \to a)$ 的定义是: $\lim_{x \to a} \frac{f(x)}{g(x)} = 1$ , 如果当 $x \to a$ 时 $f$ 和 $g$ 是无穷小量 (无穷大量), 则称 $f$ 和 $g$ 是等价无穷小量 (无穷大量). 今后我们还将含有 $o, O$ 和 $\sim$ 的等式称为渐近等式, 并将 $f(x) \sim g(x) (x \to a)$ 说成是函数 $f(x)$ 和 $g(x)$ 当 $x \to a$ 时具有相同的渐近性态. 特别是当 $x \to \infty$ (包括数列极限中的 $n \to \infty$ ) 时这种表述在数学中用得很广泛.

7. 以上所说有关阶的概念还可以量化, 其方法是对有关的极限过程取一类简单的无穷小量 (或无穷大量) 作为标准. 下面只举出常用的情况. 设已知 $f(x) = o(1) (x \to a)$ . 若有常数 $\alpha > 0$ , 使得 $\lim_{x \to a} \left| \frac{f(x)}{(x - a)^{\alpha}} \right| = l > 0$ , 则称 $f(x)$ 在 $x \to a$ 时是 $\alpha$ 阶的无穷小量.

8. 在使用这些记号时, 必需写出有关的极限过程. 除了对数列可以不写出 $(n \to \infty)$ 外, 其他极限过程均不可省略 (除非另加说明). 例如以下关于对数函数的三个最基本的渐近性质当然是与相应的极限过程不可分开的:

$$
\ln x = o (1) (x \rightarrow 1), \quad \ln x = o (x) (x \rightarrow + \infty), \quad \ln x = o \left(\frac {1}{x}\right) (x \rightarrow 0 ^ {+}).
$$

下面是几个重要的极限关系(其中题(7)见下面的例题4.4.4):
(1) $e^{x} - 1 \sim x (x \to 0)$ ; (2) $\sin x \sim x (x \to 0)$ ;
(3) $\ln(1+x) \sim x (x \to 0)$ ; (4) $1 - \cos x \sim \frac{1}{2} x^{2} (x \to 0)$ ;
(5) $\ln x = o(x^{-\alpha}) (x \to 0^{+}) (\alpha > 0)$ ; (6) $x^{k} = o(a^{x}) (x \to +\infty) (a > 1)$ ;
(7) $(1+x)^{\alpha}-1\sim\alpha x(x\rightarrow0)$ ; (8) $\arctan x\sim x(x\rightarrow0).$ 

上面引进的一些记号, 即 $o, O, \sim$ 和关于阶与等价的概念在处理函数极限时是很有用的工具, 但这里对初学者来说同时也有许多陷阱, 很容易出错.

在使用 $o, O, \sim$ 时, 除了必须写明极限过程之外, 还要知道以下两点:

首先, 含有 o, O 的等式, 即渐近等式, 与普通的等式大不一样. 它们并不是量的相等, 而是代表在极限过程中的关系.

其次, 它们一般只能从左往右读, 而不能从右往左读. 例如 $o(1) = O(1)(x \to a)$ 的含义是: 无穷小量必是局部有界量. 而 $O(1) = o(1)(x \to a)$ 是错的, 因为局部有界量当然未必是无穷小量.

注 含有 $o, O$ 的等式, 是大部分学生理解的难点. 从教学中, 我们发现从集合论的角度, 可以向学生说清楚这种等式的真正含义. 例如, 在 $x \to 0$ 时, 将 $o(x)$ 理解为比 $x$ 高阶的无穷小量组成的集合, 于是等式 $f(x) = o(x)$ 中等号 = 所实际表达的意思是 $\in$ . 凡是只有右边含有 $o, O$ 的等式都可以这样理解. 而两边都含有 $o, O$ 的等式中的等号 = 实际表达的意思是 $\subset$ . 因此, 它们只能从左往右读.

例题 4.4.1 证明 $O(x^{2}) = o(x) (x \to 0)$ .

证 根据题意, 设 $\frac{f(x)}{x^2}$ 在某个 $O(0) - \{0\}$ 上有界, 即存在 $M > 0$ 和 $\delta > 0$ , 当 $0 < |x| < \delta$ 时, 成立 $|f(x)| \leqslant Mx^2$ . 于是, 当 $0 < |x| < \delta$ 时, 有

$$
\left| \frac {f (x)}{x} \right| \leqslant \left| \frac {M x ^ {2}}{x} \right| = | M x |,
$$

因此, 令 $x \to 0$ 时, 上式的极限为 0. 这就是 $f(x) = o(x) (x \to 0)$ . 这样我们就证明了当 $f(x) = O(x^2) (x \to 0)$ 时, 一定就有 $f(x) = o(x) (x \to 0)$ .

例题 4.4.2 证明 $\cos x = 1 + O(x^{2}) (x \to 0)$ 成立.

证 已知有 $\lim_{x\to 0}\frac{1 - \cos x}{x^2} = \frac{1}{2}$ ，因此存在 $\delta >0$ ，使得当 $0 < |x| < \delta$ 时， $\frac{\cos x - 1}{x^2}$ 有界.这就是说 $\cos x - 1 = O(x^2)(x\to 0)$ .再移项即得. □

关于无穷小量的阶可以从前面的许多例子得到理解. 例如, 当 $x \to 0$ 时, $\sin x$ 是一阶无穷小量, $1 - \cos x$ 是二阶无穷小量, $\sin x - \tan x$ 是三阶无穷小量等 (后者见例题4.4.5). 又由此可见 $\sin x = O(x)$ , $1 - \cos x = O(x^2)$ , $\sin x - \tan x = O(x^3) (x \to 0)$ , 但并不能从这三个公式推出关于阶的结论.

应当指出, 无穷小量 (以及无穷大量) 不一定有阶.

例题 4.4.3 证明: 当 $x \to 0$ 时无穷小量 $x \sin \frac{1}{x}$ 没有阶.

证 这只要观察

$$
\lim _ {x \rightarrow 0} \frac {x \sin \frac {1}{x}}{x ^ {\alpha}}
$$

即可. 如取 $\alpha \geqslant 1$ , 则上述极限不存在; 但若取 $\alpha < 1$ , 则上述极限为 0, 因此没有阶. 但是也可以说它的阶比任何 $\alpha < 1$ 高.

当然有 $x\sin \frac{1}{x} = O(x), x\sin \frac{1}{x} = o(x^{\alpha}), \forall \alpha < 1 (x \to 0)$ .

最后再举出两个用等价记号～刻画的重要渐近公式.

1. 关于阶乘的 Stirling 公式:

$$
n! \sim \left(\frac {n}{\mathrm{e}}\right) ^ {n} \sqrt {2 \pi n}.
$$

它的证明将在积分学中给出 (命题 11.4.2).

2. 如果将不超过 $x$ 的素数个数记为 $\pi(x)$ , 则有素数定理:

$$
\pi (x) \sim \frac {x}{\ln x} (x \rightarrow + \infty).
$$

素数定理是数论中的重要定理. Legendre (勒让德) 和 Gauss 通过实验提出了猜测. Hadamard (阿达马) 和 de la Vallée-Poussin (德拉瓦莱普森) 于 1896 年分别独立地给出了素数定理的第一个证明. 1949 年, Selberg (塞尔伯格) 和 Erdős (爱尔迪希) 又给出了它的初等证明. (例如可参考华罗庚的《数论导引》.)

## 4.4.2 思考题

1. $10^{-10000}, \mathrm{e}^{-10^{10}}, x, \sin x$ 是否是无穷小量？ $10^{10000}, \mathrm{e}^{10^{10}}, x^n, a^x (a > 1)$ 是否是无穷大量？

(a) $y = \frac{\sin x}{x}$ 

2. 确定下列极限是否存在, 若存在, 等于什么? (观察图 4.2 中的图像.)

(1) $\lim_{x\to 0}\frac{\sin x}{x};$ 

(2) $\lim_{x\to +\infty}\frac{\sin x}{x};$ 

(3) $\lim_{x\to 0}x\sin {\frac{1}{x}};$ 

(4) $\lim_{x\to \infty}x\sin {\frac{1}{x}};$ 

(5) $\lim_{x\to 0}x\sin x;$ 

(6) $\lim_{x\to \infty}x\sin x;$ 

(7) $\lim_{x\to 0}\frac{1}{x}\sin \frac{1}{x};$ 

(8) $\lim_{x\to \infty}\frac{1}{x}\sin \frac{1}{x}.$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4de3daf1-9060-438b-922e-b08a2393aad1/896f837795baa5b696d213dbc022a6acd3491d81915c2a545ebd9eb8fa08f47a.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4de3daf1-9060-438b-922e-b08a2393aad1/d98ea412144667678aa06e8c95d9d9e05bcde9f4f5b5a41c05a16f0a251614cd.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4de3daf1-9060-438b-922e-b08a2393aad1/609be124f81d3353d26a83080312ea59e401e646cdb9ad6a947a17e192993851.jpg)


$$
y = x \sin \frac {1}{x}
$$


(c) $y = x\sin x$


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/4de3daf1-9060-438b-922e-b08a2393aad1/b7c6d1b08d80d816337c9b67907b9316c4f1e14b89e6434b6308b961679e083d.jpg)



图4.2



(d) $y = \frac{1}{x} \sin \frac{1}{x}$


3. 当 $x \to 0$ 时, 下列等式中哪些可以成立:

(1) $o(1) = O(1)$ ; 

(3) $o(x^{2})=o(x);$ 

(2) $O(1) = o(1)$ ; 

(4) $O(x^{2}) = o(x)$ ; 

(5) $x \cdot o(x^{2}) = o(x^{3});$ 

(6) $\frac{O(x^2)}{x} = o(x)$ . 

4. 作出 $y = \mathrm{e}^{\frac{1}{x}}$ 的图形, 观察: $\mathrm{e}^{\frac{1}{x}} \to +\infty (x \to 0^{+})$ 和 $\mathrm{e}^{\frac{1}{x}} = o(1)(x \to 0^{-})$ .

## 4.4.3 等价量代换法

在求极限的计算中, 等价量代换法是基本方法之一.

例题4.4.4设 $\alpha \neq 0$ 求 $\lim_{x\to 0}\frac{(1 + x)^{\alpha} - 1}{x}$ 

解 令 $y = (1 + x)^{\alpha} - 1$ ，则当 $x \to 0$ 时 $y \to 0$ . 利用 $1 + y = (1 + x)^{\alpha}$ ，有 $\ln (1 + y) = \alpha \ln (1 + x)$ . 计算如下：

$$
\lim _ {x \rightarrow 0} \frac {(1 + x) ^ {\alpha} - 1}{x} = \lim _ {x \rightarrow 0} \frac {(1 + x) ^ {\alpha} - 1}{\ln (1 + x)} = \lim _ {y \rightarrow 0} \frac {\alpha y}{\ln (1 + y)} = \lim _ {y \rightarrow 0} \frac {\alpha y}{y} = \alpha .
$$

注1 本例是变量代换和等价量代换两个方法结合的典型例子。在以上计算中先利用 $\ln (1 + x) \sim x (x \to 0)$ ，将分母的 $x$ 换为 $\ln (1 + x)$ （将简单换成复杂），后来又利用 $\ln (1 + y) \sim y (y \to 0)$ ，将 $\ln (1 + y)$ 换为 $y$ 。

注2 在本例中的指数 $\alpha$ 可以是不为0的任何实数. 而在过去我们只能用二项式展开的方法处理 $\alpha$ 为有理数的情况. 今后可以直接应用本题的一般结论.

例题4.4.5 求极限 $\lim_{x\to 0}\frac{\sin x - \tan x}{x^3}.$ 

解 1 将表达式进行分解, 利用已知极限即可如下计算:

$$
\lim _ {x \rightarrow 0} \frac {\sin x - \tan x}{x ^ {3}} = \lim _ {x \rightarrow 0} \left(\frac {\sin x}{x} \cdot \frac {1}{\cos x} \cdot \frac {\cos x - 1}{x ^ {2}}\right) = - \frac {1}{2}.
$$

解2 若用等价量代换法, 则可写出 $\frac{\sin x - \tan x}{x^3} = \frac{\sin x (\cos x - 1)}{x^3 \cos x}$ , 然后利用当 $x \to 0$ 时的等价关系 $\sin x \sim x$ , $1 - \cos x \sim \frac{1}{2} x^2$ 和 $\cos x \sim 1$ , 将上面的表达式中的 $\sin x$ 换为 $x$ , $\cos x$ 换为 $1$ , $\cos x - 1$ 换为 $-\frac{1}{2} x^2$ , 就有

$$
\lim _ {x \rightarrow 0} \frac {\sin x - \tan x}{x ^ {3}} = \lim _ {x \rightarrow 0} \frac {\sin x (\cos x - 1)}{x ^ {3} \cos x} = \lim _ {x \rightarrow 0} \frac {x \left(- \frac {1}{2} x ^ {2}\right)}{x ^ {3}} = - \frac {1}{2}.
$$

小结 一般的等价量代换法可以叙述如下:

设要求极限 $\lim_{x\to a}uv,$ 其中 $u,v$ 是 $x$ 的函数.如已知 $u\sim u_1(x\to a)$ ，则可以将上式中的因子 $u$ 用 $u_{1}$ 代替，写成公式就是

$$
\lim _ {x \rightarrow a} u v = \lim _ {x \rightarrow a} \left(\frac {u}{u _ {1}}\right) u _ {1} v = \lim _ {x \rightarrow a} u _ {1} v,\tag{4.8}
$$

这就是说可以将 u 换成 $u_{1}$ (其中假定在 a 邻近 $u_{1} \neq 0$ ). 当然这个做法可以反复使用, 例如在例题 4.4.5 的解 2 中就代换了三个因子, 使函数的表达式大大简化.

在这里要强调指出: 在对于形式为 $u + v$ 或 $(u + v)w$ 的函数求极限时, 即使有 $u \sim u_{1}$ 也不能将 u 随便换成 $u_{1}$ . 例如在例题 4.4.5 中, 以下做法都是错误的:

1. 利用 $\sin x \sim \tan x (x \to 0)$ 得到 $\lim_{x \to 0} \frac{\sin x - \tan x}{x^3} = \lim_{x \to 0} \frac{\sin x - \sin x}{x^3} = 0.$ 

2. 利用 $\sin x \sim x (x \to 0)$ 得到 $\lim_{x \to 0} \frac{\sin x - \tan x}{x^3} = \lim_{x \to 0} \frac{x - \tan x}{x^3} = -\frac{1}{3}$ .

3. 利用 $\tan x \sim x (x \to 0)$ 得到 $\lim_{x \to 0} \frac{\sin x - \tan x}{x^3} = \lim_{x \to 0} \frac{\sin x - x}{x^3} = -\frac{1}{6}$ .

这三个例子中的最后一步都没有错(其中后两个数值 $-\frac{1}{3}$ 和 $-\frac{1}{6}$ 的计算在学了微分学后就可以得到), 但答案都是错的. 其原因是第一步的代换没有根据.

什么条件下才可以在和式中用等价量代换？

假定考虑的极限过程为 $x \rightarrow a$ ，则一个容易证明的充分条件就是

$$
u \sim u _ {1}, v \sim v _ {1}, \lim _ {x \to a} u + v \neq 0 \implies u + v \sim u _ {1} + v _ {1}.\tag{4.9}
$$

它清楚地表明, 在和式中用等价量代换出错的根源就在于当时起作用的是更高阶的无穷小量. 关于 (4.9) 的证明从略. 这方面有许多研究, 感兴趣的读者可以参考 [57] 以及其中所引的文献.

实际上等价量代换 (在无穷小量的情况) 的本质就是用较为简单的无穷小量代替比较复杂的无穷小量, 而将两个无穷小量之间的差略去不计. 当然, 这时它们的差必须是更高阶的无穷小量. 一种安全的做法就是保留高阶无穷小量, 而不是简单的代换. 从下一个例题中可以看到这是如何进行的.

例题4.4.6设 $f(x) = \frac{m}{1 - x^m} -\frac{n}{1 - x^n},m,n\in \mathbf{N}_+$ ，求极限 $\lim_{x\to 1}f(x).$ 

解 令 $y = x - 1$ ，则 $x \to 1 \Longleftrightarrow y \to 0$ . 计算如下：

$$
\begin{array}{r l}f (x)&= f (1 + y) = \frac {m}{1 - (1 + y) ^ {m}} - \frac {n}{1 - (1 + y) ^ {n}}\\&= \frac {m [ 1 - (1 + y) ^ {n} ] - n [ 1 - (1 + y) ^ {m} ]}{[ (1 + y) ^ {m} - 1 ] \cdot [ (1 + y) ^ {n} - 1 ]}\\&= \frac {n \left[ m y + \frac {m (m - 1)}{2} y ^ {2} + o (y ^ {2}) \right] - m \left[ n y + \frac {n (n - 1)}{2} y ^ {2} + o (y ^ {2}) \right]}{n m (y + o (y)) \cdot (y + o (y))}\\&= \frac {\frac {m n}{2} (m - n) y ^ {2} + o (y ^ {2})}{m n (y ^ {2} + o (y ^ {2}))} = \frac {1}{2} (m - n) + o (1) (y \rightarrow 0),\end{array}
$$

其中的 $o(y^{2}), o(y), o(1)$ 均是对 $y \to 0$ 而言的, 可见极限为 $\frac{1}{2}(m - n)$ .

注 以上所用的方法已经超出了等价量代换法的思想. 一般称

$$
(1 + y) ^ {n} = 1 + n y + o (y) (y \rightarrow 0)
$$

或

$$
(1 + y) ^ {n} = 1 + n y + \frac {n (n - 1)}{2} + o (y ^ {2}) (y \rightarrow 0)
$$

中的 $o(y)$ 或 $o(y^2)$ 为余项. 在上一个例题中出现的各个余项是根据需要而分别选取的. 在今后学了微分学中带 Peano (佩亚诺) 余项的 Taylor 公式后 (见命题 7.2.2), 可以将这个例题中的方法发展成更一般的方法 (见 §8.1 “函数极限的计算”).

## 4.4.4 练习题

1. 确定下列无穷小量的阶:

(1) $\sqrt{1+\tan x}-\sqrt{1-\tan x}\quad(x\to0);$ (2) $\ln x-\ln a\quad(x\to a),a>0;$ 

(3) $a^{x}-1(x\to0)$ ，其中a>0;

(4) $a^{x^2} - b^{x^2}(x\to 0)$ ，其中 $a,b > 0$ 

$$
\ln (x + \cos \frac {\pi}{2} x) (x \rightarrow 1)
$$

(6) $\ln x \ln(x - 1) (x \to 1^{+})$ . 

2. 设存在极限 $\lim_{x\to 0}\frac{f(x)}{x}$ ，又有 $f(x) - f\left(\frac{x}{2}\right) = o(x)(x\to 0)$ ，证明： $f(x) = o(x)(x\to 0).$ 

3. 与数列中的几个常见的无穷大量之间的关系 $\ln n \ll n^{\varepsilon} \ll a^{n} \ll n! \ll n^{n}$ ( $a > 1, \varepsilon > 0$ ) 相类似, 证明当 $x \to +\infty$ 时, 有

$$
\ln x \ll x ^ {\varepsilon} \ll a ^ {x} \ll x ^ {x} (a > 1, \varepsilon > 0),
$$

其中 $u \ll v$ 的定义是 $\lim \frac{u}{v} = 0$ .

4. 用等价量代换方法计算下列极限:

(1) $\lim_{x\to 0}\frac{\ln(\sin^2x + \mathrm{e}^x) - x}{\ln(x^2 + \mathrm{e}^{2x}) - 2x};$ 

(2) $\lim_{x\to +\infty}(x + 1)[\ln (x^2 +x) - 2\ln (x + 1)];$ 

(3) $\lim_{x\to 0}\frac{\sqrt{1 + x} - \sqrt[6]{1 + x}}{\sqrt[3]{1 + x} - 1};$ 

(4) $\lim_{x\to 0}\frac{\sqrt{\cos x} - \sqrt[3]{\cos x}}{\sin^2x};$ 

(5) $\lim_{x\to 0}\frac{(3 + 2\sin x)^x - 3^x}{\tan^2x};$ 

(6) $\lim_{t\to 0}\left(\frac{\arcsin t}{t}\right)^{\frac{1}{t^2}}.$ 

## §4.5 对于教学的建议

## 4.5.1 学习要点

1. 学习函数极限的基本概念和计算极限的方法是这一章中的主要内容。它们为下面学习微分学中的导数计算做好了准备。这里含有许多重要的基本计算技巧。其中除了与过去相似的适当放大法、夹逼方法、单调函数的单侧极限存在定理和Cauchy收敛准则外，还有许多新的工具。今后虽然会学到以微分学为基础的许多更有力的方法，但是本章有许多基本技巧并不能为将来的工具所覆盖或代替。在下面的参考题中有许多就是如此。

2. 对习题课的建议 对于学过此章的人来说, 本章一开始举出的多种不同类型的极限 (或广义极限) 似乎很平常, 但对于多数初学者来说仍然会有很大的困难. 举一反三已是不易, 更何况这里有二十几种极限. 细心观察一些优秀教材, 可以看到在安排上有很好的考虑. 例如, 一开始应当集中力量学习基本类型的函数极限 (即本章第一小节), 在有了基础后再涉及其余, 加以推广. 又往往将广义极限另列一节单独处理. 这样比较符合人的认识规律.

本章习题课重点为: 函数极限的定义; Heine 归结原理; 无穷大 (小) 量的比较. 估计需安排两次, 可在第一次围绕概念, 第二次围绕 Heine 归结原理和求极限技巧 (如等价量的替换、两个重要极限等) 来讲解.

## 4.5.2 参考题

1. 若函数 $f$ 在区间 $(a, b)$ 上单调, 且有一个数列 $\{x_{n}\}$ 使得 $x_{n} \to a^{+}$ 和 $\lim_{n \to \infty} f(x_{n}) = A$ . 请按照单侧极限的定义直接证明: $\lim_{x \to a^{+}} f(x) = A$ .

2. 设函数 $f$ 在区间 $[a, b]$ 上严格单调增加, 且有一个在区间 $[a, b]$ 内的数列 $\{x_n\}$ 使得 $f(x_n) \to f(a)$ . 证明: $\lim_{n \to \infty} x_n = a$ .

3. 在 Heine 归结原理 (命题 4.2.3) 的条件中,

(1) 若将“每个数列 $\{x_{n}\}$ ”改为“每个单调数列 $\{x_{n}\}$ ”, 其他要求不变, 则结论是否仍然成立?

(2) 若对“每个数列 $\{x_{n}\}$ ”增加要求 $|x_{n+1}-a|<|x_{n}-a|, n\in N_{+}$ ，其他不变，则又如何？

又若在它的推论 (命题 4.2.4) 中作这些改动, 结论是否仍然成立?

4. 证明 $\sin \sqrt{x + 1} - \sin \sqrt{x}$ 当 $x \to +\infty$ 时极限为0, 并分析其阶数.

5. 求 $\lim_{x\to +\infty}\left(\frac{1}{x}\cdot \frac{a^x - 1}{a - 1}\right)^{\frac{1}{x}}$ ，其中 $a > 0, a \neq 1$ .

6. (1) 设函数 $f(x) = a_{1} \sin x + a_{2} \sin 2x + \cdots + a_{n} \sin nx$ ，且对所有 x 成立 $|f(x)| \leqslant |\sin x|$ . 证明: $|a_{1} + 2a_{2} + \cdots + na_{n}| \leqslant 1;$ 

(2) 设函数 $f(x)=a_{1}\ln(1+x)+a_{2}\ln(1+2x)+\cdots+a_{n}\ln(1+nx)$ ，且对于所有 x>0 成立 $|f(x)|\leqslant|x|$ 。试陈述与 (1) 相应的不等式并加以证明。

7. 对一般的正整数 n 计算极限 $\lim_{x\to0}\frac{\sin nx-n\sin x}{x^{3}}$ .

8. 证明 Dirichlet 函数 (4.1.5 小节的题 11) 有以下解析表达式:

$$
D (x) = \lim _ {m \rightarrow \infty} \left\{\lim _ {n \rightarrow \infty} [ \cos (\pi m! x) ] ^ {2 n} \right\}.
$$

9. (1) 设函数 $f$ 在区间 $(0, +\infty)$ 上满足条件 $f(2x) = f(x)$ ，且存在有限极限 $f(+\infty)$ . 证明： $f$ 是常值函数.

(2) 设存在 $a > 0, a \neq 1$ , 使得函数 $f$ 在区间 $(0, +\infty)$ 上满足要求 $f(ax) = f(x)$ . 证明: 若存在有限极限 $f(+\infty)$ 或 $f(0^{+})$ , 则 $f$ 为常值函数.

10. 设函数 $f$ 在 $\mathbf{R}$ 上定义, 在 $x = 0$ 邻近有界, 又有 $a > 1, b > 1$ , 使得对每个 $x \in \mathbf{R}$ 成立 $f(ax) = bf(x)$ . 证明: $\lim_{x \to 0} f(x) = 0$ .

11. 设函数 $f$ 在 $(0, +\infty)$ 上单调增加, 且有 $\lim_{x \to +\infty} \frac{f(2x)}{f(x)} = 1$ . 证明: 对每个 $a > 0$ , 成立 $\lim_{x \to +\infty} \frac{f(ax)}{f(x)} = 1$ .

12. 设 $f$ 在 $(0, +\infty)$ 上定义, 且在其中的每个有界子区间上有界. 证明: 等式

$$
\lim _ {x \rightarrow + \infty} \frac {f (x)}{x} = \lim _ {x \rightarrow + \infty} [ f (x + 1) - f (x) ]
$$

在右边为有限极限或 $\pm\infty$ 时成立.

13. 设 $f$ 在 $(0, +\infty)$ 上定义, 且在其中的每个有界子区间上有界. 证明: 等式

$$
\lim _ {x \rightarrow + \infty} \frac {f (x)}{x ^ {n + 1}} = \frac {1}{n + 1} \lim _ {x \rightarrow + \infty} \frac {f (x + 1) - f (x)}{x ^ {n}}
$$

在右边为有限极限或 $\pm\infty$ 时成立.

14. 设 T 为正常数, 若函数 f, g 在 $[a, +\infty)$ 上满足条件:

(1) $g(x + T) > g(x), x \in [a, +\infty);$ 

(2) $\lim_{x\to +\infty}g(x) = +\infty ,f(x),g(x)$ 在 $[a, + \infty)$ 的每个有界子区间上有界；

(3) $\lim_{x\to +\infty}\frac{f(x + T) - f(x)}{g(x + T) - g(x)} = l,$ 

则 $\lim_{x\to +\infty}\frac{f(x)}{g(x)} = l.$ 

15. 设成立 $\lim_{x\to 0}f(x) = 0,f(x) - f\left(\frac{x}{2}\right) = o(x)(x\to 0)$ . 证明: $f(x) = o(x)(x\to$ 0). (本题比4.4.4小节的题2要难一点.)
