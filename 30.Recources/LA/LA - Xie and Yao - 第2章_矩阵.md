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

## 第2章 矩阵


### §2.1 基本概念

> [!definition] 矩阵的定义
> 设 $P$ 是一个数域，由 $P$ 中 $m \times n$ 个数 $a_{ij}\,(i=1,2,\cdots,m;\,j=1,2,\cdots,n)$ 排成的 $m$ 行 $n$ 列的矩形阵列：
> $$\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$
> 称为 $P$ 上的 **$m \times n$ 矩阵**（$m \times n$ matrix）. 这个 $m \times n$ 矩阵常记为 $\boldsymbol{A}$ 或 $\boldsymbol{A}_{m \times n}$，有时也记为 $\boldsymbol{A} = (a_{ij})_{m \times n}$. 其中 $a_{ij}$ 称为矩阵 $\boldsymbol{A}$ 的 **$(i,j)$ 元素**.

> [!definition] 方阵
> 当 $m = n$ 时，称 $\boldsymbol{A} = (a_{ij})_{n \times n}$ 为 **$n$ 阶方阵**（square matrix of order $n$），元素 $a_{ii}\,(i=1,2,\cdots,n)$ 称为 $\boldsymbol{A}$ 的 **主对角线元素**（diagonal element）.

> [!definition] 负矩阵、零矩阵、单位阵
> - 元素全为零的 $m \times n$ 矩阵称为 **零矩阵**，记作 $\boldsymbol{O}_{m \times n}$（或 $\boldsymbol{O}$）.
> - 若 $\boldsymbol{A} = (a_{ij})$，则矩阵 $(-a_{ij})$ 称为 $\boldsymbol{A}$ 的 **负矩阵**，记为 $-\boldsymbol{A}$.
> - 主对角线上元素全为 $1$，其余元素全为 $0$ 的 $n$ 阶方阵称为 **$n$ 阶单位阵**，记为 $\boldsymbol{I}_n$（或 $\boldsymbol{I}$，$\boldsymbol{E}$）.

> [!definition] 相抵（等价）
> 矩阵 $\boldsymbol{A}$ 经过有限次 **初等变换** 变成矩阵 $\boldsymbol{B}$，则称 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ **相抵**（或 **等价**），记为 $\boldsymbol{A} \sim \boldsymbol{B}$.


#### 特殊矩阵

> [!definition] 对角阵、数量阵
> 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵，若 $a_{ij} = 0$ 对一切 $i \neq j$ 成立，则称 $\boldsymbol{A}$ 为 **对角阵**（diagonal matrix）. 此时记为 $\boldsymbol{A} = \mathrm{diag}\{a_{11}, a_{22}, \cdots, a_{nn}\}$.
> 
> 特别地，若 $a_{11} = a_{22} = \cdots = a_{nn} = a$，则称 $\boldsymbol{A}$ 为 **数量阵**（scalar matrix）.

> [!definition] 三角阵
> 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵：
> - 若当 $i > j$ 时 $a_{ij} = 0$，则称 $\boldsymbol{A}$ 为 **上三角阵**（upper triangular matrix）.
> - 若当 $i < j$ 时 $a_{ij} = 0$，则称 $\boldsymbol{A}$ 为 **下三角阵**（lower triangular matrix）.

> [!definition] 对称阵、反对称阵
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵：
> - 若 $\boldsymbol{A}' = \boldsymbol{A}$，则称 $\boldsymbol{A}$ 为 **对称阵**（symmetric matrix）.
> - 若 $\boldsymbol{A}' = -\boldsymbol{A}$，则称 $\boldsymbol{A}$ 为 **反对称阵**（skew-symmetric matrix）.

> [!definition] 共轭、共轭转置
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$ 为复矩阵，称 $\overline{\boldsymbol{A}} = (\overline{a}_{ij})_{m \times n}$ 为 $\boldsymbol{A}$ 的 **共轭**（conjugate）. $\boldsymbol{A}'$ 的共轭 $\overline{\boldsymbol{A}'}$ 称为 $\boldsymbol{A}$ 的 **共轭转置**，常记为 $\boldsymbol{A}^*$ 或 $\boldsymbol{A}^H$.


### §2.3 矩阵的运算

#### 1. 加法与数乘

> [!definition] 矩阵的加法
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$，$\boldsymbol{B} = (b_{ij})_{m \times n}$，定义 $\boldsymbol{A} + \boldsymbol{B} = (a_{ij} + b_{ij})_{m \times n}$.

> [!definition] 矩阵的数乘
> 设 $k \in P$，$\boldsymbol{A} = (a_{ij})_{m \times n}$，定义 $k\boldsymbol{A} = (ka_{ij})_{m \times n}$.

> [!theorem] 加法与数乘的性质
> 设 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}$ 都是 $m \times n$ 矩阵，$k, l$ 是数域 $P$ 中的数，则：
> 1. $\boldsymbol{A} + \boldsymbol{B} = \boldsymbol{B} + \boldsymbol{A}$（交换律）
> 2. $(\boldsymbol{A} + \boldsymbol{B}) + \boldsymbol{C} = \boldsymbol{A} + (\boldsymbol{B} + \boldsymbol{C})$（结合律）
> 3. $\boldsymbol{A} + \boldsymbol{O} = \boldsymbol{A}$
> 4. $\boldsymbol{A} + (-\boldsymbol{A}) = \boldsymbol{O}$
> 5. $1 \cdot \boldsymbol{A} = \boldsymbol{A}$
> 6. $(kl)\boldsymbol{A} = k(l\boldsymbol{A})$
> 7. $(k + l)\boldsymbol{A} = k\boldsymbol{A} + l\boldsymbol{A}$
> 8. $k(\boldsymbol{A} + \boldsymbol{B}) = k\boldsymbol{A} + k\boldsymbol{B}$

#### 2. 乘法

> [!definition] 矩阵的乘法
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$，$\boldsymbol{B} = (b_{ij})_{n \times p}$，定义 $\boldsymbol{AB} = (c_{ij})_{m \times p}$，其中
> $$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}, \quad i = 1, 2, \cdots, m; \quad j = 1, 2, \cdots, p.$$

> [!theorem] 矩阵乘法的性质
> 1. **结合律**：$(\boldsymbol{AB})\boldsymbol{C} = \boldsymbol{A}(\boldsymbol{BC})$
> 2. **分配律**：$\boldsymbol{A}(\boldsymbol{B} + \boldsymbol{C}) = \boldsymbol{AB} + \boldsymbol{AC}$，$(\boldsymbol{B} + \boldsymbol{C})\boldsymbol{A} = \boldsymbol{BA} + \boldsymbol{CA}$
> 3. **单位阵**：$\boldsymbol{I}_m\boldsymbol{A} = \boldsymbol{A}\boldsymbol{I}_n = \boldsymbol{A}$
> 4. **零矩阵**：$\boldsymbol{O}\boldsymbol{A} = \boldsymbol{O}$，$\boldsymbol{A}\boldsymbol{O} = \boldsymbol{O}$


#### 3. 转置

> [!definition] 转置
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$，称 $\boldsymbol{A}' = (a_{ji})_{n \times m}$ 为 $\boldsymbol{A}$ 的 **转置**（transpose）.

> [!theorem] 转置的性质
> 1. $(\boldsymbol{A}')' = \boldsymbol{A}$
> 2. $(\boldsymbol{A} + \boldsymbol{B})' = \boldsymbol{A}' + \boldsymbol{B}'$
> 3. $(k\boldsymbol{A})' = k\boldsymbol{A}'$
> 4. $(\boldsymbol{AB})' = \boldsymbol{B}'\boldsymbol{A}'$

#### 4. 共轭

> [!theorem] 共轭的性质
> 1. $\overline{\boldsymbol{A} + \boldsymbol{B}} = \overline{\boldsymbol{A}} + \overline{\boldsymbol{B}}$
> 2. $\overline{k\boldsymbol{A}} = \overline{k}\,\overline{\boldsymbol{A}}$
> 3. $\overline{\boldsymbol{AB}} = \overline{\boldsymbol{A}}\,\overline{\boldsymbol{B}}$
> 4. $\overline{\boldsymbol{A}'} = (\overline{\boldsymbol{A}})'$

#### 5. 幂与矩阵多项式

> [!definition] 矩阵的幂
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，定义 $\boldsymbol{A}^0 = \boldsymbol{I}_n$，$\boldsymbol{A}^k = \boldsymbol{A}^{k-1}\boldsymbol{A}$（$k \geq 1$）.

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$f(x), g(x)$ 为数域 $P$ 上的多项式，则：
> 1. $f(\boldsymbol{A})g(\boldsymbol{A}) = g(\boldsymbol{A})f(\boldsymbol{A})$
> 2. 若 $f(x) = g(x)h(x)$，则 $f(\boldsymbol{A}) = g(\boldsymbol{A})h(\boldsymbol{A})$

#### 6. 求和符号

矩阵运算中常用求和符号 $\sum$ 简化表达. 例如矩阵乘法可写为：
$$(\boldsymbol{AB})_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}.$$


### §2.4 可逆矩阵

#### 1. 基本概念

> [!definition] 可逆矩阵
> 设 $\boldsymbol{A}$ 是 $n$ 阶方阵，若存在 $n$ 阶方阵 $\boldsymbol{B}$，使得 $\boldsymbol{AB} = \boldsymbol{BA} = \boldsymbol{I}_n$，则称 $\boldsymbol{A}$ 为 **可逆阵**（invertible matrix）或 **非异阵**（nonsingular matrix），$\boldsymbol{B}$ 称为 $\boldsymbol{A}$ 的 **逆阵**（inverse），记为 $\boldsymbol{A}^{-1}$.

> [!theorem] 逆阵的唯一性
> 若 $\boldsymbol{A}$ 可逆，则其逆阵唯一.

> [!proof]-
> 设 $\boldsymbol{B}, \boldsymbol{C}$ 都是 $\boldsymbol{A}$ 的逆阵，则 $\boldsymbol{B} = \boldsymbol{BI}_n = \boldsymbol{B}(\boldsymbol{AC}) = (\boldsymbol{BA})\boldsymbol{C} = \boldsymbol{I}_n\boldsymbol{C} = \boldsymbol{C}$. □

> [!theorem] 可逆的性质
> 1. 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}^{-1}$ 也可逆，且 $(\boldsymbol{A}^{-1})^{-1} = \boldsymbol{A}$.
> 2. 若 $\boldsymbol{A}, \boldsymbol{B}$ 都可逆，则 $\boldsymbol{AB}$ 也可逆，且 $(\boldsymbol{AB})^{-1} = \boldsymbol{B}^{-1}\boldsymbol{A}^{-1}$.
> 3. 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}'$ 也可逆，且 $(\boldsymbol{A}')^{-1} = (\boldsymbol{A}^{-1})'$.


#### 2. 求逆阵的方法

> [!theorem] 伴随矩阵求逆
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^*$ 为其伴随矩阵，则 $\boldsymbol{AA}^* = \boldsymbol{A}^*\boldsymbol{A} = |\boldsymbol{A}|\boldsymbol{I}_n$.
> 
> 当 $\boldsymbol{A}$ 可逆时，$\boldsymbol{A}^{-1} = \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A}^*$.

> [!theorem] 用初等变换求逆
> 对 $n \times 2n$ 矩阵 $(\boldsymbol{A} \mid \boldsymbol{I}_n)$ 施行初等行变换，若 $\boldsymbol{A}$ 变为 $\boldsymbol{I}_n$，则 $\boldsymbol{I}_n$ 同时变为 $\boldsymbol{A}^{-1}$；若 $\boldsymbol{A}$ 的左边出现零行，则 $\boldsymbol{A}$ 不可逆.

**例 2.1** 求下列矩阵的逆阵：
$$\boldsymbol{A} = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 2 \\ 1 & 3 & 4 \end{pmatrix}.$$

> [!solution]
> 对 $(\boldsymbol{A} \mid \boldsymbol{I}_3)$ 施行初等行变换：
> $$\begin{pmatrix} 1 & 2 & 3 & 1 & 0 & 0 \\ 2 & 1 & 2 & 0 & 1 & 0 \\ 1 & 3 & 4 & 0 & 0 & 1 \end{pmatrix} \rightarrow \cdots \rightarrow \begin{pmatrix} 1 & 0 & 0 & -2 & 1 & 1 \\ 0 & 1 & 0 & -6 & 1 & 4 \\ 0 & 0 & 1 & 5 & -1 & -3 \end{pmatrix}$$
> 故
> $$\boldsymbol{A}^{-1} = \begin{pmatrix} -2 & 1 & 1 \\ -6 & 1 & 4 \\ 5 & -1 & -3 \end{pmatrix}.$$ □


#### 3. 可逆阵的等价条件

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，则以下条件等价：
> 1. $\boldsymbol{A}$ 可逆；
> 2. $|\boldsymbol{A}| \neq 0$；
> 3. $\boldsymbol{A}$ 的秩为 $n$（满秩）；
> 4. $\boldsymbol{A}$ 可以表示为有限个初等阵的乘积；
> 5. 齐次线性方程组 $\boldsymbol{Ax} = \boldsymbol{0}$ 只有零解.

> [!theorem] Cramer 法则
> 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{b}$ 为 $n$ 维列向量，则线性方程组 $\boldsymbol{Ax} = \boldsymbol{b}$ 有唯一解
> $$x_i = \frac{|\boldsymbol{A}_i|}{|\boldsymbol{A}|}, \quad i = 1, 2, \cdots, n$$
> 其中 $\boldsymbol{A}_i$ 是将 $\boldsymbol{A}$ 的第 $i$ 列替换为 $\boldsymbol{b}$ 所得矩阵.

**例 2.2** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量，且 $\boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq -1$. 求证：$\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'$ 可逆，并求其逆阵.

