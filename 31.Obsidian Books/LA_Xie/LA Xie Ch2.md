## 第2章 矩阵

## § 2.1 基本概念

## 2.1.1 矩阵及其运算

## 1. 矩阵的定义

由 $m \times n$ 个数 $a_{ij} (1 \leq i \leq m, 1 \leq j \leq n)$ 排成 $m$ 行 $n$ 列的如下矩形阵列：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right)
$$

称为 m 行 n 列矩阵, 简称 $m \times n$ 矩阵.

## 2. 矩阵的运算

(1) 矩阵的加法与数乘. 设有两个 $m \times n$ 矩阵 $\mathbf{A} = (a_{ij})$ , $\mathbf{B} = (b_{ij})$ , 定义 $\mathbf{A} + \mathbf{B}$ 仍是一个 $m \times n$ 矩阵, 且 $\mathbf{A} + \mathbf{B}$ 的第 $(i,j)$ 元素等于 $a_{ij} + b_{ij}$ , 即 $\mathbf{A} + \mathbf{B} = (a_{ij} + b_{ij})$ . 若 $k$ 是一个数, 定义 $k$ 和矩阵 $\mathbf{A}$ 的乘法也是一个 $m \times n$ 矩阵, 且 $k\mathbf{A}$ 的第 $(i,j)$ 元素等于 $ka_{ij}$ , 即 $k\mathbf{A} = (ka_{ij})$ .

矩阵的加法和数乘适合的法则 (我们假设下列矩阵都是 $m \times n$ 矩阵):

(i) $A + B = B + A;$ 

(ii) $(\boldsymbol{A} + \boldsymbol{B}) + \boldsymbol{C} = \boldsymbol{A} + (\boldsymbol{B} + \boldsymbol{C})$ ; 

(iii) $O + A = A + O = A$ (这里 O 表示 $m \times n$ 零矩阵);

(iv) $A + (-A) = O;$ 

(v) $1 \cdot A = A;$ 

(vi) $k(\boldsymbol{A} + \boldsymbol{B}) = k\boldsymbol{A} + k\boldsymbol{B};$ 

(vii) $(k + l)\mathbf{A} = k\mathbf{A} + l\mathbf{A};$ 

(viii) $(kl)\mathbf{A}=k(l\mathbf{A})$ . 

(2) 矩阵的乘法. 设 $A = (a_{ij})$ , $B = (b_{ij})$ 分别是 $m \times k$ 矩阵和 $k \times n$ 矩阵, 定义 $A$ 与 $B$ 的乘积 $AB$ 是一个 $m \times n$ 矩阵, 它的第 $(i,j)$ 元素 $c_{ij}$ 等于:

$$
c _ {i j} = a _ {i 1} b _ {1 j} + a _ {i 2} b _ {2 j} + \dots + a _ {i k} b _ {k j}.
$$

矩阵乘法适合的法则:

(i) $(AB)C = A(BC);$ 

(ii) $(A+B)C = AC + BC, C(A+B) = CA + CB;$ 

(iii) $k(\boldsymbol{A}\boldsymbol{B}) = (k\boldsymbol{A})\boldsymbol{B} = \boldsymbol{A}(k\boldsymbol{B}).$ 

(3) 方阵的幂. 设 $A = (a_{ij})$ 是 $n$ 阶方阵, 定义 $A$ 的 $k$ 次幂为 $k$ 个 $A$ 的乘积, 即 $A^k = A \cdot A \cdots A (k$ 个 $A$ ).

方阵幂适合的法则:

(i) $A^{r}A^{s}=A^{r+s};$ 

(ii) $(\boldsymbol{A}^{r})^{s} = \boldsymbol{A}^{rs}.$ 

(4) 矩阵的转置. 设 $A = (a_{ij})$ 是一个 $m \times n$ 矩阵, 定义 $A$ 的转置 $A'$ (或写为 $A^{\mathrm{T}}$ ) 为一个 $n \times m$ 矩阵, 它的第 $j$ 行正好是 $A$ 的第 $j$ 列 $(1 \leq j \leq n)$ .

矩阵转置适合的法则:

(i) $(A')' = A;$ 

(ii) $(A+B)'=A'+B';$ 

(iii) $(k\mathbf{A})' = k\mathbf{A}'$ ; 

(iv) $(AB)' = B'A'$ . 

(5) 矩阵的共轭. 设 $A = (a_{ij})$ 是一个 $m \times n$ 复数矩阵, 定义 $A$ 的共轭为一个 $m \times n$ 矩阵 $\overline{A} = (\overline{a_{ij}})$ .

矩阵共轭适合的法则:

(i) $\overline{A+B}=\overline{A}+\overline{B};$ 

(ii) $\overline{kA} = \overline{k}\overline{A};$ 

(iii) $\overline{AB} = \overline{A}\overline{B};$ 

(iv) $\overline{(\boldsymbol{A}^{\prime})} = (\overline{\boldsymbol{A}})^{\prime}.$ 

## 3. 方阵乘积的行列式

定理 两个同阶方阵乘积的行列式等于行列式的乘积, 即有 $|AB| = |A||B|$ .

## 2.1.2 逆矩阵

## 1. 逆矩阵的概念

设 A 是 n 阶方阵, 如果存在 n 阶方阵 B, 使得 $AB = BA = I_{n}$ (其中 $I_{n}$ 是 n 阶单位矩阵), 则称 A 是可逆矩阵, 称 B 是 A 的逆矩阵, 记 $B = A^{-1}$ . 可逆矩阵也称非奇异矩阵, 简称非异阵. 并不是任意一个非零的 n 阶方阵都是可逆矩阵, 不是可逆矩阵的方阵称为奇异矩阵, 简称奇异阵.

求逆运算适合下列法则 (下列矩阵均假设是可逆矩阵):

(i) $(A^{-1})^{-1}=A;$ 

(ii) $(AB)^{-1} = B^{-1}A^{-1}$ ; 

(iii) $(kA)^{-1}=k^{-1}A^{-1}$ (k是非零常数);

(iv) $(\boldsymbol{A}^{\prime})^{-1} = (\boldsymbol{A}^{-1})^{\prime}.$ 

## 2. 可逆矩阵和奇异阵的性质

性质 1 可逆矩阵之积必是可逆矩阵.

性质 2 任意一个方阵和同阶奇异阵之积必是奇异阵.

## 3. 伴随矩阵

设 $\boldsymbol{A}=(a_{ij})$ 是一个 n 阶方阵, 行列式 $|A|$ 中元素 $a_{ij}$ 的代数余子式记为 $A_{ij}$ , 称下列矩阵为 A 的伴随矩阵, 记为 $A^{*}$ :

$$
\boldsymbol {A} ^ {*} = \left( \begin{array}{c c c c} A _ {1 1} & A _ {2 1} & \dots & A _ {n 1} \\ A _ {1 2} & A _ {2 2} & \dots & A _ {n 2} \\ \vdots & \vdots & & \vdots \\ A _ {1 n} & A _ {2 n} & \dots & A _ {n n} \end{array} \right).
$$

伴随矩阵具有下列重要的性质:

$$
\boldsymbol {A} \boldsymbol {A} ^ {*} = \boldsymbol {A} ^ {*} \boldsymbol {A} = | \boldsymbol {A} | \boldsymbol {I} _ {n}.
$$

## 4. 定理

设 $\boldsymbol{A}=(a_{ij})$ 是 n 阶方阵, 则 A 是可逆矩阵的充要条件是 A 的行列式 $|A|\neq0$ , 此时

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{| \boldsymbol {A} |} \boldsymbol {A} ^ {*}.
$$

## 2.1.3 矩阵的初等变换与初等矩阵

## 1. 初等变换

下列 3 种矩阵变换分别称为矩阵的第一、第二、第三类初等行 (列) 变换:

(1) 对换矩阵中的某两行 (列);

(2) 用非零常数 k 乘以矩阵的某一行 (列);

(3) 将矩阵的某一行 (列) 乘以常数 $k$ 后加到另一行 (列) 上去.

## 2. 定理

任一 $m \times n$ 矩阵 $\mathbf{A} = (a_{ij})$ 总可经过有限次初等变换化为下列形式的 $m \times n$ 矩阵:

$$
\left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

这是一个分块矩阵, $I_{r}$ 表示 r 阶单位矩阵, O 表示零矩阵.

## 3. 初等矩阵

设 $I_{n}$ 是 $n$ 阶单位矩阵, 对换 $I_{n}$ 的第 $i$ 行和第 $j$ 行, 得到第一类初等矩阵 $P_{ij}$ ; 用非零常数 $k$ 乘以 $I_{n}$ 的第 $i$ 行, 得到第二类初等矩阵 $P_{i}(k)$ ; 将 $I_{n}$ 的第 $i$ 行乘以常数 $k$ 后加到第 $j$ 行上去, 得到第三类初等矩阵 $T_{ij}(k)$ .

三类初等矩阵都是可逆矩阵, 即为非异阵.

三类初等矩阵的行列式值分别为: $|\pmb{P}_{ij}| = -1, |\pmb{P}_i(k)| = k, |\pmb{T}_{ij}(k)| = 1$ .

## 4. 定理

设 $\mathbf{A}$ 是 $m \times n$ 矩阵, 则对 $\mathbf{A}$ 作一次初等行变换后得到的矩阵等于用一个相应的 $m$ 阶初等矩阵左乘 $\mathbf{A}$ 所得的积, 矩阵 $\mathbf{A}$ 作一次初等列变换后得到的矩阵等于用一个相应的 $n$ 阶初等矩阵右乘 $\mathbf{A}$ 所得的积.

## 5. 矩阵的等价（相抵）

如果矩阵 A 经过若干次初等变换后变成矩阵 B，则称矩阵 A 和 B 等价（相抵）.
两个同阶矩阵等价（相抵）当且仅当它们具有相同的秩.

## 6. 与初等变换、矩阵奇异性相关的几个命题

定理 1 一个奇异阵经过初等变换后仍是奇异阵; 一个可逆矩阵经过初等变换后仍是可逆矩阵.

定理 2 以下是矩阵可逆的等价命题:

(1) $n$ 阶方阵 $\pmb{A}$ 可逆的充要条件是 $\pmb{A}$ 的行列式 $|\pmb{A}| \neq 0$ ;

(2) $n$ 阶方阵 $\mathbf{A}$ 可逆的充要条件是 $\mathbf{A}$ 等价 (相抵) 于 $n$ 阶单位矩阵;

(3) $n$ 阶方阵 $\mathbf{A}$ 可逆的充要条件是 $\mathbf{A}$ 可以表示为有限个初等矩阵的积;

(4) $n$ 阶方阵 $\mathbf{A}$ 可逆的充要条件是 $\mathbf{A}$ 的 $n$ 个行向量 (列向量) 线性无关.

## 7. 用初等变换法求逆矩阵

设 A 是 n 阶非异阵, 作 $n \times 2n$ 矩阵 $(A; I_{n})$ , 对这个矩阵作初等行变换, 将 A 变成单位矩阵 $I_{n}$ , 这时右边一块就变成了 $A^{-1}$ .

## 2.1.4 分块矩阵

## 1. 分块矩阵的概念

设 $\pmb{A}$ 是一个 $m \times n$ 矩阵, 若用若干条横虚线将它分成 $r$ 块, 再用若干条纵虚线将它分成 $s$ 块, 则得到了一个有 $rs$ 块的分块矩阵, 可记为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} \boldsymbol {A} _ {1 1} & \boldsymbol {A} _ {1 2} & \dots & \boldsymbol {A} _ {1 s} \\ \boldsymbol {A} _ {2 1} & \boldsymbol {A} _ {2 2} & \dots & \boldsymbol {A} _ {2 s} \\ \vdots & \vdots & & \vdots \\ \boldsymbol {A} _ {r 1} & \boldsymbol {A} _ {r 2} & \dots & \boldsymbol {A} _ {r s} \end{array} \right).
$$

这里 $A_{ij}$ 表示一个矩阵, 而不是一个数. $A_{ij}$ 通常称为 A 的第 $(i,j)$ 块.

## 2. 分块矩阵的运算

分块矩阵的运算在形式上和数字矩阵完全一样, 我们在这里不再赘述. 最重要的分块矩阵是下面的分块对角阵.

## 3. 分块对角阵

分块对角阵经常要用到的运算是:

(1) 乘法: 若 $A, B$ 是分块对角阵且符合相乘条件, 则 $AB$ 也是分块对角阵, 即

有

$$
\left( \begin{array}{c c c c} A _ {1} & & & \\ & A _ {2} & & \\ & & \ddots & \\ & & & A _ {s} \end{array} \right) \left( \begin{array}{c c c c} B _ {1} & & & \\ & B _ {2} & & \\ & & \ddots & \\ & & & B _ {s} \end{array} \right) = \left( \begin{array}{c c c c} A _ {1} B _ {1} & & & \\ & A _ {2} B _ {2} & & \\ & & \ddots & \\ & & & A _ {s} B _ {s} \end{array} \right).
$$

(2) 乘方:

$$
\left( \begin{array}{c c c c} A _ {1} & & & \\ & A _ {2} & & \\ & & \ddots & \\ & & & A _ {s} \end{array} \right) ^ {k} = \left( \begin{array}{c c c c} A _ {1} ^ {k} & & & \\ & A _ {2} ^ {k} & & \\ & & \ddots & \\ & & & A _ {s} ^ {k} \end{array} \right).
$$

(3) 求逆: 若 $A_{1}, A_{2}, \cdots, A_{s}$ 都是可逆矩阵, 则

$$
\left( \begin{array}{c c c c} \boldsymbol {A} _ {1} & & & \\ & \boldsymbol {A} _ {2} & & \\ & & \ddots & \\ & & & \boldsymbol {A} _ {s} \end{array} \right) ^ {- 1} = \left( \begin{array}{c c c c} \boldsymbol {A} _ {1} ^ {- 1} & & & \\ & \boldsymbol {A} _ {2} ^ {- 1} & & \\ & & \ddots & \\ & & & \boldsymbol {A} _ {s} ^ {- 1} \end{array} \right).
$$

## 4. 分块初等变换

所谓分块初等变换和普通的初等变换类似, 包含 3 类:

第一类: 对换分块矩阵的两个分块行 (分块列);

第二类: 以某个可逆矩阵左乘以分块矩阵的某一分块行, 或右乘以某一分块列;

第三类: 以某个矩阵左乘以分块矩阵的某一分块行后加到另一分块行上去, 或以某个矩阵右乘以分块矩阵的某一分块列后加到另一分块列上去.

我们假设上面所提到的运算都是可以进行的.

## 5. 分块初等矩阵

和普通矩阵一样, 我们也有分块初等矩阵的概念. 记 $I = \mathrm{diag}\{I_{m_1}, I_{m_2}, \cdots, I_{m_k}\}$ 是分块单位矩阵, 定义下列 3 种矩阵为 3 类分块初等矩阵:

第一类: 对换 I 的第 i 分块行与第 j 分块行得到的矩阵;

第二类: 以可逆矩阵 C 左乘以 I 的第 i 分块行得到的矩阵;

第三类: 以矩阵 B 左乘以 I 的第 i 分块行后加到第 j 分块行上得到的矩阵.

分块初等矩阵都是可逆矩阵, 其中第三类分块初等矩阵的行列式值等于 1.

## 6. 定理

矩阵的分块初等行 (列) 变换等价于用同类分块初等矩阵左 (右) 乘以被变换的矩阵. 特别地, 第三类分块初等变换不改变矩阵的行列式值; 分块初等变换不改变矩阵的秩 (秩的概念将在下一章介绍).

## 2.1.5 Cauchy-Binet 公式

Cauchy-Binet 公式可以看成是矩阵乘法的行列式定理的推广。它是矩阵理论中的一个重要定理，有许多重要的应用。这个定理及其推论的证明请参考教材 [1] 的 § 2.7.

## 1. 定理 (Cauchy-Binet 公式)

设 $\boldsymbol{A}=(a_{ij})$ 是 $m\times n$ 矩阵, $\boldsymbol{B}=(b_{ij})$ 是 $n\times m$ 矩阵. $\boldsymbol{A}\begin{pmatrix}i_{1}&\cdots&i_{s}\\j_{1}&\cdots&j_{s}\end{pmatrix}$ 表示 A 的一个 s 阶子式, 它是由 A 的第 $i_{1},\cdots,i_{s}$ 行与第 $j_{1},\cdots,j_{s}$ 列交点上的元素按原次序排列组成的行列式. 同理定义 B 的 s 阶子式.

(1) 若 $m > n$ , 则有 $|AB| = 0$ ;

(2) 若 $m \leq n$ , 则有

$$
| \boldsymbol {A} \boldsymbol {B} | = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {m} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ j _ {1} & j _ {2} & \dots & j _ {m} \end{array} \right) \boldsymbol {B} \left( \begin{array}{c c c c} j _ {1} & j _ {2} & \dots & j _ {m} \\ 1 & 2 & \dots & m \end{array} \right).
$$

## 2. 推论

设 $\boldsymbol{A}=(a_{ij})$ 是 $m\times n$ 矩阵, $\boldsymbol{B}=(b_{ij})$ 是 $n\times m$ 矩阵, r 是一个正整数且 $r\leq m$ .

(1) 若 $r > n$ , 则 $\pmb{AB}$ 的任意 $r$ 阶子式都等于零;

(2) 若 $r \leq n$ , 则 $AB$ 的 $r$ 阶子式

$$
\boldsymbol {A} \boldsymbol {B} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right) = \sum_ {1 \leq k _ {1} <   k _ {2} <   \dots <   k _ {r} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ k _ {1} & k _ {2} & \dots & k _ {r} \end{array} \right) \boldsymbol {B} \left( \begin{array}{c c c c} k _ {1} & k _ {2} & \dots & k _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right).
$$

## § 2.2 特殊矩阵

本节将介绍 8 类特殊的矩阵. 随着学习的深入, 读者会发现这些特殊矩阵在矩阵结构的研究中发挥了重要的作用.

## 1. 标准单位向量

n 维标准单位列向量是指下列 n 个 n 维列向量:

$$
\boldsymbol {e} _ {1} = \left( \begin{array}{c} 1 \\ 0 \\ \vdots \\ 0 \end{array} \right), \quad \boldsymbol {e} _ {2} = \left( \begin{array}{c} 0 \\ 1 \\ \vdots \\ 0 \end{array} \right), \quad \dots , \quad \boldsymbol {e} _ {n} = \left( \begin{array}{c} 0 \\ 0 \\ \vdots \\ 1 \end{array} \right).
$$

向量组 $e_{1}^{\prime}, e_{2}^{\prime}, \cdots, e_{n}^{\prime}$ 则被称为 n 维标准单位行向量. 设 $f_{1}, f_{2}, \cdots, f_{m}$ 是 m 维标准单位列向量, 则容易验证标准单位向量有下列基本性质 (请读者自己完成):

(1) 若 $i \neq j$ , 则 $\pmb{e}_i^\prime \pmb{e}_j = 0$ , 而 $\pmb{e}_i^\prime \pmb{e}_i = 1$ ;

(2) 若 $A = (a_{ij})$ 是 $m \times n$ 矩阵, 则 $A e_i$ 是 $A$ 的第 $i$ 个列向量; $f_i' A$ 是 $A$ 的第 $i$ 个行向量;

(3) 若 $\boldsymbol{A}=(a_{ij})$ 是 $m \times n$ 矩阵，则 $f_{i}^{\prime}\boldsymbol{A}\boldsymbol{e}_{j}=a_{ij}$ ;

(4) 判定准则 设 $A, B$ 都是 $m \times n$ 矩阵, 则 $A = B$ 当且仅当 $A e_{i} = B e_{i}$ ( $1 \leq i \leq n$ ) 成立, 也当且仅当 $f_{i}' A = f_{i}' B$ ( $1 \leq i \leq m$ ) 成立.

## 2. 基础矩阵

n 阶基础矩阵 (又称初级矩阵) 是指 $n^{2}$ 个 n 阶矩阵 $\{E_{ij}, 1 \leq i, j \leq n\}$ . 这里 $E_{ij}$ 是一个 n 阶矩阵, 它的第 $(i, j)$ 元素等于 1, 其他元素全为 0. 基础矩阵也可以看成是标准单位向量的积: $E_{ij} = e_{i} e_{j}^{\prime}$ . 由此不难证明基础矩阵的下列性质:

(1) 若 $j \neq k$ , 则 $\pmb{E}_{ij} \pmb{E}_{kl} = \pmb{O}$ ;

(2) 若 $j = k$ , 则 $\pmb{E}_{ij}\pmb{E}_{kl} = \pmb{E}_{il}$ ;

(3) 若 $\mathbf{A}$ 是 $n$ 阶矩阵且 $\mathbf{A} = (a_{ij})$ , 则 $\mathbf{A} = \sum_{i,j=1}^{n} a_{ij} \mathbf{E}_{ij}$ ;

(4) 若 $\mathbf{A}$ 是 $n$ 阶矩阵且 $\mathbf{A} = (a_{ij})$ , 则 $\mathbf{E}_{ij}\mathbf{A}$ 的第 $i$ 行是 $\mathbf{A}$ 的第 $j$ 行, $\mathbf{E}_{ij}\mathbf{A}$ 的其他行全为零;

(5) 若 $\mathbf{A}$ 是 $n$ 阶矩阵且 $\mathbf{A} = (a_{ij})$ , 则 $\mathbf{AE}_{ij}$ 的第 $j$ 列是 $\mathbf{A}$ 的第 $i$ 列, $\mathbf{AE}_{ij}$ 的其他列全为零;

(6) 若 $\mathbf{A}$ 是 $n$ 阶矩阵且 $\mathbf{A} = (a_{ij})$ , 则 $\mathbf{E}_{ij}\mathbf{A}\mathbf{E}_{kl} = a_{jk}\mathbf{E}_{il}$ .

标准单位向量和基础矩阵虽然很简单, 但如能灵活应用就可以得到出乎意外的结果. 我们在今后将经常应用它们, 因此请读者熟记这些结论.

## 3. 基础循环矩阵

例2.1 设 $n$ 阶基础循环矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ 1 & 0 & 0 & \dots & 0 \end{array} \right),
$$

求证:

$$
\boldsymbol {A} ^ {k} = \left( \begin{array}{c c} \boldsymbol {O} & \boldsymbol {I} _ {n - k} \\ \boldsymbol {I} _ {k} & \boldsymbol {O} \end{array} \right), 1 \leq k \leq n.
$$

证明 将 A 写为 $\boldsymbol{A} = (\boldsymbol{e}_{n}, \boldsymbol{e}_{1}, \boldsymbol{e}_{2}, \cdots, \boldsymbol{e}_{n-1})$ ，其中 $e_{i}$ 是标准单位列向量。由分块矩阵乘法并注意 $Ae_{i}$ 就是 A 的第 i 列，因此

$$
\boldsymbol {A} ^ {2} = \left(\boldsymbol {A} \boldsymbol {e} _ {n}, \boldsymbol {A} \boldsymbol {e} _ {1}, \boldsymbol {A} \boldsymbol {e} _ {2}, \dots , \boldsymbol {A} \boldsymbol {e} _ {n - 1}\right) = \left(\boldsymbol {e} _ {n - 1}, \boldsymbol {e} _ {n}, \boldsymbol {e} _ {1}, \dots , \boldsymbol {e} _ {n - 2}\right).
$$

不断这样做下去就可得到结论. □

## 4. 幂零 Jordan 块

例2.2 设 $n$ 阶幂零Jordan块

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ 0 & 0 & 0 & \dots & 0 \end{array} \right),
$$

求证:

$$
\boldsymbol {A} ^ {k} = \left( \begin{array}{c c} \boldsymbol {O} & \boldsymbol {I} _ {n - k} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right), 1 \leq k \leq n.
$$

证明 将 A 写为 $A = (0, e_{1}, e_{2}, \cdots, e_{n-1})$ ，其中 $e_{i}$ 是标准单位列向量。由分块矩阵乘法并注意 $Ae_{i}$ 就是 A 的第 i 列，因此

$$
\boldsymbol {A} ^ {2} = \left(\mathbf {0}, \boldsymbol {A e} _ {1}, \boldsymbol {A e} _ {2}, \dots , \boldsymbol {A e} _ {n - 1}\right) = \left(\mathbf {0}, \mathbf {0}, \boldsymbol {e} _ {1}, \dots , \boldsymbol {e} _ {n - 2}\right).
$$

不断这样做下去就可得到结论. □

## 5. 多项式的友阵与 Frobenius 块

例 2.3 设首一多项式 $f(x)=x^{n}+a_{1}x^{n-1}+\cdots+a_{n-1}x+a_{n}, f(x)$ 的友阵

