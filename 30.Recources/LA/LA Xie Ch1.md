# 第1章

## 行列式

### § 1.1 基本概念

#### 1.1.1 行列式的定义

##### 1. 行列式的概念

$n^{2}$ 个数 (或称元素) 依次排成 n 行、n 列, 并用两条竖线围起的式子:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right| \tag {1.1}
$$

称为 n 阶行列式.

##### 2. 余子式

设 $|\mathbf{A}|$ 是一个 $n$ 阶行列式, 划去 $|\mathbf{A}|$ 的第 $i$ 行及第 $j$ 列, 剩下的 $(n - 1)^2$ 个元素按原来的顺序组成一个 $n - 1$ 阶行列式, 这个行列式称为 $|\mathbf{A}|$ 的第 $(i,j)$ 元素的余子式, 记为 $M_{ij}$ .

##### 3. 行列式值的递归定义

设 $|\mathbf{A}|$ 是如 (1.1) 式所示的行列式, 若 $n = 1$ , 即 $|\mathbf{A}|$ 只含一个元素 $a_{11}$ , 则定义 $|\mathbf{A}|$ 的值就等于 $a_{11}$ . 假设 $n - 1$ 阶行列式的值已定义好, 那么对任意的 $i, j, |\mathbf{A}|$ 的第 $(i, j)$ 元素 $a_{ij}$ 的余子式 $M_{ij}$ 的值已定义好, 定义 $|\mathbf{A}|$ 的值为

$$
| \boldsymbol {A} | = a _ {1 1} M _ {1 1} - a _ {2 1} M _ {2 1} + \dots + (- 1) ^ {i + 1} a _ {i 1} M _ {i 1} + \dots + (- 1) ^ {n + 1} a _ {n 1} M _ {n 1}. \tag {1.2}
$$

##### 4. 代数余子式

设 $|\mathbf{A}|$ 是如 (1.1) 式所示的 $n$ 阶行列式, $M_{ij}$ 是 $|\mathbf{A}|$ 的第 $(i,j)$ 元素的余子式, 定义 $|\mathbf{A}|$ 的第 $(i,j)$ 元素的代数余子式为

$$
A _ {i j} = (- 1) ^ {i + j} M _ {i j}. \tag {1.3}
$$

##### 5. 定理

设 $|A|$ 是如 (1.1) 式所示的 n 阶行列式, 则对任意的 $1 \leq j \leq n$ ,

$$
| \boldsymbol {A} | = (- 1) ^ {1 + j} a _ {1 j} M _ {1 j} + \dots + (- 1) ^ {i + j} a _ {i j} M _ {i j} + \dots + (- 1) ^ {n + j} a _ {n j} M _ {n j}, \tag {1.4}
$$

或用代数余子式表示为

$$
| \boldsymbol {A} | = a _ {1 j} A _ {1 j} + \dots + a _ {i j} A _ {i j} + \dots + a _ {n j} A _ {n j}. \tag {1.5}
$$

(1.4) 式和 (1.5) 式称为行列式按第 $j$ 列进行展开. 由对称性, 行列式也可以按第 $i$ 行进行展开:

$$
| \boldsymbol {A} | = (- 1) ^ {i + 1} a _ {i 1} M _ {i 1} + \dots + (- 1) ^ {i + j} a _ {i j} M _ {i j} + \dots + (- 1) ^ {i + n} a _ {i n} M _ {i n}, \tag {1.6}
$$

或用代数余子式表示为

$$
| \boldsymbol {A} | = a _ {i 1} A _ {i 1} + \dots + a _ {i j} A _ {i j} + \dots + a _ {i n} A _ {i n}. \tag {1.7}
$$

##### 6. 行列式值的组合定义

设 $|\mathbf{A}|$ 是 $n$ 阶行列式, 它的第 $(i,j)$ 元素是 $a_{ij}$ , 定义 $|\mathbf{A}|$ 的值为

$$
\sum_ {(k _ {1}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, \dots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n},
$$

其中 $N(k_{1},\cdots,k_{n})$ 表示排列 $(k_{1},\cdots,k_{n})$ 的逆序数.

#### 1.1.2 行列式的性质及行列式的计算

##### 1. 行列式的性质

性质 1 上 (下) 三角行列式的值等于其主对角线上元素之积.

性质 2 若行列式的某一行 (或某一列) 全为零, 则行列式的值等于零.

性质 3 用某个常数 c 乘以行列式的某一行 (或某一列), 所得行列式的值等于原行列式值的 c 倍.

性质 4 对换行列式的两行 (或两列), 行列式的值改变符号.

性质 5 若行列式的某两行 (或某两列) 成比例, 则行列式的值等于零.

性质 6 若行列式的某一行 (或某一列) 元素 $a_{ij} = b_{ij} + c_{ij}$ ，则该行列式可分解为两个行列式之和，其中一个行列式的相应行 (或列) 的元素为 $b_{ij}$ ，另一个行列式的相应行 (或列) 的元素为 $c_{ij}$ ，用式子来表示就是：

$$
\left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ \vdots & \vdots & & \vdots \\ b _ {i 1} + c _ {i 1} & b _ {i 2} + c _ {i 2} & \dots & b _ {i n} + c _ {i n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right| = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ \vdots & \vdots & & \vdots \\ b _ {i 1} & b _ {i 2} & \dots & b _ {i n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right| + \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ \vdots & \vdots & & \vdots \\ c _ {i 1} & c _ {i 2} & \dots & c _ {i n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|,
$$

对列也有类似等式成立.

性质 7 将行列式的某一行 (或某一列) 乘以常数 c 加到另一行 (或另一列) 上去, 行列式的值不变.

性质 8 行列式转置后的值不变, 即 $\left|A'\right| = \left|A\right|$ .

##### 2. 行列式的计算

如果用定义来计算行列式, 除了极少量的行列式可以比较容易算出外, 大多数行列式的计算十分繁琐. 行列式的计算主要运用它的性质来进行.

#### 1.1.3 Cramer法则

Cramer 法则适用于计算含有 $n$ 个未知数、 $n$ 个方程式的线性方程组.

##### 1. 线性方程组

线性方程组的一般形式为

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1} + a _ {1 2} x _ {2} + \dots + a _ {1 n} x _ {n} = b _ {1}, \\ a _ {2 1} x _ {1} + a _ {2 2} x _ {2} + \dots + a _ {2 n} x _ {n} = b _ {2}, \\ \dots \dots \\ a _ {n 1} x _ {1} + a _ {n 2} x _ {2} + \dots + a _ {n n} x _ {n} = b _ {n}, \end{array} \right. \tag {1.8}
$$

其中 $x_{1}, x_{2}, \cdots, x_{n}$ 是未知数； $a_{ij} (1 \leq i, j \leq n)$ 是常数，称为各未知数的系数； $b_{1}, b_{2}, \cdots, b_{n}$ 也是常数，称为常数项。（1.8）式称为 n 个未知数、n 个方程式的线性方程组的标准式。

现设有如 (1.8) 式的线性方程组, (1.8) 式中诸未知数的系数按式中的顺序排列组成一个 $n$ 阶行列式 $|\mathbf{A}|$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|,
$$

$|A|$ 称为线性方程组 (1.8) 的系数行列式.

将常数项 $b_{1}, b_{2}, \cdots, b_{n}$ 依次置换 $|A|$ 的第 i 列元素, 可得行列式 $|A_{i}| (1 \leq i \leq n)$ :

$$
| \boldsymbol {A} _ {i} | = \left| \begin{array}{c c c c c} a _ {1 1} & \dots & b _ {1} & \dots & a _ {1 n} \\ a _ {2 1} & \dots & b _ {2} & \dots & a _ {2 n} \\ \vdots & & \vdots & & \vdots \\ a _ {n 1} & \dots & b _ {n} & \dots & a _ {n n} \end{array} \right|.
$$

##### 2. 定理 (Cramer 法则)

设有 $n$ 个未知数、 $n$ 个方程式的线性方程组如 (1.8) 式所示, 若它的系数行列式 $|A|$ 的值不等于零, 则该方程组有且只有一组解:

$$
x _ {1} = \frac {| A _ {1} |}{| A |}, x _ {2} = \frac {| A _ {2} |}{| A |}, \dots , x _ {n} = \frac {| A _ {n} |}{| A |}.
$$

#### 1.1.4 行列式的其他性质

##### 1. Vandermonde 行列式

Vandermonde行列式的值为

$$
V _ {n} = \left| \begin{array}{c c c c c} 1 & x _ {1} & x _ {1} ^ {2} & \dots & x _ {1} ^ {n - 1} \\ 1 & x _ {2} & x _ {2} ^ {2} & \dots & x _ {2} ^ {n - 1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n - 1} & x _ {n - 1} ^ {2} & \dots & x _ {n - 1} ^ {n - 1} \\ 1 & x _ {n} & x _ {n} ^ {2} & \dots & x _ {n} ^ {n - 1} \end{array} \right| = \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}).
$$

2. 分块上（下）三角行列式

$$
\left| \begin{array}{c c} A & M \\ O & B \end{array} \right| = | A | | B |, \quad \left| \begin{array}{c c} A & O \\ N & B \end{array} \right| = | A | | B |.
$$

3. Laplace 定理

设 $|\mathbf{A}|$ 是 $n$ 阶行列式, 在 $|\mathbf{A}|$ 中任取 $k$ 行 (列), 那么含于这 $k$ 行 (列) 的全部 $k$ 阶子式与它们所对应的代数余子式的乘积之和等于 $|\mathbf{A}|$ , 即若取定 $k$ 个行: $1 \leq i_1 < i_2 < \cdots < i_k \leq n$ , 则

$$
| \boldsymbol {A} | = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {k} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right) \widehat {\boldsymbol {A}} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right).
$$

同样, 若取定 k 个列: $1 \leq j_{1} < j_{2} < \cdots < j_{k} \leq n$ , 则

$$
| \boldsymbol {A} | = \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {k} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right) \widehat {\boldsymbol {A}} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right).
$$

### § 1.2 降阶法

降阶法 利用行列式的性质, 将行列式的某一行 (列) 化出尽可能多的零, 然后按照这一行 (列) 展开, 进行降阶处理.

例 1.1 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ 1 & C _ {2} ^ {1} & \dots & C _ {n} ^ {1} \\ 1 & C _ {3} ^ {2} & \dots & C _ {n + 1} ^ {2} \\ \vdots & \vdots & & \vdots \\ 1 & C _ {n} ^ {n - 1} & \dots & C _ {2 n - 2} ^ {n - 1} \end{array} \right|.
$$

解 根据规律, 行列式的第 $(i,1)$ 元素为 $C_{i-1}^{i-1} = 1$ , 行列式的第 $(1,j)$ 元素为 $C_{j-1}^{0} = 1$ , 因此可将第一列 (行) 的 $n-1$ 个 1 变成 0, 再按照第一列 (行) 展开, 进行降阶处理.

依次将行列式的第 i-1 行乘以 -1 加到第 i 行上去 $(i=n,\cdots,2)$ ，并利用组合数公式 $C_{m}^{k-1} + C_{m}^{k} = C_{m+1}^{k}$ 进行化简。再按照第一列进行展开，得到的 n-1 阶行列式恰好是原行列式的左下角部分, 并具有相同的规律. 不断地这样做下去, 最后可得 $|\mathbf{A}| = \mathrm{C}_{n-1}^{n-1} = 1$ .

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} C _ {0} ^ {0} & C _ {1} ^ {0} & \dots & C _ {n - 1} ^ {0} \\ 0 & C _ {1} ^ {1} & \dots & C _ {n - 1} ^ {1} \\ 0 & C _ {2} ^ {2} & \dots & C _ {n} ^ {2} \\ \vdots & \vdots & & \vdots \\ 0 & C _ {n - 1} ^ {n - 1} & \dots & C _ {2 n - 3} ^ {n - 1} \end{array} \right| = \left| \begin{array}{c c c} C _ {1} ^ {1} & \dots & C _ {n - 1} ^ {1} \\ C _ {2} ^ {2} & \dots & C _ {n} ^ {2} \\ \vdots & & \vdots \\ C _ {n - 1} ^ {n - 1} & \dots & C _ {2 n - 3} ^ {n - 1} \end{array} \right| = \dots = C _ {n - 1} ^ {n - 1} = 1.
$$

也可以依次将行列式的第 j-1 列乘以 -1 加到第 j 列上去 $(j=n,\cdots,2)$ ，再按照第一行进行展开，得到的 n-1 阶行列式恰好是原行列式的右上角部分，并具有相同的规律。不断地这样做下去，最后可得 $|A|=C_{n-1}^{0}=1$ 。☐

利用行列式的性质, 还可将行列式化为上 (下) 三角行列式或其他重要的模板 (例如: 爪型行列式、Vandermonde 行列式等), 然后可直接得到结果.

例1.2 计算 $n$ 阶行列式：

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 1 & 2 & 3 & \dots & n \\ - 1 & 0 & 3 & \dots & n \\ - 1 & - 2 & 0 & \dots & n \\ \vdots & \vdots & \vdots & & \vdots \\ - 1 & - 2 & - 3 & \dots & 0 \end{array} \right|.
$$

解 将第一行依次加到其他行上便得到一个上三角行列式且主对角线上元素依次为 $1,2,\cdots,n$ . 因此 $|A|=n!$ . ☐

例1.3 计算 $n$ 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a _ {1} b _ {1} & a _ {1} b _ {2} & a _ {1} b _ {3} & \dots & a _ {1} b _ {n} \\ a _ {1} b _ {2} & a _ {2} b _ {2} & a _ {2} b _ {3} & \dots & a _ {2} b _ {n} \\ a _ {1} b _ {3} & a _ {2} b _ {3} & a _ {3} b _ {3} & \dots & a _ {3} b _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {1} b _ {n} & a _ {2} b _ {n} & a _ {3} b _ {n} & \dots & a _ {n} b _ {n} \end{array} \right|.
$$

解 先将 $|\mathbf{A}|$ 的第一行提出公因子 $a_1$ ，再将第一行乘以 $-a_i$ 加到第 $i$ 行上 $(2 \leq$ 

$i \leq n)$ ，最后按第 n 列进行展开可得

$$
\begin{array}{l} | \boldsymbol {A} | = a _ {1} \left| \begin{array}{c c c c c} b _ {1} & b _ {2} & b _ {3} & \dots & b _ {n} \\ a _ {1} b _ {2} - a _ {2} b _ {1} & 0 & 0 & \dots & 0 \\ a _ {1} b _ {3} - a _ {3} b _ {1} & a _ {2} b _ {3} - a _ {3} b _ {2} & 0 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {1} b _ {n} - a _ {n} b _ {1} & a _ {2} b _ {n} - a _ {n} b _ {2} & a _ {3} b _ {n} - a _ {n} b _ {3} & \dots & 0 \end{array} \right| \\ = a _ {1} b _ {n} \prod_ {i = 1} ^ {n - 1} \left(a _ {i + 1} b _ {i} - a _ {i} b _ {i + 1}\right). \square \\ \end{array}
$$

下面是所谓的爪型行列式, 它也可以化为三角行列式来计算.

例 1.4 (爪型行列式) 计算 n 阶行列式, 其中 $a_{i} \neq 0 (2 \leq i \leq n)$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a _ {1} & b _ {2} & b _ {3} & \dots & b _ {n} \\ c _ {2} & a _ {2} & 0 & \dots & 0 \\ c _ {3} & 0 & a _ {3} & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ c _ {n} & 0 & 0 & \dots & a _ {n} \end{array} \right|.
$$

解 将第 $i$ 列乘以 $-\frac{c_i}{a_i}$ 加到第一列上 $(2 \leq i \leq n)$ , 可得

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a _ {1} - \sum_ {i = 2} ^ {n} \frac {b _ {i} c _ {i}}{a _ {i}} & b _ {2} & b _ {3} & \dots & b _ {n} \\ 0 & a _ {2} & 0 & \dots & 0 \\ 0 & 0 & a _ {3} & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & a _ {n} \end{array} \right| = \left(a _ {1} - \sum_ {i = 2} ^ {n} \frac {b _ {i} c _ {i}}{a _ {i}}\right) a _ {2} a _ {3} \dots a _ {n}. \square
$$

注 去掉 $a_{i} \neq 0 (2 \leq i \leq n)$ 的条件, 我们仍可求出

$$
| \boldsymbol {A} | = a _ {1} a _ {2} \dots a _ {n} - \sum_ {i = 2} ^ {n} a _ {2} \dots \widehat {a _ {i}} \dots a _ {n} b _ {i} c _ {i},
$$

其中 $\hat{a}_i$ 表示 $a_i$ 不在连乘式中. 例如, 若 $a_i = 0$ , 则先按 $c_i$ 所在的行进行展开, 再按 $b_i$ 所在的列进行展开, 即得结论. 请读者自行验证, 并与例 1.4 的结论进行比较.

例 1.5 计算 n 阶行列式, 其中 $a_{i} \neq 0 (1 \leq i \leq n)$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} x _ {1} - a _ {1} & x _ {2} & x _ {3} & \dots & x _ {n} \\ x _ {1} & x _ {2} - a _ {2} & x _ {3} & \dots & x _ {n} \\ x _ {1} & x _ {2} & x _ {3} - a _ {3} & \dots & x _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ x _ {1} & x _ {2} & x _ {3} & \dots & x _ {n} - a _ {n} \end{array} \right|.
$$

解 第一行乘以 -1 依次加到其余各行上去, 可得

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} x _ {1} - a _ {1} & x _ {2} & x _ {3} & \dots & x _ {n} \\ a _ {1} & - a _ {2} & 0 & \dots & 0 \\ a _ {1} & 0 & - a _ {3} & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {1} & 0 & 0 & \dots & - a _ {n} \end{array} \right|.
$$

这是一个爪型行列式, 故由例 1.4 的结论可得

$$
| \boldsymbol {A} | = (- 1) ^ {n - 1} a _ {2} \dots a _ {n} \left(x _ {1} - a _ {1} + \sum_ {i = 2} ^ {n} \frac {a _ {1} x _ {i}}{a _ {i}}\right) = (- 1) ^ {n - 1} a _ {1} a _ {2} \dots a _ {n} \left(\sum_ {i = 1} ^ {n} \frac {x _ {i}}{a _ {i}} - 1\right). \square
$$

注 由例1.4的注可知, 去掉 $a_{i} \neq 0$ 的条件, 我们仍可求出

$$
| \boldsymbol {A} | = (- 1) ^ {n - 1} \sum_ {i = 1} ^ {n} a _ {1} \dots a _ {i - 1} x _ {i} a _ {i + 1} \dots a _ {n} + (- 1) ^ {n} a _ {1} a _ {2} \dots a _ {n}.
$$

例 1.5 也是一个有用的模板 (除了主对角元素外, 每行都一样), 利用它可以直接给出例 1.10、例 1.11 和例 1.37 的计算结果.

在某一行 (列) 元素零比较多时或在某些理论证明题中, 也可以按照某一行 (列) 直接进行展开.

例 1.6 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a & 0 & \dots & 0 & 1 \\ 0 & a & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & a & 0 \\ 1 & 0 & \dots & 0 & a \end{array} \right|.
$$

解 按第一列展开, 经计算可得

$$
| \boldsymbol {A} | = a ^ {n} + (- 1) ^ {n + 1} \left| \begin{array}{c c c c c} 0 & 0 & \dots & 0 & 1 \\ a & 0 & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & a & 0 \end{array} \right| = a ^ {n} - a ^ {n - 2}.
$$

本题也可以直接利用例 1.4 的注来得到结论. □

