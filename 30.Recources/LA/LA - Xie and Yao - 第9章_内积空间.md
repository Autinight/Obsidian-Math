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

## 第9章 内积空间

### § 9.1 基本概念

#### 9.1.1 内积空间的定义

##### 1. 欧氏空间

设 $V$ 是实数域上的线性空间，若存在某种规则，使得对 $V$ 中任意一对有序向量 $x, y$，都对应一个实数 $(x, y)$，适合如下性质：

(1) $(y, x) = (x, y)$;

(2) $(x + y, z) = (x, z) + (y, z)$;

(3) $(cx, y) = c(x, y)$, $c$ 为任一实数;

(4) $(x, x) \geq 0$, 且等号成立当且仅当 $x = 0$,

则称在 $V$ 上定义了一个**内积**. 实数 $(x, y)$ 称为向量 $x$ 和 $y$ 的内积. 若 $V$ 是 $n$ 维空间，则称 $V$ 是 $n$ 维**欧氏空间**.

##### 2. 酉空间

设 $V$ 是复数域上的线性空间，若存在某种规则，使得对 $V$ 中任意一对有序向量 $x, y$，都对应一个复数 $(x, y)$，适合如下性质：

(1) $(y, x) = \overline{(x, y)}$;

(2) $(x + y, z) = (x, z) + (y, z)$;

(3) $(cx, y) = c(x, y)$, $c$ 为任一复数;

(4) $(x, x) \geq 0$, 且等号成立当且仅当 $x = 0$,

则称在 $V$ 上定义了一个**内积**. 复数 $(x, y)$ 称为向量 $x$ 和 $y$ 的内积. 若 $V$ 是 $n$ 维空间，则称 $V$ 是 $n$ 维**酉空间**.

欧氏空间和酉空间统称为**内积空间**.


##### 3. 向量范数或长度

设 $V$ 是内积空间, $x$ 是 $V$ 中的向量, 定义 $x$ 的**范数** (长度) 为

$$\|x\| = (x, x)^{\frac{1}{2}}.$$

##### 4. 距离

设 $x, y$ 是内积空间 $V$ 中的向量, 定义 $x, y$ 之间的距离为 $d(x, y) = \|x - y\|$.

##### 5. 向量之间的夹角

设 $x, y$ 是内积空间 $V$ 中的非零向量, 定义 $x, y$ 之间的夹角 $\theta$ 的余弦为

$$\cos \theta = \begin{cases} \dfrac{(x, y)}{\|x\|\|y\|} & (\text{此时 } V \text{ 为实内积空间}); \\ \dfrac{|(x, y)|}{\|x\|\|y\|} & (\text{此时 } V \text{ 为复内积空间}). \end{cases}$$

##### 6. 正交

设 $x, y$ 是内积空间 $V$ 中的向量, 若 $(x, y) = 0$, 则称 $x$ 和 $y$ **正交**, 记为 $x \perp y$.

##### 7. 定理

> [!theorem]
> 设 $V$ 是内积空间, $x, y$ 是 $V$ 中的向量, $c$ 是任意常数, 则
> (1) $\|cx\| = |c| \cdot \|x\|$;
> (2) $|(x, y)| \leq \|x\| \cdot \|y\|$;
> (3) $\|x + y\| \leq \|x\| + \|y\|$.

#### 9.1.2 正交基

##### 1. 正交基

设 $V$ 是 $n$ 维内积空间, 若 $V$ 有一组基两两正交, 则称这组基为 $V$ 的**正交基**. 进一步, 若每个基向量的长度都等于 1, 则称之为**标准正交基**.

##### 2. 定理

> [!theorem]
> $n$ 维内积空间中两两正交的非零向量组必线性无关; 任意一个 $n$ 维内积空间必有标准正交基.


##### 3. Gram-Schmidt 正交化方法

设 $V$ 是 $n$ 维内积空间, $x_1, x_2, \cdots, x_m$ 是 $V$ 中 $m$ 个线性无关的向量, 令

$$\begin{aligned} y_1 &= x_1, \\ y_2 &= x_2 - \frac{(x_2, y_1)}{\|y_1\|^2} y_1, \\ y_3 &= x_3 - \frac{(x_3, y_1)}{\|y_1\|^2} y_1 - \frac{(x_3, y_2)}{\|y_2\|^2} y_2, \\ &\cdots\cdots\cdots\cdots \\ y_m &= x_m - \sum_{j=1}^{m-1} \frac{(x_m, y_j)}{\|y_j\|^2} y_j, \end{aligned}$$

则 $y_1, y_2, \cdots, y_m$ 是两两正交的非零向量组.

##### 4. 正交补

设 $V$ 是 $n$ 维内积空间, $U$ 是子空间, 则和 $U$ 正交的全体向量组成 $V$ 的一个子空间, 称为 $U$ 的**正交补空间**, 记为 $U^\perp$.

##### 5. 正交直和

设 $V$ 是 $n$ 维内积空间, $U_i (1 \leq i \leq m)$ 是子空间. 假设 $U_i$ 两两正交且 $V$ 是 $U_i$ 的和空间, 则称 $V$ 是 $U_i$ 的**正交直和**, 记为

$$V = U_1 \perp U_2 \perp \cdots \perp U_m.$$

##### 6. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $U$ 是子空间, 则
> (1) $V = U \perp U^\perp$;
> (2) $U$ 的任意一组标准正交基都可以扩张为 $V$ 的一组标准正交基.

#### 9.1.3 伴随

##### 1. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上唯一的线性变换 $\varphi^*$, 使得对任意的 $x, y \in V$, 都有
> $$(\varphi(x), y) = (x, \varphi^*(y)).$$


上述 $\varphi^*$ 称为线性变换 $\varphi$ 的**伴随**.

##### 2. 伴随的表示矩阵

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组标准正交基, 且 $\varphi$ 在这组基下的表示矩阵为 $A$. 若 $V$ 是欧氏空间, 则 $\varphi^*$ 在这组基下的表示矩阵为 $A'$, 即 $A$ 的转置; 若 $V$ 是酉空间, 则 $\varphi^*$ 在这组基下的表示矩阵为 $\overline{A}'$, 即 $A$ 的共轭转置.

##### 3. 伴随的性质

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, $c$ 是某个常数, 则

(1) $(\varphi + \psi)^* = \varphi^* + \psi^*$;

(2) $(c\varphi)^* = \overline{c}\varphi^*$;

(3) $(\varphi\psi)^* = \psi^*\varphi^*$;

(4) $(\varphi^*)^* = \varphi$.

#### 9.1.4 正交变换与酉变换

##### 1. 定义

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 若 $\varphi$ 保持内积, 即对任意的 $x, y \in V$, $(\varphi(x), \varphi(y)) = (x, y)$, 则当 $V$ 是欧氏空间时, 称 $\varphi$ 是 $V$ 上的**正交变换**; 当 $V$ 是酉空间时, 称 $\varphi$ 是 $V$ 上的**酉变换**.

##### 2. 正交矩阵和酉矩阵

若 $n$ 阶实矩阵 $P$ 适合 $P'P = PP' = I_n$, 则称为**正交矩阵**; 若 $n$ 阶复矩阵 $U$ 适合 $\overline{U}'U = U\overline{U}' = I_n$, 则称为**酉矩阵**.

##### 3. 定理

> [!theorem]
> 欧氏空间上的线性变换 $\varphi$ 是正交变换的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是正交矩阵; 酉空间上的线性变换 $\varphi$ 是酉变换的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是酉矩阵.


#### 9.1.5 正规算子

##### 1. 自伴随算子

设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的线性变换, 若 $\varphi = \varphi^*$, 则称 $\varphi$ 是 $V$ 上的**自伴随算子**. 当 $V$ 是欧氏空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是对称矩阵; 当 $V$ 是酉空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是 Hermite 矩阵.

> [!note]
> 当 $V$ 是欧氏空间时, 自伴随算子又称为**对称变换**; 当 $V$ 是酉空间时, 自伴随算子又称为 **Hermite 变换**.

##### 2. 定理

> [!theorem]
> 设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的自伴随算子, 则存在 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵是实对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_i$ 都是 $\varphi$ 的特征向量.

##### 3. 定理

> [!theorem]
> 实对称矩阵和 Hermite 矩阵的特征值都是实数.

##### 4. 定理

> [!theorem]
> 任意一个实对称矩阵 $A$ 都正交相似于对角矩阵, 即存在正交矩阵 $P$, 使得 $P'AP$ 是对角矩阵, 且该对角矩阵的主对角元是 $A$ 的特征值. 任意一个 Hermite 矩阵 $H$ 都酉相似于实对角矩阵, 即存在酉矩阵 $U$, 使得 $\overline{U}'HU$ 是实对角矩阵, 且该对角矩阵的主对角元是 $H$ 的特征值.

##### 5. 正规算子与正规矩阵

设 $\varphi$ 是内积空间 $V$ 上的线性变换, 若 $\varphi\varphi^* = \varphi^*\varphi$, 则称 $\varphi$ 是**正规算子**.

若 $n$ 阶复矩阵 $A$ 适合 $A\overline{A}' = \overline{A}'A$, 则称为**复正规矩阵**; 若 $n$ 阶实矩阵 $A$ 适合 $AA' = A'A$, 则称为**实正规矩阵**.

##### 6. 定理

> [!theorem]
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的正规算子, 则存在 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵是对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_i$ 都是 $\varphi$ 的特征向量.


##### 7. 定理

> [!theorem]
> 任一复正规矩阵均酉相似于复对角矩阵.

##### 8. 推论

> [!corollary]
> 任一 $n$ 阶酉矩阵均酉相似于下列形状的对角矩阵:
> $$\text{diag}\{c_1, c_2, \cdots, c_n\},$$
> 其中 $c_i$ 为模长等于 1 的复数.

##### 9. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维欧氏空间, $\varphi$ 是 $V$ 上的正规算子, 则存在 $V$ 的一组标准正交基, 使得 $\varphi$ 在这组基下的表示矩阵为下列分块对角矩阵:
> $$\text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\}, \tag{9.1}$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ 的二阶实矩阵, $c_j$ 是实数.

##### 10. 定理

> [!theorem]
> 设 $A$ 是 $n$ 阶实正规矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\},$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ 的二阶实矩阵, $c_j$ 是实数.

##### 11. 推论

> [!corollary]
> 设 $A$ 是 $n$ 阶正交矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\},$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} \cos\theta_i & \sin\theta_i \\ -\sin\theta_i & \cos\theta_i \end{pmatrix}$ 的二阶实矩阵, $c_j = 1$ 或 $-1$.

##### 12. 推论

> [!corollary]
> 设 $A$ 是 $n$ 阶实反对称矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, 0, \cdots, 0\},$$


其中 $A_i$ 为形如 $\begin{pmatrix} 0 & c_i \\ -c_i & 0 \end{pmatrix}$ 的二阶实矩阵. 特别地, 实反对称矩阵的特征值为零或纯虚数.

#### 9.1.6 谱分解和极分解

##### 1. 谱分解定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 当 $V$ 是欧氏空间时假设 $\varphi$ 是自伴随算子, 当 $V$ 是酉空间时假设 $\varphi$ 是复正规算子. 设 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的所有不同的特征值, $V_i$ 是 $\lambda_i$ 的特征子空间, 则 $V$ 是诸 $V_i$ 的正交直和. 又设 $E_i$ 为 $V$ 到 $V_i$ 上的正交投影, 则
> $$\varphi = \lambda_1 E_1 + \lambda_2 E_2 + \cdots + \lambda_k E_k.$$

##### 2. 极分解定理

> [!theorem]
> 设 $V$ 是 $n$ 维酉 (欧氏) 空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上的酉变换 (正交变换) $\omega$ 以及 $V$ 上的半正定自伴随算子 $\psi$, 使得 $\varphi = \omega\psi$, 其中 $\psi$ 被 $\varphi$ 唯一确定, 当 $\varphi$ 是可逆线性变换时, $\omega$ 也被 $\varphi$ 唯一确定.

##### 3. 矩阵的极分解

若 $A$ 是 $n$ 阶实矩阵, 则存在 $n$ 阶正交矩阵 $Q$ 和半正定实对称矩阵 $S$, 使得 $A = QS$. 若 $B$ 是 $n$ 阶复矩阵, 则存在 $n$ 阶酉矩阵 $U$ 和半正定 Hermite 矩阵 $H$, 使得 $B = UH$. 上述分解式当 $A, B$ 是可逆矩阵时是唯一的.

#### 9.1.7 奇异值分解

##### 1. 定理

> [!theorem]
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在唯一的线性映射 $\varphi^*: U \to V$, 使得对任意的 $v \in V, u \in U$, 总有
> $$(\varphi(v), u) = (v, \varphi^*(u)).$$

上述 $\varphi^*$ 称为线性映射 $\varphi$ 的**伴随**.


##### 2. 奇异值

设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 若存在非负实数 $\sigma$ 以及非零向量 $v \in V, u \in U$, 使得

$$\varphi(v) = \sigma u, \quad \varphi^*(u) = \sigma v,$$

则称 $\sigma$ 是 $\varphi$ 的**奇异值**, $v, u$ 分别称为 $\varphi$ 关于 $\sigma$ 的**右奇异向量**与**左奇异向量**.

##### 3. 奇异值分解定理

> [!theorem]
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在 $V$ 和 $U$ 的标准正交基, 使得 $\varphi$ 在这两组基下的表示矩阵为
> $$\begin{pmatrix} S & O \\ O & O \end{pmatrix},$$
> 其中 $S = \text{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$, $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 是 $\varphi$ 的非零奇异值.

##### 4. 矩阵的奇异值分解

设 $A$ 为 $m \times n$ 实矩阵 (复矩阵), 则存在 $m$ 阶正交矩阵 (酉矩阵) $P$, $n$ 阶正交矩阵 (酉矩阵) $Q$, 使得

$$A = P \begin{pmatrix} S & O \\ O & O \end{pmatrix} Q,$$

其中 $S = \text{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$, $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 是 $A$ 的非零奇异值.

### § 9.2 内积空间与 Gram 矩阵

如果实线性空间 (或复线性空间) $V$ 上附加了一个满足对称性 (共轭对称性)、第一变量的线性以及正定性的二元运算 $(-, -)$, 则这个二元运算就称为 $V$ 上的**内积**, 而带有内积结构的实线性空间 (或复线性空间) $V$ 就称为实内积空间 (复内积空间). 我们可把线性空间 $V$ 看成是底空间, 而把内积看成是附加在 $V$ 上的度量结构, 因此 $V$ 的维数和基, 以及 $V$ 上的线性变换等都是由底空间的线性结构诱导出来的. 本章将重点阐述的是, 在添加了内积结构之后, $V$ 和 $V$ 上的线性变换具有的进一步的性质以及相关的应用等.

下面的例题给出了常见线性空间上的内积结构.


> [!example]
> **例 9.1** 证明下列线性空间在给定的二元运算下成为内积空间:
> (1) 设 $V = \mathbb{R}^n$ 为 $n$ 维实列向量空间, $G$ 为 $n$ 阶正定实对称矩阵, 对任意的 $\alpha, \beta \in V$, 定义 $(\alpha, \beta) = \alpha'G\beta$;
> (2) 设 $V = \mathbb{R}_n$ 为 $n$ 维实行向量空间, $G$ 为 $n$ 阶正定实对称矩阵, 对任意的 $\alpha, \beta \in V$, 定义 $(\alpha, \beta) = \alpha G\beta'$;
> (3) 设 $V = \mathbb{C}^n$ 为 $n$ 维复列向量空间, $H$ 为 $n$ 阶正定 Hermite 矩阵, 对任意的 $\alpha, \beta \in V$, 定义 $(\alpha, \beta) = \alpha'H\overline{\beta}$;
> (4) 设 $V = \mathbb{C}^n$ 为 $n$ 维复行向量空间, $H$ 为 $n$ 阶正定 Hermite 矩阵, 对任意的 $\alpha, \beta \in V$, 定义 $(\alpha, \beta) = \alpha H\overline{\beta}'$;
> (5) 设 $V = C[a, b]$ 为闭区间 $[a, b]$ 上的连续函数全体构成的实线性空间, 对任意的 $f(t), g(t) \in V$, 定义 $(f(t), g(t)) = \int_a^b f(t)g(t)\mathrm{d}t$;
> (6) 设 $V = \mathbb{R}[x]$ 为实系数多项式全体构成的实线性空间, 对任意的 $f(x) = a_0 + a_1x + \cdots + a_nx^n$, $g(x) = b_0 + b_1x + \cdots + b_mx^m$, 定义 $(f(x), g(x)) = a_0b_0 + a_1b_1 + \cdots + a_kb_k$, 其中 $k = \min\{n, m\}$;
> (7) 设 $V = M_n(\mathbb{R})$ 为 $n$ 阶实矩阵全体构成的实线性空间, 对任意的 $A = (a_{ij})$, $B = (b_{ij}) \in V$, 定义 $(A, B) = \text{tr}(AB') = \sum_{i,j=1}^n a_{ij}b_{ij}$;
> (8) 设 $V = M_n(\mathbb{C})$ 为 $n$ 阶复矩阵全体构成的复线性空间, 对任意的 $A = (a_{ij})$, $B = (b_{ij}) \in V$, 定义 $(A, B) = \text{tr}(A\overline{B}') = \sum_{i,j=1}^n a_{ij}\overline{b_{ij}}$.

> [!proof]-
> **证明** (1) 首先注意到 $\alpha'G\beta$ 是一个数, $G$ 是实对称矩阵, 故它们都等于自身的转置, 从而 $(\alpha, \beta) = \alpha'G\beta = (\alpha'G\beta)' = \beta'G'\alpha = \beta G\alpha' = (\beta, \alpha)$, 即得对称性; 其次由矩阵乘法的性质可得第一变量的线性; 最后由 $G$ 的正定性可知, $(\alpha, \alpha) = \alpha'G\alpha \geq 0$, 且等号成立当且仅当 $\alpha = 0$, 即得正定性. 因此上述二元运算是 $\mathbb{R}^n$ 上的内积, 称为由正定实对称矩阵 $G$ 定义的内积. 当 $G = I_n$ 时, 上述内积称为 $\mathbb{R}^n$ 上的标准内积.
>
> (2) 类似于 (1) 的证明可得. 当 $G = I_n$ 时, 上述内积称为 $\mathbb{R}_n$ 上的标准内积.
>
> (3) 首先注意到 $\overline{H}' = H$, 故 $\overline{(\alpha, \beta)} = \overline{\alpha'H\overline{\beta}} = (\overline{\alpha}'\overline{H}\beta)' = \beta'\overline{H}'\overline{\alpha} = \beta'H\overline{\alpha} = (\beta, \alpha)$, 即得共轭对称性; 其次由矩阵乘法的性质可得第一变量的线性; 最后由 $H$ 的正定性可知, $(\alpha, \alpha) = \alpha'H\overline{\alpha} \geq 0$, 且等号成立当且仅当 $\alpha = 0$, 即得正定性. 因此上述二元运算是 $\mathbb{C}^n$ 上的内积, 称为由正定 Hermite 矩阵 $H$ 定义的内积. 当 $H = I_n$ 时, 上述内积称为 $\mathbb{C}^n$ 上的标准内积.
>
> (4) 类似于 (3) 的证明可得. 当 $H = I_n$ 时, 上述内积称为 $\mathbb{C}_n$ 上的标准内积.
>
> (5) 对称性显然成立; 由积分运算的线性可得第一变量的线性; 由连续函数的性质可得正定性, 因此上述二元运算是 $C[a, b]$ 上的内积.


> (6) 容易验证对称性、第一变量的线性和正定性都成立.
>
> (7) 参考 § 2.7, 由求迹运算的对称性、线性和正定性即得上述二元运算的对称性、线性和正定性, 因此它是 $M_n(\mathbb{R})$ 上的内积.
>
> (8) 证明是类似的. 这两种由矩阵的迹定义的内积称为矩阵空间上的 **Frobenius 内积**. $\square$

内积空间 $V$ 中向量 $\alpha$ 的范数 (长度) 定义为 $\|\alpha\| = (\alpha, \alpha)^{\frac{1}{2}}$, 因此由内积的正定性可得范数的正定性, 即 $\|\alpha\| \geq 0$, 且等号成立当且仅当 $\alpha = 0$. §§ 9.1.1 定理 7 还给出了范数其他重要的性质, 例如 Cauchy-Schwarz 不等式和三角不等式等. 作为内积正定性的另一个应用, 我们有如下简单实用的技巧.

> [!example]
> **例 9.2** 设 $V$ 为内积空间, 求证:
> (1) 若 $(\alpha, \beta) = 0$ 对任意的 $\beta \in V$ 都成立, 则 $\alpha = 0$; 若 $(\alpha, \beta) = 0$ 对任意的 $\alpha \in V$ 都成立, 则 $\beta = 0$;
> (2) 设 $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组基, 若 $(\alpha, e_i) = (\beta, e_i)$ 对任意的 $i$ 都成立, 则 $\alpha = \beta$.

> [!proof]-
> **证明** (1) 若 $(\alpha, \beta) = 0$ 对任意的 $\beta \in V$ 都成立, 令 $\beta = \alpha$, 可得 $(\alpha, \alpha) = 0$, 由内积的正定性即得 $\alpha = 0$. 同理可证另一情形.
>
> (2) 若 $(\alpha, e_i) = (\beta, e_i)$ 对任意的 $i$ 都成立, 则 $(\alpha - \beta, e_i) = 0$ 对任意的 $i$ 都成立. 设 $\alpha - \beta = \sum_{i=1}^n c_ie_i$, 则由第二变量的共轭线性可得 $(\alpha - \beta, \alpha - \beta) = (\alpha - \beta, \sum_{i=1}^n c_ie_i) = \sum_{i=1}^n \overline{c_i}(\alpha - \beta, e_i) = 0$, 再由内积的正定性即得 $\alpha = \beta$. $\square$

> [!note]
> 由实内积的对称性可推出第二变量的线性, 然而复内积的共轭对称性只能推出第二变量的共轭线性, 这是实内积和复内积的区别之一, 请读者务必注意. 因为实数的共轭等于自身, 所以实内积空间的定义相容于复内积空间的定义. 因此在后面很多例题的叙述和解答的过程中, 除非题目已标明是哪一类内积空间, 否则我们一般都按照复内积空间的情形来处理.

设 $\{e_1, e_2, \cdots, e_n\}$ 是内积空间 $V$ 的一组基, 令 $g_{ij} = (e_i, e_j)$, 则 $G = (g_{ij})_{n \times n}$ 称为内积空间 $V$ 关于基 $\{e_1, e_2, \cdots, e_n\}$ 的 **Gram 矩阵**或**度量矩阵**. 设 $\alpha, \beta \in V$ 在上述基下的坐标向量分别为 $x, y$, 则有

$$(\alpha, \beta) = \begin{cases} x'Gy & (\text{此时 } V \text{ 为欧氏空间}); \\ x'G\overline{y} & (\text{此时 } V \text{ 为酉空间}). \end{cases} \tag{9.2}$$


进一步, 由内积的对称性 (共轭对称性) 和正定性可知 $G$ 是正定实对称矩阵 (正定 Hermite 矩阵), 于是 $V$ 上的一个内积结构对应于一个 $n$ 阶正定实对称矩阵 ($n$ 阶正定 Hermite 矩阵) $G$. 反之, 一个 $n$ 阶正定实对称矩阵 ($n$ 阶正定 Hermite 矩阵) $G$ 按照 (9.2) 式可以定义 $V$ 上的一个内积结构 (验证方法与例 9.1 (1) 和 (3) 类似). 因此, 若取定 $n$ 维实 (复) 线性空间 $V$ 上的一组基, 则 $V$ 上的内积结构全体与 $n$ 阶正定实对称矩阵 ($n$ 阶正定 Hermite 矩阵) 全体之间存在着一个一一对应. 正是在这个意义下, 线性空间上的内积结构的研究等价于 Gram 矩阵的研究, 即等价于正定实对称矩阵 (正定 Hermite 矩阵) 的研究, 这也是我们在第 8 章研究正定阵的重要原因.

我们也可以考虑另一个方向的问题: 若取定 $n$ 维实 (复) 线性空间 $V$ 上的一种内积结构, 使之成为实 (复) 内积空间, 那么不同基的 Gram 矩阵之间会有怎样的关系呢? 下面的例题告诉我们, 它们之间是合同 (复相合) 的关系.

> [!example]
> **例 9.3** 设 $V$ 为 $n$ 维内积空间, $\{e_1, e_2, \cdots, e_n\}$ 和 $\{f_1, f_2, \cdots, f_n\}$ 分别是 $V$ 的两组基. 设基 $\{e_1, e_2, \cdots, e_n\}$ 的 Gram 矩阵为 $G$, 基 $\{f_1, f_2, \cdots, f_n\}$ 的 Gram 矩阵为 $H$, 从基 $\{e_1, e_2, \cdots, e_n\}$ 到基 $\{f_1, f_2, \cdots, f_n\}$ 的过渡矩阵为 $C$. 求证: 若 $V$ 为欧氏空间, 则 $H = C'GC$; 若 $V$ 为酉空间, 则 $H = C'G\overline{C}$.

> [!proof]-
> **证明** 设 $V$ 为酉空间, $G = (g_{ij})$, $H = (h_{ij})$, $C = (c_{ij})$, 则 $f_k = \sum_{i=1}^n c_{ik}e_i$, 于是
> $$h_{kl} = (f_k, f_l) = (\sum_{i=1}^n c_{ik}e_i, \sum_{j=1}^n c_{jl}e_j) = \sum_{i,j=1}^n c_{ik}\overline{c_{jl}}(e_i, e_j) = \sum_{i,j=1}^n c_{ik}g_{ij}\overline{c_{jl}}.$$
> 上式左边是 $H$ 的第 $(k, l)$ 元素, 右边是 $C'G\overline{C}$ 的第 $(k, l)$ 元素, 从而结论得证. $\square$

> [!example]
> **例 9.4** 设 $V$ 是 $n$ 维实 (复) 内积空间, $H$ 是一个 $n$ 阶正定实对称矩阵 (正定 Hermite 矩阵), 求证: 必存在 $V$ 上的一组基 $\{f_1, f_2, \cdots, f_n\}$, 使得它的 Gram 矩阵就是 $H$.

> [!proof]-
> **证明** 任取 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$, 设其 Gram 矩阵为 $G$, 这也是一个 $n$ 阶正定实对称矩阵 (正定 Hermite 矩阵), 于是 $G$ 与 $H$ 合同 (复相合), 即存在 $n$ 阶非异阵 $C = (c_{ij})$, 使得 $H = C'GC$ ($H = C'G\overline{C}$). 令 $f_j = \sum_{i=1}^n c_{ij}e_i\,(1 \leq j \leq n)$, 则由 $C$ 非异可知 $\{f_1, f_2, \cdots, f_n\}$ 是 $V$ 的一组基, 并且从基 $\{e_1, e_2, \cdots, e_n\}$ 到基 $\{f_1, f_2, \cdots, f_n\}$ 的过渡矩阵恰为 $C$, 再由例 9.3 可知, 基 $\{f_1, f_2, \cdots, f_n\}$ 的 Gram 矩阵就是 $C'GC = H$ ($C'G\overline{C} = H$). $\square$

例 9.4 告诉我们, 若给定一个 $n$ 维实 (复) 内积空间 $V$, 则从 $V$ 所有的基构成的集合到所有 $n$ 阶正定实对称矩阵 ($n$ 阶正定 Hermite 矩阵) 构成的集合有一个满映


射, 它将 $V$ 的一组基映为这组基的 Gram 矩阵. 这个映射当然不会是单映射, 请读者自行思考其中的原因.

Gram 矩阵的概念还可以推广到内积空间中的任一向量组, 我们来看如下例题 (酉空间的情形同理可得).

> [!example]
> **例 9.5** 设 $v_1, v_2, \cdots, v_m$ 是欧氏空间 $V$ 中 $m$ 个向量, 矩阵
> $$G = G(v_1, v_2, \cdots, v_m) = \begin{pmatrix} (v_1, v_1) & (v_1, v_2) & \cdots & (v_1, v_m) \\ (v_2, v_1) & (v_2, v_2) & \cdots & (v_2, v_m) \\ \vdots & \vdots & & \vdots \\ (v_m, v_1) & (v_m, v_2) & \cdots & (v_m, v_m) \end{pmatrix}$$
> 称为向量 $v_1, v_2, \cdots, v_m$ 的 **Gram 矩阵**. 求证:
> (1) $G$ 是半正定实对称矩阵;
> (2) 向量组 $v_1, v_2, \cdots, v_m$ 线性无关当且仅当 $G$ 是正定阵, 也当且仅当 $G$ 是可逆矩阵.

> [!proof]-
> **证明** (1) 由内积的对称性可知 $G$ 是实对称矩阵. 对任意的实列向量 $\alpha = (a_1, a_2, \cdots, a_m)'$, 令 $v = a_1v_1 + a_2v_2 + \cdots + a_mv_m$, 则有
> $$\alpha'G\alpha = \sum_{i,j=1}^m a_ia_j(v_i, v_j) = (\sum_{i=1}^m a_iv_i, \sum_{j=1}^m a_jv_j) = (v, v) \geq 0,$$
> 因此 $G$ 是半正定阵.
>
> (2) 注意到半正定阵 $G$ 是正定阵当且仅当 $G$ 是非异阵, 故两个充要条件只要证明其中一个即可. 我们用两种方法来证明它们.
>
> **证法 1** 若 $v_1, v_2, \cdots, v_m$ 线性无关, 则对任意的非零实列向量 $\alpha = (a_1, a_2, \cdots, a_m)'$, $v = a_1v_1 + a_2v_2 + \cdots + a_mv_m \neq 0$, 从而 $\alpha'G\alpha = (v, v) > 0$, 故 $G$ 是正定阵. 若 $v_1, v_2, \cdots, v_m$ 线性相关, 则存在非零实列向量 $\alpha = (a_1, a_2, \cdots, a_m)'$, 使得 $v = a_1v_1 + a_2v_2 + \cdots + a_mv_m = 0$, 从而 $\alpha'G\alpha = (v, v) = 0$, 故 $G$ 不是正定阵.
>
> **证法 2** 假设 $v_1, v_2, \cdots, v_m$ 线性相关, 则存在不全为零的数 $k_1, k_2, \cdots, k_m$, 使得 $k_1v_1 + k_2v_2 + \cdots + k_mv_m = 0$. 将 $k_i$ 乘以 $G$ 的第 $i$ 行后求和得到
> $$(k_1v_1 + k_2v_2 + \cdots + k_mv_m, v_j) = 0, \quad 1 \leq j \leq m, \tag{9.3}$$
> 即 $G$ 的 $m$ 个行向量线性相关, 因此 $G$ 不是可逆矩阵. 反之, 若 $G$ 不可逆, 则 $G$ 的 $m$ 个行向量线性相关, 即存在不全为零的数 $k_1, k_2, \cdots, k_m$, 使得 (9.3) 式成立. 于是
> $$(k_1v_1 + k_2v_2 + \cdots + k_mv_m, k_1v_1 + k_2v_2 + \cdots + k_mv_m) = 0,$$
> 从而 $k_1v_1 + k_2v_2 + \cdots + k_mv_m = 0$, 因此 $v_1, v_2, \cdots, v_m$ 线性相关. $\square$


例 9.5 的结论完全是从内积的正定性出发推导得到的, 因此可以类似地证明: 正定实对称矩阵 (正定 Hermite 矩阵) 的任一主子式都大于零. 我们也可以考虑上述问题的反面: 若实对称矩阵 (Hermite 矩阵) $A$ 的任一主子式都大于等于零, 则 $A$ 是否为半正定阵? 答案是肯定的, 其证明留作第 8 章解答题 8.

> [!example]
> **例 9.6** 设 $v_1, v_2, \cdots, v_m$ 是内积空间 $V$ 中 $m$ 个向量, 证明: $v_1, v_2, \cdots, v_m$ 线性相关的充要条件是 Gram 矩阵 $G(v_1, v_2, \cdots, v_m)$ 的某个 $r$ 阶顺序主子式等于零, 这里 $r \leq m$.

> [!proof]-
> **证明** 充分性显然, 下证必要性. 假设 $v_1, v_2, \cdots, v_m$ 线性相关, 则存在不全为零的数 $k_1, k_2, \cdots, k_m$, 使得 $k_1v_1 + k_2v_2 + \cdots + k_mv_m = 0$. 不失一般性, 可设 $k_r \neq 0$ 且 $k_{r+1} = \cdots = k_m = 0$, 则 $v_r = -\frac{1}{k_r}(k_1v_1 + \cdots + k_{r-1}v_{r-1})$, 即有 $(k_1v_1 + \cdots + k_{r-1}v_{r-1} + v_r, v_j) = 0\,(j = 1, \cdots, r)$. 将此式展开为线性方程组:
> $$\begin{cases} (v_1, v_1)k_1 + \cdots + (v_1, v_{r-1})k_{r-1} + (v_1, v_r) = 0, \\ \vdots \\ (v_r, v_1)k_1 + \cdots + (v_r, v_{r-1})k_{r-1} + (v_r, v_r) = 0, \end{cases}$$
> 由线性方程组的求解理论可知, 系数矩阵的行列式 (即 $r$ 阶顺序主子式 $|G(v_1, \cdots, v_r)|$) 等于零. $\square$

> [!example]
> **例 9.7** 设 $A$ 是 $m \times n$ 实矩阵, 试对 $A$ 的 $m$ 个行向量用 Gram 矩阵重新证明例 3.76: $r(A'A) = r(A)$.

> [!proof]-
> **证明** 设 $A$ 的 $m$ 个行向量为 $\alpha_1, \alpha_2, \cdots, \alpha_m \in \mathbb{R}^n$ (都看成是列向量), 则 $A' = (\alpha_1, \alpha_2, \cdots, \alpha_m)$, 并且
> $$A'A = (\alpha_1, \alpha_2, \cdots, \alpha_m)'(\alpha_1, \alpha_2, \cdots, \alpha_m) = G(\alpha_1, \alpha_2, \cdots, \alpha_m).$$
> 注意到 $r(A)$ 等于 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的极大无关组中向量的个数, 由例 9.5 (2) 可知, 这也等于 Gram 矩阵 $G(\alpha_1, \alpha_2, \cdots, \alpha_m)$ 的秩, 即 $r(A'A)$. $\square$

> [!note]
> 请读者注意, 例 9.7 实际上是例 9.5 (2) 的推广. 当 $A$ 是实矩阵时, $A'A$ 一定是半正定阵 (可以是奇异阵); 当 $A$ 是复矩阵时, $A'\overline{A}$ 不一定是半正定阵. 因此在酉空间的情形, 例 9.7 的结论要修改为 $r(\overline{A}'A) = r(A)$, 其证明也留给读者完成. 另外, 也可以用向量组的 Gram 矩阵来证明例 3.80, 即 $r(A) \leq r(A'A) + m - n$. 事实上, 若设 $A = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为列分块, 则 $A'A = G(\alpha_1, \alpha_2, \cdots, \alpha_n)$, 再由例 8.72 即得结论. 这一结论的几何意义是: 在 $\mathbb{R}^m$ 中 $n$ 个向量的 Gram 矩阵的秩不小于这 $n$ 个向量的秩.

在引入了 Gram 矩阵的概念之后, 我们可以来探讨同一内积空间不同基的 Gram 矩阵之间的关系了, 先看如下简单情形.


> [!example]
> **例 9.8** 设 $V$ 为 $n$ 维内积空间, $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组标准正交基, 求证: 对任意的正交矩阵 $P$ (酉矩阵 $Q$), $\{u_1, u_2, \cdots, u_n\}$ 也是 $V$ 的一组标准正交基, 其中 $(u_1, u_2, \cdots, u_n) = (e_1, e_2, \cdots, e_n)P$ ($(u_1, u_2, \cdots, u_n) = (e_1, e_2, \cdots, e_n)Q$).

> [!proof]-
> **证明** 由例 9.3 可知, $\{u_1, u_2, \cdots, u_n\}$ 的 Gram 矩阵为 $P'I_nP = I_n$ ($\overline{Q}'I_nQ = I_n$), 再由 (9.2) 式可知 $(u_i, u_j) = \delta_{ij}$, 因此 $\{u_1, u_2, \cdots, u_n\}$ 是 $V$ 的一组标准正交基. $\square$

> [!note]
> 例 9.8 的结论反过来也成立, 即若从标准正交基 $\{e_1, e_2, \cdots, e_n\}$ 到 $\{u_1, u_2, \cdots, u_n\}$ 的过渡矩阵是正交矩阵 (酉矩阵), 则 $\{u_1, u_2, \cdots, u_n\}$ 也是一组标准正交基. 这两个结论合起来就是: $V$ 的两组标准正交基之间的过渡矩阵是正交矩阵 (酉矩阵). 这个结论的证明也可以利用 $\S 9.5$ 中保积同构的理论.

> [!example]
> **例 9.9** 设 $e, f$ 是欧氏空间 $V$ 中的两个向量且 $\|e\| = \|f\|$, 求证: 必存在正交变换 $\varphi$, 使得 $\varphi(e) = f$.

> [!proof]-
> **证明** 若 $e = f$, 则任取正交变换 $\varphi$ 即可; 若 $e \neq f$, 则 $e, f$ 是线性无关的二维子空间 $L(e, f)$ 中的两个向量. 将 $\frac{e-f}{\|e-f\|}$ 扩充为 $L(e, f)$ 的一组标准正交基 $\left\{\frac{e-f}{\|e-f\|}, g\right\}$, 定义 $\varphi_1$ 为 $L(e, f)$ 上关于与 $g$ 正交的向量的镜像变换, 则 $\varphi_1(e) = f$, $\varphi_1(f) = e$. 将 $L(e, f)$ 的标准正交基 $\left\{\frac{e-f}{\|e-f\|}, g\right\}$ 扩充为 $V$ 的标准正交基 $\left\{\frac{e-f}{\|e-f\|}, g, e_3, \cdots, e_n\right\}$, 定义 $V$ 上的线性变换 $\varphi$ 如下: $\varphi$ 限制在 $L(e, f)$ 上就是 $\varphi_1$, $\varphi$ 在 $e_i\,(i \geq 3)$ 上的作用定义为恒等变换, 则 $\varphi$ 就是所需正交变换. $\square$

> [!example]
> **例 9.10** 设 $u, v$ 是欧氏空间 $V$ 中两个不同的单位向量, 求证: 必存在镜像变换 $\varphi$, 使得 $\varphi(u) = v$.

> [!proof]-
> **证明** 令 $e = \frac{u-v}{\|u-v\|}$, 则 $\|e\| = 1$. 定义 $\varphi(x) = x - 2(x, e)e$, 容易验证 $\varphi$ 是镜像变换 (即 $\varphi$ 是正交变换且 $\det\varphi = -1$). 注意到 $(u, u) = (v, v) = 1$, 故 $\|u-v\|^2 = 2 - 2(u, v)$, 因此
> $$\varphi(u) = u - 2\frac{(u, u-v)}{\|u-v\|^2}(u-v) = u - \frac{2(1-(u, v))}{2-2(u, v)}(u-v) = u - (u-v) = v. \quad \square$$


> [!example]
> **例 9.11** 证明 $n$ 维欧氏空间中任一正交变换均可表示为不超过 $n+1$ 个镜像变换之积.

> [!proof]-
> **证明** 对维数 $n$ 用数学归纳法. 当 $n = 1$ 时, 正交变换 $\varphi$ 或是恒等变换, 或是 $\varphi(x) = -x$, 后者已是镜像变换, 而恒等变换可看成是零个镜像变换之积, 故结论成立. 假设结论对 $n-1$ 成立, 现设 $V$ 是 $n$ 维欧氏空间, $\varphi$ 是 $V$ 上的正交变换. 取 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 则 $\{f_1 = \varphi(e_1), f_2 = \varphi(e_2), \cdots, f_n = \varphi(e_n)\}$ 也是 $V$ 的标准正交基. 由例 9.9 可知, 存在镜像变换 $\psi$, 使得 $\psi(e_1) = f_1$. 注意到 $\psi$ 是正交变换, 故 $\psi^{-1}$ 也是正交变换, 且 $\psi^{-1}(f_1) = e_1$. 考虑正交变换 $\psi^{-1}\varphi$, 它将 $e_1$ 映为 $e_1$, 于是 $V_1 = L(e_1)^{\perp}$ 是 $\psi^{-1}\varphi$ 不变的 $n-1$ 维子空间, 将 $\psi^{-1}\varphi$ 限制在 $V_1$ 上仍然是正交变换. 由归纳假设, $\psi^{-1}\varphi|_{V_1} = \psi_1\psi_2\cdots\psi_k$, 其中 $k \leq n$, 且每个 $\psi_i$ 都是 $V_1$ 上的镜像变换. 我们可将 $\psi_i$ 扩张到全空间 $V$ 上, 满足 $\psi_i(e_1) = e_1$, 不难验证得到的线性变换都是 $V$ 上的镜像变换 (仍记为 $\psi_i$). 最后注意到 $\psi^{-1} = \psi$, 故
> $$\varphi = \psi\psi_1\cdots\psi_k,$$
> 即 $\varphi$ 是 $k+1 \leq n+1$ 个镜像变换之积. $\square$

### § 9.3 Gram-Schmidt 正交化方法和正交补空间

Gram-Schmidt 方法是内积空间中最重要的方法之一. 其意义在于: 可将任一组线性无关的向量变成一组两两正交的向量, 并且这两个向量组是等价的. 特别地, 对有限维内积空间的任一组基, 都可通过 Gram-Schmidt 方法找到一组标准正交基与之等价. 由于标准正交基具有良好的性质, 这就给许多问题的讨论和研究带来了极大的便利. 本节将探讨 Gram-Schmidt 方法的诸多应用, 包括 QR 分解, Cholesky 分解以及正定阵的一些等价刻画等. 最后还会讨论有关正交补空间的一些应用.

#### 9.3.1 Gram-Schmidt 方法

设 $V$ 是 $n$ 维内积空间, $u_1, u_2, \cdots, u_n$ 是 $V$ 中 $n$ 个线性无关的向量. 我们用归纳法来定义向量 $v_k\,(1 \leq k \leq n)$. 假设 $v_1, \cdots, v_{k-1}$ 已经定义好, 现来定义 $v_k$. 令


$$v_k = u_k - \sum_{j=1}^{k-1}\frac{(u_k, v_j)}{\|v_j\|^2}v_j.$$

若 $v_j = 0$, 则令该项系数为 0. 容易验证 $v_1, v_2, \cdots, v_n$ 是一组两两正交的向量. 进一步, 将每个 $v_k$ 单位化, 即令 $w_k = \frac{v_k}{\|v_k\|}$, 则 $\{w_1, w_2, \cdots, w_n\}$ 就是一组标准正交基.

上述过程, 把 $\{u_1, u_2, \cdots, u_n\}$ 变成一组两两正交的向量 $\{v_1, v_2, \cdots, v_n\}$, 并且 $v_k$ 或者是零向量或者是单位向量.

我们用数学归纳法来定义上述向量 $v_k\,(1 \leq k \leq n)$. 假设 $v_1, \cdots, v_{k-1}$ 已经定义好, 现来定义 $v_k$. 令

$$v_k = u_k - \sum_{j=1}^{k-1}(u_k, w_j)w_j.$$

若 $v_k = 0$, 则令 $w_k = 0$; 若 $v_k \neq 0$, 则令 $w_k = \frac{v_k}{\|v_k\|}$. 容易验证 $\{w_1, w_2, \cdots, w_n\}$ 是一组两两正交的向量, $w_k$ 或者是零向量或者是单位向量, 并且满足:

$$u_k = \sum_{j=1}^{k-1}(u_k, w_j)w_j + \|v_k\|w_k, \quad 1 \leq k \leq n. \tag{9.4}$$

由上式可得

$$A = (u_1, u_2, \cdots, u_n) = (w_1, w_2, \cdots, w_n)R, \tag{9.5}$$

其中 $R$ 是一个主对角元全为 $\|v_1\|, \|v_2\|, \cdots, \|v_n\|$ 的上三角矩阵, 且主对角元全大于等于零, 并且由 (9.4) 式可知, 如果 $v_k = 0$, 则 $R$ 的第 $k$ 列元素全为零.

#### 9.3.2 QR 分解

设 $A$ 是 $n$ 阶实 (复) 矩阵, 则存在 $n$ 阶正交矩阵 (酉矩阵) $Q$ 和主对角元全大于等于零的上三角矩阵 $R$, 使得 $A = QR$.

> [!proof]-
> **证明** 设 $A = (u_1, u_2, \cdots, u_n)$ 为列分块, 其中 $u_i$ 是 $A$ 的第 $i$ 个列向量. 对 $u_1, u_2, \cdots, u_n$ 用 Gram-Schmidt 正交化方法, 由 (9.5) 式即得 $A = QR$. 当 $A$ 为实矩阵时, $Q$ 是正交矩阵; 当 $A$ 为复矩阵时, $Q$ 是酉矩阵. $\square$

> [!note]
> QR 分解中 $R$ 的主对角元都是非负实数. 进一步可以证明: 当 $A$ 为可逆矩阵时, 这样的 QR 分解是唯一的.

#### 9.3.3 Cholesky 分解

设 $A$ 为 $n$ 阶正定实对称矩阵 (正定 Hermite 矩阵), 则存在唯一的 $n$ 阶主对角元全大于零的上三角矩阵 $C$, 使得 $A = C'C$ ($A = \overline{C}'C$). 这个分解称为 $A$ 的 **Cholesky 分解**.


> [!proof]-
> **证明** 这里只证明实的情形, 复的情形完全类似. 因为 $A$ 正定, 故存在唯一的 $n$ 阶主对角元全大于零的上三角矩阵 $C$, 使得 $A = C'C$. 唯一性的证明如下: 设 $A = C'C = D'D$, 其中 $C, D$ 都是主对角元全大于零的上三角矩阵, 则 $A = C'C = D'D$ 意味着
> $$C'D'^{-1} = C^{-1}D',$$
> 上式左边是下三角矩阵, 右边是上三角矩阵, 因此它们都等于某个对角矩阵. 又由于 $C, D$ 的主对角元全大于零, 容易验证这个对角矩阵就是单位矩阵, 于是 $C = D$. $\square$

> [!note]
> 事实上, 正定阵的 Cholesky 分解和非异阵的 QR 分解从某种意义上看是等价的. 上面的证明即是由非异阵的 QR 分解推出正定阵的 Cholesky 分解. 反之, 对任一非异实矩阵 $A$, $A'A$ 是正定阵, 设 $A'A = R'R$ 是 Cholesky 分解, 其中 $R$ 是主对角元全大于零的上三角矩阵. 令 $Q = AR^{-1}$, 则 $Q'Q = (AR^{-1})'(AR^{-1}) = (R')^{-1}(A'A)R^{-1} = (R')^{-1}(R'R)R^{-1} = I_n$, 即 $Q$ 是正交矩阵, 从而 $A = QR$ 是 QR 分解. 从几何的层面上看, 上述两种矩阵分解都等价于 Gram-Schmidt 正交化和标准化过程, 所以它们之间的等价性是自然的.

> [!example]
> **例 9.12 和例 8.78** 证明下列关于 $n$ 阶实对称矩阵 $A = (a_{ij})$ 的命题等价:
> (1) $A$ 是正定阵 (半正定阵);
> (2) 存在主对角元全等于 1 的上三角矩阵 $B$ 和主对角元全为正数 (非负实数) 的对角矩阵 $D$, 使得 $A = B'DB$;
> (3) 存在主对角元全为正数 (非负实数) 的上三角矩阵 $C$, 使得 $A = C'C$.

> [!proof]-
> **证法 2** 因为半正定阵 $A$ 是正定阵当且仅当 $A$ 是可逆矩阵, 所以由可逆性和例 8.78 的结论很容易推出例 9.12 的结论, 下面只证明例 9.12.
>
> $(1) \Rightarrow (3)$, $(2)$: 因为 $A$ 半正定, 故存在实矩阵 $P$, 使得 $A = P'P$. 设 $P = QC$ 是 $QR$ 分解, 其中 $Q$ 是正交矩阵, $C$ 是主对角元全大于等于零的上三角矩阵, 则 $A = (QC)'(QC) = C'(Q'Q)C = C'C$. 由例 9.13 的证明可知, 若 $C = (c_{ij})$ 的第 $(i, i)$ 元素 $c_{ii} = 0$, 则 $C$ 的第 $i$ 行元素全为零. 令 $D = \text{diag}\{c_{11}^2, c_{22}^2, \cdots, c_{nn}^2\}$, 且 $B = (b_{ij})$ 定义为: 若 $c_{ii} > 0$, 则 $b_{ij} = \frac{c_{ij}}{c_{ii}}\,(1 \leq j \leq n)$; 若 $c_{ii} = 0$, 则 $b_{ij} = \delta_{ij}\,(1 \leq j \leq n)$, 其中 $\delta_{ij}$ 是 Kronecker 符号. 容易验证 $B$ 是主对角元全等于 1 的上三角矩阵且 $A = B'DB$.
>
> $(2) \Rightarrow (1)$ 和 $(3) \Rightarrow (1)$ 都是显然的. $\square$


在内积空间中使用标准正交基通常可以简化问题的讨论. 例如, 因为标准正交基的 Gram 矩阵是单位矩阵 $I_n$, 故通过坐标向量表示内积的 (9.2) 式就变成了列向量空间中的标准内积, 这为我们讨论进一步的问题 (如保积同构、伴随算子等) 提供了方便. 下面的例题推广了例 9.4, 利用标准正交基可以简化其证明过程.

> [!example]
> **例 9.13** 设 $V$ 是 $n$ 维欧氏空间, $A$ 是 $m$ 阶半正定实对称矩阵且 $r(A) = r \leq n$, 求证: 必存在 $V$ 上的向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$, 使得其 Gram 矩阵就是 $A$.

> [!proof]-
> **证明** 采用与例 9.3 类似的讨论可证明: 若向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 与 $\{\beta_1, \beta_2, \cdots, \beta_k\}$ 满足 $\alpha_j = \sum_{i=1}^k c_{ij}\beta_i\,(1 \leq j \leq m)$, 即 $(\alpha_1, \alpha_2, \cdots, \alpha_m) = (\beta_1, \beta_2, \cdots, \beta_k)C$, 其中 $C = (c_{ij})_{k \times m}$, 则有
> $$G(\alpha_1, \alpha_2, \cdots, \alpha_m) = C'G(\beta_1, \beta_2, \cdots, \beta_k)C.$$
> 因为 $A$ 是秩为 $r$ 的 $m$ 阶半正定阵, 故由第 8 章解答题 12 可知, 存在 $r \times m$ 实矩阵 $T$, 使得 $A = T'T$. 取 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 令
> $$(\alpha_1, \alpha_2, \cdots, \alpha_m) = (e_1, e_2, \cdots, e_r)T,$$
> 则由上面的结论即得
> $$G(\alpha_1, \alpha_2, \cdots, \alpha_m) = T'G(e_1, e_2, \cdots, e_r)T = T'I_rT = T'T = A. \quad \square$$

下面 3 个例题反映了 Gram-Schmidt 正交化方法对向量组的 Gram 矩阵的影响.

> [!example]
> **例 9.14** 证明: 若用 Gram-Schmidt 方法将线性无关的向量组 $u_1, u_2, \cdots, u_m$ 变成正交向量组 $v_1, v_2, \cdots, v_m$, 则这两组向量的 Gram 矩阵的行列式值不变, 即
> $$|G(u_1, u_2, \cdots, u_m)| = |G(v_1, v_2, \cdots, v_m)| = \|v_1\|^2\|v_2\|^2\cdots\|v_m\|^2.$$

> [!proof]-
> **证明** 由 Gram-Schmidt 正交化过程可得
> $$(u_1, u_2, \cdots, u_m) = (v_1, v_2, \cdots, v_m)B,$$
> 其中 $B$ 是一个主对角元全为 1 的上三角矩阵, 再由例 9.13 的证明过程可得
> $$G(u_1, u_2, \cdots, u_m) = B'G(v_1, v_2, \cdots, v_m)B.$$
> 注意到 $G(v_1, v_2, \cdots, v_m)$ 是主对角元分别为 $\|v_1\|^2, \|v_2\|^2, \cdots, \|v_m\|^2$ 的对角矩阵, 故上式两边同取行列式即得结论. $\square$


> [!example]
> **例 9.15** 证明下列不等式:
> $$0 \leq |G(u_1, u_2, \cdots, u_m)| \leq \|u_1\|^2\|u_2\|^2\cdots\|u_m\|^2,$$
> 后一个等号成立的充要条件是 $u_i$ 两两正交或者某个 $u_i = 0$.

> [!proof]-
> **证明** 由例 9.5 可知 $G(u_1, u_2, \cdots, u_m)$ 是一个半正定实对称矩阵, 故由例 8.26 可知 $|G(u_1, u_2, \cdots, u_m)| \geq 0$. 对第二个不等式, 我们分情况讨论. 若 $G(u_1, u_2, \cdots, u_m)$ 是非正定的半正定阵, 则 $0 = |G(u_1, u_2, \cdots, u_m)| \leq \|u_1\|^2\|u_2\|^2\cdots\|u_m\|^2$, 并且等号成立的充要条件是某个 $u_i = 0$. 若 $G(u_1, u_2, \cdots, u_m)$ 是正定阵, 则由例 9.5 可知 $u_1, u_2, \cdots, u_m$ 线性无关. 由 Gram-Schmidt 正交化过程可得
> $$v_i = u_i - \sum_{j=1}^{i-1}\frac{(u_i, v_j)}{\|v_j\|^2}v_j.$$
> 再由勾股定理可得 $\|u_i\|^2 = \|v_i\|^2 + \sum_{j=1}^{i-1}\frac{(u_i, v_j)^2}{\|v_j\|^2} \geq \|v_i\|^2 > 0$. 最后由例 9.14 可得
> $$|G(u_1, u_2, \cdots, u_m)| = \|v_1\|^2\|v_2\|^2\cdots\|v_m\|^2 \leq \|u_1\|^2\|u_2\|^2\cdots\|u_m\|^2,$$
> 等号成立当且仅当 $\|v_i\|^2 = \|u_i\|^2\,(1 \leq i \leq m)$, 这也当且仅当 $v_i = u_i\,(1 \leq i \leq m)$, 从而当且仅当 $u_i$ 两两正交. $\square$

> [!example]
> **例 9.16** 设 $A = (a_{ij})$ 是 $n$ 阶实矩阵, 证明下列 Hadamard 不等式:
> $$|A|^2 \leq \prod_{j=1}^n\sum_{i=1}^n a_{ij}^2.$$

> [!proof]-
> **证明** 设 $u_1, u_2, \cdots, u_n$ 是 $A$ 的 $n$ 个列向量, 则 $G = A'A$ 可以看成是 $u_1, u_2, \cdots, u_n$ 在 $\mathbb{R}^n$ 的标准内积下的 Gram 矩阵. 由例 9.15 可得
> $$|A|^2 = |A'A| = |G| \leq \prod_{j=1}^n\|u_j\|^2 = \prod_{j=1}^n\sum_{i=1}^n a_{ij}^2. \quad \square$$

> [!note]
> (1) 例 9.15 和例 9.16 还可以直接由例 8.68 得到. 另外, 利用 Hadamard 不等式可以证明如下结论: 若 $n$ 阶实矩阵 $A = (a_{ij})$ 满足 $|a_{ij}| \leq M\,(1 \leq i, j \leq n)$, 则 $|A| \leq M^n \cdot n^{\frac{n}{2}}$. 这些证明的细节留给读者自行完成.
>
> (2) 例 9.14 和例 9.15 的结论对复内积空间也成立, 不过证明中有两个细微之处需要修改, 请读者自行完成. 因此对 $n$ 阶复矩阵 $A = (a_{ij})$, 用相同的方法可以证明:
> $$|\det A|^2 \leq \prod_{j=1}^n\sum_{i=1}^n |a_{ij}|^2.$$

有限维内积空间 $V$ 是任一子空间 $U$ 与其正交补空间 $U^{\perp}$ 的正交直和, 因此我们经常利用正交补空间配合数学归纳法证明关于内积空间以及线性算子的某些重要命题. 关于正交补空间的验证, 常常利用有限维空间中的维数关系, 它可以使证明更加简洁. 我们先来看正交补空间性质的两道例题.


> [!example]
> **例 9.17** 设 $U_1, U_2, U$ 是 $n$ 维内积空间 $V$ 的子空间, 求证:
> (1) $(U^{\perp})^{\perp} = U$;
> (2) $(U_1 + U_2)^{\perp} = U_1^{\perp} \cap U_2^{\perp}$;
> (3) $(U_1 \cap U_2)^{\perp} = U_1^{\perp} + U_2^{\perp}$;
> (4) $V^{\perp} = 0$, $0^{\perp} = V$.

> [!proof]-
> **证明** (1) 因为 $V = U \perp U^{\perp}$, 故 $\dim(U^{\perp})^{\perp} = n - \dim U^{\perp} = \dim U$. 另一方面, 显然有 $U \subseteq (U^{\perp})^{\perp}$, 因此 $(U^{\perp})^{\perp} = U$.
>
> (2) 显然 $(U_1 + U_2)^{\perp} \subseteq U_1^{\perp}$, $(U_1 + U_2)^{\perp} \subseteq U_2^{\perp}$, 于是 $(U_1 + U_2)^{\perp} \subseteq U_1^{\perp} \cap U_2^{\perp}$. 反之, 对任一 $\alpha \in U_1^{\perp} \cap U_2^{\perp}$, $\beta \in U_1 + U_2$, 记 $\beta = \beta_1 + \beta_2$, 其中 $\beta_1 \in U_1$, $\beta_2 \in U_2$, 则
> $$(\alpha, \beta) = (\alpha, \beta_1 + \beta_2) = (\alpha, \beta_1) + (\alpha, \beta_2) = 0,$$
> 故 $\alpha \in (U_1 + U_2)^{\perp}$, 于是 $U_1^{\perp} \cap U_2^{\perp} \subseteq (U_1 + U_2)^{\perp}$. 因此 $(U_1 + U_2)^{\perp} = U_1^{\perp} \cap U_2^{\perp}$.
>
> (3) 由 (1) 及 (2), 有 $(U_1^{\perp} + U_2^{\perp})^{\perp} = (U_1^{\perp})^{\perp} \cap (U_2^{\perp})^{\perp} = U_1 \cap U_2$.
>
> (4) 显然成立. $\square$

> [!example]
> **例 9.18** 设 $S$ 是 $n$ 维内积空间 $V$ 的子集, 证明:
> (1) $S^{\perp} = \{\alpha \in V \mid (\alpha, S) = 0\}$ 是 $V$ 的子空间;
> (2) $(S^{\perp})^{\perp}$ 等于由 $S$ 生成的子空间.

> [!proof]-
> **证明** (1) 显然成立, 下证明 (2). 设 $S$ 生成的子空间为 $U$, 一方面有 $U^{\perp} \subseteq S^{\perp}$. 另一方面, 对任一 $v \in S^{\perp}$, $u \in U$, 将 $u$ 表示为 $S$ 中向量的线性组合, $u = a_1x_1 + \cdots + a_kx_k$, 其中 $x_i \in S$. 由 $(x_i, v) = 0$ 可得 $(u, v) = 0$, 于是 $v \in U^{\perp}$, 从而 $S^{\perp} \subseteq U^{\perp}$, 因此 $S^{\perp} = U^{\perp}$. 最后由例 9.17 (1) 可知 $(S^{\perp})^{\perp} = (U^{\perp})^{\perp} = U$. $\square$

下面 4 个例题是正交补空间的一些应用, 其中例 9.19 与例 3.103, 例 9.20 与例 3.99 之间有着密切的联系.

> [!example]
> **例 9.19** 设 $A$ 为 $m \times n$ 实矩阵, 齐次线性方程组 $Ax = 0$ 的解空间为 $U$, 求 $U^{\perp}$ 适合的线性方程组.

> [!proof]-
> **解** 设 $A$ 的秩为 $r$, 则解空间 $U$ 是 $\mathbb{R}^n$ (取标准内积) 的 $n-r$ 维子空间. 取 $U$ 的一组基 $\eta_1, \cdots, \eta_{n-r}$, 令 $B = (\eta_1, \cdots, \eta_{n-r})$ 为 $n \times (n-r)$ 实矩阵, 则由例 9.18 (2) 的证明可得 $U^{\perp} = \{\eta_1, \cdots, \eta_{n-r}\}^{\perp}$, 因此 $U^{\perp}$ 适合的线性方程组为 $B'x = 0$. $\square$


> [!example]
> **例 9.20** 设 $A$ 为 $m \times n$ 实矩阵, 求证: 非齐次线性方程组 $Ax = \beta$ 有解的充要条件是向量 $\beta$ 属于齐次线性方程组 $A'y = 0$ 解空间的正交补空间.

> [!proof]-
> **证明** 设 $A = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为列分块, $U = L(\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为 $\mathbb{R}^m$ (取标准内积) 的子空间, 则 $Ax = \beta$ 有解当且仅当 $\beta \in U$. 另一方面, $A'y = 0$ 的解空间即为 $\{y \in \mathbb{R}^m \mid (\alpha_i, y) = 0, 1 \leq i \leq n\} = U^{\perp}$, 注意到 $U = (U^{\perp})^{\perp}$, 故结论得证. $\square$

> [!example]
> **例 9.21** 设 $V$ 为 $n$ 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), $V_1, V_2$ 分别为 $n$ 阶实对称矩阵全体和 $n$ 阶实反对称矩阵全体构成的子空间, 求证:
> $$V = V_1 \perp V_2.$$

> [!proof]-
> **证明** 一方面, 由例 3.48 可知 $V = V_1 \oplus V_2$. 另一方面, 对任意的 $A \in V_1$, $B \in V_2$, 由迹的交换性可得
> $$(A, B) = \text{tr}(AB') = -\text{tr}(AB) = -\text{tr}(BA) = -\text{tr}(BA') = -(B, A) = -(A, B),$$
> 于是 $(A, B) = 0$, 从而 $V_1 \perp V_2$, 因此 $V = V_1 \perp V_2$. $\square$

例 9.11 的证法 2 设 $V_k$ 是由次数小于等于 $k$ 的实系数多项式构成的子空间, $w_k(x) = \frac{u_k(x)}{m_k}\,(0 \leq k \leq n)$, 同证法 1 的计算可知这是一组两两正交的单位向量.

下面用归纳法来证明结论. 当 $k = 0$ 时结论显然成立, 假设从 $1, x, \cdots, x^k$ 出发, 经过 Gram-Schmidt 正交化方法得到 $V_k$ 的一组标准正交基为 $w_0(x), w_1(x), \cdots, w_k(x)$. 现设 $x^{k+1}$ 经过 Gram-Schmidt 正交化方法得到的单位向量为 $\tilde{w}_{k+1}(x)$, 满足 $(w_i(x), \tilde{w}_{k+1}(x)) = 0\,(0 \leq i \leq k)$, 于是 $V_{k+1} = V_k \perp L(w_{k+1}(x)) = V_k \perp L(\tilde{w}_{k+1}(x))$. 因此 $L(w_{k+1}(x)) = L(\tilde{w}_{k+1}(x))$ 是 $V_k$ 在 $V_{k+1}$ 中的正交补空间, 注意到 $w_{k+1}(x)$ 和 $\tilde{w}_{k+1}(x)$ 都是范数为 1 且首项系数为正数的 $k+1$ 次多项式, 故 $\tilde{w}_{k+1}(x) = w_{k+1}(x)$, 结论得证. $\square$


### § 9.4 伴 随

伴随是内积空间理论中最重要的概念之一. 在处理有关伴随的问题时, 除了运用直接验证法外, 也常常采用矩阵方法. 如果线性变换 $\varphi$ 在一组标准正交基下的表示矩阵为 $A$, 则其伴随 $\varphi^*$ 在同一组标准正交基下的表示矩阵为 $A'$ (欧氏空间) 或 $\overline{A}'$ (酉空间). 这使我们能用矩阵来讨论有关问题, 例 9.23, 例 9.24 和例 9.25 就是非常典型的例子. 例 9.28 是正规算子及其伴随的基本性质, 它在后面有重要的用途.

> [!example]
> **例 9.22** 设 $V$ 是有限维内积空间, $\varphi, \psi$ 是 $V$ 上的线性变换, $c$ 是常数, 求证:
> (1) $(\varphi + \psi)^* = \varphi^* + \psi^*$;
> (2) $(c\varphi)^* = \overline{c}\varphi^*$;
> (3) $(\varphi\psi)^* = \psi^*\varphi^*$;
> (4) $(\varphi^*)^* = \varphi$;
> (5) 若 $\varphi$ 可逆, 则 $\varphi^*$ 也可逆, 此时 $(\varphi^*)^{-1} = (\varphi^{-1})^*$.

> [!proof]-
> **证法 1** 设 $\varphi, \psi$ 在 $V$ 的一组标准正交基下的表示矩阵为 $A, B$, 则 $\varphi^*, \psi^*$ 在同一组标准正交基下的表示矩阵为 $\overline{A}', \overline{B}'$. 由线性变换和表示矩阵的一一对应, 我们只要验证矩阵的共轭转置满足上述 5 条性质即可, 而这些都是显然的.
>
> **证法 2** 我们也可以直接用伴随的定义来证明, 下面以 (3) 为例, 其余的留给读者自行验证. 对任意的 $\alpha, \beta \in V$, 有
> $$((\varphi\psi)(\alpha), \beta) = (\varphi(\psi(\alpha)), \beta) = (\psi(\alpha), \varphi^*(\beta)) = (\alpha, \psi^*(\varphi^*(\beta))) = (\alpha, (\psi^*\varphi^*)(\beta)),$$
> 由伴随的唯一性即得 $(\varphi\psi)^* = \psi^*\varphi^*$. $\square$

> [!example]
> **例 9.23** 设 $\varphi$ 是有限维内积空间 $V$ 上的线性变换, 求证: 若 $\varphi$ 的全体特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 则 $\varphi^*$ 的全体特征值为 $\overline{\lambda_1}, \overline{\lambda_2}, \cdots, \overline{\lambda_n}}$.

> [!proof]-
> **证明** 取 $V$ 的一组标准正交基, 设 $A$ 是 $\varphi$ 的表示矩阵, 则无论 $V$ 是酉空间还是欧氏空间, $\varphi^*$ 的表示矩阵总可写为 $\overline{A}'$. 由假设
> $$|\lambda I_n - A| = (\lambda - \lambda_1)(\lambda - \lambda_2)\cdots(\lambda - \lambda_n),$$


令 $\lambda = \overline{\mu}$, 则有
$$\begin{aligned} |\lambda I_n - \overline{A}'| &= |\overline{\mu}I_n - \overline{A}| = \overline{|\mu I_n - A|} = \overline{(\mu - \lambda_1)(\mu - \lambda_2)\cdots(\mu - \lambda_n)} \\ &= (\overline{\mu} - \overline{\lambda_1})(\overline{\mu} - \overline{\lambda_2})\cdots(\overline{\mu} - \overline{\lambda_n}) = (\lambda - \overline{\lambda_1})(\lambda - \overline{\lambda_2})\cdots(\lambda - \overline{\lambda_n}), \end{aligned}$$
故结论成立. $\square$

> [!example]
> **例 9.24** 设 $\varphi$ 是有限维内积空间 $V$ 上的线性变换, $\varphi$ 的极小多项式为 $g(x)$, 证明: $\varphi^*$ 的极小多项式为 $\overline{g}(x)$, 这里 $\overline{g}(x)$ 的系数等于 $g(x)$ 系数的共轭.

> [!proof]-
> **证明** 取 $V$ 的一组标准正交基, 设 $A$ 是 $\varphi$ 的表示矩阵, 则无论 $V$ 是酉空间还是欧氏空间, $\varphi^*$ 的表示矩阵总可写为 $\overline{A}'$. 注意到 $g(A) = O$ 当且仅当 $\overline{g}(\overline{A}') = O$, 故结论成立. $\square$

下面的例题提供了处理内积空间中相关问题的归纳基础.

> [!example]
> **例 9.25** 设 $\varphi$ 是内积空间 $V$ 上的线性变换, 若 $U$ 是 $\varphi$ 的不变子空间, 求证: $U^{\perp}$ 是 $\varphi^*$ 的不变子空间.

> [!proof]-
> **证明** 任取 $\alpha \in U$, $\beta \in U^{\perp}$, 由 $(\alpha, \varphi^*(\beta)) = (\varphi(\alpha), \beta) = 0$ 即得结论. $\square$

> [!example]
> **例 9.26** 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 求证: $\text{Im}\,\varphi^* = (\text{Ker}\,\varphi)^{\perp}$.

> [!proof]-
> **证明** 由例 9.18 可知, 只要证明 $\text{Ker}\,\varphi = (\text{Im}\,\varphi^*)^{\perp}$ 即可. 一方面, 任取 $\alpha \in \text{Ker}\,\varphi$, 则对任一 $\beta \in V$ 有 $(\alpha, \varphi^*(\beta)) = (\varphi(\alpha), \beta) = (0, \beta) = 0$, 即 $\alpha \in (\text{Im}\,\varphi^*)^{\perp}$, 于是 $\text{Ker}\,\varphi \subseteq (\text{Im}\,\varphi^*)^{\perp}$. 另一方面, 任取 $\alpha \in (\text{Im}\,\varphi^*)^{\perp}$, 则对任一 $\beta \in V$ 有 $0 = (\alpha, \varphi^*(\beta)) = (\varphi(\alpha), \beta)$, 令 $\beta = \varphi(\alpha)$ 或由例 9.2 即得 $\varphi(\alpha) = 0$, 即 $\alpha \in \text{Ker}\,\varphi$, 于是 $(\text{Im}\,\varphi^*)^{\perp} \subseteq \text{Ker}\,\varphi$, 因此结论得证. $\square$

> [!example]
> **例 9.27** 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的正规算子, $\alpha$ 是 $V$ 中的非零向量, 求证: $\alpha$ 是 $\varphi$ 属于特征值 $\lambda$ 的特征向量的充要条件是 $\alpha$ 是 $\varphi^*$ 属于特征值 $\overline{\lambda}$ 的特征向量.

> [!proof]-
> **证明** 先证明对任意的 $\alpha \in V$, 有 $\|\varphi(\alpha)\| = \|\varphi^*(\alpha)\|$. 因为 $\varphi$ 是正规算子, 故
> $$\|\varphi(\alpha)\|^2 = (\varphi(\alpha), \varphi(\alpha)) = (\alpha, \varphi^*\varphi(\alpha)) = (\alpha, \varphi\varphi^*(\alpha)) = (\varphi^*(\alpha), \varphi^*(\alpha)) = \|\varphi^*(\alpha)\|^2.$$
> 又因为 $(\lambda I - \varphi)^* = \overline{\lambda}I - \varphi^*$, 且 $(\lambda I - \varphi)(\overline{\lambda}I - \varphi^*) = (\overline{\lambda}I - \varphi^*)(\lambda I - \varphi)$, 所以 $\lambda I - \varphi$ 也是正规算子. 于是
> $$\|(\lambda I - \varphi)(\alpha)\| = \|(\overline{\lambda}I - \varphi^*)(\alpha)\|$$


对任意的 $\alpha$ 成立, 从而 $(\lambda I - \varphi)(\alpha) = 0$ 当且仅当 $(\overline{\lambda}I - \varphi^*)(\alpha) = 0$. $\square$

下面我们来看几个求伴随算子的具体例子.

> [!example]
> **例 9.28** 设 $V$ 是由 $n$ 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(A) = PAQ$, 其中 $P, Q \in V$.
> (1) 求 $\varphi$ 的伴随 $\varphi^*$;
> (2) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是正交算子的充要条件是 $P'P = cI_n$, $QQ' = c^{-1}I_n$, 其中 $c$ 是正实数;
> (3) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是自伴随算子的充要条件是 $P' = \pm P$, $Q' = \pm Q$;
> (4) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是正规算子的充要条件是 $P, Q$ 都是正规矩阵.

> [!proof]-
> **解** (1) 对任意的 $A, B \in V$, 由迹的交换性可得
> $$(\varphi(A), B) = \text{tr}(PAQB') = \text{tr}(AQB'P) = \text{tr}(A(P'BQ')') = (A, P'BQ').$$
> 定义 $V$ 上的线性变换 $\psi$ 为 $\psi(B) = P'BQ'$, 则上式即为 $(\varphi(A), B) = (A, \psi(B))$. 由伴随的唯一性即得 $\varphi^* = \psi$.
>
> (2) 若 $\varphi$ 是正交算子, 即 $\varphi^*\varphi = I_V$, 则由 (1) 可知, $P'PAQQ' = A$ 对任意的 $A \in V$ 成立. 由 $Q$ 的非异性可得 $P'PA = A(QQ')^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_n$ 可得 $P'P = (QQ')^{-1}$, 因此上式即言 $P'P$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$, 使得 $P'P = cI_n$. 又 $P$ 可逆, 故 $P'P$ 正定, 从而 $c > 0$, 由此即得必要性. 充分性显然成立.
>
> (3) 若 $\varphi$ 是自伴随算子, 即 $\varphi^* = \varphi$, 则由 (1) 可知, $P'AQ' = PAQ$ 对任意的 $A \in V$ 成立. 由 $P, Q$ 的非异性可得 $P^{-1}P'A = AQ(Q')^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_n$ 可得 $P^{-1}P' = Q(Q')^{-1}$, 因此上式即言 $P^{-1}P'$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$, 使得 $P^{-1}P' = cI_n$, 即 $P' = cP$. 此式转置后可得 $P = cP' = c^2P$, 又 $P$ 可逆, 故 $c^2 = 1$, 从而 $c = \pm 1$, 由此即得必要性. 充分性显然成立.
>
> (4) 若 $\varphi$ 是正规算子, 即 $\varphi^*\varphi = \varphi\varphi^*$, 则由 (1) 可知, $P'PAQQ' = PP'AQ'Q$ 对任意的 $A \in V$ 成立. 由 $P, Q$ 的非异性可得 $(PP')^{-1}P'PA = AQ'Q(QQ')^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_n$ 可得 $(PP')^{-1}P'P = Q'Q(QQ')^{-1}$, 因此上式即言 $(PP')^{-1}P'P$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$, 使得 $(PP')^{-1}P'P = cI_n$, 即 $P'P = cPP'$. 上式两边同时取迹, 由于 $P$ 可逆, 故 $\text{tr}(P'P) = \text{tr}(PP') > 0$, 从而 $c = 1$, 由此即得必要性. 充分性显然成立. $\square$


> [!example]
> **第 2 章解答题 15** 设 $A = (a_{ij})$ 为 $n$ 阶方阵, 定义函数 $f(A) = \sum_{i,j=1}^n a_{ij}^2$. 设 $P$ 为 $n$ 阶可逆矩阵, 使得对任意的 $n$ 阶方阵 $A$ 成立: $f(PAP^{-1}) = f(A)$. 证明: 存在非零常数 $c$, 使得 $P'P = cI_n$.

> [!proof]-
> **证法 2** 我们把数域限定在实数域上, 并取 $V = M_n(\mathbb{R})$ 上的 Frobenius 内积, 则 $f(A) = \sum_{i,j=1}^n a_{ij}^2 = \|A\|^2$. 设 $\varphi(A) = PAP^{-1}$ 为 $V$ 上的线性变换, 则题目条件可改写为 $\|\varphi(A)\| = \|A\|$ 对任意的 $A \in V$ 成立, 于是 $\varphi$ 是正交算子, 从而由例 9.28 (2) 即得结论. $\square$

> [!example]
> **例 9.29** 设 $V$ 是 $n$ 阶实对称矩阵构成的欧氏空间 (取 Frobenius 内积).
> (1) 求出 $V$ 的一组标准正交基;
> (2) 设 $T$ 是一个 $n$ 阶实矩阵, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(A) = T'AT$, 求证: $\varphi$ 是自伴随算子的充要条件是 $T$ 为对称矩阵或反对称矩阵.

> [!proof]-
> **证明** (1) 记 $E_{ij}$ 为 $n$ 阶基础矩阵, 则容易验证下列矩阵构成了 $V$ 的一组标准正交基:
> $$E_{ii}\,(1 \leq i \leq n); \quad \frac{1}{\sqrt{2}}(E_{ij} + E_{ji})\,(1 \leq i < j \leq n).$$
>
> (2) 先证充分性. 若 $T$ 为对称矩阵或反对称矩阵, 则由例 9.28 可知, $\varphi^*(A) = (T')'AT' = TAT' = T'AT = \varphi(A)$ 对任一 $A \in V$ 成立, 故 $\varphi = \varphi^*$ 是自伴随算子.
>
> 再证必要性. 若 $\varphi$ 是自伴随算子, 则同上理由可得 $TAT' = T'AT$ 对任一 $A \in V$ 成立. 设 $T = (t_{ij})$, 令 $A = E_{ij} + E_{ji}$ 代入上述等式可得
> $$t_{ik}t_{jl} + t_{il}t_{jk} = t_{ki}t_{lj} + t_{li}t_{kj} \tag{9.6}$$
> 对一切 $i, j, k, l$ 都成立. 令 $k = l$, 则可得
> $$t_{ik}t_{jk} = t_{ki}t_{kj}$$
> 对一切 $i, j, k$ 都成立. 进一步令 $i = j$, 则可得 $t_{ik}^2 = t_{ki}^2$ 对一切 $i, k$ 都成立, 因此 $t_{ik} = t_{ki}$ 或 $t_{ik} = -t_{ki}$. 假设有某个 $i \neq k$, $t_{ik} = t_{ki} \neq 0$; 又有某个 $t_{uv} = -t_{vu} \neq 0$, 则从 $t_{ik}t_{uk} = t_{ki}t_{ku}$ 可推出 $t_{uk} = t_{ku}$. 这时若 $t_{uk} \neq 0$, 则从 $t_{uk}t_{uv} = t_{ku}t_{vu}$ 可推出 $t_{uv} = t_{vu}$, 矛盾. 若 $t_{uk} = 0$, 则在 (9.6) 式中令 $j = u, l = v$, 仍可推出 $t_{uv} = t_{vu}$, 依然矛盾. 于是或者 $t_{ik} = t_{ki}$ 对一切 $i, k$ 成立, 或者 $t_{ik} = -t_{ki}$ 对一切 $i, k$ 成立, 即 $T$ 或者是对称矩阵, 或者是反对称矩阵. $\square$

有限维内积空间上的线性算子必存在伴随算子, 然而下面的例题告诉我们, 无限维内积空间上线性算子的伴随算子可能不存在. 这一事实也反映了有限维内积空间与无限维内积空间之间的区别.

> [!example]
> **例 9.30** 设 $U = \mathbb{R}[x]$, 取例 9.1 (6) 中的内积. 任取 $f(x), g(x) \in U$, 若设某些系数为零, 则可将它们都写成统一的形式: $f(x) = a_0 + a_1x + \cdots + a_nx^n$, $g(x) = b_0 + b_1x + \cdots + b_nx^n$.
> (1) 线性变换 $\varphi$ 定义为 $\varphi(f(x)) = a_1 + a_2x + \cdots + a_nx^{n-1}$, 试求 $\varphi$ 的伴随;
> (2) 线性变换 $\varphi$ 定义为 $\varphi(f(x)) = a_0 + a_1(1+x) + a_2(1+x+x^2) + \cdots + a_n\left(\sum_{i=0}^n x^i\right)$, 求证: $\varphi$ 的伴随不存在.

> [!proof]-
> **证明** (1) 经简单的计算可知, $\varphi^*(g(x)) = b_0x + b_1x^2 + \cdots + b_{n-1}x^n + b_nx^{n+1}$.
>
> (2) 注意到 $(f(x), x^i) = a_i$, 也就是说 $f(x)$ 和 $x^i$ 的内积就是 $f(x)$ 的 $x^i$ 项系数. 用反证法来证明, 设 $\varphi$ 的伴随算子 $\varphi^*$ 存在, 我们来推出矛盾. 对任意的 $n \geq m$, 我们有 $(\varphi(x^n), x^m) = (1+x+\cdots+x^n, x^m) = 1$, 故 $(x^n, \varphi^*(x^m)) = 1$ 对任意给定的 $m$ 以及所有的 $n \geq m$ 都成立, 这说明 $\varphi^*(x^m)$ 有无穷多个单项的系数不为零, 这与 $\varphi^*(x^m)$ 是多项式相矛盾. 因此 $\varphi$ 的伴随不存在. $\square$


### § 9.5 保积同构、正交变换和正交矩阵

设 $\varphi: V \to U$ 是内积空间之间的线性同构, 若 $\varphi$ 保持内积, 则称为保积同构. 若两个线性空间之间存在线性同构, 则它们具有相同的线性结构, 从而在考虑线性问题时可将它们等同起来. 同理, 若两个内积空间之间存在保积同构, 则它们具有相同的内积结构, 从而在考虑内积问题时也可将它们等同起来, 这也是研究保积同构的意义所在. 本节将从 4 个方面研究保积同构的性质及其应用.

#### 1. 保积同构和几何问题代数化

在欧氏空间 (酉空间) $V$ 中取定一组标准正交基, 容易验证将任一向量映射为它在这组基下的坐标向量的线性同构 $\varphi: V \to \mathbb{R}^n$ ($\varphi: V \to \mathbb{C}^n$) 实际上也是一个保积同构. 因此我们可以把抽象的欧氏空间 (酉空间) $V$ 上的问题转化为具体的取标准内积的列向量空间 $\mathbb{R}^n$ ($\mathbb{C}^n$) 上的问题来解决, 这就是内积空间版本的"几何问题代数化"技巧 (线性空间的版本请参考 § 3.4). 我们先来看这一技巧的两个应用.

> [!example]
> **例 9.31** 设 $V$ 是 $n$ 维欧氏空间, $\alpha_1, \alpha_2, \cdots, \alpha_n$, $\beta_1, \beta_2, \cdots, \beta_n \in V$. 证明: 若存在非零向量 $\alpha \in V$, 使得 $\sum_{i=1}^n(\alpha, \alpha_i)\beta_i = 0$, 则必存在非零向量 $\beta \in V$, 使得 $\sum_{i=1}^n(\beta, \beta_i)\alpha_i = 0$.

> [!proof]-
> **证明** 取 $V$ 的一组标准正交基 $e_1, e_2, \cdots, e_n$, 设 $\alpha, \beta$ 的坐标向量分别为 $x, y$; $\alpha_i$ 的坐标向量为 $x_i\,(1 \leq i \leq n)$; $\beta_i$ 的坐标向量为 $y_i\,(1 \leq i \leq n)$; $n$ 阶实矩阵 $A = (x_1, x_2, \cdots, x_n)$, $B = (y_1, y_2, \cdots, y_n)$, 则由抽象向量映射到坐标向量的保积同构 $\varphi: V \to \mathbb{R}^n$, 可把本题化为如下矩阵问题: 若存在非零列向量 $x$, 使得
> $$\sum_{i=1}^n(x'x_i)y_i = BA'x = 0, \tag{9.7}$$
> 则必存在非零列向量 $y$, 使得
> $$\sum_{i=1}^n(y'y_i)x_i = AB'y = 0. \tag{9.8}$$
> 事实上, 由齐次线性方程组 (9.7) 有非零解可得 $r(BA') < n$, 注意到 $AB' = (BA')'$, 故 $r(AB') < n$, 于是齐次线性方程组 (9.8) 也有非零解, 结论得证. $\square$


> [!example]
> **例 9.32** 设 $V$ 是 $n$ 维欧氏空间, $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 是一组向量, $G = G(\alpha_1, \alpha_2, \cdots, \alpha_m)$ 是其 Gram 矩阵, 求证: $r(\alpha_1, \alpha_2, \cdots, \alpha_m) = r(G)$.

> [!proof]-
> **证明** 取 $V$ 的一组标准正交基 $e_1, e_2, \cdots, e_n$, 设 $\alpha_i$ 的坐标向量为 $x_i\,(1 \leq i \leq m)$, $A = (x_1, x_2, \cdots, x_m)$ 为 $n \times m$ 实矩阵, 则由抽象向量映射到坐标向量的保积同构 $\varphi: V \to \mathbb{R}^n$ 可知 $G = A'A$, 于是只要证明 $r(A) = r(A'A)$ 成立即可, 而这由例 3.76 即得. $\square$

#### 2. 保积同构的判定及其应用

下面是保积同构的几个例子.

> [!example]
> **例 9.33** 试构造下列内积空间之间的保积同构:
> (1) $M_n(\mathbb{R})$ (取 Frobenius 内积) 与 $\mathbb{R}^{n^2}$ (取标准内积);
> (2) $M_n(\mathbb{C})$ (取 Frobenius 内积) 与 $\mathbb{C}^{n^2}$ (取标准内积);
> (3) $V = \mathbb{R}[x]$ (取 $[0,1]$ 区间的积分内积) 与 $U = \mathbb{R}[x]$ (取例 9.1 (6) 中的内积).

> [!proof]-
> **解** (1) 取 $M_n(\mathbb{R})$ 中基础矩阵 $\{E_{ij}\}$ 构成的标准正交基, 则将任一 $A = (a_{ij})$ 映射为在上述基下的坐标向量 $(a_{11}, a_{12}, \cdots, a_{1n}, \cdots, a_{n1}, a_{n2}, \cdots, a_{nn})'$ 的线性映射 $\psi: M_n(\mathbb{R}) \to \mathbb{R}^{n^2}$ 是线性同构. 对任意的 $B = (b_{ij}) \in M_n(\mathbb{R})$, 有
> $$(\psi(A), \psi(B)) = \sum_{i,j=1}^n a_{ij}b_{ij} = (A, B),$$
> 故 $\psi: M_n(\mathbb{R}) \to \mathbb{R}^{n^2}$ 是保积同构.
>
> (2) 同理可证复矩阵的情形.
>
> (3) 设线性无关向量组 $\{1, x, \cdots, x^n\}$ 在 $[0,1]$ 区间的积分内积下的 Gram 矩阵为 $A = (a_{ij})$, 其中 $a_{ij} = \frac{1}{i+j-1}\,(1 \leq i,j \leq n+1)$. 由例 9.5 可知, $A$ 是正定阵, 取其 Cholesky 分解 $A = C'C$, 其中 $C = (c_{ij})$ 是主对角元全大于零的上三角矩阵. 我们先构造一个线性同构 $\psi: V \to U$, 对任意的 $f(x) = a_0 + a_1x + \cdots + a_nx^n$, 定义
> $$\psi(f(x)) = a_0c_{11} + a_1(c_{12} + c_{22}x) + \cdots + a_n(c_{1,n+1} + c_{2,n+1}x + \cdots + c_{n+1,n+1}x^n),$$
> 即 $(\psi(1), \psi(x), \cdots, \psi(x^n)) = (1, x, \cdots, x^n)C$. 容易证明 $A$ 的第 $r$ 个顺序主子阵的 Cholesky 分解恰由 $C$ 的第 $r$ 个顺序主子阵决定 (这仍然是一个上三角矩阵). 若取线性无关向量组 $\{1, x, \cdots, x^m\}$, 则按照上述方法定义出来的 $\psi(1), \psi(x), \cdots, \psi(x^m)$ 与已定义的 $\psi(1), \psi(x), \cdots, \psi(x^n)$ 的前面部分总是相同的. 因此 $\psi$ 的定义不依赖于 $n$ 的选取, 并且容易验证 $\psi$ 是 $V \to U$ 的线性映射. 再由 $C$ 的非异性容易证明 $\psi: V \to U$ 是线性同构. 任取 $f(x), g(x) \in V$, 若设某些系数为零, 则可将它们都写成统一的形式: $f(x) = a_0 + a_1x + \cdots + a_nx^n$, $g(x) = b_0 + b_1x + \cdots + b_nx^n$. 记 $\alpha = (a_0, a_1, \cdots, a_n)'$, $\beta = (b_0, b_1, \cdots, b_n)'$, 则由内积的定义可得
> $$(\psi(f(x)), \psi(g(x))) = (C\alpha)'(C\beta) = \alpha'(C'C)\beta = \alpha'A\beta = (f(x), g(x)),$$
> 因此 $\psi: V \to U$ 是保积同构. $\square$


> [!note]
> 通过例 9.33 (3) 可以把例 9.30 (2) 中的线性算子 $\varphi$ 从 $U$ 拉回到 $V$ 上, 即有 $V$ 上的线性算子 $\psi^{-1}\varphi\psi$, 它在 $[0,1]$ 区间的积分内积下不存在伴随算子.

两个维数相同的欧氏空间 (酉空间) 之间的线性映射 $\varphi: V \to U$ 是保积同构当且仅当 $\varphi$ 保持内积或保持范数, 当且仅当 $\varphi$ 把 $V$ 的某一组 (任一组) 标准正交基映为 $U$ 的一组标准正交基. 我们已经知道一组基的 Gram 矩阵完全决定了内积结构, 因此也有如下保积同构的判定准则.

> [!example]
> **例 9.34** 设 $V, U$ 都是 $n$ 维欧氏空间, $\{e_1, e_2, \cdots, e_n\}$ 和 $\{f_1, f_2, \cdots, f_n\}$ 分别是 $V$ 和 $U$ 的一组基 (不一定是标准正交基), 线性映射 $\varphi: V \to U$ 满足 $\varphi(e_i) = f_i\,(1 \leq i \leq n)$. 求证: $\varphi$ 是保积同构的充要条件是这两组基的 Gram 矩阵相等, 即
> $$G(e_1, e_2, \cdots, e_n) = G(f_1, f_2, \cdots, f_n).$$

> [!proof]-
> **证明** $\varphi$ 把 $V$ 的一组基映为 $U$ 的一组基保证了 $\varphi$ 是线性同构. 若 $\varphi$ 保持内积, 则 $(e_i, e_j) = (\varphi(e_i), \varphi(e_j)) = (f_i, f_j)$, 从而它们的 Gram 矩阵相同. 反之, 若它们的 Gram 矩阵相同, 任取 $\alpha, \beta \in V$, 设它们在基 $\{e_1, e_2, \cdots, e_n\}$ 下的坐标向量分别为 $x, y$, 则 $\varphi(\alpha), \varphi(\beta)$ 在基 $\{f_1, f_2, \cdots, f_n\}$ 下的坐标向量也分别为 $x, y$, 于是
> $$(\varphi(\alpha), \varphi(\beta)) = x'G(f_1, f_2, \cdots, f_n)y = x'G(e_1, e_2, \cdots, e_n)y = (\alpha, \beta),$$
> 故 $\varphi: V \to U$ 是保积同构. $\square$


接下来我们考虑例 9.34 关于向量组的推广. 我们已经知道向量组 Gram 矩阵的许多性质, 而下面的例题告诉我们, 向量组的 Gram 矩阵不仅决定了向量之间的内积关系, 也决定了向量之间的线性关系.

> [!example]
> **例 9.35** 设 $V$ 是 $n$ 维欧氏空间, $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 是一组向量, $G = G(\alpha_1, \alpha_2, \cdots, \alpha_m)$ 是其 Gram 矩阵.
> (1) 求证: $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是极大无关组的充要条件是 $G$ 的第 $i_1, i_2, \cdots, i_r$ 行和列构成的主子式非零, 且对任意的 $i \neq i_1, i_2, \cdots, i_r$, $G$ 的第 $i_1, i_2, \cdots, i_r, i$ 行和列构成的主子式等于零.
> (2) $R = \{(c_1, c_2, \cdots, c_m)' \in \mathbb{R}^m \mid c_1\alpha_1 + c_2\alpha_2 + \cdots + c_m\alpha_m = 0\}$ 称为向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 的**线性关系集合**, 容易验证它是 $\mathbb{R}^m$ 的线性子空间. 求证: $R$ 是线性方程组 $Gx = 0$ 的解空间.
> (3) 设 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 线性无关, $\{\gamma_1, \gamma_2, \cdots, \gamma_m\}$ 是由 Gram-Schmidt 方法得到的标准正交向量组. 设上述两组向量之间的线性关系由可逆矩阵 $P$ 定义, 即 $(\gamma_1, \gamma_2, \cdots, \gamma_m) = (\alpha_1, \alpha_2, \cdots, \alpha_m)P$, 求证: $P$ 由 $G$ 唯一确定.

> [!proof]-
> **证明** (1) $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是极大无关组当且仅当 $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 线性无关, 且对任意的 $i \neq i_1, i_2, \cdots, i_r$, $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}, \alpha_i\}$ 线性相关, 故由例 9.5 (2) 即知结论成立.
>
> (2) 由内积的正定性可知, $\beta = (c_1, c_2, \cdots, c_m)' \in R$ 当且仅当 $(\sum_{i=1}^m c_i\alpha_i, \sum_{i=1}^m c_i\alpha_i) = 0$, 即 $\beta'G\beta = 0$, 再由例 8.71 可知, 这也当且仅当 $G\beta = 0$, 即 $\beta = (c_1, c_2, \cdots, c_m)'$ 是线性方程组 $Gx = 0$ 的解.
>
> (3) 由例 9.13 的证明过程可得
> $$I_m = G(\gamma_1, \gamma_2, \cdots, \gamma_m) = P'G(\alpha_1, \alpha_2, \cdots, \alpha_m)P = P'GP,$$
> 从而 $G = (P^{-1})'P^{-1}$ 为 Cholesky 分解. 由 Cholesky 分解的唯一性可知, $P$ 由 $G$ 唯一确定. $\square$


> [!example]
> **例 9.36** 设 $\{\alpha_1, \alpha_2, \alpha_3, \alpha_4\}$ 是欧氏空间 $V$ 中的向量, 其 Gram 矩阵为 $G = A'A$, 其中
> $$A = \begin{pmatrix} 1 & 4 & 5 & 3 \\ 1 & 1 & -1 & 3 \\ 1 & 7 & 11 & 9 \\ 1 & 0 & -3 & 1 \end{pmatrix}.$$

试求 $\{\alpha_1, \alpha_2, \alpha_3, \alpha_4\}$ 的一组极大无关组, 以及由这一极大无关组通过 Gram-Schmidt 方法得到的标准正交向量组.

> [!proof]-
> **解** 设 $A = (u_1, u_2, u_3, u_4)$ 为列分块, 利用初等行变换容易验证 $\{u_1, u_2, u_4\}$ 是 $A$ 的列向量的极大无关组, 再利用 Cauchy-Binet 公式可得 $G\begin{pmatrix} 1 & 2 & 4 \\ 1 & 2 & 4 \end{pmatrix} > 0$, 但 $|G| = |A|^2 = 0$, 故由例 9.35 (1) 可知 $\{\alpha_1, \alpha_2, \alpha_4\}$ 是一组极大无关组, 其 Gram 矩阵为
> $$G(\alpha_1, \alpha_2, \alpha_4) = \begin{pmatrix} 1 & 1 & 1 \\ 4 & 1 & 0 \\ 3 & 3 & 1 \end{pmatrix} \begin{pmatrix} 1 & 4 & 3 \\ 1 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 4 & 12 & 16 \\ 12 & 66 & 78 \\ 16 & 78 & 100 \end{pmatrix}.$$

经计算可得 $G$ 的 Cholesky 分解为
$$G(\alpha_1, \alpha_2, \alpha_4) = \begin{pmatrix} 4 & 12 & 16 \\ 12 & 66 & 78 \\ 16 & 78 & 100 \end{pmatrix} = \begin{pmatrix} 2 & 0 & 0 \\ 6 & \sqrt{30} & 0 \\ 8 & \sqrt{30} & \sqrt{6} \end{pmatrix} \begin{pmatrix} 2 & 6 & 8 \\ 0 & \sqrt{30} & \sqrt{30} \\ 0 & 0 & \sqrt{6} \end{pmatrix},$$

故由例 9.35 (3) 可知, 经 Gram-Schmidt 正交化方法从 $\{\alpha_1, \alpha_2, \alpha_4\}$ 得到的标准正交向量组 $\{\gamma_1, \gamma_2, \gamma_4\}$ 之间的线性关系为
$$(\gamma_1, \gamma_2, \gamma_4) = (\alpha_1, \alpha_2, \alpha_4)P, \quad P = \begin{pmatrix} 2 & 6 & 8 \\ 0 & \sqrt{30} & \sqrt{30} \\ 0 & 0 & \sqrt{6} \end{pmatrix}^{-1} = \begin{pmatrix} \frac{1}{2} & -\frac{3}{\sqrt{30}} & -\frac{1}{\sqrt{6}} \\ 0 & \frac{1}{\sqrt{30}} & -\frac{1}{\sqrt{6}} \\ 0 & 0 & \frac{1}{\sqrt{6}} \end{pmatrix}. \quad \square$$


> [!example]
> **例 9.37** 设 $V, U$ 都是 $n$ 维欧氏空间, $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 和 $\{\beta_1, \beta_2, \cdots, \beta_m\}$ 分别是 $V$ 和 $U$ 中的向量组. 证明: 存在保积同构 $\varphi: V \to U$, 使得
> $$\varphi(\alpha_i) = \beta_i\,(1 \leq i \leq m)$$
> 成立的充要条件是这两组向量的 Gram 矩阵相等.

> [!proof]-
> **证明** 必要性类似于例 9.34 的必要性的证明, 下证充分性. 设向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 和 $\{\beta_1, \beta_2, \cdots, \beta_m\}$ 有相同的 Gram 矩阵, $V_1 = L(\alpha_1, \alpha_2, \cdots, \alpha_m)$, $U_1 = L(\beta_1, \beta_2, \cdots, \beta_m)$. 设 $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 的极大无关组, 若设 $c_1\beta_{i_1} + c_2\beta_{i_2} + \cdots + c_r\beta_{i_r} = 0$, 则由例 9.35 (2) 可得 $c_1\alpha_{i_1} + c_2\alpha_{i_2} + \cdots + c_r\alpha_{i_r} = 0$, 从而 $c_1 = c_2 = \cdots = c_r = 0$, 即 $\beta_{i_1}, \beta_{i_2}, \cdots, \beta_{i_r}$ 线性无关; 又对任意的 $i \neq i_1, i_2, \cdots, i_r$, 若设 $\alpha_i = a_1\alpha_{i_1} + a_2\alpha_{i_2} + \cdots + a_r\alpha_{i_r}$, 则由例 9.35 (2) 可得 $\beta_i = a_1\beta_{i_1} + a_2\beta_{i_2} + \cdots + a_r\beta_{i_r}$, 于是 $\{\beta_{i_1}, \beta_{i_2}, \cdots, \beta_{i_r}\}$ 也是向量组 $\{\beta_1, \beta_2, \cdots, \beta_m\}$ 的极大无关组, 从而 $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 和 $\{\beta_{i_1}, \beta_{i_2}, \cdots, \beta_{i_r}\}$ 分别是 $V_1, U_1$ 的一组基. 定义线性映射 $\varphi_1: V_1 \to U_1$ 为 $\varphi_1(\alpha_{i_k}) = \beta_{i_k}\,(1 \leq k \leq r)$, 则由例 9.34 的充分性可知, $\varphi_1: V_1 \to U_1$ 是保积同构. 对任意的 $i \neq i_1, i_2, \cdots, i_r$,
> $$\varphi_1(\alpha_i) = \varphi_1\left(\sum_{k=1}^r a_k\alpha_{i_k}\right) = \sum_{k=1}^r a_k\varphi_1(\alpha_{i_k}) = \sum_{k=1}^r a_k\beta_{i_k} = \beta_i,$$
> 从而 $\varphi_1(\alpha_i) = \beta_i\,(1 \leq i \leq m)$. 注意到 $V = V_1 \perp V_1^{\perp}$, $U = U_1 \perp U_1^{\perp}$, 故可取 $V_1^{\perp}$ 的一组标准正交基 $\gamma_{r+1}, \cdots, \gamma_n$, $U_1^{\perp}$ 的一组标准正交基 $\delta_{r+1}, \cdots, \delta_n$, 定义线性映射 $\varphi_2: V_1^{\perp} \to U_1^{\perp}$ 为 $\varphi_2(\gamma_j) = \delta_j\,(r+1 \leq j \leq n)$, 则 $\varphi_2: V_1^{\perp} \to U_1^{\perp}$ 也是保积同构. 下面定义线性映射 $\varphi: V \to U$, 对任一 $v = \alpha + \gamma \in V$, 其中 $\alpha \in V_1$, $\gamma \in V_1^{\perp}$, 定义 $\varphi(v) = \varphi_1(\alpha) + \varphi_2(\gamma)$, 容易验证 $\varphi: V \to U$ 是线性同构. 我们还有
> $$\begin{aligned} (\varphi(v), \varphi(v)) &= (\varphi_1(\alpha) + \varphi_2(\gamma), \varphi_1(\alpha) + \varphi_2(\gamma)) = (\varphi_1(\alpha), \varphi_1(\alpha)) + (\varphi_2(\gamma), \varphi_2(\gamma)) \\ &= (\alpha, \alpha) + (\gamma, \gamma) = (\alpha + \gamma, \alpha + \gamma) = (v, v), \end{aligned}$$
> 故 $\varphi: V \to U$ 保持范数, 从而是满足题目条件的保积同构. $\square$

> [!note]
> 若设 $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_m\}$ 的极大无关组, 则由例 9.35 (1) 可以直接得到 $\{\beta_{i_1}, \beta_{i_2}, \cdots, \beta_{i_r}\}$ 也是向量组 $\{\beta_1, \beta_2, \cdots, \beta_m\}$ 的极大无关组.


例 9.37 具有十分明显的几何意义, 并且它的证明是构造性的, 从而可用来构造满足某些条件的保积同构. 例 9.36 的解法 2 和例 9.38 是两个应用.

**例 9.36 的解法 2** 设 $A = (u_1, u_2, u_3, u_4)$ 为列分块, 容易验证 $\{u_1, u_2, u_4\}$ 是 $A$ 的列向量的极大无关组. 设 $U = L(u_1, u_2, u_3, u_4)$, 则 $U$ 是 $\mathbb{R}^4$ (取标准内积) 的三维子空间, 并且 $A'A$ 就是列向量组 $\{u_1, u_2, u_3, u_4\}$ 的 Gram 矩阵. 由假设 $G(\alpha_1, \alpha_2, \alpha_3, \alpha_4) = G(u_1, u_2, u_3, u_4)$, 故由例 9.37 可知, 存在一个从 $V$ 的三维子空间 $W$ 到 $U$ 上的保积同构 $\varphi$, 使得 $\varphi(\alpha_i) = u_i\,(1 \leq i \leq 4)$. 由于保积同构保持极大无关组的下指标, 并且保持对应向量在 Gram-Schmidt 正交化和标准化过程中出现的所有系数 (参考例 9.35 (3)), 故 $\{\alpha_1, \alpha_2, \alpha_4\}$ 就是向量组 $\{\alpha_1, \alpha_2, \alpha_3, \alpha_4\}$ 的极大无关组, 并且求 $\{\alpha_1, \alpha_2, \alpha_4\}$ 与 Gram-Schmidt 正交化方法得到的标准正交向量组 $\{\gamma_1, \gamma_2, \gamma_4\}$ 之间的线性关系等价于求 $\{u_1, u_2, u_4\}$ 与 Gram-Schmidt 正交化方法得到的标准正交向量组 $\{w_1, w_2, w_4\}$ 之间的线性关系. 经计算可得
$$(w_1, w_2, w_4) = (u_1, u_2, u_4)P, \quad P = \begin{pmatrix} \frac{1}{2} & -\frac{3}{\sqrt{30}} & -\frac{1}{\sqrt{6}} \\ 0 & \frac{1}{\sqrt{30}} & -\frac{1}{\sqrt{6}} \\ 0 & 0 & \frac{1}{\sqrt{6}} \end{pmatrix},$$
因此 $(\gamma_1, \gamma_2, \gamma_4) = (\alpha_1, \alpha_2, \alpha_4)P$. $\square$

#### 3. 正交变换与镜像变换

实 (复) 内积空间 $V$ 上的保积自同构称为正交变换 (酉变换), 这是内积空间理论中一个重要的研究对象. 前面关于保积同构的判定准则都适用于正交变换 (酉变换), 此外利用伴随算子, 我们还有如下判定准则: 线性变换 $\varphi$ 是正交变换 (酉变换) 当且仅当 $\varphi^* = \varphi^{-1}$, 当且仅当 $\varphi$ 在 $V$ 的某一组 (任一组) 标准正交基下的表示矩阵为正交矩阵 (酉矩阵).

> [!example]
> **例 9.38** 设 $A, B$ 是 $m \times n$ 实矩阵, 求证: $A'A = B'B$ 的充要条件是存在 $m$ 阶正交矩阵 $Q$, 使得 $A = QB$.

> [!proof]-
> **证明** 充分性显然成立, 下证必要性. 取 $V = \mathbb{R}^m$ 上的标准内积, 设 $A = (\alpha_1, \alpha_2, \cdots, \alpha_n)$, $B = (\beta_1, \beta_2, \cdots, \beta_n)$ 为列分块, 则由 $A'A = B'B$ 可得 $G(\alpha_1, \alpha_2, \cdots, \alpha_n) = G(\beta_1, \beta_2, \cdots, \beta_n)$, 再由例 9.37 可知, 存在 $V$ 上的正交变换 $\varphi$, 使得 $\varphi(\beta_i) = \alpha_i\,(1 \leq i \leq n)$. 设 $\varphi$ 在 $V$ 的标准单位列向量构成的标准正交基下的表示矩阵为 $Q$, 则 $Q$ 为正交矩阵且 $Q\beta_i = \alpha_i\,(1 \leq i \leq n)$, 因此
> $$QB = (Q\beta_1, Q\beta_2, \cdots, Q\beta_n) = (\alpha_1, \alpha_2, \cdots, \alpha_n) = A. \quad \square$$


镜像变换是一种正交变换, 它特别简单, 容易研究, 而一般的正交变换都可以表示为镜像变换之积, 这就使它在正交变换中显得特别重要. 例 9.39 介绍了镜像变换的定义; 例 9.40 介绍了镜像矩阵的定义以及和镜像变换的基本关系; 例 9.41 是常用的构造镜像变换的方法; 例 9.42 是一个著名的结论, 称为 Cartan-Dieudonné 定理, 它把正交变换 (正交矩阵) 表示为若干个镜像变换 (镜像矩阵) 之积. 证明采用数学归纳法, 这也是处理这类问题的常用方法.

> [!example]
> **例 9.39** (1) 设 $v$ 是 $n$ 维欧氏空间 $V$ 中长度为 1 的向量, 定义线性变换:
> $$\varphi(x) = x - 2(v, x)v,$$
> 证明: $\varphi$ 是正交变换且 $\det\varphi = -1$;
> (2) 设 $\psi$ 是 $n$ 维欧氏空间 $V$ 中的正交变换, 1 是 $\psi$ 的特征值且几何重数等于 $n-1$, 证明: 必存在 $V$ 中长度为 1 的向量 $v$, 使得
> $$\psi(x) = x - 2(v, x)v.$$

> [!proof]-
> **证明** (1) 取 $e_1 = v$, 并将它扩张为 $V$ 的一组标准正交基 $e_1, e_2, \cdots, e_n$, 则 $\varphi(e_1) = -e_1$, $\varphi(e_i) = e_i\,(i > 1)$, 于是 $\varphi$ 在这组标准正交基下的表示矩阵为 $\text{diag}\{-1, 1, \cdots, 1\}$. 这是一个正交矩阵, 因此 $\varphi$ 是正交变换且行列式值为 $-1$.
>
> (2) 设 $\psi$ 的属于特征值 1 的特征子空间为 $V_1$, 由假设 $\dim V_1 = n-1$, 取 $V_1$ 的一组标准正交基 $e_2, \cdots, e_n$, 则 $\psi(e_i) = e_i\,(2 \leq i \leq n)$. 设 $V_1^{\perp} = L(e_1)$, 其中 $e_1$ 是单位向量, 则 $e_1, e_2, \cdots, e_n$ 是 $V$ 的一组标准正交基. 注意到 $V_1$ 是 $\psi$ 的不变子空间, 故由例 9.25 可知, $V_1^{\perp} = L(e_1)$ 是 $\psi^* = \psi^{-1}$ 的不变子空间, 从而也是 $\psi$ 的不变子空间, 于是 $e_1$ 是 $\psi$ 的特征向量. 设 $\psi(e_1) = \lambda_1e_1$, 其中特征值 $\lambda_1$ 为实数. 由于 $\psi$ 是正交变换, 故 $\lambda_1$ 等于 1 或 $-1$. 若 $\lambda_1 = 1$, 则 $\psi(e_1) = e_1$, 从而 $\psi$ 的属于特征值 1 的特征子空间将是 $V$, 这与假设矛盾. 因此 $\lambda_1 = -1$, 即有 $\psi(e_1) = -e_1$. 令 $v = e_1$, 作线性变换
> $$\varphi(x) = x - 2(v, x)v,$$
> 不难验证 $\psi(e_i) = \varphi(e_i)\,(1 \leq i \leq n)$ 成立, 故 $\psi = \varphi$. $\square$

> [!note]
> 例 9.39 中的线性变换 $\varphi$ 称为**镜像变换**. 镜像变换的几何意义是: 它将某个向量 (如上例的向量 $v$) 变为其反向向量, 而和该向量正交的向量保持不动. 更加直观的描述是: 镜像变换就是关于某个 $n-1$ 维超平面 (如上例的 $L(v)^{\perp}$) 的镜像对称.


> [!example]
> **例 9.40** 设 $n$ 阶矩阵 $M = I_n - 2\alpha\alpha'$, 其中 $\alpha$ 是 $n$ 维实列向量且 $\alpha'\alpha = 1$, 这样的 $M$ 称为**镜像矩阵**. 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换, 求证: $\varphi$ 是镜像变换的充要条件是 $\varphi$ 在 $V$ 的某一组 (任一组) 标准正交基下的表示矩阵为镜像矩阵.

> [!proof]-
> **证明** 先证必要性. 设 $\varphi$ 是镜像变换, 则由例 9.39 可知, $\varphi$ 在 $V$ 的某一组标准正交基下的表示矩阵为 $A = \text{diag}\{-1, 1, \cdots, 1\} = I_n - 2\beta\beta'$, 其中 $\beta = (1, 0, \cdots, 0)'$. 设 $\varphi$ 在 $V$ 的任一组标准正交基下的表示矩阵为 $M$, 则 $M$ 和 $A$ 正交相似, 即存在正交矩阵 $P$, 使得 $M = PAP'$, 于是
> $$M = P(I_n - 2\beta\beta')P' = I_n - 2(P\beta)(P\beta)'.$$
> 令 $\alpha = P\beta$, 则 $\alpha$ 的长度为 1 且 $M = I_n - 2\alpha\alpha'$.
>
> 再证充分性. 设 $\varphi$ 在 $V$ 的某一组标准正交基 $e_1, e_2, \cdots, e_n$ 下的表示矩阵为 $M = I_n - 2\alpha\alpha'$, 其中 $\alpha'\alpha = 1$. 设 $\alpha = (a_1, a_2, \cdots, a_n)'$, 令 $v = a_1e_1 + a_2e_2 + \cdots + a_ne_n$. 对 $V$ 中任一向量 $x = b_1e_1 + b_2e_2 + \cdots + b_ne_n$, 记 $\beta = (b_1, b_2, \cdots, b_n)'$, 则
> $$M\beta = \beta - 2\alpha\alpha'\beta = \beta - 2(\alpha, \beta)\alpha.$$
> 由线性变换和表示矩阵的一一对应可得
> $$\varphi(x) = x - 2(v, x)v,$$
> 注意到 $v$ 的长度为 1, 故 $\varphi$ 是镜像变换. $\square$

> [!example]
> **例 9.41** 设 $u, v$ 是欧氏空间中两个长度相等的不同向量, 求证: 必存在镜像变换 $\varphi$, 使得 $\varphi(u) = v$.

> [!proof]-
> **证明** 令
> $$e = \frac{u - v}{\|u - v\|},$$
> 定义 $\varphi$ 如下:
> $$\varphi(x) = x - 2(e, x)e,$$
> 则 $\varphi$ 是镜像变换, 注意 $(u, u) = (v, v)$, 我们有
> $$\|u - v\|^2 = (u - v, u - v) = (u, u) + (v, v) - 2(u, v) = 2(u, u) - 2(u, v) = 2(u, u - v).$$
> $$\varphi(u) = u - 2(e, u)e = u - 2\left(\frac{u - v}{\|u - v\|}, u\right)\frac{u - v}{\|u - v\|} = u - 2\frac{(u, u - v)}{\|u - v\|^2}(u - v) = v. \quad \square$$


> [!example]
> **例 9.42** (Cartan-Dieudonné 定理) $n$ 维欧氏空间中任一正交变换均可表示为不超过 $n$ 个镜像变换之积.

> [!proof]-
> **证明** 对 $n$ 进行归纳. 当 $n = 1$ 时, 正交变换 $\varphi$ 或是恒等变换, 或是 $\varphi(x) = -x$, 后者已是镜像变换, 而恒等变换可看成是零个镜像变换之积, 故结论成立. 假设结论对 $n-1$ 成立, 现设 $V$ 是 $n$ 维欧氏空间, $\varphi$ 是 $V$ 上的正交变换. 若 $\varphi$ 是恒等变换, 则可看成是零个镜像变换之积, 故结论成立. 下设 $\varphi$ 不是恒等变换, 取 $V$ 的一组标准正交基 $e_1, e_2, \cdots, e_n$, 则存在某个 $i$, 使得 $\varphi(e_i) \neq e_i$. 不失一般性, 可设 $\varphi(e_1) \neq e_1$, 因为 $\|\varphi(e_1)\| = \|e_1\| = 1$, 故由例 9.41 可知, 存在镜像变换 $\psi$, 使得 $\psi\varphi(e_1) = e_1$. 注意到 $\psi\varphi$ 也是正交变换, 故 $(\psi\varphi)^*(e_1) = (\psi\varphi)^{-1}(e_1) = e_1$, 于是 $V_1 = L(e_1)^{\perp}$ 是 $\psi\varphi$ 的不变子空间. 由归纳假设, $\psi\varphi|_{V_1} = \psi_1\psi_2\cdots\psi_k$, 其中 $k \leq n-1$, 且每个 $\psi_i$ 都是 $V_1$ 上的镜像变换. 我们可将 $\psi_i$ 扩张到全空间 $V$ 上, 满足 $\psi_i(e_1) = e_1$, 不难验证得到的线性变换都是 $V$ 上的镜像变换 (仍记为 $\psi_i$). 注意到 $\psi^{-1} = \psi^* = \psi$, 故
> $$\varphi = \psi^{-1}\psi_1\cdots\psi_k = \psi\psi_1\cdots\psi_k$$
> 是 $k+1 \leq n$ 个镜像变换之积, 结论得证. $\square$


### § 9.6 用正交变换法化简二次型

我们已经知道, 任意一个实二次型都可以通过非异线性变换化为标准型 (规范型). 在这一节中, 我们将介绍利用正交变换化简实二次型的方法. 正交变换保持向量的范数不变, 因此它是一种特殊的非异线性变换, 用正交变换化简二次型在几何和物理中有着重要的应用.

#### 9.6.1 实对称矩阵的正交相似标准型

> [!theorem]
> 设 $A$ 为 $n$ 阶实对称矩阵, 则存在 $n$ 阶正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$
> 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的全部特征值.

**证明思路** 实对称矩阵的特征值都是实数, 且不同特征值对应的特征向量相互正交. 对 $A$ 的每个特征值, 可以取一组标准正交的特征向量, 合起来就得到 $n$ 个两两正交的单位特征向量, 它们构成正交矩阵 $P$ 的列向量.

#### 9.6.2 用正交变换化简实二次型

设 $f(x_1, x_2, \cdots, x_n) = x'Ax$ 是一个实二次型, 其中 $A$ 是 $n$ 阶实对称矩阵. 由上述定理, 存在正交矩阵 $P$, 使得 $P'AP = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$. 令 $x = Py$, 则

$$f = x'Ax = (Py)'A(Py) = y'(P'AP)y = y'\text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}y = \sum_{i=1}^n \lambda_iy_i^2.$$

这就是用正交变换将实二次型化为标准型的结果.

> [!note]
> 用正交变换化简二次型与一般的非异线性变换相比, 有以下特点:
> (1) 正交变换保持向量的长度和夹角不变, 具有几何保形性;
> (2) 标准型中平方项的系数恰好是矩阵 $A$ 的特征值, 具有明确的代数意义;
> (3) 正交矩阵的逆就是它的转置, 计算方便.

#### 9.6.3 正交相似与合同的关系

对于实对称矩阵 $A$, 若正交矩阵 $P$ 使得 $P'AP = D$ 为对角矩阵, 则同时有:
(1) $A$ 正交相似于 $D$ (因为 $P' = P^{-1}$);
(2) $A$ 合同于 $D$ (因为 $P$ 是可逆矩阵).

因此, 对于实对称矩阵, 正交相似同时也是一种合同关系, 这是实对称矩阵特有的性质.


可表示为不超过 $n$ 个镜像变换之积, 结论得证. $\square$

下面是镜像变换的两个应用, 首先我们给出矩阵 $QR$ 分解的另一证明.

> [!example] 例 9.13
> 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵, 则 $\boldsymbol{A}$ 可分解为 $\boldsymbol{A}=\boldsymbol{Q}\boldsymbol{R}$, 其中 $\boldsymbol{Q}$ 是正交矩阵, $\boldsymbol{R}$ 是一个主对角元全大于等于零的上三角矩阵, 并且若 $\boldsymbol{A}$ 是可逆矩阵, 则这样的分解必唯一.

> [!proof]- 证法 2
> 对阶数 $n$ 进行归纳. 当 $n=1$ 时结论显然成立. 假设对 $n-1$ 阶矩阵结论成立, 现证 $n$ 阶矩阵的情形. 设 $\boldsymbol{A}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)$ 为其列分块, $\boldsymbol{\beta}=(\|\boldsymbol{\alpha}_1\|,0,\cdots,0)'$ 为 $n$ 维列向量, 则 $\|\boldsymbol{\alpha}_1\|=\|\boldsymbol{\beta}\|$, 故由例 9.42 可知, 存在 $n$ 阶单位矩阵或镜像矩阵 $\boldsymbol{M}$, 使得 $\boldsymbol{M}\boldsymbol{\alpha}_1=\boldsymbol{\beta}$. 于是
> $$\boldsymbol{M}\boldsymbol{A}=(\boldsymbol{M}\boldsymbol{\alpha}_1,\boldsymbol{M}\boldsymbol{\alpha}_2,\cdots,\boldsymbol{M}\boldsymbol{\alpha}_n)=\begin{pmatrix} \|\boldsymbol{\alpha}_1\| & * \\ \boldsymbol{O} & \boldsymbol{A}_1 \end{pmatrix},$$
> 其中 $\boldsymbol{A}_1$ 是 $n-1$ 阶实矩阵. 由归纳假设, 存在 $n-1$ 阶正交矩阵 $\boldsymbol{Q}_1$ 和主对角元全大于等于零的上三角矩阵 $\boldsymbol{R}_1$, 使得 $\boldsymbol{A}_1=\boldsymbol{Q}_1\boldsymbol{R}_1$. 容易验证单位矩阵或镜像矩阵 $\boldsymbol{M}$ 适合 $\boldsymbol{M}^{-1}=\boldsymbol{M}'=\boldsymbol{M}$, 因此
> $$\boldsymbol{A}=\boldsymbol{M}\begin{pmatrix} \|\boldsymbol{\alpha}_1\| & * \\ \boldsymbol{O} & \boldsymbol{Q}_1\boldsymbol{R}_1 \end{pmatrix}=\boldsymbol{M}\begin{pmatrix} 1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q}_1 \end{pmatrix}\begin{pmatrix} \|\boldsymbol{\alpha}_1\| & * \\ \boldsymbol{O} & \boldsymbol{R}_1 \end{pmatrix}.$$
> 令
> $$\boldsymbol{Q}=\boldsymbol{M}\begin{pmatrix} 1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q}_1 \end{pmatrix}, \quad \boldsymbol{R}=\begin{pmatrix} \|\boldsymbol{\alpha}_1\| & * \\ \boldsymbol{O} & \boldsymbol{R}_1 \end{pmatrix},$$
> 显然 $\boldsymbol{A}=\boldsymbol{Q}\boldsymbol{R}$ 满足要求. 当 $\boldsymbol{A}$ 是可逆矩阵时, $QR$ 分解的唯一性同证法 1. $\square$

> [!example] 例 9.44
> 设 $\boldsymbol{Q}$ 为 $n$ 阶正交矩阵, $1$ 不是 $\boldsymbol{Q}$ 的特征值. 设 $\boldsymbol{P}=\boldsymbol{I}_n-2\boldsymbol{\alpha}\boldsymbol{\alpha}'$, 其中 $\boldsymbol{\alpha}$ 是 $n$ 维实列向量且 $\boldsymbol{\alpha}'\boldsymbol{\alpha}=1$. 求证: $1$ 是 $\boldsymbol{P}\boldsymbol{Q}$ 的特征值.

> [!proof]- 证明
> 由于 $1$ 不是 $\boldsymbol{Q}$ 的特征值, 故 $\boldsymbol{Q}-\boldsymbol{I}_n$ 为可逆矩阵, 令 $\boldsymbol{x}=(\boldsymbol{Q}-\boldsymbol{I}_n)^{-1}\boldsymbol{\alpha}$, 则非零实列向量 $\boldsymbol{x}$ 满足 $\boldsymbol{Q}\boldsymbol{x}-\boldsymbol{x}=\boldsymbol{\alpha}$. 取 $\mathbb{R}^n$ 的标准内积, 由 $\boldsymbol{Q}$ 为正交矩阵可知 $\|\boldsymbol{Q}\boldsymbol{x}\|=\|\boldsymbol{x}\|$, 并且 $\boldsymbol{P}$ 是关于 $n-1$ 维超平面 $L(\boldsymbol{\alpha})^{\perp}$ 的镜像对称, 故由 $\boldsymbol{Q}\boldsymbol{x}-\boldsymbol{x}=\boldsymbol{\alpha}$ 以及例 9.42 可知 $\boldsymbol{P}(\boldsymbol{Q}\boldsymbol{x})=\boldsymbol{x}$, 即 $\boldsymbol{x}$ 是 $\boldsymbol{P}\boldsymbol{Q}$ 关于特征值 $1$ 的特征向量, 结论得证. $\square$

#### 4. 正交矩阵的性质

正交矩阵的刻画是: $n$ 阶实矩阵 $\boldsymbol{A}$ 为正交矩阵当且仅当 $\boldsymbol{A}$ 的 $n$ 个行向量构成 $\mathbb{R}_n$ (取标准内积) 的一组标准正交基, 也当且仅当 $\boldsymbol{A}$ 的 $n$ 个列向量构成 $\mathbb{R}^n$ (取标准内积) 的一组标准正交基. 另外, 正交矩阵的行列式值等于 $\pm 1$, 特征值是模长等于 $1$ 的复数. 下面我们来看一些应用正交矩阵性质的典型例题.

> [!example] 例 9.44 的推广
> 设 $\boldsymbol{Q}$ 为 $n$ 阶正交矩阵, $1$ 不是 $\boldsymbol{Q}$ 的特征值. 设 $\boldsymbol{P}$ 为 $n$ 阶正交矩阵, $|\boldsymbol{P}|=-1$. 求证: $1$ 是 $\boldsymbol{P}\boldsymbol{Q}$ 的特征值.

> [!proof]- 证明
> 若 $\boldsymbol{A}$ 为正交矩阵, 则可设 $\boldsymbol{A}$ 的全体特征值为 $1,\cdots,1$, $-1,\cdots,-1$, $\cos\theta_i\pm\mathrm{i}\sin\theta_i$ $(1\leq i\leq r)$, 其中 $\sin\theta_i\neq 0$. 若 $1$ 不是 $\boldsymbol{A}$ 的特征值, 则特征值 $-1$ 有 $n-2r$ 个, 从而 $|\boldsymbol{A}|=(-1)^{n-2r}=(-1)^n$. 回到本题, 由条件可知 $|\boldsymbol{P}|=-1$, $|\boldsymbol{Q}|=(-1)^n$, 从而 $|\boldsymbol{P}\boldsymbol{Q}|=(-1)^{n+1}\neq(-1)^n$. 注意到 $\boldsymbol{P}\boldsymbol{Q}$ 仍为正交阵, 从而 $1$ 必为 $\boldsymbol{P}\boldsymbol{Q}$ 的特征值. $\square$

设正交矩阵 $\boldsymbol{A}=(a_{ij})$, 则 $\boldsymbol{A}'=\boldsymbol{A}^{-1}=|\boldsymbol{A}|^{-1}\boldsymbol{A}^*$, 于是 $a_{ij}=|\boldsymbol{A}|^{-1}A_{ij}=\pm A_{ij}$, 其中 $A_{ij}$ 是元素 $a_{ij}$ 的代数余子式. 这个结论还可以推广, 这就是下面的命题.

> [!example] 例 9.45
> 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵, 求证: $\boldsymbol{A}$ 的任一 $k$ 阶子式 $\boldsymbol{A}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}$ 的值等于 $|\boldsymbol{A}|^{-1}$ 乘以其代数余子式的值.

> [!proof]- 证明
> 先对特殊情形 $\boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$ 进行证明. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{A}_{12} \\ \boldsymbol{A}_{21} & \boldsymbol{A}_{22} \end{pmatrix}$, 其中 $|\boldsymbol{A}_{11}|=\boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$, $|\boldsymbol{A}_{22}|$ 就是 $|\boldsymbol{A}_{11}|$ 的代数余子式. 注意到 $\boldsymbol{A}'=\begin{pmatrix} \boldsymbol{A}_{11}' & \boldsymbol{A}_{21}' \\ \boldsymbol{A}_{12}' & \boldsymbol{A}_{22}' \end{pmatrix}$, 故由 $\boldsymbol{A}\boldsymbol{A}'=\boldsymbol{I}_n$ 可得
> $$\begin{pmatrix} \boldsymbol{A}_{11}\boldsymbol{A}_{11}'+\boldsymbol{A}_{12}\boldsymbol{A}_{12}' & \boldsymbol{A}_{11}\boldsymbol{A}_{21}'+\boldsymbol{A}_{12}\boldsymbol{A}_{22}' \\ \boldsymbol{A}_{21}\boldsymbol{A}_{11}'+\boldsymbol{A}_{22}\boldsymbol{A}_{12}' & \boldsymbol{A}_{21}\boldsymbol{A}_{21}'+\boldsymbol{A}_{22}\boldsymbol{A}_{22}' \end{pmatrix}=\begin{pmatrix} \boldsymbol{I}_k & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{I}_{n-k} \end{pmatrix}.$$
> 于是
> $$\boldsymbol{A}_{11}\boldsymbol{A}_{11}'+\boldsymbol{A}_{12}\boldsymbol{A}_{12}'=\boldsymbol{I}_k, \quad \boldsymbol{A}_{21}\boldsymbol{A}_{21}'+\boldsymbol{A}_{22}\boldsymbol{A}_{22}'=\boldsymbol{I}_{n-k}, \quad \boldsymbol{A}_{21}\boldsymbol{A}_{11}'+\boldsymbol{A}_{22}\boldsymbol{A}_{12}'=\boldsymbol{O}.$$
> 令 $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{A}_{11}' & \boldsymbol{O} \\ \boldsymbol{A}_{12}' & \boldsymbol{I}_{n-k} \end{pmatrix}$, 则 $|\boldsymbol{C}|=|\boldsymbol{A}_{11}'|=|\boldsymbol{A}_{11}|$. 又
> $$\boldsymbol{A}\boldsymbol{C}=\begin{pmatrix} \boldsymbol{A}_{11}\boldsymbol{A}_{11}'+\boldsymbol{A}_{12}\boldsymbol{A}_{12}' & \boldsymbol{A}_{12} \\ \boldsymbol{A}_{21}\boldsymbol{A}_{11}'+\boldsymbol{A}_{22}\boldsymbol{A}_{12}' & \boldsymbol{A}_{22} \end{pmatrix}=\begin{pmatrix} \boldsymbol{I}_k & \boldsymbol{A}_{12} \\ \boldsymbol{O} & \boldsymbol{A}_{22} \end{pmatrix},$$
> 故 $|\boldsymbol{A}\boldsymbol{C}|=|\boldsymbol{A}||\boldsymbol{C}|=|\boldsymbol{A}_{22}|$, 即 $|\boldsymbol{A}||\boldsymbol{A}_{11}|=|\boldsymbol{A}_{22}|$, 从而 $|\boldsymbol{A}_{11}|=|\boldsymbol{A}|^{-1}|\boldsymbol{A}_{22}|$.


对一般情形, 将矩阵 $\boldsymbol{A}$ 的第 $i_1,i_2,\cdots,i_k$ 行经过 $(i_1-1)+(i_2-2)+\cdots+(i_k-k)=i_1+i_2+\cdots+i_k-\dfrac{1}{2}k(k+1)$ 次相邻对换移至第 $1,2,\cdots,k$ 行; 再将第 $j_1,j_2,\cdots,j_k$ 列经过 $(j_1-1)+(j_2-2)+\cdots+(j_k-k)=j_1+j_2+\cdots+j_k-\dfrac{1}{2}k(k+1)$ 次相邻对换移至第 $1,2,\cdots,k$ 列; 得到的矩阵记为 $\boldsymbol{B}$. 因为第一类初等矩阵 $\boldsymbol{P}_{ij}$ 也是正交矩阵, 故矩阵 $\boldsymbol{B}$ 仍是正交矩阵. 记 $p=i_1+i_2+\cdots+i_k$, $q=j_1+j_2+\cdots+j_k$, 则 $|\boldsymbol{B}|=(-1)^{p+q}|\boldsymbol{A}|$. 注意到

$$\boldsymbol{A}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}=\boldsymbol{B}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix},$$

$$\widehat{\boldsymbol{A}}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}=(-1)^{p+q}\widehat{\boldsymbol{B}}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix},$$

并由特殊情形可得 $\boldsymbol{B}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}=|\boldsymbol{B}|^{-1}\widehat{\boldsymbol{B}}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$, 因此

$$\boldsymbol{A}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}=|\boldsymbol{A}|^{-1}\widehat{\boldsymbol{A}}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}. \quad \square$$

正交矩阵的特征值的模长都等于 $1$, 这个结论也可作如下两个推广.

> [!example] 例 9.46
> 证明: 正交矩阵任一 $k$ 阶子阵的特征值的模长都不超过 $1$.

> [!proof]- 证明
> 设 $\boldsymbol{A}$ 为 $n$ 阶正交矩阵, 先对特殊情形 $\boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$ 进行证明. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{A}_{12} \\ \boldsymbol{A}_{21} & \boldsymbol{A}_{22} \end{pmatrix}$, 其中 $\boldsymbol{A}_{11}=\boldsymbol{A}\begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$. 由 $\boldsymbol{A}'\boldsymbol{A}=\boldsymbol{I}_n$ 可得 $\boldsymbol{A}_{11}'\boldsymbol{A}_{11}+\boldsymbol{A}_{21}'\boldsymbol{A}_{21}=\boldsymbol{I}_k$. 任取 $\boldsymbol{A}_{11}$ 的一个特征值 $\lambda\in\mathbb{C}$ 以及对应的特征向量 $\boldsymbol{\alpha}\in\mathbb{C}^k$, 则将上式左乘 $\overline{\boldsymbol{\alpha}}'$, 右乘 $\boldsymbol{\alpha}$ 可得
> $$\overline{(\boldsymbol{A}_{11}\boldsymbol{\alpha})}'(\boldsymbol{A}_{11}\boldsymbol{\alpha})+\overline{(\boldsymbol{A}_{21}\boldsymbol{\alpha})}'(\boldsymbol{A}_{21}\boldsymbol{\alpha})=\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha},$$
> 即有 $|\lambda|^2\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}+\overline{(\boldsymbol{A}_{21}\boldsymbol{\alpha})}'(\boldsymbol{A}_{21}\boldsymbol{\alpha})=\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}$, 从而 $(1-|\lambda|^2)\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}=\overline{(\boldsymbol{A}_{21}\boldsymbol{\alpha})}'(\boldsymbol{A}_{21}\boldsymbol{\alpha})\geq 0$. 由 $\boldsymbol{\alpha}\neq \boldsymbol{0}$ 可得 $\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}>0$, 于是 $1-|\lambda|^2\geq 0$, 即有 $|\lambda|\leq 1$.
> 
> 对一般情形, 经过行对换与列对换, 总可将正交矩阵 $\boldsymbol{A}$ 的 $k$ 阶子阵换到左上角. 因为第一类初等矩阵 $\boldsymbol{P}_{ij}$ 也是正交矩阵, 故变换后的矩阵 $\boldsymbol{B}$ 仍是正交矩阵, 从而由特殊情形即得结论成立. $\square$


> [!example] 例 9.47
> 设 $\boldsymbol{P}$ 是 $n$ 阶正交矩阵, $\boldsymbol{D}=\mathrm{diag}\{d_1,d_2,\cdots,d_n\}$ 是实对角矩阵, 记 $m$ 和 $M$ 分别是诸 $|d_i|$ 中的最小者和最大者. 求证: 若 $\lambda$ 是矩阵 $\boldsymbol{P}\boldsymbol{D}$ 的特征值, 则 $m\leq|\lambda|\leq M$.

> [!proof]- 证明
> 设特征值 $\lambda$ 对应的特征向量为 $\boldsymbol{\alpha}=(a_1,a_2,\cdots,a_n)'\in\mathbb{C}^n$, 即有 $\boldsymbol{P}\boldsymbol{D}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, 上式共轭转置后可得 $\overline{\boldsymbol{\alpha}}'\boldsymbol{D}\boldsymbol{P}'=\overline{\lambda}\overline{\boldsymbol{\alpha}}'$. 将这两个等式相乘后可得 $\overline{\boldsymbol{\alpha}}'\boldsymbol{D}\boldsymbol{P}'\boldsymbol{P}\boldsymbol{D}\boldsymbol{\alpha}=\overline{\lambda}\lambda\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}$, 即有 $\overline{\boldsymbol{\alpha}}'\boldsymbol{D}^2\boldsymbol{\alpha}=|\lambda|^2\overline{\boldsymbol{\alpha}}'\boldsymbol{\alpha}$. 由假设可得
> $$m^2\sum_{i=1}^n|a_i|^2\leq\sum_{i=1}^n d_i^2|a_i|^2=|\lambda|^2\sum_{i=1}^n|a_i|^2\leq M^2\sum_{i=1}^n|a_i|^2,$$
> 由此即得 $m\leq|\lambda|\leq M$. $\square$

本节所有关于欧氏空间或正交矩阵的例题都可以平行地推广到酉空间或酉矩阵的情形, 我们把相关细节留给读者自己完成.

### § 9.6 用正交变换法化简二次型

设 $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 为实二次型, $\boldsymbol{A}$ 为相伴的实对称矩阵, 则通过非异线性变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 可将 $f(\boldsymbol{x})$ 化为只含平方项的标准型. 然而从几何的层面上看, 上述处理方法并不理想. 主要原因是在考虑几何对象的分类问题时, 所作的线性变换通常都要求保持度量, 即在欧氏空间中等价于保持内积或范数, 因为这对应于两组标准正交基之间的基变换, 所以过渡矩阵 $\boldsymbol{P}$ 必须是正交矩阵 (更严格地还可以进一步要求 $|\boldsymbol{P}|=1$). 因此从几何的层面上看, 我们需要考虑实二次型和实对称矩阵在正交相似 (也是正交合同) 变换下的标准型. 由实对称矩阵的正交相似标准型理论可知, 存在正交矩阵 $\boldsymbol{P}$, 使得

$$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\},$$

其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的全体特征值. 因此通过正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 可将 $f(\boldsymbol{x})$ 化为标准型

$$\lambda_1 y_1^2+\lambda_2 y_2^2+\cdots+\lambda_n y_n^2. \tag{9.10}$$

具体地, 用正交变换化简二次型的步骤是:

(1) 写出二次型的系数矩阵 $\boldsymbol{A}$, 求出 $\boldsymbol{A}$ 的特征值 $\lambda_i$ 及其线性无关的特征向量.

(2) 若 $\lambda_i$ 是 $k$ $(k>1)$ 重特征值, 则用 Gram-Schmidt 正交化方法将它的 $k$ 个线性无关的特征向量正交化. 由于属于不同特征值的特征向量必互相正交, 故单特征值对应的特征向量不必正交化.


(3) 假设已经得到 $n$ 个两两正交的特征向量 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n$, 令 $\boldsymbol{\beta}_i=\dfrac{\boldsymbol{\alpha}_i}{\|\boldsymbol{\alpha}_i\|}$ $(1\leq i\leq n)$, 则 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n$ 是一组两两正交的单位特征向量. 令 $\boldsymbol{P}=(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n)$, 则 $\boldsymbol{P}$ 就是要求的正交矩阵, 此时 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 注意 $\boldsymbol{\beta}_i$ 是属于特征值 $\lambda_i$ 的特征向量.

> [!note] 注
> 如果实二次型中含有未知参数, 通常我们先求出这个参数, 再按上面的步骤求正交矩阵. 因为在正交变换过程中, 特征值保持不变, 所以常常利用特征值的性质确定参数. 比如常用的有: 特征值之和等于矩阵的迹; 特征值之积等于矩阵的行列式值等.

> [!example] 例 9.48
> 设实二次型 $f(x_1,x_2,x_3)=x_1^2+ax_2^2+x_3^2+2bx_1x_2+2x_1x_3+2x_2x_3$ 经过正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 可化为 $y_2^2+4y_3^2$, 求 $a,b$ 的值和正交矩阵 $\boldsymbol{P}$.

> [!solution]- 解
> 实二次型 $f$ 的系数矩阵为
> $$\boldsymbol{A}=\begin{pmatrix} 1 & b & 1 \\ b & a & 1 \\ 1 & 1 & 1 \end{pmatrix}.$$
> 由假设可知 $\boldsymbol{A}$ 的特征值为 $0,1,4$, 于是 $1+a+1=0+1+4$, 从而 $a=3$. 又 $\boldsymbol{A}$ 的行列式值等于 $0$, 经计算可得 $b=1$.
> 
> 经计算可知, $\lambda_1=0$ 的特征向量为 $(1,0,-1)'$; $\lambda_2=1$ 的特征向量为 $(1,-1,1)'$; $\lambda_3=4$ 的特征向量为 $(1,2,1)'$. 因为属于不同特征值的特征向量互相正交, 所以只需将它们单位化即可, 于是
> $$\boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{3}} & \dfrac{1}{\sqrt{6}} \\ 0 & -\dfrac{1}{\sqrt{3}} & \dfrac{2}{\sqrt{6}} \\ -\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{3}} & \dfrac{1}{\sqrt{6}} \end{pmatrix}. \quad \square$$

如果 $n$ 元实二次型的系数矩阵 $\boldsymbol{A}$ 有 $r$ 重特征根 $\lambda_0$, 则 $\lambda_0$ 必有 $r$ 个线性无关的特征向量, 因此矩阵 $\lambda_0\boldsymbol{I}_n-\boldsymbol{A}$ 的秩为 $n-r$. 利用这个性质也可以决定实二次型中的未知参数. 下面是一个典型的例子.

> [!example] 例 9.49
> 设实二次型 $f(x_1,x_2,x_3)=2x_1^2+5x_2^2+5x_3^2+2ax_1x_2+2bx_1x_3-8x_2x_3$ 经过正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 可化为 $y_1^2+y_2^2+cy_3^2$, 求 $a,b,c$ 的值和正交矩阵 $\boldsymbol{P}$.


> [!solution]- 解
> 实二次型 $f$ 的系数矩阵为
> $$\boldsymbol{A}=\begin{pmatrix} 2 & a & b \\ a & 5 & -4 \\ b & -4 & 5 \end{pmatrix}.$$
> 由假设可知 $\boldsymbol{A}$ 的特征值为 $1,1,c$, 于是 $1+1+c=2+5+5$, 从而 $c=10$. 注意到特征值 $1$ 的代数重数等于 $2$, 故其几何重数也等于 $2$, 从而 $\mathrm{r}(\boldsymbol{I}_3-\boldsymbol{A})=1$. 对 $\boldsymbol{I}_3-\boldsymbol{A}$ 进行初等变换:
> $$\boldsymbol{I}_3-\boldsymbol{A}=\begin{pmatrix} -1 & -a & -b \\ -a & -4 & 4 \\ -b & 4 & -4 \end{pmatrix}\rightarrow\begin{pmatrix} -1 & -a & -b \\ -a & -4 & 4 \\ -a-b & 0 & 0 \end{pmatrix},$$
> 故由 $\mathrm{r}(\boldsymbol{I}_3-\boldsymbol{A})=1$ 可得 $-a-b=0$, $\dfrac{-a}{-1}=\dfrac{-4}{-a}=\dfrac{4}{-b}$, 解出 $a=2$, $b=-2$ 或 $a=-2$, $b=2$.
> 
> 当 $a=2$, $b=-2$ 时, 经计算可知, 特征值 $1$ 的两个线性无关的特征向量为
> $$\boldsymbol{\alpha}_1=(-2,1,0)', \quad \boldsymbol{\alpha}_2=(2,0,1)',$$
> 将它们正交化再单位化得到
> $$\boldsymbol{\beta}_1=(-\dfrac{2}{\sqrt{5}},\dfrac{1}{\sqrt{5}},0)', \quad \boldsymbol{\beta}_2=(\dfrac{2}{3\sqrt{5}},\dfrac{4}{3\sqrt{5}},\dfrac{\sqrt{5}}{3})';$$
> 特征值 $10$ 的特征向量为 $\boldsymbol{\alpha}_3=(-1,-2,2)'$, 将其单位化得到 $\boldsymbol{\beta}_3=(-\dfrac{1}{3},-\dfrac{2}{3},\dfrac{2}{3})'$, 于是正交矩阵
> $$\boldsymbol{P}=\begin{pmatrix} -\dfrac{2}{\sqrt{5}} & \dfrac{2}{3\sqrt{5}} & -\dfrac{1}{3} \\ \dfrac{1}{\sqrt{5}} & \dfrac{4}{3\sqrt{5}} & -\dfrac{2}{3} \\ 0 & \dfrac{\sqrt{5}}{3} & \dfrac{2}{3} \end{pmatrix}.$$
> 
> 当 $a=-2$, $b=2$ 时, 经类似的计算可得正交矩阵
> $$\boldsymbol{P}=\begin{pmatrix} -\dfrac{2}{\sqrt{5}} & \dfrac{2}{3\sqrt{5}} & -\dfrac{1}{3} \\ -\dfrac{1}{\sqrt{5}} & -\dfrac{4}{3\sqrt{5}} & \dfrac{2}{3} \\ 0 & -\dfrac{\sqrt{5}}{3} & -\dfrac{2}{3} \end{pmatrix}. \quad \square$$


每个 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 都有 $n$ 个两两正交的特征向量. 若已知 $\boldsymbol{A}$ 的部分特征向量, 利用这个性质可求出其余特征向量, 从而求出正交矩阵 $\boldsymbol{P}$ 以及 $\boldsymbol{A}$ 自身. 下面的例子可以说明这一点.

> [!example] 例 9.50
> 设四阶实对称矩阵 $\boldsymbol{A}$ 的特征值为 $0,0,0,4$, 且属于特征值 $0$ 的线性无关特征向量为 $(-1,1,0,0)',(-1,0,1,0)',(-1,0,0,1)'$, 求出矩阵 $\boldsymbol{A}$.

> [!solution]- 解
> 设属于特征值 $4$ 的特征向量为 $(x_1,x_2,x_3,x_4)'$, 则它和属于特征值 $0$ 的特征向量都正交, 故
> $$\begin{cases} -x_1+x_2=0, \\ -x_1+x_3=0, \\ -x_1+x_4=0. \end{cases}$$
> 解此方程组得到一个线性无关解 $(1,1,1,1)'$. 用 Gram-Schmidt 正交化方法将属于特征值 $0$ 的 $3$ 个特征向量正交化再单位化得到
> $$(-\dfrac{1}{\sqrt{2}},\dfrac{1}{\sqrt{2}},0,0)', \quad (-\dfrac{1}{\sqrt{6}},-\dfrac{1}{\sqrt{6}},\dfrac{2}{\sqrt{6}},0)', \quad (-\dfrac{\sqrt{3}}{6},-\dfrac{\sqrt{3}}{6},-\dfrac{\sqrt{3}}{6},\dfrac{\sqrt{3}}{2})'.$$
> 又将属于特征值 $4$ 的特征向量 $(1,1,1,1)'$ 单位化得到
> $$(\dfrac{1}{2},\dfrac{1}{2},\dfrac{1}{2},\dfrac{1}{2})'.$$
> 于是正交矩阵
> $$\boldsymbol{P}=\begin{pmatrix} -\dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{6}} & -\dfrac{\sqrt{3}}{6} & \dfrac{1}{2} \\ \dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{6}} & -\dfrac{\sqrt{3}}{6} & \dfrac{1}{2} \\ 0 & \dfrac{2}{\sqrt{6}} & -\dfrac{\sqrt{3}}{6} & \dfrac{1}{2} \\ 0 & 0 & \dfrac{\sqrt{3}}{2} & \dfrac{1}{2} \end{pmatrix},$$
> $$\boldsymbol{A}=\boldsymbol{P}\,\mathrm{diag}\{0,0,0,4\}\,\boldsymbol{P}'=\begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{pmatrix}. \quad \square$$


> [!example] 例 9.51
> 求经过正交变换可将二次型 $f(x_1,x_2,x_3)=ax_1^2+bx_2^2+ax_3^2+2cx_1x_3$ 化为 $y_1^2+2y_2^2-y_3^2$ 的充要条件, 并求出正交变换.

> [!solution]- 解
> 变换前后的两个二次型的系数矩阵分别为
> $$\boldsymbol{A}=\begin{pmatrix} a & 0 & c \\ 0 & b & 0 \\ c & 0 & a \end{pmatrix}, \quad \boldsymbol{B}=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$
> 这两个实对称矩阵正交相似, 故有相同的特征多项式, 即
> $$|\lambda\boldsymbol{I}_3-\boldsymbol{A}|=|\lambda\boldsymbol{I}_3-\boldsymbol{B}|,$$
> 经计算可得
> $$\lambda^3-(2a+b)\lambda^2+(2ab+a^2-c^2)\lambda+(c^2-ab^2)=\lambda^3-2\lambda^2-\lambda+2,$$
> 比较系数可得
> $$\begin{cases} 2a+b=2, \\ 2ab+a^2-c^2=-1, \\ c^2-ab^2=-2, \end{cases}$$
> 解此方程组可得 $a=0$, $b=2$, $c=\pm 1$ 或 $a=2$, $b=-2$, $c=\pm 1$. 经验证, $a=2$, $b=-2$, $c=\pm 1$ 这组解不符合题意, 应舍去. 最后可得 $a=0$, $b=2$, $c=\pm 1$ 以及正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$, 其中
> $$\boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{2}} & 0 & -\dfrac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \dfrac{1}{\sqrt{2}} & 0 & \dfrac{1}{\sqrt{2}} \end{pmatrix} \quad (c=1) \quad \text{或} \quad \boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{2}} & 0 & \dfrac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ -\dfrac{1}{\sqrt{2}} & 0 & \dfrac{1}{\sqrt{2}} \end{pmatrix} \quad (c=-1). \quad \square$$

> [!example] 例 9.52
> 设 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 的 $n$ 个特征值为 $\lambda_1\leq\lambda_2\leq\cdots\leq\lambda_n$, 证明: 对任意的 $n$ 维实列向量 $\boldsymbol{\alpha}$, 都有 $\lambda_1\boldsymbol{\alpha}'\boldsymbol{\alpha}\leq\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\leq\lambda_n\boldsymbol{\alpha}'\boldsymbol{\alpha}$.

> [!proof]- 证明
> 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 令 $\boldsymbol{\alpha}=\boldsymbol{P}\boldsymbol{\beta}$, 其中 $\boldsymbol{\beta}=(b_1,b_2,\cdots,b_n)'$, 则
> $$\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}=(\boldsymbol{P}\boldsymbol{\beta})'\boldsymbol{A}(\boldsymbol{P}\boldsymbol{\beta})=\boldsymbol{\beta}'(\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P})\boldsymbol{\beta}=\lambda_1 b_1^2+\lambda_2 b_2^2+\cdots+\lambda_n b_n^2.$$
> 因为 $\lambda_1\leq\lambda_2\leq\cdots\leq\lambda_n$, 所以
> $$\lambda_1(b_1^2+b_2^2+\cdots+b_n^2)\leq\lambda_1 b_1^2+\lambda_2 b_2^2+\cdots+\lambda_n b_n^2\leq\lambda_n(b_1^2+b_2^2+\cdots+b_n^2).$$
> 由于 $\boldsymbol{\alpha}'\boldsymbol{\alpha}=\boldsymbol{\beta}'\boldsymbol{\beta}=b_1^2+b_2^2+\cdots+b_n^2$, 故结论成立. $\square$

> [!example] 例 9.53
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是同阶实对称矩阵. 证明: 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$ 是矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的全体特征值.


> [!proof]- 证明
> 由 $\boldsymbol{A}$ 正定可知, 存在实可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\boldsymbol{I}_n$. 又矩阵 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$ 是实对称矩阵, 故存在正交矩阵 $\boldsymbol{Q}$, 使得 $\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P})\boldsymbol{Q}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i$ 是 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$ 的全体特征值. 令 $\boldsymbol{C}=\boldsymbol{P}\boldsymbol{Q}$, 则 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P})\boldsymbol{Q}=\boldsymbol{Q}'\boldsymbol{Q}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$. 最后, $\boldsymbol{A}^{-1}\boldsymbol{B}$ 和 $\boldsymbol{C}^{-1}(\boldsymbol{A}^{-1}\boldsymbol{B})\boldsymbol{C}=(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C})^{-1}(\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$ 相似, 有相同的特征值, 从而结论得证. $\square$

> [!note] 注
> 例 9.53 告诉我们, 只要 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 正定, $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 就可用相同的合同变换同时对角化. 事实上, 若 $\boldsymbol{A}$ 仅是半正定阵, 我们同样可以用相同的合同变换将 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 同时对角化, 只不过结论叙述起来稍复杂一些. 我们把一般情形的证明留给读者完成.

> [!example] 例 9.54
> 设 $\boldsymbol{A}$ 为 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 为 $n$ 阶正定实对称矩阵. 证明: $|\boldsymbol{A}-\lambda\boldsymbol{B}|=0$ 的根全是实数.

> [!proof]- 证明
> 由例 9.53 可知, 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\in\mathbb{R}$ 为矩阵 $\boldsymbol{B}^{-1}\boldsymbol{A}$ 的特征值. 于是
> $$|\boldsymbol{A}-\lambda\boldsymbol{B}|=|\boldsymbol{C}'|^{-1}|(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C})-\lambda(\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})||\boldsymbol{C}|^{-1}=|\boldsymbol{C}|^{-2}(\lambda_1-\lambda)(\lambda_2-\lambda)\cdots(\lambda_n-\lambda),$$
> 因此 $|\boldsymbol{A}-\lambda\boldsymbol{B}|=0$ 的根为 $\lambda_1,\lambda_2,\cdots,\lambda_n\in\mathbb{R}$. $\square$

> [!example] 例 9.55
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是同阶非零半正定实对称矩阵. 证明: $|\boldsymbol{A}+\boldsymbol{B}|>|\boldsymbol{A}|+|\boldsymbol{B}|$.

> [!proof]- 证明
> 由例 9.53 可知, 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\geq 0$ 是矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值. 由 $\boldsymbol{B}$ 非零可知至少某个 $\lambda_i>0$, 于是
> $$|\boldsymbol{C}'||\boldsymbol{A}+\boldsymbol{B}||\boldsymbol{C}|=|\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C}|=|\boldsymbol{I}_n+\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}|$$
> $$=(1+\lambda_1)(1+\lambda_2)\cdots(1+\lambda_n)>1+\lambda_1\lambda_2\cdots\lambda_n$$
> $$=|\boldsymbol{I}_n|+|\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}|=|\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}|+|\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}|$$
> $$=|\boldsymbol{C}|^2(|\boldsymbol{A}|+|\boldsymbol{B}|),$$
> 两边同时约去正实数 $|\boldsymbol{C}|^2$, 即得 $|\boldsymbol{A}+\boldsymbol{B}|>|\boldsymbol{A}|+|\boldsymbol{B}|$. $\square$


> [!example] 例 9.56
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是同阶实对称矩阵. 证明: 对任意的 $1\leq i\leq n$, 方程 $|\lambda\boldsymbol{A}-\boldsymbol{B}|=0$ 的第 $i$ 个最大根等于 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的第 $i$ 个最大特征值.

> [!proof]- 证明
> 由例 9.53 可知, 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\in\mathbb{R}$ 为矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值. 于是
> $$|\lambda\boldsymbol{A}-\boldsymbol{B}|=|(\boldsymbol{C}')^{-1}(\lambda\boldsymbol{I}_n-\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\})\boldsymbol{C}^{-1}|$$
> $$=|\boldsymbol{C}|^{-2}(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n),$$
> 从而 $|\lambda\boldsymbol{A}-\boldsymbol{B}|=0$ 的根就是 $\lambda_1,\lambda_2,\cdots,\lambda_n$, 结论得证. $\square$

> [!note] 注
> (1) 例 9.56 告诉我们, 特征值问题 $|\lambda\boldsymbol{A}-\boldsymbol{B}|=0$ 等价于矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值问题. 当 $\boldsymbol{A}=\boldsymbol{I}_n$ 时, 这就是通常的矩阵 $\boldsymbol{B}$ 的特征值问题. 因此, 特征值问题 $|\lambda\boldsymbol{A}-\boldsymbol{B}|=0$ 也称为关于正定阵 $\boldsymbol{A}$ 的广义特征值问题. 更一般地, 也可以考虑关于非异阵 $\boldsymbol{A}$ (不一定对称) 的广义特征值问题 $|\lambda\boldsymbol{A}-\boldsymbol{B}|=0$, 这一般等价于矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值问题. 若 $\boldsymbol{A},\boldsymbol{B}$ 都是实对称矩阵, 但 $\boldsymbol{A}$ 不是正定阵, 则例 9.56 的结论是否成立? 在一般情况下结论未必成立, 但当 $\boldsymbol{A}$ 为实对称矩阵且 $\boldsymbol{B}$ 为正定阵时, 例 9.56 的结论仍然成立. 证明如下: 若 $\boldsymbol{B}$ 正定, $\boldsymbol{A}$ 实对称, 则存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\mathrm{diag}\{\mu_1,\mu_2,\cdots,\mu_n\}$, 其中 $\mu_i\in\mathbb{R}$. 由例 9.54 可知, $|\mu\boldsymbol{B}-\boldsymbol{A}|=0$ 的根 $\mu_i$ 都是实数, 此即 $|(\mu^{-1})\boldsymbol{A}-\boldsymbol{B}|=0$ 的根. 由于 $\boldsymbol{C}^{-1}\boldsymbol{B}^{-1}\boldsymbol{A}\boldsymbol{C}=\mathrm{diag}\{\mu_1,\mu_2,\cdots,\mu_n\}$, 故 $\mu_i$ 也是 $\boldsymbol{B}^{-1}\boldsymbol{A}$ 的特征值, 从而例 9.56 的结论仍然成立.

> [!example] 例 9.57
> 设 $\boldsymbol{A}$ 是 $m\times n$ 实矩阵, $\boldsymbol{B}$ 是 $s\times n$ 实矩阵, 又假设它们都是行满秩的. 令 $\boldsymbol{M}=\boldsymbol{A}\boldsymbol{B}'(\boldsymbol{B}\boldsymbol{B}')^{-1}\boldsymbol{B}\boldsymbol{A}'$, 证明: $\boldsymbol{M}$ 和 $\boldsymbol{A}\boldsymbol{A}'-\boldsymbol{M}$ 都是半正定阵, 并且 $|\boldsymbol{M}|\leq|\boldsymbol{A}\boldsymbol{A}'|$.

> [!proof]- 证明
> 设 $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}$, 则 $\boldsymbol{C}\boldsymbol{C}'=\begin{pmatrix} \boldsymbol{A}\boldsymbol{A}' & \boldsymbol{A}\boldsymbol{B}' \\ \boldsymbol{B}\boldsymbol{A}' & \boldsymbol{B}\boldsymbol{B}' \end{pmatrix}$ 是半正定阵. 因为 $\boldsymbol{A},\boldsymbol{B}$ 都是行满秩阵, 故由第 8 章解答题 6 可得 $\boldsymbol{A}\boldsymbol{A}'$, $\boldsymbol{B}\boldsymbol{B}'$ 都是正定阵, 从而 $(\boldsymbol{B}\boldsymbol{B}')^{-1}$ 也是正定阵, 于是 $\boldsymbol{M}=\boldsymbol{A}\boldsymbol{B}'(\boldsymbol{B}\boldsymbol{B}')^{-1}\boldsymbol{B}\boldsymbol{A}'$ 是半正定阵. 对矩阵 $\boldsymbol{C}\boldsymbol{C}'$ 实施对称分块初等变换可得
> $$\begin{pmatrix} \boldsymbol{A}\boldsymbol{A}' & \boldsymbol{A}\boldsymbol{B}' \\ \boldsymbol{B}\boldsymbol{A}' & \boldsymbol{B}\boldsymbol{B}' \end{pmatrix}\rightarrow\begin{pmatrix} \boldsymbol{A}\boldsymbol{A}'-\boldsymbol{A}\boldsymbol{B}'(\boldsymbol{B}\boldsymbol{B}')^{-1}\boldsymbol{B}\boldsymbol{A}' & \boldsymbol{O} \\ \boldsymbol{B}\boldsymbol{A}' & \boldsymbol{B}\boldsymbol{B}' \end{pmatrix}\rightarrow\begin{pmatrix} \boldsymbol{A}\boldsymbol{A}'-\boldsymbol{M} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B}\boldsymbol{B}' \end{pmatrix},$$
> 由此即得 $\boldsymbol{A}\boldsymbol{A}'-\boldsymbol{M}$ 是半正定阵. 再由半正定阵的性质即得 $|\boldsymbol{M}|\leq|\boldsymbol{A}\boldsymbol{A}'|$. $\square$


### § 9.7 实对称矩阵和实二次型的计算

用正交变换法化简二次型这一问题的计算比较复杂, 通常需要求出实对称矩阵的特征值, 还要对每个特征值用 Gram-Schmidt 方法求出标准正交特征向量, 计算量比较大. 下面我们将介绍一种不用 Gram-Schmidt 正交化方法求标准正交特征向量的方法, 它在矩阵阶数较大时比较有效. 为了方便起见, 我们通过具体的例题进行说明.

> [!example] 例 9.58
> 设三阶实对称矩阵 $\boldsymbol{A}$ 的秩等于 $2$, 并且
> $$\boldsymbol{A}\begin{pmatrix} 1 & 1 \\ 0 & 0 \\ -1 & 1 \end{pmatrix}=\begin{pmatrix} -1 & 1 \\ 0 & 0 \\ 1 & 1 \end{pmatrix},$$
> 求出矩阵 $\boldsymbol{A}$ 的所有特征值及特征向量, 并求出正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵.

> [!solution]- 解
> 设 $\boldsymbol{\alpha}_1=(1,0,-1)'$, $\boldsymbol{\alpha}_2=(1,0,1)'$, 则 $\boldsymbol{A}\boldsymbol{\alpha}_1=-\boldsymbol{\alpha}_1$, $\boldsymbol{A}\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_2$, 即 $\boldsymbol{A}$ 有特征值 $-1,1$, 它们对应的特征向量分别为 $\boldsymbol{\alpha}_1$, $\boldsymbol{\alpha}_2$. 由于 $\mathrm{r}(\boldsymbol{A})=2$, 故 $\boldsymbol{A}$ 是奇异阵, $0$ 是 $\boldsymbol{A}$ 的另一个特征值, 对应的特征向量记为 $\boldsymbol{\alpha}_3=(x_1,x_2,x_3)'$, 它与 $\boldsymbol{\alpha}_1$, $\boldsymbol{\alpha}_2$ 都正交, 即
> $$\begin{cases} x_1-x_3=0, \\ x_1+x_3=0, \end{cases}$$
> 从而 $\boldsymbol{\alpha}_3=(0,1,0)'$. 最后将 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 单位化后可得
> $$\boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \\ -\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{2}} & 0 \end{pmatrix}, \quad \boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{-1,1,0\}. \quad \square$$

> [!example] 例 9.59
> 设三阶实对称矩阵 $\boldsymbol{A}$ 的特征值为 $2,5,5$, 属于特征值 $2$ 的特征向量为 $(1,1,1)'$. 又设矩阵 $\boldsymbol{B}=2\boldsymbol{A}^2-\boldsymbol{A}+3\boldsymbol{I}$, 求矩阵 $\boldsymbol{B}$.


> [!solution]- 解
> 设属于特征值 $5$ 的线性无关特征向量为 $(x_1,x_2,x_3)'$, 则它和 $(1,1,1)'$ 正交, 即 $x_1+x_2+x_3=0$. 取基础解系为 $\boldsymbol{\alpha}_1=(-1,1,0)'$, $\boldsymbol{\alpha}_2=(-1,0,1)'$, 用 Gram-Schmidt 正交化方法可得
> $$\boldsymbol{\beta}_1=(-\dfrac{1}{\sqrt{2}},\dfrac{1}{\sqrt{2}},0)', \quad \boldsymbol{\beta}_2=(-\dfrac{1}{\sqrt{6}},-\dfrac{1}{\sqrt{6}},\dfrac{2}{\sqrt{6}})',$$
> 于是正交矩阵 $\boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{3}} & -\dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{6}} \\ \dfrac{1}{\sqrt{3}} & \dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{6}} \\ \dfrac{1}{\sqrt{3}} & 0 & \dfrac{2}{\sqrt{6}} \end{pmatrix}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{2,5,5\}$. 由 $\boldsymbol{B}=2\boldsymbol{A}^2-\boldsymbol{A}+3\boldsymbol{I}$ 可知 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}=\mathrm{diag}\{9,48,48\}$, 从而
> $$\boldsymbol{B}=\boldsymbol{P}\,\mathrm{diag}\{9,48,48\}\,\boldsymbol{P}'=\begin{pmatrix} 35 & -13 & -13 \\ -13 & 35 & -13 \\ -13 & -13 & 35 \end{pmatrix}. \quad \square$$

> [!example] 例 9.60
> 设 $n$ $(n>1)$ 阶实对称矩阵 $\boldsymbol{A}$ 的秩等于 $r$, 并且满足 $\boldsymbol{A}^2=\boldsymbol{A}$, 试求 $|\boldsymbol{I}_n+\boldsymbol{A}|$.

> [!solution]- 解
> 由 $\boldsymbol{A}^2=\boldsymbol{A}$ 可知, $\boldsymbol{A}$ 的特征值只能是 $0$ 或 $1$, 又由 $\boldsymbol{A}$ 实对称可知, 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{1,\cdots,1,0,\cdots,0\}$ (有 $r$ 个 $1$, $n-r$ 个 $0$), 于是
> $$|\boldsymbol{I}_n+\boldsymbol{A}|=|(\boldsymbol{P}')^{-1}\boldsymbol{P}^{-1}+(\boldsymbol{P}')^{-1}\boldsymbol{A}\boldsymbol{P}^{-1}|=|(\boldsymbol{P}')^{-1}(\boldsymbol{I}_n+\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P})\boldsymbol{P}^{-1}|$$
> $$=|\boldsymbol{P}|^{-2}|\mathrm{diag}\{2,\cdots,2,1,\cdots,1\}|=2^r. \quad \square$$

> [!example] 例 9.61
> 设四阶实对称矩阵
> $$\boldsymbol{A}=\begin{pmatrix} a & 0 & b & 0 \\ 0 & a & 0 & b \\ b & 0 & a & 0 \\ 0 & b & 0 & a \end{pmatrix},$$
> 其中 $a,b$ 为实数, 求正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵.


> [!solution]- 解
> 经计算 $|\lambda\boldsymbol{I}_4-\boldsymbol{A}|=(\lambda-a-b)(\lambda-a+b)(\lambda+a-b)(\lambda+a+b)$, 故 $\boldsymbol{A}$ 的特征值为 $a+b$, $a-b$, $-a+b$, $-a-b$. 直接验证可知它们对应的特征向量分别为 $(1,0,1,0)'$, $(1,0,-1,0)'$, $(0,1,0,1)'$, $(0,1,0,-1)'$, 它们两两正交, 将其单位化后即得正交矩阵:
> $$\boldsymbol{P}=\begin{pmatrix} \dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{2}} & 0 & 0 \\ 0 & 0 & \dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{2}} \\ \dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{2}} & 0 & 0 \\ 0 & 0 & \dfrac{1}{\sqrt{2}} & -\dfrac{1}{\sqrt{2}} \end{pmatrix},$$
> 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{a+b,a-b,-a+b,-a-b\}$. $\square$

> [!example] 例 9.62
> 设 $n$ 阶实对称矩阵 $\boldsymbol{A}=(a_{ij})$ 的 $n$ 个特征值为 $\lambda_1,\lambda_2,\cdots,\lambda_n$, 证明:
> $$\sum_{i=1}^n\lambda_i^2=\sum_{i,j=1}^n a_{ij}^2.$$

> [!proof]- 证明
> 由 $\boldsymbol{A}$ 为实对称矩阵可知, 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 故 $\boldsymbol{P}'\boldsymbol{A}^2\boldsymbol{P}=\mathrm{diag}\{\lambda_1^2,\lambda_2^2,\cdots,\lambda_n^2\}$, 从而 $\mathrm{tr}(\boldsymbol{A}^2)=\mathrm{tr}(\boldsymbol{P}'\boldsymbol{A}^2\boldsymbol{P})=\lambda_1^2+\lambda_2^2+\cdots+\lambda_n^2$. 又 $\boldsymbol{A}^2$ 的第 $i$ 个对角元为 $\sum_{j=1}^n a_{ij}a_{ji}=\sum_{j=1}^n a_{ij}^2$, 故 $\mathrm{tr}(\boldsymbol{A}^2)=\sum_{i,j=1}^n a_{ij}^2$, 从而结论成立. $\square$

> [!example] 例 9.63
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵, $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)'$, $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$, 证明: $f$ 在条件 $x_1^2+x_2^2+\cdots+x_n^2=1$ 下的最大值就是 $\boldsymbol{A}$ 的最大特征值, 最小值就是 $\boldsymbol{A}$ 的最小特征值.

> [!proof]- 证明
> 设 $\boldsymbol{A}$ 的 $n$ 个特征值为 $\lambda_1\leq\lambda_2\leq\cdots\leq\lambda_n$, 则存在正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ (其中 $\boldsymbol{P}$ 为正交矩阵), 使得
> $$f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=\lambda_1 y_1^2+\lambda_2 y_2^2+\cdots+\lambda_n y_n^2.$$
> 由 $\boldsymbol{x}$ 满足 $x_1^2+x_2^2+\cdots+x_n^2=1$ 可知, $y_1^2+y_2^2+\cdots+y_n^2=1$, 从而
> $$\lambda_1=\lambda_1(y_1^2+\cdots+y_n^2)\leq f(\boldsymbol{x})\leq\lambda_n(y_1^2+\cdots+y_n^2)=\lambda_n.$$
> 容易验证当 $\boldsymbol{y}=(1,0,\cdots,0)'$ 及 $\boldsymbol{y}=(0,\cdots,0,1)'$ 时, 上述两个等号分别能取到, 因此结论成立. $\square$


> [!example] 例 9.64
> 设 $\boldsymbol{A}$ 为 $n$ 阶半正定实对称矩阵, $\boldsymbol{\alpha}$ 是 $n$ 维实列向量, $b$ 是实数, $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}-2\boldsymbol{\alpha}'\boldsymbol{x}+b$, 证明: $f$ 的最小值等于 $b-\boldsymbol{\alpha}'\boldsymbol{A}^{+}\boldsymbol{\alpha}$, 其中 $\boldsymbol{A}^{+}$ 是 $\boldsymbol{A}$ 的 Moore-Penrose 广义逆.

> [!proof]- 证明
> 由半正定二次型的标准型理论可知, 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_r,0,\cdots,0\}$, 其中 $r=\mathrm{r}(\boldsymbol{A})$, $\lambda_i>0$ 为 $\boldsymbol{A}$ 的正特征值. 令 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$, $\boldsymbol{\beta}=\boldsymbol{P}'\boldsymbol{\alpha}=(b_1,\cdots,b_n)'$, 则
> $$f(\boldsymbol{x})=\sum_{i=1}^r\lambda_i y_i^2-2\sum_{i=1}^n b_i y_i+b=\sum_{i=1}^r\lambda_i(y_i-\dfrac{b_i}{\lambda_i})^2-\sum_{i=1}^r\dfrac{b_i^2}{\lambda_i}-2\sum_{i=r+1}^n b_i y_i+b.$$
> 若 $b_{r+1},\cdots,b_n$ 不全为零, 则 $f(\boldsymbol{x})$ 显然无下界; 若 $b_{r+1}=\cdots=b_n=0$, 则 $f(\boldsymbol{x})$ 的最小值在 $y_i=\dfrac{b_i}{\lambda_i}$ $(1\leq i\leq r)$ 时取到, 最小值为 $b-\sum_{i=1}^r\dfrac{b_i^2}{\lambda_i}$. 由广义逆的性质可知, 这就是 $b-\boldsymbol{\alpha}'\boldsymbol{A}^{+}\boldsymbol{\alpha}$, 结论得证. $\square$

> [!example] 例 9.65
> 设 $\boldsymbol{A}$ 是 $m\times n$ 实矩阵, $\boldsymbol{b}$ 是 $m$ 维实列向量, 证明: 线性方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 的最小二乘解 $\boldsymbol{x}_0$ 必满足 $\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{A}'\boldsymbol{b}$. 特别地, 当 $\boldsymbol{A}'\boldsymbol{A}$ 非异时, $\boldsymbol{x}_0=(\boldsymbol{A}'\boldsymbol{A})^{-1}\boldsymbol{A}'\boldsymbol{b}$.

> [!proof]- 证明
> 考虑函数 $f(\boldsymbol{x})=\|\boldsymbol{A}\boldsymbol{x}-\boldsymbol{b}\|^2=(\boldsymbol{A}\boldsymbol{x}-\boldsymbol{b})'(\boldsymbol{A}\boldsymbol{x}-\boldsymbol{b})=\boldsymbol{x}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}-2\boldsymbol{b}'\boldsymbol{A}\boldsymbol{x}+\boldsymbol{b}'\boldsymbol{b}$. 设 $\boldsymbol{x}_0$ 是最小二乘解, 即 $f(\boldsymbol{x})$ 在 $\boldsymbol{x}_0$ 处取得最小值. 任取 $\boldsymbol{h}\in\mathbb{R}^n$, 令 $g(t)=f(\boldsymbol{x}_0+t\boldsymbol{h})$, 则 $g(t)$ 在 $t=0$ 处取得最小值, 故 $g'(0)=0$. 经计算可得
> $$g'(0)=2\boldsymbol{h}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}_0-2\boldsymbol{h}'\boldsymbol{A}'\boldsymbol{b}=2\boldsymbol{h}'(\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}_0-\boldsymbol{A}'\boldsymbol{b}),$$
> 由 $\boldsymbol{h}$ 的任意性可知 $\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{A}'\boldsymbol{b}$. $\square$

> [!note] 注
> 例 9.65 中的方程 $\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x}=\boldsymbol{A}'\boldsymbol{b}$ 称为正规方程 (normal equations), 它是线性方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 的最小二乘解的充要条件. 当 $\boldsymbol{A}'\boldsymbol{A}$ 可逆时, 最小二乘解唯一; 当 $\boldsymbol{A}'\boldsymbol{A}$ 不可逆时, 最小二乘解不唯一, 此时可用广义逆或奇异值分解等方法求出最小范数最小二乘解.

> [!example] 例 9.66
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是同阶实矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}$ 是实对称矩阵. 求证: $\boldsymbol{A}\boldsymbol{B}$ 是正定阵的充要条件是 $\boldsymbol{B}$ 的特征值全是正实数.

> [!proof]- 证法 1
> 因为 $\boldsymbol{A}$ 正定, 所以 $\boldsymbol{A}^{-1}$ 也正定, 于是 $\boldsymbol{B}=\boldsymbol{A}^{-1}(\boldsymbol{A}\boldsymbol{B})$. 由例 9.53 可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'(\boldsymbol{A}\boldsymbol{B})\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i$ 是 $\boldsymbol{B}$ 的特征值. 因此 $\boldsymbol{A}\boldsymbol{B}$ 正定当且仅当 $\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$ 正定, 当且仅当 $\lambda_i>0$ $(1\leq i\leq n)$. $\square$


> [!proof]- 证法 2
> 设 $\boldsymbol{A}^{-1}(\boldsymbol{A}\boldsymbol{B})=\boldsymbol{B}$ 的特征值为 $\lambda_i$, 对应的特征向量为 $\boldsymbol{\alpha}_i$, 即 $\boldsymbol{B}\boldsymbol{\alpha}_i=\lambda_i\boldsymbol{\alpha}_i$, 从而 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}_i=\lambda_i\boldsymbol{A}\boldsymbol{\alpha}_i$. 对任意的非零向量 $\boldsymbol{\alpha}$, 由 $\boldsymbol{A}$ 正定可知 $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$. 若 $\boldsymbol{A}\boldsymbol{B}$ 正定, 则 $\boldsymbol{\alpha}'(\boldsymbol{A}\boldsymbol{B})\boldsymbol{\alpha}>0$, 特别地对 $\boldsymbol{\alpha}=\boldsymbol{\alpha}_i$ 有 $\lambda_i\boldsymbol{\alpha}_i'\boldsymbol{A}\boldsymbol{\alpha}_i>0$, 从而 $\lambda_i>0$. 反之, 若所有 $\lambda_i>0$, 则由例 9.53 可知 $\boldsymbol{A}\boldsymbol{B}$ 必可正交相似对角化, 其特征值全为正, 故 $\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$

> [!example] 例 9.67
> 设 $\boldsymbol{A},\boldsymbol{B}$ 都是 $n$ 阶正定实对称矩阵, 求证: $\boldsymbol{A}\boldsymbol{B}$ 是正定实对称矩阵的充要条件是 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$.

> [!proof]- 证法 1
> 若 $\boldsymbol{A}\boldsymbol{B}$ 是正定实对称矩阵, 则 $\boldsymbol{A}\boldsymbol{B}=(\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'=\boldsymbol{B}\boldsymbol{A}$. 反之, 若 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 则 $(\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{A}\boldsymbol{B}$, 即 $\boldsymbol{A}\boldsymbol{B}$ 是实对称矩阵. 由例 9.66 可知, $\boldsymbol{A}\boldsymbol{B}$ 的特征值全是正实数, 因此 $\boldsymbol{A}\boldsymbol{B}$ 是正定阵. $\square$

> [!proof]- 证法 2
> 因为 $\boldsymbol{A}$ 正定, 故 $\boldsymbol{A}^{-1}$ 也正定, 由例 9.53 可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}^{-1}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i>0$ 是 $\boldsymbol{A}\boldsymbol{B}$ 的特征值. 因为 $\boldsymbol{B}$ 正定, 故 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 也正定, 从而 $\lambda_i>0$, 因此 $\boldsymbol{A}\boldsymbol{B}$ 是正定阵. $\square$

> [!example] 例 9.68
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶正定实对称矩阵且 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 证明: $\sqrt[n]{|\boldsymbol{A}+\boldsymbol{B}|}\geq\sqrt[n]{|\boldsymbol{A}|}+\sqrt[n]{|\boldsymbol{B}|}$, 且等号成立当且仅当 $\boldsymbol{B}=c\boldsymbol{A}$ (其中 $c$ 为正实数).

> [!proof]- 证明
> 由 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$ 可知, $\boldsymbol{A}\boldsymbol{B}$ 是实对称矩阵. 又由例 9.67 可知, $\boldsymbol{A}\boldsymbol{B}$ 正定, 从而 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 也正定. 由例 9.53 可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i>0$ 是 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值. 由 Minkowski 不等式可得
> $$\sqrt[n]{|\boldsymbol{A}+\boldsymbol{B}|}=\sqrt[n]{|\boldsymbol{C}|^{-2}(1+\lambda_1)\cdots(1+\lambda_n)}$$
> $$\geq\sqrt[n]{|\boldsymbol{C}|^{-2}}+\sqrt[n]{|\boldsymbol{C}|^{-2}\lambda_1\cdots\lambda_n}=\sqrt[n]{|\boldsymbol{A}|}+\sqrt[n]{|\boldsymbol{B}|}.$$
> 等号成立的充要条件是 $\lambda_1=\cdots=\lambda_n=c$, 即 $\boldsymbol{B}=c\boldsymbol{A}$. $\square$


> [!example] 例 9.69
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定实对称矩阵, $\boldsymbol{x}$ 是 $n$ 维实列向量, $c$ 为实数, $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}+2\boldsymbol{\alpha}'\boldsymbol{x}+c$, 其中 $\boldsymbol{\alpha}$ 是 $n$ 维实列向量. 证明: $f$ 有最小值的充要条件是 $\boldsymbol{\alpha}\in\mathrm{Im}\boldsymbol{A}$.

> [!proof]- 证明
> 若 $\boldsymbol{\alpha}\in\mathrm{Im}\boldsymbol{A}$, 则存在 $\boldsymbol{\beta}\in\mathbb{R}^n$ 使得 $\boldsymbol{\alpha}=\boldsymbol{A}\boldsymbol{\beta}$. 由 $\boldsymbol{A}$ 半正定可知, 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_r,0,\cdots,0\}$, 其中 $r=\mathrm{r}(\boldsymbol{A})$, $\lambda_i>0$. 令 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$, $\boldsymbol{\beta}=\boldsymbol{P}\boldsymbol{\gamma}$, 则
> $$f(\boldsymbol{x})=\sum_{i=1}^r\lambda_i y_i^2+2\sum_{i=1}^r\lambda_i\gamma_i y_i+c=\sum_{i=1}^r\lambda_i(y_i+\gamma_i)^2-\sum_{i=1}^r\lambda_i\gamma_i^2+c,$$
> 当 $y_i=-\gamma_i$ $(1\leq i\leq r)$ 且 $y_{r+1},\cdots,y_n$ 任取时, $f(\boldsymbol{x})$ 取到最小值 $c-\boldsymbol{\beta}'\boldsymbol{A}\boldsymbol{\beta}=c-\boldsymbol{\alpha}'\boldsymbol{A}^{+}\boldsymbol{\alpha}$.
> 
> 反之, 若 $\boldsymbol{\alpha}\notin\mathrm{Im}\boldsymbol{A}$, 则 $\boldsymbol{\alpha}$ 可分解为 $\boldsymbol{\alpha}=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2$, 其中 $\boldsymbol{\alpha}_1\in\mathrm{Im}\boldsymbol{A}$, $\boldsymbol{\alpha}_2\in\mathrm{Ker}\boldsymbol{A}=(\mathrm{Im}\boldsymbol{A})^{\perp}$ 且 $\boldsymbol{\alpha}_2\neq\boldsymbol{0}$. 取 $\boldsymbol{x}=t\boldsymbol{\alpha}_2$ $(t\in\mathbb{R})$, 则
> $$f(t\boldsymbol{\alpha}_2)=2t\boldsymbol{\alpha}'\boldsymbol{\alpha}_2+c=2t\boldsymbol{\alpha}_2'\boldsymbol{\alpha}_2+c,$$
> 由于 $\boldsymbol{\alpha}_2'\boldsymbol{\alpha}_2>0$, 故当 $t\to-\infty$ 时, $f(t\boldsymbol{\alpha}_2)\to-\infty$, 即 $f$ 无下界, 从而 $f$ 没有最小值. $\square$

> [!example] 例 9.70
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵, $\boldsymbol{\alpha},\boldsymbol{\beta}$ 为 $n$ 维实列向量, 证明: $(\boldsymbol{\alpha}'\boldsymbol{\beta})^2\leq(\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha})(\boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\beta})$, 且等号成立当且仅当 $\boldsymbol{A}\boldsymbol{\alpha}$ 与 $\boldsymbol{\beta}$ 成比例.

> [!proof]- 证明
> 由 $\boldsymbol{A}$ 正定可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$, $\boldsymbol{A}^{-1}=(\boldsymbol{C}'\boldsymbol{C})^{-1}=\boldsymbol{C}^{-1}(\boldsymbol{C}^{-1})'$. 令 $\boldsymbol{C}\boldsymbol{\alpha}=\boldsymbol{x}$, $(\boldsymbol{C}^{-1})'\boldsymbol{\beta}=\boldsymbol{y}$, 则由 Cauchy-Schwarz 不等式可得
> $$(\boldsymbol{\alpha}'\boldsymbol{\beta})^2=(\boldsymbol{x}'\boldsymbol{y})^2\leq(\boldsymbol{x}'\boldsymbol{x})(\boldsymbol{y}'\boldsymbol{y})=(\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha})(\boldsymbol{\beta}'\boldsymbol{A}^{-1}\boldsymbol{\beta}).$$
> 等号成立当且仅当 $\boldsymbol{x}$ 与 $\boldsymbol{y}$ 成比例, 即 $\boldsymbol{C}\boldsymbol{\alpha}$ 与 $(\boldsymbol{C}^{-1})'\boldsymbol{\beta}$ 成比例, 这等价于 $\boldsymbol{A}\boldsymbol{\alpha}=\boldsymbol{C}'\boldsymbol{C}\boldsymbol{\alpha}$ 与 $\boldsymbol{C}'\boldsymbol{y}=\boldsymbol{\beta}$ 成比例. $\square$


> [!example] 例 9.71
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 正定, 证明: 当实数 $t$ 充分大时, $t\boldsymbol{A}+\boldsymbol{B}$ 也正定.

> [!proof]- 证明
> 由 $\boldsymbol{A}$ 正定可知, 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i>0$. 记 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}=(b_{ij})$, 则
> $$\boldsymbol{P}'(t\boldsymbol{A}+\boldsymbol{B})\boldsymbol{P}=\mathrm{diag}\{t\lambda_1,t\lambda_2,\cdots,t\lambda_n\}+(b_{ij}).$$
> 对任意的 $1\leq k\leq n$, 其顺序主子式 $\Delta_k$ 是关于 $t$ 的 $k$ 次多项式, 首项系数为 $\lambda_1\lambda_2\cdots\lambda_k>0$. 因此当 $t$ 充分大时, $\Delta_k>0$, 从而 $t\boldsymbol{A}+\boldsymbol{B}$ 正定. $\square$

> [!example] 例 9.72
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 正定, $\boldsymbol{B}$ 半正定. 证明: $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$, 且等号成立当且仅当 $\boldsymbol{B}=\boldsymbol{O}$.

> [!proof]- 证明
> 由例 9.53 可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\geq 0$ 是 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值. 于是
> $$|\boldsymbol{A}+\boldsymbol{B}|=|\boldsymbol{C}|^{-2}(1+\lambda_1)(1+\lambda_2)\cdots(1+\lambda_n)\geq|\boldsymbol{C}|^{-2}=|\boldsymbol{A}|,$$
> 等号成立当且仅当 $\lambda_1=\cdots=\lambda_n=0$, 即 $\boldsymbol{B}=\boldsymbol{O}$. $\square$

> [!example] 例 9.73
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 为 $n$ 阶非零半正定实对称矩阵, $c>0$. 证明: $|\boldsymbol{A}+c\boldsymbol{B}|>|\boldsymbol{A}|$.

> [!proof]- 证明
> 由 $\boldsymbol{B}$ 非零半正定可知, $\boldsymbol{B}$ 至少有一个特征值大于 $0$, 从而 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 至少有一个特征值大于 $0$. 由例 9.53 可知, 存在可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\geq 0$ 且至少有一个 $\lambda_i>0$. 于是
> $$|\boldsymbol{A}+c\boldsymbol{B}|=|\boldsymbol{C}|^{-2}(1+c\lambda_1)(1+c\lambda_2)\cdots(1+c\lambda_n)>|\boldsymbol{C}|^{-2}=|\boldsymbol{A}|. \quad \square$$

> [!example] 例 9.74
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{\alpha},\boldsymbol{\beta}$ 为 $n$ 维实列向量, 且 $\boldsymbol{\alpha}\neq\boldsymbol{0}$. 令 $f(t)=(\boldsymbol{\alpha}+t\boldsymbol{\beta})'\boldsymbol{A}(\boldsymbol{\alpha}+t\boldsymbol{\beta})$, 证明: $f(t)$ 是关于 $t$ 的二次函数, 且其最小值为 $\dfrac{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\cdot\boldsymbol{\beta}'\boldsymbol{A}\boldsymbol{\beta}-(\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\beta})^2}{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}}$.

> [!proof]- 证明
> 展开可得 $f(t)=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\cdot t^2+2\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\beta}\cdot t+\boldsymbol{\beta}'\boldsymbol{A}\boldsymbol{\beta}$. 由 $\boldsymbol{A}$ 正定且 $\boldsymbol{\alpha}\neq\boldsymbol{0}$ 可知 $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$, 故 $f(t)$ 是关于 $t$ 的开口向上的二次函数, 其最小值在 $t=-\dfrac{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\beta}}{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}}$ 处取到, 最小值为
> $$f(-\dfrac{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\beta}}{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}})=\dfrac{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\cdot\boldsymbol{\beta}'\boldsymbol{A}\boldsymbol{\beta}-(\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\beta})^2}{\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}}. \quad \square$$


#### 5. 极分解与奇异值分解

极分解是矩阵理论中一种重要的分解, 它在许多领域都有广泛的应用. 下面我们来讨论实矩阵和复矩阵的极分解.

> [!example] 例 9.75
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵, 证明: 存在正交矩阵 $\boldsymbol{Q}$ 和半正定实对称矩阵 $\boldsymbol{S}$, 使得 $\boldsymbol{A}=\boldsymbol{Q}\boldsymbol{S}$, 且这样的分解在 $\boldsymbol{A}$ 可逆时唯一.

> [!proof]- 证明
> 因为 $\boldsymbol{A}'\boldsymbol{A}$ 是半正定实对称矩阵, 故存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{A}'\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1^2,\cdots,\lambda_r^2,0,\cdots,0\}\boldsymbol{P}$, 其中 $\lambda_i>0$. 令 $\boldsymbol{S}_1=\mathrm{diag}\{\lambda_1,\cdots,\lambda_r,0,\cdots,0\}$, $\boldsymbol{S}=\boldsymbol{P}'\boldsymbol{S}_1\boldsymbol{P}$, 则 $\boldsymbol{S}$ 是半正定实对称矩阵, 且 $\boldsymbol{A}'\boldsymbol{A}=\boldsymbol{S}^2$. 对矩阵 $\boldsymbol{A}\boldsymbol{S}^{+}$ 和 $\boldsymbol{S}$ 的列分块使用例 9.29 的证法, 可得存在正交矩阵 $\boldsymbol{Q}$, 使得 $\boldsymbol{A}=\boldsymbol{Q}\boldsymbol{S}$.
> 
> 若 $\boldsymbol{A}$ 可逆, 则 $\boldsymbol{S}$ 也正定. 若 $\boldsymbol{A}=\boldsymbol{Q}_1\boldsymbol{S}_1=\boldsymbol{Q}_2\boldsymbol{S}_2$ 是两个极分解, 则 $\boldsymbol{A}'\boldsymbol{A}=\boldsymbol{S}_1^2=\boldsymbol{S}_2^2$. 由正定阵的平方根唯一可知 $\boldsymbol{S}_1=\boldsymbol{S}_2$, 从而 $\boldsymbol{Q}_1=\boldsymbol{Q}_2$. $\square$

> [!note] 注
> (1) 极分解中的 $\boldsymbol{S}=(\boldsymbol{A}'\boldsymbol{A})^{\frac{1}{2}}$ 由 $\boldsymbol{A}$ 唯一决定, 称为 $\boldsymbol{A}$ 的模 (modulus). 当 $\boldsymbol{A}$ 可逆时, $\boldsymbol{Q}=\boldsymbol{A}(\boldsymbol{A}'\boldsymbol{A})^{-\frac{1}{2}}$.

> [!example] 例 9.76
> 设 $\boldsymbol{A}$ 为 $n$ 阶复方阵, 证明: 存在酉矩阵 $\boldsymbol{U}$ 和半正定 Hermite 矩阵 $\boldsymbol{H}$, 使得 $\boldsymbol{A}=\boldsymbol{U}\boldsymbol{H}$, 且这样的分解在 $\boldsymbol{A}$ 可逆时唯一.

> [!proof]- 证明
> 与例 9.75 完全类似, 只需将正交矩阵改为酉矩阵, 实对称矩阵改为 Hermite 矩阵即可. $\square$

> [!note] 注
> (2) 极分解的几何意义: 任何线性变换都可以分解为一个正交 (酉) 变换 (保持度量) 和一个半正定自伴随变换 (在适当的标准正交基下表现为伸缩变换) 的乘积.


> [!example] 例 9.77
> 设 $\boldsymbol{A}$ 为 $m\times n$ 实矩阵, 证明: 存在 $m$ 阶正交矩阵 $\boldsymbol{P}$ 和 $n$ 阶正交矩阵 $\boldsymbol{Q}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{Q}=\mathrm{diag}\{\sigma_1,\cdots,\sigma_r,0,\cdots,0\}$, 其中 $\sigma_1\geq\sigma_2\geq\cdots\geq\sigma_r>0$ 是 $\boldsymbol{A}$ 的正奇异值, $r=\mathrm{r}(\boldsymbol{A})$.

> [!proof]- 证明
> 由例 9.75 可知, 存在 $m$ 阶正交矩阵 $\boldsymbol{P}$ 和 $n$ 阶半正定实对称矩阵 $\boldsymbol{S}$, 使得 $\boldsymbol{A}=\boldsymbol{P}\begin{pmatrix} \boldsymbol{S}_1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, 其中 $\boldsymbol{S}_1$ 是 $r$ 阶正定实对称矩阵. 对 $\boldsymbol{S}_1$ 用正交相似标准化, 即存在 $r$ 阶正交矩阵 $\boldsymbol{Q}_1$, 使得 $\boldsymbol{Q}_1'\boldsymbol{S}_1\boldsymbol{Q}_1=\mathrm{diag}\{\sigma_1,\cdots,\sigma_r\}$, 其中 $\sigma_1\geq\cdots\geq\sigma_r>0$. 令 $\boldsymbol{Q}=\begin{pmatrix} \boldsymbol{Q}_1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{I}_{n-r} \end{pmatrix}$, 则 $\boldsymbol{Q}$ 是 $n$ 阶正交矩阵, 且 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{Q}=\mathrm{diag}\{\sigma_1,\cdots,\sigma_r,0,\cdots,0\}$. $\square$

> [!note] 注
> (1) 例 9.77 中的分解称为 $\boldsymbol{A}$ 的奇异值分解 (singular value decomposition, SVD), 它在矩阵计算、数据压缩、主成分分析等领域有极其广泛的应用.

> [!example] 例 9.78
> 设 $\boldsymbol{A}$ 为 $m\times n$ 实矩阵, $\boldsymbol{b}$ 为 $m$ 维实列向量, 证明: 线性方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 的最小二乘解中范数最小者为 $\boldsymbol{x}_0=\boldsymbol{A}^{+}\boldsymbol{b}$, 其中 $\boldsymbol{A}^{+}$ 是 $\boldsymbol{A}$ 的 Moore-Penrose 广义逆.

> [!proof]- 证明
> 由奇异值分解, 存在 $m$ 阶正交矩阵 $\boldsymbol{P}$ 和 $n$ 阶正交矩阵 $\boldsymbol{Q}$, 使得 $\boldsymbol{A}=\boldsymbol{P}\begin{pmatrix} \boldsymbol{\Sigma} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}'$, 其中 $\boldsymbol{\Sigma}=\mathrm{diag}\{\sigma_1,\cdots,\sigma_r\}$, $\sigma_i>0$. 令 $\boldsymbol{P}'\boldsymbol{b}=\begin{pmatrix} \boldsymbol{c}_1 \\ \boldsymbol{c}_2 \end{pmatrix}$, $\boldsymbol{Q}'\boldsymbol{x}=\begin{pmatrix} \boldsymbol{y}_1 \\ \boldsymbol{y}_2 \end{pmatrix}$, 其中 $\boldsymbol{c}_1,\boldsymbol{y}_1$ 都是 $r$ 维列向量, 则
> $$\|\boldsymbol{A}\boldsymbol{x}-\boldsymbol{b}\|^2=\|\begin{pmatrix} \boldsymbol{\Sigma} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\begin{pmatrix} \boldsymbol{y}_1 \\ \boldsymbol{y}_2 \end{pmatrix}-\begin{pmatrix} \boldsymbol{c}_1 \\ \boldsymbol{c}_2 \end{pmatrix}\|^2=\|\boldsymbol{\Sigma}\boldsymbol{y}_1-\boldsymbol{c}_1\|^2+\|\boldsymbol{c}_2\|^2.$$
> 上式在 $\boldsymbol{y}_1=\boldsymbol{\Sigma}^{-1}\boldsymbol{c}_1$ 时取到最小值, 而 $\boldsymbol{y}_2$ 可以任取. 为使 $\|\boldsymbol{x}\|^2=\|\boldsymbol{y}_1\|^2+\|\boldsymbol{y}_2\|^2$ 最小, 应取 $\boldsymbol{y}_2=\boldsymbol{0}$, 故最小范数最小二乘解为 $\boldsymbol{x}_0=\boldsymbol{Q}\begin{pmatrix} \boldsymbol{\Sigma}^{-1}\boldsymbol{c}_1 \\ \boldsymbol{0} \end{pmatrix}=\boldsymbol{Q}\begin{pmatrix} \boldsymbol{\Sigma}^{-1} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}'\boldsymbol{b}=\boldsymbol{A}^{+}\boldsymbol{b}$. $\square$


### § 9.8 同时合同对角化

本节主要讨论两个实对称矩阵同时合同对角化的问题. 首先, 我们考虑两个矩阵可以同时合同对角化的条件.

> [!example] 例 9.79
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 正定, 证明: 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是矩阵 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的全体特征值.

> [!proof]- 证明
> 这是例 9.53 的重述, 它给出了正定阵 $\boldsymbol{A}$ 和任意实对称矩阵 $\boldsymbol{B}$ 可以同时合同对角化的结论. $\square$

> [!example] 例 9.80
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 正定, 证明: $\boldsymbol{A}\geq\boldsymbol{B}$ 的充要条件是 $\boldsymbol{B}\boldsymbol{A}^{-1}$ 的特征值全不超过 $1$.

> [!proof]- 证明
> 由例 9.79 可知, 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i$ 是 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 的特征值. 于是 $\boldsymbol{A}\geq\boldsymbol{B}$ 当且仅当 $\boldsymbol{C}'(\boldsymbol{A}-\boldsymbol{B})\boldsymbol{C}=\mathrm{diag}\{1-\lambda_1,\cdots,1-\lambda_n\}\geq\boldsymbol{O}$, 当且仅当 $\lambda_i\leq 1$ $(1\leq i\leq n)$. $\square$

> [!example] 例 9.81
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶正定实对称矩阵, 证明: 若 $\boldsymbol{A}\geq\boldsymbol{B}$, 则 $\boldsymbol{B}^{-1}\geq\boldsymbol{A}^{-1}$.

> [!proof]- 证明
> 由例 9.79 可知, 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $0<\lambda_i\leq 1$ (因为 $\boldsymbol{B}\leq\boldsymbol{A}$ 且 $\boldsymbol{B}$ 正定). 于是 $\boldsymbol{C}^{-1}\boldsymbol{A}^{-1}(\boldsymbol{C}')^{-1}=\boldsymbol{I}_n$, $\boldsymbol{C}^{-1}\boldsymbol{B}^{-1}(\boldsymbol{C}')^{-1}=\mathrm{diag}\{\lambda_1^{-1},\lambda_2^{-1},\cdots,\lambda_n^{-1}\}$, 其中 $\lambda_i^{-1}\geq 1$. 因此 $\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1}=(\boldsymbol{C}')^{-1}\mathrm{diag}\{\lambda_1^{-1}-1,\cdots,\lambda_n^{-1}-1\}\boldsymbol{C}^{-1}\geq\boldsymbol{O}$, 即 $\boldsymbol{B}^{-1}\geq\boldsymbol{A}^{-1}$. $\square$

> [!note] 注
> (1) 例 9.81 表明, 正定矩阵的序关系在取逆运算下反向. 这个结论在半正定情形下也成立, 此时需要使用 Moore-Penrose 广义逆.

> [!example] 例 9.82
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶半正定实对称矩阵, 证明: 存在实可逆矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 和 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 都是对角矩阵.


> [!proof]- 证明
> 设 $\mathrm{r}(\boldsymbol{A})=r$, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$. 令 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}=\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix}$, 其中 $\boldsymbol{B}_{11}$ 是 $r$ 阶实对称矩阵. 由例 8.75 可知 $\mathrm{r}(\boldsymbol{B}_{21};\boldsymbol{B}_{22})=\mathrm{r}(\boldsymbol{B}_{22})$, 故存在实矩阵 $\boldsymbol{M}$, 使得 $\boldsymbol{B}_{21}=\boldsymbol{B}_{22}\boldsymbol{M}$. 考虑两个矩阵如下的同时合同变换:
> $$\begin{pmatrix} \boldsymbol{I}_r & -\boldsymbol{M}' \\ \boldsymbol{O} & \boldsymbol{I}_{n-r} \end{pmatrix}\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ -\boldsymbol{M} & \boldsymbol{I}_{n-r} \end{pmatrix}=\begin{pmatrix} \boldsymbol{B}_{11}-\boldsymbol{M}'\boldsymbol{B}_{22}\boldsymbol{M} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B}_{22} \end{pmatrix},$$
> $$\begin{pmatrix} \boldsymbol{I}_r & -\boldsymbol{M}' \\ \boldsymbol{O} & \boldsymbol{I}_{n-r} \end{pmatrix}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ -\boldsymbol{M} & \boldsymbol{I}_{n-r} \end{pmatrix}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}.$$
> 由于 $\boldsymbol{B}_{11}-\boldsymbol{M}'\boldsymbol{B}_{22}\boldsymbol{M}$ 和 $\boldsymbol{B}_{22}$ 都是半正定阵, 故存在正交矩阵 $\boldsymbol{Q}_1,\boldsymbol{Q}_2$, 使得
> $$\boldsymbol{Q}_1'(\boldsymbol{B}_{11}-\boldsymbol{M}'\boldsymbol{B}_{22}\boldsymbol{M})\boldsymbol{Q}_1=\mathrm{diag}\{\mu_1,\cdots,\mu_r\}, \quad \boldsymbol{Q}_2'\boldsymbol{B}_{22}\boldsymbol{Q}_2=\mathrm{diag}\{\mu_{r+1},\cdots,\mu_n\}.$$
> 令 $\boldsymbol{C}=\boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ -\boldsymbol{M} & \boldsymbol{I}_{n-r} \end{pmatrix}\begin{pmatrix} \boldsymbol{Q}_1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q}_2 \end{pmatrix}$, 则 $\boldsymbol{C}$ 是可逆矩阵, 使得
> $$\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\mathrm{diag}\{1,\cdots,1,0,\cdots,0\}, \quad \boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\mu_1,\cdots,\mu_r,\mu_{r+1},\cdots,\mu_n\}. \quad \square$$

> [!example] 例 9.83
> 设 $\boldsymbol{A},\boldsymbol{B}$ 为 $n$ 阶半正定实对称矩阵, 求证:
> (1) $\boldsymbol{A}+\boldsymbol{B}$ 是正定阵的充要条件是存在 $n$ 个线性无关的实列向量 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n$, 以及指标集 $I\subseteq\{1,2,\cdots,n\}$, 使得
> $$\boldsymbol{\alpha}_i'\boldsymbol{A}\boldsymbol{\alpha}_j=\boldsymbol{\alpha}_i'\boldsymbol{B}\boldsymbol{\alpha}_j=0 \ (\forall i\neq j), \quad \boldsymbol{\alpha}_i'\boldsymbol{A}\boldsymbol{\alpha}_i>0 \ (\forall i\in I), \quad \boldsymbol{\alpha}_j'\boldsymbol{B}\boldsymbol{\alpha}_j>0 \ (\forall j\notin I);$$
> (2) $\mathrm{r}(\boldsymbol{A};\boldsymbol{B})=\mathrm{r}(\boldsymbol{A}+\boldsymbol{B})$.

> [!proof]- 证明
> (1) 在例 9.82 中, 令 $\boldsymbol{C}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)$ 为其列分块, 由此即得结论.
> (2) 证明 $\mathrm{r}(\boldsymbol{A};\boldsymbol{B})=\mathrm{r}(\boldsymbol{A}+\boldsymbol{B})$ 有 3 种方法. 第一种是利用线性方程组的求解理论, 其讨论过程类似于例 8.76 的证法 1. 第二种方法是直接利用例 8.76 的结论, 请参考例 8.77 的证明. 第三种方法是直接利用例 9.82 的结论, 有 $\mathrm{r}(\boldsymbol{A};\boldsymbol{B})=\mathrm{r}(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C};\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})$, 此时 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 和 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 都是半正定对角矩阵. 若 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 和 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 同一行的主对角元全为零, 则 $(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C};\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})$ 和 $\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C}$ 的这一行都是零向量, 对求秩不起作用; 若 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 和 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 同一行的主对角元至少有一个大于零, 则 $(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C};\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})$ 和 $\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C}$ 的这一行对求秩都起了加 1 的作用, 因此 $\mathrm{r}(\boldsymbol{A};\boldsymbol{B})=\mathrm{r}(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C};\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})=\mathrm{r}(\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C})=\mathrm{r}(\boldsymbol{A}+\boldsymbol{B})$. $\square$


> [!example] 例 9.84
> 设 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}$ 都是 $n$ 阶半正定实对称矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}$ 是对称矩阵, 即满足 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\boldsymbol{C}\boldsymbol{B}\boldsymbol{A}$, 求证: $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}$ 是半正定阵.

> [!proof]- 证明
> 由例 9.82 可知, 存在可逆矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{1,\cdots,1,0,\cdots,0\}, \quad \boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}=\mathrm{diag}\{\mu_1,\cdots,\mu_r,\mu_{r+1},\cdots,\mu_n\}.$$
> 注意到问题的条件和结论在合同变换 $\boldsymbol{A}\mapsto\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$, $\boldsymbol{B}\mapsto\boldsymbol{P}^{-1}\boldsymbol{B}(\boldsymbol{P}^{-1})'$, $\boldsymbol{C}\mapsto\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}$ 下不改变, 故不妨从一开始就假设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{\Lambda}_1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{\Lambda}_2 \end{pmatrix}$, 其中 $r=\mathrm{r}(\boldsymbol{A})$, $\boldsymbol{\Lambda}_1=\mathrm{diag}\{\mu_1,\cdots,\mu_r\}$, $\boldsymbol{\Lambda}_2=\mathrm{diag}\{\mu_{r+1},\cdots,\mu_n\}$ 都是半正定对角矩阵. 设 $\boldsymbol{B}=\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix}$ 为对应的分块, 则由 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\begin{pmatrix} \boldsymbol{B}_{11}\boldsymbol{\Lambda}_1 & \boldsymbol{B}_{12}\boldsymbol{\Lambda}_2 \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 是对称矩阵可知, $\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1$ 是对称矩阵且 $\boldsymbol{B}_{12}\boldsymbol{\Lambda}_2=\boldsymbol{O}$. 由 $\boldsymbol{B}$ 半正定可得 $\boldsymbol{B}_{11}$ 半正定, 再由例 9.67 的半正定版本可知 $\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1$ 是半正定阵, 因此 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1,\boldsymbol{O}\}$ 也是半正定阵. $\square$

### § 9.9 Schur 定理

对于一般的复 (实) 矩阵, 我们当然不能期望它酉相似 (正交相似) 于对角矩阵. 但对于复矩阵, 我们可以证明它必酉相似于上三角矩阵, 这就是著名的 Schur 定理. 下面我们给出一个简洁的代数证明, 其几何证明请参考教材 [1].

> [!example] 例 9.85
> 设 $\boldsymbol{A}$ 是 $n$ 阶复矩阵, 求证: 存在 $n$ 阶酉矩阵 $\boldsymbol{U}$, 使得 $\boldsymbol{U}^{-1}\boldsymbol{A}\boldsymbol{U}$ 是上三角矩阵.

> [!proof]- 证明
> 由例 6.39 可知, 存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{M}$ 是上三角矩阵. 又由例 9.13 可知, 存在酉矩阵 $\boldsymbol{U}$ 和上三角矩阵 $\boldsymbol{R}$, 使得 $\boldsymbol{P}=\boldsymbol{U}\boldsymbol{R}$, 于是
> $$\boldsymbol{A}=\boldsymbol{P}\boldsymbol{M}\boldsymbol{P}^{-1}=(\boldsymbol{U}\boldsymbol{R})\boldsymbol{M}(\boldsymbol{U}\boldsymbol{R})^{-1}=\boldsymbol{U}(\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1})\boldsymbol{U}^{-1}.$$
> 因为上三角矩阵的逆阵是上三角矩阵, 上三角矩阵的乘积是上三角矩阵, 故 $\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1}$ 仍是上三角矩阵, 从而 $\boldsymbol{U}^{-1}\boldsymbol{A}\boldsymbol{U}=\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1}$ 是上三角矩阵. $\square$


> [!note] 注
> (1) Schur 定理表明, 任何复方阵都酉相似于一个上三角矩阵, 其对角元就是该矩阵的全部特征值. 这个定理是矩阵理论中的一个基本结果, 由此可以导出许多重要的推论.

> [!corollary] 推论 9.10
> 设 $\boldsymbol{A}$ 为 $n$ 阶复方阵, $\lambda_1,\lambda_2,\cdots,\lambda_n$ 为其全部特征值, 则 $\boldsymbol{A}$ 为正规矩阵的充要条件是
> $$\sum_{i=1}^n|\lambda_i|^2=\sum_{i,j=1}^n|a_{ij}|^2,$$
> 其中 $\boldsymbol{A}=(a_{ij})$.

> [!proof]- 证明
> 由 Schur 定理, 存在酉矩阵 $\boldsymbol{U}$, 使得 $\boldsymbol{U}^{-1}\boldsymbol{A}\boldsymbol{U}=\boldsymbol{B}=(b_{ij})$ 为上三角矩阵, 其中 $b_{ii}=\lambda_i$. 于是 $\boldsymbol{A}$ 正规当且仅当 $\boldsymbol{B}$ 正规, 当且仅当 $\boldsymbol{B}\boldsymbol{B}^*=\boldsymbol{B}^*\boldsymbol{B}$. 注意到 $\boldsymbol{B}\boldsymbol{B}^*$ 的对角元为 $\sum_{j=1}^n|b_{ij}|^2$, $\boldsymbol{B}^*\boldsymbol{B}$ 的对角元为 $\sum_{i=1}^n|b_{ij}|^2$, 由 $\boldsymbol{B}\boldsymbol{B}^*=\boldsymbol{B}^*\boldsymbol{B}$ 的对角元相等可得 $\sum_{i,j=1}^n|b_{ij}|^2=\sum_{i=1}^n|\lambda_i|^2$, 这等价于 $\boldsymbol{B}$ 是对角矩阵, 也等价于 $\boldsymbol{A}$ 正规. 又由酉相似不改变 Frobenius 范数, 即 $\sum_{i,j=1}^n|a_{ij}|^2=\sum_{i,j=1}^n|b_{ij}|^2$, 故结论成立. $\square$

> [!example] 例 9.86
> 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵, 虚数 $a+b\mathrm{i}$ 是 $\boldsymbol{A}$ 的一个特征值, $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$ 是对应的特征向量, 其中 $\boldsymbol{u},\boldsymbol{v}$ 是实列向量. 求证: $\boldsymbol{u},\boldsymbol{v}$ 必线性无关. 若 $\boldsymbol{A}$ 是正规矩阵, 则 $\boldsymbol{u},\boldsymbol{v}$ 相互正交且长度相同 (取实列向量空间的标准内积).

> [!proof]- 证明
> 由假设
> $$\boldsymbol{A}(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a+b\mathrm{i})(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a\boldsymbol{u}-b\boldsymbol{v})+(a\boldsymbol{v}+b\boldsymbol{u})\mathrm{i}. \tag{9.12}$$
> 假设 $\boldsymbol{u},\boldsymbol{v}$ 线性相关, 不妨设 $\boldsymbol{u}\neq\boldsymbol{0}$, $\boldsymbol{v}=k\boldsymbol{u}$, 则 $(1+k\mathrm{i})\boldsymbol{A}\boldsymbol{u}=(1+k\mathrm{i})(a+b\mathrm{i})\boldsymbol{u}$, 于是 $\boldsymbol{A}\boldsymbol{u}=(a+b\mathrm{i})\boldsymbol{u}$, 由此可得 $\boldsymbol{A}\boldsymbol{u}=a\boldsymbol{u}$, $b\boldsymbol{u}=\boldsymbol{0}$, 这与 $b\neq 0$ 且 $\boldsymbol{u}\neq\boldsymbol{0}$ 相矛盾.
> 
> 若 $\boldsymbol{A}$ 是正规矩阵, 在 (9.12) 式中比较实部和虚部得到
> $$\boldsymbol{A}\boldsymbol{u}=a\boldsymbol{u}-b\boldsymbol{v}, \quad \boldsymbol{A}\boldsymbol{v}=a\boldsymbol{v}+b\boldsymbol{u}.$$
> 因为 $\boldsymbol{A}$ 正规, 故由例 9.28 可知, $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$ 也是 $\boldsymbol{A}'$ 的属于特征值 $a-b\mathrm{i}$ 的特征向量, 即
> $$\boldsymbol{A}'(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a-b\mathrm{i})(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a\boldsymbol{u}+b\boldsymbol{v})+(a\boldsymbol{v}-b\boldsymbol{u})\mathrm{i}.$$
> 比较实部和虚部得到
> $$\boldsymbol{A}'\boldsymbol{u}=a\boldsymbol{u}+b\boldsymbol{v}, \quad \boldsymbol{A}'\boldsymbol{v}=a\boldsymbol{v}-b\boldsymbol{u}.$$
> 又 $(\boldsymbol{A}\boldsymbol{u},\boldsymbol{u})=(\boldsymbol{u},\boldsymbol{A}'\boldsymbol{u})$, $(\boldsymbol{A}\boldsymbol{u},\boldsymbol{v})=(\boldsymbol{u},\boldsymbol{A}'\boldsymbol{v})$, 将 $\boldsymbol{A}\boldsymbol{u},\boldsymbol{A}'\boldsymbol{u}$ 及 $\boldsymbol{A}'\boldsymbol{v}$ 代入得到
> $$(a\boldsymbol{u}-b\boldsymbol{v},\boldsymbol{u})=(\boldsymbol{u},a\boldsymbol{u}+b\boldsymbol{v}), \quad (a\boldsymbol{u}-b\boldsymbol{v},\boldsymbol{v})=(\boldsymbol{u},a\boldsymbol{v}-b\boldsymbol{u}).$$
> 由此可得 $(\boldsymbol{u},\boldsymbol{v})=0$, $(\boldsymbol{u},\boldsymbol{u})=(\boldsymbol{v},\boldsymbol{v})$. $\square$


> [!example] 例 9.87
> 证明: $n$ 阶实方阵 $\boldsymbol{A}$ 必正交相似于下列分块上三角矩阵:
> $$\boldsymbol{C}=\begin{pmatrix} \boldsymbol{A}_1 & & & * \\ & \ddots & & \\ & & \boldsymbol{A}_r & \\ & & & c_1 \\ & & & \ddots \\ & & & & c_k \end{pmatrix},$$
> 其中 $\boldsymbol{A}_i$ $(1\leq i\leq r)$ 是二阶实矩阵且 $\boldsymbol{A}_i$ 的特征值具有 $a_i\pm b_i\mathrm{i}$ $(b_i\neq 0)$ 的形状, $c_j$ $(1\leq j\leq k)$ 是实数.

> [!proof]- 证明
> 对阶数 $n$ 进行归纳. 当 $n=0$ 时表示归纳过程已结束, 当 $n=1$ 时结论显然成立. 现设对阶小于 $n$ 的矩阵结论成立, 下分两种情况对 $n$ 阶矩阵 $\boldsymbol{A}$ 进行讨论.
> 
> 首先, 假设 $\boldsymbol{A}$ 有实特征值 $\lambda$. 因为 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 有相同的特征值, 故 $\lambda$ 也是 $\boldsymbol{A}'$ 的特征值. 将 $\boldsymbol{A}$ 看成是 $n$ 维实列向量空间 $\mathbb{R}^n$ (取标准内积) 上的线性变换, 显然 $\boldsymbol{A}'$ 是 $\boldsymbol{A}$ 的伴随. 设 $\boldsymbol{e}_n$ 是 $\boldsymbol{A}'$ 的属于特征值 $\lambda$ 的单位特征向量, 则 $L(\boldsymbol{e}_n)^{\perp}$ 是 $\boldsymbol{A}$ 的不变子空间. 将 $\boldsymbol{A}$ 限制在 $L(\boldsymbol{e}_n)^{\perp}$ 上, 由归纳假设, 存在 $L(\boldsymbol{e}_n)^{\perp}$ 的标准正交基 $\boldsymbol{e}_1,\cdots,\boldsymbol{e}_{n-1}$, 使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵为分块上三角矩阵. 于是在标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 下, 线性变换 $\boldsymbol{A}$ 的表示矩阵就是要求的矩阵 $\boldsymbol{C}$. 因为线性变换 $\boldsymbol{A}'$ 在同一组标准正交基下的表示矩阵为 $\boldsymbol{C}'$, 故由 $\boldsymbol{A}'\boldsymbol{e}_n=\lambda\boldsymbol{e}_n$ 可知 $\lambda=c_k$.
> 
> 其次, 假设 $\boldsymbol{A}$ 没有实特征值, 并设 $a+b\mathrm{i}$ 是 $\boldsymbol{A}$ 的虚特征值. 因为 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 有相同的特征值, 故 $a+b\mathrm{i}$ 也是 $\boldsymbol{A}'$ 的特征值. 假设 $\boldsymbol{A}'$ 的属于特征值 $a+b\mathrm{i}$ 的特征向量为 $\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i}$, 其中 $\boldsymbol{\alpha},\boldsymbol{\beta}$ 是实列向量, 则有
> $$\boldsymbol{A}'(\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i})=(a+b\mathrm{i})(\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i}).$$
> 比较实部和虚部得到
> $$\boldsymbol{A}'\boldsymbol{\alpha}=a\boldsymbol{\alpha}-b\boldsymbol{\beta}, \quad \boldsymbol{A}'\boldsymbol{\beta}=b\boldsymbol{\alpha}+a\boldsymbol{\beta}.$$
> 由例 9.86 可知, $\boldsymbol{\alpha},\boldsymbol{\beta}$ 必线性无关. 设 $U=L(\boldsymbol{\alpha},\boldsymbol{\beta})$ 为 $\mathbb{R}^n$ 的子空间, 则上式表明 $U$ 是线性变换 $\boldsymbol{A}'$ 的不变子空间, 于是 $U^{\perp}$ 是 $\boldsymbol{A}'$ 的伴随 $\boldsymbol{A}$ 的不变子空间. 注意到 $\dim U^{\perp}=n-2$, 故由归纳假设, 存在 $U^{\perp}$ 的标准正交基 $\boldsymbol{e}_1,\cdots,\boldsymbol{e}_{n-2}$, 使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵为分块上三角矩阵:
> $$\begin{pmatrix} \boldsymbol{A}_1 & & * \\ & \ddots & \\ & & \boldsymbol{A}_{r-1} \end{pmatrix}.$$
> 在 $U$ 中选取一组标准正交基 $\boldsymbol{e}_{n-1},\boldsymbol{e}_n$, 则在标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 下, 线性变换 $\boldsymbol{A}$ 的表示矩阵为:
> $$\boldsymbol{D}=\begin{pmatrix} \boldsymbol{A}_1 & & * \\ & \ddots & \\ & & \boldsymbol{A}_{r-1} \\ & & & \boldsymbol{A}_r \end{pmatrix}.$$
> 由于线性变换 $\boldsymbol{A}'$ 在同一组标准正交基下的表示矩阵为 $\boldsymbol{D}'$, 故 $\boldsymbol{A}_r$ 是 $\boldsymbol{A}'$ 在 $U$ 的标准正交基 $\boldsymbol{e}_{n-1},\boldsymbol{e}_n$ 下的表示矩阵. 又 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ 是 $\boldsymbol{A}'$ 在 $U$ 的基 $\boldsymbol{\alpha},\boldsymbol{\beta}$ 下的表示矩阵, 于是 $\boldsymbol{A}_r$ 相似于 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$, 从而它的特征值也为 $a\pm b\mathrm{i}$. $\square$


> [!corollary] 推论 9.11
> (实 Schur 标准型定理) 任何 $n$ 阶实方阵都正交相似于形如 (9.9) 的分块上三角矩阵, 其中对角块为不超过二阶的实矩阵, 且一阶对角块为实特征值, 二阶对角块为具有一对共轭复特征值的实矩阵.

> [!proof]- 证明
> 这就是例 9.87 的重述. $\square$

> [!example] 例 9.88
> 设 $n$ 阶实矩阵 $\boldsymbol{A}$ 的特征值全是实数, 求证: $\boldsymbol{A}$ 正交相似于上三角矩阵.

> [!proof]- 证明
> 这是例 9.87 的直接推论. 另外, 也可由例 6.39 和例 9.13 的实版本, 采用完全类似于例 9.85 的讨论得到. $\square$

> [!example] 例 9.89
> 设 $\boldsymbol{A},\boldsymbol{B}$ 是实方阵且分块矩阵 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$ 是实正规矩阵, 求证: $\boldsymbol{C}=\boldsymbol{O}$ 且 $\boldsymbol{A},\boldsymbol{B}$ 也是正规矩阵.

> [!proof]- 证明
> 由已知
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}\begin{pmatrix} \boldsymbol{A}' & \boldsymbol{O} \\ \boldsymbol{C}' & \boldsymbol{B}' \end{pmatrix}=\begin{pmatrix} \boldsymbol{A}' & \boldsymbol{O} \\ \boldsymbol{C}' & \boldsymbol{B}' \end{pmatrix}\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix},$$
> 从而 $\boldsymbol{A}\boldsymbol{A}'+\boldsymbol{C}\boldsymbol{C}'=\boldsymbol{A}'\boldsymbol{A}$. 由于 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{A}'+\boldsymbol{C}\boldsymbol{C}')=\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A})=\mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$, 故可得 $\mathrm{tr}(\boldsymbol{C}\boldsymbol{C}')=0$, 再由 $\boldsymbol{C}$ 是实矩阵可推出 $\boldsymbol{C}=\boldsymbol{O}$, 于是 $\boldsymbol{A}\boldsymbol{A}'=\boldsymbol{A}'\boldsymbol{A}$, $\boldsymbol{B}\boldsymbol{B}'=\boldsymbol{B}'\boldsymbol{B}$. $\square$

> [!note] 注
> 利用例 9.87 和例 9.89 的结论, 可以给出实正规矩阵正交相似标准型的一个代数证明, 它和教材 [1] 中的纯几何证明完全不同.

> [!example] 例 9.90
> 设 $\boldsymbol{A}$ 是 $n$ 阶实正规矩阵, 求证: 存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{A}_1,\cdots,\boldsymbol{A}_r,c_{2r+1},\cdots,c_n\},$$
> 其中 $\boldsymbol{A}_i=\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ $(1\leq i\leq r)$ 是二阶实矩阵, $c_j$ $(2r+1\leq j\leq n)$ 是实数.

> [!proof]- 证明
> 由例 9.87, $\boldsymbol{A}$ 正交相似于例 9.87 中的分块上三角矩阵, 再反复用例 9.89 的结论可知这是个分块对角矩阵. 又因为每一块都是正规矩阵, 故或是二阶正规矩阵 $\boldsymbol{A}_i$, 或是实数 $c_j$ (一阶矩阵). 对于二阶正规矩阵的情形, 由例 9.86 的证明过程可知, 若设 $\boldsymbol{A}_i$ 的特征值为 $a_i+b_i\mathrm{i}$, 对应的特征向量为 $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$, 令 $\boldsymbol{P}_i=(\dfrac{\boldsymbol{u}}{\|\boldsymbol{u}\|},\dfrac{\boldsymbol{v}}{\|\boldsymbol{v}\|})$, 则 $\boldsymbol{P}_i$ 为二阶正交矩阵, 且 $\boldsymbol{P}_i'\boldsymbol{A}_i\boldsymbol{P}_i=\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$. $\square$


> [!example] 例 9.67 (半正定版本)
> 设 $\boldsymbol{A},\boldsymbol{B}$ 都是 $n$ 阶半正定实对称矩阵, 求证: $\boldsymbol{A}\boldsymbol{B}$ 是半正定实对称矩阵的充要条件是 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$.

> [!proof]- 证明
> 由例 9.64 (2) 可知, $\boldsymbol{A}\boldsymbol{B}$ 的特征值全大于等于零, 因此 $\boldsymbol{A}\boldsymbol{B}$ 是半正定阵当且仅当它是实对称矩阵, 即 $\boldsymbol{A}\boldsymbol{B}=(\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}\boldsymbol{A}$. $\square$

> [!example] 例 9.84
> 设 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}$ 都是 $n$ 阶半正定实对称矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}$ 是对称矩阵, 即满足 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\boldsymbol{C}\boldsymbol{B}\boldsymbol{A}$, 求证: $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}$ 是半正定阵.

> [!proof]- 证明
> 由例 9.82 可知, 存在可逆矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{1,\cdots,1,0,\cdots,0\}, \quad \boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}=\mathrm{diag}\{\mu_1,\cdots,\mu_r,\mu_{r+1},\cdots,\mu_n\}.$$
> 注意到问题的条件和结论在合同变换 $\boldsymbol{A}\mapsto\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$, $\boldsymbol{B}\mapsto\boldsymbol{P}^{-1}\boldsymbol{B}(\boldsymbol{P}^{-1})'$, $\boldsymbol{C}\mapsto\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}$ 下不改变, 故不妨从一开始就假设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{\Lambda}_1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{\Lambda}_2 \end{pmatrix}$, 其中 $r=\mathrm{r}(\boldsymbol{A})$, $\boldsymbol{\Lambda}_1=\mathrm{diag}\{\mu_1,\cdots,\mu_r\}$, $\boldsymbol{\Lambda}_2=\mathrm{diag}\{\mu_{r+1},\cdots,\mu_n\}$ 都是半正定对角矩阵. 设 $\boldsymbol{B}=\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix}$ 为对应的分块, 则由 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\begin{pmatrix} \boldsymbol{B}_{11}\boldsymbol{\Lambda}_1 & \boldsymbol{B}_{12}\boldsymbol{\Lambda}_2 \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 是对称矩阵可知, $\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1$ 是对称矩阵且 $\boldsymbol{B}_{12}\boldsymbol{\Lambda}_2=\boldsymbol{O}$. 由 $\boldsymbol{B}$ 半正定可得 $\boldsymbol{B}_{11}$ 半正定, 再由例 9.67 的半正定版本可知 $\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1$ 是半正定阵, 因此 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\boldsymbol{B}_{11}\boldsymbol{\Lambda}_1,\boldsymbol{O}\}$ 也是半正定阵. $\square$

### § 9.9 Schur 定理

对于一般的复 (实) 矩阵, 我们当然不能期望它酉相似 (正交相似) 于对角矩阵. 但对于复矩阵, 我们可以证明它必酉相似于上三角矩阵, 这就是著名的 Schur 定理. 下面我们给出一个简洁的代数证明, 其几何证明请参考教材 [1].

> [!example] 例 9.85
> 设 $\boldsymbol{A}$ 是 $n$ 阶复矩阵, 求证: 存在 $n$ 阶酉矩阵 $\boldsymbol{U}$, 使得 $\boldsymbol{U}^{-1}\boldsymbol{A}\boldsymbol{U}$ 是上三角矩阵.

> [!proof]- 证明
> 由例 6.39 可知, 存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{M}$ 是上三角矩阵. 又由例 9.13 可知, 存在酉矩阵 $\boldsymbol{U}$ 和上三角矩阵 $\boldsymbol{R}$, 使得 $\boldsymbol{P}=\boldsymbol{U}\boldsymbol{R}$, 于是
> $$\boldsymbol{A}=\boldsymbol{P}\boldsymbol{M}\boldsymbol{P}^{-1}=(\boldsymbol{U}\boldsymbol{R})\boldsymbol{M}(\boldsymbol{U}\boldsymbol{R})^{-1}=\boldsymbol{U}(\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1})\boldsymbol{U}^{-1}.$$
> 因为上三角矩阵的逆阵是上三角矩阵, 上三角矩阵的乘积是上三角矩阵, 故 $\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1}$ 仍是上三角矩阵, 从而 $\boldsymbol{U}^{-1}\boldsymbol{A}\boldsymbol{U}=\boldsymbol{R}\boldsymbol{M}\boldsymbol{R}^{-1}$ 是上三角矩阵. $\square$

> [!note] 注
> (1) Schur 定理是矩阵理论中的一个基本定理, 由此可以导出许多重要的推论, 如正规矩阵的酉相似对角化、Cayley-Hamilton 定理等.


下面我们来证明实数域上的 Schur 定理, 即例 9.87. 因为实矩阵的特征值未必都是实数, 故任意一个实方阵只能正交相似于分块上三角矩阵, 证明也更加复杂一些. 首先, 我们来讨论实矩阵的复特征值和复特征向量的相关性质.

> [!example] 例 9.86
> 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵, 虚数 $a+b\mathrm{i}$ 是 $\boldsymbol{A}$ 的一个特征值, $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$ 是对应的特征向量, 其中 $\boldsymbol{u},\boldsymbol{v}$ 是实列向量. 求证: $\boldsymbol{u},\boldsymbol{v}$ 必线性无关. 若 $\boldsymbol{A}$ 是正规矩阵, 则 $\boldsymbol{u},\boldsymbol{v}$ 相互正交且长度相同 (取实列向量空间的标准内积).

> [!proof]- 证明
> 由假设
> $$\boldsymbol{A}(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a+b\mathrm{i})(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a\boldsymbol{u}-b\boldsymbol{v})+(a\boldsymbol{v}+b\boldsymbol{u})\mathrm{i}. \tag{9.12}$$
> 假设 $\boldsymbol{u},\boldsymbol{v}$ 线性相关, 不妨设 $\boldsymbol{u}\neq\boldsymbol{0}$, $\boldsymbol{v}=k\boldsymbol{u}$, 则 $(1+k\mathrm{i})\boldsymbol{A}\boldsymbol{u}=(1+k\mathrm{i})(a+b\mathrm{i})\boldsymbol{u}$, 于是 $\boldsymbol{A}\boldsymbol{u}=(a+b\mathrm{i})\boldsymbol{u}$, 由此可得 $\boldsymbol{A}\boldsymbol{u}=a\boldsymbol{u}$, $b\boldsymbol{u}=\boldsymbol{0}$, 这与 $b\neq 0$ 且 $\boldsymbol{u}\neq\boldsymbol{0}$ 相矛盾.
> 
> 若 $\boldsymbol{A}$ 是正规矩阵, 在 (9.12) 式中比较实部和虚部得到
> $$\boldsymbol{A}\boldsymbol{u}=a\boldsymbol{u}-b\boldsymbol{v}, \quad \boldsymbol{A}\boldsymbol{v}=a\boldsymbol{v}+b\boldsymbol{u}.$$
> 因为 $\boldsymbol{A}$ 正规, 故由例 9.28 可知, $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$ 也是 $\boldsymbol{A}'$ 的属于特征值 $a-b\mathrm{i}$ 的特征向量, 即
> $$\boldsymbol{A}'(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a-b\mathrm{i})(\boldsymbol{u}+\boldsymbol{v}\mathrm{i})=(a\boldsymbol{u}+b\boldsymbol{v})+(a\boldsymbol{v}-b\boldsymbol{u})\mathrm{i}.$$
> 比较实部和虚部得到
> $$\boldsymbol{A}'\boldsymbol{u}=a\boldsymbol{u}+b\boldsymbol{v}, \quad \boldsymbol{A}'\boldsymbol{v}=a\boldsymbol{v}-b\boldsymbol{u}.$$
> 又 $(\boldsymbol{A}\boldsymbol{u},\boldsymbol{u})=(\boldsymbol{u},\boldsymbol{A}'\boldsymbol{u})$, $(\boldsymbol{A}\boldsymbol{u},\boldsymbol{v})=(\boldsymbol{u},\boldsymbol{A}'\boldsymbol{v})$, 将 $\boldsymbol{A}\boldsymbol{u},\boldsymbol{A}'\boldsymbol{u}$ 及 $\boldsymbol{A}'\boldsymbol{v}$ 代入得到
> $$(a\boldsymbol{u}-b\boldsymbol{v},\boldsymbol{u})=(\boldsymbol{u},a\boldsymbol{u}+b\boldsymbol{v}), \quad (a\boldsymbol{u}-b\boldsymbol{v},\boldsymbol{v})=(\boldsymbol{u},a\boldsymbol{v}-b\boldsymbol{u}).$$
> 由此可得 $(\boldsymbol{u},\boldsymbol{v})=0$, $(\boldsymbol{u},\boldsymbol{u})=(\boldsymbol{v},\boldsymbol{v})$. $\square$

> [!example] 例 9.87
> 证明: $n$ 阶实方阵 $\boldsymbol{A}$ 必正交相似于下列分块上三角矩阵:
> $$\boldsymbol{C}=\begin{pmatrix} \boldsymbol{A}_1 & & & * \\ & \ddots & & \\ & & \boldsymbol{A}_r & \\ & & & c_1 \\ & & & \ddots \\ & & & & c_k \end{pmatrix},$$
> 其中 $\boldsymbol{A}_i$ $(1\leq i\leq r)$ 是二阶实矩阵且 $\boldsymbol{A}_i$ 的特征值具有 $a_i\pm b_i\mathrm{i}$ $(b_i\neq 0)$ 的形状, $c_j$ $(1\leq j\leq k)$ 是实数.


> [!proof]- 证明
> 对阶数 $n$ 进行归纳. 当 $n=0$ 时表示归纳过程已结束, 当 $n=1$ 时结论显然成立. 现设对阶小于 $n$ 的矩阵结论成立, 下分两种情况对 $n$ 阶矩阵 $\boldsymbol{A}$ 进行讨论.
> 
> 首先, 假设 $\boldsymbol{A}$ 有实特征值 $\lambda$. 因为 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 有相同的特征值, 故 $\lambda$ 也是 $\boldsymbol{A}'$ 的特征值. 将 $\boldsymbol{A}$ 看成是 $n$ 维实列向量空间 $\mathbb{R}^n$ (取标准内积) 上的线性变换, 显然 $\boldsymbol{A}'$ 是 $\boldsymbol{A}$ 的伴随. 设 $\boldsymbol{e}_n$ 是 $\boldsymbol{A}'$ 的属于特征值 $\lambda$ 的单位特征向量, 则 $L(\boldsymbol{e}_n)^{\perp}$ 是 $\boldsymbol{A}$ 的不变子空间. 将 $\boldsymbol{A}$ 限制在 $L(\boldsymbol{e}_n)^{\perp}$ 上, 由归纳假设, 存在 $L(\boldsymbol{e}_n)^{\perp}$ 的标准正交基 $\boldsymbol{e}_1,\cdots,\boldsymbol{e}_{n-1}$, 使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵为分块上三角矩阵. 于是在标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 下, 线性变换 $\boldsymbol{A}$ 的表示矩阵就是要求的矩阵 $\boldsymbol{C}$. 因为线性变换 $\boldsymbol{A}'$ 在同一组标准正交基下的表示矩阵为 $\boldsymbol{C}'$, 故由 $\boldsymbol{A}'\boldsymbol{e}_n=\lambda\boldsymbol{e}_n$ 可知 $\lambda=c_k$.
> 
> 其次, 假设 $\boldsymbol{A}$ 没有实特征值, 并设 $a+b\mathrm{i}$ 是 $\boldsymbol{A}$ 的虚特征值. 因为 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 有相同的特征值, 故 $a+b\mathrm{i}$ 也是 $\boldsymbol{A}'$ 的特征值. 假设 $\boldsymbol{A}'$ 的属于特征值 $a+b\mathrm{i}$ 的特征向量为 $\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i}$, 其中 $\boldsymbol{\alpha},\boldsymbol{\beta}$ 是实列向量, 则有
> $$\boldsymbol{A}'(\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i})=(a+b\mathrm{i})(\boldsymbol{\alpha}+\boldsymbol{\beta}\mathrm{i}).$$
> 比较实部和虚部得到
> $$\boldsymbol{A}'\boldsymbol{\alpha}=a\boldsymbol{\alpha}-b\boldsymbol{\beta}, \quad \boldsymbol{A}'\boldsymbol{\beta}=b\boldsymbol{\alpha}+a\boldsymbol{\beta}.$$
> 由例 9.86 可知, $\boldsymbol{\alpha},\boldsymbol{\beta}$ 必线性无关. 设 $U=L(\boldsymbol{\alpha},\boldsymbol{\beta})$ 为 $\mathbb{R}^n$ 的子空间, 则上式表明 $U$ 是线性变换 $\boldsymbol{A}'$ 的不变子空间, 于是 $U^{\perp}$ 是 $\boldsymbol{A}'$ 的伴随 $\boldsymbol{A}$ 的不变子空间. 注意到 $\dim U^{\perp}=n-2$, 故由归纳假设, 存在 $U^{\perp}$ 的标准正交基 $\boldsymbol{e}_1,\cdots,\boldsymbol{e}_{n-2}$, 使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵为分块上三角矩阵:
> $$\begin{pmatrix} \boldsymbol{A}_1 & & * \\ & \ddots & \\ & & \boldsymbol{A}_{r-1} \end{pmatrix}.$$
> 在 $U$ 中选取一组标准正交基 $\boldsymbol{e}_{n-1},\boldsymbol{e}_n$, 则在标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 下, 线性变换 $\boldsymbol{A}$ 的表示矩阵为:
> $$\boldsymbol{D}=\begin{pmatrix} \boldsymbol{A}_1 & & * \\ & \ddots & \\ & & \boldsymbol{A}_{r-1} \\ & & & \boldsymbol{A}_r \end{pmatrix}.$$
> 由于线性变换 $\boldsymbol{A}'$ 在同一组标准正交基下的表示矩阵为 $\boldsymbol{D}'$, 故 $\boldsymbol{A}_r$ 是 $\boldsymbol{A}'$ 在 $U$ 的标准正交基 $\boldsymbol{e}_{n-1},\boldsymbol{e}_n$ 下的表示矩阵. 又 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ 是 $\boldsymbol{A}'$ 在 $U$ 的基 $\boldsymbol{\alpha},\boldsymbol{\beta}$ 下的表示矩阵, 于是 $\boldsymbol{A}_r$ 相似于 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$, 从而它的特征值也为 $a\pm b\mathrm{i}$. $\square$


> [!example] 例 9.88
> 设 $n$ 阶实矩阵 $\boldsymbol{A}$ 的特征值全是实数, 求证: $\boldsymbol{A}$ 正交相似于上三角矩阵.

> [!proof]- 证明
> 这是例 9.87 的直接推论. 另外, 也可由例 6.39 和例 9.13 的实版本, 采用完全类似于例 9.85 的讨论得到. $\square$

> [!example] 例 9.89
> 设 $\boldsymbol{A},\boldsymbol{B}$ 是实方阵且分块矩阵 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$ 是实正规矩阵, 求证: $\boldsymbol{C}=\boldsymbol{O}$ 且 $\boldsymbol{A},\boldsymbol{B}$ 也是正规矩阵.

> [!proof]- 证明
> 由已知
> $$\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}\begin{pmatrix} \boldsymbol{A}' & \boldsymbol{O} \\ \boldsymbol{C}' & \boldsymbol{B}' \end{pmatrix}=\begin{pmatrix} \boldsymbol{A}' & \boldsymbol{O} \\ \boldsymbol{C}' & \boldsymbol{B}' \end{pmatrix}\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix},$$
> 从而 $\boldsymbol{A}\boldsymbol{A}'+\boldsymbol{C}\boldsymbol{C}'=\boldsymbol{A}'\boldsymbol{A}$. 由于 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{A}'+\boldsymbol{C}\boldsymbol{C}')=\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A})=\mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$, 故可得 $\mathrm{tr}(\boldsymbol{C}\boldsymbol{C}')=0$, 再由 $\boldsymbol{C}$ 是实矩阵可推出 $\boldsymbol{C}=\boldsymbol{O}$, 于是 $\boldsymbol{A}\boldsymbol{A}'=\boldsymbol{A}'\boldsymbol{A}$, $\boldsymbol{B}\boldsymbol{B}'=\boldsymbol{B}'\boldsymbol{B}$. $\square$

利用例 9.87 和例 9.89 的结论, 可以给出实正规矩阵正交相似标准型的一个代数证明, 它和教材 [1] 中的纯几何证明完全不同.

> [!example] 例 9.90
> 设 $\boldsymbol{A}$ 是 $n$ 阶实正规矩阵, 求证: 存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{A}_1,\cdots,\boldsymbol{A}_r,c_{2r+1},\cdots,c_n\},$$
> 其中 $\boldsymbol{A}_i=\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ $(1\leq i\leq r)$ 是二阶实矩阵, $c_j$ $(2r+1\leq j\leq n)$ 是实数.

> [!proof]- 证明
> 由例 9.87, $\boldsymbol{A}$ 正交相似于例 9.87 中的分块上三角矩阵, 再反复用例 9.89 的结论可知这是个分块对角矩阵. 又因为每一块都是正规矩阵, 故或是二阶正规矩阵 $\boldsymbol{A}_i$, 或是实数 $c_j$ (一阶矩阵). 对于二阶正规矩阵的情形, 由例 9.86 的证明过程可知, 若设 $\boldsymbol{A}_i$ 的特征值为 $a_i+b_i\mathrm{i}$, 对应的特征向量为 $\boldsymbol{u}+\boldsymbol{v}\mathrm{i}$, 令 $\boldsymbol{P}_i=(\dfrac{\boldsymbol{u}}{\|\boldsymbol{u}\|},\dfrac{\boldsymbol{v}}{\|\boldsymbol{v}\|})$, 则 $\boldsymbol{P}_i$ 为二阶正交矩阵, 且 $\boldsymbol{P}_i'\boldsymbol{A}_i\boldsymbol{P}_i=\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$. $\square$


### § 9.10 复正规算子与复正规矩阵

酉空间 $V$ 上的线性变换 $\varphi$ 是正规算子的充要条件是存在 $V$ 的一组标准正交基, 使得 $\varphi$ 在这组基下的表示矩阵为对角矩阵. 酉变换、Hermite 变换以及斜 Hermite 变换都是正规算子的常见例子. 本节将给出酉空间 $V$ 上的线性变换 $\varphi$ 是正规算子的其他几个充要条件, 以及复正规矩阵的一些性质等.

> [!example] 例 9.91
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 $V$ 中任意的向量 $\boldsymbol{\alpha}$, 都有 $\|\varphi(\boldsymbol{\alpha})\|=\|\varphi^*(\boldsymbol{\alpha})\|$.

> [!proof]- 证法 1
> 必要性由例 9.28 给出, 现证充分性. 我们只要证明对任意的 $\boldsymbol{u},\boldsymbol{v}\in V$, 都有 $(\varphi(\boldsymbol{u}),\varphi(\boldsymbol{v}))=(\varphi^*(\boldsymbol{u}),\varphi^*(\boldsymbol{v}))$. 事实上, 由上述等式可知 $(\boldsymbol{u},\varphi^*\varphi(\boldsymbol{v}))=(\boldsymbol{u},\varphi\varphi^*(\boldsymbol{v}))$ 成立, 由此即可推出 $\varphi\varphi^*=\varphi^*\varphi$. 我们可以仿照教材 [1] 中证明保持范数的线性变换一定保持内积的方法进行讨论. 注意到在酉空间 $V$ 中, 内积可用范数来表示, 即对任意的 $\boldsymbol{u},\boldsymbol{v}\in V$,
> $$(\boldsymbol{u},\boldsymbol{v})=\frac{1}{4}\|\boldsymbol{u}+\boldsymbol{v}\|^2-\frac{1}{4}\|\boldsymbol{u}-\boldsymbol{v}\|^2+\frac{\mathrm{i}}{4}\|\boldsymbol{u}+\mathrm{i}\boldsymbol{v}\|^2-\frac{\mathrm{i}}{4}\|\boldsymbol{u}-\mathrm{i}\boldsymbol{v}\|^2,$$
> 故由 $\varphi,\varphi^*$ 的线性可得
> $$\begin{aligned}(\varphi(\boldsymbol{u}),\varphi(\boldsymbol{v}))&=\frac{1}{4}\|\varphi(\boldsymbol{u}+\boldsymbol{v})\|^2-\frac{1}{4}\|\varphi(\boldsymbol{u}-\boldsymbol{v})\|^2+\frac{\mathrm{i}}{4}\|\varphi(\boldsymbol{u}+\mathrm{i}\boldsymbol{v})\|^2-\frac{\mathrm{i}}{4}\|\varphi(\boldsymbol{u}-\mathrm{i}\boldsymbol{v})\|^2\\ &=\frac{1}{4}\|\varphi^*(\boldsymbol{u}+\boldsymbol{v})\|^2-\frac{1}{4}\|\varphi^*(\boldsymbol{u}-\boldsymbol{v})\|^2+\frac{\mathrm{i}}{4}\|\varphi^*(\boldsymbol{u}+\mathrm{i}\boldsymbol{v})\|^2-\frac{\mathrm{i}}{4}\|\varphi^*(\boldsymbol{u}-\mathrm{i}\boldsymbol{v})\|^2\\ &=(\varphi^*(\boldsymbol{u}),\varphi^*(\boldsymbol{v})).\end{aligned}$$

> [!proof]- 证法 2
> 考虑线性算子 $\varphi\varphi^*-\varphi^*\varphi$, 这是一个自伴随算子, 因此存在 $V$ 的一组标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$, 使得 $\varphi\varphi^*-\varphi^*\varphi$ 在这组基下的表示矩阵是对角矩阵 $\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 即有 $(\varphi\varphi^*-\varphi^*\varphi)(\boldsymbol{e}_i)=\lambda_i\boldsymbol{e}_i$ $(1\leq i\leq n)$. 于是
> $$\lambda_i(\boldsymbol{e}_i,\boldsymbol{e}_i)=(\lambda_i\boldsymbol{e}_i,\boldsymbol{e}_i)=((\varphi\varphi^*-\varphi^*\varphi)(\boldsymbol{e}_i),\boldsymbol{e}_i)=(\varphi^*(\boldsymbol{e}_i),\varphi^*(\boldsymbol{e}_i))-(\varphi(\boldsymbol{e}_i),\varphi(\boldsymbol{e}_i))=0,$$
> 从而 $\lambda_i=0$ $(1\leq i\leq n)$, 因此 $\varphi\varphi^*=\varphi^*\varphi$. $\square$

> [!example] 例 9.92
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是若 $\boldsymbol{v}$ 是 $\varphi$ 属于特征值 $\lambda$ 的特征向量, 则 $\boldsymbol{v}$ 也是 $\varphi^*$ 属于特征值 $\overline{\lambda}$ 的特征向量.

> [!proof]- 证法 1
> 必要性就是例 9.28, 现证充分性. 对维数 $n$ 进行归纳, 当 $n=1$ 时结论显然成立, 假设对 $n-1$ 维酉空间结论成立. 设 $\boldsymbol{v}$ 是 $\varphi$ 的属于特征值 $\lambda$ 的特征向量, 即 $\varphi(\boldsymbol{v})=\lambda\boldsymbol{v}$, 由条件可知, $\varphi^*(\boldsymbol{v})=\overline{\lambda}\boldsymbol{v}$. 记 $U=L(\boldsymbol{v})^{\perp}$, 则 $\dim U=n-1$, 由例 9.26 可知 $U$ 是 $\varphi$ 及 $\varphi^*$ 的不变子空间. 将 $\varphi$ 和 $\varphi^*$ 限制在 $U$ 上, 容易验证 $\varphi^*|_U=(\varphi|_U)^*$, 故由归纳假设可知, $\varphi|_U$ 是 $U$ 上的正规算子, 即 $\varphi|_U\varphi^*|_U=\varphi^*|_U\varphi|_U$. 显然 $\varphi\varphi^*(\boldsymbol{v})=\varphi^*\varphi(\boldsymbol{v})$, 因此 $\varphi\varphi^*=\varphi^*\varphi$ 成立, 即 $\varphi$ 是 $V$ 上的正规算子.


> [!proof]- 证法 2
> 由 Schur 定理可知, 存在 $V$ 的一组标准正交基 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$, 使得 $\varphi$ 在这组基下的表示矩阵是上三角矩阵 $\boldsymbol{A}=(a_{ij})$, 于是 $\varphi^*$ 在同一组基下的表示矩阵为 $\overline{\boldsymbol{A}}'$. 注意到
> $$\varphi(\boldsymbol{e}_1)=a_{11}\boldsymbol{e}_1, \quad \varphi^*(\boldsymbol{e}_1)=\overline{a_{11}}\boldsymbol{e}_1+\overline{a_{12}}\boldsymbol{e}_2+\cdots+\overline{a_{1n}}\boldsymbol{e}_n,$$
> 但由条件可知 $\varphi^*(\boldsymbol{e}_1)=\overline{a_{11}}\boldsymbol{e}_1$, 因此 $a_{12}=\cdots=a_{1n}=0$. 同理不断地讨论下去, 可得 $a_{ij}=0$ $(1\leq i<j\leq n)$, 于是 $\boldsymbol{A}$ 是对角矩阵. 因此 $\varphi$ 在一组标准正交基下的表示矩阵是对角矩阵, 从而 $\varphi$ 是正规算子. $\square$

> [!note] 注
> 在教材 [1] 中, 我们采用了如下证法: $\varphi\varphi^*=\varphi^*\varphi$ $\Rightarrow$ 例 9.91 的充分条件 $\Rightarrow$ 例 9.92 的充分条件 $\Rightarrow$ $\varphi$ 在一组标准正交基下的表示矩阵是对角矩阵 $\Rightarrow$ $\varphi\varphi^*=\varphi^*\varphi$. 因此在这个意义下, 例 9.91 和例 9.92 其实是自然的推论.

> [!example] 例 9.93
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 $\varphi$ 的任一特征值 $\lambda_0$, 都有 $V=\mathrm{Ker}(\varphi-\lambda_0I_V)\perp\mathrm{Im}(\varphi-\lambda_0I_V)$.

> [!proof]- 证明
> 设 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同特征值, $V_1,V_2,\cdots,V_k$ 是对应的特征子空间. 先证必要性. 若 $\varphi$ 是正规算子, 则 $V=V_1\perp V_2\perp\cdots\perp V_k$. 容易验证 $\mathrm{Ker}(\varphi-\lambda_iI_V)=V_i$, $\mathrm{Im}(\varphi-\lambda_iI_V)=V_1\perp\cdots\perp V_{i-1}\perp V_{i+1}\perp\cdots\perp V_k$, 于是 $V=\mathrm{Ker}(\varphi-\lambda_iI_V)\perp\mathrm{Im}(\varphi-\lambda_iI_V)$ $(1\leq i\leq k)$.
> 
> 再证充分性. 由条件可知, 对 $\varphi$ 的任一特征值 $\lambda_0$, 都有 $\mathrm{Ker}(\varphi-\lambda_0I_V)\cap\mathrm{Im}(\varphi-\lambda_0I_V)=0$, 故由例 7.40 可知 $\varphi$ 可对角化, 于是 $V=V_1\oplus V_2\oplus\cdots\oplus V_k$. 对任意的 $1\leq i\neq j\leq k$, $V_i=\mathrm{Ker}(\varphi-\lambda_iI_V)$, $V_j\subseteq\mathrm{Im}(\varphi-\lambda_iI_V)$, 于是 $V_i\perp V_j$, 从而 $V=V_1\perp V_2\perp\cdots\perp V_k$, 因此 $\varphi$ 是正规算子. $\square$

利用复正规算子的谱分解, 我们还可以证明下面 3 个充要条件.

> [!example] 例 9.94
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi=\varphi_1+\mathrm{i}\varphi_2$, 其中 $\varphi_1$ 和 $\varphi_2$ 是自伴随算子且 $\varphi_1\varphi_2=\varphi_2\varphi_1$.

> [!proof]- 证明
> 先证充分性. 由条件可知, $\varphi\varphi^*=(\varphi_1+\mathrm{i}\varphi_2)(\varphi_1-\mathrm{i}\varphi_2)=\varphi_1^2+\varphi_2^2=\varphi^*\varphi$.
> 再证必要性. 令
> $$\varphi_1=\frac{1}{2}(\varphi+\varphi^*), \quad \varphi_2=\frac{1}{2\mathrm{i}}(\varphi-\varphi^*),$$


则容易验证 $\varphi_1,\varphi_2$ 是自伴随算子且乘法可交换. 上述构造用谱分解来看更加清楚, 设 $\varphi=\lambda_1\boldsymbol{E}_1+\lambda_2\boldsymbol{E}_2+\cdots+\lambda_k\boldsymbol{E}_k$, 其中 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同特征值, $\boldsymbol{E}_i$ 是从 $V$ 到 $\lambda_i$ 的特征子空间 $V_i$ 的正交投影. 设 $\lambda_i=a_i+\mathrm{i}b_i$, 其中 $a_i,b_i$ 是实数, 令

$$\varphi_1=a_1\boldsymbol{E}_1+a_2\boldsymbol{E}_2+\cdots+a_k\boldsymbol{E}_k, \quad \varphi_2=b_1\boldsymbol{E}_1+b_2\boldsymbol{E}_2+\cdots+b_k\boldsymbol{E}_k,$$

则容易验证 $\varphi=\varphi_1+\mathrm{i}\varphi_2$, $\varphi_1,\varphi_2$ 是自伴随算子且 $\varphi_1\varphi_2=\varphi_2\varphi_1$. $\square$

> [!example] 例 9.95
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是存在某个复系数多项式 $f(x)$, 使得 $\varphi^*=f(\varphi)$.

> [!proof]- 证明
> 先证充分性. 若 $\varphi^*=f(\varphi)$, 显然有 $\varphi\varphi^*=\varphi^*\varphi$, 因此 $\varphi$ 是正规算子.

再证必要性. 设 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同特征值, 由谱分解定理, 有

$$\varphi=\lambda_1\boldsymbol{E}_1+\lambda_2\boldsymbol{E}_2+\cdots+\lambda_k\boldsymbol{E}_k.$$

因为 $\boldsymbol{E}_i^*=\boldsymbol{E}_i$, 所以

$$\varphi^*=\overline{\lambda_1}\boldsymbol{E}_1+\overline{\lambda_2}\boldsymbol{E}_2+\cdots+\overline{\lambda_k}\boldsymbol{E}_k.$$

注意到 $\boldsymbol{E}_i^2=\boldsymbol{E}_i$, $\boldsymbol{E}_i\boldsymbol{E}_j=\boldsymbol{O}$ $(i\neq j)$, 故对任意的正整数 $m$, 有

$$\varphi^m=\lambda_1^m\boldsymbol{E}_1+\lambda_2^m\boldsymbol{E}_2+\cdots+\lambda_k^m\boldsymbol{E}_k.$$

进一步, 对任意的多项式 $f(x)=a_0+a_1x+\cdots+a_mx^m$, 有

$$\begin{aligned}f(\varphi)&=a_0\boldsymbol{I}+a_1\varphi+\cdots+a_m\varphi^m\\ &=a_0(\sum_{i=1}^k\boldsymbol{E}_i)+a_1(\sum_{i=1}^k\lambda_i\boldsymbol{E}_i)+\cdots+a_m(\sum_{i=1}^k\lambda_i^m\boldsymbol{E}_i)\\ &=\sum_{i=1}^k f(\lambda_i)\boldsymbol{E}_i.\end{aligned}$$

令 $f_j(x)=\prod_{i\neq j}\dfrac{x-\lambda_i}{\lambda_j-\lambda_i}$, 则 $f_j(\lambda_j)=1$, $f_j(\lambda_i)=0$ $(i\neq j)$, 由此即得 $f_j(\varphi)=\sum_{i=1}^k f_j(\lambda_i)\boldsymbol{E}_i=\boldsymbol{E}_j$. 再令 $f(x)=\sum_{j=1}^k \overline{\lambda_j}f_j(x)$, 则有

$$f(\varphi)=\sum_{j=1}^k \overline{\lambda_j}f_j(\varphi)=\sum_{j=1}^k \overline{\lambda_j}\boldsymbol{E}_j=\varphi^*. \quad \square$$

> [!example] 例 9.96
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi=\omega\psi$, 其中 $\omega$ 为酉算子, $\psi$ 是半正定自伴随算子, 且 $\omega$ 与 $\psi$ 乘法可交换.


> [!proof]- 证明
> 先证充分性. 若 $\varphi=\omega\psi$, 则 $\varphi^*=\psi^*\omega^*=\psi\omega^{-1}$, 故由 $\omega\psi=\psi\omega$ 可得 $\varphi\varphi^*=\omega\psi^2\omega^{-1}=\psi^2=\varphi^*\varphi$, 因此 $\varphi$ 是正规算子.
> 
> 再证必要性. 设 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同特征值, 由谱分解定理, 有
> $$\varphi=\lambda_1\boldsymbol{E}_1+\lambda_2\boldsymbol{E}_2+\cdots+\lambda_k\boldsymbol{E}_k.$$
> 若 $\lambda_i\neq 0$, 令 $r_i=|\lambda_i|$, $s_i=\dfrac{\lambda_i}{|\lambda_i|}$; 若 $\lambda_i=0$, 令 $r_i=0$, $s_i=1$ 或 $-1$. 再令
> $$\omega=s_1\boldsymbol{E}_1+s_2\boldsymbol{E}_2+\cdots+s_k\boldsymbol{E}_k, \quad \psi=r_1\boldsymbol{E}_1+r_2\boldsymbol{E}_2+\cdots+r_k\boldsymbol{E}_k,$$
> 则容易验证 $\omega$ 为酉算子, $\psi$ 是半正定自伴随算子, 且 $\omega$ 与 $\psi$ 乘法可交换. $\square$

> [!example] 例 9.97
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶复矩阵, $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是其特征值, 求证:
> $$\sum_{i=1}^n|\lambda_i|^2\leq\sum_{i,j=1}^n|a_{ij}|^2,$$
> 且等号成立的充要条件是 $\boldsymbol{A}$ 为正规矩阵.

> [!proof]- 证明
> 由 Schur 定理可知, 存在酉矩阵 $\boldsymbol{U}$, 使得
> $$\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}=\boldsymbol{B}=\begin{pmatrix} \lambda_1 & b_{12} & \cdots & b_{1n} \\ 0 & \lambda_2 & \cdots & b_{2n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$$
> 为上三角矩阵, 于是
> $$\boldsymbol{B}\overline{\boldsymbol{B}}'=\begin{pmatrix} \lambda_1 & b_{12} & \cdots & b_{1n} \\ 0 & \lambda_2 & \cdots & b_{2n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}\begin{pmatrix} \overline{\lambda_1} & 0 & \cdots & 0 \\ \overline{b_{12}} & \overline{\lambda_2} & \cdots & 0 \\ \vdots & \vdots & & \vdots \\ \overline{b_{1n}} & \overline{b_{2n}} & \cdots & \overline{\lambda_n} \end{pmatrix},$$
> 经计算可得
> $$\mathrm{tr}(\boldsymbol{B}\overline{\boldsymbol{B}}')=\sum_{i=1}^n|\lambda_i|^2+\sum_{1\leq i<j\leq n}|b_{ij}|^2.$$
> 另一方面, 由迹的交换性可得
> $$\mathrm{tr}(\boldsymbol{B}\overline{\boldsymbol{B}}')=\mathrm{tr}(\overline{\boldsymbol{U}}'\boldsymbol{A}\overline{\boldsymbol{A}}'\boldsymbol{U})=\mathrm{tr}(\boldsymbol{A}\overline{\boldsymbol{A}}')=\sum_{i,j=1}^n|a_{ij}|^2,$$
> 因此 $\sum_{i=1}^n|\lambda_i|^2\leq\sum_{i,j=1}^n|a_{ij}|^2$, 且等号成立当且仅当 $b_{ij}=0$ $(1\leq i<j\leq n)$, 即 $\boldsymbol{B}$ 为对角矩阵, 也即 $\boldsymbol{A}$ 为正规矩阵. $\square$


*(本页内容与 Page 65 相同, 为 § 9.10 复正规算子与复正规矩阵的重复页)*


*(本页内容与 Page 66 相同, 为例 9.91-9.94 证明的重复页)*


*(本页内容与 Page 67 相同, 为例 9.94-9.96 证明的重复页)*


*(本页内容与 Page 68 相同, 为例 9.96-9.97 证明的重复页)*


再由上述两个等式可得

$$\sum_{i=1}^n |\lambda_i|^2 + \sum_{1 \leq i < j \leq n} |b_{ij}|^2 = \sum_{i,j=1}^n |a_{ij}|^2. \tag{9.13}$$

由 (9.13) 式即得要证的不等式，且等号成立当且仅当 $b_{ij} = 0\,(1 \leq i < j \leq n)$，这也当且仅当 $\boldsymbol{A}$ 酉相似于对角矩阵 $\boldsymbol{B}$，从而当且仅当 $\boldsymbol{A}$ 是正规矩阵。 $\square$

下面我们来看例 9.97 的 3 个应用。

> [!example] 例 9.98
> 设 $\boldsymbol{A} = (a_{ij})$ 是 $n$ 阶复矩阵，$\lambda_1, \lambda_2, \cdots, \lambda_n$ 是其特征值，求证：
> $$\sum_{i=1}^n |\lambda_i|^2 = \inf_{\det \boldsymbol{X} \neq 0} \|\boldsymbol{X}^{-1}\boldsymbol{A}\boldsymbol{X}\|_F^2,$$
> 其中 $\|\cdot\|_F$ 表示由复矩阵的 Frobenius 内积诱导的范数。

> [!proof]- 证明
> 注意到对任意的可逆矩阵 $\boldsymbol{X}$，矩阵 $\boldsymbol{X}^{-1}\boldsymbol{A}\boldsymbol{X}$ 的特征值仍为 $\lambda_1, \lambda_2, \cdots, \lambda_n$，故由例 9.97 可得
> $$\|\boldsymbol{X}^{-1}\boldsymbol{A}\boldsymbol{X}\|_F^2 \geq \sum_{i=1}^n |\lambda_i|^2. \tag{9.14}$$
> 另一方面，设 $\boldsymbol{P}$ 为可逆矩阵，使得
> $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \boldsymbol{J} = \mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \boldsymbol{J}_{r_2}(\lambda_2), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$$
> 为 Jordan 标准型。对任意的 $\varepsilon > 0$，记 $\boldsymbol{J}_{r_i}(\lambda_i, \varepsilon)$ 为 $r_i$ 阶上三角矩阵，其主对角元全为 $\lambda_i$，上次对角元全为 $\varepsilon$，其余元素全为零。显然，$\boldsymbol{J}_{r_i}(\lambda_i, \varepsilon)$ 的特征值全为 $\lambda_i$，其几何重数为 1，于是 $\boldsymbol{J}_{r_i}(\lambda_i, \varepsilon)$ 相似于 $\boldsymbol{J}_{r_i}(\lambda_i)\,(1 \leq i \leq k)$。记 $\boldsymbol{J}(\varepsilon) = \mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1, \varepsilon), \boldsymbol{J}_{r_2}(\lambda_2, \varepsilon), \cdots, \boldsymbol{J}_{r_k}(\lambda_k, \varepsilon)\}$，则对任意的 $\varepsilon > 0$，$\boldsymbol{J}(\varepsilon)$ 相似于 $\boldsymbol{J}$，从而也相似于 $\boldsymbol{A}$，因此
> $$\inf_{\det \boldsymbol{X} \neq 0} \|\boldsymbol{X}^{-1}\boldsymbol{A}\boldsymbol{X}\|_F^2 \leq \|\boldsymbol{J}(\varepsilon)\|_F^2 \leq \sum_{i=1}^n |\lambda_i|^2 + (n-1)\varepsilon^2. \tag{9.15}$$
> 最后由 (9.14) 式和 (9.15) 式即得结论。 $\square$

> [!example] 例 9.99
> 设 $\boldsymbol{A} = (a_{ij})$ 是 $n$ 阶实矩阵，其特征值 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 都是实数，求证：
> $$\sum_{i=1}^n \lambda_i^2 \leq \sum_{i,j=1}^n a_{ij}^2,$$
> 且等号成立的充要条件是 $\boldsymbol{A}$ 为对称矩阵。

---


> [!proof]- 证法 1
> 由例 9.97 即得不等式，且等号成立当且仅当 $\boldsymbol{A}$ 是实正规矩阵。又 $\boldsymbol{A}$ 的特征值全为实数，故由例 9.90 可知，$\boldsymbol{A}$ 正交相似于对角矩阵，从而为实对称矩阵。

> [!proof]- 证法 2
> 由例 9.88 以及完全类似于例 9.97 的讨论可得不等式，且等号成立当且仅当 $\boldsymbol{A}$ 正交相似于对角矩阵，从而为实对称矩阵。 $\square$

> [!example] 例 9.100
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 和 $\boldsymbol{AB}$ 都是 $n$ 阶复正规矩阵，求证：$\boldsymbol{BA}$ 也是复正规矩阵。

> [!proof]- 证明
> 设 $\boldsymbol{AB}$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$，则由例 9.97 可得
> $$\mathrm{tr}\left((\boldsymbol{AB})(\overline{\boldsymbol{AB}})'\right) = |\lambda_1|^2 + |\lambda_2|^2 + \cdots + |\lambda_n|^2.$$
> 由迹的交换性可得
> $$\begin{aligned} \mathrm{tr}\left((\boldsymbol{AB})(\overline{\boldsymbol{AB}})'\right) &= \mathrm{tr}\left(\boldsymbol{A}\boldsymbol{B}\overline{\boldsymbol{B}}'\overline{\boldsymbol{A}}'\right) = \mathrm{tr}\left(\boldsymbol{B}\overline{\boldsymbol{B}}'\overline{\boldsymbol{A}}'\boldsymbol{A}\right), \\ \mathrm{tr}\left((\boldsymbol{BA})(\overline{\boldsymbol{BA}})'\right) &= \mathrm{tr}\left(\boldsymbol{B}\boldsymbol{A}\overline{\boldsymbol{A}}'\overline{\boldsymbol{B}}'\right) = \mathrm{tr}\left(\overline{\boldsymbol{B}}'\boldsymbol{B}\boldsymbol{A}\overline{\boldsymbol{A}}'\right). \end{aligned}$$
> 再由 $\boldsymbol{A}, \boldsymbol{B}$ 是正规矩阵可得 $\boldsymbol{A}\overline{\boldsymbol{A}}' = \overline{\boldsymbol{A}}'\boldsymbol{A}$，$\boldsymbol{B}\overline{\boldsymbol{B}}' = \overline{\boldsymbol{B}}'\boldsymbol{B}$，由此即得
> $$\mathrm{tr}\left((\boldsymbol{BA})(\overline{\boldsymbol{BA}})'\right) = |\lambda_1|^2 + |\lambda_2|^2 + \cdots + |\lambda_n|^2.$$
> 注意到 $\boldsymbol{BA}$ 和 $\boldsymbol{AB}$ 具有相同的特征值，故由例 9.97 可知，$\boldsymbol{BA}$ 也是正规矩阵。 $\square$

> [!example] 例 9.101
> 设 $\boldsymbol{A}$ 是 $n$ 阶斜 Hermite 矩阵，即 $\overline{\boldsymbol{A}}' = -\boldsymbol{A}$。证明：$\boldsymbol{A}$ 必酉相似于对角矩阵 $\mathrm{diag}\{c_1, c_2, \cdots, c_n\}$，其中 $c_i$ 是零或纯虚数。

> [!proof]- 证明
> 注意到斜 Hermite 矩阵 $\boldsymbol{A}$ 满足 $\boldsymbol{A}\overline{\boldsymbol{A}}' = -\boldsymbol{A}^2 = \overline{\boldsymbol{A}}'\boldsymbol{A}$，故 $\boldsymbol{A}$ 为正规矩阵，因此存在酉矩阵 $\boldsymbol{U}$，使得 $\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U} = \mathrm{diag}\{c_1, c_2, \cdots, c_n\}$。因为 $(\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}) = \overline{\boldsymbol{U}}'\overline{\boldsymbol{A}}'\boldsymbol{U} = -\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}$，故对角矩阵 $\mathrm{diag}\{c_1, c_2, \cdots, c_n\}$ 也是斜 Hermite 矩阵，从而每个 $c_i$ 都满足 $\overline{c_i} = -c_i$，即 $c_i$ 是零或纯虚数。 $\square$

> [!example] 例 9.102
> 设 $S = \{n$ 阶斜 Hermite 矩阵 $\boldsymbol{A}\}$，$T = \{\boldsymbol{I}_n + \boldsymbol{B}$ 可逆的 $n$ 阶酉矩阵 $\boldsymbol{B}\}$。映射 $\varphi: S \to T$ 定义为 $\varphi(\boldsymbol{A}) = (\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A})^{-1}$，映射 $\psi: T \to S$ 定义为 $\psi(\boldsymbol{B}) = (\boldsymbol{I}_n - \boldsymbol{B})(\boldsymbol{I}_n + \boldsymbol{B})^{-1}$。求证：$\psi\varphi = \boldsymbol{I}_S$，$\varphi\psi = \boldsymbol{I}_T$，即 $\varphi, \psi$ 实现了集合 $S, T$ 之间的一一对应。

> [!proof]- 证明
> 由例 9.101 可知斜 Hermite 矩阵 $\boldsymbol{A}$ 的特征值都是零或纯虚数，于是 $\boldsymbol{I}_n + \boldsymbol{A}$ 是可逆矩阵。再由矩阵运算不难验证 $\varphi(\boldsymbol{A}) \in T$，因此 $\varphi$ 的定义是有意义的。同理由矩阵运算不难验证 $\psi(\boldsymbol{B}) \in S$，因此 $\psi$ 的定义也是有意义的。$\psi\varphi = \boldsymbol{I}_S$ 和 $\varphi\psi = \boldsymbol{I}_T$ 都可以通过矩阵运算得到验证，具体的细节留给读者完成。

---


设 $C = \{z \in \mathbb{C} \mid |z| = 1, z \neq -1\}$ 是复平面上的单位圆挖去 $(-1, 0)$ 点，$I = \{y\mathrm{i} \mid y \in \mathbb{R}\}$ 是复平面上的虚轴，容易验证 $f(z) = \dfrac{1-z}{1+z}$ 不仅是 $I \to C$ 的连续映射，还是 $C \to I$ 的连续映射，并且由 $f \circ f(z) = z$ 可知，$f: I \to C$ 是一个连续双射（称为同胚）。下面我们通过酉相似标准型和上述 $f$ 来描述本题中的一一对应。

对任一 $\boldsymbol{A} \in S$，由例 9.101 可知，存在酉矩阵 $\boldsymbol{U}$，使得 $\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U} = \boldsymbol{\Lambda}_{\boldsymbol{A}} = \mathrm{diag}\{c_1, c_2, \cdots, c_n\}$，其中 $c_i \in I$。因此 $\overline{\boldsymbol{U}}'\varphi(\boldsymbol{A})\boldsymbol{U} = \varphi(\boldsymbol{\Lambda}_{\boldsymbol{A}}) = \mathrm{diag}\{f(c_1), f(c_2), \cdots, f(c_n)\}$，其中 $f(c_i) \in C$，从而 $\varphi(\boldsymbol{A}) \in T$。再对任一 $\boldsymbol{B} \in T$，由 $\S\S$ 9.1.5 推论 8 可知，存在酉矩阵 $\boldsymbol{V}$，使得 $\overline{\boldsymbol{V}}'\boldsymbol{B}\boldsymbol{V} = \boldsymbol{\Lambda}_{\boldsymbol{B}} = \mathrm{diag}\{d_1, d_2, \cdots, d_n\}$，其中 $d_i \in C$。因此 $\overline{\boldsymbol{V}}'\psi(\boldsymbol{B})\boldsymbol{V} = \psi(\boldsymbol{\Lambda}_{\boldsymbol{B}}) = \mathrm{diag}\{f(d_1), f(d_2), \cdots, f(d_n)\}$，其中 $f(d_i) \in I$，从而 $\psi(\boldsymbol{B}) \in S$。最后由 $f: I \to C$ 是一个双射可知，$\varphi: S \to T$ 和 $\psi: T \to S$ 互为逆映射。 $\square$

### § 9.11 实正规算子与实正规矩阵

欧氏空间上的正规算子或实正规矩阵的理论要比酉空间上的正规算子或复正规矩阵的理论复杂得多，其原因是实矩阵不一定有实特征值及实特征向量。通常可以有多种方法得到实正规矩阵的正交相似标准型理论。例如在 § 9.9 中，我们已通过实数版本的 Schur 定理（例 9.87）和正规矩阵的性质证明了其正交相似标准型理论，这是一个代数的证明。在教材 [1] 中，通过极小多项式诱导的空间直和分解以及极小多项式为二次多项式的实正规算子的研究给出了其正交相似标准型理论，这是一个几何的证明。事实上，我们还可以通过数学归纳法给出实正规矩阵正交相似标准型理论的直接证明，其中最关键的技巧就是例 9.86，即当 $\boldsymbol{A}$ 没有实特征值时，亦可构造它的二维不变子空间来运用归纳假设。

> [!example] 例 9.90
> 设 $\boldsymbol{A}$ 是 $n$ 阶实正规矩阵，求证：存在正交矩阵 $\boldsymbol{P}$，使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\boldsymbol{A}_1, \cdots, \boldsymbol{A}_r, c_{2r+1}, \cdots, c_n\},$$
> 其中 $\boldsymbol{A}_i = \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\,(1 \leq i \leq r)$ 是二阶实矩阵，$c_j\,(2r+1 \leq j \leq n)$ 是实数。

> [!proof]- 证法 2
> 对阶数 $n$ 进行归纳。当 $n = 0$ 时表示归纳过程已经结束。当 $n = 1$ 时，结论显然成立。假设对小于 $n$ 阶的实正规矩阵结论成立，现证 $n$ 阶实正规矩阵 $\boldsymbol{A}$ 的情形。将 $\boldsymbol{A}$ 看成是 $n$ 维实列向量空间 $\mathbb{R}^n$（取标准内积）上的线性变换，则 $\boldsymbol{A}$ 是实正规算子且 $\boldsymbol{A}'$ 是其伴随。下面分两种情况进行讨论。

---


首先，假设 $\boldsymbol{A}$ 有实特征值 $\lambda$，取其单位特征向量 $\boldsymbol{e}_n$，则由例 9.28 可知，$\boldsymbol{e}_n$ 也是 $\boldsymbol{A}'$ 属于特征值 $\lambda$ 的特征向量。因此 $L(\boldsymbol{e}_n)$ 是 $\boldsymbol{A}, \boldsymbol{A}'$ 的不变子空间，故由例 9.26 可知，$L(\boldsymbol{e}_n)^\perp$ 也是 $\boldsymbol{A}, \boldsymbol{A}'$ 的不变子空间，将 $\boldsymbol{A}, \boldsymbol{A}'$ 限制在 $L(\boldsymbol{e}_n)^\perp$，容易验证 $\boldsymbol{A}$ 仍然是实正规算子。由归纳假设，存在 $L(\boldsymbol{e}_n)^\perp$ 的标准正交基 $\boldsymbol{e}_1, \cdots, \boldsymbol{e}_{n-1}$，使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵是 $n-1$ 阶的标准型，于是在标准正交基 $\boldsymbol{e}_1, \cdots, \boldsymbol{e}_{n-1}, \boldsymbol{e}_n$ 下，线性变换 $\boldsymbol{A}$ 的表示矩阵就是要求的标准型。

其次，假设 $\boldsymbol{A}$ 没有实特征值，并设虚数 $a + b\mathrm{i}$ 是 $\boldsymbol{A}$ 的特征值，$\boldsymbol{u} + \boldsymbol{v}\mathrm{i}$ 是对应的特征向量，其中 $\boldsymbol{u}, \boldsymbol{v}$ 是实列向量，则由例 9.86 可知，$(\boldsymbol{u}, \boldsymbol{v}) = 0$ 且 $\|\boldsymbol{u}\| = \|\boldsymbol{v}\|$。令 $\boldsymbol{e}_{n-1} = \dfrac{\boldsymbol{u}}{\|\boldsymbol{u}\|}$，$\boldsymbol{e}_n = \dfrac{\boldsymbol{v}}{\|\boldsymbol{v}\|}$，则由例 9.86 的证明过程可得

$$\begin{aligned} \boldsymbol{A}\boldsymbol{e}_{n-1} &= a\boldsymbol{e}_{n-1} - b\boldsymbol{e}_n, &\quad \boldsymbol{A}\boldsymbol{e}_n &= b\boldsymbol{e}_{n-1} + a\boldsymbol{e}_n, \\ \boldsymbol{A}'\boldsymbol{e}_{n-1} &= a\boldsymbol{e}_{n-1} + b\boldsymbol{e}_n, &\quad \boldsymbol{A}'\boldsymbol{e}_n &= -b\boldsymbol{e}_{n-1} + a\boldsymbol{e}_n. \end{aligned}$$

令 $U = L(\boldsymbol{e}_{n-1}, \boldsymbol{e}_n)$，则上式表明 $U$ 是 $\boldsymbol{A}, \boldsymbol{A}'$ 的不变子空间，故由例 9.26 可知，$U^\perp$ 也是 $\boldsymbol{A}, \boldsymbol{A}'$ 的不变子空间，将 $\boldsymbol{A}, \boldsymbol{A}'$ 限制在 $U^\perp$，容易验证 $\boldsymbol{A}$ 仍然是实正规算子。由归纳假设，存在 $U^\perp$ 的标准正交基 $\boldsymbol{e}_1, \cdots, \boldsymbol{e}_{n-2}$，使得线性变换 $\boldsymbol{A}$ 在这组基下的表示矩阵是 $n-2$ 阶的标准型，又 $\boldsymbol{A}$ 在 $\boldsymbol{e}_{n-1}, \boldsymbol{e}_n$ 下的表示矩阵为 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$，于是在标准正交基 $\boldsymbol{e}_1, \cdots, \boldsymbol{e}_{n-2}, \boldsymbol{e}_{n-1}, \boldsymbol{e}_n$ 下，线性变换 $\boldsymbol{A}$ 的表示矩阵就是要求的标准型。 $\square$

> [!note] 注
> 实正规矩阵的正交相似标准型理论的上述证明其实是例 9.86 和例 9.87 证明的综合体，这一证明的特点是将代数方法和几何方法综合在一起，而不是把它们割裂开来。运用代数（矩阵）技巧，可以把实矩阵自然地看成复矩阵，从而得到复特征值和复特征向量，再将复特征向量分离出两个线性无关的实列向量，并由此构造出二维不变子空间；而运用几何（线性变换）技巧，则可以有效地处理不变子空间，并将问题化约到低维空间上，以此完成归纳过程。请读者仔细体会证明中的精妙之处。

下面我们将给出欧氏空间中的线性变换是实正规算子的几个充要条件，并和复正规算子的情形进行一些比较。

> [!example] 例 9.103
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是对 $V$ 中任意的向量 $\boldsymbol{\alpha}$，都有 $\|\varphi(\boldsymbol{\alpha})\| = \|\varphi^*(\boldsymbol{\alpha})\|$。

> [!proof]- 证明
> 例 9.91 的证法 2 可以原封不动地搬到实正规算子的情形，而其证法 1 也可以适用于实正规算子的情形，只要采用实内积空间中内积表示为范数的如下表达式即可：
> $$(\boldsymbol{u}, \boldsymbol{v}) = \frac{1}{4}\|\boldsymbol{u} + \boldsymbol{v}\|^2 - \frac{1}{4}\|\boldsymbol{u} - \boldsymbol{v}\|^2. \quad \square$$

---


因为实正规算子可能没有实特征值和实特征向量，所以需要将例 9.92 和例 9.94 的实正规算子版本作一些调整才行。

> [!example] 例 9.104
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是对 $V$ 中任意两个向量 $\boldsymbol{\alpha}, \boldsymbol{\beta}$，若 $\varphi(\boldsymbol{\alpha}) = a\boldsymbol{\alpha} - b\boldsymbol{\beta}$ 且 $\varphi(\boldsymbol{\beta}) = b\boldsymbol{\alpha} + a\boldsymbol{\beta}$（其中 $a, b$ 是实数），则必有 $\varphi^*(\boldsymbol{\alpha}) = a\boldsymbol{\alpha} + b\boldsymbol{\beta}$ 且 $\varphi^*(\boldsymbol{\beta}) = -b\boldsymbol{\alpha} + a\boldsymbol{\beta}$。

> [!proof]- 证明
> 任取 $V$ 的一组标准正交基，设 $\varphi$ 在这组基下的表示矩阵为 $\boldsymbol{A}$，则 $\varphi^*$ 在这组基下的表示矩阵为 $\boldsymbol{A}'$，再设 $\boldsymbol{\alpha}, \boldsymbol{\beta}$ 的坐标向量分别为 $\boldsymbol{u}, \boldsymbol{v}$。
>
> 先证必要性。若 $\boldsymbol{u} = \boldsymbol{v} = \boldsymbol{0}$，则结论显然成立，以下不妨设 $\boldsymbol{u}, \boldsymbol{v}$ 不全为零。若 $b = 0$，则 $\boldsymbol{A}\boldsymbol{u} = a\boldsymbol{u}$，$\boldsymbol{A}\boldsymbol{v} = a\boldsymbol{v}$，即 $\boldsymbol{u}, \boldsymbol{v}$ 是 $\boldsymbol{A}$ 属于实特征值 $a$ 的特征向量或零向量，从而由例 9.28 可知，$\boldsymbol{u}, \boldsymbol{v}$ 也是 $\boldsymbol{A}'$ 属于实特征值 $a$ 的特征向量或零向量，结论得证。若 $b \neq 0$，令 $\boldsymbol{w} = \boldsymbol{u} + \boldsymbol{v}\mathrm{i}$，则 $\boldsymbol{w} \neq \boldsymbol{0}$ 且 $\boldsymbol{A}\boldsymbol{w} = (a + b\mathrm{i})\boldsymbol{w}$，即 $\boldsymbol{w}$ 是 $\boldsymbol{A}$ 属于虚特征值 $a + b\mathrm{i}$ 的特征向量，故由例 9.28 可知，$\boldsymbol{w}$ 也是 $\boldsymbol{A}'$ 属于虚特征值 $a - b\mathrm{i}$ 的特征向量，从而不难验证结论成立。
>
> 再证充分性。与必要性完全类似的讨论可得，若 $\boldsymbol{w}$ 是 $\boldsymbol{A}$ 属于特征值 $\lambda$ 的特征向量，则 $\boldsymbol{w}$ 也是 $\boldsymbol{A}'$ 属于特征值 $\overline{\lambda}$ 的特征向量，故由例 9.92 可知，$\boldsymbol{A}$ 是复正规矩阵。又 $\boldsymbol{A}$ 是实矩阵，故 $\boldsymbol{A}$ 也是实正规矩阵，从而 $\varphi$ 是实正规算子。 $\square$

> [!example] 例 9.105
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是 $\varphi = \varphi_1 + \varphi_2$，其中 $\varphi_1$ 是自伴随算子，$\varphi_2$ 是斜对称算子，且 $\varphi_1\varphi_2 = \varphi_2\varphi_1$。

> [!proof]- 证明
> 先证充分性。由条件可得
> $$\varphi\varphi^* = (\varphi_1 + \varphi_2)(\varphi_1 - \varphi_2) = \varphi_1^2 - \varphi_2^2 = \varphi^*\varphi.$$
> 再证必要性。令 $\varphi_1 = \dfrac{1}{2}(\varphi + \varphi^*)$，$\varphi_2 = \dfrac{1}{2}(\varphi - \varphi^*)$，则容易验证 $\varphi_1$ 是自伴随算子，$\varphi_2$ 是斜对称算子，且 $\varphi_1\varphi_2 = \varphi_2\varphi_1$。
>
> 上面的构造用正交相似标准型来看更加清楚，设 $\varphi$ 在一组标准正交基下的表示矩阵为正交相似标准型
> $$\mathrm{diag}\left\{\begin{pmatrix} a_1 & b_1 \\ -b_1 & a_1 \end{pmatrix}, \cdots, \begin{pmatrix} a_r & b_r \\ -b_r & a_r \end{pmatrix}, c_{2r+1}, \cdots, c_n\right\},$$
> 则实对角矩阵 $\mathrm{diag}\{a_1, a_1, \cdots, a_r, a_r, c_{2r+1}, \cdots, c_n\}$ 对应的自伴随算子即为 $\varphi_1$，实反对称矩阵 $\mathrm{diag}\left\{\begin{pmatrix} 0 & b_1 \\ -b_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_r \\ -b_r & 0 \end{pmatrix}, 0, \cdots, 0\right\}$ 对应的斜对称算子即为 $\varphi_2$，并且矩阵的乘法可交换性对应于线性算子的乘法可交换性。 $\square$

---


> [!example] 例 9.106
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是存在某个实系数多项式 $g(x)$，使得 $\varphi^* = g(\varphi)$。

> [!proof]- 证法 1
> 先证充分性。若 $\varphi^* = g(\varphi)$，则 $\varphi\varphi^* = \varphi^*\varphi$ 显然成立。再证必要性。设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型
> $$\boldsymbol{A} = \mathrm{diag}\left\{\begin{pmatrix} a_1 & b_1 \\ -b_1 & a_1 \end{pmatrix}, \cdots, \begin{pmatrix} a_r & b_r \\ -b_r & a_r \end{pmatrix}, c_{2r+1}, \cdots, c_n\right\},$$
> 其中 $a_i, b_i, c_j$ 都是实数并且 $b_i \neq 0$。由线性变换与矩阵的一一对应，我们只要证明存在某个实系数多项式 $g(x)$，使得 $\boldsymbol{A}' = g(\boldsymbol{A})$ 即可。由于分块对角矩阵主对角线上的分块调换次序是一个正交相似变换（这也等价于调换基向量的次序），故不妨将完全相同的分块放在一起，于是可假设 $\boldsymbol{A}$ 已是如下形状：
> $$\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{B}_1, \cdots, \boldsymbol{B}_s, \boldsymbol{B}_{s+1}, \cdots, \boldsymbol{B}_t\},$$
> 其中 $\boldsymbol{B}_i = \mathrm{diag}\left\{\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}, \cdots, \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\right\}$，$1 \leq i \leq s$；$\boldsymbol{B}_j = \mathrm{diag}\{c_j, \cdots, c_j\}$，$s+1 \leq j \leq t$。注意到 $\boldsymbol{B}_i$ 适合多项式 $g_i(x) = (x - a_i)^2 + b_i^2\,(1 \leq i \leq s)$，$\boldsymbol{B}_j$ 适合多项式 $g_j(x) = x - c_j\,(s+1 \leq j \leq t)$，故 $\{g_1(x), g_2(x), \cdots, g_t(x)\}$ 是一组两两互素的多项式。令 $f_i(x) = 2a_i - x\,(1 \leq i \leq s)$，$f_j(x) = x\,(s+1 \leq j \leq t)$，则容易验证 $\boldsymbol{B}_i' = f_i(\boldsymbol{B}_i)\,(1 \leq i \leq s)$，$\boldsymbol{B}_j' = f_j(\boldsymbol{B}_j)\,(s+1 \leq j \leq t)$，因此由例 7.31 可知，存在实系数多项式 $g(x)$，使得 $\boldsymbol{A}' = g(\boldsymbol{A})$。

> [!proof]- 证法 2
> 充分性同证法 1，下证必要性。设 $\boldsymbol{A}$ 是 $\varphi$ 在某组标准正交基下的表示矩阵，我们只要证明存在某个实系数多项式 $g(x)$，使得 $\boldsymbol{A}' = g(\boldsymbol{A})$ 即可。由于 $\boldsymbol{A}$ 是实正规矩阵，故可以自然地看成是复正规矩阵，由例 9.95 可知，存在复系数多项式 $f(x)$，使得 $\boldsymbol{A}' = f(\boldsymbol{A})$。将 $f(x)$ 各项系数的实部和虚部分开得到两个实系数多项式 $g(x), h(x)$，使得 $f(x) = g(x) + \mathrm{i}h(x)$，于是可得 $\boldsymbol{A}' = g(\boldsymbol{A}) + \mathrm{i}h(\boldsymbol{A})$，从而只能是 $\boldsymbol{A}' = g(\boldsymbol{A})$，$h(\boldsymbol{A}) = \boldsymbol{O}$，结论得证。 $\square$

> [!example] 例 9.107
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是 $\varphi = \omega\psi$，其中 $\omega$ 是正交算子，$\psi$ 是半正定自伴随算子，且 $\omega\psi = \psi\omega$。

> [!proof]- 证明
> 充分性的证明同例 9.96 充分性的证明，下证必要性。设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型
> $$\boldsymbol{A} = \mathrm{diag}\left\{\begin{pmatrix} a_1 & b_1 \\ -b_1 & a_1 \end{pmatrix}, \cdots, \begin{pmatrix} a_r & b_r \\ -b_r & a_r \end{pmatrix}, c_{2r+1}, \cdots, c_n\right\},$$

---


其中 $a_i, b_i, c_j$ 都是实数并且 $b_i \neq 0$。由线性变换与矩阵的一一对应，我们只要证明存在乘法可交换的正交矩阵 $\boldsymbol{P}$ 和半正定实对称矩阵 $\boldsymbol{S}$，使得 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{S}$ 即可。令 $k_i = \sqrt{a_i^2 + b_i^2}$，$a_i = k_i\cos\theta_i$，$b_i = k_i\sin\theta_i$，$1 \leq i \leq r$。若 $c_j = 0$，则令 $k_j = 0$，$d_j = 1$ 或 $-1$；若 $c_j \neq 0$，则令 $k_j = |c_j|$，$d_j = \dfrac{c_j}{|c_j|}$，$2r+1 \leq j \leq n$。令

$$\boldsymbol{P} = \mathrm{diag}\left\{\begin{pmatrix} \cos\theta_1 & \sin\theta_1 \\ -\sin\theta_1 & \cos\theta_1 \end{pmatrix}, \cdots, \begin{pmatrix} \cos\theta_r & \sin\theta_r \\ -\sin\theta_r & \cos\theta_r \end{pmatrix}, d_{2r+1}, \cdots, d_n\right\},$$

$$\boldsymbol{S} = \mathrm{diag}\{k_1, k_1, \cdots, k_r, k_r, k_{2r+1}, \cdots, k_n\},$$

则容易验证这就是所要求的分解。 $\square$

> [!example] 例 9.108
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的正规算子，其极小多项式为 $g(x) = (x-a)^2 + b^2$，其中 $b \neq 0$，求证：$\varphi$ 是 $V$ 上的自同构且 $\varphi^* = (a^2 + b^2)\varphi^{-1}$。

> [!proof]- 证明
> 只要证明 $\varphi^*\varphi = (a^2 + b^2)\boldsymbol{I}_V$ 即可。设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型
> $$\boldsymbol{A} = \mathrm{diag}\left\{\begin{pmatrix} a_1 & b_1 \\ -b_1 & a_1 \end{pmatrix}, \cdots, \begin{pmatrix} a_r & b_r \\ -b_r & a_r \end{pmatrix}, c_{2r+1}, \cdots, c_n\right\},$$
> 其中 $a_i, b_i, c_j$ 都是实数并且 $b_i \neq 0$。因为 $\varphi$ 的极小多项式为 $g(x) = (x-a)^2 + b^2$，所以在上述分块矩阵中没有一阶的块，并且每个二阶的块都等于 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$（也可以直接引用教材 [1] 中的定理 9.7.2 得到这一结论），从而 $\varphi$ 在这组基下的表示矩阵为
> $$\boldsymbol{A} = \mathrm{diag}\left\{\begin{pmatrix} a & b \\ -b & a \end{pmatrix}, \cdots, \begin{pmatrix} a & b \\ -b & a \end{pmatrix}\right\}, \quad r = \frac{n}{2}.$$
> 因为 $\boldsymbol{A}'\boldsymbol{A} = (a^2 + b^2)\boldsymbol{I}_n$，所以 $\varphi^*\varphi = (a^2 + b^2)\boldsymbol{I}_V$。 $\square$

> [!example] 例 9.109
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的正规算子，$\psi$ 是 $V$ 上某一线性算子，满足 $\varphi\psi = \psi\varphi$，求证：$\varphi^*\psi = \psi\varphi^*$。

> [!proof]- 证法 1
> 我们引用一下教材 [1] 中证明实正规算子正交相似标准型的几何方法。设 $g(x)$ 是 $\varphi$ 的极小多项式，则 $g(x) = g_1(x)g_2(x)\cdots g_t(x)$ 在实数域上可以分解为互异的首一不可约多项式 $g_i(x)$ 的乘积。令 $V_i = \mathrm{Ker}\,g_i(\varphi)$，则
> $$V = V_1 \perp V_2 \perp \cdots \perp V_t,$$

---


$\varphi_i = \varphi|_{V_i}$ 是 $V_i$ 上的正规算子且极小多项式为 $g_i(x)$。若 $g_i(x) = (x-a_i)^2 + b_i^2$，则存在 $V_i$ 的标准正交基，使得 $\varphi_i$ 的表示矩阵为 $\mathrm{diag}\left\{\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}, \cdots, \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\right\}$；若 $g_i(x) = x - c_i$，则 $\varphi_i = c_i\boldsymbol{I}_{V_i}$。具体的证明请参考教材 [1] § 9.7。回到本题的证明，由于 $\varphi\psi = \psi\varphi$，故易证 $V_i$ 也是 $\psi$ 的不变子空间。令 $\psi_i = \psi|_{V_i}$，则有 $\varphi_i\psi_i = \psi_i\varphi_i$。若 $g_i(x) = (x-a_i)^2 + b_i^2$，则 $\varphi_i$ 满足例 9.108 的条件，从而 $\varphi_i^* = (a_i^2 + b_i^2)\varphi_i^{-1}$，于是由 $\varphi_i^{-1}\psi_i = \psi_i\varphi_i^{-1}$ 即得 $\varphi_i^*\psi_i = \psi_i\varphi_i^*$；若 $g_i(x) = x - c_i$，则 $\varphi_i = \varphi_i^* = c_i\boldsymbol{I}_{V_i}$，此时 $\varphi_i^*\psi_i = \psi_i\varphi_i^*$ 显然成立。因为 $\varphi^*\psi = \psi\varphi^*$ 在每一个 $V_i$ 上都成立，所以在 $V$ 上也成立。我们也可以平行地给出代数的证明，类似于例 9.106 证法 1 中的讨论，可假设 $\varphi$ 在某组标准正交基下的表示矩阵已是如下形状的标准型：

$$\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{B}_1, \cdots, \boldsymbol{B}_s, \boldsymbol{B}_{s+1}, \cdots, \boldsymbol{B}_t\},$$

其中 $\boldsymbol{B}_i = \mathrm{diag}\left\{\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}, \cdots, \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\right\}$，$1 \leq i \leq s$；$\boldsymbol{B}_j = \mathrm{diag}\{c_j, \cdots, c_j\}$，$s+1 \leq j \leq t$。设 $\psi$ 在同一组基下的表示矩阵是 $\boldsymbol{C}$，则 $\boldsymbol{A}\boldsymbol{C} = \boldsymbol{C}\boldsymbol{A}$。因为 $\boldsymbol{B}_i$ 的特征值互不相同，故由例 6.90 可知，$\boldsymbol{C} = \mathrm{diag}\{\boldsymbol{C}_1, \boldsymbol{C}_2, \cdots, \boldsymbol{C}_t\}$，从而 $\boldsymbol{B}_i\boldsymbol{C}_i = \boldsymbol{C}_i\boldsymbol{B}_i$。注意到 $\boldsymbol{B}_i' = (a_i^2 + b_i^2)\boldsymbol{B}_i^{-1}\,(1 \leq i \leq s)$，$\boldsymbol{B}_j' = \boldsymbol{B}_j\,(s+1 \leq j \leq t)$，故可得 $\boldsymbol{B}_i'\boldsymbol{C}_i = \boldsymbol{C}_i\boldsymbol{B}_i'$，于是 $\boldsymbol{A}'\boldsymbol{C} = \boldsymbol{C}\boldsymbol{A}'$，从而 $\varphi^*\psi = \psi\varphi^*$ 成立。

> [!proof]- 证法 2
> 由例 9.106 可知，存在实系数多项式 $g(x)$，使得 $\varphi^* = g(\varphi)$。因为 $\varphi$ 与 $\psi$ 乘法可交换，所以 $\varphi^*$ 也与 $\psi$ 乘法可交换。 $\square$

> [!example] 例 9.110
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的非零线性变换，求证：$\varphi$ 保持向量的正交性不变的充要条件是存在正实数 $k$，使得 $\varphi^*\varphi = k\boldsymbol{I}_V$。

> [!proof]- 证法 1
> 先证充分性。若 $\varphi^*\varphi = k\boldsymbol{I}_V$，则对任意正交的向量 $\boldsymbol{u}, \boldsymbol{v}$，$(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = (\varphi^*\varphi(\boldsymbol{u}), \boldsymbol{v}) = k(\boldsymbol{u}, \boldsymbol{v}) = 0$，即 $\varphi$ 保持向量的正交性不变。再证必要性。取 $V$ 的一组标准正交基 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$，因为 $\varphi$ 保持向量的正交性不变，所以 $\varphi(\boldsymbol{e}_1), \varphi(\boldsymbol{e}_2), \cdots, \varphi(\boldsymbol{e}_n)$ 是一个两两正交的向量组。对任意的 $i \neq j$，$(\boldsymbol{e}_i + \boldsymbol{e}_j, \boldsymbol{e}_i - \boldsymbol{e}_j) = 0$，故 $(\varphi(\boldsymbol{e}_i) + \varphi(\boldsymbol{e}_j), \varphi(\boldsymbol{e}_i) - \varphi(\boldsymbol{e}_j)) = 0$，从而 $(\varphi(\boldsymbol{e}_i), \varphi(\boldsymbol{e}_i)) = (\varphi(\boldsymbol{e}_j), \varphi(\boldsymbol{e}_j))$，于是 $(\varphi(\boldsymbol{e}_i), \varphi(\boldsymbol{e}_i))$ 是一个不依赖于 $i$ 的常数，设之为 $k$。又因为 $\varphi$ 是非零线性变换，故至少存在一个 $i$，使得 $\varphi(\boldsymbol{e}_i) \neq \boldsymbol{0}$，从而 $k > 0$，于是 $\|\varphi(\boldsymbol{e}_i)\| = \sqrt{k}\,(1 \leq i \leq n)$。考虑线性变换 $\dfrac{1}{\sqrt{k}}\varphi$，它将标准正交基 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$ 映为标准正交基 $\dfrac{1}{\sqrt{k}}\varphi(\boldsymbol{e}_1), \dfrac{1}{\sqrt{k}}\varphi(\boldsymbol{e}_2), \cdots, \dfrac{1}{\sqrt{k}}\varphi(\boldsymbol{e}_n)$，故为正交变换，从而 $\left(\dfrac{1}{\sqrt{k}}\varphi^*\right)\left(\dfrac{1}{\sqrt{k}}\varphi\right) = \boldsymbol{I}_V$，即 $\varphi^*\varphi = k\boldsymbol{I}_V$ 成立。

---


> [!proof]- 证法 2
> 充分性的证明同证法 1，下证必要性。设 $S = \{\boldsymbol{v} \in V \mid \|\boldsymbol{v}\| = 1\}$，任取两个不正交的向量 $\boldsymbol{u}, \boldsymbol{v} \in S$，由 Gram-Schmidt 正交化方法可知 $(\boldsymbol{v} - (\boldsymbol{v}, \boldsymbol{u})\boldsymbol{u}, \boldsymbol{u}) = 0$，从而有 $(\varphi(\boldsymbol{v}) - (\boldsymbol{v}, \boldsymbol{u})\varphi(\boldsymbol{u}), \varphi(\boldsymbol{u})) = 0$，于是 $(\varphi(\boldsymbol{v}), \varphi(\boldsymbol{u})) = (\boldsymbol{v}, \boldsymbol{u})(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{u}))$。同理可得 $(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = (\boldsymbol{u}, \boldsymbol{v})(\varphi(\boldsymbol{v}), \varphi(\boldsymbol{v}))$，由于 $(\boldsymbol{u}, \boldsymbol{v}) \neq 0$，故 $(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{u})) = (\varphi(\boldsymbol{v}), \varphi(\boldsymbol{v}))$。对两个正交的向量 $\boldsymbol{u}, \boldsymbol{v} \in S$，令 $\boldsymbol{w} = \dfrac{1}{\sqrt{2}}(\boldsymbol{u} + \boldsymbol{v}) \in S$，则 $\boldsymbol{w}$ 与 $\boldsymbol{u}, \boldsymbol{v}$ 中任意一个都不正交，从而由上面的讨论可知，$(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{u})) = (\varphi(\boldsymbol{w}), \varphi(\boldsymbol{w})) = (\varphi(\boldsymbol{v}), \varphi(\boldsymbol{v}))$，因此 $(\varphi(\boldsymbol{v}), \varphi(\boldsymbol{v}))$ 是 $S$ 上的常值函数，记之为 $k$。因为 $\varphi$ 是非零线性变换，故存在非零向量 $\boldsymbol{v} \in V$，使得 $\varphi(\boldsymbol{v}) \neq \boldsymbol{0}$，从而 $\varphi\left(\dfrac{\boldsymbol{v}}{\|\boldsymbol{v}\|}\right) = \dfrac{\varphi(\boldsymbol{v})}{\|\boldsymbol{v}\|} \neq \boldsymbol{0}$，于是 $k > 0$。因此对任一非零向量 $\boldsymbol{v} \in V$，有 $\sqrt{k} = \left\|\varphi\left(\dfrac{\boldsymbol{v}}{\|\boldsymbol{v}\|}\right)\right\| = \dfrac{\|\varphi(\boldsymbol{v})\|}{\|\boldsymbol{v}\|}$，从而 $\left\|\dfrac{1}{\sqrt{k}}\varphi(\boldsymbol{v})\right\| = \|\boldsymbol{v}\|$，这个等式对 $\boldsymbol{v} = \boldsymbol{0}$ 也成立，这说明 $\dfrac{1}{\sqrt{k}}\varphi$ 保持范数，从而是正交变换，于是 $\left(\dfrac{1}{\sqrt{k}}\varphi^*\right)\left(\dfrac{1}{\sqrt{k}}\varphi\right) = \boldsymbol{I}_V$，即 $\varphi^*\varphi = k\boldsymbol{I}_V$ 成立。 $\square$

例 9.110 及其两种证法可以推广到酉空间的情形，相关细节留给读者自行完成。利用例 9.110 还能证明例 9.93 的实正规算子版本。

> [!example] 例 9.111
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，$g(x)$ 是 $\varphi$ 的极小多项式，求证：$\varphi$ 是正规算子的充要条件是对 $g(x)$ 的任一不可约因式 $g_i(x)$，以下两个条件都成立：
> - (1) $V = \mathrm{Ker}\,g_i(\varphi) \perp \mathrm{Im}\,g_i(\varphi)$；
> - (2) 任取 $\mathrm{Ker}\,g_i(\varphi)$ 中两个正交的向量 $\boldsymbol{\alpha}, \boldsymbol{\beta}$，则 $\varphi(\boldsymbol{\alpha})$ 与 $\varphi(\boldsymbol{\beta})$ 也正交。

> [!proof]- 证明
> 先证必要性。若 $\varphi$ 是正规算子，则由教材 [1] 中的定理 9.7.1 可知，$\varphi$ 的极小多项式 $g(x)$ 无重因式，即 $g(x) = g_1(x)g_2(x)\cdots g_k(x)$，其中 $g_i(x)$ 是 $g(x)$ 互异的首一不可约因式，并且
> $$V = \mathrm{Ker}\,g_1(\varphi) \perp \mathrm{Ker}\,g_2(\varphi) \perp \cdots \perp \mathrm{Ker}\,g_k(\varphi). \tag{9.16}$$
> 对任意的 $i \neq j$，由 $(g_i(x), g_j(x)) = 1$ 可知，存在实系数多项式 $u(x), v(x)$，使得 $g_i(x)u(x) + g_j(x)v(x) = 1$，于是 $g_i(\varphi)u(\varphi) + g_j(\varphi)v(\varphi) = \boldsymbol{I}_V$。任取 $\boldsymbol{v} \in \mathrm{Ker}\,g_j(\varphi)$，则有 $\boldsymbol{v} = g_i(\varphi)u(\varphi)(\boldsymbol{v}) + v(\varphi)g_j(\varphi)(\boldsymbol{v}) = g_i(\varphi)u(\varphi)(\boldsymbol{v}) \in \mathrm{Im}\,g_i(\varphi)$，于是 $\mathrm{Ker}\,g_j(\varphi) \subseteq \mathrm{Im}\,g_i(\varphi)$。进一步，$\sum_{j \neq i} \mathrm{Ker}\,g_j(\varphi) \subseteq \mathrm{Im}\,g_i(\varphi)$。由线性映射维数公式以及 (9.16) 式可得 $\mathrm{Im}\,g_i(\varphi) = \sum_{j \neq i} \mathrm{Ker}\,g_j(\varphi) = \perp_{j \neq i} \mathrm{Ker}\,g_j(\varphi)$，从而 $V = \mathrm{Ker}\,g_i(\varphi) \perp \mathrm{Im}\,g_i(\varphi)$，即条件 (1) 成立。令 $\varphi_i$ 为 $\varphi$ 在 $\mathrm{Ker}\,g_i(\varphi)$ 上的限制，则 $\varphi_i$ 仍为实正规算子且极小多项式为 $g_i(x)$。若 $g_i(x) = x - c_i$，则 $\varphi_i = c_i\boldsymbol{I}$ 为纯量变换，它显然保持向量的正交性不

---


变。若 $g_i(x) = (x - a_i)^2 + b_i^2$，其中 $b_i \neq 0$，则由例 9.108 可得 $\varphi_i^*\varphi_i = (a_i^2 + b_i^2)\boldsymbol{I}$，再由例 9.110 可知 $\varphi_i$ 保持向量的正交性不变，即条件 (2) 也成立。

再证充分性。设 $\varphi$ 满足条件 (1) 和 (2)，其极小多项式 $g(x) = g_1(x)^{r_1}g_2(x)^{r_2}\cdots g_k(x)^{r_k}$，其中 $g_i(x)$ 是 $g(x)$ 互异的首一不可约因式。若 $r_1 > 1$，则对任一 $\boldsymbol{v} \in V$，$g_1(\varphi)^{r_1-1}g_2(\varphi)^{r_2}\cdots g_k(\varphi)^{r_k}(\boldsymbol{v}) \in \mathrm{Ker}\,g_1(\varphi) \cap \mathrm{Im}\,g_1(\varphi) = 0$，于是 $\varphi$ 也适合多项式 $g_1(x)^{r_1-1}g_2(x)^{r_2}\cdots g_k(x)^{r_k}$，这与 $g(x)$ 是极小多项式相矛盾，因此 $g(x) = g_1(x)g_2(x)\cdots g_k(x)$。由例 7.87 可知，$V = \mathrm{Ker}\,g_1(\varphi) \oplus \mathrm{Ker}\,g_2(\varphi) \oplus \cdots \oplus \mathrm{Ker}\,g_k(\varphi)$，由必要性中间完全类似的讨论可得 $\mathrm{Im}\,g_i(\varphi) = \oplus_{j \neq i} \mathrm{Ker}\,g_j(\varphi)$，再由条件 (1) 可知，对任意的 $i \neq j$，$\mathrm{Ker}\,g_i(\varphi) \perp \mathrm{Ker}\,g_j(\varphi)$，于是

$$V = \mathrm{Ker}\,g_1(\varphi) \perp \mathrm{Ker}\,g_2(\varphi) \perp \cdots \perp \mathrm{Ker}\,g_k(\varphi).$$

若 $g_i(x) = x - c_i$，则 $\varphi_i = c_i\boldsymbol{I}$ 为纯量变换，于是存在 $\mathrm{Ker}\,g_i(\varphi)$ 的一组标准正交基，使得 $\varphi_i$ 的表示矩阵为纯量矩阵 $c_i\boldsymbol{I}$。若 $g_i(x) = (x - a_i)^2 + b_i^2$，其中 $b_i \neq 0$，则 $\varphi_i$ 是非零线性变换且保持 $\mathrm{Ker}\,g_i(\varphi)$ 中向量的正交性不变，故由例 9.110 可知，存在正实数 $k_i$，使得 $\varphi_i^*\varphi_i = k_i\boldsymbol{I}$，故 $\varphi_i^* = k_i\varphi_i^{-1}$，于是 $\varphi_i$ 是 $\mathrm{Ker}\,g_i(\varphi)$ 上的正规算子，从而存在一组标准正交基，使得 $\varphi_i$ 的表示矩阵为 $\boldsymbol{A}_i = \mathrm{diag}\left\{\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}, \cdots, \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\right\}$。将 $\mathrm{Ker}\,g_i(\varphi)$ 的标准正交基拼成全空间 $V$ 的一组标准正交基，则 $\varphi$ 在这组基下的表示矩阵为

$$\boldsymbol{A} = \mathrm{diag}\left\{\begin{pmatrix} a_1 & b_1 \\ -b_1 & a_1 \end{pmatrix}, \cdots, \begin{pmatrix} a_r & b_r \\ -b_r & a_r \end{pmatrix}, c_{2r+1}, \cdots, c_n\right\},$$

这是一个实正规矩阵，从而 $\varphi$ 是实正规算子。 $\square$

> [!example] 例 9.112
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是斜对称算子（即 $\varphi^* = -\varphi$）的充要条件是对任意的向量 $\boldsymbol{v}$，$\varphi(\boldsymbol{v})$ 与 $\boldsymbol{v}$ 都正交。

> [!proof]- 证明
> 先证必要性。若 $\varphi^* = -\varphi$，则对任意的 $\boldsymbol{v} \in V$，$(\varphi(\boldsymbol{v}), \boldsymbol{v}) = (\boldsymbol{v}, \varphi^*(\boldsymbol{v})) = (\boldsymbol{v}, -\varphi(\boldsymbol{v})) = -(\varphi(\boldsymbol{v}), \boldsymbol{v})$，从而 $(\varphi(\boldsymbol{v}), \boldsymbol{v}) = 0$。再证充分性。任取 $\boldsymbol{u}, \boldsymbol{v} \in V$，则由条件可得
> $$\begin{aligned} 0 &= (\varphi(\boldsymbol{u} + \boldsymbol{v}), \boldsymbol{u} + \boldsymbol{v}) = (\varphi(\boldsymbol{u}), \boldsymbol{u}) + (\varphi(\boldsymbol{u}), \boldsymbol{v}) + (\varphi(\boldsymbol{v}), \boldsymbol{u}) + (\varphi(\boldsymbol{v}), \boldsymbol{v}) \\ &= (\varphi(\boldsymbol{u}), \boldsymbol{v}) + (\varphi(\boldsymbol{v}), \boldsymbol{u}), \end{aligned}$$
> 从而 $(\varphi(\boldsymbol{u}), \boldsymbol{v}) = -(\varphi(\boldsymbol{v}), \boldsymbol{u}) = (\boldsymbol{u}, -\varphi(\boldsymbol{v}))$ 对任意的 $\boldsymbol{u}, \boldsymbol{v} \in V$ 成立，再由伴随的唯一性即得 $\varphi^* = -\varphi$。 $\square$

> [!note] 注
> 例 9.112 对酉空间就不成立了，请读者自行思考其中的原因（参考例 9.10）。

---


在前面我们已经看到不变子空间对研究正规算子的重要意义，接下去的例 9.113 是关于正规算子不变子空间的最重要的结论，其中对实正规算子不变子空间的证明虽然比较复杂，但其方法在前面的例题中已使用过多次，相信读者是不会陌生的。

> [!example] 例 9.113
> 设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的正规算子，$U$ 是 $\varphi$ 的不变子空间。求证：$U$ 也是 $\varphi^*$ 的不变子空间，从而 $\varphi$ 在 $U$ 上的限制仍然是一个正规算子。

> [!proof]- 证法 1
> 我们对欧氏空间和酉空间分别进行证明。先假设 $V$ 是酉空间，我们对不变子空间 $U$ 的维数 $k$ 进行归纳。当 $k = 1$ 时，$U$ 是一维子空间，可以由一个向量 $\boldsymbol{u}$ 生成。显然 $\boldsymbol{u}$ 是 $\varphi$ 的特征向量，由例 9.28 可知，$\boldsymbol{u}$ 也是 $\varphi^*$ 的特征向量，从而 $U = L(\boldsymbol{u})$ 也是 $\varphi^*$ 的不变子空间。假设对 $k-1$ 维不变子空间结论成立，现设 $U$ 是 $k$ 维不变子空间。将 $\varphi$ 限制在 $U$ 上，设 $\lambda$ 是 $\varphi|_U$ 的特征值，$\boldsymbol{u} \in U$ 是对应的特征向量。令 $W = L(\boldsymbol{u})$，则由例 9.28 可知，$W$ 既是 $\varphi$ 的不变子空间，也是 $\varphi^*$ 的不变子空间，再由例 9.26 可知，$W^\perp$ 也是 $\varphi$ 和 $\varphi^*$ 的不变子空间。令 $W_0 = U \cap W^\perp$，则易证 $U = W \perp W_0$ 且 $W_0$ 是 $\varphi$ 的 $k-1$ 维不变子空间。由归纳假设，$W_0$ 是 $\varphi^*$ 的不变子空间，于是 $U$ 也是 $\varphi^*$ 的不变子空间。至此我们对酉空间证明了结论。
>
> 再假设 $V$ 是欧氏空间，我们也对 $U$ 的维数 $k$ 进行归纳。当 $k = 0$ 时表示归纳过程已经结束。当 $k = 1$ 时，类似于酉空间的情形同理可证明。假设对小于 $k$ 维的不变子空间结论成立，现设 $U$ 是 $k$ 维不变子空间。取 $U$ 和 $U^\perp$ 的标准正交基组成 $V$ 的基，$\varphi$ 在此基下的表示矩阵为 $\boldsymbol{N} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$，$\boldsymbol{N}$ 是正规矩阵。我们将 $V$ 等同于 $\mathbb{R}^n$（取标准内积），$U$ 等同于 $\mathbb{R}^k$（看成是 $\mathbb{R}^n$ 的子空间，后 $n-k$ 个分量全为零），将 $\varphi$ 等同于 $\boldsymbol{N}$，$\varphi|_U$ 等同于 $\boldsymbol{A}$。若 $\boldsymbol{A}$ 有实特征值，则类似于酉空间的情形用归纳假设即得结论。以下假设 $\boldsymbol{A}$ 没有实特征值，并设 $a + b\mathrm{i}$ 是其虚特征值，$\boldsymbol{u} + \boldsymbol{v}\mathrm{i}$ 是对应的特征向量，注意到它们也是 $\boldsymbol{N}$ 的虚特征值和虚特征向量，故由例 9.86 可知，$W = L(\boldsymbol{u}, \boldsymbol{v})$ 作为 $U$ 的二维子空间，既是 $\boldsymbol{N}$ 的不变子空间，也是 $\boldsymbol{N}'$ 的不变子空间，再由例 9.26 可知，$W^\perp$ 也是 $\boldsymbol{N}$ 和 $\boldsymbol{N}'$ 的不变子空间。令 $W_0 = U \cap W^\perp$，则易证 $U = W \perp W_0$ 且 $W_0$ 是 $\boldsymbol{N}$ 的 $k-2$ 维不变子空间。由归纳假设，$W_0$ 是 $\boldsymbol{N}'$ 的不变子空间，于是 $U$ 也是 $\boldsymbol{N}'$ 的不变子空间。至此我们对欧氏空间也证明了结论。

> [!proof]- 证法 2
> 我们只对欧氏空间证明，酉空间的证明类似。取 $U$ 和 $U^\perp$ 的标准正交基组成 $V$ 的基，$\varphi$ 在此基下的表示矩阵为 $\boldsymbol{N} = \begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$，$\boldsymbol{N}$ 是正规矩阵，故由例 9.89 可知 $\boldsymbol{C} = \boldsymbol{O}$。又 $\varphi^*$ 的表示矩阵为 $\boldsymbol{N}'$，故 $U$ 也是 $\varphi^*$ 的不变子空间。
>
> 特别地，可将 $\varphi$ 和 $\varphi^*$ 限制在 $U$ 上，并且容易验证 $\varphi^*|_U$ 仍是 $\varphi|_U$ 的伴随，故由 $\varphi|_U\varphi^*|_U = \varphi^*|_U\varphi|_U$ 可知 $\varphi|_U$ 仍是正规算子。 $\square$

---


### § 9.12 实正规矩阵的正交相似标准型

上一节我们讨论了实正规算子和实正规矩阵的几何结构及其相关的应用，这一节将着重讨论实正规矩阵的正交相似标准型在矩阵理论中的一些应用。

例 9.75 告诉我们，若 $\boldsymbol{A}$ 是正定实对称矩阵，$\boldsymbol{B}$ 是实对称矩阵，则存在可逆矩阵 $\boldsymbol{C}$，使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n$，$\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 是对角矩阵，这个结论称为同时合同对角化。在 § 9.8 中，我们已看到同时合同对角化在处理实对称矩阵时的诸多应用。类似地，若 $\boldsymbol{S}$ 是实反对称矩阵，则例 9.114 告诉我们，存在可逆矩阵 $\boldsymbol{C}$，使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n$，$\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}$ 是实反对称矩阵的正交相似标准型，我们亦称之为同时合同标准化。

> [!example] 例 9.114
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{S}$ 是同阶实反对称矩阵，求证：存在可逆矩阵 $\boldsymbol{C}$，使得
> $$\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n, \quad \boldsymbol{C}'\boldsymbol{S}\boldsymbol{C} = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_1 \\ -b_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_r \\ -b_r & 0 \end{pmatrix}, 0, \cdots, 0\right\}, \tag{9.17}$$
> 其中 $b_1, \cdots, b_r$ 是非零实数。

> [!proof]- 证明
> 因为 $\boldsymbol{A}$ 是正定阵，故存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \boldsymbol{I}_n$。又矩阵 $\boldsymbol{P}'\boldsymbol{S}\boldsymbol{P}$ 还是实反对称矩阵，故存在正交矩阵 $\boldsymbol{Q}$，使得
> $$\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{S}\boldsymbol{P})\boldsymbol{Q} = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_1 \\ -b_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_r \\ -b_r & 0 \end{pmatrix}, 0, \cdots, 0\right\},$$
> 其中 $b_1, \cdots, b_r$ 是非零实数。此时 $\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P})\boldsymbol{Q} = \boldsymbol{I}_n$，只需令 $\boldsymbol{C} = \boldsymbol{P}\boldsymbol{Q}$ 即得结论。 $\square$

同时合同标准化在处理实反对称矩阵时比较有用，我们来看 3 个典型的例题。

> [!example] 例 8.45
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{S}$ 是 $n$ 阶实反对称矩阵，求证：
> - (1) $|\boldsymbol{A} + \boldsymbol{S}| \geq |\boldsymbol{A}| + |\boldsymbol{S}|$，且等号成立当且仅当 $n \leq 2$ 或当 $n \geq 3$ 时，$\boldsymbol{S} = \boldsymbol{O}$。
> - (2) $|\boldsymbol{A} + \boldsymbol{S}| \geq |\boldsymbol{A}|$，且等号成立当且仅当 $\boldsymbol{S} = \boldsymbol{O}$。

> [!proof]- 证法 2
> (2) 由例 9.114 可知，存在可逆矩阵 $\boldsymbol{C}$，使得 (9.17) 式成立。因此我们有
> $$\begin{aligned} |\boldsymbol{C}'||\boldsymbol{A}+\boldsymbol{S}||\boldsymbol{C}| &= |\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} + \boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}| \\ &= \left|\mathrm{diag}\left\{\begin{pmatrix} 1 & b_1 \\ -b_1 & 1 \end{pmatrix}, \cdots, \begin{pmatrix} 1 & b_r \\ -b_r & 1 \end{pmatrix}, 1, \cdots, 1\right\}\right| \\ &= (1+b_1^2)(1+b_2^2)\cdots(1+b_r^2) \geq 1 = |\boldsymbol{C}'||\boldsymbol{A}||\boldsymbol{C}|, \end{aligned}$$
> 且等号成立的充要条件是 $r = 0$，这也等价于 $\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C} = \boldsymbol{O}$，即 $\boldsymbol{S} = \boldsymbol{O}$。
>
> (1) 与 (2) 的证明类似，但等号成立的充要条件需要讨论，细节留给读者完成。 $\square$

---


> [!example] 例 9.115
> 设 $n$ 阶实矩阵 $\boldsymbol{A}$ 满足 $\boldsymbol{A} + \boldsymbol{A}'$ 正定（即 $\boldsymbol{A}$ 是亚正定阵），求证：
> $$|\boldsymbol{A} + \boldsymbol{A}'| \leq 2^n|\boldsymbol{A}|,$$
> 且等号成立的充要条件是 $\boldsymbol{A}$ 为对称矩阵。

> [!proof]- 证明
> 注意到矩阵 $\boldsymbol{A}$ 的如下分解：
> $$\boldsymbol{A} = \frac{1}{2}(\boldsymbol{A} + \boldsymbol{A}') + \frac{1}{2}(\boldsymbol{A} - \boldsymbol{A}'),$$
> 其中 $\dfrac{1}{2}(\boldsymbol{A} + \boldsymbol{A}')$ 是正定阵，$\dfrac{1}{2}(\boldsymbol{A} - \boldsymbol{A}')$ 是实反对称矩阵，故由例 8.45 可得 $|\boldsymbol{A}| \geq \dfrac{1}{2^n}|\boldsymbol{A} + \boldsymbol{A}'|$，等号成立的充要条件是 $\dfrac{1}{2}(\boldsymbol{A} - \boldsymbol{A}') = \boldsymbol{O}$，即 $\boldsymbol{A}$ 为对称矩阵。 $\square$

> [!example] 例 9.116
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶实矩阵，其中 $\boldsymbol{A}$ 的 $n$ 个特征值都是正实数，并且满足 $\boldsymbol{A}\boldsymbol{B} + \boldsymbol{B}\boldsymbol{A}' = 2\boldsymbol{A}\boldsymbol{A}'$。证明：
> - (1) $\boldsymbol{B}$ 必为对称矩阵；
> - (2) $\boldsymbol{A}$ 为对称矩阵当且仅当 $\boldsymbol{A} = \boldsymbol{B}$，也当且仅当 $\mathrm{tr}(\boldsymbol{B}^2) = \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$；
> - (3) $|\boldsymbol{B}| \geq |\boldsymbol{A}|$，且等号成立的充要条件是 $\boldsymbol{A} = \boldsymbol{B}$。

> [!proof]- 证明
> (1) 考虑矩阵方程
> $$\boldsymbol{A}\boldsymbol{X} - \boldsymbol{X}(-\boldsymbol{A}') = 2\boldsymbol{A}\boldsymbol{A}', \tag{9.18}$$
> 由于 $\boldsymbol{A}$ 的特征值都是正实数，故 $-\boldsymbol{A}'$ 的特征值都是负实数，从而它们没有公共的特征值。由例 6.91 可知，矩阵方程 (9.18) 存在唯一解 $\boldsymbol{X} = \boldsymbol{B} \in M_n(\mathbb{R})$。将等式 $\boldsymbol{A}\boldsymbol{B} + \boldsymbol{B}\boldsymbol{A}' = 2\boldsymbol{A}\boldsymbol{A}'$ 两边同时转置，可得 $\boldsymbol{A}\boldsymbol{B}' + \boldsymbol{B}'\boldsymbol{A}' = 2\boldsymbol{A}\boldsymbol{A}'$，即 $\boldsymbol{X} = \boldsymbol{B}'$ 也是矩阵方程 (9.18) 的解，由解的唯一性可得 $\boldsymbol{B} = \boldsymbol{B}'$，即 $\boldsymbol{B}$ 为对称矩阵。
>
> (2) 若 $\boldsymbol{A}$ 为对称矩阵，则 $\boldsymbol{X} = \boldsymbol{A}$ 也是矩阵方程 (9.18) 的解，由解的唯一性可得 $\boldsymbol{B} = \boldsymbol{A}$，于是 $\boldsymbol{B}^2 = \boldsymbol{A}\boldsymbol{A}'$，从而 $\mathrm{tr}(\boldsymbol{B}^2) = \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$。反之，若 $\mathrm{tr}(\boldsymbol{B}^2) = \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$，则
> $$\begin{aligned} &\mathrm{tr}\left((\boldsymbol{A}-\boldsymbol{B})(\boldsymbol{A}-\boldsymbol{B})'\right) = \mathrm{tr}\left((\boldsymbol{A}-\boldsymbol{B})(\boldsymbol{A}'-\boldsymbol{B})\right) \\ &= \mathrm{tr}\left(\boldsymbol{A}\boldsymbol{A}' + \boldsymbol{B}^2 - (\boldsymbol{A}\boldsymbol{B} + \boldsymbol{B}\boldsymbol{A}')\right) = \mathrm{tr}(\boldsymbol{B}^2) - \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}') = 0, \end{aligned}$$
> 由迹的正定性可得 $\boldsymbol{A} - \boldsymbol{B} = \boldsymbol{O}$，即 $\boldsymbol{A} = \boldsymbol{B}$ 是对称矩阵。
>
> (3) 注意到 $\boldsymbol{A}\boldsymbol{B} + (\boldsymbol{A}\boldsymbol{B})' = 2\boldsymbol{A}\boldsymbol{A}'$ 为正定阵且 $|\boldsymbol{A}| > 0$，故由例 9.115 可得 $|2\boldsymbol{A}\boldsymbol{A}'| \leq 2^n|\boldsymbol{A}\boldsymbol{B}|$，由此可得 $|\boldsymbol{B}| \geq |\boldsymbol{A}|$，等号成立当且仅当 $\boldsymbol{A}\boldsymbol{B}$ 为对称矩阵，即当且仅当 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{A}\boldsymbol{A}'$，这也当且仅当 $\boldsymbol{A} = \boldsymbol{B}$。 $\square$


同时合同标准化还可以推广到多个矩阵的情形。

> [!example] 例 9.117
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{S}_1, \boldsymbol{S}_2$ 都是 $n$ 阶实反对称矩阵，使得对任意的 $1 \leq i, j \leq 2$，$\boldsymbol{A}^{-1}\boldsymbol{S}_i\boldsymbol{A}\boldsymbol{S}_j$ 都是实对称矩阵。求证：存在可逆矩阵 $\boldsymbol{C}$，使得
> $$\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n, \quad \boldsymbol{C}'\boldsymbol{S}_1\boldsymbol{C} = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_1 \\ -b_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_r \\ -b_r & 0 \end{pmatrix}, 0, \cdots, 0\right\},$$
> $$\boldsymbol{C}'\boldsymbol{S}_2\boldsymbol{C} = \mathrm{diag}\left\{\begin{pmatrix} 0 & c_1 \\ -c_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & c_r \\ -c_r & 0 \end{pmatrix}, 0, \cdots, 0\right\},$$
> 其中 $b_1, \cdots, b_r, c_1, \cdots, c_r$ 是非零实数。

> [!proof]- 证明
> 由例 9.114 可知，存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \boldsymbol{I}_n$。又矩阵 $\boldsymbol{B}_i = \boldsymbol{P}'\boldsymbol{S}_i\boldsymbol{P}\,(i = 1, 2)$ 还是实反对称矩阵，并且 $\boldsymbol{B}_i\boldsymbol{B}_j = \boldsymbol{P}'(\boldsymbol{S}_i\boldsymbol{A}^{-1}\boldsymbol{S}_j)\boldsymbol{P}$ 都是实对称矩阵，故 $\boldsymbol{B}_1$ 与 $\boldsymbol{B}_2$ 乘法可交换。由例 9.125 可知，存在正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{B}_1\boldsymbol{Q}$ 和 $\boldsymbol{Q}'\boldsymbol{B}_2\boldsymbol{Q}$ 同时正交相似于实反对称矩阵的标准型。令 $\boldsymbol{C} = \boldsymbol{P}\boldsymbol{Q}$，由于 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{S}_i\boldsymbol{C} = \boldsymbol{Q}'\boldsymbol{B}_i\boldsymbol{Q}\,(i = 1, 2)$，故 $\boldsymbol{C}$ 就是所要求的可逆矩阵。 $\square$

同时合同标准化也能用来处理复矩阵的问题，这就是下面的例 9.118，其证明只不过是例 9.114 证明的翻版而已。

> [!example] 例 9.118
> 设 $\boldsymbol{H}$ 为 $n$ 阶正定 Hermite 矩阵，$\boldsymbol{A}$ 是 $n$ 阶反 Hermite 矩阵，求证：存在可逆矩阵 $\boldsymbol{C}$，使得
> $$\boldsymbol{C}'\boldsymbol{H}\overline{\boldsymbol{C}} = \boldsymbol{I}_n, \quad \boldsymbol{C}'\boldsymbol{A}\overline{\boldsymbol{C}} = \mathrm{diag}\left\{\mathrm{i}a_1, \cdots, \mathrm{i}a_n\right\},$$
> 其中 $a_1, \cdots, a_n$ 是非零实数。

> [!proof]- 证明
> 因为 $\boldsymbol{H}$ 是正定 Hermite 矩阵，故存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{H}\overline{\boldsymbol{P}} = \boldsymbol{I}_n$。又矩阵 $\boldsymbol{P}'\boldsymbol{A}\overline{\boldsymbol{P}}$ 还是反 Hermite 矩阵，故存在酉矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{A}\overline{\boldsymbol{P}})\overline{\boldsymbol{Q}} = \mathrm{diag}\{\mathrm{i}a_1, \cdots, \mathrm{i}a_n\}$，其中 $a_1, \cdots, a_n$ 是非零实数。此时 $\boldsymbol{Q}'(\boldsymbol{P}'\boldsymbol{H}\overline{\boldsymbol{P}})\overline{\boldsymbol{Q}} = \boldsymbol{I}_n$，只需令 $\boldsymbol{C} = \boldsymbol{P}\overline{\boldsymbol{Q}}$ 即得结论。 $\square$

利用实正规矩阵的正交相似标准型还可以给出实矩阵的极分解中极分解因子唯一性的简洁证明。

> [!example] 例 9.119
> 设 $n$ 阶实矩阵 $\boldsymbol{A}$ 的极分解为 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$，其中 $\boldsymbol{Q}$ 是正交矩阵，$\boldsymbol{S}$ 是半正定实对称矩阵，求证：极分解中的 $\boldsymbol{S}$ 一定是唯一的，$\boldsymbol{Q}$ 在 $\boldsymbol{A}$ 可逆时唯一，在 $\boldsymbol{A}$ 不可逆时不唯一。

> [!proof]- 证明
> 由 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{S}\boldsymbol{Q}'\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}^2$ 可知，$\boldsymbol{S}$ 是半正定实对称矩阵 $\boldsymbol{A}'\boldsymbol{A}$ 的算术平方根，故由例 9.61 的唯一性可知，$\boldsymbol{S}$ 一定是唯一的。若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{S}$ 也正定，于是 $\boldsymbol{Q} = \boldsymbol{A}\boldsymbol{S}^{-1}$ 唯一。若 $\boldsymbol{A}$ 不可逆，我们来证明 $\boldsymbol{Q}$ 不唯一。注意到 $n$ 阶实正规矩阵 $\mathrm{diag}\{\boldsymbol{S}, \boldsymbol{O}\}$ 的正交相似标准型为 $\mathrm{diag}\{\lambda_1, \cdots, \lambda_r, 0, \cdots, 0\}$，其中 $r = r(\boldsymbol{A})$，$\lambda_1, \cdots, \lambda_r$ 是 $\boldsymbol{S}$ 的全体正特征值。由 $\boldsymbol{A}$ 的极分解 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$ 可知，矩阵 $\boldsymbol{Q}'$ 的相同列是 $\boldsymbol{A}'$ 属于特征值 $\lambda_1^2, \cdots, \lambda_r^2, 0, \cdots, 0$ 的 $n$ 个两两正交的单位特征向量，但最后 $n-r$ 个列向量的选取不唯一。具体地，$\boldsymbol{Q}'$ 的后 $n-r$ 列可以取为 $\mathrm{Ker}\,\boldsymbol{A}'$（$\boldsymbol{A}'$ 的属于特征值 0 的特征子空间）中任意一组标准正交基，因此当 $r < n$ 时，$\boldsymbol{Q}$ 不唯一。 $\square$

---


例 9.119 还告诉我们如何利用 $\boldsymbol{A}'\boldsymbol{A}$ 的算术平方根去构造极分解。设 $n$ 阶实矩阵 $\boldsymbol{A}$ 的极分解为 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$，则 $\boldsymbol{S} = (\boldsymbol{A}'\boldsymbol{A})^{\frac{1}{2}}$。当 $\boldsymbol{A}$ 可逆时，$\boldsymbol{Q} = \boldsymbol{A}\boldsymbol{S}^{-1} = \boldsymbol{A}(\boldsymbol{A}'\boldsymbol{A})^{-\frac{1}{2}}$；当 $\boldsymbol{A}$ 不可逆时，虽然 $\boldsymbol{Q}$ 不唯一，但也可以按照例 9.119 中的方式构造出来。

> [!example] 例 9.120
> 设 $n$ 阶实矩阵 $\boldsymbol{A}$ 的极分解为 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$，求证：$\boldsymbol{A}$ 是正规矩阵的充要条件是 $\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}\boldsymbol{Q}$。

> [!proof]- 证明
> 先证充分性。若 $\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}\boldsymbol{Q}$，则 $\boldsymbol{A}\boldsymbol{A}' = (\boldsymbol{Q}\boldsymbol{S})(\boldsymbol{Q}\boldsymbol{S})' = \boldsymbol{Q}\boldsymbol{S}^2\boldsymbol{Q}'$，$\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{S}\boldsymbol{Q}'\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}^2 = \boldsymbol{Q}\boldsymbol{S}^2\boldsymbol{Q}'$，于是 $\boldsymbol{A}\boldsymbol{A}' = \boldsymbol{A}'\boldsymbol{A}$。
>
> 再证必要性。若 $\boldsymbol{A}\boldsymbol{A}' = \boldsymbol{A}'\boldsymbol{A}$，则 $\boldsymbol{Q}\boldsymbol{S}^2\boldsymbol{Q}' = \boldsymbol{S}^2$，即 $(\boldsymbol{Q}\boldsymbol{S}^2\boldsymbol{Q}')\boldsymbol{Q} = \boldsymbol{S}^2\boldsymbol{Q}$，亦即 $\boldsymbol{Q}\boldsymbol{S}^2 = \boldsymbol{S}^2\boldsymbol{Q}$。对任意的 $\boldsymbol{x} \in \mathbb{R}^n$，设 $\boldsymbol{S}\boldsymbol{Q}(\boldsymbol{x}) = a_1\boldsymbol{e}_1 + a_2\boldsymbol{e}_2 + \cdots + a_n\boldsymbol{e}_n$，$\boldsymbol{Q}\boldsymbol{S}(\boldsymbol{x}) = b_1\boldsymbol{e}_1 + b_2\boldsymbol{e}_2 + \cdots + b_n\boldsymbol{e}_n$，其中 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$ 是 $\boldsymbol{S}^2$ 的特征向量组成的标准正交基。由 $\boldsymbol{S}^2\boldsymbol{Q}(\boldsymbol{x}) = \boldsymbol{Q}\boldsymbol{S}^2(\boldsymbol{x})$ 可得 $a_i\lambda_i = b_i\lambda_i\,(1 \leq i \leq n)$，其中 $\lambda_i \geq 0$ 是 $\boldsymbol{S}^2$ 的特征值。若 $\lambda_i > 0$，则 $a_i = b_i$；若 $\lambda_i = 0$，则 $\boldsymbol{e}_i \in \mathrm{Ker}\,\boldsymbol{S}^2 = \mathrm{Ker}\,\boldsymbol{S}$，从而 $a_i = b_i = 0$，于是 $\boldsymbol{S}\boldsymbol{Q}(\boldsymbol{x}) = \boldsymbol{Q}\boldsymbol{S}(\boldsymbol{x})$ 对任意的 $\boldsymbol{x} \in \mathbb{R}^n$ 成立，即 $\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}\boldsymbol{Q}$。 $\square$

> [!example] 例 9.121
> 设 $n$ 阶实矩阵 $\boldsymbol{A}, \boldsymbol{B}$ 的极分解分别为 $\boldsymbol{A} = \boldsymbol{Q}_1\boldsymbol{S}_1$，$\boldsymbol{B} = \boldsymbol{Q}_2\boldsymbol{S}_2$，其中 $\boldsymbol{Q}_1, \boldsymbol{Q}_2$ 是正交矩阵，$\boldsymbol{S}_1, \boldsymbol{S}_2$ 是半正定实对称矩阵。求证：若 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{B}'\boldsymbol{B}$，并且 $\boldsymbol{A}\boldsymbol{B}'$ 是实对称矩阵，则 $\boldsymbol{A}$ 正交相似于 $\boldsymbol{B}$。

> [!proof]- 证明
> 由 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{B}'\boldsymbol{B}$ 以及算术平方根的唯一性可得 $\boldsymbol{S}_1 = \boldsymbol{S}_2 = \boldsymbol{S}$。再由 $\boldsymbol{A}\boldsymbol{B}'$ 是实对称矩阵可得 $\boldsymbol{Q}_1\boldsymbol{S}^2\boldsymbol{Q}_2' = \boldsymbol{Q}_2\boldsymbol{S}^2\boldsymbol{Q}_1'$，即 $(\boldsymbol{Q}_2'\boldsymbol{Q}_1)\boldsymbol{S}^2 = \boldsymbol{S}^2(\boldsymbol{Q}_2'\boldsymbol{Q}_1)$。令 $\boldsymbol{Q} = \boldsymbol{Q}_2'\boldsymbol{Q}_1$，则 $\boldsymbol{Q}\boldsymbol{S}^2 = \boldsymbol{S}^2\boldsymbol{Q}$，由与例 9.120 必要性完全类似的讨论可得 $\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}\boldsymbol{Q}$，于是
> $$\boldsymbol{B} = \boldsymbol{Q}_2\boldsymbol{S} = \boldsymbol{Q}_2\boldsymbol{Q}\boldsymbol{S} = \boldsymbol{Q}_2(\boldsymbol{Q}_2'\boldsymbol{Q}_1)\boldsymbol{S} = \boldsymbol{Q}_1\boldsymbol{S}\boldsymbol{Q}_1'\boldsymbol{Q}_2,$$
> 从而 $\boldsymbol{Q}_1'\boldsymbol{B}\boldsymbol{Q}_1 = \boldsymbol{S}\boldsymbol{Q}_1'\boldsymbol{Q}_2 = \boldsymbol{Q}_1'\boldsymbol{Q}_2\boldsymbol{S} = \boldsymbol{Q}_1'\boldsymbol{Q}_1\boldsymbol{S} = \boldsymbol{S} = \boldsymbol{S}_1$，即 $\boldsymbol{Q}_1'\boldsymbol{B}\boldsymbol{Q}_1 = \boldsymbol{S}_1$。因为 $\boldsymbol{A} = \boldsymbol{Q}_1\boldsymbol{S}_1$，所以 $\boldsymbol{B}$ 正交相似于 $\boldsymbol{A}$。 $\square$

---


> [!example] 例 9.122
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的正规算子，其极小多项式为 $g(x) = (x-a)^2 + b^2$，其中 $b \neq 0$。求证：对 $V$ 中任意的向量 $\boldsymbol{\alpha}$，均有 $\|\varphi(\boldsymbol{\alpha})\| = \sqrt{a^2+b^2}\|\boldsymbol{\alpha}\|$，$\varphi^*(\boldsymbol{\alpha}) = (a^2+b^2)\varphi^{-1}(\boldsymbol{\alpha})$，并且
> $$\langle \varphi(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = a\|\boldsymbol{\alpha}\|^2, \quad \langle \varphi^*(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = a(a^2+b^2)\|\boldsymbol{\alpha}\|^2.$$

> [!proof]- 证明
> 由例 9.108 可知，$\varphi^* = (a^2+b^2)\varphi^{-1}$，于是
> $$\|\varphi(\boldsymbol{\alpha})\|^2 = \langle \varphi(\boldsymbol{\alpha}), \varphi(\boldsymbol{\alpha}) \rangle = \langle (a^2+b^2)\varphi^{-1}(\boldsymbol{\alpha}), \varphi(\boldsymbol{\alpha}) \rangle = (a^2+b^2)\|\boldsymbol{\alpha}\|^2.$$
> 由例 9.105 可知，$\varphi = \varphi_1 + \varphi_2$，其中 $\varphi_1 = a\boldsymbol{I}$，$\varphi_2$ 是斜对称算子。对任意的 $\boldsymbol{\alpha} \in V$，由例 9.112 可知，$\langle \varphi_2(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = 0$，于是
> $$\langle \varphi(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = \langle \varphi_1(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle + \langle \varphi_2(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = \langle a\boldsymbol{\alpha}, \boldsymbol{\alpha} \rangle = a\|\boldsymbol{\alpha}\|^2.$$
> 同理 $\langle \varphi^*(\boldsymbol{\alpha}), \boldsymbol{\alpha} \rangle = a(a^2+b^2)\|\boldsymbol{\alpha}\|^2$。 $\square$

> [!example] 例 9.123
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的线性变换，求证：$\varphi$ 是正规算子的充要条件是存在实系数多项式 $g(x)$，使得
> $$\varphi^* = g(\varphi) + h(\varphi)\varphi^*,$$
> 其中 $g(x), h(x)$ 是实系数多项式。

> [!proof]- 证明
> 我们给出代数的证明，类似于例 9.106 证法 1 中的讨论，可假设 $\varphi$ 在某组标准正交基下的表示矩阵已是如下形状的标准型：
> $$\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{B}_1, \cdots, \boldsymbol{B}_s, \boldsymbol{B}_{s+1}, \cdots, \boldsymbol{B}_t\},$$
> 其中 $\boldsymbol{B}_i = \mathrm{diag}\left\{\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}, \cdots, \begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}\right\}$，$1 \leq i \leq s$；$\boldsymbol{B}_j = \mathrm{diag}\{c_j, \cdots, c_j\}$，$s+1 \leq j \leq t$。只要证明 $\boldsymbol{A}'$ 是 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 的实系数多项式即可。令 $f_i(x) = -2a_i x + (a_i^2 - b_i^2)\,(1 \leq i \leq s)$，$f_j(x) = x\,(s+1 \leq j \leq t)$，则容易验证 $\boldsymbol{B}_i^2 = f_i(\boldsymbol{B}_i) + 2a_i\boldsymbol{B}_i'\,(1 \leq i \leq s)$，$\boldsymbol{B}_j^2 = f_j(\boldsymbol{B}_j)\,(s+1 \leq j \leq t)$。由例 7.31 可知，存在实系数多项式 $g(x)$，使得 $\boldsymbol{A}^2 = g(\boldsymbol{A}) + 2a\boldsymbol{A}'$，即 $\boldsymbol{A}' = \dfrac{1}{2a}(\boldsymbol{A}^2 - g(\boldsymbol{A}))$，其中 $a$ 是某个实数。注意到这里的 $a$ 不一定非零，但若 $a = 0$，则 $\boldsymbol{B}_i$ 已经是斜对称矩阵，此时 $\boldsymbol{B}_i' = -\boldsymbol{B}_i$，可以直接取 $h(x) = -1$。综合以上讨论，$\boldsymbol{A}'$ 可以表示为 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 的实系数多项式，结论得证。 $\square$

---


> [!example] 例 9.124
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的正规算子，$f(x), g(x)$ 是互素的实系数多项式。设 $\boldsymbol{u}, \boldsymbol{v} \in V$，且满足 $f(\varphi)(\boldsymbol{u}) = \boldsymbol{0}$，$g(\varphi)(\boldsymbol{v}) = \boldsymbol{0}$。求证：
> $$\langle \boldsymbol{u}, \boldsymbol{v} \rangle = 0.$$

> [!proof]- 证明
> 因为 $f(x), g(x)$ 互素，所以存在实系数多项式 $s(x), t(x)$，使得 $s(x)f(x) + t(x)g(x) = 1$，于是 $s(\varphi)f(\varphi) + t(\varphi)g(\varphi) = \boldsymbol{I}$。将上式作用在 $\boldsymbol{u}$ 上可得 $\boldsymbol{u} = t(\varphi)g(\varphi)(\boldsymbol{u})$，从而
> $$\langle \boldsymbol{u}, \boldsymbol{v} \rangle = \langle t(\varphi)g(\varphi)(\boldsymbol{u}), \boldsymbol{v} \rangle = \langle g(\varphi)(\boldsymbol{u}), t(\varphi^*)(\boldsymbol{v}) \rangle.$$
> 由例 9.106 可知，$\varphi^* = h(\varphi)$ 对某个实系数多项式 $h(x)$ 成立，故 $t(\varphi^*) = t(h(\varphi))$ 也是 $\varphi$ 的多项式。由 $g(\varphi)(\boldsymbol{v}) = \boldsymbol{0}$ 容易推出 $g(\varphi)t(\varphi^*)(\boldsymbol{v}) = \boldsymbol{0}$，再由例 9.113 可知 $g(\varphi)$ 是正规算子，从而由例 9.103 可得 $g(\varphi^*)t(\varphi^*)(\boldsymbol{v}) = \boldsymbol{0}$。注意到 $g(\varphi^*)$ 也是 $g(\varphi)$ 的多项式，故 $g(\varphi)t(\varphi^*)(\boldsymbol{v}) = \boldsymbol{0}$。于是
> $$\langle \boldsymbol{u}, \boldsymbol{v} \rangle = \langle g(\varphi)(\boldsymbol{u}), t(\varphi^*)(\boldsymbol{v}) \rangle = \langle \boldsymbol{u}, g(\varphi^*)t(\varphi^*)(\boldsymbol{v}) \rangle = 0. \quad \square$$

> [!example] 例 9.125
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶实反对称矩阵，且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$，求证：存在正交矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$ 同时为正交相似标准型。

> [!proof]- 证明
> 因为 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$，故 $\boldsymbol{A}, \boldsymbol{B}$ 可以同时上三角化（参考例 6.93），即存在酉矩阵 $\boldsymbol{U}$，使得 $\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}$ 和 $\overline{\boldsymbol{U}}'\boldsymbol{B}\boldsymbol{U}$ 同时为上三角矩阵。由于 $\boldsymbol{A}, \boldsymbol{B}$ 都是实反对称矩阵，故它们的特征值都是零或纯虚数，且虚特征值成共轭对出现。设 $\boldsymbol{U} = (\boldsymbol{u}_1, \boldsymbol{u}_2, \cdots, \boldsymbol{u}_n)$，其中 $\boldsymbol{u}_i$ 是 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 的公共特征向量。若 $\lambda_i$ 是 $\boldsymbol{A}$ 的虚特征值，则存在某个 $j$，使得 $\lambda_j = \overline{\lambda_i}$，此时可以取 $\boldsymbol{u}_j = \overline{\boldsymbol{u}_i}$。将这样的特征向量对 $\boldsymbol{u}_i, \boldsymbol{u}_j$ 替换为 $\dfrac{\boldsymbol{u}_i + \boldsymbol{u}_j}{\sqrt{2}}, \dfrac{\boldsymbol{u}_i - \boldsymbol{u}_j}{\sqrt{2}\mathrm{i}}$，则它们都是实向量，并且构成 $\boldsymbol{A}$（也是 $\boldsymbol{B}$）的二维不变子空间的标准正交基。将所有这样的实向量放在一起，就构成了 $\mathbb{R}^n$ 的一组标准正交基，$\boldsymbol{A}$ 和 $\boldsymbol{B}$ 在这组基下的表示矩阵就是正交相似标准型。 $\square$

---


> [!example] 例 9.126
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶实正规矩阵，且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$，求证：存在正交矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$ 同时为正交相似标准型。

> [!proof]- 证明
> 因为 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$，故 $\boldsymbol{A}, \boldsymbol{B}$ 可以同时上三角化，即存在酉矩阵 $\boldsymbol{U}$，使得 $\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}$ 和 $\overline{\boldsymbol{U}}'\boldsymbol{B}\boldsymbol{U}$ 同时为上三角矩阵。由于 $\boldsymbol{A}, \boldsymbol{B}$ 都是实正规矩阵，故它们可以自然地看成是复正规矩阵，从而 $\overline{\boldsymbol{U}}'\boldsymbol{A}\boldsymbol{U}$ 和 $\overline{\boldsymbol{U}}'\boldsymbol{B}\boldsymbol{U}$ 实际上都是对角矩阵。设 $\boldsymbol{U} = (\boldsymbol{u}_1, \boldsymbol{u}_2, \cdots, \boldsymbol{u}_n)$，其中 $\boldsymbol{u}_i$ 是 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 的公共特征向量。若 $\lambda_i$ 是 $\boldsymbol{A}$ 的实特征值，则 $\boldsymbol{u}_i$ 可取为实向量；若 $\lambda_i$ 是 $\boldsymbol{A}$ 的虚特征值，则存在某个 $j$，使得 $\lambda_j = \overline{\lambda_i}$，此时可以取 $\boldsymbol{u}_j = \overline{\boldsymbol{u}_i}$。将这样的特征向量对替换为实向量对 $\dfrac{\boldsymbol{u}_i + \boldsymbol{u}_j}{\sqrt{2}}, \dfrac{\boldsymbol{u}_i - \boldsymbol{u}_j}{\sqrt{2}\mathrm{i}}$，则它们构成 $\boldsymbol{A}$（也是 $\boldsymbol{B}$）的二维不变子空间的标准正交基。将所有这样的实向量放在一起，就构成了 $\mathbb{R}^n$ 的一组标准正交基，$\boldsymbol{A}$ 和 $\boldsymbol{B}$ 在这组基下的表示矩阵就是正交相似标准型。 $\square$

> [!example] 例 9.127
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{B}, \boldsymbol{C}$ 为 $n$ 阶实反对称矩阵，使得 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$，$\boldsymbol{A}\boldsymbol{C} = \boldsymbol{C}\boldsymbol{A}$，$\boldsymbol{B}\boldsymbol{C} = \boldsymbol{C}\boldsymbol{B}$，求证：存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$，$\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$，$\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}$ 同时为合同标准型。

> [!proof]- 证明
> 由例 9.114 可知，存在可逆矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q} = \boldsymbol{I}_n$，$\boldsymbol{Q}'\boldsymbol{B}\boldsymbol{Q}$ 为正交相似标准型。由 $\boldsymbol{A}\boldsymbol{C} = \boldsymbol{C}\boldsymbol{A}$ 可得 $\boldsymbol{Q}'\boldsymbol{B}\boldsymbol{Q}$ 与 $\boldsymbol{Q}'\boldsymbol{C}\boldsymbol{Q}$ 乘法可交换，再由例 9.125 可知，存在正交矩阵 $\boldsymbol{R}$，使得 $\boldsymbol{R}'(\boldsymbol{Q}'\boldsymbol{B}\boldsymbol{Q})\boldsymbol{R}$ 和 $\boldsymbol{R}'(\boldsymbol{Q}'\boldsymbol{C}\boldsymbol{Q})\boldsymbol{R}$ 同时为正交相似标准型。令 $\boldsymbol{P} = \boldsymbol{Q}\boldsymbol{R}$，则 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \boldsymbol{R}'\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q}\boldsymbol{R} = \boldsymbol{R}'\boldsymbol{I}_n\boldsymbol{R} = \boldsymbol{I}_n$，$\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P}$ 和 $\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}$ 同时为正交相似标准型，即同时为合同标准型。 $\square$

---


### § 9.13 同时合同对角化与同时合同标准化

本节我们将利用 § 9.12 中关于实正规矩阵正交相似标准型的理论，来处理多个实对称矩阵或实反对称矩阵的同时合同化问题。

> [!example] 例 9.128
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{B}, \boldsymbol{C}$ 为 $n$ 阶半正定实对称矩阵，使得 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C}$ 是对称矩阵。求证：
> $$|\boldsymbol{A}| \cdot |\boldsymbol{A} + \boldsymbol{B} + \boldsymbol{C}| \leq |\boldsymbol{A} + \boldsymbol{B}| \cdot |\boldsymbol{A} + \boldsymbol{C}|, \tag{9.19}$$
> 且等号成立的充要条件是 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C} = \boldsymbol{O}$。

> [!proof]- 证明
> 由例 9.127 可知，存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \boldsymbol{I}_n$，
> $$\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P} = \boldsymbol{\Lambda}_B = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}, \quad \boldsymbol{P}'\boldsymbol{C}\boldsymbol{P} = \boldsymbol{\Lambda}_C = \mathrm{diag}\{\mu_1, \mu_2, \cdots, \mu_n\},$$
> 其中 $\lambda_i \geq 0$，$\mu_i \geq 0\,(1 \leq i \leq n)$。将 (9.19) 式两边左乘 $|\boldsymbol{P}'|^2$，右乘 $|\boldsymbol{P}|^2$，故只要证明
> $$|\boldsymbol{I}_n + \boldsymbol{\Lambda}_B + \boldsymbol{\Lambda}_C| \leq |\boldsymbol{I}_n + \boldsymbol{\Lambda}_B| \cdot |\boldsymbol{I}_n + \boldsymbol{\Lambda}_C|$$
> 即可，而这由 $1 + \lambda_i + \mu_i \leq (1 + \lambda_i)(1 + \mu_i)\,(1 \leq i \leq n)$ 即得。(9.19) 式的等号成立当且仅当 $\lambda_i\mu_i = 0\,(1 \leq i \leq n)$，即当且仅当 $\boldsymbol{O} = \boldsymbol{\Lambda}_B\boldsymbol{\Lambda}_C = (\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P})(\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}) = \boldsymbol{P}'(\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C})\boldsymbol{P}$，这也当且仅当 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C} = \boldsymbol{O}$。 $\square$

利用例 9.126，还可以把同时合同标准化（即例 9.114）推广到多个矩阵的情形。

> [!example] 例 9.129
> 设 $\boldsymbol{A}_1$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{A}_2, \cdots, \boldsymbol{A}_m$ 是 $n$ 阶实反对称矩阵，且对任意的 $2 \leq i < j \leq m$，$\boldsymbol{A}_i\boldsymbol{A}_1^{-1}\boldsymbol{A}_j$ 都是对称矩阵。求证：存在可逆矩阵 $\boldsymbol{C}$，使得
> $$\boldsymbol{C}'\boldsymbol{A}_1\boldsymbol{C} = \boldsymbol{I}_n, \quad \boldsymbol{C}'\boldsymbol{A}_i\boldsymbol{C} = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_{i1} \\ -b_{i1} & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_{ir} \\ -b_{ir} & 0 \end{pmatrix}, 0, \cdots, 0\right\}, \quad 2 \leq i \leq m.$$

> [!proof]- 证明
> 由 $\boldsymbol{A}_1$ 正定可知 $\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_1\boldsymbol{A}_1^{-\frac{1}{2}} = \boldsymbol{I}_n$，由 $\boldsymbol{A}_i\boldsymbol{A}_1^{-1}\boldsymbol{A}_j$ 对称可知 $\boldsymbol{A}_i\boldsymbol{A}_1^{-1}\boldsymbol{A}_j = \boldsymbol{A}_j\boldsymbol{A}_1^{-1}\boldsymbol{A}_i$，从而 $(\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_i\boldsymbol{A}_1^{-\frac{1}{2}})(\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_j\boldsymbol{A}_1^{-\frac{1}{2}}) = (\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_j\boldsymbol{A}_1^{-\frac{1}{2}})(\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_i\boldsymbol{A}_1^{-\frac{1}{2}})$，即实反对称矩阵 $\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_i\boldsymbol{A}_1^{-\frac{1}{2}}\,(2 \leq i \leq m)$ 两两乘法可交换。由例 9.126 可知，存在正交矩阵 $\boldsymbol{P}$，使得
> $$\boldsymbol{P}'\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_i\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{P} = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_{i1} \\ -b_{i1} & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_{ir} \\ -b_{ir} & 0 \end{pmatrix}, 0, \cdots, 0\right\}, \quad 2 \leq i \leq m,$$
> 此时 $\boldsymbol{P}'\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{A}_1\boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{P} = \boldsymbol{I}_n$，故只要令 $\boldsymbol{C} = \boldsymbol{A}_1^{-\frac{1}{2}}\boldsymbol{P}$ 即得结论。 $\square$

> [!example] 例 9.130
> 设 $\boldsymbol{A}$ 为 $n$ 阶正定实对称矩阵，$\boldsymbol{B}, \boldsymbol{C}$ 为 $n$ 阶实反对称矩阵，使得 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C}$ 是对称矩阵。求证：
> $$|\boldsymbol{A}| \cdot |\boldsymbol{B} + \boldsymbol{C}| \leq |\boldsymbol{A} + \boldsymbol{B}| \cdot |\boldsymbol{A} + \boldsymbol{C}|, \tag{9.20}$$
> 且等号成立的充要条件是 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C} = -\boldsymbol{A}$。

---


> [!proof]- 证明
> 由例 9.129 可知，存在可逆矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \boldsymbol{I}_n$，
> $$\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P} = \boldsymbol{\Lambda}_B = \mathrm{diag}\left\{\begin{pmatrix} 0 & b_1 \\ -b_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & b_r \\ -b_r & 0 \end{pmatrix}, 0, \cdots, 0\right\},$$
> $$\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P} = \boldsymbol{\Lambda}_C = \mathrm{diag}\left\{\begin{pmatrix} 0 & c_1 \\ -c_1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & c_r \\ -c_r & 0 \end{pmatrix}, 0, \cdots, 0\right\}.$$
> 将 (9.20) 式两边左乘 $|\boldsymbol{P}'|^2$，右乘 $|\boldsymbol{P}|^2$，故只要证明
> $$|\boldsymbol{\Lambda}_B + \boldsymbol{\Lambda}_C| \leq |\boldsymbol{I}_n + \boldsymbol{\Lambda}_B| \cdot |\boldsymbol{I}_n + \boldsymbol{\Lambda}_C|$$
> 即可，而这由 $(b_i + c_i)^2 \leq (1 + b_i^2)(1 + c_i^2)\,(1 \leq i \leq r)$ 即得。(9.20) 式的等号成立当且仅当 $n = 2r$ 且 $b_ic_i = 1\,(1 \leq i \leq r)$，即当且仅当 $-\boldsymbol{I}_n = \boldsymbol{\Lambda}_B\boldsymbol{\Lambda}_C = (\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P})(\boldsymbol{P}'\boldsymbol{C}\boldsymbol{P}) = \boldsymbol{P}'(\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C})\boldsymbol{P}$，这也当且仅当 $\boldsymbol{B}\boldsymbol{A}^{-1}\boldsymbol{C} = -(\boldsymbol{P}\boldsymbol{P}')^{-1} = -\boldsymbol{A}$。 $\square$

### § 9.14 谱分解、极分解、奇异值分解及其应用

矩阵分解是矩阵理论中一个重要的研究方向，具有广泛的应用。前面我们已经介绍过矩阵的满秩分解、Cholesky 分解和 $QR$ 分解等内容，本节将分成 4 个部分，分别介绍谱分解、极分解、奇异值分解以及广义逆等内容。

#### 1. 谱分解及其应用

设 $\varphi$ 是欧氏空间 $V$ 上的自伴随算子或酉空间 $V$ 上的正规算子，$\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全体不同特征值，$V_1, V_2, \cdots, V_k$ 是对应的特征子空间，则

$$V = V_1 \perp V_2 \perp \cdots \perp V_k. \tag{9.21}$$

设 $\boldsymbol{E}_i$ 是从 $V$ 到 $V_i$ 上的正交投影算子，则 $\varphi = \lambda_1\boldsymbol{E}_1 + \lambda_2\boldsymbol{E}_2 + \cdots + \lambda_k\boldsymbol{E}_k$ 称为 $\varphi$ 的**谱分解**。容易验证谱分解一定是存在并且唯一的。其实，谱分解等价于欧氏空间中自伴随算子（实对称矩阵）的正交相似标准型，以及酉空间中正规算子（复正规矩阵）的酉相似标准型，因此上述两个标准型分解有时也称为对应算子或矩阵的谱分解。

谱分解有着广泛的用途。例如在 § 9.10，我们利用谱分解证明了复正规算子的 3 个充要条件；在教材 [1] 中，我们利用谱分解证明了复正规算子是自伴随算子、正定或半正定自伴随算子、酉算子关于特征值的判定准则，利用谱分解的存在唯一性证明了半正定自伴随算子的算术平方根的存在唯一性，进一步给出了线性算子的极分解。

---


事实上，(9.21) 式是欧氏空间中自伴随算子和酉空间中正规算子的判定准则，即若内积空间 $V$ 上的线性算子 $\varphi$ 的特征值都在基域中，则 $\varphi$ 为实自伴随算子或复正规算子的充要条件是全空间等于特征子空间的正交直和。这一判定准则的两个典型应用是例 9.93 和例 9.131。

> [!example] 例 9.131
> 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的幂等线性变换（即 $\varphi^2 = \varphi$），若对 $V$ 中任一向量 $\boldsymbol{\alpha}$，均有 $\|\varphi(\boldsymbol{\alpha})\| \leq \|\boldsymbol{\alpha}\|$，求证：$\varphi$ 是自伴随算子。

> [!proof]- 证明
> 注意到 $\varphi$ 是幂等变换，即适合多项式 $x^2 - x$，故 $\varphi$ 的极小多项式无重根，从而可对角化。设 $\varphi$ 的特征值 $i$ 对应的特征子空间为 $V_i\,(i = 0, 1)$，则 $V = V_0 \oplus V_1$。任取 $\boldsymbol{v}_0 \in V_0$，$\boldsymbol{v}_1 \in V_1$，令 $\boldsymbol{v} = \boldsymbol{v}_0 + t\boldsymbol{v}_1$，其中 $t$ 为实参数，则 $\varphi(\boldsymbol{v}) = t\boldsymbol{v}_1$。由 $\|\varphi(\boldsymbol{v})\| \leq \|\boldsymbol{v}\|$ 可得
> $$t^2\|\boldsymbol{v}_1\|^2 \leq t^2\|\boldsymbol{v}_1\|^2 + 2t(\boldsymbol{v}_0, \boldsymbol{v}_1) + \|\boldsymbol{v}_0\|^2,$$
> 于是 $2t(\boldsymbol{v}_0, \boldsymbol{v}_1) + \|\boldsymbol{v}_0\|^2 \geq 0$ 对任意的 $t \in \mathbb{R}$ 成立，从而只能是 $(\boldsymbol{v}_0, \boldsymbol{v}_1) = 0$，故 $V_0$ 与 $V_1$ 正交。因此 $V = V_0 \perp V_1$，故 $\varphi$ 是自伴随算子。 $\square$

下面是利用谱分解唯一性的一个典型例题。

> [!example] 例 9.132
> 设 $\varphi, \psi$ 为 $n$ 维酉空间 $V$ 上的正规算子，它们都满足不同特征值的模长互不相同。证明：$\|\varphi(\boldsymbol{v})\| = \|\psi(\boldsymbol{v})\|$ 对任意的 $\boldsymbol{v} \in V$ 成立的充要条件是存在谱分解：
> $$\varphi = \lambda_1\boldsymbol{E}_1 + \cdots + \lambda_k\boldsymbol{E}_k, \quad \psi = \mu_1\boldsymbol{E}_1 + \cdots + \mu_k\boldsymbol{E}_k,$$
> 其中 $\lambda_1, \cdots, \lambda_k$ 和 $\mu_1, \cdots, \mu_k$ 分别是 $\varphi$ 和 $\psi$ 的全体不同特征值，$\boldsymbol{E}_i$ 是对应的正交投影算子，并且 $|\lambda_i| = |\mu_i|\,(1 \leq i \leq k)$。

> [!proof]- 证明
> 先证充分性。对任意的 $\boldsymbol{v} \in V$，由谱分解的性质可得
> $$\|\varphi(\boldsymbol{v})\|^2 = |\lambda_1|^2\|\boldsymbol{E}_1(\boldsymbol{v})\|^2 + \cdots + |\lambda_k|^2\|\boldsymbol{E}_k(\boldsymbol{v})\|^2,$$
> $$\|\psi(\boldsymbol{v})\|^2 = |\mu_1|^2\|\boldsymbol{E}_1(\boldsymbol{v})\|^2 + \cdots + |\mu_k|^2\|\boldsymbol{E}_k(\boldsymbol{v})\|^2,$$
> 于是 $\|\varphi(\boldsymbol{v})\| = \|\psi(\boldsymbol{v})\|$ 成立。
>
> 再证必要性。注意到在酉空间 $V$ 中，内积可用范数来表示，即对任意的 $\boldsymbol{u}, \boldsymbol{v} \in V$，
> $$(\boldsymbol{u}, \boldsymbol{v}) = \frac{1}{4}\|\boldsymbol{u} + \boldsymbol{v}\|^2 - \frac{1}{4}\|\boldsymbol{u} - \boldsymbol{v}\|^2 + \frac{\mathrm{i}}{4}\|\boldsymbol{u} + \mathrm{i}\boldsymbol{v}\|^2 - \frac{\mathrm{i}}{4}\|\boldsymbol{u} - \mathrm{i}\boldsymbol{v}\|^2,$$
> 故由 $\varphi, \psi$ 的线性可得
> $$(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = \frac{1}{4}\|\varphi(\boldsymbol{u} + \boldsymbol{v})\|^2 - \frac{1}{4}\|\varphi(\boldsymbol{u} - \boldsymbol{v})\|^2 + \frac{\mathrm{i}}{4}\|\varphi(\boldsymbol{u} + \mathrm{i}\boldsymbol{v})\|^2 - \frac{\mathrm{i}}{4}\|\varphi(\boldsymbol{u} - \mathrm{i}\boldsymbol{v})\|^2,$$
> $$(\psi(\boldsymbol{u}), \psi(\boldsymbol{v})) = \frac{1}{4}\|\psi(\boldsymbol{u} + \boldsymbol{v})\|^2 - \frac{1}{4}\|\psi(\boldsymbol{u} - \boldsymbol{v})\|^2 + \frac{\mathrm{i}}{4}\|\psi(\boldsymbol{u} + \mathrm{i}\boldsymbol{v})\|^2 - \frac{\mathrm{i}}{4}\|\psi(\boldsymbol{u} - \mathrm{i}\boldsymbol{v})\|^2,$$

---


因此 $(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = (\psi(\boldsymbol{u}), \psi(\boldsymbol{v}))$，从而 $(\varphi^*\varphi(\boldsymbol{u}), \boldsymbol{v}) = (\psi^*\psi(\boldsymbol{u}), \boldsymbol{v})$，即 $(\varphi^*\varphi(\boldsymbol{u}) - \psi^*\psi(\boldsymbol{u}), \boldsymbol{v}) = 0$ 对任意的 $\boldsymbol{u}, \boldsymbol{v} \in V$ 成立。对任意给定的 $\boldsymbol{u} \in V$，在上式中令 $\boldsymbol{v} = \varphi^*\varphi(\boldsymbol{u}) - \psi^*\psi(\boldsymbol{u})$，由内积的正定性可得 $\varphi^*\varphi(\boldsymbol{u}) = \psi^*\psi(\boldsymbol{u})$，又这一等式对任意的 $\boldsymbol{u} \in V$ 成立，故可得 $\varphi^*\varphi = \psi^*\psi$。设正规算子 $\varphi, \psi$ 的谱分解分别为

$$\varphi = \lambda_1\boldsymbol{E}_1 + \cdots + \lambda_k\boldsymbol{E}_k, \quad \psi = \mu_1\boldsymbol{F}_1 + \cdots + \mu_l\boldsymbol{F}_l,$$

其中 $\lambda_1, \cdots, \lambda_k$ 是 $\varphi$ 的全体不同特征值，$\boldsymbol{E}_1, \cdots, \boldsymbol{E}_k$ 是对应的正交投影算子；$\mu_1, \cdots, \mu_l$ 是 $\psi$ 的全体不同特征值，$\boldsymbol{F}_1, \cdots, \boldsymbol{F}_l$ 是对应的正交投影算子，则 $\varphi^*, \psi^*$ 的谱分解分别为

$$\varphi^* = \overline{\lambda_1}\boldsymbol{E}_1 + \cdots + \overline{\lambda_k}\boldsymbol{E}_k, \quad \psi^* = \overline{\mu_1}\boldsymbol{F}_1 + \cdots + \overline{\mu_l}\boldsymbol{F}_l,$$

于是有

$$\varphi^*\varphi = |\lambda_1|^2\boldsymbol{E}_1 + \cdots + |\lambda_k|^2\boldsymbol{E}_k = |\mu_1|^2\boldsymbol{F}_1 + \cdots + |\mu_l|^2\boldsymbol{F}_l = \psi^*\psi.$$

因为 $|\lambda_i|\,(1 \leq i \leq k)$ 互不相同，$|\mu_j|\,(1 \leq j \leq l)$ 互不相同，故上式是 $\varphi^*\varphi = \psi^*\psi$ 的两个谱分解。由正规算子谱分解的唯一性可知 $k = l$，且在适当调整指标顺序后有 $|\lambda_i| = |\mu_i|$，$\boldsymbol{E}_i = \boldsymbol{F}_i\,(1 \leq i \leq k)$。 $\square$

#### 2. 极分解及其应用

$n$ 阶实（复）矩阵的极分解 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S} = \boldsymbol{S}_1\boldsymbol{Q}$，其中 $\boldsymbol{Q}$ 是正交矩阵（酉矩阵），$\boldsymbol{S}, \boldsymbol{S}_1$ 是半正定实对称矩阵（Hermite 矩阵），是复数的极分解 $z = \rho(\cos\theta + \mathrm{i}\sin\theta)$ 的推广。下面我们来看应用极分解的两道典型例题。

> [!example] 例 9.133
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵，$\boldsymbol{A}'\boldsymbol{A}$ 的全体特征值为 $\lambda_1^2, \lambda_2^2, \cdots, \lambda_n^2$，其中 $0 \leq \lambda_i \leq 1\,(1 \leq i \leq n)$。证明：
> $$|\boldsymbol{I}_n - \boldsymbol{A}| \geq (1 - \lambda_1)(1 - \lambda_2)\cdots(1 - \lambda_n).$$

> [!proof]- 证明
> 设 $\boldsymbol{A}$ 的极分解为 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$，其中 $\boldsymbol{Q}$ 是正交矩阵，$\boldsymbol{S}$ 是半正定实对称矩阵，则 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{S}^2$，从而 $\boldsymbol{S}$ 的全体特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$，满足 $0 \leq \lambda_i \leq 1$，于是只要证明 $|\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}| \geq (1 - \lambda_1)(1 - \lambda_2)\cdots(1 - \lambda_n)$ 即可。设 $\boldsymbol{P}$ 为正交矩阵，使得 $\boldsymbol{P}'\boldsymbol{S}\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$，则 $|\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}| = |\boldsymbol{I}_n - (\boldsymbol{P}'\boldsymbol{Q}\boldsymbol{P})(\boldsymbol{P}'\boldsymbol{S}\boldsymbol{P})|$，注意到 $\boldsymbol{P}'\boldsymbol{Q}\boldsymbol{P}$ 仍为正交矩阵，故不妨从一开始就假设 $\boldsymbol{S}$ 是正交相似标准型 $\mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$。下面分两种情况进行讨论。
>
> 若存在某个 $\lambda_i = 1$，则只要证明 $|\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}| \geq 0$ 即可。由例 9.47 可知，$\boldsymbol{Q}\boldsymbol{S}$ 特征值的模长都小于等于 1，于是 $\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}$ 特征值的实部都大于等于零。注意到 $\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}$ 的特征值或者是非负实数，或者是共轭虚数，故 $|\boldsymbol{I}_n - \boldsymbol{Q}\boldsymbol{S}| \geq 0$ 成立。

---


若所有的 $\lambda_i < 1$，令 $\boldsymbol{T} = \boldsymbol{I}_n - \boldsymbol{S} = \mathrm{diag}\{1 - \lambda_1, 1 - \lambda_2, \cdots, 1 - \lambda_n\}$，则 $\boldsymbol{T}$ 正定且 $|\boldsymbol{T}| = (1 - \lambda_1)(1 - \lambda_2)\cdots(1 - \lambda_n)$。再令 $\boldsymbol{R} = \boldsymbol{T}^{-1} = \mathrm{diag}\{\mu_1, \mu_2, \cdots, \mu_n\}$，其中 $\mu_i = \dfrac{1}{1 - \lambda_i} \geq 1$，这时只要证明 $|\boldsymbol{I}_n - \boldsymbol{Q}(\boldsymbol{I}_n - \boldsymbol{T})| \geq |\boldsymbol{T}|$，或等价地证明 $|\boldsymbol{R} - \boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n)| \geq 1$ 即可。任取 $\boldsymbol{R} - \boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n)$ 的特征值 $\lambda \in \mathbb{C}$ 以及对应的特征向量 $\boldsymbol{\xi} \in \mathbb{C}^n$，则 $(\boldsymbol{R} - \boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n))\boldsymbol{\xi} = \lambda\boldsymbol{\xi}$，即 $(\boldsymbol{R} - \lambda\boldsymbol{I}_n)\boldsymbol{\xi} = \boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n)\boldsymbol{\xi}$。设 $\boldsymbol{\xi} = (a_1, a_2, \cdots, a_n)'$，则

$$\overline{\boldsymbol{\xi}}'(\boldsymbol{R} - \overline{\lambda}\boldsymbol{I}_n)(\boldsymbol{R} - \lambda\boldsymbol{I}_n)\boldsymbol{\xi} = \overline{\boldsymbol{\xi}}'(\boldsymbol{R} - \boldsymbol{I}_n)\boldsymbol{Q}'\boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n)\boldsymbol{\xi} = \overline{\boldsymbol{\xi}}'(\boldsymbol{R} - \boldsymbol{I}_n)^2\boldsymbol{\xi},$$

从而有

$$\begin{aligned} &|\mu_1 - \lambda|^2|a_1|^2 + |\mu_2 - \lambda|^2|a_2|^2 + \cdots + |\mu_n - \lambda|^2|a_n|^2 \\ &= (\mu_1 - 1)^2|a_1|^2 + (\mu_2 - 1)^2|a_2|^2 + \cdots + (\mu_n - 1)^2|a_n|^2. \end{aligned}$$

由于 $a_1, a_2, \cdots, a_n$ 不全为零，故存在某个 $i$，使得 $|\mu_i - \lambda| \leq \mu_i - 1$，这说明 $\lambda$ 的实部大于等于 1。因此 $\lambda$ 或者为大于等于 1 的实数，或者为实部大于等于 1 的共轭虚数，从而 $|\boldsymbol{R} - \boldsymbol{Q}(\boldsymbol{R} - \boldsymbol{I}_n)| \geq 1$ 成立。 $\square$

> [!example] 例 9.134
> 设 $\boldsymbol{J} = \begin{pmatrix} \boldsymbol{O} & \boldsymbol{I}_n \\ -\boldsymbol{I}_n & \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{A}$ 为 $2n$ 阶实矩阵，满足 $\boldsymbol{A}\boldsymbol{J}\boldsymbol{A}' = \boldsymbol{J}$，求证：$|\boldsymbol{A}| = 1$。

> [!proof]- 证法 1
> 由 Laplace 定理容易算出 $|\boldsymbol{J}| = 1$，从而由 $\boldsymbol{A}\boldsymbol{J}\boldsymbol{A}' = \boldsymbol{J}$ 可得 $|\boldsymbol{A}|^2 = 1$，即 $|\boldsymbol{A}| = \pm 1$。设 $\boldsymbol{A} = \begin{pmatrix} \boldsymbol{B} & \boldsymbol{C} \\ \boldsymbol{D} & \boldsymbol{E} \end{pmatrix}$，则有
> $$\boldsymbol{A}\boldsymbol{J} + \boldsymbol{J}\boldsymbol{A} = \begin{pmatrix} \boldsymbol{B} & \boldsymbol{C} \\ \boldsymbol{D} & \boldsymbol{E} \end{pmatrix}\begin{pmatrix} \boldsymbol{O} & \boldsymbol{I}_n \\ -\boldsymbol{I}_n & \boldsymbol{O} \end{pmatrix} + \begin{pmatrix} \boldsymbol{O} & \boldsymbol{I}_n \\ -\boldsymbol{I}_n & \boldsymbol{O} \end{pmatrix}\begin{pmatrix} \boldsymbol{B} & \boldsymbol{C} \\ \boldsymbol{D} & \boldsymbol{E} \end{pmatrix} = \begin{pmatrix} \boldsymbol{D} - \boldsymbol{C} & \boldsymbol{B} + \boldsymbol{E} \\ -\boldsymbol{B} - \boldsymbol{E} & \boldsymbol{D} - \boldsymbol{C} \end{pmatrix},$$
> 由例 2.73 可得 $|\boldsymbol{A}\boldsymbol{J} + \boldsymbol{J}\boldsymbol{A}| \geq 0$。注意到 $(\boldsymbol{A}\boldsymbol{J} + \boldsymbol{J}\boldsymbol{A})\boldsymbol{A}' = \boldsymbol{A}\boldsymbol{J}\boldsymbol{A}' + \boldsymbol{J}\boldsymbol{A}\boldsymbol{A}' = \boldsymbol{J}(\boldsymbol{I}_{2n} + \boldsymbol{A}\boldsymbol{A}')$，并且 $\boldsymbol{I}_{2n} + \boldsymbol{A}\boldsymbol{A}'$ 为正定阵，故有
> $$|\boldsymbol{A}\boldsymbol{J} + \boldsymbol{J}\boldsymbol{A}||\boldsymbol{A}| = |(\boldsymbol{A}\boldsymbol{J} + \boldsymbol{J}\boldsymbol{A})\boldsymbol{A}'| = |\boldsymbol{J}||\boldsymbol{I}_{2n} + \boldsymbol{A}\boldsymbol{A}'| > 0,$$
> 于是 $|\boldsymbol{A}| > 0$，从而 $|\boldsymbol{A}| = 1$。

> [!proof]- 证法 2
> 设 $\boldsymbol{A} = \begin{pmatrix} \boldsymbol{B} & \boldsymbol{C} \\ \boldsymbol{D} & \boldsymbol{E} \end{pmatrix}$，则由 $\boldsymbol{A}\boldsymbol{J}\boldsymbol{A}' = \boldsymbol{J}$ 可得
> $$\boldsymbol{B}\boldsymbol{C}' = \boldsymbol{C}\boldsymbol{B}', \quad \boldsymbol{D}\boldsymbol{E}' = \boldsymbol{E}\boldsymbol{D}', \quad \boldsymbol{E}\boldsymbol{B}' - \boldsymbol{D}\boldsymbol{C}' = \boldsymbol{I}_n.$$


设 $\boldsymbol{C} = \boldsymbol{S}\boldsymbol{Q}$ 为极分解，其中 $\boldsymbol{Q}$ 是正交矩阵，$\boldsymbol{S}$ 是半正定实对称矩阵，则 $\boldsymbol{C}' = \boldsymbol{Q}'\boldsymbol{S}$，并且有

$$\boldsymbol{C}(\boldsymbol{B} + t\boldsymbol{Q})' = \boldsymbol{C}\boldsymbol{B}' + t\boldsymbol{C}\boldsymbol{Q}' = \boldsymbol{B}\boldsymbol{C}' + t\boldsymbol{S} = (\boldsymbol{B} + t\boldsymbol{Q})\boldsymbol{C}'.$$

因为 $|\boldsymbol{B} + t\boldsymbol{Q}| = |\boldsymbol{Q}||t\boldsymbol{I}_n + \boldsymbol{B}\boldsymbol{Q}'|$ 是一个关于 $t$ 的 $n$ 次多项式，故在实数域上至多只有 $n$ 个根，从而可取到一列实数 $t_k \to 0$，使得 $\boldsymbol{B} + t_k\boldsymbol{Q}$ 均非异。利用降阶公式计算下列行列式的值：

$$\begin{aligned} &\begin{vmatrix} \boldsymbol{B} + t_k\boldsymbol{Q} & \boldsymbol{C} \\ \boldsymbol{D} & \boldsymbol{E} \end{vmatrix} \\ &= |\boldsymbol{B} + t_k\boldsymbol{Q}| \cdot |\boldsymbol{E} - \boldsymbol{D}(\boldsymbol{B} + t_k\boldsymbol{Q})^{-1}\boldsymbol{C}| = |\boldsymbol{E} - \boldsymbol{D}(\boldsymbol{B} + t_k\boldsymbol{Q})^{-1}\boldsymbol{C}| \cdot |(\boldsymbol{B} + t_k\boldsymbol{Q})'| \\ &= |\boldsymbol{E}(\boldsymbol{B} + t_k\boldsymbol{Q})' - \boldsymbol{D}(\boldsymbol{B} + t_k\boldsymbol{Q})^{-1}\boldsymbol{C}(\boldsymbol{B} + t_k\boldsymbol{Q})'| = |\boldsymbol{E}(\boldsymbol{B} + t_k\boldsymbol{Q})' - \boldsymbol{D}\boldsymbol{C}'| \\ &= |\boldsymbol{E}\boldsymbol{B}' - \boldsymbol{D}\boldsymbol{C}' + t_k\boldsymbol{E}\boldsymbol{Q}'| = |\boldsymbol{I}_n + t_k\boldsymbol{E}\boldsymbol{Q}'|. \end{aligned}$$

上式两边同取极限，令 $t_k \to 0$，即得 $|\boldsymbol{A}| = |\boldsymbol{I}_n| = 1$。 $\square$

#### 3. 奇异值分解及其应用

首先，我们简单地回顾一下矩阵奇异值分解的求法。设 $\boldsymbol{A}$ 是 $m \times n$ 实矩阵，则 $\boldsymbol{A}'\boldsymbol{A}$ 是 $n$ 阶半正定实对称矩阵，故存在 $n$ 阶正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{Q} = \mathrm{diag}\{\lambda_1, \cdots, \lambda_r, 0, \cdots, 0\}$，其中 $r = r(\boldsymbol{A}'\boldsymbol{A}) = r(\boldsymbol{A})$ 且 $\lambda_1 \geq \cdots \geq \lambda_r > 0$ 为 $\boldsymbol{A}'\boldsymbol{A}$ 的正特征值。设 $\boldsymbol{Q} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$ 为列分块，令 $\sigma_i = \sqrt{\lambda_i}$，$\boldsymbol{\beta}_i = \dfrac{1}{\sigma_i}\boldsymbol{A}\boldsymbol{\alpha}_i\,(1 \leq i \leq r)$，则 $\boldsymbol{\beta}_1, \cdots, \boldsymbol{\beta}_r$ 是两两正交长度为 1 的 $m$ 维列向量，将其扩张为 $\mathbb{R}^m$（取标准内积）的一组标准正交基 $\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_m$。令 $\boldsymbol{P} = (\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_m)$，则 $\boldsymbol{P}$ 为 $m$ 阶正交矩阵，满足 $\boldsymbol{A}\boldsymbol{Q} = \boldsymbol{P}\boldsymbol{\Lambda}$，其中 $\boldsymbol{\Lambda} = \begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{S} = \mathrm{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$ 且 $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 为 $\boldsymbol{A}$ 的全体正奇异值，$\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$ 即为 $\boldsymbol{A}$ 的**奇异值分解**。我们注意以下两点：

(1) 方阵 $\boldsymbol{A}$ 的极分解和奇异值分解之间可以互相推导。例如，由奇异值分解 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$ 可得极分解 $\boldsymbol{A} = (\boldsymbol{P}\boldsymbol{Q}')(\boldsymbol{Q}\boldsymbol{\Lambda}\boldsymbol{Q}')$，反之亦然。因此在处理方阵问题时，这两种分解所起的作用是类似的。

(2) $\boldsymbol{A}$ 的正奇异值就是 $\boldsymbol{A}'\boldsymbol{A}$ 的正特征值的算术平方根。因此遇到 $\boldsymbol{A}'\boldsymbol{A}$ 的问题时（如例 9.133），利用极分解或奇异值分解来考虑是一种自然的选择。

下面我们来看一些应用奇异值分解的典型例题。

> [!example] 例 9.39
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $m \times n$ 实矩阵，求证：$\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{B}'\boldsymbol{B}$ 的充要条件是存在 $m$ 阶正交矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{B}$。

---


> [!proof]- 证法 2
> 沿用上面的记号。因为 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{B}'\boldsymbol{B}$，故 $\boldsymbol{A}, \boldsymbol{B}$ 有相同的奇异值，并且 $\boldsymbol{Q}$ 是相同的。由此可得两个 $m$ 阶正交矩阵 $\boldsymbol{P}_1, \boldsymbol{P}_2$，使得
> $$\boldsymbol{A} = \boldsymbol{P}_1\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}', \quad \boldsymbol{B} = \boldsymbol{P}_2\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}'.$$
> 令 $\boldsymbol{P} = \boldsymbol{P}_1\boldsymbol{P}_2'$，则 $\boldsymbol{P}$ 为 $m$ 阶正交矩阵，满足 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{B}$。 $\square$

**第 2 章解答题 15** 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵，定义函数 $f(\boldsymbol{A}) = \sum\limits_{i,j=1}^n a_{ij}^2$。设 $\boldsymbol{P}$ 为 $n$ 阶可逆矩阵，使得对任意的 $n$ 阶方阵 $\boldsymbol{A}$ 成立：$f(\boldsymbol{P}\boldsymbol{A}\boldsymbol{P}^{-1}) = f(\boldsymbol{A})$。证明：存在非零常数 $c$，使得 $\boldsymbol{P}'\boldsymbol{P} = c\boldsymbol{I}_n$。

> [!proof]- 证法 3
> 我们把数域限定在实数域上，$f(\boldsymbol{A}) = \sum\limits_{i,j=1}^n a_{ij}^2 = \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}')$。设 $\boldsymbol{P} = \boldsymbol{Q}_1\boldsymbol{D}\boldsymbol{Q}_2$ 为奇异值分解，其中 $\boldsymbol{Q}_1, \boldsymbol{Q}_2$ 为正交矩阵，$\boldsymbol{D} = \mathrm{diag}\{d_1, d_2, \cdots, d_n\}$ 为对角矩阵，$d_i > 0\,(1 \leq i \leq n)$，则 $\boldsymbol{P}'\boldsymbol{P} = \boldsymbol{Q}_2'\boldsymbol{D}^2\boldsymbol{Q}_2$，于是有
> $$\begin{aligned} f(\boldsymbol{P}\boldsymbol{A}\boldsymbol{P}^{-1}) &= \mathrm{tr}\left(\boldsymbol{P}\boldsymbol{A}\boldsymbol{P}^{-1}(\boldsymbol{P}')^{-1}\boldsymbol{A}'\boldsymbol{P}'\right) = \mathrm{tr}\left((\boldsymbol{P}'\boldsymbol{P})\boldsymbol{A}(\boldsymbol{P}'\boldsymbol{P})^{-1}\boldsymbol{A}'\right) \\ &= \mathrm{tr}\left(\boldsymbol{Q}_2'\boldsymbol{D}^2(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')\boldsymbol{D}^{-2}\boldsymbol{Q}_2\boldsymbol{A}'\right) = \mathrm{tr}\left(\boldsymbol{D}^2(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')\boldsymbol{D}^{-2}(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')'\right) \\ &= f(\boldsymbol{D}(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')\boldsymbol{D}^{-1}), \\ f(\boldsymbol{A}) &= \mathrm{tr}(\boldsymbol{A}\boldsymbol{A}') = \mathrm{tr}\left((\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2')'\right) = f(\boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2'). \end{aligned}$$
> 因此对任意的 $\boldsymbol{B} = \boldsymbol{Q}_2\boldsymbol{A}\boldsymbol{Q}_2' = (b_{ij})$，总有 $f(\boldsymbol{D}\boldsymbol{B}\boldsymbol{D}^{-1}) = f(\boldsymbol{B})$ 成立，此式经简单的计算即为
> $$\sum_{i,j=1}^n \frac{d_i^2}{d_j^2}b_{ij}^2 = \sum_{i,j=1}^n b_{ij}^2,$$
> 故只能是 $d_1 = d_2 = \cdots = d_n = d > 0$，从而 $\boldsymbol{P}'\boldsymbol{P} = \boldsymbol{Q}_2'(d^2\boldsymbol{I}_n)\boldsymbol{Q}_2 = d^2\boldsymbol{I}_n$。 $\square$

> [!example] 例 9.135
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵，求证：$\boldsymbol{A}$ 的**谱半径** $\rho(\boldsymbol{A})$（即 $\boldsymbol{A}$ 的特征值模长的最大值）小于等于 $\boldsymbol{A}$ 的最大奇异值。

> [!proof]- 证明
> 设 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$ 为奇异值分解，其中 $\boldsymbol{\Lambda} = \mathrm{diag}\{\sigma_1, \cdots, \sigma_r, 0, \cdots, 0\}$ 且 $\sigma_1 \geq \cdots \geq \sigma_r > 0$ 为 $\boldsymbol{A}$ 的全体正奇异值。注意到 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Lambda}^2\boldsymbol{Q}'$，故由例 9.55 即得 $\rho(\boldsymbol{A}) \leq \sigma_1$。 $\square$

> [!example] 例 9.136
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵，求证：$\mathrm{tr}(\boldsymbol{A})^2 \leq r(\boldsymbol{A})\,\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A})$，并求等号成立的充要条件。

---


> [!proof]- 证明
> 设 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$ 为奇异值分解，其中 $\boldsymbol{\Lambda} = \mathrm{diag}\{\sigma_1, \cdots, \sigma_r, 0, \cdots, 0\}$ 且 $\sigma_1 \geq \cdots \geq \sigma_r > 0$ 为 $\boldsymbol{A}$ 的全体正奇异值。注意到 $\mathrm{tr}(\boldsymbol{A}) = \mathrm{tr}(\boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}') = \mathrm{tr}(\boldsymbol{Q}'\boldsymbol{P}\boldsymbol{\Lambda})$，若设正交矩阵 $\boldsymbol{Q}'\boldsymbol{P} = (p_{ij})$，则 $\mathrm{tr}(\boldsymbol{A}) = p_{11}\sigma_1 + p_{22}\sigma_2 + \cdots + p_{rr}\sigma_r$。另一方面，$\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A}) = \mathrm{tr}(\boldsymbol{Q}\boldsymbol{\Lambda}^2\boldsymbol{Q}') = \mathrm{tr}(\boldsymbol{\Lambda}^2) = \sigma_1^2 + \sigma_2^2 + \cdots + \sigma_r^2$，故由 Cauchy-Schwarz 不等式可得
> $$\begin{aligned} \mathrm{tr}(\boldsymbol{A})^2 &= (p_{11}\sigma_1 + p_{22}\sigma_2 + \cdots + p_{rr}\sigma_r)^2 \\ &\leq (p_{11}^2 + p_{22}^2 + \cdots + p_{rr}^2)(\sigma_1^2 + \sigma_2^2 + \cdots + \sigma_r^2) \\ &\leq r(\sigma_1^2 + \sigma_2^2 + \cdots + \sigma_r^2) = r(\boldsymbol{A})\,\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A}), \end{aligned}$$
> 等号成立当且仅当 $p_{11} = \cdots = p_{rr} = \pm 1$ 且 $\sigma_1 = \cdots = \sigma_r = \sigma > 0$，即当且仅当 $\boldsymbol{Q}'\boldsymbol{P} = \begin{pmatrix} \pm\boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{P}_{n-r} \end{pmatrix}$，$\boldsymbol{\Lambda} = \begin{pmatrix} \sigma\boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$。此时，$\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}' = \boldsymbol{P}\boldsymbol{\Lambda}(\boldsymbol{Q}'\boldsymbol{P})\boldsymbol{P}' = \boldsymbol{P}\begin{pmatrix} \pm\sigma\boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}'$ 为实对称矩阵且非零特征值都相等，不难验证这就是上述不等式等号成立的充要条件。 $\square$

> [!example] 例 9.137
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂等实矩阵，求证：$\boldsymbol{A}'\boldsymbol{A}$ 的非零特征值都大于等于 1。

> [!proof]- 证明
> 设 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$ 为奇异值分解，其中 $\boldsymbol{\Lambda} = \mathrm{diag}\{\sigma_1, \cdots, \sigma_r, 0, \cdots, 0\}$ 且 $\sigma_1 \geq \cdots \geq \sigma_r > 0$ 为 $\boldsymbol{A}$ 的全体正奇异值。注意到 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Lambda}^2\boldsymbol{Q}'$，故 $\boldsymbol{A}'\boldsymbol{A}$ 的非零特征值为 $\sigma_i^2\,(1 \leq i \leq r)$，我们只要证明 $\sigma_i \geq 1$ 即可。设正交矩阵 $\boldsymbol{P}\boldsymbol{Q}' = (p_{ij})$，则由 $\boldsymbol{A}^2 = \boldsymbol{A}$ 可得 $\boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'\boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}' = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$，于是 $\boldsymbol{\Lambda}(\boldsymbol{Q}'\boldsymbol{P})\boldsymbol{\Lambda} = \boldsymbol{\Lambda}$，又由此可得 $\sigma_i^2 p_{ii} = \sigma_i$，于是 $\sigma_i p_{ii} = 1\,(1 \leq i \leq r)$。注意到 $0 < p_{ii} \leq 1$，故 $\sigma_i = p_{ii}^{-1} \geq 1\,(1 \leq i \leq r)$。 $\square$

> [!example] 例 9.131（代数版本）
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂等实矩阵，若对任意的实列向量 $\boldsymbol{x}$，均有 $\boldsymbol{x}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x} \leq \boldsymbol{x}'\boldsymbol{x}$，求证：$\boldsymbol{A}$ 是实对称矩阵。

> [!proof]- 证法 2
> 任取半正定阵 $\boldsymbol{A}'\boldsymbol{A}$ 的特征值 $\lambda_0$ 及其特征向量 $\boldsymbol{\alpha}$，即有 $\boldsymbol{A}\boldsymbol{\alpha} = \lambda_0\boldsymbol{\alpha}$，则 $\boldsymbol{\alpha}'\boldsymbol{A}'\boldsymbol{A}\boldsymbol{\alpha} = \lambda_0^2\boldsymbol{\alpha}'\boldsymbol{\alpha} \leq \boldsymbol{\alpha}'\boldsymbol{\alpha}$，于是 $\lambda_0^2 \leq 1$，从而 $0 \leq \lambda_0 \leq 1$。又由例 9.137 可知，若 $\lambda_0 \neq 0$，则 $\lambda_0 \geq 1$，从而 $\lambda_0 = 1$。设 $r(\boldsymbol{A}'\boldsymbol{A}) = r(\boldsymbol{A}) = r$，则 $\boldsymbol{A}'\boldsymbol{A}$ 的特征值为 $1$（$r$ 重），$0$（$n-r$ 重）。注意到 $\boldsymbol{A}$ 是幂等矩阵，故由例 4.55 可得 $\mathrm{tr}(\boldsymbol{A}^2) = \mathrm{tr}(\boldsymbol{A}) = r(\boldsymbol{A}) = r = \mathrm{tr}(\boldsymbol{A}'\boldsymbol{A})$，再由例 2.49 可知 $\boldsymbol{A}$ 为实对称矩阵。

> [!proof]- 证法 3
> 由条件可知 $\boldsymbol{I}_n - \boldsymbol{A}'\boldsymbol{A}$ 为半正定阵，故存在 $n$ 阶实矩阵 $\boldsymbol{C}$，使得 $\boldsymbol{I}_n - \boldsymbol{A}'\boldsymbol{A} = \boldsymbol{C}'\boldsymbol{C}$。注意到 $\boldsymbol{A}^2 = \boldsymbol{A}$，故有 $\boldsymbol{A}'\boldsymbol{C}'\boldsymbol{C}\boldsymbol{A} = \boldsymbol{A}'(\boldsymbol{I}_n - \boldsymbol{A}'\boldsymbol{A})\boldsymbol{A} = \boldsymbol{A}'\boldsymbol{A} - (\boldsymbol{A}')^2\boldsymbol{A}^2 = \boldsymbol{A}'\boldsymbol{A} - \boldsymbol{A}'\boldsymbol{A} = \boldsymbol{O}$，由例 2.9 即得 $\boldsymbol{C}\boldsymbol{A} = \boldsymbol{O}$。于是 $\boldsymbol{O} = \boldsymbol{C}'\boldsymbol{C}\boldsymbol{A} = (\boldsymbol{I}_n - \boldsymbol{A}'\boldsymbol{A})\boldsymbol{A} = \boldsymbol{A} - \boldsymbol{A}'\boldsymbol{A}^2 = \boldsymbol{A} - \boldsymbol{A}'\boldsymbol{A}$，从而 $\boldsymbol{A} = \boldsymbol{A}'\boldsymbol{A}$ 为实对称矩阵。 $\square$

---


#### 4. 广义逆及其应用

利用奇异值分解，我们还可以定义线性映射和矩阵的**广义逆**。下面对欧氏空间之间的线性映射和实矩阵进行阐述，酉空间之间的线性映射和复矩阵的情形同理可得。

> [!example] 例 9.138
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间，$\varphi: V \to U$ 为线性映射，求证：存在唯一的线性映射 $\psi: U \to V$，满足如下条件：
> - (1) $\varphi\psi\varphi = \varphi$；
> - (2) $\psi\varphi\psi = \psi$；
> - (3) $\psi\varphi$ 与 $\varphi\psi$ 都是自伴随算子。
>
> 上述 $\psi$ 称为 $\varphi$ 的 **Moore-Penrose 广义逆**，记为 $\varphi^\dagger$。

> [!proof]- 证明
> 先证存在性。记 $\xi: (\mathrm{Ker}\,\varphi)^\perp \to \mathrm{Im}\,\varphi$ 为 $\varphi$ 在 $(\mathrm{Ker}\,\varphi)^\perp$ 上的限制，容易验证 $\mathrm{Ker}\,\xi = 0$ 并且 $\dim(\mathrm{Ker}\,\varphi)^\perp = n - \dim\mathrm{Ker}\,\varphi = \dim\mathrm{Im}\,\varphi$，故由线性映射的维数公式可知，$\xi$ 为线性同构。构造映射 $\psi: U \to V$ 如下：
> $$\psi(\boldsymbol{u}) = \begin{cases} \xi^{-1}(\boldsymbol{u}), & \text{若 } \boldsymbol{u} \in \mathrm{Im}\,\varphi; \\ \boldsymbol{0}, & \text{若 } \boldsymbol{u} \in (\mathrm{Im}\,\varphi)^\perp, \end{cases}$$
> 因为 $U = \mathrm{Im}\,\varphi \oplus (\mathrm{Im}\,\varphi)^\perp$，故由例 4.2 可知，上述定义可以唯一地延拓到整个 $U$ 上并使 $\psi$ 成为线性映射。考虑 $\varphi$ 的奇异值分解，设 $\{\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n\}$ 和 $\{\boldsymbol{f}_1, \boldsymbol{f}_2, \cdots, \boldsymbol{f}_m\}$ 分别为 $V$ 和 $U$ 的标准正交基，使得 $\varphi$ 在这两组基下的表示矩阵为 $\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$，其中 $\boldsymbol{S} = \mathrm{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$，$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 为 $\varphi$ 的全体正奇异值，即有 $\varphi(\boldsymbol{e}_i) = \sigma_i\boldsymbol{f}_i\,(1 \leq i \leq r)$，$\varphi(\boldsymbol{e}_j) = \boldsymbol{0}\,(r+1 \leq j \leq n)$。容易验证
> $$\mathrm{Ker}\,\varphi = L(\boldsymbol{e}_{r+1}, \cdots, \boldsymbol{e}_n), \quad (\mathrm{Ker}\,\varphi)^\perp = L(\boldsymbol{e}_1, \cdots, \boldsymbol{e}_r),$$
> $$\mathrm{Im}\,\varphi = L(\boldsymbol{f}_1, \cdots, \boldsymbol{f}_r), \quad (\mathrm{Im}\,\varphi)^\perp = L(\boldsymbol{f}_{r+1}, \cdots, \boldsymbol{f}_m),$$
> 并且 $\psi(\boldsymbol{f}_i) = \dfrac{1}{\sigma_i}\boldsymbol{e}_i\,(1 \leq i \leq r)$，$\psi(\boldsymbol{f}_j) = \boldsymbol{0}\,(r+1 \leq j \leq m)$。容易验证 $\varphi, \psi$ 满足题中的 3 个条件，这就证明了 $\varphi$ 的广义逆的存在性。
>
> 再证唯一性。设 $\varphi^\dagger$ 和 $\varphi^\sharp$ 是 $\varphi$ 的两个广义逆，我们来证明它们一定相等。反复利用广义逆的 3 个条件，考虑如下计算：
> $$\begin{aligned} \varphi^\dagger &= \varphi^\dagger\varphi\varphi^\dagger = (\varphi^\dagger\varphi)^*\varphi^\dagger = \varphi^*(\varphi^\dagger)^*\varphi^\dagger = (\varphi\varphi^\sharp\varphi)^*(\varphi^\dagger)^*\varphi^\dagger \\ &= \varphi^*(\varphi^\sharp)^*\varphi^*(\varphi^\dagger)^*\varphi^\dagger = (\varphi^\sharp\varphi)^*(\varphi^\dagger\varphi)^*\varphi^\dagger = \varphi^\sharp\varphi\varphi^\dagger\varphi\varphi^\dagger = \varphi^\sharp\varphi\varphi^\dagger; \\ \varphi^\sharp &= \varphi^\sharp\varphi\varphi^\sharp = \varphi^\sharp(\varphi\varphi^\sharp)^* = \varphi^\sharp(\varphi^\sharp)^*\varphi^* = \varphi^\sharp(\varphi^\sharp)^*(\varphi\varphi^\dagger\varphi)^* \\ &= \varphi^\sharp(\varphi^\sharp)^*\varphi^*(\varphi^\dagger)^*\varphi^* = \varphi^\sharp(\varphi\varphi^\sharp)^*(\varphi\varphi^\dagger)^* = \varphi^\sharp\varphi\varphi^\sharp\varphi\varphi^\dagger = \varphi^\sharp\varphi\varphi^\dagger, \end{aligned}$$
> 由此即得 $\varphi^\sharp = \varphi^\dagger$。 $\square$

---


> [!note] 注
> (1) 当 $\varphi: V \to U$ 是线性同构时，容易看出 $\varphi^\dagger = \varphi^{-1}$，因此线性映射的广义逆是线性同构的逆的推广。例 9.138 告诉我们，对于欧氏空间之间的任意线性映射，其广义逆都存在；特别地，当 $\varphi = \boldsymbol{0}$ 时，$\varphi^\dagger = \boldsymbol{0}$；进一步，我们还可以利用线性映射的奇异值分解构造出其广义逆，即存在 $V$ 和 $U$ 的标准正交基，使得 $\varphi$ 在这两组基下的表示矩阵为 $\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$，且 $\varphi^\dagger$ 在这两组基下的表示矩阵为 $\begin{pmatrix} \boldsymbol{S}^{-1} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$，其中 $\boldsymbol{S} = \mathrm{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$，$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 为 $\varphi$ 的全体正奇异值。
>
> (2) 例 9.138 的代数版本就是矩阵的广义逆。设 $\boldsymbol{A}$ 为 $m \times n$ 实矩阵，则存在唯一的 $n \times m$ 实矩阵 $\boldsymbol{A}^\dagger$，满足如下条件：
> - (1) $\boldsymbol{A}\boldsymbol{A}^\dagger\boldsymbol{A} = \boldsymbol{A}$；
> - (2) $\boldsymbol{A}^\dagger\boldsymbol{A}\boldsymbol{A}^\dagger = \boldsymbol{A}^\dagger$；
> - (3) $\boldsymbol{A}^\dagger\boldsymbol{A}$ 与 $\boldsymbol{A}\boldsymbol{A}^\dagger$ 都是实对称矩阵。
>
> 上述矩阵 $\boldsymbol{A}^\dagger$ 称为 $\boldsymbol{A}$ 的 **Moore-Penrose 广义逆**。若 $\boldsymbol{A}$ 是 $n$ 阶可逆矩阵，则 $\boldsymbol{A}^\dagger = \boldsymbol{A}^{-1}$，因此矩阵的广义逆是方阵的逆阵的推广。当 $\boldsymbol{A} = \boldsymbol{O}_{m \times n}$ 时，$\boldsymbol{A}^\dagger = \boldsymbol{O}_{n \times m}$。若设 $\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}'$ 为 $\boldsymbol{A}$ 的奇异值分解，则 $\boldsymbol{A}^\dagger = \boldsymbol{Q}\begin{pmatrix} \boldsymbol{S}^{-1} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}'$ 为 $\boldsymbol{A}^\dagger$ 的奇异值分解。这也给出了从矩阵 $\boldsymbol{A}$ 求其广义逆 $\boldsymbol{A}^\dagger$ 的计算方法。矩阵的广义逆在矩阵理论中有着重要的应用，限于篇幅我们不准备展开这方面的讨论。为了联系起内积空间理论和线性方程组的求解理论，我们来看广义逆的如下应用。

> [!example] 例 9.139
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间，$\varphi: V \to U$ 为线性映射，$\varphi^\dagger$ 为 $\varphi$ 的广义逆。求证：$\varphi^\dagger\varphi$ 是 $V$ 到 $(\mathrm{Ker}\,\varphi)^\perp$ 上的正交投影算子，$\varphi\varphi^\dagger$ 是 $U$ 到 $\mathrm{Im}\,\varphi$ 上的正交投影算子。

> [!proof]- 证明
> 由例 9.138 的证明过程可知，存在 $V$ 的标准正交基 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$，$U$ 的标准正交基 $\boldsymbol{f}_1, \boldsymbol{f}_2, \cdots, \boldsymbol{f}_m$，使得
> $$\varphi(\boldsymbol{e}_i) = \sigma_i\boldsymbol{f}_i\,(1 \leq i \leq r), \quad \varphi(\boldsymbol{e}_i) = \boldsymbol{0}\,(r+1 \leq i \leq n);$$
> $$\varphi^\dagger(\boldsymbol{f}_j) = \frac{1}{\sigma_j}\boldsymbol{e}_j\,(1 \leq j \leq r), \quad \varphi^\dagger(\boldsymbol{f}_j) = \boldsymbol{0}\,(r+1 \leq j \leq m).$$
> 因此 $\varphi^\dagger\varphi(\boldsymbol{e}_i) = \boldsymbol{e}_i\,(1 \leq i \leq r)$，$\varphi^\dagger\varphi(\boldsymbol{e}_i) = \boldsymbol{0}\,(r+1 \leq i \leq n)$；$\varphi\varphi^\dagger(\boldsymbol{f}_j) = \boldsymbol{f}_j\,(1 \leq j \leq r)$，$\varphi\varphi^\dagger(\boldsymbol{f}_j) = \boldsymbol{0}\,(r+1 \leq j \leq m)$。注意到 $\mathrm{Ker}\,\varphi = L(\boldsymbol{e}_{r+1}, \cdots, \boldsymbol{e}_n)$，$(\mathrm{Ker}\,\varphi)^\perp = L(\boldsymbol{e}_1, \cdots, \boldsymbol{e}_r)$，$\mathrm{Im}\,\varphi = L(\boldsymbol{f}_1, \cdots, \boldsymbol{f}_r)$，$(\mathrm{Im}\,\varphi)^\perp = L(\boldsymbol{f}_{r+1}, \cdots, \boldsymbol{f}_m)$，故结论成立。 $\square$

---


> [!example] 例 9.140
> 设 $\boldsymbol{A}$ 为 $m \times n$ 实矩阵，$\boldsymbol{\beta}$ 是 $m$ 维实列向量，并取实列向量空间上的标准内积。求证：
> - (1) 若线性方程组 $\boldsymbol{A}\boldsymbol{x} = \boldsymbol{\beta}$ 有解，则 $\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{\beta}$ 是唯一的长度最小的解；
> - (2) 若线性方程组 $\boldsymbol{A}\boldsymbol{x} = \boldsymbol{\beta}$ 无解，则 $\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{\beta}$ 是最佳逼近，即满足
> $$\|\boldsymbol{A}\boldsymbol{z} - \boldsymbol{\beta}\| \leq \|\boldsymbol{A}\boldsymbol{x} - \boldsymbol{\beta}\|, \quad \forall \boldsymbol{x} \in \mathbb{R}^n,$$
> 并且是所有最佳逼近中唯一的长度最小的最佳逼近。

> [!proof]- 证明
> (1) 任取线性方程组的解 $\boldsymbol{x}_0$，即满足 $\boldsymbol{A}\boldsymbol{x}_0 = \boldsymbol{\beta}$，则由 $\boldsymbol{A}\boldsymbol{A}^\dagger\boldsymbol{A} = \boldsymbol{A}$ 可知，$\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{\beta} = \boldsymbol{A}^\dagger\boldsymbol{A}\boldsymbol{x}_0$ 也满足 $\boldsymbol{A}\boldsymbol{z} = \boldsymbol{A}\boldsymbol{A}^\dagger\boldsymbol{A}\boldsymbol{x}_0 = \boldsymbol{A}\boldsymbol{x}_0 = \boldsymbol{\beta}$，即 $\boldsymbol{z}$ 也是线性方程组的解。由例 9.139 可知，$\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{A}\boldsymbol{x}_0$ 是 $\boldsymbol{x}_0$ 到 $(\mathrm{Ker}\,\boldsymbol{A})^\perp$ 上的正交投影，从而 $\|\boldsymbol{z}\| \leq \|\boldsymbol{x}_0\|$，等号成立当且仅当 $\boldsymbol{x}_0 = \boldsymbol{z}$。由 $\boldsymbol{x}_0$ 的任意性可知，$\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{\beta}$ 是唯一的长度最小的解。
>
> (2) 由例 9.139 可知，$\boldsymbol{A}\boldsymbol{z} = \boldsymbol{A}\boldsymbol{A}^\dagger\boldsymbol{\beta}$ 是 $\boldsymbol{\beta}$ 到 $\mathrm{Im}\,\boldsymbol{A}$ 上的正交投影，因此对任意的 $\boldsymbol{x} \in \mathbb{R}^n$，$(\boldsymbol{\beta} - \boldsymbol{A}\boldsymbol{A}^\dagger\boldsymbol{\beta}) \perp \boldsymbol{A}\boldsymbol{x}$。于是由勾股定理可得
> $$\|\boldsymbol{A}\boldsymbol{x} - \boldsymbol{\beta}\|^2 = \|(\boldsymbol{A}\boldsymbol{z} - \boldsymbol{\beta}) + \boldsymbol{A}(\boldsymbol{x} - \boldsymbol{z})\|^2 = \|\boldsymbol{A}\boldsymbol{z} - \boldsymbol{\beta}\|^2 + \|\boldsymbol{A}(\boldsymbol{x} - \boldsymbol{z})\|^2 \geq \|\boldsymbol{A}\boldsymbol{z} - \boldsymbol{\beta}\|^2,$$
> 等号成立当且仅当 $\boldsymbol{A}(\boldsymbol{x} - \boldsymbol{z}) = \boldsymbol{0}$。对满足 $\boldsymbol{A}\boldsymbol{x} = \boldsymbol{A}\boldsymbol{z}$ 的任一 $\boldsymbol{x}$，存在 $\boldsymbol{y} \in \mathrm{Ker}\,\boldsymbol{A}$，使得 $\boldsymbol{x} = \boldsymbol{y} + \boldsymbol{z}$。由例 9.139 的证明过程可知，$\boldsymbol{z} = \boldsymbol{A}^\dagger\boldsymbol{\beta} \in (\mathrm{Ker}\,\boldsymbol{A})^\perp$，因此 $\|\boldsymbol{x}\|^2 = \|\boldsymbol{y}\|^2 + \|\boldsymbol{z}\|^2 \geq \|\boldsymbol{z}\|^2$，等号成立当且仅当 $\boldsymbol{x} = \boldsymbol{z}$，即 $\boldsymbol{z}$ 是所有最佳逼近中唯一的长度最小的最佳逼近。 $\square$

> [!note] 注
> 在实际问题中我们遇到的 $\boldsymbol{A}\boldsymbol{x} = \boldsymbol{\beta}$ 通常都是系数矩阵 $\boldsymbol{A}$ 列满秩但无解的线性方程组。此时，容易验证 $\boldsymbol{A}^\dagger = (\boldsymbol{A}'\boldsymbol{A})^{-1}\boldsymbol{A}'$，因此最佳逼近为 $\boldsymbol{z} = (\boldsymbol{A}'\boldsymbol{A})^{-1}\boldsymbol{A}'\boldsymbol{\beta}$，这就是矛盾线性方程组 $\boldsymbol{A}\boldsymbol{x} = \boldsymbol{\beta}$ 的**最小二乘解**。

### § 9.15 基础训练

#### 9.15.1 训 练 题

**一、单选题**

1. 若 $\boldsymbol{A}, \boldsymbol{B}$ 是正交矩阵，$k$ 是非零实数，$\boldsymbol{P}$ 是可逆矩阵，则（  ）。
   - (A) $\boldsymbol{A} + \boldsymbol{B}$ 也是正交矩阵
   - (B) $k\boldsymbol{A}$ 也是正交矩阵
   - (C) $\boldsymbol{A}\boldsymbol{B}$ 也是正交矩阵
   - (D) $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 也是正交矩阵

2. 下列结论正确的是（  ）。
   - (A) 若非零向量 $\boldsymbol{u}, \boldsymbol{v}$ 正交，则 $\boldsymbol{u}, \boldsymbol{v}$ 线性无关
   - (B) 若向量 $\boldsymbol{v}_1$ 和 $\boldsymbol{v}_2$ 正交，$\boldsymbol{v}_2$ 和 $\boldsymbol{v}_3$ 正交，则 $\boldsymbol{v}_1$ 和 $\boldsymbol{v}_3$ 正交


> (C) 若 $U, W$ 是欧氏空间 $V$ 的子空间，适合 $U \cap W = 0$，则 $U$ 和 $W$ 正交
> (D) 若 $U, W$ 是欧氏空间 $V$ 的子空间，适合 $U \cap W = 0$ 且 $\dim V = \dim U + \dim W$，则 $U$ 是 $W$ 的正交补空间

3. 和矩阵 $\boldsymbol{M} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ 正交相似的矩阵是（  ）。
   - (A) $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
   - (B) $\begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$
   - (C) $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
   - (D) $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$

4. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，则（  ）。
   - (A) $\boldsymbol{A}$ 有 $n$ 个不同的特征值
   - (B) $\boldsymbol{A}$ 的特征值的绝对值等于 1
   - (C) $\boldsymbol{A}$ 的任意 $n$ 个线性无关的特征向量两两正交
   - (D) 存在正交矩阵 $\boldsymbol{P}$，使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵

5. 下列结论正确的是（  ）。
   - (A) 两个相似的实对称矩阵必正交相似
   - (B) 两个同阶的正定实对称矩阵必相似
   - (C) 两个合同的实对称矩阵必正交相似
   - (D) 特征值完全相同的同阶矩阵必相似

6. 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵，则（  ）。
   - (A) $\boldsymbol{A}$ 的特征值全是实数
   - (B) $\boldsymbol{A}$ 的特征值的模长等于 1
   - (C) $\boldsymbol{A}$ 有 $n$ 个不同的特征值
   - (D) $\boldsymbol{A}$ 的线性无关的特征向量两两正交

7. 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的对称变换，则（  ）。
   - (A) $\varphi$ 在 $V$ 的任意一组基下的表示矩阵是实对称矩阵
   - (B) $\varphi$ 在 $V$ 的任意一组正交基下的表示矩阵是实对称矩阵
   - (C) $\varphi$ 在 $V$ 的任意一组标准正交基下的表示矩阵是实对称矩阵
   - (D) $\varphi$ 在 $V$ 的任意一组基下的表示矩阵都正交相似

8. 在下列条件中，能保证 $n$ 阶矩阵 $\boldsymbol{A}$ 是正交矩阵的是（  ）。
   - (A) $\boldsymbol{A}$ 将 $n$ 维正交列向量变成正交列向量
   - (B) 对任意的 $n$ 维列向量 $\boldsymbol{\alpha}$，$\|\boldsymbol{A}\boldsymbol{\alpha}\| = \|\boldsymbol{\alpha}\|$
   - (C) $\boldsymbol{A}$ 保持向量夹角不变
   - (D) $\boldsymbol{A}$ 的特征值全为 1 或 $-1$

9. $n$ 维欧氏空间 $V$ 上的线性变换 $\varphi$ 为正交变换的充要条件是（  ）。
   - (A) $\varphi$ 在 $V$ 的任一组基下的表示矩阵都是正交矩阵
   - (B) $\varphi$ 在 $V$ 的任一组正交基下的表示矩阵都是正交矩阵
   - (C) $\varphi$ 在 $V$ 的任一组标准正交基下的表示矩阵都是正交矩阵
   - (D) $\varphi$ 在 $V$ 的任一组标准正交基下的表示矩阵都是实对称矩阵

10. 设 $\boldsymbol{u}, \boldsymbol{v}$ 是 $n$ 维欧氏空间 $V$ 中的向量，下列结论错误的是（  ）。

---


> (A) 若 $\boldsymbol{u}$ 与 $\boldsymbol{v}$ 正交，则 $\|\boldsymbol{u} + \boldsymbol{v}\|^2 = \|\boldsymbol{u}\|^2 + \|\boldsymbol{v}\|^2$
> (B) 若 $\boldsymbol{u}$ 与 $\boldsymbol{v}$ 正交，则 $\|\boldsymbol{u} + \boldsymbol{v}\| = \|\boldsymbol{u} - \boldsymbol{v}\|$
> (C) $\|\boldsymbol{u} + \boldsymbol{v}\|^2 + \|\boldsymbol{u} - \boldsymbol{v}\|^2 = 2\|\boldsymbol{u}\|^2 + 2\|\boldsymbol{v}\|^2$
> (D) 若 $\boldsymbol{u}$ 与 $\boldsymbol{v}$ 正交，则 $\|\boldsymbol{u} + \boldsymbol{v}\| = \|\boldsymbol{u}\| + \|\boldsymbol{v}\|$

11. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，则下列结论正确的是（  ）。
> (A) $\boldsymbol{A}$ 正交相似于对角矩阵
> (B) $\boldsymbol{A}$ 合同于对角矩阵
> (C) $\boldsymbol{A}$ 的特征值都是实数
> (D) 以上结论都正确

12. 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵，且 $|\boldsymbol{A}| = -1$，则 $|\boldsymbol{I}_n + \boldsymbol{A}| =$（  ）。
> (A) 1
> (B) $-1$
> (C) 0
> (D) 不能确定

13. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵，则 $|\boldsymbol{A} + \boldsymbol{B}|$（  ）。
> (A) 一定大于 0
> (B) 一定小于 0
> (C) 一定等于 0
> (D) 不能确定

14. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，则 $\boldsymbol{A}$ 正交相似于上三角矩阵的充要条件是（  ）。
> (A) $\boldsymbol{A}$ 的特征值全是实数
> (B) $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量
> (C) $\boldsymbol{A}$ 是正交矩阵
> (D) $\boldsymbol{A}$ 是实对称矩阵

15. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，则下列结论正确的是（  ）。
> (A) 若 $\boldsymbol{A}$ 是正交矩阵，则 $\boldsymbol{A}$ 的特征值全是实数
> (B) 若 $\boldsymbol{A}$ 是实对称矩阵，则 $\boldsymbol{A}$ 的特征值的绝对值等于 1
> (C) 若 $\boldsymbol{A}$ 是正交矩阵，则 $|\boldsymbol{A}| = \pm 1$
> (D) 若 $\boldsymbol{A}$ 是实对称矩阵，则 $\boldsymbol{A}$ 有 $n$ 个不同的特征值

---


**二、填空题**

1. 设 $\boldsymbol{A} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$，则与 $\boldsymbol{A}$ 正交相似的上三角矩阵为__________。

2. 设 $\boldsymbol{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ 是正交矩阵，则 $a, b, c, d$ 满足的条件是__________。

3. 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵，$|\boldsymbol{A}| = 1$，求证：$|\boldsymbol{I}_n - \boldsymbol{A}| = $__________。

4. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，$\boldsymbol{B}$ 是 $n$ 阶正交矩阵，则 $\mathrm{tr}(\boldsymbol{A}'\boldsymbol{A})$__________$\mathrm{tr}((\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}))$（填 $\leq$, $\geq$, $=$）。

5. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{A}^2 = \boldsymbol{I}_n$，则 $\boldsymbol{A}$ 的特征值为__________。

6. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{P}$ 是 $n$ 阶实矩阵，则 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 正定的充要条件是__________。

7. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{A}$ 的特征值为 $\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$，则 $\boldsymbol{A} - \lambda_1\boldsymbol{I}_n$ 是__________阵，$\boldsymbol{A} - \lambda_n\boldsymbol{I}_n$ 是__________阵。

8. 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶正定实对称矩阵，则 $\boldsymbol{A} + \boldsymbol{B}$ 是__________阵，$\boldsymbol{A}\boldsymbol{B}$__________是正定阵（填"一定"或"不一定"）。

9. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{A}$ 的负惯性指数为 0，则 $\boldsymbol{A}$ 是__________阵（填"正定"、"半正定"、"负定"、"半负定"或"不能确定"）。

10. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，$\boldsymbol{A}$ 的奇异值为 $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$，则 $r(\boldsymbol{A}) = $__________。

---


**三、解答题**

1. 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵，$\boldsymbol{I}_n + \boldsymbol{A}$ 可逆。求证：$(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A})^{-1}$ 是实反对称矩阵。

2. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶正交矩阵。求证：$\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) = \mathrm{tr}(\boldsymbol{A}\boldsymbol{B}^{-1})$。

3. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶实对称矩阵。求证：存在可逆矩阵 $\boldsymbol{C}$，使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C} = \boldsymbol{I}_n$，$\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵。

4. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，且 $\boldsymbol{A}^3 = \boldsymbol{I}_n$，求证：$\boldsymbol{A} = \boldsymbol{I}_n$。

5. 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的正交变换，且 $\det \varphi = 1$。求证：若 $n$ 为奇数，则 $\varphi$ 必有特征值 1；若 $n$ 为偶数，则 $\varphi$ 必有特征值 $-1$ 或存在 $V$ 的一组标准正交基，使得 $\varphi$ 在这组基下的表示矩阵为分块对角矩阵，其中每个分块为二阶矩阵 $\begin{pmatrix} \cos\theta_i & -\sin\theta_i \\ \sin\theta_i & \cos\theta_i \end{pmatrix}$。

6. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，$\boldsymbol{A}'\boldsymbol{A}$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$。求证：$\boldsymbol{A}$ 的奇异值 $\sigma_i = \sqrt{\lambda_i}\,(1 \leq i \leq n)$。

7. 设 $\boldsymbol{A}$ 是 $m \times n$ 实矩阵，$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{S} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q}'$ 是 $\boldsymbol{A}$ 的奇异值分解。求证：$\boldsymbol{A}$ 的 Moore-Penrose 广义逆为 $\boldsymbol{A}^\dagger = \boldsymbol{Q}\begin{pmatrix} \boldsymbol{S}^{-1} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}'$。

8. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶正定实对称矩阵。求证：$\boldsymbol{A}\boldsymbol{B}$ 的特征值都是实数。

9. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵。求证：存在正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q}$ 为上三角矩阵的充要条件是 $\boldsymbol{A}$ 的特征值全为实数。

10. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\lambda_1$ 和 $\lambda_n$ 分别是 $\boldsymbol{A}$ 的最小和最大特征值。求证：
    $$\lambda_1 = \min_{\|\boldsymbol{x}\|=1} \boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}, \quad \lambda_n = \max_{\|\boldsymbol{x}\|=1} \boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}.$$

---


11. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是同阶实对称矩阵。求证：$\boldsymbol{A} + \mathrm{i}\boldsymbol{B}$ 是复正规矩阵的充要条件是 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$。

12. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且存在正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q}$ 为对角矩阵。求证：$\boldsymbol{A}$ 是实对称矩阵。

13. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶半正定实对称矩阵。求证：$|\boldsymbol{A} + \boldsymbol{B}| \geq |\boldsymbol{A}| + |\boldsymbol{B}|$，且等号成立当且仅当 $\boldsymbol{B} = \boldsymbol{O}$ 或 $n = 1$。

14. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶正定实对称矩阵。求证：$\boldsymbol{A}\boldsymbol{B}$ 的特征值都是实数，且 $\boldsymbol{A}\boldsymbol{B}$ 正相似于一个实对称矩阵。

15. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，求证：$\boldsymbol{A}$ 可以唯一地分解为 $\boldsymbol{A} = \boldsymbol{B} + \boldsymbol{C}$，其中 $\boldsymbol{B}$ 是实对称矩阵，$\boldsymbol{C}$ 是实反对称矩阵。

16. 设 $\boldsymbol{A}$ 是 $m \times n$ 实矩阵，$\boldsymbol{\beta}$ 是 $m$ 维实列向量。求证：线性方程组 $\boldsymbol{A}'\boldsymbol{A}\boldsymbol{x} = \boldsymbol{A}'\boldsymbol{\beta}$ 一定有解。

17. 设 $\boldsymbol{A}$ 是 $n$ 阶正交矩阵，且 $|\boldsymbol{A}| = 1$。求证：存在正交矩阵 $\boldsymbol{Q}$，使得
    $$\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q} = \mathrm{diag}\left\{\begin{pmatrix} \cos\theta_1 & -\sin\theta_1 \\ \sin\theta_1 & \cos\theta_1 \end{pmatrix}, \cdots, \begin{pmatrix} \cos\theta_r & -\sin\theta_r \\ \sin\theta_r & \cos\theta_r \end{pmatrix}, 1, \cdots, 1\right\}.$$

18. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{A}$ 的特征值为 $\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$。求证：对任意 $n$ 维实列向量 $\boldsymbol{x}$，有
    $$\lambda_1\boldsymbol{x}'\boldsymbol{x} \leq \boldsymbol{x}'\boldsymbol{A}\boldsymbol{x} \leq \lambda_n\boldsymbol{x}'\boldsymbol{x}.$$

19. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且 $\boldsymbol{A}' = -\boldsymbol{A}$。求证：$\boldsymbol{I}_n + \boldsymbol{A}$ 是可逆矩阵，且 $(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A})^{-1}$ 是正交矩阵。

20. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，$\boldsymbol{A}$ 的特征值全为实数。求证：$\boldsymbol{A}$ 正交相似于上三角矩阵。

---


21. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵。求证：$|\boldsymbol{A} + \boldsymbol{B}| > 0$。

22. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且 $\boldsymbol{A}^2 = \boldsymbol{A}$。求证：$\boldsymbol{A}$ 正交相似于对角矩阵的充要条件是 $\boldsymbol{A}$ 为实对称矩阵。

23. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{A}\boldsymbol{A}'$。求证：$\boldsymbol{A}$ 正交相似于对角矩阵的充要条件是 $\boldsymbol{A}$ 为对称矩阵。

24. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且 $\boldsymbol{A}$ 的特征值全为正实数。求证：存在正定实对称矩阵 $\boldsymbol{S}$ 和正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{S}$。

25. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，$\boldsymbol{A}$ 的奇异值分解为 $\boldsymbol{A} = \boldsymbol{P}\boldsymbol{\Lambda}\boldsymbol{Q}'$。求证：$\boldsymbol{A}$ 的 Frobenius 范数满足 $\|\boldsymbol{A}\|_F^2 = \sigma_1^2 + \sigma_2^2 + \cdots + \sigma_r^2$，其中 $\sigma_1, \sigma_2, \cdots, \sigma_r$ 是 $\boldsymbol{A}$ 的全体正奇异值。

26. 设 $\boldsymbol{A}$ 是 $m \times n$ 实矩阵，$\boldsymbol{B}$ 是 $n \times m$ 实矩阵。求证：$\boldsymbol{A}\boldsymbol{B}$ 和 $\boldsymbol{B}\boldsymbol{A}$ 的非零特征值相同（计重数）。

27. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{A}$ 的特征值为 $\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$，$\boldsymbol{v}_1$ 和 $\boldsymbol{v}_n$ 分别是属于 $\lambda_1$ 和 $\lambda_n$ 的单位特征向量。求证：对任意 $n$ 维实列向量 $\boldsymbol{x}$，有
    $$|\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}| \leq \lambda_n\|\boldsymbol{x}\|^2,$$
    且等号成立的充要条件是 $\boldsymbol{x}$ 与 $\boldsymbol{v}_1$ 或 $\boldsymbol{v}_n$ 共线。

28. 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶实矩阵。求证：$\boldsymbol{A} - \boldsymbol{B}'\boldsymbol{A}^{-1}\boldsymbol{B}$ 正定的充要条件是 $\rho(\boldsymbol{B}'\boldsymbol{A}^{-1}\boldsymbol{B}) < 1$，其中 $\rho(\cdot)$ 表示谱半径。

29. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵，$\boldsymbol{B}$ 是 $n$ 阶正定实对称矩阵。求证：$\boldsymbol{A}\boldsymbol{B}$ 正相似于一个实对角矩阵。

30. 设 $\boldsymbol{A}$ 是 $n$ 阶实矩阵，且 $\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{A}\boldsymbol{A}'$。求证：存在正交矩阵 $\boldsymbol{Q}$，使得 $\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q}$ 为分块对角矩阵，其中每个分块为二阶矩阵 $\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ 或一阶矩阵 $(c_j)$。

---


> [!note] 注
> 本部分3（第73-108页）主要涵盖以下内容：
> - §9.10 续：复正规算子的应用（例 9.98 - 例 9.102）
> - §9.11 实正规算子与实正规矩阵（例 9.90 证法 2 - 例 9.113）
> - §9.12 实正规矩阵的正交相似标准型（例 9.114 - 例 9.127）
> - §9.13 同时合同对角化与同时合同标准化（例 9.128 - 例 9.130）
> - §9.14 谱分解、极分解、奇异值分解及其应用（例 9.131 - 例 9.140）
> - §9.15 基础训练（训练题 1-30）
>
> 至此，第9章"内积空间"全部内容转录完毕。


---

