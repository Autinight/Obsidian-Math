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

## 第7章 相似标准型

### §7.1 基本概念

#### 7.1.1 $\lambda$-矩阵及其法式

**1. 多项式矩阵的定义**

设 $\boldsymbol{A}(\lambda)=(a_{ij}(\lambda))$ 是一个 $m\times n$ 矩阵, 它的元素 $a_{ij}(\lambda)$ 是数域 $\mathbb{F}$ 上以 $\lambda$ 为未定元的多项式, 这样的矩阵被称为**多项式矩阵**或 $\lambda$**-矩阵**.

**2. $\lambda$-矩阵的初等变换和初等 $\lambda$-矩阵**

对 $\lambda$-矩阵 $\boldsymbol{A}(\lambda)$ 施行的下列 3 种变换称为 $\lambda$-矩阵的**初等变换**：

(1) 将 $\boldsymbol{A}(\lambda)$ 的两行 (或两列) 对换;

(2) 将 $\boldsymbol{A}(\lambda)$ 的某一行 (列) 乘以非零常数 $c$;

(3) 将 $\boldsymbol{A}(\lambda)$ 的某一行 (列) 乘以 $\mathbb{F}$ 上的某个多项式加到另外一行 (列) 上去.

对单位矩阵施以 $\lambda$-矩阵的初等变换, 得到的矩阵称为**初等 $\lambda$-矩阵**.

**3. $\lambda$-矩阵的相抵**

设 $\boldsymbol{A}(\lambda)$ 和 $\boldsymbol{B}(\lambda)$ 都是 $\lambda$-矩阵, 若经过有限次 $\lambda$-矩阵的初等变换可将 $\boldsymbol{A}(\lambda)$ 变为 $\boldsymbol{B}(\lambda)$, 则称 $\boldsymbol{A}(\lambda)$ 和 $\boldsymbol{B}(\lambda)$ **等价**或**相抵**.

**4. 可逆 $\lambda$-矩阵**

设 $\boldsymbol{A}(\lambda)$ 和 $\boldsymbol{B}(\lambda)$ 都是 $\lambda$-矩阵, 若 $\boldsymbol{A}(\lambda)\boldsymbol{B}(\lambda)=\boldsymbol{B}(\lambda)\boldsymbol{A}(\lambda)=\boldsymbol{I}_n$, 则称 $\boldsymbol{A}(\lambda)$ 为**可逆 $\lambda$-矩阵**.

> [!theorem] **5. 定理**
>
> 两个 $n$ 阶数字矩阵 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 相似的充要条件是它们的特征矩阵 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 和 $\lambda\boldsymbol{I}_n-\boldsymbol{B}$ 作为 $\lambda$-矩阵相抵.


> [!theorem] **6. 定理**
>
> 设 $\boldsymbol{A}(\lambda)$ 是 $n$ 阶 $\lambda$-矩阵, 则 $\boldsymbol{A}(\lambda)$ 相抵于下列对角矩阵:
> $$\operatorname{diag}\{d_1(\lambda), d_2(\lambda), \cdots, d_r(\lambda), 0, \cdots, 0\}, \tag{7.1}$$
> 其中 $d_i(\lambda)$ 是非零首一多项式, 且 $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq r-1)$. 特别地, 若 $\boldsymbol{A}$ 是数字矩阵, 则它的特征矩阵 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 相抵于下列对角矩阵:
> $$\operatorname{diag}\{1, \cdots, 1, d_1(\lambda), \cdots, d_m(\lambda)\}, \tag{7.2}$$
> 其中 $d_i(\lambda)$ 是非常数首一多项式, 且 $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq m-1)$.

(7.1) 式称为 $\lambda$-矩阵 $\boldsymbol{A}(\lambda)$ 的**法式**; (7.2) 式称为数字矩阵 $\boldsymbol{A}$ 的**法式**.

#### 7.1.2 不变因子和有理标准型

**1. 行列式因子**

设 $\boldsymbol{A}(\lambda)$ 是 $n$ 阶 $\lambda$-矩阵, $k$ 是不超过 $n$ 的正整数. 如果 $\boldsymbol{A}(\lambda)$ 有一个 $k$ 阶子式不为零, 则定义 $\boldsymbol{A}(\lambda)$ 的 $k$ 阶**行列式因子** $D_k(\lambda)$ 为 $\boldsymbol{A}(\lambda)$ 的所有 $k$ 阶子式的最大公因式 (首一多项式); 如果 $\boldsymbol{A}(\lambda)$ 的所有 $k$ 阶子式全为零, 则定义 $\boldsymbol{A}(\lambda)$ 的 $k$ 阶行列式因子 $D_k(\lambda)=0$.

**2. 不变因子**

设 $n$ 阶 $\lambda$-矩阵 $\boldsymbol{A}(\lambda)$ 的非零行列式因子为 $D_1(\lambda), D_2(\lambda), \cdots, D_r(\lambda)$, 则必有 $D_i(\lambda) \mid D_{i+1}(\lambda)\, (1 \leq i \leq r-1)$. 记 $d_1(\lambda)=D_1(\lambda)$, $d_2(\lambda)=D_2(\lambda)/D_1(\lambda)$, $\cdots$, $d_r(\lambda)=D_r(\lambda)/D_{r-1}(\lambda)$, 多项式
$$\{d_1(\lambda), d_2(\lambda), \cdots, d_r(\lambda)\}$$
称为 $\boldsymbol{A}(\lambda)$ 的**不变因子**.

对数字矩阵 $\boldsymbol{A}$, 其不变因子定义为它的特征矩阵 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 的不变因子. $\boldsymbol{A}$ 的不变因子就是 (7.2) 式中的多项式 $\{1, \cdots, 1, d_1(\lambda), \cdots, d_m(\lambda)\}$.

> [!theorem] **3. 定理**
>
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}, \boldsymbol{B}$ 在 $\mathbb{F}$ 上相似的充要条件是它们有相同的行列式因子或有相同的不变因子.


> [!corollary] **4. 推论**
>
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 数域 $\mathbb{K}$ 包含数域 $\mathbb{F}$, 则 $\boldsymbol{A}, \boldsymbol{B}$ 在 $\mathbb{F}$ 上相似的充要条件是它们在 $\mathbb{K}$ 上相似.

**5. Frobenius 矩阵**

下列形状的矩阵称为多项式 $f(x)=x^n+a_1x^{n-1}+\cdots+a_{n-1}x+a_n$ 的 **Frobenius 块**或 **Frobenius 矩阵**：

$$\boldsymbol{F}(f(x)) = \begin{pmatrix} 0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \cdots & 1 \\ -a_n & -a_{n-1} & -a_{n-2} & \cdots & -a_1 \end{pmatrix}.$$

$\boldsymbol{F}(f(x))$ 是 $f(x)$ 的友阵 $\boldsymbol{C}(f(x))$ 的转置.

> [!theorem] **6. 定理**
>
> 设数域 $\mathbb{F}$ 上 $n$ 阶矩阵 $\boldsymbol{A}$ 的非常数不变因子为 $d_1(\lambda), d_2(\lambda), \cdots, d_k(\lambda)$, 则 $\boldsymbol{A}$ 在 $\mathbb{F}$ 上相似于分块对角矩阵
> $$\boldsymbol{F} = \operatorname{diag}\{\boldsymbol{F}(d_1(\lambda)), \boldsymbol{F}(d_2(\lambda)), \cdots, \boldsymbol{F}(d_k(\lambda))\}, \tag{7.3}$$
> $$\boldsymbol{C} = \operatorname{diag}\{\boldsymbol{C}(d_1(\lambda)), \boldsymbol{C}(d_2(\lambda)), \cdots, \boldsymbol{C}(d_k(\lambda))\}. \tag{7.4}$$
> 上述两个分块对角矩阵 $\boldsymbol{F}, \boldsymbol{C}$ 互为转置, 称为 $\boldsymbol{A}$ 的 **Frobenius 标准型**或**有理标准型**.

> [!theorem] **7. 定理**
>
> 设数域 $\mathbb{F}$ 上 $n$ 阶矩阵 $\boldsymbol{A}$ 的非常数不变因子为 $d_1(\lambda), d_2(\lambda), \cdots, d_k(\lambda)$, 其中 $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq k-1)$, 则 $\boldsymbol{A}$ 的特征多项式是 $d_1(\lambda)d_2(\lambda)\cdots d_k(\lambda)$, 极小多项式是 $d_k(\lambda)$.

#### 7.1.3 初等因子和 Jordan 标准型

**1. 初等因子**

设数域 $\mathbb{F}$ 上 $n$ 阶矩阵 $\boldsymbol{A}$ 的非常数不变因子为 $d_1(\lambda), d_2(\lambda), \cdots, d_k(\lambda)$, 在 $\mathbb{F}$ 上


将 $d_i(\lambda)$ 分解为不可约因子的积:

$$\begin{aligned} d_1(\lambda) &= P_1(\lambda)^{e_{11}}P_2(\lambda)^{e_{12}}\cdots P_t(\lambda)^{e_{1t}}, \\ d_2(\lambda) &= P_1(\lambda)^{e_{21}}P_2(\lambda)^{e_{22}}\cdots P_t(\lambda)^{e_{2t}}, \\ &\cdots\cdots\cdots\cdots \\ d_k(\lambda) &= P_1(\lambda)^{e_{k1}}P_2(\lambda)^{e_{k2}}\cdots P_t(\lambda)^{e_{kt}}, \end{aligned}$$

其中 $e_{ij} \geq 0$. 若上式中的 $e_{ij} > 0$, 则称多项式 $P_j(\lambda)^{e_{ij}}$ 为矩阵 $\boldsymbol{A}$ 的一个**初等因子**. $\boldsymbol{A}$ 的初等因子全体称为 $\boldsymbol{A}$ 的**初等因子组**.

> [!theorem] **2. 定理**
>
> 数域 $\mathbb{F}$ 上的两个 $n$ 阶矩阵相似的充要条件是它们有相同的初等因子组.

> [!theorem] **3. 定理**
>
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 在复数域上的初等因子组为
> $$(\lambda-\lambda_1)^{r_1},\, (\lambda-\lambda_2)^{r_2},\, \cdots,\, (\lambda-\lambda_k)^{r_k},$$
> 则 $\boldsymbol{A}$ 相似于分块对角矩阵
> $$\boldsymbol{J} = \operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \boldsymbol{J}_{r_2}(\lambda_2), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}, \tag{7.5}$$
> 其中 $\boldsymbol{J}_{r_i}(\lambda_i)$ 是特征值为 $\lambda_i$ 的 $r_i$ 阶 **Jordan 块**, 即
> $$\boldsymbol{J}_{r_i}(\lambda_i) = \begin{pmatrix} \lambda_i & 1 & & \\ & \lambda_i & 1 & \\ & & \ddots & \ddots \\ & & & \lambda_i & 1 \\ & & & & \lambda_i \end{pmatrix}.$$

(7.5) 式中的分块对角矩阵 $\boldsymbol{J}$ 称为 $\boldsymbol{A}$ 的 **Jordan 标准型**.

> [!theorem] **4. 定理**
>
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 则必存在 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型.

> [!theorem] **5. 定理**
>
> 设 $\boldsymbol{A}$ 是 $n$ 阶复矩阵 (或 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换), 则以下 3 个结论等价:
> (1) $\boldsymbol{A}$ (或 $\varphi$) 可对角化;
> (2) $\boldsymbol{A}$ (或 $\varphi$) 的极小多项式无重根;
> (3) $\boldsymbol{A}$ (或 $\varphi$) 的初等因子都是一次多项式.


#### 7.1.4 矩阵函数

**1. 矩阵序列的收敛**

设有 $n$ 阶矩阵序列 $\{\boldsymbol{A}_k\}$:

$$\boldsymbol{A}_k = \begin{pmatrix} a_{11}^{(k)} & \cdots & a_{1n}^{(k)} \\ \vdots & & \vdots \\ a_{n1}^{(k)} & \cdots & a_{nn}^{(k)} \end{pmatrix},$$

$\boldsymbol{B}=(b_{ij})$ 也是一个 $n$ 阶矩阵. 若对每个 $(i,j)$, 都有 $\lim\limits_{k\to\infty} a_{ij}^{(k)} = b_{ij}$, 则称矩阵序列 $\{\boldsymbol{A}_k\}$ **收敛**于 $\boldsymbol{B}$, 记为 $\lim\limits_{k\to\infty} \boldsymbol{A}_k = \boldsymbol{B}$.

**2. 矩阵幂级数**

设 $f(z)=a_0+a_1z+a_2z^2+\cdots+a_nz^n+\cdots$ 是一个复幂级数, $f_k(z)$ 是其部分和. 若矩阵序列 $\{f_k(\boldsymbol{A})\}$ 收敛于 $\boldsymbol{B}$, 则称矩阵幂级数 $f(\boldsymbol{A})$ **收敛**于 $\boldsymbol{B}$.

> [!theorem] **3. 定理**
>
> 设 $f(z)=a_0+a_1z+a_2z^2+\cdots+a_nz^n+\cdots$ 是一个复幂级数, 则
> (1) 矩阵幂级数 $f(\boldsymbol{X})$ 收敛的充要条件是对任一可逆矩阵 $\boldsymbol{P}$, $f(\boldsymbol{P}^{-1}\boldsymbol{X}\boldsymbol{P})$ 收敛, 这时
> $$f(\boldsymbol{P}^{-1}\boldsymbol{X}\boldsymbol{P}) = \boldsymbol{P}^{-1}f(\boldsymbol{X})\boldsymbol{P};$$
> (2) 设 $\boldsymbol{X}=\operatorname{diag}\{\boldsymbol{X}_1, \cdots, \boldsymbol{X}_m\}$ 是分块对角矩阵, 则矩阵幂级数 $f(\boldsymbol{X})$ 收敛的充要条件是 $f(\boldsymbol{X}_i)\, (1 \leq i \leq m)$ 收敛, 这时
> $$f(\boldsymbol{X}) = \operatorname{diag}\{f(\boldsymbol{X}_1), \cdots, f(\boldsymbol{X}_m)\};$$
> (3) 设 $f(z)$ 的收敛半径为 $r$, $\boldsymbol{J}_n(\lambda_0)$ 是特征值为 $\lambda_0$ 的 $n$ 阶 Jordan 块, 则当 $|\lambda_0| < r$ 时, $f(\boldsymbol{J}_n(\lambda_0))$ 收敛.

> [!theorem] **4. 定理**
>
> 设 $f(z)=a_0+a_1z+a_2z^2+\cdots+a_nz^n+\cdots$ 是一个复幂级数且其收敛半径为 $r$. 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, $\boldsymbol{A}$ 的**谱半径**定义为 $\rho(\boldsymbol{A})=\max\limits_{1\leq i\leq n}|\lambda_i|$.
> (1) 若 $\rho(\boldsymbol{A}) < r$, 则 $f(\boldsymbol{A})$ 收敛;
> (2) 若 $\rho(\boldsymbol{A}) > r$, 则 $f(\boldsymbol{A})$ 发散;
> (3) 若 $f(\boldsymbol{A})$ 收敛, 则 $f(\boldsymbol{A})$ 的特征值为 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$.


### §7.2 矩阵相似的全系不变量

利用等价关系对矩阵进行分类, 这是一种常见的研究方法, 通常分为 3 个步骤. 首先, 引入矩阵之间的一种等价关系, 它将矩阵全体分成互不相交的等价类的并集. 其次, 找出矩阵在等价关系下的全系不变量, 即两个矩阵等价当且仅当它们的全系不变量相等. 最后, 在每一个等价类中, 找出一个相对简单的矩阵作为代表元, 称之为等价关系的标准型. 例如, 矩阵在相抵关系下的全系不变量就是矩阵的秩, $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 就是相抵标准型.

那么矩阵在相似关系下的全系不变量是什么？相似标准型具有怎样的形状呢？在教材 [1] 中, 我们利用 $\lambda$-矩阵这一代数方法, 给出了矩阵相似的 3 组全系不变量, 分别是行列式因子组、不变因子组和初等因子组; 给出了两类相似标准型, 分别是基于不变因子的有理标准型和复数域上基于初等因子的 Jordan 标准型. 本节我们将从 4 个方面阐述如何利用相似关系的全系不变量去处理矩阵的相似问题.

#### 1. 矩阵相似的判定准则一：特征矩阵相抵

两个 $n$ 阶数字矩阵 $\boldsymbol{A}, \boldsymbol{B}$ 相似当且仅当它们的特征矩阵 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$, $\lambda\boldsymbol{I}_n-\boldsymbol{B}$ 作为 $\lambda$-矩阵相抵. 这一判定准则是求出矩阵相似全系不变量的出发点, 它自身也有一些有趣的应用, 我们来看下面两道典型的例题.

> [!example] **例 7.1**
>
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 相抵于 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$, $\lambda\boldsymbol{I}_n-\boldsymbol{B}$ 相抵于 $\operatorname{diag}\{f_{i_1}(\lambda), f_{i_2}(\lambda), \cdots, f_{i_n}(\lambda)\}$, 其中 $f_{i_1}(\lambda), f_{i_2}(\lambda), \cdots, f_{i_n}(\lambda)$ 是 $f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)$ 的一个排列. 求证: $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 相似.

> [!proof]-
> 对换 $\lambda$-矩阵 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$ 的第 $i,j$ 行, 再对换第 $i,j$ 列, 可将 $f_i(\lambda)$ 与 $f_j(\lambda)$ 互换位置. 由于任一排列都可由若干次对换来实现, 故 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$ 相抵于 $\operatorname{diag}\{f_{i_1}(\lambda), f_{i_2}(\lambda), \cdots, f_{i_n}(\lambda)\}$, 于是 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 相抵于 $\lambda\boldsymbol{I}_n-\boldsymbol{B}$, 从而 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 相似. $\square$


> [!example] **例 7.2**
>
> 设 $n$ 阶方阵 $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}, \boldsymbol{D}$ 中 $\boldsymbol{A}, \boldsymbol{C}$ 可逆, 求证: 存在可逆矩阵 $\boldsymbol{P}, \boldsymbol{Q}$, 使得 $\boldsymbol{A}=\boldsymbol{P}\boldsymbol{C}\boldsymbol{Q}$, $\boldsymbol{B}=\boldsymbol{P}\boldsymbol{D}\boldsymbol{Q}$ 的充要条件是 $\lambda\boldsymbol{A}-\boldsymbol{B}$ 与 $\lambda\boldsymbol{C}-\boldsymbol{D}$ 相抵.

> [!proof]-
> 必要性由 $\lambda\boldsymbol{A}-\boldsymbol{B}=\boldsymbol{P}(\lambda\boldsymbol{C}-\boldsymbol{D})\boldsymbol{Q}$ 即得. 下证充分性. 设 $\lambda\boldsymbol{A}-\boldsymbol{B}$ 与 $\lambda\boldsymbol{C}-\boldsymbol{D}$ 相抵, 则由 $\boldsymbol{A}, \boldsymbol{C}$ 可逆知, $\lambda\boldsymbol{I}_n-\boldsymbol{A}^{-1}\boldsymbol{B}$ 与 $\lambda\boldsymbol{I}_n-\boldsymbol{C}^{-1}\boldsymbol{D}$ 相抵, 于是 $\boldsymbol{A}^{-1}\boldsymbol{B}$ 与 $\boldsymbol{C}^{-1}\boldsymbol{D}$ 相似. 设 $\boldsymbol{Q}$ 为可逆矩阵, 使得 $\boldsymbol{A}^{-1}\boldsymbol{B}=\boldsymbol{Q}^{-1}(\boldsymbol{C}^{-1}\boldsymbol{D})\boldsymbol{Q}$, 令 $\boldsymbol{P}=\boldsymbol{A}\boldsymbol{Q}^{-1}\boldsymbol{C}^{-1}$, 则 $\boldsymbol{P}$ 可逆且 $\boldsymbol{A}=\boldsymbol{P}\boldsymbol{C}\boldsymbol{Q}$, $\boldsymbol{B}=\boldsymbol{P}\boldsymbol{D}\boldsymbol{Q}$. $\square$

#### 2. 矩阵相似的判定准则二：有相同的行列式因子组

> [!example] **例 7.3**
>
> 求证: 任一 $n$ 阶矩阵 $\boldsymbol{A}$ 都与它的转置 $\boldsymbol{A}'$ 相似.

> [!proof]-
> 注意到 $(\lambda\boldsymbol{I}_n-\boldsymbol{A})'=\lambda\boldsymbol{I}_n-\boldsymbol{A}'$, 并且行列式的值在转置下不改变, 故 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 和 $\lambda\boldsymbol{I}_n-\boldsymbol{A}'$ 有相同的行列式因子组, 从而 $\boldsymbol{A}$ 和 $\boldsymbol{A}'$ 相似. $\square$

> [!example] **例 7.4**
>
> 求证: 对任意的 $b \neq 0$, $n$ 阶方阵 $\boldsymbol{A}(a,b)$ 均相互相似:
> $$\boldsymbol{A}(a,b) = \begin{pmatrix} a & b & \cdots & b & b \\ & a & \ddots & \ddots & b \\ & & \ddots & \ddots & \vdots \\ & & & a & b \\ & & & & a \end{pmatrix}.$$

> [!proof]-
> 只要证明对任意的 $b \neq 0$, $\boldsymbol{A}(a,b)$ 的行列式因子组都一样即可. 显然 $D_n(\lambda)=(\lambda-a)^n$. $\lambda\boldsymbol{I}_n-\boldsymbol{A}(a,b)$ 的前 $n-1$ 行、前 $n-1$ 列构成的子式, 其值为 $(\lambda-a)^{n-1}$; $\lambda\boldsymbol{I}_n-\boldsymbol{A}(a,b)$ 的前 $n-1$ 行、后 $n-1$ 列构成的子式, 其值设为 $g(\lambda)$. 注意到 $g(a)$ 是 $n-1$ 阶上三角行列式, 主对角元素全为 $-b$, 从而 $g(a)=(-b)^{n-1} \neq 0$. 因此 $(\lambda-a)^{n-1}$ 与 $g(\lambda)$ 没有公共根, 故 $((\lambda-a)^{n-1}, g(\lambda))=1$, 于是 $D_{n-1}(\lambda)=1$, 从而 $\boldsymbol{A}(a,b)$ 的行列式因子组为 $1, \cdots, 1, (\lambda-a)^n$, 结论得证. $\square$

> [!note] 注
> (1) 在上 (下) 三角矩阵 (如 Jordan 块) 或类上 (下) 三角矩阵 (如友阵或 Frobenius 块) 中, 若上 (下) 次对角线上的元素全部非零, 可以尝试计算行列式因子组. 对一般的矩阵 (如数字矩阵), 不建议计算行列式因子组, 推荐使用 $\lambda$-矩阵的初等变换计算法式, 得到不变因子组.
> (2) 注意到 $\boldsymbol{A}(a,0)=a\boldsymbol{I}_n$ 的行列式因子组为 $D_i(\lambda)=(\lambda-a)^i\, (1 \leq i \leq n)$. 因此, 在求相似标准型的过程中, 注意千万不能使用摄动法!


#### 3. 矩阵相似的判定准则三：有相同的不变因子组

由 §7.1.2 定理 7 可知, 所有不变因子的乘积等于特征多项式, 整除关系下最大的那个不变因子等于极小多项式. 因此, 确定特征多项式和极小多项式可帮助确定不变因子组. 下面来看几个典型的例题.

> [!example] **例 7.5**
>
> 设 $\boldsymbol{A}$ 是 $n$ 阶 $n$ 次幂零矩阵, 即 $\boldsymbol{A}^n=\boldsymbol{O}$ 但 $\boldsymbol{A}^{n-1} \neq \boldsymbol{O}$. 若 $\boldsymbol{B}$ 也是 $n$ 阶 $n$ 次幂零矩阵, 求证: $\boldsymbol{A}$ 相似于 $\boldsymbol{B}$.

> [!proof]-
> 显然 $\boldsymbol{A}$ 的极小多项式为 $\lambda^n$, 故 $\boldsymbol{A}$ 的不变因子组是 $1, \cdots, 1, \lambda^n$. 同理 $\boldsymbol{B}$ 的不变因子组也是 $1, \cdots, 1, \lambda^n$, 因此 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 相似. $\square$

> [!example] **例 7.6**
>
> 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 证明以下 3 个结论等价:
> (1) $\boldsymbol{A}=c\boldsymbol{I}_n$, 其中 $c$ 为常数;
> (2) $\boldsymbol{A}$ 的 $n-1$ 阶行列式因子是一个 $n-1$ 次多项式;
> (3) $\boldsymbol{A}$ 的不变因子组中无常数.

> [!proof]-
> (1) $\Rightarrow$ (2): 显然成立.
>
> (2) $\Rightarrow$ (3): 由于 $\boldsymbol{A}$ 的 $n$ 阶行列式因子 $D_n(\lambda)$ 是一个 $n$ 次多项式, 故 $\boldsymbol{A}$ 的最后一个不变因子 $d_n(\lambda)=D_n(\lambda)/D_{n-1}(\lambda)$ 是一个一次多项式, 设为 $\lambda-c$. 因为其他不变因子都要整除 $d_n(\lambda)$, 并且所有不变因子的乘积等于 $n$ 阶行列式因子 $D_n(\lambda)$, 故 $\boldsymbol{A}$ 的不变因子组只能是 $\lambda-c, \lambda-c, \cdots, \lambda-c$.
>
> (3) $\Rightarrow$ (1): 设 $\boldsymbol{A}$ 的不变因子组为 $d_1(\lambda), d_2(\lambda), \cdots, d_n(\lambda)$, 则 $\deg d_i(\lambda) \geq 1$. 注意到 $d_1(\lambda)d_2(\lambda)\cdots d_n(\lambda)=D_n(\lambda)$ 的次数为 $n$, 并且 $d_i(\lambda) \mid d_n(\lambda)$, 故只能是 $d_1(\lambda)=d_2(\lambda)=\cdots=d_n(\lambda)=\lambda-c$. 因此 $\boldsymbol{A}$ 与 $c\boldsymbol{I}_n$ 有相同不变因子组, 从而它们相似, 即存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{A}=\boldsymbol{P}^{-1}(c\boldsymbol{I}_n)\boldsymbol{P}=c\boldsymbol{I}_n$. 另外, 也可以利用 $\boldsymbol{A}$ 的极小多项式等于 $\lambda-c$ 或 $\boldsymbol{A}$ 的 Jordan 标准型来证明. $\square$

> [!example] **例 7.7**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值全为 1, 求证: 对任意的正整数 $k$, $\boldsymbol{A}^k$ 与 $\boldsymbol{A}$ 相似.

> [!proof]-
> 由 $\boldsymbol{A}$ 的特征值全为 1 可知 $\boldsymbol{A}^k$ 的特征值也全为 1. 设 $\boldsymbol{P}$ 为可逆矩阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(1), \cdots, \boldsymbol{J}_{r_s}(1)\}$ 为 Jordan 标准型. 由于 $\boldsymbol{P}^{-1}\boldsymbol{A}^k\boldsymbol{P}=(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})^k=\boldsymbol{J}^k$, 故只要证明 $\boldsymbol{J}^k$ 与 $\boldsymbol{J}$ 相似即可. 又因为 $\boldsymbol{J}^k=\operatorname{diag}\{\boldsymbol{J}_{r_1}(1)^k, \cdots, \boldsymbol{J}_{r_s}(1)^k\}$, 故问题可进一步归结到每个 Jordan 块, 即只要证明 $\boldsymbol{J}_{r_i}(1)^k$ 与 $\boldsymbol{J}_{r_i}(1)$ 相似即可. 因此不妨设 $\boldsymbol{J}=\boldsymbol{J}_n(1)$ 只有一个 Jordan 块, 则 $\boldsymbol{J}=\boldsymbol{I}_n+\boldsymbol{J}_0$, 其中 $\boldsymbol{J}_0=\boldsymbol{J}_n(0)$ 是特征值为 0 的 $n$ 阶 Jordan 块. 注意到
> $$\boldsymbol{J}^k=(\boldsymbol{I}_n+\boldsymbol{J}_0)^k=\boldsymbol{I}_n+\mathrm{C}_k^1\boldsymbol{J}_0+\mathrm{C}_k^2\boldsymbol{J}_0^2+\cdots+\boldsymbol{J}_0^k,$$


故 $\boldsymbol{J}^k$ 是一个上三角矩阵, 其主对角线上的元素全为 1, 上次对角线上的元素全为 $k$, 从而它的特征多项式为 $(\lambda-1)^n$. 为了确定它的极小多项式, 我们可进行如下计算:

$$(\boldsymbol{J}^k-\boldsymbol{I}_n)^{n-1}=(\mathrm{C}_k^1\boldsymbol{J}_0+\mathrm{C}_k^2\boldsymbol{J}_0^2+\cdots+\boldsymbol{J}_0^k)^{n-1}=k^{n-1}\boldsymbol{J}_0^{n-1} \neq \boldsymbol{O},$$

于是 $\boldsymbol{J}^k$ 的极小多项式为 $(\lambda-1)^n$, 其不变因子组为 $1, \cdots, 1, (\lambda-1)^n$. 因此 $\boldsymbol{J}^k$ 与 $\boldsymbol{J}$ 有相同的不变因子, 从而 $\boldsymbol{J}^k$ 与 $\boldsymbol{J}$ 相似. $\square$

> [!example] **例 7.8**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值全为 1 或 $-1$, 求证: $\boldsymbol{A}^{-1}$ 与 $\boldsymbol{A}$ 相似.

> [!proof]-
> 设 $\boldsymbol{P}$ 为可逆矩阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_s}(\lambda_s)\}$ 为 Jordan 标准型, 其中 $\lambda_i=\pm 1$. 由于 $\boldsymbol{P}^{-1}\boldsymbol{A}^{-1}\boldsymbol{P}=(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})^{-1}=\boldsymbol{J}^{-1}$, 故只要证明 $\boldsymbol{J}^{-1}$ 与 $\boldsymbol{J}$ 相似即可. 又因为 $\boldsymbol{J}^{-1}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1)^{-1}, \cdots, \boldsymbol{J}_{r_s}(\lambda_s)^{-1}\}$, 故问题可进一步归结到每个 Jordan 块, 即只要证明 $\boldsymbol{J}_{r_i}(\lambda_i)^{-1}$ 与 $\boldsymbol{J}_{r_i}(\lambda_i)$ 相似即可. 因此不妨设 $\boldsymbol{J}=\boldsymbol{J}_n(\lambda_0)$ 只有一个 Jordan 块, 则 $\boldsymbol{J}=\lambda_0\boldsymbol{I}_n+\boldsymbol{J}_0$, 其中 $\lambda_0=\pm 1$, $\boldsymbol{J}_0=\boldsymbol{J}_n(0)$ 是特征值为 0 的 $n$ 阶 Jordan 块. 注意到
> $$\lambda_0^n\boldsymbol{I}_n=(\lambda_0\boldsymbol{I}_n)^n-(-\boldsymbol{J}_0)^n=(\lambda_0\boldsymbol{I}_n+\boldsymbol{J}_0)\big(\lambda_0^{n-1}\boldsymbol{I}_n-\lambda_0^{n-2}\boldsymbol{J}_0+\cdots+(-1)^{n-1}\boldsymbol{J}_0^{n-1}\big),$$
> 以及 $\lambda_0^{-1}=\lambda_0$, 故可得
> $$\boldsymbol{J}^{-1}=(\lambda_0\boldsymbol{I}_n+\boldsymbol{J}_0)^{-1}=\lambda_0\boldsymbol{I}_n-\lambda_0^2\boldsymbol{J}_0+\cdots+(-1)^{n-1}\lambda_0^n\boldsymbol{J}_0^{n-1}.$$
> 因此 $\boldsymbol{J}^{-1}$ 是一个上三角矩阵, 其主对角线上的元素全为 $\lambda_0$, 上次对角线上的元素全为 $-\lambda_0^2$, 从而它的特征多项式为 $(\lambda-\lambda_0)^n$. 为了确定它的极小多项式, 我们可进行如下计算:
> $$(\boldsymbol{J}^{-1}-\lambda_0\boldsymbol{I})^{n-1}=(-\lambda_0^2\boldsymbol{J}_0+\cdots+(-1)^{n-1}\lambda_0^n\boldsymbol{J}_0^{n-1})^{n-1}=(-1)^{n-1}\boldsymbol{J}_0^{n-1} \neq \boldsymbol{O},$$
> 于是 $\boldsymbol{J}^{-1}$ 的极小多项式为 $(\lambda-\lambda_0)^n$, 其不变因子组为 $1, \cdots, 1, (\lambda-\lambda_0)^n$. 因此 $\boldsymbol{J}^{-1}$ 与 $\boldsymbol{J}$ 有相同的不变因子组, 从而 $\boldsymbol{J}^{-1}$ 与 $\boldsymbol{J}$ 相似. $\square$

#### 4. 矩阵相似的判定准则四：有相同的初等因子组

下面 2 个例题是 $\lambda$-矩阵和初等因子的基本性质, 我们在后面将会用到.

> [!example] **例 7.9**
>
> 设 $f(\lambda), g(\lambda)$ 是数域 $\mathbb{K}$ 上的首一多项式, $d(\lambda)=(f(\lambda), g(\lambda))$, $m(\lambda)=[f(\lambda), g(\lambda)]$ 分别是 $f(\lambda)$ 和 $g(\lambda)$ 的最大公因式和最小公倍式, 证明下列 $\lambda$-矩阵相抵:
> $$\begin{pmatrix} f(\lambda) & 0 \\ 0 & g(\lambda) \end{pmatrix},\quad \begin{pmatrix} g(\lambda) & 0 \\ 0 & f(\lambda) \end{pmatrix},\quad \begin{pmatrix} d(\lambda) & 0 \\ 0 & m(\lambda) \end{pmatrix}.$$


> [!proof]-
> 由已知, 存在多项式 $u(\lambda), v(\lambda)$, 使得 $f(\lambda)u(\lambda)+g(\lambda)v(\lambda)=d(\lambda)$. 设 $f(\lambda)=d(\lambda)h(\lambda)$, 则 $m(\lambda)=g(\lambda)h(\lambda)$. 作下列 $\lambda$-矩阵的初等变换:
> $$\begin{aligned} \begin{pmatrix} f(\lambda) & 0 \\ 0 & g(\lambda) \end{pmatrix} &\to \begin{pmatrix} f(\lambda) & 0 \\ f(\lambda)u(\lambda) & g(\lambda) \end{pmatrix} \to \begin{pmatrix} f(\lambda) & 0 \\ f(\lambda)u(\lambda)+g(\lambda)v(\lambda) & g(\lambda) \end{pmatrix} \\ &= \begin{pmatrix} f(\lambda) & 0 \\ d(\lambda) & g(\lambda) \end{pmatrix} \to \begin{pmatrix} 0 & -g(\lambda)h(\lambda) \\ d(\lambda) & g(\lambda) \end{pmatrix} \to \begin{pmatrix} 0 & g(\lambda)h(\lambda) \\ d(\lambda) & 0 \end{pmatrix} \to \begin{pmatrix} d(\lambda) & 0 \\ 0 & m(\lambda) \end{pmatrix}. \end{aligned}$$
> 另一结论同理可得. $\square$

设 $f(\lambda)$ 为数域 $\mathbb{K}$ 上的多项式, $p(\lambda)$ 是 $\mathbb{K}$ 上的首一不可约多项式, 若存在正整数 $k$, 使得 $p(\lambda)^k \mid f(\lambda)$, 但 $p(\lambda)^{k+1} \nmid f(\lambda)$, 则称 $p(\lambda)^k$ 为 $f(\lambda)$ 的一个**准素因子**. 事实上, 若设 $f(\lambda)$ 在 $\mathbb{K}$ 上的标准因式分解为
$$f(\lambda)=cP_1(\lambda)^{e_1}P_2(\lambda)^{e_2}\cdots P_t(\lambda)^{e_t},$$
其中 $c$ 为非零常数, $P_i(\lambda)$ 为互异的首一不可约多项式, $e_i > 0\, (1 \leq i \leq t)$, 则 $f(\lambda)$ 的所有准素因子为 $P_1(\lambda)^{e_1}, P_2(\lambda)^{e_2}, \cdots, P_t(\lambda)^{e_t}$. 因此等价地, 矩阵 $\boldsymbol{A}$ 的初等因子组就是 $\boldsymbol{A}$ 的所有不变因子的准素因子组. 下面的例题将初等因子组的这一等价定义进行了推广.

> [!example] **例 7.10**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 其特征矩阵 $\lambda\boldsymbol{I}_n-\boldsymbol{A}$ 经过初等变换可化为对角矩阵 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$, 其中 $f_i(\lambda)$ 是 $\mathbb{K}$ 上的首一多项式. 求证: 矩阵 $\boldsymbol{A}$ 的初等因子组等于所有 $f_i(\lambda)$ 的准素因子组.

> [!proof]-
> 对任意的 $i < j$, 以下操作记为 $O(i,j)$: 设 $d(\lambda)=(f_i(\lambda), f_j(\lambda))$, $m(\lambda)=[f_i(\lambda), f_j(\lambda)]$ 分别是 $f_i(\lambda)$ 和 $f_j(\lambda)$ 的最大公因式和最小公倍式, 则用 $d(\lambda)$ 替代 $f_i(\lambda)$, 用 $m(\lambda)$ 替代 $f_j(\lambda)$. 我们先证明, 操作 $O(i,j)$ 可通过 $\lambda$-矩阵的初等变换来实现, 并且前后两个对角矩阵, 即 $\operatorname{diag}\{f_1(\lambda), \cdots, f_i(\lambda), \cdots, f_j(\lambda), \cdots, f_n(\lambda)\}$ 与 $\operatorname{diag}\{f_1(\lambda), \cdots, d(\lambda), \cdots, m(\lambda), \cdots, f_n(\lambda)\}$ 有相同的准素因子组.
>
> 由例 7.9 即知 $O(i,j)$ 是 $\lambda$-矩阵的相抵变换. 设 $f_i(\lambda), f_j(\lambda)$ 的公共因式分解为
> $$f_i(\lambda)=P_1(\lambda)^{e_{i1}}P_2(\lambda)^{e_{i2}}\cdots P_t(\lambda)^{e_{it}},\quad f_j(\lambda)=P_1(\lambda)^{e_{j1}}P_2(\lambda)^{e_{j2}}\cdots P_t(\lambda)^{e_{jt}},$$
> 其中 $P_i(\lambda)$ 为互异的首一不可约多项式, $e_{ik} \geq 0$, $e_{jk} \geq 0\, (1 \leq k \leq t)$, 令 $r_k=\min\{e_{ik}, e_{jk}\}$, $s_k=\max\{e_{ik}, e_{jk}\}$, 则有
> $$d(\lambda)=P_1(\lambda)^{r_1}P_2(\lambda)^{r_2}\cdots P_t(\lambda)^{r_t},\quad m(\lambda)=P_1(\lambda)^{s_1}P_2(\lambda)^{s_2}\cdots P_t(\lambda)^{s_t}.$$

