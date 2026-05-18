# 第五章 级数

> [!note] 导读
> 级数是一个工具，有完善的理论，是数学分析课程三大主干内容之一，也是考研重点内容之一。本章内容适合各类读者，过于理论性的问题（如一致收敛等），非数学院系学生一般不作过高要求。


## §5.1 数项级数


### 一、求和问题

级数求和的问题，一般来说，是一个困难问题，没有什么好办法。因为部分和

$$
S_n=\sum_{k=1}^n a_k
$$

随 $n$ 增大时，项数越来越多，除非能化为已知级数，人们只能设法把 $S_n$ 写成紧缩形式，才便于求极限。本段主要讨论把 $S_n$ 转化为紧缩形式的几种常用方法，以及用于列求极限的方法。至于用 Abel 第二定理化为幂级数求和问题，我们将在 §5.3 专门讨论。

#### a. 利用已知级数

> [!example] 例5.1.1
> 计算
> $$
> \frac12+\frac3{2^2}+\frac5{2^3}+\cdots+\frac{2n-1}{2^n}+\cdots.
> $$

> [!solution]- 解
> $$
> \begin{aligned}
> S_n&=2S_n-S_n \\
> &=1+\frac32+\frac5{2^2}+\cdots+\frac{2n-1}{2^{n-1}}-\frac12-\frac3{2^2}-\cdots-\frac{2n-3}{2^{n-1}}-\frac{2n-1}{2^n} \\
> &=1+1+\frac12+\cdots+\frac1{2^{n-2}}-\frac{2n-1}{2^n}=1+\frac{1-\frac1{2^{n-1}}}{1-\frac12}-\frac{2n-1}{2^n},
> \end{aligned}
> $$
> 故原级数的和
> $$
> S=\lim_{n\to\infty}S_n=3.
> $$

> [!exercise] 练习
> 计算 $\displaystyle\sum_{n=1}^{\infty} ne^{-nx}$.

> [!hint]- 提示
> 计算 $(1-e^{-x})S_n$.

> [!hint]- 再提示
> $$
> \begin{aligned}
> (1-e^{-x})\sum_{k=1}^n ke^{-kx}
> &=(e^{-x}+2e^{-2x}+3e^{-3x}+\cdots+ne^{-nx})-[e^{-2x}+2e^{-3x}+\cdots+(n-1)e^{-nx}+ne^{-(n+1)x}] \\
> &=e^{-x}+e^{-2x}+\cdots+e^{-nx}-\frac{n}{e^{(n+1)x}}\to\frac{e^{-x}}{1-e^{-x}}\quad(n\to\infty).
> \end{aligned}
> $$
> 故 $\displaystyle\lim_{n\to\infty}\sum_{k=1}^n ke^{-kx}=\frac{e^{-x}}{(1-e^{-x})^2}$.

> [!example] 例5.1.2
> 设级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 收敛于 $A$（有限数），试证：
> $$
> \lim_{n\to\infty}\frac1n[a_n+2a_{n-1}+\cdots+(n-1)a_2+na_1]=A. \quad\text{（1）}
> $$
> （华东师范大学）

> [!proof]- 证
> 记 $\displaystyle S_n=\sum_{k=1}^n a_k$，则
> $$
> \lim_{n\to\infty}S_n=\lim_{n\to\infty}\sum_{k=1}^n a_k=A. \quad\text{（2）}
> $$
> 且容易看出
> $$
> a_n+2a_{n-1}+\cdots+(n-1)a_2+na_1=S_1+S_2+\cdots+S_n. \quad\text{（3）}
> $$
> （因为：在 $S_1+S_2+\cdots+S_n$ 中，按 $a_k$ 同类项合并，即得
> $$
> a_n+2a_{n-1}+\cdots+(n-1)a_2+na_1.
> $$
> 或（写成三角矩阵）将 $S_k$（$k=1,2,\cdots,n$）展开，各摆一行，排成（如下）三角矩阵：
> $$
> \begin{matrix}
> a_1 & 0 & 0 & \cdots & 0\\
> a_1 & a_2 & 0 & \cdots & 0\\
> a_1 & a_2 & a_3 & \cdots & 0\\
> \vdots & \vdots & \vdots & \ddots & \vdots\\
> a_1 & a_2 & a_3 & \cdots & a_n
> \end{matrix}
> $$
> 那么式（3）：左端="列和"相加，右端="行和"相加，故式（3）成立。）
> $$
> \begin{aligned}
> &\lim_{n\to\infty}\frac1n[a_n+2a_{n-1}+\cdots+(n-1)a_2+na_1]\\
> &\overset{\text{用Stolz公式}}{=}\lim_{n\to\infty}\frac{S_1+S_2+\cdots+S_n}{n}
> =\lim_{n\to\infty}S_n\overset{\text{式（2）}}{=}A.
> \end{aligned}
> $$
> 式（1）获证。

#### b. 连锁消去法

> [!example] 例5.1.3
> 设 $0<x<1$，求如下级数之和：
> $$
> \sum_{n=0}^{\infty}\frac{x^{2^n}}{1-x^{2^{n+1}}}.
> $$
> （国外赛题）

> [!solution]- 解
> $$
> \begin{aligned}
> \sum_{k=0}^n\frac{x^{2^k}}{1-x^{2^{k+1}}}&=\sum_{k=0}^n\left(\frac1{1-x^{2^k}}-\frac1{1-x^{2^{k+1}}}\right) \\
> &=\left(\frac1{1-x}-\frac1{1-x^2}\right)+\left(\frac1{1-x^2}-\frac1{1-x^{2^2}}\right)+\left(\frac1{1-x^{2^2}}-\frac1{1-x^{2^3}}\right)+\cdots \\
> &\quad+\left(\frac1{1-x^{2^{n-1}}}-\frac1{1-x^{2^n}}\right)+\left(\frac1{1-x^{2^n}}-\frac1{1-x^{2^{n+1}}}\right) \\
> &=\frac1{1-x}-\frac1{1-x^{2^{n+1}}}.
> \end{aligned}
> $$
> 因此
> $$
> \sum_{n=0}^{\infty}\frac{x^{2^n}}{1-x^{2^{n+1}}}=\lim_{n\to\infty}\left(\frac1{1-x}-\frac1{1-x^{2^{n+1}}}\right)=\frac{x}{1-x}.
> $$

> [!example] 例5.1.4
> 求如下级数之和：
> $$
> \text{1）}\sum_{k=1}^{\infty}\arctan\frac1{2k^2};\qquad
> \text{2）}\sum_{k=2}^{\infty}\arctan\frac2{4k^2-4k+1}.
> $$

> [!hint]- 提示
> 利用公式
> $$
> \arctan x-\arctan y=\arctan\frac{x-y}{1+xy},\quad
> \arctan\frac1{2k^2}=\arctan\frac1{2k-1}-\arctan\frac1{2k+1}.
> $$

这种连锁消去法，还可以是多项相消，如

> [!example] 例5.1.5
> 计算 $\displaystyle\sum_{n=1}^{\infty}(\sqrt n-2\sqrt{n+1}+\sqrt{n+2})$.

> [!solution]- 解
> $$
> \begin{aligned}
> S_n&=(1-2\sqrt2+\sqrt3)+(\sqrt2-2\sqrt3+\sqrt4) \\
> &\quad+(\sqrt3-2\sqrt4+\sqrt5)+(\sqrt4-2\sqrt5+\sqrt6)+\cdots \\
> &\quad+(\sqrt n-2\sqrt{n+1}+\sqrt{n+2}) \\
> &=1-\sqrt2-\sqrt{n+1}+\sqrt{n+2}=1-\sqrt2+\frac1{\sqrt{n+1}+\sqrt{n+2}} \\
> &\to 1-\sqrt2\quad(\text{当 }n\to\infty\text{ 时}).
> \end{aligned}
> $$

> [!exercise] 练习
> 计算 $\displaystyle\sum_{n=1}^{\infty}\frac1{n(n+1)(n+2)}$.

> [!hint]- 提示
> （参看例4.5.6里的拆分法）$\displaystyle S_n=\frac12\sum_{k=1}^n\left(\frac1k-\frac2{k+1}+\frac1{k+2}\right)$.

> [!example] 例5.1.6
> 已知级数 $\displaystyle\sum_{n=1}^{\infty}a_n=A$，$\displaystyle\lim_{n\to\infty}na_n=0$，求级数之和 $\displaystyle\sum_{n=1}^{\infty}n(a_n-a_{n+1})$.（华东师范大学）

> [!solution]- 解
> $$
> \begin{aligned}
> \sum_{k=1}^n k(a_k-a_{k+1})&=(a_1-a_2)+2(a_2-a_3)+3(a_3-a_4)+\cdots+(n-1)(a_{n-1}-a_n)+n(a_n-a_{n+1}) \\
> &=\sum_{i=1}^n a_i-na_{n+1}\to A+0=A\quad(n\to\infty).
> \end{aligned}
> $$

#### c. 方程式法

> [!note] 要点
> 建立 $S_n$ 的方程式，从而求出 $S_n$.

> [!example] 例5.1.7
> 计算 $q\cos\alpha+q^2\cos2\alpha+\cdots+q^n\cos n\alpha+\cdots\quad(|q|<1)$.

> [!solution]- 解
> 记 $\displaystyle S_n=q\cos\alpha+q^2\cos2\alpha+\cdots+q^n\cos n\alpha=\sum_{k=1}^n q^k\cos k\alpha$.
> 两边同乘 $2q\cos\alpha$，得
> $$
> 2q\cos\alpha\cdot S_n=\sum_{k=1}^n2q^{k+1}\cos\alpha\cos k\alpha=\sum_{k=1}^n q^{k+1}[\cos(k+1)\alpha+\cos(k-1)\alpha],
> $$
> 即
> $$
> 2q\cos\alpha\cdot S_n=(q^{n+1}\cos(n+1)\alpha+S_n-q\cos\alpha)+(q^2+q^2S_n-q^{n+2}\cos n\alpha),
> $$
> 解此方程便得
> $$
> S_n=\frac{q^{n+2}\cos n\alpha-q^{n+1}\cos(n+1)\alpha+q\cos\alpha-q^2}{1+q^2-2q\cos\alpha}
> \to\frac{q\cos\alpha-q^2}{1+q^2-2q\cos\alpha}\quad(n\to\infty).
> $$

> [!remark] 注
> 本例亦可由如下复数和式取实部得到：$\displaystyle\sum_{k=0}^n z^k=\frac{1-z^{n+1}}{1-z}$.

#### d. 利用子列的极限

> [!note] 要点
> 我们知道，若 $\{S_{2n}\}$ 与 $\{S_{2n+1}\}$ 有相同极限 $S$，则 $\displaystyle\lim_{n\to\infty}S_n=S$. 因此对于级数 $\displaystyle\sum_{n=1}^{\infty}a_n$，若通项 $a_n\to0$（当 $n\to\infty$ 时），则部分和的子列 $\{S_{2n}\}$ 收敛于 $S$，意味着 $\{S_{2n+1}\}$ 也收敛于 $S$，从而 $\displaystyle\sum_{n=1}^{\infty}a_n=S$. 我们把 $\{S_{2n}\}$ 与 $\{S_{2n+1}\}$ 称为互补子列。这个原理可推广到一般情形：若 $\displaystyle\sum_{n=1}^{\infty}a_n$ 的通项 $a_n\to0$（当 $n\to\infty$ 时），$\{S_n\}$ 的子列 $\{S_{p_n}\}_{n=1}^{\infty}\to S$（$p$ 是某个正整数），则 $\displaystyle\sum_{n=1}^{\infty}a_n=S$. 我们把这种方法称为子列方法。

> [!example] ☆例5.1.8
> 计算
> $$
> 1+\frac12+\left(\frac13-1\right)+\frac14+\frac15+\left(\frac16-\frac12\right)+\frac17+\frac18+\left(\frac19-\frac13\right)+\cdots.
> $$

> [!solution]- 解
> 此级数通项趋向零，因此只要求 $S_{3n}$ 的极限，注意公式
> $$
> 1+\frac12+\frac13+\cdots+\frac1n=C+\ln n+\varepsilon_n,
> $$
> 其中 $C$ 为 Euler 常数（见例1.2.11），$\varepsilon_n\to0$（当 $n\to\infty$ 时）。因此，对原级数，
> $$
> \begin{aligned}
> S_{3n}&=1+\frac12+\frac13+\cdots+\frac1{3n}-1-\frac12-\cdots-\frac1n \\
> &=\ln(3n)-\ln n+\varepsilon_{3n}-\varepsilon_n\to\ln3\quad(n\to\infty).
> \end{aligned}
> $$
> 故原级数和
> $$
> S=\ln3.
> $$

> [!exercise] 练习
> 求
> $$
> 1-\frac12-\frac14+\frac13-\frac16-\frac18+\cdots+\frac1{2n-1}-\frac1{4n-2}-\frac1{4n}+\cdots
> $$
> 之和。（中国科学技术大学）

> [!solution]- 解
> $$
> \begin{aligned}
> \text{原式}&=\sum_{n=1}^{\infty}\left(\frac1{2n-1}-\frac1{4n-2}-\frac1{4n}\right)=\sum_{n=1}^{\infty}\left(\frac1{4n-2}-\frac1{4n}\right) \\
> &=\frac12\lim_{n\to\infty}\sum_{k=1}^n\left(\frac1{2k-1}-\frac1{2k}\right)=\frac12\lim_{n\to\infty}\sum_{k=1}^n\left[\left(\frac1{2k-1}+\frac1{2k}\right)-2\cdot\frac1{2k}\right] \\
> &=\frac12\lim_{n\to\infty}\left(\sum_{k=1}^{2n}\frac1k-\sum_{k=1}^n\frac1k\right) \\
> &=\frac12\lim_{n\to\infty}[(\ln(2n)+C+\varepsilon_{2n})-(\ln n+C+\varepsilon_n)]=\frac12\ln2.
> \end{aligned}
> $$

> [!example] \*例5.1.9
> 将级数 $1-\frac12+\frac13-\frac14+\frac15-\cdots$ 的各项重新安排，使先依次出现 $p$ 个正项，再出现 $q$ 个负项，然后如此交替，试证新级数的和为 $\displaystyle\ln2+\frac12\ln\frac pq$.

> [!proof]- 证
> 因为通项趋向零，根据上述子列求和法，对新级数我们只要求子列 $\{S_{(p+q)n}\}_{n=1}^{\infty}$ 的极限也就够了。新级数前 $(p+q)n$ 项的和
> $$
> \begin{aligned}
> S_{(p+q)n}=&1+\frac13+\cdots+\frac1{2p-1}-\frac12-\frac14-\cdots-\frac1{2q} \\
> &+\frac1{2p+1}+\frac1{2p+3}+\cdots+\frac1{4p-1}-\frac1{2q+2}-\frac1{2q+4}-\cdots-\frac1{4q} \\
> &+\cdots+\frac1{2np-(2p-1)}+\frac1{2np-(2p-3)}+\cdots+\frac1{2np-1} \\
> &-\frac1{2nq-(2q-2)}-\frac1{2nq-(2q-4)}-\cdots-\frac1{2nq}
> \end{aligned}
> $$
> $$
> \begin{aligned}
> =&1+\frac13+\frac15+\cdots+\frac1{2np-1}-\frac12-\frac14-\cdots-\frac1{2nq}
> \end{aligned}
> $$
> （正项与正项放在一起，负项与负项放在一起）
> $$
> \begin{aligned}
> =&1+\frac12+\frac13+\frac14+\frac15+\cdots+\frac1{2np} \\
> &-\left(\frac12+\frac14+\cdots+\frac1{2np}\right)-\frac12-\frac14-\cdots-\frac1{2nq}
> \end{aligned}
> $$
> （凑成调和级数形式）
> $$
> =1+\frac12+\cdots+\frac1{2np}-\frac12\left(1+\frac12+\cdots+\frac1{np}\right)-\frac12\left(1+\frac12+\cdots+\frac1{nq}\right).
> $$
> 注意对于调和级数，有公式
> $$
> 1+\frac12+\cdots+\frac1n=C+\ln n+\varepsilon_n,
> $$
> 其中 $C$ 为 Euler 常数，$\varepsilon_n\to0$（当 $n\to\infty$ 时），故
> $$
> \begin{aligned}
> S_{(p+q)n}&=C+\ln(2np)+\varepsilon_{2np}-\frac12[C+\ln(np)+\varepsilon_{np}]-\frac12[C+\ln(nq)+\varepsilon_{nq}] \\
> &\to\ln2+\frac12\ln\frac pq\quad(n\to\infty).
> \end{aligned}
> $$

#### e. 先求 $S_n'(x)$ 的紧缩形式

> [!example] ☆例5.1.10
> 设 $x\in[0,\pi]$，试求级数 $\displaystyle\sum_{n=1}^{\infty}\frac{\sin nx}{n}$ 的和函数。

> [!solution]- 解
> 若 $x=0$ 或 $\pi$，显然级数和为 $0$.
>
> 现设 $0<x\le\pi$，记 $\displaystyle S_n(x)=\sum_{k=1}^n\frac{\sin kx}{k}$，则
> $$
> \begin{aligned}
> S_n'(x)&=\left(\sum_{k=1}^n\frac{\sin kx}{k}\right)'=\sum_{k=1}^n\cos kx
> =\frac{1}{2\sin\frac{x}{2}}\sum_{k=1}^n 2\sin\frac{x}{2}\cos kx \\
> &=\frac{1}{2\sin\frac{x}{2}}\sum_{k=1}^n\left[\sin\left(k+\frac{1}{2}\right)x-\sin\left(k-\frac{1}{2}\right)x\right] \\
> &=\frac{1}{2\sin\frac{x}{2}}\left(\sin\frac{2n+1}{2}x-\sin\frac{x}{2}\right)
> =\frac{\sin\left(n+\frac{1}{2}\right)x}{2\sin\frac{x}{2}}-\frac{1}{2},
> \end{aligned}
> $$
> 于是
> $$
> \begin{aligned}
> S_n(x)&=S_n(x)-S_n(\pi)=-\int_x^\pi S_n'(t)\,dt \\
> &=-\frac{1}{2}\int_x^\pi\frac{1}{\sin\frac{t}{2}}\sin\left(n+\frac{1}{2}\right)t\,dt+\frac{1}{2}(\pi-x).
> \end{aligned}
> $$
> 利用 Riemann 引理，$n\to\infty$ 时上式第一项趋向零。所以，级数和
> $$
> S(x)=\left\{\begin{array}{ll}
> 0, & x=0,\ x=\pi,\\[4pt]
> \dfrac{1}{2}(\pi-x), & 0<x<\pi.
> \end{array}\right.
> $$


### ☆二、级数敛散性的判断



#### a. Cauchy 准则及其应用

> [!theorem] 要点 1）Cauchy 准则
> 级数 $\sum_{n=1}^\infty a_n$ 收敛的充要条件是：$\forall\varepsilon>0$, $\exists N>0$, 当 $n>N$ 时，
> $$\left|\sum_{k=n+1}^{n+p} a_k\right|<\varepsilon \quad (\forall p\in\mathbf N).$$
> 值得注意的是，此条件意味着
> $$\sum_{k=n+1}^{n+p} a_k \to 0 \quad (\text{当 } n\to\infty \text{ 时关于 } p\in\mathbf N \text{ 一致})$$
> （$\mathbf N$ 是自然数的集合）；而不只是 $\forall p$, 有 $\sum_{k=n+1}^{n+p} a_k\to 0\ (n\to\infty)$（见例 5.1.13）.

> [!theorem] 要点 2）Cauchy 准则的否定形式
> 级数 $\sum_{n=1}^\infty a_n$ 发散的充要条件是：$\exists\varepsilon_0>0$, $\forall N>0$,
> $\exists n>N$ 及其自然数 $p$，使得 $\left|\sum_{k=n+1}^{n+p} a_k\right|\ge \varepsilon_0$.

> [!example] 例 5.1.11
> 证明级数 $\sum_{n=1}^\infty \frac{1}{n}$ 发散。
>
> > [!proof]-
> > 取 $\varepsilon_0=\frac{1}{2}>0$, 则 $\forall n\in\mathbf N$, 取 $p=n$ 时，恒有
> > $$\left|\sum_{k=n+1}^{2n}\frac{1}{k}\right|\ge \frac{n}{2n}=\frac{1}{2}=\varepsilon_0>0,$$
> > 故 $\sum_{n=1}^\infty \frac{1}{n}$ 发散。

> [!example] ☆例 5.1.12
> 设 $a_n>0$, $S_n=a_1+a_2+\cdots+a_n$, 级数 $\sum_{n=1}^\infty a_n=\infty$. 试证 $\sum_{n=1}^\infty \frac{a_n}{S_n}$ 发散。（武汉大学）
>
> > [!proof]-
> > 因 $a_n>0$, $S_n\nearrow$, 所以
> > $$\sum_{k=n+1}^{n+p}\frac{a_k}{S_k}\ge \frac{\sum_{k=n+1}^{n+p} a_k}{S_{n+p}}=\frac{S_{n+p}-S_n}{S_{n+p}}=1-\frac{S_n}{S_{n+p}}.$$
> > 因为 $S_n\to+\infty$, 故 $\forall n$, 当 $p\in\mathbf N$ 充分大时，有 $\frac{S_n}{S_{n+p}}<\frac{1}{2}$, 从而 $\sum_{k=n+1}^{n+p}\frac{a_k}{S_k}\ge 1-\frac{1}{2}=\frac{1}{2}$. 所以 $\sum_{n=1}^\infty \frac{a_n}{S_n}$ 发散。

> [!example] ☆例 5.1.13
> 如果 $\lim_{n\to\infty}a_{n+1}=0$, $\lim_{n\to\infty}(a_{n+1}+a_{n+2})=0$, …, $\lim_{n\to\infty}(a_{n+1}+a_{n+2}+\cdots+a_{n+p})=0$, 试问级数 $\sum_{n=1}^\infty a_n$ 是否一定收敛？（"是"或" 不一定 "，要说明理由.）（华中科技大学）
>
> > [!solution]-
> > 不一定. 例如上面例 5.1.11: $\sum_{n=1}^\infty \frac{1}{n}$, 虽然 $\forall p\in\mathbf N$, $0<\frac{1}{n+1}+\cdots+\frac{1}{n+p}<\frac{p}{n+1}\to 0\ (n\to\infty)$, 但 $\sum_{n=1}^\infty \frac{1}{n}$ 发散。

> [!example] ☆例 5.1.14
> 证明：级数 $\sum_{n=1}^\infty a_n$ 收敛的充分必要条件是：对于任意的正整数序列 $p_1,p_2,\cdots,p_k,\cdots$ 及自然数的任意子序列 $\{n_k\}$, 皆有
> $$\lim_{k\to\infty}(a_{n_k+1}+a_{n_k+2}+\cdots+a_{n_k+p_k})=0.$$
> （中山大学）
>
> > [!proof]-
> > **1° 必要性.** 因为 $\sum_{n=1}^\infty a_n$ 收敛，所以 $\forall\varepsilon>0$ $\exists N>0$, 当 $n>N$ 时，$\left|\sum_{k=n+1}^{n+p}a_k\right|<\varepsilon$ （$\forall p\in\mathbf N$）成立. 由 $n_k\ge k$ 知，当 $k>N$ 时，有 $|a_{n_k+1}+\cdots+a_{n_k+p_k}|<\varepsilon$. 故 $\lim_{k\to\infty}(a_{n_k+1}+\cdots+a_{n_k+p_k})=0$.
> >
> > **2° 充分性.**（反证法）若 $\sum_{n=1}^\infty a_n$ 发散，则 $\exists\varepsilon_0>0$，$\forall N>0$，$\exists n>N$ 及 $p\in\mathbf N$ 使得 $|a_{n+1}+\cdots+a_{n+p}|\ge \varepsilon_0$. 特别地
> > 对 $N_1=1$, $\exists n_1>1$, $p_1\in\mathbf N$ 使得 $|a_{n_1+1}+\cdots+a_{n_1+p_1}|\ge \varepsilon_0$;
> > 对 $N_2=\max\{n_1,2\}$, $\exists n_2>N_2$, $p_2\in\mathbf N$, 使得 $|a_{n_2+1}+\cdots+a_{n_2+p_2}|\ge \varepsilon_0$.
> > 如此，我们得到自然数的子序列 $\{n_k\}$ 以及 $\{p_k\}$, 使得恒有 $|a_{n_k+1}+\cdots+a_{n_k+p_k}|\ge \varepsilon_0$ $(k=1,2,\cdots)$. 与已知条件矛盾. 证毕。

> [!remark]
> 值得到注意的是：Cauchy 准则不仅能用于级数敛散性的判别，还可导出收敛级数的其他性质，如例 5.1.38 和例 5.1.39。


#### b. 正项级数敛散性的判定

> [!note] 要点
> 判断级数 $\sum a_n$ 的敛散性，通常有如下方法：
> 
> 1）若通项 $a_n\not\to0$（当 $n\to\infty$ 时），则 $\sum a_n$ 发散。
> 
> 2）判阶法：如果 $a_n\to0$（当 $n\to+\infty$ 时），并且相对 $\frac{1}{n}$ 来讲，它是 $p$ 阶的无穷小，那么当 $p>1$ 时，级数 $\sum a_n$ 收敛；当 $p\le 1$ 时，$\sum a_n$ 发散。
> 
> 3）D'Alembert 判别法（亦称比式判别法）：对正项级数 $\sum_{n=1}^\infty a_n$，
> 若 $\exists q>0$ 和 $N>0$，使得 $\forall n>N$，有 $\frac{a_{n+1}}{a_n}\le q<1$，则级数 $\sum_{n=1}^\infty a_n$ 收敛；
> 若 $\exists N>0$，$n>N$ 时，恒有 $\frac{a_{n+1}}{a_n}\ge 1$，则级数 $\sum_{n=1}^\infty a_n$ 发散。
> 
> 特别地，若 $\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\ell$，则当 $\ell<1$ 时，正项级数 $\sum_{n=1}^\infty a_n$ 收敛；当 $\ell>1$ 时，$\sum_{n=1}^\infty a_n$ 发散。
> 
> 或：若 $\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\ell$，则当 $\ell<1$ 时，正项级数 $\sum_{n=1}^\infty a_n$ 收敛；若 $\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\ell>1$，则 $\sum_{n=1}^\infty a_n$ 发散。
> 
> 4）根式判别法（也称 Cauchy 判别法）：若 $a_n\ge0$，$\exists q,N>0$，$\forall n>N$，有 $\sqrt[n]{a_n}\le q<1$，则级数 $\sum_{n=1}^\infty a_n$ 收敛；
> 若 $\exists N>0$，$\forall n>N$，有 $\sqrt[n]{a_n}\ge1$，则级数 $\sum_{n=1}^\infty a_n$ 发散。
> 
> 特别地，若 $\lim_{n\to\infty}\sqrt[n]{a_n}=\ell$，则当 $\ell<1$ 时，正项级数 $\sum_{n=1}^\infty a_n$ 收敛；当 $\ell>1$ 时，$\sum_{n=1}^\infty a_n$ 发散。
> 
> 或：若 $\overline{\lim}_{n\to+\infty}\sqrt[n]{a_n}=\ell$，则当 $\ell<1$ 时，正项级数 $\sum_{n=1}^\infty a_n$ 收敛；若 $\lim_{n\to\infty}\sqrt[n]{a_n}=\ell>1$，则 $\sum_{n=1}^\infty a_n$ 发散。

> [!remark] 注
> ① 凡是用比式判别法能判别的，用根式判别法也一定能判别。
> 
> ② 比式判别法和根式判别法都是基于跟等比级数比较。凡是递减速度不低于某等比（$0<q<1$）级数的级数，必然收敛。虽其使用方便，但适用面较窄。技巧性较大，适用面较宽的是比较判别法。

> [!note] 
> 5）比较判别法：$\sum_{n=1}^\infty a_n$ 和 $\sum_{n=1}^\infty b_n$ 是两正项级数，若从某项开始恒有 $a_n\le b_n$。若 $\sum_{n=1}^\infty b_n$ 收敛，则 $\sum_{n=1}^\infty a_n$ 也收敛；反之，若 $\sum_{n=1}^\infty a_n$ 发散，则 $\sum_{n=1}^\infty b_n$ 也发散。
> 
> 使用此法主要用缩放法：给定一个级数 $\sum_{n=1}^\infty a_n$，如果通项 $a_n$ 十分复杂，欲证级数收敛，应将 $a_n$ 化简放大为 $b_n$，使得 $\sum_{n=1}^\infty b_n$ 收敛；欲证级数 $\sum_{n=1}^\infty a_n$ 发散，应将 $a_n$ 化简缩小为 $c_n$，使得 $\sum_{n=1}^\infty c_n$ 发散。

> [!remark] 注
> 特别，若正项级数 $\sum_{n=1}^\infty a_n$ 与 $\sum_{n=1}^\infty b_n$ 满足 $\lim_{n\to\infty}\frac{a_n}{b_n}=\ell$（$0<\ell<+\infty$），则 $\sum_{n=1}^\infty a_n$ 与 $\sum_{n=1}^\infty b_n$ 同时敛散。

> [!note] 
> 6）Cauchy 积分判别法：若在 $[1,+\infty)$ 上，$f(x)\downarrow$，且 $f(x)\ge0$，则级数 $\sum_{n=1}^\infty f(n)$ 与 $\int_1^{+\infty} f(x)\,dx$ 同时敛散。
> 
> 7）考虑部分和 $\sum_{k=1}^n a_k$ 是否关于 $n$ 有界。有界则收敛，无界则发散。

利用判阶法及比较判别法

> [!example] ☆例 5.1.15
> 若 $\lim_{n\to\infty}(n^{2\sin\frac{1}{n}}a_n)=1$，判断级数 $\sum_{n=1}^\infty a_n$ 是否收敛？试证之。（上海交通大学）

> [!solution]- 解
> 已知
> $$\frac{a_n}{n^{-2\sin\frac{1}{n}}}=n^{2\sin\frac{1}{n}}a_n\to1\quad(n\to\infty),$$
> 且
> $$0\le n^{-2\sin\frac{1}{n}}=\left(\frac{1}{n^2}\right)^{\frac{\sin\frac{1}{n}}{\frac{1}{n}}}\le\left(\frac{1}{n^2}\right)^{\frac{3}{4}}\quad(\text{当 }n\text{ 充分大时}),$$
> 所以 $n^{-2\sin\frac{1}{n}}$ 为无穷小量，$a_n$ 与 $n^{-2\sin\frac{1}{n}}$ 为等价无穷小量，故 $\sum a_n$ 与 $\sum n^{-2\sin\frac{1}{n}}$ 同时敛散。
> 
> 又由 $\sum \frac{1}{n^{3/2}}$ 收敛，知 $\sum n^{-2\sin\frac{1}{n}}$ 收敛，从而级数 $\sum a_n$ 收敛。

> [!example] ☆例 5.1.16
> 设 $a_n=\left(1-\frac{p\ln n}{n}\right)^n$，讨论 $\sum a_n$ 的敛散性。

> [!abstract]- 分析
> $a_n=e^{\ln\left(1-\frac{p\ln n}{n}\right)^n}=e^{n\ln\left(1-\frac{p\ln n}{n}\right)}$，而当 $n\to\infty$ 时，$\frac{\ln n}{n}\to0$，因此 $\ln\left(1-\frac{p\ln n}{n}\right)\sim -\frac{p\ln n}{n}$。从而可以设想 $a_n\sim e^{n\left(-\frac{p\ln n}{n}\right)}=n^{-p}$。

> [!proof]- 证 I
> $$\lim_{n\to\infty}\ln(n^pa_n)=\lim_{n\to\infty}\ln\left[n^p\left(1-\frac{p\ln n}{n}\right)^n\right]=\lim_{n\to\infty}\left[p\ln n+n\ln\left(1-\frac{p\ln n}{n}\right)\right]$$
> $$=\lim_{n\to\infty}\frac{1}{1/n}\left[-\frac{1}{n}p\ln\frac{1}{n}+\ln\left(1+\frac{p}{n}\ln\frac{1}{n}\right)\right]$$
> $$=\lim_{x\to0}\frac{1}{x}\left[\ln(1+px\ln x)-px\ln x\right]（\text{应用 L'Hospital 法则}）$$
> $$=\lim_{x\to0}\frac{-p^2(x\ln^2x+x\ln x)}{1+px\ln x}=0.$$
> 
> 故 $\lim_{n\to\infty} n^p a_n=1$，$a_n\sim n^{-p}$，所以级数当 $p>1$ 时收敛，当 $p\le1$ 时发散。

> [!proof]- 证 II
> 利用带 Peano 余项的 Taylor 公式：$\ln(1+x)=x-\frac{1}{2}x^2+o(x^2)$（$x\to0$）。
> 
> $$a_n=e^{n\ln\left(1-\frac{p\ln n}{n}\right)}=e^{n\left[-\frac{p\ln n}{n}+o\left(\left(\frac{p\ln n}{n}\right)^{3/2}\right)\right]}=n^{-p}\cdot e^{o\left((\frac{p\ln n}{n})^{3/2}\right)/n^{1/2}}\sim n^{-p}\quad(n\to\infty),$$
> 因此 $\sum a_n$ 当且仅当 $p>1$ 时收敛。

> [!example] new 例 5.1.17
> 证明：
> 1）级数 $\sum_{n=1}^\infty \frac{1}{(\ln n)^{\ln n}}$ 收敛；（武汉大学）
> 2）级数 $\sum_{n=1}^\infty \frac{1}{n^{1+\frac{1}{n}}}$ 发散。

> [!proof]- 证
> 1）$n$ 充分大时，$\frac{1}{(\ln n)^{\ln n}}\le\frac{1}{(e^{1+\alpha})^{\ln n}}=\frac{1}{n^{1+\alpha}}$（$\alpha>0$）。由比较判别法，结论自明。
> 
> 2）（利用不等式：几何平均≤算术平均，和"对数不等式"：$\frac{x}{x+1}\le\ln(1+x)\le x$（$x>-1$））（见例 1.1.8。）
> 
> $$n^{\frac{1}{n}}=\sqrt[n]{n}=\sqrt[n]{n\cdot 1\cdots1}\le\frac{n+(n-1)}{n}=2\cdot\frac{2n-1}{2n}\le2\cdot\frac{2n}{2n+1}\le2\ln(1+2n)\quad(n>1).$$
> 
> $$n^{1+\frac{1}{n}}\le2n\ln(1+2n),$$
> 
> $$\frac{1}{n^{1+\frac{1}{n}}}\ge\frac{1}{2n\ln(1+2n)}.\quad(1)$$
> 
> 由 $\int_2^{+\infty}\frac{1}{(1+2x)\ln(1+2x)}\,dx$ 发散，且
> $$0 < 1/[(1+2x)\ln(1+2x)] < [(1+2x)/(2x)]\cdot 1/[(1+2x)\ln(1+2x)]$$
> 
> 知 $\int_2^{+\infty} 1/[2x\ln(1+2x)]\,dx$ 发散。再由 Cauchy 积分判别法，$\sum_{n=2}^{\infty} 1/[2n\ln(1+2n)]$ 发散。
> 
> 于是，利用比较判别法，由不等式(1)知：$\sum_{n=1}^{\infty} 1/n^{1+1/n}$ 发散。

> [!exercise] 练习 1
> 设 $\{a_n\}$，$\{b_n\}$ 是各项均为正的数列，满足：
> $$\lim_{n\to\infty} b_n/n = 0 \quad(1)$$
> 及
> $$\lim_{n\to\infty} b_n(a_n/a_{n+1} - 1) = \lambda > 0. \quad(2)$$
> 求证：级数 $\sum_{n=1}^{\infty} a_n$ 收敛。（中国科学技术大学）

> [!tip]- 提示
> 利用条件(1)和(2)，$\lim_{n\to\infty} n(a_n/a_{n+1}-1) = \lim_{n\to\infty} [b_n(a_n/a_{n+1}-1)]/(b_n/n) = +\infty$。因此有
> $$a_n/a_{n-1} \le ((n-1)/n)^2，\quad a_{n+1}/a_n \le (n/(n+1))^2.$$

> [!proof]- 证
> 将 $N$ 固定，则 $\forall n > N$，有
> $$a_n = (a_n/a_{n-1})\cdot(a_{n-1}/a_{n-2})\cdot\ldots\cdot(a_{N+2}/a_{N+1})\cdot(a_{N+1}/a_N)\cdot a_N$$
> $$\le ((n-1)/n \cdot (n-2)/(n-1) \cdot \ldots \cdot (N+1)/(N+2) \cdot N/(N+1))^2 a_N$$
> $$= N^2 a_N/n^2.$$
> 
> （利用比较判别法）由 $a_N N^2 \sum_{n=N+1}^{\infty} 1/n^2$ 收敛知 $\sum_{n=N+1}^{\infty} a_n$ 收敛，从而 $\sum_{n=1}^{\infty} a_n$ 也收敛。

> [!exercise] ☆练习 2
> 证明：级数 $\sum_{n=1}^{\infty} (\sqrt[n]{n} - 1)/n^\alpha$ 当 $\alpha > 0$ 时收敛，当 $\alpha \le 0$ 时发散。（南开大学）

> [!tip]- 提示
> （当 $n\to\infty$ 时）作为无穷小量：$\sqrt[n]{n} - 1$ 与 $\ln[1+(\sqrt[n]{n}-1)] = \ln n/n$ 等价，从而 $(\sqrt[n]{n} - 1)/n^\alpha$ 与 $\ln n/n^{\alpha+1}$ 等价。

> [!proof]- 证
> 1° 当 $\alpha > 0$ 时，
> $$\lim_{n\to\infty} (\ln n)/n^{\alpha/2} = \lim_{x\to\infty} (\ln x)/x^{\alpha/2} = \lim_{x\to\infty} (1/x)/[(\alpha/2)x^{\alpha/2-1}] = 0.$$
> 
> 因此
> $$\lim_{n\to\infty} [(\sqrt[n]{n} - 1)/n^\alpha]/[1/n^{\alpha/2+1}]$$
> $$= \lim_{n\to\infty} [\ln n/n^{\alpha+1}]/[1/n^{\alpha/2+1}]$$
> $$= \lim_{n\to\infty} (\ln n)/n^{\alpha/2} = 0.$$
> 
> 式(2)说明 $(\sqrt[n]{n} - 1)/n^\alpha$ 是比 $1/n^{\alpha/2+1}$ 高阶的无穷小量。而已知 $\sum_{n=1}^{\infty} 1/n^{\alpha/2+1}$ 收敛，故 $\sum_{n=1}^{\infty} (\sqrt[n]{n} - 1)/n^\alpha$ 收敛。
> 
> 2° 当 $\alpha\le0$ 时，$(\ln n)/n^{\alpha+1} = (\ln n)/n^\alpha \cdot 1/n \ge 1/n$。因 $\sum 1/n$ 发散，故 $\sum_{n=1}^{\infty} (\sqrt[n]{n} - 1)/n^\alpha$ 发散。

> [!exercise] ☆练习 3
> 若正项级数 $\sum_{n=1}^{\infty} a_n$ 收敛，求证：
> 1）$\sum_{n=1}^{\infty} a_n^p$ 收敛（$p > 1$）；
> 2）$\sum_{n=1}^{\infty} (\sqrt[k]{a_n})/n$ 收敛（$2 < k \in \mathbb{N}$）。（南开大学）

> [!tip]- 提示
> 1）$\sum_{n=1}^{\infty} a_n$ 收敛，可知 $a_n$ 为无穷小（$n\to\infty$），故对 $0 < a_n < 1$（$n$ 充分大），当 $p > 1$ 时，有
> $$0 < a_n^p < a_n.$$
> 
> 2）用 $k$ 个正数的均值不等式。

> [!tip]- 再提示
> 2）
> $$(\sqrt[k]{a_n})/n = \sqrt[k]{a_n \cdot [1/n^{k/(k-1)}] \cdot \ldots \cdot [1/n^{k/(k-1)}]}$$
> $$\le \frac{1}{k}\left\{ a_n + [1/n^{k/(k-1)}] + \ldots + [1/n^{k/(k-1)}] \right\}$$
> $$= \frac{1}{k}[a_n + (k-1)/n^{k/(k-1)}].$$
> 
> 而级数 $\frac{1}{k}\sum_{n=1}^{\infty} [a_n + (k-1)/n^{k/(k-1)}]$ 收敛。

> [!exercise] ☆练习 4
> 判断级数 $\sum_{n=1}^{\infty} [ e - (1 + 1/1! + 1/2! + \ldots + 1/n!) ]$ 的敛散性。（南开大学）

> [!tip]- 提示
> $$0 < e - (1 + 1/1! + 1/2! + \ldots + 1/n!) = R_n(x)|_{x=1} \text{（}e^x\text{ 在 }x=1\text{ 处 Taylor 公式}）$$
> $$= e^\xi/(n+1)! \le e/(n+1)!，\quad 0 < \xi < 1，$$
> 
> 而 $\sum_{n=1}^{\infty} e/(n+1)!$ 收敛。

> [!example] 例 5.1.18
> 设 $0 < p_1 < p_2 < \ldots < p_n < \ldots$，求证：$\sum_{n=1}^{\infty} 1/p_n$ 收敛的充要条件为如下级数收敛：$\sum_{n=1}^{\infty} n/(p_1+p_2+\ldots+p_n)$。

> [!tip]- 提示
> 当 $n\ge2$ 时，
> $$p_1+\ldots+p_n \ge p_{[n/2]} + p_{[n/2]+1} + \ldots + p_n \ge [n/2]p_{[n/2]} \ge n/4\, p_{[n/2]} > 0，$$
> 
> $$0 \le 1/p_n \le n/(p_1+p_2+\ldots+p_n) \le 4/p_{[n/2]}，$$
> 
> 并注意
> $$\sum_{n=2}^{\infty} 1/p_{[n/2]} = 1/p_1 + 1/p_1 + 1/p_2 + 1/p_2 + \ldots.$$

> [!example] 例 5.1.19
> 设 $a_n > 0$，试证 $\sum_{n=1}^{\infty} a_n$ 与 $\sum_{n=0}^{\infty} 2^n a_{2^n}$ 同时敛散。

> [!proof]- 证
> 因为对正项级数，任意加括号不改变敛散性，因此由
> $$\sum_{n=1}^{\infty} a_n = a_1 + (a_2+a_3) + (a_4+a_5+a_6+a_7) + (a_8+\ldots+a_{15})+\ldots$$
> $$\le a_1 + 2a_2 + 4a_4 + 8a_8 + \ldots = \sum_{n=0}^{\infty} 2^n a_{2^n}$$
> 
> 知，当级数 $\sum_{n=1}^{\infty} a_n$ 发散时，$\sum_{n=0}^{\infty} 2^n a_{2^n}$ 亦发散。另外由
> $$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + (a_3+a_4) + (a_5+\ldots+a_8) + (a_9+\ldots+a_{16})+\ldots$$
> $$\ge a_1 + a_2 + 2a_4 + 2^2 a_{2^3} + 2^3 a_{2^4} + \ldots = a_1 + \frac{1}{2} \sum_{n=1}^{\infty} 2^n a_{2^n}$$
> 
> 知，当级数 $\sum_{n=1}^{\infty} a_n$ 收敛时，级数 $\sum_{n=0}^{\infty} 2^n a_{2^n}$ 亦收敛。总之两级数同时敛散。

> [!example] 例 5.1.20
> 证明 Kummer 判别法：假设 $a_n > 0$，$b_n > 0$（$n=1,2,\ldots$）。
> 1）若 $\exists\alpha>0$，使得
> $$(b_n/b_{n+1})a_n - a_{n+1} \ge \alpha \quad（n=1,2,\ldots），\quad(1)$$
> 则级数 $\sum_{n=1}^{\infty} b_n$ 收敛；
> 2）若 $\sum_{n=1}^{\infty} 1/a_n$ 发散，且
> $$(b_n/b_{n+1})a_n - a_{n+1} \le 0 \quad（n=1,2,\ldots），\quad(2)$$
> 则级数 $\sum_{n=1}^{\infty} b_n$ 发散。

> [!proof]- 证
> 1）由式(1)知
> $$b_n a_n - b_{n+1}a_{n+1} \ge \alpha b_{n+1} > 0, \quad(3)$$
> 
> 故 $b_n a_n\downarrow$。又因 $b_n a_n > 0$，所以 $\{b_n a_n\}$ 收敛，从而级数 $\sum_{n=1}^{\infty} (b_n a_n - b_{n+1}a_{n+1})$ 亦收敛。再根据式(3)，用比较判别法，知 $\sum_{n=1}^{\infty} b_n$ 亦收敛。
> 
> 2）由式(2)知
> $$(1/a_{n+1})/(1/a_n) \le b_{n+1}/b_n \quad（n=1,2,\ldots）。$$
> 
> 故由 $\sum_{n=1}^{\infty} 1/a_n$ 发散知 $\sum_{n=1}^{\infty} b_n$ 亦发散。

> [!example] ☆例 5.1.21
> 若正项级数 $\sum_{n=1}^{\infty} a_n$ 收敛，且 $e^{a_n} = a_n + e^{a_n+b_n}$（$n=1,2,\ldots$），证明 $\sum_{n=1}^{\infty} b_n$ 收敛。（华东师范大学）

> [!tip]- 提示
> （用比较判别法的极限形式。）
> 
> $$b_n = \ln(e^{a_n}-a_n) - a_n，$$
> $$\sum_{n=1}^{\infty} b_n = \sum_{n=1}^{\infty} \ln(e^{a_n}-a_n) - \sum_{n=1}^{\infty} a_n，$$
> $$\ln(e^{a_n}-a_n) = o(a_n).$$

> [!example] 例 5.1.22
> 研究级数 $\sum_{n=1}^{\infty} 1/x_n^2$ 的敛散性，这里 $x_n$ 是方程 $x = \tan x$ 的正根，并且按递增的顺序编号。（国外赛题）

> [!tip]- 提示
> $x_n \in (\pi/2+(n-1)\pi, \pi/2+n\pi)$，$1/x_n^2 \le 1/n^2$。

> [!exercise] 练习 1
> 设 $n$ 是一正整数，试证：
> 1）方程 $x^n + nx - 1 = 0$ 在 $(-1,+\infty)$ 内有唯一正实根 $x_n$；
> 2）当 $\alpha>1$ 时，级数 $\sum_{n=1}^{\infty} x_n^\alpha$ 收敛。（中国科学院）

> [!tip]- 提示
> 1）函数 $F(x)=x^n+nx-1$ 的导数 $F'(x)=n(x^{n-1}+1)>0$（当 $x>-1$ 时）。而 $F(0)=-1$，$F(1/n)=1/n^n>0$。
> 
> 2）如此 $0 < x_n^\alpha \le 1/n^\alpha$（$\forall n\in\mathbb{N}$），且 $\alpha>1$ 时，$\sum_{n=1}^{\infty} 1/n^\alpha < +\infty$。

> [!exercise] *练习 2
> 设 $\sum_{n=1}^{\infty} a_n$ 为收敛的正项级数。求证：级数 $\sum_{n=1}^{\infty} a_n^{1-1/n}$ 收敛。（中国科学技术大学）

> [!tip]- 提示
> 将 $a_n^{1-1/n}$ 变形，应用例 4.4.9 的不等式。

> [!proof]- 证
> $\forall b>0$，$p,q>0$：$1/p+1/q=1$，
> 
> $$a_n^{1-1/n} = (1/b)(a_n^{(n-1)/n}\cdot b) \le (1/b)[(1/p)(a_n^{(n-1)/n})^p + (1/q)b^q] \text{（利用例 4.4.9 的不等式}）。$$
> 
> 取 $p=n/(n-1)$，$b=1/2$，则 $1/q=1-1/p=1/n<1$。故
> 
> $$\text{上式} = \frac{n-1}{n} \cdot 2a_n + \frac{1}{n} \cdot \frac{1}{2^{n-1}} < 2a_n + \frac{1}{2^{n-1}}.$$
> 
> 因 $\sum_{n=1}^{\infty} (2a_n + 1/2^{n-1})$ 收敛，故 $\sum_{n=1}^{\infty} a_n^{1-1/n}$ 收敛。

> [!exercise] *☆练习 3
> 已知 $\varphi(x)$ 是 $(-\infty,+\infty)$ 上周期为 $1$ 的连续函数，
> $$\int_0^1 \varphi(x)\, dx = 0. \quad(1)$$
> 设
> $$a_n = \int_0^1 e^x \varphi(nx)\, dx \quad（n=1,2,\ldots），\quad(2)$$
> 求证：级数 $\sum_{n=1}^{\infty} a_n^2$ 收敛。（南开大学）

> [!tip]- 提示
> 只需证明：$|a_n| \le M/n$（$M$ 为常数）。为此，引入 $\Phi(x)=\int_0^x \varphi(t)\,dt$。

> [!proof]- 证
> $$a_n = \int_0^1 e^x \varphi(nx)\, dx = \frac{1}{n}\int_0^1 e^x\, d\Phi(nx)$$
> $$= \frac{1}{n}e^x\Phi(nx)\big|_0^1 - \frac{1}{n}\int_0^1 e^x \Phi(nx)\, dx.$$
> 
> $\Phi(x)$ 连续、有界（记界为 $M_1>0$）：$|\Phi(x)|\le M_1$（$\forall x\in\mathbb{R}$），则
> 
> $$|a_n| \le \frac{1}{n}\int_0^1 e^x |\Phi(nx)|\, dx \le \frac{1}{n}M_1(e-1)，$$
> 
> $$a_n^2 \le \frac{1}{n^2}M_1^2(e-1)^2.$$
> 
> 而 $\sum_{n=1}^{\infty} \frac{1}{n^2}M_1^2(e-1)^2 = M_1^2(e-1)^2 \sum_{n=1}^{\infty} \frac{1}{n^2}$ 收敛，故 $\sum_{n=1}^{\infty} a_n^2$ 收敛。

> [!exercise] **练习 4
> 设 $\{\alpha_n\}$ 及 $\{\delta_n\}$ 是两个（非负）无穷实数列，满足条件：
> 
> (i) $\alpha_{n+1} \le (1+\delta_n)\alpha_n + \delta_n$（$n\ge1$）；
> 
> (ii) $\sum_{n=1}^{\infty} \delta_n < +\infty$。
> 
> 试证：
> 1）数列 $\{\prod_{i=1}^n (1+\delta_i)\}$ 收敛；
> 2）数列 $\{\alpha_n\}$ 有界；
> 3）数列 $\{\alpha_n\}$ 收敛。（中国科学院）

> [!abstract]- 分析
> 1）对 $\prod_{i=1}^n (1+\delta_i)$ 取对数，利用 $\ln(1+\delta_k)<\delta_k$，放大求上界。由 $\{\sum_{k=1}^n \ln(1+\delta_k)\}$ 递增有界得收敛。
> 
> 2）将条件(i)的不等式改写成 $\alpha_{n+1}+1 \le (1+\delta_n)(\alpha_n+1)$，进行迭代，推出 $\{\alpha_n\}$ 有界。
> 
> 3）当 $n$ 增大时 $\sup_{k\ge n}\{\alpha_k\}$ 递减有下限，因此 $\lim_{n\to\infty} \sup_{k\ge n}\{\alpha_k\}$ 存在，记为 $\alpha$，可证：$\lim_{n\to\infty} \alpha_n=\alpha$。

> [!proof]- 证
> 1）因 $\delta_k\ge0$，$\sum_{k=1}^n \ln(1+\delta_k)$ 递增，且
> $$\sum_{k=1}^n \ln(1+\delta_k) \le \sum_{k=1}^n \delta_k \le \sum_{n=1}^{\infty} \delta_n < +\infty，\text{有上界，故}$$
> 
> $$\lim_{n\to\infty} \prod_{k=1}^n (1+\delta_k) = \lim_{n\to\infty} e^{\sum_{k=1}^n \ln(1+\delta_k)} = e^{\lim_{n\to\infty}\sum_{k=1}^n \ln(1+\delta_k)} = \prod_{n=1}^{\infty}(1+\delta_n) < +\infty. \quad(1)$$
> 
> 2）由已知条件(i)可得
> $$\alpha_{n+1}+1 \le (1+\delta_n)(\alpha_n+1) \le (1+\delta_n)(1+\delta_{n-1})(\alpha_{n-1}+1) \le \ldots$$
> $$\le (\alpha_1+1)\prod_{k=1}^n (1+\delta_k) \le (\alpha_1+1)\prod_{n=1}^{\infty}(1+\delta_n) < +\infty\quad（\forall n\in\mathbb{N}）。$$
> 
> 因此 $\{\alpha_n\}$ 有上界：
> $$\exists M>0: \forall n\in\mathbb{N}, 0\le\alpha_n\le M. \quad(2)$$
> 
> 3）因 $\{\alpha_n\}$ 有上界，$\sup_{k\ge n}\{\alpha_k\}<+\infty$；又 $\sup_{k\ge n}\{\alpha_k\}$ 随 $n$ 增加而递减，而 $\alpha_n\ge0$，从而 $\sup_{k\ge n}\{\alpha_k\}\ge0$，$\sup_{k\ge n}\{\alpha_k\}$ 递减且有下界，知 $\lim_{n\to\infty} \sup_{k\ge n}\{\alpha_k\}$ 存在，记为 $\alpha$（$\alpha\ge0$）。
> 
> 记 $\beta_n=\sup_{k\ge n}\{\alpha_k\}$，那么 $\beta_n\downarrow\alpha$。$\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，有
> $$0\le\alpha\le\beta_n<\alpha+\varepsilon. \quad(3)$$
> 
> 另一方面，因 $\sum_{n=1}^{\infty} \delta_n<+\infty$，$\forall\varepsilon>0$，$\exists N_1>0$，当 $n>N_1$ 时，有
> $$(\sum_{k=n}^{\infty} \delta_k)\cdot(M+1)<\varepsilon. \quad(4)$$
> 
> 由条件(i)：$\alpha_{n+1}\le(1+\delta_n)\alpha_n+\delta_n$ 可得 $(\alpha_{n+1}-\alpha_n)\le\delta_n(\alpha_n+1)\le\delta_n(M+1)$，即
> $$\alpha_{n+1}-\alpha_n\le\delta_n(M+1)\quad（\forall n\in\{1,2,\ldots\}）。\quad(5)$$
> 
> 当 $m>n>N_1$ 时，将不等式(5)从 $n$ 至 $(m-1)$ 相加，得
> $$\alpha_m-\alpha_n\le(\sum_{k=n}^{m-1} \delta_k)\cdot(M+1)\le(\sum_{k=n}^{\infty} \delta_k)\cdot(M+1)<\varepsilon，$$
> 
> 亦即 $\alpha_m-\varepsilon\le\alpha_n$。
> 注意：当 $m$ 换为更大的整数时，此式保持成立，因此得 $\beta_m - \varepsilon \le \alpha_n$（$\beta_m = \sup_{k\ge m}\{\alpha_k\}$）。再将 $n$（$>N_1$）固定，令 $m\to\infty$，取极限，得 $\alpha - \varepsilon \le \alpha_n$。联系式(1)，当 $n > \max\{N,N_1\}$ 时，有
> $$\alpha - \varepsilon \le \alpha_n \le \sup_{k\ge n}\{\alpha_k\} = \beta_n < \alpha + \varepsilon，$$
> 
> 即 $|\alpha - \alpha_n| \le \varepsilon$，亦即 $\lim_{n\to\infty} \alpha_n = \alpha$。证毕。

利用 D'Alembert 判别法

> [!example] 例 5.1.23
> 试证如下级数收敛：
> $$\sqrt{2 - \sqrt{2}} + \sqrt{2 - \sqrt{2 + \sqrt{2}}} + \sqrt{2 - \sqrt{2 + \sqrt{2 + \sqrt{2}}}} + \ldots。$$

> [!proof]- 证
> 记 $A_1 = \sqrt{2}$，$A_2 = \sqrt{2 + \sqrt{2}}$，$A_3 = \sqrt{2 + \sqrt{2 + \sqrt{2}}}$，$\ldots$，则易知 $A_n \to 2$（$n\to\infty$）。
> 
> $$\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{\sqrt{2 - \sqrt{2 + A_n}}}{\sqrt{2 - A_n}}$$
> $$= \lim_{x\to2} \frac{\sqrt{2 - \sqrt{2 + x}}}{\sqrt{2 - x}}$$
> $$= \sqrt{ \lim_{x\to2} \frac{2 - \sqrt{2 + x}}{2 - x} }$$
> $$= \frac{1}{2} < 1，$$
> 
> 其中上式最后一步用 L'Hospital 法则。
> 利用 D'Alembert 判别法，知级数收敛。

> [!example] 例 5.1.24
> 级数 $\sum_{n=1}^{\infty} u_n^{-1}$ 收敛吗？这里 $u_1 = 1$，$u_2 = 2$，$u_n = u_{n-2} + u_{n-1}$（$n\ge3$）。（国外赛题）

> [!tip]- 提示
> （D'Alembert 判别法）由数学归纳法易得
> $$u_{n+1}^{-1}/u_n^{-1} = u_n/u_{n+1} \le 2/3 < 1，$$
> 故收敛。

> [!example] 例 5.1.25
> 证明：若 $f(x)$ 为单调减少的正值函数，又设
> $$\lim_{x\to+\infty} \frac{e^x f(e^x)}{f(x)} = \lambda，\quad(1)$$
> 则 $\lambda < 1$ 时级数 $\sum_{n=1}^{\infty} f(n)$ 收敛，$\lambda > 1$ 时级数 $\sum_{n=1}^{\infty} f(n)$ 发散。

> [!abstract]- 分析
> 因 $f(x) > 0$，$\searrow$，根据 Cauchy 积分判别法，$\sum_{n=1}^{\infty} f(n)$ 与积分 $\int_1^{+\infty} f(x)\, dx$ 同时敛散。要考察正值函数的反常积分 $\int_1^{+\infty} f(x)\, dx$ 的敛散性，只需要取一序列 $x_1 < x_2 < \ldots < x_n < \ldots$，使 $x_n \to +\infty$，看极限 $\lim_{n\to\infty} \int_1^{x_n} f(x)\, dx$ 是否存在。

> [!proof]- 证
> 已知 $\lim_{x\to+\infty} \frac{e^x f(e^x)}{f(x)} = \lambda$。
> 
> 1° 若 $\lambda > 1$，则 $\exists A > 1$，使得 $x > A$ 时，$\frac{e^x f(e^x)}{f(x)} > 1$，即 $e^x f(e^x) > f(x)$。从而 $\forall x_{n-1} < x_n$，有
> $$\int_{x_{n-1}}^{x_n} e^x f(e^x)\, dx > \int_{x_{n-1}}^{x_n} f(x)\, dx。\quad(2)$$
> 
> （因 $f(x)$ 单调，积分有意义。）左端积分作变量替换，令 $e^x = t$，于是(2)成为
> $$\int_{e^{x_{n-1}}}^{e^{x_n}} f(t)\, dt > \int_{x_{n-1}}^{x_n} f(x)\, dx。\quad(3)$$
> 
> 由此可见，若取序列 $\{x_n\}$ 如下：
> $$x_1 = 1，x_2 = e，x_3 = e^{e}，\ldots，x_n = e^{x_{n-1}}，x_{n+1} = e^{x_n}，\ldots，$$
> 
> 将积分变量 $t$ 仍写成 $x$，则式(3)可改写成
> $$\int_{x_n}^{x_{n+1}} f(x)\, dx > \int_{x_{n-1}}^{x_n} f(x)\, dx \quad（n=2,3,\ldots）。\quad(4)$$
> 
> 于是
> $$\int_1^{x_n} f(x)\, dx = \sum_{k=2}^{n} \int_{x_{k-1}}^{x_k} f(x)\, dx$$
> $$> (n-1) \int_1^e f(x)\, dx \to +\infty \quad（n\to\infty）。$$
> 
> 所以 $\lambda > 1$ 时，$\sum_{n=1}^{\infty} f(n)$ 发散。
> 
> 2° 若 $\lambda < 1$，取实数 $q$：$\lambda < q < 1$。由已知条件(1)，对 $q$ 而言，$\exists A > 1$，使得 $x > A$ 时，有 $\frac{e^x f(e^x)}{f(x)} < q$，即 $e^x f(e^x) < qf(x)$。采用上面同样的方法进行推理可得
> $$\int_1^{x_n} f(x)\, dx = \sum_{k=2}^{n} \int_{x_{k-1}}^{x_k} f(x)\, dx$$
> $$< \sum_{k=2}^{n} q^{k-1} \int_1^e f(x)\, dx$$
> $$< \frac{\int_1^e f(x)\, dx}{1-q} < +\infty，$$
> 
> 故 $\int_1^{+\infty} f(x)\, dx$ 收敛，从而 $\sum_{n=1}^{\infty} f(n)$ 收敛。

利用部分和有界

> [!example] 例 5.1.26
> 设 $\sum_{n=1}^{\infty} a_n$ 为正项级数，满足：
> 1）$\sum_{k=1}^{n} (a_k - a_n)$ 对 $n$ 有界；
> 2）$a_n \to 0$。
> 试证级数 $\sum_{n=1}^{\infty} a_n$ 收敛。

> [!proof]- 证
> 要证明正项级数 $\sum_{n=1}^{\infty} a_n$ 收敛，只要证明 $\exists M > 0$，使得 $\forall n\in\mathbb{N}$ 有 $\sum_{k=1}^{n} a_k \le M$。
> 
> 已知 $\sum_{k=1}^{n} (a_k - a_n)$ 有界，所以 $\exists M > 0$，使得
> $$\sum_{k=1}^{n} (a_k - a_n) \le M \quad（\forall n\in\mathbb{N}）。\quad(1)$$
> 
> 现任意固定一个 $n\in\mathbb{N}$，取 $m > n$，于是利用条件 2）及式(1)得
> $$\sum_{k=1}^{n} a_k - n a_m = \sum_{k=1}^{n} (a_k - a_m) \le \sum_{k=1}^{m} (a_k - a_m) \le M。\quad(2)$$
> 
> 此式对任意 $m > n$ 皆成立。令 $m\to\infty$，因 $n a_m \to 0$，故式(2)成为 $\sum_{k=1}^{n} a_k \le M$。由 $n$ 的任意性，知 $\sum_{k=1}^{\infty} a_k$ 收敛。

> [!example] ☆例 5.1.27
> 若 $\sum_{n=1}^{\infty} a_n$ 收敛，且 $a_n > 0$，则当 $p > 1/2$ 时，$\sum_{n=1}^{\infty} \frac{\sqrt{a_n}}{n^p}$ 收敛。（东北师范大学，郑州大学）

> [!tip]- 提示
> 应用 Cauchy 不等式：
> $$\sum_{k=1}^{n} \frac{\sqrt{a_k}}{k^p} \le \left(\sum_{k=1}^{n} a_k\right)^{1/2} \left(\sum_{k=1}^{n} \frac{1}{k^{2p}}\right)^{1/2}$$
> 或不等式
> $$\frac{\sqrt{a_n}}{n^p} \le \frac{1}{2}\left(a_n + \frac{1}{n^{2p}}\right)。$$

> [!example] ☆例 5.1.28
> 设 $\{a_n\}$（$n=1$）是正实数序列。证明：若级数 $\sum_{n=1}^{\infty} 1/a_n$ 收敛，则级数
> $$\sum_{n=1}^{\infty} \frac{n^2}{[(a_1 + a_2 + \ldots + a_n)^2 a_n]}$$
> 也收敛。（中南大学）

> [!proof]- 证
> 我们希望证明部分和 $S_n = \sum_{k=1}^{n} \frac{k^2}{(a_1 + \ldots + a_k)^2 \cdot a_k}$ 有界。记 $A_n = a_1 + \ldots + a_n$（$n\ge1$），$A_0 = 0$，于是
> 
> $$S_n = \sum_{k=1}^{n} \frac{k^2}{A_k^2} \cdot (A_k - A_{k-1})$$
> $$\le \frac{1}{a_1} + \sum_{k=2}^{n} \frac{k^2}{A_k A_{k-1}} \cdot (A_k - A_{k-1})$$
> $$= \frac{1}{a_1} + \sum_{k=2}^{n} \frac{k^2}{A_{k-1}} - \sum_{k=2}^{n} \frac{k^2}{A_k}$$
> $$= \frac{1}{a_1} + \sum_{k=1}^{n-1} \frac{(k+1)^2}{A_k} - \sum_{k=2}^{n} \frac{k^2}{A_k}$$
> $$= \frac{1}{a_1} + 2\sum_{k=2}^{n-1} \frac{k}{A_k} + \sum_{k=2}^{n-1} \frac{1}{A_k} + \frac{4}{A_1} - \frac{n^2}{A_n}$$
> $$\le \frac{5}{a_1} + 2\sum_{k=1}^{n} \frac{k}{A_k} + \sum_{k=1}^{n} \frac{1}{a_k}。$$
> 
> 右端第二项用 Cauchy 不等式放大：
> $$\sum_{k=1}^{n} \frac{k}{A_k} = \sum_{k=1}^{n} \frac{k}{A_k}\sqrt{a_k} \cdot \frac{1}{\sqrt{a_k}}$$
> $$\le \left[\sum_{k=1}^{n} \left(\frac{k}{A_k} \sqrt{a_k}\right)^2\right]^{1/2} \left[\sum_{k=1}^{n} \left(\frac{1}{\sqrt{a_k}}\right)^2\right]^{1/2}$$
> $$= \left(\sum_{k=1}^{n} \frac{k^2}{A_k^2} \cdot a_k \cdot \sum_{k=1}^{n} \frac{1}{a_k}\right)^{1/2}$$
> $$= \left(S_n \cdot \sum_{k=1}^{n} \frac{1}{a_k}\right)^{1/2}，$$
> 
> 得
> $$S_n \le \frac{5}{a_1} + 2\left(S_n \cdot \sum_{k=1}^{n} \frac{1}{a_k}\right)^{1/2} + \sum_{k=1}^{n} \frac{1}{a_k}。$$
> 
> 这是关于 $S_n$ 的不等式，解此不等式得
> $$\sqrt{S_n} \le \sqrt{\sum_{k=1}^{n} \frac{1}{a_k}} + \sqrt{\frac{5}{a_1} + 2\sum_{k=1}^{n} \frac{1}{a_k}}。$$
> 
> 因为 $\sum_{k=1}^{\infty} \frac{1}{a_k}$ 收敛，可知 $S_n$ 有界，原级数收敛。

> [!example] 例 5.1.29
> 设 $a_n > 0$，试证如下级数收敛：
> $$\sum_{n=1}^{\infty} \frac{a_n}{(1+a_1)(1+a_2)\ldots(1+a_n)}。$$

> [!tip]- 提示
> 用数学归纳法或连锁消去法可证：
> $$0 \le S_n = 1 - \frac{1}{(1+a_1)(1+a_2)\ldots(1+a_n)} < 1。$$

> [!example] new ☆例 5.1.30
> 假设 $a_n > 0$（$n=1,2,\ldots$），$S_n = \sum_{k=1}^{n} a_k$，试问：级数 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 与 $\sum_{k=1}^{\infty} a_k$ 的敛散性之间有何关系？给出证明。（南开大学）

> [!solution]- 解
> 1° 当 $\lambda = 1$ 时，两者同时敛散。因为
> 
> ① 若 $\sum_{k=1}^{\infty} a_k$ 发散，则由例 5.1.12 知 $\sum_{n=1}^{\infty} \frac{a_n}{S_n}$ 亦发散；
> 
> ② 若 $\sum_{k=1}^{\infty} a_k$ 收敛，因为 $0 < \frac{a_n}{S_n} \le \frac{1}{S_1}a_n$，可知 $\sum_{n=1}^{\infty} \frac{a_n}{S_n}$ 也收敛。
> 
> 2° 当 $\lambda > 1$ 时，不论 $\sum_{k=1}^{\infty} a_k$ 是否收敛，$\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 恒收敛。下面证明。

> [!proof]- 证法Ⅰ
> $$0 < \frac{a_n}{S_n^\lambda} = \frac{S_n - S_{n-1}}{S_n^\lambda} = \int_{S_{n-1}}^{S_n} \frac{1}{S_n^\lambda}\, dx \le \int_{S_{n-1}}^{S_n} \frac{1}{x^\lambda}\, dx \quad（n=2,3,\ldots）。\quad(1)$$
> 
> 累加起来，$\forall N > 2$，
> $$0 < \sum_{n=2}^{N} \frac{a_n}{S_n^\lambda} \le \int_{a_1}^{+\infty} \frac{1}{x^\lambda}\, dx < +\infty \quad（\lambda > 1）。$$
> 
> 说明部分和有界，故正项级数 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 收敛。

> [!proof]- 证法Ⅱ
> （利用 Lagrange 定理。）当 $\lambda > 1$ 时，
> $$\frac{1}{1-\lambda}\left(\frac{1}{S_n^{\lambda-1}} - \frac{1}{S_{n-1}^{\lambda-1}}\right) = \frac{1}{\xi_n^\lambda}(S_n - S_{n-1}) \ge \frac{S_n - S_{n-1}}{S_n^\lambda} = \frac{a_n}{S_n^\lambda}，$$
> 
> 其中 $\xi_n \in (S_{n-1}, S_n)$。
> 因此
> $$0 < \sum_{n=1}^{N} \frac{a_n}{S_n^\lambda} \le \frac{1}{1-\lambda} \sum_{n=2}^{N} \left(\frac{1}{S_n^{\lambda-1}} - \frac{1}{S_{n-1}^{\lambda-1}}\right)$$
> $$= \frac{1}{1-\lambda}\left(\frac{1}{S_N^{\lambda-1}} - \frac{1}{S_1^{\lambda-1}}\right)$$
> $$= \frac{1}{\lambda-1}\left(\frac{1}{S_1^{\lambda-1}} - \frac{1}{S_N^{\lambda-1}}\right)$$
> $$\le \frac{1}{\lambda-1} \cdot \frac{1}{S_1^{\lambda-1}}，\quad \forall N\in\mathbb{N}。$$
> 
> 此式说明部分和有界，故正项级数 $\sum_{n=1}^{\infty} \frac{a_n}{S_n}$ 收敛。

> [!proof]- 证（续）
> 3° 当 $0 < \lambda < 1$ 时，两者同时敛散。这是因为
> 
> ① 若 $\sum_{k=1}^{\infty} a_k$ 收敛于 $S$，则
> $$0 < \sum_{n=2}^{N} \frac{a_n}{S_n^\lambda} = \sum_{n=2}^{N} \frac{S_n - S_{n-1}}{S_n^\lambda}$$
> $$= \sum_{n=2}^{N} \frac{1}{S_n^\lambda} \int_{S_{n-1}}^{S_n} dx$$
> $$\le \sum_{n=2}^{N} \int_{S_{n-1}}^{S_n} \frac{1}{x^\lambda}\, dx$$
> $$= \frac{1}{1-\lambda} \sum_{n=2}^{N} \int_{S_{n-1}}^{S_n} dx^{1-\lambda}$$
> $$= \frac{1}{1-\lambda}(S_N^{1-\lambda} - a_1^{1-\lambda}) \le \frac{S}{1-\lambda}，$$
> 
> 说明部分和有界，故 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 收敛。
> 
> ② 若 $\sum_{k=1}^{\infty} a_k$ 发散，因为
> $$\sum_{n=1}^{N} \frac{a_n}{S_n^\lambda} \ge \frac{1}{S_N^\lambda} \sum_{n=1}^{N} a_n = \frac{1}{S_N^\lambda} \cdot S_N = S_N^{1-\lambda} \to +\infty \quad（N\to\infty），$$
> 
> 故 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 发散。
> 
> 4° 若 $\lambda = 0$，则 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda} = \sum_{k=1}^{\infty} a_k$（二者归一，当然同时敛散）。
> 
> 5° 若 $\lambda < 0$，则 $S_n = \sum_{k=1}^{n} a_k$ 与 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda} = \sum_{n=1}^{\infty} a_n S_n^{-\lambda}$ 同时敛散。因为
> 
> ① 若 $\sum_{k=1}^{\infty} a_k$ 收敛，则 $S_n = \sum_{k=1}^{n} a_k$ 有界：$\exists M > 0$，$\forall n > 0$：$0 < S_n < M$。因此
> $$0 < \sum_{n=1}^{N} a_n S_n^{-\lambda} \le \sum_{n=1}^{N} a_n M^{-\lambda} = M^{-\lambda} \sum_{n=1}^{N} a_n = M^{-\lambda} S_N \le M^{-\lambda} S，$$
> 
> 即 $\sum_{n=1}^{N} a_n S_n^{-\lambda}$ 有界，可知 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 收敛。
> 
> ② 若 $\sum_{k=1}^{n} a_k$ 发散，则当 $n$ 充分大时，$S_n > 1$，$S_n^{-\lambda} > 1$（$-\lambda > 0$）。故
> $$\sum_{n=1}^{N} \frac{a_n}{S_n^\lambda} = \sum_{n=1}^{N} a_n S_n^{-\lambda} \ge \sum_{n=1}^{N} a_n \to +\infty \quad（N\to\infty）。$$
> 
> 因此 $\sum_{n=1}^{\infty} \frac{a_n}{S_n^\lambda}$ 发散。


#### c. 变号级数敛散性的判断

> [!note] 要点
> 设 $\sum a_n$ 为变号级数，判断 $\sum a_n$ 的敛散性，通常方法是
>
> 1. 对 $\sum |a_n|$ 应用 D'Alembert 判别法或根式判别法，若 $\sum |a_n|$ 收敛，则 $\sum a_n$ 绝对收敛。用这两种判别法时，若 $\sum |a_n|$ 发散，则意味着 $a_n\nrightarrow 0$（$n\to\infty$），从而 $\sum a_n$ 亦发散。
> 2. 应用 Leibniz 定理：若 $a_n\ge 0$，$a_n\searrow 0$，则 $\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ 收敛。
> 3. 应用 Abel 判别法或 Dirichlet 判别法。
>
> Abel 判别法：若 $\sum_{n=1}^{\infty}a_n$ 收敛，$\{b_n\}$ 单调有界，则 $\sum_{n=1}^{\infty}a_n b_n$ 收敛。
>
> Dirichlet 判别法：若 $\{\sum_{k=1}^{n}a_k\}$ 有界，$b_n\to0$（或 $b_n\searrow 0$），则 $\sum_{n=1}^{\infty}a_n b_n$ 收敛。
>
> 4. 应用 Cauchy 准则（或兼用 Abel 变换等）。另外注意，证明条件收敛时，必须同时证明两点：一是 $\sum a_n$ 收敛，二是 $\sum |a_n|$ 发散。

> [!example] ☆例 5.1.31
> 证明级数
> $$
> 1-\frac{1}{3}\left(1+\frac{1}{2}\right)+\frac{1}{5}\left(1+\frac{1}{2}+\frac{1}{3}\right)-\frac{1}{7}\left(1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}\right)+\cdots
> $$
> 是收敛的．（上海师范大学）
>
> > [!proof]- 证
> > 因为
> > $$
> > \begin{aligned}
> > |a_n|&=\frac{1}{2n-1}\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right)=\frac{(2n-1)+2}{(2n-1)(2n+1)}\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right) \\
> > &=\frac{1}{2n+1}\left[\left(1+\frac{2}{2n-1}\right)\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right)\right]>\frac{1}{2n+1}\left(1+\frac{1}{2}+\cdots+\frac{1}{n}+\frac{1}{n+1}\right) \\
> > &=|a_{n+1}|\quad(n=1,2,\cdots).
> > \end{aligned}
> > $$
> > 即 $|a_n|\searrow$．又
> > $$
> > |a_n|=\frac{1}{2n-1}\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right)=\frac{1}{2n-1}(C+\ln n+\varepsilon_n)\to0\quad(n\to\infty)，
> > $$
> > 其中 $C$ 为 Euler 常数，故原级数收敛（Leibniz 定理）．

> [!example] 例 5.1.32
> 证明 $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{[\sqrt{n}]}}{n}$ 收敛（方括号表示取整函数）．
>
> > [!hint]- 提示
> > 将级数中相邻并且符号相同的项合并为一项，组成一新的交错级数：
> > $$
> > \sum_{n=1}^{\infty}(-1)^n\left[\frac{1}{n^2}+\frac{1}{n^2+1}+\cdots+\frac{1}{(n+1)^2-1}\right].
> > $$
> > 注意到方括号内共有 $2n+1$ 项，其中前 $n$ 项之和与后 $n+1$ 项之和，分别夹在 $\frac{1}{n+1}$ 与 $\frac{1}{n}$ 之间，因此
> > $$
> > \frac{2}{n+1}<\frac{1}{n^2}+\frac{1}{n^2+1}+\cdots+\frac{1}{(n+1)^2-1}<\frac{2}{n}.
> > $$
> > 知新级数为 Leibniz 级数，故收敛．原级数的任一部分和总是夹在新级数某相邻的两部分和之间，所以原级数也收敛．
>
> 练习　有兴趣的读者不妨类似讨论级数 $\sum_{n=1}^{\infty}\frac{1}{n}(-1)^{\sqrt[3]{n}}$ 的敛散性．

> [!example] ☆例 5.1.33
> 讨论级数
> $$
> \sum_{n=1}^{\infty}a_n=\frac{1}{1^p}-\frac{1}{2^q}+\frac{1}{3^p}-\frac{1}{4^q}+\cdots+\frac{1}{(2n-1)^p}-\frac{1}{(2n)^q}+\cdots \qquad(1)
> $$
> （$p>0$，$q>0$）的绝对收敛与条件收敛性．（复旦大学）
>
> > [!solution]- 解
> > 1° 若 $p,q>1$，则 $\sum_{n=1}^{\infty}a_n$ 绝对收敛（因为例如 $p>q$，则 $\sum_{n=1}^{\infty}|a_n|$ 以 $\sum_{n=1}^{\infty}\frac{1}{n^q}$（$q>1$）为优级数）．
> >
> > 2° 若 $0<p=q\le1$，应用 Leibniz 定理知级数收敛，且条件收敛．
> >
> > 3° 当 $p,q>0$ 时（此时通项 $\to0$），原级数（1）跟级数
> > $$
> > \sum_{n=1}^{\infty}\left[\frac{1}{(2n-1)^p}-\frac{1}{(2n)^q}\right] \qquad(2)
> > $$
> > 同时敛散．
> >
> > 若 $p>1$，$0<q\le1$ 或 $q>1$，$0<p\le1$，级数 $\sum_{n=1}^{\infty}\frac{1}{(2n-1)^p}$，$\sum_{n=1}^{\infty}\frac{1}{(2n)^q}$ 一收敛一发散，故原级数发散．
> >
> > 若 $0<p<q<1$，则 $\frac{1}{(2n-1)^p}-\frac{1}{(2n)^q}>0$，且与 $\frac{1}{(2n-1)^p}$ 同阶（$n\to\infty$），故级数（2）发散，从而（1）发散．
> >
> > 同理可证，若 $0<q<p<1$，则原级数发散．

> [!example] 例 5.1.34
> 研究级数 $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^{p+\frac{1}{n}}}$ 的绝对收敛与条件收敛性．（辽宁大学）
>
> > [!solution]- 解
> > 1° 当 $p\le0$ 时，通项 $\nrightarrow0$（$n\to\infty$），原级数发散．
> >
> > 2° 当 $p>1$ 时，因 $\frac{1}{n^{p+\frac{1}{n}}}<\frac{1}{n^p}$，故原级数绝对收敛．
> >
> > 3° 当 $0<p\le1$ 时，$\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^p}$ 收敛，$\frac{1}{n^{1/n}}$ 单调有界，应用 Abel 判别法知原级数收敛．因为
> > $$
> > \left|\frac{(-1)^{n-1}}{n^{p+\frac{1}{n}}}\right|\bigg/\frac{1}{n^p}\to1\quad(n\to\infty)，
> > $$
> > 故原级数条件收敛．

> [!exercise] 练习 1
> 设 $f(x)$ 在区间 $[-1,1]$ 上有二阶连续导数，且 $\displaystyle\lim_{x\to0}\frac{f(x)}{x}=0$．证明：数项级数
> $$
> \sum_{n=1}^{\infty}f\left(\frac{1}{n}\right)
> $$
> 绝对收敛．（华中科技大学）
>
> > [!proof]- 证
> > （利用 Taylor 公式．）
> > $$
> > \lim_{x\to0}\frac{f(x)}{x}=0\Rightarrow\lim_{x\to0}f(x)=0\Rightarrow f(0)=0\Rightarrow f'(0)=\lim_{x\to0}\frac{f(x)-0}{x-0}=0.
> > $$
> > 因 $f''(x)$ 在 $[-1,1]$ 上连续，故 $\exists M>0$，使得 $|f''(x)|\le M$，$\forall x\in[-1,1]$．因此
> > $$
> > \left|f\left(\frac{1}{n}\right)\right|\overset{\text{Taylor 公式}}{\le}f(0)+f'(0)\left(\frac{1}{n}\right)+\frac{f''(\xi)}{2!}\left(\frac{1}{n}\right)^2\le\frac{M}{2}\cdot\frac{1}{n^2},
> > $$
> > 其中 $0<\xi<\frac{1}{n}$．
> >
> > 故 $\sum_{n=1}^{\infty}f\left(\frac{1}{n}\right)$ 绝对收敛．

> [!exercise] 练习 2
> 设 $x_1=\frac{1}{2}$，$x_{n+1}=\frac{1}{2}-\frac{x_n^2}{2}$（$n=1,2,\cdots$）．
>
> 1. 试证极限 $\displaystyle\lim_{n\to\infty}x_n=A$ 存在，有限；
> 2. 证明级数 $\displaystyle\sum_{n=1}^{\infty}(x_n-A)$ 绝对收敛．（华中师范大学）
>
> > [!proof]- 证
> > 1. 由 $0<x_n\le\frac{1}{2}$（$\forall n\in\mathbb{N}$）可知 $|x_n+x_{n-1}|\le1$，故
> > $$
> > |x_{n+1}-x_n|=\frac{1}{2}\bigl|x_n^2-x_{n-1}^2\bigr|\le\frac{1}{2}|x_n-x_{n-1}|.
> > $$
> > （由压缩映象原理知 $|x_n|$ 收敛．）从递推式取极限得 $A=\frac{1}{2}-\frac{A^2}{2}$，解得 $A=\sqrt{2}-1$．
> >
> > 2. 对 $\sum_{n=1}^{\infty}|x_n-A|$ 应用 D'Alembert 判别法：
> > $$
> > \frac{|x_{n+1}-A|}{|x_n-A|}=\frac{\left|\frac{1}{2}-\frac{x_n^2}{2}-\left(\frac{1}{2}-\frac{A^2}{2}\right)\right|}{|x_n-A|}=\frac{1}{2}\cdot\frac{|x_n^2-A^2|}{|x_n-A|}=\frac{1}{2}|x_n+A|\to|A|<1\quad(n\to\infty).
> > $$
> > 故 $\sum_{n=1}^{\infty}(x_n-A)$ 绝对收敛获证．


#### d．Abel 变换

> [!note] 要点
> 所谓 Abel 变换，就是借助于 $A_n=\sum_{k=1}^{n}a_k$，将和式 $\sum_{k=n+1}^{m}a_kb_k$ 或 $\sum_{k=1}^{n}a_kb_k$ 进行改写．下面将相关公式列为例 5.1.35，以便后面引用和查阅．

> [!example] 例 5.1.35
> 试证 Abel 变换公式：
>
> 1）$\sum_{k=n+1}^{m}a_kb_k=-A_n b_{n+1}+\sum_{k=n+1}^{m-1}A_k(b_k-b_{k+1})+A_m b_m.$ $\qquad(A)$
>
> 若 $|A_n|\le M$（$\forall n\in N$），$m>n\ge1$，$b_n\le0$，↗（或 $b_n\ge0$，↘），则
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le2M|b_{n+1}|. \qquad(B)$$
>
> 若只知道 $b_n$ 单调，则
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le2M\bigl(|b_{n+1}|+|b_m|\bigr). \qquad(C)$$
>
> 2）对 $\sum_{k=1}^{n}a_kb_k$，有
>
> $$\sum_{k=1}^{n}a_kb_k=A_1b_1+\sum_{k=2}^{n}(A_k-A_{k-1})b_k. \qquad(A_1)$$
>
> 若 $\forall n\in N$，$|A_n|\le M$，且 $b_n\ge0$，↘（或 $b_n\le0$，↗），则
>
> $$\left|\sum_{k=1}^{n}a_kb_k\right|\le M|b_1|. \qquad(B_1)$$
>
> 若只知道 $b_n$ 单调，则
>
> $$\left|\sum_{k=1}^{n}a_kb_k\right|\le M\bigl(|b_1|+2|b_n|\bigr). \qquad(C_1)$$
>
> 3）由此直接得出 Abel 判别法和 Dirichlet 判别法．

> [!proof]- 证
> 1）（$m>n\ge1$）用 $A_n=\sum_{k=1}^{n}a_k$ 代入得
>
> $$\sum_{k=n+1}^{m}a_kb_k=\sum_{k=n+1}^{m}(A_k-A_{k-1})b_k$$
>
> $$=-A_n b_{n+1}+\sum_{k=n+1}^{m-1}A_k(b_k-b_{k+1})+A_m b_m，$$
>
> 此即式（A）．当 $|A_n|\le M$（$\forall n\in N$）时，
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le M|b_{n+1}|+M\sum_{k=n+1}^{m-1}|b_k-b_{k+1}|+M|b_m|.$$
>
> 若 $\{b_n\}$ 单调下降，且 $b_n\ge0$（或 $\{b_n\}$ 单调上升，且 $b_n\le0$），则 $\{|b_n-b_{k+1}|\}$□ 保持同号
>
> （因而 $\sum_{k=n+1}^{m-1}|b_k-b_{k+1}|=\left|\sum_{k=n+1}^{m-1}(b_k-b_{k+1})\right|$）．故有
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le M\bigl(|b_{n+1}|+|b_{n+1}-b_m|+|b_m|\bigr)=2M|b_{n+1}|. \qquad(B)$$
>
> 若只知道 $\{b_n\}$ 单调，则
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le M\bigl(|b_{n+1}|+|b_{n+1}|+|b_m|+|b_m|\bigr)\le2M\bigl(|b_{n+1}|+|b_m|\bigr). \qquad(C)$$
>
> 2）$\sum_{k=1}^{n}a_kb_k$ 与 $\sum_{k=n}^{m}a_kb_k$，不同之处在首项：前者为 $a_1=A_1$，后者为 $a_{n+1}=A_{n+1}-A_n$．若令 $a_0=A_0=0$，则 $a_1=A_1-A_0$ 成为 $a_{n+1}=A_{n+1}-A_n$，当 $n=0$ 的情形．这时式（B）和（C）推导过程有效．又 $n=0$ 时 $A_0=0$，因而公式（A）右端第一项 $-A_n b_{n+1}|_{n=0}=0$．故对应的公式（$A_1$）比公式（A）少（此）一项．公式（B）和（C）都是由公式（A）导出．同样，因为 $A_0=0$ 使得对应的公式（$B_1$）和（$C_1$）分别比公式（B）和（C）各少了一个 $b_1$．
>
> 3）（Dirichlet 判别法）若 $A_n=\sum_{k=1}^{n}a_k$ 有界（即存在 $M$ 使得 $|A_n|\le M$（$\forall n\in N$）），$\{b_n\}$ 单调趋于 $0$，则 $\sum_{k=1}^{\infty}a_kb_k$ 收敛．
>
> （下证 Dirichlet 判别法．）因为 $\{b_n\}$ 单调趋于 $0$，$\forall\varepsilon>0$，$\exists N>0$，当 $\forall m>n>N$ 时，有 $|b_n|<\frac{\varepsilon}{2M}$．利用上面的公式（B）得
>
> $$\left|\sum_{k=n+1}^{m}a_kb_k\right|\le2M|b_{n+1}|<2M\cdot\frac{\varepsilon}{2M}=\varepsilon.$$
>
> 根据 Cauchy 准则，级数 $\sum_{k=1}^{\infty}a_kb_k$ 收敛．
>
> （Abel 判别法）若 $\sum_{k=1}^{\infty}a_k$ 收敛，$\{b_n\}$ 单调有界，则 $\sum_{k=1}^{\infty}a_kb_k$ 收敛．
>
> （下证 Abel 判别法．）因为 $\{b_n\}$ 单调有界，所以 $\lim_{n\to\infty}b_n$ 存在 $=b$，于是 $\{b_n-b\}$ 单调
>
> 趋 $0$（$n\to\infty$）．因此
>
> $$\sum_{k=1}^{n}a_kb_k=\sum_{k=1}^{n}a_k(b_k-b)+b\sum_{k=1}^{n}a_k.$$
>
> 因为 $\sum_{k=1}^{\infty}a_k$ 收敛，其部分和有界；$\{b_k-b\}$ 单调趋于零，根据 Dirichlet 判别法，
>
> $\sum_{k=1}^{\infty}a_k(b_k-b)$ 收敛；右端第二项已知 $\sum_{k=1}^{\infty}a_k$ 收敛，故 $\sum_{k=1}^{\infty}a_kb_k$ 收敛．

> [!exercise] 练习 1
> 讨论下面级数的敛散性：$\sum_{n=1}^{\infty}\left(1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}\right)\frac{\sin nx}{n}.$（浙江大学）

> [!solution]- 解
> （用 Dirichlet 判别法．）当 $x=2n\pi$ 时，级数成为零级数，当然收敛．
>
> 当 $x\ne2n\pi$ 时，记 $a_k=\sin kx$，则
>
> $1^\circ$ $\left|\sum_{k=1}^{n}a_k\right|=\left|\sum_{k=1}^{n}\sin kx\right|=\left|\left(\sum_{k=1}^{n}2\sin kx\cdot\sin\frac{1}{2}x\right)\big/\left(2\sin\frac{1}{2}x\right)\right|$
>
> $=\left|\left(\sum_{k=1}^{n}\cos\frac{2k-1}{2}x-\cos\frac{2k+1}{2}x\right)\big/\left(2\sin\frac{1}{2}x\right)\right|$
>
> $\le\frac{1}{\left|\sin\frac{1}{2}x\right|}$（当 $x$ 固定时，对 $n$ 保持有界）．
>
> $2^\circ$（当 $n\to\infty$ 时）$b_n\overset{记}{=}\frac{1}{n}\left(1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}\right)\overset{例\ 1.2.11}{=}\frac{C+\ln n+\varepsilon_n}{n}\to0$（$C$ 为 Euler 常数）．而
>
> $$\left(\frac{C+\ln x}{x}\right)'=\frac{1-C-\ln x}{x^2}<0\quad(\text{当 }x>e\text{ 时}),$$
>
> 所以 $b_n\downarrow0$，故利用 Dirichlet 判别法知原级数收敛．证毕．

> [!exercise] 练习 2
> 设 $\{a_n\}$ 和 $\{b_n\}$ 是两个有界数列，满足 $\alpha a_{n+1}+\beta a_n=b_n$，$n\ge1$．若 $\alpha>\beta>0$，且 $b_n$ 单调，试证 $\{a_n\}$ 收敛．（仿华中师范大学）

> [!hint]- 提示
> 因为 $a_{n+1}=-\frac{\beta}{\alpha}a_n+\frac{1}{\alpha}b_n$，若记 $q=\frac{\beta}{\alpha}$，则 $0<q<1$．利用数学归纳法或回推法，易证
>
> $\{a_n\}$ 的通项：$a_{n+1}=\frac{1}{\alpha}\sum_{k=0}^{n-1}(-q)^k b_{n-k}+(-q)^n a_1$（$n\ge1$）．再用 Abel 判别法即得．

> [!proof]- 证
> $a_{n+1}=-qa_n+\frac{1}{\alpha}b_n=-q\left(-qa_{n-1}+\frac{1}{\alpha}b_{n-1}\right)+\frac{1}{\alpha}b_n$
>
> $= (-q)^2 a_{n-1}+\frac{-q}{\alpha}b_{n-1}+\frac{1}{\alpha}b_n$
>
> $= (-q)^2\left(-qa_{n-2}+\frac{1}{\alpha}b_{n-2}\right)+\frac{-q}{\alpha}b_{n-1}+\frac{1}{\alpha}b_n=\cdots$
>
> $=\frac{1}{\alpha}\sum_{k=0}^{n-1}(-q)^k b_{n-k}+(-q)^n a_1.$
>
> 因 $\{b_n\}$ 单调有界，而 $\sum_{k=0}^{\infty}(-1)^k q^k$ 收敛，利用 Abel 判别法，知 $\{a_n\}$ 收敛．

本题在例 1.6.9 练习 2 另有完全不同的证法：

> [!exercise] 练习 3
> 设级数 $\sum_{n=1}^{\infty}a_n$ 收敛，$\sum_{n=1}^{\infty}(b_{n+1}-b_n)$ 绝对收敛，试证级数 $\sum_{n=1}^{\infty}a_n b_n$ 也收敛．

> [!proof]- 证
> 因为 $\sum(b_{n+1}-b_n)$ 绝对收敛，所以 $\sum(b_{n+1}-b_n)$ 收敛，从而 $b_n-b_1\to A$，$b_n\to A+b_1$，所以 $b_n$ 有界，$|b_n|\le M$．因为 $\sum_{n=1}^{\infty} a_n$ 收敛，$\sum|b_{n+1}-b_n|$ 收敛，根据 Cauchy 准则，$\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，
>
> $$\left|\sum_{k=n+1}^{n+p} a_k\right|< \frac{\varepsilon}{1+M},\qquad \sum_{k=n+1}^{n+p}|b_{k+1}-b_k|<1 \quad(\forall p\in N).$$
>
> 记 $S_{n+i}=\sum_{k=n+1}^{n+i} a_k$（$i=1,2,\dots,p$），则
>
> $$\begin{aligned}
> \left|\sum_{k=n+1}^{n+p} a_kb_k\right|
> &= |a_{n+1}b_{n+1}+a_{n+2}b_{n+2}+\dots+a_{n+p}b_{n+p}| \\
> &= |S_{n+1}b_{n+1}+(S_{n+2}-S_{n+1})b_{n+2}+\dots+(S_{n+p}-S_{n+p-1})b_{n+p}| \\
> &= |S_{n+1}(b_{n+1}-b_{n+2})+\dots+S_{n+p-1}(b_{n+p-1}-b_{n+p})+S_{n+p}b_{n+p}| \\
> &\le |S_{n+1}||b_{n+1}-b_{n+2}|+\dots+|S_{n+p-1}||b_{n+p-1}-b_{n+p}|+|S_{n+p}||b_{n+p}| \\
> &\le \frac{\varepsilon}{1+M}\left(\sum_{k=n+1}^{n+p}|b_{k+1}-b_k|+|b_{n+p}|\right)\le \frac{\varepsilon}{1+M}(1+M)=\varepsilon \quad(\forall p\in N),
> \end{aligned}$$
>
> 所以 $\sum_{n=1}^{\infty} a_nb_n$ 收敛．


### 三、级数敛散性的应用

#### a. 收敛性的应用

**☆例5.1.36**  设 $x_n=\dfrac{n^n}{n!\,3^n}$，求 $\displaystyle\lim_{n\to\infty}x_n$.（上海交通大学，华中师范大学）

> [!solution]- 解
> 将 $x_n$ 看成级数 $\sum_{n=1}^{\infty}x_n$ 的通项，因
> $$
> \frac{x_n}{x_{n-1}}=\frac{1}{3}\Bigl(1+\frac{1}{n-1}\Bigr)^{\!n-1}\to\frac{e}{3}<1\quad(n\to\infty).
> $$
> 因此，级数 $\sum x_n$ 收敛，$\displaystyle\lim_{n\to\infty}x_n=0$.
>
> 类似可证 $\displaystyle\lim_{n\to\infty}\frac{a^n}{n!}=0$，$\displaystyle\lim_{n\to\infty}\frac{(2n)!}{a^{n!}}=0$（$a>1$）.（此类考题很多.）

> [!exercise] new 练习
> 设 $a_n>0$（$n=1,2,\ldots$），$\sum_{n=1}^{\infty}a_n=1$，$A_n=\sum_{k=1}^{n}a_k$. 求极限：
> $$
> \lim_{n\to\infty}\frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}.
> $$
> （华中科技大学）
>
> > [!solution]- 解
> > 因级数 $\sum_{n=1}^{\infty}a_n$ 收敛，故通项 $a_n\to0$（$n\to\infty$）.
> >
> > $$
> > \begin{aligned}
> > \frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}
> > &= \frac{e^{A_{n-1}}}{A_{n-1}^e\bigl((A_n/A_{n-1})^e-1\bigr)} \cdot
> > \frac{e^{a_n}-1}{(1+a_n/A_{n-1})^e-1}.
> > \end{aligned}
> > $$
> >
> > 而 $\dfrac{e^{A_{n-1}}}{A_{n-1}^e}\to e$（$n\to\infty$），故 $\displaystyle\lim_{n\to\infty}\frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}=1$.

**☆例5.1.37**  设 $x_n=1+\dfrac{1}{\sqrt{2}}+\cdots+\dfrac{1}{\sqrt{n}}-2\sqrt{n}$，试证 $\displaystyle\lim_{n\to\infty}x_n$ 存在.

> [!proof]- 证
> 因为 $x_n=\sum_{k=1}^{n}(x_k-x_{k-1})$（记 $x_0=0$）是 $\sum_{k=1}^{\infty}(x_k-x_{k-1})$ 的部分和，而
> $$
> \begin{aligned}
> x_k-x_{k-1}&=\frac{1}{\sqrt{k}}-2(\sqrt{k}-\sqrt{k-1}) \\
> &=\frac{1}{\sqrt{k}}-\frac{2}{\sqrt{k}+\sqrt{k-1}} \\
> &=-\frac{1}{\sqrt{k}\,(\sqrt{k}+\sqrt{k-1})^2}=O\Bigl(\frac{1}{k^{3/2}}\Bigr),
> \end{aligned}
> $$
> 所以 $\sum(x_k-x_{k-1})$ 收敛，$\displaystyle\lim_{n\to\infty}x_n$ 存在.

**例5.1.38**  求极限 $\displaystyle\lim_{n\to\infty}\Bigl(\frac{1}{p^{\,n+1}}+\frac{1}{p^{\,n+2}}+\cdots+\frac{1}{p^{\,2n}}\Bigr)$（$p>1$）.

> [!hint]- 提示
> 考虑级数 $\sum_{n=1}^{\infty}\frac{1}{p^{\,n}}$，利用 Cauchy 准则.

**☆例5.1.39**  设级数 $\sum_{n=1}^{\infty}a_n$ 收敛，$a_n>0$，$a_n\searrow$. 试证 $\displaystyle\lim_{n\to\infty}n a_n=0$.

> [!proof]- 证
> （要证明 $\displaystyle\lim_{n\to\infty}n a_n=0$，即 $\forall\varepsilon>0$，要证 $\exists N>0$，使得 $n>N$ 时，有 $0\leq n a_n<\varepsilon$。）
>
> 因 $\sum_{n=1}^{\infty}a_n$（$a_n>0$）收敛，根据 Cauchy 准则，$\forall\varepsilon>0$，$\exists N>0$，$n>N$ 时，
> $$
> 0<a_{N+1}+a_{N+2}+\cdots+a_n<\frac{\varepsilon}{2}. \tag{1}
> $$
>
> 但 $a_n\searrow$，故
> $$
> (n-N)a_n\leq a_{N+1}+\cdots+a_n<\frac{\varepsilon}{2}.
> $$
>
> 特别，令 $n=2N$，得 $(2N-N)a_{2N}<\dfrac{\varepsilon}{2}$. 故当 $n>2N$ 时，
> $$
> n a_n=(n-N)a_n+(2N-N)a_n<(n-N)a_n+(2N-N)a_{2N}<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$
>
> 故 $\displaystyle\lim_{n\to\infty}n a_n=0$.

> [!note] 注
> 本例说明递减正项级数要收敛，其通项必须是比 $1/n$ 高阶的无穷小量，但注意此条件并不充分.

> [!exercise] new 练习
> 设数列 $\{a_n\}$ 满足条件：
>
> 1）$0<a_k\leq 100a_n$（$n=k+1,k+2,\ldots$）； 2）$\displaystyle\sum_{n=1}^{\infty}a_n$ 收敛.
>
> 求证：$\displaystyle\lim_{n\to\infty}n a_n=0$.（华东师范大学）
>
> > [!hint]- 提示
> > 利用 Cauchy 准则，由条件 2）知，$\forall\varepsilon>0$，$\exists N\in\mathbb{N}$，$\forall n>N$，有
> > $$
> > 0<\sum_{k=n+1}^{2n}a_k<\frac{\varepsilon}{100}. \tag{1}
> > $$
> > 再利用条件 1），可证：$n>N$ 时，有 $|n a_n|<\varepsilon$.
> >
> > **再提示** 因 $a_n<100a_{n+1}$，$a_n<100a_{n+2}$，…，$a_n<100a_{2n}$，故
> > $$
> > |n a_n|\leq\Bigl|100\sum_{k=n+1}^{2n}a_k\Bigr|<100\cdot\frac{\varepsilon}{100}=\varepsilon.
> > $$

**例5.1.40**  设正项级数 $\sum_{n=1}^{\infty}a_n$ 收敛，试证：
$$
\lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}k a_k=0.
$$

> [!proof]- 证
> 记 $S=\sum_{n=1}^{\infty}a_n$，$S_n=\sum_{k=1}^{n}a_k$，则 $S_n\to S$（当 $n\to\infty$ 时）. 利用 Abel 变换，$\sum_{k=1}^{n}k a_k=n S_n-\sum_{k=1}^{n-1}S_k$，从而
> $$
> \lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}k a_k
> =\lim_{n\to\infty}\Bigl(S_n-\frac{S_1+S_2+\cdots+S_{n-1}}{n}\Bigr)=S-S=0.
> $$

> [!exercise] new 练习
> 设正项级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 收敛，求证：
> $$
> \lim_{n\to\infty}\frac{n^2}{\dfrac{1}{a_1}+\dfrac{1}{a_2}+\cdots+\dfrac{1}{a_n}}=0.
> $$
> （北京大学）
>
> > [!proof]- 证
> > 利用已知不等式（见例 3.4.8），
> > $$
> > 0\leq\frac{n}{\dfrac{1}{a_1}+\dfrac{1}{a_2}+\cdots+\dfrac{1}{a_n}}
> > \leq\sqrt[n]{a_1a_2\cdots a_n}
> > \leq\frac{a_1+a_2+\cdots+a_n}{n}.
> > $$
> >
> > 以 $n$ 同乘各项，得
> > $$
> > 0<\frac{n^2}{\dfrac{1}{a_1}+\dfrac{1}{a_2}+\cdots+\dfrac{1}{a_n}}
> > \leq n\sqrt[n]{a_1a_2\cdots a_n}
> > \leq\frac{n(a_1+a_2+\cdots+a_n)}{n}. \tag{1}
> > $$
> >
> > 式（1）右边的不等式，对每个 $k$，用 $k a_k$ 替代 $a_k$（$k=1,2,\ldots,n$），再同乘 $\dfrac{1}{\sqrt[n]{n!}}$ 得
> > $$
> > \begin{aligned}
> > 0<\frac{n^2}{\dfrac{1}{a_1}+\dfrac{1}{a_2}+\cdots+\dfrac{1}{a_n}}
> > &\leq\frac{n}{\sqrt[n]{n!}}\cdot\sqrt[n]{(a_1)(2a_2)\cdots(n a_n)} \\
> > &\leq\frac{n}{\sqrt[n]{n!}}\cdot\frac{a_1+2a_2+\cdots+n a_n}{n}. \tag{2}
> > \end{aligned}
> > $$
> >
> > 其中
> > $$
> > \lim_{n\to\infty}\frac{a_1+2a_2+\cdots+n a_n}{n}
> > =\lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}k a_k=0.
> > $$
> >
> > 而 $\displaystyle\lim_{n\to\infty}\frac{n}{\sqrt[n]{n!}}=e$（见例 1.3.14 的 4）. 根据式（2），利用求极限的两边夹法则，待证的极限为零.

**例5.1.41**  试证：若 $\sum_{n=1}^{\infty}a_n$ 收敛，$a_n>0$，$\{a_n-a_{n+1}\}\searrow$，则 $a_n\searrow0$，且
$$
\lim_{n\to\infty}\Bigl(\frac{1}{a_{n+1}}-\frac{1}{a_n}\Bigr)=+\infty.
$$

> [!proof]- 证
> **1°** 因 $\{a_n-a_{n+1}\}\searrow$，且 $a_n-a_{n+1}\to0$（因 $\sum a_n$ 收敛，知 $a_n\to0$），故 $a_n-a_{n+1}\geq0$，即 $a_n\geq a_{n+1}$，因此 $a_n\searrow0$.
>
> **2°** 要证 $n\to\infty$ 时，$\displaystyle\frac{1}{a_{n+1}}-\frac{1}{a_n}=\frac{a_n-a_{n+1}}{a_n a_{n+1}}\to+\infty$，即要证明 $\displaystyle\frac{a_n a_{n+1}}{a_n-a_{n+1}}\to0$.
>
> 事实上，
> $$
> \begin{aligned}
> 0\leq\frac{a_n a_{n+1}}{a_n-a_{n+1}}
> &\leq\frac{a_n^2}{a_n-a_{n+1}} \\
> &=\frac{1}{a_n-a_{n+1}}\sum_{k=n}^{\infty}(a_k^2-a_{k+1}^2) \\
> &\leq\sum_{k=n}^{\infty}\frac{a_k^2-a_{k+1}^2}{a_k-a_{k+1}}
> =\sum_{k=n}^{\infty}(a_k+a_{k+1}) \\
> &=R_{n-1}+R_n\to0\quad(n\to\infty),
> \end{aligned}
> $$
> 其中 $R_{n-1}=\sum_{k=n}^{\infty}a_k$ 为收敛级数 $\sum_{n=1}^{\infty}a_n$ 的余和.

**条件收敛的应用**

**例5.1.42**  研究级数 $\sum_{n=1}^{\infty}\dfrac{\sin n}{n}$. 把这个级数的前 $n$ 项和分成两项：
$$
S_n=\sum_{k=1}^{n}\frac{\sin k}{k}=S_n^{+}+S_n^{-}, \tag{1}
$$
其中 $S_n^{+}$ 和 $S_n^{-}$ 分别是正项之和与负项之和. 证明：$\displaystyle\lim_{n\to\infty}\frac{S_n^{+}}{S_n^{-}}$ 存在并求其值.（国外赛题）

> [!hint]- 提示
> **1°** 利用 Dirichlet 判别法知，$\sum\dfrac{\sin n}{n}$ 收敛.
>
> **2°** 由 $\displaystyle\sum_{k=1}^{n}\frac{|\sin k|}{k}\geq\sum_{k=1}^{n}\frac{\sin^2 k}{k}
> =\frac{1}{2}\sum_{k=1}^{n}\frac{1}{k}-\frac{1}{2}\sum_{k=1}^{n}\frac{\cos 2k}{k}$ 可知，$\sum_{n=1}^{\infty}\dfrac{\sin n}{n}$ 非绝对收敛.
>
> **3°** 由（1）式知
> $$
> \begin{aligned}
> S_n^{-}&=\frac{S_n^{+}+S_n^{-}-(S_n^{+}-S_n^{-})}{2} \\
> &=\frac{S_n}{2}-\frac{\sigma_n}{2}\to-\infty
> \quad(\text{其中 }\sigma_n=\sum_{k=1}^{n}\frac{|\sin k|}{k}\to+\infty).
> \end{aligned}
> $$
>
> **4°** $\displaystyle\frac{S_n^{+}}{S_n^{-}}=\frac{S_n^{+}+S_n^{-}}{S_n^{-}}-\frac{S_n^{-}}{S_n^{-}}
> =\frac{S_n}{S_n^{-}}-1\to-1\;(n\to\infty)$.

> [!note] 注
> 本题结论对任一条件收敛级数都成立.

#### b. 发散性的应用

**☆例5.1.43**  假设 $\sum_{n=1}^{\infty}a_n$ 发散，且 $\{a_n\}$ 是正的、不增的数列，试证：
$$
\lim_{n\to\infty}\frac{a_2+a_4+\cdots+a_{2n}}{a_1+a_3+\cdots+a_{2n-1}}=1. \tag{1}
$$
（东北师范大学）

> [!proof]- 证
> 因 $a_1\geq a_2\geq a_3\geq a_4\geq\cdots\geq a_{2n-1}\geq a_{2n}\geq\cdots\geq0$，故
> $$
> a_1+a_3+\cdots+a_{2n-1}\geq a_2+a_4+\cdots+a_{2n}\geq a_3+a_5+\cdots+a_{2n-1}. \tag{2}
> $$
>
> 从而
> $$
> 1\geq\frac{a_2+a_4+\cdots+a_{2n}}{a_1+a_3+\cdots+a_{2n-1}}
> \geq1-\frac{a_1}{a_1+a_3+\cdots+a_{2n-1}}\to1\quad(n\to\infty). \tag{3}
> $$
>
> 最后的极限是因 $\sum_{n=1}^{\infty}a_n$ 发散，由式（2），
> $$
> a_1+a_3+\cdots+a_{2n-1}\geq\frac{1}{2}(a_2+a_3+\cdots+a_{2n})
> =\frac{1}{2}(S_{2n}-a_1)\to+\infty\quad(n\to\infty).
> $$
>
> 式（3）表明式（1）成立.

> [!exercise] new ☆练习
> 设 $\{a_n\}$ 单调递减收敛于 $0$，级数 $\sum_{n=1}^{\infty}(a_n\sin n)$ 发散，试证：
>
> 1）$\displaystyle\sum_{n=1}^{\infty}a_n\sin n$ 收敛；
>
> 2）$\displaystyle\lim_{n\to\infty}\frac{u_n}{v_n}=1$，其中
> $$
> u_n=\sum_{k=1}^{n}\bigl(|a_k\sin k|+a_k\sin k\bigr),\qquad
> v_n=\sum_{k=1}^{n}\bigl(|a_k\sin k|-a_k\sin k\bigr).
> $$
> （南开大学）
>
> > [!hint]- 提示
> > **1）**（应用 Dirichlet 判别法）. 注意 $\bigl|\sum_{k=1}^{n}\sin k\bigr|\leq\dfrac{1}{\sin(1/2)}$（参看例 5.1.35 练习 1 的解）.
> >
> > **2）** 记 $A_n=\sum_{k=1}^{n}|a_k\sin k|$，$B_n=\sum_{k=1}^{n}a_k\sin k$，则
> > $$
> > \frac{u_n}{v_n}=\frac{A_n+B_n}{A_n-B_n}
> > =\frac{1+B_n/A_n}{1-B_n/A_n}\to1\quad(n\to\infty)
> > $$
> > （因已证 $\sum a_n\sin n$ 收敛，而 $\sum|a_n\sin n|$ 发散.）

**\*例5.1.44**  设

1）$a_k>0$（$k=1,2,\ldots$）； 2）$\displaystyle\lim_{k\to\infty}a_k=0$； 3）$\displaystyle\sum_{k=1}^{\infty}a_k$ 发散.

证明：$\{S_n-[S_n]\}$（$n=1,2,\ldots$）在 $[0,1]$ 中稠密，其中 $S_n=\sum_{k=1}^{n}a_k$，$[S_n]$ 为 $S_n$ 的整数部分.（兰州大学）

> [!note] 分析
> 问题等价于数列 $\{S_n\}\nearrow+\infty$，$S_n-S_{n-1}=a_n\to0$（当 $n\to\infty$ 时），求证 $S_n$ 的小数部分 $\alpha_n=S_n-[S_n]$ 在 $[0,1]$ 中稠密. 即 $\forall(\alpha,\beta)\subset[0,1]$，$\exists\alpha_n$，使得 $\alpha_n\in(\alpha,\beta)$. 因为 $S_n$ 挨个地走过每个整数区间 $[k,k+1]$，且“步子”$S_n-S_{n-1}=a_n$ 无限变小，这意味着它的小数部分 $\alpha_n$ 一遍又一遍地从左至右走过区间 $[0,1]$，向右的“步子”同样无限变小. 可见“步子”小到比指定区间 $(\alpha,\beta)$ 的长度还小时，就必有 $\alpha_n$ 落入 $(\alpha,\beta)$ 中.

> [!proof]- 证
> 设 $(\alpha,\beta)\subset[0,1]$ 为任一小区间. 因为 $a_k\to0$（$k\to\infty$），所以，$\exists N>0$，$k>N$ 时，
> $$
> 0<a_k<\beta-\alpha. \tag{1}
> $$
>
> 取一 $n_0>N$，对 $S_{n_0}$，可取充分大的正整数 $m$，使得 $S_{n_0}<m+\alpha$. 因为 $S_n\to+\infty$，所以 $\exists\,n_1>n_0>N$，使得 $S_{n_1}>m+\beta\,(>m+\alpha>S_{n_0})$. 于是必 $\exists\,n:n_0<n<n_1$，使得
> $$
> S_n\in(m+\alpha,m+\beta),\quad S_n-[S_n]\in(\alpha,\beta)
> $$
> （因为不然的话，在某个 $k>N$，使得 $S_{k-1}<m+\alpha$，$S_k>m+\beta$，从而 $a_k=S_k-S_{k-1}>\beta-\alpha$，与式（1）矛盾。）证毕。

最后（不作重点）我们介绍一个有趣的应用。

**※例5.1.45**  试在 $[0,1]$ 上构造一个函数，使之在 $[0,1]$ 上单调，在有理点上间断，在无理点上连续。

> [!solution]- 解
> **1°** $(0,1)$ 内全体有理点，可排成一个序列：
> $$
> \{x_n\}^{*}=\Bigl\{\frac{1}{2},\frac{1}{3},\frac{2}{3},\frac{1}{4},\frac{3}{4},
> \frac{1}{5},\frac{2}{5},\frac{3}{5},\frac{4}{5},\ldots\Bigr\}. \tag{1}
> $$
>
> 设
> $$
> \sum_{n=1}^{\infty}c_n=c_1+c_2+c_3+c_4+c_5+c_6+\cdots \tag{2}
> $$
> 是某一个正项收敛级数，$c_n>0$（$n=1,2,\ldots$）. $\forall x\in(0,1)$，定义
> $$
> f(x)=\sum_{x_n<x}c_n.
> $$
> （“$\sum_{x_n<x}$”表示只对 $x_n<x$ 的那些指标 $n$ 求和。）
>
> **2°** $f(x)$ 是递增的。因为 $x'<x''$ 时，
> $$
> f(x')=\sum_{x_n<x'}c_n<\sum_{x_n<x''}c_n=f(x'').
> $$
>
> **3°** 有理点上间断。因为对任意有理点 $\dfrac{n}{m}\in(0,1)$，必对应（1）式中某项 $x_{n_0}$，于是
> $$
> f\Bigl(\frac{n}{m}+0\Bigr)-f\Bigl(\frac{n}{m}-0\Bigr)\geq c_{n_0}>0.
> $$
> 因为 $\forall\varepsilon>0$，$f\bigl(\frac{n}{m}+\varepsilon\bigr)$ 中必含项 $c_{n_0}$，$f\bigl(\frac{n}{m}-\varepsilon\bigr)$ 必不含项 $c_{n_0}$。
>
> **4°** 无理点上连续。因为 $\sum c_n$ 收敛，所以 $\forall\varepsilon>0$，$\exists N>0$，$n>N$ 时，有
> $$
> 0<\sum_{k=n+1}^{\infty}c_k<\varepsilon.
> $$
> 在式（1）中，$x_1,x_2,\ldots,x_N$ 只有有限项。如此，对任一无理数 $x_0\in(0,1)$，$\exists\delta>0$（充分小），使得 $|x_i-x_0|\geq\delta$（$i=1,2,\ldots,N$）。从而当 $|x-x_0|<\delta$ 时，
> $$
> \begin{aligned}
> |f(x)-f(x_0)|
> &=\Bigl|\sum_{x_n<x}c_n-\sum_{x_n<x_0}c_n\Bigr| \\
> &\leq\sum_{\substack{x_n\text{ 在 }x\text{ 与 }x_0\text{ 之间}}}c_n \\
> &\leq\sum_{|x_n-x_0|<\delta}c_n
> \leq\sum_{N+1}^{\infty}c_n<\varepsilon.
> \end{aligned}
> $$
>
> 所以 $f(x)$ 在 $x_0$ 处连续。由 $x_0$ 的任意性，知 $f(x)$ 在 $(0,1)$ 中一切无理点上都连续。


#### a. 收敛性的应用

> [!example] ☆例5.1.36
> 设 $x_n=\frac{n^n}{n!3^n}$，求 $\lim_{n\to\infty}x_n$.（上海交通大学，华中师范大学）

> [!solution]- 解
> 将 $x_n$ 看成级数 $\sum_{n=1}^\infty x_n$ 的通项，因 $\frac{x_n}{x_{n-1}}=\frac{1}{3}\left(1+\frac{1}{n-1}\right)^{n-1}\to\frac{e}{3}<1$（$n\to\infty$）.
>
> 因此，级数 $\sum x_n$ 收敛，$\lim_{n\to\infty}x_n=0$.
>
> 类似可证 $\lim_{n\to\infty}\frac{a^n}{n!}=0$，$\lim_{n\to\infty}\frac{(2n)!}{a^n!}=0$（$a>1$）.（此类考题很多.）

> [!exercise] new 练习
> 设 $a_n>0$（$n=1,2,\dots$），$\sum_{n=1}^\infty a_n=1$，$A_n=\sum_{k=1}^n a_k$. 求极限：$\displaystyle\lim_{n\to\infty}\frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}$.（华中科技大学）

> [!solution]- 解
> 因级数 $\sum_{n=1}^\infty a_n$ 收敛，故通项 $a_n\to0$（$n\to\infty$）.
>
> $$
> \begin{aligned}
> \frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}
> &= \frac{e^{A_{n-1}}}{A_{n-1}^e\left(\left(\frac{A_n}{A_{n-1}}\right)^e-1\right)} \cdot \frac{e^{a_n}-1}{\left(1+\frac{a_n}{A_{n-1}}\right)^e-1}
> \end{aligned}
> $$
>
> 而 $\frac{e^{A_{n-1}}}{A_{n-1}^e}\to e$（$n\to\infty$），故 $\displaystyle\lim_{n\to\infty}\frac{e^{A_n}-e^{A_{n-1}}}{A_n^e-A_{n-1}^e}=1$.

> [!example] ☆例5.1.37
> 设 $x_n=1+\frac{1}{\sqrt{2}}+\dots+\frac{1}{\sqrt{n}}-2\sqrt{n}$，试证 $\lim_{n\to\infty}x_n$ 存在.

> [!proof]- 证
> 因为 $x_n=\sum_{k=1}^n(x_k-x_{k-1})$（记 $x_0=0$）是 $\sum_{k=1}^\infty(x_k-x_{k-1})$ 的部分和，而
>
> $$
> \begin{aligned}
> x_k-x_{k-1}&=\frac{1}{\sqrt{k}}-2\left(\sqrt{k}-\sqrt{k-1}\right) \\
> &=\frac{1}{\sqrt{k}}-\frac{2}{\sqrt{k}+\sqrt{k-1}} \\
> &=-\frac{1}{\sqrt{k}\left(\sqrt{k}+\sqrt{k-1}\right)^2}=O\left(\frac{1}{k^{3/2}}\right),
> \end{aligned}
> $$
>
> 所以 $\sum(x_k-x_{k-1})$ 收敛，$\lim_{n\to\infty}x_n$ 存在.

> [!example] 例5.1.38
> 求极限 $\displaystyle\lim_{n\to\infty}\left(\frac{1}{p^{n+1}}+\frac{1}{p^{n+2}}+\dots+\frac{1}{p^{2n}}\right)$（$p>1$）.

> [!hint]- 提示
> 考虑级数 $\sum_{n=1}^\infty\frac{1}{p^n}$，利用 Cauchy 准则.

> [!example] ☆例5.1.39
> 设级数 $\sum_{n=1}^\infty a_n$ 收敛，$a_n>0$，$a_n\searrow$. 试证 $\lim_{n\to\infty}na_n=0$.

> [!proof]- 证
> （要证明 $\lim_{n\to\infty}na_n=0$，即 $\forall\varepsilon>0$，要证 $\exists N>0$，使得 $n>N$ 时，有 $0\leq na_n<\varepsilon$.）
>
> 因 $\sum_{n=1}^\infty a_n$（$a_n>0$）收敛，根据 Cauchy 准则，$\forall\varepsilon>0$，$\exists N>0$，$n>N$ 时，
>
> $$
> 0<a_{N+1}+a_{N+2}+\dots+a_n<\frac{\varepsilon}{2}. \tag{1}
> $$
>
> 但 $a_n\searrow$，故
>
> $$
> (n-N)a_n\leq a_{N+1}+\dots+a_n<\frac{\varepsilon}{2}.
> $$
>
> 特别，令 $n=2N$，得 $(2N-N)a_{2N}<\frac{\varepsilon}{2}$. 故当 $n>2N$ 时，
>
> $$
> na_n=(n-N)a_n+(2N-N)a_n<(n-N)a_n+(2N-N)a_{2N}<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$
>
> 故 $\lim_{n\to\infty}na_n=0$.

> [!remark] 注
> 本例说明递减正项级数要收敛，其通项必须是比 $\frac{1}{n}$ 高阶的无穷小量，但注意此条件并不充分.

> [!exercise] new 练习
> 设数列 $\{a_n\}$ 满足条件：
>
> 1）$0<a_k\leq 100a_n$（$n=k+1,k+2,\dots$）；
> 2）$\sum_{n=1}^\infty a_n$ 收敛.
>
> 求证：$\lim_{n\to\infty}na_n=0$.（华东师范大学）

> [!hint]- 提示
> 利用 Cauchy 准则，由条件 2）知，$\forall\varepsilon>0$，$\exists N\in\mathbb N$，$\forall n>N$，有
>
> $$
> 0<\sum_{k=n+1}^{2n} a_k<\frac{\varepsilon}{100}. \tag{1}
> $$
>
> 再利用条件 1），可证：$n>N$ 时，有 $|na_n|<\varepsilon$.

> [!hint]- 再提示
> 因 $a_n<100a_{n+1}$，$a_n<100a_{n+2}$，$\dots$，$a_n<100a_{2n}$，故 $|na_n|\leq\left|100\sum_{k=n+1}^{2n} a_k\right|<100\cdot\frac{\varepsilon}{100}=\varepsilon$.

> [!example] 例5.1.40
> 设正项级数 $\sum_{n=1}^\infty a_n$ 收敛，试证：$\displaystyle\lim_{n\to\infty}\frac{\sum_{k=1}^n ka_k}{n}=0$.

> [!proof]- 证
> 记 $S=\sum_{n=1}^\infty a_n$，$S_n=\sum_{k=1}^n a_k$，则 $S_n\to S$（当 $n\to\infty$ 时）. 利用 Abel 变换，$\sum_{k=1}^n ka_k=nS_n-\sum_{k=1}^{n-1} S_k$，从而
>
> $$
> \lim_{n\to\infty}\frac{\sum_{k=1}^n ka_k}{n}
> = \lim_{n\to\infty}\left(S_n-\frac{S_1+S_2+\dots+S_{n-1}}{n}\right)=S-S=0.
> $$

> [!exercise] new 练习
> 设正项级数 $\sum_{n=1}^\infty a_n$ 收敛，求证：$\displaystyle\lim_{n\to\infty}\frac{n^2}{\frac{1}{a_1}+\frac{1}{a_2}+\dots+\frac{1}{a_n}}=0$.（北京大学）

> [!proof]- 证
> 利用已知不等式（见例 3.4.8），
>
> $$
> 0\leq \frac{n}{\frac{1}{a_1}+\frac{1}{a_2}+\dots+\frac{1}{a_n}} \leq \sqrt[n]{a_1a_2\dots a_n} \leq \frac{a_1+a_2+\dots+a_n}{n}.
> $$
>
> 以 $n$ 同乘各项，得
>
> $$
> 0< \frac{n^2}{\frac{1}{a_1}+\frac{1}{a_2}+\dots+\frac{1}{a_n}} \leq n\sqrt[n]{a_1a_2\dots a_n} \leq n\cdot\frac{a_1+a_2+\dots+a_n}{n}. \tag{1}
> $$
>
> 式（1）右边的不等式，对每个 $k$，用 $ka_k$ 替代 $a_k$（$k=1,2,\dots,n$），再同乘 $\frac{1}{\sqrt[n]{n!}}$ 得
>
> $$
> \begin{aligned}
> 0< \frac{n^2}{\frac{1}{a_1}+\frac{1}{a_2}+\dots+\frac{1}{a_n}}
> &\leq \frac{n}{\sqrt[n]{n!}} \cdot \sqrt[n]{(a_1)(2a_2)\dots(na_n)} \\
> &\leq \frac{n}{\sqrt[n]{n!}} \cdot \frac{a_1+2a_2+\dots+na_n}{n}. \tag{2}
> \end{aligned}
> $$
>
> 其中
>
> $$
> \lim_{n\to\infty}\frac{a_1+2a_2+\dots+na_n}{n} = \lim_{n\to\infty}\frac{\sum_{k=1}^n ka_k}{n} = 0.
> $$
>
> 而 $\lim_{n\to\infty}\frac{n}{\sqrt[n]{n!}}=e$（见例 1.3.14 的 4）. 根据式（2），利用求极限的两边夹法则，待证的极限为零.

> [!example] 例5.1.41
> 试证：若 $\sum_{n=1}^\infty a_n$ 收敛，$a_n>0$，$\{a_n-a_{n+1}\}\searrow$，则 $a_n\searrow0$，且
>
> $$
> \lim_{n\to\infty}\left(\frac{1}{a_{n+1}}-\frac{1}{a_n}\right)=+\infty.
> $$

> [!proof]- 证
> **1°** 因 $\{a_n-a_{n+1}\}\searrow$，且 $a_n-a_{n+1}\to0$（因 $\sum a_n$ 收敛，知 $a_n\to0$），故 $a_n-a_{n+1}\geq0$，即 $a_n\geq a_{n+1}$，因此 $a_n\searrow0$.
>
> **2°** 要证 $n\to\infty$ 时，$\frac{1}{a_{n+1}}-\frac{1}{a_n}=\frac{a_n-a_{n+1}}{a_na_{n+1}}\to+\infty$，即要证明 $\frac{a_na_{n+1}}{a_n-a_{n+1}}\to0$.
>
> 事实上，
>
> $$
> \begin{aligned}
> 0\leq \frac{a_na_{n+1}}{a_n-a_{n+1}}
> &\leq \frac{a_n^2}{a_n-a_{n+1}} \\
> &= \frac{1}{a_n-a_{n+1}} \sum_{k=n}^\infty \left(a_k^2-a_{k+1}^2\right) \\
> &\leq \sum_{k=n}^\infty \frac{a_k^2-a_{k+1}^2}{a_k-a_{k+1}} \\
> &= \sum_{k=n}^\infty (a_k+a_{k+1}) = R_{n-1}+R_n\to0 \quad (n\to\infty),
> \end{aligned}
> $$
>
> 其中 $R_{n-1}=\sum_{k=n}^\infty a_k$ 为收敛级数 $\sum_{n=1}^\infty a_n$ 的余和.

**条件收敛的应用**

> [!example] 例5.1.42
> 研究级数 $\sum_{n=1}^\infty \frac{\sin n}{n}$. 把这个级数的前 $n$ 项和分成两项：
>
> $$
> S_n=\sum_{k=1}^n \frac{\sin k}{k} = S_n^+ + S_n^-, \tag{1}
> $$
>
> 其中 $S_n^+$ 和 $S_n^-$ 分别是正项之和与负项之和. 证明：$\lim_{n\to\infty} \frac{S_n^+}{S_n^-}$ 存在并求其值.（国外赛题）

> [!hint]- 提示
> **1°** 利用 Dirichlet 判别法知，$\sum\frac{\sin n}{n}$ 收敛.
>
> **2°** 由 $\sum_{k=1}^n \frac{|\sin k|}{k} \geq \sum_{k=1}^n \frac{\sin^2k}{k} = \frac{1}{2}\sum_{k=1}^n \frac{1}{k} - \frac{1}{2}\sum_{k=1}^n \frac{\cos 2k}{k}$ 可知，$\sum_{n=1}^\infty \frac{\sin n}{n}$ 非绝对收敛.
>
> **3°** 由（1）式知
>
> $$
> \begin{aligned}
> S_n^- &= \frac{S_n^+ + S_n^- - (S_n^+ - S_n^-)}{2} \\
> &= \frac{S_n}{2} - \frac{\sigma_n}{2} \to -\infty \quad \left(\text{其中 }\sigma_n=\sum_{k=1}^n \frac{|\sin k|}{k} \to +\infty\right).
> \end{aligned}
> $$
>
> **4°** $\displaystyle \frac{S_n^+}{S_n^-} = \frac{S_n^+ + S_n^-}{S_n^-} - \frac{S_n^-}{S_n^-} = \frac{S_n}{S_n^-} -1 \to -1$（$n\to\infty$）.

> [!remark] 注
> 本题结论对任一条件收敛级数都成立.


#### b. 发散性的应用

> [!example] ☆例5.1.43
> 假设 $\sum_{n=1}^{\infty} a_n$ 发散，且 $\{a_n\}$ 是正的、不增的数列，试证：
> $$
> \lim_{n \to \infty} \frac{a_2 + a_4 + \cdots + a_{2n}}{a_1 + a_3 + \cdots + a_{2n-1}} = 1.
> $$
> （东北师范大学）

> [!proof]-
> 因 $a_1 \ge a_2 \ge a_3 \ge a_4 \ge \cdots \ge a_{2n-1} \ge a_{2n} \ge \cdots \ge 0$，故
> $$
> a_1 + a_3 + \cdots + a_{2n-1} \ge a_2 + a_4 + \cdots + a_{2n} \ge a_3 + a_5 + \cdots + a_{2n-1}.
> $$
> 从而
> $$
> 1 \ge \frac{a_2 + a_4 + \cdots + a_{2n}}{a_1 + a_3 + \cdots + a_{2n-1}} \ge 1 - \frac{a_1}{a_1 + a_3 + \cdots + a_{2n-1}} \to 1 \ (n \to \infty).
> $$
> 最后的极限是因 $\sum_{n=1}^{\infty} a_n$ 发散，由式（2），
> $$
> a_1 + a_3 + \cdots + a_{2n-1} \ge \frac{1}{2}(a_2 + a_3 + \cdots + a_{2n}) = \frac{1}{2}(S_{2n} - a_1) \to +\infty \ (n \to \infty).
> $$
> 式（3）表明式（1）成立.

> [!exercise] ☆练习
> 设 $\{a_n\}$ 单调递减收敛于 $0$，级数 $\sum_{n=1}^{\infty} (a_n \sin n)$ 发散，试证：
>
> 1）$\sum_{n=1}^{\infty} a_n \sin n$ 收敛；
>
> 2）$\lim_{n \to \infty} u_n / v_n = 1$，其中 $u_n = \sum_{k=1}^{n} (|a_k \sin k| + a_k \sin k)$，$v_n = \sum_{k=1}^{n} (|a_k \sin k| - a_k \sin k)$.（南开大学）

> [!hint]-
> 1）（应用 Dirichlet 判别法）. 注意 $|\sum_{k=1}^{n} \sin k| \le 1/\sin(1/2)$（参看例 5.1.35 练习 1 的解）.
>
> 2）记 $A_n = \sum_{k=1}^{n} |a_k \sin k|$，$B_n = \sum_{k=1}^{n} a_k \sin k$，则
> $$
> \frac{u_n}{v_n} = \frac{A_n + B_n}{A_n - B_n} = \frac{1 + B_n/A_n}{1 - B_n/A_n} \to 1 \ (n \to \infty)
> $$
> （因已证 $\sum a_n \sin n$ 收敛，而 $\sum |a_n \sin n|$ 发散.）

> [!example] *例5.1.44
> 设
>
> 1）$a_k > 0 \ (k = 1, 2, \ldots)$；  2）$\lim_{k \to \infty} a_k = 0$；  3）$\sum_{k=1}^{\infty} a_k$ 发散.
>
> 证明：$\{S_n - [S_n]\} \ (n = 1, 2, \ldots)$ 在 $[0, 1]$ 中稠密，其中 $S_n = \sum_{k=1}^{n} a_k$，$[S_n]$ 为 $S_n$ 的整数部分.（兰州大学）
>
> **分析**  问题等价于数列 $S_n \nearrow +\infty$，$S_n - S_{n-1} = a_n \to 0$（当 $n \to \infty$ 时），求证 $S_n$ 的小数部分 $\alpha_n = S_n - [S_n]$ 在 $[0, 1]$ 中稠密. 即 $\forall (\alpha, \beta) \subset [0, 1]$，$\exists \alpha_n$，使得 $\alpha_n \in (\alpha, \beta)$. 因为 $S_n$ 挨个地走过每个整数区间 $[k, k+1]$，且"步子" $S_n - S_{n-1} = a_n$ 无限变小，这意味着它的小数部分 $\alpha_n$ 一遍又一遍地从左至右走过区间 $[0, 1]$，向右的"步子"同样无限变小. 可见"步子"小到比指定区间 $(\alpha, \beta)$ 的长度还小时，就必有 $\alpha_n$ 落入 $(\alpha, \beta)$ 中.

> [!proof]-
> 设 $(\alpha, \beta) \subset [0, 1]$ 为任一小区间. 因为 $a_k \to 0 \ (k \to \infty)$，所以，$\exists N > 0$，$k > N$ 时，
> $$
> 0 < a_k < \beta - \alpha.
> $$
> 取一 $n_0 > N$，对 $S_{n_0}$，可取充分大的正整数 $m$，使得 $S_{n_0} < m + \alpha$. 因为 $S_n \to +\infty$，所以 $\exists n_1 > n_0 > N$，使得 $S_{n_1} > m + \beta \ (> m + \alpha > S_{n_0})$. 于是必 $\exists n$：$n_0 < n < n_1$，使得 $S_n \in (m + \alpha, m + \beta)$，$S_n - [S_n] \in (\alpha, \beta)$（因为不然的话，在某个 $k > N$，使得 $S_{k-1} < m + \alpha$，$S_k > m + \beta$，从而 $a_k = S_k - S_{k-1} > \beta - \alpha$，与式（1）矛盾。）. 证毕.

最后（不作重点）我们介绍一个有趣的应用。

> [!example] ※例5.1.45
> 试在 $[0, 1]$ 上构造一个函数，使之在 $[0, 1]$ 上单调，在有理点上间断，在无理点上连续.

> [!solution]-
> **1°** $(0, 1)$ 内全体有理点，可排成一个序列：
> $$
> \{x_n\}^* = \left\{\frac{1}{2}, \frac{1}{3}, \frac{2}{3}, \frac{1}{4}, \frac{3}{4}, \frac{1}{5}, \frac{2}{5}, \frac{3}{5}, \frac{4}{5}, \ldots\right\}.
> $$
> 设
> $$
> \sum_{n=1}^{\infty} c_n = c_1 + c_2 + c_3 + c_4 + c_5 + c_6 + \cdots
> $$
> 是某一个正项收敛级数，$c_n > 0 \ (n = 1, 2, \ldots)$. $\forall x \in (0, 1)$，定义 $f(x) = \sum_{x_n < x} c_n$.（"$\sum \cdots$"表示只对 $x_n < x$ 的那些指标 $n$ 求和.）
>
> **2°** $f(x)$ 是递增的. 因为 $x' < x''$ 时，$f(x') = \sum_{x_n < x'} c_n < \sum_{x_n < x''} c_n = f(x'')$.
>
> **3°** 有理点上间断. 因为对任意有理点 $n/m \in (0, 1)$，必对应（1）式中某项 $x_{n_0}$，于是 $f(n/m + 0) - f(n/m - 0) \ge c_{n_0} > 0$. 因为 $\forall \varepsilon > 0$，$f(n/m + \varepsilon)$ 中必含项 $c_{n_0}$，$f(n/m - \varepsilon)$ 必不含项 $c_{n_0}$.
>
> **4°** 无理点上连续. 因为 $\sum c_n$ 收敛，所以 $\forall \varepsilon > 0$，$\exists N > 0$，$n > N$ 时，有 $0 < \sum_{k=n+1}^{\infty} c_k < \varepsilon$. 在式（1）中，$x_1, x_2, \ldots, x_N$ 只有有限项. 如此，对任一无理数 $x_0 \in (0, 1)$，$\exists \delta > 0$（充分小），使得 $|x_i - x_0| \ge \delta \ (i = 1, 2, \ldots, N)$. 从而当 $|x - x_0| < \delta$ 时，
> $$
> |f(x) - f(x_0)| = \left|\sum_{x_n < x} c_n - \sum_{x_n < x_0} c_n\right| \le \sum_{x_n \in \{x_i \text{ 与 } x_0 \text{ 之间}\}} c_n \le \sum_{|x_n - x_0| < \delta} c_n \le \sum_{N+1}^{\infty} c_n < \varepsilon.
> $$
> 所以 $f(x)$ 在 $x_0$ 处连续. 由 $x_0$ 的任意性，知 $f(x)$ 在 $(0, 1)$ 中一切无理点上都连续.


### 四、级数问题的若干反例

> [!example] 例5.1.46
> 试写出一正项级数 $\sum a_n$，使得
> 1）$\sum a_n$ 收敛；
> 2）$a_n \neq o(1/n)$。（国外赛题）

> [!note] 分析
> 我们知道级数 $\sum 1/n^2$ 满足条件1），不满足条件2）。而 $\sum 1/n$ 满足条件2），不满足条件1）。现把两者结合起来。我们看到，若把 $\sum 1/n^2$ 中一部分项里的 $1/n^2$ 换成 $1/n$，那么所得的级数满足条件2）。为使新级数仍然收敛，我们只对 $n=4,9,16,25,36,\ldots$ 这些项进行上述改换，即新级数为
> $$
> \sum_{n=1}^{\infty} a_n = 1 + \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4} + \frac{1}{5^2} + \frac{1}{6^2} + \frac{1}{7^2} + \frac{1}{8^2} + \frac{1}{9} + \frac{1}{10^2} + \cdots \quad \text{（1）}
> $$
> 这时虽然掺杂了一部分 $\sum 1/n$ 的项，但这些项的和为
> $$
> 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots + \frac{1}{k^2} + \cdots,
> $$
> 可见级数（1）是收敛的。

> [!solution]- 解
> 设 $\sum a_n$ 如式（1）：当 $n=$ 整数平方数时，$a_n=1/n$，否则 $a_n=1/n^2$。显然，$a_n \neq o(1/n)$。又因为 $\forall n \in \mathbb{N}$，部分和
> $$
> S_n = \sum_{k=1}^{n} \frac{1}{k^i} \quad \left(i = \begin{cases}1, & \text{当 } k = \text{整数的平方时} \\ 2, & \text{否则}\end{cases}\right)
> $$
> $$
> \leq \sum_{k=1}^{n} \frac{1}{k^2} + \sum_{k^2 \leq n} \frac{1}{k^2} \leq 2\sum_{k=1}^{n} \frac{1}{k^2} < 2\sum_{k=1}^{\infty} \frac{1}{k^2} < +\infty.
> $$
> 故此级数收敛。

> [!note] 注
> 本例说明例5.1.39中单调性条件去掉之后，结论可能不成立。

> [!example] 例5.1.47
> 举出一个发散的交错级数，使其通项趋向零。（国外赛题）

> [!note] 分析
> 因为一个交错级数
> $$
> a_1 - a_2 + a_3 - a_4 + \cdots + a_{2n-1} - a_{2n} + \cdots \quad (a_n > 0)
> $$
> 的部分和
> $$
> S_{2n} = \sum_{k=1}^{2n} (-1)^{k-1} a_k = (a_1 - a_2) + \cdots + (a_{2n-1} - a_{2n}) = \sum_{k=1}^{n} a_{2k-1} - \sum_{k=1}^{n} a_{2k}.
> $$
> 可见只要造一个级数使得 $a_n \to 0$，同时使级数 $\sum a_{2k-1}$、$\sum a_{2k}$ 一个收敛，另一个发散，问题就解决了。例如，我们可作级数
> $$
> 1 - \frac{1}{2} + \frac{1}{3^2} - \frac{1}{4} + \frac{1}{5^2} - \cdots + \frac{1}{(2n-1)^2} - \frac{1}{2n} + \cdots
> $$

> [!note] 注
> 本例说明 Leibniz 级数的三个条件中减少了单调性条件，定理就不再成立。不难举例说明，三条件缺一不可。

> [!example] 例5.1.48
> 举出一个收敛级数 $\sum a_n$，使得级数 $\sum a_n^3$ 发散。（国外赛题）

> [!note] 分析
> 因为级数 $\sum a_n$ 收敛，故 $a_n \to 0$（当 $n \to \infty$ 时）。因此 $n$ 充分大时，有 $|a_n^3| \leq |a_n|$。可见级数 $\sum a_n$ 不能绝对收敛，只能是条件收敛。这表明级数 $\sum a_n$ 之所以收敛，不仅是因为 $a_n \to 0$ 的速度，而且是因为项际间的相互抵消。因此我们应构造这样一个变号收敛级数 $\sum a_n$，它本身项际间能相互抵消，但变为级数 $\sum a_n^3$ 时，项际间抵消不了，从而 $\sum a_n^3$ 发散。

> [!solution]- 解
> 令
> $$
> \sum a_n = 1 - 1 + \frac{1}{\sqrt[3]{2}} - \frac{1}{2\sqrt[3]{2}} - \frac{1}{2\sqrt[3]{2}} + \frac{1}{\sqrt[3]{3}} - \frac{1}{3\sqrt[3]{3}} - \frac{1}{3\sqrt[3]{3}} - \frac{1}{3\sqrt[3]{3}} + \cdots + \frac{1}{\sqrt[3]{k}} - \frac{1}{k\sqrt[3]{k}} - \cdots - \frac{1}{k\sqrt[3]{k}} + \cdots
> $$
> 因为 $\frac{1}{\sqrt[3]{k}} - \frac{1}{k\sqrt[3]{k}} - \cdots - \frac{1}{k\sqrt[3]{k}} = 0$（$k=1,2,\ldots$），可见 $S = \lim S_n = 0$，此级数收敛。但是
> $$
> \sum a_n^3 = 1 - 1 + \frac{1}{2} - \frac{1}{2^3 \cdot 2} - \frac{1}{2^3 \cdot 2} + \cdots + \frac{1}{k} - \frac{1}{k^3 \cdot k} - \cdots - \frac{1}{k^3 \cdot k} + \cdots
> $$
> 发散（因为部分和的子列
> $$
> S_{n_k} = 1 + \frac{1}{2} + \cdots + \frac{1}{k} - 1 - \frac{1}{2^3} - \cdots - \frac{1}{k^3} \to +\infty \quad (n_k = 2+3+\cdots+(k+1), k \geq 2)
> $$
> ）。
> 
> 本例说明由级数 $\sum a_n$ 收敛一般来说不能推出级数 $\sum a_n^3$ 收敛。

有些正面结论，改换问题的提法之后，可用构造反例的方法证明。

> [!example] 例5.1.49
> 证明：$\forall \{x_n\} \to 0$（$n \to \infty$），有 $\sum a_n x_n$ 收敛，则 $\sum a_n$ 绝对收敛。

> [!note] 分析
> 问题等价于：若 $\sum |a_n|$ 发散，则至少存在一个序列 $\{x_n\} \to 0$（$n \to \infty$），使得级数 $\sum a_n x_n$ 发散。如此，问题归结为从条件 $\sum |a_n| = +\infty$ 出发，构造所需的序列 $\{x_n\}$ 的问题。

> [!proof]- 证（反证法）
> 若 $\sum |a_n| = +\infty$，则 $\forall n \geq 1$，$\forall k \in \mathbb{N}$，$\exists m \in \mathbb{N}$（$m \geq n$），使得 $\sum_{i=n}^{m} |a_i| \geq k$。如此
> $$
> \text{对 } n=1, k=1, \exists m_1 \in \mathbb{N}, \text{使得 } \sum_{i=1}^{m_1} |a_i| \geq 1;
> $$
> $$
> \text{对 } n=m_1+1, k=2, \exists m_2 \geq m_1+1, \text{使得 } \sum_{i=m_1+1}^{m_2} |a_i| \geq 2;
> $$
> $$\cdots$$
> 由此我们得到 $0 = m_0 < m_1 < \cdots < m_n < \cdots$，使得 $\sum_{i=m_{n-1}+1}^{m_n} |a_i| \geq n$（$n=1,2,\ldots$）。
> 
> 取 $x_i = \mathrm{sgn}(a_i)/n$（当 $m_{n-1} < i \leq m_n$ 时，$m_0 = 0$），
> 
> 则不论 $N > 0$ 怎么大，只要 $n-1 > N$，恒有 $m_n > m_{n-1} > n-1 > N$，"片段"
> $$
> \sum_{i=m_{n-1}+1}^{m_n} a_i x_i = \sum_{i=m_{n-1}+1}^{m_n} \frac{|a_i|}{n} \geq 1.
> $$
> 此即说明 $\exists x_n \to 0$（当 $n \to \infty$ 时），使得 $\sum a_n x_n$ 发散，与已知条件矛盾。


### ☆五、数项级数与反常积分的关系


#### a. 关于收敛性

> [!theorem] 要点
> 设 $a=A_0<A_1<A_2<\cdots<A_n<\cdots$，$A_n\to\infty$（当 $n\to\infty$ 时）为任意给定的序列，$f(x)>0$，则 $\int_a^{+\infty} f(x)\,dx$ 与 $\sum_{n=1}^{\infty} \int_{A_{n-1}}^{A_n} f(x)\,dx$ 同时敛散，并且收敛时，两者大小相等。

> [!example] ☆例5.1.50
> 讨论 $\int_0^{+\infty} \frac{dx}{(1+x^\alpha)|\sin x|^\beta}$ 的收敛性，其中 $\alpha>\beta>1$。（复旦大学）

> [!proof]- 证
> （注意到 $|\sin x|$ 的周期为 $\pi$，我们取 $A_n=n\pi$。）
> 
> $$
> \int_0^{+\infty} \frac{dx}{(1+x^\alpha)|\sin x|^\beta} = \sum_{n=0}^{\infty} \int_{n\pi}^{(n+1)\pi} \frac{dx}{(1+x^\alpha)|\sin x|^\beta}
> $$
> 
> 令 $x=n\pi+t$，
> 
> $$
> = \sum_{n=0}^{\infty} \int_0^{\pi} \frac{dt}{(1+(n\pi+t)^\alpha) \sin^\beta t}
> $$
> 
> $$
> = \sum_{n=0}^{\infty} \left[\int_0^{\pi/2} \frac{dt}{(1+(n\pi+t)^\alpha) \sin^\beta t} + \int_{\pi/2}^{\pi} \frac{dt}{(1+(n\pi+t)^\alpha) \sin^\beta t}\right]
> $$
> 
> $$
> = \sum I_n + \sum J_n.
> $$
> 
> 我们来证右边两级数收敛。其中
> 
> $$
> I_n = \int_0^{\pi/2} \frac{dt}{(1+(n\pi+t)^\alpha) \sin^\beta t} \leq \int_0^{\pi/2} \frac{dt}{1+n^\alpha \cdot b^\beta t^\beta}.
> $$
> 
> 这是因为 $t\in[0,\pi/2]$ 时 $\sin t \geq \frac{2}{\pi} t$，所以
> 
> $$
> (n\pi+t)^\alpha \sin^\beta t \geq (n\pi)^\alpha \left(\frac{2}{\pi} t\right)^\beta = n^\alpha t^\beta b^\beta
> $$
> 
> （此处记 $b^\beta = \frac{\pi^\alpha}{\pi^\beta} 2^\beta$）。
> 
> 于是
> 
> $$
> I_n \leq \frac{1}{n^{\alpha/\beta} \cdot b} \int_0^{\pi/2} \frac{d(n^{\alpha/\beta}bt)}{1+(n^{\alpha/\beta}bt)^\beta} \leq \frac{1}{n^{\alpha/\beta}} \cdot \frac{1}{b} \int_0^{\infty} \frac{du}{1+u^\beta} \leq \frac{c}{n^{\alpha/\beta}}.
> $$
> 
> 因为 $1<\beta<\alpha$，$\sum \frac{c}{n^{\alpha/\beta}}$ 收敛，所以 $\sum I_n$ 收敛。
> 
> 对于 $J_n = \int_{\pi/2}^{\pi} \frac{dt}{(1+(n\pi+t)^\alpha) \sin^\beta t}$，作变换 $v=\pi-t$，类似推理可知 $\sum J_n$ 收敛。

> [!example] 例5.1.51
> 设 $f(x)$ 在 $[a,+\infty)$ 的内闭区间上 Riemann 可积（$a>0$）。试证：反常积分 $\int_a^{+\infty} f(x)\,dx$ 绝对可积的充分必要条件是：对于任意满足 $x_0=a$，$x_n\to+\infty$ 的单调递增数列 $\{x_n\}$，级数 $\sum_{n=0}^{\infty} \int_{x_n}^{x_{n+1}} f(x)\,dx$ 绝对收敛。（北京大学）

> [!proof]- 证
> **（必要性）** 设 $\int_a^{+\infty} f(x)\,dx$ 绝对可积，亦即 $\int_a^{+\infty} |f(x)|\,dx$ 存在。故 $\forall\{x_n\}$：若 $x_0=a$，$\{x_n\}\uparrow +\infty$，则 $\lim_{n\to+\infty} \sum_{k=0}^{n} \int_{x_k}^{x_{k+1}} |f(x)|\,dx$ 存在。因此 $\lim_{n\to+\infty} \sum_{k=0}^{n} \left|\int_{x_k}^{x_{k+1}} f(x)\,dx\right|$ 存在，亦即 $\sum_{n=0}^{\infty} \int_{x_n}^{x_{n+1}} f(x)\,dx$ 绝对收敛。
> 
> **（充分性）** 因为 $f(x)$ 在 $[a,+\infty)$ 的任一内闭区间上 Riemann 可积，知 $\forall A>a$：$f(x)$ 在 $[a,A]$ 上可积。函数在个别点上的值对可积性和积分值没有影响。因此，对 $[a,A]$ 上的任意一点 $x$，可找到一个充分小的开区间 $\Delta_x=(\alpha_x,\beta_x)$，使得在 $\Delta_x$ 中，$f(x)$（除个别点外）：①要么保持非负；②要么保持非正；③要么将 $[\alpha_x,\beta_x]$ $n$ 等分，每个小区间上既有点使 $f(x)>0$，又有点使 $f(x)<0$。
> 
> 明显：①、②两种情况下：$\int_{\Delta_x}|f(x)|\,dx = \left|\int_{\Delta_x} f(x)\,dx\right|$。
> 
> 情况③：将 $[\alpha_x,\beta_x]$ $n$ 等分，若在每个小区间上都取 $\xi_i$，使得 $f(\xi_i)>0$，则积分和大于 $0$，得积分值大于等于 $0$；若总取 $\xi_i$ 使得 $f(\xi_i)<0$，则积分值小于等于 $0$。所以，积分值 $\int_{\Delta_x} f(x)\,dx =0$。
> 
> 按此法对 $[a,A]$ 上每点 $x$ 作上述区间 $\Delta_x$，组成 $[a,A]$ 上的开覆盖，应用有限覆盖定理，从中找出有限子覆盖，然后将 $x_k$ 选在相邻两区间的公共部分。将 $A$ 作为新起点，照样逐步在 $[nA,(n+1)A]$（$n=1,2,\ldots$）内不断做下去，可得一串 $\{x_n\}\uparrow$ 趋于 $+\infty$，使得
> 
> $$
> \sum_{k=0}^{n} \left|\int_{x_k}^{x_{k+1}} f(x)\,dx\right| = \sum_{k=0}^{n} \int_{x_k}^{x_{k+1}} |f(x)|\,dx.
> $$
> 
> 故知：
> 
> $$
> \sum_{n=0}^{\infty} \int_{x_n}^{x_{n+1}} f(x)\,dx \text{ 绝对收敛} \Rightarrow \sum_{n=0}^{\infty} \int_{x_n}^{x_{n+1}} |f(x)|\,dx \text{ 收敛} \Rightarrow \int_a^{+\infty} f(x)\,dx \text{ 绝对可积}.
> $$
> 
> 证毕。

> [!exercise] 练习
> 证明 $\int_0^1 \left|x \sin\frac{1}{x^2} - \frac{1}{x}\cos\frac{1}{x^2}\right| dx$ 发散。

> [!proof]- 证
> $$
> \left|x \sin \frac{1}{x^2} - \frac{1}{x}\cos \frac{1}{x^2}\right| \geq \frac{1}{x}\left|\cos \frac{1}{x^2}\right| - x\left|\sin \frac{1}{x^2}\right| \geq \frac{1}{x}\left|\cos \frac{1}{x^2}\right| - x.
> $$
> 
> 右端第二项的积分 $\int_0^1 x\,dx = \frac{1}{2}$，右端第一项的积分
> 
> $$
> \int_0^1 \frac{1}{x}\left|\cos \frac{1}{x^2}\right| dx \geq \sum_{k=1}^\infty \int_{1/\sqrt{(2k+1/3)\pi}}^{1/\sqrt{(2k-1/3)\pi}} \frac{1}{x}\left|\cos \frac{1}{x^2}\right| dx
> $$
> 
> （注意在右端积分区间上 $|\cos \frac{1}{x^2}| > \frac{1}{2}$）
> 
> $$
> \geq \frac{1}{4} \sum_{k=1}^\infty \ln \frac{2k+1/3}{2k-1/3} = \frac{1}{4} \sum_{k=1}^\infty \ln\left(1 + \frac{2}{6k-1}\right) = +\infty,
> $$
> 
> 这是因为 $k\to\infty$ 时 $\ln\left(1 + \frac{2}{6k-1}\right) \sim \frac{2}{6k-1}$。故所证积分发散。

上述原理不仅可用于判断收敛，还能用于和值的计算与估计。


#### b. "和"值的计算与估计

> [!example] 例 5.1.52
> 求 $\int_E e^{-x/2} \frac{|\sin x - \cos x|}{\sqrt{\sin x}} \,dx$，其中 $E$ 为区间 $(0,+\infty)$ 中使被积表达式有意义的一切 $x$ 值所成之集合.

> [!solution]- 解
> $E = \{x>0 \mid \sin x>0\} = \{x>0 \mid 2k\pi < x < (2k+1)\pi,\ k\in\mathbb N\}$.
> 
> $$
> \int_E e^{-x/2} \frac{|\sin x - \cos x|}{\sqrt{\sin x}} \,dx
> = \sum_{k=0}^\infty \int_{2k\pi}^{(2k+1)\pi} e^{-x/2} \frac{|\sin x - \cos x|}{\sqrt{\sin x}} \,dx
> $$
> 
> （令 $t = x - 2k\pi$）
> 
> $$
> = \sum_{k=0}^\infty \int_0^\pi e^{-t/2 - k\pi} \frac{|\sin t - \cos t|}{\sqrt{\sin t}} \,dt.
> $$
> 
> （这里的积分以 $2k\pi$，$(2k+1)\pi$ 为奇点，但在奇点附近仅是 $1/2$ 阶的无穷大，故此等积分皆收敛.）因
> 
> $$
> \sin t - \cos t = \sqrt{2}\sin\left(t - \frac{\pi}{4}\right)\ 
> \begin{cases}
> >0, & t\in\left(\frac{\pi}{4},\pi\right),\\
> <0, & t\in\left[0,\frac{\pi}{4}\right).
> \end{cases}
> $$
> 
> 所以只要把 $[0,\pi]$ 上的积分拆成两段，绝对值符号便可换掉. 而
> 
> $$
> \int e^{-t/2} \frac{\sin t - \cos t}{\sqrt{\sin t}} \,dt = -2e^{-t/2}\sqrt{\sin t} + C,
> $$
> 
> 故
> 
> $$
> \int_E e^{-x/2} \frac{|\sin x - \cos x|}{\sqrt{\sin x}} \,dx
> = \sum_{k=0}^\infty e^{-k\pi} \left(2\cdot\sqrt[4]{8}\,e^{-\pi/8}\right)
> = \frac{2\sqrt[4]{8}\,e^{-\pi/8}}{1-e^{-\pi}}.
> $$

> [!example] 例 5.1.53
> 若 $f(x)>0$，$f(x)\downarrow$，$\sum_{n=1}^\infty f(n)$ 收敛，试证对其余和 $R_n = \sum_{k=n+1}^\infty f(k)$ 有估计式：
> 
> $$
> \int_{n+1}^{+\infty} f(x)\,dx \leq R_n \leq f(n+1) + \int_{n+1}^{+\infty} f(x)\,dx. \tag{1}
> $$

> [!proof]- 证
> 因为 $f(x)\downarrow$，所以
> 
> $$
> \sum_{k=1}^\infty f(n+k) \geq \sum_{k=1}^\infty \int_{n+k}^{n+k+1} f(x)\,dx \geq \sum_{k=1}^\infty f(n+k+1),
> $$
> 
> 即
> 
> $$
> R_n \geq \int_{n+1}^{+\infty} f(x)\,dx \geq R_n - f(n+1).
> $$
> 
> 移项即得欲证的不等式 (1).

> [!remark] 注
> 若 $f(x)$ 严格递减，则式 (1) 中等号可以去掉（成严格的不等式）.

> [!example] 例 5.1.54
> 试证：
> 
> $$
> \frac{1}{n\ln n} - \sum_{k=n}^\infty \frac{1}{k^2 \ln k} \sim \frac{1}{n(\ln n)^2} \quad (\text{当 } n\to\infty \text{ 时}). \tag{1}
> $$
> 
> （浙江大学）

> [!proof]- 证
> （考虑对应的反常积分.）因为 $f(x)=\frac{1}{x^2\ln x}>0$（$x>1$），且 $f(x)\downarrow$，应用上题结果，
> 
> $$
> \int_n^{+\infty} \frac{dx}{x^2\ln x} \leq \sum_{k=n}^\infty \frac{1}{k^2\ln k} \leq \frac{1}{n^2\ln n} + \int_n^{+\infty} \frac{dx}{x^2\ln x}. \tag{2}
> $$
> 
> 反复利用分部积分法，
> 
> $$
> \begin{aligned}
> \int_n^{+\infty} \frac{dx}{x^2\ln x}
> &= \frac{1}{n\ln n} - \int_n^{+\infty} \frac{dx}{x^2(\ln x)^2} \\
> &= \frac{1}{n\ln n} - \frac{1}{n(\ln n)^2} + 2\int_n^{+\infty} \frac{dx}{x^2(\ln x)^3}. \tag{3}
> \end{aligned}
> $$
> 
> 对于右端积分有估计：$0 \leq \int_n^{+\infty} \frac{dx}{x^2(\ln x)^3} \leq \frac{1}{(\ln n)^3} \int_n^{+\infty} \frac{dx}{x^2} = \frac{1}{n(\ln n)^3}$. 故式 (3) 成为
> 
> $$
> \int_n^{+\infty} \frac{dx}{x^2\ln x}
> = \frac{1}{n\ln n} - \frac{1}{n(\ln n)^2} + \frac{2\theta_n}{n(\ln n)^3} \quad (0<\theta_n<1).
> $$
> 
> 代入式 (2)，便得式 (1).


#### c. 反常积分作为级数的极限

> [!example] ☆ 例 5.1.55
> 设单调函数 $f(x)$ 在 $x \geq 0$ 有定义，并且反常积分 $\int_0^{+\infty} f(x)\,dx$ 存在，试证明 $\lim_{h \to 0+} h[f(h)+f(2h)+\cdots] = \int_0^{+\infty} f(x)\,dx$。（华中师范大学，郑州大学）

> [!proof]- 证
> 例如 $f(x) \nearrow$，$\forall h > 0$，有
> $$
> \int_0^{+\infty} f(x)\,dx = \sum_{k=1}^{\infty} \int_{(k-1)h}^{kh} f(x)\,dx \leq \sum_{k=1}^{\infty} h f(kh) \leq \sum_{k=1}^{\infty} \int_{kh}^{(k+1)h} f(x)\,dx = \int_h^{+\infty} f(x)\,dx.
> $$
> 
> 令 $h \to 0+$ 取极限，得 $\lim_{h \to 0+} h\sum_{k=1}^{\infty} f(kh) = \lim_{h \to 0+} \sum_{k=1}^{\infty} h f(kh) = \int_0^{+\infty} f(x)\,dx$.
> 
> 若 $f(x) \downarrow$，类似可证（或考虑 $-f(x)$）.

> [!example] * 例 5.1.56
> 计算 $\lim_{t \to 1-} (1-t)\left( \frac{t}{1+t} + \frac{t^2}{1+t^2} + \cdots + \frac{t^n}{1+t^n} + \cdots \right)$。（国外赛题）

> [!solution]- 解
> （关键要把级数的通项写成 $f(nh)$ 的形式.）
> 
> 原式 $= \lim_{t \to 1-}(1-t)\sum_{n=1}^{\infty} \frac{t^n}{1+t^n}$
> 
> $= \lim_{t \to 1-}(1-e^{\ln t})\sum_{n=1}^{\infty} \frac{e^{n \ln t}}{1+e^{n \ln t}}$
> 
> $=$（令 $h = -\ln t$）$\lim_{h \to 0+} \frac{1-e^{-h}}{h} \cdot h\sum_{n=1}^{\infty} \frac{e^{-nh}}{1+e^{-nh}}$
> 
> $= \lim_{h \to 0+} \frac{1-e^{-h}}{h} \cdot \lim_{h \to 0+} h\sum_{n=1}^{\infty} \frac{e^{-nh}}{1+e^{-nh}}$
> 
> $= 1 \cdot \int_0^{+\infty} \frac{e^{-x}}{1+e^{-x}}\,dx = \ln 2$.
> 
> 这里 $f(x) = \frac{e^{-x}}{1+e^{-x}}$ 单调，符合上例的条件.

> [!example] * 例 5.1.57
> 假设 $a_k > 0$, $b_n > 0$（$n,k \in \mathbb{N}$），$\lim_{n \to \infty} a_n = a$，$\sum_{n=1}^{\infty} b_n = 1$。证明：
> $$
> \lim_{n \to \infty} \sum_{k=1}^{n} b_{n-k+1}a_k = a. \quad (1)
> $$

> [!proof]- 证
> 因 $1 = \sum_{n=1}^{\infty} b_n$，故 $a = \lim_{n \to \infty}\sum_{k=1}^{n} b_k a = \lim_{n \to \infty}\sum_{k=1}^{n} b_{n-k+1}a$。于是，要证式 $(1)$ 即要证明：
> $$
> \lim_{n \to \infty} \sum_{k=1}^{n} b_{n-k+1}(a_k-a) = 0,
> $$
> 即 $\forall \varepsilon > 0$，$\exists N > 0$，当 $n > N$ 时，有
> $$
> \left|\sum_{k=1}^{n} b_{n-k+1}(a_k-a)\right| < \varepsilon. \quad (2)
> $$
> 
> （证明式 $(2)$.）1° $\{|a_k-a|\}$ 收敛，必有上界 $M$：$|a_k-a| \leq M$（$\forall k \in \mathbb{N}$）.
> 
> 因为 $\lim_{n \to \infty}\sum_{k=1}^{n} b_{n-k+1} = \lim_{n \to \infty}\sum_{k=1}^{n} b_k = 1$，（根据 Cauchy 准则）$\forall \varepsilon > 0$，$\exists N_1 > 0$，当 $n > m \geq N_1$ 时，有
> $$
> 0 < \sum_{k=m+1}^{n} b_k = \sum_{k=1}^{n-m} b_{n-k+1} < \frac{\varepsilon}{2M}. \quad (3)
> $$
> 
> 2° 因 $\lim_{k \to \infty} a_k = a$，故 $\varepsilon > 0$，$\exists N_2 > 0$，$k \geq N_2$ 时，有 $|a_k-a| < \varepsilon/2$。令 $N = \max\{N_1, N_2\}$，则当 $n > m > N$ 时，有
> $$
> \begin{aligned}
> \left|\sum_{k=1}^{n} b_{n-k+1}(a_k-a)\right| &\leq \sum_{k=1}^{n-m} b_{n-k+1}|a_k-a| + \sum_{k=n-m+1}^{n} b_{n-k+1}|a_k-a| \\
> &\leq M\sum_{k=1}^{n-m} b_{n-k+1} + \frac{\varepsilon}{2}\sum_{k=n-m+1}^{n} b_{n-k+1} \\
> &< M \cdot \frac{\varepsilon}{2M} + \frac{\varepsilon}{2} = \varepsilon.
> \end{aligned}
> $$
> 
> 表明式 $(2)$ 成立，式 $(1)$ 获证.

> [!exercise] * 练习
> 证明极限 $\lim_{n \to \infty} \sum_{k=1}^{n-2} \frac{1}{2^{n-1-k}} \left[\ln\left(1 + \frac{1}{2^{k+1}-1}\right)\right] = 0$.
> 
> （此极限作为已知条件，被习题 4.1.6 引用.）

> [!proof]- 证 I
> 直接引用例 5.1.57.

> [!proof]- 证 II
> 因 $\sum_{k=1}^{\infty} \frac{1}{2^k} = 1$ 收敛，（根据 Cauchy 准则）$\forall \varepsilon > 0$，$\exists N_1 > 0$ 使得当 $n-2 > m > N_1$ 时，有
> $$
> \sum_{k=m}^{n-2} \frac{1}{2^k} < \frac{\varepsilon}{2 \ln 2}. \quad (1)
> $$
> 
> 另由 $\lim_{k \to \infty} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) = 0$ 知：对上述 $\varepsilon > 0$，$\exists N_2 > 0$，当 $k > N_2$ 时，有
> $$
> \ln\left(1 + \frac{1}{2^{k+1}-1}\right) \leq \frac{\varepsilon}{2}. \quad (2)
> $$
> 
> 令 $N = \max\{N_1, N_2\}$，当 $n-2 > m > N$ 时，
> $$
> \sum_{k=1}^{n-2} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) = \sum_{k=1}^{n-m-1} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) + \sum_{k=n-m}^{n-2} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right)
> $$
> 记 $= I_1 + I_2$, $\quad (3)$
> 
> 其中
> $$
> \begin{aligned}
> I_1 &= \sum_{k=1}^{n-m-1} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) \\
> &\leq \ln 2 \sum_{k=1}^{n-m-1} \frac{1}{2^{n-1-k}} = \ln 2 \sum_{k=m}^{n-2} \frac{1}{2^k} \leq \ln 2 \cdot \frac{\varepsilon}{2 \ln 2} = \frac{\varepsilon}{2},
> \end{aligned}
> $$
> 
> $$
> \begin{aligned}
> I_2 &= \sum_{k=n-m}^{n-2} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) \\
> &\leq \frac{\varepsilon}{2}\sum_{k=n-m}^{n-2} \frac{1}{2^{n-1-k}} < \frac{\varepsilon}{2}\sum_{k=1}^{\infty} \frac{1}{2^k} = \frac{\varepsilon}{2}.
> \end{aligned}
> $$
> 
> 代回式 $(3)$，得 $\sum_{k=1}^{n-2} \frac{1}{2^{n-1-k}} \ln\left(1 + \frac{1}{2^{k+1}-1}\right) = I_1 + I_2 < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$。（证毕.）


### 单元练习 5.1

**☆5.1.1** 设 $k,i,j$ 都是自然数，且 $k=i+j$，试求级数 $\sum_{n=1}^{\infty} \frac{1}{(kn-i)(kn+j)}$ 的和.

> [!hint]- 提示
> 通项 $= \frac{1}{k}\left(\frac{1}{kn-i} - \frac{1}{kn+j}\right)$（连锁消去法）.

**☆5.1.2** 设 $\{a_n\}$ 为等差数列，$a_{n+1}-a_n=d>0$（$n=1,2,\cdots$），$m$ 为一正整数，计算

$$S = \sum_{n=1}^{\infty} \frac{1}{a_n \cdot a_{n+1} \cdot \ldots \cdot a_{n+m}}.$$

（$\frac{1}{md \cdot a_1 \cdot a_2 \cdot \ldots \cdot a_m}$）

> [!hint]- 提示
> 类似上题，先对通项使用拆分法，然后，再用连锁消去法. 通项 $= \frac{1}{md}\left(\frac{a_{n+m}-a_n}{a_n \cdot a_{n+1} \cdot \ldots \cdot a_{n+m}}\right)$.

> [!hint]- 再提示
> $$
> \begin{aligned}
> \sum_{n=1}^{\infty} \frac{1}{a_n \cdot a_{n+1} \cdot \ldots \cdot a_{n+m}}
> &= \frac{1}{md}\sum_{n=1}^{\infty} \frac{a_{n+m}-a_n}{a_n \cdot a_{n+1} \cdot \ldots \cdot a_{n+m}} \\
> &= \lim_{N\to\infty} \frac{1}{md}\sum_{n=1}^{N} \left(\frac{1}{a_n \cdot a_{n+1} \cdot \ldots \cdot a_{n+m-1}} - \frac{1}{a_{n+1} \cdot \ldots \cdot a_{n+m}}\right) \\
> &= \lim_{N\to\infty} \frac{1}{md}\left(\frac{1}{a_1 \cdot a_2 \cdot \ldots \cdot a_m} - \frac{1}{a_{N+1} \cdot \ldots \cdot a_{N+m}}\right) \\
> &= \frac{1}{md} \cdot \frac{1}{a_1 \cdot a_2 \cdot \ldots \cdot a_m}.
> \end{aligned}
> $$

**☆5.1.3** 证明级数 $1 + \frac{1}{\sqrt{3}} - \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{5}} + \frac{1}{\sqrt{7}} - \frac{1}{\sqrt{4}} + \frac{1}{\sqrt{9}} + \frac{1}{\sqrt{11}} - \frac{1}{\sqrt{6}} + \cdots$ 发散到 $+\infty$.（吉林大学）

> [!hint]- 提示
> $S_{3n} = \sum_{k=1}^{n} \left(\frac{1}{\sqrt{4k-3}} + \frac{1}{\sqrt{4k-1}} - \frac{1}{\sqrt{2k}}\right) \to +\infty$（当 $n\to\infty$ 时）.

**☆5.1.4** 证明：当 $p\ge 1$ 时，$\sum_{n=1}^{\infty} \frac{1}{(n+1)\sqrt[p]{n}} < p$.（国外赛题）

> [!hint]- 提示
> 通项 $= n^{1-1/p}\left[\left(\frac{1}{\sqrt[p]{n}}\right)^p - \left(\frac{1}{\sqrt[p]{n+1}}\right)^p\right]$
> $= \exists\theta\in(0,1)\; n^{1-1/p} \cdot p\left(\frac{1}{\sqrt[p]{n+\theta}}\right)^{p-1}\left[n^{-1/p}-(n+1)^{-1/p}\right]$
> $\le p\left[n^{-1/p}-(n+1)^{-1/p}\right]$.

> [!hint]- 再提示
> （连锁消去法）部分和 $S_n \le p\left[1 - \frac{1}{(n+1)^{1/p}}\right] \nearrow p$.

**※5.1.5** 证明：若删去调和级数中所有分母含有数字 $9$ 的项，则新级数收敛，且和小于 $80$.

> [!hint]- 提示
> 估计分母 $n\in[10^{m-1}-1,10^m-1]$ 各项的和（$m=1,2,\cdots$）.

**☆5.1.6** 证明下列级数收敛：

1）$\sum_{n=1}^{\infty} \left[\frac{1}{n} - \ln\left(1+\frac{1}{n}\right)\right]$；

2）$\sum_{n=1}^{\infty} \left[e - \left(1 + \frac{1}{1!} + \frac{1}{2!} + \cdots + \frac{1}{n!}\right)\right]$.

（东北师范大学）

> [!hint]- 提示
> 1）通项 $a_n = -\frac{1}{2n^2} + o\left(\frac{1}{n^2}\right) \sim -\frac{1}{2n^2}$, $a_n>0$.
>
> 2）通项 $a_n$: $0<a_n = \frac{e^{\theta}}{(n+1)!} < \frac{1}{n^2}$（$0<\theta<1$）.

**\*5.1.7** 设 $a_n = n^{\alpha} - 1$，讨论级数 $\sum_{n=1}^{\infty} a_n$ 的敛散性.

> [!hint]- 提示
> 当 $\alpha<-1$ 时，$a_n \sim n^{\alpha} \ln n$.

> [!hint]- 再提示
> 因 $x\to 0$ 时 $e^x-1 \sim x$，故 $n^{\alpha}-1 = e^{\alpha \ln n}-1 \sim n^{\alpha} \ln n$（$\alpha<-1$）. 记 $\alpha=-(1+\theta)$（$\theta>0$），则 $n$ 充分大时，$0\le n^{\alpha} \ln n = \left(\frac{1}{n^{1+\theta/2}}\right) \cdot \left(\frac{\ln n}{n^{\theta/2}}\right) \le \frac{1}{n^{1+\theta/2}}$. 而 $\sum_{n=1}^{\infty} \frac{1}{n^{1+\theta/2}}$ 收敛，故 $\sum a_n$ 收敛. $\alpha\ge -1$ 时级数明显发散.

**☆5.1.8** 设正项级数 $\sum_{n=1}^{\infty} a_n$ 收敛，证明：级数 $\sum_{n=1}^{\infty} \frac{a_n}{\sqrt{r_{n-1}}+\sqrt{r_n}}$ 仍收敛，其中 $r_n = \sum_{k=n+1}^{\infty} a_k$.（云南大学）

> [!hint]- 提示
> $\frac{a_k}{\sqrt{r_{k-1}}+\sqrt{r_k}} = \sqrt{r_{k-1}} - \sqrt{r_k}$，连锁消去法.

**5.1.9** 证明：若有 $\alpha>0$，使当 $n\ge n_0$ 时，$\frac{\ln(1/a_n)}{\ln n} \ge 1+\alpha$（$a_n>0$），则级数 $\sum_{n=1}^{\infty} a_n$（$a_n>0$）收敛；若 $n\ge n_0$ 时 $\frac{\ln(1/a_n)}{\ln n} \le 1$，则级数发散（对数判别法）.

> [!hint]- 提示
> 1）$\frac{\ln(1/a_n)}{\ln n} \ge 1+\alpha$（$a_n>0$）$\Leftrightarrow 0<a_n\le \frac{1}{n^{1+\alpha}}$（其中 $\alpha>0$）.
>
> 2）$\frac{\ln(1/a_n)}{\ln n} \le 1$（$a_n>0$）$\Leftrightarrow a_n\ge \frac{1}{n}$.

**5.1.10** $\{x_n\}$ 是正项单调递增并且有界的序列，证明级数 $\sum_{n=1}^{\infty} \left(1 - \frac{x_n}{x_{n+1}}\right)$ 收敛.（国外赛题）

> [!hint]- 提示
> 部分和 $S_n \le \frac{1}{x_1}\sum_{k=1}^{n} (x_{k+1}-x_k)$.

**※5.1.11**（Lobachevskii 判别法）证明：若 $a_n>0$，$a_n\downarrow 0$，则 $\sum_{n=1}^{\infty}a_n$ 与 $\sum_{m=1}^{\infty}p_m 2^{-m}$（$p_m=\max\{n\mid a_n\ge 2^{-m}\}$）同时敛散。

> [!hint]- 提示
> 注意：$p_m=\max\{n\mid a_n\ge 2^{-m}\}$，$\{a_n\}$ 单调下降，表明 $\{a_1,a_2,\cdots,a_{p_m}\}$ 的每项都大于等于 $2^{-m}$；同时 $\{a_{p_m+1},a_{p_m+2},\cdots\}$ 的每项都小于 $2^{-m}$. 由此，只需证明两点：
>
> ① $\sum_{k=1}^{\infty}a_k$ 与 $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 同时敛散；② $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 与 $\sum_{m=1}^{\infty}p_m 2^{-m}$ 同时敛散。

> [!proof]- 证明
> 注意级数的敛散性与前面有限项无关。正项级数的敛散性取决于部分和是否有界，因此正项级数"部分和序列"与其"子列"同时敛散。
>
> **1°**（证①）
>
> i）（证明：$\sum_{k=1}^{\infty}a_k$ 收敛 $\Rightarrow$ $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛。）根据 $p_m$ 的定义，知
>
> $$\sum_{k=p_{m-1}+1}^{p_m} a_k \ge \sum_{k=p_{m-1}+1}^{p_m}2^{-m}=(p_m-p_{m-1})2^{-m}\quad(m=2,3,\cdots).$$
>
> 由此得
>
> $$\sum_{k=p_1+1}^{p_N}a_k=\sum_{m=2}^N\sum_{k=p_{m-1}+1}^{p_m}a_k\ge\sum_{m=2}^N(p_m-p_{m-1})2^{-m}\ge 0.\tag{1}$$
>
> 又 $\sum_{k=1}^{\infty}a_k$ 收敛，而 $\left\{\sum_{k=p_1+1}^{p_N}a_k\right\}_N$ 是 $\{S_n\}=\{\sum_{k=1}^n a_k\}$ 的子列，故 $\left\{\sum_{k=p_1+1}^{p_N}a_k\right\}_N$ 收敛，由式（1）可知 $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛。
>
> ii）（证明：$\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛 $\Rightarrow$ $\sum_{k=1}^{\infty}a_k$ 收敛。）由
>
> $$\sum_{k=p_{m-1}+1}^{p_m}a_k < \sum_{k=p_{m-1}+1}^{p_m}2^{-m+1}=(p_m-p_{m-1})2^{-m+1},$$
>
> 得
>
> $$\sum_{k=p_1+1}^{p_N}a_k=\sum_{m=2}^N\sum_{k=p_{m-1}+1}^{p_m}a_k < \sum_{m=2}^N(p_m-p_{m-1})2^{-m+1}.$$
>
> 因此，由 $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛可知 $\left\{\sum_{k=p_1+1}^{p_N}a_k\right\}_N$ 收敛，从而 $\sum_{k=1}^{\infty}a_k$ 收敛。
>
> **2°**（证明②：$\sum_{m=1}^{\infty}p_m 2^{-m}$ 收敛 $\Leftrightarrow$ $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛。）
>
> （$\Rightarrow$）由于 $\sum_{m=2}^N(p_m-p_{m-1})2^{-m+1}=2\sum_{m=2}^N p_m 2^{-m}-\sum_{m=2}^N p_{m-1}2^{-(m-1)}$，自明。
>
> （$\Leftarrow$）若 $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛，则由下式可知 $\sum_{m=2}^{\infty}p_m 2^{-m}$ 也收敛：
>
> $$
> \begin{aligned}
> \sum_{m=2}^N p_m 2^{-m}&=\sum_{m=2}^N p_m(2-1)2^{-m}=\left(\sum_{m=2}^N p_m 2^{-m+1}\right)-\left(\sum_{m=2}^N p_m 2^{-m}\right) \\
> &=(p_2 2^{-1}+p_3 2^{-2}+\cdots+p_N 2^{-N+1})-(p_2 2^{-2}+p_3 2^{-3}+\cdots+p_{N-1}2^{-N+1}+p_N 2^{-N}) \\
> &=p_2 2^{-1}+\sum_{m=3}^N(p_m-p_{m-1})2^{-m+1}+p_N 2^{-N}.\tag{2}
> \end{aligned}
> $$
>
> 注意
>
> $$
> \begin{aligned}
> p_N 2^{-N}&\le p_N 2^{-(N-1)}\le(p_N-p_{N-1})2^{-(N-1)}+p_{N-1}2^{-(N-1)} \\
> &\le(p_N-p_{N-1})2^{-(N-1)}+(p_{N-1}-p_{N-2})2^{-(N-2)}+p_{N-2}2^{-(N-2)} \\
> &\le\cdots\le\sum_{m=2}^N(p_m-p_{m-1})2^{-(m-1)}+p_1 2^{-1}.
> \end{aligned}
> $$
>
> 故从式（2）可看出：若 $\sum_{m=2}^{\infty}(p_m-p_{m-1})2^{-m+1}$ 收敛，则 $\sum_{m=2}^{\infty}p_m 2^{-m}$ 收敛。证毕。

**5.1.12** 设 $0<x_1<\pi$，$x_n=\sin x_{n-1}$（$n=2,3,\cdots$），证明：级数 $\sum_{n=1}^{\infty}x_n^p$ 当 $p>2$ 时收敛，当 $p\le 2$ 时发散。（吉林大学）

> [!hint]- 提示
> 参看例1.5.19，$x_n^2\sim\frac{3}{n}$.

**\*5.1.13** 证明级数 $1+\frac12-\frac13+\frac14+\frac15-\frac16+\cdots$ 发散。

> [!hint]- 提示
> 可用 Cauchy 准则：$|S_{6n}-S_{3n}|\ge\frac13\left(\frac1{n+1}+\frac1{n+2}+\cdots+\frac1{2n}\right)\ge\frac16$.

**☆5.1.14** 设 $a_n\neq 0$（$n=1,2,\cdots$）且 $\lim_{n\to\infty}a_n=a$（$a\neq 0$），求证：级数 $\sum_{n=1}^{\infty}|a_{n+1}-a_n|$ 与 $\sum_{n=1}^{\infty}\left|\frac1{a_{n+1}}-\frac1{a_n}\right|$ 同时收敛或同时发散。（上海交通大学）

> [!hint]- 提示
> $\exists m,M:0<m<M$，使得 $m\le|a_n|\le M$，
>
> $$\frac1{M^2}|a_{n+1}-a_n|\le\left|\frac1{a_{n+1}}-\frac1{a_n}\right|\le\frac1{m^2}|a_{n+1}-a_n|.$$

**5.1.15** 设 $\varphi(x)$ 是 $(-\infty,+\infty)$ 上的连续周期函数，周期为 $1$，且 $\int_0^1 \varphi(x)dx=0$，$f(x)$ 在 $[0,1]$ 上可微，且有连续的一阶导数，$a_n=\int_0^1 f(x)\varphi(nx)dx$，$n=1,2,\cdots$. 证明：级数 $\sum_{n=1}^{\infty}a_n^2$ 收敛。（华东师范大学）

> [!hint]- 提示
> 可令 $\Phi(x)=\int_0^x \varphi(t)dt$，用分部积分，$a_n=-\frac1n\int_0^1 \Phi(nx)f'(x)dx$，从而 $|a_n^2|\le\frac{M}{n^2}$（$M$ 为常数）。

**5.1.16** 设 $f(x)$ 于 $[1,+\infty)$ 上可导，$f'(x)$ 单调递增，且 $f(x)\to A$（$x\to+\infty$），证明 $\sum_{n=2}^{\infty}f'(n)$ 收敛。

> [!hint]- 提示
> 由 $f(n)-f(n-1)\le f'(n)\le f(n+1)-f(n)$，可知 $f'(n)\nearrow 0$，$f'(n)\le 0$，$\sum -f'(n)$ 以 $\sum[f(n-1)-f(n)]$ 为优级数。

**5.1.17** 设 $a_n>0$（$n=1,2,\cdots$）且 $\sum_{n=1}^{\infty}a_n$ 收敛，$r_n=\sum_{k=n}^{\infty}a_k$. 试证：

1）$\sum_{n=1}^{\infty}\frac{a_n}{r_n}$ 发散；

2）$\sum_{n=1}^{\infty}\frac{a_n}{\sqrt{r_n}}$ 收敛。

> [!hint]- 提示
> 1）可用 Cauchy 准则，$\sum_{k=n+1}^{n+p}\frac{a_k}{r_k}\ge\frac1{r_{n+1}}\sum_{k=n+1}^{n+p}a_k\to 1$（$p\to\infty$），故 $\exists p\in\mathbb{N}$ 使得 $\sum_{k=n+1}^{n+p}\frac{a_k}{r_k}\ge\frac12$.
>
> 2）可证 $\sum\frac{a_n}{\sqrt{r_n}}$ 以 $2\sum(\sqrt{r_{n-1}}-\sqrt{r_n})$ 为优级数。

> [!hint]- 再提示
> 2）$\sqrt{r_{n-1}}-\sqrt{r_n}=\frac1{2\sqrt{\xi_{n-1}}}(r_{n-1}-r_n)=\frac{a_n}{2\sqrt{\xi_{n-1}}}\ge\frac{a_n}{2\sqrt{r_n}}$（$r_n<\xi_{n-1}<r_{n-1}$）. 又因 $r_n\downarrow 0$，$\sum_{k=1}^n(\sqrt{r_{k-1}}-\sqrt{r_k})=\sqrt{r_0}-\sqrt{r_n}\nearrow\sqrt{r_0}$，故 $\sum\frac{a_n}{\sqrt{r_n}}$ 收敛。

**5.1.18** 设 $f(x)$ 是在 $(-\infty,+\infty)$ 内的可微函数，且满足：
1）$f(x)>0$；
2）$|f'(x)|\le m|f(x)|$，其中 $0<m<1$.

任取 $a_0$，定义 $a_n=\ln f(a_{n-1})$，$n=1,2,\cdots$，证明：级数 $\sum_{n=1}^{\infty}(a_n-a_{n-1})$ 绝对收敛。（西安电子科技大学）

> [!hint]- 提示
> $$
> \begin{aligned}
> |a_n-a_{n-1}|&=|\ln f(a_{n-1})-\ln f(a_{n-2})|=\left|\frac{f'(\xi_n)}{f(\xi_n)}(a_{n-1}-a_{n-2})\right|,\\
> \frac{|a_n-a_{n-1}|}{|a_{n-1}-a_{n-2}|}&\le\left|\frac{f'(\xi_n)}{f(\xi_n)}\right|\le m<1,
> \end{aligned}
> $$
>
> 故 $\sum|a_n-a_{n-1}|$ 收敛。

**\*5.1.19** 设 $\sum_{n=1}^{\infty}a_n$ 收敛，$0<p_n\nearrow+\infty$，试证：$\lim_{n\to\infty}\frac{p_1a_1+p_2a_2+\cdots+p_na_n}{p_n}=0$.

> [!hint]- 提示
> 记 $S_n=\sum_{k=1}^n a_k$，$a_n=S_n-S_{n-1}$，代入变形可知
>
> $$\text{原式}=\lim_{n\to\infty}\frac{S_1(p_1-p_2)+S_2(p_2-p_3)+\cdots+S_{n-1}(p_{n-1}-p_n)+S_np_n}{p_n}$$
>
> Stolz 公式
> $$=\lim_{n\to\infty}\frac{S_{n-1}(p_{n-1}-p_n)}{p_n-p_{n-1}}+S=S-S=0.$$

**※5.1.20** 设 $a_n>0$，$\sum_{n=1}^{\infty}a_n$ 收敛，$na_n$ 单调，证明：$\lim_{n\to\infty}na_n \ln n=0$.

> [!hint]- 提示
> 因 $a_n>0$，$\sum_{n=1}^{\infty}a_n$ 收敛，$na_n$ 单调，必为单减（否则：$a_n\ge\frac{a_1}{n}>0$，$\sum_{n=1}^{\infty}a_n$ 发散）。

> [!hint]- 再提示
> （本习题是例4.5.27的离散形式，证法类似。）设 $n$ 是任一正整数，$[\sqrt{n}]$ 表示"$\sqrt{n}$ 的整数部分". 因 $\{na_n\}\downarrow$，有
>
> $$
> \begin{aligned}
> \sum_{k=[\sqrt{n}]}^n a_k&=\sum_{k=[\sqrt{n}]}^n ka_k\cdot\frac1k \ge na_n\sum_{k=[\sqrt{n}]}^n \frac1k \\
> &\ge na_n\sum_{k=[\sqrt{n}]}^{n-1}\int_k^{k+1}\frac1x dx \quad\text{（因为 }\int_k^{k+1}\frac1x dx=\ln(k+1)-\ln k=\ln\left(1+\frac1k\right)\le\frac1k\text{）}\\
> &\ge na_n\int_{[\sqrt{n}]}^n\frac{dx}{x}=na_n \ln\frac{n}{[\sqrt{n}]}\ge na_n \ln\sqrt{n}=\frac12 na_n \ln n.
> \end{aligned}
> $$
>
> 因 $\sum_{n=1}^{\infty}a_n$ 收敛，根据 Cauchy 准则，$\forall\varepsilon>0$，$\exists N\in\mathbb{N}$，当 $n>N$ 时，$\sum_{k=n}^{n+p}a_k<\frac{\varepsilon}{2}$，因此只要取 $n$ 充分大，就有 $[\sqrt{n}]>N$，进而 $0<na_n \ln n\le 2\sum_{k=[\sqrt{n}]}^n a_k<\varepsilon$. 说明 $\lim_{n\to\infty}na_n \ln n=0$.

> [!note] 注
> 下面的证法十分简捷，正确吗？
>
> "利用 Cauchy 积分判别法，知级数 $\sum_{n=2}^{\infty}\frac1{n\ln n}$ 发散。现知正项级数 $\sum_{n=1}^{\infty}a_n$ 收敛，因此 $a_n$ 是 $\frac1{n\ln n}$ 的高阶无穷小量（当 $n\to\infty$ 时）。故 $\lim_{n\to\infty}na_n \ln n=\lim_{n\to\infty}\frac{a_n}{1/(n\ln n)}=0$."
>
> **回答：** 此证法不对。因为："两正项级数：$\sum_{n=1}^{\infty}a_n$ 收敛，$\sum_{n=1}^{\infty}b_n$ 发散（$\lim_{n\to\infty}b_n=0$），并不能断言：$\{a_n\}$ 是比 $\{b_n\}$ 高阶的无穷小量". 例如：
>
> $$\sum_{n=1}^{\infty}a_n=\sum_{n=1}^{\infty}\frac1{n^2}\text{（收敛）},\quad \sum_{n=1}^{\infty}b_n=1+\frac12+\frac1{3^2}+\frac14+\frac1{5^2}+\frac16+\frac1{7^2}+\cdots\text{（发散）}.$$
>
> （因 $\sum_{k=1}^{\infty}b_{2k}=\sum_{k=1}^{\infty}\frac1{2k}=\frac12\sum_{k=1}^{\infty}\frac1k=+\infty$，而 $\sum_{n=1}^{\infty}b_n$（正项级数）项数比 $\sum_{k=1}^{\infty}b_{2k}$ 多，故 $\sum_{n=1}^{\infty}b_n$ 发散）. 但是，$\frac{a_n}{b_n}=\{1,\;n\text{ 为奇数};\;1/n,\;n\text{ 为偶数}\}$，极限 $\lim_{n\to\infty}\frac{a_n}{b_n}$ 不存在.

**※5.1.21** 设数 $a>0$，$\{p_n\}$ 是一个数列，并且 $p_n>0$，$p_{n+1}\ge p_n$，证明：级数 $\sum_{n=1}^{\infty}\frac{p_n-p_{n-1}}{p_n p_{n-1}^{a}}$ 收敛。（国外赛题）

> [!hint]- 提示
> 将通项 $\frac{p_n-p_{n-1}}{p_n p_{n-1}^a}$ 放大为 $\frac1{p_1^{a-1}}\cdot\frac{p_n-p_{n-1}}{p_n p_{n-1}}$（当 $a\ge 1$ 时）或 $\frac1a\cdot\frac{p_n^a-p_{n-1}^a}{p_n^a p_{n-1}^a}$（当 $a<1$ 时），然后用连锁消去法（见例5.1.3至例5.1.5）证明级数收敛。

> [!proof]- 证明
> **1°** 当 $a\ge 1$ 时，因 $\frac1{p_{k-1}^{a-1}}\le\frac1{p_1^{a-1}}$（$k\ge 2$），
>
> $$
> \begin{aligned}
> 0<\sum_{k=2}^n\frac{p_k-p_{k-1}}{p_k p_{k-1}^a}&=\sum_{k=2}^n\frac1{p_{k-1}^{a-1}}\cdot\frac{p_k-p_{k-1}}{p_k p_{k-1}}\le\frac1{p_1^{a-1}}\cdot\sum_{k=2}^n\frac{p_k-p_{k-1}}{p_k p_{k-1}} \\
> &=\frac1{p_1^{a-1}}\cdot\sum_{k=2}^n\left(\frac1{p_{k-1}}-\frac1{p_k}\right) \\
> &=\frac1{p_1^{a-1}}\cdot\left(\frac1{p_1}-\frac1{p_n}\right).
> \end{aligned}
> $$
>
> 因为 $\frac1{p_n}\downarrow$，有下界 $0$，故级数收敛。
>
> **2°** 当 $a<1$ 时，
>
> $$
> \begin{aligned}
> 0<\sum_{k=2}^n\frac{p_k-p_{k-1}}{p_k p_{k-1}^a}&=\sum_{k=2}^n\left(\frac{p_k-p_{k-1}}{p_k p_{k-1}}\cdot\frac{p_{k-1}^a p_k^a}{p_k^a-p_{k-1}^a}\right)\cdot\frac{p_k^a-p_{k-1}^a}{p_k^a p_{k-1}^a} \\
> &=\sum_{k=2}^n\frac1{p_k^{1-a}}\cdot\frac{p_k-p_{k-1}}{p_k^a-p_{k-1}^a}\cdot\frac{p_k^a-p_{k-1}^a}{p_k^a p_{k-1}^a}.\tag{1}
> \end{aligned}
> $$
>
> 应用 Lagrange 定理：$\exists\xi:p_{k-1}<\xi<p_k$，使得 $p_k^a-p_{k-1}^a=a\xi^{a-1}(p_k-p_{k-1})$，得
>
> $$\frac1{p_k^{1-a}}\cdot\frac{p_k-p_{k-1}}{p_k^a-p_{k-1}^a}=\frac1{p_k^{1-a}}\cdot\frac{p_k-p_{k-1}}{a\xi^{a-1}(p_k-p_{k-1})}\le\frac1{p_k^{1-a}}\cdot\frac1{ap_k^{a-1}}=\frac1a\text{（有上界）}.\tag{2}$$
>
> 由式（1）得
>
> $$0<\sum_{k=2}^n\frac{p_k-p_{k-1}}{p_k p_{k-1}^a}\le\frac1a\sum_{k=2}^n\frac{p_k^a-p_{k-1}^a}{p_k^a p_{k-1}^a}=\frac1a\left(\frac1{p_1^a}-\frac1{p_n^a}\right),$$
>
> 故级数收敛。证毕。

**5.1.22** 举出一个收敛级数 $\sum_{n=1}^{\infty}a_n$ 的例子，使级数 $\sum_{n=1}^{\infty}a_n \ln n$ 发散。

> [!hint]- 提示
> 例如，$a_n=\frac1{n\ln n(\ln\ln n)^2}$.

> [!hint]- 再提示
> 用积分判别法易证该级数 $\sum_{n=1}^{\infty}a_n$ 收敛。又因 $n$ 充分大时，$\frac1{n(\ln\ln n)^2}>\frac1{n\ln n}$，而 $\sum_{n=1}^{\infty}\frac1{n\ln n}$ 发散，故 $\sum_{n=1}^{\infty}a_n\ln n=\sum_{n=1}^{\infty}\frac1{n(\ln\ln n)^2}$ 发散。

**5.1.23** 序列 $\{b_n\}$（$n=1,2,\cdots$）具有下列性质：$b_n>0$，$\lim_{n\to\infty}b_n=+\infty$. 作出序列 $\{a_n\}$，使

$$a_n\ge 0,\quad\sum_{n=1}^{\infty}a_n<\infty,\quad\sum_{n=1}^{\infty}a_n b_n=+\infty.$$

（国外赛题）

> [!hint]- 提示
> $\forall k\in\mathbb{N}$，因为 $\lim_{n\to\infty}b_n=+\infty$，$\exists n_k\in\mathbb{N}$ 使 $b_{n_k}>k$（$k=1,2,\cdots$），顺次可使 $n_k>n_{k-1}$. 令
>
> $$a_n=\begin{cases} 1/k^2, & n=n_k \\ 0, & n\neq n_k \end{cases} \text{ 即可}.$$

**5.1.24** 设 $\{n_k\}$ 是自然数列 $\{n\}$ 的子列，试证：

1）当 $n_k-n_{k-1}\ge k$ 时，$\sum_{k=1}^{\infty}\frac1{n_k}$ 收敛；

2）当 $n_k-n_{k-1}\le g$（常数）时，$\sum_{k=1}^{\infty}\frac1{n_k}$ 发散；

※3）当 $n_k-n_{k-1}\ge k^r$（$r>0$）时，$\sum_{k=1}^{\infty}\frac1{n_k}$ 收敛。

> [!hint]- 提示
> 1）$n_k\ge k+(k-1)+\cdots+1=\frac{k}{2}(1+k)$，$0<\frac1{n_k}<\frac2{k^2}$.
>
> 2）$\sum_{k=1}^{\infty}\frac1{n_k}\ge\sum_{k=1}^{\infty}\frac1{(k-1)g+n_1}=+\infty$.

**☆5.1.25** 对函数 $\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}$（$s>1$），证明：$\zeta(s)=s\int_1^{+\infty}\frac{[x]}{x^{s+1}}dx$，其中 $[x]$ 为 $x$ 的整数部分。（西北师范大学）

> [!hint]- 提示
> $$s\int_1^{+\infty}\frac{[x]}{x^{s+1}}dx=\sum_{n=1}^{\infty}s\int_n^{n+1}\frac{n}{x^{s+1}}dx=\sum_{n=1}^{\infty}\left[\frac{n}{n^s}-\frac{n}{(n+1)^s}\right].$$

> [!hint]- 再提示
> $$
> \begin{aligned}
> \text{上式}&=\sum_{n=1}^{\infty}\frac1{n^{s-1}}-\sum_{n=1}^{\infty}\frac1{(n+1)^{s-1}}+\sum_{n=1}^{\infty}\frac1{(n+1)^s} \\
> &=1+\sum_{n=2}^{\infty}\frac1{n^s}=\sum_{n=1}^{\infty}\frac1{n^s}.
> \end{aligned}
> $$

**☆5.1.26** 1）求证：当 $s>0$ 时，$\int_1^{+\infty}\frac{x-[x]}{x^{s+1}}dx$ 收敛；

2）求证：当 $s>1$ 时，$\int_1^{+\infty}\frac{x-[x]}{x^{s+1}}dx=\frac1{s-1}-\frac1s\sum_{n=1}^{\infty}\frac1{n^s}$，$[x]$ 表示 $x$ 的整数部分。（北京航空航天大学）

> [!hint]- 提示
> 利用上题结果。

**5.1.27** 求 $\lim_{t\to+\infty}\left(\frac{1}{t}+\frac{2t}{t^2+1^2}+\frac{2t}{t^2+2^2}+\cdots+\frac{2t}{t^2+n^2}+\cdots\right)$。

> [!hint]- 提示
> 可参看例5.1.55和例5.1.56。

**☆5.1.28** 设 $k>0,a>0$，证明：

1）$\int_a^{+\infty}\frac{\sin 2n\pi x}{x^k}dx$ 收敛；

2）$\sum_{n=1}^{\infty}\frac{1}{n}\int_a^{+\infty}\frac{\sin 2n\pi x}{x^k}dx$ 收敛。（上海交通大学）

> [!hint]- 提示
> 1）可用反常积分的 Dirichlet 判别法。2）可先用第二中值定理．

> [!hint]- 再提示
> 1）当 $x\nearrow +\infty$ 时 $\frac{1}{x^k}\searrow 0$，而 $\left|\int_a^A\sin 2n\pi x\,dx\right|\le\frac{1}{n\pi}$（$\forall A>a$），故原积分收敛。
>
> 2）$\left|\int_a^A\frac{\sin 2n\pi x}{x^k}\,dx\right|=\left|\frac{1}{a^k}\int_a^{\xi}\sin 2n\pi x\,dx+\frac{1}{A^k}\int_{\xi}^A\sin 2n\pi x\,dx\right|\le\frac{1}{n\pi a^k}+\frac{1}{n\pi A^k}$。
>
> 不等式两边同时取极限（$A\to+\infty$），知 $\sum_{n=1}^{\infty}\frac{1}{n}\left|\int_a^{+\infty}\frac{\sin 2n\pi x}{x^k}\,dx\right|\le\frac{1}{\pi a^k}\sum_{n=1}^{\infty}\frac{1}{n^2}<+\infty$。

**\*5.1.29** 证明：$\lim_{n\to\infty}\left\{\sum_{k=2}^n\frac{1}{k\ln k}-\ln\ln n\right\}$ 存在（有限）．（北京师范大学）

> [!hint]- 提示
> 可参看例5.1.54。

**☆5.1.30** 已知 $a_n>0$，级数 $\sum_{n=1}^{\infty}\frac{1}{a_n}$ 发散，试证：级数 $\sum_{n=1}^{\infty}\frac{1}{a_n+1}$ 亦发散．（中国科学院）

> [!hint]- 提示
> （反证法）若 $\sum_{n=1}^{\infty}\frac{1}{a_n+1}$ 收敛，则 $n\to\infty$ 时，$\frac{1}{a_n+1}\to 0$，即 $a_n+1\to+\infty$，得 $a_n\to+\infty$。故
>
> $$\frac{\frac1{a_n}}{\frac1{a_n+1}}=\frac{a_n+1}{a_n}=1+\frac1{a_n}\to 1.$$
>
> 因此，$\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时：$0<\frac1{a_n}<(1+\varepsilon)\frac1{a_n+1}$。于是 $\sum_{n=1}^{\infty}\frac1{a_n}$ 也收敛．与题设矛盾．

**\*\*5.1.31** 设 $u(x)$ 在 $[0,+\infty)$ 上有连续导数，且

$$\int_0^{+\infty}\left(|u(x)|^2+|u'(x)|^2\right)dx=M<+\infty.$$

试证：1）$\exists\{x_n\}_{n=1}^{\infty}\subset[0,+\infty)$ 使得 $\{x_n\}_{n=1}^{\infty}\to+\infty$，$\lim_{n\to\infty}u(x_n)=0$；

2）$\exists C>0$，使得 $\sup_{0\le x<+\infty}u(x)\le C\left[\int_0^{+\infty}\left(|u(x)|^2+|u'(x)|^2\right)dx\right]^{1/2}$．（华中师范大学）

> [!hint]- 提示
> 1）$\forall k$，$\exists x_k\in[k,k+1]$，使得 $\int_k^{k+1}u^2(x)\,dx\overset{\text{积分中值定理}}{=}u^2(x_k)$，故
>
> $$\sum_{k=0}^n|u(x_k)|^2=\sum_{k=0}^n\int_k^{k+1}|u(x)|^2dx\le\int_0^{+\infty}|u(x)|^2dx\le M.$$
>
> 因此 $\sum_{k=0}^{\infty}|u(x_k)|^2$ 收敛，$\lim_{k\to+\infty}|u(x_k)|=0$。
>
> 2）（利用均值不等式）
> $$|u(x)u'(x)|\le\frac{|u(x)|^2+|u'(x)|^2}{2}.$$
>
> $$|u^2(x_2)-u^2(x_1)|=\left|\int_{x_1}^{x_2}d\big(u^2(x)\big)\right|=\left|\int_{x_1}^{x_2}2u(x)u'(x)dx\right|\le\int_{x_1}^{x_2}\left(|u(x)|^2+|u'(x)|^2\right)dx.$$

> [!hint]- 再提示
> 2）因题设 $\int_0^{+\infty}\left(|u(x)|^2+|u'(x)|^2\right)dx$ 收敛，根据 Cauchy 准则，$\forall\varepsilon>0$，$\exists A>0$，当 $x_2>x_1>A$ 时有
>
> $$\int_{x_1}^{x_2}\left(|u(x)|^2+|u'(x)|^2\right)dx<\varepsilon.$$
>
> 因此
> $$|u^2(x_2)-u^2(x_1)|\le\int_{x_1}^{x_2}\left(|u(x)|^2+|u'(x)|^2\right)dx<\varepsilon.$$
>
> 再由 Cauchy 准则的充分性，即知 $\lim_{x\to+\infty}u^2(x)$ 存在．加之 $u(x)$ 连续，故 $u^2(x)$ 在 $[0,+\infty)$ 上有界．
>
> $u(x)$ 同样如此，即：$\exists C>0$，可使得
> $$\sup_{0\le x<+\infty}|u(x)|\le CM^{1/2}=C\left[\int_0^{+\infty}\left(|u(x)|^2+|u'(x)|^2\right)dx\right]^{1/2}.$$

**\*\*5.1.32** 设 $a_1=a>0,a_2=b>0$，

$$a_{n+2}=2+\frac1{a_{n+1}^2}+\frac1{a_n^2}.\tag{1}$$

试证：$\{a_n\}$ 收敛．（华东师范大学）

> [!hint]- 提示
> 1° 由式(1)知：$\forall k\ge 3$，有 $a_k>2$. 因此当 $n\ge 5$ 时，$2<a_n\le\frac52$. 故 $\forall m,n\ge 5$，由
>
> $$|a_m-a_n|<\frac52-2=\frac12.\tag{2}$$
>
> 及
>
> $$0<\frac{a_{n-1}+a_{n-3}}{a_{n-1}^2a_{n-3}^2}<\frac{5}{2^4}.\tag{3}$$
>
> 知（当 $n\ge 8$ 时）
>
> $$
> \begin{aligned}
> |a_n-a_{n-1}|&=\left|\frac1{a_{n-1}^2}+\frac1{a_{n-2}^2}-\left(\frac1{a_{n-2}^2}+\frac1{a_{n-3}^2}\right)\right|=\left|\frac1{a_{n-1}^2}-\frac1{a_{n-3}^2}\right| \\
> &=\frac{a_{n-1}+a_{n-3}}{a_{n-1}^2a_{n-3}^2}|a_{n-1}-a_{n-3}|\overset{\text{式(2),(3)}}{<}\frac{5}{2^5}.\tag{4}
> \end{aligned}
> $$
>
> 当 $n\ge 11$ 时，$|a_n-a_{n-1}|=\frac{a_{n-1}+a_{n-3}}{a_{n-1}^2a_{n-3}^2}|a_{n-1}-a_{n-3}|\overset{\text{式(3)}}{\le}\frac{5}{2^4}\big(|a_{n-1}-a_{n-2}|+|a_{n-2}-a_{n-3}|\big)$。
>
> 因此有迭代关系：$|a_n-a_{n-1}|\le\frac{5}{2^3}\max\{|a_{n-1}-a_{n-2}|,|a_{n-2}-a_{n-3}|\}$。
>
> 反复迭代下去，当 $n=2k+8$ 或 $n=2k+9$ 时，至少迭代 $k$ 次，有
>
> $$|a_n-a_{n-1}|\le\left(\frac58\right)^k\max\{|a_8-a_7|,|a_7-a_6|\}\overset{\text{记}}{=}aq^k\qquad\left(q=\frac58,a>0\right).$$
>
> 于是
>
> $$0\le\sum_{k=8}^n(a_k-a_{k-1})\le\sum_{k=8}^n|a_k-a_{k-1}|\le a\sum_{k=8}^n q^k\qquad\left(q=\frac58<1\right).$$
>
> 因 $\sum_{k=8}^{\infty}q^k$ 收敛，上式表明 $\sum_{k=8}^{\infty}(a_k-a_{k-1})$ 绝对收敛，可知 $\{a_n\}=\left\{a_7+\sum_{k=8}^n(a_k-a_{k-1})\right\}$ 收敛．

> [!proof]- 证明
> 证毕．


## *§5.2 函数项级数

所谓函数项级数数$\sum_{n=1}^{\infty}u_n(x)$在某区间$I$上收敛，是指它逐点收敛。意即：对每一固定点$x\in I$，作为数项级数，$\sum_{n=1}^{\infty}u_n(x)$总是收敛的。因此对收敛性，可用上节数项级数的各种判别法进行判断。本节的任务，主要讨论一致收敛性的判断及其应用。

> [!note] 导读
> 函数项级数（及序列）一致收敛问题是数学院系学生的难点、重点，也是各类考试的热点，非数学院系的学生从略。


### 一、一致收敛性的判断

证明一致收敛性一般有如下几种方法：a）利用定义；b）利用Cauchy准则；c）利用常用的几个判别法；d）利用一致有界与等度连续．下面我们对这些分别进行介绍和讨论．


#### a．利用定义证明一致收敛性

要点 1° $\varepsilon-N$方法．

i）要用定义证明 $\sum_{n=1}^{\infty}u_n(x)$ 在区间 $I$ 上一致收敛，应首先设法求出和函数
$$S(x)=\sum_{n=1}^{\infty}u_n(x),$$
写出部分和 $S_n(x)=\sum_{k=1}^nu_k(x)$，然后对任意给定的 $\varepsilon>0$，找出与 $x$ 无关的 $N=N(\varepsilon)$，使得 $n>N$ 时有 $|S(x)-S_n(x)|<\varepsilon$。

ii）$S_n(x)\ne S(x)$（$n\to\infty$ 时关于 $x\in I$），等价于：$\exists\varepsilon_0>0$，$\forall N>0$，$\exists n>N$，$\exists x_N\in I$ 使得 $|S(x_N)-S_n(x_N)|\ge\varepsilon_0$。

亦等价于：$\exists\varepsilon_0>0$，$\exists\{x_n\}\subset I$，使得 $|S(x_n)-S_n(x_n)|\ge\varepsilon_0$。

特别来讲，若发现有 $x_0\in I$，或为 $I$ 的端点，使得 $x\to x_0$ 时有 $S(x)-S_n(x)\nrightarrow0$（对充分大的 $n$ 成立），则在区间 $I$ 上 $S_n(x)\ne S(x)$（当 $n\to\infty$ 时）。

2° "放大法"：若 $\forall n$，$\exists\alpha_n>0$，使得 $|S(x)-S_n(x)|\le\alpha_n$（$\forall x\in I$），且 $n\to\infty$ 时 $\alpha_n\to0$，则当 $n\to\infty$ 时，$S_n(x)\rightrightarrows S(x)$（于 $I$ 上）。

3° 确界法．当 $n\to\infty$ 时，$S_n(x)\rightrightarrows S(x)$ 等价于 $\limsup_{n\to\infty}\,\sup_{x\in I}|S(x)-S_n(x)|=0$。

### $\varepsilon-N$方法

> [!example] ☆例5.2.1
> $f(x)$ 是 $(-\infty,+\infty)$ 上的连续函数，$f_n(x)=\sum_{k=0}^{n-1}\frac1n f\left(x+\frac{k}{n}\right)$，证明：函数序列 $\{f_n(x)\}$（$n=1,2,3,\cdots$）在任何有限区间上一致收敛．（首都师范大学，北京师范大学）
>
> **分析** 我们看到 $f_n(x)=\sum_{k=0}^{n-1}\frac1n f\left(x+\frac{k}{n}\right)$ 正好是积分 $\int_0^1f(x+t)dt$ 的一个积分和，因为 $f(x)$ 连续，该积分有意义，故当 $n\to\infty$ 时，$f_n(x)\to\int_0^1f(x+t)dt$。
>
> 设 $[a,b]$ 是任意一个有限区间，要证明当 $n\to\infty$ 时 $f_n(x)\to\int_0^1f(x+t)dt$ 于 $[a,b]$ 上，即对任一 $\varepsilon>0$，要找 $N>0$，使得当 $n>N$ 时，
> $$\left|f_n(x)-\int_0^1f(x+t)dt\right|<\varepsilon\qquad(\forall x\in[a,b]).\tag{1}$$
>
> 因为
> $$f_n(x)=\sum_{k=0}^{n-1}\frac1n f\left(x+\frac{k}{n}\right)=\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}f\left(x+\frac{k}{n}\right)dt,\quad \int_0^1f(x+t)dt=\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}f(x+t)dt,$$
> 所以
> $$\begin{aligned}\left|f_n(x)-\int_0^1f(x+t)dt\right|&=\left|\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}f\left(x+\frac{k}{n}\right)dt-\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}f(x+t)dt\right|\\&=\left|\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}\left(f\left(x+\frac{k}{n}\right)-f(x+t)\right)dt\right|\\&\le\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}\left|f\left(x+\frac{k}{n}\right)-f(x+t)\right|dt.\tag{2}\end{aligned}$$
>
> 故要式(1)成立，只需式(2)右端的
> $$\sum_{k=0}^{n-1}\int_{k/n}^{(k+1)/n}\left|f\left(x+\frac{k}{n}\right)-f(x+t)\right|dt<\varepsilon\qquad(\forall x\in[a,b]).\tag{3}$$
>
> 为此只要能使
> $$\left|f\left(x+\frac{k}{n}\right)-f(x+t)\right|<\varepsilon,\tag{4}$$
> 则式(3)自然成立．注意到 $t\in\left[\frac{k}{n},\frac{k+1}{n}\right]$，因此点 $\left(x+\frac{k}{n}\right)$ 与点 $(x+t)$ 的距离
> $$\left|\left(x+\frac{k}{n}\right)-(x+t)\right|=\left|\frac{k}{n}-t\right|<\frac1n.\tag{5}$$
>
> 利用Cantor定理，$f$ 在 $[a,b+1]$ 上一致连续．所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in[a,b+1]$，$|x'-x''|<\delta$ 时，便有 $|f(x')-f(x'')|<\varepsilon$。故取 $N=\frac1\delta$，当 $n>N$ 时有 $\frac1n<\frac1N=\delta$，于是由式(5)推得式(4)，从而推得式(3)成立．问题获证．

> [!exercise] 练习
> 设 $f(x)$ 在 $[0,1]$ 上连续，试证：
> $$\sum_{i=1}^n\frac{x}{n}f\left(i\cdot\frac{x}{n}\right)\to\int_0^x f(t)dt.\tag{1}$$
> （当 $n\to\infty$ 时，关于 $x\in[0,1]$ 一致）．

> [!hint]- 提示
> 因 $\int_0^x f(t)dt=\sum_{i=1}^n\int_{(i-1)x/n}^{ix/n}f(t)dt=\sum_{i=1}^n f(\xi_i)\frac{x}{n},\ (i-1)\frac{x}{n}\le\xi_i\le i\frac{x}{n}$，故
> $$\begin{aligned}\left|\sum_{i=1}^n\frac{x}{n}f\left(i\cdot\frac{x}{n}\right)-\int_0^x f(t)dt\right|&=\left|\frac{x}{n}\sum_{i=1}^n\left(f\left(i\cdot\frac{x}{n}\right)-f(\xi_i)\right)\right|\\&\le\frac{x}{n}\sum_{i=1}^n\left|f\left(i\cdot\frac{x}{n}\right)-f(\xi_i)\right|\le\frac{x}{n}\sum_{i=1}^n\omega_i^{[0,x],1/n},\tag{2}\end{aligned}$$
> 其中 $\omega_i^{[0,x],1/n}$ 表示当 $[0,x]$ $n$ 等分时，$f$ 在第 $i$ 个小区间上的振幅．

> [!proof]- 证
> 根据 $f$ 在 $[0,1]$ 上可积的充要条件（§4.2的定理1）：$\forall\varepsilon>0$，$\exists\delta>0$，使得 $\lambda=\max_{1\le i\le n}|\Delta x_i|<\delta$ 时，$0<\sum_{i=1}^n\omega_i\Delta x_i<\varepsilon$。取 $N:\frac1N<\delta$，当 $n>N$ 时，$\forall x\in(0,1]$，在 $[0,x]$ 上用 $[0,x]$ 的 $n$ 等分点，$(x,1]$ 上用 $[0,1]$ 的 $n$ 等分点，两者组成 $[0,1]$ 的一个分割，且有 $\lambda=\max_{1\le i\le n}|\Delta x_i|\le\frac1n<\frac1N<\delta$，于是
> $$\left|\sum_{i=1}^n\frac{x}{n}f\left(i\cdot\frac{x}{n}\right)-\int_0^x f(t)dt\right|\le\frac{x}{n}\sum_{i=1}^n\omega_i^{[0,x],1/n}\le\sum_{i=1}^n\frac1n\omega_i<\varepsilon.\tag{3}$$
>
> 总之：$\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，$\forall x\in(0,1]$，有式(3)成立，式(1)获证．

> [!example] ☆例5.2.2
> 设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上有连续的导函数 $f'(x)$，$f_n(x)=e^n[f(x+e^{-n})-f(x)]$（$n=1,2,\cdots$），证明：$\{f_n(x)\}$（$n=1,2,\cdots$）在任何有限开区间 $(a,b)$ 内一致收敛于 $f'(x)$．（福建师范大学）

> [!proof]- 证
> （利用微分中值定理．）
> $$|f_n(x)-f'(x)|=\left|\frac{f(x+e^{-n})-f(x)}{e^{-n}}-f'(x)\right|=|f'(\xi)-f'(x)|\qquad(x<\xi<x+e^{-n}).$$
>
> 因 $f'(x)$ 在 $[a,b+1]$ 上一致连续，$\forall\varepsilon>0$，$\exists\delta>0$（$\delta<1$），当 $x_1,x_2\in[a,b+1]$，$|x_1-x_2|<\delta$ 时，有 $|f'(x_1)-f'(x_2)|<\varepsilon$。取 $N=\ln\frac1\delta$，则 $n>N$ 时（此时 $0<e^{-n}<\delta$），有
> $$|f_n(x)-f'(x)|=|f'(\xi)-f'(x)|<\varepsilon.$$
>
> 故当 $n\to\infty$ 时，$f_n(x)\rightrightarrows f'(x)$ 于 $(a,b)$ 上．

> [!example] 例5.2.3
> 设 $f(x)$ 在 $[0,1]$ 上连续，$g_n(x)$ 为阶梯函数
> $$g_n(x)=\sum_{k=1}^n f\left(\frac{k}{n}\right)\big(\chi_{I_k}(x)-\chi_{I_{k-1}}(x)\big),$$
> 其中
> $$\chi_{\frac{i}{n}}(x)=\begin{cases}1, & 0\le x<\frac{i}{n},\\0, & \frac{i}{n}\le x\le 1\end{cases}\qquad (i=1,2,\cdots,n).$$
> 试证：当 $n\to\infty$ 时，$g_n(x)\rightrightarrows f(x)$ 于 $[0,1)$ 上．

> [!note] 注
> 按定义，$[0,1]$ 上每项
> $$f\left(\frac{k}{n}\right)\bigl(\chi_{\frac{k}{n}}(x)-\chi_{\frac{k-1}{n}}(x)\bigr)=\begin{cases}f\left(\frac{k}{n}\right), & x\in\left[\frac{k-1}{n},\frac{k}{n}\right),\\0, & \text{其他}.\end{cases}$$
> 因此 $f(x)$ 与 $g_n(x)$ 的图形如图 5.2.1 所示。曲线是 $f(x)$ 的图形，水平线段是 $g_n(x)$ 的图形，$f(x)$ 在 $x=\frac{k}{n}$ 处的值作为 $g_n(x)$ 在整个小区间 $\left[\frac{k-1}{n},\frac{k}{n}\right)$ 上的值。
>
> 图 5.2.1

> [!proof]- 证
> 因 $\forall x\in[0,1)$，$\exists k\in\{1,2,\cdots,n\}$，使得 $x\in\left[\frac{k-1}{n},\frac{k}{n}\right)$。于是 $g_n(x)=f\left(\frac{k}{n}\right)$，
> $$|f(x)-g_n(x)|=\left|f(x)-f\left(\frac{k}{n}\right)\right|\qquad (k=1,2,\cdots,n). \tag{1}$$
>
> 又因 $f(x)$ 在 $[0,1]$ 上连续，所以在 $[0,1]$ 上一致连续，$\forall\varepsilon>0$，$\exists\delta>0$（与 $x$ 无关），当 $|x_1-x_2|<\delta\ (x_1,x_2\in[0,1])$ 时，有
> $$|f(x_1)-f(x_2)|<\varepsilon，\tag{2}$$
>
> 令 $N=\frac{1}{\delta}$，则 $n>N$ 时，$\left|x-\frac{k}{n}\right|\le\frac{1}{n}<\delta$，从而利用式(1)和式(2)有
> $$|f(x)-g_n(x)|=\left|f(x)-f\left(\frac{k}{n}\right)\right|<\varepsilon\qquad (\forall x\in[0,1)).$$
>
> 此即表明当 $n\to\infty$ 时，$g_n(x)\rightrightarrows f(x)$ 于 $[0,1)$ 上．

> [!example] ☆例5.2.4（Heine 定理的推广）
> 试证 $x\to a$ 时 $f(x,y)\to\varphi(y)$（关于 $y\in I$）的充要条件是 $\forall\{x_n\}\to a$（$x_n\ne a$），有 $f(x_n,y)\rightrightarrows\varphi(y)$（关于 $y\in I$）$(n\to\infty)$.（郑州大学）

> [!proof]- 证
> **1° 必要性．**（对 $\{x_n\}\to a$（$x_n\ne a$），要证明 $n\to\infty$ 时 $f(x_n,y)\rightrightarrows\varphi(y)$（关于 $y\in I$）．即要 $\forall\varepsilon>0$，找 $N>0$ 使得 $n>N$ 时，有 $|f(x_n,y)-\varphi(y)|<\varepsilon$（$\forall y\in I$）．）因已知 $x\to a$ 时 $f(x,y)\rightrightarrows\varphi(y)$（关于 $y\in I$），所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $0<|x-a|<\delta$ 时，有 $|f(x,y)-\varphi(y)|<\varepsilon$（$\forall y\in I$）．既然 $x_n\ne a$ 且 $x_n\to a$（当 $n\to\infty$ 时），所以对此 $\delta>0$，$\exists N>0$，当 $n>N$ 时，有 $0<|x_n-a|<\delta$，从而 $|f(x_n,y)-\varphi(y)|<\varepsilon$（$\forall y\in I$）．此即 $f(x_n,y)\rightrightarrows\varphi(y)$（$y\in I$，$n\to\infty$）.
>
> **2° 充分性．** 假设 $x\to a$ 时 $f(x,y)\not\to\varphi(y)$（关于 $y\in I$），则 $\exists\varepsilon_0>0$，使得 $\forall\frac{1}{n}>0$，$\exists x_n\bigl(0<|x_n-a|<\frac{1}{n}\bigr)$ 及 $y_n\in I$ 满足 $|f(x_n,y_n)-\varphi(y_n)|\ge\varepsilon_0$．如此我们得到 $\{x_n\}\to a$，$x_n\ne a$，但 $f(x_n,y)\not\rightrightarrows\varphi(y)$（于 $I$ 上），与已知条件矛盾．

> [!example] ☆例5.2.5
> 证明：若 $\sum_{n=1}^{\infty}u_n(x)$ 在区间 $I$ 上收敛，则 $\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上一致收敛的充要条件是 $\forall\{x_n\}\subset I$，有 $\lim_{n\to\infty}r_n(x_n)=0$（其中 $r_n(x)=\sum_{k=n+1}^{\infty}u_k(x)$ 为级数余和）.
>
> 证法与上题类似，留给读者，并请写出函数序列的相应结果．

> [!note] 注
> 本题的充分性的否定形式为：若 $\exists\{x_n\}\subset I$ 使得 $r_n(x_n)\nrightarrow0$（$n\to\infty$），则 $\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上非一致收敛．
>
> 作为该例的一个应用，可见例 5.2.27 之证 II.

### 放大法

如前所述，放大法在于把级数的余和 $r_n(x)=S(x)-S_n(x)$ 的绝对值进行适当放大，使得在区间 $I$ 上 $|r_n(x)|=|S(x)-S_n(x)|\le\alpha_n$（$\alpha_n$ 与 $x$ 无关），且 $\alpha_n\to0$（$n\to\infty$），则该级数在所论区间上一致收敛．

实现放大有很多技巧，下面各例分别是通过已知的不等式，求极值，利用已知的余项估计，递推放大等典型方法来实现的．如下例是利用 Cauchy 不等式进行放大．

> [!example] 例5.2.6
> 若 $f_n(x)$ 在 $[a,b]$ 上可积，$n=1,2,\cdots$，且 $f(x)$ 与 $g(x)$ 在 $[a,b]$ 上都可积，$\lim_{n\to\infty}\int_a^b|f_n(x)-f(x)|^2\,dx=0$，设 $h(x)=\int_a^x f(t)g(t)\,dt$，$h_n(x)=\int_a^x f_n(t)g(t)\,dt$，则在 $[a,b]$ 上 $h_n(x)$ 一致收敛于 $h(x)$.（东北师范大学）

> [!proof]- 证
> $$\begin{aligned}|h(x)-h_n(x)|&=\left|\int_a^x f(t)g(t)\,dt-\int_a^x f_n(t)g(t)\,dt\right|\\&=\left|\int_a^x\bigl(f(t)-f_n(t)\bigr)g(t)\,dt\right|\\&\le\int_a^x|f(t)-f_n(t)||g(t)|\,dt\\&\le\left(\int_a^x|f(t)-f_n(t)|^2dt\right)^{\frac12}\left(\int_a^x|g(t)|^2dt\right)^{\frac12}\\&\le\left(\int_a^b|f(t)-f_n(t)|^2dt\right)^{\frac12}\left(\int_a^b|g(t)|^2dt\right)^{\frac12}\to0\qquad (n\to\infty)，\end{aligned}$$
>
> 所以当 $n\to\infty$ 时，$h_n(x)\rightrightarrows h(x)$ 于 $[a,b]$ 上．

> [!note]
> 下例是通过求极大值得到放大．

> [!example] 例5.2.7
> 给定函数序列：$f_n(x)=\dfrac{x(\ln n)^\alpha}{n^x}\qquad (n=2,3,4,\cdots).$ 试问当 $\alpha$ 取何值时，$\{f_n(x)\}$ 在 $[0,+\infty)$ 上一致收敛．（广西大学）

> [!solution]- 解
> $f_n'(x)=\dfrac{(\ln n)^{\alpha+1}}{n^x}\left(\frac{1}{\ln n}-x\right).$
>
> 可见，当 $x<\dfrac{1}{\ln n}$ 时，$f_n(x)\nearrow$；当 $x>\dfrac{1}{\ln n}$ 时，$f_n(x)\searrow$，函数 $f_n(x)$ 在 $x=\dfrac{1}{\ln n}$ 处取极大值．注意极限函数 $f(x)\equiv\lim_{n\to\infty}f_n(x)\equiv0$．故
> $$\sup_{x\in(0,+\infty)}|f(x)-f_n(x)|=\max_{x\in(0,+\infty)}|f_n(x)|=f_n\left(\frac{1}{\ln n}\right)=\frac{(\ln n)^{\alpha-1}}{n^{1/\ln n}}=\frac{1}{e}(\ln n)^{\alpha-1}\begin{cases}\nrightarrow0, & \alpha\ge1,\\\to0, & \alpha<1\end{cases}\qquad (n\to\infty).$$
>
> （这里 $n^{\frac{1}{\ln n}}=\bigl(e^{\ln n}\bigr)^{\frac{1}{\ln n}}=e.$）所以当且仅当 $\alpha<1$ 时，$\{f_n(x)\}$ 在 $[0,+\infty)$ 上一致收敛．

注意，放大法一般来说只是 一致收敛的充分条件．但如本例用求极大值的方法，得到 $\alpha_n=\max\{|S(x)-S_n(x)|\}$，则 $\alpha_n\to0$（$n\to\infty$）的条件不仅是充分的而且是必要的．

下两例是利用级数的余和估计．

对于 Leibniz 级数，级数余和 $r_n=S-S_n=\sum_{k=n+1}^{\infty}(-1)^ka_k$，有估计式 $|r_n|\le a_{n+1}$.

> [!example] 例5.2.8
> 试证：$\sum_{n=1}^{\infty}\dfrac{n(-1)^n}{n^2+x^2}$ 在 $(-\infty,+\infty)$ 内一致收敛．

> [!proof]- 证
> 设函数 $f(y)=\dfrac{y}{y^2+x^2}$，则 $f'(y)=\dfrac{x^2-y^2}{(y^2+x^2)^2}$．可见 $\forall x\in(-\infty,+\infty)$，当 $n$ 充分大时，级数通项的绝对值 $\dfrac{n}{n^2+x^2}\searrow0$（$n\to\infty$），故该级数为 Leibniz 级数．因而
> $$|r_n(x)|\le\frac{n+1}{(n+1)^2+x^2}\le\frac{1}{n+1}\to0\qquad (n\to\infty).$$
> 所以 $\sum_{n=1}^{\infty}\dfrac{n(-1)^n}{n^2+x^2}$ 在 $(-\infty,+\infty)$ 内一致收敛．

> [!example] 例5.2.9
> 讨论 $\sum_{n=1}^{\infty}\dfrac{nx}{(1+x)(1+2x)\cdots(1+nx)}$ 在 $(0,a)$ 与 $(a,+\infty)$ 内的一致收敛性．

> [!solution]- 解
> 用 D’Alembert 判别法，容易知道该级数在 $(0,+\infty)$ 内处处收敛．
>
> $$\begin{aligned}r_n(x)&=\sum_{k=n+1}^{\infty}\dfrac{kx}{(1+x)(1+2x)\cdots(1+kx)}\\&=\sum_{k=n+1}^{\infty}\dfrac{kx+1-1}{(1+x)(1+2x)\cdots(1+kx)}\\&=\sum_{k=n+1}^{\infty}\left\{\dfrac{1}{(1+x)(1+2x)\cdots[1+(k-1)x]}-\dfrac{1}{(1+x)(1+2x)\cdots(1+kx)}\right\}\\&=\dfrac{1}{(1+x)(1+2x)\cdots(1+nx)}.\end{aligned}$$
>
> $$\sup_{x\in(0,a)}|r_n(x)|=1\nrightarrow0，\quad \sup_{x\in(a,+\infty)}|r_n(x)|=\dfrac{1}{(1+a)(1+2a)\cdots(1+na)}\to0\qquad (n\to\infty).$$
>
> 所以此级数在 $(0,a)$ 内非一致收敛，在 $(a,+\infty)$ 内一致收敛．

有些函数序列是用递推形式给出的，这时可考虑用递推的方式进行放大．如

> [!example] ☆例5.2.10
> 设 $f_1(x)$ 在 $[a,b]$ 上正常可积，$f_{n+1}(x)=\int_a^x f_n(t)\,dt$，$n=1,2,\cdots$．证明：函数序列 $\{f_n(x)\}$ 在 $[a,b]$ 上一致收敛于零．（吉林大学）

> [!proof]- 证
> 因为 $f_1(x)$ 在 $[a,b]$ 上正常可积，故在 $[a,b]$ 上有界，即 $\exists M>0$，使得 $|f_1(x)|\le M\ (\forall x\in[a,b])$．从而
> $$|f_2(x)|\le\int_a^x|f_1(t)|\,dt\le M(x-a)，$$
> $$|f_3(x)|\le\int_a^x|f_2(t)|\,dt\le M\int_a^x(t-a)\,dt=\frac{M(x-a)^2}{2!}，$$
>
> 一般来说，若对 $n$ 有 $|f_n(x)|\le\dfrac{M(x-a)^{n-1}}{(n-1)!}$，则
> $$|f_{n+1}(x)|\le\int_a^x|f_n(t)|\,dt=\frac{M}{(n-1)!}\int_a^x(t-a)^{n-1}\,dt=\frac{M(x-a)^n}{n!}.$$
>
> 所以 $|f_n(x)|\le\dfrac{M(b-a)^{n-1}}{(n-1)!}\to0\qquad (n\to\infty).$
> 故 $f_n(x)\rightrightarrows0$（当 $n\to\infty$ 时）（关于 $x\in[a,b]$）．

> [!example] 例5.2.11
> 证明：若 $K(x,t)$ 在 $D=[a\le x\le b,a\le t\le b]$ 上连续，$u_0(x)$ 在 $[a,b]$ 上连续，且对任意 $x\in[a,b]$，令 $u_n(x)=\int_a^x K(x,t)u_{n-1}(t)\,dt$，$n=1,2,\cdots$，则函数序列 $\{u_n(x)\}$ 在 $[a,b]$ 上一致收敛．（东北师范大学）

> [!hint]- 提示
> 在有界闭区域上连续的二元函数必有界，即 $\exists M>0$，当 $a\le x\le b$，$a\le t\le b$ 时，恒有 $|K(x,t)|\le M$.

> [!example] 例5.2.12
> 假设
>
> 1）$f(x)$ 在 $(-\infty,+\infty)$ 内连续；
> 2）$x\ne0$ 时有 $|f(x)|<|x|$；
> 3）$f_1(x)=f(x)$，$f_2(x)=f\bigl(f_1(x)\bigr)$，$\cdots$，$f_n(x)=f\bigl(f_{n-1}(x)\bigr)$，$\cdots$．
>
> 试证：$f_n(x)$ 在 $[-A,A]$ 上一致收敛（其中 $A$ 为正常数）．（南京大学，吉林大学）

> [!proof]- 证
> 因 $x\ne0$ 时有 $0\le|f(x)|<|x|$，故令 $x\to0$，取极限（已知 $f(x)$ 连续）得 $0\le f(0)\le0$，$f(0)=0$，从而由条件 2），在 $[-A,A]$（$A>0$）上恒有 $|f(x)|\le|x|$.
>
> 由此，$\forall\varepsilon>0$（不妨设 $\varepsilon<A$），当 $x\in[-\varepsilon,\varepsilon]$ 时，有 $|f(x)|\le|x|\le\varepsilon$；在 $[-A,-\varepsilon]\cup[\varepsilon,A]$ 上，$\left|\dfrac{f(x)}{x}\right|<1$ 连续，且有最大值 $q$：$0<q<1$．于是，$|f(x)|\le q|x|\le qA$．总之在 $[-A,A]$ 上恒有 $|f(x)|\le\max\{\varepsilon,qA\}$.
>
> $\forall x\in[-A,A]$，若 $|f(x)|\le\varepsilon$，则 $|f_2(x)|=|f(f(x))|\le|f(x)|\le\varepsilon.$
>
> 若 $|f(x)|\in[\varepsilon,A]$，则 $|f_2(x)|=|f(f(x))|\le q|f(x)|\le q^2A.$
>
> 所以，总有 $|f_2(x)|\le\max\{\varepsilon,q^2A\}.$
>
> 同理，由 $|f_{n-1}(x)|\le\max\{\varepsilon,q^{n-1}A\}$ 可推出 $|f_n(x)|\le\max\{\varepsilon,q^nA\}.$ 故此式对一切 $n$ 成立．由于当 $n\to\infty$ 时，$q^nA\to0$，对 $\varepsilon>0$，$\exists N>0$，$n>N$ 时，$q^nA<\varepsilon$，所以 $|f_n(x)|\le\max\{\varepsilon,q^nA\}=\varepsilon$．证毕．

放大法也要注意根据具体情况，作灵活的处理．

> [!example] 例5.2.13
> 设 $\alpha_n>0$，$\lim_{n\to\infty}\alpha_n=0$，$|u_n(x)|\le\alpha_n\ (x\in I)$ 且 $u_i(x)u_j(x)=0\ (i\ne j)$（$\forall x\in I$）．试证 $\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上一致收敛（这里 $I$ 为任意区间）．

> [!proof]- 证
> $\forall x\in I$，$\{u_n(x)\}$ 至多只有一项不为 $0$．因此（若用 $S(x)$ 表示和函数，$S_n(x)$ 表示部分和）
> $$|S(x)-S_n(x)|\le\sup_{k>n}|u_k(x)|\le\sup_{k>n}\alpha_k\to0\qquad (n\to\infty).$$
>
> 故 $\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上一致收敛．


#### b. 利用 Cauchy 准则判断一致收敛性

> [!note] 要点
> 用 Cauchy 准则判断级数（或函数序列）是否一致收敛完全取决于充分后的"片段"是否能一致地任意小，而无须求出和函数（或极限函数）。
> 
> 如 $\sum_{n=1}^{\infty} u_n(x)$ 在区间 $I$ 上一致收敛的充要条件是：$\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right|<\varepsilon \quad (\forall x\in I, \forall p\in\mathbb{N})。
> $$
> 
> $\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 上非一致收敛的充要条件是：$\exists\varepsilon_0>0$，$\forall N>0$，$\exists n>N$，$\exists x\in I$，$\exists p\in\mathbb{N}$，使得
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right|\ge \varepsilon_0.
> $$
> 
> 特别，若通项 $u_n(x)\neq 0$ ($n\to\infty$) 关于 $x\in I$，则 $\sum_{n=1}^{\infty} u_n(x)$ 非一致收敛。
> 
> 可见："当 $n\to\infty$ 时，$u_n(x)\to 0$（关于 $x\in I$）"是 $\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 中一致收敛的必要条件。因此，若找到 $\{x_n\}\subset I$ 使得 $\{u_n(x_n)\}\nrightarrow 0$ ($n\to\infty$)，则当 $n\to\infty$ 时 $u_n(x)\neq 0$（关于 $x\in I$）。从而 $\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 中非一致收敛。

> [!example] ☆例 5.2.14
> 设 $\{u_n(x)\}$ 为 $[a,b]$ 上的可导函数序列，且在 $[a,b]$ 上有
> $$
> \left|\sum_{k=1}^{n} u'_k(x)\right|\le C， \tag{1}
> $$
> $C$ 是不依赖于 $x$ 和 $n$ 的正数。证明：若 $\sum_{n=1}^{\infty} u_n(x)$ 在 $[a,b]$ 上收敛，则必为一致收敛。
> 
> （华东师范大学）

> [!proof]- 证 I
> 1° $\sum_{n=1}^{\infty} u_n(x)$ 在 $[a,b]$ 上收敛，所以，$\forall x_0\in[a,b]$，$\forall\varepsilon>0$，$\exists N=N(\varepsilon,x_0)>0$，当 $n>N$ 时，有
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x_0)\right|<\frac{\varepsilon}{2} \quad (\forall p\in\mathbb{N})。 \tag{2}
> $$
> 故
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right|\le \left|\sum_{k=n+1}^{n+p} u_k(x)-\sum_{k=n+1}^{n+p} u_k(x_0)\right|+\left|\sum_{k=n+1}^{n+p} u_k(x_0)\right|.
> $$
> 此式右端第一项中，对函数 $\sum_{k=n+1}^{n+p} u_k(x)$ 应用微分中值定理：
> $$
> \begin{aligned}
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right| &\le \left|\sum_{k=n+1}^{n+p} u'_k(\xi)(x-x_0)\right|+\left|\sum_{k=n+1}^{n+p} u_k(x_0)\right| \quad (\xi \text{ 在 } x \text{ 与 } x_0 \text{ 之间}) \\
> &< 2C|x-x_0|+\frac{\varepsilon}{2}.
> \end{aligned}
> $$
> 取 $\delta=\frac{\varepsilon}{4C}$，则 $|x-x_0|<\delta$ 时，有
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right|<\varepsilon \quad (\forall p\in\mathbb{N}，\forall x\in(x_0-\delta,x_0+\delta))。 \tag{3}
> $$
> 
> 至此，虽然式(3)不在整个区间 $[a,b]$ 上同时成立，但在 $x_0$ 的邻域 $(x_0-\delta,x_0+\delta)$ 成立。
> 
> 2°（注意到 $x_0\in[a,b]$ 是任意的。于是，对 $[a,b]$ 上每一点，都采用上述步骤。）
> 
> $\forall x_\lambda\in[a,b]$，$\exists N(\varepsilon,x_\lambda)>0$，当 $n>N$，$x\in(x_\lambda-\delta,x_\lambda+\delta)$ 时有 $\left|\sum_{k=n+1}^{n+p} u_k(x)\right|<\varepsilon$ ($\forall p\in\mathbb{N}$)。如此，$\{(x_\lambda-\delta,x_\lambda+\delta)|x_\lambda\in[a,b]\}$ 组成了 $[a,b]$ 上的一个开覆盖。
> 
> 由有限覆盖定理，其中存在有限子覆盖。不妨设之为 $\{(x_i-\delta,x_i+\delta)\}_{i=1}^{r}$。令 $N=\max\{N(\varepsilon,x_i)\}$，则当 $n>N$时，$\forall x\in[a,b]$，有 $\left|\sum_{k=n+1}^{n+p} u_k(x)\right|<\varepsilon$ ($\forall p\in\mathbb{N}$)。

> [!proof]- 证 II
> $\forall\varepsilon>0$，取 $m$ 充分大，将 $[a,b]$ $m$ 等分，使分得的每个小区间长度 $\delta<\frac{\varepsilon}{4C}$。
> 
> 顺次以 $x_1,x_2,\cdots,x_m$ 表示各小区间的中点。因 $\sum_{n=1}^{\infty} u_n(x)$ 收敛，对 $\varepsilon>0$，$\exists N_i=N(\varepsilon,x_i)$，当 $n>N_i$ 时有
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x_i)\right|<\frac{\varepsilon}{2} \quad (\forall p\in\mathbb{N})。 \tag{4}
> $$
> 令 $N=\max\{N_1,N_2,\cdots,N_m\}$，则 $\forall x\in[a,b]$（不妨设 $x$ 位于第 $i$ 个小区间，$i\in\{1,2,\cdots,m\}$），有
> $$
> \begin{aligned}
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right| &= \left|\sum_{k=n+1}^{n+p} u_k(x_i)+\int_{x_i}^{x}\left(\sum_{k=n+1}^{n+p} u'_k(t)\right)dt\right| \\
> &\le \left|\sum_{k=n+1}^{n+p} u_k(x_i)\right|+\int_{x_i}^{x}\left|\sum_{k=n+1}^{n+p} u'_k(t)\right|dt \\
> &< \frac{\varepsilon}{2}+2C|x-x_i| \\
> &\le \frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> \end{aligned}
> $$

上面我们看到使用 Cauchy 准则证明一致收敛，十分重要的问题是将"片段"$\sum_{k=n+1}^{n+p} u_k(x)$ 进行变形。作为这种变形的一个重要方法是 Abel 变换。

> [!example] *例 5.2.15
> 设函数序列 $f_0(x), f_1(x), \cdots$ 在区间 $I$ 上有定义，且满足
> 
> i) $|f_0(x)|\le M$;  ii) $\sum_{n=0}^{m} |f_n(x)-f_{n+1}(x)|\le M$, $m=0,1,2,\cdots$，其中 $M$ 是常数。
> 
> 试证：如果级数 $\sum_{n=0}^{\infty} b_n$ 收敛，则级数 $\sum_{n=0}^{\infty} b_n f_n(x)$ 必在区间 $I$ 上一致收敛。（吉林大学）

> [!proof]- 证
> 因 $\sum_{n=0}^{\infty} b_n$ 收敛，故 $\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，$\left|\sum_{k=n+1}^{n+p} b_k\right|<\varepsilon$ ($\forall p\in\mathbb{N}$)。
> 
> 记 $S_i=\sum_{k=n+1}^{n+i} b_k$，于是 $|S_i|<\varepsilon$ ($i=1,2,\cdots$)。故
> $$
> \begin{aligned}
> \left|\sum_{k=n+1}^{n+p} b_k f_k(x)\right| &\overset{\text{仿用 Abel 变换}}{=} \left|S_1 f_{n+1}+(S_2-S_1)f_{n+2}+\cdots+(S_p-S_{p-1})f_{n+p}\right| \\
> &= \left|S_1(f_{n+1}-f_{n+2})+\cdots+S_{p-1}(f_{n+p-1}-f_{n+p})+S_p f_{n+p}\right| \\
> &\le |S_1||f_{n+1}-f_{n+2}|+\cdots+|S_{p-1}||f_{n+p-1}-f_{n+p}|+|S_p||f_{n+p}| \\
> &\le \varepsilon\left(\sum_{k=n+1}^{n+p-1}|f_k-f_{k+1}|+|f_{n+p}|\right)
> \end{aligned}
> $$
> 
> 因为 $\sum_{k=n+1}^{n+p-1}|f_k-f_{k+1}|\le \sum_{k=0}^{n+p-1}|f_k-f_{k+1}|\le M$（条件 ii），故
> $$
> \begin{aligned}
> |f_{n+p}| &= |f_0-f_0+f_1-f_1+\cdots+f_{n+p-1}-f_{n+p-1}+f_{n+p}| \\
> &\le |f_0|+|f_0-f_1|+\cdots+|f_{n+p-1}-f_{n+p}| \\
> &\le 2M.
> \end{aligned}
> $$
> 
> 所以，$\left|\sum_{k=n+1}^{n+p} b_k f_k(x)\right|<\varepsilon\cdot 3M$ ($\forall p\in\mathbb{N}$)。故 $\sum_{k=0}^{\infty} b_k f_k(x)$ 在 $I$ 上一致收敛。

## 用 Cauchy 准则证明非一致收敛

> [!example] ☆例 5.2.16
> 求证：级数 $\frac{\sin x}{1}+\frac{\sin 2x}{2}+\cdots+\frac{\sin nx}{n}+\cdots$ 在 $x=0$ 的邻域内非一致收敛。

> [!note]- 分析
> 我们的目标是证明每个标号 $n$ 之后均有"片段"$\ge\varepsilon$（某个事先指定的正数）。片段 $\sum_{k=n+1}^{n+p}\frac{\sin kx}{k}$ 的麻烦在于每项有因子 $\sin kx$，否则 $\sum_{k=n+1}^{n+p}\frac{1}{k}$ 是调和级数 $\sum_{n=1}^{\infty}\frac{1}{n}$ 的片段，例如取 $p=n$，则片段 $\sum_{k=n+1}^{2n}\frac{1}{k}\ge n\cdot\frac{1}{2n}=\frac12$。
> 
> 另一方面，我们看到函数 $\sin x$ 在 $[\frac{\pi}{4},\frac{\pi}{2}]$ 上恒大于等于 $\sin\frac{\pi}{4}$，因此我们只要保持使 $kx\in[\frac{\pi}{4},\frac{\pi}{2}]$，那么 $\sum_{k=n+1}^{2n}\frac{\sin kx}{k}\ge \sin\frac{\pi}{4}\cdot\sum_{k=n+1}^{2n}\frac{1}{k}\ge \frac12\sin\frac{\pi}{4}$。
> 
> 如此，我们想到取 $x=x_n=\frac{\pi}{4n}$，从而 $\forall n\in\mathbb{N}$ 有 $\left|\sum_{k=n+1}^{2n}\frac{\sin kx_n}{k}\right|=\left|\sum_{k=n+1}^{2n}\frac{\sin\left(k\cdot\frac{\pi}{4n}\right)}{k}\right|$。这是因为 $n+1\le k\le 2n$，所以
> $$
> \frac{\pi}{4}<(n+1)\frac{\pi}{4n}\le k\cdot\frac{\pi}{4n}\le 2n\frac{\pi}{4n}=\frac{\pi}{2},
> $$
> 即 $k\cdot\frac{\pi}{4n}\in[\frac{\pi}{4},\frac{\pi}{2}]$。故对 $\varepsilon_0=\frac{1}{4}\sqrt{2}$，$\forall n$，有片段
> $$
> \left|\sum_{k=n+1}^{2n}\frac{\sin kx_n}{k}\right|\ge \sum_{k=n+1}^{2n}\frac{1}{k}\sin\frac{\pi}{4}>\frac12\sin\frac{\pi}{4}=\frac14\sqrt{2}=\varepsilon_0，
> $$
> 级数非一致收敛。简洁的证明请读者写出。

> [!example] 例 5.2.17
> 证明：$\sum_{n=1}^{\infty}\frac{1}{n}\left[e^x-\left(1+\frac{x}{n}\right)^n\right]$ 在 $(0,+\infty)$ 上非一致收敛。（北京大学）

> [!proof]- 证
> 通项 $\frac{1}{n}\left[e^x-\left(1+\frac{x}{n}\right)^n\right]\to 0$（当 $n\to\infty$ 时），$x\in(0,+\infty)$。事实上，$\forall n\in\mathbb{N}$，当 $x\to+\infty$ 时，易知 $\frac{1}{n}\left[e^x-\left(1+\frac{x}{n}\right)^n\right]\to+\infty$。所以该级数在 $(0,+\infty)$ 上非一致收敛。

> [!exercise] new 练习1
> 试证：函数项级数 $\sum_{n=1}^{\infty}\frac{n^{n+2}}{(1+nx)^n}$ 在 $(1,+\infty)$ 内收敛，在 $(1,+\infty)$ 内非一致收敛，但和函数在 $(1,+\infty)$ 内连续。（武汉大学）

> [!hint]- 提示
> 1) $0<\frac{n^{n+2}}{(1+nx)^n}<\frac{n^{n+2}}{(nx)^n}=\frac{n^2}{x^n}\le\frac{n^2}{\alpha^n}$（$x\ge\alpha>1$），而 $\sqrt[n]{\frac{n^2}{\alpha^n}}\to\frac{1}{\alpha}<1$。因此，级数在 $(1,+\infty)$ 内逐点收敛，内闭一致收敛，且和函数连续。
> 
> 2) 令 $x_n=\frac{1}{n}+1$（$n\to\infty$），$\frac{n^{n+2}}{(1+n x_n)^n}=\frac{n^2}{\left(1+\frac{2}{n}\right)^n}\to+\infty$，说明级数在 $(1,+\infty)$ 内非一致收敛。（事实上：取 $\varepsilon_0=\frac12$，当 $n$ 充分大时，$\frac{n^{n+2}}{(1+n x_n)^n}>1$，于是（当 $p>1$ 时）$\sum_{k=n}^{n+p}\frac{k^{k+2}}{(1+kx_k)^k}>\frac{n^{n+2}}{(1+n x_n)^n}>\frac12=\varepsilon_0$。）

> [!exercise] new 练习2
> 讨论级数 $\sum_{n=1}^{\infty}\frac{\sqrt{n+1}-\sqrt{n}}{n^x}$ 的收敛性与一致收敛性。（浙江大学）

> [!solution]- 解
> 1°（在 $(\frac12,+\infty)$ 内收敛，且内闭一致收敛。）因 $\forall\alpha>\frac12$，当 $x\ge\alpha$ 时，
> $$
> \left|\frac{\sqrt{n+1}-\sqrt{n}}{n^x}\right|=\frac{1}{n^x(\sqrt{n+1}+\sqrt{n})}\le\frac{1}{n^{x+\frac12}}\le\frac{1}{n^{\alpha+\frac12}} \quad (n\ge 1)。
> $$
> 而 $\sum_{n=1}^{\infty}\frac{1}{n^{\alpha+\frac12}}$ 收敛，故级数在 $[\alpha,+\infty)$ 上一致收敛，又因 $\alpha>\frac12$ 任意，所以在 $(\frac12,+\infty)$ 内逐点收敛，且内闭一致收敛。
> 
> 2°（在 $(\frac12,+\infty)$ 内非一致收敛。）我们已知 $\sum_{n=1}^{\infty}\frac{1}{n}$ 发散，故 $\forall n\in\mathbb{N}$，当 $m>n$，$m$ 充分大时，有 $\sum_{k=n+1}^{m}\frac{1}{k}>2$。故当 $x\to(\frac12)^+$ 时，
> $$
> \begin{aligned}
> \left|\sum_{k=n+1}^{m}\frac{\sqrt{k+1}-\sqrt{k}}{k^x}\right| &= \sum_{k=n+1}^{m}\frac{1}{k^x(\sqrt{k+1}+\sqrt{k})} \\
> &\ge \sum_{k=n+1}^{m}\frac{1}{k^{x+\frac12}} \\
> &\xrightarrow[x\to(\frac12)^+]{} \sum_{k=n+1}^{m}\frac{1}{k}>2.
> \end{aligned}
> $$
> 可见若取 $\varepsilon_0=1$，则 $\forall n\in\mathbb{N}$，总 $\exists m>n$，$x_n>\frac12$（且与 $\frac12$ 充分接近），使得 $\left|\sum_{k=n+1}^{m}\frac{\sqrt{k+1}-\sqrt{k}}{k^x}\right|\ge \varepsilon_0=1$。这表明原级数在 $(\frac12,+\infty)$ 内非一致收敛。


#### c. 利用常用的判别法证明一致收敛性

这里所说的常用判别法指：M判别法（即 Weierstrass 判别法）、Abel 判别法、Dirichlet 判别法及 Dini 判别法。下面分别加以讨论。

## 1）M判别法

> [!note] 要点
> 根据 M判别法，要证明 $\sum_{n=1}^{\infty}u_n(x)$ 在区间 $I$ 上一致收敛，只要找到收敛的优级数。即：将通项 $u_n(x)$ 放大，使
> $$
> |u_n(x)|\leq M_n，\forall x\in I。
> $$
> 若级数 $\sum_{n=1}^{\infty}M_n$ 收敛，则 $\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上一致收敛（$\sum_{n=1}^{\infty}M_n$ 称为它的优级数）。
> 
> 求优级数的方法，除有些可以用观察法之外，通常还可用如下方法：求 $u_n(x)$ 在区间 $I$ 上的最大值；利用已知的不等式；用 Taylor 公式、微分中值定理等各种方法变形再放大。

### 利用 $u_n(x)$ 的最大值进行放大

> [!example] ☆例 5.2.18
> 证明 $\sum_{n=1}^{\infty}x^n(1-x)^2$ 在 $[0,1]$ 上一致收敛。（安徽大学）

> [!proof]- 证明
> 对通项 $u_n(x)=x^n(1-x)^2$ 求导，令
> $$
> u_n'(x)=n x^{n-1}(1-x)^2-2x^n(1-x)=0，
> $$
> 得出全部驻点 $x=0,1,\frac{n}{n+2}$。因 $u_n\left(\frac{n}{n+2}\right)>u_n(0)=u_n(1)=0$，所以 $u_n\left(\frac{n}{n+2}\right)$ 为 $u_n(x)$ 在 $[0,1]$ 上的最大值。如此
> $$
> x^n(1-x)^2\leq\left(\frac{n}{n+2}\right)^n\left(1-\frac{n}{n+2}\right)^2\leq\left(1-\frac{n}{n+2}\right)^2=\left(\frac{2}{n+2}\right)^2\leq\frac{4}{n^2}。
> $$
> 因 $\sum_{n=1}^{\infty}\frac{4}{n^2}$ 收敛，所以 $\sum_{n=1}^{\infty}x^n(1-x)^2$ 在 $[0,1]$ 上一致收敛。

> [!exercise] 练习
> 试证函数项级数 $\sum_{n=1}^{\infty}x^3e^{-n x^2}$ 在 $[0,+\infty)$ 上一致收敛。（北京大学）

> [!hint]- 提示
> 求通项的最大值可得 $\sum_{n=1}^{\infty}x^3 e^{-n x^2}$ 的优级数：$\sum_{n=1}^{\infty}\left(\frac{3}{2n}\right)^{\frac32}e^{-\frac32}$。

### 利用已知的不等式进行放大

> [!example] 例 5.2.19
> 证明 $\sum_{n=1}^{\infty}\arctan\frac{2x}{x^2+n^3}$ 在 $(-\infty,+\infty)$ 内一致收敛。

> [!hint]- 提示
> $\left|\arctan\frac{2x}{x^2+n^3}\right|\leq\frac{2|x|}{x^2+n^3}=\frac{\sqrt{x^2 n^3}}{(x^2+n^3)/2}\cdot\frac{1}{n^{3/2}}\leq\frac{1}{n^{3/2}}$。

> [!example] ☆例 5.2.20
> 证明函数项级数 $\sum_{n=1}^{\infty}\frac{1}{n}\left[e^x-\left(1+\frac{x}{n}\right)^n\right]$ 在任意有限区间 $[a,b]$ 上一致收敛。（北京大学）

> [!hint]- 提示
> 可利用例 3.4.5 中的不等式，如设 $|a|$，$|b|\leq M$，则当 $n$ 充分大时，
> $$
> 1/n [e^x-(1+x/n)^n]\leq x^2/n^2 e^x\leq M^2/n^2 e^M。
> $$

### 利用 Taylor 公式等进行变形后放大

> [!example] ☆例 5.2.21
> 设一元函数 $f$ 在 $x=0$ 的邻域里有二阶连续导数，$f(0)=0$，$0<f'(0)<1$。函数 $f_n$ 是 $f$ 的 $n$ 次复合，证明级数 $\sum_{n=1}^{\infty} f_n(x)$ 在 $x=0$ 的邻域里一致收敛。（中国科学技术大学）

> [!note] 分析
> 因为 $f$ 在 $x=0$ 的邻域内有二阶连续导数，当 $\delta>0$ 充分小时，在 $[-\delta,\delta]$ 上 $f''(x)$ 连续，且
> $$
> f(x)=f(0)+f'(0)x+\frac{1}{2!} f''(\xi)x^2=f'(0)x+\frac{1}{2!} f''(\xi)x^2 \quad（|\xi|<|x|\leq\delta）。
> $$
> 既然 $f''(x)$ 在 $[-\delta,\delta]$ 上连续，所以 $\exists M>0$，使得 $|f''(x)|\leq M$。于是
> $$
> |f(x)|\leq|x|(f'(0)+\frac{1}{2} M\delta)\equiv q\cdot|x|。 \quad (1)
> $$
> （这里记 $f'(0)+\frac{1}{2} M\delta=q$。）重复使用得
> $$
> |f_2(x)|=|f(f(x))|\leq q|f(x)|\leq q\cdot q|x|=q^2|x|<q^2\delta，
> $$
> $$
> |f_n(x)|\leq q|f_{n-1}(x)|\leq\cdots\leq q^n|x|\leq q^n\delta。 \quad (2)
> $$
> 为使级数 $\sum_{n=1}^{\infty} q^n\delta$ 收敛，必须使得正数 $q=f'(0)+\frac{1}{2} M\delta<1$。但 $0<f'(0)<1$，故只要从式(1)开始把邻域进一步缩小，取 $\delta_1<\delta$，用 $\delta_1$ 代替 $\delta$ 使得 $\frac{1}{2} M\delta_1<1-f'(0)$（即 $\delta_1<\frac{2}{M(1-f'(0))}$），则 $q_1=f'(0)+\frac{1}{2} M\delta_1<1$。从而式(2)成为 $|f_n(x)|\leq q_1^n\delta_1$（当 $|x|<\delta_1<\delta$ 时），可知 $\sum_{n=1}^{\infty} f_n(x)$ 在 $x=0$ 的邻域里一致收敛（简洁的证明请读者写出）。

> [!example] 例 5.2.22
> 证明 $\sum_{n=1}^{\infty} x^2 e^{-nx}$ 在 $(0,+\infty)$ 内一致收敛。（西南大学）

> [!hint]- 提示
> $x^2e^{-nx}=x^2/(1+nx+n^2x^2/2+\cdots)<x^2/(n^2x^2/2)=2/n^2$。

## 2）Abel 判别法与 Dirichlet 判别法

> [!note] 要点
> 根据 Abel 判别法与 Dirichlet 判别法，要证明级数 $\sum_{n=1}^{\infty} u_n(x)$ 一致收敛，关键是将通项写成两个因子相乘，使之符合判别法的条件。即令 $u_n(x)=a_n(x)\cdot b_n(x)$，
> 
> 若 i）$\sum_{n=1}^{\infty} a_n(x)$ 在 $I$ 上一致收敛；
> 
> ii）$\{b_n(x)\}$ 一致有界，且对每个固定的 $x$，$\{b_n(x)\}$ 关于 $n$ 单调，
> 
> 则由 Abel 判别法，$\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 上一致收敛。
> 
> 若 i）$\sum_{k=1}^n a_k(x)$ 关于 $x$ 与 $n$ 一致有界；
> 
> ii）$b_n(x)$ 对每个固定的 $x$，关于 $n$ 单调，且 $n\to\infty$ 时 $b_n(x)\to 0$（于 $I$ 上），
> 
> 则由 Dirichlet 判别法，$\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 上一致收敛。

> [!example] 例 5.2.23
> 假设 $b>0$，$a_1$，$a_2$，…均为常数，且级数 $\sum_{n=1}^{\infty} a_n$ 收敛，试证：
> $$
> \sum_{n=1}^{\infty} a_n \frac{1}{n!} \int_0^x t^n e^{-t}dt \text{ 在 }[0,b]\text{ 上一致收敛。}
> $$

> [!proof]- 证明
> 1° $\sum_{n=1}^{\infty} a_n$ 收敛，自然关于 $x$ 一致收敛。
> 
> 2° $0\leq\frac{1}{n!} \int_0^x t^n e^{-t}dt\leq\frac{1}{n!} \int_0^{+\infty} t^n e^{-t}dt=1$（$\forall n\in\mathbb{N}$，$\forall x\in[0,b]$），即 $\frac{1}{n!} \int_0^x t^n e^{-t}dt$ 一致有界。
> 
> 3° 当 $n>b$ 时，$\forall x\in[0,b]$，
> $$
> \frac{1}{(n+1)!} \int_0^x t^{n+1}e^{-t}dt = \frac{1}{n!} \int_0^x \frac{t}{n+1} \cdot t^n e^{-t}dt \leq \frac{1}{n!} \int_0^x t^n e^{-t}dt，
> $$
> 即 $\frac{1}{n!} \int_0^x t^n e^{-t}dt$ 关于 $n$ 单调。
> 
> 根据 Abel 判别法，$\sum_{n=1}^{\infty} a_n \frac{1}{n!} \int_0^x t^n e^{-t}dt$ 在 $[0,b]$ 上一致收敛。

> [!example] ☆例 5.2.24
> 证明：级数 $\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}$ 在任何有限区间 $[a,b]$ 上一致收敛，但在任何一点 $x_0$ 处不绝对收敛。（四川大学）

第二结论根据 $\sum_{n=1}^{\infty} \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}=\sum_{n=1}^{\infty} \frac{e^{x^2}}{n^{3/2}}+\sum_{n=1}^{\infty} \frac{1}{n}$，明显成立，这里只证第一结论。

> [!proof]- 证Ⅰ
> 1° $|\sum_{k=1}^n (-1)^k|\leq 2$（$n=1,2,\ldots$）。
> 
> 2° $\frac{e^{x^2}+\sqrt{n}}{n^{3/2}}=\frac{e^{x^2}}{n^{3/2}}+\frac{1}{n} \geq \frac{e^{x^2}}{(n+1)^{3/2}}+\frac{1}{n+1}$（$n=1,2,\ldots$），即 $\frac{e^{x^2}+\sqrt{n}}{n^{3/2}}$ 关于 $n$ 单调下降。
> 
> 3° 当 $x\in[a,b]$ 时，$|\frac{e^{x^2}+\sqrt{n}}{n^{3/2}}|\leq\frac{e^{c^2}+\sqrt{n}}{n^{3/2}}\to 0$（$n\to\infty$）（其中 $c=\max\{|a|,|b|\}$）。因此 $\frac{e^{x^2}+\sqrt{n}}{n^{3/2}}\to 0$（当 $n\to\infty$ 时）。
> 
> 根据 Dirichlet 判别法，$\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}$ 在 $[a,b]$ 上一致收敛。

> [!proof]- 证Ⅱ
> $\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}=\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}}{n^{3/2}}+\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$。
> 
> 因为级数 $\sum_{n=1}^{\infty} (-1)^n \frac{1}{n^{3/2}}$ 与 $\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ 皆为 Leibniz 级数，故收敛，自然关于 $x$ 一致收敛。又因为 $e^{x^2}$ 在 $[a,b]$ 上为有界函数，一致收敛级数各项同乘某有界函数后仍一致收敛。所以，$\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}}{n^{3/2}}$ 一致收敛。进而两个一致收敛级数的和级数
> $$
> \sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}
> $$
> 也一致收敛。

> [!proof]- 证Ⅲ
> $\forall x\in[a,b]$，$\sum_{n=1}^{\infty} (-1)^n \frac{e^{x^2}+\sqrt{n}}{n^{3/2}}$ 是 Leibniz 级数，故收敛，且余和的绝对值：
> $$
> |r_n(x)|=|\frac{e^{x^2}+\sqrt{n+1}}{(n+1)^{3/2}}|\leq\frac{e^{c^2}}{(n+1)^{3/2}}+\frac{1}{n+1}\to 0 \quad（n\to\infty）
> $$
> （其中 $c=\max\{|a|,|b|\}$）。故 $r_n(x)\Rightarrow 0$（$n\to\infty$）于 $[a,b]$。因此级数在 $[a,b]$ 上一致收敛。

> [!note] 注
> 本例说明一致收敛不意味着绝对收敛。

> [!example] 例 5.2.25
> 判断级数 $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^2}{(1+x^2)^n}$ 在 $(-\infty,+\infty)$ 内的一致收敛性。

> [!hint]- 提示
> 考虑 $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} \cdot \frac{nx^2}{(1+x^2)^n}$。

Abel 判别法与 Dirichlet 判别法有时可连环使用。如

> [!example] ☆例 5.2.26
> 证明：$\sum_{n=1}^{\infty} \frac{(1-x) x^n}{1-x^{2n}} \sin nx$ 在 $(\frac{1}{2},1)$ 内一致收敛。

> [!proof]- 证明
> 因
> $$
> \sum_{n=1}^{\infty} \frac{(1-x) x^n}{1-x^{2n}} \sin nx = \sum_{n=1}^{\infty} \frac{1}{1+x^n} \cdot \frac{(1-x)x^n}{1-x^n} \sin nx，
> $$
> 其中 $\frac{1}{1+x^n}$ 关于 $n$ 单调，且一致有界：$|\frac{1}{1+x^n}|\leq 1$。根据 Abel 判别法，要证明该级数一致收敛，只要证明级数 $\sum_{n=1}^{\infty} \frac{(1-x)x^n}{1-x^n} \sin nx$ 在 $(\frac{1}{2},1)$ 内一致收敛。但是
> 
> 1° 
> $$
> |\sum_{k=1}^n \sin kx| = \left| \frac{1}{2 \sin(x/2)} \sum_{k=1}^n 2 \sin(x/2) \sin kx \right|
> $$
> $$
> = \left| \frac{1}{2 \sin(x/2)} \sum_{k=1}^n [\cos(k-\frac{1}{2})x - \cos(k+\frac{1}{2})x] \right|
> $$
> $$
> = \left|\frac{\cos(\frac{1}{2} x)-\cos(nx+\frac{x}{2})}{2 \sin(x/2)}\right|
> $$
> $$
> \leq \frac{1}{\sin(x/2)} \leq \frac{1}{\sin(\frac{1}{4})} \quad（x\in(\frac{1}{2},1)，n=1,2,\ldots）。 \quad (1)
> $$
> （此即表明，$\sum_{k=1}^n \sin kx$ 在 $(\frac{1}{2},1)$ 内一致有界。）
> 
> 2° $\frac{(1-x)x^n}{1-x^n}=\frac{x^n}{1+x+x^2+\cdots+x^{n-1}}$，$x\in(\frac{1}{2},1)$，可见它关于 $n$ 单调。又
> $$
> 0\leq\frac{x^n}{1+x+\cdots+x^{n-1}}\leq\frac{x^n}{nx^{n-1}}<\frac{1}{n}\to 0 \quad（x\in(\frac{1}{2},1)），
> $$
> 即在 $(\frac{1}{2},1)$ 上，$\frac{(1-x)x^n}{1-x^n}\downarrow$ 且 $\frac{(1-x)x^n}{1-x^n}\Rightarrow 0$（当 $n\to\infty$ 时）。于是根据 Dirichlet 判别法，级数 $\sum_{n=1}^{\infty} \frac{(1-x)x^n}{1-x^n} \sin nx$ 在 $(\frac{1}{2},1)$ 内一致收敛。证毕。

> [!note] 注
> 若将区间改为 $[0,1)$，上面证法中，式(1)不再成立。但假如我们将 $[0,1)$ 分为两段，在 $[0,\frac{1}{2}]$ 上，
> $$
> \left|\frac{(1-x)x^n}{1-x^{2n}} \sin nx\right|\leq\frac{1/2^n}{1-1/2^{2n}}。
> $$
> 利用 M 判别法容易证明该级数在 $[0,\frac{1}{2}]$ 上一致收敛；在 $(\frac{1}{2},1)$ 内，应用本题的结果。于是可知原级数在 $[0,1)$ 上一致收敛。

## 3）Dini 定理及其应用

> [!theorem] ☆例 5.2.27（Dini 定理）
> 设 $u_n(x)\geq 0$ 在 $[a,b]$ 上连续，$n=1,2,\ldots$，又 $\sum_{n=1}^{\infty} u_n(x)$ 在 $[a,b]$ 上收敛于连续函数 $f(x)$，则 $\sum_{n=1}^{\infty} u_n(x)$ 在 $[a,b]$ 上一致收敛于 $f(x)$。（东北师范大学，南京大学）

> [!proof]- 证Ⅰ（从正面证明）
> （已知 $u_n(x)\geq 0$（$n=1,2,\ldots$），$\sum_{n=1}^{\infty} u_n(x)=f(x)$，因此 $\forall x\in[a,b]$，$S_n(x)=\sum_{k=1}^n u_k(x)\nearrow f(x)$（$n\to\infty$）。$r_n(x)\equiv f(x)-S_n(x)\searrow 0$。我们要证明 $S_n(x)\to f(x)$（$n\to\infty$）在 $[a,b]$ 上，只需证明 $r_n(x)\to 0$（$n\to\infty$）于 $[a,b]$。因此问题在于对任意 $\varepsilon>0$，找到 $N>0$，使得当 $n>N$ 时，$|r_n(x)|<\varepsilon$（$\forall x\in[a,b]$）。我们的做法是先在局部里找到 $N$，然后在整体上找出 $N$。）
> 
> 已知 $r_n(x)\searrow 0$，所以 $\forall n\in\mathbb{N}$，$\forall x\in[a,b]$，有 $r_n(x)\geq 0$，且 $\forall x_0\in[a,b]$，$\forall\varepsilon>0$，$\exists N(x_0,\varepsilon)>0$，当 $n\geq N(x_0,\varepsilon)$ 时，有 $0\leq r_n(x_0)<\varepsilon$。将 $n$ 固定，令 $n=N_0=N(x_0,\varepsilon)$，因为 $r_n(x)\equiv f(x)-S_n(x)$ 在 $[a,b]$ 上连续。既然 $r_n(x_0)<\varepsilon$，所以 $\exists\delta_0>0$，当 $x\in(x_0-\delta_0,x_0+\delta_0)$ 时，$r_n(x)<\varepsilon$，从而当 $n>N_0$ 时有 $r_n(x)<\varepsilon$，即 $|r_n(x)|<\varepsilon$（$x\in(x_0-\delta_0,x_0+\delta_0)$）。
> 
> （至此，我们虽然在整个 $[a,b]$ 上未能找到公共的 $N>0$，使得 $n>N$ 时，$|r_n(x)|<\varepsilon$ 在 $[a,b]$ 上同时成立，但我们已能在任一点 $x_0\in[a,b]$ 的某个邻域里找到一个相应的 $N_0$，使得 $n>N_0$ 时，在此邻域里恒有 $|r_n(x)|<\varepsilon$。剩下的问题是从局部转化为整体。这就要用到有限覆盖定理。）
> 
> 如上所述，对每个点 $x_\lambda\in[a,b]$，可找到相应的邻域 $(x_\lambda-\delta_\lambda,x_\lambda+\delta_\lambda)$ 及对应的 $N_\lambda$，使得 $n>N_\lambda$ 时，对 $x\in(x_\lambda-\delta_\lambda,x_\lambda+\delta_\lambda)$ 恒有 $|r_n(x)|<\varepsilon$。如此，$\{(x_\lambda-\delta_\lambda,x_\lambda+\delta_\lambda)|x_\lambda\in[a,b]\}$ 构成了 $[a,b]$ 的一个开覆盖，从而必存在有限子覆盖。不妨记它们为 $\{(x_1-\delta_1,x_1+\delta_1),\ldots,(x_r-\delta_r,x_r+\delta_r)\}$，于是 $\forall x\in[a,b]$，总 $\exists i\in\{1,2,\ldots,r\}$ 使得 $x\in(x_i-\delta_i,x_i+\delta_i)$，取 $N=\max\{N_1,N_2,\ldots,N_r\}$，那么当 $n>N$ 时，恒有 $|r_n(x)|<\varepsilon$。证毕。

> [!proof]- 证Ⅱ（反证法）
> 若在 $[a,b]$ 上非一致收敛，则 $\exists\varepsilon_0>0$，使得 $\forall N>0$，$\exists n>N$，$\exists x\in[a,b]$ 使得 $|r_n(x)|\geq\varepsilon_0$。取 $N=1$，知 $\exists n_1>1$，$\exists x_1\in[a,b]$，使得 $|r_{n_1}(x_1)|\geq\varepsilon_0$；令 $N=n_1$，知 $\exists n_2>n_1$，$\exists x_2\in[a,b]$，使得 $|r_{n_2}(x_2)|\geq\varepsilon_0$；如此下去，我们得到 $\{n\}$ 的子列 $n_1<n_2<\cdots<n_k<\cdots$，使得
> $$
> |r_{n_k}(x_k)|\geq\varepsilon_0 \quad（k=1,2,\ldots）。 \quad (1)
> $$
> 利用致密性原理（即 Bolzano-Weierstrass 定理），在有界数列 $\{x_k\}$ 里，存在收敛子列 $\{x_{k_j}\}\to x_0\in[a,b]$（当 $j\to\infty$ 时）。因 $|r_n(x)|\downarrow$（关于 $n$），所以 $\forall m\in\mathbb{N}$，当 $n_{k_j}>m$ 时，有 $|r_m(x_{k_j})|\geq|r_{n_{k_j}}(x_{k_j})|\geq\varepsilon_0$。由于 $r_m(x)=f(x)-S_m(x)$ 连续，所以当 $j\to\infty$ 时，在 $|r_m(x_{k_j})|\geq\varepsilon_0$ 里取极限，知 $|r_m(x_0)|\geq\varepsilon_0$（$\forall m\in\mathbb{N}$），与 $\sum_{n=1}^{\infty} u_n(x)$ 在 $[a,b]$ 上收敛矛盾。证毕。

> [!note] 注
> Dini 定理条件 $u_n(x)\geq 0$（$n=1,2,\ldots$）改变为："固定 $x$ 时，各 $u_n(x)$ 保持同号（当 $x$ 变化时 $u_n(x)$ 可以变号）"时，结论仍然成立。此时 $x$ 固定，令 $n\to\infty$，仍有 $|r_n(x)|\to 0$；上述证明适当修改后，依然有效。

> [!example] ☆例 5.2.28
> 在区间 $[0,1]$ 上：
> 
> 1）证明函数序列 $(1+x/n)^n$（$n=1,2,\ldots$）一致收敛；
> 
> 2）证明函数序列 $f_n(x)=\frac{1}{e^{x/n}+(1+x/n)^n}$（$n=1,2,\ldots$）一致收敛；
> 
> 3）求出极限 $\lim_{n\to\infty}\int_0^1 \frac{dx}{e^{x/n}+(1+x/n)^n}$。（武汉大学）

> [!proof]- 证明
> 1）证Ⅰ：当 $n\to\infty$ 时，$(1+x/n)^n \nearrow e^x$，且全都在 $[0,1]$ 上连续，故由 Dini 定理知
> $$
> (1+x/n)^n \Rightarrow e^x。
> $$
> 
> 证Ⅱ：由 $[e^x-(1+x/n)^n]'_x=e^x-(1+x/n)^{n-1}>0$，知 $e^x-(1+x/n)^n \nearrow$（关于 $x$），故当 $x\in[0,1]$ 时，
> $$
> 0\leq e^x-(1+x/n)^n\leq e-(1+1/n)^n\to 0 \quad（n\to\infty）。
> $$
> 所以在 $[0,1]$ 上，$(1+x/n)^n \Rightarrow e^x$（$n\to\infty$）。
> 
> 2）由于当 $x\in[0,1]$ 时，
> $$
> \left| \frac{1}{1+e^x} - \frac{1}{e^{x/n}+(1+x/n)^n} \right|
> $$
> $$
> = \left| \frac{e^{x/n}+(1+x/n)^n-1-e^x}{(1+e^x)(e^{x/n}+(1+x/n)^n)} \right|
> $$
> $$
> \leq |(1+x/n)^n-e^x| + |e^{x/n}-1|
> $$
> $$
> = e^x-(1+x/n)^n + e^{1/n}-1 \to 0 \quad（n\to\infty），
> $$
> 因此，在 $[0,1]$ 上，$\frac{1}{e^{x/n}+(1+x/n)^n} \Rightarrow \frac{1}{1+e^x}$（当 $n\to\infty$ 时）。
> 
> 3）由 2）知，可在积分号下取极限：
> $$
> \lim_{n\to\infty}\int_0^1 \frac{dx}{e^{x/n}+(1+x/n)^n}
> $$
> $$
> =\int_0^1 \frac{1}{1+e^x} dx
> $$
> $$
> =\int_0^1 \frac{d(e^x)}{e^x(1+e^x)}
> $$
> $$
> =1+\frac{\ln 2}{1+e}。
> $$


#### d. 利用一致有界与等度连续证明一致收敛性

> [!example] ☆例 5.2.29
> 设 $\{f_n(x)\}$ 是区间 $(a,b)$ 内的连续函数序列，并且对任一 $x_0\in(a,b)$，$\{f_n(x_0)\}$ 都是有界的. 证明：$\{f_n(x)\}$ 在 $(a,b)$ 的某一非空子区间上一致有界.（北京大学，云南大学）

> [!proof]- 证
> （反证法）若 $\{f_n(x)\}$ 在 $(a,b)$ 内任何非空子区间上都不一致有界，那么在 $(a,b)$ 内就可找到一个区间套 $\Delta_1\supset\Delta_2\supset\ldots\supset\Delta_n\supset\ldots$，使得在 $\Delta_n$ 上恒有 $f_n(x)>n$，如此在区间套的公共点 $x_0$ 上，$\{f_n(x_0)\}$ 无界. 与已知条件矛盾.
>
> 假设 $\{f_n(x)\}$ 在任何（非空）子区间上都不一致有界，则 $\exists x_1\in(a,b)$ 及 $n_1\in\mathbb{N}$，使得 $f_{n_1}(x_1)>1$. 又因 $f_{n_1}$ 连续，根据保号性，在含 $x_1$ 的某个闭子区间 $\Delta_1\subset(a,b)$ 上，恒有 $f_{n_1}(x)>1$.
>
> $\{f_n(x)\}$ 在 $\Delta_1$ 上仍不一致有界，所以 $\exists x_2\in\Delta_1$ 及 $n_2\in\mathbb{N}$，使得 $f_{n_2}(x_2)>2$. 根据连续保号性，$\exists$ 闭子区间 $\Delta_2\subset\Delta_1$，使得 $\Delta_2$ 上恒有 $f_{n_2}(x)>2$. 如此下去，便得一串闭区间 $\Delta_1\supset\Delta_2\supset\ldots\supset\Delta_k\supset\ldots$，在 $\Delta_k$ 上恒有 $f_{n_k}(x)>k$.
>
> 利用区间套定理[^1]，$\exists x_0\in\Delta_k\;(k=1,2,\ldots)$ 及 $n_k\in\mathbb{N}$，使得 $f_{n_k}(x_0)>k\;(k=1,2,\ldots)$. 故 $\{f_n(x)\}$ 在 $x_0\in(a,b)$ 处无界. 与已知条件矛盾.

[^1]: 注意，区间套定理要求区间的长度 $|\Delta_n|\to0\;(n\to\infty)$. 但区间长度不趋于零时，公共点仍存在，只是公共点不一定唯一. 这里我们只需公共点存在，无须唯一.

> [!example] 例 5.2.30
> 设 $\{f_n(x)\}$ 在区间 $[0,1]$ 上一致有界，试证存在一个子列，其在 $[0,1]$ 的一切有理点上收敛.

> [!proof]- 证
> 我们知道 $[0,1]$ 的全体有理点可以排成一个数列 $\{a_n\}$（如 $\{a_n\}=\{0,1,\frac12,\frac13,\frac23,\frac14,\frac34,\frac15,\frac25,\frac35,\frac45,\frac16,\ldots\}$）.
>
> 因 $\{f_n(x)\}$ 一致有界，故 $\{f_n(a_1)\}$ 是有界数列. 由致密性原理，其中存在收敛子列. 为了便于叙述，记此收敛子列为 $\{f_{1n}(a_1)\}$，于是 $\{f_{1n}(x)\}\subset\{f_n(x)\}$ 在 $x=a_1$ 处收敛. 同理，因 $\{f_{1n}(a_2)\}$ 是有界数列，又必存在收敛子列 $\{f_{2n}(a_2)\}$. 即 $\{f_{2n}(x)\}\subset\{f_{1n}(x)\}$，$\{f_{2n}(x)\}$ 在 $x=a_1,a_2$ 处都收敛. 如此进行下去，不断地在子列里取子列，使 $\{f_{kn}(x)\}$ 在 $a_1,a_2,\ldots,a_k$ 处收敛，于是得到一串子列：
>
> $$
> \begin{matrix}
> f_{11}(x), & f_{12}(x), & f_{13}(x), & \ldots, & f_{1n}(x), & \ldots\\
> f_{21}(x), & f_{22}(x), & f_{23}(x), & \ldots, & f_{2n}(x), & \ldots\\
> f_{31}(x), & f_{32}(x), & f_{33}(x), & \ldots, & f_{3n}(x), & \ldots\\
> \ldots\ldots\\
> f_{n1}(x), & f_{n2}(x), & f_{n3}(x), & \ldots, & f_{nn}(x), & \ldots\\
> \ldots\ldots
> \end{matrix}
> \qquad\text{（1）}
> $$
>
> 最后用上表的对角线元素组成一个子列 $\{f_{nn}(x)\}$，即 $f_{11}(x),f_{22}(x),f_{33}(x),\ldots,f_{nn}(x),\ldots$，易知此级数在点 $a_i\;(i=1,2,\ldots)$ 处收敛. 事实上，$\forall a_i\;(i\in\{1,2,\ldots\})$，已知（1）中第 $i$ 个子列在 $a_i$ 处收敛，而 $f_{ii}(x),f_{i+1,i+1}(x),\ldots$ 是第 $i$ 个子列的子列，故 $\{f_{nn}(x)\}$ 在 $a_i$ 点收敛. 由此知 $\{f_{nn}(x)\}$ 在 $\{a_1,a_2,\ldots,a_n,\ldots\}$ 上收敛.

**等度连续**

> [!definition] 定义
> 设 $\mathcal{M}$ 是区间 $I$ 上定义的函数族，所谓族 $\mathcal{M}$ 上的函数在 $I$ 上**等度连续**，是指：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x_1,x_2\in I$ 且 $|x_1-x_2|<\delta$ 时，有
> $$|f(x_1)-f(x_2)|<\varepsilon \qquad(\forall f\in\mathcal{M}).$$
>
> 特别，$I$ 上定义的函数序列 $\{f_n(x)\}$ 在 $I$ 上等度连续，是指：$\forall\varepsilon>0$，$\exists\delta>0$，当 $x_1,x_2\in I$ 且 $|x_1-x_2|<\delta$ 时，有
> $$|f_n(x_1)-f_n(x_2)|<\varepsilon \qquad(\forall n\in\mathbb{N}).$$
>
> 显然，若 $\mathcal{M}$ 是有限族（即由有限个函数组成），且 $I$ 为有界闭区间，那么 $\mathcal{M}$ 中每个函数连续，就必然等度连续. 下面会看到，若 $\mathcal{M}$ 为无穷族，$\mathcal{M}$ 中每个成员连续，$\mathcal{M}$ 不见得是等度连续的.

> [!example] 例 5.2.31
> 证明：若序列 $\{f_n(x)\}$ 在 $I$ 上等度连续，且 $\displaystyle\lim_{n\to\infty}f_n(x)=f(x)\;(x\in I)$，那么 $f(x)$ 在 $I$ 一致连续.

> [!proof]- 证
> 因 $\{f_n(x)\}$ 等度连续，所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x_1,x_2\in I$，$|x_1-x_2|<\delta$ 时，有 $|f_n(x_1)-f_n(x_2)|<\varepsilon/2$. 令 $n\to\infty$，取极限可得 $|f(x_1)-f(x_2)|\leq\varepsilon/2<\varepsilon$. 此即表明 $f(x)$ 在 $I$ 上一致连续.

该例结果表明，若 $\displaystyle\lim_{n\to\infty}f_n(x)=f(x)$，而 $f(x)$ 不一致连续，则 $\{f_n(x)\}$ 不可能等度连续. 例如：$\{x^n\}$ 在 $[0,1]$ 上正是如此.

> [!example] 例 5.2.32
> 若 $\mathcal{M}$ 是区间 $I$ 上定义的函数族，$\forall f\in\mathcal{M}$ 皆在 $I$ 上可微，且 $\{|f'(x)|\mid f\in\mathcal{M}\}$ 在 $I$ 上一致有界，那么 $\mathcal{M}$ 在 $I$ 上等度连续.

> [!proof]- 证
> 因 $\{|f'(x)|\mid f\in\mathcal{M}\}$ 一致有界，故 $\exists M>0$ 使得 $|f'(x)|\leq M$（$\forall x\in I$，$\forall f\in\mathcal{M}$）. 于是 $\forall\varepsilon>0$，取 $\delta=\varepsilon/M$，则当 $x_1,x_2\in I$ 且 $|x_1-x_2|<\delta$ 时，恒有
> $$|f(x_1)-f(x_2)|=|f'(\xi)(x_1-x_2)|\leq M|x_1-x_2|<M\cdot\varepsilon/M=\varepsilon \qquad(\forall f\in\mathcal{M}),$$
> 即 $\mathcal{M}$ 在 $I$ 上等度连续.

> [!example] ☆例 5.2.33
> 设函数序列 $\{f_n(x)\}$ 在区间 $[a,b]$ 上为等度连续的. 试证：若在 $[a,b]$ 上 $f_n(x)\to f(x)\;(n\to\infty)$，则 $f_n(x)\Rightarrow f(x)$ 在 $[a,b]$ 上 $(n\to\infty)$.

> [!proof]- 证Ⅰ
> （$\forall\varepsilon>0$，先对每个 $x_\lambda\in[a,b]$ 找 $\delta_\lambda>0$，使得当 $|x-x_\lambda|<\delta_\lambda$ 时，$|f(x)-f(x_\lambda)|<\varepsilon$，然后应用有限覆盖定理.）
>
> $\forall x_\lambda\in[a,b]$，因 $\displaystyle\lim_{n\to\infty}f_n(x_\lambda)=f(x_\lambda)$，所以 $\forall\varepsilon>0$，$\exists N_\lambda=N(\varepsilon,x_\lambda)$，当 $n>N_\lambda$ 时有 $|f_n(x_\lambda)-f(x_\lambda)|<\varepsilon/3$. 由于 $\{f_n\}$ 等度连续，从而 $f$ 连续（见例 5.2.31）. 故对此 $\varepsilon>0$，$\exists\delta_\lambda>0$，当 $|x-x_\lambda|<\delta_\lambda$ 时，有
> $$|f_n(x)-f_n(x_\lambda)|<\varepsilon/3,\qquad |f(x)-f(x_\lambda)|<\varepsilon/3.$$
>
> 于是
> $$
> \begin{aligned}
> |f_n(x)-f(x)|&\leq|f_n(x)-f_n(x_\lambda)|+|f_n(x_\lambda)-f(x_\lambda)|+|f(x_\lambda)-f(x)|\\
> &<\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon.
> \end{aligned}
> $$
>
> 这时 $\{(x_\lambda-\delta_\lambda,x_\lambda+\delta_\lambda)\mid x_\lambda\in[a,b]\}$ 组成 $[a,b]$ 的一个开覆盖. 根据有限覆盖定理，其中存在有限子覆盖，记之为 $\{(x_i-\delta_i,x_i+\delta_i)\mid i=1,2,\ldots,r\}$. 取 $N=\max\{N_1,N_2,\ldots,N_r\}$，则 $n>N$ 时，$\forall x\in[a,b]$，$\exists i\in\{1,2,\ldots,r\}$ 使得 $x\in(x_i-\delta_i,x_i+\delta_i)$，从而有 $|f_n(x)-f(x)|<\varepsilon$. 这就证明了：在 $[a,b]$ 上 $f_n(x)\Rightarrow f(x)\;(n\to\infty)$.

> [!proof]- 证Ⅱ
> 由 $\{f_n(x)\}$ 在 $[a,b]$ 上等度连续，知 $f(x)$ 在 $[a,b]$ 上一致连续. 因而 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x',x''\in[a,b]$，$|x'-x''|<\delta$ 时，有
> $$|f_n(x')-f_n(x'')|<\varepsilon/3,\qquad |f(x')-f(x'')|<\varepsilon/3.$$
>
> 今将 $[a,b]$ $k$ 等分，使每个小区间的长度小于 $\delta$（这是可以办到的，只要令 $(b-a)/k<\delta$，即 $k>(b-a)/\delta$ 便可）. 记 $k$ 等分的各分点为 $a=a_0<a_1<\ldots<a_k=b$，因为 $f_n(a_i)\to f(a_i)\;(n\to\infty)$，所以对上述 $\varepsilon>0$，$\exists N_i>0$ 使得 $n>N_i$ 时，有 $|f_n(a_i)-f(a_i)|<\varepsilon/3\;(i=1,2,\ldots,k)$. 令 $N=\max\{N_1,N_2,\ldots,N_k\}$，则当 $n>N$ 时，$\forall x\in[a,b]$，$\exists a_i\;(i\in\{1,2,\ldots,k\})$ 使得 $|a_i-x|<\delta$，
> $$
> \begin{aligned}
> |f_n(x)-f(x)|&\leq|f_n(x)-f_n(a_i)|+|f_n(a_i)-f(a_i)|+|f(a_i)-f(x)|\\
> &<\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon.
> \end{aligned}
> $$
>
> 这就证明了：在 $[a,b]$ 上 $f_n(x)\Rightarrow f(x)\;(n\to\infty)$.

> [!remark] 注
> 从证Ⅱ中容易看出，条件"$f_n(x)\to f(x)\;(n\to\infty)$"只需在 $[a,b]$ 上某个稠密子集 $\{a_i\}$ 上成立，就够了.

> [!exercise] 练习
> 设 $\{f_n(x)\}$ 是 $[a,b]$ 上定义的函数序列，满足：
> 1）$\forall x_0\in[a,b]$：$\{f_n(x_0)\}$ 有界；
> 2）$\{f_n(x)\}$ 在 $[a,b]$ 上等度连续.
>
> 试证：存在子列 $\{f_{n_k}(x)\}$ 在 $[a,b]$ 上一致收敛.（南开大学）

> [!hint]- 提示
> 设 $\{a_n\}$ 是 $[a,b]$ 上全体有理数组成的数列. 根据条件 1），对于 $a_1$，数列 $\{f_n(a_1)\}$ 有界，可应用致密性原理，采用例 5.2.30 中的方法，从子列里找子列，最后取对角线元素，可作出 $\{f_n(x)\}$ 的子列 $\{f_{n_k}(x)\}$，使之在 $\{a_n\}$ 的每点都收敛.

> [!proof]- 证
> （利用等度连续，证明 $\{f_{n_k}(x)\}$ 在无理点上也收敛.）因 $\{f_n(x)\}$ 等度连续：$\forall\varepsilon>0$，$\exists\delta>0$，$x',x''\in[a,b]$，$|x'-x''|<\delta$，有
> $$|f_n(x')-f_n(x'')|<\varepsilon/3 \qquad(\forall n>0).$$
>
> 因此，对于上面作出的子列也有 $|f_{n_k}(x')-f_{n_k}(x'')|<\varepsilon/3\;(\forall k>0)$. 设 $x_0$ 是 $[a,b]$ 上任一无理点，根据有理点的稠密性，可取有理点 $x_r$，使得 $|x_r-x_0|<\delta$. 于是
> $$|f_{n_k}(x_r)-f_{n_k}(x_0)|<\varepsilon/3,\qquad |f_{n_{k+p}}(x_r)-f_{n_{k+p}}(x_0)|<\varepsilon/3.$$
>
> 又因 $\{f_{n_k}(x)\}$ 在 $x_r$ 收敛，（利用 Cauchy 准则必要性）$\exists N>0$，当 $k>N$ 时，$|f_{n_k}(x_r)-f_{n_{k+p}}(x_r)|<\varepsilon/3\;(\forall p\in\mathbb{N})$. 所以
> $$
> \begin{aligned}
> |f_{n_k}(x_0)-f_{n_{k+p}}(x_0)|
> &\leq|f_{n_k}(x_0)-f_{n_k}(x_r)|+|f_{n_k}(x_r)-f_{n_{k+p}}(x_r)|+|f_{n_{k+p}}(x_r)-f_{n_{k+p}}(x_0)|\\
> &<\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon \qquad(\forall p\in\mathbb{N}).
> \end{aligned}
> $$
>
> （根据 Cauchy 准则充分性）$\{f_{n_k}(x_0)\}$ 收敛. 由无理点 $x_0\in[a,b]$ 的任意性，$\{f_{n_k}(x)\}$ 在无理点上都收敛.
>
> 以上证明了：$\{f_{n_k}(x)\}$ 在 $[a,b]$ 上逐点收敛，再加上等度连续性，根据例 5.2.33（或重复证法），可知 $\{f_{n_k}(x)\}$ 在 $[a,b]$ 上一致收敛.

作为例 5.2.33 的逆命题：

> [!example] ☆例 5.2.34
> 设 $f_n(x)\;(n=1,2,\ldots)$ 在闭区间 $[a,b]$ 上连续，且当 $n\to\infty$ 时，$f_n(x)\Rightarrow f(x)$ 于 $[a,b]$，试证 $\{f_n(x)\}$ 等度连续.（郑州大学）

> [!proof]- 证
> 因 $[a,b]$ 上 $f_n(x)$ 连续，且 $f_n(x)\Rightarrow f(x)$（当 $n\to\infty$ 时），故 $f(x)$ 连续，从而在 $[a,b]$ 上一致连续：$\forall\varepsilon>0$，$\exists\delta_0>0$，当 $x',x''\in[a,b]$，$|x'-x''|<\delta_0$ 时，有 $|f(x')-f(x'')|<\varepsilon/3$. 由一致收敛性，对此 $\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，有 $|f_n(x)-f(x)|<\varepsilon/3\;(\forall x\in[a,b])$. 如此
> $$
> \begin{aligned}
> |f_n(x')-f_n(x'')|
> &\leq|f_n(x')-f(x')|+|f(x')-f(x'')|+|f(x'')-f_n(x'')|\\
> &<\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon.
> \end{aligned}
> $$[^2]
>
> 对剩下的 $f_1(x),f_2(x),\ldots,f_N(x)$ 应用 Cantor 定理知，对每个 $f_i\;(i=1,2,\ldots,N)$，$\exists\delta_i>0\;(i=1,2,\ldots,N)$，当 $x',x''\in[a,b]$，$|x'-x''|<\delta_i$ 时，有 $|f_i(x')-f_i(x'')|<\varepsilon$. 如此令 $\delta=\min\{\delta_0,\delta_1,\ldots,\delta_N\}$，当 $\forall x',x''\in[a,b]$，$|x'-x''|<\delta$ 时，对一切 $n\in\mathbb{N}$，恒有 $|f_n(x')-f_n(x'')|<\varepsilon$. 证毕.

[^2]: 注意，我们不能由此说 $\{f_n(x)\}\;(n>N)$ 在 $[a,b]$ 上等度连续，因为这里 $N$ 与 $\varepsilon$ 有关.

> [!example] 例 5.2.35
> 可微函数序列 $\{f_n(x)\}$ 在 $[a,b]$ 上收敛，且 $\exists M>0$，使 $|f'_n(x)|\leq M\;(n=1,2,\ldots,\;x\in[a,b])$，试证 $\{f_n(x)\}$ 在 $[a,b]$ 上一致收敛.（上海交通大学）

> [!hint]- 提示
> 可利用例 5.2.32 和例 5.2.33，也可直接证明.

> [!exercise] 练习
> 设在 $[a,b]$ 上 $f_n(x)$ 连续，且 $f'_n(x)$ 一致有界，$f_n(x)$ 逐点收敛于极限函数 $f(x)$. 试证函数 $f(x)$ 在 $[a,b]$ 上连续.（北京大学）

> [!hint]- 提示
> $\exists M>0$：$|f'_n(x)|\leq M\;(\forall x\in[a,b],\;\forall n\in\mathbb{N})\Rightarrow|f_n(x')-f_n(x'')|\leq M|x'-x''|\Rightarrow|f(x')-f(x'')|\leq M|x'-x''|$.

> [!example] 例 5.2.36
> 设 $\mathcal{M}$ 是定义在 $[a,b]$ 上的连续函数族，一致有界且等度连续，试证在 $\mathcal{M}$ 中存在函数序列 $f_1(x),f_2(x),\ldots,f_n(x),\ldots$ 在 $[a,b]$ 上一致收敛.（吉林大学）

> [!hint]- 提示
> 参看例 5.2.30 及例 5.2.33.

> [!example] ☆例 5.2.37
> 设函数序列 $\{f_n(x)\}$ 与 $\{g_n(x)\}$ 在区间 $I$ 上一致收敛，而且对每个 $n=1,2,\ldots$，$f_n(x)$ 与 $g_n(x)$ 在 $I$ 上有界（界可随 $n$ 而异），证明 $f_n(x)g_n(x)$ 在 $I$ 上亦一致收敛.（华东师范大学，北京大学）

> [!proof]- 证
> **分析**：不妨设 $f_n(x)\to f(x)$，$g_n(x)\to g(x)$（$n\to\infty$，关于 $x\in I$）. 要证明 $f_n(x)\cdot g_n(x)\to f(x)g(x)$，利用不等式
> $$
> \begin{aligned}
> |f(x)g(x)-f_n(x)g_n(x)|
> &\leq|f(x)g(x)-f(x)g_n(x)|+|f(x)g_n(x)-f_n(x)g_n(x)|\\
> &=|f(x)|\cdot|g(x)-g_n(x)|+|g_n(x)|\cdot|f(x)-f_n(x)|. \qquad\text{（1）}
> \end{aligned}
> $$
>
> 可见只要证明：$\exists M>0$，使得
> $$|f(x)|\leq M,\quad |g_n(x)|\leq M \qquad(\forall x\in I,\;\forall n\in\mathbb{N}). \qquad\text{（2）}$$
>
> 因为有了这样的 $M$，则
> $$\text{式（1）}\leq M|g(x)-g_n(x)|+M|f(x)-f_n(x)|. \qquad\text{（3）}$$
>
> 于是根据 $g_n(x)\to g(x)$，$f_n(x)\to f(x)$，可知 $\forall\varepsilon>0$，$\exists N>0$ 使得当 $n>N$ 时，
> $$|g(x)-g_n(x)|<\frac{1}{2M}\varepsilon,\quad |f(x)-f_n(x)|<\frac{1}{2M}\varepsilon.$$
>
> $$\text{式（3）}\leq M\cdot\frac{\varepsilon}{2M}+M\cdot\frac{\varepsilon}{2M}=\varepsilon.$$
>
> 下面设法证明，存在满足式（2）的 $M$.
>
> 事实上，因 $f_n(x)\to f(x)$，所以对于 $\varepsilon=1$，$\exists n_1$，使得
> $$|f(x)-f_{n_1}(x)|<\varepsilon=1 \qquad(\forall x\in I).$$
>
> $|f(x)|\leq|f(x)-f_{n_1}(x)|+|f_{n_1}(x)|\leq 1+|f_{n_1}(x)|$，
> 因 $f_{n_1}(x)$ 有界，$\exists M_1>0$，使得 $|f_{n_1}(x)|\leq M_1\;(\forall x\in I)$. 故 $|f(x)|\leq 1+M_1\;(\forall x\in I)$.
>
> 同理，由 $g_n(x)\to g(x)$ 及每个 $g_n(x)$ 有界，可知 $\exists M_2>0$ 使得 $|g(x)|\leq 1+M_2\;(\forall x\in I)$. 又由 $g_n(x)\to g(x)$，可知对 $\varepsilon=1$，$\exists N>0$，当 $n>N$ 时，$|g_n(x)-g(x)|<1$. 所以
> $$|g_n(x)|\leq|g_n(x)-g(x)|+|g(x)|\leq 2+M_2 \qquad(\forall x\in I).$$
>
> $g_1(x),g_2(x),\ldots,g_N(x)$ 分别有界，因此 $\exists G_i$，使得 $|g_i(x)|\leq G_i\;(i=1,2,\cdots,N)$. 最后，令 $M=\max\{1+M_1,2+M_2,G_1,\cdots,G_N\}$，则
> $$|f(x)|\leq M,\quad |g_n(x)|\leq M \qquad(\forall x\in I,\;\forall n\in\mathbb{N}).$$
>
> 问题得证.


### 二、一致收敛级数的性质


#### a．关于逐项取极限

> [!example] 例5.2.38（逐项取极限定理）
> 设级数 $\sum_{n=1}^{\infty} u_n(x)$ 在 $x_0$ 的某个空心邻域 $U^0(x_0)=\{x\mid 0<|x-x_0|<\delta\}$ 里一致收敛，$\lim_{x\to x_0} u_n(x)=c_n$，则 $\sum_{n=1}^{\infty} c_n$ 收敛，且
> $$
> \lim_{x\to x_0}\sum_{n=1}^{\infty} u_n(x)=\sum_{n=1}^{\infty}\lim_{x\to x_0} u_n(x)=\sum_{n=1}^{\infty} c_n. \tag{1}
> $$
> （西安电子科技大学）

> [!proof]- 证Ⅰ
> 1° 因 $\sum_{n=1}^{\infty} u_n(x)$ 在 $U^0(x_0)$ 内一致收敛，所以 $\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，$\forall p\in\mathbb{N}$，有
> $$
> \left|\sum_{k=n+1}^{n+p} u_k(x)\right|<\varepsilon,\quad \forall x\in U^0(x_0).
> $$
> 令 $x\to x_0$，取极限得 $\left|\sum_{k=n+1}^{n+p} c_k\right|\leq\varepsilon$．由 Cauchy 准则，级数 $\sum_{n=1}^{\infty} c_n=c$ 收敛（$c$ 为某个常数）．
> 
> 2° 由 $S(x)\equiv\sum_{n=1}^{\infty} u_n(x)$ 一致收敛及 $c=\sum_{n=1}^{\infty} c_n$ 的收敛性，易知 $\forall\varepsilon>0$，$\exists n\in\mathbb{N}$，使得
> $$
> |S(x)-S_n(x)|<\frac{\varepsilon}{3},\quad \left|c-\sum_{k=1}^{n} c_k\right|<\frac{\varepsilon}{3}.
> $$
> 其中 $S_n(x)=\sum_{k=1}^{n} u_k(x)$．将 $n$ 固定，因 $S_n(x)=\sum_{k=1}^{n} u_k(x)\to\sum_{k=1}^{n} c_k$（当 $x\to x_0$ 时），故对 $\varepsilon>0$，$\exists\delta>0$，当 $|x-x_0|<\delta$ 时，
> $$
> \left|S_n(x)-\sum_{k=1}^{n} c_k\right|<\frac{\varepsilon}{3}.
> $$
> 从而
> $$
> |S(x)-c|\leq|S(x)-S_n(x)|+\left|S_n(x)-\sum_{k=1}^{n} c_k\right|+\left|\sum_{k=1}^{n} c_k-c\right|<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon.
> $$
> 即式（1）成立．

> [!proof]- 证Ⅱ
> 关于 $\sum_{n=1}^{\infty} c_n$ 的收敛性同上证明，现证明可逐项取极限．在 $x_0$ 处补充定义，令 $u_n(x_0)=c_n$（$n=1,2,\cdots$），则 $u_n(x)$ 在 $x_0$ 处连续，并且 $\sum_{n=1}^{\infty} u_n(x)$ 在 $x_0$ 的邻域 $(x_0-\delta,x_0+\delta)$ 内一致收敛①．从而由和函数连续定理，可知 $\sum_{n=1}^{\infty} u_n(x)$ 在 $x_0$ 处连续，从而
> $$
> \lim_{x\to x_0}\sum_{n=1}^{\infty} u_n(x)=\sum_{n=1}^{\infty} u_n(x_0)=\sum_{n=1}^{\infty} c_n=\sum_{n=1}^{\infty}\lim_{x\to x_0} u_n(x).
> $$

> [!example] 例5.2.39
> 假定函数 $u_n(x)$ 在区间 $(0,1)$ 内单调增加，并且 $u_n(x)\geq 0$，$n=1,2,\cdots$．又假定 $\sum_{n=1}^{\infty} u_n(x)$ 在 $(0,1)$ 内逐点收敛，并且有上界，试证 $\sum_{n=1}^{\infty} u_n(x)$ 在 $(0,1)$ 内一致收敛，并且
> $$
> \lim_{x\to 1^-}\sum_{n=1}^{\infty} u_n(x)=\sum_{n=1}^{\infty}\lim_{x\to 1^-} u_n(x). \tag{1}
> $$
> （厦门大学）

> [!proof]- 证
> 根据上例（逐项取极限的定理），要证明式（1），只要证明 $\sum_{n=1}^{\infty} u_n(x)$ 在 $(0,1)$ 内一致收敛，并且极限 $\lim_{x\to 1^-} u_n(x)$ 存在．
> 
> 1° 先来证明 $\lim_{x\to 1^-} u_n(x)$ 存在．因已知 $u_n(x)\geq 0$，又 $S(x)\equiv\sum_{n=1}^{\infty} u_n(x)$ 收敛并且有上界，所以存在 $M\geq 0$，使得 $u_n(x)\leq S(x)\leq M$，$\forall x\in(0,1)$．而 $u_n(x)$ 单调增加，故 $\lim_{x\to 1^-} u_n(x)$ 存在．另外，若记 $\lim_{x\to 1^-} u_n(x)=u_n(1)$，则在 $(0,1)$ 上有
> $$
> 0\leq u_n(x)\leq u_n(1)\quad(n=1,2,\cdots). \tag{2}
> $$
> 
> 2° 剩下只要证明 $\sum_{n=1}^{\infty} u_n(x)$ 在 $(0,1)$ 内一致收敛．式（2）表明只要证明级数 $\sum_{n=1}^{\infty} u_n(1)$ 收敛即可．因为 $\sum_{k=1}^{n} u_k(x)\leq S(x)\leq M$，令 $x\to 1^-$ 取极限，得 $\sum_{k=1}^{n} u_k(1)\leq M$（$n=1,2,\cdots$）．因 $u_k(1)\geq 0$，故 $\sum_{n=1}^{\infty} u_n(1)$ 收敛．从而根据 $M$ 判别法，$\sum_{n=1}^{\infty} u_n(x)$ 在 $(0,1)$ 上一致收敛．证毕．


#### b．和函数的连续性

> [!note] 要点
> 和函数连续的定理常以如下三种形式叙述：

> [!theorem] 定理1
> 若 $u_n(x)$ 在区间 $I$ 上连续（$n=1,2,\cdots$），$\sum_{n=1}^{\infty}u_n(x)$ 在 $I$ 上一致收敛，则
> $$
> S(x)\equiv\sum_{n=1}^{\infty}u_n(x)\text{ 在 }I\text{ 上连续}.
> $$

> [!theorem] 定理2
> 若 $u_n(x)$ 在 $x=x_0$ 处连续（$n=1,2,\cdots$），$\sum_{n=1}^{\infty}u_n(x)$ 在 $x_0$ 的某个邻域里一致收敛，则 $S(x)\equiv\sum_{n=1}^{\infty}u_n(x)$ 在 $x=x_0$ 处连续.

> [!theorem] 定理3
> 若 $u_n(x)$ 在 $(a,b)$ 内连续（$n=1,2,\cdots$），$\sum_{n=1}^{\infty}u_n(x)$ 在 $(a,b)$ 内内闭一致收敛（意指在 $(a,b)$ 内的任一闭区间上分别一致收敛），则 $S(x)\equiv\sum_{n=1}^{\infty}u_n(x)$ 在 $(a,b)$ 内连续.

下面我们将看到，以上三定理在使用时各有好处．如

> [!example] 例5.2.40
> 证明：$\sum_{n=-\infty}^{+\infty}\frac{1}{(n-x)^2}$ 当 $x\ne$ 整数时收敛，周期为1，并且当 $x\ne$ 整数时和函数连续.

> [!proof]- 证
> 因
> $$
> \sum_{n=-\infty}^{+\infty}\frac{1}{(n-x)^2}=\sum_{n=0}^{+\infty}\frac{1}{(n-x)^2}+\sum_{n=1}^{+\infty}\frac{1}{(-n-x)^2} \tag{1}
> $$
> 
> 当 $x\ne$ 整数，$n\to+\infty$ 时，$\frac{1}{(n-x)^2}\sim\frac{1}{n^2}$，$\frac{1}{(-n-x)^2}\sim\frac{1}{n^2}$，故级数（1）收敛. 又
> $$
> f(x+1)\equiv\sum_{n=-\infty}^{+\infty}\frac{1}{[n-(x+1)]^2}=\sum_{n=-\infty}^{+\infty}\frac{1}{(n-1-x)^2}
> $$
> （令 $n-1=k$）
> $$
> =\sum_{k=-\infty}^{+\infty}\frac{1}{(k-x)^2}\equiv f(x) \quad (x\ne\text{整数})，
> $$
> 
> 所以和函数 $f(x)$ 以1为周期，其连续性只需在 $(0,1)$ 内证明. 由于在 $(0,1)$ 内，
> $$
> \left|\frac{1}{(n-x)^2}\right|\le\frac{1}{(n-1)^2}，\left|\frac{1}{(-n-x)^2}\right|=\frac{1}{(n+x)^2}\le\frac{1}{n^2}，
> $$
> 
> 所以级数（1）在 $(0,1)$ 内一致收敛，$f(x)$ 在 $(0,1)$ 内连续（定理1）. 证毕.

> [!example] 例5.2.41
> 设 $u_n(x)$ 在 $[a,b]$ 上连续（$n=1,2,\cdots$），$\sum_{n=1}^{\infty}u_n(x)$ 在 $(a,b)$ 内一致收敛，求证 $\sum_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致连续．（北京师范大学）

> [!proof]- 证
> 由于 $u_n(x)$ 在 $[a,b]$ 上连续，$\lim_{x\to a^+}u_n(x)=u_n(a)$，$\lim_{x\to b^-}u_n(x)=u_n(b)$，又因 $\sum_{n=1}^{\infty}u_n(x)$ 在 $(a,b)$ 内一致收敛，利用逐项取极限定理（或重复例5.2.38的证明），可知级数在 $x=a$，$x=b$ 处收敛. 于是，$\sum_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致收敛①. 根据和函数连续性定理（定理1）知，$\sum_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上连续. 再由Cantor定理，$\sum_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致连续.

> [!exercise] ☆练习
> 设函数项级数 $\sum_{n=1}^{\infty}u_n(x)$ 在开区间 $(a,b)$ 内满足：
> 
> 1）对每个 $n\ge 1$，$u_n(x)$ 一致连续； 2）$\sum_{n=1}^{\infty}u_n(x)$ 一致收敛于 $S(x)$.
> 
> 试证：$S(x)$ 在 $(a,b)$ 内一致连续．（华中科技大学）

> [!proof]- 证
> 由于 $u_n(x)$ 在 $(a,b)$ 上一致连续，（再根据例2.2.6）知 $u_n(x)$ 在两端点有内侧极限，故能补充 $u_n(x)$ 在端点的定义，可使 $u_n(x)$ 在 $[a,b]$ 上连续，（根据Cantor定理）知 $u_n(x)$ 在 $[a,b]$ 上一致连续. （借助三角不等式）可得到 $\sum_{n=1}^{\infty}u_n(x)$ 在端点收敛. 因此，$\sum_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致收敛. 根据一致收敛保连续性定理，可知和函数在 $[a,b]$ 上连续. （利用Cantor定理）从而和函数在 $[a,b]$ 上一致连续，即 $S(x)$ 在 $(a,b)$ 内一致连续.

> [!note] 注
> 本题表明：任意有限区间 $I$（不论 $I$ 是否为闭）一致收敛能保持一致连续性.

> [!example] ☆例5.2.42
> 设 $\{x_n\}$ 是 $(0,1)$ 内的一个序列：$0<x_n<1$，且 $x_n\ne x_i$（$i\ne j$），试讨论函数
> $$
> f(x)=\sum_{n=1}^{\infty}\frac{\operatorname{sgn}(x-x_n)}{2^n}
> $$
> 在 $(0,1)$ 内的连续性，其中
> $$
> \operatorname{sgn} x=\begin{cases}1，&x>0，\\0，&x=0，\\-1，&x<0.\end{cases}
> $$
> （北京大学）

> [!solution]- 解
> 1° 因 $\left|\frac{\operatorname{sgn}(x-x_n)}{2^n}\right|\le\frac{1}{2^n}$，$\forall x\in(0,1)$，且 $\sum_{n=1}^{\infty}\frac{1}{2^n}$ 收敛，所以 $\sum_{n=1}^{\infty}\frac{\operatorname{sgn}(x-x_n)}{2^n}$ 在 $(0,1)$ 内一致收敛.
> 
> 2° 设 $x_0\ne x_n$（$n=1,2,\cdots$）为 $(0,1)$ 内任意一点，则通项 $u_n(x)=\frac{\operatorname{sgn}(x-x_n)}{2^n}$ 在 $x=x_0$ 处连续，由1°并应用和函数连续定理2，知 $f(x)$ 在 $x=x_0$ 处连续.
> 
> 3° 设 $x_k$ 是 $\{x_n\}$ 中任意一点，因
> $$
> f(x)=\sum_{n\ne k}\frac{\operatorname{sgn}(x-x_n)}{2^n}+\frac{\operatorname{sgn}(x-x_k)}{2^k}，
> $$
> 
> 右边第一项在 $x=x_k$ 处连续，第二项在 $x=x_k$ 处间断，因此 $f(x)$ 在 $x=x_k$ 处间断.

> [!note] 注
> $\{x_n\}$ 可以在 $(0,1)$ 内稠密，因此在证明 $x\ne x_n$ 处连续时，无法用定理1，只能用定理2.

> [!example] ☆例5.2.43
> 证明：$f(x)=\sum_{n=1}^{\infty}\left(x+\frac{1}{n}\right)^n$ 在 $(-1,1)$ 内连续.

> [!proof]- 证
> $\forall q:0<q<1$，考虑内闭区间 $[-q,q]\subset(-1,1)$. 因
> $$
> |(x+1/n)^n|\le(|x|+1/n)^n\le(q+1/n)^n \quad (\forall x\in[-q,q])，
> $$
> 
> 且 $\sum_{n=1}^{\infty} (q+1/n)^n$ 收敛（因为 $\sqrt[n]{(q+1/n)^n}\to q<1$（$n\to\infty$）），所以 $\sum_{n=1}^{\infty} (x+1/n)^n$ 在 $[-q,q]$ 上一致收敛. 由 $q$ 的任意性，由定理3可知 $f(x)=\sum_{n=1}^{\infty} (x+1/n)^n$ 在 $(-1,1)$ 内连续.

> [!note] 注
> 该级数在 $(-1,1)$ 内收敛，但非一致收敛. 因此本例不能直接使用定理1. 和函数连续性定理还可用于推断非一致收敛. 如

> [!example] ☆例5.2.44
> 证明：$\sum_{n=1}^{\infty} x/(1+x^2)^n$ 在 $(0,+\infty)$ 内非一致收敛.

> [!proof]- 证
> 当 $x=0$ 时，级数和为0；当 $x\ne 0$ 时，级数是等比级数. 所以
> $$
> S(x)=\sum_{n=1}^{\infty} \frac{x}{(1+x^2)^n} =
> \begin{cases}
> 0， & \text{当 }x=0\text{ 时，}\\
> 1/x， & \text{当 }x\ne 0\text{ 时}.
> \end{cases}
> $$
> 
> $S(x)$ 在 $x=0$ 处间断，因此该级数在 $[0,+\infty)$ 上不一致收敛（定理1），进而在 $(0,+\infty)$ 内也不一致收敛（因为：假若在 $(0,+\infty)$ 内一致收敛，加之级数在 $x=0$ 处收敛，便可推知级数在 $[0,+\infty)$ 上一致收敛，矛盾）.

① 事实上，若记 $S(x)=\sum_{n=1}^{\infty}u_n(x)$，$x\in U^0(x_0)$，$S(x_0)=\sum_{n=1}^{\infty}c_n$，因在 $U^0(x_0)$ 上级数 $\sum_{n=1}^{\infty}u_n(x)$ 一致收敛，故 $\forall\varepsilon>0$，$\exists N_1>0$，当 $n>N_1$ 时，$|S(x)-\sum_{k=1}^{n}u_k(x)|<\varepsilon$（$x\in U^0(x_0)$）. 又 $\sum_{n=1}^{\infty}c_n$ 收敛，对此 $\varepsilon>0$，$\exists N_2>0$，当 $n>N_2$ 时，$|S(x_0)-\sum_{k=1}^{n}u_k(x_0)|<\varepsilon$. 取 $N=\max\{N_1，N_2\}$，则当 $n>N$ 时，恒有
$$
|S(x)-\sum_{k=1}^{n}u_k(x)|<\varepsilon，\forall x\in(x_0-\delta，x_0+\delta).
$$


#### c. 和函数的可微性与逐项求导

> [!theorem] 要点
> 若要证明 $\sum_{n=1}^{\infty} u_n(x)$ 在区间 $I$ 上可微，且可逐项求导，即在 $I$ 上，
> $$
> \left(\sum_{n=1}^{\infty} u_n(x)\right)' = \sum_{n=1}^{\infty} u_n'(x),
> $$
> 只要证明如下三条即可：
> 
> 1）级数 $\sum_{n=1}^{\infty} u_n(x)$ 在 $I$ 上收敛（或者只要验证在 $I$ 上至少有一个收敛点）；
> 2）$u_n(x)$ 在 $I$ 上有连续导数（$n=1,2,\cdots$）；
> 3）$\sum_{n=1}^{\infty} u_n'(x)$ 在 $I$ 上一致收敛（或在 $I$ 的任一内闭区间上一致收敛）。
> 
> （对于函数序列，有类似叙述。）

> [!example] ☆例5.2.45
> 证明：$f(x)=\sum_{n=1}^{\infty} ne^{-nx}$ 在 $(0,+\infty)$ 内收敛，但不一致收敛，而和函数在 $(0,+\infty)$ 内无穷次可微。
> 
> > [!proof]- 证Ⅰ
> > 1° $\forall x\in(0,+\infty)$，因 $n^2\cdot ne^{-nx}\to 0$（$n\to\infty$），所以 $\sum ne^{-nx}$ 收敛。
> > 
> > 2° $\forall n\in\mathbb{N}$，因 $ne^{-nx}\to n\neq 0$（$x\to 0$），所以在 $(0,+\infty)$ 上，级数通项 $ne^{-nx}$ 不 $\to 0$（$n\to\infty$）。从而 $\sum ne^{-nx}$ 在 $(0,+\infty)$ 内非一致收敛。
> > 
> > 3° 因为级数在 $(0,+\infty)$ 内收敛，$(ne^{-nx})'=-n^2e^{-nx}$ 连续，$-\sum_{n=1}^{\infty} n^2e^{-nx}$ 在 $(0,+\infty)$ 内内闭区间上一致收敛（因 $\forall\varepsilon>0$，有 $0<n^2e^{-nx}\leq n^2e^{-n\varepsilon}$（$x\in[\varepsilon,+\infty)$），而级数 $\sum_{n=1}^{\infty} n^2e^{-n\varepsilon}$ 收敛），故 $f(x)$ 可微，且
> > $$
> > f'(x)=\left(\sum_{n=1}^{\infty} u_n(x)\right)' = \sum_{n=1}^{\infty} u_n'(x)，x\in(0,+\infty).
> > $$
> > 
> > 一般而言，若已有
> > $$
> > f^{(k)}(x)=(-1)^k \sum_{n=1}^{\infty} n^k e^{-nx}, \quad (1)
> > $$
> > 则通过类似方法可证 $f^{(k)}(x)$ 可导，且可逐项求导得到。这就证明了 $f(x)$ 任意次可微。式 (1) 对任意 $k\in\mathbb{N}$ 成立。
> 
> > [!proof]- 证Ⅱ
> > 级数在 $(0,+\infty)$ 内收敛，但不一致收敛，证法同证Ⅰ。现证 $f(x)$ 无穷次可微。
> > 
> > $$
> > f(x)=e^{-x}+2e^{-2x}+3e^{-3x}+\cdots+ne^{-nx}+(n+1)e^{-(n+1)x}+\cdots,
> > $$
> > $$
> > e^{-x}f(x)=e^{-2x}+2e^{-3x}+\cdots+(n-1)e^{-nx}+ne^{-(n+1)x}+\cdots.
> > $$
> > 
> > 所以
> > $$
> > (1-e^{-x})f(x)=f(x)-e^{-x}f(x)=\sum_{n=1}^{\infty} e^{-nx}=\frac{e^{-x}}{1-e^{-x}}.
> > $$
> > 
> > 故 $f(x)$ 在 $(0,+\infty)$ 内任意次可微。

> [!exercise] ☆练习
> 设 $f(x)=\sum_{n=1}^{\infty} ne^{-n} \cos nx$，$x\in[0,2\pi]$。试证：在 $[0,2\pi]$ 上：
> 
> 1）$f(x)$ 连续；2）$f(x)$ 有连续导数；3）$\max_{0\leq x\leq 2\pi}|f(x)|=\frac{e}{(1-e)^2}$。（华东师范大学）
> 
> > [!hint]- 提示
> > 1）（当 $x>1$ 时）$(xe^{-x})'=(1-x)e^{-x}<0$，故 $xe^{-x}\searrow$，能用 Cauchy 积分判别法。由 $\int_1^{+\infty} xe^{-x}dx$ 收敛，知 $\sum ne^{-n}$ 收敛。又因 $ne^{-n}|\cos nx|\leq ne^{-n}$，由 M 判别法知，$\sum ne^{-n} \cos nx$ 一致收敛。
> > 
> > 2）类似地，可验证满足逐项求导的条件，知 $f(x)$ 有连续导数。
> > 
> > 3）由 $|f(x)|\leq\sum ne^{-n}|\cos nx|\leq\sum ne^{-n}|\cos(n\cdot 0)|=f(0)$（$\forall x\in[0,2\pi]$），知
> > $$
> > \max_{0\leq x\leq 2\pi}|f(x)|=f(0)=\sum ne^{-n}=x\left(\sum x^n\right)'\Big|_{x=e^{-1}}=x\left(\frac{x}{1-x}\right)'\Big|_{x=e^{-1}}=\frac{e}{(1-e)^2}.
> > $$

> [!example] 例5.2.46
> 证明 Riemann $\zeta$ 函数 $\zeta(x)=\sum_{n=1}^{\infty} \frac{1}{n^x}$ 在 $(1,+\infty)$ 内连续，并有各阶连续导数。（北京大学）
> 
> > [!hint]- 提示
> > 可在 $(1,+\infty)$ 的内闭区间上应用数学归纳法进行证明。

> [!exercise] 练习
> 试证：函数 $\zeta(x)=\sum_{n=1}^{\infty} \frac{1}{n^x}$ 在 $(1,+\infty)$ 内连续，但非一致连续。（浙江大学）
> 
> > [!hint]- 提示
> > "若在区间 $(1,+\infty)$ 上能找到收敛序列 $\{x_n\}$，使得 $\zeta(x_n)\to+\infty$，则 $\zeta(x)$ 在 $(1,+\infty)$ 上非一致连续"。因为：一方面，当 $n,m$ 充分大时，$|x_n-x_m|$ 可以任意小；但另一方面，利用 $\zeta(x_n)\to+\infty$，$\forall m>n>0$，固定 $n$，将 $m$ 取得足够大时，可使得 $|\zeta(x_n)-\zeta(x_m)|$ 任意变大，与一致连续相矛盾。
> 
> > [!proof]- 证
> > 令 $s_n=\sum_{k=1}^n \frac{1}{k}$，则 $\lim_{n\to\infty} s_n=+\infty$（例1.2.10）。
> > 
> > 因 $\lim_{x\to 1+} \sum_{k=1}^n \frac{1}{k^x} = \sum_{k=1}^n \frac{1}{k} = s_n$，故可取 $x_n\in(1,1+\frac{1}{n})$ 使得 $s_n-1<\sum_{k=1}^n \frac{1}{k^{x_n}}<s_n+1$。如此，一方面，$\{x_n\}$ 收敛；另一方面，$\zeta(x_n)=\sum_{k=1}^{\infty} \frac{1}{k^{x_n}}>\sum_{k=1}^n \frac{1}{k^{x_n}}>s_n-1\to+\infty$（$n\to\infty$）。如提示所述，这表明函数 $\zeta(x)$ 在 $(1,+\infty)$ 内非一致连续。

> [!example] ☆例5.2.47
> 设 $f(x)$ 在 $(-\infty,+\infty)$ 内有任意阶导数，级数
> $$
> \cdots+f^{(n)}(x)+\cdots+f''(x)+f'(x)+f(x)+\int_0^x f(t_1)dt_1
> $$
> $$
> +\int_0^x dt_2\int_0^{t_2} f(t_1)dt_1+\cdots+\int_0^x dt_n\int_0^{t_n} dt_{n-1}\cdots\int_0^{t_2} f(t_1)dt_1+\cdots
> $$
> 按两个方向在 $(-\infty,+\infty)$ 内一致收敛。试求级数的和函数 $F(x)$。（同济大学）
> 
> > [!solution]- 解
> > $f(x)$ 有各阶导数，自然各阶导数都连续，该级数逐项求导之后的级数仍是它自己，因而一致收敛，满足逐项求导三条件，所以 $\frac{dF}{dx}=F(x)$，得 $\frac{dF(x)}{F(x)}=dx$。两边同时积分得 $\ln F(x)=x+C$，即
> > $$
> > F(x)=C_1e^x \quad \text{（其中 } C_1=e^C \text{ 为常数）},
> > $$
> > 令 $x=0$，知 $C_1=f(0)+f'(0)+\cdots+f^{(n)}(0)+\cdots$。
> 
> > [!note] 注
> > 逐项求导定理中的条件，只是充分的，有时条件不满足，还可利用导数定义证明和函数的可微性。

> [!example] *例5.2.48
> 设 $\{a_n\}$ 为区间 $[0,1]$ 上全体有理数组成的数列，$u_n(x)$ 在 $[0,1]$ 上一致地满足 Lipschitz 条件，即：$\exists L>0$，使得 $\forall x_1,x_2\in[0,1]$，有
> $$
> |u_n(x_1)-u_n(x_2)|\leq L|x_1-x_2| \quad (\forall n\in\mathbb{N}). \quad (1)
> $$
> 又设 $u_n(0)=0$，$u_n(x)$ 只在 $a_n$ 处无导数（$n=1,2,\cdots$），在 $[0,1]$ 其他地方有导数。试证：$f(x)=\sum_{n=1}^{\infty} \frac{u_n(x)}{2^n}$ 在 $[0,1]$ 上连续；在 $[0,1]$ 的有理点上不可导，无理点上可导，且导数
> $$
> f'(x)=\sum_{n=1}^{\infty} \frac{u_n'(x)}{2^n}.
> $$
> 
> > [!note] 注意
> > 由于有理点的稠密性，本题不能使用逐项求导的定理。
> 
> > [!proof]- 证
> > 1° 由式 (1) 可知 $u_n(x)$ 在 $[0,1]$ 上连续且等度连续，现证它们一致有界。事实上，$\forall x\in[0,1]$，
> > $$
> > |u_n(x)|\leq|u_n(x)-u_n(0)|+|u_n(0)|\leq L|x-0|+0\leq L \quad (\forall n\in\mathbb{N}).
> > $$
> > 
> > 2° 由于 $\frac{|u_n(x)|}{2^n}\leq\frac{L}{2^n}$，且 $\sum \frac{L}{2^n}$ 收敛，所以级数 $\sum \frac{u_n(x)}{2^n}$ 在 $[0,1]$ 上一致收敛，从而和函数 $f(x)$ 在 $[0,1]$ 上连续。
> > 
> > 3° 设 $x_0\in(0,1)$ 为任一无理数，来求 $f'(x_0)$：
> > $$
> > \frac{f(x_0+h)-f(x_0)}{h} = \sum_{n=1}^{\infty} \frac{u_n(x_0+h)-u_n(x_0)}{h\cdot 2^n},
> > $$
> > 右端是关于自变量 $h$ 的函数项级数，取 $\delta>0$ 充分小，使得 $(x_0-\delta,x_0+\delta)\subset(0,1)$。由已知条件式 (1)，有
> > $$
> > \left|\frac{u_n(x_0+h)-u_n(x_0)}{h\cdot 2^n}\right|\leq\frac{L}{2^n}, \quad 0<h<\delta.
> > $$
> > 而 $\sum \frac{L}{2^n}$ 收敛，所以 $\sum \frac{u_n(x_0+h)-u_n(x_0)}{h\cdot 2^n}$ 关于 $h$ 在 $(x_0-\delta,x_0+\delta)$ 内一致收敛。于是可利用逐项取极限的定理，
> > $$
> > f'(x_0)=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}
> > =\sum_{n=1}^{\infty} \lim_{h\to 0}\frac{u_n(x_0+h)-u_n(x_0)}{h} \cdot \frac{1}{2^n}
> > =\sum_{n=1}^{\infty} \frac{1}{2^n}u_n'(x_0).
> > $$
> > 
> > 4° 设 $x_0=a_k$（有理点），这时
> > $$
> > f(x)=\sum_{n=1}^{\infty} \frac{u_n(x)}{2^n} = \sum_{n\neq k} \frac{u_n(x)}{2^n} + \frac{u_k(x)}{2^k}.
> > $$
> > 用 3° 中的方法，可知右边第一项在 $x_0=a_k$ 处可导，但根据已知条件，第二项在 $a_k$ 处不可导，故 $f(x)$ 在 $a_k$ 处不可导（$k=1,2,\cdots$）。即 $f(x)$ 在 $[0,1]$ 的有理点上无导数。

> [!example] ※例5.2.49
> 试构造一个函数，使之在 $(-\infty,+\infty)$ 内处处连续，但处处不可微。
> 
> > [!note] 方法
> > 用一串锯齿波（如图5.2.2中的 $u_n(x)$）进行叠加，这些波的振幅按 $n$ 以等比数列的方式无限变小，使级数 $f(x)=\sum u_n(x)$ 一致收敛，从而 $f(x)$ 连续。另一方面，让这些波的周期随 $n\nearrow$ 而无限变小（即振动得越来越快，无限变快），使得和波 $f(x)$ 的图象无限"粗糙"，$f(x)$ 处处不可导。
> 
> > [!solution]- 解
> > 在每个区间 $[m,m+1]$ 上（$m=0,\pm 1,\pm 2,\cdots$）令
> > $$
> > u_0(x)=\begin{cases}
> > x-m, & x\in[m,m+\frac{1}{2}),\\
> > m+1-x, & x\in[m+\frac{1}{2},m+1),
> > \end{cases}
> > $$
> > $$
> > u_1(x)=\frac{1}{4}u_0(4x),\cdots,u_n(x)=\frac{1}{4^n}u_0(4^n x),\cdots.
> > $$
> > 
> > 下面我们来证明
> > $$
> > f(x)=\sum_{n=0}^{\infty} u_n(x) \quad (1)
> > $$
> > 在 $(-\infty,+\infty)$ 内连续，但处处不可导。事实上：
> > 
> > 1° 因为 $|u_0(x)|\leq 1$，
> > $$
> > |u_n(x)|=\left|\frac{1}{4^n}u_0(4^n x)\right|\leq\frac{1}{4^n}, \quad \forall x\in(-\infty,+\infty),
> > $$
> > $\sum_{n=0}^{\infty} \frac{1}{4^n}$ 收敛，所以 $f(x)=\sum_{n=0}^{\infty} u_n(x)$ 在 $(-\infty,+\infty)$ 内一致收敛，$f(x)$ 处处连续。
> > 
> > 2° $\forall x_0\in(-\infty,+\infty)$，我们取
> > $$
> > x_n=x_0\pm\frac{1}{4^n}. \quad (2)
> > $$
> > 若我们证明了极限 $\lim_{n\to\infty}\frac{f(x_n)-f(x_0)}{x_n-x_0}$ 不存在，则 $f(x)$ 在 $x_0$ 处不可导。从而由 $x_0$ 的任意性知 $f(x)$ 处处不可导。由式 (1)，
> > $$
> > \frac{f(x_n)-f(x_0)}{x_n-x_0}
> > =\frac{1}{x_n-x_0}\left(\sum_{k=1}^{\infty} u_k(x_n)-\sum_{k=1}^{\infty} u_k(x_0)\right)
> > =\sum_{k=1}^{\infty} \frac{u_k(x_n)-u_k(x_0)}{x_n-x_0}.
> > $$
> > 
> > 注意 $|x_n-x_0|=\frac{1}{4^n}$。对于 $k\geq n$ 的 $u_k$ 而言，$\frac{1}{4^n}$ 是 $u_k$ 的周期 $\frac{1}{4^k}$ 的整数倍，因此
> > $$
> > u_k(x_n)=u_k(x_0) \quad \text{（当 } k\geq n \text{ 时）}.
> > $$
> > 故
> > $$
> > \frac{f(x_n)-f(x_0)}{x_n-x_0}=\sum_{k=0}^{n-1} \frac{u_k(x_n)-u_k(x_0)}{x_n-x_0}. \quad (3)
> > $$
> > 
> > 至此式 (2) 中的 $\pm$ 号尚未选定，为使式 (3) 无极限，我们规定 (2) 中的符号如此选取：使 $x_n$ 与 $x_0$ 位于锯齿波 $u_{n-1}(x)$ 呈直线的同一半波区间上。于是 $\frac{u_{n-1}(x_n)-u_{n-1}(x_0)}{x_n-x_0}$ 等于 $1$ 或 $-1$。因 $u_{n-2}(x)$ 的一个周期包含 $u_{n-1}(x)$ 的四个周期，故 $x_n$ 与 $x_0$ 位于 $u_{n-2}(x)$ 的同一直线段区间上，$\frac{u_{n-2}(x_n)-u_{n-2}(x_0)}{x_n-x_0}=1$ 或 $-1$。同理，式 (3) 中每一项皆为 $1$ 或 $-1$。如此选定之后，式 (3) 是这种级数 $\sum a_n$ 的部分和：其中 $a_n=1$ 或 $-1$。由于 $a_n$ 不 $\to 0$（当 $n\to\infty$），故 $\sum a_n$ 发散，从而式 (3) 当 $n\to\infty$ 时无极限。证毕。


#### d. 逐项积分与积分号下取极限

> [!note]
> **要点**
> 
> 1）若 $u_n(x)$ 在 $[a,b]$ 上可积（$n=1,2,\cdots$），级数 $\sum_{k=1}^{\infty} u_k(x)$ 在 $[a,b]$ 上一致收敛，则可逐项积分，即
> $$
> \int_a^b \sum_{k=1}^{\infty} u_k(x)\,dx = \sum_{k=1}^{\infty} \int_a^b u_k(x)\,dx. \qquad \text{(A)}
> $$
> 若未知该级数在 $[a,b]$ 上一致收敛，能否进行逐项积分，取决于是否有
> $$
> \lim_{n\to\infty}\int_a^b R_n(x)\,dx=0, \qquad \text{(B)}
> $$
> 其中 $R_n(x)$ 是 $\sum_{k=1}^{\infty}u_k(x)$ 前 $n$ 项和的余项。（因为
> $$
> \text{式(A)}\Leftrightarrow \lim_{n\to\infty}\left|\int_a^b\sum_{k=1}^{\infty}u_k(x)\,dx-\sum_{k=1}^{n}\int_a^b u_k(x)\,dx\right|=0
> $$
> $$
> \Leftrightarrow \lim_{n\to\infty}\left|\int_a^b\left(\sum_{k=1}^{\infty}u_k(x)-\sum_{k=1}^{n}u_k(x)\right)dx\right|=0
> $$
> $$
> \Leftrightarrow \lim_{n\to\infty}\int_a^b R_n(x)\,dx=0\quad(\text{式(B)}).
> $$
> 
> 2）函数项级数 $\sum_{k=1}^{\infty}u_k(x)$ 在区间 $I$ 上有意义，并且在 $I$ 上一致收敛，若极限 $\lim_{x\to x_0}u_n(x)$ 都存在，则可逐项取极限，即
> $$
> \lim_{x\to x_0}\sum_{k=1}^{\infty}u_k(x)=\sum_{k=1}^{\infty}\lim_{x\to x_0}u_k(x). \qquad \text{(C)}
> $$

> [!example] ☆例 5.2.50
> 设 $h(x),f_n'(x)$ 在 $[a,b]$ 上连续，$n=1,2,\cdots$，又对 $[a,b]$ 中任意的 $x_1,x_2$ 和正整数 $n$ 有
> $$
> |f_n(x_1)-f_n(x_2)|\le \frac{M}{n}|x_1-x_2|,
> $$
> 其中 $M>0$ 为常数，求证
> $$
> \lim_{n\to\infty}\int_a^b h(x)f_n'(x)\,dx=0. \quad (\text{南京大学})
> $$

> [!note] 分析
> 要证明 $\lim_{n\to\infty}\int_a^b h(x)f_n'(x)\,dx=0$，关键问题在于证明 $f_n'(x)\to0$（当 $n\to\infty$ 时，关于 $x\in[a,b]$）。因为 $h(x)$ 在 $[a,b]$ 上连续，所以 $h(x)$ 在 $[a,b]$ 上有界。若 $f_n'(x)\to0$，便有 $h(x)f_n'(x)\to0$，从而可在积分号下取极限，得出欲求的结果。下面只证 $f_n'(x)\to0$。

> [!proof]- 证
> 因 $f_n'(x)$ 在 $[a,b]$ 上连续，所以一致连续，$\forall\,1/n>0,\exists\,\delta>0$，当 $|x_1-x_2|<\delta$ 时，有
> $$
> |f_n'(x_1)-f_n'(x_2)|<\frac1n.
> $$
> 取 $m$ 充分大，使得 $(b-a)/m<\delta$，将 $[a,b]$ $m$ 等分：$a=x_0<x_1<\cdots<x_m=b$，利用已知条件
> $$
> |f_n(x_i)-f_n(x_{i-1})|\le \frac{M}{n}|x_i-x_{i-1}|.
> $$
> 由微分中值定理，$\exists\,\xi_i\in(x_{i-1},x_i)$ 使得 $|f_n'(\xi_i)|\le M/n$。于是 $\forall x\in[a,b]$，$x$ 必属于某个小区间 $[x_{i-1},x_i]$，所以
> $$
> |f_n'(x)|\le |f_n'(x)-f_n'(\xi_i)|+|f_n'(\xi_i)|<\frac1n+\frac{M}{n}=\frac{1+M}{n},
> $$
> 故 $f_n'(x)\to0$（$n\to\infty$）。

> [!example] 例 5.2.51
> 设 $g(x)$ 及 $f_n(x)\ge0$（$n=1,2,\cdots$）在 $[a,b]$ 上有界可积，且 $\forall c\in(a,b)$，当 $n\to\infty$ 时 $f_n(x)\to0$ 于 $[c,b]$ 上；$\lim_{n\to\infty}\int_a^b f_n(x)\,dx=1$，$\lim_{x\to a^+}g(x)=A$。试证
> $$
> \lim_{n\to\infty}\int_a^b g(x)f_n(x)\,dx=A.
> $$

> [!note] 分析
> 已知 $\lim_{n\to\infty}\int_a^b f_n(x)\,dx=1$，得 $\lim_{n\to\infty}\int_a^b Af_n(x)\,dx=A$。要证 $\lim_{n\to\infty}\int_a^b g(x)f_n(x)\,dx=A$，只需证明
> $$
> \lim_{n\to\infty}\int_a^b (A-g(x))f_n(x)\,dx=0.
> $$
> 将积分拆成两项：
> $$
> \int_a^b (A-g(x))f_n(x)\,dx=\int_a^{a+\delta}(A-g(x))f_n(x)\,dx+\int_{a+\delta}^b(A-g(x))f_n(x)\,dx.
> $$
> 因 $\lim_{x\to a^+}g(x)=A$，可见 $\delta>0$ 取得充分小时第一项能任意小，再将 $\delta$ 固定，因 $f_n(x)\to0$（当 $n\to\infty$ 时）于 $[a+\delta,b]$ 上，所以 $n$ 充分大时第二项能任意小。

> [!proof]- 证
> 由 $\lim_{x\to a^+}g(x)=A$ 知：$\forall\varepsilon>0,\exists\delta>0$（$\delta<b-a$），使得当 $a<x<a+\delta$ 时，
> $$
> |A-g(x)|<\frac{\varepsilon}{4}.
> $$
> 因此
> $$
> \left|\int_a^b (A-g(x))f_n(x)\,dx\right|\le \int_a^{a+\delta}|A-g(x)|f_n(x)\,dx+\int_{a+\delta}^b (|A|+|g(x)|)f_n(x)\,dx
> $$
> $$
> \le \frac{\varepsilon}{4}\int_a^{a+\delta}f_n(x)\,dx+(|A|+M)\int_{a+\delta}^b f_n(x)\,dx
> $$
> （这里 $M$ 表示 $g(x)$ 的界，即 $|g(x)|\le M$ 于 $[a,b]$ 上）。因 $\lim_{n\to\infty}\int_a^b f_n(x)\,dx=1$，所以
> $$
> \exists N_1>0,\ n>N_1\text{ 时},\ 0\le \int_a^{a+\delta}f_n(x)\,dx=\int_a^b f_n(x)\,dx-\int_{a+\delta}^b f_n(x)\,dx<2.
> $$
> 又因在 $[a+\delta,b]$ 上，$f_n(x)\to0$（当 $n\to\infty$ 时），所以 $\exists N_2>0$，当 $n>N_2$ 时，
> $$
> 0\le f_n(x)<\frac{\varepsilon}{2(|A|+M)(b-a-\delta)}.
> $$
> 取 $N=\max\{N_1,N_2\}$，则 $n>N$ 时，有
> $$
> \left|\int_a^b(A-g(x))f_n(x)\,dx\right|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$
> 证毕。

> [!exercise] 练习 1
> 求证等式
> $$
> \int_0^1 \frac{1}{x^x}\,dx=\sum_{n=1}^{\infty}\frac1{n^n}. \quad (\text{中国科学院})
> $$

> [!hint]- 提示
> 1）$$
> \int_0^1\frac1{x^x}\,dx=\int_0^1 e^{-x\ln x}\,dx=\int_0^1\sum_{n=0}^{\infty}\frac{(-x\ln x)^n}{n!}\,dx=\sum_{n=0}^{\infty}\int_0^1\frac{(-x\ln x)^n}{n!}\,dx. \qquad \text{(1)}
> $$
> 2）$$
> \sum_{n=0}^{\infty}\int_0^1\frac{(-x\ln x)^n}{n!}\,dx=\sum_{n=0}^{\infty}\frac{(-1)^n}{n!}\int_0^1 x^n\ln^n x\,dx=\sum_{n=1}^{\infty}\frac1{n^n}. \qquad \text{(2)}
> $$

> [!proof]- 证
> **1°**（证明可逐项求积分。）因为在 $(0,1)$ 上，$f(x)=x\ln x<0$，$f(1)=0$，应用 L'Hospital 法则，易知 $f(0^+)=0$。因此只要令 $f(0)=0$，则 $f(x)$ 在 $[0,1]$ 上连续，从而有界（记为 $M$）。（或由 $f'(x)=\ln x+1=0$ 得 $(0,1)$ 内唯一可疑点 $x=e^{-1}$，而区间端点上 $f(0)=f(1)=0$。所以 $|f(x)|\le |f(e^{-1})|\triangleq M$，于 $[0,1]$ 上。）
> 由此知：
> $$
> \left|\frac{(-x\ln x)^n}{n!}\right|=\left|\frac1{n!}(-f(x))^n\right|\le \frac1{n!}M^n.
> $$
> 而级数 $\sum_{n=1}^{\infty}\frac1{n!}M^n$ 收敛，故 $\int_0^1\sum_{n=0}^{\infty}\frac{(-x\ln x)^n}{n!}\,dx$ 在 $[0,1]$ 上一致收敛，可逐项求积分。等式（1）成立。
> 
> **2°**（利用分部积分。）
> $$
> \int_0^1 (x\ln x)^n\,dx=\int_0^1 x^n\ln^n x\,dx=\frac1{n+1}\int_0^1\ln^n x\,d(x^{n+1})
> $$
> $$
> =\left.\frac{x^{n+1}\ln^n x}{n+1}\right|_0^1-\frac{n}{n+1}\int_0^1 x^n\ln^{n-1}x\,dx
> =\frac{(-1)^n\,n}{n+1}\int_0^1 x^n\ln^{n-1}x\,dx
> $$
> $$
> =\cdots=\frac{(-1)^n n!}{(n+1)^{n+1}}\int_0^1 dx=\frac{(-1)^n n!}{(n+1)^{n+1}}.
> $$
> 说明式（2）成立。于是
> $$
> \int_0^1\frac1{x^x}\,dx=\sum_{n=0}^{\infty}\int_0^1\frac1{n!}(-x\ln x)^n\,dx=\sum_{n=0}^{\infty}\frac{(-1)^n}{n!}\cdot\frac{(-1)^n n!}{(n+1)^{n+1}}=\sum_{n=1}^{\infty}\frac1{n^n}.
> $$

> [!exercise] 练习 2
> 设 $\{f_n(x)\}$ 是定义在 $[-1,1]$ 上的连续函数序列，在原点附近一致有界，若 $\forall\delta:1>\delta>0$，$f_n(x)$ 在 $[-1,-\delta]\cup[\delta,1]$ 上一致收敛于零，且函数 $g(x)$ 在 $[-1,1]$ 上连续，$g(0)=0$，求证：
> $$
> \lim_{n\to\infty}\int_{-1}^1 f_n(x)g(x)\,dx=g(0). \qquad \text{(1)}
> $$

> [!hint]- 提示
> 1）在原点附近 $g$ 能任意小，$|f_n|$ 一致有界，故 $f_ng$ 在原点邻域内的积分可任意小。
> 
> 2）其他地方 $g$ 保持有界而 $|f_n|$ 一致趋向零，故其他地方 $f_ng$ 的积分也可任意小。

> [!proof]- 证
> **1°** $\{f_n(x)\}$ 在原点附近一致有界，意即：$\exists M>0$ 及 $\delta_1>0$ 使得
> $$
> |f_n(x)|\le M\qquad (\forall x\in(-\delta_1,\delta_1),\ \forall n\in\mathbb N). \qquad \text{(2)}
> $$
> 又 $g(x)$ 连续，且 $g(0)=0$，故 $\forall\varepsilon>0$（$\varepsilon<1$），$\exists\delta_2>0$（$\delta_2<\tfrac12$）使得当 $|x|<\delta_2$ 时有
> $$
> |g(x)|=|g(x)-g(0)|<\frac{\varepsilon}{4M\delta_2}. \qquad \text{(3)}
> $$
> 取 $\delta=\min\{\delta_1,\delta_2\}$，则
> $$
> \left|\int_{-1}^1 f_n(x)g(x)\,dx\right|\le \left|\int_{-\delta}^{\delta} f_n(x)g(x)\,dx\right|+\left|\left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)f_n(x)g(x)\,dx\right|\triangleq I+J. \qquad \text{(4)}
> $$
> 利用式（2）和（3）：
> $$
> I=\left|\int_{-\delta}^{\delta}f_n(x)g(x)\,dx\right|\le \int_{-\delta}^{\delta}|f_n(x)||g(x)|\,dx\le M\cdot\frac{\varepsilon}{4M\delta}\cdot 2\delta=\frac{\varepsilon}{2}. \qquad \text{(5)}
> $$
> 
> **2°** 函数 $g(x)$ 在 $[-1,1]$ 连续，故有界，即存在 $M_1>0$，使得 $|g(x)|<M_1$。于是
> $$
> J\le \left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)|f_n(x)||g(x)|\,dx\le M_1\left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)|f_n(x)|\,dx. \qquad \text{(6)}
> $$
> 根据题设知在 $[-1,-\delta]\cup[\delta,1]$ 上，$\forall\varepsilon>0$（$\varepsilon<1$），$\exists N>0$ 使得 $n>N$ 时有 $|f_n(x)|<\varepsilon/[4M_1(1-\delta)]$。故式（6）可写成
> $$
> |J|\le \frac{\varepsilon}{4M_1(1-\delta)}\cdot M_1\left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)dx=\frac{\varepsilon}{2}. \qquad \text{(7)}
> $$
> 
> **3°** 最后得
> $$
> \left|\int_{-1}^1 f_n(x)g(x)\,dx\right|\le I+J\le \frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$
> 此式表明（1）成立，命题获证。

> [!exercise] ☆练习 3
> 设 $\{f_n(x)\}$ 是定义在 $[-1,1]$ 上的连续函数序列，若
> 
> i）$\lim_{n\to\infty}\int_{-1}^1 f_n(x)\,dx=1$；
> 
> ii）$\forall\delta:1>\delta>0$，$f_n(x)$ 在 $[-1,-\delta]\cup[\delta,1]$ 上一致收敛于零。
> 
> 求证：对 $[-1,1]$ 上任意连续函数 $g(x)$，
> $$
> \lim_{n\to\infty}\int_{-1}^1 f_n(x)g(x)\,dx=g(0). \qquad \text{(1)}
> $$
> （华东师范大学）

> [!hint]- 提示
> 1）利用拟合法，由 $\lim_{n\to\infty}\int_{-1}^1 f_n(x)\,dx=1$ 出发，可将问题转化为：求证
> $$
> \lim_{n\to\infty}\int_{-1}^1 f_n(x)(g(x)-g(0))\,dx=0. \qquad \text{(2)}
> $$
> 2）
> $$
> \left|\int_{-1}^1 f_n(x)(g(x)-g(0))\,dx\right|
> \le \left|\int_{-\delta}^{\delta}f_n(x)(g(x)-g(0))\,dx\right|+\left|\left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)f_n(x)(g(x)-g(0))\,dx\right|\triangleq I+J. \qquad \text{(3)}
> $$
> 3）在 $[-1,-\delta]\cup[\delta,1]$ 上，$g(x)-g(0)$ 有界，$f_n(x)$ 一致收敛于零，因此第二项 $J\to0$（$n\to\infty$）。

> [!note] 分析
> 证明式（3）第一项 $I$ 的极限为 0 是本题的关键。上题（练习 2）在这里靠的是 $f_n$ 一致有界，另一因子趋向零；例 5.2.51 在这里靠的是 $f_n\ge0$。如果这里也有条件 $f_n\ge0$，那么 $\forall\varepsilon>0$，让 $|g(x)-g(0)|\le\varepsilon$，则
> $$
> I=\left|\int_{-\delta}^{\delta}f_n(x)(g(x)-g(0))\,dx\right|\le \int_{-\delta}^{\delta}f_n(x)|g(x)-g(0)|\,dx\le \varepsilon\int_{-\delta}^{\delta}f_n(x)\,dx\le \varepsilon\int_{-1}^1 f_n(x)\,dx\le \varepsilon.
> $$
> 或者利用第一积分中值定理，$\exists\xi\in(-\delta,\delta)$，使得
> $$
> I=\left|\int_{-\delta}^{\delta}f_n(x)(g(x)-g(0))\,dx\right|\le \left|(g(\xi)-g(0))\int_{-\delta}^{\delta}f_n(x)\,dx\right|
> \le \varepsilon\int_{-\delta}^{\delta}f_n(x)\,dx\le \varepsilon\int_{-1}^1 f_n(x)\,dx\le \varepsilon,
> $$
> 则问题也可以解决。这里撤销了传统条件"$f_n\ge0$"，是本题的特色和创新。由于取消 $f_n\ge0$ 后 $f_n$ 可以无穷多次变号，我们不可随便使用第一积分中值定理。

> [!proof]- 证
> 下面我们将证明虽然在 $[0,1]$ 上 $f_n$ 可能变号，但当 $\delta>0$ 且充分小时，$f_n(x)$ 在 $[-\delta,\delta]$ 上会保持恒正，因而可在 $[-\delta,\delta]$ 上应用第一积分中值定理。剩下问题就可按练习 2 的方法同样处理。
> 
> 利用条件 i）和条件 ii），在 $[-1,-\delta]\cup[\delta,1]$ 上，$\forall\varepsilon>0$（$\varepsilon\le\tfrac12$），$\exists N>0$，当 $n>N$ 时有
> $$
> |f_n(x)|<\frac{\varepsilon}{2(1-\delta)}。
> $$
> 于是
> $$
> \int_{-\delta}^{\delta}f_n(x)\,dx=\int_{-1}^1 f_n(x)\,dx-\left|\left(\int_{-1}^{-\delta}+\int_{\delta}^1\right)f_n(x)\,dx\right|\ge 1-\varepsilon\ge \frac12.
> $$
> （设 $n>N$）在 $(-\delta,\delta)$ 上，当 $x\to0$ 时，若 $f_n(x)$ 由正变为负，则每次变负后，迟早会返回正，且值 $\ge\tfrac12$（不然一直为负时 $\int_{-\delta}^{\delta}f_n(x)\,dx$ 不可能 $\ge\tfrac12$（$\delta>0$ 充分小））。进而 $f_n(x)$ 在 $(-\delta,\delta)$ 上不可能无穷次变号，否则 $f_n(x)$ 的值就会上、下穿过 $[0,1/2]$ 无穷多遍，于是，每个 $y\in[0,1/2]$ 都是函数图像 $y=f_n(x)$ 的极限点（极限点不唯一），极限 $\lim_{x\to0}f_n(x)$ 不存在，与 $f_n(x)$ 的连续性矛盾。因此，动点在 $(-\delta,\delta)$ 上趋向原点时最多只有有限次变负，最后一次变负返回后，将一直为正。故让 $(-\delta,\delta)$ 充分缩小，就能保证 $f_n(x)$ 在更小的 $(-\delta,\delta)$ 上恒为正。
> 
> 通过上面的分析，我们知道当 $x\to0$ 时，虽然 $f_n(x)$ 开始可以变号，但当 $\delta>0$ 充分小时，就会在 $[-\delta,\delta]$ 上保持恒正，就可以应用第一积分中值定理。剩下的工作与上题（练习 2）一样。

> [!example] ☆例 5.2.52
> 试证级数 $\sum_{n=1}^{\infty}x^{2n}\ln x$ 在 $(0,1)$ 内不一致收敛，但在 $[0,1]$ 上可逐项积分。

> [!proof]- 证
> **1°** 当 $x=1$ 时，级数通项 $u_n(1)=x^{2n}\ln x|_{x=1}=0$；当 $0<x<1$ 时，$\sum_{n=1}^{\infty}x^{2n}\ln x$ 为等比级数，所以和
> $$
> S(x)=\begin{cases}
> \dfrac{x^2}{1-x^2}\ln x, & 0<x<1,\\
> 0, & x=1.
> \end{cases}
> $$
> 可见 $S(1^-)=\lim_{x\to1^-}\dfrac{x^2\ln[1-(1-x)]}{(1+x)(1-x)}=\dfrac12\ne S(1)$。故该级数非一致收敛（根据和函数连续定理）。
> 
> **2°**（证明能逐项积分。）因
> $$
> R_n(x)=\sum_{k=n+1}^{\infty}x^{2k}\ln x=\frac{x^{2n+2}}{1-x^2}\ln x=\frac{x^2\ln x}{1-x^2}\cdot x^{2n},
> $$
> 其中 $\lim_{x\to0^+}\dfrac{x^2\ln x}{1-x^2}$ 及 $\lim_{x\to1^-}\dfrac{x^2\ln x}{1-x^2}$ 都有有限极限，且 $\dfrac{x^2\ln x}{1-x^2}$ 在 $(0,1)$ 内连续，所以 $\dfrac{x^2\ln x}{1-x^2}$ 在 $(0,1)$ 内有界，即 $\exists M>0$，使得
> $$
> \left|\frac{x^2\ln x}{1-x^2}\right|\le M.
> $$
> 故 $|R_n(x)|\le M\cdot x^{2n}$，
> $$
> \left|\int_0^1 R_n(x)\,dx\right|\le \int_0^1|R_n(x)|\,dx\le M\int_0^1 x^{2n}\,dx=\frac{M}{2n+1}\to0\quad(\text{当 }n\to\infty\text{ 时}).
> $$
> 此即表明 $\lim_{n\to\infty}\int_0^1 R_n(x)\,dx=0$。级数可以逐项积分。


#### e. 和函数的其他性质（综合性问题）

> [!example] 例 5.2.53
> 设 $f_n(x)$（$n=1,2,\cdots$）在 $[0,1]$ 上连续，并且
> $$
> f_n(x)\ge f_{n+1}(x),\ \forall x\in[0,1],\ n=1,2,\cdots。
> $$
> 若 $f_n(x)$ 在 $[0,1]$ 收敛于 $f(x)$，试证明 $f(x)$ 在 $[0,1]$ 上达到最大值。（北京大学）

> [!proof]- 证明
> 因为 $f_n(x) \rightrightarrows f(x)$，所以
> 
> $f(x) \le f_n(x)$（$\forall n\in\mathbb{N}$，$\forall x\in[0,1]$）.      （1）
> 
> 因 $f_1(x)$ 在 $[0,1]$ 上连续，所以有上界 $M$，故 $f(x) \le f_1(x) \le M$（$\forall x\in[0,1]$）. 因此，
> $\mu = \sup_{[0,1]} f(x)$ 存在.
> 
> 假若 $f(x)$ 在 $[0,1]$ 上不达上确界 $\mu$，则由确界定义，可知 $\exists\{x_n\}\subset[0,1]$，使得 $\lim_{n\to\infty} f(x_n)=\mu$. 利用致密性原理，在有界序列 $\{x_n\}$ 里，必存在收敛的子列 $\{x_{n_k}\}\to x_0\in[0,1]$（当 $k\to\infty$ 时）. 我们证明 $f(x_0)=\mu$. 不然的话，因 $\mu$ 为上确界，$f(x_0)<\mu$，从而 $\exists\mu_1$，使得
> 
> $f(x_0)<\mu_1<\mu$.      （2）
> 
> 因为 $\lim_{n\to\infty} f_n(x_0)=f(x_0)$，所以 $\exists n_1$ 使得 $f_{n_1}(x_0)<\mu_1$. 又因为 $f_{n_1}$ 连续，所以 $\exists\delta>0$，当 $x\in(x_0-\delta,x_0+\delta)\cap[0,1]$ 时，有 $f_{n_1}(x)<\mu_1$. 由于 $x_{n_k}\to x_0$（当 $k\to\infty$），对 $\delta>0$，$\exists K>0$，当 $k>K$ 时，$|x_0-x_{n_k}|<\delta$，于是 $f_{n_1}(x_{n_k})<\mu_1$. 联系式（1），知 $f(x_{n_k})<\mu_1$，故 $\mu=\lim_{k\to\infty} f(x_{n_k})\le\mu_1$. 与式（2）矛盾. 证毕.

> [!example] 例 5.2.54
> 设 $\{f_n(x)\}$ 是在 $(-\infty,+\infty)$ 上定义并且连续的函数序列，试构造一个函数 $f(x)$，使之在 $(-\infty,+\infty)$ 上有界、连续，当且仅当对所有 $n$：$f_n(x)=0$ 时 $f(x)=0$.

> [!hint]- 提示
> 令 $f(x)=\sum_{n=1}^\infty a_n |f_n(x)|/(1+|f_n(x)|)$（其中 $\sum_{n=1}^\infty a_n$ 为任意一个收敛的正项级数）.

> [!example] ☆例 5.2.55
> 设 $f_n(x)$ 在 $[a,b]$ 上可积（$n=1,2,\ldots$），且在 $[a,b]$ 上 $f_n(x) \rightrightarrows f(x)$（当 $n\to\infty$ 时），试证明 $f(x)$ 在 $[a,b]$ 上可积.（天津大学）

> [!note] 分析
> $f$ 可积的充分必要条件是：$\forall\varepsilon>0$，$\exists[a,b]$ 的一个分划 $T$，使得 $\sum_{i=0}^{k-1} \omega_i^f \Delta x_i < \varepsilon$. 已知 $f_n$ 可积，所以对 $f_n$ 可找到这种分划 $T$. 又因 $n$ 充分大时，$f_n$ 可以任意逼近 $f$（关于 $x\in[a,b]$ 一致）. 因此，取充分大的 $n$，对 $f_n$ 取分划 $T$，然后以此分划作为 $f$ 的分划即可.

> [!proof]- 证明
> 因当 $n\to\infty$ 时，$f_n(x) \rightrightarrows f(x)$（关于 $x\in[a,b]$），故 $\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，对于一切 $x\in[a,b]$，恒有
> 
> $$|f(x)-f_n(x)| < \varepsilon/[4(b-a)].$$
> 
> 又因 $f_n$ 在 $[a,b]$ 上可积，对此 $\varepsilon>0$，$\exists[a,b]$ 的一个分划 $T$：$a=x_0<x_1<\ldots<x_k=b$，使得
> 
> $$\sum_{i=0}^{k-1} \omega_i \Delta x_i < \varepsilon/2，$$
> 
> 其中 $\omega_i = \sup_{x_i',x_i''\in[x_{i-1},x_i]} |f_n(x_i')-f_n(x_i'')|$. 但是 $\forall x_i',x_i''\in[x_{i-1},x_i]$，有
> 
> $$|f(x_i')-f(x_i'')| \le |f(x_i')-f_n(x_i')| + |f_n(x_i')-f_n(x_i'')| + |f_n(x_i'')-f(x_i'')|$$
> $$\le \varepsilon/[4(b-a)] + \omega_i + \varepsilon/[4(b-a)] = \varepsilon/[2(b-a)] + \omega_i，$$
> 
> 所以
> 
> $$\omega_i^f \equiv \sup_{x_i',x_i''\in[x_{i-1},x_i]} |f(x_i')-f(x_i'')| \le \varepsilon/[2(b-a)] + \omega_i.$$
> 
> 因此
> 
> $$\sum_{i=0}^{k-1} \omega_i^f \Delta x_i \le \varepsilon/[2(b-a)] \sum_{i=0}^{k-1} \Delta x_i + \sum_{i=0}^{k-1} \omega_i \Delta x_i \le \varepsilon/2 + \varepsilon/2 = \varepsilon.$$ 证毕.


### 三、一致逼近问题

> [!theorem] Weierstrass 多项式逼近定理
> 有界闭区间 [a,b] 上的连续函数 f(x) 可用多项式一致逼近，即存在多项式序列 {P_n(x)}（其中 P_n(x) 是 n 次多项式），使得 n→∞ 时 P_n(x) ⇉ f(x)（在 [a,b] 上关于 x 一致），亦即：∀ε>0，∃N>0，使得当 n>N 时，有 |f(x)-P_n(x)|<ε（∀x∈[a,b]）.

> [!example] 例 5.2.56
> 设 f(x) 在 [0,1] 上连续，且 $\int_0^1 f(x)x^n dx=0$（n=0,1,2,…），证：f(x)≡0.（中国科学技术大学）

> [!proof]- 证 I
> 由 f 在 [0,1] 上连续，可得 f(x) 在 [0,1] 上必有界：∃M>0，|f(x)|≤M（∀x∈[0,1]）. 根据多项式逼近定理，∀ε_n>0，∃P_n(x)=$\sum_{k=0}^n a_k x^k$（多项式），使得 ∀x∈[0,1]，恒有 |f(x)-P_n(x)|<ε_n/M.
> 
> 因 $\int_0^1 f(x)x^n dx=0$（n=0,1,2,…），知 $\int_0^1 f(x)P_n(x) dx=0$. 故
> $$
> 0 \le \int_0^1 f^2(x) dx = \left|\int_0^1 f(x)(f(x)-P_n(x)) dx + \int_0^1 f(x)P_n(x) dx\right|
> \le \int_0^1 |f(x)(f(x)-P_n(x))| dx \le M \cdot \varepsilon_n/M = \varepsilon_n.
> $$
> 
> 再令 ε_n→0，可知 $\int_0^1 f^2(x) dx=0$，f(x)≡0.

> [!proof]- 证 II
> 根据多项式逼近定理，存在 P_n(x) ⇉ f(x)（当 n→∞ 时，关于 x∈[0,1] 一致）. 因 f 有界，故 f(x)P_n(x) ⇉ f²(x)（当 n→∞ 时，关于 x∈[0,1] 一致）. 从而可在积分号下取极限：
> $$
> 0 \le \int_0^1 f^2(x) dx = \int_0^1 \lim_{n\to\infty} f(x)P_n(x) dx = \lim_{n\to\infty} \int_0^1 f(x)P_n(x) dx = 0,
> $$
> 得 $\int_0^1 f^2(x) dx=0$，f(x)≡0.

> [!example] 例 5.2.57
> 若实系数多项式序列 {P_n(x)} 在 R 上一致收敛于函数 f(x)，试证：f(x) 必是多项式函数.（华东师范大学，北京大学）

> [!proof]- 证
> 因已知 n→∞ 时，P_n(x) ⇉ f(x)（关于 x∈R 一致）. 由 Cauchy 准则：∀ε>0，∃N>0，当 m>n>N 时，有
> $$
> |P_m(x)-P_n(x)|<\varepsilon \quad (\forall x\in\mathbb{R}). \tag{1}
> $$
> 
> 由此能断言：当 m>n>N 时，P_m(x)，P_n(x) 只可能是同一多项式，最多只是常数项不同（不然的话，当 x→+∞ 时，|P_m(x)-P_n(x)|→+∞，与式（1）矛盾）. 因此，P_n(x) 可记作
> $$
> P_n(x)=P(x)+a_n \quad \text{（$a_n$ 是常数项）}. \tag{2}
> $$
> 
> 代入式（1），得 ∀ε>0，∃N>0，当 m>n>N 时有 |a_m-a_n|<ε. 由 Cauchy 准则知存在：$\lim_{n\to\infty} a_n = c$. 于是在式（2）里令 n→∞，取极限得 f(x)=P(x)+c（f 为多项式）. 证毕.

> [!example] 类题
> 设 I 是无穷区间，f(x) 在 I 上连续（不是多项式），试证：不存在多项式序列 {P_n(x)} 在 I 上一致收敛于 f(x).（北京大学，中国科学技术大学）

> [!proof]- 证
> （有了上题，本题自明，也可直接证明.）
> 
> 若有多项式序列 P_n(x)→f(x)（当 n→∞ 时，关于 x∈I），那么（根据 Cauchy 准则）∀ε>0，∃N>0，当 m>n>N 时，
> $$
> |P_n(x)-P_m(x)|<\varepsilon \quad (\forall x\in I). \tag{1}
> $$
> 
> 令 x→+∞，仍保持成立，说明：（当 m>n>N 时）P_n(x)-P_m(x) 中只含 x 的零次项. 换句话说：对于 P_n(x) 和 P_m(x)，如果不看常数项，则 {P_n(x)}_{n>N} 统统是同一个多项式，（当 n→∞ 时）P_n(x)→f(x)，说明 f(x) 只能是一多项式. 矛盾. 证毕.

> [!example] ☆例 5.2.58
> 设 f(x) 在 I 上有连续导数，$F_n(x)=n[f(x+1/n)-f(x)]$.
> 
> 1）证明：若 I 是有界闭区间，则 {F_n(x)} 在 I 上一致收敛；
> 
> 2）如果 I 是有界开区间，问：{F_n(x)} 是否仍在 I 上一致收敛.（北京大学）

> [!proof]- 证
> 根据导数定义，明显有
> $$
> F_n(x)=n[f(x+1/n)-f(x)]\to f'(x) \quad (n\to\infty).
> $$
> 
> 要证在 I 上 {F_n(x)} 一致收敛，即要证明：∀ε>0，∃N>0，使得 n>N 时有
> $$
> |F_n(x)-f'(x)|<\varepsilon \quad (\forall x\in I). \tag{1}
> $$
> 
> **1）** 当 I 是有界闭区间时：若 f'(x) 连续，根据 Cantor 定理，可知 f'(x) 一致连续，即：∀ε>0，∃δ>0；∀x_1,x_2∈I，当 |x_1-x_2|<δ 时，有
> $$
> |f'(x_2)-f'(x_1)|<\varepsilon. \tag{2}
> $$
> 
> 如此，∀x∈I，只要取 N>1/δ，则当 n>N 时，利用 Lagrange 定理，∃ξ_n：x<ξ_n<x+1/n，使得
> $$
> f(x+1/n)-f(x)=f'(\xi_n)\cdot 1/n,
> $$
> |ξ_n-x|<1/n<1/N<δ. 由式（2）知 |f'(ξ_n)-f'(x)|<ε. 故
> $$
> |F_n(x)-f'(x)| = |n[f(x+1/n)-f(x)]-f'(x)| < |f'(\xi_n)-f'(x)| < \varepsilon,
> $$
> 表明式（1）成立. 所以当 n→∞ 时，F_n(x) ⇉ f'(x)（在 I 上关于 x 一致）. 故 {F_n(x)} 在 I 上一致收敛.
> 
> **2）** 否！（作反例，使得 f 和 f' 是在局部无限变陡的函数（如：1/x，ln x，cot x，…）.）
> 
> 反例：令 f(x)=1/x（∀x∈(0,1)），
> $$
> \lim_{n\to\infty} F_n(x)=\lim_{n\to\infty} n[f(x+1/n)-f(x)]=f'(x)=(1/x)'=-1/x^2.
> $$
> 
> 若取 ε_0=1/2，∀n>1，令 x_n=1/n，则 f(x_n)=n，f(x_n+1/n)=n/2，且
> $$
> f'(x_n)=-1/x_n^2=-n^2, \quad F_n(x_n)=n[f(x_n+1/n)-f(x_n)]=n(n/2-n)=-n^2/2.
> $$
> 
> 因此
> $$
> |F_n(x_n)-f'(x_n)| = |-n^2/2+n^2| = n^2/2 > \varepsilon_0.
> $$
> 
> 说明式（2）不成立. 此反例说明：当有界闭区间改为有界开区间时，原结论不再成立.


### 单元练习 5.2

> [!exercise] 5.2.1
> 1）设
> 
> i）$f_n(x)$ 在 $[a,b]$ 上连续，$n=1,2,\ldots$；
> ii）$\{f_n(x)\}$ 在 $[a,b]$ 上一致收敛于 $f(x)$；
> iii）在 $[a,b]$ 上 $f_n(x)\leq f(x)$，$n=1,2,\ldots$，
> 
> 试证 $e^{f_n(x)}$ 在 $[a,b]$ 上一致收敛于 $e^{f(x)}$；
> 
> 2）若将 1）中条件 iii）去掉，则 $\{e^{f_n(x)}\}$ 是否还一致收敛，试证明你的结论。（河北师范大学）

> [!hint]- 提示
> 2）$\exists M>0$，使 $|f(x)|\leq M$，从而 $n$ 充分大时，$|f_n(x)|\leq |f(x)|+|f_n(x)-f(x)|\leq M+1$，$0\leq |e^{f(x)}-e^{f_n(x)}|\leq e^{M+1}|f_n(x)-f(x)|$。
> 
> 或者 用 $e^y$ 在 $[-M-1,M+1]$ 上一致连续。 由 $\varepsilon>0$ 找 $\delta>0$，再根据 $f_n\to f$，由 $\delta>0$ 找 $N_0$。

> [!exercise] 5.2.2
> 设 $f_n(x)=\sum_{k=1}^n \frac{1}{n} \cos(x+\frac{k}{n})$，$n=1,2,\ldots$，证明在 $(-\infty,+\infty)$ 上 $\{f_n(x)\}$ 一致收敛。（兰州大学）

> [!hint]- 提示
> 可参看例 5.2.1。

> [!exercise] *5.2.3
> 设
> 
> $$f_n(x)= \frac{\int_0^x (1-t^2)^n dt}{\int_0^1 (1-t^2)^n dt}，g_n(x)=\int_0^x f_n(t) dt$$
> 
> 试证：
> 
> 1）当 $n\to\infty$ 时，$f_n(x)\to \begin{cases} -1， & -1\leq x\leq -\varepsilon； \\ 1， & \varepsilon\leq x\leq 1 \end{cases}$ （$0<\varepsilon<1$）；
> 
> 2）$g_n(x) \rightrightarrows |x|$ 关于 $x\in[-1,1]$，当 $n\to\infty$ 时。

> [!hint]- 提示
> 1）可参看例 4.1.6。
> 
> 2）注意 $|x|=\int_0^x \text{sgn}\, x\, dx$，然后用分段法（见例 4.1.4）证明 $\int_0^x (f_n(x)-\text{sgn}\, x)\, dx \to 0$（$n\to\infty$），关于 $x\in[-1,1]$ 一致。

> [!exercise] ☆5.2.4
> 试证级数 $\sum_{n=1}^\infty (-1)^n(1-x)x^n$ 在区间 $[0,1]$ 上绝对收敛、一致收敛，但不是绝对一致收敛（指各项取绝对值之后，仍一致收敛）。

> [!hint]- 提示
> 在 $[0,1]$ 上，$\sum_{k=0}^{n-1} (1-x)x^k\to S(x)=\begin{cases} 0， & \text{当 } x=1 \text{ 时}； \\ 1， & \text{当 } 0\leq x<1 \text{ 时} \end{cases}$，可见原级数绝对收敛，$S(x)$ 不连续，违反保连续性，故原级数非绝对一致收敛。 原级数为 Leibniz 级数，
> 
> $$|S(x)-S_{n-1}(x)|=|r_{n-1}(x)|\leq (1-x)x^n\leq \max_{x\in[0,1]}(1-x)x^n = \frac{1}{n+1}\left(\frac{n}{n+1}\right)^n \leq \frac{1}{n+1}\to 0 \quad (n\to\infty)$$
> 
> 故原级数在 $[0,1]$ 上一致收敛。

> [!exercise] 5.2.5
> 判断级数 $\sum_{n=1}^\infty \frac{(-1)^n}{x+n}$ 在 $0<x<+\infty$ 内是否一致收敛。

> [!hint]- 提示
> $|r_n|\leq \frac{1}{n+1}\to 0$（$n\to\infty$）。

> [!exercise] 5.2.6
> 讨论级数 $\sum_{n=1}^\infty x e^{-(n-1)x}$ 关于 $0\leq x\leq 1$ 是否一致收敛？（复旦大学）

> [!hint]- 提示
> $r_n(x)= \frac{x e^{-nx}}{1-e^{-x}} \to 0$（$n\to\infty$），但 $\sup_{x\in[0,1]} r_n(x)=1\not\to 0$，$[0,1]$ 上非一致收敛。 $\forall 0<\varepsilon<1$，当 $x\in[\varepsilon,1]$ 时，$0\leq r_n(x)\leq \frac{e^{-n\varepsilon}}{1-e^{-\varepsilon}} \to 0$（$n\to\infty$），故级数在 $[\varepsilon,1]$ 上一致收敛。

> [!exercise] ☆5.2.7
> 讨论级数 $\sum_{n=1}^\infty \frac{n^2}{(x+1/n)^n}$ 的收敛性和一致收敛性（$x\geq 0$）。（华东师范大学）

> [!hint]- 提示
> 1）当 $x\in(1,+\infty)$ 时，因 $\forall c>1$，$x>c$ 时通项 $u_n(x)\leq \frac{n^2}{c^n}$，而 $\sum_{n=1}^\infty \frac{n^2}{c^n}$ 收敛，故原级数在 $(1,+\infty)$ 内收敛且内闭一致收敛。 在 $(1,+\infty)$ 内，令 $x_n=1+\frac{1}{n}$，通项 $u_n(x_n)= \frac{n^2}{(1+2/n)^n} \not\to 0$，故原级数在 $(1,+\infty)$ 内非一致收敛。 2）当 $x\leq 1$ 时，通项 $u_n(x)\geq \frac{n^2}{(1+1/n)^n} \to +\infty$，原级数发散。

> [!exercise] 5.2.8
> 讨论级数 $\sum_{n=1}^\infty \frac{x^{2n}}{1+x^{2n+1}}$（$x\geq 0$）的一致收敛性。（南京大学）

> [!hint]- 提示
> 当 $|x|\geq 1$ 时，通项$\not\to 0$，发散。 $\forall q:0<q<1$，当 $0\leq x\leq q$ 时，$0\leq$通项$<q^{2n}$，级数在 $[0,q]$ 上一致收敛；但在 $(0,1)$ 上非一致收敛，因通项$\to \frac{1}{2}\neq 0$（当 $x\to 1^-$ 时），与 Cauchy 准则矛盾。

> [!exercise] *5.2.9
> 设函数项级数 $\sum_{k=1}^\infty u_k(x)$ 在 $[a,b]$ 上收敛，试证：若对任何 $x\in[a,b]$，$\exists \delta_x>0$，$G_x>0$，使对任意 $y\in(x-\delta_x,x+\delta_x)\cap[a,b]$ 与自然数 $n$，都有 $|\sum_{k=1}^n u_k(y)|<G_x$，则 $\sum_{k=1}^\infty u_k(x)$ 在 $[a,b]$ 上一致收敛。（北京师范大学）

> [!hint]- 提示
> 用有限覆盖定理$\Rightarrow$部分和的导数一致有界$\Longrightarrow$等度连续$\Longrightarrow$一致收敛。

> [!exercise] ※5.2.10
> 设 $b_1\geq b_2\geq \cdots\geq b_n\geq \cdots\geq 0$，试证：级数 $\sum_{n=1}^\infty b_n \sin nx$ 在任意区间上一致收敛的充要条件是 $n\to\infty$ 时 $nb_n\to 0$。

> [!proof]- 证
> 1°（必要性）已知 $\sum_{k=1}^\infty b_k \sin kx$ 在（$-\infty，+\infty$）上一致收敛，（应用 Cauchy 准则）$\forall \varepsilon>0$，$\exists N>0$，$\forall n>N$，有
> 
> $$\left|\sum_{k=n+1}^{2n} b_k \sin kx\right| < \frac{\sqrt{2}}{4}\varepsilon，x\in（-\infty，+\infty）。$$
> 
> 对此 $n$，取 $x=\frac{\pi}{4n}$，则
> 
> $$\frac{\sqrt{2}}{4}\varepsilon > \sum_{k=n+1}^{2n} b_k \sin\left(\frac{k\pi}{4n}\right) > n b_{2n} \sin\left(\frac{\pi}{4}\right) = 2n b_{2n} \frac{\sqrt{2}}{4}。$$
> 
> 可见
> 
> $$\lim_{n\to\infty} 2n b_{2n} = 0。$$
> 
> 同理，有 $\lim_{n\to\infty}(2n+1)b_{2n+1}=0$。 故 $\lim_{n\to\infty} n b_n = 0$ 获证。
> 
> 2°（充分性）因为 $\sin kx$ 是以 $2\pi$ 为周期的奇函数，只要证明 $\sum_{k=1}^\infty b_k \sin kx$ 在 $[0，\pi]$ 上一致收敛，则它在任意区间上都一致收敛。 又由 $b_n>0$ 单调递减，$\lim_{n\to\infty}n b_n=0$，可知 $\{b_n\}$ 单调下降趋向 0（关于 $x$ 一致）。 而已知
> 
> $$\left|\sum_{k=1}^n \sin kx\right| \leq \frac{1}{|\sin(x/2)|} \quad （见例 5.2.26 式（1）），$$
> 
> 因此，当 $\frac{\pi}{2}\leq x<\pi$ 时，有
> 
> $$\left|\sum_{k=1}^n \sin kx\right| \leq \frac{1}{|\sin(x/2)|} \leq \sqrt{2}。$$
> 
> 利用 Dirichlet 判别法，知 $\sum_{k=n}^\infty b_k \sin kx$ 在 $[\frac{\pi}{2}，\pi]$ 上一致收敛。
> 
> （剩下只需证明：原级数 $\sum_{k=n}^\infty b_k \sin kx$ 在 $[0，\frac{\pi}{2})$ 内一致收敛。）根据 Cauchy 准则，只要证明：
> 
> $$\forall \varepsilon>0，\exists N>0，\forall m>n>N，\forall x\in\left[0，\frac{\pi}{2}\right)，有$$
> 
> $$\left|\sum_{k=n+1}^m b_k \sin kx\right| < \varepsilon。 \quad （1）$$
> 
> 为此，记
> 
> $$\beta_n = \sup\{k b_k \mid k\geq n\}。 \quad （2）$$
> 
> 则由 $\lim_{n\to\infty}n b_n=0$ 知 $\lim_{n\to\infty}\beta_n=0$。 因此，$\forall \varepsilon>0$，$\exists N>0$，当 $n>N$ 时，有 $\beta_n<\frac{\varepsilon}{2\pi}$，即
> 
> $$\pi \beta_n < \frac{\varepsilon}{2} < \varepsilon。 \quad （3）$$
> 
> （下面用 Cauchy 准则来证原级数一致收敛。）为此，将 $[0，\frac{\pi}{2})$ 分成三个区间，证明式（3）里的 $N$ 能作为收敛准则所需要的 $N$，分别适用于三区间。 $\forall m>n>N$，令
> 
> $$\left[0，\frac{\pi}{2}\right) = \left[0，\frac{\pi}{m}\right) \cup \left[\frac{\pi}{m}，\frac{\pi}{n}\right) \cup \left[\frac{\pi}{n}，\frac{\pi}{2}\right)，则$$
> 
> ① 当 $x\in[0，\frac{\pi}{m})$ 时，$0\leq mx<\pi$，
> 
> $$\left|\sum_{k=n+1}^m b_k \sin kx\right| \leq \sum_{k=n+1}^m b_k kx \leq (m-n)x\cdot\beta_n < mx\cdot\beta_n < \pi\beta_n < \frac{\varepsilon}{2} < \varepsilon。 \quad （4）$$
> 
> 下面要用到如下的三角不等式：当 $x\in(0，\frac{\pi}{2}]$ 时，$\forall m>n>N\geq 1$，有
> 
> $$\left|\sum_{k=n+1}^m \sin kx\right| \leq \frac{1}{\sin(x/2)}。 \quad （5）$$
> 
> （其推导可参照例 5.2.26 的式（1）。）
> 
> ② 当 $x\in[\frac{\pi}{n}，\frac{\pi}{2})$ 时，$\forall m>n>N$，上面式（5）成立。
> 
> 因 $b_n>0$ 单调递减，可利用 Abel 变换（见例 5.1.35，这里 $M=\frac{1}{\sin(x/2)}$）
> 
> $$\left|\sum_{k=n+1}^m b_k \sin kx\right| \leq^{Abel变换} \frac{2b_{n+1}}{\sin(x/2)}$$
> 
> （应用 $\sin x > \frac{2}{\pi}x$（$0<x<\frac{\pi}{2}$））
> 
> $$\leq 2b_{n+1} \cdot \frac{1}{\frac{2}{\pi}\cdot\frac{x}{2}} = \frac{2b_{n+1}\pi}{x} \quad (x\geq \frac{\pi}{n})$$
> 
> $$< 2(n+1)b_{n+1} \leq \pi\beta_n < \frac{\varepsilon}{2}。 \quad （6）$$
> 
> ③ 当 $x\in[\frac{\pi}{m}，\frac{\pi}{n}) = \bigcup_{i=n}^{m-1} [\frac{\pi}{i+1}，\frac{\pi}{i})$，例如，$x\in[\frac{\pi}{i+1}，\frac{\pi}{i})$（$i\in\{n，\ldots，m-1\}$）（此时 $i<\frac{\pi}{x}\leq i+1$）时，
> 
> $$\left|\sum_{k=n+1}^m b_k \sin kx\right| \leq \left|\sum_{k=n+1}^i b_k \sin kx\right| + \left|\sum_{k=i+1}^m b_k \sin kx\right| \stackrel{\text{记}}{=} I_1+I_2 < \varepsilon，$$
> 
> 其中 $I_1=\left|\sum_{k=n+1}^i b_k \sin kx\right| <^{式（4）} \frac{\varepsilon}{2}$，$I_2=\left|\sum_{k=i+1}^m b_k \sin kx\right| <^{式（6）} \frac{\varepsilon}{2}$。
> 
> 因此，式（1）获证，级数一致收敛。 证毕。

> [!exercise] 5.2.11
> 试证级数 $\sum_{n=1}^\infty \frac{x+n(-1)^n}{x^2+n^2}$ 在（$-\infty，+\infty$）内闭一致收敛（即在任何内闭区间 $[a，b]\subset（-\infty，+\infty）$ 上一致收敛）。

> [!hint]- 提示
> 拆成两个级数之和：$\sum_{n=1}^\infty \frac{x}{x^2+n^2}$，$\forall A>0$，$[-A，A]$ 上以 $\sum_{n=1}^\infty \frac{A}{n^2}$ 为优级数；$\sum_{n=1}^\infty \frac{(-1)^n n}{x^2+n^2}$ 是 Leibniz 级数，$|R_n|<\frac{1}{n}\to 0$。

> [!exercise] ☆5.2.12
> 指出级数 $\sum_{n=1}^\infty \frac{e^{-nx}}{n}$ 的收敛区间和一致收敛区间，并证明之。（兰州大学）

> [!hint]- 提示
> 当且仅当 $(0，+\infty)$ 内收敛；$\forall a>0$，$[a，+\infty]$ 上一致收敛（Dirichlet）。

> [!exercise] 5.2.13
> 指出 $\lim_{n\to\infty} \frac{x^2}{n} \ln\left(\frac{x^2}{n}+1\right)$ 的收敛与一致收敛的范围。（兰州大学）

> [!hint]- 提示
> $\mathbb{R}$ 上收敛，且内闭一致收敛（$\forall A>0$，$[-A,A]$ 上一致收敛）。

> [!exercise] ☆5.2.14
> 设 $f(x)$ 在 $[0，1]$ 上连续，
> 
> $$f_1(x)=f(x)，f_{n+1}(x)=\int_x^1 f_n(t)\,dt，\forall x\in[0，1]，n=1,2,\ldots。$$
> 
> 求证：$\sum_{n=1}^\infty f_n(x)$ 在 $[0，1]$ 上一致收敛。（北京航空航天大学）

> [!hint]- 提示
> $\exists M>0$，使 $[0，1]$ 上 $|f(x)|\leq M$。 $|f_n(x)|\leq \frac{M(1-x)^{n-1}}{(n-1)!} \leq \frac{M}{(n-1)!}$，故 $\sum_{n=1}^\infty \frac{M}{(n-1)!}$ 为优级数。

> [!exercise] 5.2.15
> 1）证明函数序列 $\{(1+\frac{x}{n})^n\}$（$n=1,2,\ldots$）在 $x\in[0,1]$ 上对 $n$ 单调增大；
> 
> 2）证明 $\sum_{n=1}^\infty \frac{(-1)^n(n+x)^n}{n^{n+1}}$ 在 $[0,1]$ 上一致收敛。（南京航空航天大学）

> [!hint]- 提示
> 1）可用平均值不等式
> 
> $$\sqrt[n+1]{\left(1+\frac{x}{n}\right)^n\cdot 1} \leq \frac{n(1+\frac{x}{n})+1}{n+1}。$$
> 
> 2）通项为 $\frac{(-1)^n}{n}\left(1+\frac{x}{n}\right)^n$，可用 Abel 判别法。

> [!exercise] 5.2.16
> 试证：若级数 $\sum_{n=0}^\infty a_n$ 收敛，则 Dirichlet 级数 $\sum_{n=1}^\infty \frac{a_n}{n^x}$ 在 $[0，+\infty)$ 上一致收敛。（陕西师范大学）

> [!hint]- 提示
> 可用 Abel 判别法。

> [!exercise] *5.2.17
> 证明级数 $\sum_{n=1}^\infty \frac{(-1)^{[\sqrt{n}]}}{\sqrt{n}(n+x)}$ 在 $0\leq x<+\infty$ 上一致收敛。

> [!hint]- 提示
> 可参看例 5.1.32，$\sum_{n=1}^\infty \frac{(-1)^{[\sqrt{n}]}}{n} \cdot \frac{1}{\sqrt{1+\frac{x}{n}}}$（Abel）。

> [!exercise] 5.2.18
> 试证：$\forall \alpha:0<\alpha<\frac{\pi}{2}$，函数项级数 $\sum_{n=1}^\infty x^n\left(1-\frac{2x}{\pi}\right)^n \tan^n x$ 在 $[0，\alpha]$ 上一致收敛。 若记其和函数为 $S(x)$，试证 $\lim_{x\to(\pi/2)^-} S(x)=+\infty$。（北京师范大学）

> [!hint]- 提示
> 原级数 $= \sum_{n=1}^\infty q^n = \frac{q}{1-q}$（其中 $0<q=x(1-\frac{2x}{\pi})\tan x = \frac{2}{\pi}\cdot x(\frac{\pi}{2}-x)\tan x <1$）。
> 
> 再提示 1° 在 $[0，\frac{\pi}{4}]$ 上，函数 $y=x(\frac{\pi}{2}-x)$ 和 $y=\tan x$ 都严$\nearrow$，所以 $q(x)$ 也严$\nearrow$；在 $[\frac{\pi}{4}，\frac{\pi}{2})$ 上，函数 $y=x$ 和 $y=(1-\frac{2x}{\pi})\tan x$ 都严$\nearrow$，所以 $q(x)$ 也严$\nearrow$。 故在 $[0，\frac{\pi}{2})$ 上 $q(x)$ 严$\nearrow$，且 $q(0)=0$。 于是 $q(x)>0$，$x\in(0，\frac{\pi}{2})$。
> 
> 2° $q(\frac{\pi}{2}-0)=\lim_{x\to(\pi/2)^-} x(1-\frac{2x}{\pi})\tan x$
> 
> $$=\lim_{x\to(\pi/2)^-} \frac{2}{\pi}\cdot x\left(\frac{\pi}{2}-x\right)\tan x。$$
> 
> 令 $t=\frac{\pi}{2}-x$
> 
> $$=\lim_{t\to 0^+} \frac{2}{\pi}\cdot \left(\frac{\pi}{2}-t\right)\cos t \cdot \frac{t}{\sin t} = 1。$$
> 
> 可见在 $[0，\frac{\pi}{2})$ 上，$0<q=q(x)<1$，从而原级数在 $[0，\frac{\pi}{2})$ 上逐点收敛。
> 
> 3° 用 M 判别法易证：$\forall \alpha\in(0，\frac{\pi}{2})$，原级数在 $[0，\alpha]$ 上一致收敛。

> [!exercise] 5.2.19
> 证明：$\sum_{n=1}^\infty \frac{(-1)^n (x^2+n)}{n^2}$ 在任何有穷区间上一致收敛，而在任何一点都不绝对收敛。（华中科技大学）

> [!hint]- 提示
> 可参考例 5.2.24。

> [!exercise] 5.2.20
> 讨论级数 $\sum_{n=1}^\infty x^n (\ln x)^2$ 在 $[0,1]$ 区间上的一致收敛性。（北京大学）

> [!hint]- 提示
> 设 $x=0$ 时通项$=0$，在 $[0,1]$ 上可用 Dini 定理（见例 5.2.27）。

> [!exercise] ☆5.2.21
> 设 $g(x)$ 和函数序列 $\{f_n(x)\}$（$n=1,2,\ldots$）在区间 $[a,b]$ 上连续，且对任一 $x\in[a,b]$，$\lim_{n\to\infty} f_n(x)=g(x)$，问能否断定 $f_n(x)$ 在 $[a,b]$ 上一致收敛于 $g(x)$？论证你的结论。（兰州大学）

> [!hint]- 提示
> 例如可在 $[0,1]$ 上考虑 $f_n(x)=x^n(1-x^n)$。

> [!exercise] ☆5.2.22
> 证明：$\sum_{n=1}^\infty [nxe^{-nx}-(n+1)xe^{-(n+1)x}]$ 在 $[0，+\infty)$ 内收敛，但对任何 $A>0$，级数在 $[0,A]$ 上均不一致收敛；再证：上述级数在 $[0，+\infty)$ 内定义了一个连续函数，问级数在 $[0,A]$（$A>0$）上可否逐项积分？（南京大学）

> [!hint]- 提示
> 在$(0，+\infty)$上和 $S(x)=xe^{-x}$，$|r_n(1/n)|=e^{-1}\not\to 0$（$n\to\infty$），在 $[0,A]$ 上级数非一致收敛；但 $\forall A>0$，在 $[0,A]$ 上仍能逐项积分。 积分值之和亦等于 $-Ae^{-A}-e^{-A}+1$。

> [!exercise] *5.2.23
> 在$(0,1)$内任取一数列 $\{a_n\}$（各项互不相同），作级数 $\sum_{k=1}^\infty \frac{|x-a_k|}{2^k}$。 证明：
> 
> 1）该级数在$(0,1)$内定义一个连续函数 $f(x)$；
> 2）$f(x)$ 在 $x=a_k$（$k=1,2,\ldots$）处不可微，而在$(0,1)$内其他点处均可微。（南京大学）

> [!hint]- 提示
> 可参看例 5.2.42 和例 5.2.48。

> [!exercise] ☆5.2.24
> 试作 $[0,1]$ 上的连续函数列 $\{f_n(x)\}$，使之逐点收敛于连续函数 $f(x)$，但
> 
> $$\lim_{n\to\infty} \int_0^1 f_n(x)\,dx \neq \int_0^1 f(x)\,dx。$$（安徽大学）

> [!hint]- 提示
> 可考虑 $f_n(x)=nx^n(1-x^n)$ 于 $[0,1]$ 上。

> [!exercise] ☆5.2.25
> $k$ 取何值时，
> 
> 1）$f_n(x)=n^k x e^{-nx}$（$n=1,2,\ldots$）在 $[0,1]$ 上收敛；
> 2）$f_n(x)$ 在 $[0,1]$ 上一致收敛；
> 3）$\lim_{n\to\infty}\int_0^1 f_n(x)\,dx$ 可在积分号下取极限？

> [!hint]- 提示
> $\forall x\geq 0$，$f_n(x)\to 0$（$n\to\infty$），
> 
> $$|f_n(x)-0| \leq \max_{x\geq 0} f_n(x) = x n^k e^{-nx}\Big|_{x=1/n} = n^{k-1}e^{-1} \to \begin{cases} 0， & k<1； \\ e^{-1}， & k=1； \\ +\infty， & k>1。 \end{cases}$$

> [!exercise] 5.2.26
> 证明级数 $\sum_{n=1}^\infty \frac{\ln(1+nx)}{nx^n}$ 在$(1，+\infty)$上连续。（西北大学）

> [!hint]- 提示
> $\forall x>1$，可取 $a,b>1$，使 $x\in(a,b)$；再证级数在 $[a,b]$ 上一致收敛。

> [!exercise] ☆5.2.27
> 设
> 
> $$y_{n+1}(x)=\psi(x)+\phi(y_n(x)) \quad (x\in\mathbb{R})， \quad （1）$$
> 
> 其中 $\psi(x)$ 是连续有界函数，$y_0(x)=y_0$，$\psi(x_0)=y_0-\phi(y_0)$，$\phi$ 满足 Lipschitz 条件：
> 
> $$|\phi(y')-\phi(y'')| \leq \alpha|y'-y''| \quad (0<\alpha<1)。 \quad （2）$$
> 
> 试证：
> 
> 1）$\{y_n(x)\}$ 在 $\mathbb{R}$ 上一致收敛；
> 2）记 $y(x)=\lim_{n\to+\infty} y_n(x)$，则 $y(x)$ 连续，且 $y(x_0)=y_0$；
> 3）若 $\psi(x)$ 一致连续，则 $y(x)$ 也一致连续。（武汉大学）

> [!proof]- 证
> 1）由式（1），（2）知
> 
> $$|y_{n+1}(x)-y_n(x)| = |\phi(y_n(x))-\phi(y_{n-1}(x))| \leq \alpha|y_n(x)-y_{n-1}(x)| \quad (0<\alpha<1)， \quad （3）$$
> 
> 这表明（1）为压缩映像，$y(x)=\lim_{n\to\infty} y_n(x)$ 存在，且
> 
> $$y(x)=\sum_{k=0}^\infty (y_{k+1}(x)-y_k(x))+y_0。 \quad （4）$$
> 
> 反复用式（3）递推，知
> 
> $$|y_{n+1}(x)-y_n(x)| \leq \alpha^n |y_1(x)-y_0| \leq \alpha^n M。$$
> 
> （因 $y_1(x)-y_0=\psi(x)+\phi(y_0)-y_0$ 连续有界，记 $M: |y_1(x)-y_0|\leq M$。）对 $0<\alpha<1$，$\sum \alpha^n M$ 收敛，故（4）一致收敛，$y_n(x)\rightrightarrows y(x)$ 于 $\mathbb{R}$ 上。
> 
> 2）（1）式令 $n\to\infty$，取极限得
> 
> $$y(x)=\psi(x)+\phi(y(x))。 \quad （5）$$
> 
> 于是有 $y(x_0)=\psi(x_0)+\phi(y(x_0))$。 而已知 $y_0=\psi(x_0)+\phi(y_0)$，相减得
> 
> $$|y(x_0)-y_0| = |\phi(y(x_0))-\phi(y_0)| \leq \alpha|y(x_0)-y_0| \quad (0<\alpha<1)，$$
> 
> 故 $y(x_0)=y_0$。 根据保连续性定理知 $y(x)$ 连续。
> 
> 3）由（5）式知 $\forall x',x''\in\mathbb{R}$，有
> 
> $$|y(x')-y(x'')| = |\psi(x')-\psi(x'')+\phi(y(x'))-\phi(y(x''))|$$
> 
> $$\leq |\psi(x')-\psi(x'')| + \alpha|y(x')-y(x'')|，$$
> 
> 即
> 
> $$|y(x')-y(x'')| \leq \frac{1}{1-\alpha} |\psi(x')-\psi(x'')|。$$
> 
> 故由 $\psi$ 一致连续，可直接推得 $y(x)$ 一致连续。

> [!exercise] 5.2.28
> 设 $f(x)$ 在（$-\infty，+\infty$）上有任意阶导数 $f^{(n)}(x)$，且任意区间 $[a，b]$ 上 $f^{(n)}(x)\rightrightarrows \phi(x)$（当 $n\to+\infty$ 时），求证：$\phi(x)=ce^x$（其中 $c$ 为常数）。（北京大学）

> [!hint]- 提示
> $\frac{d\phi(x)}{dx} = \lim_{n\to+\infty} \frac{d f^{(n)}(x)}{dx} = \phi(x)$。

> [!exercise] 5.2.29
> 设 $f(x)=\sum_{n=1}^\infty \frac{(-1)^{n+1} e^{-nx}}{n}$，求 1）$f$ 的连续范围；2）$f$ 的可导范围。（北京大学）

> [!hint]- 提示
> 1）在 $x\geq 0$ 内闭一致收敛（Abel）；当 $x<0$ 时，通项 $\not\to 0$。
> 
> 2）逐项求导后，$\forall a>0$，$[a，+\infty)$ 上有优级数 $\sum e^{-an}$。

> [!exercise] ☆5.2.30
> 设 $f(x)=\sum_{n=0}^\infty 2^{-2n} \cos 2^n x$，求 $\lim_{x\to 0^+} x^{-1}(f(x)-f(0))$。（北京师范大学）

> [!hint]- 提示
> $\forall \varepsilon:0<\varepsilon<\frac{\pi}{2}$，在 $[0, \varepsilon]$ 上级数收敛，且可逐项求导。
> 
> $$\lim_{x\to 0^+}x^{-1}(f(x)-f(0))=f'_x(0)=\left.\sum_{n=0}^{\infty}(2^{-2n}\cos 2^n x)'\right|_{x=0}=0。$$


## ☆ §5.3 幂级数

> [!note] 导读
> 幂级数不仅具有重大的理论意义，而且有着广泛的实用价值. 因而理工科各专业对该内容极为重视，既是教学重点也是各类考试的重点.


### 一、幂级数的收敛半径与收敛范围


#### a. 公式法

> [!theorem] 要点
> $\sum_{n=1}^{\infty} a_n x^n$ 的收敛半径 $R$ 可按如下公式计算：
> 
> i)
> $$
> R=\frac{1}{\lim_{n\to\infty}\sqrt[n]{|a_n|}}; \qquad (A)
> $$
> 
> ii) 特别若 $\lim_{n\to\infty}\sqrt[n]{|a_n|}$ 存在或为 $+\infty$, 则
> $$
> R=\frac{1}{\lim_{n\to\infty}\sqrt[n]{|a_n|}}; \qquad (B)
> $$
> 
> iii) 若 $\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|$ 存在或为 $+\infty$, 则
> $$
> R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|. \qquad (C)
> $$
> 
> （约定：在式(A)和(B)中，当分母=0时，$R=+\infty$；当分母=+\infty 时，$R=0$.）
> 
> 必须注意的是，在求收敛区间时，务必要检验区间端点的敛散性. 对于广义幂级数，可以化为一般幂级数处理，如

> [!example] 例5.3.1
> 求级数
> $$
> \sum_{n=1}^{\infty}\left(\sin\frac{1}{3n}\right)(x^2+x+1)^n
> $$
> 的收敛区间.

> [!solution]- 解
> （这是广义幂级数，令 $t=x^2+x+1$, 即化为 $t$ 的幂级数
> $$
> \sum_{n=1}^{\infty}\left(\sin\frac{1}{3n}\right)t^n.
> $$
> 利用公式(C),
> $$
> R=\lim_{n\to\infty}\frac{\sin\frac{1}{3n}}{\sin\frac{1}{3(n+1)}}\xlongequal{\text{等价代换}}\lim_{n\to\infty}\frac{\frac{1}{3n}}{\frac{1}{3(n+1)}}=1.
> $$
> 当 $t=1$ 时, 级数 $\sum_{n=1}^{\infty}\sin\frac{1}{3n}$ 发散；当 $t=-1$ 时, 级数 $\sum_{n=1}^{\infty}(-1)^n\sin\frac{1}{3n}$ 收敛. 故原级数当且仅当
> $$
> -1\le x^2+x+1<1
> $$
> 时收敛. 解不等式知收敛区间为 $(-1,0)$.

> [!example] ☆ 例5.3.2
> 讨论级数
> $$
> 1+\frac{1}{2x\sqrt2}+\frac{1}{4x^2\sqrt3}+\frac{1}{8x^3\sqrt4}+\frac{1}{16x^4\sqrt5}+\cdots+\frac{1}{2^n x^n\sqrt{n+1}}+\cdots
> $$
> 的收敛性，求出它的收敛区域与一致收敛区域.（北京师范大学）

> [!solution]- 解
> 该级数=
> $$
> \sum_{n=0}^{\infty}\frac{1}{\sqrt{n+1}}\left(\frac{1}{2x}\right)^n
> $$
> 令 $t=\frac{1}{2x}$
> $$
> \Longrightarrow \sum_{n=0}^{\infty}\frac{t^n}{\sqrt{n+1}}.
> $$
> 对 $t$ 而言，
> $$
> R=\lim_{n\to\infty}\frac{a_{n-1}}{a_n}=\lim_{n\to\infty}\frac{\sqrt{n+1}}{\sqrt n}=1.
> $$
> 当 $t=1$ 时, 级数 $\sum_{n=1}^{\infty}\frac{1}{\sqrt{n+1}}$ 发散；当 $t=-1$ 时, 级数 $\sum_{n=1}^{\infty}\frac{(-1)^n}{\sqrt{n+1}}$ 收敛. 故原级数在
> $$
> \left\{x\mid -1\le \frac{1}{2x}<1\right\}=\left\{x\mid x>\frac12\ \text{或}\ x\le -\frac12\right\}
> $$
> 内收敛，在 $( -\infty,-\frac12 ]$ 及 $( \frac12,+\infty )$ 的内闭区间上一致收敛.

> [!example] 例5.3.3
> 求级数
> $$
> \sum_{n=1}^{\infty}\frac{1^n+2^n+\cdots+50^n}{n^2}\left(\frac{1-x}{1+x}\right)^n
> $$
> 的收敛区间.

> [!solution]- 解
> （利用公式(B)）. 由于
> $$
> 1\le \sqrt[n]{\left(\frac{1}{50}\right)^n+\left(\frac{2}{50}\right)^n+\cdots+\left(\frac{49}{50}\right)^n+1}\le \sqrt[n]{50}\to1
> $$
> 及 $\sqrt[n]{n}\to1$（$n\to\infty$）.
> 
> 因此
> $$
> \lim_{n\to\infty}\sqrt[n]{\frac{1^n+2^n+\cdots+50^n}{n^2}}
> =\lim_{n\to\infty}\frac{50}{(\sqrt[n]{n})^2}\cdot
> \sqrt[n]{\left(\frac{1}{50}\right)^n+\left(\frac{2}{50}\right)^n+\cdots+1}=50.
> $$
> 
> 又因
> $$
> \sum_{n=1}^{\infty}\frac{1^n+2^n+\cdots+50^n}{n^2}\left(\frac{1}{50}\right)^n
> $$
> 收敛，故
> $$
> \sum_{n=1}^{\infty}\frac{1^n+2^n+\cdots+50^n}{n^2}t^n
> $$
> 在 $\left[-\frac{1}{50},\frac{1}{50}\right]$ 上收敛. 解不等式
> $$
> -\frac{1}{50}\le \frac{1-x}{1+x}\le \frac{1}{50}
> $$
> 得原级数收敛区间为
> $$
> \left[\frac{49}{51},\frac{51}{49}\right].
> $$

> [!example] * 例5.3.4
> 设 $a_n\ge0$, $\sum_{n=1}^{\infty}a_n$ 收敛，$b_m=\sum_{n=1}^{\infty}\left(1+\frac{1}{n^m}\right)a_n$. 试证：级数 $\sum_{m=1}^{\infty}b_m x^m$ 的收敛半径 $R$ 满足不等式：$\frac{1}{e}\le R\le1$.

> [!proof]- 证
> 因为
> $$
> \sqrt[m]{\sum_{n=1}^{\infty}a_n}\le \sqrt[m]{\sum_{n=1}^{\infty}\left(1+\frac{1}{n^m}\right)a_n}=\sqrt[m]{b_m}\le \sqrt[m]{e\sum_{n=1}^{\infty}a_n}=e\cdot\sqrt[m]{\sum_{n=1}^{\infty}a_n},
> $$
> 
> （注意到 $\lim_{m\to\infty}\sqrt[m]{\sum_{n=1}^{\infty}a_n}=1$）所以
> $$
> 1\le \lim_{m\to\infty}\sqrt[m]{b_m}\le e.
> $$
> 从而对于收敛半径 $R$, 有 $\frac{1}{e}\le R\le1$.（公式(A)）
> 
> 不要以为讨论端点是件容易的事. 请看

> [!example] ** 例5.3.5
> 求级数
> $$
> \sum_{n=9}^{\infty}\frac{\left(1+2\cos\frac{n\pi}{4}\right)^n}{n\ln n}x^n
> $$
> 的收敛范围.

> [!solution]- 解
> $$
> R^{-1}=\lim_{n\to\infty}\sqrt[n]{\frac{\left(1+2\cos\frac{n\pi}{4}\right)^n}{n\ln n}}
> =\lim_{n\to\infty}\frac{1+2\cos\frac{n\pi}{4}}{\sqrt[n]{n\ln n}}
> =\lim_{k\to\infty}\frac{3}{\sqrt[8k]{8k\ln(8k)}}
> =\lim_{n\to\infty}\frac{3}{\sqrt[n]{n\ln n}}.
> $$
> 
> 注意到
> $$
> 1\le\sqrt[n]{n\ln n}\le\sqrt[n]{n^2}=(\sqrt[n]{n})^2\to1\qquad(\text{当 }n\to\infty\text{ 时}),
> $$
> 所以 $R=\frac13$. 即在 $\left(-\frac13,\frac13\right)$ 内原级数收敛.（下面考虑区间端点.）
> 
> 因为该级数之通项趋向零，因此将相邻8项逐次地括在一起，组成的级数与原级数同时敛散，且和值不变. 故原级数可视为8个级数之和，即
> $$
> \text{原级数}=\sum_{k=1}^{\infty}\sum_{r=1}^{8}\frac{\left[1+2\cos\frac{(8k+r)\pi}{4}\right]^{8k+r}}{(8k+r)\ln(8k+r)}x^{8k+r}
> =\sum_{r=1}^{8}\sum_{k=1}^{\infty}\frac{\left(1+2\cos\frac{8k+r}{4}\pi\right)^{8k+r}}{(8k+r)\ln(8k+r)}x^{8k+r}.
> $$
> 
> 我们不难证明，不论 $x=\frac13$ 或 $x=-\frac13$, 其中第8个级数（$r=8$）发散，其余7个级数都收敛，因而级数在端点处不收敛. 故收敛范围仍为 $\left(-\frac13,\frac13\right)$. 事实上，例如 $x=\frac13$, 这时第8个级数为
> $$
> \sum_{k=1}^{\infty}\frac{1}{(8k+8)\ln(8k+8)}=\sum_{k=2}^{\infty}\frac{1}{8k\ln(8k)},
> $$
> 其通项与 $\sum \frac{1}{k\ln k}$ 的通项同阶，故此级数发散. 其余7个级数为
> $$
> \sum_{k=1}^{\infty}\frac{1}{(8k+r)\ln(8k+r)}\left(\frac{1+2\cos\frac{8k+r}{4}\pi}{3}\right)^{8k+r}
> \qquad (r=1,2,\cdots,7), \qquad (1)
> $$
> 利用 Dirichlet 判别法，易知它们都收敛.（因为 $\frac{1}{(8k+r)\ln(8k+r)}\searrow0\ (k\to\infty)$, 且
> $$
> \left|\sum_{k=1}^n\left(\frac{1+2\cos\frac{8k+r}{4}\pi}{3}\right)^{8k+r}\right|
> \le \sum_{k=1}^{\infty}\left(\frac{1+\sqrt2}{3}\right)^k
> =\frac{1+\sqrt2}{2-\sqrt2}\qquad(\forall n\in\mathbb N)
> $$
> 部分和有界），故式（1）中7个级数都收敛.）
> 
> 对于 $x=-\frac13$ 的情况，类似可证.


#### b. 缺项幂级数的收敛范围

> [!note] 要点
> 对缺项幂级数（如下例），我们可通过补项，或利用上节一般函数项级数的方法处理.

> [!example] 例5.3.6
> 求级数
> $$
> \sum_{n=1}^{\infty}n^{n^2}x^{n^3}
> $$
> 的收敛范围.

> [!solution]- 解Ⅰ
> 根据级数添加若干值为0的项，不影响级数的敛散性及和的值，我们可令
> $$
> a_k=\begin{cases}
> n^{n^2}, & \text{当 }k=n^3\text{ 时},\\
> 0, & \text{当 }k\ne n^3\text{ 时}
> \end{cases}
> \qquad (k=1,2,\cdots).
> $$
> 如此
> $$
> \sum_{n=1}^{\infty}n^{n^2}x^{n^3}=\sum_{k=1}^{\infty}a_kx^k,
> $$
> 这时
> $$
> R^{-1}=\overline{\lim_{k\to\infty}}\sqrt[k]{|a_k|}=\lim_{n\to\infty}\sqrt[n^3]{n^{n^2}}=\lim_{n\to\infty}\sqrt[n]{n}=1.
> $$
> 又因 $x=\pm1$ 时，原级数之通项 $(\pm1)^{n^3}n^{n^2}\not\to0\ (n\to\infty)$，故该级数收敛范围为 $(-1,1)$.

> [!solution]- 解Ⅱ
> 将原级数看作函数项级数，用根式判别法：因
> $$
> \lim_{n\to\infty}\sqrt[n]{|n^{n^2}x^{n^3}|}=\begin{cases}
> +\infty, & \text{当 }|x|\ge1\text{ 时},\\
> 0, & \text{当 }|x|<1\text{ 时},
> \end{cases}
> $$
> 所以收敛范围为 $(-1,1)$. $|x|<1$ 时的极限可由如下不等式看出：
> $$
> 0\le\sqrt[n]{|n^{n^2}x^{n^3}|}=\left(\frac{n}{|1/x|^n}\right)^n\le\left(\frac12\right)^n
> \qquad(\text{当 }n\text{ 充分大时成立}).
> $$

> [!example] 例5.3.7
> 求 $\sum_{n=1}^{\infty}\frac{x^{n^2}}{2^n}$ 的收敛范围.

> [!solution]- 解
> 将原级数看作函数项级数，
> $$
> \lim_{n\to\infty}\sqrt[n]{|u_n|}=\lim_{n\to\infty}\sqrt[n]{\left|\frac{x^{n^2}}{2^n}\right|}=\lim_{n\to\infty}\frac{|x|^n}{2}
> =\begin{cases}
> 0, & |x|<1,\\
> \frac12, & x=\pm1,\\
> +\infty, & |x|>1.
> \end{cases}
> $$
> 按根式判别法的极限形式，可知原级数的收敛范围为 $[-1,1]$.


#### c. 利用收敛半径求极限

> [!example] 例5.3.8
> 设数列 $\{a_n\}$ 满足条件 $\overline{\lim_{n\to\infty}}\sqrt[n]{|a_n|}=1$, 记其部分和为 $S_n=\sum_{k=0}^n a_k$, 试证：$\overline{\lim_{n\to\infty}}\sqrt[n]{|S_n|}=1$.

> [!remark]- 分析
> 我们的问题等价于已知级数 $\sum_{n=0}^{\infty}a_nx^n$ 的收敛半径 $R=1$, 求证级数
> $$
> \sum_{n=0}^{\infty}S_nx^n=\sum_{n=0}^{\infty}(a_0+a_1+\cdots+a_n)x^n
> $$
> 的收敛半径 $R_1=1$. 换句话说要证明 $R_1=R$. 我们看到
> 
> 1° 根据级数乘法知，当 $|x|<1$ 时，
> $$
> \sum_{n=0}^{\infty}x^n\cdot\sum_{n=0}^{\infty}a_nx^n
> =\sum_{n=0}^{\infty}(a_0+a_1+\cdots+a_n)x^n
> =\sum_{n=0}^{\infty}S_nx^n. \qquad (1)
> $$
> 可见 $\sum_{n=0}^{\infty}S_nx^n$ 的收敛半径 $R_1\ge1=R$.
> 
> 2° 若 $\sum_{n=0}^{\infty}S_nx^n$ 收敛，则有
> $$
> (1-x)\cdot\sum_{n=0}^{\infty}S_nx^n=\sum_{n=0}^{\infty}a_nx^n.
> $$
> 可见 $\sum_{n=0}^{\infty}a_nx^n$ 也必收敛，故 $R\ge R_1$. 总之，有 $R_1=R=1$.

> [!example] 例5.3.9
> $C_n^k$ 表示 $n$ 个元素取 $k$ 个的组合数，试证：
> $$
> \overline{\lim_{n\to\infty}}\sqrt[n]{|a_n|}=\frac{\sqrt5+1}{2},
> $$
> 其中
> $$
> a_n=\begin{cases}
> C_{3^m}^k, & n=3^m+k\quad (m=1,2,\cdots,\ k=0,1,2,\cdots,3^m),\\
> 0, & \text{其他}.
> \end{cases}
> $$

> [!proof]- 证
> 问题等价于证明级数 $\sum_{n=1}^{\infty}a_nx^n$ 的收敛半径为 $\frac{\sqrt5-1}{2}$. 当 $x>0$ 时，各项为正，故任意加括号不影响收敛性. 将级数第 $3^m$ 项至 $2\cdot3^m$ 项括在一起组成新级数：
> $$
> \sum_{m=1}^{\infty}\left(C_{3^m}^0x^{3^m}+C_{3^m}^1x^{3^m+1}+\cdots+C_{3^m}^{3^m}x^{3^m+3^m}\right)
> =\sum_{m=1}^{\infty}\bigl[x(1+x)\bigr]^{3^m}.
> $$
> 这是一函数项级数.
> 
> $$
> \lim_{m\to\infty}\sqrt[m]{|x(1+x)|^{3^m}}=
> \begin{cases}
> 0, & |x(1+x)|<1,\\
> 1, & |x(1+x)|=1,\\
> +\infty, & |x(1+x)|>1.
> \end{cases}
> $$
> 
> 注意不等式 $|x(1+x)|<1$ 等价于
> $$
> -\frac{\sqrt5+1}{2}<x<\frac{\sqrt5-1}{2}.
> $$
> 由此知在 $x>0$ 的情况下：级数 $\sum_{n=1}^{\infty}a_nx^n$ 当 $x<\frac{\sqrt5-1}{2}$ 时收敛，当 $x>\frac{\sqrt5-1}{2}$ 时发散. 因而 $\sum_{n=1}^{\infty}a_nx^n$ 的收敛半径为 $\frac{\sqrt5-1}{2}$. 故
> $$
> \overline{\lim_{n\to\infty}}\sqrt[n]{|a_n|}=\frac{\sqrt5+1}{2}.
> $$

> [!example] 例5.3.10
> 设 $a_n\ge0$, $\sum_{n=1}^{\infty}a_n$ 发散，$\lim_{n\to\infty}\frac{a_n}{a_1+a_2+\cdots+a_n}=0$. 试证：$\overline{\lim_{n\to\infty}}\sqrt[n]{a_n}=1$.

> [!proof]- 证Ⅰ
> 因 $\sum_{n=1}^{\infty}a_n$ 发散，所以 $\sum_{n=1}^{\infty}a_nx^n$ 的收敛半径 $R\le1$, $\overline{\lim_{n\to\infty}}\sqrt[n]{a_n}\ge1$. 剩下只要证明相反的不等式.
> 
> 记 $A_n=a_1+a_2+\cdots+a_n$, 则由已知条件知，当 $n\to\infty$ 时，
> $$
> 1-\frac{A_{n-1}}{A_n}=\frac{A_n-A_{n-1}}{A_n}=\frac{a_n}{a_1+a_2+\cdots+a_n}\to0.
> $$
> 因此，$\frac{A_{n-1}}{A_n}\to1$, 进而 $\sqrt[n]{a_1+a_2+\cdots+a_n}=\sqrt[n]{A_n}\to1$.
> 
> 又因 $\lim_{n\to\infty}\frac{a_n}{a_1+a_2+\cdots+a_n}=0$, 所以 $\exists N>0$, 当 $n>N$ 时，
> $$
> \frac{a_n}{a_1+a_2+\cdots+a_n}<1.
> $$
> 故 $a_n < a_1 + a_2 + \cdots + a_n$, 从而
> $$
> \lim_{n\to\infty}\sqrt[n]{a_n} \le \lim_{n\to\infty}\sqrt[n]{a_1 + \cdots + a_n} = \lim_{n\to\infty}\sqrt[n]{A_n} = 1.
> $$

> [!proof]- 证 II
> 同上，易证 $\sum_{n=1}^{\infty} a_n x^n$ 的收敛半径 $R \le 1$，$\lim_{n\to\infty} \frac{A_{n-1}}{A_n} = 1$. 从而 $\sum_{n=1}^{\infty} A_n x^n = \sum_{n=1}^{\infty} (a_1 + a_2 + \cdots + a_n)x^n$ 的收敛半径为 1. 当 $|x| < 1$ 时，
> $$
> (1 - x) \sum_{n=1}^{\infty} (a_1 + a_2 + \cdots + a_n)x^n = \sum_{n=1}^{\infty} a_n x^n，
> $$
> 因此 $R \ge 1$. 总之 $R = 1$. 证毕.


### 二、初等函数展开为幂级数

> [!note] 要点
> 将初等函数展开为幂级数，通常方法：
> 
> 1）通过变形、转换，利用已知的展开式；
> 2）利用逐项积分或逐项微分法；
> 3）利用待定系数法；
> 4）计算指定点的各阶导数，然后利用 Taylor 级数；
> 5）利用级数的运算（加，减，乘，复合）.

#### 通过变形、变换，利用已知的展开式

$$
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}，\text{于 } \mathbb{R} \text{ 上.}
$$

$$
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}，\text{于 } \mathbb{R} \text{ 上.}
$$

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}，\text{于 } \mathbb{R} \text{ 上.}
$$

$$
\ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}，\text{于 } (-1, 1] \text{ 上.}
$$

$$
(1 + x)^\alpha = 1 + \sum_{n=1}^{\infty} \frac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!} x^n，\text{于 } (-1, 1) \text{ 内.}
$$

> [!example] ☆例 5.3.11
> 把下列函数展开成 $x$ 的幂级数，并说明收敛范围：
> 
> 1）$f(x) = \dfrac{1}{(1 + x)(1 + x^2)(1 + x^4)}$；    2）$\varphi(x) = \sin^3 x$。（武汉大学）

> [!solution]- 解
> 1）
> $$
> \begin{aligned}
> f(x) &= \frac{1 - x}{(1 - x)(1 + x)(1 + x^2)(1 + x^4)} = \frac{1 - x}{1 - x^8} \\
> &= \sum_{n=0}^{\infty} x^{8n} - \sum_{n=0}^{\infty} x^{8n+1} \\
> &= 1 - x + x^8 - x^9 + \cdots + x^{8n} - x^{8n+1} + \cdots \quad (|x| < 1).
> \end{aligned}
> $$
> 
> 2）
> $$
> \begin{aligned}
> \sin^3 x &= \frac{3}{4} \sin x - \frac{1}{4} \sin 3x \\
> &= \frac{3}{4} \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} - \frac{1}{4} \sum_{n=0}^{\infty} \frac{(-1)^n (3x)^{2n+1}}{(2n+1)!} \\
> &= \frac{3}{4} \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} (1 - 3^{2n}) x^{2n+1}，x \in (-\infty, +\infty).
> \end{aligned}
> $$

> [!example] 例 5.3.12
> 设 $x > 0$，求证：
> $$
> \ln x = 2\left[\frac{x - 1}{x + 1} + \frac{1}{3}\left(\frac{x - 1}{x + 1}\right)^3 + \frac{1}{5}\left(\frac{x - 1}{x + 1}\right)^5 + \cdots\right].
> $$

> [!hint]- 提示
> 变量替换法：令 $\dfrac{x - 1}{x + 1} = t$，即 $x = \dfrac{1 + t}{1 - t}$，从而
> $$
> \ln x = \ln\frac{1 + t}{1 - t} = \ln(1 + t) - \ln(1 - t),
> $$
> 展开再回到原来变量 $x$.

#### 利用逐项积分或逐项微分法

值得注意的是：逐项积分与逐项微分，常常只能在区间内部进行，但这并不等于说，所得的展开式一定不会在端点上成立。如

> [!example] 例 5.3.13
> 试求 $f(x) = \arctan\dfrac{2x}{2 - x^2}$ 的幂级数展开式。

> [!solution]- 解
> $$
> \begin{aligned}
> f(x) &= \int_0^x f'(t)\, dt = \int_0^x \left(\arctan\frac{2t}{2 - t^2}\right)' dt \\
> &= \int_0^x \left(1 + \frac{t^2}{2}\right) \cdot \frac{1}{1 + \left(\frac{t^2}{2}\right)^2}\, dt \\
> &= \int_0^x \left(1 + \frac{t^2}{2}\right) \sum_{n=0}^{\infty} (-1)^n \left(\frac{t^4}{4}\right)^n dt \quad \text{（此步要求 } |t| < \sqrt{2}\text{）} \\
> &= \int_0^x \left[1 + \frac{t^2}{2} - \left(\frac{t^2}{2}\right)^2 - \left(\frac{t^2}{2}\right)^3 + \left(\frac{t^2}{2}\right)^4 + \left(\frac{t^2}{2}\right)^5 - \cdots\right] dt \\
> &= \int_0^x \sum_{n=0}^{\infty} (-1)^{[n/2]} \left(\frac{t^2}{2}\right)^n dt \quad \text{（逐项积分）} \\
> &= \sum_{n=0}^{\infty} \frac{(-1)^{[n/2]} x^{2n+1}}{2^n(2n+1)}，\quad (|x| < \sqrt{2}).
> \end{aligned}
> $$
> 
> （讨论端点的情况。）当 $x = \sqrt{2}$ 时，级数
> $$
> \begin{aligned}
> &\sum_{n=0}^{\infty} \frac{(-1)^{[n/2]} (\sqrt{2})^{2n+1}}{2^n(2n+1)} = \sum_{n=0}^{\infty} \frac{(-1)^{[n/2]} \sqrt{2}}{2n+1} \\
> &= \sqrt{2}\left(1 + \frac{1}{3} - \frac{1}{5} - \frac{1}{7} + \frac{1}{9} + \frac{1}{11} - \cdots\right) \\
> &= \sqrt{2}\left[\left(\frac{1}{1} + \frac{1}{3}\right) - \left(\frac{1}{5} + \frac{1}{7}\right) + \left(\frac{1}{9} + \frac{1}{11}\right) - \cdots\right] \quad ① \\
> &= \sqrt{2}\left(\sum_{n=0}^{\infty} \frac{(-1)^n}{4n+1} + \sum_{n=0}^{\infty} \frac{(-1)^n}{4n+3}\right). \quad ②
> \end{aligned}
> $$
> 
> 可见当 $x = \sqrt{2}$ 时该级数收敛。
> 
> 同理，当 $x = -\sqrt{2}$ 时级数也收敛。
> 
> 又因 $f(x) = \arctan\dfrac{2x}{2 - x^2}$ 在 $x = \pm\sqrt{2}$ 处连续，所以其上面展开式在 $[-\sqrt{2}, \sqrt{2}]$ 上成立。
> 
> ① 左端级数通项趋向零，因此相邻两项逐次地括在一起敛散性不变，收敛时和值不变。
> 
> ② 右边是两个 Leibniz 级数，都收敛，故对应项之和组成之级数（左端）也收敛，且左右相等。
> 
> （利用 Abel 定理）。

#### 利用待定系数法

> [!example] 例 5.3.14
> 求 $\dfrac{x \sin\alpha}{1 - 2x\cos\alpha + x^2}$（$|x| < 1$）的幂级数展开式。

> [!hint]- 提示
> 用待定系数法。设
> $$
> \frac{x \sin\alpha}{1 - 2x\cos\alpha + x^2} = \sum_{n=0}^{\infty} a_n x^n，
> $$
> 则
> $$
> \begin{aligned}
> x \sin\alpha &= (1 - 2x\cos\alpha + x^2) \sum_{n=0}^{\infty} a_n x^n \\
> &= a_0 + a_1x + a_2x^2 + a_3x^3 + \cdots \\
> &\quad - (2a_0\cos\alpha)x - (2a_1\cos\alpha)x^2 - (2a_2\cos\alpha)x^3 + \cdots \\
> &\quad + a_0x^2 + a_1x^3 + \cdots.
> \end{aligned}
> $$
> 
> 比较等式两边同次幂的系数，得 $a_0 = 0$，$a_1 = \sin\alpha$，$a_2 = \sin 2\alpha$，…，$a_n = \sin n\alpha$，…，这里用到三角恒等式
> $$
> \sin(n + 1)\alpha = 2\sin n\alpha \cdot \cos\alpha - \sin(n - 1)\alpha \quad (n = 2, 3, \ldots).
> $$

#### 利用 Taylor 级数

> [!example] *例 5.3.15
> 求 $\dfrac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}$ 的幂级数展开式。

> [!solution]- 解 I
> （计算 $\displaystyle\sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$）设 $y = \dfrac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}$，因此
> $$
> y' = \frac{1}{1 + x^2}\left[1 - \frac{x\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}\right]，
> $$
> 即
> $$
> (1 + x^2)y' = 1 - xy. \quad (1)
> $$
> 
> 由此两边同时求 $n$ 阶导数，得
> $$
> (1 + x^2)y^{(n+1)} + (2n + 1)xy^{(n)} + n^2y^{(n-1)} = 0. \quad (2)
> $$
> 
> 令 $x = 0$，得
> $$
> y_0^{(n+1)} = -n^2 y_0^{(n-1)}. \quad (3)
> $$
> 
> （下标"0"表示在 $x = 0$ 处的值）。在 (1) 中令 $x = 0$，得 $y_0' = 1$。
> 
> 对 (1) 两边求导一次，得
> $$
> 2xy' + (1 + x^2)y'' = -y - xy'.
> $$
> 
> 令 $x = 0$，知 $y_0'' = -y_0 = 0$。将 $y_0' = 1$，$y_0'' = 0$ 代入递推公式 (3) 中，得 $y_0^{(2n)} = 0$（$n = 1, 2, \ldots$），
> $$
> y_0^{(2n+1)} = (-1)^n[(2n)!!]^2 y_0' = (-1)^n[(2n)!!]^2.
> $$
> 
> 故
> $$
> \frac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}} \, ① \sim \sum_{n=0}^{\infty} \frac{(-1)^n[(2n)!!]^2}{(2n+1)!} x^{2n+1} = \sum_{n=0}^{\infty} (-1)^n \frac{(2n)!!}{(2n+1)!!} x^{2n+1}. \quad (4)
> $$
> 
> ① 这里符号"$\sim$"表示右边的级数为左边函数的 Taylor 级数。
> 
> 容易证明右端的级数收敛半径 $R = 1$。利用逐项微分法，可验证该级数的和函数 $y = S(x)$ 是式 (1) 给定的微分方程的解，且 $S(0) = 0$，而函数 $y = \dfrac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}$ 也如此。根据解的唯一性，可知式 (4) 中的"$\sim$"可改写成"$=$"（当 $|x| < 1$ 时）。又因 (4) 中级数当 $x = 1$ 时收敛（根据 Leibniz 定理），而函数 $y = \dfrac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}$ 在 $x = 1$ 处也连续。所以按 Abel 第二定理，式 (4) 中的"$\sim$"改为"$=$"对 $x = 1$ 也成立。同理，对 $x = -1$，等式也成立。实际上，不难验证：$x = \pm 1$ 确确实实都满足等式。因此，式 (4) 成立的范围是 $[-1, 1]$。

> [!solution]- 解 II
> （待定系数法）令 $y = \displaystyle\sum_{n=0}^{\infty} a_n x^n$，代入 (1) 得
> $$
> (1 + x^2) \sum_{n=1}^{\infty} a_n n x^{n-1} = 1 - x \sum_{n=0}^{\infty} a_n x^n，
> $$
> 即
> $$
> a_1 + 2a_2x + \sum_{n=2}^{\infty} [a_{n+1}(n + 1) + a_{n-1}(n - 1)]x^n = 1 - a_0x - \sum_{n=2}^{\infty} a_{n-1}x^n.
> $$
> 
> 比较系数得
> $$
> a_1 = 1，\quad 2a_2 = -a_0，\quad 3a_3 + a_1 = -a_1，\quad 4a_4 + 2a_2 = -a_2，\quad \ldots \quad (5)
> $$
> 
> 由于 $y\big|_{x=0} = \dfrac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}}\bigg|_{x=0} = 0$，所以 $a_0 = 0$。于是由递推关系 (5) 可得 $a_{2n} = 0$（$n = 1, 2, \ldots$），
> $$
> a_1 = 1，\quad a_3 = -\frac{2}{3}，\quad a_5 = \frac{2}{3}\cdot\frac{4}{5}，\quad \ldots，\quad a_{2n+1} = (-1)^n \frac{(2n)!!}{(2n+1)!!}，\quad \ldots
> $$
> 
> 所以
> $$
> y = \sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} (-1)^n \frac{(2n)!!}{(2n+1)!!} x^{2n+1}
> $$
> 为方程 (1) 适合条件 $y\big|_{x=0} = 0$ 的唯一解。故得
> $$
> \frac{\ln(x + \sqrt{1 + x^2})}{\sqrt{1 + x^2}} = \sum_{n=0}^{\infty} (-1)^n \frac{(2n)!!}{(2n+1)!!} x^{2n+1}.
> $$
> 
> 重复解 I 中相应的内容，可知此式在 $[-1, 1]$ 上成立。

#### 利用级数的运算

> [!example] 例 5.3.16
> 求 $f(x) = \ln^2(1 - x)$ 的幂级数展开式。

> [!solution]- 解 I
> $\ln(1 - x) = -\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n}$ 在 $[-1, 1)$ 上内闭一致收敛，故 $[-1, 1)$ 上可用级数乘法。
> 
> $$
> \begin{aligned}
> f(x) &= \left(-x - \frac{x^2}{2} - \frac{x^3}{3} - \cdots\right)^2 \\
> &= \sum_{n=1}^{\infty} \left(\frac{1}{1}\cdot\frac{1}{n} + \frac{1}{2}\cdot\frac{1}{n-1} + \frac{1}{3}\cdot\frac{1}{n-2} + \cdots + \frac{1}{n}\cdot\frac{1}{1}\right) x^{n+1} \\
> &= \sum_{n=1}^{\infty} \left[\sum_{k=1}^{n} \frac{1}{k(n + 1 - k)}\right] x^{n+1} \\
> &= \sum_{n=1}^{\infty} \frac{1}{n + 1} \left\{\sum_{k=1}^{n} \frac{k + ((n + 1) - k)}{k \cdot (n + 1 - k)}\right\} x^{n+1} \\
> &= \sum_{n=1}^{\infty} \frac{1}{n + 1} \left[\sum_{k=1}^{n} \left(\frac{1}{n + 1 - k} + \frac{1}{k}\right)\right] x^{n+1} \\
> &= 2\sum_{n=1}^{\infty} \frac{1}{n + 1} \left(\sum_{k=1}^{n} \frac{1}{k}\right) x^{n+1} \\
> &= 2\sum_{n=1}^{\infty} \left(1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}\right) \cdot \frac{x^{n+1}}{n + 1}.
> \end{aligned}
> $$
> 
> 上面的展开式在 $[-1, 1)$ 内成立。

> [!solution]- 解 II
> 先求导数 $f'(x) = -\dfrac{2\ln(1 - x)}{1 - x}$ 的展开式。

> [!example] 例 5.3.17
> 求 $f(x) = \dfrac{1}{e}(1 + x)^{1/x}$ 按 $x$ 的幂的展开式至三次项。

> [!solution]- 解
> （利用幂级数的复合。）
> 
> $$
> \begin{aligned}
> f(x) &= \frac{1}{e}(1 + x)^{1/x} = e^{\frac{1}{x}\ln(1 + x) - 1} \\
> &= e^{\frac{1}{x}\sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n} - 1} \\
> &= e^{-\frac{x}{2} + \frac{x^2}{3} - \frac{x^3}{4} + \cdots} \\
> &= 1 + \left(-\frac{x}{2} + \frac{x^2}{3} - \frac{x^3}{4} + \cdots\right) + \frac{1}{2}\left(-\frac{x}{2} + \frac{x^2}{3} - \cdots\right)^2 + \frac{1}{6}\left(-\frac{x}{2} + \cdots\right)^3 \\
> &= 1 - \frac{1}{2}x + \frac{11}{24}x^2 - \frac{7}{16}x^3 + \cdots \quad (|x| < 1).
> \end{aligned}
> $$


### 三、求和问题


#### a. 利用逐项求导与逐项求积分

> [!note] 要点
> 利用逐项求导或逐项积分，将级数化为已知的展开式求和.

> [!example] ☆例 5.3.18
> 设 $|x| < 1$，试求级数 $\sum_{n=0}^{\infty} \frac{(-1)^n x^{n+2}}{(n + 1)(n + 2)}$ 之和。（安徽大学，中国科学技术大学）

> [!solution]- 解 I
> 原式 $= \sum_{n=0}^{\infty} (-1)^n \left(\frac{1}{n + 1} - \frac{1}{n + 2}\right) x^{n+2}$
> $= \sum_{n=0}^{\infty} \frac{(-1)^n x^{n+2}}{n + 1} + \sum_{n=0}^{\infty} \frac{(-1)^{n+1} x^{n+2}}{n + 2}$
> $= x\sum_{k=1}^{\infty} \frac{(-1)^{k-1} x^k}{k} + \sum_{k=2}^{\infty} \frac{(-1)^{k-1} x^k}{k}$
> $= x \ln(1 + x) + \ln(1 + x) - x$ （$|x| < 1$）.

> [!solution]- 解Ⅱ
> 令 $f(x)=\sum_{n=0}^{\infty}\frac{(-1)^n x^{n+2}}{(n+1)(n+2)}$，则
> $f(0)=f'(0)=0, \quad f''(x)=\sum_{n=0}^{\infty}(-1)^n x^n=\frac1{1+x}$.
> 故 $f'(x)=\int_0^x \frac{dt}{1+t}=\ln(1+x)$，从而
> $f(x)=\int_0^x \ln(1+t)\,dt=x\ln(1+x)+\ln(1+x)-x$.

> [!exercise] 练习
> 级数的求和：$\sum_{n=1}^{\infty}\frac{(-1)^{n-1}(n+2)}{n(n+1)}$。（南开大学）

> [!hint]- 提示
> （拆分法）$\frac{n+2}{n(n+1)}=\frac2n-\frac1{n+1}$。再用 $\ln(1+x)$ 的 Taylor 展式或用逐项积分、逐项微分的方法。

> [!hint]- 再提示
> $\sum_{n=1}^{\infty}\frac{(-1)^{n-1}(n+2)}{n(n+1)}=2\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}-\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n+1}$
> $=2\ln 2+\sum_{k=2}^{\infty}\frac{(-1)^{k-1}}{k}=3\ln 2-1$.
>
> 或令
> $f(x)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}(n+2)}{n(n+1)}x^{n+1}$,
> 则 $\int_0^x f(t)\,dt=x^2\ln(1+x)+x\ln(1+x)-x^2$.
> 从而 原式 $= \bigl[x^2\ln(1+x)+x\ln(1+x)-x^2\bigr]_{x=1}=3\ln 2-1$.

> [!example] 例 5.3.19
> 证明对任一正整数 $k$，$\sum_{n=1}^{\infty}\frac{n^k}{n!}$ 是 $e$ 的整数倍。（北京理工大学）

> [!note] 分析
> 要证明 $\sum_{n=1}^{\infty}\frac{n^k}{n!}$ 是 $e$ 的整数倍，关键在于求级数的和，为此我们考虑对应的幂级数
> $f(x)=\sum_{n=1}^{\infty}\frac{n^k}{n!}x^n$。
> 若能求出 $f(x)$，令 $x=1$ 就可得原级数的和（此幂级数收敛半径 $= +\infty$）。求 $f(x)$ 的困难在于通项的分子里有因子 $n^k$（否则 $\sum_{n=1}^{\infty}\frac1{n!}x^n=e^x-1$）。
> 为了消去 $n^k$，将此级数先乘 $\frac1x$ 再逐项积分，这么做一次，分子就消了一个因子 $n$；反复做 $k$ 次，便可消去 $n^k$。

> [!proof]- 证
> 记 $f(x)=\sum_{n=1}^{\infty}\frac{n^k}{n!}x^n \,(R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|=+\infty)$，则
> $\int_0^x \frac1t f(t)\,dt$
> $=\int_0^x\left(\sum_{n=1}^{\infty}\frac{n^k}{n!}t^{n-1}\right)dt$
> $=\sum_{n=1}^{\infty}\frac{n^{k-1}}{n!}x^n$.
> 反复这么做 $k$ 次，得
> $\int_0^x\frac1{t_{k-1}}\int_0^{t_{k-1}}\frac1{t_{k-2}}\cdots\int_0^{t_1}\frac1t f(t)\,dt$
> $=\sum_{n=1}^{\infty}\frac1{n!}x^n=e^x-1$.
> 于是
> $f(x)=\bigl(\cdots(((e^x-1)'\,x)'\,x)'\cdots\bigr)'\,x= p_k(x)e^x$,
> 其中 $p_k(x)$ 为 $x$ 的整数系数 $k$ 次多项式。由此知
> $\sum_{n=1}^{\infty}\frac{n^k}{n!}=f(1)=p_k(1)e \;(p_k(1)\text{为整数})$,
> 即为 $e$ 的整数倍。

> [!note] ①
> $(e^x-1)'x=xe^x=p_1(x)e^x$，$((e^x-1)'x)'x=x(1+x)e^x=p_2(x)e^x$。
> 若进行到第 $k-1$ 次时为 $p_{k-1}(x)e^x$（其中 $p_{k-1}$ 为整数系数 $k-1$ 次多项式），则第 $k$ 次应为
> $(p'_{k-1}(x)\cdot x+p_{k-1}(x))e^x=p_k(x)e^x$，
> 其中 $p_k(x)$ 为整数系数 $k$ 次多项式。故（···(((e^x-1)'x)'x)'···）'$x=p_k(x)e^x$（对一切 $k$ 成立）。


#### b. 方程式法

要点 设法证明级数的和满足某个方程，然后求此方程的解。

> [!example] ☆例 5.3.20
> 试求下列幂级数的和函数：
> $$
> S(x)=1+x+\frac{x^2}{2}+\frac{x^3}{1\cdot 3}+\frac{x^4}{2\cdot 4}+\frac{x^5}{1\cdot 3\cdot 5}+\frac{x^6}{2\cdot 4\cdot 6}+\cdots.
> $$
> （广西大学）

> [!hint]- 提示
> 收敛半径 $= +\infty$，逐项微分可知
> $$
> S'(x)=1+xS(x),
> $$
> 且 $S(0)=1$。解此微分方程知
> $$
> S(x)=e^{x^2/2}\left(\int_0^x e^{-t^2/2}\,dt+1\right).
> $$

> [!example] ☆例 5.3.21
> 证明：若函数 $f(x)$ 在 $[0,1]$ 上连续，令
> $$
> f_0(x)=f(x)，\quad f_{n+1}(x)=\int_x^1 f_n(y)\,dy \quad (x\in[0,1],\, n=0,1,2,\cdots),
> $$
> 则 $\sum_{n=1}^{\infty} f_n(x)$ 在 $[0,1]$ 上一致收敛于 $\varphi(x)=\int_x^1 e^{y-x}f(y)\,dy$。（东北师范大学）

> [!proof]- 证
> 1°（先证明该级数一致收敛。）
> 
> 因 $f(x)$ 在 $[0,1]$ 上连续，所以有界，即 $\exists M>0$，使 $|f(x)|\le M$ 于 $[0,1]$ 上，由此知
> $$
> |f_1(x)|=\left|\int_x^1 f_0(y)\,dy\right|=\left|\int_x^1 f(y)\,dy\right|\le M(1-x),
> $$
> $$
> |f_2(x)|=\left|\int_x^1 f_1(y)\,dy\right|\le M\int_x^1 (1-x)\,dx=M\frac{(1-x)^2}{2!},
> $$
> …………
> 用数学归纳法易证
> $$
> |f_n(x)|\le M\frac{(1-x)^n}{n!}\qquad (\forall n=1,2,3,\cdots).
> $$
> 
> 但 $\sum M\frac{(1-x)^n}{n!}=Me^{1-x}$ 在全数轴上成立，在 $[0,1]$ 上一致收敛，所以 $\sum_{n=1}^{\infty} f_n(x)$ 在 $[0,1]$ 上绝对一致收敛。
> 
> 2°（证明和满足微分方程。）记原级数之和为
> $$
> \varphi(x)=\int_x^1 f(t)\,dt+\int_x^1 dt_1\int_{t_1}^1 f(t_2)\,dt_2+\cdots. \qquad (1)
> $$
> 此式两端同时加 $f(x)$，再同时在 $[x,1]$ 上取积分得
> $$
> \int_x^1 f(t)\,dt+\int_x^1 \varphi(t)\,dt=\varphi(x). \qquad (2)
> $$
> 由此求导得
> $$
> \varphi'(x)+\varphi(x)+f(x)=0. \qquad (3)
> $$
> 从式 (2) 看出
> $$
> \varphi(1)=0. \qquad (4)
> $$
> 在条件 (4) 下求解微分方程 (3) 可得
> $$
> \varphi(x)=\int_x^1 f(y)e^{y-x}\,dy.
> $$
> 
> 未学过微分方程的读者可这样来求解：设 $\varphi(x)=u(x)e^{-x}$，则代入式 (3) 得
> $$
> u'(x)=-f(x)e^x，
> $$
> 所以
> $$
> u(x)=-\int_0^x f(t)e^t\,dt+C. \qquad (5)
> $$
> 根据 (4) 应有 $u(1)=0$，故知 $C=\int_0^1 f(t)e^t\,dt$。代入 (5) 得
> $$
> u(x)=-\int_0^x f(t)e^t\,dt+\int_0^1 f(t)e^t\,dt=\int_x^1 f(t)e^t\,dt=\int_x^1 f(y)e^y\,dy.
> $$
> 因此
> $$
> \varphi(x)=e^{-x}\int_x^1 f(y)e^y\,dy=\int_x^1 f(y)e^{y-x}\,dy.
> $$


#### c. 利用 Abel 第二定理计算数项级数的和

> [!tip] 要点
> 根据 Abel 第二定理，若要计算某收敛的数项级数 $\sum_{n=1}^{\infty} a_n$ 的和，我们只要设法求出幂级数 $\sum_{n=1}^{\infty} a_n x^n$ 在 $(-1,1)$ 内的和函数 $S(x)$，然后令 $x\to 1^-$，取极限，则 $\sum_{n=1}^{\infty} a_n=\lim_{x\to 1^-}S(x)$。而和函数 $S(x)$ 可以通过逐项积分、逐项微分，或方程法等方法求解。

> [!example] ☆例 5.3.22
> 求数项级数 $\frac12-\frac15+\frac18-\frac{1}{11}+\cdots$ 的和。

> [!solution]- 解
> 级数 $\frac12-\frac15+\frac18-\frac{1}{11}+\cdots=\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{3k-1}$，$\quad \frac1{3k-1}\to 0$。根据 Leibniz 定理，该级数收敛。下面以 $S$ 表示其和。易知幂级数
> $$\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{3k-1}x^{3k-1}$$
> 的收敛区间为 $(-1,1]$，于是由 Abel 第二定理，$S=\lim_{x\to 1-0}S(x)$。注意 $S(0)=0$，因此
> $$S(x)=S(x)-S(0)=\int_0^x S'(t)\,dt \quad（当 |x|<1 时）。$$
> 利用逐项微分法，
> $$S'(x)=\sum_{k=1}^{\infty}(-1)^{k-1}x^{3k-2}=\frac{x}{1+x^3}。$$
> 因此
> $$
> \begin{aligned}
> S(x)&=\int_0^x \frac{t}{1+t^3}\,dt\\
> &=-\frac13\ln(1+x)+\frac16\ln(1-x+x^2)+\frac1{\sqrt3}\arctan\frac{2}{\sqrt3}\left(x-\frac12\right)+\frac1{\sqrt3}\arctan\frac1{\sqrt3}。
> \end{aligned}
> $$
> 从而
> $$S=\lim_{x\to 1-0}S(x)=\ln\frac1{\sqrt[3]{2}}+\frac{\pi}{3\sqrt3}=\frac{\sqrt3}{9}\pi-\frac13\ln 2。$$

> [!exercise] 练习1
> 求 $1-\frac14+\frac17-\frac1{10}+\cdots$。

> [!hint]- 提示
> 设 $f(x)=\sum_{n=0}^{\infty}(-1)^n\frac{x^{3n+1}}{3n+1}$，则原式 $= \lim_{x\to 1^-}f(x)$（因收敛半径为 1）。

> [!solution]- 解
> 设 $f(x)=\sum_{n=0}^{\infty}(-1)^n\frac{x^{3n+1}}{3n+1}$，则
> $$f'(x)=\sum_{n=0}^{\infty}(-1)^n x^{3n}=\frac1{1+x^3}=\frac13\left(\frac1{1+x}+\frac{2-x}{1-x+x^2}\right)\quad (x\in(-1,1)).$$
> 
> $$
> \begin{aligned}
> f(x)&=\frac13\int_0^x\frac1{1+t}\,dt+\frac13\int_0^x\frac{2-t}{1-t+t^2}\,dt\\
> &=\frac13\ln(1+x)+\frac12\int_0^x\frac1{1-t+t^2}\,dt-\frac16\int_0^x\frac{d(1-t+t^2)}{1-t+t^2}\\
> &=\frac13\ln(1+x)+\frac1{\sqrt3}\arctan\frac{2t-1}{\sqrt3}\Big|_0^x-\frac16\ln(1-x+x^2).
> \end{aligned}
> $$
> 
> 根据 Abel 第二定理，原式 $= \lim_{x\to 1^-}f(x)=\frac13\ln 2+\frac{\pi}{3\sqrt3}$。

> [!exercise] 练习2
> 已知级数 $\sum_{n=1}^{\infty}\frac{a_n}{n+1}$ 收敛，证明：
> $$\int_0^1 \sum_{n=1}^{\infty} a_n x^n\,dx=\sum_{n=1}^{\infty}\frac{a_n}{n+1}, \qquad (1)$$
> 并计算 $1-\frac12+\frac13-\frac14+\cdots$。（华中科技大学）

> [!solution]- 解
> 由 $\sum_{n=1}^{\infty}\frac{a_n}{n+1}$ 收敛可知，$\frac{a_n}{n+1}\to 0$（$n\to\infty$），可得当 $n$ 充分大时，$\left|\frac{a_n}{n+1}\right|\le 1$，亦即 $0<\sqrt[n]{\left|\frac{a_n}{n+1}\right|}\le 1$。故 $\sum_{n=1}^{\infty}\frac{a_n}{n+1}x^n$ 的收敛半径 $R\ge 1$。
> 
> 在 $(-1,1)$ 内部，$\sum_{n=1}^{\infty}\frac{a_n}{n+1}x^n$ 收敛，记和为 $S(x)$：
> $$S(x)=\int_0^x S'(t)\,dt=\int_0^x\left(\sum_{n=1}^{\infty}a_n t^n\right)dt\quad (\forall x\in(-1,1)).$$
> 应用 Abel 第二定理，得
> $$\sum_{n=1}^{\infty}\frac{a_n}{n+1}=\lim_{x\to 1^-}S(x)=\lim_{x\to 1^-}\int_0^x\left(\sum_{n=1}^{\infty}a_n t^n\right)dt=\int_0^1\left(\sum_{n=1}^{\infty}a_n t^n\right)dt.$$
> 式 (1) 获证。若令 $a_n=(-1)^{n-1}$（$\forall n\in\mathbb N$），则得
> $$\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n+1}=\int_0^1\left[\sum_{n=1}^{\infty}(-t)^n\right]dt. \qquad (2)$$
> 因此
> $$
> \begin{aligned}
> 1-\frac12+\frac13-\frac14+\cdots
> &=1+\sum_{n=1}^{\infty}\frac{(-1)^n}{n+1}\\
> &=1+\text{式 (2)}\\
> &=1+\int_0^1\left[\sum_{n=1}^{\infty}(-t)^n\right]dt\\
> &=1-\int_0^1\frac{t}{1+t}\,dt=\ln 2.
> \end{aligned}
> $$
> （或）直接地
> $$
> \begin{aligned}
> 1-\frac12+\frac13-\frac14+\cdots
> &=\left[\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}x^n\right]_{x=1}\\
> &\xrightarrow[\text{Abel 第二定理}]{}\lim_{x\to 1^-}\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}x^n\\
> &=\lim_{x\to 1^-}\ln(1+x)=\ln 2。
> \end{aligned}
> $$

> [!example] *例 5.3.23
> 设 $\lim_{n\to\infty}a_n=a\in\mathbb R$。
> 1）证明：幂级数 $\sum_{n=1}^{\infty}a_n x^n$ 的收敛半径 $R\ge 1$；
> 2）若 $f(x)=\sum_{n=1}^{\infty}a_n x^n$，试证：
> $$\lim_{x\to 1^-}(1-x)f(x)=a, \qquad (1)$$
> $$\lim_{x\to 1^-}(1-x)\int_0^x \frac{f(t)}{1-t}\,dt=a。 \qquad (2)$$
> （中国科学技术大学）

> [!proof]- 证
> 1）$||a_n|-|a||\le |a_n-a|\to 0$，因此 $\lim_{n\to\infty}a_n=a$，故 $\lim_{n\to\infty}|a_n|=|a|$。
> 
> $\forall\,\varepsilon>0$，当 $n$ 充分大时，若 $a=0$，则 $0\le \sqrt[n]{|a_n|}\le \sqrt[n]{\varepsilon}$，从而 $\lim_{n\to\infty}\sqrt[n]{|a_n|}\le 1$；若 $|a|>0$，对任意给定的 $\varepsilon$：$0<\varepsilon<|a|$，则 $\sqrt[n]{|a|-\varepsilon}\le \sqrt[n]{|a_n|}\le \sqrt[n]{|a|+\varepsilon}$。从而 $\lim_{n\to\infty}\sqrt[n]{|a_n|}=1$。故收敛半径
> $$R=\frac1{\lim_{n\to\infty}\sqrt[n]{|a_n|}}\ge 1。$$
> 
> 2）因 $(1-x)f(x)=\sum_{n=1}^{\infty}a_nx^n-\sum_{n=1}^{\infty}a_nx^{n+1}$，记 $a_0=0$
> $$=\sum_{n=1}^{\infty}(a_n-a_{n-1})x^n，$$
> 由 1）知 $R\ge 1$。于是
> $$
> \begin{aligned}
> \lim_{x\to 1^-}(1-x)f(x)&=\lim_{x\to 1^-}\sum_{n=1}^{\infty}(a_n-a_{n-1})x^n\\
> &=\sum_{k=1}^{\infty}(a_k-a_{k-1})\quad（R>1 时用连续性，R=1 时用 Abel 定理）\\
> &= \lim_{n\to\infty} \sum_{k=1}^n (a_k - a_{k-1}) = \lim_{n\to\infty} a_n = a.
> \end{aligned}
> $$
> 
> 式(1)获证：
> 
> 幂级数在收敛区间内：绝对收敛，可以相乘，能逐项积分。所以，$\forall x: 0\le x<1$，
> 
> $$
> \begin{aligned}
> F(x) &\stackrel{\text{记}}{=} \int_0^x \frac{1}{1-t} \cdot f(t)\,dt\\
> &= \int_0^x \left(\sum_{n=1}^\infty t^{n-1} \cdot \sum_{n=1}^\infty a_n t^n\right)dt\\
> &= \int_0^x \sum_{n=1}^\infty (a_1+a_2+\cdots+a_n)t^n \,dt\\
> &= \sum_{n=1}^\infty \frac{a_1+a_2+\cdots+a_n}{n+1}x^{n+1} \stackrel{\text{记}}{=} \sum_{n=1}^\infty A_n x^{n+1},
> \end{aligned}
> $$
> 
> 其中系数
> $$A_n = \frac{a_1+a_2+\cdots+a_n}{n+1} = \frac{a_1+a_2+\cdots+a_n}{n} \cdot \frac{n}{n+1} \to a\cdot 1=a \quad（n\to\infty，例1.2.1）$$
> 
> 说明 $F(x)=\sum_{n=1}^\infty A_n x^{n+1}$ 符合式(1)的条件，应用式(1)，即得式(2)。证毕。

> [!example] * 例5.3.24
> 求级数 $1+\sum_{n=1}^\infty (-1)^n \frac{(2n-1)!!}{(2n)!!}$ 的值。

> [!solution]- 解
> （考虑 $1+\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!}x^n$ 在 $x=-1$ 的情况。）
> 
> **1°**（原级数收敛。）因 $\frac{(2n-1)!!}{(2n)!!} \to 0$，又
> $$\sqrt{1\cdot 3}<\frac{1+3}{2}=2，\quad \sqrt{3\cdot 5}<\frac{3+5}{2}=4，\quad \cdots，\quad \sqrt{(2n-1)(2n+1)}<2n，$$
> 
> $$
> \begin{aligned}
> 0 < \frac{(2n-1)!!}{(2n)!!}
> &= \frac{\sqrt{1\cdot 3}\sqrt{3\cdot 5}\cdots\sqrt{(2n-1)(2n+1)}}{2\cdot 4\cdot\cdots\cdot 2n} \cdot \frac{1}{\sqrt{2n+1}}\\
> &\le \frac{1}{\sqrt{2n+1}} \to 0 \quad（n\to\infty），
> \end{aligned}
> $$
> 
> 根据 Leibniz 定理，原级数收敛。
> 
> **2°** 幂级数 $1+\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!}x^n$ 的收敛半径为1，这是因为
> $$R = \lim_{n\to\infty} \frac{a_{n-1}}{a_n} = \lim_{n\to\infty} \frac{2n}{2n-1} = 1.$$
> 
> 由此知该幂级数在$(-1,1)$内收敛。
> 
> **3°**（计算幂级数的和 $f(x)=1+\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!}x^n$。）因为
> $$f(x)=1+\frac12 x + \frac{1\cdot 3}{2\cdot 4}x^2 + \frac{1\cdot 3\cdot 5}{2\cdot 4\cdot 6}x^3 + \cdots + \frac{1\cdot 3\cdot 5\cdot\cdots\cdot(2n-1)}{2\cdot 4\cdot 6\cdot\cdots\cdot(2n)}x^n + \cdots，$$
> 
> 所以
> $$f'(x)=\frac12 + \frac{1\cdot 3}{2\cdot 4}\cdot 2x + \frac{1\cdot 3\cdot 5}{2\cdot 4\cdot 6}\cdot 3x^2 + \cdots + \frac{1\cdot 3\cdot 5\cdot\cdots\cdot(2n-1)}{2\cdot 4\cdot 6\cdot\cdots\cdot(2n)}\cdot n x^{n-1} + \cdots，$$
> 
> $$2f'(x)=1 + \frac12\cdot 3x + \frac{1\cdot 3}{2\cdot 4}\cdot 5x^2 + \cdots + \frac{1\cdot 3\cdot 5\cdot\cdots\cdot(2n-3)}{2\cdot 4\cdot 6\cdot\cdots\cdot(2n-2)}(2n-1)x^{n-1} + \cdots，$$
> 
> $$
> \begin{aligned}
> 2xf'(x)&=x + \frac12\cdot 3x^2 + \cdots + \frac{1\cdot 3\cdot 5\cdot\cdots\cdot(2n-3)}{2\cdot 4\cdot 6\cdot\cdots\cdot(2n-2)}(2n-1)x^n + \cdots\\
> &= \frac12\cdot 2x + \frac{1\cdot 3}{2\cdot 4}\cdot 4x^2 + \cdots + \frac{1\cdot 3\cdot 5\cdot\cdots\cdot(2n-3)(2n-1)}{2\cdot 4\cdot 6\cdot\cdots\cdot(2n-2)(2n)}\cdot 2n x^n + \cdots，
> \end{aligned}
> $$
> 
> $$2f'(x)-2xf'(x)=1+\frac12 x+\frac{1\cdot 3}{2\cdot 4}x^2+\cdots+\frac{1\cdot 3\cdot\cdots\cdot(2n-1)}{2\cdot 4\cdot\cdots\cdot(2n)}x^n+\cdots=f(x).$$
> 
> 由此
> $$\frac{f'(x)}{f(x)}=\frac{1}{2(1-x)}.$$
> 
> 积分得
> $$\ln f(x)=\ln \frac{1}{\sqrt{1-x}}.$$
> 
> 因此
> $$f(x)=\frac{1}{\sqrt{1-x}}.$$
> 
> 即
> $$1+\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!}x^n = \frac{1}{\sqrt{1-x}} \quad（|x|<1）。\qquad (1)$$
> 
> **4°** 令 $x\to -1^+$ 取极限，利用 Abel 第二定理，知
> $$
> \begin{aligned}
> 1+\sum_{n=1}^\infty (-1)^n \frac{(2n-1)!!}{(2n)!!}
> &= \lim_{x\to -1^+} \left[1+\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!}x^n\right]\\
> &= \lim_{x\to -1^+} \frac{1}{\sqrt{1-x}} = \frac{\sqrt{2}}{2}.
> \end{aligned}
> $$

> [!example] ** 例5.3.25
> 计算极限 $\lim_{n\to\infty, m\to\infty} \sum_{i=1}^m \sum_{j=1}^n \frac{(-1)^{i+j}}{i+j}$。（吉林大学）

> [!note]- 分析
> 为了使和式化简，必须消去分母里的 $i+j$，因此各项分别乘以 $x^{i+j}$，再逐项求导。

> [!solution]- 解
> $$
> \begin{aligned}
> S_{m,n}&=\sum_{i=1}^m \sum_{j=1}^n \frac{(-1)^{i+j}}{i+j}\\
> &= \sum_{i=1}^m \sum_{j=1}^n (-1)^{i+j} \left.\frac{x^{i+j}}{i+j}\right|_{x=0}^{x=1}\\
> &= \sum_{i=1}^m \sum_{j=1}^n (-1)^{i+j} \int_0^1 x^{i+j-1}\,dx\\
> &= \int_0^1 \sum_{i=1}^m \sum_{j=1}^n (-1)^{i+j}x^{i+j-1}\,dx\\
> &= \int_0^1 \sum_{i=1}^m (-x)^i \cdot \sum_{j=1}^n (-1)^j x^{j-1}\,dx\\
> &= \int_0^1 \frac{-x-(-x)^{m+1}}{1+x} \cdot \frac{-1-(-1)^{n+1}x^n}{1+x} \,dx\\
> &= \int_0^1 \frac{1}{(1+x)^2} \left[x+(-1)^{m+1}x^{m+1}+(-1)^{n+1}x^{n+1}+(-1)^{m+n}x^{m+n+1}\right]dx.
> \end{aligned}
> $$
> 
> 注意到 $\lim_{k\to\infty} \int_0^1 \frac{x^k}{(1+x)^2} \,dx = 0$ （因 $0\le\int_0^1 \frac{x^k}{(1+x)^2} \,dx\le\int_0^1 x^k \,dx=\frac{1}{k+1}\to 0$），所以
> $$
> \begin{aligned}
> \lim_{n,m\to\infty} S_{m,n}&=\int_0^1 \frac{x}{(1+x)^2} \,dx\\
> &=\int_0^1 \frac{1}{1+x} \,dx - \int_0^1 \frac{dx}{(1+x)^2}\\
> &= \ln(1+x)\Big|_0^1 + \frac{1}{1+x}\Big|_0^1 = \ln 2 - \frac12.
> \end{aligned}
> $$

> [!example] 例5.3.26
> 求极限 $\lim_{x\to 0} \sum_{n=1}^\infty \frac{(-1)^n}{x^2 + \frac{2^n}{n(n+1)}}$。

> [!hint]- 提示
> $$
> \begin{aligned}
> \lim_{x\to 0} \sum_{n=1}^\infty \frac{(-1)^n}{x^2 + \frac{2^n}{n(n+1)}}
> &=（\text{因一致收敛}）\sum_{n=1}^\infty \lim_{x\to 0} \frac{(-1)^n}{x^2 + \frac{2^n}{n(n+1)}}\\
> &= \sum_{n=1}^\infty (-1)^n \frac{n(n+1)}{2^n}.
> \end{aligned}
> $$
> 
> （关于一致收敛性，可参看例5.2.8的证法。）用逐项积分、逐项微分法求级数
> $$\sum_{n=1}^\infty (-1)^n \frac{n(n+1)}{2^n}x^{n-1}$$
> 的和。


### 四、幂级数的应用


#### a. 计算积分

> [!note] 要点
> 将被积函数展开为幂级数，然后逐项积分。

> [!example] 例5.3.27
> 证明：
> $$
> \frac{2}{\pi} \int_0^{\pi/2} \frac{d\theta}{\sqrt{1-k^2 \sin^2\theta}} = 1 + \frac{1}{4} k^2 + \cdots + \left[\frac{(2n-1)!!}{(2n)!!}\right]^2 k^{2n} + \cdots \quad (|k|<1).
> $$

> [!hint]- 提示
> 利用展开式
> $$
> (1+x)^\alpha = \sum_{n=0}^\infty C_\alpha^n x^n = 1+\alpha x + \frac{\alpha(\alpha-1)}{1\cdot 2}x^2 + \cdots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{1\cdot 2\cdots n}x^n + \cdots \quad (|x|<1).
> $$
> 
> 当 $|k|<1$ 时，$(1-k^2 \sin^2\theta)^{-1/2} = \sum_{n=0}^\infty \frac{(2n-1)!!}{(2n)!!} k^{2n} \sin^{2n}\theta$，关于 $\theta$ 在 $[0,\pi/2]$ 上一致收敛。再逐项积分，并利用 Wallis 公式 $\int_0^{\pi/2} \sin^{2n}\theta\,d\theta = \frac{(2n-1)!!}{(2n)!!}\cdot\frac{\pi}{2}$ 即得。

> [!example] ☆ 例5.3.28
> 计算积分 $\int_0^1 \frac{\ln x}{1-x^2}\,dx$.

> [!solution]- 解Ⅰ
> $$
> \int_0^1 \frac{\ln x}{1-x^2}\,dx = \int_0^1 \frac{1-x^2+x^2}{1-x^2}\ln x\,dx = \int_0^1 \ln x\,dx + \int_0^1 \frac{x^2}{1-x^2}\ln x\,dx.
> $$
> 
> 因 $\int_0^1 \ln x\,dx = -1$ 及 $\frac{x^2}{1-x^2}\ln x = \sum_{n=1}^\infty x^{2n}\ln x$，故
> $$
> \text{上式} = -1 + \int_0^1 \sum_{n=1}^\infty x^{2n}\ln x\,dx.
> $$
> 
> 重复例5.2.52的证明，可知级数 $\sum_{n=1}^\infty x^{2n}\ln x$ 虽然在 $[0,1]$ 上不一致收敛，但仍可以在 $[0,1]$ 上逐项积分，因此
> $$
> \begin{aligned}
> \text{上式} &= -1 + \sum_{n=1}^\infty \int_0^1 x^{2n}\ln x\,dx \\
> &= -1 - \sum_{n=1}^\infty \frac{1}{(2n+1)^2} \\
> &= -\sum_{n=0}^\infty \frac{1}{(2n+1)^2} \\
> &= -\left[\sum_{n=0}^\infty \frac{1}{(2n+1)^2} + \sum_{n=1}^\infty \frac{1}{(2n)^2}\right] + \frac{1}{2^2}\sum_{n=1}^\infty \frac{1}{n^2} \\
> &= -\sum_{n=1}^\infty \frac{1}{n^2} + \frac{1}{2^2}\sum_{n=1}^\infty \frac{1}{n^2} \\
> &= -\frac{\pi^2}{6} + \frac{\pi^2}{24} = -\frac{\pi^2}{8}.
> \end{aligned}
> $$

> [!solution]- 解Ⅱ
> （利用内闭一致收敛，逐项积分，再取极限。）$\forall\alpha,\beta: 0<\alpha<\frac{1}{2}<\beta<1$，因级数 $\sum_{n=0}^\infty x^{2n}=\frac{1}{1-x^2}$ 在 $[\alpha,\beta]$ 上一致收敛，可知级数 $\sum_{n=0}^\infty x^{2n}\ln x = \frac{\ln x}{1-x^2}$ 亦在 $[\alpha,\beta]$ 上一致收敛。因此
> $$
> \int_\alpha^\beta \frac{\ln x}{1-x^2}\,dx = \sum_{n=0}^\infty \int_\alpha^\beta x^{2n}\ln x\,dx. \quad \text{（1）}
> $$
> 
> 但
> $$
> \left|\int_\alpha^\beta x^{2n}\ln x\,dx\right| \le \left|\int_0^1 x^{2n}\ln x\,dx\right| = \frac{1}{(2n+1)^2}.
> $$
> 
> 所以级数(1)关于 $\alpha,\beta\in(0,1)$ 一致收敛。故
> $$
> \begin{aligned}
> \int_0^1 \frac{\ln x}{1-x^2}\,dx &= \lim_{\alpha\to 0^+, \beta\to 1^-} \int_\alpha^\beta \frac{\ln x}{1-x^2}\,dx \\
> &= \lim_{\alpha\to 0^+, \beta\to 1^-} \sum_{n=0}^\infty \int_\alpha^\beta x^{2n}\ln x\,dx \\
> &= \sum_{n=0}^\infty \lim_{\alpha\to 0^+, \beta\to 1^-} \int_\alpha^\beta x^{2n}\ln x\,dx \\
> &= \sum_{n=0}^\infty \int_0^1 x^{2n}\ln x\,dx \\
> &= \sum_{n=0}^\infty \left[-\frac{1}{(2n+1)^2}\right] = -\frac{\pi^2}{8}.
> \end{aligned}
> $$

> [!example] ☆ 例5.3.29
> 若 $f(x)=\sum_{n=0}^{+\infty} a_n x^n$（$a_n>0$，$n=0,1,2,\cdots$）的收敛半径为 $+\infty$，且 $\sum_{n=0}^\infty a_n n!$ 收敛，则 $\int_0^{+\infty} e^{-x}f(x)\,dx$ 也收敛，且 $\int_0^{+\infty} e^{-x}f(x)\,dx = \sum_{n=0}^{+\infty} a_n n!$。（东北师范大学）

> [!proof]- 证
> $$
> \begin{aligned}
> \int_0^{+\infty} e^{-x}f(x)\,dx &= \int_0^{+\infty} \left(e^{-x}\sum_{n=0}^{+\infty} a_n x^n\right)dx \\
> &= \lim_{A\to+\infty} \int_0^A \left[\sum_{n=0}^{+\infty} (a_n x^n e^{-x})\right]dx \\
> &= \lim_{A\to+\infty} \sum_{n=0}^{+\infty} a_n \left(\int_0^A x^n e^{-x}\,dx\right) \quad \text{（1）} \\
> &= \sum_{n=0}^{+\infty} a_n \lim_{A\to+\infty} \int_0^A x^n e^{-x}\,dx \quad \text{（2）} \\
> &= \sum_{n=0}^{+\infty} a_n \int_0^{+\infty} x^n e^{-x}\,dx = \sum_{n=0}^{+\infty} a_n \cdot n!. \quad \text{（3）}
> \end{aligned}
> $$
> 
> 这里等式(1)成立是因为
> $$
> |a_n x^n e^{-x}| = a_n x^n (1+x+\cdots+\frac{x^n}{n!}+\cdots)^{-1} < \frac{a_n x^n}{x^n/n!} = a_n n! \quad (\forall x\ge 0),
> $$
> 且 $\sum_{n=0}^\infty a_n n!$ 收敛，故 $\sum_{n=0}^\infty a_n x^n e^{-x}$ 在 $[0,A]$ 上一致收敛，可逐项积分。
> 
> 等式(2)成立是因为
> $$
> \left|a_n \int_0^A x^n e^{-x}\,dx\right| = a_n \int_0^A x^n e^{-x}\,dx \le a_n \int_0^{+\infty} x^n e^{-x}\,dx = a_n n! \quad (\forall A\ge 0),
> $$
> 且已知 $\sum_{n=0}^\infty a_n n!$ 收敛，因此 $\sum_{n=0}^\infty a_n \int_0^A x^n e^{-x}\,dx$ 关于 $A$ 在 $[0,+\infty)$ 上一致收敛，故可逐项求极限。
> 
> 至于 $\int_0^{+\infty} x^n e^{-x}\,dx = n!$，可反复使用分部积分法 $n$ 次得到，或利用 Euler 积分：
> $$
> \int_0^{+\infty} x^n e^{-x}\,dx = \Gamma(n+1)=n!.
> $$

> [!example] * 例5.3.30
> 试利用已知的公式
> $$
> \int_{-1}^1 \frac{dx}{(\alpha-x)\sqrt{1-x^2}} = \frac{\pi}{\sqrt{\alpha^2-1}} \quad \text{（当 $\alpha>1$ 时）} \quad \text{（1）}
> $$
> 证明：
> $$
> \int_{-1}^1 \frac{x^{2n}}{\sqrt{1-x^2}}\,dx = \frac{(2n-1)!!}{(2n)!!}\pi \quad (n=1,2,\cdots).
> $$

> [!note] 方法
> 将式(1)两端同时按 $\alpha^{-1}$ 的幂次展开，然后比较同次幂的系数。

> [!solution]- 解
> **1°** 式(1)左端
> $$
> \begin{aligned}
> \int_{-1}^1 \frac{dx}{(\alpha-x)\sqrt{1-x^2}} &= \frac{1}{\alpha} \int_{-1}^1 \frac{dx}{(1-x/\alpha)\sqrt{1-x^2}} \\
> &= \frac{1}{\alpha} \int_{-1}^1 \left[\sum_{n=0}^\infty \left(\frac{x}{\alpha}\right)^n \cdot \frac{1}{\sqrt{1-x^2}}\right]dx \\
> &= \frac{1}{\alpha} \sum_{n=0}^\infty \frac{1}{\alpha^n} \int_{-1}^1 \frac{x^n}{\sqrt{1-x^2}}\,dx \quad \text{（2）} \\
> &= \sum_{n=0}^\infty \frac{1}{\alpha^{2n+1}} \int_{-1}^1 \frac{x^{2n}}{\sqrt{1-x^2}}\,dx \quad \text{（奇次项积分为零）}.
> \end{aligned}
> $$
> 
> **2°** 式(1)右端 $= \frac{\pi}{\sqrt{\alpha^2-1}}$
> $$
> \begin{aligned}
> &= \frac{\pi}{\alpha} \left(1-\frac{1}{\alpha^2}\right)^{-1/2} \\
> &= \frac{\pi}{\alpha} \sum_{n=0}^\infty C_{-1/2}^n \left(-\frac{1}{\alpha^2}\right)^n \quad \text{①} \\
> &= \sum_{n=0}^\infty \left[\frac{(2n-1)!!}{(2n)!!}\right]\frac{\pi}{\alpha^{2n+1}}.
> \end{aligned}
> $$
> 
> ① 这里 $C_{-1/2}^n = \frac{(-1/2)(-3/2)\cdots[-1/2-(n-1)]}{1\cdot 2\cdot 3\cdots n}$.
> 
> 总之，
> $$
> \sum_{n=0}^\infty \frac{1}{\alpha^{2n+1}}\int_{-1}^{1}\frac{x^{2n}}{\sqrt{1-x^2}}\,dx = \sum_{n=0}^\infty \frac{1}{\alpha^{2n+1}}\left[\frac{(2n-1)!!}{(2n)!!}\pi\right].
> $$
> 比较 $\alpha$ 同次幂的系数，便得欲证的等式。
> 
> 现补充证明等式（2）的合理性。因级数
> $$
> \sum_{n=0}^\infty \left(\frac{x}{\alpha}\right)^n \frac{1}{\sqrt{1-x^2}}
> $$
> 关于 $x$ 在 $(-1,1)$ 内闭一致收敛。所以 $\forall [a,b]\subset(-1,1)$，在 $[a,b]$ 上可逐项取积分：
> $$
> \int_a^b \sum_{n=0}^\infty \frac{1}{\alpha^n}\frac{x^n}{\sqrt{1-x^2}}\,dx = \sum_{n=0}^\infty \frac{1}{\alpha^n}\int_a^b \frac{x^n}{\sqrt{1-x^2}}\,dx.
> $$
> 又 $\sum_{n=0}^\infty \frac{1}{\alpha^n}$ 收敛（自然关于 $a,b\in[-1,1]$ 一致），
> $$
> \left|\int_a^b \frac{x^n}{\sqrt{1-x^2}}\,dx\right| \le \int_{-1}^{1} \frac{|x|^n}{\sqrt{1-x^2}}\,dx \le \int_{-1}^{1} \frac{dx}{\sqrt{1-x^2}}=\pi \quad (a,b\in[-1,1], n\in\mathbb{N}),
> $$
> 即对于 $a,b\in[-1,1], n\in\mathbb{N}$ 一致有界。故由 Abel 判别法，级数
> $$
> \sum_{n=0}^\infty \frac{1}{\alpha^n}\int_a^b \frac{x^n}{\sqrt{1-x^2}}\,dx
> $$
> 关于 $a,b\in[-1,1]$ 一致收敛，从而可逐项取极限：
> $$
> \begin{aligned}
> \int_{-1}^{1} \left(\sum_{n=0}^\infty \frac{1}{\alpha^n}\frac{x^n}{\sqrt{1-x^2}}\right)dx &= \lim_{\substack{a\to(-1)^+ \\ b\to 1^-}} \int_a^b \left(\sum_{n=0}^\infty \frac{1}{\alpha^n}\frac{x^n}{\sqrt{1-x^2}}\right)dx \\
> &= \lim_{\substack{a\to(-1)^+ \\ b\to 1^-}} \sum_{n=0}^\infty \frac{1}{\alpha^n}\int_a^b \frac{x^n}{\sqrt{1-x^2}}\,dx \\
> &= \sum_{n=0}^\infty \frac{1}{\alpha^n} \lim_{\substack{a\to(-1)^+ \\ b\to 1^-}} \int_a^b \frac{x^n}{\sqrt{1-x^2}}\,dx \\
> &= \sum_{n=0}^\infty \frac{1}{\alpha^n} \int_{-1}^{1} \frac{x^n}{\sqrt{1-x^2}}\,dx.
> \end{aligned}
> $$
> 
> 证毕。


#### b. 证明不等式

幂级数是表达函数的重要工具，因此也可应用于证明不等式。如

> [!example] ☆ 例 5.3.31
> 证明不等式 $e^x+e^{-x}\le 2e^{x^2/2},x\in(-\infty,+\infty)$.（中山大学）

> [!proof]- 证
> 因
> $$
> e^x+e^{-x}=2\operatorname{ch}x=2\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!},\quad
> 2e^{x^2/2}=2\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!!},
> $$
> 而
> $$
> \frac{x^{2n}}{(2n)!}\le \frac{x^{2n}}{(2n)!!},
> $$
> 故 $e^x+e^{-x}\le 2e^{x^2/2}$.


#### c. 近似计算

幂级数常常用于近似计算。如

> [!example] ☆ 例 5.3.32
> 求 $\pi$ 的近似值，计算到小数点后第三位（误差不超过 $10^{-3}$）。（安徽大学）

> [!hint]- 提示
> $$
> \frac{\pi}{6}=\arctan x\bigg|_{x=1/\sqrt3}
> =\sum_{n=1}^{\infty}(-1)^{n-1}\frac{x^{2n-1}}{2n-1}\bigg|_{x=1/\sqrt3}.
> $$
> 利用 Leibniz 级数的余和估计：
> $$
> |r_n|\le |a_{n+1}|=\frac{1}{3^{n+1/2}}\cdot\frac{1}{2n+1}.
> $$
> 要 $|r_n|<\frac{1}{1000}$，只要
> $$
> \frac{1}{3^n}\frac{1}{2n+1}<\frac{1}{1000},
> $$
> 由此可知应取的项数 $n\ge5$.


### 五、综合性问题

> [!example] ☆ 例 5.3.33
> 设
> $$
> S(x)=\sum_{n=1}^{\infty}e^{-n}\sin n^2x\quad(-\infty<x<+\infty).
> $$
> 试证：
> 
> 1）$S(x)$ 在全数轴 $\mathbb R$ 上可任意次微分；
> 
> 2）$S(x)$ 的 Maclaurin 级数当 $x\ne0$ 时发散。（武汉大学）

> [!proof]- 证
> $\forall k\ge0,\forall x\in\mathbb R$，有
> $$
> \left|e^{-n}n^{2k}\sin\left(n^2x+k\frac{\pi}{2}\right)\right|\le e^{-n}n^{2k},\quad
> \sum_{n=1}^{\infty}e^{-n}n^{2k}\text{ 收敛}.
> $$
> 因此
> $$
> \sum_{n=1}^{\infty}e^{-n}n^{2k}\sin\left(n^2x+k\frac{\pi}{2}\right)
> $$
> 在 $\mathbb R$ 上一致收敛，由此不难用数学归纳法证明结论 1），且
> $$
> S^{(k)}(x)=\sum_{n=1}^{\infty}e^{-n}n^{2k}\sin\left(n^2x+k\frac{\pi}{2}\right)\quad(x\in\mathbb R).\tag{1}
> $$
> 下面只就结论 2）进行证明。根据式（1），
> $$
> S^{(0)}(0)=S(0)=0,\quad S^{(2k)}(0)=0\quad(k=1,2,\cdots),
> $$
> $$
> S^{(2k+1)}(0)=(-1)^k\sum_{n=1}^{\infty}e^{-n}n^{2(2k+1)}\quad(k=0,1,2,\cdots).
> $$
> 故 $S(x)$ 的 Maclaurin 级数为
> $$
> S(x)=\sum_{k=0}^{\infty}\frac{S^{(k)}(0)}{k!}x^k
> =\sum_{k=0}^{\infty}\frac{1}{(2k+1)!}\left[(-1)^k\sum_{n=1}^{\infty}e^{-n}n^{2(2k+1)}\right]x^{2k+1}.
> $$
> 要证明 $x\ne0$ 时发散，若能证明通项 $\nrightarrow0$ 即可。
> 
> 事实上，$\forall x\ne0$，其通项 $u_k(x)$：
> $$
> |u_k(x)|=\frac{1}{(2k+1)!}\sum_{n=1}^{\infty}e^{-n}n^{2(2k+1)}|x|^{2k+1}
> $$
> $$
> \ge\frac{1}{(2k+1)!}e^{-(2k+1)}(2k+1)^{2(2k+1)}|x|^{2k+1}
> $$
> $$
> \ge e^{-(2k+1)}(2k+1)^{2k+1}|x|^{2k+1}.
> $$
> 当 $k>\left|\frac{e}{2x}\right|$ 时，有 $|x|>\frac{e}{2k}$，因此
> $$
> |u_k(x)|\ge e^{-(2k+1)}(2k+1)^{2k+1}\left(\frac{e}{2k}\right)^{2k+1}\ge1.
> $$
> 证毕。

> [!example] * 例 5.3.34
> 设幂级数
> $$
> f(x)=a_0+a_1x+\cdots+a_nx^n+\cdots
> $$
> 在 $x=1$ 处收敛，试求极限
> $$
> \lim_{\nu\to\infty}\frac{\nu^{\nu}}{2^{\nu}\nu!}\left[f^{(n)}(0)-f^{(n)}\left(\frac{2^{\nu}\cdot\nu!}{\nu^{\nu}}\right)\right],
> $$
> 其中 $\nu$ 为自然数。（吉林大学）

> [!proof]- 证
> （利用 Stirling 公式：$n!=\sqrt{2\pi n}n^ne^{-n+\theta_n/(12n)}(0<\theta_n<1).$）
> $$
> \frac{2^{\nu}\cdot\nu!}{\nu^{\nu}}
> =\frac{2^{\nu}}{\nu^{\nu}}\sqrt{2\pi\nu}\nu^{\nu}e^{-\nu+\theta_{\nu}/(12\nu)}
> =\frac{\sqrt{2\pi\nu}e^{\theta_{\nu}/(12\nu)}}{(e/2)^{\nu}}\to0\quad(\nu\to\infty).
> $$
> 所以
> $$
> \lim_{\nu\to\infty}\frac{\nu^{\nu}}{2^{\nu}\cdot\nu!}\left[f^{(n)}(0)-f^{(n)}\left(\frac{2^{\nu}\cdot\nu!}{\nu^{\nu}}\right)
> \right]\quad\left(\text{令 }h=\frac{2^{\nu}\nu!}{\nu^{\nu}}\right)
> $$
> $$
> =\lim_{h\to0}\frac{f^{(n)}(0)-f^{(n)}(h)}{h}=-f^{(n+1)}(0)=-a_{n+1}(n+1)!.
> $$
> 因该幂级数在 $(-1,1)$ 内收敛，逐项微分 $n+1$ 次后，令 $x=0$，可知 $f^{(n+1)}(0)=a_{n+1}(n+1)!$.

> [!example] ☆ 例 5.3.35
> 设 $f(x)$ 在 $(-\infty,+\infty)$ 上无穷次可微并且满足：
> 
> 1）存在 $M>0$，使得 $|f^{(k)}(x)|\le M\quad(\forall x\in(-\infty,+\infty),k=0,1,2,\cdots)$；
> 
> 2）$f(1/2^n)=0\quad(n=1,2,\cdots)$.
> 
> 证明：在 $(-\infty,+\infty)$ 上 $f(x)\equiv0$.（广西大学）

> [!proof]- 证
> 1° 因为各阶导数一致有界，所以 $(-\infty,+\infty)$ 内处处有
> $$
> f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n.\tag{1}
> $$
> （因 $|R_n(x)|=\left|\frac{f^{(n+1)}(\xi)}{(n+1)!}x^{n+1}\right|\le\frac{M}{(n+1)!}|x|^{n+1}\to0\quad(n\to\infty).$）
> 
> 2° 由 $f(1/2^n)=0\quad(n=1,2,\cdots)$ 知 $f(0)=\lim_{n\to\infty}f(1/2^n)=0$,
> $$
> f'(0)=\lim_{n\to\infty}\frac{f(1/2^n)-f(0)}{1/2^n}=0.
> $$
> 根据 Rolle 定理，$\exists\xi_i^{(1)}:\frac12>\xi_1^{(1)}>\frac1{2^2}>\xi_2^{(1)}>\frac1{2^3}>\cdots>\frac1{2^n}>\xi_n^{(1)}>\frac1{2^{n+1}}>\cdots$，使得
> $$
> f'(\xi_i^{(1)})=0,
> $$
> 从而 $\xi_n^{(1)}\to0\quad(n\to\infty)$,
> $$
> f''(0)=\lim_{n\to\infty}\frac{f'(\xi_n^{(1)})-f'(0)}{\xi_n^{(1)}}=0.
> $$
> 类似可证，若 $f^{(k)}(x)$ 在 $\xi_1^{(k)} > \xi_2^{(k)} > \cdots > \xi_n^{(k)} > \cdots$（$\xi_n^{(k)}\to0$）处有 $f^{(k)}(\xi_n^{(k)})=0$，且 $f^{(k)}(0)=0$，便可推出 $f^{(k+1)}(x)$ 亦然。于是 $n=0,1,2,\cdots$ 时恒有 $f^{(n)}(0)=0$，从而
> $$
> f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n\equiv0\quad(-\infty<x<+\infty).
> $$

> [!remark] 注
> 条件 1）（各阶导数一致有界）不可缺少，否则命题可以不成立。如
> $$
> f(x)=\begin{cases}
> e^{-x^{-2}}\sin\frac{\pi}{x},&x\ne0,\\
> 0,&x=0.
> \end{cases}
> $$

> [!example] ☆ 例 5.3.36
> 设
> $$
> f(x)=\sum_{n=1}^{\infty}\frac{x^n}{n^2}\quad(0\le x\le1).
> $$
> 求证：当 $0<x<1$ 时，有
> $$
> f(x)+f(1-x)+\ln x\ln(1-x)=\frac{\pi^2}{6}.\tag{1}
> $$
> （北京航空航天大学）

> [!proof]- 证
> $f(x)=\sum_{n=1}^{\infty}\frac{x^n}{n^2}$ 的收敛半径 $R=\lim_{n\to\infty}\sqrt[n]{n^2}=1$. $x=1$ 时，$f(1)=\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}$. 级数在 $(0,1)$ 内可逐项微分，$f(x)$ 有连续导数。因此，
> $$
> [f(x)+f(1-x)+\ln x\ln(1-x)]'
> $$
> $$
> =f'(x)-f'(1-x)+\frac{\ln(1-x)}{x}+\frac{\ln x}{x-1}
> $$
> $$
> =\sum_{n=1}^{\infty}\frac{x^{n-1}}{n}-\sum_{n=1}^{\infty}\frac{(1-x)^{n-1}}{n}-\sum_{n=1}^{\infty}\frac{x^{n-1}}{n}+\sum_{n=1}^{\infty}\frac{(-1)^{n-1}(x-1)^{n-1}}{n}=0.
> $$
> 于是
> $$
> f(x)+f(1-x)+\ln x\ln(1-x)=C,\quad x\in(0,1).
> $$
> 令 $x\to0^+$，取极限知 $C=f(1)=\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}$，等式得证。

> [!example] ☆ 例 5.3.37
> 证明 Tauber 定理：设在 $-1<x<1$ 上，有
> $$
> f(x)=\sum_{n=0}^{\infty}a_nx^n,\quad \lim_{n\to\infty}na_n=0.
> $$
> 若 $\lim_{x\to1-0}f(x)=S$，则 $\sum_{n=0}^{\infty}a_n$ 收敛且其和为 $S$.（吉林大学）

> [!note] 分析
> 用加一项、减一项的办法，得
> $$
> \left|\sum_{k=0}^{n}a_k-S\right|
> =\left|\sum_{k=0}^{n}a_k-\sum_{k=0}^{n}a_kx^k-\sum_{k=n+1}^{\infty}a_kx^k+\sum_{k=0}^{\infty}a_kx^k-S\right|
> $$
> $$
> \le\left|\sum_{k=0}^{n}a_k(1-x^k)\right|+\left|\sum_{k=n+1}^{\infty}a_kx^k\right|+\left|\sum_{k=0}^{\infty}a_kx^k-S\right|.\tag{1}
> $$
> 因此问题在于证明：$n$ 充分大，$x$ 充分接近 1 时右端三项都能任意小。

> [!proof]- 证
> 由 $\lim_{n\to\infty}na_n=0$，知 $\lim_{n\to\infty}n|a_n|=0$，从而
> $$
> \lim_{n\to\infty}\frac{\sum_{k=0}^{n}k|a_k|}{n}=0.
> $$
> 又因 $\lim_{x\to1-0}f(x)=S$，所以
> $$
> \left|f\left(1-\frac1n\right)-S\right|\to0\quad(\text{当 }n\to\infty\text{ 时}).
> $$
> 故 $\forall\varepsilon>0,\exists N>0$，使得 $n>N$ 时，有
> $$
> 0\le\frac{\sum_{k=0}^{n}k|a_k|}{n}<\frac{\varepsilon}{3},\quad n|a_n|<\frac{\varepsilon}{3},\quad
> \left|f\left(1-\frac1n\right)-S\right|<\frac{\varepsilon}{3}.
> $$
> 利用式（1），得
> $$
> \left|\sum_{k=0}^{n}a_k-S\right|
> \le\left|\sum_{k=1}^{n}a_k(1-x^k)\right|+\left|\sum_{k=n+1}^{\infty}a_kx^k\right|+\left|\sum_{k=0}^{\infty}a_kx^k-S\right|.
> $$
> 取 $x=1-\frac1n$，不等式右边第一项
> $$
> \left|\sum_{k=0}^{n}a_k(1-x^k)\right|=\left|\sum_{k=1}^{n}a_k(1-x)(1+x+x^2+\cdots+x^{k-1})\right|
> $$
> $$
> \le\sum_{k=1}^{n}|a_k|(1-x)k=\frac{\sum_{k=1}^{n}k|a_k|}{n}<\frac{\varepsilon}{3};
> $$
> 右边第二项
> $$
> \left|\sum_{k=n+1}^{\infty}a_kx^k\right|
> \le\frac1n\sum_{k=n+1}^{\infty}k|a_k|\cdot x^k
> <\frac{\varepsilon}{3n}\sum_{k=n+1}^{\infty}x^k
> \le\frac{\varepsilon}{3}\cdot\frac{1}{n}\cdot\frac{1}{1-x}
> =\frac{\varepsilon}{3n\cdot\frac1n}=\frac{\varepsilon}{3};
> $$
> 右边第三项
> $$
> \left|\sum_{k=0}^{\infty}a_kx^k-S\right|=\left|f\left(1-\frac1n\right)-S\right|<\frac{\varepsilon}{3}.
> $$
> 故
> $$
> \left|\sum_{k=0}^{n}a_k-S\right|<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon.
> $$
> 证毕。

> [!example] * 例 5.3.38
> 设
> $$
> f_n(x)=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!},
> $$
> 其中 $n$ 为自然数。试证：方程
> $$
> f_n(x)\cdot f_{n+1}(x)=0
> $$
> 在实数域内有唯一实根。（四川师范大学）

> [!note] 分析
> 讨论 $f_n(x)=0$ 的根的情况。
> 
> 当 $n=0$ 时，$f_0(x)=1$，无实根；
> 
> 当 $n=1$ 时，$f_1(x)=1+x$，有唯一一实根；
> 
> 当 $n=2$ 时，$f_2(x)=1+x+\frac{x^2}{2}=\frac12[(x+1)^2+1]>0$，无实根；
> 
> 当 $n=3$ 时，$f_3(x)=1+x+\frac{x^2}{2}+\frac{x^3}{6}$，三次方程至少有一实根，而 $f_3'(x)=f_2(x)>0$，$f_3(x)$ 严增，故 $f_3(x)=0$ 只有唯一一实根。不妨记此实根为 $x_3$，因 $f_3$ 严增，可知
> $$
> \begin{cases}
> =0,&x=x_3,\\
> <0,&x<x_3,\\
> >0,&x>x_3.
> \end{cases}
> $$
> 当 $n=4$ 时，$f_4'(x)=f_3(x)$
> $$
> \begin{cases}
> =0,&x=x_3,\\
> <0,&x<x_3,\\
> >0,&x>x_3,
> \end{cases}
> $$
> 因此 $f_4(x)$ 在 $x=x_3$ 处取极小值也是最小值，故 $\forall x$，
> $$
> f_4(x)\ge \min f_4(x)=f_4(x_3)=f_3(x_3)+\frac{x_3^4}{4!}=0+\frac{x_3^4}{4!}>0.
> $$
> 因此 $f_4(x)$ 无实根。
> 
> 类似地，可写出一般的推理过程：$f_{2n}$ 无实根 $\Rightarrow f_{2n+1}$ 仅有唯一一实根 $\Rightarrow f_{2n+2}$ 无实根（留作练习）。
> 
> 于是，在 $\mathbb R$ 上，$f_n(x)=0$ 无实根（当 $n$ 为偶数时），仅有唯一一实根（当 $n$ 为奇数时）。总之，$f_n(x)\cdot f_{n+1}(x)=0$ 在 $\mathbb R$ 上仅有唯一一实根。

> [!example] * 练习
> 设 $a_k>0$，$\sum_{k=0}^{\infty} a_k=1$，$f(x)=\sum_{k=0}^{\infty} a_kx^k-x$. 试证：
> 
> 1）$f(x)$在$[0,1]$上为严格凸函数（见例3.4.8前的定理5）；
> 
> 2）若$f'(1)$存在，$f(x)$在$[0,1]$上有零点的充分必要条件是$f'(1)>0$.（中南大学）

> [!proof]- 证
> 1）$\sum_{k=0}^{\infty} a_k=1$，说明$\sum_{k=0}^{\infty} a_kx^k$的收敛半径$R\ge1$.
> 
> 在$[0,1)$上，$f''(x)=\sum_{k=2}^{\infty} a_kk(k-1)x^{k-2}>0$，可知在$[0,1)$上$f'(x)$严↗，且$f(x)$严格凸（§3.4定理5）.
> 
> 2）（必要性）（反证法）假设$f(x)$在$[0,1)$上有零点，但$f'(1)\le0$.因为1°中已证$f'(x)$严↗，那么$f'(1)\le0$意味着：在$[0,1)$上恒有$f'(x)<0$.因此，在$[0,1]$上$f(x)$严↘.而
> 
> $f(1)=（\sum_{k=0}^{\infty} a_kx^k-x）|_{x=1}=\sum_{k=0}^{\infty} a_k-1=0$,
> 
> 说明：在$[0,1)$上$f(x)$严↘，$f(1)=0$.可见在$[0,1)$上恒有$f(x)>0$，故$f(x)$在$[0,1)$上无零点，矛盾.因此，$f(x)$在$[0,1)$上若有零点，则$f'(1)>0$.
> 
> （充分性）若$f'(1)>0$，根据导数定义，在$x=1$的左邻域应有：$f(x)<f(1)=0$，故$\exists\varepsilon>0$，使得$f(1-\varepsilon)<0$.但另一方面：$f(0)=a_0>0$，根据连续的介值性，在$(0,1)$里，必有$f(x)$的零点.证毕.

> [!example] * 例 5.3.39
> 设 $p_n(x)=1+x+x^2/2!+\cdots+x^n/n!$，$x_m$是$p_{2m+1}(x)=0$的实根，求证：
> 
> $x_m<0$，且 $\lim_{m\to+\infty}x_m=-\infty$.

> [!tip]- 提示
> 1° $\forall m\in\mathbb N$，$x\ge0$时，$p_{2m+1}(x)>0$；$x<0$且$|x|$充分大时，$p_{2m+1}(x)<0$.所以$p_{2m+1}(x)=0$的根$x_m$存在（因介值性）.又$p'_{2m+1}(x)=p_{2m}(x)>0$，$p_{2m+1}(x)$严↗，所以根唯一（见上题），$x_m<0$.
> 
> 2° $\forall x\in(-\infty,0)$，$p_n(x)\to e^x>0$（当$n\to+\infty$时），所以$p_{2m+1}(x)=0$的根$x_m\to-\infty$（当$m\to+\infty$时）.因为若$m\to+\infty$时$p_{2m+1}(x)=0$的根$x_m\nrightarrow-\infty$，则$\exists\Delta>0$，使得$(-\Delta,0)$中含有$\{x_m\}$的一个无穷子列①.从而存在收敛子列$x_{m_k}\to x_0$（$x_0$为某有限数，$x_0\ge-\Delta$），
> 
> $0<e^{-\Delta}=\lim_{k\to+\infty}p_{2m_k+1}(-\Delta)\le\lim_{k\to+\infty}p_{2m_k+1}(x_{m_k})=0$，
> 
> 矛盾.

> [!example] * 例 5.3.40
> 设$f(x)$是仅有正实根的多项式，$-f'(x)/f(x)=\sum_{n=0}^{\infty} c_nx^n$，试证
> 
> $\lim_{n\to\infty}1/\sqrt[n]{c_n}$，$\lim_{n\to\infty}c_n/c_{n+1}$存在且都等于$f(x)$的最小根.（北京大学）

> [!note] 分析
> 要证明$1/\sqrt[n]{c_n}$与$c_n/c_{n+1}$都以$f$的最小根为极限，必须设法求出$c_n$与$f$根的关系.

> [!proof]- 证
> 因为$f$是仅有正根的多项式，所以可设全部的正根为
> 
> $0<a_1<a_2<\cdots<a_k.$　　　　　　　　　　　　　　（1）
> 
> 于是
> 
> $f(x)=A(x-a_1)^{r_1}(x-a_2)^{r_2}\cdots(x-a_k)^{r_k}$
> 
> （其中$r_i$表示根$a_i$的重数，$i=1,2,\ldots,k$）.因此
> 
> $-f'(x)/f(x)=-(r_1/(x-a_1)+\cdots+r_k/(x-a_k))=r_1/a_1\cdot 1/(1-x/a_1)+\cdots+r_k/a_k\cdot 1/(1-x/a_k)$
> 
> $=r_1/a_1 \sum_{n=0}^{\infty} (x/a_1)^n+\cdots+r_k/a_k \sum_{n=0}^{\infty} (x/a_k)^n$
> 
> $=\sum_{n=0}^{\infty} (r_1/a_1^{n+1}+\cdots+r_k/a_k^{n+1})x^n=\sum_{n=0}^{\infty} c_nx^n$.
> 
> 比较系数得 $c_n=r_1/a_1^{n+1}+\cdots+r_k/a_k^{n+1}$（展开式的唯一性），所以
> 
> $\lim_{n\to\infty} c_n/c_{n+1}=\lim_{n\to\infty} c_{n-1}/c_n=\lim_{n\to\infty} (r_1/a_1^n+\cdots+r_k/a_k^n)/(r_1/a_1^{n+1}+\cdots+r_k/a_k^{n+1})$.
> 
> 分子分母同乘$a_1^n$，并注意式（1），得$\lim_{n\to\infty}c_n/c_{n+1}=r_1/(r_1/a_1)=a_1$（最小根）.故
> 
> $\lim_{n\to\infty}1/\sqrt[n]{c_n}$存在，且$\lim_{n\to\infty}c_n/c_{n+1}=a_1$.

> [!remark] 注
> 此例说明：仅具有正实根的多项式，其对数导数的幂级数展开式的收敛半径等于其最小根.

**（拟合法）**

> [!example] ※ 例 5.3.41
> 设$S_n=\sum_{k=0}^n a_k$，$\sigma_n=(S_0+S_1+S_2+\cdots+S_{n-1})/n$. 试证：
> 
> 1）若$\{\sigma_n\}$收敛，则$a_n=o(n)$（当$n\to\infty$时）；
> 
> 2）若$\{\sigma_n\}$收敛，则$f(x)=\sum_{n=0}^{\infty} a_nx^n$在$(-1,1)$内绝对收敛，且
> 
> $f(x)=(1-x)^2\sum_{n=0}^{\infty} (n+1)\sigma_{n+1}x^n$；
> 
> 3）若$\lim_{n\to\infty}\sigma_n=S$，则$\lim_{x\to1^-}f(x)=S$.

> [!proof]- 证
> 1）因为$\sigma_n=(S_0+S_1+S_2+\cdots+S_{n-1})/n$，所以$S_n=(n+1)\sigma_{n+1}-n\sigma_n$，
> 
> $S_n/n=(n+1)/n\cdot\sigma_{n+1}-\sigma_n\to0$（当$n\to\infty$时）.
> 
> 故
> 
> $a_n/n=(S_n-S_{n-1})/n=S_n/n-(n-1)/n\cdot S_{n-1}/(n-1)\to0$（当$n\to\infty$时）.
> 
> 2）因为$a_n/n\to0$（$n\to\infty$），所以当$n$充分大时，有$|a_n|<n$，$|a_nx^n|<n|x|^n$，而$\sum_{n=1}^{\infty} nx^n$的收敛半径为1，故知级数$f(x)=\sum_{n=0}^{\infty} a_nx^n$在$(-1,1)$内绝对收敛.如此，当$x\in(-1,1)$时，利用级数乘法得
> 
> $f(x)/(1-x)=\sum_{n=0}^{\infty} (a_0+a_1+\cdots+a_n)x^n=\sum_{n=0}^{\infty} S_nx^n$，
> 
> $f(x)/(1-x)^2=\sum_{n=0}^{\infty} (S_0+S_1+\cdots+S_n)x^n=\sum_{n=0}^{\infty} (n+1)\sigma_{n+1}x^n$，
> 
> 即
> 
> $f(x)=(1-x)^2\sum_{n=0}^{\infty} (n+1)\sigma_{n+1}x^n.$　　　　　　　　　　（1）
> 
> 3）下面利用拟合法，来证明$\lim_{x\to1^-}f(x)=S$.由
> 
> $1/(1-x)=\sum_{n=0}^{\infty} x^n$，　$1/(1-x)^2=\sum_{n=0}^{\infty} (n+1)x^n$，
> 
> 可得1的分解式：　$1=(1-x)^2\sum_{n=0}^{\infty} (n+1)x^n$.
> 
> 两端同乘$S$，因此$S$可写成与（1）类似的形式（这即拟合法的思想）：
> 
> $S=(1-x)^2\sum_{n=0}^{\infty} (n+1)Sx^n$.
> 
> 于是
> 
> $f(x)-S=(1-x)^2\sum_{n=0}^{\infty} (n+1)(\sigma_{n+1}-S)x^n.$　　　　　　（2）
> 
> 已知$\lim\sigma_n=S$，所以$\forall\varepsilon>0$，$\exists N>0$，$n>N$时，$|\sigma_{n+1}-S|<\varepsilon/2$.故式（2）中$n>N$各项的和（当$0<x<1$时）
> 
> $|(1-x)^2\sum_{n>N} (n+1)(\sigma_{n+1}-S)x^n|$
> 
> $\le\varepsilon/2\cdot(1-x)^2\sum_{n>N} (n+1)x^n\le\varepsilon/2\cdot(1-x)^2\sum_{n=0}^{\infty} (n+1)x^n=\varepsilon/2$.
> 
> （2）中前$N+1$项：$\sum_{n=0}^N (n+1)(\sigma_{n+1}-S)x^n$当$x\to1^-$时保持有界，另一因子$(1-x)^2$为无穷小.
> 
> 因此$\exists\delta>0$，当$0<1-x<\delta$时，有
> 
> $|(1-x)^2\sum_{n=0}^N (n+1)(\sigma_{n+1}-S)x^n|<\varepsilon/2$.
> 
> 总之　　　　　　　　$|f(x)-S|<\varepsilon/2+\varepsilon/2=\varepsilon$.
> 
> 即　　　　　　$S=\lim_{x\to1^-}f(x)$.

> [!example] new ☆ 例 5.3.42
> 设$f(x)=1/(1+x-2x^2)$，试证：$\sum_{n=0}^{\infty} n!/f^{(n)}(0)$绝对收敛.（浙江大学）

> [!proof]- 证
> $f(x)=1/(1+x-2x^2)=1/3（1/(1-x)+2/(1+2x)）=1/3[\sum_{n=0}^{\infty} x^n+\sum_{n=0}^{\infty}(-1)^n2(2x)^n]$
> 
> $=\sum_{n=0}^{\infty} (1+(-1)^n2^{n+1})/3\, x^n$.
> 
> 另一方面，$f(x)=\sum_{n=0}^{\infty} f^{(n)}(0)/n!\, x^n$.由展开式唯一性，知
> 
> $\sum_{n=0}^{\infty} n!/f^{(n)}(0)=\sum_{n=0}^{\infty} 3/(1+(-1)^n2^{n+1})$.
> 
> 因$|3/(1+(-1)^n2^{n+1})|\le3/2^n$，且$\sum_{n=0}^{\infty} 3/2^n$收敛.故级数$\sum_{n=0}^{\infty} n!/f^{(n)}(0)$收敛，且绝对收敛.

> [!example] new * 例 5.3.43
> 设$f(x)=\sum_{n=1}^{\infty} 1/(n^2\ln(1+n))\, x^n$，试证：
> 
> 1）$f(x)$在$[-1,1]$上连续；　2）$f(x)$在$x=-1$处可导；
> 
> 3）$\lim_{x\to1^-}f'(x)=+\infty$；　4）$f(x)$在$x=1$处不可导.（浙江大学）

> [!tip]- 提示
> 1）在$x=1$处，$\sum_{n=1}^{\infty} 1/(n^2\ln(1+n))$有优级数$\sum_{n=1}^{\infty} 1/n^2$；
> 
> 在$x=-1$处，$\sum_{n=1}^{\infty} (-1)^n/(n^2\ln(1+n))$是Leibniz级数.所以结论1）成立.
> 
> 2）逐项求导后的级数在$x=-1$处仍是Leibniz级数，收敛，所以级数在$[-1,0]$上一致收敛，能逐项求导，$f(x)$在$x=-1$处有右导数.
> 
> 3）（思路：$f'(x)=\sum_{n=1}^{\infty} 1/(n\ln(1+n))x^{n-1}\ge\sum_{k=1}^n 1/(k\ln(1+k))x^{k-1}$
> 
> $x\to1^-$　　　　　　　　　　　　　　　　$\sum_{k=1}^n 1/(k\ln(1+k))$　　$n\to\infty$　　$\to+\infty$）
> 
> 严格证明如下：在$(0,1)$内，$f'(x)=\sum_{n=1}^{\infty} 1/(n\ln(1+n))x^{n-1}$.用积分判别法易知
> 
> $\sum_{k=2}^{n+1} 1/(k\ln k)\to+\infty$.而$\sum_{k=2}^n 1/(k\ln k)\le\sum_{i=1}^n 1/(i\ln(1+i))$，故$S_n$记$=\sum_{i=1}^n 1/(i\ln(1+i))\to+\infty$.（当$n\to\infty$时）.即$\forall M>0$，$\exists N>0$，当$n>N$时，有$S_n>M+1$，$S_{n-1}>M$.
> 
> 而$f'_n(x)$表示$\sum_{k=1}^n x^{k-1}/(k\ln(1+k))$，$\to S_n=\sum_{k=1}^n 1/(k\ln(1+k))$（当$x\to1^-$时）.故对于$\varepsilon=1$，$\exists\delta>0$，当$1-\delta<x<1$时，$0<S_n-f'_n(x)<\varepsilon=1$.所以，$\forall M>0$，$\exists\delta>0$，当$1-\delta<x<1$时，$f'(x)>f'_n(x)>S_n-1>M$.因此，$\lim_{x\to1^-}f'(x)=+\infty$.
> 
> 4）$f'_-(1)=\lim_{x\to1^-}(f(x)-f(1))/(x-1)=\lim_{x\to1^-} f'(\xi)(x-1)/(x-1)=+\infty$，说明：$f(x)$在$x=1$处不可导.

> [!example] new * 例 5.3.44
> 已知在$(-1,1)$内，幂级数$\sum_{n=0}^{\infty} a_nx^n=f(x)$.试证：若存在趋向0的序列$\{x_n\}$：$0\ne x_n\in(-1,1)$，$\lim_{n\to\infty}x_n=0$，使得$f(x_n)=0$（$n=1,2,\ldots$），则$\forall x\in(-1,1)$，$f(x)\equiv0$.（南开大学）

> [!proof]- 证
> 1° $a_0=\sum_{n=0}^{\infty} a_nx^n|_{x=0}=f(0)=\lim_{n\to\infty}f(x_n)=0$.
> 
> 2° 因$f(0)=f(x_n)=0$，根据Rolle定理，$\exists\xi_n$在0与$x_n$之间，使得$f'(\xi_n)=0$（$n\in\mathbb N$）.对$f'(x)=\sum_{n=1}^{\infty} na_nx^{n-1}$（此时常数项为$a_1$），重复1°中的推理得
> 
> $a_1=\sum_{n=1}^{\infty} na_nx^{n-1}|_{x=0}=f'(0)=\lim_{n\to\infty}f'(\xi_n)=0$.
> 
> 3° 继续这样做下去，顺次可得$a_k=0$（$k=2,3,\ldots$），说明$\sum_{n=0}^{\infty} a_nx^n$是零级数，$f(x)\equiv0$.

> [!remark] 注
> 1）请将本题与例5.3.35进行比较.
> 
> 2）假设在区间$(-a,a)$内$f(x)=\sum_{n=0}^{\infty} a_nx^n$，$g(x)=\sum_{n=0}^{\infty} b_nx^n$，存在序列$\{x_n\}\to0$，使得$f(x_n)=g(x_n)$（$n=1,2,\ldots$）.记$F(x)=f(x)-g(x)=\sum_{n=0}^{\infty} (a_n-b_n)x^n$，有$F(x_n)=0$，即$a_n=b_n$（$n=1,2,\ldots$）.则$f(x)\equiv g(x)$，$\forall x\in(-a,a)$.如此，我们得到重要结论：若$S(x)=\sum_{n=0}^{\infty} a_nx^n$的收敛半径$R>0$，$\{x_n\}$是收敛于0的点列，则函数$f$：$f(x)\equiv S(x)$（$\forall x\in(-R,R)$）$\Leftrightarrow f(x_n)=S(x_n)$（$n=1,2,\ldots$）.
> 
> 换句话说：$\sum_{n=0}^{\infty} a_nx^n$的值能被它（在收敛于0的点列上）的值唯一确定.

> [!example] new 例 5.3.45
> 求下列幂级数的收敛域：
> 
> 1）$\sum_{n=1}^{\infty} x^n/(1+1/2+\cdots+1/n)$；（中国科学院）　　《$[-1,1)$》
> 
> 2）$\sum_{n=1}^{\infty} x^n/(1+1/\sqrt2+\cdots+1/\sqrt n)$；　　《$[-1,1)$》
> 
> 3）$\sum_{n=2}^{\infty} x^n/(1/(2\ln2)+1/(3\ln3)+\cdots+1/(n\ln n))$　　《$[-1,1)$》

> [!tip]- 提示
> 1）$a_n/a_{n+1}=(1+1/2+\cdots+1/(n+1))/(1+1/2+\cdots+1/n)=1+(1/(n+1))/(1+1/2+\cdots+1/n)$，注意到$1\le1+1/2+\cdots+1/n\le n$，因此
> 
> $1/n\le n$，因此$1+(1/(n+1))/n\le a_n/a_{n+1}\le1+(1/(n+1))/1$.故$R=\lim_{n\to\infty}a_n/a_{n+1}=1$，收敛区间为$(-1,1)$.
> 
> （讨论端点。）在端点 $x = -1$ 处，级数为 Leibniz 级数（通项正负交错，绝对值单降，趋向零），因此收敛；
> 
> 在端点 $x = 1$ 处，
> $\sum_{k=1}^n 1/(1 + 1/2 + \cdots + 1/k) \ge \sum_{k=1}^n 1/k \to +\infty$（$n\to\infty$），级数发散。故
> 
> 收敛范围是$[-1,1)$。
> 
> 2），3）类似.

> [!example] * 例 5.3.46
> 设函数 $f:\mathbb N\to\mathbb R$，$a_n$（$n\in\mathbb N$）为实数，且对于充分大的 $x$，有
> 
> $f(x) = a_0 + a_1/x + a_2/x^2 + \cdots + a_n/x^n + \cdots.$    （1）
> 
> 试证：$\sum_{n=1}^{\infty} f(n)$ 收敛的充要条件是 $a_0 = a_1 = 0$.（浙江大学）

> [!proof]- 证
> 根据题意，对充分大的 $x$：$y = 1/x > 0$，$\sum_{n=0}^{\infty} a_n y^n$ 收敛，说明
> $1/\limsup \sqrt[n]{|a_n|} = r > 0$，
> 即
> $\limsup \sqrt[n]{|a_n|} = 1/r < +\infty.$    （2）
> 
> 说明 $|a_n|$ 有界，即$\exists M$：$|a_n|\le M$（$n=1,2,\ldots$）。因此
> 
> $|f(n)-a_0| = \left|\sum_{k=1}^{\infty} a_k/n^k\right| \le M\sum_{k=1}^{\infty} 1/n^k$
> $= M\cdot\frac{1/n}{1-1/n}$
> $= M/(n-1) \to 0$（$n\to\infty$）.    （3）
> 
> 1°（证明：若 $\sum_{n=1}^{\infty} f(n)$ 收敛，则必有 $a_0 = a_1 = 0$.）事实上，$\sum_{n=1}^{\infty} f(n)$ 收敛，则
> $f(n)\to0$（$n\to\infty$）. 由式（3）可知：$|a_0|\le|a_0-f(n)|+|f(n)|\to0$（$n\to\infty$）. 故
> $a_0=0$.
> 
> $\sum_{n=2}^N f(n) = a_1\sum_{n=2}^N 1/n + \sum_{n=2}^N\sum_{k=2}^{\infty} a_k/n^k.$
> 
> 其中若 $a_1\ne0$，则 $a_1\sum_{n=2}^N 1/n \to +\infty$（$N\to\infty$）. 而
> 
> $\left|\sum_{n=2}^N\sum_{k=2}^{\infty} a_k/n^k\right| \le M\sum_{n=2}^N\sum_{k=2}^{\infty} 1/n^k$
> $= M\sum_{n=2}^N \frac{1}{n-1} - \frac{1}{n} < M$，
> 
> 所以，$\lim_{N\to\infty}\sum_{n=2}^N f(n) = +\infty$，与 $\sum_{n=1}^{\infty} f(n)$ 收敛矛盾. 故只能 $a_1=0$.
> 
> 2°（证明：若 $a_0 = a_1 = 0$，则 $\sum_{n=1}^{\infty} f(n)$ 收敛.）若 $a_0 = a_1 = 0$，则对充分大的 $N$，
> 
> $\sum_{n=N+1}^{N+p} |f(n)| \le \sum_{n=N+1}^{N+p}\sum_{k=2}^{\infty} |a_k|/n^k$
> $\le \sum_{n=N+1}^{N+p}\sum_{k=2}^{\infty} M/n^k$
> $= M\sum_{n=N+1}^{N+p} \frac{1/n^2}{1-1/n}$
> $= M\sum_{n=N+1}^{N+p} \frac{1}{n-1} - \frac{1}{n} \le M/N \to 0$（$N\to\infty$）（$\forall p>0$）.
> 
> 根据 Cauchy 准则，级数 $\sum_{n=1}^{\infty} f(n)$ 收敛.


### 单元练习 5.3

> [!exercise] 5.3.1
> 对于幂级数 $\sum_{n=1}^{\infty} \frac{2^n \ln n}{n} x^n$，
> 
> 1）求出收敛半径；
> 2）讨论在收敛域端点上的收敛性；
> 3）指出在什么样区间上级数一致收敛.（内蒙古大学）

> [!hint]- 提示
> 在 $[-1/2, 1/2)$ 内收敛，$\forall \alpha: |\alpha|<1/2$，在 $[-1/2, \alpha]$ 上一致收敛.

> [!exercise] 5.3.2
> 若级数 $\sum_{n=0}^{\infty} a_nx^n$ 有收敛半径 $R_1$，而级数 $\sum_{n=0}^{\infty} b_nx^n$ 有收敛半径 $R_2$，求级数
> 
> 1）$\sum_{n=0}^{\infty} (a_n+b_n)x^n$；    2）$\sum_{n=0}^{\infty} a_nb_nx^n$
> 
> 的收敛半径.

> [!hint]- 提示
> 1）若 $R_1 < x < R_2$，则 $\sum_{n=0}^{\infty} (a_n+b_n)x^n$ 发散.
> 2）若 $x = R_1R_2\theta^2$（$0<\theta<1$），则 $\sum_{n=0}^{\infty} a_nb_nx^n$ 收敛.
> 
> 《1）$R = \min(R_1, R_2)$；2）$R \geq R_1R_2$》

> [!exercise] 5.3.3
> 设 $a_n\geq 0$，$\sum_{n=0}^{\infty} a_nx^n$ 的收敛半径为 1，和函数为 $f(x)$，若 $\sum_{n=0}^{\infty} a_n$ 发散，求证 $\lim_{x\to 1^-} f(x)=+\infty$.

> [!hint]- 提示
> 可用反证法.

> [!hint]- 再提示
> 否则 $\exists M>0$ 及 $\{x_n\}\to 1^-$（当 $n\to\infty$ 时），使得 $f(x_n)=\sum_{k=1}^{\infty} a_kx_n^k\leq M$. 于是 $\forall m$：
> $$
> 0\leq \sum_{k=1}^{m} a_k = \lim_{n\to\infty}\sum_{k=1}^{m} a_kx_n^k\leq M
> $$
> 与 $\sum_{k=1}^{\infty} a_k$ 发散矛盾.

> [!exercise] ☆5.3.4
> 证明：$y(x)=\sum_{n=0}^{\infty} \frac{x^{4n}}{(4n)!}$ 满足 $y^{(4)}=y$.（中国科学技术大学）

> [!hint]- 提示
> 因 $\sum_{n=0}^{\infty} \frac{t^n}{(4n)!}$ 在 $\mathbb{R}$ 上处处收敛，故 $\sum_{n=0}^{\infty} \frac{x^{4n}}{(4n)!}$ 亦然. 逐项求导四次可得 $y^{(4)}=y$.

> [!note] 注
> $\left[\sum_{n=0}^{\infty} \frac{x^{4n}}{(4n)!}\right]' = \left[\sum_{n=0}^{\infty} \frac{t^n}{(4n)!}\right]'\Big|_{t=x^4} \cdot t'_x$
> 
> $\cdot 4x^3 = \sum_{n=0}^{\infty} \frac{x^{4n-1}}{(4n-1)!} = \sum \left[\frac{x^{4n}}{(4n)!}\right]'$，表明该级数仍可直接进行逐项求导.

> [!exercise] ☆5.3.5
> 求极限 $\lim_{n\to\infty}\sum_{k=1}^{n} \frac{k+2}{k! + (k+1)! + (k+2)!}$.（四川师范大学）

> [!hint]- 提示
> $$
> \frac{k+2}{k! + (k+1)! + (k+2)!} = \frac{1}{(k+1)!} - \frac{1}{(k+2)!}
> $$
> 
> 原极限 $= \left[\sum_{k=1}^{\infty} \frac{x^{k+1}}{(k+1)!} - \sum_{k=1}^{\infty} \frac{x^{k+2}}{(k+2)!}\right]_{x=1}$
> $$
> = \left[\frac{x^2}{2}\right]_{x=1} = \frac{1}{2}
> $$

> [!exercise] *5.3.6
> 设序列 $\{a_n\}_{n=1}^{\infty}$，$\{b_n\}_{n=1}^{\infty}$ 满足：$a_n>0$，级数 $\sum_{n=0}^{\infty} a_nx^n$ 当 $|x|<1$ 时收敛，当 $x=1$ 时发散，又 $\lim_{n\to\infty}(b_n/a_n)=A$（$0\leq A<+\infty$），证明：
> $$
> \lim_{x\to 1^-} \frac{\sum_{n=0}^{\infty} b_nx^n}{\sum_{n=0}^{\infty} a_nx^n} = A
> $$
> （南京大学）

> [!proof]- 证
> $$
> \left| \frac{\sum_{k=1}^{n} b_kx^k}{\sum_{k=1}^{n} a_kx^k} - A \right|
> = \left| \frac{\sum_{k=1}^{n} a_k(b_k/a_k - A)x^k}{\sum_{k=1}^{n} a_kx^k} \right|. \quad （1）
> $$
> 
> $\forall \varepsilon>0$，$\exists N>0$，当 $n>N$ 时 $|b_k/a_k - A| < \varepsilon/2$，
> $$
> \text{式（1）} \leq \frac{\sum_{k=1}^{N} (|b_k| + a_kA)}{\sum_{k=1}^{n} a_kx^k} + \varepsilon/2. \quad （2）
> $$
> 
> 又因 $\sum_{k=1}^{\infty} a_k = +\infty$，$\exists N_1>N$，使得
> $$
> \frac{\sum_{k=1}^{N} (|b_k| + a_kA)}{\sum_{k=1}^{N_1} a_k} < \varepsilon/4
> $$
> 
> 式（2）右端 $< \varepsilon/4 \cdot \frac{\sum_{k=1}^{N_1} a_k}{\sum_{k=1}^{N_1} a_kx^k} \cdot \frac{\sum_{k=1}^{N_1} a_kx^k}{\sum_{k=1}^{n} a_kx^k} + \varepsilon/2. \quad （3）$
> 
> 因 $\frac{\sum_{k=1}^{N_1} a_k}{\sum_{k=1}^{N_1} a_kx^k} \to 1$（$x\to 1^-$），故 $\exists \delta>0$，当 $0<x<1$，$1-x<\delta$ 时，有
> $$
> \frac{\sum_{k=1}^{N_1} a_k}{\sum_{k=1}^{N_1} a_kx^k} < 2
> $$
> 于是当 $n>N_1$，$0<1-x<\delta$ 时，
> $$
> \text{式（3）} < \varepsilon/4 \cdot 2 \cdot 1 + \varepsilon/2 = \varepsilon
> $$
> 证毕.

> [!exercise] ※5.3.7
> 设 $v_n = a\sqrt{\frac{n-1}{n+1}} v_{n-1}$，$n=2,3,\cdots$，$|a|<1$，
> $x_{n+1} = x_n + cv_n^2$，$n=1,2,\cdots$，$c>0$.
> 
> 求 $\lim x_n$.

> [!note] 思想方法
> 写出 $x_n$ 的通项式，进行递推，变成级数形式求和.

> [!solution]- 解
> $x_{n+1} = x_n + cv_n^2 = x_{n-1} + cv_{n-1}^2 + cv_n^2 = \cdots = x_1 + c\sum_{k=1}^{n} v_k^2$.
> 
> $$
> v_k^2 = a^2 \frac{k-1}{k+1} v_{k-1}^2 = a^2 \frac{k-1}{k+1} \cdot a^2 \frac{k-2}{k} \cdot v_{k-2}^2 = \cdots
> $$
> $$
> = a^{2(k-1)} \cdot \frac{k-1}{k+1} \cdot \frac{k-2}{k} \cdot \frac{k-3}{k-1} \cdot \cdots \cdot \frac{2}{4} \cdot \frac{1}{3} \cdot v_1^2
> $$
> $$
> = a^{2(k-1)} \cdot \frac{2}{k+1} \cdot \frac{1}{k} \cdot v_1^2.
> $$
> 
> 因此
> $$
> x_{n+1} = x_1 + c\sum_{k=1}^{n} v_k^2 = x_1 + c\sum_{k=1}^{n} a^{2(k-1)} \cdot \frac{2}{k+1} \cdot \frac{1}{k} \cdot v_1^2
> $$
> $$
> = x_1 + 2cv_1^2\sum_{k=1}^{n} a^{2(k-1)}\left(\frac{1}{k} - \frac{1}{k+1}\right).
> $$
> 
> 于是
> $$
> \lim_{n\to\infty} x_n = x_1 + 2cv_1^2\sum_{k=1}^{\infty} a^{2(k-1)}\left(\frac{1}{k} - \frac{1}{k+1}\right). \quad （1）
> $$
> 
> 其中
> $$
> \sum_{k=1}^{\infty} \frac{a^{2(k-1)}}{k+1} = \frac{1}{a^4} \sum_{k=1}^{\infty} \frac{a^{2(k+1)}}{k+1}.
> $$
> 记 $f(a)=\sum_{k=1}^{\infty} \frac{a^{2(k+1)}}{k+1}$，则
> $$
> f'(a)=\sum_{k=1}^{\infty} \frac{2(k+1)a^{2(k+1)-1}}{k+1}=2\sum a^{2k+1}=\frac{2a^3}{1-a^2}.
> $$
> 
> 于是
> $$
> \sum_{k=1}^{\infty} \frac{a^{2(k+1)}}{k+1}=f(a)=\int_0^a \frac{2t^3}{1-t^2} dt
> $$
> $$
> = \int_0^a \frac{2t^3-2t+2t}{1-t^2} dt
> $$
> $$
> = -a^2 + \int_0^a \frac{2t}{1-t^2} dt
> $$
> $$
> = -a^2 - \ln(1-a^2). \quad （2）
> $$
> 
> 由此得
> $$
> \sum_{k=1}^{\infty} \frac{a^{2(k-1)}}{k+1}
> = \frac{1}{a^4} \sum_{k=1}^{\infty} \frac{a^{2(k+1)}}{k+1}
> $$
> $$
> = -\frac{1}{a^2} - \frac{1}{a^4}\ln(1-a^2). \quad （3）
> $$
> 
> 式（1）中的另一项
> $$
> \sum_{k=1}^{\infty} \frac{a^{2(k-1)}}{k} = 1 + \sum_{k=2}^{\infty} \frac{a^{2(k-1)}}{k}
> $$
> $$
> = 1 + \frac{1}{a^2} \sum_{k=2}^{\infty} \frac{a^{2k}}{k}
> $$
> 由式（2）$= 1 + \frac{1}{a^2}[-a^2 - \ln(1-a^2)] = -\frac{1}{a^2}\ln(1-a^2). \quad （4）$
> 
> （3），（4）代入（1）得
> $$
> \lim_{n\to\infty} x_n = x_1 + 2cv_1^2 \left[ -\frac{1}{a^2}\ln(1-a^2) + \frac{1}{a^2} + \frac{1}{a^4}\ln(1-a^2) \right]
> $$
> $$
> = x_1 + 2cv_1^2 \cdot \frac{1}{a^4} \left[ a^2 + (1-a^2)\ln(1-a^2) \right].
> $$

> [!exercise] ☆5.3.8
> 设 $a_n\geq 0$（$n=1,2,\cdots$），$\sum_{n=1}^{\infty} a_nx^n$ 当 $-1<x<1$ 时收敛并且有上界，证明：
> 
> 1）$\lim_{x\to 1^-}\sum_{n=1}^{\infty} a_nx^n$ 存在；2）$\sum_{n=1}^{\infty} a_n$ 收敛；3）$\lim_{x\to 1^-}\sum_{n=1}^{\infty} a_nx^n = \sum_{n=1}^{\infty} a_n$.（厦门大学）

> [!hint]- 提示
> 1）$x\to 1^-$ 时，$\sum_{k=1}^{n} a_kx^k \nearrow$，有一致上界.
> 2）$\sum a_k$ 的部分和有界.
> 3）在 $[0,1]$ 上 $\sum a_nx^n$ 一致收敛.

> [!exercise] 5.3.9
> 设 $f(x)=\sum_{n=0}^{\infty} a_nx^n$ 的收敛半径为 $R=+\infty$. 令 $f_n(x)=\sum_{k=0}^{n} a_kx^k$. 求证：当 $n\to\infty$ 时
> $$
> f(f_n(x)) \rightrightarrows f(f(x)) \quad （a\leq x\leq b）.
> $$

> [!hint]- 提示
> 收敛半径 $R=+\infty$ $\Rightarrow$ $\forall [a,b]$ 上：$f_n\to f$，且 $f_n$，$f$ 一致有界，$\exists A>0$，使 $f(x)\in [-A,A]$（$\forall x\in\mathbb{R}$）.

> [!hint]- 再提示
> $f$ 在 $[-A,A]$ 上一致连续 $\Rightarrow$ $f_n\to f$ $\Longrightarrow$ $f(f_n(x))\to f(f(x))$（$n\to\infty$）关于 $x\in [a,b]$ 一致.

> [!exercise] ☆5.3.10
> 求级数 $\sum_{n=1}^{\infty} n\cdot 2^{\pi/2} x^{3n-1}$ 的收敛区间与和函数.（华中师范大学）

> [!note] 答案
> 〈收敛区间 $(-1,1)$，端点发散，和 $= \dfrac{2^{\pi/2}x^2}{(1-x^3)^2}$〉

> [!exercise] ☆5.3.11
> 证明：
> $$
> \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{(2n-1)(2n+1)3^n} = \sqrt{3}\int_0^{1/\sqrt{3}} x \arctan x\, dx = \frac{2\pi\sqrt{3}-9}{18}.
> $$
> （西南大学）

> [!hint]- 提示
> 参看例 3.1.19，可写出 $x\arctan x = \sum \frac{(-1)^{n-1}x^{2n}}{2n-1}$，$|x|\leq 1$.

> [!hint]- 再提示
> 上式逐项积分可得左边等式，分部积分可得右边等式.

> [!exercise] *5.3.12
> 验证积分 $\int_0^1 \ln\frac{1+x}{1-x} \cdot \frac{dx}{x}$ 存在且等于 $2\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}$.（湘潭大学）

> [!hint]- 提示
> $x^{-1}\ln\frac{1+x}{1-x} = 2\sum_{n=1}^{\infty} \frac{x^{2n-2}}{2n-1}$ 在 $[0,1-\varepsilon]$ 上逐项积分，然后令 $\varepsilon\to 0^+$.

> [!hint]- 另解
> 令 $u=\frac{1+x}{1-x}$ 作变换，原积分 $I = 2\int_1^{+\infty} \frac{\ln u}{u^2-1} du$. 再令 $v=1/u$，则 $I = -2\int_0^1 \frac{\ln v}{1-v^2} dv$
> $$
> = \frac{\pi^2}{4} = 2\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}
> $$
> （见例 5.4.8）.

> [!exercise] *5.3.13
> 试证：
> $$
> \int_0^x \frac{\arctan t}{t} \ln\frac{x}{t}\, dt = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)^3}. \quad （|x|\leq 1）
> $$
> （四川大学）

> [!hint]- 提示
> 代入 $\arctan t = \sum \frac{(-1)^{n-1} t^{2n-1}}{2n-1}$（$|t|\leq 1$）. 令 $0<\varepsilon<x<1$，在 $[\varepsilon,x]$ 上逐项积分，然后令 $\varepsilon\to 0^+$.

> [!exercise] **5.3.14
> 证明：$A=\int_0^1 \frac{\ln x}{1-x^2} dx$，$B=\int_0^1 \frac{\ln x}{1-x} dx$，$C=\int_0^1 \frac{\ln x}{1+x} dx$ 收敛，并求其值.

> [!hint]- 提示
> $x=0$ 为奇点，当 $0\leq x\leq 1/2$ 时，有
> $$
> \frac{|\ln x|}{1+x} \leq |\ln x|, \quad \frac{|\ln x|}{1-x} \leq 2|\ln x|, \quad \frac{|\ln x|}{1-x^2} \leq \frac{4}{3}|\ln x|
> $$
> 可证 $A$，$B$，$C$ 收敛. 利用分部积分，$\ln(1+x)$ 的展开式在 $[0,1]$ 上可逐项积分. $C=-\pi^2/12$，$A=3/2\, C=-\pi^2/8$，$B=2C=-\pi^2/6$.

> [!exercise] *5.3.15
> 设幂级数 $\sum_{n=1}^{\infty} a_nx^n$ 的收敛半径大于 0，证明：
> 
> 1）$\lim_{x\to 0}\sum_{n=1}^{\infty} a_nx^n = 0$；
> 
> 2）如果 $a_1\neq 0$，并且在原点的一个邻域里 $|\sum_{n=1}^{\infty} a_nx^n| \geq |a_1||x| - 2x^2$ 逐点成立，那么 $|a_2|\leq 2$.（厦门大学）

> [!proof]- 证
> 1) 收敛半径 $> 0$，则函数 $S(x)=\sum_{n=1}^{\infty} a_n x^n$ 在 $x=0$ 处连续，故
> $$
> \lim_{x\to 0} \sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} a_n x^n\Big|_{x=0}=0.
> $$
> 
> 2) 当 $a_1>0$ 时（$a_1<0$ 时类似可证），在 0 点附近，$\sum_{n=1}^{\infty} a_n x^n$ 的符号跟 $a_1$ 相同. 因此 $a_1>0$ 时：
> 
> 对充分小的 $\delta>0$，当 $x\in (0,\delta)$ 时，
> $$
> \left|\sum_{n=1}^{\infty} a_n x^n\right|=\sum_{n=1}^{\infty} a_n x^n=a_1x+a_2x^2+o(x^2).
> $$
> 根据已知条件，
> $$
> \sum_{n=1}^{\infty} a_n x^n\geq a_1x-2x^2, \quad x\in (0,\delta).
> $$
> 因此
> $$
> a_2x^2+o(x^2)\geq -2x^2, \quad a_2+o(1)\geq -2.
> $$
> 令 $x\to 0^+$，得 $a_2\geq -2$.  (1)
> 
> 同理，当 $x\in (-\delta,0)$ 时，
> $$
> \left|\sum_{n=1}^{\infty} a_n x^n\right|=-[a_1x+a_2x^2+o(x^2)]\geq -a_1x-2x^2, \quad x\in (-\delta,0).
> $$
> 故 $-a_2-o(1)\geq -2$，即 $a_2+o(1)\leq 2$. 令 $x\to 0^-$，得 $a_2\leq 2$.
> 
> 联系 (1)，得 $|a_2|\leq 2$.


## §5.4  Fourier 级数

> [!note] 导读
> Fourier 级数是函数项级数的一种特殊形式。它是研究和表示周期函数的有力工具。本节我们将围绕展开与收敛问题进行讨论。
> Fourier 级数相当重要。可能由于计算过长，考题相对较少。


### 一、正交系

> [!note] 要点
> 要证明 $\{\varphi_n(x)\}$ 在 $[a,b]$ 上正交，即要证明
> $$\int_a^b \varphi_n(x)\varphi_m(x)dx=0$$（当 $m\neq n$ 时）。

> [!example] ☆ 例 5.4.1
> 试证明 Legendre 多项式
> $$X_n(x)=\frac{1}{2^n n!}\frac{d^n(x^2-1)^n}{dx^n}=\frac{1}{(2n)!!}\frac{d^n(x^2-1)^n}{dx^n}$$
> 在 $[-1,1]$ 上为正交的，并求 $\int_{-1}^1 X_n^2(x)dx$ 之值。

> [!proof]- 证
> 记 $u=u(x)=(x^2-1)^n=(x-1)^n(x+1)^n$，
> 则 $u,u',u'',\ldots,u^{(n-1)}$ 当 $x=\pm 1$ 时为 0，且 $X_n(x)=\frac{1}{(2n)!!}u^{(n)}$ 为 $x$ 的 $n$ 次多项式。设 $m<n$，则 $X_m(x)$ 为 $m$ 次多项式。反复应用分部积分法（$n$ 次），有
> $$(2n)!!\int_{-1}^1 X_n(x)X_m(x)dx=\int_{-1}^1 u^{(n)}(x)X_m(x)dx=\int_{-1}^1 X_m(x)du^{(n-1)}(x)$$
> $$= X_m(x)u^{(n-1)}(x)\big|_{-1}^1-\int_{-1}^1 u^{(n-1)}(x)X_m'(x)dx$$
> $$= -\int_{-1}^1 u^{(n-2)}(x)X_m''(x)dx=\cdots= (-1)^n\int_{-1}^1 u(x)X_m^{(n)}(x)dx=0.$$
> （因为 $X_m(x)$ 是 $m$ 次多项式，$n>m$，可知 $X_m^{(n)}(x)=0$。）这就证明 $X_n(x)$ 有正交性。用类似的方法可求出
> $$\int_{-1}^1 X_n^2(x)dx=\frac{2}{2n+1}.$$

> [!example] ☆ 例 5.4.2
> 设序列 $\{y_n(x)\}$ 满足方程
> $$\frac{d}{dx}\left[p(x)\frac{dy_n}{dx}\right]+\lambda_n y_n=0\quad (\forall x\in[a,b])\quad (n=1,2,\ldots)$$
> （其中 $n\neq m$ 时 $\lambda_n\neq\lambda_m$）及边界条件 $y_n(a)=y_n(b)=0$。试证明 $\{y_n(x)\}$ 在 $[a,b]$ 上为正交系。

> [!proof]- 证
> 由 (1)，$\lambda_n y_n=-\frac{d}{dx}\left[p(x)\frac{dy_n}{dx}\right]$，于是
> $$\lambda_n\int_a^b y_n y_m dx=\int_a^b \lambda_n y_n y_m dx=-\int_a^b\left\{\frac{d}{dx}\left[p(x)\frac{dy_n}{dx}\right]\right\}y_m dx$$
> $$= -p(x)\frac{dy_n}{dx}\cdot y_m\big|_a^b+\int_a^b p(x)\frac{dy_n}{dx}\frac{dy_m}{dx}dx=\int_a^b p(x)\frac{dy_n}{dx}\frac{dy_m}{dx}dx. \quad (2)$$
> 注意此式积分号下的 $y_n,y_m$ 地位是平等的，将 $m,n$ 互换得
> $$\lambda_m\int_a^b y_n y_m dx=\int_a^b p(x)\frac{dy_n}{dx}\frac{dy_m}{dx}dx. \quad (3)$$
> $(2)-(3)$ 得 $(\lambda_n-\lambda_m)\int_a^b y_n y_m dx=0$，
> 故 $\int_a^b y_n y_m dx=0$（当 $n\neq m$ 时）。证毕

> [!example] ☆ 例 5.4.3
> 设 $0<\lambda_1<\lambda_2<\cdots<\lambda_n<\cdots$ 满足
> $$\sigma\sin\sqrt{\lambda_n}l+\sqrt{\lambda_n}\cos\sqrt{\lambda_n}l=0\quad (\sigma>0)，$$
> 求证：$\{y_n(x)\}=\{\sin\sqrt{\lambda_n}x\}$ 在 $[0,l]$ 上为正交系，并求 $\int_0^l y_n^2(x)dx$（用 $\sigma,\lambda_n,l$ 表示）。

> [!hint]- 提示
> 利用三角公式计算积分 $\int_0^l y_m(x)y_n(x)dx$（$m\neq n$）及 $\int_0^l y_n^2(x)dx$，并对结果应用题设的关系式。


### 二、Fourier 系数

> [!note] 要点
> 若 $f(x)$ 以 $2\pi$ 为周期，在区间 $[-\pi,\pi]$ 上可积，则
> $$
> a_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx， n=0,1,2,\cdots，
> $$
> $$
> b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin nx\,dx， n=1,2,\cdots
> $$
> 称为 $f(x)$ 的 Fourier 系数。$\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$ 称为 $f(x)$ 在 $[-\pi,\pi]$ 上的 Fourier 级数。由此易知 Fourier 系数有如下性质。

1）若 $f_1(x),f_2(x)$ 的 Fourier 系数为 $a_n^{(1)},b_n^{(1)}$ 与 $a_n^{(2)},b_n^{(2)}$，则函数 $f(x)=\alpha f_1(x)\pm\beta f_2(x)$ 的 Fourier 系数为
$$
a_n=\alpha a_n^{(1)}\pm\beta a_n^{(2)}（n=0,1,2,\cdots），
$$
$$
b_n=\alpha b_n^{(1)}\pm\beta b_n^{(2)}（n=1,2,\cdots）。
$$

2）若 $f(x)$ 在 $[-\pi,\pi]$ 上连续、分段光滑，$a_n,b_n$ 是 $f(x)$ 的 Fourier 系数，利用分部积分法，易知 $f'(x)$ 的 Fourier 系数（用 $a_n',b_n'$ 表示）：
$$
b_n'=-na_n（n=1,2,\cdots），当 f(-\pi)=f(\pi) 时，a_0'=0，a_n'=nb_n（n=1,2,\cdots）。
$$

3）若 $f(x)$ 在 $[-\pi,\pi]$ 上分段连续，$a_n,b_n$ 是它的 Fourier 系数，则不难验证，
$$
F(x)\equiv\int_0^x\left(f(t)-\frac{a_0}{2}\right)dt
$$
的 Fourier 系数（用 $A_n,B_n$ 表示）：
$$
A_n=-\frac{b_n}{n},\quad B_n=\frac{a_n}{n}（n=1,2,\cdots），\quad A_0=2\sum_{n=1}^{\infty}\frac{b_n}{n}。
$$

下面我们再来证明一些性质。

> [!example] 例 5.4.4
> 1）设 $f(x)$ 以 $2\pi$ 为周期，在 $(0,2\pi)$ 内有界，试证：若 $f(x)\downarrow$，则系数 $b_n\geq 0$；若 $f(x)\uparrow$，则 $b_n\leq 0$（$n=1,2,\cdots$）；
> 
> 2）设 $f(x)$ 在 $(0,2\pi)$ 内 $f'(x)$ 有界，试证：若 $f'(x)\uparrow$，则 $a_n\geq 0$；若 $f'(x)\downarrow$，则 $a_n\leq 0$（$n=1,2,\cdots$）；
> 
> 3）设 $f(x)$ 在 $(0,2\pi)$ 上可积，试证：若 $F(x)=\int_0^x\left(f(t)-\frac{a_0}{2}\right)dt\downarrow$，则 $f$ 的系数 $a_n\geq 0$；若 $F(x)\uparrow$，则 $a_n\leq 0$（$n=1,2,\cdots$）。

> [!proof]- 证
> 1）将 $[0,2\pi]$ $n$ 等分，则
> $$
> \begin{aligned}
> b_n&=\frac{1}{\pi}\int_0^{2\pi} f(x)\sin nx\,dx=\frac{1}{\pi}\sum_{i=1}^n \int_{(i-1)2\pi/n}^{i2\pi/n} f(x)\sin nx\,dx\\
> &=\frac{1}{\pi}\sum_{i=1}^n\left[\int_{(i-1)2\pi/n}^{(i-1/2)2\pi/n} f(x)\sin nx\,dx+\int_{(i-1/2)2\pi/n}^{i2\pi/n} f(x)\sin nx\,dx\right]\\
> &=\frac{1}{\pi}\sum_{i=1}^n\left[\int_{(i-1)2\pi/n}^{(i-1/2)2\pi/n} f(x)\sin nx\,dx-\int_{(i-1)2\pi/n}^{(i-1/2)2\pi/n} f\left(t+\frac{\pi}{n}\right)\sin nt\,dt\right]（其中 t=x-\frac{\pi}{n}）\\
> &=\frac{1}{\pi}\sum_{i=1}^n \int_{(i-1)2\pi/n}^{(i-1/2)2\pi/n}\left[f(x)-f\left(x+\frac{\pi}{n}\right)\right]\sin nx\,dx\geq 0。
> \end{aligned}
> $$
> （这是因为 $f(x)\downarrow$，$f(x)-f(x+\frac{\pi}{n})\geq 0$；又因在 $[(i-1)2\pi/n,(i-1/2)2\pi/n]$ 上 $\sin nx\geq 0$。）
> 
> 2）与 3）可利用要点 2）和 3）的关系得到。

> [!example] 例 5.4.5
> 设 $f(x)$ 是以 $2\pi$ 为周期的函数，满足 $\alpha$ 阶 Hölder 条件（亦称 $\alpha$ 阶的 Lipschitz 条件）：
> $$
> |f(x)-f(y)|\leq L|x-y|^\alpha（0<\alpha\leq 1）。
> $$
> 证明：$a_n=O(1/n^\alpha)$，$b_n=O(1/n^\alpha)$（当 $n\to\infty$ 时）。

> [!proof]- 证
> $$
> \begin{aligned}
> a_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx \quad (1)\\
> &=\frac{1}{\pi}\int_{-\pi}^{\pi-\pi/n} f\left(t+\frac{\pi}{n}\right)\cos(nt+\pi)dt（x=t+\frac{\pi}{n}）\\
> &= -\frac{1}{\pi}\int_{-\pi}^{\pi} f\left(t+\frac{\pi}{n}\right)\cos nt\,dt\\
> &= -\frac{1}{\pi}\int_{-\pi}^{\pi} f\left(x+\frac{\pi}{n}\right)\cos nx\,dx。 \quad (2)
> \end{aligned}
> $$
> (1),(2)平均得
> $$
> a_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}\left[f(x)-f\left(x+\frac{\pi}{n}\right)\right]\cos nx\,dx，
> $$
> $$
> \begin{aligned}
> |a_n|&\leq\frac{1}{2\pi}\int_{-\pi}^{\pi}\left|f(x)-f\left(x+\frac{\pi}{n}\right)\right|\,|\cos nx|\,dx\\
> &\leq\frac{1}{2\pi}L\left(\frac{\pi}{n}\right)^\alpha\int_{-\pi}^{\pi}|\cos nx|dx\leq L\left(\frac{\pi}{n}\right)^\alpha。
> \end{aligned}
> $$
> 因此 $|a_n|=O(1/n^\alpha)$。类似可证 $|b_n|=O(1/n^\alpha)$。

> [!example] 例 5.4.6
> 设 $f(x)$ 有界，周期为 $2\pi$，并在 $(-\pi,\pi)$ 内逐段单调，试证 $a_n=O(1/n)$，$b_n=O(1/n)$（当 $n\to\infty$ 时）。

> [!proof]- 证 I
> $$
> \begin{aligned}
> a_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx（令 x=t+\frac{k\pi}{n}）\\
> &=\frac{(-1)^k}{\pi}\int_{-\pi}^{\pi} f\left(x+\frac{k\pi}{n}\right)\cos nx\,dx（k=-n+1,\cdots,0,1,\cdots,n）。
> \end{aligned}
> $$
> 同理，$a_n=\frac{(-1)^{k-1}}{\pi}\int_{-\pi}^{\pi} f\left(x+\frac{k-1}{n}\pi\right)\cos nx\,dx$。
> 
> 两式平均得
> $$
> a_n=\frac{(-1)^k}{2\pi}\int_{-\pi}^{\pi}\left[f\left(x+\frac{k\pi}{n}\right)-f\left(x+\frac{k-1}{n}\pi\right)\right]\cos nx\,dx
> $$
> （$k=-n+1,\cdots,0,1,2,\cdots,n$）。  (1)
> 
> (1)中的 $2n$ 个式子相加求平均，得
> $$
> \begin{aligned}
> |a_n|&=\left|\frac{1}{2\pi}\int_{-\pi}^{\pi}\frac{1}{2n}\sum_{k=-n+1}^{n}(-1)^k\left[f\left(x+\frac{k\pi}{n}\right)-f\left(x+\frac{k-1}{n}\pi\right)\right]\cos nx\,dx\right|\\
> &\leq\frac{1}{4n\pi}\int_{-\pi}^{\pi}\sum_{k=-n+1}^{n}\left|f\left(x+\frac{k\pi}{n}\right)-f\left(x+\frac{k-1}{n}\pi\right)\right|\,|\cos nx|\,dx\\
> &\leq\frac{1}{4n\pi}\cdot V_{-\pi}^{\pi}f\cdot\int_{-\pi}^{\pi}|\cos nx|dx\leq\frac{1}{2n}V_{-\pi}^{\pi}f。 \quad (2)
> \end{aligned}
> $$
> 
> 其中 $V_{-\pi}^{\pi}f=\sup\left\{\sum_{i=1}^n|f(x_i)-f(x_{i-1})|\;\middle|\;-\pi=x_0<x_1<\cdots<x_n=\pi\right\}$ 表示 $f$ 在 $[-\pi,\pi]$ 上的全变差。因 $f(x)$ 有界，且分段单调，故 $V_{-\pi}^{\pi}f<+\infty$。
> 
> 式 (2) 表明 $a_n=O(1/n)$。同理可证 $b_n=O(1/n)$。

> [!proof]- 证 II（借助于 Stieltjes 积分）
> $$
> \begin{aligned}
> a_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx=\frac{1}{n\pi}\int_{-\pi}^{\pi} f(x)d\sin nx\\
> &=\frac{1}{n\pi}f(x)\sin nx\big|_{-\pi}^{\pi}-\frac{1}{n\pi}\int_{-\pi}^{\pi}\sin nx\,df(x)^{①}\\
> &= -\frac{1}{n\pi}\int_{-\pi}^{\pi}\sin nx\,df(x)。 \quad (3)
> \end{aligned}
> $$
> 
> 因此，
> $$
> |a_n|\leq\frac{1}{n\pi}\left|\int_{-\pi}^{\pi}\sin nx\,df(x)\right|\leq\frac{1}{n\pi}\max_{-\pi\leq x\leq\pi}|\sin nx|\cdot V_{-\pi}^{\pi}f\leq\frac{1}{n\pi}\cdot V_{-\pi}^{\pi}f，
> $$
> 所以 $a_n=O(1/n)$。同理可证 $b_n=O(1/n)$。

① 对于 Stieltjes 积分，分部积分公式亦成立。设 $-\pi=x_0<x_1<\cdots<x_k=\pi$ 为任一分划，则
$$
\begin{aligned}
\sum_{i=0}^{k-1} f(\xi_i)\Delta\sin nx_i&=\sum_{i=0}^{k-1} f(\xi_i)(\sin nx_{i+1}-\sin nx_i)\\
&=\sum_{i=1}^{k} f(\xi_{i-1})\sin nx_i-\sum_{i=0}^{k-1} f(\xi_i)\sin nx_i\\
&= f(\xi_{k-1})\sin n\pi+\sum_{i=1}^{k-1}[f(\xi_i)-f(\xi_{i-1})]\sin nx_i-f(\xi_0)\sin n(-\pi)，
\end{aligned}
$$
其中 $x_i\leq\xi_i\leq x_{i+1}$。令 $\lambda=\max_{0\leq i\leq k-1}|x_{i+1}-x_i|\to 0$，取极限，即得式 (3)。

② 因
$$
\left|\sum_i \sin n\xi_i \Delta f(x_i)\right|\leq\max_{-\pi\leq x\leq\pi}|\sin nx|\cdot\sum_i|f(x_{i+1})-f(x_i)|\leq\max_{-\pi\leq x\leq\pi}|\sin nx|\cdot V_{-\pi}^{\pi}f。
$$
令 $\lambda=\max|x_{i+1}-x_i|\to 0$ 取极限，得
$$
\left|\int_{-\pi}^{\pi}\sin nx\,df(x)\right|\leq\max_{-\pi\leq x\leq\pi}|\sin nx|\cdot V_{-\pi}^{\pi}f。
$$


### ☆ 三、求 Fourier 展开式


#### a. 求 Fourier 展开式的基本方法

> [!tip] 要点
> （1）将 $[a,b]$ 上可积函数展开为 Fourier 级数，最基本的方法是
> 
> i）按系数公式计算系数：
> 
> $$
> a_n = \frac{1}{l} \int_a^b f(x) \cos\frac{n\pi x}{l} dx, \quad n = 0,1,2,\cdots,
> $$
> 
> $$
> b_n = \frac{1}{l} \int_a^b f(x) \sin\frac{n\pi x}{l} dx, \quad n = 1,2,\cdots,
> $$
> 
> 其中 $l = \frac{b-a}{2}$.
> 
> ii）将算出的系数代入级数：
> 
> $$
> f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\frac{n\pi x}{l} + b_n \sin\frac{n\pi x}{l} \right).
> $$
> 
> 若 $f'(x)$ 在 $[a,b]$ 上存在并连续，$f'(x)$ 的 Fourier 系数记为 $a'_n, b'_n$，那么
> 
> $$
> a'_0 = 0, \quad a'_n = \frac{n\pi}{l} b_n \text{（当 } f(a)=f(b) \text{ 时）} (n=1,2,\cdots), \quad b'_n = -\frac{n\pi}{l} a_n (n=1,2,\cdots).
> $$
> 
> iii）根据收敛定理，判定"~"可改为等号的范围。若 $f(x)$ 在 $[a,b]$ 上分段光滑①，则级数的和函数
> 
> $$
> S(x)= \begin{cases} 
> f(x), & \text{当 } x\in(a,b) \text{ 为 } f(x) \text{ 的连续点时，} \\
> \frac{f(x-0)+f(x+0)}{2}, & \text{当 } x\in(a,b) \text{ 为 } f(x) \text{ 的间断点时，} \\
> \frac{1}{2}[f(a+0)+f(b-0)], & \text{当 } x=a,b \text{ 时，} \\
> \text{呈周期}, & \text{其他}.
> \end{cases}
> $$
> 
> 特别，若 $f(x)$ 以 $2l$ 为周期，或只在 $[-l,l]$ 上有定义，则在上面系数公式里应取区间 $[a,b]=[-l,l]$. 此时，若 $f(x)$ 为奇（偶）函数，则 $a_n=0$（$b_n=0$）；此外还不难验证：若 $f(x)$ 为奇（偶）函数且 $(0,l)$ 上 $f(l-x)=f(x)$，则 $a_n=b_{2n}=0$（$b_n=a_{2n+1}=0$）；若 $f(x)$ 为奇（偶）函数且 $(0,l)$ 上 $f(l-x)=-f(x)$，则 $a_n=b_{2n+1}=0$（$b_n=a_{2n}=0$）.
> 
> 值得注意的是，可积函数在指定区间上的 Fourier 展开式是唯一的，而三角展开式是随意的②。将 $f(x)$ 以不同的方式延拓到比 $[a,b]$ 大的区间上，在较大区间上求延拓后的 Fourier 展开式，就可得 $f(x)$ 在 $[a,b]$ 上不同的三角展开式。例如 $[0,l]$ 上给定的函数 $f(x)$，若将 $f(x)$ 奇延拓到 $[-l,0)$ 上，便可获得 $a_n=0$（即只含正弦）的展开式；若将 $f(x)$ 偶延拓到 $[-l,0)$ 上，便可获得 $b_n=0$（即只含余弦项）的展开式。
> 
> （2）由 Fourier 级数的定义及积分的性质易知 Fourier 级数具有可加性：两函数之和的 Fourier 级数等于它们的 Fourier 级数之和（同类项合并）。
> 
> ① 分段光滑意指：可将区间 $[a,b]$ 分成有限段，在每个小区间内部函数有连续的导数，在小区间端点函数 $f$ 与 $f'$ 有单侧极限。
> ② 其系数不要求是此函数在此区间上的 Fourier 系数。
> 
> （3）由 Fourier 级数的定义及正弦、余弦函数系的正交性易知，三角多项式
> 
> $$
> \frac{a_0}{2} + \sum_{k=1}^n (a_k \cos kx + b_k \sin kx)
> $$
> 
> 的 Fourier 级数是它本身。
> 
> （4）若 $f(x)$ 在 $[-\pi,\pi]$ 上正常可积，或有奇点但绝对可积，有如下的 Fourier 级数：
> 
> $$
> f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx),
> $$
> 
> 则不论此级数是否收敛，若收敛，也不管是否收敛于 $f(x)$，恒可逐项积分：
> 
> $$
> \int_0^x \left(f(t)-\frac{a_0}{2}\right)dt = \sum_{n=1}^{\infty} \int_0^x (a_n \cos nt + b_n \sin nt)dt, \quad x\in[-\pi,\pi],
> $$
> 
> 并且此式必是函数 $\varphi(x)=\int_0^x \left(f(t)-\frac{a_0}{2}\right)dt$ 在 $[-\pi,\pi]$ 上的 Fourier 展开式。
> 
> （5）若 $f(x)$ 连续、分段光滑，$f(\pi)=f(-\pi)$，有 Fourier 展开式：
> 
> $$
> f(x)=\frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx), \quad x\in[-\pi,\pi].
> $$
> 
> 则逐项求导之后，便得到 $f'(x)$ 的 Fourier 级数
> 
> $$
> f'(x) \sim \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)'.
> $$
> 
> 若附加 $f'(x)$ 分段光滑的条件，则 $f'$ 的 Fourier 级数收敛于
> 
> $$
> \frac{f'(x+0)+f'(x-0)}{2}, \quad x\in(-\pi,\pi).
> $$
> 
> 若再加上 $f'(x)$ 连续的条件，则得 $f'(x)$ 的 Fourier 展开式：
> 
> $$
> f'(x)=\sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)', \quad x\in(-\pi,\pi).
> $$
> 
> 若 $f'(-\pi)=f'(\pi)$，则此展开式对于 $\pm\pi$ 也成立。

> [!example] ☆ 例 5.4.7
> 设 $f(x)=\pi-x, \quad x\in(0,\pi)$.
> 
> 1）将 $f(x)$ 展开为正弦级数；
> 2）写出和函数的表达式，绘出和函数图形；
> 3）该级数在 $(0,\pi)$ 内是否一致收敛。（厦门大学）

> [!solution]-
> 1）将 $f(x)$ 作奇延拓到 $[-\pi,0]$ 上，求延拓后的函数在 $[-\pi,\pi]$ 上的 Fourier 级数，这时
> 
> $$
> a_n=0 \quad (n=0,1,2,\cdots),
> $$
> 
> $$
> b_n = \frac{2}{\pi} \int_0^{\pi} (\pi-x) \sin nx \, dx = -\frac{2}{n\pi} (\pi-x) \cos nx \Big|_{0}^{\pi} - \frac{2}{n\pi} \int_0^{\pi} \cos nx \, dx = \frac{2}{n}.
> $$
> 
> 因延拓后的函数分段光滑，根据收敛定理，
> 
> $$
> f(x)=\sum_{n=1}^{\infty} \frac{2}{n} \sin nx, \quad \text{当 } x\in(0,\pi) \text{ 时}.
> $$
> 
> 2）级数和函数
> 
> $$
> \sum_{n=1}^{\infty} \frac{2}{n} \sin nx = \begin{cases} 
> \pi-x, & \text{在 } (0,\pi) \text{ 内，} \\
> -\pi+x, & \text{在 } (-\pi,0) \text{ 内，} \\
> 0, & \text{当 } x=0, \pm\pi \text{ 时，} \\
> \text{呈周期}, & \text{在 } [-\pi,\pi] \text{ 外}.
> \end{cases}
> $$
> 
> 其图形如图 5.4.1 所示。
> 
> 图 5.4.1
> 
> 3）该级数在 $(0,\pi)$ 内非一致收敛。因为在区间端点 $x=0,\pi$ 上级数收敛，假若级数在 $(0,\pi)$ 内一致收敛，则级数在 $[0,\pi]$ 上一致收敛，和函数应在 $[0,\pi]$ 上连续，矛盾。

> [!note] 注
> 此例给我们很多启示：
> 
> （1）所得的展开式，也是函数 $f(x)=\pi-x$ 在区间 $(0,2\pi)$ 内的 Fourier 展开式（想想为什么？）：
> 
> $$
> \pi-x = \sum_{n=1}^{\infty} \frac{2}{n} \sin nx, \quad x\in(0,2\pi).
> $$
> 
> （2）级数 $\sum_{n=1}^{\infty} \frac{2}{n} \sin nx$，尽管通项连续，但和函数在 $x=2k\pi$ 处不连续（$k\in\mathbb{Z}$）。
> 
> （3）（根据 Dirichlet 判别法）在（不含点 $x=2k\pi \ (k\in\mathbb{Z})$ 的）任一内闭区间上，此级数一致收敛，且和函数 $f(x)=\pi-x$ 有导数。但是，此级数不能逐项求导，逐项求导后级数 $2\sum_{n=1}^{\infty} \cos nx$ 根本不收敛！

> [!exercise] * 练习
> 设 $f(x)=\sum_{n=1}^{\infty} a_n \cos nx$，$\sum_{n=1}^{\infty} |a_n|$ 收敛。若 $\sum_{n=1}^{\infty} B_n \sin nx$ 是 $f(x)$ 在区间 $[0,\pi]$ 上的正弦级数，试求 $B_n \ (n\in\mathbb{N})$。（华中科技大学）

> [!hint]-
> 参看例 5.4.7。

> [!solution]-
> $$
> B_n = \frac{2}{\pi} \int_0^{\pi} f(x) \sin nx \, dx = \frac{2}{\pi} \int_0^{\pi} \sum_{k=1}^{\infty} a_k \cos kx \sin nx \, dx,
> $$
> 
> 其中 $|a_k \cos kx \sin nx|\leq|a_k| \ (\forall k,n\in\mathbb{N})$. 而 $\sum_{k=1}^{\infty} |a_k|$ 收敛，故级数一致收敛，可逐项积分。于是
> 
> $$
> \begin{aligned}
> B_n &= \frac{2}{\pi} \sum_{k=1}^{\infty} a_k \int_0^{\pi} \cos kx \sin nx \, dx \\
> &= \frac{1}{\pi} \sum_{k=1}^{\infty} a_k \int_0^{\pi} [\sin(n+k)x + \sin(n-k)x] \, dx \\
> &= \frac{1}{\pi} \sum_{k=1}^{\infty} a_k \left[ -\frac{\cos(n+k)x}{n+k} - \frac{\cos(n-k)x}{n-k} \right]_{x=0}^{\pi} \\
> &= \frac{1}{\pi} \sum_{k=1}^{\infty} a_k \left[ \frac{(-1)^{n+k+1}+1}{n+k} + \frac{(-1)^{n-k+1}+1}{n-k} \right],
> \end{aligned}
> $$
> 
> 其中右端方括号里的两个分式的分子：
> 
> $$
> (-1)^{n+k+1}+1 = (-1)^{n-k+1}+1 = 0 \text{（当 } n,k \text{ 奇偶性相同时）},
> $$
> 
> $$
> (-1)^{n+k+1}+1 = (-1)^{n-k+1}+1 = 2 \text{（当 } n,k \text{ 奇偶性相反时）}.
> $$
> 
> 故
> 
> $$
> B_n = \begin{cases} 
> \displaystyle\frac{2}{\pi} \sum_{i=0}^{\infty} a_{2i+1}\left(\frac{1}{n+2i+1}+\frac{1}{n-2i-1}\right) = \frac{4}{\pi} \sum_{i=1}^{\infty} \frac{n}{n^2-(2i+1)^2} a_{2i+1}, & (n \text{ 为偶数}), \\[1em]
> \displaystyle\frac{2}{\pi} \sum_{i=1}^{\infty} a_{2i}\left(\frac{1}{n+2i}+\frac{1}{n-2i}\right) = \frac{4}{\pi} \sum_{i=1}^{\infty} \frac{n}{n^2-4i^2} a_{2i}, & (n \text{ 为奇数}).
> \end{cases}
> $$
> 
> 为了计算简便，有时可以更换区间求展开式。

> [!example] ☆ 例 5.4.8
> 试将
> 
> $$
> f(x) = \begin{cases} 
> 1-x, & 0\leq x\leq 2, \\
> x-3, & 2<x\leq 4
> \end{cases}
> $$
> 
> 在 $[0,4]$ 上展开为余弦级数，并证明：$\sum_{n=0}^{\infty} \frac{1}{(2n+1)^2} = \frac{\pi^2}{8}$.

> [!solution]-
> 将 $f(x)$ 作偶延拓到 $[-4,0]$ 上，从图 5.4.2 易知，求延拓后函数的 Fourier 级数，最小周期实为 4. 因此我们只要在 $[-2,2]$ 上求展开式即可。这时
> 
> $$
> b_n=0 \quad (n=1,2,\cdots),
> $$
> 
> $$
> a_0 = \frac{2}{2} \int_0^{2} (1-x) \, dx = 0,
> $$
> 
> $$
> a_n = \frac{2}{2} \int_0^{2} (1-x) \cos\frac{n\pi x}{2} \, dx = -\frac{4}{n^2\pi^2}[(-1)^n - 1] = \begin{cases} 
> 0, & n \text{ 为偶数}, \\
> \frac{8}{n^2\pi^2}, & n \text{ 为奇数}.
> \end{cases}
> $$
> 
> 故
> 
> $$
> f(x)=\frac{8}{\pi^2} \sum_{n=0}^{\infty} \frac{1}{(2n+1)^2} \cos\frac{(2n+1)\pi x}{2}, \quad x\in[0,4].
> $$
> 
> 在此式里令 $x=0$，即得
> 
> $$
> \sum_{n=0}^{\infty} \frac{1}{(2n+1)^2} = \frac{\pi^2}{8}.
> $$

> [!example] ☆ 例 5.4.9
> 求 $f(x)=\begin{cases} x, & 0\leq x<1, \\ 2-x, & 1\leq x\leq 2 \end{cases}$ 在 $[0,2]$ 上的 Fourier 展开式。

> [!hint]-
> 求 $|x|$ 在 $(-1,1)$ 内的 Fourier 级数。

> [!example] ☆ 例 5.4.10
> 求 $f(x)=\begin{cases} 0, & -\pi\leq x\leq 0, \\ \sin x, & 0<x\leq \pi \end{cases}$ 在 $[-\pi,\pi]$ 上的 Fourier 展开式。

> [!solution]-
> 将 $f(x)$ 改写成
> 
> $$
> f(x) = \frac{\sin x + |\sin x|}{2}.
> $$
> 
> $\frac{1}{2}|\sin x|$ 为偶函数，且在 $[0,\pi]$ 上满足 $f(\pi-x)=f(x)$，因此
> 
> $$
> \frac{1}{2}|\sin x| = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_{2n} \cos 2nx,
> $$
> 
> 其中
> 
> $$
> a_{2n} = \frac{4}{\pi} \int_0^{\pi/2} \frac{1}{2} \sin x \cos 2nx \, dx = -\frac{2}{(4n^2-1)\pi}.
> $$
> 
> 所以
> 
> $$
> f(x) = \frac{\sin x}{2} + \frac{1}{\pi} + \frac{2}{\pi} \sum_{n=1}^{\infty} \frac{\cos 2nx}{1-4n^2} \quad (0<|x|<\pi).
> $$

> [!example] ☆ 例 5.4.11
> 1）将周期为 $2\pi$ 的函数 $f(x)=\frac{1}{4}x(2\pi-x), \ x\in[0,2\pi]$ 展开为 Fourier 级数，并由此求出 $\sum_{n=1}^{\infty} \frac{1}{n^2}$;
> 
> 2）通过 Fourier 级数的逐项积分求出 $\sum_{n=1}^{\infty} \frac{1}{n^4}$。（复旦大学）

> [!solution]-
> 1）
> $$
> a_0 = \frac{1}{\pi} \int_0^{2\pi} \frac{1}{4} x(2\pi-x) \, dx = \frac{1}{3}\pi^2,
> $$
> 
> $$
> a_n = \frac{1}{\pi} \int_0^{2\pi} \frac{1}{4} x(2\pi-x) \cos nx \, dx = -\frac{1}{n^2},
> $$
> 
> $$
> b_n = \frac{1}{\pi} \int_0^{2\pi} \frac{1}{4} x(2\pi-x) \sin nx \, dx = 0 \quad (n=1,2,\cdots),
> $$
> 
> 且 $f(x)=\frac{1}{4}x(2\pi-x)$ 在 $[0,2\pi]$ 上处处可导，$f(0+0)=f(2\pi-0)$，根据收敛定理，有
> 
> $$
> \frac{1}{4}x(2\pi-x) = \frac{1}{6}\pi^2 - \sum_{n=1}^{\infty} \frac{1}{n^2} \cos nx \quad (x\in[0,2\pi]). \tag{1}
> $$
> 
> 令 $x=0$，可得
> 
> $$
> \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}. \text{（此结果多次被用到。）}
> $$
> 
> 2）将 (1) 中常数项移至左端，根据 Fourier 级数逐项积分的定理，有
> 
> $$
> \int_0^x \left[\frac{1}{4} t(2\pi-t) - \frac{1}{6}\pi^2\right] dt = -\sum_{n=1}^{\infty} \frac{1}{n^2} \int_0^x \cos nt \, dt,
> $$
> 
> 即
> 
> $$
> \frac{1}{6}\pi^2 x - \frac{1}{4}\pi x^2 + \frac{x^3}{12} = \sum_{n=1}^{\infty} \frac{1}{n^3} \sin nx.
> $$
> 
> 此式为左端函数的 Fourier 展开式。
> 
> 同理继续逐项积分两次，得
> 
> $$
> -\frac{1}{36}\pi^2 x^3 + \frac{1}{48}\pi x^4 - \frac{x^5}{240} = \sum_{n=1}^{\infty} \frac{1}{n^4} \left(\frac{\sin nx}{n} - x\right), \quad x\in[0,2\pi].
> $$
> 
> 令 $x=2\pi$，可得
> 
> $$
> \sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{1}{90}\pi^4.
> $$

> [!theorem] 例 5.4.12
> 设 $f(x)$ 是以 $2\pi$ 为周期的连续偶函数，它的 Fourier 级数为 $f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos nx$. 求证：
> 
> 1）函数 $H(x)=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x+t)f(t)dt$ 是以 $2\pi$ 为周期的连续偶函数，它的 Fourier 级数是
> $H(x)\sim \frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx$；
> 
> 2）$\frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx$ 一致收敛于 $H(x)$.（同济大学）

> [!proof]-
> 1）$\forall x_0\in(-\infty,+\infty)$，$f(x+t)f(t)$ 作为二元函数在 $x_0-1\leq x\leq x_0+1$，$-\pi\leq t\leq\pi$ 上连续，所以 $H(x)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)f(t)dt$ 在 $x_0$ 处连续，即 $H(x)$ 在 $(-\infty,+\infty)$ 内处处连续。又因
> 
> $$
> H(-x)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(-x+t)f(t)dt \overset{-x+t=u}{=}\frac{1}{\pi}\int_{-x-\pi}^{-x+\pi}f(u)f(u+x)du =\frac{1}{\pi}\int_{-\pi}^{\pi}f(u+x)f(u)du=H(x) \ (\forall x\in\mathbb{R}),
> $$
> 
> 所以 $H(x)$ 为偶函数。用 $a'_n$，$b'_n$ 表示 $H(x)$ 的 Fourier 系数，则
> 
> $$
> b'_n=0(n=1,2,\cdots)，a'_0=\frac{1}{\pi}\int_{-\pi}^{\pi}H(x)dx =\frac{1}{\pi}\int_{-\pi}^{\pi}\left(\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)f(t)dt\right)dx.
> $$
> 
> 因 $f(x+t)f(t)$ 作为二元函数，在 $-\pi\leq x\leq\pi$，$-\pi\leq t\leq\pi$ 上连续，积分可以交换次序。因此令 $u=x+t$，则
> 
> $$
> \frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)dx =\frac{1}{\pi}\int_{-\pi+t}^{\pi+t}f(u)du =\frac{1}{\pi}\int_{-\pi}^{\pi}f(u)du=a_0，
> $$
> 
> 于是
> 
> $$
> a'_0=\frac{1}{\pi}\int_{-\pi}^{\pi}a_0f(t)dt =a_0\cdot\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)dt=a_0^2，
> $$
> 
> $$
> \begin{aligned}
> a'_n&=\frac{1}{\pi}\int_{-\pi}^{\pi}H(x)\cos nx \, dx =\frac{1}{\pi}\int_{-\pi}^{\pi}\left(\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)f(t)dt\right)\cos nx \, dx\\
> &=\frac{1}{\pi}\int_{-\pi}^{\pi}\left(\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)\cos nx \, dx\right)f(t)dt.
> \end{aligned}
> $$
> 
> 令 $x+t=u$，则
> 
> $$
> \frac{1}{\pi}\int_{-\pi}^{\pi}f(x+t)\cos nx \, dx =\frac{1}{\pi}\int_{-\pi+t}^{\pi+t}f(u)\cos n(u-t)du
> $$
> 
> $$
> =\left(\frac{1}{\pi}\int_{-\pi}^{\pi}f(u)\cos nu \, du\right)\cos nt+ \left(\frac{1}{\pi}\int_{-\pi}^{\pi}f(u)\sin nu \, du\right)\sin nt=a_n\cos nt.
> $$
> 
> 于是
> 
> $$
> a'_n=\frac{1}{\pi}\int_{-\pi}^{\pi}a_nf(t)\cos nt \, dt=a_n^2 \ (n=1,2,\cdots).
> $$
> 
> 故
> 
> $$
> H(x)\sim \frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx.
> $$
> 
> 2）因 $f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos nx$，由 Bessel 不等式（见例 5.4.20 之注）知 $\frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2$ 收敛，于是由 $|a_n^2\cos nx|\leq a_n^2$，$\forall x\in\mathbb{R}$ 知级数 $\frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx$ 在 $(-\infty,+\infty)$ 内一致收敛。记和函数为 $S(x)$，如此 $S(x)$ 连续，且 $S(x)=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx$ 是 $S(x)$ 的 Fourier 级数。即 $H(x)$，$S(x)$ 两连续函数有相同的 Fourier 级数，因此 $H(x)\equiv S(x)$，即
> 
> $$
> \frac{a_0^2}{2}+\sum_{n=1}^{\infty}a_n^2\cos nx \xrightarrow{\text{一致收敛}} H(x).
> $$


#### b. 求 Fourier 展开式的一些其他方法

> [!example] ☆例 5.4.13
> 已知 $f(x)=x$ 在 $(-\pi,\pi)$ 上的 Fourier 展开式为
> $$
> x=\sum_{n=1}^{\infty}\frac{2(-1)^{n-1}}{n}\sin nx，|x|<\pi.  （1）
> $$
> 试求函数 $\phi(x)=x\sin x$ 在 $[-\pi,\pi]$ 上的 Fourier 展开式.

> [!solution]-
> 利用三角公式，由（1）得
> $$
> \begin{aligned}
> x\sin x&=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}2\sin nx\sin x \\
> &=1-\frac{\cos x}{2}+2\sum_{n=2}^{\infty}\frac{(-1)^{n-1}}{n^2-1}\cos nx（|x|<\pi）.
> \end{aligned}
> $$
> 因所得级数当 $|x|<\pi$ 时一致收敛，故为 Fourier 展开式。又因 $x\sin x\big|_{-\pi}^{\pi}=0$，所以展开式在 $x=\pm\pi$ 时亦成立。

值得注意的是：上例使用的方法，具有普遍性。我们有

> [!theorem] 例 5.4.14
> 设 $f(x)$ 有如下的 Fourier 级数：
> $$
> f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos nx+b_n\sin nx.
> $$
> 试证：将级数逐项乘以 $\sin x$，可得 $f(x)\sin x$ 的 Fourier 级数：
> $$
> f(x)\sin x\sim \frac{b_1}{2}+\sum_{n=1}^{\infty}\left(\frac{b_{n+1}-b_{n-1}}{2}\cos nx+\frac{a_{n-1}-a_{n+1}}{2}\sin nx\right).
> $$

> [!proof]-
> 逐项乘 $\sin x$ 之后，利用三角公式可得
> $$
> \begin{aligned}
> &\frac{a_0}{2}\sin x+\sum_{n=1}^{\infty}a_n\frac{1}{2}[\sin(n+1)x-\sin(n-1)x] \\
> &+\sum_{n=1}^{\infty}b_n\frac{1}{2}[\cos(n-1)x-\cos(n+1)x] \\
> &=\frac{a_0}{2}\sin x+\frac{1}{2}\sum_{n=2}^{\infty}a_{n-1}\sin nx-\frac{1}{2}\sum_{n=1}^{\infty}a_{n+1}\sin nx \\
> &\quad-\frac{1}{2}\sum_{n=2}^{\infty}b_{n-1}\cos nx+\frac{1}{2}\sum_{n=1}^{\infty}b_{n+1}\cos nx+\frac{b_1}{2}（记 b_0=0）\\
> &=\frac{1}{2}b_1+\sum_{n=1}^{\infty}\left(\frac{b_{n+1}-b_{n-1}}{2}\cos nx+\frac{a_{n-1}-a_{n+1}}{2}\sin nx\right).
> \end{aligned}
> $$
> 此级数实为 $f(x)\sin x$ 在 $[-\pi,\pi]$ 上的 Fourier 级数。
> 
> 因为若用 $\alpha_n$，$\beta_n$ 表示 $f(x)\sin x$ 的 Fourier 系数，则
> $$
> \alpha_0=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin x dx=b_1，
> $$
> $$
> \begin{aligned}
> \alpha_n&=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin x\cos nx dx \\
> &=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)\sin(n+1)x dx-\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)\sin(n-1)x dx \\
> &=\frac{1}{2}(b_{n+1}-b_{n-1})，n=1,2,\cdots，
> \end{aligned}
> $$
> 同理
> $$
> \beta_n=\frac{1}{2}(a_{n-1}-a_{n+1})，n=1,2,\cdots.
> $$

> [!example] 例 5.4.15
> 求函数
> $$
> f(x)\equiv\sum_{n=1}^{\infty}\beta^n\frac{\sin nx}{\sin x}  （1）
> $$
> 的 Fourier 展开式（$|\beta|<1$）.

> [!solution]- 解 I
> 因 $0<|x|\le\frac{\pi}{2}$ 时，$\left|\beta^n\frac{\sin nx}{\sin x}\right|\le|\beta|^n\frac{2n}{\pi}$，且由比式判别法知 $\sum_{n=1}^{\infty}|\beta|^n\frac{2n}{\pi}$ 收敛，故级数（1）在 $[-\frac{\pi}{2},\frac{\pi}{2}]\backslash\{0\}$ 上一致收敛，从而 $f(x)$ 在其上连续，在 $x=0$ 处为可去间断。
> 
> 类似可知，$f(x)$ 除在 $x=k\pi(k=0,\pm1,\pm2,\cdots)$ 处可去间断之外，其余处处连续，$f(x)$ 在 $[-\pi,\pi]$ 上可积，由式（1），
> $$
> f(x)\sin x=\sum_{n=1}^{\infty}\beta^n\sin nx.  （2）
> $$
> 显然，级数（2）在 $(-\infty,+\infty)$ 上一致收敛。以 $a_n$，$b_n$ 表示 $f(x)$ 的 Fourier 系数，利用上例结果，有 $\frac{1}{2}b_1=0$，$\frac{1}{2}(b_{n+1}-b_{n-1})=0$，从而可知 $b_n=0$（$n=1,2,\cdots$）。又
> $$
> \frac{1}{2}(a_{n-1}-a_{n+1})=\beta^n  （3）
> $$
> （这是 $\{a_n\}$ 中间隔一项的递推关系，因此下面只要求出 $a_0$，便可依次求出 $a_2,a_4,\cdots,a_{2m},\cdots$，若求出了 $a_1$，便可求出 $a_3,a_5,\cdots,a_{2m+1},\cdots$），从而 $a_{2n-2}-a_{2n}=2\beta^{2n-1}$，于是
> $$
> a_0=\sum_{n=1}^{\infty}(a_{2n-2}-a_{2n})=2\sum_{n=1}^{\infty}\beta^{2n-1}=\frac{2\beta}{1-\beta^2}.  （4）
> $$
> 同理，由 $a_{2n-1}-a_{2n+1}=2\beta^{2n}$ 得
> $$
> a_1=\frac{2\beta^2}{1-\beta^2}.  （5）
> $$
> 由式（3），（4），（5）可得 $a_n=\frac{2\beta^{n+1}}{1-\beta^2}$，$n=0,1,2,\cdots$。故
> $$
> f(x)\sim \frac{\beta}{1-\beta^2}+\frac{2\beta}{1-\beta^2}\sum_{n=1}^{\infty}\beta^n\cos nx（-\infty<x<+\infty）.
> $$
> 上面级数一致收敛，故为 $f(x)$ 的 Fourier 展开式，"~"可改写成"="。

> [!solution]- 解 II
> （复数解法）若 $z$ 为复数，令 $\operatorname{Im} z$ 表示 $z$ 的虚部。于是
> $$
> \begin{aligned}
> f(x)&=\frac{1}{\sin x}\sum_{n=1}^{\infty}\beta^n\sin nx \\
> &=\frac{1}{\sin x}\operatorname{Im}\left[\sum_{n=1}^{\infty}(\beta e^{ix})^n\right] \\
> &=\frac{1}{\sin x}\operatorname{Im}\left(\frac{\beta e^{ix}}{1-\beta e^{ix}}\right) \\
> &=\frac{\beta}{\sin x}\frac{\operatorname{Im}[e^{ix}(1-\beta e^{-ix})]}{(1-\beta e^{ix})(1-\beta e^{-ix})} \\
> &=\frac{\beta}{(1-\beta e^{ix})(1-\beta e^{-ix})} \\
> &=\frac{1-\beta e^{ix}+1-\beta e^{-ix}-(1-\beta e^{ix}-\beta e^{-ix}+\beta^2)}{(1-\beta e^{ix})(1-\beta e^{-ix})}\cdot\frac{\beta}{1-\beta^2} \\
> &=\frac{\beta}{1-\beta^2}\left(\frac{1}{1-\beta e^{-ix}}+\frac{1}{1-\beta e^{ix}}-1\right) \\
> &=\frac{\beta}{1-\beta^2}\left[\sum_{n=0}^{\infty}\beta^n(e^{-inx}+e^{inx})-1\right] \\
> &=\frac{\beta}{1-\beta^2}+\frac{2\beta}{1-\beta^2}\sum_{n=1}^{\infty}\beta^n\cos nx.
> \end{aligned}
> $$
> 因上面级数在 $[-\pi,\pi]$ 上一致收敛，故为 Fourier 展开式。

> [!remark] 注
> 本题如直接用系数公式计算积分，也可以做出，但十分麻烦。

> [!example] 例 5.4.16
> 求 $f(x)\equiv\frac{q\sin x}{1-2q\cos x+q^2}$（$|q|<1$）的 Fourier 展开式.

> [!solution]-
> （复数解法）令 $z=e^{ix}$, $\bar z=e^{-ix}$，则
> $$
> \sin x=\frac{1}{2i}(z-\bar z)，\cos x=\frac{1}{2}(z+\bar z).
> $$
> 于是
> $$
> \begin{aligned}
> f(x)&=\frac{1}{2i}\left(\frac{1}{1-qz}-\frac{1}{1-q\bar z}\right) \\
> &=\frac{1}{2i}\left[\sum_{n=0}^{\infty}(qz)^n-\sum_{n=0}^{\infty}(q\bar z)^n\right] \\
> &=\sum_{n=0}^{\infty}\frac{z^n-\bar z^n}{2i}\cdot q^n \\
> &=\sum_{n=0}^{\infty}q^n\sin nx（-\infty<x<+\infty）.
> \end{aligned}
> $$

> [!example] 例 5.4.17
> 求 $f(x)=\ln(1-2q\cos x+q^2)$（$|q|<1$）的 Fourier 展开式，并计算积分
> $$
> \int_0^\pi \ln(1-2\alpha\cos x+\alpha^2)dx（-\infty<\alpha<+\infty）.
> $$

> [!hint]-
> 可用复数解法，或先求 $f'(x)$ 的 Fourier 级数（利用上题结果），然后逐项积分。最后，
> $$
> \int_0^\pi \ln(1-2\alpha\cos x+\alpha^2)dx=
> \begin{cases}
> 0, & |\alpha|\le1,\\
> 2\pi\ln|\alpha|, & |\alpha|>1.
> \end{cases}
> $$


### 四、综合性问题

**例 5.4.18** 设 $f(x)$ 在 $[a,b]$ 上可积，试用 Fourier 展开式证明：

$$
\lim_{n\to\infty}\int_a^b f(x)|\sin nx|\,dx=\frac{2}{\pi}\int_a^b f(x)\,dx.
$$

> [!tip] 方法
> 先将 $|\sin nx|$ 展开成（一致收敛的）Fourier 级数，逐项乘 $f(x)$，再逐项积分，逐项取极限。利用一般书中的 Riemann 引理[^1]，便知极限为 $\frac{2}{\pi}\int_a^b f(x)\,dx$。

> [!proof]- 证
> **1°** $|\sin x|$ 有一致收敛的 Fourier 展开式：
>
> $$
> |\sin x|=\frac{2}{\pi}-\frac{4}{\pi}\sum_{k=1}^{\infty}\frac{\cos 2kx}{(2k)^2-1},\quad x\in(-\infty,+\infty).
> $$
>
> 因此
>
> $$
> |\sin nx|=\frac{2}{\pi}-\frac{4}{\pi}\sum_{k=1}^{\infty}\frac{\cos 2knx}{(2k)^2-1},\quad x\in[-\pi,\pi]. \tag{1}
> $$
>
> **2°** 用有界函数遍乘一致收敛级数的各项，所得级数仍一致收敛。故
>
> $$
> f(x)|\sin nx|=\frac{2}{\pi}f(x)-\frac{4}{\pi}\sum_{k=1}^{\infty}\frac{f(x)\cos 2knx}{4k^2-1},\quad x\in[-\pi,\pi]
> $$
>
> 一致收敛，可逐项积分：
>
> $$
> \int_a^b f(x)|\sin nx|\,dx=\frac{2}{\pi}\int_a^b f(x)\,dx-\frac{4}{\pi}\sum_{k=1}^{\infty}\int_a^b\frac{f(x)\cos 2knx}{4k^2-1}\,dx. \tag{2}
> $$
>
> **3°** 设 $|f(x)|\le M$（$\forall x\in[a,b]$），级数（2）的通项
>
> $$
> \left|\int_a^b\frac{f(x)\cos 2knx}{4k^2-1}\,dx\right|\le\frac{M\cdot(b-a)}{4k^2-1},
> $$
>
> 且 $\sum_{k=1}^{\infty}\frac{M(b-a)}{4k^2-1}$ 收敛，因而级数（2）一致收敛（关于 $n$）。
>
> **4°** 在级数（2）中，令 $n\to\infty$，逐项取极限，并利用 Riemann 引理，得
>
> $$
> \begin{aligned}
> \lim_{n\to\infty}\int_a^b f(x)|\sin nx|\,dx
> &=\frac{2}{\pi}\int_a^b f(x)\,dx-\frac{4}{\pi}\sum_{k=1}^{\infty}\lim_{n\to\infty}\frac{\int_a^b f(x)\cos 2knx\,dx}{4k^2-1} \\
> &=\frac{2}{\pi}\int_a^b f(x)\,dx.
> \end{aligned}
> $$

> [!note] 注
> 请跟例 4.1.9 及例 4.1.10 进行比较。

由 Fourier 展开式可得到别的展开式。如

**例 5.4.19** 已知 $f(x)=\cos\alpha x$（$\alpha\neq$ 整数）在 $(-\pi,\pi)$ 内的 Fourier 展开式为

$$
\cos\alpha x=\frac{2}{\pi}\sin\alpha\pi\left[\frac{1}{2\alpha}+\sum_{n=1}^{\infty}(-1)^n\frac{\alpha\cos nx}{\alpha^2-n^2}\right] \tag{1}
$$

试证下列展开式成立：

$$
\frac{1}{\sin x}=\frac{1}{x}+\sum_{n=1}^{\infty}(-1)^n\frac{2x}{x^2-n^2\pi^2}, \tag{2}
$$

$$
\cot x = \frac{1}{x} + \sum_{n=1}^{\infty} \left( \frac{1}{x - n\pi} + \frac{1}{x + n\pi} \right), \tag{3}
$$

$$
\tan x = -\sum_{n=1}^{\infty} \left( \frac{1}{x - \frac{2n+1}{2}\pi} + \frac{1}{x + \frac{2n-1}{2}\pi} \right) - \frac{2}{2x - \pi}. \tag{4}
$$

> [!solution]- 解
> 将式 (1) 改写成
>
> $$
> \frac{\pi}{2}\,\frac{\cos \alpha x}{\sin \alpha\pi}
> = \frac{1}{2\alpha} + \sum_{n=1}^\infty (-1)^n \frac{\alpha\cos nx}{\alpha^2-n^2},
> $$
>
> 令 $x=0$，再把 $\alpha\pi$ 改写成 $x$，即可得式 (2).
>
> 在式 (2) 中令 $x=\pi$，再将 $\alpha\pi$ 改写成 $x$，便可得式 (3). 最后，利用
> $\displaystyle\tan x=-\cot\left(x-\frac{\pi}{2}\right)$
> 可得式 (4). 解毕.

下例表明，在均方意义下，采用 Fourier 系数，可使三角多项式逼近达到最佳.

**☆例 5.4.20** 假设函数 $f(x)$ 在闭区间 $[-\pi,\pi]$ 上可积，$T_n(x)$ 为三角多项式：

$$
T_n(x)=\frac{\alpha_0}{2}+\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx),
$$

试求系数 $\alpha_k,\beta_k$ 使均方误差

$$
\delta_n \equiv \frac{1}{2\pi}\int_{-\pi}^{\pi}|f(x)-T_n(x)|^2\,dx
$$

最小.（中山大学，中国人民大学）

> [!solution]- 解
> 将式 (1) 代入 (2)，乘开并利用三角函数的正交性，可得
>
> $$
> \begin{aligned}
> 0\le \delta_n&=\frac{1}{2\pi}\int_{-\pi}^{\pi}|f(x)-T_n(x)|^2\,dx \\
> &=\frac{1}{2\pi}\int_{-\pi}^{\pi}\left[f(x)-\frac{\alpha_0}{2}-\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx)\right]^2dx \\
> &=\frac{1}{2\pi}\int_{-\pi}^{\pi}f^2(x)\,dx-\frac12\left[\frac{\alpha_0^2}{2}+\sum_{k=1}^n(\alpha_k^2+\beta_k^2)\right] \\
> &\qquad +\frac12\left[\frac12(\alpha_0-a_0)^2+\sum_{k=1}^n(\alpha_k-a_k)^2+(\beta_k-b_k)^2\right],
> \end{aligned}
> $$
>
> 其中 $a_k,b_k$ 是 $f$ 的 Fourier 系数. 可见当 $\alpha_k=a_k$（$k=0,1,2,\cdots$），$\beta_k=b_k$（$k=1,2,\cdots$）时 $\delta_n$ 最小，此时
>
> $$
> \delta_n=\hat\delta_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}f^2(x)\,dx-\frac12\left[\frac{a_0^2}{2}+\sum_{k=1}^n(a_k^2+b_k^2)\right].
> $$

> [!note] 注
> 根据 $\delta_n$ 的定义式 (2)，恒有 $\delta_n\ge 0$. 因此利用本例的结果，我们实际也证明了：若 $f(x)$ 在 $[-\pi,\pi]$ 上可积，则 Bessel 不等式
>
> $$
> \frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,dx\ge \frac{a_0^2}{2}+\sum_{n=1}^\infty(a_n^2+b_n^2)
> $$
>
> 成立，其中 $a_n,b_n$ 是 $f(x)$ 在 $[-\pi,\pi]$ 上的 Fourier 系数. 另外式 (3) 表明当采用 Fourier 系数时，$\delta_n=\hat\delta_n\searrow$（当 $n$ 增大时），利用这一点，容易证明新的结论.

**例 5.4.21** 设 $f(x)$ 在 $[-\pi,\pi]$ 上连续，则有 Parseval 等式成立（用 $a_n,b_n$ 表示 $f(x)$ 在 $[-\pi,\pi]$ 上的 Fourier 系数）：

$$
\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,dx=\frac{a_0^2}{2}+\sum_{n=1}^\infty(a_n^2+b_n^2).
$$

> [!proof]- 证
> 根据 Weierstrass 逼近定理，$\forall\varepsilon>0$，存在三角多项式 $T_N(x)$，使得
>
> $$
> |f(x)-T_N(x)|<\varepsilon^{1/2}\quad (\forall x\in[-\pi,\pi]).
> $$
>
> 从而
>
> $$
> \delta_N=\frac{1}{2\pi}\int_{-\pi}^{\pi}|f(x)-T_N(x)|^2\,dx<\varepsilon.
> $$
>
> 根据上例，$T_N(x)$ 的系数采用 Fourier 系数时，$\delta_N$ 达到最小，且这时的 $\delta_N=\hat\delta_N$. 取上例式 (3) 的形式，当 $n$ 增大时，$\hat\delta_n\searrow$. 故 $n\ge N$ 时，有
>
> $$
> 0\le \frac{1}{2\pi}\int_{-\pi}^{\pi}f^2(x)\,dx-\frac12\left[\frac{a_0^2}{2}+\sum_{k=1}^n(a_k^2+b_k^2)\right]<\varepsilon.
> $$
>
> 式 (1) 获证.

> [!note] 注
> 可以证明，只要 $f(x)$ 在 $[-\pi,\pi]$ 上正常可积，或者 $[-\pi,\pi]$ 上有奇点，但 $f(x)$ 平方可积，则 Parseval 等式仍保持成立.

下面讨论 Parseval 等式的若干应用.

**例 5.4.22** 试利用 Parseval 等式证明：

1）若 $f$ 与 $g$ 在 $[-\pi,\pi]$ 上符合 Parseval 等式的条件，它们的 Fourier 系数分别为 $a_n,b_n$ 与 $\alpha_n,\beta_n$，试证：

$$
\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)g(x)\,dx=\frac{a_0\alpha_0}{2}+\sum_{n=1}^\infty(a_n\alpha_n+b_n\beta_n).
$$

2）就 $[-\pi,\pi]$ 上全体连续函数而言，三角函数系

$$
\{1,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}
$$

为完全的. 即：$[-\pi,\pi]$ 上任意连续函数 $f(x)$，若与三角函数系的每个元正交，则 $f(x)=0$ 于 $[-\pi,\pi]$ 上.

> [!proof]- 证
> 1）写出 $f(x)+g(x)$ 与 $f(x)-g(x)$ 的 Parseval 等式，相减即得.
>
> 2）由已知条件可知 $a_n=b_n=0$，从而利用 Parseval 等式，知 $\int_{-\pi}^{\pi}f^2(x)\,dx=0$. 因 $f(x)$ 连续，故 $f(x)\equiv 0$.

**例 5.4.23** 设函数 $f(x)$ 在区间 $[0,2\pi]$ 上可积，$\varphi(x)$ 在 $[0,2\pi]$ 上连续，且在 $(0,2\pi)$ 内可展开为它的 Fourier 级数：

$$
\varphi(x)=\frac{a_0}{2}+\sum_{k=1}^\infty(a_k\cos kx+b_k\sin kx),\quad x\in(0,2\pi).
$$

试证：

$$
f(x)\varphi(x)=\frac{a_0}{2}f(x)+\sum_{k=1}^\infty(a_k f(x)\cos kx+b_k f(x)\sin kx)
$$

可在 $[0,2\pi]$ 上逐项积分.

> [!tip] 分析
> 要证明
>
> $$
> \int_0^{2\pi}f(x)\varphi(x)\,dx=\int_0^{2\pi}\frac{a_0}{2}f(x)\,dx+\sum_{k=1}^\infty\int_0^{2\pi}(a_k f(x)\cos kx+b_k f(x)\sin kx)\,dx,
> $$
>
> 即要证明：
>
> $$
> \int_0^{2\pi}f(x)\varphi(x)\,dx-\int_0^{2\pi}\frac{a_0}{2}f(x)\,dx-\sum_{k=1}^n\int_0^{2\pi}(a_k f(x)\cos kx+b_k f(x)\sin kx)\,dx\to 0\quad (n\to\infty).
> $$
>
> 记
>
> $$
> S_n(x)\equiv \frac{a_0}{2}+\sum_{k=1}^n(a_k\cos kx+b_k\sin kx),
> $$
>
> 即要证明
>
> $$
> \int_0^{2\pi}f(x)(\varphi(x)-S_n(x))\,dx\to 0\quad (n\to\infty).
> $$
>
> 根据 Cauchy 不等式，
>
> $$
> \left|\int_0^{2\pi}f(x)(\varphi(x)-S_n(x))\,dx\right|
> \le \left[\int_0^{2\pi}f^2(x)\,dx\cdot\int_0^{2\pi}(\varphi(x)-S_n(x))^2\,dx\right]^{1/2}.
> $$
>
> 由此式可知，问题进一步归结为证明：
>
> $$
> \int_0^{2\pi}(\varphi(x)-S_n(x))^2\,dx\to 0\quad (n\to\infty).
> $$
>
> 用 Fourier 系数公式，不难验证有
>
> $$
> \frac{1}{2\pi}\int_0^{2\pi}|\varphi(x)-S_n(x)|^2\,dx
> =\frac{1}{2\pi}\int_0^{2\pi}\varphi^2(x)\,dx-\frac12\left[\frac{a_0^2}{2}+\sum_{k=1}^n(a_k^2+b_k^2)\right].
> $$
>
> 由于 $\varphi(x)$ 连续，根据 Parseval 等式，上式右端当 $n\to\infty$ 时趋于零，问题获证.

> [!note] 注
> 这里我们看到，若 $\varphi(x)$ 连续，则
>
> $$
> \frac{1}{2\pi}\int_0^{2\pi}(\varphi(x)-S_n(x))^2\,dx\to 0\quad (n\to\infty),
> $$
>
> 即 $S_n(x)$ 在平方平均意义下收敛于 $\varphi(x)$.

**☆例 5.4.24** 设函数 $f(x)$ 在区间 $[0,2\pi]$ 上可积，证明：

$$
\frac{1}{2\pi}\int_0^{2\pi}f(x)(\pi-x)\,dx=\sum_{n=1}^\infty\frac{b_n}{n},
$$

其中 $\displaystyle b_n=\frac{1}{\pi}\int_0^{2\pi}f(x)\sin nx\,dx\quad (n=1,2,\cdots)$.（南京航空学院）

> [!proof]- 证Ⅰ
> $\varphi(x)=\pi-x$ 在 $[0,2\pi]$ 上连续可微，按收敛定理可得 Fourier 展开式：
>
> $$
> \pi-x=\sum_{n=1}^\infty \frac{2}{n}\sin nx,\quad x\in(0,2\pi).
> $$
>
> 根据上题，可在 $[0,2\pi]$ 上对 $f(x)(\pi-x)=\sum_{n=1}^\infty \frac{2}{n}f(x)\sin nx$ 逐项积分. 于是式 (1) 获证.

> [!proof]- 证Ⅱ
> 用 $a_n,b_n$; $\alpha_n,\beta_n$ 分别表示两个可积函数 $f(x)$, $\varphi(x)$ 的 Fourier 系数，则已知关系（例 5.4.22）：
>
> $$
> \frac{1}{\pi}\int_0^{2\pi}f(x)\varphi(x)\,dx=\frac{a_0\alpha_0}{2}+\sum_{n=1}^\infty(a_n\alpha_n+b_n\beta_n).
> $$
>
> 令 $\varphi(x)=\pi-x$，可得 $\alpha_n=0$, $\beta_n=\frac{2}{n}$，这便得到式 (1).

**例 5.4.25** 设 $f(x)$ 是以 $2\pi$ 为周期的连续函数，

$$
V_n(x)\equiv \frac{(2n)!!}{2\pi(2n-1)!!}\int_{-\pi}^{\pi}f(t)\cos^{2n}\frac{t-x}{2}\,dt,
$$

证明：$V_n(x)\rightrightarrows f(x)$（当 $n\to\infty$ 时）于 $[-\pi,\pi]$ 上.

> [!tip] 方法
> 与收敛定理的证法类似.

> [!proof]- 证
> 令 $t-x=u$，则
>
> $$
> \begin{aligned}
> V_n(x)&=\frac{(2n)!!}{2\pi(2n-1)!!}\int_{-\pi-x}^{\pi-x}f(x+u)\cos^{2n}\frac{u}{2}\,du \\
> &=\frac{(2n)!!}{2\pi(2n-1)!!}\int_{-\pi}^{\pi}f(x+u)\cos^{2n}\frac{u}{2}\,du \\
> &=\frac{(2n)!!}{2\pi(2n-1)!!}\int_0^{\pi}[f(x+u)+f(x-u)]\cos^{2n}\frac{u}{2}\,du.
> \end{aligned}
> $$
>
> 利用 Wallis 公式或分部积分可得
>
> $$
> \int_0^{\pi}\cos^{2n}\frac{x}{2}\,dx=\frac{(2n-1)!!}{(2n)!!}\pi.
> $$
>
> 因此有单位分解：
>
> $$
> 1=\frac{(2n)!!}{\pi(2n-1)!!}\int_0^{\pi}\cos^{2n}\frac{u}{2}\,du,
> $$
>
> 故
>
> $$
> f(x)=\frac{(2n)!!}{2\pi(2n-1)!!}\int_0^{\pi}2f(x)\cos^{2n}\frac{u}{2}\,du,
> $$
>
> 从而
>
> $$
> \begin{aligned}
> |V_n(x)-f(x)|
> =\frac{(2n)!!}{2\pi(2n-1)!!}\left|\int_0^{\pi}[f(x+u)+f(x-u)-2f(x)]\cos^{2n}\frac{u}{2}\,du\right|.
> \end{aligned}
> $$
>
> 记 $\varphi(x,u)\equiv f(x+u)+f(x-u)-2f(x)$. 因 $f(x)$ 在 $[-\pi,2\pi]$ 上连续，所以一致连续.
>
> 故 $\forall\varepsilon>0$，$\exists\delta>0$（$\delta<\pi$），使得当 $|x'-x''|<\delta$ 时有 $|f(x')-f(x'')|<\frac{\varepsilon}{4}$. 于是当 $x\in[0,\pi]$, $0<|u|<\delta$ 时，有
>
> $$
> |\varphi(x,u)|\le |f(x+u)-f(x)|+|f(x-u)-f(x)|<\frac{\varepsilon}{2}.
> $$
>
> 由此
>
> $$
> \begin{aligned}
> \frac{(2n)!!}{2\pi(2n-1)!!}\left|\int_0^{\delta}\varphi(x,u)\cos^{2n}\frac{u}{2}\,du\right|
> &\le \frac{(2n)!!}{2\pi(2n-1)!!}\int_0^{\delta}|\varphi(x,u)|\cos^{2n}\frac{u}{2}\,du \\
> &<\frac{\varepsilon}{2}\cdot\frac{(2n)!!}{2\pi(2n-1)!!}\int_0^{\pi}\cos^{2n}\frac{u}{2}\,du \\
> &<\frac{\varepsilon}{2}. \tag{2}
> \end{aligned}
> $$
>
> 因为 $f(x)$ 是连续周期函数，所以存在常数 $M$ 使得处处有 $|\varphi(x,u)|\le M$. 因而
>
> $$
> \begin{aligned}
> \frac{(2n)!!}{2\pi(2n-1)!!}\left|\int_{\delta}^{\pi}\varphi(x,u)\cos^{2n}\frac{u}{2}\,du\right|
> &\le M\frac{(2n)!!}{2\pi(2n-1)!!}\int_{\delta}^{\pi}\cos^{2n}\frac{u}{2}\,du\quad \text{（令 }v=\frac{u}{2}\text{）} \\
> &= M\frac{(2n)!!}{2\pi(2n-1)!!}\cdot 2\int_{\delta/2}^{\pi/2}\cos^{2n}v\,dv \\
> &\le M\frac{(2n)!!}{2\pi(2n-1)!!}\cos^{2n}\frac{\delta}{2}. \tag{3}
> \end{aligned}
> $$
>
> 记 $q=\cos\frac{\delta}{2}$，因 $0<\delta<\pi$，所以 $0<q<1$，$\sum_{n=1}^\infty\frac{(2n)!!}{(2n-1)!!}q^{2n}$ 收敛，
>
> $$
> \frac{(2n)!!}{(2n-1)!!}q^{2n}\to 0\quad (n\to\infty).
> $$
>
> 故对 $\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，
>
> $$
> M\frac{(2n)!!}{2\pi(2n-1)!!}\cos^{2n}\frac{\delta}{2}<\frac{\varepsilon}{2}. \tag{4}
> $$
>
> 最后由 (1)、(2)、(3)、(4) 得
>
> $$
> \begin{aligned}
> |V_n(x)-f(x)|
> &<\frac{(2n)!!}{2\pi(2n-1)!!}\left|\int_0^{\delta}\varphi(x,u)\cos^{2n}\frac{u}{2}\,du\right| \\
> &\quad +\frac{(2n)!!}{2\pi(2n-1)!!}\left|\int_{\delta}^{\pi}\varphi(x,u)\cos^{2n}\frac{u}{2}\,du\right| \\
> &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> \end{aligned}
> $$
>
> 即 $V_n(x)\rightrightarrows f(x)$（当 $n\to\infty$ 时）于 $[-\pi,\pi]$ 上.

**☆例 5.4.26** 设 $f(x)$ 在 $[0,\pi]$ 上有连续导数，且 $f'(x)$ 在 $[0,\pi]$ 上分段光滑，$\int_0^{\pi}f(x)\,dx=0$，试证：

$$
\int_0^{\pi}f'^2(x)\,dx\ge \int_0^{\pi}f^2(x)\,dx.
$$

> [!proof]- 证
> 将 $f(x)$ 偶延拓到 $[-\pi,0]$ 上，由已知条件，延拓后的函数能在 $[-\pi,\pi]$ 展开为 Fourier 级数，$a_0=0$, $b_n=0$，且可以逐项微分：
>
> $$
> f(x)=\sum_{n=1}^\infty a_n\cos nx,\ x\in[0,\pi],\qquad f'(x)=-\sum_{n=1}^\infty na_n\sin nx,\ x\in[0,\pi],
> $$
>
> 两者均为 Fourier 展开式. 利用 Parseval 等式知
>
> $$
> \frac{2}{\pi}\int_0^{\pi}f^2(x)\,dx=\sum_{n=1}^\infty a_n^2,
> $$
>
> $$
> \frac{2}{\pi}\int_0^{\pi}f'^2(x)\,dx=\sum_{n=1}^\infty n^2a_n^2\ge \sum_{n=1}^\infty a_n^2=\frac{2}{\pi}\int_0^{\pi}f^2(x)\,dx,
> $$
>
> 故
>
> $$
> \int_0^{\pi}f'^2(x)\,dx\ge \int_0^{\pi}f^2(x)\,dx.
> $$

**☆练习** 设 $f(x)$ 在 $\mathbb{R}$ 上有连续导数，有周期 $\ell(>0)$，且 $\int_0^\ell f(x)\,dx=0$。试利用 Fourier 级数展开式证明：

$$
\int_0^\ell |f'(x)|^2\,dx \ge \frac{4\pi^2}{\ell^2}\int_0^\ell |f(x)|^2\,dx, \tag{1}
$$

其中等号成立当且仅当 $f(x)=a_1\cos(2\pi x/\ell)+b_1\sin(2\pi x/\ell)$．（浙江大学）

> [!hint]- 提示
> $f(x)\sim\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos(2n\pi x/\ell)+b_n\sin(2n\pi x/\ell))$，
>
> $f'(x)\sim\sum_{n=1}^\infty(a'_n\cos(2n\pi x/\ell)+b'_n\sin(2n\pi x/\ell))$
>
> 其中 $a'_0=0$，$a'_n=\frac{2\pi}{\ell}nb_n$，$b'_n=-\frac{2\pi}{\ell}na_n$，（$n=1,2,\cdots$）. \tag{2}
>
> 再对 $f(x)$，$f'(x)$ 分别利用 Parseval 等式，可推出（欲证的）不等式（1）．

> [!proof]- 证（证明等式（2）．）
> $$
> \begin{aligned}
> a_n&=\frac{2}{\ell}\int_0^\ell f(x)\cos(2n\pi x/\ell)\,dx \quad\text{（利用分部积分）} \\
> &=-\frac{\ell}{2n\pi}\cdot\frac{2}{\ell}\int_0^\ell f'(x)\sin(2n\pi x/\ell)\,dx=-\frac{\ell}{2n\pi}b'_n \quad (n=1,2,\cdots).
> \end{aligned}
> $$
>
> 同理，有 $b_n=\frac{\ell}{2n\pi}a'_n$（$n=1,2,\cdots$），$a'_0=\frac{1}{\ell}\int_0^\ell f'(x)\,dx=0$（因周期为 $\ell$：$f(\ell)-f(0)=0$）．
>
> 检查前面的 Parseval 等式的推导过程，将 $(2\pi)$ 改为 $\ell$，保持有效（半周期 $\pi$ 对应 $\ell/2$）．应用 Parseval 等式：
>
> $$
> \frac{2}{\ell}\int_0^\ell f^2(x)\,dx=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n^2+b_n^2) \;\xrightarrow{a_0=0}\; \sum_{n=1}^\infty(a_n^2+b_n^2), \tag{3}
> $$
>
> $$
> \begin{aligned}
> \frac{2}{\ell}\int_0^\ell |f'(x)|^2\,dx&=\sum_{n=1}^\infty[(a'_n)^2+(b'_n)^2] \\
> &\xrightarrow{\text{式（2）}} \sum_{n=1}^\infty\left[\left(\frac{2n\pi}{\ell}a_n\right)^2+\left(-\frac{2n\pi}{\ell}b_n\right)^2\right] \\
> &=\frac{4\pi^2}{\ell^2}\sum_{n=1}^\infty(n^2a_n^2+n^2b_n^2) \ge \frac{4\pi^2}{\ell^2}\sum_{n=1}^\infty(a_n^2+b_n^2) \\
> &\xrightarrow{\text{式（3）}} \frac{4\pi^2}{\ell^2}\left(\frac{2}{\ell}\int_0^\ell f^2(x)\,dx\right).
> \end{aligned}
> $$
>
> 不等式（1）获证．此式明显看出，「$\ge$」变成「$=$」的充分必要条件是：（当 $n\ge 2$ 时）$a_n=b_n=0$（否则为「$>$」）．亦即：等号成立的充分必要条件是：$f(x)=a_1\cos(2\pi x/\ell)+b_1\sin(2\pi x/\ell)$．

**关于 Fourier 级数的一致收敛问题**

因为 Fourier 级数如果一致收敛，其和函数必在 $\mathbb{R}$ 上连续．故以 $2\pi$ 为周期的函数要想在 $\mathbb{R}$ 上展开成一致收敛的 Fourier 级数，必要条件是它在全数轴上连续．若 $f(x)$ 仅在 $[-\pi,\pi]$ 上给出，则 $f(x)$ 必须在 $[-\pi,\pi]$ 上连续，而且 $f(-\pi)=f(\pi)$．下例给出该问题的一个充分条件．

**☆例 5.4.27** 证明：若 $f(x)$ 是周期为 $2\pi$ 的连续函数，在 $[-\pi,\pi]$ 上分段光滑，则 $f(x)$ 的 Fourier 级数一致收敛于 $f(x)$．

> [!proof]- 证
> $$
> f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx) \quad\text{（收敛定理）}. \tag{1}
> $$
>
> 这时 $f'(x)$ 分段连续，其 Fourier 系数 $a'_n$，$b'_n$ 有关系：$a'_n=nb_n$，$b'_n=-na_n$．
>
> （所谓 Fourier 级数逐项求导性，见例 5.4.4 前的要点中性质 2）和例 5.4.7 前的要点 5．在 $f'$ 分段连续，$f$ 连续，$f(-\pi)=f(\pi)$ 的条件下，该性质可直接通过分部积分得到．）因此
>
> $$
> |a_n|+|b_n|\le\left|\frac{a'_n}{n}\right|+\left|\frac{b'_n}{n}\right|\le\frac12(a'^2_n+b'^2_n)+\frac{1}{n^2}.
> $$
>
> （此处应用了平均值不等式，如：$\left|\frac{a'_n}{n}\right|=\sqrt{\frac{a'^2_n}{n^2}}\le\frac12\left(a'^2_n+\frac{1}{n^2}\right)$．）根据 Bessel 不等式，可知
>
> $$
> \sum_{n=1}^\infty|a_n|+|b_n|\le\frac12\sum_{n=1}^\infty\left(a'^2_n+b'^2_n+\frac{2}{n^2}\right)<+\infty,
> $$
>
> 故原 Fourier 级数（1）不仅一致收敛，而且绝对一致收敛（于 $\mathbb{R}$ 上）．

> [!note] 注（任意区间的情况）
> 若 $f(x)$ 在 $[a,b]$ 上连续，分段光滑，$f(a+0)=f(b-0)$，则 $f(x)$ 可在 $[a,b]$ 上展开成一致收敛的 Fourier 级数．

下例给出一个应用．

**☆例 5.4.28** 设 $f(x)$ 为以 $2\pi$ 为周期，且在 $[-\pi,\pi]$ 上可积的函数，$a_n,b_n$ 是 $f(x)$ 的 Fourier 系数．

1）试求（延迟函数）$f(x+t)$ 的 Fourier 系数；

2）若 $f$ 连续，在 $[-\pi,\pi]$ 上分段光滑，试求卷积函数

$$
F(x)=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)f(x+t)\,dt
$$

的 Fourier 展开式，并由此推出 Parseval 等式．（哈尔滨工业大学）

> [!solution]- 解
> 1）将 $f(x+t)$ 的 Fourier 系数记作 $A_n,B_n$，则
>
> $$
> \begin{aligned}
> A_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x+t)\cos nx\,dx \quad\text{令 }x+t=u \\
> &=\frac{1}{\pi}\int_{-\pi+t}^{\pi+t} f(u)\cos n(u-t)\,du \\
> &=\frac{1}{\pi}\int_{-\pi+t}^{\pi+t} f(u)(\cos nu\cos nt+\sin nu\sin nt)\,du \\
> &=\cos nt\cdot\frac{1}{\pi}\int_{-\pi}^{\pi} f(u)\cos nu\,du+\sin nt\cdot\frac{1}{\pi}\int_{-\pi}^{\pi} f(u)\sin nu\,du \\
> &=a_n\cos nt+b_n\sin nt \quad (n=1,2,\cdots),
> \end{aligned}
> $$
>
> $A_0=a_0$，$B_n=b_n\cos nt-a_n\sin nt$（$n=1,2,\cdots$）．
>
> 2）根据上例，这时 $f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$ 在 $\mathbb{R}$ 上一致收敛．连续周期函数 $f(x)$ 必有界．上式两边同乘有界函数 $f(x+t)$，仍一致收敛，可以逐项积分．故
>
> $$
> \begin{aligned}
> F(x)&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)f(x+t)\,dt \\
> &=\frac{1}{\pi}\int_{-\pi}^{\pi} \frac{a_0}{2}f(x+t)\,dt+\sum_{n=1}^\infty\frac{1}{\pi}\int_{-\pi}^{\pi}(a_n\cos nt+b_n\sin nt)f(x+t)\,dt \\
> &=\frac{a_0A_0}{2}+\sum_{n=1}^\infty(a_nA_n+b_nB_n) \quad\text{（利用 1）的结果）} \\
> &=\frac{a_0^2}{2}+\sum_{n=1}^\infty[a_n(a_n\cos nx+b_n\sin nx)+b_n(b_n\cos nx-a_n\sin nx)] \\
> &=\frac{a_0^2}{2}+\sum_{n=1}^\infty(a_n^2+b_n^2)\cos nx \quad (-\infty<t<+\infty). \tag{1}
> \end{aligned}
> $$
>
> 在此式中令 $x=0$，即得 Parseval 等式：
>
> $$
> \frac{1}{\pi}\int_{-\pi}^{\pi} f^2(x)\,dx=\frac{a_0^2}{2}+\sum_{n=1}^\infty(a_n^2+b_n^2).
> $$
>
> 由此即知式（1）一致收敛，进而（1）为 $F(x)$ 的 Fourier 级数（留作练习，见练习 5.4.1）．

> [!note] 注
> 1° 求卷积的 Fourier 级数，本例与例 5.4.12 方法、途径完全不同.
>
> 2° 从式（1）可知 $F(x)$ 应是偶函数．通过变量替换也容易验证（见例 5.4.12）．

**☆例 5.4.29** 构造两个以 $2\pi$ 为周期的连续函数，使其 Fourier 级数在 $[0,\pi]$ 上一致收敛于 $0$．（北京大学）

> [!hint]- 提示
> 题目只要求以 $2\pi$ 为周期，在 $[0,\pi]$ 上一致收敛于 $0$，因此 $(-\pi,0)$ 上的值可适当选取．
>
> 再提示：例如，在 $[0,\pi]$ 上令 $f(x)\equiv 0$，在 $(-\pi,0)$ 上连续，分段光滑，且 $f(-\pi)=0$．
>
> 如在 $[0,\pi]$ 上，设 $f(x)\equiv 0$；在 $[-\pi,0)$ 上，设 $f(x)=x(x+\pi)$（或 $f(x)=\sin x$）．然后以 $2\pi$ 周期，延拓到全数轴，写出 $f(x)$ 的 Fourier 级数，利用例 5.4.27 即知：此 Fourier 级数一致收敛，且在 $[0,\pi]$ 上一致收敛于 $0$．

> [!note] 注
> 任意给定的级数 $\frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$ 未必一定是某函数的 Fourier 级数．试看

**☆例 5.4.30** 试证：级数 $\sum_{n=2}^\infty\frac{1}{\ln n}\sin nx$ 不可能是某函数的 Fourier 级数．

（Fourier 级数比较，这里 $b_n=\frac{1}{\ln n}$（$n=2,3,\cdots$），其余系数都为零．）

> [!hint]- 提示
> 作为 Fourier 级数，必要条件是：$\sum_{n=1}^\infty\frac{b_n}{n}$ 收敛（见例 5.4.24），但这里，利用 Cauchy 积分判别法，知 $\sum_{n=1}^\infty\frac{b_n}{n}=\sum_{n=1}^\infty\frac{1}{n\ln n}$ 发散．

**☆例 5.4.31** 设 $f(x)$，$g(x)$ 在 $[a,b]$ 上 Riemann 可积，证明：$f(x)$，$g(x)$ 具有相同 Fourier 系数的充分必要条件是

$$
\int_a^b |f(x)-g(x)|\,dx=0. \tag{1}
$$

（北京大学）

> [!proof]- 证
> 分别用 $a_n,b_n$；$\alpha_n,\beta_n$；$A_n,B_n$ 表示 $f(x)$，$g(x)$ 及 $F(x)=f(x)-g(x)$ 的 Fourier 系数．
>
> （1）（充分性）若式（1）成立，那么
>
> $$
> \begin{aligned}
> 0\le|a_n-\alpha_n|&=\left|\frac{1}{\ell}\int_a^b(f(x)\cos(n\pi x/\ell)-g(x)\cos(n\pi x/\ell))\,dx\right| \\
> &\le\frac{1}{\ell}\int_a^b|f(x)-g(x)|\,dx=0 \quad (\ell=(b-a)/2).
> \end{aligned}
> $$
>
> 推知：$a_n=\alpha_n$（$n=0,1,2,\cdots$）．
>
> 同理可证：$b_n=\beta_n$（$n=1,2,\cdots$）．
>
> （2）（必要性）若 Fourier 系数相等，则 $a_n=\alpha_n$，$b_n=\beta_n$，故
>
> $$
> A_n=a_n-\alpha_n=0,\quad B_n=b_n-\beta_n=0. \tag{2}
> $$
>
> 又因为 $f(x)$，$g(x)$ 可积，故 $f(x)-g(x)$ 可积，可用 Parseval 等式：
>
> $$
> \begin{aligned}
> 0\le\left(\int_a^b|f(x)-g(x)|\,dx\right)^2 &\le \text{（Schwarz 公式）} \left(\int_a^b 1^2\,dx\cdot\int_a^b|f(x)-g(x)|^2\,dx\right) \\
> &\xrightarrow{\text{Parseval 等式}} (b-a)\left[\frac{A_0^2}{2}+\sum_{1}^\infty(A_n^2+B_n^2)\right] \xrightarrow{\text{式（2）}} 0.
> \end{aligned}
> $$
>
> 因此，式（1）成立．

**☆例 5.4.32**（Fourier 展开式的唯一性） 在区间 $[-\pi,\pi]$ 上，函数 $f(x)$ 和 $g(x)$ 分别有 Fourier 级数如下：

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx, \tag{1}
$$

$$
g(x)\sim\frac{\alpha_0}{2}+\sum_{n=1}^\infty \alpha_n\cos nx+\beta_n\sin nx. \tag{2}
$$

若两级数都在 $[-\pi,\pi]$ 上收敛，两和函数都在 $[-\pi,\pi]$ 上连续并且相等．问：对应的系数是否保持相等？即，是否 $a_n=\alpha_n$（$n=0,1,2,\cdots$），$b_n=\beta_n$（$n=1,2,\cdots$）？如果成立，请给出证明；如果不成立，加上什么条件就能成立？请说明理由．（北京大学）

（该题有较大灵活性，能用不同方式回答，下面 5 种回答，仅供参考．）

> [!note] 回答方式 1
> （证明：假定两级数都在 $[-\pi,\pi]$ 上一致收敛，则命题成立．）
>
> 用 $S(x)$ 表示公共的和函数，则
>
> $$
> S(x)=\frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx.
> $$
>
> 两端同乘（有界函数）$\cos nx$，仍一致收敛，且可逐项求积分，根据三角系的正交性，得
>
> $$
> a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}S(x)\cos nx\,dx \quad (n=0,1,2,\cdots).
> $$
>
> 同理，式（2）中的 $\alpha_n$，也如此．于是
>
> $$
> a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}S(x)\cos nx\,dx=\alpha_n, \quad (n=0,1,2,\cdots).
> $$
>
> 类似可证 $b_n=\beta_n$（$n=1,2,\cdots$）．

> [!note] 回答方式 2
> （证明：假设 $f(x)$，$g(x)$ 在 $[-\pi,\pi]$ 上分段光滑，则命题成立．）
>
> 若 $f(x)$，$g(x)$ 是以 $2\pi$ 为周期的连续函数，在 $[-\pi,\pi]$ 上分段光滑，则它们的 Fourier 级数一致收敛（如例 5.4.27 所证），接下来用回答方式 1 的方法，得 $a_n=\alpha_n$，$b_n=\beta_n$．

> [!note] ※回答方式 3
> （应用 Heine-Cantor 定理．）该定理指出：若两个三角级数：
>
> $$
> \frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx, \tag{1}
> $$
>
> $$
> \frac{\alpha_0}{2}+\sum_{n=1}^\infty \alpha_n\cos nx+\beta_n\sin nx \tag{2}
> $$
>
> 在区间 $[-\pi,\pi]$ 上（最多除有限个点外）处处收敛于同一函数 $f(x)$，则两级数恒等，即 $a_n=\alpha_n$（$n=0,1,2,\cdots$），$b_n=\beta_n$（$n=1,2,\cdots$）．该定理对问题作了肯定的回答．
>
> 该定理的证明十分复杂，这里将证明的思路做几点概括：
>
> 1° 问题等价于：「形如 Fourier 级数的三角级数（1），若它在 $[-\pi,\pi]$ 上收敛于 $0$（可以存在有限个点例外），则式（1）的系数必都为零．」接下来应用三个定理．
>
> 设三角级数为
>
> $$
> \frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx.
> $$
>
> i）（Cantor 引理）若此级数在某有限闭区间上收敛，则其系数
>
> $$
> a_n\to 0,\quad b_n\to 0 \quad\text{（当 }n\to\infty\text{ 时）}. \tag{3}
> $$
>
> ii）（Riemann 定理）若此级数的系数 $a_n\to 0$，$b_n\to 0$（当 $n\to\infty$ 时），则此三角级数逐项积分两次所得的级数收敛．记其和为
>
> $$
> F(x)=\frac{a_0x^2}{4}-\sum_{n=1}^\infty\frac{a_n\cos nx+b_n\sin nx}{n^2}, \tag{4}
> $$
>
> 则 $F(x)$ 的二阶对称导数必为零：$F^{[2]}(x)=0$．
>
> （注 ① 关于二阶对称导数的基本知识，参见本书第二章习题 3.2.34 和 3.2.35．② 上面 1° 中已述：若级数（1）收敛于 $0$（除有限个点外），则（1）的系数必为 $0$．其实，后来的研究发现（见回答方式 4）：此条件下级数（1）必为 Fourier 级数，而 Fourier 级数每点之值等于左、右极限的平均值．故在这有限个点上级数值只能为 $0$（尽管我们原先不知道）．）
>
> iii）（Schwarz 定理）二阶对称导数 $F^{[2]}(x)=0$，则 $F$ 必是线性函数：$F(x)=cx+d$．
>
> 2°（回到本题）式（4）可改写为
>
> $$
> \frac{a_0x^2}{4}-\sum_{n=1}^\infty\frac{a_n\cos nx+b_n\sin nx}{n^2}=cx+d \quad\text{或}\quad \frac{a_0x^2}{4}-cx=d+\sum_{n=1}^\infty\frac{a_n\cos nx+b_n\sin nx}{n^2}.
> $$
>
> 因此只能 $a_0=c=0$．即得 $\displaystyle 0=d+\sum_{n=1}^\infty\frac{a_n\cos nx+b_n\sin nx}{n^2}$．可见此级数一致收敛（和为 $0$）．根据本题回答方式 1，此式的系数应为 $0$．故系数的分子 $a_n=\alpha_n$（$n=0,1,2,\cdots$），$b_n=\beta_n$（$n=1,2,\cdots$）．证毕．

> [!note] ※回答方式 4
> （P. du Bois Reymond 定理） 三角级数
>
> $$
> \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos nx + b_n \sin nx
> $$
>
> 若收敛于有界可积函数，那么此级数必是 $s(x)$ 的 Fourier 级数，下式成了 Fourier 展开式
>
> $$
> s(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos nx + b_n \sin nx.
> $$
>
> （注 此定理被 C.J. de la Vallee Poussin 作了推广：收敛到无界，绝对可积函数也行。）
>
> 因此
>
> $$
> a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} S(x)\cos nx\,dx = \alpha_n, \quad (n=0,1,2,\cdots).
> $$
>
> 同理，有
>
> $$
> b_n = \beta_n \quad (n=1,2,\cdots).
> $$

> [!note] ※回答方式 5
> （应用 Fejér 定理．）已知式 (1) 的和函数为 $S(x)$，即 $\forall x$，级数的部分和：$S_n(x) \to S(x)$（当 $n \to \infty$ 时），因此有
>
> $$
> \sigma_n(x) = \frac{S_1(x) + S_2(x) + \cdots + S_n(x)}{n} \to S(x) \quad (n \to \infty).
> $$
>
> 题称：$f(x), g(x)$ 有 Fourier 级数，暗示它们为可积函数（或无界但绝对可积的函数），应用 Fejér 定理，在 $f(x)$ 的连续点上 $S(x)=f(x)$，不连续点最多是一个零测集，对积分值没有影响，因此
>
> $$
> a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\cos nx\,dx = \frac{1}{\pi} \int_{-\pi}^{\pi} S(x)\cos nx\,dx.
> $$
>
> 同理有
>
> $$
> \alpha_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\cos nx\,dx = \frac{1}{\pi} \int_{-\pi}^{\pi} S(x)\cos nx\,dx.
> $$
>
> 于是有
>
> $$
> a_n = \alpha_n \quad (n=0,1,2,\cdots),
> $$
>
> 类似可证
>
> $$
> b_n = \beta_n \quad (n=1,2,\cdots).
> $$

> [!note] 注
> 第 3, 4 两种回答的详细证明，可参看菲赫金哥尔茨的《微积分学教程》第三卷第三分册 732 小节.
>
> Fejér 定理的证明可参看何琏，史济怀，徐森林的《数学分析》第三册；或常庚哲，史济怀的《数学分析教程》下册.
>
> 第 5 个回答，虽然简洁明了，但「不连续点最多是一个零测集，对积分值没有影响」是实变函数的知识，超出平常数学分析课程范围.

[^1]: 若 $f(x)$ 在区间 $[a,b]$ 上可积，或无界但绝对可积，则 $\displaystyle\lim_{p\to+\infty}\int_a^b f(x)\sin px\,dx=0$，$\displaystyle\lim_{p\to+\infty}\int_a^b f(x)\cos px\,dx=0$.


### 单元练习 5.4

> [!exercise] 5.4.1
> 设 $\frac{a_0}{2} + \sum_{k=1}^{\infty} (a_k\cos kx + b_k\sin kx)$ 在 $[-\pi,\pi]$ 上一致收敛, 试证它必是 $[-\pi,\pi]$ 上其和函数的 Fourier 级数.（西北师范大学）

> [!hint]- 提示
> 用 $a_n, b_n$ 表示和函数的 Fourier 系数, 利用逐项积分, 容易验证 $a_n = a_n, b_n = b_n$.

> [!exercise] 5.4.2
> 设
> 
> $$f(x) = \begin{cases} 0, & -\pi \le x < 0, \\ 1, & 0 \le x \le \pi, \end{cases}$$
> 
> 1）求 $f(x)$ 的 Fourier 级数;
> 2）这级数收敛吗？收敛于 $f(x)$ 吗？为什么？
> 3）这级数在区间 $(-\pi,\pi)$ 里一致收敛吗？为什么？（厦门大学）

> [!hint]- 提示
> 直接用公式和收敛定理.

> [!solution]- 答案
> $$f(x) \sim \frac{1}{2} + \frac{2}{\pi} \sum_{n=1}^{\infty} \frac{1}{2n-1}\sin(2n-1)x$$
> 
> $$= \begin{cases} f(x), & 0 < |x| < \pi, \\ \frac12, & x=-\pi,0,\pi, \\ \text{周期 } 2\pi, & \text{其他} \end{cases}$$
> 
> 在 $(-\pi,\pi)$ 上非一致收敛, 因和函数已不连续.

> [!exercise] 5.4.3
> 已知 $f$ 是以 $2\pi$ 为周期的可积函数, 它的 Fourier 系数为 $a_n,b_n$ $(n\ge 0)$, 求函数
> 
> $$f_h(x)=\frac{1}{2h}\int_{x-h}^{x+h} f(\xi)\,d\xi \quad (h\ne 0)$$
> 
> 的 Fourier 系数 $A_n,B_n$ $(n\ge 0)$.（西北师范大学, 合肥工业大学）

> [!solution]- 答案
> $$A_0 = a_0, \quad A_n = \frac{a_n}{nh}\sin nh \quad (n=1,2,\cdots), \quad B_n = \frac{b_n}{nh}\sin nh \quad (n=1,2,\cdots)$$

> [!exercise] 5.4.4
> 试将 $f(x) = -\pi - x$ 在 $(-\pi,0)$ 内展开成正弦级数, 并判断此级数在 $(-\pi,0)$ 是否一致收敛.（河北师范大学）

> [!hint]- 提示
> 作为奇延拓即变成例5.4.7.

> [!exercise] 5.4.5
> 试将周期函数 $f(x)=\arcsin(\sin x)$ 展为 Fourier 级数.（哈尔滨工业大学）

> [!solution]- 答案
> $$f(x) = \frac{4}{\pi}\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)^2}\sin(2n+1)x, \quad \text{在 } \mathbb{R} \text{ 上处处成立.}$$

> [!hint]- 提示
> $f$ 为连续奇函数, 以 $2\pi$ 为周期, 在 $[0,\pi]$ 上
> 
> $$f(x) = \begin{cases} x, & x\in[0,\pi/2], \\ \pi-x, & x\in[\pi/2,\pi]. \end{cases}$$

> [!exercise] 5.4.6
> 已知 $f(x)=\frac{\pi}{2}\cdot\frac{e^x+e^{-x}}{e^{\pi}-e^{-\pi}}$,
> 
> 1）在 $[-\pi,\pi]$ 上将 $f(x)$ 展为 Fourier 级数；
> 
> $$\frac12 + \sum_{n=1}^{\infty} \frac{(-1)^n}{1+n^2}\cos nx$$
> 
> 2）求级数 $\sum_{n=1}^{\infty} \frac{(-1)^n}{1+(2n)^2}$ 之和.（天津大学）
> 
> $$\frac{\pi}{2}\left(e^{\pi/2}-e^{-\pi/2}\right)^{-1} - \frac12$$

> [!hint]- 提示
> $f$ 为偶函数, $b_n=0$. 注意
> 
> $$\int e^{ax}\cos bx\,dx = \frac{e^{ax}}{a^2+b^2}(a\cos bx+b\sin bx), \quad \int e^{ax}\sin bx\,dx = \frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)$$
> 
> 不时地被用到.

> [!exercise] 5.4.7
> 设 $f(x)$ 是以 $2\pi$ 为周期的周期函数, 且 $f(x)=x$, $-\pi<x<\pi$, 求 $f(x)$ 与 $|f(x)|$ 的 Fourier 级数, 它们的 Fourier 级数是否一致收敛（给出证明）？（北京大学）

> [!hint]- 提示
> 1° $f(x) \sim 2\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}\sin nx$
> 
> $$= \begin{cases} x, & \text{当 } -\pi<x<\pi \text{ 时}, \\ 0, & \text{当 } x=-\pi,\pi \text{ 时}, \\ \text{周期}, & \text{其他}. \end{cases}$$
> 
> 若级数在 $(-\pi,\pi)$ 内一致收敛, 加上 $-\pi,\pi$ 处收敛, 可知在 $[-\pi,\pi]$ 上一致收敛. 和函数应当在 $[-\pi,\pi]$ 上连续, 与结果矛盾.
> 
> 2° $|f(x)| = \frac{\pi}{2} - \frac{4}{\pi}\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}\cos(2n-1)x$, $x\in[-\pi,\pi]$ 一致收敛, 因 $\sum 1/(2n-1)^2$ 收敛, 或利用例5.4.27的结论.

> [!exercise] 5.4.8
> 在 $[0,\pi]$ 上将 $f(x)=x+\cos x$ 展开为余弦级数.（华中科技大学）

> [!solution]- 答案
> $$f(x)=\frac{\pi}{2}+\cos x-\sum_{n=1}^{\infty}\frac{4}{\pi(2n-1)^2}\cos(2n-1)x$$

> [!hint]- 提示
> $\cos x$ 的 Fourier 级数是它自己, 只要求出 $g(x)=x$ 的展开式, 两者相加即得.

> [!exercise] 5.4.9
> 试利用5.4.2题的结果, 求出 $g(x)=\operatorname{sgn} x$, $h(x)=|x|$ 在 $(-\pi,\pi)$ 内的 Fourier 展式.

> [!hint]- 提示
> $g(x)=2(f(x)-\frac12)$. 于是由 $f$ 可写出 $g$ 的展开式, 逐项积分可得 $h(x)$ 的展开式（注意何处可写等号）.

> [!exercise] 5.4.10
> 设 $f(x)=x$, $x\in[0,\frac{\pi}{2}]$, 试将 $f(x)$ 展开成 $\sum_{n=1}^{\infty} b_{2n-1}\sin(2n-1)x$ 型的三角级数.

> [!hint]- 提示
> 参考对比5.4.5题的结果, 寻查做法, 下题给出一般结果.

> [!exercise] 5.4.11
> 设 $f(x)$ 以 $2\pi$ 为周期, $[-\pi,\pi]$ 上可积, $a_n,b_n$ 是它的 Fourier 级数. 试证：
> 
> 1）$f(-x)=f(x)$, $f(\pi-x)=-f(x)$ ⇒ $\begin{cases} b_n=0, & n=1,2,\cdots, \\ a_{2n}=0, & n=0,1,2,\cdots; \end{cases}$
> 
> 2）$f(-x)=f(x)$, $f(\pi-x)=f(x)$ ⇒ $\begin{cases} b_n=0, & n=1,2,\cdots, \\ a_{2n-1}=0, & n=1,2,\cdots; \end{cases}$
> 
> 3）$f(-x)=-f(x)$, $f(\pi-x)=-f(x)$ ⇒ $\begin{cases} a_n=0, & n=0,1,2,\cdots, \\ b_{2n-1}=0, & n=1,2,\cdots; \end{cases}$
> 
> 4）$f(-x)=-f(x)$, $f(\pi-x)=f(x)$ ⇒ $\begin{cases} a_n=0, & n=0,1,\cdots, \\ b_{2n}=0, & n=1,2,\cdots. \end{cases}$

> [!hint]- 提示
> 可用系数公式直接验证. 注意: $f(-x)=f(x)$（或 $-f(x)$）是偶（或奇）性条件, 导致 $b_n=0$（或 $a_n=0$）. 这是共知, 好记.
> 
> $f(\pi-x)=-f(x)$ 表明图形关于点 $(\frac{\pi}{2},0)$ 中心对称.
> 
> $f(\pi-x)=f(x)$ 表明图形关于直线 $x=\frac{\pi}{2}$ 轴对称.
> 
> 该例的结果可帮助我们预料和校验计算结果. 例如5.4.5题.
> 
> 感兴趣的读者, 不妨用"偶心奇轴皆无偶, 奇心偶轴皆无奇"两句口诀来记忆. 意即: 偶函数在对点 $(\frac{\pi}{2},0)$ 作中心延折, 或奇函数对直线 $x=\frac{\pi}{2}$ 作轴对称延折时, 系数下标就不会有偶数出现. 第二句类似.
> 
> 回头再做上题就容易了.

> [!exercise] 5.4.12
> 求下列函数在指定区间上的 Fourier 级数：
> 
> 1）$f(x)= \begin{cases} x, & x\in[0,\pi], \\ 2, & x\in[-\pi,0), \end{cases}$ 于 $[-\pi,\pi]$ 上；（中山大学）
> 
> 2）$f(x)=x+x^2$, 于 $[-\pi,\pi]$ 上, 并求 $\sum_{n=1}^{\infty} 1/n^2$;（中南大学）
> 
> 3）$f(x)=\left(\frac{\pi-x}{2}\right)^2$, 于 $(0,2\pi]$ 上, 并求 $\sum_{n=1}^{\infty} 1/n^2$;（复旦大学）
> 
> 4）$f(x)= \begin{cases} e^x, & [0,\frac{\pi}{2}], \\ 0, & [-\frac{\pi}{2},0), \end{cases}$ 于 $[-\frac{\pi}{2},\frac{\pi}{2}]$ 上, 并求和函数;（湘潭大学）
> 
> 5）$f(x)=x$, 于 $(0,2)$ 上, 按余弦展开;（国防科技大学）
> 
> 6）$f(x)=1$, 于 $(0,\pi]$ 上, 按正弦展开, 并求和函数.（南京大学）

> [!exercise] 5.4.13
> 求函数 $f(x)=\ln\left(2\cos\frac{x}{2}\right)$ 在 $(-\pi,\pi)$ 内的 Fourier 级数展开式.

> [!solution]- 答案
> $$\sum_{n=1}^{\infty} (-1)^{n-1}\frac{\cos nx}{n} \quad (-\pi<x<\pi)$$

> [!exercise] 5.4.14
> 证明级数 $\sum_{n=1}^{\infty} \frac{\sin nx}{\ln(n+1)}$ 不可能是某个可积函数 $f(x)$ 的 Fourier 级数.

> [!hint]- 提示
> 可用反证法及 Fourier 级数逐项积分定理.

> [!exercise] 5.4.15
> 写出
> 
> $$f(x)= \begin{cases} 1, & \text{当 } |x|\le\alpha, \\ 0, & \text{当 } \alpha<|x|\le\pi \end{cases}$$
> 
> 的 Fourier 级数, 并根据 Parseval 等式求和：
> 
> $$f(x) \sim \frac{\alpha}{\pi} + \sum_{n=1}^{\infty} \frac{2\sin n\alpha}{n\pi}\cos nx$$
> 
> 1）$\sum_{n=1}^{\infty} \frac{\sin^2 n\alpha}{n^2}$;
> 
> $$\frac{\alpha(\pi-\alpha)}{2}$$
> 
> 2）$\sum_{n=1}^{\infty} \frac{\cos^2 n\alpha}{n^2}$（已知 $\sum_{n=1}^{\infty}1/n^2=\pi^2/6$）
> 
> $$\frac16(\pi^2-3\pi\alpha+3\alpha^2)$$

> [!exercise] 5.4.16
> 设 $f(x)$ 是以 $2\pi$ 为周期的函数, 在 $[-\pi,\pi]$ 上可积, 则已知它的 Fourier 级数的部分和 $S_n(x)$ 可表示为 Dirichlet 积分:
> 
> $$S_n(x)=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x+t)\frac{\sin(n+\frac12)t}{2\sin\frac t2}\,dt$$
> 
> 其中
> 
> $$\frac{\sin(n+\frac12)t}{2\sin\frac t2} = \frac12 + \cos t + \cos 2t + \cdots + \cos nt = D_n(t)$$
> 
> 称为 Dirichlet 核. $S_n(x)$ 的平均值 $\sigma_n(x)=\frac1n\sum_{k=0}^{n-1}S_k(x)$ 称为 Cesàro 和. 试证：
> 
> 1）$D_0(x)+\cdots+D_{n-1}(x)=\frac12\left(\frac{\sin\frac n2 x}{\sin\frac x2}\right)^2$;
> 
> 2）$\frac{1}{2n\pi}\int_{-\pi}^{\pi}\left(\frac{\sin\frac n2 x}{\sin\frac x2}\right)^2dx=1$;
> 
> 3）$\forall\delta>0$, $\frac{1}{n\pi}\int_{\delta}^{\pi}\left(\frac{\sin\frac n2 x}{\sin\frac x2}\right)^2dx \to 0 \quad (\text{当 } n\to\infty \text{ 时})$;
> 
> 4）若 $f(x)$ 是以 $2\pi$ 为周期的连续函数, 则当 $n\to\infty$ 时 $\sigma_n(x)\to f(x)$ 于 $[-\pi,\pi]$ 上.

> [!proof]- 证明
> 1）$2\sin\frac x2\sum_{k=0}^{n-1}\sin\left(k+\frac12\right)x = \sum_{k=0}^{n-1}[\cos kx - \cos(k+1)x] = 1-\cos nx = 2\sin^2\frac{nx}{2}$.
> 
> 所以
> 
> $$\sum_{k=0}^{n-1}D_k(x)=\frac{\sum_{k=0}^{n-1}\sin\left(k+\frac12\right)x}{2\sin\frac x2}=\frac{\sin^2\frac{nx}{2}}{2\sin^2\frac x2}. \quad \text{（1）}$$
> 
> 2）$$\frac{1}{2n\pi}\int_{-\pi}^{\pi}\left(\frac{\sin\frac{nx}{2}}{\sin\frac x2}\right)^2dx = \frac{1}{2n\pi}\int_{-\pi}^{\pi}2\sum_{k=0}^{n-1}D_k(x)dx = \frac{1}{2n\pi}\sum_{k=0}^{n-1}\int_{-\pi}^{\pi}2D_k(x)dx$$
> 
> $$= \frac{1}{2n\pi}\sum_{k=0}^{n-1}\int_{-\pi}^{\pi}2\left(\frac12 + \sum_{i=1}^{k}\cos ix\right)dx = 1. \quad \text{（2）}$$
> 
> 3）$\forall\delta:0<\delta<\pi$,
> 
> $$\frac{1}{n\pi}\int_{\delta}^{\pi}\left(\frac{\sin\frac{nx}{2}}{\sin\frac x2}\right)^2dx \le \frac{1}{n\pi}\cdot \frac{\pi-\delta}{\sin^2\frac\delta2} \to 0 \quad (n\to\infty). \quad \text{（3）}$$
> 
> 4）$$S_n(x)=\frac1\pi\int_{-\pi}^{\pi}f(x+t)\frac{\sin(n+\frac12)t}{2\sin\frac t2}dt = \frac1\pi\int_{-\pi}^{\pi}f(x+t)D_n(t)dt,$$
> 
> $$\sigma_n(x)=\frac1n\sum_{k=0}^{n-1}S_k(x)=\frac{1}{n\pi}\sum_{k=0}^{n-1}\int_{-\pi}^{\pi}f(x+t)D_k(t)dt = \frac{1}{n\pi}\int_{-\pi}^{\pi}f(x+t)\sum_{k=0}^{n-1}D_k(t)dt$$
> 
> $$= \frac{1}{2n\pi}\int_{-\pi}^{\pi}f(x+t)\left(\frac{\sin\frac{nt}{2}}{\sin\frac t2}\right)^2dt. \quad \text{（4）}$$
> 
> 另一方（利用拟合法的思想）由式(2)两端同乘 $f(x)$, 可得
> 
> $$f(x)=\frac{1}{2n\pi}\int_{-\pi}^{\pi}f(x)\left(\frac{\sin\frac{nt}{2}}{\sin\frac t2}\right)^2dt. \quad \text{（5）}$$
> 
> （4）,（5）两式相减得
> 
> $$\sigma_n(x)-f(x)=\frac{1}{2n\pi}\int_{-\pi}^{\pi}[f(x+t)-f(x)]\left(\frac{\sin\frac{nt}{2}}{\sin\frac t2}\right)^2dt. \quad \text{（6）}$$
> 
> 因为 $f(x)$ 在 $[-\pi,\pi]$ 连续, 知（有界）：$\exists M>0$，当 $x\in[-\pi,\pi]$ 时, 恒有
> 
> $$|f(x)|\le M. \quad \text{（7）}$$
> 
> 根据 Cantor 定理, $f(x)$ 在 $[-\pi,\pi]$ 一致连续. 故 $\forall\varepsilon>0$, $\exists\delta:\pi>\delta>0$, 当 $|t|<\delta$ 时, 只要 $x,x+t\in[-\pi,\pi]$, 则恒有
> 
> $$|f(x+t)-f(x)|\le\frac\varepsilon3. \quad \text{（8）}$$
> 
> 为了证明：(当 $n\to\infty$ 时) $\sigma_n(x)\to f(x)$, 只需证明：$\forall\varepsilon>0$, $\exists N>0$, 当 $n>N$ 时,
> 
> 为此，将式(6)右端的积分拆为三段：
> 
> $$\sigma_n(x)-f(x)=\left(\frac1{2n\pi}\int_{-\pi}^{-\delta}+\frac1{2n\pi}\int_{-\delta}^{\delta}+\frac1{2n\pi}\int_{\delta}^{\pi}\right)[f(x+t)-f(x)]\left(\frac{\sin\frac{nt}{2}}{\sin\frac{t}{2}}\right)^2dt=I_1+I_2+I_3。$$
> 
> 那么
> 
> $$|I_2|=\left|\frac1{2n\pi}\int_{-\delta}^{\delta}[f(x+t)-f(x)]\left(\frac{\sin\frac{nt}{2}}{\sin\frac{t}{2}}\right)^2dt\right|$$
> 
> $$\le \frac1{2n\pi}\int_{-\delta}^{\delta}|f(x+t)-f(x)|\left(\frac{\sin\frac{nt}{2}}{\sin\frac{t}{2}}\right)^2dt$$
> 
> $$\le \frac{\varepsilon}{3}。$$
> 
> $$|I_3|=\left|\frac1{2n\pi}\int_{\delta}^{\pi}[f(x+t)-f(x)]\left(\frac{\sin\frac{nt}{2}}{\sin\frac{t}{2}}\right)^2dt\right|$$
> 
> $$\le \frac{M}{n\pi}\int_{\delta}^{\pi}\left(\frac{\sin\frac{nt}{2}}{\sin\frac{t}{2}}\right)^2dt\to 0\quad(n\to\infty)。$$
> 
> 故对上面的 $\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，能使得 $|I_3|\le\varepsilon/3$。
> 
> 因此式(9)成立：$|\sigma_n(x)-f(x)|\le|I_1|+|I_2|+|I_3|\le\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon$. 一致收敛获证。

> [!exercise] 5.4.17
> 设 $f(x)$ 是以 $2\pi$ 为周期的连续函数，$S_n(x)$ 是 $f(x)$ 的 Fourier 级数的部分和，
> 
> $$g_n(x)=\int_{-\pi}^{\pi}\frac{\cos(x-u)}{\sqrt{1+\sin^2(x+u)}}S_n(u)\,du.$$
> 
> 试证：
> 
> 1) 存在与 $x,n$ 无关的数 $K$，使得 $|g_n(x)|\le K$（$x\in[-\pi,\pi]$）；
> 2) 当 $n\to\infty$ 时，$g_n(x)\to\int_{-\pi}^{\pi}\frac{\cos(x-u)}{\sqrt{1+\sin^2(x+u)}}f(u)\,du$ 于 $[-\pi,\pi]$ 上。

> [!hint]- 提示
> 利用 Schwarz 不等式及 Parseval 等式。


