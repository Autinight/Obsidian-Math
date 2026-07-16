
# 第十五章 Fourier 级数

Fourier 级数是幂级数之外的另一类重要的函数项级数, 它的出现对于现代数学的理论发展和实际应用都有重大意义. 本章只讨论 Fourier 级数理论的一些基础知识. §15.1 为有关 Fourier 系数的各种性质. §15.2 讨论 Fourier 级数在各种意义下的收敛性问题. 最后一节为学习要点和参考题.

## §15.1 Fourier 系数

Fourier 级数是一类特殊的三角级数, 它的特殊性在于其系数是从某个可积函数出发经过 Euler-Fourier 公式计算出来的.

### 15.1.1 Fourier系数的计算公式

设 $f$ 是以 $2\pi$ 为周期的函数且在 $[- \pi, \pi]$ 上可积和绝对可积. (若 $f$ 为常义可积, 则可积蕴含绝对可积, 又若 $f$ 为广义可积, 则绝对可积蕴含可积.)

计算 $f$ 的Fourier系数的Euler-Fourier公式是：

$$
a _ {n} = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \cos n x \mathrm{d} x, n = 0, 1, 2, \dots ;\tag{15.1}
$$

$$
b _ {n} = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \sin n x \mathrm{d} x, n = 1, 2, \dots .\tag{15.2}
$$

如果三角级数 $\frac{a_0}{2} +\sum_{n = 1}^{\infty}(a_n\cos nx + b_n\sin nx)$ 中的系数满足公式(15.1)和(15.2)，则称该三角级数是 $f$ 的Fourier级数，记为

$$
f (x) \sim \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x + b _ {n} \sin n x\right).\tag{15.3}
$$

注意: 上述公式只表明右边的系数 $a_{n}, b_{n}$ 与左边的函数 $f$ 之间满足公式 (15.1) 和 (15.2). 记号 “~” 没有其他含义, 公式 (15.3) 右边的级数是否收敛, 以及在收敛时其和函数是否等于 $f$ , 都是需要另行讨论的问题.

回顾教科书中导出 Euler-Fourier 公式的过程, 其出发点是在 $(-∞,+∞)$ 上一致收敛 (也就是在一个周期长度的闭区间上一致收敛) 的一个三角级数, 然后通过逐项求积导出上述公式. 由此就得到 Fourier 级数学习中的第一个基本定理 (其中对一致收敛的范围理解如上):

命题 15.1.1 一致收敛的三角级数必是其和函数的 Fourier 级数.

虽然用 Euler-Fourier 公式得到的 Fourier 级数未必一致收敛, 但这个命题仍然是很有用的一个基本结果.

注1 虽然只有周期函数才可能有Fourier级数，但当 $f$ 的定义域是某个长度为 $2\pi$ 的区间时，可先将其延拓成周期函数，且把延拓后的周期函数的Fourier级数称为 $f$ 在该区间上的Fourier级数。对于周期不是 $2\pi$ 的周期函数或只在长度不是 $2\pi$ 的区间上定义的函数，也可用类似的方法定义它们的Fourier级数。

注2 当 $f$ 为偶函数或奇函数时， $f$ 的Fourier级数有较为简单的形式：当 $f$ 为偶函数时，所有的 $b_{n}$ 均为0，并且(15.1)成为

$$
a _ {n} = \frac {2}{\pi} \int_ {0} ^ {\pi} f (x) \cos n x \mathrm{d} x, n = 0, 1, 2, \dots ,\tag{15.4}
$$

当 $f$ 为奇函数时，所有的 $a_{n}$ 均为0，并且(15.2)成为

$$
b _ {n} = \frac {2}{\pi} \int_ {0} ^ {\pi} f (x) \sin n x \mathrm{d} x, n = 1, 2, \dots .\tag{15.5}
$$

这时 f 的 Fourier 级数中只出现含有余弦函数的项与常数项或只出现含有正弦函数的项, 分别称为余弦级数或正弦级数.

注3 从公式(15.4)不难看出, 如果 $f$ 在 $[0, \pi]$ 上具有某种对称性, 例如关于点 $\left(\frac{\pi}{2}, 0\right)$ 为偶函数 (奇函数), 则可以证明在公式(15.4)中当 $n$ 为奇数 (偶数)时积分为0. 对于公式(15.5)有类似的结论 (参见上册10.4.3小节中的命题和例题).

下一个命题建立 $f$ 的Fourier系数与其导函数 $f^{\prime}$ 的Fourier系数之间的联系.这也是Fourier系数的基本性质之一.

命题 15.1.2 设以 $2\pi$ 为周期的连续函数 f 在 $[-π, π]$ 上除了有限个点以外可导，又设（在任意补充有限个点上的值之后） $f'$ 在 $[-π, π]$ 上可积和绝对可积，则从 $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty} (a_{n} \cos nx + b_{n} \sin nx)$ 就有

$$
\begin{array}{r l} f ^ {\prime} (x) & \sim \left(\frac {a _ {0}}{2}\right) ^ {\prime} + \sum_ {n = 1} ^ {\infty} (a _ {n} \cos n x + b _ {n} \sin n x) ^ {\prime} \\ & = \sum_ {n = 1} ^ {\infty} (n b _ {n} \cos n x - n a _ {n} \sin n x). \end{array}
$$

若用 $a_{n}^{\prime}, b_{n}^{\prime}$ 记 $f^{\prime}$ 的Fourier系数，这就等价于

$$
a _ {0} ^ {\prime} = 0, a _ {n} ^ {\prime} = n b _ {n}, b _ {n} ^ {\prime} = - n a _ {n}, n = 1, 2, \dots .\tag{15.6}
$$

证 因为 $f$ 是以 $2\pi$ 为周期的连续函数, 因此 $f(-\pi) = f(\pi)$ , 由此即可推出 $a_0' = 0$ . 然后由分部积分公式①可得

$$
\begin{array}{r l} \pi a _ {n} ^ {\prime} & = \int_ {- \pi} ^ {\pi} f ^ {\prime} (x) \cos n x \mathrm{d} x = f (x) \cos n x \Big | _ {- \pi} ^ {\pi} - \int_ {- \pi} ^ {\pi} f (x) \mathrm{d} \cos n x \\ & = n \int_ {- \pi} ^ {\pi} f (x) \sin n x \mathrm{d} x = n \pi b _ {n}. \end{array}
$$

这就是 $b_{n} = \frac{a_{n}^{\prime}}{n}$ .类似地可以证明 $a_{n} = -\frac{b_{n}^{\prime}}{n}$ 

注 对于满足条件的 $f$ , 公式 (15.6) 可以用于从 $f$ 的 Fourier 系数得到 $f'$ 的 Fourier 系数. 这里只需要形式上的“逐项求导”即可.

反之，能否从 $f'$ 的 Fourier 系数得到 $f$ 的 Fourier 系数？从命题的证明可知，如果 $f \in C[-\pi, \pi]$ 但不满足 $f(\pi) = f(-\pi)$ ，则肯定不行。这时 $a_0' \neq 0$ 。但是有一个方法可以解决这个问题。这就是将 $f$ 写成

$$
f (x) = \left[ f (x) - \frac {a _ {0} ^ {\prime}}{2} x \right] + \frac {a _ {0} ^ {\prime}}{2} x,\tag{15.7}
$$

这时右边第一项满足命题中的条件，其导函数为 $f'(x) - a_0' / 2$ ，因此可用(15.6). 至于右边的第二项，则可直接计算它的Fourier系数．最后将两个结果合并．当然 $f$ 的Fourier系数 $a_0$ 需要直接计算得到（见后面的例题15.1.2之解2）.

### 15.1.2 Fourier系数的渐近性质

由 Riemann 引理 (上册的例题 10.2.6) 就得到这方面的第一个性质:

命题 15.1.3 若 f 为周期 $2\pi$ 的可积和绝对可积函数, 则其 Fourier 系数 $\{a_{n}\}$ 和 $\{b_{n}\}$ 必为无穷小量: $\lim_{n\to\infty}a_{n}=\lim_{n\to\infty}b_{n}=0$ .

利用命题15.1.2可知在 $f$ 的可导性与其Fourier系数的渐近性态之间的联系：

命题15.1.4设以 $2\pi$ 为周期的函数 $f$ 在 $[- \pi, \pi]$ 上除了有限个点以外均有 $k + 1$ 阶导数. 如果其 $k$ 阶导函数 $f^{(k)}$ 在 $[- \pi, \pi]$ 上处处连续且 $f^{(k + 1)}$ 在 $[- \pi, \pi]$ 上可积和绝对可积，则有

$$
a _ {n} = o \left(\frac {1}{n ^ {k + 1}}\right), b _ {n} = o \left(\frac {1}{n ^ {k + 1}}\right).
$$

命题 15.1.5 设 f 是以 $2\pi$ 为周期的函数且存在 $\alpha \in (0,1]$ ，使 f 满足 $\alpha$ 阶 Lipschitz 条件：

$$
| f (x) - f (y) | \leqslant L | x - y | ^ {\alpha},
$$

其中 L 为常数 $^{①}$ ，则成立：

$$
a _ {n} = O \left(\frac {1}{n ^ {\alpha}}\right), b _ {n} = O \left(\frac {1}{n ^ {\alpha}}\right).
$$

证 由本题的条件知, $f$ 在 $[- \pi, \pi]$ 上连续, 因此其 Fourier 系数存在. 在 Fourier 系数公式

$$
a _ {n} = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) \cos n x \mathrm{d} x\tag{15.8}
$$

中令 $x = t + \frac{\pi}{n}$ ，可得

$$
a _ {n} = \frac {1}{\pi} \int_ {- \pi - \frac {\pi}{n}} ^ {\pi - \frac {\pi}{n}} f \left(t + \frac {\pi}{n}\right) \cos (n t + \pi) \mathrm{d} t = - \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f \left(t + \frac {\pi}{n}\right) \cos n t \mathrm{d} t.
$$

将上式与(15.8)取平均得到 $a_{n} = \frac{1}{2\pi}\int_{-\pi}^{\pi}\left[f(x) - f\left(x + \frac{\pi}{n}\right)\right]\cos nx\mathrm{d}x.$ 然后可以估计如下：

$$
\begin{array}{r l} | a _ {n} | & \leqslant \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \left| f (x) - f \left(x + \frac {\pi}{n}\right) \right| \cdot | \cos n x | \mathrm{d} x \\ & \leqslant \frac {1}{2 \pi} L \left(\frac {\pi}{n}\right) ^ {\alpha} \int_ {- \pi} ^ {\pi} | \cos n x | \mathrm{d} x \leqslant L \left(\frac {\pi}{n}\right) ^ {\alpha}. \end{array}
$$

这就证明了 $a_{n} = O\left(\frac{1}{n^{\alpha}}\right)$ . 类似地可证明 $b_{n} = O\left(\frac{1}{n^{\alpha}}\right)$ .

### 15.1.3 Fourier系数的几何意义

初学者一定会感到奇怪, Fourier 系数的计算公式 (15.1), (15.2) 完全是积分运算, 怎么会有什么几何意义?

实际上这里的几何意义是人们的一种想像或者一种类比, 即将满足一定条件的函数集合想像为空间, 并将几何学中的正交 (即垂直) 概念推广到函数之间. 泛函分析等学科的发展充分证明这种方法具有极强的生命力. 对于 Fourier 级数来说, 这种观点也是非常本质的. 本小节就是要用几何观点来解释 Fourier 系数和 Fourier 级数的意义.