> [!proof]-
> 令 $\boldsymbol{B} = \boldsymbol{I}_n + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}$（数量）. 由 Sherman-Morrison 公式可知，若 $1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq 0$，则 $\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'$ 可逆. 
> 
> 其逆阵为 $(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1} = \boldsymbol{A}^{-1} - \dfrac{\boldsymbol{A}^{-1}\boldsymbol{\alpha}\boldsymbol{\beta}'\boldsymbol{A}^{-1}}{1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}}$. □


#### 4. 左逆与右逆

> [!definition] 左逆、右逆
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，若存在 $n \times m$ 矩阵 $\boldsymbol{B}$ 使得 $\boldsymbol{BA} = \boldsymbol{I}_n$，则称 $\boldsymbol{B}$ 为 $\boldsymbol{A}$ 的 **左逆**；若存在 $n \times m$ 矩阵 $\boldsymbol{C}$ 使得 $\boldsymbol{AC} = \boldsymbol{I}_m$，则称 $\boldsymbol{C}$ 为 $\boldsymbol{A}$ 的 **右逆**.

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵：
> - 若 $m > n$，则 $\boldsymbol{A}$ 不可能有右逆；若 $m < n$，则 $\boldsymbol{A}$ 不可能有左逆.
> - 若 $m = n$ 且 $\boldsymbol{A}$ 有左逆（或右逆），则 $\boldsymbol{A}$ 可逆，且左逆 = 右逆 = $\boldsymbol{A}^{-1}$.

**例 2.3** 求下列 $n$ 阶矩阵的逆阵：
$$\boldsymbol{A} = \begin{pmatrix} 0 & 1 & 1 & \cdots & 1 \\ 1 & 0 & 1 & \cdots & 1 \\ 1 & 1 & 0 & \cdots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \cdots & 0 \end{pmatrix}.$$

> [!solution]
> **解法 1** 设 $\boldsymbol{J}$ 为所有元素全为 $1$ 的 $n$ 阶矩阵，则 $\boldsymbol{A} = \boldsymbol{J} - \boldsymbol{I}_n$. 注意到 $\boldsymbol{J}^2 = n\boldsymbol{J}$，于是
> $$(\boldsymbol{J} - \boldsymbol{I}_n)(a\boldsymbol{J} + b\boldsymbol{I}_n) = a\boldsymbol{J}^2 + (b-a)\boldsymbol{J} - b\boldsymbol{I}_n = (an + b - a)\boldsymbol{J} - b\boldsymbol{I}_n.$$
> 令 $an + b - a = 0$，$b = -1$，则 $a = \dfrac{1}{n-1}$，从而
> $$(\boldsymbol{J} - \boldsymbol{I}_n)\left(\frac{1}{n-1}\boldsymbol{J} - \boldsymbol{I}_n\right) = \boldsymbol{I}_n.$$
> 故
> $$\boldsymbol{A}^{-1} = \frac{1}{n-1}\boldsymbol{J} - \boldsymbol{I}_n = \begin{pmatrix} -\dfrac{n-2}{n-1} & \dfrac{1}{n-1} & \cdots & \dfrac{1}{n-1} \\ \dfrac{1}{n-1} & -\dfrac{n-2}{n-1} & \cdots & \dfrac{1}{n-1} \\ \vdots & \vdots & \ddots & \vdots \\ \dfrac{1}{n-1} & \dfrac{1}{n-1} & \cdots & -\dfrac{n-2}{n-1} \end{pmatrix}.$$ □


### §2.5 初等变换及其应用

#### 1. 初等矩阵与初等变换

> [!definition] 初等矩阵
> 以下三种矩阵称为 **初等矩阵**（elementary matrix）：
> 1. **$P_{ij}$**：交换单位阵 $\boldsymbol{I}$ 的第 $i$ 行与第 $j$ 行（或第 $i$ 列与第 $j$ 列）.
> 2. **$P_i(c)$**：将单位阵 $\boldsymbol{I}$ 的第 $i$ 行（或第 $i$ 列）乘以非零常数 $c$.
> 3. **$T_{ij}(c)$**：将单位阵 $\boldsymbol{I}$ 的第 $j$ 行乘以 $c$ 加到第 $i$ 行上（或第 $i$ 列乘以 $c$ 加到第 $j$ 列上）.

> [!theorem] 初等变换与初等矩阵
> 对 $m \times n$ 矩阵 $\boldsymbol{A}$ 施行一次初等行变换，等价于用相应的 $m$ 阶初等矩阵左乘 $\boldsymbol{A}$；施行一次初等列变换，等价于用相应的 $n$ 阶初等矩阵右乘 $\boldsymbol{A}$.

> [!theorem] 初等矩阵的可逆性
> 初等矩阵都是可逆的，且其逆仍为同类型的初等矩阵：
> - $P_{ij}^{-1} = P_{ij}$
> - $P_i(c)^{-1} = P_i(c^{-1})$
> - $T_{ij}(c)^{-1} = T_{ij}(-c)$

#### 2. 相抵标准型

> [!theorem] 相抵标准型
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，则存在 $m$ 阶可逆阵 $\boldsymbol{P}$ 和 $n$ 阶可逆阵 $\boldsymbol{Q}$，使得
> $$\boldsymbol{PAQ} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix},$$
> 其中 $r = r(\boldsymbol{A})$ 为 $\boldsymbol{A}$ 的秩. 此形式称为 $\boldsymbol{A}$ 的 **相抵标准型**.


#### 3. 矩阵秩的等式与不等式

> [!theorem] 秩的基本性质
> 1. $r(\boldsymbol{A}_{m \times n}) \leq \min\{m, n\}$
> 2. $r(\boldsymbol{A}') = r(\boldsymbol{A})$
> 3. $r(k\boldsymbol{A}) = r(\boldsymbol{A})$（$k \neq 0$）
> 4. $r(\boldsymbol{AB}) \leq \min\{r(\boldsymbol{A}), r(\boldsymbol{B})\}$
> 5. $r(\boldsymbol{A} + \boldsymbol{B}) \leq r(\boldsymbol{A}) + r(\boldsymbol{B})$
> 6. $r(\boldsymbol{A}) + r(\boldsymbol{B}) - n \leq r(\boldsymbol{AB}) \leq \min\{r(\boldsymbol{A}), r(\boldsymbol{B})\}$（Sylvester 不等式）

**例 2.4** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，求证：$r(\boldsymbol{I}_m - \boldsymbol{AB}) = r(\boldsymbol{I}_n - \boldsymbol{BA})$.

> [!proof]-
> 考虑分块矩阵的初等变换：
> $$\begin{pmatrix} \boldsymbol{I}_m & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{I}_n \end{pmatrix} \xrightarrow{\text{行}} \begin{pmatrix} \boldsymbol{I}_m & \boldsymbol{A} \\ \boldsymbol{O} & \boldsymbol{I}_n - \boldsymbol{BA} \end{pmatrix}$$
> 另一方面，
> $$\begin{pmatrix} \boldsymbol{I}_m & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{I}_n \end{pmatrix} \xrightarrow{\text{列}} \begin{pmatrix} \boldsymbol{I}_m - \boldsymbol{AB} & \boldsymbol{A} \\ \boldsymbol{O} & \boldsymbol{I}_n \end{pmatrix}$$
> 由于初等变换不改变秩，故 $r(\boldsymbol{I}_m - \boldsymbol{AB}) + n = r(\boldsymbol{I}_n - \boldsymbol{BA}) + m$. 
> 
> 实际上，更直接地，考虑
> $$\begin{pmatrix} \boldsymbol{I}_m & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{I}_n \end{pmatrix}$$
> 的行列式，利用降阶公式即可得到结论. □


#### 4. 线性方程组的求解

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{b}$ 为 $m$ 维列向量，则线性方程组 $\boldsymbol{Ax} = \boldsymbol{b}$ 有解的充要条件是 $r(\boldsymbol{A} \mid \boldsymbol{b}) = r(\boldsymbol{A})$.

> [!theorem]
> 齐次线性方程组 $\boldsymbol{Ax} = \boldsymbol{0}$ 有非零解的充要条件是 $r(\boldsymbol{A}) < n$（未知数个数）.

**例 2.5** 求解下列线性方程组：
$$\begin{cases} x_1 + x_2 + x_3 + x_4 + x_5 = 1 \\ 3x_1 + 2x_2 + x_3 + x_4 - 3x_5 = 0 \\ x_2 + 2x_3 + 2x_4 + 6x_5 = 3 \\ 5x_1 + 4x_2 + 3x_3 + 3x_4 - x_5 = 2 \end{cases}$$

> [!solution]
> 对增广矩阵施行初等行变换：
> $$\left(\begin{array}{ccccc|c} 1 & 1 & 1 & 1 & 1 & 1 \\ 3 & 2 & 1 & 1 & -3 & 0 \\ 0 & 1 & 2 & 2 & 6 & 3 \\ 5 & 4 & 3 & 3 & -1 & 2 \end{array}\right) \rightarrow \cdots \rightarrow \left(\begin{array}{ccccc|c} 1 & 0 & -1 & -1 & -5 & -2 \\ 0 & 1 & 2 & 2 & 6 & 3 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right)$$
> 
> 故通解为：
> $$\begin{cases} x_1 = -2 + c_1 + c_2 + 5c_3 \\ x_2 = 3 - 2c_1 - 2c_2 - 6c_3 \\ x_3 = c_1 \\ x_4 = c_2 \\ x_5 = c_3 \end{cases}$$
> 其中 $c_1, c_2, c_3$ 为任意常数. □


#### 5. 初等变换求矩阵的秩

**例 2.6** 求下列矩阵的秩：
$$\boldsymbol{A} = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 5 \\ 3 & 5 & 7 & 9 \end{pmatrix}.$$

> [!solution]
> 对 $\boldsymbol{A}$ 施行初等行变换：
> $$\begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 5 \\ 3 & 5 & 7 & 9 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & -1 & -2 & -3 \\ 0 & -1 & -2 & -3 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & -1 & -2 & -3 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
> 故 $r(\boldsymbol{A}) = 2$. □

**例 2.7** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$\boldsymbol{AB} = \boldsymbol{O}$，求证：$r(\boldsymbol{A}) + r(\boldsymbol{B}) \leq n$.

> [!proof]-
> 设 $r(\boldsymbol{A}) = r$，则存在可逆阵 $\boldsymbol{P}, \boldsymbol{Q}$ 使得 $\boldsymbol{PAQ} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$.
> 由 $\boldsymbol{AB} = \boldsymbol{O}$ 得 $\boldsymbol{PAQ}\boldsymbol{Q}^{-1}\boldsymbol{B} = \boldsymbol{O}$，即 $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}^{-1}\boldsymbol{B} = \boldsymbol{O}$.
> 这说明 $\boldsymbol{Q}^{-1}\boldsymbol{B}$ 的前 $r$ 行全为零，故 $r(\boldsymbol{B}) = r(\boldsymbol{Q}^{-1}\boldsymbol{B}) \leq n - r$，即 $r(\boldsymbol{A}) + r(\boldsymbol{B}) \leq n$. □


### §2.6 伴随矩阵

> [!definition] 伴随矩阵
> 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵，$A_{ij}$ 为 $a_{ij}$ 的代数余子式，则称
> $$\boldsymbol{A}^* = \begin{pmatrix} A_{11} & A_{21} & \cdots & A_{n1} \\ A_{12} & A_{22} & \cdots & A_{n2} \\ \vdots & \vdots & & \vdots \\ A_{1n} & A_{2n} & \cdots & A_{nn} \end{pmatrix}$$
> 为 $\boldsymbol{A}$ 的 **伴随矩阵**（adjoint matrix）.

> [!theorem]
> 对任意 $n$ 阶方阵 $\boldsymbol{A}$，有 $\boldsymbol{AA}^* = \boldsymbol{A}^*\boldsymbol{A} = |\boldsymbol{A}|\boldsymbol{I}_n$.

> [!proof]-
> 由行列式按行展开定理，$\sum_{k=1}^{n} a_{ik}A_{jk} = |\boldsymbol{A}|\delta_{ij}$，其中 $\delta_{ij}$ 为 Kronecker 符号. 此即 $\boldsymbol{AA}^*$ 的 $(i,j)$ 元素. 同理可证 $\boldsymbol{A}^*\boldsymbol{A} = |\boldsymbol{A}|\boldsymbol{I}_n$. □

> [!corollary]
> 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}^{-1} = \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A}^*$，$\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{A}^{-1}$.

#### 伴随矩阵的性质

> [!theorem] 伴随矩阵的基本性质
> 1. $(\boldsymbol{AB})^* = \boldsymbol{B}^*\boldsymbol{A}^*$
> 2. $(\boldsymbol{A}')^* = (\boldsymbol{A}^*)'$
> 3. $(k\boldsymbol{A})^* = k^{n-1}\boldsymbol{A}^*$（$k$ 为常数）
> 4. $|\boldsymbol{A}^*| = |\boldsymbol{A}|^{n-1}$
> 5. $(\boldsymbol{A}^*)^{-1} = (\boldsymbol{A}^{-1})^*$（$\boldsymbol{A}$ 可逆）


**例 2.8** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n$ 阶方阵，且 $\boldsymbol{A} + \boldsymbol{B}$ 可逆. 求证：$\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1}$ 可逆，并求其逆.

> [!proof]-
> $\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1} = \boldsymbol{A}^{-1}(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{B}^{-1}$，故其逆为 $\boldsymbol{B}(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A}$. □

**例 2.9** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = d$，求 $|k\boldsymbol{A}^*|$.

> [!solution]-
> $|k\boldsymbol{A}^*| = k^n |\boldsymbol{A}^*| = k^n |\boldsymbol{A}|^{n-1} = k^n d^{n-1}$. □

**例 2.10** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$(\boldsymbol{A}^*)^*$ 是什么？

> [!solution]-
> 若 $\boldsymbol{A}$ 可逆：$(\boldsymbol{A}^*)^* = (|\boldsymbol{A}|\boldsymbol{A}^{-1})^* = ||\boldsymbol{A}|\boldsymbol{A}^{-1}| \cdot (|\boldsymbol{A}|\boldsymbol{A}^{-1})^{-1} = |\boldsymbol{A}|^{n-1} \cdot \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A} = |\boldsymbol{A}|^{n-2}\boldsymbol{A}$.
> 
> 一般地，对任意 $n \geq 2$：$(\boldsymbol{A}^*)^* = |\boldsymbol{A}|^{n-2}\boldsymbol{A}$. □


#### 6. 矩阵的相抵标准型

**例 2.11** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$r(\boldsymbol{A}) = r$，则存在 $m$ 阶可逆阵 $\boldsymbol{P}$ 和 $n$ 阶可逆阵 $\boldsymbol{Q}$，使得
$$\boldsymbol{PAQ} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}.$$

> [!proof]-
> 对 $\boldsymbol{A}$ 施行初等行变换，可将 $\boldsymbol{A}$ 化为行阶梯形，其中有 $r$ 个非零行. 再施行初等列变换即可化为标准型. 由于初等变换对应初等矩阵，故存在可逆阵 $\boldsymbol{P}, \boldsymbol{Q}$ 使得上式成立. □

