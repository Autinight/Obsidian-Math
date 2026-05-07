代靖涵 25120222201319

> [!exercise] EXERCISE 1.
> 设 $X$ 是赋范空间，$\{x_1, x_2, \cdots, x_n\}$ 是 $X$ 中一个线性无关的点集。$\{a_1, a_2, \cdots a_n\}$ 是任意一组实数，证明存在一个有界线性泛函 $f \in X^*$，使得 $f(x_k) = a_k, \forall k = 1, 2, \cdots, n$.


> [!tip] EXERCISE 1 解答提示
> **核心知识点**：Hahn-Banach 延拓定理
> 
> **关键步骤**：
> 1. 令 $Y = \text{span}\{x_1, \cdots, x_n\}$，在 $Y$ 上定义线性泛函 $f_0(\sum \lambda_i x_i) = \sum \lambda_i a_i$
> 2. $f_0$ 在 $Y$ 上有界（因为 $\{x_i\}$ 线性无关，$Y$ 有限维）
> 3. 由 Hahn-Banach 定理，$f_0$ 可延拓为 $X$ 上的有界线性泛函 $f$，且 $\|f\| = \|f_0\|$

> [!exercise] EXERCISE 2.
> 设 $X$ 是线性赋范空间，$X_0 \subset X$ 是一个闭子空间，证明：对 $\forall x \in X$，存在
> $$d(x, X_0) = \sup\{|f(x)| \mid f \in X^*, \|f\| = 1, f|_{X_0} = 0\}.$$

> [!exercise] EXERCISE 3.
> 设 $\{x_n\}$ 是 $B^*$ 空间 $X$ 中的点列，如果对 $\forall f \in X^*$，数列 $\{f(x_n)\}$ 都有界，求证：$\{x_n\}$ 在 $X$ 中有界。

> [!exercise] EXERCISE 14.
> 证明如果赋范空间中的一个有界线性泛函的保范延拓不唯一，则所有保范延拓的势不小于连续统的势。

> [!exercise] EXERCISE 15.
> 设 $G$ 是赋范空间 $X$ 的子空间，$x_0 \in X$，证明：$x_0 \in G$，当且仅当对 $X$ 上任一满足
> $$f(x) = 0 \quad (x \in G)$$
> 的有界线性泛函 $f$ 必有 $f(x_0) = 0$.

> [!exercise] EXERCISE 16.
> 设 $X$ 是赋范空间，$x_k \in X (k=1, \cdots, n)$，$a_1, a_2, \cdots, a_n$ 是一组数并且满足条件：存在常数 $M$，使得对任意 $t_1, t_2, \cdots, t_n$
> $$\left|\sum_{k=1}^n t_k a_k\right| \leqslant M \left\|\sum_{k=1}^n t_k x_k\right\|.$$
> 证明存在 $X$ 上的线性泛函 $f$，使得
> 4) $f(x_k) = a_k \quad (k=1,2,\cdots,n)$;
> 5) $\|f\| \leqslant M$.

---

### 📝 参考答案


> [!tip]- EXERCISE 2 解答提示
> **核心知识点**：Hahn-Banach 几何形式、对偶空间刻画距离
> 
> **关键步骤**：
> 1. 先证 $\leqslant$：对任意 $f \in X^*$ 满足 $\|f\| = 1, f|_{X_0} = 0$，有 $|f(x)| = |f(x - x_0)|$ 对任意 $x_0 \in X_0$ 成立，故 $|f(x)| \leqslant d(x, X_0)$
> 2. 再证 $\geqslant$：在商空间 $X/X_0$ 上，$\|x + X_0\| = d(x, X_0)$。在商空间上构造泛函 $g(x + X_0) = d(x, X_0)$，满足 $\|g\| = 1$
> 3. 将 $g$ 提升为 $X$ 上的泛函 $f$（商映射的对偶），则 $f|_{X_0} = 0, \|f\| = 1, f(x) = d(x, X_0)$

> [!tip]- EXERCISE 3 解答提示
> **核心知识点**：一致有界原理（Banach-Steinhaus 定理）
> 
> **关键步骤**：
> 1. 定义算子 $T_n: X^* \to \mathbb{R}$，$T_n(f) = f(x_n)$
> 2. 每个 $T_n$ 是 $X^*$ 上的有界线性泛函，且 $\|T_n\| = \|x_n\|$（由 $X$ 到 $X^{**}$ 的自然嵌入）
> 3. 条件"$\{f(x_n)\}$ 对每个 $f$ 有界"意味着 $\sup_n |T_n(f)| < \infty$ 对所有 $f \in X^*$ 成立
> 4. 由一致有界原理，$\sup_n \|T_n\| < \infty$，即 $\sup_n \|x_n\| < \infty$

> [!tip]- EXERCISE 14 解答提示
> **核心知识点**：Hahn-Banach 延拓的几何意义、支撑泛函
> 
> **关键步骤**：
> 1. 设 $f_0$ 是定义在子空间 $Y$ 上的泛函，$\|f_0\| = 1$，有多个保范延拓
> 2. 保范延拓对应于单位球面上支撑 $Y$ 的超平面
> 3. 若延拓不唯一，则存在 $x_0 \in X \setminus Y$ 使得 $d(x_0, Y) = 1$ 且 $f_0$ 在 $x_0$ 处的取值可以在区间 $[-1, 1]$ 中任意选取
> 4. 每个选取对应一个保范延拓，故延拓的个数至少是连续统势 $2^{\aleph_0}$

