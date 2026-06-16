代靖涵 25120222201319
> [!exercise] Exercise
> 设 $X \in \mathfrak{X}(M)$, 对于任意的 $\varphi \in A^r(M)$, 定义映射
> 
> $$i(X)\varphi: \underbrace{\mathfrak{X}(M) \times \cdots \times \mathfrak{X}(M)}_{r-1} \to C^{\infty}(M),$$
> 
> 使得 $(i(X)\varphi)(X_1, \cdots, X_{r-1}) = \varphi(X, X_1, \cdots, X_{r-1})$, $\forall X_1, \cdots, X_{r-1} \in \mathfrak{X}(M)$.
> 
> 证明:
> 
> (1) 对每一个 $\varphi \in A^r(M)$, $i(X)\varphi \in A^{r-1}(M)$.
> 
> (2) $i(X): A^r(M) \to A^{r-1}(M)$ 是 $C^{\infty}(M)$-线性映射.



> [!proof] Proof: 
> 1. 为了说明$i\left(X\right)$是$r-1$-线性的, 考虑到
>    $$ \begin{aligned} \begin{aligned} &\left(i\left(X\right)\varphi \right)\left(X_1,\cdots , f_{i}X_{i}+ g_{i}Y_{i}, \cdots ,X_{r-1}\right)\\&= \varphi \left(X, X_1,\cdots ,f_{i}X_{i}+ g_{i}Y_{i},\cdots , X_{r-1}\right)\\&= f_{i}\varphi \left(X,X_1,\cdots ,X_{i},\cdots ,X_{r-1}\right)\\&+ g_{i}\varphi \left(X, X_1,\cdots , Y_{i},\cdots ,X_{r-1}\right)\\&= f_{i} \left(i\left(X\right)\varphi \right)\left(X_1,\cdots ,X_{i},\cdots ,X_{r-1}\right)\\&+ g_{i}\left(i\left(X\right)\varphi \right)\left(X_1,\cdots ,Y_{i},\cdots ,X_{r-1}\right) \end{aligned} \end{aligned} $$ 
>    故$i\left(X\right)\varphi$对于第$i$个分量是线性的, 由于$i$是任意的, $i\left(X\right)\varphi$是$r-1$-线性的.
>    
>    为了说明$i\left(X\right)\varphi$是交错的, 取$i\neq j$, 则
>    $$ \begin{aligned} \begin{aligned} &\left(i\left(X\right)\varphi \right)\left(X_1,\cdots ,X_{i},\cdots ,X_{j},\cdots ,X_{r-1}\right)\\&= \varphi \left(X,X_1,\cdots ,X_{i}, \cdots ,X_{j},\cdots ,X_{r-1}\right)\\&= -\varphi \left(X,X_1,\cdots ,X_{j},\cdots ,X_{i},\cdots ,X_{r-1}\right)\\&= -\left(i\left(X\right)\varphi \right)\left(X_1,\cdots ,X_{j},\cdots ,X_{i},\cdots ,X_{r-1}\right) \end{aligned}  \end{aligned} $$ 
>    因此$i\left(X\right)\varphi$是交错的, 进而$i\left(X\right)\varphi \in A^{r-1}\left(M\right)$.
> 2. 对于$f\in C^{\infty}\left(M\right)$
>    $$ \begin{aligned} i\left(X\right)\left(f\varphi \right)\left(X_1,\cdots ,X_{r-1}\right)&=f\varphi \left(X,X_1,\cdots ,X_{r-1}\right)\\&= f\left(i\left(X\right)\varphi \right)\left(X_1,\cdots ,X_{r-1}\right) \end{aligned} $$ 
>    因此
>    $$ i\left(X\right)\left(f\varphi \right)= f \left(i\left(X\right)\varphi \right) $$ 
>    因此 $i\left(X\right)$是$C^{\infty}\left(M\right)$-线性的.


> [!exercise] Exercise
> (i.e. 对于 $\alpha \in \mathcal{A}^r(M)$, $X \in \mathfrak{X}(M)$, 定义映射) $\mathcal{L}_X \alpha: \mathfrak{X}(M) \times \cdots \times \mathfrak{X}(M) \to C^\infty(M)$,
> 
> 使得
> 
> $$
> (\mathcal{L}_X \alpha)(Y_1, \cdots, Y_r) = X(\alpha(Y_1, \cdots, Y_r)) - \sum_{i=1}^r \alpha(Y_1, \cdots, [X, Y_i], \cdots, Y_r),
> $$
> 
> $$\forall Y_1, \cdots, Y_r \in \mathfrak{X}(M).$$
> 
> 证明:
> 
> (1) $\mathcal{L}_X \alpha \in \mathcal{A}^r(M)$.
> 
> (2) 对于 $\alpha \in \mathcal{A}^r(M)$, $\beta \in \mathcal{A}^s(M)$, 有
> 
> $$
> \mathcal{L}_X(\alpha \wedge \beta) = (\mathcal{L}_X \alpha) \wedge \beta + \alpha \wedge (\mathcal{L}_X \beta).
> $$
> 
> (3) $\mathcal{L}_X = i(X) \circ d + d \circ i(X): \mathcal{A}^r(M) \to \mathcal{A}^r(M)$.
> 
> (4) $\mathcal{L}_X \circ d = d \circ \mathcal{L}_X: \mathcal{A}^r(M) \to \mathcal{A}^{r+1}(M)$.

