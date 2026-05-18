 ## 第二章 一元函数的连续性

本章我们主要讨论连续性的证明，连续性的应用，一致连续和函数方程等方面的内容。


 ## * §2.1 连续性的证明与应用

> [!note]
> $\varepsilon$-$\delta$ 方法是数学院系学生的重点，非数学院系学生不作太高要求。


### 一、连续性的证明

要点 要证明一个函数 $f$ 在某区间 $I$ 上连续，只要在区间里任意取定一点 $x_0\in I$，证明 $\lim_{x\to x_0}f(x)=f(x_0)$。为此，我们可以

1）利用定义，证明：$\forall\varepsilon>0$，$\exists\delta>0$，当 $|x-x_0|<\delta$ 时，有 $|f(x)-f(x_0)|<\varepsilon$；

2）利用左、右极限，证明：$f(x_0+0)=f(x_0)=f(x_0-0)$；

3）利用序列语言，证明：$\forall\{x_n\}\to x_0$，有 $f(x_n)\to f(x_0)$；

4）利用邻域语言，证明：$\forall\varepsilon>0$，$\exists\delta>0$，使得 $f((x_0-\delta,x_0+\delta))\subset(f(x_0)-\varepsilon,f(x_0)+\varepsilon)$；

5）利用连续函数的运算性质：连续函数与连续函数经过有限次 $+$、$-$、$\cdot$、$\div$（除法要求除数不为零），复合（内层函数的值域在外层函数的定义域内），仍然是连续的。

> [!example] ☆例2.1.1
> 证明 Riemann 函数
> $$
> R(x)=\begin{cases}1/q, & x=p/q\text{ 为既约分数，}q>0,\\ 0, & x\text{ 为无理数}\end{cases}
> $$
> 在无理点上连续，在有理点上间断．（浙江大学）

> [!proof]- 证明：
> **1°** 设 $x_0$ 为有理点，$x_0=p/q$（为既约分数），$q>0$，则 $R(x_0)=1/q>0$。由无理点的稠密性，存在无理点列 $\{x_n\}\to x_0$（当 $n\to\infty$ 时），但
> $$
> |R(x_n)-R(x_0)|=|0-1/q|=1/q>0 \quad (\forall n\in\mathbb{N}),
> $$
> 即 $R(x_n)\nrightarrow R(x_0)$。故 $R(x)$ 在有理点不连续。
> 
> **2°**（证明在无理点上连续．）设 $x_0\in[0,1]$ 为无理点，则 $R(x_0)=0$。
> 
> 首先，我们从 $R(x)$ 的定义可以看出，$\forall\varepsilon>0$，$R(x)\ge\varepsilon$ 的点 $x$，在 $[0,1]$ 上最多只有有限个（事实上，要 $R(x)\ge\varepsilon>0$，$x$ 必须是有理点，若 $x=p/q$，$R(p/q)=1/q\ge\varepsilon$，则 $0\le p<q\le 1/\varepsilon$。可见满足此不等式的有理数 $p/q$ 最多只有有限个）。如此，可取 $\delta>0$ 充分小，使得 $(x_0-\delta,x_0+\delta)$ 不含有 $R(x)\ge\varepsilon$ 之点，此即 $\forall x\in(x_0-\delta,x_0+\delta)$，有
> $$
> |R(x)-R(x_0)|=R(x)<\varepsilon.
> $$
> 这就证明了 $R(x)$ 在 $[0,1]$ 内的无理点上连续。又因为 $R(x)$ 以 1 为周期，①所以 $R(x)$ 在一切无理点上都连续。

> [!note] 注
> $R(0)=1$，因为要使 $0=p/q$ 为既约分数，且 $q>0$，故只可能 $q=1$，$p=0$。

> [!example] ☆例2.1.2
> 设 $f(x)$ 在 $[a,b]$ 上连续，证明函数
> $$
> M(x)=\sup_{a\le t\le x}f(t), \quad m(x)=\inf_{a\le t\le x}f(t)
> $$
> 在 $[a,b]$ 上连续．（湖北大学）

（这里只就 $M(x)$ 进行证明，$m(x)$ 的连续性证明留作练习．）

> [!proof]- 证明：
> 根据连续函数在闭区间上必达上、下确界的性质，$M(x)$ 在 $[a,b]$ 上处处有定义。又因上确界随取值区间扩大而增大，知 $M(x)\nearrow$。故每点处的单侧极限存在．$\forall x_0\in[a,b]$，我们只要证明下面左、右等式分别在 $(a,b]$、$[a,b)$ 成立即可：
> $$
> M(x_0-0)=M(x_0)=M(x_0+0). \tag{1}
> $$
> 
> 由 $M(x)$ 单调性，有 $M(x_0-0)\le M(x_0)$。又因 $\forall x\in[a,x_0]$，有 $f(x)\le\sup_{a\le t\le x}f(t)=M(x)\le M(x_0-0)$，所以 $M(x_0)=\sup_{a\le t\le x_0}f(t)\le M(x_0-0)$，故（1）式左边等式成立。
> 
> 下面用反证法证（1）中右边等式．因 $M(x)$ 单调，$M(x_0)\le M(x_0+0)$。假若 $M(x_0+0)>M(x_0)$，则可取充分小的 $\varepsilon_0>0$，使得 $M(x_0+0)>M(x_0)+\varepsilon_0$。于是 $\forall x>x_0$，有
> $$
> \sup_{a\le t\le x}f(t)=M(x)\ge M(x_0+0)>M(x_0)+\varepsilon_0.
> $$
> 由确界定义，$\exists t\in[a,x]$，使得
> $$
> f(t)>M(x_0)+\varepsilon_0\ge f(x_0), \tag{2}
> $$
> 但在 $[a,x_0]$ 上，$f(x)\le M(x_0)$，所以式（2）中的 $t\in(x_0,x]$。这便与 $f(x)$ 的连续性矛盾．证毕。

> [!example] 例2.1.3
> 设 $f(x)$ 在 $(0,1)$ 内有定义，且函数 $e^xf(x)$ 与 $e^{-x}f(x)$ 在 $(0,1)$ 内都是单调不减的．试证：$f(x)$ 在 $(0,1)$ 内连续．（北京师范大学）

> [!proof]- 证明：
> **1°** 因 $e^{-x}f(x)\nearrow$，所以 $x>x_0$ 时，有 $e^{-x}f(x)\ge e^{-x_0}f(x_0)$，$e^{x}f(x_0)\ge e^{x_0}f(x)$，
> $$
> f(x_0)\ge f(x). \tag{1}
> $$
> 此即表明 $f(x)\searrow$。所以 $\forall x_0$，$f(x_0+)$，$f(x_0-)$ 存在。
> 
> **2°** 由 $e^xf(x)\nearrow$ 知：$x>x_0$ 时 $e^xf(x)\ge e^{x_0}f(x_0)$。令 $x\to x_0^+$，得 $e^{x_0}f(x_0+)\ge e^{x_0}f(x_0)$，
> $$
> f(x_0+)\ge f(x_0). \tag{2}
> $$
> 
> **3°** 在式（1）中，令 $x\to x_0^+$，得
> $$
> f(x_0)\ge f(x_0+). \tag{3}
> $$
> 
> 式（2）和（3）表明 $f(x_0)=f(x_0+)$。类似可证 $f(x_0-)=f(x_0)$。从而 $f(x)$ 在 $x_0$ 处连续。
> 
> 由 $x_0$ 的任意性，知 $f(x)$ 在 $(0,1)$ 内处处连续。

> [!example] * 例2.1.4
> 设 $f(x)$ 在 $(-\infty,+\infty)$ 内有定义，且
> 
> i）具有介值性（即：若 $f(x_1)<\mu<f(x_2)$，则 $\exists\xi\in(x_1,x_2)$，使得 $f(\xi)=\mu$）；
> 
> ii）对任意有理数 $r$，集合 $\{x:f(x)=r\}$ 为闭集。
> 
> 试证：$f(x)$ 在 $(-\infty,+\infty)$ 上连续。

> [!proof]- 证明：
> （反证法）若 $f$ 在某一点 $x_0$ 处不连续，则 $\exists\varepsilon_0>0$，使得 $\forall 1/n>0$，$\exists x_n$，虽然
> $$
> |x_n-x_0|<1/n, \quad \text{但} \quad |f(x_n)-f(x_0)|\ge\varepsilon_0.
> $$
> 即 $\{x_n\}\to x_0$，但 $\{f(x_n)\}$ 在 $(f(x_0)-\varepsilon_0,f(x_0)+\varepsilon_0)$ 之外。从而在 $(f(x_0)-\varepsilon_0,f(x_0)+\varepsilon_0)$ 之外至少一侧（例如右侧）含有 $\{f(x_{n_k})\}$ 的无穷多项（如图2.1.1所示）：
> $$
> f(x_{n_k})>f(x_0)+\varepsilon_0 \quad (k=1,2,\ldots).
> $$
> 
> 在 $(f(x_0),f(x_0)+\varepsilon_0)$ 内任取一有理数 $r$：
> $$
> f(x_0)<r<f(x_0)+\varepsilon_0<f(x_{n_k}).
> $$
> 
> 由介值性条件，对每一个 $x_{n_k}$，存在 $\xi_k$ 位于 $x_0$ 与 $x_{n_k}$ 之间，使得 $f(\xi_k)=r$（$k=1,2,\ldots$）。
> 
> 因为 $x_{n_k}\to x_0$，所以 $\xi_k\to x_0$（当 $k\to\infty$ 时）。这表明 $x_0$ 是 $\{x:f(x)=r\}$ 的一个聚点。由已知条件（2），知 $x_0\in\{x|f(x)=r\}$，即 $f(x_0)=r$，与 $f(x_0)<r$ 矛盾，证毕。

> [!example] * 例2.1.5
> 设函数 $y=f(x)$ 在 $(a,b)$ 内有定义，具有介值性，并且是一对一的（即若 $x_1\neq x_2$，则必有 $f(x_1)\neq f(x_2)$）．试证：
> 
> 1）$f(x)$ 是严格单调的，值域为某个开区间 $J$；
> 
> 2）$f^{-1}(y)$ 在 $J$ 内单调，而且也有介值性；
> 
> 3）$f(x)$，$f^{-1}(y)$ 连续。

> [!proof]- 证明：
> **1）** 由 $f$ 是一对一的，假若 $f$ 不严格单调，则必 $\exists x_1<x_2<x_3$，使得
> $$
> f(x_1)<f(x_2), \quad f(x_2)>f(x_3)
> $$
> 或
> $$
> f(x_1)>f(x_2), \quad f(x_2)<f(x_3).
> $$
> 
> 下面只就前一种情况进行讨论，后一种情况类似可证．任取一数 $\mu$，使得 $\max\{f(x_1),f(x_3)\}<\mu<f(x_2)$。由介值性知：$\exists\xi_1\in(x_1,x_2)$，$\xi_2\in(x_2,x_3)$，使得
> $$
> f(\xi_1)=\mu=f(\xi_2),
> $$
> 如图2.1.2．这就和 $f$ 是一对一的条件矛盾，故 $f$ 只能严格单调．为了确定起见，下面不妨假设 $f$ 严 $\nearrow$。由介值性，显然 $f$ 的值必填满某区间，（可以为无穷区间，但必为开区间！）记为 $J$。
> 
> **2）** 因 $f$ 严 $\nearrow$，故 $f^{-1}$ 亦严 $\nearrow$（不然 $\exists y_1<y_2$，使得 $f^{-1}(y_1)\ge f^{-1}(y_2)$，则 $y_1=f[f^{-1}(y_1)]\ge f[f^{-1}(y_2)]=y_2$，矛盾）．$f^{-1}$ 的介值性明显（因 $\forall f^{-1}(y_1)<\xi<f^{-1}(y_2)$，（根据 $f\nearrow$）有 $y_1=f[f^{-1}(y_1)]<f(\xi)<f[f^{-1}(y_2)]=y_2$。记 $\mu=f(\xi)$，则 $f^{-1}(\mu)=\xi$。这即表明，对于任意两值 $f^{-1}(y_1)$ 与 $f^{-1}(y_2)$ 之间的每个值 $\xi$，必存在 $\mu=f(\xi)$ 位于 $y_1$ 与 $y_2$ 之间，使得 $f^{-1}(\mu)=\xi$。
> 
> **3）**（$f$ 的连续性）如图2.1.3，
> 
> $\forall x_0\in(a,b)$，$\forall$ 邻域 $(f(x_0)-\varepsilon,f(x_0)+\varepsilon)=U$
> 
> （因 $f$ 的值域为开区间，故不妨假设 $(f(x_0)-\varepsilon,f(x_0)+\varepsilon)\subset J$）．因 $f^{-1}$ 严 $\nearrow$，所以
> $$
> f^{-1}[f(x_0)-\varepsilon]<x_0<f^{-1}[f(x_0)+\varepsilon].
> $$
> 
> 取 $\delta=\min\{x_0-f^{-1}[f(x_0)-\varepsilon],f^{-1}[f(x_0)+\varepsilon]-x_0\}$，记 $V=(x_0-\delta,x_0+\delta)$，由 $f$ 的单调性，知 $f(V)\subset U$。所以，$f$ 在 $(a,b)$ 上连续。
> 
> 类似可证 $f^{-1}(y)$ 在 $J$ 内连续。

> [!example] * 例2.1.6
> 证明定理：$f(x)$ 在实轴 $X$ 上连续 $\Leftrightarrow$ 任何开集的逆像仍为开集（即：设 $O$ 为 $Y$ 轴上的开集，则 $f^{-1}(O)\equiv\{x|f(x)\in O\}$ 为 $X$ 轴上的开集①。