这里的函数空间是周期 $2\pi$ 的可积和绝对可积函数集合，其中有函数之间相加以及函数与实数的乘法.按照线性代数这就是一个线性空间或向量空间

然后在这个空间中引进正交概念. 考虑空间中的两个函数 $f$ 与 $g$ , 如果有

$$
\int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = 0,
$$

就称 $f$ 和 $g$ 正交. 在这个定义下, 三角函数系

$$
\cos x, \sin x, \cos 2 x, \sin 2 x, \dots , \cos n x, \sin n x, \dots
$$

中任何两个函数正交, 因此称为正交函数系.

现在考虑用三角多项式

$$
T _ {n} (x) = \frac {A _ {0}}{2} + \sum_ {k = 1} ^ {n} (A _ {k} \cos k x + B _ {k} \sin k x)\tag{15.9}
$$

来逼近函数 f, 其中的逼近误差, 也就是 $T_{n}$ 与 f 之间的距离, 是按照平方平均意义来定义的:

$$
d ^ {2} (f, T _ {n}) = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} [ f (x) - T _ {n} (x) ] ^ {2} \mathrm{d} x.\tag{15.10}
$$

这时就可以证明下列结论.

命题 15.1.6（Fourier 系数的最优性）设 f 是区间 $[-π, π]$ 上的可积和平方可积函数 $^{①}$ ， $T_{n}(x)$ 是 (15.9) 中的任意 n 次三角多项式， $S_{n}(x)$ 是 f 的 Fourier 级数 (15.3) 的部分和函数

$$
S _ {n} (x) = \frac {a _ {0}}{2} + \sum_ {k = 1} ^ {n} (a _ {n} \cos n x + b _ {n} \sin n x),
$$

则有

$$
d ^ {2} (f, S _ {n}) \leqslant d ^ {2} (f, T _ {n}),
$$

其中成立等号当且仅当 $A_{0}=a_{0}, A_{k}=a_{k}, B_{k}=b_{k}, k=1,2,\cdots,n.$ 

证 直接按照定义 (15.10) 计算并作配方得到

$$
\begin{array}{r l} 2 \pi d ^ {2} (f, T _ {n}) & = \int_ {- \pi} ^ {\pi} f ^ {2} - \pi a _ {0} A _ {0} - 2 \pi \sum_ {k = 1} ^ {n} (a _ {k} A _ {k} + b _ {k} B _ {k}) + \frac {\pi A _ {0} ^ {2}}{2} + \pi \sum_ {k = 1} ^ {n} (A _ {k} ^ {2} + B _ {k} ^ {2}) \\ & = \int_ {- \pi} ^ {\pi} f ^ {2} - \frac {\pi a _ {0} ^ {2}}{2} - \pi \sum_ {k = 1} ^ {n} (a _ {k} ^ {2} + b _ {k} ^ {2}) \\ & \quad + \pi \left\{\frac {(A _ {0} - a _ {0}) ^ {2}}{2} + \sum_ {k = 1} ^ {n} [ (A _ {k} - a _ {k}) ^ {2} + (B _ {k} - b _ {k}) ^ {2} ] \right\} \\ & \geqslant \int_ {- \pi} ^ {\pi} f ^ {2} - \frac {\pi a _ {0} ^ {2}}{2} - \pi \sum_ {k = 1} ^ {n} (a _ {k} ^ {2} + b _ {k} ^ {2}) = 2 \pi d ^ {2} (f, S _ {n}). \end{array}
$$

注 在右边的图 15.1 中作出了命题的几何意义的示意图. 如果考虑由所有 $T_{n}$ 构成的集合, 问题就是要从中找出与 f 距离最小的一个三角多项式. 这个问题的解就是 $S_{n}$ . 其原因在于, Euler-Fourier 公式在几何上就是 f 到三角函数系的正交投影, 而 $S_{n}$ 就是 f 到所有 $T_{n}$ 的集合上的正交投影, 因此 $S_{n}$ 到 f 的距离最短.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/43d7b19330081728ff7f312c18c0c84ca1c854abc2699bbb9f06810bf6b36255.jpg)



图15.1


由命题15.1.6还可以得到

命题 15.1.7 (Bessel 不等式) 若 f 于区间 $[-π, π]$ 上可积和平方可积，且 $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty} (a_{n} \cos nx + b_{n} \sin nx)$ ，则有

$$
\frac {a _ {0} ^ {2}}{2} + \sum_ {n = 1} ^ {\infty} (a _ {n} ^ {2} + b _ {n} ^ {2}) \leqslant \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f ^ {2} (x) \mathrm{d} x.\tag{15.11}
$$

证 从命题15.1.6得到

$$
2 \pi d ^ {2} (f, S _ {n}) = \int_ {- \pi} ^ {\pi} f ^ {2} - \frac {\pi a _ {0} ^ {2}}{2} - \pi \sum_ {k = 1} ^ {n} (a _ {k} ^ {2} + b _ {k} ^ {2}) \geqslant 0.
$$

由于这对每个 $n$ 成立, 因此 (15.11) 左边的正项级数的每个部分和均以右边的积分为上界, 从而收敛, 且使该不等式成立.

注1 这个结果与Fourier级数的收敛性没有关系, 由此就可以得到 $a_{n} = o(1)$ , $b_{n} = o(1)$ , 这里也不需要用Riemann引理.

注2 由此可知, 在 $0 < p \leqslant \frac{1}{2}$ 时, 三角级数 $\sum_{n=1}^{\infty} \frac{\sin nx}{n^p}, \sum_{n=1}^{\infty} \frac{\cos nx}{n^p}$ 不可能是可积和平方可积函数的 Fourier 级数①.

### 15.1.4 例题

例题15.1.1 证明: 三角多项式 $P_{n}(x) = \sum_{k=0}^{n}\left(A_{k} \cos kx + B_{k} \sin kx\right)$ 的Fourier级数就是其本身.

证 三角多项式可看成是只含有限个非零项的三角级数, 因此在 $(- \infty, + \infty)$ 上一致收敛, 引用命题 15.1.1 即得. (本题的另一个解法当然是直接计算.)

在用公式计算 Fourier 系数时, 即使对于相当简单的 f, 也可能要作多次分部积分运算, 计算量相当大. 因此, 除了要细心地按公式计算之外, 还应该学习 (或发明) 一些较为灵活的计算方法. 为此在下面列举几种非常规方法供参考. 此外, 在学了逐项积分定理后还会有新的计算方法.

例题15.1.2 设函数 $f(x) = x^3, x \in (-\pi, \pi)$ ，求 $f$ 的Fourier级数，

解1利用Euler公式 $\mathrm{e}^{\mathrm{i}\theta} = \cos \theta +\mathrm{i}\sin \theta$ 在复数域进行计算往往是很有效的方法.对本题可以计算如下：

$$
\begin{array}{l} \frac {1}{\pi} \int_ {- \pi} ^ {\pi} x ^ {3} (\cos n x + \mathrm{i} \sin n x) \mathrm{d} x = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} x ^ {3} \mathrm{e} ^ {\mathrm{i} n x} \mathrm{d} x \\ = \frac {1}{\pi} \left(\frac {x ^ {3}}{\mathrm{i} n} \mathrm{e} ^ {\mathrm{i} n x} - \frac {3 x ^ {2}}{(\mathrm{i} n) ^ {2}} \mathrm{e} ^ {\mathrm{i} n x} + \frac {6 x}{(\mathrm{i} n) ^ {3}} \mathrm{e} ^ {\mathrm{i} n x} - \frac {6}{(\mathrm{i} n) ^ {4}} \mathrm{e} ^ {\mathrm{i} n x}\right) \Bigg | _ {- \pi} ^ {\pi} \\ = \mathrm{i} \frac {2 (- 1) ^ {n}}{\pi} \left(- \frac {\pi^ {3}}{n} + \frac {6 \pi}{n ^ {3}}\right) = \mathrm{i} (- 1) ^ {n - 1} \left(\frac {2 \pi^ {2}}{n} - \frac {1 2}{n ^ {3}}\right). \end{array}
$$

于是所求的Fourier级数为

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n - 1} \left(\frac {2 \pi^ {2}}{n} - \frac {1 2}{n ^ {3}}\right) \sin n x.
$$

解2 这里的工具是命题15.1.2. 先用公式(15.2)直接计算出在 $(- \pi, \pi)$ 上函数 $x$ 的Fourier级数：

$$
x \sim \sum_ {n = 1} ^ {\infty} \frac {2 (- 1) ^ {n - 1}}{n} \sin n x,\tag{15.12}
$$

然后从 $(x^{2})^{\prime} = 2x$ 和公式(15.6)得到

$$
x ^ {2} \sim \frac {\pi^ {2}}{3} + \sum_ {n = 1} ^ {\infty} \frac {4 (- 1) ^ {n}}{n ^ {2}} \cos n x,\tag{15.13}
$$

其中常数项是直接计算得到的.

由于在区间 $(- \pi, \pi)$ 上的 $x^3$ 不可能连续延拓为周期 $2\pi$ 的连续函数，因此不能直接用命题15.1.2，但可以采用技巧(15.7)将 $x^3$ 分解为：

$$
x ^ {3} = (x ^ {3} - \pi^ {2} x) + \pi^ {2} x.\tag{15.14}
$$

右边第一项可以延拓为满足命题15.1.2的周期 $2\pi$ 的连续函数，其导函数为 $3x^{2}$ ，因此就可以用公式(15.6)和(15.12)得到 $x^{3}$ 的正弦级数中 $\sin nx$ 的系数为

$$
3 \cdot \frac {4 (- 1) ^ {n}}{n ^ {3}} + \pi^ {2} \cdot \frac {2 (- 1) ^ {n - 1}}{n} = \frac {(- 1) ^ {n} 1 2}{n ^ {3}} + \frac {(- 1) ^ {n - 1} 2 \pi^ {2}}{n}.
$$

例题 15.1.3 设 f 为 $(0, \frac{\pi}{2})$ 上的可积和绝对可积函数. 问: 如何将 f 延拓到区间 $(-π, π)$ 上, 使其 Fourier 级数具有如下的形式:

$$
\sum_ {n = 1} ^ {\infty} a _ {2 n - 1} \cos (2 n - 1) x.
$$

解 由题意要求 $a_{2n} = 0$ ，从公式 $a_{2n} = \frac{2}{\pi} \int_0^\pi f(x) \cos 2nx \, \mathrm{d}x$ 可见，由于 $\cos 2nx$ 在 $[0, \pi]$ 上关于其中点为偶函数，根据上册324页命题10.4.5，只要有 $f(x) = -f(\pi - x)$ 成立就可以使上述积分为0。这决定了 $f$ 在 $\left(\frac{\pi}{2}, \pi\right)$ 上的延拓。定义 $f(0) = f\left(\frac{\pi}{2}\right) = 0$ ，然后用偶延拓 $f(-x) = f(x)$ 将 $f$ 延拓到 $(- \pi, 0)$ 上即可。结论：将 $f$ 以如下方式延拓：

