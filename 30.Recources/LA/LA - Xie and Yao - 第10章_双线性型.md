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

## 第10章 双线性型

---

### §10.1 基本概念


#### 10.1.1 对偶空间

> [!definition]
> **1. 对偶空间**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间，由 $V$ 到 $\mathbb{F}$ 上的线性映射（即线性函数）全体组成的线性空间 $V^*$ 称为 $V$ 的共轭空间. 当 $V$ 是有限维空间时，$V^*$ 称为 $V$ 的对偶空间.

> [!definition]
> **2. 对偶基**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的 $n$ 维线性空间，$e_1, e_2, \cdots, e_n$ 是 $V$ 的一组基，$V$ 上的线性函数 $f_i$ 定义为 $f_i(e_i) = 1, f_i(e_j) = 0\ (j \neq i)$，则 $f_1, f_2, \cdots, f_n$ 是对偶空间 $V^*$ 的一组基，称为 $e_1, e_2, \cdots, e_n$ 的对偶基. 特别地，$\dim V^* = \dim V$.

> [!definition]
> **3. 记号 $\langle \; , \; \rangle$**
>
> 定义 $\langle f, x \rangle = f(x)$，其中 $f \in V^*, x \in V$，则 $\langle f, - \rangle = f$ 是 $V$ 上的线性函数，$\langle -, x \rangle$ 是 $V^*$ 上的线性函数. 定义线性映射 $\eta: V \to (V^*)^* = V^{**}$, $\eta(x) = \langle -, x \rangle$.

> [!theorem]
> **4. 定理**
>
> 当 $V$ 是有限维空间时，线性映射 $\eta: V \to V^{**}$ 是线性同构. 如果把 $V$ 与 $V^{**}$ 在这个同构下等同起来，则 $V$ 可以看成是 $V^*$ 的对偶空间，从而 $V$ 与 $V^*$ 互为对偶.

> [!theorem]
> **5. 定理**
>
> 设 $V, U$ 是数域 $\mathbb{F}$ 上的线性空间，$\varphi$ 是 $V$ 到 $U$ 的线性映射，则存在唯一的 $U^*$ 到 $V^*$ 的线性映射 $\varphi^*$，使得对任意的 $x \in V, f \in U^*$ 满足等式：
>
> $$\langle \varphi^*(f), x \rangle = \langle f, \varphi(x) \rangle. \tag{10.1}$$
>
> 线性映射 $\varphi^*$ 称为 $\varphi$ 的对偶映射. 对偶映射具有下列性质：


(1) $(k_1\varphi_1 + k_2\varphi_2)^* = k_1\varphi_1^* + k_2\varphi_2^*$, 其中 $\varphi_1, \varphi_2 \in \mathcal{L}(V, U)$, $k_1, k_2 \in \mathbb{F}$;

(2) $(\psi\varphi)^* = \varphi^*\psi^*$, 其中 $\varphi \in \mathcal{L}(V, U)$, $\psi \in \mathcal{L}(U, W)$;

(3) 若 $\varphi: V \to U$ 是线性同构，则 $\varphi^*: U^* \to V^*$ 也是线性同构，此时 $(\varphi^*)^{-1} = (\varphi^{-1})^*$.

> [!theorem]
> **6. 定理**
>
> 设 $V, U$ 是有限维线性空间，$\varphi: V \to U$ 是线性映射，$\varphi^*$ 是 $\varphi$ 的对偶映射.
>
> (1) 设 $\{e_1, \cdots, e_n\}$ 是 $V$ 的一组基，$\{f_1, \cdots, f_n\}$ 是其对偶基；$\{u_1, \cdots, u_m\}$ 是 $U$ 的一组基，$\{g_1, \cdots, g_m\}$ 是其对偶基；$\varphi$ 在基 $\{e_1, \cdots, e_n\}$ 和基 $\{u_1, \cdots, u_m\}$ 下的表示矩阵是 $A$，则 $\varphi^*$ 在基 $\{g_1, \cdots, g_m\}$ 和基 $\{f_1, \cdots, f_n\}$ 下的表示矩阵是 $A'$.
>
> (2) $\varphi$ 是单映射的充要条件是 $\varphi^*$ 是满映射，$\varphi$ 是满映射的充要条件是 $\varphi^*$ 是单映射. 特别地，$\varphi$ 是线性同构的充要条件是 $\varphi^*$ 也是线性同构.

#### 10.1.2 双线性型

> [!definition]
> **1. 双线性型**
>
> 设 $U, V$ 是数域 $\mathbb{F}$ 上的线性空间，$U \times V$ 是它们的积集合，若存在 $U \times V$ 到 $\mathbb{F}$ 的映射 $g$ 适合下列条件：
>
> (1) 对任意的 $x, y \in U, z \in V, \lambda \in \mathbb{F}$，
> $$g(x + y, z) = g(x, z) + g(y, z), \quad g(\lambda x, z) = \lambda g(x, z);$$
>
> (2) 对任意的 $x \in U, z, w \in V, \lambda \in \mathbb{F}$，
> $$g(x, z + w) = g(x, z) + g(x, w), \quad g(x, \lambda z) = \lambda g(x, z),$$
>
> 则称 $g$ 是 $U$ 和 $V$ 上的双线性函数或**双线性型**.
>
> 当 $U, V$ 是有限维线性空间时，任一 $U \times V$ 上的双线性型均可用矩阵来表示. 记 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 是 $U$ 的基，$\beta_1, \beta_2, \cdots, \beta_n$ 是 $V$ 的基，令 $a_{ij} = g(\alpha_i, \beta_j)$，则
>
> $$G = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$