> [!tip]- EXERCISE 15 解答提示
> **核心知识点**：对偶空间的零化子、Hahn-Banach 分离定理
> 
> **关键步骤**：
> 1. $\Rightarrow$：若 $x_0 \in G$，则对任意 $f$ 满足 $f|_G = 0$，自然有 $f(x_0) = 0$
> 2. $\Leftarrow$：反证法。若 $x_0 \notin G$，则 $x_0 \notin \overline{G}$（$G$ 是子空间故闭）
> 3. 由 Hahn-Banach 分离定理，存在 $f \in X^*$ 使得 $f(x_0) = 1$ 且 $f|_G = 0$
> 4. 这与条件矛盾

> [!tip]- EXERCISE 16 解答提示
> **核心知识点**：Hahn-Banach 延拓定理、商空间范数
> 
> **关键步骤**：
> 1. 令 $Y = \text{span}\{x_1, \cdots, x_n\}$，在 $Y$ 上定义 $f_0(\sum t_k x_k) = \sum t_k a_k$
> 2. 条件 $|\sum t_k a_k| \leqslant M \|\sum t_k x_k\|$ 恰好说明 $|f_0(y)| \leqslant M \|y\|$ 对所有 $y \in Y$ 成立
> 3. 即 $\|f_0\| \leqslant M$
> 4. 由 Hahn-Banach 定理，$f_0$ 可延拓为 $X$ 上的泛函 $f$，且 $\|f\| = \|f_0\| \leqslant M$

### 📚 定理陈述

> [!note] Hahn-Banach 延拓定理（实形式）
> 设 $X$ 是实线性空间，$p: X \to \mathbb{R}$ 是次线性泛函（即满足 $p(x+y) \leqslant p(x) + p(y)$ 和 $p(\lambda x) = \lambda p(x), \forall \lambda \geqslant 0$）。设 $Y \subset X$ 是子空间，$f_0: Y \to \mathbb{R}$ 是线性泛函且满足 $f_0(y) \leqslant p(y), \forall y \in Y$。
> 
> 则存在 $X$ 上的线性泛函 $f: X \to \mathbb{R}$ 使得：
> 1. $f|_Y = f_0$（延拓）
> 2. $f(x) \leqslant p(x), \forall x \in X$（保持控制）

> [!note] Hahn-Banach 延拓定理（赋范空间形式）
> 设 $X$ 是赋范空间，$Y \subset X$ 是子空间，$f_0 \in Y^*$ 是 $Y$ 上的有界线性泛函。
> 
> 则存在 $f \in X^*$ 使得：
> 1. $f|_Y = f_0$
> 2. $\|f\|_{X^*} = \|f_0\|_{Y^*}$（保范延拓）

> [!note] Hahn-Banach 分离定理（几何形式）
> 设 $X$ 是赋范空间，$A, B \subset X$ 是非空凸集。
> 
> **（弱分离）** 若 $A$ 是开集且 $A \cap B = \emptyset$，则存在 $f \in X^*, f \neq 0$ 和 $\alpha \in \mathbb{R}$ 使得：
> $$f(a) < \alpha \leqslant f(b), \quad \forall a \in A, b \in B$$
> 
> **（强分离）** 若 $A$ 是紧集，$B$ 是闭集，且 $A \cap B = \emptyset$，则存在 $f \in X^*, f \neq 0$ 和 $\alpha, \beta \in \mathbb{R}$ 使得：
> $$f(a) < \alpha < \beta < f(b), \quad \forall a \in A, b \in B$$

> [!note] 一致有界原理（Banach-Steinhaus 定理）
> 设 $X$ 是 Banach 空间，$Y$ 是赋范空间，$\{T_n\}$ 是从 $X$ 到 $Y$ 的有界线性算子族。
> 
> 若对每个 $x \in X$，$\sup_n \|T_n(x)\|_Y < \infty$（逐点有界），
> 
> 则 $\sup_n \|T_n\| < \infty$（一致有界）。
> 
> **推论**：设 $X$ 是 Banach 空间，$\{f_n\} \subset X^*$。若对每个 $x \in X$，$\sup_n |f_n(x)| < \infty$，则 $\sup_n \|f_n\| < \infty$。

> [!note] 自然嵌入定理
> 设 $X$ 是赋范空间，定义映射 $J: X \to X^{**}$ 为：
> $$J(x)(f) = f(x), \quad \forall f \in X^*$$
> 
> 则：
> 1. $J$ 是线性等距嵌入，即 $\|J(x)\|_{X^{**}} = \|x\|_X$
> 2. 若 $J$ 是满射，则称 $X$ 是自反空间

> [!note] 商空间范数
> 设 $X$ 是赋范空间，$Y \subset X$ 是闭子空间。商空间 $X/Y$ 上的范数定义为：
> $$\|x + Y\|_{X/Y} = \inf_{y \in Y} \|x + y\|_X = d(x, Y)$$
> 
> 商映射 $\pi: X \to X/Y$ 满足 $\|\pi\| = 1$。
> 
> **对偶关系**：$(X/Y)^* \cong Y^\perp$，其中 $Y^\perp = \{f \in X^* : f|_Y = 0\}$ 是 $Y$ 的零化子。

-