$$
F (x) = \left\{ \begin{array}{l l} f (x), & x \in \left(0, \frac {\pi}{2}\right), \\ - f (\pi - x), & x \in \left(\frac {\pi}{2}, \pi\right), \\ 0, & x = 0, \frac {\pi}{2}, \\ f (- x), & x \in (- \pi , 0). \end{array} \right.
$$

### 15.1.5 练习题

1. 求下列函数的 Fourier 级数:

(1) $\sin^{3}x + \cos^{4}x;$ 

(2) $ax^{3} + bx^{2} + cx + d, x \in (-\pi, \pi).$ 

2. 将定义在 $\left(0, \frac{\pi}{2}\right)$ 上的可积和绝对可积函数 $f$ 延拓到区间 $(- \pi, \pi)$ 上，使其Fourier级数具有如下的形式： $\sum_{n=1}^{\infty} b_{2n-1} \sin(2n-1)x$ .

3. 证明：函数

$$
f (x) = \left\{ \begin{array}{l l} c, & 0 <   x \leqslant \pi , \\ 0, & x = 0, \\ - c, & - \pi <   x <   0 \end{array} \right.
$$

的 Fourier 级数的前 $2n + 1$ 项的和 $S_{n}(x) = \frac{a_{0}}{2} + \sum_{k=1}^{n} (a_{k} \cos kx + b_{k} \sin kx)$ 具有形式

$$
S _ {n} (x) = \frac {2 c}{\pi} \int_ {0} ^ {x} \frac {\sin 2 n t}{\sin t} \mathrm{d} t.
$$

4. 设 $f \in C^{1}[-\pi, \pi]$ , 证明:

$$
a _ {n} = o \Big (\frac {1}{n} \Big), b _ {n} = O \Big (\frac {1}{n} \Big);
$$

如果又有 $f(\pi) = f(-\pi)$ ，则 $b_{n} = o(\frac{1}{n})$ 

5. 设 f 是以 $2\pi$ 为周期的有界函数且在 $(- \pi, \pi)$ 上逐段单调，证明：

$$
a _ {n} = O \left(\frac {1}{n}\right), b _ {n} = O \left(\frac {1}{n}\right).
$$

(可在每个单调区间上用积分第二中值定理 (见上册的命题 10.2.2).)

6. 设 $f$ 是以 $2\pi$ 为周期的函数且在 $[- \pi, \pi]$ 上可积和绝对可积, 证明: 用 $\sin x$ 去乘 $f$ 的 Fourier 级数的每一项所得的三角级数就是 $f(x) \sin x$ 的 Fourier 级数.

7. 设 $[a,b]$ 上的连续函数系 $\{e_{n}\}$ 满足条件 $\int_{a}^{b} e_{i}(x)e_{j}(x)\mathrm{d}x = \delta_{ij}$ ，其中 $\delta_{ij} = 0, \forall i \neq j, \delta_{ii} = 1$ ，则称该函数系在 $[a,b]$ 上为规范正交系。设 f 在 $[a,b]$ 上可积和平方可积，定义 $c_{n} = \int_{a}^{b} f(x)e_{n}(x)\mathrm{d}x$ 为 f 关于 $e_{n}$ 的 Fourier 系数， $n = 1, 2, \cdots$ 。证明：级数 $\sum_{n=1}^{\infty} c_{n}^{2}$ 收敛。又问：当 n 固定时， $a_{1}, a_{2}, \cdots, a_{n}$ 取什么值时，平方平均误差

$$
\int_ {a} ^ {b} \left[ f (x) - \sum_ {k = 1} ^ {n} a _ {k} e _ {k} (x) \right] ^ {2} \mathrm{d} x
$$

最小？

8. 设 $g$ 是周期为1的连续函数且 $\int_0^1 g(x)\mathrm{d}x = 0$ ，函数 $f\in C^{1}[0,1]$ ，令

$$
a _ {n} = \int_ {0} ^ {1} f (x) g (n x) \mathrm{d} x, n = 1, 2, \dots ,
$$

证明：级数 $\sum_{n = 1}^{\infty}a_n^2$ 收敛.

## §15.2 Fourier 级数的收敛性

本节讨论 Fourier 级数在各种意义上的收敛性问题, 其中包括点收敛, 在 Cesàro 意义下的收敛, 平方平均收敛和一致收敛.

为方便起见, 在以下的叙述中只考虑周期 $2\pi$ 的情况, 但通过简单变换就可以将结论推广到一般周期的情况.

### 15.2.1 Dirichlet核和点收敛性

Fourier 级数的点收敛性研究主要依赖于 Dirichlet 核 (参见上册 322 页). 利用 Euler-Fourier 公式和三角变换, 将函数 f 的 Fourier 级数的部分和函数列

$$
S _ {0} (x) = \frac {a _ {0}}{2}, S _ {n} (x) = \frac {a _ {0}}{2} + \sum_ {k = 1} ^ {n} \left(a _ {k} \cos k x + b _ {k} \sin k x\right), n = 1, 2, \dots ,
$$

用 Dirichlet 积分表示出来:

$$
S _ {n} (x) = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x + t) D _ {n} (t) \mathrm{d} t = \frac {1}{\pi} \int_ {0} ^ {\pi} [ f (x + t) + f (x - t) ] D _ {n} (t) \mathrm{d} t,\tag{15.15}
$$

其中 $D_{n}$ 是Dirichlet核

$$
D _ {n} (x) = \frac {1}{2} + \sum_ {k = 1} ^ {n} \cos k x = \frac {\sin (n + \frac {1}{2}) x}{2 \sin \frac {x}{2}}.\tag{15.16}
$$

$D_{n}(x)$ 是周期为 $2\pi$ 的函数, 在一个周期上的积分值为 $\pi$ (见上册(10.12)):

$$
\frac {2}{\pi} \int_ {0} ^ {\pi} D _ {n} (x) \mathrm{d} x = 1.\tag{15.17}
$$

从方法上观察, 局部化定理以及各种常见判别法都可以通过对 Dirichlet 核的研究而得到. 在图 15.2 中作出了 $D_{n}(x)$ 在区间 $[- \pi, \pi]$ 上的示意图, 其中取 $n = 9$ . $x = 0$ 为 $D_{n}(x)$ 的可去间断点, 其极限值为 $n + \frac{1}{2}$ , 是曲线的主峰高度. $D_{n}(x)$ 的绝对值最小的两个零点 $\pm \pi / (n + \frac{1}{2})$ 之间的主峰下的面积当 $n \to \infty$ 时趋于 $\pi$ , 而其余峰谷和横轴之间的面积之和则正负相消趋于 0. 因此公式 (15.17) 中的积分值主要就是由这个最高的主峰提供的.

$D_{n}(x)$ 的这些特性使得当函数 $g(x)$ 在 $x = 0$ 处满足一定条件（例如可导）时，就能够建立

$$
\lim _ {n \rightarrow \infty} \frac {1}{\pi} \int_ {- \pi} ^ {\pi} D _ {n} (x) g (x) \mathrm{d} x = g (0).
$$

这就是Dirichlet核的作用，即通过积分运算和取极限“提取”出函数 $g$ 在 $x = 0$ 的值.若对 $g$ 的自变量作平移就可以得到其他点的值

由此得到的第一个结果就是局部化定理，它是Fourier级数的一个特点。由于函数 $f$ 的Fourier系数是按照Euler-Fourier公式通过积分得到的，因此 $f$ 的Fourier级数在点 $x_0$ 处的敛散性似乎理所当然地应当与 $f$ 在整个区间 $[- \pi, \pi]$ 上的性态有关. 但局部化定理对此给出了完全不同的论断. 有关点收敛的各种判别法也都是在这个基础上建立起来的.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/fcd1ecf5528b948d22a7507fd76d788584069281cfafafed4428e8d5bade86bb.jpg)



图15.2


局部化定理即是对任意小的固定正数 $\delta$ 有渐近等式:

$$
S _ {n} (x) = \frac {1}{\pi} \int_ {0} ^ {\delta} [ f (x + t) + f (x - t) ] D _ {n} (t) \mathrm{d} t + o (1) \quad (n \rightarrow \infty).
$$

利用 (15.17), 对于任意 $s$ 就有

$$
S _ {n} (x) - s = \frac {1}{\pi} \int_ {0} ^ {\pi} [ f (x + t) + f (x - t) - 2 s ] D _ {n} (t) \mathrm{d} t.\tag{15.18}
$$

这样就可以研究在什么条件下 $f$ 的Fourier级数于点 $x$ 处收敛于 $s$ . 由于(15.18)的特殊形式, 经常令 $s = \frac{1}{2} [f(x^{+}) + f(x^{-})]$ , 并在一系列条件下证明 $f$ 的Fourier级数收敛于这个值. 这就是教科书中的一系列判别法, 当然它们都是充分性判别法. 本书在这里不再重复.

需要指出, Fourier 级数的点收敛性是一个十分困难的问题, 即使对于连续周期函数也是如此. 这里浏览一下已经取得的进展是适宜的.

Fourier 级数的点收敛的研究进展 早期进展是举出发散的例子. 要找到一个连续函数, 使得它的 Fourier 级数在一个点上发散, 这已经不是一个平凡的问题. 自从 Du Bois-Reymond (1873) 举出了这样的例子之后, 发散点处处稠密的连续函数例子也已经找到. 若在 Lebesgue 可积函数类中考虑问题, 则 Kolmogorov (柯尔莫哥洛夫) 举出了 f 的 Fourier 级数几乎处处发散 (1923) 和处处发散 (1926) 的例子. (几乎处处是实变函数论中的概念, 在上册 304 页已有解释.)

另一方面, Lusin (卢津) 则猜测连续函数的 Fourier 级数几乎处处收敛. 由于以上所举出的各反例, 在很长的时间内很少有人相信这个猜测是正确的. 这个猜测最终在 1966 年为 Carleson (卡勒松) 正面解决, 他证明了包含连续函数在内的 L 平方可积函数的 Fourier 级数一定是几乎处处收敛的. 这是一个引起轰动的重大成果. (Carleson 是 1992 年 Wolf (沃尔夫) 奖的获得者.)

### 15.2.2 Gibbs 现象

由于Fourier级数的每一项是连续函数，因此容易知道，如果Fourier级数的和函数在某点不连续，则级数在该点的邻域上不可能是一致收敛的。但是对于Fourier级数来说这里还有一个更为奇特的现象，即所谓Gibbs(吉布斯)现象。这里的要点是：若 $x_0$ 是和函数的一个(第一类)间断点，则当 $x_{n}$ 趋于 $x_0$ 的左侧或右侧时，部分和的值 $S_{n}(x_{n})$ 不会收敛于 $S(x_0)$ 。不但如此，下面的分析表明，这里的误差不会因 $n$ 的增加而减少。

为简单起见, 我们先讨论具有典型意义的一个特例:

$$
S (x) = \sum_ {n = 1} ^ {\infty} \frac {\sin n x}{n},\tag{15.19}
$$

其中 $S(x)$ 是周期 $2\pi$ 的函数: $S(x)=\frac{\pi-x}{2},\forall x\in(0,2\pi),S(0)=0.$ 

在图 15.3 中作出了级数 (15.19) 的前 10 个部分和函数的示意图.

Fourier 级数 $\sum_{n=1}^{\infty}\frac{\sin nx}{n}$ 

的前 10 个部分和函数 $S_{n}(x)$ ,

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/b99f34b39fd2e77500216c89809163de92acfdca656b97e157f6004db3bd9092.jpg)



图15.3


