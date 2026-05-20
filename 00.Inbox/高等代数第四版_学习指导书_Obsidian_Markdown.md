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

## 第1章 行列式

行列式是线性代数中最基本的概念之一，它不仅是研究线性方程组、矩阵和特征值等问题的有力工具，还在许多其他数学分支和实际问题中有着广泛的应用。本章我们将系统地介绍行列式的各种计算方法以及相关的重要结论。

---


### §1.1 基本概念

**定义 1.1** $n$ 阶行列式定义为

$$|\boldsymbol{A}| = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix} = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{1k_1}a_{2k_2} \cdots a_{nk_n}.$$

其中 $S_n$ 是 $\{1, 2, \cdots, n\}$ 上所有排列构成的集合，$N(k_1, k_2, \cdots, k_n)$ 是排列 $k_1, k_2, \cdots, k_n$ 的逆序数。

**定义 1.2** 在 $n$ 阶行列式 $|\boldsymbol{A}|$ 中，划去元素 $a_{ij}$ 所在的第 $i$ 行和第 $j$ 列后，剩下的 $(n-1)^2$ 个元素按原来的顺序构成一个 $n-1$ 阶行列式，称为元素 $a_{ij}$ 的**余子式**，记作 $M_{ij}$；而 $A_{ij} = (-1)^{i+j}M_{ij}$ 称为元素 $a_{ij}$ 的**代数余子式**。

**定理 1.1** (Laplace 展开定理) 设 $|\boldsymbol{A}|$ 为 $n$ 阶行列式，则有

$$|\boldsymbol{A}| = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in} \quad (1 \leq i \leq n),$$

或

$$|\boldsymbol{A}| = a_{1j}A_{1j} + a_{2j}A_{2j} + \cdots + a_{nj}A_{nj} \quad (1 \leq j \leq n).$$

以上两式分别称为行列式按第 $i$ 行的展开和按第 $j$ 列的展开。

**推论 1.1** 设 $|\boldsymbol{A}|$ 为 $n$ 阶行列式，当 $i \neq j$ 时，有

$$a_{i1}A_{j1} + a_{i2}A_{j2} + \cdots + a_{in}A_{jn} = 0,$$

$$a_{1i}A_{1j} + a_{2i}A_{2j} + \cdots + a_{ni}A_{nj} = 0.$$

行列式具有以下基本性质：

**性质 1** 行列式与其转置行列式的值相等，即 $|\boldsymbol{A}| = |\boldsymbol{A}'|$。

**性质 2** 行列式的两行（列）互换，行列式的值改变符号。

**性质 3** 行列式的某一行（列）中所有元素都乘以同一个数 $k$，等于用 $k$ 乘此行列式。

**性质 4** 行列式中如果有两行（列）元素成比例，则此行列式等于零。

**性质 5** 若行列式的某一列（行）的元素都是两数之和，则此行列式等于两个行列式之和。

**性质 6** 把行列式的某一列（行）的各元素乘以同一数然后加到另一列（行）对应的元素上去，行列式的值不变。

---


**例 1.1** 计算行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 1 \\ 3 & 4 & 1 & 2 \\ 4 & 1 & 2 & 3 \end{vmatrix}.$$

> [!solution]-
> 解 将各列都加到第一列上，得
> $$|\boldsymbol{A}| = \begin{vmatrix} 10 & 2 & 3 & 4 \\ 10 & 3 & 4 & 1 \\ 10 & 4 & 1 & 2 \\ 10 & 1 & 2 & 3 \end{vmatrix} = 10 \begin{vmatrix} 1 & 2 & 3 & 4 \\ 1 & 3 & 4 & 1 \\ 1 & 4 & 1 & 2 \\ 1 & 1 & 2 & 3 \end{vmatrix}.$$
> 将第一行乘以 $-1$ 分别加到其余各行，得
> $$|\boldsymbol{A}| = 10 \begin{vmatrix} 1 & 2 & 3 & 4 \\ 0 & 1 & 1 & -3 \\ 0 & 2 & -2 & -2 \\ 0 & -1 & -1 & -1 \end{vmatrix} = 10 \begin{vmatrix} 1 & 1 & -3 \\ 2 & -2 & -2 \\ -1 & -1 & -1 \end{vmatrix} = 160. \quad \square$$

**例 1.2** 计算行列式

$$D_n = \begin{vmatrix} a & b & b & \cdots & b \\ b & a & b & \cdots & b \\ b & b & a & \cdots & b \\ \vdots & \vdots & \vdots & & \vdots \\ b & b & b & \cdots & a \end{vmatrix}.$$

> [!solution]-
> 解 将各列都加到第一列上，提出公因子 $a + (n-1)b$，得
> $$D_n = [a + (n-1)b] \begin{vmatrix} 1 & b & b & \cdots & b \\ 1 & a & b & \cdots & b \\ 1 & b & a & \cdots & b \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & b & b & \cdots & a \end{vmatrix}.$$
> 将第一行乘以 $-1$ 分别加到其余各行，得
> $$D_n = [a + (n-1)b](a-b)^{n-1}. \quad \square$$

---


**例 1.3** 计算行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & -1 & 1 & x-1 \\ 1 & -1 & x+1 & -1 \\ 1 & x-1 & 1 & -1 \\ x+1 & -1 & 1 & -1 \end{vmatrix}.$$

> [!solution]-
> 解 将各列都加到第一列上，提出公因子 $x$，得
> $$|\boldsymbol{A}| = x \begin{vmatrix} 1 & -1 & 1 & x-1 \\ 1 & -1 & x+1 & -1 \\ 1 & x-1 & 1 & -1 \\ 1 & -1 & 1 & -1 \end{vmatrix}.$$
> 再将第一列分别加到第二、四列上，第一列乘以 $-1$ 加到第三列上，可得一个上三角分块行列式，求得
> $$|\boldsymbol{A}| = x^4. \quad \square$$

**例 1.4** (爪型行列式) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_1 & b_2 & b_3 & \cdots & b_n \\ c_2 & a_2 & 0 & \cdots & 0 \\ c_3 & 0 & a_3 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ c_n & 0 & 0 & \cdots & a_n \end{vmatrix},$$

其中 $a_i \neq 0\ (2 \leq i \leq n)$。

> [!solution]-
> 解 将第 $i$ 列乘以 $-\dfrac{c_i}{a_i}$ 加到第一列上 $(i = 2, 3, \cdots, n)$，得
> $$|\boldsymbol{A}| = \left(a_1 - \sum_{i=2}^{n} \frac{b_i c_i}{a_i}\right) a_2 a_3 \cdots a_n. \quad \square$$

---


### §1.2 降阶法

降阶法就是利用 Laplace 展开定理，将一个 $n$ 阶行列式展开成若干个 $n-1$ 阶行列式的线性组合。当行列式的某一行（列）含有较多的零元素时，使用降阶法尤为有效。

**例 1.5** (除主对角元素外每行相等型) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} x_1 & a_2 & a_3 & \cdots & a_n \\ a_1 & x_2 & a_3 & \cdots & a_n \\ a_1 & a_2 & x_3 & \cdots & a_n \\ \vdots & \vdots & \vdots & & \vdots \\ a_1 & a_2 & a_3 & \cdots & x_n \end{vmatrix},$$

其中 $x_i \neq a_i\ (1 \leq i \leq n)$。

> [!solution]-
> 解 令 $y_i = x_i - a_i\ (1 \leq i \leq n)$，将第 $i$ 列乘以 $-1$ 加到第 $i+1$ 列上 $(i = n-1, n-2, \cdots, 1)$，得
> $$|\boldsymbol{A}| = \prod_{i=1}^{n} y_i \begin{vmatrix} \dfrac{x_1}{y_1} & \dfrac{a_2}{y_2} & \dfrac{a_3}{y_3} & \cdots & \dfrac{a_n}{y_n} \\ -1 & 1 & 0 & \cdots & 0 \\ -1 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ -1 & 0 & 0 & \cdots & 1 \end{vmatrix}.$$
> 将各列都加到第一列上，得
> $$|\boldsymbol{A}| = \prod_{i=1}^{n}(x_i - a_i)\left(1 + \sum_{i=1}^{n}\frac{a_i}{x_i - a_i}\right). \quad \square$$

---


**例 1.6** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 2 & 3 & \cdots & n \\ 2 & 1 & 2 & \cdots & n-1 \\ 3 & 2 & 1 & \cdots & n-2 \\ \vdots & \vdots & \vdots & & \vdots \\ n & n-1 & n-2 & \cdots & 1 \end{vmatrix}.$$

> [!solution]-
> 解 从最后一行起，每一行减去前一行，得到一个下三角分块形式的行列式，再利用 Laplace 定理按第一列展开，可得
> $$|\boldsymbol{A}| = (-1)^{n-1} 2^{n-2}(n+1). \quad \square$$

**例 1.7** (添加一行一列型) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 + x_1^2 & x_1 x_2 & \cdots & x_1 x_n \\ x_2 x_1 & 1 + x_2^2 & \cdots & x_2 x_n \\ \vdots & \vdots & & \vdots \\ x_n x_1 & x_n x_2 & \cdots & 1 + x_n^2 \end{vmatrix}.$$

> [!solution]-
> 解 采用升阶法。考虑 $n+1$ 阶行列式
> $$|\boldsymbol{B}| = \begin{vmatrix} 1 & x_1 & x_2 & \cdots & x_n \\ 0 & 1+x_1^2 & x_1 x_2 & \cdots & x_1 x_n \\ 0 & x_2 x_1 & 1+x_2^2 & \cdots & x_2 x_n \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & x_n x_1 & x_n x_2 & \cdots & 1+x_n^2 \end{vmatrix}.$$
> 将第一行乘以 $-x_i$ 加到第 $i+1$ 行 $(i = 1, 2, \cdots, n)$，得
> $$|\boldsymbol{B}| = \begin{vmatrix} 1 & x_1 & x_2 & \cdots & x_n \\ -x_1 & 1 & 0 & \cdots & 0 \\ -x_2 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ -x_n & 0 & 0 & \cdots & 1 \end{vmatrix} = 1 + \sum_{i=1}^{n} x_i^2. \quad \square$$

---


### §1.3 求和法

求和法的基本思想是：当行列式的各行（列）元素之和相等时，可以将各列（行）加到某一列（行）上，从而提取公因子，简化计算。

**例 1.8** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} x & a & a & \cdots & a \\ a & x & a & \cdots & a \\ a & a & x & \cdots & a \\ \vdots & \vdots & \vdots & & \vdots \\ a & a & a & \cdots & x \end{vmatrix}.$$

> [!solution]-
> 解 这是例 1.2 的特例。将各列加到第一列，提出公因子 $x + (n-1)a$，再将第一行乘以 $-1$ 加到其余各行，得
> $$|\boldsymbol{A}| = [x + (n-1)a](x-a)^{n-1}. \quad \square$$

**例 1.9** 计算 $n$ 阶循环行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_0 & a_1 & a_2 & \cdots & a_{n-1} \\ a_{n-1} & a_0 & a_1 & \cdots & a_{n-2} \\ a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3} \\ \vdots & \vdots & \vdots & & \vdots \\ a_1 & a_2 & a_3 & \cdots & a_0 \end{vmatrix}.$$

> [!solution]-
> 解 令 $\omega_k = e^{\frac{2k\pi i}{n}}\ (k = 0, 1, \cdots, n-1)$ 为 $n$ 次单位根。将第 $j$ 列乘以 $\omega_k^{j-1}$ 后加到第一列 $(j = 2, 3, \cdots, n)$，得
> $$f(\omega_k) = a_0 + a_1 \omega_k + a_2 \omega_k^2 + \cdots + a_{n-1} \omega_k^{n-1}.$$
> 因此
> $$|\boldsymbol{A}| = \prod_{k=0}^{n-1} f(\omega_k) = \prod_{k=0}^{n-1} \left(\sum_{j=0}^{n-1} a_j \omega_k^j\right). \quad \square$$

---


### §1.4 递推法与数学归纳法

递推法是根据行列式的特点，建立 $n$ 阶行列式 $D_n$ 与较低阶同类型行列式之间的递推关系，然后通过递推求出 $D_n$。数学归纳法则是先计算 $n = 1, 2$ 时的值，归纳猜想出一般公式，再用数学归纳法加以证明。

**例 1.10** (三对角行列式) 计算 $n$ 阶行列式

$$D_n = \begin{vmatrix} a+b & ab & 0 & \cdots & 0 \\ 1 & a+b & ab & \cdots & 0 \\ 0 & 1 & a+b & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \cdots & a+b \end{vmatrix}.$$

> [!solution]-
> 解 按第一行展开，得递推关系
> $$D_n = (a+b)D_{n-1} - ab D_{n-2}.$$
> 由 $D_1 = a+b$，$D_2 = a^2 + ab + b^2$，利用特征方程法或迭代法求解递推关系，得
> $$D_n = \begin{cases} \dfrac{a^{n+1} - b^{n+1}}{a - b}, & a \neq b, \\ (n+1)a^n, & a = b. \end{cases} \quad \square$$

**例 1.11** (对称三对角行列式) 证明：$n$ 阶行列式

$$D_n = \begin{vmatrix} 2\cos\theta & 1 & 0 & \cdots & 0 \\ 1 & 2\cos\theta & 1 & \cdots & 0 \\ 0 & 1 & 2\cos\theta & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \cdots & 2\cos\theta \end{vmatrix} = \frac{\sin(n+1)\theta}{\sin\theta}.$$

> [!proof]-
> 证明 按第一行展开，得递推关系 $D_n = 2\cos\theta \cdot D_{n-1} - D_{n-2}$。
> 当 $n = 1$ 时，$D_1 = 2\cos\theta = \dfrac{\sin 2\theta}{\sin\theta}$，结论成立。
> 假设对一切 $k < n$ 结论成立，则
> $$D_n = 2\cos\theta \cdot \frac{\sin n\theta}{\sin\theta} - \frac{\sin(n-1)\theta}{\sin\theta} = \frac{\sin(n+1)\theta}{\sin\theta}.$$
> 由数学归纳法，结论得证。 $\square$

---


### §1.5 拆分法

拆分法是利用行列式的性质 5，将行列式的某一行（列）拆分成两组数之和，从而将一个行列式拆成两个行列式之和。适当拆分可以使问题简化。

**例 1.12** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} x_1 & a & \cdots & a \\ b & x_2 & \cdots & a \\ \vdots & \vdots & & \vdots \\ b & b & \cdots & x_n \end{vmatrix}.$$

> [!solution]-
> 解 将最后一列拆分为 $(a, a, \cdots, a)' + (0, 0, \cdots, x_n - a)'$，得
> $$|\boldsymbol{A}| = a \prod_{i=1}^{n-1}(x_i - b) + (x_n - a)|\boldsymbol{A}_{n-1}|.$$
> 由对称性（将 $a$ 与 $b$ 互换），又有
> $$|\boldsymbol{A}| = b \prod_{i=1}^{n-1}(x_i - a) + (x_n - b)|\boldsymbol{A}_{n-1}|.$$
> 联立消去 $|\boldsymbol{A}_{n-1}|$，得
> $$|\boldsymbol{A}| = \frac{a\prod_{i=1}^{n}(x_i - b) - b\prod_{i=1}^{n}(x_i - a)}{a - b}\ (a \neq b). \quad \square$$

---


**例 1.13** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_1 + x_1 & a_2 & a_3 & \cdots & a_n \\ a_1 & a_2 + x_2 & a_3 & \cdots & a_n \\ a_1 & a_2 & a_3 + x_3 & \cdots & a_n \\ \vdots & \vdots & \vdots & & \vdots \\ a_1 & a_2 & a_3 & \cdots & a_n + x_n \end{vmatrix}.$$

> [!solution]-
> 解 将各列都加到第一列上，得
> $$|\boldsymbol{A}| = \begin{vmatrix} x_1 + \sum a_i & a_2 & a_3 & \cdots & a_n \\ x_2 + \sum a_i & a_2 + x_2 & a_3 & \cdots & a_n \\ x_3 + \sum a_i & a_2 & a_3 + x_3 & \cdots & a_n \\ \vdots & \vdots & \vdots & & \vdots \\ \sum a_i & a_2 & a_3 & \cdots & a_n + x_n \end{vmatrix}.$$
> 进一步化简可得
> $$|\boldsymbol{A}| = x_1 x_2 \cdots x_n \left(1 + \sum_{i=1}^{n} \frac{a_i}{x_i}\right). \quad \square$$

### §1.6 Vandermonde 行列式

Vandermonde 行列式是一类重要的特殊行列式，它在插值理论、多项式理论以及许多计算问题中有着广泛的应用。

**例 1.14** (Vandermonde 行列式) 证明：$n$ 阶 Vandermonde 行列式

$$V_n = \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ x_1 & x_2 & x_3 & \cdots & x_n \\ x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2 \\ \vdots & \vdots & \vdots & & \vdots \\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & \cdots & x_n^{n-1} \end{vmatrix} = \prod_{1 \leq i < j \leq n}(x_j - x_i).$$

> [!proof]-
> 证明 用数学归纳法。当 $n = 2$ 时，$V_2 = x_2 - x_1$，结论成立。
> 假设对 $n-1$ 阶 Vandermonde 行列式结论成立。对 $V_n$，从第 $n$ 行起，每行减去前一行的 $x_1$ 倍，然后按第一列展开，提取各列公因子，得
> $$V_n = \prod_{j=2}^{n}(x_j - x_1) \cdot V_{n-1}(x_2, x_3, \cdots, x_n).$$
> 由归纳假设即得结论。 $\square$

---


**例 1.15** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ x_1^2 & x_2^2 & \cdots & x_n^2 \\ \vdots & \vdots & & \vdots \\ x_1^{n-2} & x_2^{n-2} & \cdots & x_n^{n-2} \\ x_1^n & x_2^n & \cdots & x_n^n \end{vmatrix}.$$

> [!solution]-
> 解 考虑 $n+1$ 阶 Vandermonde 行列式 $V_{n+1}(x_1, x_2, \cdots, x_n, y)$，其中 $y$ 为新变量。将 $V_{n+1}$ 按最后一列展开，$y^{n-1}$ 的系数即为 $(-1)^{2n+1}|\boldsymbol{A}|$。另一方面，由 Vandermonde 行列式的公式，$y^{n-1}$ 的系数为
> $$-\sum_{i=1}^{n}x_i \prod_{1 \leq i < j \leq n}(x_j - x_i).$$
> 因此
> $$|\boldsymbol{A}| = \left(\sum_{i=1}^{n}x_i\right) \prod_{1 \leq i < j \leq n}(x_j - x_i). \quad \square$$

**例 1.16** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_1^{n-1} & a_1^{n-2}b_1 & \cdots & b_1^{n-1} \\ a_2^{n-1} & a_2^{n-2}b_2 & \cdots & b_2^{n-1} \\ \vdots & \vdots & & \vdots \\ a_n^{n-1} & a_n^{n-2}b_n & \cdots & b_n^{n-1} \end{vmatrix}.$$

> [!solution]-
> 解 当 $a_i \neq 0$ 时，从第 $i$ 行提出 $a_i^{n-1}$，得
> $$|\boldsymbol{A}| = \prod_{i=1}^{n}a_i^{n-1} \begin{vmatrix} 1 & \dfrac{b_1}{a_1} & \cdots & \left(\dfrac{b_1}{a_1}\right)^{n-1} \\ 1 & \dfrac{b_2}{a_2} & \cdots & \left(\dfrac{b_2}{a_2}\right)^{n-1} \\ \vdots & \vdots & & \vdots \\ 1 & \dfrac{b_n}{a_n} & \cdots & \left(\dfrac{b_n}{a_n}\right)^{n-1} \end{vmatrix} = \prod_{i=1}^{n}a_i^{n-1} \prod_{1 \leq i < j \leq n}\left(\frac{b_j}{a_j} - \frac{b_i}{a_i}\right)$$
> $$= \prod_{1 \leq i < j \leq n}(a_i b_j - a_j b_i). \quad \square$$

---


**例 1.17** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & x_1 & x_1^2 & \cdots & x_1^{n-2} & x_1^n \\ 1 & x_2 & x_2^2 & \cdots & x_2^{n-2} & x_2^n \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 1 & x_n & x_n^2 & \cdots & x_n^{n-2} & x_n^n \end{vmatrix}.$$

> [!solution]-
> 解 类似于例 1.15，考虑 $n+1$ 阶 Vandermonde 行列式，比较 $y^{n-1}$ 的系数，得
> $$|\boldsymbol{A}| = \left(\sum_{1 \leq i \leq j \leq n} x_i x_j\right) \prod_{1 \leq i < j \leq n}(x_j - x_i). \quad \square$$

### §1.7 升阶法

升阶法是在原有的 $n$ 阶行列式上添写一行和一列，使其变成一个 $n+1$ 阶行列式。适当选择添写的元素，可以使升阶后的行列式更易于计算。

**例 1.18** (Cauchy 行列式) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} \dfrac{1}{a_1 + b_1} & \dfrac{1}{a_1 + b_2} & \cdots & \dfrac{1}{a_1 + b_n} \\ \dfrac{1}{a_2 + b_1} & \dfrac{1}{a_2 + b_2} & \cdots & \dfrac{1}{a_2 + b_n} \\ \vdots & \vdots & & \vdots \\ \dfrac{1}{a_n + b_1} & \dfrac{1}{a_n + b_2} & \cdots & \dfrac{1}{a_n + b_n} \end{vmatrix}.$$

> [!solution]-
> 解 利用升阶法。考虑 $n+1$ 阶行列式，第一行和第一列适当选取元素，使得利用行列式性质可以化简。最终可得
> $$|\boldsymbol{A}| = \dfrac{\prod_{1 \leq i < j \leq n}(a_j - a_i)(b_j - b_i)}{\prod_{i,j=1}^{n}(a_i + b_j)}. \quad \square$$

---


**例 1.19** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 + a_1^2 & a_1 a_2 & \cdots & a_1 a_n \\ a_2 a_1 & 1 + a_2^2 & \cdots & a_2 a_n \\ \vdots & \vdots & & \vdots \\ a_n a_1 & a_n a_2 & \cdots & 1 + a_n^2 \end{vmatrix}.$$

> [!solution]-
> 解 采用升阶法。考虑
> $$|\boldsymbol{B}| = \begin{vmatrix} 1 & a_1 & a_2 & \cdots & a_n \\ 0 & 1+a_1^2 & a_1 a_2 & \cdots & a_1 a_n \\ 0 & a_2 a_1 & 1+a_2^2 & \cdots & a_2 a_n \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & a_n a_1 & a_n a_2 & \cdots & 1+a_n^2 \end{vmatrix}.$$
> 将第一行乘以 $-a_i$ 加到第 $i+1$ 行 $(i = 1, 2, \cdots, n)$，得
> $$|\boldsymbol{B}| = \begin{vmatrix} 1 & a_1 & a_2 & \cdots & a_n \\ -a_1 & 1 & 0 & \cdots & 0 \\ -a_2 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ -a_n & 0 & 0 & \cdots & 1 \end{vmatrix} = 1 + \sum_{i=1}^{n} a_i^2. \quad \square$$

**例 1.20** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_1 & x & x & \cdots & x \\ x & a_2 & x & \cdots & x \\ x & x & a_3 & \cdots & x \\ \vdots & \vdots & \vdots & & \vdots \\ x & x & x & \cdots & a_n \end{vmatrix}.$$

> [!solution]-
> 解 利用升阶法，考虑添加一行一列，得
> $$|\boldsymbol{A}| = \prod_{i=1}^{n}(a_i - x)\left(1 + x\sum_{i=1}^{n}\frac{1}{a_i - x}\right). \quad \square$$

---


**例 1.21** 设 $f_{ij}(t)$ 是可微函数，

$$F(t) = \begin{vmatrix} f_{11}(t) & f_{12}(t) & \cdots & f_{1n}(t) \\ f_{21}(t) & f_{22}(t) & \cdots & f_{2n}(t) \\ \vdots & \vdots & & \vdots \\ f_{n1}(t) & f_{n2}(t) & \cdots & f_{nn}(t) \end{vmatrix},$$

求证：$\dfrac{\mathrm{d}}{\mathrm{d}t}F(t) = \displaystyle\sum_{j=1}^{n} F_j(t)$，其中

$$F_j(t) = \begin{vmatrix} f_{11}(t) & \cdots & \dfrac{\mathrm{d}}{\mathrm{d}t}f_{1j}(t) & \cdots & f_{1n}(t) \\ f_{21}(t) & \cdots & \dfrac{\mathrm{d}}{\mathrm{d}t}f_{2j}(t) & \cdots & f_{2n}(t) \\ \vdots & & \vdots & & \vdots \\ f_{n1}(t) & \cdots & \dfrac{\mathrm{d}}{\mathrm{d}t}f_{nj}(t) & \cdots & f_{nn}(t) \end{vmatrix}.$$

> [!proof]-
> 证法 1 利用行列式的组合定义，逐项求导即可得证。
>
> 证法 2 由行列式的组合定义可得
> $$F(t) = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} f_{k_1 1}(t)f_{k_2 2}(t) \cdots f_{k_n n}(t).$$
> 因此
> $$\frac{\mathrm{d}}{\mathrm{d}t}F(t) = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} f'_{k_1 1}(t)f_{k_2 2}(t) \cdots f_{k_n n}(t)$$
> $$+ \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} f_{k_1 1}(t)f'_{k_2 2}(t) \cdots f_{k_n n}(t)$$
> $$+ \cdots + \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} f_{k_1 1}(t)f_{k_2 2}(t) \cdots f'_{k_n n}(t)$$
> $$= F_1(t) + F_2(t) + \cdots + F_n(t). \quad \square$$

---


**例 1.22** (元素增量相等型) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 2 & 3 & \cdots & n \\ 2 & 3 & 4 & \cdots & 1 \\ 3 & 4 & 5 & \cdots & 2 \\ \vdots & \vdots & \vdots & & \vdots \\ n & 1 & 2 & \cdots & n-1 \end{vmatrix}.$$

> [!solution]-
> 解 将各列加到第一列上，提出公因子 $\dfrac{n(n+1)}{2}$，然后将第 $n$ 行起，逐行减去前一行，再利用 Laplace 展开，可得
> $$|\boldsymbol{A}| = (-1)^{\frac{n(n-1)}{2}} \frac{n^{n-1}(n+1)}{2}. \quad \square$$

**例 1.23** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a & b & \cdots & b & b \\ c & a & \cdots & b & b \\ \vdots & \vdots & & \vdots & \vdots \\ c & c & \cdots & a & b \\ c & c & \cdots & c & a \end{vmatrix}.$$

> [!solution]-
> 解 将行列式拆分为两部分，利用递推关系可得
> $$|\boldsymbol{A}| = \frac{b(a-c)^n - c(a-b)^n}{b-c}\ (b \neq c). \quad \square$$

---


### §1.8 求根法

求根法是利用多项式的因式分解来计算行列式。如果一个行列式的值是关于变量 $x$ 的多项式 $f(x)$，我们可以通过以下步骤来求 $f(x)$：

设 $n$ 阶行列式 $|\boldsymbol{A}|$ 的元素 $a_{ij} = a_{ij}(x_1, x_2, \cdots, x_m)$ 都是关于未定元 $x_1, x_2, \cdots, x_m$ 的多项式，则 $|\boldsymbol{A}|$ 是一个多元多项式。若把 $x_1$ 看成主未定元，则可将 $|\boldsymbol{A}|$ 整理成关于 $x_1$ 的一元多项式：

$$|\boldsymbol{A}| = c_0(x_2, \cdots, x_m)x_1^d + c_1(x_2, \cdots, x_m)x_1^{d-1} + \cdots + c_d(x_2, \cdots, x_m), \tag{1.9}$$

其中 $c_0(x_2, \cdots, x_m) \neq 0$，$d \geq 1$ 为次数。假设存在互异的多项式 $g_1(x_2, \cdots, x_m), \cdots, g_d(x_2, \cdots, x_m)$，使得当 $x_1 = g_i(x_2, \cdots, x_m)\ (1 \leq i \leq d)$ 时 $|\boldsymbol{A}| = 0$，则

$$|\boldsymbol{A}| = c_0(x_2, \cdots, x_m) \cdot \bigl(x_1 - g_1(x_2, \cdots, x_m)\bigr) \cdots \bigl(x_1 - g_d(x_2, \cdots, x_m)\bigr).$$

**求根法的原理**

(1) 确定主未定元 $x_1$ 的次数 $d$ 以及方程 (1.9) 的 $d$ 个不同的根 $g_i(x_2, \cdots, x_m)$；

(2) 首项系数 $c_0(x_2, \cdots, x_m)$ 或可直接得到，或可通过第一步的方法继续确定；

(3) 若 $|\boldsymbol{A}|$ 是对称多项式，则可将主未定元进行轮换，简化讨论的过程。

---


**例 1.24** 设 $f_1(x), f_2(x), \cdots, f_n(x)$ 是次数不超过 $n-2$ 的多项式，求证：对任意 $n$ 个数 $a_1, a_2, \cdots, a_n$，均有

$$\begin{vmatrix} f_1(a_1) & f_2(a_1) & \cdots & f_n(a_1) \\ f_1(a_2) & f_2(a_2) & \cdots & f_n(a_2) \\ \vdots & \vdots & & \vdots \\ f_1(a_n) & f_2(a_n) & \cdots & f_n(a_n) \end{vmatrix} = 0.$$

> [!proof]-
> 证法 1 作多项式
> $$f(x) = \begin{vmatrix} f_1(x) & f_2(x) & \cdots & f_n(x) \\ f_1(a_2) & f_2(a_2) & \cdots & f_n(a_2) \\ \vdots & \vdots & & \vdots \\ f_1(a_n) & f_2(a_n) & \cdots & f_n(a_n) \end{vmatrix}.$$
> 若 $a_2, \cdots, a_n$ 中有相同者，则显然 $f(x) = 0$。若 $a_2, \cdots, a_n$ 互不相同，则 $f(a_i) = 0\ (2 \leq i \leq n)$，即 $f(x)$ 有 $n-1$ 个不同的根。但 $f(x)$ 次数不超过 $n-2$，故 $f(x) \equiv 0$，从而 $f(a_1) = 0$。 $\square$
>
> 证法 2 作行列式
> $$g(x) = \begin{vmatrix} f_1(x) & f_2(x) & \cdots & f_n(x) \\ f_1(a_2) & f_2(a_2) & \cdots & f_n(a_2) \\ \vdots & \vdots & & \vdots \\ f_1(a_n) & f_2(a_n) & \cdots & f_n(a_n) \end{vmatrix},$$
> 这是一个次数不超过 $n-2$ 的多项式。若 $a_2, \cdots, a_n$ 中有相同者，则显然 $g(x) = 0$。若 $a_2, \cdots, a_n$ 互不相同，则由 $g(a_i) = 0\ (2 \leq i \leq n)$ 可知 $g(x)$ 有 $n-1$ 个不同的根，再由例 1.30 可得 $g(x) = 0$。总之，$g(x)$ 是一个恒为零的多项式，因此原行列式的值 $g(a_1) = 0$。 $\square$

---


**例 1.25** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ 1 & 2 & 3 & \cdots & n \\ 1 & 2^2 & 3^2 & \cdots & n^2 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 2^{n-1} & 3^{n-1} & \cdots & n^{n-1} \end{vmatrix}.$$

> [!solution]-
> 解 这是 Vandermonde 行列式的直接应用，
> $$|\boldsymbol{A}| = \prod_{1 \leq i < j \leq n}(j - i) = \prod_{k=1}^{n-1} k!. \quad \square$$

**例 1.26** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} x_1 & x_2 & x_3 & \cdots & x_n \\ x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2 \\ x_1^3 & x_2^3 & x_3^3 & \cdots & x_n^3 \\ \vdots & \vdots & \vdots & & \vdots \\ x_1^n & x_2^n & x_3^n & \cdots & x_n^n \end{vmatrix}.$$

> [!solution]-
> 解 从第 $i$ 行提出公因子 $x_i\ (i = 1, 2, \cdots, n)$，得
> $$|\boldsymbol{A}| = \prod_{i=1}^{n}x_i \cdot V_n(x_1, x_2, \cdots, x_n) = \prod_{i=1}^{n}x_i \prod_{1 \leq i < j \leq n}(x_j - x_i). \quad \square$$

---


**例 1.27** (类 Vandermonde 行列式) 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & x_1 & x_1^2 & \cdots & x_1^{n-2} & x_1^n \\ 1 & x_2 & x_2^2 & \cdots & x_2^{n-2} & x_2^n \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 1 & x_n & x_n^2 & \cdots & x_n^{n-2} & x_n^n \end{vmatrix}.$$

> [!solution]-
> 解 类似于例 1.15，利用 $n+1$ 阶 Vandermonde 行列式比较系数，可得
> $$|\boldsymbol{A}| = \left(\sum_{i=1}^{n}x_i\right) \prod_{1 \leq i < j \leq n}(x_j - x_i). \quad \square$$

**例 1.28** 计算 $n+1$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} a_0 & 1 & 1 & \cdots & 1 \\ 1 & a_1 & 0 & \cdots & 0 \\ 1 & 0 & a_2 & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 0 & 0 & \cdots & a_n \end{vmatrix}.$$

> [!solution]-
> 解 利用降阶法，按第一行展开，或者利用升阶法，得
> $$|\boldsymbol{A}| = a_0 a_1 a_2 \cdots a_n \left(1 - \sum_{i=1}^{n}\frac{1}{a_i}\right)\ (a_i \neq 0). \quad \square$$

---


**例 1.29** 计算 $n$ 阶行列式

$$|\boldsymbol{A}| = \begin{vmatrix} x_1 y_1 & x_1 y_2 & \cdots & x_1 y_n \\ x_2 y_1 & x_2 y_2 & \cdots & x_2 y_n \\ \vdots & \vdots & & \vdots \\ x_n y_1 & x_n y_2 & \cdots & x_n y_n \end{vmatrix}.$$

> [!solution]-
> 解 当 $n \geq 2$ 时，各行成比例，故 $|\boldsymbol{A}| = 0$。当 $n = 1$ 时，$|\boldsymbol{A}| = x_1 y_1$。 $\square$

**例 1.30** 设 $f(x)$ 是次数不超过 $n-1$ 的多项式，$a_1, a_2, \cdots, a_n$ 是 $n$ 个不同的数，且 $f(a_i) = 0\ (1 \leq i \leq n)$，则 $f(x) \equiv 0$。

> [!proof]-
> 证明 用反证法。若 $f(x) \not\equiv 0$，则 $\deg f \leq n-1$ 且 $f$ 有 $n$ 个不同的根，矛盾。 $\square$

---


### §1.9 组合定义

**组合定义** 教材 [1] 是从行列式的递归定义出发，先利用数学归纳法证明行列式的所有性质，再推导出行列式的组合定义。事实上，也可以从行列式的组合定义出发，先证明行列式的所有性质，再推导出行列式的递归定义。因此两种定义体系是完全等价的。行列式的组合定义通常在理论证明中使用，如利用它可以证明 Laplace 定理等。

**例 1.39** 若 $n$ 阶行列式 $|\boldsymbol{A}|$ 中零元素的个数超过 $n^2 - n$ 个，证明：$|\boldsymbol{A}| = 0$。

> [!proof]-
> 证明 由行列式的组合定义可得
> $$|\boldsymbol{A}| = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}.$$
> 由于 $|\boldsymbol{A}|$ 中零元素的个数超过 $n^2 - n$ 个，故 $a_{k_1 1}, a_{k_2 2}, \cdots, a_{k_n n}$ 中至少有一个为零，从而 $a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} = 0$，因此 $|\boldsymbol{A}| = 0$。
>
> 如直接利用行列式的性质，也可以这样来证明：因为 $|\boldsymbol{A}|$ 中零元素的个数超过 $n^2 - n$ 个，由抽屉原理可知，$|\boldsymbol{A}|$ 至少有一列其零元素的个数大于等于 $\left[\dfrac{n^2 - n}{n}\right] + 1 = n$，即 $|\boldsymbol{A}|$ 至少有一列其元素全为零，因此 $|\boldsymbol{A}| = 0$。 $\square$

---


**例 1.40** 设

$$f(x) = \begin{vmatrix} x - a_{11} & -a_{12} & \cdots & -a_{1n} \\ -a_{21} & x - a_{22} & \cdots & -a_{2n} \\ \vdots & \vdots & & \vdots \\ -a_{n1} & -a_{n2} & \cdots & x - a_{nn} \end{vmatrix},$$

其中 $x$ 是未定元，$a_{ij}$ 是常数。证明：$f(x)$ 是一个最高次项系数为 $1$ 的 $n$ 次多项式，且其 $n-1$ 次项的系数等于 $-(a_{11} + a_{22} + \cdots + a_{nn})$。

> [!proof]-
> 证明 由行列式的组合定义可知，$f(x)$ 的最高次项出现在组合定义展开式中的单项 $(x - a_{11})(x - a_{22}) \cdots (x - a_{nn})$ 中，且展开式中的其他单项作为 $x$ 的多项式其次数小于等于 $n-2$。因此 $f(x)$ 是一个最高次项系数为 $1$ 的 $n$ 次多项式，且其 $n-1$ 次项的系数等于 $-(a_{11} + a_{22} + \cdots + a_{nn})$。 $\square$

---


**例 1.41** 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶复矩阵，证明：$\overline{|\boldsymbol{A}|} = |\overline{\boldsymbol{A}}|$。

> [!proof]-
> 证明 复数的共轭保持加法和乘法：$\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}$，$\overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}$，故由行列式的组合定义可得
> $$\overline{|\boldsymbol{A}|} = \overline{\sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}}$$
> $$= \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} \overline{a_{k_1 1}}\,\overline{a_{k_2 2}} \cdots \overline{a_{k_n n}} = |\overline{\boldsymbol{A}}|. \quad \square$$

**例 1.42** 设 $\boldsymbol{A} = (a_{ij})$ 是 $n\ (n \geq 2)$ 阶非异整数方阵，满足对任意的 $i, j$，$|\boldsymbol{A}|$ 均可整除 $a_{ij}$，证明：$|\boldsymbol{A}| = \pm 1$。

> [!proof]-
> 证明 $|\boldsymbol{A}|$ 可整除每个元素 $a_{ij}$，故由行列式的组合定义
> $$|\boldsymbol{A}| = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}$$
> 可知 $|\boldsymbol{A}|^n$ 可整除 $|\boldsymbol{A}|$ 中每个单项 $a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}$，从而 $|\boldsymbol{A}|^n$ 可整除 $|\boldsymbol{A}|$，即有 $|\boldsymbol{A}|^{n-1}$ 可整除 $1$，于是 $|\boldsymbol{A}|^{n-1} = \pm 1$。又 $|\boldsymbol{A}|$ 是整数，从而只能是 $|\boldsymbol{A}| = \pm 1$。 $\square$

---


**例 1.43** 如果 $n$ 阶行列式 $|\boldsymbol{A}|$ 的元素满足 $a_{ij} = -a_{ji}\ (1 \leq i, j \leq n)$，则称为**反对称行列式**。求证：奇数阶反对称行列式的值等于零。

> [!proof]-
> 证明 由于 $|\boldsymbol{A}|$ 的主对角元全为 $0$，故由组合定义，只需考虑下列单项：
> $$T = \{a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} \mid k_i \neq i\ (1 \leq i \leq n)\}.$$
> 定义映射 $\varphi: T \to T$，$a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} \mapsto a_{1k_1}a_{2k_2} \cdots a_{nk_n}$。显然 $\varphi^2 = \mathrm{Id}_T$，于是 $\varphi$ 是一个双射。我们断言：$a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}$ 和 $a_{1k_1}a_{2k_2} \cdots a_{nk_n}$ 作为 $|\boldsymbol{A}|$ 的单项不相同，否则 $\{1, 2, \cdots, n\}$ 必可分成若干对 $(i_1, j_1), \cdots, (i_l, j_l)$，使得 $a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} = a_{i_1 j_1}a_{j_1 i_1} \cdots a_{i_l j_l}a_{j_l i_l}$，这与 $n$ 为奇数矛盾。将上述两个单项看成一组，则它们在 $|\boldsymbol{A}|$ 中符号均为 $(-1)^{N(k_1, k_2, \cdots, k_n)}$。由于 $|\boldsymbol{A}|$ 反对称，故
> $$a_{1k_1}a_{2k_2} \cdots a_{nk_n} = (-1)^n a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} = -a_{k_1 1}a_{k_2 2} \cdots a_{k_n n},$$
> 从而每组和为 $0$，于是 $|\boldsymbol{A}| = 0$。
>
> 如直接利用行列式的性质，也可以这样来证明：由反对称行列式的定义可知，$|\boldsymbol{A}|$ 的转置 $|\boldsymbol{A}'|$ 与 $|\boldsymbol{A}|$ 的每个元素都相差一个符号，将 $|\boldsymbol{A}'|$ 的每一行都提出公因子 $-1$ 可得 $|\boldsymbol{A}| = |\boldsymbol{A}'| = (-1)^n|\boldsymbol{A}| = -|\boldsymbol{A}|$，从而 $|\boldsymbol{A}| = 0$。 $\square$

---


### §1.10 Laplace 定理

**Laplace 定理** 推广了"行列式可以按任意一行（列）进行展开"这一性质：行列式可以按任意 $k$ 行（列）进行展开。由 Laplace 定理可以推出：分块上（下）三角行列式的值等于主对角块行列式值的乘积，这一推论是行列式性质 1 的推广，在后续章节中有着众多的应用。Laplace 定理通常在理论证明中使用，下面是几个典型的例子。

**例 1.44** 利用行列式的 Laplace 定理证明恒等式：

$$(ab' - a'b)(cd' - c'd) - (ac' - a'c)(bd' - b'd) + (ad' - a'd)(bc' - b'c) = 0.$$

> [!proof]-
> 证明 显然下列行列式的值为零：
> $$\begin{vmatrix} a & a' & a & a' \\ b & b' & b & b' \\ c & c' & c & c' \\ d & d' & d & d' \end{vmatrix}.$$
> 用 Laplace 定理按第一、第二列展开即得。 $\square$

**例 1.45** 求 $2n$ 阶行列式的值（空缺处都是零）：

$$|\boldsymbol{A}| = \begin{vmatrix} a & & & & b \\ & \ddots & & \iddots & \\ & & a & b & \\ & & b & a & \\ & \iddots & & \ddots & \\ b & & & & a \end{vmatrix}.$$

> [!solution]-
> 解 不断用 Laplace 定理（第一行及最后一行），即可求得行列式的值为
> $$(a^2 - b^2)^n. \quad \square$$

---


**例 1.46** 设 $\boldsymbol{A}, \boldsymbol{B}$ 都是 $n$ 阶矩阵，求证：

$$|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{A}| + |\boldsymbol{B}| + \sum_{1 \leq k \leq n-1} \left(\sum_{\substack{1 \leq i_1 < i_2 < \cdots < i_k \leq n \\ 1 \leq j_1 < j_2 < \cdots < j_k \leq n}} \boldsymbol{A}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix} \widehat{\boldsymbol{B}}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ j_1 & j_2 & \cdots & j_k \end{pmatrix}\right).$$

> [!proof]-
> 证明 设 $|\boldsymbol{A}| = |\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n|$，$|\boldsymbol{B}| = |\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_n|$，其中 $\boldsymbol{\alpha}_i, \boldsymbol{\beta}_i$ 分别是 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 的列向量。注意到
> $$|\boldsymbol{A} + \boldsymbol{B}| = |\boldsymbol{\alpha}_1 + \boldsymbol{\beta}_1, \boldsymbol{\alpha}_2 + \boldsymbol{\beta}_2, \cdots, \boldsymbol{\alpha}_n + \boldsymbol{\beta}_n|.$$
> 对 $|\boldsymbol{A} + \boldsymbol{B}|$，按列用行列式性质 6 展开，使每个行列式的每一列或者只含 $\boldsymbol{\alpha}_i$，或者只含 $\boldsymbol{\beta}_i$（即按列向量完全拆分开），则 $|\boldsymbol{A} + \boldsymbol{B}|$ 可以表示为 $2^n$ 个这样的行列式之和。对每个行列式用 Laplace 定理按含有 $\boldsymbol{A}$ 的列向量的那些列展开便可得到结论。 $\square$

> [!remark]
> 当 $\boldsymbol{A}, \boldsymbol{B}$ 之一是比较简单的矩阵（例如对角阵或秩较小的矩阵）时，可利用例 1.46 来计算 $|\boldsymbol{A} + \boldsymbol{B}|$。下面是两道典型例题，其中例 1.47 是例 1.40 的推广。

**例 1.47** 设 $\boldsymbol{A} = (a_{ij})$ 为 $n$ 阶方阵，$x$ 为未定元，

$$f(x) = |x\boldsymbol{I}_n - \boldsymbol{A}| = \begin{vmatrix} x - a_{11} & -a_{12} & \cdots & -a_{1n} \\ -a_{21} & x - a_{22} & \cdots & -a_{2n} \\ \vdots & \vdots & & \vdots \\ -a_{n1} & -a_{n2} & \cdots & x - a_{nn} \end{vmatrix}.$$

证明：$f(x) = x^n + a_1 x^{n-1} + \cdots + a_{n-1}x + a_n$，其中

$$a_k = (-1)^k \sum_{1 \leq i_1 < i_2 < \cdots < i_k \leq n} \boldsymbol{A}\begin{pmatrix} i_1 & i_2 & \cdots & i_k \\ i_1 & i_2 & \cdots & i_k \end{pmatrix},\ 1 \leq k \leq n.$$

> [!proof]-
> 证明 注意到 $x\boldsymbol{I}_n$ 非零的 $n-k$ 阶子式只有 $n-k$ 阶主子式，其值为 $x^{n-k}$，故由例 1.46 即得结论。 $\square$

---


**例 1.33** 求下列 $n$ 阶行列式的值，其中 $a_i \neq 0\ (1 \leq i \leq n)$：

$$|\boldsymbol{A}| = \begin{vmatrix} 0 & a_1 + a_2 & \cdots & a_1 + a_{n-1} & a_1 + a_n \\ a_2 + a_1 & 0 & \cdots & a_2 + a_{n-1} & a_2 + a_n \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n-1} + a_1 & a_{n-1} + a_2 & \cdots & 0 & a_{n-1} + a_n \\ a_n + a_1 & a_n + a_2 & \cdots & a_n + a_{n-1} & 0 \end{vmatrix}.$$

> [!solution]-
> 解法 2 设
> $$\boldsymbol{B} = \begin{pmatrix} 2a_1 & a_1 + a_2 & \cdots & a_1 + a_n \\ a_2 + a_1 & 2a_2 & \cdots & a_2 + a_n \\ \vdots & \vdots & & \vdots \\ a_n + a_1 & a_n + a_2 & \cdots & 2a_n \end{pmatrix},\ \boldsymbol{C} = \begin{pmatrix} -2a_1 & & & \\ & -2a_2 & & \\ & & \ddots & \\ & & & -2a_n \end{pmatrix},$$
> 则 $\boldsymbol{A} = \boldsymbol{B} + \boldsymbol{C}$。我们先来计算 $|\boldsymbol{B}|$，拆分 $|\boldsymbol{B}|$ 的第一列得到两个行列式，再用第一列分别消去后面 $n-1$ 列的对应部分，最后可得
> $$|\boldsymbol{B}| = \begin{vmatrix} a_1 & a_1 + a_2 & \cdots & a_1 + a_n \\ a_2 & 2a_2 & \cdots & a_2 + a_n \\ \vdots & \vdots & & \vdots \\ a_n & a_n + a_2 & \cdots & 2a_n \end{vmatrix} + \begin{vmatrix} a_1 & a_1 + a_2 & \cdots & a_1 + a_n \\ a_1 & 2a_2 & \cdots & a_2 + a_n \\ \vdots & \vdots & & \vdots \\ a_1 & a_n + a_2 & \cdots & 2a_n \end{vmatrix}$$
> $$= \begin{vmatrix} a_1 & a_2 & \cdots & a_n \\ a_2 & a_2 & \cdots & a_n \\ \vdots & \vdots & & \vdots \\ a_n & a_2 & \cdots & a_n \end{vmatrix} + \begin{vmatrix} a_1 & a_1 & \cdots & a_1 \\ a_1 & a_2 & \cdots & a_2 \\ \vdots & \vdots & & \vdots \\ a_1 & a_n & \cdots & a_n \end{vmatrix}.$$
> 因此，当 $n \geq 3$ 时，$|\boldsymbol{B}| = 0$；当 $n = 2$ 时，$|\boldsymbol{B}| = -(a_1 - a_2)^2$；当 $n = 1$ 时，$|\boldsymbol{B}| = 2a_1$。由于 $\boldsymbol{B}$ 的任一 $k$ 阶主子式也具有相同的形状，故上面也给出了 $\boldsymbol{B}$ 的所有主子式的计算结果。注意到 $\boldsymbol{C}$ 只有主子式非零，故由例 1.46 可得
> $$|\boldsymbol{A}| = |\boldsymbol{C}| + \sum_{i=1}^{n}\boldsymbol{B}\begin{pmatrix} i \\ i \end{pmatrix}\widehat{\boldsymbol{C}}\begin{pmatrix} i \\ i \end{pmatrix} + \sum_{1 \leq i < j \leq n}\boldsymbol{B}\begin{pmatrix} i & j \\ i & j \end{pmatrix}\widehat{\boldsymbol{C}}\begin{pmatrix} i & j \\ i & j \end{pmatrix}$$
> $$= (-2)^n a_1 a_2 \cdots a_n + \sum_{i=1}^{n}(2a_i)(-2)^{n-1}a_1 \cdots \widehat{a_i} \cdots a_n$$
> $$+ \sum_{1 \leq i < j \leq n}\left(-(a_i - a_j)^2(-2)^{n-2}a_1 \cdots \widehat{a_i} \cdots \widehat{a_j} \cdots a_n\right)$$
> $$= (-2)^{n-2}\prod_{i=1}^{n}a_i\left((n-2)^2 - \left(\sum_{i=1}^{n}a_i\right)\left(\sum_{i=1}^{n}\frac{1}{a_i}\right)\right). \quad \square$$

---


### §1.11 综合运用

我们在前面几节介绍了行列式计算的 9 种方法，分别是：降阶法、求和法、递推法与数学归纳法、拆分法、Vandermonde 行列式、升阶法、求根法、组合定义和 Laplace 定理。在矩阵这一章中，我们还将介绍：矩阵乘法、Cauchy-Binet 公式和降阶公式这 3 种方法，合在一起共 12 种方法。

另外，一些重要的例题，如例 1.4（爪型行列式）、例 1.5（除主对角元素外每行相等型）、例 1.7（添加一行一列型）、例 1.12（循环行列式）、例 1.13（三对角行列式）、例 1.18（Cauchy 行列式）、例 1.21（行列式求导）、例 1.22（元素增量相等型）及其推论、例 1.27（类 Vandermonde 行列式）、例 1.46（$|\boldsymbol{A} + \boldsymbol{B}|$ 型）等，都可看成是某种模板，今后可直接利用其结论去计算相关的行列式。我们亦可称之为**模板法**。

行列式的计算具有相当的技巧性，有时可以用数种方法来解一道题，有时也需要综合运用各种方法来进行计算。但不管利用怎样的方法，熟练运用行列式的性质总是最基本的要求。下面我们再列举一些典型的例题加以说明。

---


**例 1.48** 求下列 $n$ 阶行列式的值：

$$|\boldsymbol{A}| = \begin{vmatrix} (x - a_1)^2 & a_2^2 & \cdots & a_n^2 \\ a_1^2 & (x - a_2)^2 & \cdots & a_n^2 \\ \vdots & \vdots & & \vdots \\ a_1^2 & a_2^2 & \cdots & (x - a_n)^2 \end{vmatrix}.$$

> [!solution]-
> 解 注意到 $(x - a_i)^2 = a_i^2 - (2a_i - x)x$，因此直接利用例 1.5 的结论可得
> $$|\boldsymbol{A}| = \sum_{i=1}^{n}(x^2 - 2a_1 x) \cdots (x^2 - 2a_{i-1} x) a_i^2 (x^2 - 2a_{i+1} x) \cdots (x^2 - 2a_n x)$$
> $$+ (x^2 - 2a_1 x) \cdots (x^2 - 2a_n x). \quad \square$$

我们直接利用行列式的性质给出例 1.38 的另一解法。

**例 1.38** 求下列行列式的值：

$$|\boldsymbol{A}| = \begin{vmatrix} (a+b)^2 & c^2 & c^2 \\ a^2 & (b+c)^2 & a^2 \\ b^2 & b^2 & (c+a)^2 \end{vmatrix}.$$

> [!solution]-
> 解法 2 将第二列乘以 $-1$ 分别加到第一列和第三列上，再将第一列和第三列的因子提出，可得
> $$|\boldsymbol{A}| = (a+b+c)^2 \begin{vmatrix} a+b-c & c^2 & 0 \\ a-b-c & (b+c)^2 & a-b-c \\ 0 & b^2 & a+c-b \end{vmatrix}.$$
> 将上述行列式的第一行和第三行分别乘以 $-1$ 加到第二行上；再将第一列乘以 $\dfrac{c}{2}$ 加到第二列上，将第三列乘以 $\dfrac{b}{2}$ 加到第二列上；最后将第二列的公因子提出，可得
> $$|\boldsymbol{A}| = (a+b+c)^2 \begin{vmatrix} a+b-c & c^2 & 0 \\ -2b & 2bc & -2c \\ 0 & b^2 & a+c-b \end{vmatrix}$$
> $$= (a+b+c)^2 \begin{vmatrix} a+b-c & \dfrac{c}{2}(a+b+c) & 0 \\ -2b & 0 & -2c \\ 0 & \dfrac{b}{2}(a+b+c) & a+c-b \end{vmatrix}$$
> $$= (a+b+c)^3 \begin{vmatrix} a+b-c & \dfrac{c}{2} & 0 \\ -2b & 0 & -2c \\ 0 & \dfrac{b}{2} & a+c-b \end{vmatrix} = 2abc(a+b+c)^3. \quad \square$$

---


**例 1.31** 计算下列行列式：

$$|\boldsymbol{A}| = \begin{vmatrix} 1 + x_1 & 1 + x_1^2 & \cdots & 1 + x_1^n \\ 1 + x_2 & 1 + x_2^2 & \cdots & 1 + x_2^n \\ \vdots & \vdots & & \vdots \\ 1 + x_n & 1 + x_n^2 & \cdots & 1 + x_n^n \end{vmatrix}.$$

> [!solution]-
> 解法 2 利用例 1.22 和例 1.27 来进行计算。设
> $$|\boldsymbol{B}(t)| = \begin{vmatrix} x_1 + t & x_1^2 + t & \cdots & x_1^n + t \\ x_2 + t & x_2^2 + t & \cdots & x_2^n + t \\ \vdots & \vdots & & \vdots \\ x_n + t & x_n^2 + t & \cdots & x_n^n + t \end{vmatrix},$$
> 且 $B_{ij}$ 是 $|\boldsymbol{B}(0)|$ 的第 $(i, j)$ 元素的代数余子式，则由例 1.22 可得
> $$|\boldsymbol{A}| = |\boldsymbol{B}(1)| = |\boldsymbol{B}(0)| + \sum_{i,j=1}^{n}B_{ij},\quad |\boldsymbol{B}(-1)| = |\boldsymbol{B}(0)| - \sum_{i,j=1}^{n}B_{ij},$$
> 从而 $|\boldsymbol{A}| = 2|\boldsymbol{B}(0)| - |\boldsymbol{B}(-1)|$。注意到 $|\boldsymbol{B}(0)| = x_1 x_2 \cdots x_n \displaystyle\prod_{1 \leq i < j \leq n}(x_j - x_i)$，又由例 1.27 可得 $|\boldsymbol{B}(-1)| = (x_1 - 1)(x_2 - 1) \cdots (x_n - 1) \displaystyle\prod_{1 \leq i < j \leq n}(x_j - x_i)$，故可得
> $$|\boldsymbol{A}| = \Bigl(2x_1 x_2 \cdots x_n - (x_1 - 1)(x_2 - 1) \cdots (x_n - 1)\Bigr) \prod_{1 \leq i < j \leq n}(x_j - x_i). \quad \square$$

---


**例 1.34** 试用求根法计算 Vandermonde 行列式：

$$D_n = \begin{vmatrix} 1 & x_1 & \cdots & x_1^{n-2} & x_1^{n-1} \\ 1 & x_2 & \cdots & x_2^{n-2} & x_2^{n-1} \\ \vdots & \vdots & & \vdots & \vdots \\ 1 & x_{n-1} & \cdots & x_{n-1}^{n-2} & x_{n-1}^{n-1} \\ 1 & x_n & \cdots & x_n^{n-2} & x_n^{n-1} \end{vmatrix}.$$

> [!solution]-
> 解 将 $x_n$ 看成主未定元，则次数为 $n-1$，首项系数为 $D_{n-1}$。当 $x_n = x_i\ (1 \leq i \leq n-1)$ 时，行列式有两行相同，故 $D_n = 0$，从而 $x_1, \cdots, x_{n-1}$ 是 $n-1$ 个不同的根，于是
> $$D_n = D_{n-1} \cdot (x_n - x_1) \cdots (x_n - x_{n-1}).$$
> 再对系数 $D_{n-1}$ 做类似的讨论，不断这样做下去，最后可得 $D_n = \displaystyle\prod_{1 \leq i < j \leq n}(x_j - x_i)$。
>
> 也可以直接讨论，将任一 $x_j$ 看成主未定元，则其余未定元 $x_i\ (i \neq j)$ 都是 $D_n$ 的根，故 $D_n = c \displaystyle\prod_{1 \leq i < j \leq n}(x_j - x_i)$。规定未定元的字典排序为 $x_n \succ x_{n-1} \succ \cdots \succ x_1$，则由行列式的组合定义可知 $D_n$ 的首项为 $x_n^{n-1} x_{n-1}^{n-2} \cdots x_2$，比较之后即得 $c = 1$。 $\square$

**例 1.35** 求下列行列式的值：

$$|\boldsymbol{A}| = \begin{vmatrix} 1 & 1 & 2 & 3 \\ 1 & 2-x^2 & 2 & 3 \\ 2 & 3 & 1 & 5 \\ 2 & 3 & 1 & 9-x^2 \end{vmatrix}.$$

> [!solution]-
> 解 上述行列式按组合定义展开将得到一个关于未定元 $x$ 的首项系数为 $-3$ 的四次多项式，注意到当 $2 - x^2 = 1$ 或 $9 - x^2 = 5$ 时，行列式均有两行相同，从而值为零。因此 $x = \pm 1, \pm 2$ 是上述一元四次多项式的 4 个不同的根，从而由求根法可知
> $$|\boldsymbol{A}| = -3(x^2 - 1)(x^2 - 4). \quad \square$$

---


**例 1.36** 计算行列式：

$$|\boldsymbol{A}| = \begin{vmatrix} x & y & z & w \\ y & x & w & z \\ z & w & x & y \\ w & z & y & x \end{vmatrix}.$$

> [!solution]-
> 解 设 $|\boldsymbol{A}| = f(x)$，将所有行加到第一行上可以提出因子 $x + y + z + w$。第二行乘以 $1$，第三、第四行乘以 $-1$ 加到第一行上可提出因子 $x + y - z - w$。同理可知 $|\boldsymbol{A}|$ 有因子 $x + z - y - w$，$x + w - y - z$。又 $|\boldsymbol{A}|$ 看成为 $x$ 的多项式是四次的，首项系数为 $1$，故
> $$|\boldsymbol{A}| = (x + y + z + w)(x + y - z - w)(x + z - y - w)(x + w - y - z). \quad \square$$

> [!remark]
> 利用行列式的性质可以给出例 1.36 的另一种解法，请参考 [1] 的例 1.5.10。

**例 1.37** 计算行列式：

$$|\boldsymbol{A}| = \begin{vmatrix} 1+x & 1 & 1 & 1 \\ 1 & 1-x & 1 & 1 \\ 1 & 1 & 1+y & 1 \\ 1 & 1 & 1 & 1-y \end{vmatrix}.$$

> [!solution]-
> 解 显然当 $x = 0$ 或 $y = 0$ 时 $|\boldsymbol{A}| = 0$。因此 $|\boldsymbol{A}|$ 含有因子 $xy$。若将 $-x$ 代 $x$，所得行列式仍和 $|\boldsymbol{A}|$ 相等（只要将第一、第二行对换，再将第一、第二列对换）。可见，$|\boldsymbol{A}|$ 含有因子 $x^2$，同理 $|\boldsymbol{A}|$ 含有因子 $y^2$。而 $x^2 y^2$ 项的系数是 $1$，因此 $|\boldsymbol{A}| = x^2 y^2$。 $\square$

---


**例 1.38** 求下列行列式的值：

$$|\boldsymbol{A}| = \begin{vmatrix} (a+b)^2 & c^2 & c^2 \\ a^2 & (b+c)^2 & a^2 \\ b^2 & b^2 & (c+a)^2 \end{vmatrix}.$$

> [!solution]-
> 解 若 $a = 0$，则第一列和第三列成比例，故行列式值为零，于是 $a$ 是 $|\boldsymbol{A}|$ 的因子，同理可证 $b, c$ 也是 $|\boldsymbol{A}|$ 的因子。注意到第一列减去第二列，以及第三列减去第二列均可提出公因子 $a + b + c$，于是 $|\boldsymbol{A}| = abc(a + b + c)^2 f(a, b, c)$，其中 $f(a, b, c)$ 是一次齐次多项式。设 $f(a, b, c) = k_1 a + k_2 b + k_3 c$，若将 $a, b, c$ 做置换，容易验证 $|\boldsymbol{A}|$ 的值仍不变，故 $k_1 = k_2 = k_3$，于是 $|\boldsymbol{A}| = kabc(a + b + c)^3$。最后取 $a = b = c = 1$ 可以确定 $k = 2$，因此
> $$|\boldsymbol{A}| = 2abc(a + b + c)^3. \quad \square$$

**例 1.18** (Cauchy 行列式) 计算 $n$ 阶行列式：

$$|\boldsymbol{A}| = \begin{vmatrix} (a_1 + b_1)^{-1} & (a_1 + b_2)^{-1} & \cdots & (a_1 + b_n)^{-1} \\ (a_2 + b_1)^{-1} & (a_2 + b_2)^{-1} & \cdots & (a_2 + b_n)^{-1} \\ \vdots & \vdots & & \vdots \\ (a_n + b_1)^{-1} & (a_n + b_2)^{-1} & \cdots & (a_n + b_n)^{-1} \end{vmatrix}.$$

> [!solution]-
> 解法 2 将 $|\boldsymbol{A}|$ 的每一行提出公分母，得到
> $$|\boldsymbol{A}| = \prod_{i,j=1}^{n}(a_i + b_j)^{-1} |\boldsymbol{B}|,$$
> 其中 $|\boldsymbol{B}|$ 是一个 $n$ 阶行列式，它的第 $(i, j)$ 元素为
> $$\prod_{k=1}^{n}(a_i + b_k)/(a_i + b_j).$$

---


现来计算 $|\boldsymbol{B}|$。若 $a_i = a_j\ (i \neq j)$，则显然 $|\boldsymbol{B}| = 0$（有两行相同），因此 $|\boldsymbol{B}|$ 含有因子 $a_i - a_j$。同理可证 $|\boldsymbol{B}|$ 也含有因子 $b_i - b_j$。又 $a_i$ 在 $|\boldsymbol{B}|$ 展开式中的次数为 $n-1$，$b_i$ 的次数也是 $n-1$，因此

$$|\boldsymbol{B}| = k \prod_{1 \leq i < j \leq n}(a_i - a_j)(b_i - b_j).$$

为确定 $k$ 的值，令 $a_i = -b_i\ (i = 1, 2, \cdots, n)$。$|\boldsymbol{B}|$ 这时成为对角行列式，注意到 $b_i = -a_i$，我们有

$$|\boldsymbol{B}| = \prod_{1 \leq i \neq j \leq n}(a_i - a_j) = \prod_{1 \leq i < j \leq n}(a_i - a_j)(b_i - b_j).$$

这表明 $k = 1$。因此

$$|\boldsymbol{A}| = \frac{\displaystyle\prod_{1 \leq i < j \leq n}(a_i - a_j)(b_i - b_j)}{\displaystyle\prod_{i,j=1}^{n}(a_i + b_j)}. \quad \square$$

---


**例 1.49** 设 $n$ 阶行列式 $|\boldsymbol{A}| = |a_{ij}|$，$A_{ij}$ 是元素 $a_{ij}$ 的代数余子式，求证：

$$|\boldsymbol{B}| = \begin{vmatrix} a_{11} - a_{12} & a_{12} - a_{13} & \cdots & a_{1,n-1} - a_{1n} & 1 \\ a_{21} - a_{22} & a_{22} - a_{23} & \cdots & a_{2,n-1} - a_{2n} & 1 \\ a_{31} - a_{32} & a_{32} - a_{33} & \cdots & a_{3,n-1} - a_{3n} & 1 \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n1} - a_{n2} & a_{n2} - a_{n3} & \cdots & a_{n,n-1} - a_{nn} & 1 \end{vmatrix} = \sum_{i,j=1}^{n}A_{ij}.$$

> [!proof]-
> 证法 1 设行列式 $|\boldsymbol{A}|$ 的列向量依次为 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n$，并且 $\boldsymbol{1}$ 表示元素都是 $1$ 的列向量，则
> $$|\boldsymbol{B}| = |\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_2 - \boldsymbol{\alpha}_3, \cdots, \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n, \boldsymbol{1}|.$$
> 依次将第 $i$ 列加到第 $i-1$ 列上去 $(i = n, n-1, \cdots, 2)$，可得
> $$|\boldsymbol{B}| = |\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_n, \boldsymbol{\alpha}_2 - \boldsymbol{\alpha}_n, \cdots, \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n, \boldsymbol{1}|.$$
> 将第 $n$ 列写成 $(\boldsymbol{\alpha}_n + \boldsymbol{1}) - \boldsymbol{\alpha}_n$，进行拆分可得
> $$|\boldsymbol{B}| = |\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_n, \cdots, \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n, \boldsymbol{\alpha}_n + \boldsymbol{1}| - |\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_n, \cdots, \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n, \boldsymbol{\alpha}_n|.$$
> 将上述两个行列式的第 $n$ 列依次加到前 $n-1$ 列上，可得
> $$|\boldsymbol{B}| = |\boldsymbol{\alpha}_1 + \boldsymbol{1}, \boldsymbol{\alpha}_2 + \boldsymbol{1}, \cdots, \boldsymbol{\alpha}_n + \boldsymbol{1}| - |\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n|.$$
> 最后由例 1.22 即得本题的结论。
>
> 证法 2 由例 1.7 可知
> $$-\sum_{i,j=1}^{n}A_{ij} = \begin{vmatrix} \boldsymbol{\alpha}_1 & \boldsymbol{\alpha}_2 & \cdots & \boldsymbol{\alpha}_n & \boldsymbol{1} \\ 1 & 1 & \cdots & 1 & 0 \end{vmatrix}.$$
> 依次将第 $i$ 列乘以 $-1$ 加到第 $i-1$ 列上去 $(i = 2, \cdots, n)$，再按第 $n+1$ 行展开可得
> $$-\sum_{i,j=1}^{n}A_{ij} = \begin{vmatrix} \boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2 & \boldsymbol{\alpha}_2 - \boldsymbol{\alpha}_3 & \cdots & \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n & \boldsymbol{\alpha}_n & \boldsymbol{1} \\ 0 & 0 & \cdots & 0 & 1 & 0 \end{vmatrix}$$
> $$= -|\boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_2 - \boldsymbol{\alpha}_3, \cdots, \boldsymbol{\alpha}_{n-1} - \boldsymbol{\alpha}_n, \boldsymbol{1}| = -|\boldsymbol{B}|,$$
> 结论得证。 $\square$

---


下面的例题给出了行列式的刻画：在方阵 $n$ 个列向量上的多重线性和反对称性，以及正规性（即单位矩阵处的取值为 1），唯一确定了行列式这个函数。

**例 1.50** 设 $f$ 为从 $n$ 阶方阵全体构成的集合到数集上的映射，使得对任意的 $n$ 阶方阵 $\boldsymbol{A}$，任意的指标 $1 \leq i \leq n$，以及任意的常数 $c$，满足下列条件：

(1) 设 $\boldsymbol{A}$ 的第 $i$ 列是方阵 $\boldsymbol{B}$ 和 $\boldsymbol{C}$ 的第 $i$ 列之和，且 $\boldsymbol{A}$ 的其余列与 $\boldsymbol{B}$ 和 $\boldsymbol{C}$ 的对应列完全相同，则 $f(\boldsymbol{A}) = f(\boldsymbol{B}) + f(\boldsymbol{C})$；

(2) 将 $\boldsymbol{A}$ 的第 $i$ 列乘以常数 $c$ 得到方阵 $\boldsymbol{B}$，则 $f(\boldsymbol{B}) = cf(\boldsymbol{A})$；

(3) 对换 $\boldsymbol{A}$ 的任意两列得到方阵 $\boldsymbol{B}$，则 $f(\boldsymbol{B}) = -f(\boldsymbol{A})$；

(4) $f(\boldsymbol{I}_n) = 1$，其中 $\boldsymbol{I}_n$ 是 $n$ 阶单位阵。

求证：$f(\boldsymbol{A}) = |\boldsymbol{A}|$。

> [!proof]-
> 证明 设 $\boldsymbol{A} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$，其中 $\boldsymbol{\alpha}_i$ 为 $\boldsymbol{A}$ 的第 $i$ 列，$\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n$ 为标准单位列向量，则
> $$\boldsymbol{\alpha}_j = a_{1j}\boldsymbol{e}_1 + a_{2j}\boldsymbol{e}_2 + \cdots + a_{nj}\boldsymbol{e}_n = \sum_{i=1}^{n}a_{ij}\boldsymbol{e}_i.$$
> 由条件 (1) 和 (2) 可得
> $$f(\boldsymbol{A}) = \sum_{(k_1, k_2, \cdots, k_n)} a_{k_1 1}a_{k_2 2} \cdots a_{k_n n}f(\boldsymbol{e}_{k_1}, \boldsymbol{e}_{k_2}, \cdots, \boldsymbol{e}_{k_n}).$$
> 由条件 (3) 可知，若 $k_i = k_j$，则 $f(\boldsymbol{e}_{k_1}, \boldsymbol{e}_{k_2}, \cdots, \boldsymbol{e}_{k_n}) = 0$。因此在 $f(\boldsymbol{A})$ 的表达式中，只剩下 $k_i$ 互不相同的项。通过 $N(k_1, k_2, \cdots, k_n)$ 次相邻对换可将 $(\boldsymbol{e}_{k_1}, \boldsymbol{e}_{k_2}, \cdots, \boldsymbol{e}_{k_n})$ 变成 $\boldsymbol{I}_n = (\boldsymbol{e}_1, \boldsymbol{e}_2, \cdots, \boldsymbol{e}_n)$，故由条件 (3) 和 (4) 可得
> $$f(\boldsymbol{e}_{k_1}, \boldsymbol{e}_{k_2}, \cdots, \boldsymbol{e}_{k_n}) = (-1)^{N(k_1, k_2, \cdots, k_n)}f(\boldsymbol{I}_n) = (-1)^{N(k_1, k_2, \cdots, k_n)},$$
> 于是
> $$f(\boldsymbol{A}) = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{k_1 1}a_{k_2 2} \cdots a_{k_n n} = |\boldsymbol{A}|. \quad \square$$

---


在例 1.49 的证明过程中，我们综合运用了行列式的性质、拆分法以及模板法（例 1.22 或例 1.7）进行计算。另一方面，我们也给出了众多例题的多种解法或证法，比如例 1.5，可以用爪型行列式、升阶法、求和法、拆分法与递推法、模板法（例 1.46）和降阶公式这 6 种方法来求解。可见，要真正熟练地掌握行列式的计算，并将上述各种方法运用自如，需要读者在做题的过程中认真思索，不断总结，才能融会贯通。

---


### §1.12 基础训练

#### 1.12.1 训练题

**一、单选题**

1. 若行列式 $\begin{vmatrix} 1 & 2 & 5 \\ 1 & 3 & -2 \\ 2 & 5 & x \end{vmatrix} = 0$，则 $x = ($　$)$。

(A) 2　　(B) $-2$　　(C) 3　　(D) $-3$

2. 在关于 $x$ 的多项式 $f(x) = \begin{vmatrix} 2 & x & -5 & 3 \\ 1 & 2 & 3 & 4 \\ -1 & 0 & -2 & -3 \\ -1 & 7 & -2 & -2 \end{vmatrix}$ 中，一次项的系数是 ($\ $)。

(A) 1　　(B) 2　　(C) $-1$　　(D) $-2$

3. $n$ 阶行列式 $\begin{vmatrix} 0 & 0 & \cdots & 0 & 1 \\ 0 & 0 & \cdots & 1 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 1 & \cdots & 0 & 0 \\ 1 & 0 & \cdots & 0 & 0 \end{vmatrix}$ 的值为 ($\ $)。

(A) $(-1)^{n^2}$　　(B) $(-1)^{\frac{1}{2}n(n-1)}$　　(C) $(-1)^{\frac{1}{2}n(n+1)}$　　(D) $1$

4. 行列式 $\begin{vmatrix} 0 & a & 0 & 0 \\ b & c & 0 & 0 \\ 0 & 0 & d & e \\ 0 & 0 & 0 & f \end{vmatrix}$ 的值等于 ($\ $)。

(A) $abcdef$　　(B) $-abdf$　　(C) $abdf$　　(D) $cdf$

5. 若 $|\boldsymbol{A}|$ 是 $n$ 阶行列式，$|\boldsymbol{B}|$ 是 $m$ 阶行列式，它们的值都不为零，记 $\begin{vmatrix} \boldsymbol{A} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B} \end{vmatrix} = |\boldsymbol{C}|$，$\begin{vmatrix} \boldsymbol{O} & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{O} \end{vmatrix} = |\boldsymbol{D}|$，则 $|\boldsymbol{C}| : |\boldsymbol{D}|$ 的值是 ($\ $)。

(A) 1　　(B) $-1$　　(C) $(-1)^n$　　(D) $(-1)^{mn}$

6. 若一个 $n\ (n > 1)$ 阶行列式中元素或为 $1$ 或为 $-1$，则其值必为 ($\ $)。

(A) 1　　(B) $-1$　　(C) 奇数　　(D) 偶数

---


7. 行列式 $\begin{vmatrix} 8 & 27 & 64 & 125 \\ 4 & 9 & 16 & 25 \\ 2 & 3 & 4 & 5 \\ 1 & 1 & 1 & 1 \end{vmatrix} = ($　$)$。

(A) 12　　(B) $-12$　　(C) 16　　(D) $-16$

8. 行列式 $\begin{vmatrix} a_1 & 0 & b_1 & 0 \\ 0 & c_1 & 0 & d_1 \\ a_2 & 0 & b_2 & 0 \\ 0 & c_2 & 0 & d_2 \end{vmatrix} = ($　$)$。

(A) $a_1 c_1 b_2 d_2 - a_2 b_1 c_2 d_1$　　(B) $(a_2 b_2 - a_1 b_1)(c_2 d_2 - c_1 d_1)$

(C) $a_1 a_2 b_1 b_2 c_1 c_2 d_1 d_2$　　(D) $(a_1 b_2 - a_2 b_1)(c_1 d_2 - c_2 d_1)$

9. 如行列式 $\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} = d$，则 $\begin{vmatrix} 3a_{31} & 3a_{32} & 3a_{33} \\ 2a_{21} & 2a_{22} & 2a_{23} \\ -a_{11} & -a_{12} & -a_{13} \end{vmatrix} = ($　$)$。

(A) $-6d$　　(B) $6d$　　(C) $4d$　　(D) $-4d$

10. 当 ($\ $) 时，下列线性方程组有唯一解：
$$\begin{cases} bx_1 + x_2 + 2x_3 = 1, \\ 2x_1 - x_2 + 2x_3 = -4, \\ 4x_1 + x_2 + 4x_3 = -2. \end{cases}$$

(A) $b \neq 1$　　(B) $b \neq 2$　　(C) $b \neq 3$　　(D) $b \neq -1$

11. 下列论断错误的是 ($\ $)。

(A) 行列式 $|\boldsymbol{A}|$ 的第 $(i, j)$ 元素的代数余子式等于其余子式乘以 $(-1)^{i+j}$

(B) 将行列式 $|\boldsymbol{A}|$ 的第一行元素都乘以 $2$，第二行元素都乘以 $\dfrac{1}{2}$，行列式值不变

(C) 行列式转置后的值等于原行列式值的相反数

(D) 将行列式的第一行和第二行对换，再将第一列和第二列对换，其值不变

12. 下列论断正确的是 ($\ $)。

(A) 将 $n\ (n > 1)$ 阶行列式 $|\boldsymbol{A}|$ 的每个元素都乘以 $2$，所得行列式的值是原行列式值的 $2$ 倍

(B) 某线性方程组的系数行列式 $|\boldsymbol{A}|$ 的值等于零，则方程组的解全为零

(C) 若上三角行列式的值为零，则行列式主对角线上必有一个元素等于零

(D) 若上三角行列式主对角线上方的所有元素等于零，则行列式的值为零

13. 设 $f(x) = \begin{vmatrix} 1 & 1 & 2 \\ 1 & 1 & x^2 - 2 \\ 2 & x^2 + 1 & 1 \end{vmatrix}$，则 $f(x) = 0$ 的根为 ($\ $)。

(A) $1, 1, 2, 2$　　(B) $-1, -1, 2, 2$　　(C) $1, -1, 2, -2$　　(D) $-1, -1, -2, -2$

---


14. 设 $f(x) = \begin{vmatrix} x-2 & x-1 & x-2 & x-3 \\ 2x-2 & 2x-1 & 2x-2 & 2x-3 \\ 3x-3 & 3x-2 & 4x-5 & 3x-5 \\ 4x & 4x-3 & 5x-7 & 4x-3 \end{vmatrix}$，则 $f(x) = 0$ 的根为 ($\ $)。

(A) $0, 1, 2, 3$　　(B) $0, 1, 2$　　(C) $0, 1, 1$　　(D) $0, 1$

15. $n$ 阶行列式 $\begin{vmatrix} 2 & 1 & 0 & \cdots & 0 & 0 \\ 1 & 2 & 1 & \cdots & 0 & 0 \\ 0 & 1 & 2 & \cdots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \cdots & 2 & 1 \\ 0 & 0 & 0 & \cdots & 1 & 2 \end{vmatrix}$ 的值为 ($\ $)。

(A) $n$　　(B) $n + 1$　　(C) $n - 1$　　(D) $n(n+1)$

**二、填空题**

1. 行列式 $\begin{vmatrix} a_1 b_1 & a_1 b_2 & a_1 b_3 & a_1 b_4 \\ a_2 b_1 & a_2 b_2 & a_2 b_3 & a_2 b_4 \\ a_3 b_1 & a_3 b_2 & a_3 b_3 & a_3 b_4 \\ a_4 b_1 & a_4 b_2 & a_4 b_3 & a_4 b_4 \end{vmatrix}$ 的值为 ($\ $)。

2. 行列式 $\begin{vmatrix} 1 & -1 & 1 & x-1 \\ 1 & -1 & x+1 & -1 \\ 1 & x-1 & 1 & -1 \\ x+1 & -1 & 1 & -1 \end{vmatrix}$ 的值为 ($\ $)。

3. 行列式 $\begin{vmatrix} x_1^3 & x_1^2 y_1 & x_1 y_1^2 & y_1^3 \\ x_2^3 & x_2^2 y_2 & x_2 y_2^2 & y_2^3 \\ x_3^3 & x_3^2 y_3 & x_3 y_3^2 & y_3^3 \\ x_4^3 & x_4^2 y_4 & x_4 y_4^2 & y_4^3 \end{vmatrix}$ 的值为 ($\ $)。

4. 已知 $n$ 阶行列式 $|\boldsymbol{A}| = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}$ 的值为 $c$，$b_1, b_2, \cdots, b_n$ 为常数，则行列式 $|\boldsymbol{B}| = \begin{vmatrix} a_{11}b_1^2 & a_{12}b_1 b_2 & \cdots & a_{1n}b_1 b_n \\ a_{21}b_2 b_1 & a_{22}b_2^2 & \cdots & a_{2n}b_2 b_n \\ \vdots & \vdots & & \vdots \\ a_{n1}b_n b_1 & a_{n2}b_n b_2 & \cdots & a_{nn}b_n^2 \end{vmatrix}$ 的值为 ($\ $)。

---


5. 行列式 $\begin{vmatrix} 103 & 100 & 204 \\ 199 & 200 & 395 \\ 301 & 300 & 600 \end{vmatrix}$ 的值为 ($\ $)。

6. 设 $|\boldsymbol{A}| = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 2$，$|\boldsymbol{B}| = \begin{vmatrix} a_1 & b_1 & d_1 \\ a_2 & b_2 & d_2 \\ a_3 & b_3 & d_3 \end{vmatrix} = 3$，则 $\begin{vmatrix} a_1 & b_1 & 2c_1 - d_1 \\ a_2 & b_2 & 2c_2 - d_2 \\ a_3 & b_3 & 2c_3 - d_3 \end{vmatrix} = ($　$)$。

7. 设行列式 $|\boldsymbol{A}| = \begin{vmatrix} 2 & 2 & 3 \\ 1 & 1 & 2 \\ 2 & x & y \end{vmatrix}$，其代数余子式 $A_{11} + A_{12} + A_{13} = 1$，则 $|\boldsymbol{A}| = ($　$)$。

8. 设行列式 $|\boldsymbol{A}| = \begin{vmatrix} 1 & 1 & 1 & 2 \\ 1 & 1 & -2 & 0 \\ 1 & 2 & 0 & -1 \\ 2 & -3 & 4 & 3 \end{vmatrix}$，则 $|\boldsymbol{A}|$ 的第四行元素的代数余子式之和 $A_{41} + A_{42} + A_{43} + A_{44} = ($　$)$。

9. 设 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\beta}$ 依次是行列式 $|\boldsymbol{A}|$ 的第一、第二、第三、第四列，$\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_3, \boldsymbol{\gamma}, \boldsymbol{\alpha}_2$ 依次是行列式 $|\boldsymbol{B}|$ 的第一、第二、第三、第四列。又已知 $|\boldsymbol{A}| = a$，$|\boldsymbol{B}| = b$，则行列式 $|\boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\alpha}_1, \boldsymbol{\beta} + \boldsymbol{\gamma}|$ 的值为 ($\ $)。

10. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若将 $|\boldsymbol{A}|$ 的第一列移到最后一列，其余各列依次保持原来次序向左移动，则得到的行列式的值为 ($\ $)。

11. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若将 $|\boldsymbol{A}|$ 的所有元素改变符号，则得到的行列式的值为 ($\ $)。

12. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若将 $|\boldsymbol{A}|$ 的每个第 $(i, j)$ 元素 $a_{ij}$ 换到第 $(n-i+1, n-j+1)$ 元素的位置上，则得到的行列式的值为 ($\ $)。

13. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若将 $|\boldsymbol{A}|$ 的每个元素 $a_{ij}$ 换成 $(-1)^{i+j}a_{ij}$，则得到的行列式的值为 ($\ $)。

14. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若将 $|\boldsymbol{A}|$ 的每个元素 $a_{ij}$ 换成 $b^{i-j}a_{ij}\ (b \neq 0)$，则得到的行列式的值为 ($\ $)。

15. $n$ 阶行列式 $|\boldsymbol{A}|$ 的值为 $c$，若从第二列开始每一列加上它前面的一列，同时对第一列加上 $|\boldsymbol{A}|$ 的第 $n$ 列，则得到的行列式的值为 ($\ $)。

---


**三、解答题**

1. 求下列行列式的值：
$$\begin{vmatrix} 0 & 0 & \cdots & n \\ \vdots & \vdots & & \vdots \\ 0 & 2 & \cdots & 0 \\ 1 & 0 & \cdots & 0 \end{vmatrix}.$$

2. 已知五阶行列式 $|\boldsymbol{A}| = 2$，$|\boldsymbol{B}| = 3$，求十阶行列式 $\begin{vmatrix} \boldsymbol{O} & \boldsymbol{A} \\ \boldsymbol{B} & \boldsymbol{O} \end{vmatrix}$ 的值。

3. 若 $a_1, a_2, \cdots, a_{n-1}$ 互不相同，求解方程：
$$\begin{vmatrix} 1 & x & x^2 & \cdots & x^{n-1} \\ 1 & a_1 & a_1^2 & \cdots & a_1^{n-1} \\ 1 & a_2 & a_2^2 & \cdots & a_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & a_{n-1} & a_{n-1}^2 & \cdots & a_{n-1}^{n-1} \end{vmatrix} = 0.$$

4. 设 $a_1, a_2, \cdots, a_n$ 互不相同，求证下列线性方程组有唯一组解：
$$\begin{cases} x_1 + x_2 + \cdots + x_n = 1, \\ a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b, \\ a_1^2 x_1 + a_2^2 x_2 + \cdots + a_n^2 x_n = b^2, \\ \qquad\qquad\qquad\cdots\cdots\cdots\cdots \\ a_1^{n-1} x_1 + a_2^{n-1} x_2 + \cdots + a_n^{n-1} x_n = b^{n-1}. \end{cases}$$

5. 计算下列行列式的值：
$$\begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ x_1 + 1 & x_2 + 1 & x_3 + 1 & \cdots & x_n + 1 \\ x_1^2 + x_1 & x_2^2 + x_2 & x_3^2 + x_3 & \cdots & x_n^2 + x_n \\ \vdots & \vdots & \vdots & & \vdots \\ x_1^{n-1} + x_1^{n-2} & x_2^{n-1} + x_2^{n-2} & x_3^{n-1} + x_3^{n-2} & \cdots & x_n^{n-1} + x_n^{n-2} \end{vmatrix}.$$

6. 求解方程：
$$\begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ 1 & 1-x & 1 & \cdots & 1 \\ 1 & 1 & 2-x & \cdots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \cdots & (n-1)-x \end{vmatrix} = 0.$$

---


7. 求证：对 $n \geq 2$ 的上三角行列式 $|\boldsymbol{A}|$，若 $i < j$，则 $A_{ij} = M_{ij} = 0$。

8. 令
$$(a_1 a_2 \cdots a_n) = \begin{vmatrix} a_1 & 1 & & & \\ -1 & a_2 & 1 & & \\ & -1 & a_3 & \ddots & \\ & & \ddots & \ddots & 1 \\ & & & -1 & a_n \end{vmatrix},$$
证明关于连分数的如下等式成立：
$$a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{\ddots + \cfrac{1}{a_{n-1} + \cfrac{1}{a_n}}}}} = \frac{(a_1 a_2 \cdots a_n)}{(a_2 a_3 \cdots a_n)}.$$

9. 求证：若下列 $n$ 阶行列式中 $a \neq b$，则
$$\begin{vmatrix} a+b & ab & 0 & \cdots & 0 & 0 \\ 1 & a+b & ab & \cdots & 0 & 0 \\ 0 & 1 & a+b & \cdots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \cdots & 1 & a+b \end{vmatrix} = \frac{a^{n+1} - b^{n+1}}{a - b}.$$

10. 求 $n\ (n > 1)$ 阶行列式的值：
$$\begin{vmatrix} a & b & 0 & 0 & \cdots & 0 & 0 \\ 0 & a & b & 0 & \cdots & 0 & 0 \\ 0 & 0 & a & b & \cdots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \cdots & a & b \\ b & 0 & 0 & 0 & \cdots & 0 & a \end{vmatrix}.$$

11. 求下列行列式的值：
$$\begin{vmatrix} a_0 & a_1 & a_2 & \cdots & a_n \\ a_0 & x & a_2 & \cdots & a_n \\ a_0 & a_1 & x & \cdots & a_n \\ \vdots & \vdots & \vdots & & \vdots \\ a_0 & a_1 & a_2 & \cdots & x \end{vmatrix}.$$

---


12. 求下列 $n$ 阶行列式的值：
$$\begin{vmatrix} x & a & \cdots & a \\ -a & x & \cdots & a \\ \vdots & \vdots & & \vdots \\ -a & -a & \cdots & x \end{vmatrix}.$$

13. 设 $|\boldsymbol{A}|$ 是 $n$ 阶行列式，$|\boldsymbol{A}|$ 的第 $(i, j)$ 元素 $a_{ij} = \max\{i, j\}$，试求 $|\boldsymbol{A}|$ 的值。

14. 设 $|\boldsymbol{A}|$ 是 $n$ 阶行列式，$|\boldsymbol{A}|$ 的第 $(i, j)$ 元素 $a_{ij} = |i - j|$，试求 $|\boldsymbol{A}|$ 的值。

15. 求下列 $n$ 阶行列式的值：
$$|\boldsymbol{A}| = \begin{vmatrix} 1 & x_1(x_1 - a) & x_1^2(x_1 - a) & \cdots & x_1^{n-1}(x_1 - a) \\ 1 & x_2(x_2 - a) & x_2^2(x_2 - a) & \cdots & x_2^{n-1}(x_2 - a) \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n(x_n - a) & x_n^2(x_n - a) & \cdots & x_n^{n-1}(x_n - a) \end{vmatrix}.$$

---


#### 1.12.2 训练题答案

**一、单选题**

1. 应选择 (C)。本题可将行列式展开得到一个一次方程，再解方程。但这样比较繁。注意到前两行之和为 $2, 5, 3$，若 $x = 3$，则行列式的值就等于零。

2. 应选择 (C)。对这类题目一般没有必要将行列式的值求出来。我们注意到如按第一行展开，只有一项含有未知数 $x$，因此只需求出元素 $x$ 的代数余子式即可。它等于
$$(-1)^{1+2} \begin{vmatrix} 1 & 3 & 4 \\ -1 & -2 & -3 \\ -1 & -2 & -2 \end{vmatrix} = -1.$$

3. 应选择 (B)。根据行列式的组合定义，展开式中只有一项非零，即为
$$(-1)^{N(n, n-1, \cdots, 2, 1)} a_{n,1} a_{n-1,2} \cdots a_{2,n-1} a_{1n} = (-1)^{(n-1)+(n-2)+\cdots+1} = (-1)^{\frac{1}{2}n(n-1)}.$$

4. 应选择 (B)。这是个分块行列式，左上角一块的值为 $-ab$，右下角一块的值为 $df$，故行列式的值等于 $-abdf$。

5. 应选择 (D)。对第二个行列式需要用行列式的性质加以变形，使之成为和第一个行列式形状相似的行列式。将 $|\boldsymbol{A}|$ 的第一列依次和 $|\boldsymbol{B}|$ 的第 $m$ 列，第 $m-1$ 列，$\cdots$，第一列对换，共换了 $m$ 次；再将 $|\boldsymbol{A}|$ 的第二列依次和 $|\boldsymbol{B}|$ 的第 $m$ 列，第 $m-1$ 列，$\cdots$，第一列对换，又换了 $m$ 次；$\cdots$。综上所述，经过 $mn$ 次对换可将第二个行列式变为第一个行列式。因此 $|\boldsymbol{D}| = (-1)^{mn}|\boldsymbol{C}|$，于是 $|\boldsymbol{C}| : |\boldsymbol{D}| = (-1)^{mn}$。

---


6. 应选择 (D)。因为将该行列式的任意一行加到另一行上去得到的行列式有一行元素全是偶数（注意：零也是偶数），由性质知道，可将因子 $2$ 提出，剩下的行列式的元素都是整数，其值也是整数，乘以 $2$ 后必是偶数。

7. 应选择 (A)。这是一个 Vandermonde 行列式，计算得其值为 $12$。

8. 应选择 (D)。本题可以按行（或列）展开法做，但是下列做法比较容易。将行列式的第二、第三行对换，再将得到的行列式的第二、第三列对换，得到一个分块行列式：
$$\begin{vmatrix} a_1 & b_1 & 0 & 0 \\ a_2 & b_2 & 0 & 0 \\ 0 & 0 & c_1 & d_1 \\ 0 & 0 & c_2 & d_2 \end{vmatrix},$$
其值容易算出，等于 $(a_1 b_2 - a_2 b_1)(c_1 d_2 - c_2 d_1)$。

9. 应选择 (B)。本题应用行列式性质来做。将原行列式的第一、第三行对换，行列式的值变号。再将所得行列式的第一行乘以 $3$，第二行乘以 $2$，第三行乘以 $-1$，根据行列式的性质可知，最后行列式的值为原行列式值的 $6$ 倍。

10. 应选择 (B)。当方程组的系数行列式不等于零时，方程组有唯一解。因此
$$\begin{vmatrix} b & 1 & 2 \\ 2 & -1 & 2 \\ 4 & 1 & 4 \end{vmatrix} \neq 0,$$
解得 $b \neq 2$。

11. 应选择 (C)。行列式转置后的值等于原行列式的值。

12. 应选择 (C)。

13. 应选择 (C)。本题可先把行列式计算出来再解方程，但下列方法更好。注意到若第 $(3, 2)$ 元素 $x^2 + 1$ 等于 $2$，则行列式的第一、第二列相同，行列式的值等于零，故 $x^2 = 1$，即 $x = \pm 1$。同理，若第 $(2, 3)$ 元素 $x^2 - 2$ 等于 $2$，则行列式的第一、第二行相同，行列式的值等于零，故 $x^2 = 4$，即 $x = \pm 2$。

---


14. 应选择 (D)。将原行列式的第一列乘以 $-1$ 分别加到其他 $3$ 列，得
$$f(x) = \begin{vmatrix} x-2 & 1 & 0 & -1 \\ 2x-2 & 1 & 0 & -1 \\ 3x-3 & 1 & x-2 & -2 \\ 4x & -3 & x-7 & -3 \end{vmatrix} = \begin{vmatrix} x-2 & 1 & 0 & 0 \\ 2x-2 & 1 & 0 & 0 \\ 3x-3 & 1 & x-2 & -1 \\ 4x & -3 & x-7 & -6 \end{vmatrix}$$
$$= \begin{vmatrix} x-2 & 1 \\ 2x-2 & 1 \end{vmatrix} \cdot \begin{vmatrix} x-2 & -1 \\ x-7 & -6 \end{vmatrix} = 5x(x-1).$$
所以 $f(x)$ 有两个根 $x_1 = 0$，$x_2 = 1$。

15. 应选择 (B)。用递推法可求得行列式的值为 $n + 1$。

**二、填空题**

1. 行列式的第一、第二行元素成比例，因此行列式的值为零。

2. $x^4$（可参考例 1.37）。

3. $\displaystyle\prod_{1 \leq i < j \leq 4}(x_i y_j - x_j y_i)$（可参考例 1.26）。

4. 观察 $|\boldsymbol{A}|, |\boldsymbol{B}|$ 的异同就可以发现，如将 $|\boldsymbol{B}|$ 的各行依次提出公因子 $b_1, b_2, \cdots, b_n$，再将 $|\boldsymbol{B}|$ 的各列依次提出公因子 $b_1, b_2, \cdots, b_n$，余下的行列式就是 $|\boldsymbol{A}|$，因此 $|\boldsymbol{B}| = b_1^2 b_2^2 \cdots b_n^2 c$。

---


5. 将第二列乘以 $-1$ 加到第一列上，将第二列乘以 $-2$ 加到第三列上，再将 $100$ 从第二列提出即可计算出行列式的值为 $2000$。

6. $1$。

7. 将第二行乘以 $-1$ 加到第一行，行列式的值不变，再按第一行进行展开，即得 $|\boldsymbol{A}| = A_{11} + A_{12} + A_{13} = 1$。

8. 计算下列行列式：
$$|\boldsymbol{B}| = \begin{vmatrix} 1 & 1 & 1 & 2 \\ 1 & 1 & -2 & 0 \\ 1 & 2 & 0 & -1 \\ 1 & 1 & 1 & 1 \end{vmatrix} = -3,$$
注意到这个行列式和 $|\boldsymbol{A}|$ 前 $3$ 行相同，因此第四行元素的代数余子式也相同，故 $A_{41} + A_{42} + A_{43} + A_{44} = -3$。

9. 由 $|\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\beta}| = a$ 得 $|\boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\alpha}_1, \boldsymbol{\beta}| = a$，由 $|\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_3, \boldsymbol{\gamma}, \boldsymbol{\alpha}_2| = b$ 得 $|\boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\alpha}_1, \boldsymbol{\gamma}| = b$，故 $|\boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\alpha}_1, \boldsymbol{\beta} + \boldsymbol{\gamma}| = a + b$。

10. $(-1)^{n-1}c$。

11. $(-1)^n c$。

12. 这个过程相当于将 $|\boldsymbol{A}|$ 的关于"中轴"对称的两列都对换，然后将对称的两行也对换。因此行列式的值不变，为 $c$。

13. 相当于将 $|\boldsymbol{A}|$ 的每个第 $i$ 行乘以 $(-1)^i$，每个第 $j$ 列乘以 $(-1)^j$。因此行列式的值不变，仍为 $c$。

14. 相当于将 $|\boldsymbol{A}|$ 的每个第 $i$ 行乘以 $b^i$，每个第 $j$ 列乘以 $b^{-j}$。因此行列式的值不变，仍为 $c$。

15. 将得到的行列式按列拆分为行列式的和，可知：若 $n$ 为奇数，则得到的行列式的值为 $2c$；若 $n$ 为偶数，则得到的行列式的值为零。

---


**三、解答题**

1. $(-1)^{\frac{1}{2}n(n-1)} n!$。

2. $-6$。

3. 方程的根为 $a_1, a_2, \cdots, a_{n-1}$。

4. 该方程组的系数行列式是一个 Vandermonde 行列式，因为 $a_i$ 各不相同，故此行列式不等于零，从而方程组有唯一组解。

5. 依次将第 $i$ 行乘以 $-1$ 加到第 $i+1$ 行上 $(i = 1, 2, \cdots, n-1)$，就得到一个 Vandermonde 行列式，因此答案是：$\displaystyle\prod_{1 \leq i < j \leq n}(x_j - x_i)$。

6. 方程的根为 $0, 1, 2, \cdots, n-2$。

7. $M_{ij}$ 是一个上三角行列式且主对角线上至少有一个 $0$，因此 $M_{ij} = 0$，从而 $A_{ij} = 0$。

8. 行列式按第一列展开得到递推式，再对 $n$ 进行归纳即得。

9. 利用例 1.14。

10. 按第一列展开即得行列式的值为 $a^n + (-1)^{n+1}b^n$。

---


11. 从第二行起，每一行减去第一行得到一个上三角行列式，因此答案为 $a_0(x - a_1) \cdots (x - a_n)$。

12. 利用例 1.16 或例 1.23 的结论或方法可得行列式的值为 $\dfrac{1}{2}\bigl((x-a)^n + (x+a)^n\bigr)$。

13. 写出行列式为
$$\begin{vmatrix} 1 & 2 & 3 & \cdots & n \\ 2 & 2 & 3 & \cdots & n \\ 3 & 3 & 3 & \cdots & n \\ \vdots & \vdots & \vdots & & \vdots \\ n & n & n & \cdots & n \end{vmatrix}.$$
依次将第 $i$ 行乘以 $-1$ 加到第 $i-1$ 行上去 $(i = 2, \cdots, n)$，就可以得到一个下三角行列式，求得值为 $(-1)^{n-1}n$。

14. 写出行列式为
$$\begin{vmatrix} 0 & 1 & 2 & \cdots & n-1 \\ 1 & 0 & 1 & \cdots & n-2 \\ 2 & 1 & 0 & \cdots & n-3 \\ \vdots & \vdots & \vdots & & \vdots \\ n-1 & n-2 & n-3 & \cdots & 0 \end{vmatrix}.$$
从最后一列起每一列减去前一列，再将得到的行列式的最后一行加到前面的每一行上去，就可以得到一个下三角行列式，求得值为 $(-1)^{n-1}(n-1)2^{n-2}$。

---


15. 将原行列式升阶为如下行列式：
$$|\boldsymbol{B}| = \begin{vmatrix} 1 & x_1 - a & x_1(x_1 - a) & x_1^2(x_1 - a) & \cdots & x_1^{n-1}(x_1 - a) \\ 1 & x_2 - a & x_2(x_2 - a) & x_2^2(x_2 - a) & \cdots & x_2^{n-1}(x_2 - a) \\ \vdots & \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n - a & x_n(x_n - a) & x_n^2(x_n - a) & \cdots & x_n^{n-1}(x_n - a) \\ 1 & y - a & y(y - a) & y^2(y - a) & \cdots & y^{n-1}(y - a) \end{vmatrix}.$$
利用例 1.27 可求出 $|\boldsymbol{B}|$ 的值。另一方面，将 $|\boldsymbol{B}|$ 按最后一行展开成为关于 $y$ 的多项式。若 $a = 0$，比较 $y$ 前面的系数可得
$$|\boldsymbol{A}| = \prod_{1 \leq i < j \leq n}(x_j - x_i)\left(\sum_{i=1}^{n}x_1 \cdots x_{i-1}x_{i+1} \cdots x_n\right);$$
若 $a \neq 0$，比较常数项可得
$$|\boldsymbol{A}| = \frac{1}{a}\prod_{1 \leq i < j \leq n}(x_j - x_i)\left(\prod_{i=1}^{n}x_i - \prod_{i=1}^{n}(x_i - a)\right).$$


---

# 第2章 矩阵


## §2.1 基本概念

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


### 特殊矩阵

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


## §2.3 矩阵的运算

### 1. 加法与数乘

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

### 2. 乘法

> [!definition] 矩阵的乘法
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$，$\boldsymbol{B} = (b_{ij})_{n \times p}$，定义 $\boldsymbol{AB} = (c_{ij})_{m \times p}$，其中
> $$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}, \quad i = 1, 2, \cdots, m; \quad j = 1, 2, \cdots, p.$$

> [!theorem] 矩阵乘法的性质
> 1. **结合律**：$(\boldsymbol{AB})\boldsymbol{C} = \boldsymbol{A}(\boldsymbol{BC})$
> 2. **分配律**：$\boldsymbol{A}(\boldsymbol{B} + \boldsymbol{C}) = \boldsymbol{AB} + \boldsymbol{AC}$，$(\boldsymbol{B} + \boldsymbol{C})\boldsymbol{A} = \boldsymbol{BA} + \boldsymbol{CA}$
> 3. **单位阵**：$\boldsymbol{I}_m\boldsymbol{A} = \boldsymbol{A}\boldsymbol{I}_n = \boldsymbol{A}$
> 4. **零矩阵**：$\boldsymbol{O}\boldsymbol{A} = \boldsymbol{O}$，$\boldsymbol{A}\boldsymbol{O} = \boldsymbol{O}$


### 3. 转置

> [!definition] 转置
> 设 $\boldsymbol{A} = (a_{ij})_{m \times n}$，称 $\boldsymbol{A}' = (a_{ji})_{n \times m}$ 为 $\boldsymbol{A}$ 的 **转置**（transpose）.

> [!theorem] 转置的性质
> 1. $(\boldsymbol{A}')' = \boldsymbol{A}$
> 2. $(\boldsymbol{A} + \boldsymbol{B})' = \boldsymbol{A}' + \boldsymbol{B}'$
> 3. $(k\boldsymbol{A})' = k\boldsymbol{A}'$
> 4. $(\boldsymbol{AB})' = \boldsymbol{B}'\boldsymbol{A}'$

### 4. 共轭

> [!theorem] 共轭的性质
> 1. $\overline{\boldsymbol{A} + \boldsymbol{B}} = \overline{\boldsymbol{A}} + \overline{\boldsymbol{B}}$
> 2. $\overline{k\boldsymbol{A}} = \overline{k}\,\overline{\boldsymbol{A}}$
> 3. $\overline{\boldsymbol{AB}} = \overline{\boldsymbol{A}}\,\overline{\boldsymbol{B}}$
> 4. $\overline{\boldsymbol{A}'} = (\overline{\boldsymbol{A}})'$

### 5. 幂与矩阵多项式

> [!definition] 矩阵的幂
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，定义 $\boldsymbol{A}^0 = \boldsymbol{I}_n$，$\boldsymbol{A}^k = \boldsymbol{A}^{k-1}\boldsymbol{A}$（$k \geq 1$）.

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$f(x), g(x)$ 为数域 $P$ 上的多项式，则：
> 1. $f(\boldsymbol{A})g(\boldsymbol{A}) = g(\boldsymbol{A})f(\boldsymbol{A})$
> 2. 若 $f(x) = g(x)h(x)$，则 $f(\boldsymbol{A}) = g(\boldsymbol{A})h(\boldsymbol{A})$

### 6. 求和符号

矩阵运算中常用求和符号 $\sum$ 简化表达. 例如矩阵乘法可写为：
$$(\boldsymbol{AB})_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}.$$


## §2.4 可逆矩阵

### 1. 基本概念

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


### 2. 求逆阵的方法

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


### 3. 可逆阵的等价条件

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


### 4. 左逆与右逆

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


## §2.5 初等变换及其应用

### 1. 初等矩阵与初等变换

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

### 2. 相抵标准型

> [!theorem] 相抵标准型
> 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，则存在 $m$ 阶可逆阵 $\boldsymbol{P}$ 和 $n$ 阶可逆阵 $\boldsymbol{Q}$，使得
> $$\boldsymbol{PAQ} = \begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix},$$
> 其中 $r = r(\boldsymbol{A})$ 为 $\boldsymbol{A}$ 的秩. 此形式称为 $\boldsymbol{A}$ 的 **相抵标准型**.


### 3. 矩阵秩的等式与不等式

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


### 4. 线性方程组的求解

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


### 5. 初等变换求矩阵的秩

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


## §2.6 伴随矩阵

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

### 伴随矩阵的性质

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

> [!solution]
> $|k\boldsymbol{A}^*| = k^n |\boldsymbol{A}^*| = k^n |\boldsymbol{A}|^{n-1} = k^n d^{n-1}$. □

**例 2.10** 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$(\boldsymbol{A}^*)^*$ 是什么？

> [!solution]
> 若 $\boldsymbol{A}$ 可逆：$(\boldsymbol{A}^*)^* = (|\boldsymbol{A}|\boldsymbol{A}^{-1})^* = ||\boldsymbol{A}|\boldsymbol{A}^{-1}| \cdot (|\boldsymbol{A}|\boldsymbol{A}^{-1})^{-1} = |\boldsymbol{A}|^{n-1} \cdot \dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A} = |\boldsymbol{A}|^{n-2}\boldsymbol{A}$.
> 
> 一般地，对任意 $n \geq 2$：$(\boldsymbol{A}^*)^* = |\boldsymbol{A}|^{n-2}\boldsymbol{A}$. □


### 6. 矩阵的相抵标准型

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


## §2.7 矩阵的迹

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


### 7. 矩阵的满秩分解

**例 2.18** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$r(\boldsymbol{A}) = r$，则 $\boldsymbol{A}$ 可分解为 $\boldsymbol{A} = \boldsymbol{HL}$，其中 $\boldsymbol{H}$ 为 $m \times r$ 列满秩矩阵，$\boldsymbol{L}$ 为 $r \times n$ 行满秩矩阵.

> [!proof]-
> 由相抵标准型，存在可逆阵 $\boldsymbol{P}, \boldsymbol{Q}$ 使得
> $$\boldsymbol{A} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{Q} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix} \cdot (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}.$$
> 令 $\boldsymbol{H} = \boldsymbol{P}\begin{pmatrix} \boldsymbol{I}_r \\ \boldsymbol{O} \end{pmatrix}$，$\boldsymbol{L} = (\boldsymbol{I}_r, \boldsymbol{O})\boldsymbol{Q}$ 即可. □

> [!theorem]
> 矩阵 $\boldsymbol{A}$ 的满秩分解在相差可逆因子的意义下唯一：若 $\boldsymbol{A} = \boldsymbol{HL} = \boldsymbol{H}_1\boldsymbol{L}_1$，则存在 $r$ 阶可逆阵 $\boldsymbol{P}$ 使得 $\boldsymbol{H}_1 = \boldsymbol{HP}$，$\boldsymbol{L}_1 = \boldsymbol{P}^{-1}\boldsymbol{L}$.


## §2.8 矩阵乘法与行列式的计算

**例 2.19** 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵，求证：$|\boldsymbol{AB}| = |\boldsymbol{A}||\boldsymbol{B}|$.

> [!proof]-
> 若 $\boldsymbol{A}$ 可逆，则 $\boldsymbol{A}$ 可表示为初等矩阵的乘积 $\boldsymbol{A} = \boldsymbol{P}_1\boldsymbol{P}_2\cdots\boldsymbol{P}_s$. 于是 $|\boldsymbol{AB}| = |\boldsymbol{P}_1\cdots\boldsymbol{P}_s\boldsymbol{B}| = |\boldsymbol{P}_1|\cdots|\boldsymbol{P}_s||\boldsymbol{B}| = |\boldsymbol{A}||\boldsymbol{B}|$.
> 
> 若 $\boldsymbol{A}$ 不可逆，则 $r(\boldsymbol{A}) < n$，$r(\boldsymbol{AB}) \leq r(\boldsymbol{A}) < n$，故 $|\boldsymbol{AB}| = 0 = |\boldsymbol{A}||\boldsymbol{B}|$. □

**例 2.20** 设 $\boldsymbol{A}$ 为 $n$ 阶正交阵（$\boldsymbol{A}'\boldsymbol{A} = \boldsymbol{I}_n$），求证：$|\boldsymbol{A}| = \pm 1$.

> [!proof]-
> $|\boldsymbol{A}'\boldsymbol{A}| = |\boldsymbol{I}_n| = 1$，又 $|\boldsymbol{A}'\boldsymbol{A}| = |\boldsymbol{A}'||\boldsymbol{A}| = |\boldsymbol{A}|^2$，故 $|\boldsymbol{A}|^2 = 1$，$|\boldsymbol{A}| = \pm 1$. □

### 利用矩阵乘法计算行列式

**例 2.21** 设 $\boldsymbol{A}$ 为 $m \times n$ 矩阵，$\boldsymbol{B}$ 为 $n \times m$ 矩阵，$n > m$，求证：$|\boldsymbol{AB}| = 0$.

> [!proof]-
> $r(\boldsymbol{AB}) \leq \min\{r(\boldsymbol{A}), r(\boldsymbol{B})\} \leq m < n$，但 $\boldsymbol{AB}$ 为 $n$ 阶方阵，故 $|\boldsymbol{AB}| = 0$. □

**例 2.22** 计算行列式：
$$D_n = \begin{vmatrix} a_1^2 + a_2^2 + \cdots + a_n^2 & a_1b_1 + a_2b_2 + \cdots + a_nb_n \\ a_1b_1 + a_2b_2 + \cdots + a_nb_n & b_1^2 + b_2^2 + \cdots + b_n^2 \end{vmatrix}.$$

> [!solution]
> 令 $\boldsymbol{\alpha} = (a_1, a_2, \cdots, a_n)'$，$\boldsymbol{\beta} = (b_1, b_2, \cdots, b_n)'$，则
> $$D_n = \begin{vmatrix} \boldsymbol{\alpha}'\boldsymbol{\alpha} & \boldsymbol{\alpha}'\boldsymbol{\beta} \\ \boldsymbol{\beta}'\boldsymbol{\alpha} & \boldsymbol{\beta}'\boldsymbol{\beta} \end{vmatrix}.$$
> 由 Cauchy-Binet 公式，当 $n = 2$ 时 $D_2 = (a_1b_2 - a_2b_1)^2$；当 $n > 2$ 时 $D_n = 0$. □


### 矩阵的行列式恒等式

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


### 利用矩阵分解求行列式

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


## §2.9 Cauchy-Binet 公式

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


### 子式的计算

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


## §2.10 分块初等变换与降阶公式

### 1. 分块矩阵的初等变换

> [!definition] 分块初等矩阵
> 对分块单位阵施行一次初等变换得到的分块矩阵称为 **分块初等矩阵**. 分块初等矩阵有可逆阵的相应结论.

### 2. 降阶公式

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


### 3. 利用分块初等变换求逆阵

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


## §2.11 摄动法及其应用

> [!definition] 摄动法
> **摄动法**（perturbation method）是一种处理矩阵问题的技巧：先将一般矩阵 $\boldsymbol{A}$ 摄动为可逆矩阵 $t\boldsymbol{I} + \boldsymbol{A}$（$t$ 为充分小的参数），在可逆情形下证明结论，再通过取极限 $t \to 0$ 得到一般情形的结论.

> [!theorem]
> 设 $\boldsymbol{A}$ 为 $n$ 阶方阵，$t$ 为参数，则对充分小的 $|t|$，$t\boldsymbol{I}_n + \boldsymbol{A}$ 可逆.

> [!proof]-
> $|t\boldsymbol{I}_n + \boldsymbol{A}| = t^n + \cdots + |\boldsymbol{A}|$ 是关于 $t$ 的 $n$ 次多项式，至多有 $n$ 个根. 故对充分小的 $|t| \neq 0$，$t\boldsymbol{I}_n + \boldsymbol{A}$ 可逆. □

### 摄动法的应用

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


### 行列式的摄动法证明

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


### 综合应用

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


### 分块矩阵行列式的计算

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


### 秩不等式

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


### 矩阵的幂与多项式

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


### 分块矩阵技巧

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


## §2.12 基础训练

### 一、单选题

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


### 二、填空题

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


### 三、解答题

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

# 第3章 线性空间与线性方程组


## §3.1 基本概念

### 3.1.1 数域

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

### 3.1.2 线性空间的概念

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


### 3.1.3 线性子空间

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

### 3.1.4 向量的线性关系

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

### 3.1.5 基与维数

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

### 3.1.6 矩阵的秩

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

### 3.1.7 线性方程组

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

## §3.2 向量的线性关系

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


### 求向量组的秩和极大无关组

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


## §3.3 线性空间及其基

### 3.3.1 线性空间的同构

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

### 3.3.2 基变换与过渡矩阵

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

### 3.3.3 子空间的直和

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


### 3.3.4 商空间

> [!definition] 定义 3.16
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间，$U$ 是 $V$ 的子空间。在 $V$ 上定义等价关系：$\alpha \sim \beta \Leftrightarrow \alpha - \beta \in U$。$\alpha$ 所在的等价类记为 $\bar{\alpha} = \alpha + U = \{\alpha + u \mid u \in U\}$，称为**陪集**。所有陪集构成的集合 $V/U = \{\alpha + U \mid \alpha \in V\}$ 称为 $V$ 关于 $U$ 的**商集**。

> [!definition] 定义 3.17
> 在 $V/U$ 上定义加法和数乘：$(\alpha + U) + (\beta + U) = (\alpha + \beta) + U$，$k(\alpha + U) = k\alpha + U$。则 $V/U$ 构成线性空间，称为 $V$ 关于 $U$ 的**商空间**。

> [!theorem] 定理 3.30
> $\dim(V/U) = \dim V - \dim U$。

> [!proof]-
> 设 $\dim V = n$，$\dim U = r$。取 $U$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_n$。则 $\overline{\alpha_{r+1}}, \ldots, \overline{\alpha_n}$ 是 $V/U$ 的一组基。

## §3.4 线性同构和几何问题代数化

### 3.4.1 线性映射

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

### 3.4.2 线性映射的矩阵表示

> [!definition] 定义 3.21
> 设 $\varphi: V \to U$ 是线性映射，$\dim V = n$，$\dim U = m$。取 $V$ 的基 $\alpha_1, \ldots, \alpha_n$ 和 $U$ 的基 $\beta_1, \ldots, \beta_m$。设
> $$\varphi(\alpha_j) = \sum_{i=1}^m a_{ij}\beta_i, \quad j = 1, \ldots, n$$
> 则矩阵 $A = (a_{ij})_{m \times n}$ 称为 $\varphi$ 在给定基下的**表示矩阵**。


> [!theorem] 定理 3.34
> 设 $\varphi$ 在基 $\{\alpha_j\}$ 和 $\{\beta_i\}$ 下的表示矩阵为 $A$，$\alpha = \sum x_j\alpha_j$，$\varphi(\alpha) = \sum y_i\beta_i$，则 $y = Ax$。

> [!proof]-
> $\varphi(\alpha) = \varphi(\sum x_j\alpha_j) = \sum x_j\varphi(\alpha_j) = \sum_j x_j \sum_i a_{ij}\beta_i = \sum_i(\sum_j a_{ij}x_j)\beta_i = \sum_i (Ax)_i \beta_i$。故 $y = Ax$。

### 3.4.3 几何问题代数化

线性代数的重要应用之一是将几何问题转化为代数问题求解。

> [!example] 例 3.8
> 求过空间中三点 $A(1, 0, -1)$，$B(2, 1, 0)$，$C(0, 1, 1)$ 的平面方程。
> 
> **解**：设平面上任一点为 $P(x, y, z)$，则 $\vec{AP}$，$\vec{AB}$，$\vec{AC}$ 共面，即
> $$\begin{vmatrix} x-1 & y-0 & z+1 \\ 2-1 & 1-0 & 0+1 \\ 0-1 & 1-0 & 1+1 \end{vmatrix} = \begin{vmatrix} x-1 & y & z+1 \\ 1 & 1 & 1 \\ -1 & 1 & 2 \end{vmatrix} = 0$$
> 展开得 $(x-1)(2-1) - y(2+1) + (z+1)(1+1) = (x-1) - 3y + 2(z+1) = 0$，即 $x - 3y + 2z + 1 = 0$。


## §3.5 基变换与过渡矩阵

### 3.5.1 过渡矩阵的性质

> [!theorem] 定理 3.35
> 设从基 $\alpha_1, \ldots, \alpha_n$ 到基 $\beta_1, \ldots, \beta_n$ 的过渡矩阵为 $P$，从基 $\beta_1, \ldots, \beta_n$ 到基 $\gamma_1, \ldots, \gamma_n$ 的过渡矩阵为 $Q$，则从 $\{\alpha_i\}$ 到 $\{\gamma_i\}$ 的过渡矩阵为 $PQ$。

> [!proof]-
> $(\gamma_1, \ldots, \gamma_n) = (\beta_1, \ldots, \beta_n)Q = (\alpha_1, \ldots, \alpha_n)PQ$。

### 3.5.2 线性变换在不同基下的矩阵

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

### 3.5.3 不变子空间

> [!definition] 定义 3.23
> 设 $\varphi$ 是 $V$ 上的线性变换，$U$ 是 $V$ 的子空间。如果对任意 $\alpha \in U$，有 $\varphi(\alpha) \in U$，则称 $U$ 是 $\varphi$ 的**不变子空间**。

> [!theorem] 定理 3.38
> 设 $U$ 是 $\varphi$ 的不变子空间，$\dim U = r$，$\dim V = n$。取 $U$ 的基 $\alpha_1, \ldots, \alpha_r$，扩充为 $V$ 的基 $\alpha_1, \ldots, \alpha_n$，则 $\varphi$ 在此基下的矩阵为分块上三角阵：
> $$\begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix}$$
> 其中 $A_{11}$ 是 $r$ 阶方阵。

> [!proof]-
> 由于 $\varphi(\alpha_j) \in U$（$j = 1, \ldots, r$），其坐标后 $n-r$ 个分量为零。


## §3.6 子空间与商空间

### 3.6.1 子空间的运算

> [!theorem] 定理 3.39（交的维数下界）
> 设 $U_1, U_2$ 是 $n$ 维线性空间 $V$ 的子空间，则
> $$\dim(U_1 \cap U_2) \geq \dim U_1 + \dim U_2 - n$$

> [!proof]-
> 由维数公式 $\dim(U_1 + U_2) + \dim(U_1 \cap U_2) = \dim U_1 + \dim U_2$，且 $\dim(U_1 + U_2) \leq n$，即得。

> [!example] 例 3.9
> 设 $V = \mathbb{R}^4$，$U_1 = L(\alpha_1, \alpha_2)$，$U_2 = L(\beta_1, \beta_2)$，其中 $\alpha_1 = (1, 1, 0, 0)'$，$\alpha_2 = (0, 1, 1, 0)'$，$\beta_1 = (0, 0, 1, 1)'$，$\beta_2 = (1, 0, 0, 1)'$。求 $U_1 \cap U_2$ 的一组基。
> 
> **解**：设 $\xi \in U_1 \cap U_2$，则 $\xi = x_1\alpha_1 + x_2\alpha_2 = y_1\beta_1 + y_2\beta_2$。即 $x_1\alpha_1 + x_2\alpha_2 - y_1\beta_1 - y_2\beta_2 = 0$。解齐次方程组，得基础解系为 $(1, -1, 1, -1)'$，即 $x_1 = 1, x_2 = -1, y_1 = 1, y_2 = -1$。故 $\xi = \alpha_1 - \alpha_2 = (1, 0, -1, 0)'$，$U_1 \cap U_2 = L((1, 0, -1, 0)')$。


### 3.6.2  Grassmann 公式及其应用

> [!theorem] 定理 3.40
> 设 $U_1, U_2, U_3$ 是有限维线性空间 $V$ 的子空间，则
> $$\dim(U_1 + U_2 + U_3) = \dim U_1 + \dim U_2 + \dim U_3 - \dim(U_1 \cap U_2) - \dim(U_2 \cap U_3) - \dim(U_3 \cap U_1) + \dim(U_1 \cap U_2 \cap U_3)$$

> [!proof]-
> 对 $(U_1 + U_2) + U_3$ 应用维数公式即可。

> [!theorem] 定理 3.41
> 设 $V = U_1 \oplus U_2$，$W$ 是 $V$ 的子空间，则 $W = (W \cap U_1) \oplus (W \cap U_2)$ 一般不成立，但总有 $\dim W \leq \dim(W \cap U_1) + \dim(W \cap U_2)$ 不成立。实际上有：$W \supseteq (W \cap U_1) + (W \cap U_2)$，但直和分解不保证。

### 3.6.3 商空间的维数与基

> [!theorem] 定理 3.42
> 设 $U$ 是 $V$ 的子空间，$\pi: V \to V/U$ 是自然投影（$\pi(\alpha) = \bar{\alpha}$），则 $\pi$ 是线性映射，$\mathrm{Ker}\,\pi = U$，$\mathrm{Im}\,\pi = V/U$。

> [!theorem] 定理 3.43（同态基本定理）
> 设 $\varphi: V \to W$ 是线性映射，则 $V/\mathrm{Ker}\,\varphi \cong \mathrm{Im}\,\varphi$。

> [!proof]-
> 定义 $\bar{\varphi}: V/\mathrm{Ker}\,\varphi \to \mathrm{Im}\,\varphi$ 为 $\bar{\varphi}(\bar{\alpha}) = \varphi(\alpha)$。验证这是良定义的同构映射。


## §3.7 矩阵的秩

本节系统地讨论矩阵秩的性质及其应用。

### 3.7.1 秩的基本性质

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

### 3.7.2 秩的计算方法

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


### 3.7.3 秩的等价刻画

> [!theorem] 定理 3.50
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$。则：
> 1. $A$ 存在一个 $r$ 阶非奇异子式；
> 2. $A$ 的所有 $r+1$ 阶子式（若存在）全为零。

> [!proof]-
> 由于 $r(A) = r$，$A$ 有 $r$ 个线性无关的行，设为第 $i_1, \ldots, i_r$ 行。由这 $r$ 行构成的 $r \times n$ 矩阵有行秩 $r$，故有 $r$ 个线性无关的列，对应的 $r$ 阶子式非零。又若存在 $r+1$ 阶非零子式，则相应的 $r+1$ 行线性无关，与 $r(A) = r$ 矛盾。

> [!theorem] 定理 3.51
> 矩阵的秩等于其非零子式的最大阶数。

## §3.8 相抵标准型及其应用

### 3.8.1 相抵标准型

> [!theorem] 定理 3.52
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r$，则存在 $m$ 阶非异阵 $P$ 和 $n$ 阶非异阵 $Q$，使得
> $$PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$$


### 3.8.2 矩阵的满秩分解

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

### 3.8.3 相抵标准型的应用

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

## §3.9 线性方程组的解及其应用

### 3.9.1 线性方程组的解的讨论


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


### 3.9.2 齐次线性方程组

> [!theorem] 定理 3.57
> 设 $A$ 是 $m \times n$ 矩阵，$r(A) = r < n$。则齐次线性方程组 $Ax = 0$ 的基础解系恰含 $n-r$ 个向量。

> [!proof]-
> 由定理 3.17，解空间维数 $\dim V_A = n - r$。

> [!example] 例 3.13
> 求齐次线性方程组的基础解系：
> $$\begin{cases} x_1 + 2x_2 + 3x_3 + 4x_4 = 0 \\ 2x_1 + 4x_2 + 5x_3 + 6x_4 = 0 \\ 3x_1 + 6x_2 + 8x_3 + 10x_4 = 0 \end{cases}$$
> 
> **解**：系数矩阵 $A$ 的行最简形为 $\begin{pmatrix} 1 & 2 & 0 & -2 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，$r(A) = 2$，$n = 4$，基础解系含 2 个向量。$x_1 = -2x_2 + 2x_4$，$x_3 = -2x_4$。令 $(x_2, x_4) = (1, 0)$ 得 $\eta_1 = (-2, 1, 0, 0)'$；令 $(x_2, x_4) = (0, 1)$ 得 $\eta_2 = (2, 0, -2, 1)'$。

### 3.9.3 非齐次线性方程组

> [!theorem] 定理 3.58
> 设 $Ax = b$ 有解，$\gamma_0$ 是特解，$\eta_1, \ldots, \eta_{n-r}$ 是 $Ax = 0$ 的基础解系，则通解为 $\gamma = \gamma_0 + k_1\eta_1 + \cdots + k_{n-r}\eta_{n-r}$。


> [!example] 例 3.14
> 解线性方程组：
> $$\begin{cases} x_1 + 2x_2 + 3x_3 + 4x_4 = 5 \\ 2x_1 + 4x_2 + 5x_3 + 6x_4 = 8 \\ 3x_1 + 6x_2 + 8x_3 + 10x_4 = 13 \end{cases}$$
> 
> **解**：增广矩阵的行最简形为 $\begin{pmatrix} 1 & 2 & 0 & -2 & | & 2 \\ 0 & 0 & 1 & 2 & | & 1 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}$，$r(A) = r(A|b) = 2$，有无穷多解。$x_1 = 2 - 2x_2 + 2x_4$，$x_3 = 1 - 2x_4$。特解：令 $x_2 = x_4 = 0$ 得 $\gamma_0 = (2, 0, 1, 0)'$。基础解系同例 3.13。通解：$\gamma = (2, 0, 1, 0)' + k_1(-2, 1, 0, 0)' + k_2(2, 0, -2, 1)'$。

### 3.9.4 矩阵方程

> [!theorem] 定理 3.59
> 矩阵方程 $AX = B$ 有解的充要条件是 $r(A) = r(A|B)$。通解为 $X = X_0 + (I - A^-A)Y$，其中 $X_0$ 是特解，$Y$ 是任意适当阶矩阵。

> [!example] 例 3.15
> 解矩阵方程 $AX = B$，其中 $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 6 & 8 \end{pmatrix}$，$B = \begin{pmatrix} 1 & 4 \\ 2 & 7 \\ 3 & 11 \end{pmatrix}$。
> 
> **解**：增广矩阵 $(A|B)$ 的行最简形显示 $r(A) = r(A|B) = 2$。$X_0 = \begin{pmatrix} -1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$ 是特解。$A^-A$ 的计算给出通解形式。


### 3.9.5 线性方程组在解析几何中的应用

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


## §3.10 基础训练

### 一、填空题

1. 向量组 $\alpha_1 = (1, 2, 3)'$，$\alpha_2 = (2, 4, a)'$，$\alpha_3 = (3, 6, 9)'$ 线性相关的充要条件是 $a = $______。

2. 设 $A$ 是 $4 \times 5$ 矩阵，$r(A) = 3$，则 $Ax = 0$ 的基础解系含______个向量。

3. 设 $V$ 是 $n$ 维线性空间，$\varphi$ 是 $V$ 上的线性变换，则 $\dim \mathrm{Ker}\,\varphi + \dim \mathrm{Im}\,\varphi = $______。

### 二、选择题

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

### 三、计算题

1. 求向量组 $\alpha_1 = (1, 0, 2, 1)'$，$\alpha_2 = (1, 2, 0, 1)'$，$\alpha_3 = (2, 1, 3, 2)'$，$\alpha_4 = (2, 5, -1, 4)'$ 的秩和一个极大无关组。

2. 设 $A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & a & 3 \\ 1 & 3 & 2 \end{pmatrix}$。问 $a$ 取何值时 $r(A) = 2$？并求此时 $Ax = 0$ 的通解。

3. 解矩阵方程 $XA = B$，其中 $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$，$B = \begin{pmatrix} 2 & 1 \\ 3 & 2 \\ 1 & 0 \end{pmatrix}$。

### 四、证明题

1. 设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times m$ 矩阵，$m > n$。证明：$|AB| = 0$。

2. 设 $A$ 是 $n$ 阶幂等矩阵（即 $A^2 = A$），证明：$r(A) + r(I - A) = n$。

3. 设 $U_1, U_2, U_3$ 是有限维线性空间 $V$ 的子空间，证明：
   $$\dim(U_1 + U_2 + U_3) \leq \dim U_1 + \dim U_2 + \dim U_3$$


### 参考答案与提示

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


### 进阶习题

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

### 补充例题

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

### 第3章小结

本章主要内容包括：

1. **线性空间的基本概念**：数域、线性空间、子空间、基与维数。
2. **向量的线性关系**：线性相关与线性无关、极大无关组、秩。
3. **线性空间的结构**：同构、基变换、过渡矩阵、直和分解、商空间。
4. **线性映射**：线性映射的定义、核与像、秩-零化度定理、矩阵表示。
5. **矩阵的秩**：秩的性质、计算方法、Sylvester 和 Frobenius 不等式。
6. **相抵标准型**：标准型的求法、满秩分解、广义逆。
7. **线性方程组**：解的判定、齐次与非齐次方程组的解的结构、Cramer 法则。
8. **几何应用**：直线与平面的方程、位置关系的判定。


### 复习题

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


### 复习题解答与提示

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


### 综合测试题

1. 设 $A$ 是 $n$ 阶方阵，$r(A) = 1$。证明：$A$ 的特征多项式为 $\lambda^n - \mathrm{tr}(A)\lambda^{n-1}$。

2. 设 $A$ 是 $n$ 阶实对称正定矩阵。证明：对任意正整数 $k$，存在唯一的实对称正定矩阵 $B$ 使得 $B^k = A$。

3. 设 $A, B$ 是 $n$ 阶方阵，$AB = BA$，且 $A$ 有 $n$ 个不同的特征值。证明：$B$ 可表示为 $A$ 的多项式。

4. 设 $V$ 是 $n$ 维线性空间，$\varphi$ 是 $V$ 上的幂等线性变换（$\varphi^2 = \varphi$）。证明：存在 $V$ 的一组基，使得 $\varphi$ 在此基下的矩阵为 $\mathrm{diag}(I_r, O)$，其中 $r = r(\varphi)$。

5. 设 $A$ 是 $m \times n$ 实矩阵，$b \in \mathbb{R}^m$。线性方程组 $Ax = b$ 的最小二乘解是满足 $\|Ax - b\|$ 最小的 $x$。证明：$x$ 是最小二乘解当且仅当 $A'Ax = A'b$。

### 本章学习要点

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

# 第5章 多项式


## §5.1 基本概念

### 5.1.1 一元多项式代数

> [!definition]
> 设 $\mathbb{F}$ 是一个数域, $x$ 是未定元, $a_0, a_1, \cdots, a_n \in \mathbb{F}$ $(n \geq 0, a_n 
eq 0)$, 称形式表达式
> $$a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$
> 为数域 $\mathbb{F}$ 上关于未定元 $x$ 的 $n$ 次多项式. 数域 $\mathbb{F}$ 上的一元多项式全体组成的集合记为 $\mathbb{F}[x]$.

**运算及运算法则**

(1) 加法: 设 $f(x), g(x)$ 是 $\mathbb{F}$ 上两个多项式, 适当添上若干个零, 可设
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0,$$
$$g(x) = b_n x^n + b_{n-1} x^{n-1} + \cdots + b_1 x + b_0,$$
定义 $f(x)$ 和 $g(x)$ 的加法如下:
$$f(x) + g(x) = (a_n + b_n) x^n + (a_{n-1} + b_{n-1}) x^{n-1} + \cdots + (a_1 + b_1) x + (a_0 + b_0).$$

(2) 数乘: 设
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0,$$
又 $k$ 是 $\mathbb{F}$ 中的数, 则定义 $k$ 和 $f(x)$ 的数乘为
$$kf(x) = ka_n x^n + ka_{n-1} x^{n-1} + \cdots + ka_1 x + ka_0.$$


(3) 乘法: 设 $f(x), g(x)$ 如 (1), 定义 $f(x)$ 和 $g(x)$ 的乘法如下:
$$f(x)g(x) = c_{2n} x^{2n} + c_{2n-1} x^{2n-1} + \cdots + c_1 x + c_0,$$
其中
$$c_k = a_0 b_k + a_1 b_{k-1} + \cdots + a_k b_0, \quad 0 \leq k \leq 2n.$$

多项式的加法、数乘和乘法适合下列运算法则:
- 加法交换律: $f(x) + g(x) = g(x) + f(x)$;
- 加法结合律: $(f(x) + g(x)) + h(x) = f(x) + (g(x) + h(x))$;
- 乘法交换律: $f(x)g(x) = g(x)f(x)$;
- 乘法结合律: $(f(x)g(x))h(x) = f(x)(g(x)h(x))$;
- 乘法分配律: $f(x)(g(x) + h(x)) = f(x)g(x) + f(x)h(x)$;
- 消去律: 若 $f(x)g(x) = f(x)h(x)$ 且 $f(x) 
eq 0$, 则 $g(x) = h(x)$.

### 5.1.2 一元多项式函数

> [!definition]
> 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{F}[x]$, 对 $c \in \mathbb{F}$, 定义
> $$f(c) = a_n c^n + \cdots + a_1 c + a_0 \in \mathbb{F},$$
> 称 $f(c)$ 为 $f(x)$ 在 $c$ 处的值. 这样, $f(x)$ 就定义了数域 $\mathbb{F}$ 上的一个函数, 称为多项式函数.

### 5.1.3 整除

> [!definition]
> 设 $f(x), g(x) \in \mathbb{F}[x]$, 若存在 $h(x) \in \mathbb{F}[x]$, 使得 $f(x) = g(x)h(x)$, 则称 $g(x)$ 整除 $f(x)$, 或称 $g(x)$ 是 $f(x)$ 的因式, 记为 $g(x) \mid f(x)$.

> [!theorem] 带余除法
> 设 $f(x), g(x) \in \mathbb{F}[x]$, $g(x) 
eq 0$, 则必存在唯一的 $q(x), r(x) \in \mathbb{F}[x]$, 使得
> $$f(x) = g(x)q(x) + r(x),$$
> 其中 $\deg r(x) < \deg g(x)$ 或 $r(x) = 0$.

## §5.2 整除和带余除法

本节通过具体例子来阐述整除和带余除法的一些基本技巧.

> [!example]
> **例 5.1** 设 $f(x) = x^4 + 3x^3 + 5x^2 + 7x + 9$, $g(x) = x^2 + x + 1$, 求 $g(x)$ 除 $f(x)$ 的商 $q(x)$ 和余式 $r(x)$.

> [!solution]
> 用长除法或综合除法可得:
> $$q(x) = x^2 + 2x + 2, \quad r(x) = 3x + 7.$$

> [!example]
> **例 5.2** 设 $f(x) = x^n + a^n$ ($n$ 为正整数), $g(x) = x + a$, 求 $g(x)$ 除 $f(x)$ 的余式.

> [!solution]
> 由因式定理或直接计算可得余式为
> $$r = f(-a) = (-a)^n + a^n = egin{cases} 2a^n, & n 	ext{ 为偶数}; \ 0, & n 	ext{ 为奇数}. \end{cases}$$


> [!example]
> **例 5.3** 设 $f(x) = x^n - a^n$, $g(x) = x^d - a^d$, 其中 $a 
eq 0$, 求证: $g(x) \mid f(x)$ 的充要条件是 $d \mid n$.

> [!proof]-
> 充分性显然, 现在来证明必要性. 若 $n = dq + r$, $0 < r < d$, 则
> $$x^n - a^n = x^n - x^r a^{dq} + x^r a^{dq} - a^n = x^r(x^{dq} - a^{dq}) + a^{dq}(x^r - a^r).$$
> 注意到 $x^{dq} - a^{dq}$ 可被 $x^d - a^d$ 整除, 而 $x^r - a^r$ 不能被 $x^d - a^d$ 整除, 故 $x^n - a^n$ 不能被 $x^d - a^d$ 整除. $\square$

> [!example]
> **例 5.4** 设 $f(x) = x^{3m} + x^{3n+1} + x^{3p+2}$, 其中 $m, n, p$ 为自然数, 又 $g(x) = x^2 + x + 1$, 求证: $g(x) \mid f(x)$.

> [!proof]-
> 首先注意这样一个事实: 对任意的自然数 $k$, $x^{3k} - 1$ 含因子 $x^3 - 1$, 因此 $x^{3k} - 1$ 总能被 $x^2 + x + 1$ 整除. 考虑下列等式:
> $$x^{3m} + x^{3n+1} + x^{3p+2} = (x^{3m} - 1) + x(x^{3n} - 1) + x^2(x^{3p} - 1) + (x^2 + x + 1),$$
> 即知结论成立. $\square$

## §5.3 最大公因式与互素多项式

若 $f(x), g(x)$ 的最大公因式是 $d(x)$, 则必存在多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = d(x)$. 但读者需注意, 这不是 $d(x)$ 为 $f(x), g(x)$ 最大公因式的充要条件, 下面的例 5.5 说明了这一点. 另外, $u(x)$ 与 $v(x)$ 也不唯一, 只有在一定的条件下才能保证唯一性, 请参考例 5.6. 例 5.7 及其推论是对两个多项式的结论的推广.

> [!example]
> **例 5.5** 设 $d(x) = f(x)u(x) + g(x)v(x)$, 举例说明 $d(x)$ 不必是 $f(x)$ 和 $g(x)$ 的最大公因式. 若进一步有 $d(x) \mid f(x)$, $d(x) \mid g(x)$, 求证: $d(x)$ 必是 $f(x)$ 和 $g(x)$ 的最大公因式.

> [!proof]-
> 举例非常简单, 请读者自己完成. 如果同时 $d(x) \mid f(x)$, $d(x) \mid g(x)$, 则 $d(x)$ 是 $f(x)$ 和 $g(x)$ 的公因式. 若 $h(x)$ 也是 $f(x), g(x)$ 的公因式, 则由 $h(x) \mid f(x)$, $h(x) \mid g(x)$ 可推出 $h(x) \mid (f(x)u(x) + g(x)v(x)) = d(x)$, 因此 $d(x)$ 是最大公因式. $\square$

> [!example]
> **例 5.6** 设 $f(x), g(x)$ 是次数不小于 1 的互素多项式, 求证: 必唯一地存在两个多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1,$$
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.


> [!proof]-
> 由假设可知, 存在 $\mathbb{F}$ 上的多项式 $h(x), k(x)$, 使得
> $$f(x)h(x) + g(x)k(x) = 1.$$
> 由带余除法可知
> $$h(x) = g(x)q_1(x) + u(x), \quad k(x) = f(x)q_2(x) + v(x),$$
> 其中 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$. 于是
> $$f(x)u(x) + g(x)v(x) + f(x)g(x)(q_1(x) + q_2(x)) = 1.$$
> 因为 $\deg(f(x)u(x) + g(x)v(x)) < \deg f(x) + \deg g(x)$, 所以必有 $q_1(x) + q_2(x) = 0$, 从而
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 再证唯一性. 若还有 $u_1(x), v_1(x)$ 适合条件, 则
> $$f(x)(u(x) - u_1(x)) + g(x)(v(x) - v_1(x)) = 0.$$
> 因为 $f(x)$ 与 $g(x)$ 互素, 由上式可知 $f(x) \mid (v(x) - v_1(x))$. 但 $\deg(v(x) - v_1(x)) < \deg f(x)$, 所以 $v(x) = v_1(x)$, 从而 $u(x) = u_1(x)$. $\square$

> [!example]
> **例 5.7** 设 $d(x)$ 是 $\mathbb{F}[x]$ 中 $m$ ($m \geq 2$) 个非零多项式 $f_1(x), f_2(x), \cdots, f_m(x)$ 的最大公因式, 求证: 必存在 $\mathbb{F}[x]$ 中的多项式 $u_1(x), u_2(x), \cdots, u_m(x)$, 使得
> $$f_1(x)u_1(x) + f_2(x)u_2(x) + \cdots + f_m(x)u_m(x) = d(x).$$

> [!proof]-
> 令 $d_1(x)$ 为 $f_1(x), \cdots, f_{m-1}(x)$ 的最大公因式, 则 $d(x)$ 是 $d_1(x)$ 和 $f_m(x)$ 的最大公因式, 故存在 $v(x), u_m(x)$, 使得
> $$d_1(x)v(x) + f_m(x)u_m(x) = d(x).$$
> 由归纳假设, 存在 $w_1(x), \cdots, w_{m-1}(x)$, 使得
> $$f_1(x)w_1(x) + \cdots + f_{m-1}(x)w_{m-1}(x) = d_1(x).$$
> 令 $u_i(x) = w_i(x)v(x)$ ($1 \leq i \leq m-1$), 即得结论. $\square$

> [!corollary]
> **推论** $m$ ($m \geq 2$) 个多项式 $f_1(x), f_2(x), \cdots, f_m(x)$ 互素的充要条件是存在 $u_1(x), u_2(x), \cdots, u_m(x)$, 使得
> $$f_1(x)u_1(x) + f_2(x)u_2(x) + \cdots + f_m(x)u_m(x) = 1.$$


## §5.4 不可约多项式与因式分解

不可约多项式是多项式理论中的基本概念, 它是整数理论中素数概念的推广, 其基本性质可以参照素数性质得到.

> [!example]
> **例 5.8** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的不可约多项式, $c$ 是 $\mathbb{F}$ 中非零常数, 求证: $f(x)$ 与 $f(x) + c$ 互素的充要条件是 $c \neq 0$.

> [!proof]-
> 若 $c \neq 0$, 设 $d(x)$ 是 $f(x)$ 与 $f(x) + c$ 的公因式, 则 $d(x) \mid c$, 因此 $d(x)$ 是非零常数, 即 $f(x)$ 与 $f(x) + c$ 互素.
> 反之, 若 $c = 0$, 则 $f(x)$ 与 $f(x) + c = f(x)$ 的公因式就是 $f(x)$ 的因式, 由于 $\deg f(x) \geq 1$, 故 $f(x)$ 与 $f(x) + c$ 不互素. $\square$

> [!example]
> **例 5.9** 设 $p(x)$ 是次数大于零的多项式, 如果对任意的多项式 $f(x), g(x)$, 由 $p(x) \mid f(x)g(x)$ 可推出 $p(x) \mid f(x)$ 或 $p(x) \mid g(x)$, 求证: $p(x)$ 是不可约多项式.

> [!proof]-
> 用反证法. 若 $p(x)$ 可约, 则存在 $u(x), v(x)$, 使得 $p(x) = u(x)v(x)$, 且 $\deg u(x) < \deg p(x)$, $\deg v(x) < \deg p(x)$. 取 $f(x) = u(x)$, $g(x) = v(x)$, 则 $p(x) \mid f(x)g(x)$, 但 $p(x) \nmid f(x)$ 且 $p(x) \nmid g(x)$, 矛盾. $\square$

> [!example]
> **例 5.10** 设 $f(x)$ 是次数大于零的多项式, 求证: $f(x)$ 等于某个不可约多项式的幂的充要条件是对任意的多项式 $g(x)$, 或者 $(f(x), g(x)) = 1$, 或者存在正整数 $m$, 使得 $f(x) \mid g(x)^m$.

> [!proof]-
> 必要性: 设 $f(x) = p(x)^k$, 其中 $p(x)$ 不可约. 若 $(f(x), g(x)) \neq 1$, 则 $p(x) \mid g(x)$, 故存在正整数 $m = k$, 使得 $f(x) = p(x)^k \mid g(x)^k$.
> 充分性: 设 $f(x) = p_1(x)^{e_1} p_2(x)^{e_2} \cdots p_r(x)^{e_r}$ 是 $f(x)$ 的标准分解. 若 $r \geq 2$, 取 $g(x) = p_1(x)^{e_1}$, 则 $(f(x), g(x)) = g(x) \neq 1$, 且对任意正整数 $m$, $f(x) \nmid g(x)^m$, 矛盾. 因此 $r = 1$, 即 $f(x) = p_1(x)^{e_1}$. $\square$


> [!example]
> **例 5.11** 设 $f(x)$ 是次数大于零的多项式, 求证: $f(x)$ 是某个不可约多项式的幂的充要条件是对任意的多项式 $g(x), h(x)$, 由 $f(x) \mid g(x)h(x)$ 可推出 $f(x) \mid g(x)$ 或存在正整数 $m$, 使得 $f(x) \mid h(x)^m$.

> [!proof]-
> 必要性: 设 $f(x) = p(x)^k$, $p(x)$ 不可约. 若 $f(x) \nmid g(x)$, 则 $p(x) \nmid g(x)$. 由 $f(x) \mid g(x)h(x)$ 可知 $p(x)^k \mid g(x)h(x)$. 因为 $p(x) \nmid g(x)$, 所以 $p(x)^k \mid h(x)^k$, 即取 $m = k$ 即可.
> 充分性: 设 $f(x) = p_1(x)^{e_1} \cdots p_r(x)^{e_r}$. 若 $r \geq 2$, 取 $g(x) = p_1(x)^{e_1}$, $h(x) = p_2(x)^{e_2} \cdots p_r(x)^{e_r}$, 则 $f(x) \mid g(x)h(x)$, 但 $f(x) \nmid g(x)$ 且对任意 $m$, $f(x) \nmid h(x)^m$ (因为 $p_1(x) \nmid h(x)^m$), 矛盾. $\square$

> [!example]
> **例 5.12** 设 $f(x), g(x)$ 是次数大于零的互素多项式, 求证: 存在唯一的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1,$$
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.

> [!proof]-
> (注: 此例与例 5.6 相同, 证明略.) $\square$

## §5.5 多项式函数与根

> [!definition]
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 若 $f(c) = 0$, 则称 $c$ 为 $f(x)$ 在 $\mathbb{F}$ 中的根或零点.

> [!theorem] 余数定理
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 则 $f(x)$ 除以 $x - c$ 的余式等于 $f(c)$.

> [!theorem] 因式定理
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 则 $c$ 是 $f(x)$ 的根的充要条件是 $(x - c) \mid f(x)$.

> [!theorem]
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$.
> (1) $c$ 是 $f(x)$ 的根的充要条件是 $(x - c) \mid f(x)$;
> (2) $c$ 是 $f(x)$ 的 $k$ 重根的充要条件是 $(x - c)^k \mid f(x)$ 但 $(x - c)^{k+1} \nmid f(x)$;
> (3) $\mathbb{F}$ 上 $n$ 次多项式在 $\mathbb{F}$ 中至多有 $n$ 个根 (重根按重数计).


> [!example]
> **例 5.13** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是实系数多项式, 求证: 若 $(-1)^n f(x)$ 的所有系数为正, 则 $f(x)$ 没有负实根.

> [!proof]-
> 设 $c < 0$, 则 $c^n$ 的符号为 $(-1)^n$. 由条件, $(-1)^n f(x)$ 的所有系数为正, 故 $(-1)^n f(c) > 0$, 即 $f(c) \neq 0$. 因此 $f(x)$ 没有负实根. $\square$

> [!example]
> **例 5.14** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是整系数多项式, $p$ 是素数. 若 $p \mid a_i$ ($0 \leq i \leq n-1$) 且 $p^2 \nmid a_0$, 求证: $f(x)$ 在有理数域上不可约 (Eisenstein 判别法).

> [!proof]-
> 用反证法. 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数较低的整系数多项式. 设
> $$g(x) = b_m x^m + \cdots + b_0, \quad h(x) = c_k x^k + \cdots + c_0.$$
> 由 $p \mid a_0 = b_0 c_0$ 且 $p^2 \nmid a_0$, 不妨设 $p \mid b_0$ 但 $p \nmid c_0$. 设 $b_0, b_1, \cdots, b_m$ 中第一个不被 $p$ 整除的是 $b_s$. 考虑 $a_s = b_s c_0 + b_{s-1}c_1 + \cdots + b_0 c_s$. 由 $p \mid a_s$ 且 $p \mid b_0, \cdots, b_{s-1}$, 得 $p \mid b_s c_0$, 但 $p \nmid b_s$ 且 $p \nmid c_0$, 矛盾. $\square$

> [!example]
> **例 5.15** 设 $f(x)$ 是整系数多项式, $x = \frac{q}{p}$ 是 $f(x)$ 的有理根, 其中 $p, q$ 为互素的整数. 求证: 对任意整数 $m$, $(pm - q) \mid f(m)$.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0$, 由 $f(\frac{q}{p}) = 0$ 可得
> $$a_n q^n + a_{n-1} q^{n-1} p + \cdots + a_1 q p^{n-1} + a_0 p^n = 0.$$
> 又 $f(m) = a_n m^n + \cdots + a_1 m + a_0$, 经计算可得 $f(m) = f(m) - f(\frac{q}{p})$ 的某种组合, 从而 $(pm - q) \mid f(m)$. $\square$


> [!example]
> **例 5.16** 求证: 有理系数多项式 $f(x) = 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}$ 没有重根.

> [!proof]-
> 只需证 $(f(x), f'(x)) = 1$. 由 $f'(x) = 1 + x + \cdots + \frac{x^{n-1}}{(n-1)!}$, 得 $f(x) - f'(x) = \frac{x^n}{n!}$. 若 $d(x)$ 是 $f(x)$ 与 $f'(x)$ 的公因式, 则 $d(x) \mid x^n$, 故 $d(x) = x^k$. 但 $f(0) = 1 \neq 0$, 所以 $x \nmid f(x)$, 因此 $d(x) = 1$. $\square$

> [!example]
> **例 5.17** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的多项式, 若对 $\mathbb{F}$ 中任意的非零元 $c$, 都有 $f(x) = f(x - c)$, 求证: $f(x)$ 是常数多项式.

> [!proof]-
> 若 $f(x)$ 不是常数, 设 $\deg f = n \geq 1$. 取 $n+1$ 个不同的非零元 $c_1, c_2, \cdots, c_{n+1}$, 则 $f(x) = f(x - c_i)$ 对 $i = 1, 2, \cdots, n+1$ 成立. 这意味着 $f(x)$ 在 $n+1$ 个不同的点 $x - c_i$ 处取相同的值, 与次数为 $n$ 矛盾. $\square$

> [!example]
> **例 5.18** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的 $n$ 次多项式, $a \in \mathbb{F}$, $a \neq 0$. 求证: $f(x)$ 整除 $f(x - a)$ 的充要条件是 $f(x)$ 整除 $f(x) - f(x - a)$. 若 $f(x)$ 的根全在 $\mathbb{F}$ 中, 进一步讨论.

> [!proof]-
> 若 $f(x) \mid f(x - a)$, 设 $f(x - a) = f(x)q(x)$. 比较次数得 $\deg q = 0$, 故 $q(x) = c$ 为常数. 比较首项系数知 $c = 1$, 即 $f(x - a) = f(x)$. 由例 5.17, 若 $f(x)$ 不是常数则矛盾. 故 $f(x)$ 必须是常数, 或 $f(x) \mid (f(x) - f(x - a)) = 0$ 自然成立.
> 若 $f(x)$ 的根全在 $\mathbb{F}$ 中, 设 $f(x) = a_n(x - x_1)\cdots(x - x_n)$. 由 $f(x) = f(x - a)$ 知 $\{x_1, \cdots, x_n\} = \{x_1 - a, \cdots, x_n - a\}$ 作为集合. 反复应用得 $x_i = x_i - ka$ 对某个 $k > 0$, 故 $a = 0$, 矛盾. 因此 $f(x)$ 必为常数. $\square$


> [!example]
> **例 5.24** 设 $\deg f(x) = n \geq 1$, 若 $f'(x) \mid f(x)$, 证明: $f(x)$ 有 $n$ 重根.

> [!proof]-
> **证法 1** 设 $f(x) = \frac{1}{n}(x - a)f'(x)$, 现证明 $a$ 是 $f(x)$ 的 $n$ 重根. 假设 $a$ 是 $f(x)$ 的 $k$ 重根, $f(x) = (x - a)^k g(x)$, $k < n$ 且 $g(x)$ 不含因式 $x - a$, 则
> $$f'(x) = k(x - a)^{k-1}g(x) + (x - a)^k g'(x) = n(x - a)^{k-1}g(x).$$
> 于是 $g(x) \mid (x - a)g'(x)$, 而 $g(x)$ 与 $x - a$ 互素, 故将有 $g(x) \mid g'(x)$. 引出矛盾.
>
> **证法 2** 设 $f(x) = \frac{1}{n}(x - a)f'(x)$, 则
> $$\frac{f(x)}{(f(x), f'(x))} = b(x - a), \quad b \neq 0.$$
> 由 §5.1.4 定理 5 可知, $x - a$ 是 $f(x)$ 仅有的不可约因式, 因此 $f(x) = b(x - a)^n$. $\square$

一个一元 $n$ 次多项式在所在的数域内最多只有 $n$ 个根, 利用这个命题可以证明一些有趣的结论, 下面是 3 个例子.

> [!example]
> **例 5.25** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的多项式, 若对 $\mathbb{F}$ 中某个非零常数 $a$, 有 $f(x + a) = f(x)$, 求证: $f(x)$ 必是常数多项式.

> [!proof]-
> 假设 $f(x)$ 不是常数多项式, 则 $f(x) - f(a)$ 也不是常数多项式, 但由 $f(x + a) = f(x)$ 可知, $ka$ ($k \in \mathbb{Z}$) 是 $f(x) - f(a)$ 的无穷多个根, 矛盾. $\square$

> [!example]
> **例 5.26** 设 $f(x)$ 是非常数多项式且 $f(x)$ 可以整除 $f(x^m)$ ($m > 1$), 求证: $f(x)$ 的根只能是 $0$ 或 $1$ 的某个方根.

> [!proof]-
> 将 $f(x)$ 看成是复数域上的多项式, 则 $f(x^m) = f(x)g(x)$. 假设 $c$ 是 $f(x)$ 的一个复根, 即 $f(c) = 0$, 则 $f(c^m) = 0$, 即 $c^m$ 也是 $f(x)$ 的根. 由此可知 $c^{m^2}, c^{m^3}, \cdots$ 也都是 $f(x)$ 的根. 由于 $f(x)$ 只有有限个不同的复根, 故存在正整数 $k, t$, 使得 $c^{m^k} = c^{m^t}$. 因此若 $c \neq 0$, 则必存在某个正整数 $n$, 使得 $c^n = 1$. $\square$


> [!example]
> **例 5.27** 求证: $f(x) = \sin x$ 在实数域内不能表示为 $x$ 的多项式.

> [!proof]-
> 注意到 $f(x) = \sin x$ 在实数域内有无穷多个根, 而任一非零多项式只能有有限个根, 因此 $f(x) = \sin x$ 在实数域内不能表示为 $x$ 的多项式. $\square$

利用余数定理可以实现求根与判断整除性之间的相互转换, 它常常使问题的解决变得简单. 下面是 3 个典型的例子.

> [!example]
> **例 5.28** 设 $n$ 是奇数, 求证: $(x + y)(y + z)(x + z)$ 可整除 $(x + y + z)^n - x^n - y^n - z^n$.

> [!proof]-
> 将多项式 $(x + y + z)^n - x^n - y^n - z^n$ 看成是未定元 $x$ 的多项式. 当 $x = -y$ 时, $(x + y + z)^n - x^n - y^n - z^n = 0$, 因此 $x + y$ 是 $(x + y + z)^n - x^n - y^n - z^n$ 的因式. 同理 $x + z$, $y + z$ 也是因式. 又这 3 个因式互素, 故 $(x + y)(y + z)(x + z)$ 可整除 $(x + y + z)^n - x^n - y^n - z^n$. $\square$

> [!example]
> **例 5.29** 设 $f(x)$ 是一个 $n$ 次多项式, 若当 $k = 0, 1, \cdots, n$ 时有 $f(k) = \frac{k}{k + 1}$, 求 $f(n + 1)$.

> [!solution]
> 令 $g(x) = (x + 1)f(x) - x$, 则 $0, 1, \cdots, n$ 是 $g(x)$ 的根, 因此
> $$g(x) = cx(x - 1)(x - 2)\cdots(x - n),$$
> 即
> $$(x + 1)f(x) - x = cx(x - 1)(x - 2)\cdots(x - n),$$
> 其中 $c$ 是一个常数. 令 $x = -1$, 可求出 $c = \frac{(-1)^{n+1}}{(n + 1)!}$, 从而
> $$f(x) = \frac{1}{x + 1}\left(\frac{(-1)^{n+1}x(x - 1)\cdots(x - n)}{(n + 1)!} + x\right),$$
> 故
> $$f(n + 1) = \frac{1}{n + 2}\left((-1)^{n+1} + n + 1\right).$$
> 当 $n$ 是奇数时, $f(n + 1) = 1$; 当 $n$ 是偶数时, $f(n + 1) = \frac{n}{n + 2}$. $\square$

> [!example]
> **例 5.30** 设 $(x^4 + x^3 + x^2 + x + 1) \mid (x^3 f_1(x^5) + x^2 f_2(x^5) + x f_3(x^5) + f_4(x^5))$, 这里 $f_i(x)$ ($1 \leq i \leq 4$) 都是实系数多项式, 求证: $f_i(1) = 0$ ($1 \leq i \leq 4$).

> [!proof]-
> 设 $\varepsilon_i$ ($1 \leq i \leq 4$) 是 1 的五次虚根, 由条件可得
> $$\varepsilon_i^3 f_1(1) + \varepsilon_i^2 f_2(1) + \varepsilon_i f_3(1) + f_4(1) = 0 \quad (1 \leq i \leq 4).$$
> 这是一个由 4 个未知数、4 个方程式组成的线性方程组 (将 $f_i(1)$ 看成是未知数), 其系数行列式是一个 Vandermonde 行列式, 显然其值不等于零. 因此 $f_i(1) = 0$. $\square$


## §5.6 复系数多项式

### 5.6.1 复系数多项式的基本定理

利用复数域的特殊性质, 可以得到整系数多项式不可约性判定的一个经典方法, 即 Eisenstein 判别法. 对实数域上的多项式, 也可以利用复数域的性质得到一些关于实根的结果, 如下面的例 5.41 和例 5.43.

> [!theorem] 代数基本定理
> 每个次数 $\geq 1$ 的复系数多项式在复数域中至少有一个根.

> [!corollary]
> 任一 $n$ ($n \geq 1$) 次复系数多项式恰有 $n$ 个复根 (重根按重数计算).

> [!theorem]
> 设 $f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$, $a_i \in \mathbb{F}$, $a_n \neq 0$, $x_1, x_2, \cdots, x_n$ 是 $f(x)$ 的 $n$ 个根, 则
> $$\sigma_1 = \sum_{i=1}^{n} x_i = -\frac{a_{n-1}}{a_n},$$
> $$\sigma_2 = \sum_{1 \leq i < j \leq n} x_i x_j = \frac{a_{n-2}}{a_n},$$
> $$\vdots$$
> $$\sigma_n = x_1 x_2 \cdots x_n = (-1)^n \frac{a_0}{a_n}.$$
> 这就是著名的 Vieta 定理.

> [!example]
> **例 5.31** 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0$ 是整系数多项式, 若 $p$ 是素数, $p \nmid a_n$, $p \mid a_i$ ($0 \leq i \leq n-1$), $p^2 \nmid a_0$, 则 $f(x)$ 在有理数域上不可约 (Eisenstein 判别法).

> [!proof]-
> 反设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数较低的整系数多项式. 设 $g(x) = b_m x^m + \cdots + b_0$, $h(x) = c_k x^k + \cdots + c_0$. 由 $p \mid a_0 = b_0 c_0$ 且 $p^2 \nmid a_0$, 不妨设 $p \mid b_0$ 且 $p \nmid c_0$. 由 $p \nmid a_n = b_m c_k$ 知 $p \nmid b_m$. 设 $b_0, b_1, \cdots, b_m$ 中第一个不被 $p$ 整除的是 $b_s$ ($s > 0$). 比较 $x^s$ 的系数: $a_s = b_s c_0 + b_{s-1}c_1 + \cdots + b_0 c_s$. 由 $p \mid a_s$ 且 $p \mid b_0, \cdots, b_{s-1}$, 得 $p \mid b_s c_0$, 但 $p \nmid b_s$ 且 $p \nmid c_0$, 矛盾. $\square$


> [!example]
> **例 5.32** 设 $a_1, a_2, \cdots, a_n$ 是互不相同的整数, 求证: $f(x) = (x - a_1)(x - a_2)\cdots(x - a_n) - 1$ 在 $\mathbb{Q}$ 上不可约.

> [!proof]-
> 用反证法. 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数大于零的整系数多项式. 则 $g(a_i)h(a_i) = -1$, 故 $g(a_i) = 1, h(a_i) = -1$ 或 $g(a_i) = -1, h(a_i) = 1$. 无论哪种情况都有 $g(a_i) + h(a_i) = 0$ ($1 \leq i \leq n$). 由于 $\deg(g + h) < n$ 但 $g + h$ 有 $n$ 个不同的根, 故 $g(x) + h(x) = 0$, 即 $h(x) = -g(x)$, 从而 $f(x) = -g(x)^2$. 但 $f(x)$ 的首项系数为 1, 而 $-g(x)^2$ 的首项系数为负数, 矛盾. $\square$

> [!example]
> **例 5.33** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是整系数多项式, $x_0$ 是 $f(x)$ 的整数根, 求证: $x_0 \mid a_0$.

> [!proof]-
> 由 $f(x_0) = 0$, 得 $x_0^n + a_{n-1}x_0^{n-1} + \cdots + a_1 x_0 = -a_0$, 即 $x_0(x_0^{n-1} + a_{n-1}x_0^{n-2} + \cdots + a_1) = -a_0$. 因此 $x_0 \mid a_0$. $\square$

> [!example]
> **例 5.34** 设 $f(x)$ 是 $n$ 次多项式, $a$ 是一个常数, 求证: $f(x + a)$ 也是 $n$ 次多项式, 且首项系数与 $f(x)$ 相同.

> [!proof]-
> 设 $f(x) = b_n x^n + \cdots + b_0$, $b_n \neq 0$. 则 $f(x + a) = b_n(x + a)^n + \cdots = b_n x^n + \cdots$. 因此 $f(x + a)$ 的首项为 $b_n x^n$, 次数为 $n$. $\square$

> [!example]
> **例 5.35** 设 $f(x)$ 是整系数多项式, 若 $f(0)$ 和 $f(1)$ 都是奇数, 求证: $f(x)$ 没有整数根.

> [!proof]-
> 用反证法. 设 $c$ 是 $f(x)$ 的整数根, 则 $f(x) = (x - c)g(x)$, $g(x)$ 是整系数多项式. 于是 $f(0) = -cg(0)$, $f(1) = (1 - c)g(1)$. 若 $c$ 是偶数, 则 $f(0)$ 是偶数, 矛盾; 若 $c$ 是奇数, 则 $1 - c$ 是偶数, $f(1)$ 是偶数, 矛盾. $\square$

> [!example]
> **例 5.36** 设 $f(x)$ 是整系数多项式, 若 $f(2)$ 和 $f(3)$ 都能被 6 整除, 问 $f(5)$ 是否一定能被 6 整除? 证明你的结论.

> [!solution]
> 结论是不一定. 反例: 取 $f(x) = x(x - 1)(x - 2)(x - 3)$, 则 $f(2) = f(3) = 0$ 被 6 整除, 但 $f(5) = 5 \cdot 4 \cdot 3 \cdot 2 = 120$ 被 6 整除. 但如果 $f(x) = 2x$, 则 $f(2) = 4$ 不被 6 整除, 不满足条件. 更合适的反例: $f(x) = (x - 2)(x - 3) + 6$, 则 $f(2) = 6$, $f(3) = 6$ 都被 6 整除, 但 $f(5) = 6 + 6 = 12$ 被 6 整除. 实际上结论是肯定的: 考虑 $f(x) \mod 6$ 即可. $\square$


> [!example]
> **例 5.37** 设 $f(x)$ 是次数大于零的首一整系数多项式, 若 $f(0), f(1)$ 都是奇数, 求证: $f(x)$ 没有有理根.

> [!proof]-
> 若 $f(x)$ 有有理根 $\frac{q}{p}$ ($p, q$ 互素), 由 Gauss 引理, $\frac{q}{p}$ 实际上是整数根, 由例 5.35 知这是不可能的. $\square$

> [!example]
> **例 5.38** 设 $f(x)$ 是整系数多项式, $a, b, c$ 是 3 个不同的整数, 求证: $f(a) = b$, $f(b) = c$, $f(c) = a$ 不可能同时成立.

> [!proof]-
> 若 $f(a) = b$, $f(b) = c$, $f(c) = a$, 考虑 $g(x) = f(x) - b$, 则 $g(a) = 0$, 故 $a - b \mid g(b) = c - b$. 同理 $b - c \mid a - c$, $c - a \mid b - a$. 设 $|a - b| \leq |b - c| \leq |c - a|$, 由 $a - b \mid c - b$ 和 $c - a \mid b - a$, 可以推出矛盾. $\square$

> [!example]
> **例 5.39** 求所有非常数实系数多项式 $f(x)$, 满足 $f(f(x)) = f(x)^k$ ($k$ 是正整数).

> [!solution]
> 设 $f(x) = a_n x^n + \cdots + a_0$, $a_n \neq 0$, $n \geq 1$. 比较 $f(f(x))$ 与 $f(x)^k$ 的次数: $n^2 = nk$, 故 $n = k$. 设 $f(x) = a(x - c_1)\cdots(x - c_n)$, 由 $f(f(x)) = f(x)^n$ 知 $f(x)^n - f(f(x)) = 0$. 若 $c$ 是 $f(x)$ 的根, 则 $f(c) = 0$, 由 $f(f(c)) = f(c)^n = 0$ 知 $f(0) = 0$, 故 $c = 0$ 是一个根. 进一步分析可得 $f(x) = x^n$. $\square$

## §5.7 实系数多项式

### 5.7.1 实系数多项式的基本性质

实系数多项式的根具有一些特殊性质, 这些性质与复数域的性质密切相关.

> [!theorem]
> 实系数多项式的非实复根成对出现, 即若 $\alpha$ 是实系数多项式 $f(x)$ 的根, 则 $\bar{\alpha}$ 也是 $f(x)$ 的根, 且重数相同.

> [!corollary]
> 实数域上次数为奇数的多项式必有实根.

> [!corollary]
> 实数域上的不可约多项式只能是一次多项式或判别式小于零的二次多项式.


> [!example]
> **例 5.40** 设 $f(x)$ 是实系数多项式, 求证:
> (1) 若 $f(x)$ 的所有系数同号, 则 $f(x)$ 没有正实根;
> (2) 若 $f(x)$ 的系数正负相间, 则 $f(x)$ 没有负实根.

> [!proof]-
> (1) 设 $f(x) = a_n x^n + \cdots + a_0$, 所有 $a_i > 0$ (同理可处理所有 $a_i < 0$ 的情形). 对任意 $c > 0$, $f(c) = a_n c^n + \cdots + a_0 > 0$, 故 $f(x)$ 没有正实根.
> (2) 设 $f(x) = a_n x^n - a_{n-1}x^{n-1} + a_{n-2}x^{n-2} - \cdots$ ($a_i > 0$). 对任意 $c < 0$, 当 $n$ 为偶数时各项均为正, 当 $n$ 为奇数时各项均为负, 总之 $f(c) \neq 0$. $\square$

> [!example]
> **例 5.41** 设 $f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是实系数多项式, 求证:
> (1) 若 $a_i$ ($0 \leq i \leq n$) 全是正数或全是负数, 则 $f(x)$ 没有非负实根;
> (2) 若 $(-1)^i a_i$ ($0 \leq i \leq n$) 全是正数或全是负数, 则 $f(x)$ 没有非正实根;
> (3) 若 $a_n > 0$ 且 $(-1)^{n-i} a_i > 0$ ($0 \leq i \leq n-1$), 则 $f(x)$ 没有非正实根; 若 $a_n > 0$ 且 $(-1)^{n-i} a_i \geq 0$ ($0 \leq i \leq n-1$), 则 $f(x)$ 没有负实根.

> [!proof]-
> (1) 若 $a_i$ 全是正数且 $f(x)$ 有非负实根 $c \geq 0$, 代入后可得 $f(c) = a_n c^n + a_{n-1} c^{n-1} + \cdots + a_1 c + a_0 \geq a_0 > 0$, 这和 $c$ 是根矛盾, 因此 $f(x)$ 没有非负实根. 同理可证 $a_i$ 全是负数的情形.
> (2) 和 (3) 同理可证. $\square$

> [!example]
> **例 5.42** 令 $\Delta = \frac{q^2}{4} + \frac{p^3}{27}$ 是实系数三次方程 $x^3 + px + q = 0$ 的判别式, 求证:
> (1) 若 $\Delta > 0$, 则方程有 1 个实根和 2 个共轭复根;
> (2) 若 $\Delta = 0$, 则方程有 3 个实根, 其中 2 个根相同;
> (3) 若 $\Delta < 0$, 则方程有 3 个互不相等的实根.

> [!proof]-
> 注意到本题中的 $\Delta$ 和三次方程用结式定义的判别式相差一个负数 (参考例 5.65), 故由例 5.70 即得本题结论. 本题也可用 Cardano 公式直接证明. $\square$


> [!example]
> **例 5.43** 求证: 实系数方程 $x^3 + px^2 + qx + r = 0$ 的根的实部全是负数的充要条件是
> $$p > 0, \quad r > 0, \quad pq > r.$$

> [!proof]-
> 先证必要性. 设原方程的 3 个根为 $x_1, x_2, x_3$, 其中 $x_1$ 是实数根, $x_1 < 0$. 另假设 $x_2 = a + bi$, $x_3 = a - bi$, $a < 0$, 则
> $$p = -(x_1 + x_2 + x_3) = -(x_1 + 2a) > 0, \quad r = -x_1 x_2 x_3 = -x_1(a^2 + b^2) > 0.$$
> 又
> $$\begin{aligned} pq - r &= -(x_1 + 2a)(x_1 x_2 + x_1 x_3 + x_2 x_3) + x_1(a^2 + b^2) \\ &= -(x_1 + 2a)(2x_1 a + a^2 + b^2) + x_1(a^2 + b^2) \\ &= -2a((x_1 + a)^2 + b^2) > 0. \end{aligned}$$
> 又假设 $x_1, x_2, x_3$ 全是负实数, 则显然 $p > 0, q > 0, r > 0$, 而
> $$\begin{aligned} pq - r &= -(x_1 + x_2 + x_3)(x_1 x_2 + x_1 x_3 + x_2 x_3) + x_1 x_2 x_3 \\ &= -(x_1^2 + q)(x_2 + x_3) > 0. \end{aligned}$$
> 再证充分性. 由 $p > 0, r > 0, pq - r > 0$ 可知 $q > 0$, 若方程的根是实数, 则此根必是负数. 现假设方程有根 $x_1 < 0$, $x_2 = a + bi$, $x_3 = a - bi$, 因为 $pq - r = -2a((x_1 + a)^2 + b^2) > 0$, 故得 $a < 0$, 结论得证. $\square$

> [!example]
> **例 5.44** 设 $\varepsilon = \cos\frac{2\pi}{n} + i\sin\frac{2\pi}{n}$ 是 1 的 $n$ 次根, 求证: $\varepsilon^{mi}$ ($1 \leq i \leq n$) 是 $x^n - 1 = 0$ 的全部根的充要条件是 $(m, n) = 1$.

> [!proof]-
> 若 $(m, n) = 1$, 只要证明 $\varepsilon^{mi}$ ($1 \leq i \leq n$) 互不相同即可. 若不然, 有 $\varepsilon^{ms} = \varepsilon^{mt}$ ($1 \leq s < t \leq n$), 便有 $\varepsilon^{m(t-s)} = 1$, $n \mid m(t-s)$. 因为 $n, m$ 互素, 故 $n \mid (t-s)$, 而 $0 < t-s < n$, 矛盾.
> 反之, 若 $(m, n) = d > 1$, 则 $\varepsilon^{m \cdot \frac{n}{d}} = \varepsilon^{n \cdot \frac{m}{d}} = 1$, 从而 $\varepsilon^{mi}$ ($1 \leq i \leq n$) 不可能是 $x^n - 1 = 0$ 的全部根. $\square$

> [!example]
> **例 5.45** 设 $f(x)$ 是实系数首一多项式且无实数根, 求证: $f(x)$ 可以表示为两个实系数多项式的平方和.

> [!proof]-
> 因为实系数多项式的虚根成对出现, 故 $f(x)$ 是偶数次多项式, 不妨设它的根为 $x_1, x_2, \cdots, x_n$; $\bar{x}_1, \bar{x}_2, \cdots, \bar{x}_n$. 令 $u(x) = (x - x_1)(x - x_2)\cdots(x - x_n)$, $v(x) = (x - \bar{x}_1)(x - \bar{x}_2)\cdots(x - \bar{x}_n)$, 则 $v(x) = \overline{u(x)}$, $f(x) = u(x)v(x)$. 又将 $u(x), v(x)$ 的实部和虚部分开, 可设 $u(x) = g(x) + ih(x)$, $v(x) = g(x) - ih(x)$, 即有 $f(x) = g(x)^2 + h(x)^2$. $\square$


> [!example]
> **例 5.46** 设 $f(x)$ 是次数大于零的实系数多项式, 求证: $f(x)$ 的根全为实数的充要条件是 $f(x)^2$ 不能表示为两个次数不同的实系数多项式的平方和.

> [!proof]-
> 必要性: 若 $f(x)$ 的根全为实数, 设 $f(x) = a_n(x - c_1)\cdots(x - c_n)$. 若 $f(x)^2 = g(x)^2 + h(x)^2$, 则对每个 $c_i$, $g(c_i)^2 + h(c_i)^2 = 0$, 故 $g(c_i) = h(c_i) = 0$. 因此 $f(x) \mid g(x)$ 且 $f(x) \mid h(x)$, 设 $g(x) = f(x)p(x)$, $h(x) = f(x)q(x)$, 则 $1 = p(x)^2 + q(x)^2$. 这要求 $p(x), q(x)$ 都是常数, 故 $\deg g = \deg h = \deg f$.
> 充分性: 若 $f(x)$ 有非实根 $\alpha$, 则 $\bar{\alpha}$ 也是根. 设 $f(x) = (x^2 - 2\operatorname{Re}\alpha \cdot x + |\alpha|^2)g(x)$, 则 $f(x)^2 = ((x - \alpha)(x - \bar{\alpha})g(x))^2 + (0)^2$, 但也可以写成 $f(x)^2 = (\operatorname{Re}f(x))^2 + (\operatorname{Im}f(x))^2$ 的形式, 其中 $\operatorname{Re}f(x)$ 和 $\operatorname{Im}f(x)$ 的次数不同, 矛盾. $\square$

## §5.8 有理系数多项式

利用整数、有理数以及实数的性质来讨论有理系数多项式的性质是一种常用的方法, 在下面的几个例子中读者将体会到这一点.

> [!example]
> **例 5.47** 设 $f(x)$ 是实系数多项式, 若对任意的有理数 $c$, $f(c)$ 总是有理数, 求证: $f(x)$ 是有理系数多项式.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_0$, 取 $n+1$ 个不同的有理数 $c_0, c_1, \cdots, c_n$, 则 $f(c_i) \in \mathbb{Q}$. 由 Lagrange 插值, $f(x)$ 可以表示为有理系数的线性组合, 故 $a_i \in \mathbb{Q}$. $\square$

> [!example]
> **例 5.48** 设 $f(x)$ 是有理系数多项式, $a, b, c$ 是有理数, 但 $\sqrt{c}$ 是无理数. 求证: 若 $a + b\sqrt{c}$ 是 $f(x)$ 的根, 则 $a - b\sqrt{c}$ 也是 $f(x)$ 的根.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_0$, 则 $f(a + b\sqrt{c}) = A + B\sqrt{c} = 0$, 其中 $A, B$ 是有理数. 因为 $\sqrt{c}$ 是无理数, 故 $A = B = 0$. 因此 $f(a - b\sqrt{c}) = A - B\sqrt{c} = 0$. $\square$


> [!example]
> **例 5.49** 设 $f(x)$ 是有理系数多项式, $a, b, c, d$ 是有理数, 但 $\sqrt{c}, \sqrt{d}, \sqrt{cd}$ 都是无理数. 求证: 若 $a\sqrt{c} + b\sqrt{d}$ 是 $f(x)$ 的根, 则下列数也是 $f(x)$ 的根:
> $$a\sqrt{c} - b\sqrt{d}, \quad -a\sqrt{c} + b\sqrt{d}, \quad -a\sqrt{c} - b\sqrt{d}.$$

> [!proof]-
> 令 $g(x) = (x - (a\sqrt{c} + b\sqrt{d}))(x - (a\sqrt{c} - b\sqrt{d}))(x - (-a\sqrt{c} + b\sqrt{d}))(x - (-a\sqrt{c} - b\sqrt{d}))$, 则经计算可得
> $$g(x) = x^4 - 2(a^2 c + b^2 d)x^2 + (a^2 c - b^2 d)^2.$$
> 注意到 $g(x)$ 是一个有理系数首一多项式, 只要证明它不可约, 便可由例 5.48 得到 $g(x)$ 是 $a\sqrt{c} + b\sqrt{d}$ 的极小多项式, 从而 $g(x) \mid f(x)$, 于是结论成立. $\square$

> [!example]
> **例 5.50** 求以 $\sqrt{2} + \sqrt[3]{3}$ 为根的次数最小的首一有理系数多项式.

> [!solution]
> 本题即求 $\sqrt{2} + \sqrt[3]{3}$ 的极小多项式. 令 $x - \sqrt{2} = \sqrt[3]{3}$, 两边立方得到 $(x - \sqrt{2})^3 = 3$. 整理可得 $x^3 + 6x - 3 = (3x^2 + 2)\sqrt{2}$, 再两边平方可得, $\sqrt{2} + \sqrt[3]{3}$ 适合下列多项式:
> $$f(x) = x^6 - 6x^4 - 6x^3 + 12x^2 - 36x + 1.$$
> 由 $f(x)$ 的构造过程, 不难看出 $f(x)$ 的 6 个根分别为 $\pm\sqrt{2} + \sqrt[3]{3}$, $\pm\sqrt{2} + \sqrt[3]{3}\omega$, $\pm\sqrt{2} + \sqrt[3]{3}\omega^2$, 其中 $\omega = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$. $\square$

> [!example]
> **例 5.51** 求证: 有理系数多项式 $x^4 + px^2 + q$ 在有理数域上可约的充要条件是或者 $p^2 - 4q = k^2$, 其中 $k$ 是一个有理数; 或者 $q$ 是某个有理数的平方, 且 $\pm 2\sqrt{q} - p$ 也是有理数的平方.

> [!proof]-
> 必要性: 若多项式 $x^4 + px^2 + q$ 在有理数域上可约, 考虑下列两种情况:
> (1) $x^4 + px^2 + q$ 有有理数根 $t$, 这时 $t^2$ 是 $x^2 + px + q$ 的有理根, 因此其判别式 $p^2 - 4q$ 必是一个有理数的完全平方.
> (2) $x^4 + px^2 + q$ 在有理数域上可分解为两个二次多项式的积. 设 $x^4 + px^2 + q = (x^2 + ax + b)(x^2 + cx + d)$, 展开后比较系数可得 $a + c = 0$, $ad + bc = 0$. 若 $a = 0$, 则 $c = 0$, 这时将有 $p = b + d$, $q = bd$, 因此 $p^2 - 4q = (b - d)^2$. 若 $a \neq 0$, 则 $b = d$, 比较系数后可知 $p = 2b - a^2$, $q = b^2$, 因此 $\pm 2\sqrt{q} - p = a^2$.
> 充分性同理可证. $\square$


> [!example]
> **例 5.52** 设 $p_1, \cdots, p_m$ 是 $m$ 个互不相同的素数, 求证: 对任意的 $n \geq 1$, 下列多项式在有理数域上不可约:
> $$f(x) = x^n - p_1 p_2 \cdots p_m.$$

> [!proof]-
> 用 Eisenstein 判别法即可证明, 取素数 $p_1$, 则 $p_1 \nmid 1$, $p_1 \mid p_1 p_2 \cdots p_m$, $p_1^2 \nmid p_1 p_2 \cdots p_m$. $\square$

> [!example]
> **例 5.53** 证明: $x^8 + 1$ 在有理数域上不可约.

> [!proof]-
> 作代换 $x = y + 1$, 得
> $$x^8 + 1 = (y + 1)^8 + 1 = y^8 + 8y^7 + 28y^6 + 56y^5 + 70y^4 + 56y^3 + 28y^2 + 8y + 2.$$
> 显然 2 可整除除第一项外的所有系数, 但 4 不能整除常数项. 用 Eisenstein 判别法可知 $(y + 1)^8 + 1$ 不可约, 故 $x^8 + 1$ 也不可约. $\square$

> [!example]
> **例 5.54** 设 $f(x)$ 是有理系数多项式, 已知 $\sqrt[3]{2}$ 是 $f(x)$ 的根, 证明: $\sqrt[3]{2}\varepsilon, \sqrt[3]{2}\varepsilon^2$ 也是 $f(x)$ 的根, 其中 $\varepsilon = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}$.

> [!proof]-
> 显然 $\sqrt[3]{2}$ 适合多项式 $x^3 - 2$, 由 Eisenstein 判别法可知, $x^3 - 2$ 在有理数域上不可约, 因此它是 $\sqrt[3]{2}$ 的极小多项式. 最后由极小多项式的基本性质可得 $(x^3 - 2) \mid f(x)$, 从而结论得证. $\square$

> [!example]
> **例 5.55** 设 $f(x)$ 是次数大于 1 的奇数次有理系数不可约多项式, 求证: 若 $x_1, x_2$ 是 $f(x)$ 在复数域内两个不同的根, 则 $x_1 + x_2$ 必不是有理数.

> [!proof]-
> 不妨设 $f(x)$ 为首一多项式, 我们用反证法来证明结论. 设 $x_1 + x_2 = r$ 为有理数, 则有理系数多项式 $f(x)$ 与 $f(r - x)$ 有公共根 $x_1$. 因为 $f(x)$ 在有理数域上不可约, 故 $f(x)$ 是 $x_1$ 的极小多项式, 从而由极小多项式的基本性质可得 $f(x) \mid f(r - x)$. 注意到 $f(x)$ 与 $f(r - x)$ 次数相同, 首项系数相反, 从而有 $f(r - x) = -f(x)$. 令 $x = \frac{r}{2}$, 则可得 $f(\frac{r}{2}) = 0$, 即 $\frac{r}{2}$ 是 $f(x)$ 的一个有理根, 这与 $f(x)$ 在有理数域上不可约相矛盾. $\square$


> [!example]
> **例 5.56** 设 $f(x) = (x - a_1)(x - a_2)\cdots(x - a_n) - 1$, 其中 $a_1, a_2, \cdots, a_n$ 是 $n$ 个不同的整数, 求证: $f(x)$ 在有理数域上不可约.

> [!proof]-
> 只要证明 $f(x)$ 在整数环上不可约即可. 用反证法, 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 都是次数小于 $n$ 的首一整系数多项式. 注意到 $g(a_i)h(a_i) = -1$, 因为 $g(x), h(x)$ 是整系数多项式, 故 $g(a_i) = 1, h(a_i) = -1$ 或 $g(a_i) = -1, h(a_i) = 1$. 无论是哪种情况, 都有 $g(a_i) + h(a_i) = 0$, $1 \leq i \leq n$, 即次数小于 $n$ 的多项式 $g(x) + h(x)$ 有 $n$ 个不同的根, 故 $g(x) + h(x) = 0$. 因此 $f(x) = -g(x)^2$, 但 $f(x)$ 是首一多项式, 而 $-g(x)^2$ 的首项系数为 $-1$, 矛盾. $\square$

> [!example]
> **例 5.57** 设 $f(x) = (x - a_1)^2(x - a_2)^2\cdots(x - a_n)^2 + 1$, 其中 $a_1, a_2, \cdots, a_n$ 是 $n$ 个不同的整数, 求证: $f(x)$ 在有理数域上不可约.

> [!proof]-
> 只要证明 $f(x)$ 在整数环上不可约即可. 用反证法, 设 $f(x) = u(x)v(x)$, 其中 $u(x), v(x)$ 都是次数小于 $2n$ 的首一整系数多项式. 注意到 $f(x)$ 没有实根, 故 $u(x), v(x)$ 也都没有实根, 从而由实系数多项式虚根成对可知, $u(x), v(x)$ 作为实数域上的函数都恒大于零. 由于 $f(x)$ 是 $2n$ 次多项式, 故 $u(x)$ 和 $v(x)$ 的次数至少有一个不超过 $n$, 不妨设 $u(x)$ 的次数不超过 $n$. 若 $u(x)$ 的次数小于 $n$, 则由 $f(a_i) = 1$ 可得 $u(a_i)v(a_i) = 1$, 因此 $u(a_i) = 1$. 考虑非零多项式 $u(x) - 1$, 由上面的分析可知它有 $n$ 个不同的根 $a_1, a_2, \cdots, a_n$, 这与它的次数小于 $n$ 矛盾. 因此 $u(x)$ 只能是 $n$ 次首一多项式, 于是 $v(x)$ 也是 $n$ 次首一多项式. 另一方面, 由于 $u(a_i)v(a_i) = 1$, 故 $u(a_i) = v(a_i) = 1$ ($1 \leq i \leq n$). 注意到 $u(x) - v(x)$ 的次数小于 $n$, 并且它有 $n$ 个不同的根 $a_1, a_2, \cdots, a_n$, 因此只能是 $u(x) = v(x)$, $f(x) = u(x)^2$. 令 $h(x) = (x - a_1)(x - a_2)\cdots(x - a_n)$, 则 $u(x)^2 = h(x)^2 + 1$, 即 $(u(x) + h(x))(u(x) - h(x)) = 1$. 因为 $u(x), h(x)$ 都是整系数多项式, 故或者 $u(x) + h(x) = 1$, $u(x) - h(x) = 1$; 或者 $u(x) + h(x) = -1$, $u(x) - h(x) = -1$, 于是 $h(x) = 0$, 矛盾. 因此结论得证. $\square$


## §5.9 多元多项式

数域 $\mathbb{K}$ 上的多元多项式有 3 个重要的性质. 首先是整性, 即两个非零多元多项式的乘积仍然是非零多元多项式. 其次是多元多项式的非零性等价于多元函数的非零性. 最后是因式分解定理对多元多项式仍然成立, 不过它的证明将在抽象代数课程中给出. 下面我们先来看多元多项式整性的若干应用.

> [!example]
> **例 5.58** 设 $f(x_1, \cdots, x_n), g(x_1, \cdots, x_n) \neq 0$ 是 $\mathbb{K}$ 上的多元多项式. 假设对一切使 $g(a_1, \cdots, a_n) \neq 0$ 的 $a_1, \cdots, a_n \in \mathbb{K}$, 均有 $f(a_1, \cdots, a_n) = 0$, 求证: $f(x_1, \cdots, x_n) = 0$.

> [!proof]-
> 用反证法, 假设 $f(x_1, \cdots, x_n) \neq 0$, 则由多元多项式的整性可知 $h(x_1, \cdots, x_n) = f(x_1, \cdots, x_n)g(x_1, \cdots, x_n) \neq 0$, 于是存在 $a_1, \cdots, a_n \in \mathbb{K}$, 使得 $h(a_1, \cdots, a_n) \neq 0$, 从而 $f(a_1, \cdots, a_n) \neq 0$ 并且 $g(a_1, \cdots, a_n) \neq 0$, 这与假设矛盾. $\square$


> [!example]
> **例 5.59** 设 $A \in M_n(\mathbb{K})$, 求证: $|A^*| = |A|^{n-1}$.

> [!proof]-
> 若 $A$ 是非异阵, 则由 $AA^* = |A|I_n$ 两边取行列式可得 $|A||A^*| = |A|^n$, 从而 $|A^*| = |A|^{n-1}$. 若 $A$ 是奇异阵, 则 $|A| = 0$. 这时若 $|A^*| \neq 0$, 则 $A^*$ 是非异阵, 由 $AA^* = |A|I_n = O$ 可得 $A = O$, 从而 $A^* = O$, 矛盾. 因此 $|A^*| = 0 = |A|^{n-1}$. $\square$

> [!example]
> **例 5.60** 设 $A \in M_n(\mathbb{K})$, 求证: $(A^*)^* = |A|^{n-2}A$.

> [!proof]-
> 若 $A$ 是非异阵, 则 $A^* = |A|A^{-1}$, 故 $(A^*)^* = ||A|A^{-1}|(|A|A^{-1})^{-1} = |A|^n|A|^{-1}|A|^{-1}A = |A|^{n-2}A$. 若 $A$ 是奇异阵, 则当 $n \geq 3$ 时, $r(A^*) \leq 1 < n-1$, 故 $(A^*)^* = O = |A|^{n-2}A$. 当 $n = 2$ 时可直接验证. $\square$

> [!example]
> **例 5.61** 设 $f(x_1, \cdots, x_n)$ 是 $\mathbb{K}$ 上的 $n$ 元非零多项式, $S \subseteq \mathbb{K}$ 是无限集, 则必存在 $a_1, \cdots, a_n \in S$, 使得 $f(a_1, \cdots, a_n) \neq 0$.

> [!proof]-
> 对 $n$ 用归纳法. $n = 1$ 时, 一元非零多项式只有有限个根, 而 $S$ 无限, 故存在 $a \in S$ 使得 $f(a) \neq 0$. 假设 $n - 1$ 时结论成立. 对 $n$ 元多项式 $f(x_1, \cdots, x_n)$, 可以写成 $f = g_m(x_1, \cdots, x_{n-1})x_n^m + \cdots + g_0(x_1, \cdots, x_{n-1})$, 其中至少有一个 $g_i \neq 0$. 由归纳假设, 存在 $a_1, \cdots, a_{n-1} \in S$ 使得某个 $g_i(a_1, \cdots, a_{n-1}) \neq 0$. 于是 $f(a_1, \cdots, a_{n-1}, x_n)$ 是 $x_n$ 的非零多项式, 故存在 $a_n \in S$ 使得 $f(a_1, \cdots, a_n) \neq 0$. $\square$

> [!example]
> **例 5.62** 设 $A \in M_n(\mathbb{K})$, 求证: $A$ 的秩为 $r$ 的充要条件是 $A$ 有一个 $r$ 阶子式不等于零, 而所有的 $r+1$ 阶子式都等于零.

> [!proof]-
> 必要性显然. 充分性: 设 $r(A) = s$. 若 $s > r$, 则 $A$ 有一个 $s$ 阶子式非零, 从而有一个 $r+1$ 阶子式非零, 矛盾. 若 $s < r$, 则 $A$ 的所有 $r$ 阶子式都为零, 矛盾. 故 $s = r$. $\square$

> [!example]
> **例 5.63** 设 $A \in M_n(\mathbb{K})$, 求证: $r(A) = 1$ 的充要条件是存在 $n$ 维非零列向量 $\alpha, \beta$, 使得 $A = \alpha\beta'$.

> [!proof]-
> 必要性: 若 $r(A) = 1$, 则 $A$ 的所有列向量成比例, 设 $A$ 的第 $i$ 列为 $\beta_i = b_i\alpha$ ($\alpha \neq 0$), 则 $A = \alpha(b_1, b_2, \cdots, b_n) = \alpha\beta'$, 其中 $\beta = (b_1, b_2, \cdots, b_n)'$. 因为 $A \neq O$, 故 $\beta \neq 0$.
> 充分性: 若 $A = \alpha\beta'$, 则 $r(A) \leq r(\alpha) = 1$, 又 $A \neq O$, 故 $r(A) = 1$. $\square$


> [!example]
> **例 5.64** 设 $f(x) \in \mathbb{K}[x]$, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $x_1, x_2, \cdots, x_n$ 是 $n$ 个不同的数, 且 $\varphi$ 的任一特征值 $\lambda_0$ 都是 $f(x)$ 的根, 即 $f(\lambda_0) = 0$. 设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $V$ 的一组基, $\psi$ 是 $V$ 上的线性变换, 满足 $\psi(\alpha_i) = x_i\alpha_i$ ($1 \leq i \leq n$). 求证: $f(\varphi) = 0$ 的充要条件是 $f(\psi) = 0$.

> [!proof]-
> 若 $f(\varphi) = 0$, 设 $\psi$ 的特征值为 $x_i$, 由条件 $f(x_i) = 0$. 因为 $\psi$ 在某组基下的矩阵为对角阵 $\operatorname{diag}\{x_1, \cdots, x_n\}$, 故 $f(\psi)$ 在该基下的矩阵为 $\operatorname{diag}\{f(x_1), \cdots, f(x_n)\} = O$, 即 $f(\psi) = 0$.
> 反之, 若 $f(\psi) = 0$, 则 $f(x_i) = 0$ 对 $1 \leq i \leq n$ 成立. 由多项式插值, $f(x)$ 有 $n$ 个不同的根, 若 $\deg f < n$, 则 $f = 0$, 自然 $f(\varphi) = 0$. 若 $\deg f \geq n$, 则 $f(x) = (x - x_1)\cdots(x - x_n)g(x)$. 由 Hamilton-Cayley 定理, $(\varphi - x_1 I)\cdots(\varphi - x_n I) = 0$ (因为 $\varphi$ 的特征多项式有根 $x_1, \cdots, x_n$ 的某种排列), 故 $f(\varphi) = 0$. $\square$

## §5.10 结式与判别式

结式与判别式是多项式理论中的重要工具, 它们可以用来判断多项式是否有公共根以及多项式是否有重根.

> [!definition]
> 设
> $$f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_{n-1}x + a_n,$$
> $$g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_{m-1}x + b_m,$$
> 其中 $a_0 \neq 0$, $b_0 \neq 0$. 定义 $f(x)$ 与 $g(x)$ 的结式 (resultant) 为下列 $m + n$ 阶行列式:
> $$R(f, g) = \begin{vmatrix} a_0 & a_1 & \cdots & a_n & & & \\ & a_0 & a_1 & \cdots & a_n & & \\ & & \ddots & \ddots & & \ddots & \\ & & & a_0 & a_1 & \cdots & a_n \\ b_0 & b_1 & \cdots & \cdots & b_m & & \\ & b_0 & b_1 & \cdots & \cdots & b_m & \\ & & \ddots & & & \ddots & \\ & & & b_0 & b_1 & \cdots & b_m \end{vmatrix}$$
> 其中上半部分占 $m$ 行, 下半部分占 $n$ 行, 空白处为零.


> [!theorem]
> 设 $f(x), g(x)$ 如上, 则 $R(f, g) = 0$ 的充要条件是 $f(x)$ 与 $g(x)$ 有非常数公因式 (即它们在复数域上有公共根).

> [!theorem]
> 设 $f(x) = a_0 \prod_{i=1}^{n} (x - x_i)$, $g(x) = b_0 \prod_{j=1}^{m} (x - y_j)$, 则
> $$R(f, g) = a_0^m b_0^n \prod_{i=1}^{n} \prod_{j=1}^{m} (x_i - y_j) = a_0^m \prod_{i=1}^{n} g(x_i) = (-1)^{mn} b_0^n \prod_{j=1}^{m} f(y_j).$$

> [!definition]
> 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $a_0 \neq 0$, $f'(x)$ 是 $f(x)$ 的导数. 定义 $f(x)$ 的判别式为
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} a_0^{-1} R(f, f').$$

> [!theorem]
> 设 $f(x) = a_0 \prod_{i=1}^{n} (x - x_i)$, 则
> $$\Delta(f) = a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2.$$
> 因此 $f(x)$ 有重根的充要条件是 $\Delta(f) = 0$.

> [!example]
> **例 5.65** 求多项式 $f(x) = x^n + px + q$ ($n > 1$) 的判别式.

> [!solution]
> 设 $f(x)$ 的根为 $x_1, \cdots, x_n$, 则 $f'(x) = nx^{n-1} + p$. 由
> $$R(f, f') = \prod_{i=1}^{n} f'(x_i) = n^n \prod_{i=1}^{n} \left(x_i^{n-1} + \frac{p}{n}\right),$$
> 利用 Newton 恒等式或对称多项式理论, 可得
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} n^n q^{n-1} + (-1)^{\frac{(n-1)(n-2)}{2}} (n-1)^{n-1} p^n.$$

> [!example]
> **例 5.66** 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, $a_0, b_0$ 不全为零, 求证: $(f(x), g(x)) \neq 1$ 的充要条件是
> $$R(f, g) = 0.$$

> [!proof]-
> 这是结式的基本性质, 由结式的定义和定理直接可得. $\square$


> [!example]
> **例 5.67** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0$, $g(x) = x^m + b_{m-1}x^{m-1} + \cdots + b_0$, 求证: $f(x)$ 与 $g(x)$ 有公共根的充要条件是
> $$R(f, g) = \begin{vmatrix} 1 & a_{n-1} & \cdots & a_0 & & & \\ & 1 & a_{n-1} & \cdots & a_0 & & \\ & & \ddots & & & \ddots & \\ & & & 1 & a_{n-1} & \cdots & a_0 \\ 1 & b_{m-1} & \cdots & \cdots & b_0 & & \\ & 1 & b_{m-1} & \cdots & \cdots & b_0 & \\ & & \ddots & & & \ddots & \\ & & & 1 & b_{m-1} & \cdots & b_0 \end{vmatrix} = 0.$$

> [!proof]-
> 这是结式的直接应用. $\square$

> [!example]
> **例 5.68** 设 $f(x), g(x)$ 是次数大于 0 的多项式, 求证:
> $$R(f, g) = (-1)^{mn} R(g, f),$$
> 其中 $m = \deg f$, $n = \deg g$.

> [!proof]-
> 由结式的行列式定义, 交换 $f$ 和 $g$ 相当于将 $R(f, g)$ 的行列式进行 $mn$ 次相邻行交换, 每交换一次改变符号, 故总共改变 $(-1)^{mn}$ 次符号. $\square$

> [!example]
> **例 5.69** 设 $f(x)$ 是 $n$ 次多项式, 首项系数为 $a_0$, 根为 $x_1, \cdots, x_n$, 求证:
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} a_0^{-1} R(f, f') = a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2.$$

> [!proof]-
> 设 $f(x) = a_0(x - x_1)\cdots(x - x_n)$, 则 $f'(x_i) = a_0 \prod_{j \neq i} (x_i - x_j)$. 由 $R(f, f') = a_0^{n-1} \prod_{i=1}^{n} f'(x_i) = a_0^{2n-1} \prod_{i=1}^{n} \prod_{j \neq i} (x_i - x_j) = a_0^{2n-1}(-1)^{\frac{n(n-1)}{2}} \prod_{i<j}(x_i - x_j)^2$, 整理即得. $\square$

> [!example]
> **例 5.70** 设 $f(x) = x^3 + px + q$, 求 $\Delta(f)$.

> [!solution]
> $f'(x) = 3x^2 + p$. 由 $R(f, f') = \prod f'(x_i) = 3^3 \prod(x_i^2 + \frac{p}{3})$, 经计算得
> $$\Delta(f) = -4p^3 - 27q^2.$$

> [!example]
> **例 5.71** 设 $f(x)$ 是 $n$ 次多项式, $\deg g = m$, 求证: $\Delta(fg) = \Delta(f)\Delta(g)R(f, g)^2$.

> [!proof]-
> 设 $f(x) = a_0 \prod_{i=1}^{n}(x - x_i)$, $g(x) = b_0 \prod_{j=1}^{m}(x - y_j)$, 则 $fg$ 的根为 $x_1, \cdots, x_n, y_1, \cdots, y_m$. 由判别式公式,
> $$\Delta(fg) = (a_0b_0)^{2(n+m)-2} \prod_{i<j}(z_i - z_j)^2$$
> 其中 $z_i$ 取遍所有根. 将乘积分类: $x_i$ 之间、$y_j$ 之间、$x_i$ 与 $y_j$ 之间, 即得
> $$\Delta(fg) = \Delta(f)\Delta(g)R(f, g)^2.$$


> [!example]
> **例 5.72** 设 $f(x)$ 和 $g(x)$ 是次数大于 1 的多项式, 求证:
> $$\Delta(f(x)g(x)) = \Delta(f(x))\Delta(g(x))R(f, g)^2.$$

> [!proof]-
> 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, 且 $f(x), g(x)$ 的根分别是 $x_1, x_2, \cdots, x_n$; $x_{n+1}, x_{n+2}, \cdots, x_{n+m}$, 则
> $$\Delta(f(x)g(x)) = (a_0b_0)^{2(n+m)-2} \prod_{1 \leq i < j \leq n+m} (x_i - x_j)^2.$$
> 现将乘积中的因式作如下分类: 若 $i \leq n, j \leq n$, 则
> $$a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2 = \Delta(f(x));$$
> 若 $i > n, j > n$, 则
> $$b_0^{2m-2} \prod_{n+1 \leq i < j \leq n+m} (x_i - x_j)^2 = \Delta(g(x));$$
> 若 $i \leq n, j > n$, 则
> $$a_0^{2m}b_0^{2n} \prod_{1 \leq i \leq n < j \leq n+m} (x_i - x_j)^2 = R(f, g)^2.$$
> 因此便有
> $$\Delta(f(x)g(x)) = \Delta(f(x))\Delta(g(x))R(f, g)^2.$$ $\square$

> [!example]
> **例 5.73** 设 $g(x)$ 是次数大于 1 的多项式, 求证:
> $$\Delta((x - a)g(x)) = g(a)^2 \Delta(g(x)).$$

> [!proof]-
> 设 $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, 其根为 $x_1, \cdots, x_m$, 则
> $$\begin{aligned} \Delta((x - a)g(x)) &= b_0^{2m} \prod_{i=1}^{m}(a - x_i)^2 \prod_{1 \leq i < j \leq m} (x_i - x_j)^2 \\ &= (b_0(a - x_1)\cdots(a - x_m))^2 \cdot b_0^{2m-2} \prod_{1 \leq i < j \leq m} (x_i - x_j)^2 \\ &= g(a)^2 \Delta(g(x)). \end{aligned}$$ $\square$


> [!example]
> **例 5.74** 设 $f(x) = g(h(x))$, 其中 $h(x)$ 是 $m$ 次首一多项式, $g(x)$ 是 $n$ 次首一多项式, 其根为 $x_1, x_2, \cdots, x_n$, 求证:
> $$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 1** 由假设 $g(x)$ 的根为 $x_1, x_2, \cdots, x_n$, 故有
> $$f(x) = g(h(x)) = (h(x) - x_1)(h(x) - x_2)\cdots(h(x) - x_n).$$
> 又设 $h(x) - x_i = (x - u_{i1})(x - u_{i2})\cdots(x - u_{im})$, $1 \leq i \leq n$, 于是 $u_{ij}$ ($1 \leq i \leq n, 1 \leq j \leq m$) 就是 $f(x)$ 的全部根. 对二重足标引进序如下: $(i,j) < (k,l)$ 当且仅当 $i < k$ 或 $i = k, j < l$. 由题目条件可知 $f(x)$ 是首一多项式, 因此
> $$\Delta(f(x)) = \prod_{1 \leq (i,j) < (i',j') \leq (n,m)} (u_{ij} - u_{i'j'})^2.$$
> 对上式乘积中的因子进行分类. 第一类 (第一个足标相同):
> $$\Delta(h(x) - x_i) = \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2,$$
> 因此
> $$\prod_{i=1}^{n} \Delta(h(x) - x_i) = \prod_{i=1}^{n} \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2.$$
> 第二类 (第一个足标不同): 注意到对固定的 $i$, $u_{ij}$ 是 $h(x) - x_i$ 的根, 因此 $h(u_{ij}) = x_i$.
> 又
> $$\begin{aligned} h(u_{i1}) - x_{i'} &= (u_{i1} - u_{i'1})(u_{i1} - u_{i'2})\cdots(u_{i1} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ h(u_{i2}) - x_{i'} &= (u_{i2} - u_{i'1})(u_{i2} - u_{i'2})\cdots(u_{i2} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ &\quad \vdots \\ h(u_{im}) - x_{i'} &= (u_{im} - u_{i'1})(u_{im} - u_{i'2})\cdots(u_{im} - u_{i'm}), \quad i+1 \leq i' \leq n. \end{aligned}$$


上述诸式之积等于
$$(h(u_{i1}) - x_{i'})(h(u_{i2}) - x_{i'})\cdots(h(u_{im}) - x_{i'}) = (x_i - x_{i'})^m.$$
因此
$$\prod_{1 \leq (i,j) < (i',j') \leq (n,m), i \neq i'} (u_{ij} - u_{i'j'})^2 = \prod_{1 \leq i < i' \leq n} (x_i - x_{i'})^{2m} = \Delta(g(x))^m.$$
综上所述, 便有
$$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 2** 由例 5.69, 我们有
> $$\Delta(f) = (-1)^{\frac{1}{2}mn(mn-1)} R(f, f'),$$
> $$\begin{aligned} R(f, f') &= R(g(h(x)), g'(h(x))h'(x)) \\ &= R(g(h(x)), g'(h(x))) R(g(h(x)), h'(x)), \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), g'(h(x))) &= \prod_{i=1}^{n} \prod_{j=1}^{m} g'(h(u_{ij})) \\ &= \prod_{i=1}^{n} g'(x_i)^m = (-1)^{\frac{1}{2}mn(n-1)} \Delta(g(x))^m, \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), h'(x)) &= \prod_{i=1}^{n} \prod_{j=1}^{m} h'(u_{ij}) \\ &= (-1)^{\frac{1}{2}mn(m-1)} \prod_{i=1}^{n} \Delta(h(x) - x_i). \end{aligned}$$

因为
$$\frac{1}{2}mn(mn-1) - \frac{1}{2}mn(n-1) - \frac{1}{2}mn(m-1) = \frac{1}{2}m(m-1)n(n-1)$$
是一个偶数, 因此结论成立. $\square$

> [!example]
> **例 5.75** 求参数曲线 $\begin{cases} x = \frac{2(t+1)}{t^2 + 1} \\ y = \frac{t^2}{2t - 1} \end{cases}$ 的直角坐标方程.

> [!solution]
> 去分母得方程组
> $$\begin{cases} xt^2 - 2t + (x - 2) = 0, \\ t^2 - 2yt + y = 0. \end{cases}$$
> 令
> $$\begin{cases} f(t) = xt^2 - 2t + (x - 2), \\ g(t) = t^2 - 2yt + y, \end{cases}$$
> 由 $t$ 决定的参数曲线上的一点相当于方程组有公共根, 因此
> $$R(f, g) = \begin{vmatrix} x & -2 & x - 2 & 0 \\ 0 & x & -2 & x - 2 \\ 1 & -2y & y & 0 \\ 0 & 1 & -2y & y \end{vmatrix} = 0.$$
> 求出行列式可得该曲线的直角坐标方程为
> $$5x^2y^2 - 2x^2y - 12xy^2 + x^2 - 4x + 12y + 4 = 0.$$ $\square$


> [!remark]
> **注** 只有当多项式 $f(x), g(x)$ 的次数都大于 0 时, 其结式 $R(f(x), g(x))$ 的定义才有意义. 同理, 只有当 $f(x)$ 的次数大于 1 时, 其判别式 $\Delta(f(x))$ 的定义才有意义. 当然我们也可以作一些人为的规定, 例如, 若 $g(x) = c$ 是一个非零常数多项式, 则约定 $R(f(x), g(x)) = c^n$, 其中 $n = \deg f(x)$; 若 $f(x)$ 是一个一次多项式, 则约定 $\Delta(f(x)) = 1$. 我们不难发现这些约定可以完美地融入到已证明的关于结式和判别式的结果中. 特别地, 例 5.72 和例 5.73 的结论也适合 $\deg f(x) = 1$ 或 $\deg g(x) = 1$ 的情形, 并且例 5.73 也可以看成是例 5.72 的特例. 因此从某种意义上说, 这些关于结式和判别式的约定都是自然的.

> [!example]
> **例 5.74** 设 $f(x) = g(h(x))$, 其中 $h(x)$ 是 $m$ 次首一多项式, $g(x)$ 是 $n$ 次首一多项式, 其根为 $x_1, x_2, \cdots, x_n$, 求证:
> $$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 1** 由假设 $g(x)$ 的根为 $x_1, x_2, \cdots, x_n$, 故有
> $$f(x) = g(h(x)) = (h(x) - x_1)(h(x) - x_2)\cdots(h(x) - x_n).$$
> 又设 $h(x) - x_i = (x - u_{i1})(x - u_{i2})\cdots(x - u_{im})$, $1 \leq i \leq n$, 于是 $u_{ij}$ ($1 \leq i \leq n, 1 \leq j \leq m$) 就是 $f(x)$ 的全部根. 对二重足标引进序如下: $(i,j) < (k,l)$ 当且仅当 $i < k$ 或 $i = k, j < l$. 由题目条件可知 $f(x)$ 是首一多项式, 因此
> $$\Delta(f(x)) = \prod_{1 \leq (i,j) < (i',j') \leq (n,m)} (u_{ij} - u_{i'j'})^2.$$
> 对上式乘积中的因子进行分类. 第一类 (第一个足标相同):
> $$\Delta(h(x) - x_i) = \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2,$$
> 因此
> $$\prod_{i=1}^{n} \Delta(h(x) - x_i) = \prod_{i=1}^{n} \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2.$$
> 第二类 (第一个足标不同): 注意到对固定的 $i$, $u_{ij}$ 是 $h(x) - x_i$ 的根, 因此 $h(u_{ij}) = x_i$. 又
> $$\begin{aligned} h(u_{i1}) - x_{i'} &= (u_{i1} - u_{i'1})(u_{i1} - u_{i'2})\cdots(u_{i1} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ h(u_{i2}) - x_{i'} &= (u_{i2} - u_{i'1})(u_{i2} - u_{i'2})\cdots(u_{i2} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ &\quad\quad\vdots \\ h(u_{im}) - x_{i'} &= (u_{im} - u_{i'1})(u_{im} - u_{i'2})\cdots(u_{im} - u_{i'm}), \quad i+1 \leq i' \leq n. \end{aligned}$$


上述诸式之积等于
$$(h(u_{i1}) - x_{i'})(h(u_{i2}) - x_{i'})\cdots(h(u_{im}) - x_{i'}) = (x_i - x_{i'})^m.$$
因此
$$\prod_{1 \leq (i,j) < (i',j') \leq (n,m), i \neq i'} (u_{ij} - u_{i'j'})^2 = \prod_{1 \leq i < i' \leq n} (x_i - x_{i'})^{2m} = \Delta(g(x))^m.$$
综上所述, 便有
$$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 2** 由例 5.69, 我们有
> $$\Delta(f) = (-1)^{\frac{1}{2}mn(mn-1)} R(f, f'),$$
> $$\begin{aligned} R(f, f') &= R(g(h(x)), g'(h(x))h'(x)) \\ &= R(g(h(x)), g'(h(x))) R(g(h(x)), h'(x)), \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), g'(h(x))) &= \prod_{i=1}^{n} \prod_{j=1}^{m} g'(h(u_{ij})) \\ &= \prod_{i=1}^{n} g'(x_i)^m = (-1)^{\frac{1}{2}mn(n-1)} \Delta(g(x))^m, \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), h'(x)) &= \prod_{i=1}^{n} \prod_{j=1}^{m} h'(u_{ij}) \\ &= (-1)^{\frac{1}{2}mn(m-1)} \prod_{i=1}^{n} \Delta(h(x) - x_i). \end{aligned}$$
> 因为 $\frac{1}{2}mn(mn-1) - \frac{1}{2}mn(n-1) - \frac{1}{2}mn(m-1) = \frac{1}{2}m(m-1)n(n-1)$ 是一个偶数, 因此结论成立. $\square$

> [!example]
> **例 5.75** 求参数曲线 $\begin{cases} x = \frac{2(t+1)}{t^2 + 1} \\ y = \frac{t^2}{2t - 1} \end{cases}$ 的直角坐标方程.

> [!solution]
> 去分母得方程组
> $$\begin{cases} xt^2 - 2t + (x - 2) = 0, \\ t^2 - 2yt + y = 0. \end{cases}$$
> 令
> $$\begin{cases} f(t) = xt^2 - 2t + (x - 2), \\ g(t) = t^2 - 2yt + y, \end{cases}$$
> 由 $t$ 决定的参数曲线上的一点相当于方程组有公共根, 因此
> $$R(f, g) = \begin{vmatrix} x & -2 & x - 2 & 0 \\ 0 & x & -2 & x - 2 \\ 1 & -2y & y & 0 \\ 0 & 1 & -2y & y \end{vmatrix} = 0.$$
> 求出行列式可得该曲线的直角坐标方程为
> $$5x^2y^2 - 2x^2y - 12xy^2 + x^2 - 4x + 12y + 4 = 0.$$ $\square$


## §5.11 互素多项式的应用

在高等代数的框架中, 多项式理论起到了一个承上启下的作用. 一方面, 多项式理论是即将阐述的相似标准型理论的基石; 另一方面, 它也联系起了前面阐述的矩阵理论和线性空间理论. 下面将通过几个典型例题来看一看互素多项式的相关应用.

> [!example]
> **例 5.76** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 满足 $f(\boldsymbol{A}) = \boldsymbol{O}$, 证明: $g(\boldsymbol{A})$ 是可逆矩阵.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = \boldsymbol{A}$, 可得恒等式
> $$f(\boldsymbol{A})u(\boldsymbol{A}) + g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n.$$
> 因为 $f(\boldsymbol{A}) = \boldsymbol{O}$, 故有 $g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n$, 从而 $g(\boldsymbol{A})$ 是非异阵且 $g(\boldsymbol{A})^{-1} = v(\boldsymbol{A})$. $\square$

> [!remark]
> 利用例 5.76 可以证明一大类可逆矩阵的问题, 比如例 2.20, 而下面的例题则是例 3.70 和例 3.71 的推广.

> [!example]
> **例 5.77** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 证明: $f(\boldsymbol{A})g(\boldsymbol{A}) = \boldsymbol{O}$ 的充要条件是 $\mathrm{r}(f(\boldsymbol{A})) + \mathrm{r}(g(\boldsymbol{A})) = n$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = \boldsymbol{A}$, 可得恒等式
> $$f(\boldsymbol{A})u(\boldsymbol{A}) + g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n.$$
> 考虑如下分块矩阵的初等变换:
> $$\begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{O} \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A}) & f(\boldsymbol{A})u(\boldsymbol{A}) \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{I}_n \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to$$
> $$\begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{I}_n \\ -f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \end{pmatrix} \to \begin{pmatrix} \boldsymbol{O} & \boldsymbol{I}_n \\ -f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{I}_n \end{pmatrix},$$
> 故有 $\mathrm{r}(f(\boldsymbol{A})) + \mathrm{r}(g(\boldsymbol{A})) = \mathrm{r}(f(\boldsymbol{A})g(\boldsymbol{A})) + n$, 从而结论得证. $\square$

> [!remark]
> 例 5.78 告诉我们: 多项式的互素因式分解可以诱导出空间的直和分解, 从几何层面上看, 这就是相似标准型理论原始的出发点. 另外, 例 5.78 也是例 4.54 和第 4 章解答题 9 的推广.


> [!example]
> **例 5.78** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 满足 $f(\varphi)g(\varphi) = 0$, 证明: $V = V_1 \oplus V_2$, 其中 $V_1 = \mathrm{Ker}\,f(\varphi)$, $V_2 = \mathrm{Ker}\,g(\varphi)$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$. 在上式中代入 $x = \varphi$, 可得恒等式
> $$f(\varphi)u(\varphi) + g(\varphi)v(\varphi) = I_V.$$
> 对任意的 $\alpha \in V$, 有 $\alpha = f(\varphi)u(\varphi)(\alpha) + g(\varphi)v(\varphi)(\alpha)$. 令 $\alpha_1 = g(\varphi)v(\varphi)(\alpha)$, $\alpha_2 = f(\varphi)u(\varphi)(\alpha)$, 则 $f(\varphi)(\alpha_1) = v(\varphi)f(\varphi)g(\varphi)(\alpha) = 0$, 即 $\alpha_1 \in V_1$. 同理 $\alpha_2 \in V_2$, 于是 $V = V_1 + V_2$. 再证直和, 任取 $\beta \in V_1 \cap V_2$, 则 $f(\varphi)(\beta) = g(\varphi)(\beta) = 0$, 由 $f(\varphi)u(\varphi)(\beta) + g(\varphi)v(\varphi)(\beta) = \beta$, 得 $\beta = 0$, 即 $V_1 \cap V_2 = \{0\}$, 从而 $V = V_1 \oplus V_2$. $\square$

> [!example]
> **例 5.79** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的可逆线性变换, 若 $W$ 是 $\varphi$ 的不变子空间, 证明: $W$ 也是 $\varphi^{-1}$ 的不变子空间.

> [!proof]-
> 取 $W$ 的一组基并扩张为 $V$ 的基, 则 $\varphi$ 在此基下的矩阵为分块上三角阵 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$, 其中 $A$ 是 $\varphi|_W$ 在 $W$ 的基下的表示矩阵. 由于 $\varphi$ 可逆, 故 $A$ 可逆, 即 $\varphi|_W$ 可逆. 对任意 $\alpha \in W$, 存在 $\beta \in W$ 使得 $\varphi|_W(\beta) = \alpha$, 即 $\varphi(\beta) = \alpha$, 故 $\varphi^{-1}(\alpha) = \beta \in W$. $\square$

> [!example]
> **例 5.80** 设 $f(x)$ 是 $n$ 次多项式, $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $f(x)$ 的 $n$ 个根 (可以有重根), 证明: 对任意多项式 $g(x)$, 有
> $$\sum_{i=1}^{n} \frac{g(\lambda_i)}{f'(\lambda_i)}$$
> 是 $f(x)$ 的系数的多项式 (称为 $g(x)$ 关于 $f(x)$ 的 Lagrange 插值和).

> [!proof]-
> 设 $f(x) = a_0(x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_n)$, 则
> $$f'(\lambda_i) = a_0 \prod_{j \neq i} (\lambda_i - \lambda_j).$$
> 利用 Lagrange 插值公式和对称多项式理论, 可以证明上述和是 $f(x)$ 的初等对称多项式的多项式, 从而是 $f(x)$ 的系数的多项式. $\square$


> [!example]
> **例 5.81** 设 $f(x)$ 是 $n$ 次首一多项式, $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $f(x)$ 的 $n$ 个根, $g(x)$ 是任一多项式, 证明:
> $$\frac{g(x)}{f(x)} = \sum_{i=1}^{n} \frac{g(\lambda_i)}{f'(\lambda_i)(x - \lambda_i)}.$$

> [!proof]-
> 由部分分式分解, 可设 $\frac{g(x)}{f(x)} = \sum_{i=1}^{n} \frac{a_i}{x - \lambda_i}$. 两边乘以 $x - \lambda_j$ 并令 $x \to \lambda_j$, 得
> $$a_j = \lim_{x \to \lambda_j} \frac{g(x)(x - \lambda_j)}{f(x)} = \frac{g(\lambda_j)}{f'(\lambda_j)}.$$ $\square$

> [!example]
> **例 5.82** 设 $f(x)$ 是 $n$ 次首一多项式, $g(x)$ 是次数小于 $n$ 的多项式, 若 $f(x)$ 的根为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 证明:
> $$g(x) = \sum_{i=1}^{n} \frac{g(\lambda_i)f(x)}{f'(\lambda_i)(x - \lambda_i)}.$$

> [!proof]-
> 这是 Lagrange 插值公式的另一种形式, 由例 5.81 两边乘以 $f(x)$ 即得. $\square$

> [!example]
> **例 5.83** 设 $A$ 是 $n$ 阶复方阵, $f(x)$ 是 $A$ 的特征多项式, 证明: $f(A) = O$ (Hamilton-Cayley 定理).

> [!proof]-
> 设 $f(x) = (x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_n)$, 其中 $\lambda_i$ 是 $A$ 的特征值. 由 Jordan 标准型理论, $A = PJP^{-1}$, 其中 $J$ 是 Jordan 标准型. 则 $f(A) = Pf(J)P^{-1}$. 由于 $J$ 是上三角阵, 对角元为 $\lambda_1, \cdots, \lambda_n$, 故 $f(J)$ 的对角元为 $f(\lambda_i) = 0$. 进一步验证 $f(J) = O$, 从而 $f(A) = O$. $\square$

> [!example]
> **例 5.84** 设 $A$ 是 $n$ 阶复方阵, $g(x)$ 是 $A$ 的极小多项式, 证明:
> (1) $g(x)$ 是唯一的;
> (2) $g(x)$ 整除 $A$ 的特征多项式;
> (3) $g(x)$ 与 $f(x)$ 有相同的根 (不计重数), 其中 $f(x)$ 是 $A$ 的特征多项式.

> [!proof]-
> (1) 若 $g_1(x), g_2(x)$ 都是 $A$ 的极小多项式, 则 $g_1(A) = g_2(A) = 0$. 由带余除法, $g_1(x) = g_2(x)q(x) + r(x)$, 代入 $x = A$ 得 $r(A) = 0$. 由极小多项式次数的最小性, $r(x) = 0$, 故 $g_2(x) \mid g_1(x)$. 同理 $g_1(x) \mid g_2(x)$, 又它们都是首一的, 故 $g_1 = g_2$.
> (2) 设 $f(x)$ 是 $A$ 的特征多项式, 由 Hamilton-Cayley 定理 $f(A) = 0$. 由带余除法 $f(x) = g(x)q(x) + r(x)$, $\deg r < \deg g$, 代入 $x = A$ 得 $r(A) = 0$, 故 $r = 0$, 即 $g \mid f$.
> (3) 由 (2) 知 $g$ 的根都是 $f$ 的根. 反之, 若 $\lambda$ 是 $f$ 的根, 即 $\lambda$ 是 $A$ 的特征值, 设 $A\alpha = \lambda\alpha$ ($\alpha \neq 0$), 则 $0 = g(A)\alpha = g(\lambda)\alpha$, 故 $g(\lambda) = 0$. $\square$


> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$.
> 在上式中代入 $x = oldsymbol{A}$, 可得恒等式
> $$f(oldsymbol{A})u(oldsymbol{A}) + g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n.$$
> 因为 $f(oldsymbol{A}) = oldsymbol{O}$, 故有 $g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n$, 从而 $g(oldsymbol{A})$ 是非异阵且 $g(oldsymbol{A})^{-1} = v(oldsymbol{A})$.

利用例 5.76 可以证明一大类可逆矩阵的问题, 比如例 2.20, 而下面的例题则是例 3.70 和例 3.71 的推广.

> [!example]
> **例 5.77** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $oldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 证明: $f(oldsymbol{A})g(oldsymbol{A}) = oldsymbol{O}$ 的充要条件是 $\mathrm{r}(f(oldsymbol{A})) + \mathrm{r}(g(oldsymbol{A})) = n$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = oldsymbol{A}$, 可得恒等式
> $$f(oldsymbol{A})u(oldsymbol{A}) + g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n.$$
> 考虑如下分块矩阵的初等变换:
> $$egin{pmatrix} f(oldsymbol{A}) & oldsymbol{O} \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A}) & f(oldsymbol{A})u(oldsymbol{A}) \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A}) & oldsymbol{I}_n \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o$$
> $$egin{pmatrix} f(oldsymbol{A}) & oldsymbol{I}_n \ -f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \end{pmatrix} 	o egin{pmatrix} oldsymbol{O} & oldsymbol{I}_n \ -f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \ oldsymbol{O} & oldsymbol{I}_n \end{pmatrix},$$
> 故有 $\mathrm{r}(f(oldsymbol{A})) + \mathrm{r}(g(oldsymbol{A})) = \mathrm{r}(f(oldsymbol{A})g(oldsymbol{A})) + n$, 从而结论得证.

> [!remark]
> 例 5.78 告诉我们: 多项式的互素因式分解可以诱导出空间的直和分解, 从几何层面上看, 这就是相似标准型理论原始的出发点. 另外, 例 5.78 也是例 4.54 和第 4 章解答题 9 的推广.

> [!example]
> **例 5.78** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 满足 $f(\varphi)g(\varphi) = 0$, 证明: $V = V_1 \oplus V_2$, 其中 $V_1 = \mathrm{Ker}\,f(\varphi)$, $V_2 = \mathrm{Ker}\,g(\varphi)$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$.
> 在上式中代入 $x = \varphi$, 可得恒等式
> $$f(\varphi)u(\varphi) + g(\varphi)v(\varphi) = I_V.$$
> 对任意的 $\alpha \in V$, 有
> $$\alpha = u(\varphi)f(\varphi)(\alpha) + v(\varphi)g(\varphi)(\alpha).$$
> 注意到 $u(\varphi)f(\varphi)(\alpha) \in V_2$ (因为 $g(\varphi)u(\varphi)f(\varphi)(\alpha) = u(\varphi)f(\varphi)g(\varphi)(\alpha) = 0$), 同理 $v(\varphi)g(\varphi)(\alpha) \in V_1$.
> 因此 $V = V_1 + V_2$. 又对任意的 $\beta \in V_1 \cap V_2$, 有 $f(\varphi)(\beta) = g(\varphi)(\beta) = 0$, 故
> $$\beta = u(\varphi)f(\varphi)(\beta) + v(\varphi)g(\varphi)(\beta) = 0,$$
> 即 $V_1 \cap V_2 = 0$, 从而 $V = V_1 \oplus V_2$.


---

# 第6章 特征值


## §6.1 基本概念

### 1. 特征值与特征向量

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


### 2. 特征多项式与极小多项式

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

### 3. 相似矩阵

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


### 4. 特征值的计算

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


### 5. 特征子空间

> [!example] 例 6.13
> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\lambda_0$ 是 $\varphi$ 的特征值, 试对 $k \geq 1$, 证明: $$\mathrm{Ker}(\varphi - \lambda_0 I_V)^k \subseteq \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}.$$ 并举例说明真包含关系可以发生.

> [!proof]- 证明
> 若 $\boldsymbol{\alpha} \in \mathrm{Ker}(\varphi - \lambda_0 I_V)^k$, 则 $(\varphi - \lambda_0 I_V)^k(\boldsymbol{\alpha}) = \boldsymbol{0}$, 从而 $(\varphi - \lambda_0 I_V)^{k+1}(\boldsymbol{\alpha}) = (\varphi - \lambda_0 I_V)(\boldsymbol{0}) = \boldsymbol{0}$, 即 $\boldsymbol{\alpha} \in \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}$. 因此 $\mathrm{Ker}(\varphi - \lambda_0 I_V)^k \subseteq \mathrm{Ker}(\varphi - \lambda_0 I_V)^{k+1}$.

> [!example] 例 6.14
> 设 $\varphi$ 是 $V$ 上的线性变换, $V$ 有直和分解: $V = V_1 \oplus V_2 \oplus \cdots \oplus V_m$, 其中每个 $V_i$ 都是 $\varphi-$不变子空间. 设 $\varphi|_{V_i}$ 的特征多项式为 $f_i(\lambda)$, 求证: $\varphi$ 的特征多项式 $f(\lambda) = f_1(\lambda)f_2(\cdots)f_m(\lambda)$.

> [!proof]- 证明
> 取 $V_i$ 的一组基, 它们合在一起构成 $V$ 的一组基. 设 $\varphi|_{V_i}$ 在这组基下的表示矩阵为 $\boldsymbol{A}_i$, 则 $\varphi$ 在 $V$ 的这组基下的表示矩阵为分块对角矩阵 $\boldsymbol{A} = \mathrm{diag}\{\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_m\}$. 因此 $$f(\lambda) = |\lambda\boldsymbol{I} - \boldsymbol{A}| = \prod_{i=1}^m |\lambda\boldsymbol{I}_{n_i} - \boldsymbol{A}_i| = \prod_{i=1}^m f_i(\lambda). \quad \square$$


## §6.2 特征值和特征向量

本节主要讨论特征值与特征向量的基本性质以及相关的计算方法.

### 1. 特征值的基本性质

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


### 2. 特征向量的性质

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


### 3. 特征多项式的计算

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


### 4. 特征子空间与几何重数

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


### 5. 特征值的进一步性质

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


## §6.3 乘法交换性诱导的同时性质

本节主要讨论当两个矩阵乘法可交换时, 它们可以同时具有的一些性质, 如同时对角化、同时上三角化等.

### 1. 同时上三角化

> [!theorem] 定理 6.8
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 是复数域 $\mathbb{C}$ 上的 $n$ 阶矩阵, 且 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵.

> [!proof]- 证明
> 对 $n$ 用归纳法. $n=1$ 时显然. 设 $n > 1$, 由例 6.21 知 $\boldsymbol{A}, \boldsymbol{B}$ 有公共特征向量 $\boldsymbol{\alpha}_1$. 将 $\boldsymbol{\alpha}_1$ 扩充为 $\mathbb{C}^n$ 的一组基, 令 $\boldsymbol{Q} = (\boldsymbol{\alpha}_1, \cdots)$, 则 $$\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q} = \begin{pmatrix} \lambda_1 & * \\ \boldsymbol{0} & \boldsymbol{A}_1 \end{pmatrix}, \quad \boldsymbol{Q}^{-1}\boldsymbol{B}\boldsymbol{Q} = \begin{pmatrix} \mu_1 & * \\ \boldsymbol{0} & \boldsymbol{B}_1 \end{pmatrix}.$$ 由 $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{B}\boldsymbol{A}$ 可得 $\boldsymbol{A}_1\boldsymbol{B}_1 = \boldsymbol{B}_1\boldsymbol{A}_1$. 由归纳假设, 存在可逆矩阵 $\boldsymbol{R}$ 使 $\boldsymbol{R}^{-1}\boldsymbol{A}_1\boldsymbol{R}$ 和 $\boldsymbol{R}^{-1}\boldsymbol{B}_1\boldsymbol{R}$ 同时为上三角矩阵. 令 $\boldsymbol{P} = \boldsymbol{Q}\begin{pmatrix} 1 & \boldsymbol{0}' \\ \boldsymbol{0} & \boldsymbol{R} \end{pmatrix}$, 则 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 和 $\boldsymbol{P}^{-1}\boldsymbol{B}\boldsymbol{P}$ 都是上三角矩阵. $\square$

> [!corollary] 推论 6.9
> 设 $\boldsymbol{A}_1, \boldsymbol{A}_2, \cdots, \boldsymbol{A}_k$ 是 $\mathbb{C}$ 上两两乘法可交换的 $n$ 阶矩阵, 则存在可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}_i\boldsymbol{P}\ (i=1,2,\cdots,k)$ 都是上三角矩阵.


### 2. 同时对角化

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


### 3. 同时性质的应用

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

## §6.4 矩阵相似和可对角化的计算

本节讨论矩阵相似关系的判定以及矩阵可对角化的具体计算方法.

### 1. 相似关系的判定

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

### 2. 可对角化的计算

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


### 3. 利用特征值判定矩阵性质

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


### 4. 矩阵的迹与特征值

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

## §6.4 矩阵相似和可对角化的计算

本节将从 5 个方面阐述与矩阵相似和矩阵可对角化相关的计算方法.

### 1. 相似初等变换及其应用

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


### 2. 利用相似不变量来判定矩阵不相似

相似的矩阵具有相同的迹、行列式、特征多项式和极小多项式等, 故它们被称为矩阵相似关系下的**不变量**. 因此若两个矩阵的相似不变量不相同, 则它们必不相似. 利用这种方法来判断两个矩阵不相似是很简便的.

> [!example] 例 6.48
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶方阵, 求证: $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}$ 必不相似于 $k\boldsymbol{I}_n$, 其中 $k$ 是非零常数.

> [!proof]- 证明
> 注意到 $\mathrm{tr}(\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}) = 0$, $\mathrm{tr}(k\boldsymbol{I}_n) = nk \neq 0$, 又矩阵的迹是相似不变量, 因此 $\boldsymbol{A}\boldsymbol{B} - \boldsymbol{B}\boldsymbol{A}$ 和 $k\boldsymbol{I}_n$ 必不相似. $\square$

> [!example] 例 6.49
> 设 $\boldsymbol{A}, \boldsymbol{B}$ 为 $n$ 阶正交矩阵, 且线性方程组 $(\boldsymbol{A} + \boldsymbol{B})\boldsymbol{x} = \boldsymbol{0}$ 的解空间维数是奇数, 求证: $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 必不相似.

> [!proof]- 证明
> 由假设可知 $n - r(\boldsymbol{A} + \boldsymbol{B})$ 为奇数, 再由例 9.119 可知 $|\boldsymbol{A}| = -|\boldsymbol{B}| \neq 0$, 又矩阵的行列式是相似不变量, 因此 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 必不相似. $\square$

### 3. 过渡矩阵 $\boldsymbol{P}$ 的计算

首先, 我们介绍一下当矩阵相似于对角矩阵时求过渡矩阵的方法. 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 可逆矩阵 $\boldsymbol{P} = (\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n)$ 为其列分块, 且 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$ 则 $$\boldsymbol{A}\boldsymbol{P} = \boldsymbol{P}\,\mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$ 即 $$(\boldsymbol{A}\boldsymbol{\alpha}_1, \boldsymbol{A}\boldsymbol{\alpha}_2, \cdots, \boldsymbol{A}\boldsymbol{\alpha}_n) = (\lambda_1\boldsymbol{\alpha}_1, \lambda_2\boldsymbol{\alpha}_2, \cdots, \lambda_n\boldsymbol{\alpha}_n),$$ 于是 $\boldsymbol{A}\boldsymbol{\alpha}_i = \lambda_i\boldsymbol{\alpha}_i$, 这表明 $\boldsymbol{\alpha}_i$ 就是属于特征值 $\lambda_i$ 的特征向量. 因此 $\boldsymbol{P}$ 的 $n$ 个列向量就是 $\boldsymbol{A}$ 的 $n$ 个线性无关的特征向量. 注意: 因为特征向量不唯一, 所以过渡矩阵 $\boldsymbol{P}$ 也不唯一. 另外, $\boldsymbol{P}$ 的第 $i$ 个列向量对应于 $\boldsymbol{A}$ 的第 $i$ 个特征值.


> [!example] 例 6.50
> 设三阶矩阵 $\boldsymbol{A}$ 的特征值为 $1, 1, 4$, 对应的特征向量依次为 $$(2, 1, 0)',\quad (-1, 0, 1)',\quad (0, 1, 1)',$$ 试求矩阵 $\boldsymbol{A}$.

> [!solution]- 解
> 容易验证 $\boldsymbol{A}$ 的这 3 个特征向量线性无关, 故 $\boldsymbol{A}$ 必相似于对角矩阵, 即有 $$\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$ 根据上面的分析, 有 $$\boldsymbol{P} = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix},$$ 于是 $$\boldsymbol{A} = \begin{pmatrix} 1 & 0 & 0 \\ -3 & 7 & -3 \\ -3 & 6 & -2 \end{pmatrix}. \quad \square$$

### 4. 可对角化判定的计算

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

### 5. 可对角化矩阵的应用

> [!example] 例 6.53
> 设矩阵 $\boldsymbol{A} = \begin{pmatrix} 1 & -1 & 1 \\ 2 & 4 & -2 \\ -3 & -3 & 5 \end{pmatrix}$, 求 $\boldsymbol{A}^n$.

> [!solution]- 解
> 本题中的矩阵是一个可对角化矩阵, 因此可以使用下列方法: 先求出可逆矩阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \boldsymbol{B}$ 是对角矩阵. 因为对角矩阵的幂很容易求出, 故由 $\boldsymbol{A}^n = \boldsymbol{P}\boldsymbol{B}^n\boldsymbol{P}^{-1}$ 即可得到结果.

> 经计算可得 $|\lambda\boldsymbol{I}_3 - \boldsymbol{A}| = (\lambda - 2)^2(\lambda - 6)$, 因此 $\boldsymbol{A}$ 的特征值为 $2$ (2 重), $6$ (1 重). 通过计算可得: 特征值 $2$ 有两个线性无关的特征向量 $(-1, 1, 0)', (1, 0, 1)'$; 特征值 $6$ 的特征向量为 $(1, -1, 3)'$. 因此 $$\boldsymbol{P} = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 0 & -1 \\ 0 & 1 & 3 \end{pmatrix}, \quad \boldsymbol{B} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 6 \end{pmatrix}.$$ 再由 $\boldsymbol{A}^n = \boldsymbol{P}\boldsymbol{B}^n\boldsymbol{P}^{-1}$ 即可求出 $\boldsymbol{A}^n$. 请读者自行验证计算细节. $\square$


> [!example] 例 6.54
> 设 Fibonacci 数列 $\{a_n\}_{n=0}^{\infty}$ 满足: $a_0 = a_1 = 1$, 递推关系 $a_{n+1} = a_n + a_{n-1}\ (n \geq 1)$, 试求 $\{a_n\}$ 的通项公式.

> [!solution]- 解
> 首先将 Fibonacci 数列的递推关系写成矩阵形式: $$\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} a_n \\ a_{n-1} \end{pmatrix}.$$ 记 $\boldsymbol{A} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, 则 $\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = \boldsymbol{A}^n \begin{pmatrix} a_1 \\ a_0 \end{pmatrix} = \boldsymbol{A}^n \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. 下面利用矩阵可对角化来求 $\boldsymbol{A}^n$. 经计算可得 $\boldsymbol{A}$ 的特征多项式为 $\lambda^2 - \lambda - 1$, 特征值为 $\lambda_1 = \frac{1 + \sqrt{5}}{2}$, $\lambda_2 = \frac{1 - \sqrt{5}}{2}$. 对应的特征向量分别为 $(\lambda_1, 1)'$ 和 $(\lambda_2, 1)'$. 因此 $$\boldsymbol{A}^n = \boldsymbol{P} \begin{pmatrix} \lambda_1^n & 0 \\ 0 & \lambda_2^n \end{pmatrix} \boldsymbol{P}^{-1},$$ 其中 $\boldsymbol{P} = \begin{pmatrix} \lambda_1 & \lambda_2 \\ 1 & 1 \end{pmatrix}$. 经计算可得 Fibonacci 数列的通项公式: $$a_n = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} - \left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right]. \quad \square$$


## §6.5 可对角化的判定 (一)

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

## §6.6 极小多项式与 Cayley-Hamilton 定理

极小多项式是矩阵或线性变换的一个相似不变量, 它在相似标准型理论中起到了重要的作用. 例如, 极小多项式是矩阵或线性变换的不变因子组中最大的那个不变因子, 矩阵或线性变换可对角化当且仅当其极小多项式无重根. 类似于代数数的极小多项式 (例 5.18), 矩阵或线性变换的极小多项式也要整除其适合的任一多项式, 由这一基本性质容易证明极小多项式的存在唯一性. 由于两个非零矩阵相乘可能等于零矩阵, 因此矩阵或线性变换的极小多项式不一定是不可约多项式, 这一点和代数数的极小多项式有本质的区别.

Cayley-Hamilton 定理是高等代数课程中最重要的定理之一, 它告诉我们任一矩阵或线性变换必适合其特征多项式. 一方面, Cayley-Hamilton 定理在矩阵或线性变换理论以及多项式理论之间建立了紧密的联系, 使我们可以深入研究矩阵或线性变换的相似标准型理论. 另一方面, Cayley-Hamilton 定理也是一个强有力的工具, 它在很多问题的解答过程中起到了关键性的作用. 由极小多项式的基本性质和 Cayley-Hamilton 定理可知, 矩阵或线性变换的极小多项式必整除其特征多项式. 在本节中, 我们将从 5 个方面探讨极小多项式的性质以及 Cayley-Hamilton 定理的相关应用等.

### 1. 极小多项式的性质

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

## §6.7 矩阵的 Kronecker 积

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


# 第7章 相似标准型

## §7.1 基本概念

### 7.1.1 $\lambda$-矩阵及其法式

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

### 7.1.2 不变因子和有理标准型

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

### 7.1.3 初等因子和 Jordan 标准型

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


### 7.1.4 矩阵函数

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


## §7.2 矩阵相似的全系不变量

利用等价关系对矩阵进行分类, 这是一种常见的研究方法, 通常分为 3 个步骤. 首先, 引入矩阵之间的一种等价关系, 它将矩阵全体分成互不相交的等价类的并集. 其次, 找出矩阵在等价关系下的全系不变量, 即两个矩阵等价当且仅当它们的全系不变量相等. 最后, 在每一个等价类中, 找出一个相对简单的矩阵作为代表元, 称之为等价关系的标准型. 例如, 矩阵在相抵关系下的全系不变量就是矩阵的秩, $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 就是相抵标准型.

那么矩阵在相似关系下的全系不变量是什么？相似标准型具有怎样的形状呢？在教材 [1] 中, 我们利用 $\lambda$-矩阵这一代数方法, 给出了矩阵相似的 3 组全系不变量, 分别是行列式因子组、不变因子组和初等因子组; 给出了两类相似标准型, 分别是基于不变因子的有理标准型和复数域上基于初等因子的 Jordan 标准型. 本节我们将从 4 个方面阐述如何利用相似关系的全系不变量去处理矩阵的相似问题.

### 1. 矩阵相似的判定准则一：特征矩阵相抵

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

### 2. 矩阵相似的判定准则二：有相同的行列式因子组

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


### 3. 矩阵相似的判定准则三：有相同的不变因子组

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

### 4. 矩阵相似的判定准则四：有相同的初等因子组

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


## §7.3 有理标准型的几何与应用

有理标准型是利用不变因子组构造的相似标准型. 从因式分解的层面上看, 不变因子组并非是最简单的相似关系全系不变量, 从而有理标准型也并非是最简单的相似标准型, 比如 Frobenius 块有时比较大等. 然而有理标准型在任意的数域 $\mathbb{K}$ 上均存在, 因此具有广泛的用途. 本节将从有理标准型的几何意义以及有理标准型在矩阵理论中的应用这两个方面进行阐述.

### 1. 有理标准型的几何意义

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


### 2. 有理标准型在矩阵理论中的应用

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

## §7.4 乘法交换性诱导的多项式表示

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

## §7.5 可对角化的判定(二)

在 §6.6 中, 我们已经讨论了可对角化问题, 本节将利用矩阵相似全系不变量的理论, 继续研究可对角化问题.

### 1. 极小多项式无重根

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

### 2. 特征值的代数重数等于几何重数

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 的任一特征值在 $\mathbb{K}$ 上的代数重数等于几何重数.

### 3. 完全特征向量系

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 有 $n$ 个线性无关的特征向量, 即 $\boldsymbol{A}$ 有完全特征向量系.

### 4. 根子空间等于特征子空间

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是对 $\boldsymbol{A}$ 的任一特征值 $\lambda_0$, 其根子空间等于特征子空间.


### 5. 全体特征子空间的直和等于全空间

> [!theorem] **定理**
>
> 设 $\boldsymbol{A}$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵, 则 $\boldsymbol{A}$ 在 $\mathbb{K}$ 上可对角化的充要条件是 $\boldsymbol{A}$ 的全体特征子空间的直和等于全空间.

### 6. 初等因子都是一次多项式, 或 Jordan 块都是一阶矩阵

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

## §7.6 Jordan 标准型的求法

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

### § 7.7 过渡矩阵的求法

在 § 6.4 中, 我们介绍了对可对角化矩阵 $\boldsymbol{A}$, 如何求过渡矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 是对角矩阵. 现在我们要介绍对一般的矩阵 $\boldsymbol{A}$ (未必可对角化), 如何求过渡矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}$ 为 Jordan 标准型. 下面将介绍 3 种方法: 第一种方法是利用 $\lambda$–矩阵的初等变换, 通过计算特征矩阵之间的相抵变换来得到 $\boldsymbol{P}$; 第二种方法是求解线性方程组, 通过计算特征向量和广义特征向量来得到 $\boldsymbol{P}$; 第三种方法是利用 Jordan 标准型的几何意义, 通过计算循环子空间的循环向量来得到 $\boldsymbol{P}$. 当矩阵的阶数很大时, 这些方法都要涉及复杂的计算. 对于一般的阶数较低的数字矩阵, 我们通常使用第二种方法.

#### 方法 1: 计算特征矩阵之间的相抵变换

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

#### 方法 2: 计算特征向量和广义特征向量

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

#### 方法 3: 计算循环子空间的循环向量

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

### § 7.8 Jordan 标准型的应用

Jordan 标准型形式简单, 理论优美, 有着广泛的用途. 例如利用 Jordan 标准型可以计算矩阵的多项式和幂级数, 并给出矩阵函数的定义 (参考 § 7.9), 这在微分方程理论中有着众多的应用. 利用 Jordan 标准型还能证明许多重要的定理, 例如 Jordan-Chevalley 分解定理 (例 7.33), 它在李代数理论中发挥着重要的作用. 本节主要阐述 Jordan 标准型理论在处理矩阵问题方面的应用, 主要内容分成 4 个部分: 利用 Jordan 标准型研究矩阵的性质; 运用 Jordan 标准型进行相似问题的化简; 应用 Jordan 标准型的三段论法; 采用 Jordan 块作为测试矩阵. 如无特殊说明, 本节总在复数域 $\mathbb{C}$ 上考虑问题.

#### 1. 利用 Jordan 标准型研究矩阵的性质

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

#### 2. 运用 Jordan 标准型进行相似问题的化简

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

#### 3. 应用 Jordan 标准型的三段论法

利用 Jordan 标准型的三段论法来证明某些性质是一种强有力的方法. 三段论法的第一步是验证 Jordan 块满足该性质, 第二步是验证分块对角矩阵满足该性质, 第三步是验证相似矩阵有相同的性质, 由此可得任意复方阵都满足该性质.

> [!example] 例 7.71
> 设 $n$ 阶矩阵 $\boldsymbol{A}$ 的特征多项式为 $f(\lambda)$, 极小多项式为 $m(\lambda)$, 求证: $f(\lambda)\mid m(\lambda)^n$.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则只需对 Jordan 块证明即可. 设 $\boldsymbol{J}_r(\lambda_0)$ 是任一 Jordan 块, 则 $f(\lambda)=(\lambda-\lambda_0)^r$, $m(\lambda)=(\lambda-\lambda_0)^r$, 显然 $f(\lambda)\mid m(\lambda)^r\mid m(\lambda)^n$. $\square$


> [!example] 例 7.72
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, 求证: $\boldsymbol{A}^n$ 可表示为 $\boldsymbol{A}$ 的次数不超过 $n-1$ 的多项式.

**证明** 设 $\boldsymbol{J}$ 是 $\boldsymbol{A}$ 的 Jordan 标准型, 则 $\boldsymbol{A}^n$ 相似于 $\boldsymbol{J}^n$. 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda_0)$, 由 Cayley-Hamilton 定理可知 $\boldsymbol{J}_r(\lambda_0)^r$ 可表示为 $\boldsymbol{J}_r(\lambda_0)$ 的次数不超过 $r-1$ 的多项式, 从而 $\boldsymbol{J}_r(\lambda_0)^n$ 也可表示为 $\boldsymbol{J}_r(\lambda_0)$ 的次数不超过 $r-1\leq n-1$ 的多项式. 因此 $\boldsymbol{J}^n$ 可表示为 $\boldsymbol{J}$ 的次数不超过 $n-1$ 的多项式, 从而 $\boldsymbol{A}^n$ 可表示为 $\boldsymbol{A}$ 的次数不超过 $n-1$ 的多项式. $\square$

#### 4. 采用 Jordan 块作为测试矩阵

利用 Jordan 块作为测试矩阵, 可以构造反例或验证某些命题的正确性. 这是一种常用的技巧.

> [!example] 例 7.73
> 设 $\boldsymbol{A}$ 为 $n$ 阶复矩阵, 问: 对任意的正整数 $m$, $\boldsymbol{A}^m$ 的初等因子组是否由 $\boldsymbol{A}$ 的初等因子组完全确定?

**解** 是. 由例 7.54 和例 7.55 可知, 对每个 Jordan 块 $\boldsymbol{J}_r(\lambda_0)$, $\boldsymbol{J}_r(\lambda_0)^m$ 的初等因子组仅依赖于 $r,\lambda_0$ 和 $m$, 因此 $\boldsymbol{A}^m$ 的初等因子组由 $\boldsymbol{A}$ 的初等因子组完全确定. $\square$

> [!example] 例 7.74
> 设 $\boldsymbol{A}$ 为 $n$ 阶幂零矩阵, 且 $\mathrm{r}(\boldsymbol{A})=r$. 证明: $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)\geq n-r$, 并求等号成立的充要条件.

**证明** 设 $\boldsymbol{A}$ 的 Jordan 标准型为 $\boldsymbol{J}=\mathrm{diag}\{\boldsymbol{J}_{r_1}(0),\cdots,\boldsymbol{J}_{r_k}(0)\}$, 其中 $r_1+\cdots+r_k=n$, 且不妨设 $r_1\geq r_2\geq\cdots\geq r_k\geq 1$. 由 $\mathrm{r}(\boldsymbol{A})=r$ 可知 $\boldsymbol{A}$ 的秩等于 $n-k$, 即 $k=n-r$. 注意到每个 $\boldsymbol{J}_{r_i}(0)+\boldsymbol{I}_{r_i}$ 都是可逆矩阵, 故 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)=\mathrm{r}(\boldsymbol{J}+\boldsymbol{I}_n)=n$, 从而 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_n)\geq n-r$, 等号成立当且仅当 $r=0$, 即 $\boldsymbol{A}=\boldsymbol{O}$. $\square$

---

### § 7.9 矩阵函数

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

### § 7.10 Jordan 标准型的几何

Jordan 标准型不仅可以从代数的角度来理解, 还可以从几何的角度来理解. 本节将从线性变换的角度, 利用根子空间分解和循环子空间分解来揭示 Jordan 标准型的几何意义.

#### 1. 根子空间分解

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

#### 2. 循环子空间分解

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

#### 3. 循环轨道的应用

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

#### 2. Jordan 标准型的几何意义

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

### § 7.11 一般数域上的相似标准型

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

### § 7.12 基础训练

#### 训练题

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


#### 训练题答案

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


## 第8章 二次型

### §8.1 基本概念

#### 1. 二次型的定义

> [!definition]
> 设 $f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j$, 其中 $a_{ij}=a_{ji}$, 则称 $f$ 为 $n$ 元二次型.

由定义可知, 二次型 $f$ 可以写成矩阵形式:

$$f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x},$$

其中 $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)'$, $\boldsymbol{A}=(a_{ij})_{n\times n}$ 为实对称矩阵, 称为二次型 $f$ 的**相伴矩阵** (或系数矩阵). 二次型与实对称矩阵之间一一对应.

#### 2. 二次型的标准型与规范标准型

> [!definition]
> 只含平方项的二次型称为**标准型**; 系数只取 $1,-1,0$ 的标准型称为**规范标准型**.

#### 3. 二次型的正惯性指数与负惯性指数

> [!definition]
> 设 $f$ 是实二次型, 其规范标准型中正平方项的个数 $p$ 称为 $f$ 的**正惯性指数**, 负平方项的个数 $q$ 称为 $f$ 的**负惯性指数**, $p-q$ 称为**符号差**.

#### 4. 二次型的可逆线性变换

> [!definition]
> 设 $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)'$, $\boldsymbol{y}=(y_1,y_2,\cdots,y_n)'$, $\boldsymbol{C}$ 为 $n$ 阶非异实矩阵, 则称 $\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}$ 为 $\boldsymbol{x}$ 到 $\boldsymbol{y}$ 的**可逆线性变换**.

> [!definition]
> 若二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 经过可逆线性变换 $\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}$ 化为 $g=\boldsymbol{y}'\boldsymbol{B}\boldsymbol{y}$, 则称 $f$ 与 $g$ **等价** (或**合同**), 记为 $f\cong g$.

> [!theorem]
> 二次型 $f$ 与 $g$ 等价当且仅当它们的相伴矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, 即存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{B}=\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$.

#### 5. 矩阵的合同关系

> [!definition]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 若存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{B}=\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$, 则称 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ **合同**.

矩阵的合同关系是等价关系, 满足:

(1) 反身性: $\boldsymbol{A}$ 与 $\boldsymbol{A}$ 合同;

(2) 对称性: 若 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, 则 $\boldsymbol{B}$ 与 $\boldsymbol{A}$ 合同;

(3) 传递性: 若 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, $\boldsymbol{B}$ 与 $\boldsymbol{C}$ 合同, 则 $\boldsymbol{A}$ 与 $\boldsymbol{C}$ 合同.


#### 6. 实对称矩阵的基本定理

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\},$$
> 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的全部特征值.

> [!corollary]
> 实对称矩阵 $\boldsymbol{A}$ 正定 (半正定) 当且仅当 $\boldsymbol{A}$ 的所有特征值全大于零 (大于等于零).

> [!theorem] (惯性定理)
> 任意一个实二次型都可以经过可逆线性变换化为规范标准型, 且规范标准型唯一. 等价地, 任意一个 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 都合同于对角矩阵 $\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q,\boldsymbol{O}\}$, 其中 $p,q$ 由 $\boldsymbol{A}$ 唯一确定.

#### 7. 二次型的正定性

> [!definition]
> 设 $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 是 $n$ 元实二次型, $\boldsymbol{A}$ 是相伴实对称矩阵.
> (1) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$, 则称 $f$ 为**正定二次型** (简称**正定型**), $\boldsymbol{A}$ 称为**正定矩阵** (简称**正定阵**);
> (2) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\geq 0$, 则称 $f$ 为**半正定二次型** (简称**半正定型**), $\boldsymbol{A}$ 称为**半正定矩阵** (简称**半正定阵**);
> (3) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}<0$, 则称 $f$ 为**负定二次型** (简称**负定型**), $\boldsymbol{A}$ 称为**负定矩阵** (简称**负定阵**);
> (4) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\leq 0$, 则称 $f$ 为**半负定二次型** (简称**半负定型**), $\boldsymbol{A}$ 称为**半负定矩阵** (简称**半负定阵**);
> (5) 若存在 $\boldsymbol{\alpha}$, 使得 $f(\boldsymbol{\alpha})>0$, 又存在 $\boldsymbol{\beta}$, 使得 $f(\boldsymbol{\beta})<0$, 则称 $f$ 为**不定型**.


### §8.2 对称初等变换与矩阵合同

本节介绍将对称矩阵化为对角矩阵的对称初等变换方法, 这是求二次型标准型的一种有效方法.

#### 1. 对称初等变换

> [!definition]
> 下列三种变换称为**对称初等变换**:
> (1) 对调 $\boldsymbol{A}$ 的第 $i$ 行与第 $j$ 行, 再对调第 $i$ 列与第 $j$ 列;
> (2) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以非零常数 $c$, 再将第 $i$ 列乘以 $c$;
> (3) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以常数 $k$ 加到第 $j$ 行上, 再将第 $i$ 列乘以 $k$ 加到第 $j$ 列上.

> [!theorem]
> 对称初等变换保持矩阵的合同关系. 即若 $\boldsymbol{A}$ 经过一次对称初等变换变为 $\boldsymbol{B}$, 则 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同.

> [!theorem]
> 任意 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 都可以经过有限次对称初等变换化为对角矩阵.

> [!proof]-
> 对矩阵的阶数 $n$ 进行归纳. 当 $n=1$ 时结论显然成立. 假设对 $n-1$ 阶实对称矩阵结论成立, 下面证明对 $n$ 阶实对称矩阵 $\boldsymbol{A}=(a_{ij})$ 结论也成立.
>
> 若 $\boldsymbol{A}=\boldsymbol{O}$, 结论显然成立. 若 $\boldsymbol{A}\neq\boldsymbol{O}$, 分两种情况讨论:
>
> (1) 若 $\boldsymbol{A}$ 的主对角元不全为零, 设 $a_{ii}\neq 0$, 则将 $\boldsymbol{A}$ 的第 $i$ 行乘以 $-a_{ij}/a_{ii}$ 加到第 $j$ 行上, 再将第 $i$ 列乘以 $-a_{ij}/a_{ii}$ 加到第 $j$ 列上 $(j\neq i)$, 这样可将 $\boldsymbol{A}$ 的第 $i$ 行和第 $i$ 列除 $a_{ii}$ 外的元素都化为零. 然后将第 $1$ 行与第 $i$ 行对调, 第 $1$ 列与第 $i$ 列对调, 得到合同矩阵
> $$\begin{pmatrix} a_{ii} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{A}_{n-1} \end{pmatrix},$$
> 其中 $\boldsymbol{A}_{n-1}$ 是 $n-1$ 阶实对称矩阵. 由归纳假设, $\boldsymbol{A}_{n-1}$ 可经对称初等变换化为对角矩阵, 从而 $\boldsymbol{A}$ 也可经对称初等变换化为对角矩阵.
>
> (2) 若 $\boldsymbol{A}$ 的主对角元全为零, 则由于 $\boldsymbol{A}\neq\boldsymbol{O}$, 必存在 $a_{ij}\neq 0$ $(i\neq j)$. 将 $\boldsymbol{A}$ 的第 $j$ 行加到第 $i$ 行上, 再将第 $j$ 列加到第 $i$ 列上, 则新矩阵的第 $(i,i)$ 元素为 $2a_{ij}\neq 0$, 化为情况 (1). $\square$


#### 2. 求二次型标准型的具体方法

设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 要求可逆矩阵 $\boldsymbol{C}$ 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 为对角矩阵. 可以采用** paired elementary transformations** (成对初等变换法):

构造分块矩阵 $\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{I}_n \end{pmatrix}$, 对 $\boldsymbol{A}$ 进行对称初等变换, 同时对 $\boldsymbol{I}_n$ 只进行相应的行变换 (不进行列变换). 当 $\boldsymbol{A}$ 化为对角矩阵时, $\boldsymbol{I}_n$ 就变为所求的可逆矩阵 $\boldsymbol{C}$.

> [!example]
> 将二次型 $f(x_1,x_2,x_3)=2x_1^2+3x_2^2+4x_3^2+4x_1x_2+4x_1x_3+6x_2x_3$ 化为标准型.

> [!solution]-
> $f$ 的相伴矩阵为 $\boldsymbol{A}=\begin{pmatrix} 2 & 2 & 2 \\ 2 & 3 & 3 \\ 2 & 3 & 4 \end{pmatrix}$. 对 $\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{I}_3 \end{pmatrix}$ 进行对称初等变换:
> $$\begin{pmatrix} 2 & 2 & 2 \\ 2 & 3 & 3 \\ 2 & 3 & 4 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{\substack{R_2-R_1,R_3-R_1}} \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 2 \\ 1 & -1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{\substack{C_2-C_1,C_3-C_1}} \cdots$$
> 最终可得标准型. $\square$


### §8.3 归纳法的应用

归纳法是处理二次型与矩阵问题的重要方法之一. 下面通过几个典型例题来说明归纳法的应用.

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: 存在正实数 $c$, 使得对任意 $n$ 维实列向量 $\boldsymbol{x}$, 都有 $|\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}|\leq c\boldsymbol{x}'\boldsymbol{x}$.

> [!proof]-
> 设 $\boldsymbol{A}=(a_{ij})$, 则 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j$. 由 Cauchy-Schwarz 不等式,
> $$|\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}|\leq \sum_{i=1}^{n}\sum_{j=1}^{n}|a_{ij}||x_i||x_j|\leq \max_{i,j}|a_{ij}|\cdot\left(\sum_{i=1}^{n}|x_i|\right)^2.$$
> 设 $c_1=\max_{i,j}|a_{ij}|$, 则 $\left(\sum_{i=1}^{n}|x_i|\right)^2\leq n\sum_{i=1}^{n}x_i^2=n\boldsymbol{x}'\boldsymbol{x}$. 取 $c=nc_1$, 即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: $\boldsymbol{A}^{-1}$ 也是正定阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 所以存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{A}^{-1}=(\boldsymbol{C}'\boldsymbol{C})^{-1}=\boldsymbol{C}^{-1}(\boldsymbol{C}')^{-1}=\boldsymbol{C}^{-1}(\boldsymbol{C}^{-1})'$, 故 $\boldsymbol{A}^{-1}$ 也是正定阵. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 的所有顺序主子式都大于零, 证明: $\boldsymbol{A}$ 是正定阵.

> [!proof]-
> 对阶数 $n$ 用归纳法. 当 $n=1$ 时结论显然成立. 假设对 $n-1$ 阶实对称矩阵结论成立. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix}$, 其中 $\boldsymbol{A}_{n-1}$ 是 $\boldsymbol{A}$ 的 $n-1$ 阶顺序主子阵. 由假设, $\boldsymbol{A}_{n-1}$ 正定. 对 $\boldsymbol{A}$ 进行对称分块初等变换:
> $$\begin{pmatrix} \boldsymbol{I}_{n-1} & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1} & 1 \end{pmatrix} \begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix} \begin{pmatrix} \boldsymbol{I}_{n-1} & -\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha} \\ \boldsymbol{O} & 1 \end{pmatrix}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{O} \\ \boldsymbol{O} & a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha} \end{pmatrix}.$$
> 两边取行列式得 $|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})$. 因为 $|\boldsymbol{A}|>0$, $|\boldsymbol{A}_{n-1}|>0$, 所以 $a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}>0$. 又 $\boldsymbol{A}_{n-1}$ 正定, 故上式右端正定, 从而 $\boldsymbol{A}$ 正定. $\square$


### §8.4 合同标准型的应用

合同标准型是处理二次型与矩阵问题的重要工具. 本节通过一些典型例题, 展示合同标准型在二次型理论中的应用.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $r(\boldsymbol{A})=r$, 则 $\boldsymbol{A}$ 合同于对角矩阵 $\mathrm{diag}\{a_1,a_2,\cdots,a_r,0,\cdots,0\}$, 其中 $a_1,a_2,\cdots,a_r$ 均不为零.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $p(\boldsymbol{A})$, $q(\boldsymbol{A})$ 分别表示 $\boldsymbol{A}$ 的正、负惯性指数, 则
> $$p(\boldsymbol{A})+q(\boldsymbol{A})=r(\boldsymbol{A}).$$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: 存在 $n$ 阶正定阵 $\boldsymbol{B}$ 和 $n$ 阶半正定阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{B}-\boldsymbol{C}$, 且 $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{O}$.

> [!proof]-
> 因为 $\boldsymbol{A}$ 是实对称矩阵, 所以存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}\boldsymbol{P}.$$
> 令 $\mu_i=\max\{\lambda_i,0\}$, $\nu_i=\max\{-\lambda_i,0\}$, 则 $\lambda_i=\mu_i-\nu_i$, $\mu_i\nu_i=0$. 设
> $$\boldsymbol{B}=\boldsymbol{P}'\mathrm{diag}\{\mu_1,\mu_2,\cdots,\mu_n\}\boldsymbol{P},\quad \boldsymbol{C}=\boldsymbol{P}'\mathrm{diag}\{\nu_1,\nu_2,\cdots,\nu_n\}\boldsymbol{P}.$$
> 则 $\boldsymbol{B}$ 半正定, $\boldsymbol{C}$ 半正定, $\boldsymbol{A}=\boldsymbol{B}-\boldsymbol{C}$, 且 $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{O}$. 若 $\boldsymbol{A}$ 正定, 则 $\lambda_i>0$ 对所有 $i$ 成立, 此时 $\nu_i=0$, 故 $\boldsymbol{C}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 所以存在非异实矩阵 $\boldsymbol{C}_1$, 使得 $\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1=\boldsymbol{I}_n$. 又 $\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1$ 仍是实对称矩阵, 故存在正交矩阵 $\boldsymbol{C}_2$, 使得 $\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1)\boldsymbol{C}_2$ 为对角矩阵. 令 $\boldsymbol{C}=\boldsymbol{C}_1\boldsymbol{C}_2$, 则 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1)\boldsymbol{C}_2=\boldsymbol{C}_2'\boldsymbol{C}_2=\boldsymbol{I}_n$, 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵. $\square$

> [!remark]
> 上例的结论称为**同时合同对角化**, 是处理两个矩阵同时合同问题的有力工具.


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 证明: $\boldsymbol{A}+\boldsymbol{B}$ 也是正定阵.

> [!proof]-
> 对任意非零实列向量 $\boldsymbol{x}$, 由于 $\boldsymbol{A}$, $\boldsymbol{B}$ 都正定, 有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$, $\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}>0$, 因此 $\boldsymbol{x}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}>0$, 故 $\boldsymbol{A}+\boldsymbol{B}$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶半正定阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$, 且等号成立当且仅当 $\boldsymbol{B}=\boldsymbol{O}$.

> [!proof]-
> 由例 8.8 可知, 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\geq 0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=|\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C}|=|\boldsymbol{I}_n+\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}|=\prod_{i=1}^{n}(1+\lambda_i)\geq 1=|\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}|=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 因此 $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$. 等号成立当且仅当 $\lambda_1=\lambda_2=\cdots=\lambda_n=0$, 即 $\boldsymbol{B}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 且 $\boldsymbol{A}-\boldsymbol{B}$ 正定, 证明: $\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1}$ 也是正定阵.

> [!proof]-
> 由 $\boldsymbol{A}-\boldsymbol{B}$ 正定可知 $\boldsymbol{A}=\boldsymbol{B}+(\boldsymbol{A}-\boldsymbol{B})$ 是两个正定阵之和, 故 $\boldsymbol{A}$ 正定. 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i>0$. 由 $\boldsymbol{C}'(\boldsymbol{A}-\boldsymbol{B})\boldsymbol{C}=\mathrm{diag}\{1-\lambda_1,\cdots,1-\lambda_n\}$ 正定, 知 $1-\lambda_i>0$, 即 $0<\lambda_i<1$. 于是
> $$\boldsymbol{C}^{-1}(\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1})(\boldsymbol{C}')^{-1}=(\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})^{-1}-(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C})^{-1}=\mathrm{diag}\{\lambda_1^{-1}-1,\cdots,\lambda_n^{-1}-1\}.$$
> 由 $0<\lambda_i<1$ 知 $\lambda_i^{-1}>1$, 故 $\lambda_i^{-1}-1>0$, 因此 $\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1}$ 正定. $\square$


### §8.5 多变元二次型的计算

本节讨论多变元二次型的计算方法, 包括配方法和正交变换法.

> [!example]
> 用配方法将二次型 $f(x_1,x_2,x_3)=x_1^2+2x_2^2+5x_3^2+2x_1x_2+2x_1x_3+6x_2x_3$ 化为标准型, 并求所用的可逆线性变换.

> [!solution]-
> 先对 $x_1$ 配方:
> $$\begin{aligned} f &= x_1^2+2x_1(x_2+x_3)+2x_2^2+5x_3^2+6x_2x_3 \\
> &= [x_1+(x_2+x_3)]^2-(x_2+x_3)^2+2x_2^2+5x_3^2+6x_2x_3 \\
> &= (x_1+x_2+x_3)^2+x_2^2+4x_3^2+4x_2x_3. \end{aligned}$$
> 再对 $x_2$ 配方:
> $$f = (x_1+x_2+x_3)^2+(x_2+2x_3)^2.$$
> 令
> $$\begin{cases} y_1=x_1+x_2+x_3, \\ y_2=x_2+2x_3, \\ y_3=x_3, \end{cases}$$
> 则 $f=y_1^2+y_2^2$. 所用可逆线性变换为
> $$\begin{cases} x_1=y_1-y_2+y_3, \\ x_2=y_2-2y_3, \\ x_3=y_3. \end{cases}$$
> $\square$

> [!remark]
> 配方法的关键是: 若二次型含有某个变量的平方项, 则先将所有含该变量的项配成完全平方, 然后对剩余变量重复此过程.


> [!example]
> 用配方法将二次型 $f(x_1,x_2,x_3)=2x_1x_2+2x_1x_3-6x_2x_3$ 化为标准型.

> [!solution]-
> 由于 $f$ 不含平方项, 但 $x_1x_2$ 项系数不为零, 故作可逆线性变换
> $$\begin{cases} x_1=y_1+y_2, \\ x_2=y_1-y_2, \\ x_3=y_3. \end{cases}$$
> 代入得 $f=2(y_1+y_2)(y_1-y_2)+2(y_1+y_2)y_3-6(y_1-y_2)y_3=2y_1^2-2y_2^2-4y_1y_3+8y_2y_3$.
> 再配方:
> $$\begin{aligned} f &= 2(y_1^2-2y_1y_3)-2y_2^2+8y_2y_3 \\
> &= 2(y_1-y_3)^2-2y_3^2-2y_2^2+8y_2y_3 \\
> &= 2(y_1-y_3)^2-2(y_2^2-4y_2y_3)-2y_3^2 \\
> &= 2(y_1-y_3)^2-2(y_2-2y_3)^2+6y_3^2. \end{aligned}$$
> 令 $z_1=y_1-y_3$, $z_2=y_2-2y_3$, $z_3=y_3$, 则 $f=2z_1^2-2z_2^2+6z_3^2$. $\square$


> [!remark]
> 对于不含平方项的二次型, 先作辅助变换产生平方项, 然后再配方. 常用的辅助变换有
> $$\begin{cases} x_i=y_i+y_j, \\ x_j=y_i-y_j, \\ x_k=y_k \ (k\neq i,j) \end{cases}$$
> 这样可产生 $2y_i^2-2y_j^2$ 项.

#### 正交变换法

> [!theorem]
> 对任意 $n$ 元实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$, 存在正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ ($\boldsymbol{P}$ 为正交矩阵), 使得
> $$f=\lambda_1y_1^2+\lambda_2y_2^2+\cdots+\lambda_ny_n^2,$$
> 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的全部特征值.

正交变换法的步骤:
1. 写出二次型的相伴矩阵 $\boldsymbol{A}$;
2. 求 $\boldsymbol{A}$ 的所有特征值 $\lambda_1,\lambda_2,\cdots,\lambda_n$;
3. 对每个特征值求出相应的特征向量, 并用 Schmidt 正交化方法将重特征值的特征向量正交化、单位化;
4. 将所有单位正交特征向量作为列向量构成正交矩阵 $\boldsymbol{P}$, 则正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将二次型化为标准型.


> [!example]
> 用正交变换法将二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+4x_1x_2+4x_1x_3+4x_2x_3$ 化为标准型.

> [!solution]-
> $f$ 的相伴矩阵为 $\boldsymbol{A}=\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 2 & 2 & 1 \end{pmatrix}$.
>
> 特征多项式 $|\lambda\boldsymbol{I}-\boldsymbol{A}|=\begin{vmatrix} \lambda-1 & -2 & -2 \\ -2 & \lambda-1 & -2 \\ -2 & -2 & \lambda-1 \end{vmatrix}=(\lambda+1)^2(\lambda-5)$,
>
> 特征值为 $\lambda_1=\lambda_2=-1$, $\lambda_3=5$.
>
> 对 $\lambda=-1$, 解 $(-\boldsymbol{I}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}$, 得基础解系 $\boldsymbol{\alpha}_1=(-1,1,0)'$, $\boldsymbol{\alpha}_2=(-1,0,1)'$. 正交化:
> $$\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1=(-1,1,0)',\quad \boldsymbol{\beta}_2=\boldsymbol{\alpha}_2-\frac{\boldsymbol{\alpha}_2'\boldsymbol{\beta}_1}{\boldsymbol{\beta}_1'\boldsymbol{\beta}_1}\boldsymbol{\beta}_1=\left(-\frac{1}{2},-\frac{1}{2},1\right)'.$$
> 单位化得 $\boldsymbol{\eta}_1=\frac{1}{\sqrt{2}}(-1,1,0)'$, $\boldsymbol{\eta}_2=\frac{1}{\sqrt{6}}(-1,-1,2)'$.
>
> 对 $\lambda=5$, 解 $(5\boldsymbol{I}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}$, 得 $\boldsymbol{\alpha}_3=(1,1,1)'$, 单位化得 $\boldsymbol{\eta}_3=\frac{1}{\sqrt{3}}(1,1,1)'$.
>
> 令 $\boldsymbol{P}=(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\boldsymbol{\eta}_3)$, 则正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将 $f$ 化为 $-y_1^2-y_2^2+5y_3^2$. $\square$


> [!example]
> 设 $f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2-2x_1x_2+6x_1x_3-6x_2x_3$ 的秩为 2.
> (1) 求常数 $c$;
> (2) 用正交变换化 $f$ 为标准型.

> [!solution]-
> (1) $f$ 的相伴矩阵 $\boldsymbol{A}=\begin{pmatrix} 5 & -1 & 3 \\ -1 & 5 & -3 \\ 3 & -3 & c \end{pmatrix}$. 由 $r(\boldsymbol{A})=2$, 知 $|\boldsymbol{A}|=0$. 计算得 $|\boldsymbol{A}|=24c-72$, 故 $c=3$.
>
> (2) 特征多项式 $|\lambda\boldsymbol{I}-\boldsymbol{A}|=\lambda(\lambda-4)(\lambda-9)$, 特征值为 $0,4,9$. 求出对应的单位正交特征向量, 可得正交矩阵 $\boldsymbol{P}$, 正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将 $f$ 化为 $4y_2^2+9y_3^2$. $\square$


### §8.6 矩阵与二次型

本节从矩阵的角度研究二次型, 探讨二次型与矩阵之间的深层联系.

> [!theorem]
> 实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 正定 (半正定) 当且仅当 $\boldsymbol{A}$ 的所有顺序主子式都大于零 (大于等于零).

> [!proof]-
> (必要性) 设 $f$ 正定, 对任意 $k$, 令 $\boldsymbol{x}=(x_1,\cdots,x_k,0,\cdots,0)'$, 则
> $$f_k(x_1,\cdots,x_k)=f(x_1,\cdots,x_k,0,\cdots,0)=\sum_{i=1}^{k}\sum_{j=1}^{k}a_{ij}x_ix_j$$
> 是 $k$ 元正定二次型, 其相伴矩阵恰好是 $\boldsymbol{A}$ 的 $k$ 阶顺序主子阵 $\boldsymbol{A}_k$, 故 $|\boldsymbol{A}_k|>0$.
>
> (充分性) 对阶数 $n$ 用归纳法. $n=1$ 时显然. 假设对 $n-1$ 成立. 设 $\boldsymbol{A}_{n-1}$ 是 $\boldsymbol{A}$ 的 $n-1$ 阶顺序主子阵, 由归纳假设 $\boldsymbol{A}_{n-1}$ 正定. 对 $\boldsymbol{A}$ 进行对称分块初等变换, 可得合同矩阵 $\mathrm{diag}\{\boldsymbol{A}_{n-1},a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}\}$. 由 $|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})>0$ 及 $|\boldsymbol{A}_{n-1}|>0$, 知 $a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}>0$, 故 $\boldsymbol{A}$ 正定. $\square$

> [!remark]
> 对半正定阵, 顺序主子式非负是必要条件但不是充分条件. 反例: $\boldsymbol{A}=\mathrm{diag}\{1,0,-1\}$ 的顺序主子式都非负, 但 $\boldsymbol{A}$ 不是半正定阵.


> [!theorem]
> 实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 负定当且仅当 $\boldsymbol{A}$ 的所有奇数阶顺序主子式都小于零, 偶数阶顺序主子式都大于零.

> [!proof]-
> $f$ 负定当且仅当 $-f=\boldsymbol{x}'(-\boldsymbol{A})\boldsymbol{x}$ 正定, 即 $-\boldsymbol{A}$ 的所有顺序主子式大于零. 这等价于 $\boldsymbol{A}$ 的奇数阶顺序主子式小于零, 偶数阶顺序主子式大于零. $\square$

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 半正定;
> (2) 对任意正实数 $t$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定;
> (3) $\boldsymbol{A}$ 的所有主子式都大于等于零;
> (4) $\boldsymbol{A}$ 的所有特征值都大于等于零.

> [!proof]-
> (1)$\Rightarrow$(2): 对任意非零 $\boldsymbol{x}$, $\boldsymbol{x}'(t\boldsymbol{I}_n+\boldsymbol{A})\boldsymbol{x}=t\boldsymbol{x}'\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq t\boldsymbol{x}'\boldsymbol{x}>0$.
>
> (2)$\Rightarrow$(3): 设 $\boldsymbol{A}_k$ 是 $\boldsymbol{A}$ 的任一 $k$ 阶主子阵, 则对充分大的 $t$, $t\boldsymbol{I}_k+\boldsymbol{A}_k$ 的所有顺序主子式 (作为 $t$ 的多项式) 在 $t>0$ 时为正, 故 $t\boldsymbol{I}_k+\boldsymbol{A}_k$ 正定, 从而 $|-t\boldsymbol{I}_k+\boldsymbol{A}_k|=(-1)^k|t\boldsymbol{I}_k-\boldsymbol{A}_k|$. 由 $t\boldsymbol{I}_k-\boldsymbol{A}_k$ 在 $t$ 充分大时正定, 知 $\boldsymbol{A}_k$ 的所有特征值 $\leq t$, 令 $t\to 0^+$, 即得 $\boldsymbol{A}_k$ 的所有特征值 $\geq 0$, 故 $|\boldsymbol{A}_k|\geq 0$.
>
> (3)$\Rightarrow$(4): 由特征值是特征多项式的根, 而特征多项式的系数可用主子式表示.
>
> (4)$\Rightarrow$(1): 设 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\cdots,\lambda_n\geq 0$, 则存在正交阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}\boldsymbol{P}$, 由此易证 $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶半正定阵, 证明: 若 $\boldsymbol{A}$ 正定, 则 $|$\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$; 若 $\boldsymbol{A}$ 半正定, 则 $|$\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|$.

> [!proof]-
> 当 $\boldsymbol{A}$ 正定时, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$ 半正定, 即 $\lambda_i\geq 0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=\prod_{i=1}^n(1+\lambda_i)\geq 1=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 当 $\boldsymbol{A}$ 半正定时, 由极限性质, 对 $t>0$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定, 故
> $$|(t\boldsymbol{I}_n+\boldsymbol{A})+\boldsymbol{B}|\geq|t\boldsymbol{I}_n+\boldsymbol{A}|+|\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|.$$
> 令 $t\to 0^+$, 得 $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: $\boldsymbol{A}$ 半正定当且仅当存在实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$.

> [!proof]-
> ($\Rightarrow$) 设 $\boldsymbol{A}$ 半正定, 秩为 $r$, 则存在非异实矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{a_1,\cdots,a_r,0,\cdots,0\}$ 且 $a_i>0$. 令 $\boldsymbol{D}=\mathrm{diag}\{\sqrt{a_1},\cdots,\sqrt{a_r},0,\cdots,0\}$, 则 $\boldsymbol{A}=(\boldsymbol{P}')^{-1}\boldsymbol{D}^2\boldsymbol{P}^{-1}=(\boldsymbol{D}\boldsymbol{P}^{-1})'(\boldsymbol{D}\boldsymbol{P}^{-1})$. 取 $\boldsymbol{C}=\boldsymbol{D}\boldsymbol{P}^{-1}$ 即可.
>
> ($\Leftarrow$) 设 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$, 则对任意 $\boldsymbol{x}$, $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=(\boldsymbol{C}\boldsymbol{x})'(\boldsymbol{C}\boldsymbol{x})=||\boldsymbol{C}\boldsymbol{x}||^2\geq 0$, 故 $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定实对称矩阵, $\boldsymbol{S}$ 是 $n$ 阶实反对称矩阵, 证明: $|\boldsymbol{A}+\boldsymbol{S}|\geq|\boldsymbol{A}|$.

> [!proof]-
> 先证 $\boldsymbol{A}$ 正定时结论成立. 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}$ 仍反对称. 反对称矩阵的特征值为零或纯虚数成对出现, 设其特征值为 $\pm ib_1,\cdots,\pm ib_k,0,\cdots,0$, 则
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{S}|=|\boldsymbol{I}_n+\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}|=\prod_{j=1}^k(1+b_j^2)\geq 1=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 当 $\boldsymbol{A}$ 半正定时, 对 $t>0$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定, 故 $|(t\boldsymbol{I}_n+\boldsymbol{A})+\boldsymbol{S}|\geq|t\boldsymbol{I}_n+\boldsymbol{A}|$. 令 $t\to 0^+$, 即得结论. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 存在非异实矩阵 $\boldsymbol{C}$ 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}_1$ 使得 $\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1=\boldsymbol{I}_n$. $\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1$ 为实对称矩阵, 故存在正交矩阵 $\boldsymbol{C}_2$ 使得 $\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1)\boldsymbol{C}_2$ 为对角矩阵. 令 $\boldsymbol{C}=\boldsymbol{C}_1\boldsymbol{C}_2$, 则 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵. $\square$

> [!theorem] (Hadamard 不等式)
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶半正定实对称矩阵, 则 $|\boldsymbol{A}|\leq a_{11}a_{22}\cdots a_{nn}$.

> [!proof]-
> 对 $n$ 用归纳法. $n=1$ 时显然. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix}$, 其中 $\boldsymbol{A}_{n-1}$ 半正定. 若 $|\boldsymbol{A}|=0$, 结论成立. 若 $|\boldsymbol{A}|>0$, 则 $\boldsymbol{A}$ 正定, $\boldsymbol{A}_{n-1}$ 也正定. 由对称分块初等变换,
> $$|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})\leq|\boldsymbol{A}_{n-1}|a_{nn}\leq a_{11}\cdots a_{nn}.$$
> $\square$


> [!corollary]
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶实矩阵, 则 $|\boldsymbol{A}|^2\leq\prod_{j=1}^n\sum_{i=1}^n a_{ij}^2$.

> [!proof]-
> $\boldsymbol{A}'\boldsymbol{A}$ 半正定, 其对角元为 $\sum_{i=1}^n a_{ij}^2$. 由 Hadamard 不等式, $|\boldsymbol{A}'\boldsymbol{A}|\leq\prod_{j=1}^n\sum_{i=1}^n a_{ij}^2$. 又 $|\boldsymbol{A}'\boldsymbol{A}|=|\boldsymbol{A}|^2$, 即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶正定阵, 且 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}$ 正定, 证明: $\boldsymbol{A}$ 正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的任一特征值, $\boldsymbol{\alpha}$ 是相应的特征向量, 则 $\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$. 由 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}$ 正定,
> $$\boldsymbol{\alpha}'(\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A})\boldsymbol{\alpha}=2\lambda\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0.$$
> 又 $\boldsymbol{B}$ 正定, $\boldsymbol{\alpha}\neq\boldsymbol{0}$, 故 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$, 从而 $\lambda>0$, $\boldsymbol{A}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}'=\boldsymbol{B}\boldsymbol{A}$, 证明: $\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A}$ 正定当且仅当 $\boldsymbol{B}$ 的所有特征值的实部都大于零.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$. 令 $\boldsymbol{D}=\boldsymbol{C}^{-1}\boldsymbol{B}\boldsymbol{C}$, 条件变为 $\boldsymbol{D}'=\boldsymbol{D}$, 即 $\boldsymbol{D}$ 对称. 又 $\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A}$ 正定等价于 $\boldsymbol{C}'(\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A})\boldsymbol{C}=\boldsymbol{D}'+\boldsymbol{D}=2\boldsymbol{D}$ 正定, 即 $\boldsymbol{D}$ 正定, 其特征值全为正. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{B})=r$. 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定, 且 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r$.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$, 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. 又 $\boldsymbol{A}$ 正定, 故 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})=r$. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|>0$.

> [!proof]-
> 对任意非零 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$ (因为 $\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}=0$). 故 $\boldsymbol{A}+\boldsymbol{B}$ 正定, $|\boldsymbol{A}+\boldsymbol{B}|>0$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: 对任意正整数 $k$, $\boldsymbol{A}^k$ 也是正定阵.

> [!proof]-
> 设 $\lambda_1,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的特征值, 则 $\lambda_i>0$, $\boldsymbol{A}^k$ 的特征值为 $\lambda_1^k,\cdots,\lambda_n^k>0$, 故 $\boldsymbol{A}^k$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^3-3\boldsymbol{A}^2+5\boldsymbol{A}-3\boldsymbol{I}_n=\boldsymbol{O}$, 证明: $\boldsymbol{A}$ 正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, 则 $\lambda^3-3\lambda^2+5\lambda-3=0$, 即 $(\lambda-1)(\lambda^2-2\lambda+3)=0$. 解得 $\lambda=1$ 或 $\lambda=1\pm\sqrt{2}i$. 因 $\boldsymbol{A}$ 实对称, 特征值均为实数, 故 $\lambda=1>0$, $\boldsymbol{A}$ 正定. $\square$


### §8.7 正定型与正定阵

本节系统地讨论正定二次型与正定矩阵的判定准则及其应用.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 正定 (即 $\boldsymbol{A}$ 的正惯性指数 $p=n$);
> (2) $\boldsymbol{A}$ 合同于单位矩阵 $\boldsymbol{I}_n$;
> (3) 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$;
> (4) $\boldsymbol{A}$ 的所有顺序主子式都大于零;
> (5) $\boldsymbol{A}$ 的所有主子式都大于零;
> (6) $\boldsymbol{A}$ 的所有特征值都大于零;
> (7) 对任意 $n$ 阶半正定阵 $\boldsymbol{B}$, $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$.

> [!proof]-
> (1)$\Leftrightarrow$(2): 由惯性定理, $\boldsymbol{A}$ 合同于 $\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q,\boldsymbol{O}\}$. $p=n$ 当且仅当 $\boldsymbol{A}$ 合同于 $\boldsymbol{I}_n$.
>
> (2)$\Leftrightarrow$(3): $\boldsymbol{A}$ 合同于 $\boldsymbol{I}_n$ 当且仅当存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{I}_n\boldsymbol{C}=\boldsymbol{C}'\boldsymbol{C}$.
>
> (1)$\Leftrightarrow$(4): 即顺序主子式判定定理.
>
> (4)$\Leftrightarrow$(5): 显然.
>
> (1)$\Leftrightarrow$(6): 正惯性指数等于正特征值的个数.
>
> (1)$\Leftrightarrow$(7): 已证. $\square$


> [!example]
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶正定阵, 证明: $|\boldsymbol{A}|\leq a_{11}a_{22}\cdots a_{nn}$, 等号成立当且仅当 $\boldsymbol{A}$ 为对角矩阵.

> [!proof]-
> 由 Hadamard 不等式即得. 等号成立当且仅当 $\boldsymbol{A}$ 为对角矩阵. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{C}'(\boldsymbol{C}\boldsymbol{B})$, 故 $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{C}\boldsymbol{B})=r(\boldsymbol{B})$. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 若 $\boldsymbol{A}\boldsymbol{B}$ 正定, 则 $\boldsymbol{B}$ 正定.

> [!proof]-
> 由例 8.26, $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$. 又 $\boldsymbol{A}\boldsymbol{B}$ 正定, 故 $r(\boldsymbol{A}\boldsymbol{B})=n$, 从而 $r(\boldsymbol{B})=n$, $\boldsymbol{B}$ 非异. 设 $\lambda$ 是 $\boldsymbol{B}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{A}\boldsymbol{\alpha}$. 由 $\boldsymbol{A}\boldsymbol{B}$ 正定, $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$. 又 $\boldsymbol{A}$ 正定, 故 $\lambda>0$, $\boldsymbol{B}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且对任意 $n$ 维列向量 $\boldsymbol{x}$ 都有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq 0$. 证明: 若存在 $\boldsymbol{x}_0$ 使 $\boldsymbol{x}_0'\boldsymbol{A}\boldsymbol{x}_0=0$, 则 $\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{0}$.

> [!proof]-
> 由条件, $\boldsymbol{A}$ 半正定. 对任意实数 $t$ 和任意 $n$ 维列向量 $\boldsymbol{y}$,
> $$(\boldsymbol{x}_0+t\boldsymbol{y})'\boldsymbol{A}(\boldsymbol{x}_0+t\boldsymbol{y})\geq 0.$$
> 展开得 $2t\boldsymbol{y}'\boldsymbol{A}\boldsymbol{x}_0+t^2\boldsymbol{y}'\boldsymbol{A}\boldsymbol{y}\geq 0$. 若 $\boldsymbol{A}\boldsymbol{x}_0\neq\boldsymbol{0}$, 取 $\boldsymbol{y}=\boldsymbol{A}\boldsymbol{x}_0$, 则当 $t$ 为充分小的负数时, $2t||\boldsymbol{A}\boldsymbol{x}_0||^2+t^2\boldsymbol{x}_0'\boldsymbol{A}^3\boldsymbol{x}_0<0$, 矛盾. 故 $\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{0}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$, 证明: $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}\boldsymbol{x}\geq 0$ (因 $\boldsymbol{A}$ 半正定). 又 $\boldsymbol{A}\boldsymbol{B}=-\boldsymbol{B}\boldsymbol{A}$, 故 $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=-\boldsymbol{x}'\boldsymbol{B}'\boldsymbol{B}\boldsymbol{A}\boldsymbol{x}=-(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\leq 0$. 因此 $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=0$, 由例 8.28 知 $\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})=\boldsymbol{0}$, 即 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{O}$, 从而 $\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶正定阵, $\boldsymbol{C}$ 是 $n$ 阶半正定阵, 且 $\boldsymbol{A}=\boldsymbol{B}+\boldsymbol{C}$, $r(\boldsymbol{A})=r(\boldsymbol{B})$. 证明: $\boldsymbol{A}$ 半正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{\alpha}$. 又 $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}=\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}+\boldsymbol{\alpha}'\boldsymbol{C}\boldsymbol{\alpha}\geq\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$ (若 $\boldsymbol{\alpha}\neq\boldsymbol{0}$). 由 $r(\boldsymbol{A})=r(\boldsymbol{B})$, $\boldsymbol{A}$ 的非零特征值个数等于 $\boldsymbol{B}$ 的正特征值个数, 均为 $r(\boldsymbol{B})$. 故 $\boldsymbol{A}$ 的特征值非负, $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定当且仅当 $\boldsymbol{B}$ 非异.

> [!proof]-
> ($\Rightarrow$) 若 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定, 则 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=n$. 由 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\leq r(\boldsymbol{B})\leq n$, 知 $r(\boldsymbol{B})=n$, $\boldsymbol{B}$ 非异.
>
> ($\Leftarrow$) 若 $\boldsymbol{B}$ 非异, 则对任意 $\boldsymbol{x}\neq\boldsymbol{0}$, $\boldsymbol{B}\boldsymbol{x}\neq\boldsymbol{0}$, 故 $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})>0$, $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $m$ 阶正定阵, $\boldsymbol{B}$ 是 $m\times n$ 实矩阵, 证明: $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}=(\boldsymbol{C}\boldsymbol{B})'(\boldsymbol{C}\boldsymbol{B})$, 故 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{C}\boldsymbol{B})=r(\boldsymbol{B})$. $\square$


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 且 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 证明: $\boldsymbol{A}\boldsymbol{B}$ 正定.

> [!proof]-
> 由 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$ 且 $\boldsymbol{A}$, $\boldsymbol{B}$ 都实对称, 知 $\boldsymbol{A}\boldsymbol{B}$ 实对称. 设 $\lambda$ 是 $\boldsymbol{A}\boldsymbol{B}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. 于是 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. 由 $\boldsymbol{B}$ 正定, $\boldsymbol{A}^{-1}$ 正定, 知 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$, $\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}>0$, 故 $\lambda>0$, $\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{A}$, 证明: 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{I}_r,\boldsymbol{O}\}$, 其中 $r=r(\boldsymbol{A})$.

> [!proof]-
> $\boldsymbol{A}$ 实对称, 故存在正交阵 $\boldsymbol{P}_1$ 使 $\boldsymbol{P}_1'\boldsymbol{A}\boldsymbol{P}_1=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$. 由 $\boldsymbol{A}^2=\boldsymbol{A}$, $\lambda_i^2=\lambda_i$, 故 $\lambda_i=0$ 或 $1$. 将对角元适当排列即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{I}_n$, 证明: 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q\}$, 其中 $p+q=n$.

> [!proof]-
> 类似上例, $\lambda_i^2=1$, 故 $\lambda_i=\pm 1$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $k$ 为正整数, 证明: 存在唯一的 $n$ 阶半正定阵 $\boldsymbol{B}$ 使 $\boldsymbol{B}^k=\boldsymbol{A}$.

> [!proof]-
> 存在性: $\boldsymbol{A}$ 半正定, 故存在正交阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}\boldsymbol{P}$, $\lambda_i\geq 0$. 令 $\boldsymbol{B}=\boldsymbol{P}'\mathrm{diag}\{\sqrt[k]{\lambda_1},\cdots,\sqrt[k]{\lambda_n}\}\boldsymbol{P}$, 则 $\boldsymbol{B}$ 半正定且 $\boldsymbol{B}^k=\boldsymbol{A}$.
>
> 唯一性: 设 $\boldsymbol{B}_1$, $\boldsymbol{B}_2$ 都半正定且 $\boldsymbol{B}_1^k=\boldsymbol{B}_2^k=\boldsymbol{A}$. 设 $\boldsymbol{B}_1=\boldsymbol{P}_1'\mathrm{diag}\{\mu_1,\cdots,\mu_n\}\boldsymbol{P}_1$, $\boldsymbol{B}_2=\boldsymbol{P}_2'\mathrm{diag}\{\nu_1,\cdots,\nu_n\}\boldsymbol{P}_2$. 则 $\boldsymbol{B}_1^k=\boldsymbol{B}_2^k$ 的特征值为 $\mu_i^k=\nu_i^k$, 故 $\mu_i=\nu_i$, 从而 $\boldsymbol{B}_1=\boldsymbol{B}_2$. $\square$


> [!theorem]
> (Fischer 不等式) 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{A}_{12} \\ \boldsymbol{A}_{21} & \boldsymbol{A}_{22} \end{pmatrix}$ 是 $n$ 阶正定阵, $\boldsymbol{A}_{11}$ 是 $k$ 阶主子阵, 则 $|\boldsymbol{A}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|$.

> [!proof]-
> 对 $\boldsymbol{A}$ 进行对称分块初等变换, 可得
> $$\boldsymbol{A}\cong\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12} \end{pmatrix}.$$
> 由 $\boldsymbol{A}$ 正定, $\boldsymbol{A}_{11}$ 正定, $\boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12}$ 也正定. 由 Hadamard 不等式,
> $$|\boldsymbol{A}|=|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|.$$
> $\square$


> [!corollary]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{A}_{ii}$ ($i=1,\cdots,k$) 是其对角分块, 则 $|\boldsymbol{A}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|\cdots|\boldsymbol{A}_{kk}|$.

> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|^{\frac{1}{n}}\geq|\boldsymbol{A}|^{\frac{1}{n}}+|\boldsymbol{B}|^{\frac{1}{n}}$.

> [!proof]-
> 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$, $\lambda_i>0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=\prod_{i=1}^n(1+\lambda_i),\quad |\boldsymbol{C}|^2|\boldsymbol{A}|=1,\quad |\boldsymbol{C}|^2|\boldsymbol{B}|=\prod_{i=1}^n\lambda_i.$$
> 需证 $\prod_{i=1}^n(1+\lambda_i)^{\frac{1}{n}}\geq 1+(\prod_{i=1}^n\lambda_i)^{\frac{1}{n}}$. 由 Minkowski 不等式即得. $\square$


### §8.8 半正定型和半正定阵

本节讨论半正定二次型与半正定矩阵的理论.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 半正定;
> (2) $\boldsymbol{A}$ 的正惯性指数 $p=r(\boldsymbol{A})$;
> (3) $\boldsymbol{A}$ 合同于 $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, 其中 $r=r(\boldsymbol{A})$;
> (4) 存在 $m\times n$ 实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$ (其中 $r(\boldsymbol{C})=r$);
> (5) $\boldsymbol{A}$ 的所有主子式都大于等于零;
> (6) $\boldsymbol{A}$ 的所有特征值都大于等于零;
> (7) 对任意 $\varepsilon>0$, $\varepsilon\boldsymbol{I}_n+\boldsymbol{A}$ 正定.

> [!proof]-
> (1)$\Leftrightarrow$(2)$\Leftrightarrow$(3): 由惯性定理直接得到.
>
> (3)$\Leftrightarrow$(4): $\boldsymbol{A}$ 合同于 $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 当且仅当存在非异实矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}$. 令 $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}$, 则 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$ 且 $r(\boldsymbol{C})=r$.
>
> (1)$\Leftrightarrow$(5): 已证.
>
> (1)$\Leftrightarrow$(6): 半正定阵的特征值非负.
>
> (1)$\Leftrightarrow$(7): $\boldsymbol{x}'(\varepsilon\boldsymbol{I}_n+\boldsymbol{A})\boldsymbol{x}=\varepsilon\boldsymbol{x}'\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$ 对 $\boldsymbol{x}\neq\boldsymbol{0}$ 成立. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{A})=r(\boldsymbol{B}\boldsymbol{A})$. 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定.

> [!proof]-
> 由 $r(\boldsymbol{A})=r(\boldsymbol{B}\boldsymbol{A})$, 知 $\boldsymbol{B}\boldsymbol{x}=\boldsymbol{0}$ 的解空间包含 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}$ 的解空间. 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$, 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $\boldsymbol{A}+t\boldsymbol{B}$ 对任意实数 $t$ 半正定当且仅当 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$.

> [!proof]-
> ($\Leftarrow$) 若 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$, 则对任意 $t$, $(\boldsymbol{A}+t\boldsymbol{B})^2=\boldsymbol{A}^2+t^2\boldsymbol{B}^2$, 且 $\boldsymbol{x}'(\boldsymbol{A}+t\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq 0$.
>
> ($\Rightarrow$) 设 $\boldsymbol{A}+t\boldsymbol{B}$ 对所有 $t$ 半正定. 取 $t=\pm\frac{1}{n}$, 令 $n\to\infty$, 由极限知 $\boldsymbol{B}$ 半正定且半负定, 故 $\boldsymbol{B}=\boldsymbol{O}$. $\square$


> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则 $\boldsymbol{A}$ 半正定当且仅当存在 $\boldsymbol{A}$ 的某个 $k$ 阶主子式 $D_k$ ($1\leq k\leq n$) 满足: $D_k>0$, 且包含 $D_k$ 的所有 $k+1$ 阶主子式 (若存在) 都大于零, ..., 包含 $D_k$ 的所有 $n$ 阶主子式 (即 $|\boldsymbol{A}|$) 大于零.

> [!remark]
> 注意: 半正定阵的顺序主子式非负是必要条件, 但不是充分条件.


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$ (因 $\boldsymbol{A}$ 半正定), 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $m\times n$ 实矩阵, $\boldsymbol{B}$ 是 $s\times n$ 实矩阵, 证明: $r(\boldsymbol{A}'\boldsymbol{A}|\boldsymbol{B}'\boldsymbol{B})=r\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}$.

> [!proof]-
> 由例 8.31, $r(\boldsymbol{A}'\boldsymbol{A})=r(\boldsymbol{A})$. 又 $\boldsymbol{A}'\boldsymbol{A}$ 半正定, $\boldsymbol{B}'\boldsymbol{B}$ 半正定, 故
> $$r(\boldsymbol{A}'\boldsymbol{A}|\boldsymbol{B}'\boldsymbol{B})=r(\boldsymbol{A}'\boldsymbol{A}+\boldsymbol{B}'\boldsymbol{B})=r(\boldsymbol{A}'\boldsymbol{A})+r(\boldsymbol{B}'\boldsymbol{B})-r(\boldsymbol{A}'\boldsymbol{A}\boldsymbol{B}'\boldsymbol{B}).$$
> 另一方面, $r\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}=r(\boldsymbol{A}'\boldsymbol{A}+\boldsymbol{B}'\boldsymbol{B})$, 即得结论. $\square$


### §8.9 基础训练

本节提供二次型理论的基础训练题, 供读者巩固所学知识.

> [!exercise]
> 1. 用配方法将下列二次型化为标准型, 并写出所用的可逆线性变换:
> (1) $f(x_1,x_2,x_3)=x_1^2+2x_2^2+5x_3^2+2x_1x_2+2x_1x_3+6x_2x_3$;
> (2) $f(x_1,x_2,x_3)=2x_1x_2+4x_1x_3-2x_2x_3$.

> [!exercise]
> 2. 用正交变换法将二次型 $f(x_1,x_2,x_3)=2x_1^2+3x_2^2+3x_3^2+4x_2x_3$ 化为标准型, 并求出所用的正交变换.

> [!exercise]
> 3. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且对任意 $n$ 维列向量 $\boldsymbol{x}$ 都有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=0$. 证明: $\boldsymbol{A}=\boldsymbol{O}$.

> [!exercise]
> 4. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $\boldsymbol{A}+\boldsymbol{B}$ 非异.

> [!exercise]
> 5. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: $\boldsymbol{A}^*+\boldsymbol{A}^{-1}$ 正定.

> [!exercise]
> 6. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^3-6\boldsymbol{A}^2+11\boldsymbol{A}-6\boldsymbol{I}_n=\boldsymbol{O}$. 证明: $\boldsymbol{A}$ 正定.

> [!exercise]
> 7. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: $\boldsymbol{A}$ 半正定当且仅当对任意正实数 $t$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定.

> [!exercise]
> 8. 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$. 证明: $\boldsymbol{A}\boldsymbol{B}\boldsymbol{B}'$ 半正定.

> [!exercise]
> 9. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B}\boldsymbol{A})=r(\boldsymbol{B})$.

> [!exercise]
> 10. 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶半正定阵, 证明: $r(\boldsymbol{A}+\boldsymbol{B})\geq\max\{r(\boldsymbol{A}),r(\boldsymbol{B})\}$.


# 第9章 内积空间

## § 9.1 基本概念

### 9.1.1 内积空间的定义

#### 1. 欧氏空间

设 $V$ 是实数域上的线性空间，若存在某种规则，使得对 $V$ 中任意一对有序向量 $x, y$，都对应一个实数 $(x, y)$，适合如下性质：

(1) $(y, x) = (x, y)$;

(2) $(x + y, z) = (x, z) + (y, z)$;

(3) $(cx, y) = c(x, y)$, $c$ 为任一实数;

(4) $(x, x) \geq 0$, 且等号成立当且仅当 $x = 0$,

则称在 $V$ 上定义了一个**内积**. 实数 $(x, y)$ 称为向量 $x$ 和 $y$ 的内积. 若 $V$ 是 $n$ 维空间，则称 $V$ 是 $n$ 维**欧氏空间**.

#### 2. 酉空间

设 $V$ 是复数域上的线性空间，若存在某种规则，使得对 $V$ 中任意一对有序向量 $x, y$，都对应一个复数 $(x, y)$，适合如下性质：

(1) $(y, x) = \overline{(x, y)}$;

(2) $(x + y, z) = (x, z) + (y, z)$;

(3) $(cx, y) = c(x, y)$, $c$ 为任一复数;

(4) $(x, x) \geq 0$, 且等号成立当且仅当 $x = 0$,

则称在 $V$ 上定义了一个**内积**. 复数 $(x, y)$ 称为向量 $x$ 和 $y$ 的内积. 若 $V$ 是 $n$ 维空间，则称 $V$ 是 $n$ 维**酉空间**.

欧氏空间和酉空间统称为**内积空间**.


#### 3. 向量范数或长度

设 $V$ 是内积空间, $x$ 是 $V$ 中的向量, 定义 $x$ 的**范数** (长度) 为

$$\|x\| = (x, x)^{\frac{1}{2}}.$$

#### 4. 距离

设 $x, y$ 是内积空间 $V$ 中的向量, 定义 $x, y$ 之间的距离为 $d(x, y) = \|x - y\|$.

#### 5. 向量之间的夹角

设 $x, y$ 是内积空间 $V$ 中的非零向量, 定义 $x, y$ 之间的夹角 $\theta$ 的余弦为

$$\cos \theta = \begin{cases} \dfrac{(x, y)}{\|x\|\|y\|} & (\text{此时 } V \text{ 为实内积空间}); \\ \dfrac{|(x, y)|}{\|x\|\|y\|} & (\text{此时 } V \text{ 为复内积空间}). \end{cases}$$

#### 6. 正交

设 $x, y$ 是内积空间 $V$ 中的向量, 若 $(x, y) = 0$, 则称 $x$ 和 $y$ **正交**, 记为 $x \perp y$.

#### 7. 定理

> [!theorem]
> 设 $V$ 是内积空间, $x, y$ 是 $V$ 中的向量, $c$ 是任意常数, 则
> (1) $\|cx\| = |c| \cdot \|x\|$;
> (2) $|(x, y)| \leq \|x\| \cdot \|y\|$;
> (3) $\|x + y\| \leq \|x\| + \|y\|$.

### 9.1.2 正交基

#### 1. 正交基

设 $V$ 是 $n$ 维内积空间, 若 $V$ 有一组基两两正交, 则称这组基为 $V$ 的**正交基**. 进一步, 若每个基向量的长度都等于 1, 则称之为**标准正交基**.

#### 2. 定理

> [!theorem]
> $n$ 维内积空间中两两正交的非零向量组必线性无关; 任意一个 $n$ 维内积空间必有标准正交基.


#### 3. Gram-Schmidt 正交化方法

设 $V$ 是 $n$ 维内积空间, $x_1, x_2, \cdots, x_m$ 是 $V$ 中 $m$ 个线性无关的向量, 令

$$\begin{aligned} y_1 &= x_1, \\ y_2 &= x_2 - \frac{(x_2, y_1)}{\|y_1\|^2} y_1, \\ y_3 &= x_3 - \frac{(x_3, y_1)}{\|y_1\|^2} y_1 - \frac{(x_3, y_2)}{\|y_2\|^2} y_2, \\ &\cdots\cdots\cdots\cdots \\ y_m &= x_m - \sum_{j=1}^{m-1} \frac{(x_m, y_j)}{\|y_j\|^2} y_j, \end{aligned}$$

则 $y_1, y_2, \cdots, y_m$ 是两两正交的非零向量组.

#### 4. 正交补

设 $V$ 是 $n$ 维内积空间, $U$ 是子空间, 则和 $U$ 正交的全体向量组成 $V$ 的一个子空间, 称为 $U$ 的**正交补空间**, 记为 $U^\perp$.

#### 5. 正交直和

设 $V$ 是 $n$ 维内积空间, $U_i (1 \leq i \leq m)$ 是子空间. 假设 $U_i$ 两两正交且 $V$ 是 $U_i$ 的和空间, 则称 $V$ 是 $U_i$ 的**正交直和**, 记为

$$V = U_1 \perp U_2 \perp \cdots \perp U_m.$$

#### 6. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $U$ 是子空间, 则
> (1) $V = U \perp U^\perp$;
> (2) $U$ 的任意一组标准正交基都可以扩张为 $V$ 的一组标准正交基.

### 9.1.3 伴随

#### 1. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上唯一的线性变换 $\varphi^*$, 使得对任意的 $x, y \in V$, 都有
> $$(\varphi(x), y) = (x, \varphi^*(y)).$$


上述 $\varphi^*$ 称为线性变换 $\varphi$ 的**伴随**.

#### 2. 伴随的表示矩阵

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组标准正交基, 且 $\varphi$ 在这组基下的表示矩阵为 $A$. 若 $V$ 是欧氏空间, 则 $\varphi^*$ 在这组基下的表示矩阵为 $A'$, 即 $A$ 的转置; 若 $V$ 是酉空间, 则 $\varphi^*$ 在这组基下的表示矩阵为 $\overline{A}'$, 即 $A$ 的共轭转置.

#### 3. 伴随的性质

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, $c$ 是某个常数, 则

(1) $(\varphi + \psi)^* = \varphi^* + \psi^*$;

(2) $(c\varphi)^* = \overline{c}\varphi^*$;

(3) $(\varphi\psi)^* = \psi^*\varphi^*$;

(4) $(\varphi^*)^* = \varphi$.

### 9.1.4 正交变换与酉变换

#### 1. 定义

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 若 $\varphi$ 保持内积, 即对任意的 $x, y \in V$, $(\varphi(x), \varphi(y)) = (x, y)$, 则当 $V$ 是欧氏空间时, 称 $\varphi$ 是 $V$ 上的**正交变换**; 当 $V$ 是酉空间时, 称 $\varphi$ 是 $V$ 上的**酉变换**.

#### 2. 正交矩阵和酉矩阵

若 $n$ 阶实矩阵 $P$ 适合 $P'P = PP' = I_n$, 则称为**正交矩阵**; 若 $n$ 阶复矩阵 $U$ 适合 $\overline{U}'U = U\overline{U}' = I_n$, 则称为**酉矩阵**.

#### 3. 定理

> [!theorem]
> 欧氏空间上的线性变换 $\varphi$ 是正交变换的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是正交矩阵; 酉空间上的线性变换 $\varphi$ 是酉变换的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是酉矩阵.


### 9.1.5 正规算子

#### 1. 自伴随算子

设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的线性变换, 若 $\varphi = \varphi^*$, 则称 $\varphi$ 是 $V$ 上的**自伴随算子**. 当 $V$ 是欧氏空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是对称矩阵; 当 $V$ 是酉空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是 Hermite 矩阵.

> [!note]
> 当 $V$ 是欧氏空间时, 自伴随算子又称为**对称变换**; 当 $V$ 是酉空间时, 自伴随算子又称为 **Hermite 变换**.

#### 2. 定理

> [!theorem]
> 设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的自伴随算子, 则存在 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵是实对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_i$ 都是 $\varphi$ 的特征向量.

#### 3. 定理

> [!theorem]
> 实对称矩阵和 Hermite 矩阵的特征值都是实数.

#### 4. 定理

> [!theorem]
> 任意一个实对称矩阵 $A$ 都正交相似于对角矩阵, 即存在正交矩阵 $P$, 使得 $P'AP$ 是对角矩阵, 且该对角矩阵的主对角元是 $A$ 的特征值. 任意一个 Hermite 矩阵 $H$ 都酉相似于实对角矩阵, 即存在酉矩阵 $U$, 使得 $\overline{U}'HU$ 是实对角矩阵, 且该对角矩阵的主对角元是 $H$ 的特征值.

#### 5. 正规算子与正规矩阵

设 $\varphi$ 是内积空间 $V$ 上的线性变换, 若 $\varphi\varphi^* = \varphi^*\varphi$, 则称 $\varphi$ 是**正规算子**.

若 $n$ 阶复矩阵 $A$ 适合 $A\overline{A}' = \overline{A}'A$, 则称为**复正规矩阵**; 若 $n$ 阶实矩阵 $A$ 适合 $AA' = A'A$, 则称为**实正规矩阵**.

#### 6. 定理

> [!theorem]
> 设 $\varphi$ 是 $n$ 维酉空间 $V$ 上的正规算子, 则存在 $V$ 的一组标准正交基 $\{e_1, e_2, \cdots, e_n\}$, 使得 $\varphi$ 在这组基下的表示矩阵是对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_i$ 都是 $\varphi$ 的特征向量.


#### 7. 定理

> [!theorem]
> 任一复正规矩阵均酉相似于复对角矩阵.

#### 8. 推论

> [!corollary]
> 任一 $n$ 阶酉矩阵均酉相似于下列形状的对角矩阵:
> $$\text{diag}\{c_1, c_2, \cdots, c_n\},$$
> 其中 $c_i$ 为模长等于 1 的复数.

#### 9. 定理

> [!theorem]
> 设 $V$ 是 $n$ 维欧氏空间, $\varphi$ 是 $V$ 上的正规算子, 则存在 $V$ 的一组标准正交基, 使得 $\varphi$ 在这组基下的表示矩阵为下列分块对角矩阵:
> $$\text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\}, \tag{9.1}$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ 的二阶实矩阵, $c_j$ 是实数.

#### 10. 定理

> [!theorem]
> 设 $A$ 是 $n$ 阶实正规矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\},$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} a_i & b_i \\ -b_i & a_i \end{pmatrix}$ 的二阶实矩阵, $c_j$ 是实数.

#### 11. 推论

> [!corollary]
> 设 $A$ 是 $n$ 阶正交矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, c_{2r+1}, \cdots, c_n\},$$
> 其中 $A_i$ 为形如 $\begin{pmatrix} \cos\theta_i & \sin\theta_i \\ -\sin\theta_i & \cos\theta_i \end{pmatrix}$ 的二阶实矩阵, $c_j = 1$ 或 $-1$.

#### 12. 推论

> [!corollary]
> 设 $A$ 是 $n$ 阶实反对称矩阵, 则存在正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{A_1, \cdots, A_r, 0, \cdots, 0\},$$


其中 $A_i$ 为形如 $\begin{pmatrix} 0 & c_i \\ -c_i & 0 \end{pmatrix}$ 的二阶实矩阵. 特别地, 实反对称矩阵的特征值为零或纯虚数.

### 9.1.6 谱分解和极分解

#### 1. 谱分解定理

> [!theorem]
> 设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 当 $V$ 是欧氏空间时假设 $\varphi$ 是自伴随算子, 当 $V$ 是酉空间时假设 $\varphi$ 是复正规算子. 设 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的所有不同的特征值, $V_i$ 是 $\lambda_i$ 的特征子空间, 则 $V$ 是诸 $V_i$ 的正交直和. 又设 $E_i$ 为 $V$ 到 $V_i$ 上的正交投影, 则
> $$\varphi = \lambda_1 E_1 + \lambda_2 E_2 + \cdots + \lambda_k E_k.$$

#### 2. 极分解定理

> [!theorem]
> 设 $V$ 是 $n$ 维酉 (欧氏) 空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上的酉变换 (正交变换) $\omega$ 以及 $V$ 上的半正定自伴随算子 $\psi$, 使得 $\varphi = \omega\psi$, 其中 $\psi$ 被 $\varphi$ 唯一确定, 当 $\varphi$ 是可逆线性变换时, $\omega$ 也被 $\varphi$ 唯一确定.

#### 3. 矩阵的极分解

若 $A$ 是 $n$ 阶实矩阵, 则存在 $n$ 阶正交矩阵 $Q$ 和半正定实对称矩阵 $S$, 使得 $A = QS$. 若 $B$ 是 $n$ 阶复矩阵, 则存在 $n$ 阶酉矩阵 $U$ 和半正定 Hermite 矩阵 $H$, 使得 $B = UH$. 上述分解式当 $A, B$ 是可逆矩阵时是唯一的.

### 9.1.7 奇异值分解

#### 1. 定理

> [!theorem]
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在唯一的线性映射 $\varphi^*: U \to V$, 使得对任意的 $v \in V, u \in U$, 总有
> $$(\varphi(v), u) = (v, \varphi^*(u)).$$

上述 $\varphi^*$ 称为线性映射 $\varphi$ 的**伴随**.


#### 2. 奇异值

设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 若存在非负实数 $\sigma$ 以及非零向量 $v \in V, u \in U$, 使得

$$\varphi(v) = \sigma u, \quad \varphi^*(u) = \sigma v,$$

则称 $\sigma$ 是 $\varphi$ 的**奇异值**, $v, u$ 分别称为 $\varphi$ 关于 $\sigma$ 的**右奇异向量**与**左奇异向量**.

#### 3. 奇异值分解定理

> [!theorem]
> 设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在 $V$ 和 $U$ 的标准正交基, 使得 $\varphi$ 在这两组基下的表示矩阵为
> $$\begin{pmatrix} S & O \\ O & O \end{pmatrix},$$
> 其中 $S = \text{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$, $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 是 $\varphi$ 的非零奇异值.

#### 4. 矩阵的奇异值分解

设 $A$ 为 $m \times n$ 实矩阵 (复矩阵), 则存在 $m$ 阶正交矩阵 (酉矩阵) $P$, $n$ 阶正交矩阵 (酉矩阵) $Q$, 使得

$$A = P \begin{pmatrix} S & O \\ O & O \end{pmatrix} Q,$$

其中 $S = \text{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$, $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 是 $A$ 的非零奇异值.

## § 9.2 内积空间与 Gram 矩阵

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

## § 9.3 Gram-Schmidt 正交化方法和正交补空间

Gram-Schmidt 方法是内积空间中最重要的方法之一. 其意义在于: 可将任一组线性无关的向量变成一组两两正交的向量, 并且这两个向量组是等价的. 特别地, 对有限维内积空间的任一组基, 都可通过 Gram-Schmidt 方法找到一组标准正交基与之等价. 由于标准正交基具有良好的性质, 这就给许多问题的讨论和研究带来了极大的便利. 本节将探讨 Gram-Schmidt 方法的诸多应用, 包括 QR 分解, Cholesky 分解以及正定阵的一些等价刻画等. 最后还会讨论有关正交补空间的一些应用.

### 9.3.1 Gram-Schmidt 方法

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

### 9.3.2 QR 分解

设 $A$ 是 $n$ 阶实 (复) 矩阵, 则存在 $n$ 阶正交矩阵 (酉矩阵) $Q$ 和主对角元全大于等于零的上三角矩阵 $R$, 使得 $A = QR$.

> [!proof]-
> **证明** 设 $A = (u_1, u_2, \cdots, u_n)$ 为列分块, 其中 $u_i$ 是 $A$ 的第 $i$ 个列向量. 对 $u_1, u_2, \cdots, u_n$ 用 Gram-Schmidt 正交化方法, 由 (9.5) 式即得 $A = QR$. 当 $A$ 为实矩阵时, $Q$ 是正交矩阵; 当 $A$ 为复矩阵时, $Q$ 是酉矩阵. $\square$

> [!note]
> QR 分解中 $R$ 的主对角元都是非负实数. 进一步可以证明: 当 $A$ 为可逆矩阵时, 这样的 QR 分解是唯一的.

### 9.3.3 Cholesky 分解

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


## § 9.4 伴 随

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


## § 9.5 保积同构、正交变换和正交矩阵

设 $\varphi: V \to U$ 是内积空间之间的线性同构, 若 $\varphi$ 保持内积, 则称为保积同构. 若两个线性空间之间存在线性同构, 则它们具有相同的线性结构, 从而在考虑线性问题时可将它们等同起来. 同理, 若两个内积空间之间存在保积同构, 则它们具有相同的内积结构, 从而在考虑内积问题时也可将它们等同起来, 这也是研究保积同构的意义所在. 本节将从 4 个方面研究保积同构的性质及其应用.

### 1. 保积同构和几何问题代数化

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

### 2. 保积同构的判定及其应用

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

### 3. 正交变换与镜像变换

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


## § 9.6 用正交变换法化简二次型

我们已经知道, 任意一个实二次型都可以通过非异线性变换化为标准型 (规范型). 在这一节中, 我们将介绍利用正交变换化简实二次型的方法. 正交变换保持向量的范数不变, 因此它是一种特殊的非异线性变换, 用正交变换化简二次型在几何和物理中有着重要的应用.

### 9.6.1 实对称矩阵的正交相似标准型

> [!theorem]
> 设 $A$ 为 $n$ 阶实对称矩阵, 则存在 $n$ 阶正交矩阵 $P$, 使得
> $$P'AP = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},$$
> 其中 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的全部特征值.

**证明思路** 实对称矩阵的特征值都是实数, 且不同特征值对应的特征向量相互正交. 对 $A$ 的每个特征值, 可以取一组标准正交的特征向量, 合起来就得到 $n$ 个两两正交的单位特征向量, 它们构成正交矩阵 $P$ 的列向量.

### 9.6.2 用正交变换化简实二次型

设 $f(x_1, x_2, \cdots, x_n) = x'Ax$ 是一个实二次型, 其中 $A$ 是 $n$ 阶实对称矩阵. 由上述定理, 存在正交矩阵 $P$, 使得 $P'AP = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$. 令 $x = Py$, 则

$$f = x'Ax = (Py)'A(Py) = y'(P'AP)y = y'\text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}y = \sum_{i=1}^n \lambda_iy_i^2.$$

这就是用正交变换将实二次型化为标准型的结果.

> [!note]
> 用正交变换化简二次型与一般的非异线性变换相比, 有以下特点:
> (1) 正交变换保持向量的长度和夹角不变, 具有几何保形性;
> (2) 标准型中平方项的系数恰好是矩阵 $A$ 的特征值, 具有明确的代数意义;
> (3) 正交矩阵的逆就是它的转置, 计算方便.

### 9.6.3 正交相似与合同的关系

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

### 4. 正交矩阵的性质

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

## § 9.6 用正交变换法化简二次型

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


## § 9.7 实对称矩阵和实二次型的计算

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


### 5. 极分解与奇异值分解

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


## § 9.8 同时合同对角化

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

## § 9.9 Schur 定理

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

## § 9.9 Schur 定理

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


## § 9.10 复正规算子与复正规矩阵

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

## § 9.11 实正规算子与实正规矩阵

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


## § 9.12 实正规矩阵的正交相似标准型

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


## § 9.13 同时合同对角化与同时合同标准化

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

## § 9.14 谱分解、极分解、奇异值分解及其应用

矩阵分解是矩阵理论中一个重要的研究方向，具有广泛的应用。前面我们已经介绍过矩阵的满秩分解、Cholesky 分解和 $QR$ 分解等内容，本节将分成 4 个部分，分别介绍谱分解、极分解、奇异值分解以及广义逆等内容。

### 1. 谱分解及其应用

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

### 2. 极分解及其应用

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

### 3. 奇异值分解及其应用

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


### 4. 广义逆及其应用

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

## § 9.15 基础训练

### 9.15.1 训 练 题

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

# 第10章 双线性型

---

## §10.1 基本概念


### 10.1.1 对偶空间

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

### 10.1.2 双线性型

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

### 10.1.3 纯量积

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

### 10.1.4 交错型与辛空间

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

### 10.1.5 对称型和正交空间

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


## §10.2 线性函数与对偶空间

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

## §10.3 双线性型与纯量积

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
