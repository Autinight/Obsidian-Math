### 🏆 Algebraic Topology Hatcher Section 3.2 核心刷题进度表

#### 🟢 第一阶段：标准模型与基本计算
*   [ ] **⭐ Ex 1 (曲面乘法)**：**必做！** 计算闭可定向曲面 $M_g$ 的 cup product 结构，建立曲面上一维类交叉配对的基本模型。
*   [ ] **⭐ Ex 6 (射影幂映射)**：**必做！** 先从 $\mathbb{C}P^1$ 的次数出发，再用 cup product 推出 $\mathbb{C}P^n$ 上诱导同态。
*   [ ] **⭐ Ex 7 (环区分空间)**：**必做！** 用 $\mathbb{Z}_2$ 系数 cup product 区分 $\mathbb{R}P^3$ 与 $\mathbb{R}P^2 \vee S^3$，训练上同调环作为同伦不变量的用法。

#### 🔵 第二阶段：自然性、消失定理与映射阻碍
*   [ ] **⭐ Ex 2 (乘积消失)**：**必做！** 用相对 cup product 证明可由少数 contractible open sets 覆盖时的高重 cup product 消失，理解 suspension 的乘法平凡性。
*   [ ] **⭐ Ex 3 (射影阻碍)**：**必做！** 用 cup product 的自然性排除射影空间之间的某些映射，并推出 Borsuk-Ulam theorem。
*   [ ] **⭐ Ex 4 (Lefschetz 应用)**：**重要！** 结合 $\mathbb{C}P^n$ 的上同调环与 Lefschetz fixed point theorem，判断自映射何时必有不动点。

#### 🟡 第三阶段：系数变化与环结构稳定性
*   [ ] **⭐ Ex 8 (换系数差异)**：**必做！** 比较两个整数上同调环同构但 $\mathbb{Z}_p$ 上同调环不同的空间，理解系数对 cup product 的真实影响。
*   [ ] **⭐ Ex 9 (无扭降模)**：**必做！** 证明无扭同调时 $H^*(X;\mathbb{Z}_p)$ 由 $H^*(X;\mathbb{Z}) \otimes \mathbb{Z}_p$ 决定，作为 Ex 8 的反面定理。

#### 🔴 第四阶段：曲面配对与分解阻碍
*   [ ] **⭐ Ex 18 (曲面非退化)**：**必做！** 证明闭曲面上一维上同调类总能找到非零 cup product 配偶，并用它排除非平凡 wedge decomposition。

---

### 💡 考前 Check 总结

1.  **cup product 的基本计算模型**：
    - [ ] 能写出 $H^*(M_g;\mathbb{Z})$ 的乘法结构，特别是 $a_i b_i$ 与基本类的关系。
    - [ ] 能从 $\mathbb{C}P^n$ 的生成元 $\alpha \in H^2$ 推出任意环同态在所有次数上的作用。
    - [ ] 能说明 wedge sum 中来自不同 wedge summand 的正维 cup product 为什么为零。

2.  **自然性与映射阻碍**：
    - [ ] 能用 $f^*(xy)=f^*(x)f^*(y)$ 排除 $\mathbb{R}P^n \to \mathbb{R}P^m$ 或 $\mathbb{C}P^n \to \mathbb{C}P^m$ 的某些映射。
    - [ ] 能把 Borsuk-Ulam theorem 转化为不存在 $\mathbb{R}P^n \to \mathbb{R}P^{n-1}$ 的问题。
    - [ ] 能用上同调环同态约束 Lefschetz number 的可能值。

3.  **相对 cup product 与乘法消失**：
    - [ ] 能写出相对 cup product $H^k(X,A;R) \times H^\ell(X,B;R) \to H^{k+\ell}(X,A\cup B;R)$ 的使用方式。
    - [ ] 能证明若 $X=A\cup B$ 且 $A,B$ contractible，则正维 cup product 全部为零。
    - [ ] 能推广到 $n$ 个 contractible open subsets，并得到所有 $n$-fold 正维 cup product 为零。

4.  **系数变化与空间区分**：
    - [ ] 能解释为什么整数系数上同调环同构，不一定推出模 $p$ 系数上同调环同构。
    - [ ] 能说明在 $H_n(X;\mathbb{Z})$ 全部自由时，$H^*(X;\mathbb{Z}_p)$ 与 $H^*(X;\mathbb{Z})\otimes\mathbb{Z}_p$ 作为环同构。
    - [ ] 能用 cup product 的非平凡性区分同调群相近但同伦型不同的空间。

---

### 习题

> [!exercise] EXERCISE 3.2.1.
> Assuming as known the cup product structure on the torus $S^1 \times S^1$, compute the cup product structure in $H^*(M_g)$ for $M_g$ the closed orientable surface of genus $g$ by using the quotient map from $M_g$ to a wedge sum of $g$ tori, shown below.