同时在图15.3中还用两段粗黑直线表示级数(15.19)的和函数 $S(x) = \frac{\pi - x}{2}$ , $x \in [-\pi, 0) \cup (0, \pi]$ . 从图中已经可以看出, 虽然只观察了前10个部分和函数, 但在点 $x = 0$ 附近的差值 $|S_n(x) - S(x)|$ 毫无趋于0的趋势, 更为精确的性态刻画可以总结如下. (其中只叙述 $0 \leqslant x \leqslant \pi$ 的情况, 对 $-\pi \leqslant x \leqslant 0$ 的结论是类似的.)

例题 15.2.1 (Gibbs 现象) 记 $\{S_{n}(x)\}$ 是 Fourier 级数 (15.19) 的部分和函数列, $S(x)=\frac{\pi-x}{2}$ 为该级数在区间 $(0,2\pi)$ 上的和函数, 则有

$$
\lim _ {n \to \infty} \max _ {0 \leqslant x \leqslant \pi} \{S _ {n} (x) - S (x) \} = \int_ {0} ^ {\pi} \frac {\sin t}{t}   \mathrm{d} t - \frac {\pi}{2} \approx \frac {\pi}{2} \times 0. 1 7 8   9 8.
$$

证 研究误差 $\varepsilon_{n}(x)=S_{n}(x)-S(x)$ 在 x=0 右侧的性态. 直接计算得到

$$
\frac {\mathrm{d} \varepsilon_ {n} (x)}{\mathrm{d} x} = \frac {1}{2} + \sum_ {k = 1} ^ {n} \cos k x,
$$

因此就有（见前面的(15.16)）

$$
\frac {\mathrm{d} \varepsilon_ {n} (x)}{\mathrm{d} x} = D _ {n} (x) = \frac {\sin (n + \frac {1}{2}) x}{2 \sin \frac {1}{2} x}.
$$

可以看出误差 $\varepsilon_{n}(x)$ 的极值点为 $x_{n}^{(m)} = \pi m / (n + \frac{1}{2}), m = 1, 2, \cdots, 2n.$ 其中当 m 为奇数时是极大值点 $^{①}$ ，当 m 为偶数时是极小值点（参见图 15.3）.

直接计算在这些极值点上的误差值:

$$
\begin{array}{r l} \varepsilon_ {n} (x _ {n} ^ {(m)}) & = S _ {n} (x _ {n} ^ {(m)}) - S (x _ {n} ^ {(m)}) = \sum_ {k = 1} ^ {n} \frac {\sin (k x _ {n} ^ {(m)})}{k} - \frac {\pi - x _ {n} ^ {(m)}}{2} \\ & = \left(\sum_ {k = 1} ^ {n} \frac {\sin (k x _ {n} ^ {(m)})}{k x _ {n} ^ {(m)}} \cdot \frac {\pi m}{n}\right) \cdot \left(\frac {n}{n + 1 / 2}\right) - \frac {\pi}{2} + \frac {\pi m}{2 n + 1} \\ & = \left(\sum_ {k = 1} ^ {n} \frac {\sin (k x _ {n} ^ {(m)})}{k x _ {n} ^ {(m)}} \cdot \frac {\pi m}{n}\right) - \frac {\pi}{2} + O \left(\frac {1}{n}\right). \end{array}
$$

由于右边第一项可看作为Riemann积分和式，因此当 $n\to \infty$ 时就得到

$$
\lim _ {n \rightarrow \infty} \varepsilon_ {n} (x _ {n} ^ {(m)}) = \int_ {0} ^ {m \pi} \frac {\sin t}{t} \mathrm{d} t - \frac {\pi}{2}.
$$

容易知道当 m = 1 时的极限值最大 $^{②}$ ，即得到

$$
\int_ {0} ^ {\pi} \frac {\sin t}{t} \mathrm{d} t - \frac {\pi}{2} \approx \frac {\pi}{2} \times 0. 1 7 8 9 8.
$$

注1 若取 $x_{n} = c / n, n = 1,2,\dots$ ，则类似地有 $\lim_{n\to \infty}S_n\left(\frac{c}{n}\right) = \int_0^c\frac{\sin t}{t}\mathrm{d}t.$ 取不同的 $c$ 值，这样的极限值就会形成一个闭区间 $[CS(0^{-}),CS(0^{+})]$ ，其中 $C = \frac{2}{\pi}\int_0^\pi \frac{\sin t}{t}\mathrm{d}t\approx 1.17898.$ 注意：在图15.3上用 $y$ 轴上的一个粗黑直线段来代表这个区间.

注2 虽然以上只是一个特例, 但可以用它以及它的平移来吸收一般的和函数中的所有间断点. 因此以上所得的结论、常数 $18\%$ 以及注1中的内容都具有普遍意义.

小结 若和函数有间断点, 则不可能依靠 Fourier 级数的部分和函数 $S_{n}(x)$ 的 $n$ 增加来改进近似计算的精确程度. 这是在 Fourier 级数的应用中不能忽视的问题 (可以参考 [43] 的最后一章“三角级数之和”).

注3 以上证明的思想来自《美国数学月刊》(1980)第87卷210-212页.

### 15.2.3 Fourier级数的Cesàro求和

到目前为止, 凡是说到无穷级数 $\sum_{n=1}^{\infty} a_n$ 收敛, 就是指它的部分和数列收敛. 这就是由 Cauchy 提出的无穷级数的收敛定义. 但至少从 Euler 起, 就已经出现无穷级数的其他收敛定义. Cesàro 求和就是其中的一种, 它在 Fourier 级数理论中得到了重要的应用 (参见第十三章最后的几个参考题).

定义 设级数 $\sum_{n=0}^{\infty}a_{n}$ 的部分和数列为 $S_{n}=a_{0}+a_{1}+\cdots+a_{n}, n=0,1,2,\cdots$ 定义数列

$$
\sigma_ {n} = \frac {S _ {0} + S _ {1} + \cdots + S _ {n - 1}}{n}, n = 1, 2, \dots .
$$

如果存在极限 $\lim_{n\to \infty}\sigma_n = \sigma$ ，则称级数 $\sum_{n = 0}^{\infty}a_n$ 在Cesàro意义下可求和，且定义 $\sigma$ 为级数 $\sum_{n = 0}^{\infty}a_n$ 的Cesàro和.由Cauchy命题（见上册31页）知道，若数列 $\{S_n\}$ 收敛于数 $S$ ，则其前 $n$ 项的平均值 $\sigma_{n}$ 构成的数列也收敛于 $S$ ，但反之则不然.因此若级数 $\sum_{n = 0}^{\infty}a_{n}$ 在通常意义下收敛，则它在Cesàro意义下也收敛，且有相同的和.这表明对于在通常意义下收敛的级数而言，Cesàro求和没有给出新的结果

然而在通常意义下的某些发散级数有可能在 Cesàro 意义下有和. 例如级数

$$
1 - 1 + 1 - 1 + \dots = \sum_ {n = 1} ^ {\infty} (- 1) ^ {n - 1}
$$

的部分和数列为 $S_{2k-1}=1, S_{2k}=0, k=1,2,\cdots$ ，因此该级数的 Cesàro 和为 $\frac{1}{2}$ . 这就是 Euler 等数学家曾经提出过的和 (参见 [26, 50]).

初看起来这似乎有点荒谬，为什么要考虑（在通常意义下）发散级数的和？这样做有什么意义？下面我们先观察 Cesàro 求和在 Fourier 级数理论中给我们带来什么结果.

命题 15.2.1 (Fejér 定理) 如果以 $2\pi$ 为周期的函数 f 在 $[-π, π]$ 上可积和绝对可积，并且在点 $x_{0}$ 处有左、右极限 $f(x_{0}^{+})$ 与 $f(x_{0}^{-})$ ，则 f 的 Fourier 级数在点 $x_{0}$ 处在 Cesàro 意义下收敛于

$$
\frac {1}{2} [ f (x _ {0} ^ {+}) + f (x _ {0} ^ {-}) ].
$$

特别是当 f 于点 $x_{0}$ 连续时，则 Fourier 级数在点 $x_{0}$ 的 Cesàro 和就等于 $f(x_{0})$ .

证 从部分和函数列 $S_{n}(x)$ 的Dirichlet积分(15.15)出发计算 $\sigma_{n}(x)$ ，经三角变换后可以得到Fejér积分：

$$
\begin{array}{r l} \sigma_ {n} (x) & = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x + t) \cdot \frac {1}{2 n} \left(\frac {\sin \frac {n}{2} t}{\sin \frac {1}{2} t}\right) ^ {2} \mathrm{d} t \\ & = \int_ {0} ^ {\pi} \frac {f (x + t) + f (x - t)}{2} \cdot F _ {n} (t) \mathrm{d} t, \end{array}
$$

其中的非负函数

$$
F _ {n} (t) = \frac {1}{n \pi} \left(\frac {\sin \frac {n}{2} t}{\sin \frac {1}{2} t}\right) ^ {2}\tag{15.20}
$$

称为 Fejér 核. 用 $f(x) \equiv 1$ 代入就得到恒等式 (见上册 330 页的题 10):

(15.21) 

这样就可以利用 Fejér 积分和恒等式 (15.21) 将问题化为积分估计:

$$
\begin{array}{l} \left| \sigma_ {n} (x _ {0}) - \frac {1}{2} [ f (x _ {0} ^ {+}) + f (x _ {0} ^ {-}) ] \right| \\ \leqslant \int_ {0} ^ {\pi} \left(\frac {| f (x _ {0} + t) - f (x _ {0} ^ {+}) | + | f (x _ {0} - t) - f (x _ {0} ^ {-}) |}{2}\right) F _ {n} (t) \mathrm{d} t. \end{array}
$$

现在对每个给定的 $\varepsilon > 0$ 取 $\delta > 0$ , 使得当 $0 \leqslant t \leqslant \delta$ 时, 有 $|f(x_0 + t) - f(x_0^+)| < \varepsilon$ 和 $|f(x_0 - t) - f(x_0^-)| < \varepsilon$ 成立, 于是就有

$$
\int_ {0} ^ {\delta} \left(\frac {| f (x _ {0} + t) - f (x _ {0} ^ {+}) | + | f (x _ {0} - t) - f (x _ {0} ^ {-}) |}{2}\right) F _ {n} (t) \mathrm{d} t \leqslant \varepsilon \int_ {0} ^ {\delta} F _ {n} (t) \mathrm{d} t \leqslant \varepsilon ,
$$

这里利用了Fejér核的非负性和恒等式(15.21).再利用当 $\delta \leqslant t\leqslant \pi$ 时

$$
0 \leqslant F _ {n} (t) \leqslant \frac {1}{n \pi} \cdot \frac {1}{\left(\sin \frac {1}{2} \delta\right) ^ {2}},
$$

就可以估计得到

$$
\int_ {\delta} ^ {\pi} \left(\frac {| f (x _ {0} + t) - f (x _ {0} ^ {+}) | + | f (x _ {0} - t) - f (x _ {0} ^ {-}) |}{2}\right) F _ {n} (t) \mathrm{d} t = O \left(\frac {1}{n}\right).
$$

因此存在 N，使得当 n > N 时有

$$
\left| \sigma_ {n} (x _ {0}) - \frac {1}{2} [ f (x _ {0} ^ {+}) + f (x _ {0} ^ {-}) ] \right| <   2 \varepsilon ,
$$

这就是

