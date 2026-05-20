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

## 第4章 线性映射

### § 4.1 基本概念

#### 4.1.1 线性映射的定义

> [!definition]
> 设 $V, U$ 是数域 $\mathbb{F}$ 上的线性空间, $\varphi: V \to U$ 是一个映射. 如果 $\varphi$ 满足:
> - (1) $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta), \quad \forall \alpha, \beta \in V$;
> - (2) $\varphi(k\alpha) = k\varphi(\alpha), \quad \forall k \in \mathbb{F}, \alpha \in V$,
>
> 则称 $\varphi$ 是 $V$ 到 $U$ 的**线性映射**. 当 $U = V$ 时, 称 $\varphi$ 为 $V$ 上的**线性变换**.

> [!remark]
> 上述两个条件可以合并为一个等价条件:
>
> $$\varphi(k\alpha + l\beta) = k\varphi(\alpha) + l\varphi(\beta), \quad \forall k, l \in \mathbb{F}, \alpha, \beta \in V.$$

> [!example]
> **例 4.1** 判断下列映射是否为线性映射:
> - (1) $\varphi: \mathbb{R}^2 \to \mathbb{R}, \quad \varphi(x, y) = xy$;
> - (2) $\varphi: \mathbb{R}^2 \to \mathbb{R}, \quad \varphi(x, y) = x + y$;
> - (3) $\varphi: \mathbb{R}^2 \to \mathbb{R}, \quad \varphi(x, y) = x + y + 1$;
> - (4) $\varphi: M_n(\mathbb{F}) \to \mathbb{F}, \quad \varphi(A) = \det A$;
> - (5) $\varphi: M_n(\mathbb{F}) \to M_n(\mathbb{F}), \quad \varphi(A) = A^\prime$ (转置);
> - (6) $\varphi: \mathbb{R}_n[x] \to \mathbb{R}_n[x], \quad \varphi(f(x)) = f^\prime(x)$ (求导).
>
> **解** (1) 不是线性映射, 因为 $\varphi(2(x,y)) = \varphi(2x, 2y) = 4xy \neq 2xy = 2\varphi(x,y)$ (一般地).
> (2) 是线性映射.
> (3) 不是线性映射, 因为 $\varphi(0, 0) = 1 \neq 0$, 而线性映射必须将零向量映到零向量.
> (4) 不是线性映射, 因为行列式不满足线性性.
> (5) 是线性变换.
> (6) 是线性变换.

> [!theorem]
> **定理 4.1** 设 $\varphi: V \to U$ 是线性映射, 则
> - (1) $\varphi(\mathbf{0}) = \mathbf{0}$;
> - (2) $\varphi(-\alpha) = -\varphi(\alpha), \forall \alpha \in V$;
> - (3) 若 $\alpha_1, \alpha_2, \cdots, \alpha_m \in V$, $k_1, k_2, \cdots, k_m \in \mathbb{F}$, 则
>
> $$\varphi(k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m) = k_1\varphi(\alpha_1) + k_2\varphi(\alpha_2) + \cdots + k_m\varphi(\alpha_m).$$

> [!proof]-
> **证明** (1) $\varphi(\mathbf{0}) = \varphi(0 \cdot \alpha) = 0 \cdot \varphi(\alpha) = \mathbf{0}$.
> (2) $\varphi(-\alpha) = \varphi((-1)\alpha) = (-1)\varphi(\alpha) = -\varphi(\alpha)$.
> (3) 由定义通过归纳法即得.

#### 4.1.2 线性映射的像与核

> [!definition]
> 设 $\varphi: V \to U$ 是线性映射.
> - $V$ 中所有向量在 $\varphi$ 下的像的集合称为 $\varphi$ 的**像空间**(image), 记为 $\operatorname{Im}\varphi$, 即
>
> $$\operatorname{Im}\varphi = \{\varphi(\alpha) \mid \alpha \in V\} \subseteq U.$$
>
> - $V$ 中被 $\varphi$ 映为零向量的所有向量的集合称为 $\varphi$ 的**核空间**(kernel), 记为 $\operatorname{Ker}\varphi$, 即
>
> $$\operatorname{Ker}\varphi = \{\alpha \in V \mid \varphi(\alpha) = \mathbf{0}\} \subseteq V.$$

> [!theorem]
> **定理 4.2** 设 $\varphi: V \to U$ 是线性映射, 则 $\operatorname{Im}\varphi$ 是 $U$ 的子空间, $\operatorname{Ker}\varphi$ 是 $V$ 的子空间.

> [!proof]-
> **证明** 由子空间判别法, 对任意 $\varphi(\alpha), \varphi(\beta) \in \operatorname{Im}\varphi$, $k \in \mathbb{F}$, 有
> $$\varphi(\alpha) + \varphi(\beta) = \varphi(\alpha + \beta) \in \operatorname{Im}\varphi, \quad k\varphi(\alpha) = \varphi(k\alpha) \in \operatorar{Im}\varphi,$$
> 故 $\operatorname{Im}\varphi$ 是 $U$ 的子空间.
> 对任意 $\alpha, \beta \in \operatorname{Ker}\varphi$, $k \in \mathbb{F}$, 有
> $$\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta) = \mathbf{0}, \quad \varphi(k\alpha) = k\varphi(\alpha) = \mathbf{0},$$
> 故 $\alpha + \beta \in \operatorname{Ker}\varphi$, $k\alpha \in \operatorname{Ker}\varphi$, 即 $\operatorname{Ker}\varphi$ 是 $V$ 的子空间.

> [!definition]
> $\operatorname{Im}\varphi$ 的维数称为 $\varphi$ 的**秩**(rank), 记为 $\mathrm{r}(\varphi)$; $\operatorname{Ker}\varphi$ 的维数称为 $\varphi$ 的**零度**(nullity).

> [!example]
> **例 4.2** 求例 4.1 (6) 中求导变换 $\varphi(f(x)) = f^\prime(x)$ 的像空间和核空间.
>
> **解** $\operatorname{Im}\varphi = \mathbb{R}_{n-1}[x]$ (次数小于 $n-1$ 的多项式全体), $\operatorname{Ker}\varphi = \mathbb{R}$ (常数多项式全体).


### § 4.2 线性映射及其运算

#### 4.2.1 线性映射的运算

> [!definition]
> 设 $\varphi, \psi: V \to U$ 都是线性映射, 定义它们的**和** $\varphi + \psi$ 为
>
> $$(\varphi + \psi)(\alpha) = \varphi(\alpha) + \psi(\alpha), \quad \forall \alpha \in V.$$
>
> 设 $\varphi: V \to U$ 是线性映射, $k \in \mathbb{F}$, 定义**数乘** $k\varphi$ 为
>
> $$(k\varphi)(\alpha) = k\varphi(\alpha), \quad \forall \alpha \in V.$$

> [!theorem]
> **定理 4.3** 设 $\varphi, \psi: V \to U$ 都是线性映射, $k \in \mathbb{F}$, 则 $\varphi + \psi$ 和 $k\varphi$ 都是线性映射.

> [!proof]-
> **证明** 对任意 $\alpha, \beta \in V$, $l_1, l_2 \in \mathbb{F}$,
> $$(\varphi + \psi)(l_1\alpha + l_2\beta) = \varphi(l_1\alpha + l_2\beta) + \psi(l_1\alpha + l_2\beta)$$
> $$= l_1\varphi(\alpha) + l_2\varphi(\beta) + l_1\psi(\alpha) + l_2\psi(\beta)$$
> $$= l_1(\varphi(\alpha) + \psi(\alpha)) + l_2(\varphi(\beta) + \psi(\beta))$$
> $$= l_1(\varphi + \psi)(\alpha) + l_2(\varphi + \psi)(\beta).$$
> 同理可证 $k\varphi$ 也是线性映射.

> [!definition]
> 设 $\varphi: V \to U$, $\psi: U \to W$ 都是线性映射, 定义它们的**复合**(或**乘积**) $\psi \circ \varphi$ (也记为 $\psi\varphi$) 为
>
> $$(\psi \circ \varphi)(\alpha) = \psi(\varphi(\alpha)), \quad \forall \alpha \in V.$$

> [!theorem]
> **定理 4.4** 设 $\varphi: V \to U$, $\psi: U \to W$ 都是线性映射, 则 $\psi \circ \varphi: V \to W$ 也是线性映射.

> [!proof]-
> **证明** 对任意 $\alpha, \beta \in V$, $k \in \mathbb{F}$,
> $$(\psi \circ \varphi)(\alpha + \beta) = \psi(\varphi(\alpha + \beta)) = \psi(\varphi(\alpha) + \varphi(\beta))$$
> $$= \psi(\varphi(\alpha)) + \psi(\varphi(\beta)) = (\psi \circ \varphi)(\alpha) + (\psi \circ \varphi)(\beta).$$
> 同理可证 $(\psi \circ \varphi)(k\alpha) = k(\psi \circ \varphi)(\alpha)$.

#### 4.2.2 线性映射空间

> [!definition]
> 数域 $\mathbb{F}$ 上从 $V$ 到 $U$ 的所有线性映射构成的集合记为 $\mathcal{L}(V, U)$.

> [!theorem]
> **定理 4.5** $\mathcal{L}(V, U)$ 关于上述加法和数乘运算构成数域 $\mathbb{F}$ 上的线性空间.

> [!proof]-
> **证明** 需验证线性空间的八条公理, 这些验证都是直接的, 留给读者.

> [!theorem]
> **定理 4.6** 设 $\dim V = n$, $\dim U = m$, 则 $\dim \mathcal{L}(V, U) = mn$.

> [!proof]-
> **证明** 取 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$, $U$ 的一组基 $\{f_1, f_2, \cdots, f_m\}$. 定义线性映射 $\varphi_{ij}: V \to U$ 如下:
> $$\varphi_{ij}(e_k) = \delta_{jk} f_i, \quad 1 \leq i \leq m, \ 1 \leq j \leq n, \ 1 \leq k \leq n.$$
> 其中 $\delta_{jk}$ 是 Kronecker 符号. 可以验证 $\{\varphi_{ij}\}$ 构成 $\mathcal{L}(V, U)$ 的一组基, 共有 $mn$ 个元素. 因此 $\dim \mathcal{L}(V, U) = mn$.


#### 4.2.3 恒等映射与逆映射

> [!definition]
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, 定义 $V$ 上的**恒等映射**(或**恒等变换**) $I_V$ (或简记为 $I$) 为
>
> $$I_V(\alpha) = \alpha, \quad \forall \alpha \in V.$$

> [!definition]
> 设 $\varphi: V \to U$ 是线性映射. 如果存在线性映射 $\psi: U \to V$ 使得
>
> $$\psi \circ \varphi = I_V, \quad \varphi \circ \psi = I_U,$$
>
> 则称 $\varphi$ 是**可逆的**, $\psi$ 称为 $\varphi$ 的**逆映射**(或**逆变换**), 记为 $\varphi^{-1}$.

> [!theorem]
> **定理 4.7** 可逆线性映射的逆映射也是线性映射, 并且逆映射是唯一的.

> [!proof]-
> **证明** 设 $\varphi: V \to U$ 是可逆线性映射, $\psi: U \to V$ 是其逆映射. 对任意 $\alpha, \beta \in U$, $k \in \mathbb{F}$,
> $$\psi(\alpha + \beta) = \psi(\varphi(\psi(\alpha)) + \varphi(\psi(\beta))) = \psi(\varphi(\psi(\alpha) + \psi(\beta))) = \psi(\alpha) + \psi(\beta).$$
> 同理可证 $\psi(k\alpha) = k\psi(\alpha)$. 因此 $\psi$ 是线性映射.
> 唯一性: 若 $\psi_1, \psi_2$ 都是 $\varphi$ 的逆映射, 则
> $$\psi_1 = \psi_1 \circ I_U = \psi_1 \circ (\varphi \circ \psi_2) = (\psi_1 \circ \varphi) \circ \psi_2 = I_V \circ \psi_2 = \psi_2.$$


### § 4.3 线性同构

#### 4.3.1 线性同构的定义

> [!definition]
> 设 $\varphi: V \to U$ 是线性映射. 如果 $\varphi$ 是双射(既单又满), 则称 $\varphi$ 是**线性同构**(linear isomorphism). 此时称 $V$ 与 $U$ **线性同构**, 记为 $V \cong U$.

> [!theorem]
> **定理 4.8** 线性映射 $\varphi: V \to U$ 是线性同构当且仅当存在线性映射 $\psi: U \to V$ 使得 $\psi \circ \varphi = I_V$ 且 $\varphi \circ \psi = I_U$.