> [!proof] Proof: 
> (1) 先验证 $r$-线性. 对第 $i$ 个分量,
> $$ \begin{aligned} \begin{aligned} &(\mathcal{L}_X\alpha)(Y_1,\cdots, fY_i+gZ_i,\cdots, Y_r)\\ &= X\big(\alpha(Y_1,\cdots, fY_i+gZ_i,\cdots, Y_r)\big) \\ &\quad - \sum_{j \neq i} \alpha(Y_1,\cdots, [X,Y_j],\cdots, fY_i+gZ_i,\cdots, Y_r) \\ &\quad - \alpha(Y_1,\cdots, [X, fY_i+gZ_i],\cdots, Y_r). \end{aligned} \end{aligned} $$
> 
> 由 $\alpha$ 的 $C^{\infty}$-多重线性,
> $$ \alpha(\cdots, fY_i+gZ_i,\cdots) = f\alpha(\cdots,Y_i,\cdots) + g\alpha(\cdots,Z_i,\cdots). $$
> 于是第一项
> $$ \begin{aligned} \begin{aligned} X\big(\alpha(\cdots, fY_i+gZ_i,\cdots)\big) &= X\big(f\alpha(\cdots,Y_i,\cdots) + g\alpha(\cdots,Z_i,\cdots)\big)\\ &= (Xf)\alpha(\cdots,Y_i,\cdots) + fX(\alpha(\cdots,Y_i,\cdots)) \\ &\quad + (Xg)\alpha(\cdots,Z_i,\cdots) + gX(\alpha(\cdots,Z_i,\cdots)). \end{aligned} \end{aligned} $$
> 
> 第二项由 $\alpha$ 的线性性
> $$ f\sum_{j\neq i}\alpha(\cdots,[X,Y_j],\cdots,Y_i,\cdots) + g\sum_{j\neq i}\alpha(\cdots,[X,Y_j],\cdots,Z_i,\cdots). $$
> 
> 第三项利用 $[X, fY_i+gZ_i] = f[X,Y_i] + g[X,Z_i] + (Xf)Y_i + (Xg)Z_i$,
> $$ \begin{aligned} \begin{aligned} \alpha(\cdots, [X,fY_i+gZ_i],\cdots) &= f\alpha(\cdots,[X,Y_i],\cdots) + g\alpha(\cdots,[X,Z_i],\cdots) \\ &\quad + (Xf)\alpha(\cdots,Y_i,\cdots) + (Xg)\alpha(\cdots,Z_i,\cdots). \end{aligned} \end{aligned} $$
> 
> 三项相加, $(Xf)\alpha(\cdots,Y_i,\cdots)$ 与 $(Xg)\alpha(\cdots,Z_i,\cdots)$ 恰好抵消, 得
> $$ f(\mathcal{L}_X\alpha)(\cdots,Y_i,\cdots) + g(\mathcal{L}_X\alpha)(\cdots,Z_i,\cdots). $$
> 故 $\mathcal{L}_X\alpha$ 对第 $i$ 分量 $C^{\infty}$-线性, 从而是 $r$-线性的.
> 
> 再验证交错性. 对 $p \neq q$, 交换 $Y_p$ 与 $Y_q$:
> $$ \begin{aligned} \begin{aligned} &(\mathcal{L}_X\alpha)(\cdots, Y_q,\cdots, Y_p,\cdots) \\ &= X\big(\alpha(\cdots,Y_q,\cdots,Y_p,\cdots)\big) - \sum_k \alpha(\cdots,Y_q,\cdots,Y_p,\cdots,[X,Y_k],\cdots) \\ &= -X\big(\alpha(\cdots,Y_p,\cdots,Y_q,\cdots)\big) + \sum_k \alpha(\cdots,Y_p,\cdots,Y_q,\cdots,[X,Y_k],\cdots) \\ &= -(\mathcal{L}_X\alpha)(\cdots,Y_p,\cdots,Y_q,\cdots). \end{aligned} \end{aligned} $$
> 因此 $\mathcal{L}_X\alpha$ 是交错的, 从而 $\mathcal{L}_X\alpha \in \mathcal{A}^r(M)$.
> 
> (2) 由外积定义,
> $$ (\alpha \wedge \beta)(Y_1,\cdots,Y_{r+s}) = \frac{1}{r!s!}\sum_{\sigma \in S_{r+s}} \operatorname{sgn}(\sigma)\, \alpha(Y_{\sigma(1)},\cdots,Y_{\sigma(r)})\,\beta(Y_{\sigma(r+1)},\cdots,Y_{\sigma(r+s)}). $$
> 代入 $\mathcal{L}_X$ 定义并展开 $X(\alpha(\cdots)\beta(\cdots)) = X(\alpha(\cdots))\beta(\cdots) + \alpha(\cdots)X(\beta(\cdots))$, 第二项中 $[X,Y_i]$ 落入 $\alpha$ 的变元时贡献 $\sum_{k=1}^r \alpha(\cdots,[X,Y_{\sigma(k)}],\cdots)$, 落入 $\beta$ 时贡献 $\sum_{l=r+1}^{r+s} \beta(\cdots,[X,Y_{\sigma(l)}],\cdots)$. 整理得
> $$ \begin{aligned} \begin{aligned} \mathcal{L}_X(\alpha \wedge \beta)(Y_1,\cdots) &= \frac{1}{r!s!}\sum_{\sigma}\operatorname{sgn}(\sigma) (\mathcal{L}_X\alpha)(Y_{\sigma(1)},\cdots)\,\beta(Y_{\sigma(r+1)},\cdots) \\ &\quad + \frac{1}{r!s!}\sum_{\sigma}\operatorname{sgn}(\sigma) \alpha(Y_{\sigma(1)},\cdots)\,(\mathcal{L}_X\beta)(Y_{\sigma(r+1)},\cdots) \\ &= (\mathcal{L}_X\alpha \wedge \beta + \alpha \wedge \mathcal{L}_X\beta)(Y_1,\cdots,Y_{r+s}). \end{aligned} \end{aligned} $$
> 
> (3) 首先验证 $0$-形式: 对 $f \in C^{\infty}(M)$,
> $$ \mathcal{L}_X f = Xf = i(X)df = (i(X)d + di(X))f. $$
> 由 (2) 知 $\mathcal{L}_X$ 是外代数的导子 (无符号 Leibniz). 另一方面, 直接计算:
> $$ \begin{aligned} \begin{aligned} (i(X)d + di(X))(\alpha \wedge \beta) &= i(X)(d\alpha \wedge \beta + (-1)^r \alpha \wedge d\beta) + d(i(X)\alpha \wedge \beta + (-1)^r \alpha \wedge i(X)\beta) \\ &= i(X)d\alpha \wedge \beta + (-1)^{r+1}d\alpha \wedge i(X)\beta + (-1)^r i(X)\alpha \wedge d\beta + \alpha \wedge i(X)d\beta \\ &\quad + di(X)\alpha \wedge \beta + (-1)^{r-1}i(X)\alpha \wedge d\beta + (-1)^r d\alpha \wedge i(X)\beta + \alpha \wedge di(X)\beta. \end{aligned} \end{aligned} $$
> 交叉项 $(-1)^{r+1}d\alpha \wedge i(X)\beta + (-1)^r d\alpha \wedge i(X)\beta = 0$, 同理 $(-1)^r i(X)\alpha \wedge d\beta + (-1)^{r-1}i(X)\alpha \wedge d\beta = 0$. 剩余恰为
> $$ (i(X)d + di(X))\alpha \wedge \beta + \alpha \wedge (i(X)d + di(X))\beta. $$
> 故 $i(X)d + di(X)$ 亦是外代数的导子. 现在在恰当 $1$-形式 $df$ 上比较:
> $$ \begin{aligned} \mathcal{L}_X(df)(Y) &= X(df(Y)) - df([X,Y]) = X(Yf) - [X,Y]f = YXf, \\ (i(X)d + di(X))(df)(Y) &= d(Xf)(Y) = YXf. \end{aligned} $$
> 两者在 $0$-形式与恰当 $1$-形式上一致, 且均满足同样的 Leibniz 法则. 由于任意 $r$-形式局部可表为 $f_0\,df_1 \wedge \cdots \wedge df_r$ 的线性组合, 由导子性质归纳即得两者在全 $\mathcal{A}^r(M)$ 上一致.
> 
> (4) 直接由 (3) 及 $d^2 = 0$:
> $$ \begin{aligned} \mathcal{L}_X \circ d &= (i(X)d + di(X)) \circ d = i(X)d^2 + d i(X) d = d i(X) d, \\ d \circ \mathcal{L}_X &= d \circ (i(X)d + di(X)) = d i(X) d + d^2 i(X) = d i(X) d. \end{aligned} $$
> 故 $\mathcal{L}_X \circ d = d \circ \mathcal{L}_X$.


