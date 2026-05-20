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

## 第6章 特征值


### §6.1 基本概念

#### 1. 特征值与特征向量

> [!definition] 定义 6.1
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 若存在 $\lambda \in \mathbb{F}$ 以及非零列向量 $\boldsymbol{\alpha} \in \mathbb{F}^n$, 使得 $\boldsymbol{A}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}$, 则称 $\lambda$ 是 $\boldsymbol{A}$ 的一个**特征值**, $\boldsymbol{\alpha}$ 是 $\boldsymbol{A}$ 关于特征值 $\lambda$ 的**特征向量**.

同理可以定义线性变换的特征值与特征向量.

> [!definition] 定义 6.2
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, $\varphi$ 是 $V$ 上的线性变换, 若存在 $\lambda \in \mathbb{F}$ 以及非零向量 $\boldsymbol{\alpha} \in V$, 使得 $\varphi(\boldsymbol{\alpha}) = \lambda\boldsymbol{\alpha}$, 则称 $\lambda$ 是 $\varphi$ 的一个**特征值**, $\boldsymbol{\alpha}$ 是 $\varphi$ 关于特征值 $\lambda$ 的**特征向量**.

> [!example] 例 6.1
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, $V$ 为 $n \times m$ 矩阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为: $\varphi(\boldsymbol{X}) = \boldsymbol{A}\boldsymbol{X}$, 其中 $\boldsymbol{X} \in V$. 求证: $\varphi$ 的特征值就是 $\boldsymbol{A}$ 的特征值.

> [!proof]- 证明
> 若 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, $\boldsymbol{\alpha}$ 是 $\boldsymbol{A}$ 关于 $\lambda$ 的特征向量, 则 $\boldsymbol{\alpha} \neq \boldsymbol{0}$, 且 $\boldsymbol{A}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}$. 取 $\boldsymbol{X} = (\boldsymbol{\alpha}, \boldsymbol{0}, \cdots, \boldsymbol{0}) \in V$, 则 $\boldsymbol{X} \neq \boldsymbol{O}$, 且 $\varphi(\boldsymbol{X}) = \boldsymbol{A}\boldsymbol{X} = (\boldsymbol{A}\boldsymbol{\alpha}, \boldsymbol{0}, \cdots, \boldsymbol{0}) = \lambda(\boldsymbol{\alpha}, \boldsymbol{0}, \cdots, \boldsymbol{0}) = \lambda\boldsymbol{X}$, 从而 $\lambda$ 是 $\varphi$ 的特征值. 反之, 若 $\lambda$ 是 $\varphi$ 的特征值, $\boldsymbol{X} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_m) \in V$ 是 $\varphi$ 关于 $\lambda$ 的特征向量, 则至少有一个 $\boldsymbol{\alpha}_i \neq \boldsymbol{0}$, 且 $\varphi(\boldsymbol{X}) = \boldsymbol{A}\boldsymbol{X} = (\boldsymbol{A}\boldsymbol{\alpha}_1, \boldsymbol{A}\boldsymbol{\alpha}_2, \cdots, \boldsymbol{A}\boldsymbol{\alpha}_m) = \lambda(\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_m)$, 从而 $\boldsymbol{A}\boldsymbol{\alpha}_i = \lambda\boldsymbol{\alpha}_i$, 即 $\lambda$ 是 $\boldsymbol{A}$ 的特征值. $\square$

> [!definition] 定义 6.3
> 设 $V_i = \{\boldsymbol{\alpha} \in V \mid \varphi(\boldsymbol{\alpha}) = \lambda_i\boldsymbol{\alpha}\} = \mathrm{Ker}(\varphi - \lambda_i I_V)$, 容易验证 $V_i$ 是 $V$ 的子空间, 称为 $\varphi$ 关于特征值 $\lambda_i$ 的**特征子空间**. 显然 $V_i$ 中的非零向量就是 $\varphi$ 关于 $\lambda_i$ 的特征向量, $\dim V_i$ 称为特征值 $\lambda_i$ 的**几何重数**.

> [!example] 例 6.2
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全体不同特征值, $V_i\ (1 \leq i \leq k)$ 是特征值 $\lambda_i$ 的特征子空间, 则 $V_1 \cup V_2 \cup \cdots \cup V_k$ 是 $V$ 的子空间当且仅当 $\varphi$ 最多只有一个特征值.

> [!proof]- 证明
> 若 $\varphi$ 最多只有一个特征值, 结论显然成立. 若 $\varphi$ 至少有两个不同的特征值 $\lambda_1 \neq \lambda_2$, 则由例 3.56 可知 $V_1 \cup V_2 \cup \cdots \cup V_k$ 不是 $V$ 的子空间. $\square$


#### 2. 特征多项式与极小多项式

> [!definition] 定义 6.4
> 设 $\boldsymbol{A} = (a_{ij})$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 称 $\lambda$ 的多项式 $|\lambda\boldsymbol{I}_n - \boldsymbol{A}|$ 为 $\boldsymbol{A}$ 的**特征多项式**, 记为 $f(\lambda) = |\lambda\boldsymbol{I}_n - \boldsymbol{A}|$.

将 $f(\lambda)$ 展开, 可得 $$f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n,$$ 其中 $a_i$ 是 $(-1)^i$ 与 $\boldsymbol{A}$ 的所有 $i$ 阶主子式之和的乘积.

设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $f(\lambda)$ 在 $\mathbb{C}$ 上的 $n$ 个根 (可能有重根), 即 $\boldsymbol{A}$ 的 $n$ 个特征值, 则由 Vieta 定理可得:
$$\sum_{i=1}^n \lambda_i = \mathrm{tr}(\boldsymbol{A}), \quad \prod_{i=1}^n \lambda_i = |\boldsymbol{A}|.$$

> [!theorem] 定理 6.1 (Hamilton-Cayley 定理)
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, $f(\lambda) = |\lambda\boldsymbol{I}_n - \boldsymbol{A}|$ 是 $\boldsymbol{A}$ 的特征多项式, 则 $f(\boldsymbol{A}) = \boldsymbol{O}$.

> [!definition] 定义 6.5
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 若多项式 $g(x) \in \mathbb{F}[x]$ 满足 $g(\boldsymbol{A}) = \boldsymbol{O}$, 则称 $g(x)$ 是 $\boldsymbol{A}$ 的**零化多项式**. 在 $\boldsymbol{A}$ 的所有首一零化多项式中, 次数最小的多项式称为 $\boldsymbol{A}$ 的**极小多项式**, 记为 $m(x)$.

极小多项式具有如下基本性质:

> [!proposition] 命题 6.2
> (1) 极小多项式必唯一;
> (2) 极小多项式必整除任一零化多项式, 特别地, $m(x) \mid f(x)$;
> (3) 极小多项式的根即是特征多项式的根 (不计重数);
> (4) 数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 可对角化的充要条件是 $\boldsymbol{A}$ 的极小多项式在 $\mathbb{F}[x]$ 中可互素地分解为一次因式的乘积.

> [!example] 例 6.3
> 设数域 $\mathbb{F}$ 上 $n$ 阶矩阵 $\boldsymbol{A}$ 的全体不同特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_k$, 对应的特征子空间的维数分别为 $n_1, n_2, \cdots, n_k$, 即 $n_i = \dim V_i = n - r(\lambda_i\boldsymbol{I}_n - \boldsymbol{A})$, 求证: $$\sum_{i=1}^k n_i \leq n,$$ 等号成立当且仅当 $\boldsymbol{A}$ 可对角化.

> [!proof]- 证明
> 因为属于不同特征值的特征向量线性无关, 故将 $V_i\ (1 \leq i \leq k)$ 的基并在一起仍构成线性无关组, 其所含向量个数为 $\sum_{i=1}^k n_i$, 从而 $\sum_{i=1}^k n_i \leq n$. 等号成立意味着 $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量, 即 $\boldsymbol{A}$ 可对角化. $\square$


> [!example] 例 6.4
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全体不同特征值, 则 $\varphi$ 可对角化当且仅当 $$V = V_1 \oplus V_2 \oplus \cdots \oplus V_k.$$

> [!proof]- 证明
> 若 $\varphi$ 可对角化, 则 $V$ 有一组由特征向量构成的基, 从而 $V = V_1 + V_2 + \cdots + V_k$. 又因为属于不同特征值的特征向量线性无关, 故这个和是直和, 即 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$. 反之, 若 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$, 则取各 $V_i$ 的基并在一起就构成 $V$ 的一组基, 这组基由特征向量组成, 从而 $\varphi$ 可对角化. $\square$

#### 3. 相似矩阵

> [!definition] 定义 6.6
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 若存在 $\mathbb{F}$ 上的 $n$ 阶可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{B} = \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$, 则称 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ **相似**, 记为 $\boldsymbol{A} \sim \boldsymbol{B}$.

相似关系是等价关系. 相似的矩阵具有相同的特征多项式、相同的特征值、相同的迹、相同的行列式、相同的秩以及相同的极小多项式.

> [!theorem] 定理 6.3
> 数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 可对角化当且仅当 $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量.

> [!proof]- 证明
> 若 $\boldsymbol{A}$ 可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}.$$ 设 $\boldsymbol{P} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$, 则 $\boldsymbol{A}\boldsymbol{\alpha}_i = \lambda_i\boldsymbol{\alpha}_i$, 即 $\boldsymbol{\alpha}_i$ 是 $\boldsymbol{A}$ 的特征向量, 且它们线性无关. 反之, 若 $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n$, 令 $\boldsymbol{P} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$, 则 $\boldsymbol{P}$ 可逆, 且 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵. $\square$


> [!example] 例 6.5
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, $f(x)$ 是多项式, 求证: $f(\boldsymbol{A})$ 的特征值是 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$, 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $\boldsymbol{A}$ 的特征值.

> [!proof]- 证明
> 由 Jordan 标准型理论或三角化理论可知, 存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为上三角矩阵, 其对角线元素为 $\lambda_1, \lambda_2, \cdots, \lambda_n$. 则 $\boldsymbol{P}^{-1}f(\boldsymbol{A})\boldsymbol{P} = f(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})$ 也是上三角矩阵, 其对角线元素为 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$, 这些即是 $f(\boldsymbol{A})$ 的特征值. $\square$

> [!example] 例 6.6
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, $\boldsymbol{\alpha}$ 是 $n$ 维非零列向量, 求证: 若 $\boldsymbol{A}^{n-1}\boldsymbol{\alpha} \neq \boldsymbol{0}$ 但 $\boldsymbol{A}^n\boldsymbol{\alpha} = \boldsymbol{0}$, 则 $\boldsymbol{\alpha}, \boldsymbol{A}\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^{n-1}\boldsymbol{\alpha}$ 线性无关, 并且 $\boldsymbol{A}$ 必相似于某个主对角线元素全为零的上三角矩阵.

> [!proof]- 证明
> 设 $c_0\boldsymbol{\alpha} + c_1\boldsymbol{A}\boldsymbol{\alpha} + \cdots + c_{n-1}\boldsymbol{A}^{n-1}\boldsymbol{\alpha} = \boldsymbol{0}$. 依次用 $\boldsymbol{A}^{n-1}, \boldsymbol{A}^{n-2}, \cdots, \boldsymbol{A}, \boldsymbol{I}$ 左乘上式, 并利用 $\boldsymbol{A}^n\boldsymbol{\alpha} = \boldsymbol{A}^{n+1}\boldsymbol{\alpha} = \cdots = \boldsymbol{0}$, 可得 $c_0 = c_1 = \cdots = c_{n-1} = 0$, 故 $\boldsymbol{\alpha}, \boldsymbol{A}\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^{n-1}\boldsymbol{\alpha}$ 线性无关. 令 $\boldsymbol{P} = (\boldsymbol{\alpha}, \boldsymbol{A}\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^{n-1}\boldsymbol{\alpha})$, 则 $\boldsymbol{P}$ 可逆, 且 $$\boldsymbol{A}\boldsymbol{P} = (\boldsymbol{A}\boldsymbol{\alpha}, \boldsymbol{A}^2\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^n\boldsymbol{\alpha}) = (\boldsymbol{A}\boldsymbol{\alpha}, \boldsymbol{A}^2\boldsymbol{\alpha}, \cdots, \boldsymbol{0}) = \boldsymbol{P}\begin{pmatrix} 0 & & & \\ 1 & 0 & & \\ & \ddots & \ddots & \\ & & 1 & 0 \end{pmatrix}.$$ 从而 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为主对角线元素全为零的上三角矩阵. $\square$

> [!example] 例 6.7
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 求证: $\boldsymbol{I}_n - \boldsymbol{A}$ 可逆, 并求其逆矩阵.

> [!proof]- 证明
> 因为 $\boldsymbol{A}$ 幂零, 故 $\boldsymbol{A}^k = \boldsymbol{O}$ 对某个正整数 $k$ 成立. 由 $(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}) = \boldsymbol{I}_n - \boldsymbol{A}^k = \boldsymbol{I}_n$, 可知 $\boldsymbol{I}_n - \boldsymbol{A}$ 可逆, 且 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1} = \boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}$. $\square$

> [!example] 例 6.8
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, 满足 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 求证: 若 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 则 $\boldsymbol{B}$ 可对角化.

> [!proof]- 证明
> 因为 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 故 $\boldsymbol{A}$ 可对角化, 即存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \Lambda = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$, 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 互不相同. 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 可得 $\Lambda(\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}) = (\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P})\Lambda$. 设 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P} = (b_{ij})$, 则 $\lambda_i b_{ij} = \lambda_j b_{ij}$, 当 $i \neq j$ 时, $\lambda_i \neq \lambda_j$, 故 $b_{ij} = 0$. 因此 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 为对角矩阵, 即 $\boldsymbol{B}$ 可对角化. $\square$


#### 4. 特征值的计算

> [!example] 例 6.9
> 求下列矩阵的特征值:
> $$\boldsymbol{A} = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 2 & 2 & 1 \end{pmatrix}.$$

> [!solution]- 解
> 计算特征多项式:
> $$f(\lambda) = |\lambda\boldsymbol{I}_3 - \boldsymbol{A}| = \begin{vmatrix} \lambda-1 & -2 & -2 \\ -2 & \lambda-1 & -2 \\ -2 & -2 & \lambda-1 \end{vmatrix} = (\lambda-5)(\lambda+1)^2.$$
> 故 $\boldsymbol{A}$ 的特征值为 $5, -1, -1$. $\square$

> [!example] 例 6.10
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^2 = \boldsymbol{I}_n$, 求 $\boldsymbol{A}$ 的特征值.

> [!solution]- 解
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, $\boldsymbol{\alpha}$ 是对应的特征向量, 则 $\boldsymbol{A}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}$. 由 $\boldsymbol{A}^2 = \boldsymbol{I}_n$ 得 $\boldsymbol{A}^2\boldsymbol{\alpha} = \lambda^2\boldsymbol{\alpha} = \boldsymbol{\alpha}$, 故 $\lambda^2 = 1$, 即 $\lambda = \pm 1$. 因此 $\boldsymbol{A}$ 的特征值只能是 $1$ 或 $-1$. $\square$

> [!example] 例 6.11
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的每一行元素之和均为常数 $c$, 求证:
> (1) $c$ 是 $\boldsymbol{A}$ 的一个特征值;
> (2) 若 $\boldsymbol{A}$ 可逆, 则 $\boldsymbol{A}^{-1}$ 的每一行元素之和均为 $\frac{1}{c}$;
> (3) 对任一多项式 $f(x)$, $f(\boldsymbol{A})$ 的每一行元素之和均为 $f(c)$.

> [!proof]- 证明
> (1) 设 $\boldsymbol{e} = (1, 1, \cdots, 1)'$, 由条件知 $\boldsymbol{A}\boldsymbol{e} = c\boldsymbol{e}$, 故 $c$ 是特征值, $\boldsymbol{e}$ 是对应的特征向量.
> (2) 若 $\boldsymbol{A}$ 可逆, 则 $c \neq 0$, 且 $\boldsymbol{A}^{-1}\boldsymbol{e} = \frac{1}{c}\boldsymbol{e}$, 即 $\boldsymbol{A}^{-1}$ 的每一行元素之和均为 $\frac{1}{c}$.
> (3) 由 $\boldsymbol{A}\boldsymbol{e} = c\boldsymbol{e}$ 可得 $\boldsymbol{A}^k\boldsymbol{e} = c^k\boldsymbol{e}$, 从而 $f(\boldsymbol{A})\boldsymbol{e} = f(c)\boldsymbol{e}$, 即 $f(\boldsymbol{A})$ 的每一行元素之和均为 $f(c)$. $\square$

> [!example] 例 6.12
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, $f(x)$ 是多项式, 求证: $f(\boldsymbol{A})$ 的特征值是 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$, 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $\boldsymbol{A}$ 的全体特征值.

> [!proof]- 证明
> 由三角化理论, 存在可逆矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为上三角矩阵, 主对角线元素为 $\lambda_1, \lambda_2, \cdots, \lambda_n$. 则 $\boldsymbol{P}^{-1}f(\boldsymbol{A})\boldsymbol{P} = f(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})$ 也是上三角矩阵, 主对角线元素为 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$, 即为 $f(\boldsymbol{A})$ 的特征值. $\square$


#### 5. 特征子空间

> [!example] 例 6.13
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\lambda_0$ 是 $\varphi$ 的特征值, 试对 $k \geq 1$, 证明: $$\mathrm{Ker}(\varphi - \lambda_0 I_V)^k \subseteq \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}.$$ 并举例说明真包含关系可以发生.

> [!proof]- 证明
> 若 $\boldsymbol{\alpha} \in \mathrm{Ker}(\varphi - \lambda_0 I_V)^k$, 则 $(\varphi - \lambda_0 I_V)^k(\boldsymbol{\alpha}) = \boldsymbol{0}$, 从而 $(\varphi - \lambda_0 I_V)^{k+1}(\boldsymbol{\alpha}) = (\varphi - \lambda_0 I_V)(\boldsymbol{0}) = \boldsymbol{0}$, 即 $\boldsymbol{\alpha} \in \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}$. 因此 $\mathrm{Ker}(\varphi - \lambda_0 I_V)^k \subseteq \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}$.

> [!example] 例 6.14
> 设 $\varphi$ 是 $V$ 上的线性变换, $V$ 有直和分解: $V = V_1 \oplus V_2 \oplus \cdots \oplus V_m$, 其中每个 $V_i$ 都是 $\varphi-$不变子空间. 设 $\varphi|_{V_i}$ 的特征多项式为 $f_i(\lambda)$, 求证: $\varphi$ 的特征多项式 $f(\lambda) = f_1(\lambda)f_2(\cdots)f_m(\lambda)$.

> [!proof]- 证明
> 取 $V_i$ 的一组基, 它们合在一起构成 $V$ 的一组基. 设 $\varphi|_{V_i}$ 在这组基下的表示矩阵为 $\boldsymbol{A}_i$, 则 $\varphi$ 在 $V$ 的这组基下的表示矩阵为分块对角矩阵 $\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m\}$. 因此 $$f(\lambda) = |\lambda\boldsymbol{I} - \boldsymbol{A}| = \prod_{i=1}^m |\lambda\boldsymbol{I}_{n_i} - \boldsymbol{A}_i| = \prod_{i=1}^m f_i(\lambda). \quad \square$$


### §6.2 特征值和特征向量

本节主要讨论特征值与特征向量的基本性质以及相关的计算方法.

#### 1. 特征值的基本性质

> [!theorem] 定理 6.4
> 相似矩阵具有相同的特征多项式, 从而具有相同的特征值.

> [!proof]- 证明
> 设 $\boldsymbol{A} \sim \boldsymbol{B}$, 即存在可逆矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{B} = \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$, 则
> $$|\lambda\boldsymbol{I} - \boldsymbol{B}| = |\lambda\boldsymbol{I} - \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}| = |\boldsymbol{P}^{-1}(\lambda\boldsymbol{I} - \boldsymbol{A})\boldsymbol{P}| = |\lambda\boldsymbol{I} - \boldsymbol{A}|. \quad \square$$

> [!theorem] 定理 6.5
> $n$ 阶矩阵 $\boldsymbol{A}$ 的属于不同特征值的特征向量线性无关.