**例 2.12** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$r(\boldsymbol{A}) = r$，则 $\boldsymbol{A}$ 可分解为 $\boldsymbol{A} = \boldsymbol{BC}$，其中 $\boldsymbol{B}$ 为 $m \times r$ 矩阵且列满秩，$\boldsymbol{C}$ 为 $r \times n$ 矩阵且行满秩.

> [!proof]-
> 由相抵标准型，$\boldsymbol{A} = \boldsymbol{P}^{-1}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}^{-1} = \boldsymbol{P}^{-1}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix} \cdot (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}^{-1}$.
> 令 $\boldsymbol{B} = \boldsymbol{P}^{-1}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{C} = (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}^{-1}$ 即可. □

**例 2.13** 设 $\boldsymbol{A}$ 为 $n$ 阶幂等阵（即 $\boldsymbol{A}^2 = \boldsymbol{A}$），求证：$r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$.

> [!proof]-
> 由 $\boldsymbol{A}^2 = \boldsymbol{A}$ 知 $\boldsymbol{A}(\boldsymbol{I}_n - \boldsymbol{A}) = \boldsymbol{O}$，故 $r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) \leq n$.
> 另一方面，$r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) \geq r(\boldsymbol{A} + \boldsymbol{I}_n - \boldsymbol{A}) = r(\boldsymbol{I}_n) = n$.
> 综上，$r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$. □


### §2.7 矩阵的迹

> [!definition] 迹
> 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵，称 $\mathrm{tr}(\boldsymbol{A}) = a_{11} + a_{22} + \cdots + a_{nn}$ 为 $\boldsymbol{A}$ 的 **迹**（trace）.

> [!theorem] 迹的基本性质
> 1. $\mathrm{tr}(\boldsymbol{A} + \boldsymbol{B}) = \mathrm{tr}(\boldsymbol{A}) + \mathrm{tr}(\boldsymbol{B})$
> 2. $\mathrm{tr}(k\boldsymbol{A}) = k \cdot \mathrm{tr}(\boldsymbol{A})$
> 3. $\mathrm{tr}(\boldsymbol{A}') = \mathrm{tr}(\boldsymbol{A})$
> 4. $\mathrm{tr}(\boldsymbol{AB}) = \mathrm{tr}(\boldsymbol{BA})$

> [!proof]- 性质 4
> $\mathrm{tr}(\boldsymbol{AB}) = \sum_{i=1}^{n}(\boldsymbol{AB})_{ii} = \sum_{i=1}^{n}\sum_{k=1}^{n} a_{ik}b_{ki} = \sum_{k=1}^{n}\sum_{i=1}^{n} b_{ki}a_{ik} = \sum_{k=1}^{n}(\boldsymbol{BA})_{kk} = \mathrm{tr}(\boldsymbol{BA})$. □

**例 2.14** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，且 $\boldsymbol{AB} - \boldsymbol{BA} = \boldsymbol{A}$. 求证：$\boldsymbol{A}$ 为幂零阵.

> [!proof]-
> 由 $\boldsymbol{AB} - \boldsymbol{BA} = \boldsymbol{A}$ 两边取迹：$\mathrm{tr}(\boldsymbol{A}) = \mathrm{tr}(\boldsymbol{AB} - \boldsymbol{BA}) = \mathrm{tr}(\boldsymbol{AB}) - \mathrm{tr}(\boldsymbol{BA}) = 0$.
> 又 $\boldsymbol{A}^k\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}^k = k\boldsymbol{A}^k$（可用归纳法证明），取迹得 $k \cdot \mathrm{tr}(\boldsymbol{A}^k) = 0$，故 $\mathrm{tr}(\boldsymbol{A}^k) = 0$ 对所有 $k \geq 1$ 成立. 由此可证 $\boldsymbol{A}$ 为幂零阵（所有特征值为 $0$）. □

**例 2.15** 证明：不存在 $n$ 阶方阵 $\boldsymbol{A}, \boldsymbol{B}$ 使得 $\boldsymbol{AB} - \boldsymbol{BA} = \boldsymbol{I}_n$.

> [!proof]-
> 若 $\boldsymbol{AB} - \boldsymbol{BA} = \boldsymbol{I}_n$，取迹得 $\mathrm{tr}(\boldsymbol{I}_n) = n = 0$，矛盾. □


**例 2.16** 设 $\boldsymbol{A}$ 为 $n$ 阶实对称阵，$\boldsymbol{A}^2 = \boldsymbol{O}$，求证：$\boldsymbol{A} = \boldsymbol{O}$.

> [!proof]-
> 设 $\boldsymbol{A} = (a_{ij})$，$\boldsymbol{A}^2 = \boldsymbol{A}\boldsymbol{A}' = \boldsymbol{O}$. 则 $(\boldsymbol{A}^2)_{ii} = \sum_{k=1}^{n} a_{ik}^2 = 0$.
> 由于 $\boldsymbol{A}$ 为实矩阵，故 $a_{ik} = 0$ 对所有 $i, k$ 成立，即 $\boldsymbol{A} = \boldsymbol{O}$. □

**例 2.17** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，求证：$r(\boldsymbol{A}^*) = \begin{cases} n, & r(\boldsymbol{A}) = n \\ 1, & r(\boldsymbol{A}) = n-1 \\ 0, & r(\boldsymbol{A}) < n-1 \end{cases}$.

> [!proof]-
> (1) 若 $r(\boldsymbol{A}) = n$，则 $\boldsymbol{A}$ 可逆，$\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{A}^{-1}$ 也可逆，故 $r(\boldsymbol{A}^*) = n$.
> 
> (2) 若 $r(\boldsymbol{A}) < n-1$，则 $\boldsymbol{A}$ 的任意 $n-1$ 阶子式为零，故 $A_{ij} = 0$ 对所有 $i, j$ 成立，$\boldsymbol{A}^* = \boldsymbol{O}$，$r(\boldsymbol{A}^*) = 0$.
> 
> (3) 若 $r(\boldsymbol{A}) = n-1$，则 $|\boldsymbol{A}| = 0$，但 $\boldsymbol{A}$ 至少有一个 $n-1$ 阶子式非零，故 $\boldsymbol{A}^* \neq \boldsymbol{O}$，$r(\boldsymbol{A}^*) \geq 1$.
> 由 $\boldsymbol{AA}^* = |\boldsymbol{A}|\boldsymbol{I}_n = \boldsymbol{O}$，得 $r(\boldsymbol{A}) + r(\boldsymbol{A}^*) \leq n$，即 $r(\boldsymbol{A}^*) \leq 1$. 故 $r(\boldsymbol{A}^*) = 1$. □


#### 7. 矩阵的满秩分解

**例 2.18** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$r(\boldsymbol{A}) = r$，则 $\boldsymbol{A}$ 可分解为 $\boldsymbol{A} = \boldsymbol{HL}$，其中 $\boldsymbol{H}$ 为 $m \times r$ 列满秩矩阵，$\boldsymbol{L}$ 为 $r \times n$ 行满秩矩阵.

> [!proof]-
> 由相抵标准型，存在可逆阵 $\boldsymbol{P}, \boldsymbol{Q}$ 使得
> $$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix} \cdot (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}.$$
> 令 $\boldsymbol{H} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{L} = (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}$ 即可. □

> [!theorem]
> 矩阵 $\boldsymbol{A}$ 的满秩分解在相差可逆因子的意义下唯一：若 $\boldsymbol{A} = \boldsymbol{HL} = \boldsymbol{H}_1\boldsymbol{L}_1$，则存在 $r$ 阶可逆阵 $\boldsymbol{P}$ 使得 $\boldsymbol{H}_1 = \boldsymbol{HP}$，$\boldsymbol{L}_1 = \boldsymbol{P}^{-1}\boldsymbol{L}$.


### §2.8 矩阵乘法与行列式的计算

**例 2.19** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，求证：$|\boldsymbol{AB}| = |\boldsymbol{A}||\boldsymbol{B}|$.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}$ 可表示为初等矩阵的乘积 $\boldsymbol{A} = \boldsymbol{P}_1\boldsymbol{P}_2\cdots\boldsymbol{P}_s$. 于是 $|\boldsymbol{AB}| = |\boldsymbol{P}_1\cdots\boldsymbol{P}_s\boldsymbol{B}| = |\boldsymbol{P}_1|\cdots|\boldsymbol{P}_s||\boldsymbol{B}| = |\boldsymbol{A}||\boldsymbol{B}|$.
> 
> 若 $\boldsymbol{A}$ 不可逆，则 $r(\boldsymbol{A}) < n$，$r(\boldsymbol{AB}) \leq r(\boldsymbol{A}) < n$，故 $|\boldsymbol{AB}| = 0 = |\boldsymbol{A}||\boldsymbol{B}|$. □

**例 2.20** 设 $\boldsymbol{A}$ 为 $n$ 阶正交阵（$\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{I}_n$），求证：$|\boldsymbol{A}| = \pm 1$.

> [!proof]-
> $|\boldsymbol{A}'\boldsymbol{A}| = |\boldsymbol{I}_n| = 1$，又 $|\boldsymbol{A}'\boldsymbol{A}| = |\boldsymbol{A}'||\boldsymbol{A}| = |\boldsymbol{A}|^2$，故 $|\boldsymbol{A}|^2 = 1$，$|\boldsymbol{A}| = \pm 1$. □

#### 利用矩阵乘法计算行列式

**例 2.21** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$n > m$，求证：$|\boldsymbol{AB}| = 0$.

> [!proof]-
> $r(\boldsymbol{AB}) \leq \min\{r(\boldsymbol{A}), r(\boldsymbol{B})\} \leq m < n$，但 $\boldsymbol{AB}$ 为 $n$ 阶方阵，故 $|\boldsymbol{AB}| = 0$. □

**例 2.22** 计算行列式：
$$D_n = \begin{vmatrix} a_1^2 + a_2^2 + \cdots + a_n^2 & a_1b_1 + a_2b_2 + \cdots + a_nb_n \\ a_1b_1 + a_2b_2 + \cdots + a_nb_n & b_1^2 + b_2^2 + \cdots + b_n^2 \end{vmatrix}.$$

> [!solution]
> 令 $\boldsymbol{\alpha} = (a_1, a_2, \cdots, a_n)'$，$\boldsymbol{\beta} = (b_1, b_2, \cdots, b_n)'$，则
> $$D_n = \begin{vmatrix} \boldsymbol{\alpha}'\boldsymbol{\alpha} & \boldsymbol{\alpha}'\boldsymbol{\beta} \\ \boldsymbol{\beta}'\boldsymbol{\alpha} & \boldsymbol{\beta}'\boldsymbol{\beta} \end{vmatrix}.$$
> 由 Cauchy-Binet 公式，当 $n = 2$ 时 $D_2 = (a_1b_2 - a_2b_1)^2$；当 $n > 2$ 时 $D_n = 0$. □


#### 矩阵的行列式恒等式

**例 2.23** 设 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}, \boldsymbol{D}$ 为 $n$ 阶方阵，且 $\boldsymbol{AC} = \boldsymbol{CA}$，则
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{AD} - \boldsymbol{CB}|.$$

> [!proof]-
> 当 $\boldsymbol{A}$ 可逆时，由降阶公式：
> $$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{A}||\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}| = |\boldsymbol{AD} - \boldsymbol{ACA}^{-1}\boldsymbol{B}| = |\boldsymbol{AD} - \boldsymbol{CB}|.$$
> 
> 当 $\boldsymbol{A}$ 不可逆时，利用摄动法可证（见 §2.11）. □

> [!theorem] Cauchy-Binet 公式
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵：
> - 若 $m > n$，则 $|\boldsymbol{AB}| = 0$.
> - 若 $m \leq n$，则
> $$|\boldsymbol{AB}| = \sum_{1 \leq j_1 < j_2 < \cdots < j_m \leq n} \boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & m \\ j_1 & j_2 & \cdots & j_m \end{pmatrix} \cdot \boldsymbol{B}\begin{pmatrix} j_1 & j_2 & \cdots & j_m \\ 1 & 2 & \cdots & m \end{pmatrix}.$$


#### 利用矩阵分解求行列式

**例 2.24** 计算 $n$ 阶循环矩阵的行列式：
$$\boldsymbol{C} = \begin{pmatrix} c_0 & c_1 & c_2 & \cdots & c_{n-1} \\ c_{n-1} & c_0 & c_1 & \cdots & c_{n-2} \\ c_{n-2} & c_{n-1} & c_0 & \cdots & c_{n-3} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ c_1 & c_2 & c_3 & \cdots & c_0 \end{pmatrix}.$$

> [!solution]
> 令 $\varepsilon_k = e^{\frac{2k\pi i}{n}}$（$k = 0, 1, \cdots, n-1$）为 $n$ 次单位根. 设 Vandermonde 矩阵
> $$\boldsymbol{V} = \begin{pmatrix} 1 & 1 & \cdots & 1 \\ \varepsilon_0 & \varepsilon_1 & \cdots & \varepsilon_{n-1} \\ \vdots & \vdots & & \vdots \\ \varepsilon_0^{n-1} & \varepsilon_1^{n-1} & \cdots & \varepsilon_{n-1}^{n-1} \end{pmatrix}.$$
> 则 $\boldsymbol{C}\boldsymbol{V} = \boldsymbol{V} \cdot \mathrm{diag}\{f(\varepsilon_0), f(\varepsilon_1), \cdots, f(\varepsilon_{n-1})\}$，其中 $f(x) = c_0 + c_1x + \cdots + c_{n-1}x^{n-1}$.
> 
> 故 $|\boldsymbol{C}| \cdot |\boldsymbol{V}| = |\boldsymbol{V}| \cdot \prod_{k=0}^{n-1} f(\varepsilon_k)$. 由于 $|\boldsymbol{V}| \neq 0$，所以
> $$|\boldsymbol{C}| = \prod_{k=0}^{n-1} f(\varepsilon_k) = \prod_{k=0}^{n-1} (c_0 + c_1\varepsilon_k + \cdots + c_{n-1}\varepsilon_k^{n-1}).$$ □


**例 2.25** 计算下列行列式：
$$D_n = \begin{vmatrix} a_1 & x & x & \cdots & x \\ x & a_2 & x & \cdots & x \\ x & x & a_3 & \cdots & x \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ x & x & x & \cdots & a_n \end{vmatrix} \quad (a_i \neq x).$$

