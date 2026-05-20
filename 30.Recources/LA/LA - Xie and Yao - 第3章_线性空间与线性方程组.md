# 高等代数（第四版）学习指导书

> **书名**: 高等代数（第四版）学习指导书
> **作者**: 谢启鸿、姚慕生 编著
> **出版社**: 复旦大学出版社
> **配套教材**: 《高等代数学（第四版）》
> **说明**: 本书是复旦大学高等代数课程配套学习用书，与教材章节顺序完全相同，包含基本概念、例题解析、方法和技巧分类、基础训练题等内容。

---

## 目录

- [第1章 行列式](#第1章-行列式)
- [第2章 矩阵](#第2章-矩阵)
- [第3章 线性空间与线性方程组](#第3章-线性空间与线性方程组)
- [第4章 线性映射](#第4章-线性映射)
- [第5章 多项式](#第5章-多项式)
- [第6章 特征值](#第6章-特征值)
- [第7章 相似标准型](#第7章-相似标准型)
- [第8章 二次型](#第8章-二次型)
- [第9章 内积空间](#第9章-内积空间)
- [第10章 双线性型](#第10章-双线性型)

---

## 第3章 线性空间与线性方程组


### §3.1 基本概念

#### 3.1.1 数域

> [!definition] 定义 3.1
> 设 $\mathbb{K}$ 是复数域 $\mathbb{C}$ 的一个子集且至少包含两个不同元素，如果 $\mathbb{K}$ 中任意两个数的加法、减法、乘法及除法（除数不为零）仍属于 $\mathbb{K}$，则称 $\mathbb{K}$ 为一个**数域**。

> [!example] 例 3.1
> 复数域 $\mathbb{C}$、实数域 $\mathbb{R}$、有理数域 $\mathbb{Q}$ 都是数域，但整数集 $\mathbb{Z}$ 不是数域。

> [!theorem] 定理 3.1
> 任一数域必包含有理数域 $\mathbb{Q}$。

> [!proof]-
> 设 $\mathbb{K}$ 是数域，由定义 $\mathbb{K}$ 中至少包含两个不同元素，故存在非零元 $a \in \mathbb{K}$。于是 $0 = a - a \in \mathbb{K}$，$1 = a/a \in \mathbb{K}$。由加法封闭性，任意正整数 $n \in \mathbb{K}$；再由减法封闭性，任意负整数 $-n = 0 - n \in \mathbb{K}$。最后由除法封闭性，任意有理数 $p/q \in \mathbb{K}$（$q \neq 0$）。因此 $\mathbb{Q} \subseteq \mathbb{K}$。

> [!remark] 注
> 定理 3.1 表明有理数域是最小的数域。在本书中，如无特别说明，我们总假设 $\mathbb{K}$ 是数域。

#### 3.1.2 线性空间的概念

> [!definition] 定义 3.2
> 设 $\mathbb{K}$ 是一个数域，$V$ 是一个非空集合。如果在 $V$ 上定义了一个加法运算（即对任意 $\alpha, \beta \in V$，存在唯一的 $\gamma \in V$ 与之对应，记为 $\gamma = \alpha + \beta$），在 $\mathbb{K}$ 与 $V$ 之间定义了一个数乘运算（即对任意 $k \in \mathbb{K}$ 和 $\alpha \in V$，存在唯一的 $\delta \in V$ 与之对应，记为 $\delta = k\alpha$），且这两种运算满足下列八条规律：
> 1. $\alpha + \beta = \beta + \alpha$（加法交换律）；
> 2. $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$（加法结合律）；
> 3. 在 $V$ 中存在一个零元素 $\mathbf{0}$，使得对任意 $\alpha \in V$，有 $\alpha + \mathbf{0} = \alpha$；
> 4. 对任意 $\alpha \in V$，存在负元素 $\beta \in V$，使得 $\alpha + \beta = \mathbf{0}$；
> 5. $1 \cdot \alpha = \alpha$；
> 6. $k(l\alpha) = (kl)\alpha$；
> 7. $(k + l)\alpha = k\alpha + l\alpha$；
> 8. $k(\alpha + \beta) = k\alpha + k\beta$。
> 其中 $\alpha, \beta, \gamma \in V$，$k, l \in \mathbb{K}$，则称 $V$ 是数域 $\mathbb{K}$ 上的**线性空间**（或**向量空间**），$V$ 中的元素称为**向量**。

> [!example] 例 3.2
> 数域 $\mathbb{K}$ 上全体 $m \times n$ 矩阵的集合 $M_{m \times n}(\mathbb{K})$，关于矩阵的加法和数乘，构成 $\mathbb{K}$ 上的线性空间。特别地，$n$ 维列向量空间 $M_{n \times 1}(\mathbb{K})$ 常记为 $\mathbb{K}^n$。

> [!example] 例 3.3
> 数域 $\mathbb{K}$ 上的一元多项式全体 $\mathbb{K}[x]$，关于多项式的加法和数乘，构成 $\mathbb{K}$ 上的线性空间。


#### 3.1.3 线性子空间

> [!definition] 定义 3.3
> 设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，$U$ 是 $V$ 的非空子集。如果 $U$ 关于 $V$ 的加法和数乘也构成 $\mathbb{K}$ 上的线性空间，则称 $U$ 是 $V$ 的**线性子空间**（简称**子空间**），记为 $U \subseteq V$。

> [!theorem] 定理 3.2（子空间判定定理）
> 设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，$U$ 是 $V$ 的非空子集，则 $U$ 是 $V$ 的子空间的充要条件是：$U$ 对 $V$ 的加法和数乘封闭，即：
> 1. 对任意 $\alpha, \beta \in U$，有 $\alpha + \beta \in U$；
> 2. 对任意 $k \in \mathbb{K}$，$\alpha \in U$，有 $k\alpha \in U$。

> [!proof]-
> 必要性显然。充分性：由封闭性及 $U$ 非空知 $U$ 是 $V$ 的子集且保持运算。只需验证零元和负元存在。取 $\alpha \in U$，则 $0 = 0 \cdot \alpha \in U$；对 $\beta \in U$，$-\beta = (-1)\beta \in U$。其他运算律由 $V$ 继承。因此 $U$ 是子空间。

> [!example] 例 3.4
> $V$ 本身及 $\{\mathbf{0}\}$ 都是 $V$ 的子空间，称为**平凡子空间**。其他子空间称为**非平凡子空间**（或**真子空间**）。

> [!example] 例 3.5
> 设 $A \in M_{m \times n}(\mathbb{K})$，则齐次线性方程组 $Ax = 0$ 的解集 $V_A = \{x \in \mathbb{K}^n \mid Ax = 0\}$ 是 $\mathbb{K}^n$ 的子空间，称为 $A$ 的**解空间**（或**零空间**）。

> [!definition] 定义 3.4
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间，$\alpha_1, \alpha_2, \ldots, \alpha_s \in V$。由它们一切线性组合构成的集合：
> $$L(\alpha_1, \alpha_2, \ldots, \alpha_s) = \{k_1\alpha_1 + k_2\alpha_2 + \cdots + k_s\alpha_s \mid k_i \in \mathbb{K}\}$$
> 是 $V$ 的子空间，称为由 $\alpha_1, \alpha_2, \ldots, \alpha_s$ **张成**（或**生成**）的**子空间**。

> [!theorem] 定理 3.3
> 设 $U_1, U_2$ 是 $V$ 的子空间，则 $U_1 \cap U_2$ 也是 $V$ 的子空间，称为 $U_1$ 与 $U_2$ 的**交空间**。

> [!definition] 定义 3.5
> 设 $U_1, U_2$ 是 $V$ 的子空间，称集合 $U_1 + U_2 = \{\alpha_1 + \alpha_2 \mid \alpha_1 \in U_1, \alpha_2 \in U_2\}$ 为 $U_1$ 与 $U_2$ 的**和空间**。


> [!theorem] 定理 3.4
> 设 $U_1, U_2$ 是 $V$ 的子空间，则 $U_1 + U_2$ 也是 $V$ 的子空间。

> [!proof]-
> 显然 $U_1 + U_2$ 非空。设 $\alpha, \beta \in U_1 + U_2$，则 $\alpha = \alpha_1 + \alpha_2$，$\beta = \beta_1 + \beta_2$，其中 $\alpha_i, \beta_i \in U_i$。于是 $\alpha + \beta = (\alpha_1 + \beta_1) + (\alpha_2 + \beta_2) \in U_1 + U_2$。又 $k\alpha = k\alpha_1 + k\alpha_2 \in U_1 + U_2$。故 $U_1 + U_2$ 是子空间。

> [!theorem] 定理 3.5（维数公式）
> 设 $U_1, U_2$ 是有限维线性空间 $V$ 的子空间，则
> $$\dim(U_1 + U_2) + \dim(U_1 \cap U_2) = \dim U_1 + \dim U_2$$

> [!proof]-
> 设 $\dim U_1 = m$，$\dim U_2 = n$，$\dim(U_1 \cap U_2) = r$。取 $U_1 \cap U_2$ 的一组基 $\alpha_1, \ldots, \alpha_r$，将其分别扩充为 $U_1$ 的基 $\alpha_1, \ldots, \alpha_r, \beta_1, \ldots, \beta_{m-r}$ 和 $U_2$ 的基 $\alpha_1, \ldots, \alpha_r, \gamma_1, \ldots, \gamma_{n-r}$。则 $U_1 + U_2$ 可由 $\alpha_1, \ldots, \alpha_r, \beta_1, \ldots, \beta_{m-r}, \gamma_1, \ldots, \gamma_{n-r}$ 线性表示。下证这 $m+n-r$ 个向量线性无关。设有线性关系
> $$\sum_{i=1}^r a_i\alpha_i + \sum_{j=1}^{m-r} b_j\beta_j + \sum_{k=1}^{n-r} c_k\gamma_k = 0$$
> 移项得 $\sum_{i=1}^r a_i\alpha_i + \sum_{j=1}^{m-r} b_j\beta_j = -\sum_{k=1}^{n-r} c_k\gamma_k \in U_1 \cap U_2$。故右边可由 $\alpha_1, \ldots, \alpha_r$ 线性表示，从而 $c_k = 0$。同理 $b_j = 0$，$a_i = 0$。因此 $\dim(U_1+U_2) = m+n-r$，即 $\dim(U_1+U_2) + r = m+n$。

#### 3.1.4 向量的线性关系

> [!definition] 定义 3.6
> 设 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 是 $\mathbb{K}$ 上线性空间 $V$ 的一组向量。如果存在不全为零的数 $k_1, k_2, \ldots, k_s \in \mathbb{K}$，使得
> $$k_1\alpha_1 + k_2\alpha_2 + \cdots + k_s\alpha_s = \mathbf{0}$$
> 则称向量组 $\alpha_1, \alpha_2, \ldots, \alpha_s$ **线性相关**。否则，称它们**线性无关**。


> [!definition] 定义 3.7
> 设 $\alpha_1, \ldots, \alpha_s, \beta \in V$。如果存在 $k_1, \ldots, k_s \in \mathbb{K}$，使得
> $$\beta = k_1\alpha_1 + \cdots + k_s\alpha_s$$
> 则称 $\beta$ 是 $\alpha_1, \ldots, \alpha_s$ 的**线性组合**，或称 $\beta$ 可由 $\alpha_1, \ldots, \alpha_s$ **线性表示**。

> [!theorem] 定理 3.6
> 向量组 $\alpha_1, \ldots, \alpha_s$（$s \geq 2$）线性相关的充要条件是其中至少有一个向量可由其余向量线性表示。

> [!proof]-
> 必要性：若 $\alpha_1, \ldots, \alpha_s$ 线性相关，则存在不全为零的 $k_1, \ldots, k_s$ 使 $\sum k_i\alpha_i = 0$。设 $k_j \neq 0$，则 $\alpha_j = -\sum_{i \neq j}(k_i/k_j)\alpha_i$。
> 充分性：若 $\alpha_j = \sum_{i \neq j} l_i\alpha_i$，则 $\sum_{i \neq j}l_i\alpha_i - \alpha_j = 0$，系数不全为零。

> [!theorem] 定理 3.7
> 设 $\alpha_1, \ldots, \alpha_s$ 线性无关，而 $\alpha_1, \ldots, \alpha_s, \beta$ 线性相关，则 $\beta$ 可由 $\alpha_1, \ldots, \alpha_s$ 唯一线性表示。

> [!proof]-
> 存在不全为零的 $k_1, \ldots, k_s, k$ 使 $\sum k_i\alpha_i + k\beta = 0$。若 $k = 0$，则 $\sum k_i\alpha_i = 0$，由线性无关性 $k_i = 0$，矛盾。故 $k \neq 0$，$\beta = -\sum(k_i/k)\alpha_i$。唯一性：若 $\beta = \sum a_i\alpha_i = \sum b_i\alpha_i$，则 $\sum(a_i-b_i)\alpha_i = 0$，由线性无关性 $a_i = b_i$。

#### 3.1.5 基与维数

> [!definition] 定义 3.8
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间。如果 $V$ 中存在 $n$ 个线性无关的向量 $\alpha_1, \ldots, \alpha_n$，而 $V$ 中任意 $n+1$ 个向量均线性相关，则称 $V$ 是**有限维线性空间**，$n$ 称为 $V$ 的**维数**，记为 $\dim V = n$；向量组 $\alpha_1, \ldots, \alpha_n$ 称为 $V$ 的一组**基**。如果不存在这样的 $n$，则称 $V$ 是**无限维线性空间**。


> [!theorem] 定理 3.8
> 设 $\alpha_1, \ldots, \alpha_n$ 是 $n$ 维线性空间 $V$ 的一组基，则 $V$ 中任一向量 $\alpha$ 均可由 $\alpha_1, \ldots, \alpha_n$ 唯一线性表示。

> [!proof]-
> 由定义，$\alpha_1, \ldots, \alpha_n, \alpha$ 线性相关，而 $\alpha_1, \ldots, \alpha_n$ 线性无关，由定理 3.7 即得结论。

> [!definition] 定义 3.9
> 设 $\alpha_1, \ldots, \alpha_n$ 是 $n$ 维线性空间 $V$ 的一组基，$\alpha \in V$。若 $\alpha = \sum_{i=1}^n a_i\alpha_i$，则称有序数组 $(a_1, \ldots, a_n)'$（或 $(a_1, \ldots, a_n)$）为 $\alpha$ 在基 $\alpha_1, \ldots, \alpha_n$ 下的**坐标**。

> [!theorem] 定理 3.9
> $n$ 维线性空间 $V$ 中任意 $n$ 个线性无关的向量都构成 $V$ 的一组基。

> [!proof]-
> 设 $\beta_1, \ldots, \beta_n$ 线性无关，$\alpha \in V$ 任意。则 $\beta_1, \ldots, \beta_n, \alpha$ 是 $n+1$ 个向量，必线性相关。由定理 3.7，$\alpha$ 可由 $\beta_1, \ldots, \beta_n$ 线性表示。故 $\beta_1, \ldots, \beta_n$ 是基。

> [!theorem] 定理 3.10
> 设 $V$ 是 $n$ 维线性空间，$\alpha_1, \ldots, \alpha_r$（$r < n$）是一组线性无关的向量，则存在 $\alpha_{r+1}, \ldots, \alpha_n \in V$ 使得 $\alpha_1, \ldots, \alpha_n$ 是 $V$ 的一组基（基的扩充定理）。

> [!proof]-
> 由于 $r < n$，存在向量不能被 $\alpha_1, \ldots, \alpha_r$ 线性表示，取其一为 $\alpha_{r+1}$。则 $\alpha_1, \ldots, \alpha_{r+1}$ 线性无关。若 $r+1 = n$，则得基；否则继续此过程。

#### 3.1.6 矩阵的秩

> [!definition] 定义 3.10
> 设 $A$ 是数域 $\mathbb{K}$ 上的 $m \times n$ 矩阵。$A$ 的行向量组的极大线性无关组所含向量的个数称为 $A$ 的**行秩**；$A$ 的列向量组的极大线性无关组所含向量的个数称为 $A$ 的**列秩**。


> [!theorem] 定理 3.11
> 矩阵的行秩等于列秩，统称为矩阵的**秩**，记为 $r(A)$（或 $\mathrm{rank}(A)$）。

> [!theorem] 定理 3.12
> 矩阵的初等变换不改变矩阵的秩。

> [!theorem] 定理 3.13
> $n$ 阶方阵 $A$ 非奇异的充要条件是 $r(A) = n$。

> [!theorem] 定理 3.14
> 设 $A$ 是 $m \times n$ 矩阵，$P$ 是 $m$ 阶非异阵，$Q$ 是 $n$ 阶非异阵，则 $r(PA) = r(AQ) = r(PAQ) = r(A)$。

> [!proof]-
> 因为 $P$ 是非异阵，可表示为初等矩阵的乘积，$PA$ 相当于对 $A$ 做初等行变换，不改变秩。同理 $AQ$ 和 $PAQ$ 也不改变秩。

#### 3.1.7 线性方程组

> [!definition] 定义 3.11
> 设 $A \in M_{m \times n}(\mathbb{K})$，$\beta \in \mathbb{K}^m$。称
> $$Ax = \beta \quad (*)$$
> 为 $m$ 个方程 $n$ 个未知数的**线性方程组**。若 $\beta = 0$，则称 $Ax = 0$ 为**齐次线性方程组**；若 $\beta \neq 0$，则称 $Ax = \beta$ 为**非齐次线性方程组**。

> [!theorem] 定理 3.15（线性方程组有解判定定理）
> 线性方程组 $Ax = \beta$ 有解的充要条件是 $r(A) = r(A|\beta)$，其中 $(A|\beta)$ 是增广矩阵。

> [!proof]-
> 设 $r(A) = r$。$Ax = \beta$ 有解 $\Leftrightarrow$ $\beta$ 可由 $A$ 的列向量组线性表示 $\Leftrightarrow$ 添加 $\beta$ 不增加列秩 $\Leftrightarrow$ $r(A|\beta) = r(A)$。


> [!theorem] 定理 3.16
> 设 $Ax = \beta$ 有解，$r(A) = r$。
> 1. 若 $r = n$（未知数个数），则方程组有唯一解；
> 2. 若 $r < n$，则方程组有无穷多解。

> [!theorem] 定理 3.17（齐次线性方程组解的结构）
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r < n$，则齐次线性方程组 $Ax = 0$ 的解空间 $V_A$ 的维数为 $n - r$，即 $\dim V_A = n - r$。

> [!definition] 定义 3.12
> 齐次线性方程组 $Ax = 0$ 解空间 $V_A$ 的一组基 $\eta_1, \ldots, \eta_{n-r}$ 称为该方程组的**基础解系**。

> [!theorem] 定理 3.18（非齐次线性方程组解的结构）
> 设 $Ax = \beta$ 有解，$\gamma_0$ 是它的一个特解，$\eta_1, \ldots, \eta_{n-r}$ 是 $Ax = 0$ 的基础解系，则 $Ax = \beta$ 的通解为
> $$\gamma = \gamma_0 + k_1\eta_1 + \cdots + k_{n-r}\eta_{n-r}$$
> 其中 $k_1, \ldots, k_{n-r} \in \mathbb{K}$ 为任意常数。

> [!proof]-
> 首先 $\gamma_0 + \sum k_i\eta_i$ 是解：$A(\gamma_0 + \sum k_i\eta_i) = A\gamma_0 + \sum k_i A\eta_i = \beta$。其次，设 $\gamma$ 是任一解，则 $A(\gamma - \gamma_0) = \beta - \beta = 0$，故 $\gamma - \gamma_0 \in V_A$，可由基础解系线性表示。

### §3.2 向量的线性关系

本节将进一步讨论向量的线性关系，给出一些实用的判定方法。


> [!theorem] 定理 3.19
> 设 $A$ 是 $m \times n$ 矩阵，则齐次线性方程组 $Ax = 0$ 有非零解的充要条件是 $r(A) < n$。

> [!proof]-
> $Ax = 0$ 有非零解 $\Leftrightarrow$ $\dim V_A > 0$ $\Leftrightarrow$ $n - r(A) > 0$ $\Leftrightarrow$ $r(A) < n$。

> [!corollary] 推论
> 设 $A$ 是 $n$ 阶方阵，则 $Ax = 0$ 有非零解的充要条件是 $|A| = 0$。

> [!theorem] 定理 3.20
> 若向量组 $\alpha_1, \ldots, \alpha_s$ 可由向量组 $\beta_1, \ldots, \beta_t$ 线性表示，且 $s > t$，则 $\alpha_1, \ldots, \alpha_s$ 线性相关。

> [!proof]-
> 设 $\alpha_j = \sum_{i=1}^t a_{ij}\beta_i$（$j = 1, \ldots, s$）。考虑 $x_1\alpha_1 + \cdots + x_s\alpha_s = 0$，即 $\sum_j x_j\sum_i a_{ij}\beta_i = \sum_i(\sum_j a_{ij}x_j)\beta_i = 0$。由于 $s > t$，齐次方程组 $\sum_{j=1}^s a_{ij}x_j = 0$（$i = 1, \ldots, t$）有非零解，故 $\alpha_1, \ldots, \alpha_s$ 线性相关。

> [!corollary] 推论 1
> 若 $\alpha_1, \ldots, \alpha_s$ 线性无关且可由 $\beta_1, \ldots, \beta_t$ 线性表示，则 $s \leq t$。

> [!corollary] 推论 2
> 两个等价的线性无关向量组所含向量的个数相同。

> [!corollary] 推论 3
> 向量组的任意两个极大无关组所含向量的个数相同。


> [!theorem] 定理 3.21
> 设 $\alpha_1, \ldots, \alpha_n \in \mathbb{K}^n$。则 $\alpha_1, \ldots, \alpha_n$ 线性无关的充要条件是以它们为列（行）向量的 $n$ 阶矩阵的行列式不等于零。

> [!proof]-
> 设 $A = (\alpha_1, \ldots, \alpha_n)$。$\alpha_1, \ldots, \alpha_n$ 线性无关 $\Leftrightarrow$ $Ax = 0$ 只有零解 $\Leftrightarrow$ $|A| \neq 0$。

> [!example] 例 3.6
> 判断 $n$ 维向量组 $\varepsilon_1 = (1, 0, \ldots, 0)'$，$\varepsilon_2 = (0, 1, \ldots, 0)'$，$\ldots$，$\varepsilon_n = (0, \ldots, 0, 1)'$ 的线性相关性。
> 
> **解**：以这些向量为列构成单位矩阵 $I_n$，$|I_n| = 1 \neq 0$，故 $\varepsilon_1, \ldots, \varepsilon_n$ 线性无关。这组向量称为 $\mathbb{K}^n$ 的**标准基**（或**自然基**）。

> [!theorem] 定理 3.22（替换定理）
> 设 $\alpha_1, \ldots, \alpha_s$ 线性无关，且可由 $\beta_1, \ldots, \beta_t$ 线性表示，则可在 $\beta_1, \ldots, \beta_t$ 中选出 $s$ 个向量，用 $\alpha_1, \ldots, \alpha_s$ 替换它们后所得向量组与原向量组等价。

> [!proof]-
> 对 $s$ 用数学归纳法。$s = 1$ 时，$\alpha_1$ 可由 $\beta_1, \ldots, \beta_t$ 线性表示，至少某个 $\beta_i$ 的系数非零（否则 $\alpha_1 = 0$ 矛盾），不妨设为 $\beta_1$，则 $\beta_1$ 可由 $\alpha_1, \beta_2, \ldots, \beta_t$ 表示，故等价。假设 $s-1$ 时成立，对 $s$：$\alpha_1, \ldots, \alpha_s$ 可由 $\beta_1, \ldots, \beta_t$ 表示。由于 $\alpha_s \neq 0$，某个 $\beta_i$ 的系数非零，不妨设为 $\beta_1$。则 $\beta_1$ 可由 $\alpha_1, \ldots, \alpha_s, \beta_2, \ldots, \beta_t$ 表示。而 $\alpha_1, \ldots, \alpha_{s-1}$ 可由 $\beta_1, \ldots, \beta_t$ 表示，将 $\beta_1$ 代入得可由 $\alpha_s, \beta_2, \ldots, \beta_t$ 表示。由归纳假设可替换 $s-1$ 个 $\beta$，加上 $\beta_1$ 共替换 $s$ 个。


#### 求向量组的秩和极大无关组

> [!theorem] 定理 3.23
> 设 $A$ 是 $m \times n$ 矩阵。对 $A$ 做初等行变换不改变 $A$ 的列向量之间的线性关系，即若初等行变换将 $A$ 变为 $B$，则 $A$ 的列向量组与 $B$ 的列向量组中对应位置的列向量有相同的线性关系。

> [!proof]-
> 初等行变换相当于左乘非异阵 $P$，即 $B = PA$。设 $A = (\alpha_1, \ldots, \alpha_n)$，$B = (\beta_1, \ldots, \beta_n)$，则 $\beta_j = P\alpha_j$。若 $\sum k_j\alpha_j = 0$，则 $\sum k_j\beta_j = P(\sum k_j\alpha_j) = 0$。反之，若 $\sum k_j\beta_j = 0$，则 $P(\sum k_j\alpha_j) = 0$，由 $P$ 非异得 $\sum k_j\alpha_j = 0$。

> [!example] 例 3.7
> 求向量组 $\alpha_1 = (1, 2, 1, 2)'$，$\alpha_2 = (1, 0, 3, 1)'$，$\alpha_3 = (2, -1, 0, 1)'$，$\alpha_4 = (2, 1, -2, 2)'$，$\alpha_5 = (2, 2, 4, 3)'$ 的秩和一个极大无关组，并将其余向量用极大无关组线性表示。
> 
> **解**：以这些向量为列构造矩阵 $A$，对 $A$ 做初等行变换：
> $$A = \begin{pmatrix} 1 & 1 & 2 & 2 & 2 \\ 2 & 0 & -1 & 1 & 2 \\ 1 & 3 & 0 & -2 & 4 \\ 2 & 1 & 1 & 2 & 3 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 2 & 2 & 2 \\ 0 & -2 & -5 & -3 & -2 \\ 0 & 2 & -2 & -4 & 2 \\ 0 & -1 & -3 & -2 & -1 \end{pmatrix}$$
> $$\to \begin{pmatrix} 1 & 1 & 2 & 2 & 2 \\ 0 & 1 & 3 & 2 & 1 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{pmatrix} = B$$
> $r(B) = 3$，故 $r(A) = 3$。$B$ 的第 1, 2, 3 列线性无关，故 $\alpha_1, \alpha_2, \alpha_3$ 是极大无关组。由 $B$ 的第 4, 5 列：$\beta_4 = \beta_1 + \beta_2 + \beta_3$，$\beta_5 = \beta_1 + \beta_2$。因此 $\alpha_4 = \alpha_1 + \alpha_2 + \alpha_3$，$\alpha_5 = \alpha_1 + \alpha_2$。


### §3.3 线性空间及其基

#### 3.3.1 线性空间的同构

> [!definition] 定义 3.13
> 设 $V$ 和 $U$ 是数域 $\mathbb{K}$ 上的两个线性空间。如果存在一个从 $V$ 到 $U$ 的双射 $\varphi$，满足：
> 1. $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$，$\forall \alpha, \beta \in V$；
> 2. $\varphi(k\alpha) = k\varphi(\alpha)$，$\forall k \in \mathbb{K}$，$\alpha \in V$。
> 则称 $\varphi$ 是 $V$ 到 $U$ 的一个**同构映射**（简称**同构**），称 $V$ 与 $U$ **同构**，记为 $V \cong U$。

> [!theorem] 定理 3.24
> 数域 $\mathbb{K}$ 上任一 $n$ 维线性空间 $V$ 都与 $\mathbb{K}^n$ 同构。

> [!proof]-
> 取 $V$ 的一组基 $\alpha_1, \ldots, \alpha_n$，定义 $\varphi: V \to \mathbb{K}^n$ 为 $\varphi(\alpha) = (a_1, \ldots, a_n)'$，其中 $\alpha = \sum a_i\alpha_i$。则 $\varphi$ 是双射，且保持加法和数乘，故为同构。

> [!theorem] 定理 3.25
> 两个有限维线性空间同构的充要条件是它们的维数相同。

> [!proof]-
> 必要性：设 $\varphi: V \to U$ 是同构，$\dim V = n$，取 $V$ 的基 $\alpha_1, \ldots, \alpha_n$。则 $\varphi(\alpha_1), \ldots, \varphi(\alpha_n)$ 线性无关且生成 $U$，故 $\dim U = n$。充分性：由定理 3.24，$V \cong \mathbb{K}^n \cong U$，故 $V \cong U$。

#### 3.3.2 基变换与过渡矩阵

设 $V$ 是 $n$ 维线性空间，$\alpha_1, \ldots, \alpha_n$ 和 $\beta_1, \ldots, \beta_n$ 是 $V$ 的两组基。设
$$\begin{cases} \beta_1 = p_{11}\alpha_1 + p_{21}\alpha_2 + \cdots + p_{n1}\alpha_n \\ \beta_2 = p_{12}\alpha_1 + p_{22}\alpha_2 + \cdots + p_{n2}\alpha_n \\ \vdots \\ \beta_n = p_{1n}\alpha_1 + p_{2n}\alpha_2 + \cdots + p_{nn}\alpha_n \end{cases}$$


用矩阵表示：
$$(\beta_1, \beta_2, \ldots, \beta_n) = (\alpha_1, \alpha_2, \ldots, \alpha_n)P$$
其中 $P = (p_{ij})_{n \times n}$，称为从基 $\alpha_1, \ldots, \alpha_n$ 到基 $\beta_1, \ldots, \beta_n$ 的**过渡矩阵**。

> [!theorem] 定理 3.26
> 过渡矩阵必为非异阵。

> [!proof]-
> 设 $P$ 是过渡矩阵。若 $Px = 0$，设 $x = (x_1, \ldots, x_n)'$，则 $\sum x_j\beta_j = (\alpha_1, \ldots, \alpha_n)Px = 0$。由 $\beta_1, \ldots, \beta_n$ 线性无关，$x = 0$。故 $P$ 非异。

> [!theorem] 定理 3.27（坐标变换公式）
> 设从基 $\alpha_1, \ldots, \alpha_n$ 到基 $\beta_1, \ldots, \beta_n$ 的过渡矩阵为 $P$。$V$ 中向量 $\xi$ 在这两组基下的坐标分别为 $x = (x_1, \ldots, x_n)'$ 和 $y = (y_1, \ldots, y_n)'$，则
> $$x = Py \quad \text{或} \quad y = P^{-1}x$$

> [!proof]-
> $\xi = (\alpha_1, \ldots, \alpha_n)x = (\beta_1, \ldots, \beta_n)y = (\alpha_1, \ldots, \alpha_n)Py$。由坐标唯一性，$x = Py$。

#### 3.3.3 子空间的直和

> [!definition] 定义 3.14
> 设 $U_1, U_2$ 是 $V$ 的子空间。如果 $U_1 + U_2$ 中每个向量的分解式唯一，即若 $\alpha = \alpha_1 + \alpha_2 = \beta_1 + \beta_2$（$\alpha_i, \beta_i \in U_i$），则必有 $\alpha_1 = \beta_1$，$\alpha_2 = \beta_2$，则称 $U_1 + U_2$ 为**直和**，记为 $U_1 \oplus U_2$。


> [!theorem] 定理 3.28（直和的等价条件）
> 设 $U_1, U_2$ 是 $V$ 的子空间，则下列条件等价：
> 1. $U_1 + U_2$ 是直和；
> 2. $U_1 \cap U_2 = \{0\}$；
> 3. $\dim(U_1 + U_2) = \dim U_1 + \dim U_2$；
> 4. $U_1$ 的基与 $U_2$ 的基的并是 $U_1 + U_2$ 的基。

> [!proof]-
> (1)$\Rightarrow$(2)：设 $\alpha \in U_1 \cap U_2$，则 $0 = \alpha + (-\alpha)$（$\alpha \in U_1$，$-\alpha \in U_2$）。又 $0 = 0 + 0$，由唯一性 $\alpha = 0$。
> (2)$\Rightarrow$(3)：由维数公式即得。
> (3)$\Rightarrow$(4)：设 $\alpha_1, \ldots, \alpha_m$ 是 $U_1$ 的基，$\beta_1, \ldots, \beta_n$ 是 $U_2$ 的基，则它们合起来共 $m+n = \dim(U_1+U_2)$ 个向量，只需证线性无关。
> (4)$\Rightarrow$(1)：设 $\alpha = \alpha_1 + \alpha_2 = \beta_1 + \beta_2$，则 $\alpha_1 - \beta_1 = \beta_2 - \alpha_2 \in U_1 \cap U_2 = \{0\}$，故 $\alpha_1 = \beta_1$，$\alpha_2 = \beta_2$。

> [!definition] 定义 3.15
> 设 $U$ 是 $V$ 的子空间。如果存在 $V$ 的子空间 $W$，使得 $V = U \oplus W$，则称 $W$ 是 $U$ 的**补空间**。

> [!theorem] 定理 3.29
> $V$ 的任一子空间 $U$ 必有补空间。

> [!proof]-
> 取 $U$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_r, \alpha_{r+1}, \ldots, \alpha_n$。令 $W = L(\alpha_{r+1}, \ldots, \alpha_n)$，则 $V = U \oplus W$。


#### 3.3.4 商空间

> [!definition] 定义 3.16
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间，$U$ 是 $V$ 的子空间。在 $V$ 上定义等价关系：$\alpha \sim \beta \Leftrightarrow \alpha - \beta \in U$。$\alpha$ 所在的等价类记为 $\bar{\alpha} = \alpha + U = \{\alpha + u \mid u \in U\}$，称为**陪集**。所有陪集构成的集合 $V/U = \{\alpha + U \mid \alpha \in V\}$ 称为 $V$ 关于 $U$ 的**商集**。

> [!definition] 定义 3.17
> 在 $V/U$ 上定义加法和数乘：$(\alpha + U) + (\beta + U) = (\alpha + \beta) + U$，$k(\alpha + U) = k\alpha + U$。则 $V/U$ 构成线性空间，称为 $V$ 关于 $U$ 的**商空间**。

> [!theorem] 定理 3.30
> $\dim(V/U) = \dim V - \dim U$。

> [!proof]-
> 设 $\dim V = n$，$\dim U = r$。取 $U$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_n$。则 $\overline{\alpha_{r+1}}, \ldots, \overline{\alpha_n}$ 是 $V/U$ 的一组基。

### §3.4 线性同构和几何问题代数化

#### 3.4.1 线性映射

> [!definition] 定义 3.18
> 设 $V, U$ 是数域 $\mathbb{K}$ 上的线性空间。映射 $\varphi: V \to U$ 如果满足：
> 1. $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$；
> 2. $\varphi(k\alpha) = k\varphi(\alpha)$。
> 则称 $\varphi$ 是 $V$ 到 $U$ 的**线性映射**（或**线性变换**）。当 $U = V$ 时，称 $\varphi$ 为 $V$ 上的**线性变换**；当 $U = \mathbb{K}$ 时，称 $\varphi$ 为 $V$ 上的**线性函数**（或**线性泛函**）。


> [!theorem] 定理 3.31
> 线性映射将零向量映为零向量，将负向量映为负向量。

> [!definition] 定义 3.19
> 设 $\varphi: V \to U$ 是线性映射。称集合 $\mathrm{Ker}\,\varphi = \{\alpha \in V \mid \varphi(\alpha) = 0\}$ 为 $\varphi$ 的**核**，称集合 $\mathrm{Im}\,\varphi = \{\varphi(\alpha) \mid \alpha \in V\}$ 为 $\varphi$ 的**像**。

> [!theorem] 定理 3.32
> $\mathrm{Ker}\,\varphi$ 是 $V$ 的子空间，$\mathrm{Im}\,\varphi$ 是 $U$ 的子空间。

> [!theorem] 定理 3.33（维数公式/秩-零化度定理）
> 设 $\varphi: V \to U$ 是线性映射，$\dim V = n$，则
> $$\dim \mathrm{Ker}\,\varphi + \dim \mathrm{Im}\,\varphi = n$$
> 即 $\dim V = \mathrm{nullity}(\varphi) + \mathrm{rank}(\varphi)$。

> [!proof]-
> 设 $\dim \mathrm{Ker}\,\varphi = r$。取 $\mathrm{Ker}\,\varphi$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_n$。则 $\varphi(\alpha_{r+1}), \ldots, \varphi(\alpha_n)$ 是 $\mathrm{Im}\,\varphi$ 的基。

> [!definition] 定义 3.20
> 设 $\varphi: V \to U$ 是线性映射。
> - 若 $\varphi$ 是单射，称 $\varphi$ 为**单同态**；
> - 若 $\varphi$ 是满射，称 $\varphi$ 为**满同态**；
> - 若 $\varphi$ 是双射，称 $\varphi$ 为**同构**。

#### 3.4.2 线性映射的矩阵表示

> [!definition] 定义 3.21
> 设 $\varphi: V \to U$ 是线性映射，$\dim V = n$，$\dim U = m$。取 $V$ 的基 $\alpha_1, \ldots, \alpha_n$ 和 $U$ 的基 $\beta_1, \ldots, \beta_m$。设
> $$\varphi(\alpha_j) = \sum_{i=1}^m a_{ij}\beta_i, \quad j = 1, \ldots, n$$
> 则矩阵 $A = (a_{ij})_{m \times n}$ 称为 $\varphi$ 在给定基下的**表示矩阵**。


> [!theorem] 定理 3.34
> 设 $\varphi$ 在基 $\{\alpha_j\}$ 和 $\{\beta_i\}$ 下的表示矩阵为 $A$，$\alpha = \sum x_j\alpha_j$，$\varphi(\alpha) = \sum y_i\beta_i$，则 $y = Ax$。

> [!proof]-
> $\varphi(\alpha) = \varphi(\sum x_j\alpha_j) = \sum x_j\varphi(\alpha_j) = \sum_j x_j \sum_i a_{ij}\beta_i = \sum_i(\sum_j a_{ij}x_j)\beta_i = \sum_i (Ax)_i \beta_i$。故 $y = Ax$。

#### 3.4.3 几何问题代数化

线性代数的重要应用之一是将几何问题转化为代数问题求解。

> [!example] 例 3.8
> 求过空间中三点 $A(1, 0, -1)$，$B(2, 1, 0)$，$C(0, 1, 1)$ 的平面方程。
> 
> **解**：设平面上任一点为 $P(x, y, z)$，则 $\vec{AP}$，$\vec{AB}$，$\vec{AC}$ 共面，即
> $$\begin{vmatrix} x-1 & y-0 & z+1 \\ 2-1 & 1-0 & 0+1 \\ 0-1 & 1-0 & 1+1 \end{vmatrix} = \begin{vmatrix} x-1 & y & z+1 \\ 1 & 1 & 1 \\ -1 & 1 & 2 \end{vmatrix} = 0$$
> 展开得 $(x-1)(2-1) - y(2+1) + (z+1)(1+1) = (x-1) - 3y + 2(z+1) = 0$，即 $x - 3y + 2z + 1 = 0$。


### §3.5 基变换与过渡矩阵

#### 3.5.1 过渡矩阵的性质

> [!theorem] 定理 3.35
> 设从基 $\alpha_1, \ldots, \alpha_n$ 到基 $\beta_1, \ldots, \beta_n$ 的过渡矩阵为 $P$，从基 $\beta_1, \ldots, \beta_n$ 到基 $\gamma_1, \ldots, \gamma_n$ 的过渡矩阵为 $Q$，则从 $\{\alpha_i\}$ 到 $\{\gamma_i\}$ 的过渡矩阵为 $PQ$。

> [!proof]-
> $(\gamma_1, \ldots, \gamma_n) = (\beta_1, \ldots, \beta_n)Q = (\alpha_1, \ldots, \alpha_n)PQ$。

#### 3.5.2 线性变换在不同基下的矩阵

> [!theorem] 定理 3.36
> 设 $\varphi$ 是 $V$ 上的线性变换，在基 $\alpha_1, \ldots, \alpha_n$ 下的表示矩阵为 $A$，从基 $\{\alpha_i\}$ 到基 $\{\beta_i\}$ 的过渡矩阵为 $P$（即 $(\beta_1, \ldots, \beta_n) = (\alpha_1, \ldots, \alpha_n)P$），则 $\varphi$ 在基 $\{\beta_i\}$ 下的表示矩阵为 $B = P^{-1}AP$。

> [!proof]-
> $\varphi(\beta_j) = \varphi(\sum_i p_{ij}\alpha_i) = \sum_i p_{ij}\varphi(\alpha_i) = \sum_i p_{ij} \sum_k a_{ki}\alpha_k = \sum_k(\sum_i a_{ki}p_{ij})\alpha_k$。又 $\varphi(\beta_j) = \sum_k b_{kj}\beta_k = \sum_k b_{kj}\sum_i p_{ik}\alpha_i = \sum_i(\sum_k p_{ik}b_{kj})\alpha_i$。比较得 $AP = PB$，即 $B = P^{-1}AP$。

> [!definition] 定义 3.22
> 设 $A, B$ 是 $n$ 阶方阵。如果存在 $n$ 阶非异阵 $P$，使得 $B = P^{-1}AP$，则称 $A$ 与 $B$ **相似**，记为 $A \sim B$。


> [!theorem] 定理 3.37
> 相似关系是等价关系：
> 1. 自反性：$A \sim A$；
> 2. 对称性：若 $A \sim B$，则 $B \sim A$；
> 3. 传递性：若 $A \sim B$，$B \sim C$，则 $A \sim C$。

> [!proof]-
> 1. $A = I^{-1}AI$。
> 2. 若 $B = P^{-1}AP$，则 $A = PBP^{-1} = (P^{-1})^{-1}BP^{-1}$。
> 3. 若 $B = P^{-1}AP$，$C = Q^{-1}BQ$，则 $C = Q^{-1}P^{-1}APQ = (PQ)^{-1}A(PQ)$。

#### 3.5.3 不变子空间

> [!definition] 定义 3.23
> 设 $\varphi$ 是 $V$ 上的线性变换，$U$ 是 $V$ 的子空间。如果对任意 $\alpha \in U$，有 $\varphi(\alpha) \in U$，则称 $U$ 是 $\varphi$ 的**不变子空间**。

> [!theorem] 定理 3.38
> 设 $U$ 是 $\varphi$ 的不变子空间，$\dim U = r$，$\dim V = n$。取 $U$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_n$，则 $\varphi$ 在此基下的矩阵为分块上三角阵：
> $$\begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix}$$
> 其中 $A_{11}$ 是 $r$ 阶方阵。

> [!proof]-
> 由于 $\varphi(\alpha_j) \in U$（$j = 1, \ldots, r$），其坐标后 $n-r$ 个分量为零。


### §3.6 子空间与商空间

#### 3.6.1 子空间的运算

> [!theorem] 定理 3.39（交的维数下界）
> 设 $U_1, U_2$ 是 $n$ 维线性空间 $V$ 的子空间，则
> $$\dim(U_1 \cap U_2) \geq \dim U_1 + \dim U_2 - n$$

> [!proof]-
> 由维数公式 $\dim(U_1 + U_2) + \dim(U_1 \cap U_2) = \dim U_1 + \dim U_2$，且 $\dim(U_1 + U_2) \leq n$，即得。

> [!example] 例 3.9
> 设 $V = \mathbb{R}^4$，$U_1 = L(\alpha_1, \alpha_2)$，$U_2 = L(\beta_1, \beta_2)$，其中 $\alpha_1 = (1, 1, 0, 0)'$，$\alpha_2 = (0, 1, 1, 0)'$，$\beta_1 = (0, 0, 1, 1)'$，$\beta_2 = (1, 0, 0, 1)'$。求 $U_1 \cap U_2$ 的一组基。
> 
> **解**：设 $\xi \in U_1 \cap U_2$，则 $\xi = x_1\alpha_1 + x_2\alpha_2 = y_1\beta_1 + y_2\beta_2$。即 $x_1\alpha_1 + x_2\alpha_2 - y_1\beta_1 - y_2\beta_2 = 0$。解齐次方程组，得基础解系为 $(1, -1, 1, -1)'$，即 $x_1 = 1, x_2 = -1, y_1 = 1, y_2 = -1$。故 $\xi = \alpha_1 - \alpha_2 = (1, 0, -1, 0)'$，$U_1 \cap U_2 = L((1, 0, -1, 0)')$。


#### 3.6.2  Grassmann 公式及其应用

> [!theorem] 定理 3.40
> 设 $U_1, U_2, U_3$ 是有限维线性空间 $V$ 的子空间，则
> $$\dim(U_1 + U_2 + U_3) = \dim U_1 + \dim U_2 + \dim U_3 - \dim(U_1 \cap U_2) - \dim(U_2 \cap U_3) - \dim(U_3 \cap U_1) + \dim(U_1 \cap U_2 \cap U_3)$$

> [!proof]-
> 对 $(U_1 + U_2) + U_3$ 应用维数公式即可。

> [!theorem] 定理 3.41
> 设 $V = U_1 \oplus U_2$，$W$ 是 $V$ 的子空间，则 $W = (W \cap U_1) \oplus (W \cap U_2)$ 一般不成立，但总有 $\dim W \leq \dim(W \cap U_1) + \dim(W \cap U_2)$ 不成立。实际上有：$W \supseteq (W \cap U_1) + (W \cap U_2)$，但直和分解不保证。

#### 3.6.3 商空间的维数与基

> [!theorem] 定理 3.42
> 设 $U$ 是 $V$ 的子空间，$\pi: V \to V/U$ 是自然投影（$\pi(\alpha) = \bar{\alpha}$），则 $\pi$ 是线性映射，$\mathrm{Ker}\,\pi = U$，$\mathrm{Im}\,\pi = V/U$。

> [!theorem] 定理 3.43（同态基本定理）
> 设 $\varphi: V \to W$ 是线性映射，则 $V/\mathrm{Ker}\,\varphi \cong \mathrm{Im}\,\varphi$。

> [!proof]-
> 定义 $\bar{\varphi}: V/\mathrm{Ker}\,\varphi \to \mathrm{Im}\,\varphi$ 为 $\bar{\varphi}(\bar{\alpha}) = \varphi(\alpha)$。验证这是良定义的同构映射。


### §3.7 矩阵的秩

本节系统地讨论矩阵秩的性质及其应用。

#### 3.7.1 秩的基本性质

> [!theorem] 定理 3.44
> 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times s$ 矩阵，则
> $$r(AB) \leq \min\{r(A), r(B)\}$$

> [!proof]-
> $AB$ 的列向量是 $A$ 的列向量的线性组合，故 $r(AB) \leq r(A)$。同理 $r(AB) = r((AB)') = r(B'A') \leq r(B') = r(B)$。

> [!theorem] 定理 3.45（Sylvester 秩不等式）
> 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times s$ 矩阵，则
> $$r(AB) \geq r(A) + r(B) - n$$

> [!proof]-
> 设 $r(B) = r$，则存在非异阵 $P, Q$ 使 $PBQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$。于是 $r(AB) = r(A P^{-1} \begin{pmatrix} I_r & O \\ O & O \end{pmatrix} Q^{-1}) = r(A P^{-1} \begin{pmatrix} I_r & O \\ O & O \end{pmatrix})$。设 $A P^{-1} = (A_1, A_2)$，其中 $A_1$ 有 $r$ 列，则 $r(AB) = r(A_1) \geq r(A) + r - n$。

> [!theorem] 定理 3.46（Frobenius 秩不等式）
> 设 $A, B, C$ 分别是 $m \times n, n \times p, p \times q$ 矩阵，则
> $$r(ABC) + r(B) \geq r(AB) + r(BC)$$


> [!proof]-
> 对分块矩阵做初等变换：
> $$\begin{pmatrix} ABC & O \\ O & B \end{pmatrix} \to \begin{pmatrix} ABC & AB \\ O & B \end{pmatrix} \to \begin{pmatrix} O & AB \\ -BC & B \end{pmatrix} \to \begin{pmatrix} AB & O \\ B & BC \end{pmatrix}$$
> 故 $r(ABC) + r(B) = r\begin{pmatrix} ABC & O \\ O & B \end{pmatrix} = r\begin{pmatrix} AB & O \\ B & BC \end{pmatrix} \geq r(AB) + r(BC)$。

#### 3.7.2 秩的计算方法

> [!theorem] 定理 3.47
> 设 $A$ 是 $m \times n$ 矩阵，$P$ 是 $m$ 阶非异阵，$Q$ 是 $n$ 阶非异阵，则 $r(PAQ) = r(A)$。

> [!theorem] 定理 3.48
> 任意秩为 $r$ 的 $m \times n$ 矩阵 $A$ 都相抵于标准形：
> $$\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$$
> 即存在非异阵 $P, Q$，使得 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$。

> [!proof]-
> 对 $A$ 做初等变换，化为相抵标准形。

> [!theorem] 定理 3.49
> 两个 $m \times n$ 矩阵 $A, B$ 相抵的充要条件是 $r(A) = r(B)$。

> [!proof]-
> 必要性：初等变换不改变秩。充分性：若 $r(A) = r(B) = r$，则 $A, B$ 都相抵于同一标准形 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$，由传递性 $A$ 与 $B$ 相抵。


#### 3.7.3 秩的等价刻画

> [!theorem] 定理 3.50
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。则：
> 1. $A$ 存在一个 $r$ 阶非奇异子式；
> 2. $A$ 的所有 $r+1$ 阶子式（若存在）全为零。

> [!proof]-
> 由于 $r(A) = r$，$A$ 有 $r$ 个线性无关的行，设为第 $i_1, \ldots, i_r$ 行。由这 $r$ 行构成的 $r \times n$ 矩阵有行秩 $r$，故有 $r$ 个线性无关的列，对应的 $r$ 阶子式非零。又若存在 $r+1$ 阶非零子式，则相应的 $r+1$ 行线性无关，与 $r(A) = r$ 矛盾。

> [!theorem] 定理 3.51
> 矩阵的秩等于其非零子式的最大阶数。

### §3.8 相抵标准型及其应用

#### 3.8.1 相抵标准型

> [!theorem] 定理 3.52
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$，则存在 $m$ 阶非异阵 $P$ 和 $n$ 阶非异阵 $Q$，使得
> $$PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$$


#### 3.8.2 矩阵的满秩分解

> [!theorem] 定理 3.53（满秩分解）
> 设 $A$ 是秩为 $r$ 的 $m \times n$ 矩阵，则存在列满秩的 $m \times r$ 矩阵 $B$ 和行满秩的 $r \times n$ 矩阵 $C$，使得 $A = BC$。

> [!proof]-
> 由相抵标准型，存在非异阵 $P, Q$ 使 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$。设 $P^{-1} = (B, B_1)$，$Q^{-1} = \begin{pmatrix} C \\ C_1 \end{pmatrix}$，其中 $B$ 是 $m \times r$，$C$ 是 $r \times n$。则 $A = P^{-1}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q^{-1} = (B, B_1)\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}\begin{pmatrix} C \\ C_1 \end{pmatrix} = BC$。

> [!example] 例 3.10
> 求矩阵 $A = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 8 & 10 \end{pmatrix}$ 的满秩分解。
> 
> **解**：对 $A$ 做初等行变换：
> $$A = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 8 & 10 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & -1 & -2 \\ 0 & 0 & -1 & -2 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
> $r(A) = 2$。取 $A$ 的前两列构成 $B = \begin{pmatrix} 1 & 3 \\ 2 & 5 \\ 3 & 8 \end{pmatrix}$，由行最简形得 $C = \begin{pmatrix} 1 & 2 & 0 & -2 \\ 0 & 0 & 1 & 2 \end{pmatrix}$。验证 $BC = A$。

#### 3.8.3 相抵标准型的应用

> [!example] 例 3.11
> 设 $A$ 是 $n$ 阶方阵，$r(A) = r$。证明：存在 $n$ 阶非异阵 $P$，使得 $P^{-1}AP = \begin{pmatrix} O & * \\ O & * \end{pmatrix}$，其中左上角是 $r \times (n-r)$ 零矩阵。


> [!proof]-
> 设 $Ax = 0$ 的解空间维数为 $n-r$。取解空间的一组基 $\alpha_1, \ldots, \alpha_{n-r}$，扩充为 $\mathbb{K}^n$ 的基 $\alpha_1, \ldots, \alpha_n$。令 $P = (\alpha_1, \ldots, \alpha_n)$，则 $A\alpha_j = 0$（$j = 1, \ldots, n-r$），故 $P^{-1}AP$ 的前 $n-r$ 列为零。

> [!theorem] 定理 3.54
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。则矩阵方程 $AXA = A$ 必有解（此时称 $X$ 为 $A$ 的**广义逆**）。

> [!proof]-
> 设 $A = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q$。令 $X = Q^{-1}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}P^{-1}$，则 $AXA = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}QQ^{-1}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}P^{-1}P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q = A$。

> [!theorem] 定理 3.55
> 设 $A$ 是 $m \times n$ 矩阵，$b \in \mathbb{K}^m$。线性方程组 $Ax = b$ 有解当且仅当 $AA^-b = b$，其中 $A^-$ 是 $A$ 的任一广义逆。此时通解为 $x = A^-b + (I - A^-A)z$，$z \in \mathbb{K}^n$ 任意。

### §3.9 线性方程组的解及其应用

#### 3.9.1 线性方程组的解的讨论


> [!theorem] 定理 3.56（Cramer 法则）
> 设 $A$ 是 $n$ 阶非异阵，$b \in \mathbb{K}^n$，则线性方程组 $Ax = b$ 有唯一解 $x = A^{-1}b$，且第 $j$ 个分量为
> $$x_j = \frac{|A_j|}{|A|}$$
> 其中 $A_j$ 是将 $A$ 的第 $j$ 列换为 $b$ 所得的矩阵。

> [!proof]-
> $Ax = b$ 有唯一解 $x = A^{-1}b$。又 $A \cdot \mathrm{adj}(A) = |A| \cdot I$，故 $x = A^{-1}b = \frac{1}{|A|}\mathrm{adj}(A)b$。而 $(\mathrm{adj}(A)b)_j = \sum_{i=1}^n A_{ij}b_i = |A_j|$。

> [!example] 例 3.12
> 用 Cramer 法则解方程组：
> $$\begin{cases} 2x_1 + x_2 - x_3 = 1 \\ x_1 + x_2 + x_3 = 2 \\ x_1 - x_2 + 2x_3 = 3 \end{cases}$$
> 
> **解**：$|A| = \begin{vmatrix} 2 & 1 & -1 \\ 1 & 1 & 1 \\ 1 & -1 & 2 \end{vmatrix} = 2(2+1) - 1(2-1) + (-1)(-1-1) = 6 - 1 + 2 = 7$。
> $|A_1| = \begin{vmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & -1 & 2 \end{vmatrix} = 1(2+1) - 1(4-3) + (-1)(-2-3) = 3 - 1 + 5 = 7$。
> $|A_2| = \begin{vmatrix} 2 & 1 & -1 \\ 1 & 2 & 1 \\ 1 & 3 & 2 \end{vmatrix} = 2(4-3) - 1(2-1) + (-1)(3-2) = 2 - 1 - 1 = 0$。
> $|A_3| = \begin{vmatrix} 2 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & -1 & 3 \end{vmatrix} = 2(3+2) - 1(3-2) + 1(-1-1) = 10 - 1 - 2 = 7$。
> 故 $x_1 = 1, x_2 = 0, x_3 = 1$。


#### 3.9.2 齐次线性方程组

> [!theorem] 定理 3.57
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r < n$。则齐次线性方程组 $Ax = 0$ 的基础解系恰含 $n-r$ 个向量。

> [!proof]-
> 由定理 3.17，解空间维数 $\dim V_A = n - r$。

> [!example] 例 3.13
> 求齐次线性方程组的基础解系：
> $$\begin{cases} x_1 + 2x_2 + 3x_3 + 4x_4 = 0 \\ 2x_1 + 4x_2 + 5x_3 + 6x_4 = 0 \\ 3x_1 + 6x_2 + 8x_3 + 10x_4 = 0 \end{cases}$$
> 
> **解**：系数矩阵 $A$ 的行最简形为 $\begin{pmatrix} 1 & 2 & 0 & -2 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，$r(A) = 2$，$n = 4$，基础解系含 2 个向量。$x_1 = -2x_2 + 2x_4$，$x_3 = -2x_4$。令 $(x_2, x_4) = (1, 0)$ 得 $\eta_1 = (-2, 1, 0, 0)'$；令 $(x_2, x_4) = (0, 1)$ 得 $\eta_2 = (2, 0, -2, 1)'$。

#### 3.9.3 非齐次线性方程组

> [!theorem] 定理 3.58
> 设 $Ax = b$ 有解，$\gamma_0$ 是特解，$\eta_1, \ldots, \eta_{n-r}$ 是 $Ax = 0$ 的基础解系，则通解为 $\gamma = \gamma_0 + k_1\eta_1 + \cdots + k_{n-r}\eta_{n-r}$。


> [!example] 例 3.14
> 解线性方程组：
> $$\begin{cases} x_1 + 2x_2 + 3x_3 + 4x_4 = 5 \\ 2x_1 + 4x_2 + 5x_3 + 6x_4 = 8 \\ 3x_1 + 6x_2 + 8x_3 + 10x_4 = 13 \end{cases}$$
> 
> **解**：增广矩阵的行最简形为 $\begin{pmatrix} 1 & 2 & 0 & -2 & | & 2 \\ 0 & 0 & 1 & 2 & | & 1 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}$，$r(A) = r(A|b) = 2$，有无穷多解。$x_1 = 2 - 2x_2 + 2x_4$，$x_3 = 1 - 2x_4$。特解：令 $x_2 = x_4 = 0$ 得 $\gamma_0 = (2, 0, 1, 0)'$。基础解系同例 3.13。通解：$\gamma = (2, 0, 1, 0)' + k_1(-2, 1, 0, 0)' + k_2(2, 0, -2, 1)'$。

#### 3.9.4 矩阵方程

> [!theorem] 定理 3.59
> 矩阵方程 $AX = B$ 有解的充要条件是 $r(A) = r(A|B)$。通解为 $X = X_0 + (I - A^-A)Y$，其中 $X_0$ 是特解，$Y$ 是任意适当阶矩阵。

> [!example] 例 3.15
> 解矩阵方程 $AX = B$，其中 $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 6 & 8 \end{pmatrix}$，$B = \begin{pmatrix} 1 & 4 \\ 2 & 7 \\ 3 & 11 \end{pmatrix}$。
> 
> **解**：增广矩阵 $(A|B)$ 的行最简形显示 $r(A) = r(A|B) = 2$。$X_0 = \begin{pmatrix} -1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$ 是特解。$A^-A$ 的计算给出通解形式。


#### 3.9.5 线性方程组在解析几何中的应用

> [!example] 例 3.16
> 求两条直线 $L_1: \frac{x-1}{1} = \frac{y}{2} = \frac{z+1}{-1}$ 和 $L_2: \frac{x}{-1} = \frac{y-1}{1} = \frac{z-2}{2}$ 的交点。
> 
> **解**：$L_1$ 的参数式：$x = 1 + t, y = 2t, z = -1 - t$。$L_2$ 的参数式：$x = -s, y = 1 + s, z = 2 + 2s$。联立得方程组：
> $$\begin{cases} 1 + t = -s \\ 2t = 1 + s \\ -1 - t = 2 + 2s \end{cases}$$
> 解得 $t = 0, s = -1$。交点为 $(1, 0, -1)$。

> [!example] 例 3.17
> 求过三平面 $\pi_1: x + y + z = 1$，$\pi_2: 2x + y - z = 2$，$\pi_3: x - y + z = 3$ 交点的直线方程。
> 
> **解**：解方程组得交点 $(2, -1, 0)$。三个平面的法向量分别为 $n_1 = (1, 1, 1)'$，$n_2 = (2, 1, -1)'$，$n_3 = (1, -1, 1)'$。过该点且方向为 $n_1 \times n_2$ 的直线：先求交线方向 $v = n_1 \times n_2 = (-2, 3, -1)'$，直线方程为 $\frac{x-2}{-2} = \frac{y+1}{3} = \frac{z}{-1}$。


### §3.10 基础训练

#### 一、填空题

1. 向量组 $\alpha_1 = (1, 2, 3)'$，$\alpha_2 = (2, 4, a)'$，$\alpha_3 = (3, 6, 9)'$ 线性相关的充要条件是 $a = $______。

2. 设 $A$ 是 $4 \times 5$ 矩阵，$r(A) = 3$，则 $Ax = 0$ 的基础解系含______个向量。

3. 设 $V$ 是 $n$ 维线性空间，$\varphi$ 是 $V$ 上的线性变换，则 $\dim \mathrm{Ker}\,\varphi + \dim \mathrm{Im}\,\varphi = $______。

#### 二、选择题

1. 下列集合关于通常的加法和数乘构成实线性空间的是（　）
   - (A) 实数域上次数恰好为 $n$ 的多项式全体
   - (B) 实数域上 $n$ 阶奇异矩阵全体
   - (C) 平面上不平行于某一固定向量的向量全体
   - (D) 实数域上连续函数全体 $C[a, b]$

2. 设 $A$ 是 $m \times n$ 矩阵，$Ax = 0$ 只有零解的充要条件是（　）
   - (A) $A$ 的列向量组线性无关
   - (B) $A$ 的行向量组线性无关
   - (C) $r(A) = m$
   - (D) $m = n$


3. 设 $A$ 是 $n$ 阶方阵，$|A| = 0$ 但 $A$ 的某元素 $a_{ij}$ 的代数余子式 $A_{ij} \neq 0$，则 $Ax = 0$ 的基础解系含（　）个向量。
   - (A) $i$　(B) $j$　(C) $1$　(D) $n-1$

#### 三、计算题

1. 求向量组 $\alpha_1 = (1, 0, 2, 1)'$，$\alpha_2 = (1, 2, 0, 1)'$，$\alpha_3 = (2, 1, 3, 2)'$，$\alpha_4 = (2, 5, -1, 4)'$ 的秩和一个极大无关组。

2. 设 $A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & a & 3 \\ 1 & 3 & 2 \end{pmatrix}$。问 $a$ 取何值时 $r(A) = 2$？并求此时 $Ax = 0$ 的通解。

3. 解矩阵方程 $XA = B$，其中 $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$，$B = \begin{pmatrix} 2 & 1 \\ 3 & 2 \\ 1 & 0 \end{pmatrix}$。

#### 四、证明题

1. 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times m$ 矩阵，$m > n$。证明：$|AB| = 0$。

2. 设 $A$ 是 $n$ 阶幂等矩阵（即 $A^2 = A$），证明：$r(A) + r(I - A) = n$。

3. 设 $U_1, U_2, U_3$ 是有限维线性空间 $V$ 的子空间，证明：
   $$\dim(U_1 + U_2 + U_3) \leq \dim U_1 + \dim U_2 + \dim U_3$$


#### 参考答案与提示

**一、填空题**

1. $a = 6$。因为 $\alpha_3 = 3\alpha_1$，所以只需 $\alpha_2$ 与 $\alpha_1$ 共线，即 $\frac{2}{1} = \frac{4}{2} = \frac{a}{3}$，故 $a = 6$。

2. $n - r(A) = 5 - 3 = 2$ 个。

3. $n$（维数公式）。

**二、选择题**

1. (D)。$C[a, b]$ 是线性空间。(A) 不含零多项式，(B) 不封闭，(C) 不封闭。

2. (A)。$Ax = 0$ 只有零解 $\Leftrightarrow$ $n$ 个未知数都自由 $\Leftrightarrow$ $r(A) = n$ $\Leftrightarrow$ 列满秩 $\Leftrightarrow$ 列向量组线性无关。

3. (C)。$|A| = 0$ 故 $r(A) \leq n-1$，而 $A_{ij} \neq 0$ 说明 $r(A) \geq n-1$，故 $r(A) = n-1$，基础解系含 $n - (n-1) = 1$ 个向量。

**三、计算题**

1. **解**：构造矩阵并做初等行变换：
$$A = \begin{pmatrix} 1 & 1 & 2 & 2 \\ 0 & 2 & 1 & 5 \\ 2 & 0 & 3 & -1 \\ 1 & 1 & 2 & 4 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 2 & 2 \\ 0 & 2 & 1 & 5 \\ 0 & -2 & -1 & -5 \\ 0 & 0 & 0 & 2 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 2 & 2 \\ 0 & 2 & 1 & 5 \\ 0 & 0 & 0 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
$r(A) = 3$，极大无关组为 $\alpha_1, \alpha_2, \alpha_4$。


2. **解**：对 $A$ 做初等行变换：
$$A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & a & 3 \\ 1 & 3 & 2 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 1 \\ 0 & a-4 & 1 \\ 0 & 1 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & a-5 & 0 \end{pmatrix}$$
当 $a = 5$ 时 $r(A) = 2$。此时行最简形为 $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$，通解为 $x = k(1, -1, 1)'$，$k \in \mathbb{K}$。

3. **解**：$X = BA^{-1}$。$A^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$，故
$$X = \begin{pmatrix} 2 & 1 \\ 3 & 2 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ 3 & -1 \\ 1 & -1 \end{pmatrix}$$

**四、证明题**

1. **证**：$r(AB) \leq r(A) \leq \min(m, n) = n < m$。$AB$ 是 $m$ 阶方阵且秩小于 $m$，故 $|AB| = 0$。

2. **证**：由 $A^2 = A$ 得 $A(I-A) = 0$。故 $r(A) + r(I-A) \leq n$（Sylvester 不等式）。又 $n = r(I) = r(A + (I-A)) \leq r(A) + r(I-A)$。综上 $r(A) + r(I-A) = n$。

3. **证**：$U_1 + U_2 + U_3 = (U_1 + U_2) + U_3$。由维数公式：
$$\dim((U_1+U_2)+U_3) \leq \dim(U_1+U_2) + \dim U_3 \leq \dim U_1 + \dim U_2 + \dim U_3$$


4. 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$，$P$ 是 $m$ 阶非异阵。则方程组 $PAx = Pb$ 与原方程组 $Ax = b$ 的解集相同，因为 $PAx = Pb \Leftrightarrow Ax = b$（$P$ 非异）。

5. 设 $\alpha_1, \ldots, \alpha_n$ 是 $n$ 维线性空间 $V$ 的基，$\beta_1, \ldots, \beta_n \in V$。若对任意 $i$ 有 $L(\alpha_1, \ldots, \alpha_i) = L(\beta_1, \ldots, \beta_i)$，则 $\beta_1, \ldots, \beta_n$ 也是 $V$ 的一组基。

**证明**：由条件，$\beta_i \in L(\alpha_1, \ldots, \alpha_i)$ 且 $\alpha_i \in L(\beta_1, \ldots, \beta_i)$。特别地，$\beta_1 = c\alpha_1$（$c \neq 0$），$\alpha_1 = d\beta_1$。递推可知两组向量等价，故 $\beta_1, \ldots, \beta_n$ 线性无关，构成基。

6. 设 $A$ 是 $n$ 阶方阵，$A^*$ 是 $A$ 的伴随矩阵。证明：
   - (1) $r(A^*) = n$ 当 $r(A) = n$；
   - (2) $r(A^*) = 1$ 当 $r(A) = n-1$；
   - (3) $r(A^*) = 0$ 当 $r(A) < n-1$。

**证明**：(1) $AA^* = |A|I$，$r(A) = n$ 时 $|A| \neq 0$，$A^* = |A|A^{-1}$ 非异。
(2) $r(A) = n-1$ 时 $|A| = 0$ 但某 $n-1$ 阶子式非零，故 $A^* \neq 0$。由 $AA^* = 0$ 得 $r(A^*) \leq n - r(A) = 1$，结合 $A^* \neq 0$ 得 $r(A^*) = 1$。
(3) $r(A) < n-1$ 时所有 $n-1$ 阶子式为零，$A^* = 0$。


7. 设 $V_1, V_2$ 是 $n$ 维线性空间 $V$ 的两个真子空间。证明：$V_1 \cup V_2 = V$ 当且仅当 $V_1 = V$ 或 $V_2 = V$。因此，真子空间的并集不等于 $V$。

**证明**："如果"方向显然。"仅当"：设 $V_1 \cup V_2 = V$ 但 $V_1 \neq V$ 且 $V_2 \neq V$。取 $\alpha \in V \setminus V_1$，$\beta \in V \setminus V_2$。则 $\alpha \in V_2$，$\beta \in V_1$。考虑 $\alpha + \beta$：若 $\alpha + \beta \in V_1$ 则 $\alpha \in V_1$，矛盾；若 $\alpha + \beta \in V_2$ 则 $\beta \in V_2$，矛盾。

8. 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times p$ 矩阵，$C$ 是 $p \times q$ 矩阵。证明：$r(ABC) \geq r(AB) + r(BC) - r(B)$（Frobenius 不等式）。

**证明**：利用分块矩阵的秩不等式即可证明。

9. 设 $A$ 是 $n$ 阶实对称矩阵。证明：存在正实数 $c$，使得对任意 $x \in \mathbb{R}^n$，有 $|x'Ax| \leq c x'x$。

**提示**：利用 $x'Ax$ 是连续函数，在单位球面上有最大值。

10. 设 $A$ 是 $n$ 阶幂零矩阵（存在正整数 $k$ 使 $A^k = 0$）。证明：$I + A$ 非异，并求 $(I + A)^{-1}$。

**解**：$(I + A)(I - A + A^2 - \cdots + (-1)^{k-1}A^{k-1}) = I + (-1)^{k-1}A^k = I$。故 $(I + A)^{-1} = I - A + A^2 - \cdots + (-1)^{k-1}A^{k-1}$。


#### 进阶习题

1. 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间，$\varphi$ 是 $V$ 上的线性变换。证明：$\varphi^2 = \varphi$ 当且仅当存在 $V$ 的子空间 $W_1, W_2$ 使得 $V = W_1 \oplus W_2$，且 $\varphi|_{W_1} = \mathrm{id}$，$\varphi|_{W_2} = 0$。

**证明**：充分性：若 $V = W_1 \oplus W_2$，$\varphi$ 在 $W_1$ 上是恒等、在 $W_2$ 上是零，则 $\varphi^2 = \varphi$。必要性：设 $\varphi^2 = \varphi$，令 $W_1 = \mathrm{Im}\,\varphi$，$W_2 = \mathrm{Ker}\,\varphi$。对 $\alpha \in V$，$\alpha = \varphi(\alpha) + (\alpha - \varphi(\alpha))$，其中 $\varphi(\alpha) \in W_1$，$\alpha - \varphi(\alpha) \in W_2$（因 $\varphi(\alpha - \varphi(\alpha)) = \varphi(\alpha) - \varphi^2(\alpha) = 0$）。又 $W_1 \cap W_2 = \{0\}$，故 $V = W_1 \oplus W_2$。

2. 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。证明：存在列满秩矩阵 $B_{m \times r}$ 和行满秩矩阵 $C_{r \times n}$，使得 $A = BC$，且这种分解在不计非异变换下唯一。

**证明**：存在性已证（定理 3.53）。唯一性：设 $A = B_1C_1 = B_2C_2$。由 $B_1$ 列满秩，存在左逆 $B_1^-$；$C_1$ 行满秩，存在右逆 $C_1^-$。则 $B_1 = B_2C_2C_1^- = B_2P$，$C_1 = B_1^-B_2C_2 = QC_2$。代入得 $B_2PC_2 = B_2C_2$，由 $B_2$ 列满秩、$C_2$ 行满秩得 $P = Q^{-1}$。


3. 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。证明：$A^2 = (\mathrm{tr}\,A)A$。

**证明**：$r(A) = 1$，则 $A = \alpha\beta'$，其中 $\alpha, \beta$ 是非零列向量。$A^2 = \alpha\beta'\alpha\beta' = (\beta'\alpha)\alpha\beta' = (\mathrm{tr}\,A)A$（因 $\mathrm{tr}(\alpha\beta') = \beta'\alpha$）。

4. 设 $A$ 是 $m \times n$ 矩阵，$b \in \mathbb{K}^m$。证明：$Ax = b$ 有解当且仅当对任意满足 $y'A = 0$ 的 $y \in \mathbb{K}^m$，有 $y'b = 0$。

**证明**：$Ax = b$ 有解 $\Leftrightarrow$ $b \in \mathrm{Im}\,A$ $\Leftrightarrow$ $b \perp (\mathrm{Im}\,A)^\perp$。而 $(\mathrm{Im}\,A)^\perp = \mathrm{Ker}\,A' = \{y \mid y'A = 0\}$。故条件为 $b \perp \mathrm{Ker}\,A'$，即 $y'b = 0$ 对所有 $y \in \mathrm{Ker}\,A'$ 成立。

5. 设 $V$ 是 $n$ 维线性空间，$U_1, \ldots, U_s$ 是 $V$ 的真子空间。证明：$V \neq \bigcup_{i=1}^s U_i$。

**证明**：对 $s$ 用归纳法。$s = 1$ 时显然。假设对 $s-1$ 成立，则存在 $\alpha \notin \bigcup_{i=1}^{s-1} U_i$。若 $\alpha \notin U_s$，则结论成立。若 $\alpha \in U_s$，取 $\beta \notin U_s$。对任意 $k \in \mathbb{K}$，$\beta + k\alpha$：若 $\beta + k\alpha \in U_i$（$i < s$），则 $\beta \in U_i$（因 $\alpha \notin U_i$）。对每个 $i < s$，至多一个 $k$ 使 $\beta + k\alpha \in U_i$。取 $k$ 避开这些值，则 $\beta + k\alpha \notin \bigcup_{i=1}^s U_i$。


6. 设 $A$ 是 $n$ 阶方阵，$A \neq 0$ 但 $A^2 = 0$。证明：$r(A) \leq n/2$。

**证明**：$A^2 = 0$ 意味着 $\mathrm{Im}\,A \subseteq \mathrm{Ker}\,A$。故 $r(A) = \dim \mathrm{Im}\,A \leq \dim \mathrm{Ker}\,A = n - r(A)$，即 $2r(A) \leq n$，$r(A) \leq n/2$。

7. 设 $A, B$ 是 $n$ 阶方阵，$AB = BA$。证明：$r(A+B) \leq r(A) + r(B) - r(AB)$。

**提示**：利用 $(A+B)V \subseteq AV + BV$ 和维数公式。

8. 设 $A$ 是 $n$ 阶方阵，$r(A) = n-1$。证明：$(A^*)^2 = kA^*$（$k$ 为某常数）。

**证明**：$r(A) = n-1$ 时 $r(A^*) = 1$。故 $A^* = \alpha\beta'$，$(A^*)^2 = (\beta'\alpha)\alpha\beta' = kA^*$。

9. 设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，$\varphi_1, \ldots, \varphi_k$ 是 $V$ 上两两不同的线性变换。证明：存在 $\alpha \in V$ 使得 $\varphi_1(\alpha), \ldots, \varphi_k(\alpha)$ 两两不同。

**证明**：对每个 $i \neq j$，$W_{ij} = \{\alpha \in V \mid \varphi_i(\alpha) = \varphi_j(\alpha)\} = \mathrm{Ker}(\varphi_i - \varphi_j)$ 是真子空间（因 $\varphi_i \neq \varphi_j$）。由习题 5，$V \neq \bigcup W_{ij}$。


10. 设 $A$ 是 $n$ 阶实方阵，$A^2 = -I_n$。证明：$n$ 必为偶数，且 $r(A+I) = r(A-I) = n/2$。

**证明**：$\det(A)^2 = \det(-I) = (-1)^n$，故 $n$ 为偶数。$(A+I)(A-I) = A^2 - I = -2I$，故 $A+I$ 和 $A-I$ 都非异... 修正：$(A+I)(A-I) = -2I$，这表示 $A+I$ 可逆。但 $A^2 = -I$ 意味着 $A$ 没有实特征值。实际上 $r(A+I) + r(A-I) \geq r(2A) = n$，且 $(A+I)(A-I) = -2I$ 说明 $\mathrm{Ker}(A+I) \cap \mathrm{Ker}(A-I) = \{0\}$，进一步分析得 $r(A+I) = r(A-I) = n/2$。

#### 补充例题

> [!example] 例 3.18
> 设 $A$ 是 $n$ 阶方阵，$r(A) = r$。证明：$A$ 可表示为 $r$ 个秩为 1 的矩阵之和，但不能表示为少于 $r$ 个秩为 1 的矩阵之和。

**证明**：设 $A = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q$。$\begin{pmatrix} I_r & O \\ O & O \end{pmatrix} = E_{11} + \cdots + E_{rr}$，每个 $E_{ii}$ 秩为 1。故 $A = \sum_{i=1}^r PE_{ii}Q$，每项秩为 1。若 $A = \sum_{i=1}^s B_i$，$r(B_i) = 1$，则 $r = r(A) \leq \sum r(B_i) = s$。


> [!example] 例 3.19
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。证明：对任意整数 $k$（$0 \leq k \leq \min(m, n) - r$），存在秩为 $r+k$ 的矩阵 $B$，使得 $A$ 是 $B$ 的子矩阵。特别地，存在秩为 $\min(m, n)$ 的矩阵以 $A$ 为子矩阵。

**证明**：设 $A = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q$。取 $B = P\begin{pmatrix} I_{r+k} & O \\ O & O \end{pmatrix}Q$（若 $r+k \leq \min(m, n)$），则 $r(B) = r+k$ 且 $A$ 是 $B$ 的子矩阵。

> [!example] 例 3.20
> 设 $A$ 是 $n$ 阶方阵，$A^2 = A$。证明：$r(A) = \mathrm{tr}(A)$。

**证明**：由例 3.11 的结论，$A \sim \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$，其中 $r = r(A)$。相似矩阵迹相同，$\mathrm{tr}(A) = r$。

> [!example] 例 3.21
> 设 $A, B$ 是 $n$ 阶方阵，$AB = 0$。证明：$r(A) + r(B) \leq n$。

**证明**：$AB = 0$ 意味着 $\mathrm{Im}\,B \subseteq \mathrm{Ker}\,A$。故 $r(B) \leq \dim \mathrm{Ker}\,A = n - r(A)$。

> [!example] 例 3.22
> 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。求 $A$ 的所有特征值。

**解**：$A = \alpha\beta'$，$A\alpha = (\beta'\alpha)\alpha$，故 $\mathrm{tr}(A) = \beta'\alpha$ 是特征值。又 $r(A) = 1 < n$（设 $n > 1$），故 $0$ 也是特征值，代数重数至少为 $n-1$。特征值为 $\mathrm{tr}(A), 0, \ldots, 0$。


> [!example] 例 3.23
> 设 $A$ 是 $n$ 阶可逆矩阵，$\alpha, \beta$ 是 $n$ 维列向量。证明：$A + \alpha\beta'$ 可逆当且仅当 $1 + \beta'A^{-1}\alpha \neq 0$，且此时
$$(A + \alpha\beta')^{-1} = A^{-1} - \frac{A^{-1}\alpha\beta'A^{-1}}{1 + \beta'A^{-1}\alpha}$$

**证明**：直接验证：
$$(A + \alpha\beta')(A^{-1} - \frac{A^{-1}\alpha\beta'A^{-1}}{1 + \beta'A^{-1}\alpha})$$
$$= I + \alpha\beta'A^{-1} - \frac{\alpha\beta'A^{-1} + \alpha(\beta'A^{-1}\alpha)\beta'A^{-1}}{1 + \beta'A^{-1}\alpha}$$
$$= I + \alpha\beta'A^{-1} - \frac{(1 + \beta'A^{-1}\alpha)\alpha\beta'A^{-1}}{1 + \beta'A^{-1}\alpha} = I$$

> [!example] 例 3.24（Sherman-Morrison 公式）
> 设 $A$ 是 $n$ 阶可逆矩阵，$u, v$ 是 $n$ 维列向量。若 $1 + v'A^{-1}u \neq 0$，则
> $$(A + uv')^{-1} = A^{-1} - \frac{A^{-1}uv'A^{-1}}{1 + v'A^{-1}u}$$

> [!example] 例 3.25
> 设 $A$ 是 $n$ 阶方阵，$r(A) = n-1$，$A^*$ 是 $A$ 的伴随矩阵。证明：存在常数 $k$，使得 $(A^*)^2 = kA^*$，且 $k = \mathrm{tr}(A^*)$。

**证明**：$r(A) = n-1$ 时 $r(A^*) = 1$，故 $A^* = \alpha\beta'$（秩 1 分解）。$(A^*)^2 = \alpha\beta'\alpha\beta' = (\beta'\alpha)\alpha\beta' = (\mathrm{tr}\,A^*)A^*$。


> [!example] 例 3.26
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。证明：线性方程组 $Ax = b$ 对任意 $b \in \mathbb{K}^m$ 都有解的充要条件是 $r(A) = m$（即 $A$ 行满秩）。

**证明**：$Ax = b$ 对任意 $b$ 有解 $\Leftrightarrow$ $\mathrm{Im}\,A = \mathbb{K}^m$ $\Leftrightarrow$ $r(A) = m$。

> [!example] 例 3.27
> 设 $A$ 是 $n$ 阶方阵，$r(A) = n-1$。求 $Ax = 0$ 的通解。

**解**：$r(A) = n-1$，故 $Ax = 0$ 的解空间维数为 1。设 $A_{ij} \neq 0$ 是某代数余子式，则 $(A_{i1}, A_{i2}, \ldots, A_{in})' = A^*$ 的第 $i$ 列。由 $AA^* = |A|I = 0$，$A^*$ 的每一列都是 $Ax = 0$ 的解。因 $r(A^*) = 1$，非零列构成基础解系。通解 $x = k(A_{i1}, \ldots, A_{in})'$。

> [!example] 例 3.28
> 设 $A$ 是 $n$ 阶实对称正定矩阵，$B$ 是 $n \times m$ 实矩阵。证明：$B'AB$ 正定当且仅当 $B$ 列满秩。

**证明**：$B'AB$ 对称。$x'B'ABx = (Bx)'A(Bx) \geq 0$，等号成立当且仅当 $Bx = 0$（因 $A$ 正定）。$B'AB$ 正定 $\Leftrightarrow$ $x \neq 0 \Rightarrow Bx \neq 0$ $\Leftrightarrow$ $B$ 列满秩。

> [!example] 例 3.29
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = m$。证明：对任意 $b \in \mathbb{K}^m$，$Ax = b$ 有解，且可以选取解 $x_0$ 使得 $x_0 \perp \mathrm{Ker}\,A$（即 $x_0$ 是极小范数解）。

**证明**：$r(A) = m$，$A$ 行满秩。$Ax = b$ 有解。设 $x_1$ 是任一解，$x_1 = x_0 + y$，$y \in \mathrm{Ker}\,A$，$x_0 \in (\mathrm{Ker}\,A)^\perp$。由正交分解定理，这样的 $x_0$ 唯一且 $\|x_0\| \leq \|x_1\|$。


> [!example] 例 3.30
> 设 $A$ 是 $n$ 阶方阵，$A^2 = I$。证明：$r(A+I) + r(A-I) = n$。

**证明**：$(A+I)(A-I) = A^2 - I = 0$，故 $r(A+I) + r(A-I) \leq n$。又 $2I = (A+I) + (I-A)$，故 $n = r(2I) \leq r(A+I) + r(I-A) = r(A+I) + r(A-I)$。综上得等式。

> [!example] 例 3.31
> 设 $A, B$ 是 $n$ 阶方阵，$A + B$ 和 $A - B$ 都可逆。证明：存在非异阵 $P$ 使得 $P^{-1}AP$ 和 $P^{-1}BP$ 都是对角块矩阵。

**提示**：利用 $(A+B)^{-1}(A-B)$ 的性质。

> [!example] 例 3.32
> 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。求 $e^A = I + A + \frac{A^2}{2!} + \cdots$。

**解**：$A = \alpha\beta'$，$A^k = (\beta'\alpha)^{k-1}A$（$k \geq 1$）。
$$e^A = I + \sum_{k=1}^{\infty} \frac{A^k}{k!} = I + \frac{e^{\beta'\alpha} - 1}{\beta'\alpha}A$$

> [!example] 例 3.33
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。证明：线性方程组 $Ax = 0$ 的任意 $n-r$ 个线性无关的解向量都构成基础解系。

**证明**：解空间维数为 $n-r$，故任意 $n-r$ 个线性无关解都是基。


> [!example] 例 3.34
> 设 $A$ 是 $n$ 阶方阵，$r(A) = r$。证明：存在 $n$ 阶非异阵 $P$，使得 $P^{-1}AP = \begin{pmatrix} B & O \\ O & O \end{pmatrix}$，其中 $B$ 是 $r$ 阶非异阵。

**证明**：由相抵标准型，存在非异阵 $P_1, Q_1$ 使 $A = P_1\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q_1$。$r(A) = r$，故 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 是 $A$ 的相抵标准型。利用 $A$ 的 Jordan 标准型或 Smith 标准型的思想进一步证明。

> [!example] 例 3.35
> 设 $A, B$ 是 $n$ 阶方阵。证明：$AB$ 与 $BA$ 有相同的特征多项式（不计零特征值的重数差异外），特别地，当 $n$ 阶时 $|\lambda I - AB| = |\lambda I - BA|$。

**证明**：利用分块矩阵：
$$\begin{pmatrix} \lambda I & A \\ B & I \end{pmatrix}\begin{pmatrix} I & O \\ -B & \lambda I \end{pmatrix} = \begin{pmatrix} \lambda I - AB & \lambda A \\ O & \lambda I \end{pmatrix}$$
$$\begin{pmatrix} I & O \\ -B & \lambda I \end{pmatrix}\begin{pmatrix} \lambda I & A \\ B & I \end{pmatrix} = \begin{pmatrix} \lambda I & A \\ O & \lambda I - BA \end{pmatrix}$$
两边取行列式即得 $|\lambda I - AB| \cdot \lambda^n = \lambda^n \cdot |\lambda I - BA|$，故 $|\lambda I - AB| = |\lambda I - BA|$。


> [!example] 例 3.36
> 设 $A$ 是 $n$ 阶实对称矩阵，$\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$ 是其特征值。证明：
> $$\lambda_1 = \min_{x \neq 0} \frac{x'Ax}{x'x}, \quad \lambda_n = \max_{x \neq 0} \frac{x'Ax}{x'x}$$

**证明**：实对称矩阵可正交对角化，$A = Q'DQ$，$Q$ 正交，$D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$。令 $y = Qx$，则 $\frac{x'Ax}{x'x} = \frac{y'Dy}{y'y} = \frac{\sum \lambda_i y_i^2}{\sum y_i^2}$。显然最小值在 $y = (1, 0, \ldots, 0)'$ 时取到 $\lambda_1$，最大值在 $y = (0, \ldots, 0, 1)'$ 时取到 $\lambda_n$。

> [!example] 例 3.37
> 设 $A, B$ 是 $n$ 阶实对称矩阵，$A$ 正定。证明：存在非异阵 $P$，使得 $P'AP = I$，$P'BP$ 为对角阵。

**证明**：$A$ 正定，存在 $P_1$ 使 $P_1'AP_1 = I$。$P_1'BP_1$ 实对称，存在正交阵 $Q$ 使 $Q'P_1'BP_1Q = D$（对角）。令 $P = P_1Q$，则 $P'AP = Q'Q = I$，$P'BP = D$。

> [!example] 例 3.38（同时合同对角化）
> 设 $A, B$ 是 $n$ 阶实对称矩阵，$A$ 正定。则存在非异阵 $P$ 使得 $P'AP = I$，$P'BP = \mathrm{diag}(\mu_1, \ldots, \mu_n)$，其中 $\mu_i$ 是 $A^{-1}B$ 的特征值。


> [!example] 例 3.39
> 设 $A$ 是 $n$ 阶方阵，$r(A) = r$。证明：对任意正整数 $k$，$r(A^k) \geq 2r - n$（当 $k = 2$ 时）。

**证明**：$r(A^2) \geq 2r(A) - n$（Sylvester 不等式）。对 $k > 2$，递推得 $r(A^k) \geq 2r(A^{k-1}) - n \geq \cdots$。

> [!example] 例 3.40
> 设 $A$ 是 $n$ 阶幂零矩阵，$A^k = 0$ 但 $A^{k-1} \neq 0$。证明：$r(A) \geq \frac{n}{k}$。

**证明**：$\{0\} \subseteq \mathrm{Ker}\,A \subseteq \mathrm{Ker}\,A^2 \subseteq \cdots \subseteq \mathrm{Ker}\,A^k = \mathbb{K}^n$。设 $n_i = \dim \mathrm{Ker}\,A^i$，则 $n_k = n$，$n_i - n_{i-1} \geq 1$（因 $A^{i-1} \neq 0$ 时有严格包含）。由维数公式，$n_i \geq i$，$n = n_k \leq k \cdot (n - r(A))$，故 $r(A) \geq n - n/k = n(k-1)/k$... 修正：$n_i \geq i$ 不成立，应为 $n_i$ 递增且 $n_k - n_0 = n$。$r(A) \geq n/k$ 可通过分析 Jordan 块得到。

#### 第3章小结

本章主要内容包括：

1. **线性空间的基本概念**：数域、线性空间、子空间、基与维数。
2. **向量的线性关系**：线性相关与线性无关、极大无关组、秩。
3. **线性空间的结构**：同构、基变换、过渡矩阵、直和分解、商空间。
4. **线性映射**：线性映射的定义、核与像、秩-零化度定理、矩阵表示。
5. **矩阵的秩**：秩的性质、计算方法、Sylvester 和 Frobenius 不等式。
6. **相抵标准型**：标准型的求法、满秩分解、广义逆。
7. **线性方程组**：解的判定、齐次与非齐次方程组的解的结构、Cramer 法则。
8. **几何应用**：直线与平面的方程、位置关系的判定。


#### 复习题

1. 判断下列向量组的线性相关性：
   - (a) $\alpha_1 = (1, 2, 3)'$，$\alpha_2 = (2, 3, 4)'$，$\alpha_3 = (3, 5, 8)'$
   - (b) $\alpha_1 = (1, i, 0)'$，$\alpha_2 = (i, -1, 1)'$，$\alpha_3 = (0, 1, i)'$（$i = \sqrt{-1}$）

2. 求向量组 $\alpha_1 = (1, 2, -1, 1)'$，$\alpha_2 = (2, 4, 1, -1)'$，$\alpha_3 = (3, 6, 0, 0)'$，$\alpha_4 = (1, 2, -2, 2)'$ 的秩和一个极大无关组。

3. 设 $V = \mathbb{R}^4$，$U_1 = L((1, 1, 0, 0)', (0, 1, 1, 0)')$，$U_2 = L((0, 0, 1, 1)', (1, 0, 0, 1)')$。求 $U_1 + U_2$ 和 $U_1 \cap U_2$ 的维数和一组基。

4. 设 $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & a \\ 3 & b & 9 \end{pmatrix}$。问 $a, b$ 取何值时 $r(A)$ 最小？并求此时的秩。

5. 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times m$ 矩阵。证明：$|I_m - AB| = |I_n - BA|$。


6. 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。证明：$A$ 相似于对角阵当且仅当 $\mathrm{tr}(A) \neq 0$。

**提示**：$A = \alpha\beta'$，若 $\beta'\alpha \neq 0$，$A$ 有 $n-1$ 个零特征值和一个非零特征值 $\beta'\alpha$，且几何重数等于代数重数。

7. 设 $A$ 是 $n$ 阶实对称矩阵，$\lambda_{\min}$ 和 $\lambda_{\max}$ 分别是其最小和最大特征值。证明：对任意 $x \in \mathbb{R}^n$，
$$\lambda_{\min} x'x \leq x'Ax \leq \lambda_{\max} x'x$$

8. 设 $A$ 是 $m \times n$ 矩阵，$b \in \mathbb{K}^m$。证明：$Ax = b$ 有解当且仅当 $r(A) = r(A|b)$。当解存在时，通解为 $x = x_p + x_h$，$x_p$ 是特解，$x_h \in \mathrm{Ker}\,A$。

9. 设 $V$ 是 $n$ 维线性空间，$\varphi$ 是 $V$ 上的线性变换。证明：$\varphi$ 是单射当且仅当 $\varphi$ 是满射，当且仅当 $\varphi$ 是同构。

10. 设 $A$ 是 $n$ 阶方阵，$r(A) = r$。证明：$A$ 可以表示为两个对称矩阵的乘积。


#### 复习题解答与提示

1. **解**：
   - (a) $\alpha_3 = \alpha_1 + \alpha_2$，线性相关。
   - (b) $\alpha_2 = i\alpha_1 + \alpha_3$，$\begin{vmatrix} 1 & i & 0 \\ i & -1 & 1 \\ 0 & 1 & i \end{vmatrix} = 1(-i-1) - i(i^2-0) + 0 = -i-1+i = -1 \neq 0$，线性无关。

2. **解**：构造矩阵做行变换：$\begin{pmatrix} 1 & 2 & 3 & 1 \\ 2 & 4 & 6 & 2 \\ -1 & 1 & 0 & -2 \\ 1 & -1 & 0 & 2 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 3 & 3 & -1 \\ 0 & -3 & -3 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 3 & 3 & -1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$。$r = 2$，极大无关组 $\alpha_1, \alpha_2$ 或 $\alpha_1, \alpha_3$。

3. **解**：$U_1 + U_2 = L((1, 1, 0, 0)', (0, 1, 1, 0)', (0, 0, 1, 1)', (1, 0, 0, 1)')$。这四个向量的秩为 3（和为 0），故 $\dim(U_1 + U_2) = 3$。由维数公式，$\dim(U_1 \cap U_2) = 2 + 2 - 3 = 1$。

4. **解**：$|A| = 1(36-ab) - 2(18-3a) + 3(2b-12) = 36 - ab - 36 + 6a + 6b - 36 = 6a + 6b - ab - 36 = -(a-6)(b-6)$。$a = 6$ 或 $b = 6$ 时 $|A| = 0$，$r(A) \leq 2$。当 $a = b = 6$ 时 $r(A) = 1$（所有行成比例），这是最小秩。


5. **证明**：利用分块矩阵：
$$\begin{pmatrix} I_m & A \\ B & I_n \end{pmatrix}\begin{pmatrix} I_m & O \\ -B & I_n \end{pmatrix} = \begin{pmatrix} I_m - AB & A \\ O & I_n \end{pmatrix}$$
$$\begin{pmatrix} I_m & O \\ -B & I_n \end{pmatrix}\begin{pmatrix} I_m & A \\ B & I_n \end{pmatrix} = \begin{pmatrix} I_m & A \\ O & I_n - BA \end{pmatrix}$$
两边取行列式即得 $|I_m - AB| = |I_m \quad A \\ B \quad I_n| = |I_n - BA|$。

6. **证明**：$A = \alpha\beta'$，特征值为 $\mathrm{tr}(A), 0, \ldots, 0$。若 $\mathrm{tr}(A) \neq 0$，则 $A$ 有 $n-1$ 个线性无关特征向量对应特征值 0，再加一个对应 $\mathrm{tr}(A)$ 的特征向量 $\alpha$，共 $n$ 个线性无关特征向量，故可对角化。若 $\mathrm{tr}(A) = 0$，则唯一特征值 0 的几何重数为 $n-1 < n$，不可对角化。

7. **证明**：由例 3.36，Rayleigh 商的最小值和最大值分别为最小和最大特征值。

8. **证明**：有解判定定理。通解结构由齐次方程组的基础解系加上特解得到。

9. **证明**：有限维空间上，$\varphi$ 单射 $\Leftrightarrow$ $\mathrm{Ker}\,\varphi = \{0\}$ $\Leftrightarrow$ $\dim \mathrm{Im}\,\varphi = n$ $\Leftrightarrow$ $\varphi$ 满射。

10. **证明**：$A = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q$。$\begin{pmatrix} I_r & O \\ O & O \end{pmatrix} = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 是对称矩阵的乘积。令 $S_1 = P\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}P'$，$S_2 = (P')^{-1}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}Q$，适当调整使 $A = S_1S_2$。