称为 $g$ 在给定基下的**表示矩阵**. 设 $\alpha = x_1\alpha_1 + x_2\alpha_2 + \cdots + x_m\alpha_m$, $\beta = y_1\beta_1 + y_2\beta_2 + \cdots + y_n\beta_n$, $x = (x_1, x_2, \cdots, x_m)'$, $y = (y_1, y_2, \cdots, y_n)'$ 分别为 $\alpha, \beta$ 的坐标向量，则

$$g(\alpha, \beta) = x'Gy.$$

表示矩阵 $G$ 的秩称为双线性型 $g$ 的秩，记为 $\mathrm{r}(g)$.

> [!theorem]
> **2. 定理**
>
> 设 $g$ 是有限维线性空间 $U, V$ 上的双线性型，则总存在 $U, V$ 的基，使得 $g$ 在这两组基下的表示矩阵为相抵标准型 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$，其中 $r = \mathrm{r}(g)$.

> [!definition]
> **3. 根子空间**
>
> 设 $g$ 是线性空间 $U, V$ 上的双线性型，令
> $$L = \{x \in U \mid g(x, y) = 0 \text{ 对一切 } y \in V \text{ 成立}\},$$
> $$R = \{y \in V \mid g(x, y) = 0 \text{ 对一切 } x \in U \text{ 成立}\},$$
>
> 则 $L$ 称为 $g$ 的**左根子空间**，$R$ 称为 $g$ 的**右根子空间**.
>
> 若 $g$ 的左、右根子空间都等于零，则称 $g$ 是**非退化**的双线性型.

> [!theorem]
> **4. 定理**
>
> 设 $g$ 是线性空间 $U, V$ 上的双线性型，则 $g$ 非退化的充要条件是
> $$\dim U = \dim V = \mathrm{r}(g).$$
>
> 等价地，$g$ 非退化的充要条件是它的表示矩阵为可逆矩阵.

> [!theorem]
> **5. 定理**
>
> 设 $g_1, g_2$ 是线性空间 $U, V$ 上的两个非退化双线性型，则存在 $U$ 上的可逆线性变换 $\varphi$ 及 $V$ 上的可逆线性变换 $\psi$，使得对一切 $x \in U, y \in V$，有
> $$g_2(\varphi(x), y) = g_1(x, y), \quad g_2(x, \psi(y)) = g_1(x, y).$$

#### 10.1.3 纯量积

> [!definition]
> **1. 纯量积**
>
> 设 $g$ 是线性空间 $U = V$ 上的双线性型，称 $g$ 是 $V$ 上的一个**纯量积**（或数量积）.


> [!definition]
> **2. 对称型和交错型**
>
> 设 $g$ 是线性空间 $V$ 上的纯量积，若对任意的 $x, y \in V$，都有
> $$g(x, y) = g(y, x),$$
> 则称 $g$ 是 $V$ 上的**对称型**；若对任意的 $x, y \in V$，都有
> $$g(x, y) = -g(y, x),$$
> 则称 $g$ 是 $V$ 上的**交错型**（或反对称型）.

> [!definition]
> **3. 正交**
>
> 设 $g$ 是线性空间 $V$ 上的纯量积，$x, y \in V$，若 $g(x, y) = 0$，则称 $x$ 左正交（或左垂直）于 $y$，称 $y$ 右正交（或右垂直）于 $x$，记为 $x \perp y$.

> [!theorem]
> **4. 定理**
>
> 设 $g$ 是线性空间 $V$ 上的纯量积，若对任意的 $x, y \in V$ 都有 $x \perp y$ 当且仅当 $y \perp x$，则 $g$ 必是对称型或交错型.

> [!theorem]
> **5. 定理**
>
> 设 $g_1, g_2$ 是线性空间 $V$ 上的非退化纯量积，则存在 $V$ 上唯一的可逆线性变换 $\varphi$，使得对任意的 $x, y \in V$，都有
> $$g_2(\varphi(x), y) = g_1(x, y).$$

#### 10.1.4 交错型与辛空间

> [!definition]
> **1. 辛空间**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间，若在 $V$ 上定义了一个非退化的交错型，则称 $V$ 为**辛空间**.

> [!theorem]
> **2. 定理**
>
> 设 $g$ 是 $V$ 上的交错型，则存在 $V$ 的一组基，使得 $g$ 在这组基下的表示矩阵为分块对角矩阵：
> $$\mathrm{diag}\{S, \cdots, S, 0, \cdots, 0\},$$


其中 $S = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$，这组基称为 $V$ 的**辛基**.

> [!definition]
> **3. 辛变换**
>
> 设 $V$ 是辛空间，$\varphi$ 是 $V$ 上的可逆线性变换，若 $g(\varphi(x), \varphi(y)) = g(x, y)$ 对任意的 $x, y \in V$ 成立，则称 $\varphi$ 是 $V$ 上的**辛变换**.

> [!theorem]
> **4. 定理**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的辛空间，则
>
> (1) $V$ 上的线性变换 $\varphi$ 是辛变换的充要条件是 $\varphi$ 将辛基变到辛基；
>
> (2) 两个辛变换之积仍是辛变换；
>
> (3) 恒等变换是辛变换；
>
> (4) 辛变换的逆变换是辛变换.