> [!proof]-
> **证明** 必要性: 若 $\varphi$ 是线性同构, 则 $\varphi$ 是双射, 故存在集合意义下的逆映射 $\psi: U \to V$. 由定理 4.7, $\psi$ 也是线性映射.
> 充分性: 若存在这样的 $\psi$, 则由 $\psi \circ \varphi = I_V$ 知 $\varphi$ 是单射; 由 $\varphi \circ \psi = I_U$ 知 $\varphi$ 是满射. 故 $\varphi$ 是双射, 从而是线性同构.

> [!theorem]
> **定理 4.9** 数域 $\mathbb{F}$ 上的两个有限维线性空间 $V, U$ 线性同构的充要条件是 $\dim V = \dim U$.

> [!proof]-
> **证明** 必要性: 设 $\varphi: V \to U$ 是线性同构. 若 $\dim V = n$, 取 $V$ 的一组基 $\{e_1, \cdots, e_n\}$, 则 $\{\varphi(e_1), \cdots, \varphi(e_n)\}$ 是 $U$ 的一组基(可验证线性无关性和生成性), 故 $\dim U = n$.
> 充分性: 设 $\dim V = \dim U = n$. 取 $V$ 的基 $\{e_1, \cdots, e_n\}$, $U$ 的基 $\{f_1, \cdots, f_n\}$, 定义 $\varphi: V \to U$ 为 $\varphi(e_i) = f_i$ ($1 \leq i \leq n$), 再线性扩张. 易验证 $\varphi$ 是线性同构.

> [!corollary]
> **推论 4.10** 数域 $\mathbb{F}$ 上任一 $n$ 维线性空间 $V$ 都线性同构于 $\mathbb{F}^n$.

> [!proof]-
> **证明** 因为 $\dim \mathbb{F}^n = n = \dim V$, 由定理 4.9 即得.

> [!remark]
> 这一推论表明, $\mathbb{F}^n$ 可以作为数域 $\mathbb{F}$ 上 $n$ 维线性空间的代表. 许多关于一般线性空间的问题, 可以在 $\mathbb{F}^n$ 中讨论.


#### 4.3.2 线性同构的例子

> [!example]
> **例 4.3** 设 $V = \mathbb{R}_n[x]$ (次数小于 $n$ 的实系数多项式全体), 证明: $V \cong \mathbb{R}^n$.
>
> **证明** 定义 $\varphi: \mathbb{R}_n[x] \to \mathbb{R}^n$ 为
> $$\varphi(a_0 + a_1x + \cdots + a_{n-1}x^{n-1}) = (a_0, a_1, \cdots, a_{n-1})^\prime.$$
> 易验证 $\varphi$ 是线性同构.

> [!example]
> **例 4.4** 设 $\varphi: M_{m \times n}(\mathbb{F}) \to M_{n \times m}(\mathbb{F})$ 为转置映射 $\varphi(A) = A^\prime$, 证明 $\varphi$ 是线性同构.

> [!proof]-
> **证明** 转置运算保持加法和数乘, 故 $\varphi$ 是线性映射. 又 $(A^\prime)^\prime = A$, 即 $\varphi^2 = I$, 所以 $\varphi$ 可逆(自身为逆), 从而是线性同构.

> [!example]
> **例 4.5** 设 $V = M_2(\mathbb{R})$, 证明: $V \cong \mathbb{R}^4$.

> [!proof]-
> **证明** 定义 $\varphi: M_2(\mathbb{R}) \to \mathbb{R}^4$ 为
> $$\varphi\begin{pmatrix} a & b \\ c & d \end{pmatrix} = (a, b, c, d)^\prime.$$
> 易验证 $\varphi$ 是线性同构.

> [!theorem]
> **定理 4.11** 设 $\varphi: V \to U$ 是线性映射, 则
> - (1) $\varphi$ 是单射当且仅当 $\operatorname{Ker}\varphi = \{\mathbf{0}\}$;
> - (2) $\varphi$ 是满射当且仅当 $\operatorname{Im}\varphi = U$.

> [!proof]-
> **证明** (1) 若 $\varphi$ 是单射, 则 $\varphi(\alpha) = \mathbf{0} = \varphi(\mathbf{0})$ 蕴含 $\alpha = \mathbf{0}$, 故 $\operatorname{Ker}\varphi = \{\mathbf{0}\}$. 反之, 若 $\operatorname{Ker}\varphi = \{\mathbf{0}\}$, 且 $\varphi(\alpha) = \varphi(\beta)$, 则 $\varphi(\alpha - \beta) = \mathbf{0}$, 故 $\alpha - \beta = \mathbf{0}$, 即 $\alpha = \beta$, 所以 $\varphi$ 是单射.
> (2) 由像空间的定义直接得到.


#### 4.3.3 线性映射的维数公式

> [!theorem]
> **定理 4.12 (维数公式/秩-零度定理)** 设 $\varphi: V \to U$ 是线性映射, $\dim V = n$, 则
>
> $$\dim \operatorname{Ker}\varphi + \dim \operatorname{Im}\varphi = \dim V.$$
>
> 即
>
> $$\dim \operatorname{Ker}\varphi + \mathrm{r}(\varphi) = n.$$

> [!proof]-
> **证明** 设 $\dim \operatorname{Ker}\varphi = k$. 取 $\operatorname{Ker}\varphi$ 的一组基 $\{e_1, \cdots, e_k\}$, 并将其扩张为 $V$ 的一组基 $\{e_1, \cdots, e_k, e_{k+1}, \cdots, e_n\}$. 下证 $\{\varphi(e_{k+1}), \cdots, \varphi(e_n)\}$ 是 $\operatorname{Im}\varphi$ 的一组基.
>
> 首先, 对任意 $\alpha \in V$, 设 $\alpha = \sum_{i=1}^{n} a_i e_i$, 则
> $$\varphi(\alpha) = \sum_{i=1}^{n} a_i \varphi(e_i) = \sum_{i=k+1}^{n} a_i \varphi(e_i),$$
> (因为 $\varphi(e_1) = \cdots = \varphi(e_k) = \mathbf{0}$), 所以 $\operatorname{Im}\varphi = L(\varphi(e_{k+1}), \cdots, \varphi(e_n))$.
>
> 其次, 设 $\sum_{i=k+1}^{n} a_i \varphi(e_i) = \mathbf{0}$, 则 $\varphi(\sum_{i=k+1}^{n} a_i e_i) = \mathbf{0}$, 故 $\sum_{i=k+1}^{n} a_i e_i \in \operatorname{Ker}\varphi$. 因此存在 $b_1, \cdots, b_k$ 使得
> $$\sum_{i=k+1}^{n} a_i e_i = \sum_{j=1}^{k} b_j e_j.$$
> 即
> $$\sum_{j=1}^{k} b_j e_j - \sum_{i=k+1}^{n} a_i e_i = \mathbf{0}.$$
> 由于 $\{e_1, \cdots, e_n\}$ 线性无关, 故 $b_1 = \cdots = b_k = a_{k+1} = \cdots = a_n = 0$. 所以 $\{\varphi(e_{k+1}), \cdots, \varphi(e_n)\}$ 线性无关.
>
> 综上所述, $\{\varphi(e_{k+1}), \cdots, \varphi(e_n)\}$ 是 $\operatorname{Im}\varphi$ 的一组基, $\dim \operatorname{Im}\varphi = n - k$. 因此 $\dim \operatorname{Ker}\varphi + \dim \operatorname{Im}\varphi = k + (n-k) = n = \dim V$.

> [!corollary]
> **推论 4.13** 设 $\varphi: V \to U$ 是线性映射, $\dim V = \dim U = n$, 则以下三条等价:
> - (1) $\varphi$ 是单射;
> - (2) $\varphi$ 是满射;
> - (3) $\varphi$ 是线性同构.

> [!proof]-
> **证明** 由维数公式, $\dim \operatorname{Ker}\varphi + \dim \operatorname{Im}\varphi = n$.
> (1) $\Rightarrow$ (2): 若 $\varphi$ 是单射, 则 $\operatorname{Ker}\varphi = \{\mathbf{0}\}$, $\dim \operatorname{Ker}\varphi = 0$, 故 $\dim \operatorname{Im}\varphi = n = \dim U$, 所以 $\operatorname{Im}\varphi = U$, $\varphi$ 是满射.
> (2) $\Rightarrow$ (1): 若 $\varphi$ 是满射, 则 $\dim \operatorname{Im}\varphi = n$, 故 $\dim \operatorname{Ker}\varphi = 0$, $\operatorname{Ker}\varphi = \{\mathbf{0}\}$, $\varphi$ 是单射.
> (1)(2) $\Leftrightarrow$ (3): $\varphi$ 是线性同构当且仅当 $\varphi$ 既是单射又是满射.


> [!example]
> **例 4.6** 设 $\varphi: V \to U$ 是线性映射, $W$ 是 $V$ 的子空间, 定义 $\varphi|_W: W \to U$ 为 $\varphi|_W(\alpha) = \varphi(\alpha)$ ($\forall \alpha \in W$), 称为 $\varphi$ 在 $W$ 上的**限制映射**. 证明 $\varphi|_W$ 是线性映射, 并求 $\dim \operatorname{Im}(\varphi|_W)$ 与 $\dim \operatorname{Ker}(\varphi|_W)$ 的关系.

> [!proof]-
> **证明** 对任意 $\alpha, \beta \in W$, $k \in \mathbb{F}$, $(\varphi|_W)(\alpha + \beta) = \varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta) = (\varphi|_W)(\alpha) + (\varphi|_W)(\beta)$, 同理可证数乘性. 故 $\varphi|_W$ 是线性映射. 由维数公式,
> $$\dim \operatorname{Ker}(\varphi|_W) + \dim \operatorname{Im}(\varphi|_W) = \dim W.$$

> [!example]
> **例 4.7** 设 $\varphi: V \to V$ 是线性变换, $V$ 是 $n$ 维线性空间. 证明以下命题等价:
> - (1) $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$;
> - (2) $\operatorname{Ker}\varphi = \operatorname{Ker}\varphi^2$;
> - (3) $\operatorname{Im}\varphi = \operatorname{Im}\varphi^2$;
> - (4) $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$.

> [!proof]-
> **证明** 由维数公式, $\dim \operatorname{Ker}\varphi + \mathrm{r}(\varphi) = n$, $\dim \operatorname{Ker}\varphi^2 + \mathrm{r}(\varphi^2) = n$.
> (2) $\Leftrightarrow$ (4): $\operatorname{Ker}\varphi = \operatorname{Ker}\varphi^2$ 当且仅当 $\dim \operatorname{Ker}\varphi = \dim \operatorname{Ker}\varphi^2$, 当且仅当 $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$, 即 (4).
> (3) $\Leftrightarrow$ (4): $\operatorname{Im}\varphi = \operatorname{Im}\varphi^2$ 当且仅当 $\dim \operatorname{Im}\varphi = \dim \operatorname{Im}\varphi^2$, 即 $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$.
> (1) $\Leftrightarrow$ (2): 由于 $\dim \operatorname{Ker}\varphi + \dim \operatorname{Im}\varphi = n$, $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$ 当且仅当 $\operatorname{Ker}\varphi \cap \operatorname{Im}\varphi = \{\mathbf{0}\}$. 又 $\operatorname{Ker}\varphi \subseteq \operatorname{Ker}\varphi^2$ 恒成立. 若 $\operatorname{Ker}\varphi \cap \operatorname{Im}\varphi = \{\mathbf{0}\}$, 设 $\alpha \in \operatorname{Ker}\varphi^2$, 则 $\varphi(\alpha) \in \operatorname{Ker}\varphi \cap \operatorname{Im}\varphi = \{\mathbf{0}\}$, 故 $\varphi(\alpha) = \mathbf{0}$, $\alpha \in \operatorname{Ker}\varphi$. 所以 $\operatorname{Ker}\varphi^2 \subseteq \operatorname{Ker}\varphi$, 即 $\operatorname{Ker}\varphi = \operatorname{Ker}\varphi^2$. 反之, 若 $\operatorname{Ker}\varphi = \operatorname{Ker}\varphi^2$, 设 $\alpha \in \operatorname{Ker}\varphi \cap \operatorname{Im}\varphi$, 则存在 $\beta$ 使 $\alpha = \varphi(\beta)$, 且 $\varphi(\alpha) = \varphi^2(\beta) = \mathbf{0}$, 故 $\beta \in \operatorname{Ker}\varphi^2 = \operatorname{Ker}\varphi$, 所以 $\alpha = \varphi(\beta) = \mathbf{0}$. 因此 $\operatorname{Ker}\varphi \cap \operatorname{Im}\varphi = \{\mathbf{0}\}$.