显然 $\{f_i(\lambda), f_j(\lambda)\}$ 和 $\{d(\lambda), m(\lambda)\}$ 有相同的准素因子组, 因此 $O(i,j)$ 操作前后的两个对角矩阵也有相同的准素因子组.

对对角矩阵 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$ 依次实施操作 $O(1,j)\, (2 \leq j \leq n)$, 则得到对角矩阵的第 $(1,1)$ 元素的所有不可约因式的幂在主对角元素中都是最小的; 然后依次操作 $O(2,j)\, (3 \leq j \leq n)$; $\cdots$; 最后操作 $O(n-1,n)$, 可得一个对角矩阵 $\boldsymbol{\Lambda}=\operatorname{diag}\{d_1(\lambda), d_2(\lambda), \cdots, d_n(\lambda)\}$. 由操作的性质可知, $\boldsymbol{\Lambda}$ 满足 $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq n-1)$, 因此 $\boldsymbol{\Lambda}$ 就是矩阵 $\boldsymbol{A}$ 的法式. 又因为对角矩阵 $\operatorname{diag}\{f_1(\lambda), f_2(\lambda), \cdots, f_n(\lambda)\}$ 与法式有相同的准素因子组, 故所有 $f_i(\lambda)$ 的准素因子组就是矩阵 $\boldsymbol{A}$ 的初等因子组. $\square$

> [!example] **例 7.11**
>
> 设 $\boldsymbol{A}=\operatorname{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_k\}$ 为分块对角矩阵, 求证: $\boldsymbol{A}$ 的初等因子组等于 $\boldsymbol{A}_i\, (1 \leq i \leq k)$ 的初等因子组的**无交并集**. 又若交换各块的位置, 则所得的矩阵仍和 $\boldsymbol{A}$ 相似.

> [!proof]-
> 显然 $\lambda\boldsymbol{I}-\boldsymbol{A}$ 也是一个分块对角矩阵, 用 $\lambda$-矩阵的初等变换将每一块化为法式, 则由例 7.10 可知, $\boldsymbol{A}$ 的初等因子组就是所有各块的初等因子组的无交并集. 又交换 $\boldsymbol{A}$ 的各块并不改变 $\boldsymbol{A}$ 的初等因子组, 因此所得之矩阵仍和 $\boldsymbol{A}$ 相似. $\square$


### §7.3 有理标准型的几何与应用

有理标准型是利用不变因子组构造的相似标准型. 从因式分解的层面上看, 不变因子组并非是最简单的相似关系全系不变量, 从而有理标准型也并非是最简单的相似标准型, 比如 Frobenius 块有时比较大等. 然而有理标准型在任意的数域 $\mathbb{K}$ 上均存在, 因此具有广泛的用途. 本节将从有理标准型的几何意义以及有理标准型在矩阵理论中的应用这两个方面进行阐述.

#### 1. 有理标准型的几何意义

> [!definition] **定义**
>
> 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\varphi$ 是 $V$ 上的线性变换. 设 $\mathbf{0} \neq \boldsymbol{\alpha} \in V$, 则 $U=L(\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \varphi^2(\boldsymbol{\alpha}), \cdots)$ 称为 $V$ 的**循环子空间**, 记为 $U=C(\varphi, \boldsymbol{\alpha})$, $\boldsymbol{\alpha}$ 称为 $U$ 的**循环向量**. 显然, 循环子空间 $U$ 是 $V$ 的 $\varphi$-不变子空间, 并且是包含 $\boldsymbol{\alpha}$ 的最小 $\varphi$-不变子空间. 若 $U=V$, 则称 $V$ 为**循环空间**.

> [!example] **例 7.12**
>
> 设 $U=C(\varphi, \boldsymbol{\alpha})$ 为循环子空间, 若 $\dim U=r$, 求证: $\{\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{r-1}(\boldsymbol{\alpha})\}$ 是 $U$ 的一组基.

> [!proof]-
> 设 $m=\max\{k \in \mathbb{Z}^+ \mid \boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{k-1}(\boldsymbol{\alpha})\text{ 线性无关}\}$, 则由例 3.8 和数学归纳法容易验证: 对任意的 $k \geq m$, $\varphi^k(\boldsymbol{\alpha})$ 都是 $\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{m-1}(\boldsymbol{\alpha})$ 的线性组合, 于是 $\{\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{m-1}(\boldsymbol{\alpha})\}$ 是 $U$ 的一组基, 从而 $m=\dim U=r$. $\square$


> [!example] **例 7.13**
>
> 设 $U$ 是 $V$ 的 $\varphi$-不变子空间, 求证: $U$ 为循环子空间的充要条件是 $\varphi|_U$ 在 $U$ 的某组基下的表示矩阵为某个首一多项式的友阵.

> [!proof]-
> 先证充分性. 设 $\varphi|_U$ 在 $U$ 的一组基 $\{e_1, e_2, \cdots, e_r\}$ 下的表示矩阵是友阵 $\boldsymbol{C}(d(\lambda))$, 其中 $d(\lambda)=\lambda^r+a_1\lambda^{r-1}+\cdots+a_{r-1}\lambda+a_r$, 则由友阵的定义 (例 2.3) 可知 $\varphi(e_i)=e_{i+1}\, (1 \leq i \leq r-1)$, $\varphi(e_r)=-\sum\limits_{i=1}^{r} a_{r-i+1}e_i$. 因此 $e_i=\varphi^{i-1}(e_1)\, (2 \leq i \leq r)$, $U=L(e_1, e_2, \cdots, e_r)=C(\varphi, e_1)$ 为循环子空间.
>
> 再证必要性. 设 $U=C(\varphi, \boldsymbol{\alpha})$ 是 $r$ 维循环子空间, 则由例 7.12 可知, $\{\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{r-1}(\boldsymbol{\alpha})\}$ 是 $U$ 的一组基. 设
> $$\varphi^r(\boldsymbol{\alpha})=-a_r\boldsymbol{\alpha}-a_{r-1}\varphi(\boldsymbol{\alpha})-\cdots-a_1\varphi^{r-1}(\boldsymbol{\alpha}),$$
> 令 $d(\lambda)=\lambda^r+a_1\lambda^{r-1}+\cdots+a_{r-1}\lambda+a_r$, 容易验证: $\varphi|_U$ 在基 $\{\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{r-1}(\boldsymbol{\alpha})\}$ 下的表示矩阵就是友阵 $\boldsymbol{C}(d(\lambda))$. $\square$

一般地, 设线性变换 $\varphi$ 的不变因子组是 $1, \cdots, 1, d_1(\lambda), \cdots, d_k(\lambda)$, 其中 $d_i(\lambda)$ 是非常数首一多项式, $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq k-1)$, 则由有理标准型理论可知, 存在 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为
$$\boldsymbol{C}=\operatorname{diag}\{\boldsymbol{C}(d_1(\lambda)), \boldsymbol{C}(d_2(\lambda)), \cdots, \boldsymbol{C}(d_k(\lambda))\}.$$

结合例 7.13 的讨论可知, 此时 $V$ 有一个循环子空间的直和分解:
$$V = C(\varphi, \boldsymbol{\alpha}_1) \oplus C(\varphi, \boldsymbol{\alpha}_2) \oplus \cdots \oplus C(\varphi, \boldsymbol{\alpha}_k), \tag{7.6}$$
使得 $\varphi|_{C(\varphi, \boldsymbol{\alpha}_i)}$ 在基 $\{\boldsymbol{\alpha}_i, \varphi(\boldsymbol{\alpha}_i), \cdots, \varphi^{r_i-1}(\boldsymbol{\alpha}_i)\}$ 下的表示矩阵就是友阵 $\boldsymbol{C}(d_i(\lambda))$, 其中 $r_i=\dim C(\varphi, \boldsymbol{\alpha}_i)$. 线性变换 $\varphi$ 的有理标准型诱导的 $V$ 的上述循环子空间直和分解 (7.6) 就是**有理标准型的几何意义**.

下面依次给出上述几何意义的一些应用, 首先是循环空间的刻画.

> [!example] **例 7.14**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\varphi$ 的特征多项式和极小多项式分别为 $f(\lambda)$ 和 $m(\lambda)$, 证明以下 4 个结论等价:
> (1) $\varphi$ 的行列式因子组或不变因子组为 $1, \cdots, 1, f(\lambda)$;
> (2) $\varphi$ 的初等因子组为 $P_1(\lambda)^{r_1}, P_2(\lambda)^{r_2}, \cdots, P_k(\lambda)^{r_k}$, 其中 $P_i(\lambda)$ 是 $\mathbb{K}$ 上互异的首一不可约多项式, $r_i \geq 1$, $1 \leq i \leq k$;


> (3) $\varphi$ 的极小多项式 $m(\lambda)$ 等于特征多项式 $f(\lambda)$;
> (4) $V$ 是关于线性变换 $\varphi$ 的循环空间.

> [!proof]-
> (1) $\Leftrightarrow$ (2): 由不变因子和初等因子之间的相互转换即得.
>
> (1) $\Leftrightarrow$ (3): 由极小多项式等于最大的不变因子, 以及所有不变因子的乘积等于特征多项式即得.
>
> (1) $\Leftrightarrow$ (4): 若 $V$ 是循环空间, 则由例 7.13 可知, $\varphi$ 在某组基下的表示矩阵是友阵 $\boldsymbol{C}(g(\lambda))$, 再由友阵的性质可知, $\varphi$ 的行列式因子组和不变因子组均为 $1, \cdots, 1, g(\lambda)=f(\lambda)$. 若 $\varphi$ 的不变因子组为 $1, \cdots, 1, f(\lambda)$, 则由有理标准型的几何意义可知, $V$ 是循环空间. $\square$

在 §7.4 中, 我们可以看到循环空间是一类具有良好几何性质的空间. 下面是循环空间的两个典型例子.

> [!example] **例 7.15**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 求证: $\boldsymbol{A}$ 的特征多项式和极小多项式相等.

> [!proof]- **证法 1**
> 设 $\boldsymbol{A}$ 的 $n$ 个不同的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 则由例 6.80 可知, 特征多项式 $f(\lambda)$ 和极小多项式 $m(\lambda)$ 有相同的根 (不计重数), 因此 $f(\lambda)=m(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)$.

> [!proof]- **证法 2**
> 由于 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 故 $\boldsymbol{A}$ 相似于对角矩阵. 又因为相似矩阵有相同的特征多项式和极小多项式, 所以只要对对角矩阵证明此结论即可. 设 $\boldsymbol{A}=\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$, 则 $\lambda\boldsymbol{I}_n-\boldsymbol{A}=\operatorname{diag}\{\lambda-\lambda_1, \lambda-\lambda_2, \cdots, \lambda-\lambda_n\}$, 这是一个主对角元素两两互素的对角矩阵, 由例 7.9 以及数学归纳法可知其法式为 $\operatorname{diag}\{1, \cdots, 1, (\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)\}$. 因此, $\boldsymbol{A}$ 的特征多项式和极小多项式相等. $\square$

> [!note] 注
> 设特征值 $\lambda_i$ 对应的特征向量为 $\boldsymbol{\alpha}_i$, 则 $\{\boldsymbol{\alpha}_1, \cdots, \boldsymbol{\alpha}_n\}$ 为 $\mathbb{C}^n$ 的一组基. 我们断言: $\boldsymbol{\alpha}=\boldsymbol{\alpha}_1+\cdots+\boldsymbol{\alpha}_n$ 是 $\boldsymbol{A}$ 的循环空间 $\mathbb{C}^n$ 的循环向量. 事实上, 由 $\boldsymbol{A}^k\boldsymbol{\alpha}=\lambda_1^k\boldsymbol{\alpha}_1+\cdots+\lambda_n^k\boldsymbol{\alpha}_n$, 利用 Vandermonde 行列式容易证明 $\{\boldsymbol{\alpha}, \boldsymbol{A}\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^{n-1}\boldsymbol{\alpha}\}$ 是 $\mathbb{C}^n$ 的一组基, 从而 $\mathbb{C}^n=L(\boldsymbol{\alpha}, \boldsymbol{A}\boldsymbol{\alpha}, \cdots, \boldsymbol{A}^{n-1}\boldsymbol{\alpha})=C(\boldsymbol{A}, \boldsymbol{\alpha})$ 为循环空间, $\boldsymbol{\alpha}$ 是循环向量.

> [!example] **例 7.16**
>
> 设数域 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征多项式 $f(\lambda)=P_1(\lambda)P_2(\lambda)\cdots P_k(\lambda)$, 其中 $P_i(\lambda)\, (1 \leq i \leq k)$ 是 $\mathbb{K}$ 上互异的首一不可约多项式. 求证: $\boldsymbol{A}$ 的有理标准型只有一个 Frobenius 块, 并且 $\boldsymbol{A}$ 在复数域上可对角化.

> [!proof]-
> 设 $\boldsymbol{A}$ 的不变因子组为 $d_1(\lambda), d_2(\lambda), \cdots, d_n(\lambda)$, 则有
> $$f(\lambda)=P_1(\lambda)P_2(\lambda)\cdots P_k(\lambda)=d_1(\lambda)d_2(\lambda)\cdots d_n(\lambda).$$


由于 $P_i(\lambda)$ 是不可约多项式, 故存在某个 $j$, 使得 $P_i(\lambda) \mid d_j(\lambda)$, 从而 $P_i(\lambda) \mid d_n(\lambda)\, (1 \leq i \leq k)$. 由互素多项式的性质可知, $P_1(\lambda)P_2(\lambda)\cdots P_k(\lambda) \mid d_n(\lambda)$, 因此只能是 $d_1(\lambda)=\cdots=d_{n-1}(\lambda)=1$, $d_n(\lambda)=f(\lambda)$, 从而 $\boldsymbol{A}$ 的有理标准型只有一个 Frobenius 块. 由于特征多项式 $f(\lambda)=P_1(\lambda)P_2(\lambda)\cdots P_k(\lambda)$ 在 $\mathbb{K}$ 上无重因式, 故 $(f(\lambda), f'(\lambda))=1$, 从而 $f(\lambda)$ 在复数域上无重根, 即 $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 于是 $\boldsymbol{A}$ 在复数域上可对角化. $\square$

> [!note] 注
> 我们也可以利用例 7.14 和初等因子证明第一个结论. 若利用不变因子在基域扩张下的不变性, 则第一个结论也可由例 7.15 得到. 若设 $\boldsymbol{\alpha}_i$ 为线性方程组 $P_i(\boldsymbol{A})x=\mathbf{0}$ 的非零解, 则 $\boldsymbol{\alpha}=\boldsymbol{\alpha}_1+\cdots+\boldsymbol{\alpha}_k$ 是 $\boldsymbol{A}$ 的循环空间 $\mathbb{K}^n$ 的循环向量. 这些结论的证明细节留给读者完成.

下面我们再给出有理标准型几何意义的 3 个应用, 分别是特征多项式是不可约多项式的刻画, 极小多项式是不可约多项式的刻画, 以及基于初等因子组的有理标准型.

> [!example] **例 7.17**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\varphi$ 的特征多项式为 $f(\lambda)$, 证明以下 3 个结论等价:
> (1) $V$ 只有平凡的 $\varphi$-不变子空间;
> (2) $V$ 中任一非零向量都是循环向量, 使 $V$ 成为循环空间;
> (3) $f(\lambda)$ 是 $\mathbb{K}$ 上的不可约多项式.

> [!proof]-
> (1) $\Rightarrow$ (2): 任取 $V$ 中非零向量 $\boldsymbol{\alpha}$, 则循环子空间 $C(\varphi, \boldsymbol{\alpha})$ 是非零 $\varphi$-不变子空间. 由于 $V$ 只有平凡的 $\varphi$-不变子空间, 故 $C(\varphi, \boldsymbol{\alpha})=V$, 即 $V$ 中任一非零向量都是循环向量, 使 $V$ 成为循环空间.
>
> (2) $\Rightarrow$ (3): 用反证法, 假设 $f(\lambda)=g(\lambda)h(\lambda)$, 其中 $g(\lambda), h(\lambda)$ 是 $\mathbb{K}$ 上次数小于 $n$ 的首一多项式. 由 Cayley-Hamilton 定理可知 $\mathbf{0}=f(\varphi)=g(\varphi)h(\varphi)$, 故 $g(\varphi), h(\varphi)$ 中至少有一个是奇异线性变换, 不妨设为 $g(\varphi)$, 于是 $\operatorname{Ker} g(\varphi) \neq 0$. 任取 $\operatorname{Ker} g(\varphi)$ 中的非零向量 $\boldsymbol{\alpha}$, 设 $\deg g(\lambda)=r$, 则 $C(\varphi, \boldsymbol{\alpha})=L(\boldsymbol{\alpha}, \varphi(\boldsymbol{\alpha}), \cdots, \varphi^{r-1}(\boldsymbol{\alpha}))$, 其维数 $\leq r < n$, 故 $C(\varphi, \boldsymbol{\alpha}) \neq V$, 这与 $V$ 中任一非零向量都是循环向量矛盾!
>
> (3) $\Rightarrow$ (1): 用反证法, 假设存在非平凡的 $\varphi$-不变子空间 $U$, $\dim U=r$, 则 $\varphi$ 在一组基下的表示矩阵为分块上三角矩阵 $\boldsymbol{M}=\begin{pmatrix} \boldsymbol{A} & \boldsymbol{C} \\ \boldsymbol{O} & \boldsymbol{B} \end{pmatrix}$, 其中 $\boldsymbol{A}$ 是 $\varphi|_U$ 的表示矩阵. 于是特征多项式
> $$f(\lambda)=|\lambda\boldsymbol{I}_V-\varphi|=|\lambda\boldsymbol{I}_n-\boldsymbol{M}|=|\lambda\boldsymbol{I}_r-\boldsymbol{A}|\cdot|\lambda\boldsymbol{I}_{n-r}-\boldsymbol{B}|$$
> 是两个低次多项式的乘积, 这与 $f(\lambda)$ 的不可约性矛盾! $\square$


> [!example] **例 7.18**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\varphi$ 的极小多项式为 $m(\lambda)$. 证明: $m(\lambda)$ 是 $\mathbb{K}$ 上的不可约多项式的充要条件是 $V$ 的任一非零 $\varphi$-不变子空间 $U$ 必为如下形式:
> $$U = C(\varphi, \boldsymbol{\alpha}_1) \oplus C(\varphi, \boldsymbol{\alpha}_2) \oplus \cdots \oplus C(\varphi, \boldsymbol{\alpha}_k),$$
> 并且 $\varphi|_{C(\varphi, \boldsymbol{\alpha}_i)}$ 的极小多项式都是 $m(\lambda)$. 此时, $\varphi|_U$ 的极小多项式也是 $m(\lambda)$.

> [!proof]-
> 必要性: 设 $\varphi|_U$ 的极小多项式为 $n(\lambda)$, 则 $m(\varphi|_U)=m(\varphi)|_U=\mathbf{0}$, 从而 $n(\lambda) \mid m(\lambda)$. 因为 $m(\lambda)$ 不可约, 所以 $n(\lambda)=m(\lambda)$. 又由于 $\varphi|_U$ 的所有不变因子都要整除 $m(\lambda)$ 且 $m(\lambda)$ 不可约, 故所有的非常数不变因子都等于 $m(\lambda)$. 最后, 由有理标准型的几何意义即得 $U$ 的循环子空间直和分解.
>
> 充分性: 用反证法, 设 $m(\lambda)=g(\lambda)h(\lambda)$, 其中 $g(\lambda), h(\lambda)$ 是 $\mathbb{K}$ 上次数小于 $m(\lambda)$ 次数的首一多项式, 则 $\mathbf{0}=m(\varphi)=g(\varphi)h(\varphi)$, 故 $g(\varphi), h(\varphi)$ 中至少有一个是奇异线性变换, 不妨设为 $g(\varphi)$, 于是 $\operatorname{Ker} g(\varphi) \neq 0$. 任取 $\operatorname{Ker} g(\varphi)$ 中的非零向量 $\boldsymbol{\alpha}$, 得到循环子空间 $U=C(\varphi, \boldsymbol{\alpha})$, 由 $g(\varphi)(\boldsymbol{\alpha})=\mathbf{0}$ 容易验证 $g(\varphi|_U)=g(\varphi)|_U=\mathbf{0}$, 于是 $\varphi|_U$ 的极小多项式整除 $g(\lambda)$, 从而其次数 $\leq \deg g(\lambda) < \deg m(\lambda)$, 这与条件矛盾! $\square$

> [!example] **例 7.19**
>
> 设数域 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 的初等因子组为 $P_1(\lambda)^{r_1}, P_2(\lambda)^{r_2}, \cdots, P_k(\lambda)^{r_k}$, 证明: $\boldsymbol{A}$ 相似于分块对角矩阵
> $$\widetilde{\boldsymbol{F}} = \operatorname{diag}\{\boldsymbol{F}(P_1(\lambda)^{r_1}), \boldsymbol{F}(P_2(\lambda)^{r_2}), \cdots, \boldsymbol{F}(P_k(\lambda)^{r_k})\},$$
> $$\widetilde{\boldsymbol{C}} = \operatorname{diag}\{\boldsymbol{C}(P_1(\lambda)^{r_1}), \boldsymbol{C}(P_2(\lambda)^{r_2}), \cdots, \boldsymbol{C}(P_k(\lambda)^{r_k})\},$$
> 称为 $\boldsymbol{A}$ 的**基于初等因子组的有理标准型**.

> [!proof]-
> 由 Frobenius 块和友阵的性质可知, $\lambda\boldsymbol{I}_n-\widetilde{\boldsymbol{F}}$ 和 $\lambda\boldsymbol{I}_n-\widetilde{\boldsymbol{C}}$ 都相抵于
> $$\operatorname{diag}\{1, \cdots, 1, P_1(\lambda)^{r_1}; 1, \cdots, 1, P_2(\lambda)^{r_2}; \cdots; 1, \cdots, 1, P_k(\lambda)^{r_k}\},$$
> 再由例 7.10 可知, $\widetilde{\boldsymbol{F}}, \widetilde{\boldsymbol{C}}$ 与 $\boldsymbol{A}$ 有相同的初等因子组, 从而它们相似. $\square$

> [!example] **例 7.20**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\varphi$ 的初等因子组为 $P_1(\lambda)^{r_1}, P_2(\lambda)^{r_2}, \cdots, P_k(\lambda)^{r_k}$. 证明: 存在 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_k \in V$, 使得
> $$V = C(\varphi, \boldsymbol{\alpha}_1) \oplus C(\varphi, \boldsymbol{\alpha}_2) \oplus \cdots \oplus C(\varphi, \boldsymbol{\alpha}_k).$$

> [!proof]-
> 由例 7.19 和例 7.13 即得. $\square$


#### 2. 有理标准型在矩阵理论中的应用

不变因子组作为矩阵相似的全系不变量, 蕴含了矩阵的众多信息, 如特征多项式、极小多项式和矩阵的秩等. 因此, 有理标准型对于矩阵性质的研究有着重要的作用.

> [!example] **例 7.21**
>
> 求证: 存在 $n$ 阶实方阵 $\boldsymbol{A}$, 满足 $\boldsymbol{A}^2+2\boldsymbol{A}+5\boldsymbol{I}_n=\boldsymbol{O}$ 的充要条件是 $n$ 为偶数. 当 $n \geq 4$ 时, 验证满足上述条件的矩阵 $\boldsymbol{A}$ 有无限个不变子空间.

> [!proof]-
> 必要性: 注意到 $\boldsymbol{A}$ 适合多项式 $g(\lambda)=\lambda^2+2\lambda+5$, 故 $\boldsymbol{A}$ 的极小多项式 $m(\lambda) \mid g(\lambda)$, 又因为 $g(\lambda)$ 在实数域上不可约, 故只能是 $m(\lambda)=g(\lambda)$. 同理可证 $\boldsymbol{A}$ 所有的非常数不变因子都等于 $g(\lambda)$, 从而 $\boldsymbol{A}$ 的不变因子组为 $1, \cdots, 1, g(\lambda), \cdots, g(\lambda)$ ($k$ 个 $g(\lambda)$). 因此 $\boldsymbol{A}$ 的特征多项式 $f(\lambda)=g(\lambda)^k$, 于是 $n=\deg f(\lambda)=2k$ 为偶数.
>
> 充分性: 设 $n=2k$ 为偶数, 则由必要性的证明可知, $\boldsymbol{A}$ 的不变因子组为 $1, \cdots, 1, g(\lambda), \cdots, g(\lambda)$ ($k$ 个 $g(\lambda)$). 可用有理标准型构造满足条件的矩阵:
> $$\boldsymbol{A} = \operatorname{diag}\left\{\begin{pmatrix} 0 & -5 \\ 1 & -2 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & -5 \\ 1 & -2 \end{pmatrix}\right\} \text{ ($k$ 个二阶方阵).}$$
>
> 当 $n \geq 4$ 时, 设 $\{e_1, e_2, e_3, e_4\}$ 是前 4 个标准单位列向量, 则容易验证循环子空间 $\{C_l:=C(\boldsymbol{A}, e_1+le_3)=L(e_1+le_3, e_2+le_4), l \in \mathbb{R}\}$ 是两两互异的 $\boldsymbol{A}$-不变子空间, 故 $\boldsymbol{A}$ 有无限个不变子空间. $\square$

> [!example] **例 7.22**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶方阵, 求证: $\boldsymbol{A}$ 的极小多项式的次数小于等于 $\mathrm{r}(\boldsymbol{A})+1$.

> [!proof]-
> 设 $\boldsymbol{A}$ 的不变因子组为 $1, \cdots, 1, d_1(\lambda), \cdots, d_k(\lambda)$, 则极小多项式 $m(\lambda)=d_k(\lambda)$, $\boldsymbol{A}$ 相似于 $\boldsymbol{F}=\operatorname{diag}\{\boldsymbol{F}(d_1(\lambda)), \cdots, \boldsymbol{F}(d_k(\lambda))\}$. 设 $\deg d_k(\lambda)=r$, 若 $d_k(0) \neq 0$, 则 $\boldsymbol{F}(d_k(\lambda))$ 非异; 若 $d_k(0)=0$, 则 $\boldsymbol{F}(d_k(\lambda))$ 奇异且右上角的 $r-1$ 阶子式非零, 从而秩为 $r-1$. 因此, $\mathrm{r}(\boldsymbol{A})=\mathrm{r}(\boldsymbol{F}) \geq \mathrm{r}(\boldsymbol{F}(d_k(\lambda))) \geq r-1=\deg d_k(\lambda)-1$. $\square$

> [!example] **例 7.23**
>
> 设数域 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 的不变因子组是 $1, \cdots, 1, d_1(\lambda), \cdots, d_k(\lambda)$, 其中 $d_i(\lambda)$ 是非常数首一多项式, $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq k-1)$. 求证: 对 $\boldsymbol{A}$ 的任一特征值 $\lambda_0$,
> $$\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A}) = n - \sum_{i=1}^{k} \delta_{d_i(\lambda_0),0},$$
> 其中记号 $\delta_{a,b}$ 表示: 若 $a=b$, 取值为 1; 若 $a \neq b$, 取值为 0.


> [!proof]- **证法 1**
> 设 $\deg d_i(\lambda)=r_i$, 则 $\boldsymbol{A}$ 相似于 $\boldsymbol{F}=\operatorname{diag}\{\boldsymbol{F}(d_1(\lambda)), \cdots, \boldsymbol{F}(d_k(\lambda))\}$, 且 $|\lambda_0\boldsymbol{I}_{r_i}-\boldsymbol{F}(d_i(\lambda))|=d_i(\lambda_0)$. 若 $d_i(\lambda_0) \neq 0$, 则 $\lambda_0\boldsymbol{I}_{r_i}-\boldsymbol{F}(d_i(\lambda))$ 非异; 若 $d_i(\lambda_0)=0$, 则 $\lambda_0\boldsymbol{I}_{r_i}-\boldsymbol{F}(d_i(\lambda))$ 奇异且右上角的 $r_i-1$ 阶子式非零, 从而秩为 $r_i-1$. 因此,
> $$\begin{aligned} \mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A}) &= \mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{F}) = \sum_{i=1}^{k} \mathrm{r}(\lambda_0\boldsymbol{I}_{r_i}-\boldsymbol{F}(d_i(\lambda))) \\ &= \sum_{i=1}^{k} (r_i - \delta_{d_i(\lambda_0),0}) = n - \sum_{i=1}^{k} \delta_{d_i(\lambda_0),0}. \end{aligned}$$

> [!proof]- **证法 2**
> 由已知存在可逆 $\lambda$-矩阵 $\boldsymbol{P}(\lambda), \boldsymbol{Q}(\lambda)$, 使得
> $$\boldsymbol{P}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{Q}(\lambda) = \operatorname{diag}\{1, \cdots, 1, d_1(\lambda), \cdots, d_k(\lambda)\}.$$
> 在上式中令 $\lambda=\lambda_0$, 注意到 $\boldsymbol{P}(\lambda_0), \boldsymbol{Q}(\lambda_0)$ 是 $\mathbb{K}$ 上的可逆矩阵, 故 $\lambda_0\boldsymbol{I}_n-\boldsymbol{A}$ 相抵于 $\operatorname{diag}\{1, \cdots, 1, d_1(\lambda_0), \cdots, d_k(\lambda_0)\}$, 于是 $\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})$ 等于 $n$ 减去等于零的 $d_i(\lambda_0)$ 的个数, 从而结论得证. $\square$

> [!example] **例 7.24**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 求证: 若 $\mathrm{tr}(\boldsymbol{A})=0$, 则 $\boldsymbol{A}$ 相似于一个 $\mathbb{K}$ 上主对角元全为零的矩阵.

> [!proof]-
> 对阶数进行归纳. 当 $n=1$ 时, $\boldsymbol{A}=\boldsymbol{O}$, 结论显然成立. 设阶数小于 $n$ 时结论成立, 现证 $n$ 阶的情形. 由于题目的条件和结论在相似关系下不改变, 故不妨从一开始就假设 $\boldsymbol{A}$ 是有理标准型
> $$\boldsymbol{F}=\operatorname{diag}\{\boldsymbol{F}(d_1(\lambda)), \cdots, \boldsymbol{F}(d_k(\lambda))\},$$
> 其中 $d_i(\lambda)$ 是 $\boldsymbol{A}$ 的非常数不变因子, $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq k-1)$, $\deg d_i(\lambda)=r_i$. 若 $r_i$ 都为 1, 则 $d_1(\lambda)=\cdots=d_n(\lambda)=\lambda-c$, 从而 $\boldsymbol{A}=c\boldsymbol{I}_n$. 又 $\mathrm{tr}(\boldsymbol{A})=0$, 故 $c=0$, 从而 $\boldsymbol{A}=\boldsymbol{O}$, 结论成立. 以下假设存在某个 $r_i > 1$, 将第 $(1,1)$ 分块与第 $(i,i)$ 分块对换, 这是一个相似变换, 此时矩阵的第 $(1,1)$ 元为零, 故不妨设 $\boldsymbol{A}$ 的第 $(1,1)$ 元为零. 注意到矩阵 $\boldsymbol{A}=\begin{pmatrix} 0 & \boldsymbol{\alpha}' \\ \boldsymbol{\beta} & \boldsymbol{B} \end{pmatrix}$, 其中 $\boldsymbol{\alpha}, \boldsymbol{\beta} \in \mathbb{K}^{n-1}$, $\boldsymbol{B} \in M_{n-1}(\mathbb{K})$, $\mathrm{tr}(\boldsymbol{B})=0$. 由归纳假设, 存在 $\mathbb{K}$ 上的 $n-1$ 阶非异阵 $\boldsymbol{Q}$, 使得 $\boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q}$ 的主对角元全为零, 令 $\boldsymbol{P}=\begin{pmatrix} 1 & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{Q} \end{pmatrix}$ 为 $\mathbb{K}$ 上的 $n$ 阶非异阵, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\begin{pmatrix} 0 & \boldsymbol{\alpha}'\boldsymbol{Q} \\ \boldsymbol{Q}^{-1}\boldsymbol{\beta} & \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} \end{pmatrix}$ 的主对角元全为零, 结论得证. $\square$

> [!example] **例 7.25**
>
> 设 $\boldsymbol{C}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 求证: 存在 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}, \boldsymbol{B}$, 使得 $\boldsymbol{A}\boldsymbol{B}-\boldsymbol{B}\boldsymbol{A}=\boldsymbol{C}$ 的充要条件是 $\mathrm{tr}(\boldsymbol{C})=0$.

> [!proof]-
> 必要性由矩阵迹的线性和交换性即得, 下证充分性. 由于题目的条件和结论在同时相似变换 $\boldsymbol{A} \mapsto \boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$, $\boldsymbol{B} \mapsto \boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$, $\boldsymbol{C} \mapsto \boldsymbol{P}^{-1}\boldsymbol{C}\boldsymbol{P}$ 下不改变, 故


由例 7.24 不妨从一开始就假设 $\boldsymbol{C}=(c_{ij})$ 的主对角元 $c_{ii}=0\, (1 \leq i \leq n)$. 取定 $\boldsymbol{A}=\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ 为 $\mathbb{K}$ 上的主对角元互异的对角矩阵. 设 $\boldsymbol{B}=(x_{ij})$, 则 $\boldsymbol{A}\boldsymbol{B}-\boldsymbol{B}\boldsymbol{A}=\boldsymbol{C}$ 等价于方程 $\lambda_i x_{ij}-\lambda_j x_{ij}=c_{ij}$. 当 $i=j$ 时, 上式恒成立, 故 $x_{ii}$ 可任取. 当 $i \neq j$ 时, $x_{ij}=\dfrac{c_{ij}}{\lambda_i-\lambda_j}$ 被唯一确定. 因此, 一定存在 $\mathbb{K}$ 上的矩阵 $\boldsymbol{A}, \boldsymbol{B}$, 使得 $\boldsymbol{A}\boldsymbol{B}-\boldsymbol{B}\boldsymbol{A}=\boldsymbol{C}$ 成立. $\square$

### §7.4 乘法交换性诱导的多项式表示

设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 定义 $\mathbb{K}[\boldsymbol{A}]=\{f(\boldsymbol{A}) \mid f(x) \in \mathbb{K}[x]\}$ 为 $\boldsymbol{A}$ 的多项式全体构成的线性空间, $C(\boldsymbol{A})=\{\boldsymbol{B} \in M_n(\mathbb{K}) \mid \boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}\}$ 为与 $\boldsymbol{A}$ 乘法可交换的 $n$ 阶矩阵全体构成的线性空间. 由于 $\boldsymbol{A}$ 与任意的 $f(\boldsymbol{A})$ 乘法可交换, 故有 $\mathbb{K}[\boldsymbol{A}] \subseteq C(\boldsymbol{A})$. 但上述包含关系一般并不相等, 例如, $\mathbb{K}[\boldsymbol{I}_n]$ 为纯量矩阵全体, 但 $C(\boldsymbol{I}_n)=M_n(\mathbb{K})$. 因此可以自然地问: 当 $\boldsymbol{A}$ 满足怎样的条件时, $C(\boldsymbol{A})=\mathbb{K}[\boldsymbol{A}]$ 成立呢？换言之, 当 $\boldsymbol{A}$ 满足怎样的条件时, 对任一与 $\boldsymbol{A}$ 乘法可交换的 $\boldsymbol{B}$, 都存在 $f(x) \in \mathbb{K}[x]$, 使得 $\boldsymbol{B}=f(\boldsymbol{A})$ 呢？

本节我们将利用循环空间和循环向量的几何性质来证明: $C(\boldsymbol{A})=\mathbb{K}[\boldsymbol{A}]$ 成立的充要条件是 $\boldsymbol{A}$ 的极小多项式等于其特征多项式. 此时, 线性空间 $C(\boldsymbol{A})$ 的一组基为 $\{\boldsymbol{I}_n, \boldsymbol{A}, \cdots, \boldsymbol{A}^{n-1}\}$. 由上述结论能得到许多有趣的应用. 另外, 我们还将给出分块多项式表示及其应用等.

> [!example] **例 7.26**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 则对 $V$ 上任一与 $\varphi$ 乘法可交换的线性变换 $\psi$, 都存在不超过 $n-1$ 次的多项式 $g(x) \in \mathbb{K}[x]$, 使得 $\psi=g(\varphi)$ 成立的充要条件是 $\varphi$ 的极小多项式等于其特征多项式.