$$
\boldsymbol {C} (f (x)) = \left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & - a _ {n} \\ 1 & 0 & \dots & 0 & - a _ {n - 1} \\ 0 & 1 & \dots & 0 & - a _ {n - 2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & - a _ {1} \end{array} \right),
$$

求证: $|xI_n - C(f(x))| = f(x)$ . $C(f(x))$ 的转置 $F(f(x))$ 称为 $f(x)$ 的 Frobenius 块.

证明 教材 [1] 的例 1.5.7 给出了上述行列式的计算, 这里不再赘述. 注意到 $C(f(x))$ 具有以下性质, 其中 $\pmb{e}_i$ 是标准单位列向量:

$$
\boldsymbol {C} (f (x)) \boldsymbol {e} _ {i} = \boldsymbol {e} _ {i + 1} (1 \leq i \leq n - 1), \boldsymbol {C} (f (x)) \boldsymbol {e} _ {n} = - \sum_ {i = 1} ^ {n} a _ {n - i + 1} \boldsymbol {e} _ {i}. \square
$$

## 6. 对称阵与反对称阵

例 2.4 设 A 为 n 阶对称阵, 求证: A 是零矩阵的充要条件是对任意的 n 维列向量 $\alpha$ , 有

$$
\alpha^ {\prime} A \alpha = 0.
$$

证明 只要证明充分性. 设 $A = (a_{ij})$ , 令 $\alpha = e_i$ 是第 $i$ 个标准单位列向量. 因为 $e_i' A e_i$ 是 $A$ 的第 $(i, i)$ 元素, 故 $a_{ii} = 0$ . 又令 $\alpha = e_i + e_j (i \neq j)$ , 则

$$
0 = \left(\boldsymbol {e} _ {i} + \boldsymbol {e} _ {j}\right) ^ {\prime} \boldsymbol {A} \left(\boldsymbol {e} _ {i} + \boldsymbol {e} _ {j}\right) = a _ {i i} + a _ {j j} + a _ {i j} + a _ {j i}.
$$

由于 A 是对称阵, 故 $a_{ij} = a_{ji}$ , 又上面已经证明 $a_{ii} = a_{jj} = 0$ , 从而 $a_{ij} = 0$ , 这就证明了 A = O. □

应用上题结论, 我们可以证明下列基本结论, 即反对称阵的刻画.

例 2.5 设 A 为 n 阶方阵, 求证: A 是反对称阵的充要条件是对任意的 n 维列向量 $\alpha$ , 有

$$
\alpha^ {\prime} A \alpha = 0.
$$

证明 若 A 是反对称阵, 则对任意的 n 维列向量 $\alpha$ , 有 $(\alpha^{\prime}A\alpha)^{\prime} = -\alpha^{\prime}A\alpha$ . 而 $\alpha^{\prime}A\alpha$ 是数, 因此 $(\alpha^{\prime}A\alpha)^{\prime} = \alpha^{\prime}A\alpha$ . 比较上面两个式子便有 $\alpha^{\prime}A\alpha = 0$ . 反之, 若上式对任意的 $n$ 维列向量 $\alpha$ 成立, 则 $\alpha' A'\alpha = 0$ , 故 $\alpha'(A + A')\alpha = 0$ . 因为矩阵 $A + A'$ 是对称阵, 故由上题可得 $A + A' = O$ , 即 $A' = -A$ , $A$ 是反对称阵. $\square$ 

## 7. 对角阵, 上 (下) 三角阵, 分块对角阵, 分块上 (下) 三角阵

例 2.6 设 A 是 n 阶上三角阵且主对角线上元素全为零, 求证: $A^{n} = O$ .

证法1 设 $A = (a_{ij})$ ，当 $i \geq j$ 时， $a_{ij} = 0$ 。将 $A$ 表示为基础矩阵 $E_{ij}$ 之和：

$$
\boldsymbol {A} = \sum_ {i <   j} a _ {i j} \boldsymbol {E} _ {i j}.
$$

因为当 $j \neq k$ 时, $E_{ij}E_{kl} = O$ , 故在 $A^{n}$ 的乘法展开式中, 可能非零的项只能是具有形状 $E_{ij_{1}}E_{j_{1}j_{2}}E_{j_{2}j_{3}}\cdots E_{j_{n-1}j_{n}}$ , 但足标必须满足条件 $1 \leq i < j_{1} < j_{2} < j_{3} < \cdots < j_{n} \leq n$ . 显然这样的项也不存在, 因此 $A^{n} = O$ .

证法 2 由假设 $A e_{i} = a_{1 i} e_{1} + \cdots + a_{i - 1, i} e_{i - 1} (1 \leq i \leq n)$ , 我们只要用归纳法证明: $A^{k} e_{k} = 0$ 对任意的 $1 \leq k \leq n$ 都成立, 则 $A^{n} e_{i} = 0$ 对任意的 $1 \leq i \leq n$ 都成立, 从而 $A^{n} = O$ 成立. 显然, $A e_{1} = 0$ 成立. 假设 $A^{i} e_{i} = 0$ 对任意的 $i < k$ 都成立, 则

$$
\begin{array}{r c l} \boldsymbol {A} ^ {k} \boldsymbol {e} _ {k} & = & \boldsymbol {A} ^ {k - 1} (\boldsymbol {A} \boldsymbol {e} _ {k}) = \boldsymbol {A} ^ {k - 1} (a _ {1 k} \boldsymbol {e} _ {1} + \dots + a _ {k - 1, k} \boldsymbol {e} _ {k - 1}) \\ & = & a _ {1 k} \boldsymbol {A} ^ {k - 1} \boldsymbol {e} _ {1} + \dots + a _ {k - 1, k} \boldsymbol {A} ^ {k - 1} \boldsymbol {e} _ {k - 1} = \mathbf {0}. \square \end{array}
$$

## 8. 初等阵，分块初等阵

我们将在 § 2.5 详细讨论初等变换与初等阵, 在 § 2.10 详细讨论分块初等变换与分块初等阵.

## § 2.3 矩阵的运算

矩阵的运算包括加减法、数乘、乘法、转置和共轭等. 对于方阵, 还有幂、多项式、伴随和求逆等运算. 我们将在 §2.4 讨论求逆, 在 §2.6 讨论伴随. 首先来看一个矩阵乘法的简单例子.

例 2.7 若 A, B 都是由非负实数组成的矩阵且 AB 有一行等于零, 求证: 或者 A 有一行为零, 或者 B 有一行为零.

证明 设 $\boldsymbol{A}=(a_{ij})_{m\times n},\boldsymbol{B}=(b_{ij})_{n\times s}$ . 假设 C=AB, $\boldsymbol{C}=(c_{ij})_{m\times s}$ 的第 i 行为零, 则对任意的 j, $c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}=0$ . 已知 $a_{ij}\geq0, b_{ij}\geq0$ . 若

A 的第 i 行元素不全为零, 不妨设 $a_{ik} \neq 0$ , 而 $a_{il} = 0, l = 1, \cdots, k - 1$ , 则 $b_{kj} = 0$ 对一切 j 成立, 这就是说 B 的第 k 行为零. □

上 (下) 三角阵是指主对角线下 (上) 方所有元素全为零的方阵, 它们在矩阵理论中发挥了重要的作用.

例 2.8 求证: 上 (下) 三角阵的加减、数乘、乘积 (幂)、多项式、伴随和求逆仍然是上 (下) 三角阵, 并且所得上 (下) 三角阵的主对角元是原上 (下) 三角阵对应主对角元的加减、数乘、乘积 (幂)、多项式、伴随和求逆.

证明 只证上三角阵的情形, 下三角阵的情形完全类似. 上三角阵的加减、数乘、乘积 (幂) 以及多项式结论的证明比较简单, 留给读者完成. 下面来证明伴随和求逆的结论. 设 $A = (a_{ij})$ 为 $n$ 阶上三角阵, 即满足 $a_{ij} = 0 (\forall i > j)$ . 取定 $i \leq j$ , 设 $a_{ij}$ 的余子式 $M_{ij} = |b_{kl}|$ , 代数余子式 $A_{ij} = (-1)^{i+j} M_{ij}$ , 则有

$$
b _ {k l} = \left\{ \begin{array}{l l} a _ {k l}, & \text {当} k \leq i - 1 \text {且} l \leq j - 1 \text {时}; \quad \dots (1) \\ a _ {k, l + 1}, & \text {当} k \leq i - 1 \text {且} l \geq j \text {时}; \quad \dots (2) \\ a _ {k + 1, l}, & \text {当} k \geq i \text {且} l \leq j - 1 \text {时}; \quad \dots (3) \\ a _ {k + 1, l + 1}, & \text {当} k \geq i \text {且} l \geq j \text {时}. \end{array} \right. \tag {4}
$$

若 k > l，则在情况 (1,3,4) 中有 $b_{kl} = 0$ ，并且情况 (2) 不可能发生，因为此时有 i > k > l ≥ j，这与 $i \leq j$ 矛盾。因此， $A_{ij}$ 是一个上三角行列式。进一步，若 i < j，则在情况 (3) 中，在闭区间 $[i, j - 1]$ 里一定可取到 k = l，此时 $b_{kk} = a_{k+1,k} = 0$ ，即 $A_{ij}$ 的主对角元中至少有一个为零，从而 $A_{ij} = 0 (\forall i < j)$ 成立。若 i = j，则由情况 (1,4) 可知， $b_{kk} (1 \leq k \leq n - 1)$ 可取到 $a_{11}, \cdots, a_{i-1,i-1}, a_{i+1,i+1}, \cdots, a_{nn}$ ，由此可知 $A_{ii} = a_{11} \cdots \widehat{a_{ii}} \cdots a_{nn}$ ，这个数称为 $a_{ii}$ 的伴随，这就完成了 $A^{*}$ 结论的证明。由于 $A^{-1} = \frac{1}{|A|} A^{*}$ ，故 $A^{-1}$ 也是上三角阵，其主对角元为 $\frac{1}{|A|} A_{ii} = a_{ii}^{-1}$ ，结论得证。□

下面的例子也可用矩阵的迹来证明, 我们将在 § 2.7 中进行讨论.

例 2.9 求证:

(1) $m \times n$ 实矩阵 $\mathbf{A}$ 适合条件 $AA' = O$ 的充要条件是 $A = O$ ;

(2) $m \times n$ 复矩阵 $\mathbf{A}$ 适合条件 $\overline{\mathbf{A}}' = \mathbf{O}$ 的充要条件是 $\mathbf{A} = \mathbf{O}$ .

证明 (1) 设 $A = (a_{ij})_{m \times n}$ , 则 $AA'$ 的第 $(i, i)$ 元素等于零, 即

$$
a _ {i 1} ^ {2} + a _ {i 2} ^ {2} + \dots + a _ {i n} ^ {2} = 0.
$$

因为 $a_{ij}$ 都是实数, 必有 $a_{ij}=0$ .

(2) 同理可证明. □

例 2.10 求证: 任一 n 阶方阵均可表示为一个对称阵与一个反对称阵之和.

证明 设 A 是 n 阶方阵, 则 $A + A'$ 是对称阵, $A - A'$ 是反对称阵, 并且

$$
\boldsymbol {A} = \frac {1}{2} (\boldsymbol {A} + \boldsymbol {A} ^ {\prime}) + \frac {1}{2} (\boldsymbol {A} - \boldsymbol {A} ^ {\prime}). \square
$$

注 上例中的 $\frac{1}{2} (\pmb {A} + \pmb {A}^{\prime})$ 称为 $\pmb{A}$ 的对称化, $\frac{1}{2} (\pmb {A} - \pmb {A}^{\prime})$ 称为 $\pmb{A}$ 的反对称化. 上述分解使得我们可以利用对称阵和反对称阵的众多性质去研究方阵的性质.

例 2.11 求证: 和所有 n 阶矩阵乘法可交换的矩阵必是纯量阵 $kI_{n}$ .

证明 设 $\boldsymbol{A}=(a_{ij})$ 和所有 n 阶矩阵乘法可交换.

证法1 设 $E_{ij} (1 \leq i \neq j \leq n)$ 为基础矩阵, 则 $E_{ij} A = A E_{ij}$ . 注意到 $E_{ij} A$ 是将 $A$ 的第 $j$ 行变为第 $i$ 行而其他行都是零的 $n$ 阶矩阵, $A E_{ij}$ 是将 $A$ 的第 $i$ 列变为第 $j$ 列而其他列都是零的 $n$ 阶矩阵, 它们相等导致 $a_{ji} = 0 (i \neq j), a_{ii} = a_{jj}$ , 因此 $A$ 是纯量阵.

证法 2 设 $D = \operatorname{diag}\{1, 2, \cdots, n\}$ 为对角阵，则由 AD = DA 可得 A = $\operatorname{diag}\{a_{11}, a_{22}, \cdots, a_{nn}\}$ 也为对角阵。设 $P_{ij} (1 \leq i \neq j \leq n)$ 为第一类初等阵，则由 $AP_{ij} = P_{ij}A$ 可得 $a_{ii} = a_{jj} (1 \leq i \neq j \leq n)$ ，于是 A 为纯量阵。

证法3 考虑 $\pmb{A}$ 与第二类初等阵 $P_{i}(c)(c\neq 1,1\leq i\leq n)$ 以及与第一类初等阵 $P_{ij}(1\leq i\neq j\leq n)$ 的乘法交换性，马上可得 $\pmb{A}$ 为纯量阵.□

注 由证法1可知: 和所有奇异阵乘法可交换的矩阵必是纯量阵; 由证法2可知: 和所有非异阵乘法可交换的矩阵必是纯量阵; 由证法3可知: 和所有初等阵乘法可交换的矩阵必是纯量阵; 在证法3中取 $c = -1$ , 则可知: 和所有正交阵乘法可交换的矩阵必是纯量阵.

例 2.12 计算下列矩阵的 k 次幂, 其中 k 为正整数:

$$
\boldsymbol {A} = \left( \begin{array}{c c c} a & 1 & 0 \\ 0 & a & 1 \\ 0 & 0 & a \end{array} \right);
$$

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 2 & 4 \\ 2 & 4 & 8 \\ 3 & 6 & 1 2 \end{array} \right).
$$

解 (1) 设 $J = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ , 则 $A = aI_3 + J$ . 注意到 $aI_3$ 和 $J$ 乘法可交换, 并

且 $J^{3}=O$ ，因此我们可用二项式定理来求 A 的 k 次幂：

$$
\begin{array}{r c l} \boldsymbol {A} ^ {k} & = & (a \boldsymbol {I} _ {3} + \boldsymbol {J}) ^ {k} = (a \boldsymbol {I} _ {3}) ^ {k} + \mathrm{C} _ {k} ^ {1} (a \boldsymbol {I} _ {3}) ^ {k - 1} \boldsymbol {J} + \mathrm{C} _ {k} ^ {2} (a \boldsymbol {I} _ {3}) ^ {k - 2} \boldsymbol {J} ^ {2} \\ & = & a ^ {k} \boldsymbol {I} _ {3} + \mathrm{C} _ {k} ^ {1} a ^ {k - 1} \boldsymbol {J} + \mathrm{C} _ {k} ^ {2} a ^ {k - 2} \boldsymbol {J} ^ {2} = \left( \begin{array}{c c c} a ^ {k} & \mathrm{C} _ {k} ^ {1} a ^ {k - 1} & \mathrm{C} _ {k} ^ {2} a ^ {k - 2} \\ 0 & a ^ {k} & \mathrm{C} _ {k} ^ {1} a ^ {k - 1} \\ 0 & 0 & a ^ {k} \end{array} \right). \end{array}
$$

(2) 注意到 A 的列向量成比例, 故可设 $\alpha = (1, 2, 3)$ , $\beta = (1, 2, 4)$ , 则 $A = \alpha' \beta$ .

由矩阵乘法的结合律并注意到 $\beta \alpha' = 17$ , 可得

$$
\begin{array}{r l} \boldsymbol {A} ^ {k} & = (\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}) (\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}) \dots (\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}) = \boldsymbol {\alpha} ^ {\prime} (\boldsymbol {\beta} \boldsymbol {\alpha} ^ {\prime}) \dots (\boldsymbol {\beta} \boldsymbol {\alpha} ^ {\prime}) \boldsymbol {\beta} \\ & = (\boldsymbol {\beta} \boldsymbol {\alpha} ^ {\prime}) ^ {k - 1} \boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta} = 1 7 ^ {k - 1} \boldsymbol {A} = \left( \begin{array}{c c c} 1 7 ^ {k - 1} & 2 \cdot 1 7 ^ {k - 1} & 4 \cdot 1 7 ^ {k - 1} \\ 2 \cdot 1 7 ^ {k - 1} & 4 \cdot 1 7 ^ {k - 1} & 8 \cdot 1 7 ^ {k - 1} \\ 3 \cdot 1 7 ^ {k - 1} & 6 \cdot 1 7 ^ {k - 1} & 1 2 \cdot 1 7 ^ {k - 1} \end{array} \right). \square \end{array}
$$

例 2.13 设 A 是二阶矩阵, 若存在 n > 2, 使得 $A^{n} = O$ , 求证: $A^{2} = O$ .

证明 由 $A^n = O$ 可得 $0 = |A^n| = |A|^n$ , 从而 $|A| = 0$ . 因为 $A$ 是二阶矩阵, 由 $|A| = 0$ 容易验证 $A$ 的两个列向量成比例, 于是存在二维行向量 $\alpha, \beta$ , 使得 $A = \alpha' \beta$ . 注意到 $\beta \alpha'$ 是一个数, 由矩阵乘法的结合律可得

$$
\begin{array}{r c l} O & = & A ^ {n} = (\alpha^ {\prime} \beta) (\alpha^ {\prime} \beta) \dots (\alpha^ {\prime} \beta) = \alpha^ {\prime} (\beta \alpha^ {\prime}) \dots (\beta \alpha^ {\prime}) \beta \\ & = & (\beta \alpha^ {\prime}) ^ {n - 1} \alpha^ {\prime} \beta = (\beta \alpha^ {\prime}) ^ {n - 1} A. \end{array}
$$

因此或者 $\beta\alpha' = 0$ ，或者 A = O，但无论哪种情况，我们最后都有

$$
\boldsymbol {A} ^ {2} = \left(\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}\right) \left(\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}\right) = \boldsymbol {\alpha} ^ {\prime} \left(\boldsymbol {\beta} \boldsymbol {\alpha} ^ {\prime}\right) \boldsymbol {\beta} = \left(\boldsymbol {\beta} \boldsymbol {\alpha} ^ {\prime}\right) \boldsymbol {A} = \boldsymbol {O}.
$$

例 2.14 下列形状的矩阵称为循环矩阵:

$$
\left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ a _ {n - 1} & a _ {n} & a _ {1} & \dots & a _ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {2} & a _ {3} & a _ {4} & \dots & a _ {1} \end{array} \right).
$$

求证: 同阶循环矩阵之积仍是循环矩阵.

证明 设基础循环矩阵

$$
J = \left( \begin{array}{c c} O & I _ {n - 1} \\ 1 & O \end{array} \right),
$$

则由例 2.1 可知, 上述循环矩阵 A 可表示为基础循环矩阵 J 的多项式:

$$
\boldsymbol {A} = a _ {1} \boldsymbol {I} _ {n} + a _ {2} \boldsymbol {J} + a _ {3} \boldsymbol {J} ^ {2} + \dots + a _ {n} \boldsymbol {J} ^ {n - 1}.
$$

反之, 若一个矩阵能表示为基础循环矩阵 $J$ 的上述多项式形状, 则它必是循环矩阵. 两个循环矩阵之积可写为 $J$ 的两个多项式之积, 注意到 $J^{n} = I_{n}$ , 由此即得结论. $\square$ 

例 2.15 设 n 阶方阵 A 的每一行元素之和等于常数 c, 求证:

(1) 对任意的正整数 $k, A^k$ 的每一行元素之和等于 $c^k$ ;

(2) 若 $\pmb{A}$ 为可逆阵, 则 $c \neq 0$ 并且 $\pmb{A}^{-1}$ 的每一行元素之和等于 $c^{-1}$ .

证明 设 $\alpha=(1,1,\cdots,1)'$ ，则由矩阵乘法可知，A 的每一行元素之和等于 c 当且仅当 $A\alpha=c\cdot\alpha$ 成立.

(1) 由 $A\alpha = c \cdot \alpha$ 不断递推可得 $A^k\alpha = c^k \cdot \alpha$ , 故结论成立.

(2) 若 $c = 0$ , 则由 $\pmb{A}$ 可逆以及 $A\alpha = 0$ 可得 $\alpha = 0$ , 矛盾. 在 $A\alpha = c \cdot \alpha$ 的两边同时左乘 $c^{-1}A^{-1}$ , 可得 $A^{-1}\alpha = c^{-1} \cdot \alpha$ , 由此即得结论. □

例 2.16 求下列 n 阶矩阵的逆矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & 1 & \dots & 1 \\ 1 & 0 & 1 & \dots & 1 \\ 1 & 1 & 0 & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 0 \end{array} \right).
$$

解 我们用两种方法来求解, 第一种是利用矩阵乘法的结合律, 比如例 2.12 (2) 和例 2.13, 第二种是利用基础循环矩阵的多项式来表示循环矩阵, 比如例 2.14.

解法 1 设 $\alpha=(1,1,\cdots,1)'$ ，则 $A=-I_{n}+\alpha\alpha'$ 。设 $B=cI_{n}+d\alpha\alpha'$ ，则通过简单的计算可知 $AB=-cI_{n}+(c+(n-1)d)\alpha\alpha'$ 。令 c=-1, $c+(n-1)d=0$ ，则 $d=\frac{1}{n-1}$ ，于是 $AB=I_{n}$ ，从而 $A^{-1}=B=-I_{n}+\frac{1}{n-1}\alpha\alpha'$ 。

解法 2 设 J 为基础循环矩阵, 则 $A = J + J^{2} + \cdots + J^{n-1}$ . 设 $B = cI_{n} + J + J^{2} + \cdots + J^{n-1}$ , 其中 c 为待定系数, 则通过简单的计算可得

$$
\boldsymbol {A} \boldsymbol {B} = (n - 1) \boldsymbol {I} _ {n} + (c + n - 2) (\boldsymbol {J} + \boldsymbol {J} ^ {2} + \dots + \boldsymbol {J} ^ {n - 1}).
$$

只要令 $c = 2 - n$ ，则 $\pmb {A}\pmb {B} = (n - 1)\pmb{I}_n$ ，于是 $\pmb{A}^{-1} = \frac{1}{n - 1}\pmb{B}$ □

## § 2.4 可逆矩阵

判定 $n$ 阶方阵 $\mathbf{A}$ 是可逆矩阵的常见方法有以下5种，本节主要介绍前两种方法：

(1) 行列式的计算 若 $|A| \neq 0$ , 则 A 是可逆阵, 否则 A 是不可逆阵;

(2) 凑因子法 找到或验证同阶方阵 B, 使得 $AB = I_{n}$ 或 $BA = I_{n}$ ;

(3) 线性方程组求解理论的应用 参考 § 3.7 的第 2 部分;

(4) 互素多项式的应用 参考 §5.11;

(5) 特征值的计算 参考 §6.2 的第 5 部分.

## 1. 行列式的计算

这是第 1 章的主要内容. 例如, 当 $x_{1}, x_{2}, \cdots, x_{n}$ 互异时, Vandermonde 行列式 $|\mathbf{A}| = \prod_{1 \leq i < j \leq n} (x_{j} - x_{i}) \neq 0$ , 从而 Vandermonde 矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & x _ {1} & \dots & x _ {1} ^ {n - 1} \\ 1 & x _ {2} & \dots & x _ {2} ^ {n - 1} \\ \vdots & \vdots & & \vdots \\ 1 & x _ {n} & \dots & x _ {n} ^ {n - 1} \end{array} \right)
$$

是可逆阵. 我们再来看几个典型的例子.

例 2.17 设 A 是非零实矩阵且 $A^{*} = A'$ . 求证: A 是可逆阵.

证明 设 $A = (a_{ij})$ , $a_{ij}$ 的代数余子式记为 $A_{ij}$ , 由已知, $a_{ij} = A_{ij}$ . 由于 $\pmb{A}$ 是非零实矩阵, 故必有某个 $a_{rs} \neq 0$ , 将 $|\pmb{A}|$ 按第 $r$ 行展开, 可得

$$
| \boldsymbol {A} | = a _ {r 1} A _ {r 1} + \dots + a _ {r s} A _ {r s} + \dots + a _ {r n} A _ {r n} = a _ {r 1} ^ {2} + \dots + a _ {r s} ^ {2} + \dots + a _ {r n} ^ {2} > 0.
$$

特别地, $|A|\neq0$ ,即A是可逆阵.□