> [!example]
> **例 4.8** 设 $\varphi: V \to V$ 是线性变换, 且 $\varphi^2 = \varphi$ (称这样的变换为**幂等变换**). 证明: $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$.

> [!proof]-
> **证明** 首先, 对任意 $\alpha \in V$, 有 $\alpha = (\alpha - \varphi(\alpha)) + \varphi(\alpha)$. 注意到 $\varphi(\alpha - \varphi(\alpha)) = \varphi(\alpha) - \varphi^2(\alpha) = \varphi(\alpha) - \varphi(\alpha) = \mathbf{0}$, 故 $\alpha - \varphi(\alpha) \in \operatorname{Ker}\varphi$. 又 $\varphi(\alpha) \in \operatorname{Im}\varphi$. 所以 $V = \operatorname{Ker}\varphi + \operatorname{Im}\varphi$.
> 其次, 设 $\alpha \in \operatorname{Ker}\varphi \cap \operatorname{Im}\varphi$, 则存在 $\beta$ 使 $\alpha = \varphi(\beta)$, 且 $\varphi(\alpha) = \mathbf{0}$. 于是 $\mathbf{0} = \varphi(\alpha) = \varphi(\varphi(\beta)) = \varphi^2(\beta) = \varphi(\beta) = \alpha$. 因此 $\operatorname{Ker}\varphi \cap \operatorname{Im}\varphi = \{\mathbf{0}\}$.
> 综上, $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$.

> [!remark]
> 幂等变换的例子: 设 $V = V_1 \oplus V_2$, 定义投影变换 $\varphi: V \to V$ 为 $\varphi(v_1 + v_2) = v_1$ (其中 $v_1 \in V_1$, $v_2 \in V_2$). 则 $\varphi^2 = \varphi$, 且 $\operatorname{Im}\varphi = V_1$, $\operatorname{Ker}\varphi = V_2$.


### § 4.4 线性映射与矩阵

#### 4.4.1 线性映射的表示矩阵

> [!definition]
> 设 $\varphi \in \mathcal{L}(V, U)$, $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组基, $\{f_1, f_2, \cdots, f_m\}$ 是 $U$ 的一组基. 设
>
> $$\varphi(e_j) = \sum_{i=1}^{m} a_{ij} f_i, \quad j = 1, 2, \cdots, n.$$
>
> 称矩阵 $A = (a_{ij})_{m \times n}$ 为 $\varphi$ 在基 $\{e_1, \cdots, e_n\}$ 和 $\{f_1, \cdots, f_m\}$ 下的**表示矩阵**.

> [!remark]
> 表示矩阵的第 $j$ 列是 $\varphi(e_j)$ 在基 $\{f_1, \cdots, f_m\}$ 下的坐标.

> [!theorem]
> **定理 4.14** 设 $\varphi \in \mathcal{L}(V, U)$ 在 $V$ 的基 $\{e_1, \cdots, e_n\}$ 和 $U$ 的基 $\{f_1, \cdots, f_m\}$ 下的表示矩阵为 $A$, $\alpha \in V$ 在基 $\{e_1, \cdots, e_n\}$ 下的坐标为 $x = (x_1, \cdots, x_n)^\prime$, 则 $\varphi(\alpha)$ 在基 $\{f_1, \cdots, f_m\}$ 下的坐标为 $Ax$.

> [!proof]-
> **证明** $\alpha = \sum_{j=1}^{n} x_j e_j$, 故
> $$\varphi(\alpha) = \sum_{j=1}^{n} x_j \varphi(e_j) = \sum_{j=1}^{n} x_j \sum_{i=1}^{m} a_{ij} f_i = \sum_{i=1}^{m} \left(\sum_{j=1}^{n} a_{ij} x_j\right) f_i.$$
> 所以 $\varphi(\alpha)$ 在 $\{f_1, \cdots, f_m\}$ 下的坐标为 $Ax$.

> [!theorem]
> **定理 4.15** 设 $\{e_1, \cdots, e_n\}$ 是 $V$ 的基, $\{f_1, \cdots, f_m\}$ 是 $U$ 的基, 则映射
>
> $$\eta: \mathcal{L}(V, U) \to M_{m \times n}(\mathbb{F}), \quad \eta(\varphi) = A$$
>
> (其中 $A$ 是 $\varphi$ 在给定基下的表示矩阵) 是线性同构.

> [!proof]-
> **证明** 先证 $\eta$ 是线性映射. 设 $\varphi, \psi \in \mathcal{L}(V, U)$ 的表示矩阵分别为 $A, B$, 则
> $$(\varphi + \psi)(e_j) = \varphi(e_j) + \psi(e_j) = \sum_{i=1}^{m} a_{ij} f_i + \sum_{i=1}^{m} b_{ij} f_i = \sum_{i=1}^{m} (a_{ij} + b_{ij}) f_i,$$
> 故 $\varphi + \psi$ 的表示矩阵为 $A + B$, 即 $\eta(\varphi + \psi) = \eta(\varphi) + \eta(\psi)$. 同理 $\eta(k\varphi) = k\eta(\varphi)$.
> 再证 $\eta$ 是双射. $\eta(\varphi) = O$ 当且仅当 $\varphi(e_j) = \mathbf{0}$ ($\forall j$), 当且仅当 $\varphi = 0$, 故 $\eta$ 是单射. 又 $\dim \mathcal{L}(V, U) = mn = \dim M_{m \times n}(\mathbb{F})$, 故 $\eta$ 也是满射. 因此 $\eta$ 是线性同构.

> [!corollary]
> **推论 4.16** $\mathrm{r}(\varphi) = \mathrm{r}(A)$, 其中 $A$ 是 $\varphi$ 的表示矩阵.

> [!proof]-
> **证明** 设 $\alpha = \sum_{j=1}^{n} x_j e_j$, 则 $\varphi(\alpha) = \sum_{i=1}^{m} y_i f_i$, 其中 $y = Ax$. 所以
> $$\operatorname{Im}\varphi = \left\{\sum_{i=1}^{m} y_i f_i \mid y = Ax, x \in \mathbb{F}^n\right\}.$$
> 故 $\dim \operatorname{Im}\varphi = \dim\{Ax \mid x \in \mathbb{F}^n\} = \mathrm{r}(A)$.


#### 4.4.2 基变换与表示矩阵的变换

> [!theorem]
> **定理 4.17** 设 $\varphi \in \mathcal{L}(V, U)$, $\{e_1, \cdots, e_n\}$ 和 $\{e_1^\prime, \cdots, e_n^\prime\}$ 是 $V$ 的两组基, 从 $\{e_j\}$ 到 $\{e_j^\prime\}$ 的过渡矩阵为 $P$; $\{f_1, \cdots, f_m\}$ 和 $\{f_1^\prime, \cdots, f_m^\prime\}$ 是 $U$ 的两组基, 从 $\{f_i\}$ 到 $\{f_i^\prime\}$ 的过渡矩阵为 $Q$. 设 $\varphi$ 在基 $\{e_j\}$ 和 $\{f_i\}$ 下的表示矩阵为 $A$, 在基 $\{e_j^\prime\}$ 和 $\{f_i^\prime\}$ 下的表示矩阵为 $B$, 则
>
> $$B = Q^{-1}AP.$$

> [!proof]-
> **证明** 由已知, $e_j^\prime = \sum_{k=1}^{n} p_{kj} e_k$, $f_i = \sum_{l=1}^{m} q_{li} f_l^\prime$ (注意 $Q = (q_{li})$ 是从 $\{f_i\}$ 到 $\{f_i^\prime\}$ 的过渡矩阵, 故 $f_i = \sum_{l} q_{li} f_l^\prime$).
> 又 $\varphi(e_j) = \sum_{i=1}^{m} a_{ij} f_i$, 故
> $$\varphi(e_j^\prime) = \sum_{k=1}^{n} p_{kj} \varphi(e_k) = \sum_{k=1}^{n} p_{kj} \sum_{i=1}^{m} a_{ik} f_i$$
> $$= \sum_{k=1}^{n} \sum_{i=1}^{m} p_{kj} a_{ik} \sum_{l=1}^{m} q_{li} f_l^\prime = \sum_{l=1}^{m} \left(\sum_{i=1}^{m} \sum_{k=1}^{n} q_{li} a_{ik} p_{kj}\right) f_l^\prime.$$
> 所以 $B = Q^{-1}AP$ (注意 $Q$ 从 $\{f_i\}$ 到 $\{f_i^\prime\}$, 逆变换对应 $Q^{-1}$).

> [!corollary]
> **推论 4.18** 当 $U = V$ 时(线性变换), 取 $V$ 的同一组基, 则 $B = P^{-1}AP$. 即线性变换在不同基下的表示矩阵**相似**.


#### 4.4.3 线性变换与相似矩阵

> [!theorem]
> **定理 4.19** 设 $\varphi \in \mathcal{L}(V, V)$, $A$ 是 $\varphi$ 在某组基下的表示矩阵. 则 $\varphi$ 在另一组基下的表示矩阵全体构成相似等价类 $\{P^{-1}AP \mid P \text{ 可逆}\}$.

> [!proof]-
> **证明** 由推论 4.18 直接得到.

> [!remark]
> 线性变换的性质可以由其表示矩阵的性质反映. 例如:
> - $\varphi$ 可逆 $\Leftrightarrow$ $A$ 可逆, 且逆变换的表示矩阵为 $A^{-1}$;
> - $\mathrm{r}(\varphi) = \mathrm{r}(A)$;
> - $\varphi$ 是幂等变换 $\Leftrightarrow$ $A^2 = A$;
> - $\varphi^2 = I$ $\Leftrightarrow$ $A^2 = I$.

> [!example]
> **例 4.9** 设 $\varphi: \mathbb{R}^3 \to \mathbb{R}^3$ 为 $\varphi(x, y, z) = (x + y, y + z, z + x)$.
> - (1) 求 $\varphi$ 在标准基下的表示矩阵;
> - (2) 求 $\mathrm{r}(\varphi)$ 和 $\dim \operatorname{Ker}\varphi$;
> - (3) 判断 $\varphi$ 是否可逆.
>
> **解** (1) $\varphi(e_1) = \varphi(1, 0, 0) = (1, 0, 1)$, $\varphi(e_2) = (1, 1, 0)$, $\varphi(e_3) = (0, 1, 1)$. 所以表示矩阵为
> $$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}.$$
> (2) $\det A = 1(1-0) - 1(0-1) + 0 = 1 + 1 = 2 \neq 0$, 故 $\mathrm{r}(A) = 3$, $\mathrm{r}(\varphi) = 3$. 由维数公式, $\dim \operatorname{Ker}\varphi = 3 - 3 = 0$.
> (3) $\det A \neq 0$, 故 $\varphi$ 可逆.


#### 4.4.4 例题

> [!example]
> **例 4.10** 设 $\varphi: \mathbb{R}^3 \to \mathbb{R}^2$ 为 $\varphi(x, y, z) = (x + y + z, 2x - y + 3z)$. 求 $\varphi$ 在 $\mathbb{R}^3$ 标准基和 $\mathbb{R}^2$ 标准基下的表示矩阵.

> [!proof]-
> **解** $\varphi(e_1) = \varphi(1, 0, 0) = (1, 2)$, $\varphi(e_2) = (1, -1)$, $\varphi(e_3) = (1, 3)$. 表示矩阵为
> $$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 3 \end{pmatrix}.$$

> [!example]
> **例 4.11** 设 $V = \mathbb{R}_n[x]$, $U = \mathbb{R}_{n+1}[x]$, $\varphi: V \to U$ 为 $\varphi(f(x)) = xf(x)$. 求 $\varphi$ 在 $V$ 的基 $\{1, x, x^2, \cdots, x^{n-1}\}$ 和 $U$ 的基 $\{1, x, x^2, \cdots, x^n\}$ 下的表示矩阵.

> [!proof]-
> **解** $\varphi(1) = x$, $\varphi(x) = x^2$, $\cdots$, $\varphi(x^{n-1}) = x^n$. 所以表示矩阵为
> $$A = \begin{pmatrix} 0 & 0 & \cdots & 0 \\ 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}_{(n+1) \times n}.$$

> [!theorem]
> **定理 4.20** 设 $\varphi \in \mathcal{L}(V, U)$, $\psi \in \mathcal{L}(U, W)$. 取定 $V, U, W$ 的基, 设 $\varphi, \psi$ 的表示矩阵分别为 $A, B$, 则 $\psi \circ \varphi$ 的表示矩阵为 $BA$.