#### 10.1.5 对称型和正交空间

> [!definition]
> **1. 正交空间**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间，若在 $V$ 上定义了一个非退化的对称型，则称 $V$ 为（正则）**正交空间**.

> [!theorem]
> **2. 定理**
>
> 设 $g$ 是 $V$ 上的对称型，则必存在 $V$ 的一组基，使得 $g$ 在这组基下的表示矩阵为对角矩阵：
> $$\mathrm{diag}\{b_1, \cdots, b_r, 0, \cdots, 0\},$$
> 这组基称为 $V$ 的**正交基**.

> [!definition]
> **3. 迷向向量**
>
> 设 $x$ 是正交空间 $V$ 中的非零向量，若 $g(x, x) = 0$，则称 $x$ 是**迷向向量**. 含有迷向向量的子空间称为**迷向子空间**.

> [!definition]
> **4. 正交变换**
>
> 设 $V$ 是正交空间，$\varphi$ 是 $V$ 上的可逆线性变换，若 $g(\varphi(x), \varphi(y)) = g(x, y)$ 对任意的 $x, y \in V$ 成立，则称 $\varphi$ 是 $V$ 上的**正交变换**.

> [!theorem]
> **5. 定理**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的正交空间，则
>
> (1) 两个正交变换之积是正交变换；
>
> (2) 恒等变换是正交变换；
>
> (3) 正交变换的逆变换是正交变换.

---


### §10.2 线性函数与对偶空间

线性空间的对偶空间是一个重要的概念，它在后续的专业课程以及物理学等领域中都有着广泛的应用. 通常的高等代数课程只讲授数域上的有限维线性空间理论，对无限维线性空间的情形涉及不多，比如一般并不给出无限维线性空间中基的定义及其存在性证明（这需要集合论中的选择公理或 Zorn 引理）. 因此除非特意指明，本章的大部分例题一般都在有限维线性空间的范畴内进行讨论. 例如，教材 [1] 给出了 §§ 10.1.1 定理 6 (2) 在有限维线性空间情形的证明，但只要建立了无限维线性空间中基的概念及其存在性，同样可证明 (2) 对无限维线性空间也成立. 然而，只有当 $V$ 是有限维线性空间时，才能由对偶基的存在性推出 $\dim V^* = \dim V$ 成立；当 $V$ 是无限维线性空间时，上述等式将不再成立，并且 §§ 10.1.1 定理 4 中的 $\eta: V \to V^{**}$ 也不再是线性同构. 由于这些结论的证明涉及到集合论和抽象代数的一些理论，故这里不准备展开阐述，有兴趣的读者可参考 [5].

> [!example]
> **例 10.1**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的线性空间（不必假设维数有限），$f, g$ 是 $V$ 上的非零线性函数，求证：$f$ 和 $g$ 线性相关的充要条件是 $\mathrm{Ker}\,f = \mathrm{Ker}\,g$.

> [!proof]-
> 若 $f = kg$，则显然 $\mathrm{Ker}\,f = \mathrm{Ker}\,g$. 下证充分性. 由 $f \neq 0$ 可知，存在 $\alpha \in V$，使得 $f(\alpha) \neq 0$，故可设 $g(\alpha) = kf(\alpha)$. 对任意的 $v \in V$，若设 $f(v) = cf(\alpha)$，则 $f(v - c\alpha) = 0$，即 $v - c\alpha \in \mathrm{Ker}\,f = \mathrm{Ker}\,g$，从而 $g(v - c\alpha) = 0$，故 $g(v) = cg(\alpha)$. 因此，对任意的 $v \in V$ 有
> $$g(v) = cg(\alpha) = ckf(\alpha) = kcf(\alpha) = kf(v),$$
> 于是 $g = kf$，即 $f$ 和 $g$ 线性相关. $\square$

> [!example]
> **例 10.2**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的 $n$ 维线性空间，$f, g$ 是 $V$ 上的非零线性函数. 求证：若 $f, g$ 线性无关，则对任意的 $v \in V$，存在分解 $v = u + w$，使得 $f(v) = f(w)$, $g(v) = g(u)$.

> [!proof]-
> 设 $e_1, e_2, \cdots, e_n$ 是 $V$ 的一组基，则 $\alpha = \sum\limits_{i=1}^{n} c_i e_i \in \mathrm{Ker}\,f$ 当且仅当
> $$0 = f(\alpha) = f\left(\sum_{i=1}^{n} c_i e_i\right) = \sum_{i=1}^{n} c_i f(e_i),$$
> 换言之，$\alpha \in \mathrm{Ker}\,f$ 当且仅当 $\alpha$ 的坐标向量 $(c_1, c_2, \cdots, c_n)'$ 是线性方程 $f(e_1)x_1 + f(e_2)x_2 + \cdots + f(e_n)x_n = 0$ 的解. 由于 $f, g$ 都是非零线性函数，故由线性映射的维数公式可知 $\dim \mathrm{Ker}\,f = n - 1$, $\dim \mathrm{Ker}\,g = n - 1$. 根据一开始的说明可知，$\mathrm{Ker}\,f \cap \mathrm{Ker}\,g$ 是下列联立线性方程组的解空间：
> $$\begin{cases} f(e_1)x_1 + f(e_2)x_2 + \cdots + f(e_n)x_n = 0, \\ g(e_1)x_1 + g(e_2)x_2 + \cdots + g(e_n)x_n = 0. \end{cases}$$