$$
\lim _ {n \rightarrow \infty} \sigma_ {n} (x _ {0}) = \frac {1}{2} [ f (x _ {0} ^ {+}) + f (x _ {0} ^ {-}) ].
$$

注 将 Fejér 积分的估计和 Dirichlet 积分的估计作比较, 可见这里要容易得多, 连 Riemann 引理也不需要用. 原因在于 Fejér 核是非负的, 而 Dirichlet 核则是变号的 (见图 15.2). 如前所示的 Gibbs 现象的根源都在于此. 读者可以将图 15.4 中的 Fejér 核的示意图与图 15.2 作比较. 此外, 还可以参考 [18] 第三卷的 740 小节关于正核的系统论述. 在下一章关于 Weierstrass 逼近定理的证明中我们将再次接触到这种核函数方法 (又称奇异积分方法).

由 Fejér 定理可以立即得到关于 Fourier 级数收敛的一个重要结果.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/db03dee6-f5fa-4743-b4da-74511fe3bc55/a8800114f8fdfb04a28e71c14c29fbca82f1912073df7f3c0c108b9ae41b472e.jpg)



图15.4


命题15.2.2设以 $2\pi$ 为周期的函数 $f$ 在 $[- \pi, \pi]$ 上可积和绝对可积，点 $x_0$ 是 $f$ 的连续点或第一类间断点，如果 $f$ 的Fourier级数在点 $x_0$ 处收敛，则它一定收敛于 $f(x_0)$ 或 $\frac{1}{2} [f(x_0^+) + f(x_0^-)]$ .

证 设 $f$ 的Fourier级数在点 $x_0$ 处收敛于 $s$ , 则其Cesàro和也是 $s$ . 但由Fejér定理(命题15.2.1)可以知道它的Cesàro和为 $f(x_0)$ 或 $\frac{1}{2} [f(x_0^+) + f(x_0^-)]$ , 可见命题成立.

注 结合前面提到的 Carleson 的工作, 可以知道连续周期函数的 Fourier 级数展开式一定几乎处处成立.

对于连续的周期函数, 从 Fejér 定理还可以得到两个重要结论.

命题 15.2.3（Fourier 级数的惟一性定理）设 f 为周期 $2\pi$ 的连续函数，且其 Fourier 系数均等于 0: $a_{0}=0, a_{n}=b_{n}=0, n=1,2,\cdots$ ，则 f 必是恒等于 0 的常值函数.

证 这时 f 的 Fourier 级数的每一项都恒等于 0，因此部分和函数列 $\{S_{n}(x)\}$ 的每一项也都恒等于 0。由此就知道 $\sigma_{n}(x) \equiv 0, n = 1, 2, \cdots$ 。从 Fejér 定理（命题 15.2.1）可见 $f \equiv 0$ 。

注 由此可知若两个连续函数有相同的 Fourier 级数, 则这两个连续函数必相同. 注意: 这与 Taylor 级数很不一样 (参见命题 14.4.2, 67 页底注和上册 169 页的例题 6.2.4).

命题 15.2.4 (关于一致收敛的 Fejér 定理) 如果 f 是以 $2\pi$ 为周期的连续函数，则它的 Fourier 级数在 Cesàro 意义下一致收敛于 f.

注1 这只需要在命题15.2.1的证明中利用连续函数的Cantor定理（见上册§5.4）即可.

注2 由于 $\{\sigma_n(x)\}$ 是三角多项式函数列, 因此已经得到了关于周期连续函数用三角多项式一致逼近的Weierstrass第二逼近定理. 这将在下一章中再作进一步介绍. (又见命题15.2.8的注和参考题19.)

### 15.2.4 Fourier级数的平方平均收敛

定义 称函数列 $\{f_n\}$ 于区间 $[a, b]$ 上平方平均收敛于 $f$ , 若成立

$$
\lim _ {n \rightarrow \infty} \int_ {a} ^ {b} | f _ {n} (x) - f (x) | ^ {2} \mathrm{d} x = 0.
$$

从 Bessel 不等式 (即命题 15.1.7) 的证明已知

$$
2 \pi d ^ {2} (f, S _ {n}) = \int_ {- \pi} ^ {\pi} f ^ {2} - \frac {\pi a _ {0} ^ {2}}{2} - \pi \sum_ {k = 1} ^ {n} (a _ {k} ^ {2} + b _ {k} ^ {2}),
$$

因此，若 $\lim_{n\to \infty}d^2 (f,S_n) = 0$ ，则Bessel不等式中的不等号就可换为等号.这就是Parseval(帕塞瓦尔)等式，它又称为封闭性方程，是Fourier级数中最重要的公式之一.

命题 15.2.5 (Parseval 等式) 设 f 在 $[-π, π]$ 上可积和平方可积, $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n} \cos nx + b_{n} \sin nx)$ , 则有下列 Parseval 等式成立:

$$
\frac {a _ {0} ^ {2}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} ^ {2} + b _ {n} ^ {2}\right) = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f ^ {2} (x) \mathrm{d} x.\tag{15.22}
$$

证 这里只列出主要步骤, 细节从略.

(1) 先用连续函数在平方平均意义上逼近 $f$ (参见上册333页题5). 如果 $f$ 为广义平方可积, 则还需要先用常义可积函数在平方平均意义上逼近 $f$ , 然后再用连续函数逼近.

(2) 对于连续函数, 根据一致收敛的 Fejér 定理 (即命题 15.2.4), 存在一个三角多项式 $T_{n}$ 一致逼近这个连续函数.

(3) 然后再用 $S_{n}$ 在所有 $T_{n}$ 中的最优性 (即命题15.1.6), 并注意到 $d^{2}(f, S_{n})$ 随 $n$ 增大而单调减少, 可见成立 $\lim_{n \to \infty} d^{2}(f, S_{n}) = 0$ , 因此所求结论为真.

注 为了阐明 Parseval 等式的几何意义, 只需要将函数空间中从正交开始的几何类比进一步做下去. 将 $\int_{-\pi}^{\pi} f(x) g(x) \mathrm{d}x$ 定义为 $f$ 与 $g$ 的内积, 并记为 $(f, g)$ , 然后就可以将 $\sqrt{(f, f)}$ 定义为 $f$ (作为向量) 的长度 (或称为模长). 这时三角函数系中的常值函数 1 的长度为 $\sqrt{2\pi}$ , 其余函数的长度均为 $\sqrt{\pi}$ . 于是在 $f$ 的 Fourier 级数中各项的长度就是 $\frac{\sqrt{2\pi} a_0}{2}, \sqrt{\pi} a_n$ 和 $\sqrt{\pi} b_n, n = 1, 2, \cdots$ . 然后再观察 Parseval等式 (15.22), 我们就会发现它就是平面几何与立体几何中的勾股定理在函数空间中的推广. 因此我们认为所讨论的函数空间是无限维空间, 而这就是泛函分析学科将要专门研究的领域.

下面我们举例说明 Parseval 等式的一些应用.

首先解决三角函数系的完备性问题. 这里的问题是: 是否存在三角函数系以外的可积和平方可积函数 $\varphi$ , 使 $\varphi$ 与三角函数系中的每个函数正交, 且 $\int_{-\pi}^{\pi} \varphi^{2} \neq 0$ ? 如果不存在这样的函数 $\varphi$ , 就称三角函数系在 $[- \pi, \pi]$ 上具有完备性.

命题 15.2.6 三角函数系 $1, \cos x, \sin x, \cdots, \cos nx, \sin nx, \cdots$ 在 $[-\pi, \pi]$ 上具有完备性.

证 用反证法. 假设存在与三角函数系中每个函数正交的可积和平方可积函数 $\varphi$ , 则它的每个 Fourier 系数都等于 0. 由 Parseval 等式 (15.22) 即有

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} \varphi^ {2} (x) \mathrm{d} x = \frac {a _ {0} ^ {2}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} ^ {2} + b _ {n} ^ {2}\right) = 0.
$$

这与假设 $\int_{-\pi}^{\pi}\varphi^2 (x)\mathrm{d}x\neq 0$ 矛盾.

注1 完备性概念也来自于日常的二维平面和三维空间. 例如, 在三维空间中两个正交向量组成的向量系是不完备的, 但三个两两正交的向量组成的向量系则是完备的.

注2 由此又可以得到惟一性定理 (即命题15.2.3) 的一个新证明. 因为对 $[- \pi, \pi]$ 上的连续函数 $\varphi$ 来说, 从 $\int_{-\pi}^{\pi} \varphi^2 = 0$ 即可推出 $\varphi$ 恒等于0.

Parseval 等式的下列推广也很有用.

命题 15.2.7 (Parseval 等式的推广) 设 f, g 均在 $[-π, π]$ 上可积和平方可积， $\{a_{n}\}, \{b_{n}\}$ 是 f 的 Fourier 系数， $\{\alpha_{n}\}, \{\beta_{n}\}$ 是 g 的 Fourier 系数，则成立

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = \frac {a _ {0} \alpha_ {0}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} \alpha_ {n} + b _ {n} \beta_ {n}\right).\tag{15.23}
$$

证 写出 $f + g$ 和 $f - g$ 的 Parseval 等式, 相减除以 4 即得.

### 15.2.5 Fourier级数的一致收敛性

下面我们用 Parseval 等式来证明 Fourier 级数的一致收敛性定理. 其思路是: 从 (15.22) 左边的级数收敛可以推出级数 $\sum_{n=1}^{\infty} \frac{|a_n| + |b_n|}{n}$ 收敛, 然后从导函数的 Fourier 系数出发并利用命题 15.1.2.

命题 15.2.8 设 f 是以 $2\pi$ 为周期的连续函数，并且在 $[-π, π]$ 上除有限个点以外可导，又设 $f'$ (在任意补充有限个点上的值之后) 在 $[-π, π]$ 上可积和平方可积，则 f 的 Fourier 级数绝对一致收敛于 f.

证 设 $f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)$ , 则由收敛性定理知该级数处处收敛于 $f$ . 由 M-判别法可见, 只需再证明级数 $\sum_{n=1}^{\infty} a_n$ 与 $\sum_{n=1}^{\infty} b_n$ 绝对收敛.

设 $f^{\prime}\sim \frac{a_{0}^{\prime}}{2} +\sum_{n = 1}^{\infty}(a_n^\prime \cos nx + b_n^\prime \sin nx)$ ，则 $a_0^{\prime} = 0$ ，由Parseval等式有

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} (f ^ {\prime} (x)) ^ {2} \mathrm{d} x = \sum_ {n = 1} ^ {\infty} \left(a _ {n} ^ {\prime 2} + b _ {n} ^ {\prime 2}\right).
$$

可见级数 $\sum_{n=1}^{\infty} a_n'^2$ 与 $\sum_{n=1}^{\infty} b_n'^2$ 都收敛. 由命题 15.1.2 得到

$$
a _ {n} = - \frac {b _ {n} ^ {\prime}}{n}, b _ {n} = \frac {a _ {n} ^ {\prime}}{n}, n = 1, 2, \dots ,
$$

从不等式

$$
\left| a _ {n} \right| = \left| \frac {b _ {n} ^ {\prime}}{n} \right| \leqslant \frac {1}{2} \left(b _ {n} ^ {\prime 2} + \frac {1}{n ^ {2}}\right), n = 1, 2, \dots
$$