> [!exercise] 4.8. 
> 已知
> $\alpha = xdy + ydy + zdz$, $\beta = yzdx + zxdy + xydz$.
> 
> 求: (1) $d\alpha$, (2) $d\beta$, (3) $d(\alpha \wedge \beta)$.

> [!proof] Solution: 
> (1) $d\alpha = d(xdy) + d(ydy) + d(zdz) = dx \wedge dy + dy \wedge dy + dz \wedge dz = dx \wedge dy$.
> 
> (2)
> $$ \begin{aligned} \begin{aligned} d\beta &= (zdy + ydz)\wedge dx + (xdz + zdx)\wedge dy + (ydx + xdy)\wedge dz \\ &= z\,dy\wedge dx + y\,dz\wedge dx + x\,dz\wedge dy + z\,dx\wedge dy + y\,dx\wedge dz + x\,dy\wedge dz \\ &= (-z+z)\,dx\wedge dy + (-y+y)\,dx\wedge dz + (-x+x)\,dy\wedge dz = 0. \end{aligned} \end{aligned} $$
> 
> (3) $d(\alpha \wedge \beta) = d\alpha \wedge \beta - \alpha \wedge d\beta = dx\wedge dy \wedge \beta$,
> $$ \begin{aligned} &= (dx\wedge dy)\wedge (yz\,dx + zx\,dy + xy\,dz) = xy\,dx\wedge dy\wedge dz. \end{aligned} $$

