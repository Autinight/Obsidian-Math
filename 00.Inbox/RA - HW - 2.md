
代靖涵 25120222201319

> [!exercise] 1
> 设 $f_n\in C(X)$，$n\in\mathbb{N}$，且 $f_n$ 一致收敛到 $f$，那么 $f\in C(X)$。

> [!proof] 
> 任取$x_0\in X$, $\varepsilon>0$. 由于$f_n$一致收敛到$f$, 存在$N\in\mathbb{N}$, 使得
> $$
> \left| f_N\left(x\right)-f\left(x\right) \right|<\frac{\varepsilon}{3},\quad \forall x\in X
> $$
> 又由于$f_N$在$x_0$处连续, 存在$x_0$的一个邻域$U$, 使得
> $$
> \left| f_N\left(x\right)-f_N\left(x_0\right) \right|<\frac{\varepsilon}{3},\quad \forall x\in U
> $$
> 于是对于任意的$x\in U$,
> $$
> \begin{aligned}
> \left| f\left(x\right)-f\left(x_0\right) \right|&\le \left| f\left(x\right)-f_N\left(x\right) \right|+\left| f_N\left(x\right)-f_N\left(x_0\right) \right|+\left| f_N\left(x_0\right)-f\left(x_0\right) \right|\\
> &<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon
> \end{aligned}
> $$
> 这表明$f$在$x_0$处连续. 由于$x_0$是任取的, 可知$f\in C\left(X\right)$.


> [!exercise] 2
> 设 $f,g\in C(X)$，那么 $f+g\in C(X)$，$fg\in C(X)$，$\min(f,g)\in C(X)$。

> [!proof] 
> 任取$x_0\in X$, $\varepsilon>0$, 记
> $$
> \eta=\min\left\{1,\frac{\varepsilon}{2},\frac{\varepsilon}{\left| f\left(x_0\right) \right|+\left| g\left(x_0\right) \right|+1}\right\}
> $$
> 由于$f,g$在$x_0$处连续, 存在$x_0$的一个邻域$U$, 使得对于任意的$x\in U$,
> $$
> \left| f\left(x\right)-f\left(x_0\right) \right|<\eta,\quad \left| g\left(x\right)-g\left(x_0\right) \right|<\eta
> $$
> 于是
> $$
> \left| \left(f+g\right)\left(x\right)-\left(f+g\right)\left(x_0\right) \right|\le \left| f\left(x\right)-f\left(x_0\right) \right|+\left| g\left(x\right)-g\left(x_0\right) \right|<2\eta\le\varepsilon
> $$
> 故$f+g$在$x_0$处连续.
> 
> 又由于$\eta\le 1$, 在$U$上有$\left| f\left(x\right) \right|<\left| f\left(x_0\right) \right|+1$, 因此
> $$
> \begin{aligned}
> \left| f\left(x\right)g\left(x\right)-f\left(x_0\right)g\left(x_0\right) \right|&\le \left| f\left(x\right) \right|\left| g\left(x\right)-g\left(x_0\right) \right|+\left| g\left(x_0\right) \right|\left| f\left(x\right)-f\left(x_0\right) \right|\\
> &<\left(\left| f\left(x_0\right) \right|+\left| g\left(x_0\right) \right|+1\right)\eta\le\varepsilon
> \end{aligned}
> $$
> 故$fg$在$x_0$处连续. 由于$x_0$是任取的, 可知$f+g,fg\in C\left(X\right)$.
> 
> 最后, 由于$t\mapsto\left| t \right|$连续, 可知$\left| f-g \right|\in C\left(X\right)$. 再由恒等式
> $$
> \min\left(f,g\right)=\frac{f+g-\left| f-g \right|}{2}
> $$
> 以及已经证明的和、积的连续性, 得到$\min\left(f,g\right)\in C\left(X\right)$.



> [!exercise] 5
> 设 $X$ 为 LCHS。称 $f\in C(X)$ 满足条件 $(*)$，是指
> $$
> \forall \varepsilon>0,\quad \{x:|f(x)|\geq\varepsilon\}\text{ 为紧集。}\tag{*}
> $$
> 如记
> $$
> C_0(X)=\{f\in C(X):f\text{ 满足 }(*)\},
> $$
> 试证 $C_0(X)=\overline{C_c(X)}$。这里，$C_0(X)$ 为线性赋范空间，赋有范数
> $$
> \|f\|_c=\max\{|f(x)|:x\in X\}.
> $$