可知级数 $\sum_{n=1}^{\infty} a_n$ 绝对收敛. 同样可证级数 $\sum_{n=1}^{\infty} b_n$ 也绝对收敛.

注 由于在区间 $[- \pi, \pi]$ 上的连续周期函数可以先用分段线性连续函数一致逼近, 然后对于分段线性连续函数可以用本命题, 因此就提供了 Weierstrass 第二逼近定理的另一个证明 (参见命题 15.2.4 的注 2).

本小节当然要讨论 Fourier 级数的逐项积分与逐项微分问题. 但是这里都出现了与一般的函数项级数不同的结果. 其中逐项积分出现了令人感到意外的好结果: 不论 f 的 Fourier 级数的收敛情况如何, Fourier 级数逐项积分以后得到的级数必定收敛, 而且还是一致收敛.

命题 15.2.9 (Fourier 级数的逐项积分定理) 设 f 为周期 $2\pi$ 的函数, 在区间 $[- \pi, \pi]$ 上可积和绝对可积, 且 $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty} (a_{n} \cos nx + b_{n} \sin nx)$ , 则级数 $\sum_{n=1}^{\infty} \frac{b_{n}}{n}$ 一定收敛, 并且对于 $[- \pi, \pi]$ 中的任意 a, b 成立下列逐项积分公式:

$$
\int_ {a} ^ {b} f (t) \mathrm{d} t = \int_ {a} ^ {b} \frac {a _ {0}}{2} \mathrm{d} t + \sum_ {n = 1} ^ {\infty} \int_ {a} ^ {b} \left(a _ {n} \cos n t + b _ {n} \sin n t\right) \mathrm{d} t,\tag{15.24}
$$

对于 $a = 0, b = x$ 可以得到

$$
\int_ {0} ^ {x} \left[ f (t) - \frac {a _ {0}}{2} \right] \mathrm{d} t = \sum_ {n = 1} ^ {\infty} \frac {b _ {n}}{n} + \sum_ {n = 1} ^ {\infty} \left(- \frac {b _ {n}}{n} \cos n x + \frac {a _ {n}}{n} \sin n x\right),\tag{15.25}
$$

且其中右边为等号左边的 Fourier 级数.

证 以下只对 f 为可积和平方可积给出证明. 一般情况可见 [18, 36] 等.

这时可用推广的 Parseval 等式 (15.23). 先将它改写为

$$
\int_ {- \pi} ^ {\pi} f (x) g (x) \mathrm{d} x = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} \frac {a _ {0}}{2} g (x) \mathrm{d} x + \sum_ {n = 1} ^ {\infty} \frac {1}{\pi} \int_ {- \pi} ^ {\pi} g (x) \left(a _ {n} \cos n x + b _ {n} \sin n x\right) \mathrm{d} x.
$$

然后令

$$
g (x) = \left\{ \begin{array}{l l} 1, & x \in [ a, b ], \\ 0, & x \in [ - \pi , a) \cup (b, \pi ], \end{array} \right.
$$

代入即得所求的(15.24). 由于级数 $\sum_{n=1}^{\infty} \frac{|a_n| + |b_n|}{n}$ 收敛, 因此其他结论显然成立, 而且最后的Fourier级数还是一致收敛的. □

注 由 Fourier 级数的逐项积分定理可知: 一个三角级数 $a_0 + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)$ 能够是某个可积和绝对可积函数的 Fourier 级数的必要条件是 $\sum_{n=1}^{\infty} \frac{b_n}{n}$ 收敛. 因此, 例如

$$
\sum_ {n = 2} ^ {\infty} \frac {\sin n x}{\ln n}, \sum_ {n = 9} ^ {\infty} \frac {\sin n x}{\ln \ln n}
$$

之类的三角级数, 由 Dirichlet 判别法知道它们在 $(- \infty, + \infty)$ 上处处收敛, 但它们都不可能是任何可积和绝对可积函数的 Fourier 级数.

但是 Fourier 级数逐项求导定理的条件却要强得多. 如果以 $2\pi$ 为周期的函数 f 在 $(-π, π)$ 上连续可微 (这时由收敛性定理知 f 的 Fourier 级数在 $(-π, π)$ 上处处收敛于 f), 仍然不能保证 f 的 Fourier 级数逐项求导以后得到的三角级数是 $f'$ 的 Fourier 级数 (见参考题 15).

命题 15.2.10（Fourier 级数的逐项求导定理）设 f 是以 $2\pi$ 为周期的连续函数，在 $[-π, π]$ 上除了有限个点外处处可导，又设 $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty} (a_{n} \cos nx + b_{n} \sin nx)$ ， $f'$ 在 $[-π, π]$ 上分段光滑，则对一切实数 x 成立下列逐项求导公式：

$$
\frac {f ^ {\prime} \left(x ^ {+}\right) - f ^ {\prime} \left(x ^ {-}\right)}{2} = \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x + b _ {n} \sin n x\right) ^ {\prime} = \sum_ {n = 1} ^ {\infty} \left(n b _ {n} \cos n x - n a _ {n} \sin n x\right).
$$

注 在命题 15.1.2 中已经证明, 只要 f 为周期 $2\pi$ 的连续函数, 则在 f 与 $f'$ 的两个 Fourier 级数之间就有逐项求导关系. 那时并不考虑收敛性, 证明也很简单, 但所得的结果不能称为逐项微分定理. 现在有了 $f'$ 分段光滑条件之后, 就知道求导后的 Fourier 级数收敛于 $[f'(x^{+}) + f'(x^{-})]/2$ . 如果 $f'$ 连续, 则级数就处处收敛于导函数 $f'$ . 若对 f 加更多的条件, 则 $f'$ 的 Fourier 级数可以一致收敛. 这里的情况与一般的函数项级数的逐项微分定理也是很不相同的.

小结 从本小节可以知道, 在一致收敛性、逐项求积和逐项求导方面, Fourier 级数与幂级数完全不同. 又从 Fourier 级数和三角级数之间的关系来看, 也与 Taylor 级数和幂级数之间的关系完全不同 (参见命题 14.4.2).

### 15.2.6 例题

Fourier 级数展开和 Parseval 等式在求级数和中常有应用. 下面是几个例子.

例题15.2.2 求级数 $\sum_{n=1}^{\infty} \frac{1}{n^4}$ 与 $\sum_{n=1}^{\infty} \frac{1}{n^6}$ 的和.

解 由(15.13)以及收敛性定理, 我们有

$$
x ^ {2} = \frac {\pi^ {2}}{3} + 4 \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n}}{n ^ {2}} \cos n x, x \in [ - \pi , \pi ],
$$

用 $x = \pi$ 代入就得到 $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$ . 然后利用

$$
a _ {0} = \frac {2 \pi^ {2}}{3}, a _ {n} = \frac {4 \cdot (- 1) ^ {n}}{n ^ {2}}, b _ {n} = 0, n = 1, 2, \dots ,
$$

由 Parseval 等式, 就得到

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} x ^ {4} \mathrm{d} x = \frac {1}{2} \left(\frac {2 \pi^ {2}}{3}\right) ^ {2} + \sum_ {n = 1} ^ {\infty} \frac {1 6}{n ^ {4}}.
$$

由此解得

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {4}} = \frac {\pi^ {4}}{9 0}.
$$

同样，对 $f(x) = x^3$ ， $x\in (-\pi ,\pi)$ 的Fourier展开式

$$
x ^ {3} = 2 \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} (6 - \pi^ {2} n ^ {2}) \frac {\sin n x}{n ^ {3}}, x \in (- \pi , \pi)
$$

应用 Parseval 等式, 可以得到

$$
\frac {1}{\pi} \int_ {- \pi} ^ {\pi} x ^ {6} \mathrm{d} x = \sum_ {n = 1} ^ {\infty} \left[ 2 \cdot (- 1) ^ {n} (6 - \pi^ {2} n ^ {2}) \frac {1}{n ^ {3}} \right] ^ {2},
$$

整理后得到

$$
\frac {2}{7} \pi^ {6} = \sum_ {n = 1} ^ {\infty} \left(\frac {4 \pi^ {4}}{n ^ {2}} - \frac {4 8 \pi^ {2}}{n ^ {4}} + \frac {1 4 4}{n ^ {6}}\right),
$$

再利用 $\sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{\pi^4}{90}$ 与 $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$ , 即可解得 $\sum_{n=1}^{\infty} \frac{1}{n^6} = \frac{\pi^6}{945}$ .

例题15.1.2之解3在学了Fourier级数的逐项积分定理后可以如下求出在区间 $(- \pi, \pi)$ 上函数 $x^3$ 的Fourier级数，并同时确定其收敛性.

第一步与过去一样，先求出(15.12).然后逐项积分得到等式

$$
x ^ {2} = \sum_ {n = 1} ^ {\infty} (- 1) ^ {n - 1} \frac {4}{n ^ {2}} (1 - \cos n x),
$$

其中的常数项虽是个无穷级数，但可以不必去管它，只需直接按照公式(15.1) $(n = 0)$ 就可以得到所要的常数项 $\frac{1}{2\pi}\int_{-\pi}^{\pi}x^{2}\mathrm{d}x = \frac{\pi^{2}}{3}$ ，因此就得到Fourier余弦级数展开式

$$
x ^ {2} = \frac {\pi^ {2}}{3} + 4 \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n}}{n ^ {2}} \cos n x.
$$

再用逐项积分方法得到等式

$$
x ^ {3} = \pi^ {2} x + 1 2 \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n}}{n ^ {3}} \sin n x.
$$

在第一项中将 x 用它的 Fourier 级数代替, 就得到与解 1 相同的答案.

下面将对于系数单调的 Fourier 级数作讨论, 其中的方法和结果都很有意义, 并与过去的许多讨论有联系. 这里的材料见 [18] 第三卷的 692 小节.

例题15.2.3设数列 $\{b_n\}$ 单调收敛于0，且已知级数 $\sum_{n = 1}^{\infty}\frac{b_n}{n}$ 收敛，则函数 $f(x) = \sum_{n = 1}^{\infty}b_n\sin nx$ 于区间 $[- \pi ,\pi ]$ 上可积和绝对可积.

证 从函数项级数的 Dirichlet 一致收敛判别法知道 $f$ 在 $x \neq 0$ 时连续, 因此只有点 $x = 0$ 可能是瑕点. 以下只需要证明: 当点 $x = 0$ 为瑕点时 $|f|$ 在 $[0, \pi]$ 上广义可积. 为此将下列积分作分拆:

$$
\int_ {\pi / (n + 1)} ^ {\pi} | f (x) | \mathrm{d} x = \sum_ {k = 1} ^ {n} \int_ {\pi / (k + 1)} ^ {\pi / k} | f (x) | \mathrm{d} x.
$$

对于 $\pi /(k + 1)\leqslant x\leqslant \pi /k$ 时的函数 $f$ 作估计如下：

$$
| f (x) | \leqslant \left| \sum_ {i = 1} ^ {k} b _ {i} \sin i x \right| + \left| \sum_ {i = k + 1} ^ {\infty} b _ {i} \sin i x \right|,
$$

其中右边第一项不超过 $S_{k}=b_{1}+b_{2}+\cdots+b_{k}$ ，而第二项可利用 $\{b_{n}\}$ 非负单调减少的条件和 Abel 变换 (13.22) 估计如下 (参见例题 14.1.8):