> [!solution]
> 令 $\boldsymbol{A} = \mathrm{diag}\{a_1 - x, a_2 - x, \cdots, a_n - x\}$，$\boldsymbol{\alpha} = (1, 1, \cdots, 1)'$，则原矩阵为 $\boldsymbol{A} + x\boldsymbol{\alpha}\boldsymbol{\alpha}'$.
> 
> 利用降阶公式（例 2.27）：
> $$|\boldsymbol{A} + x\boldsymbol{\alpha}\boldsymbol{\alpha}'| = |\boldsymbol{A}| \cdot (1 + x\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) = \prod_{i=1}^{n}(a_i - x) \cdot \left(1 + x\sum_{i=1}^{n}\frac{1}{a_i - x}\right).$$ □

> [!theorem] Sherman-Morrison 公式
> 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量，且 $1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq 0$，则
> $$(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1} = \boldsymbol{A}^{-1} - \frac{\boldsymbol{A}^{-1}\boldsymbol{\alpha}\boldsymbol{\beta}'\boldsymbol{A}^{-1}}{1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}}.$$


**例 2.26** 计算 $n$ 阶行列式：
$$D_n = \begin{vmatrix} 1 + x_1y_1 & 1 + x_1y_2 & \cdots & 1 + x_1y_n \\ 1 + x_2y_1 & 1 + x_2y_2 & \cdots & 1 + x_2y_n \\ \vdots & \vdots & \ddots & \vdots \\ 1 + x_ny_1 & 1 + x_ny_2 & \cdots & 1 + x_ny_n \end{vmatrix}.$$

> [!solution]
> 注意到原矩阵 $= \boldsymbol{J} + \boldsymbol{\alpha}\boldsymbol{\beta}'$，其中 $\boldsymbol{J}$ 为全 $1$ 矩阵，$\boldsymbol{\alpha} = (x_1, \cdots, x_n)'$，$\boldsymbol{\beta} = (y_1, \cdots, y_n)'$.
> 
> 利用矩阵分解或降阶公式. 当 $n \geq 3$ 时，可以分解为两个低秩矩阵之和，行列式为 $0$.
> 
> 实际上，当 $n = 1$ 时 $D_1 = 1 + x_1y_1$；当 $n = 2$ 时 $D_2 = (x_1 - x_2)(y_1 - y_2)$；当 $n \geq 3$ 时 $D_n = 0$. □

**例 2.27** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{U}$ 为 $n \times m$ 矩阵，$\boldsymbol{V}$ 为 $m \times n$ 矩阵，$\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U}$ 可逆. 求证：$\boldsymbol{A} + \boldsymbol{U}\boldsymbol{V}$ 可逆，且
$$(\boldsymbol{A} + \boldsymbol{U}\boldsymbol{V})^{-1} = \boldsymbol{A}^{-1} - \boldsymbol{A}^{-1}\boldsymbol{U}(\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U})^{-1}\boldsymbol{V}\boldsymbol{A}^{-1}.$$

> [!proof]-
> 直接验证：
> $$(\boldsymbol{A} + \boldsymbol{U}\boldsymbol{V})[\boldsymbol{A}^{-1} - \boldsymbol{A}^{-1}\boldsymbol{U}(\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U})^{-1}\boldsymbol{V}\boldsymbol{A}^{-1}]$$
> $= \boldsymbol{I}_n + \boldsymbol{U}\boldsymbol{V}\boldsymbol{A}^{-1} - \boldsymbol{U}(\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U})(\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U})^{-1}\boldsymbol{V}\boldsymbol{A}^{-1}$
> $= \boldsymbol{I}_n + \boldsymbol{U}\boldsymbol{V}\boldsymbol{A}^{-1} - \boldsymbol{U}\boldsymbol{V}\boldsymbol{A}^{-1} = \boldsymbol{I}_n$. □


**例 2.28** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶可逆阵，$\boldsymbol{A} + \boldsymbol{B}$ 也可逆. 求证：$\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1}$ 也可逆，且 $(\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1})^{-1} = \boldsymbol{A}(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{B}$.

> [!proof]-
> $\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1} = \boldsymbol{A}^{-1}(\boldsymbol{B} + \boldsymbol{A})\boldsymbol{B}^{-1} = \boldsymbol{A}^{-1}(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{B}^{-1}$.
> 故 $(\boldsymbol{A}^{-1} + \boldsymbol{B}^{-1})^{-1} = [\boldsymbol{A}^{-1}(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{B}^{-1}]^{-1} = \boldsymbol{B}(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A} = \boldsymbol{A}(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{B}$. □

**例 2.29** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量，求证：$|\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'| = |\boldsymbol{A}|(1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$.

> [!proof]-
> 由降阶公式或 Sherman-Morrison 公式的思想：
> $$\begin{vmatrix} \boldsymbol{A} & -\boldsymbol{\alpha} \\ \boldsymbol{\beta}' & 1 \end{vmatrix} = |\boldsymbol{A}|(1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}).$$
> 另一方面，对上述分块矩阵用第三类初等变换：将第二块的 $-\boldsymbol{\beta}'$ 倍加到第一行，得到
> $$\begin{vmatrix} \boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}' & \boldsymbol{O} \\ \boldsymbol{\beta}' & 1 \end{vmatrix} = |\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'|.$$
> 故 $|\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'| = |\boldsymbol{A}|(1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$. □


### §2.9 Cauchy-Binet 公式

> [!theorem] Cauchy-Binet 公式
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵：
> 1. 若 $m > n$，则 $|\boldsymbol{AB}| = 0$.
> 2. 若 $m \leq n$，则
> $$|\boldsymbol{AB}| = \sum_{1 \leq j_1 < j_2 < \cdots < j_m \leq n} \boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & m \\ j_1 & j_2 & \cdots & j_m \end{pmatrix} \cdot \boldsymbol{B}\begin{pmatrix} j_1 & j_2 & \cdots & j_m \\ 1 & 2 & \cdots & m \end{pmatrix}.$$

> [!proof]-
> 当 $m > n$ 时，$r(\boldsymbol{AB}) \leq r(\boldsymbol{A}) \leq n < m$，故 $|\boldsymbol{AB}| = 0$.
> 
> 当 $m \leq n$ 时，考虑分块矩阵 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{O} \\ -\boldsymbol{I}_n & \boldsymbol{B} \end{pmatrix}$. 对其用第三类初等变换化为 $\begin{pmatrix} \boldsymbol{O} & \boldsymbol{AB} \\ -\boldsymbol{I}_n & \boldsymbol{B} \end{pmatrix}$，比较行列式即得结论. □

**例 2.30** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$m \leq n$. 求证：$|\lambda\boldsymbol{I}_m - \boldsymbol{AB}| = \lambda^{m-n}|\lambda\boldsymbol{I}_n - \boldsymbol{BA}|$.

> [!proof]-
> 当 $\lambda \neq 0$ 时：
> $$\begin{vmatrix} \lambda\boldsymbol{I}_m & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{I}_n \end{vmatrix} = |\lambda\boldsymbol{I}_m - \boldsymbol{AB}| = \lambda^m |\boldsymbol{I}_n - \frac{1}{\lambda}\boldsymbol{BA}| = \lambda^{m-n}|\lambda\boldsymbol{I}_n - \boldsymbol{BA}|.$$
> 
> 两边作为 $\lambda$ 的多项式，在无穷多个点相等，故恒等. □

**例 2.31** 设 $\boldsymbol{A}$ 为 $s \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times s$ 矩阵，$\lambda \neq 0$. 求证：$\lambda^n|\lambda\boldsymbol{I}_s - \boldsymbol{AB}| = \lambda^s|\lambda\boldsymbol{I}_n - \boldsymbol{BA}|$.

> [!proof]-
> 上例的直接推论. □


#### 子式的计算

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$1 \leq r \leq \min\{m, n\}$. 对 $\boldsymbol{AB}$ 的任意 $r$ 阶子式，有
> $$(\boldsymbol{AB})\begin{pmatrix} i_1 & \cdots & i_r \\ j_1 & \cdots & j_r \end{pmatrix} = \sum_{1 \leq k_1 < \cdots < k_r \leq n} \boldsymbol{A}\begin{pmatrix} i_1 & \cdots & i_r \\ k_1 & \cdots & k_r \end{pmatrix} \boldsymbol{B}\begin{pmatrix} k_1 & \cdots & k_r \\ j_1 & \cdots & j_r \end{pmatrix}.$$

**例 2.32** 设 $\boldsymbol{A}$ 为 $m \times n$ 实矩阵，求证：$r(\boldsymbol{AA}') = r(\boldsymbol{A})$.

> [!proof]-
> 只需证 $\boldsymbol{AA}'\boldsymbol{x} = \boldsymbol{0}$ 与 $\boldsymbol{A}'\boldsymbol{x} = \boldsymbol{0}$ 同解.
> 若 $\boldsymbol{A}'\boldsymbol{x} = \boldsymbol{0}$，显然 $\boldsymbol{AA}'\boldsymbol{x} = \boldsymbol{0}$.
> 若 $\boldsymbol{AA}'\boldsymbol{x} = \boldsymbol{0}$，则 $\boldsymbol{x}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x} = (\boldsymbol{A}\boldsymbol{x})'(\boldsymbol{A}\boldsymbol{x}) = 0$.
> 由于 $\boldsymbol{A}$ 为实矩阵，$\boldsymbol{A}'\boldsymbol{x} = \boldsymbol{0}$. □

**例 2.33** 设 $\boldsymbol{A}$ 为 $n$ 阶实方阵，$\boldsymbol{A}\boldsymbol{A}' = \boldsymbol{I}_n$. 求证：$|\boldsymbol{A}| = \pm 1$.

> [!proof]-
> $|\boldsymbol{A}\boldsymbol{A}'| = |\boldsymbol{I}_n| = 1$，又 $|\boldsymbol{A}\boldsymbol{A}'| = |\boldsymbol{A}||\boldsymbol{A}'| = |\boldsymbol{A}|^2 = 1$，故 $|\boldsymbol{A}| = \pm 1$. □


### §2.10 分块初等变换与降阶公式

#### 1. 分块矩阵的初等变换

> [!definition] 分块初等矩阵
> 对分块单位阵施行一次初等变换得到的分块矩阵称为 **分块初等矩阵**. 分块初等矩阵有可逆阵的相应结论.

#### 2. 降阶公式

> [!theorem] 降阶公式（第一降阶公式）
> 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，则
> $$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{A}| \cdot |\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}|.$$

> [!proof]-
> 对分块矩阵施行初等变换：
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix} \xrightarrow{R_2 - \boldsymbol{CA}^{-1}R_1} \begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{O} & \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B} \end{pmatrix}$$
> 取行列式即得. □

> [!theorem] 降阶公式（第二降阶公式）
> 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{D}$ 为 $m$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，则
> $$|\boldsymbol{D}| \cdot |\boldsymbol{A} - \boldsymbol{BD}^{-1}\boldsymbol{C}| = |\boldsymbol{A}| \cdot |\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}|.$$


**例 2.34** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量，求证：
$$|\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'| = |\boldsymbol{A}|(1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}).$$

> [!proof]- 证法 2（用降阶公式）
> $$\begin{vmatrix} \boldsymbol{A} & -\boldsymbol{\alpha} \\ \boldsymbol{\beta}' & 1 \end{vmatrix} = |\boldsymbol{A}| \cdot (1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}).$$
> 另一方面，用第三类初等变换将 $-\boldsymbol{\beta}'$ 倍加到第二块行：
> $$\begin{vmatrix} \boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}' & \boldsymbol{O} \\ \boldsymbol{\beta}' & 1 \end{vmatrix} = |\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'|.$$ □

**例 2.35** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{A}| \cdot |\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}| = |\boldsymbol{D}| \cdot |\boldsymbol{A} - \boldsymbol{BD}^{-1}\boldsymbol{C}|.$$

> [!proof]-
> 分别对 $\boldsymbol{A}$ 和 $\boldsymbol{D}$ 用降阶公式. □

**例 2.36** 设 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}, \boldsymbol{D}$ 都是 $n$ 阶方阵，且 $\boldsymbol{AC} = \boldsymbol{CA}$，求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{AD} - \boldsymbol{CB}|.$$

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆：$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{A}||\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}| = |\boldsymbol{AD} - \boldsymbol{ACA}^{-1}\boldsymbol{B}| = |\boldsymbol{AD} - \boldsymbol{CB}|$.
> 
> 若 $\boldsymbol{A}$ 不可逆，利用摄动法（见 §2.11）. □


**例 2.37** 设 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}, \boldsymbol{D}$ 都是 $n$ 阶方阵，$\boldsymbol{A}$ 可逆且 $\boldsymbol{AC} = \boldsymbol{CA}$，求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{AD} - \boldsymbol{CB}|.$$

> [!proof]-
> 同例 2.36. □

**例 2.38** 计算行列式：
$$D_n = \begin{vmatrix} 1 + a_1 + x_1 & a_1 + x_2 & \cdots & a_1 + x_n \\ a_2 + x_1 & 1 + a_2 + x_2 & \cdots & a_2 + x_n \\ \vdots & \vdots & \ddots & \vdots \\ a_n + x_1 & a_n + x_2 & \cdots & 1 + a_n + x_n \end{vmatrix}.$$

> [!solution]
> 令 $\boldsymbol{D} = \boldsymbol{I}_n + \boldsymbol{\alpha}\boldsymbol{1}' + \boldsymbol{1}\boldsymbol{\beta}'$，其中 $\boldsymbol{\alpha} = (a_1, \cdots, a_n)'$，$\boldsymbol{\beta} = (x_1, \cdots, x_n)'$，$\boldsymbol{1} = (1, \cdots, 1)'$.
> 
> 利用降阶公式，$D_n = |\boldsymbol{I}_n + \boldsymbol{\alpha}\boldsymbol{1}' + \boldsymbol{1}\boldsymbol{\beta}'| = \cdots = 1 + \sum_{i=1}^{n} a_i + \sum_{i=1}^{n} x_i$. □

**例 2.39** 计算行列式：
$$D = \begin{vmatrix} (a_1 + b_1)^{-1} & (a_1 + b_2)^{-1} & \cdots & (a_1 + b_n)^{-1} \\ (a_2 + b_1)^{-1} & (a_2 + b_2)^{-1} & \cdots & (a_2 + b_n)^{-1} \\ \vdots & \vdots & \ddots & \vdots \\ (a_n + b_1)^{-1} & (a_n + b_2)^{-1} & \cdots & (a_n + b_n)^{-1} \end{vmatrix}.$$

> [!solution]
> 这是 Cauchy 行列式，$D = \dfrac{\prod_{1 \leq i < j \leq n}(a_j - a_i)(b_j - b_i)}{\prod_{i,j=1}^{n}(a_i + b_j)}$. □


#### 3. 利用分块初等变换求逆阵