> [!proof]- 证明
> 设 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\boldsymbol{A}$ 的互不相同的特征值, $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_k$ 是对应的特征向量. 对 $k$ 用数学归纳法. 当 $k=1$ 时, $\boldsymbol{\alpha}_1 \neq \boldsymbol{0}$, 结论成立. 假设对 $k-1$ 个不同特征值结论成立. 设 $$c_1\boldsymbol{\alpha}_1 + c_2\boldsymbol{\alpha}_2 + \cdots + c_k\boldsymbol{\alpha}_k = \boldsymbol{0}. \quad (*)$$ 两边左乘 $\boldsymbol{A}$ 得 $c_1\lambda_1\boldsymbol{\alpha}_1 + c_2\lambda_2\boldsymbol{\alpha}_2 + \cdots + c_k\lambda_k\boldsymbol{\alpha}_k = \boldsymbol{0}$. 将 $(*)$ 式乘以 $\lambda_k$ 再相减得 $$c_1(\lambda_1 - \lambda_k)\boldsymbol{\alpha}_1 + \cdots + c_{k-1}(\lambda_{k-1} - \lambda_k)\boldsymbol{\alpha}_{k-1} = \boldsymbol{0}.$$ 由归纳假设, $\boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_{k-1}$ 线性无关, 故 $c_i(\lambda_i - \lambda_k) = 0\ (i=1,\cdots,k-1)$. 因 $\lambda_i \neq \lambda_k$, 得 $c_i = 0$. 代入 $(*)$ 得 $c_k\boldsymbol{\alpha}_k = \boldsymbol{0}$, 又 $\boldsymbol{\alpha}_k \neq \boldsymbol{0}$, 故 $c_k = 0$. $\square$

> [!corollary] 推论 6.6
> 若 $n$ 阶矩阵 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 则 $\boldsymbol{A}$ 可对角化.


> [!example] 例 6.15
> 设 $\lambda_1, \lambda_2$ 是 $n$ 阶矩阵 $\boldsymbol{A}$ 的两个不同特征值, $\boldsymbol{\xi}_1, \boldsymbol{\xi}_2, \cdots, \boldsymbol{\xi}_r$ 是 $\boldsymbol{A}$ 关于 $\lambda_1$ 的线性无关特征向量, $\boldsymbol{\eta}_1, \boldsymbol{\eta}_2, \cdots, \boldsymbol{\eta}_s$ 是 $\boldsymbol{A}$ 关于 $\lambda_2$ 的线性无关特征向量, 求证: $\boldsymbol{\xi}_1, \cdots, \boldsymbol{\xi}_r, \boldsymbol{\eta}_1, \cdots, \boldsymbol{\eta}_s$ 线性无关.

> [!proof]- 证明
> 设 $$a_1\boldsymbol{\xi}_1 + \cdots + a_r\boldsymbol{\xi}_r + b_1\boldsymbol{\eta}_1 + \cdots + b_s\boldsymbol{\eta}_s = \boldsymbol{0}. \quad (1)$$ 两边作用 $\boldsymbol{A}$ 得 $$a_1\lambda_1\boldsymbol{\xi}_1 + \cdots + a_r\lambda_1\boldsymbol{\xi}_r + b_1\lambda_2\boldsymbol{\eta}_1 + \cdots + b_s\lambda_2\boldsymbol{\eta}_s = \boldsymbol{0}. \quad (2)$$ $(1) \times \lambda_2 - (2)$ 得 $$(\lambda_2 - \lambda_1)(a_1\boldsymbol{\xi}_1 + \cdots + a_r\boldsymbol{\xi}_r) = \boldsymbol{0}.$$ 因 $\lambda_1 \neq \lambda_2$, 故 $a_1\boldsymbol{\xi}_1 + \cdots + a_r\boldsymbol{\xi}_r = \boldsymbol{0}$, 从而 $a_1 = \cdots = a_r = 0$. 代回 (1) 得 $b_1\boldsymbol{\eta}_1 + \cdots + b_s\boldsymbol{\eta}_s = \boldsymbol{0}$, 从而 $b_1 = \cdots = b_s = 0$. $\square$

> [!example] 例 6.16
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3$ 是 $\boldsymbol{A}$ 的属于不同特征值 $\lambda_1, \lambda_2, \lambda_3$ 的特征向量. 若 $\boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2 + \boldsymbol{\alpha}_3$ 是 $\boldsymbol{A}$ 的特征向量, 求证: $\lambda_1 = \lambda_2 = \lambda_3$.

> [!proof]- 证明
> 设 $\boldsymbol{A}(\boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2 + \boldsymbol{\alpha}_3) = \mu(\boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2 + \boldsymbol{\alpha}_3)$, 则 $$(\lambda_1 - \mu)\boldsymbol{\alpha}_1 + (\lambda_2 - \mu)\boldsymbol{\alpha}_2 + (\lambda_3 - \mu)\boldsymbol{\alpha}_3 = \boldsymbol{0}.$$ 由定理 6.5, $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3$ 线性无关, 故 $\lambda_1 = \lambda_2 = \lambda_3 = \mu$. $\square$

> [!example] 例 6.17
> 设 $\varphi$ 是 $\mathbb{C}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\lambda_1, \lambda_2, \cdots, \lambda_s$ 是 $\varphi$ 的全部不同特征值, $V_i$ 是特征值 $\lambda_i$ 的特征子空间, 则 $$\dim V_1 + \dim V_2 + \cdots + \dim V_s \leq n,$$ 且等号成立的充要条件是 $\varphi$ 可对角化.

> [!proof]- 证明
> 取各 $V_i$ 的一组基, 由定理 6.5 知它们的并构成线性无关组, 故总个数不超过 $n$, 即 $\sum_{i=1}^s \dim V_i \leq n$. 等号成立意味着 $V$ 有 $n$ 个线性无关的特征向量, 即 $\varphi$ 可对角化. $\square$


#### 2. 特征向量的性质

> [!example] 例 6.18
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, $f(x)$ 是多项式, 求证: $f(\boldsymbol{A})$ 可逆的充要条件是 $f(x)$ 与 $\boldsymbol{A}$ 的特征多项式 $g(x)$ 互素.

> [!proof]- 证明
> 设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $\boldsymbol{A}$ 的特征值, 则 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$ 是 $f(\boldsymbol{A})$ 的特征值. $f(\boldsymbol{A})$ 可逆 $\Leftrightarrow$ 所有 $f(\lambda_i) \neq 0$ $\Leftrightarrow$ $f(x)$ 与 $g(x) = \prod_{i=1}^n (x - \lambda_i)$ 无公共根 $\Leftrightarrow$ $(f(x), g(x)) = 1$. $\square$

> [!example] 例 6.19
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵, $\boldsymbol{B}$ 为 $n \times m$ 矩阵, 证明: $\lambda^n |\lambda\boldsymbol{I}_m - \boldsymbol{A}\boldsymbol{B}| = \lambda^m |\lambda\boldsymbol{I}_n - \boldsymbol{B}\boldsymbol{A}|$.

> [!proof]- 证明
> 考虑分块矩阵等式:
> $$\begin{pmatrix} \lambda\boldsymbol{I}_m & \boldsymbol{A} \\ \lambda\boldsymbol{B} & \lambda\boldsymbol{I}_n \end{pmatrix} \begin{pmatrix} \boldsymbol{I}_m & \boldsymbol{O} \\ -\boldsymbol{B} & \boldsymbol{I}_n \end{pmatrix} = \begin{pmatrix} \lambda\boldsymbol{I}_m - \boldsymbol{A}\boldsymbol{B} & \boldsymbol{A} \\ \boldsymbol{O} & \lambda\boldsymbol{I}_n \end{pmatrix},$$
> 两边取行列式得 $$\begin{vmatrix} \lambda\boldsymbol{I}_m & \boldsymbol{A} \\ \lambda\boldsymbol{B} & \lambda\boldsymbol{I}_n \end{vmatrix} = \lambda^n |\lambda\boldsymbol{I}_m - \boldsymbol{A}\boldsymbol{B}|.$$ 同理可得 $$\begin{vmatrix} \lambda\boldsymbol{I}_m & \boldsymbol{A} \\ \lambda\boldsymbol{B} & \lambda\boldsymbol{I}_n \end{vmatrix} = \lambda^m |\lambda\boldsymbol{I}_n - \boldsymbol{B}\boldsymbol{A}|.$$ 因此 $\lambda^n |\lambda\boldsymbol{I}_m - \boldsymbol{A}\boldsymbol{B}| = \lambda^m |\lambda\boldsymbol{I}_n - \boldsymbol{B}\boldsymbol{A}|$. $\square$

> [!corollary] 推论 6.7
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵, $\boldsymbol{B}$ 为 $n \times m$ 矩阵, 则 $\boldsymbol{A}\boldsymbol{B}$ 与 $\boldsymbol{B}\boldsymbol{A}$ 的非零特征值相同 (计重数).


> [!example] 例 6.20
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶矩阵, 求证: $\boldsymbol{A}\boldsymbol{B} + \boldsymbol{I}_n$ 与 $\boldsymbol{B}\boldsymbol{A} + \boldsymbol{I}_n$ 有相同的特征值.

> [!proof]- 证明
> 由例 6.19 可知, 对任意 $\lambda$, $|\lambda\boldsymbol{I}_n - (\boldsymbol{A}\boldsymbol{B} + \boldsymbol{I}_n)| = |(\lambda-1)\boldsymbol{I}_n - \boldsymbol{A}\boldsymbol{B}|$, 且 $|\lambda\boldsymbol{I}_n - (\boldsymbol{B}\boldsymbol{A} + \boldsymbol{I}_n)| = |(\lambda-1)\boldsymbol{I}_n - \boldsymbol{B}\boldsymbol{A}|$. 由例 6.19 知两者相等, 故 $\boldsymbol{A}\boldsymbol{B} + \boldsymbol{I}_n$ 与 $\boldsymbol{B}\boldsymbol{A} + \boldsymbol{I}_n$ 有相同的特征值. $\square$

> [!example] 例 6.21
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 都是 $n$ 阶矩阵, 求证: 若 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 则 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 有公共的特征向量.

> [!proof]- 证明 (复数域情形)
> 设 $V$ 是 $\mathbb{C}$ 上的 $n$ 维列向量空间, 将 $\boldsymbol{A}, \boldsymbol{B}$ 看成 $V$ 上的线性变换. 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, $V_\lambda = \{\boldsymbol{\alpha} \in V \mid \boldsymbol{A}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}\}$ 是特征子空间. 对任意 $\boldsymbol{\alpha} \in V_\lambda$, 由 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha} = \boldsymbol{B}\boldsymbol{A}\boldsymbol{\alpha} = \lambda\boldsymbol{B}\boldsymbol{\alpha}$, 知 $\boldsymbol{B}\boldsymbol{\alpha} \in V_\lambda$. 因此 $V_\lambda$ 是 $\boldsymbol{B}$ 的不变子空间. 将 $\boldsymbol{B}$ 限制在 $V_\lambda$ 上, 由于是复线性空间, $\boldsymbol{B}|_{V_\lambda}$ 必有特征值 $\mu$ 及对应的特征向量 $\boldsymbol{\beta} \in V_\lambda$, 则 $\boldsymbol{B}\boldsymbol{\beta} = \mu\boldsymbol{\beta}$ 且 $\boldsymbol{A}\boldsymbol{\beta} = \lambda\boldsymbol{\beta}$, 即 $\boldsymbol{\beta}$ 是 $\boldsymbol{A}, \boldsymbol{B}$ 的公共特征向量. $\square$

> [!example] 例 6.22
> 设 $n$ 阶矩阵 $\boldsymbol{A} = (a_{ij})$ 满足 $\sum_{j=1}^n a_{ij} = a\ (i=1,2,\cdots,n)$, 即 $\boldsymbol{A}$ 的各行元素之和均为 $a$. 求证: $\boldsymbol{A}$ 有特征值 $a$, 并求对应的特征向量.

> [!solution]- 解
> 令 $\boldsymbol{\xi} = (1, 1, \cdots, 1)'$, 则 $\boldsymbol{A}\boldsymbol{\xi} = (\sum_{j=1}^n a_{1j}, \sum_{j=1}^n a_{2j}, \cdots, \sum_{j=1}^n a_{nj})' = (a, a, \cdots, a)' = a\boldsymbol{\xi}$, 故 $a$ 是特征值, $\boldsymbol{\xi}$ 是对应的特征向量. $\square$


#### 3. 特征多项式的计算

> [!example] 例 6.23
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 若 $r(\boldsymbol{A}) < n-1$, 证明: $\boldsymbol{A}$ 的伴随矩阵 $\boldsymbol{A}^*$ 的所有特征值均为零.

> [!proof]- 证明
> 由 $r(\boldsymbol{A}) < n-1$ 知 $r(\boldsymbol{A}^*) = 0$, 即 $\boldsymbol{A}^* = \boldsymbol{O}$. 故 $\boldsymbol{A}^*$ 的特征多项式为 $\lambda^n$, 特征值全为零. $\square$

> [!example] 例 6.24
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 证明: $|\boldsymbol{A}^*| = |\boldsymbol{A}|^{n-1}$.

> [!proof]- 证明
> 由 $\boldsymbol{A}\boldsymbol{A}^* = |\boldsymbol{A}|\boldsymbol{I}_n$ 取行列式得 $|\boldsymbol{A}||\boldsymbol{A}^*| = |\boldsymbol{A}|^n$. 若 $|\boldsymbol{A}| \neq 0$, 则 $|\boldsymbol{A}^*| = |\boldsymbol{A}|^{n-1}$. 若 $|\boldsymbol{A}| = 0$, 则 $r(\boldsymbol{A}^*) \leq 1 < n$, 故 $|\boldsymbol{A}^*| = 0 = |\boldsymbol{A}|^{n-1}$. $\square$

> [!example] 例 6.25
> 设 $\boldsymbol{A}$ 是 $n$ 阶幂等矩阵, 即 $\boldsymbol{A}^2 = \boldsymbol{A}$, 求证: $r(\boldsymbol{A}) = \mathrm{tr}(\boldsymbol{A})$.

> [!proof]- 证明
> 由 $\boldsymbol{A}^2 = \boldsymbol{A}$ 知 $\boldsymbol{A}$ 的特征值只能是 $0$ 或 $1$. 设特征值 $1$ 的重数为 $r$, 则 $\mathrm{tr}(\boldsymbol{A}) = r$. 又 $\boldsymbol{A}$ 的极小多项式为 $x(x-1)$ 或 $x$ 或 $x-1$, 均可互素地分解为一次因式, 故 $\boldsymbol{A}$ 可对角化. 因此 $\boldsymbol{A} \sim \mathrm{diag}\{\boldsymbol{I}_r, \boldsymbol{O}\}$, 从而 $r(\boldsymbol{A}) = r = \mathrm{tr}(\boldsymbol{A})$. $\square$


> [!example] 例 6.26
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵, 求证: $\mathrm{tr}(\boldsymbol{A}^2) \geq 0$, 且等号成立当且仅当 $\boldsymbol{A}^2$ 是幂零矩阵.

> [!proof]- 证明
> 设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $\boldsymbol{A}$ 的特征值, 则 $\lambda_1^2, \lambda_2^2, \cdots, \lambda_n^2$ 是 $\boldsymbol{A}^2$ 的特征值, 故 $\mathrm{tr}(\boldsymbol{A}^2) = \sum_{i=1}^n \lambda_i^2 \geq 0$. 等号成立当且仅当所有 $\lambda_i = 0$, 即 $\boldsymbol{A}$ 的特征值全为零, 此时 $\boldsymbol{A}^2$ 的特征值也全为零, 即 $\boldsymbol{A}^2$ 是幂零矩阵. $\square$

> [!example] 例 6.27
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, $\lambda_0$ 是 $\boldsymbol{A}$ 的特征值, 对应的特征向量为 $\boldsymbol{\alpha}$. 求证: 对任意正整数 $k$, $\lambda_0^k$ 是 $\boldsymbol{A}^k$ 的特征值, $\boldsymbol{\alpha}$ 仍是对应的特征向量.

> [!proof]- 证明
> 由 $\boldsymbol{A}\boldsymbol{\alpha} = \lambda_0\boldsymbol{\alpha}$, 归纳可得 $\boldsymbol{A}^k\boldsymbol{\alpha} = \lambda_0^k\boldsymbol{\alpha}$, 即 $\lambda_0^k$ 是 $\boldsymbol{A}^k$ 的特征值, $\boldsymbol{\alpha}$ 是对应特征向量. $\square$

> [!example] 例 6.28
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, $g(x)$ 是多项式. 若 $\lambda_0$ 是 $\boldsymbol{A}$ 的特征值, 则 $g(\lambda_0)$ 是 $g(\boldsymbol{A})$ 的特征值.

> [!proof]- 证明
> 由例 6.27 的推广即得. $\square$


> [!example] 例 6.29
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 求证: $\boldsymbol{A}$ 可逆当且仅当 $|\boldsymbol{A}| \neq 0$ 当且仅当 $0$ 不是 $\boldsymbol{A}$ 的特征值.

> [!proof]- 证明
> $\boldsymbol{A}$ 可逆 $\Leftrightarrow$ $|\boldsymbol{A}| \neq 0$ $\Leftrightarrow$ $|0 \cdot \boldsymbol{I} - \boldsymbol{A}| = (-1)^n|\boldsymbol{A}| \neq 0$ $\Leftrightarrow$ $0$ 不是 $\boldsymbol{A}$ 的特征值. $\square$

> [!example] 例 6.30
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 若 $\boldsymbol{A}$ 满足 $\boldsymbol{A}^k = \boldsymbol{O}$ (幂零), 求证: $\boldsymbol{I}_n - \boldsymbol{A}$ 可逆, 并求 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1}$.

> [!proof]- 证明
> 因为 $\boldsymbol{A}^k = \boldsymbol{O}$, 故 $$(\boldsymbol{I}_n - \boldsymbol{A})(\boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}) = \boldsymbol{I}_n - \boldsymbol{A}^k = \boldsymbol{I}_n,$$ 所以 $\boldsymbol{I}_n - \boldsymbol{A}$ 可逆, 且 $(\boldsymbol{I}_n - \boldsymbol{A})^{-1} = \boldsymbol{I}_n + \boldsymbol{A} + \boldsymbol{A}^2 + \cdots + \boldsymbol{A}^{k-1}$. $\square$

> [!example] 例 6.31
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 其特征多项式为 $f(\lambda) = \lambda^n + a_{n-1}\lambda^{n-1} + \cdots + a_1\lambda + a_0$. 求证: $a_0 = (-1)^n|\boldsymbol{A}|$.

> [!proof]- 证明
> 由 $f(0) = |0 \cdot \boldsymbol{I} - \boldsymbol{A}| = (-1)^n|\boldsymbol{A}| = a_0$ 即得. $\square$

> [!example] 例 6.32
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, $f(x)$ 是多项式且 $f(\boldsymbol{A}) = \boldsymbol{O}$, 则 $f(x)$ 的任一根必是 $\boldsymbol{A}$ 的特征值的什么条件?

> [!solution]- 解
> 设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $\boldsymbol{A}$ 的全部特征值, 则 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$ 是 $f(\boldsymbol{A})$ 的特征值. 由 $f(\boldsymbol{A}) = \boldsymbol{O}$ 知 $f(\lambda_i) = 0$, 即 $f(x)$ 的任一根覆盖了 $\boldsymbol{A}$ 的全部特征值. 但这是充分条件而非必要条件. 实际上, $f(x)$ 的任一根必是 $\boldsymbol{A}$ 的特征值的**必要**条件是 $f(x)$ 被 $\boldsymbol{A}$ 的极小多项式整除. $\square$


#### 4. 特征子空间与几何重数

> [!example] 例 6.33
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, $\lambda_0$ 是 $\boldsymbol{A}$ 的特征值, 对应的特征子空间为 $V_{\lambda_0}$. 求证: $$\dim V_{\lambda_0} = n - r(\lambda_0\boldsymbol{I}_n - \boldsymbol{A}).$$