$$
\left| \sum_ {i = k + 1} ^ {\infty} b _ {i} \sin i x \right| \leqslant \frac {b _ {k + 1}}{| \sin x / 2 |} \leqslant \frac {b _ {k + 1}}{| x / \pi |} \leqslant (k + 1) b _ {k + 1} \leqslant (k + 1) b _ {k},
$$

因此就有

$$
\int_ {\pi / (k + 1)} ^ {\pi / k} | f (x) | \mathrm{d} x \leqslant \left[ S _ {k} + (k + 1) b _ {k} \right] \cdot \frac {\pi}{k (k + 1)} = \pi \left[ \frac {S _ {k}}{k (k + 1)} + \frac {b _ {k}}{k} \right].
$$

令 $k=1,2,\cdots,n$ 代入并相加，就得到

$$
\int_ {\pi / (n + 1)} ^ {\pi} | f (x) | \mathrm{d} x \leqslant \pi \sum_ {k = 1} ^ {n} \frac {S _ {k}}{k (k + 1)} + \pi \sum_ {k = 1} ^ {n} \frac {b _ {k}}{k}.
$$

对右边第一项利用例题 13.2.7 中的类似方法可以得到

$$
\sum_ {k = 1} ^ {n} \frac {S _ {k}}{k (k + 1)} = \sum_ {k = 1} ^ {n} \frac {1}{k (k + 1)} \sum_ {i = 1} ^ {k} b _ {i} = \sum_ {i = 1} ^ {n} b _ {i} \sum_ {k = i} ^ {n} \frac {1}{k (k + 1)} = \sum_ {i = 1} ^ {n} \frac {b _ {i}}{i} - \frac {S _ {n}}{n + 1},
$$

从 $b_{n}\rightarrow 0$ （用Cauchy命题）可见右边第二项当 $n\to \infty$ 时也趋于0，因此有

$$
\sum_ {n = 1} ^ {\infty} \frac {S _ {n}}{n (n + 1)} = \sum_ {n = 1} ^ {\infty} \frac {b _ {n}}{n},
$$

并最后估计得到

$$
\int_ {\pi / (n + 1)} ^ {\pi} | f (x) | \mathrm{d} x \leqslant 2 \pi \sum_ {n = 1} ^ {\infty} \frac {b _ {n}}{n},
$$

因此积分 $\int_0^\pi |f(x)|\mathrm{d}x$ 收敛.

例题15.2.4设数列 $\{b_n\}$ 单调收敛于0，且已知 $f(x) = \sum_{n = 1}^{\infty}b_n\sin nx$ 于 $[- \pi ,\pi ]$ 上可积，则 $\sum_{n = 1}^{\infty}b_n\sin nx$ 是 $f$ 的Fourier级数.

证 由于 f 于 $x \neq 0$ 时连续，只需讨论 x = 0 为瑕点时的情况。利用广义积分的 Abel 判别法可知积分 $\int_{-\pi}^{\pi} f(x) \cos nx \, dx$ 和 $\int_{-\pi}^{\pi} f(x) \sin nx \, dx$ 均收敛。由于 f 为奇函数，因此就得到 $a_n = 0, n = 0, 1, \cdots$ 。以下只要证明 $b_n = 2 \int_{0}^{\pi} f(x) \sin nx \, dx, n = 1, 2, \cdots$ 。

写出

$$
2 \int_ {0} ^ {\pi} f (x) \sin n x \mathrm{d} x = 2 \int_ {0} ^ {\pi} \left(\sum_ {k = 1} ^ {\infty} b _ {k} \sin k x \sin n x\right) \mathrm{d} x,
$$

从 $\{b_k\}$ 单调收敛于0，又用三角变换和Jordan不等式可知对任意 $m\geqslant 1$ 有

$$
\left| \sum_ {k = 1} ^ {m} \sin k x \sin n x \right| \leqslant \left| \frac {\sin n x}{\sin (x / 2)} \right| \leqslant \left| \frac {n x}{x / \pi} \right| = n \pi ,
$$

因此从Dirichlet一致收敛判别法知道积分号下的级数在 $[0,\pi ]$ 上一致收敛，用逐项积分计算就可以得到所求的结果. □

非 Fourier 级数的三角级数 合并以上两个结果就可以知道当 $\{b_{n}\}$ 单调趋于 0 时，处处收敛的三角级数 $\sum_{n=1}^{\infty} b_{n} \sin nx$ 是其和函数 f 的 Fourier 级数的充分必要条件是数项级数 $\sum_{n=1}^{\infty} \frac{b_{n}}{n}$ 收敛 $^{①}$ . 因此在 Bessel 不等式 (即命题 15.1.7) 后的注 2 中举出的例子 $\sum_{n=1}^{\infty} \frac{\sin nx}{n^{p}} (0 < p \leqslant \frac{1}{2})$ 仍然是其和函数 f 的 Fourier 级数，当然 f 不平方可积. 不难证明该注中的另一个例子也是如此 $^{②}$ .

但在命题15.2.9后所举的例子，如 $\sum_{n=2}^{\infty} \frac{\sin nx}{\ln n}$ 等，则确实不是Fourier级数，而且它的和函数一定不是可积和绝对可积函数.

关于三角级数何时必为Fourier级数有下列著名结果，上面的例题15.2.4只是它的一个特例.

命题 15.2.11 (Du Bois-Reymond 定理) 在下列两种情况下的三角级数必是其和函数的 Fourier 级数: (1) 在区间 $[-π, π]$ 上处处收敛的三角级数的和函数在 $[-π, π]$ 上常义可积; (2) 在区间 $[-π, π]$ 上除有限个点外收敛的三角级数, 其和函数在 $[-π, π]$ 上绝对可积.

在三角级数展开方面的重要结果还有展开的惟一性定理 (请与命题 15.2.3 在条件和结论两个方面进行比较).

命题 15.2.12 (Cantor 定理) 如果有两个三角级数 $\frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n}\cos nx + b_{n}\sin nx)$ 和 $\frac{\alpha_{0}}{2} + \sum_{n=1}^{\infty}(\alpha_{n}\cos nx + \beta_{n}\sin nx)$ 在 $[-π, π]$ 上收敛于同一个函数，则这两个三角级数必恒同： $a_{n} = \alpha_{n} (n = 0, 1, \cdots)$ ， $b_{n} = \beta_{n} (n = 1, 2, \cdots)$ .

小结 虽然我们不能在这里证明这些定理, 但还应当理解它们的重要意义 (证明见 [18] 第三卷的 750-751 小节): 这就是在理论上证明了, 在三角级数展开式中我们所见所用的绝大多数情况都是 Fourier 级数展开式.

### 15.2.7 练习题

1. 定义函数 $f(x) = \begin{cases} x, & x \in \left(0, \frac{\pi}{2}\right), \\ \frac{\pi}{4}, & x = \frac{\pi}{2}, \\ x - \frac{\pi}{2}, & x \in \left(\frac{\pi}{2}, \pi\right), \end{cases}$ 将 $f$ 展开为余弦级数，并求数项级数 $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{2n-1}$ 的值.

2. 设对于 a > 0 有函数 $f(x) = \begin{cases} x, & x \in \left[0, \frac{a}{2}\right], \\ a - x, & x \in \left(\frac{a}{2}, a\right], \end{cases}$ 将 f 展开为: (1) 余弦级数,
(2) 正弦级数.

3. 设 $\alpha$ 为非整数, 利用 $f(x) = \cos \alpha x, x \in [-\pi, \pi]$ 的 Fourier 展开式, 证明下列关于余切函数和余割函数的部分分式展开式:

$$
\begin{array}{l} \cot x = \frac {1}{x} + \sum_ {n = 1} ^ {\infty} \left(\frac {1}{x - n \pi} + \frac {1}{x + n \pi}\right) = \frac {1}{x} + \sum_ {n = 1} ^ {\infty} \frac {2 x}{x ^ {2} - n ^ {2} \pi^ {2}}, \\ \csc x = \frac {1}{x} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} \left(\frac {1}{x - n \pi} + \frac {1}{x + n \pi}\right) = \frac {1}{x} + \sum_ {n = 1} ^ {\infty} (- 1) ^ {n} \frac {2 x}{x ^ {2} - n ^ {2} \pi^ {2}}, \end{array}
$$

且求出级数 $\sum_{n=1}^{\infty} \frac{1}{n^2 - \alpha^2}$ 的和.

4. 将下列函数在 $[- \pi, \pi]$ 上展开为 Fourier 级数:

