### 🏆 代数拓扑 Section 2.2 核心刷题进度表

#### 🟢 第一阶段：度数理论 —— §2.2 的灵魂
* [x] **⭐ Ex 1 (Brouwer 不动点定理)**：**必做！** 用度数理论证明 Brouwer，把南北半球都映到南半球再取度数。这是 Brouwer 最早的证明思路。 ✅ 2026-05-02
* [x] **⭐ Ex 2 ($S^{2n}$ 的不动点与 $\mathbb{R}P^n$)**：**必做！** $S^{2n}$ 上必有 $f(x)=\pm x$，推论 $\mathbb{R}P^{2n}$ 不动点性质。奇维数构造反例——掌握奇偶维数的本质差异。 ✅ 2026-05-03
* [x] **⭐ Ex 3 (度数为零的映射)**：**必做！** $f$ 度数为零 $\implies$ 既有不动点又有对径点。再应用于球面上向量场的径向内外指向——几何直觉与代数度数的桥梁。 ✅ 2026-05-03
* [x] **⭐ Ex 7 (线性映射诱导的同调)**：**重要！** 可逆线性变换在 $H_n(\mathbb{R}^n,\mathbb{R}^n-\{0\})$ 上诱导 $\pm 1$，由行列式正负决定。用 Gauss 消元法化到对角阵——线性代数与拓扑的交汇。 ✅ 2026-05-03
* [x] **⭐ Ex 8 (多项式的度数)**：**必做！** 多项式 $f(z)$ 紧化到 $\hat{f}:S^2\to S^2$，拓扑度数 = 代数度数。局部度数 = 根的重数——复分析与代数拓扑的完美对应。 ✅ 2026-05-03

#### 🔵 第二阶段：胞腔同调 —— 计算工具的内核
* [x] **⭐ Ex 15 ($H_n(X^n)$ 的自由性)**：**必做！** CW 复形的 $n$-骨架同调是自由的，等同于胞腔边缘映射的核。理解为什么胞腔链群 $\to$ 同调的过程恰好 kill 掉挠。 ✅ 2026-05-04
* [x] **⭐ Ex 19 ($\mathbb{R}P^n/\mathbb{R}P^m$ 的同调)**：**必做！** 用标准 CW 结构，$\mathbb{R}P^m$ 是 $m$-骨架，胞腔链复形直接读出——商空间同调计算的经典模板。 ✅ 2026-05-04

#### 🔴 第三阶段：Mayer–Vietoris 序列与 Euler 示性数
* [x] **⭐ Ex 26 (收缩核与锥)**：**必做！** $A$ 在 $X$ 中可缩 $\iff$ $X$ 是 $X\cup CA$ 的收缩核，推论 $H_n(X,A)\cong\widetilde{H}_n(X)\oplus\widetilde{H}_{n-1}(A)$。锥和悬挂的代数化理解。 ✅ 2026-05-05
*   [ ] **⭐ Ex 30 (映射环的同调)**：**必做！** 用长正合列 $\cdots H_n(X)\xrightarrow{\mathbb{1}-f_*}H_n(X)\to H_n(T_f)\to\cdots$ 算五类映射环：反射、度数二、因子反射、交换因子——模板化计算训练。
* [x] **⭐ Ex 32 (悬挂同构 via MV)**：**必做！** 用 Mayer–Vietoris 序列证明 $\widetilde{H}_n(SX)\cong\widetilde{H}_{n-1}(X)$。与 §2.1 Ex 20 呼应，体会不同证明路径的优劣。 ✅ 2026-05-05

#### ⚫ 第四阶段：系数与代数收尾
*   [ ] **⭐ Ex 40 ($\mathbb{Z}_n$ 系数的万有系数短正合列)**：**必做！** 从 $0\to C_i(X)\xrightarrow{n}C_i(X)\to C_i(X;\mathbb{Z}_n)\to 0$ 直接推出 $0\to H_i/nH_i\to H_i(X;\mathbb{Z}_n)\to n\text{-Torsion}(H_{i-1})\to 0$。推论 $\widetilde{H}_*(X;\mathbb{Z}_p)=0$ $\iff$ $\widetilde{H}_*(X)$ 是 $\mathbb{Q}$-向量空间。
*   [ ] **⭐ Ex 43 (链复形的分裂与万有系数定理)**：**必做！** 自由 Abel 群链复形 $\cong\bigoplus(0\to L_{n+1}\to K_n\to 0)$，有限生成时进一步分裂为 $0\to\mathbb{Z}\xrightarrow{m}\mathbb{Z}\to 0$。直接读出 $H_n(X;G)$ 的万有系数公式——代数拓扑中最重要的代数工具之一。