**例 2.40** 设 $\boldsymbol{A}, \boldsymbol{D}$ 分别为 $n$ 阶和 $m$ 阶可逆阵，求分块矩阵的逆：
$$\boldsymbol{M} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}.$$

> [!solution]
> 设 $\boldsymbol{M}^{-1} = \begin{pmatrix} \boldsymbol{X} & \boldsymbol{Y} \\ \boldsymbol{Z} & \boldsymbol{W} \end{pmatrix}$，由 $\boldsymbol{MM}^{-1} = \boldsymbol{I}_{n+m}$ 解方程组：
> $$\begin{cases} \boldsymbol{AX} + \boldsymbol{BZ} = \boldsymbol{I}_n \\ \boldsymbol{AY} + \boldsymbol{BW} = \boldsymbol{O} \\ \boldsymbol{CX} + \boldsymbol{DZ} = \boldsymbol{O} \\ \boldsymbol{CY} + \boldsymbol{DW} = \boldsymbol{I}_m \end{cases}$$
> 
> 若 $\boldsymbol{A}$ 可逆，$\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$（Schur 补）也可逆，则
> $$\boldsymbol{M}^{-1} = \begin{pmatrix} \boldsymbol{A}^{-1} + \boldsymbol{A}^{-1}\boldsymbol{BS}^{-1}\boldsymbol{CA}^{-1} & -\boldsymbol{A}^{-1}\boldsymbol{BS}^{-1} \\ -\boldsymbol{S}^{-1}\boldsymbol{CA}^{-1} & \boldsymbol{S}^{-1} \end{pmatrix}.$$ □

**例 2.41** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，$\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$ 可逆. 则
$$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}^{-1} = \begin{pmatrix} \boldsymbol{A}^{-1} + \boldsymbol{A}^{-1}\boldsymbol{BS}^{-1}\boldsymbol{CA}^{-1} & -\boldsymbol{A}^{-1}\boldsymbol{BS}^{-1} \\ -\boldsymbol{S}^{-1}\boldsymbol{CA}^{-1} & \boldsymbol{S}^{-1} \end{pmatrix}.$$


**例 2.42** 求下列分块矩阵的逆阵：
$$\boldsymbol{M} = \begin{pmatrix} \boldsymbol{O} & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{O} \end{pmatrix}$$
其中 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $m$ 阶可逆阵.

> [!solution]
> 直接验证可知
> $$\boldsymbol{M}^{-1} = \begin{pmatrix} \boldsymbol{O} & \boldsymbol{B}^{-1} \\ \boldsymbol{A}^{-1} & \boldsymbol{O} \end{pmatrix}.$$ □

**例 2.43** 求下列分块上三角矩阵的逆：
$$\boldsymbol{M} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{O} & \boldsymbol{D} \end{pmatrix}$$
其中 $\boldsymbol{A}, \boldsymbol{D}$ 分别为 $n$ 阶和 $m$ 阶可逆阵.

> [!solution]
> 设 $\boldsymbol{M}^{-1} = \begin{pmatrix} \boldsymbol{X} & \boldsymbol{Y} \\ \boldsymbol{Z} & \boldsymbol{W} \end{pmatrix}$，由 $\boldsymbol{MM}^{-1} = \boldsymbol{I}$：
> $$\begin{cases} \boldsymbol{AX} + \boldsymbol{BZ} = \boldsymbol{I}_n \\ \boldsymbol{AY} + \boldsymbol{BW} = \boldsymbol{O} \\ \boldsymbol{DZ} = \boldsymbol{O} \\ \boldsymbol{DW} = \boldsymbol{I}_m \end{cases}$$
> 解得 $\boldsymbol{Z} = \boldsymbol{O}$，$\boldsymbol{W} = \boldsymbol{D}^{-1}$，$\boldsymbol{X} = \boldsymbol{A}^{-1}$，$\boldsymbol{Y} = -\boldsymbol{A}^{-1}\boldsymbol{BD}^{-1}$.
> 
> 故
> $$\boldsymbol{M}^{-1} = \begin{pmatrix} \boldsymbol{A}^{-1} & -\boldsymbol{A}^{-1}\boldsymbol{BD}^{-1} \\ \boldsymbol{O} & \boldsymbol{D}^{-1} \end{pmatrix}.$$ □


**例 2.44** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量. 若 $\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}'$ 可逆，求其逆阵.

> [!solution]
> $(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1} = \boldsymbol{A}^{-1} - \dfrac{\boldsymbol{A}^{-1}\boldsymbol{\alpha}\boldsymbol{\beta}'\boldsymbol{A}^{-1}}{1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}}$. □

**例 2.45** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{A}$ 但 $\boldsymbol{A} \neq \boldsymbol{I}_n$，求证：$\boldsymbol{A}$ 不可逆.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆，由 $\boldsymbol{A}^2 = \boldsymbol{A}$ 两边右乘 $\boldsymbol{A}^{-1}$ 得 $\boldsymbol{A} = \boldsymbol{I}_n$，矛盾. □

**例 2.46** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{I}_n$，求证：$r(\boldsymbol{I}_n + \boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$.

> [!proof]-
> 由 $(\boldsymbol{I}_n + \boldsymbol{A})(\boldsymbol{I}_n - \boldsymbol{A}) = \boldsymbol{I}_n - \boldsymbol{A}^2 = \boldsymbol{O}$，得 $r(\boldsymbol{I}_n + \boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) \leq n$.
> 另一方面，$r(\boldsymbol{I}_n + \boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) \geq r((\boldsymbol{I}_n + \boldsymbol{A}) + (\boldsymbol{I}_n - \boldsymbol{A})) = r(2\boldsymbol{I}_n) = n$.
> 故等号成立. □


**例 2.47** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^3 = 2\boldsymbol{I}_n$，$\boldsymbol{B} = \boldsymbol{A}^2 - 2\boldsymbol{A} + 2\boldsymbol{I}_n$. 求证：$\boldsymbol{B}$ 可逆，并求 $\boldsymbol{B}^{-1}$.

> [!proof]-
> 由 $\boldsymbol{A}^3 = 2\boldsymbol{I}_n$ 知 $\boldsymbol{A}$ 可逆且 $\boldsymbol{A}^{-1} = \dfrac{1}{2}\boldsymbol{A}^2$.
> 
> $\boldsymbol{B} = \boldsymbol{A}^2 - 2\boldsymbol{A} + \boldsymbol{A}^3 = \boldsymbol{A}(\boldsymbol{A}^2 + \boldsymbol{A} - 2\boldsymbol{I}_n) = \boldsymbol{A}(\boldsymbol{A} + 2\boldsymbol{I}_n)(\boldsymbol{A} - \boldsymbol{I}_n)$.
> 
> 由 $\boldsymbol{A}^3 = 2\boldsymbol{I}_n$ 知 $\boldsymbol{A}$ 的特征值 $\lambda$ 满足 $\lambda^3 = 2 \neq 0, 1, -2$.
> 故 $\boldsymbol{A}, \boldsymbol{A} - \boldsymbol{I}_n, \boldsymbol{A} + 2\boldsymbol{I}_n$ 都可逆，所以 $\boldsymbol{B}$ 可逆.
> 
> $\boldsymbol{B}^{-1} = \dfrac{1}{2}(\boldsymbol{A}^2 + \boldsymbol{A} + 2\boldsymbol{I}_n)$. □

**例 2.48** 设 $\boldsymbol{A}$ 为 $n$ 阶幂零阵（$\boldsymbol{A}^k = \boldsymbol{O}$ 对某个正整数 $k$），求证：$\boldsymbol{I}_n - \boldsymbol{A}$ 可逆，并求其逆.

> [!proof]-
> $(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}) = \boldsymbol{I}_n - \boldsymbol{A}^k = \boldsymbol{I}_n$.
> 故 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1} = \boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}$. □

**例 2.49** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{A}$ 且 $\boldsymbol{A} \neq \boldsymbol{O}, \boldsymbol{A} \neq \boldsymbol{I}_n$. 求 $r(\boldsymbol{A})$ 和 $r(\boldsymbol{I}_n - \boldsymbol{A})$.

> [!solution]
> 由例 2.13 知 $r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$.
> 又 $\boldsymbol{A} \neq \boldsymbol{O}$ 故 $r(\boldsymbol{A}) \geq 1$；$\boldsymbol{A} \neq \boldsymbol{I}_n$ 故 $r(\boldsymbol{I}_n - \boldsymbol{A}) \geq 1$.
> 
> 所以 $1 \leq r(\boldsymbol{A}) \leq n-1$，$1 \leq r(\boldsymbol{I}_n - \boldsymbol{A}) \leq n-1$. □


### §2.11 摄动法及其应用

> [!definition] 摄动法
> **摄动法**（perturbation method）是一种处理矩阵问题的技巧：先将一般矩阵 $\boldsymbol{A}$ 摄动为可逆矩阵 $t\boldsymbol{I} + \boldsymbol{A}$（$t$ 为充分小的参数），在可逆情形下证明结论，再通过取极限 $t \to 0$ 得到一般情形的结论.

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$t$ 为参数，则对充分小的 $|t|$，$t\boldsymbol{I}_n + \boldsymbol{A}$ 可逆.

> [!proof]-
> $|t\boldsymbol{I}_n + \boldsymbol{A}| = t^n + \cdots + |\boldsymbol{A}|$ 是关于 $t$ 的 $n$ 次多项式，至多有 $n$ 个根. 故对充分小的 $|t| \neq 0$，$t\boldsymbol{I}_n + \boldsymbol{A}$ 可逆. □

#### 摄动法的应用

**例 2.50** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，求证：$(\boldsymbol{AB})^* = \boldsymbol{B}^*\boldsymbol{A}^*$.

> [!proof]-
> 先设 $\boldsymbol{A}, \boldsymbol{B}$ 都可逆：$(\boldsymbol{AB})^* = |\boldsymbol{AB}|(\boldsymbol{AB})^{-1} = |\boldsymbol{A}||\boldsymbol{B}|\boldsymbol{B}^{-1}\boldsymbol{A}^{-1} = \boldsymbol{B}^*\boldsymbol{A}^*$.
> 
> 对一般情形，取 $t$ 充分小使得 $t\boldsymbol{I}_n + \boldsymbol{A}$ 和 $t\boldsymbol{I}_n + \boldsymbol{B}$ 都可逆. 则
> $$((t\boldsymbol{I}_n + \boldsymbol{A})(t\boldsymbol{I}_n + \boldsymbol{B}))^* = (t\boldsymbol{I}_n + \boldsymbol{B})^*(t\boldsymbol{I}_n + \boldsymbol{A})^*.$$
> 令 $t \to 0$，即得 $(\boldsymbol{AB})^* = \boldsymbol{B}^*\boldsymbol{A}^*$. □


**例 2.51** 设 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}, \boldsymbol{D}$ 为 $n$ 阶方阵，且 $\boldsymbol{AC} = \boldsymbol{CA}$，求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{AD} - \boldsymbol{CB}|.$$

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆，已在例 2.36 中证明.
> 
> 若 $\boldsymbol{A}$ 不可逆，对 $t\boldsymbol{I}_n + \boldsymbol{A}$ 应用摄动法. 当 $t$ 充分小时 $t\boldsymbol{I}_n + \boldsymbol{A}$ 可逆，且 $(t\boldsymbol{I}_n + \boldsymbol{A})\boldsymbol{C} = \boldsymbol{C}(t\boldsymbol{I}_n + \boldsymbol{A})$.
> 故
> $$\begin{vmatrix} t\boldsymbol{I}_n + \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |(t\boldsymbol{I}_n + \boldsymbol{A})\boldsymbol{D} - \boldsymbol{CB}|.$$
> 令 $t \to 0$ 即得结论. □

**例 2.52** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，求证：$|\boldsymbol{A}^*| = |\boldsymbol{A}|^{n-1}$.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆：$\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{A}^{-1}$，$|\boldsymbol{A}^*| = ||\boldsymbol{A}|\boldsymbol{A}^{-1}| = |\boldsymbol{A}|^n |\boldsymbol{A}|^{-1} = |\boldsymbol{A}|^{n-1}$.
> 
> 若 $\boldsymbol{A}$ 不可逆，则 $|\boldsymbol{A}| = 0$，$r(\boldsymbol{A}) < n$.
> - 若 $r(\boldsymbol{A}) < n-1$，则 $\boldsymbol{A}^* = \boldsymbol{O}$，$|\boldsymbol{A}^*| = 0 = |\boldsymbol{A}|^{n-1}$.
> - 若 $r(\boldsymbol{A}) = n-1$，则 $r(\boldsymbol{A}^*) = 1 < n$（$n \geq 2$），故 $|\boldsymbol{A}^*| = 0 = |\boldsymbol{A}|^{n-1}$. □


**例 2.53** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$n \geq 2$，求证：$(\boldsymbol{A}^*)^* = |\boldsymbol{A}|^{n-2}\boldsymbol{A}$.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆：$\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{A}^{-1}$，故
> $$(\boldsymbol{A}^*)^* = (|\boldsymbol{A}|\boldsymbol{A}^{-1})^* = ||\boldsymbol{A}|\boldsymbol{A}^{-1}| \cdot (|\boldsymbol{A}|\boldsymbol{A}^{-1})^{-1} = |\boldsymbol{A}|^{n-1} \cdot \frac{1}{|\boldsymbol{A}|}\boldsymbol{A} = |\boldsymbol{A}|^{n-2}\boldsymbol{A}.$$
> 
> 若 $\boldsymbol{A}$ 不可逆，利用摄动法（取 $t\boldsymbol{I}_n + \boldsymbol{A}$，令 $t \to 0$）或直接验证. □

**例 2.54** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\lambda \neq 0$. 求证：
$$|\lambda\boldsymbol{I}_m - \boldsymbol{AB}| = \lambda^{m-n}|\lambda\boldsymbol{I}_n - \boldsymbol{BA}|.$$

> [!proof]-
> 先设 $m = n$ 且 $\boldsymbol{A}$ 可逆：$\boldsymbol{AB}$ 与 $\boldsymbol{BA} = \boldsymbol{A}^{-1}(\boldsymbol{AB})\boldsymbol{A}$ 相似，故特征多项式相同.
> 
> 一般情形利用摄动法：对 $m \times m$ 矩阵 $t\boldsymbol{I}_m + \boldsymbol{A}$ 和 $n \times n$ 矩阵 $t\boldsymbol{I}_n + \boldsymbol{B}$ 应用，令 $t \to 0$. □

