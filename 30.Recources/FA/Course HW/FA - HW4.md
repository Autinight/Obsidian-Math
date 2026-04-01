> [!exercise] Exercise: 1
> 设 $(X_1, \|\cdot\|_1)$ 和 $(X_1, \|\cdot\|_1)$ 是两个 $B^*$ 空间, 在乘积空间 $X = X_1 \times X_2$ 中定义范数
> $$
> \|x\| = \max(\|x_1\|_1, \|x_2\|_2), \forall x = (x_1, x_2) \in X.
> $$
> 证明: 如果 $X_1$ 和 $X_2$ 完备, 则 $X$ 是 **Banach** 空间.

> [!exercise] Exercise: 2
> 考虑 $c$ 空间中的子空间
> $$
> M = \{x = \{\xi_k\} | \xi_1 = \xi_2 = \cdots = \operatorname{const}\}.
> $$
> 证明商空间 $c/M$ 与空间 $c_0$ 线性同构但不等距.

> [!exercise] Exercise: 3
> 考虑集合
> $$
> \{e_n := \{0, \cdots, 0, 1, 0, \cdots, 0\} (\text{第 } n \text{ 个数为 } 1, \text{ 其他为 } 0)\}_{n=1}^{\infty}.
> $$
> 证明: $\{e_n\}$ 是 $l^p(1 \le p < +\infty)$ 空间的 **Schauder** 基, 但不是 $l^\infty$ 空间的 **Schauder** 基.

> [!exercise] Exercise: 4
> 证明 $c_0$ 是可分的 Banach 空间.

> [!exercise] Exercise: 5
> 设$(X_1,\|\cdot\|_1), (X_2,\|\cdot\|_2)$是赋范空间, 在乘积线性空间$X_1\times X_2$中定义
> $$ \|z\|_1 = \|x_1\|_1 + \|x_2\|_2; \|z\|_2 = \max(\|x_1\|_1, \|x_2\|_2), $$
> 其中$z\in X_1\times X_2, z=(x_1,x_2)$. 证明: $\|z\|_1, \|z\|_2$是$X_1\times X_2$上的等价范数.


> [!exercise] Exercise: 6
> 证明: 若线性空间中两个范数等价, 则它们的诱导拓扑相同.

> [!exercise] Exercise: 7
> 证明: 线性赋范空间之间的线性映射 $T:X\to Y$ 是 (在诱导拓扑意义下) 连续的当且仅当 $T$ 是有界的, 即 $\exists C>0, \text{s.t.}$
> $$\|Tx\|_{Y}\le C\|x\|_{X}, \forall x\in X.$$

> [!exercise] Exercise: 8 
> 证明有限维赋范线性空间具有以下性质:
> - 任意范数等价;
> - 点列依范数收敛等价于在任一基底下坐标系数收敛;
> - 必是完备可分的;
> - 有界集必是列紧集.