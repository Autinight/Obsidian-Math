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
> $$(\mathcal{L}_X \alpha)(Y_1, \cdots, Y_r) = X(\alpha(Y_1, \cdots, Y_r)) - \sum_{i=1}^r \alpha(Y_1, \cdots, [X, Y_i], \cdots, Y_r),$$
> 
> $$\forall Y_1, \cdots, Y_r \in \mathfrak{X}(M).$$
> 
> 证明:
> 
> (1) $\mathcal{L}_X \alpha \in \mathcal{A}^r(M)$.
> 
> (2) 对于 $\alpha \in \mathcal{A}^r(M)$, $\beta \in \mathcal{A}^s(M)$, 有
> 
> $$\mathcal{L}_X(\alpha \wedge \beta) = (\mathcal{L}_X \alpha) \wedge \beta + \alpha \wedge (\mathcal{L}_X \beta).$$
> 
> (3) $\mathcal{L}_X = i(X) \circ d + d \circ i(X): \mathcal{A}^r(M) \to \mathcal{A}^r(M)$.
> 
> (4) $\mathcal{L}_X \circ d = d \circ \mathcal{L}_X: \mathcal{A}^r(M) \to \mathcal{A}^{r+1}(M)$.


> [!exercise] 4.8. 
> 已知
> $\alpha = xdy + ydy + zdz$, $\beta = yzdx + zxdy + xydz$.
> 
> 求: (1) $d\alpha$, (2) $d\beta$, (3) $d(\alpha \wedge \beta)$.

> [!exercise] 4.10. 
> 设
> $M = \mathbb{R}^2 \setminus \{0\}$, 使
> $$\omega = \frac{xdx + ydy}{x^2 + y^2}.$$
> 1. 证明:$\omega$是闭微分形式.
> 2. 证明: $\omega$是恰当微分形式, 并且求函数$f:M\to \mathbb{R}$使得$\omega = df$.


> [!exercise] Exercise: 
> 证明:
> (1) 若 $\alpha, \beta$ 是闭微分式, 则 $\alpha \wedge \beta$ 是闭微分式.
> 
> (2) 若 $\alpha$ 是闭微分式, $\beta$ 是恰当微分式, 则 $\alpha \wedge \beta$ 是恰当微分式.