若上述方程组的系数矩阵的秩等于 1，则存在 $k \in \mathbb{F}$，使得 $g(e_i) = kf(e_i)\ (1 \leq i \leq n)$，于是 $g = kf$，这与 $f, g$ 线性无关矛盾. 因此上述方程组的系数矩阵的秩等于 2，从而 $\dim(\mathrm{Ker}\,f \cap \mathrm{Ker}\,g) = n - 2$. 再由交和空间的维数公式可知

$$\dim(\mathrm{Ker}\,f + \mathrm{Ker}\,g) = \dim \mathrm{Ker}\,f + \dim \mathrm{Ker}\,g - \dim(\mathrm{Ker}\,f \cap \mathrm{Ker}\,g)$$
$$= (n - 1) + (n - 1) - (n - 2) = n = \dim V,$$

于是 $V = \mathrm{Ker}\,f + \mathrm{Ker}\,g$. 因此对任意的 $v \in V$，存在分解 $v = u + w$，其中 $u \in \mathrm{Ker}\,f$, $w \in \mathrm{Ker}\,g$，使得 $f(v) = f(w)$, $g(v) = g(u)$. $\square$

> [!remark]
> 由例 10.2 的证明方法不难得到例 10.1 在有限维线性空间情形的另一证明，请读者自行补充完整.

> [!example]
> **例 10.3**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的 $n$ 维线性空间，$U$ 是 $V$ 的非平凡子空间，求证：必存在 $V$ 上的线性函数 $f_i\ (1 \leq i \leq r)$，使得 $U = \bigcap\limits_{i=1}^{r} \mathrm{Ker}\,f_i$.

> [!proof]-
> 设 $e_{r+1}, \cdots, e_n$ 是 $U$ 的一组基，将它扩张为 $V$ 的一组基 $e_1, \cdots, e_r, e_{r+1}, \cdots, e_n$. 设 $f_1, f_2, \cdots, f_n$ 为上述基的对偶基，即满足 $f_i(e_j) = \delta_{ij}$，则不难验证 $\mathrm{Ker}\,f_i = L(e_1, \cdots, e_{i-1}, e_{i+1}, \cdots, e_n)$，于是 $U = L(e_{r+1}, \cdots, e_n) = \bigcap\limits_{i=1}^{r} \mathrm{Ker}\,f_i$. $\square$

> [!example]
> **例 10.4**
>
> 设 $U, V$ 是数域 $\mathbb{F}$ 上的线性空间（不必假设维数有限），$U^*, V^*$ 分别是它们的共轭空间. 求证：
> $$U^* \oplus V^* \cong (U \oplus V)^*.$$

> [!proof]-
> 设 $f_1 \in U^*, f_2 \in V^*$，定义 $f$ 为 $U \oplus V$ 上的线性函数：
> $$f(x + y) = f_1(x) + f_2(y), \quad x \in U, y \in V.$$
> 令 $\varphi(f_1 + f_2) = f$，则不难验证 $\varphi$ 是 $U^* \oplus V^* \to (U \oplus V)^*$ 的线性映射. 另一方面，假设 $f$ 是 $U \oplus V$ 上的线性函数，令 $f_1, f_2$ 分别是 $f$ 在 $U, V$ 上的限制，定义 $\psi$ 是 $(U \oplus V)^* \to U^* \oplus V^*$ 的线性映射：$\psi(f) = f_1 + f_2$. 容易验证 $\psi\varphi$ 和 $\varphi\psi$ 分别是 $U^* \oplus V^*$ 和 $(U \oplus V)^*$ 上的恒等映射，因此 $\varphi$ 是线性同构. $\square$


> [!example]
> **例 10.5**
>
> 设 $V_1$ 是线性空间 $V$（不必假设维数有限）的子空间，记
> $$V_1^\perp = \{f \in V^* \mid \langle f, V_1 \rangle = 0\}.$$
>
> 求证：$V_1^\perp$ 是 $V^*$ 的子空间，且若 $V_2$ 是 $V$ 的另外一个子空间，则
> $$V_1^\perp \cap V_2^\perp = (V_1 + V_2)^\perp.$$

> [!proof]-
> 容易验证 $V_1^\perp$ 是子空间. 若 $U, W$ 是 $V$ 的子空间且 $U \subseteq W$，显然有 $W^\perp \subseteq U^\perp$. 因此 $(V_1 + V_2)^\perp \subseteq V_1^\perp$, $(V_1 + V_2)^\perp \subseteq V_2^\perp$，从而 $(V_1 + V_2)^\perp \subseteq V_1^\perp \cap V_2^\perp$. 反之，若 $f \in V_1^\perp \cap V_2^\perp$，则对任意的 $v_1 \in V_1, v_2 \in V_2$，$\langle f, v_1 + v_2 \rangle = f(v_1) + f(v_2) = 0$，因此 $f \in (V_1 + V_2)^\perp$，即有 $V_1^\perp \cap V_2^\perp \subseteq (V_1 + V_2)^\perp$. 这就证明了后一个结论. $\square$

> [!example]
> **例 10.6**
>
> 设 $V$ 是数域 $\mathbb{F}$ 上的 $n$ 维线性空间，$V_1$ 是 $V$ 的子空间，求证：
> $$\dim V = \dim V_1 + \dim V_1^\perp.$$