> [!proof]-
> **证明** 设 $\alpha \in V$ 的坐标为 $x$, 则 $\varphi(\alpha)$ 的坐标为 $Ax$, $\psi(\varphi(\alpha))$ 的坐标为 $B(Ax) = (BA)x$. 所以 $\psi \circ \varphi$ 的表示矩阵为 $BA$.


### § 4.5 像空间和核空间

#### 4.5.1 像空间与核空间的计算

> [!example]
> **例 4.12** 设 $\varphi: \mathbb{R}^4 \to \mathbb{R}^3$ 的表示矩阵为
> $$A = \begin{pmatrix} 1 & 2 & 1 & 0 \\ -1 & 1 & 0 & 1 \\ 0 & 3 & 1 & 1 \end{pmatrix}.$$
> 求 $\operatorname{Im}\varphi$ 和 $\operatorname{Ker}\varphi$ 的维数与一组基.

> [!proof]-
> **解** 对 $A$ 作行变换:
> $$\begin{pmatrix} 1 & 2 & 1 & 0 \\ -1 & 1 & 0 & 1 \\ 0 & 3 & 1 & 1 \end{pmatrix} \xrightarrow{R_2 + R_1} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 3 & 1 & 1 \\ 0 & 3 & 1 & 1 \end{pmatrix} \xrightarrow{R_3 - R_2} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 3 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$
> 所以 $\mathrm{r}(A) = 2$, $\mathrm{r}(\varphi) = 2$, $\dim \operatorname{Ker}\varphi = 4 - 2 = 2$.
> $\operatorname{Im}\varphi$ 的基: 原矩阵前两列线性无关, 可取 $\{(1, -1, 0)^\prime, (2, 1, 3)^\prime\}$ (在 $\mathbb{R}^3$ 中).
> $\operatorname{Ker}\varphi$: 解 $Ax = 0$. 由行阶梯形,
> $$\begin{cases} x_1 + 2x_2 + x_3 = 0 \\ 3x_2 + x_3 + x_4 = 0 \end{cases}$$
> 令 $x_3 = 3, x_4 = 0$, 得 $x_2 = -1, x_1 = -1$, 即 $(-1, -1, 3, 0)^\prime$.
> 令 $x_3 = 0, x_4 = 3$, 得 $x_2 = -1, x_1 = 2$, 即 $(2, -1, 0, 3)^\prime$.
> 所以 $\operatorname{Ker}\varphi$ 的一组基为 $\{(-1, -1, 3, 0)^\prime, (2, -1, 0, 3)^\prime\}$.

> [!theorem]
> **定理 4.21** 设 $\varphi \in \mathcal{L}(V, U)$, $\{e_1, \cdots, e_n\}$ 是 $V$ 的基, $\{f_1, \cdots, f_m\}$ 是 $U$ 的基, $\varphi$ 的表示矩阵为 $A$. 则:
> - (1) $\operatorname{Im}\varphi$ 的维数等于 $A$ 的秩, $\operatorname{Im}\varphi$ 的基可由 $A$ 的列向量极大无关组对应得到;
> - (2) $\operatorname{Ker}\varphi$ 的维数等于 $n - \mathrm{r}(A)$, $\operatorname{Ker}\varphi$ 的基可由齐次线性方程组 $Ax = 0$ 的基础解系对应得到.

> [!proof]-
> **证明** (1) $\varphi(e_j)$ 在 $\{f_i\}$ 下的坐标为 $A$ 的第 $j$ 列. 所以 $\operatorname{Im}\varphi = L(\varphi(e_1), \cdots, \varphi(e_n))$ 的维数等于 $A$ 的列秩, 即 $\mathrm{r}(A)$.
> (2) $\alpha = \sum x_j e_j \in \operatorname{Ker}\varphi$ 当且仅当 $\varphi(\alpha) = \mathbf{0}$, 当且仅当 $Ax = 0$. 所以 $\dim \operatorname{Ker}\varphi = n - \mathrm{r}(A)$, 且 $Ax = 0$ 的基础解系对应 $\operatorname{Ker}\varphi$ 的基.


#### 4.5.2 线性映射的维数公式及其应用

> [!theorem]
> **定理 4.22 (线性映射维数公式)** 设 $\varphi: V \to U$ 是线性映射, $W$ 是 $V$ 的有限维子空间, 则
>
> $$\dim \varphi(W) + \dim (W \cap \operatorname{Ker}\varphi) = \dim W.$$

> [!proof]-
> **证明** 考虑限制映射 $\varphi|_W: W \to U$. 则 $\operatorname{Im}(\varphi|_W) = \varphi(W)$, $\operatorname{Ker}(\varphi|_W) = W \cap \operatorname{Ker}\varphi$. 对 $\varphi|_W$ 应用维数公式即得.

> [!example]
> **例 4.13** 设 $\varphi: V \to U$ 是线性映射, $\dim V = n$, $\dim U = m$, $\mathrm{r}(\varphi) = r$. 证明: 存在 $V$ 的基 $\{e_1, \cdots, e_n\}$ 和 $U$ 的基 $\{f_1, \cdots, f_m\}$ 使得 $\varphi$ 在这两组基下的表示矩阵为
> $$\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}.$$

> [!proof]-
> **证明** 取 $\operatorname{Ker}\varphi$ 的一组基 $\{e_{r+1}, \cdots, e_n\}$ (因为 $\dim \operatorname{Ker}\varphi = n - r$), 扩张为 $V$ 的基 $\{e_1, \cdots, e_r, e_{r+1}, \cdots, e_n\}$. 由定理 4.12 的证明, $\{\varphi(e_1), \cdots, \varphi(e_r)\}$ 是 $\operatorname{Im}\varphi$ 的一组基. 将其扩张为 $U$ 的基 $\{f_1, \cdots, f_m\}$ 其中 $f_i = \varphi(e_i)$ ($1 \leq i \leq r$). 则
> $$\varphi(e_i) = \begin{cases} f_i, & 1 \leq i \leq r \\ \mathbf{0}, & r+1 \leq i \leq n \end{cases}$$
> 所以表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$.

> [!theorem]
> **定理 4.23 (Sylvester 秩不等式)** 设 $\varphi, \psi$ 是 $n$ 维线性空间 $V$ 上的线性变换, 则
>
> $$\mathrm{r}(\varphi\psi) \geq \mathrm{r}(\varphi) + \mathrm{r}(\psi) - n.$$

> [!proof]-
> **证明** 考虑 $\psi(V)$, 这是 $V$ 的子空间. 对 $\varphi$ 限制在 $\psi(V)$ 上应用维数公式:
> $$\mathrm{r}(\varphi\psi) = \dim \varphi(\psi(V)) = \dim \psi(V) - \dim(\psi(V) \cap \operatorname{Ker}\varphi)$$
> $$\geq \dim \psi(V) - \dim \operatorname{Ker}\varphi = \mathrm{r}(\psi) - (n - \mathrm{r}(\varphi)) = \mathrm{r}(\varphi) + \mathrm{r}(\psi) - n.$$


> [!example]
> **例 4.14** 设 $A, B$ 都是 $n$ 阶方阵, 且 $AB = O$. 证明: $\mathrm{r}(A) + \mathrm{r}(B) \leq n$.

> [!proof]-
> **证明** 设 $\varphi, \psi$ 是 $A, B$ 对应的线性变换, 则 $\varphi\psi = 0$, 故 $\mathrm{r}(\varphi\psi) = 0$. 由 Sylvester 秩不等式,
> $$0 \geq \mathrm{r}(\varphi) + \mathrm{r}(\psi) - n = \mathrm{r}(A) + \mathrm{r}(B) - n.$$
> 所以 $\mathrm{r}(A) + \mathrm{r}(B) \leq n$.

> [!example]
> **例 4.15** 设 $A$ 是 $n$ 阶方阵, 证明: $\mathrm{r}(A) + \mathrm{r}(I - A) \geq n$, 且等号成立当且仅当 $A^2 = A$.

> [!proof]-
> **证明** 由 Sylvester 秩不等式,
> $$\mathrm{r}(A) + \mathrm{r}(I - A) \geq \mathrm{r}(A(I - A)) + n = \mathrm{r}(A - A^2) + n.$$
> 注意到 $\mathrm{r}(A) + \mathrm{r}(I - A) \geq n$ 恒成立(取 $B = I - A$ 在上面即可). 等号成立当且仅当 $\mathrm{r}(A - A^2) = 0$, 即 $A - A^2 = O$, 即 $A^2 = A$.

> [!theorem]
> **定理 4.24 (Frobenius 秩不等式)** 设 $\varphi, \psi, \theta$ 是 $n$ 维线性空间 $V$ 上的线性变换, 则
>
> $$\mathrm{r}(\varphi\psi\theta) \geq \mathrm{r}(\varphi\psi) + \mathrm{r}(\psi\theta) - \mathrm{r}(\psi).$$

> [!proof]-
> **证明** 考虑 $\psi$ 的像空间 $\psi(V)$ 和核空间 $\operatorname{Ker}\psi$. 利用维数公式和子空间的包含关系可以证明(过程较复杂, 此处从略).


> [!example]
> **例 4.16** 设 $\varphi: V \to U$ 是线性映射, $\dim V = n$, $\dim U = m$. 证明: 存在 $U$ 到 $V$ 的线性映射 $\psi: U \to V$ 使得 $\varphi\psi\varphi = \varphi$.

> [!proof]-
> **证明** 设 $\mathrm{r}(\varphi) = r$. 由例 4.13, 存在 $V$ 的基 $\{e_1, \cdots, e_n\}$ 和 $U$ 的基 $\{f_1, \cdots, f_m\}$ 使得 $\varphi$ 的表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$.
> 定义 $\psi: U \to V$ 使得其表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}_{n \times m}$ (即 $\psi(f_i) = e_i$ 对 $1 \leq i \leq r$, $\psi(f_i) = \mathbf{0}$ 对 $i > r$).
> 则 $\varphi\psi\varphi$ 的表示矩阵为
> $$\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}_{m \times n} \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}_{n \times m} \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}_{m \times n} = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}_{m \times n}.$$
> 所以 $\varphi\psi\varphi = \varphi$.

> [!remark]
> 满足 $\varphi\psi\varphi = \varphi$ 的 $\psi$ 称为 $\varphi$ 的**广义逆映射**. 这说明了任何线性映射都有广义逆.


### § 4.6 不变子空间

#### 4.6.1 不变子空间的定义与基本性质

> [!definition]
> 设 $\varphi$ 是线性空间 $V$ 上的线性变换, $W$ 是 $V$ 的子空间. 如果 $\varphi(W) \subseteq W$ (即对任意 $\alpha \in W$, $\varphi(\alpha) \in W$), 则称 $W$ 是 $\varphi$ 的**不变子空间**(invariant subspace).

> [!example]
> **例 4.17** 对任何线性变换 $\varphi$, $\{\mathbf{0}\}$ 和 $V$ 都是不变子空间, 称为**平凡不变子空间**.

> [!example]
> **例 4.18** $\operatorname{Ker}\varphi$ 和 $\operatorname{Im}\varphi$ 都是 $\varphi$ 的不变子空间.

> [!proof]-
> **证明** 若 $\alpha \in \operatorname{Ker}\varphi$, 则 $\varphi(\alpha) = \mathbf{0} \in \operatorname{Ker}\varphi$, 故 $\operatorname{Ker}\varphi$ 是不变子空间.
> 若 $\alpha \in \operatorname{Im}\varphi$, 则 $\varphi(\alpha) \in \operatorname{Im}\varphi$ 显然, 故 $\operatorname{Im}\varphi$ 是不变子空间.

> [!theorem]
> **定理 4.25** 设 $\varphi, \psi$ 是 $V$ 上的线性变换, 且 $\varphi\psi = \psi\varphi$. 则 $\operatorname{Im}\psi$ 和 $\operatorname{Ker}\psi$ 都是 $\varphi$ 的不变子空间.

> [!proof]-
> **证明** 对任意 $\alpha \in \operatorname{Im}\psi$, 存在 $\beta$ 使 $\alpha = \psi(\beta)$, 则 $\varphi(\alpha) = \varphi(\psi(\beta)) = \psi(\varphi(\beta)) \in \operatorname{Im}\psi$. 故 $\operatorname{Im}\psi$ 是 $\varphi$ 的不变子空间.
> 对任意 $\alpha \in \operatorname{Ker}\psi$, $\psi(\alpha) = \mathbf{0}$, 则 $\psi(\varphi(\alpha)) = \varphi(\psi(\alpha)) = \varphi(\mathbf{0}) = \mathbf{0}$, 故 $\varphi(\alpha) \in \operatorname{Ker}\psi$. 所以 $\operatorname{Ker}\psi$ 是 $\varphi$ 的不变子空间.