> [!proof]-
> 先证充分性. 设 $\varphi$ 的极小多项式等于其特征多项式 $f(\lambda)=\lambda^n+a_1\lambda^{n-1}+\cdots+a_{n-1}\lambda+a_n$, 则 $\varphi$ 只有一个非常数不变因子. 由有理标准型理论, 存在 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为友阵
> $$\boldsymbol{C}(f(\lambda)) = \begin{pmatrix} 0 & 0 & \cdots & 0 & -a_n \\ 1 & 0 & \cdots & 0 & -a_{n-1} \\ 0 & 1 & \cdots & 0 & -a_{n-2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -a_1 \end{pmatrix},$$


即有
$$\varphi(e_1)=e_2,\; \varphi(e_2)=e_3,\; \cdots,\; \varphi(e_{n-1})=e_n,\; \varphi(e_n)=-a_n e_1-a_{n-1}e_2-\cdots-a_1 e_n.$$

任取 $V$ 上满足 $\varphi\psi=\psi\varphi$ 的线性变换 $\psi$, 设
$$\psi(e_1)=b_n e_1+b_{n-1}e_2+\cdots+b_1 e_n, \tag{7.7}$$
令 $g(x)=b_1 x^{n-1}+\cdots+b_{n-1}x+b_n$, 我们来证明: $\psi=g(\varphi)$. 首先由 $e_k=\varphi^{k-1}(e_1)\, (k \geq 2)$ 以及 (7.7) 式可知 $\psi(e_1)=g(\varphi)(e_1)$ 成立. 其次由 $\varphi, \psi$ 乘法可交换, 故对任意的 $e_k\, (k \geq 2)$ 有
$$\begin{aligned} \psi(e_k) &= \psi(\varphi^{k-1}(e_1)) = \varphi^{k-1}(\psi(e_1)) = \varphi^{k-1}(g(\varphi)(e_1)) \\ &= g(\varphi)(\varphi^{k-1}(e_1)) = g(\varphi)(e_k). \end{aligned}$$
最后, 注意到 $\psi$ 与 $g(\varphi)$ 在基向量 $\{e_1, e_2, \cdots, e_n\}$ 上的取值都相等, 故由线性扩张定理可知 $\psi=g(\varphi)$ 成立.

再证必要性. 设 $\varphi$ 的不变因子组为 $1, \cdots, 1, d_1(\lambda), \cdots, d_k(\lambda)$, 其中 $d_i(\lambda)$ 为非常数首一多项式, $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq k-1)$, 则 $\varphi$ 的有理标准型 $\boldsymbol{F}=\operatorname{diag}\{\boldsymbol{F}_1, \boldsymbol{F}_2, \cdots, \boldsymbol{F}_k\}$, 其中 $\boldsymbol{F}_i=\boldsymbol{F}(d_i(\lambda))$ 为 $n_i$ 阶矩阵. 若 $\varphi$ 的极小多项式不等于其特征多项式, 则 $k \geq 2$. 构造分块对角矩阵
$$\boldsymbol{B}=\operatorname{diag}\{\boldsymbol{I}_{n_1}, \boldsymbol{O}_{n_2}, \cdots, \boldsymbol{O}_{n_k}\},$$
显然 $\boldsymbol{B}\boldsymbol{F}=\boldsymbol{F}\boldsymbol{B}$. 用反证法, 若存在多项式 $g(x)$, 使得 $\boldsymbol{B}=g(\boldsymbol{F})$, 即
$$\boldsymbol{B}=\operatorname{diag}\{g(\boldsymbol{F}_1), g(\boldsymbol{F}_2), \cdots, g(\boldsymbol{F}_k)\},$$
则 $g(\boldsymbol{F}_1)=\boldsymbol{I}_{n_1}$, $g(\boldsymbol{F}_i)=\boldsymbol{O}\, (i \geq 2)$. 由于 $d_k(\lambda)$ 是 $\boldsymbol{F}_k$ 的极小多项式 (也是特征多项式), 故 $d_k(\lambda) \mid g(\lambda)$, 从而 $d_1(\lambda) \mid g(\lambda)$, 于是 $g(\boldsymbol{F}_1)=\boldsymbol{O}$, 矛盾! 因此 $\boldsymbol{B}$ 不能表示为 $\boldsymbol{F}$ 的多项式, 从而由 $\boldsymbol{B}$ 定义的线性变换 $\psi$ 符合题目要求. $\square$

> [!note] 注
> 本题充分性证明的关键点是: $V=C(\varphi, e_1)$ 是一个循环空间, 循环向量 $e_1$ 经过 $\varphi$ 的 $n-1$ 次作用, 生成了 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$. 因此, 只要验证了 $\psi$ 和 $g(\varphi)$ 在循环向量 $e_1$ 上的取值相同, 那么由 $\varphi, \psi$ 的乘法交换性可知 $\psi$ 和 $g(\varphi)$ 在上述基上的取值也相同, 从而它们必相等. 另外, 例 7.14 证明了: 线性变换 $\varphi$ 的极小多项式等于其特征多项式当且仅当 $V$ 是关于 $\varphi$ 的循环空间. 因此, 作为本题的推论, 我们给出了循环空间的另一刻画.


> [!corollary] **推论**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\mathbb{K}[\varphi]=\{f(\varphi) \mid f(x) \in \mathbb{K}[x]\}$, $C(\varphi)=\{\psi \in \mathcal{L}(V) \mid \varphi\psi=\psi\varphi\}$, 则 $V$ 是关于 $\varphi$ 的循环空间的充要条件是 $C(\varphi)=\mathbb{K}[\varphi]$. 此时, $C(\varphi)$ 的一组基为 $\{\boldsymbol{I}_V, \varphi, \cdots, \varphi^{n-1}\}$.

§7.3 中给出了很多循环空间的例子, 故由例 7.26 可得如下几个应用.

> [!example] **例 6.63**
>
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是 $n$ 阶矩阵, $\boldsymbol{A}$ 有 $n$ 个不同的特征值, 并且 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 求证: 存在次数不超过 $n-1$ 的多项式 $f(x)$, 使得 $\boldsymbol{B}=f(\boldsymbol{A})$.

> [!proof]- **证法 2**
> 由例 7.15 可知, $\mathbb{C}^n$ 是关于 $\boldsymbol{A}$ 的循环空间, 再由例 7.26 即得结论. $\square$

> [!example] **例 7.27**
>
> 设数域 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征多项式 $f(\lambda)=P_1(\lambda)P_2(\lambda)\cdots P_k(\lambda)$, 其中 $P_i(\lambda)\, (1 \leq i \leq k)$ 是 $\mathbb{K}$ 上互异的首一不可约多项式. 设 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{B}$ 满足 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 求证: 存在 $\mathbb{K}$ 上次数不超过 $n-1$ 的多项式 $f(x)$, 使得 $\boldsymbol{B}=f(\boldsymbol{A})$.

> [!proof]-
> 由例 7.16 可知, $\mathbb{K}^n$ 是关于 $\boldsymbol{A}$ 的循环空间, 再由例 7.26 即得结论. $\square$

> [!example] **例 7.28**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 2 阶矩阵, 试求 $C(\boldsymbol{A})=\{\boldsymbol{X} \in M_2(\mathbb{K}) \mid \boldsymbol{A}\boldsymbol{X}=\boldsymbol{X}\boldsymbol{A}\}$.

> [!proof]-
> 若 $\boldsymbol{A}$ 的极小多项式等于特征多项式, 则由例 7.26 可知 $C(\boldsymbol{A})=\mathbb{K}[\boldsymbol{A}]$. 若极小多项式不等于特征多项式, 则极小多项式必为一次多项式 $x-c$, 从而 $\boldsymbol{A}=c\boldsymbol{I}_2$, 于是 $C(\boldsymbol{A})=M_2(\mathbb{K})$. $\square$

> [!example] **例 7.29**
>
> 设 $\boldsymbol{J}=\boldsymbol{J}_n(\lambda_0)$ 是特征值为 $\lambda_0$ 的 $n$ 阶 Jordan 块, 求证: 和 $\boldsymbol{J}$ 乘法可交换的 $n$ 阶矩阵必可表示为 $\boldsymbol{J}$ 的次数不超过 $n-1$ 的多项式.

> [!proof]-
> 根据 Jordan 标准型的几何意义, $\mathbb{C}^n=C(\boldsymbol{J}-\lambda_0\boldsymbol{I}_n, e_n)$ 是关于线性变换 $\boldsymbol{J}-\lambda_0\boldsymbol{I}_n$ 的循环空间, 循环向量是标准单位列向量中的最后一个 $e_n=(0, \cdots, 0, 1)'$, 再由例 7.26 即得结论. 当然也可以通过代数方法直接进行证明. 设 $\boldsymbol{A}$ 和 $\boldsymbol{J}$ 可交换, 注意到 $\boldsymbol{J}=\lambda_0\boldsymbol{I}_n+\boldsymbol{J}_0$, 其中 $\boldsymbol{J}_0=\boldsymbol{J}_n(0)$ 是特征值为零的 Jordan 块, 故 $\boldsymbol{A}, \boldsymbol{J}$ 乘法可交换当且仅当 $\boldsymbol{A}, \boldsymbol{J}_0$ 乘法可交换. 经计算得到 $\boldsymbol{A}$ 必为下列形状的上三角矩阵:
> $$\boldsymbol{A} = \begin{pmatrix} a_1 & a_2 & \cdots & a_n \\ & a_1 & \ddots & \vdots \\ & & \ddots & a_2 \\ & & & a_1 \end{pmatrix},$$
> 于是
> $$\boldsymbol{A} = a_1\boldsymbol{I}_n+a_2\boldsymbol{J}_0+\cdots+a_n\boldsymbol{J}_0^{n-1} = a_1\boldsymbol{I}_n+a_2(\boldsymbol{J}-\lambda_0\boldsymbol{I}_n)+\cdots+a_n(\boldsymbol{J}-\lambda_0\boldsymbol{I}_n)^{n-1}$$

为 $\boldsymbol{J}$ 的次数不超过 $n-1$ 的多项式. $\square$


> [!example] **例 7.30**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 若存在 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{B}$, 使得 $\boldsymbol{A}\boldsymbol{B}-\boldsymbol{B}\boldsymbol{A}=c\boldsymbol{A}+\boldsymbol{I}_n$, 其中 $c \in \mathbb{K}$, 则称 $\boldsymbol{A}$ 是 $**$ 的平延. 求证: $\boldsymbol{A}$ 的极小多项式 $m(\lambda)=\lambda^n$.

> [!proof]-
> 注意到 $c\boldsymbol{A}+\boldsymbol{I}_n$ 与 $\boldsymbol{A}$ 乘法可交换, 因此由平延的定义可知, $c\boldsymbol{A}+\boldsymbol{I}_n$ 可表示为 $\boldsymbol{A}$ 的多项式. 再由例 7.26 可知, $\mathbb{K}^n$ 是关于 $\boldsymbol{A}$ 的循环空间, 从而 $\boldsymbol{A}$ 的极小多项式等于特征多项式, 即 $m(\lambda)=\lambda^n$. 另外, 也可利用 Cayley-Hamilton 定理直接证明. $\square$

> [!example] **例 7.31**
>
> 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $\varphi$ 的特征多项式 $f(\lambda)$ 和极小多项式 $m(\lambda)$ 相等. 又设 $\psi$ 是 $V$ 上的线性变换, 满足 $\varphi\psi=\psi\varphi$, 求证: 存在次数不超过 $n-1$ 的多项式 $h(x) \in \mathbb{K}[x]$, 使得 $\psi=h(\varphi)$.

> [!proof]-
> 由例 7.26 直接得到. $\square$

上面我们讨论了单个矩阵 $C(\boldsymbol{A})=\mathbb{K}[\boldsymbol{A}]$ 的充要条件, 接下来我们自然地考虑两个矩阵 $C(\boldsymbol{A}) \cap C(\boldsymbol{B})=\mathbb{K}[\boldsymbol{A}, \boldsymbol{B}]$ 的充要条件. 这一问题的完全解答请参考教学论文 [11].

> [!example] **例 7.32**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶非异阵, 证明: 对正整数 $m$, 若 $\boldsymbol{A}^m$ 的极小多项式等于特征多项式, 则 $\boldsymbol{A}$ 的极小多项式也等于特征多项式.

> [!proof]-
> 用反证法. 设 $\boldsymbol{A}$ 的极小多项式 $m(\lambda) \neq f(\lambda)$ (特征多项式), 则存在特征值 $\lambda_0$, 使得 $m(\lambda)$ 中 $(\lambda-\lambda_0)$ 的幂次严格小于 $f(\lambda)$ 中 $(\lambda-\lambda_0)$ 的幂次. 设 $f(\lambda)=(\lambda-\lambda_0)^r g(\lambda)$, 其中 $g(\lambda_0) \neq 0$, 则 $m(\lambda)=(\lambda-\lambda_0)^s g(\lambda)$, 其中 $s < r$. 设 $m \geq 2$, 容易验证 $(\lambda-\lambda_0^m)^s g(\lambda)^m$ 是 $\boldsymbol{A}^m$ 的零化多项式, 但其中 $(\lambda-\lambda_0^m)$ 的幂次严格小于特征多项式 $(\lambda-\lambda_0^m)^r g(\lambda)^m$ 中 $(\lambda-\lambda_0^m)$ 的幂次, 这与 $\boldsymbol{A}^m$ 的极小多项式等于特征多项式矛盾! $\square$

> [!corollary] **推论**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶非异阵, 若 $\boldsymbol{A}$ 的极小多项式等于特征多项式, 则对任一非零整数 $p$, $\boldsymbol{A}^p$ 的极小多项式也等于特征多项式.

> [!proof]-
> 由例 7.32 即得. $\square$

> [!example] **例 7.33**
>
> 设 $\boldsymbol{A}$ 为 $n$ 阶复方阵, 其特征多项式 $f(\lambda)=(\lambda-1)^n$, 试对正整数 $k$, 求 $\boldsymbol{A}^k$.

> [!proof]-
> 由例 7.7 可知, $\boldsymbol{A}$ 与 $\boldsymbol{A}^k$ 相似, 即存在 $n$ 阶非异阵 $\boldsymbol{P}(k)$, 使得 $\boldsymbol{P}(k)^{-1}\boldsymbol{A}^k\boldsymbol{P}(k)=\boldsymbol{A}$. 因此, 若 $g(\boldsymbol{A}^k)=\boldsymbol{O}$, 则 $g(\boldsymbol{A})=g(\boldsymbol{P}(k)^{-1}\boldsymbol{A}^k\boldsymbol{P}(k))=\boldsymbol{P}(k)^{-1}g(\boldsymbol{A}^k)\boldsymbol{P}(k)=\boldsymbol{O}$, 即 $\boldsymbol{A}^k$ 的零化多项式也是 $\boldsymbol{A}$ 的零化多项式, 从而 $\boldsymbol{A}$ 的极小多项式整除 $\boldsymbol{A}^k$ 的极小多项式. 又 $\boldsymbol{A}$ 的极小多项式为 $(\lambda-1)^n$, 故 $\boldsymbol{A}^k$ 的极小多项式也为 $(\lambda-1)^n$. 于是 $\boldsymbol{A}^k$ 的 Jordan 标准型只有一个 Jordan 块 $\boldsymbol{J}_n(1)$, 即 $\boldsymbol{A}^k$ 与 $\boldsymbol{J}_n(1)$ 相似. $\square$


> [!example] **例 7.34**
>
> 设 $\boldsymbol{A}$ 为 $n$ 阶对合阵, 即 $\boldsymbol{A}^2=\boldsymbol{I}_n$, 试求 $\boldsymbol{A}$ 的 Jordan 标准型.

> [!proof]-
> 由例 6.54 可知 $\boldsymbol{A}$ 可对角化. 又 $\boldsymbol{A}$ 的特征值适合多项式 $\lambda^2-1$, 故只能是 $\pm 1$. 因此, $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{-\boldsymbol{I}_r, \boldsymbol{I}_{n-r}\}$, 其中 $0 \leq r \leq n$. $\square$

> [!example] **例 7.35**
>
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂等阵, 即 $\boldsymbol{A}^2=\boldsymbol{A}$, 试求 $\boldsymbol{A}$ 的 Jordan 标准型.

> [!proof]-
> 由例 6.55 可知 $\boldsymbol{A}$ 可对角化. 又 $\boldsymbol{A}$ 的特征值适合多项式 $\lambda^2-\lambda$, 故只能是 $0$ 或 $1$. 因此, $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{\boldsymbol{I}_r, \boldsymbol{O}_{n-r}\}$, 其中 $0 \leq r \leq n$. $\square$

### §7.5 可对角化的判定(二)

在 §6.6 中, 我们已经讨论了可对角化问题, 本节将利用矩阵相似全系不变量的理论, 继续研究可对角化问题.

#### 1. 极小多项式无重根

利用极小多项式是整除关系下最大的不变因子, 以及所有不变因子的乘积等于特征多项式, 我们容易证明下述判定定理.

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 的极小多项式 $m(\lambda)$ 在 $\mathbb{K}$ 上无重根.

> [!proof]-
> 必要性: 设 $\boldsymbol{P}$ 为 $n$ 阶非异阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{\Lambda}=\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ 为对角矩阵. 设 $g(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)$, 则由 Cayley-Hamilton 定理可知 $g(\boldsymbol{A})=\boldsymbol{O}$, 从而 $m(\lambda) \mid g(\lambda)$. 因为 $g(\lambda)$ 在 $\mathbb{K}$ 上无重根, 所以 $m(\lambda)$ 在 $\mathbb{K}$ 上无重根.
>
> 充分性: 设 $m(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_k)$, 其中 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\mathbb{K}$ 中互不相同的数. 由于 $\boldsymbol{A}$ 的极小多项式等于最大不变因子, 并且所有不变因子的乘积等于特征多项式, 故 $\boldsymbol{A}$ 的初等因子都是一次多项式, 从而 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化. $\square$


> [!example] **例 7.36**
>
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 证明: $\varphi$ 可对角化的充要条件是对 $\varphi$ 的任一特征值 $\lambda_0$, 总有 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \cap \operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=0$.

> [!proof]-
> 必要性: 若 $\varphi$ 可对角化, 则存在 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为对角阵 $\operatorname{diag}\{\lambda_1, \cdots, \lambda_r, \lambda_{r+1}, \cdots, \lambda_n\}$, 其中 $\lambda_1=\cdots=\lambda_r=\lambda_0$, $\lambda_i \neq \lambda_0\, (i > r)$. 于是 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=L(e_1, \cdots, e_r)$, $\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=L(e_{r+1}, \cdots, e_n)$, 从而它们的交为零空间.
>
> 充分性: 设 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全部不同特征值, 令 $V_i=\operatorname{Ker}(\varphi-\lambda_i\boldsymbol{I}_V)$, $V^i=\operatorname{Im}(\varphi-\lambda_i\boldsymbol{I}_V)$, 则由条件可知 $V=V_i \oplus V^i\, (1 \leq i \leq k)$. 对任意的 $\boldsymbol{\alpha} \in V$, 由直和分解可知, 存在 $\boldsymbol{\alpha}_i \in V_i$, $\boldsymbol{\beta}_i \in V^i$, 使得 $\boldsymbol{\alpha}=\boldsymbol{\alpha}_i+\boldsymbol{\beta}_i$. 依次令 $i=1, 2, \cdots, k$, 则
> $$\boldsymbol{\alpha} = \boldsymbol{\alpha}_1+\boldsymbol{\beta}_1 = \boldsymbol{\alpha}_1+(\varphi-\lambda_1\boldsymbol{I}_V)(\boldsymbol{\beta}_2') = \boldsymbol{\alpha}_1+(\varphi-\lambda_1\boldsymbol{I}_V)(\boldsymbol{\alpha}_2+\boldsymbol{\beta}_2')$$
> $$= \boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2'+\cdots+\boldsymbol{\alpha}_k'+\boldsymbol{\gamma},$$
> 其中 $\boldsymbol{\alpha}_i' \in V_i$, $\boldsymbol{\gamma} \in V^1 \cap V^2 \cap \cdots \cap V^k$. 我们断言: $V^1 \cap V^2 \cap \cdots \cap V^k=0$, 从而 $\boldsymbol{\gamma}=0$, $\boldsymbol{\alpha}$ 可由 $V_1, V_2, \cdots, V_k$ 中的向量线性表示, 故 $V=V_1+V_2+\cdots+V_k$. 由例 4.34 可知上式是直和, 从而 $\varphi$ 可对角化. 下证断言: 设 $f_i(\lambda)=\dfrac{m(\lambda)}{\lambda-\lambda_i}$, 则 $f_1(\lambda), f_2(\lambda), \cdots, f_k(\lambda)$ 互素, 故存在 $u_i(\lambda)\, (1 \leq i \leq k)$, 使得 $\sum\limits_{i=1}^{k} f_i(\lambda)u_i(\lambda)=1$. 代入 $\varphi$, 得 $\sum\limits_{i=1}^{k} f_i(\varphi)u_i(\varphi)=\boldsymbol{I}_V$. 注意到 $f_i(\varphi)u_i(\varphi)$ 作用在 $V_i$ 上为零, 作用在 $V^i$ 上为恒等变换. 对任一 $\boldsymbol{\beta} \in V^1 \cap \cdots \cap V^k$, 有 $\boldsymbol{\beta}=\sum\limits_{i=1}^{k} f_i(\varphi)u_i(\varphi)(\boldsymbol{\beta})=\boldsymbol{0}$, 故断言成立. $\square$

#### 2. 特征值的代数重数等于几何重数

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 的任一特征值在 $\mathbb{K}$ 上的代数重数等于几何重数.

#### 3. 完全特征向量系

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量, 即 $\boldsymbol{A}$ 有完全特征向量系.

#### 4. 根子空间等于特征子空间

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是对 $\boldsymbol{A}$ 的任一特征值 $\lambda_0$, 其根子空间等于特征子空间.


#### 5. 全体特征子空间的直和等于全空间

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 的全体特征子空间的直和等于全空间.

#### 6. 初等因子都是一次多项式, 或 Jordan 块都是一阶矩阵

> [!example] **例 7.39**
>
> 设 $n$ 阶复方阵 $\boldsymbol{A}$ 的特征多项式为 $f(\lambda)$, 复系数多项式 $g(\lambda)$ 满足 $(f(\lambda), g'(\lambda))=1$. 证明: $\boldsymbol{A}$ 可对角化的充要条件是 $g(\boldsymbol{A})$ 可对角化.

> [!proof]-
> 必要性显然成立, 下证充分性. 用反证法, 设 $\boldsymbol{A}$ 不可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$. 注意到
> $$\boldsymbol{P}^{-1}g(\boldsymbol{A})\boldsymbol{P} = g(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}) = g(\boldsymbol{J}) = \operatorname{diag}\{g(\boldsymbol{J}_{r_1}(\lambda_1)), \cdots, g(\boldsymbol{J}_{r_k}(\lambda_k))\},$$
> 其中
> $$g(\boldsymbol{J}_{r_1}(\lambda_1)) = \begin{pmatrix} g(\lambda_1) & g'(\lambda_1) & \cdots & * \\ & g(\lambda_1) & \ddots & \vdots \\ & & \ddots & g'(\lambda_1) \\ & & & g(\lambda_1) \end{pmatrix}.$$
> 由 $(f(\lambda), g'(\lambda))=1$ 可知 $g'(\lambda_1) \neq 0$, 于是 $g(\boldsymbol{J}_{r_1}(\lambda_1))$ 的特征值全为 $g(\lambda_1)$, 其几何重数为 $r_1 - \mathrm{r}(g(\boldsymbol{J}_{r_1}(\lambda_1))-g(\lambda_1)\boldsymbol{I}_{r_1})=1$, 因此 $g(\boldsymbol{J}_{r_1}(\lambda_1))$ 的 Jordan 标准型为 $\boldsymbol{J}_{r_1}(g(\lambda_1))$, 其阶数 $r_1 > 1$. 由于 $\boldsymbol{J}_{r_1}(g(\lambda_1))$ 也是 $g(\boldsymbol{A})$ 的一个 Jordan 块, 故 $g(\boldsymbol{A})$ 不可对角化, 矛盾! $\square$

> [!example] **例 6.57 的延拓**
>
> 设 $V$ 为 $n$ 阶矩阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(\boldsymbol{X})=\boldsymbol{A}\boldsymbol{X}\boldsymbol{A}$, 其中 $\boldsymbol{A} \in V$. 证明: $\varphi$ 可对角化的充要条件是 $\boldsymbol{A}$ 可对角化.


> [!proof]-
> 充分性就是例 6.57, 下证必要性. 用反证法, 设 $\boldsymbol{A}$ 不可对角化, 则存在可逆矩阵 $\boldsymbol{P}, \boldsymbol{Q}$, 使得
> $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \boldsymbol{Q}^{-1}\boldsymbol{A}'\boldsymbol{Q} = \boldsymbol{J} = \operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$$
> 为 Jordan 标准型, 其中 $r_1 > 1$. 设 $\boldsymbol{P}=(\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$, $\boldsymbol{Q}=(\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_n)$ 分别为两个矩阵的列分块, 令 $U=L(\boldsymbol{\alpha}_i\boldsymbol{\beta}_j', 1 \leq i, j \leq r_1)$, 则由第 3 章的解答题 3 可知 $\{\boldsymbol{\alpha}_i\boldsymbol{\beta}_j', 1 \leq i, j \leq r_1\}$ 是 $U$ 的一组基. 经简单计算可得
> $$\varphi(\boldsymbol{\alpha}_1\boldsymbol{\beta}_1') = \lambda_1^2\boldsymbol{\alpha}_1\boldsymbol{\beta}_1';$$
> $$\varphi(\boldsymbol{\alpha}_1\boldsymbol{\beta}_j') = \lambda_1\boldsymbol{\alpha}_1\boldsymbol{\beta}_{j-1}'+\lambda_1^2\boldsymbol{\alpha}_1\boldsymbol{\beta}_j',\; 2 \leq j \leq r_1;$$
> $$\varphi(\boldsymbol{\alpha}_i\boldsymbol{\beta}_1') = \lambda_1\boldsymbol{\alpha}_{i-1}\boldsymbol{\beta}_1'+\lambda_1^2\boldsymbol{\alpha}_i\boldsymbol{\beta}_1',\; 2 \leq i \leq r_1; \tag{7.8}$$
> $$\varphi(\boldsymbol{\alpha}_i\boldsymbol{\beta}_j') = \boldsymbol{\alpha}_{i-1}\boldsymbol{\beta}_{j-1}'+\lambda_1\boldsymbol{\alpha}_{i-1}\boldsymbol{\beta}_j'+\lambda_1\boldsymbol{\alpha}_i\boldsymbol{\beta}_{j-1}'+\lambda_1^2\boldsymbol{\alpha}_i\boldsymbol{\beta}_j',\; 2 \leq i, j \leq r_1,$$
> 于是 $U$ 是 $\varphi$-不变子空间. 由于 $\varphi$ 可对角化, 故由例 7.36 可知 $\varphi|_U$ 也可对角化, 但 (7.8) 式告诉我们 $\varphi|_U$ 在基 $\{\boldsymbol{\alpha}_1\boldsymbol{\beta}_1', \cdots, \boldsymbol{\alpha}_1\boldsymbol{\beta}_{r_1}'; \cdots; \boldsymbol{\alpha}_{r_1}\boldsymbol{\beta}_1', \cdots, \boldsymbol{\alpha}_{r_1}\boldsymbol{\beta}_{r_1}'\}$ 下的表示矩阵是一个上三角矩阵, 主对角元全为 $\lambda_1^2$, 主对角线上方至少有一个非零元素 1 (其实是 Kronecker 积 $\boldsymbol{J}_{r_1}(\lambda_1) \otimes \boldsymbol{J}_{r_1}(\lambda_1)$), 由例 6.73 可知这个矩阵不可对角化, 矛盾! $\square$

> [!example] **例 6.58 的延拓**
>
> 设 $V$ 为 $n$ 阶矩阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(\boldsymbol{X})=\boldsymbol{A}\boldsymbol{X}-\boldsymbol{X}\boldsymbol{A}$, 其中 $\boldsymbol{A} \in V$. 证明: $\varphi$ 可对角化的充要条件是 $\boldsymbol{A}$ 可对角化.

> [!proof]-
> 充分性就是例 6.58, 下证必要性. 用反证法, 设 $\boldsymbol{A}$ 不可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$. 设 $\boldsymbol{P}=(\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$ 为列分块, 任取 $\boldsymbol{A}'$ 的特征值 $\lambda_0$ 及其特征向量 $\boldsymbol{\beta}$, 即 $\boldsymbol{A}'\boldsymbol{\beta}=\lambda_0\boldsymbol{\beta}$. 令 $U=L(\boldsymbol{\alpha}_i\boldsymbol{\beta}', 1 \leq i \leq r_1)$, 则由第 3 章的解答题 3 可知 $\{\boldsymbol{\alpha}_i\boldsymbol{\beta}', 1 \leq i \leq r_1\}$ 是 $U$ 的一组基. 经简单计算可得
> $$\varphi(\boldsymbol{\alpha}_1\boldsymbol{\beta}') = (\lambda_1-\lambda_0)\boldsymbol{\alpha}_1\boldsymbol{\beta}',\quad \varphi(\boldsymbol{\alpha}_2\boldsymbol{\beta}') = \boldsymbol{\alpha}_1\boldsymbol{\beta}'+(\lambda_1-\lambda_0)\boldsymbol{\alpha}_2\boldsymbol{\beta}',$$
> $$\cdots,\; \varphi(\boldsymbol{\alpha}_{r_1}\boldsymbol{\beta}') = \boldsymbol{\alpha}_{r_1-1}\boldsymbol{\beta}'+(\lambda_1-\lambda_0)\boldsymbol{\alpha}_{r_1}\boldsymbol{\beta}', \tag{7.9}$$
> 于是 $U$ 是 $\varphi$-不变子空间. 由于 $\varphi$ 可对角化, 故由例 7.36 可知 $\varphi|_U$ 也可对角化, 但 (7.9) 式告诉我们 $\varphi|_U$ 在基 $\{\boldsymbol{\alpha}_i\boldsymbol{\beta}', 1 \leq i \leq r_1\}$ 下的表示矩阵为 $\boldsymbol{J}_{r_1}(\lambda_1-\lambda_0)$, 这个矩阵不可对角化, 矛盾! $\square$

> [!example] **例 7.40**
>
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 求证: $\varphi$ 可对角化的充要条件是对 $\varphi$ 的任一特征值 $\lambda_0$, 总有 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \cap \operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V) = 0$.


> [!proof]-
> 先证必要性. 若 $\varphi$ 可对角化, 则存在一组基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为 $\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$. 适当调整基向量的顺序, 不妨设 $\lambda_0=\lambda_1=\cdots=\lambda_r$, $\lambda_0 \neq \lambda_j\, (j > r)$, 则容易验证 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=L(e_1, \cdots, e_r)$, $\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=L(e_{r+1}, \cdots, e_n)$, 从而 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \cap \operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=0$.
>
> 再证充分性. 用反证法, 设 $\varphi$ 不可对角化, 则存在 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型 $\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$, 其中 $r_1 > 1$. 由表示矩阵的定义可得 $\varphi(e_1)=\lambda_1 e_1$, $\varphi(e_2)=e_1+\lambda_1 e_2$, 于是 $(\varphi-\lambda_1\boldsymbol{I}_V)(e_1)=\boldsymbol{0}$, $(\varphi-\lambda_1\boldsymbol{I}_V)(e_2)=e_1$, 从而 $\boldsymbol{0} \neq e_1 \in \operatorname{Ker}(\varphi-\lambda_1\boldsymbol{I}_V) \cap \operatorname{Im}(\varphi-\lambda_1\boldsymbol{I}_V)$, 这与假设矛盾. $\square$

> [!example] **例 7.41**
>
> 求证: $n$ 阶复矩阵 $\boldsymbol{A}$ 可对角化的充要条件是对 $\boldsymbol{A}$ 的任一特征值 $\lambda_0$, $(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})^2$ 和 $\lambda_0\boldsymbol{I}_n-\boldsymbol{A}$ 的秩相同.

> [!proof]-
> 先证必要性. 若 $\boldsymbol{A}$ 可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{\Lambda}=\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$. 适当调整 $\boldsymbol{P}$ 的列向量的顺序, 不妨设 $\lambda_0=\lambda_1=\cdots=\lambda_r$, $\lambda_0 \neq \lambda_j\, (j > r)$, 则 $\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})=\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{\Lambda})=n-r$, $\mathrm{r}\big((\lambda_0\boldsymbol{I}_n-\boldsymbol{A})^2\big)=\mathrm{r}\big((\lambda_0\boldsymbol{I}_n-\boldsymbol{\Lambda})^2\big)=n-r$, 于是结论成立.
>
> 再证充分性. 用反证法, 若 $\boldsymbol{A}$ 不可对角化, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$. 注意到
> $$\mathrm{r}\big((\lambda_1\boldsymbol{I}_n-\boldsymbol{A})^j\big) = \mathrm{r}\big((\lambda_1\boldsymbol{I}_n-\boldsymbol{J})^j\big) = \sum_{i=1}^{k} \mathrm{r}\big((\lambda_1\boldsymbol{I}_{r_i}-\boldsymbol{J}_{r_i}(\lambda_i))^j\big),\quad j \geq 1,$$
> 又 $\mathrm{r}(\lambda_1\boldsymbol{I}_{r_1}-\boldsymbol{J}_{r_1}(\lambda_1))=r_1-1$, $\mathrm{r}\big((\lambda_1\boldsymbol{I}_{r_1}-\boldsymbol{J}_{r_1}(\lambda_1))^2\big)=r_1-2$, 因此 $\mathrm{r}\big((\lambda_1\boldsymbol{I}_n-\boldsymbol{A})^2\big) < \mathrm{r}(\lambda_1\boldsymbol{I}_n-\boldsymbol{A})$, 这与假设矛盾. $\square$

例 7.42 给出了可对角化判定准则的一个补充, 例 7.40 和例 7.41 都是它的特例.

> [!example] **例 7.42**
>
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 求证: $\varphi$ 可对角化的充要条件是对 $\varphi$ 的任一特征值 $\lambda_0$, 下列条件之一成立:
> (1) $V=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)+\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)$;
> (2) $V=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \oplus \operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)$;
> (3) $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \cap \operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=0$;
> (4) $\dim \operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=\dim \operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^2$;
> (5) $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^2=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^3=\cdots$;
> (6) $\mathrm{r}(\varphi-\lambda_0\boldsymbol{I}_V)=\mathrm{r}\big((\varphi-\lambda_0\boldsymbol{I}_V)^2\big)$;
> (7) $\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)=\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)^2=\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)^3=\cdots$;


> (8) $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)$ 存在 $\varphi$-不变补空间, 即存在 $\varphi$-不变子空间 $U$, 使得 $V=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V) \oplus U$;
> (9) $\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V)$ 存在 $\varphi$-不变补空间, 即存在 $\varphi$-不变子空间 $W$, 使得 $V=\operatorname{Im}(\varphi-\lambda_0\boldsymbol{I}_V) \oplus W$.

> [!proof]-
> 由例 4.36 可知条件 (1) $\sim$ (9) 是相互等价的, 因此本题的结论由例 7.40 (与条件 (3) 对应) 或例 7.41 (与条件 (6) 对应) 即得. 事实上, 对充分性而言, 我们还可以从其他条件出发来证明 $\varphi$ 可对角化, 下面是 3 种证法.
>
> 证法 1 对任一特征值 $\lambda_0$, 由 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^2=\cdots=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^n$, 取维数之后可得特征值 $\lambda_0$ 的几何重数等于代数重数, 从而 $\varphi$ 有完全的特征向量系, 于是 $\varphi$ 可对角化.
>
> 证法 2 对任一特征值 $\lambda_0$, 由 $\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^2=\cdots=\operatorname{Ker}(\varphi-\lambda_0\boldsymbol{I}_V)^n$ 可知, 特征子空间等于根子空间, 再由根子空间的直和分解可知, 全空间等于特征子空间的直和, 从而 $\varphi$ 可对角化.
>
> 证法 3 设 $\varphi$ 的全体不同特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_k$, 特征多项式 $f(\lambda)=(\lambda-\lambda_1)^{m_1}(\lambda-\lambda_2)^{m_2}\cdots(\lambda-\lambda_k)^{m_k}$, 则对任意的 $\boldsymbol{\alpha} \in V$, 由 Cayley-Hamilton 定理可得
> $$(\varphi-\lambda_1\boldsymbol{I}_V)^{m_1}(\varphi-\lambda_2\boldsymbol{I}_V)^{m_2}\cdots(\varphi-\lambda_k\boldsymbol{I}_V)^{m_k}(\boldsymbol{\alpha})=\boldsymbol{0},$$
> 即有 $(\varphi-\lambda_2\boldsymbol{I}_V)^{m_2}\cdots(\varphi-\lambda_k\boldsymbol{I}_V)^{m_k}(\boldsymbol{\alpha}) \in \operatorname{Ker}(\varphi-\lambda_1\boldsymbol{I}_V)^{m_1}=\operatorname{Ker}(\varphi-\lambda_1\boldsymbol{I}_V)$, 从而
> $$(\varphi-\lambda_1\boldsymbol{I}_V)(\varphi-\lambda_2\boldsymbol{I}_V)^{m_2}\cdots(\varphi-\lambda_k\boldsymbol{I}_V)^{m_k}(\boldsymbol{\alpha})=\boldsymbol{0}.$$
> 不断这样做下去, 最终可得对任意的 $\boldsymbol{\alpha} \in V$, 总有
> $$(\varphi-\lambda_1\boldsymbol{I}_V)(\varphi-\lambda_2\boldsymbol{I}_V)\cdots(\varphi-\lambda_k\boldsymbol{I}_V)(\boldsymbol{\alpha})=\boldsymbol{0},$$
> 即 $\varphi$ 适合多项式 $g(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_k)$, 从而 $\varphi$ 可对角化. $\square$

最后, 我们来看一道矩阵可对角化应用的例题.

> [!example] **例 7.43**
>
> 若 $n\, (n \geq 2)$ 阶矩阵 $\boldsymbol{B}$ 相似于 $\boldsymbol{R}=\operatorname{diag}\left\{\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \boldsymbol{I}_{n-2}\right\}$, 则称 $\boldsymbol{B}$ 为反射矩阵. 证明: 任一对合矩阵 $\boldsymbol{A}$ (即 $\boldsymbol{A}^2=\boldsymbol{I}_n$) 均可分解为至多 $n$ 个两两乘法可交换的反射矩阵的乘积.


> [!proof]-
> 由例 7.34 可知, 对合矩阵 $\boldsymbol{A}$ 可对角化, 即存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\operatorname{diag}\{-\boldsymbol{I}_r, \boldsymbol{I}_{n-r}\}$, 其中 $0 \leq r \leq n$. 当 $r=0$ 时, $\boldsymbol{A}=\boldsymbol{I}_n=\boldsymbol{R}^2$, 结论成立. 当 $r \geq 1$ 时, 设 $\boldsymbol{B}_i=\boldsymbol{P}\operatorname{diag}\{1, \cdots, 1, -1, 1, \cdots, 1\}\boldsymbol{P}^{-1}$, 其中 $-1$ 在主对角线上的第 $i$ 个位置, 则 $\boldsymbol{B}_i\, (1 \leq i \leq r)$ 两两乘法可交换, 并且 $\boldsymbol{A}=\boldsymbol{B}_1\boldsymbol{B}_2\cdots\boldsymbol{B}_r$. 由于 $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ 的特征值是 $-1, 1$, 故其相似于 $\operatorname{diag}\{-1, 1\}$, 因此矩阵 $\boldsymbol{B}$ 是反射矩阵当且仅当 $\boldsymbol{B}$ 相似于 $\operatorname{diag}\{-1, 1, \cdots, 1\}$. 因为对角矩阵的两个主对角元素对换是一个相似变换, 所以上述 $\boldsymbol{B}_i$ 都是反射矩阵, 于是 $\boldsymbol{A}$ 可以分解为 $r$ 个两两乘法可交换的反射矩阵的乘积. $\square$

### §7.6 Jordan 标准型的求法

计算矩阵的 Jordan 标准型是一个重要的问题, 也是后续专业课的需求. 对于数字矩阵 $\boldsymbol{A}$, 通常的方法是利用 $\lambda$-矩阵的初等变换求出特征矩阵 $\lambda\boldsymbol{I}-\boldsymbol{A}$ 的法式, 得到 $\boldsymbol{A}$ 的不变因子和初等因子, 便可写出 Jordan 标准型. 对于含有未定元的文字矩阵, 或者仅知矩阵某些相似不变量的信息, 此时若直接计算法式将会遇到困难. 一般来说, 需要先对矩阵的结构进行分析, 求出 $\boldsymbol{A}$ 的行列式因子、不变因子或初等因子, 然后才能得到 Jordan 标准型.