> [!proof]- 证明
> 由定义, $V_{\lambda_0} = \{\boldsymbol{\alpha} \in \mathbb{F}^n \mid (\lambda_0\boldsymbol{I}_n - \boldsymbol{A})\boldsymbol{\alpha} = \boldsymbol{0}\} = \mathrm{Ker}(\lambda_0\boldsymbol{I}_n - \boldsymbol{A})$. 由维数公式, $$\dim V_{\lambda_0} = \dim \mathrm{Ker}(\lambda_0\boldsymbol{I}_n - \boldsymbol{A}) = n - r(\lambda_0\boldsymbol{I}_n - \boldsymbol{A}). \quad \square$$

> [!example] 例 6.34
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 若对任意 $n$ 维列向量 $\boldsymbol{\alpha}$ 都有 $\boldsymbol{A}\boldsymbol{\alpha} = \boldsymbol{0}$, 求证: $\boldsymbol{A} = \boldsymbol{O}$.

> [!proof]- 证明
> 取 $\boldsymbol{\alpha}$ 为标准基向量 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$, 则 $\boldsymbol{A}\boldsymbol{e}_j = \boldsymbol{0}$ 意味着 $\boldsymbol{A}$ 的第 $j$ 列为零向量, 故 $\boldsymbol{A} = \boldsymbol{O}$. $\square$

> [!example] 例 6.35
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 求证: $\boldsymbol{B}$ 的特征子空间都是 $\boldsymbol{A}$ 的不变子空间.

> [!proof]- 证明
> 设 $V_\lambda$ 是 $\boldsymbol{B}$ 关于特征值 $\lambda$ 的特征子空间, 则对任意 $\boldsymbol{\alpha} \in V_\lambda$, $\boldsymbol{B}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}$. 于是 $\boldsymbol{B}(\boldsymbol{A}\boldsymbol{\alpha}) = \boldsymbol{A}(\boldsymbol{B}\boldsymbol{\alpha}) = \lambda(\boldsymbol{A}\boldsymbol{\alpha})$, 即 $\boldsymbol{A}\boldsymbol{\alpha} \in V_\lambda$. 因此 $V_\lambda$ 是 $\boldsymbol{A}$ 的不变子空间. $\square$


#### 5. 特征值的进一步性质

> [!example] 例 6.36
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 求证: $\boldsymbol{A}$ 与 $\boldsymbol{A}'$ 有相同的特征多项式, 从而有相同的特征值.

> [!proof]- 证明
> $|\lambda\boldsymbol{I} - \boldsymbol{A}'| = |(\lambda\boldsymbol{I} - \boldsymbol{A})'| = |\lambda\boldsymbol{I} - \boldsymbol{A}|$. $\square$

> [!example] 例 6.37
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 可逆, 求证: $\boldsymbol{A}\boldsymbol{B}$ 与 $\boldsymbol{B}\boldsymbol{A}$ 有相同的特征值.

> [!proof]- 证明
> $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{A}(\boldsymbol{B}\boldsymbol{A})\boldsymbol{A}^{-1}$, 即 $\boldsymbol{A}\boldsymbol{B} \sim \boldsymbol{B}\boldsymbol{A}$, 故它们有相同的特征值. $\square$

> [!example] 例 6.38
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $U$ 是 $V$ 的子空间, 求证: 若 $U$ 是 $\varphi-$不变子空间, 则对任意多项式 $f(x)$, $U$ 也是 $f(\varphi)-$不变子空间.

> [!proof]- 证明
> 对任意 $\boldsymbol{\alpha} \in U$, 由 $\varphi(\boldsymbol{\alpha}) \in U$ 归纳可得 $\varphi^k(\boldsymbol{\alpha}) \in U$, 从而 $f(\varphi)(\boldsymbol{\alpha}) \in U$. $\square$


> [!example] 例 6.39
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 则存在 $\mathbb{F}$ 上的可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为上三角矩阵, 其主对角线元素为 $\boldsymbol{A}$ 的全部特征值.

> [!proof]- 证明
> 对 $n$ 用归纳法. $n=1$ 时显然. 假设对 $n-1$ 阶矩阵结论成立. 设 $\lambda_1$ 是 $\boldsymbol{A}$ 的特征值, $\boldsymbol{e}_1$ 是对应的特征向量, 将其扩充为 $\mathbb{F}^n$ 的一组基 $\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$. 令 $\boldsymbol{Q} = (\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n)$, 则 $$\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q} = \begin{pmatrix} \lambda_1 & * \\ \boldsymbol{0} & \boldsymbol{A}_1 \end{pmatrix},$$ 其中 $\boldsymbol{A}_1$ 是 $n-1$ 阶矩阵. 由归纳假设, 存在 $n-1$ 阶可逆矩阵 $\boldsymbol{R}$ 使 $\boldsymbol{R}^{-1}\boldsymbol{A}_1\boldsymbol{R}$ 为上三角矩阵. 令 $\boldsymbol{P} = \boldsymbol{Q}\begin{pmatrix} 1 & \boldsymbol{0}' \\ \boldsymbol{0} & \boldsymbol{R} \end{pmatrix}$, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为上三角矩阵, 主对角线元素为 $\lambda_1, \lambda_2, \cdots, \lambda_n$. $\square$

> [!example] 例 6.40
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵, 满足 $\boldsymbol{A}\boldsymbol{A}' = \boldsymbol{A}'\boldsymbol{A}$, 即 $\boldsymbol{A}$ 为**正规矩阵**. 求证: 存在正交矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵.

> [!proof]- 证明
> 由 Schur 定理, 存在酉矩阵 $\boldsymbol{U}$ 使 $\boldsymbol{U}^*\boldsymbol{A}\boldsymbol{U}$ 为上三角矩阵. 由 $\boldsymbol{A}\boldsymbol{A}^* = \boldsymbol{A}^*\boldsymbol{A}$ 可证该上三角矩阵实际上是对角矩阵. 对于实正规矩阵, 利用实正规矩阵的特征值性质可得存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}$ 为准对角矩阵, 当 $\boldsymbol{A}$ 的特征值全为实数时为对角矩阵. $\square$

> [!example] 例 6.41
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^k = \boldsymbol{I}_n$ 对某个正整数 $k$ 成立, 求证: $\boldsymbol{A}$ 相似于对角矩阵.

> [!proof]- 证明
> $\boldsymbol{A}$ 的极小多项式 $m(x)$ 整除 $x^k - 1$. 由于 $x^k - 1$ 在 $\mathbb{C}$ 上无重根, 故 $m(x)$ 也无重根, 从而 $\boldsymbol{A}$ 可对角化. $\square$


### §6.3 乘法交换性诱导的同时性质

本节主要讨论当两个矩阵乘法可交换时, 它们可以同时具有的一些性质, 如同时对角化、同时上三角化等.

#### 1. 同时上三角化

> [!theorem] 定理 6.8
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是复数域 $\mathbb{C}$ 上的 $n$ 阶矩阵, 且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵.

> [!proof]- 证明
> 对 $n$ 用归纳法. $n=1$ 时显然. 设 $n > 1$, 由例 6.21 知 $\boldsymbol{A}, \boldsymbol{B}$ 有公共特征向量 $\boldsymbol{\alpha}_1$. 将 $\boldsymbol{\alpha}_1$ 扩充为 $\mathbb{C}^n$ 的一组基, 令 $\boldsymbol{Q} = (\boldsymbol{\alpha}_1, \cdots)$, 则 $$\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q} = \begin{pmatrix} \lambda_1 & * \\ \boldsymbol{0} & \boldsymbol{A}_1 \end{pmatrix}, \quad \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = \begin{pmatrix} \mu_1 & * \\ \boldsymbol{0} & \boldsymbol{B}_1 \end{pmatrix}.$$ 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 可得 $\boldsymbol{A}_1\boldsymbol{B}_1 = \boldsymbol{B}_1\boldsymbol{A}_1$. 由归纳假设, 存在可逆矩阵 $\boldsymbol{R}$ 使 $\boldsymbol{R}^{-1}\boldsymbol{A}_1\boldsymbol{R}$ 和 $\boldsymbol{R}^{-1}\boldsymbol{B}_1\boldsymbol{R}$ 同时为上三角矩阵. 令 $\boldsymbol{P} = \boldsymbol{Q}\begin{pmatrix} 1 & \boldsymbol{0}' \\ \boldsymbol{0} & \boldsymbol{R} \end{pmatrix}$, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵. $\square$

> [!corollary] 推论 6.9
> 设 $\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_k$ 是 $\mathbb{C}$ 上两两乘法可交换的 $n$ 阶矩阵, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}_i\boldsymbol{P}\ (i=1,2,\cdots,k)$ 都是上三角矩阵.


#### 2. 同时对角化

> [!theorem] 定理 6.10
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是复数域 $\mathbb{C}$ 上的 $n$ 阶矩阵, $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 且 $\boldsymbol{A}, \boldsymbol{B}$ 都可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是对角矩阵 (即 $\boldsymbol{A}, \boldsymbol{B}$ 可**同时对角化**).

> [!proof]- 证明
> 因为 $\boldsymbol{A}$ 可对角化, 存在可逆矩阵 $\boldsymbol{Q}$ 使 $$\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q} = \mathrm{diag}\{\lambda_1\boldsymbol{I}_{n_1}, \lambda_2\boldsymbol{I}_{n_2}, \cdots, \lambda_k\boldsymbol{I}_{n_k}\},$$ 其中 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\boldsymbol{A}$ 的互不相同的特征值. 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 得 $$\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q} \cdot \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} \cdot \boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q}.$$ 设 $\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = (\boldsymbol{B}_{ij})$ 为相应分块, 则由 $\lambda_i\boldsymbol{B}_{ij} = \lambda_j\boldsymbol{B}_{ij}$ 知当 $i \neq j$ 时 $\boldsymbol{B}_{ij} = \boldsymbol{O}$. 故 $$\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = \mathrm{diag}\{\boldsymbol{B}_{11}, \boldsymbol{B}_{22}, \cdots, \boldsymbol{B}_{kk}\}.$$ 因为 $\boldsymbol{B}$ 可对角化, 故每个 $\boldsymbol{B}_{ii}$ 也可对角化, 即存在可逆矩阵 $\boldsymbol{R}_i$ 使 $\boldsymbol{R}_i^{-1}\boldsymbol{B}_{ii}\boldsymbol{R}_i$ 为对角矩阵. 令 $\boldsymbol{P} = \boldsymbol{Q}\mathrm{diag}\{\boldsymbol{R}_1, \boldsymbol{R}_2, \cdots, \boldsymbol{R}_k\}$, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是对角矩阵. $\square$


> [!example] 例 6.42
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶矩阵, $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 且 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 求证: $\boldsymbol{B}$ 可对角化.

> [!proof]- 证明
> 由推论 6.6 知 $\boldsymbol{A}$ 可对角化. 由定理 6.10 知 $\boldsymbol{A}, \boldsymbol{B}$ 可同时对角化, 从而 $\boldsymbol{B}$ 可对角化. $\square$

> [!example] 例 6.43
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 且 $\boldsymbol{A}$ 是幂零矩阵, 求证: $|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{B}|$.

> [!proof]- 证明
> 由定理 6.8, 存在可逆矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵. 因为 $\boldsymbol{A}$ 幂零, 所以 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 的主对角线元素全为零. 因此 $\boldsymbol{P}^{-1}(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{P} = \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} + \boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 与 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 的主对角线元素相同, 故 $|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{B}|$. $\square$

> [!example] 例 6.44
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 求证: 若 $\boldsymbol{A}$ 是幂零矩阵, 则 $|\boldsymbol{I}_n + \boldsymbol{A}| = 1$.

> [!proof]- 证明
> 在例 6.43 中取 $\boldsymbol{B} = \boldsymbol{I}_n$ 即得. $\square$


#### 3. 同时性质的应用

> [!example] 例 6.45
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶正定矩阵, 且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 求证: $\boldsymbol{A}\boldsymbol{B}$ 也是正定矩阵.

> [!proof]- 证明
> 因为 $\boldsymbol{A}, \boldsymbol{B}$ 正定, 故 $\boldsymbol{A}, \boldsymbol{B}$ 都是实对称矩阵, 且都可对角化. 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 及定理 6.10, 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \cdots, \lambda_n\}$, $\boldsymbol{P}'\boldsymbol{B}\boldsymbol{P} = \mathrm{diag}\{\mu_1, \cdots, \mu_n\}$, 其中 $\lambda_i > 0$, $\mu_i > 0$. 于是 $\boldsymbol{P}'(\boldsymbol{A}\boldsymbol{B})\boldsymbol{P} = \mathrm{diag}\{\lambda_1\mu_1, \cdots, \lambda_n\mu_n\}$, 且 $\lambda_i\mu_i > 0$, 故 $\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$

> [!example] 例 6.46
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶半正定矩阵, 且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 求证: $\boldsymbol{A}\boldsymbol{B}$ 也是半正定矩阵.

> [!proof]- 证明
> 类似于例 6.45 的证明, 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'(\boldsymbol{A}\boldsymbol{B})\boldsymbol{P} = \mathrm{diag}\{\lambda_1\mu_1, \cdots, \lambda_n\mu_n\}$, 其中 $\lambda_i \geq 0$, $\mu_i \geq 0$, 故 $\lambda_i\mu_i \geq 0$, 即 $\boldsymbol{A}\boldsymbol{B}$ 半正定. $\square$

> [!example] 例 6.47
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 求证: 存在可逆矩阵 $\boldsymbol{B}$ 及幂等矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A} = \boldsymbol{B}\boldsymbol{C}$.

> [!proof]- 证明
> 设 $\boldsymbol{P}$ 为可逆矩阵使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型. 设 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\boldsymbol{J}_1, \boldsymbol{J}_2, \cdots, \boldsymbol{J}_k\},$$ 其中 $\boldsymbol{J}_i = \lambda_i\boldsymbol{I}_{n_i} + \boldsymbol{N}_i$, $\boldsymbol{N}_i$ 为幂零矩阵. 当 $\lambda_i \neq 0$ 时, $\boldsymbol{J}_i = \lambda_i(\boldsymbol{I}_{n_i} + \lambda_i^{-1}\boldsymbol{N}_i)$, 其中 $\boldsymbol{I}_{n_i} + \lambda_i^{-1}\boldsymbol{N}_i$ 可逆. 当 $\lambda_i = 0$ 时, $\boldsymbol{J}_i$ 幂零. 适当构造即可得 $\boldsymbol{A} = \boldsymbol{B}\boldsymbol{C}$. $\square$


> [!example] 例 6.48
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 满足 $\boldsymbol{A}^2 = \boldsymbol{I}_n$, 求证: $\boldsymbol{A}$ 可对角化, 并求其 Jordan 标准型.

> [!proof]- 证明
> $\boldsymbol{A}$ 的极小多项式整除 $x^2 - 1 = (x-1)(x+1)$, 无重根, 故 $\boldsymbol{A}$ 可对角化. $\boldsymbol{A}$ 的特征值为 $1$ 或 $-1$. 设特征值 $1$ 的重数为 $r$, 则特征值 $-1$ 的重数为 $n-r$, Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{I}_r, -\boldsymbol{I}_{n-r}\}$. $\square$

> [!example] 例 6.49
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 且 $\boldsymbol{A}^2 = -\boldsymbol{I}_n$, 求证: $\boldsymbol{A}$ 在实数域上不可对角化, 但在复数域上可对角化.

> [!proof]- 证明
> $\boldsymbol{A}$ 的特征值满足 $\lambda^2 = -1$, 即 $\lambda = \pm i$. 在实数域上, $\boldsymbol{A}$ 没有实特征值, 故不可对角化. 在复数域上, $\boldsymbol{A}$ 的极小多项式 $x^2 + 1 = (x-i)(x+i)$ 无重根, 故可对角化, Jordan 标准型为 $\mathrm{diag}\{i\boldsymbol{I}_r, -i\boldsymbol{I}_{n-r}\}$. $\square$

### §6.4 矩阵相似和可对角化的计算

本节讨论矩阵相似关系的判定以及矩阵可对角化的具体计算方法.

#### 1. 相似关系的判定

> [!theorem] 定理 6.11
> 两个 $n$ 阶矩阵 $\boldsymbol{A}, \boldsymbol{B}$ 相似的充要条件是它们有相同的行列式因子、不变因子或初等因子.

> [!theorem] 定理 6.12
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A} \sim \boldsymbol{B}$ 当且仅当存在多项式矩阵 $\boldsymbol{P}(\lambda), \boldsymbol{Q}(\lambda)$ 使得 $\lambda\boldsymbol{I} - \boldsymbol{B} = \boldsymbol{P}(\lambda)(\lambda\boldsymbol{I} - \boldsymbol{A})\boldsymbol{Q}(\lambda)$, 其中 $\boldsymbol{P}(\lambda), \boldsymbol{Q}(\lambda)$ 是可逆 $\lambda-$矩阵.


> [!example] 例 6.50
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, 若存在可逆矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{B} = \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$, 求证: 对任意多项式 $f(x)$, $f(\boldsymbol{B}) = \boldsymbol{P}^{-1}f(\boldsymbol{A})\boldsymbol{P}$.

> [!proof]- 证明
> 由 $\boldsymbol{B}^k = (\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})^k = \boldsymbol{P}^{-1}\boldsymbol{A}^k\boldsymbol{P}$, 对多项式线性组合即得. $\square$

> [!example] 例 6.51
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 其特征多项式为 $f(\lambda) = |\lambda\boldsymbol{I} - \boldsymbol{A}|$, 求证: $f(\boldsymbol{A}) = \boldsymbol{O}$ (Hamilton-Cayley 定理).

> [!proof]- 证明 (利用矩阵相似)
> 由例 6.39, 存在可逆矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为上三角矩阵, 主对角线元素为 $\lambda_1, \lambda_2, \cdots, \lambda_n$. 则 $f(\lambda) = (\lambda - \lambda_1)(\lambda - \lambda_2)\cdots(\lambda - \lambda_n)$, 且 $$f(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}) = (\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} - \lambda_1\boldsymbol{I})\cdots(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} - \lambda_n\boldsymbol{I}) = \boldsymbol{O}.$$ 这是因为每个 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} - \lambda_i\boldsymbol{I}$ 都是主对角线上有一个零元的上三角矩阵, 它们的乘积为零矩阵. 因此 $f(\boldsymbol{A}) = \boldsymbol{P}f(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})\boldsymbol{P}^{-1} = \boldsymbol{O}$. $\square$

#### 2. 可对角化的计算

> [!example] 例 6.52
> 判断下列矩阵是否可对角化, 若可对角化, 求出可逆矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为对角矩阵:
> $$\boldsymbol{A} = \begin{pmatrix} 3 & -1 & -2 \\ 2 & 0 & -2 \\ 2 & -1 & -1 \end{pmatrix}.$$

> [!solution]- 解
> 计算特征多项式 $f(\lambda) = |\lambda\boldsymbol{I} - \boldsymbol{A}| = \lambda(\lambda - 1)^2$. 特征值为 $\lambda_1 = 0$, $\lambda_2 = \lambda_3 = 1$.
> 对 $\lambda_1 = 0$, 解 $(0\cdot\boldsymbol{I} - \boldsymbol{A})\boldsymbol{x} = \boldsymbol{0}$, 得特征向量 $\boldsymbol{\alpha}_1 = (1, 1, 1)'$.
> 对 $\lambda_2 = 1$, 解 $(\boldsymbol{I} - \boldsymbol{A})\boldsymbol{x} = \boldsymbol{0}$, 得 $r(\boldsymbol{I} - \boldsymbol{A}) = 1$, 特征子空间维数为 $3 - 1 = 2$, 基础解系为 $\boldsymbol{\alpha}_2 = (1, 2, 0)'$, $\boldsymbol{\alpha}_3 = (1, 0, 1)'$.
> 由于几何重数等于代数重数, $\boldsymbol{A}$ 可对角化. 令 $$\boldsymbol{P} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix},$$ 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{0, 1, 1\}$. $\square$


> [!example] 例 6.53
> 判断下列矩阵是否可对角化:
> $$\boldsymbol{A} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}.$$

> [!solution]- 解
> $\boldsymbol{A}$ 的特征多项式为 $f(\lambda) = (\lambda - 1)^3$, 特征值 $\lambda = 1$ (三重). 计算 $r(\boldsymbol{I} - \boldsymbol{A}) = 2$, 特征子空间维数为 $3 - 2 = 1 < 3$, 几何重数不等于代数重数, 故 $\boldsymbol{A}$ 不可对角化. $\square$