#### 4.6.2 不变子空间与表示矩阵的关系

> [!theorem]
> **定理 4.26** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $W$ 是 $V$ 的 $r$ 维子空间($0 < r < n$). 取 $W$ 的一组基 $\{e_1, \cdots, e_r\}$, 扩张为 $V$ 的基 $\{e_1, \cdots, e_n\}$. 则 $W$ 是 $\varphi$ 的不变子空间当且仅当 $\varphi$ 在基 $\{e_1, \cdots, e_n\}$ 下的表示矩阵为分块上三角阵
>
> $$A = \begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix},$$
>
> 其中 $A_{11}$ 是 $r$ 阶方阵.

> [!proof]-
> **证明** $W$ 是不变子空间 $\Leftrightarrow$ $\varphi(e_j) \in W$ ($j = 1, \cdots, r$) $\Leftrightarrow$ $\varphi(e_j)$ 可由 $\{e_1, \cdots, e_r\}$ 线性表示 ($j = 1, \cdots, r$) $\Leftrightarrow$ 在表示矩阵中, 前 $r$ 列的后 $n-r$ 行元素全为零 $\Leftrightarrow$ 表示矩阵为分块上三角阵.

> [!theorem]
> **定理 4.27** 设 $\varphi$ 是 $V$ 上的线性变换, 且 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$, 其中每个 $V_i$ 都是 $\varphi$ 的不变子空间. 在每个 $V_i$ 中取一组基, 合起来构成 $V$ 的一组基. 则 $\varphi$ 在这组基下的表示矩阵为**准对角阵**
>
> $$A = \begin{pmatrix} A_1 & & \\ & A_2 & \\ & & \ddots & \\ & & & A_k \end{pmatrix},$$
>
> 其中 $A_i$ 是 $\varphi|_{V_i}$ 在 $V_i$ 的基下的表示矩阵.

> [!proof]-
> **证明** 若 $\alpha \in V_i$, 则 $\varphi(\alpha) \in V_i$, 故 $\varphi(\alpha)$ 的坐标在第 $i$ 个块之外全为零. 因此表示矩阵为准对角阵.

> [!corollary]
> **推论 4.28** 设 $\varphi$ 是 $V$ 上的线性变换, $\dim V = n$. 则 $\varphi$ 在某组基下的表示矩阵为对角阵当且仅当 $V$ 可以分解为 $n$ 个一维不变子空间的直和.

> [!proof]-
> **证明** 对角阵 $\Leftrightarrow$ 存在基 $\{e_1, \cdots, e_n\}$ 使 $\varphi(e_i) = \lambda_i e_i$ $\Leftrightarrow$ 每个 $L(e_i)$ 都是一维不变子空间且 $V = L(e_1) \oplus \cdots \oplus L(e_n)$.


#### 4.6.3 特征值与特征向量

> [!definition]
> 设 $\varphi$ 是线性空间 $V$ 上的线性变换. 如果存在 $\lambda \in \mathbb{F}$ 和非零向量 $\alpha \in V$ 使得
>
> $$\varphi(\alpha) = \lambda \alpha,$$
>
> 则称 $\lambda$ 为 $\varphi$ 的**特征值**(eigenvalue), $\alpha$ 为 $\varphi$ 属于 $\lambda$ 的**特征向量**(eigenvector).

> [!definition]
> 设 $A$ 是 $n$ 阶方阵. 如果存在 $\lambda \in \mathbb{F}$ 和非零向量 $x \in \mathbb{F}^n$ 使得 $Ax = \lambda x$, 则称 $\lambda$ 为 $A$ 的特征值, $x$ 为 $A$ 属于 $\lambda$ 的特征向量.

> [!theorem]
> **定理 4.29** 设 $\varphi$ 在基 $\{e_1, \cdots, e_n\}$ 下的表示矩阵为 $A$, $\alpha = \sum x_i e_i$. 则 $\varphi(\alpha) = \lambda \alpha$ 当且仅当 $Ax = \lambda x$ (其中 $x = (x_1, \cdots, x_n)^\prime$).

> [!proof]-
> **证明** 由定理 4.14, $\varphi(\alpha)$ 的坐标为 $Ax$. $\varphi(\alpha) = \lambda \alpha$ 当且仅当 $Ax = \lambda x$.

> [!definition]
> 设 $A$ 是 $n$ 阶方阵, $\lambda$ 是未定元. 称 $f(\lambda) = |\lambda I - A|$ 为 $A$ 的**特征多项式**; 方程 $|\lambda I - A| = 0$ 称为 $A$ 的**特征方程**; 特征方程的根称为 $A$ 的**特征根**(或特征值).

> [!theorem]
> **定理 4.30** 相似矩阵有相同的特征多项式, 从而有相同的特征值.

> [!proof]-
> **证明** 设 $B = P^{-1}AP$, 则
> $$|\lambda I - B| = |\lambda I - P^{-1}AP| = |P^{-1}(\lambda I - A)P| = |P^{-1}| \cdot |\lambda I - A| \cdot |P| = |\lambda I - A|.$$

> [!definition]
> 设 $\varphi$ 的特征多项式定义为 $|\lambda I - A|$, 其中 $A$ 是 $\varphi$ 在某组基下的表示矩阵. 由定理 4.30, 这个定义不依赖于基的选择.


#### 4.6.4 特征子空间

> [!definition]
> 设 $\varphi$ 是 $V$ 上的线性变换, $\lambda_0$ 是 $\varphi$ 的一个特征值. 称集合
>
> $$V_{\lambda_0} = \{\alpha \in V \mid \varphi(\alpha) = \lambda_0 \alpha\}$$
>
> 为 $\varphi$ 属于 $\lambda_0$ 的**特征子空间**.

> [!theorem]
> **定理 4.31** $V_{\lambda_0}$ 是 $V$ 的子空间, 且是 $\varphi$ 的不变子空间.

> [!proof]-
> **证明** $V_{\lambda_0} = \operatorname{Ker}(\varphi - \lambda_0 I)$, 故是子空间. 对任意 $\alpha \in V_{\lambda_0}$, $\varphi(\alpha) = \lambda_0 \alpha \in V_{\lambda_0}$, 故 $V_{\lambda_0}$ 是不变子空间.

> [!theorem]
> **定理 4.32** 设 $\lambda_1, \cdots, \lambda_k$ 是 $\varphi$ 的互不相同的特征值, $\alpha_i \in V_{\lambda_i}$ 是非零特征向量, 则 $\alpha_1, \cdots, \alpha_k$ 线性无关.

> [!proof]-
> **证明** 对 $k$ 归纳. $k = 1$ 时显然. 假设结论对 $k-1$ 成立. 设有
> $$c_1\alpha_1 + \cdots + c_k\alpha_k = \mathbf{0}. \tag{1}$$
> 两边作用 $\varphi$: $c_1\lambda_1\alpha_1 + \cdots + c_k\lambda_k\alpha_k = \mathbf{0}$. $(1)$ 乘 $\lambda_k$: $c_1\lambda_k\alpha_1 + \cdots + c_k\lambda_k\alpha_k = \mathbf{0}$. 相减:
> $$c_1(\lambda_1 - \lambda_k)\alpha_1 + \cdots + c_{k-1}(\lambda_{k-1} - \lambda_k)\alpha_{k-1} = \mathbf{0}.$$
> 由归纳假设, $c_i(\lambda_i - \lambda_k) = 0$ ($i = 1, \cdots, k-1$). 因 $\lambda_i \neq \lambda_k$, 故 $c_1 = \cdots = c_{k-1} = 0$. 代入 (1) 得 $c_k\alpha_k = \mathbf{0}$, 故 $c_k = 0$.

> [!corollary]
> **推论 4.33** $n$ 维线性空间上的线性变换最多有 $n$ 个不同的特征值. 若有 $n$ 个不同的特征值, 则 $\varphi$ 可对角化(表示矩阵为对角阵).

> [!proof]-
> **证明** 第一个结论由定理 4.32 及 $n$ 维空间中最多有 $n$ 个线性无关向量得到. 第二个结论: 若 $\varphi$ 有 $n$ 个不同特征值 $\lambda_1, \cdots, \lambda_n$, 取对应的特征向量 $\alpha_1, \cdots, \alpha_n$, 它们线性无关, 构成 $V$ 的基. 在此基下 $\varphi$ 的表示矩阵为 $\operatorname{diag}\{\lambda_1, \cdots, \lambda_n\}$.


#### 4.6.5 例题

> [!example]
> **例 4.19** 设 $\varphi: \mathbb{R}^3 \to \mathbb{R}^3$ 为 $\varphi(x, y, z) = (3x + y, x + 3y, 4z)$. 求 $\varphi$ 的特征值和特征向量.

> [!proof]-
> **解** $\varphi$ 在标准基下的表示矩阵为
> $$A = \begin{pmatrix} 3 & 1 & 0 \\ 1 & 3 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$
> 特征多项式:
> $$|\lambda I - A| = \begin{vmatrix} \lambda - 3 & -1 & 0 \\ -1 & \lambda - 3 & 0 \\ 0 & 0 & \lambda - 4 \end{vmatrix} = (\lambda - 4)[(\lambda - 3)^2 - 1] = (\lambda - 4)(\lambda - 2)(\lambda - 4) = (\lambda - 2)(\lambda - 4)^2.$$
> 特征值为 $\lambda_1 = 2$, $\lambda_2 = \lambda_3 = 4$.
> 对 $\lambda_1 = 2$: 解 $(2I - A)x = 0$, 即
> $$\begin{pmatrix} -1 & -1 & 0 \\ -1 & -1 & 0 \\ 0 & 0 & -2 \end{pmatrix}x = 0,$$
> 得基础解系 $(1, -1, 0)^\prime$. 所以特征向量为 $k(1, -1, 0)^\prime$ ($k \neq 0$).
> 对 $\lambda_2 = 4$: 解 $(4I - A)x = 0$, 即
> $$\begin{pmatrix} 1 & -1 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}x = 0,$$
> 得基础解系 $(1, 1, 0)^\prime$, $(0, 0, 1)^\prime$. 所以特征向量为 $k_1(1, 1, 0)^\prime + k_2(0, 0, 1)^\prime$ ($k_1, k_2$ 不全为零).


> [!example]
> **例 4.20** 设 $\varphi$ 是 $V$ 上的线性变换, $\varphi^2 = I$ 且 $\varphi \neq I$. 证明:
> - (1) $\varphi$ 的特征值只能是 $\pm 1$;
> - (2) $V = V_1 \oplus V_{-1}$, 其中 $V_1 = \{\alpha \mid \varphi(\alpha) = \alpha\}$, $V_{-1} = \{\alpha \mid \varphi(\alpha) = -\alpha\}$.

> [!proof]-
> **证明** (1) 设 $\varphi(\alpha) = \lambda\alpha$, $\alpha \neq \mathbf{0}$. 则 $\alpha = \varphi^2(\alpha) = \varphi(\lambda\alpha) = \lambda^2\alpha$. 因 $\alpha \neq \mathbf{0}$, 故 $\lambda^2 = 1$, $\lambda = \pm 1$.
> (2) 对任意 $\alpha \in V$, 令 $\alpha_1 = \frac{1}{2}(\alpha + \varphi(\alpha))$, $\alpha_2 = \frac{1}{2}(\alpha - \varphi(\alpha))$. 则 $\varphi(\alpha_1) = \frac{1}{2}(\varphi(\alpha) + \alpha) = \alpha_1$, 故 $\alpha_1 \in V_1$. $\varphi(\alpha_2) = \frac{1}{2}(\varphi(\alpha) - \alpha) = -\alpha_2$, 故 $\alpha_2 \in V_{-1}$. 又 $\alpha = \alpha_1 + \alpha_2$, 所以 $V = V_1 + V_{-1}$.
> 若 $\alpha \in V_1 \cap V_{-1}$, 则 $\varphi(\alpha) = \alpha = -\alpha$, 故 $\alpha = \mathbf{0}$. 因此 $V = V_1 \oplus V_{-1}$.

> [!example]
> **例 4.21** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, 且 $\varphi$ 在 $V$ 的任何一组基下的表示矩阵都相同. 证明: $\varphi$ 是**数乘变换**(即存在 $c \in \mathbb{F}$ 使 $\varphi(\alpha) = c\alpha$, $\forall \alpha \in V$).