#### 🟡 选做：加深理解的补充题
*   [ ] **Ex 9 (a)(c) (两个 2-复形的同调)**：两极粘合、三圆盘边界粘合——具体空间的手算训练。
*   [ ] **Ex 12 ($S^1\times S^1\to S^2$ 商映射)**：证明 collapsing $S^1\vee S^1$ 诱导 $H_2$ 同构故非零伦，但 $S^2\to S^1\times S^1$ 必零伦——同调与同伦的张力。
*   [ ] **Ex 13 (度数为 2 和 3 的 2-cell 粘合)**：计算所有子复形同调，证明 $X\simeq S^2$ 但唯一使 $X\to X/A$ 为同伦等价的子复形是平凡的——细微的反例意识。

---

### 💡 考前 Check 总结

1.  **度数理论核心**：
    - [ ] 能口述 Brouwer 不动点定理的度数证明（南北半球构造）。
    - [ ] 理解 $S^n$ 上对径映射的度数：$n$ 偶时为 $-1$ 不可同伦于恒等，$n$ 奇时为 $+1$。
    - [ ] 掌握 $\deg(f)=0\implies\exists x,y$ 满足 $f(x)=x,\;f(y)=-y$ 的证明。
    - [ ] 熟记多项式紧化到 $S^2$ 后度数等于代数度数，局部度数等于根的重数。
2.  **胞腔同调计算模板**：
    - [ ] 能写出标准 CW 结构下 $\mathbb{R}P^n$ 的胞腔链复形，理解系数为什么交替出现 $0$ 和 $\times 2$。
    - [ ] 掌握商空间 $X/A$ 的胞腔链复形（当 $A$ 是子复形时）。
    - [ ] 理解 $H_n(X^n)$ 自由是因为它是 $H_n(X^n,X^{n-1})\to H_{n-1}(X^{n-1},X^{n-2})$ 的核，而边缘映射的像可能产生挠。
3.  **Mayer–Vietoris 与 Euler 示性数**：
    - [ ] 能写出映射环 $T_f$ 的长正合列并能直接套用。
    - [ ] 熟记悬挂同构的两种证明：锥分解 vs Mayer–Vietoris。
    - [ ] 掌握 Euler 示性数的三项核心公式：乘积、并、覆叠。
4.  **系数与代数工具**：
    - [ ] 理解 $H_n(X;\mathbb{Z}_m)$ 与 $H_n(X)$、$H_{n-1}(X)$ 的关系（万有系数定理的 $\mathbb{Z}_m$ 特例）。
    - [ ] 能口述链复形分裂定理的证明思路（正合列分裂 + 矩阵化到 echelon 形式）。

---

### 习题

> [!exercise] EXERCISE 2.2.1.
> Prove the Brouwer fixed point theorem for maps $f : D^n \to D^n$ by applying degree theory to the map $S^n \to S^n$ that sends both the northern and southern hemispheres of $S^n$ to the southern hemisphere via $f$. [This was Brouwer's original proof.]

> [!exercise] EXERCISE 2.2.2.
> Given a map $f : S^{2n} \to S^{2n}$, show that there is some point $x \in S^{2n}$ with either $f(x) = x$ or $f(x) = -x$. Deduce that every map $\mathbb{R}P^{2n} \to \mathbb{R}P^{2n}$ has a fixed point. Construct maps $\mathbb{R}P^{2n-1} \to \mathbb{R}P^{2n-1}$ without fixed points from linear transformations $\mathbb{R}^{2n} \to \mathbb{R}^{2n}$ without eigenvectors.

> [!exercise] EXERCISE 2.2.3.
> Let $f : S^n \to S^n$ be a map of degree zero. Show that there exist points $x, y \in S^n$ with $f(x) = x$ and $f(y) = -y$. Use this to show that if $F$ is a continuous vector field defined on the unit ball $D^n$ in $\mathbb{R}^n$ such that $F(x) \neq 0$ for all $x$, then there exists a point on $\partial D^n$ where $F$ points radially outward and another point on $\partial D^n$ where $F$ points radially inward.

> [!exercise] EXERCISE 2.2.7.
> For an invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ show that the induced map on $H_n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \approx \tilde{H}_{n-1}(\mathbb{R}^n - \{0\}) \approx \mathbb{Z}$ is $\mathbb{1}$ or $-\mathbb{1}$ according to whether the determinant of $f$ is positive or negative. [Use Gaussian elimination to show that the matrix of $f$ can be joined by a path of invertible matrices to a diagonal matrix with $\pm 1$'s on the diagonal.]

> [!exercise] EXERCISE 2.2.8.
> A polynomial $f(z)$ with complex coefficients, viewed as a map $\mathbb{C} \to \mathbb{C}$, can always be extended to a continuous map of one-point compactifications $\hat{f} : S^2 \to S^2$. Show that the degree of $\hat{f}$ equals the degree of $f$ as a polynomial. Show also that the local degree of $\hat{f}$ at a root of $f$ is the multiplicity of the root.

> [!exercise] EXERCISE 2.2.15.
> Show that if $X$ is a CW complex then $H_n(X^n)$ is free by identifying it with the kernel of the cellular boundary map $H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1}, X^{n-2})$.