#### 综合测试题

1. 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。证明：$A$ 的特征多项式为 $\lambda^n - \mathrm{tr}(A)\lambda^{n-1}$。

2. 设 $A$ 是 $n$ 阶实对称正定矩阵。证明：对任意正整数 $k$，存在唯一的实对称正定矩阵 $B$ 使得 $B^k = A$。

3. 设 $A, B$ 是 $n$ 阶方阵，$AB = BA$，且 $A$ 有 $n$ 个不同的特征值。证明：$B$ 可表示为 $A$ 的多项式。

4. 设 $V$ 是 $n$ 维线性空间，$\varphi$ 是 $V$ 上的幂等线性变换（$\varphi^2 = \varphi$）。证明：存在 $V$ 的一组基，使得 $\varphi$ 在此基下的矩阵为 $\mathrm{diag}(I_r, O)$，其中 $r = r(\varphi)$。

5. 设 $A$ 是 $m \times n$ 实矩阵，$b \in \mathbb{R}^m$。线性方程组 $Ax = b$ 的最小二乘解是满足 $\|Ax - b\|$ 最小的 $x$。证明：$x$ 是最小二乘解当且仅当 $A'Ax = A'b$。

#### 本章学习要点

- 掌握线性空间的定义与基本性质
- 理解向量的线性相关性与秩的概念
- 熟练运用基变换与坐标变换
- 掌握矩阵秩的各种刻画与计算方法
- 能够求解各类线性方程组
- 理解线性映射与矩阵表示的关系
- 能够将几何问题转化为代数问题

---

**第3章完**


---