例 1.7 设 $|A| = |a_{ij}|$ 是一个 n 阶行列式, $A_{ij}$ 是它的第 $(i,j)$ 元素的代数余子式, 求证:

$$
\left| \begin{array}{c c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} & x _ {1} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ y _ {1} & y _ {2} & \dots & y _ {n} & z \end{array} \right| = z | \boldsymbol {A} | - \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} x _ {i} y _ {j}.
$$

证明 将上述行列式按最后一列展开, 展开式的第一项为

$$
(- 1) ^ {n + 2} x _ {1} \left| \begin{array}{c c c c} a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \\ y _ {1} & y _ {2} & \dots & y _ {n} \end{array} \right|.
$$

再将上面行列式按最后一行展开, 得到

$$
(- 1) ^ {n + 2} x _ {1} (- 1) ^ {n + 1} \left(y _ {1} A _ {1 1} + y _ {2} A _ {1 2} + \dots + y _ {n} A _ {1 n}\right) = - \sum_ {j = 1} ^ {n} x _ {1} y _ {j} A _ {1 j}.
$$

同理可得原行列式展开式的第 $i$ 项为 $-\sum_{j=1}^{n} x_i y_j A_{ij} (1 \leq i \leq n)$ , 而最后一项为 $z|A|$ , 因此原行列式的值为

$$
z | \boldsymbol {A} | - \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} x _ {i} y _ {j}. \square
$$

### § 1.3 求和法

求和法 若一个行列式各行 (各列) 的元素和相等, 则可以将这些行 (列) 的所有元素加起来, 提取公因子后得到元素 1, 然后再利用降阶法等方法对行列式进行求值.

例 1.8 设 $x_{1}, x_{2}, x_{3}$ 是方程 $x^{3} + px + q = 0$ 的 3 个根, 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c} x _ {1} & x _ {2} & x _ {3} \\ x _ {2} & x _ {3} & x _ {1} \\ x _ {3} & x _ {1} & x _ {2} \end{array} \right|.
$$

解 由 Vieta 定理可得 $x_{1} + x_{2} + x_{3} = 0$ ，将后两列都加到第一列上去，第一列变为零，因此 $|\mathbf{A}| = 0$ . □

例 1.9 设 $b_{ij}=(a_{i1}+a_{i2}+\cdots+a_{in})-a_{ij}$ ，求证：

$$
\left| \begin{array}{c c c} b _ {1 1} & \dots & b _ {1 n} \\ \vdots & & \vdots \\ b _ {n 1} & \dots & b _ {n n} \end{array} \right| = (- 1) ^ {n - 1} (n - 1) \left| \begin{array}{c c c} a _ {1 1} & \dots & a _ {1 n} \\ \vdots & & \vdots \\ a _ {n 1} & \dots & a _ {n n} \end{array} \right|.
$$

证明 将左边行列式的后 n-1 列都加到第一列上, 第一列变成 $(n-1)(a_{i1}+a_{i2}+\cdots+a_{in})(1\leq i\leq n)$ . 将 n-1 提出, 并将第一列乘以 -1 加到后面每一列上, 再将后 n-1 列都加到第一列上, 最后将后 n-1 列的 -1 提出即得结论. □

例1.10 计算 $n$ 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 0 & 1 & \dots & 1 & 1 \\ 1 & 0 & \dots & 1 & 1 \\ \vdots & \vdots & & \vdots & \vdots \\ 1 & 1 & \dots & 0 & 1 \\ 1 & 1 & \dots & 1 & 0 \end{array} \right|.
$$

解 从第二列起将每一列加到第一列上并提出公因子 $n - 1$ ，得到

$$
| \boldsymbol {A} | = (n - 1) \left| \begin{array}{c c c c c} 1 & 1 & \dots & 1 & 1 \\ 1 & 0 & \dots & 1 & 1 \\ \vdots & \vdots & & \vdots & \vdots \\ 1 & 1 & \dots & 0 & 1 \\ 1 & 1 & \dots & 1 & 0 \end{array} \right|.
$$

再将第一行乘以 -1 依次加到后面各行, 得到

$$
| \boldsymbol {A} | = (n - 1) \left| \begin{array}{c c c c c} 1 & 1 & \dots & 1 & 1 \\ 0 & - 1 & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & - 1 & 0 \\ 0 & 0 & \dots & 0 & - 1 \end{array} \right| = (- 1) ^ {n - 1} (n - 1). \square
$$

例 1.11 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a _ {1} + b & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {1} & a _ {2} + b & a _ {3} & \dots & a _ {n} \\ a _ {1} & a _ {2} & a _ {3} + b & \dots & a _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} + b \end{array} \right|.
$$

解 从第二列起将各列依次加到第一列上并提取公因子 $b + \sum_{i=1}^{n} a_i$ ，得到

$$
| \boldsymbol {A} | = (b + \sum_ {i = 1} ^ {n} a _ {i}) \left| \begin{array}{c c c c c} 1 & a _ {2} & a _ {3} & \dots & a _ {n} \\ 1 & a _ {2} + b & a _ {3} & \dots & a _ {n} \\ 1 & a _ {2} & a _ {3} + b & \dots & a _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & a _ {2} & a _ {3} & \dots & a _ {n} + b \end{array} \right|,
$$

再将第一行乘以 -1 依次加到后面每一行, 得到

$$
| \pmb {A} | = (b + \sum_ {i = 1} ^ {n} a _ {i}) b ^ {n - 1}. \square
$$

例 1.12 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c c} 1 & 2 & 3 & \dots & n - 1 & n \\ n & 1 & 2 & \dots & n - 2 & n - 1 \\ n - 1 & n & 1 & \dots & n - 3 & n - 2 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 3 & 4 & 5 & \dots & 1 & 2 \\ 2 & 3 & 4 & \dots & n & 1 \end{array} \right|.
$$

解 将后 $n - 1$ 列加到第一列, 提出公因子 $\frac{1}{2} n(n + 1)$ , 用第 (1,1) 元消去同列的其他元素, 再按第一列展开得到 $n - 1$ 阶行列式:

$$
| \boldsymbol {A} | = \frac {1}{2} n (n + 1) \left| \begin{array}{c c c c c c} 1 & 2 & 3 & \dots & n - 1 & n \\ 1 & 1 & 2 & \dots & n - 2 & n - 1 \\ 1 & n & 1 & \dots & n - 3 & n - 2 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 1 & 4 & 5 & \dots & 1 & 2 \\ 1 & 3 & 4 & \dots & n & 1 \end{array} \right|
$$

$$
= \frac {1}{2} n (n + 1) \left| \begin{array}{c c c c c c} 1 & 2 & 3 & \dots & n - 1 & n \\ 0 & - 1 & - 1 & \dots & - 1 & - 1 \\ 0 & n - 2 & - 2 & \dots & - 2 & - 2 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 2 & 2 & \dots & 2 - n & 2 - n \\ 0 & 1 & 1 & \dots & 1 & 1 - n \end{array} \right|
$$

$$
= \frac {1}{2} n (n + 1) \left| \begin{array}{c c c c c} - 1 & - 1 & \dots & - 1 & - 1 \\ n - 2 & - 2 & \dots & - 2 & - 2 \\ \vdots & \vdots & & \vdots & \vdots \\ 2 & 2 & \dots & 2 - n & 2 - n \\ 1 & 1 & \dots & 1 & 1 - n \end{array} \right|.
$$

用所得 $n - 1$ 阶行列式的第(1,1)元消去同行的其他元素, 再按第一行展开得到 $n - 2$ 阶上三角行列式:

$$
| \boldsymbol {A} | = \frac {1}{2} n (n + 1) \left| \begin{array}{c c c c c} - 1 & 0 & \dots & 0 & 0 \\ n - 2 & - n & \dots & - n & - n \\ \vdots & \vdots & & \vdots & \vdots \\ 2 & 0 & \dots & - n & - n \\ 1 & 0 & \dots & 0 & - n \end{array} \right|
$$

$$
= - \frac {1}{2} n (n + 1) \left| \begin{array}{c c c c} - n & \dots & - n & - n \\ & \ddots & \vdots & \vdots \\ & & - n & - n \\ & & & - n \end{array} \right| = (- 1) ^ {n - 1} \frac {n + 1}{2} n ^ {n - 1}. \square
$$

### § 1.4 递推法与数学归纳法

递推法 按行或列展开行列式, 比较原行列式和降阶后行列式的异同, 找出递推关系. 如降阶一次仍看不出关系, 可再降一次试试. 从递推式求通式往往需要一定的技巧, 读者可细心体会之.

注 为了方便从递推式求通式, 我们可以递归地定义 $n (n \geq 0)$ 阶行列式的值. 定义 0 阶行列式的值等于 1. 假设 $n - 1$ 阶行列式的值已定义好, 则 $n$ 阶行列式 $|\mathbf{A}|$ 的值定义为

$$
\left| \boldsymbol {A} \right| = a _ {1 1} M _ {1 1} - a _ {2 1} M _ {2 1} + \dots + (- 1) ^ {n + 1} a _ {n 1} M _ {n 1},
$$

其中 $M_{i1}$ 是第 $(i,1)$ 元 $a_{i1}$ 的余子式. 显然, 1 阶行列式 $|a_{11}| = a_{11}M_{11} = a_{11}$ . 因此上述定义相容于 §§ 1.1.1 中 $n (n \geq 1)$ 阶行列式值的递归定义, 这也说明: 0 阶行列式的值定义为 1 是合理的.

例 1.13 (三对角行列式) 求下列行列式的递推关系式 (空白处均为 0):

$$
D _ {n} = \left| \begin{array}{c c c c c c c} a _ {1} & b _ {1} & & & & & \\ c _ {1} & a _ {2} & b _ {2} & & & & \\ & c _ {2} & a _ {3} & \ddots & & & \\ & & \ddots & \ddots & \ddots & & \\ & & & \ddots & a _ {n - 1} & b _ {n - 1} \\ & & & & c _ {n - 1} & a _ {n} \end{array} \right|.
$$

解 当 $n \geq 2$ 时, 注意到 $a_{n}$ 的余子式是 $D_{n-1}, b_{n-1}$ 的余子式中 $c_{n-1}$ 的余子式是 $D_{n-2}$ , 故 $D_{n}$ 按最后一列进行展开可得

$$
D _ {n} = a _ {n} D _ {n - 1} - b _ {n - 1} c _ {n - 1} D _ {n - 2} (n \geq 2), D _ {0} = 1, D _ {1} = a _ {1}. \square
$$

注 令 $b_{1} = \cdots = b_{n - 1} = 1, c_{1} = \cdots = c_{n - 1} = -1$ , 则行列式 $D_{n}$ 与连分数密切相关 (参考解答题8). 进一步, 令 $a_{1} = \cdots = a_{n} = 1$ , 则行列式 $D_{n}$ 满足:

$$
D _ {n} = D _ {n - 1} + D _ {n - 2} (n \geq 2), D _ {0} = 1, D _ {1} = 1,
$$

这就是著名的 Fibonacci 数列.

例 1.14 计算 n 阶行列式 $(bc \neq 0)$ :

$$
D _ {n} = \left| \begin{array}{c c c c c c c} a & b & & & & & \\ c & a & b & & & & \\ & c & a & b & & & \\ & & \ddots & \ddots & \ddots & & \\ & & & c & a & b \\ & & & & c & a \end{array} \right|.
$$

解 由例1.13可知递推式为 $D_{n} = aD_{n - 1} - bcD_{n - 2}(n\geq 2)$ .为方便后面计算通项，可由 $D_0 = 1,D_1 = a$ 解出 $D_{-1} = 0.$ 令 $a = \alpha +\beta ,bc = \alpha \beta$ ，则

$$
D _ {n} - \alpha D _ {n - 1} = \beta (D _ {n - 1} - \alpha D _ {n - 2}), D _ {n} - \beta D _ {n - 1} = \alpha (D _ {n - 1} - \beta D _ {n - 2}).
$$

于是

$$
D _ {n} - \alpha D _ {n - 1} = \beta^ {n}, D _ {n} - \beta D _ {n - 1} = \alpha^ {n}.
$$

因此, 若 $a^2 \neq 4bc$ (即 $\alpha \neq \beta$ ), 则

$$
D _ {n} = \frac {\alpha^ {n + 1} - \beta^ {n + 1}}{\alpha - \beta};
$$

若 $a^2 = 4bc$ （即 $\alpha = \beta$ ），则

$$
D _ {n} = (n + 1) \left(\frac {a}{2}\right) ^ {n}. \square
$$

注 对由递推式决定的数列如何求其通项一般来说并不容易, 如果在递推式中系数为常数, 我们将有一个统一的方法来处理, 参考例 6.54.

例1.15 求证： $n$ 阶行列式

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c c c c} \cos x & 1 & 0 & 0 & \dots & 0 & 0 & 0 \\ 1 & 2 \cos x & 1 & 0 & \dots & 0 & 0 & 0 \\ 0 & 1 & 2 \cos x & 1 & \dots & 0 & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & 1 & 2 \cos x & 1 \\ 0 & 0 & 0 & 0 & \dots & 0 & 1 & 2 \cos x \end{array} \right| = \cos n x.
$$

证明 由行列式的性质 6, 将 $|A|$ 的第一列进行拆分, 可得

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c c c c} 2 \cos x & 1 & 0 & 0 & \dots & 0 & 0 & 0 \\ 1 & 2 \cos x & 1 & 0 & \dots & 0 & 0 & 0 \\ 0 & 1 & 2 \cos x & 1 & \dots & 0 & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & 1 & 2 \cos x & 1 \\ 0 & 0 & 0 & 0 & \dots & 0 & 1 & 2 \cos x \end{array} \right|
$$

$$
- \left| \begin{array}{c c c c c c c c} \cos x & 1 & 0 & 0 & \dots & 0 & 0 & 0 \\ 0 & 2 \cos x & 1 & 0 & \dots & 0 & 0 & 0 \\ 0 & 1 & 2 \cos x & 1 & \dots & 0 & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & 1 & 2 \cos x & 1 \\ 0 & 0 & 0 & 0 & \dots & 0 & 1 & 2 \cos x \end{array} \right|
$$

$$
= D _ {n} - \cos x D _ {n - 1},
$$

其中 $D_{n}$ 是形如例1.14的行列式, 其中 $a = 2\cos x, b = c = 1$ . 根据例1.14的结论, 可以事先解出: $\alpha = \cos x + \mathrm{i}\sin x, \beta = \cos x - \mathrm{i}\sin x$ .

若 $x \neq k\pi (k \in \mathbb{Z})$ ，则 $\alpha \neq \beta$ ，从而

$$
\begin{array}{l} D _ {n} = \frac {\alpha^ {n + 1} - \beta^ {n + 1}}{\alpha - \beta} \\ = \frac {(\cos (n + 1) x + \mathrm{i} \sin (n + 1) x) - (\cos (n + 1) x - \mathrm{i} \sin (n + 1) x)}{(\cos x + \mathrm{i} \sin x) - (\cos x - \mathrm{i} \sin x)} \\ = \frac {\sin (n + 1) x}{\sin x}, \\ | \boldsymbol {A} | = D _ {n} - \cos x D _ {n - 1} = \frac {\sin (n + 1) x - \cos x \sin n x}{\sin x} \\ = \cos n x. \\ \end{array}
$$

若 $x = k\pi (k\in \mathbb{Z})$ ，则 $\alpha = \beta$ ，从而

$$
\begin{array}{l} D _ {n} = (n + 1) \left(\frac {a}{2}\right) ^ {n} = (n + 1) (\cos x) ^ {n} = (n + 1) (- 1) ^ {k n}, \\ | \boldsymbol {A} | = D _ {n} - \cos x D _ {n - 1} = (n + 1) (- 1) ^ {k n} - (- 1) ^ {k} n (- 1) ^ {k (n - 1)} \\ = (- 1) ^ {k n} = \cos n x. \square \\ \end{array}
$$

例 1.16 计算 n 阶行列式:

$$
D _ {n} = \left| \begin{array}{c c c c c c} x _ {1} & y & y & \dots & y & y \\ z & x _ {2} & y & \dots & y & y \\ z & z & x _ {3} & \dots & y & y \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ z & z & z & \dots & x _ {n - 1} & y \\ z & z & z & \dots & z & x _ {n} \end{array} \right|.
$$

解 对第 n 列进行拆分即可得到递推公式:

$$
D _ {n} = \left| \begin{array}{c c c c c c} x _ {1} & y & y & \dots & y & y + 0 \\ z & x _ {2} & y & \dots & y & y + 0 \\ z & z & x _ {3} & \dots & y & y + 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ z & z & z & \dots & x _ {n - 1} & y + 0 \\ z & z & z & \dots & z & y + x _ {n} - y \end{array} \right|
$$

$$
= \left| \begin{array}{c c c c c c} x _ {1} & y & y & \dots & y & y \\ z & x _ {2} & y & \dots & y & y \\ z & z & x _ {3} & \dots & y & y \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ z & z & z & \dots & x _ {n - 1} & y \\ z & z & z & \dots & z & y \end{array} \right| + \left| \begin{array}{c c c c c c} x _ {1} & y & y & \dots & y & 0 \\ z & x _ {2} & y & \dots & y & 0 \\ z & z & x _ {3} & \dots & y & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ z & z & z & \dots & x _ {n - 1} & 0 \\ z & z & z & \dots & z & x _ {n} - y \end{array} \right|
$$

$$
= \left| \begin{array}{c c c c c c} x _ {1} - z & y - z & y - z & \dots & y - z & 0 \\ 0 & x _ {2} - z & y - z & \dots & y - z & 0 \\ 0 & 0 & x _ {3} - z & \dots & y - z & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & x _ {n - 1} - z & 0 \\ z & z & z & \dots & z & y \end{array} \right| + (x _ {n} - y) D _ {n - 1}
$$

$$
= (x _ {n} - y) D _ {n - 1} + y \prod_ {i = 1} ^ {n - 1} (x _ {i} - z).
$$

同理 (转置) 有

$$
D _ {n} = (x _ {n} - z) D _ {n - 1} + z \prod_ {i = 1} ^ {n - 1} (x _ {i} - y).
$$

若 $y \neq z$ ，解得

$$
D _ {n} = \frac {1}{z - y} \left[ z \prod_ {i = 1} ^ {n} (x _ {i} - y) - y \prod_ {i = 1} ^ {n} (x _ {i} - z) \right];
$$

若 $y = z$ ，由递推可得

$$
D _ {n} = \prod_ {i = 1} ^ {n} (x _ {i} - y) + y \sum_ {i = 1} ^ {n} \prod_ {j \neq i} (x _ {j} - y). \square
$$

例 1.17 求下列 n 阶行列式的值:

$$
D _ {n} = \left| \begin{array}{c c c c c c c} 1 - a _ {1} & a _ {2} & 0 & 0 & \dots & 0 & 0 \\ - 1 & 1 - a _ {2} & a _ {3} & 0 & \dots & 0 & 0 \\ 0 & - 1 & 1 - a _ {3} & a _ {4} & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & - 1 & 1 - a _ {n} \end{array} \right|.
$$

解 将所有行加到第一行上, 再按第一行展开可得 $D_{n} = -a_{1} D_{n-1} + 1$ , 这里 $D_{n-i}$ 表示以 $a_{i+1}, \cdots, a_{n}$ 为未定元的 $n-i$ 阶行列式. 由递推不难得到

$$
D _ {n} = 1 - a _ {1} + a _ {1} a _ {2} - a _ {1} a _ {2} a _ {3} + \dots + (- 1) ^ {n} a _ {1} a _ {2} \dots a _ {n}. \square
$$