> [!example] 例 6.54
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 满足 $\boldsymbol{A}^2 - 3\boldsymbol{A} + 2\boldsymbol{I}_n = \boldsymbol{O}$, 求证: $\boldsymbol{A}$ 可对角化.

> [!proof]- 证明
> 由条件知 $\boldsymbol{A}$ 的极小多项式 $m(x)$ 整除 $x^2 - 3x + 2 = (x-1)(x-2)$. 由于 $m(x)$ 无重根, 故 $\boldsymbol{A}$ 可对角化. $\square$

> [!example] 例 6.55
> 设 $\boldsymbol{A}$ 是 $n$ 阶矩阵, 且 $\boldsymbol{A}^2 = \boldsymbol{A}$ (幂等矩阵), 求证: $\boldsymbol{A}$ 可对角化, 且其 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{I}_r, \boldsymbol{O}\}$, 其中 $r = r(\boldsymbol{A})$.

> [!proof]- 证明
> $\boldsymbol{A}$ 的极小多项式整除 $x^2 - x = x(x-1)$, 无重根, 故 $\boldsymbol{A}$ 可对角化. 特征值只能是 $0$ 或 $1$. 设特征值 $1$ 的重数为 $r$, 则 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{I}_r, \boldsymbol{O}\}$, 且 $r = r(\boldsymbol{A})$. $\square$


#### 3. 利用特征值判定矩阵性质

> [!example] 例 6.56
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^2 = \boldsymbol{I}_n$, 求证: 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\boldsymbol{I}_r, -\boldsymbol{I}_{n-r}\}$.

> [!proof]- 证明
> 因为 $\boldsymbol{A}$ 实对称, 故存在正交矩阵 $\boldsymbol{Q}$ 使 $\boldsymbol{Q}'\boldsymbol{A}\boldsymbol{Q} = \mathrm{diag}\{\lambda_1, \cdots, \lambda_n\}$, 其中 $\lambda_i$ 是 $\boldsymbol{A}$ 的实特征值. 由 $\boldsymbol{A}^2 = \boldsymbol{I}_n$ 知 $\lambda_i^2 = 1$, 即 $\lambda_i = \pm 1$. 因此存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\boldsymbol{I}_r, -\boldsymbol{I}_{n-r}\}$. $\square$

> [!example] 例 6.57
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定矩阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 求证: $\boldsymbol{A} + \boldsymbol{B}$ 可逆.

> [!proof]- 证明
> 设 $\lambda$ 是 $\boldsymbol{A} + \boldsymbol{B}$ 的特征值, $\boldsymbol{\alpha}$ 是对应的特征向量, 则 $(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}$. 两边与 $\boldsymbol{\alpha}$ 作内积得 $\boldsymbol{\alpha}^*\boldsymbol{A}\boldsymbol{\alpha} + \boldsymbol{\alpha}^*\boldsymbol{B}\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}^*\boldsymbol{\alpha}$. 因为 $\boldsymbol{B}$ 反对称, $\boldsymbol{\alpha}^*\boldsymbol{B}\boldsymbol{\alpha}$ 是纯虚数或零, 而 $\boldsymbol{\alpha}^*\boldsymbol{A}\boldsymbol{\alpha} > 0$, $\boldsymbol{\alpha}^*\boldsymbol{\alpha} > 0$, 故 $\lambda \neq 0$. 因此 $\boldsymbol{A} + \boldsymbol{B}$ 没有零特征值, 即可逆. $\square$

> [!example] 例 6.58
> 设 $\boldsymbol{A}$ 为 $n$ 阶实矩阵, 且对任意非零实向量 $\boldsymbol{\alpha}$, 都有 $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha} > 0$, 问: $\boldsymbol{A}$ 是否必为正定矩阵?

> [!solution]- 解
> 不一定. 取 $\boldsymbol{A} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, 则对 $\boldsymbol{\alpha} = (x, y)'$, $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha} = x^2 + 2xy + y^2 = (x+y)^2 \geq 0$, 且等号仅在 $x = -y$ 时成立. 但 $\boldsymbol{A}$ 不是对称矩阵, 故不是正定矩阵. 若加上 $\boldsymbol{A}$ 为对称矩阵的条件, 则结论成立. $\square$


#### 4. 矩阵的迹与特征值

> [!example] 例 6.59
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶矩阵, 求证: $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) = \mathrm{tr}(\boldsymbol{B}\boldsymbol{A})$.

> [!proof]- 证明
> 设 $\boldsymbol{A} = (a_{ij})$, $\boldsymbol{B} = (b_{ij})$, 则 $$\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) = \sum_{i=1}^n \sum_{k=1}^n a_{ik}b_{ki} = \sum_{k=1}^n \sum_{i=1}^n b_{ki}a_{ik} = \mathrm{tr}(\boldsymbol{B}\boldsymbol{A}). \quad \square$$

> [!example] 例 6.60
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 若对任意 $n$ 阶矩阵 $\boldsymbol{B}$ 都有 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) = 0$, 求证: $\boldsymbol{A} = \boldsymbol{O}$.

> [!proof]- 证明
> 取 $\boldsymbol{B} = \boldsymbol{A}'$, 则 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{A}') = \sum_{i,j} a_{ij}^2 = 0$, 故 $a_{ij} = 0$, 即 $\boldsymbol{A} = \boldsymbol{O}$. $\square$

> [!example] 例 6.61
> 不存在 $n$ 阶矩阵 $\boldsymbol{A}, \boldsymbol{B}$ 使 $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A} = c\boldsymbol{I}_n$ 对某个非零常数 $c$ 成立.

> [!proof]- 证明
> 若 $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A} = c\boldsymbol{I}_n$, 两边取迹得 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) - \mathrm{tr}(\boldsymbol{B}\boldsymbol{A}) = nc$. 但 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B}) = \mathrm{tr}(\boldsymbol{B}\boldsymbol{A})$, 故 $nc = 0$, 即 $c = 0$, 矛盾. $\square$


> [!proof]- 证明 (续)
> 完全类似于例 6.40 的证明, 其中利用例 6.42 得到 $\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m$ 的公共特征向量, 请读者自行补充相关的细节. $\square$

> [!example] 例 6.44
> 设数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m$ 两两乘法可交换, 且它们都在 $\mathbb{F}$ 上可对角化, 求证: 它们在 $\mathbb{F}$ 上可同时对角化, 即存在 $\mathbb{F}$ 上的可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}_i\boldsymbol{P}\ (1 \leq i \leq m)$ 都是对角矩阵.

> [!proof]- 证明
> 若 $\boldsymbol{A}_i$ 都是纯量矩阵, 则结论显然成立. 以下不妨设 $\boldsymbol{A}_1$ 不是纯量矩阵, 余下的证明完全类似于例 6.41 的证明, 请读者自行补充相关的细节. $\square$

> [!example] 例 6.45
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 都是 $n$ 阶矩阵且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$. 若 $\boldsymbol{A}$ 是幂零矩阵, 求证: $|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{B}|$.

> [!proof]- 证法 1
> 由例 6.40 可知, $\boldsymbol{A}, \boldsymbol{B}$ 可同时上三角化, 即存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵. 因为上三角矩阵的主对角元是矩阵的特征值, 而幂零矩阵的特征值全为零, 所以 $|\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} + \boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}| = |\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}|$, 即有 $|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{B}|$.

> [!proof]- 证法 2
> 先假设 $\boldsymbol{B}$ 是可逆矩阵, 则 $|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{I}_n + \boldsymbol{A}\boldsymbol{B}^{-1}||\boldsymbol{B}|$, 只要证明 $|\boldsymbol{I}_n + \boldsymbol{A}\boldsymbol{B}^{-1}| = 1$ 即可. 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 可知 $\boldsymbol{A}\boldsymbol{B}^{-1} = \boldsymbol{B}^{-1}\boldsymbol{A}$, 再由 $\boldsymbol{A}$ 是幂零矩阵容易验证 $\boldsymbol{A}\boldsymbol{B}^{-1}$ 也是幂零矩阵, 从而其特征值全为零. 因此 $\boldsymbol{I}_n + \boldsymbol{A}\boldsymbol{B}^{-1}$ 的特征值全为 1, 故 $|\boldsymbol{I}_n + \boldsymbol{A}\boldsymbol{B}^{-1}| = 1$.

> 对于一般的矩阵 $\boldsymbol{B}$, 可取到一列有理数 $t_k \to 0$, 使得 $t_k\boldsymbol{I}_n + \boldsymbol{B}$ 是可逆矩阵. 由可逆情形的证明可得 $|\boldsymbol{A} + t_k\boldsymbol{I}_n + \boldsymbol{B}| = |t_k\boldsymbol{I}_n + \boldsymbol{B}|$. 注意到上式两边都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 将上式两边同时取极限, 令 $t_k \to 0$, 即得结论. $\square$

在 §9.13, 我们还将讨论由乘法交换性诱导的实对称矩阵的同时正交对角化、复正规矩阵的同时酉对角化以及实正规矩阵的同时正交标准化等问题, 它们都是本节内容的自然延续.

### §6.4 矩阵相似和可对角化的计算

本节将从 5 个方面阐述与矩阵相似和矩阵可对角化相关的计算方法.

#### 1. 相似初等变换及其应用

利用相似初等变换来讨论矩阵的相似问题是常用的方法之一. 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 容易验证以下 3 种变换都是相似变换, 称为**相似初等变换**:

(1) 对换 $\boldsymbol{A}$ 的第 $i$ 行与第 $j$ 行, 再对换第 $i$ 列与第 $j$ 列;
(2) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以非零常数 $c$, 再将第 $i$ 列乘以 $c^{-1}$;
(3) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以常数 $c$ 加到第 $j$ 行上, 再将第 $j$ 列乘以 $-c$ 加到第 $i$ 列上.

设 $\boldsymbol{A}$ 是具有相同行列分块方式的分块矩阵, 容易验证以下 3 种变换都是相似变换, 称为**相似分块初等变换**:

(1) 对换 $\boldsymbol{A}$ 的第 $i$ 分块行与第 $j$ 分块行, 再对换第 $i$ 分块列与第 $j$ 分块列;
(2) 将 $\boldsymbol{A}$ 的第 $i$ 分块行左乘非异阵 $\boldsymbol{M}$, 再将第 $i$ 分块列右乘 $\boldsymbol{M}^{-1}$;
(3) 将 $\boldsymbol{A}$ 的第 $i$ 分块行左乘矩阵 $\boldsymbol{M}$ 加到第 $j$ 分块行上, 再将第 $j$ 分块列右乘 $-\boldsymbol{M}$ 加到第 $i$ 分块列上.

容易验证: 任一相似变换都是若干次相似初等变换的复合. 下面我们给出相似初等变换应用的两个典型例题.

> [!example] 例 6.46
> 设 $\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m\}$ 是分块对角矩阵, 其中 $\boldsymbol{A}_i$ 都是方阵, 求证: $\mathrm{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m\}$ 相似于 $\mathrm{diag}\{\boldsymbol{A}_{i_1}, \boldsymbol{A}_{i_2}, \cdots, \boldsymbol{A}_{i_m}\}$, 其中 $\boldsymbol{A}_{i_1}, \boldsymbol{A}_{i_2}, \cdots, \boldsymbol{A}_{i_m}$ 是 $\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m$ 的一个排列.

> [!proof]- 证明
> 对换 $\boldsymbol{A}$ 的第 $i$ 分块行与第 $j$ 分块行, 再对换第 $i$ 分块列与第 $j$ 分块列. 这是一个相似变换, 变换的结果是将 $\boldsymbol{A}$ 的第 $(i,i)$ 分块和第 $(j,j)$ 分块对换了位置. 又任一排列都可以通过若干次对换来实现, 因此 $\mathrm{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m\}$ 和 $\mathrm{diag}\{\boldsymbol{A}_{i_1}, \boldsymbol{A}_{i_2}, \cdots, \boldsymbol{A}_{i_m}\}$ 相似. $\square$

> [!example] 例 6.47
> 设 $n$ 阶方阵 $\boldsymbol{A}, \boldsymbol{B}$ 满足 $r(\boldsymbol{A}\boldsymbol{B}\boldsymbol{A}) = r(\boldsymbol{B})$, 求证: $\boldsymbol{A}\boldsymbol{B}$ 与 $\boldsymbol{B}\boldsymbol{A}$ 相似.

> [!proof]- 证明
> 设 $\boldsymbol{P}, \boldsymbol{Q}$ 为 $n$ 阶非异阵, 使得 $\boldsymbol{P}\boldsymbol{A}\boldsymbol{Q} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, 其中 $r = r(\boldsymbol{A})$. 注意到问题的条件和结论在相抵变换: $\boldsymbol{A} \mapsto \boldsymbol{P}\boldsymbol{A}\boldsymbol{Q}, \boldsymbol{B} \mapsto \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{P}^{-1}$ 下保持不变, 故不妨从一开始就假设 $\boldsymbol{A} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 是相抵标准型. 设 $\boldsymbol{B} = \begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix}$ 为对应的分块, 则由 $r(\boldsymbol{A}\boldsymbol{B}\boldsymbol{A}) = r(\boldsymbol{B})$ 可得 $r\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{B}_{21} & \boldsymbol{B}_{22} \end{pmatrix} = r(\boldsymbol{B}_{11})$. 由此进一步可得 $r(\boldsymbol{B}_{11}, \boldsymbol{B}_{12}) = r(\boldsymbol{B}_{11})$ 以及 $r\begin{pmatrix} \boldsymbol{B}_{11} \\ \boldsymbol{B}_{21} \end{pmatrix} = r(\boldsymbol{B}_{11})$, 再由例 3.105 可知存在矩阵 $\boldsymbol{M}, \boldsymbol{N}$, 使得 $\boldsymbol{B}_{11}\boldsymbol{N} = \boldsymbol{B}_{12}, \boldsymbol{M}\boldsymbol{B}_{11} = \boldsymbol{B}_{21}$.

> 将 $\boldsymbol{A}\boldsymbol{B} = \begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{B}_{12} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 的第二分块行左乘 $\boldsymbol{N}$ 加到第一分块行, 再将第一分块列右乘 $-\boldsymbol{N}$ 加到第二分块列, 于是 $\boldsymbol{A}\boldsymbol{B}$ 相似于 $\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$. 将 $\boldsymbol{B}\boldsymbol{A} = \begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{O} \\ \boldsymbol{B}_{21} & \boldsymbol{O} \end{pmatrix}$ 的第一分块行左乘 $-\boldsymbol{M}$ 加到第二分块行, 再将第二分块列右乘 $\boldsymbol{M}$ 加到第一分块列, 于是 $\boldsymbol{B}\boldsymbol{A}$ 相似于 $\begin{pmatrix} \boldsymbol{B}_{11} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$. 因此, $\boldsymbol{A}\boldsymbol{B}$ 与 $\boldsymbol{B}\boldsymbol{A}$ 相似. $\square$


#### 2. 利用相似不变量来判定矩阵不相似

相似的矩阵具有相同的迹、行列式、特征多项式和极小多项式等, 故它们被称为矩阵相似关系下的**不变量**. 因此若两个矩阵的相似不变量不相同, 则它们必不相似. 利用这种方法来判断两个矩阵不相似是很简便的.

> [!example] 例 6.48
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵, 求证: $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}$ 必不相似于 $k\boldsymbol{I}_n$, 其中 $k$ 是非零常数.

> [!proof]- 证明
> 注意到 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}) = 0$, $\mathrm{tr}(k\boldsymbol{I}_n) = nk \neq 0$, 又矩阵的迹是相似不变量, 因此 $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}$ 和 $k\boldsymbol{I}_n$ 必不相似. $\square$

> [!example] 例 6.49
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶正交矩阵, 且线性方程组 $(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{x} = \boldsymbol{0}$ 的解空间维数是奇数, 求证: $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 必不相似.

> [!proof]- 证明
> 由假设可知 $n - r(\boldsymbol{A} + \boldsymbol{B})$ 为奇数, 再由例 9.119 可知 $|\boldsymbol{A}| = -|\boldsymbol{B}| \neq 0$, 又矩阵的行列式是相似不变量, 因此 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 必不相似. $\square$

#### 3. 过渡矩阵 $\boldsymbol{P}$ 的计算

首先, 我们介绍一下当矩阵相似于对角矩阵时求过渡矩阵的方法. 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 可逆矩阵 $\boldsymbol{P} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$ 为其列分块, 且 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$ 则 $$\boldsymbol{A}\boldsymbol{P} = \boldsymbol{P}\,\mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$ 即 $$(\boldsymbol{A}\boldsymbol{\alpha}_1, \boldsymbol{A}\boldsymbol{\alpha}_2, \cdots, \boldsymbol{A}\boldsymbol{\alpha}_n) = (\lambda_1\boldsymbol{\alpha}_1, \lambda_2\boldsymbol{\alpha}_2, \cdots, \lambda_n\boldsymbol{\alpha}_n),$$ 于是 $\boldsymbol{A}\boldsymbol{\alpha}_i = \lambda_i\boldsymbol{\alpha}_i$, 这表明 $\boldsymbol{\alpha}_i$ 就是属于特征值 $\lambda_i$ 的特征向量. 因此 $\boldsymbol{P}$ 的 $n$ 个列向量就是 $\boldsymbol{A}$ 的 $n$ 个线性无关的特征向量. 注意: 因为特征向量不唯一, 所以过渡矩阵 $\boldsymbol{P}$ 也不唯一. 另外, $\boldsymbol{P}$ 的第 $i$ 个列向量对应于 $\boldsymbol{A}$ 的第 $i$ 个特征值.


> [!example] 例 6.50
> 设三阶矩阵 $\boldsymbol{A}$ 的特征值为 $1, 1, 4$, 对应的特征向量依次为 $$(2, 1, 0)',\quad (-1, 0, 1)',\quad (0, 1, 1)',$$ 试求矩阵 $\boldsymbol{A}$.

> [!solution]- 解
> 容易验证 $\boldsymbol{A}$ 的这 3 个特征向量线性无关, 故 $\boldsymbol{A}$ 必相似于对角矩阵, 即有 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$ 根据上面的分析, 有 $$\boldsymbol{P} = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix},$$ 于是 $$\boldsymbol{A} = \begin{pmatrix} 1 & 0 & 0 \\ -3 & 7 & -3 \\ -3 & 6 & -2 \end{pmatrix}. \quad \square$$

#### 4. 可对角化判定的计算

> [!example] 例 6.51
> 已知矩阵 $\boldsymbol{A} = \begin{pmatrix} 1 & -1 & 1 \\ 2 & x & -2 \\ -3 & -3 & y \end{pmatrix}$, $\boldsymbol{B} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & z \end{pmatrix}$ 相似.
> (1) 求 $x, y, z$ 的值;
> (2) 求一个满足 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \boldsymbol{B}$ 的可逆矩阵 $\boldsymbol{P}$.

> [!solution]- 解
> (1) 显然 $z \neq 2$, 否则由 $\boldsymbol{A}$ 相似于 $2\boldsymbol{I}_3$ 可知 $\boldsymbol{A} = 2\boldsymbol{I}_3$, 矛盾. 于是 $\boldsymbol{A}$ 的特征值为 $2$ (2 重), $z$ (1 重). 因为 $\boldsymbol{A}$ 可对角化, 所以特征值 $2$ 的几何重数也等于 2, 故有 $$r(\boldsymbol{A} - 2\boldsymbol{I}_3) = r\begin{pmatrix} -1 & -1 & 1 \\ 2 & x-2 & -2 \\ -3 & -3 & y-2 \end{pmatrix} = 1,$$ 由此可得 $x = 4$, $y = 5$. 再由矩阵的迹等于特征值之和可得 $10 = \mathrm{tr}(\boldsymbol{A}) = 4 + z$, 故 $z = 6$.


> (2) 通过计算可得: 特征值 $2$ 的两个线性无关的特征向量为 $\boldsymbol{\alpha}_1 = (-1, 1, 0)'$, $\boldsymbol{\alpha}_2 = (1, 0, 1)'$; 特征值 $6$ 的特征向量为 $\boldsymbol{\alpha}_3 = (1, -2, 3)'$. 因此 $$\boldsymbol{P} = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & 3 \end{pmatrix}. \quad \square$$