例 2.18 设 A 是奇数阶矩阵, 满足 $AA' = I_{n}$ 且 $|A| > 0$ , 证明: $I_{n} - A$ 是奇异阵.

证明 由 $1 = |I_n| = |AA'| = |A||A'| = |A|^2$ 以及 $|A| > 0$ 可得 $|A| = 1$ . 因为

$$
\left| \boldsymbol {I} _ {n} - \boldsymbol {A} \right| = \left| \boldsymbol {A} \boldsymbol {A} ^ {\prime} - \boldsymbol {A} \right| = | \boldsymbol {A} | \left| \boldsymbol {A} ^ {\prime} - \boldsymbol {I} _ {n} \right| = \left| (\boldsymbol {A} - \boldsymbol {I} _ {n}) ^ {\prime} \right| = | \boldsymbol {A} - \boldsymbol {I} _ {n} | = (- 1) ^ {n} | \boldsymbol {I} _ {n} - \boldsymbol {A} |,
$$

又 $n$ 是奇数, 故 $|\mathbf{I}_n - \mathbf{A}| = -|\mathbf{I}_n - \mathbf{A}|$ , 从而 $|\mathbf{I}_n - \mathbf{A}| = 0$ , 即 $\mathbf{I}_n - \mathbf{A}$ 是奇异阵. $\square$ 

例 2.19 设 A, B 为 n 阶可逆阵, 满足 $A^{2} = B^{2}$ 且 $|A| + |B| = 0$ , 求证: $A + B$ 是奇异阵.

证明 由已知 A, B 都是可逆阵且 $|B| = -|A|$ ，因此

$$
| \boldsymbol {A} | | \boldsymbol {A} + \boldsymbol {B} | = | \boldsymbol {A} ^ {2} + \boldsymbol {A B} | = | \boldsymbol {B} ^ {2} + \boldsymbol {A B} | = | \boldsymbol {B} + \boldsymbol {A} | | \boldsymbol {B} | = - | \boldsymbol {A} | | \boldsymbol {A} + \boldsymbol {B} |,
$$

于是 $|\mathbf{A}||\mathbf{A} + \mathbf{B}| = 0$ 因为 $|\mathbf{A}|\neq 0$ ，故 $|\mathbf{A} + \mathbf{B}| = 0,$ 即 $\mathbf{A} + \mathbf{B}$ 是奇异阵. □

## 2. 凑因子法

通过给定条件的重组变化, 把方阵 $\mathbf{A}$ 的逆阵凑出来. 凑因子的过程通常需要一定的技巧, 下面是几个典型的例子.

例 2.20 设 n 阶方阵 A 适合等式 $A^{2}-3A+2I_{n}=O$ ，求证：A 和 $A+I_{n}$ 都是可逆阵，而若 $A\neq I_{n}$ ，则 $A-2I_{n}$ 必不是可逆阵。

证明 由已知得 $A(A - 3I_n) = -2I_n$ ，因此 $A$ 是可逆阵。又 $A^2 - 3A - 4I_n = -6I_n$ ，于是 $(A + I_n)(A - 4I_n) = -6I_n$ ，故 $A + I_n$ 也是可逆阵。

另一方面，由已知等式可得 $(A - I_n)(A - 2I_n) = O$ ，如果 $A - 2I_{n}$ 可逆，则 $A - I_{n} = O, A = I_{n}$ 和假设不合，因此 $A - 2I_{n}$ 不是可逆阵.□

例 2.21 设 n 阶方阵 A 和 B 满足 $A + B = AB$ ，求证： $I_{n} - A$ 是可逆阵且 AB = BA。

证明 因为

$$
\left(\boldsymbol {I} _ {n} - \boldsymbol {A}\right) \left(\boldsymbol {I} _ {n} - \boldsymbol {B}\right) = \boldsymbol {I} _ {n} - \boldsymbol {A} - \boldsymbol {B} + \boldsymbol {A B} = \boldsymbol {I} _ {n},
$$

所以 $I_{n}-A$ 是可逆阵. 另一方面, 由上式可得 $(I_{n}-A)^{-1}=(I_{n}-B)$ , 故

$$
\boldsymbol {I} _ {n} = (\boldsymbol {I} _ {n} - \boldsymbol {B}) (\boldsymbol {I} _ {n} - \boldsymbol {A}) = \boldsymbol {I} _ {n} - \boldsymbol {B} - \boldsymbol {A} + \boldsymbol {B A},
$$

从而 $BA = A + B = AB.$ □

例 2.22 设 A, B, AB - I_n 都是 n 阶可逆阵, 证明: $A - B^{-1}$ 与 $(A - B^{-1})^{-1} - A^{-1}$ 均可逆, 并求它们的逆矩阵.

证明 注意到 $A - B^{-1} = (AB - I_n)B^{-1}$ , 故 $A - B^{-1}$ 是可逆矩阵, 并且 $(A - B^{-1})^{-1} = B(AB - I_n)^{-1}$ . 注意到如下变形:

$$
\begin{array}{r l} & (A - B ^ {- 1}) ^ {- 1} - A ^ {- 1} \\ = & B (A B - I _ {n}) ^ {- 1} - A ^ {- 1} = A ^ {- 1} \big (A B (A B - I _ {n}) ^ {- 1} - I _ {n} \big) \\ = & A ^ {- 1} \big (A B - (A B - I _ {n}) \big) (A B - I _ {n}) ^ {- 1} = A ^ {- 1} (A B - I _ {n}) ^ {- 1}, \end{array}
$$

故 $(\pmb {A} - \pmb{B}^{-1})^{-1} - \pmb{A}^{-1}$ 可逆, 并且 $\left((\pmb {A} - \pmb{B}^{-1})^{-1} - \pmb{A}^{-1}\right)^{-1} = (\pmb {A}\pmb {B} - \pmb{I}_n)\pmb{A}$ . □

例 2.23 设 A 为 $m \times n$ 矩阵, B 为 $n \times m$ 矩阵, 使得 $I_{m} + AB$ 可逆, 求证: $I_{n} + BA$ 也可逆.

证明 注意到 $A(I_{n} + BA) = (I_{m} + AB)A$ ，故 $(I_{m} + AB)^{-1}A(I_{n} + BA) = A,$ 于是 $B(I_{m} + AB)^{-1}A(I_{n} + BA) = BA$ ，从而

$$
\begin{array}{r c l} \boldsymbol {I} _ {n} & = & \boldsymbol {I} _ {n} + \boldsymbol {B} \boldsymbol {A} - \boldsymbol {B} \boldsymbol {A} = (\boldsymbol {I} _ {n} + \boldsymbol {B} \boldsymbol {A}) - \boldsymbol {B} (\boldsymbol {I} _ {m} + \boldsymbol {A} \boldsymbol {B}) ^ {- 1} \boldsymbol {A} (\boldsymbol {I} _ {n} + \boldsymbol {B} \boldsymbol {A}) \\ & = & (\boldsymbol {I} _ {n} - \boldsymbol {B} (\boldsymbol {I} _ {m} + \boldsymbol {A} \boldsymbol {B}) ^ {- 1} \boldsymbol {A}) (\boldsymbol {I} _ {n} + \boldsymbol {B} \boldsymbol {A}). \end{array}
$$

于是 $(I_n + BA)^{-1} = I_n - B(I_m + AB)^{-1}A.$ □

例 2.23 是一个很强的结论, 我们给出它的两个应用.

例 2.24 设 A, B 均为 n 阶可逆阵, 使得 $A^{-1} + B^{-1}$ 可逆, 证明: $A + B$ 也可逆, 并且

$$
(\boldsymbol {A} + \boldsymbol {B}) ^ {- 1} = \boldsymbol {A} ^ {- 1} - \boldsymbol {A} ^ {- 1} (\boldsymbol {A} ^ {- 1} + \boldsymbol {B} ^ {- 1}) ^ {- 1} \boldsymbol {A} ^ {- 1}.
$$

证明 注意到 $A + B = A(A^{-1} + B^{-1})B$ ，故 $A + B$ 可逆. 由例2.23可得

$$
\left(\boldsymbol {I} _ {n} + \boldsymbol {A} ^ {- 1} \boldsymbol {B}\right) ^ {- 1} = \boldsymbol {I} _ {n} - \boldsymbol {A} ^ {- 1} \left(\boldsymbol {I} _ {n} + \boldsymbol {B} \boldsymbol {A} ^ {- 1}\right) ^ {- 1} \boldsymbol {B} = \boldsymbol {I} _ {n} - \boldsymbol {A} ^ {- 1} \left(\boldsymbol {A} ^ {- 1} + \boldsymbol {B} ^ {- 1}\right) ^ {- 1},
$$

于是

$$
\begin{array}{r c l} (A + B) ^ {- 1} & = & (A (I _ {n} + A ^ {- 1} B)) ^ {- 1} = (I _ {n} + A ^ {- 1} B) ^ {- 1} A ^ {- 1} \\ & = & A ^ {- 1} - A ^ {- 1} (A ^ {- 1} + B ^ {- 1}) ^ {- 1} A ^ {- 1}. \square \end{array}
$$

例 2.25 (Sherman-Morrison-Woodbury 公式) 设 A 为 n 阶可逆阵, C 为 m 阶可逆阵, B 为 $n \times m$ 矩阵, D 为 $m \times n$ 矩阵, 使得 $C^{-1} + DA^{-1}B$ 可逆. 求证: $A + BCD$ 也可逆, 并且

$$
(A + B C D) ^ {- 1} = A ^ {- 1} - A ^ {- 1} B (C ^ {- 1} + D A ^ {- 1} B) ^ {- 1} D A ^ {- 1}.
$$

证明 注意到 $A + BCD = A(I_n + A^{-1}BCD)$ , 将 $A^{-1}B$ 和 $CD$ 分别看成整体, 此时 $I_m + (CD)(A^{-1}B) = C(C^{-1} + DA^{-1}B)$ 可逆, 故由例 2.23 的结论可知 $I_n + (A^{-1}B)(CD)$ 也可逆, 并且

$$
\begin{array}{r c l} (I _ {n} + A ^ {- 1} B C D) ^ {- 1} & = & I _ {n} - A ^ {- 1} B (I _ {m} + C D A ^ {- 1} B) ^ {- 1} C D \\ & = & I _ {n} - A ^ {- 1} B (C ^ {- 1} + D A ^ {- 1} B) ^ {- 1} D. \end{array}
$$

于是 $A + BCD = A(I_{n} + A^{-1}BCD)$ 也可逆, 并且

$$
(A + B C D) ^ {- 1} = A ^ {- 1} - A ^ {- 1} B (C ^ {- 1} + D A ^ {- 1} B) ^ {- 1} D A ^ {- 1}. \square
$$

若已知逆阵的表达式, 当然可以采取直接验证的方法进行证明, 下面是两个例子. 注意到例 2.24 其实是例 2.25 的特例, 而例 2.26 与例 2.24 之间可以相互推导, 请读者验证它们之间的等价性.

例 2.26 设 A, B, A - B 都是 n 阶可逆阵, 证明:

$$
\boldsymbol {B} ^ {- 1} - \boldsymbol {A} ^ {- 1} = (\boldsymbol {B} + \boldsymbol {B} (\boldsymbol {A} - \boldsymbol {B}) ^ {- 1} \boldsymbol {B}) ^ {- 1}.
$$

证明 只需直接验证即可:

$$
\begin{array}{r l} & {\big (B + B (A - B) ^ {- 1} B \big) (B ^ {- 1} - A ^ {- 1})} \\ {=} & {I _ {n} + B (A - B) ^ {- 1} - B A ^ {- 1} - B (A - B) ^ {- 1} B A ^ {- 1}} \\ {=} & {(A - B + B) (A - B) ^ {- 1} - (A - B + B) (A - B) ^ {- 1} B A ^ {- 1}} \\ {=} & {A (A - B) ^ {- 1} - A (A - B) ^ {- 1} B A ^ {- 1}} \\ {=} & {A (A - B) ^ {- 1} (A - B) A ^ {- 1} = I _ {n}. \square} \end{array}
$$

注意到例 2.27 是例 2.25 的特例, 只要取 $C = (1)$ 为一阶可逆阵即可.

例 2.27 (Sherman-Morrison 公式) 设 A 是 n 阶可逆阵, $\alpha, \beta$ 是 n 维列向量, 且 $1 + \beta' A^{-1} \alpha \neq 0$ . 求证:

$$
(A + \alpha \beta^ {\prime}) ^ {- 1} = A ^ {- 1} - \frac {1}{1 + \beta^ {\prime} A ^ {- 1} \alpha} A ^ {- 1} \alpha \beta^ {\prime} A ^ {- 1}.
$$

证明 只需直接验证即可 (其中注意到 $\beta^{\prime}A^{-1}\alpha$ 是一个数, 可以提出):

$$
\begin{array}{r l} & {(A + \alpha \beta^ {\prime}) \left(A ^ {- 1} - \frac {1}{1 + \beta^ {\prime} A ^ {- 1} \alpha} A ^ {- 1} \alpha \beta^ {\prime} A ^ {- 1}\right)} \\ {=} & {I _ {n} + \alpha \beta^ {\prime} A ^ {- 1} - \frac {1}{1 + \beta^ {\prime} A ^ {- 1} \alpha} \alpha \beta^ {\prime} A ^ {- 1} - \frac {1}{1 + \beta^ {\prime} A ^ {- 1} \alpha} \alpha (\beta^ {\prime} A ^ {- 1} \alpha) \beta^ {\prime} A ^ {- 1}} \\ {=} & {I _ {n} + \alpha \beta^ {\prime} A ^ {- 1} - \frac {1 + \beta^ {\prime} A ^ {- 1} \alpha}{1 + \beta^ {\prime} A ^ {- 1} \alpha} \alpha \beta^ {\prime} A ^ {- 1}} \\ {=} & {I _ {n} + \alpha \beta^ {\prime} A ^ {- 1} - \alpha \beta^ {\prime} A ^ {- 1} = I _ {n}. \square} \end{array}
$$

例 2.16 求下列 n 阶矩阵的逆矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & 1 & \dots & 1 \\ 1 & 0 & 1 & \dots & 1 \\ 1 & 1 & 0 & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 0 \end{array} \right).
$$

解法 3 设 $\alpha=(1,1,\cdots,1)^{\prime}$ ，则 $A=-I_{n}+\alpha\alpha^{\prime}$ 。由 Sherman-Morrison 公式可得

$$
\begin{array}{r c l} \boldsymbol {A} ^ {- 1} = (- \boldsymbol {I} _ {n} + \alpha \alpha^ {\prime}) ^ {- 1} & = & (- \boldsymbol {I} _ {n}) ^ {- 1} - \frac {1}{1 + \alpha^ {\prime} (- \boldsymbol {I} _ {n}) ^ {- 1} \alpha} (- \boldsymbol {I} _ {n}) ^ {- 1} \alpha \alpha^ {\prime} (- \boldsymbol {I} _ {n}) ^ {- 1} \\ & = & - \boldsymbol {I} _ {n} + \frac {1}{n - 1} \alpha \alpha^ {\prime}. \square \end{array}
$$

## § 2.5 初等变换及其应用

本节主要介绍初等变换在相抵标准型和求逆阵这两方面的应用.

## 1. 相抵标准型

任一矩阵经过初等变换可化为相抵标准型。下面的例题说明了相抵标准型的用处，即通常可先对相抵标准型证明矩阵问题的结论，然后再化归到一般矩阵的情形，这是矩阵理论中的常用方法。在 §3.8 中，我们会给出相抵标准型更多的应用。

例 2.28 求证: $n$ 阶方阵 $\mathbf{A}$ 是奇异阵的充要条件是存在不为零的同阶方阵 $\mathbf{B}$ , 使得 $AB = O$ .

证明 显然若 A 可逆, 则从 AB = O 可得到 B = O, 因此充分性成立.

反之, 若 $A$ 是奇异阵, 则存在可逆阵 $P, Q$ , 使得 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , 其中 $r < n$ . 令 $C = \begin{pmatrix} O & O \\ O & I_{n-r} \end{pmatrix}$ , 则 $PAQC = O$ . 又因为 $P$ 可逆, 故 $AQC = O$ . 只要令 $B = QC$ 就得到了结论. $\square$ 

例 2.29 求证: n 阶方阵 A 是奇异阵的充要条件是存在 n 维非零列向量 x, 使得 Ax = 0.

证明 显然若 A 可逆, 则从 Ax = 0 可得到 x = 0, 因此充分性成立.

反之, 若 A 是奇异阵, 则存在可逆阵 P, Q, 使 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , 其中 r < n.
令 $y=(0,\cdots,0,1)'$ 为 n 维列向量, 则 PAQy=0. 又因为 P 可逆, 故 AQy=0.
只要令 x = Qy 就得到了结论. □

例 2.29 可以用来判定矩阵是否非异, 这个判定准则在有些时候特别有用.

例 2.30 设 A 为 n 阶实反对称阵, 证明: $I_{n}-A$ 是非异阵.

证明 用反证法证明. 设 $I_{n} - A$ 是奇异阵, 则由例2.29可知存在 $n$ 维非零列向量 $\pmb{x}$ , 使得 $(I_{n} - A)\pmb{x} = \pmb{0}$ , 即 $A\pmb{x} = \pmb{x}$ . 事实上, 通过例2.29的证明还可以知道, 因为 $\pmb{A}$ 是实矩阵, 所以非异阵 $\pmb{P}, \pmb{Q}$ 可以取为实矩阵, 从而 $\pmb{x}$ 也可取为非零实列向量. 设 $\pmb{x} = (a_{1}, a_{2}, \dots, a_{n})'$ , 其中 $a_{i}$ 都是实数, 则由 $\pmb{A}$ 的反对称性以及例2.5可得

$$
0 = \boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {x} = \boldsymbol {x} ^ {\prime} \boldsymbol {x} = a _ {1} ^ {2} + a _ {2} ^ {2} + \dots + a _ {n} ^ {2},
$$

从而 $a_{1}=a_{2}=\cdots=a_{n}=0$ ，即 x=0，这与已知矛盾。□

例 2.31 设 A 为 n 阶可逆阵, 求证: 只用第三类初等变换就可以将 A 化为如下形状:

$$
\operatorname{diag} \{1, \dots , 1, | A | \}.
$$

证明 假设 A 的第 $(1,1)$ 元素等于零, 因为 A 可逆, 故第一行必有元素不为零. 用第三类初等变换将非零元素所在的列加到第一列, 则得到的矩阵中第 $(1,1)$ 元素不为零. 因此不妨设 A 的第 $(1,1)$ 元素非零, 于是可用第三类初等变换将 A 的第一行及第一列其余元素都消为零. 这就是说, A 经过第三类初等变换可化为如下形状:

$$
\left( \begin{array}{c c} a & O \\ O & A _ {1} \end{array} \right).
$$

再对 $A_{1}$ 同样处理, 不断做下去, 可将 A 化为对角阵. 因此我们只要对对角阵证明结论即可. 为简化讨论, 我们先考虑二阶矩阵:

$$
\left( \begin{array}{c c} a & 0 \\ 0 & b \end{array} \right).
$$

将其第一行乘以 $(1 - a)a^{-1}$ 加到第二行上, 再将第二行加到第一行上得到:

$$
\left( \begin{array}{c c} a & 0 \\ 0 & b \end{array} \right) \to \left( \begin{array}{c c} a & 0 \\ 1 - a & b \end{array} \right) \to \left( \begin{array}{c c} 1 & b \\ 1 - a & b \end{array} \right).
$$

将其第一列乘以 -b 加到第二列上, 再将第一行乘以 a-1 加到第二行上得到:

$$
\left( \begin{array}{c c} 1 & b \\ 1 - a & b \end{array} \right) \to \left( \begin{array}{c c} 1 & 0 \\ 1 - a & a b \end{array} \right) \to \left( \begin{array}{c c} 1 & 0 \\ 0 & a b \end{array} \right).
$$

显然上述方法对 $n$ 阶对角阵也适用, 而我们所用的初等变换始终是第三类初等变换. 这就得到了结论. $\square$ 

例 2.32 求证: 任一 n 阶矩阵均可表示为形如 $I_{n} + a_{ij}E_{ij}$ 这样的矩阵之积, 其中 $E_{ij}$ 是 n 阶基础矩阵.

证明 任意一个 $n$ 阶矩阵都可表示为有限个初等阵和具有下列形状的对角阵 $\pmb{D}$ 之积:

$$
\boldsymbol {D} = \operatorname{diag} \{1, \dots , 1, 0, \dots , 0 \},
$$

故只要对初等阵和 $D$ 证明结论即可. 对 $D$ , 假设 $D$ 有 $r$ 个 1, 则

$$
\boldsymbol {D} = \left(\boldsymbol {I} _ {n} - \boldsymbol {E} _ {r + 1, r + 1}\right) \dots \left(\boldsymbol {I} _ {n} - \boldsymbol {E} _ {n n}\right).
$$

第三类初等阵已经是这种形状了. 对第二类初等阵 $P_{i}(c)$ , 显然我们有 $P_{i}(c) = I_{n} + (c - 1)E_{ii}$ . 对第一类初等阵 $P_{ij}$ , 由例2.31可知, 只用第三类初等变换就可以将 $P_{ij}$ 化为 $P_{n}(-1) = \mathrm{diag}\{1, \cdots, 1, -1\}$ , 因此对第一类初等阵结论也成立. 具体地, 我们可以写出:

$$
\boldsymbol {P} _ {i j} = (\boldsymbol {I} _ {n} - \boldsymbol {E} _ {i j}) (\boldsymbol {I} _ {n} + \boldsymbol {E} _ {j i}) (\boldsymbol {I} _ {n} - 2 \boldsymbol {E} _ {j j}) (\boldsymbol {I} _ {n} + \boldsymbol {E} _ {i j}). \square
$$

## 2. 求逆阵

初等变换可以用来求可逆阵的逆阵. 这种方法不仅对数字矩阵有效, 对文字矩阵也同样有效. 下面是几个典型的例子, 请读者细心领会其中的技巧. 注意到例 2.16 是例 2.33 的特例, 于是我们得到了例 2.16 的第四种解法.

例 2.33 求下列 n 阶矩阵的逆阵, 其中 $a_{i} \neq 0 (1 \leq i \leq n)$ :

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 1 + a _ {1} & 1 & 1 & \dots & 1 \\ 1 & 1 + a _ {2} & 1 & \dots & 1 \\ 1 & 1 & 1 + a _ {3} & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 1 + a _ {n} \end{array} \right).
$$

解 对 $(A; I_n)$ 用初等变换法, 将第 $i$ 行乘以 $a_i^{-1} (1 \leq i \leq n)$ , 有

$$
\left(\begin{array}{c c c c c c c c c c}1 + a _ {1}&1&1&\dots&1&1&0&0&\dots&0\\1&1 + a _ {2}&1&\dots&1&0&1&0&\dots&0\\1&1&1 + a _ {3}&\dots&1&0&0&1&\dots&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&&\vdots\\1&1&1&\dots&1 + a _ {n}&0&0&0&\dots&1\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c c c c c c} 1 + \frac {1}{a _ {1}} & \frac {1}{a _ {1}} & \frac {1}{a _ {1}} & \dots & \frac {1}{a _ {1}} & \frac {1}{a _ {1}} & 0 & 0 & \dots & 0 \\ \frac {1}{a _ {2}} & 1 + \frac {1}{a _ {2}} & \frac {1}{a _ {2}} & \dots & \frac {1}{a _ {2}} & 0 & \frac {1}{a _ {2}} & 0 & \dots & 0 \\ \frac {1}{a _ {3}} & \frac {1}{a _ {3}} & 1 + \frac {1}{a _ {3}} & \dots & \frac {1}{a _ {3}} & 0 & 0 & \frac {1}{a _ {3}} & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & & \vdots \\ \frac {1}{a _ {n}} & \frac {1}{a _ {n}} & \frac {1}{a _ {n}} & \dots & 1 + \frac {1}{a _ {n}} & 0 & 0 & 0 & \dots & \frac {1}{a _ {n}} \end{array} \right).
$$

将下面的行都加到第一行上, 并令 $s = 1 + \frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_n}$ , 则上面的矩阵变为