例 1.18 (Cauchy 行列式) 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} (a _ {1} + b _ {1}) ^ {- 1} & (a _ {1} + b _ {2}) ^ {- 1} & \dots & (a _ {1} + b _ {n}) ^ {- 1} \\ (a _ {2} + b _ {1}) ^ {- 1} & (a _ {2} + b _ {2}) ^ {- 1} & \dots & (a _ {2} + b _ {n}) ^ {- 1} \\ \vdots & \vdots & & \vdots \\ (a _ {n} + b _ {1}) ^ {- 1} & (a _ {n} + b _ {2}) ^ {- 1} & \dots & (a _ {n} + b _ {n}) ^ {- 1} \end{array} \right|.
$$

解 记 $|\mathbf{A}|$ 为 $D_{n}$ , 我们来求 $D_{n}$ 与 $D_{n-1}$ 之间的递推公式. 注意下面计算中的第一步是将行列式的前 $n-1$ 列每列都减去第 $n$ 列; 第三步是将行列式的前 $n-1$ 行每行都减去第 $n$ 行; 第二步和第四步都是提取公因式.

$$
D _ {n} = \left| \begin{array}{c c c c} \frac {1}{a _ {1} + b _ {1}} & \dots & \frac {1}{a _ {1} + b _ {n - 1}} & \frac {1}{a _ {1} + b _ {n}} \\ \vdots & & \vdots & \vdots \\ 1 & & 1 & 1 \\ \hline a _ {n - 1} + b _ {1} & \dots & \frac {a _ {n - 1} + b _ {n - 1}}{a _ {n - 1} + b _ {n - 1}} & \frac {a _ {n - 1} + b _ {n}}{a _ {n - 1} + b _ {n}} \\ \frac {1}{a _ {n} + b _ {1}} & \dots & \frac {1}{a _ {n} + b _ {n - 1}} & \frac {1}{a _ {n} + b _ {n}} \end{array} \right|
$$

$$
= \left| \begin{array}{c c c c} \frac {b _ {n} - b _ {1}}{(a _ {1} + b _ {1}) (a _ {1} + b _ {n})} & \dots & \frac {b _ {n} - b _ {n - 1}}{(a _ {1} + b _ {n - 1}) (a _ {1} + b _ {n})} & \frac {1}{a _ {1} + b _ {n}} \\ \vdots & & \vdots & \vdots \\ b _ {n} - b _ {1} & & b _ {n} - b _ {n - 1} & 1 \\ \hline (a _ {n - 1} + b _ {1}) (a _ {n - 1} + b _ {n}) & \dots & (\textit {a n - 1} + b _ {n - 1}) (a _ {n - 1} + b _ {n}) & \frac {\textit {a n - 1} + b _ {n}}{\textit {a n - 1} + b _ {n}} \\ \frac {b _ {n} - b _ {1}}{(a _ {n} + b _ {1}) (a _ {n} + b _ {n})} & \dots & \frac {\textit {b n} - \textit {b n - 1}}{(a _ {n} + b _ {n - 1}) (a _ {n} + b _ {n})} & \frac {1}{\textit {a n} + b _ {n}} \end{array} \right|
$$

$$
= \frac {\prod_ {i = 1} ^ {n - 1} (b _ {n} - b _ {i})}{\prod_ {j = 1} ^ {n} (a _ {j} + b _ {n})}. \left| \begin{array}{c c c c} \frac {1}{a _ {1} + b _ {1}} & \dots & \frac {1}{a _ {1} + b _ {n - 1}} & 1 \\ \vdots & & \vdots & \vdots \\ \frac {1}{a _ {n - 1} + b _ {1}} & \dots & \frac {1}{a _ {n - 1} + b _ {n - 1}} & 1 \\ \frac {1}{a _ {n} + b _ {1}} & \dots & \frac {1}{a _ {n} + b _ {n - 1}} & 1 \end{array} \right|
$$

$$
= \left. \frac {\prod_ {i = 1} ^ {n - 1} (b _ {n} - b _ {i})}{\prod_ {j = 1} ^ {n} (a _ {j} + b _ {n})}. \left| \begin{array}{c c c c} \frac {a _ {n} - a _ {1}}{(a _ {1} + b _ {1}) (a _ {n} + b _ {1})} & \dots & \frac {a _ {n} - a _ {1}}{(a _ {1} + b _ {n - 1}) (a _ {n} + b _ {n - 1})} & 0 \\ \vdots & & \vdots & \vdots \\ \frac {a _ {n} - a _ {n - 1}}{(a _ {n - 1} + b _ {1}) (a _ {n} + b _ {1})} & \dots & \frac {a _ {n} - a _ {n - 1}}{(a _ {n - 1} + b _ {n - 1}) (a _ {n} + b _ {n - 1})} & 0 \\ \frac {1}{a _ {n} + b _ {1}} & \dots & \frac {1}{a _ {n} + b _ {n - 1}} & 1 \end{array} \right| \right.
$$

$$
= \frac {\prod_ {i = 1} ^ {n - 1} \left(a _ {n} - a _ {i}\right) \left(b _ {n} - b _ {i}\right)}{\prod_ {j = 1} ^ {n} \left(a _ {j} + b _ {n}\right) \prod_ {k = 1} ^ {n - 1} \left(a _ {n} + b _ {k}\right)}. \left| \begin{array}{c c c} \frac {1}{a _ {1} + b _ {1}} & \dots & \frac {1}{a _ {1} + b _ {n - 1}} \\ \vdots & & \vdots \\ 1 & & 1 \\ \hline a _ {n - 1} + b _ {1} & \dots & \frac {}{a _ {n - 1} + b _ {n - 1}} \end{array} \right|
$$

$$
= \frac {\prod_ {i = 1} ^ {n - 1} \left(a _ {n} - a _ {i}\right) \left(b _ {n} - b _ {i}\right)}{\prod_ {j = 1} ^ {n} \left(a _ {j} + b _ {n}\right) \prod_ {k = 1} ^ {n - 1} \left(a _ {n} + b _ {k}\right)} \cdot D _ {n - 1}.
$$

不断递推下去即得

$$
| \boldsymbol {A} | = \prod_ {1 \leq i <   j \leq n} (a _ {j} - a _ {i}) (b _ {j} - b _ {i}) / \prod_ {i, j = 1} ^ {n} (a _ {i} + b _ {j}). \square
$$

数学归纳法 本质上也是一种递推法, 但须事先知道结论. 因此有时可以先猜出结论, 然后再归纳地证明它.

例1.19 设 $n$ 阶行列式

$$
A _ {n} = \left| \begin{array}{c c c c c c c} a _ {0} + a _ {1} & a _ {1} & 0 & 0 & \dots & 0 & 0 \\ a _ {1} & a _ {1} + a _ {2} & a _ {2} & 0 & \dots & 0 & 0 \\ 0 & a _ {2} & a _ {2} + a _ {3} & a _ {3} & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & a _ {n - 1} & a _ {n - 1} + a _ {n} \end{array} \right|,
$$

求证:

$$
A _ {n} = a _ {0} a _ {1} \dots a _ {n} \left(\frac {1}{a _ {0}} + \frac {1}{a _ {1}} + \dots + \frac {1}{a _ {n}}\right).
$$

证明 对阶数 $n$ 进行归纳, $n = 1,2$ 时结论显然成立. 假设阶数小于 $n$ 时结论成立, 现证明 $n$ 阶的情形. 由例1.13可知递推式为 $A_{n} = (a_{n - 1} + a_{n})A_{n - 1} - a_{n - 1}^{2}A_{n - 2}$ , 将归纳假设代入上面的式子即得结论. $\square$ 

例 1.15 的证法 2 对阶数 n 进行归纳, n = 1, 2 时结论显然成立. 假设阶数小于 n 时结论成立, 现证明 n 阶的情形. 由例 1.13 可知递推式为 $A_{n} = 2 \cos x A_{n-1} - A_{n-2}$ , 将归纳假设代入上面的式子即得结论. □

例 1.17 的解法 2 假设我们已经知道了结论, 现对阶数 n 进行归纳, n = 1, 2 时结论显然成立. 假设阶数小于 n 时结论成立, 现证明 n 阶的情形. 由例 1.13 可知递推式为 $D_{n} = (1 - a_{n})D_{n-1} + a_{n}D_{n-2} = D_{n-1} - a_{n}(D_{n-1} - D_{n-2})$ , 这里 $D_{n-i}$ 表示以 $a_{1}, \cdots, a_{n-i}$ 为未定元的 n-i 阶行列式, 将归纳假设代入上面的式子即得结论. □

例 1.20 设 $n(n > 2)$ 阶行列式 $|A|$ 的所有元素或为 1 或为 -1, 求证: $|A|$ 的绝对值小于等于 $\frac{2}{3}n!$ .

证明 对阶数 $n$ 进行归纳. 当 $n = 3$ 时, 将 $|\mathbf{A}|$ 的第一列中元素等于 -1 的行乘以 -1, $|\mathbf{A}|$ 的绝对值不变, 因此不妨设 $|\mathbf{A}|$ 的第一列元素全是 1. 用同样方法将 $|\mathbf{A}|$ 的第一行除 (1,1) 元素外的元素全变成 -1. 将第一列加到第二、第三列上, 可得

$$
\operatorname{abs} (| \boldsymbol {A} |) = \operatorname{abs} \left(\left| \begin{array}{c c c} 1 & 0 & 0 \\ 1 & a & b \\ 1 & c & d \end{array} \right|\right),
$$

其中 abs 表示绝对值. 由于 a, b, c, d 为 0 或 2, 故 $\mathrm{abs}(|\boldsymbol{A}|) = \mathrm{abs}(ad - bc) \leq 4 = \frac{2}{3}3!$ .
假设 n-1 阶时结论成立, 现证 n 阶的情形. 将 $|A|$ 按第一行展开:

$$
\left| \boldsymbol {A} \right| = a _ {1 1} A _ {1 1} + a _ {1 2} A _ {1 2} + \dots + a _ {1 n} A _ {1 n}.
$$

因为 $a_{1i} = \pm 1$ ，故

$$
\begin{array}{l} \operatorname{abs} (| \boldsymbol {A} |) \leq \operatorname{abs} \left(A _ {1 1}\right) + \operatorname{abs} \left(A _ {1 2}\right) + \dots + \operatorname{abs} \left(A _ {1 n}\right) \\ \leq n \cdot \frac {2}{3} (n - 1)! = \frac {2}{3} n!. \square \\ \end{array}
$$

例 1.21 设 $f_{ij}(t)$ 是可微函数,

$$
F (t) = \left| \begin{array}{c c c c} f _ {1 1} (t) & f _ {1 2} (t) & \dots & f _ {1 n} (t) \\ f _ {2 1} (t) & f _ {2 2} (t) & \dots & f _ {2 n} (t) \\ \vdots & \vdots & & \vdots \\ f _ {n 1} (t) & f _ {n 2} (t) & \dots & f _ {n n} (t) \end{array} \right|,
$$

求证: $\frac{\mathrm{d}}{\mathrm{d}t} F(t) = \sum_{j=1}^{n} F_j(t)$ , 其中

$$
F _ {j} (t) = \left| \begin{array}{c c c c c c} f _ {1 1} (t) & f _ {1 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {1 j} (t) & \dots & f _ {1 n} (t) \\ f _ {2 1} (t) & f _ {2 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {2 j} (t) & \dots & f _ {2 n} (t) \\ \vdots & \vdots & & \vdots & & \vdots \\ f _ {n 1} (t) & f _ {n 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {n j} (t) & \dots & f _ {n n} (t) \end{array} \right|.
$$

证明 对阶数 $n$ 进行归纳, $n = 1$ 时显然成立. 设结论对 $n - 1$ 阶行列式成立, 现证 $n$ 阶行列式的情形. 将 $F(t)$ 按第一列展开:

$$
F (t) = f _ {1 1} (t) A _ {1 1} (t) + f _ {2 1} (t) A _ {2 1} (t) + \dots + f _ {n 1} (t) A _ {n 1} (t),
$$

其中 $A_{i1}(t)$ 是元素 $f_{i1}(t)$ 的代数余子式. 对上式两边求导数并记 $A_{ij}^{k}(t)$ 为对 $A_{ij}(t)$ 的第 $k$ 列元素求导数后得到的行列式, 则

$$
\begin{array}{l} \frac {\mathrm{d}}{\mathrm{d} t} F (t) = \frac {\mathrm{d}}{\mathrm{d} t} \left(\sum_ {i = 1} ^ {n} f _ {i 1} (t) A _ {i 1} (t)\right) = \sum_ {i = 1} ^ {n} f _ {i 1} ^ {\prime} (t) A _ {i 1} (t) + \sum_ {i = 1} ^ {n} f _ {i 1} (t) A _ {i 1} ^ {\prime} (t) \\ = F _ {1} (t) + \sum_ {i = 1} ^ {n} f _ {i 1} (t) \left(\sum_ {k = 1} ^ {n - 1} A _ {i 1} ^ {k} (t)\right) = F _ {1} (t) + \sum_ {k = 1} ^ {n - 1} \sum_ {i = 1} ^ {n} f _ {i 1} (t) A _ {i 1} ^ {k} (t). \\ \end{array}
$$

由行列式的定义可知 $\sum_{i=1}^{n} f_{i1}(t) A_{i1}^k(t) = F_{k+1}(t) (1 \leq k \leq n-1)$ , 故

$$
\frac {\mathrm{d}}{\mathrm{d} t} F (t) = F _ {1} (t) + F _ {2} (t) + \dots + F _ {n} (t). \square
$$

### § 1.5 拆分法

拆分法 利用行列式的性质 6 可将一个行列式拆分为两个或多个行列式之和来计算. 合理地运用拆分法会起到很好的化简效果. 比如在例 1.16 中, 我们就用拆分法得到了递推式. 例 1.22 是运用拆分法的一个典型例子, 也是一个重要的模板, 在后面的例题中有众多的应用.

例 1.22 设 t 是一个参数,

$$
| \boldsymbol {A} (t) | = \left| \begin{array}{c c c c} a _ {1 1} + t & a _ {1 2} + t & \dots & a _ {1 n} + t \\ a _ {2 1} + t & a _ {2 2} + t & \dots & a _ {2 n} + t \\ \vdots & \vdots & & \vdots \\ a _ {n 1} + t & a _ {n 2} + t & \dots & a _ {n n} + t \end{array} \right|,
$$

求证:

$$
| \boldsymbol {A} (t) | = | \boldsymbol {A} (0) | + t \sum_ {i, j = 1} ^ {n} A _ {i j},
$$

其中 $A_{ij}$ 是 $a_{ij}$ 在 $|A(0)|$ 中的代数余子式.

证明 将行列式的第一列拆成两列再展开:

$$
| \boldsymbol {A} (t) | = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} + t & \dots & a _ {1 n} + t \\ a _ {2 1} & a _ {2 2} + t & \dots & a _ {2 n} + t \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} + t & \dots & a _ {n n} + t \end{array} \right| + \left| \begin{array}{c c c c} t & a _ {1 2} + t & \dots & a _ {1 n} + t \\ t & a _ {2 2} + t & \dots & a _ {2 n} + t \\ \vdots & \vdots & & \vdots \\ t & a _ {n 2} + t & \dots & a _ {n n} + t \end{array} \right|.
$$

上式右边的第二个行列式用 -1 乘以第一列加到后面的列上去, 得到:

$$
\left| \begin{array}{c c c c} t & a _ {1 2} & \dots & a _ {1 n} \\ t & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ t & a _ {n 2} & \dots & a _ {n n} \end{array} \right| = t (A _ {1 1} + A _ {2 1} + \dots + A _ {n 1}).
$$

再对另一个行列式的第二列拆成两列展开, 不断这样做下去就可得到结论. □

注 用上面的方法不难证明更一般的结论.

推论 设

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|,
$$

则

$$
| \boldsymbol {A} (t _ {1}, t _ {2}, \dots , t _ {n}) | = \left| \begin{array}{c c c c} a _ {1 1} + t _ {1} & a _ {1 2} + t _ {2} & \dots & a _ {1 n} + t _ {n} \\ a _ {2 1} + t _ {1} & a _ {2 2} + t _ {2} & \dots & a _ {2 n} + t _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} + t _ {1} & a _ {n 2} + t _ {2} & \dots & a _ {n n} + t _ {n} \end{array} \right| = | \boldsymbol {A} | + \sum_ {j = 1} ^ {n} \left(t _ {j} \sum_ {i = 1} ^ {n} A _ {i j}\right).
$$

我们将用上面例题的结论来计算下面的行列式. 虽然这个行列式可以直接套用例 1.16 的结论, 但是下面的方法仍具有一定的启发性.

例 1.23 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} a & b & \dots & b \\ c & a & \dots & b \\ \vdots & \vdots & & \vdots \\ c & c & \dots & a \end{array} \right|.
$$

解令

$$
| \boldsymbol {A} (t) | = \left| \begin{array}{c c c c} a + t & b + t & \dots & b + t \\ c + t & a + t & \dots & b + t \\ \vdots & \vdots & & \vdots \\ c + t & c + t & \dots & a + t \end{array} \right| = | \boldsymbol {A} | + t u, \quad u = \sum_ {i, j = 1} ^ {n} A _ {i j}.
$$

注意 u 和 t 无关. 当 t = -b 时, 可得

$$
| \boldsymbol {A} (- b) | = \left| \begin{array}{c c c c} a - b & 0 & \dots & 0 \\ c - b & a - b & \dots & 0 \\ \vdots & \vdots & & \vdots \\ c - b & c - b & \dots & a - b \end{array} \right| = | \boldsymbol {A} | - b u = (a - b) ^ {n}.
$$

同理, 当 $t = -c$ 时, $|\mathbf{A}(-c)| = |\mathbf{A}| - cu = (a - c)^n$ . 若 $b \neq c$ , 消去 $u$ 可得

$$
| \boldsymbol {A} | = \frac {b (a - c) ^ {n} - c (a - b) ^ {n}}{b - c}.
$$

若 $b = c$ ，这是一个各行和相等的行列式，用求和法可得

$$
| \boldsymbol {A} | = (a + (n - 1) b) (a - b) ^ {n - 1}. \square
$$

例 1.24 设 $f_{1}(x)$ , $f_{2}(x)$ , $\cdots$ , $f_{n}(x)$ 是次数不超过 n-2 的多项式, 求证: 对任意 n 个数 $a_{1}, a_{2}, \cdots, a_{n}$ , 均有

$$
\left| \begin{array}{c c c c} f _ {1} (a _ {1}) & f _ {2} (a _ {1}) & \dots & f _ {n} (a _ {1}) \\ f _ {1} (a _ {2}) & f _ {2} (a _ {2}) & \dots & f _ {n} (a _ {2}) \\ \vdots & \vdots & & \vdots \\ f _ {1} (a _ {n}) & f _ {2} (a _ {n}) & \dots & f _ {n} (a _ {n}) \end{array} \right| = 0.
$$

证明 因为 $f_{k}(x)(1 \leq k \leq n)$ 的次数不超过 n - 2，所以它们都是单项式 $1, x, \cdots, x^{n-2}$ 的线性组合。将原行列式中每一列的多项式都按这 n - 1 个单项式进行拆分，最后得到若干个简单行列式之和，这些行列式中每一列的多项式只是单项式。由于行列式有 n 列，根据抽屉原理，至少有两列是共用同一个单项式（可能相差一个系数），于是这两列成比例，从而所有这样的简单行列式都等于零，因此原行列式也等于零。☐

例 1.25 求下列 n 阶行列式的值:

$$
D _ {n} = \left| \begin{array}{c c c c} 1 + a _ {1} ^ {2} & a _ {1} a _ {2} & \dots & a _ {1} a _ {n} \\ a _ {2} a _ {1} & 1 + a _ {2} ^ {2} & \dots & a _ {2} a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} & a _ {n} a _ {2} & \dots & 1 + a _ {n} ^ {2} \end{array} \right|.
$$

解 对第 $n$ 列进行拆分, 可得

$$
D _ {n} = \left| \begin{array}{c c c c} 1 + a _ {1} ^ {2} & a _ {1} a _ {2} & \dots & 0 \\ a _ {2} a _ {1} & 1 + a _ {2} ^ {2} & \dots & 0 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} & a _ {n} a _ {2} & \dots & 1 \end{array} \right| + \left| \begin{array}{c c c c} 1 + a _ {1} ^ {2} & a _ {1} a _ {2} & \dots & a _ {1} a _ {n} \\ a _ {2} a _ {1} & 1 + a _ {2} ^ {2} & \dots & a _ {2} a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} & a _ {n} a _ {2} & \dots & a _ {n} ^ {2} \end{array} \right|.
$$

上式右边第一个行列式等于 $D_{n - 1}$ .若 $a_{n}\neq 0$ ，则第二个行列式的第 $\pmb{n}$ 列可消去前面 $n - 1$ 列成比例的部分，由此可得

$$
D _ {n} = D _ {n - 1} + \left| \begin{array}{c c c c} 1 & 0 & \dots & a _ {1} a _ {n} \\ 0 & 1 & \dots & a _ {2} a _ {n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & a _ {n} ^ {2} \end{array} \right| = D _ {n - 1} + a _ {n} ^ {2}.
$$

若 $a_{n} = 0$ ，则第二个行列式等于零，上述递推式仍然成立.最后由递推式易得

$$
D _ {n} = 1 + \sum_ {i = 1} ^ {n} a _ {i} ^ {2}. \square
$$

### § 1.6 Vandermonde 行列式

Vandermonde 行列式不仅是一个常见模板, 而且在后续章节中有重要的应用. 下面是几个相关的例子, 其中的行列式都可以归结为 Vandermonde 行列式来计算, 但通常需要一定的技巧, 读者也许可从中得到某些启发.

例 1.26 计算下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} a _ {1} ^ {n - 1} & a _ {1} ^ {n - 2} b _ {1} & \dots & a _ {1} b _ {1} ^ {n - 2} & b _ {1} ^ {n - 1} \\ a _ {2} ^ {n - 1} & a _ {2} ^ {n - 2} b _ {2} & \dots & a _ {2} b _ {2} ^ {n - 2} & b _ {2} ^ {n - 1} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n} ^ {n - 1} & a _ {n} ^ {n - 2} b _ {n} & \dots & a _ {n} b _ {n} ^ {n - 2} & b _ {n} ^ {n - 1} \end{array} \right|.
$$

解 若所有的 $a_{i}$ 都不为零, 则从第 $i$ 行提出公因子 $a_{i}^{n - 1}(1\leq i\leq n)$ , 得到的行列式是一个Vandermonde行列式, 因此原行列式的值为

$$
| \boldsymbol {A} | = \prod_ {i = 1} ^ {n} a _ {i} ^ {n - 1} \cdot \prod_ {1 \leq i <   j \leq n} \left(\frac {b _ {j}}{a _ {j}} - \frac {b _ {i}}{a _ {i}}\right) = \prod_ {1 \leq i <   j \leq n} (a _ {i} b _ {j} - a _ {j} b _ {i}).
$$

若只有一个 $a_{i} = 0$ , 则按第 $i$ 行进行展开, 得到的行列式是具有相同类型的 $n - 1$ 阶行列式. 若至少有两个 $a_{i} = a_{j} = 0$ , 则第 $i$ 行与第 $j$ 行成比例, 因此行列式的值等于零. 经过简单的计算发现, 后面两种情形的答案都可以统一到第一种情形的答案. $\square$ 

例 1.27 设 $f_{k}(x)=x^{k}+a_{k1}x^{k-1}+a_{k2}x^{k-2}+\cdots+a_{kk}$ ，求下列行列式的值：

$$
\left| \begin{array}{c c c c c} 1 & f _ {1} (x _ {1}) & f _ {2} (x _ {1}) & \dots & f _ {n - 1} (x _ {1}) \\ 1 & f _ {1} (x _ {2}) & f _ {2} (x _ {2}) & \dots & f _ {n - 1} (x _ {2}) \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & f _ {1} (x _ {n}) & f _ {2} (x _ {n}) & \dots & f _ {n - 1} (x _ {n}) \end{array} \right|.
$$

解 将原行列式写为

$$
\left| \begin{array}{c c c c c} 1 & x _ {1} + a _ {1 1} & x _ {1} ^ {2} + a _ {2 1} x _ {1} + a _ {2 2} & \dots & f _ {n - 1} (x _ {1}) \\ 1 & x _ {2} + a _ {1 1} & x _ {2} ^ {2} + a _ {2 1} x _ {2} + a _ {2 2} & \dots & f _ {n - 1} (x _ {2}) \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} + a _ {1 1} & x _ {n} ^ {2} + a _ {2 1} x _ {n} + a _ {2 2} & \dots & f _ {n - 1} (x _ {n}) \end{array} \right|.
$$

显然, 利用行列式的性质, 可将每一列消去除最高次项外的其他项, 从而得到一个 Vandermonde 行列式, 因此行列式的值为 $\prod_{1 \leq i < j \leq n} (x_j - x_i)$ . $\square$ 

例 1.28 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 1 & \cos \theta_ {1} & \cos 2 \theta_ {1} & \dots & \cos (n - 1) \theta_ {1} \\ 1 & \cos \theta_ {2} & \cos 2 \theta_ {2} & \dots & \cos (n - 1) \theta_ {2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & \cos \theta_ {n} & \cos 2 \theta_ {n} & \dots & \cos (n - 1) \theta_ {n} \end{array} \right|.
$$

解 由 De Moivre 公式及二项式定理可得

$$
\begin{array}{l} \cos k \theta + \mathrm{i} \sin k \theta = (\cos \theta + \mathrm{i} \sin \theta) ^ {k} \\ = \cos^ {k} \theta + \mathrm{iC} _ {k} ^ {1} \cos^ {k - 1} \theta \sin \theta - \mathrm{C} _ {k} ^ {2} \cos^ {k - 2} \theta \sin^ {2} \theta + \dots . \\ \end{array}
$$

比较实部并将 $\sin^{2}\theta$ 用 $1-\cos^{2}\theta$ 代替便可将 $\cos k\theta$ 表示为 $\cos\theta$ 的多项式，且最高次项 $\cos^{k}\theta$ 的系数为 $2^{k-1}(1+C_{k}^{2}+C_{k}^{4}+\cdots=2^{k-1})$ 。利用这个事实，依次将行列式各列表示成 $\cos\theta_{j}$ 的多项式。类似上题，可将后面各列的低次项消去，提出 2 的某个

幂后得到一个 Vandermonde 行列式:

$$
| \boldsymbol {A} | = 2 ^ {\frac {1}{2} (n - 1) (n - 2)} \left| \begin{array}{c c c c c} 1 & \cos \theta_ {1} & \cos^ {2} \theta_ {1} & \dots & \cos^ {n - 1} \theta_ {1} \\ 1 & \cos \theta_ {2} & \cos^ {2} \theta_ {2} & \dots & \cos^ {n - 1} \theta_ {2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & \cos \theta_ {n} & \cos^ {2} \theta_ {n} & \dots & \cos^ {n - 1} \theta_ {n} \end{array} \right|.
$$

因此

$$
| \boldsymbol {A} | = 2 ^ {\frac {1}{2} (n - 1) (n - 2)} \prod_ {1 \leq i <   j \leq n} (\cos \theta_ {j} - \cos \theta_ {i}).
$$

例 1.29 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} \sin \theta_ {1} & \sin 2 \theta_ {1} & \dots & \sin n \theta_ {1} \\ \sin \theta_ {2} & \sin 2 \theta_ {2} & \dots & \sin n \theta_ {2} \\ \vdots & \vdots & & \vdots \\ \sin \theta_ {n} & \sin 2 \theta_ {n} & \dots & \sin n \theta_ {n} \end{array} \right|.
$$

解 可以用与上题类似的方法来解, 但我们给出另外一种解法, 目的是直接利用上题的结论.

不难验证下列等式（和差化积公式）：

$$
\sin k \theta - \sin (k - 2) \theta = 2 \sin \theta \cos (k - 1) \theta , k \geq 2.
$$

依次将 $|A|$ 的第 k-2 列乘以 -1 加到第 k 列上 $(k=n,n-1,\cdots,3)$ ，利用上面的公式进行化简。将每一行的公因子 $\sin\theta_{i}$ 提出，再将后面 n-1 列的公因子 2 提出，剩下的行列式就是上题中的行列式，因此可求得

$$
| \boldsymbol {A} | = 2 ^ {\frac {1}{2} n (n - 1)} \prod_ {i = 1} ^ {n} \sin \theta_ {i} \cdot \prod_ {1 \leq i <   j \leq n} (\cos \theta_ {j} - \cos \theta_ {i}).
$$

我们还可以利用 Vandermonde 行列式和 Cramer 法则来证明一个关于多项式的命题.

例1.30 设多项式

$$
f (x) = a _ {n} x ^ {n} + a _ {n - 1} x ^ {n - 1} + \dots + a _ {1} x + a _ {0},
$$

若 $f(x)$ 有 $n+1$ 个不同的根 $b_{1}, b_{2}, \cdots, b_{n+1}$ ，即 $f(b_{1}) = f(b_{2}) = \cdots = f(b_{n+1}) = 0$ ，
求证： $f(x)$ 是零多项式，即 $a_{n}=a_{n-1}=\cdots=a_{1}=a_{0}=0.$ 

证明 由假设 $x_0 = a_0, x_1 = a_1, \cdots, x_{n-1} = a_{n-1}, x_n = a_n$ 是下列线性方程组的解：

$$
\left\{ \begin{array}{l} x _ {0} + b _ {1} x _ {1} + \dots + b _ {1} ^ {n - 1} x _ {n - 1} + b _ {1} ^ {n} x _ {n} = 0, \\ x _ {0} + b _ {2} x _ {1} + \dots + b _ {2} ^ {n - 1} x _ {n - 1} + b _ {2} ^ {n} x _ {n} = 0, \\ \dots \dots \\ x _ {0} + b _ {n + 1} x _ {1} + \dots + b _ {n + 1} ^ {n - 1} x _ {n - 1} + b _ {n + 1} ^ {n} x _ {n} = 0. \end{array} \right.
$$

上述线性方程组的系数行列式是一个 Vandermonde 行列式, 由于 $b_{1}, b_{2}, \cdots, b_{n+1}$ 互不相同, 所以系数行列式不等于零. 由 Cramer 法则可知上述线性方程组只有零解, 即有 $a_{n} = a_{n-1} = \cdots = a_{1} = a_{0} = 0$ . □

### § 1.7 升阶法

升阶法 计算行列式通常用降阶法, 但有时候也可反其道而行之. 升阶法常常用于一些 “缺少” 某行 (列) 的行列式, 加上适当的行 (列) 后反而可以简化问题. 下面是 3 个典型的例子.

例 1.31 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 + x _ {1} & 1 + x _ {1} ^ {2} & \dots & 1 + x _ {1} ^ {n} \\ 1 + x _ {2} & 1 + x _ {2} ^ {2} & \dots & 1 + x _ {2} ^ {n} \\ \vdots & \vdots & & \vdots \\ 1 + x _ {n} & 1 + x _ {n} ^ {2} & \dots & 1 + x _ {n} ^ {n} \end{array} \right|.
$$

解 将行列式升阶为

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 1 & 0 & 0 & \dots & 0 \\ 1 & 1 + x _ {1} & 1 + x _ {1} ^ {2} & \dots & 1 + x _ {1} ^ {n} \\ 1 & 1 + x _ {2} & 1 + x _ {2} ^ {2} & \dots & 1 + x _ {2} ^ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 + x _ {n} & 1 + x _ {n} ^ {2} & \dots & 1 + x _ {n} ^ {n} \end{array} \right| = \left| \begin{array}{c c c c c} 1 & - 1 & - 1 & \dots & - 1 \\ 1 & x _ {1} & x _ {1} ^ {2} & \dots & x _ {1} ^ {n} \\ 1 & x _ {2} & x _ {2} ^ {2} & \dots & x _ {2} ^ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & x _ {n} ^ {2} & \dots & x _ {n} ^ {n} \end{array} \right|.
$$

将第一行拆开, 可得

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 2 & 0 & 0 & \dots & 0 \\ 1 & x _ {1} & x _ {1} ^ {2} & \dots & x _ {1} ^ {n} \\ 1 & x _ {2} & x _ {2} ^ {2} & \dots & x _ {2} ^ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & x _ {n} ^ {2} & \dots & x _ {n} ^ {n} \end{array} \right| + \left| \begin{array}{c c c c c} - 1 & - 1 & - 1 & \dots & - 1 \\ 1 & x _ {1} & x _ {1} ^ {2} & \dots & x _ {1} ^ {n} \\ 1 & x _ {2} & x _ {2} ^ {2} & \dots & x _ {2} ^ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & x _ {n} ^ {2}. & \dots & x _ {n} ^ {n} \end{array} \right|.
$$

后面一个行列式的第一行提出公因子 -1 后是一个关于 $1, x_{1}, x_{2}, \cdots, x_{n}$ 的 Vander-monde 行列式, 从而可得

$$
| \boldsymbol {A} | = \left(2 x _ {1} x _ {2} \dots x _ {n} - (x _ {1} - 1) (x _ {2} - 1) \dots (x _ {n} - 1)\right) \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}).
$$

例 1.32 求下列 n 阶行列式的值 $(1 \leq i \leq n - 1)$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c c c} 1 & x _ {1} & \dots & x _ {1} ^ {i - 1} & x _ {1} ^ {i + 1} & \dots & x _ {1} ^ {n} \\ 1 & x _ {2} & \dots & x _ {2} ^ {i - 1} & x _ {2} ^ {i + 1} & \dots & x _ {2} ^ {n} \\ \vdots & \vdots & & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & \dots & x _ {n} ^ {i - 1} & x _ {n} ^ {i + 1} & \dots & x _ {n} ^ {n} \end{array} \right|.
$$

解 注意这个行列式和 Vandermonde 行列式的区别在于它缺少 $i$ 次幂的列. 现添上一行一列使之成为 Vandermonde 行列式, 再求出 $y^{i}$ 的系数即可得到结果为

$$
\begin{array}{l} | \boldsymbol {B} | = \left| \begin{array}{c c c c c c c c} 1 & x _ {1} & \dots & x _ {1} ^ {i - 1} & x _ {1} ^ {i} & x _ {1} ^ {i + 1} & \dots & x _ {1} ^ {n} \\ 1 & x _ {2} & \dots & x _ {2} ^ {i - 1} & x _ {2} ^ {i} & x _ {2} ^ {i + 1} & \dots & x _ {2} ^ {n} \\ \vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & \dots & x _ {n} ^ {i - 1} & x _ {n} ^ {i} & x _ {n} ^ {i + 1} & \dots & x _ {n} ^ {n} \\ 1 & y & \dots & y ^ {i - 1} & y ^ {i} & y ^ {i + 1} & \dots & y ^ {n} \end{array} \right| \\ = (y - x _ {1}) \left(y - x _ {2}\right) \dots \left(y - x _ {n}\right) \prod_ {1 \leq i <   j \leq n} \left(x _ {j} - x _ {i}\right). \\ \end{array}
$$

因此 $y^{i}$ 的系数是

$$
\sum_ {1 \leq k _ {1} <   k _ {2} <   \dots <   k _ {n - i} \leq n} (- 1) ^ {n - i} x _ {k _ {1}} x _ {k _ {2}} \dots x _ {k _ {n - i}} \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}).
$$

而 $|\pmb{B}|$ 中元素 $y^{i}$ 的代数余子式为 $(-1)^{n + 1 + i + 1}|\pmb {A}| = (-1)^{n + i}|\pmb {A}|$ , 因此

$$
| \boldsymbol {A} | = \sum_ {1 \leq k _ {1} <   k _ {2} <   \dots <   k _ {n - i} \leq n} x _ {k _ {1}} x _ {k _ {2}} \dots x _ {k _ {n - i}} \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}).
$$

例 1.33 求下列 n 阶行列式的值, 其中 $a_{i} \neq 0 (1 \leq i \leq n)$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 0 & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n - 1} & a _ {1} + a _ {n} \\ a _ {2} + a _ {1} & 0 & \dots & a _ {2} + a _ {n - 1} & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n - 1} + a _ {1} & a _ {n - 1} + a _ {2} & \dots & 0 & a _ {n - 1} + a _ {n} \\ a _ {n} + a _ {1} & a _ {n} + a _ {2} & \dots & a _ {n} + a _ {n - 1} & 0 \end{array} \right|.
$$

解 将原行列式 $|A|$ 升阶, 考虑如下 $n+1$ 阶行列式:

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c c c} 1 & - a _ {1} & - a _ {2} & \dots & - a _ {n - 1} & - a _ {n} \\ 0 & 0 & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n - 1} & a _ {1} + a _ {n} \\ 0 & a _ {2} + a _ {1} & 0 & \dots & a _ {2} + a _ {n - 1} & a _ {2} + a _ {n} \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & a _ {n - 1} + a _ {1} & a _ {n - 1} + a _ {2} & \dots & 0 & a _ {n - 1} + a _ {n} \\ 0 & a _ {n} + a _ {1} & a _ {n} + a _ {2} & \dots & a _ {n} + a _ {n - 1} & 0 \end{array} \right|,
$$

显然 $|\mathbf{A}| = |\mathbf{B}|$ . 将 $|\mathbf{B}|$ 的第一行分别加到余下的 $n$ 行上, 可得

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c c c} 1 & - a _ {1} & - a _ {2} & \dots & - a _ {n - 1} & - a _ {n} \\ 1 & - a _ {1} & a _ {1} & \dots & a _ {1} & a _ {1} \\ 1 & a _ {2} & - a _ {2} & \dots & a _ {2} & a _ {2} \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 1 & a _ {n - 1} & a _ {n - 1} & \dots & - a _ {n - 1} & a _ {n - 1} \\ 1 & a _ {n} & a _ {n} & \dots & a _ {n} & - a _ {n} \end{array} \right|.
$$

再次将上述行列式升阶, 考虑如下 $n+2$ 阶行列式:

$$
| \boldsymbol {C} | = \left| \begin{array}{c c c c c c c} 1 & 0 & 0 & 0 & \dots & 0 & 0 \\ 0 & 1 & - a _ {1} & - a _ {2} & \dots & - a _ {n - 1} & - a _ {n} \\ - a _ {1} & 1 & - a _ {1} & a _ {1} & \dots & a _ {1} & a _ {1} \\ - a _ {2} & 1 & a _ {2} & - a _ {2} & \dots & a _ {2} & a _ {2} \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ - a _ {n - 1} & 1 & a _ {n - 1} & a _ {n - 1} & \dots & - a _ {n - 1} & a _ {n - 1} \\ - a _ {n} & 1 & a _ {n} & a _ {n} & \dots & a _ {n} & - a _ {n} \end{array} \right|,
$$

显然 $|\mathbf{A}| = |\mathbf{B}| = |\mathbf{C}|$ . 将 $|\mathbf{C}|$ 的第一列分别加到最后的 $n$ 列上, 可得