> [!proof]-
> 取 $V_1$ 的一组基 $e_1, \cdots, e_r$，并扩张为 $V$ 的一组基 $e_1, e_2, \cdots, e_n$，再取其对偶基 $f_1, f_2, \cdots, f_n$. 由对偶基的定义可知 $f_j(e_i) = 0\ (1 \leq i \leq r, r + 1 \leq j \leq n)$，从而 $f_j(V_1) = 0$，即 $f_j \in V_1^\perp\ (r + 1 \leq j \leq n)$. 另一方面，任取 $f \in V_1^\perp$，设 $f = a_1f_1 + a_2f_2 + \cdots + a_nf_n$，依次作用上 $e_1, \cdots, e_r$ 可得 $a_1 = \cdots = a_r = 0$，故 $f$ 是 $f_{r+1}, \cdots, f_n$ 的线性组合. 因此 $f_{r+1}, \cdots, f_n$ 是 $V_1^\perp$ 的一组基，特别地，$\dim V_1^\perp = n - r$，故结论成立. $\square$

> [!example]
> **例 10.7**
>
> 设 $V_1, V_2$ 是 $n$ 维线性空间 $V$ 的子空间，将 $V$ 看成是 $V^*$ 的对偶空间. 求证：
> $$(V_1^\perp)^\perp = V_1, \quad (V_1 \cap V_2)^\perp = V_1^\perp + V_2^\perp.$$

> [!proof]-
> 显然 $V_1 \subseteq (V_1^\perp)^\perp$. 由例 10.6 可知 $\dim V_1^\perp = n - \dim V_1$，故 $\dim(V_1^\perp)^\perp = n - \dim V_1^\perp = \dim V_1$，于是 $(V_1^\perp)^\perp = V_1$. 由例 10.5 和第一个结论可知，
> $$(V_1^\perp + V_2^\perp)^\perp = (V_1^\perp)^\perp \cap (V_2^\perp)^\perp = V_1 \cap V_2,$$
> 再次由第一个结论可得 $(V_1 \cap V_2)^\perp = ((V_1^\perp + V_2^\perp)^\perp)^\perp = V_1^\perp + V_2^\perp$. $\square$


> [!example]
> **例 10.8**
>
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$\varphi^*$ 是 $\varphi$ 的对偶变换，求证：
> $$\mathrm{Im}\,\varphi^* = (\mathrm{Ker}\,\varphi)^\perp.$$

> [!proof]-
> **证法 1** 假设 $f \in \mathrm{Im}\,\varphi^*$，则存在 $g \in V^*$，使得 $f = \varphi^*(g)$. 对 $\mathrm{Ker}\,\varphi$ 中任一向量 $x$，有
> $$\langle f, x \rangle = \langle \varphi^*(g), x \rangle = \langle g, \varphi(x) \rangle = 0.$$
> 因此 $f \in (\mathrm{Ker}\,\varphi)^\perp$，从而 $\mathrm{Im}\,\varphi^* \subseteq (\mathrm{Ker}\,\varphi)^\perp$.
>
> 另一方面，设 $\dim \mathrm{Ker}\,\varphi = k$，则由例 10.6 可得 $\dim(\mathrm{Ker}\,\varphi)^\perp = n - k$. 设 $\varphi$ 在 $V$ 的一组基 $\{e_1, \cdots, e_n\}$ 下的表示矩阵为 $A$，则 $\varphi^*$ 在 $V^*$ 的对偶基 $\{f_1, \cdots, f_n\}$ 下的表示矩阵为 $A'$. 于是 $\dim \mathrm{Im}\,\varphi^* = \mathrm{r}(A') = \mathrm{r}(A) = \dim \mathrm{Im}\,\varphi = n - k$，从而可得 $\mathrm{Im}\,\varphi^* = (\mathrm{Ker}\,\varphi)^\perp$.
>
> **证法 2** 由例 10.7 可知，我们只要证明 $\mathrm{Ker}\,\varphi = (\mathrm{Im}\,\varphi^*)^\perp$ 即可. 若 $x \in \mathrm{Ker}\,\varphi$，则对任意的 $\varphi^*(f) \in \mathrm{Im}\,\varphi^*$，有 $\langle \varphi^*(f), x \rangle = \langle f, \varphi(x) \rangle = 0$，因此 $x \in (\mathrm{Im}\,\varphi^*)^\perp$，即 $\mathrm{Ker}\,\varphi \subseteq (\mathrm{Im}\,\varphi^*)^\perp$. 另一方面，任取 $x \in (\mathrm{Im}\,\varphi^*)^\perp$，则对任意的 $\varphi^*(f) \in \mathrm{Im}\,\varphi^*$，有 $0 = \langle \varphi^*(f), x \rangle = \langle f, \varphi(x) \rangle$. 由 $f$ 的任意性可知 $\varphi(x) = 0$，即 $x \in \mathrm{Ker}\,\varphi$，从而 $(\mathrm{Im}\,\varphi^*)^\perp \subseteq \mathrm{Ker}\,\varphi$，于是结论得证. $\square$

> [!remark]
> 例 10.8 证法 2 的好处是，证明 $\mathrm{Ker}\,\varphi = (\mathrm{Im}\,\varphi^*)^\perp$ 的过程不涉及维数的有限性，从而这一结论在无限维线性空间的情形依然成立（此时需要无限维线性空间基的存在性）. 然而 $\mathrm{Im}\,\varphi^* = (\mathrm{Ker}\,\varphi)^\perp$ 这一结论一般不能推广到无限维线性空间的情形，但在一些特殊情况下可以推广，我们来看下面的例题.