$$
\left(\begin{array}{c c c c c c c c c c}s&s&s&\dots&s&\frac {1}{a _ {1}}&\frac {1}{a _ {2}}&\frac {1}{a _ {3}}&\dots&\frac {1}{a _ {n}}\\\frac {1}{a _ {2}}&1 + \frac {1}{a _ {2}}&\frac {1}{a _ {2}}&\dots&\frac {1}{a _ {2}}&0&\frac {1}{a _ {2}}&0&\dots&0\\\frac {1}{a _ {3}}&\frac {1}{a _ {3}}&1 + \frac {1}{a _ {3}}&\dots&\frac {1}{a _ {3}}&0&0&\frac {1}{a _ {3}}&\dots&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&&\vdots\\\frac {1}{a _ {n}}&\frac {1}{a _ {n}}&\frac {1}{a _ {n}}&\dots&1 + \frac {1}{a _ {n}}&0&0&0&\dots&\frac {1}{a _ {n}}\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c c c c c c c}1&1&1&\dots&1&\frac {1}{s a _ {1}}&\frac {1}{s a _ {2}}&\frac {1}{s a _ {3}}&\dots&\frac {1}{s a _ {n}}\\\frac {1}{a _ {2}}&1 + \frac {1}{a _ {2}}&\frac {1}{a _ {2}}&\dots&\frac {1}{a _ {2}}&0&\frac {1}{a _ {2}}&0&\dots&0\\\frac {1}{a _ {3}}&\frac {1}{a _ {3}}&1 + \frac {1}{a _ {3}}&\dots&\frac {1}{a _ {3}}&0&0&\frac {1}{a _ {3}}&\dots&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&&\vdots\\\frac {1}{a _ {n}}&\frac {1}{a _ {n}}&\frac {1}{a _ {n}}&\dots&1 + \frac {1}{a _ {n}}&0&0&0&\dots&\frac {1}{a _ {n}}\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c c c c c} 1 & 1 & 1 & \dots & 1 & \frac {1}{s a _ {1}} & \frac {1}{s a _ {2}} & \frac {1}{s a _ {3}} & \dots & \frac {1}{s a _ {n}} \\ 0 & 1 & 0 & \dots & 0 & - \frac {1}{s a _ {2} a _ {1}} & \frac {s a _ {2} - 1}{s a _ {2} ^ {2}} & - \frac {1}{s a _ {2} a _ {3}} & \dots & - \frac {1}{s a _ {2} a _ {n}} \\ 0 & 0 & 1 & \dots & 0 & - \frac {1}{s a _ {3} a _ {1}} & - \frac {1}{s a _ {3} a _ {2}} & \frac {s a _ {3} - 1}{s a _ {3} ^ {2}} & \dots & - \frac {1}{s a _ {3} a _ {n}} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 & - \frac {1}{s a _ {n} a _ {1}} & - \frac {1}{s a _ {n} a _ {2}} & - \frac {1}{s a _ {n} a _ {3}} & \dots & \frac {s a _ {n} - 1}{s a _ {n} ^ {2}} \end{array} \right)
$$

再消去第一行的后 $n - 1$ 个1就得到

$$
\boldsymbol {A} ^ {- 1} = - \frac {1}{s} \left( \begin{array}{c c c c c} \frac {1 - s a _ {1}}{a _ {1} ^ {2}} & \frac {1}{a _ {1} a _ {2}} & \frac {1}{a _ {1} a _ {3}} & \dots & \frac {1}{a _ {1} a _ {n}} \\ \frac {1}{a _ {2} a _ {1}} & \frac {1 - s a _ {2}}{a _ {2} ^ {2}} & \frac {1}{a _ {2} a _ {3}} & \dots & \frac {1}{a _ {2} a _ {n}} \\ \frac {1}{a _ {3} a _ {1}} & \frac {1}{a _ {3} a _ {2}} & \frac {1 - s a _ {3}}{a _ {3} ^ {2}} & \dots & \frac {1}{a _ {3} a _ {n}} \\ \vdots & \vdots & \vdots & & \vdots \\ \frac {1}{a _ {n} a _ {1}} & \frac {1}{a _ {n} a _ {2}} & \frac {1}{a _ {n} a _ {3}} & \dots & \frac {1 - s a _ {n}}{a _ {n} ^ {2}} \end{array} \right).
$$

例 2.34 求矩阵 A 的逆阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} 1 & 2 & 3 & \dots & n - 1 & n \\ n & 1 & 2 & \dots & n - 2 & n - 1 \\ n - 1 & n & 1 & \dots & n - 3 & n - 2 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 2 & 3 & 4 & \dots & n & 1 \end{array} \right).
$$

解 对 $(A; I_n)$ 用初等变换法, 将所有行加到第一行上, 再将第一行乘以 $s^{-1}$ , 其中 $s = \frac{1}{2} n(n + 1)$ , 得到

$$
\left(\begin{array}{c c c c c c c c c c c c}1&2&3&\dots&n - 1&n&1&0&0&\dots&0&0\\n&1&2&\dots&n - 2&n - 1&0&1&0&\dots&0&0\\n - 1&n&1&\dots&n - 3&n - 2&0&0&1&\dots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&\vdots&&\vdots&\vdots\\2&3&4&\dots&n&1&0&0&0&\dots&0&1\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c c c c c c c c} 1 & 1 & 1 & \dots & 1 & 1 & \frac {1}{s} & \frac {1}{s} & \frac {1}{s} & \dots & \frac {1}{s} & \frac {1}{s} \\ n & 1 & 2 & \dots & n - 2 & n - 1 & 0 & 1 & 0 & \dots & 0 & 0 \\ n - 1 & n & 1 & \dots & n - 3 & n - 2 & 0 & 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 2 & 3 & 4 & \dots & n & 1 & 0 & 0 & 0 & \dots & 0 & 1 \end{array} \right).
$$

从第二行起依次减去下一行, 得到

$$
\left( \begin{array}{c c c c c c c c c c c c} 1 & 1 & 1 & \dots & 1 & 1 & \frac {1}{s} & \frac {1}{s} & \frac {1}{s} & \dots & \frac {1}{s} & \frac {1}{s} \\ 1 & 1 - n & 1 & \dots & 1 & 1 & 0 & 1 & - 1 & \dots & 0 & 0 \\ 1 & 1 & 1 - n & \dots & 1 & 1 & 0 & 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 2 & 3 & 4 & \dots & n & 1 & 0 & 0 & 0 & \dots & 0 & 1 \end{array} \right).
$$

消去第一列除第一行外的所有元素后, 得到

$$
\left( \begin{array}{c c c c c c c c c c c} 1 & 1 & 1 & \dots & 1 & 1 & \frac {1}{s} & \frac {1}{s} & \frac {1}{s} & \dots & \frac {1}{s} & \frac {1}{s} \\ 0 & - n & 0 & \dots & 0 & 0 & - \frac {1}{s} & \frac {s - 1}{s} & - \frac {s + 1}{s} & \dots & - \frac {1}{s} & - \frac {1}{s} \\ 0 & 0 & - n & \dots & 0 & 0 & - \frac {1}{s} & - \frac {1}{s} & \frac {s - 1}{s} & \dots & - \frac {1}{s} & - \frac {1}{s} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 1 & 2 & \dots & n - 2 & - 1 & - \frac {2}{s} & - \frac {2}{s} & - \frac {2}{s} & \dots & - \frac {2}{s} & \frac {s - 2}{s} \end{array} \right)
$$

从第二行到第 $n - 1$ 行分别乘以 $-\frac{1}{n}$ , 得到

$$
\left( \begin{array}{c c c c c c c c c c c c} 1 & 1 & 1 & \dots & 1 & 1 & \frac {1}{s} & \frac {1}{s} & \frac {1}{s} & \dots & \frac {1}{s} & \frac {1}{s} \\ 0 & 1 & 0 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1 - s}{n s} & \frac {s + 1}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ 0 & 0 & 1 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1}{n s} & \frac {1 - s}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 1 & 2 & \dots & n - 2 & - 1 & - \frac {2}{s} & - \frac {2}{s} & - \frac {2}{s} & \dots & - \frac {2}{s} & \frac {s - 2}{s} \end{array} \right)
$$

将第一行依次减去第二行, 第三行, ……, 第 n-1 行, 得到

$$
\left( \begin{array}{c c c c c c c c c c c c} 1 & 0 & 0 & \dots & 0 & 1 & \frac {2}{n s} & \frac {s + 2}{n s} & \frac {2}{n s} & \dots & \frac {2}{n s} & \frac {2 - s}{n s} \\ 0 & 1 & 0 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1 - s}{n s} & \frac {s + 1}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ 0 & 0 & 1 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1}{n s} & \frac {1 - s}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 1 & 2 & \dots & n - 2 & - 1 & - \frac {2}{s} & - \frac {2}{s} & - \frac {2}{s} & \dots & - \frac {2}{s} & \frac {s - 2}{s} \end{array} \right)
$$

将第二行乘以 -1 加到最后一行, 将第三行乘以 -2 加到最后一行, ……, 将第 n-1 行乘以 2-n 加到最后一行, 得到

$$
\left( \begin{array}{c c c c c c c c c c c} 1 & 0 & 0 & \dots & 0 & 1 & \frac {2}{n s} & \frac {s + 2}{n s} & \frac {2}{n s} & \dots & \frac {2}{n s} & \frac {2 - s}{n s} \\ 0 & 1 & 0 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1 - s}{n s} & \frac {s + 1}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ 0 & 0 & 1 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1}{n s} & \frac {1 - s}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 0 & - 1 & - \frac {s + 1}{n s} & - \frac {1}{n s} & - \frac {1}{n s} & \dots & - \frac {1}{n s} & \frac {s - 1}{n s} \end{array} \right)
$$

将最后一行加到第一行, 再将最后一行乘以 -1, 得到

$$
\left( \begin{array}{c c c c c c c c c c c} 1 & 0 & 0 & \dots & 0 & 0 & \frac {1 - s}{n s} & \frac {1 + s}{n s} & \frac {1}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ 0 & 1 & 0 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1 - s}{n s} & \frac {s + 1}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ 0 & 0 & 1 & \dots & 0 & 0 & \frac {1}{n s} & \frac {1}{n s} & \frac {1 - s}{n s} & \dots & \frac {1}{n s} & \frac {1}{n s} \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 0 & 1 & \frac {s + 1}{n s} & \frac {1}{n s} & \frac {1}{n s} & \dots & \frac {1}{n s} & \frac {1 - s}{n s} \end{array} \right)
$$

因此

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{n s} \left( \begin{array}{c c c c c c} 1 - s & 1 + s & 1 & \dots & 1 & 1 \\ 1 & 1 - s & 1 + s & \dots & 1 & 1 \\ 1 & 1 & 1 - s & \dots & 1 & 1 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 1 + s & 1 & 1 & \dots & 1 & 1 - s \end{array} \right)
$$

. □ 

## § 2.6 伴随矩阵

n 阶矩阵 A 及其伴随矩阵 $A^{*}$ 最重要的关系是 $AA^{*}=A^{*}A=|A|I_{n}$ ，由此可得：若 $|A|\neq0$ ，则 $A^{-1}=\frac{1}{|A|}A^{*}$ 或 $A^{*}=|A|A^{-1}$ 。因此，伴随矩阵与逆阵之间有着密不可分的关系。回忆一下求逆运算的一些性质，其中 A, B 为可逆阵， $c\neq0$ 为常数：

(1) $(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1};$ (2) $(\mathbf{A}')^{-1} = (\mathbf{A}^{-1})';$ (3) $(c\mathbf{A})^{-1} = c^{-1}\mathbf{A}^{-1};$ (4) $|\mathbf{A}^{-1}| = |\mathbf{A}|^{-1};$ (5) $(\mathbf{A}^{-1})^{-1} = \mathbf{A}.$ 

我们将在本节介绍伴随运算对应的性质, 它们原则上都可以用上述关系和相抵标准型理论推出来. 我们还将在 § 2.11 用摄动法重新证明伴随矩阵的所有性质.

注 对于一阶矩阵 $A = (a)$ , 其伴随矩阵定义为一阶矩阵 $A^{*} = (1)$ . 由于之前我们定义了 0 阶行列式等于 1, 因此上述定义相容于阶数 $n \geq 2$ 时伴随矩阵的定义. 这个定义使得去掉矩阵阶数的限制之后, 伴随矩阵的性质仍然成立.

例 2.35 设 A 为 n 阶矩阵, 满足 $A^{m} = I_{n}$ , 求证: $(A^{*})^{m} = I_{n}$ .

证明 由 $A^m = I_n$ 得 $|\mathbf{A}|^m = 1$ . 又 $A^* = |\mathbf{A}|A^{-1}$ , 故

$$
\left(\boldsymbol {A} ^ {*}\right) ^ {m} = \left| \boldsymbol {A} \right| ^ {m} \left(\boldsymbol {A} ^ {- 1}\right) ^ {m} = \left| \boldsymbol {A} \right| ^ {m} \boldsymbol {A} ^ {- m} = \boldsymbol {I} _ {n}. \square
$$

例 2.36 设 A, B 为 n 阶矩阵, 求证: $(AB)^{*} = B^{*}A^{*}$ .

证明 设 C = AB. 记 $M_{ij}, N_{ij}, P_{ij}$ 分别是 A, B, C 中第 $(i, j)$ 元素的余子式， $A_{ij}, B_{ij}, C_{ij}$ 分别是 A, B, C 中第 $(i, j)$ 元素的代数余子式. 注意到

$$
\boldsymbol {A} ^ {*} = \left( \begin{array}{c c c c} A _ {1 1} & A _ {2 1} & \dots & A _ {n 1} \\ A _ {1 2} & A _ {2 2} & \dots & A _ {n 2} \\ \vdots & \vdots & & \vdots \\ A _ {1 n} & A _ {2 n} & \dots & A _ {n n} \end{array} \right), \quad \boldsymbol {B} ^ {*} = \left( \begin{array}{c c c c} B _ {1 1} & B _ {2 1} & \dots & B _ {n 1} \\ B _ {1 2} & B _ {2 2} & \dots & B _ {n 2} \\ \vdots & \vdots & & \vdots \\ B _ {1 n} & B _ {2 n} & \dots & B _ {n n} \end{array} \right),
$$

$B^{*}A^{*}$ 的第 $(i,j)$ 元素为 $\sum_{k=1}^{n}B_{ki}A_{jk}$ . 而 $C^{*}$ 的第 $(i,j)$ 元素就是 $C_{ji}=(-1)^{j+i}P_{ji}$ .
由 Cauchy-Binet 公式可得

$$
\begin{array}{r c l} C _ {j i} & = & (- 1) ^ {j + i} P _ {j i} = (- 1) ^ {j + i} \sum_ {k = 1} ^ {n} M _ {j k} N _ {k i} \\ & = & \sum_ {k = 1} ^ {n} (- 1) ^ {j + k} M _ {j k} (- 1) ^ {i + k} N _ {k i} = \sum_ {k = 1} ^ {n} A _ {j k} B _ {k i}, \end{array}
$$

故结论成立. □

例 2.37 设 A 为 n 阶矩阵, c 为常数, 求证:

(1) $(\pmb{A}^{\prime})^{*} = (\pmb{A}^{*})^{\prime}$ ; (2) $(c\pmb {A})^{*} = c^{n - 1}\pmb{A}^{*}$ ; 

(3) 若 $\pmb{A}$ 为可逆阵, 则 $A^{*}$ 也可逆, 并且 $(A^{*})^{-1} = (A^{-1})^{*}$ .

证明 (1) 和 (2) 由伴随矩阵的定义以及行列式的性质即得.

(3) 由例 2.36 可得

$$
\boldsymbol {A} ^ {*} (\boldsymbol {A} ^ {- 1}) ^ {*} = (\boldsymbol {A} ^ {- 1} \boldsymbol {A}) ^ {*} = \boldsymbol {I} _ {n} ^ {*} = \boldsymbol {I} _ {n},
$$

从而 $(\pmb{A}^{*})^{-1} = (\pmb{A}^{-1})^{*}$ . □

例 2.38 设 A 为 n 阶矩阵, 求证: $\left|A^{*}\right|=\left|A\right|^{n-1}$ .

证明 若 A 可逆, 则在关系式 $AA^{*} = |A|I_{n}$ 的两边同取行列式, 可得

$$
\left| \boldsymbol {A} \right| \left| \boldsymbol {A} ^ {*} \right| = \left| \boldsymbol {A} \boldsymbol {A} ^ {*} \right| = \left| \left| \boldsymbol {A} \right| \boldsymbol {I} _ {n} \right| = | \boldsymbol {A} | ^ {n},
$$

从而 $|\mathbf{A}^{*}| = |\mathbf{A}|^{n - 1}$ 

若 A 不可逆, 即 $|A|=0$ , 则存在可逆阵 P, Q, 使得 PAQ = $\Lambda = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ ,
其中 r < n. 我们注意到: 若 $r \leq n - 2$ , 则 $\Lambda^{*} = O$ ; 若 r = n - 1, 则 $\Lambda^{*} = \begin{pmatrix} O & O \\ O & 1 \end{pmatrix}$ .
无论是哪种情况, 我们都有 $|\Lambda^{*}|=0$ , 从而

$$
0 = | (P A Q) ^ {*} | = | Q ^ {*} A ^ {*} P ^ {*} | = | Q ^ {*} | | A ^ {*} | | P ^ {*} |.
$$

由例 2.37 可知 $P^{*}, Q^{*}$ 都是可逆阵, 因此 $|A^{*}| = 0 = |A|^{n-1}$ 仍然成立. □

例 2.39 设 A 为 $n(n>2)$ 阶矩阵, 求证: $(A^{*})^{*}=|A|^{n-2}A$ .

证明 若 $\pmb{A}$ 可逆, 则在关系式 $A^{*}A = |A|I_{n}$ 的两边同取伴随并由例2.36可得

$$
\boldsymbol {A} ^ {*} (\boldsymbol {A} ^ {*}) ^ {*} = (\boldsymbol {A} ^ {*} \boldsymbol {A}) ^ {*} = (| \boldsymbol {A} | \boldsymbol {I} _ {n}) ^ {*} = | \boldsymbol {A} | ^ {n - 1} \boldsymbol {I} _ {n}.
$$

而 $A^{*}=|A|A^{-1}$ ，代入即可解得 $(A^{*})^{*}=|A|^{n-2}A$ .

若 A 不可逆, 即 $|A|=0$ , 则存在可逆阵 P, Q, 使得 PAQ = Λ = $\begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ ,
其中 r < n. 由与例 2.38 类似的讨论可得 $\Lambda^{**} = O$ ，从而

$$
O = (P A Q) ^ {* *} = P ^ {* *} A ^ {* *} Q ^ {* *}.
$$

由例 2.37 可知 $P^{**}, Q^{**}$ 都是可逆阵, 因此 $A^{**} = O = |A|^{n-2}A$ 仍然成立. □

例 2.40 设 A 为 m 阶矩阵, B 为 n 阶矩阵, 求分块对角阵 C 的伴随矩阵:

$$
C = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right).
$$

解 设 $A = (a_{ij})_{m \times m}$ , 元素 $a_{ij}$ 的余子式和代数余子式分别记为 $M_{ij}$ 和 $A_{ij}$ ; $B = (b_{ij})_{n \times n}$ , 元素 $b_{ij}$ 的余子式和代数余子式分别记为 $N_{ij}$ 和 $B_{ij}$ . 利用 Laplace 定理可以容易地计算出: 当 $1 \leq i, j \leq m$ 时, $C$ 的第 $(i, j)$ 元素的代数余子式为 $(-1)^{i+j} M_{ij} | B| = |B| A_{ij}$ ; 当 $m + 1 \leq i, j \leq m + n$ 时, $C$ 的第 $(i, j)$ 元素的代数余子式为 $(-1)^{i+j} N_{i-m, j-m} | A| = |A| B_{i-m, j-m}$ ; 当 $i, j$ 属于其他范围时, $C$ 的第 $(i, j)$ 元素的代数余子式等于零. 因此我们有

$$
\boldsymbol {C} ^ {*} = \left( \begin{array}{c c} | \boldsymbol {B} | \boldsymbol {A} ^ {*} & \boldsymbol {O} \\ \boldsymbol {O} & | \boldsymbol {A} | \boldsymbol {B} ^ {*} \end{array} \right). \square
$$

例 2.41 已知 $A^{*}=\begin{pmatrix}1&-2&1\\0&2&-2\\-1&2&1\end{pmatrix}$ ，求 A.

解 计算行列式可得 $|\mathbf{A}^{*}| = 4$ ，由例2.38可知， $|\mathbf{A}^{*}| = |\mathbf{A}|^{2} = 4$ ，从而 $|\mathbf{A}| = \pm 2$ . 若 $|\mathbf{A}| = 2$ ，则

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{2} \boldsymbol {A} ^ {*} = \left( \begin{array}{c c c} \frac {1}{2} & - 1 & \frac {1}{2} \\ 0 & 1 & - 1 \\ - \frac {1}{2} & 1 & \frac {1}{2} \end{array} \right),
$$

于是

$$
\boldsymbol {A} = (\boldsymbol {A} ^ {- 1}) ^ {- 1} = \left( \begin{array}{c c c} 3 & 2 & 1 \\ 1 & 1 & 1 \\ 1 & 0 & 1 \end{array} \right).
$$

若 $|\mathbf{A}| = -2$ ，则 $\mathbf{A}^{-1} = -\frac{1}{2}\mathbf{A}^*$ ，于是

$$
\boldsymbol {A} = \left( \begin{array}{c c c} - 3 & - 2 & - 1 \\ - 1 & - 1 & - 1 \\ - 1 & 0 & - 1 \end{array} \right). \square
$$

例2.42 设 $n$ 阶矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 2 & 2 & 2 & \dots & 2 \\ 0 & 1 & 1 & \dots & 1 \\ 0 & 0 & 1 & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \end{array} \right),
$$

求 $\sum_{i,j=1}^{n} A_{ij}$ .

解法 1 显然 $|A|=2$ ，用初等变换不难求出

$$
\boldsymbol {A} ^ {- 1} = \left( \begin{array}{c c c c c c} \frac {1}{2} & - 1 & 0 & \dots & 0 & 0 \\ 0 & 1 & - 1 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 1 & - 1 \\ 0 & 0 & 0 & \dots & 0 & 1 \end{array} \right),
$$

故

$$
\boldsymbol {A} ^ {*} = 2 \boldsymbol {A} ^ {- 1} = \left( \begin{array}{c c c c c c} 1 & - 2 & 0 & \dots & 0 & 0 \\ 0 & 2 & - 2 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 2 & - 2 \\ 0 & 0 & 0 & \dots & 0 & 2 \end{array} \right).
$$

将 $A^{*}$ 的所有元素加起来, 可得 $\sum_{i,j=1}^{n} A_{ij} = 1$ .

解法2 由例1.7可得

$$
- \sum_ {i, j = 1} ^ {n} A _ {i j} = \left| \begin{array}{c c c c c c} 2 & 2 & 2 & \dots & 2 & 1 \\ 0 & 1 & 1 & \dots & 1 & 1 \\ 0 & 0 & 1 & \dots & 1 & 1 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 1 & 1 \\ 1 & 1 & 1 & \dots & 1 & 0 \end{array} \right| = \left| \begin{array}{c c c c c c} 2 & 2 & 2 & \dots & 2 & 1 \\ 0 & 1 & 1 & \dots & 1 & 1 \\ 0 & 0 & 1 & \dots & 1 & 1 \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0. & \dots & 1 & 1 \\ 0 & 0 & 0. & \dots & 0. & - \frac {1}{2} \end{array} \right| = - 1,
$$

于是 $\sum_{i,j=1}^{n} A_{ij} = 1$ .

解法3 由例1.22可得 $|\mathbf{A}(-1)| = |\mathbf{A}| - \sum_{i,j=1}^{n} A_{ij}$ , 又 $|\mathbf{A}| = 2$ 且

$$
| \boldsymbol {A} (- 1) | = \left| \begin{array}{c c c c c} 1 & 1 & \dots & 1 & 1 \\ - 1 & 0 & \dots & 0 & 0 \\ - 1 & - 1 & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ - 1 & - 1 & \dots & - 1 & 0 \end{array} \right| = (- 1) ^ {n + 1} \left| \begin{array}{c c c c} - 1 & 0 & \dots & 0 \\ - 1 & - 1 & \dots & 0 \\ \vdots & \vdots & & \vdots \\ - 1 & - 1 & \dots & - 1 \end{array} \right| = 1,
$$

故 $\sum_{i,j=1}^{n} A_{ij} = |A| - |A(-1)| = 1$ .

解法4 由例1.49可得

$$
\sum_ {i, j = 1} ^ {n} A _ {i j} = \left| \begin{array}{c c c c c} 0 & 0 & \dots & 0 & 1 \\ - 1 & 0 & \dots & 0 & 1 \\ 0 & - 1 & \dots & 0 & 1 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & - 1 & 1 \end{array} \right| = (- 1) ^ {n + 1} \left| \begin{array}{c c c c} - 1 & 0 & \dots & 0 \\ 0 & - 1 & \dots & 0 \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & - 1 \end{array} \right| = 1. \square
$$