$$
| \boldsymbol {C} | = \left| \begin{array}{c c c c c c c} 1 & 0 & 1 & 1 & \dots & 1 & 1 \\ 0 & 1 & - a _ {1} & - a _ {2} & \dots & - a _ {n - 1} & - a _ {n} \\ - a _ {1} & 1 & - 2 a _ {1} & 0 & \dots & 0 & 0 \\ - a _ {2} & 1 & 0 & - 2 a _ {2} & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ - a _ {n - 1} & 1 & 0 & 0 & \dots & - 2 a _ {n - 1} & 0 \\ - a _ {n} & 1 & 0 & 0 & \dots & 0 & - 2 a _ {n} \end{array} \right|.
$$

上述行列式是爪型行列式 (参考例 1.4), 只要利用非零主对角元将爪的一边消去, 变成 (分块) 上 (下) 三角行列式即可计算出结果. 我们选择消去前两列的爪边, 在上述行列式中, 将第 $i$ 列 $(i = 3, 4, \cdots, n + 2)$ 乘以 $-\frac{1}{2}$ 都加到第一列上, 再将第 $i$ 列 $(i = 3, 4, \cdots, n + 2)$ 乘以 $\frac{1}{2a_{i-2}}$ 都加到第二列上, 可得

$$
| \boldsymbol {C} | = \left| \begin{array}{c c c c c c c} 1 - \frac {n}{2} & \frac {T}{2} & 1 & 1 & \dots & 1 & 1 \\ \frac {S}{2} & 1 - \frac {n}{2} & - a _ {1} & - a _ {2} & \dots & - a _ {n - 1} & - a _ {n} \\ 0 & 0 & - 2 a _ {1} & 0 & \dots & 0 & 0 \\ 0 & 0 & 0 & - 2 a _ {2} & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & - 2 a _ {n - 1} & 0 \\ 0 & 0 & 0 & 0 & \dots & 0 & - 2 a _ {n} \end{array} \right|,
$$

其中 $S = a_{1} + a_{2} + \cdots + a_{n}$ ， $T = \frac{1}{a_{1}} + \frac{1}{a_{2}} + \cdots + \frac{1}{a_{n}}$ 。注意到上述行列式是分块上三角行列式，从而可得

$$
| \boldsymbol {A} | = | \boldsymbol {C} | = (- 2) ^ {n - 2} \prod_ {i = 1} ^ {n} a _ {i} \left((n - 2) ^ {2} - \left(\sum_ {i = 1} ^ {n} a _ {i}\right) \left(\sum_ {i = 1} ^ {n} \frac {1}{a _ {i}}\right)\right). \square
$$

### § 1.8 求根法

求根法 我们在 § 5.9 中给出了求根法的严格证明, 其中需要用到多元多项式的整性, 下面只简单复述一下结论.

设 n 阶行列式 $|A|$ 的元素 $a_{ij} = a_{ij}(x_1, x_2, \cdots, x_m)$ 都是关于未定元 $x_1, x_2, \cdots, x_m$ 的多项式，则 $|A|$ 是一个多元多项式。若把 $x_1$ 看成主未定元，则可将 $|A|$ 整理成关于 $x_1$ 的一元多项式：

$$
| \boldsymbol {A} | = c _ {0} \left(x _ {2}, \dots , x _ {m}\right) x _ {1} ^ {d} + c _ {1} \left(x _ {2}, \dots , x _ {m}\right) x _ {1} ^ {d - 1} + \dots + c _ {d} \left(x _ {2}, \dots , x _ {m}\right), \tag {1.9}
$$

其中 $c_{0}(x_{2},\cdots,x_{m})\neq0,d\geq1$ 为次数. 假设存在互异的多项式 $g_{1}(x_{2},\cdots,x_{m}),\cdots,$ $g_{d}(x_{2},\cdots,x_{m})$ ，使得当 $x_{1}=g_{i}(x_{2},\cdots,x_{m})(1\leq i\leq d)$ 时 $|A|=0$ ，则

$$
\left| \boldsymbol {A} \right| = c _ {0} \left(x _ {2}, \dots , x _ {m}\right) \cdot \left(x _ {1} - g _ {1} \left(x _ {2}, \dots , x _ {m}\right)\right) \dots \left(x _ {1} - g _ {d} \left(x _ {2}, \dots , x _ {m}\right)\right).
$$

#### 求根法的原理

(1) 确定主未定元 $x_{1}$ 的次数 d 以及方程 (1.9) 的 d 个不同的根 $g_{i}(x_{2},\cdots,x_{m})$ ;

(2) 首项系数 $c_{0}(x_{2},\cdots,x_{m})$ 或可直接得到, 或可通过第一步的方法继续确定;

(3) 若 $\left|A\right|$ 是对称多项式, 则可将主未定元进行轮换, 简化讨论的过程.

例 1.34 试用求根法计算 Vandermonde 行列式:

$$
D _ {n} = \left| \begin{array}{c c c c c} 1 & x _ {1} & \dots & x _ {1} ^ {n - 2} & x _ {1} ^ {n - 1} \\ 1 & x _ {2} & \dots & x _ {2} ^ {n - 2} & x _ {2} ^ {n - 1} \\ \vdots & \vdots & & \vdots & \vdots \\ 1 & x _ {n - 1} & \dots & x _ {n - 1} ^ {n - 2} & x _ {n - 1} ^ {n - 1} \\ 1 & x _ {n} & \dots & x _ {n} ^ {n - 2} & x _ {n} ^ {n - 1} \end{array} \right|.
$$

解 将 $x_{n}$ 看成主未定元, 则次数为 n-1, 首项系数为 $D_{n-1}$ . 当 $x_{n}=x_{i}(1\leq i\leq n-1)$ 时, 行列式有两行相同, 故 $D_{n}=0$ , 从而 $x_{1},\cdots,x_{n-1}$ 是 n-1 个不同的根, 于是

$$
D _ {n} = D _ {n - 1} \cdot (x _ {n} - x _ {1}) \dots (x _ {n} - x _ {n - 1}).
$$

再对系数 $D_{n-1}$ 做类似的讨论, 不断这样做下去, 最后可得 $D_{n} = \prod_{1 \leq i < j \leq n} (x_{j} - x_{i})$ . 也可以直接讨论, 将任一 $x_{j}$ 看成主未定元, 则其余未定元 $x_{i} (i \neq j)$ 都是 $D_{n}$ 的根, 故 $D_{n} = c \prod_{1 \leq i < j \leq n} (x_{j} - x_{i})$ . 规定未定元的字典排序为 $x_{n} > x_{n-1} > \cdots > x_{1}$ , 则由行列式的组合定义可知 $D_{n}$ 的首项为 $x_{n}^{n-1} x_{n-1}^{n-2} \cdots x_{2}$ , 比较之后即得 c = 1. □

例 1.35 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 & 1 & 2 & 3 \\ 1 & 2 - x ^ {2} & 2 & 3 \\ 2 & 3 & 1 & 5 \\ 2 & 3 & 1 & 9 - x ^ {2} \end{array} \right|.
$$

解 上述行列式按组合定义展开将得到一个关于未定元 $x$ 的首项系数为 $-3$ 的四次多项式, 注意到当 $2 - x^{2} = 1$ 或 $9 - x^{2} = 5$ 时, 行列式均有两行相同, 从而值为零. 因此 $x = \pm 1, \pm 2$ 是上述一元四次多项式的 4 个不同的根, 从而由求根法可知 $|A| = -3(x^{2} - 1)(x^{2} - 4)$ . $\square$ 

例 1.24 设 $f_{1}(x)$ , $f_{2}(x)$ , $\cdots$ , $f_{n}(x)$ 是次数不超过 n-2 的多项式, 求证: 对任意 n 个数 $a_{1}, a_{2}, \cdots, a_{n}$ , 均有

$$
\left| \begin{array}{c c c c} f _ {1} (a _ {1}) & f _ {2} (a _ {1}) & \dots & f _ {n} (a _ {1}) \\ f _ {1} (a _ {2}) & f _ {2} (a _ {2}) & \dots & f _ {n} (a _ {2}) \\ \vdots & \vdots & & \vdots \\ f _ {1} (a _ {n}) & f _ {2} (a _ {n}) & \dots & f _ {n} (a _ {n}) \end{array} \right| = 0.
$$

证法2 作行列式

$$
g (x) = \left| \begin{array}{c c c c} f _ {1} (x) & f _ {2} (x) & \dots & f _ {n} (x) \\ f _ {1} (a _ {2}) & f _ {2} (a _ {2}) & \dots & f _ {n} (a _ {2}) \\ \vdots & \vdots & & \vdots \\ f _ {1} (a _ {n}) & f _ {2} (a _ {n}) & \dots & f _ {n} (a _ {n}) \end{array} \right|,
$$

这是一个次数不超过 $n - 2$ 的多项式. 若 $a_2, \cdots, a_n$ 中有相同者, 则显然 $g(x) = 0$ . 若 $a_2, \cdots, a_n$ 互不相同, 则由 $g(a_i) = 0 (2 \leq i \leq n)$ 可知 $g(x)$ 有 $n - 1$ 个不同的根, 再由例 1.30 可得 $g(x) = 0$ . 总之, $g(x)$ 是一个恒为零的多项式, 因此原行列式的值 $g(a_1) = 0$ . $\square$ 

例 1.36 计算行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} x & y & z & w \\ y & x & w & z \\ z & w & x & y \\ w & z & y & x \end{array} \right|.
$$

解 设 $|\mathbf{A}| = f(x)$ , 将所有行加到第一行上可以提出因子 $x + y + z + w$ . 第二行乘以 1, 第三、第四行乘以 -1 加到第一行上可提出因子 $x + y - z - w$ . 同理可知 $|\mathbf{A}|$ 有因子 $x + z - y - w, x + w - y - z$ . 又 $|\mathbf{A}|$ 看成为 $x$ 的多项式是四次的, 首项系数为 1, 故 $|\mathbf{A}| = (x + y + z + w)(x + y - z - w)(x + z - y - w)(x + w - y - z)$ . $\square$ 

注 利用行列式的性质可以给出例 1.36 的另一种解法, 请参考 [1] 的例 1.5.10.

例 1.37 计算行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 + x & 1 & 1 & 1 \\ 1 & 1 - x & 1 & 1 \\ 1 & 1 & 1 + y & 1 \\ 1 & 1 & 1 & 1 - y \end{array} \right|.
$$

解 显然当 $x = 0$ 或 $y = 0$ 时 $|\mathbf{A}| = 0$ . 因此 $|\mathbf{A}|$ 含有因子 $xy$ . 若将 $-x$ 代 $x$ , 所得行列式仍和 $|\mathbf{A}|$ 相等 (只要将第一、第二行对换, 再将第一、第二列对换). 可见, $|\mathbf{A}|$ 含有因子 $x^{2}$ , 同理 $|\mathbf{A}|$ 含有因子 $y^{2}$ . 而 $x^{2}y^{2}$ 项的系数是 1, 因此 $|\mathbf{A}| = x^{2}y^{2}$ . □

例 1.38 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c} (a + b) ^ {2} & c ^ {2} & c ^ {2} \\ a ^ {2} & (b + c) ^ {2} & a ^ {2} \\ b ^ {2} & b ^ {2} & (c + a) ^ {2} \end{array} \right|.
$$

解 若 $a = 0$ , 则第一列和第三列成比例, 故行列式值为零, 于是 $a$ 是 $|\mathbf{A}|$ 的因子, 同理可证 $b, c$ 也是 $|\mathbf{A}|$ 的因子. 注意到第一列减去第二列, 以及第三列减去第二列均可提出公因子 $a + b + c$ , 于是 $|\mathbf{A}| = abc(a + b + c)^2 f(a, b, c)$ , 其中 $f(a, b, c)$ 是一次齐次多项式. 设 $f(a, b, c) = k_1 a + k_2 b + k_3 c$ , 若将 $a, b, c$ 做置换, 容易验证 $|\mathbf{A}|$ 的值仍不变, 故 $k_1 = k_2 = k_3$ , 于是 $|\mathbf{A}| = kabc(a + b + c)^3$ . 最后取 $a = b = c = 1$ 可以确定 $k = 2$ , 因此 $|\mathbf{A}| = 2abc(a + b + c)^3$ . $\square$ 

例 1.18 (Cauchy 行列式) 计算 n 阶行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} (a _ {1} + b _ {1}) ^ {- 1} & (a _ {1} + b _ {2}) ^ {- 1} & \dots & (a _ {1} + b _ {n}) ^ {- 1} \\ (a _ {2} + b _ {1}) ^ {- 1} & (a _ {2} + b _ {2}) ^ {- 1} & \dots & (a _ {2} + b _ {n}) ^ {- 1} \\ \vdots & \vdots & & \vdots \\ (a _ {n} + b _ {1}) ^ {- 1} & (a _ {n} + b _ {2}) ^ {- 1} & \dots & (a _ {n} + b _ {n}) ^ {- 1} \end{array} \right|.
$$

解法 2 将 $|A|$ 的每一行提出公分母, 得到

$$
| \boldsymbol {A} | = \prod_ {i, j = 1} ^ {n} (a _ {i} + b _ {j}) ^ {- 1} | \boldsymbol {B} |,
$$

其中 $|\pmb{B}|$ 是一个 $n$ 阶行列式, 它的第 $(i,j)$ 元素为

$$
\prod_ {k = 1} ^ {n} \left(a _ {i} + b _ {k}\right) / \left(a _ {i} + b _ {j}\right).
$$

现来计算 $|\pmb{B}|$ . 若 $a_{i} = a_{j} (i \neq j)$ , 则显然 $|\pmb{B}| = 0$ (有两行相同), 因此 $|\pmb{B}|$ 含有因子 $a_{i} - a_{j}$ . 同理可证 $|\pmb{B}|$ 也含有因子 $b_{i} - b_{j}$ . 又 $a_{i}$ 在 $|\pmb{B}|$ 展开式中的次数为 $n - 1, b_{i}$ 的次数也是 $n - 1$ , 因此

$$
| \boldsymbol {B} | = k \prod_ {1 \leq i <   j \leq n} (a _ {i} - a _ {j}) (b _ {i} - b _ {j}).
$$

为确定 k 的值，令 $a_{i} = -b_{i} (i = 1, 2, \cdots, n)$ . $|B|$ 这时成为对角行列式，注意到 $b_{i} = -a_{i}$ ，我们有

$$
| \boldsymbol {B} | = \prod_ {1 \leq i \neq j \leq n} (a _ {i} - a _ {j}) = \prod_ {1 \leq i <   j \leq n} (a _ {i} - a _ {j}) (b _ {i} - b _ {j}).
$$

这表明 $k = 1$ 因此

$$
| \boldsymbol {A} | = \frac {\prod_ {1 \leq i <   j \leq n} (a _ {i} - a _ {j}) (b _ {i} - b _ {j})}{\prod_ {i , j = 1} ^ {n} (a _ {i} + b _ {j})}. \square
$$

### § 1.9 组合定义

组合定义 教材 [1] 是从行列式的递归定义出发, 先利用数学归纳法证明行列式的所有性质, 再推导出行列式的组合定义. 事实上, 也可以从行列式的组合定义出发, 先证明行列式的所有性质, 再推导出行列式的递归定义. 因此两种定义体系是完全等价的. 行列式的组合定义通常在理论证明中使用, 如利用它可以证明 Laplace 定理等.

例 1.39 若 n 阶行列式 $|A|$ 中零元素的个数超过 $n^{2}-n$ 个, 证明: $|A|=0$ .

证明 由行列式的组合定义可得

$$
| \boldsymbol {A} | = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n}.
$$

由于 $\left|A\right|$ 中零元素的个数超过 $n^{2}-n$ 个, 故 $a_{k_{1}1}, a_{k_{2}2}, \cdots, a_{k_{n}n}$ 中至少有一个为零, 从而 $a_{k_{1}1}a_{k_{2}2}\cdots a_{k_{n}n}=0$ , 因此 $\left|A\right|=0$ . 如直接利用行列式的性质, 也可以这样来证明: 因为 $\left|A\right|$ 中零元素的个数超过 $n^{2}-n$ 个, 由抽屉原理可知, $\left|A\right|$ 至少有一列其零元素的个数大于等于 $\left[\frac{n^{2}-n}{n}\right]+1=n$ , 即 $\left|A\right|$ 至少有一列其元素全为零, 因此 $\left|A\right|=0$ . □

例 1.21 设 $f_{ij}(t)$ 是可微函数,

$$
F (t) = \left| \begin{array}{c c c c} f _ {1 1} (t) & f _ {1 2} (t) & \dots & f _ {1 n} (t) \\ f _ {2 1} (t) & f _ {2 2} (t) & \dots & f _ {2 n} (t) \\ \vdots & \vdots & & \vdots \\ f _ {n 1} (t) & f _ {n 2} (t) & \dots & f _ {n n} (t) \end{array} \right|,
$$

求证: $\frac{\mathrm{d}}{\mathrm{d}t} F(t) = \sum_{j=1}^{n} F_j(t)$ , 其中

$$
F _ {j} (t) = \left| \begin{array}{c c c c c c} f _ {1 1} (t) & f _ {1 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {1 j} (t) & \dots & f _ {1 n} (t) \\ f _ {2 1} (t) & f _ {2 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {2 j} (t) & \dots & f _ {2 n} (t) \\ \vdots & \vdots & & \vdots & & \vdots \\ f _ {n 1} (t) & f _ {n 2} (t) & \dots & \frac {\mathrm{d}}{\mathrm{d} t} f _ {n j} (t) & \dots & f _ {n n} (t) \end{array} \right|.
$$

证法2 由行列式的组合定义可得

$$
F (t) = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} f _ {k _ {1} 1} (t) f _ {k _ {2} 2} (t) \dots f _ {k _ {n} n} (t).
$$

因此

$$
\begin{array}{l} \frac {\mathrm{d}}{\mathrm{d} t} F (t) = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} f _ {k _ {1} 1} ^ {\prime} (t) f _ {k _ {2} 2} (t) \dots f _ {k _ {n} n} (t) \\ + \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} f _ {k _ {1} 1} (t) f _ {k _ {2} 2} ^ {\prime} (t) \dots f _ {k _ {n} n} (t) \\ + \dots + \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} f _ {k _ {1} 1} (t) f _ {k _ {2} 2} (t) \dots f _ {k _ {n} n} ^ {\prime} (t) \\ = F _ {1} (t) + F _ {2} (t) + \dots + F _ {n} (t). \square \\ \end{array}
$$

例1.40 设

$$
f (x) = \left| \begin{array}{c c c c} x - a _ {1 1} & - a _ {1 2} & \dots & - a _ {1 n} \\ - a _ {2 1} & x - a _ {2 2} & \dots & - a _ {2 n} \\ \vdots & \vdots & & \vdots \\ - a _ {n 1} & - a _ {n 2} & \dots & x - a _ {n n} \end{array} \right|,
$$

其中 x 是未定元, $a_{ij}$ 是常数. 证明: $f(x)$ 是一个最高次项系数为 1 的 n 次多项式, 且其 n-1 次项的系数等于 $-(a_{11}+a_{22}+\cdots+a_{nn})$ .

证明 由行列式的组合定义可知, $f(x)$ 的最高次项出现在组合定义展开式中的单项 $(x - a_{11})(x - a_{22})\cdots (x - a_{nn})$ 中, 且展开式中的其他单项作为 $x$ 的多项式其次数小于等于 $n - 2$ . 因此 $f(x)$ 是一个最高次项系数为 1 的 $n$ 次多项式, 且其 $n - 1$ 次项的系数等于 $-(a_{11} + a_{22} + \dots + a_{nn})$ . □

