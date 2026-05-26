# 第三章 紧算子与 Fredholm 算子

在无穷维 Banach 空间中有一类特殊的线性算子, 它的性质与有限维空间中的矩阵很类似, 这就是紧算子. 它在积分方程理论和各种数学物理问题的研究中起着核心的作用.

关于线性代数方程的可解性结果可以推广到含紧算子的线性方程中去, 这就是 Riesz-Fredholm 理论. 它自然包括了带连续核的线性积分方程的可解性结果. 进一步, 为了解决带奇异核的积分方程的可解性问题, 引出 Fredholm 算子的概念.

对于紧算子的特征值问题可以讨论得比较透彻, 这个结果通常称为 Riesz-Schauder 理论.

## §1 紧算子的定义和基本性质

> [!definition] 定义 3.1.1
> 设 $\mathscr{X}$, $\mathscr{Y}$ 是 $B$ 空间, $A:\mathscr{X}\to\mathscr{Y}$ 线性. 称 $A$ 是紧算子, 如果 $\overline{A(B_1)}$ 在 $\mathscr{Y}$ 中是紧集, 其中 $B_1$ 是 $\mathscr{X}$ 中的单位球. 一切紧算子的集合记作 $\mathfrak{E}(\mathscr{X},\mathscr{Y})$, 当 $\mathscr{X}=\mathscr{Y}$ 时, 记作 $\mathfrak{E}(\mathscr{X})$.

> [!remark] 注 1
> 为了 $A\in\mathfrak{E}(\mathscr{X},\mathscr{Y})$, 必须且仅须: 对于 $\mathscr{X}$ 中的任意有界集 $B$, $\overline{A(B)}$ 在 $\mathscr{Y}$ 中是紧集.

> [!remark] 注 2
> 为了 $A\in\mathfrak{E}(\mathscr{X},\mathscr{Y})$, 必须且仅须: 对任意有界点列 $\{x_n\}\subset\mathscr{X}$, $\{Ax_n\}$ 中有收敛子列.

> [!proposition] 命题 3.1.2
> 关于紧算子有下列简单性质:
> 
> (1) $\mathfrak{E}(\mathscr{X},\mathscr{Y})\subset\mathscr{L}(\mathscr{X},\mathscr{Y})$.
> 
> (2) 若 $A,B\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, $\alpha,\beta\in\mathbb{C}$, 则 $\alpha A+\beta B\in\mathscr{C}(\mathscr{X},\mathscr{Y})$.
>
> (3) $\mathscr{C}(\mathscr{X},\mathscr{Y})$ 在 $\mathscr{L}(\mathscr{X},\mathscr{Y})$ 中闭.
> 
> (4) 设 $A\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, 又设 $\mathscr{X}_0\subset\mathscr{X}$ 是一个闭线性子空间, 那么 $A_0\triangleq A|_{\mathscr{X}_0}\in\mathscr{C}(\mathscr{X}_0,\mathscr{Y})$.
> (5) 若 $A\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, 则 $R(A)$ 可分.
> 
> (6) 若 $A\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 而 $B\in\mathscr{L}(\mathscr{Y},\mathscr{Z})$, 并且这两个算子中有一个是紧的, 则 $BA\in\mathscr{C}(\mathscr{X},\mathscr{Z})$.

> [!proof]- Proof of (1)
> 因为 $y\mapsto\|y\|$ 是连续的, 所以若 $A\in\mathfrak{E}(\mathscr{X},\mathscr{Y})$, 则
>
> $M\triangleq\sup_{x\in B_1}\|Ax\|=\max_{y\in\overline{A(B_1)}}\|y\|<\infty\implies\|Ax\|\le M\|x\|\;(\forall x\in\mathscr{X})$.

> [!proof]- Proof of (3)
> 设 $T_n\in\mathscr{C}(\mathscr{X},\mathscr{Y})\;(n=1,2,\cdots)$, 且 $\|T_n-T\|\to0\;(n\to\infty)$, 要证: $T\in\mathscr{C}(\mathscr{X},\mathscr{Y})$. $\forall\varepsilon>0$, 取 $n\in\mathbb{N}$, 使得
>
> $\|T_n-T\|<\varepsilon/2$.
>
> 对 $\overline{T_n(B_1)}$ 取有穷的 $\varepsilon/2$ 网, 设它为 $\{y_1,y_2,\cdots,y_m\}$, 则
>
> $\overline{T(B_1)}\subset\bigcup_{i=1}^m B(y_i,\varepsilon)$.
>
> 从而 $\overline{T(B_1)}$ 有有穷的 $\varepsilon$ 网, 即得 $\overline{T(B_1)}$ 紧. $\blacksquare$

> [!proof]- Proof of (5)
> $R(A)=\bigcup_{n=1}^\infty nA(B_1)$, 由 $A(B_1)$ 列紧, 推出 $R(A)$ 可分. $\blacksquare$

> [!proof]- Proof of (6)
> 因为连续线性算子把有界集映为有界集, 把紧集映为紧集. $\blacksquare$

与紧性概念密切有关的是全连续概念.

> [!definition] 定义 3.1.3
> 称 $A\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 是全连续的, 如果
>
> $x_n\rightharpoonup x$(弱) $\implies Ax_n\to Ax$ (强) $(n\to\infty)$.

> [!proposition] 命题 3.1.4
> 若 $A\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, 则 $A$ 是全连续的; 反之, 若 $\mathscr{X}$ 是自反的, 并且 $A$ 是全连续的, 则 $A\in\mathscr{C}(\mathscr{X},\mathscr{Y})$.

> [!proof]-
> 必要性. 设 $x_n\rightharpoonup x\;(n\to\infty)$, 要证: $Ax_n\to Ax=y\;(n\to\infty)$. 用反证法, 倘若不然, 则 $\exists\varepsilon_0>0$, 及 $\{n_i\}$, 使得
>
> $\|Ax_{n_i}-y\|\ge\varepsilon_0$.
>
> 由共鸣定理 (定理 2.3.16), $\{x_n\}$ 有界. 又由 $A$ 紧, 从 $\{x_{n_i}\}$ 中又可抽出子列, 不妨仍记作 $\{x_{n_i}\}$, 使得 $Ax_{n_i}\to z$. 但
>
> $\langle y^*,Ax_{n_i}-y\rangle=\langle A^*y^*,x_{n_i}-x\rangle\to0\quad(\forall y^*\in\mathscr{Y}^*)$,
>
> 即 $Ax_{n_i}\rightharpoonup y$, 从而 $y=z$, 这便导出矛盾.
>
> 充分性. 利用 Eberlein-Šmulian 定理 (定理 2.5.28), 若 $\{x_n\}$ 有界, 则必有子列 $x_{n_i}\rightharpoonup x$. 由 $A$ 全连续推得 $Ax_{n_i}\to Ax$, 故 $A$ 紧. $\blacksquare$

> [!theorem] 定理 3.1.5
> $T\in\mathscr{C}(\mathscr{X},\mathscr{Y})\iff T^*\in\mathscr{C}(\mathscr{Y}^*,\mathscr{X}^*)$.

> [!proof]-
> 必要性. 要证: 若 $y_n^*\in B_1^*$ ($\mathscr{Y}^*$ 中的单位球), 则 $\{T^*y_n^*\}$ 中有收敛子列. 对 $\forall n\in\mathbb{N}$, 令
>
> $\varphi_n(y)\triangleq\langle y_n^*,y\rangle\quad(\forall y\in\overline{T(B_1)})$,
>
> 显然 $\varphi_n\in C(\overline{T(B_1)})\;(\forall n\in\mathbb{N})$, 我们只要证明 $\{\varphi_n\}$ 作为 $C(\overline{T(B_1)})$ 上的函数列有一致收敛的子列就够了. 事实上, 我们有
>
> $|\varphi_n(y)|\le\|y_n^*\|\cdot\|y\|\le\|T\|\quad(\forall n\in\mathbb{N},\forall y\in\overline{T(B_1)})$
>
> 及
>
> $|\varphi_n(y)-\varphi_n(z)|\le\|y_n^*\|\cdot\|y-z\|\le\|y-z\|$
>
> $(\forall n\in\mathbb{N},\forall y,z\in\overline{T(B_1)})$, 这两个式子分别表明 $\{\varphi_n\}$ 是一致有界和等度连续的. 由 Arzelà-Ascoli 定理 (定理 1.3.16), $\{\varphi_n\}$ 中有子列在 $C(\overline{T(B_1)})$ 中收敛, 即得 $\{T^*y_n^*\}$ 中有子列收敛.
>
> 充分性. 用必要性的结论, 可见 $T^{**}\in\mathscr{C}(\mathscr{X}^{**},\mathscr{Y}^{**})$, 但 $T=T^{**}|_{\mathscr{X}}$, 直接应用命题 3.1.2(4), 即得结论. $\blacksquare$

以下给出紧算子的例子.

> [!example] 例 3.1.6
> 设 $\Omega\subset\mathbb{R}^n$ 是一个有界闭集, $K\in C(\Omega\times\Omega)$, 取 $\mathscr{X}=\mathscr{Y}=C(\Omega)$. 若令
>
> $T:u\mapsto\int_\Omega K(x,y)u(y)\,dy\quad(\forall u\in C(\Omega))$,
>
> 则 $T\in\mathscr{C}(\mathscr{X})$.

