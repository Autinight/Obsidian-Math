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