例 1.41 设 $A = (a_{ij})$ 为 n 阶复矩阵, 证明: $\left|\overline{A}\right| = \overline{\left|A\right|}$ .

证明 复数的共轭保持加法和乘法: $\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}, \overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}$ , 故由行列式的组合定义可得

$$
\begin{array}{l} \overline {{| \boldsymbol {A} |}} = \overline {{\sum_ {(k _ {1} , k _ {2} , \cdots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1} , k _ {2} , \cdots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \cdots a _ {k _ {n} n}}} \\ = \sum_ {\left(k _ {1}, k _ {2}, \dots , k _ {n}\right) \in S _ {n}} (- 1) ^ {N \left(k _ {1}, k _ {2}, \dots , k _ {n}\right)} \overline {{{a _ {k _ {1} 1}}}} \overline {{{a _ {k _ {2} 2}}}} \dots \overline {{{a _ {k _ {n} n}}}} = | \overline {{{A}}} |. \square \\ \end{array}
$$

例 1.42 设 $A = (a_{ij})$ 是 $n (n \geq 2)$ 阶非异整数方阵, 满足对任意的 i, j, $|A|$ 均可整除 $a_{ij}$ , 证明: $|A| = \pm 1$ .

证明 $|\mathbf{A}|$ 可整除每个元素 $a_{ij}$ , 故由行列式的组合定义

$$
| \boldsymbol {A} | = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n}
$$

可知 $|A|^{n}$ 可整除 $|A|$ 中每个单项 $a_{k_{1}1}a_{k_{2}2}\cdots a_{k_{n}n}$ ，从而 $|A|^{n}$ 可整除 $|A|$ ，即有 $|A|^{n-1}$ 可整除 1，于是 $|A|^{n-1}=\pm1$ 。又 $|A|$ 是整数，从而只能是 $|A|=\pm1$ 。☐

例 1.43 如果 n 阶行列式 $|A|$ 的元素满足 $a_{ij} = -a_{ji} (1 \leq i, j \leq n)$ ，则称为反对称行列式。求证：奇数阶反对称行列式的值等于零。

证明 由于 $|\mathbf{A}|$ 的主对角元全为0, 故由组合定义, 只需考虑下列单项:

$$
T = \left\{a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n} \mid k _ {i} \neq i (1 \leq i \leq n) \right\}.
$$

定义映射 $\varphi: T \to T, a_{k_{1}1}a_{k_{2}2}\cdots a_{k_{n}n} \mapsto a_{1k_{1}}a_{2k_{2}}\cdots a_{nk_{n}}$ . 显然 $\varphi^{2} = Id_{T}$ ，于是 $\varphi$ 是一个双射. 我们断言: $a_{k_{1}1}a_{k_{2}2}\cdots a_{k_{n}n}$ 和 $a_{1k_{1}}a_{2k_{2}}\cdots a_{nk_{n}}$ 作为 $|A|$ 的单项不相同, 否则 $\{1,2,\cdots,n\}$ 必可分成若干对 $(i_{1},j_{1}),\cdots,(i_{l},j_{l})$ , 使得 $a_{k_{1}1}a_{k_{2}2}\cdots a_{k_{n}n}=a_{i_{1}j_{1}}a_{j_{1}i_{1}}\cdots a_{i_{l}j_{l}}a_{j_{l}i_{l}}$ , 这与 n 为奇数矛盾. 将上述两个单项看成一组, 则它们在 $|A|$ 中符号均为 $(-1)^{N(k_{1},k_{2},\cdots,k_{n})}$ . 由于 $|A|$ 反对称, 故

$$
a _ {1 k _ {1}} a _ {2 k _ {2}} \dots a _ {n k _ {n}} = (- 1) ^ {n} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n} = - a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n},
$$

从而每组和为 0, 于是 $|\mathbf{A}| = 0$ . 如直接利用行列式的性质, 也可以这样来证明: 由反对称行列式的定义可知, $|\mathbf{A}|$ 的转置 $|\mathbf{A}'|$ 与 $|\mathbf{A}|$ 的每个元素都相差一个符号, 将 $|\mathbf{A}'|$ 的每一行都提出公因子 -1 可得 $|\mathbf{A}| = |\mathbf{A}'| = (-1)^n |\mathbf{A}| = -|\mathbf{A}|$ , 从而 $|\mathbf{A}| = 0$ . $\square$ 

### § 1.10 Laplace 定理

Laplace 定理推广了“行列式可以按任意一行（列）进行展开”这一性质：行列式可以按任意 k 行（列）进行展开。由 Laplace 定理可以推出：分块上（下）三角行列式的值等于主对角块行列式值的乘积，这一推论是行列式性质 1 的推广，在后续章节中有着众多的应用。Laplace 定理通常在理论证明中使用，下面是几个典型的例子。

例 1.44 利用行列式的 Laplace 定理证明恒等式:

$$
(a b ^ {\prime} - a ^ {\prime} b) (c d ^ {\prime} - c ^ {\prime} d) - (a c ^ {\prime} - a ^ {\prime} c) (b d ^ {\prime} - b ^ {\prime} d) + (a d ^ {\prime} - a ^ {\prime} d) (b c ^ {\prime} - b ^ {\prime} c) = 0.
$$

证明 显然下列行列式的值为零:

$$
\left| \begin{array}{c c c c} a & a ^ {\prime} & a & a ^ {\prime} \\ b & b ^ {\prime} & b & b ^ {\prime} \\ c & c ^ {\prime} & c & c ^ {\prime} \\ d & d ^ {\prime} & d & d ^ {\prime} \end{array} \right|.
$$

用 Laplace 定理按第一、第二列展开即得. □

例 1.45 求 2n 阶行列式的值 (空缺处都是零):

$$
\left| \begin{array}{c c c c c c} a & & & & & b \\ & \ddots & & & \ddots & \\ & & a & b & & \\ & & b & a & & \\ & \ddots & & & \ddots & \\ b & & & & & a \end{array} \right|.
$$

解 不断用 Laplace 定理 (第一行及最后一行), 即可求得行列式的值为

$$
(a ^ {2} - b ^ {2}) ^ {n}. \square
$$

例 1.46 设 A, B 都是 n 阶矩阵, 求证:

$$
|A + B| = |A| + |B| + \sum_{1\leq k\leq n - 1}\left(\sum_{\substack{1\leq i_{1} <   i_{2} <   \dots <  i_{k}\leq n\\ 1\leq j_{1} <   j_{2} <   \dots <  j_{k}\leq n}}A\left( \begin{array}{cccc}i_{1} & i_{2} & \dots & i_{k}\\ j_{1} & j_{2} & \dots & j_{k} \end{array} \right)\widehat{B}\left( \begin{array}{cccc}i_{1} & i_{2} & \dots & i_{k}\\ j_{1} & j_{2} & \dots & j_{k} \end{array} \right)\right).
$$

证明 设 $|A|=|\alpha_{1},\alpha_{2},\cdots,\alpha_{n}|,|B|=|\beta_{1},\beta_{2},\cdots,\beta_{n}|$ ，其中 $\alpha_{i},\beta_{i}$ 分别是 A 和 B 的列向量。注意到

$$
\left| \boldsymbol {A} + \boldsymbol {B} \right| = \left| \alpha_ {1} + \beta_ {1}, \alpha_ {2} + \beta_ {2}, \dots , \alpha_ {n} + \beta_ {n} \right|.
$$

对 $|\mathbf{A} + \mathbf{B}|$ , 按列用行列式性质 6 展开, 使每个行列式的每一列或者只含 $\alpha_{i}$ , 或者只含 $\beta_{i}$ (即按列向量完全拆分开), 则 $|\mathbf{A} + \mathbf{B}|$ 可以表示为 $2^{n}$ 个这样的行列式之和. 对每个行列式用 Laplace 定理按含有 $\mathbf{A}$ 的列向量的那些列展开便可得到结论. □

注 当 $A, B$ 之一是比较简单的矩阵 (例如对角阵或秩较小的矩阵) 时, 可利用例 1.46 来计算 $|A + B|$ . 下面是两道典型例题, 其中例 1.47 是例 1.40 的推广.

例 1.47 设 $A=(a_{ij})$ 为 n 阶方阵, x 为未定元,

$$
f (x) = | x \boldsymbol {I} _ {n} - \boldsymbol {A} | = \left| \begin{array}{c c c c} x - a _ {1 1} & - a _ {1 2} & \dots & - a _ {1 n} \\ - a _ {2 1} & x - a _ {2 2} & \dots & - a _ {2 n} \\ \vdots & \vdots & & \vdots \\ - a _ {n 1} & - a _ {n 2} & \dots & x - a _ {n n} \end{array} \right|.
$$

证明： $f(x)=x^{n}+a_{1}x^{n-1}+\cdots+a_{n-1}x+a_{n}$ ，其中

$$
a _ {k} = (- 1) ^ {k} \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {k} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ i _ {1} & i _ {2} & \dots & i _ {k} \end{array} \right), 1 \leq k \leq n.
$$

证明 注意到 $xI_{n}$ 非零的 $n - k$ 阶子式只有 $n - k$ 阶主子式, 其值为 $x^{n - k}$ , 故由例1.46即得结论. $\square$ 

例 1.33 求下列 n 阶行列式的值, 其中 $a_{i} \neq 0 (1 \leq i \leq n)$ :

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 0 & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n - 1} & a _ {1} + a _ {n} \\ a _ {2} + a _ {1} & 0 & \dots & a _ {2} + a _ {n - 1} & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n - 1} + a _ {1} & a _ {n - 1} + a _ {2} & \dots & 0 & a _ {n - 1} + a _ {n} \\ a _ {n} + a _ {1} & a _ {n} + a _ {2} & \dots & a _ {n} + a _ {n - 1} & 0 \end{array} \right|.
$$

解法2 设

$$
\boldsymbol {B} = \left( \begin{array}{c c c c} 2 a _ {1} & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n} \\ a _ {2} + a _ {1} & 2 a _ {2} & \dots & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} + a _ {1} & a _ {n} + a _ {2} & \dots & 2 a _ {n} \end{array} \right), \boldsymbol {C} = \left( \begin{array}{c c c c} - 2 a _ {1} & & & \\ & - 2 a _ {2} & & \\ & & \ddots & \\ & & & - 2 a _ {n} \end{array} \right),
$$

则 $A = B + C$ . 我们先来计算 $|B|$ , 拆分 $|B|$ 的第一列得到两个行列式, 再用第一列分别消去后面 $n - 1$ 列的对应部分, 最后可得

$$
\begin{array}{l} | \boldsymbol {B} | = \left| \begin{array}{c c c c} a _ {1} & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n} \\ a _ {2} & 2 a _ {2} & \dots & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} & a _ {n} + a _ {2} & \dots & 2 a _ {n} \end{array} \right| + \left| \begin{array}{c c c c} a _ {1} & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n} \\ a _ {1} & 2 a _ {2} & \dots & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {1} & a _ {n} + a _ {2} & \dots & 2 a _ {n} \end{array} \right| \\ = \left| \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ a _ {2} & a _ {2} & \dots & a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} & a _ {2} & \dots & a _ {n} \end{array} \right| + \left| \begin{array}{c c c c} a _ {1} & a _ {1} & \dots & a _ {1} \\ a _ {1} & a _ {2} & \dots & a _ {2} \\ \vdots & \vdots & & \vdots \\ a _ {1} & a _ {n} & \dots & a _ {n} \end{array} \right|. \\ \end{array}
$$

因此, 当 $n \geq 3$ 时, $|B| = 0$ ; 当 $n = 2$ 时, $|B| = -(a_1 - a_2)^2$ ; 当 $n = 1$ 时, $|B| = 2a_1$ . 由于 $\pmb{B}$ 的任一 $k$ 阶主子式也具有相同的形状, 故上面也给出了 $\pmb{B}$ 的所有主子式的计算结果. 注意到 $\pmb{C}$ 只有主子式非零, 故由例 1.46 可得

$$
\begin{array}{l} |A| = |B| + |C| + \sum_{1\leq k\leq n - 1}\sum_{\substack{1\leq i_{1} <   i_{2} <   \dots <  i_{k}\leq n\\ 1\leq j_{1} <   j_{2} <   \dots <  j_{k}\leq n}}B\left( \begin{array}{cccc}i_{1} & i_{2} & \dots & i_{k}\\ j_{1} & j_{2} & \dots & j_{k} \end{array} \right)\widehat{C}\left( \begin{array}{cccc}i_{1} & i_{2} & \dots & i_{k}\\ j_{1} & j_{2} & \dots & j_{k} \end{array} \right) \\ = | \boldsymbol {C} | + \sum_ {i = 1} ^ {n} \boldsymbol {B} \binom {i} {i} \hat {\boldsymbol {C}} \binom {i} {i} + \sum_ {1 \leq i <   j \leq n} \boldsymbol {B} \left( \begin{array}{c c} i & j \\ i & j \end{array} \right) \hat {\boldsymbol {C}} \binom {i j} {i j} \\ = (- 2) ^ {n} a _ {1} a _ {2} \dots a _ {n} + \sum_ {i = 1} ^ {n} (2 a _ {i}) (- 2) ^ {n - 1} a _ {1} \dots \widehat {a _ {i}} \dots a _ {n} \\ + \sum_ {1 \leq i <   j \leq n} \left(- (a _ {i} - a _ {j}) ^ {2} (- 2) ^ {n - 2} a _ {1} \dots \widehat {a _ {i}} \dots \widehat {a _ {j}} \dots a _ {n}\right) \\ = (- 2) ^ {n - 2} \prod_ {i = 1} ^ {n} a _ {i} \left((n - 2) ^ {2} - \left(\sum_ {i = 1} ^ {n} a _ {i}\right) \left(\sum_ {i = 1} ^ {n} \frac {1}{a _ {i}}\right)\right). \square \\ \end{array}
$$

### § 1.11 综合运用

我们在前面几节介绍了行列式计算的 9 种方法, 分别是: 降阶法、求和法、递推法与数学归纳法、拆分法、Vandermonde 行列式、升阶法、求根法、组合定义和 Laplace 定理. 在矩阵这一章中, 我们还将介绍: 矩阵乘法、Cauchy-Binet 公式和降阶公式这 3 种方法, 合在一起共 12 种方法.

另外, 一些重要的例题, 如例 1.4 (爪型行列式)、例 1.5 (除主对角元素外每行相等型)、例 1.7 (添加一行一列型)、例 1.12 (循环行列式)、例 1.13 (三对角行列式)、例 1.18 (Cauchy 行列式)、例 1.21 (行列式求导)、例 1.22 (元素增量相等型) 及其推论、例 1.27 (类 Vandermonde 行列式)、例 1.46 ( $|A + B|$ 型) 等, 都可看成是某种模板, 今后可直接利用其结论去计算相关的行列式. 我们亦可称之为模板法.

行列式的计算具有相当的技巧性, 有时可以用数种方法来解一道题, 有时也需要综合运用各种方法来进行计算. 但不管利用怎样的方法, 熟练运用行列式的性质总是最基本的要求. 下面我们再列举一些典型的例题加以说明.

例1.48 求下列 $n$ 阶行列式的值：

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} (x - a _ {1}) ^ {2} & a _ {2} ^ {2} & \dots & a _ {n} ^ {2} \\ a _ {1} ^ {2} & (x - a _ {2}) ^ {2} & \dots & a _ {n} ^ {2} \\ \vdots & \vdots & & \vdots \\ a _ {1} ^ {2} & a _ {2} ^ {2} & \dots & (x - a _ {n}) ^ {2} \end{array} \right|.
$$

解 注意到 $(x - a_{i})^{2} = a_{i}^{2} - (2a_{i} - x)x,$ 因此直接利用例1.5的结论可得

$$
\begin{array}{l} | \boldsymbol {A} | = \sum_ {i = 1} ^ {n} \left(x ^ {2} - 2 a _ {1} x\right) \dots \left(x ^ {2} - 2 a _ {i - 1} x\right) a _ {i} ^ {2} \left(x ^ {2} - 2 a _ {i + 1} x\right) \dots \left(x ^ {2} - 2 a _ {n} x\right) \\ + \left(x ^ {2} - 2 a _ {1} x\right) \dots \left(x ^ {2} - 2 a _ {n} x\right). \square \\ \end{array}
$$

我们直接利用行列式的性质给出例 1.38 的另一解法.

例 1.38 求下列行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c} (a + b) ^ {2} & c ^ {2} & c ^ {2} \\ a ^ {2} & (b + c) ^ {2} & a ^ {2} \\ b ^ {2} & b ^ {2} & (c + a) ^ {2} \end{array} \right|.
$$

解法 2 将第二列乘以 -1 分别加到第一列和第三列上, 再将第一列和第三列的公因子提出, 可得

$$
| \boldsymbol {A} | = (a + b + c) ^ {2} \left| \begin{array}{c c c} a + b - c & c ^ {2} & 0 \\ a - b - c & (b + c) ^ {2} & a - b - c \\ 0 & b ^ {2} & a + c - b \end{array} \right|.
$$

将上述行列式的第一行和第三行分别乘以 -1 加到第二行上; 再将第一列乘以 $\frac{c}{2}$ 加

到第二列上, 将第三列乘以 $\frac{b}{2}$ 加到第二列上; 最后将第二列的公因子提出, 可得

$$
\begin{array}{l} | \boldsymbol {A} | = (a + b + c) ^ {2} \left| \begin{array}{c c c} a + b - c & c ^ {2} & 0 \\ - 2 b & 2 b c & - 2 c \\ 0 & b ^ {2} & a + c - b \end{array} \right| \\ = (a + b + c) ^ {2} \left| \begin{array}{c c c} a + b - c & \frac {c}{2} (a + b + c) & 0 \\ - 2 b & 0 & - 2 c \\ 0 & \frac {b}{2} (a + b + c) & a + c - b \end{array} \right| \\ = (a + b + c) ^ {3} \left| \begin{array}{c c c} a + b - c & \frac {c}{2} & 0 \\ - 2 b & 0 & - 2 c \\ 0 & \frac {b}{2} & a + c - b \end{array} \right| \\ = 2 a b c (a + b + c) ^ {3}. \square \\ \end{array}
$$

例 1.31 计算下列行列式:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 + x _ {1} & 1 + x _ {1} ^ {2} & \dots & 1 + x _ {1} ^ {n} \\ 1 + x _ {2} & 1 + x _ {2} ^ {2} & \dots & 1 + x _ {2} ^ {n} \\ \vdots & \vdots & & \vdots \\ 1 + x _ {n} & 1 + x _ {n} ^ {2} & \dots & 1 + x _ {n} ^ {n} \end{array} \right|.
$$

解法 2 利用例 1.22 和例 1.27 来进行计算. 设

$$
| \boldsymbol {B} (t) | = \left| \begin{array}{c c c c} x _ {1} + t & x _ {1} ^ {2} + t & \dots & x _ {1} ^ {n} + t \\ x _ {2} + t & x _ {2} ^ {2} + t & \dots & x _ {2} ^ {n} + t \\ \vdots & \vdots & & \vdots \\ x _ {n} + t & x _ {n} ^ {2} + t & \dots & x _ {n} ^ {n} + t \end{array} \right|,
$$

且 $B_{ij}$ 是 $|\pmb {B}(0)|$ 的第 $(i,j)$ 元素的代数余子式, 则由例1.22可得

$$
| \boldsymbol {A} | = | \boldsymbol {B} (1) | = | \boldsymbol {B} (0) | + \sum_ {i, j = 1} ^ {n} B _ {i j}, \quad | \boldsymbol {B} (- 1) | = | \boldsymbol {B} (0) | - \sum_ {i, j = 1} ^ {n} B _ {i j},
$$