如何分析矩阵的结构呢？通常我们有以下 3 种方法.

**(1) 计算行列式因子** 对于某些具有简单结构的矩阵 (如上 (下) 三角矩阵、类上 (下) 三角矩阵), 可以通过选取适当的子式, 计算出行列式因子, 再得到不变因子和初等因子. 比如, Frobenius 块和 Jordan 块就是利用这种方法的典型例子.

**(2) 计算极小多项式** 因为矩阵的极小多项式是整除关系下最大的不变因子, 所以极小多项式确定了最大 Jordan 块的阶数.

**(3) 计算特征值的几何重数** 因为特征值的几何重数等于其 Jordan 块的个数, 所以计算几何重数有助于 Jordan 标准型的确定.

下面是一些典型例题, 我们首先来看计算几何重数方法的两个应用.

> [!example] **例 7.44**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的不变因子组为 $d_1(\lambda), d_2(\lambda), \cdots, d_n(\lambda)$, 其中 $d_i(\lambda) \mid d_{i+1}(\lambda)\, (1 \leq i \leq n-1)$, 又 $\lambda_0$ 是 $\boldsymbol{A}$ 的特征值. 求证: $\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})=r$ 的充要条件是 $(\lambda-\lambda_0) \nmid d_r(\lambda)$ 但 $(\lambda-\lambda_0) \mid d_{r+1}(\lambda)$.


> [!proof]- **证法 1**
> $\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})=r$ 当且仅当特征值 $\lambda_0$ 的几何重数为 $n-r$; 这当且仅当特征值 $\lambda_0$ 的 Jordan 块有 $n-r$ 个; 由不变因子之间的整除关系可知, 这当且仅当后 $n-r$ 个不变因子能被 $\lambda-\lambda_0$ 整除, 而前 $r$ 个不变因子不能被 $\lambda-\lambda_0$ 整除.
>
> 证法 2 由例 7.23 可知, $\mathrm{r}(\lambda_0\boldsymbol{I}_n-\boldsymbol{A})=r$ 当且仅当 $\sum\limits_{i=1}^{n} \delta_{d_i(\lambda_0),0}=n-r$; 由不变因子之间的整除关系可知, 这当且仅当 $d_i(\lambda_0) \neq 0\, (1 \leq i \leq r)$ 且 $d_i(\lambda_0)=0\, (r+1 \leq i \leq n)$; 最后由余数定理即得结论. $\square$

> [!example] **例 7.45**
>
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $U$ 是 $V$ 的非零 $\varphi$-不变子空间. 设 $\lambda_0$ 是限制变换 $\varphi|_U$ 的特征值, 证明: $\varphi|_U$ 的属于特征值 $\lambda_0$ 的 Jordan 块的个数不超过 $\varphi$ 的属于特征值 $\lambda_0$ 的 Jordan 块的个数.

> [!proof]-
> Jordan 块的个数等于特征值的几何重数, 即线性无关的特征向量的个数. 设 $\varphi|_U$ 的属于特征值 $\lambda_0$ 的 Jordan 块的个数为 $r$, 则 $\varphi|_U$ 关于特征值 $\lambda_0$ 有 $r$ 个线性无关的特征向量, 它们也都是 $\varphi$ 关于特征值 $\lambda_0$ 的线性无关的特征向量, 从而 $\varphi$ 的属于特征值 $\lambda_0$ 的 Jordan 块至少有 $r$ 个. 也可用纯代数的方法 (矩阵的秩) 进行证明, 请读者自行思考完成. $\square$

我们来看一道同时利用上述 3 种方法求 Jordan 标准型的典型例题.

> [!example] **例 7.46**
>
> 求下列 $n$ 阶矩阵的 Jordan 标准型, 其中 $a \neq 0$:
> $$\boldsymbol{A} = \begin{pmatrix} a & a & a & \cdots & a \\ & a & a & \cdots & a \\ & & a & \cdots & a \\ & & & \ddots & \vdots \\ & & & & a \end{pmatrix}.$$

> [!proof]- **解法 1**
> 由例 7.4 可知, $\boldsymbol{A}$ 的行列式因子组为 $1, \cdots, 1, (\lambda-a)^n$, 这也是 $\boldsymbol{A}$ 的不变因子组, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}_n(a)$.
>
> 解法 2 显然 $\boldsymbol{A}$ 的特征多项式为 $(\lambda-a)^n$, 故 $\boldsymbol{A}$ 的极小多项式是 $\lambda-a$ 的某个幂. 设 $\boldsymbol{N}=\boldsymbol{J}_n(0)$, 即特征值为 $0$ 的 $n$ 阶 Jordan 块, 它满足 $\boldsymbol{N}^{n-1} \neq \boldsymbol{O}$ 但 $\boldsymbol{N}^n=\boldsymbol{O}$, 则 $\boldsymbol{A}=a(\boldsymbol{I}_n+\boldsymbol{N}+\boldsymbol{N}^2+\cdots+\boldsymbol{N}^{n-1})$. 注意到
> $$(\boldsymbol{A}-a\boldsymbol{I}_n)^{n-1}=a^{n-1}(\boldsymbol{N}+\boldsymbol{N}^2+\cdots+\boldsymbol{N}^{n-1})^{n-1}=a^{n-1}\boldsymbol{N}^{n-1} \neq \boldsymbol{O},$$
> 故 $\boldsymbol{A}$ 不适合多项式 $(\lambda-a)^{n-1}$, 于是 $\boldsymbol{A}$ 的极小多项式只能是 $(\lambda-a)^n$. 因此 $\boldsymbol{A}$ 的不变因子组是 $1, \cdots, 1, (\lambda-a)^n$, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}_n(a)$.
>
> 解法 3 显然 $\boldsymbol{A}$ 的特征值全为 $a$, 我们来计算它的几何重数. 注意到 $\mathrm{r}(a\boldsymbol{I}_n-\boldsymbol{A})=n-1$, 故特征值 $a$ 的几何重数为 $n-\mathrm{r}(a\boldsymbol{I}_n-\boldsymbol{A})=1$, 于是 $\boldsymbol{A}$ 的 Jordan 标准型中关于特征值 $a$ 的 Jordan 块只有一个, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}_n(a)$. $\square$


如果给出相似不变量的信息, 那么还可以综合利用第 6 章和第 7 章的方法来求 Jordan 标准型. 下面这道例题是例 6.74 和例 6.82 的延续.

> [!example] **例 7.47**
>
> 设 $n\, (n>1)$ 阶矩阵 $\boldsymbol{A}$ 的秩为 1, 试求 $\boldsymbol{A}$ 的 Jordan 标准型.

> [!proof]- **解法 1**
> 由 $\mathrm{r}(\boldsymbol{A})=1$ 可知, 存在非零列向量 $\boldsymbol{\alpha}, \boldsymbol{\beta}$, 使得 $\boldsymbol{A}=\boldsymbol{\alpha}\boldsymbol{\beta}'$. 由例 6.19 可得 $|\lambda\boldsymbol{I}_n-\boldsymbol{A}|=\lambda^{n-1}(\lambda-\boldsymbol{\beta}'\boldsymbol{\alpha})$, 再由所有特征值之和等于矩阵的迹可得 $\mathrm{tr}(\boldsymbol{A})=\boldsymbol{\beta}'\boldsymbol{\alpha}$. 若 $\mathrm{tr}(\boldsymbol{A}) \neq 0$, 则特征值 $\mathrm{tr}(\boldsymbol{A})$ 的几何重数等于 1, 特征值 0 的几何重数等于 $n-\mathrm{r}(\boldsymbol{A})=n-1$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \mathrm{tr}(\boldsymbol{A})\}$. 若 $\mathrm{tr}(\boldsymbol{A})=0$, 则特征值 0 的代数重数是 $n$, 几何重数是 $n-1$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \boldsymbol{J}_2(0)\}$.
>
> 解法 2 特征多项式的计算同解法 1, 又由例 6.82 可知, $\boldsymbol{A}$ 的极小多项式 $m(\lambda)=\lambda(\lambda-\mathrm{tr}(\boldsymbol{A}))$, 于是 $\boldsymbol{A}$ 的不变因子组为 $1, \lambda, \cdots, \lambda, m(\lambda)$. 若 $\mathrm{tr}(\boldsymbol{A}) \neq 0$, 则 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \mathrm{tr}(\boldsymbol{A})\}$. 若 $\mathrm{tr}(\boldsymbol{A})=0$, 则 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \boldsymbol{J}_2(0)\}$.
>
> 解法 3 直接利用 Jordan 标准型来解最为简单. 设 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(0), \cdots, \boldsymbol{J}_{r_k}(0), \boldsymbol{J}_{s_1}(\lambda_1), \cdots, \boldsymbol{J}_{s_l}(\lambda_l)\}$, 其中 $\lambda_j \neq 0\, (1 \leq j \leq l)$. 由于相似关系不改变矩阵的秩, 故 $\boldsymbol{J}$ 的秩也为 1, 即有 $(r_1-1)+\cdots+(r_k-1)+s_1+\cdots+s_l=1$. 于是只有以下两种情况成立: 第一种情况是 $l=1$, $s_1=1$, $\lambda_1=\mathrm{tr}(\boldsymbol{A}) \neq 0$, 且所有的 $r_i=1$, 此时 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \mathrm{tr}(\boldsymbol{A})\}$. 第二种情况是某个 $r_i=2$, 其余的 $r_i=1$ 且 $l=0$, 此时 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \boldsymbol{J}_2(0)\}$. $\square$

> [!example] **例 7.48**
>
> 设 $n\, (n>1)$ 阶矩阵 $\boldsymbol{A}$ 的秩为 1, 求证: $\boldsymbol{A}$ 是幂等矩阵的充要条件是 $\mathrm{tr}(\boldsymbol{A})=1$, $\boldsymbol{A}$ 是幂零矩阵的充要条件是 $\mathrm{tr}(\boldsymbol{A})=0$.

> [!proof]-
> 由例 7.47 的证明过程即得结论. $\square$

例 7.46 和例 7.47 只通过求极小多项式或几何重数中的一个就可以得到解答, 但更复杂一些的问题却需要两者都运用才行, 让我们来看下面两个典型例题.

> [!example] **例 7.49**
>
> 设 $\boldsymbol{A}=\begin{pmatrix} 1 & 0 & 0 & 0 \\ a+2 & 1 & 0 & 0 \\ 5 & 3 & 1 & 0 \\ 7 & 6 & b+4 & 1 \end{pmatrix}$, 求 $\boldsymbol{A}$ 的 Jordan 标准型.

> [!proof]-
> 显然 $\boldsymbol{A}$ 的特征值全为 1, 首先我们来计算特征值 1 的几何重数. 考虑矩阵
> $$\boldsymbol{A}-\boldsymbol{I}_4 = \begin{pmatrix} 0 & 0 & 0 & 0 \\ a+2 & 0 & 0 & 0 \\ 5 & 3 & 0 & 0 \\ 7 & 6 & b+4 & 0 \end{pmatrix}.$$


(1) 当 $a+2 \neq 0$ 且 $b+4 \neq 0$ 时, $\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4)=3$, 于是特征值 1 的几何重数等于 1, 从而只有一个 Jordan 块, 因此 $\boldsymbol{A}$ 的 Jordan 标准型是 $\boldsymbol{J}_4(1)$.

(2) 当 $a+2=0$ 或 $b+4=0$ 时, $\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4)=2$, 于是特征值 1 的几何重数等于 2, 从而有两个 Jordan 块. 进一步我们来计算 $\boldsymbol{A}$ 的极小多项式.

(2.1) 若 $a+2=0$ 和 $b+4=0$ 中只有一个成立, 容易验证 $(\boldsymbol{A}-\boldsymbol{I}_4)^2 \neq \boldsymbol{O}$, 但 $(\boldsymbol{A}-\boldsymbol{I}_4)^3=\boldsymbol{O}$, 于是 $\boldsymbol{A}$ 的极小多项式是 $(\lambda-1)^3$, 从而不变因子组为 $1, 1, \lambda-1, (\lambda-1)^3$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1, \boldsymbol{J}_3(1)\}$.

(2.2) 若 $a+2=0$ 和 $b+4=0$ 都成立, 容易验证 $(\boldsymbol{A}-\boldsymbol{I}_4)^2=\boldsymbol{O}$, 于是 $\boldsymbol{A}$ 的极小多项式是 $(\lambda-1)^2$, 从而不变因子组为 $1, 1, (\lambda-1)^2, (\lambda-1)^2$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{\boldsymbol{J}_2(1), \boldsymbol{J}_2(1)\}$. $\square$

> [!example] **例 7.50**
>
> 设 $\boldsymbol{J}=\boldsymbol{J}_n(0)$ 是特征值为零的 $n\, (n \geq 2)$ 阶 Jordan 块, 求 $\boldsymbol{J}^2$ 的 Jordan 标准型.

> [!proof]-
> 显然 $\boldsymbol{J}^2$ 的特征值全为 0 且 $\mathrm{r}(\boldsymbol{J}^2)=n-2$, 于是特征值 0 的几何重数等于 2, 从而有两个 Jordan 块. 接下去计算 $\boldsymbol{J}^2$ 的极小多项式, 注意到 $\boldsymbol{J}^n=\boldsymbol{O}$, $\boldsymbol{J}^{n-1} \neq \boldsymbol{O}$.
>
> (1) 当 $n=2m$ 时, $\lambda^m$ 是 $\boldsymbol{J}^2$ 的极小多项式, 于是 $\boldsymbol{J}^2$ 的不变因子组为 $1, \cdots, 1$, $\lambda^m$, $\lambda^m$, 因此 $\boldsymbol{J}^2$ 的 Jordan 标准型为 $\operatorname{diag}\{\boldsymbol{J}_m(0), \boldsymbol{J}_m(0)\}$.
>
> (2) 当 $n=2m+1$ 时, $\lambda^{m+1}$ 是 $\boldsymbol{J}^2$ 的极小多项式, 于是 $\boldsymbol{J}^2$ 的不变因子组为 $1, \cdots, 1$, $\lambda^m$, $\lambda^{m+1}$, 因此 $\boldsymbol{J}^2$ 的 Jordan 标准型为 $\operatorname{diag}\{\boldsymbol{J}_m(0), \boldsymbol{J}_{m+1}(0)\}$.
>
> 另外, 也可以用行列式因子的讨论来替代几何重数的讨论. 注意到 $\lambda\boldsymbol{I}_n-\boldsymbol{J}^2$ 的右上角有一个 $n-2$ 阶子式等于 $(-1)^{n-2}$, 故 $\boldsymbol{J}^2$ 的 $n-2$ 阶行列式因子为 1, 从而前 $n-2$ 个不变因子都是 1, 后面再用极小多项式的讨论即可得到结论. $\square$


> [!example] **例 7.51**
>
> 求下列 $n\, (n \geq 2)$ 阶矩阵的 Jordan 标准型:
> $$\boldsymbol{A} = \begin{pmatrix} c & 0 & 1 & 0 & \cdots & 0 \\ & c & 0 & 1 & \cdots & 0 \\ & & c & 0 & \ddots & \vdots \\ & & & \ddots & \ddots & 1 \\ & & & & \ddots & 0 \\ & & & & & c \end{pmatrix}.$$

> [!proof]-
> 利用例 7.50 的记号和结论, 显然 $\boldsymbol{A}=c\boldsymbol{I}_n+\boldsymbol{J}^2$. 设 $\boldsymbol{P}$ 是可逆矩阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{J}^2\boldsymbol{P}$ 是 $\boldsymbol{J}^2$ 的 Jordan 标准型, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=c\boldsymbol{I}_n+\boldsymbol{P}^{-1}\boldsymbol{J}^2\boldsymbol{P}$ 就是 $\boldsymbol{A}$ 的 Jordan 标准型. 具体地, 当 $n=2m$ 时, $\boldsymbol{A}$ 的 Jordan 标准型是 $\operatorname{diag}\{\boldsymbol{J}_m(c), \boldsymbol{J}_m(c)\}$; 当 $n=2m+1$ 时, $\boldsymbol{A}$ 的 Jordan 标准型是 $\operatorname{diag}\{\boldsymbol{J}_m(c), \boldsymbol{J}_{m+1}(c)\}$. $\square$

我们可以自然地考虑如下问题: 如果已知 $n$ 阶矩阵 $\boldsymbol{A}$ 的 Jordan 标准型, 那么对任意的正整数 $m$, $\boldsymbol{A}^m$ 的 Jordan 标准型应该有怎样的形状呢？首先, 我们可以把这个问题化约到 Jordan 块的情形. 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \boldsymbol{J}_{r_2}(\lambda_2), \cdots, \boldsymbol{J}_{r_s}(\lambda_s)\}$, 则 $\boldsymbol{A}^m$ 相似于 $\boldsymbol{J}^m=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1)^m, \boldsymbol{J}_{r_2}(\lambda_2)^m, \cdots, \boldsymbol{J}_{r_s}(\lambda_s)^m\}$, 因此要求 $\boldsymbol{A}^m$ 的 Jordan 标准型, 只要求每一个 $\boldsymbol{J}_{r_i}(\lambda_i)^m$ 的 Jordan 标准型即可. 若 $\lambda_i \neq 0$, 则由例 7.46 类似的讨论可知, $\boldsymbol{J}_{r_i}(\lambda_i)^m$ 的 Jordan 标准型为 $\boldsymbol{J}_{r_i}(\lambda_i^m)$. 若 $\lambda_i=0$, 则例 7.50 处理了 $m=2$ 的情形, 不过类似的讨论很难推广到 $m \geq 3$ 的情形, 换言之, 只依靠几何重数和极小多项式还不能完全确定 $\boldsymbol{J}_{r_i}(0)^m$ 的 Jordan 标准型. 解决这个问题可以有代数和几何两种方法, 几何方法 (利用 Jordan 标准型的几何意义) 将在 §7.10 中阐述, 而代数方法 (利用矩阵的秩) 则需要下面的命题.

> [!example] **例 7.52**
>
> 设 $\lambda_0$ 是 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值, 证明: 对任意的正整数 $k$, 特征值为 $\lambda_0$ 的 $k$ 阶 Jordan 块 $\boldsymbol{J}_k(\lambda_0)$ 在 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}$ 中出现的个数为
> $$\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k-1}\big)+\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k+1}\big)-2\,\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k\big),$$
> 其中约定 $\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^0\big)=n$.

> [!proof]-
> 设 $\boldsymbol{P}$ 为非异阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \boldsymbol{J}_{r_2}(\lambda_2), \cdots, \boldsymbol{J}_{r_s}(\lambda_s)\}$ 为 $\boldsymbol{A}$ 的 Jordan 标准型. 注意到
> $$(\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k = \boldsymbol{P}\,\operatorname{diag}\{\boldsymbol{J}_{r_1}(\lambda_1-\lambda_0)^k, \boldsymbol{J}_{r_2}(\lambda_2-\lambda_0)^k, \cdots, \boldsymbol{J}_{r_s}(\lambda_s-\lambda_0)^k\}\,\boldsymbol{P}^{-1},$$
> 故 $\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k\big)=\sum\limits_{i=1}^{s} \mathrm{r}\big(\boldsymbol{J}_{r_i}(\lambda_i-\lambda_0)^k\big)$. 当 $\lambda_i \neq \lambda_0$ 时, $\mathrm{r}\big(\boldsymbol{J}_{r_i}(\lambda_i-\lambda_0)^k\big)=r_i$. 当 $\lambda_i=\lambda_0$ 时, 若 $r_i < k$, 则 $\mathrm{r}\big(\boldsymbol{J}_{r_i}(\lambda_i-\lambda_0)^k\big)=0$; 若 $r_i \geq k$, 则 $\mathrm{r}\big(\boldsymbol{J}_{r_i}(\lambda_i-\lambda_0)^k\big)=r_i-k$. 因此 $\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k-1}\big)-\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k\big)$ 等于特征值为 $\lambda_0$ 且阶数大于等于 $k$ 的 Jordan 块的个数. 同理, $\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k\big)-\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k+1}\big)$ 等于特征值为 $\lambda_0$ 且阶数大于等于 $k+1$ 的 Jordan 块的个数, 从而特征值为 $\lambda_0$ 的 $k$ 阶 Jordan 块 $\boldsymbol{J}_k(\lambda_0)$ 在 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}$ 中出现的个数为
> $$\begin{aligned} &\big(\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k-1})-\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k)\big) - \big(\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k)-\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k+1})\big) \\ &= \mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k-1})+\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{k+1})-2\,\mathrm{r}((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k). \end{aligned}$$
> $\square$


> [!note] 注
> 例 7.52 告诉我们, $n$ 阶矩阵 $\boldsymbol{A}$ 的 Jordan 标准型被若干个非负整数, 即 $\big\{\mathrm{r}((\boldsymbol{A}-\lambda_i\boldsymbol{I}_n)^j) \mid \lambda_i\text{ 为 }\boldsymbol{A}\text{ 的特征值},\, 1 \leq j \leq n\big\}$ 完全决定. 因此从理论上说, 我们可以不计算矩阵 $\boldsymbol{A}$ 的不变因子或初等因子, 改为计算上述若干个矩阵的秩, 也可以求出 $\boldsymbol{A}$ 的 Jordan 标准型. 进一步, 我们还可以得到如下矩阵相似的判定准则.

> [!example] **例 7.53**
>
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶矩阵, 证明: 它们相似的充要条件是对 $\boldsymbol{A}$ 或 $\boldsymbol{B}$ 的任一特征值 $\lambda_0$ 以及任意的 $1 \leq k \leq n$, 有 $\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^k\big)=\mathrm{r}\big((\boldsymbol{B}-\lambda_0\boldsymbol{I}_n)^k\big)$.

> [!proof]-
> 必要性显然, 现证充分性. 由已知条件及例 4.34 可知,
> $$\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^{n+1}\big)=\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^n\big)=\mathrm{r}\big((\boldsymbol{B}-\lambda_0\boldsymbol{I}_n)^n\big)=\mathrm{r}\big((\boldsymbol{B}-\lambda_0\boldsymbol{I}_n)^{n+1}\big).$$
> 因此由例 7.52 可知, 特征值为 $\lambda_0$ 的 $k$ 阶 Jordan 块 $\boldsymbol{J}_k(\lambda_0)$ 在 $\boldsymbol{A}, \boldsymbol{B}$ 的 Jordan 标准型中出现的个数相同, 从而 $\boldsymbol{A}, \boldsymbol{B}$ 有相同的 Jordan 标准型, 于是它们相似. $\square$

我们可以用上述判定准则来重新证明例 7.7 和例 7.8.

> [!example] **例 7.7**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值全为 1, 求证: 对任意的正整数 $k$, $\boldsymbol{A}^k$ 与 $\boldsymbol{A}$ 相似.

> [!proof]- **证法 2**
> 显然 $\boldsymbol{A}^k$ 的特征值也全为 1. 注意到
> $$(\boldsymbol{A}^k-\boldsymbol{I}_n)^l=(\boldsymbol{A}-\boldsymbol{I}_n)^l(\boldsymbol{A}^{k-1}+\boldsymbol{A}^{k-2}+\cdots+\boldsymbol{I}_n)^l,\; l \geq 1.$$
> 由于 $\boldsymbol{A}^{k-1}+\boldsymbol{A}^{k-2}+\cdots+\boldsymbol{I}_n$ 的特征值全为 $k$, 故为可逆矩阵, 从而 $\mathrm{r}\big((\boldsymbol{A}^k-\boldsymbol{I}_n)^l\big)=\mathrm{r}\big((\boldsymbol{A}-\boldsymbol{I}_n)^l\big)$ 对任意的正整数 $l$ 都成立. 由例 7.53 可知, $\boldsymbol{A}^k$ 与 $\boldsymbol{A}$ 相似. $\square$

> [!example] **例 7.8**
>
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值全为 1 或 $-1$, 求证: $\boldsymbol{A}^{-1}$ 与 $\boldsymbol{A}$ 相似.

> [!proof]- **证法 2**
> 显然 $\boldsymbol{A}^{-1}$ 的特征值也全为 1 或 $-1$. 设 $\lambda_0=\pm 1$, 则由 $\boldsymbol{A}$ 可逆以及 $(\boldsymbol{A}^{-1}-\lambda_0\boldsymbol{I}_n)^l=(-\lambda_0)^l\boldsymbol{A}^{-l}(\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^l$ 可得 $\mathrm{r}\big((\boldsymbol{A}^{-1}-\lambda_0\boldsymbol{I}_n)^l\big)=\mathrm{r}\big((\boldsymbol{A}-\lambda_0\boldsymbol{I}_n)^l\big)$ 对任意的正整数 $l$ 都成立. 由例 7.53 可知, $\boldsymbol{A}^{-1}$ 与 $\boldsymbol{A}$ 相似. $\square$


> [!example] **例 7.54**
>
> 设 $\boldsymbol{J}=\boldsymbol{J}_n(a)$ 是特征值为 $a \neq 0$ 的 $n$ 阶 Jordan 块, 求 $\boldsymbol{J}^m$ 的 Jordan 标准型, 其中 $m$ 为非零整数.

> [!proof]-
> 先处理 $m \geq 1$ 的情形, 采用几何重数的方法来做, 行列式因子和极小多项式的方法也可以做, 请读者自行补充完成. 显然 $\boldsymbol{J}^m$ 的所有特征值都为 $a^m$. 作分解 $\boldsymbol{J}=a\boldsymbol{I}_n+\boldsymbol{N}$, 其中 $\boldsymbol{N}=\boldsymbol{J}_n(0)$, 则有
> $$\boldsymbol{J}^m=(a\boldsymbol{I}_n+\boldsymbol{N})^m=a^m\boldsymbol{I}_n+\mathrm{C}_m^1a^{m-1}\boldsymbol{N}+\cdots+\boldsymbol{N}^m,$$
> 于是 $\mathrm{r}(\boldsymbol{J}^m-a^m\boldsymbol{I}_n)=\mathrm{r}(\mathrm{C}_m^1a^{m-1}\boldsymbol{N}+\cdots+\boldsymbol{N}^m)=n-1$, 从而特征值 $a^m$ 的几何重数等于 1, 因此 $\boldsymbol{J}^m$ 的 Jordan 标准型中只有一个 Jordan 块, 即 $\boldsymbol{J}^m$ 的 Jordan 标准型为 $\boldsymbol{J}_n(a^m)$. $\square$


再处理 $m=-1$ 的情形. 显然 $oldsymbol{J}^{-1}$ 的所有特征值都为 $a^{-1}$. 注意到

$$\boldsymbol{J}^{-1}=(a\boldsymbol{I}_n+\boldsymbol{N})^{-1}=a^{-1}\boldsymbol{I}_n-a^{-2}\boldsymbol{N}+\cdots+(-1)^{n-1}a^{-n}\boldsymbol{N}^{n-1},$$

故 $\mathrm{r}(\boldsymbol{J}^{-1}-a^{-1}\boldsymbol{I}_n)=\mathrm{r}(-a^{-2}\boldsymbol{N}+\cdots+(-1)^{n-1}a^{-n}\boldsymbol{N}^{n-1})=n-1$, 从而特征值 $a^{-1}$ 的几何重数等于 $1$, 因此 $\boldsymbol{J}^{-1}$ 的 Jordan 标准型中只有一个 Jordan 块, 即 $\boldsymbol{J}^{-1}$ 的 Jordan 标准型为 $\boldsymbol{J}_n(a^{-1})$.

最后处理 $m\leq -1$ 的情形. 注意到 $\boldsymbol{J}^m=(\boldsymbol{J}^{-1})^{-m}$, 故由前面两个结论即得 $\boldsymbol{J}^m$ 的 Jordan 标准型为 $\boldsymbol{J}_n((a^{-1})^{-m})=\boldsymbol{J}_n(a^m)$. $\square$

> [!note]
> 例 7.7 和例 7.8 最初是用“三段论法”和极小多项式来证明的 (当然用行列式因子和几何重数替代也可以); 后面利用例 7.53 给出了第二种证法; 本题 (当 $a=\pm 1$ 时) 给出了第三种证法.

> [!example] 例 7.55
> 设 $\boldsymbol{J}=\boldsymbol{J}_n(0)$ 是特征值为零的 $n$ 阶 Jordan 块, 求 $\boldsymbol{J}^m\,(m\geq 1)$ 的 Jordan 标准型.

**解** 若 $m\geq n$, 则 $\boldsymbol{J}^m=\boldsymbol{O}$, 这就是它的 Jordan 标准型. 下设 $m<n$, 并作带余除法: $n=mq+r$, 其中 $0\leq r<m$. 我们先来计算 $\boldsymbol{J}^m$ 的幂的秩, 再利用例 7.52 来计算 Jordan 块的个数. 注意到

$$\mathrm{r}((\boldsymbol{J}^m)^k)=n-mk,\;0\leq k\leq q;\quad \mathrm{r}((\boldsymbol{J}^m)^k)=0,\;k\geq q+1.$$

(1) 当 $1\leq k<q$ 时, $\boldsymbol{J}_k(0)$ 的个数为 $\mathrm{r}((\boldsymbol{J}^m)^{k-1})+\mathrm{r}((\boldsymbol{J}^m)^{k+1})-2\,\mathrm{r}((\boldsymbol{J}^m)^k)=(n-m(k-1))+(n-m(k+1))-2(n-mk)=0$;

(2) $\boldsymbol{J}_q(0)$ 的个数为 $\mathrm{r}((\boldsymbol{J}^m)^{q-1})+\mathrm{r}((\boldsymbol{J}^m)^{q+1})-2\,\mathrm{r}((\boldsymbol{J}^m)^q)=(n-m(q-1))+0-2(n-mq)=m-r$;

(3) $\boldsymbol{J}_{q+1}(0)$ 的个数为 $\mathrm{r}((\boldsymbol{J}^m)^q)+\mathrm{r}((\boldsymbol{J}^m)^{q+2})-2\,\mathrm{r}((\boldsymbol{J}^m)^{q+1})=(n-mq)+0-0=r$;

(4) 当 $k>q+1$ 时, $\boldsymbol{J}_k(0)$ 的个数为 $0$.

因此 $\boldsymbol{J}^m$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_q(0),\cdots,\boldsymbol{J}_q(0),\boldsymbol{J}_{q+1}(0),\cdots,\boldsymbol{J}_{q+1}(0)\}$, 其中有 $m-r$ 个 $\boldsymbol{J}_q(0)$, $r$ 个 $\boldsymbol{J}_{q+1}(0)$. $\square$

例 7.55 是例 7.50 的推广, 它与例 7.54 一起完满地回答了之前提出的那个问题. 下面的例题是例 6.70 的推广.

> [!example] 例 7.56
> 设 $m$ 阶矩阵 $\boldsymbol{A}$ 与 $n$ 阶矩阵 $\boldsymbol{B}$ 没有公共的特征值, 且 $\boldsymbol{A},\boldsymbol{B}$ 的 Jordan 标准型分别为 $\boldsymbol{J}_1,\boldsymbol{J}_2$, 又 $\boldsymbol{C}$ 为 $m\times n$ 矩阵, 求证: $\boldsymbol{M}=\begin{pmatrix}\boldsymbol{A}&\boldsymbol{C}\\\boldsymbol{O}&\boldsymbol{B}\end{pmatrix}$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_1,\boldsymbol{J}_2\}$.


**证法 1** 设 $\boldsymbol{P}_1(\lambda),\boldsymbol{P}_2(\lambda),\boldsymbol{Q}_1(\lambda),\boldsymbol{Q}_2(\lambda)$ 是可逆 $\lambda$–矩阵, 使得

$$\begin{aligned}\boldsymbol{P}_1(\lambda)(\lambda\boldsymbol{I}_m-\boldsymbol{A})\boldsymbol{Q}_1(\lambda)&=\boldsymbol{\Lambda}_1=\mathrm{diag}\{f_1(\lambda),f_2(\lambda),\cdots,f_m(\lambda)\},\\\boldsymbol{P}_2(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{B})\boldsymbol{Q}_2(\lambda)&=\boldsymbol{\Lambda}_2=\mathrm{diag}\{g_1(\lambda),g_2(\lambda),\cdots,g_n(\lambda)\}\end{aligned}$$

分别是 $\boldsymbol{A},\boldsymbol{B}$ 的法式. 考虑如下 $\lambda$–矩阵的初等变换:

$$\begin{pmatrix}\boldsymbol{P}_1&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{P}_2\end{pmatrix}\begin{pmatrix}\lambda\boldsymbol{I}_m-\boldsymbol{A}&-\boldsymbol{C}\\\boldsymbol{O}&\lambda\boldsymbol{I}_n-\boldsymbol{B}\end{pmatrix}\begin{pmatrix}\boldsymbol{Q}_1&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{Q}_2\end{pmatrix}=\begin{pmatrix}\boldsymbol{\Lambda}_1&\boldsymbol{D}\\\boldsymbol{O}&\boldsymbol{\Lambda}_2\end{pmatrix},$$

其中 $\boldsymbol{D}=-\boldsymbol{P}_1\boldsymbol{C}\boldsymbol{Q}_2=(d_{ij}(\lambda))$ 是 $m\times n$ $\lambda$–矩阵. 由于 $\boldsymbol{A},\boldsymbol{B}$ 没有公共的特征值, 故对任意的 $1\leq i\leq m$, $1\leq j\leq n$, $(f_i(\lambda),g_j(\lambda))=1$, 从而存在 $u_{ij}(\lambda),v_{ij}(\lambda)$, 使得 $f_i(\lambda)u_{ij}(\lambda)+g_j(\lambda)v_{ij}(\lambda)=1$. 将 $\lambda$–矩阵 $\begin{pmatrix}\boldsymbol{\Lambda}_1&\boldsymbol{D}\\\boldsymbol{O}&\boldsymbol{\Lambda}_2\end{pmatrix}$ 的第 $i$ 列乘以 $-u_{ij}(\lambda)d_{ij}(\lambda)$ 加到第 $m+j$ 列上, 再将第 $m+j$ 行乘以 $-v_{ij}(\lambda)d_{ij}(\lambda)$ 加到第 $i$ 行上, 则可以消去 $\boldsymbol{D}$ 的第 $(i,j)$ 元素, 因此 $\boldsymbol{M}$ 的特征矩阵相抵于对角矩阵 $\mathrm{diag}\{\boldsymbol{\Lambda}_1,\boldsymbol{\Lambda}_2\}$. 再由例 7.10 可知, $\boldsymbol{M}$ 的初等因子组是 $f_1(\lambda),\cdots,f_m(\lambda),g_1(\lambda),\cdots,g_n(\lambda)$ 的准素因子组, 而 $f_1(\lambda),\cdots,f_m(\lambda)$ 的准素因子组是 $\boldsymbol{A}$ 的初等因子组, $g_1(\lambda),\cdots,g_n(\lambda)$ 的准素因子组是 $\boldsymbol{B}$ 的初等因子组, 因此 $\boldsymbol{M}$ 的初等因子组是 $\boldsymbol{A},\boldsymbol{B}$ 的初等因子组的无交并集, 于是 $\boldsymbol{M}$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_1,\boldsymbol{J}_2\}$.

**证法 2** 由例 6.91 可知, 矩阵方程 $\boldsymbol{A}\boldsymbol{X}-\boldsymbol{X}\boldsymbol{B}=\boldsymbol{C}$ 存在唯一解 $\boldsymbol{X}=\boldsymbol{X}_0$. 考虑如下相似变换:

$$\begin{pmatrix}\boldsymbol{I}_m&\boldsymbol{X}_0\\\boldsymbol{O}&\boldsymbol{I}_n\end{pmatrix}\begin{pmatrix}\boldsymbol{A}&\boldsymbol{C}\\\boldsymbol{O}&\boldsymbol{B}\end{pmatrix}\begin{pmatrix}\boldsymbol{I}_m&-\boldsymbol{X}_0\\\boldsymbol{O}&\boldsymbol{I}_n\end{pmatrix}=\begin{pmatrix}\boldsymbol{A}&-\boldsymbol{A}\boldsymbol{X}_0+\boldsymbol{X}_0\boldsymbol{B}+\boldsymbol{C}\\\boldsymbol{O}&\boldsymbol{B}\end{pmatrix}=\begin{pmatrix}\boldsymbol{A}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{B}\end{pmatrix},$$

因此 $\boldsymbol{M}$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_1,\boldsymbol{J}_2\}$. $\square$

例 7.56 可用来化简矩阵, 消去其非主对角块, 使其剩下低阶的主对角块. 我们来看一个典型的例子.

> [!example] 例 7.57
> 设 $\boldsymbol{A}=\begin{pmatrix}1&0&0&0\\b&a+1&0&0\\3&b&2&0\\5&4&a&2\end{pmatrix}$, 求 $\boldsymbol{A}$ 的 Jordan 标准型.

**解** 显然, $\boldsymbol{A}$ 的特征值为 $1,a+1,2,2$. 对 $\boldsymbol{A}$ 进行分块 $\boldsymbol{A}=\begin{pmatrix}\boldsymbol{A}_{11}&\boldsymbol{O}\\\boldsymbol{A}_{21}&\boldsymbol{A}_{22}\end{pmatrix}$, 其中所有的分块都是二阶方阵. 下面按 $a+1$ 是否等于 $1,2$ 进行分类讨论.


(1) 若 $a\neq 0$ 及 $a\neq 1$, 则可有两种方法来处理. 方法 1 (几何重数): 经计算可知特征值 $2$ 的几何重数等于 $1$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{1,a+1,\boldsymbol{J}_2(2)\}$. 方法 2 (例 7.56): 显然 $\boldsymbol{A}_{11}$ 可对角化, $\boldsymbol{A}_{22}$ 不可对角化, 且 $\boldsymbol{A}_{11},\boldsymbol{A}_{22}$ 无公共特征值, 故可消去 $\boldsymbol{A}_{21}$, 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{1,a+1,\boldsymbol{J}_2(2)\}$.

(2) 若 $a=0$ 及 $b\neq 0$, 则利用方法 2 (例 7.56) 可得, $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_2(1),2,2\}$.

(3) 若 $a=0$ 及 $b=0$, 则利用方法 2 (例 7.56) 可得, $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{1,1,2,2\}$.

(4) 若 $a=1$ 及 $b\neq 0$, 则利用方法 1 (几何重数) 可得, $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{1,\boldsymbol{J}_3(2)\}$.

(5) 若 $a=1$ 及 $b=0$, 则利用方法 1 (几何重数) 可得, $\boldsymbol{A}$ 的 Jordan 标准型为 $\mathrm{diag}\{1,2,\boldsymbol{J}_2(2)\}$. $\square$