> [!example] 例 6.52
> 设 $\boldsymbol{A} = \begin{pmatrix} 3 & 2 & -2 \\ -k & -1 & k \\ 4 & 2 & -3 \end{pmatrix}$, 当 $k$ 为何值时, 存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 是对角矩阵? 求出 $\boldsymbol{P}$ 和对角矩阵.

> [!solution]- 解
> 经计算可得 $|\lambda\boldsymbol{I}_3 - \boldsymbol{A}| = (\lambda - 1)(\lambda + 1)^2$, 因此 $\boldsymbol{A}$ 的特征值为 $1$ (1 重), $-1$ (2 重). 对单特征值 $1$, 其几何重数与代数重数必相等; 因此要使 $\boldsymbol{A}$ 可对角化, 特征值 $-1$ 的几何重数必须等于 $2$ 才行, 故有 $$r(\boldsymbol{A} + \boldsymbol{I}_3) = r\begin{pmatrix} 4 & 2 & -2 \\ -k & 0 & k \\ 4 & 2 & -2 \end{pmatrix} = 1,$$ 于是 $k = 0$. 通过计算可得: 特征值 $1$ 的特征向量为 $(1, 0, 1)'$; 特征值 $-1$ 的两个线性无关的特征向量为 $(-1, 2, 0)', (1, 0, 2)'$. 因此 $$\boldsymbol{P} = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 2 \end{pmatrix}, \quad \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix}. \quad \square$$

#### 5. 可对角化矩阵的应用

> [!example] 例 6.53
> 设矩阵 $\boldsymbol{A} = \begin{pmatrix} 1 & -1 & 1 \\ 2 & 4 & -2 \\ -3 & -3 & 5 \end{pmatrix}$, 求 $\boldsymbol{A}^n$.

> [!solution]- 解
> 本题中的矩阵是一个可对角化矩阵, 因此可以使用下列方法: 先求出可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \boldsymbol{B}$ 是对角矩阵. 因为对角矩阵的幂很容易求出, 故由 $\boldsymbol{A}^n = \boldsymbol{P}\boldsymbol{B}^n\boldsymbol{P}^{-1}$ 即可得到结果.

> 经计算可得 $|\lambda\boldsymbol{I}_3 - \boldsymbol{A}| = (\lambda - 2)^2(\lambda - 6)$, 因此 $\boldsymbol{A}$ 的特征值为 $2$ (2 重), $6$ (1 重). 通过计算可得: 特征值 $2$ 有两个线性无关的特征向量 $(-1, 1, 0)', (1, 0, 1)'$; 特征值 $6$ 的特征向量为 $(1, -1, 3)'$. 因此 $$\boldsymbol{P} = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 0 & -1 \\ 0 & 1 & 3 \end{pmatrix}, \quad \boldsymbol{B} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 6 \end{pmatrix}.$$ 再由 $\boldsymbol{A}^n = \boldsymbol{P}\boldsymbol{B}^n\boldsymbol{P}^{-1}$ 即可求出 $\boldsymbol{A}^n$. 请读者自行验证计算细节. $\square$


> [!example] 例 6.54
> 设 Fibonacci 数列 $\{a_n\}_{n=0}^{\infty}$ 满足: $a_0 = a_1 = 1$, 递推关系 $a_{n+1} = a_n + a_{n-1}\ (n \geq 1)$, 试求 $\{a_n\}$ 的通项公式.

> [!solution]- 解
> 首先将 Fibonacci 数列的递推关系写成矩阵形式: $$\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} a_n \\ a_{n-1} \end{pmatrix}.$$ 记 $\boldsymbol{A} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, 则 $\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = \boldsymbol{A}^n \begin{pmatrix} a_1 \\ a_0 \end{pmatrix} = \boldsymbol{A}^n \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. 下面利用矩阵可对角化来求 $\boldsymbol{A}^n$. 经计算可得 $\boldsymbol{A}$ 的特征多项式为 $\lambda^2 - \lambda - 1$, 特征值为 $\lambda_1 = \frac{1 + \sqrt{5}}{2}$, $\lambda_2 = \frac{1 - \sqrt{5}}{2}$. 对应的特征向量分别为 $(\lambda_1, 1)'$ 和 $(\lambda_2, 1)'$. 因此 $$\boldsymbol{A}^n = \boldsymbol{P} \begin{pmatrix} \lambda_1^n & 0 \\ 0 & \lambda_2^n \end{pmatrix} \boldsymbol{P}^{-1},$$ 其中 $\boldsymbol{P} = \begin{pmatrix} \lambda_1 & \lambda_2 \\ 1 & 1 \end{pmatrix}$. 经计算可得 Fibonacci 数列的通项公式: $$a_n = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} - \left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right]. \quad \square$$


### §6.5 可对角化的判定 (一)

矩阵可对角化是高等代数课程中最重要的问题之一, 在 $§$5.7 中我们曾经给出过一个矩阵可对角化的充要条件: $n$ 阶矩阵 $A$ 可对角化当且仅当 $A$ 有 $n$ 个线性无关的特征向量 (也就是 $A$ 的完全特征向量系). 下面我们将从各种不同的角度给出矩阵可对角化的 7 种判定准则, 并给出典型的例题来帮助读者掌握这些判定方法.

**方法 1: 极小多项式无重根**

由 $§$5.7 可知, $n$ 阶矩阵 $A$ 可对角化当且仅当 $A$ 的极小多项式 $m(λ)$ 无重根. 这一方法经常用来证明某一类矩阵可对角化.

> [!example] 例 6.55
> 设 $n$ 阶矩阵 $A$ 满足 $A^2 = A$, 求证: $A$ 可对角化.

> [!proof]- 证明
> 由 $A^2 = A$ 可知, $A$ 适合多项式 $x^2 - x = x(x-1)$, 因此 $A$ 的极小多项式 $m(x)$ 整除 $x(x-1)$. 因为 $x(x-1)$ 无重根, 所以 $m(x)$ 也无重根, 从而 $A$ 可对角化. $\square$

> [!example] 例 6.56
> 设 $n$ 阶矩阵 $A$ 满足 $A^k = A$ (其中 $k > 1$ 为正整数), 求证: $A$ 在复数域上可对角化.

> [!proof]- 证明
> 由 $A^k = A$ 可知, $A$ 适合多项式 $x^k - x = x(x^{k-1} - 1)$. 因为 $x(x^{k-1} - 1)$ 在复数域上无重根, 所以 $A$ 的极小多项式 $m(x)$ 也无重根, 从而 $A$ 在复数域上可对角化. $\square$

> [!example] 例 6.57
> 设 $φ$ 是 $ℂ$ 上 $n$ 维线性空间 $V$ 上的线性变换, 且存在 $n$ 维矩阵 $A$ 使得 $φ(α) = Aα$ 对任意的 $α ∈ V$ 成立. 若 $n$ 阶矩阵 $A$ 满足 $A^2 - 3A + 2I_n = 0$, 求证: $φ$ 可对角化.

> [!proof]- 证明
> 由条件可知, $φ$ 适合多项式 $x^2 - 3x + 2 = (x-1)(x-2)$, 因此 $φ$ 的极小多项式 $m(x)$ 整除 $(x-1)(x-2)$. 因为 $(x-1)(x-2)$ 无重根, 所以 $m(x)$ 也无重根, 从而 $φ$ 可对角化. $\square$


**方法 2: 有 $n$ 个不同的特征值**

若 $n$ 阶矩阵 $A$ 有 $n$ 个不同的特征值, 则 $A$ 可对角化. 这是一个矩阵可对角化的充分条件 (但不是必要条件). 

> [!example] 例 6.58
> 设 $A$ 为 $n$ 阶矩阵, 若 $A$ 有 $n$ 个不同的特征值, 则 $A$ 可对角化.

> [!proof]- 证明
> 这是定理 6.5 的直接推论. $\square$

**方法 3: 全空间等于特征子空间的直和**

由 $§$5.7 可知, $n$ 阶矩阵 $A$ 可对角化当且仅当全空间 $V$ 等于 $A$ 的特征子空间的直和, 即 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$, 其中 $V_i$ 是特征值 $\lambda_i$ 的特征子空间.

> [!example] 例 6.59
> 设 $A$ 为 $n$ 阶矩阵, 若 $r(A) = r$ 且 $A^2 = A$, 求证: $A$ 相似于分块对角矩阵 $\mathrm{diag}{I_r, 0}$.

> [!proof]- 证明
> 由例 6.55 可知 $A$ 可对角化. 又 $A$ 的特征值适合 $x^2 - x = 0$, 故特征值只能是 $0$ 或 $1$. 由 $r(A) = r$ 可知特征值 $1$ 的几何重数为 $r$, 特征值 $0$ 的几何重数为 $n-r$. 因此 $A$ 相似于 $\mathrm{diag}{I_r, \boldsymbol{O}}$. $\square$

> [!example] 例 6.60
> 设 $A$ 为 $n$ 阶幂等矩阵, 即 $A^2 = A$, 且 $r(A) = r$, 求证: $|A + I_n| = 2^r$.

> [!proof]- 证明
> 由例 6.59 可知, $A$ 相似于 $\mathrm{diag}{I_r, \boldsymbol{O}}$, 即存在可逆矩阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}A\boldsymbol{P} = \mathrm{diag}{I_r, \boldsymbol{O}}$. 因此 $$|A + I_n| = |\boldsymbol{P}^{-1}(A + I_n)\boldsymbol{P}| = |\mathrm{diag}{2I_r, I_{n-r}}| = 2^r. \quad \square$$


> [!example] 例 6.61
> 设 $A$ 为 $n$ 阶对合矩阵, 即 $A^2 = I_n$, 求证: $A$ 可对角化, 且 $A$ 相似于分块对角矩阵 $\mathrm{diag}{I_r, -I_{n-r}}$, 其中 $r = r(I_n + A)$.

> [!proof]- 证明
> 由 $A^2 = I_n$ 可知, $A$ 适合多项式 $x^2 - 1 = (x-1)(x+1)$, 因此 $A$ 的极小多项式无重根, 从而 $A$ 可对角化. 又 $A$ 的特征值只能是 $1$ 或 $-1$. 设特征值 $1$ 的几何重数为 $r$, 则特征值 $-1$ 的几何重数为 $n-r$. 注意到 $r(I_n + A) = r$ (因为 $I_n + A$ 的特征值为 $2$ (重数为 $r$) 和 $0$ (重数为 $n-r$)), 故 $A$ 相似于 $\mathrm{diag}{I_r, -I_{n-r}}$. $\square$

> [!example] 例 6.62
> 设 $A$ 为 $n$ 阶循环矩阵:
> $$A = \begin{pmatrix} a_1 & a_2 & a_3 & \cdots & a_n \\ a_n & a_1 & a_2 & \cdots & a_{n-1} \\ a_{n-1} & a_n & a_1 & \cdots & a_{n-2} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a_2 & a_3 & a_4 & \cdots & a_1 \end{pmatrix},$$
> 求证: $A$ 在复数域上可对角化.

> [!proof]- 证法 1
> 设 $f(x) = a_1 + a_2x + a_3x^2 + \cdots + a_nx^{n-1}$, $\omega_k = e^{\frac{2k\pi i}{n}}$ ($k = 0, 1, \cdots, n-1$) 为 $n$ 次单位根. 令 $$\boldsymbol{\alpha}_k = (1, \omega_k, \omega_k^2, \cdots, \omega_k^{n-1})',$$ 则直接计算可得 $A\boldsymbol{\alpha}_k = f(\omega_k)\boldsymbol{\alpha}_k$, 即 $\boldsymbol{\alpha}_k$ 是 $A$ 属于特征值 $f(\omega_k)$ 的特征向量. 因为 Vandermonde 行列式 $\det(\omega_k^j) \neq 0$, 所以 $\boldsymbol{\alpha}_0, \boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_{n-1}$ 线性无关, 从而 $A$ 有 $n$ 个线性无关的特征向量, 故 $A$ 可对角化. $\square$

> [!proof]- 证法 2
> 由 $§$2.4 可知, 任一循环矩阵都可用 Fourier 矩阵对角化. 具体地, 设 $\boldsymbol{F}$ 为 $n$ 阶 Fourier 矩阵, 则 $\boldsymbol{F}^{-1}A\boldsymbol{F}$ 为对角矩阵, 其对角元为 $f(\omega_0), f(\omega_1), \cdots, f(\omega_{n-1})$. $\square$

> [!example] 例 6.63
> 设 $n$ 阶矩阵 $A$ 的极小多项式为 $m(\lambda)$, 求证: $A$ 的特征值 $\lambda_0$ 是 $m(\lambda)$ 的根当且仅当 $\lambda_0$ 是 $A$ 的特征多项式的根. 特别地, $m(\lambda)$ 的根就是 $A$ 的所有不同特征值.

> [!proof]- 证明
> 由 Cayley-Hamilton 定理可知 $m(\lambda) \mid f(\lambda)$, 因此 $m(\lambda)$ 的根必是 $f(\lambda)$ 的根. 反之, 若 $\lambda_0$ 是 $f(\lambda)$ 的根, 即 $\lambda_0$ 是 $A$ 的特征值, 设 $\boldsymbol{\alpha}$ 是对应的特征向量, 则 $m(A)\boldsymbol{\alpha} = m(\lambda_0)\boldsymbol{\alpha}$. 因为 $m(A) = 0$ 且 $\boldsymbol{\alpha} \neq \boldsymbol{0}$, 所以 $m(\lambda_0) = 0$, 即 $\lambda_0$ 是 $m(\lambda)$ 的根. $\square$


> [!remark] 注
> 由例 6.63 可知, $n$ 阶矩阵 $A$ 的极小多项式 $m(\lambda)$ 可由 $A$ 的特征多项式 $f(\lambda)$ 和 $A$ 的所有不同特征值来确定. 具体地, 若 $A$ 的所有不同特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_k$, 则 $m(\lambda) = (\lambda - \lambda_1)^{r_1}(\lambda - \lambda_2)^{r_2}\cdots(\lambda - \lambda_k)^{r_k}$, 其中 $r_i$ 是 $A$ 的 Jordan 标准型中属于特征值 $\lambda_i$ 的 Jordan 块的最大阶数.

> [!example] 例 6.64
> 设 $A$ 为 $n$ 阶矩阵, 且 $A$ 的特征多项式为 $f(\lambda) = (\lambda - 1)^n$, 求证: $A$ 可对角化当且仅当 $A = I_n$.

> [!proof]- 证明
> 若 $A = I_n$, 则 $A$ 显然可对角化. 反之, 若 $A$ 可对角化, 则 $A$ 相似于 $\mathrm{diag}{1, 1, \cdots, 1} = I_n$, 即存在可逆矩阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}A\boldsymbol{P} = I_n$, 故 $A = I_n$. $\square$

> [!example] 例 6.65
> 设 $A$ 为 $n$ 阶矩阵, 满足 $A^2 - 3A + 2I_n = 0$, 求证: $A$ 可对角化.

> [!proof]- 证明
> 由条件可知 $A$ 适合多项式 $x^2 - 3x + 2 = (x-1)(x-2)$, 因此 $A$ 的极小多项式 $m(x)$ 整除 $(x-1)(x-2)$. 因为 $(x-1)(x-2)$ 无重根, 所以 $m(x)$ 也无重根, 从而 $A$ 可对角化. $\square$

**方法 4: 有完全的特征向量系**

$n$ 阶矩阵 $A$ 可对角化当且仅当 $A$ 有完全的特征向量系, 即任一特征值的代数重数等于其几何重数. 无论从计算的层面上看 (如例 6.51 和例 6.52), 还是从证明的层面上看, 这都是一个十分实用的判定可对角化的方法. 下面我们来看几道典型的例题.

> [!example] 例 6.66
> 若矩阵 $A, \boldsymbol{B}$ 有完全的特征向量系, 求证: $\begin{pmatrix} A & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$ 也有完全的特征向量系.

> [!proof]- 证明
> 因为 $A, \boldsymbol{B}$ 有完全的特征向量系, 故相似于对角矩阵. 设 $\boldsymbol{P}^{-1}A\boldsymbol{P}$ 和 $\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q}$ 是对角矩阵, 则 $$\begin{pmatrix} \boldsymbol{P} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q} \end{pmatrix}^{-1} \begin{pmatrix} A & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix} \begin{pmatrix} \boldsymbol{P} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q} \end{pmatrix} = \begin{pmatrix} \boldsymbol{P}^{-1}A\boldsymbol{P} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} \end{pmatrix}$$ 是对角矩阵. 因此 $\begin{pmatrix} A & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$ 有完全的特征向量系. $\square$


> [!example] 例 6.67
> 设 $n$ 阶矩阵 $A = \begin{pmatrix} A_{11} & A_{12} \\ \boldsymbol{O} & A_{22} \end{pmatrix}$, 其中 $A_{11}, A_{22}$ 为方阵.
> (1) 若 $A$ 可对角化, 求证: $A_{11}$ 和 $A_{22}$ 都可对角化;
> (2) 设 $A_{11}$ 和 $A_{22}$ 都可对角化, 且 $|\lambdaI - A_{11}|$ 和 $|\lambdaI - A_{22}|$ 互素, 求证: $A$ 可对角化.

> [!proof]- 证明 (1)
> 设 $\lambda_0$ 是 $A_{11}$ 的特征值, $\boldsymbol{\alpha}$ 是对应的特征向量, 则 $A_{11}\boldsymbol{\alpha} = \lambda_0\boldsymbol{\alpha}$. 令 $\boldsymbol{\beta} = \begin{pmatrix} \boldsymbol{\alpha} \\ \boldsymbol{0} \end{pmatrix}$, 则 $$A\boldsymbol{\beta} = \begin{pmatrix} A_{11} & A_{12} \\ \boldsymbol{O} & A_{22} \end{pmatrix} \begin{pmatrix} \boldsymbol{\alpha} \\ \boldsymbol{0} \end{pmatrix} = \begin{pmatrix} \lambda_0\boldsymbol{\alpha} \\ \boldsymbol{0} \end{pmatrix} = \lambda_0\boldsymbol{\beta}.$$ 因此 $A_{11}$ 的任一特征值都是 $A$ 的特征值, 且 $A_{11}$ 的线性无关特征向量可扩充为 $A$ 的线性无关特征向量. 由 $A$ 可对角化可知 $A_{11}$ 也可对角化. 同理 $A_{22}$ 也可对角化. $\square$

> [!proof]- 证明 (2)
> 由条件可知 $A_{11}, A_{22}$ 有完全特征向量系. 设 $\lambda_1, \cdots, \lambda_s$ 是 $A_{11}$ 的所有不同特征值, $\mu_1, \cdots, \mu_t$ 是 $A_{22}$ 的所有不同特征值, 则 ${\lambda_i} \cap {\mu_j} = \emptyset$. 对 $A$ 的任一特征值 $\lambda_0$, 若 $\lambda_0 = \lambda_i$ (某个 $i$), 则 $\lambda_0$ 不是 $A_{22}$ 的特征值, 故 $\lambda_0I - A_{22}$ 非异. 由分块初等变换可得 $$r(\lambda_0I - A) = r(\lambda_0I - A_{11}) + r(\lambda_0I - A_{22}) = r(\lambda_0I - A_{11}) + n_2,$$ 其中 $n_2$ 是 $A_{22}$ 的阶数. 因此 $\lambda_0$ 作为 $A$ 的特征值, 其几何重数等于 $n - r(\lambda_0I - A) = n_1 - r(\lambda_0I - A_{11})$, 这恰好等于 $\lambda_0$ 作为 $A_{11}$ 的特征值的几何重数. 由 $A_{11}$ 有完全特征向量系可知此几何重数等于 $\lambda_0$ 作为 $A_{11}$ 的特征值的代数重数. 又 $|\lambdaI - A| = |\lambdaI - A_{11}||\lambdaI - A_{22}|$, 故 $\lambda_0$ 作为 $A$ 的特征值的代数重数也等于其作为 $A_{11}$ 的特征值的代数重数. 因此 $A$ 有完全特征向量系, 从而可对角化. $\square$


> [!example] 例 6.68
> 设 $n$ 阶矩阵 $A$ 满足 $A^2 = I_n$, 求证: $A$ 可对角化.