> [!exercise] 4.10. 
> 设
> $M = \mathbb{R}^2 \setminus \{0\}$, 使
> $$\omega = \frac{xdx + ydy}{x^2 + y^2}.$$
> 1. 证明:$\omega$是闭微分形式.
> 2. 证明: $\omega$是恰当微分形式, 并且求函数$f:M\to \mathbb{R}$使得$\omega = df$.

> [!proof] Proof: 
> (1)
> $$ \begin{aligned} \begin{aligned} d\omega &= d\!\left(\frac{x}{x^2+y^2}\right)\!\wedge dx + d\!\left(\frac{y}{x^2+y^2}\right)\!\wedge dy \\ &= \left(\frac{y^2-x^2}{(x^2+y^2)^2}dx - \frac{2xy}{(x^2+y^2)^2}dy\right)\!\wedge dx + \left(-\frac{2xy}{(x^2+y^2)^2}dx + \frac{x^2-y^2}{(x^2+y^2)^2}dy\right)\!\wedge dy \\ &= -\frac{2xy}{(x^2+y^2)^2}\,dy\wedge dx - \frac{2xy}{(x^2+y^2)^2}\,dx\wedge dy = 0. \end{aligned} \end{aligned} $$
> 故 $\omega$ 是闭形式.
> 
> (2) 注意到
> $$ \omega = \frac{xdx + ydy}{x^2 + y^2} = \frac{1}{2}\cdot\frac{d(x^2+y^2)}{x^2+y^2} = \frac{1}{2}\,d\!\left(\ln(x^2+y^2)\right). $$
> 取 $f(x,y) = \dfrac{1}{2}\ln(x^2+y^2)$, 则 $\omega = df$, 故 $\omega$ 是恰当形式.


> [!exercise] Exercise: 
> 证明:
> (1) 若 $\alpha, \beta$ 是闭微分式, 则 $\alpha \wedge \beta$ 是闭微分式.
> 
> (2) 若 $\alpha$ 是闭微分式, $\beta$ 是恰当微分式, 则 $\alpha \wedge \beta$ 是恰当微分式.

> [!proof] Proof: 
> (1) 设 $d\alpha = d\beta = 0$, 则
> $$ d(\alpha \wedge \beta) = d\alpha \wedge \beta + (-1)^{\deg\alpha}\alpha \wedge d\beta = 0. $$
> 故 $\alpha \wedge \beta$ 是闭形式.
> 
> (2) 设 $d\alpha = 0$, $\beta = d\gamma$. 则 $\alpha \wedge \beta = \alpha \wedge d\gamma$. 由于
> $$ d(\alpha \wedge \gamma) = d\alpha \wedge \gamma + (-1)^{\deg\alpha}\alpha \wedge d\gamma = (-1)^{\deg\alpha}\alpha \wedge \beta, $$
> 移项得 $\alpha \wedge \beta = d\big((-1)^{\deg\alpha}\,\alpha \wedge \gamma\big)$, 故 $\alpha \wedge \beta$ 是恰当形式.