## § 2.7 矩阵的迹

设 $\boldsymbol{A}=(a_{ij})$ 是 n 阶矩阵, 则 A 主对角线上元素之和

$$
a _ {1 1} + a _ {2 2} + \dots + a _ {n n}
$$

称为矩阵 A 的迹, 记为 $\mathrm{tr}(A)$ . 迹是矩阵的一个重要不变量 (相似不变量). 用迹来证明某些问题有时特别简单, 我们将在后面的章节中陆续介绍. 这里我们介绍迹的几个基本性质, 首先是迹的 “线性”、“对称性” 和 “交换性”.

例 2.43 设 A, B 是 n 阶矩阵, 求证:

(1) $\operatorname{tr}(\mathbf{A} + \mathbf{B}) = \operatorname{tr}(\mathbf{A}) + \operatorname{tr}(\mathbf{B})$ ; (2) $\operatorname{tr}(k\mathbf{A}) = k\operatorname{tr}(\mathbf{A})$ ; (3) $\operatorname{tr}(\mathbf{A}') = \operatorname{tr}(\mathbf{A})$ ; (4) $\operatorname{tr}(\mathbf{AB}) = \operatorname{tr}(\mathbf{BA})$ . 

证明 (1)、(2) 以及 (3) 由迹的定义即得, 下面证明 (4) 的一个推广. 设

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c c} b _ {1 1} & b _ {1 2} & \dots & b _ {1 m} \\ b _ {2 1} & b _ {2 2} & \dots & b _ {2 m} \\ \vdots & \vdots & & \vdots \\ b _ {n 1} & b _ {n 2} & \dots & b _ {n m} \end{array} \right)
$$

分别为 $m \times n$ 矩阵、 $n \times m$ 矩阵，则 $\mathbf{AB} = (c_{ij})$ 为 $m$ 阶方阵， $\mathbf{BA} = (d_{ij})$ 为 $n$ 阶方阵，于是

$$
\operatorname{tr} (\boldsymbol {A B}) = \sum_ {i = 1} ^ {m} c _ {i i} = \sum_ {i = 1} ^ {m} \sum_ {k = 1} ^ {n} a _ {i k} b _ {k i}, \quad \operatorname{tr} (\boldsymbol {B A}) = \sum_ {k = 1} ^ {n} d _ {k k} = \sum_ {k = 1} ^ {n} \sum_ {i = 1} ^ {m} b _ {k i} a _ {i k}.
$$

由求和的交换性即得: $\mathrm{tr}(AB)=\mathrm{tr}(BA)$ . □

例 2.44 求证: 不存在 n 阶矩阵 A, B, 使得 AB - BA = kI_n (k ≠ 0).

证明 用反证法证明. 若存在 $n$ 阶矩阵 $\mathbf{A}, \mathbf{B}$ 满足条件 $\mathbf{AB} - \mathbf{BA} = k\mathbf{I}_n (k \neq 0)$ , 则 $kn = \operatorname{tr}(k\mathbf{I}_n) = \operatorname{tr}(\mathbf{AB} - \mathbf{BA}) = \operatorname{tr}(\mathbf{AB}) - \operatorname{tr}(\mathbf{BA}) = 0$ , 矛盾. $\square$ 

例 2.45 设 A 是 n 阶矩阵, P 是同阶可逆阵, 求证: $\mathrm{tr}(P^{-1}AP) = \mathrm{tr}(A)$ , 即相似矩阵具有相同的迹.

证明 因为 $\operatorname{tr}(\mathbf{AB}) = \operatorname{tr}(\mathbf{BA})$ ，故 $\operatorname{tr}(\mathbf{P}^{-1}\mathbf{AP}) = \operatorname{tr}(\mathbf{APP}^{-1}) = \operatorname{tr}(\mathbf{A})$ . □

迹还有一个基本性质是所谓的“正定性”，用它可以证明一个矩阵是零矩阵。

例 2.46 证明下列结论:

(1) 若 A 是 $m \times n$ 实矩阵, 则 $\mathrm{tr}(AA') \geq 0$ , 等号成立的充要条件是 A = O;

(2) 若 A 是 $m \times n$ 复矩阵, 则 $\mathrm{tr}(A\overline{A}') \geq 0$ , 等号成立的充要条件是 A = O.

证明 (1) 设 $A = (a_{ij})$ 为 $m \times n$ 实矩阵, 则通过计算可得

$$
\operatorname{tr} \left(\boldsymbol {A} \boldsymbol {A} ^ {\prime}\right) = \sum_ {i = 1} ^ {m} \sum_ {j = 1} ^ {n} a _ {i j} ^ {2} \geq 0,
$$

等号成立当且仅当 $a_{ij}=0(1\leq i\leq m,1\leq j\leq n)$ ，即 A=O.

(2) 设 $A = (a_{ij})$ 为 $m \times n$ 复矩阵, 则通过计算可得

$$
\operatorname{tr} \left(\boldsymbol {A} \overline {{{{\boldsymbol {A}}}}} ^ {\prime}\right) = \sum_ {i = 1} ^ {m} \sum_ {j = 1} ^ {n} \left| a _ {i j} \right| ^ {2} \geq 0,
$$

等号成立当且仅当 $a_{ij} = 0(1\leq i\leq m,1\leq j\leq n)$ ，即 $\pmb {A} = \pmb{O}$ □

例 2.47 设 $A_{1}, A_{2}, \cdots, A_{k}$ 是实对称阵且 $A_{1}^{2} + A_{2}^{2} + \cdots + A_{k}^{2} = O$ ，证明：每个 $A_{i} = O$ .

证明 对题设中的等式两边同时取迹, 可得

$$
0 = \operatorname{tr} (\boldsymbol {O}) = \operatorname{tr} \left(\boldsymbol {A} _ {1} ^ {2} + \boldsymbol {A} _ {2} ^ {2} + \dots + \boldsymbol {A} _ {k} ^ {2}\right) = \operatorname{tr} \left(\boldsymbol {A} _ {1} \boldsymbol {A} _ {1} ^ {\prime}\right) + \operatorname{tr} \left(\boldsymbol {A} _ {2} \boldsymbol {A} _ {2} ^ {\prime}\right) + \dots + \operatorname{tr} \left(\boldsymbol {A} _ {k} \boldsymbol {A} _ {k} ^ {\prime}\right).
$$

由例 2.46 可得 $\mathrm{tr}(A_{i}A_{i}^{\prime})\geq0$ ，从而只可能是 $\mathrm{tr}(A_{i}A_{i}^{\prime})=0(1\leq i\leq k)$ ，再次由例 2.46 可得 $A_{i}=O(1\leq i\leq k)$ 。☐

例 2.48 证明下列结论:

(1) 设 $n$ 阶实矩阵 $\mathbf{A}$ 适合 $A' = -A$ , 如果存在同阶实矩阵 $\mathbf{B}$ , 使得 $AB = B$ , 则 $B = O$ ;

(2) 设 $n$ 阶复矩阵 $\mathbf{A}$ 适合 $\overline{\mathbf{A}}' = -\mathbf{A}$ , 如果存在同阶复矩阵 $\mathbf{B}$ , 使得 $\mathbf{AB} = \mathbf{B}$ , 则 $\mathbf{B} = \mathbf{O}$ .

证明 (1) 在等式 $AB = B$ 两边同时左乘 $B'$ 可得

$$
\boldsymbol {B} ^ {\prime} \boldsymbol {A} \boldsymbol {B} = \boldsymbol {B} ^ {\prime} \boldsymbol {B}.
$$

上式两边同时转置并注意到 $A' = -A$ ，可得

$$
\boldsymbol {B} ^ {\prime} \boldsymbol {B} = (\boldsymbol {B} ^ {\prime} \boldsymbol {B}) ^ {\prime} = (\boldsymbol {B} ^ {\prime} \boldsymbol {A B}) ^ {\prime} = \boldsymbol {B} ^ {\prime} \boldsymbol {A} ^ {\prime} \boldsymbol {B} = - \boldsymbol {B} ^ {\prime} \boldsymbol {A B} = - \boldsymbol {B} ^ {\prime} \boldsymbol {B},
$$

从而有 $B^{\prime}B = O$ . 两边同时取迹, 由例 2.46 可得 B = O.

(2) 的证明与 (1) 类似. $\square$ 

注 例 2.48 也可用例 2.30 及其复版本来证明, 我们把细节留给读者完成.

例 2.49 设 A 为 n 阶实矩阵, 求证: $\mathrm{tr}(A^{2}) \leq \mathrm{tr}(AA')$ , 等号成立当且仅当 A 是对称阵.

证明 由迹的线性、对称性、交换性和正定性可得

$$
\begin{array}{l} \operatorname{tr} \left((A - A ^ {\prime}) (A - A ^ {\prime}) ^ {\prime}\right) \\ = \operatorname{tr} \left((A - A ^ {\prime}) (A ^ {\prime} - A)\right) = \operatorname{tr} \left(A A ^ {\prime} - A ^ {2} - (A ^ {\prime}) ^ {2} + A ^ {\prime} A\right) \\ = 2 \operatorname{tr} (A A ^ {\prime}) - 2 \operatorname{tr} (A ^ {2}) \geq 0, \end{array}
$$

故要证的不等式成立. 若上述不等式的等号成立, 则由迹的正定性可知 $A - A' = O$ , 即 $\pmb{A}$ 为对称阵. $\square$ 

矩阵求迹的技巧也常常和基础矩阵联系在一起, 让我们来看下面两个例题.

例 2.50 设 A, B 是两个 n 阶矩阵, 使得 $\mathrm{tr}(ABC) = \mathrm{tr}(CBA)$ 对任意 n 阶矩阵 C 成立, 求证: AB = BA.

证明 设 $AB = (d_{ij}), BA = (e_{ij})$ ，令 $C = E_{kl} (1 \leq k, l \leq n)$ ，则

$$
\operatorname{tr} (\boldsymbol {A B C}) = d _ {l k}, \quad \operatorname{tr} (\boldsymbol {C B A}) = e _ {l k},
$$

因此 $d_{lk} = e_{lk}(1\leq k,l\leq n)$ ，即有 $\pmb {A}\pmb {B} = \pmb {B}\pmb{A}$ □

注 若 $A, B$ 是实 (复) 矩阵, 我们还可以通过迹的正定性来证明结论. 事实上, 由迹的交换性和线性可得 $\operatorname{tr}((AB - BA)C) = 0$ , 令 $C$ 为 $AB - BA$ 的转置 (共轭转置), 再由例 2.46 即得结论.

下面的例题给出了迹的刻画, 它告诉我们迹函数由线性、交换性和正规性 (即单位矩阵处的取值为其阶数) 唯一决定.

例 2.51 设 f 是数域 F 上 n 阶矩阵集合到 F 的一个映射, 它满足下列条件:

(1) 对任意的 $n$ 阶矩阵 $\mathbf{A}, \mathbf{B}, f(\mathbf{A} + \mathbf{B}) = f(\mathbf{A}) + f(\mathbf{B})$ ;

(2) 对任意的 $n$ 阶矩阵 $\mathbf{A}$ 和 $\mathbb{F}$ 中的数 $k, f(k\mathbf{A}) = kf(\mathbf{A})$ ;

(3) 对任意的 n 阶矩阵 A, B, $f(AB) = f(BA)$ ;

(4) $f(\pmb{I}_n) = n.$ 

求证: $f$ 就是迹, 即 $f(A) = \operatorname{tr}(A)$ 对一切 $\mathbb{F}$ 上 $n$ 阶矩阵 $\pmb{A}$ 成立.

证明 设 $E_{ij}$ 是 $n$ 阶基础矩阵. 由 (1) 和 (4), 有

$$
n = f \left(\boldsymbol {I} _ {n}\right) = f \left(\boldsymbol {E} _ {1 1} + \boldsymbol {E} _ {2 2} + \dots + \boldsymbol {E} _ {n n}\right) = f \left(\boldsymbol {E} _ {1 1}\right) + f \left(\boldsymbol {E} _ {2 2}\right) + \dots + f \left(\boldsymbol {E} _ {n n}\right).
$$

又由 (3), 有

$$
f (\boldsymbol {E} _ {i i}) = f (\boldsymbol {E} _ {i j} \boldsymbol {E} _ {j i}) = f (\boldsymbol {E} _ {j i} \boldsymbol {E} _ {i j}) = f (\boldsymbol {E} _ {j j}),
$$

所以 $f(E_{ii}) = 1(1\leq i\leq n)$ .另一方面，若 $i\neq j$ ，则

$$
f (\boldsymbol {E} _ {i j}) = f (\boldsymbol {E} _ {i 1} \boldsymbol {E} _ {1 j}) = f (\boldsymbol {E} _ {1 j} \boldsymbol {E} _ {i 1}) = f (\boldsymbol {O}) = f (0 \cdot \boldsymbol {I} _ {n}) = 0 \cdot f (\boldsymbol {I} _ {n}) = 0.
$$

设 $n$ 阶矩阵 $\pmb {A} = (a_{ij})$ ，则

$$
f (\boldsymbol {A}) = f \left(\sum_ {i, j = 1} ^ {n} a _ {i j} \boldsymbol {E} _ {i j}\right) = \sum_ {i, j = 1} ^ {n} a _ {i j} f (\boldsymbol {E} _ {i j}) = \sum_ {i = 1} ^ {n} a _ {i i} = \operatorname{tr} (\boldsymbol {A}).
$$

## § 2.8 矩阵乘法与行列式的计算

设 $A, B$ 是两个 $n$ 阶矩阵, 则 $|AB| = |A||B|$ . 这个结论可以用来简化某些行列式的计算, 例如在以下 3 种情形, 矩阵 $C$ 的行列式都很容易计算出来:

(1) C = AB, 其中 A, B 的行列式都很容易计算;

(2) $CA = B$ , 其中 $\pmb{A}$ 与 $\pmb{C}$ 密切相关, $\pmb{B}$ 的行列式很容易计算;

(3) $CA = B$ , 其中 $\pmb{A}, \pmb{B}$ 的行列式都很容易计算.

下面几个例子告诉我们如何灵活地应用这种方法来计算行列式.

例 2.52 设 $n \geq 3$ ，证明下列矩阵 A 的行列式值等于零：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 + x _ {1} y _ {1} & 1 + x _ {1} y _ {2} & \dots & 1 + x _ {1} y _ {n} \\ 1 + x _ {2} y _ {1} & 1 + x _ {2} y _ {2} & \dots & 1 + x _ {2} y _ {n} \\ \vdots & \vdots & & \vdots \\ 1 + x _ {n} y _ {1} & 1 + x _ {n} y _ {2} & \dots & 1 + x _ {n} y _ {n} \end{array} \right).
$$

证明 从下列分解即可得到结论:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 1 & x _ {1} & 0 & \dots & 0 \\ 1 & x _ {2} & 0 & \dots & 0 \\ 1 & x _ {3} & 0 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x _ {n} & 0 & \dots & 0 \end{array} \right) \left( \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ y _ {1} & y _ {2} & y _ {3} & \dots & y _ {n} \\ 0 & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 0 \end{array} \right). \square
$$

例 2.53 计算下列 $n+1$ 阶矩阵的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} (a _ {0} + b _ {0}) ^ {n} & (a _ {0} + b _ {1}) ^ {n} & \dots & (a _ {0} + b _ {n}) ^ {n} \\ (a _ {1} + b _ {0}) ^ {n} & (a _ {1} + b _ {1}) ^ {n} & \dots & (a _ {1} + b _ {n}) ^ {n} \\ \vdots & \vdots & & \vdots \\ (a _ {n} + b _ {0}) ^ {n} & (a _ {n} + b _ {1}) ^ {n} & \dots & (a _ {n} + b _ {n}) ^ {n} \end{array} \right).
$$

解 将 A 分解为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 1 & \mathrm{C} _ {n} ^ {1} a _ {0} & \mathrm{C} _ {n} ^ {2} a _ {0} ^ {2} & \dots & \mathrm{C} _ {n} ^ {n} a _ {0} ^ {n} \\ 1 & \mathrm{C} _ {n} ^ {1} a _ {1} & \mathrm{C} _ {n} ^ {2} a _ {1} ^ {2} & \dots & \mathrm{C} _ {n} ^ {n} a _ {1} ^ {n} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & \mathrm{C} _ {n} ^ {1} a _ {n} & \mathrm{C} _ {n} ^ {2} a _ {n} ^ {2} & \dots & \mathrm{C} _ {n} ^ {n} a _ {n} ^ {n} \end{array} \right) \left( \begin{array}{c c c c c} b _ {0} ^ {n} & b _ {1} ^ {n} & b _ {2} ^ {n} & \dots & b _ {n} ^ {n} \\ b _ {0} ^ {n - 1} & b _ {1} ^ {n - 1} & b _ {2} ^ {n - 1} & \dots & b _ {n} ^ {n - 1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 1 \end{array} \right),
$$

于是

$$
| \boldsymbol {A} | = \mathrm{C} _ {n} ^ {1} \mathrm{C} _ {n} ^ {2} \dots \mathrm{C} _ {n} ^ {n} \prod_ {0 \leq i <   j \leq n} (a _ {j} - a _ {i}) (b _ {i} - b _ {j}).
$$

例 2.54 设 $s_{k}=x_{1}^{k}+x_{2}^{k}+\cdots+x_{n}^{k}(k\geq1)$ , $s_{0}=n$ ,

$$
\boldsymbol {S} = \left( \begin{array}{c c c c c} s _ {0} & s _ {1} & s _ {2} & \dots & s _ {n - 1} \\ s _ {1} & s _ {2} & s _ {3} & \dots & s _ {n} \\ s _ {2} & s _ {3} & s _ {4} & \dots & s _ {n + 1} \\ \vdots & \vdots & \vdots & & \vdots \\ s _ {n - 1} & s _ {n} & s _ {n + 1} & \dots & s _ {2 n - 2} \end{array} \right),
$$

求 $|S|$ 的值并证明若 $x_{i}$ 是实数，则 $|S|\geq 0$ 

解设

$$
\boldsymbol {V} = \left( \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ x _ {1} & x _ {2} & x _ {3} & \dots & x _ {n} \\ x _ {1} ^ {2} & x _ {2} ^ {2} & x _ {3} ^ {2} & \dots & x _ {n} ^ {2} \\ \vdots & \vdots & \vdots & & \vdots \\ x _ {1} ^ {n - 1} & x _ {2} ^ {n - 1} & x _ {3} ^ {n - 1} & \dots & x _ {n} ^ {n - 1} \end{array} \right),
$$

则 $S = VV'$ ，因此

$$
| \boldsymbol {S} | = | \boldsymbol {V} | ^ {2} = \prod_ {1 \leq i <   j \leq n} (x _ {j} - x _ {i}) ^ {2} \geq 0. \square
$$

例 2.55 计算下列矩阵 A 的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} x & - y & - z & - w \\ y & x & - w & z \\ z & w & x & - y \\ w & - z & y & x \end{array} \right).
$$

解 注意到

$$
\boldsymbol {A} \boldsymbol {A} ^ {\prime} = \left( \begin{array}{c c c c} x & - y & - z & - w \\ y & x & - w & z \\ z & w & x & - y \\ w & - z & y & x \end{array} \right) \left( \begin{array}{c c c c} x & y & z & w \\ - y & x & w & - z \\ - z & - w & x & y \\ - w & z & - y & x \end{array} \right) = \left( \begin{array}{c c c c} u & 0 & 0 & 0 \\ 0 & u & 0 & 0 \\ 0 & 0 & u & 0 \\ 0 & 0 & 0 & u \end{array} \right),
$$

其中 $u = x^{2} + y^{2} + z^{2} + w^{2}$ ，因此

$$
\left| \boldsymbol {A} \right| ^ {2} = (x ^ {2} + y ^ {2} + z ^ {2} + w ^ {2}) ^ {4}.
$$

在矩阵 A 中令 x=1, y=z=w=0, 显然 $|A|=1$ , 故

$$
| \boldsymbol {A} | = (x ^ {2} + y ^ {2} + z ^ {2} + w ^ {2}) ^ {2}. \square
$$

例 2.56 计算下列循环矩阵 A 的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ a _ {n - 1} & a _ {n} & a _ {1} & \dots & a _ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {2} & a _ {3} & a _ {4} & \dots & a _ {1} \end{array} \right).
$$

解 作多项式 $f(x) = a_{1} + a_{2}x + a_{3}x^{2} + \dots + a_{n}x^{n - 1}$ ，令 $\varepsilon_{1}, \varepsilon_{2}, \dots, \varepsilon_{n}$ 是 1 的所有 $n$ 次方根. 又令

$$
\boldsymbol {V} = \left( \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ \varepsilon_ {1} & \varepsilon_ {2} & \varepsilon_ {3} & \dots & \varepsilon_ {n} \\ \varepsilon_ {1} ^ {2} & \varepsilon_ {2} ^ {2} & \varepsilon_ {3} ^ {2} & \dots & \varepsilon_ {n} ^ {2} \\ \vdots & \vdots & \vdots & & \vdots \\ \varepsilon_ {1} ^ {n - 1} & \varepsilon_ {2} ^ {n - 1} & \varepsilon_ {3} ^ {n - 1} & \dots & \varepsilon_ {n} ^ {n - 1} \end{array} \right),   \boldsymbol {\Lambda} = \left( \begin{array}{c c c c c} f (\varepsilon_ {1}) & 0 & 0 & \dots & 0 \\ 0 & f (\varepsilon_ {2}) & 0 & \dots & 0 \\ 0 & 0 & f (\varepsilon_ {3}) & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & f (\varepsilon_ {n}) \end{array} \right),
$$

则

$$
\boldsymbol {A} \boldsymbol {V} = \left( \begin{array}{c c c c c} f (\varepsilon_ {1}) & f (\varepsilon_ {2}) & f (\varepsilon_ {3}) & \dots & f (\varepsilon_ {n}) \\ \varepsilon_ {1} f (\varepsilon_ {1}) & \varepsilon_ {2} f (\varepsilon_ {2}) & \varepsilon_ {3} f (\varepsilon_ {3}) & \dots & \varepsilon_ {n} f (\varepsilon_ {n}) \\ \varepsilon_ {1} ^ {2} f (\varepsilon_ {1}) & \varepsilon_ {2} ^ {2} f (\varepsilon_ {2}) & \varepsilon_ {3} ^ {2} f (\varepsilon_ {3}) & \dots & \varepsilon_ {n} ^ {2} f (\varepsilon_ {n}) \\ \vdots & \vdots & \vdots & & \vdots \\ \varepsilon_ {1} ^ {n - 1} f (\varepsilon_ {1}) & \varepsilon_ {2} ^ {n - 1} f (\varepsilon_ {2}) & \varepsilon_ {3} ^ {n - 1} f (\varepsilon_ {3}) & \dots & \varepsilon_ {n} ^ {n - 1} f (\varepsilon_ {n}) \end{array} \right) = \boldsymbol {V} \boldsymbol {\Lambda}.
$$

因此

$$
| \boldsymbol {A} | | \boldsymbol {V} | = | \boldsymbol {A} \boldsymbol {V} | = | \boldsymbol {V} \boldsymbol {\Lambda} | = | \boldsymbol {V} | | \boldsymbol {\Lambda} |.
$$

因为 $\varepsilon_{i}$ 互不相同，所以 $|\pmb{V}| \neq 0$ ，从而

$$
| \boldsymbol {A} | = | \boldsymbol {\Lambda} | = f (\varepsilon_ {1}) f (\varepsilon_ {2}) \dots f (\varepsilon_ {n}).
$$

例 2.57 计算下列矩阵 A 的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} \cos \theta & \cos 2 \theta & \cos 3 \theta & \dots & \cos n \theta \\ \cos n \theta & \cos \theta & \cos 2 \theta & \dots & \cos (n - 1) \theta \\ \cos (n - 1) \theta & \cos n \theta & \cos \theta & \dots & \cos (n - 2) \theta \\ \vdots & \vdots & \vdots & & \vdots \\ \cos 2 \theta & \cos 3 \theta & \cos 4 \theta & \dots & \cos \theta \end{array} \right).
$$

解 由上面的结论可知

$$
| \boldsymbol {A} | = f (\varepsilon_ {1}) f (\varepsilon_ {2}) \dots f (\varepsilon_ {n}),
$$

其中 $\varepsilon_{1},\varepsilon_{2},\cdots,\varepsilon_{n}$ 是 1 的所有 n 次方根, $f(x)=\cos\theta+x\cos2\theta+\cdots+x^{n-1}\cos n\theta.$ 令

$$
g (x) = \sin \theta + x \sin 2 \theta + \dots + x ^ {n - 1} \sin n \theta ,
$$

则