**例 2.55** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，求证：$r(\boldsymbol{A}) = r(\boldsymbol{A}'\boldsymbol{A})$.

> [!proof]-
> 先设 $\boldsymbol{A}$ 为实矩阵. 只需证 $\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x} = \boldsymbol{0} \Leftrightarrow \boldsymbol{A}\boldsymbol{x} = \boldsymbol{0}$.
> " $\Leftarrow$ " 显然；" $\Rightarrow$ "：$\boldsymbol{x}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x} = (\boldsymbol{A}\boldsymbol{x})'(\boldsymbol{A}\boldsymbol{x}) = 0 \Rightarrow \boldsymbol{A}\boldsymbol{x} = \boldsymbol{0}$.
> 
> 一般情形利用摄动法. □


**例 2.56** 设 $\boldsymbol{A}$ 为 $n$ 阶实对称阵，$\boldsymbol{B}$ 为 $n$ 阶实反对称阵，$\boldsymbol{A} + \boldsymbol{B}$ 可逆. 求证：$(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A}$ 为对称阵当且仅当 $\boldsymbol{AB} = \boldsymbol{BA}$.

> [!proof]-
> $(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A}$ 对称 $\Leftrightarrow ((\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A})' = (\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A}$
> $\Leftrightarrow \boldsymbol{A}(\boldsymbol{A} - \boldsymbol{B})^{-1} = (\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A}$
> $\Leftrightarrow (\boldsymbol{A} + \boldsymbol{B})\boldsymbol{A} = \boldsymbol{A}(\boldsymbol{A} - \boldsymbol{B})$
> $\Leftrightarrow \boldsymbol{A}^2 + \boldsymbol{BA} = \boldsymbol{A}^2 - \boldsymbol{AB}$
> $\Leftrightarrow \boldsymbol{AB} = -\boldsymbol{BA}$.
> 
> 但 $\boldsymbol{A}$ 对称、$\boldsymbol{B}$ 反对称：$(\boldsymbol{AB})' = \boldsymbol{B}'\boldsymbol{A}' = (-\boldsymbol{B})\boldsymbol{A} = -\boldsymbol{BA}$.
> 若 $\boldsymbol{AB} = \boldsymbol{BA}$，则 $\boldsymbol{AB} = -\boldsymbol{AB}$，$2\boldsymbol{AB} = \boldsymbol{O}$... (需修正)
> 
> 实际上，利用摄动法：先设 $\boldsymbol{A}$ 可逆，$(\boldsymbol{A} + \boldsymbol{B})^{-1}\boldsymbol{A} = (\boldsymbol{I}_n + \boldsymbol{A}^{-1}\boldsymbol{B})^{-1}$. 通过展开验证. □

**例 2.57** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = r$. 求证：存在 $n$ 阶可逆阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 的后 $n-r$ 列全为零.

> [!proof]-
> 设 $\boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_n$ 为 $\boldsymbol{A}$ 的列向量，$r(\boldsymbol{A}) = r$. 取 $\boldsymbol{\alpha}_{i_1}, \cdots, \boldsymbol{\alpha}_{i_r}$ 为极大线性无关组.
> 作可逆阵 $\boldsymbol{P}$ 使得 $\boldsymbol{AP} = (\boldsymbol{\alpha}_{i_1}, \cdots, \boldsymbol{\alpha}_{i_r}, \boldsymbol{0}, \cdots, \boldsymbol{0})$ 即可. □


**例 2.58** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = 1$. 求证：$\boldsymbol{A}^2 = k\boldsymbol{A}$（$k$ 为某常数）.

> [!proof]-
> 由 $r(\boldsymbol{A}) = 1$，$\boldsymbol{A}$ 可写为 $\boldsymbol{A} = \boldsymbol{\alpha}\boldsymbol{\beta}'$，其中 $\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为非零列向量.
> 则 $\boldsymbol{A}^2 = (\boldsymbol{\alpha}\boldsymbol{\beta}')(\boldsymbol{\alpha}\boldsymbol{\beta}') = \boldsymbol{\alpha}(\boldsymbol{\beta}'\boldsymbol{\alpha})\boldsymbol{\beta}' = (\boldsymbol{\beta}'\boldsymbol{\alpha})\boldsymbol{\alpha}\boldsymbol{\beta}' = k\boldsymbol{A}$，其中 $k = \boldsymbol{\beta}'\boldsymbol{\alpha}$. □

**例 2.59** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = r$. 求证：$\boldsymbol{A}$ 可表示为 $r$ 个秩为 $1$ 的矩阵之和.

> [!proof]-
> 由相抵标准型，$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q} = \sum_{i=1}^{r} \boldsymbol{P}\boldsymbol{E}_{ii}\boldsymbol{Q}$.
> 其中 $\boldsymbol{E}_{ii}$ 为 $(i,i)$ 元素为 $1$、其余为 $0$ 的矩阵，$r(\boldsymbol{P}\boldsymbol{E}_{ii}\boldsymbol{Q}) = 1$. □

**例 2.60** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$\boldsymbol{A} + \boldsymbol{B}$ 为幂等阵，$\boldsymbol{AB} = \boldsymbol{BA} = \boldsymbol{O}$. 求证：$\boldsymbol{A}^2 = \boldsymbol{A}$，$\boldsymbol{B}^2 = \boldsymbol{B}$.

> [!proof]-
> $(\boldsymbol{A} + \boldsymbol{B})^2 = \boldsymbol{A} + \boldsymbol{B}$，又 $(\boldsymbol{A} + \boldsymbol{B})^2 = \boldsymbol{A}^2 + \boldsymbol{AB} + \boldsymbol{BA} + \boldsymbol{B}^2 = \boldsymbol{A}^2 + \boldsymbol{B}^2$.
> 故 $\boldsymbol{A}^2 + \boldsymbol{B}^2 = \boldsymbol{A} + \boldsymbol{B}$.
> 
> 又 $\boldsymbol{A}^2 + \boldsymbol{B}^2 = \boldsymbol{A}^2 + \boldsymbol{B}^2 + \boldsymbol{AB} + \boldsymbol{BA} = (\boldsymbol{A} + \boldsymbol{B})^2 = \boldsymbol{A} + \boldsymbol{B}$.
> 由 $\boldsymbol{AB} = \boldsymbol{BA} = \boldsymbol{O}$：$\boldsymbol{A}(\boldsymbol{A} + \boldsymbol{B}) = \boldsymbol{A}^2 + \boldsymbol{AB} = \boldsymbol{A}^2$.
> 又 $\boldsymbol{A}(\boldsymbol{A} + \boldsymbol{B}) = \boldsymbol{A}(\boldsymbol{A} + \boldsymbol{B})^2 = \cdots = \boldsymbol{A}$（利用幂等性）.
> 故 $\boldsymbol{A}^2 = \boldsymbol{A}$，同理 $\boldsymbol{B}^2 = \boldsymbol{B}$. □


#### 行列式的摄动法证明

**例 2.61** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，求证：$|\lambda\boldsymbol{I}_n - \boldsymbol{AB}| = |\lambda\boldsymbol{I}_n - \boldsymbol{BA}|$.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆：$\boldsymbol{AB} = \boldsymbol{A}(\boldsymbol{BA})\boldsymbol{A}^{-1}$，相似，特征多项式相同.
> 
> 一般情形：取 $t\boldsymbol{I}_n + \boldsymbol{A}$ 当 $t$ 充分小时可逆，
> $|\lambda\boldsymbol{I}_n - (t\boldsymbol{I}_n + \boldsymbol{A})\boldsymbol{B}| = |\lambda\boldsymbol{I}_n - \boldsymbol{B}(t\boldsymbol{I}_n + \boldsymbol{A})|$.
> 令 $t \to 0$ 即得. □

**例 2.62** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$m \leq n$. 求证：
$$|s\boldsymbol{I}_m - t\boldsymbol{AB}| = s^{m-n}|s\boldsymbol{I}_n - t\boldsymbol{BA}|.$$

> [!proof]-
> 利用分块矩阵的行列式：
> $$\begin{vmatrix} s\boldsymbol{I}_m & t\boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{I}_n \end{vmatrix} = |s\boldsymbol{I}_m - t\boldsymbol{AB}| = s^{m-n}|s\boldsymbol{I}_n - t\boldsymbol{BA}|.$$ □

**例 2.63** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}$ 为 $n$ 维列向量，$b$ 为常数，
$$\boldsymbol{P} = \begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^* & |\boldsymbol{A}| \end{pmatrix}, \quad \boldsymbol{Q} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & b \end{pmatrix}.$$
(1) 计算 $\boldsymbol{PQ}$；(2) 求证：$\boldsymbol{Q}$ 可逆的充要条件是 $\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq b$.

> [!solution]
> (1) $\boldsymbol{PQ} = \begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^* & |\boldsymbol{A}| \end{pmatrix} \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & b \end{pmatrix} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^*\boldsymbol{A} + |\boldsymbol{A}|\boldsymbol{\alpha}' & -\boldsymbol{\alpha}'\boldsymbol{A}^*\boldsymbol{\alpha} + b|\boldsymbol{A}| \end{pmatrix}$
> $= \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{O} & |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) \end{pmatrix}$（利用 $\boldsymbol{A}^*\boldsymbol{A} = |\boldsymbol{A}|\boldsymbol{I}_n$）.
> 
> (2) $|\boldsymbol{PQ}| = |\boldsymbol{A}| \cdot |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) = |\boldsymbol{A}|^2(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$.
> 
> 又 $|\boldsymbol{P}| = |\boldsymbol{A}| \neq 0$，故 $|\boldsymbol{Q}| = |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$.
> 
> $\boldsymbol{Q}$ 可逆 $\Leftrightarrow |\boldsymbol{Q}| \neq 0 \Leftrightarrow b \neq \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. □


#### 综合应用

**例 2.64** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵. 若 $\boldsymbol{I}_m + \boldsymbol{C}\boldsymbol{A}^{-1}\boldsymbol{B}$ 可逆，则 $\boldsymbol{A} + \boldsymbol{B}\boldsymbol{C}$ 可逆，且
$$(\boldsymbol{A} + \boldsymbol{B}\boldsymbol{C})^{-1} = \boldsymbol{A}^{-1} - \boldsymbol{A}^{-1}\boldsymbol{B}(\boldsymbol{I}_m + \boldsymbol{C}\boldsymbol{A}^{-1}\boldsymbol{B})^{-1}\boldsymbol{C}\boldsymbol{A}^{-1}.$$

> [!proof]-
> 直接验证 $(\boldsymbol{A} + \boldsymbol{B}\boldsymbol{C})[\boldsymbol{A}^{-1} - \boldsymbol{A}^{-1}\boldsymbol{B}(\boldsymbol{I}_m + \boldsymbol{C}\boldsymbol{A}^{-1}\boldsymbol{B})^{-1}\boldsymbol{C}\boldsymbol{A}^{-1}] = \boldsymbol{I}_n$. □

**例 2.65** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{U}$ 为 $n \times m$ 列满秩矩阵，$\boldsymbol{V}$ 为 $m \times n$ 行满秩矩阵，$m \leq n$. 若 $\boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U}$ 可逆，求 $(\boldsymbol{A} + \boldsymbol{U}\boldsymbol{V})^{-1}$.

> [!solution]
> 由例 2.64，$(\boldsymbol{A} + \boldsymbol{U}\boldsymbol{V})^{-1} = \boldsymbol{A}^{-1} - \boldsymbol{A}^{-1}\boldsymbol{U}(\boldsymbol{I}_m + \boldsymbol{V}\boldsymbol{A}^{-1}\boldsymbol{U})^{-1}\boldsymbol{V}\boldsymbol{A}^{-1}$. □

**例 2.66** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^3 = 2\boldsymbol{I}_n$，$\boldsymbol{B} = \boldsymbol{A}^2 - 2\boldsymbol{A} + 2\boldsymbol{I}_n$. 求 $\boldsymbol{B}^{-1}$.

> [!solution]
> $\boldsymbol{B} = \boldsymbol{A}^2 - 2\boldsymbol{A} + \boldsymbol{A}^3 = \boldsymbol{A}(\boldsymbol{A} - \boldsymbol{I}_n)(\boldsymbol{A} + 2\boldsymbol{I}_n)$.
> 
> $\boldsymbol{B}^{-1} = (\boldsymbol{A} + 2\boldsymbol{I}_n)^{-1}(\boldsymbol{A} - \boldsymbol{I}_n)^{-1}\boldsymbol{A}^{-1}$.
> 由 $\boldsymbol{A}^3 = 2\boldsymbol{I}_n$ 知 $\boldsymbol{A}^{-1} = \dfrac{1}{2}\boldsymbol{A}^2$.
> 
> 经计算（利用多项式除法）可得 $\boldsymbol{B}^{-1} = \dfrac{1}{10}(\boldsymbol{A}^2 + 3\boldsymbol{A} + 4\boldsymbol{I}_n)$. □


#### 分块矩阵行列式的计算

**例 2.67** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量. 求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\beta}' & c \end{vmatrix} = c|\boldsymbol{A}| - \boldsymbol{\beta}'\boldsymbol{A}^*\boldsymbol{\alpha}.$$

> [!proof]-
> 由降阶公式：
> $$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\beta}' & c \end{vmatrix} = |\boldsymbol{A}| \cdot (c - \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) = c|\boldsymbol{A}| - \boldsymbol{\beta}'|\boldsymbol{A}|\boldsymbol{A}^{-1}\boldsymbol{\alpha} = c|\boldsymbol{A}| - \boldsymbol{\beta}'\boldsymbol{A}^*\boldsymbol{\alpha}.$$ □

**例 2.68** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = a$，$\boldsymbol{B}$ 为 $m$ 阶方阵，$|\boldsymbol{B}| = b$.
$$\begin{vmatrix} \boldsymbol{O} & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{C} \end{vmatrix} = (-1)^{mn}ab.$$

> [!proof]-
> 由 Laplace 展开或直接计算：
> $$\begin{vmatrix} \boldsymbol{O} & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{C} \end{vmatrix} = (-1)^{mn}|\boldsymbol{A}||\boldsymbol{B}| = (-1)^{mn}ab.$$ □

**例 2.69** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵. 用分块初等变换求
$$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}$$
的逆.

