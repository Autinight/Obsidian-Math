# 第7章 相似标准型

## § 7.1 基本概念

### 7.1.1 $\lambda$ -矩阵及其法式

#### 1. 多项式矩阵的定义

设 $A(\lambda) = (a_{ij}(\lambda))$ 是一个 $m \times n$ 矩阵, 它的元素 $a_{ij}(\lambda)$ 是数域 $\mathbb{F}$ 上以 $\lambda$ 为未定元的多项式, 这样的矩阵被称为多项式矩阵或 $\lambda$ -矩阵.

#### 2. $\lambda$ -矩阵的初等变换和初等 $\lambda$ -矩阵

对 $\lambda$ -矩阵 $A(\lambda)$ 施行的下列 3 种变换称为 $\lambda$ -矩阵的初等变换:

(1) 将 $A(\lambda)$ 的两行 (或两列) 对换;

(2) 将 $A(\lambda)$ 的某一行 (列) 乘以非零常数 $c$ ;

(3) 将 $A(\lambda)$ 的某一行 (列) 乘以 $\mathbb{F}$ 上的某个多项式加到另外一行 (列) 上去.

对单位矩阵施以 $\lambda$ -矩阵的初等变换, 得到的矩阵称为初等 $\lambda$ -矩阵.

#### 3. $\lambda$ -矩阵的相抵

设 $A(\lambda)$ 和 $B(\lambda)$ 都是 $\lambda$ -矩阵, 若经过有限次 $\lambda$ -矩阵的初等变换可将 $A(\lambda)$ 变为 $B(\lambda)$ , 则称 $A(\lambda)$ 和 $B(\lambda)$ 等价或相抵.

#### 4. 可逆 $\lambda$ -矩阵

设 $A(\lambda)$ 和 $B(\lambda)$ 都是 $\lambda-$ 矩阵, 若 $A(\lambda)B(\lambda)=B(\lambda)A(\lambda)=I_{n}$ , 则称 $A(\lambda)$ 为可逆 $\lambda-$ 矩阵.

#### 5. 定理

两个 $n$ 阶数字矩阵 $\mathbf{A}$ 和 $\mathbf{B}$ 相似的充要条件是它们的特征矩阵 $\lambda I_{n} - A$ 和 $\lambda I_{n} - B$ 作为 $\lambda$ -矩阵相抵.

#### 6. 定理

设 $A(\lambda)$ 是 n 阶 $\lambda-$ 矩阵, 则 $A(\lambda)$ 相抵于下列对角矩阵:

$$
\operatorname{diag} \left\{d _ {1} (\lambda), d _ {2} (\lambda), \dots , d _ {r} (\lambda), 0, \dots , 0 \right\}, \tag {7.1}
$$

其中 $d_{i}(\lambda)$ 是非零首一多项式，且 $d_{i}(\lambda) \mid d_{i + 1}(\lambda) (1 \leq i \leq r - 1)$ . 特别地，若 $\pmb{A}$ 是数字矩阵，则它的特征矩阵 $\lambda I_{n} - A$ 相抵于下列对角矩阵：

$$
\operatorname{diag} \{1, \dots , 1, d _ {1} (\lambda), \dots , d _ {m} (\lambda) \}, \tag {7.2}
$$

其中 $d_{i}(\lambda)$ 是非常数首一多项式，且 $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq m-1)$ .

(7.1) 式称为 $\lambda$ -矩阵 $A(\lambda)$ 的法式; (7.2) 式称为数字矩阵 $A$ 的法式.

### 7.1.2 不变因子和有理标准型

#### 1. 行列式因子

设 $A(\lambda)$ 是 n 阶 $\lambda$ -矩阵, k 是不超过 n 的正整数. 如果 $A(\lambda)$ 有一个 k 阶子式不为零, 则定义 $A(\lambda)$ 的 k 阶行列式因子 $D_{k}(\lambda)$ 为 $A(\lambda)$ 的所有 k 阶子式的最大公因式 (首一多项式); 如果 $A(\lambda)$ 的所有 k 阶子式全为零, 则定义 $A(\lambda)$ 的 k 阶行列式因子 $D_{k}(\lambda)=0$ .

#### 2. 不变因子

设 n 阶 $\lambda$ -矩阵 $\boldsymbol{A}(\lambda)$ 的非零行列式因子为 $D_{1}(\lambda), D_{2}(\lambda), \cdots, D_{r}(\lambda)$ ，则必有 $D_{i}(\lambda) \mid D_{i+1}(\lambda) (1 \leq i \leq r-1)$ 。记 $d_{1}(\lambda) = D_{1}(\lambda), d_{2}(\lambda) = D_{2}(\lambda)/D_{1}(\lambda), \cdots, d_{r}(\lambda) = D_{r}(\lambda)/D_{r-1}(\lambda)$ ，多项式

$$
\left\{d _ {1} (\lambda), d _ {2} (\lambda), \dots , d _ {r} (\lambda) \right\}
$$

称为 $A(\lambda)$ 的不变因子.

对数字矩阵 A, 其不变因子定义为它的特征矩阵 $\lambda I_{n} - A$ 的不变因子. A 的不变因子就是 (7.2) 式中的多项式 $\{1, \cdots, 1, d_{1}(\lambda), \cdots, d_{m}(\lambda)\}$ .

#### 3. 定理

设 A, B 是数域 F 上的 n 阶矩阵, 则 A, B 在 F 上相似的充要条件是它们有相同的行列式因子或有相同的不变因子.

#### 4. 推论

设 A, B 是数域 F 上的 n 阶矩阵, 数域 K 包含数域 F, 则 A, B 在 F 上相似的充要条件是它们在 K 上相似.

#### 5. Frobenius 矩阵

下列形状的矩阵称为多项式 $f(x)=x^{n}+a_{1}x^{n-1}+\cdots+a_{n-1}x+a_{n}$ 的 Frobenius 块或 Frobenius 矩阵:

$$
\boldsymbol {F} (f (x)) = \left( \begin{array}{c c c c c} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ - a _ {n} & - a _ {n - 1} & - a _ {n - 2} & \dots & - a _ {1} \end{array} \right).
$$

$F(f(x))$ 是 $f(x)$ 的友阵 $C(f(x))$ 的转置.

#### 6. 定理

设数域 F 上 n 阶矩阵 A 的非常数不变因子为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{k}(\lambda)$ ，则 A 在 F 上相似于分块对角矩阵

$$
\boldsymbol {F} = \operatorname{diag} \left\{\boldsymbol {F} \left(d _ {1} (\lambda)\right), \boldsymbol {F} \left(d _ {2} (\lambda)\right), \dots , \boldsymbol {F} \left(d _ {k} (\lambda)\right) \right\}, \tag {7.3}
$$

$$
\boldsymbol {C} = \operatorname{diag} \left\{\boldsymbol {C} \left(d _ {1} (\lambda)\right), \boldsymbol {C} \left(d _ {2} (\lambda)\right), \dots , \boldsymbol {C} \left(d _ {k} (\lambda)\right) \right\}. \tag {7.4}
$$

上述两个分块对角矩阵 F, C 互为转置, 称为 A 的 Frobenius 标准型或有理标准型.

#### 7. 定理

设数域 F 上 n 阶矩阵 A 的非常数不变因子为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{k}(\lambda)$ ，其中 $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ ，则 A 的特征多项式是 $d_{1}(\lambda)d_{2}(\lambda)\cdots d_{k}(\lambda)$ ，极小多项式是 $d_{k}(\lambda)$ .

### 7.1.3 初等因子和 Jordan 标准型

#### 1. 初等因子

设数域 F 上 n 阶矩阵 A 的非常数不变因子为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{k}(\lambda)$ ，在 F 上

将 $d_{i}(\lambda)$ 分解为不可约因子的积:

$$
d _ {1} (\lambda) = P _ {1} (\lambda) ^ {e _ {1 1}} P _ {2} (\lambda) ^ {e _ {1 2}} \dots P _ {t} (\lambda) ^ {e _ {1 t}},
$$

$$
d _ {2} (\lambda) = P _ {1} (\lambda) ^ {e _ {2 1}} P _ {2} (\lambda) ^ {e _ {2 2}} \dots P _ {t} (\lambda) ^ {e _ {2 t}},
$$

...... 

$$
d _ {k} (\lambda) = P _ {1} (\lambda) ^ {e _ {k 1}} P _ {2} (\lambda) ^ {e _ {k 2}} \dots P _ {t} (\lambda) ^ {e _ {k t}},
$$

其中 $e_{ij} \geq 0$ . 若上式中的 $e_{ij} > 0$ , 则称多项式 $P_{j}(\lambda)^{e_{ij}}$ 为矩阵 $\mathbf{A}$ 的一个初等因子. $\mathbf{A}$ 的初等因子全体称为 $\mathbf{A}$ 的初等因子组.

#### 2. 定理

数域 F 上的两个 n 阶矩阵相似的充要条件是它们有相同的初等因子组.

#### 3. 定理

设 $n$ 阶复矩阵 $\pmb{A}$ 在复数域上的初等因子组为

$$
(\lambda - \lambda_ {1}) ^ {r _ {1}}, (\lambda - \lambda_ {2}) ^ {r _ {2}}, \dots , (\lambda - \lambda_ {k}) ^ {r _ {k}},
$$

则 A 相似于分块对角矩阵

$$
\boldsymbol {J} = \operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1}\right), \boldsymbol {J} _ {r _ {2}} \left(\lambda_ {2}\right), \dots , \boldsymbol {J} _ {r _ {k}} \left(\lambda_ {k}\right) \right\}, \tag {7.5}
$$

其中 $J_{r_{i}}(\lambda_{i})$ 是特征值为 $\lambda_{i}$ 的 $r_{i}$ 阶 Jordan 块, 即

$$
\boldsymbol {J} _ {r _ {i}} (\lambda_ {i}) = \left( \begin{array}{c c c c c} \lambda_ {i} & 1 & & & \\ & \lambda_ {i} & 1 & & \\ & & \ddots & \ddots & \\ & & & \lambda_ {i} & 1 \\ & & & & \lambda_ {i} \end{array} \right).
$$

(7.5) 式中的分块对角矩阵 J 称为 A 的 Jordan 标准型.

#### 4. 定理

设 $\varphi$ 是 n 维复线性空间 V 上的线性变换, 则必存在 V 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型.

#### 5. 定理

设 A 是 n 阶复矩阵 (或 $\varphi$ 是 n 维复线性空间 V 上的线性变换), 则以下 3 个结论等价:

(1) A (或 $\varphi$ ) 可对角化;

(2) A (或 $\varphi$ ) 的极小多项式无重根;

(3) A (或 $\varphi$ ) 的初等因子都是一次多项式.

### 7.1.4 矩阵函数

#### 1. 矩阵序列的收敛

设有 n 阶矩阵序列 $\{A_{k}\}$ :

$$
\boldsymbol {A} _ {k} = \left( \begin{array}{c c c} a _ {1 1} ^ {(k)} & \dots & a _ {1 n} ^ {(k)} \\ \vdots & & \vdots \\ a _ {n 1} ^ {(k)} & \dots & a _ {n n} ^ {(k)} \end{array} \right),
$$

$B = (b_{ij})$ 也是一个 n 阶矩阵. 若对每个 $(i,j)$ , 都有 $\lim_{k\to\infty}a_{ij}^{(k)} = b_{ij}$ , 则称矩阵序列 $\{A_k\}$ 收敛于 B, 记为 $\lim_{k\to\infty}A_k = B$ .

#### 2. 矩阵幂级数

设 $f(z)=a_{0}+a_{1}z+a_{2}z^{2}+\cdots+a_{n}z^{n}+\cdots$ 是一个复幂级数， $f_{k}(z)$ 是其部分和。若矩阵序列 $\{f_{k}(A)\}$ 收敛于 B，则称矩阵幂级数 $f(A)$ 收敛于 B。

#### 3. 定理

设 $f(z)=a_{0}+a_{1}z+a_{2}z^{2}+\cdots+a_{n}z^{n}+\cdots$ 是一个复幂级数，则

(1) 矩阵幂级数 $f(\pmb{X})$ 收敛的充要条件是对任一可逆矩阵 $\pmb{P}, f(\pmb{P}^{-1}\pmb{X}\pmb{P})$ 收敛, 这时

$$
f (\boldsymbol {P} ^ {- 1} \boldsymbol {X} \boldsymbol {P}) = \boldsymbol {P} ^ {- 1} f (\boldsymbol {X}) \boldsymbol {P};
$$

(2) 设 $X = \text{diag}\{X_{1}, \cdots, X_{m}\}$ 是分块对角矩阵，则矩阵幂级数 $f(X)$ 收敛的充要条件是 $f(X_{i}) (1 \leq i \leq m)$ 收敛，这时

$$
f (\boldsymbol {X}) = \operatorname{diag} \left\{f \left(\boldsymbol {X} _ {1}\right), \dots , f \left(\boldsymbol {X} _ {m}\right) \right\};
$$

(3) 设 $f(z)$ 的收敛半径为 $r$ , $J_{n}(\lambda_{0})$ 是特征值为 $\lambda_{0}$ 的 $n$ 阶 Jordan 块, 则当 $|\lambda_{0}| < r$ 时, $f(J_{n}(\lambda_{0}))$ 收敛.

#### 4. 定理

设 $f(z)=a_{0}+a_{1}z+a_{2}z^{2}+\cdots+a_{n}z^{n}+\cdots$ 是一个复幂级数且其收敛半径为 r.

设 n 阶矩阵 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，A 的谱半径定义为 $\rho(A) = \max_{1 \leq i \leq n} |\lambda_{i}|$ .

(1) 若 $\rho(\boldsymbol{A}) < r$ ，则 $f(\boldsymbol{A})$ 收敛；

(2) 若 $\rho(\boldsymbol{A}) > r$ ，则 $f(\boldsymbol{A})$ 发散；

(3) 若 $f(A)$ 收敛，则 $f(A)$ 的特征值为 $f(\lambda_{1}), f(\lambda_{2}), \cdots, f(\lambda_{n})$ .

## § 7.2 矩阵相似的全系不变量

利用等价关系对矩阵进行分类, 这是一种常见的研究方法, 通常分为 3 个步骤. 首先, 引入矩阵之间的一种等价关系, 它将矩阵全体分成互不相交的等价类的并集. 其次, 找出矩阵在等价关系下的全系不变量, 即两个矩阵等价当且仅当它们的全系不变量相等. 最后, 在每一个等价类中, 找出一个相对简单的矩阵作为代表元, 称之为等价关系的标准型. 例如, 矩阵在相抵关系下的全系不变量就是矩阵的秩, $\left( \begin{array}{ll} I_r & O \\ O & O \end{array} \right)$ 就是相抵标准型.

那么矩阵在相似关系下的全系不变量是什么？相似标准型具有怎样的形状呢？在教材 [1] 中，我们利用 $\lambda$ -矩阵这一代数方法，给出了矩阵相似的 3 组全系不变量，分别是行列式因子组、不变因子组和初等因子组；给出了两类相似标准型，分别是基于不变因子的有理标准型和复数域上基于初等因子的 Jordan 标准型。本节我们将从 4 个方面阐述如何利用相似关系的全系不变量去处理矩阵的相似问题。

### 1. 矩阵相似的判定准则一：特征矩阵相抵

两个 $n$ 阶数字矩阵 $\mathbf{A}, \mathbf{B}$ 相似当且仅当它们的特征矩阵 $\lambda I_{n} - A, \lambda I_{n} - B$ 作为 $\lambda$ -矩阵相抵. 这一判定准则是求出矩阵相似全系不变量的出发点, 它自身也有一些有趣的应用, 我们来看下面两道典型的例题.

例 7.1 设 A, B 是数域 F 上的 n 阶矩阵, $\lambda I_{n}-A$ 相抵于 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ , $\lambda I_{n}-B$ 相抵于 $\mathrm{diag}\{f_{i_{1}}(\lambda), f_{i_{2}}(\lambda), \cdots, f_{i_{n}}(\lambda)\}$ , 其中 $f_{i_{1}}(\lambda), f_{i_{2}}(\lambda), \cdots, f_{i_{n}}(\lambda)$ 是 $f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)$ 的一个排列. 求证: A 与 B 相似.

证明 对换 $\lambda$ -矩阵 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ 的第 i,j 行，再对换第 i,j 列，可将 $f_{i}(\lambda)$ 与 $f_{j}(\lambda)$ 互换位置。由于任一排列都可由若干次对换来实现，故 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ 相抵于 $\mathrm{diag}\{f_{i_{1}}(\lambda), f_{i_{2}}(\lambda), \cdots, f_{i_{n}}(\lambda)\}$ ，于是 $\lambda I_{n}-A$ 相抵于 $\lambda I_{n}-B$ ，从而 A 与 B 相似。☐

例 7.2 设 n 阶方阵 A, B, C, D 中 A, C 可逆, 求证: 存在可逆矩阵 P, Q, 使得 A = PCQ, B = PDQ 的充要条件是 $\lambda A - B$ 与 $\lambda C - D$ 相抵.

证明 必要性由 $\lambda A - B = P(\lambda C - D)Q$ 即得. 下证充分性. 设 $\lambda A - B$ 与 $\lambda C - D$ 相抵, 则由 $A, C$ 可逆知, $\lambda I_n - A^{-1}B$ 与 $\lambda I_n - C^{-1}D$ 相抵, 于是 $A^{-1}B$ 与 $C^{-1}D$ 相似. 设 $Q$ 为可逆矩阵, 使得 $A^{-1}B = Q^{-1}(C^{-1}D)Q$ , 令 $P = AQ^{-1}C^{-1}$ , 则 $P$ 可逆且 $A = PCQ$ , $B = PDQ$ . □

### 2. 矩阵相似的判定准则二：有相同的行列式因子组

例 7.3 求证: 任一 n 阶矩阵 A 都与它的转置 $A'$ 相似.

证明 注意到 $(\lambda I_{n} - A)' = \lambda I_{n} - A'$ , 并且行列式的值在转置下不改变, 故 $\lambda I_{n} - A$ 和 $\lambda I_{n} - A'$ 有相同的行列式因子组, 从而 $A$ 和 $A'$ 相似. $\square$ 

例 7.4 求证: 对任意的 $b \neq 0, n$ 阶方阵 $A(a, b)$ 均相互相似:

$$
\boldsymbol {A} (a, b) = \left( \begin{array}{c c c c c} a & b & \dots & b & b \\ & a & \ddots & \ddots & b \\ & & \ddots & \ddots & \vdots \\ & & & a & b \\ & & & & a \end{array} \right).
$$

证明 只要证明对任意的 $b \neq 0$ , $\mathbf{A}(a, b)$ 的行列式因子组都一样即可. 显然 $D_{n}(\lambda) = (\lambda - a)^{n}$ . $\lambda \mathbf{I}_{n} - \mathbf{A}(a, b)$ 的前 $n - 1$ 行、前 $n - 1$ 列构成的子式, 其值为 $(\lambda - a)^{n - 1}$ ; $\lambda \mathbf{I}_{n} - \mathbf{A}(a, b)$ 的前 $n - 1$ 行、后 $n - 1$ 列构成的子式, 其值设为 $g(\lambda)$ . 注意到 $g(a)$ 是 $n - 1$ 阶上三角行列式, 主对角元素全为 $-b$ , 从而 $g(a) = (-b)^{n - 1} \neq 0$ . 因此 $(\lambda - a)^{n - 1}$ 与 $g(\lambda)$ 没有公共根, 故 $((\lambda - a)^{n - 1}, g(\lambda)) = 1$ , 于是 $D_{n-1}(\lambda) = 1$ , 从而 $\mathbf{A}(a, b)$ 的行列式因子组为 $1, \cdots, 1$ , $(\lambda - a)^{n}$ , 结论得证. □

注 (1) 在上 (下) 三角矩阵 (如 Jordan 块) 或类上 (下) 三角矩阵 (如友阵或 Frobenius 块) 中, 若上 (下) 次对角线上的元素全部非零, 可以尝试计算行列式因子组. 对一般的矩阵 (如数字矩阵), 不建议计算行列式因子组, 推荐使用 $\lambda$ -矩阵的初等变换计算法式, 得到不变因子组.

(2) 注意到 $A(a,0) = aI_{n}$ 的行列式因子组为 $D_{i}(\lambda) = (\lambda -a)^{i}(1\leq i\leq n)$ . 因此, 在求相似标准型的过程中, 注意千万不能使用摄动法!

### 3. 矩阵相似的判定准则三: 有相同的不变因子组

由 §§ 7.1.2 定理 7 可知, 所有不变因子的乘积等于特征多项式, 整除关系下最大的那个不变因子等于极小多项式. 因此, 确定特征多项式和极小多项式可帮助确定不变因子组. 下面来看几个典型的例题.

例 7.5 设 A 是 n 阶 n 次幂零矩阵, 即 $A^{n} = O$ 但 $A^{n-1} \neq O$ . 若 B 也是 n 阶 n 次幂零矩阵, 求证: A 相似于 B.

证明 显然 A 的极小多项式为 $\lambda^{n}$ ，故 A 的不变因子组是 $1, \cdots, 1, \lambda^{n}$ 。同理 B 的不变因子组也是 $1, \cdots, 1, \lambda^{n}$ ，因此 A 和 B 相似。☐

例 7.6 设 A 为 n 阶矩阵, 证明以下 3 个结论等价:

(1) $A = cI_{n}$ ，其中 c 为常数；

(2) A 的 n-1 阶行列式因子是一个 n-1 次多项式;

(3) A 的不变因子组中无常数.

证明 $(1) \Rightarrow (2)$ : 显然成立.

(2) $\Rightarrow$ (3): 由于 A 的 n 阶行列式因子 $D_{n}(\lambda)$ 是一个 n 次多项式, 故 A 的最后一个不变因子 $d_{n}(\lambda) = D_{n}(\lambda)/D_{n-1}(\lambda)$ 是一个一次多项式, 设为 $\lambda - c$ . 因为其他不变因子都要整除 $d_{n}(\lambda)$ , 并且所有不变因子的乘积等于 n 阶行列式因子 $D_{n}(\lambda)$ , 故 A 的不变因子组只能是 $\lambda - c, \lambda - c, \cdots, \lambda - c$ .

(3) $\Rightarrow$ (1): 设 $\mathbf{A}$ 的不变因子组为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{n}(\lambda)$ , 则 $\deg d_{i}(\lambda) \geq 1$ . 注意到 $d_{1}(\lambda) d_{2}(\lambda) \cdots d_{n}(\lambda) = D_{n}(\lambda)$ 的次数为 $n$ , 并且 $d_{i}(\lambda) \mid d_{n}(\lambda)$ , 故只能是 $d_{1}(\lambda) = d_{2}(\lambda) = \cdots = d_{n}(\lambda) = \lambda - c$ . 因此 $\mathbf{A}$ 与 $cI_{n}$ 有相同不变因子组, 从而它们相似, 即存在可逆矩阵 $\mathbf{P}$ , 使得 $\mathbf{A} = \mathbf{P}^{-1}(cI_{n})\mathbf{P} = cI_{n}$ . 另外, 也可以利用 $\mathbf{A}$ 的极小多项式等于 $\lambda - c$ 或 $\mathbf{A}$ 的 Jordan 标准型来证明. $\square$ 

例 7.7 设 n 阶矩阵 A 的特征值全为 1, 求证: 对任意的正整数 k, $A^{k}$ 与 A 相似.

证明 由 A 的特征值全为 1 可知 $A^{k}$ 的特征值也全为 1. 设 P 为可逆矩阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(1), \cdots, J_{r_s}(1)\}$ 为 Jordan 标准型. 由于 $P^{-1}A^{k}P = (P^{-1}AP)^{k} = J^{k}$ , 故只要证明 $J^{k}$ 与 J 相似即可. 又因为 $J^{k} = \text{diag}\{J_{r_1}(1)^k, \cdots, J_{r_s}(1)^k\}$ , 故问题可进一步归结到每个 Jordan 块, 即只要证明 $J_{r_i}(1)^k$ 与 $J_{r_i}(1)$ 相似即可. 因此不妨设 $J = J_n(1)$ 只有一个 Jordan 块, 则 $J = I_n + J_0$ , 其中 $J_0 = J_n(0)$ 是特征值为 0 的 n 阶 Jordan 块. 注意到

$$
\boldsymbol {J} ^ {k} = \left(\boldsymbol {I} _ {n} + \boldsymbol {J} _ {0}\right) ^ {k} = \boldsymbol {I} _ {n} + \mathrm{C} _ {k} ^ {1} \boldsymbol {J} _ {0} + \mathrm{C} _ {k} ^ {2} \boldsymbol {J} _ {0} ^ {2} + \dots + \boldsymbol {J} _ {0} ^ {k},
$$

故 $J^{k}$ 是一个上三角矩阵, 其主对角线上的元素全为 1 , 上次对角线上的元素全为 $k$ , 从而它的特征多项式为 $(\lambda - 1)^{n}$ . 为了确定它的极小多项式, 我们可进行如下计算:

$$
\left(\boldsymbol {J} ^ {k} - \boldsymbol {I} _ {n}\right) ^ {n - 1} = \left(\mathrm{C} _ {k} ^ {1} \boldsymbol {J} _ {0} + \mathrm{C} _ {k} ^ {2} \boldsymbol {J} _ {0} ^ {2} + \dots + \boldsymbol {J} _ {0} ^ {k}\right) ^ {n - 1} = k ^ {n - 1} \boldsymbol {J} _ {0} ^ {n - 1} \neq \boldsymbol {O},
$$

于是 $J^{k}$ 的极小多项式为 $(\lambda-1)^{n}$ ，其不变因子组为 $1,\cdots,1,(\lambda-1)^{n}$ 。因此 $J^{k}$ 与 J 有相同的不变因子，从而 $J^{k}$ 与 J 相似。☐

例 7.8 设 n 阶矩阵 A 的特征值全为 1 或 -1, 求证: $A^{-1}$ 与 A 相似.

证明 设 P 为可逆矩阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_s}(\lambda_s)\}$ 为 Jordan 标准型, 其中 $\lambda_i = \pm 1$ . 由于 $P^{-1}A^{-1}P = (P^{-1}AP)^{-1} = J^{-1}$ , 故只要证明 $J^{-1}$ 与 J 相似即可. 又因为 $J^{-1} = \text{diag}\{J_{r_1}(\lambda_1)^{-1}, \cdots, J_{r_s}(\lambda_s)^{-1}\}$ , 故问题可进一步归结到每个 Jordan 块, 即只要证明 $J_{r_i}(\lambda_i)^{-1}$ 与 $J_{r_i}(\lambda_i)$ 相似即可. 因此不妨设 $J = J_n(\lambda_0)$ 只有一个 Jordan 块, 则 $J = \lambda_0 I_n + J_0$ , 其中 $\lambda_0 = \pm 1$ , $J_0 = J_n(0)$ 是特征值为 0 的 n 阶 Jordan 块. 注意到

$$
\lambda_ {0} ^ {n} \boldsymbol {I} _ {n} = (\lambda_ {0} \boldsymbol {I} _ {n}) ^ {n} - (- \boldsymbol {J} _ {0}) ^ {n} = (\lambda_ {0} \boldsymbol {I} _ {n} + \boldsymbol {J} _ {0}) \left(\lambda_ {0} ^ {n - 1} \boldsymbol {I} _ {n} - \lambda_ {0} ^ {n - 2} \boldsymbol {J} _ {0} + \dots + (- 1) ^ {n - 1} \boldsymbol {J} _ {0} ^ {n - 1}\right),
$$

以及 $\lambda_{0}^{-1}=\lambda_{0}$ ，故可得

$$
\boldsymbol {J} ^ {- 1} = \left(\lambda_ {0} \boldsymbol {I} _ {n} + \boldsymbol {J} _ {0}\right) ^ {- 1} = \lambda_ {0} \boldsymbol {I} _ {n} - \lambda_ {0} ^ {2} \boldsymbol {J} _ {0} + \dots + (- 1) ^ {n - 1} \lambda_ {0} ^ {n} \boldsymbol {J} _ {0} ^ {n - 1}.
$$

因此 $J^{-1}$ 是一个上三角矩阵, 其主对角线上的元素全为 $\lambda_0$ , 上次对角线上的元素全为 $-\lambda_0^2$ , 从而它的特征多项式为 $(\lambda - \lambda_0)^n$ . 为了确定它的极小多项式, 我们可进行如下计算:

$$
\left(\boldsymbol {J} ^ {- 1} - \lambda_ {0} \boldsymbol {I}\right) ^ {n - 1} = \left(- \lambda_ {0} ^ {2} \boldsymbol {J} _ {0} + \dots + (- 1) ^ {n - 1} \lambda_ {0} ^ {n} \boldsymbol {J} _ {0} ^ {n - 1}\right) ^ {n - 1} = (- 1) ^ {n - 1} \boldsymbol {J} _ {0} ^ {n - 1} \neq \boldsymbol {O},
$$

于是 $J^{-1}$ 的极小多项式为 $(\lambda - \lambda_{0})^{n}$ ，其不变因子组为 $1, \cdots, 1, (\lambda - \lambda_{0})^{n}$ 。因此 $J^{-1}$ 与 J 有相同的不变因子组，从而 $J^{-1}$ 与 J 相似。☐

### 4. 矩阵相似的判定准则四：有相同的初等因子组

下面 2 个例题是 λ-矩阵和初等因子的基本性质, 我们在后面将会用到.

例 7.9 设 $f(\lambda), g(\lambda)$ 是数域 K 上的首一多项式, $d(\lambda) = (f(\lambda), g(\lambda))$ , $m(\lambda) = [f(\lambda), g(\lambda)]$ 分别是 $f(\lambda)$ 和 $g(\lambda)$ 的最大公因式和最小公倍式, 证明下列 $\lambda$ -矩阵相抵:

$$
\left( \begin{array}{c c} f (\lambda) & 0 \\ 0 & g (\lambda) \end{array} \right), \quad \left( \begin{array}{c c} g (\lambda) & 0 \\ 0 & f (\lambda) \end{array} \right), \quad \left( \begin{array}{c c} d (\lambda) & 0 \\ 0 & m (\lambda) \end{array} \right).
$$

证明 由已知, 存在多项式 $u(\lambda), v(\lambda)$ , 使得 $f(\lambda) u(\lambda) + g(\lambda) v(\lambda) = d(\lambda)$ . 设 $f(\lambda) = d(\lambda) h(\lambda)$ , 则 $m(\lambda) = g(\lambda) h(\lambda)$ . 作下列 $\lambda$ -矩阵的初等变换:

$$
\left( \begin{array}{c c} f (\lambda) & 0 \\ 0 & g (\lambda) \end{array} \right) \to \left( \begin{array}{c c} f (\lambda) & 0 \\ f (\lambda) u (\lambda) & g (\lambda) \end{array} \right) \to \left( \begin{array}{c c} f (\lambda) & 0 \\ f (\lambda) u (\lambda) + g (\lambda) v (\lambda) & g (\lambda) \end{array} \right)
$$

$$
= \left( \begin{array}{c c} f (\lambda) & 0 \\ d (\lambda) & g (\lambda) \end{array} \right) \to \left( \begin{array}{c c} 0 & - g (\lambda) h (\lambda) \\ d (\lambda) & g (\lambda) \end{array} \right) \to \left( \begin{array}{c c} 0 & g (\lambda) h (\lambda) \\ d (\lambda) & 0 \end{array} \right) \to \left( \begin{array}{c c} d (\lambda) & 0 \\ 0 & m (\lambda) \end{array} \right).
$$

另一结论同理可得. □

设 $f(\lambda)$ 为数域 $\mathbb{K}$ 上的多项式, $p(\lambda)$ 是 $\mathbb{K}$ 上的首一不可约多项式, 若存在正整数 $k$ , 使得 $p(\lambda)^k \mid f(\lambda)$ , 但 $p(\lambda)^{k+1} \nmid f(\lambda)$ , 则称 $p(\lambda)^k$ 为 $f(\lambda)$ 的一个准素因子. 事实上, 若设 $f(\lambda)$ 在 $\mathbb{K}$ 上的标准因式分解为

$$
f (\lambda) = c P _ {1} (\lambda) ^ {e _ {1}} P _ {2} (\lambda) ^ {e _ {2}} \dots P _ {t} (\lambda) ^ {e _ {t}},
$$

其中 c 为非零常数, $P_{i}(\lambda)$ 为互异的首一不可约多项式, $e_{i} > 0 (1 \leq i \leq t)$ , 则 $f(\lambda)$ 的所有准素因子为 $P_{1}(\lambda)^{e_{1}}, P_{2}(\lambda)^{e_{2}}, \cdots, P_{t}(\lambda)^{e_{t}}$ . 因此等价地, 矩阵 A 的初等因子组就是 A 的所有不变因子的准素因子组. 下面的例题将初等因子组的这一等价定义进行了推广.

例 7.10 设 A 是数域 K 上的 n 阶矩阵, 其特征矩阵 $\lambda I_{n} - A$ 经过初等变换可化为对角矩阵 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ , 其中 $f_{i}(\lambda)$ 是 K 上的首一多项式. 求证: 矩阵 A 的初等因子组等于所有 $f_{i}(\lambda)$ 的准素因子组.

证明 对任意的 $i < j$ , 以下操作记为 $O(i, j)$ : 设 $d(\lambda) = (f_i(\lambda), f_j(\lambda))$ , $m(\lambda) = [f_i(\lambda), f_j(\lambda)]$ 分别是 $f_i(\lambda)$ 和 $f_j(\lambda)$ 的最大公因式和最小公倍式, 则用 $d(\lambda)$ 替代 $f_i(\lambda)$ , 用 $m(\lambda)$ 替代 $f_j(\lambda)$ . 我们先证明, 操作 $O(i, j)$ 可通过 $\lambda$ -矩阵的初等变换来实现, 并且前后两个对角矩阵, 即 $\operatorname{diag}\{f_1(\lambda), \cdots, f_i(\lambda), \cdots, f_j(\lambda), \cdots, f_n(\lambda)\}$ 与 $\operatorname{diag}\{f_1(\lambda), \cdots, d(\lambda), \cdots, m(\lambda), \cdots, f_n(\lambda)\}$ 有相同的准素因子组.

由例 7.9 即知 $O(i,j)$ 是 $\lambda-$ 矩阵的相抵变换. 设 $f_{i}(\lambda), f_{j}(\lambda)$ 的公共因式分解为

$$
f _ {i} (\lambda) = P _ {1} (\lambda) ^ {e _ {i 1}} P _ {2} (\lambda) ^ {e _ {i 2}} \dots P _ {t} (\lambda) ^ {e _ {i t}}, f _ {j} (\lambda) = P _ {1} (\lambda) ^ {e _ {j 1}} P _ {2} (\lambda) ^ {e _ {j 2}} \dots P _ {t} (\lambda) ^ {e _ {j t}},
$$

其中 $P_{i}(\lambda)$ 为互异的首一不可约多项式， $e_{ik} \geq 0, e_{jk} \geq 0 (1 \leq k \leq t)$ ，令 $r_{k} = \min \{e_{ik}, e_{jk}\}, s_{k} = \max \{e_{ik}, e_{jk}\}$ ，则有

$$
d (\lambda) = P _ {1} (\lambda) ^ {r _ {1}} P _ {2} (\lambda) ^ {r _ {2}} \dots P _ {t} (\lambda) ^ {r _ {t}}, m (\lambda) = P _ {1} (\lambda) ^ {s _ {1}} P _ {2} (\lambda) ^ {s _ {2}} \dots P _ {t} (\lambda) ^ {s _ {t}}.
$$

显然 $\{f_i(\lambda), f_j(\lambda)\}$ 和 $\{d(\lambda), m(\lambda)\}$ 有相同的准素因子组, 因此 $O(i,j)$ 操作前后的两个对角矩阵也有相同的准素因子组.

对对角矩阵 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ 依次实施操作 $O(1,j)(2 \leq j \leq n)$ ，则得到对角矩阵的第 (1,1) 元素的所有不可约因式的幂在主对角元素中都是最小的；然后依次操作 $O(2,j)(3 \leq j \leq n)$ ; …; 最后操作 $O(n-1,n)$ ，可得一个对角矩阵 $\boldsymbol{\Lambda} = \mathrm{diag}\{d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{n}(\lambda)\}$ . 由操作的性质可知， $\boldsymbol{\Lambda}$ 满足 $d_{i}(\lambda) \mid d_{i+1}(\lambda)(1 \leq i \leq n-1)$ ，因此 $\boldsymbol{\Lambda}$ 就是矩阵 A 的法式. 又因为对角矩阵 $\mathrm{diag}\{f_{1}(\lambda), f_{2}(\lambda), \cdots, f_{n}(\lambda)\}$ 与法式有相同的准素因子组，故所有 $f_{i}(\lambda)$ 的准素因子组就是矩阵 A 的初等因子组. □

例 7.11 设 $A = \text{diag}\{A_1, A_2, \cdots, A_k\}$ 为分块对角矩阵, 求证: A 的初等因子组等于 $A_i (1 \leq i \leq k)$ 的初等因子组的无交并集. 又若交换各块的位置, 则所得的矩阵仍和 A 相似.

证明 显然 $\lambda I - A$ 也是一个分块对角矩阵, 用 $\lambda$ -矩阵的初等变换将每一块化为法式, 则由例7.10可知, $A$ 的初等因子组就是所有各块的初等因子组的无交并集. 又交换 $A$ 的各块并不改变 $A$ 的初等因子组, 因此所得之矩阵仍和 $A$ 相似. $\square$ 

## § 7.3 有理标准型的几何与应用

有理标准型是利用不变因子组构造的相似标准型。从因式分解的层面上看，不变因子组并非是最简单的相似关系全系不变量，从而有理标准型也并非是最简单的相似标准型，比如 Frobenius 块有时比较大等。然而有理标准型在任意的数域 $\mathbb{K}$ 上均存在，因此具有广泛的用途。本节将从有理标准型的几何意义以及有理标准型在矩阵理论中的应用这两个方面进行阐述。

### 1. 有理标准型的几何意义

定义 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\varphi$ 是 $V$ 上的线性变换. 设 $0 \neq \alpha \in V$ , 则 $U = L(\alpha, \varphi(\alpha), \varphi^2(\alpha), \cdots)$ 称为 $V$ 的循环子空间, 记为 $U = C(\varphi, \alpha)$ , $\alpha$ 称为 $U$ 的循环向量. 显然, 循环子空间 $U$ 是 $V$ 的 $\varphi$ -不变子空间, 并且是包含 $\alpha$ 的最小 $\varphi$ -不变子空间. 若 $U = V$ , 则称 $V$ 为循环空间.

例 7.12 设 $U = C(\varphi, \alpha)$ 为循环子空间, 若 $\dim U = r$ , 求证: $\{\alpha, \varphi(\alpha), \cdots, \varphi^{r-1}(\alpha)\}$ 是 U 的一组基.

证明 设 $m = \max\{k \in Z^{+} \mid \alpha, \varphi(\alpha), \cdots, \varphi^{k-1}(\alpha)$ 线性无关\}, 则由例 3.8 和数学归纳法容易验证: 对任意的 $k \geq m, \varphi^{k}(\alpha)$ 都是 $\alpha, \varphi(\alpha), \cdots, \varphi^{m-1}(\alpha)$ 的线性组合, 于是 $\{\alpha, \varphi(\alpha), \cdots, \varphi^{m-1}(\alpha)\}$ 是 U 的一组基, 从而 $m = \dim U = r$ . □

例 7.13 设 U 是 V 的 $\varphi$ -不变子空间, 求证: U 为循环子空间的充要条件是 $\varphi|_{U}$ 在 U 的某组基下的表示矩阵为某个首一多项式的友阵.

证明 先证充分性. 设 $\varphi|_{U}$ 在 U 的一组基 $\{e_{1}, e_{2}, \cdots, e_{r}\}$ 下的表示矩阵是友阵 $C(d(\lambda))$ ，其中 $d(\lambda) = \lambda^{r} + a_{1}\lambda^{r-1} + \cdots + a_{r-1}\lambda + a_{r}$ ，则由友阵的定义（例 2.3）可知 $\varphi(e_{i}) = e_{i+1} (1 \leq i \leq r-1)$ ， $\varphi(e_{r}) = -\sum_{i=1}^{r} a_{r-i+1} e_{i}$ 。因此 $e_{i} = \varphi^{i-1}(e_{1}) (2 \leq i \leq r)$ ， $U = L(e_{1}, e_{2}, \cdots, e_{r}) = C(\varphi, e_{1})$ 为循环子空间。

再证必要性. 设 $U = C(\varphi, \alpha)$ 是 $r$ 维循环子空间, 则由例 7.12 可知, $\{\alpha, \varphi(\alpha), \dots, \varphi^{r-1}(\alpha)\}$ 是 $U$ 的一组基. 设

$$
\varphi^ {r} (\alpha) = - a _ {r} \alpha - a _ {r - 1} \varphi (\alpha) - \dots - a _ {1} \varphi^ {r - 1} (\alpha),
$$

令 $d(\lambda)=\lambda^{r}+a_{1}\lambda^{r-1}+\cdots+a_{r-1}\lambda+a_{r}$ ，容易验证： $\varphi|_{U}$ 在基 $\{\alpha,\varphi(\alpha),\cdots,\varphi^{r-1}(\alpha)\}$ 下的表示矩阵就是友阵 $C(d(\lambda))$ . □

一般地, 设线性变换 $\varphi$ 的不变因子组是 $1, \cdots, 1, d_{1}(\lambda), \cdots, d_{k}(\lambda)$ , 其中 $d_{i}(\lambda)$ 是非常数首一多项式, $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ , 则由有理标准型理论可知, 存在 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为

$$
\boldsymbol {C} = \operatorname{diag} \left\{\boldsymbol {C} \left(d _ {1} (\lambda)\right), \boldsymbol {C} \left(d _ {2} (\lambda)\right), \dots , \boldsymbol {C} \left(d _ {k} (\lambda)\right) \right\}.
$$

结合例 7.13 的讨论可知, 此时 V 有一个循环子空间的直和分解:

$$
V = C (\varphi , \alpha_ {1}) \oplus C (\varphi , \alpha_ {2}) \oplus \dots \oplus C (\varphi , \alpha_ {k}), \tag {7.6}
$$

使得 $\varphi|_{C(\varphi,\alpha_{i})}$ 在基 $\{\alpha_{i},\varphi(\alpha_{i}),\cdots,\varphi^{r_{i}-1}(\alpha_{i})\}$ 下的表示矩阵就是友阵 $C(d_{i}(\lambda))$ ，其中 $r_{i}=\dim C(\varphi,\alpha_{i})$ 。线性变换 $\varphi$ 的有理标准型诱导的 V 的上述循环子空间直和分解 (7.6) 就是有理标准型的几何意义。

下面依次给出上述几何意义的一些应用,首先是循环空间的刻画.

例 7.14 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, $\varphi$ 的特征多项式和极小多项式分别为 $f(\lambda)$ 和 $m(\lambda)$ , 证明以下 4 个结论等价:

(1) $\varphi$ 的行列式因子组或不变因子组为 $1, \cdots, 1, f(\lambda)$ ;

(2) $\varphi$ 的初等因子组为 $P_{1}(\lambda)^{r_{1}}, P_{2}(\lambda)^{r_{2}}, \cdots, P_{k}(\lambda)^{r_{k}}$ , 其中 $P_{i}(\lambda)$ 是 $\mathbb{K}$ 上互异的首一不可约多项式, $r_{i} \geq 1, 1 \leq i \leq k$ ;

(3) $\varphi$ 的极小多项式 $m(\lambda)$ 等于特征多项式 $f(\lambda)$ ;

(4) V 是关于线性变换 $\varphi$ 的循环空间.

证明 (1) $\Leftrightarrow$ (2): 由不变因子和初等因子之间的相互转换即得.

(1) $\Leftrightarrow$ (3): 由极小多项式等于最大的不变因子, 以及所有不变因子的乘积等于特征多项式即得.

(1) $\Leftrightarrow$ (4): 若 V 是循环空间, 则由例 7.13 可知, $\varphi$ 在某组基下的表示矩阵是友阵 $C(g(\lambda))$ , 再由友阵的性质可知, $\varphi$ 的行列式因子组和不变因子组均为 $1, \cdots, 1, g(\lambda) = f(\lambda)$ . 若 $\varphi$ 的不变因子组为 $1, \cdots, 1, f(\lambda)$ , 则由有理标准型的几何意义可知, V 是循环空间. ☐

在 § 7.4 中, 我们可以看到循环空间是一类具有良好几何性质的空间. 下面是循环空间的两个典型例子.

例 7.15 设 n 阶矩阵 A 有 n 个不同的特征值, 求证: A 的特征多项式和极小多项式相等.

证法 1 设 A 的 n 个不同的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则由例 6.80 可知，特征多项式 $f(\lambda)$ 和极小多项式 $m(\lambda)$ 有相同的根（不计重数），因此 $f(\lambda) = m(\lambda) = (\lambda - \lambda_{1})(\lambda - \lambda_{2}) \cdots (\lambda - \lambda_{n})$ .

证法 2 由于 A 有 n 个不同的特征值, 故 A 相似于对角矩阵. 又因为相似矩阵有相同的特征多项式和极小多项式, 所以只要对对角矩阵证明此结论即可. 设 $A = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ , 则 $\lambda I_n - A = \text{diag}\{\lambda - \lambda_1, \lambda - \lambda_2, \cdots, \lambda - \lambda_n\}$ , 这是一个主对角元素两两互素的对角矩阵, 由例 7.9 以及数学归纳法可知其法式为 $\text{diag}\{1, \cdots, 1, (\lambda - \lambda_1)(\lambda - \lambda_2) \cdots (\lambda - \lambda_n)\}$ . 因此, A 的特征多项式和极小多项式相等. □

注 设特征值 $\lambda_{i}$ 对应的特征向量为 $\alpha_{i}$ ，则 $\{\alpha_{1},\cdots,\alpha_{n}\}$ 为 $C^{n}$ 的一组基。我们断言： $\alpha=\alpha_{1}+\cdots+\alpha_{n}$ 是 A 的循环空间 $C^{n}$ 的循环向量。事实上，由 $A^{k}\alpha=\lambda_{1}^{k}\alpha_{1}+\cdots+\lambda_{n}^{k}\alpha_{n}$ ，利用 Vandermonde 行列式容易证明 $\{\alpha,A\alpha,\cdots,A^{n-1}\alpha\}$ 是 $C^{n}$ 的一组基，从而 $\mathbb{C}^{n}=L(\alpha,A\alpha,\cdots,A^{n-1}\alpha)=C(A,\alpha)$ 为循环空间， $\alpha$ 是循环向量。

例 7.16 设数域 K 上的 n 阶矩阵 A 的特征多项式 $f(\lambda) = P_{1}(\lambda)P_{2}(\lambda)\cdots P_{k}(\lambda)$ ，其中 $P_{i}(\lambda)(1 \leq i \leq k)$ 是 K 上互异的首一不可约多项式。求证：A 的有理标准型只有一个 Frobenius 块，并且 A 在复数域上可对角化。

证明 设 A 的不变因子组为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{n}(\lambda)$ ，则有

$$
f (\lambda) = P _ {1} (\lambda) P _ {2} (\lambda) \dots P _ {k} (\lambda) = d _ {1} (\lambda) d _ {2} (\lambda) \dots d _ {n} (\lambda).
$$

由于 $P_{i}(\lambda)$ 是不可约多项式, 故存在某个 j, 使得 $P_{i}(\lambda) \mid d_{j}(\lambda)$ , 从而 $P_{i}(\lambda) \mid d_{n}(\lambda) (1 \leq i \leq k)$ . 由互素多项式的性质可知, $P_{1}(\lambda)P_{2}(\lambda)\cdots P_{k}(\lambda) \mid d_{n}(\lambda)$ , 因此只能是 $d_{1}(\lambda) = \cdots = d_{n-1}(\lambda) = 1$ , $d_{n}(\lambda) = f(\lambda)$ , 从而 A 的有理标准型只有一个 Frobenius 块. 由于特征多项式 $f(\lambda) = P_{1}(\lambda)P_{2}(\lambda)\cdots P_{k}(\lambda)$ 在 K 上无重因式, 故 $(f(\lambda), f'(\lambda)) = 1$ , 从而 $f(\lambda)$ 在复数域上无重根, 即 A 有 n 个不同的特征值, 于是 A 在复数域上可对角化. □

注 我们也可以利用例 7.14 和初等因子证明第一个结论。若利用不变因子在基域扩张下的不变性，则第一个结论也可由例 7.15 得到。若设 $\alpha_{i}$ 为线性方程组 $P_{i}(A)x=0$ 的非零解，则 $\alpha=\alpha_{1}+\cdots+\alpha_{k}$ 是 A 的循环空间 $K^{n}$ 的循环向量。这些结论的证明细节留给读者完成。

下面我们再给出有理标准型几何意义的 3 个应用, 分别是特征多项式是不可约多项式的刻画, 极小多项式是不可约多项式的刻画, 以及基于初等因子组的有理标准型.

例 7.17 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, $\varphi$ 的特征多项式为 $f(\lambda)$ , 证明以下 3 个结论等价:

(1) V 只有平凡的 $\varphi-$ 不变子空间;

(2) V 中任一非零向量都是循环向量, 使 V 成为循环空间;

(3) $f(\lambda)$ 是 K 上的不可约多项式.

证明 (1) $\Rightarrow$ (2): 任取 $V$ 中非零向量 $\alpha$ , 则循环子空间 $C(\varphi, \alpha)$ 是非零 $\varphi$ -不变子空间. 由于 $V$ 只有平凡的 $\varphi$ -不变子空间, 故 $C(\varphi, \alpha) = V$ , 即 $V$ 中任一非零向量都是循环向量, 使 $V$ 成为循环空间.

(2)⇒(3): 用反证法, 假设 $f(\lambda)=g(\lambda)h(\lambda)$ , 其中 $g(\lambda), h(\lambda)$ 是 $\mathbb{K}$ 上次数小于 $n$ 的首一多项式. 由 Cayley-Hamilton 定理可知 $\mathbf{0}=f(\varphi)=g(\varphi)h(\varphi)$ , 故 $g(\varphi), h(\varphi)$ 中至少有一个是奇异线性变换, 不妨设为 $g(\varphi)$ , 于是 $\operatorname{Ker} g(\varphi) \neq 0$ . 任取 $\operatorname{Ker} g(\varphi)$ 中的非零向量 $\alpha$ , 设 $\deg g(\lambda)=r$ , 则 $C(\varphi, \alpha)=L(\alpha, \varphi(\alpha), \cdots, \varphi^{r-1}(\alpha))$ , 其维数 $\leq r<n$ , 故 $C(\varphi, \alpha) \neq V$ , 这与 $V$ 中任一非零向量都是循环向量矛盾!

(3) $\Rightarrow$ (1): 用反证法, 假设存在非平凡的 $\varphi$ -不变子空间 $U$ , $\dim U = r$ , 则 $\varphi$ 在一组基下的表示矩阵为分块上三角矩阵 $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ , 其中 $A$ 是 $\varphi|_U$ 的表示矩阵. 于是特征多项式

$$
f (\lambda) = | \lambda I _ {V} - \varphi | = | \lambda I _ {n} - M | = | \lambda I _ {r} - A | \cdot | \lambda I _ {n - r} - B |
$$

是两个低次多项式的乘积, 这与 $f(\lambda)$ 的不可约性矛盾! $\square$ 

例 7.18 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, $\varphi$ 的极小多项式为 $m(\lambda)$ . 证明: $m(\lambda)$ 是 K 上的不可约多项式的充要条件是 V 的任一非零 $\varphi$ -不变子空间 U 必为如下形式:

$$
U = C (\varphi , \alpha_ {1}) \oplus C (\varphi , \alpha_ {2}) \oplus \dots \oplus C (\varphi , \alpha_ {k}),
$$

并且 $\varphi|_{C(\varphi,\alpha_{i})}$ 的极小多项式都是 $m(\lambda)$ . 此时, $\varphi|_{U}$ 的极小多项式也是 $m(\lambda)$ .

证明 必要性: 设 $\varphi|_{U}$ 的极小多项式为 $n(\lambda)$ , 则 $m(\varphi|_{U}) = m(\varphi)|_{U} = 0$ , 从而 $n(\lambda) \mid m(\lambda)$ . 因为 $m(\lambda)$ 不可约, 所以 $n(\lambda) = m(\lambda)$ . 又由于 $\varphi|_{U}$ 的所有不变因子都要整除 $m(\lambda)$ 且 $m(\lambda)$ 不可约, 故所有的非常数不变因子都等于 $m(\lambda)$ . 最后, 由有理标准型的几何意义即得 $U$ 的循环子空间直和分解.

充分性: 用反证法, 设 $m(\lambda) = g(\lambda)h(\lambda)$ , 其中 $g(\lambda), h(\lambda)$ 是 $\mathbb{K}$ 上次数小于 $m(\lambda)$ 次数的首一多项式, 则 $\mathbf{0} = m(\varphi) = g(\varphi)h(\varphi)$ , 故 $g(\varphi), h(\varphi)$ 中至少有一个是奇异线性变换, 不妨设为 $g(\varphi)$ , 于是 $\operatorname{Ker} g(\varphi) \neq 0$ . 任取 $\operatorname{Ker} g(\varphi)$ 中的非零向量 $\alpha$ , 得到循环子空间 $U = C(\varphi, \alpha)$ , 由 $g(\varphi)(\alpha) = 0$ 容易验证 $g(\varphi|_U) = g(\varphi)|_U = 0$ , 于是 $\varphi|_U$ 的极小多项式整除 $g(\lambda)$ , 从而其次数 $\leq \deg g(\lambda) < \deg m(\lambda)$ , 这与条件矛盾! $\square$ 

例 7.19 设数域 K 上的 n 阶矩阵 A 的初等因子组为 $P_{1}(\lambda)^{r_{1}}, P_{2}(\lambda)^{r_{2}}, \cdots, P_{k}(\lambda)^{r_{k}}$ ，证明：A 相似于分块对角矩阵

$$
\widetilde {\boldsymbol {F}} = \operatorname{diag} \left\{\boldsymbol {F} \left(P _ {1} (\lambda) ^ {r _ {1}}\right), \boldsymbol {F} \left(P _ {2} (\lambda) ^ {r _ {2}}\right), \dots , \boldsymbol {F} \left(P _ {k} (\lambda) ^ {r _ {k}}\right) \right\},
$$

$$
\widetilde {C} = \operatorname{diag} \left\{\boldsymbol {C} \left(P _ {1} (\lambda) ^ {r _ {1}}\right), \boldsymbol {C} \left(P _ {2} (\lambda) ^ {r _ {2}}\right), \dots , \boldsymbol {C} \left(P _ {k} (\lambda) ^ {r _ {k}}\right) \right\},
$$

称为 A 的基于初等因子组的有理标准型.

证明 由 Frobenius 块和友阵的性质可知, $\lambda I_{n} - \widetilde{F}$ 和 $\lambda I_{n} - \widetilde{C}$ 都相抵于

$$
\operatorname{diag} \left\{1, \dots , 1, P _ {1} (\lambda) ^ {r _ {1}}; 1, \dots , 1, P _ {2} (\lambda) ^ {r _ {2}}; \dots ; 1, \dots , 1, P _ {k} (\lambda) ^ {r _ {k}} \right\},
$$

再由例 7.10 可知, $\tilde{F}$ , $\tilde{C}$ 与 A 有相同的初等因子组, 从而它们相似. □

例 7.20 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, $\varphi$ 的初等因子组为 $P_{1}(\lambda)^{r_{1}}, P_{2}(\lambda)^{r_{2}}, \cdots, P_{k}(\lambda)^{r_{k}}$ . 证明: 存在 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{k} \in V$ , 使得

$$
V = C (\varphi , \alpha_ {1}) \oplus C (\varphi , \alpha_ {2}) \oplus \dots \oplus C (\varphi , \alpha_ {k}).
$$

证明 由例 7.19 和例 7.13 即得. □

### 2. 有理标准型在矩阵理论中的应用

不变因子组作为矩阵相似的全系不变量, 蕴含了矩阵的众多信息, 如特征多项式、极小多项式和矩阵的秩等. 因此, 有理标准型对于矩阵性质的研究有着重要的作用.

例 7.21 求证: 存在 n 阶实方阵 A, 满足 $A^{2} + 2A + 5I_{n} = O$ 的充要条件是 n 为偶数. 当 $n \geq 4$ 时, 验证满足上述条件的矩阵 A 有无限个不变子空间.

证明 必要性: 注意到 A 适合多项式 $g(\lambda)=\lambda^{2}+2\lambda+5$ , 故 A 的极小多项式 $m(\lambda)\mid g(\lambda)$ , 又因为 $g(\lambda)$ 在实数域上不可约, 故只能是 $m(\lambda)=g(\lambda)$ . 同理可证 A 所有的非常数不变因子都等于 $g(\lambda)$ , 从而 A 的不变因子组为 $1,\cdots,1,g(\lambda),\cdots,g(\lambda)$ (k 个 $g(\lambda)$ ). 因此 A 的特征多项式 $f(\lambda)=g(\lambda)^{k}$ , 于是 $n=\deg f(\lambda)=2k$ 为偶数.

充分性: 设 n = 2k 为偶数, 则由必要性的证明可知, A 的不变因子组为 1, $\cdots$ , 1, $g(\lambda)$ , $\cdots$ , $g(\lambda)$ (k 个 $g(\lambda)$ ). 可用有理标准型构造满足条件的矩阵:

$$
\pmb {A} = \mathrm{diag} \left\{\left( \begin{array}{c c} {{0}} & {{- 5}} \\ {{1}} & {{- 2}} \end{array} \right), \dots , \left( \begin{array}{c c} {{0}} & {{- 5}} \\ {{1}} & {{- 2}} \end{array} \right) \right\} (k \text {个二阶方阵}).
$$

当 $n \geq 4$ 时, 设 $\{e_1, e_2, e_3, e_4\}$ 是前 4 个标准单位列向量, 则容易验证循环子空间 $\{C_l := C(A, e_1 + l e_3) = L(e_1 + l e_3, e_2 + l e_4), l \in \mathbb{R}\}$ 是两两互异的 $A$ -不变子空间, 故 $A$ 有无限个不变子空间. $\square$ 

例 7.22 设 A 是数域 K 上的 n 阶方阵, 求证: A 的极小多项式的次数小于等于 r(A) + 1.

证明 设 A 的不变因子组为 $1, \cdots, 1, d_{1}(\lambda), \cdots, d_{k}(\lambda)$ ，则极小多项式 $m(\lambda) = d_{k}(\lambda)$ ，A 相似于 $\boldsymbol{F} = \text{diag}\{\boldsymbol{F}(d_{1}(\lambda)), \cdots, \boldsymbol{F}(d_{k}(\lambda))\}$ 。设 $\deg d_{k}(\lambda) = r$ ，若 $d_{k}(0) \neq 0$ ，则 $\boldsymbol{F}(d_{k}(\lambda))$ 非异；若 $d_{k}(0) = 0$ ，则 $\boldsymbol{F}(d_{k}(\lambda))$ 奇异且右上角的 r - 1 阶子式非零，从而秩为 r - 1。因此， $\mathrm{r}(\boldsymbol{A}) = \mathrm{r}(\boldsymbol{F}) \geq \mathrm{r}(\boldsymbol{F}(d_{k}(\lambda))) \geq r - 1 = \deg d_{k}(\lambda) - 1$ 。☐

例 7.23 设数域 K 上的 n 阶矩阵 A 的不变因子组是 $1, \cdots, 1, d_{1}(\lambda), \cdots, d_{k}(\lambda)$ ，其中 $d_{i}(\lambda)$ 是非常数首一多项式， $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ 。求证：对 A 的任一特征值 $\lambda_{0}$ ，

$$
\mathrm{r} \left(\lambda_ {0} \boldsymbol {I} _ {n} - \boldsymbol {A}\right) = n - \sum_ {i = 1} ^ {k} \delta_ {d _ {i} \left(\lambda_ {0}\right), 0},
$$

其中记号 $\delta_{a,b}$ 表示: 若 a=b, 取值为 1; 若 $a \neq b$ , 取值为 0.

证法1 设 $\deg d_i(\lambda) = r_i$ ，则 $\pmb{A}$ 相似于 $F = \mathrm{diag}\{F(d_1(\lambda)), \dots, F(d_k(\lambda))\}$ ，且 $|\lambda_0 I_{r_i} - F(d_i(\lambda))| = d_i(\lambda_0)$ . 若 $d_i(\lambda_0) \neq 0$ ，则 $\lambda_0 I_{r_i} - F(d_i(\lambda))$ 非异；若 $d_i(\lambda_0) = 0$ 则 $\lambda_0\pmb{I}_{r_i} - \pmb{F}(d_i(\lambda))$ 奇异且右上角的 $r_i - 1$ 阶子式非零，从而秩为 $r_i - 1$ 因此，

$$
\begin{array}{l} \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} _ {n} - \boldsymbol {A}\right) = \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} _ {n} - \boldsymbol {F}\right) = \sum_ {i = 1} ^ {k} \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} _ {r _ {i}} - \boldsymbol {F} \left(d _ {i} (\lambda)\right)\right) \\ = \sum_ {i = 1} ^ {k} \left(r _ {i} - \delta_ {d _ {i} \left(\lambda_ {0}\right), 0}\right) = n - \sum_ {i = 1} ^ {k} \delta_ {d _ {i} \left(\lambda_ {0}\right), 0}. \\ \end{array}
$$

证法 2 由已知存在可逆 $\lambda-$ 矩阵 $P(\lambda), Q(\lambda)$ ，使得

$$
\boldsymbol {P} (\lambda) \left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}\right) \boldsymbol {Q} (\lambda) = \operatorname{diag} \{1, \dots , 1, d _ {1} (\lambda), \dots , d _ {k} (\lambda) \}.
$$

在上式中令 $\lambda = \lambda_{0}$ ，注意到 $P(\lambda_{0}), Q(\lambda_{0})$ 是 K 上的可逆矩阵，故 $\lambda_{0}I_{n} - A$ 相抵于 $\mathrm{diag}\{1, \cdots, 1, d_{1}(\lambda_{0}), \cdots, d_{k}(\lambda_{0})\}$ ，于是 $r(\lambda_{0}I_{n} - A)$ 等于 n 减去等于零的 $d_{i}(\lambda_{0})$ 的个数，从而结论得证。☐

例 7.24 设 A 是数域 K 上的 n 阶矩阵, 求证: 若 $\operatorname{tr}(A)=0$ , 则 A 相似于一个 K 上主对角元全为零的矩阵.

证明 对阶数进行归纳. 当 $n = 1$ 时, $\mathbf{A} = \mathbf{O}$ , 结论显然成立. 设阶数小于 $n$ 时结论成立, 现证 $n$ 阶的情形. 由于题目的条件和结论在相似关系下不改变, 故不妨从一开始就假设 $\mathbf{A}$ 是有理标准型

$$
\boldsymbol {F} = \operatorname{diag} \left\{\boldsymbol {F} \left(d _ {1} (\lambda)\right), \dots , \boldsymbol {F} \left(d _ {k} (\lambda)\right) \right\},
$$

其中 $d_{i}(\lambda)$ 是 $\mathbf{A}$ 的非常数不变因子, $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ , $\deg d_{i}(\lambda) = r_{i}$ . 若 $r_{i}$ 都为 1, 则 $d_{1}(\lambda) = \cdots = d_{n}(\lambda) = \lambda - c$ , 从而 $\mathbf{A} = c\mathbf{I}_{n}$ . 又 $\operatorname{tr}(\mathbf{A}) = 0$ , 故 $c = 0$ , 从而 $\mathbf{A} = \mathbf{O}$ , 结论成立. 以下假设存在某个 $r_{i} > 1$ , 将第 (1,1) 分块与第 $(i, i)$ 分块对换, 这是一个相似变换, 此时矩阵的第 (1,1) 元为零, 故不妨设 $\mathbf{A}$ 的第 (1,1) 元为零. 注意到矩阵 $\mathbf{A} = \begin{pmatrix} 0 & \alpha' \\ \beta & B \end{pmatrix}$ , 其中 $\alpha, \beta \in \mathbb{K}^{n-1}$ , $\mathbf{B} \in M_{n-1}(\mathbb{K})$ , $\operatorname{tr}(\mathbf{B}) = 0$ . 由归纳假设, 存在 $\mathbb{K}$ 上的 $n-1$ 阶非异阵 $\mathbf{Q}$ , 使得 $Q^{-1}BQ$ 的主对角元全为零, 令 $\mathbf{P} = \begin{pmatrix} 1 & O \\ O & Q \end{pmatrix}$ 为 $\mathbb{K}$ 上的 $n$ 阶非异阵, 则 $P^{-1}AP = \begin{pmatrix} 0 & \alpha'Q \\ Q^{-1}\beta & Q^{-1}BQ \end{pmatrix}$ 的主对角元全为零, 结论得证. □

例 7.25 设 C 是数域 K 上的 n 阶矩阵, 求证: 存在 K 上的 n 阶矩阵 A, B, 使得 AB - BA = C 的充要条件是 $\mathrm{tr}(C) = 0$ .

证明 必要性由矩阵迹的线性和交换性即得, 下证充分性. 由于题目的条件和结论在同时相似变换 $A \mapsto P^{-1}AP$ , $B \mapsto P^{-1}BP$ , $C \mapsto P^{-1}CP$ 下不改变, 故由例 7.24 不妨从一开始就假设 $C = (c_{ij})$ 的主对角元 $c_{ii} = 0 (1 \leq i \leq n)$ . 取定 $A = \operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ 为 $\mathbb{K}$ 上的主对角元互异的对角矩阵. 设 $B = (x_{ij})$ , 则 $AB - BA = C$ 等价于方程 $\lambda_i x_{ij} - \lambda_j x_{ij} = c_{ij}$ . 当 $i = j$ 时, 上式恒成立, 故 $x_{ii}$ 可任取. 当 $i \neq j$ 时, $x_{ij} = \frac{c_{ij}}{\lambda_i - \lambda_j}$ 被唯一确定. 因此, 一定存在 $\mathbb{K}$ 上的矩阵 $A, B$ , 使得 $AB - BA = C$ 成立. $\square$ 

## § 7.4 乘法交换性诱导的多项式表示

设 A 是数域 K 上的 n 阶矩阵, 定义 $\mathbb{K}[A] = \{f(A) \mid f(x) \in \mathbb{K}[x]\}$ 为 A 的多项式全体构成的线性空间, $C(A) = \{B \in M_n(\mathbb{K}) \mid AB = BA\}$ 为与 A 乘法可交换的 n 阶矩阵全体构成的线性空间. 由于 A 与任意的 $f(A)$ 乘法可交换, 故有 $\mathbb{K}[A] \subseteq C(A)$ . 但上述包含关系一般并不相等, 例如, $K[I_n]$ 为纯量矩阵全体, 但 $C(I_n) = M_n(\mathbb{K})$ . 因此可以自然地问: 当 A 满足怎样的条件时, $C(A) = \mathbb{K}[A]$ 成立呢? 换言之, 当 A 满足怎样的条件时, 对任一与 A 乘法可交换的 B, 都存在 $f(x) \in \mathbb{K}[x]$ , 使得 $B = f(A)$ 呢?

本节我们将利用循环空间和循环向量的几何性质来证明: $C(A) = \mathbb{K}[A]$ 成立的充要条件是 $A$ 的极小多项式等于其特征多项式. 此时, 线性空间 $C(A)$ 的一组基为 $\{I_n, A, \cdots, A^{n-1}\}$ . 由上述结论能得到许多有趣的应用. 另外, 我们还将给出分块多项式表示及其应用等.

例 7.26 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换，则对 V 上任一与 $\varphi$ 乘法可交换的线性变换 $\psi$ ，都存在不超过 n-1 次的多项式 $g(x) \in \mathbb{K}[x]$ ，使得 $\psi = g(\varphi)$ 成立的充要条件是 $\varphi$ 的极小多项式等于其特征多项式.

证明 先证充分性. 设 $\varphi$ 的极小多项式等于其特征多项式 $f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n$ , 则 $\varphi$ 只有一个非常数不变因子. 由有理标准型理论, 存在 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为友阵

$$
\boldsymbol {C} (f (\lambda)) = \left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & - a _ {n} \\ 1 & 0 & \dots & 0 & - a _ {n - 1} \\ 0 & 1 & \dots & 0 & - a _ {n - 2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & - a _ {1} \end{array} \right),
$$

即有

$$
\varphi \left(e _ {1}\right) = e _ {2}, \varphi \left(e _ {2}\right) = e _ {3}, \dots , \varphi \left(e _ {n - 1}\right) = e _ {n}, \varphi \left(e _ {n}\right) = - a _ {n} e _ {1} - a _ {n - 1} e _ {2} - \dots - a _ {1} e _ {n}.
$$

任取 $V$ 上满足 $\varphi \psi = \psi \varphi$ 的线性变换 $\psi$ , 设

$$
\psi \left(\boldsymbol {e} _ {1}\right) = b _ {n} \boldsymbol {e} _ {1} + b _ {n - 1} \boldsymbol {e} _ {2} + \dots + b _ {1} \boldsymbol {e} _ {n}, \tag {7.7}
$$

令 $g(x) = b_{1}x^{n-1} + \cdots + b_{n-1}x + b_{n}$ ，我们来证明： $\psi = g(\varphi)$ 。首先由 $e_{k} = \varphi^{k-1}(e_{1}) (k \geq 2)$ 以及 (7.7) 式可知 $\psi(e_{1}) = g(\varphi)(e_{1})$ 成立。其次由 $\varphi, \psi$ 乘法可交换，故对任意的 $e_{k} (k \geq 2)$ 有

$$
\begin{array}{l} \psi \left(e _ {k}\right) = \psi \left(\varphi^ {k - 1} \left(e _ {1}\right)\right) = \varphi^ {k - 1} \left(\psi \left(e _ {1}\right)\right) = \varphi^ {k - 1} \left(g (\varphi) \left(e _ {1}\right)\right) \\ = g (\varphi) \left(\varphi^ {k - 1} \left(e _ {1}\right)\right) = g (\varphi) \left(e _ {k}\right). \\ \end{array}
$$

最后, 注意到 $\psi$ 与 $g(\varphi)$ 在基向量 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 上的取值都相等, 故由线性扩张定理可知 $\psi = g(\varphi)$ 成立.

再证必要性. 设 $\varphi$ 的不变因子组为 $1, \cdots, 1, d_{1}(\lambda), \cdots, d_{k}(\lambda)$ ，其中 $d_{i}(\lambda)$ 为非常数首一多项式， $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ ，则 $\varphi$ 的有理标准型 F = diag $\{F_{1}, F_{2}, \cdots, F_{k}\}$ ，其中 $F_{i} = F(d_{i}(\lambda))$ 为 $n_{i}$ 阶矩阵. 若 $\varphi$ 的极小多项式不等于其特征多项式，则 $k \geq 2$ . 构造分块对角矩阵

$$
\boldsymbol {B} = \operatorname{diag} \left\{\boldsymbol {I} _ {n _ {1}}, \boldsymbol {O} _ {n _ {2}}, \dots , \boldsymbol {O} _ {n _ {k}} \right\},
$$

显然 $BF = FB$ . 用反证法, 若存在多项式 $g(x)$ , 使得 $B = g(F)$ , 即

$$
\boldsymbol {B} = \operatorname{diag} \left\{g \left(\boldsymbol {F} _ {1}\right), g \left(\boldsymbol {F} _ {2}\right), \dots , g \left(\boldsymbol {F} _ {k}\right) \right\},
$$

则 $g(\pmb{F}_1) = \pmb{I}_{n_1}, g(\pmb{F}_i) = \pmb{O} (i \geq 2)$ . 由于 $d_k(\lambda)$ 是 $\pmb{F}_k$ 的极小多项式（也是特征多项式），故 $d_k(\lambda) \mid g(\lambda)$ ，从而 $d_1(\lambda) \mid g(\lambda)$ ，于是 $g(\pmb{F}_1) = \pmb{O}$ ，矛盾！因此 $\pmb{B}$ 不能表示为 $\pmb{F}$ 的多项式，从而由 $\pmb{B}$ 定义的线性变换 $\psi$ 符合题目要求. □

注 本题充分性证明的关键点是: $V = C(\varphi, e_1)$ 是一个循环空间, 循环向量 $e_1$ 经过 $\varphi$ 的 $n-1$ 次作用, 生成了 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$ . 因此, 只要验证了 $\psi$ 和 $g(\varphi)$ 在循环向量 $e_1$ 上的取值相同, 那么由 $\varphi, \psi$ 的乘法交换性可知 $\psi$ 和 $g(\varphi)$ 在上述基上的取值也相同, 从而它们必相等. 另外, 例 7.14 证明了: 线性变换 $\varphi$ 的极小多项式等于其特征多项式当且仅当 $V$ 是关于 $\varphi$ 的循环空间. 因此, 作为本题的推论, 我们给出了循环空间的另一刻画.

推论 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, $\mathbb{K}[\varphi] = \{f(\varphi) \mid f(x) \in \mathbb{K}[x]\}$ , $C(\varphi) = \{\psi \in \mathcal{L}(V) \mid \varphi\psi = \psi\varphi\}$ , 则 V 是关于 $\varphi$ 的循环空间的充要条件是 $C(\varphi) = \mathbb{K}[\varphi]$ . 此时, $C(\varphi)$ 的一组基为 $\{I_V, \varphi, \cdots, \varphi^{n-1}\}$ .

§ 7.3 中给出了很多循环空间的例子, 故由例 7.26 可得如下几个应用.

例 6.63 设 A, B 是 n 阶矩阵, A 有 n 个不同的特征值, 并且 AB = BA, 求证: 存在次数不超过 n - 1 的多项式 $f(x)$ , 使得 $B = f(A)$ .

证法2 由例7.15可知， $\mathbb{C}^n$ 是关于 $\pmb{A}$ 的循环空间，再由例7.26即得结论.□

例 7.27 设数域 K 上的 n 阶矩阵 A 的特征多项式 $f(\lambda) = P_{1}(\lambda)P_{2}(\lambda)\cdots P_{k}(\lambda)$ ，其中 $P_{i}(\lambda)(1 \leq i \leq k)$ 是 K 上互异的首一不可约多项式。设 K 上的 n 阶矩阵 B 满足 AB = BA，求证：存在 K 上次数不超过 n - 1 的多项式 $f(x)$ ，使得 $B = f(A)$ 。

证明 由例 7.16 可知, $\mathbb{K}^n$ 是关于 $A$ 的循环空间, 再由例 7.26 即得结论. $\square$ 

例 7.28 设 A 是数域 K 上的 2 阶矩阵, 试求 $C(A) = \{X \in M_{2}(\mathbb{K}) \mid AX = X A\}$ .

证明 若 $\pmb{A}$ 的极小多项式等于特征多项式, 则由例7.26可知 $C(A) = \mathbb{K}[A]$ . 若极小多项式不等于特征多项式, 则极小多项式必为一次多项式 $x - c$ , 从而 $A = cI_2$ , 于是 $C(A) = M_2(\mathbb{K})$ . $\square$ 

例 7.29 设 $J = J_{n}(\lambda_{0})$ 是特征值为 $\lambda_{0}$ 的 n 阶 Jordan 块, 求证: 和 J 乘法可交换的 n 阶矩阵必可表示为 J 的次数不超过 n-1 的多项式.

证明 根据 Jordan 标准型的几何意义, $\mathbb{C}^n = C(J - \lambda_0 I_n, e_n)$ 是关于线性变换 $J - \lambda_0 I_n$ 的循环空间, 循环向量是标准单位列向量中的最后一个 $e_n = (0, \cdots, 0, 1)'$ , 再由例 7.26 即得结论. 当然也可以通过代数方法直接进行证明. 设 $A$ 和 $J$ 可交换, 注意到 $J = \lambda_0 I_n + J_0$ , 其中 $J_0 = J_n(0)$ 是特征值为零的 Jordan 块, 故 $A, J$ 乘法可交换当且仅当 $A, J_0$ 乘法可交换. 经计算得到 $A$ 必为下列形状的上三角矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ & a _ {1} & \ddots & \vdots \\ & & \ddots & a _ {2} \\ & & & a _ {1} \end{array} \right),
$$

于是

$$
\boldsymbol {A} = a _ {1} \boldsymbol {I} _ {n} + a _ {2} \boldsymbol {J} _ {0} + \dots + a _ {n} \boldsymbol {J} _ {0} ^ {n - 1} = a _ {1} \boldsymbol {I} _ {n} + a _ {2} (\boldsymbol {J} - \lambda_ {0} \boldsymbol {I} _ {n}) + \dots + a _ {n} (\boldsymbol {J} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {n - 1}
$$

可表示为 J 的次数不超过 n-1 的多项式. □

例7.30 设数域 $\mathbb{K}$ 上的 $n$ 阶矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a _ {1} & b _ {1} & 0 & \dots & 0 \\ & \ddots & \ddots & \ddots & \vdots \\ & & \ddots & \ddots & 0 \\ & * & & \ddots & b _ {n - 1} \\ & & & & a _ {n} \end{array} \right),
$$

其中 $b_{1},\cdots,b_{n-1}$ 均不为零. 记 $C(\boldsymbol{A})=\{\boldsymbol{X}\in M_{n}(\mathbb{K})\mid\boldsymbol{A}\boldsymbol{X}=\boldsymbol{X}\boldsymbol{A}\}$ ，证明：线性空间 $C(\boldsymbol{A})$ 的一组基为 $\{I_{n},\boldsymbol{A},\cdots,\boldsymbol{A}^{n-1}\}$ .

证明 题目中的 A 是类下三角矩阵, 上次对角元全部非零, 比如 Frobenius 块、Jordan 块和三对角矩阵都满足这样的特点. 考虑特征矩阵 $\lambda I_{n} - A$ 的前 n - 1 行、后 n - 1 列构成的下三角行列式, 其值为 $(-1)^{n-1} b_{1} \cdots b_{n-1} \neq 0$ , 故 A 的行列式因子组为 $1, \cdots, 1, f(\lambda)$ , 从而 $K^{n}$ 是关于 A 的循环空间, 再由例 7.26 即得结论. □

下面的命题告诉我们, 在什么条件下可以将分块对角矩阵的多项式表示问题归结为对每一分块的讨论.

例7.31 设有 $n$ 阶分块对角矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c} \boldsymbol {A} _ {1} & & \\ & \ddots & \\ & & \boldsymbol {A} _ {k} \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c} \boldsymbol {B} _ {1} & & \\ & \ddots & \\ & & \boldsymbol {B} _ {k} \end{array} \right),
$$

其中 $A_{i}$ 和 $B_{i}$ 是同阶方阵. 设 $A_{i}$ 适合非零多项式 $g_{i}(x)$ ，且 $g_{i}(x)(1 \leq i \leq k)$ 两两互素. 求证: 若对每个 i，存在多项式 $f_{i}(x)$ ，使得 $B_{i} = f_{i}(A_{i})$ ，则必存在次数不超过 n - 1 的多项式 $f(x)$ ，使得 $B = f(A)$ .

证明 因为 $g_{i}(x)$ 两两互素, 故由中国剩余定理 (例5.12) 可知, 存在多项式 $h(x)$ 满足 $h(x) = g_{i}(x)q_{i}(x) + f_{i}(x)$ . 将 $x = A_{i}$ 代入上式, 可得 $h(A_{i}) = f_{i}(A_{i}) = B_{i}$ , 从而

$$
h (\boldsymbol {A}) = \operatorname{diag} \left\{h \left(\boldsymbol {A} _ {1}\right), \dots , h \left(\boldsymbol {A} _ {k}\right) \right\} = \operatorname{diag} \left\{\boldsymbol {B} _ {1}, \dots , \boldsymbol {B} _ {k} \right\} = \boldsymbol {B}.
$$

设 A 的特征多项式为 $g(x)$ ，作带余除法 $h(x)=g(x)q(x)+f(x)$ ，其中 $\deg f(x)<n$ .
将 x = A 代入上式，则由 Cayley-Hamilton 定理可得 $B = h(A) = f(A)$ . □

对适合 $AB = BA$ 的矩阵, 由于 $AB = BA$ 当且仅当 $(P^{-1}AP)(P^{-1}BP) = (P^{-1}BP)(P^{-1}AP)$ , 因此我们可以通过同时相似变换, 把问题归结为其中一个矩阵是相似标准型 (或分块对角型矩阵) 的情形来证明. 下面的几个例子可供读者参考.

例 7.32 设 n 阶矩阵 A 的秩等于 n-1, B 是同阶非零矩阵且 AB = BA = O, 求证: 存在次数不超过 n-1 的多项式 $f(x)$ , 使得 $B = f(A)$ .

证法1 由于题目的条件和结论在同时相似变换: $A \mapsto P^{-1}AP$ , $B \mapsto P^{-1}BP$ 下保持不变, 故不妨从一开始就假设 $A$ 为 Jordan 标准型. 因为 $r(A) = n - 1$ , 故 $A$ 关于特征值 0 的几何重数为 1, 从而属于特征值 0 的 Jordan 块只有一个, 记为 $J_0$ ; 将属于其他非零特征值的 Jordan 块合在一起, 记为 $J_1$ , 于是 $A = \text{diag}\{J_0, J_1\}$ . 设 $B = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ 为相应的分块, 则由 $AB = BA = O$ 可得 $B_{12}, B_{21}, B_{22}$ 都是零矩阵, 于是 $B = \text{diag}\{B_{11}, O\}$ 且 $J_0B_{11} = B_{11}J_0$ . 由于 $J_0$ 是幂零矩阵而 $J_1$ 是可逆矩阵, 故 $J_0$ 的特征多项式 $g_0(x)$ 和 $J_1$ 的特征多项式 $g_1(x)$ 互素; 又由例 7.29 可知, 存在多项式 $f_0(x)$ , 使得 $B_{11} = f_0(J_0)$ ; 再取 $f_1(x) = 0$ , 则 $O = f_1(J_1)$ ; 最后由例 7.31 即得结论.

证法2 也可以用线性方程组的求解理论和极小多项式来做. 由于 $\mathbf{r}(\mathbf{A}) = n - 1$ , 故线性方程组 $Ax = 0$ 解空间的维数为 1, 再由 $AB = O$ 可知, $B$ 的列向量都是解空间的向量, 从而它们成比例, 于是 $\mathrm{r}(B) = 1$ . 设 $B = \alpha \beta'$ , 其中 $\alpha, \beta$ 为 $n$ 维非零列向量, 由 $AB = O$ 可推出 $A\alpha = 0$ , 即 $\alpha$ 是线性方程组 $Ax = 0$ 的基础解系. 同理, 由 $BA = O$ 可推出 $\beta$ 是 $A'x = 0$ 的基础解系. 设 $m(x)$ 是 $A$ 的极小多项式, 由于 $A$ 不是可逆矩阵, 故 $m(x)$ 的常数项等于零, 即 $m(x) = xg(x)$ , 于是 $Ag(A) = O$ 但 $g(A) \neq O$ . 由类似于矩阵 $B$ 的讨论可得, $g(A)$ 也可以写为 $g(A) = \eta \xi'$ , 其中 $\eta$ 是 $Ax = 0$ 的解, 故 $\eta = k\alpha$ . 同理可得 $\xi = t\beta$ , 于是 $g(A) = ktB$ , 从而 $B = \frac{1}{kt} g(A)$ 可表示为 $A$ 的次数不超过 $n - 1$ 的多项式. □

例 6.87 设 A 为 n 阶矩阵, 求证: 伴随矩阵 $A^{*}$ 可表示为 A 的次数不超过 n-1 的多项式.

证法 2 若 $\mathrm{r}(\boldsymbol{A}) = n$ ，则由 Cayley-Hamilton 定理易证结论成立；若 $\mathrm{r}(\boldsymbol{A}) \leq n - 2$ ，则 $A^{*} = O$ ，结论显然成立；若 $\mathrm{r}(\boldsymbol{A}) = n - 1$ ，则 $A^{*} \neq O$ 且 $AA^{*} = A^{*}A = O$ ，由例 7.32 可知结论也成立。☐

例 7.33 (Jordan-Chevalley 分解定理) 设 A 是 n 阶复矩阵, 证明: A 可分解为

$$
\boldsymbol {A} = \boldsymbol {B} + \boldsymbol {C},
$$

其中 B 是可对角化矩阵, C 是幂零矩阵且 BC = CB, 并且这种分解是唯一的.

证明 设 A 的 Jordan 标准型为

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \boldsymbol {J} = \left( \begin{array}{c c c} \boldsymbol {J} _ {1} & & \\ & \ddots & \\ & & \boldsymbol {J} _ {k} \end{array} \right),
$$

其中 $\lambda_{1},\cdots,\lambda_{k}$ 是 A 的全体不同特征值, $J_{i}$ 是属于特征值 $\lambda_{i}$ 的所有 Jordan 块拼成的分块对角矩阵. 注意到 $J_{i}=\lambda_{i}I+N_{i}$ , 其中 $N_{i}$ 是幂零矩阵, 故 J 可以分解为一个对角矩阵 $M=\mathrm{diag}\{\lambda_{1}I,\cdots,\lambda_{k}I\}$ 与一个幂零矩阵 $N=\mathrm{diag}\{N_{1},\cdots,N_{k}\}$ 之和且它们乘法可交换. 于是 A 可以分解为 $A=B+C$ , 其中 $B=PMP^{-1}$ 相似于对角矩阵, $C=PNP^{-1}$ 是幂零矩阵且 BC=CB. 这时显然有 AB=BA, AC=CA.

为了证明唯一性, 我们首先证明存在多项式 $f(\lambda)$ , 使得 $\boldsymbol{B} = f(\boldsymbol{A})$ . 由于 $\boldsymbol{N}_i$ 是幂零矩阵, 故 $\boldsymbol{J}_i$ 适合多项式 $(\lambda - \lambda_i)^n$ , 显然 $(\lambda - \lambda_1)^n, \cdots, (\lambda - \lambda_k)^n$ 两两互素. 设 $f_i(\lambda) = \lambda_i$ 为常数多项式, 则 $f_i(J_i) = \lambda_i I$ . 由例7.31可知, 存在多项式 $f(\lambda)$ , 使得 $M = f(J)$ , 于是 $B = Pf(J)P^{-1} = f(PJP^{-1}) = f(A)$ . 注意到 $C = A - B$ , 故 $C$ 也是 $A$ 的多项式.

设另有满足条件的分解 $A = B_{1} + C_{1}$ 且 $B_{1}C_{1} = C_{1}B_{1}$ , 则 $AB_{1} = (B_{1} + C_{1})B_{1} = B_{1}(B_{1} + C_{1}) = B_{1}A$ , 即 $A$ 和 $B_{1}$ 乘法可交换, 同理可证 $A$ 和 $C_{1}$ 乘法可交换. 因为 $B, C$ 都是 $A$ 的多项式, 所以 $B$ 和 $B_{1}$ 乘法可交换, $C$ 和 $C_{1}$ 乘法可交换. 由例 6.41 可知, $B$ 和 $B_{1}$ 可同时对角化, 即存在可逆矩阵 $Q$ , 使得 $Q^{-1}BQ$ 和 $Q^{-1}B_{1}Q$ 都是对角矩阵, 因此 $B - B_{1}$ 相似于对角矩阵. 另一方面, 从 $C$ 和 $C_{1}$ 的乘法可交换性和幂零性容易推出 $C_{1} - C$ 也是幂零矩阵. 事实上, 若 $C^{s} = O, C_{1}^{t} = O$ , 则 $(C_{1} - C)^{s + t} = O$ . 注意到 $B - B_{1} = C_{1} - C$ , 故 $B - B_{1} = O, C_{1} - C = O$ , 即 $B_{1} = B, C_{1} = C$ . $\square$ 

## § 7.5 可对角化的判定 (二)

我们曾经在 §6.5 中讨论过矩阵可对角化的若干判定准则, 现在我们又多了两个判定准则: $n$ 阶复矩阵 $\mathbf{A}$ 可对角化当且仅当它的极小多项式无重根, 当且仅当它的初等因子都是一次多项式 (等价于 Jordan 块都是一阶矩阵). 下面我们通过一些典型例题来看一看这两个判定准则的应用.

### 5. 极小多项式无重根

例 6.66 设 n 阶矩阵 A 适合首一多项式 $g(x)$ ，并且 $g(x)$ 在复数域中无重根，证明：A 可对角化.

证法2 设 $m(x)$ 为 $\pmb{A}$ 的极小多项式, 则 $m(x) \mid g(x)$ . 由于 $g(x)$ 无重根, 故 $m(x)$ 也无重根, 从而 $\pmb{A}$ 可对角化. $\square$ 

例 7.34 求适合下列条件的 n 阶矩阵 A 的 Jordan 标准型:

(1) $A^{2}=A;$ 

(2) $A^{k}=I_{n}.$ 

解 (1) 矩阵 $\mathbf{A}$ 适合 $g(x) = x^{2} - x$ 且 $g(x)$ 无重根, 故由例6.66可知 $\mathbf{A}$ 可对角化, 并且 $\mathbf{A}$ 的特征值也适合 $g(x)$ , 故只能是0,1. 因此, $\mathbf{A}$ 的Jordan标准型为 $\mathrm{diag}\{1,\dots ,1,0\dots ,0\}$ , 其中有 $\mathrm{r}(\mathbf{A})$ 个1.

(2) 矩阵 A 适合 $g(x)=x^{k}-1$ 且 $g(x)$ 无重根, 故由例 6.66 可知 A 可对角化, 并且 A 的特征值也适合 $g(x)$ , 故只能是 1 的 k 次方根. 因此, A 的 Jordan 标准型为 $\mathrm{diag}\{\omega_{1},\omega_{2},\cdots,\omega_{n}\}$ , 其中 $\omega_{i}^{k}=1(1\leq i\leq n)$ . □

例 7.35 设 A 是有理数域上的 n 阶矩阵, 其特征多项式的所有不可约因式为 $\lambda^{2} + \lambda + 1, \lambda^{2} - 2$ . 又 A 的极小多项式是四次多项式, 求证: A 在复数域上可对角化.

证明 因为 $\mathbf{A}$ 的极小多项式 $m(\lambda)$ 和特征多项式 $f(\lambda)$ 有相同的根 (不计重数), 且 $\deg m(\lambda) = 4$ , 所以 $m(\lambda) = (\lambda^2 + \lambda + 1)(\lambda^2 - 2)$ . 注意到 $m(\lambda)$ 在复数域内无重根, 故 $\mathbf{A}$ 在复数域上可对角化. $\square$ 

例 7.36 设 $\varphi$ 是复线性空间 V 上的线性变换, $V_{0}$ 是 $\varphi$ 的不变子空间. 求证: 若 $\varphi$ 可对角化, 则 $\varphi$ 在 $V_{0}$ 上的限制变换和 $\varphi$ 在 $V/V_{0}$ 上的诱导变换都可对角化.

证法1 由例6.71的几何版本可知，限制变换 $\varphi|_{V_0}$ 和诱导变换 $\overline{\varphi}$ 都有完全的特征向量系，从而可对角化.

证法2 设线性变换 $\varphi$ 、限制变换 $\varphi|_{V_0}$ 和诱导变换 $\overline{\varphi}$ 的极小多项式分别为 $m(\lambda)$ , $g(\lambda)$ 和 $h(\lambda)$ , 则容易验证 $\varphi|_{V_0}$ 和 $\overline{\varphi}$ 都适合多项式 $m(\lambda)$ , 从而 $g(\lambda) \mid m(\lambda)$ 且 $h(\lambda) \mid m(\lambda)$ . 由于 $\varphi$ 可对角化, 故 $m(\lambda)$ 无重根, 从而 $g(\lambda), h(\lambda)$ 也无重根, 于是 $\varphi|_{V_0}$ 和 $\overline{\varphi}$ 都可对角化. $\square$ 

例 7.37 设 $\varphi$ 是 n 维复线性空间 V 上的线性变换, 求证: $\varphi$ 可对角化的充要条件是对任一 $\varphi$ -不变子空间 U, 均存在 $\varphi$ -不变子空间 W, 使得 $V = U \oplus W$ . 这样的 W 称为 U 的 $\varphi$ -不变补空间.

证明 先证充分性. 假设 $\varphi$ 不能对角化, 则 $\varphi$ 只有 $m$ 个线性无关的特征向量, 其中 $1 \leq m < n$ . 设由这些特征向量张成的子空间为 $U$ , 由条件可知, $U$ 存在非零的 $\varphi$ -不变补空间 $W$ . 考虑限制变换 $\varphi|_{W}$ , 它在 $W$ 上必存在特征值和特征向量, 这些也是 $\varphi$ 的特征值和特征向量, 于是 $\varphi$ 有多于 $m$ 个线性无关的特征向量, 矛盾!

再证必要性. 设 $\varphi$ 可对角化, $U$ 是 $\varphi$ -不变子空间, 则由例 7.36 可知, $\varphi|_{U}$ 仍可对角化, 故存在 $U$ 的一组基 $\alpha_{1}, \cdots, \alpha_{r}$ , 它们是 $\varphi|_{U}$ , 也是 $\varphi$ 的线性无关的特征向量. 又因为 $\varphi$ 可对角化, 故存在 $n$ 个线性无关的特征向量 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 再由基扩张定理可知, 可从这组基中取出 $n - r$ 个向量和 $\alpha_{1}, \cdots, \alpha_{r}$ 一起组成 $V$ 的一组基. 设这 $n - r$ 个向量张成的子空间为 $W$ , 则 $W$ 是 $U$ 的 $\varphi$ -不变补空间. □

例 6.72 设 A 为 $m \times n$ 矩阵, B 为 $n \times m$ 矩阵, 又 $|BA| \neq 0$ , 求证: AB 可对角化的充要条件是 BA 可对角化.

证法2 设 $AB$ 的极小多项式为 $g(\lambda)$ , $BA$ 的极小多项式为 $h(\lambda)$ . 因为 $BA$ 是可逆矩阵, 故 0 不是 $BA$ 的特征值, 从而 0 也不是 $h(\lambda)$ 的根 (参考例 6.80). 注意到

$$
(\boldsymbol {A} \boldsymbol {B}) ^ {m} = \boldsymbol {A} (\boldsymbol {B} \boldsymbol {A}) ^ {m - 1} \boldsymbol {B}, (\boldsymbol {B} \boldsymbol {A}) ^ {m} = \boldsymbol {B} (\boldsymbol {A} \boldsymbol {B}) ^ {m - 1} \boldsymbol {A}, m \geq 1,
$$

故不难验证 $g(B A) B A = B g(A B) A = O, h (A B) A B = A h (B A) B = O$ , 从而由极小多项式的基本性质可知, $h(\lambda) \mid g(\lambda) \lambda, g(\lambda) \mid h(\lambda) \lambda$ . 若 $A B$ 可对角化, 则 $g(\lambda)$ 无重根, 从而 $g(\lambda) \lambda$ 无非零重根, 于是 $h(\lambda)$ 无重根, 故 $B A$ 也可对角化. 反之, 若 $B A$ 可对角化, 则 $h(\lambda)$ 无重根, 从而 $h(\lambda) \lambda$ 也无重根, 于是 $g(\lambda)$ 无重根, 故 $A B$ 也可对角化. $\square$ 

设矩阵 A 的全体不同特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ ，定义

$$
g (\lambda) = \left(\lambda - \lambda_ {1}\right) \left(\lambda - \lambda_ {2}\right) \dots \left(\lambda - \lambda_ {k}\right).
$$

若 $\mathbf{A}$ 可对角化, 则 $\mathbf{A}$ 的极小多项式就是 $g(\lambda)$ (参考例6.78). 反之, 若 $\mathbf{A}$ 适合多项式 $g(\lambda)$ , 则由极小多项式的性质可知, $g(\lambda)$ 就是 $\mathbf{A}$ 的极小多项式. 特别地, 由于 $g(\lambda)$ 无重根, 故 $\mathbf{A}$ 可对角化. 应用这一方法的典型例题是例7.38和例7.42的证法3.

例 7.38 设 n 阶矩阵 A 的极小多项式 $m(\lambda)$ 的次数为 s, $B = (b_{ij})$ 为 s 阶矩阵, 其中 $b_{ij} = \operatorname{tr}(A^{i+j-2})$ (约定 $b_{11} = n$ ), 求证: A 可对角化的充要条件是 B 为可逆矩阵.

证明 设 A 的全体不同特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ ，其代数重数分别为 $m_{1}, m_{2}, \cdots, m_{k}$ ，则 $\mathrm{tr}(A^{i}) = m_{1}\lambda_{1}^{i} + m_{2}\lambda_{2}^{i} + \cdots + m_{k}\lambda_{k}^{i}$ 。定义 $g(\lambda) = (\lambda - \lambda_{1})(\lambda - \lambda_{2}) \cdots (\lambda - \lambda_{k})$ ，则 $g(\lambda) \mid m(\lambda)$ , 从而 $s \geq k$ . 若 $\pmb{A}$ 可对角化, 则 $m(\lambda) = g(\lambda)$ , 从而 $s = k$ . 若 $\pmb{A}$ 不可对角化, 则 $m(\lambda)$ 有重根, 从而 $s > k$ . 考虑矩阵 $\pmb{B}$ 的如下分解:

$$
\boldsymbol {B} = \left( \begin{array}{c c c c} m _ {1} & m _ {2} & \dots & m _ {k} \\ m _ {1} \lambda_ {1} & m _ {2} \lambda_ {2} & \dots & m _ {k} \lambda_ {k} \\ \vdots & \vdots & & \vdots \\ m _ {1} \lambda_ {1} ^ {s - 1} & m _ {2} \lambda_ {2} ^ {s - 1} & \dots & m _ {k} \lambda_ {k} ^ {s - 1} \end{array} \right) \left( \begin{array}{c c c c} 1 & \lambda_ {1} & \dots & \lambda_ {1} ^ {s - 1} \\ 1 & \lambda_ {2} & \dots & \lambda_ {2} ^ {s - 1} \\ \vdots & \vdots & & \vdots \\ 1 & \lambda_ {k} & \dots & \lambda_ {k} ^ {s - 1} \end{array} \right),
$$

其中上式右边第一个矩阵是 $s \times k$ 矩阵, 第二个矩阵是 $k \times s$ 矩阵. 若 $s = k$ , 则由 Vandermonde 行列式可知

$$
| \boldsymbol {B} | = m _ {1} m _ {2} \dots m _ {k} \prod_ {1 \leq i <   j \leq k} (\lambda_ {i} - \lambda_ {j}) ^ {2} \neq 0,
$$

即 B 是可逆矩阵. 若 s > k, 则由 Cauchy-Binet 公式可得 $|B| = 0$ , 即 B 不可逆. □

### 6. 初等因子都是一次多项式, 或 Jordan 块都是一阶矩阵

例 7.39 设 n 阶复方阵 A 的特征多项式为 $f(\lambda)$ ，复系数多项式 $g(\lambda)$ 满足 $(f(\lambda), g'(\lambda)) = 1$ 。证明：A 可对角化的充要条件是 $g(A)$ 可对角化。

证明 必要性显然成立, 下证充分性. 用反证法, 设 A 不可对角化, 则存在可逆矩阵 P, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$ . 注意到

$$
\boldsymbol {P} ^ {- 1} g (\boldsymbol {A}) \boldsymbol {P} = g \left(\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}\right) = g (\boldsymbol {J}) = \operatorname{diag} \left\{g \left(\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1}\right)\right), \dots , g \left(\boldsymbol {J} _ {r _ {k}} \left(\lambda_ {k}\right)\right) \right\},
$$

其中

$$
g (\boldsymbol {J} _ {r _ {1}} (\lambda_ {1})) = \left( \begin{array}{c c c c} g (\lambda_ {1}) & g ^ {\prime} (\lambda_ {1}) & \dots & * \\ & g (\lambda_ {1}) & \ddots & \vdots \\ & & \ddots & g ^ {\prime} (\lambda_ {1}) \\ & & & g (\lambda_ {1}) \end{array} \right).
$$

由 $(f(\lambda), g'(\lambda)) = 1$ 可知 $g'(\lambda_1) \neq 0$ , 于是 $g(J_{r_1}(\lambda_1))$ 的特征值全为 $g(\lambda_1)$ , 其几何重数为 $r_1 - r(g(J_{r_1}(\lambda_1)) - g(\lambda_1)I_{r_1}) = 1$ , 因此 $g(J_{r_1}(\lambda_1))$ 的 Jordan 标准型为 $J_{r_1}(g(\lambda_1))$ , 其阶数 $r_1 > 1$ . 由于 $J_{r_1}(g(\lambda_1))$ 也是 $g(A)$ 的一个 Jordan 块, 故 $g(A)$ 不可对角化, 矛盾! □

例 6.57 的延拓 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AXA$ , 其中 $A\in V$ . 证明: $\varphi$ 可对角化的充要条件是 A 可对角化.

证明 充分性就是例 6.57, 下证必要性. 用反证法, 设 A 不可对角化, 则存在可逆矩阵 P, Q, 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \boldsymbol {Q} ^ {- 1} \boldsymbol {A} ^ {\prime} \boldsymbol {Q} = \boldsymbol {J} = \operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1}\right), \dots , \boldsymbol {J} _ {r _ {k}} \left(\lambda_ {k}\right) \right\}
$$

为 Jordan 标准型, 其中 $r_1 > 1$ . 设 $\pmb{P} = (\alpha_1, \alpha_2, \dots, \alpha_n)$ , $\pmb{Q} = (\beta_1, \beta_2, \dots, \beta_n)$ 分别为两个矩阵的列分块, 令 $U = L(\alpha_i \beta_j', 1 \leq i, j \leq r_1)$ , 则由第 3 章的解答题 3 可知 $\{\alpha_i \beta_j', 1 \leq i, j \leq r_1\}$ 是 $U$ 的一组基. 经简单计算可得

$$
\varphi \left(\alpha_ {1} \beta_ {1} ^ {\prime}\right) = \lambda_ {1} ^ {2} \alpha_ {1} \beta_ {1} ^ {\prime};
$$

$$
\varphi \left(\alpha_ {1} \beta_ {j} ^ {\prime}\right) = \lambda_ {1} \alpha_ {1} \beta_ {j - 1} ^ {\prime} + \lambda_ {1} ^ {2} \alpha_ {1} \beta_ {j} ^ {\prime}, 2 \leq j \leq r _ {1};
$$

$$
\varphi \left(\alpha_ {i} \beta_ {1} ^ {\prime}\right) = \lambda_ {1} \alpha_ {i - 1} \beta_ {1} ^ {\prime} + \lambda_ {1} ^ {2} \alpha_ {i} \beta_ {1} ^ {\prime}, 2 \leq i \leq r _ {1}; \tag {7.8}
$$

$$
\varphi \left(\alpha_ {i} \beta_ {j} ^ {\prime}\right) = \alpha_ {i - 1} \beta_ {j - 1} ^ {\prime} + \lambda_ {1} \alpha_ {i - 1} \beta_ {j} ^ {\prime} + \lambda_ {1} \alpha_ {i} \beta_ {j - 1} ^ {\prime} + \lambda_ {1} ^ {2} \alpha_ {i} \beta_ {j} ^ {\prime}, 2 \leq i, j \leq r _ {1},
$$

于是 U 是 $\varphi$ -不变子空间. 由于 $\varphi$ 可对角化, 故由例 7.36 可知 $\varphi|_{U}$ 也可对角化, 但 (7.8) 式告诉我们 $\varphi|_{U}$ 在基 $\{\alpha_{1}\beta_{1}^{\prime},\cdots,\alpha_{1}\beta_{r_{1}}^{\prime};\cdots;\alpha_{r_{1}}\beta_{1}^{\prime},\cdots,\alpha_{r_{1}}\beta_{r_{1}}^{\prime}\}$ 下的表示矩阵是一个上三角矩阵, 主对角元全为 $\lambda_{1}^{2}$ , 主对角线上方至少有一个非零元素 1 (其实是 Kronecker 积 $J_{r_{1}}(\lambda_{1})\otimes J_{r_{1}}(\lambda_{1})$ ), 由例 6.73 可知这个矩阵不可对角化, 矛盾! □

例 6.58 的延拓 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AX-XA$ , 其中 $A\in V$ . 证明: $\varphi$ 可对角化的充要条件是 A 可对角化.

证明 充分性就是例 6.58, 下证必要性. 用反证法, 设 A 不可对角化, 则存在可逆矩阵 P, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$ . 设 $P = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为列分块, 任取 $A'$ 的特征值 $\lambda_0$ 及其特征向量 $\beta$ , 即 $A'\beta = \lambda_0\beta$ . 令 $U = L(\alpha_i\beta', 1 \leq i \leq r_1)$ , 则由第 3 章的解答题 3 可知 $\{\alpha_i\beta', 1 \leq i \leq r_1\}$ 是 U 的一组基. 经简单计算可得

$$
\varphi \left(\alpha_ {1} \beta^ {\prime}\right) = \left(\lambda_ {1} - \lambda_ {0}\right) \alpha_ {1} \beta^ {\prime}, \quad \varphi \left(\alpha_ {2} \beta^ {\prime}\right) = \alpha_ {1} \beta^ {\prime} + \left(\lambda_ {1} - \lambda_ {0}\right) \alpha_ {2} \beta^ {\prime},
$$

$$
\dots , \varphi \left(\alpha_ {r _ {1}} \beta^ {\prime}\right) = \alpha_ {r _ {1} - 1} \beta^ {\prime} + \left(\lambda_ {1} - \lambda_ {0}\right) \alpha_ {r _ {1}} \beta^ {\prime}, \tag {7.9}
$$

于是 $U$ 是 $\varphi$ -不变子空间. 由于 $\varphi$ 可对角化, 故由例 7.36 可知 $\varphi|_U$ 也可对角化, 但 (7.9) 式告诉我们 $\varphi|_U$ 在基 $\{\alpha_i \beta', 1 \leq i \leq r_1\}$ 下的表示矩阵为 $J_{r_1}(\lambda_1 - \lambda_0)$ , 这个矩阵不可对角化, 矛盾! □

例 7.40 设 $\varphi$ 是 n 维复线性空间 V 上的线性变换, 求证: $\varphi$ 可对角化的充要条件是对 $\varphi$ 的任一特征值 $\lambda_{0}$ , 总有 $\operatorname{Ker}(\varphi - \lambda_{0} I_{V}) \cap \operatorname{Im}(\varphi - \lambda_{0} I_{V}) = 0$ .

证明 先证必要性. 若 $\varphi$ 可对角化, 则存在一组基 $\{e_1, e_2, \cdots, e_n\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为 $\operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ . 适当调整基向量的顺序, 不妨设 $\lambda_0 = \lambda_1 = \cdots = \lambda_r$ , $\lambda_0 \neq \lambda_j (j > r)$ , 则容易验证 $\operatorname{Ker}(\varphi - \lambda_0 I_V) = L(e_1, \cdots, e_r)$ , $\operatorname{Im}(\varphi - \lambda_0 I_V) = L(e_{r+1}, \cdots, e_n)$ , 从而 $\operatorname{Ker}(\varphi - \lambda_0 I_V) \cap \operatorname{Im}(\varphi - \lambda_0 I_V) = 0$ .

再证充分性. 用反证法, 设 $\varphi$ 不可对角化, 则存在 $V$ 的一组基 $\{e_1, e_2 \cdots, e_n\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型 $J = \mathrm{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_k}(\lambda_k)\}$ , 其中 $r_1 > 1$ . 由表示矩阵的定义可得 $\varphi(e_1) = \lambda_1 e_1$ , $\varphi(e_2) = e_1 + \lambda_1 e_2$ , 于是 $(\varphi - \lambda_1 I_V)(e_1) = 0$ , $(\varphi - \lambda_1 I_V)(e_2) = e_1$ , 从而 $0 \neq e_1 \in \operatorname{Ker}(\varphi - \lambda_1 I_V) \cap \operatorname{Im}(\varphi - \lambda_1 I_V)$ , 这与假设矛盾. □

例 7.41 求证: n 阶复矩阵 A 可对角化的充要条件是对 A 的任一特征值 $\lambda_{0}$ , $(\lambda_{0}I_{n}-A)^{2}$ 和 $\lambda_{0}I_{n}-A$ 的秩相同.

证明 先证必要性. 若 A 可对角化, 则存在可逆矩阵 P, 使得 $P^{-1}AP = \Lambda = \operatorname{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 适当调整 P 的列向量的顺序, 不妨设 $\lambda_{0} = \lambda_{1} = \cdots = \lambda_{r}$ , $\lambda_{0} \neq \lambda_{j} (j > r)$ , 则 $\mathrm{r}(\lambda_{0}I_{n} - A) = \mathrm{r}(\lambda_{0}I_{n} - \Lambda) = n - r$ , $\mathrm{r}\left((\lambda_{0}I_{n} - A)^{2}\right) = \mathrm{r}\left((\lambda_{0}I_{n} - \Lambda)^{2}\right) = n - r$ , 于是结论成立.

再证充分性. 用反证法, 若 A 不可对角化, 则存在可逆矩阵 P, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 其中 $r_1 > 1$ . 注意到

$$
\mathrm{r} \left((\lambda_ {1} \boldsymbol {I} _ {n} - \boldsymbol {A}) ^ {j}\right) = \mathrm{r} \left((\lambda_ {1} \boldsymbol {I} _ {n} - \boldsymbol {J}) ^ {j}\right) = \sum_ {i = 1} ^ {k} \mathrm{r} \left((\lambda_ {1} \boldsymbol {I} _ {r _ {i}} - \boldsymbol {J} _ {r _ {i}} (\lambda_ {i})) ^ {j}\right), \quad j \geq 1,
$$

又 $\mathrm{r}(\lambda_1\pmb{I}_{r_1} - \pmb{J}_{r_1}(\lambda_1)) = r_1 - 1, \mathrm{r}\left((\lambda_1\pmb{I}_{r_1} - \pmb{J}_{r_1}(\lambda_1))^2\right) = r_1 - 2,$ 因此 $\mathrm{r}\left((\lambda_1\pmb{I}_n - \pmb{A})^2\right) < \mathrm{r}(\lambda_1\pmb{I}_n - \pmb{A}),$ 这与假设矛盾. □

例 7.42 给出了可对角化判定准则的一个补充, 例 7.40 和例 7.41 都是它的特例.

例 7.42 设 $\varphi$ 是 n 维复线性空间 V 上的线性变换, 求证: $\varphi$ 可对角化的充要条件是对 $\varphi$ 的任一特征值 $\lambda_{0}$ , 下列条件之一成立:

(1) $V = \operatorname{Ker}(\varphi - \lambda_{0}I_{V}) + \operatorname{Im}(\varphi - \lambda_{0}I_{V});$ 

(2) $V = \operatorname{Ker}(\varphi - \lambda_0 I_V) \oplus \operatorname{Im}(\varphi - \lambda_0 I_V)$ ; 

(3) $\operatorname{Ker}(\varphi - \lambda_{0}\boldsymbol{I}_{V}) \cap \operatorname{Im}(\varphi - \lambda_{0}\boldsymbol{I}_{V}) = 0;$ 

(4) $\dim \operatorname{Ker}(\varphi - \lambda_0 I_V) = \dim \operatorname{Ker}(\varphi - \lambda_0 I_V)^2$ ; 

(5) $\operatorname{Ker}(\varphi - \lambda_{0}\boldsymbol{I}_{V}) = \operatorname{Ker}(\varphi - \lambda_{0}\boldsymbol{I}_{V})^{2} = \operatorname{Ker}(\varphi - \lambda_{0}\boldsymbol{I}_{V})^{3} = \cdots;$ 

(6) $\mathrm{r}(\boldsymbol{\varphi}-\lambda_{0}\boldsymbol{I}_{V})=\mathrm{r}\left((\boldsymbol{\varphi}-\lambda_{0}\boldsymbol{I}_{V})^{2}\right);$ 

(7) $\mathrm{Im}(\boldsymbol{\varphi}-\lambda_{0}\boldsymbol{I}_{V})=\mathrm{Im}(\boldsymbol{\varphi}-\lambda_{0}\boldsymbol{I}_{V})^{2}=\mathrm{Im}(\boldsymbol{\varphi}-\lambda_{0}\boldsymbol{I}_{V})^{3}=\cdots;$ 

(8) $\operatorname{Ker}(\varphi - \lambda_0 I_V)$ 存在 $\varphi$ -不变补空间, 即存在 $\varphi$ -不变子空间 $U$ , 使得 $V = \operatorname{Ker}(\varphi - \lambda_0 I_V) \oplus U$ ;

(9) $\operatorname{Im}(\varphi - \lambda_0 I_V)$ 存在 $\varphi$ -不变补空间, 即存在 $\varphi$ -不变子空间 $W$ , 使得 $V = \operatorname{Im}(\varphi - \lambda_0 I_V) \oplus W$ .

证明 由例 4.36 可知条件 (1) ~ (9) 是相互等价的, 因此本题的结论由例 7.40 (与条件 (3) 对应) 或例 7.41 (与条件 (6) 对应) 即得. 事实上, 对充分性而言, 我们还可以从其他条件出发来证明 $\varphi$ 可对角化, 下面是 3 种证法.

证法1 对任一特征值 $\lambda_0$ , 由 $\operatorname{Ker}(\varphi - \lambda_0 I_V) = \operatorname{Ker}(\varphi - \lambda_0 I_V)^2 = \cdots = \operatorname{Ker}(\varphi - \lambda_0 I_V)^n$ , 取维数之后可得特征值 $\lambda_0$ 的几何重数等于代数重数, 从而 $\varphi$ 有完全的特征向量系, 于是 $\varphi$ 可对角化.

证法2 对任一特征值 $\lambda_0$ , 由 $\operatorname{Ker}(\varphi - \lambda_0 I_V) = \operatorname{Ker}(\varphi - \lambda_0 I_V)^2 = \cdots = \operatorname{Ker}(\varphi - \lambda_0 I_V)^n$ 可知, 特征子空间等于根子空间, 再由根子空间的直和分解可知, 全空间等于特征子空间的直和, 从而 $\varphi$ 可对角化.

证法 3 设 $\varphi$ 的全体不同特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ ，特征多项式 $f(\lambda) = (\lambda - \lambda_{1})^{m_{1}} (\lambda - \lambda_{2})^{m_{2}} \cdots (\lambda - \lambda_{k})^{m_{k}}$ ，则对任意的 $\alpha \in V$ ，由 Cayley-Hamilton 定理可得

$$
(\varphi - \lambda_ {1} I _ {V}) ^ {m _ {1}} (\varphi - \lambda_ {2} I _ {V}) ^ {m _ {2}} \dots (\varphi - \lambda_ {k} I _ {V}) ^ {m _ {k}} (\alpha) = 0,
$$

即有 $(\varphi - \lambda_2 I_V)^{m_2} \cdots (\varphi - \lambda_k I_V)^{m_k}(\alpha) \in \mathrm{Ker}(\varphi - \lambda_1 I_V)^{m_1} = \mathrm{Ker}(\varphi - \lambda_1 I_V)$ ，从而

$$
(\varphi - \lambda_ {1} I _ {V}) (\varphi - \lambda_ {2} I _ {V}) ^ {m _ {2}} \dots (\varphi - \lambda_ {k} I _ {V}) ^ {m _ {k}} (\alpha) = 0.
$$

不断这样做下去, 最终可得对任意的 $\alpha \in V$ , 总有

$$
(\varphi - \lambda_ {1} I _ {V}) (\varphi - \lambda_ {2} I _ {V}) \dots (\varphi - \lambda_ {k} I _ {V}) (\alpha) = 0,
$$

即 $\varphi$ 适合多项式 $g(\lambda)=(\lambda-\lambda_{1})(\lambda-\lambda_{2})\cdots(\lambda-\lambda_{k})$ ，从而 $\varphi$ 可对角化. □

最后, 我们来看一道矩阵可对角化应用的例题.

例 7.43 若 $n(n \geq 2)$ 阶矩阵 B 相似于 $R = \operatorname{diag}\left\{\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}, I_{n-2}\right\}$ ，则称 B 为反射矩阵。证明：任一对合矩阵 A（即 $A^{2} = I_{n}$ ）均可分解为至多 n 个两两乘法可交换的反射矩阵的乘积。

证明 由例7.34可知, 对合矩阵 $\pmb{A}$ 可对角化, 即存在可逆矩阵 $\pmb{P}$ , 使得 $P^{-1}AP = \mathrm{diag}\{-I_r, I_{n-r}\}$ , 其中 $0 \leq r \leq n$ . 当 $r = 0$ 时, $A = I_n = R^2$ , 结论成立. 当 $r \geq 1$ 时, 设 $B_i = P\mathrm{diag}\{1, \cdots, 1, -1, 1, \cdots, 1\} P^{-1}$ , 其中 $-1$ 在主对角线上的第 $i$ 个位

置, 则 $B_{i} (1 \leq i \leq r)$ 两两乘法可交换, 并且 $A = B_{1}B_{2}\cdots B_{r}$ . 由于 $\left( \begin{array}{cc}0 & 1\\ 1 & 0 \end{array} \right)$ 的特征值是 $-1,1$ , 故其相似于 $\operatorname{diag}\{-1,1\}$ , 因此矩阵 $B$ 是反射矩阵当且仅当 $B$ 相似于 $\operatorname{diag}\{-1,1,\dots ,1\}$ . 因为对角矩阵的两个主对角元素对换是一个相似变换, 所以上述 $B_{i}$ 都是反射矩阵, 于是 $A$ 可以分解为 $r$ 个两两乘法可交换的反射矩阵的乘积. □

## § 7.6 Jordan 标准型的求法

计算矩阵的 Jordan 标准型是一个重要的问题, 也是后续专业课的需求. 对于数字矩阵 A, 通常的方法是利用 λ-矩阵的初等变换求出特征矩阵 λI - A 的法式, 得到 A 的不变因子和初等因子, 便可写出 Jordan 标准型. 对于含有未定元的文字矩阵, 或者仅知矩阵某些相似不变量的信息, 此时若直接计算法式将会遇到困难. 一般来说, 需要先对矩阵的结构进行分析, 求出 A 的行列式因子、不变因子或初等因子, 然后才能得到 Jordan 标准型.

如何分析矩阵的结构呢？通常我们有以下3种方法.

(1) 计算行列式因子 对于某些具有简单结构的矩阵 (如上 (下) 三角矩阵、类上 (下) 三角矩阵), 可以通过选取适当的子式, 计算出行列式因子, 再得到不变因子和初等因子. 比如, Frobenius 块和 Jordan 块就是利用这种方法的典型例子.

(2) 计算极小多项式 因为矩阵的极小多项式是整除关系下最大的不变因子, 所以极小多项式确定了最大 Jordan 块的阶数.

(3) 计算特征值的几何重数 因为特征值的几何重数等于其 Jordan 块的个数,所以计算几何重数有助于 Jordan 标准型的确定.

下面是一些典型例题, 我们首先来看计算几何重数方法的两个应用.

例 7.44 设 n 阶矩阵 A 的不变因子组为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{n}(\lambda)$ ，其中 $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq n-1)$ ，又 $\lambda_{0}$ 是 A 的特征值。求证： $r(\lambda_{0}I_{n}-A)=r$ 的充要条件是 $(\lambda-\lambda_{0}) \nmid d_{r}(\lambda)$ 但 $(\lambda-\lambda_{0}) \mid d_{r+1}(\lambda)$ 。

证法 1 $\mathrm{r}(\lambda_{0}\boldsymbol{I}_{n}-\boldsymbol{A})=r$ 当且仅当特征值 $\lambda_{0}$ 的几何重数为 n-r; 这当且仅当特征值 $\lambda_{0}$ 的 Jordan 块有 n-r 个; 由不变因子之间的整除关系可知, 这当且仅当后 n-r 个不变因子能被 $\lambda-\lambda_{0}$ 整除, 而前 r 个不变因子不能被 $\lambda-\lambda_{0}$ 整除.

证法 2 由例 7.23 可知, $\mathrm{r}(\lambda_{0}\boldsymbol{I}_{n}-\boldsymbol{A})=r$ 当且仅当 $\sum_{i=1}^{n}\delta_{d_{i}(\lambda_{0}),0}=n-r;$ 由不变因子之间的整除关系可知, 这当且仅当 $d_{i}(\lambda_{0}) \neq 0 (1 \leq i \leq r)$ 且 $d_{i}(\lambda_{0}) = 0 (r + 1 \leq i \leq n)$ ; 最后由余数定理即得结论. $\square$ 

例 7.45 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, U 是 V 的非零 $\varphi$ -不变子空间. 设 $\lambda_{0}$ 是限制变换 $\varphi|_{U}$ 的特征值, 证明: $\varphi|_{U}$ 的属于特征值 $\lambda_{0}$ 的 Jordan 块的个数不超过 $\varphi$ 的属于特征值 $\lambda_{0}$ 的 Jordan 块的个数.

证明 Jordan 块的个数等于特征值的几何重数, 即线性无关的特征向量的个数. 设 $\varphi|_{U}$ 的属于特征值 $\lambda_0$ 的 Jordan 块的个数为 $r$ , 则 $\varphi|_{U}$ 关于特征值 $\lambda_0$ 有 $r$ 个线性无关的特征向量, 它们也都是 $\varphi$ 关于特征值 $\lambda_0$ 的线性无关的特征向量, 从而 $\varphi$ 的属于特征值 $\lambda_0$ 的 Jordan 块至少有 $r$ 个. 也可用纯代数的方法 (矩阵的秩) 进行证明, 请读者自行思考完成. □

我们来看一道同时利用上述 3 种方法求 Jordan 标准型的典型例题.

例 7.46 求下列 n 阶矩阵的 Jordan 标准型, 其中 $a \neq 0$ :

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a & a & a & \dots & a \\ & a & a & \dots & a \\ & & a & \dots & a \\ & & & \ddots & \vdots \\ & & & & a \end{array} \right).
$$

解法 1 由例 7.4 可知, A 的行列式因子组为 $1, \cdots, 1, (\lambda - a)^{n}$ , 这也是 A 的不变因子组, 从而 A 的 Jordan 标准型为 $J_{n}(a)$ .

解法2 显然 $\pmb{A}$ 的特征多项式为 $(\lambda - a)^n$ , 故 $\pmb{A}$ 的极小多项式是 $\lambda - a$ 的某个幂. 设 $N = J_{n}(0)$ , 即特征值为 0 的 $n$ 阶 Jordan 块, 它满足 $N^{n-1} \neq O$ 但 $N^{n} = O$ , 则 $A = a(I_{n} + N + N^{2} + \cdots + N^{n-1})$ . 注意到

$$
(\boldsymbol {A} - a \boldsymbol {I} _ {n}) ^ {n - 1} = a ^ {n - 1} (\boldsymbol {N} + \boldsymbol {N} ^ {2} + \dots + \boldsymbol {N} ^ {n - 1}) ^ {n - 1} = a ^ {n - 1} \boldsymbol {N} ^ {n - 1} \neq \boldsymbol {O},
$$

故 A 不适合多项式 $(\lambda - a)^{n-1}$ ，于是 A 的极小多项式只能是 $(\lambda - a)^{n}$ 。因此 A 的不变因子组是 $1, \cdots, 1, (\lambda - a)^{n}$ ，从而 A 的 Jordan 标准型为 $J_{n}(a)$ 。

解法 3 显然 A 的特征值全为 a, 我们来计算它的几何重数. 注意到 $\mathrm{r}(a\mathbf{I}_{n}-\mathbf{A})=n-1$ , 故特征值 a 的几何重数为 $n-\mathrm{r}(a\mathbf{I}_{n}-\mathbf{A})=1$ , 于是 A 的 Jordan 标准型中关于特征值 a 的 Jordan 块只有一个, 因此 A 的 Jordan 标准型为 $J_{n}(a)$ . □

如果给出相似不变量的信息, 那么还可以综合利用第 6 章和第 7 章的方法来求 Jordan 标准型. 下面这道例题是例 6.74 和例 6.82 的延续.

例 7.47 设 $n(n>1)$ 阶矩阵 A 的秩为 1, 试求 A 的 Jordan 标准型.

解法1 由 $\mathrm{r}(\mathbf{A}) = 1$ 可知, 存在非零列向量 $\alpha, \beta$ , 使得 $A = \alpha \beta'$ . 由例6.19可得 $|\lambda I_n - A| = \lambda^{n-1} (\lambda - \beta' \alpha)$ , 再由所有特征值之和等于矩阵的迹可得 $\operatorname{tr}(A) = \beta' \alpha$ . 若 $\operatorname{tr}(A) \neq 0$ , 则特征值 $\operatorname{tr}(A)$ 的几何重数等于1, 特征值0的几何重数等于 $n - \operatorname{r}(A) = n-1$ , 因此 $A$ 的Jordan标准型为 $\operatorname{diag}\{0, \cdots, 0, \operatorname{tr}(A)\}$ . 若 $\operatorname{tr}(A) = 0$ , 则特征值0的代数重数是 $n$ , 几何重数是 $n-1$ , 因此 $A$ 的Jordan标准型为 $\operatorname{diag}\{0, \cdots, 0, J_2(0)\}$ .

解法 2 特征多项式的计算同解法 1, 又由例 6.82 可知, A 的极小多项式 $m(\lambda) = \lambda (\lambda - \operatorname{tr}(A))$ , 于是 A 的不变因子组为 $1, \lambda, \cdots, \lambda, m(\lambda)$ . 若 $\operatorname{tr}(A) \neq 0$ , 则 A 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, \operatorname{tr}(A)\}$ . 若 $\operatorname{tr}(A) = 0$ , 则 A 的 Jordan 标准型为 $\operatorname{diag}\{0, \cdots, 0, J_{2}(0)\}$ .

解法 3 直接利用 Jordan 标准型来解最为简单. 设 A 的 Jordan 标准型 $J = \text{diag}\{J_{r_1}(0), \cdots, J_{r_k}(0), J_{s_1}(\lambda_1), \cdots, J_{s_l}(\lambda_l)\}$ ，其中 $\lambda_j \neq 0 (1 \leq j \leq l)$ . 由于相似关系不改变矩阵的秩，故 J 的秩也为 1，即有 $(r_1 - 1) + \cdots + (r_k - 1) + s_1 + \cdots + s_l = 1$ . 于是只有以下两种情况成立：第一种情况是 $l = 1, s_1 = 1, \lambda_1 = \text{tr}(A) \neq 0$ ，且所有的 $r_i = 1$ ，此时 A 的 Jordan 标准型为 $\text{diag}\{0, \cdots, 0, \text{tr}(A)\}$ . 第二种情况是某个 $r_i = 2$ ，其余的 $r_i = 1$ 且 l = 0，此时 A 的 Jordan 标准型为 $\text{diag}\{0, \cdots, 0, J_2(0)\}$ . □

例 7.48 设 $n(n > 1)$ 阶矩阵 A 的秩为 1, 求证: A 是幂等矩阵的充要条件是 $\operatorname{tr}(A) = 1$ , A 是幂零矩阵的充要条件是 $\operatorname{tr}(A) = 0$ .

解 由例 7.47 的证明过程即得结论. □

例 7.46 和例 7.47 只通过求极小多项式或几何重数中的一个就可以得到解答, 但更复杂一些的问题却需要两者都运用才行, 让我们来看下面两个典型例题.

例 7.49 设 $A = \begin{pmatrix} 1 & 0 & 0 & 0 \\ a + 2 & 1 & 0 & 0 \\ 5 & 3 & 1 & 0 \\ 7 & 6 & b + 4 & 1 \end{pmatrix}$ ，求 A 的 Jordan 标准型.

解 显然 A 的特征值全为 1, 首先我们来计算特征值 1 的几何重数. 考虑矩阵

$$
\boldsymbol {A} - \boldsymbol {I} _ {4} = \left( \begin{array}{c c c c} 0 & 0 & 0 & 0 \\ a + 2 & 0 & 0 & 0 \\ 5 & 3 & 0 & 0 \\ 7 & 6 & b + 4 & 0 \end{array} \right).
$$

(1) 当 $a + 2 \neq 0$ 且 $b + 4 \neq 0$ 时, $\mathrm{r}(\mathbf{A} - \mathbf{I}_4) = 3$ , 于是特征值 1 的几何重数等于 1, 从而只有一个 Jordan 块, 因此 $\mathbf{A}$ 的 Jordan 标准型是 $J_4(1)$ .

(2) 当 $a + 2 = 0$ 或 $b + 4 = 0$ 时, $\mathrm{r}(\pmb {A} - \pmb{I}_4) = 2$ , 于是特征值1的几何重数等于2, 从而有两个Jordan块. 进一步我们来计算 $\pmb{A}$ 的极小多项式.

(2.1) 若 $a + 2 = 0$ 和 $b + 4 = 0$ 中只有一个成立, 容易验证 $(A - I_4)^2 \neq O$ , 但 $(A - I_4)^3 = O$ , 于是 $A$ 的极小多项式是 $(\lambda - 1)^3$ , 从而不变因子组为 $1, 1, \lambda - 1, (\lambda - 1)^3$ , 因此 $A$ 的 Jordan 标准型为 $\operatorname{diag}\{1, J_3(1)\}$ .

(2.2) 若 $a + 2 = 0$ 和 $b + 4 = 0$ 都成立, 容易验证 $(A - I_4)^2 = O$ , 于是 $A$ 的极小多项式是 $(\lambda - 1)^2$ , 从而不变因子组为 $1, 1, (\lambda - 1)^2, (\lambda - 1)^2$ , 因此 $A$ 的 Jordan 标准型为 $\operatorname{diag}\{J_2(1), J_2(1)\}$ . □

例 7.50 设 $J = J_{n}(0)$ 是特征值为零的 $n (n \geq 2)$ 阶 Jordan 块, 求 $J^{2}$ 的 Jordan 标准型.

解 显然 $J^{2}$ 的特征值全为 0 且 $\mathrm{r}(J^{2}) = n - 2$ ，于是特征值 0 的几何重数等于 2，从而有两个 Jordan 块。接下去计算 $J^{2}$ 的极小多项式，注意到 $J^{n} = O, J^{n-1} \neq O$ 。

(1) 当 n = 2m 时, $\lambda^{m}$ 是 $J^{2}$ 的极小多项式, 于是 $J^{2}$ 的不变因子组为 $1, \cdots, 1$ , $\lambda^{m}, \lambda^{m}$ , 因此 $J^{2}$ 的 Jordan 标准型为 $\mathrm{diag}\{J_{m}(0), J_{m}(0)\}$ .

(2) 当 $n = 2m + 1$ 时, $\lambda^{m+1}$ 是 $J^{2}$ 的极小多项式, 于是 $J^{2}$ 的不变因子组为 $1, \cdots, 1, \lambda^{m}, \lambda^{m+1}$ , 因此 $J^{2}$ 的 Jordan 标准型为 $\mathrm{diag}\{\boldsymbol{J}_{m}(0), \boldsymbol{J}_{m+1}(0)\}$ .

另外, 也可以用行列式因子的讨论来替代几何重数的讨论. 注意到 $\lambda I_{n} - J^{2}$ 的右上角有一个 $n - 2$ 阶子式等于 $(-1)^{n - 2}$ , 故 $J^{2}$ 的 $n - 2$ 阶行列式因子为 1, 从而前 $n - 2$ 个不变因子都是 1, 后面再用极小多项式的讨论即可得到结论. □

例 7.51 求下列 $n(n \geq 2)$ 阶矩阵的 Jordan 标准型:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} c & 0 & 1 & 0 & \dots & 0 \\ & c & 0 & 1 & \dots & 0 \\ & & \ddots & \ddots & \ddots & \vdots \\ & & & \ddots & \ddots & 1 \\ & & & & \ddots & 0 \\ & & & & & c \end{array} \right).
$$

解 利用例 7.50 的记号和结论, 显然 $A = cI_{n} + J^{2}$ . 设 $P$ 是可逆矩阵, 使得 $P^{-1}J^{2}P$ 是 $J^{2}$ 的 Jordan 标准型, 则 $P^{-1}AP = cI_{n} + P^{-1}J^{2}P$ 就是 $A$ 的 Jordan标准型. 具体地, 当 $n = 2m$ 时, $\pmb{A}$ 的 Jordan 标准型是 $\operatorname{diag}\{\pmb{J}_m(c), \pmb{J}_m(c)\}$ ; 当 $n = 2m + 1$ 时, $\pmb{A}$ 的 Jordan 标准型是 $\operatorname{diag}\{\pmb{J}_m(c), \pmb{J}_{m+1}(c)\}$ . $\square$ 

我们可以自然地考虑如下问题: 如果已知 $n$ 阶矩阵 $\mathbf{A}$ 的 Jordan 标准型, 那么对任意的正整数 $m$ , $\mathbf{A}^m$ 的 Jordan 标准型应该有怎样的形状呢? 首先, 我们可以把这个问题化约到 Jordan 块的情形. 设 $\mathbf{A}$ 的 Jordan 标准型为 $J = \mathrm{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_s}(\lambda_s)\}$ , 则 $\mathbf{A}^m$ 相似于 $J^m = \mathrm{diag}\{J_{r_1}(\lambda_1)^m, J_{r_2}(\lambda_2)^m, \cdots, J_{r_s}(\lambda_s)^m\}$ , 因此要求 $\mathbf{A}^m$ 的 Jordan 标准型, 只要求每一个 $J_{r_i}(\lambda_i)^m$ 的 Jordan 标准型即可. 若 $\lambda_i \neq 0$ , 则由例 7.46 类似的讨论可知, $J_{r_i}(\lambda_i)^m$ 的 Jordan 标准型为 $J_{r_i}(\lambda_i^m)$ . 若 $\lambda_i = 0$ , 则例 7.50 处理了 $m = 2$ 的情形, 不过类似的讨论很难推广到 $m \geq 3$ 的情形, 换言之, 只依靠几何重数和极小多项式还不能完全确定 $J_{r_i}(0)^m$ 的 Jordan 标准型. 解决这个问题可以有代数和几何两种方法, 几何方法 (利用 Jordan 标准型的几何意义) 将在 §7.10 中阐述, 而代数方法 (利用矩阵的秩) 则需要下面的命题.

例 7.52 设 $\lambda_{0}$ 是 n 阶矩阵 A 的特征值, 证明: 对任意的正整数 k, 特征值为 $\lambda_{0}$ 的 k 阶 Jordan 块 $J_{k}(\lambda_{0})$ 在 A 的 Jordan 标准型 J 中出现的个数为

$$
\mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k - 1}\right) + \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k + 1}\right) - 2 \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k}\right),
$$

其中约定 $\mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^0\right) = n.$ 

证明 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_s}(\lambda_s)\}$ 为 A 的 Jordan 标准型. 注意到

$$
\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k} = \boldsymbol {P} \operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1} - \lambda_ {0}\right) ^ {k}, \boldsymbol {J} _ {r _ {2}} \left(\lambda_ {2} - \lambda_ {0}\right) ^ {k}, \dots , \boldsymbol {J} _ {r _ {s}} \left(\lambda_ {s} - \lambda_ {0}\right) ^ {k} \right\} \boldsymbol {P} ^ {- 1},
$$

故 $\mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^k\right) = \sum_{i = 1}^{s}\mathrm{r}\left(\pmb {J}_{r_i}(\lambda_i - \lambda_0)^k\right)$ . 当 $\lambda_{i}\neq \lambda_{0}$ 时, $\mathrm{r}\left(\pmb {J}_{r_i}(\lambda_i - \lambda_0)^k\right) = r_i$ 当 $\lambda_{i} = \lambda_{0}$ 时, 若 $r_i < k$ , 则 $\mathrm{r}\left(\pmb {J}_{r_i}(\lambda_i - \lambda_0)^k\right) = 0$ ; 若 $r_i\geq k$ , 则 $\mathrm{r}\left(\pmb {J}_{r_i}(\lambda_i - \lambda_0)^k\right) = r_i - k$ . 因此 $\mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^{k - 1}\right) - \mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^k\right)$ 等于特征值为 $\lambda_0$ 且阶数大于等于 $k$ 的 Jordan 块的个数. 同理, $\mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^k\right) - \mathrm{r}\left((\pmb {A} - \lambda_0\pmb {I}_n)^{k + 1}\right)$ 等于特征值为 $\lambda_0$ 且阶数大于等于 $k + 1$ 的 Jordan 块的个数, 从而特征值为 $\lambda_0$ 的 $k$ 阶 Jordan 块 $\pmb{J}_k(\lambda_0)$ 在 $\pmb{A}$ 的 Jordan 标准型 $\pmb{J}$ 中出现的个数为

$$
\begin{array}{l} \left(\mathrm{r} \left((\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {k - 1}\right) - \mathrm{r} \left((\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {k}\right)\right) - \left(\mathrm{r} \left((\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {k}\right) - \mathrm{r} \left((\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {k + 1}\right)\right) \\ = \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k - 1}\right) + \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k + 1}\right) - 2 \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k}\right). \\ \end{array}
$$

注 例 7.52 告诉我们, $n$ 阶矩阵 $\mathbf{A}$ 的 Jordan 标准型被若干个非负整数, 即 $\left\{\mathrm{r}\left((\mathbf{A} - \lambda_i\mathbf{I}_n)^j\right) \mid \lambda_i \text{为 } \mathbf{A}\right.$ 的特征值, $1 \leq j \leq n\}$ 完全决定. 因此从理论上说, 我们可以不计算矩阵 $\pmb{A}$ 的不变因子或初等因子, 改为计算上述若干个矩阵的秩, 也可以求出 $\pmb{A}$ 的 Jordan 标准型. 进一步, 我们还可以得到如下矩阵相似的判定准则.

例 7.53 设 A, B 为 n 阶矩阵, 证明: 它们相似的充要条件是对 A 或 B 的任一特征值 $\lambda_{0}$ 以及任意的 $1 \leq k \leq n$ , 有 $\mathrm{r}\left((A - \lambda_{0}I_{n})^{k}\right) = \mathrm{r}\left((B - \lambda_{0}I_{n})^{k}\right)$ .

证明 必要性显然, 现证充分性. 由已知条件及例 4.34 可知,

$$
\mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {n + 1}\right) = \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {n}\right) = \mathrm{r} \left(\left(\boldsymbol {B} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {n}\right) = \mathrm{r} \left(\left(\boldsymbol {B} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {n + 1}\right).
$$

因此由例 7.52 可知, 特征值为 $\lambda_{0}$ 的 k 阶 Jordan 块 $J_{k}(\lambda_{0})$ 在 A, B 的 Jordan 标准型中出现的个数相同, 从而 A, B 有相同的 Jordan 标准型, 于是它们相似. □

我们可以用上述判定准则来重新证明例 7.7 和例 7.8.

例 7.7 设 n 阶矩阵 A 的特征值全为 1, 求证: 对任意的正整数 k, $A^{k}$ 与 A 相似.

证法2 显然 $A^k$ 的特征值也全为1.注意到

$$
\left(\boldsymbol {A} ^ {k} - \boldsymbol {I} _ {n}\right) ^ {l} = \left(\boldsymbol {A} - \boldsymbol {I} _ {n}\right) ^ {l} \left(\boldsymbol {A} ^ {k - 1} + \boldsymbol {A} ^ {k - 2} + \dots + \boldsymbol {I} _ {n}\right) ^ {l}, l \geq 1.
$$

由于 $A^{k-1} + A^{k-2} + \cdots + I_{n}$ 的特征值全为 k，故为可逆矩阵，从而 $\mathrm{r}\left((A^{k} - I_{n})^{l}\right) = \mathrm{r}\left((A - I_{n})^{l}\right)$ 对任意的正整数 l 都成立。由例 7.53 可知， $A^{k}$ 与 A 相似。☐

例 7.8 设 n 阶矩阵 A 的特征值全为 1 或 -1, 求证: $A^{-1}$ 与 A 相似.

证法2 显然 $\mathbf{A}^{-1}$ 的特征值也全为1或-1. 设 $\lambda_0 = \pm 1$ , 则由 $\mathbf{A}$ 可逆以及 $(\mathbf{A}^{-1} - \lambda_0\mathbf{I}_n)^l = (-\lambda_0)^l\mathbf{A}^{-l}(\mathbf{A} - \lambda_0\mathbf{I}_n)^l$ 可得 $\mathrm{r}\left((\mathbf{A}^{-1} - \lambda_0\mathbf{I}_n)^l\right) = \mathrm{r}\left((\mathbf{A} - \lambda_0\mathbf{I}_n)^l\right)$ 对任意的正整数 $l$ 都成立. 由例7.53可知, $\mathbf{A}^{-1}$ 与 $\mathbf{A}$ 相似. □

例 7.54 设 $J = J_{n}(a)$ 是特征值为 $a \neq 0$ 的 n 阶 Jordan 块, 求 $J^{m}$ 的 Jordan 标准型, 其中 m 为非零整数.

解 先处理 $m \geq 1$ 的情形, 采用几何重数的方法来做, 行列式因子和极小多项式的方法也可以做, 请读者自行补充完成. 显然 $J^{m}$ 的所有特征值都为 $a^{m}$ . 作分解 $J = aI_{n} + N$ , 其中 $N = J_{n}(0)$ , 则有

$$
\boldsymbol {J} ^ {m} = (a \boldsymbol {I} _ {n} + \boldsymbol {N}) ^ {m} = a ^ {m} \boldsymbol {I} _ {n} + \mathrm{C} _ {m} ^ {1} a ^ {m - 1} \boldsymbol {N} + \dots + \boldsymbol {N} ^ {m},
$$

于是 $\mathrm{r}(J^{m}-a^{m}I_{n})=\mathrm{r}(\mathrm{C}_{m}^{1}a^{m-1}\mathbf{N}+\cdots+N^{m})=n-1,$ 从而特征值 $a^{m}$ 的几何重数等于 1, 因此 $J^{m}$ 的 Jordan 标准型中只有一个 Jordan 块, 即 $J^{m}$ 的 Jordan 标准型为 $J_{n}(a^{m})$ .

再处理 $m = -1$ 的情形. 显然 $J^{-1}$ 的所有特征值都为 $a^{-1}$ . 注意到

$$
\boldsymbol {J} ^ {- 1} = (a \boldsymbol {I} _ {n} + \boldsymbol {N}) ^ {- 1} = a ^ {- 1} \boldsymbol {I} _ {n} - a ^ {- 2} \boldsymbol {N} + \dots + (- 1) ^ {n - 1} a ^ {- n} \boldsymbol {N} ^ {n - 1},
$$

故 $\mathrm{r}(J^{-1}-a^{-1}I_{n})=\mathrm{r}(-a^{-2}N+\cdots+(-1)^{n-1}a^{-n}N^{n-1})=n-1$ ，从而特征值 $a^{-1}$ 的几何重数等于 1，因此 $J^{-1}$ 的 Jordan 标准型中只有一个 Jordan 块，即 $J^{-1}$ 的 Jordan 标准型为 $J_{n}(a^{-1})$ .

最后处理 $m \leq -1$ 的情形. 注意到 $J^{m} = (J^{-1})^{-m}$ , 故由前面两个结论即得 $J^{m}$ 的 Jordan 标准型为 $J_{n}((a^{-1})^{-m}) = J_{n}(a^{m})$ . □

注 例 7.7 和例 7.8 最初是用 “三段论法” 和极小多项式来证明的 (当然用行列式因子和几何重数替代也可以); 后面利用例 7.53 给出了第二种证法; 本题 (当 $a = \pm 1$ 时) 给出了第三种证法.

例 7.55 设 $J = J_{n}(0)$ 是特征值为零的 n 阶 Jordan 块, 求 $J^{m} (m \geq 1)$ 的 Jordan 标准型.

解 若 $m \geq n$ , 则 $J^{m} = O$ , 这就是它的 Jordan 标准型. 下设 $m < n$ , 并作带余除法: $n = mq + r$ , 其中 $0 \leq r < m$ . 我们先来计算 $J^{m}$ 的幂的秩, 再利用例 7.52 来计算 Jordan 块的个数. 注意到

$$
\mathrm{r} ((J ^ {m}) ^ {k}) = n - m k, 0 \leq k \leq q; \mathrm{r} ((J ^ {m}) ^ {k}) = 0, k \geq q + 1.
$$

(1) 当 $1 \leq k < q$ 时, $\pmb{J}_k(0)$ 的个数为 $\mathrm{r}((\pmb{J}^m)^{k-1}) + \mathrm{r}((\pmb{J}^m)^{k+1}) - 2\mathrm{r}((\pmb{J}^m)^k) = (n - m(k - 1)) + (n - m(k + 1)) - 2(n - mk) = 0;$ 

(2) $J_{q}(0)$ 的个数为 $\mathrm{r}((J^{m})^{q - 1}) + \mathrm{r}((J^{m})^{q + 1}) - 2\mathrm{r}((J^{m})^{q}) = (n - m(q - 1)) +$ $0 - 2(n - mq) = m - r;$ 

(3) $J_{q+1}(0)$ 的个数为 $\mathrm{r}((J^{m})^{q})+\mathrm{r}((J^{m})^{q+2})-2\mathrm{r}((J^{m})^{q+1})=(n-mq)+0-0=r;$ 

(4) 当 $k > q + 1$ 时, $J_{k}(0)$ 的个数为 0.

因此 $J^{m}$ 的 Jordan 标准型为 $\mathrm{diag}\{J_{q}(0),\cdots,J_{q}(0),J_{q+1}(0),\cdots,J_{q+1}(0)\}$ ，其中有 m-r 个 $J_{q}(0)$ ，r 个 $J_{q+1}(0)$ 。☐

例 7.55 是例 7.50 的推广, 它与例 7.54 一起完满地回答了之前提出的那个问题.
下面的例题是例 6.70 的推广.

例 7.56 设 m 阶矩阵 A 与 n 阶矩阵 B 没有公共的特征值, 且 A, B 的 Jordan 标准型分别为 $J_{1}, J_{2}$ , 又 C 为 $m \times n$ 矩阵, 求证: $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 的 Jordan 标准型为 $\text{diag}\{J_{1}, J_{2}\}$ .

证法1 设 $P_{1}(\lambda), P_{2}(\lambda), Q_{1}(\lambda), Q_{2}(\lambda)$ 是可逆 $\lambda$ -矩阵, 使得

$$
\boldsymbol {P} _ {1} (\lambda) \left(\lambda \boldsymbol {I} _ {m} - \boldsymbol {A}\right) \boldsymbol {Q} _ {1} (\lambda) = \boldsymbol {\Lambda} _ {1} = \operatorname{diag} \left\{f _ {1} (\lambda), f _ {2} (\lambda), \dots , f _ {m} (\lambda) \right\},
$$

$$
\boldsymbol {P} _ {2} (\lambda) \left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {B}\right) \boldsymbol {Q} _ {2} (\lambda) = \boldsymbol {\Lambda} _ {2} = \operatorname{diag} \left\{g _ {1} (\lambda), g _ {2} (\lambda), \dots , g _ {n} (\lambda) \right\}
$$

分别是 A, B 的法式. 考虑如下 $\lambda$ -矩阵的初等变换:

$$
\left( \begin{array}{c c} P _ {1} & O \\ O & P _ {2} \end{array} \right) \left( \begin{array}{c c} \lambda I _ {m} - A & - C \\ O & \lambda I _ {n} - B \end{array} \right) \left( \begin{array}{c c} Q _ {1} & O \\ O & Q _ {2} \end{array} \right) = \left( \begin{array}{c c} \Lambda_ {1} & D \\ O & \Lambda_ {2} \end{array} \right),
$$

其中 $D = -P_{1}CQ_{2} = (d_{ij}(\lambda))$ 是 $m \times n \lambda$ -矩阵. 由于 A, B 没有公共的特征值, 故对任意的 $1 \leq i \leq m, 1 \leq j \leq n, (f_{i}(\lambda), g_{j}(\lambda)) = 1$ , 从而存在 $u_{ij}(\lambda), v_{ij}(\lambda)$ , 使得 $f_{i}(\lambda)u_{ij}(\lambda) + g_{j}(\lambda)v_{ij}(\lambda) = 1$ . 将 $\lambda$ -矩阵 $\begin{pmatrix}\Lambda_{1} & D \\ O & \Lambda_{2}\end{pmatrix}$ 的第 i 列乘以 $-u_{ij}(\lambda)d_{ij}(\lambda)$ 加到第 $m + j$ 列上, 再将第 $m + j$ 行乘以 $-v_{ij}(\lambda)d_{ij}(\lambda)$ 加到第 i 行上, 则可以消去 D 的第 $(i,j)$ 元素, 因此 M 的特征矩阵相抵于对角矩阵 $\mathrm{diag}\{\Lambda_{1}, \Lambda_{2}\}$ . 再由例 7.10 可知, M 的初等因子组是 $f_{1}(\lambda), \cdots, f_{m}(\lambda), g_{1}(\lambda), \cdots, g_{n}(\lambda)$ 的准素因子组, 而 $f_{1}(\lambda), \cdots, f_{m}(\lambda)$ 的准素因子组是 A 的初等因子组, $g_{1}(\lambda), \cdots, g_{n}(\lambda)$ 的准素因子组是 B 的初等因子组, 因此 M 的初等因子组是 A, B 的初等因子组的无交并集, 于是 M 的 Jordan 标准型为 $\mathrm{diag}\{J_{1}, J_{2}\}$ .

证法 2 由例 6.91 可知, 矩阵方程 AX - XB = C 存在唯一解 $X = X_{0}$ . 考虑如下相似变换:

$$
\left( \begin{array}{c c} I _ {m} & X _ {0} \\ O & I _ {n} \end{array} \right) \left( \begin{array}{c c} A & C \\ O & B \end{array} \right) \left( \begin{array}{c c} I _ {m} & - X _ {0} \\ O & I _ {n} \end{array} \right) = \left( \begin{array}{c c} A & - A X _ {0} + X _ {0} B + C \\ O & B \end{array} \right) = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right),
$$

因此 M 的 Jordan 标准型为 $\mathrm{diag}\{J_{1}, J_{2}\}$ . □

例 7.56 可用来化简矩阵, 消去其非主对角块, 使其剩下低阶的主对角块. 我们来看一个典型的例子.

例 7.57 设 $A = \begin{pmatrix} 1 & 0 & 0 & 0 \\ b & a + 1 & 0 & 0 \\ 3 & b & 2 & 0 \\ 5 & 4 & a & 2 \end{pmatrix}$ ，求 A 的 Jordan 标准型.

解 显然, A 的特征值为 $1, a + 1, 2, 2$ . 对 A 进行分块 $A = \begin{pmatrix} A_{11} & O \\ A_{21} & A_{22} \end{pmatrix}$ , 其中所有的分块都是二阶方阵. 下面按 $a + 1$ 是否等于 1, 2 进行分类讨论.

(1) 若 $a \neq 0$ 及 $a \neq 1$ , 则可有两种方法来处理. 方法 1 (几何重数): 经计算可知特征值 2 的几何重数等于 1, 因此 $\mathbf{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1, a + 1, J_2(2)\}$ . 方法 2 (例 7.56): 显然 $A_{11}$ 可对角化, $A_{22}$ 不可对角化, 且 $A_{11}, A_{22}$ 无公共特征值, 故可消去 $A_{21}$ , 因此 $\mathbf{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1, a + 1, J_2(2)\}$ .

(2) 若 $a = 0$ 及 $b \neq 0$ , 则利用方法 2 (例 7.56) 可得, $\pmb{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{\pmb{J}_2(1), 2, 2\}$ .

(3) 若 $a = 0$ 及 $b = 0$ , 则利用方法2（例7.56）可得, $\pmb{A}$ 的Jordan标准型为 $\operatorname{diag}\{1,1,2,2\}$ .

(4) 若 $a = 1$ 及 $b \neq 0$ , 则利用方法 1 (几何重数) 可得, $\pmb{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1, J_3(2)\}$ .

(5) 若 $a = 1$ 及 $b = 0$ , 则利用方法 1 (几何重数) 可得, $\pmb{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1,2,J_2(2)\}$ . $\square$ 

## § 7.7 过渡矩阵的求法

在 §6.4 中, 我们介绍了对可对角化矩阵 $A$ , 如何求过渡矩阵 $P$ , 使 $P^{-1}AP$ 是对角矩阵. 现在我们要介绍对一般的矩阵 $A$ (未必可对角化), 如何求过渡矩阵 $P$ , 使 $P^{-1}AP$ 为 Jordan 标准型. 下面将介绍 3 种方法: 第一种方法是利用 $\lambda$ -矩阵的初等变换, 通过计算特征矩阵之间的相抵变换来得到 $P$ ; 第二种方法是求解线性方程组, 通过计算特征向量和广义特征向量来得到 $P$ ; 第三种方法是利用 Jordan 标准型的几何意义, 通过计算循环子空间的循环向量来得到 $P$ . 当矩阵的阶数很大时, 这些方法都要涉及复杂的计算. 对于一般的阶数较低的数字矩阵, 我们通常使用第二种方法.

### 方法 1: 计算特征矩阵之间的相抵变换

例 7.58 设 A 是 n 阶数字矩阵, $P(\lambda)$ 及 $Q(\lambda)$ 是同阶可逆 $\lambda-$ 矩阵, 且

$$
\boldsymbol {Q} (\lambda) \left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}\right) \boldsymbol {P} (\lambda) = \lambda \boldsymbol {I} _ {n} - \boldsymbol {J},
$$

其中 $J$ 是 $\pmb{A}$ 的Jordan标准型. 又

$$
\boldsymbol {P} (\lambda) = \boldsymbol {T} (\lambda) (\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}) + \boldsymbol {P},
$$

其中 P 是数字矩阵, 求证: $P^{-1}AP = J$ .

证明 由已知可得 $(\lambda I_{n} - A)P(\lambda) = Q(\lambda)^{-1}(\lambda I_{n} - J)$ . 代入 $P(\lambda)$ , 可得

$$
\left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}\right) \left(\boldsymbol {T} (\lambda) \left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}\right) + \boldsymbol {P}\right) = \boldsymbol {Q} (\lambda) ^ {- 1} \left(\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}\right).
$$

整理可得

$$
(\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}) \boldsymbol {P} = (\boldsymbol {Q} (\lambda) ^ {- 1} - (\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}) \boldsymbol {T} (\lambda)) (\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}).
$$

比较 $\lambda$ 的次数可知, $Q(\lambda)^{-1} - (\lambda I_{n} - A)T(\lambda)$ 必须是数字矩阵, 记之为 R, 于是

$$
(\lambda I _ {n} - A) P = R (\lambda I _ {n} - J).
$$

去括号再次比较次数可得 P = R, AP = RJ. 若可证明 P 是可逆矩阵，即有 $P^{-1}AP = J$ . 由 $Q(\lambda)^{-1} - (\lambda I_n - A)T(\lambda) = R$ 可得

$$
\boldsymbol {I} _ {n} = \boldsymbol {Q} (\lambda) (\lambda \boldsymbol {I} _ {n} - \boldsymbol {A}) \boldsymbol {T} (\lambda) + \boldsymbol {Q} (\lambda) \boldsymbol {R}.
$$

注意到 $Q(\lambda)(\lambda I_n - A) = (\lambda I_n - J)P(\lambda)^{-1}$ , 故

$$
\boldsymbol {I} _ {n} = (\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}) \boldsymbol {P} (\lambda) ^ {- 1} \boldsymbol {T} (\lambda) + \boldsymbol {Q} (\lambda) \boldsymbol {R}.
$$

设 $Q(\lambda) = (\lambda I_n - J)M(\lambda) + N$ ，其中 $N$ 是数字矩阵，于是

$$
\boldsymbol {I} _ {n} = (\lambda \boldsymbol {I} _ {n} - \boldsymbol {J}) \left(\boldsymbol {P} (\lambda) ^ {- 1} \boldsymbol {T} (\lambda) + \boldsymbol {M} (\lambda) \boldsymbol {R}\right) + \boldsymbol {N} \boldsymbol {R}.
$$

比较次数可得 $NR = I_{n}$ ，即 R 可逆，也即 P 可逆。□

由例 7.58 可知, 两个数字矩阵相似当且仅当它们的特征矩阵作为 $\lambda-$ 矩阵相抵.

### 方法 2: 计算特征向量和广义特征向量

例 7.59 设复四维空间上的线性变换 $\varphi$ 在基 $\{e_{1}, e_{2}, e_{3}, e_{4}\}$ 下的表示矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 4 & - 1 & 1 & - 7 \\ 9 & - 2 & - 7 & - 1 \\ 0 & 0 & 5 & - 8 \\ 0 & 0 & 2 & - 3 \end{array} \right),
$$

求一组新基, 使 $\varphi$ 在这组新基下的表示矩阵是 $A$ 的 Jordan 标准型, 并求过渡矩阵.

解 通过计算可知 $\lambda I_4 - A$ 的法式为 $\operatorname{diag}\{1,1, (\lambda - 1)^2, (\lambda - 1)^2\}$ , 故 $A$ 的初等因子组为 $(\lambda - 1)^2, (\lambda - 1)^2$ , 从而 $A$ 的 Jordan 标准型为

$$
\boldsymbol {J} = \left( \begin{array}{c c c c} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{array} \right).
$$

设过渡矩阵为 $P = (\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4})$ ，则 $P^{-1}AP = J$ ，即

$$
\boldsymbol {A} \boldsymbol {P} = (\boldsymbol {A} \alpha_ {1}, \boldsymbol {A} \alpha_ {2}, \boldsymbol {A} \alpha_ {3}, \boldsymbol {A} \alpha_ {4}) = \boldsymbol {P} \boldsymbol {J} = (\alpha_ {1}, \alpha_ {2}, \alpha_ {3}, \alpha_ {4}) \boldsymbol {J},
$$

从而得到线性方程组:

$$
(A - I) \alpha_ {1} = 0, (A - I) \alpha_ {2} = \alpha_ {1}, (A - I) \alpha_ {3} = 0, (A - I) \alpha_ {4} = \alpha_ {3}.
$$

求解 $(A - I)x = 0$ 得到两个线性无关的解, 将它们分别作为 $\alpha_{1}$ 和 $\alpha_{3}$ :

$$
\alpha_ {1} = (1, 3, 0, 0) ^ {\prime}, \quad \alpha_ {3} = (5, 0, 6, 3) ^ {\prime}.
$$

再求解方程组 $(A - I)x = \alpha_{1}, (A - I)x = \alpha_{3}$ , 得到

$$
\alpha_ {2} = (\frac {1}{3}, 0, 0, 0) ^ {\prime}, \quad \alpha_ {4} = (\frac {7}{6}, 0, \frac {3}{2}, 0) ^ {\prime}.
$$

因此过渡矩阵

$$
\boldsymbol {P} = \left( \begin{array}{c c c c} 1 & \frac {1}{3} & 5 & \frac {7}{6} \\ 3 & 0 & 0 & 0 \\ 0 & 0 & 6 & \frac {3}{2} \\ 0 & 0 & 3 & 0 \end{array} \right),
$$

新基为 $(f_{1}, f_{2}, f_{3}, f_{4}) = (e_{1}, e_{2}, e_{3}, e_{4})P$ ，即

$$
\boldsymbol {f} _ {1} = \boldsymbol {e} _ {1} + 3 \boldsymbol {e} _ {2}, \quad \boldsymbol {f} _ {2} = \frac {1}{3} \boldsymbol {e} _ {1}, \quad \boldsymbol {f} _ {3} = 5 \boldsymbol {e} _ {1} + 6 \boldsymbol {e} _ {3} + 3 \boldsymbol {e} _ {4}, \quad \boldsymbol {f} _ {4} = \frac {7}{6} \boldsymbol {e} _ {1} + \frac {3}{2} \boldsymbol {e} _ {3}. \square
$$

注 在例 7.59 中, 任取 $(A-I)x=0$ 的两个线性无关的解作为特征向量 $\alpha_{1},\alpha_{3}$ , 都可以解出对应的广义特征向量 $\alpha_{2},\alpha_{4}$ , 即线性方程组 $(A-I)x=\alpha_{1}$ 和 $(A-I)x=\alpha_{3}$ 的可解性不依赖于 $\alpha_{1},\alpha_{3}$ 的选取 (请读者自行思考其中的原因), 但这并非是普遍的情形. 一般来说, 我们总可以取到 $(A-\lambda_{0}I)x=0$ 的一个非零解 $\alpha_{1}$ (即特征值 $\lambda_{0}$ 的特征向量), 但若 $\alpha_{1}$ 选取不当, 线性方程组 $(A-\lambda_{0}I)x=\alpha_{1}$ 有可能是无解的 (即求不出对应的广义特征向量). 因此在选取特征向量时, 需要我们仔细观察或设立参数, 这样才能保证最终得到正确的结果. 让我们来看下面两个例题中的具体分析.

例 7.60 设 $A = \begin{pmatrix} 2 & 6 & -15 \\ 1 & 1 & -5 \\ 1 & 2 & -6 \end{pmatrix}$ ，求非异阵 P，使 $P^{-1}AP$ 为 Jordan 标准型.

解 通过计算可知 $\lambda I_{3} - A$ 的法式为 $\mathrm{diag}\{1, \lambda + 1, (\lambda + 1)^2\}$ , 故 $A$ 的初等因子组为 $\lambda + 1, (\lambda + 1)^2$ , 从而 $A$ 的 Jordan 标准型为

$$
\boldsymbol {J} = \left( \begin{array}{c c c} - 1 & 0 & 0 \\ 0 & - 1 & 1 \\ 0 & 0 & - 1 \end{array} \right).
$$

设非异阵 $P = (\alpha_{1},\alpha_{2},\alpha_{3})$ ，使 $P^{-1}AP = J$ ，则 $AP = (A\alpha_{1},A\alpha_{2},A\alpha_{3}) = PJ =$ $(\alpha_{1},\alpha_{2},\alpha_{3})J,$ 从而得到线性方程组：

$$
(A + I _ {3}) \alpha_ {1} = 0, (A + I _ {3}) \alpha_ {2} = 0, (A + I _ {3}) \alpha_ {3} = \alpha_ {2}.
$$

求解 $(A + I_3)x = 0$ 得到两个线性无关的解 $\beta_{1} = (-2,1,0)^{\prime}$ 和 $\beta_{2} = (5,0,1)^{\prime}$ . 注意到 $(A + I_3)x = \beta_{i}(i = 1,2)$ 都是无解的, 故不能将 $\beta_{1}$ 或 $\beta_{2}$ 直接作为 $\alpha_{2}$ 来求广义特征向量 $\alpha_{3}$ . 一般地, 可设 $\alpha_{2} = k_{1}\beta_{1} + k_{2}\beta_{2} = (-2k_{1} + 5k_{2}, k_{1}, k_{2})^{\prime}$ , 代入 $(A + I_3)x = \alpha_{2}$ 中, 利用 $\mathrm{r}(A + I_3; \alpha_{2}) = \mathrm{r}(A + I_3)$ 可得 $k_{1} = k_{2}$ . 因此, 可取 $\alpha_{1} = \beta_{1} = (-2,1,0)^{\prime}, \alpha_{2} = \beta_{1} + \beta_{2} = (3,1,1)^{\prime}$ , 此时可解出 $\alpha_{3} = (1,0,0)^{\prime}$ , 于是

$$
\boldsymbol {P} = \left( \begin{array}{c c c} - 2 & 3 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 0 \end{array} \right). \square
$$

例 7.61 设 $A=\begin{pmatrix}1&-1&0&1\\1&1&1&0\\0&-1&1&1\\1&0&1&1\end{pmatrix}$ ，求非异阵 P，使 $P^{-1}AP$ 为 Jordan 标准型.

解 通过计算可知 $\lambda I_4 - A$ 的法式为 $\operatorname{diag}\{1,1,\lambda -1,(\lambda -1)^3\}$ , 故 $A$ 的初等因子组为 $\lambda -1, (\lambda -1)^3$ , 从而 $A$ 的 Jordan 标准型为 $J = \operatorname{diag}\{1,J_3(1)\}$ . 设非异阵 $P = (\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4})$ , 使 $P^{-1}AP = J$ , 则 $AP = (A\alpha_{1},A\alpha_{2},A\alpha_{3},A\alpha_{4}) = PJ = (\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4})J$ , 从而得到线性方程组:

$$
(\boldsymbol {A} - \boldsymbol {I} _ {4}) \alpha_ {1} = \mathbf {0}, (\boldsymbol {A} - \boldsymbol {I} _ {4}) \alpha_ {2} = \mathbf {0}, (\boldsymbol {A} - \boldsymbol {I} _ {4}) \alpha_ {3} = \alpha_ {2}, (\boldsymbol {A} - \boldsymbol {I} _ {4}) \alpha_ {4} = \alpha_ {3}.
$$

求解 $(A-I_{4})x=0$ 得到两个线性无关的解 $\beta_{1}=(-1,0,1,0)^{\prime}$ 和 $\beta_{2}=(0,1,0,1)^{\prime}$ .
设 $\alpha_{2}=k_{1}\beta_{1}+k_{2}\beta_{2}$ ，代入 $(A-I_{4})x=\alpha_{2}$ 中，利用 $\mathrm{r}(A-I_{4};\alpha_{2})=\mathrm{r}(A-I_{4})$ 可得 $k_{1}=0$ 。于是可取 $\alpha_{2}=k_{2}\beta_{2}$ ，解出 $\alpha_{3}=k_{2}e_{1}+k_{3}\beta_{1}+k_{4}\beta_{2}$ ，其中 $e_{1}=(1,0,0,0)^{\prime}$ 。
再代入 $(A-I_{4})x=\alpha_{3}$ 中，利用 $\mathrm{r}(A-I_{4};\alpha_{3})=\mathrm{r}(A-I_{4})$ 可得 $k_{2}=2k_{3}$ 。于是可取 $k_{2} = 2, k_{3} = 1, k_{4} = 0$ , 最终得到特征向量 $\alpha_{1} = \beta_{1} = (-1,0,1,0)^{\prime}, \alpha_{2} = 2\beta_{2} = (0,2,0,2)^{\prime}$ , 1 级广义特征向量 $\alpha_{3} = 2e_{1} + \beta_{1} = (1,0,1,0)^{\prime}$ , 2 级广义特征向量 $\alpha_{4} = (0,0,0,1)^{\prime}$ , 从而

$$
\boldsymbol {P} = \left( \begin{array}{c c c c} - 1 & 0 & 1 & 0 \\ 0 & 2 & 0 & 0 \\ 1 & 0 & 1 & 0 \\ 0 & 2 & 0 & 1 \end{array} \right). \square
$$

### 方法 3: 计算循环子空间的循环向量

根据 § 7.10 中所述 Jordan 标准型的几何意义, 全空间可分解为不同特征值的根子空间的直和, 每个根子空间可分解为若干个循环子空间的直和, 每个循环子空间对应于一条循环轨道, 这条轨道由循环向量 (即最高级的广义特征向量) 生成. 下面以幂零根子空间为例, 说明如何确定所有的循环向量, 从而确定所有的基向量 (等价于求过渡矩阵 $P$ ).

例 7.62 设 9 阶幂零矩阵 A 的 Jordan 标准型 $J = \text{diag}\{0, J_2(0), J_3(0), J_3(0)\}$ ，求非异阵 P，使 $P^{-1}AP = J$ .

解 由已知条件 $A^3 = O, r(A^2) = 2$ 且 $r(A) = 5$ , 可设 $A^2 x = 0$ 的基础解系为 $\{\eta_i, 1 \leq i \leq 7\}$ . 由于 $A^2$ 的列秩为 2, 故不妨设 $A^2$ 的第 1 列和第 2 列是 $A^2$ 列向量的极大无关组, 即 $A^2 e_1, A^2 e_2$ 线性无关, 其中 $e_1, e_2$ 是 9 维标准单位列向量的前两个. 考虑限制映射 $A|_{\operatorname{Ker} A^2}: \operatorname{Ker} A^2 \to \operatorname{Ker} A$ , 容易验证 $\operatorname{Ker}(A|_{\operatorname{Ker} A^2}) = \operatorname{Ker} A$ , $\operatorname{Im}(A|_{\operatorname{Ker} A^2}) = \operatorname{Ker} A \cap \operatorname{Im} A$ . 由 $\dim \operatorname{Ker} A^2 = 7$ , $\dim \operatorname{Ker} A = 4$ 可知 $\dim (\operatorname{Ker} A \cap \operatorname{Im} A) = 3$ , 且 $\operatorname{Ker} A \cap \operatorname{Im} A = L(A \eta_i, 1 \leq i \leq 7)$ . 注意到 $A^2 e_1, A^2 e_2$ 是 $\operatorname{Ker} A \cap \operatorname{Im} A$ 中两个线性无关的向量, 故可从其生成元中取出一个向量, 不妨设为 $A \eta_1$ , 使得 $A^2 e_1, A^2 e_2, A \eta_1$ 线性无关. 再次注意到 $\dim \operatorname{Ker} A = 4$ , 且 $A^2 e_1, A^2 e_2, A \eta_1$ 是 $\operatorname{Ker} A$ 中 3 个线性无关的向量, 故可从其一组基 (即 $Ax = 0$ 的基础解系) 中取出一个向量 $\xi_1$ , 使得 $A^2 e_1, A^2 e_2, A \eta_1, \xi_1$ 线性无关.

下面证明: $\{e_1, Ae_1, A^2e_1, e_2, Ae_2, A^2e_2, \eta_1, A\eta_1, \xi_1\}$ 构成 $\mathbb{C}^9$ 的一组基. 只要证明它们线性无关即可. 设 $c_1, \cdots, c_9 \in \mathbb{C}$ , 使得

$$
c _ {1} \boldsymbol {e} _ {1} + c _ {2} \boldsymbol {A} \boldsymbol {e} _ {1} + c _ {3} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {1} + c _ {4} \boldsymbol {e} _ {2} + c _ {5} \boldsymbol {A} \boldsymbol {e} _ {2} + c _ {6} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {2} + c _ {7} \boldsymbol {\eta} _ {1} + c _ {8} \boldsymbol {A} \boldsymbol {\eta} _ {1} + c _ {9} \boldsymbol {\xi} _ {1} = \mathbf {0}. \tag {7.10}
$$

将(7.10)式作用 $A^2$ 可得

$$
c _ {1} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {1} + c _ {4} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {2} = \mathbf {0},
$$

由 $A^{2}e_{1}, A^{2}e_{2}$ 线性无关可知 $c_{1}=c_{4}=0$ . 将 (7.10) 式作用 A 可得

$$
c _ {2} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {1} + c _ {5} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {2} + c _ {7} \boldsymbol {A} \boldsymbol {\eta} _ {1} = \mathbf {0},
$$

由 $A^{2}e_{1}, A^{2}e_{2}, A\eta_{1}$ 线性无关可知 $c_{2}=c_{5}=c_{7}=0$ . (7.10) 式最后变成

$$
c _ {3} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {1} + c _ {6} \boldsymbol {A} ^ {2} \boldsymbol {e} _ {2} + c _ {8} \boldsymbol {A} \boldsymbol {\eta} _ {1} + c _ {9} \boldsymbol {\xi} _ {1} = \mathbf {0},
$$

由 $A^2 e_1, A^2 e_2, A\eta_1, \xi_1$ 线性无关可知 $c_3 = c_6 = c_8 = c_9 = 0$ . 有了上面这组基, 我们可以把 4 个循环子空间的循环轨道全部确定如下:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-28/4a04e9d2-e9c7-4673-9174-4c0d8309e65c/a5de8193aea9f29f61f48528cd0b1dbe8094270f96853052508c8ce0d7a7d97c.jpg)


最后，令 $P = (\xi_1, A\eta_1, \eta_1, A^2 e_1, Ae_1, e_1, A^2 e_2, Ae_2, e_2)$ 即为所求. □

注 例 7.62 采用的方法可以推广到一般的情形, 其原理是: 设 $n$ 阶幂零矩阵 $\mathbf{A}$ 的极小多项式为 $\lambda^k$ , 则依次选取第 $i$ 级广义特征向量 $\xi_i (i = k - 1, \cdots, 0)$ , 使得所有的 $A^i\xi_i (i = k - 1, \cdots, 0)$ 在 $\operatorname{Ker} A$ 中线性无关即可. 具体的证明请读者参考 [10].

例 7.59 的解法 2 A 的初等因子组的计算同解法 1, 可得 A 的 Jordan 标准型 $J = \text{diag}\{J_2(1), J_2(1)\}$ . 注意到 $(A - I_4)^2 = O$ 且 $r(A - I_4) = 2$ , 故可取 $A - I_4$ 的第 1 列和第 3 列作为其列向量的极大无关组. 因此 $e_1 = (1, 0, 0, 0)'$ , $e_3 = (0, 0, 1, 0)'$ 为广义特征向量, 使得 $(A - I_4)e_1 = (3, 9, 0, 0)'$ , $(A - I_4)e_3 = (1, -7, 4, 2)'$ 为线性无关的特征向量, 则过渡矩阵 $P = ((A - I_4)e_1, e_1, (A - I_4)e_3, e_3)$ 满足 $P^{-1}AP = J$ . □

例 7.60 的解法 2 A 的初等因子组的计算同解法 1, 可得 A 的 Jordan 标准型 $J = \text{diag}\{-1, J_2(-1)\}$ . 注意到 $(A + I_3)^2 = O$ 且 $r(A + I_3) = 1$ , 故可取 $A + I_3$ 的第 1 列作为其列向量的极大无关组. 因此 $e_1 = (1, 0, 0)'$ 为循环向量 (即广义特征向量), 使得 $e_1, (A + I_3)e_1 = (3, 1, 1)'$ 构成了 $J_2(-1)$ 的循环轨道. 再取线性无关的特征向量 $\xi_1 = (-2, 1, 0)'$ , 则过渡矩阵 $P = (\xi_1, (A + I_3)e_1, e_1)$ 满足 $P^{-1}AP = J$ . □

例 7.61 的解法 2 A 的初等因子组的计算同解法 1, 可得 A 的 Jordan 标准型 $J = \text{diag}\{1, J_3(1)\}$ . 注意到 $(A - I_4)^3 = O$ 且 $\mathrm{r}\left((A - I_4)^2\right) = 1$ , 故可取 $(A - I_4)^2$ 的第 4 列作为其列向量的极大无关组. 因此 $e_4 = (0, 0, 0, 1)'$ 为循环向量 (即 2 级广义特征向量), 使得 $e_4, (A - I_4)e_4 = (1, 0, 1, 0)'$ , $(A - I_4)^2e_4 = (0, 2, 0, 2)'$ 构成了 $J_3(1)$ 的循环轨道. 再取线性无关的特征向量 $\xi_1 = (-1, 0, 1, 0)'$ , 则过渡矩阵 $P = (\xi_1, (A - I_4)^2e_4, (A - I_4)e_4, e_4)$ 满足 $P^{-1}AP = J$ . □

下面的例题利用根子空间直和分解给出了当矩阵有两个不同特征值时过渡矩阵的求法. 一般情形的证明请读者参考 [10].

例 7.63 设 $A = \begin{pmatrix} 3 & -4 & 0 & 2 \\ 4 & -5 & -2 & 4 \\ 0 & 0 & 3 & -2 \\ 0 & 0 & 2 & -1 \end{pmatrix}$ ，求非异阵 P，使 $P^{-1}AP$ 为 Jordan 标准型.

解 经计算可知 A 的初等因子组为 $(\lambda+1)^{2}$ , $(\lambda-1)^{2}$ , 于是 A 的 Jordan 标准型为 $J=\mathrm{diag}\{J_{2}(-1),J_{2}(1)\}$ . 由例 6.94 可知, $\mathbb{C}^{4}=\mathrm{Ker}(A+I_{4})^{2}\oplus\mathrm{Ker}(A-I_{4})^{2}$ , 且 $\mathrm{Ker}(A+I_{4})^{2}=\mathrm{Im}(A-I_{4})^{2}$ , $\mathrm{Ker}(A-I_{4})^{2}=\mathrm{Im}(A+I_{4})^{2}$ . 经计算可取 $(A-I_{4})^{2}$ 的第二列 $\alpha=(A-I_{4})^{2}e_{2}=(16,20,0,0)^{\prime}$ 作为根子空间 $\mathrm{Ker}(A+I_{4})^{2}$ 中的循环向量（即广义特征向量），于是 $\alpha,(A+I_{4})\alpha=(-16,-16,0,0)^{\prime}$ 构成根子空间 $\mathrm{Ker}(A+I_{4})^{2}$ 中的循环轨道. 经计算可取 $(A+I_{4})^{2}$ 的第三列 $\beta=(A+I_{4})^{2}e_{3}=(12,8,12,8)^{\prime}$ 作为根子空间 $\mathrm{Ker}(A-I_{4})^{2}$ 中的循环向量（即广义特征向量），于是 $\beta,(A-I_{4})\beta=(8,8,8,8)^{\prime}$ 构成根子空间 $\mathrm{Ker}(A-I_{4})^{2}$ 中的循环轨道. 因此，过渡矩阵 $P=((A+I_{4})\alpha,\alpha,(A-I_{4})\beta,\beta)$ 满足 $P^{-1}AP=J$ . □

下面的例题也与过渡矩阵有关, 它告诉我们: 满足基础矩阵乘法性质的矩阵类与基础矩阵类之间存在着一个相似变换. 利用这一结论可以证明: $n$ 阶矩阵环 $M_{n}(\mathbb{K})$ 的任一自同构都是内自同构.

例 7.64 设有 $n^{2}$ 个 n 阶非零矩阵 $A_{ij}(1 \leq i, j \leq n)$ ，适合

$$
\boldsymbol {A} _ {i j} \boldsymbol {A} _ {j k} = \boldsymbol {A} _ {i k}, \quad \boldsymbol {A} _ {i j} \boldsymbol {A} _ {l k} = \boldsymbol {O} (j \neq l).
$$

求证: 存在可逆矩阵 P, 使得对任意的 i, j, $P^{-1}A_{ij}P = E_{ij}$ , 其中 $E_{ij}$ 是基础矩阵.

证明 因为 $A_{11} \neq O$ , 故存在 $\alpha$ , 使得 $A_{11}\alpha \neq 0$ . 令 $\alpha_1 = A_{11}\alpha$ , 由 $A_{11}A_{11} = A_{11}$ 可得 $A_{11}\alpha_1 = \alpha_1$ . 再令 $\alpha_i = A_{i1}\alpha_1$ , 由 $A_{1i}A_{i1} = A_{11}$ 可知 $\alpha_i \neq 0$ . 我们得到了 n 个非零向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ ，由已知条件容易验证这 n 个向量适合下列性质：

$$
\boldsymbol {A} _ {i j} \boldsymbol {\alpha} _ {j} = \boldsymbol {\alpha} _ {i}, \quad \boldsymbol {A} _ {i j} \boldsymbol {\alpha} _ {k} = \mathbf {0} (j \neq k),
$$

由此不难证明这 n 个向量线性无关. 令 $P = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ ，则 P 是可逆矩阵，且

$$
\boldsymbol {A} _ {i j} \boldsymbol {P} = \left(\boldsymbol {A} _ {i j} \alpha_ {1}, \boldsymbol {A} _ {i j} \alpha_ {2}, \dots , \boldsymbol {A} _ {i j} \alpha_ {n}\right) = (0, \dots , 0, \alpha_ {i}, 0, \dots , 0),
$$

其中上式中的 $\alpha_{i}$ 在第 $j$ 列. 另一方面, 有

$$
\boldsymbol {P} \boldsymbol {E} _ {i j} = (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) \boldsymbol {E} _ {i j} = (0, \dots , 0, \alpha_ {i}, 0, \dots , 0).
$$

因此，对任意的 $i,j$ ， $\pmb{A}_{ij}\pmb {P} = \pmb{PE}_{ij}$ ，即 $P^{-1}\pmb{A}_{ij}\pmb {P} = \pmb{E}_{ij}$ □

## § 7.8 Jordan 标准型的应用

Jordan 标准型形式简单, 理论优美, 有着广泛的用途. 例如利用 Jordan 标准型可以计算矩阵的多项式和幂级数, 并给出矩阵函数的定义 (参考 §7.9), 这在微分方程理论中有着众多的应用. 利用 Jordan 标准型还能证明许多重要的定理, 例如 Jordan-Chevalley 分解定理 (例 7.33), 它在李代数理论中发挥着重要的作用. 本节主要阐述 Jordan 标准型理论在处理矩阵问题方面的应用, 主要内容分成 4 个部分: 利用 Jordan 标准型研究矩阵的性质; 运用 Jordan 标准型进行相似问题的化简; 应用 Jordan 标准型的三段论法; 采用 Jordan 块作为测试矩阵. 如无特殊说明, 本节总在复数域 C 上考虑问题.

### 1. 利用 Jordan 标准型研究矩阵的性质

例 7.65 设 A 是 n 阶复矩阵, 求证: A 相似于分块对角矩阵 $\mathrm{diag}\{B,C\}$ , 其中 B 是幂零矩阵, C 是可逆矩阵.

证明 我们发现 A 的初等因子分离开了零特征值和非零特征值, 从而 A 的 Jordan 标准型满足题目要求. 此时, 可将零特征值的 Jordan 块 $J_{r}(0)$ (幂零矩阵) 放入 B 中, 将非零特征值的 Jordan 块 $J_{r}(\lambda_{0})$ (可逆矩阵) 放入 C 中, 即得结论. □

注 例 7.65 告诉我们: 在相似的意义下, 对复方阵的研究可归结为对幂零矩阵和可逆矩阵这两类特殊矩阵的研究, 它们的刻画分别是: 特征值全为零以及特征值全不为零. 这也是前面很多例题都处理这两类矩阵的深层次原因.

注意到非零特征值的 Jordan 块满秩, 零特征值 Jordan 块的秩等于阶数减 1, 故 r(A) 等于阶数 n 减去零特征值 Jordan 块的个数. 这种关于 Jordan 块秩的观察可以给出下面例子的第二种证法.

例 7.22 设 A 是数域 K 上的 n 阶方阵, 求证: A 的极小多项式的次数小于等于 r(A) + 1.

证法2 从 $\pmb{A}$ 的极小多项式 $m(\lambda)$ 分离出来的初等因子中, 形如 $\lambda^r$ 的初等因子至多只有1个, 对应于零特征值的Jordan块 $J_r(0)$ , 其余的初等因子对应于非零特征值的Jordan块. 因此 $\mathrm{r}(\mathbf{A})$ 大于等于这些Jordan块秩的和, 后者等于 $\deg m(\lambda) - 1$ 或 $\deg m(\lambda)$ . □

设 A 是 n 阶矩阵, 例 4.34 告诉我们: $\mathrm{r}(A^{n}) = \mathrm{r}(A^{n+1}) = \mathrm{r}(A^{n+2}) = \cdots$ . 下面的例子给出了这一结果的推广.

例 7.66 设 $\lambda_{0}$ 是 n 阶矩阵 A 的特征值, 其代数重数为 m. 设属于特征值 $\lambda_{0}$ 的最大 Jordan 块的阶数为 k, 求证:

$$
\mathrm{r} \left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) > \dots > \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k}\right) = \mathrm{r} \left(\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) ^ {k + 1}\right) = \dots = n - m.
$$

证明 设 P 为可逆矩阵, 使 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_s}(\lambda_s)\}$ 为 Jordan 标准型, 则对任意的正整数 j,

$$
\mathrm{r} \left((\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {j}\right) = \mathrm{r} \left(\boldsymbol {P} ^ {- 1} (\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {j} \boldsymbol {P}\right) = \mathrm{r} \left((\boldsymbol {J} - \lambda_ {0} \boldsymbol {I} _ {n}) ^ {j}\right) = \sum_ {i = 1} ^ {s} \mathrm{r} \left(\boldsymbol {J} _ {r _ {i}} (\lambda_ {i} - \lambda_ {0}) ^ {j}\right).
$$

若 $\lambda_{i} \neq \lambda_{0}$ , 则 $\mathrm{r}\left(J_{r_{i}}(\lambda_{i}-\lambda_{0})^{j}\right)=r_{i}$ . 若 $\lambda_{i}=\lambda_{0}$ , 则当 $1 \leq j \leq r_{i}$ 时, $\mathrm{r}\left(J_{r_{i}}(0)^{j}\right)=r_{i}-j$ ; 当 $j \geq r_{i}$ 时, $\mathrm{r}\left(J_{r_{i}}(0)^{j}\right)=0$ . 注意到 $\mathbf{A}$ 至少有一个 Jordan 块 $J_{k}(\lambda_{0})$ , 并且属于特征值 $\lambda_{0}$ 的所有 Jordan 块阶数之和等于 $m$ , 故当 $1 \leq j \leq k$ 时, $\mathrm{r}\left((\mathbf{A}-\lambda_{0}\mathbf{I}_{n})^{j}\right)$ 严格递减; 当 $j \geq k$ 时, $\mathrm{r}\left((\mathbf{A}-\lambda_{0}\mathbf{I}_{n})^{j}\right)=n-m$ . □

例 7.67 设 $\lambda_{0}$ 是 n 阶复矩阵 A 的特征值, 并且属于 $\lambda_{0}$ 的初等因子都是次数大于等于 2 的多项式. 求证: 特征值 $\lambda_{0}$ 的任一特征向量 $\alpha$ 均可表示为 $A - \lambda_{0}I_{n}$ 的列向量的线性组合.

证明 由 Jordan 标准型理论可知, 属于特征值 $\lambda_0$ 的每个 Jordan 块的特征向量均只有一个, 并且特征值 $\lambda_0$ 的任一特征向量都是这些特征向量的线性组合, 因此我们只要证明 $A$ 的 Jordan 标准型只含一个 Jordan 块 $J_n(\lambda_0)$ 的情形即可. 设 $P = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为非异阵, 使得 $P^{-1}AP = J_n(\lambda_0)$ , 即 $AP = PJ_n(\lambda_0)$ , 利用

分块矩阵的乘法可得

$$
\boldsymbol {A} \alpha_ {1} = \lambda_ {0} \alpha_ {1}, \boldsymbol {A} \alpha_ {2} = \alpha_ {1} + \lambda_ {0} \alpha_ {2}, \dots , \boldsymbol {A} \alpha_ {n} = \alpha_ {n - 1} + \lambda_ {0} \alpha_ {n}.
$$

注意到 $n \geq 2$ , 故有 $\alpha_{1} = (A - \lambda_{0}I_{n})\alpha_{2}$ , 从而特征向量 $\alpha_{1}$ 可表示为 $A - \lambda_{0}I_{n}$ 的列向量的线性组合. □

注 若特征值 $\lambda_0$ 有一个初等因子为一次多项式, 则必存在特征向量 $\alpha$ , 它不能表示为 $A - \lambda_0 I_n$ 的列向量的线性组合. 证明的细节留给读者完成. 一个极端的例子就是 $A = I_n$ , 其特征值 1 的初等因子都是一次的, 并且任一特征向量都不是 $A - I_n = O$ 的列向量的线性组合. 例 7.67 与例 7.40 (可对角化的判定) 有着密切的联系, 请读者思考两者之间的关系.

### 2. 运用 Jordan 标准型进行相似问题的化简

如果矩阵问题的条件和结论在同时相似关系下不改变, 则可将其中一个矩阵变成 Jordan 标准型, 进行问题的化简. 我们来看下面几个典型的例题.

例 7.68 设 A, B 为 n 阶矩阵, 满足 AB = BA = O, r(A) = r(A²), 求证: r(A + B) = r(A) + r(B).

证明 注意到问题的条件和结论在同时相似变换: $A \mapsto P^{-1}AP, B \mapsto P^{-1}BP$ 下不改变, 故不妨从一开始就假设 $A$ 为 Jordan 标准型. 设 $A = \operatorname{diag}\{A_0, A_1\}$ , 其中 $A_0$ 由零特征值的 Jordan 块构成, $A_1$ 由非零特征值的 Jordan 块构成. 由 $\mathrm{r}(A) = \mathrm{r}(A^2)$ 可知, 零特征值的 Jordan 块都是一阶的, 即 $A_0 = O$ . 将 $B$ 进行对应的分块 $B = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ , 则由 $AB = BA = O$ 以及 $A_1$ 非异可知, $B_{12}, B_{21}$ 和 $B_{22}$ 都是零矩阵. 于是

$$
\mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) = \mathrm{r} \left( \begin{array}{c c} \boldsymbol {B} _ {1 1} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {A} _ {1} \end{array} \right) = \mathrm{r} (\boldsymbol {B} _ {1 1}) + \mathrm{r} (\boldsymbol {A} _ {1}) = \mathrm{r} (\boldsymbol {B}) + \mathrm{r} (\boldsymbol {A}).
$$

例 6.32 设 A, B, C 是 n 阶矩阵, 其中 C = AB - BA. 若它们满足条件 AC = CA, BC = CB, 求证: C 的特征值全为零.

证法3 注意到问题的条件和结论在同时相似变换: $A \mapsto P^{-1}AP, B \mapsto P^{-1}BP$ , $C \mapsto P^{-1}CP$ 下不改变, 故不妨从一开始就假设 $C$ 为 Jordan 标准型. 设 $C = \operatorname{diag}\{J_1, J_2, \cdots, J_k\}$ , 其中 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $C$ 的全体不同特征值, $J_i$ 是属于特征值 $\lambda_i$ 的所有 Jordan 块拼成的根子空间分块. 由于 $J_i$ 的特征值为 $\lambda_i$ , 它们互不相同, 又 $AC = CA, BC = CB$ , 故由例 6.90 可知, $A = \operatorname{diag}\{A_1, A_2, \cdots, A_k\}, B =$ $\operatorname{diag}\{B_1, B_2, \cdots, B_k\}$ 和 $C$ 一样也是分块对角矩阵. 于是我们有 $J_i = A_i B_i - B_i A_i$ , 两边同取迹可得

$$
n _ {i} \lambda_ {i} = \operatorname{tr} (\boldsymbol {J} _ {i}) = \operatorname{tr} (\boldsymbol {A} _ {i} \boldsymbol {B} _ {i} - \boldsymbol {B} _ {i} \boldsymbol {A} _ {i}) = \operatorname{tr} (\boldsymbol {A} _ {i} \boldsymbol {B} _ {i}) - \operatorname{tr} (\boldsymbol {B} _ {i} \boldsymbol {A} _ {i}) = 0,
$$

从而 k=1 且 C 的特征值全为零. □

注 设 A, B 分别是 m, n 阶矩阵, $M_{m \times n}(\mathbb{C})$ 上的线性变换 $\varphi$ 定义为 $\varphi(X) = AX - XB$ , 则下列 3 个结论等价:

(1) $\varphi$ 是单映射;

(2) $\varphi$ 是自同构;

(3) 对某个给定的 $m \times n$ 矩阵 C, 存在唯一的 $X_{0}$ , 使得 $\varphi(X_{0}) = C$ .

事实上, $(1) \Rightarrow (2)$ 以及 $(2) \Rightarrow (3)$ 显然都成立. 用反证法来证明 $(3) \Rightarrow (1)$ : 若 $\operatorname{Ker} \varphi \neq 0$ , 则 $\operatorname{Ker} \varphi$ 中任一非零元 $X_{1}$ 都满足 $\varphi(X_{0} + X_{1}) = C$ , 这与唯一性矛盾. 因此, 例7.69和例7.70都等价于例6.91, 下面给出它们的Jordan标准型证法.

例 7.69 设 A, B 分别是 m, n 阶矩阵, 求证: 矩阵方程 AX = XB 只有零解的充要条件是 A, B 无公共的特征值.

证明 先做两步化简. 注意到问题的条件和结论在矩阵变换: $B \mapsto P^{-1}BP$ , $X \mapsto XP$ 下不改变, 故不妨从一开始就假设 $B$ 为 Jordan 标准型. 设 $X = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为列分块, 则有

$$
\boldsymbol {A} \boldsymbol {X} = (\boldsymbol {A} \alpha_ {1}, \boldsymbol {A} \alpha_ {2}, \dots , \boldsymbol {A} \alpha_ {n}) = (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) \boldsymbol {B} = \boldsymbol {X} \boldsymbol {B}. \tag {7.11}
$$

若 B 有 k 个 Jordan 块, 则方程组 (7.11) 可分解为 k 个独立方程组. 注意到:

(i) 方程组 (7.11) 只有零解当且仅当这 $k$ 个独立方程组都只有零解;

(ii) 方程组 (7.11) 有非零解当且仅当这 $k$ 个独立方程组中至少有一个有非零解.

因此, 不妨进一步假设 $B = J_{n}(\lambda_{0})$ 为 Jordan 块. 此时, 方程组 (7.11) 等价于下列方程组:

$$
\boldsymbol {A} \alpha_ {1} = \lambda_ {0} \alpha_ {1}, \quad \boldsymbol {A} \alpha_ {2} = \alpha_ {1} + \lambda_ {0} \alpha_ {2}, \dots , \quad \boldsymbol {A} \alpha_ {n} = \alpha_ {n - 1} + \lambda_ {0} \alpha_ {n}.
$$

充分性: 假设 $A, B$ 没有公共的特征值, 则 $\lambda_0$ 不是 $A$ 的特征值, 从而由 $A\alpha_1 = \lambda_0\alpha_1$ 只能得到 $\alpha_1 = 0$ . 代入第二个方程可得 $A\alpha_2 = \lambda_0\alpha_2$ , 相同的理由可推出 $\alpha_2 = 0$ . 不断这样做下去, 最后可得 $\alpha_i = 0 (1 \leq i \leq n)$ , 即 $X = O$ , 从而矩阵方程 $AX = XB$ 只有零解.

必要性: 假设 A 和 $B = J_{n}(\lambda_{0})$ 有公共的特征值 $\lambda_{0}$ ，在上述方程组中令 $\alpha_{1} = \cdots = \alpha_{n-1} = 0$ 。因为 $\lambda_{0}$ 也是 A 的特征值，所以 $A\alpha_{n} = \lambda_{0}\alpha_{n}$ 有非零解 $\alpha_{n} = \alpha$ ，于是 $X_{0} = (0, \cdots, 0, \alpha)$ 是上述方程组的非零解，从而矩阵方程 AX = XB 有非零解。☐

例 7.70 设 A, B 分别是 m, n 阶矩阵, C 是 $m \times n$ 矩阵, 求证: 矩阵方程 AX - XB = C 存在唯一解的充要条件是 A, B 无公共的特征值.

证明 先做两步化简. 注意到问题的条件和结论在矩阵变换: $B \mapsto P^{-1}BP$ , $C \mapsto CP$ , $X \mapsto XP$ 下不改变, 故不妨从一开始就假设 $B$ 为 Jordan 标准型. 设 $X = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ , $C = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ 为列分块, 则 $AX - XB = C$ 即为:

$$
\left(\boldsymbol {A} \alpha_ {1}, \boldsymbol {A} \alpha_ {2}, \dots , \boldsymbol {A} \alpha_ {n}\right) - \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right) \boldsymbol {B} = \left(\beta_ {1}, \beta_ {2}, \dots , \beta_ {n}\right). \tag {7.12}
$$

若 B 有 k 个 Jordan 块, 则方程组 (7.12) 可分解为 k 个独立方程组. 注意到:

(i) 方程组 (7.12) 无解当且仅当这 $k$ 个独立方程组中至少有一个无解;

(ii) 方程组 (7.12) 有唯一解当且仅当这 $k$ 个独立方程组都只有唯一解;

(iii) 方程组 (7.12) 有无穷个解当且仅当这 $k$ 个独立方程组都有解, 且至少有一个有无穷个解.

进一步, 若假设 $B = J_{n}(\lambda_{0})$ 为 Jordan 块, 则方程组 (7.12) 等价于下列方程组:

$$
\left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) \boldsymbol {\alpha} _ {1} = \beta_ {1}, \left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) \boldsymbol {\alpha} _ {2} = \boldsymbol {\alpha} _ {1} + \beta_ {2}, \dots , \left(\boldsymbol {A} - \lambda_ {0} \boldsymbol {I} _ {n}\right) \boldsymbol {\alpha} _ {n} = \boldsymbol {\alpha} _ {n - 1} + \beta_ {n}.
$$

充分性: 假设 A, B 没有公共的特征值, 则 $\lambda_{0}$ 不是 A 的特征值, 从而 $A - \lambda_{0}I_{n}$ 是可逆矩阵. 从第一个方程可解得 $\boldsymbol{\alpha}_{1} = (\boldsymbol{A} - \lambda_{0}\boldsymbol{I}_{n})^{-1}\beta_{1}$ , 代入第二个方程可解得 $\boldsymbol{\alpha}_{2} = (\boldsymbol{A} - \lambda_{0}\boldsymbol{I}_{n})^{-1}(\boldsymbol{\alpha}_{1} + \beta_{2}), \cdots$ , 代入最后一个方程可解得 $\boldsymbol{\alpha}_{n} = (\boldsymbol{A} - \lambda_{0}\boldsymbol{I}_{n})^{-1}(\boldsymbol{\alpha}_{n-1} + \beta_{n})$ , 从而上述方程组有唯一解, 因此矩阵方程 AX - XB = C 也有唯一解.

必要性: 假设 A, B 有公共的特征值 $\lambda_{0}$ , 若这 k 个独立方程组中有一个无解, 则矩阵方程 AX - XB = C 无解, 从而结论成立. 若这 k 个独立方程组都有解, 则不妨设 $B = J_{n}(\lambda_{0})$ 为 Jordan 块. 由于 $\lambda_{0}$ 是 A 的特征值, 故 $(A - \lambda_{0}I_{n})x = 0$ 有无穷个解. 注意到, 若 $(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 是上述方程组的一个解, 则对 $(A - \lambda_{0}I_{n})x = 0$ 的任一解 $\alpha_{0}, (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n} + \alpha_{0})$ 也是上述方程组的解, 因此矩阵方程 AX - XB = C 有无穷个解. □

### 3. 应用 Jordan 标准型的三段论法

如果矩阵问题的条件和结论在相似关系下不改变, 则可以先证明结论对 Jordan 块成立, 再证明对 Jordan 标准型成立, 最后证明对一般的矩阵也成立, 这就是所谓的“三段论法”. 事实上, 我们已经利用三段论法证明过例 7.7 和例 7.8, 下面再来看一些典型的例题.

首先, 我们来看计算矩阵乘幂的问题. 设 A 为 n 阶矩阵, P 为 n 阶可逆矩阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_k}(\lambda_k)\}$ 为 Jordan 标准型. 注意任一 Jordan 块 $J_{r_i}(\lambda_i)$ 都有分解 $J_{r_i}(\lambda_i) = \lambda_i I_{r_i} + N$ , 其中 $N = J_{r_i}(0)$ 是特征值为零的 $r_i$ 阶 Jordan 块, 故对任意的正整数 m,

$$
\boldsymbol {J} _ {r _ {i}} (\lambda_ {i}) ^ {m} = (\lambda_ {i} \boldsymbol {I} _ {r _ {i}} + \boldsymbol {N}) ^ {m} = \lambda_ {i} ^ {m} \boldsymbol {I} _ {r _ {i}} + \mathrm{C} _ {m} ^ {1} \lambda_ {i} ^ {m - 1} \boldsymbol {N} + \dots + \mathrm{C} _ {m} ^ {m - 1} \lambda_ {i} \boldsymbol {N} ^ {m - 1} + \boldsymbol {N} ^ {m}.
$$

于是 $J^{m} = \operatorname{diag}\{J_{r_{1}}(\lambda_{1})^{m}, J_{r_{2}}(\lambda_{2})^{m}, \cdots, J_{r_{k}}(\lambda_{k})^{m}\}$ ，从而 $A^{m} = (PJP^{-1})^{m} = PJ^{m}P^{-1}$ 便可计算出来了.

例 7.60 的延拓 设 $A = \begin{pmatrix} 2 & 6 & -15 \\ 1 & 1 & -5 \\ 1 & 2 & -6 \end{pmatrix}$ ，求 $A^{m} (m \geq 1)$ .

解 我们已经计算出过渡矩阵 P，使得 $P^{-1}AP = J = \text{diag}\{-1, J_{2}(-1)\}$ ，于是可进一步计算出

$$
\boldsymbol {A} ^ {m} = \boldsymbol {P} \boldsymbol {J} ^ {m} \boldsymbol {P} ^ {- 1} = \left( \begin{array}{c c c} - 2 & 3 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 0 \end{array} \right) \left( \begin{array}{c c c} (- 1) ^ {m} & 0 & 0 \\ 0 & (- 1) ^ {m} & (- 1) ^ {m - 1} m \\ 0 & 0 & (- 1) ^ {m} \end{array} \right) \left( \begin{array}{c c c} 0 & 1 & - 1 \\ 0 & 0 & 1 \\ 1 & 2 & - 5 \end{array} \right)
$$

$$
= (- 1) ^ {m - 1} \left( \begin{array}{c c c} 3 m - 1 & 6 m & - 1 5 m \\ m & 2 m - 1 & - 5 m \\ m & 2 m & - 5 m - 1 \end{array} \right). \square
$$

我们还可以考虑反过来的问题.

例 7.71 求矩阵 B, 使得 $A = B^{2}$ , 其中 $A = \begin{pmatrix} 3 & 1 \\ -1 & 5 \end{pmatrix}$ .

解 利用 §7.7 的方法, 可求出过渡矩阵 $P = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$ ，使得 $P^{-1}AP = J = \begin{pmatrix} 4 & 1 \\ 0 & 4 \end{pmatrix}$ 为 Jordan 标准型。用待定元素法不难求得 $C = \pm \begin{pmatrix} 2 & \frac{1}{4} \\ 0 & 2 \end{pmatrix}$ ，使得 $C^{2} = J$ 。

注意到 $(PCP^{-1})^{2} = PC^{2}P^{-1} = PJP^{-1} = A$ ，故可取 $B = PCP^{-1}$ .经计算可得

$$
\boldsymbol {B} = \pm \left( \begin{array}{c c} \frac {7}{4} & \frac {1}{4} \\ - \frac {1}{4} & \frac {9}{4} \end{array} \right). \square
$$

注意到例 7.71 中的 A 是非异阵, B 可称为 A 的平方根. 事实上, 我们可证明如下结论, 即非异阵存在任意次的方根.

例 7.72 设 A 为 n 阶非异复矩阵, 证明: 对任一正整数 m, 存在 n 阶复矩阵 B, 使得 $A = B^{m}$ .

证明 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_k}(\lambda_k)\}$ 为 A 的 Jordan 标准型. 由于 A 非异, 故 A 的所有特征值都非零. 对 A 的任一 Jordan 块 $J_{r_i}(\lambda_i)$ , 取定 $\lambda_i$ 的某个 m 次方根 $\mu_i$ , 即 $\mu_i^m = \lambda_i$ , 则由例 7.54 可知, $J_{r_i}(\mu_i)^m$ 相似于 $J_{r_i}(\lambda_i)$ , 即存在非异阵 $Q_i$ , 使得 $J_{r_i}(\lambda_i) = Q_i^{-1}J_{r_i}(\mu_i)^mQ_i = (Q_i^{-1}J_{r_i}(\mu_i)Q_i)^m$ , 即结论对 Jordan 块成立. 令

$$
\boldsymbol {C} = \operatorname{diag} \left\{\boldsymbol {Q} _ {1} ^ {- 1} \boldsymbol {J} _ {r _ {1}} (\mu_ {1}) \boldsymbol {Q} _ {1}, \boldsymbol {Q} _ {2} ^ {- 1} \boldsymbol {J} _ {r _ {2}} (\mu_ {2}) \boldsymbol {Q} _ {2}, \dots , \boldsymbol {Q} _ {k} ^ {- 1} \boldsymbol {J} _ {r _ {k}} (\mu_ {k}) \boldsymbol {Q} _ {k} \right\},
$$

则 $J = C^{m}$ ，即结论对 Jordan 标准型也成立。最后，

$$
\boldsymbol {A} = \boldsymbol {P J P} ^ {- 1} = \boldsymbol {P C} ^ {m} \boldsymbol {P} ^ {- 1} = (\boldsymbol {P C P} ^ {- 1}) ^ {m}.
$$

令 $B = PCP^{-1}$ , 则有 $A = B^{m}$ , 即结论对一般的矩阵也成立. $\square$ 

注 例 7.72 的结论对奇异矩阵一般并不成立。例如, 设 $A = J_{n}(0)^{m-1}$ , 其中 $n = mq - r$ , $m \geq 2$ 且 $0 \leq r < m$ , 则不存在 $B$ , 使得 $A = B^{m}$ 。我们用反证法来证明这个结论。若存在满足条件的 $B$ , 则 $B$ 的特征值全为零, 从而 $B$ 也是幂零矩阵, 即有 $B^{n} = O$ 。于是 $O = B^{n+r} = (B^{m})^{q} = A^{q} = J_{n}(0)^{(m-1)q} \neq O$ , 这就导出了矛盾。

例 7.73 设 A 为 n 阶复矩阵, 证明: 存在 n 阶复对称矩阵 B, C, 使得 A = BC, 并且可以指定 B, C 中任何一个为可逆矩阵.

证明 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_k}(\lambda_k)\}$ 

为 A 的 Jordan 标准型. 考虑 Jordan 块 $J_{r_{i}}(\lambda_{i})$ 的如下两种分解:

$$
\left( \begin{array}{c c c c c} \lambda_ {i} & 1 & & & \\ & \lambda_ {i} & 1 & & \\ & & \ddots & \ddots & \\ & & & \ddots & 1 \\ & & & & \lambda_ {i} \end{array} \right) = \left( \begin{array}{c c c c c} & & & 1 & \lambda_ {i} \\ & & 1 & \lambda_ {i} \\ & \ddots & \ddots & \\ 1 & \ddots & & \\ \lambda_ {i} & & & \end{array} \right) \left( \begin{array}{c c c c c} & & & & 1 \\ & & & 1 \\ & \ddots & \ddots & \\ 1 & & & \end{array} \right) \tag {7.13}
$$

$$
= \left( \begin{array}{c c c c} & & & 1 \\ & & 1 & \\ & \ddots & \\ 1 & & \end{array} \right) \left( \begin{array}{c c c c} & & & \lambda_ {i} \\ & & \lambda_ {i} & 1 \\ & \ddots & 1 \\ \lambda_ {i} & 1 & & \end{array} \right), \tag {7.14}
$$

我们将 (7.13) 式的分解记为 $J_{r_i}(\lambda_i) = R_iS_i$ , (7.14) 式的分解记为 $J_{r_i}(\lambda_i) = S_iT_i$ , 注意到 $R_i, S_i, T_i$ 都是对称矩阵, 并且 $S_i$ 是可逆矩阵. 如果一开始选定 $\pmb{B}$ 为可逆矩阵, 则利用 (7.14) 式的分解; 如果一开始选定 $\pmb{C}$ 为可逆矩阵, 则利用 (7.13) 式的分解. 以下不妨设定 $\pmb{B}$ 为可逆矩阵, 令

$$
\boldsymbol {S} = \operatorname{diag} \left\{\boldsymbol {S} _ {1}, \boldsymbol {S} _ {2}, \dots , \boldsymbol {S} _ {k} \right\}, \quad \boldsymbol {T} = \operatorname{diag} \left\{\boldsymbol {T} _ {1}, \boldsymbol {T} _ {2}, \dots , \boldsymbol {T} _ {k} \right\},
$$

则有 J = ST，其中 S, T 都是对称矩阵，并且 S 是可逆矩阵。因此，我们有

$$
\boldsymbol {A} = \boldsymbol {P J P} ^ {- 1} = \boldsymbol {P S T P} ^ {- 1} = (\boldsymbol {P S P} ^ {\prime}) ((\boldsymbol {P} ^ {- 1}) ^ {\prime} \boldsymbol {T P} ^ {- 1}).
$$

令 $B = PSP'$ , $C = (P^{-1})'TP^{-1}$ , 则 A = BC 即为所求分解. □

例 7.74 设 A 为 n 阶复矩阵, 证明: 存在 n 阶非异复对称矩阵 Q, 使得 $Q^{-1}AQ = A'$ .

证明 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_k}(\lambda_k)\}$ 为 A 的 Jordan 标准型. 采用与例 7.73 的证明中相同的记号, 注意到 $S_i$ 是非异对称矩阵, 且 $S_i^2 = I$ , 即 $S_i^{-1} = S_i$ , 我们来考虑 Jordan 块 $J_{r_i}(\lambda_i)$ 的如下相似关系:

$$
\boldsymbol {J} _ {r _ {i}} (\lambda_ {i}) = \left( \begin{array}{c c c c c} & & & & 1 \\ & & & 1 & \\ & \ddots & & \\ 1 & & & & \end{array} \right) \left( \begin{array}{c c c c c} \lambda_ {i} & & & & \\ 1 & \lambda_ {i} & & & \\ & 1 & \ddots & & \\ & & \ddots & \ddots & \\ & & & 1 & \lambda_ {i} \end{array} \right) \left( \begin{array}{c c c c c} & & & & 1 \\ & & & 1 \\ & \ddots & & \\ 1 & & & \end{array} \right),
$$

即有 $J_{r_{i}}(\lambda_{i}) = S_{i}J_{r_{i}}(\lambda_{i})'S_{i}$ . 令 $S = \text{diag}\{S_{1}, S_{2}, \cdots, S_{k}\}$ ，则 S 是非异对称矩阵， $S^{2}=I_{n}$ ，且 $J=SJ'S$ 。因此，我们有

$$
\boldsymbol {A} = \boldsymbol {P J P} ^ {- 1} = \boldsymbol {P S J} ^ {\prime} \boldsymbol {S P} ^ {- 1} = \boldsymbol {P S P} ^ {\prime} \boldsymbol {A} ^ {\prime} (\boldsymbol {P} ^ {- 1}) ^ {\prime} \boldsymbol {S P} ^ {- 1} = (\boldsymbol {P S P} ^ {\prime}) \boldsymbol {A} ^ {\prime} (\boldsymbol {P S P} ^ {\prime}) ^ {- 1}.
$$

令 $Q = PSP'$ ，则 Q 为非异复对称矩阵，使得 $Q^{-1}AQ = A'$ 。☐

例 7.75 设 A 为 n 阶幂零矩阵, 证明: $e^{A}$ 与 $I_{n} + A$ 相似.

证法 1 由 A 是幂零矩阵可知, A 的特征值全为零. 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(0), J_{r_2}(0), \cdots, J_{r_k}(0)\}$ 为 A 的 Jordan 标准型. 先对 Jordan 块 $J_{r_i}(0)$ 进行证明. 注意到

$$
\begin{array}{l} \mathrm{e} ^ {J _ {r _ {i}} (0)} = I _ {r _ {i}} + \frac {1}{1 !} J _ {r _ {i}} (0) + \frac {1}{2 !} J _ {r _ {i}} (0) ^ {2} + \dots + \frac {1}{(r _ {i} - 1) !} J _ {r _ {i}} (0) ^ {r _ {i} - 1} \\ = \left( \begin{array}{c c c c} 1 & 1 & \dots & * \\ & 1 & \ddots & \vdots \\ & & \ddots & 1 \\ & & & 1 \end{array} \right), \\ \end{array}
$$

故 $\mathrm{e}^{J_{r_{i}}(0)}$ 的特征值全为 1, 其几何重数等于 $r_{i}-\mathrm{r}(\mathrm{e}^{J_{r_{i}}(0)}-I_{r_{i}})=r_{i}-(r_{i}-1)=1$ . 因此 $\mathrm{e}^{J_{r_{i}}(0)}$ 只有一个 Jordan 块, 其 Jordan 标准型为 $J_{r_{i}}(1)=I_{r_{i}}+J_{r_{i}}(0)$ , 即存在非异阵 $Q_{i}$ , 使得 $\mathrm{e}^{J_{r_{i}}(0)}=Q_{i}(I_{r_{i}}+J_{r_{i}}(0))Q_{i}^{-1}(1\leq i\leq k)$ . 再对 Jordan 标准型 J 进行证明. 令 $Q=\operatorname{diag}\{Q_{1},Q_{2},\cdots,Q_{k}\}$ , 则 Q 为非异阵, 满足

$$
\mathrm{e} ^ {J} = \operatorname{diag} \left\{\mathrm{e} ^ {J _ {r _ {1}} (0)}, \mathrm{e} ^ {J _ {r _ {2}} (0)}, \dots , \mathrm{e} ^ {J _ {r _ {k}} (0)} \right\} = Q (I _ {n} + J) Q ^ {- 1}.
$$

最后对一般的矩阵 A 进行证明. 由前两步可得

$$
\begin{array}{l} \mathrm{e} ^ {A} = \mathrm{e} ^ {P J P ^ {- 1}} = P \mathrm{e} ^ {J} P ^ {- 1} = P Q (I _ {n} + J) Q ^ {- 1} P ^ {- 1} \\ = P Q (I _ {n} + P ^ {- 1} A P) Q ^ {- 1} P ^ {- 1} = (P Q P ^ {- 1}) (I _ {n} + A) (P Q P ^ {- 1}) ^ {- 1}, \\ \end{array}
$$

即 $\mathrm{e}^{\pmb{A}}$ 与 $I_{n} + A$ 相似.

证法 2 由 A 是幂零矩阵可知, A 的特征值全为零, 从而 $I_{n} + A$ 和 $e^{A} = I_{n} + A + \cdots + \frac{1}{(n-1)!} A^{n-1}$ 的特征值全为 1. 容易验证 $\mathrm{r}((\mathrm{e}^{A} - I_{n})^{k}) = \mathrm{r}(A^{k}) (k \geq 1)$ 成立, 故由例 7.53 即得结论. □

### 4. 采用 Jordan 块作为测试矩阵

在矩阵问题中, 如果需要构造满足某种性质的矩阵, 则可以采用 Jordan 块作为测试矩阵进行探索和讨论. 比如在例 7.72 中, 为了构造 Jordan 块 $J_{r_i}(\lambda_i)$ 的 $m$ 次方根, 我们采用了 Jordan 块 $J_{r_i}(\mu_i)$ 作为测试矩阵, 并最终得到了正确的答案. 下面再来看两个典型的例题.

例 7.76 证明: 存在 71 阶实方阵 A, 使得

$$
\boldsymbol {A} ^ {7 0} + \boldsymbol {A} ^ {6 9} + \dots + \boldsymbol {A} + \boldsymbol {I} _ {7 1} = \left( \begin{array}{c c c c} 2 0 1 9 & 2 0 1 8 & \dots & 1 9 4 9 \\ & 2 0 1 9 & \ddots & \vdots \\ & & \ddots & 2 0 1 8 \\ & & & 2 0 1 9 \end{array} \right).
$$

证明 记 $f(x)=x^{70}+x^{69}+\cdots+x+1$ ，上述等式右边的矩阵为 B。注意到 $f(1)<2019$ 和 $f(2)>2019$ ，故由连续函数的性质可知， $f(x)=2019$ 在开区间 $(1,2)$ 中必有一实根 $\lambda_{0}$ 。将 Jordan 块 $J_{71}(\lambda_{0})$ 代入 $f(x)$ 中，经计算可得

$$
f (\boldsymbol {J} _ {7 1} (\lambda_ {0})) = \left( \begin{array}{c c c c} f (\lambda_ {0}) & f ^ {\prime} (\lambda_ {0}) & \dots & * \\ & f (\lambda_ {0}) & \ddots & \vdots \\ & & \ddots & f ^ {\prime} (\lambda_ {0}) \\ & & & f (\lambda_ {0}) \end{array} \right),
$$

这是一个上三角矩阵, 主对角元全为 $f(\lambda_0) = 2019$ , 上次对角元全为 $f'(\lambda_0) > 0$ , 从而 $f(J_{71}(\lambda_0))$ 的特征值全为 2019, 其几何重数为 $71 - r(f(J_{71}(\lambda_0)) - 2019I_{71}) = 1$ . 因此, $f(J_{71}(\lambda_0))$ 的 Jordan 标准型中只有一个 Jordan 块 $J_{71}(2019)$ , 即 $f(J_{71}(\lambda_0))$ 相似于 $J_{71}(2019)$ . 另一方面, 矩阵 $B$ 也是一个上三角矩阵, 主对角元全为 2019, 上次对角元全为 2018, 从而 $B$ 的特征值全为 2019, 其几何重数为 $71 - r(B - 2019I_{71}) = 1$ . 因此, $B$ 的 Jordan 标准型中只有一个 Jordan 块 $J_{71}(2019)$ , 即 $B$ 也相似于 $J_{71}(2019)$ . 由于矩阵的相似在基域扩张下不改变 (参考 [1] 的推论 7.3.4), 故 $f(J_{71}(\lambda_0))$ 和 $B$ 在实数域上相似, 即存在非异实矩阵 $P$ , 使得 $B = P^{-1}f(J_{71}(\lambda_0))P = f(P^{-1}J_{71}(\lambda_0)P)$ . 令 $A = P^{-1}J_{71}(\lambda_0)P$ , 则 $A$ 是实矩阵, 且满足 $f(A) = B$ . □

下面的例子采用了广义 Jordan 块 (参考例 7.96) 作为测试矩阵.

例 7.77 设 a, b 都是实数, 其中 $b \neq 0$ , 证明: 对任意的正整数 m, 存在四阶实

方阵 A, 使得

$$
\boldsymbol {A} ^ {m} = \boldsymbol {B} = \left( \begin{array}{c c c c} a & b & 2 & 0 \\ - b & a & 2 & 0 \\ 0 & 0 & a & b \\ 0 & 0 & - b & a \end{array} \right).
$$

证明 显然, $B$ 的特征多项式 $f(\lambda) = ((\lambda - a)^2 + b^2)^2$ . 我们可用 3 种方法求出 $B$ 的 Jordan 标准型 (参考 §7.6). 第一种方法是计算行列式因子:

$$
\lambda \boldsymbol {I} _ {4} - \boldsymbol {B} = \left( \begin{array}{c c c c} \lambda - a & - b & - 2 & 0 \\ b & \lambda - a & - 2 & 0 \\ 0 & 0 & \lambda - a & - b \\ 0 & 0 & b & \lambda - a \end{array} \right),
$$

经计算可知

$$
(\lambda \boldsymbol {I} _ {4} - \boldsymbol {B}) \left( \begin{array}{c c c} 1 & 2 & 3 \\ 1 & 2 & 4 \end{array} \right) = - b ((\lambda - a) ^ {2} + b ^ {2}), (\lambda \boldsymbol {I} _ {4} - \boldsymbol {B}) \left( \begin{array}{c c c} 1 & 2 & 3 \\ 2 & 3 & 4 \end{array} \right) = - 2 b (\lambda - a + b).
$$

显然这两个三阶子式互素, 故三阶行列式因子 $D_{3}(\lambda) = 1$ , 于是 $\pmb{B}$ 的行列式因子组和不变因子组均为 1,1,1, $((\lambda - a)^{2} + b^{2})^{2}$ , 从而初等因子组为 $(\lambda - a - bi)^{2}, (\lambda - a + bi)^{2}$ , 因此 $\pmb{B}$ 的 Jordan 标准型 $J = \mathrm{diag}\{J_{2}(a + bi), J_{2}(a - bi)\}$ . 第二种方法是计算极小多项式: 由于 $\pmb{B}$ 是实方阵, 故其极小多项式 $m(\lambda)$ 是实系数多项式, 又 $m(\lambda)$ 整除 $f(\lambda)$ , 从而只能是 $m(\lambda) = (\lambda - a)^{2} + b^{2}$ 或 $m(\lambda) = ((\lambda - a)^{2} + b^{2})^{2}$ . 通过简单的计算可知 $\pmb{B}$ 不适合多项式 $(\lambda - a)^{2} + b^{2}$ , 于是 $m(\lambda) = f(\lambda) = ((\lambda - a)^{2} + b^{2})^{2}$ , 剩余的讨论同第一种方法. 第三种方法是计算特征值的几何重数: $\pmb{B}$ 的全体特征值为 $a + bi$ (2 重), $a - bi$ (2 重), 通过简单的计算可知 $\mathrm{r}(\pmb{B} - (a + bi)\pmb{I}_{4}) = 3$ 以及 $\mathrm{r}(\pmb{B} - (a - bi)\pmb{I}_{4}) = 3$ , 于是 $a \pm bi$ 的几何重数都等于 1, 从而分别只有一个二阶 Jordan 块, 因此 $\pmb{B}$ 的 Jordan 标准型 $J = \mathrm{diag}\{J_{2}(a + bi), J_{2}(a - bi)\}$ .

取 $a + b\mathrm{i}$ 的 $m$ 次方根 $c + d\mathrm{i}(c,d\in \mathbb{R})$ ，即满足 $(c + d\mathrm{i})^m = a + b\mathrm{i}$ （取定一个即可).构造实方阵(取法不唯一):

$$
\pmb {C} = \left( \begin{array}{l l l l} {c} & {d} & {2} & {0} \\ {- d} & {c} & {2} & {0} \\ {0} & {0} & {c} & {d} \\ {0} & {0} & {- d} & {c} \end{array} \right), \text {或} \pmb {C} = \left( \begin{array}{l l l l} {c} & {d} & {1} & {0} \\ {- d} & {c} & {0} & {1} \\ {0} & {0} & {c} & {d} \\ {0} & {0} & {- d} & {c} \end{array} \right), \text {或} \pmb {C} = \left( \begin{array}{l l l l} {c} & {d} & {0} & {0} \\ {- d} & {c} & {1} & {0} \\ {0} & {0} & {c} & {d} \\ {0} & {0} & {- d} & {c} \end{array} \right).
$$

注意到 $d \neq 0$ , 故由开始处完全类似的讨论可知, $\pmb{C}$ 的 Jordan 标准型为 $\operatorname{diag}\{\pmb{J}_2(c + di), \pmb{J}_2(c - di)\}$ . 由例 7.54 可知, $\pmb{J}_2(c \pm di)^m$ 的 Jordan 标准型为 $\pmb{J}_2(a \pm bi)$ , 从而 $\pmb{C}^m$ 的 Jordan 标准型为 $\operatorname{diag}\{J_2(a + bi), J_2(a - bi)\}$ , 于是 $B$ 与 $C^m$ 有相同的 Jordan 标准型, 故它们在复数域上相似. 注意到 $B$ 与 $C^m$ 都是实矩阵, 故由矩阵相似在基域扩张下的不变性 (参考 [1] 的推论 7.3.4) 可知, 它们在实数域上也相似, 即存在非异阵 $P \in M_4(\mathbb{R})$ , 使得 $B = P^{-1}C^m P = (P^{-1}CP)^m$ . 令 $A = P^{-1}CP$ , 则 $A$ 为实方阵, 满足 $A^m = B$ . $\square$ 

## § 7.9 矩阵函数

矩阵函数在微分方程理论中有着重要的应用, 下面介绍几道例题供读者参考. 首先必须注意到, 在具体计算矩阵函数时不能随便套用数值函数的性质. 比如在数值函数中, 成立 $\mathrm{e}^{x} \cdot \mathrm{e}^{y} = \mathrm{e}^{x + y} = \mathrm{e}^{y} \cdot \mathrm{e}^{x}$ , 但对一般的矩阵 $A, B$ 来说, $\mathrm{e}^{A} \cdot \mathrm{e}^{B} = \mathrm{e}^{A + B} = \mathrm{e}^{B} \cdot \mathrm{e}^{A}$ 并不一定成立. 例如,

$$
\boldsymbol {A} = \left( \begin{array}{c c} 1 & 1 \\ 0 & 0 \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c} 0 & 0 \\ 1 & 1 \end{array} \right),
$$

通过计算不难验证 AB = A, BA = B, 并且

$$
\mathrm{e} ^ {A} = \left( \begin{array}{c c} \mathrm{e} & \mathrm{e} - 1 \\ 0 & 1 \end{array} \right), \mathrm{e} ^ {B} = \left( \begin{array}{c c} 1 & 0 \\ \mathrm{e} - 1 & \mathrm{e} \end{array} \right), \mathrm{e} ^ {A + B} = \left( \begin{array}{c c} \frac {\mathrm{e} ^ {2} + 1}{2} & \frac {\mathrm{e} ^ {2} - 1}{2} \\ \frac {\mathrm{e} ^ {2} - 1}{2} & \frac {\mathrm{e} ^ {2} + 1}{2} \end{array} \right),
$$

因此 $AB \neq BA$ , 并且在 $\mathrm{e}^A \cdot \mathrm{e}^B$ , $\mathrm{e}^B \cdot \mathrm{e}^A$ 以及 $\mathrm{e}^{A + B}$ 这 3 个矩阵中, 任意两个都不相等. 但若 $A, B$ 乘法可交换, 则在上述 3 个矩阵中, 任意两个都相等, 这就是下面的例 7.78 和例 7.80.

例 7.78 求证: 若 n 阶矩阵 A, B 乘法可交换, 则 $e^{A} \cdot e^{B} = e^{B} \cdot e^{A}$ .

证明 设 $f(z)=\mathrm{e}^{z}$ ，并且 $f_{p}(z)=1+\frac{1}{1!}z+\frac{1}{2!}z^{2}+\cdots+\frac{1}{p!}z^{p}$ 为 $f(z)$ 的部分和，因为 $f(z)$ 的收敛半径为 $+\infty$ ，所以对任一矩阵 A， $\lim_{p\to\infty}f_{p}(A)=f(A)=\mathrm{e}^{A}$ 。由于 AB=BA，故对任意的正整数 p,q，成立 $f_{p}(A)f_{q}(B)=f_{q}(B)f_{p}(A)$ 。先固定 p，令 $q\to\infty$ ，则可得

$$
\begin{array}{l} f _ {p} (\boldsymbol {A}) f (\boldsymbol {B}) = f _ {p} (\boldsymbol {A}) \left(\lim _ {q \rightarrow \infty} f _ {q} (\boldsymbol {B})\right) = \lim _ {q \rightarrow \infty} \left(f _ {p} (\boldsymbol {A}) f _ {q} (\boldsymbol {B})\right) = \lim _ {q \rightarrow \infty} \left(f _ {q} (\boldsymbol {B}) f _ {p} (\boldsymbol {A})\right) \\ = \left(\lim _ {q \rightarrow \infty} f _ {q} (\boldsymbol {B})\right) f _ {p} (\boldsymbol {A}) = f (\boldsymbol {B}) f _ {p} (\boldsymbol {A}). \\ \end{array}
$$

同理, 再对上式令 $p \to \infty$ , 则可得 $f(A)f(B) = f(B)f(A)$ , 即结论成立. $\square$ 

注 由例 7.78 类似的讨论可证明: 若 $f(z), g(z)$ 是两个收敛半径都是 $+\infty$ 的复幂级数, 则对任意乘法可交换的 $\mathbf{A}, \mathbf{B}$ , 均有 $f(\mathbf{A})g(\mathbf{B}) = g(\mathbf{B})f(\mathbf{A})$ .

要证明 $\mathrm{e}^{\boldsymbol{A}}\cdot \mathrm{e}^{\boldsymbol{B}} = \mathrm{e}^{\boldsymbol{A} + \boldsymbol{B}}$ ，却没有例7.78那么简单，因为这里面涉及到级数的乘积。比如在数学分析中考虑数项级数乘积 $\sum_{i,j=1}^{\infty} a_i b_j$ 的收敛性，一般来说，只有当 $\sum_{i=1}^{\infty} a_i$ 和 $\sum_{j=1}^{\infty} b_j$ 都是绝对收敛时，上述级数乘积的收敛性才能得到保证，特别地，还可以得到Cauchy乘积的收敛性，即 $\sum_{n=1}^{\infty} \left( \sum_{i+j=n} a_i b_j \right)$ 收敛到 $(\sum_{i=1}^{\infty} a_i) \cdot (\sum_{j=1}^{\infty} b_j)$ 。因此，为了类似地讨论矩阵幂级数乘积的收敛性，我们必须引入矩阵范数的概念（类似于复数的模长）。由于更一般的范数概念及其性质将在第9章内积空间中详细定义和研究，故这里只讨论矩阵范数的一些简单性质。另外，矩阵范数可以有很多种，这里我们选取由Frobenius内积诱导的范数（参考例9.1）。

例 7.79 设 $A = (a_{ij})$ 是 n 阶复矩阵, 定义 A 的范数为其所有元素模长的平方和的算术平方根, 即 $\|A\| = \sqrt{\sum_{i,j=1}^{n} |a_{ij}|^{2}}$ . 设 $B = (b_{ij})$ 也是 n 阶复矩阵, 求证:

(1) $\|A\|\geq0$ , 等号成立当且仅当 A=O;

(2) $\|A+B\|\leq\|A\|+\|B\|;$ 

(3) $\|AB\|\leq\|A\|\cdot\|B\|$ . 

证明 (1) 显然成立. (2) 就是一般范数的三角不等式 (参考 §§ 9.1.1 定理 7). (3) 注意到 $\| \pmb{A} \pmb{B} \|^{2} = \sum_{i,j=1}^{n} \left| \sum_{k=1}^{n} a_{ik} b_{kj} \right|^{2}, \| \pmb{A} \|^{2} \cdot \| \pmb{B} \|^{2} = \left( \sum_{i,k=1}^{n} |a_{ik}|^{2} \right) \cdot \left( \sum_{k,j=1}^{n} |b_{kj}|^{2} \right)$ , 由 Cauchy-Schwarz 不等式 (参考例 2.63 的复数形式) 即得结论. □

例 7.80 求证: 若 n 阶矩阵 A, B 乘法可交换, 则 $e^{A} \cdot e^{B} = e^{A+B}$ .

证明 设 $f(z)=\mathrm{e}^{z}$ ，并且 $f_{p}(z)=1+\frac{1}{1!}z+\frac{1}{2!}z^{2}+\cdots+\frac{1}{p!}z^{p}$ 为 $f(z)$ 的部分和。注意到 AB=BA，经简单的计算可知， $f_{p}(A)f_{p}(B)$ 展开后的单项包含 $f_{p}(A+B)$ 展开后的所有单项，且剩余单项可表示为 $\frac{A^{i}}{i!}\frac{B^{j}}{j!}$ 的形式，其中 $i+j>p$ ，故由例 7.79 可得

$$
\| f _ {p} (\boldsymbol {A}) f _ {p} (\boldsymbol {B}) - f _ {p} (\boldsymbol {A} + \boldsymbol {B}) \| \leq \sum_ {k > p} \left(\sum_ {i + j = k} \frac {\| \boldsymbol {A} \| ^ {i}}{i !} \frac {\| \boldsymbol {B} \| ^ {j}}{j !}\right) = \sum_ {k > p} \frac {(\| \boldsymbol {A} \| + \| \boldsymbol {B} \|) ^ {k}}{k !}.
$$

由于数项级数 $\sum_{k=0}^{\infty} \frac{1}{k!} (\|A\| + \|B\|)^k$ 收敛到 $\mathrm{e}^{\|A\| + \|B\|}$ , 故当 $p$ 充分大时, 上式右边趋于零. 令 $p \to \infty$ , 则由上式即得 $\|f(A)f(B) - f(A + B)\| = 0$ , 再次由例 7.79 可得 $\mathrm{e}^{A} \cdot \mathrm{e}^{B} = \mathrm{e}^{A + B}$ . □

注 从例 7.80 的证明可以看出, 矩阵幂级数 $\mathrm{e}^{\mathbf{A}}$ 的绝对收敛性保证了矩阵级数的 Cauchy 乘积 $\mathrm{e}^{\mathbf{A} + \mathbf{B}} = \sum_{p=0}^{\infty} \left( \sum_{i+j=p} \frac{\mathbf{A}^{i}}{i!} \frac{\mathbf{B}^{j}}{j!} \right)$ 收敛到 $\left( \sum_{i=0}^{\infty} \frac{\mathbf{A}^{i}}{i!} \right) \cdot \left( \sum_{j=0}^{\infty} \frac{\mathbf{B}^{j}}{j!} \right) = \mathrm{e}^{\mathbf{A}} \cdot \mathrm{e}^{\mathbf{B}}$ . 另外, 利用例 7.80 也可给出例 7.78 的另一证明.

例 7.81 设 A 是 n 阶矩阵, 求证: $\sin^{2}A + \cos^{2}A = I_{n}$ .

证明 由定义可知 $\cos A = \frac{1}{2} (\mathrm{e}^{\mathrm{i}A} + \mathrm{e}^{-\mathrm{i}A}), \sin A = \frac{1}{2\mathrm{i}} (\mathrm{e}^{\mathrm{i}A} - \mathrm{e}^{-\mathrm{i}A})$ 。由例7.78和例7.80可知， $\mathrm{e}^{\mathrm{i}A}\mathrm{e}^{-\mathrm{i}A} = \mathrm{e}^{-\mathrm{i}A}\mathrm{e}^{\mathrm{i}A} = \mathrm{e}^{\mathrm{i}A - \mathrm{i}A} = I_n, (\mathrm{e}^{\mathrm{i}A})^2 = \mathrm{e}^{2\mathrm{i}A}, (\mathrm{e}^{-\mathrm{i}A})^2 = \mathrm{e}^{-2\mathrm{i}A}$ ，故

$$
\sin^ {2} \boldsymbol {A} + \cos^ {2} \boldsymbol {A} = \frac {1}{4} \left(\mathrm{e} ^ {2 \mathrm{i} \boldsymbol {A}} + 2 \boldsymbol {I} _ {n} + \mathrm{e} ^ {- 2 \mathrm{i} \boldsymbol {A}}\right) - \frac {1}{4} \left(\mathrm{e} ^ {2 \mathrm{i} \boldsymbol {A}} - 2 \boldsymbol {I} _ {n} + \mathrm{e} ^ {- 2 \mathrm{i} \boldsymbol {A}}\right) = \boldsymbol {I} _ {n}. \square
$$

例 7.82 设 A 是 n 阶矩阵, 求证: $\sin 2A = 2\sin A \cos A$ .

证明 与例 7.81 的证明完全类似, 留给读者完成. □

例 7.83 计算 $\sin(\mathrm{e}^{cI})$ 及 $\cos(\mathrm{e}^{cI})$ ，其中 c 是非零常数.

解 由指数矩阵函数的定义可得

$$
\begin{array}{l} \mathrm{e} ^ {c I} = I + \frac {1}{1 !} (c I) + \frac {1}{2 !} (c I) ^ {2} + \frac {1}{3 !} (c I) ^ {3} + \dots \\ = \left(1 + \frac {1}{1 !} c + \frac {1}{2 !} c ^ {2} + \frac {1}{3 !} c ^ {3} + \dots\right) I = e ^ {c} I. \\ \end{array}
$$

因此

$$
\begin{array}{l} \sin \left(\mathrm{e} ^ {c I}\right) = \sin \left(\mathrm{e} ^ {c I}\right) = \mathrm{e} ^ {c I} - \frac {1}{3 !} \left(\mathrm{e} ^ {c I}\right) ^ {3} + \frac {1}{5 !} \left(\mathrm{e} ^ {c I}\right) ^ {5} - \frac {1}{7 !} \left(\mathrm{e} ^ {c I}\right) ^ {7} + \dots \\ = \left. \left(\mathrm{e} ^ {c} - \frac {1}{3 !} (\mathrm{e} ^ {c}) ^ {3} + \frac {1}{5 !} (\mathrm{e} ^ {c}) ^ {5} - \frac {1}{7 !} (\mathrm{e} ^ {c}) ^ {7} + \dots\right) I = (\sin \mathrm{e} ^ {c}) I, \right. \\ \cos \left(\mathrm{e} ^ {c I}\right) = \cos \left(\mathrm{e} ^ {c} I\right) = I - \frac {1}{2 !} \left(\mathrm{e} ^ {c} I\right) ^ {2} + \frac {1}{4 !} \left(\mathrm{e} ^ {c} I\right) ^ {4} - \frac {1}{6 !} \left(\mathrm{e} ^ {c} I\right) ^ {6} + \dots \\ = \left(1 - \frac {1}{2 !} \left(\mathrm{e} ^ {c}\right) ^ {2} + \frac {1}{4 !} \left(\mathrm{e} ^ {c}\right) ^ {4} - \frac {1}{6 !} \left(\mathrm{e} ^ {c}\right) ^ {6} + \dots\right) I = (\cos \mathrm{e} ^ {c}) I. \\ \end{array}
$$

例 7.84 设 A 是 n 阶方阵, 求 $e^{A}$ 的行列式.

解 设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则 $e^{A}$ 的特征值为 $e^{\lambda_{1}}, e^{\lambda_{2}}, \cdots, e^{\lambda_{n}}$ ，因此

$$
\left| \mathrm{e} ^ {\boldsymbol {A}} \right| = \mathrm{e} ^ {\lambda_ {1}} \mathrm{e} ^ {\lambda_ {2}} \dots \mathrm{e} ^ {\lambda_ {n}} = \mathrm{e} ^ {\lambda_ {1} + \lambda_ {2} + \dots + \lambda_ {n}} = \mathrm{e} ^ {\operatorname{tr} (\boldsymbol {A})}. \square
$$

例 7.85 求证: 对任一 n 阶方阵 A, $e^{A}$ 总是非异阵.

证明 由例7.84可知 $|\mathrm{e}^A| = \mathrm{e}^{\mathrm{tr}(A)}\neq 0$ ，从而 $\mathbf{e}^A$ 非异．也可由例7.80得到 $\mathrm{e^{A}e^{-A} = e^{A - A} = I_n}$ ，于是 $\mathrm{e}^A$ 非异且 $(\mathrm{e}^A)^{-1} = \mathrm{e}^{-A}$ □

例 7.86 设 A 是 n 阶矩阵, 求 $\lim_{k\to\infty}A^{k}$ 存在的充要条件以及极限矩阵.

解 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), J_{r_2}(\lambda_2), \cdots, J_{r_s}(\lambda_s)\}$ 为 A 的 Jordan 标准型, 则

$$
\boldsymbol {A} ^ {k} = \boldsymbol {P} \boldsymbol {J} ^ {k} \boldsymbol {P} ^ {- 1} = \boldsymbol {P} \operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1}\right) ^ {k}, \boldsymbol {J} _ {r _ {2}} \left(\lambda_ {2}\right) ^ {k}, \dots , \boldsymbol {J} _ {r _ {s}} \left(\lambda_ {s}\right) ^ {k} \right\} \boldsymbol {P} ^ {- 1},
$$

因此 $\lim_{k\to \infty}A^k$ 存在当且仅当 $\lim_{k\to \infty}J_{r_i}(\lambda_i)^k (1\leq i\leq s)$ 都存在. 不妨取 $k > n$ ，经计算可得Jordan块 $J_{r_i}(\lambda_i)$ 的 $k$ 次幂为

$$
\boldsymbol {J} _ {r _ {i}} (\lambda_ {i}) ^ {k} = \left( \begin{array}{c c c c c} \lambda_ {i} ^ {k} & C _ {k} ^ {1} \lambda_ {i} ^ {k - 1} & C _ {k} ^ {2} \lambda_ {i} ^ {k - 2} & \dots & C _ {k} ^ {r _ {i} - 1} \lambda_ {i} ^ {k - r _ {i} + 1} \\ & \lambda_ {i} ^ {k} & C _ {k} ^ {1} \lambda_ {i} ^ {k - 1} & \dots & C _ {k} ^ {r _ {i} - 2} \lambda_ {i} ^ {k - r _ {i} + 2} \\ & & \lambda_ {i} ^ {k} & \dots & C _ {k} ^ {r _ {i} - 3} \lambda_ {i} ^ {k - r _ {i} + 3} \\ & & & \ddots & \vdots \\ & & & & \lambda_ {i} ^ {k} \end{array} \right),
$$

故当 $\left|\lambda_{i}\right| \geq 1$ 且 $\lambda_{i} \neq 1$ 时， $\lim_{k \to \infty} \lambda_{i}^{k}$ 发散；当 $\lambda_{i} = 1$ 且 $r_{i} \geq 2$ 时， $\lim_{k \to \infty} C_{k}^{1} \lambda_{i}^{k-1}$ 发散；当 $\lambda_{i} = 1$ 且 $r_{1} = 1$ 时， $\lim_{k \to \infty} J_{r_{i}}(\lambda_{i})^{k} = J_{1}(1)$ ; 当 $\left|\lambda_{i}\right| < 1$ 时， $\lim_{k \to \infty} J_{r_{i}}(\lambda_{i})^{k} = O$ . 因此， $\lim_{k \to \infty} A^{k}$ 存在的充要条件是 A 的特征值的模长小于 1，或者特征值等于 1 并且 A 关于特征值 1 的 Jordan 块都是一阶的. 此时，极限矩阵 $\lim_{k \to \infty} A^{k} = P\operatorname{diag}\{1, \cdots, 1, 0, \cdots, 0\} P^{-1}$ ，其中 1 的个数等于 A 的特征值 1 的代数重数. □

## § 7.10 Jordan 标准型的几何

矩阵或线性变换的标准型理论通常可采用代数方法或几何方法来阐述。我们在教材 [1] 中采用的是代数方法, 即用 $\lambda$ -矩阵的方法求有理标准型和 Jordan 标准型。另一种常用的方法是几何方法, 在本节我们将详细地介绍 Jordan 标准型的几何构造和几何意义。这两种方法各有长处, 代数方法不仅证明了有理标准型和 Jordan 标准型的存在性, 而且给出了这两类标准型的计算方法, 特别适合初学者理解和掌握; 几何方法能快捷地证明标准型的存在性, 但仍需进一步的计算才能完全确定标准型 (参考例 7.52)。由于几何方法比较直观, 利于读者从几何的层面上把握矩阵或线性变换的相关性质, 因此同时掌握这两种方法不失为一个好的选择。

### 1. Jordan 标准型的几何构造

下面的例题是例 6.94 的推广.

例 7.87 设 $\varphi$ 为数域 K 上 n 维线性空间 V 上的线性变换, 特征多项式与极小多项式分别为 $f(\lambda)$ 和 $m(\lambda)$ , 其不可约分解为:

$$
f (\lambda) = P _ {1} (\lambda) ^ {r _ {1}} P _ {2} (\lambda) ^ {r _ {2}} \dots P _ {t} (\lambda) ^ {r _ {t}}, m (\lambda) = P _ {1} (\lambda) ^ {s _ {1}} P _ {2} (\lambda) ^ {s _ {2}} \dots P _ {t} (\lambda) ^ {s _ {t}},
$$

其中 $P_{i}(\lambda)$ 是 K 上互异的首一不可约多项式, $r_{i}>0, s_{i}>0$ . 设 $V_{i}=\operatorname{Ker}P_{i}(\varphi)^{r_{i}}$ , $U_{i}=\operatorname{Ker}P_{i}(\varphi)^{s_{i}}, 1\leq i\leq t$ . 求证:

(1) $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{t}, U_{i} = V_{i} (1 \leq i \leq t);$ 

(2) $\varphi|_{V_i}$ 的特征多项式为 $P_i(\lambda)^{r_i}$ , 极小多项式为 $P_i(\lambda)^{s_i}$ . 特别地, $\dim V_i = r_i \deg P_i(\lambda)$ .

证明 (1) 令 $h_i(\lambda) = \frac{f(\lambda)}{P_i(\lambda)^{r_i}} (1 \leq i \leq t)$ , 则 $h_1(\lambda), h_2(\lambda), \cdots, h_t(\lambda)$ 互素, 故存在 $u_i(\lambda)$ , 使得

$$
h _ {1} (\lambda) u _ {1} (\lambda) + h _ {2} (\lambda) u _ {2} (\lambda) + \dots + h _ {t} (\lambda) u _ {t} (\lambda) = 1.
$$

将 $\lambda = \varphi$ 代入上式, 可得

$$
h _ {1} (\varphi) u _ {1} (\varphi) + h _ {2} (\varphi) u _ {2} (\varphi) + \dots + h _ {t} (\varphi) u _ {t} (\varphi) = I _ {V}. \tag {7.15}
$$

由 Cayley-Hamilton 定理可知, $\mathbf{0} = f(\varphi) = P_i(\varphi)^{r_i}h_i(\varphi)$ , 故对任意的 $\alpha \in V$ , 可知 $h_i(\varphi)u_i(\varphi)(\alpha) \in V_i$ , 并由 (7.15) 式可得

$$
\boldsymbol {\alpha} = h _ {1} (\varphi) u _ {1} (\varphi) (\boldsymbol {\alpha}) + h _ {2} (\varphi) u _ {2} (\varphi) (\boldsymbol {\alpha}) + \dots + h _ {t} (\varphi) u _ {t} (\varphi) (\boldsymbol {\alpha}),
$$

从而 $V = V_{1} + V_{2} + \cdots + V_{t}$ . 另一方面, 任取 $\alpha_{1} \in V_{1} \cap (\sum_{j > 1} V_{j})$ , 即 $\alpha_{1} \in V_{1}$ , $\alpha_{1} = \sum_{j > 1} \alpha_{j}$ , 其中 $\alpha_{j} \in V_{j}$ , 则由 (7.15) 式可得

$$
\boldsymbol {\alpha} _ {1} = u _ {1} (\boldsymbol {\varphi}) h _ {1} (\boldsymbol {\varphi}) \left(\sum_ {j > 1} \boldsymbol {\alpha} _ {j}\right) + \sum_ {j > 1} u _ {j} (\boldsymbol {\varphi}) h _ {j} (\boldsymbol {\varphi}) \left(\boldsymbol {\alpha} _ {1}\right) = \mathbf {0},
$$

故 $V_{1} \cap (\sum_{j>1} V_{j}) = 0$ . 由指标的任意性可知 $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{t}$ . 同理可证 $V = U_{1} \oplus U_{2} \oplus \cdots \oplus U_{t}$ . 由于 $m(\lambda) \mid f(\lambda)$ , 故 $s_{i} \leq r_{i}$ , 于是 $U_{i} \subseteq V_{i}$ , 从而只能是 $U_{i} = V_{i} (1 \leq i \leq t)$ .

(2) 将 $\varphi|_{V_i}$ 简记为 $\varphi_i$ , 设其特征多项式与极小多项式分别为 $f_i(\lambda)$ 和 $m_i(\lambda)$ . 由于 $V_i = \operatorname{Ker} P_i(\varphi)^{r_i}$ , 故 $\varphi_i$ 适合 $P_i(\lambda)^{r_i}$ , 从而 $\varphi_i$ 的特征值都适合 $P_i(\lambda)^{r_i}$ , 即 $f_i(\lambda)$ 的根都是 $P_i(\lambda)^{r_i}$ 的根. 由例6.3可得

$$
f (\lambda) = P _ {1} (\lambda) ^ {r _ {1}} P _ {2} (\lambda) ^ {r _ {2}} \dots P _ {t} (\lambda) ^ {r _ {t}} = f _ {1} (\lambda) f _ {2} (\lambda) \dots f _ {t} (\lambda),
$$

由于 $P_{1}(\lambda)^{r_{1}}, P_{2}(\lambda)^{r_{2}}, \cdots, P_{t}(\lambda)^{r_{t}}$ 两两互素，故只能是 $f_{i}(\lambda) = P_{i}(\lambda)^{r_{i}}$ 。另一方面， $\varphi_{i}$ 也适合多项式 $P_{i}(\lambda)^{s_{i}}$ ，故由极小多项式的基本性质可得 $m_{i}(\lambda) \mid P_{i}(\lambda)^{s_{i}}$ 。特别地， $m_{1}(\lambda), m_{2}(\lambda), \cdots, m_{t}(\lambda)$ 两两互素，从而它们的最小公倍式等于它们的乘积。由例 6.77 可得

$$
m (\lambda) = P _ {1} (\lambda) ^ {s _ {1}} P _ {2} (\lambda) ^ {s _ {2}} \dots P _ {t} (\lambda) ^ {s _ {t}} = m _ {1} (\lambda) m _ {2} (\lambda) \dots m _ {t} (\lambda),
$$

从而只能是 $m_{i}(\lambda) = P_{i}(\lambda)^{s_{i}}$ 。因为特征多项式的次数等于线性空间的维数，所以 $\dim V_{i}=\deg P_{i}(\lambda)^{r_{i}}=r_{i}\deg P_{i}(\lambda).$ □

例 7.88 设 $\varphi$ 为 n 维复线性空间 V 上的线性变换, 其特征多项式的不可约分解为 $f(\lambda) = (\lambda - \lambda_{1})^{r_{1}} (\lambda - \lambda_{2})^{r_{2}} \cdots (\lambda - \lambda_{k})^{r_{k}}$ , 其中 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的全体不同特征值. 令 $V_{i} = \operatorname{Ker}(\varphi - \lambda_{i} I)^{r_{i}}$ , 证明:

$$
V = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {k}. \tag {7.16}
$$

证明 由例7.87即得.□

注 事实上, $V_{i}$ 就是 $\varphi$ 的根子空间 (参考教材 [1] 的定义 7.7.2 之前的证明), 故 (7.16) 式称为 $V$ 的根子空间直和分解. 若将 $\varphi$ 限制在 $V_{i}$ 上, 则由例 7.87 可知其特征多项式就是 $(\lambda - \lambda_{i})^{r_{i}}$ . 由 (7.16) 式可知, 要求 $V$ 的一组基, 使得 $\varphi$ 的表示矩阵相对简单的问题可归结为求 $V_{i}$ 的一组基, 使得 $\varphi|_{V_{i}}$ 的表示矩阵相对简单. 又因为 $\varphi|_{V_{i}} - \lambda_{i}I$ 在 $V_{i}$ 上是幂零的, 故只要对幂零线性变换求出其 Jordan 标准型即可.

例 7.89 设 $\psi$ 是 n 维复线性空间 V 上的幂零线性变换, 证明: 存在 V 的一组基, 使得 $\psi$ 在这组基下的表示矩阵为 $\mathrm{diag}\{J_{r_{1}}(0), J_{r_{2}}(0), \cdots, J_{r_{s}}(0)\}$ , 其中 $J_{r_{i}}(0)$ 是零特征值的 $r_{i}$ 阶 Jordan 块.

证明 对 n 进行归纳. 当 n=1 时, 结论显然成立. 设维数小于 n 时结论成立, 现证 n 维的情形. 设 k 为正整数, 使得 $\psi^{k}=0$ , 但 $\psi^{k-1}\neq0$ , 故存在 $v\in V$ , 使得 $\psi^{k-1}(v)\neq0$ . 由例 4.8 可知, $v,\psi(v),\cdots,\psi^{k-1}(v)$ 线性无关, 它们生成的子空间记为 U. 若 U=V, 则 $\psi$ 在基 $\{\psi^{n-1}(v),\cdots,\psi(v),v\}$ 下的表示矩阵为 $J_{n}(0)$ , 结论成立. 以下假设 $U \neq V$ , 并且 $W$ 是满足 $W \cap U = 0$ 的维数最大的 $\psi$ -不变子空间, 我们来证明 $V = U \oplus W$ . 一旦得证, 对 $W$ 用归纳假设, 命题自然成立. 用反证法, 假设存在 $V$ 中向量 $\alpha \notin U \oplus W$ . 因为 $\psi^k(\alpha) = 0$ , 所以存在正整数 $t$ , 使得 $\psi^t(\alpha) \in U \oplus W$ , 但 $\psi^{t-1}(\alpha) \notin U \oplus W$ . 令 $\beta = \psi^{t-1}(\alpha)$ , 因为 $\psi(\beta) \in U \oplus W$ , 故可设 $\psi(\beta) = u + w$ , 其中 $u \in U, w \in W$ , 于是

$$
\boldsymbol {0} = \psi^ {k} (\boldsymbol {\beta}) = \psi^ {k - 1} (\psi (\boldsymbol {\beta})) = \psi^ {k - 1} (\boldsymbol {u}) + \psi^ {k - 1} (\boldsymbol {w}),
$$

从而 $\psi^{k-1}(\pmb{u}) = -\psi^{k-1}(\pmb{w}) \in U \cap W = 0$ , 即有 $\psi^{k-1}(\pmb{u}) = \mathbf{0}$ . 因为 $\pmb{u} \in U$ , 故可设

$$
\boldsymbol {u} = b _ {0} \boldsymbol {v} + b _ {1} \psi (\boldsymbol {v}) + \dots + b _ {k - 1} \psi^ {k - 1} (\boldsymbol {v}),
$$

从而有 $b_{0}\psi^{k - 1}(\pmb {v}) = \mathbf{0}$ .由于 $\psi^{k - 1}(\pmb {v})\neq \mathbf{0},$ 故 $b_0 = 0,$ 于是

$$
\boldsymbol {u} = b _ {1} \psi (\boldsymbol {v}) + \dots + b _ {k - 1} \psi^ {k - 1} (\boldsymbol {v}).
$$

若令 $\boldsymbol{x}=b_{1}\boldsymbol{v}+b_{2}\boldsymbol{\psi}(\boldsymbol{v})+\cdots+b_{k-1}\boldsymbol{\psi}^{k-2}(\boldsymbol{v})$ ，则 $\boldsymbol{u}=\boldsymbol{\psi}(\boldsymbol{x})$ ，从而 $\boldsymbol{w}=\boldsymbol{\psi}(\boldsymbol{\beta})-\boldsymbol{u}=\boldsymbol{\psi}(\boldsymbol{\beta}-\boldsymbol{x})$ 。因为 $\beta\notin U\oplus W$ ，故 $\beta-x\notin U\oplus W$ ，从而有直和 $U\oplus W\oplus L(\beta-x)$ 。若令 $W'=W\oplus L(\beta-x)$ ，则由 $\boldsymbol{\psi}(\beta-\boldsymbol{x})=\boldsymbol{w}\in W$ 可知 $W'$ 也是 $\psi-$ 不变子空间。显然 $W'$ 的维数大于 W 的维数，这与 W 维数最大的假设矛盾。☐

将例 7.88 和例 7.89 合在一起, 即得 Jordan 标准型的几何构造:

定理 设 $\varphi$ 为 n 维复线性空间 V 上的线性变换, 则存在 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型 $J = \text{diag}\{J_{r_{1}}(\lambda_{1}), J_{r_{2}}(\lambda_{2}), \cdots, J_{r_{k}}(\lambda_{k})\}$ .

### 2. Jordan 标准型的几何意义

从空间分解的角度来看, 全空间 $V$ 可分解为不同特征值的根子空间的直和, 再由例 7.89 的证明过程可知, 每个根子空间可分解为若干个循环子空间的直和, 因此全空间 $V$ 可分解为若干个循环子空间的直和:

$$
V = C \left(\varphi - \lambda_ {1} I _ {V}, e _ {r _ {1}}\right) \oplus C \left(\varphi - \lambda_ {2} I _ {V}, e _ {r _ {1} + r _ {2}}\right) \oplus \dots \oplus C \left(\varphi - \lambda_ {k} I _ {V}, e _ {n}\right), \tag {7.17}
$$

其中循环子空间 $C(\varphi - \lambda_i I_V, e_{r_1 + \dots + r_i})$ 与 Jordan 块 $J_{r_i}(\lambda_i)$ 一一对应。这就是 Jordan 标准型的几何意义。

具体来看 Jordan 块 $J_{r_{1}}(\lambda_{1})$ 对应的循环子空间 $C(\varphi - \lambda_{1}I_{V}, e_{r_{1}})$ . 由表示矩阵的定义可知

$$
\varphi \left(e _ {1}\right) = \lambda_ {1} e _ {1}, \quad \varphi \left(e _ {2}\right) = e _ {1} + \lambda_ {1} e _ {2}, \dots , \quad \varphi \left(e _ {r _ {1}}\right) = e _ {r _ {1} - 1} + \lambda_ {1} e _ {r _ {1}}.
$$

令 $\varphi_{1}=\varphi-\lambda_{1}I_{V}$ ，则有如下的循环轨道：

$$
e _ {r _ {1}} \xrightarrow {\varphi_ {1}} e _ {r _ {1} - 1} \xrightarrow {\varphi_ {1}} \dots \xrightarrow {\varphi_ {1}} e _ {2} \xrightarrow {\varphi_ {1}} e _ {1} \xrightarrow {\varphi_ {1}} 0.
$$

反之, 一个循环轨道也定义了一个循环子空间 $C(\varphi - \lambda_1 I_V, e_{r_1})$ . 因此, 全空间 $V$ 的循环子空间直和分解 (7.17) 一一对应于 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$ 分解为若干条互不相交的循环轨道的并集.

注 Jordan 标准型诱导的循环子空间直和分解与有理标准型诱导的循环子空间直和分解是不同的. 下面以 $C(\varphi - \lambda_1 I_V, e_{r_1})$ 为例进行说明:

(1) 它是关于 $\varphi - \lambda_{1}I_{V}$ (而不是关于 $\varphi$ ) 的循环子空间;

(2) 它的循环向量是 $J_{r_{1}}(\lambda_{1})$ 对应的基向量中的最后一个向量 $e_{r_{1}}$ ;

(3) 特别要求 $e_{1} \xrightarrow{\varphi - \lambda_{1} I_{V}} 0$ ，这是 Jordan 块所特有的，一般的循环子空间并没有这个要求.

Jordan 标准型的几何意义有很多有趣的应用, 例如在 §7.7, 我们利用循环轨道给出了求 Jordan 标准型的过渡矩阵的第三种方法. 下面再来看 3 个应用.

例 7.89 的证法 2 我们用循环轨道来给出一个更直接的证明. 对 V 的维数进行归纳. 当 n = 1 时, 结论显然成立. 设维数小于 n 时结论成立, 现证 n 维的情形. 注意到 $\psi$ 是不可逆线性变换, 故 Im $\psi$ 的维数小于 n, 将 $\psi$ 限制在 Im $\psi$ 上, 由归纳假设可知, Im $\psi$ 中存在 t 条长度分别为 $s_{i}$ 的循环轨道 $O_{i}$ :

$$
\mathrm{O} _ {i}: \quad \boldsymbol {u} _ {i} \xrightarrow {\psi} \psi (\boldsymbol {u} _ {i}) \xrightarrow {\psi} \dots \xrightarrow {\psi} \psi^ {s _ {i} - 2} (\boldsymbol {u} _ {i}) \xrightarrow {\psi} \psi^ {s _ {i} - 1} (\boldsymbol {u} _ {i}) \xrightarrow {\psi} \mathbf {0}, \quad 1 \leq i \leq t.
$$

注意到 $\{\psi^{s_{1}-1}(\boldsymbol{u}_{1}),\cdots,\psi^{s_{t}-1}(\boldsymbol{u}_{t})\}$ 线性无关并且都属于 Ker $\psi$ ，故可将它们扩张为 Ker $\psi$ 的一组基 $\{\psi^{s_{1}-1}(\boldsymbol{u}_{1}),\cdots,\psi^{s_{t}-1}(\boldsymbol{u}_{t}),\boldsymbol{w}_{1},\cdots,\boldsymbol{w}_{k}\}$ 。另一方面，若设 $u_{i}=\psi(v_{i})(1\leq i\leq t)$ ，则容易验证下列 $s_{1}+\cdots+s_{t}+t+k$ 个向量线性无关：

$$
\boldsymbol {v} _ {1}, \boldsymbol {\psi} (\boldsymbol {v} _ {1}), \dots , \boldsymbol {\psi} ^ {s _ {1}} (\boldsymbol {v} _ {1}); \dots ; \boldsymbol {v} _ {t}, \boldsymbol {\psi} (\boldsymbol {v} _ {t}), \dots , \boldsymbol {\psi} ^ {s _ {t}} (\boldsymbol {v} _ {t}); \boldsymbol {w} _ {1}, \dots , \boldsymbol {w} _ {k}.
$$

由线性变换的维数公式可知 $n = \dim V = \dim \operatorname{Im} \psi + \dim \operatorname{Ker} \psi = s_{1} + s_{2} + \cdots + s_{t} + t + k$ ，故上述向量组是 V 的一组基。因此，可将 $\operatorname{Im} \psi$ 的 t 条长度分别为 $s_{i}$ 的循环轨道 $O_{i}$ 扩张为 V 的 t 条长度分别为 $s_{i} + 1$ 的循环轨道 $\widetilde{O}_{i}$ ，再增加 k 条长度为 1 的循环轨道 $N_{j}$ ，这就是 $\psi$ 所有的循环轨道：

$$
\widetilde {\mathrm{O}} _ {i}: \quad \boldsymbol {v} _ {i} \xrightarrow {\psi} \psi (\boldsymbol {v} _ {i}) \xrightarrow {\psi} \dots \xrightarrow {\psi} \psi^ {s _ {i} - 1} (\boldsymbol {v} _ {i}) \xrightarrow {\psi} \psi^ {s _ {i}} (\boldsymbol {v} _ {i}) \xrightarrow {\psi} \mathbf {0}, \quad 1 \leq i \leq t;
$$

$$
\mathrm{N} _ {j}: \quad \boldsymbol {w} _ {j} \xrightarrow {\psi} \mathbf {0}, 1 \leq j \leq k,
$$

这样便完成了证明. □

例 7.55 设 $J = J_{n}(0)$ 是特征值为零的 n 阶 Jordan 块, 求 $J^{m} (m \geq 1)$ 的 Jordan 标准型.

解法 2 若 $m \geq n$ ，则 $J^{m} = O$ ，这就是它的 Jordan 标准型。下设 m < n，并作带余除法： $n = mq + r$ ，其中 $0 \leq r < m$ 。注意到 J 的循环轨道只有一条：

$$
J _ {n} (0): \quad e _ {n} \stackrel {{J}} {{\rightarrow}} e _ {n - 1} \stackrel {{J}} {{\rightarrow}} \dots \stackrel {{J}} {{\rightarrow}} e _ {2} \stackrel {{J}} {{\rightarrow}} e _ {1} \stackrel {{J}} {{\rightarrow}} 0,
$$

其中 $e_{1}, e_{2}, \cdots, e_{n}$ 是 n 维标准单位列向量. 将上述 n 个基向量的顺序进行调整, 可以发现 $J^{m}$ 的循环轨道分裂成了以下 m 条:

$$
\begin{array}{l} J _ {q + 1} (0): \quad e _ {n} \xrightarrow {J ^ {m}} e _ {n - m} \xrightarrow {J ^ {m}} \dots \xrightarrow {J ^ {m}} e _ {r} \xrightarrow {J ^ {m}} 0; \\ J _ {q + 1} (0): \quad e _ {n - r + 1} \xrightarrow {J ^ {m}} e _ {n - r + 1 - m} \xrightarrow {J ^ {m}} \dots \xrightarrow {J ^ {m}} e _ {1} \xrightarrow {J ^ {m}} 0; \\ J _ {q} (0): \quad e _ {n - r} \xrightarrow {J ^ {m}} e _ {n - r - m} \xrightarrow {J ^ {m}} \dots \xrightarrow {J ^ {m}} e _ {m} \xrightarrow {J ^ {m}} 0; \\ J _ {q} (0): \quad e _ {n - m + 1} \xrightarrow {J ^ {m}} e _ {n - 2 m + 1} \xrightarrow {J ^ {m}} \dots \xrightarrow {J ^ {m}} e _ {r + 1} \xrightarrow {J ^ {m}} 0. \\ \end{array}
$$

•
•
• 

•
•
• 

因此， $J^{m}$ 的 Jordan 标准型为 $\mathrm{diag}\{J_{q}(0),\cdots,J_{q}(0),J_{q+1}(0),\cdots,J_{q+1}(0)\}$ ，其中有 m-r 个 $J_{q}(0)$ ，r 个 $J_{q+1}(0)$ 。☐

我们还可以利用循环轨道来计算不变子空间的个数。虽然下面的例题与例 4.51 (取一组基 $\{x^i / i! (0 \leq i \leq n - 1)\}$ ) 和第 4 章的解答题 5 (相差一个转置) 完全类似, 但这里我们给出另外两种不同的证明。

例 7.90 设 n 维复线性空间 V 上的线性变换 $\varphi$ 在一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 下的表示矩阵为 Jordan 块 $J_{n}(\lambda_{0})$ ，求所有的 $\varphi$ -不变子空间.

解法1 令 $\psi = \varphi - \lambda_0 I_V$ ，则有循环轨道

$$
J _ {n} (0): \quad e _ {n} \xrightarrow {\psi} e _ {n - 1} \xrightarrow {\psi} \dots \xrightarrow {\psi} e _ {2} \xrightarrow {\psi} e _ {1} \xrightarrow {\psi} 0,
$$

并且 $\varphi-$ 不变子空间等价于 $\psi-$ 不变子空间. 显然 $V_{i}=L(e_{1},e_{2},\cdots,e_{i})(0\leq i\leq n)$ 都是 $\psi-$ 不变子空间, 我们来证明 V 只有这 $n+1$ 个 $\psi-$ 不变子空间. 任取非零 $\psi-$ 不变子空间 U, 设

$$
k = \max \{i \mid \text {存在}   {\pmb u} \in U,   {\pmb u} = c _ {1} {\pmb e} _ {1} + \dots + c _ {i} {\pmb e} _ {i} + \dots + c _ {n} {\pmb e} _ {n},   \text {其中}   c _ {i} \neq 0 \},
$$

则 $U \subseteq L(\boldsymbol{e}_{1}, \boldsymbol{e}_{2}, \cdots, \boldsymbol{e}_{k})$ . 另一方面，取 $u \in U, u = c_{1}e_{1} + c_{2}e_{2} + \cdots + c_{k}e_{k}$ ，使得 $c_{k} \neq 0$ ，则由循环轨道可得 $\boldsymbol{u} = (c_{1}\psi^{k-1} + c_{2}\psi^{k-2} + \cdots + c_{k}\boldsymbol{I}_{V})(\boldsymbol{e}_{k})$ 。令 $g(\lambda) = c_{1}\lambda^{k-1} + c_{2}\lambda^{k-2} + \cdots + c_{k}$ ，则 $(g(\lambda), \lambda^{n}) = 1$ ，于是存在 $p(\lambda), q(\lambda)$ ，使得 $g(\lambda)p(\lambda) + \lambda^{n}q(\lambda) = 1$ 。在上式中代入 $\lambda = \psi$ 并作用在 $e_{k}$ 上可得

$$
\boldsymbol {e} _ {k} = p (\boldsymbol {\psi}) g (\boldsymbol {\psi}) \left(\boldsymbol {e} _ {k}\right) + q (\boldsymbol {\psi}) \boldsymbol {\psi} ^ {n} \left(\boldsymbol {e} _ {k}\right) = p (\boldsymbol {\psi}) (\boldsymbol {u}) \in U,
$$

于是由循环轨道可得 $e_{i} \in U (1 \leq i \leq k)$ ，从而 $U = L(e_{1}, e_{2}, \cdots, e_{k})$ .

解法2 任取非零 $\varphi$ -不变子空间 $U$ , 容易证明限制变换 $\varphi|_U$ 的特征多项式是 $\varphi$ 的特征多项式 $(\lambda - \lambda_0)^n$ 的因式, 不妨设为 $(\lambda - \lambda_0)^k$ , 其中 $1 \leq k \leq n$ , 由 Cayley-Hamilton 定理可知 $U \subseteq \operatorname{Ker}(\varphi - \lambda_0 I_V)^k = \operatorname{Ker} \psi^k$ . 任取 $\pmb{v} = \sum_{i=1}^{n} c_i e_i \in \operatorname{Ker} \psi^k$ , 则

$$
\boldsymbol {0} = \psi^ {k} (\boldsymbol {v}) = c _ {k + 1} \psi^ {k} \left(\boldsymbol {e} _ {k + 1}\right) + \dots + c _ {n} \psi^ {k} \left(\boldsymbol {e} _ {n}\right) = c _ {k + 1} \boldsymbol {e} _ {1} + \dots + c _ {n} \boldsymbol {e} _ {n - k},
$$

于是 $c_{k+1}=\cdots=c_{n}=0$ ，从而 $\operatorname{Ker}\psi^{k}=L(\boldsymbol{e}_{1},\cdots,\boldsymbol{e}_{k})$ 。注意到 $k=\deg(\lambda-\lambda_{0})^{k}=$ $\dim U \leq \dim \operatorname{Ker} \psi^{k} = k,$ 故 $U = \operatorname{Ker} \psi^{k} = L(\boldsymbol{e}_{1}, \cdots, \boldsymbol{e}_{k})$ . □

例 7.91 设 $\varphi$ 是 n 维复线性空间 V 上的线性变换, 其特征多项式 $f(\lambda)$ 等于其极小多项式 $m(\lambda)$ , 求所有的 $\varphi$ -不变子空间.

解设

$$
f (\lambda) = m (\lambda) = \left(\lambda - \lambda_ {1}\right) ^ {r _ {1}} \left(\lambda - \lambda_ {2}\right) ^ {r _ {2}} \dots \left(\lambda - \lambda_ {k}\right) ^ {r _ {k}},
$$

其中 $\lambda_{1},\lambda_{2},\cdots,\lambda_{k}$ 是 $\varphi$ 的全体不同的特征值. 令 $V_{i}=\mathrm{Ker}(\varphi-\lambda_{i}\mathbf{I}_{V})^{r_{i}}$ 为对应的根子空间, 则 $V=V_{1}\oplus V_{2}\oplus\cdots\oplus V_{k}$ . 设 $\varphi|_{V_{i}}$ 的特征多项式为 $f_{i}(\lambda)$ , 极小多项式为 $m_{i}(\lambda)$ , 则由例 7.87 可知, $f_{i}(\lambda)=m_{i}(\lambda)=(\lambda-\lambda_{i})^{r_{i}}$ . 任取 V 的 $\varphi-$ 不变子空间 U, 设 $\varphi|_{U}$ 的特征多项式为 $g(\lambda)$ , 则 $g(\lambda)\mid f(\lambda)$ . 若设

$$
g (\lambda) = \left(\lambda - \lambda_ {1}\right) ^ {s _ {1}} \left(\lambda - \lambda_ {2}\right) ^ {s _ {2}} \dots \left(\lambda - \lambda_ {k}\right) ^ {s _ {k}}, U _ {i} = \operatorname{Ker} \left(\varphi | _ {U} - \lambda_ {i} I _ {U}\right) ^ {s _ {i}},
$$

则由例 7.87 可知, $U = U_{1} \oplus U_{2} \oplus \cdots \oplus U_{k}$ , 其中 $U_{i}$ 是 $V_{i}$ 的 $\varphi$ -不变子空间. 由例 7.90 的证明过程可得到 $U_{i}$ 的结构 (共有 $r_{i} + 1$ 个), 进一步可得到 $\varphi$ -不变子空间 $U$ 的结构. 因此, $V$ 的 $\varphi$ -不变子空间一共有 $(r_{1} + 1)(r_{2} + 1) \cdots (r_{k} + 1)$ 个. $\square$ 

注 若 $f(\lambda) \neq m(\lambda)$ , 则存在某个特征值 $\lambda_0$ , 它至少有两个初等因子, 从而其特征子空间的维数大于等于 2, 故此时 $V$ 有无穷个 $\varphi$ -不变子空间. 由此可得: $n$ 维复线性空间 $V$ 是循环空间 $C(\varphi, \alpha)$ 的充要条件是 $V$ 只有有限个 $\varphi$ -不变子空间.

## § 7.11 一般数域上的相似标准型

前面已经介绍了复数域上 Jordan 标准型理论的众多应用, 不过有时我们需要考虑的问题仅在数域 $\mathbb{K}$ 上, 或者问题本身并不能延拓到复数域上, 这时我们就不能运用 Jordan 标准型这一工具了. 另一方面, 虽然在数域 $\mathbb{K}$ 上有有理标准型理论, 但有理标准型的确不够精细, 处理一些问题往往不够用. 因此遇到数域 $\mathbb{K}$ 上的相似问题, 我们该如何处理呢? 一般来说, 可以有 3 种处理方法. 第一种方法是先将问题转化成几何语言, 再利用线性变换理论进行研究; 第二种方法是先将问题转化成代数语言, 再把数域 $\mathbb{K}$ 上的矩阵自然地看成是复矩阵进行研究, 最后利用高等代数中若干概念在基域扩张下的不变性 (参考 [7]) 将所得结果返回到数域 $\mathbb{K}$ 上; 第三种方法是利用一般数域上基于初等因子的相似标准型理论对问题进行研究. 为了说明前两种方法, 我们来看数域 $\mathbb{K}$ 上的两个典型例题.

例 7.92 设 V 是数域 K 上的 n 维线性空间, $\varphi$ 是 V 上秩小于 n 的线性变换, 求证: $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ 的充要条件是 0 是 $\varphi$ 的极小多项式的单根.

分析 当 $\mathbb{K} = \mathbb{C}$ 时, 可以利用 Jordan 标准型理论进行证明. 若特征值 0 是 $\varphi$ 的极小多项式的单根, 则可设 $\varphi$ 的初等因子组为 $\lambda, \cdots, \lambda, (\lambda - \lambda_1)^{r_1}, \cdots, (\lambda - \lambda_s)^{r_s}$ , 其中 $\lambda_1, \cdots, \lambda_s$ 是非零特征值, 且有 $k$ 个 $\lambda$ . 因此, 存在 $V$ 的一组基 $e_1, \cdots, e_k, e_{k+1}, \cdots, e_n$ , 使得 $\varphi$ 在这组基下的表示矩阵为 $\operatorname{diag}\{0, \cdots, 0, J_{r_1}(\lambda_1), \cdots, J_{r_s}(\lambda_s)\}$ . 容易验证 $\operatorname{Ker} \varphi = L(e_1, \cdots, e_k), \operatorname{Im} \varphi = L(e_{k+1}, \cdots, e_n)$ , 于是 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ . 反之, 若 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ , 则 $\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi = 0$ , 由例 7.40 充分性的证明可知, $\varphi$ 关于特征值 0 的 Jordan 块都是一阶的, 因此 0 是 $\varphi$ 的极小多项式的单根. 然而, 当 $\mathbb{K} \neq \mathbb{C}$ 时, 上述讨论就不再适用了, 并且本题的结论也不能简单地延拓到复数域上, 因为 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ 是数域 $\mathbb{K}$ 上线性空间的直和分解, 一般并不能看成是复数域上线性空间的直和分解. 接下去让我们来看前两种方法是如何巧妙地解决问题的.

证法1 若 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ , 则由例4.36可知, $\operatorname{Ker} \varphi = \operatorname{Ker} \varphi^2 = \cdots$ . 设 $\varphi$ 的极小多项式 $m(\lambda) = \lambda^k g(\lambda)$ , 其中 $g(0) \neq 0$ , 我们来证明 $k = 1$ . 用反证法, 假设 $k \geq 2$ , 则对任意的 $\alpha \in V$ , 有 $\varphi^k g(\varphi)(\alpha) = 0$ , 从而 $g(\varphi)(\alpha) \in \operatorname{Ker} \varphi^k = \operatorname{Ker} \varphi$ , 于是 $\varphi g(\varphi)(\alpha) = 0$ 对任意的 $\alpha \in V$ 成立, 即 $\varphi g(\varphi) = 0$ , 因此 $\varphi$ 适合多项式 $\lambda g(\lambda)$ , 其次数比极小多项式的次数还小, 这就导出了矛盾. 反之, 设 $\varphi$ 的极小多项式 $m(\lambda) = \lambda g(\lambda)$ , 其中 $g(0) \neq 0$ , 则由例6.94的注(2)可知, $V = V_1 \oplus V_2$ , 其中 $V_1 = \operatorname{Ker} \varphi = \operatorname{Im} g(\varphi)$ , $V_2 = \operatorname{Ker} g(\varphi) = \operatorname{Im} \varphi$ , 于是 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ .

证法2 由例4.36可知, $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ 当且仅当 $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$ , 因此我们只要证明: $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$ 当且仅当0是 $\varphi$ 的极小多项式的单根. 任取 $\varphi$ 在某组基下的表示矩阵 A, 则上述问题的代数版本是: $\mathrm{r}(A) = \mathrm{r}(A^{2})$ 当且仅当 0 是 A 的极小多项式的单根. 注意到数域 K 上的矩阵可自然地看成是复矩阵, 并且矩阵的秩和极小多项式在基域扩张下不改变, 因此我们可以把 A 当作复矩阵进行证明 (即本题分析中的讨论, 其中用例 7.41 替代例 7.40 的引用), 具体细节请读者自行完成. □

例 7.93 设 A 是数域 K 上的 n 阶矩阵, 求证: A 相似于 $\mathrm{diag}\{B,C\}$ , 其中 B 是 K 上的幂零矩阵, C 是 K 上的可逆矩阵.

分析 本题是例 7.65 的推广, 即将复数域上的结论推广到数域 $\mathbb{K}$ 上. 不过, 例 7.65 的证明利用了 Jordan 标准型理论, 显然在数域 $\mathbb{K}$ 上不再适用. 通常当我们考虑线性变换的问题时, 数域都是事先给定的, 从而在讨论的过程中不会涉及数域的问题. 因此我们可用第一种方法来处理本题, 即把代数问题转化成几何问题, 然后再用线性变换理论加以解决. 本题的几何版本为: 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\varphi$ 是 $V$ 上的线性变换, 证明: $V = V_{1} \oplus V_{2}$ , 其中 $V_{1}, V_{2}$ 都是 $\varphi$ -不变子空间, 且 $\varphi|_{V_1}$ 是幂零线性变换, $\varphi|_{V_2}$ 是可逆线性变换. 我们可用两种几何方法来证明这一结论.

证法1 设 $\varphi$ 的特征多项式为 $f(\lambda) = \lambda^k g(\lambda)$ , 其中 $0 \leq k \leq n$ , $g(0) \neq 0$ . 注意到 $(\lambda^k, g(\lambda)) = 1$ , 故由例6.94可知, $V = V_1 \oplus V_2$ , 其中 $V_1 = \operatorname{Ker} \varphi^k$ , $V_2 = \operatorname{Ker} g(\varphi)$ , 并且 $\varphi|_{V_1}$ 的特征多项式是 $\lambda^k$ , $\varphi|_{V_2}$ 的特征多项式是 $g(\lambda)$ . 因此, $\varphi|_{V_1}$ 是幂零线性变换, 且由 $\varphi|_{V_2}$ 的行列式值为 $(-1)^{n-k} g(0) \neq 0$ 可知, $\varphi|_{V_2}$ 是可逆线性变换.

证法2 由例4.35可知, 存在整数 $m \in [0, n]$ , 使得

$$
V = \operatorname{Ker} \varphi^ {m} \oplus \operatorname{Im} \varphi^ {m}, \quad \operatorname{Ker} \varphi^ {m} = \operatorname{Ker} \varphi^ {m + 1} = \dots , \quad \operatorname{Im} \varphi^ {m} = \operatorname{Im} \varphi^ {m + 1} = \dots .
$$

令 $V_{1} = \operatorname{Ker} \varphi^{m}, V_{2} = \operatorname{Im} \varphi^{m}$ , 则 $V = V_{1} \oplus V_{2}$ . 因为 $V_{1} = \operatorname{Ker} \varphi^{m}$ , 所以 $\varphi|_{V_1}$ 适合多项式 $\lambda^{m}$ , 从而它是幂零线性变换. 因为 $\varphi|_{V_2}$ 的像空间是 $\varphi(\operatorname{Im} \varphi^{m}) = \operatorname{Im} \varphi^{m+1} = \operatorname{Im} \varphi^{m}$ , 所以 $\varphi|_{V_2}$ 是满映射, 从而它是可逆线性变换. □

上面只是比较简单的两道例题, 如果希望能更一般地处理数域 $\mathbb{K}$ 上的相似问题, 那么我们可以运用数域 $\mathbb{K}$ 上基于初等因子的相似标准型理论. 事实上, 例7.19已经给出了数域 $\mathbb{K}$ 上基于初等因子的有理标准型, 接下去我们将给出数域 $\mathbb{K}$ 上基于初等因子的Jordan标准型. 这一理论跟之前阐述的数域 $\mathbb{K}$ 上基于不变因子的有理标准型理论和复数域上的Jordan标准型理论之间有着密切的联系, 无论是从引入的方法, 还是从最终的结论来看, 这一理论都是前面两种理论的自然延续和推广, 因此不妨称之为广义Jordan标准型理论.

先固定一些常用的记号. 设 $P(\lambda)=\lambda^{m}+a_{1}\lambda^{m-1}+\cdots+a_{m-1}\lambda+a_{m}$ 是 K 上

的首一多项式, 我们用 $F(P(\lambda))$ 表示 $P(\lambda)$ 的 Frobenius 块:

$$
\boldsymbol {F} (P (\lambda)) = \left( \begin{array}{c c c c c} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ - a _ {m} & - a _ {m - 1} & - a _ {m - 2} & \dots & - a _ {1} \end{array} \right),
$$

用 $C_{m}$ 表示第 $(m,1)$ 元素为 1, 其他元素全为零的 $m$ 阶矩阵:

$$
C _ {m} = \left( \begin{array}{c c c c c} 0 & 0 & 0 & \dots & 0 \\ 0 & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 0 \\ 1 & 0 & 0 & \dots & 0 \end{array} \right).
$$

设 A 是 K 上的 n 阶矩阵, 其不变因子组为 $1, \cdots, 1, d_{1}(\lambda), \cdots, d_{k}(\lambda)$ , 其中 $d_{i}(\lambda)$ 是非常数首一多项式, $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq k-1)$ . 根据定义, 所有不变因子 $d_{i}(\lambda)$ 的准素因子全体就是 A 的初等因子组, 因此 A 的初等因子必为 $P(\lambda)^{e}$ 的形状, 其中 $P(\lambda)$ 是 K 上的首一不可约多项式, $e \geq 1$ .

例 7.94 设 $P(\lambda)=\lambda^{m}+a_{1}\lambda^{m-1}+\cdots+a_{m-1}\lambda+a_{m}$ 是 K 上的首一不可约多项式, e 是正整数, 证明下列矩阵的不变因子组均为 $1,\cdots,1,P(\lambda)^{e}$ :

$$
(1) \boldsymbol {J} _ {e} (P (\lambda)) = \left( \begin{array}{c c c c c c} \boldsymbol {F} (P (\lambda)) & \boldsymbol {I} _ {m} & \boldsymbol {O} & \dots & \boldsymbol {O} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {F} (P (\lambda)) & \boldsymbol {I} _ {m} & \dots & \boldsymbol {O} & \boldsymbol {O} \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ \boldsymbol {O} & \boldsymbol {O} & \boldsymbol {O} & \dots & \boldsymbol {F} (P (\lambda)) & \boldsymbol {I} _ {m} \\ \boldsymbol {O} & \boldsymbol {O} & \boldsymbol {O} & \dots & \boldsymbol {O} & \boldsymbol {F} (P (\lambda)) \end{array} \right);
$$

$$
(2) \widetilde {J} _ {e} (P (\lambda)) = \left( \begin{array}{c c c c c c} F (P (\lambda)) & C _ {m} & O & \dots & O & O \\ O & F (P (\lambda)) & C _ {m} & \dots & O & O \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ O & O & O & \dots & F (P (\lambda)) & C _ {m} \\ O & O & O & \dots & O & F (P (\lambda)) \end{array} \right).
$$

证明 (1) 由有理标准型理论可知, $F(P(\lambda))$ 的特征多项式和极小多项式都是 $P(\lambda)$ , 故 $J_{e}(P(\lambda))$ 的特征多项式为 $P(\lambda)^{e}$ , 从而 $J_{e}(P(\lambda))$ 的极小多项式为 $P(\lambda)^{l}$ , 其中 $1 \leq l \leq e$ . 下面验证 $J_{e}(P(\lambda))$ 不适合 $P(\lambda)^{e-1}$ , 从而 $J_{e}(P(\lambda))$ 的极小多项式必为 $P(\lambda)^{e}$ . 以下简记 $g(\lambda) = P(\lambda)^{e-1}$ , $\boldsymbol{F} = \boldsymbol{F}(P(\lambda))$ , 则通过分块矩阵的计算可得

$$
g (\boldsymbol {J} _ {e} (P (\lambda))) = \left( \begin{array}{c c c c c} g (\boldsymbol {F}) & \frac {1}{1 !} g ^ {\prime} (\boldsymbol {F}) & \frac {1}{2 !} g ^ {(2)} (\boldsymbol {F}) & \dots & \frac {1}{(e - 1) !} g ^ {(e - 1)} (\boldsymbol {F}) \\ & g (\boldsymbol {F}) & \frac {1}{1 !} g ^ {\prime} (\boldsymbol {F}) & \dots & \frac {1}{(e - 2) !} g ^ {(e - 2)} (\boldsymbol {F}) \\ & & g (\boldsymbol {F}) & \dots & \frac {1}{(e - 3) !} g ^ {(e - 3)} (\boldsymbol {F}) \\ & & & \ddots & \vdots \\ & & & & g (\boldsymbol {F}) \end{array} \right).
$$

由 Cayley-Hamilton 定理可得 $P(\boldsymbol{F}) = \boldsymbol{O}$ ，从而 $g^{(i)}(\boldsymbol{F}) = \boldsymbol{O} (0 \leq i \leq e - 2)$ ，但 $g^{(e-1)}(\boldsymbol{F}) = (e - 1)!P'(\boldsymbol{F})^{e-1}$ 。由于 $P(\lambda)$ 是不可约多项式，故 $(P(\lambda), P'(\lambda)) = 1$ ，进一步有 $(P(\lambda), P'(\lambda)^{e-1}) = 1$ ，从而由例 6.84 可知， $P'(\boldsymbol{F})^{e-1}$ 是可逆矩阵，于是 $\frac{1}{(e-1)!}g^{(e-1)}(\boldsymbol{F}) = P'(\boldsymbol{F})^{e-1} \neq \boldsymbol{O}$ ，即有 $g(J_e(P(\lambda))) \neq \boldsymbol{O}$ 。因此 $J_e(P(\lambda))$ 的极小多项式为 $P(\lambda)^e$ ，其不变因子组为 $1, \cdots, 1, P(\lambda)^e$ 。

(2) 我们来计算 $\widetilde{J}_e(P(\lambda))$ 的 $me - 1$ 阶行列式因子, 注意到特征矩阵 $\lambda I - \widetilde{J}_e(P(\lambda))$ 的前 $me - 1$ 行、后 $me - 1$ 列构成的 $me - 1$ 阶子式是一个主对角元全为 $-1$ 的下三角行列式, 其值为 $(-1)^{me - 1}$ , 故 $\widetilde{J}_e(P(\lambda))$ 的 $me - 1$ 阶行列式因子为 1. 又 $\widetilde{J}_e(P(\lambda))$ 的 $me$ 阶行列式因子为 $P(\lambda)^e$ , 故其行列式因子组为 $1, \cdots, 1, P(\lambda)^e$ , 从而不变因子组也为 $1, \cdots, 1, P(\lambda)^e$ . □

例 7.95 设 A 是 K 上的 n 阶矩阵, 它在 K 上的初等因子组为 $P_{1}(\lambda)^{e_{1}}, P_{2}(\lambda)^{e_{2}}$ , $\cdots, P_{t}(\lambda)^{e_{t}}$ , 其中 $P_{i}(\lambda)$ 是 K 上的首一不可约多项式, $e_{i} \geq 1, 1 \leq i \leq t$ , 证明 A 在 K 上相似于下列分块对角矩阵:

(1) $J = \text{diag}\{J_{e_1}(P_1(\lambda)), J_{e_2}(P_2(\lambda)), \cdots, J_{e_t}(P_t(\lambda))\}$ ; 

(2) $\widetilde{J}=\mathrm{diag}\{\widetilde{J}_{e_{1}}(P_{1}(\lambda)),\widetilde{J}_{e_{2}}(P_{2}(\lambda)),\cdots,\widetilde{J}_{e_{t}}(P_{t}(\lambda))\}.$ 

证明 将 $\lambda I - J$ 和 $\lambda I - \widetilde{J}$ 按照每个分块依次进行 $\lambda$ -矩阵的初等变换, 由例7.94可知, 上述两个矩阵都相抵于

$$
\operatorname{diag} \left\{1, \dots , 1, P _ {1} (\lambda) ^ {e _ {1}}; 1, \dots , 1, P _ {2} (\lambda) ^ {e _ {2}}; \dots ; 1, \dots , 1, P _ {t} (\lambda) ^ {e _ {t}} \right\}.
$$

由例 7.10 可知, J 和 $\widetilde{J}$ 的初等因子组都是 $P_{1}(\lambda)^{e_{1}}, P_{2}(\lambda)^{e_{2}}, \cdots, P_{t}(\lambda)^{e_{t}}$ ，即它们与 A 在 K 上有相同的初等因子组，因此它们与 A 在 K 上相似。☐

注 例 7.95 中的 $J$ 和 $\widetilde{J}$ 均称为数域 $\mathbb{K}$ 上基于初等因子的广义 Jordan 标准型. 当 $\mathbb{K} = \mathbb{C}$ 时, 注意到不可约多项式都是一次的, 故可设 $P(\lambda) = \lambda - \lambda_0$ , 则例 7.94 中的广义 Jordan 块 $J_{e}(P(\lambda))$ 和 $\widetilde{J}_{e}(P(\lambda))$ 都变成了复数域上的 Jordan 块 $J_{e}(\lambda_{0})$ , 广义 Jordan 标准型 $J$ 和 $\widetilde{J}$ 都变成了复数域上的 Jordan 标准型. $J$ 和 $\widetilde{J}$ 之间的区别只是形式上的, 即对每个广义 Jordan 块而言, 其上次对角线上的矩阵一个是单位矩阵 $I_{m}$ , 一个是矩阵 $C_{m}$ . 从本质上看, 这两种广义 Jordan 标准型其实是一致的, 只不过在一些具体问题的讨论中, 各有各的用途而已.

下面我们来看一看实数域上的广义 Jordan 标准型.

例 7.96 设 A 是实数域上的 n 阶矩阵, 证明 A 在实数域上相似于下列分块对角矩阵:

(1) $J = \text{diag}\{\boldsymbol{J}_{r_1}(\lambda_1), \cdots, \boldsymbol{J}_{r_k}(\lambda_k), \boldsymbol{J}_{s_1}(a_1, b_1), \cdots, \boldsymbol{J}_{s_l}(a_l, b_l)\};$ 

(2) $\widetilde{J}=\mathrm{diag}\{J_{r_{1}}(\lambda_{1}),\cdots,J_{r_{k}}(\lambda_{k}),\widetilde{J}_{s_{1}}(a_{1},b_{1}),\cdots,\widetilde{J}_{s_{l}}(a_{l},b_{l})\}$ , 

其中 $\lambda_{1},\cdots,\lambda_{k},a_{1},b_{1},\cdots,a_{l},b_{l}$ 都是实数, $b_{1},\cdots,b_{l}$ 都非零, $J_{r_{i}}(\lambda_{i})$ 表示以 $\lambda_{i}$ 为特征值的通常意义下的 Jordan 块, $R_{j}=\begin{pmatrix}a_{j}&b_{j}\\-b_{j}&a_{j}\end{pmatrix},C_{2}=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ ，且

$$
\boldsymbol {J} _ {s _ {j}} (a _ {j}, b _ {j}) = \left( \begin{array}{c c c c c} \boldsymbol {R} _ {j} & \boldsymbol {I} _ {2} & & & \\ & \boldsymbol {R} _ {j} & \boldsymbol {I} _ {2} & & \\ & & \ddots & \ddots & \\ & & & \boldsymbol {R} _ {j} & \boldsymbol {I} _ {2} \\ & & & & \boldsymbol {R} _ {j} \end{array} \right), \widetilde {\boldsymbol {J}} _ {s _ {j}} (a _ {j}, b _ {j}) = \left( \begin{array}{c c c c c} \boldsymbol {R} _ {j} & \boldsymbol {C} _ {2} & & & \\ & \boldsymbol {R} _ {j} & \boldsymbol {C} _ {2} & & \\ & & \ddots & \ddots & \\ & & & \boldsymbol {R} _ {j} & \boldsymbol {C} _ {2} \\ & & & & \boldsymbol {R} _ {j} \end{array} \right).
$$

证明 注意到实数域上的不可约多项式是一次多项式或者是判别式小于零的二次多项式, 故可设 $\mathbf{A}$ 的初等因子组为 $(\lambda - \lambda_1)^{r_1}, \cdots, (\lambda - \lambda_k)^{r_k}, ((\lambda - a_1)^2 + b_1^2)^{s_1}, \cdots, ((\lambda - a_l)^2 + b_l^2)^{s_l}$ , 其中 $\lambda_1, \cdots, \lambda_k, a_1, b_1, \cdots, a_l, b_l$ 都是实数, 且 $b_1, \cdots, b_l$ 都非零.

(1) 由例 7.95 (1) 可知, A 实相似于 $\mathrm{diag}\{\boldsymbol{J}_{r_{1}}(\lambda_{1}),\cdots,\boldsymbol{J}_{r_{k}}(\lambda_{k}),\boldsymbol{J}_{s_{1}}((\lambda-a_{1})^{2}+b_{1}^{2}),\cdots,\boldsymbol{J}_{s_{l}}((\lambda-a_{l})^{2}+b_{l}^{2})\}$ ，注意到 $\boldsymbol{F}((\lambda-a_{j})^{2}+b_{j}^{2})=\begin{pmatrix}0&1\\-(a_{j}^{2}+b_{j}^{2})&2a_{j}\end{pmatrix}$ 与 $R_{j}=\begin{pmatrix}a_{j}&b_{j}\\-b_{j}&a_{j}\end{pmatrix}$ 有相同的特征值 $a_{j}\pm ib_{j}$ ，故它们在复数域上，从而也在实数域上相似。因为 $J_{s_{j}}((\lambda-a_{j})^{2}+b_{j}^{2})$ 的上次对角线都是 $I_{2}$ ，所以不难把这种相似关系扩张到整个广义 Jordan 块上，从而 $J_{s_{j}}((\lambda-a_{j})^{2}+b_{j}^{2})$ 实相似于 $J_{s_{j}}(a_{j},b_{j})$ ，于是 A 实相似于 J。

(2) 因为 $\widetilde{J}_{s_j}((\lambda - a_j)^2 + b_j^2)$ 的上次对角线都是 $C_2$ , 所以用例 7.95 (2) 很难推出第二个结论, 这里我们采用直接计算 $\widetilde{J}_{s_j}(a_j, b_j)$ 的不变因子组的方法来证明. 注意到$\lambda I-\widetilde{J}_{s_{j}}(a_{j},b_{j})$ 右上方的 $2s_{j}-1$ 阶子式等于 $(-1)^{2s_{j}-1}b_{j}^{s_{j}}\neq0$ , 故 $\widetilde{J}_{s_{j}}(a_{j},b_{j})$ 的 $2s_{j}-1$ 阶行列式因子为1, 于是其行列式因子组和不变因子组均为 $1,\cdots,1,((\lambda-a_{j})^{2}+b_{j}^{2})^{s_{j}}$ . 由 $\lambda$ -矩阵的初等变换以及例7.10可知, A 和 $\widetilde{J}$ 在实数域上有相同的初等因子组, 从而它们在实数域上相似. □

下面我们同时用数域 $\mathbb{K}$ 上基于初等因子的有理标准型和广义 Jordan 标准型给出例 7.92 和例 7.93 的第三种证法.

例 7.92 的证法 3 设 $\varphi$ 在 K 上的初等因子为 $\lambda^{r_{1}},\cdots,\lambda^{r_{k}},P_{1}(\lambda)^{e_{1}},\cdots,P_{t}(\lambda)^{e_{t}}$ ，其中 $P_{1}(\lambda),\cdots,P_{t}(\lambda)$ 是 K 上常数项非零的不可约多项式，则由例 7.19 或例 7.95 可知，存在 V 的一组基 $\{e_{1},e_{2},\cdots,e_{n}\}$ ，使得 $\varphi$ 在这组基下的表示矩阵为

$$
\operatorname{diag} \left\{\boldsymbol {F} \left(\lambda^ {r _ {1}}\right), \dots , \boldsymbol {F} \left(\lambda^ {r _ {k}}\right), \boldsymbol {F} \left(P _ {1} (\lambda) ^ {e _ {1}}\right), \dots , \boldsymbol {F} \left(P _ {t} (\lambda) ^ {e _ {t}}\right) \right\} \text {或}
$$

$$
\operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} (0), \dots , \boldsymbol {J} _ {r _ {k}} (0), \boldsymbol {J} _ {e _ {1}} \left(P _ {1} (\lambda)\right), \dots , \boldsymbol {J} _ {e _ {t}} \left(P _ {t} (\lambda)\right) \right\}.
$$

若特征值 0 是 $\varphi$ 的极小多项式的单根, 则 $r_1 = \cdots = r_k = 1$ , 容易验证 $\operatorname{Ker} \varphi = L(e_1, \cdots, e_k)$ , $\operatorname{Im} \varphi = L(e_{k+1}, \cdots, e_n)$ , 从而 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ . 反之, 若 $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi$ , 则 $\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi = 0$ . 若存在某个 $r_i > 1$ , 比如说 $r_1 > 1$ , 则由例 7.40 的充分性完全类似的证明可知, $0 \neq e_1 \in \operatorname{Ker} \varphi \cap \operatorname{Im} \varphi$ , 这就推出了矛盾. 因此, $r_1 = \cdots = r_k = 1$ , 从而 0 是 $\varphi$ 的极小多项式的单根. □

例 7.93 的证法 3 设 A 在 K 上的初等因子为 $\lambda^{r_{1}},\cdots,\lambda^{r_{k}},P_{1}(\lambda)^{e_{1}},\cdots,P_{t}(\lambda)^{e_{t}}$ ，其中 $P_{1}(\lambda),\cdots,P_{t}(\lambda)$ 是 K 上常数项非零的不可约多项式，则由例 7.19 或例 7.95 可知，A 在 K 上相似于分块对角矩阵

$$
\operatorname{diag} \left\{\boldsymbol {F} \left(\lambda^ {r _ {1}}\right), \dots , \boldsymbol {F} \left(\lambda^ {r _ {k}}\right), \boldsymbol {F} \left(P _ {1} (\lambda) ^ {e _ {1}}\right), \dots , \boldsymbol {F} \left(P _ {t} (\lambda) ^ {e _ {t}}\right) \right\} \text {或}
$$

$$
\operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} (0), \dots , \boldsymbol {J} _ {r _ {k}} (0), \boldsymbol {J} _ {e _ {1}} \left(P _ {1} (\lambda)\right), \dots , \boldsymbol {J} _ {e _ {t}} \left(P _ {t} (\lambda)\right) \right\}.
$$

令 $B = \text{diag}\{F(\lambda^{r_1}), \cdots, F(\lambda^{r_k})\}$ 或 $\text{diag}\{J_{r_1}(0), \cdots, J_{r_k}(0)\}, C = \text{diag}\{F(P_1(\lambda)^{e_1}), \cdots, F(P_t(\lambda)^{e_t})\}$ 或 $\text{diag}\{J_{e_1}(P_1(\lambda)), \cdots, J_{e_t}(P_t(\lambda))\}$ ，则由每个 $F(\lambda^{r_i})$ 或 $J_{r_i}(0)$ 都幂零可知 B 是幂零矩阵，由每个 $F(P_j(\lambda)^{e_j})$ 或 $J_{e_j}(P_j(\lambda))$ 的行列式的绝对值为 $P_j(0)^{e_j} \neq 0$ 可知 C 是可逆矩阵，因此结论成立。☐

利用广义 Jordan 标准型理论可以证明 $\mathbb{K}$ 上的 Jordan-Chevalley 分解定理.

例 7.97 设 A 是数域 K 上的 n 阶矩阵, 证明存在 K 上的 n 阶矩阵 B, C, 使得 $A = B + C$ , 且满足:

(1) $B$ 在复数域上可对角化; (2) $C$ 是幂零矩阵; (3) $BC = CB$ , 并且满足上述条件的分解一定是唯一的.

证明 设 A 在 K 上的初等因子组为 $P_{1}(\lambda)^{e_{1}}, P_{2}(\lambda)^{e_{2}}, \cdots, P_{t}(\lambda)^{e_{t}}$ ，其中 $P_{i}(\lambda)$ 是 K 上的首一不可约多项式， $e_{i} \geq 1, 1 \leq i \leq t$ 。由例 7.95 可知，存在 K 上的可逆矩阵 P，使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \boldsymbol {J} = \operatorname{diag} \left\{\boldsymbol {J} _ {e _ {1}} \left(P _ {1} (\lambda)\right), \boldsymbol {J} _ {e _ {2}} \left(P _ {2} (\lambda)\right), \dots , \boldsymbol {J} _ {e _ {t}} \left(P _ {t} (\lambda)\right) \right\}.
$$

我们先对广义 Jordan 块 $J_{e_i}(P_i(\lambda))$ 来证明结论, 为方便起见, 记 $\pmb{F}_i = \pmb{F}(P_i(\lambda))$ . 由于 $P_i(\lambda)$ 在 $\mathbb{K}$ 上不可约, 故 $(P_i(\lambda), P_i'(\lambda)) = 1$ , 从而 $P_i(\lambda)$ 在复数域上无重根, 于是 $\pmb{F}_i$ 在复数域上可对角化. 令

$$
M _ {i} = \left( \begin{array}{c c c c c c} F _ {i} & O & O & \dots & O & O \\ O & F _ {i} & O & \dots & O & O \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ O & O & O & \dots & F _ {i} & O \\ O & O & O & \dots & O & F _ {i} \end{array} \right), N _ {i} = \left( \begin{array}{c c c c c c} O & I & O & \dots & O & O \\ O & O & I & \dots & O & O \\ \vdots & \vdots & \vdots & & \vdots & \vdots \\ O & O & O & \dots & O & I \\ O & O & O & \dots & O & O \end{array} \right),
$$

则容易验证 $J_{e_{i}}(P_{i}(\lambda)) = M_{i} + N_{i}, M_{i}$ 复可对角化, $N_{i}$ 幂零, $M_{i}N_{i} = N_{i}M_{i}$ . 再令 $M = \text{diag}\{M_{1}, \cdots, M_{t}\}, N = \text{diag}\{N_{1}, \cdots, N_{t}\}$ , 则 $J = M + N, M$ 复可对角化, N 幂零, MN = NM. 最后令 $B = PMP^{-1}, C = PNP^{-1}$ , 则 B, C 是 K 上的矩阵, A = B + C, B 复可对角化, C 幂零, BC = CB. 我们也可将 A, B, C 看成是复数域上的矩阵, 由复数域上的 Jordan-Chevalley 分解定理 (参考例 7.33) 的唯一性可知, 满足上述条件的分解一定是唯一的. □

注 类似于例 7.33, 我们还可以证明对于上述分解 $A = B + C$ , 存在 $\mathbb{K}$ 上的多项式 $f(x)$ , 使得 $B = f(A)$ . 不过, 由于此证明涉及抽象代数中域的扩张等相关知识点, 故在这里就不作详细的展开了.

利用广义 Jordan 标准型理论可将例 7.91 推广到数域 K 上, 其证明请参考 [8].

例 7.98 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 其特征多项式为 $f(\lambda)$ , 极小多项式为 $m(\lambda)$ . 证明: 若 $f(\lambda) = m(\lambda) = P_1(\lambda)^{r_1}P_2(\lambda)^{r_2}\cdots P_k(\lambda)^{r_k}$ , 其中 $P_i(\lambda)$ 是 $\mathbb{K}$ 上互异的首一不可约多项式, 则 $V$ 共有 $(r_1 + 1)(r_2 + 1)\cdots (r_k + 1)$ 个 $\varphi$ -不变子空间; 若 $f(\lambda) \neq m(\lambda)$ , 则 $V$ 有无穷个 $\varphi$ -不变子空间. $\square$ 

最后, 利用实数域上的广义 Jordan 标准型理论还可将例 7.72 推广到实数域上 (这也是例 7.77 的推广), 其证明请参考 [9].

例 7.99 设 A 为 n 阶非异实矩阵, m 为任一正整数. 若 m 为偶数, 则再假设对 A 的任一负特征值 $\lambda_{0}$ , 其 Jordan 块在 A 的 Jordan 标准型中成对出现: $J_{r_{1}}(\lambda_{0}), J_{r_{1}}(\lambda_{0}), \cdots, J_{r_{k}}(\lambda_{0}), J_{r_{k}}(\lambda_{0})$ . 证明: 存在 n 阶实矩阵 B, 使得 $A = B^{m}$ . □

## § 7.12 基础训练

### 7.12.1 训练题

#### 一、单选题

1. 下列变换不是 $\lambda-$ 矩阵的可逆变换的是（）.

(A) 将 $\lambda-$ 矩阵的某一行乘以一个次数大于零的多项式 $f(\lambda)$ 

(B) 有限次 $\lambda-$ 矩阵的初等变换之积

(C) 对换 $\lambda-$ 矩阵的两列

(D) 将 $\lambda$ 乘以第一行加到第二行上去

2. n 阶 $\lambda$ -矩阵 $A(\lambda)$ 可逆的充要条件是（）.

(A) $A(\lambda) \neq 0$ 

(B) $|\mathbf{A}(\lambda)|\neq 0$ 

(C) $\left|A(\lambda)\right|$ 是一个非零常数

(D) $A(\lambda)$ 的法式中主对角线上的元素全不等于零

3. 下列 n 阶矩阵必相似的是（）.

(A) A 和它的伴随 $A^{*}$ 

(B) A 和它的转置 $A'$ 

(C) A 和 kA, 其中 k 是非零常数

(D) A 和 AP, 其中 P 是一个初等矩阵

4. 下列结论正确的是（）.

(A) 若 n 阶矩阵 A, B 有相同的行列式因子，则它们有相同的极小多项式

(B) 若 $n$ 阶矩阵 $\mathbf{A}, \mathbf{B}$ 有相同的特征多项式和极小多项式, 则它们必相似

(C) 若 n 阶矩阵 A, B 有相同的特征值, 则它们必相似

(D) 若 n 阶矩阵 A, B 相抵, 则它们必相似

5. 下列结论错误的是（）.

(A) 若矩阵 $A$ 的初等因子有 $k$ 个, 则 $A$ 的 Jordan 标准型有 $k$ 个 Jordan 块

(B) 若矩阵 A 的非常数不变因子有 k 个, 则 A 的 Jordan 标准型有 k 个 Jordan 块

(C) 若矩阵 A 有一个初等因子是 k 次多项式, 则与它对应的 Jordan 块是 k 阶矩阵

(D) 矩阵 A 的所有初等因子的次数之和等于 A 的阶数

6. 设 n 阶矩阵 A 和 B 的初等因子相同, 则下列结论未必成立的是 ( ).

(A) 存在可逆矩阵 P, 使 $P^{-1}AP$ 和 $P^{-1}BP$ 都是 Jordan 标准型

(B) A 和 B 的不变因子相同

(C) A 和 B 相抵

(D) $|A| = |B|$ 

7. 下列实数矩阵 A 必实相似于对角矩阵的是（）.

(A) 初等矩阵

(B) 上三角矩阵

(C) 非零幂零矩阵, 即 $A^{k}=O$ 

(D) 幂等矩阵, 即 $A^{2} = A$ 

8. 矩阵 A 为可逆矩阵的充要条件是（）.

(A) 矩阵 A 的不变因子全不为零

(B) 矩阵 A 的行列式因子全不为零

(C) 矩阵 A 的最后一个不变因子有非零常数项

(D) 矩阵 A 至少有一个不变因子有非零常数项

9. 设八阶矩阵 A 的初等因子组为 $(\lambda-1)^{2}, (\lambda-1)^{2}, (\lambda+1)^{3}, \lambda,$ 则 A 的不变因子组为 ( ).

(A) 1, 1, 1, 1, $\lambda$ , $(\lambda - 1)^{2}$ , $(\lambda - 1)^{2}$ , $(\lambda + 1)^{3}$ 

(B) 1, 1, 1, 1, 1, $(\lambda - 1)^{2}$ , $(\lambda - 1)^{2}$ , $\lambda(\lambda + 1)^{3}$ 

(C) 1, 1, 1, 1, 1, $(\lambda - 1)^{2}$ , $\lambda(\lambda - 1)^{2}$ , $(\lambda + 1)^{3}$ 

(D) 1, 1, 1, 1, 1, 1, $(\lambda - 1)^{2}$ , $\lambda(\lambda - 1)^{2}(\lambda + 1)^{3}$ 

10. 已知矩阵 $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ ，下列矩阵和 A 相似的是（）.

(A) $\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix}$ 

(B) $\begin{pmatrix}1&1&0\\0&2&0\\0&0&2\end{pmatrix}$ 

(C) $\left( \begin{array}{ccc}1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 1 & 2 \end{array} \right)$ 

(D) $\begin{pmatrix}1&1&0\\0&1&1\\0&0&2\end{pmatrix}$ 

11. 设三阶矩阵 A 的极小多项式是 $(\lambda - 1)^{2}$ ，则 A 的 Jordan 标准型是（）.

(A) $\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$ 

(B) $\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$ 

(C) $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ 

(D) $\begin{pmatrix}1&1&0\\0&1&0\\0&0&0\end{pmatrix}$ 

12. 设矩阵 A 的特征多项式是 $(\lambda - 2)(\lambda - 1)^{3}$ ，极小多项式是 $(\lambda - 2)(\lambda - 1)^{2}$ ，则（）.

(A) A 是四阶矩阵且其 Jordan 标准型有 2 个 Jordan 块

(B) A 是三阶矩阵且其 Jordan 标准型有 2 个 Jordan 块

(C) A 是四阶矩阵且其 Jordan 标准型有 3 个 Jordan 块

(D) A 是四阶矩阵且其 Jordan 标准型是对角矩阵

13. 下列矩阵的 Jordan 标准型必不是对角矩阵的是（）.

(A) 可逆矩阵

(B) 基础矩阵 $E_{ij}$ ，其中 $i \neq j$ 

(C) 初等矩阵

(D) 主对角元素互不相同的下三角矩阵

14. 设 A 是十阶非零矩阵且满足 $A^{2}=O$ ，则 A 的 Jordan 标准型中 Jordan 块的最大阶数为（）.

(A) 2 

(B) 3 

(C) 4 

(D) 5 

15. 设矩阵 A 有一个不变因子 $\lambda^{2} + \lambda$ ，则下列结论正确的是（）.

(A) A 相似于对角矩阵

(B) A 是奇异矩阵

(C) A 的初等因子都是 $\lambda$ 的幂或 $\lambda + 1$ 的幂

(D) A 的特征值为 0, -1 (有可能是重根)

#### 二、填空题

1. 设有 $\lambda-$ 矩阵:

$$
M (\lambda) = M _ {m} \lambda^ {m} + M _ {m - 1} \lambda^ {m - 1} + \dots + M _ {1} \lambda + M _ {0},
$$

$$
N (\lambda) = N _ {n} \lambda^ {n} + N _ {n - 1} \lambda^ {n - 1} + \dots + N _ {1} \lambda + N _ {0},
$$

其中 $M_{i}, N_{j}$ 为数字矩阵，问 $M(\lambda)N(\lambda)$ 的次数是否等于 $m + n?$ （）

2. 设 $M(\lambda)$ 是 $n$ 阶 $\lambda$ -矩阵且 $M(\lambda) = (\lambda I_n - A)P(\lambda) + R$ , 假设又有 $M(\lambda) = (\lambda I_n - A)Q(\lambda) + T$ , 其中 $R, T$ 为数字矩阵. 问是否必有 $P(\lambda) = Q(\lambda), R = T?$ ( )

3. 将有理标准型 $F = \text{diag}\{F_1, F_2, \cdots, F_k\}$ 中的两块 $F_i$ 和 $F_j$ 对换位置, 得到的矩阵是否和 F 相似? ()

4. 设 $n$ 阶分块矩阵 $\mathbf{A} = \mathrm{diag}\{\mathbf{A}_1, \mathbf{A}_2\}$ , 其中 $\mathbf{A}_1, \mathbf{A}_2$ 的有理标准型都只有一块且它们的特征多项式分别是 $f_1(\lambda), f_2(\lambda)$ . 若 $f_2(\lambda) \mid f_1(\lambda)$ , 写出 $\mathbf{A}$ 的法式.

5. 设矩阵 A 的不变因子组为 $1, \cdots, 1, \lambda, \lambda^{2}(\lambda - 1), \lambda^{2}(\lambda - 1)^{3}(\lambda^{2} + 1)$ ，写出 A 在复数域上的初等因子组.

6. 设矩阵 A 的初等因子组为 $\lambda, \lambda^{2}, \lambda^{3}, \lambda - 2, (\lambda - 2)^{2}, \lambda + 2, (\lambda + 2)^{2}$ ，写出 A 的不变因子组.

7. 写出一个矩阵, 它的有理标准型只有一个 Frobenius 块, 而它的 Jordan 标准型是一个对角矩阵.

8. 设矩阵 A 的初等因子组为 $\lambda, \lambda^{2}, (\lambda - 1)^{2}, (\lambda - 1)^{3}$ ，求 A 的 Jordan 标准型.

9. 设四阶矩阵 A 的极小多项式为 $(\lambda^{2}-1)(\lambda^{2}-4)$ ，求 A 的 Jordan 标准型.

10. 设矩阵 A 的非常数不变因子为 $(\lambda-1)$ , $(\lambda-1)(\lambda+1)$ , $(\lambda-1)^{2}(\lambda+1)^{2}$ , 求 A 的 Jordan 标准型.

11. 设 A, B 为 n 阶幂等矩阵, 即 $A^{2} = A$ , $B^{2} = B$ . 若 A 和 B 的秩相同, 问 A 和 B 是否必相似? ( ).

12. 设 A 是 n 阶幂零矩阵, 即有正整数 k, 使得 $A^{k} = O, A^{k-1} \neq O$ , 则 A 的最后一个不变因子是().

13. 设 $n$ 阶矩阵 $\pmb{A}$ 满足 $A^2 - 3A + 2I_n = O$ , 问 $\pmb{A}$ 是否必相似于对角矩阵? ( )

14. 设 $n$ 阶有理数矩阵 $\mathbf{A}$ 的极小多项式是一个有理数域上的不可约多项式, 问 $\mathbf{A}$ 的 Jordan 标准型是否必是对角矩阵? ( )

15. 设矩阵 A 的特征多项式和极小多项式重合, 矩阵 B 也具有这个性质, 若 A 和 B 的特征多项式相同, 问 A, B 是否必相似? ( )

#### 三、解答题

1. 设 A 为 n 阶实矩阵, A 的 n-1 阶行列式因子是 n-2 次多项式, 求 A 的不变因子组.

2. 设 A 是数域 K 上的 n 阶矩阵, 证明存在如下分解: $A = A_{0} + A_{1} + A_{2}$ , 其中 $A_{0}$ 为 K 上的纯量矩阵, $A_{1}, A_{2}$ 均为 K 上的幂零矩阵.

3. 设 $\varphi$ 是数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 其中 $V = C(\varphi, \alpha)$ 为循环空间, $\alpha$ 为循环向量. 设 $\psi, \xi$ 是与 $\varphi$ 乘法可交换的两个线性变换, 求证: $\psi = \xi$ 的充要条件是 $\psi(\alpha) = \xi(\alpha)$ .

4. 设 A 为三阶实矩阵, 试求 $C(A) = \{X \in M_{3}(\mathbb{R}) \mid AX = X A\}$ .

5. 设 A 为 $n(n \geq 2)$ 阶复方阵，满足 $|A| = 1$ 。设 A 与其伴随矩阵 $A^{*}$ 都适合多项式 $(\lambda - \lambda_{1})(\lambda - \lambda_{1}^{-1})^{m_{1}} \cdots (\lambda - \lambda_{k})(\lambda - \lambda_{k}^{-1})^{m_{k}}$ ，其中 $\lambda_{1}, \lambda_{1}^{-1}, \cdots, \lambda_{k}, \lambda_{k}^{-1}$ 是两两互异的非零复数， $m_{i} \geq 1$ 。证明：A 可对角化。

6. 设 $V$ 为 $n$ 阶复方阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(X) = AXA'$ , 其中 $A \in V$ . 证明: $\varphi$ 可对角化的充要条件是 $A$ 可对角化.

7. 设 $V$ 为 $n$ 阶复方阵全体构成的线性空间, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(X) = AX - XA'$ , 其中 $A \in V$ . 证明: $\varphi$ 可对角化的充要条件是 $A$ 可对角化.

8. 设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换, $U$ 是 $V$ 的任一非零 $\varphi$ -不变子空间. 若 $\varphi$ 的极小多项式等于其特征多项式, 求证: 限制变换 $\varphi|_{U}$ 的极小多项式也等于其特征多项式.

9. 求下列矩阵的 Jordan 标准型:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} n & n - 1 & n - 2 & \dots & 1 \\ 0 & n & n - 1 & \dots & 2 \\ 0 & 0 & n & \dots & 3 \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & n \end{array} \right).
$$

10. 求下列矩阵的 Jordan 标准型, 其中 a 为参数:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & a & 0 & 2 \\ 0 & 1 & 0 & - 1 \\ - 3 & 4 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{array} \right).
$$

11. 设 $J_{n}(a)$ 是特征值为 $a$ 的 $n$ 阶 Jordan 块, 又 $f(x)$ 是一个多项式, 求证:

$$
f (J _ {n} (a)) = \left( \begin{array}{c c c c c} f (a) & \frac {f ^ {\prime} (a)}{1 !} & \frac {f ^ {(2)} (a)}{2 !} & \dots & \frac {f ^ {(n - 1)} (a)}{(n - 1) !} \\ & f (a) & \frac {f ^ {\prime} (a)}{1 !} & \dots & \frac {f ^ {(n - 2)} (a)}{(n - 2) !} \\ & & \ddots & \ddots & \vdots \\ & & & \ddots & \frac {f ^ {\prime} (a)}{1 !} \\ & & & & f (a) \end{array} \right).
$$

12. 设 $n$ 阶复方阵 $\mathbf{A}$ 的特征多项式为 $f(\lambda)$ , 复系数多项式 $g(\lambda)$ 满足 $(f(g(\lambda)), g'(\lambda)) = 1$ . 证明: 存在 $n$ 阶复方阵 $\mathbf{B}$ , 使得 $g(\mathbf{B}) = \mathbf{A}$ .

13. 证明: 对任意的 $n$ 阶非异复方阵 $\mathbf{A}$ , 存在 $n$ 阶复方阵 $\mathbf{B}$ , 使得 $\mathrm{e}^{\mathbf{B}} = \mathbf{A}$ .

14. 设 A 为 n 阶复方阵, $\theta_{0}$ 是 $\cos x = x$ 在 $(0, \frac{\pi}{2})$ 中的唯一解. 证明: 若 A 的特征值全为 $\theta_{0}$ , 则 A 相似于 $\cos A$ .

15. 设 $m$ 为给定的正整数, 证明: 对任意的正整数 $n, l$ , 存在 $m$ 阶实方阵 $\pmb{X}$ , 使得

$$
\boldsymbol {X} ^ {n} + \boldsymbol {X} ^ {l} = \boldsymbol {I} _ {m} + \left( \begin{array}{c c c c} 1 & 2 & \dots & m \\ & 1 & \ddots & \vdots \\ & & \ddots & 2 \\ & & & 1 \end{array} \right).
$$

### 7.12.2 训练题答案

#### 一、单选题

1. 应选择 (A).

2. 应选择 (C). 显然 (A) 不对, 注意 $|\mathbf{A}(\lambda)|$ 不为零时仍可能是一个非常数多项式, 这时 $\mathbf{A}(\lambda)$ 不是可逆 $\lambda$ -矩阵, 因此 (B) 和 (D) 也不对.

3. 应选择 (B). 矩阵 A 和它的转置有相同的行列式因子, 因此必相似.

4. 应选择 (A). 若 $A$ 和 $B$ 有相同的行列式因子, 则不变因子也相同, 又极小多项式是最后一个不变因子, 故相同.

5. 应选择 (B). 矩阵的 Jordan 标准型中 Jordan 块的个数等于初等因子的个数而不是不变因子的个数.

6. 应选择 (A). 两个矩阵初等因子相同必相似, 因此 (B), (C), (D) 都成立. 例如, $A = J_{n}(0)$ , $B = 2J_{n}(0)$ 有相同的初等因子 $\lambda^{n}$ , 但不存在可逆矩阵 $P$ , 使 $P^{-1}AP$ 和 $P^{-1}BP$ 都是 Jordan 标准型 $J_{n}(0)$ .

7. 应选择 (D), 参考例 6.67 (2). 第三类初等矩阵不能对角化; 上三角矩阵 $J_{n}(0)$ 不能对角化; 更一般地, 非零的幂零矩阵也不能对角化 (参考例 6.73 (1)), 因此 (A), (B), (C) 都不对.

8. 应选择 (C). 矩阵的最后一个不变因子就是它的极小多项式, 当极小多项式的常数项不为零时, 矩阵必可逆 (参考例 6.85). 显然 (A), (B) 都不是正确的选择, 例如零矩阵的行列式因子和不变因子全不为零. 对角矩阵 $\operatorname{diag}\{0,1,1\}$ 的不变因子为 $1, \lambda - 1, \lambda (\lambda - 1)$ , 虽然有不变因子有非零常数项, 但矩阵不可逆, 故 (D) 也不正确.

9. 应选择 (D).

10. 应选择 (C).

11. 应选择 (B).

12. 应选择 (C). 这是一个四阶矩阵, 可求出另外一个不变因子是 $\lambda - 1$ .

13. 应选择 (B). 当 $i \neq j$ 时, $\pmb{E}_{ij}$ 是非零的幂零矩阵, 必不可对角化. 第二类初等矩阵本身就是对角矩阵; 存在可对角化的可逆矩阵; 主对角元素互不相同的下三角矩阵的特征多项式无重根, 必可对角化. 因此 (A), (C), (D) 都不对.

14. 应选择 (A). 由条件可知, 矩阵 A 的极小多项式为 $\lambda^{2}$ , 从而 Jordan 块的最大阶数为 2.

15. 应选择 (B). 因为所有不变因子的乘积等于矩阵 A 的特征多项式, 故 $\lambda^{2} + \lambda$ 是特征多项式的因式, 从而 0 是矩阵 A 的特征值, 于是 A 是奇异矩阵.

#### 二、填空题

1. 不一定. 因为矩阵 $M_{m}$ 与 $N_{n}$ 之积可能为零.

2. 从 $(\lambda I - A)P(\lambda) + R = (\lambda I_n - A)Q(\lambda) + T$ 得到 $(\lambda I - A)(P(\lambda) - Q(\lambda)) = T - R$ . 注意到等式右边是数字矩阵, 若 $P(\lambda) - Q(\lambda) \neq O$ , 则等式左边将不是数字矩阵, 矛盾. 因此, $P(\lambda) = Q(\lambda), T = R$ .

3. 相似. 因为原来的分块矩阵和变换后的分块矩阵, 它们的特征矩阵作为 $\lambda$ -矩阵相抵.

4. diag $\{1,\cdots,1,f_{2}(\lambda),f_{1}(\lambda)\}$ . 

5. $\lambda, \lambda^2, \lambda^2, \lambda - 1, (\lambda - 1)^3, \lambda + i, \lambda - i$ . 

6. $1,\cdots,1,\lambda,\lambda^{2}(\lambda^{2}-4),\lambda^{3}(\lambda^{2}-4)^{2}$ ，其中有9个1.

7. 设 $f(x)$ 是有理数域上的不可约多项式, 则它在复数域内无重根. 多项式 $f(x)$ 的友阵 $C(f(x))$ 只含一个 Frobenius 块, 其特征多项式 $f(x)$ 在复数域内无重根, 因此 $C(f(x))$ 的 Jordan 标准型是对角矩阵. 根据上述分析, 我们作矩阵 $C(x^2 + 1) = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ , 这个矩阵已是有理标准型, 其 Jordan 标准型为 $\begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$ . 更一般的例子可参考例 7.16.

8. 答案为 diag $\left\{0,\begin{pmatrix}0&1\\0&0\end{pmatrix},\begin{pmatrix}1&1\\0&1\end{pmatrix},\begin{pmatrix}1&1\\0&1\end{pmatrix}\right\}$ .

9. 答案为 $diag\{1,-1,2,-2\}$ .

10. 答案为 diag $\left\{1,1,-1,\begin{pmatrix}1&1\\0&1\end{pmatrix},\begin{pmatrix}-1&1\\0&-1\end{pmatrix}\right\}$ .

11. 相似. 若幂等矩阵 A 和 B 的秩都等于 r, 则它们都相似于 $\mathrm{diag}\{1,\cdots,1,0,\cdots,0\}$ , 其中有 r 个 1, n-r 个 0, 因此它们彼此相似.

12. 由条件可知 A 的极小多项式为 $\lambda^{k}$ ，又最后一个不变因子就是极小多项式，因此答案为 $\lambda^{k}$ .

13. 由极小多项式的基本性质可知, A 的极小多项式整除 $x^{2}-3x+2$ , 从而 A 的极小多项式无重根, 于是 A 相似于对角矩阵.

14. 因为不可约多项式在复数域内无重根, 故 A 相似于对角矩阵.

15. 因为 A, B 有相同的不变因子, 故相似.

#### 三、解答题

1. 设 A 的不变因子组为 $d_{1}(\lambda), d_{2}(\lambda), \cdots, d_{n}(\lambda)$ ，其中 $d_{i}(\lambda) \mid d_{i+1}(\lambda) (1 \leq i \leq n-1)$ ，则由条件可知，A 的极小多项式 $m(\lambda) = d_{n}(\lambda)$ 是一个二次实系数多项式。下面分情况进行讨论：(1) 若 $m(\lambda) = (\lambda - a)^{2} + b^{2}$ 在 R 上不可约，其中 $a, b \neq 0$ 为实数，则由整除关系可知 A 的不变因子组为 $1, \cdots, 1, m(\lambda), \cdots, m(\lambda)$ 。(2) 若 $m(\lambda) = (\lambda - a_{1})(\lambda - a_{2})$ ，其中 $a_{1}, a_{2}$ 为实数，则由整除关系可知 A 的不变因子组为 $1, \cdots, 1, \lambda - a_{i}, \cdots, \lambda - a_{i}, m(\lambda), \cdots, m(\lambda), i = 1$ 或 2。

2. 令 $c = \operatorname{tr}(A) / n$ , $A_0 = cI_n$ , 则 $\operatorname{tr}(A - A_0) = \operatorname{tr}(A) - nc = 0$ , 即 $A - A_0$ 是迹为零的矩阵. 由例 7.24 可知, 存在 $\mathbb{K}$ 上的非异阵 $P$ , 使得 $P^{-1}(A - A_0)P = B$ 是一个主对角元全为零的矩阵. 设 $B_1$ 为 $B$ 的主对角线上方元素构成的主对角元全为零的上三角矩阵, $B_2$ 为 $B$ 的主对角线下方元素构成的主对角元全为零的下三角矩阵, 显然, $B = B_1 + B_2$ , 且 $B_1, B_2$ 都是幂零矩阵. 令 $A_1 = PB_1P^{-1}$ , $A_2 = PB_2P^{-1}$ , 则 $A_1, A_2$ 都是 $\mathbb{K}$ 上的幂零矩阵, 且满足 $A = A_0 + A_1 + A_2$ .

3. 必要性是显然的, 下证充分性. 由例 7.12 可知, $\{\alpha, \varphi(\alpha), \cdots, \varphi^{n-1}(\alpha)\}$ 是 $V$ 的一组基. 注意到 $\varphi\psi = \psi\varphi$ , $\varphi\xi = \xi\varphi$ 且 $\psi(\alpha) = \xi(\alpha)$ , 故对任意的 $1 \leq i \leq n-1$ , 有 $\psi(\varphi^i(\alpha)) = \varphi^i(\psi(\alpha)) = \varphi^i(\xi(\alpha)) = \xi(\varphi^i(\alpha))$ , 即 $\psi, \xi$ 在 $V$ 的一组基上的取值都相同, 因此 $\psi = \xi$ .

4. 对 A 的极小多项式 $m(\lambda)$ 的次数进行分类讨论. (1) 若 $\deg m(\lambda) = 1$ , 则 $A = cI_{3}$ 为纯量矩阵, 因此 $C(A) = M_{3}(\mathbb{R})$ . (2) 若 $\deg m(\lambda) = 2$ , 则 A 的不变因子组为 $1, d_{2}(\lambda), m(\lambda)$ , 其中 $\deg d_{2}(\lambda) = 1$ 且 $d_{2}(\lambda) \mid m(\lambda)$ , 于是 $m(\lambda)$ 在 R 上可约. (2.1) 若 $m(\lambda)$ 有两个不同的实根 a, b, 不妨设 $d_{1}(\lambda) = \lambda - a$ , 则存在非异阵 P, 使得 $P^{-1}AP = diag\{a, a, b\}$ . 任取 $X = (x_{ij}) \in C(A)$ , 则由 AX = XA 计算可得 $X = P(x_{11}E_{11} + x_{12}E_{12} + x_{21}E_{21} + x_{22}E_{22} + x_{33}E_{33})P^{-1}$ . (2.2) 若 $m(\lambda)$ 有两个相等的实根 a, 则 $d_{1}(\lambda) = \lambda - a$ , 且存在非异阵 P, 使得 $P^{-1}AP = diag\{a, J_{2}(a)\}$ . 任取 $X = (x_{ij}) \in C(A)$ , 则由 AX = XA 计算可得 $X = P(x_{11}E_{11} + x_{13}E_{13} + x_{21}E_{21} + x_{22}(E_{22} + E_{33}) + x_{23}E_{23})P^{-1}$ . (3) 若 $\deg m(\lambda) = 3$ , 则 A 的极小多项式等于其特征多项式, 由例 7.26 可知 $C(A) = \mathbb{R}[A] = \mathbb{R}I_{3} + \mathbb{R}A + \mathbb{R}A^{2}$ .

5. 容易验证 A 也适合多项式 $(\lambda - \lambda_{1})^{m_{1}}(\lambda - \lambda_{1}^{-1}) \cdots (\lambda - \lambda_{k})^{m_{k}}(\lambda - \lambda_{k}^{-1})$ ，于是 A 的极小

多项式 $m(\lambda)$ 整除上述两个多项式的最大公因式, 从而 $m(\lambda)$ 无重根, 故 $\pmb{A}$ 可对角化.

6. 与例 6.57 及其延拓的证明完全类似.

7. 与例 6.58 及其延拓的证明完全类似.

8. 任取 $\varphi|_{U}$ 上的特征值 $\lambda_0$ , 则它也是 $\varphi$ 的特征值. 由于 $\varphi$ 的极小多项式等于其特征多项式, 故 $\varphi$ 的属于特征值 $\lambda_0$ 的 Jordan 块只有一个. 由例 7.45 可知, $\varphi|_{U}$ 的属于特征值 $\lambda_0$ 的 Jordan 块也只有一个, 于是 $\varphi|_{U}$ 的极小多项式也等于其特征多项式.

9. 与例 7.46 的解法类似, 可以分别通过计算行列式因子、极小多项式和几何重数这三种方法来做. 比如以极小多项式为例, 容易计算出 A 的特征多项式和极小多项式均为 $(\lambda - n)^{n}$ , 因此它的 Jordan 标准型就是特征值为 n 的 Jordan 块 $J_{n}(n)$ .

10. 与例 7.49 的解法类似. 经计算可得 $|\lambda I_4 - A| = (\lambda - 1)^4$ , 即 $\pmb{A}$ 的特征值为 1 (4 重). 对特征值 1 的几何重数进行分类讨论. (1) 若 $a \neq 0$ , 则经计算可得特征值 1 的几何重数等于 1, 于是 $\pmb{A}$ 的 Jordan 标准型为 $J_4(1)$ . (2) 若 $a = 0$ , 则经计算可得特征值 1 的几何重数等于 2, 再经计算可得 $(A - I_4)^2 \neq O$ , 因此 $\pmb{A}$ 的极小多项式为 $(\lambda - 1)^3$ , 于是 $\pmb{A}$ 的 Jordan 标准型为 $\operatorname{diag}\{1, J_3(1)\}$ .

11. 对多项式 $f(x)$ 进行 Taylor 展开 (参考例 3.45):

$$
f (x) = f (a) + \frac {f ^ {\prime} (a)}{1 !} (x - a) + \frac {f ^ {(2)} (a)}{2 !} (x - a) ^ {2} + \dots + \frac {f ^ {(m)} (a)}{m !} (x - a) ^ {m},
$$

其中 $m = \deg f(x)$ . 将 $x = A$ 代入上式, 注意到当 $m < n$ 时, $\frac{f^{(i)}(a)}{i!} (A - aI_n)^i = O (i > m)$ ; 当 $m \geq n$ 时, $\frac{f^{(i)}(a)}{i!} (A - aI_n)^i = O (i \geq n)$ , 因此我们总有

$$
f (\boldsymbol {A}) = f (a) \boldsymbol {I} _ {n} + \frac {f ^ {\prime} (a)}{1 !} (\boldsymbol {A} - a \boldsymbol {I} _ {n}) + \frac {f ^ {(2)} (a)}{2 !} (\boldsymbol {A} - a \boldsymbol {I} _ {n}) ^ {2} + \dots + \frac {f ^ {(n - 1)} (a)}{(n - 1) !} (\boldsymbol {A} - a \boldsymbol {I} _ {n}) ^ {n - 1}.
$$

12. 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\lambda_1), \cdots, J_{r_k}(\lambda_k)\}$ 为 Jordan 标准型, 我们先对 Jordan 块来证明结论. 任取多项式方程 $g(\lambda) - \lambda_i = 0$ 的根 $\mu_i$ , 即 $g(\mu_i) = \lambda_i$ , 从而 $f(g(\mu_i)) = f(\lambda_i) = 0$ . 由 $f(g(\lambda))$ 与 $g'(\lambda)$ 互素可知它们无公共根, 从而 $g'(\mu_i) \neq 0$ . 经计算可得

$$
g (\boldsymbol {J} _ {r _ {i}} (\mu_ {i})) = \left( \begin{array}{c c c c} g (\mu_ {i}) & g ^ {\prime} (\mu_ {i}) & \dots & * \\ & g (\mu_ {i}) & \ddots & \vdots \\ & & \ddots & g ^ {\prime} (\mu_ {i}) \\ & & & g (\mu_ {i}) \end{array} \right),
$$

于是 $g(J_{r_{i}}(\mu_{i}))$ 的特征值全为 $\lambda_{i}$ ，其几何重数等于 $r_{i}-\mathrm{r}(g(J_{r_{i}}(\mu_{i}))-\lambda_{i}\boldsymbol{I})=r_{i}-(r_{i}-1)=1$ 。因此 $g(J_{r_{i}}(\mu_{i}))$ 的 Jordan 标准型中只有一个 Jordan 块，即 $g(J_{r_{i}}(\mu_{i}))$ 相似于 $J_{r_{i}}(\lambda_{i})$ 。设 $Q_{i}$ 为非异阵，使得 $J_{r_{i}}(\lambda_{i})=Q_{i}g(J_{r_{i}}(\mu_{i}))Q_{i}^{-1}=g(Q_{i}J_{r_{i}}(\mu_{i})Q_{i}^{-1})$ ，故结论对 Jordan 块成立。令 $Q=\operatorname{diag}\{Q_{1},\cdots,Q_{k}\}, C=\operatorname{diag}\{J_{r_{1}}(\mu_{1}),\cdots,J_{r_{k}}(\mu_{k})\}$ ，则 $J=\operatorname{diag}\{J_{r_{1}}(\lambda_{1}),\cdots,J_{r_{k}}(\lambda_{k})\}=Qg(C)Q^{-1}=g(QCQ^{-1})$ ，故结论对 Jordan 标准型也成立。最后我们有 $A=PJP^{-1}=Pg(QCQ^{-1})P^{-1}=g(PQCQ^{-1}P^{-1})$ ，令 $B=PQCQ^{-1}P^{-1}$ ，则 $A=g(B)$ ，故结论对一般矩阵也成立。本题是例 7.72 的推广。

13. 令 $g(\lambda) = \mathrm{e}^{\lambda}$ , 则对 $\mathbf{A}$ 的任一特征值 $\lambda_0 \neq 0$ , 均存在复数 $\mu_0$ , 使得 $g(\mu_0) = g'(\mu_0) = \mathrm{e}^{\mu_0} = \lambda_0$ , 从而仿照解答题 12 的证明过程即得结论.

14. 设 P 为非异阵, 使得 $P^{-1}AP = J = \text{diag}\{J_{r_1}(\theta_0), \cdots, J_{r_k}(\theta_0)\}$ 为 Jordan 标准型, 我们先对 Jordan 块来证明结论. 经计算可得

$$
\cos \boldsymbol {J} _ {r _ {i}} (\theta_ {0}) = \left( \begin{array}{c c c c} \cos \theta_ {0} & - \sin \theta_ {0} & \dots & * \\ & \cos \theta_ {0} & \ddots & \vdots \\ & & \ddots & - \sin \theta_ {0} \\ & & & \cos \theta_ {0} \end{array} \right),
$$

于是 $\cos J_{r_{i}}(\theta_{0})$ 的特征值全为 $\cos\theta_{0}=\theta_{0}$ ，上次对角元全为 $-\sin\theta_{0}<0$ ，从而其几何重数等于 $r_{i}-\mathrm{r}(\cos J_{r_{i}}(\theta_{0})-\theta_{0}\boldsymbol{I})=r_{i}-(r_{i}-1)=1$ 。因此 $\cos J_{r_{i}}(\theta_{0})$ 的 Jordan 标准型中只有一个 Jordan 块，即 $\cos J_{r_{i}}(\theta_{0})$ 相似于 $J_{r_{i}}(\theta_{0})$ 。设 $Q_{i}$ 为非异阵，使得 $J_{r_{i}}(\theta_{0})=Q_{i}\cos J_{r_{i}}(\theta_{0})Q_{i}^{-1}$ ，于是结论对 Jordan 块成立。令 $Q=\operatorname{diag}\{Q_{1},\cdots,Q_{k}\}$ ，则

$$
J = \operatorname{diag} \left\{J _ {r _ {1}} \left(\theta_ {0}\right), \dots , J _ {r _ {k}} \left(\theta_ {0}\right) \right\} = \operatorname{diag} \left\{Q _ {1} \cos J _ {r _ {1}} \left(\theta_ {0}\right) Q _ {1} ^ {- 1}, \dots , Q _ {k} \cos J _ {r _ {k}} \left(\theta_ {0}\right) Q _ {k} ^ {- 1} \right\}
$$

$$
= Q \operatorname{diag} \left\{\cos J _ {r _ {1}} \left(\theta_ {0}\right), \dots , \cos J _ {r _ {k}} \left(\theta_ {0}\right) \right\} Q ^ {- 1} = Q \cos (J) Q ^ {- 1},
$$

于是结论对 Jordan 标准型也成立. 最后我们有

$$
A = P J P ^ {- 1} = P Q \cos (J) Q ^ {- 1} P ^ {- 1} = P Q \cos (P ^ {- 1} A P) Q ^ {- 1} P ^ {- 1}
$$

$$
= P Q P ^ {- 1} \cos (A) P Q ^ {- 1} P ^ {- 1} = P Q P ^ {- 1} \cos (A) \left(P Q P ^ {- 1}\right) ^ {- 1},
$$

于是结论对一般矩阵也成立.

15. 设 $f(x) = x^n + x^l$ ，等式右边的矩阵记为 $B$ . 将 Jordan 块 $J_m(1)$ 代入 $f(x)$ 中，经计算可得

$$
f (\boldsymbol {J} _ {m} (1)) = \left( \begin{array}{c c c c} 2 & n + l & \dots & * \\ & 2 & \ddots & \vdots \\ & & \ddots & n + l \\ & & & 2 \end{array} \right),
$$

这是一个上三角矩阵, 主对角元全为 2, 上次对角元全为 $n + l$ , 从而 $f(J_{m}(1))$ 的特征值全为 2, 其几何重数为 $m - \mathrm{r}(f(J_{m}(1)) - 2I_{m}) = 1$ . 因此, $f(J_{m}(1))$ 的 Jordan 标准型中只有一个 Jordan 块 $J_{m}(2)$ , 即 $f(J_{m}(1))$ 相似于 $J_{m}(2)$ . 另一方面, 矩阵 $\pmb{B}$ 也是一个上三角矩阵, 主对角元全为 2, 上次对角元全为 2, 从而 $\pmb{B}$ 的特征值全为 2, 其几何重数为 $m - \mathrm{r}(B - 2I_{m}) = 1$ . 因此, $\pmb{B}$ 的 Jordan 标准型中只有一个 Jordan 块 $J_{m}(2)$ , 即 $\pmb{B}$ 也相似于 $J_{m}(2)$ . 由于矩阵的相似在基域扩张下不改变 (参考 [1] 的推论 7.3.4), 故 $f(J_{m}(1))$ 和 $\pmb{B}$ 在实数域上相似, 即存在非异实矩阵 $\pmb{P}$ , 使得 $B = P^{-1}f(J_{m}(1))P = f(P^{-1}J_{m}(1)P)$ . 令 $X = P^{-1}J_{m}(1)P$ , 则 $\pmb{X}$ 是实矩阵, 且满足 $f(X) = B$ . 本题也可以直接利用 Jordan 块的运算性质来证明, 其细节留给读者自行完成.