$$
f (x) + \mathrm{i} g (x) = (\cos \theta + \mathrm{i} \sin \theta) + x (\cos \theta + \mathrm{i} \sin \theta) ^ {2} + \dots + x ^ {n - 1} (\cos \theta + \mathrm{i} \sin \theta) ^ {n}.
$$

用等比级数求和再比较实部, 可得

$$
f (x) = \frac {\cos n \theta \cdot x ^ {n + 1} - \cos (n + 1) \theta \cdot x ^ {n} - x + \cos \theta}{x ^ {2} - 2 \cos \theta \cdot x + 1}.
$$

对任意的 $\varepsilon_{i}$ ，经计算并化简，可得

$$
f (\varepsilon_ {i}) = \frac {\Big (\cos \theta - \cos (n + 1) \theta \Big) - \varepsilon_ {i} (1 - \cos n \theta)}{\Big ((\cos \theta + \mathrm{i} \sin \theta) - \varepsilon_ {i} \Big) \Big ((\cos \theta - \mathrm{i} \sin \theta) - \varepsilon_ {i} \Big)}.
$$

注意到对任意的 a, b, 有 $a^{n}-b^{n}=(a-\varepsilon_{1}b)(a-\varepsilon_{2}b)\cdots(a-\varepsilon_{n}b)$ ，因此

$$
\begin{array}{l l} | \boldsymbol {A} | = \prod_ {i = 1} ^ {n} f (\varepsilon_ {i}) & = \frac {\left(\cos \theta - \cos (n + 1) \theta\right) ^ {n} - (1 - \cos n \theta) ^ {n}}{\left((\cos n \theta + i \sin n \theta) - 1\right) ((\cos n \theta - i \sin n \theta) - 1)} \\ & = \frac {\left(\cos \theta - \cos (n + 1) \theta\right) ^ {n} - (1 - \cos n \theta) ^ {n}}{2 (1 - \cos n \theta)} \\ & = 2 ^ {n - 2} \sin^ {n - 2} \frac {n \theta}{2} \left(\sin^ {n} \frac {(n + 2) \theta}{2} - \sin^ {n} \frac {n \theta}{2}\right). \square \end{array}
$$

## § 2.9 Cauchy-Binet 公式

若 A, B 分别是 $m \times n$ , $n \times m$ 矩阵，则 Cauchy-Binet 公式给出了 AB 的行列式及其 r 阶子式的计算公式。我们已在例 2.36 中利用 Cauchy-Binet 公式证明了 $(AB)^{*} = B^{*}A^{*}$ ，下面再来看一些典型例题。

例 2.58 设 $n \geq 3$ ，证明下列矩阵是奇异阵：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} \cos (\alpha_ {1} - \beta_ {1}) & \cos (\alpha_ {1} - \beta_ {2}) & \dots & \cos (\alpha_ {1} - \beta_ {n}) \\ \cos (\alpha_ {2} - \beta_ {1}) & \cos (\alpha_ {2} - \beta_ {2}) & \dots & \cos (\alpha_ {2} - \beta_ {n}) \\ \vdots & \vdots & & \vdots \\ \cos (\alpha_ {n} - \beta_ {1}) & \cos (\alpha_ {n} - \beta_ {2}) & \dots & \cos (\alpha_ {n} - \beta_ {n}) \end{array} \right).
$$

证明 利用三角公式 $\cos (\alpha -\beta) = \cos \alpha \cos \beta +\sin \alpha \sin \beta$ 可将矩阵 $\pmb{A}$ 分解为如下形式：

$$
\boldsymbol {A} = \left( \begin{array}{c c} \cos \alpha_ {1} & \sin \alpha_ {1} \\ \cos \alpha_ {2} & \sin \alpha_ {2} \\ \vdots & \vdots \\ \cos \alpha_ {n} & \sin \alpha_ {n} \end{array} \right) \left( \begin{array}{c c c c} \cos \beta_ {1} & \cos \beta_ {2} & \dots & \cos \beta_ {n} \\ \sin \beta_ {1} & \sin \beta_ {2} & \dots & \sin \beta_ {n} \end{array} \right).
$$

因为 $n > 2$ ，由Cauchy-Binet公式马上得到 $\vert A\vert = 0.$ □

例 2.52 设 $n \geq 3$ ，证明下列矩阵 A 的行列式值等于零：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 + x _ {1} y _ {1} & 1 + x _ {1} y _ {2} & \dots & 1 + x _ {1} y _ {n} \\ 1 + x _ {2} y _ {1} & 1 + x _ {2} y _ {2} & \dots & 1 + x _ {2} y _ {n} \\ \vdots & \vdots & & \vdots \\ 1 + x _ {n} y _ {1} & 1 + x _ {n} y _ {2} & \dots & 1 + x _ {n} y _ {n} \end{array} \right).
$$

证法 2 将矩阵 A 分解为如下形式:

$$
\boldsymbol {A} = \left( \begin{array}{c c} 1 & x _ {1} \\ 1 & x _ {2} \\ 1 & x _ {3} \\ \vdots & \vdots \\ 1 & x _ {n} \end{array} \right) \left( \begin{array}{c c c c c} 1 & 1 & 1 & \dots & 1 \\ y _ {1} & y _ {2} & y _ {3} & \dots & y _ {n} \end{array} \right).
$$

因为 $n > 2$ ，由Cauchy-Binet公式马上得到 $\vert A\vert = 0.$ □

例 1.24 设 $f_{1}(x)$ , $f_{2}(x)$ , $\cdots$ , $f_{n}(x)$ 是次数不超过 n-2 的多项式, 求证: 对任意 n 个数 $a_{1}$ , $a_{2}$ , $\cdots$ , $a_{n}$ , 均有

$$
\left| \begin{array}{c c c c} f _ {1} (a _ {1}) & f _ {2} (a _ {1}) & \dots & f _ {n} (a _ {1}) \\ f _ {1} (a _ {2}) & f _ {2} (a _ {2}) & \dots & f _ {n} (a _ {2}) \\ \vdots & \vdots & & \vdots \\ f _ {1} (a _ {n}) & f _ {2} (a _ {n}) & \dots & f _ {n} (a _ {n}) \end{array} \right| = 0.
$$

证法3 设多项式

$$
f _ {k} (x) = c _ {k, n - 2} x ^ {n - 2} + \dots + c _ {k 1} x + c _ {k 0}, 1 \leq k \leq n,
$$

则有如下的矩阵分解:

$$
\left( \begin{array}{c c c c} f _ {1} (a _ {1}) & f _ {2} (a _ {1}) & \ldots & f _ {n} (a _ {1}) \\ f _ {1} (a _ {2}) & f _ {2} (a _ {2}) & \ldots & f _ {n} (a _ {2}) \\ \vdots & \vdots & & \vdots \\ f _ {1} (a _ {n}) & f _ {2} (a _ {n}) & \ldots & f _ {n} (a _ {n}) \end{array} \right) = \left( \begin{array}{c c c c} 1 & a _ {1} & \dots & a _ {1} ^ {n - 2} \\ 1 & a _ {2} & \dots & a _ {2} ^ {n - 2} \\ \vdots & \vdots & & \vdots \\ 1 & a _ {n} & \dots & a _ {n} ^ {n - 2} \end{array} \right) \left( \begin{array}{c c c c} c _ {1 0} & c _ {2 0} & \dots & c _ {n 0} \\ c _ {1 1} & c _ {2 1} & \dots & c _ {n 1} \\ \vdots & \vdots & & \vdots \\ c _ {1, n - 2} & c _ {2, n - 2} & \dots & c _ {n, n - 2} \end{array} \right).
$$

注意到上式右边的两个矩阵分别是 $n \times (n - 1)$ 和 $(n - 1) \times n$ 矩阵, 故由 Cauchy-Binet 公式马上得到左边矩阵的行列式值等于零. □

例 2.59 设 A 是 $m \times n$ 实矩阵, 求证: 矩阵 $AA'$ 的任一主子式都非负.

证明 若 $r \leq n$ , 则由 Cauchy-Binet 公式可得

$$
\boldsymbol {A} \boldsymbol {A} ^ {\prime} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right) = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {r} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right) ^ {2} \geq 0;
$$

若 $r > n$ ，则 $\mathbf{AA}'$ 的任一 $r$ 阶主子式都等于零，结论也成立. □

例 2.60 设 A 是 n 阶实方阵且 $AA' = I_{n}$ . 求证: 若 $1 \leq i_{1} < i_{2} < \cdots < i_{r} \leq n$ , 则

$$
\sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {r} \leq n} A \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right) ^ {2} = 1.
$$

证明 类似例 2.59, 对等式 $AA' = I_n$ 两边同时求 $r$ 阶主子式即得结论. $\square$ 

例 2.61 设 A, B 分别是 $m \times n$ , $n \times m$ 矩阵, 求证: AB 和 BA 的 r 阶主子式之和相等, 其中 $1 \leq r \leq \min\{m, n\}$ .

证明 由 Cauchy-Binet 公式可得

$$
\begin{array}{r l} & {\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq m} A B \left( \begin{array}{l l l l} i _ {1} & i _ {2} & \dots & i _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right)} \\ {=} & {\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq m} \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {r} \leq n} A \left( \begin{array}{l l l l} i _ {1} & i _ {2} & \dots & i _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right) B \left( \begin{array}{l l l l} j _ {1} & j _ {2} & \dots & j _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right)} \\ {=} & {\sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {r} \leq n} \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq m} B \left( \begin{array}{l l l l} j _ {1} & j _ {2} & \dots & j _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right) A \left( \begin{array}{l l l l} i _ {1} & i _ {2} & \dots & i _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right)} \\ {=} & {\sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {r} \leq n} B A \left( \begin{array}{l l l l} j _ {1} & j _ {2} & \dots & j _ {r} \\ j _ {1} & j _ {2} & \dots & j _ {r} \end{array} \right). \square} \end{array}
$$

注 当 r=1 时, 本命题就是 $\mathrm{tr}(AB)=\mathrm{tr}(BA)$ .

下面介绍 Cauchy-Binet 公式的两个重要应用, 它们分别是著名的 Lagrange 恒等式和 Cauchy-Schwarz 不等式. 这两个结论也可以用其他方法证明, 但用矩阵方法显得非常简洁.

例 2.62 证明 Lagrange 恒等式 $(n \geq 2)$ :

$$
\left(\sum_ {i = 1} ^ {n} a _ {i} ^ {2}\right) \left(\sum_ {i = 1} ^ {n} b _ {i} ^ {2}\right) - \left(\sum_ {i = 1} ^ {n} a _ {i} b _ {i}\right) ^ {2} = \sum_ {1 \leq i <   j \leq n} (a _ {i} b _ {j} - a _ {j} b _ {i}) ^ {2}.
$$

证明 左边的式子等于

$$
\left| \begin{array}{c c} \sum_ {i = 1} ^ {n} a _ {i} ^ {2} & \sum_ {i = 1} ^ {n} a _ {i} b _ {i} \\ \sum_ {i = 1} ^ {n} a _ {i} b _ {i} & \sum_ {i = 1} ^ {n} b _ {i} ^ {2} \end{array} \right|,
$$

这个行列式对应的矩阵可化为

$$
\left( \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ b _ {1} & b _ {2} & \dots & b _ {n} \end{array} \right) \left( \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \\ \vdots & \vdots \\ a _ {n} & b _ {n} \end{array} \right).
$$

由Cauchy-Binet公式可得

$$
\left| \begin{array}{c c} \sum_ {i = 1} ^ {n} a _ {i} ^ {2} & \sum_ {i = 1} ^ {n} a _ {i} b _ {i} \\ \sum_ {i = 1} ^ {n} a _ {i} b _ {i} & \sum_ {i = 1} ^ {n} b _ {i} ^ {2} \end{array} \right| = \sum_ {1 \leq i <   j \leq n} \left| \begin{array}{c c} a _ {i} & a _ {j} \\ b _ {i} & b _ {j} \end{array} \right| \left| \begin{array}{c c} a _ {i} & b _ {i} \\ a _ {j} & b _ {j} \end{array} \right| = \sum_ {1 \leq i <   j \leq n} (a _ {i} b _ {j} - a _ {j} b _ {i}) ^ {2}. \square
$$

例 2.63 设 $a_{i}, b_{i}$ 都是实数, 证明 Cauchy-Schwarz 不等式:

$$
\left(\sum_ {i = 1} ^ {n} a _ {i} ^ {2}\right) \left(\sum_ {i = 1} ^ {n} b _ {i} ^ {2}\right) \geq \left(\sum_ {i = 1} ^ {n} a _ {i} b _ {i}\right) ^ {2}.
$$

证明 由上例, 恒等式右边总非负, 即得结论. □

例 2.64 设 A, B 都是 $m \times n$ 实矩阵, 求证:

$$
\left| A A ^ {\prime} \right| \left| B B ^ {\prime} \right| \geq \left| A B ^ {\prime} \right| ^ {2}.
$$

证明 若 $m > n$ , 则 $|\mathbf{AA}'| = |\mathbf{BB}'| = |\mathbf{AB}'| = 0$ , 结论显然成立. 若 $m \leq n$ , 则由 Cauchy-Binet 公式可得

$$
\left| \boldsymbol {A} \boldsymbol {A} ^ {\prime} \right| = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {m} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ j _ {1} & j _ {2} & \dots & j _ {m} \end{array} \right) ^ {2};
$$

$$
| \boldsymbol {B} \boldsymbol {B} ^ {\prime} | = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {m} \leq n} \boldsymbol {B} \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ j _ {1} & j _ {2} & \dots & j _ {m} \end{array} \right) ^ {2};
$$

$$
| \boldsymbol {A} \boldsymbol {B} ^ {\prime} | = \sum_ {1 \leq j _ {1} <   j _ {2} <   \dots <   j _ {m} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ j _ {1} & j _ {2} & \dots & j _ {m} \end{array} \right) \boldsymbol {B} \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ j _ {1} & j _ {2} & \dots & j _ {m} \end{array} \right),
$$

再由例 2.63 即得结论. □

## § 2.10 分块初等变换与降阶公式

分块初等变换与分块初等矩阵是处理分块矩阵问题的有力工具, 我们将会在后面的章节中陆续看到它们的各种应用. 在这一节我们主要向读者介绍分块初等变换在行列式的求值以及求逆阵中的应用.

例 2.65 设 A 是 n 阶可逆阵, $\alpha, \beta$ 是 n 维列向量, b 是常数, 现有分块矩阵

$$
\boldsymbol {Q} = \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {\alpha} \\ \boldsymbol {\beta^ {\prime}} & b \end{array} \right).
$$

求证: 矩阵 Q 是可逆阵的充要条件是 $b \neq \beta' A^{-1} \alpha$ .

证明 对矩阵 $Q$ 施以分块初等变换, 以 $-\beta' A^{-1}$ 左乘以第一分块行加到第二分块行上:

$$
Q = \left(\begin{array}{c c}A&\alpha\\\beta^ {\prime}&b\end{array}\right)\rightarrow \left(\begin{array}{c c}A&\alpha\\O&b - \beta^ {\prime} A ^ {- 1} \alpha\end{array}\right).
$$

由于第三类分块初等变换不改变行列式的值, 故 $|\mathbf{Q}| = |\mathbf{A}| (b - \beta' \mathbf{A}^{-1} \alpha)$ . 又 $|\mathbf{A}| \neq 0$ , 于是 $|\mathbf{Q}| \neq 0$ 当且仅当 $b \neq \beta' \mathbf{A}^{-1} \alpha$ . □

例 2.66 (行列式的降阶公式) 设 A 是 m 阶矩阵, D 是 n 阶矩阵, B 是 $m \times n$ 矩阵, C 是 $n \times m$ 矩阵, 证明:

(1) 若 $\pmb{A}$ 可逆, 则

$$
\left| \begin{array}{c c} A & B \\ C & D \end{array} \right| = | A | | D - C A ^ {- 1} B |;
$$

(2) 若 $D$ 可逆, 则

$$
\left| \begin{array}{c c} A & B \\ C & D \end{array} \right| = | D | | A - B D ^ {- 1} C |;
$$

(3) 若 A, D 都可逆, 则

$$
| D | | A - B D ^ {- 1} C | = | A | | D - C A ^ {- 1} B |.
$$

证明 (1) 用第三类分块初等变换, 以 $-CA^{-1}$ 左乘以第一分块行加到第二分块行上, 得到

$$
\left( \begin{array}{c c} A & B \\ C & D \end{array} \right) \to \left( \begin{array}{c c} A & B \\ O & D - C A ^ {- 1} B \end{array} \right).
$$

由于第三类分块初等变换不改变行列式的值, 故结论即得. (2) 同理可证. (3) 是 (1) 和 (2) 的推论. $\square$ 

注 (1) 例如当 $m > n$ 时, 利用降阶公式可以把高阶行列式 $|A - BD^{-1}C|$ 的计算化为低阶行列式 $|D - CA^{-1}B|$ 的计算.

(2) 降阶公式的用法: 根据元素的特点, 将复杂矩阵 $M$ 进行分解 $M = A - BD^{-1}C$ , 其中 $A, D$ 可取为简单矩阵, 例如非异对角阵等. 这个过程等价于从矩阵 $M$ 反向构造高阶矩阵 $\left( \begin{array}{ll} A & B \\ C & D \end{array} \right)$ , 然后就可以利用降阶公式计算行列式了.

(3) 如果用 -B 替代 B, 则可得等式: $|D||A + BD^{-1}C| = |A||D + CA^{-1}B|$ , 这是降阶公式的另一种形式.

例 2.67 求下列矩阵的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} ^ {2} & a _ {1} a _ {2} + 1 & \dots & a _ {1} a _ {n} + 1 \\ a _ {2} a _ {1} + 1 & a _ {2} ^ {2} & \dots & a _ {2} a _ {n} + 1 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} + 1 & a _ {n} a _ {2} + 1 & \dots & a _ {n} ^ {2} \end{array} \right).
$$

解 将 $\pmb{A}$ 化为

$$
\boldsymbol {A} = - \boldsymbol {I} _ {n} + \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right) \boldsymbol {I} _ {2} ^ {- 1} \left( \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ 1 & 1 & \dots & 1 \end{array} \right).
$$

由降阶公式得到

$$
\begin{array}{r c l} | \boldsymbol {A} | & = & | \boldsymbol {I} _ {2} | ^ {- 1} | - \boldsymbol {I} _ {n} | \\ & & \left| \boldsymbol {I} _ {2} + \left( \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ 1 & 1 & \dots & 1 \end{array} \right) (- \boldsymbol {I} _ {n}) ^ {- 1} \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right) \right| \\ & = & (- 1) ^ {n} \left| \boldsymbol {I} _ {2} - \left( \begin{array}{c c} \sum_ {i = 1} ^ {n} a _ {i} ^ {2} & \sum_ {i = 1} ^ {n} a _ {i} \\ \sum_ {i = 1} ^ {n} a _ {i} & n \end{array} \right) \right| \\ & = & (- 1) ^ {n} \left((1 - n) (1 - \sum_ {i = 1} ^ {n} a _ {i} ^ {2}) - (\sum_ {i = 1} ^ {n} a _ {i}) ^ {2}\right). \square \end{array}
$$

例 2.68 求下列矩阵的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 2 & 3 & \dots & n \\ 1 & 0 & 3 & \dots & n \\ 1 & 2 & 0 & \dots & n \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 2 & 3 & \dots & 0 \end{array} \right).
$$

解 将 $\pmb{A}$ 化为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} - 1 & 0 & \dots & 0 \\ 0 & - 2 & \dots & 0 \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & - n \end{array} \right) + \left( \begin{array}{c} 1 \\ 1 \\ \vdots \\ 1 \end{array} \right) (1, 2, \dots , n),
$$

利用降阶公式容易求得 $\left|A\right|=(-1)^{n}n!(1-n)$ . □

例 1.33 求下列矩阵的行列式的值, 其中 $a_{i} \neq 0 (1 \leq i \leq n)$ :

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 0 & a _ {1} + a _ {2} & \dots & a _ {1} + a _ {n} \\ a _ {2} + a _ {1} & 0 & \dots & a _ {2} + a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} + a _ {1} & a _ {n} + a _ {2} & \dots & 0 \end{array} \right).
$$

解法3 将 $\pmb{A}$ 化为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} - 2 a _ {1} & & & \\ & - 2 a _ {2} & & \\ & & \ddots & \\ & & & - 2 a _ {n} \end{array} \right) + \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right) \boldsymbol {I} _ {2} ^ {- 1} \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ a _ {1} & a _ {2} & \dots & a _ {n} \end{array} \right).
$$

由降阶公式得到

$$
\begin{array}{r l} | \boldsymbol {A} | & = | \boldsymbol {I} _ {2} | ^ {- 1} \left| \begin{array}{c c c c} - 2 a _ {1} & & & \\ & - 2 a _ {2} & & \\ & & \ddots & \\ & & & - 2 a _ {n} \end{array} \right| \\ & \cdot \left| \boldsymbol {I} _ {2} + \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ a _ {1} & a _ {2} & \dots & a _ {n} \end{array} \right) \left( \begin{array}{c c c c} - 2 a _ {1} & & & \\ & - 2 a _ {2} & & \\ & & \ddots & \\ & & & - 2 a _ {n} \end{array} \right) ^ {- 1} \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right) \right| \\ & = (- 2) ^ {n} \prod_ {i = 1} ^ {n} a _ {i} \left| \begin{array}{c c} 1 - \frac {n}{2} & - \frac {1}{2} \sum_ {i = 1} ^ {n} \frac {1}{a _ {i}} \\ - \frac {1}{2} \sum_ {i = 1} ^ {n} a _ {i} & 1 - \frac {n}{2} \end{array} \right| \\ & = (- 2) ^ {n - 2} \prod_ {i = 1} ^ {n} a _ {i} \left((n - 2) ^ {2} - \left(\sum_ {i = 1} ^ {n} a _ {i}\right) \left(\sum_ {i = 1} ^ {n} \frac {1}{a _ {i}}\right)\right). \square \end{array}
$$

例 2.69 设 A, B 是 n 阶矩阵, 求证:

$$
\left| \begin{array}{c c} \boldsymbol {A} & \boldsymbol {B} \\ \boldsymbol {B} & \boldsymbol {A} \end{array} \right| = | \boldsymbol {A} + \boldsymbol {B} | | \boldsymbol {A} - \boldsymbol {B} |.
$$

证明 将分块矩阵的第二行加到第一行上, 再将第二列减去第一列, 可得

$$
\left( \begin{array}{c c} A & B \\ B & A \end{array} \right) \to \left( \begin{array}{c c} A + B & A + B \\ B & A \end{array} \right) \to \left( \begin{array}{c c} A + B & O \\ B & A - B \end{array} \right).
$$

第三类分块初等变换不改变行列式的值, 因此可得

$$
\left| \begin{array}{c c} A & B \\ B & A \end{array} \right| = \left| \begin{array}{c c} A + B & O \\ B & A - B \end{array} \right| = | A + B | | A - B |. \square
$$

例 1.36 计算:

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} x & y & z & w \\ y & x & w & z \\ z & w & x & y \\ w & z & y & x \end{array} \right|.
$$

解法2 令

$$
\boldsymbol {B} = \left( \begin{array}{c c} x & y \\ y & x \end{array} \right), \quad \boldsymbol {C} = \left( \begin{array}{c c} z & w \\ w & z \end{array} \right),
$$

则 $|\mathbf{A}| = \left|\begin{array}{cc}B & C\\ C & B\end{array}\right|$ .由例2.69可得

$$
\begin{array}{r c l} | \boldsymbol {A} | & = & | \boldsymbol {B} + \boldsymbol {C} | | \boldsymbol {B} - \boldsymbol {C} | = \left| \begin{array}{l l} x + z & y + w \\ y + w & x + z \end{array} \right| \left| \begin{array}{l l} x - z & y - w \\ y - w & x - z \end{array} \right| \\ & = & (x + y + z + w) (x + z - y - w) (x + y - z - w) (x + w - y - z). \square \end{array}
$$

例 2.70 设 A, B, C, D 都是 n 阶矩阵, 求证:

$$
| \boldsymbol {M} | = \left| \begin{array}{c c c c} \boldsymbol {A} & \boldsymbol {B} & \boldsymbol {C} & \boldsymbol {D} \\ \boldsymbol {B} & \boldsymbol {A} & \boldsymbol {D} & \boldsymbol {C} \\ \boldsymbol {C} & \boldsymbol {D} & \boldsymbol {A} & \boldsymbol {B} \\ \boldsymbol {D} & \boldsymbol {C} & \boldsymbol {B} & \boldsymbol {A} \end{array} \right| = | \boldsymbol {A} + \boldsymbol {B} + \boldsymbol {C} + \boldsymbol {D} | | \boldsymbol {A} + \boldsymbol {B} - \boldsymbol {C} - \boldsymbol {D} | | \boldsymbol {A} - \boldsymbol {B} + \boldsymbol {C} - \boldsymbol {D} | | \boldsymbol {A} - \boldsymbol {B} - \boldsymbol {C} + \boldsymbol {D} |.
$$