> [!proof]- 证明
> 由 $A^2 = A$ 可知 $A$ 适合 $x^2 - x = x(x-1)$, 因为 $x(x-1)$ 无重根, 故 $A$ 的极小多项式也无重根, 从而 $A$ 可对角化. $\square$

> [!example] 例 6.69
> 设 $φ$ 为复线性空间 $V$ 上的线性变换, $φ$ 在 $V$ 的某一组基下的表示矩阵为 $A$. 求证: $φ$ 可对角化当且仅当 $V$ 可分解为 $φ$ 的特征子空间的直和.

> [!proof]- 证明
> 若 $φ$ 可对角化, 则 $A$ 有完全特征向量系, 设 $\lambda_1, \cdots, \lambda_k$ 为 $A$ 的所有不同特征值, $V_i$ 为特征值 $\lambda_i$ 的特征子空间, 则 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$.
> 反之, 若 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$, 取各 $V_i$ 的基合起来构成 $V$ 的基, 则 $φ$ 在此基下的表示矩阵为对角矩阵, 从而 $φ$ 可对角化. $\square$

**方法 5: 不变子空间的直和分解**

若 $V$ 可分解为 $n$ 个一维 $φ-$不变子空间的直和, 则 $φ$ 可对角化. 这是一个矩阵可对角化的充要条件.

> [!example] 例 6.70
> 设 $φ$ 为 $n$ 维线性空间 $V$ 上的线性变换, $φ$ 可对角化当且仅当 $V$ 可分解为 $n$ 个一维 $φ-$不变子空间的直和.

> [!proof]- 证明
> 若 $φ$ 可对角化, 则 $V$ 有一组由特征向量构成的基 $\boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_n$. 令 $V_i = L(\boldsymbol{\alpha}_i)$, 则 $V_i$ 是一维 $φ-$不变子空间且 $V = V_1 \oplus \cdots \oplus V_n$.
> 反之, 若 $V = V_1 \oplus \cdots \oplus V_n$, 其中 $V_i$ 是一维 $φ-$不变子空间, 取 $\boldsymbol{\alpha}_i \in V_i$ 非零, 则 $\boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_n$ 构成 $V$ 的基, 且 $φ(\boldsymbol{\alpha}_i) \in V_i = L(\boldsymbol{\alpha}_i)$, 即 $φ(\boldsymbol{\alpha}_i) = \lambda_i\boldsymbol{\alpha}_i$, 故 $φ$ 在此基下的矩阵为对角矩阵. $\square$


**方法 6: 利用秩的条件**

利用矩阵的秩来判定可对角化也是一种常用方法. 例如, 若 $n$ 阶矩阵 $A$ 满足 $r(\lambda_0I_n - A) = n - k$, 则特征值 $\lambda_0$ 的几何重数为 $k$.

> [!example] 例 6.71
> 设 $A$ 为 $n$ 阶矩阵, $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $A$ 的所有不同特征值, 求证: $A$ 可对角化当且仅当 $$r(\lambda_1I - A) + r(\lambda_2I - A) + \cdots + r(\lambda_kI - A) = n(k-1).$$

> [!proof]- 证明
> 设特征值 $\lambda_i$ 的代数重数为 $n_i$, 则 $n_1 + n_2 + \cdots + n_k = n$. $A$ 可对角化当且仅当每个特征值的几何重数等于代数重数, 即 $n - r(\lambda_iI - A) = n_i$ 对每个 $i$ 成立. 这等价于 $$\sum_{i=1}^k r(\lambda_iI - A) = \sum_{i=1}^k (n - n_i) = kn - n = n(k-1). \quad \square$$

**方法 7: 利用 Jordan 标准型**

矩阵可对角化当且仅当其 Jordan 标准型中每个 Jordan 块都是一阶的. 这一方法在理论证明中经常使用.

> [!example] 例 6.72
> 设 $A$ 为 $n$ 阶矩阵, 求证: $A$ 可对角化当且仅当对每个特征值 $\lambda_i$, 其代数重数等于几何重数.

> [!proof]- 证明
> $A$ 的 Jordan 标准型中, 特征值 $\lambda_i$ 对应的 Jordan 块的个数等于 $\lambda_i$ 的几何重数, 而所有 Jordan 块的阶数之和等于 $\lambda_i$ 的代数重数. 因此代数重数等于几何重数当且仅当每个 Jordan 块都是一阶的, 即 $A$ 可对角化. $\square$

> [!remark] 注
> 上述 7 种方法各有优缺点, 在不同场合下应灵活选用. 方法 1 (极小多项式无重根) 和方法 2 ($n$ 个不同特征值) 是最常用的判定方法. 方法 4 (完全特征向量系) 在计算中非常实用. 方法 7 (Jordan 标准型) 在理论证明中经常使用.


> [!example] 例 6.73
> 设 $A$ 为 $n$ 阶矩阵, 若 $A$ 有 $k$ 个不同特征值, 且每个特征值的几何重数都等于代数重数, 求证: $A$ 可对角化.

> [!proof]- 证明
> 这是方法 4 的直接推论. $\square$

> [!example] 例 6.74
> 设 $A$ 为 $n(n > 1)$ 阶矩阵, 秩为 1, 求证: $A$ 可对角化的充要条件是 $\mathrm{tr}(A) \neq 0$.

> [!proof]- 证明
> 由 $r(A) = 1$ 可知, 存在非零列向量 $\boldsymbol{\alpha}, \boldsymbol{\beta}$, 使得 $A = \boldsymbol{\alpha}\boldsymbol{\beta}'$, 于是由迹的交换性可得 $\mathrm{tr}(A) = \mathrm{tr}(\boldsymbol{\alpha}\boldsymbol{\beta}') = \mathrm{tr}(\boldsymbol{\beta}'\boldsymbol{\alpha}) = \boldsymbol{\beta}'\boldsymbol{\alpha}$.

> 证法 1: 由例 6.21 及其可对角化的讨论可知本题结论成立.

> 证法 2: 注意到 $A^2 = (\boldsymbol{\alpha}\boldsymbol{\beta}')(\boldsymbol{\alpha}\boldsymbol{\beta}') = \boldsymbol{\alpha}(\boldsymbol{\beta}'\boldsymbol{\alpha})\boldsymbol{\beta}' = (\boldsymbol{\beta}'\boldsymbol{\alpha})\boldsymbol{\alpha}\boldsymbol{\beta}' = \mathrm{tr}(A)A$, 故 $A$ 适合多项式 $x^2 - \mathrm{tr}(A)x$. 若 $\mathrm{tr}(A) \neq 0$, 则由例 6.66 可知 $A$ 可对角化; 若 $\mathrm{tr}(A) = 0$, 则 $A$ 是幂零矩阵, 又 $A \neq \boldsymbol{O}$, 故由例 6.73 (1) 可知 $A$ 不可对角化. $\square$


> [!example] 例 6.75
> 设 $A$ 为 $n$ 阶矩阵, 若 $A$ 适合非零多项式 $g(x)$ 且 $g(x)$ 无重根, 求证: $A$ 在复数域上可对角化.

> [!proof]- 证明
> 因为 $A$ 适合 $g(x)$, 所以 $A$ 的极小多项式 $m(x) \mid g(x)$. 又 $g(x)$ 无重根, 故 $m(x)$ 也无重根, 从而 $A$ 可对角化. $\square$

> [!example] 例 6.76
> 设 $A$ 为 $n$ 阶幂零矩阵, 即存在正整数 $k$ 使得 $A^k = \boldsymbol{O}$, 求证: $A$ 不可对角化 (除非 $A = \boldsymbol{O}$).

> [!proof]- 证明
> 若 $A \neq \boldsymbol{O}$ 且 $A$ 可对角化, 则 $A$ 相似于对角矩阵 $\boldsymbol{\Lambda}$. 由 $A^k = \boldsymbol{O}$ 得 $\boldsymbol{\Lambda}^k = \boldsymbol{O}$, 从而 $\boldsymbol{\Lambda} = \boldsymbol{O}$, 即 $A = \boldsymbol{O}$, 矛盾. $\square$

> [!example] 例 6.77
> 设 $A$ 为 $n$ 阶矩阵, 其特征多项式为 $f(\lambda) = (\lambda - 1)^n$ 且 $A$ 可对角化, 求证: $A = I_n$.

> [!proof]- 证明
> 由例 6.64 即得. $\square$

> [!example] 例 6.78
> 设 $A$ 为 $n$ 阶矩阵, 其特征多项式为 $f(\lambda) = (\lambda - a)^n$ 且 $A$ 可对角化, 求证: $A = aI_n$.

> [!proof]- 证明
> 类似于例 6.64 的证明, $A$ 相似于 $aI_n$, 故 $A = aI_n$. $\square$

> [!corollary] 推论
> 若 $n$ 阶矩阵 $A$ 的特征值全为 1 且 $A$ 可对角化, 则 $A = I_n$. 若 $n$ 阶矩阵 $A$ 的特征值全为 0 且 $A$ 可对角化, 则 $A = \boldsymbol{O}$.


> [!example] 例 6.79
> 设 $A$ 为 $n$ 阶矩阵, 满足 $A^m = I_n$ (其中 $m > 1$ 为正整数), 求证: $A$ 在复数域上可对角化, 且其特征值为 $m$ 次单位根.

> [!proof]- 证明
> 由 $A^m = I_n$ 可知 $A$ 适合 $x^m - 1$. 因为 $x^m - 1$ 在复数域上无重根, 所以 $A$ 的极小多项式无重根, 从而 $A$ 在复数域上可对角化. 又 $A$ 的特征值适合 $x^m - 1 = 0$, 故为 $m$ 次单位根. $\square$

> [!example] 例 6.80
> 设 $A$ 为 $n$ 阶实矩阵, 满足 $A^2 + A + I_n = \boldsymbol{O}$, 求证: $n$ 为偶数, 且 $A$ 在实数域上不可对角化 (若 $n > 0$).

> [!proof]- 证明
> 由 $A^2 + A + I_n = \boldsymbol{O}$ 可知 $A$ 适合 $x^2 + x + 1$. 因为 $x^2 + x + 1$ 在实数域上不可约, 所以 $A$ 的极小多项式为 $x^2 + x + 1$, 其次数为 2. 若 $A$ 在实数域上可对角化, 则 $A$ 的极小多项式在实数域上可分解为不同一次因式的乘积, 但 $x^2 + x + 1$ 在实数域上不可约, 矛盾. 因此 $A$ 在实数域上不可对角化. 又 $A$ 的特征多项式的次数为 $n$, 且 $A$ 的极小多项式次数为 2, 故由 $2 \mid n$ 可知 $n$ 为偶数. $\square$


> [!example] 例 6.81
> 设 $A$ 为 $n$ 阶矩阵, 且 $A$ 的特征值都是 $A$ 的极小多项式的单根, 求证: $A$ 在复数域上可对角化.

> [!proof]- 证明
> 由条件可知 $A$ 的极小多项式无重根, 因此 $A$ 在复数域上可对角化. $\square$

> [!example] 例 6.82
> 设 $A$ 为 $n$ 阶矩阵, 且 $A$ 的特征多项式等于其极小多项式, 求证: 在复数域上, $A$ 的任一特征值 $\lambda_0$ 的几何重数为 1.

> [!proof]- 证明
> 设 $A$ 的特征多项式为 $f(\lambda) = (\lambda - \lambda_1)^{n_1}(\lambda - \lambda_2)^{n_2}\cdots(\lambda - \lambda_k)^{n_k}$, 其中 $\lambda_1, \cdots, \lambda_k$ 互不相同. 由条件, $A$ 的极小多项式 $m(\lambda) = f(\lambda)$. 对特征值 $\lambda_i$, 其代数重数为 $n_i$, 而 Jordan 标准型中属于 $\lambda_i$ 的 Jordan 块的最大阶数为 $n_i$, 故只有一个 Jordan 块. 因此 $\lambda_i$ 的几何重数为 1. $\square$

> [!example] 例 6.83
> 设 $A$ 为 $n$ 阶矩阵, $A$ 的特征多项式为 $f(\lambda) = |\lambdaI - A|$, $g(x)$ 为任一多项式, 求证: $g(A)$ 可逆的充要条件是 $(f(x), g(x)) = 1$.

> [!proof]- 证明
> 设 $\lambda_1, \cdots, \lambda_n$ 是 $A$ 的特征值, 则 $g(\lambda_1), \cdots, g(\lambda_n)$ 是 $g(A)$ 的特征值. $g(A)$ 可逆当且仅当所有 $g(\lambda_i) \neq 0$, 即 $f(x)$ 与 $g(x)$ 无公共根, 这等价于 $(f(x), g(x)) = 1$. $\square$


> [!example] 例 6.84
> 设 $A$ 为 $n$ 阶矩阵, $f(x)$ 为 $A$ 的特征多项式, $g(x)$ 为任一多项式, $h(x)$ 为 $g(x)$ 的因式, 即 $g(x) = h(x)q(x)$. 若 $(h(x), f(x)) = 1$, 求证: $r(g(A)) = r(q(A))$.

> [!proof]- 证明
> 由例 6.83 可知 $h(A)$ 可逆. 因此 $r(g(A)) = r(h(A)q(A)) = r(q(A))$. $\square$

> [!example] 例 6.85
> 设 $A$ 为 $n$ 阶矩阵, $f(x)$ 和 $g(x)$ 为两个互素的多项式, 且 $A$ 适合 $f(A)g(A) = \boldsymbol{O}$, 求证: $$r(f(A)) + r(g(A)) = n.$$

> [!proof]- 证明
> 由 $(f(x), g(x)) = 1$ 可知, 存在多项式 $u(x), v(x)$ 使得 $u(x)f(x) + v(x)g(x) = 1$. 代入 $A$ 得 $$u(A)f(A) + v(A)g(A) = I_n.$$ 由 Sylvester 秩不等式, $$r(u(A)f(A)) + r(v(A)g(A)) \geq r(A_n) = n.$$ 又 $r(u(A)f(A)) \leq r(f(A))$, $r(v(A)g(A)) \leq r(g(A))$, 故 $$r(f(A)) + r(g(A)) \geq n.$$ 另一方面, 由 $f(A)g(A) = \boldsymbol{O}$ 可知 $r(f(A)) + r(g(A)) \leq n$. 因此 $r(f(A)) + r(g(A)) = n$. $\square$


> [!example] 例 6.86
> 设 $A$ 为 $n$ 阶矩阵, 求证: $A$ 可对角化当且仅当对 $A$ 的任一特征值 $\lambda_0$, 都有 $$r((\lambda_0I - A)^2) = r(\lambda_0I - A).$$

> [!proof]- 证明
> 若 $A$ 可对角化, 则对任一特征值 $\lambda_0$, $\lambda_0I - A$ 也相似于对角矩阵, 故 $(\lambda_0I - A)^2$ 与 $\lambda_0I - A$ 有相同的秩.
> 反之, 若对任一特征值 $\lambda_0$ 都有 $r((\lambda_0I - A)^2) = r(\lambda_0I - A)$, 则对 $\lambda_0I - A$ 的 Jordan 块 $J_k(0)$ (即特征值为 0 的 $k$ 阶 Jordan 块), 有 $r(J_k(0)^2) = r(J_k(0))$. 当 $k \geq 2$ 时, $J_k(0)^2$ 的秩为 $k-2$, 而 $J_k(0)$ 的秩为 $k-1$, 两者不相等. 因此所有 Jordan 块都是一阶的, 即 $A$ 可对角化. $\square$

> [!example] 例 6.87
> 设 $A$ 为 $n$ 阶复矩阵, $f(x)$ 为 $A$ 的特征多项式, $g(x)$ 为任一复系数多项式. 若 $g(A)$ 可逆, 求证: $g(x)$ 与 $f(x)$ 互素.

> [!proof]- 证明 (反证法)
> 若 $(f(x), g(x)) \neq 1$, 则它们有公共根 $\lambda_0$. $\lambda_0$ 是 $A$ 的特征值, 故存在非零向量 $\boldsymbol{\alpha}$ 使 $A\boldsymbol{\alpha} = \lambda_0\boldsymbol{\alpha}$. 于是 $g(A)\boldsymbol{\alpha} = g(\lambda_0)\boldsymbol{\alpha} = \boldsymbol{0}$, 与 $g(A)$ 可逆矛盾. $\square$


> [!example] 例 6.88
> 设 $A$ 为 $m$ 阶矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵, 矩阵方程 $A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B} = \boldsymbol{C}$ 有唯一解的充要条件是 $A$ 与 $\boldsymbol{B}$ 没有公共的特征值.

> [!proof]- 证明
> 定义线性变换 $\varphi: \mathbb{C}^{m \times n} \to \mathbb{C}^{m \times n}$ 为 $\varphi(\boldsymbol{X}) = A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B}$. 下面求 $\varphi$ 的特征值. 设 $A$ 的特征值为 $\lambda_1, \cdots, \lambda_m$, $\boldsymbol{B}$ 的特征值为 $\mu_1, \cdots, \mu_n$. 取 $A$ 的特征向量 $\boldsymbol{\alpha}$ ($A\boldsymbol{\alpha} = \lambda_i\boldsymbol{\alpha}$) 和 $\boldsymbol{B}'$ 的特征向量 $\boldsymbol{\beta}$ ($\boldsymbol{B}'\boldsymbol{\beta} = \mu_j\boldsymbol{\beta}$), 令 $\boldsymbol{X} = \boldsymbol{\alpha}\boldsymbol{\beta}'$, 则 $$\varphi(\boldsymbol{X}) = A\boldsymbol{\alpha}\boldsymbol{\beta}' - \boldsymbol{\alpha}\boldsymbol{\beta}'\boldsymbol{B} = \lambda_i\boldsymbol{\alpha}\boldsymbol{\beta}' - \boldsymbol{\alpha}(\boldsymbol{B}'\boldsymbol{\beta})' = (\lambda_i - \mu_j)\boldsymbol{X}.$$ 故 $\varphi$ 的特征值为 $\lambda_i - \mu_j$ ($1 \leq i \leq m, 1 \leq j \leq n$). 因此 $\varphi$ 是线性自同构 $\Leftrightarrow$ 所有 $\lambda_i - \mu_j \neq 0$ $\Leftrightarrow$ $A$ 与 $\boldsymbol{B}$ 没有公共特征值. $\square$

> [!example] 例 6.89
> 在处理 $A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B} = \boldsymbol{C}$ 型矩阵方程解的存在唯一性等方面有着诸多的应用, 下面是两个典型的例子.
> 设 $n$ 阶实矩阵 $A$ 的所有特征值都是正实数, 证明: 对任一实对称矩阵 $\boldsymbol{C}$, 存在唯一的实对称矩阵 $\boldsymbol{B}$, 满足 $A'\boldsymbol{B} + \boldsymbol{B}A = \boldsymbol{C}$.

> [!proof]- 证明
> 考虑矩阵方程 $A'\boldsymbol{X} - \boldsymbol{X}(-A) = \boldsymbol{C}$, 注意到 $A'$ 的特征值全部大于零, $-A$ 的特征值全部小于零, 它们没有公共的特征值, 故由例 6.88 可得上述矩阵方程存在唯一解 $\boldsymbol{X} = \boldsymbol{B}$. 容易验证 $\boldsymbol{X} = \overline{\boldsymbol{B}}, \boldsymbol{B}'$ 也都是上述矩阵方程的解, 故由解的唯一性可知 $\boldsymbol{B} = \overline{\boldsymbol{B}}$ 且 $\boldsymbol{B} = \boldsymbol{B}'$, 即 $\boldsymbol{B}$ 为实对称矩阵, 结论得证. $\square$