---

#### § 7.7 过渡矩阵的求法

在 § 6.4 中, 我们介绍了对可对角化矩阵 $\boldsymbol{A}$, 如何求过渡矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 是对角矩阵. 现在我们要介绍对一般的矩阵 $\boldsymbol{A}$ (未必可对角化), 如何求过渡矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型. 下面将介绍 3 种方法: 第一种方法是利用 $\lambda$–矩阵的初等变换, 通过计算特征矩阵之间的相抵变换来得到 $\boldsymbol{P}$; 第二种方法是求解线性方程组, 通过计算特征向量和广义特征向量来得到 $\boldsymbol{P}$; 第三种方法是利用 Jordan 标准型的几何意义, 通过计算循环子空间的循环向量来得到 $\boldsymbol{P}$. 当矩阵的阶数很大时, 这些方法都要涉及复杂的计算. 对于一般的阶数较低的数字矩阵, 我们通常使用第二种方法.

##### 方法 1: 计算特征矩阵之间的相抵变换

> [!example] 例 7.58
> 设 $\boldsymbol{A}$ 是 $n$ 阶数字矩阵, $\boldsymbol{P}(\lambda)$ 及 $\boldsymbol{Q}(\lambda)$ 是同阶可逆 $\lambda$–矩阵, 且
> $$\boldsymbol{Q}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{P}(\lambda)=\lambda\boldsymbol{I}_n-\boldsymbol{J},$$
> 其中 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型. 又
> $$\boldsymbol{P}(\lambda)=\boldsymbol{T}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{J})+\boldsymbol{P},$$
> 其中 $\boldsymbol{P}$ 是数字矩阵, 求证: $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$.

**证明** 由已知可得 $(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{P}(\lambda)=\boldsymbol{Q}(\lambda)^{-1}(\lambda\boldsymbol{I}_n-\boldsymbol{J})$. 代入 $\boldsymbol{P}(\lambda)$, 可得

$$(\lambda\boldsymbol{I}_n-\boldsymbol{A})\big(\boldsymbol{T}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{J})+\boldsymbol{P}\big)=\boldsymbol{Q}(\lambda)^{-1}(\lambda\boldsymbol{I}_n-\boldsymbol{J}).$$


整理可得

$$(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{P}=\big(\boldsymbol{Q}(\lambda)^{-1}-(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{T}(\lambda)\big)(\lambda\boldsymbol{I}_n-\boldsymbol{J}).$$

比较 $\lambda$ 的次数可知, $\boldsymbol{Q}(\lambda)^{-1}-(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{T}(\lambda)$ 必须是数字矩阵, 记之为 $\boldsymbol{R}$, 于是

$$(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{P}=\boldsymbol{R}(\lambda\boldsymbol{I}_n-\boldsymbol{J}).$$

去括号再次比较次数可得 $\boldsymbol{P}=\boldsymbol{R}$, $\boldsymbol{A}\boldsymbol{P}=\boldsymbol{R}\boldsymbol{J}$. 若可证明 $\boldsymbol{P}$ 是可逆矩阵, 即有 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. 由 $\boldsymbol{Q}(\lambda)^{-1}-(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{T}(\lambda)=\boldsymbol{R}$ 可得

$$\boldsymbol{I}_n=\boldsymbol{Q}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{A})\boldsymbol{T}(\lambda)+\boldsymbol{Q}(\lambda)\boldsymbol{R}.$$

注意到 $\boldsymbol{Q}(\lambda)(\lambda\boldsymbol{I}_n-\boldsymbol{A})=(\lambda\boldsymbol{I}_n-\boldsymbol{J})\boldsymbol{P}(\lambda)^{-1}$, 故

$$\boldsymbol{I}_n=(\lambda\boldsymbol{I}_n-\boldsymbol{J})\boldsymbol{P}(\lambda)^{-1}\boldsymbol{T}(\lambda)+\boldsymbol{Q}(\lambda)\boldsymbol{R}.$$

设 $\boldsymbol{Q}(\lambda)=(\lambda\boldsymbol{I}_n-\boldsymbol{J})\boldsymbol{M}(\lambda)+\boldsymbol{N}$, 其中 $\boldsymbol{N}$ 是数字矩阵, 于是

$$\boldsymbol{I}_n=(\lambda\boldsymbol{I}_n-\boldsymbol{J})\big(\boldsymbol{P}(\lambda)^{-1}\boldsymbol{T}(\lambda)+\boldsymbol{M}(\lambda)\boldsymbol{R}\big)+\boldsymbol{N}\boldsymbol{R}.$$

比较次数可得 $\boldsymbol{N}\boldsymbol{R}=\boldsymbol{I}_n$, 即 $\boldsymbol{R}$ 可逆, 也即 $\boldsymbol{P}$ 可逆. $\square$

由例 7.58 可知, 两个数字矩阵相似当且仅当它们的特征矩阵作为 $\lambda$–矩阵相抵.

##### 方法 2: 计算特征向量和广义特征向量

> [!example] 例 7.59
> 设复四维空间上的线性变换 $\varphi$ 在基 $\{e_1,e_2,e_3,e_4\}$ 下的表示矩阵为
> $$\boldsymbol{A}=\begin{pmatrix}4&-1&1&-7\\9&-2&-7&-1\\0&0&5&-8\\0&0&2&-3\end{pmatrix},$$
> 求一组新基, 使 $\varphi$ 在这组新基下的表示矩阵是 $\boldsymbol{A}$ 的 Jordan 标准型, 并求过渡矩阵.

**解** 通过计算可知 $\lambda\boldsymbol{I}_4-\boldsymbol{A}$ 的法式为 $\mathrm{diag}\{1,1,(\lambda-1)^2,(\lambda-1)^2\}$, 故 $\boldsymbol{A}$ 的初等因子组为 $(\lambda-1)^2,(\lambda-1)^2$, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为

$$\boldsymbol{J}=\begin{pmatrix}1&1&0&0\\0&1&0&0\\0&0&1&1\\0&0&0&1\end{pmatrix}.$$


设过渡矩阵为 $\boldsymbol{P}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)$, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 即

$$\boldsymbol{A}\boldsymbol{P}=(\boldsymbol{A}\boldsymbol{\alpha}_1,\boldsymbol{A}\boldsymbol{\alpha}_2,\boldsymbol{A}\boldsymbol{\alpha}_3,\boldsymbol{A}\boldsymbol{\alpha}_4)=\boldsymbol{P}\boldsymbol{J}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)\boldsymbol{J},$$

从而得到线性方程组:

$$(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{\alpha}_1=\boldsymbol{0},\quad (\boldsymbol{A}-\boldsymbol{I})\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_1,\quad (\boldsymbol{A}-\boldsymbol{I})\boldsymbol{\alpha}_3=\boldsymbol{0},\quad (\boldsymbol{A}-\boldsymbol{I})\boldsymbol{\alpha}_4=\boldsymbol{\alpha}_3.$$

求解 $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{0}$ 得到两个线性无关的解, 将它们分别作为 $\boldsymbol{\alpha}_1$ 和 $\boldsymbol{\alpha}_3$:

$$\boldsymbol{\alpha}_1=(1,3,0,0)',\quad \boldsymbol{\alpha}_3=(5,0,6,3)'.$$

再求解方程组 $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{\alpha}_1$, $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{\alpha}_3$, 得到

$$\boldsymbol{\alpha}_2=(\frac{1}{3},0,0,0)',\quad \boldsymbol{\alpha}_4=(\frac{7}{6},0,\frac{3}{2},0)'.$$

因此过渡矩阵

$$\boldsymbol{P}=\begin{pmatrix}1&\dfrac{1}{3}&5&\dfrac{7}{6}\\3&0&0&0\\0&0&6&\dfrac{3}{2}\\0&0&3&0\end{pmatrix},$$

新基为 $(f_1,f_2,f_3,f_4)=(e_1,e_2,e_3,e_4)\boldsymbol{P}$, 即

$$f_1=e_1+3e_2,\quad f_2=\frac{1}{3}e_1,\quad f_3=5e_1+6e_3+3e_4,\quad f_4=\frac{7}{6}e_1+\frac{3}{2}e_3.\;\square$$

> [!note]
> 在例 7.59 中, 任取 $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{0}$ 的两个线性无关的解作为特征向量 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_3$, 都可以解出对应的广义特征向量 $\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4$, 即线性方程组 $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{\alpha}_1$ 和 $(\boldsymbol{A}-\boldsymbol{I})\boldsymbol{x}=\boldsymbol{\alpha}_3$ 的可解性不依赖于 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_3$ 的选取 (请读者自行思考其中的原因), 但这并非是普遍的情形. 一般来说, 我们总可以取到 $(\boldsymbol{A}-\lambda_0\boldsymbol{I})\boldsymbol{x}=\boldsymbol{0}$ 的一个非零解 $\boldsymbol{\alpha}_1$ (即特征值 $\lambda_0$ 的特征向量), 但若 $\boldsymbol{\alpha}_1$ 选取不当, 线性方程组 $(\boldsymbol{A}-\lambda_0\boldsymbol{I})\boldsymbol{x}=\boldsymbol{\alpha}_1$ 有可能是无解的 (即求不出对应的广义特征向量). 因此在选取特征向量时, 需要我们仔细观察或设立参数, 这样才能保证最终得到正确的结果. 让我们来看下面两个例题中的具体分析.

> [!example] 例 7.60
> 设 $\boldsymbol{A}=\begin{pmatrix}2&6&-15\\1&1&-5\\1&2&-6\end{pmatrix}$, 求非异阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型.


**解** 通过计算可知 $\lambda\boldsymbol{I}_3-\boldsymbol{A}$ 的法式为 $\mathrm{diag}\{1,\lambda+1,(\lambda+1)^2\}$, 故 $\boldsymbol{A}$ 的初等因子组为 $\lambda+1,(\lambda+1)^2$, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为

$$\boldsymbol{J}=\begin{pmatrix}-1&0&0\\0&-1&1\\0&0&-1\end{pmatrix}.$$

设非异阵 $\boldsymbol{P}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 则 $\boldsymbol{A}\boldsymbol{P}=(\boldsymbol{A}\boldsymbol{\alpha}_1,\boldsymbol{A}\boldsymbol{\alpha}_2,\boldsymbol{A}\boldsymbol{\alpha}_3)=\boldsymbol{P}\boldsymbol{J}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)\boldsymbol{J}$, 从而得到线性方程组:

$$(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_1=\boldsymbol{0},\quad (\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_2=\boldsymbol{0},\quad (\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_2.$$

求解 $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{x}=\boldsymbol{0}$ 得到两个线性无关的解 $\boldsymbol{\beta}_1=(-2,1,0)'$ 和 $\boldsymbol{\beta}_2=(5,0,1)'$. 注意到 $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{x}=\boldsymbol{\beta}_i\,(i=1,2)$ 都是无解的, 故不能将 $\boldsymbol{\beta}_1$ 或 $\boldsymbol{\beta}_2$ 直接作为 $\boldsymbol{\alpha}_2$ 来求广义特征向量 $\boldsymbol{\alpha}_3$. 一般地, 可设 $\boldsymbol{\alpha}_2=k_1\boldsymbol{\beta}_1+k_2\boldsymbol{\beta}_2=(-2k_1+5k_2,k_1,k_2)'$, 代入 $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{x}=\boldsymbol{\alpha}_2$ 中, 利用 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_3;\boldsymbol{\alpha}_2)=\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_3)$ 可得 $k_1=k_2$. 因此, 可取 $\boldsymbol{\alpha}_1=\boldsymbol{\beta}_1=(-2,1,0)'$, $\boldsymbol{\alpha}_2=\boldsymbol{\beta}_1+\boldsymbol{\beta}_2=(3,1,1)'$, 此时可解出 $\boldsymbol{\alpha}_3=(1,0,0)'$, 于是

$$\boldsymbol{P}=\begin{pmatrix}-2&3&1\\1&1&0\\0&1&0\end{pmatrix}.\;\square$$

> [!example] 例 7.61
> 设 $\boldsymbol{A}=\begin{pmatrix}1&-1&0&1\\1&1&1&0\\0&-1&1&1\\1&0&1&1\end{pmatrix}$, 求非异阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型.

**解** 通过计算可知 $\lambda\boldsymbol{I}_4-\boldsymbol{A}$ 的法式为 $\mathrm{diag}\{1,1,\lambda-1,(\lambda-1)^3\}$, 故 $\boldsymbol{A}$ 的初等因子组为 $\lambda-1,(\lambda-1)^3$, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{1,\boldsymbol{J}_3(1)\}$. 设非异阵 $\boldsymbol{P}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 则 $\boldsymbol{A}\boldsymbol{P}=(\boldsymbol{A}\boldsymbol{\alpha}_1,\boldsymbol{A}\boldsymbol{\alpha}_2,\boldsymbol{A}\boldsymbol{\alpha}_3,\boldsymbol{A}\boldsymbol{\alpha}_4)=\boldsymbol{P}\boldsymbol{J}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)\boldsymbol{J}$, 从而得到线性方程组:

$$(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\alpha}_1=\boldsymbol{0},\quad (\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\alpha}_2=\boldsymbol{0},\quad (\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_2,\quad (\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\alpha}_4=\boldsymbol{\alpha}_3.$$

求解 $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{x}=\boldsymbol{0}$ 得到两个线性无关的解 $\boldsymbol{\beta}_1=(-1,0,1,0)'$ 和 $\boldsymbol{\beta}_2=(0,1,0,1)'$. 设 $\boldsymbol{\alpha}_2=k_1\boldsymbol{\beta}_1+k_2\boldsymbol{\beta}_2$, 代入 $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{x}=\boldsymbol{\alpha}_2$ 中, 利用 $\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4;\boldsymbol{\alpha}_2)=\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4)$ 可得 $k_1=0$. 于是可取 $\boldsymbol{\alpha}_2=k_2\boldsymbol{\beta}_2$, 解出 $\boldsymbol{\alpha}_3=k_2\boldsymbol{e}_1+k_3\boldsymbol{\beta}_1+k_4\boldsymbol{\beta}_2$, 其中 $\boldsymbol{e}_1=(1,0,0,0)'$. 再代入 $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{x}=\boldsymbol{\alpha}_3$ 中, 利用 $\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4;\boldsymbol{\alpha}_3)=\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4)$ 可得 $k_2=2k_3$. 于是


可取 $k_2=2$, $k_3=1$, $k_4=0$, 最终得到特征向量 $\boldsymbol{\alpha}_1=\boldsymbol{\beta}_1=(-1,0,1,0)'$, $\boldsymbol{\alpha}_2=2\boldsymbol{\beta}_2=(0,2,0,2)'$, $1$ 级广义特征向量 $\boldsymbol{\alpha}_3=2\boldsymbol{e}_1+\boldsymbol{\beta}_1=(1,0,1,0)'$, $2$ 级广义特征向量 $\boldsymbol{\alpha}_4=(0,0,0,1)'$, 从而

$$\boldsymbol{P}=\begin{pmatrix}-1&0&1&0\\0&2&0&0\\1&0&1&0\\0&2&0&1\end{pmatrix}.\;\square$$

##### 方法 3: 计算循环子空间的循环向量

根据 § 7.10 中所述 Jordan 标准型的几何意义, 全空间可分解为不同特征值的根子空间的直和, 每个根子空间可分解为若干个循环子空间的直和, 每个循环子空间对应于一条循环轨道, 这条轨道由循环向量 (即最高级的广义特征向量) 生成. 下面以幂零根子空间为例, 说明如何确定所有的循环向量, 从而确定所有的基向量 (等价于求过渡矩阵 $\boldsymbol{P}$).

> [!example] 例 7.62
> 设 $9$ 阶幂零矩阵 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{0,\boldsymbol{J}_2(0),\boldsymbol{J}_3(0),\boldsymbol{J}_3(0)\}$, 求非异阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$.

**解** 由已知条件 $\boldsymbol{A}^3=\boldsymbol{O}$, $\mathrm{r}(\boldsymbol{A}^2)=2$ 且 $\mathrm{r}(\boldsymbol{A})=5$, 可设 $\boldsymbol{A}^2\boldsymbol{x}=\boldsymbol{0}$ 的基础解系为 $\{\boldsymbol{\eta}_i,\,1\leq i\leq 7\}$. 由于 $\boldsymbol{A}^2$ 的列秩为 $2$, 故不妨设 $\boldsymbol{A}^2$ 的第 $1$ 列和第 $2$ 列是 $\boldsymbol{A}^2$ 列向量的极大无关组, 即 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2$ 线性无关, 其中 $\boldsymbol{e}_1,\boldsymbol{e}_2$ 是 $9$ 维标准单位列向量的前两个. 考虑限制映射 $\boldsymbol{A}|_{\mathrm{Ker}\,\boldsymbol{A}^2}:\mathrm{Ker}\,\boldsymbol{A}^2\to\mathrm{Ker}\,\boldsymbol{A}$, 容易验证 $\mathrm{Ker}(\boldsymbol{A}|_{\mathrm{Ker}\,\boldsymbol{A}^2})=\mathrm{Ker}\,\boldsymbol{A}$, $\mathrm{Im}(\boldsymbol{A}|_{\mathrm{Ker}\,\boldsymbol{A}^2})=\mathrm{Ker}\,\boldsymbol{A}\cap\mathrm{Im}\,\boldsymbol{A}$. 由 $\dim\mathrm{Ker}\,\boldsymbol{A}^2=7$, $\dim\mathrm{Ker}\,\boldsymbol{A}=4$ 可知 $\dim(\mathrm{Ker}\,\boldsymbol{A}\cap\mathrm{Im}\,\boldsymbol{A})=3$, 且 $\mathrm{Ker}\,\boldsymbol{A}\cap\mathrm{Im}\,\boldsymbol{A}=L(\boldsymbol{A}\boldsymbol{\eta}_i,\,1\leq i\leq 7)$. 注意到 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2$ 是 $\mathrm{Ker}\,\boldsymbol{A}\cap\mathrm{Im}\,\boldsymbol{A}$ 中两个线性无关的向量, 故可从其生成元中取出一个向量, 不妨设为 $\boldsymbol{A}\boldsymbol{\eta}_1$, 使得 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{\eta}_1$ 线性无关. 再次注意到 $\dim\mathrm{Ker}\,\boldsymbol{A}=4$, 且 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{\eta}_1$ 是 $\mathrm{Ker}\,\boldsymbol{A}$ 中 $3$ 个线性无关的向量, 故可从其一组基 (即 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}$ 的基础解系) 中取出一个向量 $\boldsymbol{\xi}_1$, 使得 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{\eta}_1,\boldsymbol{\xi}_1$ 线性无关.

下面证明: $\{\boldsymbol{e}_1,\boldsymbol{A}\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{e}_2,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{\eta}_1,\boldsymbol{A}\boldsymbol{\eta}_1,\boldsymbol{\xi}_1\}$ 构成 $\mathbb{C}^9$ 的一组基. 只要证明它们线性无关即可. 设 $c_1,\cdots,c_9\in\mathbb{C}$, 使得

$$c_1\boldsymbol{e}_1+c_2\boldsymbol{A}\boldsymbol{e}_1+c_3\boldsymbol{A}^2\boldsymbol{e}_1+c_4\boldsymbol{e}_2+c_5\boldsymbol{A}\boldsymbol{e}_2+c_6\boldsymbol{A}^2\boldsymbol{e}_2+c_7\boldsymbol{\eta}_1+c_8\boldsymbol{A}\boldsymbol{\eta}_1+c_9\boldsymbol{\xi}_1=\boldsymbol{0}.\quad (7.10)$$

将 $(7.10)$ 式作用 $\boldsymbol{A}^2$ 可得

$$c_1\boldsymbol{A}^2\boldsymbol{e}_1+c_4\boldsymbol{A}^2\boldsymbol{e}_2=\boldsymbol{0},$$


由 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2$ 线性无关可知 $c_1=c_4=0$. 将 $(7.10)$ 式作用 $\boldsymbol{A}$ 可得

$$c_2\boldsymbol{A}^2\boldsymbol{e}_1+c_5\boldsymbol{A}^2\boldsymbol{e}_2+c_7\boldsymbol{A}\boldsymbol{\eta}_1=\boldsymbol{0},$$

由 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{\eta}_1$ 线性无关可知 $c_2=c_5=c_7=0$. $(7.10)$ 式最后变成

$$c_3\boldsymbol{A}^2\boldsymbol{e}_1+c_6\boldsymbol{A}^2\boldsymbol{e}_2+c_8\boldsymbol{A}\boldsymbol{\eta}_1+c_9\boldsymbol{\xi}_1=\boldsymbol{0},$$

由 $\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{\eta}_1,\boldsymbol{\xi}_1$ 线性无关可知 $c_3=c_6=c_8=c_9=0$. 有了上面这组基, 我们可以把 $4$ 个循环子空间的循环轨道全部确定如下:

| 轨道 1 | 轨道 2 | 轨道 3 | 轨道 4 |
|:---:|:---:|:---:|:---:|
| | | $\boldsymbol{e}_1$ ———— $\boldsymbol{e}_2$ ———— $2$ 级广义特征向量 |
| | $\boldsymbol{\eta}_1$ ———— $\boldsymbol{A}\boldsymbol{e}_1$ ———— $\boldsymbol{A}\boldsymbol{e}_2$ ———— $1$ 级广义特征向量 |
| $\boldsymbol{\xi}_1$ ———— $\boldsymbol{A}\boldsymbol{\eta}_1$ ———— $\boldsymbol{A}^2\boldsymbol{e}_1$ ———— $\boldsymbol{A}^2\boldsymbol{e}_2$ ———— $0$ 级广义特征向量 |
| $\downarrow$ | $\downarrow$ | $\downarrow$ | $\downarrow$ |
| $0$ | $0$ | $0$ | $0$ |

最后, 令 $\boldsymbol{P}=(\boldsymbol{\xi}_1,\boldsymbol{A}\boldsymbol{\eta}_1,\boldsymbol{\eta}_1,\boldsymbol{A}^2\boldsymbol{e}_1,\boldsymbol{A}\boldsymbol{e}_1,\boldsymbol{e}_1,\boldsymbol{A}^2\boldsymbol{e}_2,\boldsymbol{A}\boldsymbol{e}_2,\boldsymbol{e}_2)$ 即为所求. $\square$

> [!note]
> 例 7.62 采用的方法可以推广到一般的情形, 其原理是: 设 $n$ 阶幂零矩阵 $\boldsymbol{A}$ 的极小多项式为 $\lambda^k$, 则依次选取第 $i$ 级广义特征向量 $\boldsymbol{\xi}_i\,(i=k-1,\cdots,0)$, 使得所有的 $\boldsymbol{A}^i\boldsymbol{\xi}_i\,(i=k-1,\cdots,0)$ 在 $\mathrm{Ker}\,\boldsymbol{A}$ 中线性无关即可. 具体的证明请读者参考 [10].

**例 7.59 的解法 2** $\boldsymbol{A}$ 的初等因子组的计算同解法 1, 可得 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_2(1),\boldsymbol{J}_2(1)\}$. 注意到 $(\boldsymbol{A}-\boldsymbol{I}_4)^2=\boldsymbol{O}$ 且 $\mathrm{r}(\boldsymbol{A}-\boldsymbol{I}_4)=2$, 故可取 $\boldsymbol{A}-\boldsymbol{I}_4$ 的第 $1$ 列和第 $3$ 列作为其列向量的极大无关组. 因此 $\boldsymbol{e}_1=(1,0,0,0)'$, $\boldsymbol{e}_3=(0,0,1,0)'$ 为广义特征向量, 使得 $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_1=(3,9,0,0)'$, $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_3=(1,-7,4,2)'$ 为线性无关的特征向量, 则过渡矩阵 $\boldsymbol{P}=((\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_1,\boldsymbol{e}_1,(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_3,\boldsymbol{e}_3)$ 满足 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. $\square$

**例 7.60 的解法 2** $\boldsymbol{A}$ 的初等因子组的计算同解法 1, 可得 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{-1,\boldsymbol{J}_2(-1)\}$. 注意到 $(\boldsymbol{A}+\boldsymbol{I}_3)^2=\boldsymbol{O}$ 且 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_3)=1$, 故可取 $\boldsymbol{A}+\boldsymbol{I}_3$ 的第 $1$ 列作为其列向量的极大无关组. 因此 $\boldsymbol{e}_1=(1,0,0)'$ 为循环向量 (即广义特征向量), 使得 $\boldsymbol{e}_1$, $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{e}_1=(3,1,1)'$ 构成了 $\boldsymbol{J}_2(-1)$ 的循环轨道. 再取线性无关的特征向量 $\boldsymbol{\xi}_1=(-2,1,0)'$, 则过渡矩阵 $\boldsymbol{P}=(\boldsymbol{\xi}_1,(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{e}_1,\boldsymbol{e}_1)$ 满足 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. $\square$


**例 7.61 的解法 2** $\boldsymbol{A}$ 的初等因子组的计算同解法 1, 可得 $\boldsymbol{A}$ 的 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{1,\boldsymbol{J}_3(1)\}$. 注意到 $(\boldsymbol{A}-\boldsymbol{I}_4)^3=\boldsymbol{O}$ 且 $\mathrm{r}((\boldsymbol{A}-\boldsymbol{I}_4)^2)=1$, 故可取 $(\boldsymbol{A}-\boldsymbol{I}_4)^2$ 的第 $4$ 列作为其列向量的极大无关组. 因此 $\boldsymbol{e}_4=(0,0,0,1)'$ 为循环向量 (即 $2$ 级广义特征向量), 使得 $\boldsymbol{e}_4$, $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_4=(1,0,1,0)'$, $(\boldsymbol{A}-\boldsymbol{I}_4)^2\boldsymbol{e}_4=(0,2,0,2)'$ 构成了 $\boldsymbol{J}_3(1)$ 的循环轨道. 再取线性无关的特征向量 $\boldsymbol{\xi}_1=(-1,0,1,0)'$, 则过渡矩阵 $\boldsymbol{P}=(\boldsymbol{\xi}_1,(\boldsymbol{A}-\boldsymbol{I}_4)^2\boldsymbol{e}_4,(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{e}_4,\boldsymbol{e}_4)$ 满足 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. $\square$

下面的例题利用根子空间直和分解给出了当矩阵有两个不同特征值时过渡矩阵的求法. 一般情形的证明请读者参考 [10].

> [!example] 例 7.63
> 设 $\boldsymbol{A}=\begin{pmatrix}3&-4&0&2\\4&-5&-2&4\\0&0&3&-2\\0&0&2&-1\end{pmatrix}$, 求非异阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型.

**解** 经计算可知 $\boldsymbol{A}$ 的初等因子组为 $(\lambda+1)^2,(\lambda-1)^2$, 于是 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_2(-1),\boldsymbol{J}_2(1)\}$. 由例 6.94 可知, $\mathbb{C}^4=\mathrm{Ker}(\boldsymbol{A}+\boldsymbol{I}_4)^2\oplus\mathrm{Ker}(\boldsymbol{A}-\boldsymbol{I}_4)^2$, 且 $\mathrm{Ker}(\boldsymbol{A}+\boldsymbol{I}_4)^2=\mathrm{Im}(\boldsymbol{A}-\boldsymbol{I}_4)^2$, $\mathrm{Ker}(\boldsymbol{A}-\boldsymbol{I}_4)^2=\mathrm{Im}(\boldsymbol{A}+\boldsymbol{I}_4)^2$. 经计算可取 $(\boldsymbol{A}-\boldsymbol{I}_4)^2$ 的第二列 $\boldsymbol{\alpha}=(\boldsymbol{A}-\boldsymbol{I}_4)^2\boldsymbol{e}_2=(16,20,0,0)'$ 作为根子空间 $\mathrm{Ker}(\boldsymbol{A}+\boldsymbol{I}_4)^2$ 中的循环向量 (即广义特征向量), 于是 $\boldsymbol{\alpha}$, $(\boldsymbol{A}+\boldsymbol{I}_4)\boldsymbol{\alpha}=(-16,-16,0,0)'$ 构成根子空间 $\mathrm{Ker}(\boldsymbol{A}+\boldsymbol{I}_4)^2$ 中的循环轨道. 经计算可取 $(\boldsymbol{A}+\boldsymbol{I}_4)^2$ 的第三列 $\boldsymbol{\beta}=(\boldsymbol{A}+\boldsymbol{I}_4)^2\boldsymbol{e}_3=(12,8,12,8)'$ 作为根子空间 $\mathrm{Ker}(\boldsymbol{A}-\boldsymbol{I}_4)^2$ 中的循环向量 (即广义特征向量), 于是 $\boldsymbol{\beta}$, $(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\beta}=(8,8,8,8)'$ 构成根子空间 $\mathrm{Ker}(\boldsymbol{A}-\boldsymbol{I}_4)^2$ 中的循环轨道. 因此, 过渡矩阵 $\boldsymbol{P}=((\boldsymbol{A}+\boldsymbol{I}_4)\boldsymbol{\alpha},\boldsymbol{\alpha},(\boldsymbol{A}-\boldsymbol{I}_4)\boldsymbol{\beta},\boldsymbol{\beta})$ 满足 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. $\square$

下面的例题也与过渡矩阵有关, 它告诉我们: 满足基础矩阵乘法性质的矩阵类与基础矩阵类之间存在着一个相似变换. 利用这一结论可以证明: $n$ 阶矩阵环 $M_n(\mathbb{K})$ 的任一自同构都是内自同构.

> [!example] 例 7.64
> 设有 $n^2$ 个 $n$ 阶非零矩阵 $\boldsymbol{A}_{ij}\,(1\leq i,j\leq n)$, 适合
> $$\boldsymbol{A}_{ij}\boldsymbol{A}_{jk}=\boldsymbol{A}_{ik},\quad \boldsymbol{A}_{ij}\boldsymbol{A}_{lk}=\boldsymbol{O}\;(j\neq l).$$
> 求证: 存在可逆矩阵 $\boldsymbol{P}$, 使得对任意的 $i,j$, $\boldsymbol{P}^{-1}\boldsymbol{A}_{ij}\boldsymbol{P}=\boldsymbol{E}_{ij}$, 其中 $\boldsymbol{E}_{ij}$ 是基础矩阵.


**证明** 因为 $\boldsymbol{A}_{11}\neq\boldsymbol{O}$, 故存在 $\boldsymbol{\alpha}$, 使得 $\boldsymbol{A}_{11}\boldsymbol{\alpha}\neq\boldsymbol{0}$. 令 $\boldsymbol{\alpha}_1=\boldsymbol{A}_{11}\boldsymbol{\alpha}$, 由 $\boldsymbol{A}_{11}\boldsymbol{A}_{11}=\boldsymbol{A}_{11}$ 可得 $\boldsymbol{A}_{11}\boldsymbol{\alpha}_1=\boldsymbol{\alpha}_1$. 再令 $\boldsymbol{\alpha}_i=\boldsymbol{A}_{i1}\boldsymbol{\alpha}_1$, 由 $\boldsymbol{A}_{1i}\boldsymbol{A}_{i1}=\boldsymbol{A}_{11}$ 可知 $\boldsymbol{\alpha}_i\neq\boldsymbol{0}$. 我们得到了 $n$ 个非零向量 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n$, 由已知条件容易验证这 $n$ 个向量适合下列性质:

$$\boldsymbol{A}_{ij}\boldsymbol{\alpha}_j=\boldsymbol{\alpha}_i,\quad \boldsymbol{A}_{ij}\boldsymbol{\alpha}_k=\boldsymbol{0}\;(j\neq k),$$

由此不难证明这 $n$ 个向量线性无关. 令 $\boldsymbol{P}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)$, 则 $\boldsymbol{P}$ 是可逆矩阵, 且

$$\boldsymbol{A}_{ij}\boldsymbol{P}=(\boldsymbol{A}_{ij}\boldsymbol{\alpha}_1,\boldsymbol{A}_{ij}\boldsymbol{\alpha}_2,\cdots,\boldsymbol{A}_{ij}\boldsymbol{\alpha}_n)=(\boldsymbol{0},\cdots,\boldsymbol{0},\boldsymbol{\alpha}_i,\boldsymbol{0},\cdots,\boldsymbol{0}),$$

其中上式中的 $\boldsymbol{\alpha}_i$ 在第 $j$ 列. 另一方面, 有

$$\boldsymbol{P}\boldsymbol{E}_{ij}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)\boldsymbol{E}_{ij}=(\boldsymbol{0},\cdots,\boldsymbol{0},\boldsymbol{\alpha}_i,\boldsymbol{0},\cdots,\boldsymbol{0}).$$

因此, 对任意的 $i,j$, $\boldsymbol{A}_{ij}\boldsymbol{P}=\boldsymbol{P}\boldsymbol{E}_{ij}$, 即 $\boldsymbol{P}^{-1}\boldsymbol{A}_{ij}\boldsymbol{P}=\boldsymbol{E}_{ij}$. $\square$

---

#### § 7.8 Jordan 标准型的应用

Jordan 标准型形式简单, 理论优美, 有着广泛的用途. 例如利用 Jordan 标准型可以计算矩阵的多项式和幂级数, 并给出矩阵函数的定义 (参考 § 7.9), 这在微分方程理论中有着众多的应用. 利用 Jordan 标准型还能证明许多重要的定理, 例如 Jordan-Chevalley 分解定理 (例 7.33), 它在李代数理论中发挥着重要的作用. 本节主要阐述 Jordan 标准型理论在处理矩阵问题方面的应用, 主要内容分成 4 个部分: 利用 Jordan 标准型研究矩阵的性质; 运用 Jordan 标准型进行相似问题的化简; 应用 Jordan 标准型的三段论法; 采用 Jordan 块作为测试矩阵. 如无特殊说明, 本节总在复数域 $\mathbb{C}$ 上考虑问题.

##### 1. 利用 Jordan 标准型研究矩阵的性质

> [!example] 例 7.65
> 设 $\boldsymbol{A}$ 是 $n$ 阶复矩阵, 求证: $\boldsymbol{A}$ 相似于分块对角矩阵 $\mathrm{diag}\{\boldsymbol{B},\boldsymbol{C}\}$, 其中 $\boldsymbol{B}$ 是幂零矩阵, $\boldsymbol{C}$ 是可逆矩阵.

**证明** 我们发现 $\boldsymbol{A}$ 的初等因子分离开了零特征值和非零特征值, 从而 $\boldsymbol{A}$ 的 Jordan 标准型满足题目要求. 此时, 可将零特征值的 Jordan 块 $\boldsymbol{J}_r(0)$ (幂零矩阵) 放入 $\boldsymbol{B}$ 中, 将非零特征值的 Jordan 块 $\boldsymbol{J}_r(\lambda_0)$ (可逆矩阵) 放入 $\boldsymbol{C}$ 中, 即得结论. $\square$

> [!note]
> 例 7.65 告诉我们: 在相似的意义下, 对复方阵的研究可归结为对幂零矩阵和可逆矩阵这两类特殊矩阵的研究, 它们的刻画分别是: 特征值全为零以及特征值全不为零. 这也是前面很多例题都处理这两类矩阵的深层次原因.


> [!example] 例 7.66
> 设 $\boldsymbol{A}$ 是 $n$ 阶复矩阵且 $|\boldsymbol{A}|=1$, 求证: $\boldsymbol{A}$ 可表示为两个对称矩阵之积.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, $\boldsymbol{P}$ 为非异阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 从而 $\boldsymbol{A}=(\boldsymbol{P}\boldsymbol{J})\boldsymbol{P}^{-1}$. 设 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_1,\boldsymbol{J}_2\}$, 其中 $\boldsymbol{J}_1$ 是若干 Jordan 块 $\boldsymbol{J}_{r_i}(\lambda_i)\,(\lambda_i\neq 0)$ 构成的分块对角矩阵, $\boldsymbol{J}_2$ 是若干 Jordan 块 $\boldsymbol{J}_{s_j}(0)$ 构成的分块对角矩阵. 注意到 $|\boldsymbol{J}_1|=\prod_i \lambda_i^{r_i}$, $\prod_i\lambda_i^{r_i}$ 等于 $\boldsymbol{J}_1$ 的所有特征值之积, 而 $\prod_i\lambda_i^{r_i}$ 等于 $|\boldsymbol{J}_1|$, 即 $|J_1|$ 的模的平方根在 $\mathbb{C}$ 中. 设 $\mu_i^2=\lambda_i\,(1\leq i\leq k)$, 其中 $\mu_i\in\mathbb{C}^*$, 令 $\boldsymbol{S}_1=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\mu_1),\cdots,\boldsymbol{J}_{r_k}(\mu_k)\}$, 则 $\boldsymbol{S}_1^2$ 是一个与 $\boldsymbol{J}_1$ 有相同初等因子组的对角矩阵, 故 $\boldsymbol{S}_1^2$ 相似于 $\boldsymbol{J}_1$. 设 $\boldsymbol{Q}$ 为非异阵使得 $\boldsymbol{Q}^{-1}\boldsymbol{S}_1^2\boldsymbol{Q}=\boldsymbol{J}_1$, 则 $\boldsymbol{J}_1=(\boldsymbol{S}_1\boldsymbol{Q})(\boldsymbol{Q}^{-1}\boldsymbol{S}_1)$. 对 $\boldsymbol{J}_2$, 由例 7.50 可知, $\boldsymbol{J}_2$ 相似于 $\boldsymbol{S}_2^2$, 其中 $\boldsymbol{S}_2=\mathrm{diag}\{\boldsymbol{J}_{q_1}(0),\cdots,\boldsymbol{J}_{q_l}(0)\}$, 类似地有 $\boldsymbol{J}_2=(\boldsymbol{S}_2\boldsymbol{R})(\boldsymbol{R}^{-1}\boldsymbol{S}_2)$. 因此 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_1,\boldsymbol{J}_2\}=(\mathrm{diag}\{\boldsymbol{S}_1\boldsymbol{Q},\boldsymbol{S}_2\boldsymbol{R}\})(\mathrm{diag}\{\boldsymbol{Q}^{-1}\boldsymbol{S}_1,\boldsymbol{R}^{-1}\boldsymbol{S}_2\})$, 最后将 $\boldsymbol{A}$ 代入即可. $\square$

> [!note]
> 事实上, 例 7.66 的结论对任意特征非 $2$ 的域上的矩阵都成立, 但证明要复杂得多, 有兴趣的读者可参考 [18].

> [!example] 例 7.67
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\lambda_2,\cdots,\lambda_n$, 试求 $\boldsymbol{A}$ 的伴随 $\boldsymbol{A}^*$ 的 $n$ 个特征值.