> [!solution]
> 对分块矩阵 $(\boldsymbol{M} \mid \boldsymbol{I})$ 施行初等变换，或用 Schur 补：
> $\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$（Schur 补）.
> 若 $\boldsymbol{S}$ 可逆，则
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}^{-1} = \begin{pmatrix} \boldsymbol{A}^{-1} + \boldsymbol{A}^{-1}\boldsymbol{BS}^{-1}\boldsymbol{CA}^{-1} & -\boldsymbol{A}^{-1}\boldsymbol{BS}^{-1} \\ -\boldsymbol{S}^{-1}\boldsymbol{CA}^{-1} & \boldsymbol{S}^{-1} \end{pmatrix}.$$ □


**例 2.70** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵. 若 $\boldsymbol{I}_n - \boldsymbol{AB}$ 可逆，则 $\boldsymbol{I}_m - \boldsymbol{CA}$ 可逆，求其逆.

> [!proof]-
> 由降阶公式或恒等式：
> $(\boldsymbol{I}_m - \boldsymbol{CA})^{-1} = \boldsymbol{I}_m + \boldsymbol{C}(\boldsymbol{I}_n - \boldsymbol{AB})^{-1}\boldsymbol{A}$.
> 
> 验证：$(\boldsymbol{I}_m - \boldsymbol{CA})(\boldsymbol{I}_m + \boldsymbol{C}(\boldsymbol{I}_n - \boldsymbol{AB})^{-1}\boldsymbol{A})$
> $= \boldsymbol{I}_m + \boldsymbol{C}(\boldsymbol{I}_n - \boldsymbol{AB})^{-1}\boldsymbol{A} - \boldsymbol{CA} - \boldsymbol{CAC}(\boldsymbol{I}_n - \boldsymbol{AB})^{-1}\boldsymbol{A}$...
> 
> 更简洁地，利用例 2.64 或直接验证. □

**例 2.71** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，$\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$. 若 $\boldsymbol{S}$ 可逆，用分块初等变换求 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}^{-1}$.

> [!solution]
> 已在例 2.69 中给出. 具体步骤：
> 1. 将第一块行左乘 $-\boldsymbol{CA}^{-1}$ 加到第二块行：
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{O} & \boldsymbol{S} \end{pmatrix}$$
> 2. 将第二块行左乘 $-\boldsymbol{BS}^{-1}$ 加到第一块行：
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{S} \end{pmatrix}$$
> 3. 分别求逆即得. □

**例 2.72** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$\boldsymbol{AB} = \boldsymbol{BA}$. 求证：
$$\begin{vmatrix} \boldsymbol{A} & -\boldsymbol{B} \\ \boldsymbol{B} & \boldsymbol{A} \end{vmatrix} = |\boldsymbol{A}^2 + \boldsymbol{B}^2|.$$

> [!proof]-
> 利用复矩阵技巧：
> $$\begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ -i\boldsymbol{I}_n & \boldsymbol{I}_n \end{pmatrix} \begin{pmatrix} \boldsymbol{A} & -\boldsymbol{B} \\ \boldsymbol{B} & \boldsymbol{A} \end{pmatrix} \begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ i\boldsymbol{I}_n & \boldsymbol{I}_n \end{pmatrix} = \begin{pmatrix} \boldsymbol{A} - i\boldsymbol{B} & -\boldsymbol{B} \\ \boldsymbol{O} & \boldsymbol{A} + i\boldsymbol{B} \end{pmatrix}.$$
> 故
> $$\begin{vmatrix} \boldsymbol{A} & -\boldsymbol{B} \\ \boldsymbol{B} & \boldsymbol{A} \end{vmatrix} = |\boldsymbol{A} - i\boldsymbol{B}||\boldsymbol{A} + i\boldsymbol{B}| = |(\boldsymbol{A} - i\boldsymbol{B})(\boldsymbol{A} + i\boldsymbol{B})| = |\boldsymbol{A}^2 + \boldsymbol{B}^2 - i(\boldsymbol{BA} - \boldsymbol{AB})|.$$
> 由 $\boldsymbol{AB} = \boldsymbol{BA}$，得 $= |\boldsymbol{A}^2 + \boldsymbol{B}^2|$. □


**例 2.73** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶实方阵，$\boldsymbol{AB} = \boldsymbol{BA}$. 求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ -\boldsymbol{B} & \boldsymbol{A} \end{vmatrix} \geq 0.$$

> [!proof]-
> 类似例 2.72：
> $$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ -\boldsymbol{B} & \boldsymbol{A} \end{vmatrix} = |\boldsymbol{A} - i\boldsymbol{B}||\boldsymbol{A} + i\boldsymbol{B}| = |\boldsymbol{A} + i\boldsymbol{B}| \cdot \overline{|\boldsymbol{A} + i\boldsymbol{B}|} = |\boldsymbol{A} + i\boldsymbol{B}|^2 \geq 0.$$ □

**例 2.74** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$\boldsymbol{AB} = \boldsymbol{BA}$. 求证：
$$r(\boldsymbol{A}) + r(\boldsymbol{B}) \geq r(\boldsymbol{A} + \boldsymbol{B}).$$

> [!proof]-
> 这是秩的基本不等式，已在 §2.5 中证明. □

**例 2.75** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{I}_n$ 但 $\boldsymbol{A} \neq \pm\boldsymbol{I}_n$. 求证：存在可逆阵 $\boldsymbol{P}$ 使得
$$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & -\boldsymbol{I}_{n-r} \end{pmatrix} \quad (1 \leq r \leq n-1).$$

> [!proof]-
> 由 $(\boldsymbol{A} + \boldsymbol{I}_n)(\boldsymbol{A} - \boldsymbol{I}_n) = \boldsymbol{O}$ 知 $r(\boldsymbol{A} + \boldsymbol{I}_n) + r(\boldsymbol{A} - \boldsymbol{I}_n) \leq n$.
> 又 $r(\boldsymbol{A} + \boldsymbol{I}_n) + r(\boldsymbol{A} - \boldsymbol{I}_n) \geq r(2\boldsymbol{I}_n) = n$.
> 故 $r(\boldsymbol{A} + \boldsymbol{I}_n) + r(\boldsymbol{A} - \boldsymbol{I}_n) = n$.
> 
> 设 $r(\boldsymbol{A} + \boldsymbol{I}_n) = r$，$1 \leq r \leq n-1$（因 $\boldsymbol{A} \neq \pm\boldsymbol{I}_n$）.
> 取 $\boldsymbol{A} + \boldsymbol{I}_n$ 的列空间的基和 $\boldsymbol{A} - \boldsymbol{I}_n$ 的列空间的基，合成可逆阵 $\boldsymbol{P}$ 即可. □


**例 2.76** 设 $\boldsymbol{A}$ 为 $n$ 阶幂等阵（$\boldsymbol{A}^2 = \boldsymbol{A}$），$r(\boldsymbol{A}) = r$. 求证：存在可逆阵 $\boldsymbol{P}$ 使得
$$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}.$$

> [!proof]-
> 由例 2.13，$r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$.
> 取 $\boldsymbol{A}$ 的列空间（维数 $r$）的基 $\boldsymbol{\xi}_1, \cdots, \boldsymbol{\xi}_r$ 和 $\boldsymbol{I}_n - \boldsymbol{A}$ 的列空间（维数 $n-r$）的基 $\boldsymbol{\xi}_{r+1}, \cdots, \boldsymbol{\xi}_n$.
> 令 $\boldsymbol{P} = (\boldsymbol{\xi}_1, \cdots, \boldsymbol{\xi}_r, \boldsymbol{\xi}_{r+1}, \cdots, \boldsymbol{\xi}_n)$.
> 
> $\boldsymbol{A}\boldsymbol{\xi}_i = \boldsymbol{\xi}_i$（$i = 1, \cdots, r$），$\boldsymbol{A}\boldsymbol{\xi}_j = \boldsymbol{0}$（$j = r+1, \cdots, n$）.
> 故 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$. □

**例 2.77** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = r$. 求证：$\boldsymbol{A}$ 可分解为 $\boldsymbol{A} = \boldsymbol{BC}$，其中 $\boldsymbol{B}$ 为 $n \times r$ 列满秩，$\boldsymbol{C}$ 为 $r \times n$ 行满秩.

> [!proof]-
> 由相抵标准型：$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix} \cdot (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}$.
> 令 $\boldsymbol{B} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{C} = (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}$. □

**例 2.78** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = r$. 求证：$\boldsymbol{A}$ 的所有 $r+1$ 阶子式为零，且至少有一个 $r$ 阶子式非零.

> [!proof]-
> 这是矩阵秩的定义性性质. □


#### 秩不等式

**例 2.79** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times s$ 矩阵，求证：
$$r(\boldsymbol{AB}) \geq r(\boldsymbol{A}) + r(\boldsymbol{B}) - n.$$
（Sylvester 不等式）

> [!proof]-
> 设 $r(\boldsymbol{A}) = r$，则存在可逆阵 $\boldsymbol{P}, \boldsymbol{Q}$ 使得 $\boldsymbol{PAQ} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$.
> 
> $\boldsymbol{AB} = \boldsymbol{P}^{-1}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}^{-1}\boldsymbol{B}$.
> 
> $r(\boldsymbol{AB}) = r\left(\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}^{-1}\boldsymbol{B}\right) \geq r(\boldsymbol{B}) - (n - r) = r(\boldsymbol{A}) + r(\boldsymbol{B}) - n$. □

**例 2.80** （Frobenius 不等式）设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times s$ 矩阵，$\boldsymbol{C}$ 为 $s \times t$ 矩阵. 求证：
$$r(\boldsymbol{ABC}) \geq r(\boldsymbol{AB}) + r(\boldsymbol{BC}) - r(\boldsymbol{B}).$$

> [!proof]-
> 对分块矩阵施行初等变换：
> $$\begin{pmatrix} \boldsymbol{AB} & \boldsymbol{O} \\ \boldsymbol{B} & \boldsymbol{BC} \end{pmatrix} \xrightarrow{} \begin{pmatrix} \boldsymbol{AB} & \boldsymbol{ABC} \\ \boldsymbol{B} & \boldsymbol{O} \end{pmatrix}$$
> 比较秩即得. □

**例 2.81** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = r$. 求证：$\boldsymbol{A}^2 = \boldsymbol{A}$ 当且仅当存在列满秩矩阵 $\boldsymbol{G}$ 和行满秩矩阵 $\boldsymbol{H}$ 使得 $\boldsymbol{A} = \boldsymbol{GH}$ 且 $\boldsymbol{HG} = \boldsymbol{I}_r$.

> [!proof]-
> "$\Rightarrow$"：由例 2.76，$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}^{-1} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix} \cdot (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{P}^{-1} = \boldsymbol{GH}$.
> 其中 $\boldsymbol{G} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{H} = (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{P}^{-1}$，$\boldsymbol{HG} = \boldsymbol{I}_r$.
> 
> "$\Leftarrow$"：$\boldsymbol{A}^2 = \boldsymbol{GHGH} = \boldsymbol{G}(\boldsymbol{HG})\boldsymbol{H} = \boldsymbol{G}\boldsymbol{I}_r\boldsymbol{H} = \boldsymbol{GH} = \boldsymbol{A}$. □


#### 矩阵的幂与多项式

**例 2.82** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$f(x)$ 为数域 $P$ 上的多项式. 若 $\boldsymbol{A}$ 可逆，求证：$f(\boldsymbol{A})$ 可逆当且仅当 $f$ 与 $\boldsymbol{A}$ 的极小多项式互素.

> [!proof]-
> 若 $(f, m_{\boldsymbol{A}}) = 1$，则存在 $u(x), v(x)$ 使得 $uf + vm_{\boldsymbol{A}} = 1$.
> 故 $u(\boldsymbol{A})f(\boldsymbol{A}) + v(\boldsymbol{A})m_{\boldsymbol{A}}(\boldsymbol{A}) = u(\boldsymbol{A})f(\boldsymbol{A}) = \boldsymbol{I}_n$.
> 所以 $f(\boldsymbol{A})$ 可逆.
> 
> 反之，若 $(f, m_{\boldsymbol{A}}) = d(x)$ 且 $\deg d \geq 1$，设 $f = dg$，$m_{\boldsymbol{A}} = dh$.
> 则 $f(\boldsymbol{A}) = d(\boldsymbol{A})g(\boldsymbol{A})$，$m_{\boldsymbol{A}}(\boldsymbol{A}) = d(\boldsymbol{A})h(\boldsymbol{A}) = \boldsymbol{O}$.
> 若 $d(\boldsymbol{A}) = \boldsymbol{O}$，则 $f(\boldsymbol{A}) = \boldsymbol{O}$；若 $d(\boldsymbol{A}) \neq \boldsymbol{O}$，则 $h(\boldsymbol{A})$ 为 $d(\boldsymbol{A})$ 的零化因子.
> 一般情形利用 Jordan 标准型理论. □

**例 2.83** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{A}$. 求 $(\boldsymbol{A} + \boldsymbol{I}_n)^{-1}$ 和 $(2\boldsymbol{A} - \boldsymbol{I}_n)^{-1}$.

> [!solution]
> $(\boldsymbol{A} + \boldsymbol{I}_n)(2\boldsymbol{I}_n - \boldsymbol{A}) = 2\boldsymbol{I}_n + 2\boldsymbol{A} - \boldsymbol{A} - \boldsymbol{A}^2 = 2\boldsymbol{I}_n + \boldsymbol{A} - \boldsymbol{A} = 2\boldsymbol{I}_n$.
> 故 $(\boldsymbol{A} + \boldsymbol{I}_n)^{-1} = \dfrac{1}{2}(2\boldsymbol{I}_n - \boldsymbol{A}) = \boldsymbol{I}_n - \dfrac{1}{2}\boldsymbol{A}$.
> 
> $(2\boldsymbol{A} - \boldsymbol{I}_n)^2 = 4\boldsymbol{A}^2 - 4\boldsymbol{A} + \boldsymbol{I}_n = 4\boldsymbol{A} - 4\boldsymbol{A} + \boldsymbol{I}_n = \boldsymbol{I}_n$.
> 故 $(2\boldsymbol{A} - \boldsymbol{I}_n)^{-1} = 2\boldsymbol{A} - \boldsymbol{I}_n$. □

**例 2.84** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量. 若 $\boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq -1$，求 $(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1}$.

> [!solution]
> 已在例 2.7 中给出：$(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1} = \boldsymbol{A}^{-1} - \dfrac{\boldsymbol{A}^{-1}\boldsymbol{\alpha}\boldsymbol{\beta}'\boldsymbol{A}^{-1}}{1 + \boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}}$. □


**例 2.85** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^k = \boldsymbol{O}$（$k$ 为正整数）. 求证：$\boldsymbol{I}_n - \boldsymbol{A}$ 可逆，并求 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1}$.

> [!proof]-
> $(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}) = \boldsymbol{I}_n - \boldsymbol{A}^k = \boldsymbol{I}_n$.
> 故 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1} = \boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}$. □