证明 反复利用例 2.69 的结论可得

$$
\begin{array}{r c l} | M | & = & \left| \left( \begin{array}{l l} A & B \\ B & A \end{array} \right) + \left( \begin{array}{l l} C & D \\ D & C \end{array} \right) \right| \cdot \left| \left( \begin{array}{l l} A & B \\ B & A \end{array} \right) - \left( \begin{array}{l l} C & D \\ D & C \end{array} \right) \right| \\ & = & \left| \begin{array}{l l} A + C & B + D \\ B + D & A + C \end{array} \right| \cdot \left| \begin{array}{l l} A - C & B - D \\ B - D & A - C \end{array} \right| \\ & = & | A + B + C + D | | A - B + C - D | | A + B - C - D | | A - B - C + D |. \square \end{array}
$$

例 2.71 设 A, B 是 n 阶复矩阵, 求证:

$$
\left| \begin{array}{c c} \boldsymbol {A} & - \boldsymbol {B} \\ \boldsymbol {B} & \boldsymbol {A} \end{array} \right| = | \boldsymbol {A} + \mathrm{i} \boldsymbol {B} | | \boldsymbol {A} - \mathrm{i} \boldsymbol {B} |.
$$

证明 将分块矩阵的第二行乘以 i 加到第一行上, 再将第一列乘以 -i 加到第二列上, 可得

$$
\left(\begin{array}{c c}A&- B\\B&A\end{array}\right)\rightarrow \left(\begin{array}{c c}A + \mathrm{i} B&\mathrm{i} A - B\\B&A\end{array}\right)\rightarrow \left(\begin{array}{c c}A + \mathrm{i} B&O\\B&A - \mathrm{i} B\end{array}\right).
$$

第三类分块初等变换不改变行列式的值, 因此可得

$$
\left| \begin{array}{c c} A & - B \\ B & A \end{array} \right| = \left| \begin{array}{c c} A + \mathrm{i} B & O \\ B & A - \mathrm{i} B \end{array} \right| = | A + \mathrm{i} B | | A - \mathrm{i} B |. \square
$$

例 2.72 设 A, B 是 n 阶矩阵且 AB = BA, 求证:

$$
\left| \begin{array}{c c} A & - B \\ B & A \end{array} \right| = | A ^ {2} + B ^ {2} |.
$$

证明 由例2.71的结论可得

$$
\begin{array}{r l} \left| \begin{array}{c c} A & - B \\ B & A \end{array} \right| & = | A + \mathrm{i} B | \cdot | A - \mathrm{i} B | = | (A + \mathrm{i} B) (A - \mathrm{i} B) | \\ & = | A ^ {2} + B ^ {2} - \mathrm{i} (A B - B A) | = | A ^ {2} + B ^ {2} |. \square \end{array}
$$

例 2.73 设 A, B 是 n 阶实矩阵, 求证: $\begin{vmatrix} A & -B \\ B & A \end{vmatrix} \geq 0$ .

证明 注意到 A, B 都是实矩阵, 故 $\overline{|A + iB|} = |\overline{A + iB}| = |A - iB|$ , 再由例 2.71 的结论可得

$$
\left| \begin{array}{c c} A & - B \\ B & A \end{array} \right| = | A + \mathrm{i} B | \cdot | A - \mathrm{i} B | = | A + \mathrm{i} B | \cdot \overline {{| A + \mathrm{i} B |}} \geq 0. \square
$$

例 2.55 求下列矩阵的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} x & - y & - z & - w \\ y & x & - w & z \\ z & w & x & - y \\ w & - z & y & x \end{array} \right).
$$

解法2 令

$$
\boldsymbol {B} = \left( \begin{array}{c c} x & - y \\ y & x \end{array} \right), \quad \boldsymbol {C} = \left( \begin{array}{c c} z & w \\ w & - z \end{array} \right),
$$

则 $|\mathbf{A}| = \left| \begin{array}{cc} \mathbf{B} & -\mathbf{C} \\ \mathbf{C} & \mathbf{B} \end{array} \right|$ . 由例2.71可得

$$
\begin{array}{r c l} | \boldsymbol {A} | & = & | \boldsymbol {B} + \mathrm{i} \boldsymbol {C} | | \boldsymbol {B} - \mathrm{i} \boldsymbol {C} | = \left| \begin{array}{l l} x + \mathrm{i} z & - y + \mathrm{i} w \\ y + \mathrm{i} w & x - \mathrm{i} z \end{array} \right| \left| \begin{array}{l l} x - \mathrm{i} z & - y - \mathrm{i} w \\ y - \mathrm{i} w & x + \mathrm{i} z \end{array} \right| \\ & = & (x ^ {2} + y ^ {2} + z ^ {2} + w ^ {2}) ^ {2}. \square \end{array}
$$

例 2.74 已知 A 和 D 是可逆阵, 求下列分块矩阵的逆阵

$$
\left( \begin{array}{c c} A & B \\ O & D \end{array} \right).
$$

解 设 A, D 分别是 m, n 阶矩阵. 对下列分块矩阵进行分块初等变换, 先将第二分块行左乘以 $-BD^{-1}$ 加到第一分块行上去:

$$
\left(\begin{array}{c c c c}A&B&I _ {m}&O\\O&D&O&I _ {n}\end{array}\right)\rightarrow \left(\begin{array}{c c c c}A&O&I _ {m}&- B D ^ {- 1}\\O&D&O&I _ {n}\end{array}\right),
$$

再用 $A^{-1}$ 和 $D^{-1}$ 分别左乘以第一分块行及第二分块行得到:

$$
\left( \begin{array}{c c c c} I _ {m} & O & A ^ {- 1} & - A ^ {- 1} B D ^ {- 1} \\ O & I _ {n} & O & D ^ {- 1} \end{array} \right).
$$

因此原矩阵的逆阵为

$$
\left( \begin{array}{c c} A ^ {- 1} & - A ^ {- 1} B D ^ {- 1} \\ O & D ^ {- 1} \end{array} \right). \square
$$

## § 2.11 摄动法及其应用

摄动法是矩阵理论中的常用方法, 它利用连续函数的性质将一般矩阵问题的讨论转化为对非异阵的讨论. 在本节中, 我们将详细阐述摄动法的原理及其在伴随矩阵性质的证明和行列式求值中的应用. 我们将会在后面的章节中陆续看到摄动法的进一步应用.

首先, 我们来证明一个简单的命题, 它告诉我们对任意的 $n$ 阶矩阵 $\mathbf{A}$ , 经过微小的一维摄动之后, $t\mathbf{I}_n + \mathbf{A}$ 总能成为一个非异阵.

例 2.75 设 A 是一个 n 阶方阵, 求证: 存在一个正数 a, 使得对任意的 0 < t < a, 矩阵 $tI_{n} + A$ 都是非异阵.

证明 通过简单的计算可得

$$
\left| t \boldsymbol {I} _ {n} + \boldsymbol {A} \right| = t ^ {n} + a _ {1} t ^ {n - 1} + \dots + a _ {n - 1} t + a _ {n},
$$

这是一个关于未定元 $t$ 的 $n$ 次多项式. 由例1.30可知上述多项式至多只有 $n$ 个不同的根. 若上述多项式的根都是零, 则不妨取 $a = 1$ ; 若上述多项式有非零根, 则令 $a$ 为$|tI_{n}+A|$ 所有非零根的模长的最小值. 因此对任意的 $0<t_{0}<a, t_{0}$ 都不是 $|tI_{n}+A|$ 的根, 即 $|t_{0}I_{n}+A|\neq0$ , 从而 $t_{0}I_{n}+A$ 是非异阵. □

## 摄动法的原理

(1) 证明矩阵问题对非异阵成立.

(2) 对任意的 $n$ 阶矩阵 $\mathbf{A}$ , 由上例可知, 存在一列有理数 $t_k \to 0$ , 使得 $t_k I_n + A$ 都是非异阵. 验证 $t_k I_n + A$ 仍满足矩阵问题的条件, 从而该问题对 $t_k I_n + A$ 成立.

(3) 若矩阵问题关于 $t_k$ 连续, 则可取极限令 $t_k \to 0$ , 从而得到该问题对一般的矩阵 $\mathbf{A}$ 也成立.

注 (1) 矩阵问题对非异阵成立以及矩阵问题关于 $t_k$ 连续, 这两个要求缺一不可, 否则将不能使用摄动法进行证明. 请参考例7.72及其注.

(2) 验证摄动矩阵仍然满足矩阵问题的条件是必要的. 例如, 若矩阵问题中有 $AB = -BA$ 这一条件, 但 $(t_k I_n + A) B \neq -B (t_k I_n + A)$ , 因此便不能使用摄动法.

(3) 根据实际问题的需要, 也可以使用其他非异阵来替代 $I_{n}$ 对 $\pmb{A}$ 进行摄动.

首先, 我们给出伴随矩阵的几个基本性质的摄动法证明.

例 2.36 设 A, B 为 n 阶矩阵, 求证: $(AB)^{*} = B^{*}A^{*}$ .

证法2 若 $\pmb{A},\pmb{B}$ 均为非异阵, 则 $A^{*} = |A|A^{-1}, B^{*} = |B|B^{-1}$ , 从而

$$
(A B) ^ {*} = | A B | (A B) ^ {- 1} = | A | | B | (B ^ {- 1} A ^ {- 1}) = (| B | B ^ {- 1}) (| A | A ^ {- 1}) = B ^ {*} A ^ {*}.
$$

对于一般的方阵 A, B, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{n} + A$ 与 $t_{k}I_{n} + B$ 均为非异阵. 由非异阵情形的证明可得

$$
\left(\left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}\right) \left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B}\right)\right) ^ {*} = \left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B}\right) ^ {*} \left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}\right) ^ {*}.
$$

注意到上式两边均为 $n$ 阶方阵, 其元素都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $(AB)^* = B^*A^*$ 成立. $\square$ 

例 2.38 设 A 为 n 阶矩阵, 求证: $|A^{*}| = |A|^{n-1}$ .

证法 2 若 A 是非异阵, 例 2.38 的证法 1 已经证明了 $\left|A^{*}\right|=\left|A\right|^{n-1}$ . 对于一般的方阵 A, 可取到一列有理数 $t_{k}\rightarrow0$ , 使得 $t_{k}I_{n}+A$ 为非异阵. 由非异阵情形的证明可得

$$
\left| \left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}\right) ^ {*} \right| = \left| t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A} \right| ^ {n - 1}.
$$

注意到上式两边均为行列式的幂次, 其值都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $|\mathbf{A}^*| = |\mathbf{A}|^{n-1}$ 成立. $\square$ 

例 2.39 设 A 为 $n(n>2)$ 阶矩阵, 求证: $(A^{*})^{*}=|A|^{n-2}A$ .

证法2 若 $\pmb{A}$ 是非异阵, 例2.39的证法1已经证明了 $(\pmb{A}^{*})^{*} = |\pmb{A}|^{n - 2}\pmb{A}$ . 对于一般的方阵 $\pmb{A}$ , 可取到一列有理数 $t_k \to 0$ , 使得 $t_k I_n + A$ 为非异阵. 由非异阵情形的证明可得

$$
\left(\left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}\right) ^ {*}\right) ^ {*} = \left| t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A} \right| ^ {n - 2} \left(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}\right).
$$

注意到上式两边均为 $n$ 阶方阵, 其元素都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $(A^*)^* = |A|^{n-2} A$ 成立. $\square$ 

例 2.40 设 A 为 m 阶矩阵, B 为 n 阶矩阵, 求分块对角阵 C 的伴随矩阵:

$$
C = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right).
$$

解法 2 若 A, B 均为非异阵, 则

$$
\begin{array}{r l} & C \left( \begin{array}{c c} | B | A ^ {*} & O \\ O & | A | B ^ {*} \end{array} \right) = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \left( \begin{array}{c c} | B | A ^ {*} & O \\ O & | A | B ^ {*} \end{array} \right) \\ = & \left( \begin{array}{c c} | B | A A ^ {*} & O \\ O & | A | B B ^ {*} \end{array} \right) = \left( \begin{array}{c c} | A | | B | I _ {m} & O \\ O & | A | | B | I _ {n} \end{array} \right) \\ = & | C | I _ {m + n} = C C ^ {*}, \end{array}
$$

注意到 C 非异, 故由上式可得

$$
C ^ {*} = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) ^ {*} = \left( \begin{array}{c c} | B | A ^ {*} & O \\ O & | A | B ^ {*} \end{array} \right).
$$

对于一般的方阵 A, B, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{m} + A$ 与 $t_{k}I_{n} + B$ 均为非异阵. 由非异阵情形的证明可得

$$
\left( \begin{array}{c c} t _ {k} \boldsymbol {I} _ {m} + \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {O} & t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B} \end{array} \right) ^ {*} = \left( \begin{array}{c c} | t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B} | (t _ {k} \boldsymbol {I} _ {m} + \boldsymbol {A}) ^ {*} & \boldsymbol {O} \\ \boldsymbol {O} & | t _ {k} \boldsymbol {I} _ {m} + \boldsymbol {A} | (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B}) ^ {*} \end{array} \right).
$$

注意到上式两边均为 $m+n$ 阶方阵, 其元素都是 $t_{k}$ 的多项式, 从而关于 $t_{k}$ 连续. 上式两边同时取极限, 令 $t_{k} \rightarrow 0$ , 即有 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}^{*} = \begin{pmatrix} |B|A^{*} & O \\ O & |A|B^{*} \end{pmatrix}$ 成立. □

下面两个例子显示了摄动法在行列式求值中的作用.

例 2.76 设 A, B, C, D 是 n 阶矩阵且 AC = CA, 求证:

$$
\left| \begin{array}{c c} A & B \\ C & D \end{array} \right| = | A D - C B |.
$$

证明 若 A 是非异阵, 则由降阶公式可得

$$
\left| \begin{array}{c c} A & B \\ C & D \end{array} \right| = | A | | D - C A ^ {- 1} B | = | A D - A C A ^ {- 1} B | = | A D - C B |.
$$

对于一般的方阵 A, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{n} + A$ 为非异阵, 并且条件 $(t_{k}I_{n} + A)C = C(t_{k}I_{n} + A)$ 仍然成立. 由非异阵情形的证明可得

$$
\left| \begin{array}{c c} t _ {k} I _ {n} + A & B \\ C & D \end{array} \right| = | (t _ {k} I _ {n} + A) D - C B |.
$$

注意到上式两边均为行列式, 其值都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $\left| \begin{array}{ll} A & B \\ C & D \end{array} \right| = |AD - CB|$ 成立. $\square$ 

注 例 2.76 也给出了例 2.72 的摄动法证明.

例 1.7 设 $|A| = |a_{ij}|$ 是一个 n 阶行列式, $A_{ij}$ 是它的第 $(i, j)$ 元素的代数余子式, 求证:

$$
\left| \begin{array}{c c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} & x _ {1} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ y _ {1} & y _ {2} & \dots & y _ {n} & z \end{array} \right| = z | \boldsymbol {A} | - \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} x _ {i} y _ {j}.
$$

证法 2 设 $\boldsymbol{x}=(x_{1},x_{2},\cdots,x_{n})^{\prime},\boldsymbol{y}=(y_{1},y_{2},\cdots,y_{n})^{\prime}$ . 若 A 是非异阵, 则由降阶公式可得

$$
\left| \begin{array}{c c} \boldsymbol {A} & \boldsymbol {x} \\ \boldsymbol {y} ^ {\prime} & z \end{array} \right| = | \boldsymbol {A} | (z - \boldsymbol {y} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {x}) = z | \boldsymbol {A} | - \boldsymbol {y} ^ {\prime} \boldsymbol {A} ^ {*} \boldsymbol {x}.
$$

对于一般的方阵 A, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{n} + A$ 为非异阵. 由非异阵情形的证明可得

$$
\left| \begin{array}{c c} t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A} & \boldsymbol {x} \\ \boldsymbol {y} ^ {\prime} & z \end{array} \right| = z | t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A} | - \boldsymbol {y} ^ {\prime} (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}) ^ {*} \boldsymbol {x}.
$$

注意到上式两边都是关于 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有

$$
\left| \begin{array}{c c} \boldsymbol {A} & \boldsymbol {x} \\ \boldsymbol {y} ^ {\prime} & z \end{array} \right| = z | \boldsymbol {A} | - \boldsymbol {y} ^ {\prime} \boldsymbol {A} ^ {*} \boldsymbol {x} = z | \boldsymbol {A} | - \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} x _ {i} y _ {j}. \square
$$

## § 2.12 基础训练

## 2.12.1 训练题

## 一、单选题

1. 设 A 是 $m \times k$ 矩阵, B 是 $k \times t$ 矩阵, 若 B 的第 j 列元素全为零, 则下列结论中正确的是 ( ). 
(A) AB 的第 j 行元素全等于零 (B) AB 的第 j 列元素全等于零
(C) BA 的第 j 行元素全等于零 (D) BA 的第 j 列元素全等于零

2. 设 A 是 n 阶矩阵, A 适合下列条件 ( ) 时, $I_{n}-A$ 必是可逆矩阵.
(A) $A^{n} = O$ (B) A 是可逆矩阵
(C) $|A| = 0$ (D) A 的主对角线上元素全为零

3. 设 A, B, C 均是 n 阶矩阵, 下列命题正确的是 ( ) .
(A) 若 A 是可逆矩阵, 则从 AB = AC 可推出 BA = CA
(B) 若 A 是可逆矩阵, 则必有 AB = BA
(C) 若 $A \neq O$ , 则从 AB = AC 可推出 B = C
(D) 若 $B \neq C$ , 则必有 $AB \neq AC$ 

4. 下列命题错误的是 ( ).
(A) 若干个初等矩阵的积必是可逆矩阵
(B) 可逆矩阵之和未必是可逆矩阵
(C) 两个初等矩阵的积仍是初等矩阵
(D) 可逆矩阵必是有限个初等矩阵的积

5. 下列关于同阶不可逆矩阵及可逆矩阵的命题正确的是 ( ) .
(A) 两个不可逆矩阵之和仍是不可逆矩阵
(B) 两个可逆矩阵之和仍是可逆矩阵
(C) 两个不可逆矩阵之积必是不可逆矩阵
(D) 一个不可逆矩阵与一个可逆矩阵之积必是可逆矩阵

6. 下列关于矩阵乘法交换性的结论中错误的是（）.

(A) 若 A 是可逆矩阵, 则 A 与 $A^{-1}$ 乘法可交换
(B) 可逆矩阵必与初等矩阵乘法可交换
(C) 任一 n 阶矩阵与 $cI_{n}$ 乘法可交换, 这里 c 是常数
(D) 初等矩阵与初等矩阵乘法未必可交换

7. 设 A 是可逆矩阵, 则 ( ) 成立.
(A) A 和任一同阶矩阵之积必是可逆矩阵
(B) 若 B 是同阶初等矩阵, 则 AB 的行列式不等于零
(C) 若 B 是同阶可逆矩阵, 则 $A + B$ 的行列式不等于零
(D) A 和任一常数之积仍是可逆矩阵

8. 设矩阵 A 经过有限次初等变换后得到矩阵 B，则结论正确的是 ( ). 
(A) 若 A 和 B 都是 n 阶方阵，则 $|A| = |B|$ (B) 若 A 和 B 都是 n 阶方阵，则 $|A|$ 和 $|B|$ 同时为零或同时不为零
(C) 若 A 是可逆矩阵, 则 B 未必是可逆矩阵
(D) A = B

9. 设 A 是 n 阶方阵, $A^{*}$ 是其伴随矩阵, 则结论错误的是 ( ). 
(A) 若 A 是可逆矩阵, 则 $A^{*}$ 也是可逆矩阵
(B) 若 A 是不可逆矩阵, 则 $A^{*}$ 也是不可逆矩阵
(C) 若 $|A^{*}| \neq 0$ , 则 A 是可逆矩阵
(D) $|AA^{*}| = |A|$ 

10. 下列矩阵中可以化为有限个初等矩阵之积的矩阵是 ( ).
(A) $\begin{pmatrix}1&2&3\\0&4&2\end{pmatrix}$ (B) $\begin{pmatrix}1&2&0\\0&-1&3\\0&0&2\end{pmatrix}$ (C) $\begin{pmatrix}0&1&0\\1&0&1\\1&0&1\end{pmatrix}$ (D) $\begin{pmatrix}-1&2&3\\0&-2&-1\\-3&2&7\end{pmatrix}$ 

11. 初等矩阵 ( ).  
(A) 都可逆 (B) 相加仍是初等矩阵  
(C) 行列式值都等于 1 (D) 相乘仍是初等矩阵

12. 设

$$
\boldsymbol {A} = \left( \begin{array}{c c c} a _ {1 1} & \dots & a _ {1 n} \\ \vdots & & \vdots \\ a _ {n 1} & \dots & a _ {n n} \end{array} \right)
$$

$$
\boldsymbol {B} = \left( \begin{array}{c c c} A _ {1 1} & \dots & A _ {1 n} \\ \vdots & & \vdots \\ A _ {n 1} & \dots & A _ {n n} \end{array} \right)
$$

其中 $A_{ij}$ 是 $a_{ij}$ 的代数余子式, 则 ( ). (A) $\pmb{A}$ 是 $\pmb{B}$ 的伴随 (B) $\pmb{B}$ 是 $\pmb{A}$ 的伴随 (C) $\pmb{B}$ 是 $A^{\prime}$ 的伴随 (D) 以上结论都不对

13. 设 A, B 为方阵, 分块对角矩阵 $C = \begin{pmatrix} A & O \\ O & B \end{pmatrix}$ , 则 $C^{*} = (\quad)$ .
(A) $\begin{pmatrix}A^{*}&O\\O&B^{*}\end{pmatrix}$ (B) $\begin{pmatrix}|A|A^{*}&O\\O&|B|B^{*}\end{pmatrix}$ (C) $\begin{pmatrix}|B|A^{*}&O\\O&|A|B^{*}\end{pmatrix}$ (D) $\begin{pmatrix}|A||B|A^{*}&O\\O&|A||B|B^{*}\end{pmatrix}$ 

14. 设 A 是 n 阶方阵, B 是对换 A 中两列所得之方阵, 若 $|A| \neq |B|$ , 则 ( ). 
(A) $|A|$ 可能为零
(B) $|A| \neq 0$ (C) $|A + B| \neq 0$ (D) $|A - B| \neq 0$ 

15. 设 A, B, $A + B$ 均为 n 阶可逆矩阵，则 $(A^{-1} + B^{-1})^{-1}$ 为 ( ) .
(A) $A + B$ (B) A - B

(C) $(A + B)^{-1}$ (D) $A(A + B)^{-1}B$ 

## 二、填空题

1. 矩阵 $\begin{pmatrix}1&a&0\\2&1&0\\1&3&1\end{pmatrix}$ 不是可逆矩阵, 则 a 的值等于().

2. 设 $n$ 为正整数, 则 $\begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}^n = \left( \begin{array}{c c c c} \end{array} \right)$ .

3. 设 A 和 B 是 n 阶矩阵, $|A|=2$ , $|B|=-3$ , 则 $|2A^{*}B^{-1}|=(\quad)$ .

4. 设 A 为三阶方阵, $A^{*}$ 为 A 的伴随阵, 又 $|A| = \frac{1}{2}$ , 则 $\left|(3A)^{-1} - 2A^{*}\right| = (\quad)$ .

5. 设 $A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ 0 & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \cdots & a_{nn} \end{pmatrix}$ 是上三角阵，则 A 是可逆矩阵的充要条件是（）.

6. 若分块矩阵 $M = \begin{pmatrix} A & O \\ B & C \end{pmatrix}$ 中的 $A$ 是可逆矩阵, $C$ 是不可逆矩阵, 则 $M$ 是不是可逆矩阵 ( )?

7. 设 $k$ 是正整数, 则 $\left( \begin{array}{cc}\cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{array} \right)^k = \left( \begin{array}{c} \\ \end{array} \right)$ .

8. 设 $a_{i} \neq 0 (1 \leq i \leq n)$ ，则 $\left(\begin{array}{cccc}0 & a_{1} & 0 & \cdots & 0 \\ 0 & 0 & a_{2} & \cdots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \cdots & a_{n-1} \\ a_{n} & 0 & 0 & \cdots & 0\end{array}\right)^{-1} = \left(\begin{array}{ccccc} & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ & & & & \\ \end{array}\right)$ .