**解** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 从而 $\boldsymbol{P}^{-1}\boldsymbol{A}^*\boldsymbol{P}=\boldsymbol{J}^*$, 因此 $\boldsymbol{A}^*$ 与 $\boldsymbol{J}^*$ 有相同的特征值. 设 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$, 其中 $\lambda_1,\cdots,\lambda_k$ 是 $\boldsymbol{A}$ 的不同特征值 (为书写方便, 这里的记号与题目不同), 则 $\boldsymbol{J}^*=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1)^*,\cdots,\boldsymbol{J}_{r_k}(\lambda_k)^*\}$. 对每个 Jordan 块 $\boldsymbol{J}_{r_i}(\lambda_i)$, 由 $\boldsymbol{J}_{r_i}(\lambda_i)^*\boldsymbol{J}_{r_i}(\lambda_i)=|\boldsymbol{J}_{r_i}(\lambda_i)|\boldsymbol{I}=\lambda_i^{r_i}\boldsymbol{I}$, 可知 $\boldsymbol{J}_{r_i}(\lambda_i)^*=\lambda_i^{r_i}\boldsymbol{J}_{r_i}(\lambda_i)^{-1}$. 当 $\lambda_i\neq 0$ 时, 利用例 7.54 可知 $\boldsymbol{J}_{r_i}(\lambda_i)^*$ 相似于 $\boldsymbol{J}_{r_i}(\lambda_i^{r_i-1})$. 当 $\lambda_i=0$ 时, 若 $r_i\geq 2$, 则由例 7.11 可知 $\boldsymbol{J}_{r_i}(0)^*$ 的特征值全为零; 若 $r_i=1$, 则 $\boldsymbol{J}_1(0)^*=(1)$. 因此 $\boldsymbol{A}^*$ 的特征值为 $\prod_{i=1}^n\lambda_i,\lambda_1^{-1}\prod_{i=1}^n\lambda_i,\cdots,\lambda_n^{-1}\prod_{i=1}^n\lambda_i$ (参考例 6.21). $\square$

##### 2. 运用 Jordan 标准型进行相似问题的化简

利用 Jordan 标准型进行相似问题的化简是一种常见的方法, 其原理是: 矩阵 $\boldsymbol{A}$ 与 $f(\boldsymbol{A})$ 具有完全相同的特征向量, 并且 $\boldsymbol{A}$ 的每个特征值 $\lambda_0$ 对应于 $f(\boldsymbol{A})$ 的特征值 $f(\lambda_0)$. 若 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $f(\boldsymbol{J})$ 相似于 $f(\boldsymbol{A})$ 的 Jordan 标准型. 反过来, 若 $f(\boldsymbol{J})$ 的 Jordan 标准型已知, 则在某些条件下可反推出 $\boldsymbol{J}$ 的 Jordan 标准型.

> [!example] 例 7.68
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 满足 $|\boldsymbol{A}|=1$, 且 $\boldsymbol{A}$ 的特征值全为正数. 若 $\boldsymbol{A}$ 的特征多项式等于其极小多项式, 证明: $\boldsymbol{A}=\boldsymbol{B}^2$ 对某个实矩阵 $\boldsymbol{B}$ 成立.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, $\boldsymbol{P}$ 为非异阵, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$. 由条件可知 $\lambda_i>0$ 且 $r_1+\cdots+r_k=n$. 因为 $\prod_i\lambda_i^{r_i}=|\boldsymbol{A}|=1$, 所以可取 $\mu_i=\lambda_i^{1/2}>0$. 设 $\boldsymbol{B}_0=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\mu_1),\cdots,\boldsymbol{J}_{r_k}(\mu_k)\}$, 则 $\boldsymbol{B}_0^2$ 与 $\boldsymbol{J}$ 有相同的初等因子组, 从而相似于 $\boldsymbol{J}$. 设 $\boldsymbol{Q}$ 为非异阵使得 $\boldsymbol{Q}^{-1}\boldsymbol{B}_0^2\boldsymbol{Q}=\boldsymbol{J}$, 取 $\boldsymbol{B}=\boldsymbol{P}\boldsymbol{Q}^{-1}\boldsymbol{B}_0\boldsymbol{Q}\boldsymbol{P}^{-1}$, 则 $\boldsymbol{B}^2=\boldsymbol{A}$. $\square$


> [!example] 例 7.69
> 求证: $n$ 阶矩阵 $\boldsymbol{A}$ 与所有的 $\boldsymbol{A}^m\,(m\geq 1)$ 都相似的充要条件是 $\boldsymbol{A}$ 的初等因子组中每个初等因子的次数都不超过 $1$.

**证明** 设 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型. 若每个 $r_i\leq 1$, 则 $\boldsymbol{J}$ 是对角矩阵, 从而 $\boldsymbol{A}^m$ 相似于对角矩阵 $\boldsymbol{J}^m$, 且 $\boldsymbol{J}^m$ 与 $\boldsymbol{J}$ 有相同的初等因子组, 故 $\boldsymbol{A}^m$ 相似于 $\boldsymbol{A}$. 反之, 若有某个 $r_i>1$, 则由例 7.50 可知, $\boldsymbol{J}_{r_i}(\lambda_i)^m$ 的初等因子组会发生变化 (例如取 $m=2$), 从而 $\boldsymbol{A}^2$ 的初等因子组与 $\boldsymbol{A}$ 不同, 故 $\boldsymbol{A}^2$ 不相似于 $\boldsymbol{A}$, 矛盾. $\square$

> [!example] 例 7.70
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵, 试求 $\boldsymbol{A}^2$ 的 Jordan 标准型.

**解** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{A}^2$ 相似于 $\boldsymbol{J}^2$. 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda)$, 考虑 $\boldsymbol{J}_r(\lambda)^2$ 的 Jordan 标准型.

(1) 若 $\lambda\neq 0$, 则 $\boldsymbol{J}_r(\lambda)^2$ 的特征值为 $\lambda^2$, 且 $\boldsymbol{J}_r(\lambda)^2-\lambda^2\boldsymbol{I}_r$ 的秩为 $r-1$, 故 $\boldsymbol{J}_r(\lambda)^2$ 的 Jordan 标准型为 $\boldsymbol{J}_r(\lambda^2)$.

(2) 若 $\lambda=0$ 且 $r$ 为奇数, 则 $\boldsymbol{J}_r(0)^2$ 的秩为 $r-2$, 幂零指数为 $\frac{r+1}{2}$, 故 $\boldsymbol{J}_r(0)^2$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_{\frac{r+1}{2}}(0),\boldsymbol{J}_{\frac{r-1}{2}}(0)\}$.

(3) 若 $\lambda=0$ 且 $r$ 为偶数, 则 $\boldsymbol{J}_r(0)^2$ 的秩为 $r-2$, 幂零指数为 $\frac{r}{2}+1$, 故 $\boldsymbol{J}_r(0)^2$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_{\frac{r}{2}}(0),\boldsymbol{J}_{\frac{r}{2}}(0)\}$.

由上面的讨论即可得到 $\boldsymbol{A}^2$ 的 Jordan 标准型. $\square$

##### 3. 应用 Jordan 标准型的三段论法

利用 Jordan 标准型的三段论法来证明某些性质是一种强有力的方法. 三段论法的第一步是验证 Jordan 块满足该性质, 第二步是验证分块对角矩阵满足该性质, 第三步是验证相似矩阵有相同的性质, 由此可得任意复方阵都满足该性质.

> [!example] 例 7.71
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征多项式为 $f(\lambda)$, 极小多项式为 $m(\lambda)$, 求证: $f(\lambda)\mid m(\lambda)^n$.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则只需对 Jordan 块证明即可. 设 $\boldsymbol{J}_r(\lambda_0)$ 是任一 Jordan 块, 则 $f(\lambda)=(\lambda-\lambda_0)^r$, $m(\lambda)=(\lambda-\lambda_0)^r$, 显然 $f(\lambda)\mid m(\lambda)^r\mid m(\lambda)^n$. $\square$


> [!example] 例 7.72
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, 求证: $\boldsymbol{A}^n$ 可表示为 $\boldsymbol{A}$ 的次数不超过 $n-1$ 的多项式.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{A}^n$ 相似于 $\boldsymbol{J}^n$. 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda_0)$, 由 Cayley-Hamilton 定理可知 $\boldsymbol{J}_r(\lambda_0)^r$ 可表示为 $\boldsymbol{J}_r(\lambda_0)$ 的次数不超过 $r-1$ 的多项式, 从而 $\boldsymbol{J}_r(\lambda_0)^n$ 也可表示为 $\boldsymbol{J}_r(\lambda_0)$ 的次数不超过 $r-1\leq n-1$ 的多项式. 因此 $\boldsymbol{J}^n$ 可表示为 $\boldsymbol{J}$ 的次数不超过 $n-1$ 的多项式, 从而 $\boldsymbol{A}^n$ 可表示为 $\boldsymbol{A}$ 的次数不超过 $n-1$ 的多项式. $\square$

##### 4. 采用 Jordan 块作为测试矩阵

利用 Jordan 块作为测试矩阵, 可以构造反例或验证某些命题的正确性. 这是一种常用的技巧.

> [!example] 例 7.73
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, 问: 对任意的正整数 $m$, $\boldsymbol{A}^m$ 的初等因子组是否由 $\boldsymbol{A}$ 的初等因子组完全确定?

**解** 是. 由例 7.54 和例 7.55 可知, 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda_0)$, $\boldsymbol{J}_r(\lambda_0)^m$ 的初等因子组仅依赖于 $r,\lambda_0$ 和 $m$, 因此 $\boldsymbol{A}^m$ 的初等因子组由 $\boldsymbol{A}$ 的初等因子组完全确定. $\square$

> [!example] 例 7.74
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 证明: $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)\geq n-r$, 并求等号成立的充要条件.

**证明** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, 其中 $r_1+\cdots+r_k=n$, 且不妨设 $r_1\geq r_2\geq\cdots\geq r_k\geq 1$. 由 $\mathrm{r}(\boldsymbol{A})=r$ 可知 $\boldsymbol{A}$ 的秩等于 $n-k$, 即 $k=n-r$. 注意到每个 $\boldsymbol{J}_{r_i}(0)+\boldsymbol{I}_{r_i}$ 都是可逆矩阵, 故 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)=\mathrm{r}(\boldsymbol{J}+\boldsymbol{I}_n)=n$, 从而 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)\geq n-r$, 等号成立当且仅当 $r=0$, 即 $\boldsymbol{A}=\boldsymbol{O}$. $\square$

---

#### § 7.9 矩阵函数

利用矩阵的 Jordan 标准型, 可以定义矩阵函数, 这在微分方程理论中有重要应用.

> [!definition] 定义 7.9.1
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$, 且存在非异阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. 设 $f(z)$ 是复变函数, 且 $f(\lambda_i),f'(\lambda_i),\cdots,f^{(r_i-1)}(\lambda_i)$ 都有定义, 则定义
> $$f(\boldsymbol{A})=\boldsymbol{P}\,f(\boldsymbol{J})\,\boldsymbol{P}^{-1},\quad f(\boldsymbol{J})=\mathrm{diag}\{f(\boldsymbol{J}_{r_1}(\lambda_1)),\cdots,f(\boldsymbol{J}_{r_k}(\lambda_k))\},$$
> 其中
> $$f(\boldsymbol{J}_{r_i}(\lambda_i))=\begin{pmatrix}f(\lambda_i)&\frac{f'(\lambda_i)}{1!}&\cdots&\frac{f^{(r_i-1)}(\lambda_i)}{(r_i-1)!}\\&f(\lambda_i)&\cdots&\frac{f^{(r_i-2)}(\lambda_i)}{(r_i-2)!}\\&&\ddots&\vdots\\&&&&f(\lambda_i)\end{pmatrix}.$$


> [!example] 例 7.75
> 设 $\boldsymbol{A}=\begin{pmatrix}3&0&8\\3&-1&6\\-2&0&-5\end{pmatrix}$, 求 $\sin\boldsymbol{A}$.

**解** 通过计算可知 $\lambda\boldsymbol{I}_3-\boldsymbol{A}$ 的法式为 $\mathrm{diag}\{1,\lambda+1,(\lambda+1)^2\}$, 故 $\boldsymbol{A}$ 的初等因子组为 $\lambda+1,(\lambda+1)^2$, 从而 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{-1,\boldsymbol{J}_2(-1)\}$. 设非异阵 $\boldsymbol{P}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 则 $\boldsymbol{A}\boldsymbol{P}=\boldsymbol{P}\boldsymbol{J}$, 从而得到线性方程组:

$$(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_1=\boldsymbol{0},\quad (\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_2=\boldsymbol{0},\quad (\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_2.$$

求解 $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{x}=\boldsymbol{0}$ 得到两个线性无关的解 $\boldsymbol{\beta}_1=(0,1,0)'$ 和 $\boldsymbol{\beta}_2=(4,0,-2)'$. 设 $\boldsymbol{\alpha}_2=k_1\boldsymbol{\beta}_1+k_2\boldsymbol{\beta}_2=(4k_2,k_1,-2k_2)'$, 代入 $(\boldsymbol{A}+\boldsymbol{I}_3)\boldsymbol{x}=\boldsymbol{\alpha}_2$ 中, 利用 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_3;\boldsymbol{\alpha}_2)=\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_3)$ 可得 $k_1=k_2$. 于是可取 $\boldsymbol{\alpha}_1=\boldsymbol{\beta}_1=(0,1,0)'$, $\boldsymbol{\alpha}_2=\boldsymbol{\beta}_1+\boldsymbol{\beta}_2=(4,1,-2)'$, 此时可解出 $\boldsymbol{\alpha}_3=(1,0,0)'$. 因此

$$\boldsymbol{P}=\begin{pmatrix}0&4&1\\1&1&0\\0&-2&0\end{pmatrix}.$$

利用定义 7.9.1 计算可得:

$$\sin(\boldsymbol{J})=\begin{pmatrix}\sin(-1)&0&0\\0&\sin(-1)&\cos(-1)\\0&0&\sin(-1)\end{pmatrix}=\begin{pmatrix}-\sin 1&0&0\\0&-\sin 1&-\cos 1\\0&0&-\sin 1\end{pmatrix}.$$

因此

$$\sin\boldsymbol{A}=\boldsymbol{P}\sin(\boldsymbol{J})\boldsymbol{P}^{-1}=\begin{pmatrix}0&4&1\\1&1&0\\0&-2&0\end{pmatrix}\begin{pmatrix}-\sin 1&0&0\\0&-\sin 1&-\cos 1\\0&0&-\sin 1\end{pmatrix}\begin{pmatrix}0&1&\frac{1}{2}\\0&0&-\frac{1}{2}\\1&0&2\end{pmatrix}$$

$$=\begin{pmatrix}4\sin 1-\sin 1&0&8\sin 1-2\sin 1\\-\sin 1&-\sin 1&-2\sin 1\\-2\sin 1&0&-4\sin 1-\sin 1\end{pmatrix}=\begin{pmatrix}3\sin 1&0&6\sin 1\\-\sin 1&-\sin 1&-2\sin 1\\-2\sin 1&0&-5\sin 1\end{pmatrix}.\;\square$$


> [!example] 例 7.76
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, $f(z),g(z)$ 为复多项式, 求证:
> 
> (1) 若 $h(z)=f(z)+g(z)$, 则 $h(\boldsymbol{A})=f(\boldsymbol{A})+g(\boldsymbol{A})$;
> 
> (2) 若 $k(z)=f(z)g(z)$, 则 $k(\boldsymbol{A})=f(\boldsymbol{A})g(\boldsymbol{A})$;
> 
> (3) 若 $\boldsymbol{P}$ 为非异阵, 则 $f(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})=\boldsymbol{P}^{-1}f(\boldsymbol{A})\boldsymbol{P}$.

**证明** 由矩阵函数的定义直接验证即可. $\square$

> [!example] 例 7.77
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, $f(z)$ 为解析函数, 证明: $f(\boldsymbol{A})$ 的特征值为 $f(\lambda_1),f(\lambda_2),\cdots,f(\lambda_n)$, 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的特征值.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{A}$ 相似于 $\boldsymbol{J}$, 从而 $f(\boldsymbol{A})$ 相似于 $f(\boldsymbol{J})$. 由定义 7.9.1 可知, $f(\boldsymbol{J})$ 是上三角矩阵, 其主对角线上的元素为 $f(\lambda_1),f(\lambda_2),\cdots,f(\lambda_n)$, 因此 $f(\boldsymbol{A})$ 的特征值为 $f(\lambda_1),f(\lambda_2),\cdots,f(\lambda_n)$. $\square$

> [!example] 例 7.78
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}$, 且存在非异阵 $\boldsymbol{P}$ 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. 设 $f(z)$ 为解析函数, 证明: $\det f(\boldsymbol{A})=\prod_{i=1}^n f(\lambda_i)$, 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的特征值.

**证明** 由定义 7.9.1 可知, $f(\boldsymbol{A})$ 相似于 $f(\boldsymbol{J})$, 且 $f(\boldsymbol{J})$ 是上三角矩阵, 其主对角线上的元素为 $f(\lambda_1),f(\lambda_2),\cdots,f(\lambda_n)$, 因此 $\det f(\boldsymbol{A})=\det f(\boldsymbol{J})=\prod_{i=1}^n f(\lambda_i)$. $\square$

> [!example] 例 7.79
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 满足 $|\lambda\boldsymbol{I}_n-\boldsymbol{A}|=(\lambda-1)^n$, 证明: 对任意的正整数 $m$, $\boldsymbol{A}^m$ 与 $\boldsymbol{A}$ 相似.

**证明** 由条件可知 $\boldsymbol{A}$ 的特征值全为 $1$. 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{A}$ 相似于 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(1),\cdots,\boldsymbol{J}_{r_k}(1)\}$. 由例 7.54 可知, $\boldsymbol{J}_{r_i}(1)^m$ 的初等因子仍为 $(\lambda-1)^{r_i}$, 故 $\boldsymbol{J}_{r_i}(1)^m$ 相似于 $\boldsymbol{J}_{r_i}(1)$, 从而 $\boldsymbol{J}^m$ 相似于 $\boldsymbol{J}$, 即 $\boldsymbol{A}^m$ 相似于 $\boldsymbol{A}$. $\square$

> [!example] 例 7.80
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 的极小多项式为 $m(\lambda)$, $f(z)$ 为解析函数. 证明: $f(\boldsymbol{A})$ 可逆的充要条件是 $(f(\lambda),m(\lambda))=1$.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $f(\boldsymbol{A})$ 相似于 $f(\boldsymbol{J})$. $f(\boldsymbol{A})$ 可逆当且仅当 $f(\boldsymbol{J})$ 可逆, 当且仅当对每个 Jordan 块 $\boldsymbol{J}_{r_i}(\lambda_i)$, $f(\boldsymbol{J}_{r_i}(\lambda_i))$ 可逆. 注意到 $f(\boldsymbol{J}_{r_i}(\lambda_i))$ 是上三角矩阵, 其对角线元素全为 $f(\lambda_i)$, 故 $f(\boldsymbol{J}_{r_i}(\lambda_i))$ 可逆当且仅当 $f(\lambda_i)\neq 0$. 因此 $f(\boldsymbol{A})$ 可逆当且仅当对所有 $\boldsymbol{A}$ 的特征值 $\lambda_i$ 都有 $f(\lambda_i)\neq 0$, 这等价于 $(f(\lambda),m(\lambda))=1$. $\square$


> [!example] 例 7.81
> 设 $n$ 阶复矩阵 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\lambda_2,\cdots,\lambda_n$, $f(z)$ 为解析函数. 求 $f(\boldsymbol{A})$ 的迹.

**解** 由例 7.77 可知, $f(\boldsymbol{A})$ 的特征值为 $f(\lambda_1),f(\lambda_2),\cdots,f(\lambda_n)$, 因此 $\mathrm{tr}\,f(\boldsymbol{A})=\sum_{i=1}^n f(\lambda_i)$. $\square$

> [!example] 例 7.82
> 设 $\boldsymbol{A}$ 为 $n$ 阶复方阵, 求 $\boldsymbol{e}^{\boldsymbol{A}}$ 的行列式.

**解** 设 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 为 $\boldsymbol{A}$ 的特征值, 则由例 7.78 可知

$$|\boldsymbol{e}^{\boldsymbol{A}}|=\prod_{i=1}^n \boldsymbol{e}^{\lambda_i}=\boldsymbol{e}^{\sum_{i=1}^n \lambda_i}=\boldsymbol{e}^{\mathrm{tr}\,\boldsymbol{A}}.\;\square$$

---

#### § 7.10 Jordan 标准型的几何

Jordan 标准型不仅可以从代数的角度来理解, 还可以从几何的角度来理解. 本节将从线性变换的角度, 利用根子空间分解和循环子空间分解来揭示 Jordan 标准型的几何意义.

##### 1. 根子空间分解

> [!definition] 定义 7.10.1
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, $\lambda_0$ 是 $\varphi$ 的一个特征值. 称子空间
> $$R(\lambda_0)=\{\alpha\in V\mid \exists\,m\in\mathbb{Z}^+,\;(\varphi-\lambda_0 I)^m(\alpha)=0\}$$
> 为 $\varphi$ 关于特征值 $\lambda_0$ 的**根子空间** (root subspace).

> [!theorem] 定理 7.10.1
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全部不同特征值, 则
> $$V=R(\lambda_1)\oplus R(\lambda_2)\oplus\cdots\oplus R(\lambda_k).$$

> [!proof]-
> **证明** 设 $\varphi$ 的特征多项式为 $f(\lambda)=(\lambda-\lambda_1)^{r_1}(\lambda-\lambda_2)^{r_2}\cdots(\lambda-\lambda_k)^{r_k}$, 则由 Cayley-Hamilton 定理可知 $f(\varphi)=0$. 令 $g_i(\lambda)=\frac{f(\lambda)}{(\lambda-\lambda_i)^{r_i}}$, 则 $g_1(\lambda),g_2(\lambda),\cdots,g_k(\lambda)$ 两两互素, 故存在 $u_1(\lambda),u_2(\lambda),\cdots,u_k(\lambda)$, 使得
> $$u_1(\lambda)g_1(\lambda)+u_2(\lambda)g_2(\lambda)+\cdots+u_k(\lambda)g_k(\lambda)=1.$$
> 于是
> $$u_1(\varphi)g_1(\varphi)+u_2(\varphi)g_2(\varphi)+\cdots+u_k(\varphi)g_k(\varphi)=I_V.$$
> 令 $V_i=\mathrm{Im}\,g_i(\varphi)$, 则对任意的 $\alpha\in V$,
> $$\alpha=u_1(\varphi)g_1(\varphi)(\alpha)+u_2(\varphi)g_2(\varphi)(\alpha)+\cdots+u_k(\varphi)g_k(\varphi)(\alpha),$$
> 其中 $u_i(\varphi)g_i(\varphi)(\alpha)\in V_i$, 故 $V=V_1+V_2+\cdots+V_k$.

> 下面证明 $V_i=R(\lambda_i)$. 对任意的 $\alpha\in V_i$, 存在 $\beta\in V$, 使得 $\alpha=g_i(\varphi)(\beta)$, 于是
> $$(\varphi-\lambda_i I)^{r_i}(\alpha)=(\varphi-\lambda_i I)^{r_i}g_i(\varphi)(\beta)=f(\varphi)(\beta)=0,$$
> 故 $\alpha\in R(\lambda_i)$, 即 $V_i\subseteq R(\lambda_i)$. 反之, 对任意的 $\alpha\in R(\lambda_i)$, 存在正整数 $m$, 使得 $(\varphi-\lambda_i I)^m(\alpha)=0$. 由于 $(g_i(\lambda),(\lambda-\lambda_i)^m)=1$, 故存在 $v(\lambda),w(\lambda)$, 使得 $v(\lambda)g_i(\lambda)+w(\lambda)(\lambda-\lambda_i)^m=1$, 从而
> $$\alpha=v(\varphi)g_i(\varphi)(\alpha)+w(\varphi)(\varphi-\lambda_i I)^m(\alpha)=v(\varphi)g_i(\varphi)(\alpha)\in V_i,$$
> 故 $R(\lambda_i)\subseteq V_i$. 因此 $V_i=R(\lambda_i)$.

> 最后证明直和. 对任意的 $\alpha\in R(\lambda_i)\cap\sum_{j\neq i}R(\lambda_j)$, 有 $(\varphi-\lambda_i I)^{r_i}(\alpha)=0$, 且存在 $\alpha_j\in R(\lambda_j)$ 使得 $\alpha=\sum_{j\neq i}\alpha_j$. 由于 $(\varphi-\lambda_j I)^{m_j}(\alpha_j)=0$, 故 $g_i(\varphi)(\alpha_j)=0$, 从而 $g_i(\varphi)(\alpha)=0$. 又 $(g_i(\lambda),(\lambda-\lambda_i)^{r_i})=1$, 故存在 $v(\lambda),w(\lambda)$, 使得 $v(\lambda)g_i(\lambda)+w(\lambda)(\lambda-\lambda_i)^{r_i}=1$, 从而
> $$\alpha=v(\varphi)g_i(\varphi)(\alpha)+w(\varphi)(\varphi-\lambda_i I)^{r_i}(\alpha)=0.$$
> 因此 $R(\lambda_i)\cap\sum_{j\neq i}R(\lambda_j)=\{0\}$, 即 $V=R(\lambda_1)\oplus R(\lambda_2)\oplus\cdots\oplus R(\lambda_k)$. $\square$


> [!corollary] 推论 7.10.1
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 则 $V$ 可分解为 $\varphi$ 的不变子空间的直和, 使得 $\varphi$ 在每个不变子空间上的限制只有一个特征值.

**证明** 由定理 7.10.1 直接得到. $\square$

##### 2. 循环子空间分解

> [!definition] 定义 7.10.2
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\alpha\in V$. 称子空间
> $$C(\varphi,\alpha)=L(\alpha,\varphi(\alpha),\varphi^2(\alpha),\cdots)$$
> 为 $\varphi$ 关于向量 $\alpha$ 的**循环子空间** (cyclic subspace), $\alpha$ 称为循环向量.

> [!theorem] 定理 7.10.2
> 设 $\psi$ 是 $n$ 维复线性空间 $V$ 上的幂零线性变换, 则 $V$ 可分解为若干个循环子空间的直和, 即存在 $\alpha_1,\alpha_2,\cdots,\alpha_k\in V$, 使得
> $$V=C(\psi,\alpha_1)\oplus C(\psi,\alpha_2)\oplus\cdots\oplus C(\psi,\alpha_k).$$

> [!proof]-
> **证明** 对 $n$ 进行归纳. 当 $n=1$ 时, $\psi=0$, 结论显然成立. 假设对维数小于 $n$ 的空间结论成立, 现证 $n$ 维的情形.

> 由于 $\psi$ 是幂零变换, 故 $\psi$ 不可逆, 从而 $\dim\mathrm{Im}\,\psi<n$. 将 $\psi$ 限制在 $\mathrm{Im}\,\psi$ 上, 由归纳假设可知, $\mathrm{Im}\,\psi$ 可分解为若干个循环子空间的直和:
> $$\mathrm{Im}\,\psi=C(\psi,\psi(\boldsymbol{v}_1))\oplus C(\psi,\psi(\boldsymbol{v}_2))\oplus\cdots\oplus C(\psi,\psi(\boldsymbol{v}_t)).$$
> 设循环子空间 $C(\psi,\psi(\boldsymbol{v}_i))$ 的维数为 $s_i$, 则 $\psi^{s_i}(\boldsymbol{v}_i)=0$ 但 $\psi^{s_i-1}(\boldsymbol{v}_i)\neq 0$.

> 注意到 $\psi^{s_1-1}(\boldsymbol{v}_1),\psi^{s_2-1}(\boldsymbol{v}_2),\cdots,\psi^{s_t-1}(\boldsymbol{v}_t)$ 都属于 $\mathrm{Ker}\,\psi$ 且线性无关. 将其扩充为 $\mathrm{Ker}\,\psi$ 的一组基:
> $$\psi^{s_1-1}(\boldsymbol{v}_1),\psi^{s_2-1}(\boldsymbol{v}_2),\cdots,\psi^{s_t-1}(\boldsymbol{v}_t),\boldsymbol{w}_1,\cdots,\boldsymbol{w}_l.$$
> 下面证明:
> $$V=C(\psi,\boldsymbol{v}_1)\oplus C(\psi,\boldsymbol{v}_2)\oplus\cdots\oplus C(\psi,\boldsymbol{v}_t)\oplus C(\psi,\boldsymbol{w}_1)\oplus\cdots\oplus C(\psi,\boldsymbol{w}_l).$$

> 设 $U=C(\psi,\boldsymbol{v}_1)+\cdots+C(\psi,\boldsymbol{v}_t)+C(\psi,\boldsymbol{w}_1)+\cdots+C(\psi,\boldsymbol{w}_l)$. 先证 $U=V$. 对任意的 $\boldsymbol{v}\in V$, $\psi(\boldsymbol{v})\in\mathrm{Im}\,\psi$, 故
> $$\psi(\boldsymbol{v})=\sum_{i=1}^t(c_{i0}\psi(\boldsymbol{v}_i)+c_{i1}\psi^2(\boldsymbol{v}_i)+\cdots+c_{i,s_i-1}\psi^{s_i}(\boldsymbol{v}_i)).$$
> 令 $\boldsymbol{u}=\sum_{i=1}^t(c_{i0}\boldsymbol{v}_i+c_{i1}\psi(\boldsymbol{v}_i)+\cdots+c_{i,s_i-1}\psi^{s_i-1}(\boldsymbol{v}_i))$, 则 $\psi(\boldsymbol{v})=\psi(\boldsymbol{u})$, 故 $\boldsymbol{v}-\boldsymbol{u}\in\mathrm{Ker}\,\psi$. 于是
> $$\boldsymbol{v}-\boldsymbol{u}=\sum_{i=1}^t d_i\psi^{s_i-1}(\boldsymbol{v}_i)+\sum_{j=1}^l e_j\boldsymbol{w}_j,$$
> 从而 $\boldsymbol{v}=\boldsymbol{u}+\sum_{i=1}^t d_i\psi^{s_i-1}(\boldsymbol{v}_i)+\sum_{j=1}^l e_j\boldsymbol{w}_j\in U$, 即 $U=V$.


> 再证直和. 设
> $$\sum_{i=1}^t(c_{i0}\boldsymbol{v}_i+c_{i1}\psi(\boldsymbol{v}_i)+\cdots+c_{i,s_i-1}\psi^{s_i-1}(\boldsymbol{v}_i))+\sum_{j=1}^l f_j\boldsymbol{w}_j=0.\quad (*)$$
> 对上式作用 $\psi$, 注意到 $\psi(\boldsymbol{w}_j)=0$, 可得
> $$\sum_{i=1}^t(c_{i0}\psi(\boldsymbol{v}_i)+c_{i1}\psi^2(\boldsymbol{v}_i)+\cdots+c_{i,s_i-2}\psi^{s_i-1}(\boldsymbol{v}_i))=0.$$
> 由于 $\mathrm{Im}\,\psi=C(\psi,\psi(\boldsymbol{v}_1))\oplus\cdots\oplus C(\psi,\psi(\boldsymbol{v}_t))$, 故 $c_{i0}=c_{i1}=\cdots=c_{i,s_i-2}=0$ 对所有 $i$ 成立. 于是 $(*)$ 式变为
> $$\sum_{i=1}^t c_{i,s_i-1}\psi^{s_i-1}(\boldsymbol{v}_i)+\sum_{j=1}^l f_j\boldsymbol{w}_j=0.$$
> 由于 $\psi^{s_1-1}(\boldsymbol{v}_1),\cdots,\psi^{s_t-1}(\boldsymbol{v}_t),\boldsymbol{w}_1,\cdots,\boldsymbol{w}_l$ 线性无关, 故 $c_{i,s_i-1}=0$ 且 $f_j=0$. 因此上述分解是直和. $\square$

> [!corollary] 推论 7.10.2
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 则 $V$ 可分解为若干个 $\varphi$ 的循环子空间的直和.

**证明** 由定理 7.10.1 和定理 7.10.2 直接得到. $\square$

> [!theorem] 定理 7.10.3 (Jordan 标准型的几何刻画)
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 则存在 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型.

**证明** 由推论 7.10.2 可知, $V$ 可分解为若干个循环子空间的直和. 在每个循环子空间 $C(\varphi-\lambda_i I,\boldsymbol{\alpha})$ 上, $\varphi$ 的表示矩阵恰好是一个 Jordan 块 $\boldsymbol{J}_r(\lambda_i)$. 将所有循环子空间的基合并起来, 就得到 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型. $\square$

##### 3. 循环轨道的应用

利用循环轨道可以给出 Jordan 标准型理论的一种直观描述. 设 $\psi$ 是 $n$ 维复线性空间 $V$ 上的幂零线性变换, $\boldsymbol{\alpha}$ 是循环向量, 则循环轨道为:

$$\boldsymbol{\alpha}\xrightarrow{\psi}\psi(\boldsymbol{\alpha})\xrightarrow{\psi}\psi^2(\boldsymbol{\alpha})\xrightarrow{\psi}\cdots\xrightarrow{\psi}\psi^{r-1}(\boldsymbol{\alpha})\xrightarrow{\psi}\boldsymbol{0}.$$


这条轨道对应于一个 $r$ 阶 Jordan 块 $\boldsymbol{J}_r(0)$. 全空间 $V$ 可分解为若干条互不相交的循环轨道的并集.

> [!example] 例 7.83
> 设 $\psi$ 是 $n$ 维复线性空间 $V$ 上的幂零线性变换, 且 $\dim\mathrm{Ker}\,\psi=k$. 证明: $\psi$ 的 Jordan 标准型中 Jordan 块的个数等于 $k$.

**证明** 由定理 7.10.2 可知, $V$ 可分解为 $t$ 个循环子空间的直和, 每个循环子空间对应一条循环轨道, 每条循环轨道的终点 (最后一个非零向量) 都是 $\mathrm{Ker}\,\psi$ 中的一个向量, 且不同轨道的终点线性无关. 因此循环轨道的条数等于 $\dim\mathrm{Ker}\,\psi=k$, 即 Jordan 块的个数等于 $k$. $\square$

> [!example] 例 7.84
> 设 $\psi$ 是 $n$ 维复线性空间 $V$ 上的幂零线性变换, 且 $\mathrm{r}(\psi)=r$. 证明: $\psi$ 的幂零指数不超过 $n-r+1$.

**证明** 设 $\psi$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, 其中 $r_1\geq r_2\geq\cdots\geq r_k\geq 1$, $r_1+\cdots+r_k=n$. 由 $\mathrm{r}(\psi)=r$ 可知 $n-k=r$, 即 $k=n-r$. 由于 $r_1\leq n-(k-1)=n-(n-r-1)=r+1$, 故 $\psi$ 的幂零指数 $r_1\leq r+1\leq n-r+1$. $\square$

> [!example] 例 7.85
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 证明: 对任意的正整数 $m$, $\mathrm{r}(\boldsymbol{A}^{m+1})<\mathrm{r}(\boldsymbol{A}^m)$ 当且仅当 $\boldsymbol{A}$ 有一个阶数大于 $m$ 的 Jordan 块.

**证明** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$. 则 $\mathrm{r}(\boldsymbol{A}^{m+1})<\mathrm{r}(\boldsymbol{A}^m)$ 当且仅当存在某个 $i$, 使得 $\mathrm{r}(\boldsymbol{J}_{r_i}(0)^{m+1})<\mathrm{r}(\boldsymbol{J}_{r_i}(0)^m)$, 这等价于存在某个 $r_i>m$. $\square$

> [!example] 例 7.86
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 求 $\boldsymbol{A}^k$ 的秩的最小值.

**解** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, 其中 $r_1\geq r_2\geq\cdots\geq r_k\geq 1$, 且 $r_1+\cdots+r_k=n$. 由 $\mathrm{r}(\boldsymbol{A})=r$ 可知 $k=n-r$. 对每个 Jordan 块 $\boldsymbol{J}_{r_i}(0)$, 当 $m\geq r_i$ 时 $\mathrm{r}(\boldsymbol{J}_{r_i}(0)^m)=0$; 当 $m<r_i$ 时 $\mathrm{r}(\boldsymbol{J}_{r_i}(0)^m)=r_i-m$. 因此

$$\mathrm{r}(\boldsymbol{A}^m)=\sum_{i:r_i>m}(r_i-m).$$

为使 $\mathrm{r}(\boldsymbol{A}^m)$ 最小, 应使尽可能多的 $r_i\leq m$. 由于 $r_1\leq n-k+1=r+1$, 故取 $m\geq r+1$ 时 $\mathrm{r}(\boldsymbol{A}^m)=0$. 对一般的 $m$, 最小值为 $\max\{0,r_1+\cdots+r_k-km\}=\max\{0,n-(n-r)m\}$ (在 $r_1=\cdots=r_{k-1}=1$, $r_k=n-k+1=r+1$ 时达到). $\square$


> [!example] 例 7.87
> 设 $\varphi$ 为 $n$ 维复线性空间 $V$ 上的线性变换, $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全部不同特征值. 证明:
> $$V=\mathrm{Ker}(\varphi-\lambda_1 I)^{r_1}\oplus\mathrm{Ker}(\varphi-\lambda_2 I)^{r_2}\oplus\cdots\oplus\mathrm{Ker}(\varphi-\lambda_k I)^{r_k},$$
> 其中 $r_i$ 是特征值 $\lambda_i$ 的代数重数.

**证明** 设 $\varphi$ 的特征多项式为 $f(\lambda)=(\lambda-\lambda_1)^{r_1}(\lambda-\lambda_2)^{r_2}\cdots(\lambda-\lambda_k)^{r_k}$, 极小多项式为 $m(\lambda)=(\lambda-\lambda_1)^{s_1}(\lambda-\lambda_2)^{s_2}\cdots(\lambda-\lambda_k)^{s_k}$, 其中 $1\leq s_i\leq r_i$. 令 $V_i=\mathrm{Ker}(\varphi-\lambda_i I)^{s_i}$, 则由定理 7.10.1 可知 $V=V_1\oplus V_2\oplus\cdots\oplus V_k$. 下面证明 $V_i=\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}$.