> [!exercise] EXERCISE 2.2.16.
> Let $\Delta^n = [v_0, \cdots, v_n]$ have its natural $\Delta$-complex structure with $k$-simplices $[v_{i_0}, \cdots, v_{i_k}]$ for $i_0 < \cdots < i_k$. Compute the ranks of the simplicial (or cellular) chain groups $\Delta_i(\Delta^n)$ and the subgroups of cycles and boundaries. [Hint: Pascal's triangle.] Apply this to show that the $k$-skeleton of $\Delta^n$ has homology groups $\tilde{H}_i((\Delta^n)^k)$ equal to 0 for $i < k$, and free of rank $\binom{n}{k+1}$ for $i = k$.

> [!exercise] EXERCISE 2.2.19.
> Compute $\tilde{H}_i(\mathbb{R}P^n/\mathbb{R}P^m)$ for $m < n$ by cellular homology, using the standard CW structure on $\mathbb{R}P^n$ with $\mathbb{R}P^m$ as its $m$-skeleton.

> [!exercise] EXERCISE 2.2.26.
> For a pair $(X, A)$, let $X \cup CA$ be $X$ with a cone on $A$ attached.
> (a) Show that $X$ is a retract of $X \cup CA$ iff $A$ is contractible in $X$: There is a homotopy $f_t : A \to X$ with $f_0$ the inclusion $A \hookrightarrow X$ and $f_1$ a constant map.
> (b) Show that if $A$ is contractible in $X$ then $H_n(X, A) \approx \tilde{H}_n(X) \oplus \tilde{H}_{n-1}(A)$, using the fact that $(X \cup CA)/X$ is the suspension $SA$ of $A$.

> [!exercise] EXERCISE 2.2.30.
> For the mapping torus $T_f$ of a map $f : X \to X$, we constructed in Example 2.48 a long exact sequence $\cdots \to H_n(X) \xrightarrow{\mathbb{1} - f_*} H_n(X) \to H_n(T_f) \to H_{n-1}(X) \to \cdots$. Use this to compute the homology of the mapping tori of the following maps:
> (a) A reflection $S^2 \to S^2$.
> (b) A map $S^2 \to S^2$ of degree 2.
> (c) The map $S^1 \times S^1 \to S^1 \times S^1$ that is the identity on one factor and a reflection on the other.
> (d) The map $S^1 \times S^1 \to S^1 \times S^1$ that is a reflection on each factor.
> (e) The map $S^1 \times S^1 \to S^1 \times S^1$ that interchanges the two factors and then reflects one of the factors.

> [!exercise] EXERCISE 2.2.32.
> For $SX$ the suspension of $X$, show by a Mayer–Vietoris sequence that there are isomorphisms $\tilde{H}_n(SX) \approx \tilde{H}_{n-1}(X)$ for all $n$.

> [!exercise] EXERCISE 2.2.40.
> From the long exact sequence of homology groups associated to the short exact sequence of chain complexes $0 \to C_i(X) \xrightarrow{n} C_i(X) \to C_i(X; \mathbb{Z}_n) \to 0$ deduce immediately that there are short exact sequences
> $$
> 0 \to H_i(X)/nH_i(X) \to H_i(X; \mathbb{Z}_n) \to n\text{-Torsion}(H_{i-1}(X)) \to 0
> $$
> where $n\text{-Torsion}(G)$ is the kernel of the map $G \xrightarrow{n} G$, $g \mapsto ng$. Use this to show that $\tilde{H}_i(X; \mathbb{Z}_p) = 0$ for all $i$ and all primes $p$ iff $\tilde{H}_i(X)$ is a vector space over $\mathbb{Q}$ for all $i$.

> [!exercise] EXERCISE 2.2.43.
> (a) Show that a chain complex of free abelian groups $C_n$ splits as a direct sum of subcomplexes $0 \to L_{n+1} \to K_n \to 0$ with at most two nonzero terms. [Show the short exact sequence $0 \to \text{Ker } \partial \to C_n \to \text{Im } \partial \to 0$ splits and take $K_n = \text{Ker } \partial$.]
> (b) In case the groups $C_n$ are finitely generated, show there is a further splitting into summands $0 \to \mathbb{Z} \to 0$ and $0 \to \mathbb{Z} \xrightarrow{m} \mathbb{Z} \to 0$. [Reduce the matrix of the boundary map $L_{n+1} \to K_n$ to echelon form by elementary row and column operations.]
> (c) Deduce that if $X$ is a CW complex with finitely many cells in each dimension, then $H_n(X; G)$ is the direct sum of the following groups:
> - a copy of $G$ for each $\mathbb{Z}$ summand of $H_n(X)$
> - a copy of $G/mG$ for each $\mathbb{Z}_m$ summand of $H_n(X)$
> - a copy of the kernel of $G \xrightarrow{m} G$ for each $\mathbb{Z}_m$ summand of $H_{n-1}(X)$