从而 $\left|A\right|=2\left|B(0)\right|-\left|B(-1)\right|$ . 注意到 $\left|B(0)\right|=x_{1}x_{2}\cdots x_{n}\prod_{1\leq i<j\leq n}(x_{j}-x_{i})$ ，又由
例 1.27 可得 $\left|B(-1)\right|=(x_{1}-1)(x_{2}-1)\cdots(x_{n}-1)\prod_{1\leq i<j\leq n}(x_{j}-x_{i})$ ，故可得

$$
| \boldsymbol {A} | = \left(2 x _ {1} x _ {2} \dots x _ {n} - (x _ {1} - 1) (x _ {2} - 1) \dots (x _ {n} - 1)\right) \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}).
$$

例 1.49 设 n 阶行列式 $|A| = |a_{ij}|$ , $A_{ij}$ 是元素 $a_{ij}$ 的代数余子式, 求证:

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c c} a _ {1 1} - a _ {1 2} & a _ {1 2} - a _ {1 3} & \dots & a _ {1, n - 1} - a _ {1 n} & 1 \\ a _ {2 1} - a _ {2 2} & a _ {2 2} - a _ {2 3} & \dots & a _ {2, n - 1} - a _ {2 n} & 1 \\ a _ {3 1} - a _ {3 2} & a _ {3 2} - a _ {3 3} & \dots & a _ {3, n - 1} - a _ {3 n} & 1 \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} - a _ {n 2} & a _ {n 2} - a _ {n 3} & \dots & a _ {n, n - 1} - a _ {n n} & 1 \end{array} \right| = \sum_ {i, j = 1} ^ {n} A _ {i j}.
$$

证法 1 设行列式 $|A|$ 的列向量依次为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ ，并且 1 表示元素都是 1 的列向量，则

$$
| B | = \left| \alpha_ {1} - \alpha_ {2}, \alpha_ {2} - \alpha_ {3}, \dots , \alpha_ {n - 1} - \alpha_ {n}, 1 \right|.
$$

依次将第 i 列加到第 i-1 列上去 $(i=n-1,\cdots,2)$ ，可得

$$
| \boldsymbol {B} | = \left| \alpha_ {1} - \alpha_ {n}, \alpha_ {2} - \alpha_ {n}, \dots , \alpha_ {n - 1} - \alpha_ {n}, 1 \right|.
$$

将第 $n$ 列写成 $(\alpha_{n} + 1) - \alpha_{n}$ ，进行拆分可得

$$
| B | = \left| \alpha_ {1} - \alpha_ {n}, \alpha_ {2} - \alpha_ {n}, \dots , \alpha_ {n - 1} - \alpha_ {n}, \alpha_ {n} + 1 \right| - \left| \alpha_ {1} - \alpha_ {n}, \alpha_ {2} - \alpha_ {n}, \dots , \alpha_ {n - 1} - \alpha_ {n}, \alpha_ {n} \right|.
$$

将上述两个行列式的第 $n$ 列依次加到前 $n - 1$ 列上, 可得

$$
| \boldsymbol {B} | = \left| \alpha_ {1} + 1, \alpha_ {2} + 1, \dots , \alpha_ {n - 1} + 1, \alpha_ {n} + 1 \right| - \left| \alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n - 1}, \alpha_ {n} \right|,
$$

最后由例 1.22 即得本题的结论.

证法2 由例1.7可知

$$
- \sum_ {i, j = 1} ^ {n} A _ {i j} = \left| \begin{array}{c c c c c} \alpha_ {1} & \alpha_ {2} & \dots & \alpha_ {n} & 1 \\ 1 & 1 & \dots & 1 & 0 \end{array} \right|.
$$

依次将第 i 列乘以 -1 加到第 i-1 列上去 $(i=2,\cdots,n)$ ，再按第 $n+1$ 行展开可得

$$
\begin{array}{l} - \sum_ {i, j = 1} ^ {n} A _ {i j} = \left| \begin{array}{c c c c c c} \alpha_ {1} - \alpha_ {2} & \alpha_ {2} - \alpha_ {3} & \dots & \alpha_ {n - 1} - \alpha_ {n} & \alpha_ {n} & 1 \\ 0 & 0 & \dots & 0 & 1 & 0 \end{array} \right| \\ = - \left| \alpha_ {1} - \alpha_ {2}, \alpha_ {2} - \alpha_ {3}, \dots , \alpha_ {n - 1} - \alpha_ {n}, 1 \right| = - | B |, \\ \end{array}
$$

结论得证. □

下面的例题给出了行列式的刻画: 在方阵 $n$ 个列向量上的多重线性和反对称性, 以及正规性 (即单位矩阵处的取值为 1), 唯一确定了行列式这个函数.

例 1.50 设 f 为从 n 阶方阵全体构成的集合到数集上的映射, 使得对任意的 n 阶方阵 A, 任意的指标 $1 \leq i \leq n$ , 以及任意的常数 c, 满足下列条件:

(1) 设 $\mathbf{A}$ 的第 $i$ 列是方阵 $\mathbf{B}$ 和 $\mathbf{C}$ 的第 $i$ 列之和, 且 $\mathbf{A}$ 的其余列与 $\mathbf{B}$ 和 $\mathbf{C}$ 的对应列完全相同, 则 $f(\mathbf{A}) = f(\mathbf{B}) + f(\mathbf{C})$ ;

(2) 将 A 的第 i 列乘以常数 c 得到方阵 B, 则 $f(B) = cf(A)$ ;

(3) 对换 A 的任意两列得到方阵 B，则 $f(B) = -f(A)$ ;

(4) $f(I_{n})=1$ , 其中 $I_{n}$ 是 n 阶单位阵.

求证: $f(A)=|A|$ .

证明 设 $\boldsymbol{A}=(\boldsymbol{\alpha}_{1},\boldsymbol{\alpha}_{2},\cdots,\boldsymbol{\alpha}_{n})$ ，其中 $\alpha_{i}$ 为 A 的第 i 列， $e_{1},e_{2},\cdots,e_{n}$ 为标准单位列向量，则

$$
\boldsymbol {\alpha} _ {j} = a _ {1 j} \boldsymbol {e} _ {1} + a _ {2 j} \boldsymbol {e} _ {2} + \dots + a _ {n j} \boldsymbol {e} _ {n} = \sum_ {i = 1} ^ {n} a _ {i j} \boldsymbol {e} _ {i}.
$$

由条件 (1) 和 (2) 可得

$$
f (\boldsymbol {A}) = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n} f (\boldsymbol {e} _ {k _ {1}}, \boldsymbol {e} _ {k _ {2}}, \dots , \boldsymbol {e} _ {k _ {n}}).
$$

由条件 (3) 可知, 若 $k_{i} = k_{j}$ , 则 $f(\pmb{e}_{k_1}, \pmb{e}_{k_2}, \dots, \pmb{e}_{k_n}) = 0$ . 因此在 $f(A)$ 的表达式中,只剩下 $k_{i}$ 互不相同的项. 通过 $N(k_{1}, k_{2}, \dots, k_{n})$ 次相邻对换可将 $(\pmb{e}_{k_1}, \pmb{e}_{k_2}, \dots, \pmb{e}_{k_n})$ 变成 $\pmb{I}_n = (\pmb{e}_1, \pmb{e}_2, \dots, \pmb{e}_n)$ , 故由条件 (3) 和 (4) 可得

$$
f \left(\boldsymbol {e} _ {k _ {1}}, \boldsymbol {e} _ {k _ {2}}, \dots , \boldsymbol {e} _ {k _ {n}}\right) = (- 1) ^ {N \left(k _ {1}, k _ {2}, \dots , k _ {n}\right)} f \left(\boldsymbol {I} _ {n}\right) = (- 1) ^ {N \left(k _ {1}, k _ {2}, \dots , k _ {n}\right)},
$$

于是

$$
f (\boldsymbol {A}) = \sum_ {(k _ {1}, k _ {2}, \dots , k _ {n}) \in S _ {n}} (- 1) ^ {N (k _ {1}, k _ {2}, \dots , k _ {n})} a _ {k _ {1} 1} a _ {k _ {2} 2} \dots a _ {k _ {n} n} = | \boldsymbol {A} |. \square
$$

在例 1.49 的证明过程中, 我们综合运用了行列式的性质、拆分法以及模板法 (例 1.22 或例 1.7) 进行计算. 另一方面, 我们也给出了众多例题的多种解法或证法, 比如例 1.5, 可以用爪型行列式、升阶法、求和法、拆分法与递推法、模板法 (例 1.46) 和降阶公式这 6 种方法来求解. 可见, 要真正熟练地掌握行列式的计算, 并将上述各种方法运用自如, 需要读者在做题的过程中认真思索, 不断总结, 才能融会贯通.

### § 1.12 基础训练

#### 1.12.1 训练题

##### 一、单选题

1. 若行列式 $\begin{vmatrix}1&2&5\\1&3&-2\\2&5&x\end{vmatrix}=0,$ 则 $x=(\quad)$ .

(A) 2 

(B)-2 

(C) 3 

(D)-3 

2. 在关于 x 的多项式 $f(x)=\left|\begin{matrix}2 & x & -5 & 3 \\ 1 & 2 & 3 & 4 \\ -1 & 0 & -2 & -3 \\ -1 & 7 & -2 & -2\end{matrix}\right|$ 中, 一次项的系数是 ( ).

(A) 1 

(B) 2 

(C)-1 

(D)-2 

3. n 阶行列式 $\begin{vmatrix}0&0&\cdots&0&1\\0&0&\cdots&1&0\\\vdots&\vdots&&\vdots&\vdots\\0&1&\cdots&0&0\\1&0&\cdots&0&0\end{vmatrix}$ 的值为().

(A) $(-1)^{n^2}$ 

(B) $(-1)^{\frac{1}{2}n(n-1)}$ 

(C) $(-1)^{\frac{1}{2} n(n + 1)}$ 

(D) 1 

4. 行列式 $\begin{vmatrix}0&a&0&0\\b&c&0&0\\0&0&d&e\\0&0&0&f\end{vmatrix}$ 的值等于（）.

(A) abcdef 

(B) -abdf 

(C) abdf 

(D) cdf 

5. 若 $|\mathbf{A}|$ 是 $n$ 阶行列式, $|\mathbf{B}|$ 是 $m$ 阶行列式, 它们的值都不为零, 记

$$
\left| \begin{array}{c c} A & O \\ O & B \end{array} \right| = | C |, \quad \left| \begin{array}{c c} O & A \\ B & O \end{array} \right| = | D |,
$$

则 $|C|:|D|$ 的值是（）.

(A) 1 

(B)-1 

(C) $(-1)^{n}$ 

(D) $(-1)^{mn}$ 

6. 若一个 $n (n > 1)$ 阶行列式中元素或为 1 或为 -1, 则其值必为 ( ).

(A) 1 

(B)-1 

(C) 奇数

(D) 偶数

7. 行列式 $\begin{vmatrix}8 & 27 & 64 & 125 \\ 4 & 9 & 16 & 25 \\ 2 & 3 & 4 & 5 \\ 1 & 1 & 1 & 1\end{vmatrix}=()$ .

(A) 12 

(B)-12 

(C) 16 

(D)-16 

8. 行列式 $\begin{vmatrix}a_{1}&0&b_{1}&0\\0&c_{1}&0&d_{1}\\a_{2}&0&b_{2}&0\\0&c_{2}&0&d_{2}\end{vmatrix}=()$ .

(A) $a_1c_1b_2d_2 - a_2b_1c_2d_1$ 

(B) $(a_{2}b_{2} - a_{1}b_{1})(c_{2}d_{2} - c_{1}d_{1})$ 

(C) $a_1a_2b_1b_2c_1c_2d_1d_2$ 

(D) $(a_{1}b_{2} - a_{2}b_{1})(c_{1}d_{2} - c_{2}d_{1})$ 

9. 如行列式 $\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} = d,$ 则 $\begin{vmatrix} 3a_{31} & 3a_{32} & 3a_{33} \\ 2a_{21} & 2a_{22} & 2a_{23} \\ -a_{11} & -a_{12} & -a_{13} \end{vmatrix} = (\quad)$ .

(A) -6d 

(B) 6d 

(C) 4d 

(D) -4d 

10. 当（）时，下列线性方程组有唯一解：

$$
\left\{ \begin{array}{l} b x _ {1} + x _ {2} + 2 x _ {3} = 1, \\ 2 x _ {1} - x _ {2} + 2 x _ {3} = - 4, \\ 4 x _ {1} + x _ {2} + 4 x _ {3} = - 2. \end{array} \right.
$$

(A) $b \neq 1$ 

(B) $b \neq 2$ 

(C) b ≠ 3 

(D) b ≠ -1 

11. 下列论断错误的是（）.

(A) 行列式 $|A|$ 的第 $(i,j)$ 元素的代数余子式等于其余子式乘以 $(-1)^{i+j}$ 

(B) 将行列式 $|A|$ 的第一行元素都乘以 2, 第二行元素都乘以 $\frac{1}{2}$ , 行列式值不变

(C) 行列式转置后的值等于原行列式值的相反数

(D) 将行列式的第一行和第二行对换, 再将第一列和第二列对换, 其值不变

12. 下列论断正确的是（）.

(A) 将 $n(n > 1)$ 阶行列式 $|\mathbf{A}|$ 的每个元素都乘以2, 所得行列式的值是原行列式值的2倍

(B) 某线性方程组的系数行列式 $|A|$ 的值等于零，则方程组的解全为零

(C) 若上三角行列式的值为零, 则行列式主对角线上必有一个元素等于零

(D) 若上三角行列式主对角线上方的所有元素等于零, 则行列式的值为零

13. 设 $f(x)=\left|\begin{matrix}1&1&2\\ 1&1&x^{2}-2\\ 2&x^{2}+1&1\end{matrix}\right|$ ，则 $f(x)=0$ 的根为（）.

(A) 1,1,2,2 

(B)-1,-1,2,2 

(C) 1, -1, 2, -2 

(D) -1, -1, -2, -2 

14. 设 $f(x)=\left|\begin{matrix}x-2 & x-1 & x-2 & x-3 \\ 2x-2 & 2x-1 & 2x-2 & 2x-3 \\ 3x-3 & 3x-2 & 4x-5 & 3x-5 \\ 4x & 4x-3 & 5x-7 & 4x-3\end{matrix}\right|$ ，则 $f(x)=0$ 的根为（）.

(A) 0,1,2,3 

(B) 0,1,2 

(C) 0,1,1 

(D) 0,1 

15. n 阶行列式

$$
\left| \begin{array}{c c c c c c} 2 & 1 & 0 & \dots & 0 & 0 \\ 1 & 2 & 1 & \dots & 0 & 0 \\ 0 & 1 & 2 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 2 & 1 \\ 0 & 0 & 0 & \dots & 1 & 2 \end{array} \right|
$$

的值为（ ）.

(A) n 

(B) $n + 1$ 

(C) n - 1 

(D) $n(n+1)$ 

##### 二、填空题

1. 行列式 $\begin{vmatrix}a_{1}b_{1}&a_{1}b_{2}&a_{1}b_{3}&a_{1}b_{4}\\a_{2}b_{1}&a_{2}b_{2}&a_{2}b_{3}&a_{2}b_{4}\\a_{3}b_{1}&a_{3}b_{2}&a_{3}b_{3}&a_{3}b_{4}\\a_{4}b_{1}&a_{4}b_{2}&a_{4}b_{3}&a_{4}b_{4}\end{vmatrix}$ 的值为（）.

2. 行列式 $\begin{vmatrix}1 & -1 & 1 & x-1 \\ 1 & -1 & x+1 & -1 \\ 1 & x-1 & 1 & -1 \\ x+1 & -1 & 1 & -1\end{vmatrix}$ 的值为().

3. 行列式 $\begin{vmatrix}x_{1}^{3}&x_{1}^{2}y_{1}&x_{1}y_{1}^{2}&y_{1}^{3}\\x_{2}^{3}&x_{2}^{2}y_{2}&x_{2}y_{2}^{2}&y_{2}^{3}\\x_{3}^{3}&x_{3}^{2}y_{3}&x_{3}y_{3}^{2}&y_{3}^{3}\\x_{4}^{3}&x_{4}^{2}y_{4}&x_{4}y_{4}^{2}&y_{4}^{3}\end{vmatrix}$ 的值为（）.

4. 已知 n 阶行列式 $|A| = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}$ 的值为 $c, b_{1}, b_{2}, \cdots, b_{n}$ 为常数，则行列式

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c} a _ {1 1} b _ {1} ^ {2} & a _ {1 2} b _ {1} b _ {2} & \dots & a _ {1 n} b _ {1} b _ {n} \\ a _ {2 1} b _ {2} b _ {1} & a _ {2 2} b _ {2} ^ {2} & \dots & a _ {2 n} b _ {2} b _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} b _ {n} b _ {1} & a _ {n 2} b _ {n} b _ {2} & \dots & a _ {n n} b _ {n} ^ {2} \end{array} \right| \text {的值为(  )}.
$$

5. 行列式 $\begin{vmatrix}103 & 100 & 204 \\ 199 & 200 & 395 \\ 301 & 300 & 600\end{vmatrix}$ 的值为().

6. 设 $|\mathbf{A}| = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 2, |\mathbf{B}| = \begin{vmatrix} a_1 & b_1 & d_1 \\ a_2 & b_2 & d_2 \\ a_3 & b_3 & d_3 \end{vmatrix} = 3,$ 则 $\left| \begin{array}{ccc}a_{1} & b_{1} & 2c_{1} - d_{1}\\ a_{2} & b_{2} & 2c_{2} - d_{2}\\ a_{3} & b_{3} & 2c_{3} - d_{3} \end{array} \right| = (\quad)$ .

7. 设行列式

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c} 2 & 2 & 3 \\ 1 & 1 & 2 \\ 2 & x & y \end{array} \right|,
$$

其代数余子式 $A_{11} + A_{12} + A_{13} = 1$ ，则 $|\pmb {A}| = (\quad)$ 

8. 设行列式

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} 1 & 1 & 1 & 2 \\ 1 & 1 & - 2 & 0 \\ 1 & 2 & 0 & - 1 \\ 2 & - 3 & 4 & 3 \end{array} \right|,
$$

则 $|\mathbf{A}|$ 的第四行元素的代数余子式之和 $A_{41} + A_{42} + A_{43} + A_{44} = (\quad)$ .

9. 设 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \beta$ 依次是行列式 $|A|$ 的第一、第二、第三、第四列, $\alpha_{1}, \alpha_{3}, \gamma, \alpha_{2}$ 依次是行列式 $|B|$ 的第一、第二、第三、第四列. 又已知 $|A| = a$ , $|B| = b$ , 则行列式 $|\alpha_{2}, \alpha_{3}, \alpha_{1}, \beta + \gamma|$ 的值为 ( ).

10. $n$ 阶行列式 $|\mathbf{A}|$ 的值为 $c$ , 若将 $|\mathbf{A}|$ 的第一列移到最后一列, 其余各列依次保持原来次序向左移动, 则得到的行列式的值为 ( ).

11. $n$ 阶行列式 $|\mathbf{A}|$ 的值为 $c$ , 若将 $|\mathbf{A}|$ 的所有元素改变符号, 则得到的行列式的值为 ( ).

12. $n$ 阶行列式 $|\mathbf{A}|$ 的值为 $c$ , 若将 $|\mathbf{A}|$ 的每个第 $(i, j)$ 元素 $a_{ij}$ 换到第 $(n - i + 1, n - j + 1)$ 元素的位置上, 则得到的行列式的值为 ( ).