显然 $\mathrm{Ker}(\varphi-\lambda_i I)^{s_i}\subseteq\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}$. 反之, 对任意的 $\alpha\in\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}$, 设 $\alpha=\alpha_1+\alpha_2+\cdots+\alpha_k$, 其中 $\alpha_j\in V_j$. 则
$$(\varphi-\lambda_i I)^{r_i}(\alpha)=(\varphi-\lambda_i I)^{r_i}(\alpha_1)+\cdots+(\varphi-\lambda_i I)^{r_i}(\alpha_k)=0.$$
当 $j\neq i$ 时, $(\varphi-\lambda_i I)^{r_i}$ 在 $V_j$ 上是可逆的 (因为 $\lambda_i$ 不是 $\varphi|_{V_j}$ 的特征值), 故 $\alpha_j=0$. 因此 $\alpha=\alpha_i\in V_i$, 即 $\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}\subseteq V_i$. 于是 $V_i=\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}$, 从而
$$V=\mathrm{Ker}(\varphi-\lambda_1 I)^{r_1}\oplus\mathrm{Ker}(\varphi-\lambda_2 I)^{r_2}\oplus\cdots\oplus\mathrm{Ker}(\varphi-\lambda_k I)^{r_k}.\;\square$$

> [!example] 例 7.88
> 设 $\varphi$ 为 $n$ 维复线性空间 $V$ 上的线性变换, 其特征多项式的不可约分解为 $f(\lambda)=(\lambda-\lambda_1)^{r_1}(\lambda-\lambda_2)^{r_2}\cdots(\lambda-\lambda_k)^{r_k}$, 其中 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同特征值. 令 $V_i=\mathrm{Ker}(\varphi-\lambda_i I)^{r_i}$, 证明:
> $$V=V_1\oplus V_2\oplus\cdots\oplus V_k.\quad (7.16)$$

**证明** 由例 7.87 即得. $\square$

> [!note]
> 事实上, $V_i$ 就是 $\varphi$ 的根子空间 (参考教材 [1] 的定义 7.7.2 之前的证明), 故 (7.16) 式称为 $V$ 的**根子空间直和分解**. 若将 $\varphi$ 限制在 $V_i$ 上, 则由例 7.87 可知其特征多项式就是 $(\lambda-\lambda_i)^{r_i}$. 由 (7.16) 式可知, 要求 $V$ 的一组基, 使得 $\varphi$ 的表示矩阵相对简单的问题可归结为求 $V_i$ 的一组基, 使得 $\varphi|_{V_i}$ 的表示矩阵相对简单. 又因为 $\varphi|_{V_i}-\lambda_i I$ 在 $V_i$ 上是幂零的, 故只要对幂零线性变换求出其 Jordan 标准型即可.


> [!example] 例 7.89
> 设 $\psi$ 是 $n$ 维复线性空间 $V$ 上的幂零线性变换, 证明: 存在 $V$ 的一组基, 使得 $\psi$ 在这组基下的表示矩阵为 $\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\boldsymbol{J}_{r_2}(0),\cdots,\boldsymbol{J}_{r_s}(0)\}$, 其中 $\boldsymbol{J}_{r_i}(0)$ 是零特征值的 $r_i$ 阶 Jordan 块.

**证明** 对 $n$ 进行归纳. 当 $n=1$ 时, 结论显然成立. 设维数小于 $n$ 时结论成立, 现证 $n$ 维的情形. 设 $k$ 为正整数, 使得 $\psi^k=0$, 但 $\psi^{k-1}\neq 0$, 故存在 $\boldsymbol{v}\in V$, 使得 $\psi^{k-1}(\boldsymbol{v})\neq\boldsymbol{0}$. 由例 4.8 可知, $\boldsymbol{v},\psi(\boldsymbol{v}),\cdots,\psi^{k-1}(\boldsymbol{v})$ 线性无关, 它们生成的子空间记为 $U$. 若 $U=V$, 则 $\psi$ 在基 $\{\psi^{n-1}(\boldsymbol{v}),\cdots,\psi(\boldsymbol{v}),\boldsymbol{v}\}$ 下的表示矩阵为 $\boldsymbol{J}_n(0)$, 结论成立. 以下假设 $U\neq V$, 并且 $W$ 是满足 $W\cap U=0$ 的维数最大的 $\psi$–不变子空间, 我们来证明 $V=U\oplus W$. 一旦得证, 对 $W$ 用归纳假设, 命题自然成立.

用反证法, 假设存在 $V$ 中向量 $\boldsymbol{\alpha}\notin U\oplus W$. 因为 $\psi^k(\boldsymbol{\alpha})=\boldsymbol{0}$, 所以存在正整数 $t$, 使得 $\psi^t(\boldsymbol{\alpha})\in U\oplus W$, 但 $\psi^{t-1}(\boldsymbol{\alpha})\notin U\oplus W$. 令 $\boldsymbol{\beta}=\psi^{t-1}(\boldsymbol{\alpha})$, 因为 $\psi(\boldsymbol{\beta})\in U\oplus W$, 故可设 $\psi(\boldsymbol{\beta})=\boldsymbol{u}+\boldsymbol{w}$, 其中 $\boldsymbol{u}\in U$, $\boldsymbol{w}\in W$, 于是

$$\boldsymbol{0}=\psi^k(\boldsymbol{\beta})=\psi^{k-1}(\psi(\boldsymbol{\beta}))=\psi^{k-1}(\boldsymbol{u})+\psi^{k-1}(\boldsymbol{w}),$$

从而 $\psi^{k-1}(\boldsymbol{u})=-\psi^{k-1}(\boldsymbol{w})\in U\cap W=\boldsymbol{0}$, 即有 $\psi^{k-1}(\boldsymbol{u})=\boldsymbol{0}$. 因为 $\boldsymbol{u}\in U$, 故可设

$$\boldsymbol{u}=b_0\boldsymbol{v}+b_1\psi(\boldsymbol{v})+\cdots+b_{k-1}\psi^{k-1}(\boldsymbol{v}),$$

从而有 $b_0\psi^{k-1}(\boldsymbol{v})=\boldsymbol{0}$. 由于 $\psi^{k-1}(\boldsymbol{v})\neq\boldsymbol{0}$, 故 $b_0=0$, 于是

$$\boldsymbol{u}=b_1\psi(\boldsymbol{v})+\cdots+b_{k-1}\psi^{k-1}(\boldsymbol{v}).$$


若令 $\boldsymbol{x}=b_1\boldsymbol{v}+b_2\psi(\boldsymbol{v})+\cdots+b_{k-1}\psi^{k-2}(\boldsymbol{v})$, 则 $\boldsymbol{u}=\psi(\boldsymbol{x})$, 从而 $\boldsymbol{w}=\psi(\boldsymbol{\beta})-\boldsymbol{u}=\psi(\boldsymbol{\beta}-\boldsymbol{x})$. 因为 $\boldsymbol{\beta}\notin U\oplus W$, 故 $\boldsymbol{\beta}-\boldsymbol{x}\notin U\oplus W$, 从而有直和 $U\oplus W\oplus L(\boldsymbol{\beta}-\boldsymbol{x})$. 若令 $W'=W\oplus L(\boldsymbol{\beta}-\boldsymbol{x})$, 则由 $\psi(\boldsymbol{\beta}-\boldsymbol{x})=\boldsymbol{w}\in W$ 可知 $W'$ 也是 $\psi$–不变子空间. 显然 $W'$ 的维数大于 $W$ 的维数, 这与 $W$ 维数最大的假设矛盾. $\square$

将例 7.88 和例 7.89 合在一起, 即得 Jordan 标准型的几何构造:

> [!theorem] 定理 (Jordan 标准型的几何构造)
> 设 $\varphi$ 为 $n$ 维复线性空间 $V$ 上的线性变换, 则存在 $V$ 的一组基 $\{e_1,e_2,\cdots,e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\boldsymbol{J}_{r_2}(\lambda_2),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$.

##### 2. Jordan 标准型的几何意义

从空间分解的角度来看, 全空间 $V$ 可分解为不同特征值的根子空间的直和, 再由例 7.89 的证明过程可知, 每个根子空间可分解为若干个循环子空间的直和, 因此全空间 $V$ 可分解为若干个循环子空间的直和:

$$V=C(\varphi-\lambda_1 I_V,\boldsymbol{e}_{r_1})\oplus C(\varphi-\lambda_2 I_V,\boldsymbol{e}_{r_1+r_2})\oplus\cdots\oplus C(\varphi-\lambda_k I_V,\boldsymbol{e}_n),\quad (7.17)$$

其中循环子空间 $C(\varphi-\lambda_i I_V,\boldsymbol{e}_{r_1+\cdots+r_i})$ 与 Jordan 块 $\boldsymbol{J}_{r_i}(\lambda_i)$ 一一对应. 这就是 Jordan 标准型的几何意义.

具体来看 Jordan 块 $\boldsymbol{J}_{r_1}(\lambda_1)$ 对应的循环子空间 $C(\varphi-\lambda_1 I_V,\boldsymbol{e}_{r_1})$. 由表示矩阵的定义可知

$$\varphi(\boldsymbol{e}_1)=\lambda_1\boldsymbol{e}_1,\quad \varphi(\boldsymbol{e}_2)=\boldsymbol{e}_1+\lambda_1\boldsymbol{e}_2,\quad \cdots,\quad \varphi(\boldsymbol{e}_{r_1})=\boldsymbol{e}_{r_1-1}+\lambda_1\boldsymbol{e}_{r_1}.$$


令 $\varphi_1=\varphi-\lambda_1 I_V$, 则有如下的循环轨道:

$$\boldsymbol{e}_{r_1}\xrightarrow{\varphi_1}\boldsymbol{e}_{r_1-1}\xrightarrow{\varphi_1}\cdots\xrightarrow{\varphi_1}\boldsymbol{e}_2\xrightarrow{\varphi_1}\boldsymbol{e}_1\xrightarrow{\varphi_1}\boldsymbol{0}.$$

反之, 一个循环轨道也定义了一个循环子空间 $C(\varphi-\lambda_1 I_V,\boldsymbol{e}_{r_1})$. 因此, 全空间 $V$ 的循环子空间直和分解 (7.17) 一一对应于 $V$ 的一组基 $\{e_1,e_2,\cdots,e_n\}$ 分解为若干条互不相交的循环轨道的并集.

> [!note]
> Jordan 标准型诱导的循环子空间直和分解与有理标准型诱导的循环子空间直和分解是不同的. 下面以 $C(\varphi-\lambda_1 I_V,\boldsymbol{e}_{r_1})$ 为例进行说明:
> 
> (1) 它是关于 $\varphi-\lambda_1 I_V$ (而不是关于 $\varphi$) 的循环子空间;
> 
> (2) 它的循环向量是 $\boldsymbol{J}_{r_1}(\lambda_1)$ 对应的基向量中的最后一个向量 $\boldsymbol{e}_{r_1}$;
> 
> (3) 特别要求 $\boldsymbol{e}_1\xrightarrow{\varphi-\lambda_1 I_V}\boldsymbol{0}$, 这是 Jordan 块所特有的, 一般的循环子空间并没有这个要求.

Jordan 标准型的几何意义有很多有趣的应用, 例如在 § 7.7, 我们利用循环轨道给出了求 Jordan 标准型的过渡矩阵的第三种方法. 下面再来看 3 个应用.

**例 7.89 的证法 2** 我们用循环轨道来给出一个更直接的证明. 对 $V$ 的维数进行归纳. 当 $n=1$ 时, 结论显然成立. 设维数小于 $n$ 时结论成立, 现证 $n$ 维的情形. 注意到 $\psi$ 是不可逆线性变换, 故 $\mathrm{Im}\,\psi$ 的维数小于 $n$, 将 $\psi$ 限制在 $\mathrm{Im}\,\psi$ 上, 由归纳假设可知, $\mathrm{Im}\,\psi$ 中存在 $t$ 条长度分别为 $s_i$ 的循环轨道 $\mathrm{O}_i$:

$$\mathrm{O}_i:\quad \boldsymbol{u}_i\xrightarrow{\psi}\psi(\boldsymbol{u}_i)\xrightarrow{\psi}\cdots\xrightarrow{\psi}\psi^{s_i-2}(\boldsymbol{u}_i)\xrightarrow{\psi}\psi^{s_i-1}(\boldsymbol{u}_i)\xrightarrow{\psi}\boldsymbol{0},\quad 1\leq i\leq t.$$

注意到 $\{\psi^{s_1-1}(\boldsymbol{u}_1),\cdots,\psi^{s_t-1}(\boldsymbol{u}_t)\}$ 线性无关并且都属于 $\mathrm{Ker}\,\psi$, 故可将它们扩张为 $\mathrm{Ker}\,\psi$ 的一组基 $\{\psi^{s_1-1}(\boldsymbol{u}_1),\cdots,\psi^{s_t-1}(\boldsymbol{u}_t),\boldsymbol{w}_1,\cdots,\boldsymbol{w}_k\}$. 另一方面, 若设 $\boldsymbol{u}_i=\psi(\boldsymbol{v}_i)\,(1\leq i\leq t)$, 则容易验证下列 $s_1+\cdots+s_t+t+k$ 个向量线性无关:

$$\boldsymbol{v}_1,\psi(\boldsymbol{v}_1),\cdots,\psi^{s_1}(\boldsymbol{v}_1);\;\cdots;\;\boldsymbol{v}_t,\psi(\boldsymbol{v}_t),\cdots,\psi^{s_t}(\boldsymbol{v}_t);\;\boldsymbol{w}_1,\cdots,\boldsymbol{w}_k.$$

由线性变换的维数公式可知 $n=\dim V=\dim\mathrm{Im}\,\psi+\dim\mathrm{Ker}\,\psi=s_1+s_2+\cdots+s_t+t+k$, 故上述向量组是 $V$ 的一组基. 因此, 可将 $\mathrm{Im}\,\psi$ 的 $t$ 条长度分别为 $s_i$ 的循环轨道 $\mathrm{O}_i$ 扩张为 $V$ 的 $t$ 条长度分别为 $s_i+1$ 的循环轨道 $\widetilde{\mathrm{O}}_i$, 再增加 $k$ 条长度为 $1$ 的循环轨道 $\mathrm{N}_j$, 这就是 $\psi$ 所有的循环轨道:

$$\widetilde{\mathrm{O}}_i:\quad \boldsymbol{v}_i\xrightarrow{\psi}\psi(\boldsymbol{v}_i)\xrightarrow{\psi}\cdots\xrightarrow{\psi}\psi^{s_i-1}(\boldsymbol{v}_i)\xrightarrow{\psi}\psi^{s_i}(\boldsymbol{v}_i)\xrightarrow{\psi}\boldsymbol{0},\quad 1\leq i\leq t;$$

$$\mathrm{N}_j:\quad \boldsymbol{w}_j\xrightarrow{\psi}\boldsymbol{0},\quad 1\leq j\leq k,$$

这样便完成了证明. $\square$


> [!example] 例 7.55 (续)
> 设 $\boldsymbol{J}=\boldsymbol{J}_n(0)$ 是特征值为零的 $n$ 阶 Jordan 块, 求 $\boldsymbol{J}^m\,(m\geq 1)$ 的 Jordan 标准型.

**解法 2** 若 $m\geq n$, 则 $\boldsymbol{J}^m=\boldsymbol{O}$, 这就是它的 Jordan 标准型. 下设 $m<n$, 并作带余除法: $n=mq+r$, 其中 $0\leq r<m$. 注意到 $\boldsymbol{J}$ 的循环轨道只有一条:

$$\boldsymbol{J}_n(0):\quad \boldsymbol{e}_n\xrightarrow{\boldsymbol{J}}\boldsymbol{e}_{n-1}\xrightarrow{\boldsymbol{J}}\cdots\xrightarrow{\boldsymbol{J}}\boldsymbol{e}_2\xrightarrow{\boldsymbol{J}}\boldsymbol{e}_1\xrightarrow{\boldsymbol{J}}\boldsymbol{0},$$

其中 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 是 $n$ 维标准单位列向量. 将上述 $n$ 个基向量的顺序进行调整, 可以发现 $\boldsymbol{J}^m$ 的循环轨道分裂成了以下 $m$ 条:

$$\boldsymbol{J}_{q+1}(0):\quad \boldsymbol{e}_n\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_{n-m}\xrightarrow{\boldsymbol{J}^m}\cdots\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_r\xrightarrow{\boldsymbol{J}^m}\boldsymbol{0};$$

$$\vdots$$

$$\boldsymbol{J}_{q+1}(0):\quad \boldsymbol{e}_{n-r+1}\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_{n-r+1-m}\xrightarrow{\boldsymbol{J}^m}\cdots\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_1\xrightarrow{\boldsymbol{J}^m}\boldsymbol{0};$$

$$\boldsymbol{J}_q(0):\quad \boldsymbol{e}_{n-r}\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_{n-r-m}\xrightarrow{\boldsymbol{J}^m}\cdots\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_m\xrightarrow{\boldsymbol{J}^m}\boldsymbol{0};$$

$$\vdots$$

$$\boldsymbol{J}_q(0):\quad \boldsymbol{e}_{n-m+1}\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_{n-2m+1}\xrightarrow{\boldsymbol{J}^m}\cdots\xrightarrow{\boldsymbol{J}^m}\boldsymbol{e}_{r+1}\xrightarrow{\boldsymbol{J}^m}\boldsymbol{0}.$$

因此, $\boldsymbol{J}^m$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_q(0),\cdots,\boldsymbol{J}_q(0),\boldsymbol{J}_{q+1}(0),\cdots,\boldsymbol{J}_{q+1}(0)\}$, 其中有 $m-r$ 个 $\boldsymbol{J}_q(0)$, $r$ 个 $\boldsymbol{J}_{q+1}(0)$. $\square$

我们还可以利用循环轨道来计算不变子空间的个数. 虽然下面的例题与例 4.51 (取一组基 $\{x^i/i!\,(0\leq i\leq n-1)\}$) 和第 4 章的解答题 5 (相差一个转置) 完全类似, 但这里我们给出另外两种不同的证明.


> [!example] 例 7.90
> 设 $n$ 维复线性空间 $V$ 上的线性变换 $\varphi$ 在一组基 $\{e_1,e_2,\cdots,e_n\}$ 下的表示矩阵为 Jordan 块 $\boldsymbol{J}_n(\lambda_0)$, 求所有的 $\varphi$–不变子空间.

**解法 1** 令 $\psi=\varphi-\lambda_0 I_V$, 则有循环轨道

$$\boldsymbol{J}_n(0):\quad \boldsymbol{e}_n\xrightarrow{\psi}\boldsymbol{e}_{n-1}\xrightarrow{\psi}\cdots\xrightarrow{\psi}\boldsymbol{e}_2\xrightarrow{\psi}\boldsymbol{e}_1\xrightarrow{\psi}\boldsymbol{0},$$

并且 $\varphi$–不变子空间等价于 $\psi$–不变子空间. 显然 $V_i=L(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_i)\,(0\leq i\leq n)$ 都是 $\psi$–不变子空间, 我们来证明 $V$ 只有这 $n+1$ 个 $\psi$–不变子空间. 任取非零 $\psi$–不变子空间 $U$, 设

$$k=\max\{i\mid \exists\,\boldsymbol{u}\in U,\;\boldsymbol{u}=c_1\boldsymbol{e}_1+\cdots+c_i\boldsymbol{e}_i+\cdots+c_n\boldsymbol{e}_n,\;\text{其中}\;c_i\neq 0\},$$

则 $U\subseteq L(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_k)$. 另一方面, 取 $\boldsymbol{u}\in U$, $\boldsymbol{u}=c_1\boldsymbol{e}_1+c_2\boldsymbol{e}_2+\cdots+c_k\boldsymbol{e}_k$, 使得 $c_k\neq 0$, 则由循环轨道可得 $\boldsymbol{u}=(c_1\psi^{k-1}+c_2\psi^{k-2}+\cdots+c_k I_V)(\boldsymbol{e}_k)$. 令 $g(\lambda)=c_1\lambda^{k-1}+c_2\lambda^{k-2}+\cdots+c_k$, 则 $(g(\lambda),\lambda^n)=1$, 于是存在 $p(\lambda),q(\lambda)$, 使得 $g(\lambda)p(\lambda)+\lambda^n q(\lambda)=1$. 在上式中代入 $\lambda=\psi$ 并作用在 $\boldsymbol{e}_k$ 上可得

$$\boldsymbol{e}_k=p(\psi)g(\psi)(\boldsymbol{e}_k)+q(\psi)\psi^n(\boldsymbol{e}_k)=p(\psi)(\boldsymbol{u})\in U,$$

于是由循环轨道可得 $\boldsymbol{e}_i\in U\,(1\leq i\leq k)$, 从而 $U=L(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_k)$. $\square$

**解法 2** 任取非零 $\varphi$–不变子空间 $U$, 容易证明限制变换 $\varphi|_U$ 的特征多项式是 $\varphi$ 的特征多项式 $(\lambda-\lambda_0)^n$ 的因式, 不妨设为 $(\lambda-\lambda_0)^k$, 其中 $1\leq k\leq n$. 由 Cayley-Hamilton 定理可知 $U\subseteq\mathrm{Ker}(\varphi-\lambda_0 I_V)^k=\mathrm{Ker}\,\psi^k$. 任取 $\boldsymbol{v}=\sum_{i=1}^n c_i\boldsymbol{e}_i\in\mathrm{Ker}\,\psi^k$, 则

$$\boldsymbol{0}=\psi^k(\boldsymbol{v})=c_{k+1}\psi^k(\boldsymbol{e}_{k+1})+\cdots+c_n\psi^k(\boldsymbol{e}_n)=c_{k+1}\boldsymbol{e}_1+\cdots+c_n\boldsymbol{e}_{n-k},$$

于是 $c_{k+1}=\cdots=c_n=0$, 从而 $\mathrm{Ker}\,\psi^k=L(\boldsymbol{e}_1,\cdots,\boldsymbol{e}_k)$. 注意到 $k=\deg(\lambda-\lambda_0)^k=\dim U\leq\dim\mathrm{Ker}\,\psi^k=k$, 故 $U=\mathrm{Ker}\,\psi^k=L(\boldsymbol{e}_1,\cdots,\boldsymbol{e}_k)$. $\square$


> [!example] 例 7.91
> 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, 其特征多项式 $f(\lambda)$ 等于其极小多项式 $m(\lambda)$, 求所有的 $\varphi$–不变子空间.

**解** 设

$$f(\lambda)=m(\lambda)=(\lambda-\lambda_1)^{r_1}(\lambda-\lambda_2)^{r_2}\cdots(\lambda-\lambda_k)^{r_k},$$

其中 $\lambda_1,\lambda_2,\cdots,\lambda_k$ 是 $\varphi$ 的全体不同的特征值. 令 $V_i=\mathrm{Ker}(\varphi-\lambda_i I_V)^{r_i}$ 为对应的根子空间, 则 $V=V_1\oplus V_2\oplus\cdots\oplus V_k$. 设 $\varphi|_{V_i}$ 的特征多项式为 $f_i(\lambda)$, 极小多项式为 $m_i(\lambda)$, 则由例 7.87 可知, $f_i(\lambda)=m_i(\lambda)=(\lambda-\lambda_i)^{r_i}$. 任取 $V$ 的 $\varphi$–不变子空间 $U$, 设 $\varphi|_U$ 的特征多项式为 $g(\lambda)$, 则 $g(\lambda)\mid f(\lambda)$. 若设

$$g(\lambda)=(\lambda-\lambda_1)^{s_1}(\lambda-\lambda_2)^{s_2}\cdots(\lambda-\lambda_k)^{s_k},\quad U_i=\mathrm{Ker}(\varphi|_U-\lambda_i I_U)^{s_i},$$

则由例 7.87 可知, $U=U_1\oplus U_2\oplus\cdots\oplus U_k$, 其中 $U_i$ 是 $V_i$ 的 $\varphi$–不变子空间. 由例 7.90 的证明过程可得到 $U_i$ 的结构 (共有 $r_i+1$ 个), 进一步可得到 $\varphi$–不变子空间 $U$ 的结构. 因此, $V$ 的 $\varphi$–不变子空间一共有 $(r_1+1)(r_2+1)\cdots(r_k+1)$ 个. $\square$

> [!note]
> 若 $f(\lambda)\neq m(\lambda)$, 则存在某个特征值 $\lambda_0$, 它至少有两个初等因子, 从而其特征子空间的维数大于等于 $2$, 故此时 $V$ 有无穷个 $\varphi$–不变子空间. 由此可得: $n$ 维复线性空间 $V$ 是循环空间 $C(\varphi,\boldsymbol{\alpha})$ 的充要条件是 $V$ 只有有限个 $\varphi$–不变子空间.

---

#### § 7.11 一般数域上的相似标准型

前面已经介绍了复数域上 Jordan 标准型理论的众多应用, 不过有时我们需要考虑的问题仅在数域 $\mathbb{K}$ 上, 或者问题本身并不能延拓到复数域上, 这时我们就不能运用 Jordan 标准型这一工具了. 另一方面, 虽然在数域 $\mathbb{K}$ 上有有理标准型理论, 但有理标准型的确不够精细, 处理一些问题往往不够用. 因此遇到数域 $\mathbb{K}$ 上的相似问题, 我们该如何处理呢? 一般来说, 可以有 3 种处理方法. 第一种方法是先将问题转化成几何语言, 再利用线性变换理论进行研究; 第二种方法是先将问题转化成代数语言, 再把数域 $\mathbb{K}$ 上的矩阵自然地看成是复矩阵进行研究, 最后利用高等代数中若干概念在基域扩张下的不变性 (参考 [7]) 将所得结果返回到数域 $\mathbb{K}$ 上; 第三种方法是利用一般数域上基于初等因子的相似标准型理论对问题进行研究. 为了说明前两种方法, 我们来看数域 $\mathbb{K}$ 上的两个典型例题.

> [!example] 例 7.92
> 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\varphi$ 是 $V$ 上秩小于 $n$ 的线性变换, 求证: $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$ 的充要条件是 $0$ 是 $\varphi$ 的极小多项式的单根.

**分析** 当 $\mathbb{K}=\mathbb{C}$ 时, 可以利用 Jordan 标准型理论进行证明. 若特征值 $0$ 是 $\varphi$ 的极小多项式的单根, 则可设 $\varphi$ 的初等因子组为 $\lambda,\cdots,\lambda,(\lambda-\lambda_1)^{r_1},\cdots,(\lambda-\lambda_s)^{r_s}$, 其中 $\lambda_1,\cdots,\lambda_s$ 是非零特征值, 且有 $k$ 个 $\lambda$. 因此, 存在 $V$ 的一组基 $\boldsymbol{e}_1,\cdots,\boldsymbol{e}_k$, $\boldsymbol{e}_{k+1},\cdots,\boldsymbol{e}_n$, 使得 $\varphi$ 在这组基下的表示矩阵为 $\mathrm{diag}\{0,\cdots,0,\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_s}(\lambda_s)\}$. 容易验证 $\mathrm{Ker}\,\varphi=L(\boldsymbol{e}_1,\cdots,\boldsymbol{e}_k)$, $\mathrm{Im}\,\varphi=L(\boldsymbol{e}_{k+1},\cdots,\boldsymbol{e}_n)$, 于是 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$. 反之, 若 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$, 则 $\mathrm{Ker}\,\varphi\cap\mathrm{Im}\,\varphi=0$, 由例 7.40 充分性的证明可知, $\varphi$ 关于特征值 $0$ 的 Jordan 块都是一阶的, 因此 $0$ 是 $\varphi$ 的极小多项式的单根. 然而, 当 $\mathbb{K}\neq\mathbb{C}$ 时, 上述讨论就不再适用了, 并且本题的结论也不能简单地延拓到复数域上, 因为 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$ 是数域 $\mathbb{K}$ 上线性空间的直和分解, 一般并不能看成是复数域上线性空间的直和分解. 接下去让我们来看前两种方法是如何巧妙地解决问题的.


**证法 1** 若 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$, 则由例 4.36 可知, $\mathrm{Ker}\,\varphi=\mathrm{Ker}\,\varphi^2=\cdots$. 设 $\varphi$ 的极小多项式 $m(\lambda)=\lambda^k g(\lambda)$, 其中 $g(0)\neq 0$, 我们来证明 $k=1$. 用反证法, 假设 $k\geq 2$, 则对任意的 $\boldsymbol{\alpha}\in V$, 有 $\varphi^k g(\varphi)(\boldsymbol{\alpha})=\boldsymbol{0}$, 从而 $g(\varphi)(\boldsymbol{\alpha})\in\mathrm{Ker}\,\varphi^k=\mathrm{Ker}\,\varphi$, 于是 $\varphi g(\varphi)(\boldsymbol{\alpha})=\boldsymbol{0}$ 对任意的 $\boldsymbol{\alpha}\in V$ 成立, 即 $\varphi g(\varphi)=0$, 因此 $\varphi$ 适合多项式 $\lambda g(\lambda)$, 其次数比极小多项式的次数还小, 这就导出了矛盾. 反之, 设 $\varphi$ 的极小多项式 $m(\lambda)=\lambda g(\lambda)$, 其中 $g(0)\neq 0$, 则由例 6.94 的注 (2) 可知, $V=V_1\oplus V_2$, 其中 $V_1=\mathrm{Ker}\,\varphi=\mathrm{Im}\,g(\varphi)$, $V_2=\mathrm{Ker}\,g(\varphi)=\mathrm{Im}\,\varphi$, 于是 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$.

**证法 2** 由例 4.36 可知, $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$ 当且仅当 $\mathrm{r}(\varphi)=\mathrm{r}(\varphi^2)$, 因此我们只要证明: $\mathrm{r}(\varphi)=\mathrm{r}(\varphi^2)$ 当且仅当 $0$ 是 $\varphi$ 的极小多项式的单根. 任取 $\varphi$ 在某组基下的表示矩阵 $\boldsymbol{A}$, 则上述问题的代数版本是: $\mathrm{r}(\boldsymbol{A})=\mathrm{r}(\boldsymbol{A}^2)$ 当且仅当 $0$ 是 $\boldsymbol{A}$ 的极小多项式的单根. 注意到数域 $\mathbb{K}$ 上的矩阵可自然地看成是复矩阵, 并且矩阵的秩和极小多项式在基域扩张下不改变, 因此我们可以把 $\boldsymbol{A}$ 当作复矩阵进行证明 (即本题分析中的讨论, 其中用例 7.41 替代例 7.40 的引用), 具体细节请读者自行完成. $\square$

> [!example] 例 7.93
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 求证: $\boldsymbol{A}$ 相似于 $\mathrm{diag}\{\boldsymbol{B},\boldsymbol{C}\}$, 其中 $\boldsymbol{B}$ 是 $\mathbb{K}$ 上的幂零矩阵, $\boldsymbol{C}$ 是 $\mathbb{K}$ 上的可逆矩阵.

**分析** 本题是例 7.65 的推广, 即将复数域上的结论推广到数域 $\mathbb{K}$ 上. 不过, 例 7.65 的证明利用了 Jordan 标准型理论, 显然在数域 $\mathbb{K}$ 上不再适用. 通常当我们考虑线性变换的问题时, 数域都是事先给定的, 从而在讨论的过程中不会涉及数域的问题. 因此我们可用第一种方法来处理本题, 即把代数问题转化成几何问题, 然后再用线性变换理论加以解决. 本题的几何版本为: 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\varphi$ 是 $V$ 上的线性变换, 证明: $V=V_1\oplus V_2$, 其中 $V_1,V_2$ 都是 $\varphi$–不变子空间, 且 $\varphi|_{V_1}$ 是幂零线性变换, $\varphi|_{V_2}$ 是可逆线性变换. 我们可用两种几何方法来证明这一结论.

**证法 1** 设 $\varphi$ 的特征多项式为 $f(\lambda)=\lambda^k g(\lambda)$, 其中 $0\leq k\leq n$, $g(0)\neq 0$. 注意到 $(\lambda^k,g(\lambda))=1$, 故由例 6.94 可知, $V=V_1\oplus V_2$, 其中 $V_1=\mathrm{Ker}\,\varphi^k$, $V_2=\mathrm{Ker}\,g(\varphi)$, 并且 $\varphi|_{V_1}$ 的特征多项式是 $\lambda^k$, $\varphi|_{V_2}$ 的特征多项式是 $g(\lambda)$. 因此, $\varphi|_{V_1}$ 是幂零线性变换, 且由 $\varphi|_{V_2}$ 的行列式值为 $(-1)^{n-k}g(0)\neq 0$ 可知, $\varphi|_{V_2}$ 是可逆线性变换.

**证法 2** 由例 4.35 可知, 存在整数 $m\in[0,n]$, 使得

$$V=\mathrm{Ker}\,\varphi^m\oplus\mathrm{Im}\,\varphi^m,\quad \mathrm{Ker}\,\varphi^m=\mathrm{Ker}\,\varphi^{m+1}=\cdots,\quad \mathrm{Im}\,\varphi^m=\mathrm{Im}\,\varphi^{m+1}=\cdots.$$

令 $V_1=\mathrm{Ker}\,\varphi^m$, $V_2=\mathrm{Im}\,\varphi^m$, 则 $V=V_1\oplus V_2$. 因为 $V_1=\mathrm{Ker}\,\varphi^m$, 所以 $\varphi|_{V_1}$ 适合多项式 $\lambda^m$, 从而它是幂零线性变换. 因为 $\varphi|_{V_2}$ 的像空间是 $\varphi(\mathrm{Im}\,\varphi^m)=\mathrm{Im}\,\varphi^{m+1}=\mathrm{Im}\,\varphi^m$, 所以 $\varphi|_{V_2}$ 是满映射, 从而它是可逆线性变换. $\square$


上面只是比较简单的两道例题, 如果希望能更一般地处理数域 $\mathbb{K}$ 上的相似问题, 那么我们可以运用数域 $\mathbb{K}$ 上基于初等因子的相似标准型理论. 事实上, 例 7.19 已经给出了数域 $\mathbb{K}$ 上基于初等因子的有理标准型, 接下去我们将给出数域 $\mathbb{K}$ 上基于初等因子的 Jordan 标准型. 这一理论跟之前阐述的数域 $\mathbb{K}$ 上基于不变因子的有理标准型理论和复数域上的 Jordan 标准型理论之间有着密切的联系, 无论是从引入的方法, 还是从最终的结论来看, 这一理论都是前面两种理论的自然延续和推广, 因此不妨称之为**广义 Jordan 标准型理论**.

先固定一些常用的记号. 设 $P(\lambda)=\lambda^m+a_1\lambda^{m-1}+\cdots+a_{m-1}\lambda+a_m$ 是 $\mathbb{K}$ 上的首一多项式, 我们用 $\boldsymbol{F}(P(\lambda))$ 表示 $P(\lambda)$ 的 **Frobenius 块**:

$$\boldsymbol{F}(P(\lambda))=\begin{pmatrix}0&1&0&\cdots&0\\0&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\-a_m&-a_{m-1}&-a_{m-2}&\cdots&-a_1\end{pmatrix},$$

用 $\boldsymbol{C}_m$ 表示第 $(m,1)$ 元素为 $1$, 其他元素全为零的 $m$ 阶矩阵:

$$\boldsymbol{C}_m=\begin{pmatrix}0&0&0&\cdots&0\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\\1&0&0&\cdots&0\end{pmatrix}.$$

设 $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶矩阵, 其不变因子组为 $1,\cdots,1,d_1(\lambda),\cdots,d_k(\lambda)$, 其中 $d_i(\lambda)$ 是非常数首一多项式, $d_i(\lambda)\mid d_{i+1}(\lambda)\,(1\leq i\leq k-1)$. 根据定义, 所有不变因子 $d_i(\lambda)$ 的准素因子全体就是 $\boldsymbol{A}$ 的初等因子组, 因此 $\boldsymbol{A}$ 的初等因子必为 $P(\lambda)^e$ 的形状, 其中 $P(\lambda)$ 是 $\mathbb{K}$ 上的首一不可约多项式, $e\geq 1$.

> [!example] 例 7.94
> 设 $P(\lambda)=\lambda^m+a_1\lambda^{m-1}+\cdots+a_{m-1}\lambda+a_m$ 是 $\mathbb{K}$ 上的首一不可约多项式, $e$ 是正整数, 证明下列矩阵的不变因子组均为 $1,\cdots,1,P(\lambda)^e$:
> 
> $$(1)\;\boldsymbol{J}_e(P(\lambda))=\begin{pmatrix}\boldsymbol{F}(P(\lambda))&\boldsymbol{I}_m&\boldsymbol{O}&\cdots&\boldsymbol{O}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{F}(P(\lambda))&\boldsymbol{I}_m&\cdots&\boldsymbol{O}&\boldsymbol{O}\\\vdots&\vdots&\vdots&&\vdots&\vdots\\\boldsymbol{O}&\boldsymbol{O}&\boldsymbol{O}&\cdots&\boldsymbol{F}(P(\lambda))&\boldsymbol{I}_m\\\boldsymbol{O}&\boldsymbol{O}&\boldsymbol{O}&\cdots&\boldsymbol{O}&\boldsymbol{F}(P(\lambda))\end{pmatrix};$$
>
> $$(2)\;\widetilde{\boldsymbol{J}}_e(P(\lambda))=\begin{pmatrix}\boldsymbol{F}(P(\lambda))&\boldsymbol{C}_m&\boldsymbol{O}&\cdots&\boldsymbol{O}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{F}(P(\lambda))&\boldsymbol{C}_m&\cdots&\boldsymbol{O}&\boldsymbol{O}\\\vdots&\vdots&\vdots&&\vdots&\vdots\\\boldsymbol{O}&\boldsymbol{O}&\boldsymbol{O}&\cdots&\boldsymbol{F}(P(\lambda))&\boldsymbol{C}_m\\\boldsymbol{O}&\boldsymbol{O}&\boldsymbol{O}&\cdots&\boldsymbol{O}&\boldsymbol{F}(P(\lambda))\end{pmatrix}.$$


**证明** (1) 由有理标准型理论可知, $\boldsymbol{F}(P(\lambda))$ 的特征多项式和极小多项式都是 $P(\lambda)$, 故 $\boldsymbol{J}_e(P(\lambda))$ 的特征多项式为 $P(\lambda)^e$, 从而 $\boldsymbol{J}_e(P(\lambda))$ 的极小多项式为 $P(\lambda)^l$, 其中 $1\leq l\leq e$. 下面验证 $\boldsymbol{J}_e(P(\lambda))$ 不适合 $P(\lambda)^{e-1}$, 从而 $\boldsymbol{J}_e(P(\lambda))$ 的极小多项式必为 $P(\lambda)^e$. 以下简记 $g(\lambda)=P(\lambda)^{e-1}$, $\boldsymbol{F}=\boldsymbol{F}(P(\lambda))$, 则通过分块矩阵的计算可得

$$g(\boldsymbol{J}_e(P(\lambda)))=\begin{pmatrix}g(\boldsymbol{F})&\dfrac{1}{1!}g'(\boldsymbol{F})&\dfrac{1}{2!}g^{(2)}(\boldsymbol{F})&\cdots&\dfrac{1}{(e-1)!}g^{(e-1)}(\boldsymbol{F})\\&g(\boldsymbol{F})&\dfrac{1}{1!}g'(\boldsymbol{F})&\cdots&\dfrac{1}{(e-2)!}g^{(e-2)}(\boldsymbol{F})\\&&g(\boldsymbol{F})&\cdots&\dfrac{1}{(e-3)!}g^{(e-3)}(\boldsymbol{F})\\&&&\ddots&\vdots\\&&&&g(\boldsymbol{F})\end{pmatrix}.$$