> [!proof]-
> **证明** 设 $\varphi$ 在基 $\{e_1, \cdots, e_n\}$ 下的表示矩阵为 $A$. 则对任意可逆阵 $P$, $P^{-1}AP = A$, 即 $AP = PA$. 这说明 $A$ 与所有可逆矩阵可交换, 从而 $A$ 与所有矩阵可交换. 因此 $A = cI$ (数量矩阵), 即 $\varphi$ 是数乘变换.


> [!theorem]
> **定理 4.34 (Cayley-Hamilton 定理)** 设 $A$ 是 $n$ 阶方阵, $f(\lambda) = |\lambda I - A|$ 是 $A$ 的特征多项式. 则 $f(A) = O$.

> [!proof]-
> **证明** 设 $B(\lambda) = (\lambda I - A)^*$ 为 $\lambda I - A$ 的伴随矩阵, 则 $B(\lambda)$ 的元素是 $\lambda I - A$ 的代数余子式, 为 $\lambda$ 的次数不超过 $n-1$ 的多项式. 所以 $B(\lambda)$ 可写成
> $$B(\lambda) = B_0 + B_1\lambda + \cdots + B_{n-1}\lambda^{n-1}.$$
> 由 $(\lambda I - A)B(\lambda) = |\lambda I - A|I = f(\lambda)I$.
> 设 $f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n$. 比较两边 $\lambda$ 各次幂的系数:
> $$-AB_0 = a_nI,$$
> $$B_0 - AB_1 = a_{n-1}I,$$
> $$\vdots$$
> $$B_{n-2} - AB_{n-1} = a_1I,$$
> $$B_{n-1} = I.$$
> 依次用 $I, A, A^2, \cdots, A^n$ 左乘各式并相加:
> $$-AB_0 + AB_0 - A^2B_1 + A^2B_1 - \cdots + A^{n-1}B_{n-2} - A^nB_{n-1} + A^nB_{n-1} = a_nI + a_{n-1}A + \cdots + a_1A^{n-1} + A^n.$$
> 左边 $= O$, 右边 $= f(A)$. 故 $f(A) = O$.

> [!corollary]
> **推论 4.35** 线性变换 $\varphi$ 满足其特征多项式, 即 $f(\varphi) = 0$.

> [!proof]-
> **证明** 设 $\varphi$ 在某组基下的表示矩阵为 $A$, 则 $f(\varphi)$ 的表示矩阵为 $f(A) = O$, 故 $f(\varphi) = 0$.


### § 4.7 幂等变换

#### 4.7.1 幂等变换的定义与基本性质

> [!definition]
> 设 $\varphi$ 是线性空间 $V$ 上的线性变换. 如果 $\varphi^2 = \varphi$, 则称 $\varphi$ 是**幂等变换**(idempotent transformation).

> [!example]
> **例 4.22** 投影变换是幂等变换. 设 $V = V_1 \oplus V_2$, 定义 $\varphi(v_1 + v_2) = v_1$ ($v_1 \in V_1$, $v_2 \in V_2$), 则 $\varphi^2 = \varphi$.

> [!theorem]
> **定理 4.36** 设 $\varphi$ 是幂等变换, 则
> - (1) $\varphi$ 的特征值只能是 $0$ 或 $1$;
> - (2) $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$;
> - (3) $\varphi$ 在适当基下的表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$, 其中 $r = \mathrm{r}(\varphi)$.

> [!proof]-
> **证明** (1) 设 $\varphi(\alpha) = \lambda\alpha$, $\alpha \neq \mathbf{0}$. 则 $\lambda\alpha = \varphi(\alpha) = \varphi^2(\alpha) = \varphi(\lambda\alpha) = \lambda^2\alpha$. 因 $\alpha \neq \mathbf{0}$, 故 $\lambda = \lambda^2$, 即 $\lambda = 0$ 或 $1$.
> (2) 已在例 4.8 中证明.
> (3) 取 $\operatorname{Ker}\varphi$ 的基 $\{e_{r+1}, \cdots, e_n\}$, $\operatorname{Im}\varphi$ 的基 $\{\varphi(e_1), \cdots, \varphi(e_r)\}$ 其中 $\{e_1, \cdots, e_r\}$ 适当选取使得 $\varphi(e_i)$ 线性无关. 则 $\{e_1, \cdots, e_n\}$ 是 $V$ 的基, 且 $\varphi(e_i) = \varphi(e_i)$ 对 $1 \leq i \leq r$, $\varphi(e_j) = \mathbf{0}$ 对 $j > r$. 设 $\varphi(e_i) = f_i$, 则 $\{f_1, \cdots, f_r, e_{r+1}, \cdots, e_n\}$ 构成 $V$ 的基. 在此基下 $\varphi$ 的表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$.

> [!theorem]
> **定理 4.37** 设 $\varphi_1, \cdots, \varphi_k$ 是 $V$ 上的线性变换, 满足:
> - (1) $\varphi_i^2 = \varphi_i$ ($i = 1, \cdots, k$);
> - (2) $\varphi_i\varphi_j = 0$ ($i \neq j$);
> - (3) $\varphi_1 + \cdots + \varphi_k = I_V$.
>
> 则 $V = \operatorname{Im}\varphi_1 \oplus \cdots \oplus \operatorname{Im}\varphi_k$.

> [!proof]-
> **证明** 由 (3), 任意 $\alpha \in V$ 可写成 $\alpha = \varphi_1(\alpha) + \cdots + \varphi_k(\alpha) \in \operatorname{Im}\varphi_1 + \cdots + \operatorname{Im}\varphi_k$. 故 $V = \operatorname{Im}\varphi_1 + \cdots + \operatorname{Im}\varphi_k$.
> 设 $\beta \in \operatorname{Im}\varphi_i \cap (\operatorname{Im}\varphi_1 + \cdots + \widehat{\operatorname{Im}\varphi_i} + \cdots + \operatorname{Im}\varphi_k)$ (去掉第 $i$ 项). 则存在 $\alpha_j$ 使 $\beta = \varphi_i(\alpha_i) = \sum_{j \neq i} \varphi_j(\alpha_j)$. 作用 $\varphi_i$: $\varphi_i(\beta) = \varphi_i^2(\alpha_i) = \varphi_i(\alpha_i) = \beta$, 且 $\varphi_i(\beta) = \sum_{j \neq i} \varphi_i\varphi_j(\alpha_j) = \mathbf{0}$ (由 (2)). 所以 $\beta = \mathbf{0}$. 因此和是直和.


#### 4.7.2 幂等矩阵

> [!definition]
> 满足 $A^2 = A$ 的方阵 $A$ 称为**幂等矩阵**.

> [!theorem]
> **定理 4.38** 设 $A$ 是幂等矩阵, 则
> - (1) $A$ 相似于对角阵 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$, 其中 $r = \mathrm{r}(A)$;
> - (2) $\mathrm{r}(A) = \mathrm{tr}(A)$.

> [!proof]-
> **证明** (1) 幂等矩阵对应幂等变换, 由定理 4.36 即得.
> (2) 相似矩阵有相同的秩和迹, $\mathrm{tr}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix} = r = \mathrm{r}(A)$.

> [!theorem]
> **定理 4.39** 设 $A_1, \cdots, A_k$ 是 $n$ 阶方阵, 满足:
> - (1) $A_i^2 = A_i$ ($i = 1, \cdots, k$);
> - (2) $A_iA_j = O$ ($i \neq j$);
> - (3) $A_1 + \cdots + A_k = I_n$.
>
> 则存在可逆矩阵 $P$ 使得 $P^{-1}A_iP = \operatorname{diag}\{0, \cdots, 0, 1, 0, \cdots, 0\}$ (第 $i$ 个对角元为 1).

> [!proof]-
> **证明** 由定理 4.37, $\mathbb{F}^n = \operatorname{Im}A_1 \oplus \cdots \oplus \operatorname{Im}A_k$. 取 $\operatorname{Im}A_i$ 的基合起来构成 $\mathbb{F}^n$ 的基, 在此基下各 $A_i$ 的表示矩阵即为所求形式.

> [!example]
> **例 4.23** 设 $A$ 是幂等矩阵, 证明: $\mathrm{r}(A) + \mathrm{r}(I - A) = n$.

> [!proof]-
> **证明** 由例 4.15, $\mathrm{r}(A) + \mathrm{r}(I - A) \geq n$, 等号成立当且仅当 $A^2 = A$. 因 $A$ 幂等, 故等号成立. 另证: $(I - A)^2 = I - 2A + A^2 = I - A$, 故 $I - A$ 也幂等. 又 $A(I - A) = A - A^2 = O$. 由 Sylvester 秩不等式, $0 = \mathrm{r}(A(I - A)) \geq \mathrm{r}(A) + \mathrm{r}(I - A) - n$, 即 $\mathrm{r}(A) + \mathrm{r}(I - A) \leq n$. 另一方面, $\mathrm{r}(A) + \mathrm{r}(I - A) \geq \mathrm{r}(A + I - A) = \mathrm{r}(I) = n$. 综上, $\mathrm{r}(A) + \mathrm{r}(I - A) = n$.


#### 4.7.3 投影变换

> [!definition]
> 设 $V = V_1 \oplus V_2$. 定义 $V$ 上的**投影变换** $\varphi_1$ 为: 对 $v = v_1 + v_2$ ($v_1 \in V_1$, $v_2 \in V_2$), $\varphi_1(v) = v_1$. 称 $\varphi_1$ 为 $V$ 到 $V_1$ (沿 $V_2$) 的投影. 同理可定义 $\varphi_2(v) = v_2$.

> [!theorem]
> **定理 4.40** 设 $\varphi_1, \varphi_2$ 是 $V$ 到 $V_1, V_2$ 的投影变换, 则
> - (1) $\varphi_1 + \varphi_2 = I_V$;
> - (2) $\varphi_1\varphi_2 = \varphi_2\varphi_1 = 0$;
> - (3) $\varphi_1^2 = \varphi_1$, $\varphi_2^2 = \varphi_2$;
> - (4) $\operatorname{Im}\varphi_1 = V_1$, $\operatorname{Ker}\varphi_1 = V_2$; $\operatorname{Im}\varphi_2 = V_2$, $\operatorname{Ker}\varphi_2 = V_1$.

> [!proof]-
> **证明** 这些都是投影变换的直接性质, 验证从略.

> [!theorem]
> **定理 4.41** 设 $\varphi$ 是 $V$ 上的线性变换, 则 $\varphi$ 是投影变换当且仅当 $\varphi^2 = \varphi$ 且 $\varphi^* = \varphi$ (自共轭, 在内积空间中). 特别地, 在欧氏空间中, 投影变换关于任意标准正交基的表示矩阵是实对称幂等矩阵.

> [!proof]-
> **证明** 设 $\varphi$ 是到 $V_1$ (沿 $V_2$) 的投影, $V = V_1 \oplus V_2$. 取 $V_1$ 的标准正交基 $\{e_1, \cdots, e_r\}$, $V_2$ 的标准正交基 $\{e_{r+1}, \cdots, e_n\}$, 合为 $V$ 的标准正交基. 则 $\varphi(e_i) = e_i$ ($i \leq r$), $\varphi(e_j) = \mathbf{0}$ ($j > r$). 表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$, 是对称幂等矩阵.


#### 4.7.4 幂等变换的进一步例子

> [!example]
> **例 4.24** 设 $\varphi$ 是幂等变换, $\psi$ 是与 $\varphi$ 可交换的线性变换. 证明: $\operatorname{Im}\varphi$ 和 $\operatorname{Ker}\varphi$ 都是 $\psi$ 的不变子空间.

> [!proof]-
> **证明** 由定理 4.25, $\varphi\psi = \psi\varphi$ 蕴含 $\operatorname{Im}\varphi$ 和 $\operatorname{Ker}\varphi$ 是 $\psi$ 的不变子空间.

> [!example]
> **例 4.25** 设 $\varphi_1, \varphi_2$ 是幂等变换, 且 $\varphi_1 + \varphi_2$ 也是幂等变换. 证明: $\varphi_1\varphi_2 = \varphi_2\varphi_1 = 0$.