> [!exercise] EXERCISE 3.2.2.
> Using the cup product
> $$
> H^k(X,A;R) \times H^\ell(X,B;R) \to H^{k+\ell}(X,A \cup B;R),
> $$
> show that if $X$ is the union of contractible open subsets $A$ and $B$, then all cup products of positive-dimensional classes in $H^*(X;R)$ are zero. This applies in particular if $X$ is a suspension. Generalize to the situation that $X$ is the union of $n$ contractible open subsets, to show that all $n$-fold cup products of positive-dimensional classes are zero.

> [!exercise] EXERCISE 3.2.3.
> (a) Using the cup product structure, show there is no map $\mathbb{R}P^n \to \mathbb{R}P^m$ inducing a nontrivial map
> $$
> H^1(\mathbb{R}P^m;\mathbb{Z}_2) \to H^1(\mathbb{R}P^n;\mathbb{Z}_2)
> $$
> if $n > m$. What is the corresponding result for maps $\mathbb{C}P^n \to \mathbb{C}P^m$?
> 
> (b) Prove the Borsuk-Ulam theorem by the following argument. Suppose on the contrary that $f:S^n \to \mathbb{R}^n$ satisfies $f(x) \ne f(-x)$ for all $x$. Then define $g:S^n \to S^{n-1}$ by
> $$
> g(x) = \frac{f(x) - f(-x)}{|f(x) - f(-x)|},
> $$
> so $g(-x) = -g(x)$ and $g$ induces a map $\mathbb{R}P^n \to \mathbb{R}P^{n-1}$. Show that part (a) applies to this map.

> [!exercise] EXERCISE 3.2.4.
> Apply the Lefschetz fixed point theorem to show that every map $f:\mathbb{C}P^n \to \mathbb{C}P^n$ has a fixed point if $n$ is even, using the fact that
> $$
> f^*:H^*(\mathbb{C}P^n;\mathbb{Z}) \to H^*(\mathbb{C}P^n;\mathbb{Z})
> $$
> is a ring homomorphism. When $n$ is odd show there is a fixed point unless $f^*(\alpha) = -\alpha$, for $\alpha$ a generator of $H^2(\mathbb{C}P^n;\mathbb{Z})$. [See Exercise 3 in §2.C for an example of a map without fixed points in this exceptional case.]

> [!exercise] EXERCISE 3.2.6.
> Use cup products to compute the map
> $$
> H^*(\mathbb{C}P^n;\mathbb{Z}) \to H^*(\mathbb{C}P^n;\mathbb{Z})
> $$
> induced by the map $\mathbb{C}P^n \to \mathbb{C}P^n$ that is a quotient of the map $\mathbb{C}^{n+1} \to \mathbb{C}^{n+1}$ raising each coordinate to the $d^{\text{th}}$ power,
> $$
> (z_0,\cdots,z_n) \mapsto (z_0^d,\cdots,z_n^d),
> $$
> for a fixed integer $d > 0$. [First do the case $n = 1$.]

> [!exercise] EXERCISE 3.2.7.
> Use cup products to show that $\mathbb{R}P^3$ is not homotopy equivalent to $\mathbb{R}P^2 \vee S^3$.

> [!exercise] EXERCISE 3.2.8.
> Let $X$ be $\mathbb{C}P^2$ with a cell $e^3$ attached by a map $S^2 \to \mathbb{C}P^1 \subset \mathbb{C}P^2$ of degree $p$, and let $Y = M(\mathbb{Z}_p,2) \vee S^4$. Thus $X$ and $Y$ have the same $3$-skeleton but differ in the way their $4$-cells are attached. Show that $X$ and $Y$ have isomorphic cohomology rings with $\mathbb{Z}$ coefficients but not with $\mathbb{Z}_p$ coefficients.

> [!exercise] EXERCISE 3.2.9.
> Show that if $H_n(X;\mathbb{Z})$ is free for each $n$, then $H^*(X;\mathbb{Z}_p)$ and $H^*(X;\mathbb{Z}) \otimes \mathbb{Z}_p$ are isomorphic as rings, so in particular the ring structure with $\mathbb{Z}$ coefficients determines the ring structure with $\mathbb{Z}_p$ coefficients.

> [!exercise] EXERCISE 3.2.18.
> For the closed orientable surface $M$ of genus $g \ge 1$, show that for each nonzero $\alpha \in H^1(M;\mathbb{Z})$ there exists $\beta \in H^1(M;\mathbb{Z})$ with $\alpha\beta \ne 0$. Deduce that $M$ is not homotopy equivalent to a wedge sum $X \vee Y$ of CW complexes with nontrivial reduced homology. Do the same for closed nonorientable surfaces using cohomology with $\mathbb{Z}_2$ coefficients.