9. 设 A, B 都是可逆矩阵，则 $\begin{pmatrix} O & A \\ B & O \end{pmatrix}^{-1} = \left(\quad\right)$ .

10. 设 $A = \text{diag}\{A_{1}, A_{2}, \cdots, A_{k}\}$ 是分块对角矩阵，每个 $A_{i}$ 都是方阵，则 $|A| = (\quad)$ .

11. $\begin{pmatrix}1&a&0\\0&1&a\\0&0&1\end{pmatrix}^{k}=\left(\quad\right)$ . 

12. 和矩阵 $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 乘法可交换的所有矩阵为 $\left(\quad\right)$ .

13. 矩阵方程 $\begin{pmatrix}1 & 1 \\ 0 & 1\end{pmatrix} X = \begin{pmatrix}2 & 1 \\ 1 & -1\end{pmatrix}$ 的解 $X = \left(\quad\right)$ .

14. 和任意一个 $n$ 阶对角矩阵乘法可交换的矩阵为（ ）

15. 设 A, B 均为可逆矩阵, 则 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}^{-1} = \begin{pmatrix} \end{pmatrix}$ .

## 三、解答题

1. 求证: 不存在 n 阶奇异矩阵 A, 适合条件 $A^{2} + A + I_{n} = O$ .

2. 设 A 是 n 阶矩阵, 且 $A^{2} = A$ , 求证: $I_{n} - 2A$ 是可逆矩阵.

3. 若 $\pmb{A}$ 是 $n$ 阶矩阵, 且 $2\pmb{A}(\pmb{A} - \pmb{I}_n) = \pmb{A}^3$ , 求证: $\pmb{I}_n - \pmb{A}$ 可逆.

4. 设 A 为 n 阶幂零矩阵, B 为 n 阶矩阵, 使得 $AB + BA = B$ , 求证: B = O.

5. 求矩阵 A 的逆矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} 1 & a & a ^ {2} & a ^ {3} & \dots & a ^ {n} \\ 0 & 1 & a & a ^ {2} & \dots & a ^ {n - 1} \\ 0 & 0 & 1 & a & \dots & a ^ {n - 2} \\ \vdots & \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & 0 & \dots & 1 \end{array} \right).
$$

6. 求下列矩阵的逆矩阵 $(a_{n} \neq 0)$ :

$$
\boldsymbol {F} = \left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & - a _ {n} \\ 1 & 0 & \dots & 0 & - a _ {n - 1} \\ 0 & 1 & \dots & 0 & - a _ {n - 2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & - a _ {1} \end{array} \right).
$$

7. 设 $s_{k}=x_{1}^{k}+x_{2}^{k}+\cdots+x_{n}^{k}(k\geq1)$ , $s_{0}=n$ , 计算矩阵 A 的行列式的值:

$$
A = \left( \begin{array}{c c c c c} s _ {0} & s _ {1} & \dots & s _ {n - 1} & 1 \\ s _ {1} & s _ {2} & \dots & s _ {n} & x \\ \vdots & \vdots & & \vdots & \vdots \\ s _ {n} & s _ {n + 1} & \dots & s _ {2 n - 1} & x ^ {n} \end{array} \right).
$$

8. 计算矩阵 A 的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 + a _ {1} ^ {2} & a _ {1} a _ {2} & \dots & a _ {1} a _ {n} \\ a _ {2} a _ {1} & 1 + a _ {2} ^ {2} & \dots & a _ {2} a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} & a _ {n} a _ {2} & \dots & 1 + a _ {n} ^ {2} \end{array} \right).
$$

9. 计算矩阵 A 的行列式的值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} - b _ {1} & a _ {1} - b _ {2} & \dots & a _ {1} - b _ {n} \\ a _ {2} - b _ {1} & a _ {2} - b _ {2} & \dots & a _ {2} - b _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n} - b _ {1} & a _ {n} - b _ {2} & \dots & a _ {n} - b _ {n} \end{array} \right).
$$

10. 若 $n$ 阶实方阵 $\mathbf{A}$ 满足 $AA' = I_n$ , 则称为正交矩阵. 证明: 不存在 $n$ 阶正交矩阵 $\mathbf{A}, \mathbf{B}$ 满足 $A^2 = cAB + B^2$ , 其中 $c$ 是非零常数.

11. 设 A, B 为 n 阶实对称阵, 证明: $\mathrm{tr}\left((AB)^{2}\right) \leq \mathrm{tr}(A^{2}B^{2})$ , 并求等号成立的充要条件.

12. 设 A, B 为 n 阶方阵, 满足 AB = BA, 证明: $AB^{*} = B^{*}A$ .

13. 设 b 为非零常数, 下列形状的矩阵称为 b-循环矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ b a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ b a _ {n - 1} & b a _ {n} & a _ {1} & \dots & a _ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ b a _ {2} & b a _ {3} & b a _ {4} & \dots & a _ {1} \end{array} \right).
$$

(1) 证明: 同阶 $b$ -循环矩阵的乘积仍然是 $b$ -循环矩阵;

(2) 求上述 b- 循环矩阵 A 的行列式的值.

14. 设 $n$ 阶矩阵 $\mathbf{A}$ 的每一行、每一列的元素之和都为零, 证明: $\mathbf{A}$ 的每个元素的代数余子式都相等.

15. 设 $A = (a_{ij})$ 为 $n$ 阶方阵, 定义函数 $f(A) = \sum_{i,j=1}^{n} a_{ij}^2$ . 设 $P$ 为 $n$ 阶可逆矩阵, 使得对任意的 $n$ 阶方阵 $A$ 成立: $f(PAP^{-1}) = f(A)$ . 证明: 存在非零常数 $c$ , 使得 $P' P = cI_n$ .

## 2.12.2 训练题答案

## 一、单选题

1. 应选择 (B). 由矩阵乘法定义即得.

2. 应选择 (A). 因为当 $A^{n}=O$ 时, $I_{n}=I_{n}-A^{n}=(I_{n}-A)(I_{n}+A+A^{2}+\cdots+A^{n-1})$ .

3. 应选择 (A). 由 A 可逆, 从 AB = AC 可得 B = C, 故 BA = CA.

4. 应选择 (C). 初等矩阵之积未必是初等矩阵.

5. 应选择 (C).

6. 应选择 (B).

7. 应选择 (B). 初等变换不改变矩阵的非异性.

8. 应选择 (B).

9. 应选择 (D). 由 $AA^{*} = |A|I_{n}$ 可得 $|AA^{*}| = |A|^{n}$ .

10. 应选择 (B). 显然 (B) 中矩阵可逆, 可逆矩阵可表示为若干个初等矩阵之积.

11. 应选择 (A).

12. 应选择 (C).

13. 应选择 (C).

14. 应选择 (B).

15. 应选择 (D). $(A^{-1} + B^{-1})A(A + B)^{-1}B = B^{-1}(B + A)(A + B)^{-1}B = I_n$ .

## 二、填空题

1. 该矩阵的行列式为零, 求得 $a = \frac{1}{2}$ .

2. 经计算后结果为 $\begin{pmatrix}1 & n & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 2^{n} & 0 \\ 0 & 0 & 0 & 3^{n}\end{pmatrix}$ .

3. 由 $AA^{*} = |A|I_{n}$ , 得 $|AA^{*}| = 2^{n}, |A^{*}| = 2^{n-1}$ , 故

$$
\left| 2 \boldsymbol {A} ^ {*} \boldsymbol {B} ^ {- 1} \right| = 2 ^ {n} \cdot 2 ^ {n - 1} \cdot \left(- \frac {1}{3}\right) = - \frac {2 ^ {2 n - 1}}{3}.
$$

4. $A^{*} = |A|A^{-1} = \frac{1}{2} A^{-1}$ ，故

$$
\left| (3 \boldsymbol {A}) ^ {- 1} - 2 \boldsymbol {A} ^ {*} \right| = \left| \frac {1}{3} \boldsymbol {A} ^ {- 1} - \boldsymbol {A} ^ {- 1} \right| = \left| - \frac {2}{3} \boldsymbol {A} ^ {- 1} \right| = (- \frac {2}{3}) ^ {3} \cdot 2 = - \frac {1 6}{2 7}.
$$

5. $a_{ii} \neq 0, 1 \leq i \leq n.$ 

6. 不可逆.

7. 先试算, 再用归纳法可得

$$
\left( \begin{array}{c c} \cos \theta & \sin \theta \\ - \sin \theta & \cos \theta \end{array} \right) ^ {k} = \left( \begin{array}{c c} \cos k \theta & \sin k \theta \\ - \sin k \theta & \cos k \theta \end{array} \right).
$$

8. 用初等变换法计算比较简单:

$$
\left( \begin{array}{c c c c c c c c c c c} 0 & a _ {1} & 0 & \dots & 0 & 1 & 0 & 0 & \dots & 0 & 0 \\ 0 & 0 & a _ {2} & \dots & 0 & 0 & 1 & 0 & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & & \vdots & \vdots & \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & 0 & \dots & a _ {n - 1} & 0 & 0 & 0 & \dots & 1 & 0 \\ a _ {n} & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & 0 & 1 \end{array} \right)
$$

$$
\rightarrow \left(\begin{array}{c c c c c c c c c c c}a _ {n}&0&0&\dots&0&0&0&0&\dots&0&1\\0&a _ {1}&0&\dots&0&1&0&0&\dots&0&0\\0&0&a _ {2}&\dots&0&0&1&0&\dots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\dots&a _ {n - 1}&0&0&0&\dots&1&0\end{array}\right)
$$

$$
\rightarrow \left(\begin{array}{c c c c c c c c c c c}1&0&0&\dots&0&0&0&0&\dots&0&a _ {n} ^ {- 1}\\0&1&0&\dots&0&a _ {1} ^ {- 1}&0&0&\dots&0&0\\0&0&1&\dots&0&0&a _ {2} ^ {- 1}&0&\dots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\dots&1&0&0&0&\dots&a _ {n - 1} ^ {- 1}&0\end{array}\right).
$$

因此原矩阵的逆矩阵为:

$$
\left( \begin{array}{c c c c c} 0 & \dots & 0 & 0 & a _ {n} ^ {- 1} \\ a _ {1} ^ {- 1} & \dots & 0 & 0 & 0 \\ \vdots & & \vdots & \vdots & \vdots \\ 0 & \dots & a _ {n - 2} ^ {- 1} & 0 & 0 \\ 0 & \dots & 0 & a _ {n - 1} ^ {- 1} & 0 \end{array} \right).
$$

9. 用初等变换法比较简单:

$$
\left(\begin{array}{c c c c}O&A&I&O\\B&O&O&I\end{array}\right)\rightarrow \left(\begin{array}{c c c c}B&O&O&I\\O&A&I&O\end{array}\right)\rightarrow \left(\begin{array}{c c c c}I&O&O&B ^ {- 1}\\O&I&A ^ {- 1}&O\end{array}\right).
$$

因此

$$
\left( \begin{array}{c c} O & A \\ B & O \end{array} \right) ^ {- 1} = \left( \begin{array}{c c} O & B ^ {- 1} \\ A ^ {- 1} & O \end{array} \right).
$$

10. $\left|A_{1}\right|\left|A_{2}\right|\cdots\left|A_{k}\right|$ . 

11. $\begin{pmatrix}1&a&0\\0&1&a\\0&0&1\end{pmatrix}^{k}=\begin{pmatrix}1&ka&C_{k}^{2}a^{2}\\0&1&ka\\0&0&1\end{pmatrix}$ . 解答过程请参考例 2.12 (1).

12. 设和 A 乘法可交换的矩阵为 $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ ，则

$$
\left( \begin{array}{c c} a & b \\ c & d \end{array} \right) \left( \begin{array}{c c} 1 & 1 \\ 0 & 1 \end{array} \right) = \left( \begin{array}{c c} 1 & 1 \\ 0 & 1 \end{array} \right) \left( \begin{array}{c c} a & b \\ c & d \end{array} \right),
$$

即

$$
\left( \begin{array}{c c} a & a + b \\ c & c + d \end{array} \right) = \left( \begin{array}{c c} a + c & b + d \\ c & d \end{array} \right),
$$

比较等式两边得 c=0, a=d, 因此和 A 乘法可交换的矩阵具有形状 $\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}$ .

13. $X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$ . 这类问题通常用初等变换法比较简单（请读者和求逆阵的方法对比）:

$$
\left(\begin{array}{c c c c}1&1&2&1\\0&1&1&- 1\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&0&1&2\\0&1&1&- 1\end{array}\right),
$$

因此 $X = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}$ .

14. A 必是对角矩阵.

15. 分块上三角矩阵的逆矩阵也是分块上三角矩阵, 因此可用待定元素法. 设原矩阵的逆矩阵为 $\begin{pmatrix} A^{-1} & X \\ O & B^{-1} \end{pmatrix}$ , 则

$$
\left( \begin{array}{c c} A & C \\ O & B \end{array} \right) \left( \begin{array}{c c} A ^ {- 1} & X \\ O & B ^ {- 1} \end{array} \right) = \left( \begin{array}{c c} I & O \\ O & I \end{array} \right),
$$

即

$$
\left( \begin{array}{c c} I & A X + C B ^ {- 1} \\ O & I \end{array} \right) = \left( \begin{array}{c c} I & O \\ O & I \end{array} \right),
$$

故 ${AX} + C{B}^{-1} = O,{X} =  - {A}^{-1}C{B}^{-1}$ . 因此原矩阵的逆矩阵为

$$
\left( \begin{array}{c c} A ^ {- 1} & - A ^ {- 1} C B ^ {- 1} \\ O & B ^ {- 1} \end{array} \right).
$$

注 本题也可用分块初等变换法, 请参考例 2.74.

## 三、解答题

1. 由已知 $A^2 + A + I_n = O$ , 则 $(A - I_n)(A^2 + A + I_n) = A^3 - I_n = O$ , 即 $A^3 = I_n$ , 于是 $A$ 是可逆矩阵.

2. 因为 $(I_{n} - 2A)^{2} = I_{n} - 4A + 4A^{2} = I_{n}$ , 故 $I_{n} - 2A$ 是可逆矩阵.

3. 由已知 $A^3 - 2A^2 + 2A - I_n = -I_n$ ，即 $(A - I_n)(A^2 - A + I_n) = -I_n$ ，于是 $(I_n - A)^{-1} = A^2 - A + I_n$ .

4. 假设 $A^k = O$ , 其中 $k$ 为某个正整数. 由条件可得 $AB = B(I_n - A)$ , 于是 $O = A^k B = B(I_n - A)^k$ . 由单选题2知 $I_n - A$ 是可逆矩阵, 从而 $B = O$ .

5. 用初等变换法不难求得

$$
\boldsymbol {A} ^ {- 1} = \left( \begin{array}{c c c c c} 1 & - a & 0 & \dots & 0 \\ 0 & 1 & - a & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & - a \\ 0 & 0 & 0 & \dots & 1 \end{array} \right).
$$

6. 用初等变换法不难求得

$$
\boldsymbol {F} ^ {- 1} = \left( \begin{array}{c c c c c} - \frac {a _ {n - 1}}{a _ {n}} & 1 & 0 & \dots & 0 \\ - \frac {a _ {n - 2}}{a _ {n}} & 0 & 1 & \dots & 0 \\ - \frac {a _ {n - 3}}{a _ {n}} & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ - \frac {1}{a _ {n}} & 0 & 0 & \dots & 0 \end{array} \right).
$$

7. 将矩阵 A 分解为两个矩阵的乘积:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 1 & 1 & \dots & 1 & 1 \\ x _ {1} & x _ {2} & \dots & x _ {n} & x \\ \vdots & \vdots & & \vdots & \vdots \\ x _ {1} ^ {n - 1} & x _ {2} ^ {n - 1} & \dots & x _ {n} ^ {n - 1} & x ^ {n - 1} \\ x _ {1} ^ {n} & x _ {2} ^ {n} & \dots & x _ {n} ^ {n} & x ^ {n} \end{array} \right) \left( \begin{array}{c c c c c} 1 & x _ {1} & \dots & x _ {1} ^ {n - 1} & 0 \\ 1 & x _ {2} & \dots & x _ {2} ^ {n - 1} & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 1 & x _ {n} & \dots & x _ {n} ^ {n - 1} & 0 \\ 0 & 0 & \dots & 0 & 1 \end{array} \right),
$$

因此 $\left|A\right|=(x-x_{1})(x-x_{2})\cdots(x-x_{n})\prod_{1\leq i<j\leq n}(x_{j}-x_{i})^{2}.$ 

8. 矩阵 A 可化为

$$
\boldsymbol {A} = \boldsymbol {I} _ {n} + \left( \begin{array}{c} a _ {1} \\ a _ {2} \\ \vdots \\ a _ {n} \end{array} \right) (a _ {1}, a _ {2}, \dots , a _ {n}),
$$

由降阶公式可得 $\left|A\right|=1+\sum_{i=1}^{n}a_{i}^{2}$ .

9. 矩阵 A 可化为

$$
\boldsymbol {A} = \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right) \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ - b _ {1} & - b _ {2} & \dots & - b _ {n} \end{array} \right).
$$

当 $n > 2$ 时, 由 Cauchy-Binet 公式可得 $|\mathbf{A}| = 0$ ; 当 $n = 2$ 时, $|\mathbf{A}| = a_1b_1 + a_2b_2 - a_1b_2 - b_1a_2$ . 10. 用反证法, 设存在 $n$ 阶正交阵 $\mathbf{A}, \mathbf{B}$ , 使得 $\mathbf{A}^2 = c\mathbf{A}\mathbf{B} + \mathbf{B}^2 (c \neq 0)$ . 在等式两边同时左乘 $\mathbf{A}'$ , 右乘 $\mathbf{B}'$ , 可得 $\mathbf{AB}' = c\mathbf{I}_n + \mathbf{A}'\mathbf{B}$ , 从而 $c\mathbf{I}_n = \mathbf{A}'\mathbf{B} - \mathbf{A}\mathbf{B}'$ . 两边同时取迹, 可得 $nc = \operatorname{tr}(c\mathbf{I}_n) = \operatorname{tr}(\mathbf{A}'\mathbf{B}) - \operatorname{tr}(\mathbf{A}\mathbf{B}') = \operatorname{tr}\left((\mathbf{A}'\mathbf{B})'\right) - \operatorname{tr}(\mathbf{A}\mathbf{B}') = \operatorname{tr}(\mathbf{B}'\mathbf{A}) - \operatorname{tr}(\mathbf{A}\mathbf{B}') = 0$ , 矛盾.

11. 由例2.49的结论以及矩阵迹的交换性可知

$$
\operatorname{tr} \left((A B) ^ {2}\right) \leq \operatorname{tr} \left((A B) (A B) ^ {\prime}\right) = \operatorname{tr} (A B B A) = \operatorname{tr} (A ^ {2} B ^ {2}),
$$

等号成立当且仅当 AB 是对称阵, 也即 AB = BA.

12. 若 B 为非异阵，则由 AB = BA 可得 $AB^{-1} = B^{-1}A$ 。又 $B^{*} = |B|B^{-1}$ ，于是 $AB^{*} = B^{*}A$ 成立。对于一般的方阵 B，可取到一列有理数 $t_{k} \rightarrow 0$ ，使得 $t_{k}I_{n} + B$ 为非异阵，此时 $A(t_{k}I_{n} + B) = (t_{k}I_{n} + B)A$ 仍然成立。由非异阵情形的证明可得

$$
\boldsymbol {A} (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B}) ^ {*} = (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {B}) ^ {*} \boldsymbol {A}.
$$

注意到上式两边均为 $n$ 阶方阵, 其元素都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $AB^* = B^*A$ 成立.

13. 本题是例 2.14 和例 2.56 的推广.

(1) 设 $J_{b}=\begin{pmatrix}O & I_{n-1}\\ b & O\end{pmatrix}$ ，则 $J_{b}^{n}=bI_{n}$ 且 $A=a_{1}I_{n}+a_{2}J_{b}+a_{3}J_{b}^{2}+\cdots+a_{n}J_{b}^{n-1}$ 。因此同阶 b-循环矩阵的乘积仍然是 b-循环矩阵。

(2) 作多项式 $f(x) = a_{1} + a_{2}x + a_{3}x^{2} + \dots + a_{n}x^{n-1}$ ，令 $\varepsilon_{1}, \varepsilon_{2}, \dots, \varepsilon_{n}$ 是 $b$ 的所有 $n$ 次方根。完全类似于例 2.56 的解法，最后可得 $|A| = f(\varepsilon_{1})f(\varepsilon_{2})\cdots f(\varepsilon_{n})$ 。

14. 设 $\boldsymbol{A}=(a_{ij}),\boldsymbol{x}=(x_{1},x_{2},\cdots,x_{n})^{\prime},\boldsymbol{y}=(y_{1},y_{2},\cdots,y_{n})^{\prime}$ ，考虑如下 $n+1$ 阶矩阵的行列式求值：

$$
\boldsymbol {B} = \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {x} \\ \boldsymbol {y} ^ {\prime} & 0 \end{array} \right).
$$

一方面, 由例 1.7 可得 $|B| = -\sum_{i=1}^{n} \sum_{j=1}^{n} A_{ij} x_i y_j$ . 另一方面, 先把行列式 $|B|$ 的第二行, $\cdots$ , 第 $n$ 行全部加到第一行上; 再将第二列, $\cdots$ , 第 $n$ 列全部加到第一列上, 可得

$$
\left| \begin{array}{c c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} & x _ {1} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ y _ {1} & y _ {2} & \dots & y _ {n} & 0 \end{array} \right| = \left| \begin{array}{c c c c c} 0 & 0 & \dots & 0 & \sum_ {i = 1} ^ {n} x _ {i} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ y _ {1} & y _ {2} & \dots & y n & 0 \end{array} \right| = \left| \begin{array}{c c c c c} 0 & 0 & \dots & 0 & \sum_ {i = 1} ^ {n} x _ {i} \\ 0 & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ \sum_ {j = 1} ^ {n} y _ {j} & y _ {2} & \dots & y _ {n} & 0 \end{array} \right|.
$$

依次按照第一行和第一列进行展开, 可得 $|B| = -A_{11} \sum_{i=1}^{n} \sum_{j=1}^{n} x_i y_j$ . 比较上述两个结果, 可得 $\mathbf{A}$ 的所有代数余子式都相等.

15. 由假设知 $f(A) = \mathrm{tr}(AA')$ ，因此

$$
f \left(\boldsymbol {P} \boldsymbol {A} \boldsymbol {P} ^ {- 1}\right) = \operatorname{tr} \left(\boldsymbol {P} \boldsymbol {A} \boldsymbol {P} ^ {- 1} \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1} \boldsymbol {A} ^ {\prime} \boldsymbol {P} ^ {\prime}\right) = \operatorname{tr} \left(\left(\boldsymbol {P} ^ {\prime} \boldsymbol {P}\right) \boldsymbol {A} \left(\boldsymbol {P} ^ {\prime} \boldsymbol {P}\right) ^ {- 1} \boldsymbol {A} ^ {\prime}\right) = \operatorname{tr} \left(\boldsymbol {A} \boldsymbol {A} ^ {\prime}\right).
$$

以下设 $P^{\prime}P = (c_{ij})$ , $(P^{\prime}P)^{-1} = (d_{ij})$ . 注意 $P^{\prime}P$ 是对称矩阵, 后面要用到. 令 $A = E_{ij}$ 并代入上式, 则通过简单的计算可得

$$
c _ {i i} d _ {j j} = 1.
$$

再令 $A = E_{ij} + E_{kl}$ 并代入上式，则通过简单的计算可得

$$
c _ {i i} d _ {j j} + c _ {k k} d _ {l l} + c _ {k i} d _ {j l} + c _ {i k} d _ {l j} = 2 + 2 \delta_ {i k} \delta_ {j l},
$$

其中 $\delta_{ik}$ 是 Kronecker 符号. 由上述两个关系式可得

$$
c _ {k i} d _ {j l} + c _ {i k} d _ {l j} = 2 \delta_ {i k} \delta_ {j l}.
$$

在上式中令 $j = l, i \neq k$ , 注意到 $d_{jj} \neq 0$ , 故有 $c_{ik} + c_{ki} = 0$ , 又因为 $c_{ik} = c_{ki}$ , 故 $c_{ik} = 0, \forall i \neq k$ . 于是 $\pmb{P}'\pmb{P}$ 是一个对角矩阵, 从而 $d_{jj} = c_{jj}^{-1}$ , 由此可得 $c_{ii} = c_{jj}, \forall i, j$ . 因此 $\pmb{P}'\pmb{P} = c\pmb{I}_n$ , 其中 $c = c_{11} \neq 0$ .