> [!proof]-
> **证明** $(\varphi_1 + \varphi_2)^2 = \varphi_1 + \varphi_2$, 即 $\varphi_1^2 + \varphi_1\varphi_2 + \varphi_2\varphi_1 + \varphi_2^2 = \varphi_1 + \varphi_2$. 因 $\varphi_1^2 = \varphi_1$, $\varphi_2^2 = \varphi_2$, 故 $\varphi_1\varphi_2 + \varphi_2\varphi_1 = 0$.
> 左乘 $\varphi_1$: $\varphi_1^2\varphi_2 + \varphi_1\varphi_2\varphi_1 = 0$, 即 $\varphi_1\varphi_2 + \varphi_1\varphi_2\varphi_1 = 0$.
> 右乘 $\varphi_1$: $\varphi_1\varphi_2\varphi_1 + \varphi_2\varphi_1^2 = 0$, 即 $\varphi_1\varphi_2\varphi_1 + \varphi_2\varphi_1 = 0$.
> 所以 $\varphi_1\varphi_2 = \varphi_2\varphi_1$. 代入 $\varphi_1\varphi_2 + \varphi_2\varphi_1 = 0$ 得 $2\varphi_1\varphi_2 = 0$. 在特征不为 2 的域上, $\varphi_1\varphi_2 = 0$, 从而 $\varphi_2\varphi_1 = 0$.

> [!example]
> **例 4.26** 设 $A, B$ 是 $n$ 阶幂等矩阵, 证明: $A + B$ 是幂等矩阵当且仅当 $AB = BA = O$.

> [!proof]-
> **证明** 必要性: 若 $A + B$ 幂等, 则 $(A + B)^2 = A + B$, 即 $A^2 + AB + BA + B^2 = A + B$, 故 $AB + BA = O$. 于是 $AB = -BA$. 左乘 $A$: $AAB = -ABA$, 即 $AB = -ABA$. 右乘 $A$: $ABA = -BAA = -BA$. 所以 $AB = -(-BA) = BA$. 于是 $AB = BA = O$ (因 $2AB = O$ 在特征不为 2 时).
> 充分性: 若 $AB = BA = O$, 则 $(A + B)^2 = A^2 + AB + BA + B^2 = A + B$.


> [!theorem]
> **定理 4.42** 设 $\varphi$ 是幂等变换, 则
> - (1) $I - \varphi$ 也是幂等变换;
> - (2) $\operatorname{Im}\varphi = \operatorname{Ker}(I - \varphi)$, $\operatorname{Ker}\varphi = \operatorname{Im}(I - \varphi)$;
> - (3) 对任意 $\alpha \in V$, $\alpha = \varphi(\alpha) + (I - \varphi)(\alpha)$ 是 $V = \operatorname{Im}\varphi \oplus \operatorname{Ker}\varphi$ 的直和分解.

> [!proof]-
> **证明** (1) $(I - \varphi)^2 = I - 2\varphi + \varphi^2 = I - 2\varphi + \varphi = I - \varphi$.
> (2) $\alpha \in \operatorname{Im}\varphi$ $\Leftrightarrow$ 存在 $\beta$ 使 $\alpha = \varphi(\beta)$ $\Leftrightarrow$ $(I - \varphi)(\alpha) = \varphi(\beta) - \varphi^2(\beta) = \mathbf{0}$ $\Leftrightarrow$ $\alpha \in \operatorname{Ker}(I - \varphi)$.
> 同理 $\operatorname{Ker}\varphi = \operatorname{Im}(I - \varphi)$.
> (3) $\alpha = \varphi(\alpha) + (I - \varphi)(\alpha)$ 显然. 又 $\varphi(\alpha) \in \operatorname{Im}\varphi$, $(I - \varphi)(\alpha) \in \operatorname{Ker}\varphi$, 所以这是直和分解.

> [!example]
> **例 4.27** 设 $\varphi$ 是线性变换, 且 $\varphi^2 - 3\varphi + 2I = 0$. 证明: $V = \operatorname{Ker}(\varphi - I) \oplus \operatorname{Ker}(\varphi - 2I)$.

> [!proof]-
> **证明** 由 $\varphi^2 - 3\varphi + 2I = (\varphi - I)(\varphi - 2I) = 0$. 设 $\psi_1 = \frac{1}{2}(2I - \varphi) = I - \frac{1}{2}\varphi$, $\psi_2 = \frac{1}{2}(\varphi - I)$. 则 $\psi_1 + \psi_2 = I$. 又 $(\varphi - I)(\varphi - 2I) = 0$ 蕴含 $\operatorname{Im}(\varphi - 2I) \subseteq \operatorname{Ker}(\varphi - I)$, $\operatorname{Im}(\varphi - I) \subseteq \operatorname{Ker}(\varphi - 2I)$.
> 另法: 设 $\alpha \in V$, 则 $\alpha = \frac{1}{2}(2I - \varphi)(\alpha) + \frac{1}{2}\varphi(\alpha)$... (详细验证略)
> 实际上, 令 $\alpha_1 = (2I - \varphi)(\alpha)$, $\alpha_2 = (\varphi - I)(\alpha)$. 则 $(\varphi - I)(\alpha_1) = (\varphi - I)(2I - \varphi)(\alpha) = (2\varphi - \varphi^2 - 2I + \varphi)(\alpha) = -(\varphi^2 - 3\varphi + 2I)(\alpha) = \mathbf{0}$, 故 $\alpha_1 \in \operatorname{Ker}(\varphi - I)$. 同理 $(\varphi - 2I)(\alpha_2) = (\varphi - 2I)(\varphi - I)(\alpha) = (\varphi^2 - 3\varphi + 2I)(\alpha) = \mathbf{0}$, 故 $\alpha_2 \in \operatorname{Ker}(\varphi - 2I)$. 又 $\alpha_1 + \alpha_2 = \alpha$, 所以 $V = \operatorname{Ker}(\varphi - I) + \operatorname{Ker}(\varphi - 2I)$.
> 若 $\beta \in \operatorname{Ker}(\varphi - I) \cap \operatorname{Ker}(\varphi - 2I)$, 则 $\varphi(\beta) = \beta = 2\beta$, 故 $\beta = \mathbf{0}$. 因此是直和.


### § 4.8 基础训练

#### 4.8.1 训练题一: 线性映射的基本概念

> [!exercise]
> **习题 4.1** 判断下列映射是否为线性映射:
> - (1) $\varphi: \mathbb{R}^2 \to \mathbb{R}$, $\varphi(x, y) = xy$;
> - (2) $\varphi: \mathbb{R}^2 \to \mathbb{R}$, $\varphi(x, y) = x + 2y$;
> - (3) $\varphi: M_n(\mathbb{R}) \to \mathbb{R}$, $\varphi(A) = \mathrm{tr}(A)$;
> - (4) $\varphi: M_n(\mathbb{R}) \to M_n(\mathbb{R})$, $\varphi(A) = A^2$;
> - (5) $\varphi: C[0, 1] \to \mathbb{R}$, $\varphi(f) = \int_0^1 f(x) \, dx$.

> [!solution]
> **解答** (1) 不是, 不满足线性性 (例如 $\varphi(2(1,1)) = 4 \neq 2\varphi(1,1) = 2$).
> (2) 是.
> (3) 是, 迹是线性函数.
> (4) 不是, $(A + B)^2 \neq A^2 + B^2$ 一般.
> (5) 是, 积分是线性运算.

> [!exercise]
> **习题 4.2** 设 $\varphi: V \to U$ 是线性映射, $\{\alpha_1, \cdots, \alpha_n\}$ 是 $V$ 中线性相关的向量组. 证明: $\{\varphi(\alpha_1), \cdots, \varphi(\alpha_n)\}$ 在 $U$ 中线性相关.

> [!solution]
> **解答** 因 $\{\alpha_i\}$ 线性相关, 存在不全为零的 $c_i$ 使 $\sum c_i\alpha_i = \mathbf{0}$. 作用 $\varphi$: $\sum c_i\varphi(\alpha_i) = \varphi(\mathbf{0}) = \mathbf{0}$. 且 $c_i$ 不全为零, 故 $\{\varphi(\alpha_i)\}$ 线性相关.

> [!exercise]
> **习题 4.3** 设 $\varphi \in \mathcal{L}(V, U)$, $\dim V = n$, $\dim U = m$. 若 $\varphi$ 是单射, 证明 $n \leq m$; 若 $\varphi$ 是满射, 证明 $n \geq m$.

> [!solution]
> **解答** 若 $\varphi$ 是单射, 则 $\operatorname{Ker}\varphi = \{\mathbf{0}\}$, $\dim \operatorname{Ker}\varphi = 0$. 由维数公式, $\mathrm{r}(\varphi) = n$. 又 $\mathrm{r}(\varphi) \leq \dim U = m$, 故 $n \leq m$.
> 若 $\varphi$ 是满射, 则 $\operatorname{Im}\varphi = U$, $\mathrm{r}(\varphi) = m$. 由维数公式, $\dim \operatorname{Ker}\varphi = n - m \geq 0$, 故 $n \geq m$.


#### 4.8.2 训练题二: 线性变换的矩阵表示

> [!exercise]
> **习题 4.4** 设 $\varphi: \mathbb{R}^3 \to \mathbb{R}^3$ 为 $\varphi(x, y, z) = (x + y, y + z, x + z)$. 求:
> - (1) $\varphi$ 在标准基下的表示矩阵;
> - (2) $\mathrm{r}(\varphi)$, $\dim \operatorname{Ker}\varphi$;
> - (3) $\varphi$ 在基 $\{(1,0,0), (1,1,0), (1,1,1)\}$ 下的表示矩阵.

> [!solution]
> **解答** (1) $\varphi(e_1) = (1, 0, 1)$, $\varphi(e_2) = (1, 1, 0)$, $\varphi(e_3) = (0, 1, 1)$. 表示矩阵:
> $$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}.$$
> (2) $\det A = 1(1-0) - 1(0-1) + 0 = 2 \neq 0$, 故 $\mathrm{r}(A) = 3$, $\dim \operatorname{Ker}\varphi = 0$.
> (3) 设新基 $\{f_1, f_2, f_3\}$ 其中 $f_1 = (1,0,0)$, $f_2 = (1,1,0)$, $f_3 = (1,1,1)$. 过渡矩阵
> $$P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}.$$
> 新表示矩阵 $B = P^{-1}AP$. 计算 $P^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. 于是
> $$B = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 \\ -1 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ -1 & -1 & -1 \\ 1 & 1 & 2 \end{pmatrix}.$$

> [!exercise]
> **习题 4.5** 设 $\varphi$ 是 $V$ 上的线性变换, 在基 $\{e_1, e_2, e_3\}$ 下的表示矩阵为 $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 2 & 0 \\ -2 & -2 & -1 \end{pmatrix}$. 求 $\varphi$ 的特征值和特征向量.

> [!solution]
> **解答** 特征多项式:
> $$|\lambda I - A| = \begin{vmatrix} \lambda - 1 & -2 & 0 \\ 0 & \lambda - 2 & 0 \\ 2 & 2 & \lambda + 1 \end{vmatrix} = (\lambda - 1)(\lambda - 2)(\lambda + 1) - (-2) \cdot 0 \cdot 2 = (\lambda - 1)(\lambda - 2)(\lambda + 1).$$
> 特征值为 $\lambda_1 = 1$, $\lambda_2 = 2$, $\lambda_3 = -1$.
> 对 $\lambda_1 = 1$: 解 $(I - A)x = 0$, 即
> $$\begin{pmatrix} 0 & -2 & 0 \\ 0 & -1 & 0 \\ 2 & 2 & 2 \end{pmatrix}x = 0,$$
> 得 $(1, 0, -1)^\prime$.
> 对 $\lambda_2 = 2$: 解 $(2I - A)x = 0$, 即
> $$\begin{pmatrix} 1 & -2 & 0 \\ 0 & 0 & 0 \\ 2 & 2 & 3 \end{pmatrix}x = 0,$$
> 得 $(2, 1, -2)^\prime$.
> 对 $\lambda_3 = -1$: 解 $(-I - A)x = 0$, 即
> $$\begin{pmatrix} -2 & -2 & 0 \\ 0 & -3 & 0 \\ 2 & 2 & 0 \end{pmatrix}x = 0,$$
> 得 $(0, 0, 1)^\prime$.


#### 4.8.3 训练题三: 不变子空间与幂等变换

> [!exercise]
> **习题 4.6** 设 $\varphi$ 是 $V$ 上的线性变换, $W_1, W_2$ 是 $\varphi$ 的不变子空间. 证明: $W_1 + W_2$ 和 $W_1 \cap W_2$ 也是 $\varphi$ 的不变子空间.

> [!solution]
> **解答** 对任意 $\alpha \in W_1 + W_2$, $\alpha = \alpha_1 + \alpha_2$, $\alpha_i \in W_i$. 则 $\varphi(\alpha) = \varphi(\alpha_1) + \varphi(\alpha_2) \in W_1 + W_2$ (因 $\varphi(\alpha_i) \in W_i$). 故 $W_1 + W_2$ 是不变子空间.
> 对任意 $\alpha \in W_1 \cap W_2$, $\alpha \in W_1$ 且 $\alpha \in W_2$. 则 $\varphi(\alpha) \in W_1$ 且 $\varphi(\alpha) \in W_2$, 故 $\varphi(\alpha) \in W_1 \cap W_2$. 所以 $W_1 \cap W_2$ 是不变子空间.