> [!example]
> **例 10.9**
>
> 设 $\varphi$ 是线性空间 $V$（不要求是有限维）上的幂等线性变换（即 $\varphi^2 = \varphi$），$\varphi^*$ 是 $\varphi$ 的对偶变换，求证：
> $$\mathrm{Im}\,\varphi^* = (\mathrm{Ker}\,\varphi)^\perp.$$

> [!proof]-
> 与例 10.8 完全一样的证明可得 $\mathrm{Im}\,\varphi^* \subseteq (\mathrm{Ker}\,\varphi)^\perp$. 另一方面，任取 $f \in (\mathrm{Ker}\,\varphi)^\perp$，如果能证明 $f = \varphi^*(f)$，就能得到 $f \in \mathrm{Im}\,\varphi^*$，从而 $\mathrm{Im}\,\varphi^* = (\mathrm{Ker}\,\varphi)^\perp$ 成立. 事实上，对任意的 $v \in V$，由 $\varphi^2 = \varphi$ 可知 $v - \varphi(v) \in \mathrm{Ker}\,\varphi$，于是 $f(v - \varphi(v)) = 0$，从而 $f(v) = f(\varphi(v)) = \varphi^*(f)(v)$ 对任意的 $v \in V$ 成立，因此 $f = \varphi^*(f)$. $\square$

> [!example]
> **例 10.10**
>
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$V_1$ 是 $V$ 的子空间，求证：$V_1$ 是 $\varphi$ 的不变子空间的充要条件是 $V_1^\perp$ 是 $\varphi^*$ 的不变子空间.

> [!proof]-
> 若 $V_1$ 是 $\varphi$ 的不变子空间，则对任意的 $v \in V_1$，有 $\varphi(v) \in V_1$，从而对任意的 $f \in V_1^\perp$，有 $\langle \varphi^*(f), v \rangle = \langle f, \varphi(v) \rangle = 0$，即 $\varphi^*(f) \in V_1^\perp$，于是 $V_1^\perp$ 是 $\varphi^*$ 的不变子空间.


反之，若 $V_1^\perp$ 是 $\varphi^*$ 的不变子空间，则对任意的 $f \in V_1^\perp$，有 $\varphi^*(f) \in V_1^\perp$，从而对任意的 $v \in V_1$，有 $\langle f, \varphi(v) \rangle = \langle \varphi^*(f), v \rangle = 0$，即 $\varphi(v) \in (V_1^\perp)^\perp = V_1$，于是 $V_1$ 是 $\varphi$ 的不变子空间. $\square$

> [!remark]
> 设 $V$ 是线性空间（不要求是有限维），$V_1$ 是 $V$ 的子空间，若承认无限维线性空间基的存在性，则可证明对任一 $v \notin V_1$，存在 $f \in V_1^\perp$，使得 $f(v) \neq 0$. 如果有了这一结论，则例 10.10 的结论对无限维线性空间也成立.

> [!example]
> **例 10.11**
>
> 设 $V, U$ 是 $\mathbb{F}$ 上的有限维线性空间，$\varphi$ 是 $V \to U$ 的线性映射. 求证：若将 $V$ 与 $V^*$, $U$ 与 $U^*$ 看成是互为对偶的空间，则 $(\varphi^*)^* = \varphi$.

> [!proof]-
> 对任意的 $x \in V = V^{**}$, $f \in U^*$，我们有
> $$\langle f, \varphi(x) \rangle = \langle \varphi^*(f), x \rangle = \langle f, \varphi^{**}(x) \rangle,$$
> 因此 $\varphi(x) = \varphi^{**}(x)$，即 $\varphi = \varphi^{**}$. $\square$

> [!example]
> **例 10.12**
>
> 设 $V$ 是 $n$ 维欧氏空间，则对任一固定的 $u \in V$，$(u, -)$ 是 $V$ 上的线性函数，作映射 $\eta: V \to V^*$, $\eta(u) = (u, -)$. 证明：
>
> (1) $\eta$ 是线性同构，特别地，若将 $u$ 与 $(u, -)$ 等同起来，则 $\langle u, v \rangle = (u, v)$，即可将 $V$ 看成是自身的对偶空间；
>
> (2) $V$ 的任一组标准正交基 $e_1, e_2, \cdots, e_n$ 的对偶基是其自身；
>
> (3) $V$ 上任一线性变换 $\varphi$ 的对偶变换就是 $\varphi$ 的伴随.

> [!proof]-
> (1) 容易验证 $(u, -)$ 是线性函数以及 $\eta$ 是线性映射. 假设 $\eta(u) = 0$，则对任意的 $v \in V$，$(u, v) = \eta(u)(v) = 0$，由内积的正定性可得 $u = 0$，因此 $\eta$ 是单映射. 又 $\dim V^* = \dim V = n$，故由线性映射的维数公式可知 $\eta$ 是线性同构.
>
> (2) 由 (1) 以及 $(e_i, e_j) = \delta_{ij}$ 即得结论.
>
> (3) 记 $\varphi^\sharp$ 是 $\varphi$ 的对偶变换，$\varphi^*$ 是 $\varphi$ 的伴随，则由 (1) 可知
> $$\langle \varphi^\sharp(u), v \rangle = \langle u, \varphi(v) \rangle = (u, \varphi(v)) = (\varphi^*(u), v) = \langle \varphi^*(u), v \rangle,$$
> 再由 $u, v$ 的任意性即得 $\varphi^\sharp = \varphi^*$. $\square$