> [!proof]-
> 只需证 $\overline{T(B_1)}$ 是紧的, 为此用 Arzelà-Ascoli 定理 (定理 1.3.16). 若
>
> $M\triangleq\max_{x,y\in\Omega}|K(x,y)|$,
>
> 则有 $\|Tu\|\le M\|u\|\operatorname{mes}(\Omega)$. 又对 $\forall\varepsilon>0$, 由 $K(x,y)$ 在 $\Omega\times\Omega$ 中的一致连续性, $\exists\delta>0$, 使得对 $\forall y\in\Omega$, 有
>
> $|K(x,y)-K(x',y)|<\varepsilon$ (当 $|x-x'|<\delta$),
>
> 从而
>
> $|(Tu)(x)-(Tu)(x')|\le\int_\Omega|K(x,y)-K(x',y)|\cdot|u(y)|\,dy\le\varepsilon\|u\|\operatorname{mes}(\Omega)$ (当 $|x-x'|<\delta$). $\blacksquare$

> [!example] 例 3.1.7
> 设 $\Omega\subset\mathbb{R}^n$ 是一个有界开区域, 又设 $A\in\mathscr{L}(H_0^1(\Omega))$ 满足
>
> $\|Au\|_{H_0^1(\Omega)}\le C\|u\|_{L^2(\Omega)}$,
>
> 其中 $C$ 是一个常数, 那么 $A\in\mathscr{C}(H_0^1(\Omega))$.

> [!proof]-
> 由 Rellich 定理 (定理 4.5.10), $\iota:H_0^1(\Omega)\to L^2(\Omega)$ 是紧嵌入, 又 $A:L^2(\Omega)\to H_0^1(\Omega)$ 连续, 应用命题 3.1.2(6) 即得结论. $\blacksquare$

以下讨论紧算子的构造.

> [!definition] 定义 3.1.8
> 设 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 若 $\dim R(T)<\infty$, 则称 $T$ 是有穷秩算子, 一切有穷秩算子的集合记作 $F(\mathscr{X},\mathscr{Y})$. 显然有
>
> $F(\mathscr{X},\mathscr{Y})\subset\mathscr{C}(\mathscr{X},\mathscr{Y})$.

> [!definition] 定义 3.1.9
> 设 $f\in\mathscr{X}^*$, $y\in\mathscr{Y}$, 用 $y\otimes f$ 表示下列算子:
>
> $x\mapsto\langle f,x\rangle y\quad(\forall x\in\mathscr{X})$,
>
> 称它为秩 1 算子.

我们用秩 1 算子表示 $F(\mathscr{X},\mathscr{Y})$, 有下面的定理.

> [!theorem] 定理 3.1.10
> 为了 $T\in F(\mathscr{X},\mathscr{Y})$, 必须且仅须: $\exists y_i\in\mathscr{Y}$ 以及 $f_i\in\mathscr{X}^*\;(i=1,2,\cdots,n)$, 使得
>
> $T=\sum_{i=1}^n y_i\otimes f_i$.

> [!proof]-
> 充分性是因为 $R(T)=\operatorname{span}\{y_1,y_2,\cdots,y_n\}$. 下证必要性. 在 $R(T)$ 上取基 $\{y_1,y_2,\cdots,y_n\}$, 则 $\forall x\in\mathscr{X}$, $\exists!\{l_i(x)\}_{i=1}^n$, 使得
>
> $Tx=\sum_{i=1}^n l_i(x)y_i$.
>
> 下证 $l_i\;(i=1,2,\cdots,n)$ 是 $\mathscr{X}$ 上的连续线性泛函:
>
> (1) $l_i\;(i=1,2,\cdots,n)$ 是线性的. 这是由于 $T$ 的线性及 $l_i$ 表示的唯一性.
>
> (2) $l_i\;(i=1,2,\cdots,n)$ 是有界的. 事实上, 注意到 $\|Tx\|$ 及 $\sum_{i=1}^n|l_i(x)|$ 都是 $R(T)$ 上的范数, 而 $\dim R(T)<\infty$, 所以它们必须是等价范数. 于是 $\exists M>0$, 使得
>
> $\sum_{i=1}^n|l_i(x)|\le M\|Tx\|\le M\|T\|\cdot\|x\|\quad(\forall x\in\mathscr{X})$.
>
> 因此, $\exists f_i\in\mathscr{X}^*\;(i=1,2,\cdots,n)$, 使得
>
> $\langle f_i,x\rangle=l_i(x)\quad(\forall x\in\mathscr{X})\;(i=1,2,\cdots,n)$.
>
> 于是有
>
> $Tx=\sum_{i=1}^n y_i\langle f_i,x\rangle=\bigl(\sum_{i=1}^n y_i\otimes f_i\bigr)(x)\quad(\forall x\in\mathscr{X})$. $\blacksquare$

回过来研究 $\mathscr{C}(\mathscr{X},\mathscr{Y})$ 的构造, 因为 $F(\mathscr{X},\mathscr{Y})\subset\mathscr{C}(\mathscr{X},\mathscr{Y})$, 我们问: $\overline{F(\mathscr{X},\mathscr{Y})}=\mathscr{C}(\mathscr{X},\mathscr{Y})$ 对吗? 以下不妨设 $\mathscr{Y}=\mathscr{X}$.

(1) 若 $\mathscr{X}$ 是一个 Hilbert 空间, 这是对的. 事实上, 因为 $\forall T\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, $\overline{T(B_1)}$ 紧, 所以对 $\forall\varepsilon>0$ 存在有穷的 $\varepsilon/2$ 网 $\{y_1,y_2,\cdots,y_n\}$, 即

$\overline{T(B_1)}\subset\bigcup_{i=1}^n B(y_i,\varepsilon/2)$.

令 $E_\varepsilon=\operatorname{span}\{y_1,y_2,\cdots,y_n\}$, 并令 $P_\varepsilon$ 为 $E_\varepsilon$ 上的正交投影, 那么 $P_\varepsilon T\in F(\mathscr{X},\mathscr{Y})$, 并且 $\forall x\in B_1$, $\exists y_i\;(1\le i\le n)$, 使得

$\|Tx-y_i\|<\varepsilon/2$,

从而

$\|P_\varepsilon Tx-y_i\|=\|P_\varepsilon(Tx-y_i)\|<\varepsilon/2$.

由此推得

$\|Tx-P_\varepsilon Tx\|<\varepsilon\quad(\forall x\in B_1)$,

即 $\|T-P_\varepsilon T\|\le\varepsilon$.

(2) 若 $\mathscr{X}$ 是 Banach 空间, 利用命题 3.1.2(5), 我们只需限于考虑可分空间就够了.

> [!definition] 定义 3.1.11
> 设 $\mathscr{X}$ 是可分的 Banach 空间, 称 $\{e_n\}_{n=1}^\infty\subset\mathscr{X}$ 为 $\mathscr{X}$ 的一组 Schauder 基是指: $\forall x\in\mathscr{X}$, 存在唯一的一个序列 $\{C_n(x)\}$, 使得
>
> $x=\lim_{N\to\infty}\sum_{n=1}^N C_n(x)e_n$ (于 $\mathscr{X}$).

由于 $\forall n\in\mathbb{N}$, $x\mapsto C_n(x)$ 对应的唯一性, $C_n(x)$ 是 $\mathscr{X}$ 上的线性函数. 我们先给出一个引理.

> [!lemma] 引理 3.1.12
> $C_n(x)\;(\forall n\in\mathbb{N})$ 是 $\mathscr{X}$ 上的连续泛函.

我们后面再证引理 3.1.12, 下面先利用此引理证明一个定理.

> [!theorem] 定理 3.1.13
> 若可分 $B$ 空间 $\mathscr{X}$ 上有一组 Schauder 基, 则 $\overline{F(\mathscr{X})}=\mathscr{C}(\mathscr{X})$.

> [!proof]-
> (1) $\forall N\in\mathbb{N}$, 令
> $S_N x=\sum_{n=1}^N C_n(x)e_n\quad(\forall x\in\mathscr{X})$,
> 并令 $R_N=I-S_N$, 则由共鸣定理 (定理 2.3.16), $\exists M>0$, 使得 $\|S_N\|\le M$, 从而 $\|R_N\|\le 1+M$.
>
> (2) 若 $T\in\mathscr{C}(\mathscr{X})$, $\forall\varepsilon>0$, 要找有穷秩算子 $T_\varepsilon$, 使得 $\|T-T_\varepsilon\|<\varepsilon$, 因 $\overline{T(B_1)}$ 紧, 存在有穷的 $\varepsilon/[3(M+1)]$ 网 $\{y_1,y_2,\cdots,y_m\}$, 即 $\forall x\in B_1$, 有 $y_i\;(1\le i\le m)$, 使得
>
> $\|Tx-y_i\|<\varepsilon/[3(M+1)]$. $\quad$(3.1.1)
>
> 又由 Schauder 基的定义 (定义 3.1.11), $\exists N\in\mathbb{N}$, 使得
>
> $\|y_j-S_N y_j\|<\varepsilon/3\quad(j=1,2,\cdots,m)$. $\quad$(3.1.2)
>
> 但因 $\|S_N\|\le M$, 所以由 (3.1.1) 式有
>
> $\|S_N(Tx)-S_N y_i\|<\frac{M}{3(M+1)}\varepsilon$. $\quad$(3.1.3)
>
> 联合不等式 (3.1.1), (3.1.2), (3.1.3) 就有
>
> $\|Tx-(S_N T)x\|<\varepsilon\quad(\forall x\in B_1)$.
>
> 取 $T_\varepsilon=S_N T$ 即得所求. $\blacksquare$

**引理 3.1.12 的证明** 在 $\mathscr{X}$ 上引入另一个范数:

$\lvert\lvert\lvert x\rvert\rvert\rvert=\sup_{N\in\mathbb{N}}\|S_N x\|$,

其中 $S_N x=\sum_{n=1}^N C_n(x)e_n\;(\forall x\in\mathscr{X})$. 不难验证 $\mathscr{X}$ 按 $\lvert\lvert\lvert\cdot\rvert\rvert\rvert$ 是完备的, 并且

$\|x\|=\lim_{N\to\infty}\|S_N x\|\le\lvert\lvert\lvert x\rvert\rvert\rvert\quad(\forall x\in\mathscr{X})$.

由等价范数定理 (推论 2.3.14) $\exists M_1>0$, 使得

$\lvert\lvert\lvert x\rvert\rvert\rvert\le M_1\|x\|\quad(\forall x\in\mathscr{X})$.

于是对 $\forall n\in\mathbb{N}$, 我们有

$\|C_n(x)e_n\|=\|S_n x-S_{n-1}x\|\le 2\lvert\lvert\lvert x\rvert\rvert\rvert\le 2M_1\|x\|\quad(\forall x\in\mathscr{X})$.

由此可见, $\forall n\in\mathbb{N}$,

$|C_n(x)|\le 2M_1\|e_n\|^{-1}\cdot\|x\|\quad(\forall x\in\mathscr{X})$.

故 $C_n(x)$ 是连续的 $(n=1,2,\cdots)$.

Banach 在 1932 年提出一个问题: 是否每个可分的 Banach 空间都具有 Schauder 基? 如果这个结论是对的, 那么便能推出 $\overline{F(\mathscr{X})}=\mathscr{C}(\mathscr{X})$. 然而到了 1973 年, Enflo 做出了否定的回答: 存在一个可分的 Banach 空间和其上的一个紧算子, 这个紧算子不能被有穷秩算子所逼近.① 不久, Davie 给出了一个较简单的证明.②

**习 题**

3.1.1 设 $\mathscr{X}$ 是一个无穷维 $B$ 空间, 求证: 若 $A\in\mathscr{C}(\mathscr{X})$, 则 $A$ 没有有界逆.

3.1.2 设 $\mathscr{X}$ 是一个 $B$ 空间, $A\in\mathscr{L}(\mathscr{X})$ 满足

$\|Ax\|\ge\alpha\|x\|\quad(\forall x\in\mathscr{X})$,

其中 $\alpha$ 是正常数. 求证: $A\in\mathscr{C}(\mathscr{X})$ 的充要条件是 $\mathscr{X}$ 是有穷维的.

3.1.3 设 $\mathscr{X},\mathscr{Y}$ 是 $B$ 空间, $A\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, $K\in\mathscr{C}(\mathscr{X},\mathscr{Y})$, 如果 $R(A)\subset R(K)$, 求证: $A\in\mathscr{C}(\mathscr{X},\mathscr{Y})$.

3.1.4 设 $H$ 是 Hilbert 空间, $A:H\to H$ 是紧算子, 又设 $x_n\rightharpoonup x_0$, $y_n\rightharpoonup y_0$, 求证:

$(x_n,Ay_n)\to(x_0,Ay_0)\quad(n\to\infty)$.

3.1.5 设 $\mathscr{X},\mathscr{Y}$ 是 $B$ 空间, $A\in\mathscr{L}(\mathscr{X},\mathscr{Y})$, 如果 $R(A)$ 闭且 $\dim R(A)=\infty$, 求证: $A\notin\mathscr{C}(\mathscr{X},\mathscr{Y})$.

3.1.6 设 $\omega_n\in\mathbb{K}$, $\omega_n\to0\;(n\to\infty)$, 求证: 映射

$T:\{\xi_n\}\mapsto\{\omega_n\xi_n\}\quad(\forall\{\xi_n\}\in\ell^p)$

是 $\ell^p\,(p\ge 1)$ 上的紧算子.

3.1.7 设 $\Omega\subset\mathbb{R}^n$ 是一个可测集, 又设 $f$ 是 $\Omega$ 上的有界可测函数, 求证: $F:x(t)\mapsto f(t)x(t)$ 是 $L^2(\Omega)$ 上的紧算子, 当且仅当 $f=0$ (a.e. 于 $\Omega$).

3.1.8 设 $\Omega\subset\mathbb{R}^n$ 是一个可测集, 又设 $K\in L^2(\Omega\times\Omega)$, 求证:

$A:u(x)\mapsto\int_\Omega K(x,y)u(y)\,dy\quad(\forall u\in L^2(\Omega))$

是 $L^2(\Omega)$ 上的紧算子.

3.1.9 设 $H$ 是 Hilbert 空间, $A\in\mathscr{C}(H)$, $\{e_n\}$ 是 $H$ 的正交规范集, 求证: $\lim_{n\to\infty}(Ae_n,e_n)=0$.

3.1.10 设 $\mathscr{X}$ 是 $B$ 空间, $A\in\mathscr{C}(\mathscr{X})$, $\mathscr{X}_0$ 是 $\mathscr{X}$ 的闭子空间并使得 $A(\mathscr{X}_0)\subset\mathscr{X}_0$, 求证: 映射

$T:[x]\mapsto[Ax]$

是商空间 $\mathscr{X}/\mathscr{X}_0$ 上的紧算子.

3.1.11 设 $\mathscr{X},\mathscr{Y},\mathscr{Z}$ 是 $B$ 空间, $\mathscr{X}\subset\mathscr{Y}\subset\mathscr{Z}$, 如果 $\mathscr{X}\to\mathscr{Y}$ 的嵌入映射是紧的, $\mathscr{Y}\to\mathscr{Z}$ 的嵌入映射是连续的, 求证: $\forall\varepsilon>0$, $\exists c(\varepsilon)>0$, 使得

$\|x\|_{\mathscr{Y}}\le\varepsilon\|x\|_{\mathscr{X}}+c(\varepsilon)\|x\|_{\mathscr{Z}}\quad(\forall x\in\mathscr{X})$.

## §2 Riesz-Fredholm 理论

本节研究与紧算子有关的算子方程的可解性问题, 具体地说, 设 $\mathscr{X}$ 是一个 B 空间, $A\in\mathfrak{C}(\mathscr{X})$, 又设 $T=I-A$, 其中 $I$ 表示恒同算子. 我们要问:

$$Tx=y \tag{3.2.1}$$

对哪些 $y\in\mathscr{X}$ 有解? 解的结构如何?

1. 从 $\mathscr{X}=\mathbb{R}^n$ 入手, 这是线性代数中早就研究过的. 记 $T=(t_{ij})_{n\times n}$, $x=\{x_j\}_{j=1}^n$, $y=\{y_i\}_{i=1}^n$. 我们知道: 为了方程 (3.2.1) 有解 $x$, 即

$$\sum_{j=1}^n t_{ij}x_j=y_i \quad (i=1,2,\dots,n),$$

必须且仅须

$$y=\sum_{j=1}^n x_j T_j,$$

其中 $T_j=\{t_{ij}\}_{i=1}^n\in\mathbb{R}^n$ $(j=1,2,\dots,n)$, 亦即 $y$ 可通过 $T_j$ $(j=1,2,\dots,n)$ 线性表出. 而这又等价于, 若 $z\in\mathbb{R}^n$, 则

$$z\perp y \Longleftrightarrow z\perp T_j \quad (j=1,2,\dots,n),$$

即

$$\langle z,y\rangle=0 \Longleftrightarrow \sum_{i=1}^n t_{ij}z_i=0 \quad (j=1,2,\dots,n). \tag{3.2.2}$$

**结论 1** 为了 $y\in\mathbb{R}^n$ 使方程 (3.2.1) 有解, 必须且仅须

$$\langle z,y\rangle=0 \quad (\forall z\in\mathbb{R}^n,\ \text{适合}\ T^*z=\theta),$$

其中 $T^*$ 表示 $T$ 的转置.

**结论 2** 关于方程 (3.2.1) 只有两种可能情形:
(1) 或者 $\forall y\in\mathbb{R}^n$, 方程 (3.2.1) 总有解, 而且是唯一的;
(2) 或者 $Tx=\theta$ 有非零解, 这时 $Tx=\theta$ 的非零解的极大线性无关组的个数与 $T^*x=\theta$ 的非零解的极大线性无关组的个数相等.

2. Fredholm 研究过下列积分方程: 设 $K\in C([0,1]\times[0,1])$, 考察方程

$$x(t)=\int_0^1 K(t,s)x(s)\,ds+y(t), \tag{3.2.3}$$

及其共轭方程

$$f(t)=\int_0^1 K(s,t)f(s)\,ds+g(t), \tag{3.2.4}$$

其中 $x,y,f,g\in L^2[0,1]$. 他得到如下结论.

**结论 1** 关于方程 (3.2.3) 只有两种可能情形:
(1) $\forall y\in L^2[0,1]$, 方程 (3.2.3) 存在唯一解 $x\in L^2[0,1]$;
(2) 当 $y=\theta$ 时, 方程 (3.2.3) 有非零解.

**结论 2** 方程 (3.2.4) 与方程 (3.2.3) 的情形一样, 即当方程 (3.2.3) 的第一种可能发生时, 方程 (3.2.4) 也发生第一种可能性; 方程 (3.2.3) 发生第二种可能时, 方程 (3.2.4) 也发生第二种可能性, 并且方程 (3.2.3) 与方程 (3.2.4) 对应的齐次方程的线性无关解的个数是相同的有穷数.

**结论 3** 在第二种可能性下, 为了方程 (3.2.3) 有解, 必须且仅须

$$\int_0^1 f(t)y(t)\,dt=0,$$

有关研究可见文献: Enflo Per, "A Counterexample to the Approximation Problem in Banach Spaces," Acta. Math. 130, No. 1 (1973): 309–317.
有关研究可见文献: Davie A. M., "The Approximation Problem for Banach Spaces," Bull. London Math. Soc. 5(1973): 261–266.

其中 $f$ 是方程 (3.2.4) 的齐次方程的解. 为了方程 (3.2.4) 有解, 必须且仅须

$$\int_0^1 g(t)x(t)\,dt=0,$$

其中 $x$ 是方程 (3.2.3) 的齐次方程的解.

3. 比较代数方程组与积分方程, 它们的结论竟然惊人地相似, 实际上, 它们是更为一般的算子方程的普遍结论的特殊情形. 我们先引进记号.

**记号** $\forall T\in\mathscr{L}(\mathscr{X})$, 记

$$R(T)\triangleq T(\mathscr{X}),$$

以及

$$N(T)\triangleq \{x\in\mathscr{X}\mid Tx=\theta\}.$$

又对任意的 $M\subset\mathscr{X}$, $N\subset\mathscr{X}^*$, 记

$${}^\perp M\triangleq \{f\in\mathscr{X}^*\mid \langle f,x\rangle=0,\ \forall x\in M\},$$
$$N^\perp\triangleq \{x\in\mathscr{X}\mid \langle f,x\rangle=0,\ \forall f\in N\}.$$

又若 $f\in\mathscr{X}^*$, $x\in\mathscr{X}$, 满足 $\langle f,x\rangle=0$, 便简单地记作

$$f\perp x.$$

由这些记号, 当 $T=I-A$ 时, 其中

$$A:x(t)\mapsto\int_0^1 K(t,s)x(s)\,ds,$$

三个 Fredholm 结论可以用简练的形式表达如下:

**结论 1** $N(T)=\{\theta\}\Longrightarrow R(T)=\mathscr{X}$.

**结论 2** $\sigma(A)=\sigma(A^*)$, 且

$$\dim N(T)=\dim N(T^*)<\infty.$$

**结论 3** $R(T)=N(T^*)^\perp$, $R(T^*)={}^\perp N(T)$.

以下我们对一般的 $T=I-A$ $(A\in\mathfrak{C}(\mathscr{X}))$ 证明上面三个 Fredholm 结论.

> [!theorem] 定理 3.2.1 (Riesz-Fredholm)
> 设 $\mathscr{X}$ 是 B 空间, $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 则
> (1) $\sigma(T)=\sigma(T^*)$;
> (2) $\dim N(T)=\dim N(T^*)<\infty$;

> (3) $R(T)=N(T^*)^\perp=\{x\in\mathscr{X}\mid f(x)=0,\ \forall f\in N(T^*)\}$,
> $R(T^*)={}^\perp N(T)=\{f\in\mathscr{X}^*\mid f(x)=0,\ \forall x\in N(T)\}$.

我们分几步来证明这个定理. 结论 (1) 对任意有界算子成立, 正是下面的定理.

> [!theorem] 定理 3.2.2
> 若 $T\in\mathscr{L}(\mathscr{X})$, 则 $\sigma(T)=\sigma(T^*)$.

> [!proof]- 证
> 只需证 $T^{-1}\in\mathscr{L}(\mathscr{X})\Longleftrightarrow (T^*)^{-1}\in\mathscr{L}(\mathscr{X}^*)$.
> 必要性. 因为 $(T^*)^{-1}=(T^{-1})^*$ (见习题 2.5.10), 所以结论是显然的.
> 充分性. 设 $(T^*)^{-1}\in\mathscr{L}(\mathscr{X}^*)$, 由必要性的结论推得 $(T^{**})^{-1}\in\mathscr{L}(\mathscr{X}^{**})$. 又因 $T=T^{**}|_{\mathscr{X}}$, 所以 $T$ 是 1–1 的, 并且 $R(T)\subset\mathscr{X}$ 是闭的.
>
> 再证 $R(T)=\mathscr{X}$. 倘若不然, 存在 $x_0\in\mathscr{X}\setminus R(T)$, $x_0\ne\theta$, 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $f\in\mathscr{X}^*$, 使得
> $$f(x_0)=\|x_0\|,\quad f(x)=0,\quad x\in R(T),$$
> 即
> $$0=f(Ty)=(T^*f)(y),\quad \forall y\in\mathscr{X}.$$
> 由此得 $T^*f=0$, 即 $f\in N(T^*)$, 从而 $f=\theta$, 矛盾. ■

> [!definition] 定义 3.2.3
> 称 $T\in\mathscr{L}(\mathscr{X})$ 是闭值域算子, 是指
> $$R(T)=\overline{R(T)}.$$

> [!theorem] 定理 3.2.4
> 若 $A\in\mathfrak{C}(\mathscr{X})$, 则 $T=I-A$ 是闭值域算子.

> [!proof]- 证
> 因为 $N(T)$ 是 $\mathscr{X}$ 的闭子空间, 考察
> $$\widetilde{T}:\mathscr{X}/N(T)\to\mathscr{X},\quad \widetilde{T}[x]\triangleq Tx.$$
> 显然 $R(\widetilde{T})=R(T)$, 并且 $\widetilde{T}$ 还是有界线性的, 满足 $N(\widetilde{T})=\{[\theta]\}$, 即 $\widetilde{T}$ 的逆算子存在. 为了证明 $R(T)$ 闭, 只需证 $\widetilde{T}^{-1}$ 是连续的.
> 用反证法, 倘若 $\widetilde{T}^{-1}$ 不连续, 那么 $\exists [w_n]\nrightarrow0$, 但 $\widetilde{T}[w_n]\to0$, 从而有子列 $\|[w_{n_k}]\|\ge\varepsilon>0$. 令 $[x_n]=[w_{n_k}]/\|[w_{n_k}]\|$, 则

> $$\|[x_n]\|=1\quad (n=1,2,\cdots),\quad \text{但}\quad \widetilde{T}[x_n]\to\theta\quad (n\to\infty).$$

> 因此对 $\forall n\in\mathbb{N}$, $\exists x_n\in[x_n]$, 使得
> $$\|x_n\|<2\quad (n=1,2,\cdots),\quad (I-A)x_n\to\theta\quad (n\to\infty).$$
> 由 $A$ 是紧的, 有子列 $\{x_{n_k}\}$, 使得 $Ax_{n_k}\to z$ $(k\to\infty)$, 从而

> $$x_{n_k}=Ax_{n_k}+(I-A)x_{n_k}\to z\quad (k\to\infty).$$
> 于是有 $Tz=\theta$, 即得 $[z]=[\theta]$. 因此
> $$\|[x_{n_k}]\|=\|[x_{n_k}-z]\|\le\|x_{n_k}-z\|\to0\quad (k\to\infty).$$
> 这与 $\|[x_{n_k}]\|=1$ 矛盾. ■

> [!theorem] 定理 3.2.5
> 若 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 且 $N(T)=\{\theta\}$, 则 $R(T)=\mathscr{X}$.

> [!proof]- 证
> 用反证法. 倘若不然, 做 $\mathscr{X}_0=\mathscr{X}$, $\mathscr{X}_k=T(\mathscr{X}_{k-1})$ $(k=1,2,\cdots)$, 那么因为 $\mathscr{X}_1\ne\mathscr{X}_0$, 且 $T$ 是 1–1 的, 可见
> $$\mathscr{X}_0\supsetneqq\mathscr{X}_1\supsetneqq\mathscr{X}_2\supsetneqq\cdots.$$
> 用 Riesz 引理 (引理 1.4.31), $\exists y_k\in\mathscr{X}_k$, $\|y_k\|=1$, 但

> $$\operatorname{dist}(y_k,\mathscr{X}_{k+1})\ge\frac12\quad (k=0,1,2,\cdots).$$
> 于是对 $\forall p,n\in\mathbb{N}$, 我们有
> $$\|Ay_n-Ay_{n+p}\|=\|y_n-Ty_n+Ty_{n+p}-y_{n+p}\|\ge\frac12.$$
> 这是因为
> $$Ty_n-Ty_{n+p}+y_{n+p}\in\mathscr{X}_{n+1}.$$
> 从而与 $A$ 的紧性矛盾. ■

> [!proof]- 定理 3.2.1 的证明 ($\dim N(T)=0$ 情形)
> 因 $\dim N(T)=0$, 由定理 3.2.5, $R(T)=\mathscr{X}$, 所以 $T$ 是 1–1 满射. 由 Banach 逆算子定理 (定理 2.3.8), $T^{-1}\in\mathscr{L}(\mathscr{X})$, 即有 $0\in\sigma(T)$. 又因 $\sigma(T)=\sigma(T^*)$, 所以 $T^*$ 也是 1–1 满射, 即
> $$\dim N(T^*)=0=\dim N(T),$$
> $$R(T^*)=\mathscr{X}^*={}^\perp N(T),$$
> $$R(T)=\mathscr{X}=\{0\}^\perp=N(T^*)^\perp.$$ ■

下面我们转向 (2) 和 (3) 的证明.

> [!lemma] 引理 3.2.6
> 若 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 则
> $$\dim N(T)<\infty,\quad \dim N(T^*)<\infty.$$

> [!proof]- 证
> 令 $\mathscr{X}_0=N(T)$, $B_1=\{x\in\mathscr{X}_0\mid \|x\|\le1\}$, 这时
> $$B_1=A(B_1).$$
> 因 $A$ 是紧算子, $B_1$ 是紧集, 从而
> $$\dim\mathscr{X}_0=\dim N(T)<\infty.$$
> 因 $T^*=I-A^*$, 同样证明: $\dim N(T^*)<\infty$. ■

设 $x_1,x_2,\cdots,x_n\in N(T)$ 为 $N(T)$ 的一组基, $f_1,f_2,\cdots,f_m\in N(T^*)$ 为 $N(T^*)$ 的一组基, 需要证 $n=m$.

> [!lemma] 引理 3.2.7
> 存在闭线性 $\mathscr{X}_1\subset\mathscr{X}$, 使得
> $$\mathscr{X}=\operatorname{span}\{x_1,x_2,\cdots,x_n\}\oplus\mathscr{X}_1.$$

> [!proof]- 证
> 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $g_1,g_2,\cdots,g_n\in\mathscr{X}^*$, 满足
> $$g_i(x_j)=\delta_{ij},\quad 1\le i,j\le n.$$
> 令 $\mathscr{X}_1=\bigcap_{i=1}^n N(g_i)$, 其中 $N(g)=\{x\in\mathscr{X}\mid g(x)=0\}$, 则 $\mathscr{X}_1$ 是闭线性的, 满足
> (1) $\operatorname{span}\{x_1,x_2,\cdots,x_n\}\cap\mathscr{X}_1=\{\theta\}$;
> (2) $\forall x\in\mathscr{X}$, 取 $c_i=g_i(x)$, 有 $x-\sum_{i=1}^n c_i x_i\in\mathscr{X}_1$.
> 从而有 $\mathscr{X}=\operatorname{span}\{x_1,x_2,\cdots,x_n\}\oplus\mathscr{X}_1$. ■

> [!lemma] 引理 3.2.8
> 存在 $y_1,y_2,\cdots,y_m\in\mathscr{X}$, 使得
> $$f_i(y_j)=\delta_{ij},\quad 1\le i,j\le m.$$

> [!proof]- 证
> 考察线性连续映射 $V:\mathscr{X}\to\mathbb{K}^m$ 如下:
> $$V:x\mapsto(\langle f_1,x\rangle,\langle f_2,x\rangle,\cdots,\langle f_m,x\rangle).$$
> 只要证明它是满射就够了. 如其不然, $V(\mathscr{X})$ 是 $\mathbb{K}^m$ 的一个真子空间. 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_m)\in\mathbb{K}^m\setminus\{0\}$, 使得 $\alpha$ 在 $V(\mathscr{X})$ 上为 0, 即
> $$(\alpha,V(x))_{\mathbb{K}^m}=0,\quad \forall x\in\mathscr{X},$$
> 亦即
> $$\Big\langle\sum_{j=1}^m\alpha_j f_j,x\Big\rangle=0,\quad \forall x\in\mathscr{X}.$$
> 从而 $\sum_{j=1}^m\alpha_j f_j=\theta$, 这与 $\{f_j\}_{j=1}^m$ 是 $N(T^*)$ 的一组基矛盾. ■

