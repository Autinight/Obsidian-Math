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

> [!exercise] 4.11
> 证明:
> (1) 若 $\alpha, \beta$ 是闭微分式, 则 $\alpha \wedge \beta$ 是闭微分式.
> 
> (2) 若 $\alpha$ 是闭微分式, $\beta$ 是恰当微分式, 则 $\alpha \wedge \beta$ 是恰当微分式.