---

### §10.3 双线性型与纯量积

<!-- Page 10 (continued) -->

> [!example]
> **例 10.13**
>
> 设 $g$ 是 $U, V$ 上的非退化双线性型，若 $\{u_i\}, \{v_i\}\ (1 \leq i \leq n)$ 分别是 $U, V$ 的基，使得 $g(u_i, v_j) = \delta_{ij}$，则称 $\{u_i\}, \{v_i\}$ 是关于 $g$ 的对偶基. 设 $\varphi$ 是 $V$ 上的线性变换，$\varphi^*$ 是 $\varphi$ 关于 $g$ 的对偶变换. 若 $\varphi$ 在基 $\{v_i\}$ 下的表示矩阵为 $A$，求证：$\varphi^*$ 在基 $\{u_i\}$ 下的表示矩阵是 $A'$.


> [!proof]-
> 设 $\varphi^*$ 在基 $\{u_i\}$ 下的表示矩阵为 $B = (b_{ij})$，则有
> $$\varphi^*(u_i) = b_{1i}u_1 + b_{2i}u_2 + \cdots + b_{ni}u_n, \quad 1 \leq i \leq n.$$
> 设 $A = (a_{ij})$，则有
> $$\varphi(v_j) = a_{1j}v_1 + a_{2j}v_2 + \cdots + a_{nj}v_n, \quad 1 \leq j \leq n.$$
> 注意到
> $$b_{ji} = g(\varphi^*(u_i), v_j) = g(u_i, \varphi(v_j)) = a_{ij}, \quad 1 \leq i, j \leq n,$$
> 此即 $B = A'$. $\square$

> [!example]
> **例 10.14**
>
> 设 $g$ 是 $U, V$ 上的非零双线性型，证明：必存在 $U, V$ 的子空间 $U_0, V_0$，使得 $g$ 在 $U_0, V_0$ 上的限制是非退化的双线性型，且
> $$\dim U_0 = \dim V_0 = \dim U - \dim L,$$
> 其中 $L$ 是 $g$ 的左根子空间.

> [!proof]-
> 设 $g$ 在 $U$ 的基 $\{u_1, u_2, \cdots, u_m\}$ 和 $V$ 的基 $\{v_1, v_2, \cdots, v_n\}$ 下的表示矩阵为相抵标准型，即
> $$A = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}.$$
> 令 $U_0$ 是由基向量 $u_1, \cdots, u_r$ 生成的子空间，$V_0$ 是由基向量 $v_1, \cdots, v_r$ 生成的子空间. 显然，将 $g$ 限制在 $U_0, V_0$ 上是非退化的双线性型，且 $\dim U_0 = \dim V_0 = r$. 又 $g$ 的左根子空间就是由 $u_{r+1}, \cdots, u_m$ 生成的子空间，因此 $\dim L = m - r$，即有 $\dim U_0 = \dim U - \dim L$. $\square$

> [!example]
> **例 10.15**
>
> 设 $g$ 是 $U, V$ 上的非退化双线性型，$\varphi, \psi$ 是 $V$ 上的线性变换，求证：
>
> (1) $(k\varphi + l\psi)^* = k\varphi^* + l\psi^*$，其中 $k, l$ 是常数；
>
> (2) $(\psi\varphi)^* = \varphi^*\psi^*$；
>
> (3) 若 $\varphi$ 是 $V$ 的自同构，则 $\varphi^*$ 是 $U$ 的自同构，此时 $(\varphi^*)^{-1} = (\varphi^{-1})^*$；
>
> (4) $(\varphi^*)^* = \varphi$.


> [!proof]-
> (1) 对任意的 $u \in U, v \in V$，由对偶变换的定义可得
> $$g(u, (k\varphi + l\psi)(v)) = g(u, k\varphi(v)) + g(u, l\psi(v)) = g(k\varphi^*(u), v) + g(l\psi^*(u), v)$$
> $$= g((k\varphi + l\psi)^*(u), v),$$
> 再由对偶变换的唯一性即得 $(k\varphi + l\psi)^* = k\varphi^* + l\psi^*$.
>
> (2) 对任意的 $u \in U, v \in V$，由对偶变换的定义可得
> $$g(u, \psi\varphi(v)) = g(\psi^*(u), \varphi(v)) = g(\varphi^*\psi^*(u), v),$$
> 再由对偶变换的唯一性即得 $(\psi\varphi)^* = \varphi^*\psi^*$.
>
> (3) 若 $\varphi$ 是 $V$ 的自同构，则 $\varphi^{-1}\varphi = \varphi\varphi^{-1} = I_V$. 两边同取对偶，由 (2) 可得
> $$\varphi^*(\varphi^{-1})^* = (\varphi^{-1})^*\varphi^* = I_V^* = I_U,$$
> 故 $\varphi^*$ 是 $U$ 的自同构，并且 $(\varphi^*)^{-1} = (\varphi^{-1})^*$.
>
> (4) 对任意的 $u \in U, v \in V$，由对偶变换的定义可得
> $$g(u, \varphi(v)) = g(\varphi^*(u), v) = g(u, (\varphi^*)^*(v)),$$
> 再由对偶变换的唯一性即得 $(\varphi^*)^* = \varphi$. 本题也可利用例 10.13 的结论来证明. $\square$