13. $n$ 阶行列式 $|\mathbf{A}|$ 的值为 $c$ , 若将 $|\mathbf{A}|$ 的每个元素 $a_{ij}$ 换成 $(-1)^{i + j}a_{ij}$ , 则得到的行列式的值为 ( ).

14. $n$ 阶行列式 $|\mathbf{A}|$ 的值为 $c$ , 若将 $|\mathbf{A}|$ 的每个元素 $a_{ij}$ 换成 $b^{i - j}a_{ij} (b \neq 0)$ , 则得到的行列式的值为 ( ).

15. $n$ 阶行列式 $|A|$ 的值为 $c$ , 若从第二列开始每一列加上它前面的一列, 同时对第一列加上 $|A|$ 的第 $n$ 列, 则得到的行列式的值为 ( ).

##### 三、解答题

1. 求下列行列式的值:

$$
\left| \begin{array}{c c c c} 0 & 0 & \dots & n \\ \vdots & \vdots & & \vdots \\ 0 & 2 & \dots & 0 \\ 1 & 0 & \dots & 0 \end{array} \right|.
$$

2. 已知五阶行列式 $|A|=2, |B|=3$ ，求十阶行列式 $\begin{vmatrix}O & A \\ B & O\end{vmatrix}$ 的值.

3. 若 $a_{1}, a_{2}, \cdots, a_{n-1}$ 互不相同，求解方程：

$$
\left| \begin{array}{c c c c c} 1 & x & x ^ {2} & \dots & x ^ {n - 1} \\ 1 & a _ {1} & a _ {1} ^ {2} & \dots & a _ {1} ^ {n - 1} \\ 1 & a _ {2} & a _ {2} ^ {2} & \dots & a _ {2} ^ {n - 1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & a _ {n - 1} & a _ {n - 1} ^ {2} & \dots & a _ {n - 1} ^ {n - 1} \end{array} \right| = 0.
$$

4. 设 $a_{1}, a_{2}, \cdots, a_{n}$ 互不相同，求证下列线性方程组有唯一组解：

$$
\left\{ \begin{array}{l} x _ {1} + x _ {2} + \dots + x _ {n} = 1, \\ a _ {1} x _ {1} + a _ {2} x _ {2} + \dots + a _ {n} x _ {n} = b, \\ a _ {1} ^ {2} x _ {1} + a _ {2} ^ {2} x _ {2} + \dots + a _ {n} ^ {2} x _ {n} = b ^ {2}, \\ \dots \dots \\ a _ {1} ^ {n - 1} x _ {1} + a _ {2} ^ {n - 1} x _ {2} + \dots + a _ {n} ^ {n - 1} x _ {n} = b ^ {n - 1}. \end{array} \right.
$$

5. 计算下列行列式的值:

$$
\left| \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ x _ {1} + 1 & x _ {2} + 1 & x _ {3} + 1 & \dots & x _ {n} + 1 \\ x _ {1} ^ {2} + x _ {1} & x _ {2} ^ {2} + x _ {2} & x _ {3} ^ {2} + x _ {3} & \dots & x _ {n} ^ {2} + x _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ x _ {1} ^ {n - 1} + x _ {1} ^ {n - 2} & x _ {2} ^ {n - 1} + x _ {2} ^ {n - 2} & x _ {3} ^ {n - 1} + x _ {3} ^ {n - 2} & \dots & x _ {n} ^ {n - 1} + x _ {n} ^ {n - 2} \end{array} \right|.
$$

6. 求解方程:

$$
\left| \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ 1 & 1 - x & 1 & \dots & 1 \\ 1 & 1 & 2 - x & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & (n - 1) - x \end{array} \right| = 0.
$$

7. 求证: 对 $n \geq 2$ 的上三角行列式 $|\mathbf{A}|$ , 若 $i < j$ , 则 $A_{ij} = M_{ij} = 0$ .

8. 令

$$
(a _ {1} a _ {2} \dots a _ {n}) = \left| \begin{array}{c c c c c c c} a _ {1} & 1 & & & & \\ - 1 & a _ {2} & 1 & & & \\ & - 1 & a _ {3} & \ddots & & \\ & & \ddots & \ddots & \ddots & \\ & & & \ddots & a _ {n - 1} & 1 \\ & & & & - 1 & a _ {n} \end{array} \right|,
$$

证明关于连分数的如下等式成立:

$$
a _ {1} + \frac {1}{a _ {2} + \frac {1}{a _ {3} + \cdots + \frac {1}{a _ {n - 1} + \frac {1}{a _ {n}}}}} = \frac {(a _ {1} a _ {2} \cdots a _ {n})}{(a _ {2} a _ {3} \cdots a _ {n})}.
$$

9. 求证: 若下列 $n$ 阶行列式中 $a \neq b$ , 则

$$
\left| \begin{array}{c c c c c c} a + b & a b & 0 & \dots & 0 & 0 \\ 1 & a + b & a b & \dots & 0 & 0 \\ 0 & 1 & a + b & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 1 & a + b \end{array} \right| = \frac {a ^ {n + 1} - b ^ {n + 1}}{a - b}.
$$

10. 求 $n(n > 1)$ 阶行列式的值:

$$
\left| \begin{array}{c c c c c c c} a & b & 0 & 0 & \dots & 0 & 0 \\ 0 & a & b & 0 & \dots & 0 & 0 \\ 0 & 0 & a & b & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & 0 & \dots & a & b \\ b & 0 & 0 & 0 & \dots & 0 & a \end{array} \right|.
$$

11. 求下列行列式的值:

$$
\left| \begin{array}{c c c c c} a _ {0} & a _ {1} & a _ {2} & \dots & a _ {n} \\ a _ {0} & x & a _ {2} & \dots & a _ {n} \\ a _ {0} & a _ {1} & x & \dots & a _ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {0} & a _ {1} & a _ {2} & \dots & x \end{array} \right|.
$$

12. 求下列 n 阶行列式的值:

$$
\left| \begin{array}{c c c c} x & a & \dots & a \\ - a & x & \dots & a \\ \vdots & \vdots & & \vdots \\ - a & - a & \dots & x \end{array} \right|.
$$

13. 设 $|\mathbf{A}|$ 是 $n$ 阶行列式, $|\mathbf{A}|$ 的第 $(i,j)$ 元素 $a_{ij} = \max \{i,j\}$ , 试求 $|\mathbf{A}|$ 的值.

14. 设 $|\mathbf{A}|$ 是 $n$ 阶行列式, $|\mathbf{A}|$ 的第 $(i,j)$ 元素 $a_{ij} = |i - j|$ , 试求 $|\mathbf{A}|$ 的值.

15. 求下列 n 阶行列式的值:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c c} 1 & x _ {1} (x _ {1} - a) & x _ {1} ^ {2} (x _ {1} - a) & \dots & x _ {1} ^ {n - 1} (x _ {1} - a) \\ 1 & x _ {2} (x _ {2} - a) & x _ {2} ^ {2} (x _ {2} - a) & \dots & x _ {2} ^ {n - 1} (x _ {2} - a) \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} (x _ {n} - a) & x _ {n} ^ {2} (x _ {n} - a) & \dots & x _ {n} ^ {n - 1} (x _ {n} - a) \end{array} \right|.
$$

#### 1.12.2 训练题答案

##### 一、单选题

1. 应选择 (C). 本题可将行列式展开得到一个一次方程, 再解方程. 但这样比较繁. 注意到前两行之和为 2,5,3, 若 $x = 3$ , 则行列式的值就等于零.

2. 应选择 (C). 对这类题目一般没有必要将行列式的值求出来. 我们注意到如按第一行展开, 只有一项含有未知数 $x$ , 因此只需求出元素 $x$ 的代数余子式即可. 它等于

$$
(- 1) ^ {1 + 2} \left| \begin{array}{c c c} 1 & 3 & 4 \\ - 1 & - 2 & - 3 \\ - 1 & - 2 & - 2 \end{array} \right| = - 1.
$$

3. 应选择 (B). 根据行列式的组合定义, 展开式中只有一项非零, 即为

$$
(- 1) ^ {N (n, n - 1, \dots , 2, 1)} a _ {n, 1} a _ {n - 1, 2} \dots a _ {2, n - 1} a _ {1 n} = (- 1) ^ {(n - 1) + (n - 2) + \dots + 1} = (- 1) ^ {\frac {1}{2} n (n - 1)}.
$$

4. 应选择 (B). 这是个分块行列式, 左上角一块的值为 -ab, 右下角一块的值为 df, 故行列式的值等于 -abdf.

5. 应选择 (D). 对第二个行列式需要用行列式的性质加以变形, 使之成为和第一个行列式形状相似的行列式. 将 $|A|$ 的第一列依次和 $|B|$ 的第 $m$ 列, 第 $m - 1$ 列, $\cdots$ , 第一列对换, 共换了 $m$ 次; 再将 $|A|$ 的第二列依次和 $|B|$ 的第 $m$ 列, 第 $m - 1$ 列, $\cdots$ , 第一列对换, 又换了 $m$ 次; $\cdots$ . 综上所述, 经过 $mn$ 次对换可将第二个行列式变为第一个行列式. 因此 $|D| = (-1)^{mn}|C|$ , 于是 $|C|: |D| = (-1)^{mn}$ .

6. 应选择 (D). 因为将该行列式的任意一行加到另一行上去得到的行列式有一行元素全是偶数 (注意: 零也是偶数), 由性质知道, 可将因子 2 提出, 剩下的行列式的元素都是整数, 其值也是整数, 乘以 2 后必是偶数.

7. 应选择 (A). 这是一个 Vandermonde 行列式, 计算得其值为 12.

8. 应选择 (D). 本题可以按行 (或列) 展开法做, 但是下列做法比较容易. 将行列式的第二、第三行对换, 再将得到的行列式的第二、第三列对换, 得到一个分块行列式:

$$
\left| \begin{array}{c c c c} a _ {1} & b _ {1} & 0 & 0 \\ a _ {2} & b _ {2} & 0 & 0 \\ 0 & 0 & c _ {1} & d _ {1} \\ 0 & 0 & c _ {2} & d _ {2} \end{array} \right|,
$$

其值容易算出，等于 $(a_{1}b_{2} - a_{2}b_{1})(c_{1}d_{2} - c_{2}d_{1})$ 

9. 应选择 (B). 本题应用行列式性质来做. 将原行列式的第一、第三行对换, 行列式的值变号. 再将所得行列式的第一行乘以 3, 第二行乘以 2, 第三行乘以 -1, 根据行列式的性质可知, 最后行列式的值为原行列式值的 6 倍.

10. 应选择 (B). 当方程组的系数行列式不等于零时, 方程组有唯一解. 因此

$$
\left| \begin{array}{c c c} b & 1 & 2 \\ 2 & - 1 & 2 \\ 4 & 1 & 4 \end{array} \right| \neq 0,
$$

解得 $b \neq 2$ .

11. 应选择 (C). 行列式转置后的值等于原行列式的值.

12. 应选择 (C).

13. 应选择 (C). 本题可先把行列式计算出来再解方程, 但下列方法更好. 注意到若第 (3,2) 元素 $x^{2} + 1$ 等于 2 , 则行列式的第一、第二列相同, 行列式的值等于零, 故 $x^{2} = 1$ , 即 $x = \pm 1$ . 同理, 若第 (2,3) 元素 $x^{2} - 2$ 等于 2 , 则行列式的第一、第二行相同, 行列式的值等于零, 故 $x^{2} = 4$ , 即 $x = \pm 2$ .

14. 应选择 (D). 将原行列式的第一列乘以 -1 分别加到其他 3 列, 得

$$
\begin{array}{l} f (x) = \left| \begin{array}{c c c c} x - 2 & 1 & 0 & - 1 \\ 2 x - 2 & 1 & 0 & - 1 \\ 3 x - 3 & 1 & x - 2 & - 2 \\ 4 x & - 3 & x - 7 & - 3 \end{array} \right| = \left| \begin{array}{c c c c} x - 2 & 1 & 0 & 0 \\ 2 x - 2 & 1 & 0 & 0 \\ 3 x - 3 & 1 & x - 2 & - 1 \\ 4 x & - 3 & x - 7 & - 6 \end{array} \right| \\ = \left| \begin{array}{l l} x - 2 & 1 \\ 2 x - 2 & 1 \end{array} \right| \cdot \left| \begin{array}{l l} x - 2 & - 1 \\ x - 7 & - 6 \end{array} \right| = 5 x (x - 1). \\ \end{array}
$$

所以 $f(x)$ 有两个根 $x_{1}=0, x_{2}=1$ .

15. 应选择 (B). 用递推法可求得行列式的值为 $n + 1$ .

##### 二、填空题

1. 行列式的第一、第二行元素成比例, 因此行列式的值为零.

2. $x^{4}$ (可参考例 1.37).

3. $\prod_{1\leq i<j\leq4}(x_{i}y_{j}-x_{j}y_{i})$ (可参考例 1.26).

4. 观察 $|A|$ , $|B|$ 的异同就可以发现, 如将 $|B|$ 的各行依次提出公因子 $b_{1}, b_{2}, \cdots, b_{n}$ , 再将 $|B|$ 的各列依次提出公因子 $b_{1}, b_{2}, \cdots, b_{n}$ , 余下的行列式就是 $|A|$ , 因此 $|B| = b_{1}^{2}b_{2}^{2}\cdots b_{n}^{2}c$ .

5. 将第二列乘以 -1 加到第一列上, 将第二列乘以 -2 加到第三列上, 再将 100 从第二列提出即可计算出行列式的值为 2000.

6.1. 

7. 将第二行乘以 -1 加到第一行, 行列式的值不变, 再按第一行进行展开, 即得 $\left|A\right|=A_{11}+A_{12}+A_{13}=1$ .

8. 计算下列行列式:

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c} 1 & 1 & 1 & 2 \\ 1 & 1 & - 2 & 0 \\ 1 & 2 & 0 & - 1 \\ 1 & 1 & 1 & 1 \end{array} \right| = - 3,
$$

注意到这个行列式和 $|\mathbf{A}|$ 前3行相同，因此第四行元素的代数余子式也相同，故 $A_{41} + A_{42} + A_{43} + A_{44} = -3.$ 

9. 由 $|\alpha_1, \alpha_2, \alpha_3, \beta| = a$ 得 $|\alpha_2, \alpha_3, \alpha_1, \beta| = a$ , 由 $|\alpha_1, \alpha_3, \gamma, \alpha_2| = b$ 得 $|\alpha_2, \alpha_3, \alpha_1, \gamma| = b$ , 故 $|\alpha_2, \alpha_3, \alpha_1, \beta + \gamma| = a + b$ .

10. $(-1)^{n-1}c.$ 

11. $(-1)^{n}c.$ 

12. 这个过程相当于将 $|\mathbf{A}|$ 的关于“中轴”对称的两列都对换, 然后将对称的两行也对换. 因此行列式的值不变, 为 $c$ .

13. 相当于将 $|\mathbf{A}|$ 的每个第 $i$ 行乘以 $(-1)^i$ , 每个第 $j$ 列乘以 $(-1)^j$ . 因此行列式的值不变, 仍为 $c$ .

14. 相当于将 $|\mathbf{A}|$ 的每个第 $i$ 行乘以 $b^{i}$ , 每个第 $j$ 列乘以 $b^{-j}$ . 因此行列式的值不变, 仍为 $c$ .

15. 将得到的行列式按列拆分为行列式的和, 可知: 若 $n$ 为奇数, 则得到的行列式的值为 $2c$ ; 若 $n$ 为偶数, 则得到的行列式的值为零.

##### 三、解答题

1. $(-1)^{\frac{1}{2}n(n-1)}n!$ . 

2.-6. 

3. 方程的根为 $a_{1}, a_{2}, \cdots, a_{n-1}$ .

4. 该方程组的系数行列式是一个 Vandermonde 行列式, 因为 $a_{i}$ 各不相同, 故此行列式不等于零, 从而方程组有唯一组解.

5. 依次将第 i 行乘以 -1 加到第 $i+1$ 行上 $(i=1,2,\cdots,n-1)$ ，就得到一个 Vandermonde 行列式，因此答案是： $\prod_{1\leq i<j\leq n}(x_{j}-x_{i})$ .

6. 方程的根为 $0,1,2,\cdots,n-2$ .

7. $M_{ij}$ 是一个上三角行列式且主对角线上至少有一个0, 因此 $M_{ij} = 0$ , 从而 $A_{ij} = 0$ .

8. 行列式按第一列展开得到递推式, 再对 n 进行归纳即得.

9. 利用例 1.14.

10. 按第一列展开即得行列式的值为 $a^{n} + (-1)^{n+1}b^{n}$ .

11. 从第二行起, 每一行减去第一行得到一个上三角行列式, 因此答案为 $a_0(x - a_1) \cdots (x - a_n)$ .

12. 利用例 1.16 或例 1.23 的结论或方法可得行列式的值为 $\frac{1}{2} \left( (x - a)^n + (x + a)^n \right)$ .

13. 写出行列式为

$$
\left| \begin{array}{c c c c c} 1 & 2 & 3 & \dots & n \\ 2 & 2 & 3 & \dots & n \\ 3 & 3 & 3 & \dots & n \\ \vdots & \vdots & \vdots & & \vdots \\ n & n & n & \dots & n \end{array} \right|.
$$

依次将第 i 行乘以 -1 加到第 i-1 行上去 $(i=2,\cdots,n)$ ，就可以得到一个下三角行列式，求得值为 $(-1)^{n-1}n$ .

14. 写出行列式为

$$
\left| \begin{array}{c c c c c} 0 & 1 & 2 & \dots & n - 1 \\ 1 & 0 & 1 & \dots & n - 2 \\ 2 & 1 & 0 & \dots & n - 3 \\ \vdots & \vdots & \vdots & & \vdots \\ n - 1 & n - 2 & n - 3 & \dots & 0 \end{array} \right|.
$$

从最后一列起每一列减去前一列, 再将得到的行列式的最后一行加到前面的每一行上去, 就可以得到一个下三角行列式, 求得值为 $(-1)^{n-1}(n-1)2^{n-2}$ .

15. 将原行列式升阶为如下行列式:

$$
| \boldsymbol {B} | = \left| \begin{array}{c c c c c c} 1 & x _ {1} - a & x _ {1} (x _ {1} - a) & x _ {1} ^ {2} (x _ {1} - a) & \dots & x _ {1} ^ {n - 1} (x _ {1} - a) \\ 1 & x _ {2} - a & x _ {2} (x _ {2} - a) & x _ {2} ^ {2} (x _ {2} - a) & \dots & x _ {2} ^ {n - 1} (x _ {2} - a) \\ \vdots & \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} - a & x _ {n} (x _ {n} - a) & x _ {n} ^ {2} (x _ {n} - a) & \dots & x _ {n} ^ {n - 1} (x _ {n} - a) \\ 1 & y - a & y (y - a) & y ^ {2} (y - a) & \dots & y ^ {n - 1} (y - a) \end{array} \right|.
$$

利用例 1.27 可求出 $|B|$ 的值. 另一方面, 将 $|B|$ 按最后一行展开成为关于 y 的多项式. 若 a = 0, 比较 y 前面的系数可得 $|A| = \prod_{1 \leq i < j \leq n} (x_j - x_i) \left( \sum_{i=1}^{n} x_1 \cdots x_{i-1} x_{i+1} \cdots x_n \right)$ ; 若 $a \neq 0$ , 比较常数项可得 $|A| = \frac{1}{a} \prod_{1 \leq i < j \leq n} (x_j - x_i) \left( \prod_{i=1}^{n} x_i - \prod_{i=1}^{n} (x_i - a) \right)$ .
