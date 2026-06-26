# 算子的分块三角化：从分块上三角矩阵到不变过滤与商空间链

本篇笔记探讨线性算子分块三角化的几何与代数本质。我们将建立经典的分块上三角矩阵表示与无坐标的**过滤（Filtration）**以及**商空间链（Quotient Chain）**之间的精确对等关系。

---

## 1. 核心定义

> [!definition] 过滤 (Filtration)
> 设 $X$ 是域 $\mathbb{F}$ 上的 $n$ 维向量空间。$X$ 的一个**过滤**是指一系列嵌套的子空间：
> $$
> 0 = V_0 \subset V_1 \subset V_2 \subset \dots \subset V_m = X
> $$
> 其中每个子空间的维数差记为 $d_k = \dim V_k - \dim V_{k-1} \ge 1$（满足 $\sum_{k=1}^m d_k = n$）。
> 
> 如果一个算子 $A: X \to X$ 满足 $A(V_k) \subset V_k$ 对所有 $k=1, \dots, m$ 均成立，则称此过滤是 **$A$-不变的**。

> [!definition] 分块上三角矩阵 (Block Upper Triangular Matrix)
> 算子 $A$ 在一组与过滤相适应的基 $\mathcal{B}$ 下的矩阵表示呈分块上三角形式：
> $$
> [A]_\mathcal{B} = \begin{pmatrix}
> A_{11} & A_{12} & \dots & A_{1m} \\
> 0      & A_{22} & \dots & A_{2m} \\
> \vdots & \vdots & \ddots & \vdots \\
> 0      & 0      & \dots & A_{mm}
> \end{pmatrix}
> $$
> 其中每个对角分块 $A_{kk}$ 是一个 $d_k \times d_k$ 的矩阵。

---

## 2. 等价性定理

分块的“三角性”本质上反映了算子与嵌套子空间序列（过滤）之间的相容性。

> [!theorem] 分块三角化与不变过滤的等价性
> 设 $A: X \to X$ 是线性算子。以下两命题等价：
> 1. 存在 $X$ 的一组基 $\mathcal{B}$，使得 $[A]_\mathcal{B}$ 是分块上三角矩阵，对角块大小为 $d_1, \dots, d_m$。
> 2. 存在 $X$ 的一个 $A$-不变过滤 $0 = V_0 \subset V_1 \subset \dots \subset V_m = X$，满足 $\dim V_k - \dim V_{k-1} = d_k$。

> [!proof]- 证明
> **(1) $\implies$ (2)**：
> 设基底为 $\mathcal{B} = \{e_{1,1}, \dots, e_{1,d_1}, e_{2,1}, \dots, e_{2,d_2}, \dots, e_{m,1}, \dots, e_{m,d_m}\}$。
> 对每个 $k = 1, \dots, m$，定义子空间：
> $$
> V_k = \operatorname{span}\Big( \{e_{i, j} \mid i \le k, 1 \le j \le d_i\} \Big)
> $$
> 根据分块上三角的定义，对于属于第 $k$ 组的任意基向量 $e_{k, s}$，其像仅包含前 $k$ 组基向量的线性组合：
> $$
> A(e_{k, s}) \in \operatorname{span}\Big( \{e_{i, j} \mid i \le k, 1 \le j \le d_i\} \Big) = V_k
> $$
> 结合嵌套关系，容易得到对所有 $i \le k$ 均有 $A(e_{i, s}) \in V_k$。因此 $A(V_k) \subset V_k$。
> 
> **(2) $\implies$ (1)**：
> 给定 $A$-不变过滤 $0 = V_0 \subset V_1 \subset \dots \subset V_m = X$。
> 对每个 $k=1, \dots, m$，选择 $V_k$ 中关于 $V_{k-1}$ 的补空间中的基向量 $\{e_{k, 1}, \dots, e_{k, d_k}\}$，使得整个集合拼起来构成 $X$ 的基底 $\mathcal{B}$。
> 由于 $A(V_k) \subset V_k$，对于第 $k$ 组的基向量 $e_{k, s} \in V_k$，有 $A(e_{k, s}) \in V_k$。
> 因为 $V_k$ 仅由前 $k$ 组基向量张成，所以 $A(e_{k, s})$ 写成基底的线性组合时，所有属于第 $k+1$ 组及之后的基向量的系数全为 $0$。这正好对应了分块矩阵中第 $k$ 个主分块列下方（即第 $k$ 行分块以下）的分块全为零矩阵。

---

## 3. 商空间视角：逐层商去的代数本质

在全空间 $X$ 中，当算子作用在 $V_k$ 上时，由于它可能向更小的子空间 $V_{k-1}$ 发生“单向漏出”，导致在几何上 $V_k$ 内部的结构不够纯粹。商空间的操作正是为了抹平这种干扰。

### 3.1 诱导算子与对角分块

设 $0 = V_0 \subset V_1 \subset \dots \subset V_m = X$ 是 $A$-不变过滤。
在商空间 $X/V_{k-1}$ 中，由于 $V_{k-1}$ 被商去（视为零），原本“没入 $V_{k-1}$”的部分被彻底截断。

在商空间中考虑子空间 $V_k / V_{k-1}$。对于任意 $v + V_{k-1} \in V_k / V_{k-1}$，诱导算子 $\bar{A}$ 作用于其上：
$$
\bar{A}(v + V_{k-1}) = A(v) + V_{k-1}
$$
由于 $A(V_k) \subset V_k$，我们有 $A(v) \in V_k$，因此 $A(v) + V_{k-1} \in V_k / V_{k-1}$。

> [!proposition] 商空间中的闭合性（分块版）
> 子空间 $V_k / V_{k-1}$ 是商空间 $X/V_{k-1}$ 上诱导算子 $\bar{A}$ 的**不变子空间**。
> 限制在此不变子空间上的算子记为 $\bar{A}_k = \bar{A} \big|_{V_k / V_{k-1}}$。

这个限制算子 $\bar{A}_k: V_k/V_{k-1} \to V_k/V_{k-1}$ 的维度恰好为 $d_k$。
如果我们写出矩阵，**对角分块 $A_{kk}$ 恰好就是算子 $\bar{A}_k$ 在商空间 $V_k/V_{k-1}$ 上的矩阵表示。**

### 3.2 逐层解耦链

通过依次商去不变子空间，我们得到如下的商空间链：
$$
X \xrightarrow{\text{商 } V_1} X/V_1 \xrightarrow{\text{商 } V_2/V_1} X/V_2 \xrightarrow{\text{商 } V_3/V_2} \dots \xrightarrow{\text{商 } V_m/V_{m-1}} 0
$$
在这个链条中：
* 原先分块上三角矩阵中复杂的非对角分块 $A_{ik} \ (i < k)$（刻画 $V_k$ 没入 $V_i$ 的流动），在进行到第 $k$ 步的商操作时，由于整个 $V_{k-1}$（包含所有的 $V_i, i < k$）已被视作零，这些复杂的漏出流动全部被抹平。
* 留下来的只有在各个商空间 $V_k / V_{k-1}$ 内部闭合的算子 $\bar{A}_k$（对应对角分块 $A_{kk}$）。

因此，特征多项式的乘积关系在算子层面呈现为：
$$
\det(\lambda I - A) = \prod_{k=1}^m \det(\lambda I - \bar{A}_k)
$$