> [!example]
> **例 10.16**
>
> 设 $g, h$ 是 $n$ 维线性空间 $V$ 上秩相同的纯量积，求证：必存在 $V$ 上的可逆线性变换 $\varphi, \psi$，使得 $h(x, y) = g(\varphi(x), \psi(y))$ 对一切 $x, y \in V$ 成立.

> [!proof]-
> 我们用矩阵方法来证明结论. 设 $g, h$ 在 $V$ 的某一组基下的表示矩阵分别为 $A, B$，向量 $x, y$ 的坐标向量（用列向量表示）分别为 $\alpha, \beta$，则
> $$g(x, y) = \alpha'A\beta, \quad h(x, y) = \alpha'B\beta.$$
> 又假设线性变换 $\varphi$ 和 $\psi$ 在同一组基下的表示矩阵分别为 $C, D$（待定），则
> $$g(\varphi(x), \psi(y)) = (C\alpha)'A(D\beta) = \alpha'C'AD\beta.$$
> 因为 $A$ 和 $B$ 秩相同，故存在可逆矩阵 $C, D$，使得 $C'AD = B$，于是结论得证. $\square$

> [!example]
> **例 10.17**
>
> 设 $W = U \oplus V$，$g$ 是 $U$ 上的纯量积，$h$ 是 $V$ 上的纯量积. 现定义 $W$ 上的纯量积 $q$ 如下：
> $$q(x + y, u + v) = g(x, u) + h(y, v),$$


其中 $x, u \in U, y, v \in V$，求证：

(1) 若 $g, h$ 非退化，则 $q$ 也非退化；

(2) 若 $g, h$ 是对称型（交错型），则 $q$ 也是对称型（交错型）；

(3) 若 $\{u_i\}, \{v_i\}$ 分别是 $U$ 和 $V$ 的基，且 $g, h$ 在这两组基下的表示矩阵分别为 $A, B$，则 $q$ 在 $W$ 的基 $\{u_i\} \cup \{v_i\}$ 下的表示矩阵为分块对角矩阵 $\mathrm{diag}\{A, B\}$.

> [!proof]-
> 若矩阵 $A$ 和 $B$ 可逆，则 $\mathrm{diag}\{A, B\}$ 也可逆，因此 (1) 是 (3) 的推论. (2) 的验证很容易，现只需证明 (3). 因为
> $$q(u_i, v_j) = q(u_i + 0, 0 + v_j) = g(u_i, 0) + h(0, v_j) = 0,$$
> 以及 $q(v_j, u_i) = 0$，所以 $q$ 的表示矩阵是分块对角矩阵. 又
> $$q(u_i, u_j) = g(u_i, u_j), \quad q(v_i, v_j) = h(v_i, v_j),$$
> 因此结论成立. $\square$

> [!example]
> **例 10.18**
>
> 设 $V$ 是由 $n$ 阶实矩阵全体构成的欧氏空间（取 Frobenius 内积），则 Frobenius 内积 $(-,-)$ 是 $V$ 上的非退化对称型. 设 $A_1, \cdots, A_{n^2}$ 是 $V$ 的一组基，$B_1, \cdots, B_{n^2}$ 是其对偶基，即满足 $(A_i, B_j) = \delta_{ij}\ (1 \leq i, j \leq n^2)$. 求证：
> $$\sum_{i=1}^{n^2} A_i B_i = I_n.$$

> [!proof]-
> 设 $E_{11}, \cdots, E_{nn}$ 是 $n$ 阶基础矩阵，为书写方便将它们依次标记为 $E_1, \cdots, E_{n^2}$. 显然，这是 $V$ 的一组标准正交基，从而它的对偶基也是其自身. 设
> $$(A_1, \cdots, A_{n^2}) = (E_1, \cdots, E_{n^2})P, \quad (B_1, \cdots, B_{n^2}) = (E_1, \cdots, E_{n^2})Q,$$
> 其中 $P = (p_{ij})$, $Q = (q_{ij})$ 是基之间的过渡矩阵，则 $A_i = \sum\limits_{k=1}^{n^2} p_{ki}E_k$, $B_j = \sum\limits_{l=1}^{n^2} q_{lj}E_l$. 于是对任意的 $1 \leq i, j \leq n^2$ 有
> $$\delta_{ij} = (A_i, B_j) = \left(\sum_{k=1}^{n^2} p_{ki}E_k, \sum_{l=1}^{n^2} q_{lj}E_l\right) = \sum_{k=1}^{n^2} p_{ki}q_{kj},$$
> 这即为 $P'Q = I_{n^2}$. 于是 $QP' = I_{n^2}$，从而 $PQ' = I_{n^2}$，此即 $\sum\limits_{i=1}^{n^2} p_{ki}q_{li} = \delta_{kl}$. 因此
> $$\sum_{i=1}^{n^2} A_iB_i = \sum_{i,k,l=1}^{n^2} p_{ki}q_{li}E_kE_l = \sum_{k,l=1}^{n^2} \left(\sum_{i=1}^{n^2} p_{ki}q_{li}\right)E_kE_l = \sum_{k,l=1}^{n^2} \delta_{kl}E_kE_l$$
> $$= \sum_{k=1}^{n^2} E_k^2 = \sum_{i,j=1}^{n} E_{ij}E_{ij} = \sum_{i=1}^{n} E_{ii} = I_n. \; \square$