> [!exercise]
> **习题 4.7** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的幂等变换. 证明: $\mathrm{r}(\varphi) + \mathrm{r}(I - \varphi) = n$.

> [!solution]
> **解答** 这已在例 4.23 中证明. 因 $\varphi$ 幂等, $I - \varphi$ 也幂等, 且 $\varphi(I - \varphi) = 0$. 由 Sylvester 秩不等式, $\mathrm{r}(\varphi) + \mathrm{r}(I - \varphi) \leq n$. 又 $\mathrm{r}(\varphi) + \mathrm{r}(I - \varphi) \geq \mathrm{r}(\varphi + I - \varphi) = \mathrm{r}(I) = n$. 综上, 等号成立.

> [!exercise]
> **习题 4.8** 设 $\varphi_1, \cdots, \varphi_m$ 是 $V$ 上的线性变换, 满足 $\varphi_i^2 = \varphi_i$, $\varphi_i\varphi_j = 0$ ($i \neq j$), $\varphi_1 + \cdots + \varphi_m = I_V$. 证明: $V = \operatorname{Im}\varphi_1 \oplus \cdots \oplus \operatorname{Im}\varphi_m$.

> [!solution]
> **解答** 此即定理 4.37 的内容. 任意 $\alpha = \varphi_1(\alpha) + \cdots + \varphi_m(\alpha) \in \operatorname{Im}\varphi_1 + \cdots + \operatorname{Im}\varphi_m$. 若 $\beta \in \operatorname{Im}\varphi_i \cap \sum_{j \neq i} \operatorname{Im}\varphi_j$, 设 $\beta = \varphi_i(\alpha_i) = \sum_{j \neq i} \varphi_j(\alpha_j)$. 作用 $\varphi_i$: $\varphi_i(\beta) = \varphi_i^2(\alpha_i) = \varphi_i(\alpha_i) = \beta$, 且 $\varphi_i(\beta) = \sum_{j \neq i} \varphi_i\varphi_j(\alpha_j) = 0$. 故 $\beta = 0$. 交为零, 是直和.


#### 4.8.4 训练题四: 综合练习

> [!exercise]
> **习题 4.9** 设 $\varphi: V \to V$ 是线性变换, $\dim V = n$, $\mathrm{r}(\varphi) = r$. 证明: 存在 $V$ 的一组基使得 $\varphi$ 的表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 的充要条件是 $\varphi^2 = \varphi$.

> [!solution]
> **解答** 必要性: 若表示矩阵为 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$, 则该矩阵平方不变, 故 $\varphi^2 = \varphi$.
> 充分性: 若 $\varphi^2 = \varphi$, 由定理 4.36, $V = \operatorname{Ker}\varphi \oplus \operatorname{Im}\varphi$. 取 $\operatorname{Ker}\varphi$ 的基 $\{e_{r+1}, \cdots, e_n\}$, $\operatorname{Im}\varphi$ 的基为 $\{\varphi(e_1), \cdots, \varphi(e_r)\}$, 适当构造 $V$ 的基即可使表示矩阵为所求形式.

> [!exercise]
> **习题 4.10** 设 $\varphi: V \to U$ 是线性映射, $\psi: U \to W$ 是线性映射. 证明:
> $$\mathrm{r}(\psi\varphi) \leq \min\{\mathrm{r}(\psi), \mathrm{r}(\varphi)\}.$$

> [!solution]
> **解答** $\operatorname{Im}(\psi\varphi) = \psi(\varphi(V)) \subseteq \psi(U) = \operatorname{Im}\psi$, 故 $\mathrm{r}(\psi\varphi) \leq \mathrm{r}(\psi)$.
> 又 $\operatorname{Im}(\psi\varphi) = \psi(\varphi(V))$, 而 $\dim \psi(\varphi(V)) \leq \dim \varphi(V) = \mathrm{r}(\varphi)$. 故 $\mathrm{r}(\psi\varphi) \leq \mathrm{r}(\varphi)$.
> 综上, $\mathrm{r}(\psi\varphi) \leq \min\{\mathrm{r}(\psi), \mathrm{r}(\varphi)\}$.

> [!exercise]
> **习题 4.11** 设 $A$ 是 $n$ 阶方阵, 且 $A^2 = A$, $A \neq O$, $A \neq I$. 证明:
> - (1) $A$ 的特征值为 $0$ 或 $1$;
> - (2) $A$ 相似于对角阵 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$, 其中 $r = \mathrm{r}(A)$;
> - (3) $\mathrm{tr}(A) = \mathrm{r}(A)$.

> [!solution]
> **解答** (1) 设 $Ax = \lambda x$, $x \neq 0$. 则 $\lambda x = Ax = A^2x = A(Ax) = A(\lambda x) = \lambda^2 x$. 故 $\lambda = \lambda^2$, 即 $\lambda = 0$ 或 $1$.
> (2) 由定理 4.38, $A$ 相似于 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$.
> (3) $\mathrm{tr}(A) = \mathrm{tr}\begin{pmatrix} I_r & O \\ O & O \end{pmatrix} = r = \mathrm{r}(A)$.

> [!exercise]
> **习题 4.12** 设 $\varphi$ 是 $V$ 上的线性变换, 且对任意 $\alpha \in V$, 存在正整数 $m$ (依赖于 $\alpha$) 使得 $\varphi^m(\alpha) = \mathbf{0}$. 这种变换称为**局部幂零变换**. 若 $V$ 是有限维的, 证明: $\varphi$ 是幂零变换 (即存在统一的 $N$ 使 $\varphi^N = 0$).

> [!solution]
> **解答** 设 $\dim V = n$, $\{e_1, \cdots, e_n\}$ 是 $V$ 的基. 对每个 $e_i$, 存在 $m_i$ 使 $\varphi^{m_i}(e_i) = \mathbf{0}$. 令 $N = m_1 + \cdots + m_n$. 对任意 $\alpha = \sum c_i e_i$, $\varphi^N(\alpha) = \sum c_i \varphi^N(e_i) = \mathbf{0}$ (因 $N \geq m_i$, $\varphi^N(e_i) = \varphi^{N - m_i}(\varphi^{m_i}(e_i)) = \mathbf{0}$). 故 $\varphi^N = 0$.

> [!exercise]
> **习题 4.13** 设 $A$ 是 $n$ 阶复方阵, 证明: $A$ 的特征值全为零当且仅当 $A$ 是幂零矩阵.

> [!solution]
> **解答** 必要性: 若 $A$ 的特征值全为零, 则 $A$ 的 Jordan 标准形中所有对角元为零, 故 $A$ 相似于上三角幂零矩阵, 从而 $A$ 幂零.
> 充分性: 若 $A^N = O$, 设 $\lambda$ 是 $A$ 的特征值, $Ax = \lambda x$, $x \neq 0$. 则 $A^N x = \lambda^N x = 0$, 故 $\lambda^N = 0$, $\lambda = 0$.

> [!exercise]
> **习题 4.14** 设 $\varphi$ 是 $V$ 上的线性变换, $\lambda_1, \lambda_2$ 是 $\varphi$ 的两个不同特征值, $\alpha_1, \alpha_2$ 分别是属于 $\lambda_1, \lambda_2$ 的特征向量. 证明: $\alpha_1 + \alpha_2$ 不是 $\varphi$ 的特征向量.

> [!solution]
> **解答** 反设 $\alpha_1 + \alpha_2$ 是特征向量, 属于 $\lambda$. 则 $\varphi(\alpha_1 + \alpha_2) = \lambda(\alpha_1 + \alpha_2) = \lambda_1\alpha_1 + \lambda_2\alpha_2$. 故 $(\lambda - \lambda_1)\alpha_1 + (\lambda - \lambda_2)\alpha_2 = \mathbf{0}$. 由定理 4.32, $\alpha_1, \alpha_2$ 线性无关, 故 $\lambda = \lambda_1 = \lambda_2$, 矛盾.

> [!exercise]
> **习题 4.15** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, 且 $\varphi$ 有 $n$ 个不同的特征值. 证明: $\varphi$ 只有有限个不变子空间, 并确定其个数.

> [!solution]
> **解答** 因 $\varphi$ 有 $n$ 个不同特征值 $\lambda_1, \cdots, \lambda_n$, 故 $\varphi$ 可对角化, 且 $V = V_{\lambda_1} \oplus \cdots \oplus V_{\lambda_n}$, 其中 $\dim V_{\lambda_i} = 1$. 设 $\alpha_i$ 是 $V_{\lambda_i}$ 的基向量. 则 $\varphi$ 的不变子空间必由某些 $\alpha_i$ 生成. 事实上, 设 $W$ 是不变子空间, 则 $W = \bigoplus_i (W \cap V_{\lambda_i})$. 因 $\dim V_{\lambda_i} = 1$, $W \cap V_{\lambda_i}$ 只能是 $0$ 或 $V_{\lambda_i}$. 所以 $W$ 由选择 $\{1, \cdots, n\}$ 的某个子集 $I$ 对应 $\bigoplus_{i \in I} V_{\lambda_i}$ 得到. 共有 $2^n$ 个不变子空间.

> [!exercise]
> **习题 4.16** 设 $A, B$ 是 $n$ 阶方阵, 且 $A$ 可逆. 证明: $AB$ 与 $BA$ 相似.

> [!solution]
> **解答** $AB = A(BA)A^{-1}$, 故 $AB$ 与 $BA$ 相似.

> [!exercise]
> **习题 4.17** 设 $\varphi$ 是 $V$ 上的线性变换, 且 $\varphi^2 = I$. 证明: $V = V_1 \oplus V_{-1}$, 其中 $V_1 = \{\alpha \mid \varphi(\alpha) = \alpha\}$, $V_{-1} = \{\alpha \mid \varphi(\alpha) = -\alpha\}$.

> [!solution]
> **解答** 此即例 4.20. 对任意 $\alpha$, $\alpha = \frac{1}{2}(\alpha + \varphi(\alpha)) + \frac{1}{2}(\alpha - \varphi(\alpha))$, 前者 $\in V_1$, 后者 $\in V_{-1}$. 交为零: 若 $\alpha \in V_1 \cap V_{-1}$, 则 $\alpha = -\alpha$, $\alpha = \mathbf{0}$.

> [!exercise]
> **习题 4.18** 设 $\varphi$ 是欧氏空间 $V$ 上的正交变换, $\psi$ 是 $V$ 上的线性变换, 且 $\varphi\psi = \psi\varphi$. 证明: $\operatorname{Im}\psi$ 和 $\operatorname{Ker}\psi$ 都是 $\varphi$ 的不变子空间.

> [!solution]
> **解答** 由定理 4.25 直接得到, 不需要 $\varphi$ 是正交变换的条件, 只要 $\varphi\psi = \psi\varphi$ 即可.

> [!exercise]
> **习题 4.19** 设 $A$ 是 $n$ 阶实对称矩阵, $\lambda_1 \neq \lambda_2$ 是 $A$ 的两个特征值, $\alpha_1, \alpha_2$ 是对应的实特征向量. 证明: $\alpha_1 \perp \alpha_2$ (正交).

> [!solution]
> **解答** $\lambda_1(\alpha_1, \alpha_2) = (A\alpha_1, \alpha_2) = (\alpha_1, A\alpha_2) = \lambda_2(\alpha_1, \alpha_2)$. 因 $\lambda_1 \neq \lambda_2$, 故 $(\alpha_1, \alpha_2) = 0$, 即 $\alpha_1 \perp \alpha_2$.

> [!exercise]
> **习题 4.20** 设 $\varphi$ 是 $V$ 上的线性变换, 证明以下三个条件等价:
> - (1) $\varphi$ 是数乘变换;
> - (2) $\varphi$ 与 $V$ 上所有线性变换可交换;
> - (3) $\varphi$ 在 $V$ 的任意一组基下的表示矩阵都相同.

> [!solution]
> **解答** (1)$\Rightarrow$(2): 若 $\varphi = cI$, 则对任意 $\psi$, $\varphi\psi = c\psi = \psi(cI) = \psi\varphi$.
> (2)$\Rightarrow$(3): 设 $\varphi$ 与所有线性变换可交换, 特别地与可逆变换可交换, 故 $A$ 与所有可逆矩阵可交换, 从而 $A$ 与所有矩阵可交换, 故 $A = cI$, 即 $\varphi$ 是数乘变换.
> (3)$\Rightarrow$(1): 例 4.21 已证.


---