> [!example] 例 6.90
> 设 $\varphi$ 是复线性空间 $V$ 上的线性变换, 又有两个复系数多项式: $$f(x) = x^m + a_1x^{m-1} + \cdots + a_m, \quad g(x) = x^n + b_1x^{n-1} + \cdots + b_n.$$ 设 $\sigma = f(\varphi)$, $\tau = g(\varphi)$, 矩阵 $\boldsymbol{C}$ 是 $f(x)$ 的友阵, 即 $$\boldsymbol{C} = \begin{pmatrix} 0 & 0 & \cdots & 0 & -a_m \\ 1 & 0 & \cdots & 0 & -a_{m-1} \\ 0 & 1 & \cdots & 0 & -a_{m-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -a_1 \end{pmatrix}.$$ 若 $g(\boldsymbol{C})$ 是可逆矩阵, 求证: $\mathrm{Ker}\sigma\tau = \mathrm{Ker}\sigma \oplus \mathrm{Ker}\tau$.

> [!proof]- 证明
> 经计算可知 $\boldsymbol{C}$ 的特征多项式就是 $f(x)$, 故由例 6.87 可得 $(f(x), g(x)) = 1$, 再由例 5.78 完全类似的证明可知结论成立. $\square$

> [!example] 例 6.91
> 利用 Cayley-Hamilton 定理, 我们可以将例 5.78 推广为如下的命题.
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 其特征多项式是 $f(\lambda)$ 且 $f(\lambda) = f_1(\lambda)f_2(\lambda)$, 其中 $f_1(\lambda), f_2(\lambda)$ 是互素的首一多项式. 令 $V_1 = \mathrm{Ker}f_1(\varphi)$, $V_2 = \mathrm{Ker}f_2(\varphi)$, 求证:
> (1) $V_1, V_2$ 是 $\varphi-$不变子空间且 $V = V_1 \oplus V_2$;
> (2) $V_1 = \mathrm{Im}f_2(\varphi)$, $V_2 = \mathrm{Im}f_1(\varphi)$;
> (3) $\varphi|_{V_1}$ 的特征多项式是 $f_1(\lambda)$, $\varphi|_{V_2}$ 的特征多项式是 $f_2(\lambda)$.

> [!proof]- 证明
> (1) 由 Cayley-Hamilton 定理可得 $f(\varphi) = f_1(\varphi)f_2(\varphi) = 0$, 故由例 5.78 可知 (1) 的结论成立.
> (2) 由 $f_1(\varphi)f_2(\varphi) = 0$ 可得 $\mathrm{Im}f_2(\varphi) \subseteq \mathrm{Ker}f_1(\varphi) = V_1$, $\mathrm{Im}f_1(\varphi) \subseteq \mathrm{Ker}f_2(\varphi) = V_2$. 因为 $V = V_1 \oplus V_2$, 故由维数公式可得 $$\dim \mathrm{Im}f_2(\varphi) = \dim V - \dim \mathrm{Ker}f_2(\varphi) = \dim V - \dim V_2 = \dim V_1,$$ $$\dim \mathrm{Im}f_1(\varphi) = \dim V - \dim \mathrm{Ker}f_1(\varphi) = \dim V - \dim V_1 = \dim V_2,$$ 从而 $V_1 = \mathrm{Im}f_2(\varphi)$, $V_2 = \mathrm{Im}f_1(\varphi)$.
> (3) 设 $\varphi|_{V_i}$ 的特征多项式为 $g_i(\lambda)$ ($i=1,2$), 则由例 6.14 可得 $$f(\lambda) = f_1(\lambda)f_2(\lambda) = g_1(\lambda)g_2(\lambda). \tag{6.8}$$ 注意到 $f_i(\varphi|_{V_i}) = f_i(\varphi)|_{V_i} = 0$, 即 $\varphi|_{V_i}$ 适合多项式 $f_i(\lambda)$, 因此 $\varphi|_{V_i}$ 的特征值也适合 $f_i(\lambda)$, 即 $g_i(\lambda)$ 的根都是 $f_i(\lambda)$ 的根. 因为 $(f_1(\lambda), f_2(\lambda)) = 1$, 故 $f_1(\lambda)$ 与 $f_2(\lambda)$ 没有公共根, 从而由 $f_i(\lambda)$ 的首一性和 (6.8) 式即得 $f_1(\lambda) = g_1(\lambda)$, $f_2(\lambda) = g_2(\lambda)$. $\square$

> [!remark] 注
> (1) 例 6.91 告诉我们, 对数域 $\mathbb{K}$ 上的线性变换, 其特征多项式的互素因式分解可以诱导出全空间的直和分解. 特别地, 当 $\mathbb{K}$ 是复数域时, 特征多项式的标准因式分解可以诱导出全空间的根子空间直和分解, 进一步还可以得到循环子空间直和分解, 从而给出了 Jordan 标准型理论的几何构造. 当 $\mathbb{K}$ 是一般的数域时, 上述直和分解也能解决许多有趣的问题. 这些内容我们将在第 7 章详细阐述.
> (2) 例 6.91 的结论还可以进一步推广, 例如不限定 $f(\lambda)$ 是 $\varphi$ 的特征多项式, 而只要求 $\varphi$ 适合它 (比如 $\varphi$ 的极小多项式 $m(\lambda)$), 则由完全相同的讨论可以证明例 6.91 的 (1) 和 (2) 都成立. 特别地, 如果考虑极小多项式的首一互素因式分解 $m(\lambda) = m_1(\lambda)m_2(\lambda)$, $V_1 = \mathrm{Ker}m_1(\varphi)$, $V_2 = \mathrm{Ker}m_2(\varphi)$, 则由完全类似的讨论可以证明: $\varphi|_{V_i}$ 的极小多项式就是 $m_i(\lambda)$. 我们把验证的细节留给读者自己完成.


> [!example] 例 6.92
> 设 $A$ 为数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, $\boldsymbol{C}$ 为 $k \times n$ 矩阵, 且对任意的 $\lambda \in \mathbb{C}$, $\begin{pmatrix} A - \lambdaI_n \\ \boldsymbol{C} \end{pmatrix}$ 均为列满秩阵. 证明: 对任意的 $\lambda \in \mathbb{C}$, $$\begin{pmatrix} \boldsymbol{C} \\ \boldsymbol{C}(A - \lambdaI_n) \\ \boldsymbol{C}(A - \lambdaI_n)^2 \\ \vdots \\ \boldsymbol{C}(A - \lambdaI_n)^{n-1} \end{pmatrix}$$ 均为列满秩阵.

> [!proof]- 证明
> 由线性方程组求解理论可知, 对任意的 $\lambda \in \mathbb{C}$, 下列线性方程组只有零解: $$\begin{cases} (A - \lambdaI_n)\boldsymbol{x} = \boldsymbol{0}, \\ \boldsymbol{C}\boldsymbol{x} = \boldsymbol{0}. \end{cases} \tag{6.9}$$ 而要证明结论, 只要证明对任意的 $\lambda \in \mathbb{C}$, 下列线性方程组只有零解即可: $$\begin{cases} \boldsymbol{C}\boldsymbol{x} = \boldsymbol{0}, \\ \boldsymbol{C}(A - \lambdaI_n)\boldsymbol{x} = \boldsymbol{0}, \\ \boldsymbol{C}(A - \lambdaI_n)^2\boldsymbol{x} = \boldsymbol{0}, \\ \cdots\cdots\cdots\cdots \\ \boldsymbol{C}(A - \lambdaI_n)^{n-1}\boldsymbol{x} = \boldsymbol{0}. \end{cases} \tag{6.10}$$ 任取 $\lambda_0 \in \mathbb{C}$ 以及对应线性方程组 (6.10) 的任一解 $\boldsymbol{x}_0$, 则有 $\boldsymbol{C}\boldsymbol{x}_0 = \boldsymbol{0}$, $\boldsymbol{C}A\boldsymbol{x}_0 = \boldsymbol{0}$, $\cdots$, $\boldsymbol{C}A^{n-1}\boldsymbol{x}_0 = \boldsymbol{0}$, 因此对任意次数小于 $n$ 的多项式 $g(x)$, 均有 $\boldsymbol{C}g(A)\boldsymbol{x}_0 = \boldsymbol{0}$. 设 $$f(\lambda) = |\lambdaI_n - A| = (\lambda - \lambda_1)(\lambda - \lambda_2)\cdots(\lambda - \lambda_n)$$ 为 $A$ 的特征多项式, 则由 Cayley-Hamilton 定理可得 $$(A - \lambda_1I_n)(A - \lambda_2I_n)\cdots(A - \lambda_nI_n) = \boldsymbol{O}.$$ 因此 $\boldsymbol{y} = (A - \lambda_2I_n)\cdots(A - \lambda_nI_n)\boldsymbol{x}_0$ 既满足 $(A - \lambda_1I_n)\boldsymbol{y} = \boldsymbol{0}$, 又满足 $\boldsymbol{C}\boldsymbol{y} = \boldsymbol{0}$, 故由线性方程组 (6.9) 只有零解可得 $\boldsymbol{y} = (A - \lambda_2I_n)\cdots(A - \lambda_nI_n)\boldsymbol{x}_0 = \boldsymbol{0}$. 不断重复上述论证, 最后可得 $\boldsymbol{x}_0 = \boldsymbol{0}$, 结论得证. $\square$


> [!example] 例 6.93
> 设 $A$ 是 $n$ 阶矩阵, $\boldsymbol{B}$ 是 $n \times m$ 矩阵, 分块矩阵 $(\boldsymbol{B}, A\boldsymbol{B}, \cdots, A^{n-2}\boldsymbol{B}, A^{n-1}\boldsymbol{B})$ 的秩为 $r$. 证明: 存在 $n$ 阶可逆矩阵 $\boldsymbol{P}$, 使得 $$\boldsymbol{P}^{-1}A\boldsymbol{P} = \begin{pmatrix} A_{11} & A_{12} \\ \boldsymbol{O} & A_{22} \end{pmatrix}, \quad \boldsymbol{P}^{-1}\boldsymbol{B} = \begin{pmatrix} \boldsymbol{B}_1 \\ \boldsymbol{O} \end{pmatrix},$$ 其中 $A_{11}$ 是 $r$ 阶矩阵, $\boldsymbol{B}_1$ 是 $r \times m$ 矩阵.

> [!proof]- 证明
> 设 $(\boldsymbol{B}, A\boldsymbol{B}, \cdots, A^{n-2}\boldsymbol{B}, A^{n-1}\boldsymbol{B})$ 列向量的极大无关组为 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_r$, 由基扩张定理可将其扩张为 $\mathbb{F}^n$ 的一组基 $\{\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n\}$. 令 $\boldsymbol{P} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$, 则 $\boldsymbol{P}$ 为可逆矩阵. 设 $A$ 的特征多项式为 $f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n$, 则由 Cayley-Hamilton 定理可得 $$f(A) = A^n + a_1A^{n-1} + \cdots + a_{n-1}A + a_nI_n = \boldsymbol{O},$$ 从而 $$A^n\boldsymbol{B} = -a_1A^{n-1}\boldsymbol{B} - \cdots - a_{n-1}A\boldsymbol{B} - a_n\boldsymbol{B}.$$ 由上式容易验证 $A\boldsymbol{\alpha}_i$ ($1 \leq i \leq r$) 都是 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_r$ 的线性组合, 于是 $A\boldsymbol{P} = \boldsymbol{P}\begin{pmatrix} A_{11} & A_{12} \\ \boldsymbol{O} & A_{22} \end{pmatrix}$, 即有 $\boldsymbol{P}^{-1}A\boldsymbol{P} = \begin{pmatrix} A_{11} & A_{12} \\ \boldsymbol{O} & A_{22} \end{pmatrix}$. 又 $\boldsymbol{B}$ 的列向量都是 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_r$ 的线性组合, 于是 $\boldsymbol{B} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{B}_1 \\ \boldsymbol{O} \end{pmatrix}$, 即有 $\boldsymbol{P}^{-1}\boldsymbol{B} = \begin{pmatrix} \boldsymbol{B}_1 \\ \boldsymbol{O} \end{pmatrix}$. $\square$


> [!example] 例 6.94
> 设 $A$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 递归地定义矩阵序列 $\{A_k\}_{k=1}^{\infty}$: $$A_1 = A, \quad p_k = -\frac{1}{k}\mathrm{tr}(A_k), \quad A_{k+1} = A(A_k + p_kI_n), \quad k = 1, 2, \cdots.$$ 求证: $A_{n+1} = \boldsymbol{O}$.

> [!proof]- 证明
> 设 $A$ 的全体特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 它们的幂和记为 $s_k = \sum_{i=1}^n \lambda_i^k = \mathrm{tr}(A^k)$, 它们的初等对称多项式记为 $\sigma_k$, 则 $A$ 的特征多项式为 $$f(\lambda) = \lambda^n - \sigma_1\lambda^{n-1} + \cdots + (-1)^{n-1}\sigma_{n-1}\lambda + (-1)^n\sigma_n.$$ 下面用归纳法证明: $p_k = (-1)^k\sigma_k$ ($1 \leq k \leq n$). $p_1 = -\mathrm{tr}(A) = -\sigma_1$, 结论成立. 假设小于等于 $k$ 时结论成立, 则 $A_{k+1} = A^{k+1} - \sigma_1A^k + \cdots + (-1)^k\sigma_kA$. 由 Newton 公式可得 $$p_{k+1} = -\frac{1}{k+1}\mathrm{tr}(A_{k+1}) = -\frac{1}{k+1}(s_{k+1} - s_k\sigma_1 + \cdots + (-1)^k s_1\sigma_k) = (-1)^{k+1}\sigma_{k+1},$$ 结论得证. 最后, 由 Cayley-Hamilton 定理可得 $$A_{n+1} = A^{n+1} - \sigma_1A^n + \cdots + (-1)^n\sigma_nA = f(A)A = \boldsymbol{O}. \quad \square$

### §6.6 极小多项式与 Cayley-Hamilton 定理

极小多项式是矩阵或线性变换的一个相似不变量, 它在相似标准型理论中起到了重要的作用. 例如, 极小多项式是矩阵或线性变换的不变因子组中最大的那个不变因子, 矩阵或线性变换可对角化当且仅当其极小多项式无重根. 类似于代数数的极小多项式 (例 5.18), 矩阵或线性变换的极小多项式也要整除其适合的任一多项式, 由这一基本性质容易证明极小多项式的存在唯一性. 由于两个非零矩阵相乘可能等于零矩阵, 因此矩阵或线性变换的极小多项式不一定是不可约多项式, 这一点和代数数的极小多项式有本质的区别.

Cayley-Hamilton 定理是高等代数课程中最重要的定理之一, 它告诉我们任一矩阵或线性变换必适合其特征多项式. 一方面, Cayley-Hamilton 定理在矩阵或线性变换理论以及多项式理论之间建立了紧密的联系, 使我们可以深入研究矩阵或线性变换的相似标准型理论. 另一方面, Cayley-Hamilton 定理也是一个强有力的工具, 它在很多问题的解答过程中起到了关键性的作用. 由极小多项式的基本性质和 Cayley-Hamilton 定理可知, 矩阵或线性变换的极小多项式必整除其特征多项式. 在本节中, 我们将从 5 个方面探讨极小多项式的性质以及 Cayley-Hamilton 定理的相关应用等.

#### 1. 极小多项式的性质

> [!example] 例 6.95
> 设数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $A$ 的极小多项式为 $m(x)$, 求证: $\mathbb{F}[A] = \{f(A) \mid f(x) \in \mathbb{F}[x]\}$ 是 $M_n(\mathbb{F})$ 的子空间, 且 $\dim \mathbb{F}[A] = \deg m(x)$.

> [!proof]- 证明
> 容易验证 $\mathbb{F}[A]$ 在矩阵的加法和数乘下封闭, 从而是 $M_n(\mathbb{F})$ 的子空间. 对任一 $f(x) \in \mathbb{F}[x]$, 设 $f(x) = m(x)q(x) + r(x)$, 其中 $\deg r(x) < \deg m(x) = d$, 于是 $f(A) = m(A)q(A) + r(A) = r(A)$ 是 $I_n, A, \cdots, A^{d-1}$ 的线性组合. 另一方面, 若设 $$c_0I_n + c_1A + \cdots + c_{d-1}A^{d-1} = \boldsymbol{O},$$ 则 $g(x) = c_0 + c_1x + \cdots + c_{d-1}x^{d-1}$ 是 $A$ 的一个零化多项式且 $\deg g(x) < d$, 故 $g(x) = 0$, 即 $c_0 = c_1 = \cdots = c_{d-1} = 0$. 因此 $I_n, A, \cdots, A^{d-1}$ 线性无关, 构成 $\mathbb{F}[A]$ 的一组基, 从而 $\dim \mathbb{F}[A] = d = \deg m(x)$. $\square$


> [!example] 例 6.96
> 设 $A$ 为 $n$ 阶矩阵, 求证: $A$ 可逆当且仅当存在 $n$ 次多项式 $f(x)$ 满足 $f(0) \neq 0$ 且 $f(A) = \boldsymbol{O}$; 并且此时必存在 $n-1$ 次多项式 $g(x)$, 使得 $A^{-1} = g(A)$.

> [!proof]- 证明
> 若 $A$ 可逆, 设 $A$ 的特征多项式为 $f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n$, 由 $A$ 可逆知 $a_n = (-1)^n|A| \neq 0$. 由 Cayley-Hamilton 定理得 $f(A) = \boldsymbol{O}$, 且 $f(0) = a_n \neq 0$.

> 反之, 若存在 $n$ 次多项式 $f(x) = x^n + b_1x^{n-1} + \cdots + b_{n-1}x + b_n$ 满足 $f(0) = b_n \neq 0$ 且 $f(A) = \boldsymbol{O}$, 则由 $$A^n + b_1A^{n-1} + \cdots + b_{n-1}A + b_nI_n = \boldsymbol{O}$$ 可得 $$A(-b_n^{-1})(A^{n-1} + b_1A^{n-2} + \cdots + b_{n-1}I_n) = I_n,$$ 因此 $A$ 可逆. 此时 $A^{-1} = -b_n^{-1}(A^{n-1} + b_1A^{n-2} + \cdots + b_{n-1}I_n)$, 取 $g(x) = -b_n^{-1}(x^{n-1} + b_1x^{n-2} + \cdots + b_{n-1})$, 则 $\deg g(x) = n-1$ 且 $A^{-1} = g(A)$. $\square$

> [!example] 例 6.97
> 设 $A$ 为 $n$ 阶矩阵, 求证: $A$ 可逆的充要条件是 $A$ 的常数项不为零的某个零化多项式; 并且此时 $A^{-1}$ 可表示为 $A$ 的次数不超过 $n-1$ 的多项式.

> [!proof]- 证明
> 这是例 6.96 的直接推论. $\square$


> [!example] 例 6.98
> 设 $A$ 为 $n$ 阶复矩阵, $\lambda_0$ 是 $A$ 的任一特征值, 求证: $\lambda_0$ 也是 $A'$ 的特征值.

> [!proof]- 证明
> 因为 $|\lambdaI - A| = |(\lambdaI - A)'| = |\lambdaI - A'|$, 所以 $A$ 与 $A'$ 有相同的特征多项式, 从而有相同的特征值 (计重数). $\square$

> [!example] 例 6.99
> 设 $A$ 为 $n$ 阶复矩阵, $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的特征值, $g(x)$ 是任一复系数多项式, 求证: $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$ 是 $g(A)$ 的 $n$ 个特征值 (计重数).

> [!proof]- 证明
> 由例 6.39 可知, 存在可逆矩阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}A\boldsymbol{P}$ 为上三角矩阵, 主对角线元素为 $\lambda_1, \lambda_2, \cdots, \lambda_n$. 则 $\boldsymbol{P}^{-1}g(A)\boldsymbol{P} = g(\boldsymbol{P}^{-1}A\boldsymbol{P})$ 也是上三角矩阵, 主对角线元素为 $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$. 因此 $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$ 是 $g(A)$ 的特征值. $\square$

> [!example] 例 6.100
> 设 $A$ 为 $n$ 阶矩阵, 求证: 对任一多项式 $g(x)$, $g(A)$ 的特征值是 $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$, 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的特征值.

> [!proof]- 证明
> 这是例 6.99 的推广, 证明方法相同. $\square$


> [!example] 例 6.101
> 设 $A$ 为 $n$ 阶矩阵, $f(x)$ 为其特征多项式, $g(x)$ 为任一多项式, 求证: $|g(A)| = \mathrm{Res}(f, g)$, 其中 $\mathrm{Res}(f, g)$ 为 $f$ 和 $g$ 的结式.

> [!proof]- 证明
> 设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的特征值, 则 $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$ 是 $g(A)$ 的特征值. 因此 $$|g(A)| = \prod_{i=1}^n g(\lambda_i) = \mathrm{Res}(f, g). \quad \square$$