> [!proof] 
> 首先, 若$f\in C_0\left(X\right)$且$f\not\equiv 0$, 取$a>0$使得
> $$
> K_a=\left\{ x\in X:\left| f\left(x\right) \right|\ge a \right\}\ne\varnothing
> $$
> 由于$K_a$紧, $\left| f \right|$在$K_a$上达到最大值, 而在$X\setminus K_a$上, $\left| f \right|<a$. 因此这个最大值也是$\left| f \right|$在$X$上的最大值. 当$f\equiv 0$时结论显然成立, 故题设中的范数是有意义的. 下文中的闭包均关于一致范数而言.
> 
> 先设$f\in\overline{C_c\left(X\right)}$. 则存在$f_n\in C_c\left(X\right)$一致收敛到$f$, 由第1题可知$f\in C\left(X\right)$. 任取$\varepsilon>0$, 取$g\in C_c\left(X\right)$使得
> $$
> \sup_{x\in X}\left| f\left(x\right)-g\left(x\right) \right|<\frac{\varepsilon}{2}
> $$
> 记
> $$
> K_\varepsilon=\left\{ x\in X:\left| f\left(x\right) \right|\ge\varepsilon \right\}
> $$
> 对于任意的$x\in K_\varepsilon$,
> $$
> \left| g\left(x\right) \right|\ge\left| f\left(x\right) \right|-\left| f\left(x\right)-g\left(x\right) \right|>\frac{\varepsilon}{2}
> $$
> 因此$K_\varepsilon\subseteq\operatorname{supp}g$. 由于$f$连续, $K_\varepsilon$是闭集, 又$\operatorname{supp}g$紧, 故$K_\varepsilon$作为紧集的闭子集也是紧的. 这表明$f\in C_0\left(X\right)$, 从而
> $$
> \overline{C_c\left(X\right)}\subseteq C_0\left(X\right)
> $$
> 
> 反之, 设$f\in C_0\left(X\right)$. 对于每个$n\in\mathbb{N}$, 定义
> $$
> f_n\left(x\right)=\max\left\{f\left(x\right)-\frac{1}{n},0\right\}+\min\left\{f\left(x\right)+\frac{1}{n},0\right\}
> $$
> 由第2题以及$\max\left(u,v\right)=-\min\left(-u,-v\right)$, 可知$f_n$连续. 又
> $$
> \left\{x\in X:f_n\left(x\right)\ne 0\right\}=\left\{x\in X:\left| f\left(x\right) \right|>\frac{1}{n}\right\}
> $$
> 因此
> $$
> \operatorname{supp}f_n=\overline{\left\{x\in X:\left| f\left(x\right) \right|>\frac{1}{n}\right\}}\subseteq\left\{x\in X:\left| f\left(x\right) \right|\ge\frac{1}{n}\right\}
> $$
> 右侧的集合紧, 而$\operatorname{supp}f_n$闭, 故$\operatorname{supp}f_n$紧. 于是$f_n\in C_c\left(X\right)$.
> 
> 根据$f_n$的定义, 对于任意的$x\in X$,
> $$
> \left| f\left(x\right)-f_n\left(x\right) \right|=\min\left\{\left| f\left(x\right) \right|,\frac{1}{n}\right\}\le\frac{1}{n}
> $$
> 这表明$f_n$一致收敛到$f$, 因此$f\in\overline{C_c\left(X\right)}$. 综上可知
> $$
> C_0\left(X\right)=\overline{C_c\left(X\right)}
> $$



> [!exercise] 8
> 证明引理 2.4.1 的结论对 $\sigma$ 有限的 Borel 集 $E$ 也成立。


> [!lemma] 引理 2.4.1
> 设$X$为LCHS, $\mu$为$X$上的Radon测度. 若
> $$
> E\in\mathcal{B}\left(X\right),\quad \mu\left(E\right)<\infty
> $$
> 则
> $$
> \mu\left(E\right)=\sup\left\{\mu\left(K\right):K\subseteq E,\ K\text{ 为紧集}\right\}
> $$

> [!proof] 
> 由于$E$是$\sigma$有限的Borel集, 可取Borel集列$\left\{ A_n \right\}_{n=1}^{\infty}$, 使得
> $$
> E=\bigcup_{n=1}^{\infty}A_n,\quad \mu\left(A_n\right)<\infty
> $$
> 令
> $$
> E_n=\bigcup_{k=1}^{n}A_k
> $$
> 则$E_n\in\mathcal{B}\left(X\right)$, $E_n\uparrow E$, 且
> $$
> \mu\left(E_n\right)\le\sum_{k=1}^{n}\mu\left(A_k\right)<\infty
> $$
> 因此可以对每个$E_n$应用引理2.4.1, 得到
> $$
> \begin{aligned}
> \mu\left(E_n\right)&=\sup\left\{\mu\left(K\right):K\subseteq E_n,\ K\text{ 为紧集}\right\}\\
> &\le\sup\left\{\mu\left(K\right):K\subseteq E,\ K\text{ 为紧集}\right\}
> \end{aligned}
> $$
> 令$n\to\infty$, 由测度的下连续性,
> $$
> \mu\left(E\right)=\lim_{n\to\infty}\mu\left(E_n\right)\le\sup\left\{\mu\left(K\right):K\subseteq E,\ K\text{ 为紧集}\right\}
> $$
> 另一方面, 由于$X$是Hausdorff空间, 紧集$K$是闭集, 从而是Borel集. 对于任意的紧集$K\subseteq E$, 由测度的单调性有$\mu\left(K\right)\le\mu\left(E\right)$, 因此
> $$
> \sup\left\{\mu\left(K\right):K\subseteq E,\ K\text{ 为紧集}\right\}\le\mu\left(E\right)
> $$
> 综上可知
> $$
> \mu\left(E\right)=\sup\left\{\mu\left(K\right):K\subseteq E,\ K\text{ 为紧集}\right\}
> $$
> 故引理的结论对于$\sigma$有限的Borel集$E$仍然成立.