(1) $f(x)=|\sin x|$ ; (2) $f(x)=\left\{\begin{aligned}&ax,&x\in[-\pi,0),\\&bx,&x\in[0,\pi].\end{aligned}\right.$ 

5. 将下列函数展开为正弦级数:

(1) $f(x) = \mathrm{e}^{-2x}, x \in [0, \pi]$ ; (2) $f(x) = \begin{cases} \cos \frac{\pi x}{2}, & x \in [0, 1), \\ 0, & x \in [1, 2]. \end{cases}$ 

6. 将下列函数展开为余弦级数:

(1) $f(x) = x(\pi - x), x \in [0, \pi]$ ; (2) $f(x) = \begin{cases} \sin 2x, & x \in \left[0, \frac{\pi}{4}\right), \\ 1, & x \in \left[\frac{\pi}{4}, \frac{\pi}{2}\right]. \end{cases}$ 

7. 设函数

$$
f (x) = \left\{ \begin{array}{l l} \pi - x, & 0 <   x \leqslant \pi , \\ 0, & x = 0, \\ - \pi - x, & - \pi <   x <   0, \end{array} \right.
$$

(1) 求 $f$ 的Fourier展开式;

(2) 讨论 $f$ 的 Fourier 级数在 $(- \pi, \pi]$ 上是否收敛于 $f$ , 是否一致收敛?

8. 设 $f$ 在 $[- \pi, \pi]$ 上可积和绝对可积, 证明: $\forall \varepsilon > 0$ , 存在三角多项式 $P_{n}(x) = \sum_{k=0}^{n} (A_{k} \cos kx + B_{k} \sin kx)$ , 使

$$
\int_ {- \pi} ^ {\pi} | f (x) - P _ {n} (x) | \mathrm{d} x <   \varepsilon .
$$

9. 设 f 为周期 $2\pi$ 的连续函数, 且已知 $f(x) \sim \frac{a_{0}}{2} + \sum_{n=1}^{\infty} (a_{n} \cos nx + b_{n} \sin nx)$ , 证明: 若右边的级数一致收敛, 则其和函数一定就是 f.

10. 设 $0 < a < \pi$ , 定义函数

$$
f (x) = \left\{ \begin{array}{l l} 1, & | x | <   a, \\ 0, & a \leqslant | x | <   \pi . \end{array} \right.
$$

利用 f 的 Parseval 等式, 求下列级数的和: $\sum_{n=1}^{\infty}\frac{\sin^{2}na}{n^{2}}$ , $\sum_{n=1}^{\infty}\frac{\cos^{2}na}{n^{2}}$ .

## §15.3 对于教学的建议

### 15.3.1 学习要点

1. Fourier 级数与幂级数是两类最重要的函数项级数。如果说幂级数的通项是从计算角度来看最为简单的单项式，则 Fourier 级数的通项就是最简单的周期函数——正弦函数与余弦函数. 将一般的周期函数展开为 Fourier 级数具有重要的理论和应用价值. 在许多具体的应用领域中 Fourier 级数的各项均有物理意义, 而幂级数则不是如此.

2. 一个函数的 Fourier 级数并不一定收敛, 也不一定收敛于这个函数本身. 但与 Taylor 级数相比, Fourier 级数的收敛条件还是很宽的. 可以说 Fourier 级数是至今为止我们所遇到的最优美的一类无穷级数, 这可以从下列几个方面看出: 局部性定理、收敛条件、逐项积分与逐项求导的条件、Fourier 展开式的最佳均方逼近性质、三角函数系可以构成无穷维空间的规范正交基等等.

3. 一个具体给定的周期函数的 Fourier 系数的计算, 特别是在函数的周期为 $2l$ ( $l \neq \pi$ ) 的情况下, 是比较费力的事. 在习题课上, 应当举出计算给定函数的 Fourier 系数的例题, 结合一些计算技巧, 耐心地将 Fourier 系数计算出来. 在练习题中, 也应该含有这方面的习题. 然而, 这方面的例题与习题都不宜太多, 因为 Fourier 级数理论的核心部分是 Fourier 级数的收敛性定理、Parseval 等式与一些相关结果的证明或应用, 如果让学生觉得 Fourier 级数理论主要不过是按公式计算 Fourier 展开式, 那就不能算是成功的教学.

4. Bessel 不等式和 Parseval 等式体现了周期函数的内在性质, 在分析估计中非常有用. 本章在这方面给出了较多的介绍, 还应当指出 Parseval 等式在证明 Wirtinger (维尔丁格) 不等式 (见参考题 8) 中的妙用.

### 15.3.2 参考题

1. 设 f 是以 $2\pi$ 为周期的函数且在 $(0,2\pi)$ 上可积和绝对可积, 证明:

(1) 如果 f 在 $(0,2\pi)$ 上单调减少，则 $\int_{0}^{2\pi} f(x) \sin nx \, dx \geqslant 0, n = 1, 2, \cdots;$ 

(2) 设 f 在 $(0,2\pi)$ 可导且 $f'$ 在 $(0,2\pi)$ 上可积和绝对可积, 如果 $f'$ 在 $(0,2\pi)$ 上单调增加, 则 $\int_{0}^{2\pi} f(x) \cos nx \, dx \geqslant 0, n = 1, 2, \cdots$ .

2. 设 f 为区间 $[0,2\pi]$ 上的下凸函数, 证明: $\int_{0}^{2\pi} f(x) \cos nx \, dx \geqslant 0, \forall n \geqslant 1$ .

3. 设 $f$ 是周期 $2\pi$ 的连续函数, $F_{h}(x) = \frac{1}{2h}\int_{x - h}^{x + h}f(t)\mathrm{d}t,$ 其中 $h > 0$ 

(1) 证明: $F_{h}$ 是以 $2 \pi$ 为周期的连续可微函数;

(2) 证明: $\forall \varepsilon > 0, \exists h > 0$ , 使在 $[- \pi, \pi]$ 上一致成立 $|f(x) - F_h(x)| < \varepsilon$ ;

(3) 利用命题 15.2.8 重新证明 Weierstrass 第二逼近定理;

(4) 已知 f 的 Fourier 级数, 计算 $F_{h}$ 的 Fourier 级数.

4. 设 $f$ 为周期 $2\pi$ 的连续函数, $f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)$ , 定义

$$
F (x) = \frac {1}{\pi} \int_ {- \pi} ^ {\pi} f (t) f (x + t) \mathrm{d} t.
$$

(1) 计算 $F$ 的 Fourier 系数;

(2) 证明: $F$ 的 Fourier 级数一致收敛;

(3) 由此推出 $f$ 的 Parseval 等式.

5. (1) 利用 $\sum_{k=1}^{n} \frac{\sin kx}{k} = \sum_{k=1}^{n} \int_{0}^{x} \cos kt \, \mathrm{d}t$ 求 $\sum_{n=1}^{\infty} \frac{\sin nx}{n}$ 之和;

(2) 用类似的方法求 $\sum_{n=1}^{\infty} \frac{\sin(2n-1)x}{2n-1}$ 之和.

6. 从上题的 (1) 所得的结果出发, 直接证明下列展开式成立:

(1) $\sum_{k=1}^{\infty} \frac{\sin 2kx}{2k} = \frac{\pi}{4} - \frac{x}{2}, 0 < x < \pi;$ 

$$
\sum_ {k = 1} ^ {\infty} \frac {\sin (2 k - 1) x}{2 k - 1} = \frac {\pi}{4}, 0 <   x <   \pi ; \tag {2}
$$

$$
\sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1}}{n} \sin n x = \frac {x}{2}, | x | <   \pi ; \tag {3}
$$

(4) $x^{2} = \frac{\pi^{2}}{3} + 4\sum_{n = 1}^{\infty}\frac{(-1)^{n}}{n^{2}}\cos nx,|x| <   \pi ;$ 

(5) $x = \frac{\pi}{2} -\frac{4}{\pi}\sum_{k = 1}^{\infty}\frac{\cos(2k - 1)x}{(2k - 1)^{2}},0\leqslant x\leqslant \pi ;$ 

$$
\frac {3 x ^ {2} - 6 \pi x + 2 \pi^ {2}}{1 2} = \sum_ {n = 1} ^ {\infty} \frac {\cos n x}{n ^ {2}}, 0 \leqslant x \leqslant \pi . \tag {6}
$$

7. (Steklov (斯捷克洛夫) 不等式) 设连续函数 $f$ 在 $[0, \pi]$ 上分段可导, 且 $f'$ 在 $[0, \pi]$ 上可积和平方可积, 证明: 只要条件 (1) $\int_{0}^{\pi} f = 0$ 和 (2) $f(0) = f(\pi) = 0$ 之中有一个满足, 就成立不等式 $\int_0^\pi f'^2(x)\mathrm{d}x\geqslant \int_0^\pi f^2 (x)\mathrm{d}x,$ 且其中等号成立的条件为 (1) $f(x) = A\cos x$ , (2) $f(x) = B\sin x$ .

8. (Wirtinger 不等式) 设连续函数 $f$ 在 $[- \pi, \pi]$ 上分段可导, $f(-\pi) = f(\pi)$ , 且 $f'$ 在 $[- \pi, \pi]$ 上可积和平方可积, 又 $\int_{-\pi}^{\pi} f(x) \mathrm{d}x = 0$ , 证明: $\int_{-\pi}^{\pi} f'^2(x) \mathrm{d}x \geqslant \int_{-\pi}^{\pi} f^2(x) \mathrm{d}x,$ 且仅当 $f(x) = A \cos x + B \sin x$ 时等号成立.

9. 设周期 $2\pi$ 的函数 $f$ 及其导函数 $f'$ 均分段连续, 证明: $f$ 的 Fourier 级数在不含有 $f$ 的间断点的任何闭区间上一致收敛.

10. 证明: (1) $\sum_{n=1}^{\infty} \frac{\sin n}{n} = \sum_{n=1}^{\infty} \frac{\sin^{2} n}{n^{2}} = \frac{\pi - 1}{2}$ ; (2) $\sum_{n=1}^{\infty} \frac{\sin^{2} n}{n^{4}} = \frac{(\pi - 1)^{2}}{6}$ .

11. 设函数 $f$ 是以 $2\pi$ 为周期的连续函数, 不恒等于 0, 且

$$
\int_ {- \pi} ^ {\pi} f (x) \sin k x \mathrm{d} x = \int_ {- \pi} ^ {\pi} f (x) \cos k x \mathrm{d} x = 0, k = 0, 1, \dots , n.
$$

证明: f 在任何长度大于 $2\pi$ 的区间上至少改变符号 $2n + 2$ 次.

12. 设 $f$ 是在区间 $[0, +\infty)$ 上的单调函数，且 $f(+\infty) = 0$ ，证明：

$$
\lim _ {n \rightarrow \infty} \int_ {0} ^ {+ \infty} f (x) \sin n x \mathrm{d} x = 0.
$$

13. 设 $f(x) = \sum_{n=1}^{\infty} n^{2} \mathrm{e}^{-n} \sin nx$ ，证明： $\max_{0 \leqslant x \leqslant 2\pi} \{|f(x)|\} \geqslant \frac{2}{\pi e}$ .

14. 对于收敛于 0 的给定正数数列 $\{\varepsilon_n\}$ , 证明: 存在连续函数 $f$ , 使得 $f$ 的 Fourier 系数 $\{a_n\}, \{b_n\}$ 对于无限多个 $n$ 满足不等式

$$
\left| a _ {n} \right| + \left| b _ {n} \right| > \varepsilon_ {n}.
$$

15. 设 $f \in C[-\pi, \pi]$ ，且其导函数 $f'$ 可积和绝对可积，若有

$$
f (x) \sim \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x + b _ {n} \sin n x\right),
$$

证明：

$$
f ^ {\prime} (x) \sim \frac {c}{2} + \sum_ {n = 1} ^ {\infty} [ (n b _ {n} + (- 1) ^ {n} c) \cos n x - n a _ {n} \sin n x ],
$$

其中 $c = [f(\pi) - f(-\pi)] / \pi$ ，且有 $c = \lim_{n\to \infty}[-1)^{n - 1}nb_n]$ 

16. 设三角级数 $\frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)$ 有极限 $c = \lim_{n \to \infty} [(-1)^{n-1} nb_n]$ , 又有可积和绝对可积函数 $\varphi$ 满足条件

$$
\varphi (x) \sim \frac {c}{2} + \sum_ {n = 1} ^ {\infty} [ (n b _ {n} + (- 1) ^ {n} c) \cos n x - n a _ {n} \sin n x ],
$$

证明：上述三角级数处处收敛，为其和函数 $f$ 的Fourier级数：

$$
f (x) = \frac {a _ {0}}{2} + \sum_ {n = 1} ^ {\infty} \left(a _ {n} \cos n x + b _ {n} \sin n x\right),
$$

且在 $\varphi$ 的连续点上成立 $f'(x)=\varphi(x)$ .

17. 利用上题证明: 三角级数 $\sum_{n=2}^{\infty} \frac{(-1)^n n \sin nx}{n^2 - 1}$ 是某个连续可微函数 $f$ 的 Fourier 级数, 且 $f$ 满足微分方程 $f'' + f = -\sin x$ , 并求出 $f$ .

18. 证明：在区间 $[a, b]$ 上的可积和平方可积函数空间中，由有限个函数组成的正交系不可能是完备的.

19. (de la Vallée Poussin 核) 设 $f$ 是以 $2\pi$ 为周期的连续函数, 记

$$
V _ {n} (x) = \frac {(2 n) ! !}{2 \pi (2 n - 1) ! !} \int_ {- \pi} ^ {\pi} f (t) \left(\cos \frac {t - x}{2}\right) ^ {2 n} \mathrm{d} t.
$$

证明：(1) $V_{n}(x)$ 是 $n$ 次三角多项式；(2)函数列 $\{V_n\}$ 在 $(-\infty, +\infty)$ 上一致收敛于 $f$ 

20. 证明：三角级数

$$
\cos x + \frac {\cos 2 x}{2} + \dots + \frac {\cos n x}{n} + \dots
$$

的部分和函数 $S_{n}(x)\geqslant -1$ ，并且 $\varliminf_{n\to \infty}\min_{0\leqslant x\leqslant \pi}\{S_n(x)\} = -\ln 2.$ 