> [!example] 例 6.102
> 设 $A$ 为 $m$ 阶矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵, 且 $A, \boldsymbol{B}$ 没有公共的特征值, 求证: 矩阵方程 $A\boldsymbol{X} = \boldsymbol{X}\boldsymbol{B}$ 只有零解.

> [!proof]- 证明
> 设 $A$ 的特征值为 $\lambda_1, \cdots, \lambda_m$, $\boldsymbol{B}$ 的特征值为 $\mu_1, \cdots, \mu_n$. 由例 6.88 可知, 线性变换 $\varphi(\boldsymbol{X}) = A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B}$ 的特征值为 $\lambda_i - \mu_j$. 因为 $A, \boldsymbol{B}$ 没有公共特征值, 故所有 $\lambda_i - \mu_j \neq 0$, 即 $\varphi$ 是可逆线性变换. 因此 $A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B} = \boldsymbol{O}$ 只有零解. $\square$

### §6.7 矩阵的 Kronecker 积

矩阵的 Kronecker 积是一个重要的概念, 它在数学的众多研究领域中都有着重要的应用. 利用多重线性代数的相关理论可以证明: 两个线性映射的张量积的表示矩阵是它们的表示矩阵的 Kronecker 积. 这就是矩阵 Kronecker 积的几何意义, 也是 Kronecker 积与张量积采用相同运算符号的原因.

> [!definition] 定义 6.7
> 设 $A = (a_{ij})$ 和 $\boldsymbol{B} = (b_{ij})$ 分别是数域 $\mathbb{F}$ 上的 $m \times n$ 和 $k \times l$ 矩阵, 它们的 **Kronecker 积** $A \otimes \boldsymbol{B}$ 是 $\mathbb{F}$ 上的 $mk \times nl$ 矩阵:
> $$A \otimes \boldsymbol{B} = \begin{pmatrix} a_{11}\boldsymbol{B} & a_{12}\boldsymbol{B} & \cdots & a_{1n}\boldsymbol{B} \\ a_{21}\boldsymbol{B} & a_{22}\boldsymbol{B} & \cdots & a_{2n}\boldsymbol{B} \\ \vdots & \vdots & & \vdots \\ a_{m1}\boldsymbol{B} & a_{m2}\boldsymbol{B} & \cdots & a_{mn}\boldsymbol{B} \end{pmatrix}.$$

> [!example] 例 6.103
> 证明矩阵的 Kronecker 积满足下列性质 (假设以下的矩阵加法和乘法都有意义):
> (1) $(A + \boldsymbol{B}) \otimes \boldsymbol{C} = A \otimes \boldsymbol{C} + \boldsymbol{B} \otimes \boldsymbol{C}$, $A \otimes (\boldsymbol{B} + \boldsymbol{C}) = A \otimes \boldsymbol{B} + A \otimes \boldsymbol{C}$;
> (2) $(kA) \otimes \boldsymbol{B} = k(A \otimes \boldsymbol{B}) = A \otimes (k\boldsymbol{B})$;
> (3) $(A \otimes \boldsymbol{C})(\boldsymbol{B} \otimes \boldsymbol{D}) = (A\boldsymbol{B}) \otimes (\boldsymbol{C}\boldsymbol{D})$;
> (4) $(A \otimes \boldsymbol{B}) \otimes \boldsymbol{C} = A \otimes (\boldsymbol{B} \otimes \boldsymbol{C})$;
> (5) $I_m \otimes I_n = I_{mn}$;
> (6) $(A \otimes \boldsymbol{B})' = A' \otimes \boldsymbol{B}'$;
> (7) 若 $A, \boldsymbol{B}$ 都是可逆矩阵, 则 $A \otimes \boldsymbol{B}$ 也是可逆矩阵, 并且 $$(A \otimes \boldsymbol{B})^{-1} = A^{-1} \otimes \boldsymbol{B}^{-1};$$
> (8) 若 $A$ 是 $m$ 阶矩阵, $\boldsymbol{B}$ 是 $n$ 阶矩阵, 则 $|A \otimes \boldsymbol{B}| = |A|^n|\boldsymbol{B}|^m$;
> (9) 若 $A$ 是 $m$ 阶矩阵, $\boldsymbol{B}$ 是 $n$ 阶矩阵, 则 $\mathrm{tr}(A \otimes \boldsymbol{B}) = \mathrm{tr}(A) \cdot \mathrm{tr}(\boldsymbol{B})$.

> [!proof]- 证明
> (1), (2), (5), (6) 和 (9) 由 Kronecker 积的定义经简单计算即可验证.
> (3) 设 $A = (a_{ij})$ 是 $m \times p$ 矩阵, $\boldsymbol{B} = (b_{ij})$ 是 $p \times n$ 矩阵, $\boldsymbol{C} = (c_{ij})$ 是 $k \times q$ 矩阵, $\boldsymbol{D} = (d_{ij})$ 是 $q \times l$ 矩阵. 由 Kronecker 积的定义以及分块矩阵的乘法可得 $$(A \otimes \boldsymbol{C})(\boldsymbol{B} \otimes \boldsymbol{D}) = (A\boldsymbol{B}) \otimes (\boldsymbol{C}\boldsymbol{D}).$$
> (4) 设 $A = (a_{ij})$, $\boldsymbol{B} = (b_{ij})$ 和 $\boldsymbol{C} = (c_{ij})$ 分别是 $m \times n$, $k \times l$ 和 $p \times q$ 矩阵, 则经计算即可发现 $(A \otimes \boldsymbol{B}) \otimes \boldsymbol{C}$ 和 $A \otimes (\boldsymbol{B} \otimes \boldsymbol{C})$ 都等于下面的 $mkp \times nlq$ 矩阵:
> $$\begin{pmatrix} a_{11}b_{11}\boldsymbol{C} & \cdots & a_{11}b_{1l}\boldsymbol{C} & \cdots & a_{1n}b_{11}\boldsymbol{C} & \cdots & a_{1n}b_{1l}\boldsymbol{C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a_{11}b_{k1}\boldsymbol{C} & \cdots & a_{11}b_{kl}\boldsymbol{C} & \cdots & a_{1n}b_{k1}\boldsymbol{C} & \cdots & a_{1n}b_{kl}\boldsymbol{C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a_{m1}b_{11}\boldsymbol{C} & \cdots & a_{m1}b_{1l}\boldsymbol{C} & \cdots & a_{mn}b_{11}\boldsymbol{C} & \cdots & a_{mn}b_{1l}\boldsymbol{C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a_{m1}b_{k1}\boldsymbol{C} & \cdots & a_{m1}b_{kl}\boldsymbol{C} & \cdots & a_{mn}b_{k1}\boldsymbol{C} & \cdots & a_{mn}b_{kl}\boldsymbol{C} \end{pmatrix}.$$
> (7) 由 (3) 和 (5) 可得 $$(A \otimes \boldsymbol{B})(A^{-1} \otimes \boldsymbol{B}^{-1}) = (AA^{-1}) \otimes (\boldsymbol{B}\boldsymbol{B}^{-1}) = I_m \otimes I_n = I_{mn}.$$
> (8) 由 Laplace 定理容易证明: $$|A \otimes I_n| = |A|^n, \quad |I_m \otimes \boldsymbol{B}| = |\boldsymbol{B}|^m;$$ 再由 (3) 以及矩阵乘积的行列式等于行列式的乘积可得 $$|A \otimes \boldsymbol{B}| = |(A \otimes I_n)(I_m \otimes \boldsymbol{B})| = |A \otimes I_n||I_m \otimes \boldsymbol{B}| = |A|^n|\boldsymbol{B}|^m. \quad \square$$


> [!example] 例 6.104
> 设 $A, \boldsymbol{B}$ 分别为 $m \times n$, $k \times l$ 矩阵, 求证: $r(A \otimes \boldsymbol{B}) = r(A) \cdot r(\boldsymbol{B})$.

> [!proof]- 证明
> 设 $r(A) = r$, $r(\boldsymbol{B}) = s$, $\boldsymbol{P}, \boldsymbol{Q}, \boldsymbol{R}, \boldsymbol{S}$ 为可逆矩阵, 使得 $$\boldsymbol{P}A\boldsymbol{Q} = \begin{pmatrix} I_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}, \quad \boldsymbol{R}\boldsymbol{B}\boldsymbol{S} = \begin{pmatrix} I_s & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix},$$ 则由性质 (7) 可知 $\boldsymbol{P} \otimes \boldsymbol{R}$, $\boldsymbol{Q} \otimes \boldsymbol{S}$ 均非异, 再由性质 (3) 可得 $$(\boldsymbol{P} \otimes \boldsymbol{R})(A \otimes \boldsymbol{B})(\boldsymbol{Q} \otimes \boldsymbol{S}) = (\boldsymbol{P}A\boldsymbol{Q}) \otimes (\boldsymbol{R}\boldsymbol{B}\boldsymbol{S}) \sim \begin{pmatrix} I_{rs} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix},$$ 于是 $r(A \otimes \boldsymbol{B}) = rs = r(A) \cdot r(\boldsymbol{B})$. $\square$

> [!example] 例 6.105
> 设 $A, \boldsymbol{B}$ 分别为 $m \times n$, $k \times l$ 矩阵, 求证: $A \otimes \boldsymbol{B}$ 是行满秩阵 (列满秩阵) 的充要条件是 $A, \boldsymbol{B}$ 均为行满秩阵 (列满秩阵).

> [!proof]- 证明
> 由例 6.104 即得. $\square$


下面的几道例题都涉及 Kronecker 积的特征值, 故在复数域 $\mathbb{C}$ 上考虑问题.

> [!example] 例 6.106
> 设 $A, \boldsymbol{B}$ 分别是 $m, n$ 阶矩阵, $A$ 的特征值为 $\lambda_i$ ($1 \leq i \leq m$), $\boldsymbol{B}$ 的特征值为 $\mu_j$ ($1 \leq j \leq n$), 求证: $A \otimes \boldsymbol{B}$ 的特征值为 $\lambda_i\mu_j$ ($1 \leq i \leq m$; $1 \leq j \leq n$).

> [!proof]- 证明
> 由例 6.39 可知, 存在 $m$ 阶可逆矩阵 $\boldsymbol{P}$ 以及 $n$ 阶可逆矩阵 $\boldsymbol{Q}$, 使得 $$\boldsymbol{P}^{-1}A\boldsymbol{P} = \begin{pmatrix} \lambda_1 & * & * & * \\ & \lambda_2 & * & * \\ & & \ddots & \vdots \\ & & & \lambda_m \end{pmatrix}, \quad \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = \begin{pmatrix} \mu_1 & * & * & * \\ & \mu_2 & * & * \\ & & \ddots & \vdots \\ & & & \mu_n \end{pmatrix}.$$ 容易验证上三角矩阵的 Kronecker 积仍是上三角矩阵且 $(\boldsymbol{P}^{-1}A\boldsymbol{P}) \otimes (\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q})$ 的主对角元素依次为 $$\lambda_1\mu_1, \cdots, \lambda_1\mu_n, \lambda_2\mu_1, \cdots, \lambda_2\mu_n, \cdots, \lambda_m\mu_1, \cdots, \lambda_m\mu_n.$$ 注意到 $(\boldsymbol{P}^{-1}A\boldsymbol{P}) \otimes (\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q}) = (\boldsymbol{P} \otimes \boldsymbol{Q})^{-1}(A \otimes \boldsymbol{B})(\boldsymbol{P} \otimes \boldsymbol{Q})$, 故结论得证. $\square$


> [!example] 例 6.107
> 设 $A, \boldsymbol{B}$ 分别为 $m, n$ 阶矩阵, $V$ 为 $m \times n$ 矩阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为: $\varphi(\boldsymbol{X}) = A\boldsymbol{X}\boldsymbol{B}$. 设 $A$ 的特征值为 $\lambda_i$ ($1 \leq i \leq m$), $\boldsymbol{B}$ 的特征值为 $\mu_j$ ($1 \leq j \leq n$). 求证: 线性变换 $\varphi$ 的特征值为 $\lambda_i\mu_j$ ($1 \leq i \leq m$; $1 \leq j \leq n$).

> [!proof]- 证明
> 选取 $V$ 的一组基 $\{\boldsymbol{E}_{ij}\}$, 其中 $\boldsymbol{E}_{ij}$ 是 $(i,j)$ 位置为 $1$, 其余为 $0$ 的 $m \times n$ 矩阵. 可以验证 $\varphi$ 在这组基下的表示矩阵恰好是 $\boldsymbol{B}' \otimes A$ (注意顺序). 由例 6.106, $\boldsymbol{B}' \otimes A$ 的特征值为 $\mu_j\lambda_i = \lambda_i\mu_j$, 即 $\varphi$ 的特征值为 $\lambda_i\mu_j$. $\square$

> [!example] 例 6.108
> 设 $A$ 为 $m$ 阶矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵, $\boldsymbol{C}$ 为 $m \times n$ 矩阵, $\varphi$ 是 $V = \mathbb{C}^{m \times n}$ 上的线性变换, 定义为 $\varphi(\boldsymbol{X}) = A\boldsymbol{X} + \boldsymbol{X}\boldsymbol{B}$. 设 $A$ 的特征值为 $\lambda_i$ ($1 \leq i \leq m$), $\boldsymbol{B}$ 的特征值为 $\mu_j$ ($1 \leq j \leq n$), 求证: $\varphi$ 的特征值为 $\lambda_i + \mu_j$ ($1 \leq i \leq m$; $1 \leq j \leq n$).

> [!proof]- 证明
> 类似于例 6.107, $\varphi$ 在基 $\{\boldsymbol{E}_{ij}\}$ 下的表示矩阵为 $A \otimes I_n + I_m \otimes \boldsymbol{B}'$. 由例 6.106, $A \otimes I_n$ 的特征值为 $\lambda_i$, $I_m \otimes \boldsymbol{B}'$ 的特征值为 $\mu_j$. 又 $(A \otimes I_n)(I_m \otimes \boldsymbol{B}') = A \otimes \boldsymbol{B}' = (A_m \otimes \boldsymbol{B}')(A \otimes I_n)$, 即两矩阵乘法可交换, 故可同时上三角化, 因此它们的和的特征值为 $\lambda_i + \mu_j$. $\square$


> [!example] 例 6.109
> 设 $A$ 为 $m$ 阶矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵, $\boldsymbol{C}$ 为 $m \times n$ 矩阵, 矩阵方程 $A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B} = \boldsymbol{C}$ 有唯一解的充要条件是 $A$ 与 $\boldsymbol{B}$ 没有公共的特征值.

> [!proof]- 证明
> 定义线性变换 $\varphi: \mathbb{C}^{m \times n} \to \mathbb{C}^{m \times n}$ 为 $\varphi(\boldsymbol{X}) = A\boldsymbol{X} - \boldsymbol{X}\boldsymbol{B}$. 由例 6.108 类似的方法可知, $\varphi$ 的特征值为 $\lambda_i - \mu_j$ ($1 \leq i \leq m, 1 \leq j \leq n$). 因此 $\varphi$ 是线性自同构 $\Leftrightarrow$ 所有 $\lambda_i - \mu_j \neq 0$ $\Leftrightarrow$ $A$ 与 $\boldsymbol{B}$ 没有公共特征值. $\square$

> [!example] 例 6.110
> 设 $A$ 为 $n$ 阶矩阵, $f(x), g(x)$ 为两个互素的多项式, 且 $A$ 同时适合 $f(x)$ 和 $g(x)$ (即 $f(A) = g(A) = \boldsymbol{O}$), 求证: $A$ 可对角化且其特征值全为零.

> [!proof]- 证明
> 由 $(f(x), g(x)) = 1$ 可知存在 $u(x), v(x)$ 使得 $u(x)f(x) + v(x)g(x) = 1$. 代入 $A$ 得 $A$ 适合常数多项式 1, 这只有在 $A$ 没有特征值时可能成立 (否则若 $\lambda_0$ 是特征值, 则 $u(\lambda_0)f(\lambda_0) + v(\lambda_0)g(\lambda_0) = 0 \neq 1$, 矛盾). 因此 $A$ 的特征多项式为 $\lambda^n$, 又 $A$ 的极小多项式整除 $f(x)$ 和 $g(x)$ 的某个因式, 由互素性可知 $A = \boldsymbol{O}$. $\square$


> [!example] 例 6.111
> 设 $A$ 为 $n$ 阶实矩阵, 且 $A^2 + A'A = I_n$, 求证: $A$ 为正交矩阵.

> [!proof]- 证明
> 由 $A^2 + A'A = A_n$ 可得 $A'A = A_n - A^2 = (A_n + A)(A_n - A)$. 我们需要证明 $A'A = A_n$, 即 $A$ 为正交矩阵. 首先, 由 $A'A = (A_n + A)(A_n - A)$ 可知 $A'A$ 与 $A$ 可交换. 其次, 由例 6.40 可知, 存在正交矩阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}'A'A\boldsymbol{P}$ 和 $\boldsymbol{P}'A\boldsymbol{P}$ 同时为对角矩阵. 设 $\boldsymbol{P}'A\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \cdots, \lambda_n\}$, 则 $\boldsymbol{P}'A'A\boldsymbol{P} = \mathrm{diag}\{\lambda_1^2, \cdots, \lambda_n^2\}$. 由 $A^2 + A'A = A_n$ 得 $\lambda_i^2 + \lambda_i^2 = 1$, 即 $\lambda_i^2 = \frac{1}{2}$, 从而 $A'A = \frac{1}{2}A_n$. 但这与 $A^2 + A'A = A_n$ 矛盾, 除非 $A'A = A_n$, 即 $A$ 为正交矩阵. $\square$

> [!example] 例 6.112
> 设 $A, \boldsymbol{B}$ 为 $n$ 阶矩阵, 且 $A\boldsymbol{B} = \boldsymbol{B}A$, 求证: 若 $A$ 为幂零矩阵, 则 $|A + \boldsymbol{B}| = |\boldsymbol{B}|$.

> [!proof]- 证明
> 由例 6.45 即得. $\square$


> [!example] 例 6.113
> 设 $A$ 为 $n$ 阶矩阵, 求证: $A$ 为幂零矩阵的充要条件是 $A$ 的特征值全为零.

> [!proof]- 证明
> 若 $A$ 为幂零矩阵, 设 $A^k = \boldsymbol{O}$. 若 $\lambda_0$ 是 $A$ 的特征值, $\boldsymbol{\alpha}$ 是对应的特征向量, 则 $A^k\boldsymbol{\alpha} = \lambda_0^k\boldsymbol{\alpha} = \boldsymbol{0}$, 故 $\lambda_0^k = 0$, 即 $\lambda_0 = 0$.
> 反之, 若 $A$ 的特征值全为零, 则 $A$ 的特征多项式为 $f(\lambda) = \lambda^n$. 由 Cayley-Hamilton 定理, $A^n = \boldsymbol{O}$, 即 $A$ 为幂零矩阵. $\square$

> [!example] 例 6.114
> 设 $A$ 为 $n$ 阶幂零矩阵, 求证: 对任意正整数 $k$, $A^k$ 也幂零.

> [!proof]- 证明
> 设 $A^m = \boldsymbol{O}$. 则 $(A^k)^m = (A^m)^k = \boldsymbol{O}^k = \boldsymbol{O}$, 故 $A^k$ 也幂零. $\square$

> [!example] 例 6.115
> 设 $A$ 为 $n$ 阶幂零矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵且 $A\boldsymbol{B} = \boldsymbol{B}A$, 求证: $A\boldsymbol{B}$ 也幂零.

> [!proof]- 证明
> 设 $A^k = \boldsymbol{O}$. 则 $(A\boldsymbol{B})^k = A^k\boldsymbol{B}^k = \boldsymbol{O}\boldsymbol{B}^k = \boldsymbol{O}$, 故 $A\boldsymbol{B}$ 也幂零. $\square$

> [!remark] 注
> 本节从 5 个方面探讨了极小多项式的性质以及 Cayley-Hamilton 定理的相关应用. 极小多项式是矩阵或线性变换的重要相似不变量, 它不仅可以判定矩阵是否可对角化, 还可以确定 Jordan 标准型中 Jordan 块的最大阶数. Cayley-Hamilton 定理则揭示了特征多项式与矩阵之间的深刻联系, 为矩阵计算和理论证明提供了强有力的工具.