$\dim N(T)=\dim N(T^*)$ 的证明: 需证 $n=m$. 设 $n<m$, 考虑

$$\widetilde{T}:\mathscr{X}=\operatorname{span}\{x_1,x_2,\cdots,x_n\}\oplus\mathscr{X}_1\to\operatorname{span}\{y_1,y_2,\cdots,y_n\}\oplus R(T)\hookrightarrow\mathscr{X},$$

$$\widetilde{T}\Big(\sum_{i=1}^n c_i x_i+y\Big)=\sum_{i=1}^n c_i y_i+Ty.$$

从而根据前面结论, $\widetilde{T}$ 是满射. 但显然有 $y_m\notin R(\widetilde{T})$, 矛盾, 所以

$$\dim N(T^*)\le\dim N(T).$$

同样,

$$\dim N(T^{**})\le\dim N(T^*).$$

因

$$\dim N(T)\le\dim N(T^{**}),$$

所以有

$$\dim N(T)=\dim N(T^*).$$ ■

> [!lemma] 引理 3.2.9
> 若 $T\in\mathscr{L}(\mathscr{X})$, 则 $\overline{R(T)}=N(T^*)^\perp$.

> [!proof]- 证
> (1) $\overline{R(T)}\subset N(T^*)^\perp$. 对 $x\in\mathscr{X}$, $f\in N(T^*)$, 有
> $$f(Tx)=(T^*f)(x)=0,$$
> 即 $R(T)\subset N(T^*)^\perp$. 因 $N(T^*)^\perp$ 闭, 有 $\overline{R(T)}\subset N(T^*)^\perp$.
> (2) 设 $\overline{R(T)}\subsetneqq N(T^*)^\perp$, 取 $x_0\in N(T^*)^\perp$, $x_0\notin\overline{R(T)}$. 由 Hahn-Banach 定理 (定理 2.4.4), 存在 $f\in\mathscr{X}^*$, 满足
> $$f(x_0)=\|x_0\|\ne0,\quad f(x)=0,\quad \forall x\in\overline{R(T)}.$$
> 此时有
> $$f(Tx)=0,\quad \forall x\in\mathscr{X},$$
> 即 $T^*f=0$. 又有 $x_0\in N(T^*)^\perp$, 得 $f(x_0)=0$, 矛盾. ■

根据定理 3.2.4 和引理 3.2.9, 有

$$R(T)=\overline{R(T)}=N(T^*)^\perp=\{x\in\mathscr{X}\mid f(x)=0,\ \forall f\in N(T^*)\}.$$

$R(T^*)={}^\perp N(T)$ 的证明: 从前面 $\dim N(T)=\dim N(T^*)$ 知,

$$\dim N(T^{**})=\dim N(T^*)=\dim N(T).$$

因 $N(T)\subset N(T^{**})$, 有 $N(T^{**})=N(T)$, 则

$$R(T^*)=\overline{R(T^*)}=N(T^{**})^\perp={}^\perp N(T).$$ ■

从 Riesz-Fredholm 定理 (定理 3.2.1) 的证明中我们还可以得到下面的定理.

> [!theorem] 定理 3.2.10
> 设 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 则存在闭线性子空间 $\mathscr{X}_1$, 有限维子空间 $\mathscr{Y}_1$, $\dim\mathscr{Y}_1=\dim N(T)$, 使得
> $$\mathscr{X}=N(T)\oplus\mathscr{X}_1=\mathscr{Y}_1\oplus R(T).$$

> [!definition] 定义 3.2.11
> 设 $M\subset\mathscr{X}$ 是一个闭线性子空间, $\operatorname{codim}M\triangleq\dim(\mathscr{X}/M)$ 称为 $M$ 的余维数.

由 Riesz-Fredholm 定理 (定理 3.2.1), 有

> [!theorem] 定理 3.2.12
> 设 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 则
> $$\dim N(T)=\operatorname{codim}(R(T))<\infty.$$

习 题

> [!exercise] 3.2.1
> 设 $\mathscr{X}$ 是 B 空间, $M\subset\mathscr{X}$ 是一个闭线性子空间, $\operatorname{codim}M=n$, 求证: 存在线性无关集 $\{\varphi_k\}_{k=1}^n\subset\mathscr{X}^*$, 使得
> $$M=\bigcap_{k=1}^n N(\varphi_k).$$

> [!exercise] 3.2.2
> 设 $\mathscr{X},\mathscr{Y}$ 是两个 B 空间, $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 是满射的. 定义 $\widetilde{T}:\mathscr{X}/N(T)\to\mathscr{Y}$ 如下:
> $$\widetilde{T}[x]=Tx\quad (\forall x\in[x])\ (\forall [x]\in\mathscr{X}/N(T)).$$
> 求证: $\widetilde{T}$ 是线性同胚映射.

> [!exercise] 3.2.3
> 设 $\mathscr{X}$ 是 B 空间, $M,N_1,N_2$ 都是 $\mathscr{X}$ 的闭线性子空间, 如果
> $$M\oplus N_1=\mathscr{X}=M\oplus N_2,$$
> 求证: $N_1$ 和 $N_2$ 同胚.
> 提示 只要证明 $N_1$, $N_2$ 都与 $\mathscr{X}/M$ 同胚.

> [!exercise] 3.2.4
> 设 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 求证:
> (1) $\forall [x]\in\mathscr{X}/N(T)$, $\exists x_0\in[x]$, 使得 $\|x_0\|=\|[x]\|$;
> (2) 若 $y\in\mathscr{X}$, 使方程 $Tx=y$ 有解, 则其中必有一个解达到范数最小.

> [!exercise] 3.2.5
> 设 $A\in\mathfrak{C}(\mathscr{X})$, 且 $T=I-A$, $\forall k\in\mathbb{N}$, 求证:
> (1) $N(T^k)$ 是有穷维的;
> (2) $R(T^k)$ 是闭的.

> [!exercise] 3.2.6
> 设 $M$ 是 B 空间 $\mathscr{X}$ 的闭线性子空间, 称满足 $P^2=P$ (幂等性) 的由 $\mathscr{X}$ 到 $M$ 上的有界线性算子 $P$ 为由 $\mathscr{X}$ 到 $M$ 上的投影算子. 求证:
> (1) 若 $M$ 是 $\mathscr{X}$ 的有穷维线性子空间, 则必存在由 $\mathscr{X}$ 到 $M$ 上的投影算子;
> (2) 若 $P$ 是由 $\mathscr{X}$ 到 $M$ 上的投影算子, 则 $I-P$ 是由 $\mathscr{X}$ 到 $R(I-P)$ 上的投影算子;
> (3) 若 $P$ 是由 $\mathscr{X}$ 到 $M$ 上的投影算子, 则 $\mathscr{X}=M\oplus N$, 其中 $N=R(I-P)$;
> (4) 若 $A\in\mathfrak{C}(\mathscr{X})$, 且 $T=I-A$, 则在代数与拓扑同构意义下,
> $$N(T)\oplus\mathscr{X}/N(T)=\mathscr{X}=R(T)\oplus\mathscr{X}/R(T).$$

## §3 紧算子的谱理论
(Riesz-Schauder 理论)

这一节研究三个问题:
(1) 紧算子的谱的分布;
(2) 不变子空间;
(3) 紧算子的构造.

对应到矩阵, 每个问题都有清楚的答案:
(1) 矩阵有特征值, 其个数不大于空间的维数;
(2) 存在真不变子空间;
(3) 利用一列不变子空间, 可将矩阵化为 Jordan 标准形.

回顾第二章 §6, 这些问题是算子谱论的中心问题. 正如该节各例所示, 一般有界线性算子的谱集很复杂, 这些问题的答案通常是不完全的或不甚清楚的. 然而对于紧算子, 在本节中, 我们将进行详尽的讨论, 并得到满意的结果.

### 3.1 紧算子的谱

本小节考察问题 (1), 我们有如下定理.

> [!theorem] 定理 3.3.1
> 若 $A\in\mathfrak{C}(\mathscr{X})$, 则
> (1) $0\in\sigma(A)$, 除非 $\dim\mathscr{X}<\infty$;
> (2) $\sigma(A)\setminus\{0\}=\sigma_p(A)\setminus\{0\}$;

> (3) $\sigma_p(A)$ 至多以 $0$ 为聚点.