由 Cayley-Hamilton 定理可得 $P(\boldsymbol{F})=\boldsymbol{O}$, 从而 $g^{(i)}(\boldsymbol{F})=\boldsymbol{O}\,(0\leq i\leq e-2)$, 但 $g^{(e-1)}(\boldsymbol{F})=(e-1)!P'(\boldsymbol{F})^{e-1}$. 由于 $P(\lambda)$ 是不可约多项式, 故 $(P(\lambda),P'(\lambda))=1$, 进一步有 $(P(\lambda),P'(\lambda)^{e-1})=1$, 从而由例 6.84 可知, $P'(\boldsymbol{F})^{e-1}$ 是可逆矩阵, 于是 $\dfrac{1}{(e-1)!}g^{(e-1)}(\boldsymbol{F})=P'(\boldsymbol{F})^{e-1}\neq\boldsymbol{O}$, 即有 $g(\boldsymbol{J}_e(P(\lambda)))\neq\boldsymbol{O}$. 因此 $\boldsymbol{J}_e(P(\lambda))$ 的极小多项式为 $P(\lambda)^e$, 其不变因子组为 $1,\cdots,1,P(\lambda)^e$.

(2) 我们来计算 $\widetilde{\boldsymbol{J}}_e(P(\lambda))$ 的 $me-1$ 阶行列式因子, 注意到特征矩阵 $\lambda\boldsymbol{I}-\widetilde{\boldsymbol{J}}_e(P(\lambda))$ 的前 $me-1$ 行、后 $me-1$ 列构成的 $me-1$ 阶子式是一个主对角元全为 $-1$ 的下三角行列式, 其值为 $(-1)^{me-1}$, 故 $\widetilde{\boldsymbol{J}}_e(P(\lambda))$ 的 $me-1$ 阶行列式因子为 $1$. 又 $\widetilde{\boldsymbol{J}}_e(P(\lambda))$ 的 $me$ 阶行列式因子为 $P(\lambda)^e$, 故其行列式因子组为 $1,\cdots,1,P(\lambda)^e$, 从而不变因子组也为 $1,\cdots,1,P(\lambda)^e$. $\square$


> [!example] 例 7.95
> 设 $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶矩阵, 它在 $\mathbb{K}$ 上的初等因子组为 $P_1(\lambda)^{e_1},P_2(\lambda)^{e_2},\cdots,P_t(\lambda)^{e_t}$, 其中 $P_i(\lambda)$ 是 $\mathbb{K}$ 上的首一不可约多项式, $e_i\geq 1$, $1\leq i\leq t$, 证明 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上相似于下列分块对角矩阵:
> 
> $$(1)\;\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{e_1}(P_1(\lambda)),\boldsymbol{J}_{e_2}(P_2(\lambda)),\cdots,\boldsymbol{J}_{e_t}(P_t(\lambda))\};$$
>
> $$(2)\;\widetilde{\boldsymbol{J}}=\mathrm{diag}\{\widetilde{\boldsymbol{J}}_{e_1}(P_1(\lambda)),\widetilde{\boldsymbol{J}}_{e_2}(P_2(\lambda)),\cdots,\widetilde{\boldsymbol{J}}_{e_t}(P_t(\lambda))\}.$$

**证明** 将 $\lambda\boldsymbol{I}-\boldsymbol{J}$ 和 $\lambda\boldsymbol{I}-\widetilde{\boldsymbol{J}}$ 按照每个分块依次进行 $\lambda$–矩阵的初等变换, 由例 7.94 可知, 上述两个矩阵都相抵于

$$\mathrm{diag}\{1,\cdots,1,P_1(\lambda)^{e_1};1,\cdots,1,P_2(\lambda)^{e_2};\cdots;1,\cdots,1,P_t(\lambda)^{e_t}\}.$$

由例 7.10 可知, $\boldsymbol{J}$ 和 $\widetilde{\boldsymbol{J}}$ 的初等因子组都是 $P_1(\lambda)^{e_1},P_2(\lambda)^{e_2},\cdots,P_t(\lambda)^{e_t}$, 即它们与 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上有相同的初等因子组, 因此它们与 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上相似. $\square$

> [!note]
> 例 7.95 中的 $\boldsymbol{J}$ 和 $\widetilde{\boldsymbol{J}}$ 均称为数域 $\mathbb{K}$ 上基于初等因子的**广义 Jordan 标准型**. 当 $\mathbb{K}=\mathbb{C}$ 时, 注意到不可约多项式都是一次的, 故可设 $P(\lambda)=\lambda-\lambda_0$, 则例 7.94 中


的广义 Jordan 块 $\boldsymbol{J}_e(P(\lambda))$ 和 $\widetilde{\boldsymbol{J}}_e(P(\lambda))$ 都变成了复数域上的 Jordan 块 $\boldsymbol{J}_e(\lambda_0)$, 广义 Jordan 标准型 $\boldsymbol{J}$ 和 $\widetilde{\boldsymbol{J}}$ 都变成了复数域上的 Jordan 标准型. $\boldsymbol{J}$ 和 $\widetilde{\boldsymbol{J}}$ 之间的区别只是形式上的, 即对每个广义 Jordan 块而言, 其上次对角线上的矩阵一个是单位矩阵 $\boldsymbol{I}_m$, 一个是矩阵 $\boldsymbol{C}_m$. 从本质上看, 这两种广义 Jordan 标准型其实是一致的, 只不过在一些具体问题的讨论中, 各有各的用途而已.

下面我们来看一看实数域上的广义 Jordan 标准型.

> [!example] 例 7.96
> 设 $\boldsymbol{A}$ 是实数域上的 $n$ 阶矩阵, 证明 $\boldsymbol{A}$ 在实数域上相似于下列分块对角矩阵:
>
> $$(1)\;\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k),\boldsymbol{J}_{s_1}(a_1,b_1),\cdots,\boldsymbol{J}_{s_l}(a_l,b_l)\};$$
>
> $$(2)\;\widetilde{\boldsymbol{J}}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k),\widetilde{\boldsymbol{J}}_{s_1}(a_1,b_1),\cdots,\widetilde{\boldsymbol{J}}_{s_l}(a_l,b_l)\},$$
>
> 其中 $\lambda_1,\cdots,\lambda_k,a_1,b_1,\cdots,a_l,b_l$ 都是实数, $b_1,\cdots,b_l$ 都非零, $\boldsymbol{J}_{r_i}(\lambda_i)$ 表示以 $\lambda_i$ 为特征值的通常意义下的 Jordan 块, $\boldsymbol{R}_j=\begin{pmatrix}a_j&b_j\\-b_j&a_j\end{pmatrix}$, $\boldsymbol{C}_2=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, 且

$$\boldsymbol{J}_{s_j}(a_j,b_j)=\begin{pmatrix}\boldsymbol{R}_j&\boldsymbol{I}_2&&&\\&\boldsymbol{R}_j&\boldsymbol{I}_2&&\\&&\ddots&\ddots&\\&&&\boldsymbol{R}_j&\boldsymbol{I}_2\\&&&&\boldsymbol{R}_j\end{pmatrix},\quad \widetilde{\boldsymbol{J}}_{s_j}(a_j,b_j)=\begin{pmatrix}\boldsymbol{R}_j&\boldsymbol{C}_2&&&\\&\boldsymbol{R}_j&\boldsymbol{C}_2&&\\&&\ddots&\ddots&\\&&&\boldsymbol{R}_j&\boldsymbol{C}_2\\&&&&\boldsymbol{R}_j\end{pmatrix}.$$

**证明** 注意到实数域上的不可约多项式是一次多项式或者是判别式小于零的二次多项式, 故可设 $\boldsymbol{A}$ 的初等因子组为 $(\lambda-\lambda_1)^{r_1},\cdots,(\lambda-\lambda_k)^{r_k},((\lambda-a_1)^2+b_1^2)^{s_1},\cdots,((\lambda-a_l)^2+b_l^2)^{s_l}$, 其中 $\lambda_1,\cdots,\lambda_k,a_1,b_1,\cdots,a_l,b_l$ 都是实数, 且 $b_1,\cdots,b_l$ 都非零.

(1) 由例 7.95 (1) 可知, $\boldsymbol{A}$ 实相似于 $\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k),\boldsymbol{J}_{s_1}((\lambda-a_1)^2+b_1^2),\cdots,\boldsymbol{J}_{s_l}((\lambda-a_l)^2+b_l^2)\}$, 注意到 $\boldsymbol{F}((\lambda-a_j)^2+b_j^2)=\begin{pmatrix}0&1\\-(a_j^2+b_j^2)&2a_j\end{pmatrix}$ 与 $\boldsymbol{R}_j=\begin{pmatrix}a_j&b_j\\-b_j&a_j\end{pmatrix}$ 有相同的特征值 $a_j\pm\mathrm{i}b_j$, 故它们在复数域上, 从而也在实数域上相似. 因为 $\boldsymbol{J}_{s_j}((\lambda-a_j)^2+b_j^2)$ 的上次对角线都是 $\boldsymbol{I}_2$, 所以不难把这种相似关系扩张到整个广义 Jordan 块上, 从而 $\boldsymbol{J}_{s_j}((\lambda-a_j)^2+b_j^2)$ 实相似于 $\boldsymbol{J}_{s_j}(a_j,b_j)$, 于是 $\boldsymbol{A}$ 实相似于 $\boldsymbol{J}$.

(2) 因为 $\widetilde{\boldsymbol{J}}_{s_j}((\lambda-a_j)^2+b_j^2)$ 的上次对角线都是 $\boldsymbol{C}_2$, 所以用例 7.95 (2) 很难推出第二个结论, 这里我们采用直接计算 $\widetilde{\boldsymbol{J}}_{s_j}(a_j,b_j)$ 的不变因子组的方法来证明. 注意到


$\lambda\boldsymbol{I}-\widetilde{\boldsymbol{J}}_{s_j}(a_j,b_j)$ 右上方的 $2s_j-1$ 阶子式等于 $(-1)^{2s_j-1}b_j^{s_j}\neq 0$, 故 $\widetilde{\boldsymbol{J}}_{s_j}(a_j,b_j)$ 的 $2s_j-1$ 阶行列式因子为 $1$, 于是其行列式因子组和不变因子组均为 $1,\cdots,1,((\lambda-a_j)^2+b_j^2)^{s_j}$. 由 $\lambda$–矩阵的初等变换以及例 7.10 可知, $\boldsymbol{A}$ 和 $\widetilde{\boldsymbol{J}}$ 在实数域上有相同的初等因子组, 从而它们在实数域上相似. $\square$

下面我们同时用数域 $\mathbb{K}$ 上基于初等因子的有理标准型和广义 Jordan 标准型给出例 7.92 和例 7.93 的第三种证法.

**例 7.92 的证法 3** 设 $\varphi$ 在 $\mathbb{K}$ 上的初等因子为 $\lambda^{r_1},\cdots,\lambda^{r_k},P_1(\lambda)^{e_1},\cdots,P_t(\lambda)^{e_t}$, 其中 $P_1(\lambda),\cdots,P_t(\lambda)$ 是 $\mathbb{K}$ 上常数项非零的不可约多项式, 则由例 7.19 或例 7.95 可知, 存在 $V$ 的一组基 $\{\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵为

$$\mathrm{diag}\{\boldsymbol{F}(\lambda^{r_1}),\cdots,\boldsymbol{F}(\lambda^{r_k}),\boldsymbol{F}(P_1(\lambda)^{e_1}),\cdots,\boldsymbol{F}(P_t(\lambda)^{e_t})\}\;\text{或}$$

$$\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0),\boldsymbol{J}_{e_1}(P_1(\lambda)),\cdots,\boldsymbol{J}_{e_t}(P_t(\lambda))\}.$$

若特征值 $0$ 是 $\varphi$ 的极小多项式的单根, 则 $r_1=\cdots=r_k=1$, 容易验证 $\mathrm{Ker}\,\varphi=L(\boldsymbol{e}_1,\cdots,\boldsymbol{e}_k)$, $\mathrm{Im}\,\varphi=L(\boldsymbol{e}_{k+1},\cdots,\boldsymbol{e}_n)$, 从而 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$. 反之, 若 $V=\mathrm{Ker}\,\varphi\oplus\mathrm{Im}\,\varphi$, 则 $\mathrm{Ker}\,\varphi\cap\mathrm{Im}\,\varphi=0$. 若存在某个 $r_i>1$, 比如说 $r_1>1$, 则由例 7.40 的充分性完全类似的证明可知, $\boldsymbol{0}\neq\boldsymbol{e}_1\in\mathrm{Ker}\,\varphi\cap\mathrm{Im}\,\varphi$, 这就推出了矛盾. 因此, $r_1=\cdots=r_k=1$, 从而 $0$ 是 $\varphi$ 的极小多项式的单根. $\square$

**例 7.93 的证法 3** 设 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上的初等因子为 $\lambda^{r_1},\cdots,\lambda^{r_k},P_1(\lambda)^{e_1},\cdots,P_t(\lambda)^{e_t}$, 其中 $P_1(\lambda),\cdots,P_t(\lambda)$ 是 $\mathbb{K}$ 上常数项非零的不可约多项式, 则由例 7.19 或例 7.95 可知, $\boldsymbol{A}$ 在 $\mathbb{K}$ 上相似于分块对角矩阵

$$\mathrm{diag}\{\boldsymbol{F}(\lambda^{r_1}),\cdots,\boldsymbol{F}(\lambda^{r_k}),\boldsymbol{F}(P_1(\lambda)^{e_1}),\cdots,\boldsymbol{F}(P_t(\lambda)^{e_t})\}\;\text{或}$$

$$\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0),\boldsymbol{J}_{e_1}(P_1(\lambda)),\cdots,\boldsymbol{J}_{e_t}(P_t(\lambda))\}.$$

令 $\boldsymbol{B}=\mathrm{diag}\{\boldsymbol{F}(\lambda^{r_1}),\cdots,\boldsymbol{F}(\lambda^{r_k})\}$ 或 $\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, $\boldsymbol{C}=\mathrm{diag}\{\boldsymbol{F}(P_1(\lambda)^{e_1}),\cdots,\boldsymbol{F}(P_t(\lambda)^{e_t})\}$ 或 $\mathrm{diag}\{\boldsymbol{J}_{e_1}(P_1(\lambda)),\cdots,\boldsymbol{J}_{e_t}(P_t(\lambda))\}$, 则由每个 $\boldsymbol{F}(\lambda^{r_i})$ 或 $\boldsymbol{J}_{r_i}(0)$ 都幂零可知 $\boldsymbol{B}$ 是幂零矩阵, 由每个 $\boldsymbol{F}(P_j(\lambda)^{e_j})$ 或 $\boldsymbol{J}_{e_j}(P_j(\lambda))$ 的行列式的绝对值为 $P_j(0)^{e_j}\neq 0$ 可知 $\boldsymbol{C}$ 是可逆矩阵, 因此结论成立. $\square$

利用广义 Jordan 标准型理论可以证明 $\mathbb{K}$ 上的 Jordan-Chevalley 分解定理.

> [!example] 例 7.97
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 证明存在 $\mathbb{K}$ 上的 $n$ 阶矩阵 $\boldsymbol{B},\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{B}+\boldsymbol{C}$, 且满足:
>
> (1) $\boldsymbol{B}$ 在复数域上可对角化; $\quad$ (2) $\boldsymbol{C}$ 是幂零矩阵; $\quad$ (3) $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{C}\boldsymbol{B}$,
>
> 并且满足上述条件的分解一定是唯一的.


**证明** 设 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上的初等因子组为 $P_1(\lambda)^{e_1},\cdots,P_t(\lambda)^{e_t}$, 其中 $P_i(\lambda)$ 是 $\mathbb{K}$ 上的首一不可约多项式. 由例 7.95 可知, $\boldsymbol{A}$ 在 $\mathbb{K}$ 上相似于广义 Jordan 标准型 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{e_1}(P_1(\lambda)),\cdots,\boldsymbol{J}_{e_t}(P_t(\lambda))\}$. 对每个广义 Jordan 块 $\boldsymbol{J}_{e}(P(\lambda))$, 设 $P(\lambda)$ 在 $\mathbb{C}$ 上的根为 $\lambda_1,\cdots,\lambda_m$, 则 $\boldsymbol{F}(P(\lambda))$ 在 $\mathbb{C}$ 上相似于 $\mathrm{diag}\{\lambda_1,\cdots,\lambda_m\}$, 因此 $\boldsymbol{J}_{e}(P(\lambda))$ 在 $\mathbb{C}$ 上相似于 Jordan 标准型, 其主对角线上的元素都是 $\boldsymbol{F}(P(\lambda))$ 的特征值. 令 $\boldsymbol{B}_0$ 为将 $\boldsymbol{J}$ 中每个广义 Jordan 块 $\boldsymbol{J}_{e}(P(\lambda))$ 替换为 $\mathrm{diag}\{\boldsymbol{F}(P(\lambda)),\cdots,\boldsymbol{F}(P(\lambda))\}$ (共 $e$ 个) 所得到的矩阵, 则 $\boldsymbol{B}_0$ 在复数域上可对角化. 令 $\boldsymbol{C}_0=\boldsymbol{J}-\boldsymbol{B}_0$, 则 $\boldsymbol{C}_0$ 是幂零矩阵, 且 $\boldsymbol{B}_0\boldsymbol{C}_0=\boldsymbol{C}_0\boldsymbol{B}_0$. 设 $\boldsymbol{P}$ 为非异阵使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 令 $\boldsymbol{B}=\boldsymbol{P}\boldsymbol{B}_0\boldsymbol{P}^{-1}$, $\boldsymbol{C}=\boldsymbol{P}\boldsymbol{C}_0\boldsymbol{P}^{-1}$, 则 $\boldsymbol{A}=\boldsymbol{B}+\boldsymbol{C}$, 且满足条件 (1)(2)(3).

下证唯一性. 设 $\boldsymbol{A}=\boldsymbol{B}_1+\boldsymbol{C}_1$ 是另一满足条件的分解, 则 $\boldsymbol{B}_1$ 在复数域上可对角化, $\boldsymbol{C}_1$ 幂零, 且 $\boldsymbol{B}_1\boldsymbol{C}_1=\boldsymbol{C}_1\boldsymbol{B}_1$. 由于 $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{C}\boldsymbol{B}$ 且 $\boldsymbol{B}_1\boldsymbol{C}_1=\boldsymbol{C}_1\boldsymbol{B}_1$, 故 $\boldsymbol{B}$ 与 $\boldsymbol{C}$ 可同时对角化 (在复数域上), $\boldsymbol{B}_1$ 与 $\boldsymbol{C}_1$ 也可同时对角化. 由 $\boldsymbol{A}=\boldsymbol{B}+\boldsymbol{C}=\boldsymbol{B}_1+\boldsymbol{C}_1$ 可得 $\boldsymbol{B}-\boldsymbol{B}_1=\boldsymbol{C}_1-\boldsymbol{C}$, 左边是两个可对角化矩阵之差且可交换, 故可对角化; 右边是两个幂零矩阵之差且可交换, 故幂零. 因此 $\boldsymbol{B}-\boldsymbol{B}_1$ 既可对角化又幂零, 从而为零矩阵, 即 $\boldsymbol{B}=\boldsymbol{B}_1$, 于是 $\boldsymbol{C}=\boldsymbol{C}_1$. $\square$

> [!note]
> 例 7.97 就是著名的 **Jordan-Chevalley 分解定理**. 当 $\mathbb{K}=\mathbb{C}$ 时, 这就是例 7.33. 在例 7.97 中, 若 $\boldsymbol{A}$ 在复数域上的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$, 则 $\boldsymbol{B}$ 相似于 $\mathrm{diag}\{\lambda_1\boldsymbol{I}_{r_1},\cdots,\lambda_k\boldsymbol{I}_{r_k}\}$, $\boldsymbol{C}$ 相似于 $\mathrm{diag}\{\boldsymbol{N}_{r_1},\cdots,\boldsymbol{N}_{r_k}\}$, 其中 $\boldsymbol{N}_{r_i}=\boldsymbol{J}_{r_i}(0)$.

---

#### § 7.12 基础训练

##### 训练题

> [!exercise]
> **1.** 求下列矩阵的 Jordan 标准型:
>
> $$(1)\;\begin{pmatrix}1&2&0\\0&2&0\\-2&-2&-1\end{pmatrix};\quad (2)\;\begin{pmatrix}3&0&8\\3&-1&6\\-2&0&-5\end{pmatrix};\quad (3)\;\begin{pmatrix}3&1&0&0\\-4&-1&0&0\\7&1&2&1\\-7&-6&-1&0\end{pmatrix}.$$


> [!exercise]
> **2.** 求下列矩阵的 Jordan 标准型, 并求过渡矩阵:
>
> $$(1)\;\begin{pmatrix}2&-1&-1\\2&-1&-2\\-1&1&2\end{pmatrix};\quad (2)\;\begin{pmatrix}4&-1&1&-7\\9&-2&-7&-1\\0&0&5&-8\\0&0&2&-3\end{pmatrix}.$$

> [!exercise]
> **3.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $|\boldsymbol{A}|=2$, 求 $|\boldsymbol{A}^*+\boldsymbol{A}^{-1}|$.

> [!exercise]
> **4.** 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, $\boldsymbol{B}$ 为 $n$ 阶矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$. 若 $\boldsymbol{A}+\boldsymbol{B}$ 可逆, 证明: $\boldsymbol{B}$ 可逆.

> [!exercise]
> **5.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 满足 $\mathrm{tr}\,\boldsymbol{A}=\mathrm{tr}\,\boldsymbol{A}^2=\cdots=\mathrm{tr}\,\boldsymbol{A}^n=0$, 证明: $\boldsymbol{A}$ 是幂零矩阵.

> [!exercise]
> **6.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{A}$, 证明: $\boldsymbol{A}$ 可对角化.

> [!exercise]
> **7.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{I}_n$, 证明: $\boldsymbol{A}$ 可对角化.

> [!exercise]
> **8.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^k=\boldsymbol{I}_n$, 证明: $\boldsymbol{A}$ 可对角化.

> [!exercise]
> **9.** 设 $\boldsymbol{A}$ 为 $n$ 阶非零矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{O}$, 证明: $\boldsymbol{A}$ 不可对角化.

> [!exercise]
> **10.** 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$, 证明: $\boldsymbol{A}^{r+1}=\boldsymbol{O}$.

> [!exercise]
> **11.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 证明: $\boldsymbol{A}^2$ 的每个特征值都是 $\boldsymbol{A}$ 的某个特征值的平方.

> [!exercise]
> **12.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $|\boldsymbol{A}|=1$. 若 $\boldsymbol{A}$ 的特征值全为正数, 证明: $\boldsymbol{A}$ 的特征值全为 $1$.

> [!exercise]
> **13.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}^m=\boldsymbol{I}_n$, 证明: $\boldsymbol{A}$ 相似于对角矩阵.

> [!exercise]
> **14.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $|\boldsymbol{A}|=2$. 若 $\boldsymbol{A}^*+\boldsymbol{A}-4\boldsymbol{I}_n$ 是幂零矩阵, 求 $\boldsymbol{A}$ 的 Jordan 标准型.


> [!exercise]
> **15.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的极小多项式 $m(\lambda)$ 满足 $m(\lambda)\mid\lambda^k-1$, 证明: $\boldsymbol{A}$ 相似于对角矩阵.

> [!exercise]
> **16.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $|\boldsymbol{A}|=1$. 若 $\boldsymbol{A}$ 的特征值全为正数, 证明: $\boldsymbol{A}=\boldsymbol{B}^2$ 对某个实矩阵 $\boldsymbol{B}$ 成立.

> [!exercise]
> **17.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 证明: $\boldsymbol{A}$ 的 Jordan 标准型中, 对应于特征值 $0$ 的 Jordan 块的个数为 $n-r$.

> [!exercise]
> **18.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的特征多项式等于其极小多项式. 若 $\boldsymbol{B}$ 与 $\boldsymbol{A}$ 可交换, 证明: $\boldsymbol{B}$ 可表示为 $\boldsymbol{A}$ 的多项式.

> [!exercise]
> **19.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的 Jordan 标准型中只有一个 Jordan 块. 若 $\boldsymbol{B}$ 与 $\boldsymbol{A}$ 可交换, 证明: $\boldsymbol{B}$ 可表示为 $\boldsymbol{A}$ 的多项式.

> [!exercise]
> **20.** 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 证明: $\boldsymbol{A}$ 的幂零指数不超过 $r+1$.

> [!exercise]
> **21.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的特征多项式等于其极小多项式. 证明: $\boldsymbol{A}$ 的每个特征子空间的维数都等于 $1$.

> [!exercise]
> **22.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的特征值全为 $1$. 证明: 对任意的正整数 $k$, $\boldsymbol{A}^k$ 与 $\boldsymbol{A}$ 相似.

> [!exercise]
> **23.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $|\boldsymbol{A}|=1$. 若 $\boldsymbol{A}$ 的特征值全为正数, 且 $\boldsymbol{A}$ 的特征多项式等于其极小多项式, 证明: $\boldsymbol{A}=\boldsymbol{B}^2$ 对某个实矩阵 $\boldsymbol{B}$ 成立.

> [!exercise]
> **24.** 设 $\boldsymbol{A}$ 为 $n$ 阶矩阵, 且 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}$. 若 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$, 证明: $\boldsymbol{P}$ 可表示为 $\boldsymbol{A}$ 的多项式当且仅当 $\boldsymbol{P}$ 与 $\boldsymbol{A}$ 可交换.

> [!exercise]
> **25.** 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 证明: $\boldsymbol{A}$ 相似于严格上三角矩阵.


##### 训练题答案

> [!solution]
> **1.** (1) $\mathrm{diag}\{-1,1,2\}$; $\quad$ (2) $\mathrm{diag}\{-1,\boldsymbol{J}_2(-1)\}$; $\quad$ (3) $\mathrm{diag}\{1,\boldsymbol{J}_2(1),\boldsymbol{J}_2(1)\}$.

> [!solution]
> **2.** (1) Jordan 标准型为 $\boldsymbol{J}_3(1)$, 过渡矩阵可取 $\boldsymbol{P}=\begin{pmatrix}1&1&0\\1&0&0\\-1&0&1\end{pmatrix}$;
>
> (2) Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_2(1),\boldsymbol{J}_2(1)\}$, 过渡矩阵可取 $\boldsymbol{P}=\begin{pmatrix}1&0&5&0\\3&0&0&0\\0&0&6&\frac{3}{2}\\0&0&3&0\end{pmatrix}$.

> [!solution]
> **3.** 设 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\cdots,\lambda_n$, 则 $|\boldsymbol{A}|=\lambda_1\cdots\lambda_n=2$. 由 $\boldsymbol{A}^*=|\boldsymbol{A}|\boldsymbol{A}^{-1}=2\boldsymbol{A}^{-1}$ 可知 $|\boldsymbol{A}^*+\boldsymbol{A}^{-1}|=|3\boldsymbol{A}^{-1}|=3^n|A|^{-1}=\dfrac{3^n}{2}$.

> [!solution]
> **4.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}$, $\boldsymbol{P}$ 为非异阵使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\boldsymbol{J}$. 因为 $\boldsymbol{A}$ 幂零, 故 $\boldsymbol{A}$ 的特征值全为 $0$, 从而 $\boldsymbol{J}$ 是严格上三角矩阵, 且 $|\boldsymbol{J}+\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}|=|\boldsymbol{P}^{-1}(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{P}|\neq 0$. 设 $\boldsymbol{B}_0=\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$, 则 $|\boldsymbol{J}+\boldsymbol{B}_0|\neq 0$. 由 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$ 可知 $\boldsymbol{J}\boldsymbol{B}_0=\boldsymbol{B}_0\boldsymbol{J}$. 设 $\boldsymbol{B}_0=(b_{ij})$, 由 $\boldsymbol{J}\boldsymbol{B}_0=\boldsymbol{B}_0\boldsymbol{J}$ 及 $\boldsymbol{J}$ 严格上三角可知 $b_{11}=b_{22}=\cdots=b_{nn}$, 再由 $|\boldsymbol{J}+\boldsymbol{B}_0|\neq 0$ 可知 $b_{ii}\neq 0$, 故 $\boldsymbol{B}_0$ 可逆, 从而 $\boldsymbol{B}$ 可逆.

> [!solution]
> **5.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$. 由 $\mathrm{tr}\,\boldsymbol{A}^m=\sum_{i=1}^k r_i\lambda_i^m=0\,(1\leq m\leq n)$ 及 Newton 恒等式可知, 对 $\boldsymbol{A}$ 的每个特征值 $\lambda_i$ 及其代数重数 $r_i$, 都有 $\lambda_i=0$. 因此 $\boldsymbol{A}$ 的特征值全为 $0$, 即 $\boldsymbol{A}$ 是幂零矩阵.

> [!solution]
> **6.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$. 由 $\boldsymbol{A}^2=\boldsymbol{A}$ 可知 $\boldsymbol{J}^2=\boldsymbol{J}$, 从而每个 $\boldsymbol{J}_{r_i}(\lambda_i)^2=\boldsymbol{J}_{r_i}(\lambda_i)$. 若 $r_i\geq 2$, 则比较 $\boldsymbol{J}_{r_i}(\lambda_i)^2$ 与 $\boldsymbol{J}_{r_i}(\lambda_i)$ 的 $(1,2)$ 元素可得 $2\lambda_i=1$, 比较 $(1,3)$ 元素可得 $1=0$, 矛盾. 因此 $r_i=1$, 即 $\boldsymbol{A}$ 可对角化.

> [!solution]
> **7.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$. 由 $\boldsymbol{A}^2=\boldsymbol{I}_n$ 可知 $\boldsymbol{J}^2=\boldsymbol{I}_n$, 从而每个 $\boldsymbol{J}_{r_i}(\lambda_i)^2=\boldsymbol{I}_{r_i}$. 若 $r_i\geq 2$, 则 $\boldsymbol{J}_{r_i}(\lambda_i)^2$ 的 $(1,2)$ 元素为 $2\lambda_i$, 而 $\boldsymbol{I}_{r_i}$ 的 $(1,2)$ 元素为 $0$, 故 $\lambda_i=0$, 但此时 $\boldsymbol{J}_{r_i}(0)^2\neq\boldsymbol{I}_{r_i}$, 矛盾. 因此 $r_i=1$, 即 $\boldsymbol{A}$ 可对角化.

> [!solution]
> **8.** 由例 7.69 即得. $\boldsymbol{A}^k=\boldsymbol{I}_n$ 的特征值全为 $1$ 的 $k$ 次单位根, 因此 $\boldsymbol{A}$ 的初等因子组中每个初等因子的次数不超过 $1$, 即 $\boldsymbol{A}$ 可对角化.

> [!solution]
> **9.** 若 $\boldsymbol{A}$ 可对角化, 则由 $\boldsymbol{A}^2=\boldsymbol{O}$ 可知 $\boldsymbol{A}=\boldsymbol{O}$, 这与 $\boldsymbol{A}\neq\boldsymbol{O}$ 矛盾. 因此 $\boldsymbol{A}$ 不可对角化.

> [!solution]
> **10.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, 其中 $r_1\geq r_2\geq\cdots\geq r_k\geq 1$, $r_1+\cdots+r_k=n$. 由 $\mathrm{r}(\boldsymbol{A})=r$ 可知 $n-k=r$, 即 $k=n-r$. 于是 $r_1\leq n-(k-1)=r+1$, 从而 $\boldsymbol{A}^{r+1}=\boldsymbol{O}$.

> [!solution]
> **11.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$, 则 $\boldsymbol{A}^2$ 相似于 $\boldsymbol{J}^2=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1)^2,\cdots,\boldsymbol{J}_{r_k}(\lambda_k)^2\}$. 由例 7.70 可知, $\boldsymbol{J}_{r_i}(\lambda_i)^2$ 的特征值为 $\lambda_i^2$, 因此 $\boldsymbol{A}^2$ 的每个特征值都是 $\boldsymbol{A}$ 的某个特征值的平方.

> [!solution]
> **12.** 设 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\cdots,\lambda_n$, 则 $\lambda_i>0$ 且 $\lambda_1\cdots\lambda_n=1$. 由例 7.66 的证明可知, $\boldsymbol{A}$ 相似于对角矩阵, 故 $\boldsymbol{A}$ 可对角化, 从而其 Jordan 标准型为对角矩阵. 设 $f(x)=\ln x$, 则 $f(\lambda_1)+\cdots+f(\lambda_n)=\ln(\lambda_1\cdots\lambda_n)=0$. 由例 7.81 可知 $\mathrm{tr}\,\ln\boldsymbol{A}=0$. 由于 $\ln\boldsymbol{A}$ 的特征值为 $\ln\lambda_1,\cdots,\ln\lambda_n$, 且 $\boldsymbol{A}=\boldsymbol{e}^{\ln\boldsymbol{A}}$, 由例 7.82 可知 $|\boldsymbol{A}|=\boldsymbol{e}^{\mathrm{tr}\,\ln\boldsymbol{A}}=1$, 这已知成立. 进一步分析可知所有 $\lambda_i=1$.

> [!solution]
> **13.** 由例 7.69 即得. $\boldsymbol{A}^m=\boldsymbol{I}_n$ 说明 $\boldsymbol{A}$ 的初等因子组中每个初等因子的次数不超过 $1$.

> [!solution]
> **14.** 由 $|\boldsymbol{A}|=2$ 可知 $\boldsymbol{A}^*=2\boldsymbol{A}^{-1}$. 设 $\boldsymbol{B}=\boldsymbol{A}^*+\boldsymbol{A}-4\boldsymbol{I}_n=2\boldsymbol{A}^{-1}+\boldsymbol{A}-4\boldsymbol{I}_n$, 则 $\boldsymbol{B}$ 幂零. 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}$, 则 $\boldsymbol{B}$ 相似于 $2\boldsymbol{J}^{-1}+\boldsymbol{J}-4\boldsymbol{I}_n$, 后者也幂零. 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda)$, $2\boldsymbol{J}_r(\lambda)^{-1}+\boldsymbol{J}_r(\lambda)-4\boldsymbol{I}_r$ 幂零当且仅当 $2\lambda^{-1}+\lambda-4=0$, 即 $(\lambda-2)^2=0$, 故 $\lambda=2$. 因此 $\boldsymbol{A}$ 的特征值全为 $2$. 若 $\boldsymbol{A}$ 有阶数大于 $1$ 的 Jordan 块, 则经过计算可知 $2\boldsymbol{J}_r(2)^{-1}+\boldsymbol{J}_r(2)-4\boldsymbol{I}_r$ 不是幂零矩阵, 矛盾. 因此 $\boldsymbol{A}$ 的 Jordan 标准型为 $2\boldsymbol{I}_n$.

> [!solution]
> **15.** 由 $m(\lambda)\mid\lambda^k-1$ 可知 $m(\lambda)$ 无重根, 因此 $\boldsymbol{A}$ 相似于对角矩阵.

> [!solution]
> **16.** 由例 7.68 即得.

> [!solution]
> **17.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0),\boldsymbol{J}_{s_1}(\lambda_1),\cdots,\boldsymbol{J}_{s_l}(\lambda_l)\}$, 其中 $\lambda_i\neq 0$. 则 $\mathrm{r}(\boldsymbol{A})=\mathrm{r}(\boldsymbol{J})=(r_1-1)+\cdots+(r_k-1)+s_1+\cdots+s_l=n-k$, 故 $k=n-r$, 即对应于特征值 $0$ 的 Jordan 块的个数为 $n-r$.

> [!solution]
> **18.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$, 其中 $r_1+\cdots+r_k=n$, 且 $\lambda_1,\cdots,\lambda_k$ 互不相同. 设 $\boldsymbol{B}_0=\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 与 $\boldsymbol{J}$ 可交换, 其中 $\boldsymbol{P}$ 为非异阵. 由 $\boldsymbol{B}_0\boldsymbol{J}=\boldsymbol{J}\boldsymbol{B}_0$ 及 $\lambda_i$ 互不相同可知 $\boldsymbol{B}_0$ 与 $\boldsymbol{J}$ 同为分块对角矩阵, 且每个对角块与对应的 Jordan 块可交换. 由例 7.64 的推广可知, 与 $\boldsymbol{J}_{r_i}(\lambda_i)$ 可交换的矩阵可表示为 $\boldsymbol{J}_{r_i}(\lambda_i)$ 的多项式, 从而 $\boldsymbol{B}_0$ 可表示为 $\boldsymbol{J}$ 的多项式, 因此 $\boldsymbol{B}$ 可表示为 $\boldsymbol{A}$ 的多项式.

> [!solution]
> **19.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\boldsymbol{J}_n(\lambda)$, 则与例 7.64 的证明类似可得结论.

> [!solution]
> **20.** 由例 7.84 即得.

> [!solution]
> **21.** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(\lambda_1),\cdots,\boldsymbol{J}_{r_k}(\lambda_k)\}$. 由特征多项式等于极小多项式可知 $\lambda_1,\cdots,\lambda_k$ 互不相同, 且每个 $r_i$ 是 $\lambda_i$ 在初等因子组中的最大重数. 特征值 $\lambda_i$ 的特征子空间的维数等于以 $\lambda_i$ 为特征值的 Jordan 块的个数, 而由特征多项式等于极小多项式可知每个特征值只有一个 Jordan 块, 故特征子空间的维数等于 $1$.

> [!solution]
> **22.** 由例 7.79 即得.

> [!solution]
> **23.** 由例 7.68 即得.

> [!solution]
> **24.** 若 $\boldsymbol{P}=f(\boldsymbol{A})$, 则 $\boldsymbol{P}\boldsymbol{A}=\boldsymbol{A}\boldsymbol{P}$. 反之, 若 $\boldsymbol{P}\boldsymbol{A}=\boldsymbol{A}\boldsymbol{P}$, 则 $\boldsymbol{P}\boldsymbol{J}=\boldsymbol{J}\boldsymbol{P}$, 由例 7.64 的推广可知 $\boldsymbol{P}$ 可表示为 $\boldsymbol{J}$ 的多项式, 从而 $\boldsymbol{P}$ 可表示为 $\boldsymbol{A}$ 的多项式.

> [!solution]
> **25.** 幂零矩阵的特征值全为 $0$, 其 Jordan 标准型为严格上三角矩阵, 故 $\boldsymbol{A}$ 相似于严格上三角矩阵. $\square$


---