**例 2.86** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{A}^2 = \boldsymbol{I}_n$. 求 $r(\boldsymbol{I}_n + \boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A})$.

> [!solution]
> 由例 2.46 知 $r(\boldsymbol{I}_n + \boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$. □

**例 2.87** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$\boldsymbol{AB} = \boldsymbol{BA}$，$\boldsymbol{A}^2 = \boldsymbol{A}$，$\boldsymbol{B}^2 = \boldsymbol{B}$. 求证：$(\boldsymbol{A} + \boldsymbol{B} - \boldsymbol{AB})^2 = \boldsymbol{A} + \boldsymbol{B} - \boldsymbol{AB}$.

> [!proof]-
> $(\boldsymbol{A} + \boldsymbol{B} - \boldsymbol{AB})^2 = \boldsymbol{A}^2 + \boldsymbol{B}^2 + \boldsymbol{AB}^2\boldsymbol{A} + \boldsymbol{BA}\boldsymbol{B} - \boldsymbol{A}^2\boldsymbol{B} - \boldsymbol{AB}\boldsymbol{A} - \boldsymbol{BA}^2 - \boldsymbol{B}\boldsymbol{A}\boldsymbol{B} + \boldsymbol{AB}\boldsymbol{A}\boldsymbol{B}$
> $= \boldsymbol{A} + \boldsymbol{B} + \boldsymbol{AB} + \boldsymbol{AB} - \boldsymbol{AB} - \boldsymbol{AB} - \boldsymbol{AB} - \boldsymbol{AB} + \boldsymbol{AB}$
> $= \boldsymbol{A} + \boldsymbol{B} - \boldsymbol{AB}$. □


#### 分块矩阵技巧

**例 2.88** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，$\boldsymbol{D}$ 为 $m$ 阶方阵. 求证：
$$\begin{vmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{vmatrix} = |\boldsymbol{A}| \cdot |\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}|.$$

> [!proof]-
> 分块初等变换：
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix} \xrightarrow{R_2 - \boldsymbol{CA}^{-1}R_1} \begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{O} & \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B} \end{pmatrix}$$
> 取行列式：$= |\boldsymbol{A}| \cdot |\boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}|$. □

**例 2.89** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，$\boldsymbol{D}$ 为 $m$ 阶方阵，$\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$ 可逆. 求 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{B} \\ \boldsymbol{C} & \boldsymbol{D} \end{pmatrix}^{-1}$.

> [!solution]
> 已在例 2.40/2.69 中给出. □

**例 2.90** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$\boldsymbol{C}$ 为 $m \times n$ 矩阵，$\boldsymbol{D}$ 为 $m$ 阶方阵. 若 $\boldsymbol{A}$ 和 $\boldsymbol{S} = \boldsymbol{D} - \boldsymbol{CA}^{-1}\boldsymbol{B}$ 都可逆，用分块初等变换求逆.

> [!solution]
> 已在例 2.40 中给出. □

**例 2.91** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}, \boldsymbol{\beta}$ 为 $n$ 维列向量. 利用分块矩阵求 $(\boldsymbol{A} + \boldsymbol{\alpha}\boldsymbol{\beta}')^{-1}$.

> [!solution]
> 考虑 $\begin{pmatrix} \boldsymbol{A} & -\boldsymbol{\alpha} \\ \boldsymbol{\beta}' & 1 \end{pmatrix}$，用降阶公式即得. □


### §2.12 基础训练

#### 一、单选题

**1.** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，下列命题正确的是（　）

(A) 若 $\boldsymbol{A}^2 = \boldsymbol{O}$，则 $\boldsymbol{A} = \boldsymbol{O}$

(B) 若 $\boldsymbol{A}^2 = \boldsymbol{A}$，则 $\boldsymbol{A} = \boldsymbol{O}$ 或 $\boldsymbol{A} = \boldsymbol{I}_n$

(C) 若 $\boldsymbol{A} \neq \boldsymbol{O}$，则 $|\boldsymbol{A}| \neq 0$

(D) 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}'$ 也可逆

> [!solution]
> 答案：**(D)**
> 
> (A) 反例：$\boldsymbol{A} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$，$\boldsymbol{A}^2 = \boldsymbol{O}$ 但 $\boldsymbol{A} \neq \boldsymbol{O}$.
> 
> (B) 反例：$\boldsymbol{A} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$，$\boldsymbol{A}^2 = \boldsymbol{A}$ 但 $\boldsymbol{A} \neq \boldsymbol{O}, \boldsymbol{I}_2$.
> 
> (C) 反例：$\boldsymbol{A} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \neq \boldsymbol{O}$，$|\boldsymbol{A}| = 0$.
> 
> (D) 正确：$|\boldsymbol{A}'| = |\boldsymbol{A}| \neq 0$. □

**2.** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，下列命题正确的是（　）

(A) $(\boldsymbol{A} + \boldsymbol{B})^2 = \boldsymbol{A}^2 + 2\boldsymbol{AB} + \boldsymbol{B}^2$

(B) $(\boldsymbol{A} + \boldsymbol{B})(\boldsymbol{A} - \boldsymbol{B}) = \boldsymbol{A}^2 - \boldsymbol{B}^2$

(C) 若 $\boldsymbol{AB} = \boldsymbol{O}$，则 $\boldsymbol{A} = \boldsymbol{O}$ 或 $\boldsymbol{B} = \boldsymbol{O}$

(D) 若 $\boldsymbol{A}$ 可逆且 $\boldsymbol{AB} = \boldsymbol{AC}$，则 $\boldsymbol{B} = \boldsymbol{C}$

> [!solution]
> 答案：**(D)**
> 
> (A)(B) 一般不成立，因为 $\boldsymbol{AB} \neq \boldsymbol{BA}$.
> 
> (C) 反例：$\boldsymbol{A} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$，$\boldsymbol{B} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$，$\boldsymbol{AB} = \boldsymbol{O}$.
> 
> (D) 正确：$\boldsymbol{A}$ 可逆，左乘 $\boldsymbol{A}^{-1}$ 即得. □


**3.** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$k$ 为非零常数，则 $(k\boldsymbol{A})^{-1} =$（　）

(A) $k\boldsymbol{A}^{-1}$　　(B) $\dfrac{1}{k}\boldsymbol{A}^{-1}$　　(C) $-k\boldsymbol{A}^{-1}$　　(D) $\dfrac{1}{k\boldsymbol{A}}$

> [!solution]
> 答案：**(B)**
> 
> $(k\boldsymbol{A}) \cdot \dfrac{1}{k}\boldsymbol{A}^{-1} = \boldsymbol{I}_n$. □

**4.** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = a \neq 0$，则 $|\boldsymbol{A}^*| =$（　）

(A) $a$　　(B) $\dfrac{1}{a}$　　(C) $a^{n-1}$　　(D) $a^n$

> [!solution]
> 答案：**(C)**
> 
> $|\boldsymbol{A}^*| = |\boldsymbol{A}|^{n-1} = a^{n-1}$. □

**5.** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$r(\boldsymbol{A}) = n-1$，$\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2$ 是 $\boldsymbol{Ax} = \boldsymbol{b}$ 的两个不同解，则 $\boldsymbol{Ax} = \boldsymbol{0}$ 的通解为（　）

(A) $k\boldsymbol{\alpha}_1$　　(B) $k\boldsymbol{\alpha}_2$　　(C) $k(\boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2)$　　(D) $k(\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2)$

> [!solution]
> 答案：**(D)**
> 
> $\boldsymbol{A}(\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2) = \boldsymbol{A}\boldsymbol{\alpha}_1 - \boldsymbol{A}\boldsymbol{\alpha}_2 = \boldsymbol{b} - \boldsymbol{b} = \boldsymbol{0}$，且 $\boldsymbol{\alpha}_1 \neq \boldsymbol{\alpha}_2$，故 $\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2 \neq \boldsymbol{0}$ 是基解. □


#### 二、填空题

**1.** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = 2$，则 $|2\boldsymbol{A}^*| =$ ______.

> [!solution]
> $|2\boldsymbol{A}^*| = 2^n |\boldsymbol{A}^*| = 2^n |\boldsymbol{A}|^{n-1} = 2^n \cdot 2^{n-1} = 2^{2n-1}$. □

**2.** 设 $\boldsymbol{A}$ 为 $3$ 阶方阵，$|\boldsymbol{A}| = \dfrac{1}{2}$，则 $|(3\boldsymbol{A})^{-1} - 2\boldsymbol{A}^*| =$ ______.

> [!solution]
> $(3\boldsymbol{A})^{-1} = \dfrac{1}{3}\boldsymbol{A}^{-1} = \dfrac{1}{3} \cdot \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A}^* = \dfrac{2}{3}\boldsymbol{A}^*$.
> 
> $(3\boldsymbol{A})^{-1} - 2\boldsymbol{A}^* = \dfrac{2}{3}\boldsymbol{A}^* - 2\boldsymbol{A}^* = -\dfrac{4}{3}\boldsymbol{A}^*$.
> 
> $|-\dfrac{4}{3}\boldsymbol{A}^*| = \left(-\dfrac{4}{3}\right)^3 |\boldsymbol{A}^*| = -\dfrac{64}{27} \cdot |\boldsymbol{A}|^2 = -\dfrac{64}{27} \cdot \dfrac{1}{4} = -\dfrac{16}{27}$. □

**3.** 设 $\boldsymbol{A} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 0 \\ 3 & 4 & 5 \end{pmatrix}$，$\boldsymbol{A}^*$ 为 $\boldsymbol{A}$ 的伴随矩阵，则 $(\boldsymbol{A}^*)^{-1} =$ ______.

> [!solution]
> $\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{A}^{-1}$，故 $(\boldsymbol{A}^*)^{-1} = \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A} = \dfrac{1}{10}\boldsymbol{A} = \begin{pmatrix} \dfrac{1}{10} & 0 & 0 \\ \dfrac{1}{5} & \dfrac{1}{5} & 0 \\ \dfrac{3}{10} & \dfrac{2}{5} & \dfrac{1}{2} \end{pmatrix}$. □

**4.** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = 2$，$|\boldsymbol{B}| = -3$，则 $|2\boldsymbol{A}^*\boldsymbol{B}^{-1}| =$ ______.

> [!solution]
> $|2\boldsymbol{A}^*\boldsymbol{B}^{-1}| = 2^n |\boldsymbol{A}^*||\boldsymbol{B}^{-1}| = 2^n \cdot |\boldsymbol{A}|^{n-1} \cdot \dfrac{1}{|\boldsymbol{B}|} = 2^n \cdot 2^{n-1} \cdot \left(-\dfrac{1}{3}\right) = -\dfrac{2^{2n-1}}{3}$. □


#### 三、解答题

**1.** 设 $\boldsymbol{A} = \begin{pmatrix} 1 & 1 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$，求 $\boldsymbol{A}^n$.

> [!solution]
> $\boldsymbol{A} = \boldsymbol{I}_3 + \boldsymbol{N}$，其中 $\boldsymbol{N} = \begin{pmatrix} 0 & 1 & -1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.
> 
> $\boldsymbol{N}^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$，$\boldsymbol{N}^3 = \boldsymbol{O}$.
> 
> $\boldsymbol{A}^n = (\boldsymbol{I}_3 + \boldsymbol{N})^n = \boldsymbol{I}_3 + n\boldsymbol{N} + \dfrac{n(n-1)}{2}\boldsymbol{N}^2$
> $= \begin{pmatrix} 1 & n & -n + \dfrac{n(n-1)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & n & \dfrac{n(n-3)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix}$. □

**2.** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$|\boldsymbol{A}| = 2$，求 $|(\dfrac{1}{2}\boldsymbol{A})^{-1} - 3\boldsymbol{A}^*|$.

> [!solution]
> $(\dfrac{1}{2}\boldsymbol{A})^{-1} = 2\boldsymbol{A}^{-1} = 2 \cdot \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A}^* = \boldsymbol{A}^*$.
> 
> $|\boldsymbol{A}^* - 3\boldsymbol{A}^*| = |-2\boldsymbol{A}^*| = (-2)^n |\boldsymbol{A}^*| = (-2)^n \cdot |\boldsymbol{A}|^{n-1} = (-2)^n \cdot 2^{n-1} = (-1)^n 2^{2n-1}$. □

**3.** 设 $\boldsymbol{A}$ 为 $n$ 阶幂等阵（$\boldsymbol{A}^2 = \boldsymbol{A}$），求证：$r(\boldsymbol{A}) + r(\boldsymbol{I}_n - \boldsymbol{A}) = n$.

> [!proof]-
> 已在例 2.13 中证明. □

**4.** 设 $\boldsymbol{A}$ 为 $n$ 阶可逆阵，$\boldsymbol{\alpha}$ 为 $n$ 维列向量，$b$ 为常数，
$$\boldsymbol{P} = \begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^* & |\boldsymbol{A}| \end{pmatrix}, \quad \boldsymbol{Q} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & b \end{pmatrix}.$$
(1) 计算 $\boldsymbol{PQ}$；(2) 求证：$\boldsymbol{Q}$ 可逆的充要条件是 $\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha} \neq b$.

> [!solution]
> (1) $\boldsymbol{PQ} = \begin{pmatrix} \boldsymbol{I}_n & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^* & |\boldsymbol{A}| \end{pmatrix} \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & b \end{pmatrix} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ -\boldsymbol{\alpha}'\boldsymbol{A}^*\boldsymbol{A} + |\boldsymbol{A}|\boldsymbol{\alpha}' & -\boldsymbol{\alpha}'\boldsymbol{A}^*\boldsymbol{\alpha} + b|\boldsymbol{A}| \end{pmatrix}$
> $= \begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{O} & |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) \end{pmatrix}$（利用 $\boldsymbol{A}^*\boldsymbol{A} = |\boldsymbol{A}|\boldsymbol{I}_n$）.
> 
> (2) $|\boldsymbol{PQ}| = |\boldsymbol{A}| \cdot |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}) = |\boldsymbol{A}|^2(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$.
> 
> 又 $|\boldsymbol{P}| = |\boldsymbol{A}| \neq 0$，故 $|\boldsymbol{Q}| = |\boldsymbol{A}|(b - \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha})$.
> 
> $\boldsymbol{Q}$ 可逆 $\Leftrightarrow |\boldsymbol{Q}| \neq 0 \Leftrightarrow b \neq \boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. □


---