> [!proof]- 证明：
> **1°**（$\Rightarrow$）要证 $f^{-1}(O)$ 为 $X$ 轴上的开集，即要证明：$\forall x_0\in f^{-1}(O)$，$\exists\delta>0$ 使
> $$
> (x_0-\delta,x_0+\delta)\subset f^{-1}(O). \tag{1}
> $$
> 
> 由 $x_0\in f^{-1}(O)$，知 $y_0=f(x_0)\in O$。既然 $O$ 为开集，所以 $\exists\varepsilon>0$，使得
> $$
> (f(x_0)-\varepsilon,f(x_0)+\varepsilon)=(y_0-\varepsilon,y_0+\varepsilon)\subset O. \tag{2}
> $$
> 
> 由于 $f$ 连续，对 $y_0$ 的邻域 $(y_0-\varepsilon,y_0+\varepsilon)$，$\exists\delta>0$，使得
> $$
> f((x_0-\delta,x_0+\delta))\subset(y_0-\varepsilon,y_0+\varepsilon)\subset O,
> $$
> 从而 $(x_0-\delta,x_0+\delta)\subset f^{-1}((y_0-\varepsilon,y_0+\varepsilon))\subset f^{-1}(O)$，故 $f^{-1}(O)$ 为开集。
> 
> **2°**（$\Leftarrow$）已知任何开集的逆像仍为开集，故 $\forall x_0\in X$，$\forall\varepsilon>0$，（设 $y_0=f(x_0)$）
> $$
> (y_0-\varepsilon,y_0+\varepsilon)\text{ 的逆像 }f^{-1}((y_0-\varepsilon,y_0+\varepsilon))\text{ 为开集}.
> $$
> 由此对于 $x_0\in f^{-1}((y_0-\varepsilon,y_0+\varepsilon))$，$\exists\delta>0$，使得 $(x_0-\delta,x_0+\delta)\subset f^{-1}((y_0-\varepsilon,y_0+\varepsilon)$。故
> $$
> f((x_0-\delta,x_0+\delta))\subset(y_0-\varepsilon,y_0+\varepsilon)=(f(x_0)-\varepsilon,f(x_0)+\varepsilon),
> $$
> 所以 $f$ 连续。

> [!remark] 评述
> 该定理具有重大意义，因为它实际上给出了连续性的另一种新的定义方式，这种方式可以摆脱 $\varepsilon$-$\delta$，利用邻域、开集的工具，建立抽象空间里的连续映射理论。这正是后来点集拓扑学的思想渊源。

> [!example] * 例2.1.7
> 设 $f(x)$ 在 $(-\infty,+\infty)$ 上有定义，证明：$f(x)$ 连续 $\Leftrightarrow$ $\forall c\in(-\infty,+\infty)$，集合 $\{x|f(x)>c\}$ 与 $\{x|f(x)<c\}$ 为开集。

> [!tip] 提示
> 必要性可利用连续函数保号性证明．（充分性）$\forall x_0\in(-\infty,+\infty)$，$\forall\varepsilon>0$，$x_0\in\{x|f(x)>f(x_0)-\varepsilon\}$ 为开集。

下面我们来讲几个利用运算性质的例题。

> [!example] ☆例2.1.8
> 1）证明：若函数 $f(x)$，$g(x)$ 连续，则函数 $\varphi(x)=\min\{f(x),g(x)\}$，$\psi(x)=\max\{f(x),g(x)\}$ 亦连续；
> 
> 2）设 $f_1(x)$，$f_2(x)$，$f_3(x)$ 在 $[a,b]$ 上连续，令函数 $f$ 的值 $f(x)$ 等于三值 $f_1(x)$，$f_2(x)$，$f_3(x)$ 中介于其他两值之间的那个值，证明 $f$ 在 $[a,b]$ 上连续；（西安电子科技大学）
> 
> 3）令
> $$
> u_n(x)=\begin{cases}-n, & \text{当 }x\le -n\text{ 时},\\ x, & \text{当 }-n<x\le n\text{ 时},\\ n, & \text{当 }x>n\text{ 时},\end{cases}
> $$
> $f(x)$ 为实函数，试证明：$f(x)$ 连续的充要条件是 $g_n(x)=u_n[f(x)]$ 对任意固定的 $n$，都是 $x$ 的连续函数．（四川大学）

> [!proof]- 证明：
> **1）**
> $$
> \varphi(x)=\frac{f(x)+g(x)-|f(x)-g(x)|}{2},
> $$
> $$
> \psi(x)=\frac{f(x)+g(x)+|f(x)-g(x)|}{2}.
> $$
> 
> **2）**
> $$
> f(x)=f_1(x)+f_2(x)+f_3(x)-\max\{f_1(x),f_2(x),f_3(x)\}-\min\{f_1(x),f_2(x),f_3(x)\}.
> $$
> 
> **3）**
> $$
> \begin{aligned}
> g_n(x)&=u_n[f(x)]\\
> &=-n+f(x)+n-\max\{-n,f(x),n\}-\min\{-n,f(x),n\}\\
> &=f(x)-\max\{f(x),n\}-\min\{f(x),-n\} \quad \text{（利用1））}\\
> &=f(x)-\frac{n+f(x)+|f(x)-n|}{2}-\frac{-n+f(x)-|n+f(x)|}{2}\\
> &=\frac{|n+f(x)|-|n-f(x)|}{2}.
> \end{aligned}
> $$
> 
> 以上由连续函数的运算性质，即知它们连续．3）的充分性留作练习。

> [!example] 例2.1.9
> 设 $f(x)$ 在 $(a,b)$ 上至多只有第一类间断点，且 $\forall x,y\in(a,b)$，
> $$
> f\left(\frac{x+y}{2}\right)\le\frac{f(x)+f(y)}{2}, \tag{1}
> $$
> 求证：$f(x)$ 在 $(a,b)$ 上连续。

> [!tip] 提示
> 在式（1）中，令 $y>x=x_0$，$y\to x_0$ 取极限；令 $y<x=x_0$，$y\to x_0$ 取极限；最后令 $x=x_0+h$，$y=x_0-h$，$h\to 0^+$ 取极限。

> [!question] 思考
> 本节开始介绍的证明连续的五种方法，在以上 9 道例题中是如何应用的？

---

① 若 $x$ 为无理数，则 $R(x+1)=R(x)=0$；又若 $x=p/q$（$p$，$q$ 为互质整数），则 $1+x=(q+p)/q$，又 $(p+q)$ 与 $q$ 为互质整数，故 $x$ 为有理数时亦有 $R(x+1)=R(x)$。总之，$R(x)$ 以 1 为周期。

① 集合 $O$ 被称为开集，指它的每个点皆为内点，即 $\forall x_0\in O$，$\exists\delta>0$，使得 $(x_0-\delta,x_0+\delta)\subset O$。


### 二、连续性的应用

上段我们主要讨论如何由给定的条件，证明函数连续．现在我们要讨论相反的问题：假定所讨论的函数连续，证明在某些条件下，有什么结果；或者构造适当的函数，把别的问题转化为连续函数的问题．

> [!example] * 例2.1.10
> 证明：（非常数的）连续周期函数必有最小正周期．（南开大学，南京大学）

**分析**　若有最小正周期$T_0$，那么$T_0$便是所有正周期的下确界．反之，若能证明全体正周期的下确界仍为一个正周期，则这个正周期自然是最小正周期．因此我们的问题只要证明如下三点即可：1° $\inf\{f\text{的正周期}\}=T_0$存在；2° $T_0$仍为$f$的周期；3° $T_0>0$．

> [!proof]- 证
> 1° 因为集合$\{f\text{的正周期}\}$有下界0，根据确界存在定理，$\inf\{f\text{的正周期}\}=T_0$存在．
> 
> 2° 证明$T_0\in\{f\text{的周期}\}$．根据确界性质，$\exists T_n\in\{f\text{的正周期}\}$（$n=1,2,\cdots$），使得$T_n\to T_0$（$n\to\infty$）．如此，$\forall x\in\mathbb{R}$，有
> $$
> f(x+T_0)=f\left(x+\lim_{n\to\infty}T_n\right)=\lim_{n\to\infty}f(x+T_n)=f(x),
> $$
> 此式表明$T_0$是$f$的周期．
> 
> 3° 因$T_n>0$，$T_n\to T_0$（$n\to\infty$），所以$T_0\geq 0$．假若$T_0=0$，则$T_n\to 0$（$n\to\infty$），$f$的周期网点（指等于周期整数倍的点）在实轴$\mathbb{R}$上稠密．从而，$\forall x\in\mathbb{R}$，$\exists\{x_n\}\to x$（其中$\{x_n\}$是由一些周期网点所组成的序列）．于是
> $$
> f(x)=f\left(\lim_{n\to\infty}x_n\right)=\lim_{n\to\infty}f(x_n)=\lim_{n\to\infty}f(0+x_n)=f(0),
> $$
> 即$f(x)\equiv f(0)$（常数），矛盾．故$T_0>0$．

**注**　关于周期的几点补充：

1° 若$T$和$T_1$是函数$f$的周期，则$mT\pm nT_1$仍是$f$的周期．

2° 若$f$（$\neq$常数）是连续函数，有最小正周期$T_0$（例2.1.10），那么，$\forall T\in\{f\text{的正周期}\}$，必$\exists n\in\mathbb{N}$使得$T=nT_0$．

（因为：若该论断不成立，则存在正周期$T>T_0$．$\forall n\in\mathbb{N}$，$T\neq nT_0$，$\exists n\in\mathbb{N}$，使得$nT_0<T<(n+1)T_0$，因而，$T_0>T-nT_0>0$．至此，我们找到比$T_0$还小的正周期：$T-nT_0$，跟"$T_0$为最小正周期"矛盾．）

3° 设$f$（$\neq$常数）是连续函数，有周期$T>0$．若$\alpha T$也是$f$的周期，则$\alpha$最多是有理数．（不可能是无理数！）

（因为：若$\alpha T$是$f$的周期，则（如2°所述）有$m\in\mathbb{N}$，使得$\alpha T=mT_0$；有$n\in\mathbb{N}$使得$T=nT_0$．可见$\alpha nT_0=mT_0$，$\alpha=\frac{m}{n}$为有理数．）

> [!example] ☆例2.1.11
> 设$f(x)$对$(-\infty,+\infty)$内一切$x$有
> $$
> f(x^2)=f(x), \tag{1}
> $$
> 且$f(x)$在$x=0$，$x=1$处连续，证明$f(x)$在$(-\infty,+\infty)$为常数．（华东师范大学）

> [!proof]- 证
> 1° 设$x>0$，由式（1），
> $$
> f(x)=f\left(x^{\frac12}\right)=f\left(x^{\frac14}\right)=\cdots=f\left(x^{\frac1{2^n}}\right)=\cdots,
> $$
> 因此
> $$
> f(x)=\lim_{n\to\infty}f\left(x^{\frac1{2^n}}\right)=f\left(\lim_{n\to\infty}x^{\frac1{2^n}}\right)=f(1).
> $$
> 
> 2° 当$x<0$时，$f(x)=f(x^2)=f(1)$．
> 
> 3° 当$x=0$时，$f(0)=\lim_{x\to 0}f(x)=f(1)$．
> 
> 故$f(x)=f(1)$（常数）．

上面两例都是利用连续函数的定义，$\lim_{x\to x_0}f(x)=f(x_0)=f\left(\lim_{x\to x_0}x\right)$．下例是利用连续函数的性质．

> [!example] 例2.1.12
> 设$f:[0,1]\to[0,1]$为连续函数，$f(0)=0$，$f(1)=1$，$f(f(x))=x$，试证$f(x)=x$．

**分析**　1° 要证$f(x)=x$，只需证$f(x)\nearrow$．实际上，若证明了$f(x)\nearrow$，利用$f(f(x))=x$，立即可证$f(x)=x$，因$\forall x\in[0,1]$，要么$f(x)\geq x$，要么$f(x)\leq x$．由$f(x)\nearrow$知$f(x)\geq x$时，有$x=f(f(x))\geq f(x)$；$f(x)\leq x$时，有$x=f(f(x))\leq f(x)$．故总有$f(x)=x$．问题归纳为证明$f(x)\nearrow$．

2° 例2.1.5告诉我们，有介值性与一对一性就可得到单调性；再利用$f(0)=0$，$f(1)=1$，便可得$f(x)\nearrow$．剩下问题在于证明$f$为一对一的．事实上，$\forall x_1,x_2\in[0,1]$，若$f(x_1)=f(x_2)$，则利用条件$f(f(x))=x$可知
$$
x_1=f(f(x_1))=f(f(x_2))=x_2,
$$
故$f$为一对一的．

> [!exercise] ☆练习
> 设$f$是从$\mathbb{R}$到$\mathbb{R}$的一对一连续映射，有不动点，满足：
> $$
> f(2x-f(x))\equiv x, \quad \forall x\in\mathbb{R}.
> $$
> 试证：$f(x)\equiv x$（$\forall x\in\mathbb{R}$）．

> [!proof]- 证
> 明显：$f(x)\equiv x$（$\forall x\in\mathbb{R}$）是问题的一个解．设$g(x)$是问题的另一解，那么$\forall x\in\mathbb{R}$，
> $$
> g(2x-g(x))\equiv x\equiv f(2x-f(x)).
> $$
> 因为$f(x)$和$g(x)$都是一对一的连续函数，所以$2x-g(x)\equiv 2x-f(x)$，即
> $$
> g(x)\equiv f(x)\equiv x \quad (\forall x\in\mathbb{R}),
> $$
> 故$f(x)\equiv x$是唯一解．因此$f$为一对一的．

> [!example] 例2.1.13
> 设$f:[a,b]\to[a,b]$为连续函数，证明：$\exists\xi\in[a,b]$，使得$f(\xi)=\xi$．（上海师范大学，复旦大学）

> [!proof]- 证
> 若$f(a)=a$或$f(b)=b$，问题自明．否则，由$g(x)=f(x)-x$连续，$f(a)>a$，$f(b)<b$知，$\exists\xi\in(a,b)$使得$g(\xi)=0$，即$f(\xi)=\xi$．证毕．

> [!example] 例2.1.14
> 已知函数$f$在圆周上有定义，并且连续，证明：可以找到一直径的两个端点$a$和$b$，使$f(a)=f(b)$．（国外赛题）

> [!proof]- 证
> 以圆心为极点，以某个半径作极轴，于是圆周上的点可由辐角$\theta$决定．$f$便是$\theta$的函数，以$2\pi$为周期．至此问题归为求一$\theta$使得$f(\theta)=f(\theta+\pi)$．令$g(\theta)=f(\theta)-f(\theta+\pi)$，即要求$g$之零点．若$g(0)=0$，则问题已被解决；否则$g(0)\neq 0$．由$g(\pi)=f(\pi)-f(2\pi)=f(\pi)-f(0)=-[f(0)-f(\pi)]=-g(0)$知，$g(\pi)$与$g(0)$异号．所以由介值性，$\exists\theta\in(0,\pi)$，使$g(\theta)=0$，即$f(\theta)=f(\theta+\pi)$．证毕．

> [!example] 例2.1.15
> 平面上，沿任一方向作平行直线，总存在一条直线，将给定的三角形剖成面积相等的两部分．

**分析**　（如图2.1.4）设$\triangle ABC$为已知三角形，$z$为已知方向，以图示的方式取坐标系，以$S(x)$表示阴影部分的面积，则$\forall x',x''\in[a,b]$，有
$$
|S(x')-S(x'')|\leq OF\cdot|x'-x''|
$$
（即$S(x)$满足Lipschitz条件），所以$S$连续，有介值性．记$S(a)=0$，$S(b)=s$（$\triangle ABC$的面积），故$\exists x\in(a,b)$，使得$S(x)=\frac12s$．

> [!example] 例2.1.16
> 设$f$和$g$是$[0,1]$上的连续函数，且$\max\limits_{x\in[0,1]}f(x)=\max\limits_{x\in[0,1]}g(x)$，试证：必存在一点$x_0\in[0,1]$使得$e^{f(x_0)}+3f(x_0)=e^{g(x_0)}+3g(x_0)$．（北京大学）

**提示**　问题等价于证明：函数$F(x)=e^{f(x)}+3f(x)-e^{g(x)}-3g(x)$有零点．

**再提示**　因$f,g$连续，$\exists x_1,x_2\in[0,1]$，使得
$$
f(x_1)=\max_{x\in[0,1]}f(x)=\max_{x\in[0,1]}g(x)=g(x_2).
$$
若$x_1=x_2$是同一点，则$F(x_1)=F(x_2)=0$，问题得证．

若$x_1\neq x_2$，则$F(x_1),F(x_2)$一正一负，因连续有介值性，故$\exists x_0\in(x_1,x_2)$，使得$F(x_0)=0$，问题同样获证．

> [!example] ☆例2.1.17
> 是否存在$\mathbb{R}$上的连续函数$f$，满足$f(f(x))=e^{-x}$，为什么？（北京大学，浙江大学）

**提示**　（不存在．）否则：$f$一对一$\Rightarrow f$严格单调$\Rightarrow f(f(x))$严$\nearrow$，矛盾．

**再提示**　1° 假设有$f(f(x))=e^{-x}\Rightarrow f(x)$应一对一（因$e^{-x}$是一对一的）．

2° 既然$f$一对一，因$f$连续（有介值性），重复例2.1.5中的证明，知$f$应严格单调（不然：在$f$的图像上必存在上、下来回跳动的三点，利用介值性必有等值点，矛盾）．

3° 既然$f$应严格单调，则$f(f(x))$严$\nearrow$，与$f(f(x))=e^{-x}$矛盾（因为：若$f$严$\nearrow\Rightarrow x_1<x_2$时，有$f(x_1)<f(x_2)\Rightarrow$当$x_1<x_2$时，$f(f(x_1))<f(f(x_2))\Rightarrow f(f(x))$严$\nearrow$；类似地：若$f$严$\searrow$，同样有$f(f(x))$严$\nearrow$）．

> [!example] * 例2.1.18
> 设$f:[0,1]\to\mathbb{R}$单调递增，且$f([0,1])$是闭集，证：$f$在$[0,1]$上连续．（中国科学技术大学）

**提示**　证明$f$在$(0,1]$上处处左连续（类似可证$[0,1)$上处处右连续）．

> [!proof]- 证
> 1° $\forall x_0\in(0,1]$，$\forall\{x_n\}\subset[0,1]$，$x_n\xrightarrow[\text{递增}]{}x_0$，下面要证：$\lim_{n\to\infty}f(x_n)=f(x_0)$．
> 
> 因为$f\nearrow$知$\{f(x_n)\}\nearrow$，且有上界$f(x_0)$，由单调有界原理，$\lim_{n\to\infty}f(x_n)$存在，记作
> $$
> \lim_{n\to\infty}f(x_n)=A, \tag{1}
> $$
> 且
> $$
> f(x_n)\leq A\leq f(x_0). \tag{2}
> $$
> 
> 2° 已知$f([0,1])$是闭集（意指：含它的所有极限点）．式（1）表明：$A$是$\{f(x_n)\}\subset f([0,1])$的极限点，由$f([0,1])$是闭集知$A\in f([0,1])$，即$\exists a\in[0,1]$使得
> $$
> f(a)=A. \tag{3}
> $$
> 由式（2）知$x_n\leq a\leq x_0$（$\forall n\in\mathbb{N}$），即$0\leq x_0-a\leq x_0-x_n\to 0$（$n\to\infty$），可得
> $$
> a=x_0. \tag{4}
> $$
> 因此
> $$
> \lim_{n\to\infty}f(x_n)=A=f(a)=f(x_0). \tag{5}
> $$
> 根据$x_0\in(0,1]$和$\{x_n\}\subset[0,1]$的任意性，式（5）表明：$f(x)$在$(0,1]$上处处左连续（类似可证$[0,1)$上处处右连续）．

> [!example] 例2.1.19
> 设$y=f(x)$是从区间$[0,1]$映射到$[0,1]$的函数，其图像
> $$
> E=\{(x,y)\mid y=f(x), x\in[0,1]\}
> $$
> 是单位正方形$[0,1]\times[0,1]$上的闭集，求证：$f$是连续函数．（中国科学技术大学）
> 
> （尚无"二元函数"知识者，此题暂缓．）

**提示**　跟上题比较，无单调条件；但多了有界条件，因而可用致密性定理．

> [!proof]- 证
> （反证法）假设$f$在某点$x_0\in[0,1]$不连续，意味着$\exists\varepsilon_0>0$，$\forall n\in\mathbb{N}$，$\delta_n=\frac1n>0$，$\exists x_n\in[0,1]$，虽然$|x_n-x_0|<\delta_n=\frac1n$（即$\{x_n\}\to x_0$），但
> $$
> |f(x_n)-f(x_0)|\geq\varepsilon_0 \quad (n=1,2,\cdots). \tag{1}
> $$
> 
> 另一方面，根据致密性定理，有界无穷序列$\{f(x_n)\}_{n=1}^{\infty}\subset[0,1]$必有收敛子列．
> 
> 即存在$\{f(x_{n_k})\}\subset\{f(x_n)\}$，使得$\lim_{k\to\infty}f(x_{n_k})=y_0$．而$\lim_{k\to\infty}x_{n_k}=x_0$，说明$(x_0,y_0)$是$\{(x_{n_k},f(x_{n_k}))\}$的一个极限点，且$\{(x_{n_k},f(x_{n_k}))\}\subset E$，亦即$(x_0,y_0)$是$E$的一个极限点，但$E$是闭集（包含它的所有极限点）．故
> $$
> (x_0,y_0)\in E=\{(x,y)\mid y=f(x), x\in[0,1]\}\subset[0,1]\times[0,1].
> $$
> 这表明$y_0=f(x_0)$．于是
> $$
> \lim_{k\to\infty}f(x_{n_k})=y_0=f(x_0). \tag{2}
> $$
> 注意$\{(x_{n_k},f(x_{n_k}))\}$是$\{(x_n,f(x_n))\}$的子列，应满足式（1），故$\lim_{k\to\infty}f(x_{n_k})\neq f(x_0)$，与式（2）矛盾．连续性获证．

> [!example] 例2.1.20
> 设$f(x)$在$[a,b]$上连续，且$f(a)=f(b)$，证明：$\forall n\in\mathbb{N}$，$\exists\xi\in(a,b)$，使得$f\left(\xi+\frac{b-a}{n}\right)=f(\xi)$．（四川大学）

**提示**　若存在某$n\in\mathbb{N}$，使得对应的$\xi$不存在，那么函数$F(x)=f\left(x+\frac{b-a}{n}\right)-f(x)$在$[a,b]$上没有零点，又因$F$连续，故不能变号．因此
$$
f(b)=f(a)+\sum_{k=1}^{n}[f(x_k)-f(x_{k-1})]>f(a)\quad\text{（或}<f(a)\text{）},
$$
其中$x_k=a+k\frac{b-a}{n}$．这与$f(a)=f(b)$矛盾．证毕．

> [!example] ☆例2.1.21
> 是否存在$[a,b]$上的连续函数：在有理点上取值为无理数，在无理点上为有理数？请作出判断并说明理由．（南开大学）

**"势"的简介**：一区间里的有理数和无理数都是无穷多个，无法再比较．作为"数目，个数"的推广，数学家引入了"势"的概念：两个集合如果能建立一一对应关系，则称它们具有对等的"势"．能跟自然数一一对应的集合，称为可数集；否则称为不可数集．结果发现：全体有理数是可数集，全体无理数是不可数集．

任意有限个可数集之并仍是可数集，可数个可数集的并还是可数集．

全体实数的"势"称为连续统的势，与任何（非退化的）区间$I$（不论有限无限，闭或开）的"势"是对等的，也与$I$中无理数集的"势"对等．跟连续统的势相比，有理数的势似乎小得可以忽略不计．

**解答**　（根据上面的理念）题中的连续函数不可能存在！原因是

1° 在有限闭区间$[a,b]$上的连续函数，必达最大、最小值，并有介值性．因此$f$的像点填满某个闭区间，即$\exists[A,B]$使得$f([a,b])=[A,B]$．

2° 函数$f$可以是多对一或一对一．（非一对多！）因此，像点的势不会超过像源的势．按题设：

$f(\text{有理数})=\text{无理数}$（因为像源是可数集，故像点最多是可数集），

$f(\text{无理数})=\text{有理数}$（有理数是可数集）．

可数集加可数集还是可数集．故$f$的全体像点$f([a,b])$是可数集，不可能填满任一个区间，即$\forall[A,B]$，$f([a,b])\neq[A,B]$．与1°矛盾．

> [!example] 例2.1.22
> 设函数$f(x)$在$(-\infty,+\infty)$上连续，$n$为奇数．若$\lim_{x\to+\infty}\frac{f(x)}{x^n}=\lim_{x\to-\infty}\frac{f(x)}{x^n}=1$，证明：方程$f(x)+x^n=0$有实根．（浙江大学）

**提示**　因$f(x)+x^n$连续，只需证明$f(x)+x^n$变号，方程就有实根．已知
$$
\lim_{|x|\to+\infty}\frac{f(x)+x^n}{x^n}=1+1>1,
$$
则
$$
f(x)+x^n>x^n>0 \quad \text{（充分大}M>0\text{，当}x>M\text{时）},
$$
$$
f(x)+x^n<x^n<0 \quad \text{（充分大}M>0\text{，当}x<-M\text{时）}.
$$
故$\exists x_0\in\mathbb{R}$使得$f(x_0)+x_0^n=0$．问题获证．

> [!example] 例2.1.23
> 设$f:\mathbb{R}\to\mathbb{R}$是连续函数，$f(x)$无不动点，记$f^n=f\circ f\circ\cdots\circ f$（为$f(x)$的$n$次复合），试证：$\forall x_0\in\mathbb{R}$，数列$x_n=f^n(x_0)$（$n=1,2,\cdots$）无界．（华东师范大学）

> [!proof]- 证
> $f(x)$连续，无不动点，则必然单调．（这是因为：若$f(x)$无不动点，则$F(x)=x-f(x)$无零点．根据连续有介值性，$F(x)$不变号．即
> 
> 要么恒负（即恒有$x<f(x)$，于是$x_0<x_1<x_2<\cdots$，$x_n\nearrow$），
> 
> 要么恒正（即恒有$x>f(x)$，于是$x_0>x_1>x_2<\cdots$，$x_n\searrow$）．
> 
> 总之，$\{x_n\}$保持单调．故$\{x_n\}$不可能有界，否则利用单调有界原理知
> $$
> \lim_{n\to\infty}x_n=\alpha<+\infty.
> $$
> 对式$f(x_{n-1})=x_n$两端同时取极限，得不动点$\alpha$：$\alpha=f(\alpha)$，矛盾．证毕．

> [!theorem] 例2.1.24（定理）
> $f$是$[a,b]\to[a,b]$上的连续函数，设$x_1\in[a,b]$，$x_{n+1}=f(x_n)$，$\forall n\in\mathbb{N}$，证明：$\{x_n\}$收敛的充分必要条件是
> $$
> \lim_{n\to\infty}(x_{n+1}-x_n)=0. \tag{1}
> $$
> 
> （源自《美国数学月刊》）

> [!proof]- 证
> 根据 Cauchy 准则，式（1）的必要性明显．只需证明充分性．充分性的证明其实也不难，需明确三点：
> 
> 1° 所谓某点是序列$\{x_n\}$的极限点，意指：它是$\{x_n\}$的某子列的极限．
> 
> 2° 根据致密性原理："有界无穷序列$\{x_n\}$必有极限点"．
> 
> 3° 数列$\{x_n\}$：$\lim x_n=\alpha\Leftrightarrow \alpha$是$\{x_n\}$的唯一极限点．
> 
> （事实上，若$\{x_n\}$收敛于$\alpha$，则$\{x_n\}$的任何子列都以$\alpha$为极限．因此，收敛数列只有唯一极限点．反之，若$\{x_n\}$只有唯一极限点$\alpha$，则$\{x_n\}$必以$\alpha$为极限．这因为：倘若$\{x_n\}$不以$\alpha$为极限，则$\alpha$有某邻域，在其外必有$\{x_n\}$的无穷多项$\{x_{n_k}\}$，根据致密性原理，$\{x_{n_k}\}$至少另有一个极限点$\beta\neq\alpha$，与极限点唯一矛盾．）
> 
> （下面（用反证法）证明式（1）的充分性．）
> 
> 设$\{x_n\}$不收敛，如3°所述：$\{x_n\}$至少有两个不同的极限点：记作$\alpha_1$和$\alpha_2$．
> 
> 对$\alpha_1$和$\alpha_2$，各作一微小邻域$U(\alpha_1,\varepsilon)$和$U(\alpha_2,\varepsilon)$，使得两邻域无公共点．既然$\alpha_1$和$\alpha_2$都是$\{x_n\}$的极限点，因此对任意$N>0$（不论多么大），总$\exists n_k>N$，使得$x_{n_k}\in U(\alpha_1,\varepsilon)$；同理，又能找到更大的$n_{k+1}>n_k$，使得$x_{n_{k+1}}\in U(\alpha_2,\varepsilon)$，继而找到$n_{k+2}>n_{k+1}$，使得$x_{n_{k+2}}\in U(\alpha_1,\varepsilon)$，$\cdots$ 总之，$\{x_n\}$会不停地在两邻域来回摆动．
> 
> **(i)**（下面证明：$\alpha_1$和$\alpha_2$之间的每点$\eta$都必是$\{x_n\}$的极限点．）设$\eta\in(\alpha_1,\alpha_2)$是$\alpha_1$和$\alpha_2$之间的任意一点，$\forall\varepsilon>0$，作邻域$U(\eta,\varepsilon)$．如上所述：$\{x_n\}$在$\alpha_1$和$\alpha_2$之间来回摆动，每趟$\{x_n\}$都要经过邻域$U(\eta,\varepsilon)$．但$\lim_{n\to\infty}(x_{n+1}-x_n)=0$，说明$\{x_n\}$前进的步幅无限变小．当步幅小于$\varepsilon$时，经过邻域$U(\eta,\varepsilon)$时至少有一点落入$U(\eta,\varepsilon)$中．无穷次摆动，$U(\eta,\varepsilon)$里将含有$\{x_n\}$的无穷多项，由$\varepsilon>0$的任意性，说明$\eta$是$\{x_n\}$的极限点．再由$\eta$（$\eta\in(\alpha_1,\alpha_2)$）的任意性，说明：$\alpha_1$和$\alpha_2$之间的每一点都是$\{x_n\}$的极限点．
> 
> **(ii)**（证明：$\alpha_1$和$\alpha_2$之间的每一点$\eta$都是$f$的不动点．）上面已证$\eta$是极限点，因此存在子列$\{x_{n_k}\}\to\eta$（当$k\to\infty$时）．由于$\lim_{n\to\infty}(x_{n+1}-x_n)=0$，
> $$
> |x_{n_k+1}-\eta|\leq|x_{n_k+1}-x_{n_k}|+|x_{n_k}-\eta|\to 0,
> $$
> 知$\{x_{n_k+1}\}\to\eta$．
> 
> 于是，在等式$f(x_{n_k})=x_{n_k+1}$里令$k\to\infty$，取极限得$f(\eta)=\eta$．
> 
> 这就证明了：$\alpha_1$和$\alpha_2$之间的每一点$\eta$都是$f$的不动点．
> 
> 既然区间$[\alpha_1,\alpha_2]$上每点都是不动点，那么$\{x_n\}$第一次落入区间$(\alpha_1,\alpha_2)$，就不能再动，与无穷次来回摆动相矛盾．故$\{x_n\}$收敛．证毕．

**注**　该命题虽然将收敛条件作了大幅度的弱化，但适应面较窄，只针对有限闭区间里的递推数列，且递推公式连续才成立．因为该定理尚未列入教材，考生千万慎用．


### 单元练习 2.1

 2.1.1

研究函数 $f(x)=\lim_{n\to\infty}\frac{x^n-1}{x^n+1}$ 的连续性。（成都科技大学）

《1和−1为第一类间断点，其余处处连续》

> [!tip] 提示
> $f(x)=\begin{cases}1, & |x|>1,\\0, & x=1,\\-1, & |x|<1,\\\text{无意义}, & x=-1.\end{cases}$

 2.1.2

设 $f(x)=\begin{cases}\frac{\ln(1+x)}{x}, & x>0,\\0, & x=0,\\\frac{\sqrt{1+x}-\sqrt{1-x}}{x}, & -1\leq x<0.\end{cases}$

试研究 $f(x)$ 在 $x=0$ 点的连续性。（燕山大学）

《$f(0+0)=f(0-0)=1\neq f(0)=0$ 可去间断》

 ☆2.1.3

设 $f(x)$ 在 $[0,1]$ 上连续，且 $f(x)>0$，置
$$R(x)=\sup_{0\leq y\leq x} f(y)\quad(0\leq x\leq 1),\quad G(x)=\lim_{n\to\infty}\left[\frac{f(x)}{R(x)}\right]^n.$$
试证：当且仅当 $f(x)$ 在 $[0,1]$ 上单增时，$G$ 是连续的。（吉林工业大学）

> [!tip] 提示
> $(\Rightarrow)f\nearrow\Rightarrow R=f\Rightarrow G=1\Rightarrow G$ 在 $[0,1]$ 上连续。
> 
> $(\Leftarrow)$ 注意 $G(x)$ 只可能取 $0,1$ 两个值。

> [!tip] 再提示
> $(\Leftarrow)f$ 在 $[0,1]$ 上连续$\Rightarrow\exists x_0\in[0,1]$，使 $f(x_0)=\max_{0\leq x\leq 1}f(x)=R(x_0)\Rightarrow G(x_0)=1$。若 $f(x)<R(x)$，则 $G(x)=0$，故 $G$ 只可能取 $0,1$ 两值。既然 $G(x_0)=1$，且 $G(x)$ 在 $[0,1]$ 上连续，故 $G(x)\equiv 1$。从而 $f(x)\equiv R(x)$，知 $f(x)\nearrow$。

 *2.1.4

设函数 $f(x)$ 在 $[a,b]$ 上连续且恒大于零，按 $\varepsilon-\delta$ 定义证明：$1/f(x)$ 在 $[a,b]$ 上连续。（中南大学）

> [!note] 注
> 该题虽是基本题，但不易叙述严整。

> [!proof]- 证 I
> 因 $f>0$ 于 $[a,b]$ 上连续，知 $\exists x^*\in[a,b]$，使 $0<f(x^*)=\min_{[a,b]}f=m$，故 $\forall x_0\in[a,b]$，
> 
> $\forall\varepsilon>0$，取 $\delta>0$，使得 $|x-x_0|<\delta$，$x\in[a,b]$ 时，有 $|f(x)-f(x_0)|<m^2\varepsilon$，
> 
> $$\left|\frac{1}{f(x)}-\frac{1}{f(x_0)}\right|=\frac{|f(x)-f(x_0)|}{f(x)f(x_0)}\leq\frac{1}{m^2}|f(x)-f(x_0)|<\varepsilon.$$
> 
> 所以 $1/f$ 在 $[a,b]$ 上连续。

> [!proof]- 证 II
> $\forall x_0\in[a,b]$，$\exists\delta_1>0$，使得 $x\in U(x_0,\delta_1)\cap[a,b]$ 时，$|f(x)-f(x_0)|<|f(x_0)|/2$，
> 
> 从而
> $$|f(x)|\geq\big||f(x_0)|-|f(x)-f(x_0)|\big|\geq|f(x_0)|/2.$$
> 
> $\forall\varepsilon>0$，$\exists\delta_2>0$，使得 $x\in U(x_0,\delta_2)\cap[a,b]$ 时，
> $$|f(x)-f(x_0)|<\frac{(f(x_0))^2}{2}\cdot\varepsilon.$$
> 
> 于是取 $\delta=\min\{\delta_1,\delta_2\}$，则当 $x\in U(x_0,\delta)\cap[a,b]$ 时有
> $$\left|\frac{1}{f(x)}-\frac{1}{f(x_0)}\right|\leq\frac{|f(x)-f(x_0)|}{|f(x)\cdot f(x_0)|}\leq\frac{2}{(f(x_0))^2}|f(x)-f(x_0)|<\varepsilon.$$
> 
> 故 $f^{-1}$ 在 $[a,b]$ 上连续。

> [!note] 注
> 证 I 只适用于有界闭区间；证 II 适用于一切区间，且不必要求 $f>0$。只要 $f(x_0)\neq 0$，$f$ 就在 $x_0$ 处连续。

 2.1.5

设 $f(x)$ 在 $[0,1]$ 上非负连续，且 $f(0)=f(1)=0$，证明：对任意一个实数 $l$（$0<l<1$），必有实数 $x_0$（$0\leq x_0\leq 1$），使 $f(x_0)=f(x_0+l)$。（上海交通大学）

> [!tip] 提示
> 连续函数 $f(x)-f(x+l)$
> $$\begin{cases}\leq 0, & \text{当 }x=0\text{ 时},\\\geq 0, & \text{当 }x=1-l\text{ 时}.\end{cases}$$

 2.1.6

函数 $f(x)$ 在 $(a,b)$ 内连续，$a<x_1<x_2<\cdots<x_n<b$，证明：在 $(a,b)$ 内存在点 $\xi$，使
$$f(\xi)=\frac{f(x_1)+f(x_2)+\cdots+f(x_n)}{n}.$$
（华中科技大学，长春理工大学）

> [!tip] 提示
> 平均值总在最大者与最小者之间。

 ☆2.1.7

设 $f(x)$ 在 $[a,a+2\alpha]$ 上连续，证明：存在 $x\in[a,a+\alpha]$，使得
$$f(x+\alpha)-f(x)=\frac{1}{2}[f(a+2\alpha)-f(a)].\tag{1}$$
（北京大学）

> [!tip] 提示
> 如下函数在 $[a,a+\alpha]$ 上连续，端点处异号：
> $$F(x)=f(x+\alpha)-f(x)-\frac{1}{2}[f(a+2\alpha)-f(a)].$$

 2.1.8

设 $f(x)$ 在 $(-\infty,+\infty)$ 上连续，若 $\lim_{x\to+\infty} f(x)=+\infty$，且 $f(x)$ 在 $x=a$ 处达最小值，若 $f(a)<a$，证明：$F(x)=f(f(x))$ 至少在两点达到最小值。（哈尔滨工业大学）

> [!proof]- 证明
> 内层的 $f$ 在 $[a,+\infty)$ 两端点的值
> $$f(a)<a,\quad f(+\infty)=+\infty>a,$$
> 故（由介值性）$\exists x_1\in(a,+\infty)$，使得 $f(x_1)=a$，从而 $f(f(x_1))$ 达最小值。同理在 $(-\infty,a)$ 内亦然。

 ☆2.1.9

若函数 $f(x)$ 在 $[0,1]$ 上连续，$f(0)=f(1)$，证明：对任何自然数 $n\geq 2$，存在 $\xi_n\in[0,1]$，使得 $f(\xi_n+1/n)=f(\xi_n)$。（湖北大学）

> [!proof]- 证明
> 将 $[0,1]$ $n$ 等分，记分点为 $x_i$：$0=x_0<x_1<\cdots<x_n=1$，$n\geq 2$。
> 
> 若对 $i\in\{0,1,2,\cdots,n-1\}$，使得 $F(x_i)=f(x_i+1/n)-f(x_i)=0$，问题已解决。否则 $F(x_i)\neq 0$（$i=0,1,\cdots,n-1$），若同为正，则得 $f(0)<f(1)$，矛盾；若同为负，亦导致矛盾。故 $\exists x_i,x_j$，使 $F(x_i),F(x_j)$ 异号，从而 $\exists\xi_n\in(x_i,x_j)$ 使得 $F(\xi_n)=0$。

 ☆2.1.10

设 $f_n(x)=x+x^2+\cdots+x^n$（$n=2,3,\cdots$）。

1）证明：方程 $f_n(x)=1$ 在 $[0,+\infty)$ 上有唯一的实根 $x_n$；

2）证明数列 $\{x_n\}$ 有极限，并求出 $\lim_{n\to\infty} x_n$。（北京师范大学，吉林大学）

> [!tip] 提示
> 1）$f_n'(x)>0$，$f_n(0)=0$，$f_n(+\infty)=+\infty$，故 $f_n(x)=1$ 在 $(0,+\infty)$ 内有唯一实根。
> 
> 2）$\forall n$：$x_n\leq x_{n-1}$（否则 $1=\sum_{k=1}^n x_n^k>\sum_{k=1}^{n-1} x_{n-1}^k=1$ 不可能）；$x_n\downarrow$ 有下界 $0$，$\exists A=\lim x_n$。明显 $0\leq x_n^n\leq 1/n\to 0$（$n\to\infty$）。又
> $$1=\sum_{k=1}^n x_n^k=\frac{x_n(1-x_n^n)}{1-x_n}\Rightarrow A=\frac{1}{2}.$$

> [!note] 注
> 此类考题，均可同样证明。如：
> 
> 1）设 $f_n(x)=\cos x+\cos^2 x+\cdots+\cos^n x$。求证：
> 
> i）对任意自然数 $n$，方程 $f_n(x)=1$ 在 $[0,\pi/3)$ 内有且仅有一根；
> 
> ii）若 $x_n\in[0,\pi/3]$ 是 $f_n(x)=1$ 的根，则 $\lim_{n\to\infty} x_n=\pi/3$。（浙江大学）
> 
> 2）设 $f_n(x)=\sin x+\sin^2 x+\cdots+\sin^n x$。证明：
> 
> i）$\forall n\in\mathbb{N}$，$f_n(x)=1$ 在 $(\pi/6,\pi/2]$ 内有唯一一根；
> 
> ii）若 $x_n\in(\pi/6,\pi/2]$ 是 $f_n(x)=1$ 的根，则 $\lim_{n\to\infty} x_n=\pi/6$。（北京大学）

 *2.1.11

讨论函数
$$f(x)=\begin{cases}x(1-x), & x\text{ 为有理数},\\x(1+x), & x\text{ 为无理数}\end{cases}$$
的连续性与可微性。（内蒙古大学）

> [!tip] 提示
> 两抛物线
> $$y_1(x)=x(1-x),\quad y_2(x)=x(1+x)$$
> 
> 只有一个交点 $x=0$。其他点 $f$ 分别在 (1)、(2) 上取值。

> [!tip] 再提示
> $\forall x_0\neq 0$ 由于有理点稠密，存在有理数列 $x_n\to x_0$，$f(x_n)\to y_1(x_0)$；同理，存在无理数列 $\hat{x}_n\to x_0$，$f(\hat{x}_n)\to y_2(x_0)$。故 $x_0\neq 0$ 时，$f$ 不连续，更不可微。下面看 $x_0=0$ 的情况：因
> $$\frac{f(x)-f(0)}{x}=\begin{cases}\frac{x(1-x)-0}{x}=1-x, & \text{当 }x=\text{有理数时},\\\frac{x(1+x)-0}{x}=1+x, & \text{当 }x=\text{无理数时}\end{cases}\to 1\quad(\text{当 }x\to 0\text{ 时}),$$
> 故 $f'(0)=1$，$f$ 在 $x=0$ 处可微，当然连续。

 2.1.12

用 $\varepsilon-\delta$ 语言证明：如果 $y=f(\mu)$ 在点 $\mu_0$ 连续，$\mu=\varphi(x)$ 在点 $x_0$ 连续，且 $\mu_0=\varphi(x_0)$，则 $f[\varphi(x)]$ 在点 $x_0$ 连续。（北京科技大学）

 2.1.13

设
$$f(x)=\begin{cases}1, & x\geq 0,\\-1, & x<0,\end{cases}\quad g(x)=\sin x,$$
讨论 $f[g(x)]$ 的连续性。（湖南大学）

> [!tip] 提示
> $f[g(x)]=\begin{cases}1, & x\in[2k\pi,(2k+1)\pi],\\-1, & x\in((2k-1)\pi,2k\pi)\end{cases}$（$k\in\mathbb{Z}$），$x=k\pi$ 处为第一类间断点（$k$ 为整数），其余处处连续。

 2.1.14

证明：若函数 $f(x)$ 在区间 $I$ 上处处连续且为一一映射，则 $f(x)$ 在 $I$ 上必严格单调。（华东师范大学）

> [!tip] 提示
> 参看例 2.1.5。

 ☆2.1.15

证明：如果 $y=f(x)$ 在 $x\in[a,+\infty)$ 上连续，且 $\lim_{x\to+\infty} f(x)=A$（$A$ 为有限数），则 $y=f(x)$ 在 $[a,+\infty)$ 上有界。（复旦大学）

> [!tip] 提示
> 可令 $x=1/t-(1-a)$，$t\in(0,1]$，并令 $f(x(t))|_{t=0}=A$。

 2.1.16

设函数 $f(x)$ 在 $(a,b)$ 上连续，且
$$\lim_{x\to a^+} f(x)=-\infty,\quad \lim_{x\to b^-} f(x)=-\infty,$$
试证：$f(x)$ 在 $(a,b)$ 上有最大值。（西北大学）

> [!tip] 提示
> 任取定一点 $x_1\in(a,b)$，由端点的条件可知，$\exists\delta>0$ 使得当 $a<x<a+\delta$ 和 $b-\delta<x<b$ 时，有 $f(x)<f(x_1)$，则 $[a+\delta,b-\delta]$ 上最大就是 $(a,b)$ 上最大。

 *2.1.17

若函数 $f(x)$ 在 $D$ 上有界，令
$$M_f(x_0,\delta)=\sup\{f(x)\mid x\in D, |x-x_0|<\delta\},$$
$$m_f(x_0,\delta)=\inf\{f(x)\mid x\in D, |x-x_0|<\delta\}.$$

证明：

1）当 $\delta\to 0^+$ 时，$M_f(x_0,\delta)-m_f(x_0,\delta)$ 的极限存在；

2）函数 $f(x)$ 在 $x_0$ 处连续的充要条件是 $\lim_{\delta\to 0^+}[M_f(x_0,\delta)-m_f(x_0,\delta)]=0$。（西北大学）

> [!tip] 提示
> 1）（注意：随着取值范围减小，$\sup(\cdot)\searrow$，$\inf(\cdot)\nearrow$）$\delta\searrow 0$ 时，$M_f(x_0,\delta)-m_f(x_0,\delta)\searrow$ 且有下界 $0$。
> 
> 2）$(\Leftarrow)|f(x)-f(x_0)|\leq M_f-m_f\to 0$。
> 
> $(\Rightarrow)f$ 在 $x_0$ 处连续$\Rightarrow\forall\varepsilon>0$，$\exists\delta>0$，当 $|x-x_0|<\delta, x\in D$ 时，
> $$f(x_0)-\varepsilon/4<f(x)<f(x_0)+\varepsilon/4.$$
> 
> 取 $\sup(\cdot)$ 得
> $$f(x_0)-\varepsilon/2<f(x_0)-\varepsilon/4<f(x)\leq M_f(x_0,\delta)\leq f(x_0)+\varepsilon/4<f(x_0)+\varepsilon/2.$$
> 
> 即
> $$|M_f(x_0,\delta)-f(x_0)|<\varepsilon/2.$$
> 
> 类似有
> $$|f(x_0)-m_f(x_0,\delta)|<\varepsilon/2.$$
> 
> 于是 $|M_f(x_0,\delta)-m_f(x_0,\delta)|\leq|M_f-f(x_0)|+|f(x_0)-m_f|<\varepsilon/2+\varepsilon/2=\varepsilon$。

 *2.1.18

设函数 $y=f(x)$ 在区间 $[a,b]$ 上有界，试证函数
$$m(x)=\inf_{a\leq t<x} f(t),\quad M(x)=\sup_{a\leq t<x} f(t)$$
在 $[a,b]$ 上左连续，并举例说明它们可以不右连续。

> [!tip] 提示
> （以 $M(x)$ 为例证明左连续。）（明显：$M(x)$ 是 $x$ 的增函数。）按确界定义，$\forall x_0\in(a,b]$，$\forall\varepsilon>0$，$\exists x_1:a\leq x_1<x_0$ 使得
> $$M(x_0)-\varepsilon<f(x_1)\leq M(x_1)\leq M(x_0)<M(x_0)+\varepsilon.$$
> 
> 取 $\delta=x_0-x_1>0$，则 $x_1=x_0-\delta<x<x_0$ 时，
> $$M(x_0)-\varepsilon<M(x_1)\leq M(x)\leq M(x_0)<M(x_0)+\varepsilon,$$
> 
> 即有 $|M(x_0)-M(x)|<\varepsilon$。故左连续。
> 
> （可以不右连续）如 $[-1,1]$ 上：
> $$\text{sgn}(x)=\begin{cases}1, & x>0,\\0, & x=0,\\-1, & x<0,\end{cases}$$
> 
> 此时 $M(x)=\begin{cases}1, & 0<x\leq 1,\\-1, & -1\leq x\leq 0\end{cases}$ 在 $x=0$ 处不右连续。

 ☆2.1.19

已知
$$f(x)=\begin{cases}x, & 0\leq x<1,\\k+1, & k\leq x<k+1,\text{ 其中 }k=1,2,3,\cdots,\end{cases}$$
求函数 $g(y)=\sup_{f(x)\leq y} x$ 在 $y\geq 0$ 时的具体表达式，并指出 $g(y)$ 在各点处的左右连续性。（北京航空航天大学）

《$g(y)=\begin{cases}y, & 0\leq y<1,\\k, & k\leq y<k+1, k=1,2,\cdots,\end{cases}$

$y=2,3,\cdots$ 时右连续，左不连续，$[0,+\infty)$ 上其余处处连续》

 *2.1.20

设 $f(x)$ 在 $[0,1]$ 上定义，并且有界，$a,b>1$ 为两常数，当 $0\leq x\leq 1/a$ 时，有 $f(ax)=bf(x)$，试证 $f$ 在 $x=0$ 处右连续。

> [!tip] 提示
> 在 $f(ax)=bf(x)$ 中令 $x=0$，得 $f(0)=0$。因此只要证明 $\lim_{x\to 0^+} f(x)=0$ 即可。

> [!tip] 再提示
> 因 $0\leq x\leq 1/a$ 时，有 $f(ax)=bf(x)$，即 $f(x)=f(ax)/b$，因此 $\forall n\in\mathbb{N}$（自然数），$0\leq x\leq 1/a^n$ 时，有
> $$f(x)=\frac{f(ax)}{b}=\cdots=\frac{f(a^n x)}{b^n},$$
> $$|f(x)|=\frac{|f(a^n x)|}{b^n}\leq\frac{M}{b^n}$$
> （因 $f$ 有界，即 $\exists M>0$，使 $|f(x)|\leq M$）。故 $\forall\varepsilon>0$，取定 $N$（充分大）可使 $M/b^N<\varepsilon$，然后令 $\delta=1/a^N$，则当 $0\leq x\leq\delta=1/a^N$ 时，有 $|f(x)|\leq M/b^N<\varepsilon$。即 $\lim_{x\to 0^+} f(x)=0=f(0)$。

 **2.1.21

设 $y=f(x)$ 为 $X\to Y$ 的连续函数，$F$ 为 $Y$ 轴上的闭集，试证 $f^{-1}(F)$ 为 $X$ 轴上的闭集。

> [!proof]- 证明
> 要证 $f^{-1}(F)$ 为 $X$ 轴上的闭集，即要证 $f^{-1}(F)$ 包含它的一切聚点。设 $x_0$ 是 $f^{-1}(F)$ 的任一聚点（指：$\exists x_n\in f^{-1}(F), x_n\to x_0(n\to\infty)$），来证 $x_0\in f^{-1}(F)$。事实上：
> $$x_n\in f^{-1}(F)\Rightarrow f(x_n)\in F$$
> $\xrightarrow{\text{因连续}}\lim_{n\to\infty} f(x_n)=f(x_0)\Rightarrow f(x_0)$ 是 $F$ 的聚点 $\xrightarrow{\text{因}F\text{为闭集}}f(x_0)\in F\Rightarrow x_0\in f^{-1}(F)$。由 $x_0$ 的任意性，知 $f^{-1}(F)$ 为 $X$ 上的闭集。

 *2.1.22

函数 $f,g$ 在 $[a,b]$ 上连续，$f$ 单调，$x_n\in[a,b]$ 使得 $g(x_n)=f(x_{n+1})$（$n=1,2,\cdots$），证明：$\exists x_0\in[a,b]$，使得 $f(x_0)=g(x_0)$。

> [!proof]- 证明
> $1^\circ$ 若 $\exists n$ 使得 $g(x_n)-f(x_n)$ 与 $g(x_{n+1})-f(x_{n+1})$ 异号，则由连续函数介值性，知 $\exists x_0\in[a,b]$，使得 $g(x_0)=f(x_0)$。
> 
> $2^\circ$ 否则 $|g(x_n)-f(x_n)|$ 保持同号。例如恒正，则 $f(x_{n+1})-f(x_n)=g(x_n)-f(x_n)>0$（$n=1,2,\cdots$），表明 $\{f(x_n)\}\nearrow$。由于 $f$ 的单调性，知 $\{x_n\}$ 单调，且有界 $a,b$。故 $\{x_n\}$ 收敛于某点 $x_0$。在 $g(x_n)=f(x_{n+1})$ 中取极限，由 $f,g$ 的连续性得 $g(x_0)=f(x_0)$。

> [!note] 注
> 有界无穷数列必有收敛子列，因此在 $\{x_n\}$ 中能找出收敛子列 $x_{n_k}\to x_0$（某极限点）。似乎可以删去 $f$ 的单调性条件。但这种方法得到的子列，其邻项不能保证具有关系：$g(x_n)=f(x_{n+1})$。

 *2.1.23

设 $f(x)$ 在 $(a,+\infty)$ 内连续、有界，试证：$\forall T$，$\exists x_n\to+\infty$ 使得 $\lim_{n\to\infty}[f(x_n+T)-f(x_n)]=0$。

> [!proof]- 证明
> （记 $g(x)\equiv f(x+T)-f(x)$，来找 $x_n\to+\infty$ 使得 $g(x_n)\to 0$。）事实上，若 $x\nearrow+\infty$ 时，$g(x)$ 无穷次变号，则问题明显。只需证明 $x$ 充分大后 $g(x)$ 保持不变号（例如恒有 $g(x)>0$）的情况即可。
> 
> 由 $f$ 的有界性知：$\forall\varepsilon>0$，$x$ 充分大之后，不能永远有 $g(x)\geq\varepsilon$（不然，$f(x+(n+1)T)=\sum_{k=0}^n g(x+kT)+f(x)\geq(n+1)\cdot\varepsilon+f(x)\to+\infty$（当 $n\to\infty$ 时）与 $f$ 有界矛盾）。因此，对充分大的每个自然数 $n$，$\exists x_n>n$，使得 $g(x_n)<1/n$。证毕。

 **2.1.24

设 $f$ 在 $[0,n]$ 上连续（$n$ 为自然数），$f(0)=f(n)$。试证：至少存在 $n$ 组不同的解 $(x,y)$ 使得 $f(x)=f(y)$，且 $y-x>0$ 为整数。

> [!proof]- 证明
> （用数学归纳法。）$1^\circ$ $n=1$ 时明显。
> 
> $2^\circ$（由 $n=k$ 时成立推得 $n=k+1$ 时成立。）考虑函数 $g(x)=f(x+1)-f(x)$，当 $n=k+1$ 时，有 $f(0)=f(k+1)$，故 $\sum_{i=0}^k g(i)=0$，可知总 $\exists\xi\in[0,k]$，使得 $g(\xi)=0$，即 $f(\xi+1)=f(\xi)$，$(\xi,\xi+1)$ 为一组解。
> 
> 作函数
> $$\varphi(x)=\begin{cases}f(x), & x\in[0,\xi],\\f(x+1), & x\in(\xi,k]\end{cases}\text{（平移相接）。}$$
> 
> 这时 $\varphi(0)=\varphi(k)$ 满足命题对 $n=k$ 的条件，应用到 $\varphi$ 可得 $k$ 组解。但 $\varphi$ 的解也必是 $f$ 的解，且与 $(\xi,\xi+1)$ 不同，如此获得 $f$ 的 $n+1$ 组解。得证。

 *2.1.25

用确界原理（非空有上（下）界数集必有上（下）确界）证明：若 $f(x)$ 在 $[a,b]$ 上连续，$f(a)\cdot f(b)<0$，则存在一点 $c\in(a,b)$，使 $f(c)=0$。（西北大学）

> [!tip] 提示
> 不妨设 $f(a)<0, f(b)>0$，于是 $A=\{x\mid f(x)<0\}$ 非空，有上界 $b$。由确界原理，
> $$\exists c\in[a,b]:c=\sup_{f(x)<0}\{x\}\Rightarrow\forall 1/n>0,\exists x_n\in A:c-1/n<x_n<c\;(n=1,2,\cdots)$$
> $\xrightarrow{f\text{连续}}\lim_{n\to\infty} f(x_n)=f(c)\leq 0$（因 $f(x_n)<0$）。
> 
> 又 $c+1/n\notin A$，$f(c+1/n)\geq 0$，$f(c)=\lim_{n\to\infty} f(c+1/n)\geq 0$，故 $f(c)=0$，$c\in(a,b)$。

 *2.1.26

设 $f(x)$ 在 $[a,b]$ 上连续，$f(a)\cdot f(b)<0$，应用闭区间套原理证明：至少存在一点 $\xi\in(a,b)$，使得 $f(\xi)=0$。（北京科技大学）

> [!tip] 提示
> 将 $[a,b]$ 二等分，若中点处 $f((a+b)/2)\neq 0$，两子区间，必有一个 $f$ 在端点异号；将其再二等分；如此下去组成闭区间套 $\{[a_n,b_n]\}$，其公共点 $\xi\in[a_n,b_n]$（$n=1,2,\cdots$），必有 $f(\xi)=0$。

 *2.1.27

用有限覆盖定理证明连续函数的零点定理：若 $f(x)$ 在 $[a,b]$ 上连续，$f(a)\cdot f(b)<0$，则存在 $\xi\in(a,b)$，使得 $f(\xi)=0$。（四川大学）

> [!tip] 提示
> （反证法）否则，$\forall x\in[a,b], f(x)\neq 0\Rightarrow f(x)>0$（或 $<0$）$\xrightarrow{\text{极限保号性}}\exists\delta_x>0$，$(x-\delta_x,x+\delta_x)\cap[a,b]$ 内 $f(x)$ 保持同号，$\{(x-\delta_x,x+\delta_x)\mid x\in[a,b]\}$ 组成 $[a,b]$ 的开覆盖$\Rightarrow$其中存在有限子覆盖，相邻接的两开区间必有公共点$\Rightarrow$相邻区间里 $f$ 同号$\Rightarrow f(a)$ 与 $f(b)$ 同号（矛盾）。

 ## *2.1.28

用闭区间套定理证明连续函数有界性定理，即若 $f(x)$ 在闭区间 $[a,b]$ 上连续，则存在 $M>0$，对一切 $x\in[a,b]$，$|f(x)|\leq M$。（华中师范大学）

 new 2.1.29

1）用闭区间套定理证明有限覆盖定理（注 基本定理互证，这种考研题多见）；

2）试用有限覆盖定理证明：$[a,b]$ 上的正值连续函数 $f(x)$ 必有正的下界 $m$：
$$f(x)\geq m>0\quad(x\in[a,b]).$$
（浙江大学）

> [!tip] 提示
> 1）参看例 1.8.4。
> 
> 2）（因 $f(x)>0$），连续函数有保号性。对每个 $x_i\in[a,b]$，$\exists\delta_i>0$，使得当 $[a,b]$ 中的 $x\in(x_i-\delta_i,x_i+\delta_i)$ 时，就有 $f(x)\geq f(x_i)/2>0$。于是，开区间组成的集合 $\{(x_i-\delta_i,x_i+\delta_i)\}_{x_i\in[a,b]}$ 构成了 $[a,b]$ 的一个覆盖。根据有限覆盖定理，从中能挑出有限子覆盖（记为）$(x_i-\delta_i,x_i+\delta_i), i=1,2,\cdots,N$。如此，$\forall x\in[a,b]\subset\bigcup_{i=1}^N (x_i-\delta_i,x_i+\delta_i)$，有 $f(x)\geq\min_{1\leq i\leq N}\{f(x_i)/2\}\equiv m>0$。


 * §2.2 一致连续性

> [!note] 导读
> 一致连续性是数学院系学生的重点内容，非数学院系学生不作要求. 本节主要讨论如何利用一致连续性的定义及其否定形式，来证明函数一致连续与非一致连续. 其次，讨论一致连续与连续的关系. 最后介绍连续模数及一致连续函数的延拓问题.
> 
> 关于上、下半连续的内容，本书只对基本概念和结论作一综述，有需要的读者可参考本书第 2 版.


### 一、利用一致连续的定义及其否定形式证题

> [!note] 要点
> 设 $f(x)$ 在区间 $I$ 上有定义（$I$ 为开、闭、半开半闭，有限或无限区间）。所谓 $f(x)$ 在 $I$ 上一致连续，意指：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in I$, $|x'-x''|<\delta$ 时，有
> $$
> |f(x')-f(x'')|<\varepsilon.
> $$
> 
> 如此，
> $$
> \begin{aligned}
> & f(x) \text{ 在 } I \text{ 上非一致连续} \\
> \Leftrightarrow & \exists\varepsilon_0>0，\forall\delta>0，\exists x'_\delta,x''_\delta\in I: \text{虽然 } |x'_\delta-x''_\delta|<\delta，\text{但是 } |f(x'_\delta)-f(x''_\delta)|\geq\varepsilon_0 \\
> \Leftrightarrow & \exists\varepsilon_0>0，\forall\frac{1}{n}>0，\exists x'_n,x''_n\in I \ (n=1,2,\cdots): \\
> & \text{虽然 } |x'_n-x''_n|<\frac{1}{n}，\text{但是 } |f(x'_n)-f(x''_n)|\geq\varepsilon_0.
> \end{aligned}
> $$
> 
> 特别，若 $\exists\varepsilon_0>0$，$\exists x'_n,x''_n\in I \ (n=1,2,\cdots)$，虽然 $\lim_{n\to\infty} x'_n=\lim_{n\to\infty} x''_n=a$，但是 $|f(x'_n)-f(x''_n)|\geq\varepsilon_0 \ (n=1,2,\cdots)$，则可断定 $f$ 在 $I$ 上非一致连续。
> 
> 用定义证明 $f$ 在 $I$ 上一致连续，通常的方法是设法证明 $f$ 在 $I$ 满足 Lipschitz 条件：
> $$
> |f(x')-f(x'')|\leq L|x'-x''|, \ \forall x',x''\in I,
> $$
> 其中 $L>0$ 为某一常数。此条件成立必一致连续。
> 
> 特别，若 $f$ 在 $I$ 上存在有界导函数，则 $f$ 在 $I$ 满足 Lipschitz 条件。

> [!example] 例 2.2.1
> 设 $f(x)=\frac{x+2}{x+1} \sin\frac{1}{x}$，$a>0$ 为任一正常数，试证：$f(x)$ 在 $(0,a)$ 内非一致连续，在 $[a,+\infty)$ 上一致连续。（兰州大学）

> [!proof]- 证明
> **1° 证明 $f$ 在 $[a,+\infty)$ 上一致连续。**
> 
> **方法 I** 证明 $f$ 在 $[a,+\infty)$ 上满足 Lipschitz 条件。$\forall x',x''\in[a,+\infty)$，
> $$
> \begin{aligned}
> |f(x')-f(x'')| &\leq \left|\frac{x'+2}{x'+1} \sin\frac{1}{x'} - \frac{x''+2}{x''+1} \sin\frac{1}{x'}\right| + \left|\frac{x''+2}{x''+1} \sin\frac{1}{x'} - \frac{x''+2}{x''+1} \sin\frac{1}{x''}\right| \\
> &\leq \left|\frac{x'+2}{x'+1} - \frac{x''+2}{x''+1}\right| + \frac{x''+2}{x''+1}\cdot 2\left|\cos\frac{\frac{1}{x'}+\frac{1}{x''}}{2}\right| \left|\sin\frac{\frac{1}{x'}-\frac{1}{x''}}{2}\right| \\
> &\leq \frac{|x''-x'|}{(x'+1)(x''+1)} + \left(1+\frac{1}{x''+1}\right)\cdot 2\cdot \frac{\left|\frac{1}{x'}-\frac{1}{x''}\right|}{2} \\
> &\leq \left[\frac{1}{(a+1)^2} + \frac{a+2}{a^2(a+1)}\right]|x'-x''| \equiv L|x'-x''|,
> \end{aligned}
> $$
> 从而 $\forall\varepsilon>0$，$\exists\delta=\frac{\varepsilon}{L}$，当 $|x'-x''|<\frac{\varepsilon}{L}$ 时，$|f(x')-f(x'')|<\varepsilon$。
> 
> **方法 II** 证明 $f'(x)$ 在 $[a,+\infty)$ 上有界。略。
> 
> **2° 证明 $f$ 在 $(0,a)$ 内非一致连续。**
> 
> 取 $x'_n=\frac{1}{2n\pi+\frac{\pi}{2}}$, $x''_n=\frac{1}{2n\pi-\frac{\pi}{2}}$ $(n=1,2,\cdots)$，则 $n$ 充分大时，$x'_n,x''_n\in(0,a)$，且
> $$
> |x'_n-x''_n|=\frac{\pi}{4n^2\pi^2-\frac{\pi^2}{4}}\to 0 \quad (\text{当 } n\to\infty \text{ 时}).
> $$
> 但
> $$
> |f(x'_n)-f(x''_n)|= \left|\frac{4n\pi+\pi+1}{2n\pi+\frac{\pi}{2}+1} + \frac{4n\pi-\pi+1}{2n\pi-\frac{\pi}{2}+1}\right| >2.
> $$
> 故 $f$ 在 $(0,a)$ 内非一致连续。

> [!example] 例 2.2.2
> 证明：$f(x)=\frac{1}{x}$ 在 $(0,1)$，$g(x)=x^2$ 在 $(1,+\infty)$ 内非一致连续。

> [!proof]- 证明
> $\left|\frac{1}{n} - \frac{1}{n+1}\right|\to 0 \ (n\to\infty)$，但
> $$
> \left|\frac{1}{\frac{1}{n}} - \frac{1}{\frac{1}{n+1}}\right|\equiv 1.
> $$
> 
> $|\sqrt{n+1}-\sqrt{n}|=\frac{1}{\sqrt{n+1}+\sqrt{n}}\to 0$，
> 但 $|(\sqrt{n+1})^2-(\sqrt{n})^2|=1$。故 $f$ 在$(0,1)$，$g$ 在$(1,+\infty)$内都非一致连续。

> [!example] ☆例 2.2.3
> 证明：$f(x)$在区间 $I$ 上一致连续的充要条件是：对 $I$ 上任意两数列$\{x_n\},\{x'_n\}$，只要 $x_n-x'_n\to 0$，就有 $f(x_n)-f(x'_n)\to 0$ $(n\to\infty)$。（华中科技大学）

> [!proof]- 证明
> **1°（必要性）** 因 $f$ 一致连续，所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x,x'\in I$，$|x-x'|<\delta$ 时，有
> $$
> |f(x)-f(x')|<\varepsilon. \tag{1}
> $$
> 但 $x_n-x'_n\to 0$（当 $n\to\infty$ 时），故对 $\delta>0$，$\exists N>0$，当 $n>N$ 时，$|x_n-x'_n|<\delta$，从而由式(1)，$|f(x_n)-f(x'_n)|<\varepsilon$。即
> $$
> f(x_n)-f(x'_n)\to 0 \quad (\text{当 } n\to\infty \text{ 时}).
> $$
> 
> **2°（充分性）** 若 $f$ 在 $I$ 上非一致连续，则 $\exists\varepsilon_0>0$，$\forall\frac{1}{n}>0$，$\exists x_n,x'_n\in I$，虽然
> $$
> |x_n-x'_n|<\frac{1}{n}，\text{但 } |f(x_n)-f(x'_n)|\geq\varepsilon_0.
> $$
> 可见 $x_n-x'_n\to 0$，但 $f(x_n)-f(x'_n)\nrightarrow 0$（当 $n\to\infty$ 时），矛盾。

> [!example] ☆例 2.2.4
> 设 $I$ 为有限区间，$f(x)$在 $I$ 上有定义，试证：$f(x)$在 $I$ 上一致连续的充要条件是 $f$ 把 Cauchy 序列映射为 Cauchy 序列①（即当$\{x_n\}$为 Cauchy 序列时，$\{f(x_n)\}$亦为 Cauchy 序列）。（北京师范大学，西北师范大学，河南师范大学）

> [!proof]- 证明
> **1°（必要性）** 已知 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in I$，$|x'-x''|<\delta$ 时，有
> $$
> |f(x')-f(x'')|<\varepsilon. \tag{1}
> $$
> 设$\{x_n\}$为 Cauchy 序列，则对此 $\delta>0$，$\exists N>0$，当 $n,m>N$ 时，有 $|x_n-x_m|<\delta$，从而由式(1)，
> $$
> |f(x_n)-f(x_m)|<\varepsilon，
> $$
> 所以$\{f(x_n)\}$亦为 Cauchy 序列。
> 
> **2°（充分性）** 若 $f(x)$在 $I$ 上非一致连续，则 $\exists\varepsilon_0>0$，$\forall\delta_n=\frac{1}{n}>0$，$\exists x_n,x'_n\in I$：虽然 $|x_n-x'_n|<\frac{1}{n}$，但
> $$
> |f(x_n)-f(x'_n)|\geq\varepsilon_0 \quad (n=1,2,\cdots). \tag{2}
> $$
> 注意到 $I$ 为有限区间，$x_n\in I \ (n=1,2,\cdots)$，因此$\{x_n\}$中存在收敛子列$\{x_{n_k}\}$。因为 $|x_n-x'_n|\to 0$（当 $n\to\infty$ 时），故$\{x'_n\}$中相应的子列$\{x'_{n_k}\}$也收敛于相同的极限。从而穿插之后，序列
> $$
> x_{n_1},x'_{n_1},x_{n_2},x'_{n_2},\cdots,x_{n_k},x'_{n_k},\cdots
> $$
> 亦收敛，为 Cauchy 序列。但其像序列
> $$
> f(x_{n_1}), f(x'_{n_1}), f(x_{n_2}), f(x'_{n_2}), \cdots, f(x_{n_k}), f(x'_{n_k}), \cdots
> $$
> 恒有
> $$
> |f(x_{n_k})-f(x'_{n_k})|\geq\varepsilon_0，
> $$
> 不是 Cauchy 序列，与已知条件矛盾。
> 
> **注** $I$ 的有限性只在充分性用到。对无穷区间，必要性仍成立。

> [!note] 脚注
> ① Cauchy 序列又称基本序列，或自收敛序列，意指所讨论的序列$\{a_n\}$满足 Cauchy 条件：$\forall\varepsilon>0$，$\exists N>0$，$m,n>N$ 时 $|a_m-a_n|<\varepsilon$。

> [!example] 例 2.2.5
> 设 $z=g(y)$于 $J$，$y=f(x)$于 $I$ 都是一致连续的，且 $f(I)\subset J$。试证 $z=g(f(x))$在 $I$ 上一致连续。

> [!tip] 提示
> 可直接利用定义；当 $I,J$ 有限时可利用上例。


### 二、一致连续与连续的关系

我们知道，$f(x)$在区间 $I$ 上一致连续，自然 $f(x)$在 $I$ 上连续，反之不一定. 若 $I$ 为有限闭区间，根据 Cantor 定理，$f$ 在$[a,b]$上连续等价于 $f$ 在$[a,b]$上一致连续.

现在让我们来讨论开区间以及无穷区间的情况.

> [!example] ☆例 2.2.6
> 设 $f(x)$在有限开区间$(a,b)$内连续，试证 $f(x)$在$(a,b)$内一致连续的充要条件是极限 $\lim_{x\to a+} f(x)$ 及 $\lim_{x\to b-} f(x)$ 存在（有限）.（山东大学，南开大学）

> [!proof]- 证
> 1°（必要性）已知 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in(a,b)$，$|x'-x''|<\delta$ 时，有 $|f(x')-f(x'')|<\varepsilon$. 故 $\forall x',x''\in(a,b)$，$a<x'<a+\delta$，$a<x''<a+\delta$ 时，有
> $$
> |f(x')-f(x'')|<\varepsilon.
> $$
> 
> 根据 Cauchy 准则，知 $\lim_{x\to a+} f(x)$ 存在（有限）. 同理 $\lim_{x\to b-} f(x)$ 存在.
> 
> 2°（充分性）补充定义 $f(a)=\lim_{x\to a+} f(x)$，$f(b)=\lim_{x\to b-} f(x)$，则 $f(x)$在$[a,b]$上连续. 由 Cantor 定理，$f(x)$在$[a,b]$上一致连续. 从而 $f(x)$在$(a,b)$内一致连续.

> [!note] 注
> （1）此例表明：在有限开区间上连续函数是否一致连续，取决于函数在端点附近的状态. 应用本例，容易判明 $y=(1/x)\sin x$ 在$(0,1)$内一致连续. 而 $y=\sin(1/x)$，$y=\ln x$，$y=1/(1-x)$在$(0,1)$内非一致连续.
> 
> （2）由此例还可看出，$f(x)$在$(a,b)$内一致连续，则 $f$ 在$(a,b)$内有界. 然而，在开区间上连续、有界，不一定一致连续，如 $y=\sin(1/x)$.
> 
> （3）当$(a,b)$改为无穷区间时，该例的必要性不再成立. 如 $f(x)=x$，$g(x)=\sin x$ 在$(-\infty,+\infty)$上一致连续，但在端点 $\pm\infty$ 无极限. 对于无穷区间，充分性仍是对的. 请看

> [!example] ☆例 2.2.7
> 证明：若 $f(x)$在$[a,+\infty)$上连续，$\lim_{x\to+\infty} f(x)=A$（有限），则 $f(x)$在$[a,+\infty)$上一致连续.（新疆大学，中国人民大学）

> [!proof]- 证
> 1° 因 $\lim_{x\to+\infty} f(x)=A$，所以 $\forall\varepsilon>0$，$\exists\Delta>a$，当 $x',x''>\Delta$ 时，有
> $$
> |f(x')-f(x'')|<\varepsilon \tag{1}
> $$
> （Cauchy 准则之"必要性"）.
> 
> 2° 由 Cantor 定理，$f$ 在$[a,\Delta+1]$上一致连续，故对此 $\varepsilon>0$，$\exists\delta_1>0$，当 $x',x''\in[a,\Delta+1]$，$|x'-x''|<\delta_1$ 时，有
> $$
> |f(x')-f(x'')|<\varepsilon. \tag{2}
> $$
> 
> 3° 令 $\delta=\min\{1,\delta_1\}$，则 $x',x''>a$，$|x'-x''|<\delta$ 时，$x',x''$要么同属于$[a,\Delta+1]$，要么同属于$(\Delta,+\infty)$. 从而由式(1)、(2)知 $|f(x')-f(x'')|<\varepsilon$，即 $f$ 在$[a,+\infty)$上一致连续.

> [!note] 注
> 如下证明是错误的：首先利用以上证明的 1°，得结论"$f$ 在$[\Delta,+\infty)$上一致连续"，然后利用 Cantor 定理，$f$ 在$[a,\Delta]$上一致连续，从而 $f$ 在$[a,+\infty)$上一致连续. 其错误在于 1°中 $\Delta$ 与 $\varepsilon$ 有关，由 1°得不出 $f$ 在$[\Delta,+\infty)$上一致连续.

> [!example] ☆例 2.2.8
> 设 $f(x)$在$[a,+\infty)$上一致连续，$\varphi(x)$在$[a,+\infty)$上连续，$\lim_{x\to+\infty}[f(x)-\varphi(x)]=0$. 证明：$\varphi(x)$在$[a,+\infty)$上一致连续.（上海交通大学，华中科技大学）

> [!proof]- 证
> 1° 因 $\lim_{x\to+\infty}[f(x)-\varphi(x)]=0$，所以 $\forall\varepsilon>0$，$\exists\Delta>a$，当 $x>\Delta$ 时，$|f(x)-\varphi(x)|<\varepsilon/3$. 又因 $f$ 一致连续，故对此 $\varepsilon>0$，$\exists\delta_1>0$，当 $|x'-x''|<\delta_1$ 时 $|f(x')-f(x'')|<\varepsilon/3$. 如此，$\forall x',x''>\Delta$，$|x'-x''|<\delta_1$ 时有
> $$
> |\varphi(x')-\varphi(x'')|\leq|\varphi(x')-f(x')|+|f(x')-f(x'')|+|f(x'')-\varphi(x'')|
> $$
> $$
> <\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon.
> $$
> 
> 2° 利用 Cantor 定理，可知 $\varphi(x)$在$[a,\Delta+1]$上一致连续，所以对此 $\varepsilon>0$，$\exists\delta_2>0$，当 $x',x''\in[a,\Delta+1]$，$|x'-x''|<\delta_2$ 时，有 $|\varphi(x')-\varphi(x'')|<\varepsilon$.
> 
> 3° 取 $\delta=\min\{1,\delta_1,\delta_2\}$，则 $x',x''\in[a,+\infty)$，$|x'-x''|<\delta$ 时，有 $|\varphi(x')-\varphi(x'')|<\varepsilon$. 证毕.

我们知道，$y=x$ 在$(-\infty,+\infty)$上一致连续，但 $y=x^2$ 在$(-\infty,+\infty)$上非一致连续①. 我们要问：在无穷区间上一致连续的函数，当 $x\to\pm\infty$ 时，阶次有何估计？

> [!example] ※例 2.2.9
> 设 $f(x)$在$(-\infty,+\infty)$上一致连续，则存在非负实数 $a$ 与 $b$，使对一切 $x\in(-\infty,+\infty)$，都有
> $$
> |f(x)|\leq a|x|+b.
> $$
> 
> ① 如令 $x_n=\sqrt{n+1}$，$x'_n=\sqrt{n}$，这时 $|x_n-x'_n|=1/(\sqrt{n+1}+\sqrt{n})\to 0$，但 $|x_n^2-x'_n^2|=|n+1-n|=1$，可见 $y=x^2$ 在$(-\infty,+\infty)$上不一致连续.
> 
> 试证明之.（云南大学，南开大学）

> [!proof]- 证
> 因为 $f(x)$一致连续，所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $|x'-x''|\leq\delta$ 时，有 $|f(x')-f(x'')|<\varepsilon$. 现将 $\varepsilon>0,\delta>0$ 固定. 由于 $\forall x\in(-\infty,+\infty)$，$\exists n\in\mathbb{Z}$（整数集），使得 $x=n\delta+x_0$，其中 $x_0\in(-\delta,\delta)$. 注意到 $f(x)$在$[-\delta,\delta]$上有界，即 $\exists M>0$，使得 $|f(x)|\leq M$（$\forall x\in[-\delta,\delta]$）. 因此
> $$
> f(x)=\sum_{k=1}^{n}[f(k\delta+x_0)-f((k-1)\delta+x_0)]+f(x_0)，
> $$
> $$
> |f(x)|\leq\sum_{k=1}^{n}|f(k\delta+x_0)-f((k-1)\delta+x_0)|+|f(x_0)|\leq|n|\varepsilon+M.
> $$
> 
> 由 $x=n\delta+x_0$ 知 $|(x-x_0)/\delta|=|n|$，代入上式得
> $$
> |f(x)|\leq(\varepsilon/\delta)|x-x_0|+M\leq(\varepsilon/\delta)|x|+(M+(\varepsilon/\delta)|x_0|)\leq(\varepsilon/\delta)|x|+(M+\varepsilon).
> $$
> 
> 记 $\varepsilon/\delta=a$，$M+\varepsilon=b$，则 $a>0$，$b>0$，
> $$
> |f(x)|\leq a|x|+b \quad (\forall x\in(-\infty,+\infty)).
> $$
> 
> 此例说明，若 $f(x)$在$(-\infty,+\infty)$上一致连续，则 $x\to\infty$ 时，$f(x)=O(x)$.

下面我们来看一个使用一致连续性的例子.

> [!example] 例 2.2.10
> 设函数 $f(x)$在$[0,+\infty)$上一致连续，且 $\forall x>0$ 有 $\lim_{n\to\infty} f(x+n)=0$（$n$ 为正整数）. 试证 $\lim_{x\to+\infty} f(x)=0$.（南昌大学，上海师范大学）

> [!note] 分析
> 要证明 $\lim_{x\to+\infty} f(x)=0$，即要证明：$\forall\varepsilon>0$ $\exists\Delta>0$，当 $x>\Delta$ 时，有 $|f(x)|<\varepsilon$.
> 
> 已知 $\forall x>0$，有 $\lim_{n\to\infty} f(x+n)=0$. 因此对区间$[0,1]$上的每个点 $x\in[0,1]$，相应 $\exists N_x>0$，当 $n>N_x$ 时 $|f(x+n)|<\varepsilon$. 可惜这样找得的 $N_x$（$x\in[0,1]$）共有无穷多个，无法从中找出最大的 $N$. 为此，将$[0,1]$ $k$ 等分，对每个分点 $x_i=i/k$（$i\in\{1,2,\cdots,k\}$），相应 $\exists N_i>0$，使得当 $n>N_i$ 时，$|f(x_i+n)|<\varepsilon$. 令 $N=\max\{N_1,N_2,\cdots,N_k\}$，则当 $n>N$ 时，有 $|f(x_i+n)|<\varepsilon$（$i=1,2,\cdots,k$）. 如此我们虽未找到所需的 $\Delta>0$，但至少在$[N,+\infty)$内的每个格点 $x_i+n$（$i=1,2,\cdots,k$，$n=N+1,N+2,\cdots$）上，有 $|f(x_i+n)|<\varepsilon$. 注意到 $f(x)$在$[0,+\infty)$上一致连续，因此把分划取得足够细，使得格点足够密，可使两格点之间的函数值与格点的函数值相差任意小.

> [!proof]- 证
> 1° 因 $f(x)$在$[0,+\infty)$上一致连续，故 $\forall\varepsilon>0$，$\exists\delta>0$，当 $|x'-x''|<\delta$（$x',x''>0$）时，有
> $$
> |f(x')-f(x'')|<\varepsilon/2. \tag{1}
> $$
> 
> 2° 取 $k>1/\delta$，将区间$[0,1]$ $k$ 等分. 记分点 $x_i=i/k$（$i=1,2,\cdots,k$），这时间距 $x_i-x_{i-1}=1/k<\delta$.
> 
> 3° 由已知条件，对每个 $x_i=i/k$，有 $\lim_{n\to\infty} f(x_i+n)=0$. 从而 $\exists N_i>0$，使得 $n>N_i$ 时有 $|f(x_i+n)|<\varepsilon/2$. 令 $N=\max_{1\leq i\leq k}\{N_i\}$，则当 $n>N$ 时，
> $$
> |f(x_i+n)|<\varepsilon/2 \quad (i=1,2,\cdots,k). \tag{2}
> $$
> 
> 4° 取 $\Delta=N>0$，来证当 $x>\Delta$ 时 $|f(x)|<\varepsilon$. 事实上，$\forall x>N$，记 $n=[x]$①$\geq N$，因为 $x-n\in[0,1)$，故 $\exists i\in\{1,2,\cdots,k\}$，使得 $|(x-n)-x_i|<\delta$，即 $|x-(n+x_i)|<\delta$，由式(1)，$|f(x)-f(n+x_i)|<\varepsilon/2$. 再由式(2)，
> $$
> |f(x)|\leq|f(x)-f(n+x_i)|+|f(n+x_i)|<\varepsilon/2+\varepsilon/2=\varepsilon.
> $$
> 
> 即 $\lim_{x\to+\infty} f(x)=0$.

由此例易知：若 $g$ 在$[a,+\infty)$上一致连续，且 $\forall x\geq 0$，有 $\lim_{n\to\infty} g(x+n)=A$，则
$$
\lim_{x\to+\infty} g(x)=A.
$$


### 三、用连续模数描述一致连续性

> [!definition] 定义 1
> 设 $f(x)$ 在区间 $I$ 上有定义，
> $$
> \omega_f(\delta)= \sup_{\substack{x',x''\in I\\ |x'-x''|<\delta}} |f(x')-f(x'' )|
> $$
> 称为函数 $f$ 的连续模数.
> 
> 可见 $\omega_f(\delta)$ 是关于 $\delta$ 的非负、不减函数. 下面我们借助它来描述一致连续性.

> [!example] 例 2.2.11
> 若 $f(x)$ 在区间 $I$ 上有定义，则 $f(x)$ 在 $I$ 上一致连续的充要条件是
> $$
> \lim_{\delta\to0^+} \omega_f(\delta)=0.
> $$

> [!proof]- 证明
> 1° 必要性. 因 $f(x)$ 在 $I$ 上一致连续，因此 $\forall\varepsilon>0$，$\exists\delta_1>0$，当 $x',x''\in I$，$|x'-x''|<\delta_1$ 时，有 $|f(x')-f(x'' )|<\varepsilon/2$. 从而
> $$
> \omega_f(\delta_1)= \sup_{\substack{x',x''\in I\\ |x'-x''|<\delta_1}} |f(x')-f(x'' )|\le\varepsilon/2.
> $$
> 
> 故 $0<\delta<\delta_1$ 时，$0\le\omega_f(\delta)\le\omega_f(\delta_1)\le\varepsilon/2<\varepsilon$. 所以 $\lim_{\delta\to0^+} \omega_f(\delta)=0$.
> 
> 2° 充分性．由 $\lim_{\delta\to0^+}\omega_f(\delta)=0$ 知：$\forall\varepsilon>0$，$\exists\delta_1>0$ 使得 $0\le\omega_f(\delta_1)<\varepsilon$，故当 $x',x''\in I$，$|x'-x''|<\delta_1$ 时，有
> $$
> |f(x')-f(x'' )|\le \sup_{\substack{x',x''\in I\\ |x'-x''|<\delta_1}}|f(x')-f(x'' )|=\omega_f(\delta_1)<\varepsilon.
> $$
> 
> 所以 $f$ 在 $I$ 上一致连续．

> [!note] 注
> 由此可得一致连续的观察法．因为 $\omega_f(\delta)$ 的值只与 $f$ 的图形最陡的地方有关．若 $f$ 的图形在某处无限变陡，使得 $\omega_f(\delta)\not\to0$（$\delta\to0$），则 $f$ 非一致连续．若 $f$ 在某处最陡，但当 $\delta\to0^+$ 时，此处的变差 $|f(x')-f(x'' )|\to0$，则 $f$ 一致连续．
> 
> 例如 $f(x)=\frac{1}{x}$（$x>0$），在 $x=0$ 处图形无限变陡．$\forall\delta>0$，$\omega_f(\delta)=+\infty$，$\delta\to0^+$ 时 $\omega_f(\delta)\not\to0$．因此 $f$ 在任何区间 $(0,c)$（$c>0$）内都是非一致连续的．但在区间 $[c,+\infty)$ 上，$f(x)=\frac{1}{x}$ 在点 $c$ 处最陡，且 $\omega_f(\delta)=\frac{1}{c}-\frac{1}{c+\delta}\to0$（当 $\delta\to0^+$ 时）．可见 $f(x)=\frac{1}{x}$ 在 $[c,+\infty)$ 上一致连续．
> 
> 类似，我们容易看出 $\ln x$，$e^x$，$\cos \frac{1}{x}$，$\arctan x$，$\sin \frac{1}{x}$ 的一致连续区间，留给读者考虑．


### ※四、集上的连续函数及一致连续函数的延拓问题

前面例 2.2.6 告诉我们，若 $f(x)$ 在 $(a,b)$ 内一致连续，则 $f$ 在端点 $a,b$ 处有有限极限，因此若将极限值分别作为 $f$ 在 $a,b$ 点的值，那么 $f$ 被延拓到闭区间 $[a,b]$ 上，且在 $[a,b]$ 上一致连续，下面我们将此结论推广到一般的集合 $E\subset\mathbb{R}$ 上．为此，我们首先把连续与一致连续的概念推广到任意的集合 $E$ 上：

> [!definition] 定义2
> $f(x)$ 在集合 $E\subset\mathbb{R}$ 上有定义，$x_0\in E$，所谓 $f(x)$ 在 $x_0$ 处连续，指：$\forall\varepsilon>0$，$\exists\delta>0$，当 $|x-x_0|<\delta$，$x\in E$ 时，有 $|f(x)-f(x_0)|<\varepsilon$．若 $f$ 在 $E$ 的每点上都连续，则称 $f$ 在 $E$ 上连续．

换句话说，定义与区间上连续的定义一样，只是把区间 $I$ 改为了集合 $E$．类似可定义 $E$ 上的一致连续性．

值得注意的是，按此定义，$f$ 在 $E$ 的孤立点（如果存在）$x_0$ 必然连续，因 $\delta>0$ 取得充分小时，$x_0$ 的 $\delta$ 邻域 $(x_0-\delta,x_0+\delta)$ 与 $E$ 只有一个公共点 $x_0$．可见今后只需讨论 $f$ 在 $E$ 的聚点处的连续性．

按此定义，易知 Dirichlet 函数

$$
D(x)=\left\{\begin{array}{ll}
1，&当 x 为有理数时，\\
0，&当 x 为无理数时
\end{array}\right.
$$

处处不连续．但限制在集合 $Q=\{有理数\}$ 上考虑，则 $D(x)$ 在 $Q$ 上连续．

下面讨论延拓问题．

> [!example] 例 2.2.12
> 设 $E$ 为实轴 $\mathbb{R}$ 上的一个集合，$E_1\subset E$ 为 $E$ 的稠密子集（即 $\forall x\in E$，$\exists x_n\in E_1$（$n=1,2,\cdots$），使得 $x_n\to x$（当 $n\to\infty$ 时））．若 $f_1(x)$ 是 $E_1$ 上的一致连续函数（即：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in E_1$，$|x'-x''|<\delta$ 时，有 $|f_1(x')-f_1(x'')|<\varepsilon$），则在 $E$ 上有唯一函数 $f(x)$ 使得
>
> 1）$f(x)=f_1(x)$（当 $x\in E_1$ 时）；
>
> 2）$f(x)$ 在 $E$ 上连续．特别 $E$ 为有界集合时，$f(x)$ 在 $E$ 上一致连续．

> [!proof]- 证
> 证明的思路如下：已知对任意 $x_0\in E$，可取出序列 $\{x_n\}\subset E_1$，使得 $x_n\to x_0$．我们来证明 $\displaystyle\lim_{n\to\infty}f_1(x_n)$ 存在，且极限值与 $\{x_n\}$ 的取法无关，函数 $f(x)$：
>
> $$
> f(x_0)\equiv\lim_{n\to\infty}f_1(x_n)
> $$
>
> 在 $E$ 上被任意确定．然后证明此函数在 $E$ 上满足条件 1）和 2），并且符合此条件的函数是唯一的．具体地说：
>
> 1° 已知 $\forall x_0\in E$，$\exists x_n\in E_1$（$n=1,2,\cdots$），使得 $x_n\to x_0$（$n\to\infty$）．现证 $\{f_1(x_n)\}$ 收敛．事实上，由于 $f_1(x)$ 在 $E_1$ 上一致连续：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in E_1$，$|x'-x''|<\delta$ 时，有 $|f_1(x')-f_1(x'')|<\varepsilon$．由 $\{x_n\}$ 的收敛性，对此 $\delta>0$，$\exists N>0$，当 $m,n>N$ 时，有 $|x_m-x_n|<\delta$，从而 $|f_1(x_m)-f_1(x_n)|<\varepsilon$．故 $\{f_1(x_n)\}$ 收敛．
>
> 2° 另设 $x'_n\in E_1$（$n=1,2,\cdots$），$x'_n\to x_0$（$n\to\infty$），需证 $\displaystyle\lim_{n\to\infty}f_1(x'_n)=\lim_{n\to\infty}f_1(x_n)$．但这是明显的，否则令 $\tilde x_{2n}=x_n$ 及 $\tilde x_{2n-1}=x'_n$（$n=1,2,\cdots$），有 $\tilde x_n\in E_1$，$\tilde x_n\to x_0$ 使得 $\{f_1(\tilde x_n)\}$ 发散，这与 1° 的结论矛盾．
>
> 至此，我们可以在 $E$ 上任意地定义函数
>
> $$
> f(x_0)\equiv\lim_{n\to\infty}f_1(x_n)\quad（\forall x_0\in E），\tag{1}
> $$
>
> 其中 $\{x_n\}$ 是 $E_1$ 中任意一个趋于 $x_0$ 的序列．
>
> 3° 我们来证明 $f(x)$ 满足条件 1）、2）．事实上，$\forall x\in E_1$，只要令 $x_n=x$（$n=1,2,\cdots$），则
>
> $$
> f(x)=\lim_{n\to\infty}f_1(x_n)=f_1(x).
> $$
>
> 这就证明了条件 1）．
>
> 为了证明 $f(x)$ 适合条件 2），我们只要证明："$f(x)$ 在 $E$ 的任何有界子集 $F\subset E$ 上一致连续．"这是因为，对于任意 $x_0\in E$，我们总可找到包含 $x_0$ 的有界子集 $F\subset E$，既然 $f$ 在 $F$ 上一致连续，自然 $f$ 在 $x_0$ 处连续．然后由 $x_0$ 的任意性，知 $f$ 在 $E$ 上处处连续．其次，若 $E$ 本身为有界集合，则可令 $F=E$，便知 $f$ 在 $E$ 上一致连续．剩下的问题在于证明 $f(x)$ 在 $F$ 上一致连续，即要证明：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in F$，$|x'-x''|<\delta$ 时，有 $|f(x')-f(x'')|<\varepsilon$．实际上，已知 $f_1(x)$ 在 $E_1$ 上一致连续，所以 $\forall\varepsilon>0$，$\exists\delta_1>0$，当 $x',x''\in E_1$，$|x'-x''|<\delta_1$ 时，有
>
> $$
> |f_1(x')-f_1(x'')|<\frac{\varepsilon}{3}.\tag{2}
> $$
>
> 今取 $\displaystyle\delta=\frac{\delta_1}{3}$，可以证明这时若 $x',x''\in F$，$|x'-x''|<\delta$，则有 $|f(x')-f(x'')|<\varepsilon$．因为对 $x',x''\in F$，
>
> $$
> \exists x'_n,x''_n\in E_1\;(n=1,2,\cdots)，\text{使得 }x'_n\to x',\;x''_n\to x''\;(当 n\to\infty 时)，\\
> f(x')=\lim_{n\to\infty}f_1(x'_n),\;f(x'')=\lim_{n\to\infty}f_1(x''_n).
> $$
>
> 从而对 $\varepsilon>0$ 与 $\delta_1>0$，$\exists n_0$（充分大）使得
>
> $$
> |x'_{n_0}-x'|<\frac{\delta_1}{3},\quad |x''_{n_0}-x''|<\frac{\delta_1}{3},
> $$
>
> $$
> |f(x')-f_1(x'_{n_0})|<\frac{\varepsilon}{3},\quad |f(x'')-f_1(x''_{n_0})|<\frac{\varepsilon}{3}.
> $$
>
> 故
>
> $$
> |x'_{n_0}-x''_{n_0}|\le |x'_{n_0}-x'|+|x'-x''|+|x''-x''_{n_0}|<\frac{\delta_1}{3}+\frac{\delta_1}{3}+\frac{\delta_1}{3}=\delta_1.
> $$
>
> 于是由式（2），有 $|f_1(x'_{n_0})-f_1(x''_{n_0})|<\dfrac{\varepsilon}{3}$．因此
>
> $$
> \begin{aligned}
> |f(x')-f(x'')|
> &\le |f(x')-f_1(x'_{n_0})|+|f_1(x'_{n_0})-f_1(x''_{n_0})|+|f_1(x''_{n_0})-f(x'')|\\
> &<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon.
> \end{aligned}
> $$
>
> 问题证毕．


### 单元练习 2.2

> [!note] ☆ 2.2.1
> 设 $f$ 是区间 $I$ 上的实函数，试证如下三条件有逻辑关系：1）$\Rightarrow$ 2）$\Rightarrow$ 3）．
>
> 1）$f$ 在 $I$ 上可导且导函数有界，即：$\exists M>0$ 使得 $|f'(x)|\leq M$（$\forall x\in I$）；
> 2）$f$ 在 $I$ 上满足 Lipschitz 条件，即：$\exists L>0$ 使得 $|f(x')-f(x'')|\leq L|x'-x''|$（$\forall x',x''\in I$）；
> 3）$f$ 在 $I$ 上一致连续．

> [!hint]- 提示
> （1）$\Rightarrow$ 2）用 Lagrange 中值公式，取 $L=M$；（2）$\Rightarrow$ 3）取 $\delta=\frac{\varepsilon}{L}$．

> [!note] ☆ 2.2.2
> 设 $f(x)$ 在区间 $I$ 上有定义．为了检验 $f$ 在 $I$ 上是否一致连续，今设计如下的实验：取一根内空直径为 $\varepsilon$ 的圆形直管（$\varepsilon>0$），截取长度为 $\delta$ 的一段（$\delta>0$），将直管中轴与 $x$ 轴平行放好，然后让 $y=f(x)$ 的曲线平移从管内穿过．若不论 $\varepsilon>0$ 多么小，只要事先将直管长度 $\delta>0$ 取定足够短，曲线就能平移穿过此管，整个穿越过程 $\delta$ 无须改变，那么 $f$ 就在 $I$ 上一致连续；否则就是非一致连续．问这种理解正确吗？（注 一致性主要体现在"整个穿越过程 $\delta$ 无须改变"上！）《正确》

> [!note] ☆ 2.2.3
> 函数 $f(x)$ 在 $[a,b]$ 上一致连续，又在 $[b,c]$ 上一致连续，$a<b<c$．用定义证明：$f(x)$ 在 $[a,c]$ 上一致连续．（北京大学）

> [!hint]- 提示
> $\forall\varepsilon>0$，在 $[a,b]$，$[b,c]$ 上分别找到 $\delta_i>0$（$i=1,2$），使得 $x'_1,x''_1\in[a,b]$ 或 $x'_2,x''_2\in[b,c]$ 时，只要 $|x'_i-x''_i|<\delta_i$（$i=1,2$），则 $|f(x'_i)-f(x''_i)|<\frac{\varepsilon}{2}$．从而 $|x'-x''|<\delta=\min\{\delta_1,\delta_2\}$，即令 $x',x''$ 分居 $[a,b]$，$[b,c]$ 中时，也有
> $$
> |f(x')-f(x'')|\leq|f(x')-f(b)|+|f(b)-f(x'')|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$

> [!exercise] 2.2.4
> 设 $f(x)$ 在 $[0,+\infty)$ 上满足 Lipschitz 条件，证明 $f(x^\alpha)$（$0<\alpha<1$ 为常数）在 $[0,+\infty)$ 上一致连续．（武汉大学）

> [!hint]- 提示
> 内层函数 $g(x)=x^\alpha$ 在 $[0,1]$ 上连续，因而在 $[0,1]$ 上一致连续；在 $[1,+\infty)$ 上其导数有界，从而 $g$ 在 $[1,+\infty)$ 上也一致连续．故 $g$ 在 $[0,+\infty)$ 上一致连续（由上题）．外层函数满足 Lipschitz 条件，所以也一致连续．从而复合函数 $f(x^\alpha)$ 也一致连续（例 2.2.5）．

> [!exercise] 2.2.5
> 证明：$y=\sin\sqrt{x}$ 在 $(0,+\infty)$ 上一致连续．（武汉大学）

> [!hint]- 提示
> 由 Cantor 定理可知，$\sin\sqrt{x}$ 在 $[0,1]$ 上一致连续；又因 $\sin\sqrt{x}$ 在 $(1,+\infty)$ 上导数有界，从而满足 Lipschitz 条件，知 $\sin\sqrt{x}$ 在 $(1,+\infty)$ 上一致连续．于是，$\forall\varepsilon$，在 $[0,1]$ 和 $(1,+\infty)$ 上分别能找到 $\delta_1$ 和 $\delta_2$，再令 $\delta=\min\{\delta_1,\delta_2,1\}$，就知 $\sin\sqrt{x}$ 在 $(0,+\infty)$ 上一致连续．

> [!proof]- 另证
> 利用"和差化积公式"，就可以用 $\varepsilon$-$\delta$ 方法证明 $\sin\sqrt{x}$ 在 $(0,+\infty)$ 上一致连续．

> [!note] new ☆ 2.2.6
> 请回答：函数 $f(x)=\sin x^2$ 在 $(-\infty,+\infty)$ 上是否一致连续？说明理由．（南开大学）《否》

> [!hint]- 提示
> 令 $x'_n=\sqrt{n\pi}$，$x''_n=\sqrt{n\pi+\frac{\pi}{2}}$，当 $n\to\infty$ 时，$|x'_n-x''_n|\to0$，但 $|\sin x_n'^2-\sin x_n''^2|=1$，不趋于 $0$．

> [!exercise] 2.2.7
> 用不等式叙述 $f(x)$ 在 $(a,b)$ 内不一致连续．（内蒙古大学）
>
> 《$\exists\varepsilon_0>0$，使得 $\forall\delta>0$，$\exists x',x''\in(a,b)$：虽然 $|x'-x''|<\delta$，但是 $|f(x')-f(x'')|\geq\varepsilon_0$》

> [!note] ☆ 2.2.8
> 证明：$g(x)=\sin\frac{1}{x}$ 在 $(0,1)$ 内不一致连续．（中国科学院）

> [!hint]- 提示
> 例如，可取 $x'_n=\frac{1}{n\pi}$，$x''_n=\frac{2}{(2n+1)\pi}$，$|x'_n-x''_n|\to0$，但 $|g(x'_n)-g(x''_n)|\nrightarrow0$（$n\to\infty$）
>
> （利用例 2.2.3）．

> [!note] ☆ 2.2.9
> 证明：函数 $f(x)=\frac{|\sin x|}{x}$ 在每个区间 $J_1=\{x\mid -1<x<0\}$，$J_2=\{x\mid 0<x<1\}$ 内一致连续，但在 $J_1\cup J_2=\{x\mid 0<|x|<1\}$ 内非一致连续．（北京航空航天大学）

> [!hint]- 提示
> $f(x)$ 在 $(-1,0)$ 内部连续，端点为可去间断点，补充定义可使其在 $[-1,0]$ 上连续，利用 Cantor 定理可知 $f(x)$ 在 $[-1,0]$ 上一致连续，即 $f(x)$ 在 $(-1,0)$ 内一致连续．$(0,1)$ 上亦然．但 $(-1,0)\cup(0,1)$ 上 $f(x)$ 非一致连续，因为：如取点对 $(x'_n,x''_n)=\left(-\frac{1}{n},\frac{1}{n}\right)\to0$，有 $|f(x'_n)-f(x''_n)|=2\frac{\sin\frac{1}{n}}{\frac{1}{n}}\to2\neq0$（当 $n\to\infty$ 时）．注意跟练习题 2.2.3 比较．

> [!exercise] 2.2.10
> 证明：周期函数只要连续必定一致连续．

> [!hint]- 提示
> 设 $f$ 有周期 $T>0$，将 $\mathbb{R}$ 分成周期段：$I_i=[iT,(i+1)T]$（$i\in\mathbb{Z}$），利用 Cantor 定理，在 $[-T,2T]$ 上：$\forall\varepsilon>0$，$\exists\delta_1>0$，当 $|x'-x''|<\delta_1$ 时，有 $|f(x')-f(x'')|<\varepsilon$．取 $\delta=\min\{\delta_1,T\}$，可证在 $\mathbb{R}$ 上当 $|x'-x''|<\delta$ 时恒有 $|f(x')-f(x'')|<\varepsilon$．

> [!exercise] 2.2.11
> 1）证明：在区间 $I$ 上一致连续的两函数的和与差仍在 $I$ 上一致连续；
> new 2）设 $f(x)$，$g(x)$ 是区间 $I$ 上有界且一致连续的函数，求证：$f(x)g(x)$ 在 $I$ 上一致连续．
> （北京大学）

> [!exercise] 2.2.12
> 证明：若 $(-\infty,+\infty)$ 上的连续函数 $y=f(x)$ 有极限
> $$
> \lim_{x\to+\infty}f(x)=A,\quad\lim_{x\to-\infty}f(x)=B,
> $$
> 则 $y=f(x)$ 在 $(-\infty,+\infty)$ 上一致连续．

> [!hint]- 提示
> 可利用例 2.2.7 的结果或证法．

> [!exercise] 2.2.13
> 设单调有界函数 $f$ 在区间 $I$（$I=(a,b)$ 或 $I=[a,+\infty)$）上连续，求证 $f$ 在 $I$ 上一致连续．（北京师范大学）

> [!exercise] 2.2.14
> 证明：在有限开区间上一致连续的两函数之积仍一致连续．问商的情况怎样？无穷区间上关于积的结论是否成立？证明之．

> [!hint]- 提示
> 利用例 2.2.6，可知两函数 $f,g$ 有界，即 $\exists M>0$，使得 $|f(x)|\leq M$，$|g(x)|\leq M$，从而 $\forall x',x''\in I$，有
> $$
> \begin{aligned}
> |f(x')g(x')-f(x'')g(x'')|&\leq|f(x')g(x')-f(x'')g(x')|+|f(x'')g(x')-f(x'')g(x'')|\\
> &\leq M|f(x')-f(x'')|+M|g(x')-g(x'')|．
> \end{aligned}
> $$
> 商可举反例：$1$ 与 $x$ 的商 $\frac{1}{x}$．

> [!exercise] 2.2.15
> 求证：$f(x)=\frac{x^{314}}{e^x}$ 在 $[0,+\infty)$ 上一致连续．（哈尔滨工业大学）

> [!hint]- 提示
> 利用 L'Hospital 法则，可知 $f(+\infty)=0$．

> [!note] ☆ 2.2.16
> 设实函数 $f(x)$ 在 $[0,+\infty)$ 上连续，在 $(0,+\infty)$ 内处处可导，且 $\lim\limits_{x\to+\infty}|f'(x)|=A$（有限或 $+\infty$），证明：当且仅当 $A$ 有限时，$f$ 在 $[0,+\infty)$ 上一致连续．（清华大学）

> [!hint]- 提示
> 当 $A$ 有限时，$f'$ 有界，从而 $f$ 满足 Lipschitz 条件，一致连续．
>
> 若 $A=+\infty$，对 $\varepsilon_0=1$，令 $x'=a>0$，$x''=a+\frac{1}{n}$，则 $\forall n\in\mathbb{N}$，$a$ 充分大时，有
> $$
> |f(x')-f(x'')|=|f'(\xi)|\cdot\frac{1}{n}\geq\varepsilon_0=1\quad(\xi>a)．
> $$
> 故 $f$ 非一致连续．

> [!remark] 注
> 此题结论给判断一致连续带来很大方便，请见下面习题 2.2.19，另外华东师范大学以及哈尔滨工业大学也曾用过类似考题．

> [!exercise] 2.2.17
> 函数 $f(x)$ 在开区间 $(a,b)$ 内有连续的导函数，且 $\lim\limits_{x\to a^+}f'(x)$ 与 $\lim\limits_{x\to b^-}f'(x)$ 均存在有限，试证：
>
> 1）$f(x)$ 在 $(a,b)$ 内一致连续；　　2）$\lim\limits_{x\to a^+}f(x)$，$\lim\limits_{x\to b^-}f(x)$ 均存在．

> [!exercise] 2.2.18
> 若 $f(x),g(x)$ 在区间 $I$ 上有界导函数，它们的乘积是否一致连续？为什么？

> [!hint]- 提示
> 否．如 $f(x)=g(x)=x$，$f'(x)=g'(x)=1$，$f(x)\cdot g(x)=x^2$ 在 $\mathbb{R}$ 上非一致连续．当 $I$ 有限时，应回答：是！见习题 2.2.1 及 2.2.14 的提示．

> [!note] ☆ 2.2.19
> 讨论下列函数在所给区间内的一致连续性：
>
> 1）$y=\sqrt{x}\ln x$，在 $[1,+\infty)$ 上；（北京大学）
> 2）$y=x\ln x$，在 $(0,+\infty)$ 内；（武汉大学）
> 3）$y=\sqrt[3]{\frac{x^2}{x+1}}$，$x\geq0$；（中国人民大学）
> 4）$y=\sqrt[3]{x^2}-\sqrt[3]{x^2+1}$，在 $\mathbb{R}$ 上；
> 5）$y=\sqrt[3]{x^3-x^2-x+1}$，在 $\mathbb{R}$ 上；
> 6）$y=\sqrt{\frac{x^4+1}{x^2+1}}$，在 $\mathbb{R}$ 上；
> 7）$y=\left(8+\frac{1}{2}\cos^2x\right)\sin3x$，在 $\mathbb{R}$ 上；
> 8）$y=\ln\left(x+\sqrt{x^2+1}\right)$，在 $\mathbb{R}$ 上；
> 9）$y=x+\arctan\left[x\left(1+\frac{1}{x}\right)^x\right]$，$x>0$；
> *10）$x=\frac{3at}{1-t^2}$，$y=\frac{3at^2}{1+t^2}$（$-\infty<t<-1$）所决定的函数 $y=y(x)$．

> [!hint]- 提示
> 1）$y'=\frac{\ln x+2}{2\sqrt{x}}\to0$（$x\to+\infty$），$y'|_{x=1}=1$，知 $y'$ 有界；
> 2）$y'\to+\infty$（$x\to+\infty$），利用习题 2.2.16 结果；
> 4）$y(\pm\infty)=0$，利用习题 2.2.12 结果；
> 7）周期函数，利用习题 2.2.10；
> *10）计算 $x'_t,y'_t$，可知 $(-\infty,-1)$ 内 $x'_t>0$，$y'_t<0$，从 $-\infty\nearrow-1$ 时，$x(t)$ 由 $0\nearrow+\infty$，$y(t)$ 由 $3a>\frac{3}{2}a$；$[0,+\infty)$ 上，$y'_x<0$，$y(x)\searrow$，连续，端点有有限极限．故一致连续．以上默认了 $a>0$．$a<0$ 可类似讨论．

> [!exercise] 2.2.20
> 设 $f(x)$ 在 $[c,+\infty)$ 上连续，且当 $x\to+\infty$ 时，$f(x)$ 有渐近线 $y=ax+b$，试证 $f(x)$ 在 $[c,+\infty)$ 上一致连续．

> [!hint]- 提示
> 利用例 2.2.8 的方法或直接利用结果．

> [!exercise] 2.2.21
> 设函数 $f(x)$ 在 $[a,+\infty)$ 上连续，且 $\lim\limits_{x\to+\infty}[f(x)-cx-d]=0$（$c,d$ 为常数），求证 $f(x)$ 在 $[a,+\infty)$ 上一致连续．（北京师范大学）

> [!note] ☆ 2.2.22
> 证明：
> $$
> f(x)=
> \begin{cases}
> |x|\left(2+\sin\frac{1}{x}\right), & x\neq0,\\
> 0, & x=0
> \end{cases}
> $$
> 在 $\mathbb{R}$ 上一致连续．

> [!hint]- 提示
> $f(x)$ 在 $\mathbb{R}$ 上连续，且 $\lim\limits_{x\to+\infty}[f(x)-2x-1]=0$，$\lim\limits_{x\to-\infty}[f(x)+2x+1]=0$，即 $x\to+\infty$ 时有渐近线 $y=2x+1$，$x\to-\infty$ 时有渐近线 $y=-2x-1$．故 $f(x)$ 在 $\mathbb{R}$ 上一致连续．

> [!note] *2.2.23
> 设函数 $f(x)$ 在 $[a,b]$ 上连续，求证：存在一函数 $\psi$ 在 $(0,+\infty)$ 上具有下述性质：
> 1）$\psi$ 在 $(0,+\infty)$ 内单调上升，且当 $t\geq(b-a)$ 时，$\psi(t)=\text{常数}$；
> 2）对任意 $x',x''\in[a,b]$，有 $|f(x')-f(x'')|\leq\psi(|x'-x''|)$；
> 3）$\lim\limits_{t\to0^+}\psi(t)=0$．（北京师范大学）

> [!hint]- 提示
> 令 $\psi(t)=\sup\limits_{\substack{x',x''\in[a,b]\\|x'-x''|\leq t}}|f(x')-f(x'')|$，则 1），2），3）明显（参见例 2.2.11）．

> [!note] new *2.2.24
> 设 $f(x):[0,+\infty)\to[0,+\infty)$ 是一致连续函数，$\alpha\in(0,1]$，求证：$g(x)=f^\alpha(x)$ 也在 $[0,+\infty)$ 上一致连续．（中国科学技术大学）

> [!hint]- 提示
> 设 $0<t\leq1$，$0<\alpha\leq1$，则 $t^\alpha$ 随 $\alpha$ 增大而减小，即 $1\geq t^\alpha\geq t>0$，从而
> $$
> 1-t^\alpha\leq1-t\leq(1-t)^\alpha.
> $$
> 在 $1-t^\alpha\leq(1-t)^\alpha$ 中，令 $t=\frac{v}{u}$（$u\geq v>0$），可得
> $$
> |u^\alpha-v^\alpha|\leq|u-v|^\alpha,\quad\alpha\in(0,1],\;\forall u,v>0．\tag{1}
> $$
>
> 因 $f(x)$ 一致连续，$\forall\varepsilon>0$，$\exists\delta>0$，$\forall x_1,x_2>0$，当 $|x_1-x_2|<\delta$ 时，有
> $$
> |f(x_1)-f(x_2)|<\varepsilon^{\frac{1}{\alpha}}.
> $$
> 利用不等式（1），有
> $$
> |[f(x_1)]^\alpha-[f(x_2)]^\alpha|\leq|f(x_1)-f(x_2)|^\alpha<\varepsilon\quad(0<\varepsilon<1).
> $$
> 故 $g(x)=f^\alpha(x)$ 也在 $[0,+\infty)$ 上一致连续．证毕．

> [!exercise] new 2.2.25
> 试证：函数 $f(x)=\frac{|\sin x|}{x}$ 在 $(0,1)$ 和 $(-1,0)$ 内分别是一致连续的，但在 $(0,1)\cup(-1,0)$ 内不一致连续．（浙江大学）

> [!hint]- 提示
> 1° 因 $\lim\limits_{x\to0^+}\frac{|\sin x|}{x}=1$，$\lim\limits_{x\to1}\frac{|\sin x|}{x}=\sin1$，补充 $f(0)=1$，$f(1)=\sin1$，则 $f(x)$ 在 $[0,1]$ 上连续．再利用 Cantor 定理，$f(x)=\frac{|\sin x|}{x}$ 在 $[0,1]$ 上（从而也在 $(0,1)$ 内）一致连续．类似地，$f(x)$ 在 $(-1,0)$ 内也一致连续．
>
> 2° 但是，取 $x_n=\frac{1}{n}$，$x'_n=-\frac{1}{n}$，则当 $n\to\infty$ 时，$|x_n-x'_n|=\frac{2}{n}\to0$，而 $|f(x_n)-f(x'_n)|\to2$．所以在 $(0,1)\cup(-1,0)$ 内，$f(x)$ 非一致连续．

> [!exercise] new 2.2.26
> 函数 $f(x)=\sin x^2$ 在 $(-\infty,+\infty)$ 上是否一致连续？说明理由．（南开大学）

> [!hint]- 提示
> 令 $x'_n=\sqrt{n\pi}$，$x''_n=\sqrt{n\pi+\frac{\pi}{2}}$，当 $n\to+\infty$ 时，$|x'_n-x''_n|\to0$，但 $|\sin x'^2_n-\sin x''^2_n|=1$（非零）．


 ## ※§2.3 上、下半连续

为了扩大眼界，本节对半连续函数作简短介绍，供有兴趣的读者阅读．想了解详情可查看本书第1或2版．运用前面已学过的知识和方法，从半连续的定义出发，建立跟连续函数平行的理论，没有原则性的困难．下面列举的结果，读者可作为练习，独立完成相关证明。


### 一、上、下半连续的定义及等价条件

> [!definition]
> 设函数 $f(x)$ 在集合 $E$ 上有定义，$x_0 \in E$ 为 $E$ 的一个聚点．
> 1）若 $\forall \varepsilon > 0$，$\exists \delta > 0$，当 $x \in E$，$|x - x_0| < \delta$ 时，恒有 $f(x) < f(x_0) + \varepsilon$，则称 $f(x)$ 在 $x_0$ 处上半连续．
> 2）若 $\forall \varepsilon > 0$，$\exists \delta > 0$，当 $x \in E$，$|x - x_0| < \delta$ 时，恒有 $f(x) > f(x_0) - \varepsilon$，则称 $f(x)$ 在 $x_0$ 处下半连续．

（明显）若 $f(x)$ 在点 $x_0$ 连续，则 $f(x)$ 在点 $x_0$ 既上半连续，又下半连续．

> [!example]
> Dirichlet函数
> $$
> D(x) = \left\{\begin{array}{ll}1, & \text{当 } x \text{ 为有理数时}, \\ 0, & \text{当 } x \text{ 为无理数时}\end{array}\right.
> $$
> 在有理点处上半连续，但不下半连续；在无理点的情况恰恰相反．

函数 $f(x) = xD(x)$，当 $x > 0$ 时，跟 $D(x)$ 的结论一样；当 $x < 0$ 时，跟 $D(x)$ 的结论相反；在 $x = 0$ 处，$f(x)$ 连续（既上半连续，又下半连续）．

Riemann函数 $R(x)$（见例3.1.1）在无理点处连续（既上半连续又下半连续），但在有理点处只上半连续不下半连续．

> [!theorem] 定理1（等价描述之一）
> 设函数 $f(x)$ 在集合 $E$ 上有定义，$x_0$ 为 $E$ 的一个聚点，则如下断言等价：
> ⅰ）$f(x)$ 在 $x_0$ 处上半连续；
> ⅱ）$\varlimsup_{x \to x_0} f(x) \leq f(x_0)$；
> ⅲ）$\forall \{x_n\} \subset E$，若 $x_n \to x_0$，则 $\varlimsup_{n \to \infty} f(x_n) \leq f(x_0)$．

> [!theorem] 定理2（等价描述之二）
> 设 $E$ 为闭集，$f(x)$ 在 $E$ 上有定义，则
> $$
> f(x) \text{ 在 } E \text{ 中上半连续} \Leftrightarrow \forall c \in (-\infty, +\infty), F(c) = \{x \in E \mid f(x) \geq c\} \text{ 为闭集}
> $$

该定理无须 $\varepsilon$-$\delta$ 语言；这为推广到点集拓扑作了准备。


### 二、上、下半连续的性质

上、下半连续具有对偶性，下面只写出上半连续的结果，下半连续的相应结果读者可以自己写出．

> [!theorem] 定理3（运算性质）
> （在区间上半连续，意指：函数在区间上每点都上半连续．）
> 1）若在 $[a,b]$ 上两函数 $f(x),g(x)$ 上半连续，则 $f(x)+g(x)$ 亦在 $[a,b]$ 上上半连续；
> 2）若在 $[a,b]$ 上函数 $f(x)$ 上半连续，则 $-f(x)$ 下半连续；
> 3）若在 $[a,b]$ 上函数 $f(x),g(x)$ 同为正值函数且上半连续（或同为负值函数且下半连续），则它们的积 $f(x)\cdot g(x)$ 亦上半连续；
> 4）若在 $[a,b]$ 上 $f(x)>0$ 且 $f(x)$ 上半连续，则 $\dfrac{1}{f(x)}$ 下半连续．
>
> 以上结论可根据半连续的定义（或等价描述）直接推出．

> [!note] 注
> （1）连续性有保号性，但上半连续只保负（未必保正），即：若 $f(x)$ 在 $x_0$ 处上半连续，且 $f(x_0)<0$，则在 $x_0$ 的充分小的邻域内恒有 $f(x)<0$．
> 类似地，下半连续只保正（未必保负）．
>
> （2）半连续无介值性．例如，
> $$
> f(x)=\begin{cases}
> 0, & x\in[0,1),\\
> 2, & x\in[1,2]
> \end{cases}
> $$
> 在 $[0,2]$ 上上半连续，但显然没有介值性（事实上 $(0,2)$ 内的值都未被取到）．
>
> （3）（确界定理）若 $f(x)$ 上半连续，则 $f(x)$ 必有上界（未必有下界），且必定达到上确界．

> [!theorem] 定理4
> 若在 $(a,b)$ 内函数 $f(x)$ 上（或下）半连续，则存在内闭区间 $[\alpha,\beta]\subset(a,b)$，使得在 $[\alpha,\beta]$ 上 $f(x)$ 有界．

> [!theorem] 定理5（保半连续性）
> 设在集合 $E$ 上，$\{f_n(x)\}$ 是上半连续函数序列（$n=1,2,\cdots$），$\{f_n(x)\}$ 关于 $n$ 递减，即
> $$
> f_1(x)\geq f_2(x)\geq\cdots\geq f_n(x)\geq f_{n+1}(x)\geq\cdots\quad(\forall x\in E),
> $$
> 那么，若 $\displaystyle\lim_{n\to\infty}f_n(x)=f(x)$（$\forall x\in E$），则在 $E$ 上 $f(x)$ 也上半连续．
> 同样，收敛的下半连续函数之上升序列，其极限函数若存在，也必下半连续．

> [!theorem] 定理6（定理5的反问题）
> 在 $[a,b]$ 上，若 $f(x)$ 是上半连续函数，则必存在一个递减的连续函数序列 $\{f_n(x)\}$，使得 $\displaystyle\lim_{n\to\infty}f_n(x)=f(x)$．

对下半连续有类似结论（希望感兴趣的读者，写出更多更好的结果）。


### 单元练习2.3

> [!exercise] 2.3.1
> 完成定理3的证明。

> [!exercise] 2.3.2
> 试对下半连续函数叙述定理6的对偶结果，并给出证明。


 ## ※§2.4 函数方程

> [!note] 导读
> 本节虽然不是重点，但例题中的方法十分精彩，值得学习和借鉴，适合各类读者．习题可作机动。


### 一、问题的提出

若 $f(x)=ax$，则
$$
f(x+y)=a(x+y)=ax+ay=f(x)+f(y) \quad (\forall x,y\in\mathbb{R}).
$$
这就是说，一次齐次函数 $f(x)=ax$ 满足函数方程
$$
f(x+y)=f(x)+f(y) \quad (\forall x,y\in\mathbb{R}). \tag{A}
$$

同样，容易验证函数 $f(x)=a^x\;(a>0)$，$g(x)=\log_a x\;(a>0)$，$h(x)=x^a$，$i(x)=\cos ax$ 与 $j(x)=\operatorname{ch}ax$ 分别满足方程：
$$
\begin{align}
f(x+y)&=f(x)\cdot f(y) \quad (\forall x,y\in\mathbb{R}),\\
f(x\cdot y)&=f(x)+f(y) \quad (\forall x,y>0),\\
f(x\cdot y)&=f(x)\cdot f(y) \quad (\forall x,y>0),\\
f(x+y)+f(x-y)&=2f(x)f(y) \quad (\forall x,y\in\mathbb{R}). \tag{E}
\end{align}
$$

而函数 $f(x)=\sin ax$ 与 $g(x)=\cos ax$ 满足联立方程组
$$
\left\{\begin{array}{l}
f(x+y)=f(x)f(y)-g(x)g(y),\\
g(x+y)=f(x)g(y)+f(y)g(x)
\end{array}\right. \quad (\forall x,y\in\mathbb{R}). \tag{F}
$$

现在我们要提出相反的问题：满足这些方程，是否仅是上述这些函数？下面将看到，若对求解的范围作连续等条件的限制，回答是肯定的；否则不一定．

值得注意的是，此问题的解法颇有启发性，耐人寻味．上述五个方程，首先为 Cauchy 所研究，并给出了连续解．


### 二、求解函数方程


 a. 推归法

> [!note] 要点
> 为了求解函数方程，我们可以从函数方程出发，由最简单的情况入手，一步一步地推导，边推导边归纳，逐步达到所希望的结果。

> [!example] 例2.4.1
> 函数方程（A）：
> $$f(x+y)=f(x)+f(y) \quad (\forall x,y\in\mathbb{R})$$
> 在 $x=0$ 处连续的唯一解为 $f(x)=ax$（其中 $a$ 为常数）.

> [!proof]- 证
> 1°（首先证明：$\forall c\in(-\infty,+\infty)$，$f(cx)=cf(x)$.）
>
> $f(2x)=f(x+x)\mathop{=}\limits^{\text{式}(A)}f(x)+f(x)=2f(x)$，$\cdots$；
> 若 $f[(n-1)x]=(n-1)f(x)$，则
> $$f(nx)=f[(n-1)x+x]\mathop{=}\limits^{\text{式}(A)}f[(n-1)x]+f(x)=(n-1)f(x)+f(x)=nf(x).$$
>
> 至此证明了：
> $$f(nx)=nf(x) \quad (\forall n\in\mathbb{N}). \tag{1}$$
>
> 在此式中用 $\frac{x}{n}$ 代换 $x$，则得 $f(x)=nf(\frac{x}{n})$，
> $$f(\tfrac{1}{n}x)=\tfrac{1}{n}f(x) \quad (\forall n\in\mathbb{N}). \tag{2}$$
> $$f(\tfrac{m}{n}x)=\tfrac{m}{n}f(x) \quad (\forall n,m\in\mathbb{N}). \tag{3}$$
>
> 又因 $f(x)=f(0+x)=f(0)+f(x)$，故 $f(0)=0$. 从而
> $$f(x)+f(-x)=f(x-x)=f(0)=0.$$
> 这就得到了
> $$f(-x)=-f(x). \tag{4}$$
>
> 用 $-\frac{m}{n}x$ 代式（4）中的 $x$，得
> $$f(-\tfrac{m}{n}x)=-\tfrac{m}{n}f(x) \quad (\forall n,m\in\mathbb{N}). \tag{5}$$
>
> 以上我们利用式（A）证明了 $c$ 为有理数时，$f(cx)=cf(x)$. 但任何无理数总可以表示成有理数序列的极限，所以 $\forall c$（无理数），$\exists\{c_n\}$（有理数序列），使得 $c_n\to c$（当 $n\to\infty$ 时）．于是
> $$f(cx)-c_n f(x)=f(cx)-f(c_nx)\mathop{=}\limits^{\text{式}(A)}f(cx-c_nx)=f[(c-c_n)x].$$
> 令 $n\to\infty$，取极限，因 $f$ 在 $x=0$ 处连续，$f[(c-c_n)x]\to f(0)=0$（$n\to\infty$），得
> $$f(cx)=cf(x) \quad (\forall c\in\mathbb{R}). \tag{6}$$
>
> 2° 由式（6）知，$\forall x\in\mathbb{R},f(x)=f(x\cdot 1)=xf(1)$. 记 $a=f(1)$，则
> $$f(x)=ax \quad (\forall x\in\mathbb{R}).$$
> 证毕。

> [!example] 例2.4.2
> 函数方程（E）：$f(x+y)+f(x-y)=2f(x)f(y)$（$\forall x,y\in\mathbb{R}$）在实轴 $\mathbb{R}$ 上不恒为零的连续解为 $f(x)=\cos ax$ 或 $f(x)=\operatorname{ch} ax$（$a$ 为常数）.

> [!proof]- 证
> 1°（先证 $f(0)=1$，且 $f(x)$ 为偶函数.）在函数方程（E）中令 $y=0$，得 $2f(x)=2f(x)f(0)$.
> 因 $f(x)\not\equiv 0$，所以
> $$f(0)=1; \tag{1}$$
>
> 在（E）中令 $x=0$，得 $f(y)+f(-y)=2f(y)$，所以，$\forall x\in\mathbb{R}$，有
> $$f(-x)=f(x). \tag{2}$$
>
> 表明 $f(x)$ 为偶函数.
>
> 2°（用推归法证明解为 $\cos ax$ 或 $\operatorname{ch} ax$.）因 $f(0)=1$，根据连续函数局部保号性，$\exists c>0$，使得 $x\in[0,c]$ 时，有 $f(x)>0$. 下面分两种情况讨论：
>
> (a) 若 $f(c)\le 1$. 由 $0<f(c)\le 1$，知 $\exists\theta\in[0,\frac{\pi}{2}]$，使得
> $$f(c)=\cos\theta. \tag{3}$$
>
> （下面我们用推归法证 $\forall x\in\mathbb{R}$，有 $f(cx)=\cos\theta x$.）
> 将方程（E）写成
> $$f(x+y)=2f(x)f(y)-f(x-y). \tag{4}$$
>
> 令 $x=y=c$，得
> $$f(2c)=2(f(c))^2-f(0)=2\cos^2\theta-1=\cos 2\theta.$$
> 如此我们已得
> $$f(c)=\cos\theta,\quad f(2c)=\cos 2\theta.$$
>
> 若已得
> $$f[(n-2)c]=\cos(n-2)\theta,\quad f[(n-1)c]=\cos(n-1)\theta.$$
> 在式（4）中令 $x=(n-1)c,y=c$，则得
> $$f(nc)=2\cos(n-1)\theta\cdot\cos\theta-\cos(n-2)\theta=\cos n\theta.$$
>
> 故 $\forall n\in\mathbb{N}$，有
> $$f(nc)=\cos n\theta. \tag{5}$$
>
> 将（E）写成
> $$f(x)f(y)=\frac12\,[f(x+y)+f(x-y)]. \tag{6}$$
>
> 令 $x=y=\frac c2$，代入得
> $$[f(\tfrac c2)]^2=\frac12(\cos\theta+1)=(\cos\tfrac\theta2)^2.$$
>
> 注意到 $\frac c2\in[0,c]$，所以 $f(\frac c2)>0$，故 $f(\frac c2)=\cos\frac\theta2$.
>
> 用数学归纳法：若已有 $f(\frac c{2^{n-1}})=\cos\frac\theta{2^{n-1}}$，则在式（6）中令 $x=y=\frac c{2^n}$，便得
> $$[f(\tfrac c{2^n})]^2=\frac12[f(\tfrac c{2^{n-1}})+f(0)]=\frac12(\cos\tfrac\theta{2^{n-1}}+1)=(\cos\tfrac\theta{2^n})^2.$$
>
> 因 $f(\frac c{2^n})$ 为正，所以
> $$f(\tfrac c{2^n})=\cos\tfrac\theta{2^n}. \tag{7}$$
>
> 这就证明了式（7）对一切 $n\in\mathbb{N}$ 成立.
> 利用式（5）和（7），有
> $$f(\tfrac m{2^n}c)=\cos\tfrac m{2^n}\theta,\quad \forall m,n\in\mathbb{N}. \tag{8}$$
>
> 但任何 $x>0$，总可写成 $\frac m{2^n}$ 形式的实数的极限①，即 $\forall x>0$，$\exists x_i$（$i=1,2,\ldots$）（$x_i$ 为形如 $\frac m{2^n}$ 的数），
> 使得 $x_i\to x$（$i\to\infty$）. 则 $f(x_i c)=\cos x_i\theta$. 令 $i\to+\infty$，由连续性得
> $$f(cx)=\cos\theta x.$$
>
> 再注意到式（1）与（2），可知此式对于 $x\le 0$ 亦成立. 最后，将此式中的 $x$ 换为 $\frac x c$，并记 $\frac\theta c=a$，则得
> $$f(x)=\cos ax \quad (\forall x\in\mathbb{R}).$$
>
> (b) 若 $f(c)>1$，类似可证 $f(x)=\operatorname{ch} ax$（留作练习）.

> [!note]
> 以上我们看到，推归法是一种构造性的方法，对于某些函数方程，应用此法十分有效。但这些毕竟是麻烦的。能有更简便的方法，尽量用。


 b. 转化法

> [!note] 要点
> 引入适当的新自变量或新因变量，作变量替换，将所给的函数方程转化为熟知的函数方程；或从所给的限制条件，导出熟知的限制条件；从而利用熟知的问题求解。

> [!example] 例 2.4.3
> 证明：在实轴 $\mathbb R$ 上满足方程(B)
> $$f(x+y)=f(x)f(y)$$
> 的唯一不恒等于零的连续函数是 $f(x)=a^x$（$a>0$ 为常数）。

> [!proof]-
> 1°（证明 $f(x)>0$。）因 $f(x)\neq0$，故 $\exists x_0\in\mathbb R$，使得 $f(x_0)\neq0$。于是，$\forall x\in\mathbb R$，由于
> $$f(x)f(x_0-x)=f[x+(x_0-x)]=f(x_0)\neq0,$$
> 知 $f(x)\neq0$。从而
> $$f(x)=f\left(\frac x2+\frac x2\right)=\left[f\left(\frac x2\right)\right]^2>0.$$
>
> 2°（作变换）令 $F(x)=\log_a f(x)$，由1°知 $f(1)>0$。不妨取 $a=f(1)$。于是 $F(x)$ 连续，且满足方程(A)：
> $$F(x+y)=F(x)+F(y)\quad(\forall x,y\in\mathbb R).$$
> 故由例2.4.1，$F(x)=a_1x$（其中 $a_1$ 为常数）。但 $F(1)=\log_a f(1)=\log_a a=1$，所以 $a_1=F(1)=1$，故 $F(x)=x$。从而
> $$f(x)=a^{F(x)}=a^x\ (a=f(1)>0\ \text{为常数}).$$

> [!example] 例 2.4.4
> 证明：满足方程(C)：
> $$f(x-y)=f(x)+f(y)\quad(\forall x,y>0)$$
> 唯一不恒等于零的函数为 $f(x)=b\log_a x$（$a>0$，$a$ 和 $b$ 为常数）。

> [!hint]-
> 令 $g(x)=f(a^x)$，利用例2.4.1。

> [!example] 例 2.4.5
> 求在 $\mathbb R$ 上满足方程
> $$f\left(\frac{x+y}{2}\right)=\frac{f(x)+f(y)}{2}\quad(\forall x,y\in\mathbb R)\qquad(1)$$
> 的连续函数。

> [!solution]-
> 利用方程(1)，
> $$\frac{f(x)+f(y)}{2}=f\left(\frac{x+y}{2}\right)=f\left(\frac{(x+y)+0}{2}\right)=\frac{f(x+y)+f(0)}{2}=\frac{f(x+y)+b}{2}.$$
> 因此，$f(x)+f(y)=f(x+y)+b$，即
> $$f(x)-b+f(y)-b=f(x+y)-b.$$
> 由此令 $g(x)=f(x)-b$，$g(x)$ 满足例2.4.1中的方程(A)：
> $$g(x+y)=g(x)+g(y),$$
> 所以 $g(x)=ax$，从而
> $$f(x)=g(x)+b=ax+b\ (\text{其中 }a,b\text{ 为常数}).$$
> 不难验算 $f(x)$ 是方程(1)的解。

> [!example] 例 2.4.6
> 设 $\Delta f(x)=f(x+\Delta x)-f(x)$，
> $$\Delta^2f(x)=\Delta(\Delta f(x))=f(x+2\Delta x)-2f(x+\Delta x)+f(x).$$
> 试求满足方程 $\Delta^2f(x)\equiv0$（$\forall x\in\mathbb R$）的连续函数。

> [!solution]-
> 因 $f(x+2\Delta x)-2f(x+\Delta x)+f(x)=0$，故
> $$f(x+\Delta x)=\frac{f(x+2\Delta x)+f(x)}{2}.$$
> 令 $x+2\Delta x=y$，则得 $f\left(\frac{x+y}{2}\right)=\frac{f(x)+f(y)}{2}$。由上例可知 $f(x)=ax+b$（其中 $a,b$ 为常数）。不难验算此函数满足所给的方程。

上面这些例题都是通过变换转化方程。下面再看另一种转化。


 c. 利用微分方程

> [!example] 例 2.4.8
> 设函数 $f(x)$ 连续，$f'(0)$ 存在，并且对于任何 $x,y\in\mathbb{R}$，
> $$f(x+y)=\frac{f(x)+f(y)}{1-4f(x)f(y)}。 \quad\text{（1）}$$
> 1）证明：$f(x)$ 在 $\mathbb{R}$ 上可微；
> 2）若 $f'(0)=\frac12$，求 $f(x)$。（中国人民大学）

> [!solution]- 分析
> 式 (1) 中令 $x=y=0$，立即看出 $f(0)=0$。要证 $f(x)$ 在 $\mathbb{R}$ 上可微，即 $\forall x\in\mathbb{R}$，要证如下极限存在：
> $$f'(x)=\lim_{y\to0}\frac{f(x+y)-f(x)}{y}\stackrel{(1)}{=}\lim_{y\to0}\frac{f(y)-0}{y}\cdot\frac{1+4f^2(x)}{1-4f(x)f(y)}。$$
> 但已知 $f'(0)$ 存在，$f$ 连续，且已得 $f(0)=0$，故 $f'(x)=f'(0)[1+4f^2(x)]$。因此
> 1）$f$ 在 $\mathbb{R}$ 上处处可微。
> 2）$f'(0)=\frac12$ 时，解微分方程
> $$\left\{\begin{aligned}
> y'&=\frac12(1+4y^2),\\
> y|_{x=0}&=0,
> \end{aligned}\right.$$
> 可得 $y=\frac12\tan x$。


### 单元练习 2.4

> [!exercise] 2.4.1
> 1）设函数 $f(x)$ 在 $(0,+\infty)$ 上满足
> $$f(2x)=f(x)\quad\text{且}\quad\lim_{x\to+\infty}f(x)=A,$$
> 证明：$f(x)=A$，$x\in(0,+\infty)$；（天津大学，湖北大学）
>
> 2）设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上满足
> $$f(2x)=f(x)\cos x\quad\text{及}\quad\lim_{x\to0}f(x)=f(0)=1,$$
> 求 $f(x)$。（华中师范大学）

> [!hint]-
> 1）$\forall x_0>0$，有 $f(x_0)=f(2x_0)=f(2^2x_0)=\cdots$。
>
> 2）**方法 I** 反复迭代得
> $$f(x)=f\!\left(\frac{x}{2^n}\right)\cos\frac{x}{2^n}\cos\frac{x}{2^{n-1}}\cdots\cos\frac{x}{2},$$
> 利用例1.3.2中1）的极限：
> $$\lim_{n\to\infty}\cos\frac{x}{2^n}\cos\frac{x}{2^{n-1}}\cdots\cos\frac{x}{2}=\frac{\sin x}{x}.$$
>
> **方法 II** $f(2x)=f(x)\cos x\Rightarrow f(x)=f\!\left(\frac{x}{2}\right)\cos\frac{x}{2}=f\!\left(\frac{x}{2}\right)\dfrac{\sin x}{2\sin\frac{x}{2}}$。反复迭代，得
> $$f(x)=f\!\left(\frac{x}{2^n}\right)\frac{\sin x}{2^n\sin\frac{x}{2^n}}\to\frac{\sin x}{x}\quad(\text{当 }n\to\infty\text{ 时}).$$

> [!exercise] 2.4.2
> 试用推归法重新证明例2.4.3与例2.4.4。

> [!exercise] 2.4.3
> 证明：在 $\mathbb{R}$ 上满足方程
> $$f(x+y)=f(x)+f(y)\quad(\forall x\in\mathbb{R})$$
> 的唯一单调函数是 $f(x)=ax$（其中 $a$ 为常数）。

> [!hint]-
> 参考例2.4.1，注意：“连续”条件，这里换为了“单调”条件。

> [!hint]-
> 照样可推出 $f(cx)=cf(x)$，当 $c$ 为有理数时已证明成立。要证明对无理数也成立，可按 $f$ 递增（或递减）两种情况分别讨论：例如，当 $f$ 递增时，设 $x>0$（$x<0$ 时类似可证）（$x=0$ 时知 $f(0)=0$，因此 $f(cx)=cf(x)$ 当 $x=0$ 时明显成立），取递增的有理数序列 $\{c_n\}$：$c_n<c$，$c_n\uparrow c$，则 $\{f(c_nx)\}\uparrow$，且有上界 $f(cx)$。再在不等式 $f(c_nx)<f(cx)$ 里取极限，得
> $$\lim_{n\to\infty}f(c_nx)=\lim_{n\to\infty}c_nf(x)=cf(x)\leqslant f(cx).\tag{1}$$
> 同样，可取有理数列 $\{c_n'\}$：$c_n'>c$，$c_n'\downarrow c$，可得
> $$cf(x)\geqslant f(cx).\tag{2}$$
> 故 $cf(x)=f(cx)$（$\forall c,x\in\mathbb{R}$）。
>
> $f$ 递减，类似可证。于是
> $$f(x)=f(x\cdot1)=xf(1)\;\stackrel{\text{记 }a=f(1)}{=}\;ax.$$

> [!exercise] 2.4.4
> 证明：若 $f(x)$ 在 $\mathbb{R}$ 上满足方程 $f(x+y)=f(x)+f(y)$，则如下三条件等价：
>
> 1）$f(x)$ 在 $x=0$ 处连续；$\quad$ 2）$f(x)$ 在 $\mathbb{R}$ 上连续；$\quad$ 3）$\exists\delta>0$，$f(x)$ 在 $(-\delta,\delta)$ 上有界。

> [!hint]-
> 证明 $1)\Rightarrow2)\Rightarrow3)\Rightarrow1)$ 即可（可参考例2.4.7）。

> [!hint]-
> $$f(x+h)=f(x)+f(h)\;\xRightarrow[x=h=0]{}\;f(0)=0.\tag{1}$$
>
> $(1)\Rightarrow2)$ $f$ 在 $x=0$ 处连续 $\Rightarrow\displaystyle\lim_{x\to0}f(x)=f(0)=0$
> $$\Rightarrow\forall x\in\mathbb{R},\;\lim_{h\to0}f(x+h)=\lim_{h\to0}[f(x)+f(h)]=f(x)+\lim_{h\to0}f(h)=f(x),$$
> 即 $f(x)$ 在 $\mathbb{R}$ 上连续，条件2）成立。
>
> $(2)\Rightarrow3)$ $\mathbb{R}$ 上连续 $\Rightarrow[-\delta,\delta]$ 上连续 $\Rightarrow[-\delta,\delta]$ 上有界 $\Rightarrow(-\delta,\delta)$ 上有界。
>
> $(3)\Rightarrow1)$（反证法）若1）不成立，则 $\exists\varepsilon_0>0$，使得
> $$\forall n\in\mathbb{N},\;\exists x_n:|x_n|<\frac{1}{n},\text{ 但 }|f(x_n)|\geqslant\varepsilon_0.\tag{2}$$
> 因此
> $$\begin{aligned}
> |f(nx_n)|&=|f[x_n+(n-1)x_n]|=|f(x_n)+f[(n-1)x_n]|\\
> &=|2f(x_n)+f[(n-2)x_n]|=\cdots=n|f(x_n)|>n\varepsilon_0\to+\infty\;(n\to\infty).
> \end{aligned}$$
> 与已知条件“$f$ 在 $(-\delta,\delta)$ 上有界”矛盾。

> [!note] 注
> $3)\Rightarrow1)$ 也可不用反证法，见例2.4.7里的“分析”。

> [!exercise] 2.4.5
> 证明：若 $f(x)$ 在 $\mathbb{R}$ 上连续，对任意 $x,y\in\mathbb{R}$，有 $f(x+y)=f(x)\cdot f(y)$，则 $f(x)$ 在 $\mathbb{R}$ 上可微。（东北师范大学）

> [!hint]-
> 参考例2.4.3。

> [!exercise] 2.4.6
> 证明：满足方程 $f(xy)=f(x)f(y)$（$\forall x,y>0$）的唯一不恒等于 $0$ 的连续函数是 $f(x)=x^a$（$a$ 为常数）。

> [!hint]-
> 对所给的方程取对数，再用例2.4.4中的变换方法转化为例2.4.1。

> [!proof]- 证
> $\forall x>0$，有 $f(x)=f(\sqrt{x}\sqrt{x})=f^2(\sqrt{x})>0$（恒正）。
>
> 因此，取 $b>0$，对所给方程取对数得
> $$\log_b f(xy)=\log_b f(x)+\log_b f(y).\tag{1}$$
> 利用例2.4.4的变换方法，记 $g(x)=f(b^x)$。由式(1)得
> $$g(x+y)=f(b^{x+y})=f(b^x\cdot b^y).$$
> 于是
> $$\begin{aligned}
> \log_b g(x+y)&=\log_b f(b^{x+y})=\log_b f(b^x\cdot b^y)\\
> &=\log_b f(b^x)+\log_b f(b^y)=\log_b g(x)+\log_b g(y).
> \end{aligned}\tag{2}$$
> 式(2)说明 $\log_b g(x)$ 满足例2.4.1的条件，因此在 $x=0$ 处连续唯一解是
> $$\log_b g(x)=ax\quad(a\text{ 为常数}),$$
> 亦即 $\log_b f(b^x)=ax$ 或 $f(b^x)=b^{ax}=(b^x)^a$，故 $f(x)=x^a$（$a$ 为常数）。

> [!exercise] 2.4.7
> 求在 $\mathbb{R}$ 上满足方程 $f(xy)=f(x)f(y)$（$\forall x,y\in\mathbb{R}$）的一切连续函数，并证明不连续函数 $f(x)=\operatorname{sgn}x$ 在 $\mathbb{R}$ 上也处处满足方程。

> [!hint]-
> 利用已知等式，
> $$\begin{align}
> &f(x)=f(x\cdot1)=f(x)f(1)\Rightarrow f(1)=1\\
> \Rightarrow\;&1=f(1)=f((-1)\cdot(-1))=f(-1)\cdot f(-1)\Rightarrow[f(-1)]^2=1\\
> \Rightarrow\;&f(-1)=\pm1\Rightarrow f(-x)=f(-1)f(x)=\pm f(x)\quad(\forall x\in\mathbb{R}),
> \end{align}$$
> 即 $f(x)$ 为偶函数或奇函数。根据上题，$x>0$，$f(x)=x^a$（$a$ 为常数）。
>
> 因此在 $\mathbb{R}$ 上，
>
> 当 $f(x)$ 为偶函数时：$f(x)=|x|^a$（$a$ 为常数）；
>
> 当 $f(x)$ 为奇函数时：$f(x)=(\operatorname{sgn}x)|x|^a$（$a$ 为常数）。
>
> 取 $a=0$，得
> $$f(x)=\operatorname{sgn}x=\begin{cases}
> 1, & x>0,\\
> 0, & x=0,\\
> -1, & x<0.
> \end{cases}$$
> $f(x)$ 在原点处不连续，但代入验算，明显还满足方程 $f(xy)=f(x)f(y)$。

> [!exercise] 2.4.8
> 设函数 $f(x)$，$g(x)$ 在 $\mathbb{R}$ 上连续有界，满足方程组（$\forall x,y\in\mathbb{R}$）
> $$\begin{aligned}
> f(x+y)&=f(x)f(y)-g(x)g(y),\tag{1}\\
> g(x+y)&=f(x)g(y)+f(y)g(x)\tag{2}
> \end{aligned}$$
> 及 $f(0)=1$，$g(0)=0$。证明：$f(x)=\cos ax$，$g(x)=\pm\sin ax$（其中 $a$ 为常数）。

> [!proof]- 证法 I（转化法）
> **提示** 利用例2.4.3和例2.4.2的已有结果。
>
> **再提示**
>
> $1^\circ$ 令 $F(x)=f^2(x)+g^2(x)$，由式(1),(2)可得 $F(x+y)=F(x)F(y)$，由例2.4.3可得 $F(x)=a^x$（其中 $a=F(1)>0$）。但要求 $f(x),g(x)$ 有界，只能 $a=1$。故
> $$F(x)=f^2(x)+g^2(x)=1\quad(\forall x\in\mathbb{R}).\tag{3}$$
>
> $2^\circ$
> $$\begin{aligned}
> f(-x)&=f(-x)\cdot1+g(-x)\cdot0\\
> &=f(-x)\cdot f(0)+g(-x)\cdot g(0)\\
> &=f(-x)\cdot\text{(式1)}_{y=-x}+g(-x)\cdot\text{(式2)}_{y=-x}\\
> &=f(x)\quad(\forall x\in\mathbb{R}),
> \end{aligned}$$
> 即
> $$f(-x)=f(x)\quad(\forall x\in\mathbb{R}),\tag{4}$$
> （表明 $f$ 是偶函数。）
>
> 同理，有
> $$g(-x)=-g(x)\quad(\forall x\in\mathbb{R}).\tag{5}$$
> （表明 $g$ 是奇函数。）将式(4),(5)代入式(1)，得函数 $f(x)$ 满足例2.4.2的条件：
> $$f(x+y)+f(x-y)=2f(x)f(y)\quad(\forall x\in\mathbb{R}).$$
> 故由例2.4.2得 $f(x)=\cos ax$；再由式(3)得 $g(x)=\pm\sin ax$（$a$ 为常数，$\forall x\in\mathbb{R}$）。

> [!proof]- 证法Ⅱ（直接法）
> 沿用证法Ⅰ中的式(3)：$\forall x\in\mathbb{R}$，$f^2(x)+g^2(x)=1$，知：$|f(x)|\leqslant1$，$|g(x)|\leqslant1$。因此，对 $x=x_0\in\mathbb{R}$，$\exists\theta\in[-\pi/2,\pi/2]$，使得
> $$f(x_0)=\cos\theta,\quad g(x_0)=\pm\sqrt{1-\cos^2\theta}=\pm\sin\theta.$$
> 在式(1)和(2)里令 $x=y=x_0$，再利用上式，可得
> $$f(2x_0)=f^2(x_0)-g^2(x_0)=\cos2\theta,\quad g(2x_0)=2f(x_0)g(x_0)=\pm\sin2\theta.\tag{6}$$
>
> （数学归纳法）设已证得
> $$f(nx_0)=\cos n\theta,\quad g(nx_0)=\pm\sin n\theta\quad(\forall n\in\mathbb{N}),$$
> 那么利用式(1)可得
> $$\begin{aligned}
> f[(n+1)x_0]&=f(nx_0+x_0)=f(nx_0)f(x_0)-g(nx_0)g(x_0)\\
> &=\cos n\theta\cos\theta-\sin n\theta\sin\theta=\cos(n+1)\theta.
> \end{aligned}$$
> 同理，利用式(2)可得 $g[(n+1)x_0]=\pm\sin(n+1)\theta$。
>
> 类似可证出：$f\!\left(\frac{1}{n}x_0\right)=\cos\frac{1}{n}\theta$，$g\!\left(\frac{1}{n}x_0\right)=\pm\sin\frac{1}{n}\theta$（$\forall n\in\mathbb{N}$）。
>
> 于是 $\forall c\in\mathbb{R}$，都有
> $$f(cx_0)=\cos c\theta,\quad g(cx_0)=\pm\sin c\theta.$$
> 将 $cx_0$ 记为 $x$，则 $c\theta=cx_0\cdot\theta/x_0=ax$（其中 $a=\theta/x_0$ 为常数）。最后得
> $$f(x)=\cos ax,\quad g(x)=\pm\sin ax\quad(a\text{ 为常数}).$$

> [!note]
> （以下各题需要“导数”以及“一阶常微分方程”的知识，未学过的读者请暂缓。）

> [!exercise] 2.4.9
> 设 $f(x)$ 为恒不等于零，且在 $x=0$ 处可导的函数。若 $f(x)$ 在 $\mathbb{R}$ 上满足方程 $f(x+y)=f(x)f(y)$（$\forall x,y\in\mathbb{R}$），试证 $f(x)$ 在 $\mathbb{R}$ 上处处可导，并求 $f(x)$。

> [!hint]-
> 参考例2.4.3。

> [!hint]-
> $f(x)$ 满足例2.4.3的式(B) $\Rightarrow f(x)>0\Rightarrow$ 式(B)可取对数，
> $$\log_b f(x+y)=\log_b f(x)+\log_b f(y)\quad(\forall x,y\in\mathbb{R}).$$
> 又已知 $f(x)$ 在 $x=0$ 处可导，故 $f(x)$ 在 $x=0$ 处连续，因此 $\log_b f(x)$ 在 $x=0$ 处连续。由习题2.4.4，$\log_b f(x)$ 在 $\mathbb{R}$ 上连续，且 $\log_b f(x)$ 符合例2.4.1条件，得 $f(x)=b^{cx}=a^x$，故 $f(x)$ 在 $\mathbb{R}$ 上处处可导。

> [!exercise] 2.4.10
> 证明：满足方程
> $$f(x+y)=\frac{f(x)+f(y)}{1-f(x)f(y)}\quad(\forall x,y\in\mathbb{R})$$
> 的唯一可导函数是 $f(x)=\tan ax$（其中 $a$ 为常数）。

> [!hint]-
> **方法Ⅰ** 令 $f(x)=2g(x)$ 代入，则 $g$ 可利用例2.4.8。
>
> **方法Ⅱ** 使用例2.4.8的方法，转化为微分方程。

> [!hint]-
> （使用方法Ⅱ时）在原式里令 $x=y=0$，可得 $f(0)=0$。于是
> $$\begin{aligned}
> \frac{f(x+h)-f(x)}{h}&=\frac{1}{h}\!\left(\frac{f(x)+f(h)}{1-f(x)f(h)}-f(x)\right)\\[4pt]
> &=\frac{f(h)-f(0)}{h}\cdot\frac{1+f^2(x)}{1-f(x)f(h)}.
> \end{aligned}$$
> 再令 $h\to0$，取极限（记 $f'(0)=a$），则上式变为
> $$\frac{d}{dx}f(x)=a(1+f^2(x)),$$
> 亦即
> $$\frac{df(x)}{1+f^2(x)}=a\,dx.$$
> 求积分得 $\arctan f(x)=ax+c$。又因 $f(0)=0$，知 $c=0$，故 $f(x)=\tan ax$（$a$ 为常数）。

> [!exercise] 2.4.11
> 设 $f(x)$ 在任何有界区间上可积，且在 $\mathbb{R}$ 上处处满足方程
> $$f(x+y)=f(x)+f(y)\quad(\forall x,y\in\mathbb{R}).$$
> 试证 $f(x)=ax$（其中 $a$ 为常数）。

> [!hint]-
> 因 $\forall\delta>0$，$f(x)$ 在 $[-\delta,\delta]$ 上可积，必在 $(-\delta,\delta)$ 有界，应用习题2.4.4，知 $f(x)$ 在 $\mathbb{R}$ 上连续，因此 $f(x)$ 满足例2.4.1的条件。

> [!exercise] 2.4.12
> 设 $f$ 是实数轴上的可微函数，对任意 $x,y\in\mathbb{R}$，满足
> $$f(x+y)=\frac{f(x)+f(y)}{1+f(x)f(y)},\tag{1}$$
> $f'(0)=a\neq0$，求 $f(x)$ 的表达式。（中国科学院）$\langle\operatorname{th}ax\rangle$

> [!hint]-
> 在式(1)中令 $x=y=0$，可得 $f(0)=0$ 或 $f(0)=1$；在原方程里令 $y=x$，并对 $x$ 求导，然后令 $x=0$，注意到已知条件 $f'(0)=a\neq0$，可知 $f(0)\neq1$，因此只能：$f(0)=0$。再利用例2.4.8的做法（转化为微分方程）。

> [!hint]-
> $$\begin{aligned}
> \frac{f(x+h)-f(x)}{h}&=\frac{1}{h}\!\left(\frac{f(x)+f(h)}{1+f(x)f(h)}-f(x)\right)\\[4pt]
> &=\frac{f(h)-f(0)}{h}\cdot\frac{1-f^2(x)}{1+f(x)f(h)}.
> \end{aligned}$$
> 令 $h\to0$，由 $f'(0)=a$ 得
> $$f'(x)=a\cdot[1-f^2(x)].\tag{2}$$
> 记 $y=f(x)$，式(2)变为 $\displaystyle\frac{dy}{dx}=a(1-y)(1+y)$，亦即
> $$\frac{1}{2}\!\left(\frac{1}{1-y}+\frac{1}{1+y}\right)dy=a\,dx.$$
> 积分得 $\displaystyle\frac{1}{2}\ln\!\left|\frac{1+y}{1-y}\right|=ax+C$。因 $x=0$ 时，$y=0$，所以 $C=0$。
>
> （注 $\displaystyle\ln\!\left|\frac{1+y}{1-y}\right|=2ax\;\Rightarrow\;\frac{1+y}{1-y}=e^{2ax}\;\Rightarrow\;y=\frac{e^{2ax}-1}{1+e^{2ax}}$。）