> [!proof]- Proof of (3)
> (1) 的证明见习题 3.1.1.
> (2) 是 Fredholm 结论 1.
> (3) 用反证法. 倘若有 $\lambda_n\in\sigma_p(A)\setminus\{0\}$ $(n=1,2,\cdots)$, $\lambda_n\ne\lambda_m$ (当 $n\ne m$), 并且 $\lambda_n\to\lambda\ne0$ $(n\to\infty)$, 那么
> $\exists x_n\in N(\lambda_n I-A)\setminus\{\theta\}$ $(n=1,2,\cdots)$.
>
> 我们有:
>
> $1^\circ$ $\{x_1,x_2,\cdots,x_n\}$ 是线性无关的. 事实上, 可用数学归纳法证明, 设此结论对 $n$ 已成立. 若有
> $x_{n+1}\in N(\lambda_{n+1} I-A)\setminus\{\theta\}$,
> 使得 $x_{n+1}=\sum_{i=1}^{n}\alpha_i x_i$, 则有
> $\lambda_{n+1}x_{n+1}=Ax_{n+1}=\sum_{i=1}^{n}\alpha_i\lambda_i x_i$,
> 从而
> $\sum_{i=1}^{n}\alpha_i(\lambda_{n+1}-\lambda_i)x_i=\theta$.
> 由归纳法假设 $\{x_1,x_2,\cdots,x_n\}$ 是线性无关的, 所以
> $(\lambda_{n+1}-\lambda_i)\alpha_i=0\Longrightarrow\alpha_i=0$ $(i=1,2,\cdots,n)$.
> 这与 $x_{n+1}\ne\theta$ 矛盾. 因此 $\{x_1,x_2,\cdots,x_{n+1}\}$ 是线性无关的.
>
> $2^\circ$ 若令 $E_n=\operatorname{span}\{x_1,x_2,\cdots,x_n\}$, 则 $E_n\subsetneqq E_{n+1}$, 应用 Riesz 引理 (引理 1.4.31), $\exists y_{n+1}\in E_{n+1}$, 使得
> $\|y_{n+1}\|=1$, 且 $\operatorname{dist}(y_{n+1},E_n)\ge\frac12$.
> 从而对 $\forall n,p\in\mathbb{N}$, 有
> $$\left\|\frac{1}{\lambda_{n+p}}Ay_{n+p}-\frac{1}{\lambda_n}Ay_n\right\|=\left\|y_{n+p}-\left(y_{n+p}-\frac{1}{\lambda_{n+p}}Ay_{n+p}+\frac{1}{\lambda_n}Ay_n\right)\right\|\ge\frac12.$$
> 这是因为
> $$y_{n+p}-\frac{1}{\lambda_{n+p}}Ay_{n+p}+\frac{1}{\lambda_n}Ay_n\in E_{n+p-1}.$$
> 这便与 $A$ 的紧性矛盾. ■

> [!remark] 注
> 本定理表明: 对于无穷维空间上的紧算子 $A$, 只有三种可能情形:
> (1) $\sigma(A)=\{0\}$;

> (2) $\sigma(A)=\{0,\lambda_1,\lambda_2,\cdots,\lambda_n\}$;
> (3) $\sigma(A)=\{\lambda_1,\lambda_2,\cdots,\lambda_n,\cdots\}$, 其中 $\lambda_n\to0$.
> 试举例说明: 这三种情形都可能发生.

### 3.2 不变子空间

本小节考察问题 (2).

> [!definition] 定义 3.3.2
> 设 $\mathscr{X}$ 是一个 $B$ 空间, $M\subset\mathscr{X}$ 称为算子 $A\in\mathscr{L}(\mathscr{X})$ 的不变子空间, 是指 $A(M)\subset M$.

由定义 3.3.2 可得如下命题.

> [!proposition] 命题 3.3.3
> 设 $\mathscr{X}$ 是一个 $B$ 空间, $A\in\mathscr{L}(\mathscr{X})$, 那么
> (1) $\{\theta\},\mathscr{X}$ 都是 $A$ 的不变子空间;
> (2) 若 $M$ 是 $A$ 的不变子空间, 则 $\overline{M}$ 也是 $A$ 的不变子空间;
> (3) 若 $\lambda\in\sigma_p(A)$, 即 $\lambda$ 是 $A$ 的特征值, 则 $N(\lambda I-A)$ 是 $A$ 的不变子空间;
> (4) $\forall y\in\mathscr{X}$, 若记 $L_y\triangleq\{P(A)y\mid P\text{ 是任意多项式}\}$, 则 $L_y$ 是 $A$ 的不变子空间.

当 $\dim\mathscr{X}=\infty$ 时, $\forall A\in\mathscr{L}(\mathscr{X})$, 是否一定存在着 $A$ 的一个非平凡的闭不变子空间 (所谓平凡是指: $M=\{\theta\}$ 或 $\mathscr{X}$)? 这是一个长期未解决的根本性问题, 直至 1984 年才由 Read 举出反例. 他表明存在一个无穷维的 Banach 空间 $\mathscr{X}$ 及一个线性算子 $A\in\mathscr{L}(\mathscr{X})$, 使 $A$ 没有非平凡的不变子空间.① 现在的问题是: 若 $\mathscr{X}$ 是 Hilbert 空间, $\dim\mathscr{X}=\infty$, 对 $\forall A\in\mathscr{L}(\mathscr{X})$, 是否存在着 $A$ 的非平凡的闭不变子空间? 然而对于紧算子, 有下面的定理.

①有关研究可见文献: Read C. J., "A Solution to the Invariant Subspace Problem," Bull. London Math. Soc. 16 (1984): 337–401.

> [!theorem] 定理 3.3.4
> 若 $\dim\mathscr{X}\geqslant 2$, 则 $\forall A\in\mathfrak{C}(\mathscr{X})$, $A$ 必有非平凡的闭不变子空间.

> [!proof]- 证
> 我们不妨设 $\dim\mathscr{X}=\infty$, $A\neq 0$, 并且 $\sigma_p(A)\setminus\{0\}=\varnothing$. 于是由定理 3.3.1, 有 $\sigma(A)=\{0\}$. 倘若 $A$ 没有非平凡的闭不变子空间, 则 $\forall y\in\mathscr{X}\setminus\{\theta\}$, 命题 3.3.3 中定义的 $L_y$ 蕴含
> $$\overline{L}_y=\mathscr{X}.$$
> 不妨设 $\|A\|=1$, 那么 $\exists x_0\in\mathscr{X}$, 使得 $\|Ax_0\|>1$. 于是 $\|x_0\|>1$, 取 $C\triangleq\overline{AB(x_0,1)}$, 便有 $C$ 是紧集, 并且
> $$\theta\notin C.$$
> 如今, $\forall y_0\in C$, 存在多项式 $T_{y_0}=P(A)$, 使得
> $$\|T_{y_0}y_0-x_0\|<1,$$
> 从而有 $\delta_{y_0}>0$, 使得
> $$\|T_{y_0}y-x_0\|<1\quad(\forall y\in B(y_0,\delta_{y_0})).$$
> 由于 $C$ 是紧的, 存在有穷覆盖
> $$\bigcup_{i=1}^{n}B(y_i,\delta_i)\supset C,$$
> 其中 $\delta_i\triangleq\delta_{y_i}\,(i=1,2,\cdots,n)$. 从而 $\forall y\in C$, $\exists i_1\,(1\leqslant i_1\leqslant n)$, 使得
> $$\|T_{i_1}y-x_0\|<1. \tag{3.3.1}$$
> 这里及以下我们都记 $T_i\triangleq T_{y_i}\,(i=1,2,\cdots,n)$.
> 
> 但因 (3.3.1) 式蕴含 $T_{i_1}y\in B(x_0,1)$, 所以 $AT_{i_1}y\in C$, 又 $\exists i_2\,(1\leqslant i_2\leqslant n)$, 使得
> $$\|T_{i_2}AT_{i_1}y-x_0\|<1.$$
> 
> 注意到 $T_{i_1}$ 是与 $A$ 可交换的多项式, 便得
> $$\|T_{i_2}T_{i_1}Ay-x_0\|<1.$$
> 如此继续下去, $\exists i_1,\cdots,i_k,\cdots$, 使得
> $$\Bigl\|\prod_{j=1}^{k+1}T_{i_j}(A^k y)-x_0\Bigr\|<1,$$
> 或者
> $$\Bigl\|\Bigl(\prod_{j=1}^{k+1}T_{i_j}\Bigr)(A^k y)\Bigr\|>\|x_0\|-1.$$
> 设 $\mu=\max\limits_{1\leqslant i\leqslant n}\|T_i\|$, 便得
> $$\|x_0\|-1\leqslant\mu^{k+1}\|A^k y\|\quad(\mu>0,\,k\in\mathbb{N}).$$
> 因此
> $$\frac{1}{\mu}\Bigl(\frac{\|x_0\|-1}{\mu\|y\|}\Bigr)^{\frac{1}{k}}\leqslant\Bigl(\frac{\|A^k y\|}{\|y\|}\Bigr)^{\frac{1}{k}}\leqslant\|A^k\|^{\frac{1}{k}}. \tag{3.3.2}$$
> 当 $k\to\infty$ 时, (3.3.2) 式左端极限是 $1/\mu$, 而右端极限是 $0$ (定理 2.6.12), 这便导出了矛盾. $\blacksquare$

### 3.3* 紧算子的结构

本小节研究问题 (3).

回忆矩阵分解为 Jordan 标准形的过程, 步骤如下:
(1) 在有穷维向量空间 $V$ 上, 称 $T$ 是一个幂零阵, 是指存在正整数 $q$, 使得 $T^q=0$, 记使 $T^q=0$ 的最小的 $q$ 为这矩阵 $T$ 的指标. 对于幂零阵, 有如下结论: $\exists$ 正整数 $r$,
$$q_1\leqslant q_2\leqslant\cdots\leqslant q_r\leqslant q\quad(q_i\in\mathbb{N},\,i=1,2,\cdots,r),$$
以及 $x_1,x_2,\cdots,x_r\in V$, 使得
$$\begin{cases}
x_1, & Tx_1, & \cdots, & T^{q_1-1}x_1;\\
x_2, & Tx_2, & \cdots, & T^{q_2-1}x_2;\\
\vdots & \vdots & & \vdots\\
x_r, & Tx_r, & \cdots, & T^{q_r-1}x_r
\end{cases}$$
构成 $V$ 的基, 并且 $T^{q_1}x_1=\cdots=T^{q_r}x_r=\theta$. 于是在 $V$ 上, 幂零阵分解为 $q_1+q_2+\cdots+q_r$ 个 Jordan 块, 其对角线为 $0$.

(2) 为了从给定的 $V$ 上的矩阵 $A$ 构造出与之有关的幂零阵, 设 $\lambda$ 是 $A$ 的一个特征值. 在每个 $N((\lambda I-A)^j)\,(j=1,2,\cdots)$ 上, $\lambda I-A$ 都是幂零的, 并且 $N((\lambda I-A)^j)$ 还是 $A$ 的不变子空间. 由于向量空间 $V$ 是有穷维的, 必有 $p\in\mathbb{N}$, 使得
$$N((\lambda I-A)^p)=N((\lambda I-A)^{p+1})=\cdots.$$
其关键的步骤是, 能证明 $V=N((\lambda I-A)^p)\oplus V_1$, 其中 $V_1$ 是 $V$ 的一个线性子空间, 满足: $(\lambda I-A)|_{V_1}$ 是可逆的, 特别地,
$$V_1=R((\lambda I-A)^p).$$

有了这个结论, 我们便可以从 $A$ 的所有特征值 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 找到对应的 $p_1,p_2,\cdots,p_k$, 将空间 $V$ 分解为 $\displaystyle\bigoplus_{i=1}^{k}N((\lambda_i I-A)^{p_i})$, 因为每个 $N((\lambda_i I-A)^{p_i})$ 都是 $A$ 的不变子空间, 而
$$(\lambda_i I-A)|_{N((\lambda_i I-A)^{p_i})}\quad(i=1,2,\cdots,k)$$
是幂零阵. 我们就得到了 $A$ 的 Jordan 分解.

现在我们把这些步骤推广到紧算子. 设 $A\in\mathfrak{C}(\mathscr{X})$, $T=I-A$, 我们要证下面的定理.

> [!theorem] 定理 3.3.5
> 存在非负整数 $p$, 使得 $\mathscr{X}=N(T^p)\oplus R(T^p)$, 并且 $T_1\triangleq T|_{R(T^p)}$ 存在有界线性逆算子.

为证这个定理, 先考察任意的 $T\in\mathscr{L}(\mathscr{X})$. 我们知道有如下链的包含关系:
$$\{\theta\}\subseteq N(T)\subseteq N(T^2)\subseteq\cdots,$$
而且一旦有 $N(T^k)=N(T^{k+1})$, 就有 $N(T^k)=N(T^n)\,(\forall n\geqslant k)$. 事实上,
$$\begin{aligned}

x\in N(T^{k+2})&\Longrightarrow T^{k+1}Tx=\theta\\

&\Longrightarrow Tx\in N(T^{k+1})=N(T^k)\\
&\Longrightarrow x\in N(T^{k+1}).
\end{aligned}$$
因此, 称此链中使得 $N(T^k)=N(T^{k+1})$ 成立的最小整数 $p$ 为零链长, 有时记为 $p(T)$.

同样, 我们也有下列链的包含关系:
$$\mathscr{X}\supseteq R(T)\supseteq R(T^2)\supseteq\cdots,$$
而且一旦 $R(T^k)=R(T^{k+1})$, 就有 $R(T^k)=R(T^n)\,(\forall n\geqslant k)$. 事实上, 若 $x\in R(T^{k+1})$, 则 $\exists y\in\mathscr{X}$, 使得 $x=T^{k+1}y$. 令 $W=T^k y$, 便得
$$W\in R(T^k)=R(T^{k+1})\Longrightarrow x=TW\in R(T^{k+2}).$$
因此, 称此链中使得 $R(T^k)=R(T^{k+1})$ 成立的最小整数 $q$ 为像链长, 有时记为 $q(T)$. 由定义, 我们有
$$p=0\Longleftrightarrow N(T)=\{\theta\}\Longleftrightarrow T\text{ 是单射}, \tag{3.3.3}$$

$$q=0\Longleftrightarrow R(T)=\mathscr{X}\Longleftrightarrow T\text{ 是满射}. \tag{3.3.4}$$

问题 $p,q$ 一定有穷吗? $p$ 与 $q$ 有什么关系?
一般来说, $p,q$ 都可能是 $\infty$, 然而有如下引理.

> [!lemma] 引理 3.3.6
> 若 $T=I-A$, $A\in\mathfrak{C}(\mathscr{X})$, 则 $p=q<\infty$.

> [!proof]- 证
> (1) $q<\infty$. 用反证法. 倘若不然, 则有
> $$R(T)\supsetneq R(T^2)\supsetneq\cdots.$$
> 注意到, 对 $\forall k\in\mathbb{N}$,
> $$T^k=I+\sum_{j=1}^{k}\binom{k}{j}(-A)^j=I+\text{紧算子},$$
> 所以 $R(T^k)$ 还是闭线性子空间. 应用 Riesz 引理 (引理 1.4.31), 即得矛盾 (推理过程与定理 3.2.5 的证明相同).
> (2) $p\le q$. 由定义, $R(T^q)=R(T^{q+1})$, 应用定理 3.2.1,
> $$\dim N(T^q)=\operatorname{codim}R(T^q)=\operatorname{codim}R(T^{q+1})=\dim N(T^{q+1}).$$
> 于是由 $\dim N(T^q)<\infty$, 可见 $N(T^q)=N(T^{q+1})$, 再由 $p$ 的定义, 即得 $p\le q$.
> (3) $q\le p$. 同理, 由定义 $N(T^p)=N(T^{p+1})$, 且有
> $$\operatorname{codim}R(T^{p+1})=\dim N(T^{p+1})=\dim N(T^p)=\operatorname{codim}R(T^p).\quad\blacksquare$$

> [!proof]- 定理 3.3.5 的证明
> (1) $N(T^p)\cap R(T^p)=\{\theta\}$. 事实上, 若有 $y\in N(T^p)\cap R(T^p)$, 则 $\exists x\in\mathscr{X}$, 使得 $y=T^px$, 且有 $T^py=\theta$, 从而
> $$x\in N(T^{2p})=N(T^p)\Longrightarrow y=T^px=\theta.$$
> (2) $\mathscr{X}=N(T^p)\oplus R(T^p)$. 事实上, 对 $\forall x\in\mathscr{X}$, 有
> $$T^px\in R(T^p)=R(T^{2p}).$$
> 因此 $\exists u\in\mathscr{X}$, 使得 $T^{2p}u=T^px$. 令 $y\triangleq T^pu\in R(T^p)$, 便有 $z\triangleq x-y\in N(T^p)$, 这是因为 $T^py=T^px$. 于是得
> $$x=y+z\quad(y\in R(T^p),\,z\in N(T^p)).$$
> 
> (3) $T_1\triangleq T|_{R(T^p)}$ 存在有界线性逆算子. 事实上, 因为
> $$R(T^p)=R(T^{p+1}),$$
> 可见 $T_1$ 是满射的. 又 $T_1$ 是 $1$-$1$ 的, 这是因为: 若 $y\in R(T^p)$, 且 $Ty=\theta$, 则 $\exists x\in\mathscr{X}$, 使得 $y=T^px$, 从而
> $$x\in N(T^{p+1})=N(T^p),$$
> 即得 $y=\theta$. 于是由 Banach 逆算子定理 (定理 2.3.8) 即得结论. $\blacksquare$

根据定理 3.3.5, 对任意的 $A\in\mathfrak{C}(\mathscr{X})$, 从它的一切非 $0$ 特征值 $\lambda_1,\lambda_2,\cdots$, 我们可以找到对应于 $T_i=\lambda_i I-A$ 的零链长 $p_i\,(i=1,2,\cdots)$. 在空间 $\displaystyle\bigoplus_{i=1}^{\infty}N((\lambda_i-A)^{p_i})$ 上, 算子 $A$ 有对应的 Jordan 标准形.

更详细的讨论参看 Ringrose J. R., Compact Non-self-adjoint Operators (New York: Van Nostrand Reinhold, 1971).

> [!exercise] 习题
> 
> (本节习题中的 $\mathscr{X}$ 均指 $B$ 空间)
> 
> **3.3.1** 给定数列 $\{a_n\}_{n=1}^{\infty}$, 在空间 $l^1$ 上定义算子 $A$ 如下:
> $$A(x_1,x_2,\cdots)=(a_1x_1,a_2x_2,\cdots),\quad\forall x=(x_1,x_2,\cdots)\in l^1.$$
> 求证: (1) $A\in\mathscr{L}(l^1)$ 的充要条件是 $\displaystyle\sup_{n\ge 1}|a_n|<\infty$;
> (2) $A^{-1}\in\mathscr{L}(l^1)$ 的充要条件是 $\displaystyle\inf_{n\ge 1}|a_n|>0$;
> (3) $A\in\mathfrak{C}(l^1)$ 的充要条件是 $\displaystyle\lim_{n\to\infty}a_n=0$.
> 
> **3.3.2** 在 $C[0,1]$ 中, 考虑映射
> $$T:x(t)\mapsto\int_0^t x(s)\,ds,\quad\forall x(t)\in C[0,1].$$
> (1) 求证: $T$ 是紧算子;
> (2) 求 $\sigma(T)$ 及 $T$ 的一个非平凡的闭不变子空间.
> 
> **3.3.3** 设 $A\in\mathfrak{C}(\mathscr{X})$, 求证: 当且仅当 $x-Ax=\theta$ 只有零解时, 方程 $x-Ax=y$ 对 $\forall y\in\mathscr{X}$ 都有解.
> 
> **3.3.4** 设 $T\in\mathscr{L}(\mathscr{X})$, 并存在 $m\in\mathbb{N}$, 使得
> $$\mathscr{X}=N(T^m)\oplus R(T^m),$$
> 求证: $p(T)=q(T)\le m$.
> 
> **3.3.5** 设 $A,B\in\mathscr{L}(\mathscr{X})$, 并且 $AB=BA$, 求证:
> (1) $R(A)$ 和 $N(A)$ 都是 $B$ 的不变子空间;
> (2) $R(B^n)$ 和 $N(B^n)$ 都是 $B$ 的不变子空间 ($\forall n\in\mathbb{N}$).
> 
> **3.3.6** 设 $A\in\mathscr{L}(\mathscr{X})$, $M$ 是 $A$ 的有穷维的闭不变子空间, 求证: (1) $A$ 在 $M$ 上的作用可以用一个矩阵来表示;
> (2) $M$ 中存在 $A$ 的特征元.
> 

> **3.3.7** 设 $x_0\in\mathscr{X}$, $f\in\mathscr{X}^*$, 满足 $\langle f,x_0\rangle=1$, 令 $A=x_0\otimes f$, 并且 $T=I-A$, 求 $T$ 的零链长 $p$.

## §4 Hilbert-Schmidt 定理

在 Hilbert 空间上, 有一类有界线性算子, 它们是 $\mathbb{R}^n$ 上的对称矩阵, 是 $\mathbb{C}^n$ 上 Hermite 矩阵的推广, 称为对称算子.

> [!definition] 定义 3.4.1
> 设 $A\in\mathscr{L}(H)$, 其共轭算子 $A^*$ 由下式定义:
> $$(Ax,y)=(x,A^*y)\quad(\forall x,y\in H). \tag{3.4.1}$$
> 称 $A$ 是对称的, 若
> $$(Ax,y)=(x,Ay)\quad(\forall x,y\in H). \tag{3.4.2}$$

> [!remark] 注
> 比较 (3.4.1) 式和 (3.4.2) 式可见, 为了 $A$ 是对称算子必须且仅须 $A=A^*$. 正是这个缘故, 有时又把对称算子称为自共轭算子, 或自伴算子 (注意: 前提是 $A\in\mathscr{L}(H)$).

> [!proposition] 命题 3.4.2
> 设 $A,B\in\mathscr{L}(H)$, $\alpha\in\mathbb{C}$, 则有
> $$(A+B)^*=A^*+B^*,\quad(\alpha A)^*=\bar{\alpha}A^*,$$
> $$A^{**}=A,\quad(AB)^*=B^*A^*,$$
> $$\sigma(A^*)=\overline{\sigma(A)}=\{\bar{\lambda}\mid\lambda\in\sigma(A)\}.$$

> 证明很简单, 留给读者.

> [!example] 例 3.4.3
> 在 $\mathbb{R}^n$ 上, 若 $A$ 是对称矩阵, 则 $A$ 是对称的. 在 $\mathbb{C}^n$ 上, 若 $A$ 是 Hermite 矩阵, 则 $A$ 是对称的. 一般地有: $A$ 是 $\mathbb{R}^n$ 上的矩阵, $A^*=A^{\mathsf{T}}$, 这里 $A^{\mathsf{T}}$ 为 $A$ 的转置矩阵; $A$ 是 $\mathbb{C}^n$ 上的矩阵, $A^*=\bar{A}^{\mathsf{T}}$, 这里 $\bar{A}^{\mathsf{T}}$ 为 $A$ 的共轭转置矩阵.

> [!example] 例 3.4.4

> 在实的 $L^2(\Omega,\mathscr{B},\mu)$ 上, 设 $K\in L^\infty(\Omega\times\Omega,d\mu)$, 并且 $K(x,y)=K(y,x)$, 则
> $$A:u(x)\mapsto\int_\Omega K(x,y)u(y)\,d\mu(y)$$
> 是 $L^2(\Omega,\mathscr{B},\mu)$ 上的对称算子.

> [!example] 例 3.4.5

> 设 $H$ 是 Hilbert 空间, $M$ 是它的一个闭线性子空间. 由 $H$ 到 $M$ 上的投影算子 $P_M$ 便是对称的.

> [!proof]- 证
> 由正交分解定理 (推论 1.6.37), $\forall x,y\in H$, 有分解:
> $$x=x_M+x_{M^\perp}\quad(x_M\in M,\,x_{M^\perp}\in M^\perp),$$
> $$y=y_M+y_{M^\perp}\quad(y_M\in M,\,y_{M^\perp}\in M^\perp).$$
> 由 $P_M$ 的定义, $x_M=P_Mx$, $y_M=P_My$, 因此有

> $$(P_Mx,y)=(x_M,y_M+y_{M^\perp})=(x_M,y_M)=(x,P_My).\quad\blacksquare$$

> [!proposition] 命题 3.4.6
> 关于 $H$ 上的对称算子, 有下列基本性质:
> (1) 为了 $A$ 对称, 必须且仅须 $(Ax,x)\in\mathbb{R}\,(\forall x\in H)$.

> (2) 若 $A$ 对称, 则 $\sigma(A)\subset\mathbb{R}$, 并且有
> $$\|(\lambda I-A)^{-1}x\|\le\frac{1}{|\operatorname{Im}\lambda|}\|x\|\quad(\forall x\in H,\,\forall\lambda\in\mathbb{C},\,\operatorname{Im}\lambda\neq 0).$$

> (3) 设 $H_1$ 是 $H$ 的一个闭不变子空间, $A$ 是 $H$ 上的对称算子, 则 $A|_{H_1}$ 也是 $H_1$ 上的对称算子.
>
> (4) 若 $A$ 对称, $\lambda,\lambda'\in\sigma_p(A)$, $\lambda\neq\lambda'$, 则
> $$N(\lambda I-A)\perp N(\lambda'I-A).$$

> (5) 若 $A$ 对称, 则
> $$\sup_{\|x\|=1}|(Ax,x)|=\|A\|.$$

> [!proof]- Proof of (1)
> 令 $a(x,y)\triangleq(Ax,y)\,(\forall x,y\in H)$, 那么 $a(\cdot,\cdot)$ 是 $H$ 上的共轭双线性函数, $(Ax,x)$ 是由 $a(\cdot,\cdot)$ 诱导的二次型, 由定义, 我们有
> $$A\text{ 对称}\Longleftrightarrow a(x,y)=\overline{a(y,x)}\quad(\forall x,y\in H). \tag{3.4.3}$$
> 又由命题 1.6.2, 我们有
> $$a(x,y)=\overline{a(y,x)}\;(\forall x,y\in H)\Longleftrightarrow(Ax,x)\in\mathbb{R}\;(\forall x\in H). \tag{3.4.4}$$
> 联合 (3.4.3) 式和 (3.4.4) 式即得结论. $\blacksquare$

> [!proof]- Proof of (2)
> 设 $\lambda=\mu+i\nu$, $\nu\neq 0$, $\mu,\nu\in\mathbb{R}$, 则由对称性,
> $$\|(\lambda I-A)x\|^2=\|(\mu I-A)x\|^2+|\nu|^2\cdot\|x\|^2\ge|\nu|^2\cdot\|x\|^2\quad(\forall x\in H). \tag{3.4.5}$$
> 此外, $R(\lambda I-A)=H$, 这是因为:

> $$R(\lambda I-A)^\perp=N(\bar{\lambda}I-A^*)=N(\bar{\lambda}I-A),$$
> 再由 (3.4.5) 式, $N(\bar{\lambda}I-A)=\{\theta\}$ (当 $\operatorname{Im}\lambda\neq 0$). $\blacksquare$

> [!proof]- Proof of (4)
> 若 $x\in N(\lambda I-A)$, $x'\in N(\lambda'I-A)$, 则
> $$\lambda(x,x')=(Ax,x')=(x,Ax')=\lambda'(x,x').$$
> 由 $\lambda\neq\lambda'$, 推出 $(x,x')=0$. $\blacksquare$

> [!proof]- Proof of (5)
> 记 $c=\sup_{\|x\|=1}|(Ax,x)|$, $c\le\|A\|$ 显然. 下证 $c\ge\|A\|$. 由 $A$ 的对称性和平行四边形法则,

> $$4\operatorname{Re}(Ax,y)=(A(x+y),x+y)-(A(x-y),x-y)\le c\|x+y\|^2+c\|x-y\|^2=2c(\|x\|^2+\|y\|^2).$$
> 取 $\|x\|=\|y\|=1$, 便有 $\operatorname{Re}(Ax,y)\le c$. 由 $A$ 的自伴性 (即对称性), $\forall x,y\in H$, $\|x\|=\|y\|=1$, 取 $a=e^{-i\arg(Ax,y)}$ (这里 $\arg$ 表示幅角), 则有
> $$(Ax,ay)=(aAx,y)=|a|(Ax,y)=|(Ax,y)|,$$
> 于是 $|(Ax,y)|\le c$, 即 $\|A\|\le c$. $\blacksquare$

在 Hilbert 空间上, 对称紧算子 $A$ 的谱和算子结构将更为清楚. 对比有穷维情形, 一个自伴矩阵总可通过对角化将空间分解为特征子空间的直和. 我们将把这个结果推广到无穷维空间, 即 Hilbert-Schmidt 定理.

> [!theorem] 定理 3.4.7
> 若 $A$ 是对称紧算子, 则必有 $x_0\in H$, $\|x_0\|=1$, 使得
> $$|(Ax_0,x_0)|=\sup_{\|x\|=1}|(Ax,x)|,$$
> 并且满足
> $$Ax_0=\lambda x_0, \tag{3.4.6}$$
> 其中 $|\lambda|=|(Ax_0,x_0)|$.

> [!proof]- 证
> 用 $S_1$ 表示 $H$ 上的单位球面, 不妨设
> $$\sup_{x\in S_1}|(Ax,x)|=\sup_{x\in S_1}(Ax,x) \tag{3.4.7}$$
> (否则用 $-A$ 代替 $A$). 取 $\lambda=\sup_{x\in S_1}(Ax,x)$, 考察 $S_1$ 上定义的函数
> $$f(x)=(Ax,x)\quad(\forall x\in S_1).$$
> 设 $\{x_n\}\subset S_1$, 满足 $f(x_n)\to\lambda$; 因为 $\|Ax_n\|\le\|A\|$, 所以有子列, 仍记作 $\{Ax_n\}$, 使得 $Ax_n\to y$. 于是
> $$\lambda=\lim_{n\to\infty}(Ax_n,x_n)=\lim_{n\to\infty}(Ax_n,\lim_{m\to\infty}x_m)=\lim_{n,m\to\infty}(Ax_n,x_m)=(y,\lim_{m\to\infty}x_m)=(y,x_0).$$
> 由命题 3.4.6(5),
> $$\|x_n-x_m\|^2=\|x_n\|^2+\|x_m\|^2-2\operatorname{Re}(x_n,x_m)=2-2\operatorname{Re}(x_n,x_m).$$
> 因此 $\displaystyle\lim_{n,m\to\infty}\operatorname{Re}(x_n,x_m)=1$.
> 另一方面,
> $$\lim_{n,m\to\infty}\|Ax_n-Ax_m\|^2=\lim_{n,m\to\infty}(A^2(x_n-x_m),x_n-x_m)\le\|A^2\|\lim_{n,m\to\infty}\|x_n-x_m\|^2=2\|A^2\|(1-\lim_{n,m\to\infty}\operatorname{Re}(x_n,x_m))=0.$$
> 故 $\{Ax_n\}$ 是基本列, 由于 $H$ 完备, 存在 $x_0\in H$, 使得 $\|x_0\|=1$, 且 $Ax_n\to x_0$.
> 进一步要证: $\|x_0\|=1$. 事实上, 因为 $x_n\to x_0$ (由 $\|x_n-x_m\|\to 0$), 所以 $\|x_0\|=\lim\|x_n\|=1$.
> 最后再证 (3.4.6) 式. $\forall y\in H$, 对于任意足够小的复数 $t$, 考察函数:
> $$\varphi_y(t)=\frac{(A(x_0+ty),x_0+ty)}{(x_0+ty,x_0+ty)}$$
> 并注意到 $t=0$ 使 $\varphi_y(t)$ 达到极大, 从而有
> $$\varphi'_y(0)=0,$$
> 算出就是:
> $$\operatorname{Re}(Ax_0-\lambda x_0,y)=0.$$
> 而 $y\in H$ 是任意的, 故有 $Ax_0=\lambda x_0$. $\blacksquare$

设 $A$ 是 $H$ 上的紧算子, 按 Riesz-Schauder 理论,
$$\sigma(A)\setminus\{0\}=\sigma_p(A)\setminus\{0\}=\{\lambda_1,\lambda_2,\cdots\}.$$
如果 $\{\lambda_n\}$ 中有无穷多个是不同的, 那么满足 $\lambda_n\to 0$; 如果 $A$ 还是自伴的, 由命题 3.4.6(2), $\lambda_n$ 都是实数. 此外还有下面的定理.

> [!theorem] 定理 3.4.8 (Hilbert-Schmidt)

> 若 $A$ 是 Hilbert 空间 $H$ 上的对称紧算子, 则至多有可数个非零的, 只可能以 $0$ 为聚点的实数 $\{\lambda_i\}$, 它们是算子 $A$ 的特征值, 并对应一组正交规范基 $\{e_i\}$, 使得
> $$x=\sum(x,e_i)e_i,$$
> $$Ax=\sum\lambda_i(x,e_i)e_i. \tag{3.4.10}$$

> [!proof]- 证
> 对 $\forall\lambda\in\sigma_p(A)\setminus\{0\}$, 设 $N(\lambda I-A)$ 的正交规范基为
> $$\{e_i^{(\lambda)}\}_{i=1}^{m(\lambda)},$$
> 其中 $m(\lambda)\triangleq\dim N(\lambda I-A)<\infty$ (称为 $\lambda$ 的重数). 此外, 若 $0\in\sigma_p(A)$, 则设 $N(A)$ 的正交规范基为
> $$\{e_i^{(0)}\},$$
> 它不一定是可数的. 如今我们令
> $$\{e_i'\}\triangleq\bigcup_{\lambda\in\sigma_p(A)\setminus\{0\}}\{e_i^{(\lambda)}\}_{i=1}^{m(\lambda)},$$
> $$\{e_i\}\triangleq\begin{cases}

> \{e_i'\}, & 0\notin\sigma_p(A),\\[4pt]
> \{e_i'\}\cup\{e_i^{(0)}\}, & 0\in\sigma_p(A).
> \end{cases}$$
> 再令 $M\triangleq\overline{\operatorname{span}}\{e_i\}$, 在 $M$ 上 $A$ 显然有表示式 (3.4.10) 式.
> 
> 现在证 $\overline{M}=H$. 用反证法. 倘若不然, 则 $M^\perp\neq\{\theta\}$. 记 $\tilde{A}\triangleq A|_{M^\perp}$, 由定义, $\tilde{A}$ 不能有特征值, 从而 $\tilde{A}\neq 0$. 另一方面, 由定理 3.4.7, 有
> $$\|\tilde{A}\|=\sup_{x\in M^\perp,\,\|x\|=1}|(\tilde{A}x,x)|=0,$$
> 即 $\tilde{A}=0$, 便得矛盾. 从而 $\{e_i\}$ 构成 $H$ 的正交规范基. $\blacksquare$

> [!remark] 注 1
> 我们可以将特征值按绝对值递减的顺序编号, 并约定特征值的重数是几, 就把那特征值接连编上几个号码, 即排成:
> $$|\lambda_1|\ge|\lambda_2|\ge\cdots\ge|\lambda_n|\ge|\lambda_{n+1}|\ge\cdots.$$
> 于是
> $$A=\sum_{i=1}^{\infty}\lambda_i\,e_i\otimes e_i, \tag{3.4.11}$$
> 更确切地有
> $$\Bigl\|A-\sum_{i=1}^{n}\lambda_i\,e_i\otimes e_i\Bigr\|\le|\lambda_{n+1}|\to 0\quad(n\to\infty).$$
> 事实上, 对 $\forall x\in H$, 有
> $$\Bigl\|Ax-\sum_{i=1}^{n}\lambda_i(x,e_i)e_i\Bigr\|=\Bigl\|\sum_{i=n+1}^{\infty}\lambda_i(x,e_i)e_i\Bigr\|=\Bigl(\sum_{i=n+1}^{\infty}\lambda_i^2|(x,e_i)|^2\Bigr)^{1/2}\le|\lambda_{n+1}|\Bigl(\sum_{i=n+1}^{\infty}|(x,e_i)|^2\Bigr)^{1/2}\le|\lambda_{n+1}|\cdot\|x\|.$$

> [!remark] 注 2
> 定理 3.4.8 表明: 对称紧算子可以对角化, 它的特征值具有极值性质:
> $$|\lambda_n|=\sup\{|(Ax,x)|\mid x\perp\operatorname{span}\{e_1,e_2,\cdots,e_{n-1}\},\,\|x\|=1\}\quad(n=1,2,\cdots),$$
> 其中 $e_1,e_2,\cdots,e_{n-1}$ 是对应于 $\lambda_1,\lambda_2,\cdots,\lambda_{n-1}$ 的特征元.

特别地, 我们可以按正负值把特征值排列起来, 记作
$$\lambda_1^+\ge\lambda_2^+\ge\cdots\ge 0,$$
$$\lambda_1^-\le\lambda_2^-\le\cdots<0. \tag{3.4.12}$$

> [!theorem] 定理 3.4.9 (极小极大刻画)
> 设 $A$ 是对称紧算子, 对应有特征值 (3.4.12) 式, 则
> $$\lambda_n^+=\inf_{E_{n-1}}\sup_{x\in E_{n-1}^\perp,\,x\neq\theta}\frac{(Ax,x)}{(x,x)}, \tag{3.4.13}$$
> $$\lambda_n^-=\sup_{E_{n-1}}\inf_{x\in E_{n-1}^\perp,\,x\neq\theta}\frac{(Ax,x)}{(x,x)}, \tag{3.4.14}$$
> 其中 $E_{n-1}$ 是 $H$ 的任意 $n-1$ 维闭线性子空间.

> [!proof]- 证
> 我们只需证 (3.4.13) 式, 因为用 $-A$ 代替 $A$, 那么 (3.4.13) 式蕴含了 (3.4.14) 式. 注意到, 若
> $$x=\sum a_j^+e_j^++\sum a_j^-e_j^-,$$
> 则
> $$\frac{(Ax,x)}{(x,x)}=\frac{\sum\lambda_j^+|a_j^+|^2+\sum\lambda_j^-|a_j^-|^2}{\sum|a_j^+|^2+\sum|a_j^-|^2}.$$
> 记 (3.4.13) 式右端为 $\mu_n$. 下面从两个方面证明 $\lambda_n^+=\mu_n$:
> 
> (1) $\lambda_n^+\le\mu_n$. 事实上, $\forall E_{n-1}$, 在 $\operatorname{span}\{e_1^+,e_2^+,\cdots,e_n^+\}$ 中总有向量 $x_n\neq\theta$, 使得 $x_n\perp E_{n-1}$, 于是
> $$\sup_{x\perp E_{n-1},\,x\neq\theta}\frac{(Ax,x)}{(x,x)}\ge\frac{(Ax_n,x_n)}{(x_n,x_n)}=\frac{\sum_{j=1}^{n}\lambda_j^+|a_j^+|^2}{\sum_{j=1}^{n}|a_j^+|^2}\ge\lambda_n^+,$$
> 即得 $\lambda_n^+\le\mu_n$.
> 
> (2) $\lambda_n^+\ge\mu_n$. 事实上, 取 $E_{n-1}=\operatorname{span}\{e_1^+,e_2^+,\cdots,e_{n-1}^+\}$, 便有
> $$\lambda_n^+=\sup_{x\perp E_{n-1},\,x\neq\theta}\frac{(Ax,x)}{(x,x)},$$
> 即得 $\lambda_n^+\ge\mu_n$. $\blacksquare$

> [!corollary] 推论 3.4.10
> 若两个对称紧算子 $A,B$ 满足 $A\le B$, 即 $(Ax,x)\le(Bx,x)\,(\forall x\in H)$, 则 $\lambda_j^+(A)\le\lambda_j^+(B)\;(j=1,2,\cdots)$.

> [!exercise] 习题
> 
> (本节各题中, $H$ 均指复 Hilbert 空间)
> 
> **3.4.1** 设 $A\in\mathscr{L}(H)$, 求证: $A+A^*$, $AA^*$, $A^*A$ 都是对称算子, 并且 $\|AA^*\|=\|A^*A\|=\|A\|^2$.
> 
> **3.4.2** 设 $A\in\mathscr{L}(H)$, 满足 $(Ax,x)\ge 0\,(\forall x\in H)$, 且 $(Ax,x)=0\iff x=\theta$, 求证: $\|Ax\|^2\le\|A\|(Ax,x)\,(\forall x\in H)$.
> 
> **3.4.3** 设 $A$ 是 $H$ 上的有界对称算子, 令 $m(A)\triangleq\inf_{\|x\|=1}(Ax,x)$, $M(A)\triangleq\sup_{\|x\|=1}(Ax,x)$. 求证: (1) $\sigma(A)\subset[m(A),M(A)]$, 且 $m(A),M(A)\in\sigma(A)$. 进一步假设 $A$ 是 $H$ 上的对称紧算子, 求证: (2) 若 $m(A)\neq 0$, 则 $m(A)\in\sigma_p(A)$; (3) 若 $M(A)\neq 0$, 则 $M(A)\in\sigma_p(A)$.
> 
> **3.4.4** 设 $A$ 是对称紧算子, 求证: (1) 若 $A$ 非零, 则 $A$ 至少有一个不等于零的特征值;
> (2) 若 $M$ 是 $A$ 的非零不变子空间, 则 $M$ 上必含有 $A$ 的特征元.
> 
> **3.4.5** 求证: 为了 $P\in\mathscr{L}(H)$ 是一个正交投影算子, 必须且仅须: (1) $P$ 是对称的, 即 $P=P^*$; (2) $P$ 是幂等的, 即 $P^2=P$.
> 
> **3.4.6** 求证: 为了 $P\in\mathscr{L}(H)$ 是一个正交投影算子, 必须且仅须: $(Px,x)=\|Px\|^2\,(\forall x\in H)$.
> 
> **3.4.7** 设 $A\in\mathscr{L}(H)$, 称其为正算子, 是指 $(Ax,x)\ge 0\,(\forall x\in H)$. 求证: (1) 正算子必是对称的; (2) 正算子的一切特征值都是非负实数.
> 
> **3.4.8** 求证: 为了 $H$ 的闭线性子空间 $L,M$ 满足 $L\subset M$, 必须且仅须 $P_M-P_L$ 是正算子.
> 
> **3.4.9** 设 $(a_{ij})\,(i,j=1,2,\cdots)$ 满足 $\sum_{i,j=1}^{\infty}|a_{ij}|^2<\infty$, 在 $l^2$ 空间上, 定义映射 $A:x=\{x_1,x_2,\cdots\}\mapsto y=\{y_1,y_2,\cdots\}$, 其中 $y_i\triangleq\sum_{j=1}^{\infty}a_{ij}x_j\,(i=1,2,\cdots)$. 求证: (1) $A$ 是 $H$ 上的紧算子; (2) 又若 $a_{ij}=\overline{a_{ji}}\,(i,j=1,2,\cdots)$, 则 $A$ 是对称紧算子.
> 
> **3.4.10** 设 $A$ 是 $H$ 上的对称算子, 并且存在一组由 $A$ 的特征元组成的 $H$ 的正交规范基. 又设 (1) $\dim N(\lambda I-A)<\infty\,(\forall\lambda\in\sigma_p(A)\setminus\{0\})$; (2) $\forall\varepsilon>0$, $\sigma_p(A)\setminus[-\varepsilon,\varepsilon]$ 只有有限个值. 求证: $A$ 是 $H$ 上的紧算子.

## §5 对椭圆型方程的应用

这一节我们来研究下列边值问题:

$$\begin{cases}-\Delta u+U(x)u=f(x)&(x\in\varOmega),\\u|_{\partial\varOmega}=0,\end{cases}\tag{3.5.1}$$

其中 $\varOmega\subset\mathbb{R}^n$ 是一个有界的、具有光滑边界的开区域。给定 $U(x)\in C(\overline{\varOmega})$，$f\in L^2(\varOmega)$，问在什么条件下，问题 (3.5.1) 是可解的？

历史上，有许多数学家致力于这个问题的研究，通常采用位势积分将其化归成积分方程，再用 Fredholm 理论导出原问题的解。有了对称紧算子的 Riesz-Schauder 理论，以及 Sobolev 空间结果以后，我们便有可能撇开积分算子直接研究椭圆型方程的 Dirichlet 问题，近代偏微分方程的理论采用后一种途径。

称 $u\in H_0^1(\varOmega)$ 是边值问题 (3.5.1) 的一个弱解，是指：

$$\int_{\varOmega}(\nabla u\cdot\nabla v+U(x)uv)\,\mathrm{d}x=\int_{\varOmega}fv\,\mathrm{d}x\qquad(\forall v\in H_0^1(\varOmega)).\tag{3.5.2}$$

显然，若 $u\in H^2(\varOmega)$ 满足方程 (3.5.1)，则 $u$ 必是它的一个弱解。反过来，在偏微分方程理论中证明了：方程 (3.5.1) 的弱解必是 $H^2(\varOmega)$ 解。因此，从泛函分析应用的角度来说，我们将只关心方程 (3.5.1) 的弱解的存在性。

我们要把方程 (3.5.2) 化归成为对称紧算子问题。为此在 $H_0^1(\varOmega)$ 上引入等价范数：

$$\lVert u\rVert_{\lambda_0}=\Bigl[\int_{\varOmega}|\nabla u|^2\,\mathrm{d}x+\int_{\varOmega}(U(x)+\lambda_0)u^2(x)\,\mathrm{d}x\Bigr]^{1/2},$$

其中 $\lambda_0\triangleq\max_{x\in\overline{\varOmega}}|U(x)|$。根据 Poincaré 不等式 (引理 1.6.15)，存在常数 $m,M>0$，使得

$$m\|u\|_1\le\lVert u\rVert_{\lambda_0}\le M\|u\|_1\qquad(\forall u\in H_0^1(\varOmega)),\tag{3.5.3}$$

其中 $\|\cdot\|_1$ 表示 $H_0^1(\varOmega)$ 的范数。(3.5.3) 式表明 $\lVert\cdot\rVert_{\lambda_0}$ 是 $H_0^1(\varOmega)$ 的等价范数，所以 $H_0^1(\varOmega)$ 在范数 $\lVert\cdot\rVert_{\lambda_0}$ 下是 Banach 空间。又令

$$(u,v)_{\lambda_0}=\int_{\varOmega}\nabla u\cdot\nabla v\,\mathrm{d}x+\int_{\varOmega}(U(x)+\lambda_0)u(x)v(x)\,\mathrm{d}x,\tag{3.5.4}$$

其中 $u,v\in H_0^1(\varOmega)$。$(\cdot,\cdot)_{\lambda_0}$ 是由范数 $\lVert\cdot\rVert_{\lambda_0}$ 产生的内积。$H_0^1(\varOmega)$ 在内积 (3.5.4) 式下是 Hilbert 空间。记 $\|\cdot\|$ 为 $L^2(\varOmega)$ 的范数，再由 Poincaré 不等式 (引理 1.6.15)，对 $\forall u\in L^2(\varOmega)$，我们有

$$\Bigl|\int_{\varOmega}u\cdot v\,\mathrm{d}x\Bigr|\le\|u\|\cdot\|v\|\le c\|u\|\lVert v\rVert_{\lambda_0}\qquad(\forall v\in H_0^1(\varOmega)),\tag{3.5.5}$$

其中 $c$ 为正常数。于是按 Riesz 表示定理 (定理 2.2.1)，$\exists!\,w\in H_0^1(\varOmega)$，使得

$$\int_{\varOmega}uv\,\mathrm{d}x=(w,v)_{\lambda_0}\qquad(\forall v\in H_0^1(\varOmega)).\tag{3.5.6}$$

定义 $K_{\lambda_0}:L^2(\varOmega)\to H_0^1(\varOmega)$ 为 $w=K_{\lambda_0}u$，便有

$$\lVert K_{\lambda_0}u\rVert_{\lambda_0}\le c\|u\|\qquad(\forall u\in L^2(\varOmega)).$$

因此 $K_{\lambda_0}$ 是 $L^2(\varOmega)\to H_0^1(\varOmega)$ 的连续线性算子。

记 $\iota$ 为 $H_0^1(\varOmega)\to L^2(\varOmega)$ 的嵌入算子，由 Rellich 定理 (定理 4.5.10) 的推论 4.5.11，$\iota$ 是紧的。于是 (3.5.2) 式等价于

$$(u,v)_{\lambda_0}=(K_{\lambda_0}f,v)_{\lambda_0}+\lambda_0(K_{\lambda_0}\iota u,v)_{\lambda_0}\qquad(\forall v\in H_0^1(\varOmega)),$$

即等价于在 $H_0^1(\varOmega)$ 中解方程

$$(I-\lambda_0K_{\lambda_0}\iota)u=K_{\lambda_0}f.\tag{3.5.7}$$

应用 Riesz-Fredholm 定理 (定理 3.2.1)，

$$\text{方程 (3.5.7) 有解}\iff K_{\lambda_0}f\perp N(I-\lambda_0K_{\lambda_0}\iota).$$

然而

$$\begin{aligned}u\in N(I-\lambda_0K_{\lambda_0}\iota)&\iff u=\lambda_0K_{\lambda_0}\iota u\\&\iff(u,v)_{\lambda_0}=\lambda_0\int_{\varOmega}uv\,\mathrm{d}x\qquad(\forall v\in H_0^1(\varOmega))\\&\iff\int_{\varOmega}(\nabla u\cdot\nabla v+U(x)uv)\,\mathrm{d}x=0\qquad(\forall v\in H_0^1(\varOmega)),\end{aligned}$$

即 $u$ 是方程 (3.5.1) 的齐次方程的弱解。设方程 (3.5.1) 的齐次方程的弱解由 $\{\varphi_1,\varphi_2,\cdots,\varphi_n\}$ 张成，那么

$$(K_{\lambda_0}f,\varphi_i)_{\lambda_0}=0\iff\int_{\varOmega}f\varphi_i\,\mathrm{d}x=0\qquad(i=1,2,\cdots,n).$$

总结起来，我们得到如下定理。

> [!theorem] 定理 3.5.1
> 若方程 (3.5.1) 的齐次方程只有零解，则 $\forall f\in L^2(\varOmega)$，方程 (3.5.1) 存在唯一的弱解；否则，方程 (3.5.1) 的齐次方程至多存在有穷个线性无关的弱解，设它们为 $\{\varphi_1,\varphi_2,\cdots,\varphi_n\}$。这时，当且仅当
> $$\int_{\varOmega}f\varphi_i\,\mathrm{d}x=0\qquad(i=1,2,\cdots,n),$$
> 方程 (3.5.1) 有解，且其解空间的维数是 $n$。

下面转向考察方程 (3.5.1) 对应的特征值问题：

$$\begin{cases}-\Delta u+U(x)u=\lambda u&(x\in\varOmega),\\u|_{\partial\varOmega}=0.\end{cases}\tag{3.5.8}$$

它对应的方程 (3.5.7) 是

$$(I-(\lambda+\lambda_0)K_{\lambda_0}\iota)u=0.$$

应用 Riesz-Schauder 理论以及 Hilbert-Schmidt 定理 (定理 3.4.8)，我们知道 $\sigma(K_{\lambda_0}\iota)\setminus\{0\}$ 是实的，而且至多有可数个，记它们为 $\mu_1,\mu_2,\cdots,\mu_j,\cdots$。又若 $\{\mu_j\}$ 有可数多个不同的值，则 $\mu_j\to0\,(j\to\infty)$。特别是因为

$$(K_{\lambda_0}\iota u,u)_{\lambda_0}>0\qquad(\text{当 }u\neq0),$$

所以 $\mu_j>0$，并且 $0\in\sigma_p(K_{\lambda_0}\iota)$。又由于 $H_0^1(\varOmega)$ 是无穷维的，不难验证 $\{\mu_j\}$ 有可数多个并且 $\mu_j\to0\,(j\to\infty)$。不妨设

$$\mu_1\ge\mu_2\ge\cdots\ge\mu_j\ge\cdots>0.$$

于是方程 (3.5.8) 的特征值

$$\lambda_j=\frac{1}{\mu_j}-\lambda_0\quad(j=1,2,\cdots)$$

满足 $\lambda_1\le\lambda_2\le\cdots\le\lambda_j\le\cdots$，以及 $\lambda_j\to\infty$。

最后给出 $\lambda_j$ 的"极小极大"描写，因为

$$\mu_j=\inf_{E_{j-1}}\sup_{\substack{u\in E_{j-1}^{\perp}\\u\neq\theta}}\frac{(K_{\lambda_0}\iota u,u)_{\lambda_0}}{(u,u)_{\lambda_0}},$$

所以

$$\begin{aligned}\lambda_j&=\frac{1}{\mu_j}-\lambda_0=\sup_{E_{j-1}}\inf_{\substack{u\in E_{j-1}^{\perp}\\u\neq\theta}}\frac{(u,u)_{\lambda_0}}{(K_{\lambda_0}\iota u,u)_{\lambda_0}}-\lambda_0\\&=\sup_{E_{j-1}}\inf_{\substack{u\in E_{j-1}^{\perp}\\u\neq\theta}}\frac{\displaystyle\int_{\varOmega}(|\nabla u|^2+Uu^2)\,\mathrm{d}x}{\displaystyle\int_{\varOmega}u^2\,\mathrm{d}x},\end{aligned}$$

其中 $E_{j-1}$ 是维数为 $j-1$ 的任意的闭线性子空间 $(j=1,2,\cdots)$。

总结起来，有如下定理。

> [!theorem] 定理 3.5.2
> 方程 (3.5.8) 的特征值都是实的，而且有可数个 $\lambda_1\le\lambda_2\le\cdots\le\lambda_j\le\cdots$，适合 $\lambda_j\to\infty$，并且它们对应的特征函数构成空间 $H_0^1(\varOmega)$ 的完备正交集。

> [!exercise] 习题
>
> **3.5.1** 设 $a_i(x)\in C^1(\varOmega)\,(i=1,2,\cdots,n)$，$U(x)\in C(\overline{\varOmega})$，其中 $\varOmega$ 是 $\mathbb{R}^n$ 中的边界光滑的有界开区域，讨论下列边值问题：
>
> $$\begin{cases}-\Delta u+\displaystyle\sum_{i=1}^{n}\partial_{x_i}(a_i(x)u)+U(x)u=f(x)&(x\in\varOmega),\\[6pt]u|_{\partial\varOmega}=0.\end{cases}$$
>
> 提示 应用 Lax-Milgram 定理 (定理 2.3.18)。
>
> **3.5.2** 在上题中，讨论下列特征值问题：
>
> $$\begin{cases}-\Delta u+\displaystyle\sum_{i=1}^{n}\partial_{x_i}(a_i(x)u)+U(x)u=\lambda u&(x\in\varOmega),\\[6pt]u|_{\partial\varOmega}=0.\end{cases}$$

## S6 Fredholm 算子

在本章 \S2 中，我们曾指出具有连续核的积分方程（或更一般的二元平方可和的核），可以利用紧算子的 Fredholm 理论讨论可解性，然而下列形式的奇异积分方程却不包含在紧算子理论的框架之中：

$$a(z)u(z)+\frac{b(z)}{\pi}\mathrm{P.V.}\int_{S^1}\frac{u(s)}{z-s}\,\mathrm{d}s=f(z)\quad(z\in S^1),\qquad(3.6.1)$$

其中 $S^1$ 表示平面上的单位圆周，$a,b\in C(S^1)$，$f\in L^2(S^1)$，P. V. 表示按主值意义的积分，即

$$\mathrm{P.V.}\int_{S^1}\frac{u(s)}{z-s}\,\mathrm{d}s\triangleq\lim_{\varepsilon\to0}\int_{\substack{|s-z|\ge\varepsilon\\s\in S^1}}\frac{u(s)}{z-s}\,\mathrm{d}s.$$

为了讨论形如 (3.6.1) 的方程的可解性，我们回顾一下本章 \S2 中关于可解性的讨论。其实，算子 $A$ 的紧性作用，只在下列证明时用到：

(1) $R(T)$ 是闭的，从而 Fredholm 结论 3 成立；
(2) $\dim N(T)=\dim N(T^*)<\infty$。

现在丢掉紧性条件，我们直接引入如下定义。

> [!definition] 定义 3.6.1
> 设 $\mathscr{X},\mathscr{Y}$ 是 Banach 空间，$T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 称为一个 Fredholm 算子，是指：
> (1) $R(T)$ 是闭的；
> (2) $\dim N(T)<\infty$；
> (3) $\mathrm{codim}\,R(T)<\infty$。
>
> $\mathscr{X}\to\mathscr{Y}$ 的一切 Fredholm 算子的全体记作 $\mathscr{F}(\mathscr{X},\mathscr{Y})$，特别地，当 $\mathscr{Y}=\mathscr{X}$ 时，记作 $\mathscr{F}(\mathscr{X})$。

> [!definition] 定义 3.6.2
> 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，令
> $$\mathrm{ind}(T)\triangleq\dim N(T)-\mathrm{codim}\,R(T),$$
> 并称其为 $T$ 的指标。

> [!example] 例 3.6.3
> 若 $A\in\mathfrak{C}(\mathscr{X})$，则 $T=I-A\in\mathscr{F}(\mathscr{X})$，并且
> $$\mathrm{ind}(T)=0.$$

> [!example] 例 3.6.4
> 若 $\mathscr{X}=l^2$，$T$ 是 $\mathscr{X}$ 上的左推移算子，即
> $$T:x=(x_1,x_2,\cdots)\mapsto(x_2,x_3,\cdots),$$
> 则 $T\in\mathscr{F}(\mathscr{X})$，并且 $\mathrm{ind}(T)=1$。同理，$T^*$ 是右推移算子，即

> $$T^*:x=(x_1,x_2,\cdots)\mapsto(0,x_1,x_2,\cdots),$$
> 有 $T^*\in\mathscr{F}(\mathscr{X})$，并且 $\mathrm{ind}(T^*)=-1$。一般地，还有
> $$T^n\in\mathscr{F}(\mathscr{X}),\quad\mathrm{ind}(T^n)=n\quad(n=1,2,\cdots),$$
> 以及
> $$(T^*)^n\in\mathscr{F}(\mathscr{X}),\quad\mathrm{ind}((T^*)^n)=-n\quad(n=1,2,\cdots).$$

下面我们来刻画 Fredholm 算子。

> [!theorem] 定理 3.6.5
> (1) 若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，则必有 $S\in\mathscr{L}(\mathscr{Y},\mathscr{X})$ 以及 $A_1\in\mathfrak{C}(\mathscr{X})$，$A_2\in\mathfrak{C}(\mathscr{Y})$，使得
> $$ST=I_x-A_1,\quad TS=I_y-A_2,\qquad(3.6.2)$$
> 其中 $I_x,I_y$ 分别表示 $\mathscr{X}$ 和 $\mathscr{Y}$ 上的恒同算子。
>
> (2) 如果 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$，又有 $R_1,R_2\in\mathscr{L}(\mathscr{Y},\mathscr{X})$ 以及 $A_1\in\mathfrak{C}(\mathscr{X})$，$A_2\in\mathfrak{C}(\mathscr{Y})$，使得
> $$R_1T=I_x-A_1,\quad TR_2=I_y-A_2,\qquad(3.6.3)$$
> 则 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$。

> [!proof]- 证
> (1) 考察图 3.6.1，令
> $$\widetilde{T}[x]=Tx\quad(\forall x\in[x])\quad(\forall[x]\in\mathscr{X}/N(T)).$$
> 由假设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，从而 $\widetilde{T}:\mathscr{X}/N(T)\to R(T)$ 有连续逆 $\widetilde{T}^{-1}$，并且存在投影算子（参看习题 3.2.6 与习题 3.1.10）：
> $$A_1:\mathscr{X}\to N(T),\qquad A_2:\mathscr{Y}\to\mathscr{Y}/R(T).$$
> 显然 $A_1$ 和 $A_2$ 都是有穷秩的，从而是紧的。令
> $$S\triangleq\widetilde{T}^{-1}(I_y-A_2),$$
> 便有
> $$ST=\widetilde{T}^{-1}(I_y-A_2)T=I_x-A_1,$$
> 以及
> $$TS=T\widetilde{T}^{-1}(I_y-A_2)=I_y-A_2.$$
>
> 图 3.6.1
>
> (2) 如果存在 $R_1,R_2$ 及 $A_1,A_2$，使得 (3.6.3) 式成立，那么

> $$N(T)\subset N(R_1T)=N(I_x-A_1)\Longrightarrow\dim N(T)<\infty,$$
> 以及
> $$R(T)\supset R(TR_2)=R(I_y-A_2)\Longrightarrow\mathrm{codim}\,R(T)\le\mathrm{codim}\,R(I_y-A_2)<\infty.$$
> 至于 $R(T)$ 闭性的验证，可以仿照定理 3.2.4 的证明，故从略。$\blacksquare$

> [!remark] 注 1
> 满足 (3.6.3) 式的 $R_1,R_2$ 分别称为 $T$ 的左、右正则化子。在商掉紧算子集 $\mathfrak{C}(\mathscr{X})$（以及 $\mathfrak{C}(\mathscr{Y})$）意义下，它们分别是 $T$ 的左、右逆。在这个意义下，定理 3.6.5(1) 表明 Fredholm 算子是 $\mathscr{L}(\mathscr{X},\mathscr{Y})$ 中商掉 $\mathfrak{C}(\mathscr{X})$（及 $\mathfrak{C}(\mathscr{Y})$）的可逆算子。

> [!remark] 注 2
> 从定理 3.6.5(2) 容易看出，若 $R$ 同时是 $T$ 的左、右正则化子，则 $R$ 本身也是 Fredholm 算子。特别是由此推出：若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，则 $\exists S\in\mathscr{F}(\mathscr{Y},\mathscr{X})$，以及 $A_1\in\mathfrak{C}(\mathscr{X})$，$A_2\in\mathfrak{C}(\mathscr{Y})$，使得 (3.6.2) 式成立。

关于 Fredholm 算子的指标有如下性质。

> [!theorem] 定理 3.6.6
> 若 $T_1\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，$T_2\in\mathscr{F}(\mathscr{Y},\mathscr{Z})$，其中 $\mathscr{X},\mathscr{Y},\mathscr{Z}$ 都是 Banach 空间，则 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$，且
> $$\mathrm{ind}(T_2T_1)=\mathrm{ind}(T_1)+\mathrm{ind}(T_2).\qquad(3.6.4)$$

> [!proof]- 证
> 由定理 3.6.5(1)，$\exists S_1\in\mathscr{F}(\mathscr{Y},\mathscr{X})$，$S_2\in\mathscr{F}(\mathscr{Z},\mathscr{Y})$，使得
> $$\begin{cases}S_1T_1=I_x-A_1^{(1)},\\T_1S_1=I_y-A_2^{(1)},\end{cases}$$
> 及
> $$\begin{cases}S_2T_2=I_y-A_1^{(2)},\\T_2S_2=I_z-A_2^{(2)}.\end{cases}$$
> 取 $S\triangleq S_1S_2$，即得
> $$\begin{aligned}S(T_2T_1)&=S_1(S_2T_2)T_1=S_1(I_y-A_1^{(2)})T_1\\&=S_1T_1-S_1A_1^{(2)}T_1\\&=I_x-A_1^{(1)}-S_1A_1^{(2)}T_1=I_x-\text{紧算子}.\end{aligned}$$
> 同理可证 $(T_2T_1)S$ 是恒同减去紧算子，从而 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$。
>
> 现在再证指标公式 (3.6.4)。为此我们先观察图 3.6.2。
>
> 记
> $$\begin{aligned}\mathscr{Y}_2&=R(T_1)\cap N(T_2),&\mathscr{X}_2&=T_1^{-1}\mathscr{Y}_2,\\\mathscr{Y}_1&=R(T_1)\ominus\mathscr{Y}_2,&\mathscr{Y}_3&=N(T_2)\ominus\mathscr{Y}_2,\\\mathscr{Y}_4&=\mathscr{Y}/R(T_1)\ominus\mathscr{Y}_3,&\mathscr{Z}_4&=T_2\mathscr{Y}_4,\end{aligned}$$
> 便有

> $$R(T_2)\cong\mathscr{Y}/N(T_2)=\mathscr{Y}_1+\mathscr{Y}_4,$$
> $$\mathscr{X}_2\cong\mathscr{Y}_2,\quad\mathscr{Z}_4\cong\mathscr{Y}_4,$$
> 以及
> $$N(T_2T_1)=N(T_1)\oplus\mathscr{X}_2,$$
> $$R(T_2)=R(T_2T_1)\oplus\mathscr{Z}_4.$$
>
> 图 3.6.2
>
> 于是，若记 $T=T_2T_1$，则有
> $$\begin{aligned}\dim N(T)&=\dim N(T_1)+\dim\mathscr{X}_2=\dim N(T_1)+\dim\mathscr{Y}_2,\\\mathrm{codim}\,R(T)&=\mathrm{codim}\,R(T_2)+\dim\mathscr{Z}_4=\mathrm{codim}\,R(T_2)+\dim\mathscr{Y}_4,\\\mathrm{codim}\,R(T_1)&=\dim\mathscr{Y}_3+\dim\mathscr{Y}_4,\\\dim N(T_2)&=\dim\mathscr{Y}_2+\dim\mathscr{Y}_3.\end{aligned}$$
> 联合起来得到
> $$\begin{aligned}\mathrm{ind}(T)&=\dim N(T)-\mathrm{codim}\,R(T)\\&=\dim N(T_1)+\dim N(T_2)-\mathrm{codim}\,R(T_2)-\mathrm{codim}\,R(T_1)\\&=\mathrm{ind}(T_1)+\mathrm{ind}(T_2).\end{aligned}$$

> [!theorem] 定理 3.6.7
> 若 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，则存在 $\varepsilon>0$，使得当 $S\in\mathscr{L}(\mathscr{X},\mathscr{Y})$，且 $\|S\|<\varepsilon$ 时，有
> $$T+S\in\mathscr{F}(\mathscr{X},\mathscr{Y}),$$
> 且有
> $$\mathrm{ind}(T+S)=\mathrm{ind}(T).$$

> [!proof]- 证
> 由定理 3.6.5(1)，$\exists R\in\mathscr{F}(\mathscr{Y},\mathscr{X})$ 及 $A_1\in\mathfrak{C}(\mathscr{X})$，$A_2\in\mathfrak{C}(\mathscr{Y})$，使得
> $$RT=I_x-A_1,\quad TR=I_y-A_2.\qquad(3.6.5)$$
> 从而
> $$R(T+S)=I_x-A_1+RS.$$
> 当 $\|S\|<1/\|R\|$ 时，$E_1\triangleq(I_x+RS)^{-1}$ 有界，因此
> $$E_1R(T+S)=I_x-E_1A_1.\qquad(3.6.6)$$
> 同理，当 $\|S\|<1/\|R\|$ 时，$E_2\triangleq(I_y+SR)^{-1}$ 有界，因此
> $$(T+S)RE_2=I_y-A_2E_2.\qquad(3.6.7)$$
> 因为 $E_1A_1\in\mathfrak{C}(\mathscr{X})$ 且 $A_2E_2\in\mathfrak{C}(\mathscr{Y})$，所以，由定理 3.6.5(2)，联合 (3.6.6) 式与 (3.6.7) 式便推出
> $$T+S\in\mathscr{F}(\mathscr{X},\mathscr{Y})\quad(\text{当 }\|S\|<1/\|R\|).$$
>
> 因为当 $\|S\|<1/\|R\|$ 时，$E_1$ 存在有界逆，所以这时
> $$E_1\in\mathscr{F}(\mathscr{X}),\quad\text{且}\quad\mathrm{ind}(E_1)=0.\qquad(3.6.8)$$
>
> 由 (3.6.6) 式及定理 3.6.6 得
> $$\mathrm{ind}(E_1)+\mathrm{ind}(R)+\mathrm{ind}(T+S)=0,\qquad(3.6.9)$$
> 又由 (3.6.5) 式及定理 3.6.6 得
> $$\mathrm{ind}(R)+\mathrm{ind}(T)=0.\qquad(3.6.10)$$
> 联合 (3.6.8) 式，(3.6.9) 式和 (3.6.10) 式，即得
> $$\mathrm{ind}(T+S)=\mathrm{ind}(T)\quad(\text{当 }\|S\|<1/\|R\|).$$

> [!remark] 注
> 从定理的证明中可直接看出，定理中的 $\varepsilon$ 有如下估计：若 $R$ 是 $T$ 的一个正则化子，则可取 $\varepsilon<1/\|R\|$。

作为例子，我们来考察本节一开始提到的奇异积分算子。设 $u\in L^2(S^1)$，其中 $S^1$ 表示 $\mathbb{R}^2$ 上的单位圆周。记

$$(Hu)(z)\triangleq\frac{1}{\pi i}\,\mathrm{P.V.}\int_{S^1}\frac{u(s)}{s-z}\,\mathrm{d}s\quad(\forall z\in S^1).$$

> [!proposition] 命题 3.6.8
> $H\in\mathscr{L}(L^2(S^1))$.

> [!proof]- 证
> 首先我们用 Fourier 级数建立 $L^2(S^1)$ 与 $l^2$ 间的等距同构。$\forall u\in L^2(S^1)$，将它展开成 Fourier 级数
> $$u(e^{i\theta})=\sum_{n=-\infty}^{\infty}c_n e^{in\theta}\quad(0\le\theta<2\pi),$$
> 其中
> $$c_n=\frac{1}{2\pi}\int_0^{2\pi}u(e^{i\theta})e^{-in\theta}\,\mathrm{d}\theta\quad(n=0,\pm1,\pm2,\dots).$$
> 容易验证：
> $$L^2(S^1)\ni u\mapsto\{c_n\}_{n=-\infty}^{\infty}\in l^2$$

> 是等距同构的。其次，注意到
> $$\frac{e^{i\varphi}}{e^{i\varphi}-e^{i\theta}}=\frac{1}{2}\Bigl(1+\frac{e^{i\varphi}+e^{i\theta}}{e^{i\varphi}-e^{i\theta}}\Bigr)=\frac{1}{2}\Bigl(1+i\cot\frac{\theta-\varphi}{2}\Bigr),$$
> 可见
> $$(Hu)(e^{i\theta})=\frac{1}{2\pi}\,\mathrm{P.V.}\int_0^{2\pi}\Bigl(1+i\cot\frac{\theta-\varphi}{2}\Bigr)u(e^{i\varphi})\,\mathrm{d}\varphi=c_0+i\tilde{u}(e^{i\theta}),$$
> 其中
> $$\tilde{u}(e^{i\theta})=\frac{1}{2\pi}\,\mathrm{P.V.}\int_0^{2\pi}u(e^{i\varphi})\cot\frac{\theta-\varphi}{2}\,\mathrm{d}\varphi$$
> 是 $u$ 的共轭函数，它有 Fourier 级数
> $$\tilde{u}(e^{i\theta})=-i\sum_{n=-\infty}^{\infty}c_n\,\mathrm{sign}(n)\,e^{in\theta},$$
> 其中
> $$\mathrm{sign}(n)=\begin{cases}-1,&n<0,\\0,&n=0,\\1,&n>0.\end{cases}$$
> 因此 $\tilde{u}\in L^2(S^1)$，并且 $\|\tilde{u}\|\le\|u\|$。此外，易见
> $$P:u\mapsto\sum_{n=0}^{\infty}c_n e^{in\theta}$$
> 是 $L^2(S^1)$ 上的投影算子。最后，注意到关系式
> $$Pu=\frac{1}{2}(u+i\tilde{u})+\frac{1}{2}c_0=\frac{1}{2}(u+Hu),$$
> 即得
> $$H=2P-I,\qquad(3.6.11)$$
> 所以有 $H\in\mathscr{L}(L^2(S^1))$.

> [!remark] 注
> 由 (3.6.11) 式立即得到：若 $a,b\in C(S^1)$，则
> $$aI+ibH=(a+ib)P+(a-ib)(I-P).\qquad(3.6.12)$$

> [!lemma] 引理 3.6.9
> $\forall\varphi\in C(S^1)$，如果定义算子
> $$[\varphi,P]\triangleq\varphi\cdot P-P\varphi\cdot,$$
> 其中 $\varphi\cdot$ 表示 $L^2(S^1)$ 上的乘法算子，$P$ 是命题 3.6.8 的证明中引进的投影算子，那么
> $$[\varphi,P]\in\mathfrak{C}(L^2(S^1))\quad(\forall\varphi\in C(S^1)).$$

> [!proof]- 证
> (1) 若 $\varphi=e^{im\theta}\,(m\in\mathbb{Z})$，则
> $$\begin{aligned}[\varphi,P]u&=\sum_{n=0}^{\infty}c_n e^{i(n+m)\theta}-\sum_{n\ge-m}^{\infty}c_n e^{i(m+n)\theta}\\&=\sum_{-m\le n\le 0}c_n e^{i(m+n)\theta},\end{aligned}$$
> 它是一个有穷秩算子。
>
> (2) 对任意的三角多项式 $\varphi=\sum_{|n|\le N}d_n e^{in\theta}$，由 (1)，$[\varphi,P]$ 也是有穷秩算子。
>
> (3) $\forall\varphi\in C(S^1)$，$\forall\varepsilon>0$，存在三角多项式 $\varphi_{\varepsilon}$，使得
> $$\|\varphi-\varphi_{\varepsilon}\|_{C(S^1)}<\varepsilon/2,$$
> 从而
> $$\|[\varphi,P]-[\varphi_{\varepsilon},P]\|_{\mathscr{L}(L^2(S^1))}=\|[\varphi-\varphi_{\varepsilon},P]\|_{\mathscr{L}(L^2(S^1))}<\varepsilon.$$
> 于是，由命题 3.1.2(3)，我们证明了：
> $$[\varphi,P]\in\mathfrak{C}(L^2(S^1)).$$

对 $\forall\varphi\in C(S^1)$，我们称

$$\nu_{\varphi}\triangleq\frac{1}{2\pi}\int_0^{2\pi}\mathrm{d}\arg\varphi(e^{i\theta})$$

为函数 $\varphi$ 关于原点的环绕数。

> [!theorem] 定理 3.6.10
> 若 $c,d\in C(S^1)$，满足 $(c\cdot d)(z)\neq0\,(\forall z\in S^1)$，则算子 $T=cP+d(I-P)\in\mathscr{F}(L^2(S^1))$，并且
> $$\mathrm{ind}(T)=\nu_d-\nu_c,$$
> 其中 $\nu_c$ 和 $\nu_d$ 分别是函数 $c$ 和 $d$ 关于原点的环绕数。

> [!proof]- 证
> (1) 取 $S=\frac{1}{c}\cdot P+\frac{1}{d}\cdot(I-P)$，按引理 3.6.9，它是 $T$ 的正则化子。
>
> (2) 注意到，由引理 3.6.9，
> $$\begin{aligned}T&=c\cdot P+d\cdot(I-P)\\&=Pc\cdot P+(I-P)d\cdot(I-P)+K,\end{aligned}$$
> 其中 $K\in\mathfrak{C}(L^2(S^1))$。若用 $l_+^2,l_-^2$ 分别表示 $PL^2(S^1)$ 与 $(I-P)L^2(S^1)$ 按 Fourier 展开对应的 $l^2$ 子空间，则
> $$Pc\cdot P\in\mathscr{F}(l_+^2),\quad(I-P)d\cdot(I-P)\in\mathscr{F}(l_-^2).$$
>
> 由假设 $c$ 的关于原点的环绕数是 $\nu_c$，这表明：$\exists c$ 与 $e^{i\nu_c\theta}$ 间的同伦，即存在连续映射
> $$F:[0,1]\times S^1\to\mathbb{C}\setminus\{0\},$$
> 使得
> $$F(0,e^{i\theta})=c(e^{i\theta}),\quad F(1,e^{i\theta})=e^{i\nu_c\theta}.$$
>
> 又因为 $|F|$ 在 $[0,1]\times S^1$ 上不为 $0$，所以有下界 $\delta>0$，分割 $[0,1]$ 为 $N$ 等分，使得在每个小区间 $[t_j,t_{j+1}]$ 上，
> $$|\Delta_jF|\triangleq\max_{t,s\in[t_j,t_{j+1}]}|F(t,e^{i\theta})-F(s,e^{i\theta})|<1/\delta.$$
>
> 应用定理 3.6.7 及其注，可得
> $$\mathrm{ind}(Pc\cdot P|_{l_+^2})=\mathrm{ind}(Pe^{i\nu_c\theta}\cdot P|_{l_+^2})=-\nu_c.$$
>
> 上式最后一个等号是因为 $Pe^{i\nu_c\theta}\cdot P|_{l_+^2}$ 是 $l_+^2$ 上的推移算子。同理
> $$\begin{aligned}\mathrm{ind}((I-P)d\cdot(I-P)|_{l_-^2})&=\mathrm{ind}((I-P)e^{i\nu_d\theta}\cdot(I-P)|_{l_-^2})\\&=\nu_d.\end{aligned}$$
>
> 从而 (参看习题 3.6.2)
> $$\mathrm{ind}(T)=\nu_d-\nu_c.$$

> [!remark] 注
> 定理 3.6.10 的逆命题也是对的，即如果
> $$c\cdot P+d\cdot(I-P)\in\mathscr{F}(L^2(S^1)),$$
> 那么 $(c\cdot d)(z)\neq0\,(\forall z\in S^1)$。参看本书下册第五章。

## 习题

> [!exercise] 习题
>
> (本节各题中的 $\mathscr{X},\mathscr{Y},\mathscr{Z}$ 均指 B 空间)
>
> **3.6.1** 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，$A\in\mathfrak{C}(\mathscr{X},\mathscr{Y})$，求证：
> (1) $T+A\in\mathscr{F}(\mathscr{X},\mathscr{Y})$；
> (2) $\mathrm{ind}(T+A)=\mathrm{ind}(T)$。
>
> **3.6.2** 设 $T\in\mathscr{F}(\mathscr{X})$，$S\in\mathscr{F}(\mathscr{Y})$，求证：
> (1) $T\oplus S\in\mathscr{F}(\mathscr{X}\oplus\mathscr{Y})$；
> (2) $\mathrm{ind}(T\oplus S)=\mathrm{ind}(T)+\mathrm{ind}(S)$。
>
> **3.6.3** 设 $\mathscr{X}\subset\mathscr{Y}$，并且 $\mathscr{X}\to\mathscr{Y}$ 的嵌入算子是紧的，又设 $T\in\mathscr{L}(\mathscr{X},\mathscr{Y})$ 满足：
> $$\|x\|_{\mathscr{X}}\le c(\|x\|_{\mathscr{Y}}+\|Tx\|_{\mathscr{Y}})\quad(\forall x\in\mathscr{X}),\qquad(3.6.13)$$
> 其中 $c$ 是一常数。求证：
> (1) $\dim N(T)<\infty$；
> (2) $R(T)$ 是闭的。
>
> **3.6.4** 在上题中，如果将 (1) 与 (2) 作为假设，求证：存在常数 $c>0$，使得 (3.6.13) 式成立。
>
> **3.6.5** 设 $T\in\mathscr{F}(\mathscr{X},\mathscr{Y})$，求证：
> (1) $T^*\in\mathscr{F}(\mathscr{Y}^*,\mathscr{X}^*)$；
> (2) $\mathrm{ind}(T^*)=-\mathrm{ind}(T)$。
>
> **3.6.6** 在例 3.6.4 中，求 $T$ 的左、右正则化子。
>
> **3.6.7** 设 $\varOmega\subset\mathbb{R}^2$ 是由光滑曲线 $\varGamma$ 围成的区域，$\mathscr{X}\subset C(\overline{\varOmega})$ 是由在 $\varOmega$ 内解析、在 $\overline{\varOmega}$ 上连续的函数组成的闭线性子空间。求证：限制算子
> $$R:u(z)\mapsto u(z)|_{z\in\varGamma}$$
> 是 $\mathscr{X}\to C(\varGamma)$ 的 Fredholm 算子，并求它的指标。
>
> **3.6.8** 设 $a_j(x)\in C[0,1]\,(j=1,2,\cdots,n)$，
> $$T=\Bigl(\frac{\mathrm{d}}{\mathrm{d}x}\Bigr)^n+a_1(x)\Bigl(\frac{\mathrm{d}}{\mathrm{d}x}\Bigr)^{n-1}+\cdots+a_n(x),$$
> 求证：$T\in\mathscr{F}(C^n[0,1],C[0,1])$，并求 $\mathrm{ind}(T)$。
>
> **3.6.9** 设 $a(x)\in C[0,1]$，$T=a(x)$，求证：
> $$T\in\mathscr{F}(C[0,1])\iff a(x)\neq0\,(\forall x\in[0,1]).$$
>
> **3.6.10** 设 $A\in\mathscr{L}(\mathscr{X})$，并 $\exists n\in\mathbb{N}$，使得
> $$I-A^n\in\mathfrak{C}(\mathscr{X}),$$
> 求证：$A\in\mathscr{F}(\mathscr{X})$。
>
> **3.6.11** 设 $T_1\in\mathscr{L}(\mathscr{X},\mathscr{Y})$，$T_2\in\mathscr{L}(\mathscr{Y},\mathscr{Z})$，使得 $T_2T_1\in\mathscr{F}(\mathscr{X},\mathscr{Z})$，求证：
> $$T_1\in\mathscr{F}(\mathscr{X},\mathscr{Y})\iff T_2\in\mathscr{F}(\mathscr{Y},\mathscr{Z}).$$
>
> **3.6.12** 设 $D$ 为复平面上的单位圆盘，$\widetilde{H}^2(D)$ 是 $D$ 上的 Hardy 空间，它指在 $D$ 内解析且其 Taylor 系数序列属于 $l^2$ 的函数全体。
> $$(f,g)\triangleq\sum_{n=0}^{\infty}a_n\bar{b}_n\quad(\forall f,g\in\widetilde{H}^2(D)),$$
> 其中
> $$f(z)=\sum_{n=0}^{\infty}a_n z^n,\quad g(z)=\sum_{n=0}^{\infty}b_n z^n\quad(\forall z\in D).$$
> 又记 $S^1=\partial D$，对 $\forall\varphi\in C(S^1)$，定义 Toeplitz 算子 $T_{\varphi}$ 如下：
> $$T_{\varphi}=PM_{\varphi}\iota,$$
> 其中 $P$ 是 $L^2(S^1)\to\widetilde{H}^2(D)$ 的正交投影算子，即
> $$P:u(e^{i\theta})=\sum_{n=-\infty}^{\infty}c_n e^{in\theta}\mapsto u(z)=\sum_{n=0}^{\infty}c_n z^n\quad(\forall z\in D),$$
> $M_{\varphi}$ 是 $L^2(S^1)\to L^2(S^1)$ 的乘法算子，即 $u\mapsto\varphi\cdot u$，而 $\iota$ 是 $\widetilde{H}^2(D)\to L^2(S^1)$ 的嵌入算子，即
> $$\iota:u(z)=\sum_{n=0}^{\infty}c_n z^n\mapsto u(e^{i\theta})=\sum_{n=0}^{\infty}c_n e^{in\theta}.$$
> 求证：若 $\varphi(s)\neq0\,(\forall s\in S^1)$，则 $T_{\varphi}\in\mathscr{F}(\widetilde{H}^2(D))$，并且
> $$\mathrm{ind}(T_{\varphi})=-\frac{1}{2\pi}\int_0^{2\pi}\mathrm{d}\arg\varphi(e^{i\theta}).$$
