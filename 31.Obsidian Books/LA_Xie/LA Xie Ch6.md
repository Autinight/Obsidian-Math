# 第6章 特征值

## § 6.1 基本概念

### 6.1.1 特证值、特征向量及相关概念

#### 1. 定义

设 $\varphi$ 是数域 F 上的线性空间 V 上的线性变换, 若 $\lambda_{0} \in F, 0 \neq \alpha \in V$ , 使得

$$
\varphi (\alpha) = \lambda_ {0} \alpha ,
$$

则称 $\lambda_{0}$ 是线性变换 $\varphi$ 的一个特征值, 向量 $\alpha$ 称为 $\varphi$ 的属于特征值 $\lambda_{0}$ 的特征向量.

#### 2. 定义

设 A 是数域 F 上的 n 阶矩阵, 若 $\lambda_{0} \in F, 0 \neq x \in F^{n}$ , 使得

$$
\boldsymbol {A} \boldsymbol {x} = \lambda_ {0} \boldsymbol {x},
$$

则称 $\lambda_{0}$ 是矩阵 A 的一个特征值, 列向量 x 称为 A 的属于特征值 $\lambda_{0}$ 的特征向量.

#### 3. 定义

设 A 是数域 F 上的 n 阶矩阵, 多项式 $f(\lambda) = |\lambda I_{n} - A|$ 称为 A 的特征多项式.

一个线性变换的特征多项式定义为它在线性空间任意一组基下的表示矩阵的特征多项式.

#### 4. 定义

设 $\lambda_{0}$ 是线性空间 V 上的线性变换 $\varphi$ 的特征值, 令

$V_{\lambda_0} = \{\pmb {\alpha}\in V|\varphi (\pmb {\alpha}) = \lambda_0\pmb {\alpha}\} = \{\pmb {\alpha}\in V|\pmb {\alpha}$ 是 $\varphi$ 的属于 $\lambda_0$ 的特征向量} $\cup \{\mathbf{0}\}$ 

则 $V_{\lambda_0}$ 是 $V$ 的子空间, 称为 $\varphi$ 的属于特征值 $\lambda_0$ 的特征子空间. $\dim V_{\lambda_0}$ 称为 $\lambda_0$ 的几何重数或度数.

设 $\lambda_0$ 是 $\mathbb{F}$ 上的 $n$ 阶矩阵 $\pmb{A}$ 的特征值，令

$V_{\lambda_0} = \{\pmb {x}\in \mathbb{F}^n\mid \pmb {A}\pmb {x} = \lambda_0\pmb {x}\} = \{\pmb {x}\in \mathbb{F}^n\mid \pmb {x}$ 是 $\pmb{A}$ 的属于 $\lambda_0$ 的特征向量} $\cup \{\mathbf{0}\}$ 

则 $V_{\lambda_0}$ 是线性方程组 $(\lambda_0 I_n - A)x = 0$ 的解空间, 从而是 $\mathbb{F}^n$ 的子空间, 称为 $A$ 的属于特征值 $\lambda_0$ 的特征子空间. $\dim V_{\lambda_0} = n - \mathrm{r}(\lambda_0 I_n - A)$ 称为 $\lambda_0$ 的几何重数或度数.

#### 5. 定义

设 $\lambda_0$ 是 $\varphi$ (或 $A$ ) 的 $m$ 重特征值, 即它是 $\varphi$ (或 $A$ ) 的特征多项式的 $m$ 重根, 则称 $m$ 为 $\lambda_0$ 的代数重数或重数. 此时若有 $m = \dim V_{\lambda_0}$ , 即 $\lambda_0$ 的代数重数和几何重数相等, 则称 $\lambda_0$ 有完全的特征向量系. 若对 $\varphi$ (或 $A$ ) 的任一特征值, 其代数重数和几何重数都相等, 则称 $\varphi$ (或 $A$ ) 有完全的特征向量系.

### 6.1.2 相似矩阵

#### 1. 定理

相似的矩阵具有相同的特征多项式, 从而具有相同的特征值 (计重数).

#### 2. 定理

n 阶矩阵 A 的 n 个特征值之和等于矩阵 A 的迹, 即 A 的主对角线上元素之和; n 阶矩阵 A 的 n 个特征值之积等于矩阵 A 的行列式值.

#### 3. 定理

设 A 是数域 F 上的 n 阶矩阵且其特征值全在 F 中, 则存在 F 上的可逆矩阵 P, 使得 $P^{-1}AP$ 是上三角矩阵. 特别地, 任一复矩阵均复相似于一个上三角矩阵.

### 6.1.3 对角化

#### 1. 定义

设 $\varphi$ 是数域 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 若存在 $V$ 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵是对角矩阵, 则称 $\varphi$ 可对角化.

设 $\pmb{A}$ 是 $\mathbb{F}$ 上的 $n$ 阶矩阵, 若存在 $\mathbb{F}$ 上的可逆矩阵 $\pmb{P}$ , 使得 $P^{-1}AP$ 是对角矩阵, 则称 $\pmb{A}$ 在 $\mathbb{F}$ 上可对角化.

#### 2. 定理

设 $\lambda_{1},\lambda_{2},\cdots,\lambda_{k}$ 是线性空间 V 上的线性变换 $\varphi$ 的不同特征值, $V_{i}$ 是特征值 $\lambda_{i}$ 的特征子空间, 则

$$
V _ {1} + V _ {2} + \dots + V _ {k} = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {k}.
$$

#### 3. 推论

线性变换 $\varphi$ 的属于不同特征值的特征向量线性无关.

#### 4. 定理

设 $\varphi$ 是数域 F 上 n 维线性空间 V 上的线性变换 (或 A 是 F 上的 n 阶矩阵), $\varphi$ (或 A) 的特征值都在 F 中. 设 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ (或 A) 的全体不同特征值, $V_{i}$ 是特征值 $\lambda_{i}$ 的特征子空间, 则下列结论等价:

(1) $\varphi$ 可对角化 (或 A 在 F 上可对角化);

(2) $\varphi$ (或 A) 有 n 个线性无关的特征向量;

(3) $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{k}$ (或 $F^{n} = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{k}$ );

(4) $\varphi$ (或 A) 有完全的特征向量系.

#### 5. 推论

设 $\varphi$ 是数域 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 上的线性变换 (或 $\pmb{A}$ 是 $\mathbb{F}$ 上的 $n$ 阶矩阵), 若 $\varphi$ (或 $\pmb{A}$ ) 在 $\mathbb{F}$ 中有 $n$ 个不同的特征值, 则 $\varphi$ 可对角化 (或 $\pmb{A}$ 在 $\mathbb{F}$ 上可对角化).

### 6.1.4 极小多项式

#### 1. 定义

设 $\pmb{A}$ 是数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, 若 $\pmb{A}$ 适合 $\mathbb{F}$ 上的首一多项式 $m(x)$ , 且 $m(x)$ 是 $\pmb{A}$ 适合的 $\mathbb{F}$ 上的非零多项式中次数最小者, 则称 $m(x)$ 是 $\pmb{A}$ 的极小多项式或最小多项式. 同理可定义线性变换的极小多项式.

一个矩阵或线性变换的极小多项式存在并且唯一.

#### 2. Cayley-Hamilton 定理

设 $n$ 阶矩阵 $\mathbf{A}$ 的特征多项式为 $f(\lambda)$ , 则 $f(A) = O$ . 对线性变换也有类似结论.

### 6.1.5 特证值的估计

#### 1. 第一圆盘定理

设 $\boldsymbol{A}=(a_{ij})$ 是 n 阶矩阵, 则 A 的特征值在复平面的下列圆盘中:

$$
\left| z - a _ {i i} \right| \leq R _ {i}, \quad 1 \leq i \leq n,
$$

其中 $R_{i}=|a_{i1}|+\cdots+|a_{i,i-1}|+|a_{i,i+1}|+\cdots+|a_{in}|$ .

注 该定理又称为 Gerschgorin 圆盘第一定理, 即戈氏圆盘第一定理. 上述圆盘称为戈氏圆盘.

#### 2. 第二圆盘定理

若 $n$ 阶矩阵 $\mathbf{A}$ 的 $n$ 个戈氏圆盘分成若干个连通区域, 其中某个连通区域恰含 $k$ 个戈氏圆盘, 则有且仅有 $k$ 个特征值落在该连通区域内 (若两个圆盘重合应计算重数, 若特征值为重根也要计算重数).

## § 6.2 特征值和特征向量

特征值和特征向量是矩阵和线性变换蕴含的最本质的信息之一, 它们的计算及其性质的研究是相似标准型理论的起点. 本节我们将从 6 个方面来阐述相关的方法.

注 代数基本定理保证了任一 $n (n \geq 1)$ 阶复矩阵 $\mathbf{A}$ 或 $n$ 维复线性空间 $V$ 上的线性变换 $\varphi$ 至少有一个复特征值 $\lambda_0$ , 线性方程组的求解理论保证了 $\lambda_0$ 至少有一个复特征向量. 如果是在数域 $\mathbb{F}$ 上, 则需要 $\mathbf{A}$ 或 $\varphi$ 的特征值 $\lambda_0$ 属于 $\mathbb{F}$ , 然后线性方程组的求解理论才能保证 $\lambda_0$ 在 $\mathbb{F}^n$ 或 $V$ 中有对应的特征向量. 因此, 后面如无特殊说明, 总是假设在复数域 $\mathbb{C}$ 上考虑问题.

#### 1. 直接利用定义计算和证明

例 6.1 设 V 是 n 阶矩阵全体组成的线性空间, $\varphi$ 是 V 上的线性变换: $\varphi(X)=AX$ , 其中 A 是一个 n 阶矩阵. 求证: $\varphi$ 和 A 具有相同的特征值 (重数可能不同).

证明 设 $\lambda_{0}$ 是 A 的特征值, $x_{0}$ 是对应的特征向量, 即 $Ax_{0} = \lambda_{0}x_{0}$ . 令 $X = (x_{0}, 0, \cdots, 0)$ , 则 $\varphi(X) = AX = \lambda_{0}X$ 且 $X \neq O$ , 因此 $\lambda_{0}$ 也是 $\varphi$ 的特征值.

反之, 设 $\lambda_0$ 是 $\varphi$ 的特征值, $X$ 是对应的特征向量, 即 $\varphi(X) = AX = \lambda_0X$ . 令 $X = (x_1, x_2, \cdots, x_n)$ 为列分块, 设第 $i$ 个列向量 $x_i \neq 0$ , 则 $Ax_i = \lambda_0x_i$ , 因此 $\lambda_0$ 也是 $A$ 的特征值. $\square$ 
例 6.2 设 $\lambda_{1}, \lambda_{2}$ 是矩阵 A 的两个不同的特征值, $\alpha_{1}, \alpha_{2}$ 分别是 $\lambda_{1}, \lambda_{2}$ 的特征向量, 求证: $\alpha_{1} + \alpha_{2}$ 必不是 A 的特征向量.

证明 用反证法, 设 $A(\alpha_{1} + \alpha_{2}) = \mu (\alpha_{1} + \alpha_{2})$ , 又

$$
\boldsymbol {A} \left(\alpha_ {1} + \alpha_ {2}\right) = \boldsymbol {A} \alpha_ {1} + \boldsymbol {A} \alpha_ {2} = \lambda_ {1} \alpha_ {1} + \lambda_ {2} \alpha_ {2},
$$

于是 $(\lambda_1 - \mu)\alpha_1 + (\lambda_2 - \mu)\alpha_2 = 0$ 。由于属于不同特征值的特征向量线性无关，故有 $\lambda_1 = \mu, \lambda_2 = \mu$ ，从而 $\lambda_1 = \lambda_2$ ，引出矛盾。 $\square$ 

例 6.3 设 $\varphi$ 是线性空间 V 上的线性变换, V 有一个直和分解:

$$
V = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {m},
$$

其中 $V_{i}$ 都是 $\varphi-$ 不变子空间.

(1) 设 $\varphi$ 限制在 $V_{i}$ 上的特征多项式为 $f_{i}(\lambda)$ , 求证: $\varphi$ 的特征多项式

$$
f (\lambda) = f _ {1} (\lambda) f _ {2} (\lambda) \dots f _ {m} (\lambda).
$$

(2) 设 $\lambda_0$ 是 $\varphi$ 的特征值, $V_0 = \{\pmb{v} \in V \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ 为特征子空间, $V_{i,0} = V_i \cap V_0 = \{\pmb{v} \in V_i \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ , 求证:

$$
V _ {0} = V _ {1, 0} \oplus V _ {2, 0} \oplus \dots \oplus V _ {m, 0}.
$$

证明 (1) 取 $V_{i}$ 的一组基, 将它们拼成 $V$ 的一组基. 记 $\mathbf{A}_{i}$ 是 $\varphi$ 在 $V_{i}$ 上的限制在 $V_{i}$ 所取基下的表示矩阵, 则 $\varphi$ 在 $V$ 的这组基下的表示矩阵为分块对角矩阵 $\mathbf{A} = \mathrm{diag}\{\mathbf{A}_{1}, \mathbf{A}_{2}, \cdots, \mathbf{A}_{m}\}$ , 于是

$$
f (\lambda) = | \lambda I _ {n} - A | = | \lambda I - A _ {1} | | \lambda I - A _ {2} | \dots | \lambda I - A _ {m} |,
$$

即 $f(\lambda)=f_{1}(\lambda)f_{2}(\lambda)\cdots f_{m}(\lambda).$ 

(2) 任取 $\alpha \in V_0$ , 设 $\alpha = \alpha_1 + \alpha_2 + \cdots + \alpha_m$ , 其中 $\alpha_i \in V_i$ , 则

$$
\varphi (\alpha_ {1}) + \varphi (\alpha_ {2}) + \dots + \varphi (\alpha_ {m}) = \varphi (\alpha) = \lambda_ {0} \alpha = \lambda_ {0} \alpha_ {1} + \lambda_ {0} \alpha_ {2} + \dots + \lambda_ {0} \alpha_ {m}.
$$

注意到 $\varphi(\alpha_{i})\in V_{i}$ ，故由直和的充要条件可得 $\varphi(\alpha_{i})=\lambda_{0}\alpha_{i}$ ，即 $\alpha_{i}\in V_{i,0}$ ，从而 $V_{0}=V_{1,0}+V_{2,0}+\cdots+V_{m,0}$ 。注意到 $V_{i,0}\subseteq V_{i}$ ，故

$$
V _ {i, 0} \cap (V _ {1, 0} + \dots + V _ {i - 1, 0}) \subseteq V _ {i} \cap (V _ {1} + \dots + V _ {i - 1}) = 0, 2 \leq i \leq m,
$$

于是上述和为直和. □

注 将例 6.3 的条件和结论代数化之后, 可知: 对分块对角矩阵 $A = \operatorname{diag}\{A_1, A_2, \cdots, A_m\}$ 的任一特征值 $\lambda_0$ , 其代数重数等于每个分块的代数重数之和, 其几何重数等于每个分块的几何重数之和. 进一步, 还可以得到如下构造极大线性无关特征向量组 (即特征子空间的一组基) 的结论.

例 6.4 设 n 阶分块对角阵 $A = \text{diag}\{A_{1}, A_{2}, \cdots, A_{m}\}$ ，其中 $A_{i}$ 是 $n_{i}$ 阶矩阵.

(1) 任取 $A_{i}$ 的特征值 $\lambda_{i}$ 及其特征向量 $\pmb{x}_{i} \in \mathbb{C}^{n_{i}}$ , 求证: 可在 $\pmb{x}_{i}$ 的上下添加适当多的零, 得到非零向量 $\widetilde{\pmb{x}}_{i} \in \mathbb{C}^{n}$ , 使得 $A\widetilde{\pmb{x}}_{i} = \lambda_{i}\widetilde{\pmb{x}}_{i}$ , 即 $\widetilde{\pmb{x}}_{i}$ 是 $\pmb{A}$ 关于特征值 $\lambda_{i}$ 的特征向量, 称为 $\pmb{x}_{i}$ 的延拓.

(2) 任取 A 的特征值 $\lambda_{0}$ ，并设 $\lambda_{0}$ 是 $A_{i_{1}}, \cdots, A_{i_{r}}$ 的特征值，但不是其他 $A_{j} (1 \leq j \leq m, j \neq i_{1}, \cdots, i_{r})$ 的特征值，求证：A 关于特征值 $\lambda_{0}$ 的特征子空间的一组基可取为 $A_{i_{k}} (1 \leq k \leq r)$ 关于特征值 $\lambda_{0}$ 的特征子空间的一组基的延拓的并集.

证明 (1) 令 $\widetilde{\pmb{x}}_i = (\mathbf{0},\dots ,\pmb{x}_i',\dots ,\mathbf{0})'$ , 即 $\widetilde{\pmb{x}}_i$ 的第 $i$ 块为 $\pmb{x}_i$ , 其余块均为 $\mathbf{0}$ , 显然 $\widetilde{\pmb{x}}_i \neq \mathbf{0}$ . 容易验证 $A\widetilde{\pmb{x}}_i = \lambda_i\widetilde{\pmb{x}}_i$ , 故结论成立.

(2) 由例 6.3 (2) 以及直和的充要条件即得. □

例 6.5 设 A 是 n 阶整数矩阵, p, q 为互素的整数且 q > 1. 求证: 矩阵方程 $Ax = \frac{p}{q}x$ 必无非零解.

证明 用反证法. 设上述矩阵方程有非零解, 则 $\frac{p}{q}$ 为 $\mathbf{A}$ 的特征值, 即为特征多项式 $f(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_n$ 的根. 由于 $\mathbf{A}$ 是整数矩阵, 故 $f(\lambda)$ 为整系数多项式. 由整系数多项式有有理根的必要条件可知 $q \mid 1$ , 从而 $q = \pm 1$ , 这与假设矛盾. □

例 6.6 求下列 n 阶矩阵的特征值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & a & \dots & a & a \\ b & 0 & \dots & a & a \\ \vdots & \vdots & & \vdots & \vdots \\ b & b & \dots & 0 & a \\ b & b & \dots & b & 0 \end{array} \right).
$$

解 若 $a = 0$ 或 $b = 0$ , 则 $\mathbf{A}$ 是主对角元全为零的下三角或上三角矩阵, 故 $\mathbf{A}$ 的特征值全为零. 下设 $a \neq 0$ 且 $b \neq 0$ , 则由例 1.23 可知:

若 $a \neq b$ , 则 $|\lambda I_n - A| = \frac{a(\lambda + b)^n - b(\lambda + a)^n}{a - b}$ . 设 $\frac{b}{a}$ 的 $n$ 次方根为 $\omega_i (1 \leq i \leq n)$ , 则 $A$ 的特征值为 $\frac{a\omega_i - b}{1 - \omega_i} (1 \leq i \leq n)$ .

若 $a = b$ ，则 $|\lambda I_n - A| = (\lambda - (n - 1)a)(\lambda + a)^{n-1}$ ，从而 $\mathbf{A}$ 的特征值为 $(n - 1)a$ (1重)， $-a$ $(n - 1$ 重). □

#### 2. 正向利用矩阵的多项式

设 A 是 n 阶矩阵, $f(x)=a_{m}x^{m}+a_{m-1}x^{m-1}+\cdots+a_{1}x+a_{0}$ 是多项式, 定义

$$
f (\boldsymbol {A}) = a _ {m} \boldsymbol {A} ^ {m} + a _ {m - 1} \boldsymbol {A} ^ {m - 1} + \dots + a _ {1} \boldsymbol {A} + a _ {0} \boldsymbol {I} _ {n}.
$$

矩阵 A 的特征值与矩阵 $f(A)$ 的特征值之间有着密切的关系, 这就是下面的例 6.7.

例 6.7 设 n 阶矩阵 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}, f(x)$ 是一个多项式，求证： $f(A)$ 的全体特征值为 $f(\lambda_{1}), f(\lambda_{2}), \cdots, f(\lambda_{n})$ .

证明 因为任一 $n$ 阶矩阵均复相似于上三角矩阵, 故可设

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & \dots & * \\ 0 & \lambda_ {2} & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} \end{array} \right).
$$

注意到上三角矩阵的和、数乘及乘方仍是上三角矩阵(参考例2.8)，经计算可得

$$
\boldsymbol {P} ^ {- 1} f (\boldsymbol {A}) \boldsymbol {P} = f (\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}) = \left( \begin{array}{c c c c} f (\lambda_ {1}) & * & \dots & * \\ 0 & f (\lambda_ {2}) & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & f (\lambda_ {n}) \end{array} \right),
$$

因此 $f(A)$ 的全体特征值为 $f(\lambda_{1}), f(\lambda_{2}), \cdots, f(\lambda_{n})$ . □

注 例 6.7 告诉我们: 如果能将一个复杂矩阵写成一个简单矩阵的多项式, 那么就可由简单矩阵的特征值得到复杂矩阵的特征值. 下面是应用这一技巧的几道典型例题.

例 6.8 设 n 阶矩阵 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，求 2n 阶矩阵 $\begin{pmatrix} A & A^{2} \\ A^{2} & A \end{pmatrix}$ 的全体特征值.

解 由例2.69可知

$$
\left| \begin{array}{c c} \lambda I _ {n} - A & - A ^ {2} \\ - A ^ {2} & \lambda I _ {n} - A \end{array} \right| = | \lambda I _ {n} - A - A ^ {2} | | \lambda I _ {n} - A + A ^ {2} |.
$$

注意到 $A + A^{2}$ 的全体特征值为 $\lambda_{i} + \lambda_{i}^{2} (1 \leq i \leq n)$ ， $A - A^{2}$ 的全体特征值为 $\lambda_{i} - \lambda_{i}^{2} (1 \leq i \leq n)$ ，因此所求矩阵的全体特征值为

$$
\lambda_ {1} + \lambda_ {1} ^ {2}, \lambda_ {1} - \lambda_ {1} ^ {2}, \lambda_ {2} + \lambda_ {2} ^ {2}, \lambda_ {2} - \lambda_ {2} ^ {2}, \dots , \lambda_ {n} + \lambda_ {n} ^ {2}, \lambda_ {n} - \lambda_ {n} ^ {2}. \square
$$

例 6.9 求下列循环矩阵的特征值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ a _ {n - 1} & a _ {n} & a _ {1} & \dots & a _ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {2} & a _ {3} & a _ {4} & \dots & a _ {1} \end{array} \right).
$$

解 设 $J = \begin{pmatrix} O & I_{n-1} \\ 1 & O \end{pmatrix}$ ， $f(x) = a_{1} + a_{2}x + a_{3}x^{2} + \cdots + a_{n}x^{n-1}$ ，则由例 2.14 可知 $A = f(J)$ 。经简单计算可得 $|\lambda I_{n} - J| = \lambda^{n} - 1$ ，于是 J 的特征值为

$$
\omega_ {k} = \cos \frac {2 k \pi}{n} + \mathrm{i} \sin \frac {2 k \pi}{n}, 0 \leq k \leq n - 1.
$$

因此 A 的特征值为 $f(1), f(\omega_{1}), \cdots, f(\omega_{n-1})$ . □

例 6.10 设矩阵 A 的特征多项式为 $f(\lambda)$ ，A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ， $g(\lambda)$ 为任一多项式。证明：矩阵 $g(A)$ 的行列式等于 $f(\lambda), g(\lambda)$ 的结式 $R(f, g)$ 。

证明 注意到 $f(\lambda)$ 是首一多项式, 故由结式的其他表达式可知

$$
R (f, g) = \prod_ {i = 1} ^ {n} g (\lambda_ {i}).
$$

由于矩阵 $g(A)$ 的全体特征值就是 $g(\lambda_{1}), g(\lambda_{2}), \cdots, g(\lambda_{n})$ ，故

$$
| g (\boldsymbol {A}) | = \prod_ {i = 1} ^ {n} g \left(\lambda_ {i}\right) = R (f, g). \square
$$

注 作为例 6.10 的推论可知, 若 $f(\lambda), g(\lambda)$ 互素, 则 $|g(A)| = R(f, g) \neq 0$ , 从而 $g(A)$ 是非异阵. 进一步的讨论可参考例 6.84.

例 6.11 设首一多项式 $f(x)=x^{n}+a_{n-1}x^{n-1}+\cdots+a_{1}x+a_{0}, f(x)$ 的友阵

$$
C = \left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & - a _ {0} \\ 1 & 0 & \dots & 0 & - a _ {1} \\ 0 & 1 & \dots & 0 & - a _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & - a _ {n - 1} \end{array} \right).
$$

(1) 求证: 矩阵 C 的特征多项式就是 $f(\lambda)$ .
(2) 设 $f(x)$ 的根为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}, g(x)$ 为任一多项式，求以 $g(\lambda_{1}), g(\lambda_{2}), \cdots, g(\lambda_{n})$ 为根的 n 次多项式.

证明 (1) 按行列式 $|\lambda I_n - C|$ 第一行展开并用递推法即得结论.

(2) 由假设 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $C$ 的全体特征值, 故 $g(\lambda_1), g(\lambda_2), \cdots, g(\lambda_n)$ 是 $g(C)$ 的全体特征值, 从而 $h(x) = |xI_n - g(C)|$ 即为所求的多项式. $\square$ 

#### 3. 反向利用矩阵的多项式

例 6.12 设 n 阶矩阵 A 适合一个多项式 $g(x)$ ，即 $g(A)=O$ 。求证：A 的特征值 $\lambda_{0}$ 也适合 $g(x)$ ，即 $g(\lambda_{0})=0$ 。

证明 由例6.7可知, $g(\lambda_0)$ 是 $g(A) = O$ 的特征值, 从而 $g(\lambda_0) = 0$ . $\square$ 

注 例 6.12 告诉我们: 可以由 A 适合的多项式得到 A 可能的特征值. 一般地, 还可以由 $g(A)$ 的特征值的约束条件得到 A 的特征值的约束条件. 下面是应用这一技巧的几道典型例题.

例 6.13 求证: n 阶矩阵 A 为幂零矩阵的充要条件是 A 的特征值全为零.

证明 若 A 为幂零矩阵, 即存在正整数 k, 使得 $A^{k} = O$ , 则 A 的任一特征值 $\lambda_{0}$ 也适合 $x^{k}$ , 于是 $\lambda_{0} = 0$ . 反之, 若 A 的特征值全为零, 则存在可逆矩阵 P, 使得 $P^{-1}AP = B$ 为上三角矩阵且主对角元素全为零. 由例 2.6 可知 $B^{n} = O$ , 于是 $A^{n} = (PBP^{-1})^{n} = PB^{n}P^{-1} = O$ , 即 A 为幂零矩阵. 也可以利用 Cayley-Hamilton 定理来证明, 由于 A 的特征值全为零, 故其特征多项式为 $\lambda^{n}$ , 从而 $A^{n} = O$ . □

例 6.14 设 V 是数域 F 上的 n 阶方阵全体构成的线性空间, n 阶方阵

$$
\boldsymbol {P} = \left( \begin{array}{c c c c} 0 & \dots & 0 & 1 \\ 0 & \dots & 1 & 0 \\ \vdots & & \vdots & \vdots \\ 1 & \dots & 0 & 0 \end{array} \right),
$$

$V$ 上的线性变换 $\eta$ 定义为 $\eta(X) = PX'P$ . 试求 $\eta$ 的全体特征值及其特征向量.

解 由 $P = P'$ , $P^2 = I_n$ 容易验证 $\eta^2(X) = P(PX'P)'P = X$ , 即 $\eta^2 = I_V$ , 于是 $\eta$ 的特征值也适合多项式 $x^2 - 1$ , 从而特征值只能是 $\pm 1$ .

设 $\eta (X_0) = PX_0'P = \pm X_0$ , 这等价于 $(PX_0)' = \pm PX_0$ , 即 $PX_0$ 为对称矩阵或反对称矩阵. 令 $PX_0 = E_{ii}, E_{ij} + E_{ji}$ (对称矩阵空间的基向量), 易证 $\eta$ 关于特征值1的线性无关的特征向量为 $X_0 = PE_{ii}(1 \leq i \leq n), P(E_{ij} + E_{ji})(1 \leq i < j \leq n)$ . 令 $PX_0 = E_{ij} - E_{ji}$ (反对称矩阵空间的基向量), 易证 $\eta$ 关于特征值-1的线性无关的特征向量为 $X_0 = P(E_{ij} - E_{ji})(1 \leq i < j \leq n)$ . 注意到这些特征向量恰好构成 $V$ 的一组基, 故 $\eta$ 的特征值为 $1(\frac{n(n+1)}{2}\text{重}), -1(\frac{n(n-1)}{2}\text{重})$ . □

例 6.15 设 n 阶方阵 A 的每行每列只有一个元素非零, 并且那些非零元素为 1 或 -1, 证明: A 的特征值都是单位根.

证明 设 S 为由每行每列只有一个元素非零, 并且那些非零元素为 1 或 -1 的所有 n 阶方阵构成的集合, 由排列组合可得 $\sharp S = 2^{n} n!$ , 即 S 是一个有限集合. 注意到矩阵 $M \in S$ 当且仅当 $M = P_{1} P_{2} \cdots P_{r}$ , 其中 $P_{k}$ 是初等矩阵 $P_{ij}$ 或 $P_{i}(-1)$ , 因此对任意的 $M, N \in S, MN \in S$ . 特别地, 由 $A \in S$ 可知 $A^{k} \in S (k \geq 1)$ , 即 $\{A, A^{2}, A^{3}, \cdots\} \subseteq S$ , 于是存在正整数 k > l, 使得 $A^{k} = A^{l}$ . 注意到 $|A| = \pm 1$ , 故 A 可逆, 于是 $A^{k-l} = I_{n}$ , 从而 A 的特征值都适合多项式 $x^{k-l} - 1$ , 即为单位根. □

例 6.16 设 A 是 n 阶实方阵, 又 $I_{n}-A$ 的特征值的模长都小于 1, 求证: $0<|A|<2^{n}$ .

证明 设 A 的特征值为 $\lambda_{1},\cdots,\lambda_{n}$ ，则 $I_{n}-A$ 的特征值为 $1-\lambda_{1},\cdots,1-\lambda_{n}$ 。由假设 $|1-\lambda_{i}|<1$ ，若 $\lambda_{i}$ 是实数，则 $0<\lambda_{i}<2$ ；若 $\lambda_{i}$ 是虚数，则 $\overline{\lambda_{i}}$ 也是 A 的特征值，此时有 $0<|\lambda_{i}|<2$ 。由于 $|A|$ 等于所有特征值之积，故 $0<|A|<2^{n}$ 。☐

对可逆矩阵 A, 其逆矩阵 $A^{-1}$ 的特征值和 A 的特征值有下列关系.

例 6.17 设 n 阶可逆矩阵 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，求证： $A^{-1}$ 的全体特征值为 $\lambda_{1}^{-1}, \lambda_{2}^{-1}, \cdots, \lambda_{n}^{-1}$ .

证明 首先注意到 A 是可逆矩阵, $\lambda_{1}\lambda_{2}\cdots\lambda_{n}=|A|\neq0$ , 因此每个 $\lambda_{i}\neq0$ (事实上, A 可逆的充要条件是它的特征值全不为零).

因为任一 $n$ 阶矩阵均复相似于上三角矩阵，故可设

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & \dots & * \\ 0 & \lambda_ {2} & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} \end{array} \right).
$$

注意到上三角矩阵的逆矩阵仍是上三角矩阵 (参考例 2.8), 经计算可得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} ^ {- 1} \boldsymbol {P} = (\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}) ^ {- 1} = \left( \begin{array}{c c c c} \lambda_ {1} ^ {- 1} & * & \dots & * \\ 0 & \lambda_ {2} ^ {- 1} & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} ^ {- 1} \end{array} \right),
$$

因此 $A^{-1}$ 的全体特征值为 $\lambda_{1}^{-1}, \lambda_{2}^{-1}, \cdots, \lambda_{n}^{-1}$ . □

伴随矩阵 $A^{*}$ 的特征值和 A 的特征值有下列关系.

例 6.18 设 n 阶矩阵 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，求证： $A^{*}$ 的全体特征值为 $\prod_{i \neq 1} \lambda_{i}, \prod_{i \neq 2} \lambda_{i}, \cdots, \prod_{i \neq n} \lambda_{i}$ .

证明 因为任一 $n$ 阶矩阵均复相似于上三角矩阵, 故可设

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & \dots & * \\ 0 & \lambda_ {2} & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} \end{array} \right).
$$

注意到上三角矩阵的伴随矩阵仍是上三角矩阵 (参考例 2.8), 经计算可得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} ^ {*} \boldsymbol {P} = \boldsymbol {P} ^ {*} \boldsymbol {A} ^ {*} (\boldsymbol {P} ^ {- 1}) ^ {*} = (\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}) ^ {*} = \left( \begin{array}{c c c c} \prod_ {i \neq 1} \lambda_ {i} & * & \dots & * \\ 0 & \prod_ {i \neq 2} \lambda_ {i} & \dots & * \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \prod_ {i \neq n} \lambda_ {i} \end{array} \right),
$$

因此 $A^{*}$ 的全部特征值为 $\prod_{i\neq1}\lambda_{i},\prod_{i\neq2}\lambda_{i},\cdots,\prod_{i\neq n}\lambda_{i}.$ □

#### 4. 特征值的降阶公式

求 $n$ 阶方阵 $\mathbf{A}$ 的特征值等价于计算特征多项式 $|\lambda I_n - A|$ , 这是一个 $n$ 阶文字行列式, 第1章阐述的十余种求行列式的方法都可以利用. 这里我们重点介绍用行列式的降阶公式来求某类矩阵的特征多项式, 下面的例题称为特征值的降阶公式.

例 6.19 (特征值的降阶公式) 设 A 是 $m \times n$ 矩阵, B 是 $n \times m$ 矩阵, 且 $m \geq n$ .
求证:

$$
\left| \lambda I _ {m} - A B \right| = \lambda^ {m - n} \left| \lambda I _ {n} - B A \right|.
$$

特别地, 若 $A, B$ 都是 $n$ 阶矩阵, 则 $AB$ 与 $BA$ 有相同的特征多项式.

证法 1 当 $\lambda \neq 0$ 时, 考虑下列分块矩阵:

$$
\left( \begin{array}{c c} \lambda I _ {m} & A \\ B & I _ {n} \end{array} \right),
$$

因为 $\lambda I_{m}, I_{n}$ 都是可逆矩阵, 故由行列式的降阶公式可得

$$
\left| \boldsymbol {I} _ {n} \right| \cdot \left| \lambda \boldsymbol {I} _ {m} - \boldsymbol {A} \left(\boldsymbol {I} _ {n}\right) ^ {- 1} \boldsymbol {B} \right| = \left| \lambda \boldsymbol {I} _ {m} \right| \cdot \left| \boldsymbol {I} _ {n} - \boldsymbol {B} \left(\lambda \boldsymbol {I} _ {m}\right) ^ {- 1} \boldsymbol {A} \right|,
$$

即有 $|\lambda I_m - AB| = \lambda^{m - n}|\lambda I_n - BA|$ 成立.

当 $\lambda = 0$ 时, 若 $m > n$ , 则 $\mathrm{r}(\mathbf{A}\mathbf{B}) \leq \min \{\mathrm{r}(\mathbf{A}), \mathrm{r}(\mathbf{B})\} \leq \min \{m, n\} = n < m$ , 故 $|-\mathbf{A}\mathbf{B}| = 0$ , 结论成立; 若 $m = n$ , 则 $|-\mathbf{A}\mathbf{B}| = (-1)^n |\mathbf{A}||\mathbf{B}| = |- \mathbf{B}\mathbf{A}|$ , 结论也成立. 事实上, $\lambda = 0$ 的情形也可以用 Cauchy-Binet 公式来处理, 还可以通过摄动法由 $\lambda \neq 0$ 的情形来得到.

证法2 设 $\pmb{A}$ 的秩等于 $r$ , 则存在 $m$ 阶可逆矩阵 $\pmb{P}$ 和 $n$ 阶可逆矩阵 $\pmb{Q}$ , 使得

$$
P A Q = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

令

$$
Q ^ {- 1} B P ^ {- 1} = \left( \begin{array}{c c} B _ {1 1} & B _ {1 2} \\ B _ {2 1} & B _ {2 2} \end{array} \right),
$$

其中 $B_{11}$ 是 $r \times r$ 矩阵, 则

$$
P A B P ^ {- 1} = \left( \begin{array}{c c} B _ {1 1} & B _ {1 2} \\ O & O \end{array} \right), Q ^ {- 1} B A Q = \left( \begin{array}{c c} B _ {1 1} & O \\ B _ {2 1} & O \end{array} \right).
$$

因此

$$
| \lambda I _ {m} - A B | = \left| \begin{array}{c c} \lambda I _ {r} - B _ {1 1} & - B _ {1 2} \\ O & \lambda I _ {m - r} \end{array} \right| = \lambda^ {m - r} | \lambda I _ {r} - B _ {1 1} |.
$$

同理

$$
| \lambda I _ {n} - B A | = \left| \begin{array}{c c} \lambda I _ {r} - B _ {1 1} & O \\ - B _ {2 1} & \lambda I _ {n - r} \end{array} \right| = \lambda^ {n - r} | \lambda I _ {r} - B _ {1 1} |.
$$

比较上面两个式子即可得到结论.

证法3 先证明 $m = n$ 的情形. 若 $\mathbf{A}$ 可逆, 则 $\mathbf{B}\mathbf{A} = \mathbf{A}^{-1}(\mathbf{A}\mathbf{B})\mathbf{A}$ , 即 $\mathbf{A}\mathbf{B}$ 和 $\mathbf{B}\mathbf{A}$ 相似, 因此它们的特征多项式相等. 对于一般的方阵 $\mathbf{A}$ , 可取到一列有理数 $t_k \to 0$ , 使得 $t_k I_n + A$ 是可逆矩阵. 由可逆情形的证明可得

$$
\left| \lambda I _ {n} - \left(t _ {k} I _ {n} + A\right) B \right| = \left| \lambda I _ {n} - B \left(t _ {k} I _ {n} + A\right) \right|.
$$

注意到上式两边的行列式都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即有 $|\lambda I_n - AB| = |\lambda I_n - BA|$ 成立.

再证明 m > n 的情形. 令

$$
\boldsymbol {C} = (\boldsymbol {A} \boldsymbol {O}), \boldsymbol {D} = \binom{\boldsymbol {B}}{\boldsymbol {O}},
$$

其中 C, D 均为 $m \times m$ 分块矩阵, 则

$$
C D = A B, \quad D C = \left( \begin{array}{c c} B A & O \\ O & O \end{array} \right).
$$

因此由方阵的情形可得

$$
\begin{array}{l} \left| \lambda I _ {m} - A B \right| = \left| \lambda I _ {m} - C D \right| = \left| \lambda I _ {m} - D C \right| \\ = \left| \begin{array}{c c} \lambda I _ {n} - B A & O \\ O & \lambda I _ {m - n} \end{array} \right| = \lambda^ {m - n} | \lambda I _ {n} - B A |. \square \\ \end{array}
$$

例 6.20 设 $\alpha$ 是 n 维实列向量且 $\alpha' \alpha = 1$ ，试求矩阵 $I_{n} - 2\alpha\alpha'$ 的特征值.

解 设 $A = I_{n} - 2\alpha\alpha'$ ，则由例 6.19 可得

$$
\left| \lambda I _ {n} - A \right| = \left| (\lambda - 1) I _ {n} + 2 \alpha \alpha^ {\prime} \right| = (\lambda - 1) ^ {n - 1} (\lambda - 1 + 2 \alpha^ {\prime} \alpha) = (\lambda - 1) ^ {n - 1} (\lambda + 1).
$$

因此, 矩阵 A 的特征值为 1 (n-1 重), -1 (1 重). □

例 6.21 设 A 为 n 阶方阵, $\alpha, \beta$ 为 n 维列向量, 试求矩阵 $A\alpha\beta'$ 的特征值.

解 设 $B = A\alpha\beta'$ ，则由例 6.19 可得

$$
\left| \lambda I _ {n} - B \right| = \left| \lambda I _ {n} - (A \alpha) \beta^ {\prime} \right| = \lambda^ {n - 1} (\lambda - \beta^ {\prime} A \alpha).
$$

若 $\beta^{\prime}A\alpha \neq 0$ ，则 $B$ 的特征值为 $0(n - 1$ 重), $\beta^{\prime}A\alpha$ (1重); 若 $\beta^{\prime}A\alpha = 0$ ，则 $B$ 的特征值为 $0(n$ 重). □

例 6.22 设 $a_{i}(1 \leq i \leq n)$ 都是实数, 且 $a_{1} + a_{2} + \cdots + a_{n} = 0$ , 试求下列矩阵的特征值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} ^ {2} & a _ {1} a _ {2} + 1 & \dots & a _ {1} a _ {n} + 1 \\ a _ {2} a _ {1} + 1 & a _ {2} ^ {2} & \dots & a _ {2} a _ {n} + 1 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} + 1 & a _ {n} a _ {2} + 1 & \dots & a _ {n} ^ {2} \end{array} \right).
$$

解 矩阵 A 可以分解为 $A = -I_{n} + BC$ ，其中

$$
\boldsymbol {B} = \left( \begin{array}{c c} a _ {1} & 1 \\ a _ {2} & 1 \\ \vdots & \vdots \\ a _ {n} & 1 \end{array} \right), \quad \boldsymbol {C} = \left( \begin{array}{c c c c} a _ {1} & a _ {2} & \dots & a _ {n} \\ 1 & 1 & \dots & 1 \end{array} \right).
$$

由例6.19可得

$$
\left| \lambda I _ {n} - A \right| = \left| (\lambda + 1) I _ {n} - B C \right| = (\lambda + 1) ^ {n - 2} \left| (\lambda + 1) I _ {2} - C B \right|.
$$

注意到 $a_{1} + a_{2} + \cdots + a_{n} = 0$ ，故有

$$
C B = \left( \begin{array}{c c} a _ {1} ^ {2} + a _ {2} ^ {2} + \dots + a _ {n} ^ {2} & 0 \\ 0 & n \end{array} \right),
$$

因此 A 的特征值为 -1 (n-2 重), n-1, $a_{1}^{2} + a_{2}^{2} + \cdots + a_{n}^{2} - 1$ . □

在例 6.19 的 3 种证法中, 我们都用了分块矩阵的方法, 这在矩阵特征值的理论分析中是一个常用的方法. 为了使读者有更深的印象, 我们再给出下面的例子.

例 6.23 设 A, B, C 分别是 $m \times m$ , $n \times n$ , $m \times n$ 矩阵, 满足: AC = CB, $r(C) = r$ . 求证: A 和 B 至少有 r 个相同的特征值.

证明 设 P 为 m 阶非异阵, Q 为 n 阶非异阵, 使得 $PCQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ . 注意到问题的条件和结论在相抵变换: $C \mapsto PCQ$ , $A \mapsto PAP^{-1}$ , $B \mapsto Q^{-1}BQ$ 下保持不变, 故不妨从一开始就假设 $C = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 是相抵标准型. 设 $A = \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}$ , $B = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ 为对应的分块, 则

$$
\boldsymbol {A} \boldsymbol {C} = \left( \begin{array}{c c} \boldsymbol {A} _ {1 1} & \boldsymbol {O} \\ \boldsymbol {A} _ {2 1} & \boldsymbol {O} \end{array} \right), \quad \boldsymbol {C B} = \left( \begin{array}{c c} \boldsymbol {B} _ {1 1} & \boldsymbol {B} _ {1 2} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right).
$$

由 $AC = CB$ 可得 $A_{11} = B_{11}, A_{21} = O, B_{12} = O$ . 于是

$$
\left| \lambda I _ {n} - A \right| = \left| \lambda I _ {r} - A _ {1 1} \right| \cdot \left| \lambda I _ {n - r} - A _ {2 2} \right|, \quad \left| \lambda I _ {n} - B \right| = \left| \lambda I _ {r} - B _ {1 1} \right| \cdot \left| \lambda I _ {n - r} - B _ {2 2} \right|,
$$

从而 A, B 至少有 r 个相同的特征值 (即 $A_{11} = B_{11}$ 的特征值). □

#### 5. 特征值与特征多项式系数的关系

下面的例题描述了特征值与特征多项式的系数之间的关系.

例6.24 设 $n$ 阶矩阵 $\mathbf{A}$ 的特征多项式为

$$
f (\lambda) = \lambda^ {n} + a _ {1} \lambda^ {n - 1} + \dots + a _ {n - 1} \lambda + a _ {n}.
$$

求证: $a_{r}$ 等于 $(-1)^{r}$ 乘以 $\pmb{A}$ 的所有 $r$ 阶主子式之和, 即

$$
a _ {r} = (- 1) ^ {r} \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq n} A \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right), 1 \leq r \leq n.
$$

进一步, 若设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ , 则

$$
\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq n} \lambda_ {i _ {1}} \lambda_ {i _ {2}} \dots \lambda_ {i _ {r}} = \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq n} A \binom {i _ {1} i _ {2} \dots i _ {r}} {i _ {1} i _ {2} \dots i _ {r}}, 1 \leq r \leq n.
$$

证明 第一个结论就是例 1.47. 第二个结论由 Vieta 定理即得. □

注 上述结论中最常用的是 $r = 1$ 和 $r = n$ 的情形:

$$
\lambda_ {1} + \lambda_ {2} + \dots + \lambda_ {n} = \operatorname{tr} (\boldsymbol {A}), \quad \lambda_ {1} \lambda_ {2} \dots \lambda_ {n} = | \boldsymbol {A} |.
$$

特别地, $A$ 是非异阵的充要条件是 $A$ 的特征值全不为零. 因此, 特征值的计算是判断矩阵非异性的第五种方法 (参考 §2.4 可逆矩阵), 下面给出两个例题进行说明.

例 6.25 设 n 阶方阵 A 满足 $A^{2}-A-3I_{n}=O$ ，求证： $A-2I_{n}$ 是非异阵.

证明 用反证法. 设 $A - 2I_{n}$ 为奇异阵, 则 2 是 $\mathbf{A}$ 的特征值. 注意到 $\mathbf{A}$ 适合 $f(x) = x^{2} - x - 3$ , 但特征值 2 却不适合 $f(x)$ , 矛盾. $\square$ 

例 3.82, 例 3.84 设 A 是 n 阶实对称阵, S 是 n 阶实反对称阵, 求证: $I_{n} \pm S$ 和 $I_{n} \pm iA$ 都是非异阵.

证法2 设 $\lambda_0 \in \mathbb{C}$ 是 $A$ 的任一特征值, $\alpha = (a_1, a_2, \cdots, a_n)' \in \mathbb{C}^n$ 是对应的特征向量, 即 $A\alpha = \lambda_0\alpha$ . 此式两边同时左乘 $\overline{\alpha}'$ , 则有 $\overline{\alpha}' A\alpha = \lambda_0 \overline{\alpha}'\alpha$ . 注意到 $\alpha$ 是非零向量, 故 $\overline{\alpha}'\alpha = \sum_{i=1}^{n} |a_i|^2 > 0$ . 注意到 $A$ 为实对称阵, 故 $(\overline{\alpha}' A\alpha)' = \overline{\alpha}' A\alpha$ , 即 $\overline{\alpha}' A\alpha$ 是一个实数, 从而 $\lambda_0 = \overline{\alpha}' A\alpha / \overline{\alpha}'\alpha$ 也是实数. 同理可证 $S$ 的任一特征值 $\mu_0 = c i$ 为零或纯虚数, 其中 $c \in \mathbb{R}$ . 于是 $I_n \pm S$ 的任一特征值为 $1 \pm \mu_0 = 1 \pm c i \neq 0$ , $I_n \pm i A$ 的任一特征值为 $1 \pm i \lambda_0 \neq 0$ , 结论得证. □

例 6.26 设 P 是可逆矩阵, $B = PAP^{-1} - P^{-1}AP$ , 求证: B 的特征值之和为零.

证明 只要证 $\operatorname{tr}(\pmb{B}) = 0$ 即可. 由迹的线性和交换性即得

$$
\operatorname{tr} (\boldsymbol {B}) = \operatorname{tr} (\boldsymbol {P A P} ^ {- 1}) - \operatorname{tr} (\boldsymbol {P} ^ {- 1} \boldsymbol {A P}) = \operatorname{tr} (\boldsymbol {A}) - \operatorname{tr} (\boldsymbol {A}) = 0.
$$

例 6.27 设 n 阶实方阵 A 的特征值全是实数, 且 A 的一阶主子式之和与二阶主子式之和都等于零. 求证: A 是幂零矩阵.

证明 设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，由条件和例 6.24 可知

$$
\begin{array}{l} \sum_ {i = 1} \lambda_ {i} = \lambda_ {1} + \lambda_ {2} + \dots + \lambda_ {n} = 0, \\ \sum_ {1 \leq i <   j \leq n} \lambda_ {i} \lambda_ {j} = \lambda_ {1} \lambda_ {2} + \lambda_ {1} \lambda_ {3} + \dots + \lambda_ {n - 1} \lambda_ {n} = 0, \\ \end{array}
$$

则

$$
\sum_ {i = 1} ^ {n} \lambda_ {i} ^ {2} = \left(\sum_ {i = 1} ^ {n} \lambda_ {i}\right) ^ {2} - 2 \sum_ {1 \leq i <   j \leq n} \lambda_ {i} \lambda_ {j} = 0.
$$

由于 $\lambda_{i}$ 都是实数, 故 $\lambda_{i} = 0 (1 \leq i \leq n)$ 成立, 再由例6.13可知 $A$ 为幂零矩阵. $\square$ 

例 6.28 设 $n(n \geq 3)$ 阶非异实方阵 A 的特征值都是实数, 且 A 的 n-1 阶主子式之和等于零. 证明: 存在 A 的一个 n-2 阶主子式, 其符号与 $|A|$ 的符号相反.

证明 设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，由 A 非异可知它们都是非零实数。再由条件和例 6.24 可知

$$
\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {n - 1} \leq n} \lambda_ {i _ {1}} \lambda_ {i _ {2}} \dots \lambda_ {i _ {n - 1}} = 0. \tag {6.1}
$$

将 (6.1) 式左边除以 $|\mathbf{A}| = \lambda_1\lambda_2\dots \lambda_n$ 可得

$$
\sum_ {i = 1} ^ {n} \frac {1}{\lambda_ {i}} = 0, \tag {6.2}
$$

将 (6.2) 式左边平方, 并将平方项移到等式的右边可得

$$
\sum_ {1 \leq i <   j \leq n} \frac {1}{\lambda_ {i} \lambda_ {j}} = - \frac {1}{2} \left(\sum_ {i = 1} ^ {n} \frac {1}{\lambda_ {i} ^ {2}}\right) <   0, \tag {6.3}
$$

将 (6.3) 式两边同时乘以 $\left|A\right|=\lambda_{1}\lambda_{2}\cdots\lambda_{n}$ 可得

$$
\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {n - 2} \leq n} \lambda_ {i _ {1}} \lambda_ {i _ {2}} \dots \lambda_ {i _ {n - 2}} = - \frac {1}{2} \left(\sum_ {i = 1} ^ {n} \frac {1}{\lambda_ {i} ^ {2}}\right) | \boldsymbol {A} |. \tag {6.4}
$$

由 (6.4) 式和例 6.24 可得

$$
\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {n - 2} \leq n} A \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {n - 2} \\ i _ {1} & i _ {2} & \dots & i _ {n - 2} \end{array} \right) = - \frac {1}{2} \Big (\sum_ {i = 1} ^ {n} \frac {1}{\lambda_ {i} ^ {2}} \Big) | A |,
$$

于是 $\mathbf{A}$ 的 $n - 2$ 阶主子式之和与 $|\mathbf{A}|$ 的符号相反, 从而至少存在 $\mathbf{A}$ 的一个 $n - 2$ 阶主子式, 其符号与 $|\mathbf{A}|$ 的符号相反. $\square$ 

设 n 阶方阵 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则对任意的正整数 k， $A^{k}$ 的特征值为 $\lambda_{1}^{k}, \lambda_{2}^{k}, \cdots, \lambda_{n}^{k}$ ，于是特征值的 k 次幂和

$$
s _ {k} = \lambda_ {1} ^ {k} + \lambda_ {2} ^ {k} + \dots + \lambda_ {n} ^ {k} = \operatorname{tr} (\boldsymbol {A} ^ {k}), k \geq 1.
$$

由 Newton 公式可以计算出特征值的初等对称多项式

$$
\sigma_ {r} = \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq n} \lambda_ {i _ {1}} \lambda_ {i _ {2}} \dots \lambda_ {i _ {r}}, 1 \leq r \leq n,
$$

从而可以确定特征多项式的系数, 最后便可计算出 $\mathbf{A}$ 的所有特征值. 下面我们来看由 $\operatorname{tr}(\mathbf{A}^k)$ 确定 $\mathbf{A}$ 的特征值的几道典型例题.

例 6.29 设 A 是 n 阶对合矩阵, 即 $A^{2} = I_{n}$ , 证明: $n - \operatorname{tr}(A)$ 为偶数, 并且 $\operatorname{tr}(A) = n$ 的充要条件是 $A = I_{n}$ .

证明 由 $A^2 = I_n$ 可知 $\pmb{A}$ 的特征值也适合 $x^2 - 1$ , 从而只能是 $\pm 1$ . 设 $\pmb{A}$ 的特征值为 $1(p$ 重), $-1(q$ 重), 则 $p + q = n$ 且 $\operatorname{tr}(\pmb{A}) = p - q$ , 于是 $n - \operatorname{tr}(\pmb{A}) = 2q$ 为偶数. 若 $\pmb{A} = I_n$ , 则 $\operatorname{tr}(\pmb{A}) = n$ . 反之, 若 $\operatorname{tr}(\pmb{A}) = n$ , 则由上述讨论可知 $p = n, q = 0$ , 从而 $-1$ 不是 $\pmb{A}$ 的特征值, 即 $\pmb{A} + I_n$ 是非异阵. 最后由 $(\pmb{A} - I_n)(\pmb{A} + I_n) = \pmb{O}$ 可得 $\pmb{A} = I_n$ . $\square$ 

例 6.30 设 4 阶方阵 A 满足: $\mathrm{tr}(A^{k}) = k (1 \leq k \leq 4)$ , 试求 A 的行列式.

证明 题目条件即为 $s_{k}=k(1\leq k\leq4)$ ，要求 $|A|=\sigma_{4}$ 。根据 Newton 公式 $s_{k}-s_{k-1}\sigma_{1}+\cdots+(-1)^{k}k\sigma_{k}=0(1\leq k\leq4)$ 可依次算出 $\sigma_{1}=1,\sigma_{2}=-\frac{1}{2},\sigma_{3}=\frac{1}{6},$ $\sigma_{4}=\frac{1}{24}$ ，故 $|A|=\frac{1}{24}$ . 也可以直接利用例 5.64 来计算 $\sigma_{4}$ . □

例 6.31 求证: n 阶矩阵 A 是幂零矩阵的充要条件是 $\mathrm{tr}(A^{k}) = 0 (1 \leq k \leq n)$ .

证明 设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ . 若 A 是幂零矩阵, 则 A 的特征值全为零, 从而 $\mathrm{tr}(A^{k}) = s_{k} = 0 (k \geq 1)$ . 若 $s_{k} = \mathrm{tr}(A^{k}) = 0 (1 \leq k \leq n)$ , 则由 Newton 公式或直接利用例 5.64 可计算出 $\sigma_{r} = 0 (1 \leq r \leq n)$ , 于是 A 的特征多项式为 $\lambda^{n}$ , 从而 A 的特征值全为零, 再由例 6.13 可知 A 为幂零矩阵. □

例 6.32 设 A, B, C 是 n 阶矩阵, 其中 C = AB - BA. 若它们满足条件 AC = CA, BC = CB, 求证: C 的特征值全为零. 又若将条件减弱为 ABC = CAB, BAC = CBA, 则上述结论不再成立.

证明 由 AC = CA 可知, 对任意的正整数 k,

$$
\boldsymbol {C} ^ {k} = \boldsymbol {C} ^ {k - 1} \boldsymbol {A} \boldsymbol {B} - \boldsymbol {C} ^ {k - 1} \boldsymbol {B} \boldsymbol {A} = \boldsymbol {A} (\boldsymbol {C} ^ {k - 1} \boldsymbol {B}) - (\boldsymbol {C} ^ {k - 1} \boldsymbol {B}) \boldsymbol {A}.
$$

由迹的线性和交换性可得 $\operatorname{tr}(C^k) = 0 (k \geq 1)$ , 再由例6.31可知 $C$ 为幂零矩阵, 从而 $C$ 的特征值全为零.

如将条件减弱为如题所述, 则结论不再成立, 可参考下面的反例:

$$
\boldsymbol {A} = \left( \begin{array}{c c} 1 & 0 \\ 0 & - 1 \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c} 0 & \frac {1}{2} \\ - \frac {1}{2} & 0 \end{array} \right), \quad \boldsymbol {C} = \left( \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right).
$$

由计算可得 $C = AB - BA, ABC = CAB, CBA = BAC$ , 但 $C$ 的特征值为 1 和 -1. $\square$ 

注 从上述证明不难看出: 只需要 $AC = CA$ 和 $BC = CB$ 这两个条件中的一个就能证明本题的结论. 如果这两个条件都有, 我们将在后面给出另外两个证明:一个是利用矩阵乘法交换性诱导的同时性质, 另一个是 Jordan 标准型理论的应用. 另外, 我们还将证明 $A, B, C$ 可同时上三角化.

#### 6. 特征值的估计

例 3.83 如果 n 阶实方阵 $\boldsymbol{A} = (a_{ij})$ 适合条件:

$$
\left| a _ {i i} \right| > \sum_ {j = 1, j \neq i} ^ {n} \left| a _ {i j} \right|, \quad 1 \leq i \leq n,
$$

则称 A 是严格对角占优阵. 求证: 严格对角占优阵必是非异阵. 若上述条件改为

$$
a _ {i i} > \sum_ {j = 1, j \neq i} ^ {n} | a _ {i j} |, \quad 1 \leq i \leq n,
$$

求证: $|\mathbf{A}| > 0$ .

证法 2 由第一圆盘定理, A 的特征值落在下列戈氏圆盘中:

$$
\left| z - a _ {i i} \right| \leq R _ {i} = \sum_ {j = 1, j \neq i} ^ {n} \left| a _ {i j} \right|, \quad 1 \leq i \leq n.
$$

A 的严格对角占优条件保证了复平面的原点不落在这些戈氏圆盘中, 因此 A 的特征值全不为零, 从而 A 是非异阵. 进一步, 若 $a_{ii} > R_i (1 \leq i \leq n)$ , 则这些戈氏圆盘全部位于虚轴的右侧, 因此 A 的特征值 $\lambda_i$ 或者是正实数, 或者是实部为正的共轭虚数, 从而 $|A| = \lambda_1 \lambda_2 \cdots \lambda_n > 0$ . □

在一些问题中引进参变量 $t$ , 利用连续性来证明某些结论也是一种常用的方法 (可以看成是某种摄动法), 下面我们用这个方法来估计特征值的范围.

例 6.33 如果圆盘定理中有一个连通分支由两个圆盘外切组成, 证明: 每个圆盘除去切点的区域不可能同时包含两个特征值.

证明 设 $A = (a_{ij})$ 为 $n$ 阶矩阵, $D_i: |z - a_{ii}| \leq R_i (1 \leq i \leq n)$ 是 $A$ 的 $n$ 个戈氏圆盘. 不妨设 $A$ 的两个戈氏圆盘 $D_1, D_2$ 外切并组成一个连通分支. 令

$$
\boldsymbol {A} (t) = \left( \begin{array}{c c c c} a _ {1 1} & t a _ {1 2} & \dots & t a _ {1 n} \\ t a _ {2 1} & a _ {2 2} & \dots & t a _ {2 n} \\ \vdots & \vdots & & \vdots \\ t a _ {n 1} & t a _ {n 2} & \dots & a _ {n n} \end{array} \right),
$$

由第一圆盘定理, $A(t)$ 的特征值落在下列圆盘中:

$$
t D _ {i}: | z - a _ {i i} | \leq t R _ {i}, 1 \leq i \leq n.
$$

由于当 $0 \leq t < 1$ 时, $\mathbf{A}(t)$ 的特征值是关于 $t$ 的连续函数, 故 $\mathbf{A}(t)$ 的特征值 $\lambda_{i}(t)$ 从 $D_{i}$ 的圆心开始, 始终在圆盘 $tD_{i} (1 \leq i \leq n)$ 中连续变动. 注意此时 $tD_{1}, tD_{2}$ 不相交, 它们是两个连通分支, 于是特征值 $\lambda_{i}(t)$ 落在 $tD_{i} (i = 1,2)$ 中. 最后当 $t = 1$ 时, $\mathbf{A}$ 的特征值 $\lambda_{1} = \lambda_{1}(1)$ 落在 $D_{1}$ 中, 特征值 $\lambda_{2} = \lambda_{2}(1)$ 落在 $D_{2}$ 中. 因此, $\lambda_{1}, \lambda_{2}$ 不可能同时落在 $D_{1}$ 或 $D_{2}$ 除去切点的区域中. □

例 6.34 设 $A = (a_{ij})$ 为 n 阶矩阵, 证明: 存在正数 $\delta$ , 使得对任意的 $s \in (0, \delta)$ , 下列矩阵均有 n 个不同的特征值:

$$
\boldsymbol {A} (s) = \left( \begin{array}{c c c c} a _ {1 1} + s & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} + s ^ {2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} + s ^ {n} \end{array} \right).
$$

证明 先证当 $s$ 充分大时, $\mathbf{A}(s)$ 有 $n$ 个不同的特征值. 由第一圆盘定理, $\mathbf{A}(s)$ 的特征值落在下列戈氏圆盘中:

$$
D _ {i}: | z - a _ {i i} - s ^ {i} | \leq R _ {i} = \sum_ {j = 1, j \neq i} ^ {n} | a _ {i j} |, 1 \leq i \leq n.
$$

取 s 充分大, 使得 $s^{n} \gg s^{n-1} \gg \cdots \gg s$ . 注意到 $R_{i}$ 的值固定, 故 $D_{i}$ 的圆心之间的距离大于半径 $R_{i}$ , 从而 $D_{i}$ 互不相交, 各自构成了一个连通分支. 再由第二圆盘定理, 每个连通分支 $D_{i}$ 中有且仅有一个特征值, 于是 $A(s)$ 有 n 个不同的特征值.

设 $f_{s}(\lambda) = |\lambda I_{n} - A(s)|$ 是 $\pmb{A}(s)$ 的特征多项式, 则其判别式 $\Delta(f_{s}(\lambda))$ 是关于 $s$ 的多项式. 由前面的讨论可知, 当 $s$ 充分大时, $f_{s}(\lambda)$ 无重根, 从而 $\Delta(f_{s}(\lambda)) \neq 0$ , 即 $\Delta(f_{s}(\lambda))$ 是关于 $s$ 的非零多项式. 若 $\Delta(f_{s}(\lambda))$ 的所有复根都是零, 则任取一个正数 $\delta$ ; 若 $\Delta(f_{s}(\lambda))$ 的复根不全为零, 则可取 $\delta$ 为 $\Delta(f_{s}(\lambda))$ 的非零复根的模长的最小值. 于是对任意的 $s \in (0, \delta)$ , $s$ 都不是 $\Delta(f_{s}(\lambda))$ 的根, 即 $\Delta(f_{s}(\lambda)) \neq 0$ , 从而 $f_{s}(\lambda)$ 都无重根, 即 $\pmb{A}(s)$ 都有 $n$ 个不同的特征值. □

## § 6.3 乘法交换性诱导的同时性质

矩阵和线性变换的乘法运算一般没有交换性, 这会触发很多与数的乘法运算不一样的性质和现象, 因此矩阵和线性变换乘法的不可交换性是高等代数学习中的一个难点. 反之, 若两个矩阵或线性变换乘法可交换, 比如 $AB = BA$ , 则有 $(AB)^{m} = A^{m}B^{m}$ , $f(A)g(B) = g(B)f(A)$ 以及二项式定理

$$
(\boldsymbol {A} + \boldsymbol {B}) ^ {m} = \boldsymbol {A} ^ {m} + \mathrm{C} _ {m} ^ {1} \boldsymbol {A} ^ {m - 1} \boldsymbol {B} + \dots + \mathrm{C} _ {m} ^ {m - 1} \boldsymbol {A} \boldsymbol {B} ^ {m - 1} + \boldsymbol {B} ^ {m}
$$

等成立, 其中 $m \geq 1$ , $f(x)$ , $g(x)$ 为多项式.

本节将探讨矩阵和线性变换的乘法交换性诱导的相似关系下的性质, 我们称之为 “同时性质”. 下面分成 5 步进行讨论.

#### 1. 特征子空间互为不变子空间

例 6.35 设 $\varphi, \psi$ 是复线性空间 V 上乘法可交换的线性变换, 即 $\varphi\psi = \psi\varphi$ , 求证: $\varphi$ 的特征子空间是 $\psi$ 的不变子空间, $\psi$ 的特征子空间是 $\varphi$ 的不变子空间.

证明 由代数基本定理以及线性方程组的求解理论可知, $n(n \geq 1)$ 维复线性空间上的线性变换或 $n$ 阶复矩阵至少有一个特征值和特征向量. 任取线性变换 $\varphi$ 的一个特征值 $\lambda_0$ , 设 $V_0$ 是特征值 $\lambda_0$ 的特征子空间, 则对任意的 $\alpha \in V_0$ , 有

$$
\varphi \psi (\alpha) = \psi \varphi (\alpha) = \psi (\lambda_ {0} \alpha) = \lambda_ {0} \psi (\alpha),
$$

即 $\psi (\pmb {\alpha})\in V_0$ ，因此 $V_{0}$ 是 $\psi$ 的不变子空间.同理可证 $\psi$ 的特征子空间是 $\varphi$ 的不变子空间.□

例 6.35 是以下所有结论的出发点, 它自身也有一些有趣的应用.

例 6.36 设 V 为 n 维复线性空间, S 是 $\mathcal{L}(V)$ 的非空子集, 满足: S 中的全体线性变换没有非平凡的公共不变子空间. 设线性变换 $\varphi$ 与 S 中任一线性变换乘法均可交换, 证明: $\varphi$ 是纯量变换.

证明 任取 $\varphi$ 的特征值 $\lambda_0$ 及其特征子空间 $V_0$ . 任取 $\psi \in S$ , 则 $\varphi \psi = \psi \varphi$ , 由例6.35可知 $V_0$ 是 $\psi$ -不变子空间, 从而是 $S$ 中全体线性变换的公共不变子空间. 又 $V_0 \neq 0$ , 故 $V_0 = V$ , 从而 $\varphi = \lambda_0 I_V$ 为纯量变换. $\square$ 

例 6.32 设 A, B, C 是 n 阶矩阵, 其中 C = AB - BA. 若它们满足条件 AC = CA, BC = CB, 求证: C 的特征值全为零.

证法2 将 $A, B, C$ 看成是 $n$ 维复列向量空间 $V$ 上的线性变换. 任取 $C$ 的特征值 $\lambda_0$ 及其特征子空间 $V_0$ , 由 $AC = CA$ , $BC = CB$ 以及例6.35可知, $V_0$ 是 $A$ -不变子空间, 也是 $B$ -不变子空间. 将等式 $C = AB - BA$ 两边的线性变换同时限制在 $V_0$ 上, 可得 $V_0$ 上线性变换的等式 $C|_{V_0} = A|_{V_0}B|_{V_0} - B|_{V_0}A|_{V_0}$ . 两边同时取迹 (线性变换的迹定义为它在任一组基下的表示矩阵的迹), 由迹的线性和交换性可知

$$
\lambda_ {0} \dim V _ {0} = \operatorname{tr} (\boldsymbol {C} | _ {V _ {0}}) = \operatorname{tr} (\boldsymbol {A} | _ {V _ {0}} \boldsymbol {B} | _ {V _ {0}}) - \operatorname{tr} (\boldsymbol {B} | _ {V _ {0}} \boldsymbol {A} | _ {V _ {0}}) = 0,
$$

从而 $\lambda_0 = 0$ ，结论得证. □

注 在上述证明中, $A, B, C$ 在不变子空间 $V_{0}$ 上的限制只能理解成线性变换在不变子空间上的限制, 而不是矩阵在不变子空间上的限制. 那如何得到 $A, B, C$ 在不变子空间上限制的表示矩阵 (阶数变小了) 呢? 请读者自己思考这个问题.

#### 2. 有公共的特征向量

例 6.37 设 $\varphi, \psi$ 是复线性空间 V 上乘法可交换的线性变换, 求证: $\varphi, \psi$ 至少有一个公共的特征向量.

证明 任取 $\varphi$ 的特征值 $\lambda_0$ 及其特征子空间 $V_0$ , 由例6.35可知, $V_0$ 是 $\psi$ -不变子空间. 将线性变换 $\psi$ 限制在 $V_0$ 上, 由于 $V_0$ 是维数大于零的复线性空间, 故 $\psi|_{V_0}$ 至少有一个特征值 $\mu_0$ 及其特征向量 $\alpha \in V_0$ , 从而 $\varphi(\alpha) = \lambda_0\alpha$ , $\psi(\alpha) = \mu_0\alpha$ , 于是 $\alpha$ 就是 $\varphi, \psi$ 的公共特征向量. □

注 (1) 例 6.35 和例 6.37 的代数版本是: 若 $n$ 阶复矩阵 $\mathbf{A}, \mathbf{B}$ 乘法可交换, 即 $\mathbf{AB} = \mathbf{BA}$ , 则 $\mathbf{A}, \mathbf{B}$ 的特征子空间互为不变子空间, 并且 $\mathbf{A}, \mathbf{B}$ 至少有一个公共的特征向量.

(2) 例 6.37 的结论对一般的数域是不成立的. 例如, $A = I_{2}, B = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ , 显然 $A, B$ 乘法可交换, 但它们在有理数域或实数域上没有公共的特征向量. 事实上, $B$ 在有理数域或实数域上都没有特征值 (它的特征值是 $\pm i$ ), 从而也没有特征向量,所以更谈不上公共的特征向量了. 为了把例 6.35 和例 6.37 的结论推广到数域 $\mathbb{F}$ 上, 我们必须假设 $A, B$ 的特征值都在 $\mathbb{F}$ 中, 这也是后面几道相关例题所必需的条件.

例 6.38 设 $\varphi, \psi$ 是数域 F 上线性空间 V 上的乘法可交换的线性变换，且 $\varphi, \psi$ 的特征值都在 F 中，求证： $\varphi, \psi$ 的特征子空间互为不变子空间，并且 $\varphi, \psi$ 至少有一个公共的特征向量.

证明 由线性方程组的求解理论可知, 若数域 $\mathbb{F}$ 上的线性变换或 $\mathbb{F}$ 上的矩阵在 $\mathbb{F}$ 中有一个特征值, 则在 $\mathbb{F}$ 上的线性空间或 $\mathbb{F}$ 上的列向量空间中必存在对应的特征向量. 任取线性变换 $\varphi$ 的一个特征值 $\lambda_0 \in \mathbb{F}$ , 设 $V_0$ 是特征值 $\lambda_0$ 的特征子空间, 则对任意的 $\alpha \in V_0$ , 有

$$
\varphi \psi (\alpha) = \psi \varphi (\alpha) = \psi (\lambda_ {0} \alpha) = \lambda_ {0} \psi (\alpha),
$$

即 $\psi (\pmb {\alpha})\in V_0$ ，因此 $V_{0}$ 是 $\psi$ -不变子空间.取 $V_{0}$ 的一组基并扩张为 $V$ 的一组基，则 $\psi$ 在这组基下的表示矩阵为分块对角矩阵 $\left( \begin{array}{ll}A & C\\ O & B \end{array} \right)$ ，其中 $\pmb{A}$ 是 $\psi |_{V_0}$ 在给定基下的表示矩阵，于是 $|\lambda I_V - \psi | = |\lambda I - A||\lambda I - B|$ .因为 $\psi$ 的特征值都在 $\mathbb{F}$ 中，故 $\pmb{A}$ 的特征值都在 $\mathbb{F}$ 中，于是 $\psi |_{V_0}$ 的特征值都在 $\mathbb{F}$ 中.任取 $\psi |_{V_0}$ 的一个特征值 $\mu_0\in \mathbb{F}$ 及其特征向量 $\pmb {\alpha}\in V_0$ ，则 $\varphi (\pmb {\alpha}) = \lambda_0\pmb {\alpha},\psi (\pmb {\alpha}) = \mu_0\pmb {\alpha}$ ，于是 $\pmb{\alpha}$ 就是 $\varphi ,\psi$ 的公共特征向量.□

注 例 6.38 的代数版本是: 若数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $A, B$ 乘法可交换, 且它们的特征值都在 $\mathbb{F}$ 中, 则 $A, B$ 的特征子空间互为不变子空间, 并且 $A, B$ 在 $\mathbb{F}^n$ 中至少有一个公共的特征向量.

#### 3. 可同时上三角化

一般来说, 一个矩阵在复数域上未必可对角化, 但是总可以上三角化. 下面的例 6.39 是上述结论的推广, 它告诉我们: 只要数域 $\mathbb{F}$ 上的矩阵 $\pmb{A}$ 的特征值全部落在 $\mathbb{F}$ 中, 那么就可以在 $\mathbb{F}$ 上将 $\pmb{A}$ 上三角化. 这个证明所使用的方法具有普遍性.

例 6.39 设数域 F 上的 n 阶矩阵 A 的特征值都在 F 中, 求证: A 在 F 上可上三角化, 即存在 F 上的可逆矩阵 P, 使得 $P^{-1}AP$ 是上三角矩阵.

证明 对阶数进行归纳. 当 $n = 1$ 时结论显然成立, 设对 $n - 1$ 阶矩阵结论成立, 现对 $n$ 阶矩阵 $\pmb{A}$ 进行证明. 设 $\lambda_1 \in \mathbb{F}$ 是 $\pmb{A}$ 的一个特征值, 则由线性方程组的求解理论可知, 存在特征向量 $\pmb{e}_1 \in \mathbb{F}^n$ , 使得 $\pmb{A}\pmb{e}_1 = \lambda_1\pmb{e}_1$ . 由基扩张定理, 可将 $\pmb{e}_1$ 扩张为

$F^{n}$ 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ ，于是

$$
\left(\boldsymbol {A} \boldsymbol {e} _ {1}, \boldsymbol {A} \boldsymbol {e} _ {2}, \dots , \boldsymbol {A} \boldsymbol {e} _ {n}\right) = \left(\boldsymbol {e} _ {1}, \boldsymbol {e} _ {2}, \dots , \boldsymbol {e} _ {n}\right) \left( \begin{array}{c c} \lambda_ {1} & * \\ O & A _ {1} \end{array} \right),
$$

其中 $A_{1}$ 是 F 上的 n-1 阶矩阵. 令 $P = (e_{1}, e_{2}, \cdots, e_{n})$ ，则 P 是 F 上的 n 阶可逆矩阵，且由上式可得 $AP = P\begin{pmatrix}\lambda_{1} & * \\ O & A_{1}\end{pmatrix}$ ，即 $P^{-1}AP = \begin{pmatrix}\lambda_{1} & * \\ O & A_{1}\end{pmatrix}$ . 由此可得 $|\lambda I_{n} - A| = (\lambda - \lambda_{1})|\lambda I_{n-1} - A_{1}|$ ，从而 $A_{1}$ 的特征值也全在 F 中，故由归纳假设，存在 F 上的 n-1 阶可逆矩阵 Q，使得 $Q^{-1}A_{1}Q$ 是上三角矩阵. 令

$$
R = P \left( \begin{array}{c c} 1 & O \\ O & Q \end{array} \right),
$$

则 R 是 F 上的 n 阶可逆矩阵, 且

$$
\boldsymbol {R} ^ {- 1} \boldsymbol {A} \boldsymbol {R} = \left( \begin{array}{c c} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) ^ {- 1} \left( \begin{array}{c c} \lambda_ {1} & * \\ \boldsymbol {O} & \boldsymbol {A} _ {1} \end{array} \right) \left( \begin{array}{c c} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) = \left( \begin{array}{c c} \lambda_ {1} & * \\ \boldsymbol {O} & \boldsymbol {Q} ^ {- 1} \boldsymbol {A} _ {1} \boldsymbol {Q} \end{array} \right)
$$

是上三角矩阵. □

下面是所谓的同时上三角化问题, 它的证明方法与上题类似.

例 6.40 设 A, B 是数域 F 上的 n 阶矩阵, 满足: AB = BA 且 A, B 的特征值都在 F 中, 求证: A, B 在 F 上可同时上三角化, 即存在 F 上的可逆矩阵 P, 使得 $P^{-1}AP$ 和 $P^{-1}BP$ 都是上三角矩阵.

证明 对阶数进行归纳. 当 $n = 1$ 时结论显然成立, 设对 $n - 1$ 阶矩阵结论成立, 现对 $n$ 阶矩阵进行证明. 因为 $\mathbf{AB} = \mathbf{BA}$ 且 $\mathbf{A}, \mathbf{B}$ 的特征值都在 $\mathbb{F}$ 中, 故由例6.38可知, $\mathbf{A}, \mathbf{B}$ 有公共的特征向量 $\mathbf{e}_1 \in \mathbb{F}^n$ , 不妨设

$$
\boldsymbol {A} \boldsymbol {e} _ {1} = \lambda_ {1} \boldsymbol {e} _ {1}, \quad \boldsymbol {B} \boldsymbol {e} _ {1} = \mu_ {1} \boldsymbol {e} _ {1},
$$

其中 $\lambda_{1},\mu_{1}\in F$ 分别是 A,B 的特征值. 由基扩张定理, 可将 $e_{1}$ 扩张为 $F^{n}$ 的一组基 $\{e_{1},e_{2},\cdots,e_{n}\}$ . 令 $P=(e_{1},e_{2},\cdots,e_{n})$ , 则 P 是 F 上的 n 阶可逆矩阵, 且有

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c} \lambda_ {1} & * \\ \boldsymbol {O} & \boldsymbol {A} _ {1} \end{array} \right), \quad \boldsymbol {P} ^ {- 1} \boldsymbol {B} \boldsymbol {P} = \left( \begin{array}{c c} \mu_ {1} & * \\ \boldsymbol {O} & \boldsymbol {B} _ {1} \end{array} \right),
$$

其中 $A_{1}, B_{1}$ 是 $\mathbb{F}$ 上的 $n - 1$ 阶矩阵. 从 $AB = BA$ 不难推出 $A_{1}B_{1} = B_{1}A_{1}$ , 又容易验证 $A_{1}, B_{1}$ 的特征值都在 $\mathbb{F}$ 中, 故由归纳假设, 存在 $\mathbb{F}$ 上的 $n - 1$ 阶可逆矩阵

$Q$ , 使得 $Q^{-1}A_{1}Q$ 和 $Q^{-1}B_{1}Q$ 都是上三角矩阵. 令

$$
R = P \left( \begin{array}{c c} 1 & O \\ O & Q \end{array} \right),
$$

则 R 是 F 上的 n 阶可逆矩阵, 且

$$
\boldsymbol {R} ^ {- 1} \boldsymbol {A} \boldsymbol {R} = \left( \begin{array}{l l} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) ^ {- 1} \left( \begin{array}{c c} \lambda_ {1} & * \\ \boldsymbol {O} & \boldsymbol {A} _ {1} \end{array} \right) \left( \begin{array}{l l} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) = \left( \begin{array}{c c} \lambda_ {1} & * \\ \boldsymbol {O} & \boldsymbol {Q} ^ {- 1} \boldsymbol {A} _ {1} \boldsymbol {Q} \end{array} \right),
$$

$$
\boldsymbol {R} ^ {- 1} \boldsymbol {B} \boldsymbol {R} = \left( \begin{array}{l l} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) ^ {- 1} \left( \begin{array}{c c} \mu_ {1} & * \\ \boldsymbol {O} & \boldsymbol {B} _ {1} \end{array} \right) \left( \begin{array}{l l} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} \end{array} \right) = \left( \begin{array}{c c} \mu_ {1} & * \\ \boldsymbol {O} & \boldsymbol {Q} ^ {- 1} \boldsymbol {B} _ {1} \boldsymbol {Q} \end{array} \right)
$$

都是上三角矩阵. □

注 例 6.39 的几何版本是: 设数域 F 上线性空间 V 上的线性变换 $\varphi$ 的特征值都在 F 中, 则存在 V 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵是上三角矩阵. 例 6.40 的几何版本是: 设数域 F 上线性空间 V 上的线性变换 $\varphi, \psi$ 乘法可交换, 且它们的特征值都在 F 中, 则存在 V 的一组基, 使得 $\varphi, \psi$ 在这组基下的表示矩阵都是上三角矩阵. 如果希望给出上述几何结论的直接证明, 则需要对商空间上诱导的线性变换利用归纳假设 (参考例 4.53), 请读者自行补充相关的细节.

例 6.32 的延拓 设 A, B, C 是 n 阶矩阵, 其中 C = AB - BA. 若它们满足条件 AC = CA, BC = CB, 求证: A, B, C 可同时上三角化.

证明 对阶数进行归纳. 由例 6.32 的证法 2 可知, C 的特征值全为 0, 其特征子空间 $V_{0}$ 满足

$$
\boldsymbol {A} | _ {V _ {0}} \boldsymbol {B} | _ {V _ {0}} - \boldsymbol {B} | _ {V _ {0}} \boldsymbol {A} | _ {V _ {0}} = \boldsymbol {C} | _ {V _ {0}} = \mathbf {0},
$$

即 $A|_{V_0}, B|_{V_0}$ 乘法可交换. 由例6.37可知 $A|_{V_0}, B|_{V_0}$ 有公共的特征向量, 即存在 $\mathbf{0} \neq \mathbf{e}_1 \in V_0$ , 使得

$$
\boldsymbol {A} \boldsymbol {e} _ {1} = \boldsymbol {A} | _ {V _ {0}} (\boldsymbol {e} _ {1}) = \lambda_ {1} \boldsymbol {e} _ {1}, \quad \boldsymbol {B} \boldsymbol {e} _ {1} = \boldsymbol {B} | _ {V _ {0}} (\boldsymbol {e} _ {1}) = \mu_ {1} \boldsymbol {e} _ {1}, \quad \boldsymbol {C} \boldsymbol {e} _ {1} = \boldsymbol {0}.
$$

余下的证明完全类似于例 6.40 的证明, 请读者自行补充相关的细节. □

#### 4. 可同时对角化

例 6.41 设 $\varphi, \psi$ 是数域 F 上 n 维线性空间 V 上的线性变换, 满足: $\varphi\psi = \psi\varphi$ 且 $\varphi, \psi$ 都可对角化, 求证: $\varphi, \psi$ 可同时对角化, 即存在 V 的一组基, 使得 $\varphi, \psi$ 在这组基下的表示矩阵都是对角矩阵.

证明 对空间维数进行归纳. 当 n=1 时结论显然成立, 设对维数小于 n 的线性空间结论成立, 现对 n 维线性空间进行证明. 设 $\varphi$ 的全体不同特征值为 $\lambda_{1},\cdots,\lambda_{s}\in F$ , 对应的特征子空间分别为 $V_{1},\cdots,V_{s}$ , 则由 $\varphi$ 可对角化可知

$$
V = V _ {1} \oplus \dots \oplus V _ {s}.
$$

若 $s = 1$ , 则 $\varphi = \lambda_1 I_V$ 为纯量变换, 此时只要取 $V$ 的一组基, 使得 $\psi$ 在这组基下的表示矩阵为对角矩阵, 则 $\varphi$ 在这组基下的表示矩阵为 $\lambda_1 I_n$ , 结论成立. 若 $s > 1$ , 则 $\dim V_i < n$ . 注意到 $\varphi \psi = \psi \varphi$ 且 $\varphi, \psi$ 的特征值都在 $\mathbb{F}$ 中, 由例6.38可知 $V_i$ 都是 $\psi$ -不变子空间. 考虑线性变换的限制 $\varphi|_{V_i}, \psi|_{V_i}$ : 它们乘法可交换, 且由可对角化线性变换的性质可知它们都可对角化, 故由归纳假设可知, $\varphi|_{V_i}, \psi|_{V_i}$ 可同时对角化, 即存在 $V_i$ 的一组基, 使得 $\varphi|_{V_i}, \psi|_{V_i}$ 在这组基下的表示矩阵都是对角矩阵. 将 $V_i$ 的基拼成 $V$ 的一组基, 则 $\varphi, \psi$ 在这组基下的表示矩阵都是对角矩阵, 即 $\varphi, \psi$ 可同时对角化. □

注 例 6.41 的代数版本是: 设 A, B 是数域 F 上的 n 阶矩阵, 满足: AB = BA 且 A, B 都在 F 上可对角化, 则 A, B 在 F 上可同时对角化, 即存在 F 上的可逆矩阵 P, 使得 $P^{-1}AP$ 和 $P^{-1}BP$ 都是对角矩阵.

#### 5. 个数的推广

上述所有的结论都可以推广到多个矩阵或线性变换的情形。下面以代数语言进行阐述，其几何版本请读者自行补充完整。

例 6.42 设数域 F 上的 n 阶矩阵 $A_{1}, A_{2}, \cdots, A_{m}$ 两两乘法可交换，且它们的特征值都在 F 中，求证：它们在 $F^{n}$ 中至少有一个公共的特征向量.

证明 对 m 进行归纳, m = 2 时就是例 6.38. 设矩阵个数小于 m 时结论成立, 现证 m 个矩阵的情形. 将所有的 $A_{i}$ 都看成是列向量空间 $F^{n}$ 上的线性变换, 任取 $A_{1}$ 的一个特征值 $\lambda_{1} \in F$ 及其特征子空间 $V_{1} \subseteq F^{n}$ . 注意到 $A_{1}A_{i} = A_{i}A_{1}$ , 故由例 6.38 可知, $V_{1}$ 是 $A_{2}, \cdots, A_{m}$ 的不变子空间. 将 $A_{2}, \cdots, A_{m}$ 限制在 $V_{1}$ 上, 它们仍然两两乘法可交换且特征值都在 F 中, 故由归纳假设可得 $A_{2}|_{V_{1}}, \cdots, A_{m}|_{V_{1}}$ 有公共的特征向量 $\alpha \in V_{1}$ . 注意到 $\alpha$ 也是 $A_{1}$ 的特征向量, 于是 $\alpha$ 是 $A_{1}, A_{2}, \cdots, A_{m}$ 的公共特征向量. □

例 6.43 设数域 F 上的 n 阶矩阵 $A_{1}, A_{2}, \cdots, A_{m}$ 两两乘法可交换，且它们的特征值都在 F 中，求证：它们在 F 上可同时上三角化，即存在 F 上的可逆矩阵 P，使得 $P^{-1}A_{i}P(1 \leq i \leq m)$ 都是上三角矩阵.

证明 完全类似于例 6.40 的证明, 其中利用例 6.42 得到 $A_{1}, A_{2}, \cdots, A_{m}$ 的公共特征向量, 请读者自行补充相关的细节. □

例 6.44 设数域 F 上的 n 阶矩阵 $A_{1}, A_{2}, \cdots, A_{m}$ 两两乘法可交换，且它们都在 F 上可对角化，求证：它们在 F 上可同时对角化，即存在 F 上的可逆矩阵 P，使得 $P^{-1}A_{i}P(1 \leq i \leq m)$ 都是对角矩阵.

证明 若 $A_{i}$ 都是纯量矩阵, 则结论显然成立. 以下不妨设 $A_{1}$ 不是纯量矩阵, 余下的证明完全类似于例6.41的证明, 请读者自行补充相关的细节. $\square$ 

例 6.45 设 A, B 都是 n 阶矩阵且 AB = BA. 若 A 是幂零矩阵, 求证: $|A + B| = |B|$ .

证法 1 由例 6.40 可知, $A, B$ 可同时上三角化, 即存在可逆矩阵 $P$ , 使得 $P^{-1}AP$ 和 $P^{-1}BP$ 都是上三角矩阵. 因为上三角矩阵的主对角元是矩阵的特征值, 而幂零矩阵的特征值全为零, 所以 $|P^{-1}AP + P^{-1}BP| = |P^{-1}BP|$ , 即有 $|A + B| = |B|$ .

证法 2 先假设 B 是可逆矩阵, 则 $\left|A + B\right| = \left|I_{n} + AB^{-1}\right|\left|B\right|$ , 只要证明 $\left|I_{n} + AB^{-1}\right| = 1$ 即可. 由 AB = BA 可知 $AB^{-1} = B^{-1}A$ , 再由 A 是幂零矩阵容易验证 $AB^{-1}$ 也是幂零矩阵, 从而其特征值全为零. 因此 $I_{n} + AB^{-1}$ 的特征值全为 1, 故 $\left|I_{n} + AB^{-1}\right| = 1$ .

对于一般的矩阵 B, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{n} + B$ 是可逆矩阵. 由可逆情形的证明可得 $\left|A + t_{k}I_{n} + B\right| = \left|t_{k}I_{n} + B\right|$ . 注意到上式两边都是 $t_{k}$ 的多项式, 从而关于 $t_{k}$ 连续. 将上式两边同时取极限, 令 $t_{k} \rightarrow 0$ , 即得结论. □

在 § 9.13, 我们还将讨论由乘法交换性诱导的实对称矩阵的同时正交对角化、复正规矩阵的同时酉对角化以及实正规矩阵的同时正交标准化等问题, 它们都是本节内容的自然延续.

## § 6.4 矩阵相似和可对角化的计算

本节将从 5 个方面阐述与矩阵相似和矩阵可对角化相关的计算方法.

#### 1. 相似初等变换及其应用

利用相似初等变换来讨论矩阵的相似问题是常用的方法之一. 设 $\mathbf{A}$ 为 $n$ 阶矩阵, 容易验证以下3种变换都是相似变换, 称为相似初等变换:

(1) 对换 A 的第 i 行与第 j 行, 再对换第 i 列与第 j 列;

(2) 将 A 的第 i 行乘以非零常数 c，再将第 i 列乘以 $c^{-1}$ ;

(3) 将 A 的第 i 行乘以常数 c 加到第 j 行上, 再将第 j 列乘以 -c 加到第 i 列上.

设 A 是具有相同行列分块方式的分块矩阵, 容易验证以下 3 种变换都是相似变换, 称为相似分块初等变换:

(1) 对换 A 的第 i 分块行与第 j 分块行, 再对换第 i 分块列与第 j 分块列;

(2) 将 A 的第 i 分块行左乘非异阵 M, 再将第 i 分块列右乘 $M^{-1}$ ;

(3) 将 A 的第 i 分块行左乘矩阵 M 加到第 j 分块行上, 再将第 j 分块列右乘 -M 加到第 i 分块列上.

容易验证: 任一相似变换都是若干次相似初等变换的复合. 下面我们给出相似初等变换应用的两个典型例题.

例 6.46 设 $A = \text{diag}\{A_1, A_2, \cdots, A_m\}$ 是分块对角矩阵, 其中 $A_i$ 都是方阵, 求证: $\text{diag}\{A_1, A_2, \cdots, A_m\}$ 相似于 $\text{diag}\{A_{i_1}, A_{i_2}, \cdots, A_{i_m}\}$ , 其中 $A_{i_1}, A_{i_2}, \cdots, A_{i_m}$ 是 $A_1, A_2, \cdots, A_m$ 的一个排列.

证明 对换 A 的第 i 分块行与第 j 分块行, 再对换第 i 分块列与第 j 分块列. 这是一个相似变换, 变换的结果是将 A 的第 $(i,i)$ 分块和第 $(j,j)$ 分块对换了位置. 又任一排列都可以通过若干次对换来实现, 因此 $\mathrm{diag}\{A_{1},A_{2},\cdots,A_{m}\}$ 和 $\mathrm{diag}\{A_{i_{1}},A_{i_{2}},\cdots,A_{i_{m}}\}$ 相似. □

例 6.47 设 n 阶方阵 A, B 满足 r(ABA) = r(B), 求证: AB 与 BA 相似.

证明 设 P, Q 为 n 阶非异阵, 使得 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , 其中 $r = r(A)$ . 注意到问题的条件和结论在相抵变换: $A \mapsto PAQ$ , $B \mapsto Q^{-1}BP^{-1}$ 下保持不变, 故不妨从一开始就假设 $A = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 是相抵标准型. 设 $B = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ 为对应的分块, 则由 $r(ABA) = r(B)$ 可得 $r\begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix} = r(B_{11})$ . 由此进一步可得 $r(B_{11}; B_{12}) = r(B_{11})$ 以及 $r\begin{pmatrix} B_{11} \\ B_{21} \end{pmatrix} = r(B_{11})$ , 再由例 3.105 可知存在矩阵 M, N, 使得 $B_{11}N = B_{12}$ , $MB_{11} = B_{21}$ .

将 $AB = \begin{pmatrix} B_{11} & B_{12} \\ O & O \end{pmatrix}$ 的第二分块行左乘 N 加到第一分块行, 再将第一分块

列右乘 -N 加到第二分块列, 于是 AB 相似于 $\begin{pmatrix} B_{11} & O \\ O & O \end{pmatrix}$ . 将 $BA = \begin{pmatrix} B_{11} & O \\ B_{21} & O \end{pmatrix}$ 的第一分块行左乘 -M 加到第二分块行, 再将第二分块列右乘 M 加到第一分块列, 于是 BA 相似于 $\begin{pmatrix} B_{11} & O \\ O & O \end{pmatrix}$ . 因此, AB 与 BA 相似. □

#### 2. 利用相似不变量来判定矩阵不相似

相似的矩阵具有相同的迹、行列式、特征多项式和极小多项式等, 故它们被称为矩阵相似关系下的不变量. 因此若两个矩阵的相似不变量不相同, 则它们必不相似. 利用这种方法来判断两个矩阵不相似是很简便的.

例 6.48 设 A, B 为 n 阶方阵, 求证: AB - BA 必不相似于 $kI_{n}$ , 其中 k 是非零常数.

证明 注意到 $\operatorname{tr}(\mathbf{AB} - \mathbf{BA}) = 0, \operatorname{tr}(k\mathbf{I}_n) = nk \neq 0,$ 又矩阵的迹是相似不变量，因此 $AB - BA$ 和 $k\mathbf{I}_n$ 必不相似. □

例 6.49 设 A, B 为 n 阶正交矩阵, 且线性方程组 $(A + B)x = 0$ 的解空间维数是奇数, 求证: A 和 B 必不相似.

证明 由假设可知 $n - \mathrm{r}(\pmb {A} + \pmb {B})$ 为奇数, 再由例9.119可知 $|\mathbf{A}| = -|\mathbf{B}| \neq 0$ , 又矩阵的行列式是相似不变量, 因此 $\mathbf{A}$ 和 $\mathbf{B}$ 必不相似. □

#### 3. 过渡矩阵 $P$ 的计算

首先, 我们介绍一下当矩阵相似于对角矩阵时求过渡矩阵的方法. 设 $n$ 阶矩阵 $\pmb{A}$ 的特征值为 $\lambda_1, \lambda_2, \dots, \lambda_n$ , 可逆矩阵 $P = (\alpha_1, \alpha_2, \dots, \alpha_n)$ 为其列分块, 且

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

则

$$
\boldsymbol {A} \boldsymbol {P} = \boldsymbol {P} \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

即

$$
\left(A \alpha_ {1}, A \alpha_ {2}, \dots , A \alpha_ {n}\right) = \left(\lambda_ {1} \alpha_ {1}, \lambda_ {2} \alpha_ {2}, \dots , \lambda_ {n} \alpha_ {n}\right),
$$

于是 $A\alpha_{i} = \lambda_{i}\alpha_{i}$ , 这表明 $\alpha_{i}$ 就是属于特征值 $\lambda_{i}$ 的特征向量. 因此 $P$ 的 $n$ 个列向量就是 $A$ 的 $n$ 个线性无关的特征向量. 注意: 因为特征向量不唯一, 所以过渡矩阵 $P$ 也不唯一. 另外, $P$ 的第 $i$ 个列向量对应于 $A$ 的第 $i$ 个特征值.

例 6.50 设三阶矩阵 A 的特征值为 1,1,4, 对应的特征向量依次为

$$
(2, 1, 0) ^ {\prime}, \quad (- 1, 0, 1) ^ {\prime}, \quad (0, 1, 1) ^ {\prime},
$$

试求矩阵 A.

解 容易验证 A 的这 3 个特征向量线性无关, 故 A 必相似于对角矩阵, 即有

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{array} \right).
$$

根据上面的分析, 有

$$
\boldsymbol {P} = \left( \begin{array}{c c c} 2 & - 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{array} \right),
$$

于是

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ - 3 & 7 & - 3 \\ - 3 & 6 & - 2 \end{array} \right). \square
$$

#### 4. 可对角化判定的计算

例 6.51 已知矩阵 $A = \begin{pmatrix} 1 & -1 & 1 \\ 2 & x & -2 \\ -3 & -3 & y \end{pmatrix}$ , $B = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & z \end{pmatrix}$ 相似.

(1) 求 x, y, z 的值;

(2) 求一个满足 $P^{-1}AP = B$ 的可逆矩阵 P.

解 (1) 显然 $z \neq 2$ , 否则由 $\mathbf{A}$ 相似于 $2I_{3}$ 可知 $\mathbf{A} = 2I_{3}$ , 矛盾. 于是 $\mathbf{A}$ 的特征值为 2 (2 重), $z$ (1 重). 因为 $\mathbf{A}$ 可对角化, 所以特征值 2 的几何重数也等于 2, 故有

$$
\mathrm{r} (\boldsymbol {A} - 2 \boldsymbol {I} _ {3}) = \mathrm{r} \left( \begin{array}{c c c} - 1 & - 1 & 1 \\ 2 & x - 2 & - 2 \\ - 3 & - 3 & y - 2 \end{array} \right) = 1,
$$

由此可得 $x = 4, y = 5$ . 再由矩阵的迹等于特征值之和可得 $10 = \operatorname{tr}(\mathbf{A}) = 4 + z$ , 故 $z = 6$ .

(2) 通过计算可得: 特征值 2 的两个线性无关的特征向量为 $\alpha_{1} = (-1,1,0)^{\prime}$ , $\alpha_{2} = (1,0,1)^{\prime}$ ; 特征值 6 的特征向量为 $\alpha_{3} = (1, -2,3)^{\prime}$ . 因此

$$
\boldsymbol {P} = \left( \begin{array}{c c c} - 1 & 1 & 1 \\ 1 & 0 & - 2 \\ 0 & 1 & 3 \end{array} \right). \square
$$

例 6.52 设 $A = \begin{pmatrix} 3 & 2 & -2 \\ -k & -1 & k \\ 4 & 2 & -3 \end{pmatrix}$ ，当 k 为何值时，存在可逆矩阵 P，使得 $P^{-1}AP$ 是对角矩阵？求出 P 和对角矩阵.

解 经计算可得 $|\lambda I_3 - A| = (\lambda - 1)(\lambda + 1)^2$ , 因此 $\pmb{A}$ 的特征值为 1 (1 重), -1 (2 重). 对单特征值 1, 其几何重数与代数重数必相等; 因此要使 $\pmb{A}$ 可对角化, 特征值 -1 的几何重数必须等于 2 才行, 故有

$$
\mathrm{r} (\boldsymbol {A} + \boldsymbol {I} _ {3}) = \mathrm{r} \left( \begin{array}{c c c} 4 & 2 & - 2 \\ - k & 0 & k \\ 4 & 2 & - 2 \end{array} \right) = 1,
$$

于是 $k = 0$ . 通过计算可得: 特征值 1 的特征向量为 $(1,0,1)'$ ; 特征值 -1 的两个线性无关的特征向量为 $(-1,2,0)'$ , $(1,0,2)'$ . 因此

$$
\boldsymbol {P} = \left( \begin{array}{c c c} 1 & - 1 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 2 \end{array} \right), \quad \boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & - 1 & 0 \\ 0 & 0 & - 1 \end{array} \right). \square
$$

#### 5. 可对角化矩阵的应用

例6.53 设矩阵 $A = \left( \begin{array}{ccc}1 & -1 & 1\\ 2 & 4 & -2\\ -3 & -3 & 5 \end{array} \right)$ ，求 $A^n$ 

解 本题中的矩阵是一个可对角化矩阵, 因此可以使用下列方法: 先求出可逆矩阵 $P$ , 使得 $P^{-1}AP = B$ 是对角矩阵. 因为对角矩阵的幂很容易求出, 故由 $A^n = PB^n P^{-1}$ 即可得到结果.

经计算可得 $|\lambda I_3 - A| = (\lambda - 2)^2 (\lambda - 6)$ , 因此 $\pmb{A}$ 的特征值为 2 (2 重), 6 (1 重). 通过计算可得: 特征值 2 有两个线性无关的特征向量 $(-1, 1, 0)'$ , $(1, 0, 1)'$ ; 特征值 6有特征向量 $(1, -2, 3)'$ , 于是 $A$ 有完全的特征向量系, 从而可对角化. 注意到

$$
\boldsymbol {P} = \left( \begin{array}{c c c} - 1 & 1 & 1 \\ 1 & 0 & - 2 \\ 0 & 1 & 3 \end{array} \right), \quad \boldsymbol {B} = \boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 6 \end{array} \right),
$$

故

$$
\boldsymbol {A} ^ {n} = \boldsymbol {P} \boldsymbol {B} ^ {n} \boldsymbol {P} ^ {- 1} = \frac {1}{4} \left( \begin{array}{c c c} 5 \cdot 2 ^ {n} - 6 ^ {n} & 2 ^ {n} - 6 ^ {n} & 6 ^ {n} - 2 ^ {n} \\ 2 \cdot 6 ^ {n} - 2 ^ {n + 1} & 2 \cdot 6 ^ {n} + 2 ^ {n + 1} & 2 ^ {n + 1} - 2 \cdot 6 ^ {n} \\ 3 \cdot 2 ^ {n} - 3 \cdot 6 ^ {n} & 3 \cdot 2 ^ {n} - 3 \cdot 6 ^ {n} & 2 ^ {n} + 3 \cdot 6 ^ {n} \end{array} \right). \square
$$

例 6.54 下列数列称为 Fibonacci 数列:

$$
a _ {0} = 0, a _ {1} = 1, a _ {2} = 1, a _ {3} = 2, a _ {4} = 3, a _ {5} = 5, a _ {6} = 8, \dots ,
$$

通项用递推式来表示为 $a_{n+2}=a_{n+1}+a_{n}$ ，试求 Fibonacci 数列通项的显式表达式.

解 这是初等数学中的一个著名问题, 用初等方法来求通项表达式不是一件容易的事. 现在我们用矩阵方法可以很轻松地求得答案. 首先用矩阵来表示递推式:

$$
\binom{a _ {n + 1}}{a _ {n}} = \left( \begin{array}{c c} 1 & 1 \\ 1 & 0 \end{array} \right) \binom{a _ {n}}{a _ {n - 1}}.
$$

令 $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$ ，则

$$
\binom{a _ {n + 1}}{a _ {n}} = \boldsymbol {A} \binom{a _ {n}}{a _ {n - 1}} = \boldsymbol {A} ^ {2} \binom{a _ {n - 1}}{a _ {n - 2}} = \dots = \boldsymbol {A} ^ {n} \binom{a _ {1}}{a _ {0}} = \boldsymbol {A} ^ {n} \binom{1}{0}.
$$

只要求出 $A^{n}$ 就可以算出 $a_{n}$ 来. A 的特征多项式为 $\left|\lambda I_{2}-A\right|=\lambda^{2}-\lambda-1$ , 解得

$$
\lambda_ {1} = \frac {1 + \sqrt {5}}{2}, \quad \lambda_ {2} = \frac {1 - \sqrt {5}}{2}.
$$

对应于特征值 $\lambda_{1}, \lambda_{2}$ 的特征向量分别是:

$$
\alpha_ {1} = \left(\frac {1 + \sqrt {5}}{2}\right), \quad \alpha_ {2} = \left(\frac {1 - \sqrt {5}}{2}\right).
$$

若记

$$
\boldsymbol {P} = \left( \begin{array}{c c} \frac {1 + \sqrt {5}}{2} & \frac {1 - \sqrt {5}}{2} \\ 1 & 1 \end{array} \right),
$$

则

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c} \frac {1 + \sqrt {5}}{2} & 0 \\ 0 & \frac {1 - \sqrt {5}}{2} \end{array} \right).
$$

因此

$$
\boldsymbol {A} = \boldsymbol {P} \left( \begin{array}{c c} \frac {1 + \sqrt {5}}{2} & 0 \\ 0 & \frac {1 - \sqrt {5}}{2} \end{array} \right) \boldsymbol {P} ^ {- 1}, \quad \boldsymbol {A} ^ {n} = \boldsymbol {P} \left( \begin{array}{c c} \frac {1 + \sqrt {5}}{2} & 0 \\ 0 & \frac {1 - \sqrt {5}}{2} \end{array} \right) ^ {n} \boldsymbol {P} ^ {- 1}.
$$

经计算可得

$$
\boldsymbol {A} ^ {n} = \frac {1}{\sqrt {5}} \left( \begin{array}{c c} \left(\frac {1 + \sqrt {5}}{2}\right) ^ {n + 1} - \left(\frac {1 - \sqrt {5}}{2}\right) ^ {n + 1} & \left(\frac {1 + \sqrt {5}}{2}\right) ^ {n} - \left(\frac {1 - \sqrt {5}}{2}\right) ^ {n} \\ \left(\frac {1 + \sqrt {5}}{2}\right) ^ {n} - \left(\frac {1 - \sqrt {5}}{2}\right) ^ {n} & \left(\frac {1 + \sqrt {5}}{2}\right) ^ {n - 1} - \left(\frac {1 - \sqrt {5}}{2}\right) ^ {n - 1} \end{array} \right),
$$

由此可得

$$
a _ {n} = \frac {1}{\sqrt {5}} \left(\left(\frac {1 + \sqrt {5}}{2}\right) ^ {n} - \left(\frac {1 - \sqrt {5}}{2}\right) ^ {n}\right). \square
$$

注 本例为求用递推式定义的数列的通项提供了一个一般性的方法. 在例 1.14 中, 我们用技巧性相当高的方法求出了用下列递推式定义的数列的通项:

$$
D _ {n} = a D _ {n - 1} - b c D _ {n - 2}, \quad D _ {1} = a, \quad D _ {2} = a ^ {2} - b c.
$$

现在请读者自己用上面的方法来求出通项表达式.

## § 6.5 可对角化的判定 (一)

矩阵或线性变换的可对角化判定是高等代数的一个重要知识点。由于判定准则多，技巧性强，故可对角化判定一直是教学及考试中的难点和热点。判定 $n$ 阶复矩阵 $\pmb{A}$ （或 $n$ 维复线性空间 $V$ 上的线性变换 $\varphi$ ）是否可对角化，通常有以下7种方法：

(1) A 可对角化的充要条件是 A 有 n 个线性无关的特征向量;

(2) 若 A 有 n 个不同的特征值, 则 A 可对角化;

(3) A 可对角化的充要条件是 $C^{n}$ 是 A 的特征子空间的直和;

(4) A 可对角化的充要条件是 A 有完全的特征向量系, 即对 A 的任一特征值, 其几何重数等于其代数重数;

(5) A 可对角化的充要条件是 A 的极小多项式无重根;

(6) A 可对角化的充要条件是 A 的 Jordan 块都是一阶的 (或 A 的初等因子都是一次多项式);

(7) 若 A 相似于实对称矩阵或复正规矩阵, 则 A 可对角化.

上述第五、第六种方法将放在 § 7.5 进行探讨, 另外例 7.42 也是可对角化判定准则的一个补充; 第七种方法将放在 § 9.7 的第 4 部分进行探讨; 本节主要阐述可对角化判定的前 4 种方法.

注 若要考虑数域 $\mathbb{F}$ 上的 $n$ 阶矩阵 $\pmb{A}$ (或 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 上的线性变换 $\varphi$ ) 在 $\mathbb{F}$ 上的可对角化问题, 那么首先需要验证 $\pmb{A}$ (或 $\varphi$ ) 的特征值都在 $\mathbb{F}$ 中, 否则由可对角化的定义可知, $\pmb{A}$ (或 $\varphi$ ) 在 $\mathbb{F}$ 上必不可对角化. 若假设 $\pmb{A}$ (或 $\varphi$ ) 的特征值都在 $\mathbb{F}$ 中, 则 $\pmb{A}$ (或 $\varphi$ ) 在 $\mathbb{F}$ 上的可对角化判定准则也是上述前 6 种方法. 因此, 为了突出重点, 本节总是在复数域 $\mathbb{C}$ 上考虑可对角化问题. 请读者自行将某些例题推广到数域 $\mathbb{F}$ 的情形.

#### 1. 有 $n$ 个线性无关的特征向量

寻找 A 的 n 个线性无关的特征向量, 等价于寻找 n 阶可逆矩阵 P, 使得 $P^{-1}AP$ 为对角矩阵. 下面来看两个典型的例题.

例 6.55 求证: 复数域上 n 阶循环矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {2} & a _ {3} & a _ {4} & \dots & a _ {1} \end{array} \right)
$$

可对角化，并求出它相似的对角矩阵及过渡矩阵.

证明 设 $f(x)=a_{1}+a_{2}x+\cdots+a_{n}x^{n-1},\omega_{k}=\cos\frac{2k\pi}{n}+\mathrm{i}\sin\frac{2k\pi}{n}(0\leq k\leq n-1)$ ,
则

$$
\left( \begin{array}{c c c c c} a _ {1} & a _ {2} & a _ {3} & \dots & a _ {n} \\ a _ {n} & a _ {1} & a _ {2} & \dots & a _ {n - 1} \\ \vdots & \vdots & \vdots & & \vdots \\ a _ {2} & a _ {3} & a _ {4} & \dots & a _ {1} \end{array} \right) \left( \begin{array}{c} 1 \\ \omega_ {k} \\ \vdots \\ \omega_ {k} ^ {n - 1} \end{array} \right) = f (\omega_ {k}) \left( \begin{array}{c} 1 \\ \omega_ {k} \\ \vdots \\ \omega_ {k} ^ {n - 1} \end{array} \right).
$$

这表明 $(1,\omega_{k},\cdots,\omega_{k}^{n-1})'$ 是 A 的属于特征值 $f(\omega_{k})$ 的特征向量. 令

$$
\boldsymbol {P} = \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ 1 & \omega_ {1} & \dots & \omega_ {n - 1} \\ \vdots & \vdots & & \vdots \\ 1 & \omega_ {1} ^ {n - 1} & \dots & \omega_ {n - 1} ^ {n - 1} \end{array} \right),
$$

由 Vandermonde 行列式可知 $|\mathbf{P}| \neq 0$ , 从而这 $n$ 个特征向量线性无关, 因此 $\mathbf{A}$ 可对角化, 且有

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{f (1), f \left(\omega_ {1}\right), \dots , f \left(\omega_ {n - 1}\right) \right\}.
$$

例 6.56 设 n 阶复矩阵 A 可对角化, 证明: 矩阵 $\begin{pmatrix} A & A^{2} \\ A^{2} & A \end{pmatrix}$ 也可对角化.

证明 因为 A 可对角化, 故可设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 是 A 的 n 个线性无关的特征向量, 满足 $A\alpha_{i} = \lambda_{i}\alpha_{i} (1 \leq i \leq n)$ . 注意到

$$
\left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {A} ^ {2} \\ \boldsymbol {A} ^ {2} & \boldsymbol {A} \end{array} \right) \binom{\boldsymbol {\alpha} _ {i}}{\boldsymbol {\alpha} _ {i}} = (\lambda_ {i} + \lambda_ {i} ^ {2}) \binom{\boldsymbol {\alpha} _ {i}}{\boldsymbol {\alpha} _ {i}}, \quad \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {A} ^ {2} \\ \boldsymbol {A} ^ {2} & \boldsymbol {A} \end{array} \right) \binom{\boldsymbol {\alpha} _ {i}}{- \boldsymbol {\alpha} _ {i}} = (\lambda_ {i} - \lambda_ {i} ^ {2}) \binom{\boldsymbol {\alpha} _ {i}}{- \boldsymbol {\alpha} _ {i}}.
$$

通过定义不难验证 $\begin{pmatrix}\alpha_{i}\\ \alpha_{i}\end{pmatrix},\quad\begin{pmatrix}\alpha_{i}\\ -\alpha_{i}\end{pmatrix}(1\leq i\leq n)$ 是线性无关的, 因此 $\begin{pmatrix}A & A^{2}\\ A^{2} & A\end{pmatrix}$ 有
2n 个线性无关的特征向量, 从而可对角化. □

在例 6.14 中, $M_{n}(\mathbb{F})$ 上的线性变换 $\eta$ 恰有 $n^{2}$ 个线性无关的特征向量, 因此 $\eta$ 可对角化. 我们还有如下两个类似的例题.

例 6.57 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AXA$ , 其中 $A\in V$ . 证明: 若 A 可对角化, 则 $\varphi$ 也可对角化.

证明 设 P 为 n 阶可逆矩阵, 使得 $P^{-1}AP = \Lambda = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ , 则 $P' A'(P')^{-1} = \Lambda$ , 即 $A'$ 也可对角化. 设

$$
\boldsymbol {P} = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right), \quad \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1} = \left(\beta_ {1}, \beta_ {2}, \dots , \beta_ {n}\right)
$$

分别为两个矩阵的列分块, 则

$$
\boldsymbol {A} \boldsymbol {\alpha} _ {i} = \lambda_ {i} \boldsymbol {\alpha} _ {i}, \quad \boldsymbol {A} ^ {\prime} \boldsymbol {\beta} _ {j} = \lambda_ {j} \boldsymbol {\beta} _ {j}, \quad 1 \leq i, j \leq n,
$$

且 $\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$ 线性无关, $\beta_{1},\beta_{2},\cdots,\beta_{n}$ 线性无关. 由第 3 章的解答题 3 可知, $\{\alpha_{i}\beta_{j}^{\prime},1\leq i,j\leq n\}$ 是 V 中 $n^{2}$ 个线性无关的矩阵. 注意到

$$
\varphi \left(\alpha_ {i} \beta_ {j} ^ {\prime}\right) = A \alpha_ {i} \beta_ {j} ^ {\prime} A = \left(A \alpha_ {i}\right) \left(A ^ {\prime} \beta_ {j}\right) ^ {\prime} = \lambda_ {i} \lambda_ {j} \alpha_ {i} \beta_ {j} ^ {\prime},
$$

故 $\varphi$ 有 $n^{2}$ 个线性无关的特征向量, 从而可对角化. □

例 6.58 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AX-XA$ , 其中 $A\in V$ . 证明: 若 A 可对角化, 则 $\varphi$ 也可对角化.

证明 设 P 为 n 阶可逆矩阵, 使得 $P^{-1}AP = \Lambda = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ , 则 $P' A'(P')^{-1} = \Lambda$ , 即 $A'$ 也可对角化. 设

$$
\boldsymbol {P} = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right), \quad \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1} = \left(\beta_ {1}, \beta_ {2}, \dots , \beta_ {n}\right)
$$

分别为两个矩阵的列分块, 则

$$
\boldsymbol {A} \boldsymbol {\alpha} _ {i} = \lambda_ {i} \boldsymbol {\alpha} _ {i}, \quad \boldsymbol {A} ^ {\prime} \boldsymbol {\beta} _ {j} = \lambda_ {j} \boldsymbol {\beta} _ {j}, \quad 1 \leq i, j \leq n,
$$

且 $\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$ 线性无关, $\beta_{1},\beta_{2},\cdots,\beta_{n}$ 线性无关. 由第 3 章的解答题 3 可知, $\{\alpha_{i}\beta_{j}^{\prime},1\leq i,j\leq n\}$ 是 V 中 $n^{2}$ 个线性无关的矩阵. 注意到

$$
\varphi \left(\alpha_ {i} \beta_ {j} ^ {\prime}\right) = A \alpha_ {i} \beta_ {j} ^ {\prime} - \alpha_ {i} \beta_ {j} ^ {\prime} A = (A \alpha_ {i}) \beta_ {j} ^ {\prime} - \alpha_ {i} \left(A ^ {\prime} \beta_ {j}\right) ^ {\prime} = (\lambda_ {i} - \lambda_ {j}) \alpha_ {i} \beta_ {j} ^ {\prime},
$$

故 $\varphi$ 有 $n^2$ 个线性无关的特征向量, 从而可对角化. $\square$ 

#### 2. 有 $n$ 个不同的特征值

由于属于不同特征值的特征向量线性无关, 故若 $\mathbf{A}$ 有 $n$ 个不同的特征值, 则 $\mathbf{A}$ 必有 $n$ 个线性无关的特征向量, 从而可对角化. 请注意 $\mathbf{A}$ 有 $n$ 个不同的特征值只是可对角化的充分条件, 而并非必要条件. 不过在做题的过程中, 这个判定方法还是很有用的, 比如在例6.34中, 当 $0 < s \ll 1$ 或 $s \gg 0$ 时, $n$ 阶矩阵 $\mathbf{A}(s)$ 有 $n$ 个不同的特征值, 从而可对角化. 我们再来看下面几道典型的例题.

例 6.59 设 A 是实二阶矩阵且 $|A| < 0$ ，求证：A 实相似于对角矩阵.

证明 设

$$
\boldsymbol {A} = \left( \begin{array}{c c} a & b \\ c & d \end{array} \right),
$$

由 $|\mathbf{A}| < 0$ 可得 $ad - bc < 0$ . 又 $\mathbf{A}$ 的特征多项式

$$
\left| \lambda I _ {2} - A \right| = \lambda^ {2} - (a + d) \lambda + (a d - b c),
$$

上述关于 $\lambda$ 的二次方程其判别式大于零, 从而 $A$ 有两个不相等的实特征值, 因此 $A$ 实相似于对角矩阵. $\square$ 

例 6.60 设 A, B, C 都是 n 阶矩阵, A, B 各有 n 个不同的特征值, 又 $f(\lambda)$ 是 A 的特征多项式, 且 $f(B)$ 是可逆矩阵. 求证: 矩阵

$$
M = \left( \begin{array}{c c} A & C \\ O & B \end{array} \right)
$$

相似于对角矩阵.

证明 任取 B 的一个特征值 $\mu_{0}$ ，则 $f(\mu_{0})$ 是 $f(B)$ 的特征值。由于 $f(B)$ 可逆，故 $f(B)$ 的特征值非零，从而 $f(\mu_{0}) \neq 0$ ，即 $\mu_{0}$ 不是 A 的特征值，于是 A 和 B 的特征值互不相同。注意到

$$
| \lambda I _ {2 n} - M | = \left| \begin{array}{c c} \lambda I _ {n} - A & - C \\ O & \lambda I _ {n} - B \end{array} \right| = | \lambda I _ {n} - A | | \lambda I _ {n} - B |,
$$

故矩阵 M 有 2n 个不同的特征值, 从而相似于对角矩阵. □

例 6.61 设 n 阶矩阵 A, B 有相同的特征值, 且这 n 个特征值互不相等. 求证: 存在 n 阶矩阵 P, Q, 使得 A = PQ, B = QP.

证明 由假设以及例 6.46 可知, 矩阵 A, B 相似于同一个对角矩阵, 因此 A 和 B 相似. 不妨设 $B = P^{-1}AP$ , 令 $Q = P^{-1}A$ , 则 PQ = A, QP = B. □

例 6.62 设 A, B 是 n 阶矩阵, A 有 n 个不同的特征值, 并且 AB = BA, 求证: B 相似于对角矩阵.

证法1(几何方法) 因为 A 有 n 个不同的特征值, 故 A 可对角化. 令 V 是 n 维复列向量空间, 将 A, B 看成是 V 上的线性变换. 又设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ , 对应的特征向量为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ , 则 $\lambda_{i}$ 的特征子空间 $V_{i} = L(\alpha_{i}) (1 \leq i \leq n)$ , 且

$$
V = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {n}.
$$

注意到 AB = BA，故由例 6.35 可知，A 的特征子空间 $V_{i}$ 是 B 的不变子空间。将 B 限制在 $V_{i}$ 上，这是一维线性空间 $V_{i}$ 上的线性变换，从而只能是纯量变换，即存在 $\mu_{i}$ ，使得 $B\alpha_{i} = \mu_{i}\alpha_{i} (1 \leq i \leq n)$ ，于是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 也是 B 的特征向量。因此，B 有 n 个线性无关的特征向量，从而 B 可对角化。事实上，我们得到了一个更强的结果：A 和 B 可同时对角化，即存在可逆矩阵 $P = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ ，使得 $P^{-1}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ 和 $P^{-1}BP = diag\{\mu_{1}, \mu_{2}, \cdots, \mu_{n}\}$ 都是对角矩阵。

证法 2 (代数方法) 因为 A 有 n 个不同的特征值, 故 A 可对角化, 即存在可逆矩阵 P, 使得 $P^{-1}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 注意到问题的条件和结论在同时相似变换: $A \mapsto P^{-1}AP$ , $B \mapsto P^{-1}BP$ 下保持不变, 故不妨从一开始就假设 $A = \mathrm{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ 为对角矩阵. 设 $B = (b_{ij})$ , 则

$$
\boldsymbol {A} \boldsymbol {B} = \left( \begin{array}{c c c c} \lambda_ {1} b _ {1 1} & \lambda_ {1} b _ {1 2} & \dots & \lambda_ {1} b _ {1 n} \\ \lambda_ {2} b _ {2 1} & \lambda_ {2} b _ {2 2} & \dots & \lambda_ {2} b _ {2 n} \\ \vdots & \vdots & & \vdots \\ \lambda_ {n} b _ {n 1} & \lambda_ {n} b _ {n 2} & \dots & \lambda_ {n} b _ {n n} \end{array} \right) = \left( \begin{array}{c c c c} \lambda_ {1} b _ {1 1} & \lambda_ {2} b _ {1 2} & \dots & \lambda_ {n} b _ {1 n} \\ \lambda_ {1} b _ {2 1} & \lambda_ {2} b _ {2 2} & \dots & \lambda_ {n} b _ {2 n} \\ \vdots & \vdots & & \vdots \\ \lambda_ {1} b _ {n 1} & \lambda_ {2} b _ {n 2} & \dots & \lambda_ {n} b _ {n n} \end{array} \right) = \boldsymbol {B A},
$$

比较元素可得 $\lambda_{i}b_{ij} = \lambda_{j}b_{ij}$ . 注意到 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 互不相同, 故 $b_{ij} = 0 (i \neq j)$ , 即 B 为对角矩阵. □

例 6.63 设 A, B 是 n 阶矩阵, A 有 n 个不同的特征值, 并且 AB = BA, 求证: 存在次数不超过 n - 1 的多项式 $f(x)$ , 使得 $B = f(A)$ .

证明 由上题可知 A 和 B 可以同时对角化, 即存在可逆矩阵 P, 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \boldsymbol {P} ^ {- 1} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i},\mu_{i}$ 分别是 $A,B$ 的特征值. 因为 $\lambda_{i}$ 互不相同, 故由例4.11 (Lagrange插值定理) 可知, 存在次数不超过 $n - 1$ 的多项式 $f(x)$ , 使得 $f(\lambda_i) = \mu_i (1 \leq i \leq n)$ . 于是

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{f \left(\lambda_ {1}\right), f \left(\lambda_ {2}\right), \dots , f \left(\lambda_ {n}\right) \right\} = f \left(\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}\right) = \boldsymbol {P} ^ {- 1} f (\boldsymbol {A}) \boldsymbol {P},
$$

从而 $B = f(A)$ . □

注 若 A 可对角化, 则对任意的多项式 $f(x)$ , $f(A)$ 也可对角化. 事实上, 设 P 为可逆矩阵, 使得 $P^{-1}AP = diag\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ 为对角矩阵, 则 $P^{-1}f(A)P = f(P^{-1}AP) = diag\{f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)\}$ 也为对角矩阵. 这一结论提醒我们: 在处理可对角化问题时, 如能将矩阵写成可对角化矩阵的多项式, 则往往讨论起来更加方便. 我们来看如下几个例子.

例 6.64 设 A 是 n 阶复矩阵且有 n 个不同的特征值, 求证: n 阶复矩阵 B 可对角化的充要条件是存在次数不超过 n-1 的多项式 $f(x)$ , 使得 B 相似于 $f(A)$ .

证明 先证充分性. 由于 $\mathbf{A}$ 有 $n$ 个不同的特征值, 故 $\mathbf{A}$ 可对角化, 从而 $f(\mathbf{A})$ 也可对角化, 又 $\mathbf{B}$ 相似于 $f(\mathbf{A})$ , 于是 $\mathbf{B}$ 也可对角化. 再证必要性. 设 $\mathbf{P}, \mathbf{Q}$ 为可逆矩阵, 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \boldsymbol {Q} ^ {- 1} \boldsymbol {B} \boldsymbol {Q} = \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i},\mu_{i}$ 分别是 $\mathbf{A},\mathbf{B}$ 的特征值. 因为 $\lambda_{i}$ 互不相同, 故由例4.11 (Lagrange插值定理) 可知, 存在次数不超过 $n - 1$ 的多项式 $f(x)$ , 使得 $f(\lambda_i) = \mu_i (1 \leq i \leq n)$ . 于是

$$
\boldsymbol {Q} ^ {- 1} \boldsymbol {B} \boldsymbol {Q} = \operatorname{diag} \left\{f \left(\lambda_ {1}\right), f \left(\lambda_ {2}\right), \dots , f \left(\lambda_ {n}\right) \right\} = f \left(\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P}\right) = \boldsymbol {P} ^ {- 1} f (\boldsymbol {A}) \boldsymbol {P},
$$

即有 $B = (PQ^{-1})^{-1} f(A)(PQ^{-1})$ ，从而 B 相似于 $f(A)$ . □

下面的推论是例 6.55 的推广.

推论 $n$ 阶复方阵 $\pmb{B}$ 可对角化的充要条件是 $\pmb{B}$ 相似于某个循环矩阵.

证明 设 $J = \begin{pmatrix} O & I_{n-1} \\ 1 & O \end{pmatrix}$ , 经简单计算可得 $|\lambda I_n - J| = \lambda^n - 1$ , 于是 $J$ 有 $n$ 个不同的特征值. 对任一循环矩阵 $C$ , 由例2.14可知, 存在次数不超过 $n-1$ 的多项式 $f(x)$ , 使得 $C = f(J)$ , 故由例6.64即得本推论. □

例 6.56 设 n 阶复矩阵 A 可对角化, 证明: 矩阵 $\begin{pmatrix} A & A^{2} \\ A^{2} & A \end{pmatrix}$ 也可对角化.

证法2 容易验证 $\left( \begin{array}{ll} I_n & I_n \\ I_n & -I_n \end{array} \right)$ 的逆矩阵为 $\frac{1}{2}\left( \begin{array}{ll} I_n & I_n \\ I_n & -I_n \end{array} \right)$ . 考虑如下相似变换:

$$
\frac {1}{2} \left( \begin{array}{c c} I _ {n} & I _ {n} \\ I _ {n} & - I _ {n} \end{array} \right) \left( \begin{array}{c c} A & A ^ {2} \\ A ^ {2} & A \end{array} \right) \left( \begin{array}{c c} I _ {n} & I _ {n} \\ I _ {n} & - I _ {n} \end{array} \right) = \left( \begin{array}{c c} A + A ^ {2} & O \\ O & A - A ^ {2} \end{array} \right).
$$

显然 $A + A^{2}$ , $A - A^{2}$ 作为 A 的多项式也可对角化, 故原矩阵可对角化. 具体地, 设 P 为可逆矩阵, 使得 $P^{-1}AP = \Lambda$ 为对角矩阵, 则

$$
\left( \begin{array}{c c} P ^ {- 1} & O \\ O & P ^ {- 1} \end{array} \right) \left( \begin{array}{c c} A + A ^ {2} & O \\ O & A - A ^ {2} \end{array} \right) \left( \begin{array}{c c} P & O \\ O & P \end{array} \right) = \left( \begin{array}{c c} \Lambda + \Lambda^ {2} & O \\ O & \Lambda - \Lambda^ {2} \end{array} \right)
$$

为对角矩阵, 因此原矩阵可对角化. □

例 6.65 设 a, b, c 为复数且 $bc \neq 0$ ，证明下列 n 阶矩阵 A 可对角化：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} a & b & & & & \\ c & a & b & & & \\ & c & a & b & & \\ & & \ddots & \ddots & \ddots & \\ & & & c & a & b \\ & & & & c & a \end{array} \right).
$$

证明 我们先来计算 $\mathbf{A}$ 的特征多项式 $|\lambda I_n - A|$ . 设 $x_1, x_2$ 是二次方程 $x^2 - (\lambda - a)x + bc = 0$ 的两个根, 则由例1.14可得

$$
\left| \lambda I _ {n} - A \right| = \frac {x _ {1} ^ {n + 1} - x _ {2} ^ {n + 1}}{x _ {1} - x _ {2}}.
$$

注意到 $x_{1}, x_{2}$ 都是关于 $\lambda$ 的连续函数, 要求 $\mathbf{A}$ 的特征值 $\lambda$ , 即是求 $\lambda$ 的值, 使得 $|\lambda I_{n} - A| = 0$ , 而这也等价于 $x_{1}^{n+1} = x_{2}^{n+1}$ . 令 $\omega = \cos \frac{2\pi}{n+1} + i \sin \frac{2\pi}{n+1}$ 为 1 的 $n+1$ 次方根, 则由 $x_{1}^{n+1} = x_{2}^{n+1}$ 可得 $x_{1} = x_{2}\omega^{k} (1 \leq k \leq n)$ . 由 Vieta 定理可得 $x_{1}x_{2} = bc$ , 在选定 $bc$ 的某一平方根 $\sqrt{bc}$ 之后, 可解出

$$
x _ {1} = \sqrt {b c} \left(\cos \frac {k \pi}{n + 1} + \mathrm{i} \sin \frac {k \pi}{n + 1}\right), x _ {2} = \sqrt {b c} \left(\cos \frac {k \pi}{n + 1} - \mathrm{i} \sin \frac {k \pi}{n + 1}\right), 1 \leq k \leq n.
$$

再次由 Vieta 定理可得 $\lambda - a = x_{1} + x_{2} = 2\sqrt{bc}\cos \frac{k\pi}{n + 1}$ , 即

$$
\lambda = a + 2 \sqrt {b c} \cos \frac {k \pi}{n + 1}, \quad 1 \leq k \leq n.
$$

容易验证上述 n 个数的确是 A 的 n 个不同的特征值, 从而 A 可对角化. □

#### 3. 全空间等于特征子空间的直和

矩阵或线性变换可对角化当且仅当全空间等于特征子空间的直和这一判定准则,不仅给了我们很多几何想象的空间 (如例 4.52 的证法 2), 而且与矩阵或线性变换适合的多项式密切相关 (如例 6.66). 我们来看以下几道典型的例题.

例 6.66 设 n 阶矩阵 A 适合首一多项式 $g(x)$ ，并且 $g(x)$ 在复数域中无重根，证明：A 可对角化.

证明 设 $g(x)=(x-a_{1})(x-a_{2})\cdots(x-a_{m})$ 是复数域上的因式分解, 其中 $a_{1}, a_{2}, \cdots, a_{m}$ 是互异的复数. 我们先来证明:

$$
\mathbb {C} ^ {n} = \operatorname{Ker} (\boldsymbol {A} - a _ {1} \boldsymbol {I} _ {n}) \oplus \operatorname{Ker} (\boldsymbol {A} - a _ {2} \boldsymbol {I} _ {n}) \oplus \dots \oplus \operatorname{Ker} (\boldsymbol {A} - a _ {m} \boldsymbol {I} _ {n}). \tag {6.5}
$$

设 $g_{i}(x)=\prod_{j\neq i}(x-a_{j})$ ，则 $(g_{1}(x),g_{2}(x),\cdots,g_{m}(x))=1$ ，故存在 $u_{i}(x)(1\leq i\leq m)$ ，
使得

$$
g _ {1} (x) u _ {1} (x) + g _ {2} (x) u _ {2} (x) + \dots + g _ {m} (x) u _ {m} (x) = 1.
$$

代入 $x = A$ ，可得恒等式

$$
g _ {1} (\boldsymbol {A}) u _ {1} (\boldsymbol {A}) + g _ {2} (\boldsymbol {A}) u _ {2} (\boldsymbol {A}) + \dots + g _ {m} (\boldsymbol {A}) u _ {m} (\boldsymbol {A}) = \boldsymbol {I} _ {n}. \tag {6.6}
$$

对任一 $\alpha\in\mathbb{C}^{n}$ ，由上式可知 $\boldsymbol{\alpha}=\sum_{i=1}^{m}g_{i}(\boldsymbol{A})u_{i}(\boldsymbol{A})\boldsymbol{\alpha}$ 。注意到 $(\boldsymbol{A}-a_{i}\boldsymbol{I}_{n})g_{i}(\boldsymbol{A})u_{i}(\boldsymbol{A})\boldsymbol{\alpha}=$ $g(A)u_{i}(A)\alpha=0,$ 故 $g_{i}(A)u_{i}(A)\alpha\in\mathrm{Ker}(A-a_{i}I_{n}),$ 于是

$$
\mathbb {C} ^ {n} = \operatorname{Ker} \left(\boldsymbol {A} - a _ {1} \boldsymbol {I} _ {n}\right) + \operatorname{Ker} \left(\boldsymbol {A} - a _ {2} \boldsymbol {I} _ {n}\right) + \dots + \operatorname{Ker} \left(\boldsymbol {A} - a _ {m} \boldsymbol {I} _ {n}\right). \tag {6.7}
$$

任取 $\boldsymbol{\alpha}\in\mathrm{Ker}(\boldsymbol{A}-a_{1}\boldsymbol{I}_{n})\cap(\mathrm{Ker}(\boldsymbol{A}-a_{2}\boldsymbol{I}_{n})+\cdots+\mathrm{Ker}(\boldsymbol{A}-a_{m}\boldsymbol{I}_{n}))$ ，则 $\alpha=\alpha_{2}+\cdots+\alpha_{m}$ ，
其中 $\alpha_{i}\in\mathrm{Ker}(\boldsymbol{A}-a_{i}\boldsymbol{I}_{n})(i\geq2)$ . 由 (6.6) 式可知

$$
\boldsymbol {\alpha} = u _ {1} (\boldsymbol {A}) g _ {1} (\boldsymbol {A}) \left(\boldsymbol {\alpha} _ {2} + \dots + \boldsymbol {\alpha} _ {m}\right) + u _ {2} (\boldsymbol {A}) g _ {2} (\boldsymbol {A}) \boldsymbol {\alpha} + \dots + u _ {m} (\boldsymbol {A}) g _ {m} (\boldsymbol {A}) \boldsymbol {\alpha} = \mathbf {0}.
$$

注意到下指标可任意选, 故 (6.7) 式是直和.

由于 A 适合 $g(x)$ ，故 A 的特征值也适合 $g(x)$ ，从而只可能是 $a_{1}, a_{2}, \cdots, a_{m}$ 中的一部分。在 (6.5) 式中剔除等于零的直和分量，这就证明了全空间等于特征子空间的直和，从而 A 可对角化。☐

例 6.67 求证:

(1) 若 n 阶矩阵 A 适合 $A^{2} = I_{n}$ ，则 A 必可对角化；

(2) 若 n 阶矩阵 A 适合 $A^{2}=A$ ，则 A 必可对角化.

证明 对合矩阵 A 适合多项式 $x^{2}-1$ ，幂等矩阵 A 适合多项式 $x^{2}-x$ ，它们都在复数域中无重根，故由例 6.66 即得结论。☐

在例 6.14 中, $M_{n}(\mathbb{F})$ 上的线性变换 $\eta$ 满足 $\eta^{2}=I_{V}$ , 故 $\eta$ 可对角化.

例 4.52 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, $\varphi$ 在 V 的一组基下的表示矩阵为对角矩阵且主对角线上的元素互不相同, 求 $\varphi$ 的所有不变子空间.

证法 2 设线性变换 $\varphi$ 在 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 下的表示矩阵是对角矩阵 $\mathrm{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ ，且 $\lambda_{i}$ 互不相同，因此 $\varphi$ 可对角化， $\varphi$ 有 n 个不同的特征值 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，且 $\varphi(e_{i}) = \lambda_{i}e_{i} (1 \leq i \leq n)$ 。此时，特征值 $\lambda_{i}$ 的特征子空间 $V_{i} = L(e_{i})$ ，并且 $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{n}$ 。

任取 $\varphi$ 的非零不变子空间 U 以及 U 的一组基，并将这组基扩张为 V 的一组基，则 $\varphi$ 在这组基下的表示矩阵是分块上三角矩阵 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$ ，其中 A 是 $\varphi|_{U}$ 的表示矩阵，不妨设为 r 阶矩阵。考虑到

$$
\left| \lambda I _ {V} - \varphi \right| = \left| \lambda I - A \right| \left| \lambda I - B \right| = (\lambda - \lambda_ {1}) (\lambda - \lambda_ {2}) \dots (\lambda - \lambda_ {n}),
$$

故 A 或 $\varphi|_{U}$ 有 r 个不同的特征值, 设为 $\lambda_{i_{1}}, \lambda_{i_{2}}, \cdots, \lambda_{i_{r}}$ . 考虑 $\varphi|_{U}$ 关于特征值 $\lambda_{i_{j}}$ 的特征子空间 $U_{i_{j}} = \{\boldsymbol{u} \in U \mid \varphi(\boldsymbol{u}) = \lambda_{i_{j}} \boldsymbol{u}\}$ , 由于 $U_{i_{j}} = U \cap V_{i_{j}}$ 且 $\dim V_{i_{j}} = 1$ , 故只能是 $U_{i_j} = V_{i_j} = L(\pmb{e}_{i_j})(1\leq j\leq r)$ .因为 $\varphi |_U$ 有 $r$ 个不同的特征值，所以 $\varphi |_U$ 可对角化，于是

$$
U = U _ {i _ {1}} \oplus U _ {i _ {2}} \oplus \dots \oplus U _ {i _ {r}} = L (\boldsymbol {e} _ {i _ {1}}, \boldsymbol {e} _ {i _ {2}}, \dots , \boldsymbol {e} _ {i _ {r}}). \square
$$

#### 4. 有完全的特征向量系

矩阵或线性变换有完全的特征向量系, 即任一特征值的代数重数等于其几何重数, 也就是特征值与线性无关的特征向量完全一一对应. 无论从计算的层面上看 (如例 6.51 和例 6.52), 还是从证明的层面上看, 这都是一个十分实用的判定可对角化的方法. 下面我们来看几道典型的例题.

例 6.68 若矩阵 A, B 有完全的特征向量系, 求证: $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ 也有完全的特征向量系.

证明 因为 $A, B$ 有完全的特征向量系, 故相似于对角矩阵. 设 $P^{-1}AP$ 和 $Q^{-1}BQ$ 是对角矩阵, 则

$$
\left( \begin{array}{c c} P & O \\ O & Q \end{array} \right) ^ {- 1} \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \left( \begin{array}{c c} P & O \\ O & Q \end{array} \right) = \left( \begin{array}{c c} P ^ {- 1} A P & O \\ O & Q ^ {- 1} B Q \end{array} \right)
$$

是对角矩阵. 因此 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ 有完全的特征向量系. □

例 6.69 设 n 阶矩阵 $A = \begin{pmatrix} I_{r} & B \\ O & -I_{n-r} \end{pmatrix}$ ，求证：A 可对角化.

证法 1 显然 A 有特征值 1 (r 重) 与 -1 (n - r 重). 注意到矩阵 $I_{n} - A = \begin{pmatrix} O & -B \\ O & 2I_{n-r} \end{pmatrix}$ 的秩等于 n - r, 因此特征值 1 的几何重数等于 $n - r(I_{n} - A) = r$ , 与其代数重数相等. 同理可证特征值 -1 的几何重数为 n - r, 与其代数重数相同. 因此 A 可对角化, 且相似于对角矩阵 $\mathrm{diag}\{I_{r}, -I_{n-r}\}$ .

证法 2 容易算出 $A^{2}=I_{n}$ ，由例 6.67 (1) 可知 A 可对角化.

证法3 由 $\begin{pmatrix} I_r & \frac{1}{2} B \\ O & I_{n-r} \end{pmatrix}$ $\begin{pmatrix} I_r & B \\ O & -I_{n-r} \end{pmatrix}$ $\begin{pmatrix} I_r & -\frac{1}{2} B \\ O & I_{n-r} \end{pmatrix} = \begin{pmatrix} I_r & O \\ O & -I_{n-r} \end{pmatrix}$ 即得. □

以下是 §6.2 的 4 道例题, 在那里已经计算出了矩阵的全体特征值, 只要再计算特征值的几何重数, 即可得到矩阵可对角化的充要条件. 我们把结论罗列如下, 请读者自行验证细节.

• 例 6.6: A 可对角化的充要条件是 a = b = 0 或 $ab \neq 0$ .

• 例 6.20: $I_{n}-2\alpha\alpha'$ 可对角化.

• 例 6.21: $A\alpha\beta'$ 可对角化的充要条件是 $\beta'A\alpha \neq 0$ 或 $A\alpha\beta' = O$ .

• 例 6.22: 若 $a_{i}$ 全部为零, 则特征值 $-1$ 和 $n - 1$ 都有完全的特征向量系. 若 $\sum_{i=1}^{n} a_{i}^{2} = n$ , 利用秩的降阶公式可得特征值 $-1$ 和 $n - 1$ 都有完全的特征向量系. 在剩余情况, 利用秩的降阶公式可得 3 个特征值都有完全的特征向量系. 因此, $A$ 可对角化. 事实上, 即使去掉 $a_{1} + a_{2} + \cdots + a_{n} = 0$ 的条件, 也可以计算出 $A$ 的全体特征值的代数重数和几何重数, 从而得到 $A$ 可对角化. 这一结论的深层次背景是: $A$ 是实对称矩阵, 从而可正交对角化. 这也是第 7 个可对角化判定准则的出发点, 我们将在 §9.7 详细阐述.

下面这道例题是例 6.60 和例 6.69 的推广.

例 6.70 设 m 阶矩阵 A 与 n 阶矩阵 B 没有公共的特征值, 且 A, B 均可对角化, 又 C 为 $m \times n$ 矩阵, 求证: $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 也可对角化.

证明 任取 A 的特征值 $\lambda_{0}$ ，记其代数重数为 $m_{A}(\lambda_{0})$ ，几何重数为 $t_{A}(\lambda_{0})$ 。首先注意到 A, B 没有公共的特征值，故 $\lambda_{0}$ 不是 B 的特征值，又 $|\lambda I - M| = |\lambda I - A||\lambda I - B|$ ，从而 $m_{M}(\lambda_{0}) = m_{A}(\lambda_{0})$ 。由于 $\lambda_{0}I - B$ 是非异阵，故有如下分块矩阵的初等变换：

$$
\lambda_ {0} \boldsymbol {I} - \boldsymbol {M} = \left( \begin{array}{c c} \lambda_ {0} \boldsymbol {I} - \boldsymbol {A} & - \boldsymbol {C} \\ \boldsymbol {O} & \lambda_ {0} \boldsymbol {I} - \boldsymbol {B} \end{array} \right) \to \left( \begin{array}{c c} \lambda_ {0} \boldsymbol {I} - \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {O} & \lambda_ {0} \boldsymbol {I} - \boldsymbol {B} \end{array} \right).
$$

因为矩阵的秩在分块初等变换下不变, 故由矩阵秩的等式可得

$$
\mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {M}\right) = \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {A}\right) + \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {B}\right) = \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {A}\right) + n,
$$

于是 $t_{M}(\lambda_0) = (m + n) - \mathrm{r}(\lambda_0\pmb {I} - \pmb {M}) = m - \mathrm{r}(\lambda_0\pmb {I} - \pmb {A}) = t_{\pmb {A}}(\lambda_0)$ . 因为 $\pmb{A}$ 可对角化, 所以 $\pmb{A}$ 有完全的特征向量系, 从而 $m_{\pmb {A}}(\lambda_0) = t_{\pmb {A}}(\lambda_0)$ , 于是 $m_{M}(\lambda_0) = t_{M}(\lambda_0)$ . 同理可证, 对 $\pmb{B}$ 的任一特征值 $\mu_0$ , 成立 $m_{M}(\mu_0) = t_{M}(\mu_0)$ . 因此 $\pmb{M}$ 有完全的特征向量系, 从而可对角化. □

在某种意义下, 例 6.71 可以看成是例 6.70 的逆命题.

例 6.71 设 A 为 m 阶矩阵, B 为 n 阶矩阵, C 为 $m \times n$ 矩阵, $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ ,
求证: 若 M 可对角化, 则 A, B 均可对角化.

证明 任取 $M$ 的特征值 $\lambda_0$ , 并采用与例 6.70 的证明相同的记号. 由 $|\lambda I - M| = |\lambda I - A||\lambda I - B|$ 可得 $m_M(\lambda_0) = m_A(\lambda_0) + m_B(\lambda_0)$ . 考虑如下分块矩阵:

$$
\lambda_ {0} \boldsymbol {I} - \boldsymbol {M} = \left( \begin{array}{c c} \lambda_ {0} \boldsymbol {I} - \boldsymbol {A} & - \boldsymbol {C} \\ \boldsymbol {O} & \lambda_ {0} \boldsymbol {I} - \boldsymbol {B} \end{array} \right),
$$

由矩阵秩的不等式（例3.62）可得

$$
\mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {M}\right) \geq \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {A}\right) + \mathrm{r} \left(\lambda_ {0} \boldsymbol {I} - \boldsymbol {B}\right),
$$

于是 $t_{M}(\lambda_0) = (m + n) - \mathrm{r}(\lambda_0I - M)\leq (m - \mathrm{r}(\lambda_0I - A)) + (n - \mathrm{r}(\lambda_0I - B)) =$ $t_A(\lambda_0) + t_B(\lambda_0)$ .由于几何重数总是小于等于代数重数，故有

$$
t _ {M} (\lambda_ {0}) \leq t _ {A} (\lambda_ {0}) + t _ {B} (\lambda_ {0}) \leq m _ {A} (\lambda_ {0}) + m _ {B} (\lambda_ {0}) = m _ {M} (\lambda_ {0}).
$$

因为 M 可对角化, 所以 M 有完全的特征向量系, 从而 $t_{M}(\lambda_{0}) = m_{M}(\lambda_{0})$ , 再由上述不等式可得 $t_{A}(\lambda_{0}) = m_{A}(\lambda_{0}), t_{B}(\lambda_{0}) = m_{B}(\lambda_{0})$ . 由 $\lambda_{0}$ 的任意性即知, A, B 均有完全的特征向量系, 从而均可对角化. □

注 例 6.71 的几何版本是: 设 $\varphi$ 是复线性空间 $V$ 上的线性变换, $U$ 是 $\varphi$ -不变子空间, 若 $\varphi$ 可对角化, 则 $\varphi$ 在不变子空间 $U$ 上的限制变换 $\varphi|_{U}$ 以及 $\varphi$ 在商空间 $V/U$ 上的诱导变换 $\overline{\varphi}$ 均可对角化 (参考例 4.53).

例 6.72 设 A 为 $m \times n$ 矩阵, B 为 $n \times m$ 矩阵, 又 $|BA| \neq 0$ , 求证: AB 可对角化的充要条件是 BA 可对角化.

证明 由例 6.19 可得 $|\lambda I_m - AB| = \lambda^{m-n} |\lambda I_n - BA|$ , 因此 $AB$ 的特征值为 $BA$ 的特征值以及 0. 由于 $BA$ 非异, 故其特征值全部非零, 从而 0 作为 $AB$ 的特征值, 其代数重数为 $m - n$ . 另一方面, 我们有

$$
n = \mathrm{r} (\boldsymbol {B A}) \leq \min \{\mathrm{r} (\boldsymbol {A}), \mathrm{r} (\boldsymbol {B}) \} \leq \max \{\mathrm{r} (\boldsymbol {A}), \mathrm{r} (\boldsymbol {B}) \} \leq \min \{m, n \} = n,
$$

从而 $\mathrm{r}(\pmb {A}) = \mathrm{r}(\pmb {B}) = n.$ 再由Sylvester不等式（例3.66）可得

$$
n = \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - n \leq \mathrm{r} (\boldsymbol {A B}) \leq \min \{\mathrm{r} (\boldsymbol {A}), \mathrm{r} (\boldsymbol {B}) \} = n,
$$

从而 $\mathrm{r}(\mathbf{A}\mathbf{B}) = n$ . 因此 0 作为 $\mathbf{A}\mathbf{B}$ 的特征值, 其几何重数为 $m - \mathrm{r}(\mathbf{A}\mathbf{B}) = m - n$ , 即特征值 0 的代数重数等于几何重数. 任取 $\mathbf{B}\mathbf{A}$ 的特征值 $\lambda_0$ , 它也是 $\mathbf{A}\mathbf{B}$ 的非零特征值, 显然 $m_{\mathbf{A}\mathbf{B}}(\lambda_0) = m_{\mathbf{B}\mathbf{A}}(\lambda_0)$ . 考虑分块矩阵 $\left( \begin{array}{cc} I_m & A \\ B & \lambda_0 I_n \end{array} \right)$ , 由秩的降阶公式 (例3.73) 可得

$$
m + \mathrm{r} (\lambda_ {0} \boldsymbol {I} _ {n} - \boldsymbol {B A}) = n + \mathrm{r} (\boldsymbol {I} _ {m} - \frac {1}{\lambda_ {0}} \boldsymbol {A B}) = n + \mathrm{r} (\lambda_ {0} \boldsymbol {I} _ {m} - \boldsymbol {A B}),
$$

于是 $t_{AB}(\lambda_{0}) = m - \mathrm{r}(\lambda_{0}I_{m} - AB) = n - \mathrm{r}(\lambda_{0}I_{n} - BA) = t_{BA}(\lambda_{0})$ . 由 $\lambda_{0}$ 的任意性即知, AB 有完全的特征向量系当且仅当 BA 有完全的特征向量系, 从而 AB 可对角化当且仅当 BA 可对角化. □

例3.94 设 $A, B$ 分别是 $3 \times 2, 2 \times 3$ 矩阵且满足

$$
\boldsymbol {A} \boldsymbol {B} = \left( \begin{array}{c c c} 8 & 2 & - 2 \\ 2 & 5 & 4 \\ - 2 & 4 & 5 \end{array} \right),
$$

试求 BA.

解法 3 经简单的计算可得 $\left|\lambda I_{3}-AB\right|=\lambda(\lambda-9)^{2}$ ，且特征值 9 的几何重数也等于 2，因此 AB 可对角化。由例 6.19 可得 $\left|\lambda I_{2}-BA\right|=(\lambda-9)^{2}$ ，从而 BA 的两个特征值都是 9，特别地，BA 是可逆矩阵。因此由例 6.72 可知 BA 也可对角化，于是 BA 相似于 $9I_{2}$ ，即存在可逆矩阵 P，使得 $BA=P^{-1}(9I_{2})P=9I_{2}$ 。☐

通常我们采用反证法来证明某些矩阵不能对角化, 下面是一个典型的例题.

例 6.73 求证:

(1) 若 $n$ 阶矩阵 $\mathbf{A}$ 的特征值都是 $\lambda_0$ , 但 $\mathbf{A}$ 不是纯量矩阵, 则 $\mathbf{A}$ 不可对角化. 特别地, 非零的幂零矩阵不可对角化.

(2) 若 $n$ 阶实矩阵 $\mathbf{A}$ 适合 $A^2 + A + I_n = O$ , 则 $\mathbf{A}$ 在实数域上不可对角化.

证明 (1) 用反证法, 设 $\pmb{A}$ 可对角化, 则存在可逆矩阵 $\pmb{P}$ , 使得 $P^{-1}AP = \Lambda$ 为对角矩阵. 由假设 $\pmb{\Lambda}$ 的主对角元素全为 $\lambda_0$ , 故 $\pmb{\Lambda} = \lambda_0\pmb{I}_n$ , 于是 $A = P(\lambda_0 I_n)P^{-1} = \lambda_0 I_n$ , 这与假设矛盾.

(2) 用反证法, 设 $\mathbf{A}$ 在实数域上可对角化, 则 $\mathbf{A}$ 的特征值都是实数. 因为 $\mathbf{A}$ 适合多项式 $x^{2} + x + 1$ , 故由例 6.12 可知, $\mathbf{A}$ 的特征值也适合 $x^{2} + x + 1$ , 从而不可能是实数, 矛盾. □

下面的例题告诉我们: 例 6.72 中的条件 $\left|BA\right|\neq0$ 是必要的.

例 6.74 设 $n(n > 1)$ 阶矩阵 A 的秩为 1, 求证: A 可对角化的充要条件是 $\operatorname{tr}(A) \neq 0$ .

证明 由 $\mathrm{r}(A) = 1$ 可知, 存在非零列向量 $\alpha, \beta$ , 使得 $A = \alpha \beta'$ , 于是由迹的交换性可得 $\operatorname{tr}(A) = \operatorname{tr}(\alpha \beta') = \operatorname{tr}(\beta' \alpha) = \beta' \alpha$ .

证法 1 由例 6.21 及其可对角化的讨论可知本题结论成立.

证法2 注意到 $A^2 = (\alpha \beta')(\alpha \beta') = \alpha (\beta' \alpha) \beta' = (\beta' \alpha) \alpha \beta' = \operatorname{tr}(A) A$ , 故 $A$ 适合多项式 $x^2 - \operatorname{tr}(A)x$ . 若 $\operatorname{tr}(A) \neq 0$ , 则由例6.66可知 $A$ 可对角化; 若 $\operatorname{tr}(A) = 0$ , 则 $A$ 是幂零矩阵, 又 $A \neq O$ , 故由例6.73(1)可知 $A$ 不可对角化. □

## § 6.6 极小多项式与 Cayley-Hamilton 定理

极小多项式是矩阵或线性变换的一个相似不变量, 它在相似标准型理论中起到了重要的作用. 例如, 极小多项式是矩阵或线性变换的不变因子组中最大的那个不变因子, 矩阵或线性变换可对角化当且仅当其极小多项式无重根. 类似于代数数的极小多项式 (例 5.18), 矩阵或线性变换的极小多项式也要整除其适合的任一多项式, 由这一基本性质容易证明极小多项式的存在唯一性. 由于两个非零矩阵相乘可能等于零矩阵, 因此矩阵或线性变换的极小多项式不一定是不可约多项式, 这一点和代数数的极小多项式有本质的区别.

Cayley-Hamilton 定理是高等代数课程中最重要的定理之一, 它告诉我们任一矩阵或线性变换必适合其特征多项式. 一方面, Cayley-Hamilton 定理在矩阵或线性变换理论以及多项式理论之间建立了紧密的联系, 使我们可以深入研究矩阵或线性变换的相似标准型理论. 另一方面, Cayley-Hamilton 定理也是一个强有力的工具, 它在很多问题的解答过程中起到了关键性的作用. 由极小多项式的基本性质和 Cayley-Hamilton 定理可知, 矩阵或线性变换的极小多项式必整除其特征多项式. 在本节中, 我们将从 5 个方面探讨极小多项式的性质以及 Cayley-Hamilton 定理的相关应用等.

#### 1. 极小多项式的性质

例 6.75 设数域 F 上的 n 阶矩阵 A 的极小多项式为 $m(x)$ ，求证： $\mathbb{F}[A] = \{f(A) \mid f(x) \in \mathbb{F}[x]\}$ 是 $M_{n}(\mathbb{F})$ 的子空间，且 $\dim \mathbb{F}[A] = \deg m(x)$ .

证明 容易验证 $\mathbb{F}[\boldsymbol{A}]$ 在矩阵的加法和数乘下封闭, 从而是 $M_{n}(\mathbb{F})$ 的子空间. 对任一 $f(x) \in \mathbb{F}[x]$ , 设 $f(x) = m(x)q(x) + r(x)$ , 其中 $\deg r(x) < \deg m(x) = d$ , 于是 $f(\boldsymbol{A}) = m(\boldsymbol{A})q(\boldsymbol{A}) + r(\boldsymbol{A}) = r(\boldsymbol{A})$ 是 $I_{n}, A, \cdots, A^{d-1}$ 的线性组合. 另一方面, 若设

$c_{0}, c_{1}, \cdots, c_{d-1} \in F,$ 使得

$$
c _ {0} \boldsymbol {I} _ {n} + c _ {1} \boldsymbol {A} + \dots + c _ {d - 1} \boldsymbol {A} ^ {d - 1} = \boldsymbol {O},
$$

则 A 适合多项式 $g(x)=c_{d-1}x^{d-1}+\cdots+c_{1}x+c_{0}$ ，由极小多项式的定义可知 $g(x)=0$ ，即 $c_{0}=c_{1}=\cdots=c_{d-1}=0$ ，于是 $I_{n},A,\cdots,A^{d-1}$ 在 F 上线性无关。因此， $\{I_{n},A,\cdots,A^{d-1}\}$ 是 $\mathbb{F}[A]$ 的一组基，特别地， $\dim\mathbb{F}[A]=d=\deg m(x)$ 。☐

例 6.76 求证:

(1) 相似的矩阵具有相同的极小多项式;

(2) 矩阵及其转置有相同的极小多项式.

证明 (1) 设矩阵 $A$ 和 $B$ 相似, 即存在可逆矩阵 $P$ , 使得 $B = P^{-1}AP$ . 设 $A$ 的极小多项式为 $m(x)$ , $B$ 的极小多项式为 $n(x)$ , 注意到 $m(B) = m(P^{-1}AP) = P^{-1}m(A)P = O$ , 因此 $n(x) \mid m(x)$ . 同理可证 $m(x) \mid n(x)$ , 故 $m(x) = n(x)$ .

(2) 设 A 的极小多项式是 $m(x)$ ，转置 $A'$ 的极小多项式是 $n(x)$ 。将 $m(A) = O$ 转置可得 $m(A') = O$ ，因此 $n(x) \mid m(x)$ 。同理可证 $m(x) \mid n(x)$ ，故 $m(x) = n(x)$ 。☐

例 6.77 设 $A = \text{diag}\{A_{1}, A_{2}, \cdots, A_{k}\}$ 为分块对角矩阵, 其中 $A_{i}$ 都是方阵, 求证: A 的极小多项式等于诸 $A_{i}$ 的极小多项式之最小公倍式.

证明 设 $A_{i}$ 的极小多项式为 $m_{i}(x)$ , $\pmb{A}$ 的极小多项式为 $m(x)$ . 诸 $m_{i}(x)$ 的最小公倍式是 $g(x)$ , 则 $g(A_{i}) = O$ , 故

$$
g (\boldsymbol {A}) = \operatorname{diag} \left\{g \left(\boldsymbol {A} _ {1}\right), g \left(\boldsymbol {A} _ {2}\right), \dots , g \left(\boldsymbol {A} _ {m}\right) \right\} = \boldsymbol {O},
$$

因此 $m(x) \mid g(x)$ . 注意到

$$
m (\boldsymbol {A}) = \operatorname{diag} \left\{m \left(\boldsymbol {A} _ {1}\right), m \left(\boldsymbol {A} _ {2}\right), \dots , m \left(\boldsymbol {A} _ {m}\right) \right\} = \boldsymbol {O},
$$

故对每个 $i$ 有 $m(A_i) = O$ , 从而 $m_i(x) \mid m(x)$ . 又 $g(x)$ 是诸 $m_i(x)$ 的最小公倍式, 故 $g(x) \mid m(x)$ , 于是 $m(x) = g(x)$ . $\square$ 

例 6.78 设 n 阶矩阵 A 可对角化, $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 A 的全体不同的特征值, 试求 A 的极小多项式.

解 设 A 的极小多项式为 $m(x)$ . 由 A 可对角化知存在可逆矩阵 P, 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \boldsymbol {B} = \operatorname{diag} \left\{\boldsymbol {B} _ {1}, \boldsymbol {B} _ {2}, \dots , \boldsymbol {B} _ {k} \right\},
$$

其中 $B_{i} = \lambda_{i}\pmb{I}$ 为纯量矩阵. 显然 $B_{i}$ 的极小多项式为 $x - \lambda_{i}$ , 故由例6.76和例6.77可得

$$
m (x) = \left[ x - \lambda_ {1}, x - \lambda_ {2}, \dots , x - \lambda_ {k} \right] = \left(x - \lambda_ {1}\right) \left(x - \lambda_ {2}\right) \dots \left(x - \lambda_ {k}\right). \square
$$

例 6.79 设 $m(x)$ 是 A 的极小多项式, $\lambda_{0}$ 是 A 的特征值, 求证: $(x - \lambda_{0}) \mid m(x)$ .

证明 因为 $m(A) = O$ ，故由例6.12可得 $m(\lambda_0) = 0$ ，再由余数定理即得 $(x - \lambda_0) \mid m(x)$ . □

例 6.80 设 $m(x)$ 和 $f(x)$ 分别是 n 阶矩阵 A 的极小多项式和特征多项式, 求证: 若不计重数, $m(x)$ 和 $f(x)$ 有相同的根.

证明 由例6.79可知， $f(x)$ 的根（即特征值）都是 $m(x)$ 的根。又由Cayley-Hamilton定理和极小多项式的基本性质可知， $m(x) \mid f(x)$ ，从而 $m(x)$ 的根也都是 $f(x)$ 的根。因此若不计重数， $m(x)$ 和 $f(x)$ 有相同的根。 $\square$ 

例 6.81 设 $m(x)$ 和 $f(x)$ 分别是 n 阶矩阵 A 的极小多项式和特征多项式, 求证: $f(x) \mid m(x)^{n}$ .

证明 $n$ 阶矩阵 $\pmb{A}$ 的特征值最多是 $n$ 重的, 故由例6.80即知结论成立. □

利用上述性质, 我们可以求出很多矩阵的极小多项式. 若 $n$ 阶矩阵 $\mathbf{A}$ 有 $n$ 个不同的特征值, 则极小多项式等于特征多项式. 比如例2.1中的 $n$ 阶基础循环矩阵的极小多项式等于 $x^n - 1$ . 若 $n$ 阶矩阵 $\mathbf{A}$ 可对角化, 则例6.78确定了 $\mathbf{A}$ 的极小多项式. 比如例6.14中的线性变换 $\eta$ 的极小多项式等于 $x^2 - 1$ , 请读者参考 §6.5 中更多的例子. 由例2.2可知, $n$ 阶幂零Jordan块的极小多项式是 $x^n$ . 下面我们来确定秩为1的矩阵的极小多项式.

例 6.82 设 $n(n>1)$ 阶矩阵 A 的秩为 1, 求证: A 的极小多项式为 $x^{2}-\mathrm{tr}(A)x$ .

证明 由例6.74可知, $\pmb{A}$ 适合多项式 $x^{2} - \mathrm{tr}(A)x$ . 显然 $\pmb{A}$ 不可能适合多项式 $x$ . 若 $\pmb{A}$ 适合多项式 $x - \mathrm{tr}(\pmb{A})$ , 则 $\pmb{A} = \mathrm{tr}(\pmb{A})\pmb{I}_n$ 为纯量矩阵, 其秩等于0或 $n$ , 这与 $\mathrm{r}(\pmb{A}) = 1$ 矛盾. 因此, $\pmb{A}$ 的极小多项式为 $x^{2} - \mathrm{tr}(\pmb{A})x$ . □

利用多项式的技巧（例如互素多项式的性质等）来讨论矩阵的极小多项式和特征多项式的性质是常用的方法，下面是应用这种方法的几个例子。

例 6.83 设 $f(x)$ 和 $m(x)$ 分别是 m 阶矩阵 A 的特征多项式和极小多项式, $g(x)$ 和 $n(x)$ 分别是 n 阶矩阵 B 的特征多项式和极小多项式, 证明以下结论等价:

(1) A, B 没有公共的特征值;

(2) $(f(x), g(x)) = 1$ 或 $(f(x), n(x)) = 1$ 或 $(m(x), g(x)) = 1$ 或 $(m(x), n(x)) = 1$ ;

(3) $f(B)$ 或 $m(B)$ 或 $g(A)$ 或 $n(A)$ 是可逆矩阵.

证明 (1) $\Longleftrightarrow$ (2): 由例6.80可知, (2) 中所有的条件都等价. 显然 (1)与 $(f(x),g(x)) = 1$ 等价, 故(1)与(2)等价.

(2) $\Rightarrow$ (3): 例如, 若 $(f(x), n(x)) = 1$ , 则存在 $u(x), v(x)$ , 使得 $f(x) u(x) + n(x) v(x) = 1$ . 将 $x = B$ 代入上式并注意到 $n(B) = O$ , 故可得 $f(B) u(B) = I_n$ , 这表明 $f(B)$ 是可逆矩阵. 将 $x = A$ 代入上式并注意到 $f(A) = O$ , 故可得 $n(A) v(A) = I_n$ , 这表明 $n(A)$ 是可逆矩阵. 同理可证其他的情形.

(3) $\Rightarrow$ (1): 设 $\lambda_{1},\cdots,\lambda_{m}$ 是 A 的特征值, 则 $n(\lambda_{1}),\cdots,n(\lambda_{m})$ 是 $n(A)$ 的特征值. 例如, 若 $n(A)$ 是可逆矩阵, 则 $n(\lambda_{i})\neq0$ . 由例 6.80 可知, $\lambda_{1},\cdots,\lambda_{m}$ 都不是 B 的特征值, 从而 A,B 没有公共的特征值. 同理可证其他的情形. □

例 6.84 设 $f(x)$ 和 $m(x)$ 分别是 n 阶矩阵 A 的特征多项式和极小多项式, $g(x)$ 是一个多项式, 求证: $g(A)$ 是可逆矩阵的充要条件是 $(f(x), g(x)) = 1$ 或 $(m(x), g(x)) = 1$ .

证明 充分性的证明和上题 (2) $\Rightarrow$ (3) 的证明类似, 必要性的证明和上题 (3) $\Rightarrow$ (1) 的证明类似. $\square$ 

例 6.85 证明: n 阶方阵 A 为可逆矩阵的充要条件是 A 的极小多项式的常数项不为零.

证明 设 $f(x)$ 和 $m(x)$ 分别是 $\mathbf{A}$ 的特征多项式和极小多项式, 则 $m(x) \mid f(x)$ . 若 $\mathbf{A}$ 可逆, 则 $f(x)$ 的常数项 $(-1)^n |\mathbf{A}|$ 不等于零, 因此 $m(x)$ 的常数项也不为零.

反之，设 $m(x)=x^{m}+b_{m-1}x^{m-1}+\cdots+b_{0}$ ，其中 $b_{0}\neq0$ ，则

$$
m (\boldsymbol {A}) = \boldsymbol {A} ^ {m} + b _ {m - 1} \boldsymbol {A} ^ {m - 1} + \dots + b _ {0} \boldsymbol {I} _ {n} = \boldsymbol {O},
$$

于是

$$
\boldsymbol {A} \left(\boldsymbol {A} ^ {m - 1} + b _ {m - 1} \boldsymbol {A} ^ {m - 2} + \dots + b _ {1} \boldsymbol {I} _ {n}\right) = - b _ {0} \boldsymbol {I} _ {n}.
$$

由 $b_{0} \neq 0$ 即知 $\mathbf{A}$ 可逆. 也可利用例6.80和Vieta定理来证明, 请读者自行思考. □

#### 2. Cayley-Hamilton 定理的应用: 逆矩阵和伴随矩阵的多项式表示

例 6.86 设 A 是 n 阶可逆矩阵, 求证: $A^{-1} = g(A)$ , 其中 $g(x)$ 是一个 n - 1 次多项式.

证明 设 $f(x)=x^{n}+a_{1}x^{n-1}+\cdots+a_{n-1}x+a_{n}$ 是 A 的特征多项式, 因为 A 可逆, 故 $a_{n}=(-1)^{n}|A|\neq0$ . 由 Cayley-Hamilton 定理可得 $f(A)=O$ , 于是

$$
\boldsymbol {A} \left(- \frac {1}{a _ {n}} \left(\boldsymbol {A} ^ {n - 1} + a _ {1} \boldsymbol {A} ^ {n - 2} + \dots + a _ {n - 1} \boldsymbol {I} _ {n}\right)\right) = \boldsymbol {I} _ {n}.
$$

因此

$$
\boldsymbol {A} ^ {- 1} = - \frac {1}{a _ {n}} (\boldsymbol {A} ^ {n - 1} + a _ {1} \boldsymbol {A} ^ {n - 2} + \dots + a _ {n - 1} \boldsymbol {I} _ {n}). \square
$$

例 6.87 设 A 是 n 阶矩阵, 求证: 伴随矩阵 $A^{*} = h(A)$ , 其中 $h(x)$ 是一个 n - 1 次多项式.

证明 我们用摄动法来证明结论. 设 $f(x)=x^{n}+a_{1}x^{n-1}+\cdots+a_{n-1}x+a_{n}$ 是 A 的特征多项式, 其中 $a_{n}=(-1)^{n}|A|$ . 若 A 是可逆矩阵, 则由例 6.86 可得

$$
\boldsymbol {A} ^ {*} = | \boldsymbol {A} | \boldsymbol {A} ^ {- 1} = (- 1) ^ {n - 1} (\boldsymbol {A} ^ {n - 1} + a _ {1} \boldsymbol {A} ^ {n - 2} + \dots + a _ {n - 1} \boldsymbol {I} _ {n}).
$$

令 $h(x)=(-1)^{n-1}(x^{n-1}+a_{1}x^{n-2}+\cdots+a_{n-1})$ ，则 $A^{*}=h(A)$ ，并且 $h(x)$ 的系数由特征多项式 $f(x)$ 的系数唯一确定.

对于一般的方阵 A, 可取到一列有理数 $t_{k} \rightarrow 0$ , 使得 $t_{k}I_{n} + A$ 为可逆矩阵. 设

$$
f _ {t _ {k}} (x) = | x \boldsymbol {I} _ {n} - (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}) | = x ^ {n} + a _ {1} (t _ {k}) x ^ {n - 1} + \dots + a _ {n - 1} (t _ {k}) x + a _ {n} (t _ {k})
$$

为 $t_k I_n + A$ 的特征多项式, 则 $a_i(t_k)$ 都是 $t_k$ 的多项式且 $a_i(0) = a_i (1 \leq i \leq n)$ . 由可逆矩阵情形的证明可得

$$
(t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}) ^ {*} = (- 1) ^ {n - 1} \Big ((t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}) ^ {n - 1} + a _ {1} (t _ {k}) (t _ {k} \boldsymbol {I} _ {n} + \boldsymbol {A}) ^ {n - 2} + \dots + a _ {n - 1} (t _ {k}) \boldsymbol {I} _ {n} \Big).
$$

注意到上式两边的矩阵中的元素都是 $t_k$ 的多项式, 从而关于 $t_k$ 连续. 上式两边同时取极限, 令 $t_k \to 0$ , 即得

$$
\boldsymbol {A} ^ {*} = (- 1) ^ {n - 1} \left(\boldsymbol {A} ^ {n - 1} + a _ {1} \boldsymbol {A} ^ {n - 2} + \dots + a _ {n - 1} \boldsymbol {I} _ {n}\right).
$$

因此无论 A 是否可逆, 我们都有 $A^{*}=h(A)$ 成立. □

#### 3. Cayley-Hamilton 定理的应用: $AX = XB$ 型矩阵方程的求解及其应用

例 6.88 设 A 为 m 阶矩阵, B 为 n 阶矩阵, 求证: 若 A, B 没有公共的特征值, 则矩阵方程 AX = XB 只有零解 X = O.

证法1 设 $f(\lambda) = |\lambda I_m - A|$ 为 $\pmb{A}$ 的特征多项式, 则由Cayley-Hamilton定理可知 $f(A) = O$ , 再由 $AX = XB$ 可得

$$
O = f (A) X = X f (B).
$$

因为 A, B 没有公共的特征值, 故由例 6.83 可知, $f(B)$ 是可逆矩阵, 从而由上式即得 X = O.

证法 2 任取矩阵方程的一个解 X = C, 若 $C \neq O$ , 则 $r(C) = r \geq 1$ . 由例 6.23 可知, A, B 至少有 r 个相同的特征值, 这与 A, B 没有公共的特征值相矛盾. 因此 C = O, 即矩阵方程只有零解. □

例 6.88 是一个很强的结论, 我们给出它的 3 个应用.

例 6.89 设 n 阶方阵 A, B 的特征值全部大于零且满足 $A^{2} = B^{2}$ ，求证：A = B.

证明 由 $A^2 = B^2$ 可得 $A(A - B) = (A - B)(-B)$ , 即 $A - B$ 是矩阵方程 $AX = X(-B)$ 的解. 注意到 $A$ 的特征值全部大于零, $-B$ 的特征值全部小于零, 故它们没有公共的特征值, 由例 6.88 可得 $A - B = O$ , 即 $A = B$ . $\square$ 

例 6.90 是例 6.62 的分块版本, 可用于分块对角矩阵的化简.

例 6.90 设 $A = \text{diag}\{A_1, A_2, \cdots, A_m\}$ 为 n 阶分块对角矩阵，其中 $A_i$ 是 $n_i$ 阶矩阵且两两没有公共的特征值。设 B 是 n 阶矩阵，满足 AB = BA，求证： $B = \text{diag}\{B_1, B_2, \cdots, B_m\}$ ，其中 $B_i$ 也是 $n_i$ 阶矩阵。

证明 按照 A 的分块方式对 B 进行分块, 可设 $\boldsymbol{B} = (\boldsymbol{B}_{ij})$ , 其中 $B_{ij}$ 是 $n_{i} \times n_{j}$ 矩阵. 由 AB = BA 可知, 对任意的 i, j, 有 $A_{i}B_{ij} = B_{ij}A_{j}$ . 因为 $A_{i}, A_{j} (i \neq j)$ 没有公共的特征值, 故由例 6.88 可得 $B_{ij} = O (i \neq j)$ , 从而 B = diag $\{B_{11}, B_{22}, \cdots, B_{mm}\}$ 也是分块对角矩阵. □

例 6.91 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AX - XB$ . 求证: $\varphi$ 是线性自同构的充要条件是 A, B 没有公共的特征值. 此时, 对任一 $m \times n$ 矩阵 C, 矩阵方程 AX - XB = C 存在唯一解.

证明 若 A, B 没有公共的特征值, 则由例 6.88 可知, $\varphi$ 是 V 上的单映射, 从而是线性自同构. 若 A, B 有公共的特征值 $\lambda_{0}$ , 则 $\lambda_{0}$ 也是 $B'$ 的特征值. 设 $\alpha, \beta$ 为对应的特征向量, 即 $A\alpha = \lambda_{0}\alpha, B'\beta = \lambda_{0}\beta$ , 则 $\alpha\beta' \neq O$ 且

$$
\varphi (\alpha \beta^ {\prime}) = (A \alpha) \beta^ {\prime} - \alpha (B ^ {\prime} \beta) ^ {\prime} = \lambda_ {0} \alpha \beta^ {\prime} - \lambda_ {0} \alpha \beta^ {\prime} = O,
$$

于是 $\operatorname{Ker} \varphi \neq 0$ ，从而 $\varphi$ 不是线性自同构。□

例 6.91 在处理 AX - XB = C 型矩阵方程解的存在唯一性等方面有着诸多的应用, 下面是两个典型的例子.

例 6.92 设 n 阶实矩阵 A 的所有特征值都是正实数, 证明: 对任一实对称矩阵 C, 存在唯一的实对称矩阵 B, 满足 $A'B + BA = C$ .

证明 考虑矩阵方程 $A'X - X(-A) = C$ , 注意到 $A'$ 的特征值全部大于零, $-A$ 的特征值全部小于零, 它们没有公共的特征值, 故由例 6.91 可得上述矩阵方程存在唯一解 $X = B$ . 容易验证 $X = \overline{B}, B'$ 也都是上述矩阵方程的解, 故由解的唯一性可知 $B = \overline{B}$ 且 $B = B'$ , 即 $B$ 为实对称矩阵, 结论得证. $\square$ 

例 6.70 设 m 阶矩阵 A 与 n 阶矩阵 B 没有公共的特征值, 且 A, B 均可对角化, 又 C 为 $m \times n$ 矩阵, 求证: $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 也可对角化.

证法 2 由例 6.91 可知, 矩阵方程 AX - XB = C 存在唯一解 $X = X_{0}$ . 考虑如下相似变换:

$$
\left( \begin{array}{c c} I _ {m} & X _ {0} \\ O & I _ {n} \end{array} \right) \left( \begin{array}{c c} A & C \\ O & B \end{array} \right) \left( \begin{array}{c c} I _ {m} & - X _ {0} \\ O & I _ {n} \end{array} \right) = \left( \begin{array}{c c} A & - A X _ {0} + X _ {0} B + C \\ O & B \end{array} \right) = \left( \begin{array}{c c} A & O \\ O & B \end{array} \right),
$$

由例 6.68 可知上式最右边的分块对角矩阵可对角化, 于是原矩阵也可对角化. □

#### 4. Cayley-Hamilton 定理的应用: 特征多项式诱导的直和分解

例 6.93 设 $\varphi$ 是复线性空间 V 上的线性变换, 又有两个复系数多项式:

$$
f (x) = x ^ {m} + a _ {1} x ^ {m - 1} + \dots + a _ {m}, g (x) = x ^ {n} + b _ {1} x ^ {n - 1} + \dots + b _ {n}.
$$

设 $\sigma = f(\varphi),\tau = g(\varphi)$ ，矩阵 $C$ 是 $f(x)$ 的友阵，即

$$
\boldsymbol {C} = \left( \begin{array}{c c c c c} 0 & 0 & 0 & \dots & - a _ {m} \\ 1 & 0 & 0 & \dots & - a _ {m - 1} \\ 0 & 1 & 0 & \dots & - a _ {m - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & - a _ {1} \end{array} \right).
$$

若 $g(C)$ 是可逆矩阵, 求证: $\operatorname{Ker}\sigma\tau = \operatorname{Ker}\sigma \oplus \operatorname{Ker}\tau$ .

证明 经计算可知 C 的特征多项式就是 $f(x)$ ，故由例 6.84 可得 $(f(x), g(x)) = 1$ ，再由例 5.78 完全类似的证明可知结论成立。☐

利用 Cayley-Hamilton 定理, 我们可以将例 5.78 推广为如下的命题.

例 6.94 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换, 其特征多项式是 $f(\lambda)$ 且 $f(\lambda) = f_{1}(\lambda)f_{2}(\lambda)$ , 其中 $f_{1}(\lambda)$ , $f_{2}(\lambda)$ 是互素的首一多项式. 令 $V_{1} = \operatorname{Ker} f_{1}(\varphi)$ , $V_{2} = \operatorname{Ker} f_{2}(\varphi)$ , 求证:

(1) $V_{1}, V_{2}$ 是 $\varphi$ -不变子空间且 $V = V_{1} \oplus V_{2}$ ;

(2) $V_{1} = \operatorname{Im} f_{2}(\varphi), V_{2} = \operatorname{Im} f_{1}(\varphi)$ ; 

(3) $\varphi|_{V_{1}}$ 的特征多项式是 $f_{1}(\lambda)$ , $\varphi|_{V_{2}}$ 的特征多项式是 $f_{2}(\lambda)$ .

证明 (1) 由 Cayley-Hamilton 定理可得 $f(\varphi) = f_{1}(\varphi)f_{2}(\varphi) = 0$ ，故由例 5.78 可知 (1) 的结论成立.

(2) 由 $f_{1}(\varphi)f_{2}(\varphi)=0$ 可得 $\operatorname{Im} f_{2}(\varphi) \subseteq \operatorname{Ker} f_{1}(\varphi)=V_{1}, \operatorname{Im} f_{1}(\varphi) \subseteq \operatorname{Ker} f_{2}(\varphi)=V_{2}$ . 因为 $V=V_{1} \oplus V_{2}$ , 故由维数公式可得

$$
\begin{array}{l} \dim \operatorname{Im} f _ {2} (\varphi) = \dim V - \dim \operatorname{Ker} f _ {2} (\varphi) = \dim V - \dim V _ {2} = \dim V _ {1}, \\ \dim \operatorname{Im} f _ {1} (\varphi) = \dim V - \dim \operatorname{Ker} f _ {1} (\varphi) = \dim V - \dim V _ {1} = \dim V _ {2}, \\ \end{array}
$$

从而 $V_{1}=\mathrm{Im}f_{2}(\varphi)$ , $V_{2}=\mathrm{Im}f_{1}(\varphi)$ .

(3) 设 $\varphi|_{V_i}$ 的特征多项式为 $g_i(\lambda)$ ( $i=1,2$ ), 则由例 6.3 可得

$$
f (\lambda) = f _ {1} (\lambda) f _ {2} (\lambda) = g _ {1} (\lambda) g _ {2} (\lambda). \tag {6.8}
$$

注意到 $f_{i}(\varphi |v_{i}) = f_{i}(\varphi)|_{V_{i}} = 0$ ，即 $\varphi |_{V_i}$ 适合多项式 $f_{i}(\lambda)$ ，因此 $\varphi |_{V_i}$ 的特征值也适合 $f_{i}(\lambda)$ ，即 $g_{i}(\lambda)$ 的根都是 $f_{i}(\lambda)$ 的根．因为 $(f_{1}(\lambda),f_{2}(\lambda)) = 1$ ，故 $f_{1}(\lambda)$ 与 $f_{2}(\lambda)$ 没有公共根，从而由 $f_{i}(\lambda)$ 的首一性和(6.8)式即得 $f_{1}(\lambda) = g_{1}(\lambda),f_{2}(\lambda) = g_{2}(\lambda).$ □

注 (1) 例 6.94 告诉我们, 对数域 $\mathbb{K}$ 上的线性变换, 其特征多项式的互素因式分解可以诱导出全空间的直和分解. 特别地, 当 $\mathbb{K}$ 是复数域时, 特征多项式的标准因式分解可以诱导出全空间的根子空间直和分解, 进一步还可以得到循环子空间直和分解, 从而给出了 Jordan 标准型理论的几何构造. 当 $\mathbb{K}$ 是一般的数域时, 上述直和分解也能解决许多有趣的问题. 这些内容我们将在第 7 章详细阐述.

(2) 例 6.94 的结论还可以进一步推广, 例如不限定 $f(\lambda)$ 是 $\varphi$ 的特征多项式, 而只要求 $\varphi$ 适合它 (比如 $\varphi$ 的极小多项式 $m(\lambda)$ ), 则由完全相同的讨论可以证明例 6.94 的 (1) 和 (2) 都成立. 特别地, 如果考虑极小多项式的首一互素因式分解$m(\lambda)=m_{1}(\lambda)m_{2}(\lambda),V_{1}=\operatorname{Ker}m_{1}(\varphi),V_{2}=\operatorname{Ker}m_{2}(\varphi)$ ，则由完全类似的讨论可以证明： $\varphi|_{V_{i}}$ 的极小多项式就是 $m_{i}(\lambda)$ 。我们把验证的细节留给读者自己完成。

#### 5. Cayley-Hamilton 定理的其他应用

例 6.95 设 A 为 n 阶矩阵, C 为 $k \times n$ 矩阵, 且对任意的 $\lambda \in C$ , $\begin{pmatrix} A - \lambda I_n \\ C \end{pmatrix}$ 

均为列满秩阵. 证明: 对任意的 $\lambda \in \mathbb{C}$ , $\left( \begin{array}{c} C \\ C(A - \lambda I_n) \\ C(A - \lambda I_n)^2 \\ \vdots \\ C(A - \lambda I_n)^{n-1} \end{array} \right)$ 均为列满秩阵.

证明 由线性方程组求解理论可知, 对任意的 $\lambda \in \mathbb{C}$ , 下列线性方程组只有零解:

$$
\left\{ \begin{array}{l} (A - \lambda I _ {n}) x = 0, \\ C x = 0. \end{array} \right. \tag {6.9}
$$

而要证明结论, 只要证明对任意的 $\lambda \in \mathbb{C}$ , 下列线性方程组只有零解即可:

$$
\left\{ \begin{array}{l} C \boldsymbol {x} = \mathbf {0}, \\ C (\boldsymbol {A} - \lambda \boldsymbol {I} _ {n}) \boldsymbol {x} = \mathbf {0}, \\ C (\boldsymbol {A} - \lambda \boldsymbol {I} _ {n}) ^ {2} \boldsymbol {x} = \mathbf {0}, \\ \dots \dots . \\ C (\boldsymbol {A} - \lambda \boldsymbol {I} _ {n}) ^ {n - 1} \boldsymbol {x} = \mathbf {0}. \end{array} \right. \tag {6.10}
$$

任取 $\lambda_{0}\in\mathbb{C}$ 以及对应线性方程组 (6.10) 的任一解 $x_{0}$ ，则有 $Cx_{0}=0, CAx_{0}=0,\cdots, CA^{n-1}x_{0}=0$ ，因此对任意次数小于 n 的多项式 $g(x)$ ，均有 $Cg(A)x_{0}=0$ 。设

$$
f (\lambda) = | \lambda I _ {n} - A | = (\lambda - \lambda_ {1}) (\lambda - \lambda_ {2}) \dots (\lambda - \lambda_ {n})
$$

为 $\pmb{A}$ 的特征多项式, 则由 Cayley-Hamilton 定理可得

$$
(\boldsymbol {A} - \lambda_ {1} \boldsymbol {I} _ {n}) (\boldsymbol {A} - \lambda_ {2} \boldsymbol {I} _ {n}) \dots (\boldsymbol {A} - \lambda_ {n} \boldsymbol {I} _ {n}) = \boldsymbol {O}.
$$

因此 $\boldsymbol{y}=(\boldsymbol{A}-\lambda_{2}\boldsymbol{I}_{n})\cdots(\boldsymbol{A}-\lambda_{n}\boldsymbol{I}_{n})\boldsymbol{x}_{0}$ 既满足 $(\boldsymbol{A}-\lambda_{1}\boldsymbol{I}_{n})\boldsymbol{y}=\boldsymbol{0}$ ，又满足 Cy=0，故由线性方程组 (6.9) 只有零解可得 $\boldsymbol{y}=(\boldsymbol{A}-\lambda_{2}\boldsymbol{I}_{n})\cdots(\boldsymbol{A}-\lambda_{n}\boldsymbol{I}_{n})\boldsymbol{x}_{0}=\boldsymbol{0}$ 。不断重复上述论证，最后可得 $x_{0}=0$ ，结论得证。☐

例 6.96 设 A 是 n 阶矩阵, B 是 $n \times m$ 矩阵, 分块矩阵 $(B, AB, \cdots, A^{n-2}B, A^{n-1}B)$ 的秩为 r. 证明: 存在 n 阶可逆矩阵 P, 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c} \boldsymbol {A} _ {1 1} & \boldsymbol {A} _ {1 2} \\ \boldsymbol {O} & \boldsymbol {A} _ {2 2} \end{array} \right), \quad \boldsymbol {P} ^ {- 1} \boldsymbol {B} = \binom{\boldsymbol {B} _ {1}}{\boldsymbol {O}},
$$

其中 $A_{11}$ 是 r 阶矩阵, $B_{1}$ 是 $r \times m$ 矩阵.

证明 设 $(B,AB,\cdots,A^{n-2}B,A^{n-1}B)$ 列向量的极大无关组为 $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ ，由基扩张定理可将其扩张为 $F^{n}$ 的一组基 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{n}\}$ . 令 $P=(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})$ ，则P为可逆矩阵. 设A的特征多项式为 $f(\lambda)=\lambda^{n}+a_{1}\lambda^{n-1}+\cdots+a_{n-1}\lambda+a_{n}$ ，则由Cayley-Hamilton定理可得

$$
f (\boldsymbol {A}) = \boldsymbol {A} ^ {n} + a _ {1} \boldsymbol {A} ^ {n - 1} + \dots + a _ {n - 1} \boldsymbol {A} + a _ {n} \boldsymbol {I} _ {n} = \boldsymbol {O},
$$

从而

$$
\boldsymbol {A} ^ {n} \boldsymbol {B} = - a _ {1} \boldsymbol {A} ^ {n - 1} \boldsymbol {B} - \dots - a _ {n - 1} \boldsymbol {A} \boldsymbol {B} - a _ {n} \boldsymbol {B}.
$$

由上式容易验证 $A\alpha_{i}(1 \leq i \leq r)$ 都是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 的线性组合，于是 AP = P $\begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix}$ ，即有 $P^{-1}AP = \begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix}$ 。又 B 的列向量都是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 的线性组合，于是 $B = P\begin{pmatrix} B_{1} \\ O \end{pmatrix}$ ，即有 $P^{-1}B = \begin{pmatrix} B_{1} \\ O \end{pmatrix}$ 。☐

例 6.97 设 A 是数域 F 上的 n 阶矩阵, 递归地定义矩阵序列 $\{A_{k}\}_{k=1}^{\infty}$ :

$$
\boldsymbol {A} _ {1} = \boldsymbol {A}, p _ {k} = - \frac {1}{k} \operatorname{tr} (\boldsymbol {A} _ {k}), \boldsymbol {A} _ {k + 1} = \boldsymbol {A} (\boldsymbol {A} _ {k} + p _ {k} \boldsymbol {I} _ {n}), k = 1, 2, \dots .
$$

求证: $A_{n+1} = O$ .

证明 设 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，它们的幂和记为 $s_{k} = \sum_{i=1}^{n} \lambda_{i}^{k} = \operatorname{tr}(A^{k})$ ，它们的初等对称多项式记为 $\sigma_{k}$ ，则 A 的特征多项式为

$$
f (\lambda) = \lambda^ {n} - \sigma_ {1} \lambda^ {n - 1} + \dots + (- 1) ^ {n - 1} \sigma_ {n - 1} \lambda + (- 1) ^ {n} \sigma_ {n}.
$$

下面用归纳法证明: $p_{k} = (-1)^{k}\sigma_{k}(1 \leq k \leq n)$ . $p_{1} = -\operatorname{tr}(\mathbf{A}) = -\sigma_{1}$ , 结论成立. 假设小于等于 $k$ 时结论成立, 则 $\mathbf{A}_{k+1} = \mathbf{A}^{k+1} - \sigma_{1}\mathbf{A}^{k} + \cdots + (-1)^{k}\sigma_{k}\mathbf{A}$ . 由 Newton 公式可得

$$
p _ {k + 1} = - \frac {1}{k + 1} \operatorname{tr} \left(\boldsymbol {A} _ {k + 1}\right) = - \frac {1}{k + 1} \left(s _ {k + 1} - s _ {k} \sigma_ {1} + \dots + (- 1) ^ {k} s _ {1} \sigma_ {k}\right) = (- 1) ^ {k + 1} \sigma_ {k + 1},
$$

结论得证. 最后, 由 Cayley-Hamilton 定理可得

$$
\boldsymbol {A} _ {n + 1} = \boldsymbol {A} ^ {n + 1} - \sigma_ {1} \boldsymbol {A} ^ {n} + \dots + (- 1) ^ {n} \sigma_ {n} \boldsymbol {A} = f (\boldsymbol {A}) \boldsymbol {A} = \boldsymbol {O}. \square
$$

## § 6.7 矩阵的 Kronecker 积

矩阵的 Kronecker 积是一个重要的概念, 它在数学的众多研究领域中都有着重要的应用. 利用多重线性代数的相关理论可以证明: 两个线性映射的张量积的表示矩阵是它们的表示矩阵的 Kronecker 积. 这就是矩阵 Kronecker 积的几何意义, 也是 Kronecker 积与张量积采用相同运算符号的原因.

定义 设 $A = (a_{ij})$ 和 $B = (b_{ij})$ 分别是数域 $\mathbb{F}$ 上的 $m \times n$ 和 $k \times l$ 矩阵, 它们的 Kronecker 积 $A \otimes B$ 是 $\mathbb{F}$ 上的 $mk \times nl$ 矩阵:

$$
\boldsymbol {A} \otimes \boldsymbol {B} = \left( \begin{array}{c c c c} a _ {1 1} \boldsymbol {B} & a _ {1 2} \boldsymbol {B} & \dots & a _ {1 n} \boldsymbol {B} \\ a _ {2 1} \boldsymbol {B} & a _ {2 2} \boldsymbol {B} & \dots & a _ {2 n} \boldsymbol {B} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} \boldsymbol {B} & a _ {m 2} \boldsymbol {B} & \dots & a _ {m n} \boldsymbol {B} \end{array} \right).
$$

例 6.98 证明矩阵的 Kronecker 积满足下列性质 (假设以下的矩阵加法和乘法都有意义):

(1) $(\mathbf{A} + \mathbf{B})\otimes \mathbf{C} = \mathbf{A}\otimes \mathbf{C} + \mathbf{B}\otimes \mathbf{C},\mathbf{A}\otimes (\mathbf{B} + \mathbf{C}) = \mathbf{A}\otimes \mathbf{B} + \mathbf{A}\otimes \mathbf{C};$ 

(2) $(kA)\otimes B=k(A\otimes B)=A\otimes(kB);$ 

(3) $(\mathbf{A} \otimes \mathbf{C})(\mathbf{B} \otimes \mathbf{D}) = (\mathbf{A}\mathbf{B}) \otimes (\mathbf{C}\mathbf{D});$ 

(4) $(\mathbf{A}\otimes \mathbf{B})\otimes \mathbf{C} = \mathbf{A}\otimes (\mathbf{B}\otimes \mathbf{C});$ 

(5) $I_{m} \otimes I_{n} = I_{mn};$ 

(6) $(\mathbf{A}\otimes \mathbf{B})^{\prime} = \mathbf{A}^{\prime}\otimes \mathbf{B}^{\prime};$ 

(7) 若 A, B 都是可逆矩阵, 则 $A \otimes B$ 也是可逆矩阵, 并且

$$
(\boldsymbol {A} \otimes \boldsymbol {B}) ^ {- 1} = \boldsymbol {A} ^ {- 1} \otimes \boldsymbol {B} ^ {- 1};
$$

(8) 若 A 是 m 阶矩阵, B 是 n 阶矩阵, 则 $|A \otimes B| = |A|^{n}|B|^{m}$ ;

(9) 若 A 是 m 阶矩阵, B 是 n 阶矩阵, 则 $\mathrm{tr}(A \otimes B) = \mathrm{tr}(A) \cdot \mathrm{tr}(B)$ .

证明 (1), (2), (5), (6) 和 (9) 由 Kronecker 积的定义经简单计算即可验证.

(3) 设 $A = (a_{ij})$ 是 $m \times p$ 矩阵, $B = (b_{ij})$ 是 $p \times n$ 矩阵, $C = (c_{ij})$ 是 $k \times q$ 矩阵, $D = (d_{ij})$ 是 $q \times l$ 矩阵. 由 Kronecker 积的定义以及分块矩阵的乘法可得

$$
(\boldsymbol {A} \otimes \boldsymbol {C}) (\boldsymbol {B} \otimes \boldsymbol {D}) = \left( \begin{array}{c c c c} a _ {1 1} \boldsymbol {C} & a _ {1 2} \boldsymbol {C} & \dots & a _ {1 p} \boldsymbol {C} \\ a _ {2 1} \boldsymbol {C} & a _ {2 2} \boldsymbol {C} & \dots & a _ {2 p} \boldsymbol {C} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} \boldsymbol {C} & a _ {m 2} \boldsymbol {C} & \dots & a _ {m p} \boldsymbol {C} \end{array} \right) \left( \begin{array}{c c c c} b _ {1 1} \boldsymbol {D} & b _ {1 2} \boldsymbol {D} & \dots & b _ {1 n} \boldsymbol {D} \\ b _ {2 1} \boldsymbol {D} & b _ {2 2} \boldsymbol {D} & \dots & b _ {2 n} \boldsymbol {D} \\ \vdots & \vdots & & \vdots \\ b _ {p 1} \boldsymbol {D} & b _ {p 2} \boldsymbol {D} & \dots & b _ {p n} \boldsymbol {D} \end{array} \right)
$$

$$
\begin{array}{l l} = & \left( \begin{array}{c c c c} \sum_ {j = 1} ^ {p} a _ {1 j} b _ {j 1} C D & \sum_ {j = 1} ^ {p} a _ {1 j} b _ {j 2} C D & \dots & \sum_ {j = 1} ^ {p} a _ {1 j} b _ {j n} C D \\ \sum_ {j = 1} ^ {p} a _ {2 j} b _ {j 1} C D & \sum_ {j = 1} ^ {p} a _ {2 j} b _ {j 2} C D & \dots & \sum_ {j = 1} ^ {p} a _ {2 j} b _ {j n} C D \\ \vdots & \vdots & & \vdots \\ \sum_ {j = 1} ^ {p} a _ {m j} b _ {j 1} C D & \sum_ {j = 1} ^ {p} a _ {m j} b _ {j 2} C D & \dots & \sum_ {j = 1} ^ {p} a _ {m j} b _ {j n} C D \end{array} \right) \\ = & (A B) \otimes (C D). \end{array}
$$

(4) 设 $A = (a_{ij})$ , $B = (b_{ij})$ 和 $C = (c_{ij})$ 分别是 $m \times n$ , $k \times l$ 和 $p \times q$ 矩阵, 则经计算即可发现 $(\boldsymbol{A} \otimes \boldsymbol{B}) \otimes \boldsymbol{C}$ 和 $\boldsymbol{A} \otimes (\boldsymbol{B} \otimes \boldsymbol{C})$ 都等于下面的 $mkp \times nlq$ 矩阵:

$$
\left( \begin{array}{c c c c c c c} a _ {1 1} b _ {1 1} \boldsymbol {C} & \dots & a _ {1 1} b _ {1 l} \boldsymbol {C} & \dots & a _ {1 n} b _ {1 1} \boldsymbol {C} & \dots & a _ {1 n} b _ {1 l} \boldsymbol {C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a _ {1 1} b _ {k 1} \boldsymbol {C} & \dots & a _ {1 1} b _ {k l} \boldsymbol {C} & \dots & a _ {1 n} b _ {k 1} \boldsymbol {C} & \dots & a _ {1 n} b _ {k l} \boldsymbol {C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a _ {m 1} b _ {1 1} \boldsymbol {C} & \dots & a _ {m 1} b _ {1 l} \boldsymbol {C} & \dots & a _ {m n} b _ {1 1} \boldsymbol {C} & \dots & a _ {m n} b _ {1 l} \boldsymbol {C} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a _ {m 1} b _ {k 1} \boldsymbol {C} & \dots & a _ {m 1} b _ {k l} \boldsymbol {C} & \dots & a _ {m n} b _ {k 1} \boldsymbol {C} & \dots & a _ {m n} b _ {k l} \boldsymbol {C} \end{array} \right)
$$

(7) 由 (3) 和 (5) 可得

$$
(\boldsymbol {A} \otimes \boldsymbol {B}) (\boldsymbol {A} ^ {- 1} \otimes \boldsymbol {B} ^ {- 1}) = (\boldsymbol {A} \boldsymbol {A} ^ {- 1}) \otimes (\boldsymbol {B} \boldsymbol {B} ^ {- 1}) = \boldsymbol {I} _ {m} \otimes \boldsymbol {I} _ {n} = \boldsymbol {I} _ {m n}.
$$

(8) 由 Laplace 定理容易证明:

$$
\left| \boldsymbol {A} \otimes \boldsymbol {I} _ {n} \right| = \left| \boldsymbol {A} \right| ^ {n}, \quad \left| \boldsymbol {I} _ {m} \otimes \boldsymbol {B} \right| = \left| \boldsymbol {B} \right| ^ {m};
$$

再由 (3) 以及矩阵乘积的行列式等于行列式的乘积可得

$$
| \boldsymbol {A} \otimes \boldsymbol {B} | = | (\boldsymbol {A} \otimes \boldsymbol {I} _ {n}) (\boldsymbol {I} _ {m} \otimes \boldsymbol {B}) | = | \boldsymbol {A} \otimes \boldsymbol {I} _ {n} | | \boldsymbol {I} _ {m} \otimes \boldsymbol {B} | = | \boldsymbol {A} | ^ {n} | \boldsymbol {B} | ^ {m}. \square
$$

例 6.99 设 A, B 分别为 $m \times n$ , $k \times l$ 矩阵, 求证: $\mathrm{r}(\boldsymbol{A} \otimes \boldsymbol{B}) = \mathrm{r}(\boldsymbol{A}) \cdot \mathrm{r}(\boldsymbol{B})$ .

证明 设 $\mathrm{r}(A)=r,\mathrm{r}(B)=s,P,Q,R,S$ 为可逆矩阵, 使得

$$
P A Q = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right), R B S = \left( \begin{array}{c c} I _ {s} & O \\ O & O \end{array} \right),
$$

则由性质 (7) 可知 $P \otimes R, Q \otimes S$ 均非异, 再由性质 (3) 可得

$$
(P \otimes R) (A \otimes B) (Q \otimes S) = (P A Q) \otimes (R B S) \sim \left( \begin{array}{c c} I _ {r s} & O \\ O & O \end{array} \right),
$$

于是 $\mathrm{r}(\boldsymbol{A}\otimes\boldsymbol{B})=rs=\mathrm{r}(\boldsymbol{A})\cdot\mathrm{r}(\boldsymbol{B}).$ □

例 6.100 设 A, B 分别为 $m \times n$ , $k \times l$ 矩阵, 求证: $A \otimes B$ 是行满秩阵 (列满秩阵) 的充要条件是 A, B 均为行满秩阵 (列满秩阵).

证明 由例 6.99 即得. □

下面的几道例题都涉及 Kronecker 积的特征值, 故在复数域 $\mathbb{C}$ 上考虑问题.

例 6.101 设 A, B 分别是 m, n 阶矩阵, A 的特征值为 $\lambda_{i}(1 \leq i \leq m)$ , B 的特征值为 $\mu_{j}(1 \leq j \leq n)$ , 求证: $A \otimes B$ 的特征值为 $\lambda_{i}\mu_{j}(1 \leq i \leq m; 1 \leq j \leq n)$ .

证明 由例6.39可知, 存在 $m$ 阶可逆矩阵 $\pmb{P}$ 以及 $n$ 阶可逆矩阵 $\pmb{Q}$ , 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & * & * \\ & \lambda_ {2} & * & * \\ & & \ddots & \vdots \\ & & & \lambda_ {m} \end{array} \right), \quad \boldsymbol {Q} ^ {- 1} \boldsymbol {B} \boldsymbol {Q} = \left( \begin{array}{c c c c} \mu_ {1} & * & * & * \\ & \mu_ {2} & * & * \\ & & \ddots & \vdots \\ & & & \mu_ {n} \end{array} \right).
$$

容易验证上三角矩阵的 Kronecker 积仍是上三角矩阵且 $(P^{-1}AP) \otimes (Q^{-1}BQ)$ 的主对角元素依次为

$$
\lambda_ {1} \mu_ {1}, \dots , \lambda_ {1} \mu_ {n}, \lambda_ {2} \mu_ {1}, \dots , \lambda_ {2} \mu_ {n}, \dots , \lambda_ {m} \mu_ {1} \dots , \lambda_ {m} \mu_ {n}.
$$

注意到 $(P^{-1}AP)\otimes (Q^{-1}BQ) = (P\otimes Q)^{-1}(A\otimes B)(P\otimes Q)$ ，故结论得证. □

下面的例子是例 6.1 的推广.

例 6.102 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AXB$ . 设 A 的特征值为 $\lambda_{i} (1 \leq i \leq m)$ , B 的特征值为 $\mu_{j} (1 \leq j \leq n)$ . 求证: 线性变换 $\varphi$ 的特征值为 $\lambda_{i}\mu_{j} (1 \leq i \leq m; 1 \leq j \leq n)$ .

证明 取 V 的一组基为 $m \times n$ 基础矩阵:

$$
\boldsymbol {E} _ {1 1}, \dots , \boldsymbol {E} _ {1 n}, \boldsymbol {E} _ {2 1}, \dots , \boldsymbol {E} _ {2 n}, \dots , \boldsymbol {E} _ {m 1}, \dots , \boldsymbol {E} _ {m n},
$$

我们首先证明 $\varphi$ 在这组基下的表示矩阵为 $A \otimes B'$ . 事实上,

$$
\varphi \left(\boldsymbol {E} _ {i j}\right) = \boldsymbol {A} \boldsymbol {E} _ {i j} \boldsymbol {B} = \boldsymbol {A} \boldsymbol {e} _ {i} \boldsymbol {f} _ {j} ^ {\prime} \boldsymbol {B} = \sum_ {k = 1} ^ {m} \sum_ {l = 1} ^ {n} a _ {k i} b _ {j l} \boldsymbol {E} _ {k l},
$$

其中 $e_{i}, f_{j}$ 分别是 m, n 维标准单位列向量, 故 $\varphi$ 的表示矩阵为

$$
\left( \begin{array}{c c c c} a _ {1 1} \boldsymbol {B} ^ {\prime} & a _ {1 2} \boldsymbol {B} ^ {\prime} & \dots & a _ {1 m} \boldsymbol {B} ^ {\prime} \\ a _ {2 1} \boldsymbol {B} ^ {\prime} & a _ {2 2} \boldsymbol {B} ^ {\prime} & \dots & a _ {2 m} \boldsymbol {B} ^ {\prime} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} \boldsymbol {B} ^ {\prime} & a _ {m 2} \boldsymbol {B} ^ {\prime} & \dots & a _ {m m} \boldsymbol {B} ^ {\prime} \end{array} \right) = \boldsymbol {A} \otimes \boldsymbol {B} ^ {\prime}.
$$

注意到 $B'$ 与 B 有相同的特征值, 故由例 6.101 可知, $\varphi$ 的特征值为 $\lambda_{i}\mu_{j}$ . □

例 6.103 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AXB$ . 证明: $\varphi$ 是线性自同构的充要条件是 A, B 都是可逆矩阵.

证明 例 4.16 作为本题的特例, 我们已经给出了两种证法, 其中证法 1 仍然可以适用于本题, 证法 2 则需改用例 6.99 进行讨论, 当然也可用第 4 章解答题 13 进行统一的处理, 请读者自行补充细节. 下面再给出两种证法.

证法3 由例6.102的证明过程可知, $\varphi$ 在基础矩阵这组基下的表示矩阵为 $A \otimes B'$ , 再由性质 (8) 可知 $|A \otimes B'| = |A|^n |B|^m$ , 故 $\varphi$ 是自同构当且仅当表示矩阵 $A \otimes B'$ 是可逆矩阵, 这也当且仅当 $A, B$ 都是可逆矩阵.

证法 4 由例 6.102 可知, $\varphi$ 是自同构当且仅当 $\varphi$ 所有的特征值 $\lambda_{i}\mu_{j} \neq 0$ , 这当且仅当所有的 $\lambda_{i} \neq 0$ 以及所有的 $\mu_{j} \neq 0$ , 这也当且仅当 A, B 都是可逆矩阵. □

例 6.104 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AXB$ . 证明: $\varphi$ 是幂零线性变换的充要条件是 A, B 至少有一个是幂零矩阵.

证明 先证充分性. 不妨设 A 是幂零矩阵, 即存在正整数 k, 使得 $A^{k} = O$ , 则 $\varphi^{k}(X) = A^{k} X B^{k} = O$ , 即 $\varphi^{k} = 0$ , 于是 $\varphi$ 是幂零线性变换.

再证必要性. 设 $A, B$ 都不是幂零矩阵, 即对任意给定的正整数 $k$ , $A^k \neq O$ , $B^k \neq O$ , 只要证明 $\varphi^k \neq 0$ 即可. 我们给出以下 4 种证法.

证法 1 不妨设 $A^{k}$ 的第 i 列非零, $B^{k}$ 的第 j 行非零, 即有列向量 $A^{k}e_{i} \neq 0$ , 行向量 $f_{j}^{\prime}B^{k} \neq 0$ , 其中 $e_{i}, f_{j}$ 分别是 m, n 维标准单位列向量, 于是

$$
\varphi^ {k} \left(\boldsymbol {E} _ {i j}\right) = \boldsymbol {A} ^ {k} \boldsymbol {E} _ {i j} \boldsymbol {B} ^ {k} = \boldsymbol {A} ^ {k} \boldsymbol {e} _ {i} \boldsymbol {f} _ {j} ^ {\prime} \boldsymbol {B} ^ {k} = \left(\boldsymbol {A} ^ {k} \boldsymbol {e} _ {i}\right) \left(\boldsymbol {f} _ {j} ^ {\prime} \boldsymbol {B} ^ {k}\right) \neq \boldsymbol {O}.
$$

证法 2 设 $P_{i}, Q_{i}$ 为可逆矩阵，使得 $P_{1}A^{k}Q_{1} = \text{diag}\{I_{r}, O\}$ ， $P_{2}B^{k}Q_{2} = \text{diag}\{I_{s}, O\}$ ，不妨设 $r \geq s \geq 1$ ，于是

$$
\varphi^ {k} \left(Q _ {1} P _ {2}\right) = P _ {1} ^ {- 1} \operatorname{diag} \left\{I _ {r}, O \right\} \operatorname{diag} \left\{I _ {s}, O \right\} Q _ {2} ^ {- 1} = P _ {1} ^ {- 1} \operatorname{diag} \left\{I _ {s}, O \right\} Q _ {2} ^ {- 1} \neq O.
$$

证法 3 由例 6.102 的证明过程可知, $\varphi^k$ 在基础矩阵这组基下的表示矩阵为 $A^k \otimes (B^k)'$ , 再由 Kronecker 积的定义可知 $A^k \otimes (B^k)' \neq O$ , 于是 $\varphi^k \neq 0$ .

证法 4 由例 6.13 可知, $\varphi$ 是幂零线性变换当且仅当 $\varphi$ 的所有特征值都等于零. 由于 $A, B$ 都不是幂零矩阵, 故 $A$ 的特征值 $\lambda_i$ 不全为零, $B$ 的特征值 $\mu_j$ 不全为零. 再由例 6.102 可知, $\varphi$ 的特征值 $\lambda_i \mu_j$ 也不全为零, 从而 $\varphi$ 不是幂零线性变换. □

例 6.57 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AXA$ , 其中 $A\in V$ . 证明: 若 A 可对角化, 则 $\varphi$ 也可对角化.

证法 2 由于 A 可对角化, 故存在可逆矩阵 P, 使得 $P^{-1}AP = \Lambda$ 为对角矩阵. 由例 6.102 可知, $\varphi$ 在基础矩阵这组基下的表示矩阵为 $A \otimes A'$ , 于是

$$
(\boldsymbol {P} \otimes (\boldsymbol {P} ^ {\prime}) ^ {- 1}) ^ {- 1} (\boldsymbol {A} \otimes \boldsymbol {A} ^ {\prime}) (\boldsymbol {P} \otimes (\boldsymbol {P} ^ {\prime}) ^ {- 1}) = \boldsymbol {\Lambda} \otimes \boldsymbol {\Lambda}
$$

为对角矩阵, 即 $A \otimes A'$ 可对角化, 从而 $\varphi$ 可对角化. $\square$ 

例 6.105 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AX - XB$ . 设 A 的特征值为 $\lambda_{i} (1 \leq i \leq m)$ , B 的特征值为 $\mu_{j} (1 \leq j \leq n)$ . 求证: 线性变换 $\varphi$ 的特征值为 $\lambda_{i} - \mu_{j} (1 \leq i \leq m; 1 \leq j \leq n)$ .

证明 取 $V$ 的一组基为 $m \times n$ 基础矩阵:

$$
\boldsymbol {E} _ {1 1}, \dots , \boldsymbol {E} _ {1 n}, \boldsymbol {E} _ {2 1}, \dots , \boldsymbol {E} _ {2 n}, \dots , \boldsymbol {E} _ {m 1}, \dots , \boldsymbol {E} _ {m n},
$$

类似例 6.102 的讨论可得, $\varphi$ 在上述基下的表示矩阵为 $A \otimes I_n - I_m \otimes B'$ . 由例 6.39 可知, 存在 $m$ 阶可逆矩阵 $P$ 以及 $n$ 阶可逆矩阵 $Q$ , 使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & * & * \\ & \lambda_ {2} & * & * \\ & & \ddots & \vdots \\ & & & \lambda_ {m} \end{array} \right), \quad \boldsymbol {Q} ^ {- 1} \boldsymbol {B} ^ {\prime} \boldsymbol {Q} = \left( \begin{array}{c c c c} \mu_ {1} & * & * & * \\ & \mu_ {2} & * & * \\ & & \ddots & \vdots \\ & & & \mu_ {n} \end{array} \right).
$$

注意到

$$
(P \otimes Q) ^ {- 1} (A \otimes I _ {n} - I _ {m} \otimes B ^ {\prime}) (P \otimes Q) = (P ^ {- 1} A P) \otimes I _ {n} - I _ {m} \otimes (Q ^ {- 1} B ^ {\prime} Q)
$$

是一个上三角矩阵, 其主对角元素依次为

$$
\lambda_ {1} - \mu_ {1}, \dots , \lambda_ {1} - \mu_ {n}, \lambda_ {2} - \mu_ {1}, \dots , \lambda_ {2} - \mu_ {n}, \dots , \lambda_ {m} - \mu_ {1}, \dots , \lambda_ {m} - \mu_ {n},
$$

由此即得结论. $\square$ 

例 6.91 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AX - XB$ . 求证: $\varphi$ 是线性自同构的充要条件是 A, B 没有公共的特征值. 此时, 对任一 $m \times n$ 矩阵 C, 矩阵方程 AX - XB = C 存在唯一解.

证法 2 由例 6.105 可知, $\varphi$ 是 $V$ 上的线性自同构当且仅当其表示矩阵 $A \otimes I_n - I_m \otimes B'$ 是可逆矩阵, 这当且仅当 $A, B$ 在复数域中没有公共的特征值. 由这一证明不难看出, 例 6.91 的结论在数域 $\mathbb{F}$ 上也成立. □

例 6.106 设 A, B 分别为 m, n 阶矩阵, V 为 $m \times n$ 矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为: $\varphi(X) = AX - XB$ . 证明: 若 A, B 都是幂零矩阵, 则 $\varphi$ 是幂零线性变换.

证明 因为 $A, B$ 都是幂零矩阵, 所以它们的特征值都为零. 由例6.105可知, $\varphi$ 的特征值也都为零, 于是 $\varphi$ 是幂零线性变换. 也可由矩阵的运算直接证明本题. $\square$ 

例 6.107 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X) = AX - XA$ , 其中 $A \in V$ . 证明: $\varphi$ 是幂零线性变换的充要条件是存在 $\lambda_{0} \in C$ , 使得 $A - \lambda_{0}I_{n}$ 是幂零矩阵.

证明 $\varphi$ 是幂零线性变换当且仅当 $\varphi$ 的特征值都为零, 由例6.105可知, 这当且仅当 $A$ 的 $n$ 个特征值都等于某个复数 $\lambda_0$ , 这也当且仅当 $A - \lambda_0 I_n$ 的特征值都为零, 即 $A - \lambda_0 I_n$ 是幂零矩阵. □

例 6.58 设 V 为 n 阶矩阵全体构成的线性空间, V 上的线性变换 $\varphi$ 定义为 $\varphi(X)=AX-XA$ , 其中 $A\in V$ . 证明: 若 A 可对角化, 则 $\varphi$ 也可对角化.

证法2 由于 $\pmb{A}$ 可对角化, 故存在可逆矩阵 $\pmb{P}$ , 使得 $P^{-1}AP = \Lambda$ 为对角矩阵. 由例6.105可知, $\varphi$ 在基础矩阵这组基下的表示矩阵为 $A \otimes I_n - I_n \otimes A'$ , 于是

$$
\left(\boldsymbol {P} \otimes \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1}\right) ^ {- 1} \left(\boldsymbol {A} \otimes \boldsymbol {I} _ {n} - \boldsymbol {I} _ {n} \otimes \boldsymbol {A} ^ {\prime}\right) \left(\boldsymbol {P} \otimes \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1}\right) = \boldsymbol {\Lambda} \otimes \boldsymbol {I} _ {n} - \boldsymbol {I} _ {n} \otimes \boldsymbol {\Lambda}
$$

为对角矩阵, 即 $A \otimes I_n - I_n \otimes A'$ 可对角化, 从而 $\varphi$ 可对角化. $\square$ 

例 6.108 设 $A=(a_{ij})$ 是 n 阶矩阵, $g(\lambda)=|\lambda I_{n}+A|$ . 求证: $n^{2}$ 阶矩阵

$$
\boldsymbol {B} = \left( \begin{array}{c c c c} a _ {1 1} \boldsymbol {I} _ {n} + \boldsymbol {A} & a _ {1 2} \boldsymbol {I} _ {n} & \dots & a _ {1 n} \boldsymbol {I} _ {n} \\ a _ {2 1} \boldsymbol {I} _ {n} & a _ {2 2} \boldsymbol {I} _ {n} + \boldsymbol {A} & \dots & a _ {2 n} \boldsymbol {I} _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} \boldsymbol {I} _ {n} & a _ {n 2} \boldsymbol {I} _ {n} & \dots & a _ {n n} \boldsymbol {I} _ {n} + \boldsymbol {A} \end{array} \right)
$$

是可逆矩阵的充要条件是 $g(A)$ 是可逆矩阵.

证明 显然 $B = A \otimes I_{n} + I_{n} \otimes A$ . 设 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则 $g(\lambda) = (\lambda + \lambda_{1})(\lambda + \lambda_{2}) \cdots (\lambda + \lambda_{n})$ . 由例 6.39 可知，存在 n 阶可逆矩阵 P，使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c c} \lambda_ {1} & * & * & * \\ & \lambda_ {2} & * & * \\ & & \ddots & \vdots \\ & & & \lambda_ {n} \end{array} \right).
$$

注意到

$$
(P \otimes P) ^ {- 1} B (P \otimes P) = (P ^ {- 1} A P) \otimes I _ {n} + I _ {n} \otimes (P ^ {- 1} A P)
$$

是一个上三角矩阵, 其主对角元素为 $\lambda_{i} + \lambda_{j} (1 \leq i, j \leq n)$ , 故

$$
| \boldsymbol {B} | = \prod_ {i, j = 1} ^ {n} (\lambda_ {i} + \lambda_ {j}) = \prod_ {i = 1} ^ {n} g (\lambda_ {i}).
$$

因为 $g(A)$ 的特征值为 $g(\lambda_{1}), g(\lambda_{2}), \cdots, g(\lambda_{n})$ ，所以 $|B| = |g(A)|$ ，从而 B 是可逆矩阵等价于 $g(A)$ 是可逆矩阵。☐

## § 6.8 基础训练

### 6.8.1 训练题

#### 一、单选题

1. 在下列条件中不是 n 阶矩阵 A 为可逆矩阵的充要条件的是（）.

(A) A 的特征值都不等于零

(B) A 的行列式不等于零

(C) A 的特征多项式的常数项不等于零

(D) A 有 n 个线性无关的特征向量

2. 若矩阵 A 适合 $A^{2}=I$ ，则 A 特征值可能的取值为（）.

(A) 0,1 

(B) 0, -1 

(C) 0,1,-1 

(D) 1, -1 

3. 设三阶矩阵 A 的特征值为 1, 0, -1, $f(x) = x^{2} - 2x - 1$ , 则 $f(A)$ 的特征值为 ( ).

(A) -2, -1, 2 

(B)-2,-1,-2 

(C) 2,1,-2 

(D) 2,0,-2 

4. 当 n 阶矩阵 A 适合条件（）时，它必相似于对角矩阵.

(A) A 有 n 个不同的特征向量

(B) A 是上三角矩阵

(C) A 有 n 个不同的特征值

(D) A 是可逆矩阵

5. n 阶矩阵 A 以任一 n 维非零列向量为特征向量的充要条件是（）.

(A) A 是对角矩阵

(B) A 是数量矩阵

(C) A 是单位矩阵

(D) A 是零矩阵

6. 下列矩阵相似于对角矩阵的是（）.

(A) $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ 

(B) $\begin{pmatrix}3&1\\-1&1\end{pmatrix}$ 

(C) $\begin{pmatrix}1&-2\\-2&0\end{pmatrix}$ 

(D) $\begin{pmatrix}2&-1&2\\5&-3&3\\-1&0&-2\end{pmatrix}$ 

7. 下列结论中错误的是（）.

(A) 属于不同特征值的特征向量必线性无关

(B) 属于同一特征值的特征向量必线性相关

(C) 相似矩阵必有相同的特征值

(D) 特征值相同的矩阵未必相似

8. 设 A 是 n 阶矩阵, 交换 A 的第一、第二行后再交换第一、第二列, 所得矩阵为 B, 则下列结论中正确的是 ( ).

(A) A 和 B 的特征值完全相同

(B) B 的特征值是 A 的特征值的相反数

(C) B 的特征值是 A 的特征值的平方

(D) A 和 B 的特征值无一定关系

9. 设矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 2 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & t \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c} 5 & 5 & 5 \\ 0 & 3 & 3 \\ 0 & 0 & 1 \end{array} \right),
$$

若 A 和 B 相似, 则 $t = (\quad)$ .

(A) 0 

(B) 1 

(C) 3 

(D) 5 

10. 若矩阵 A 只和自己相似, 则 ( ).

(A) A 必为单位矩阵

(B) A 必为零矩阵

(C) A 必为数量矩阵

(D) A 为任意对角矩阵

#### 二、填空题

1. 设矩阵 $A = \begin{pmatrix} 3 & 2 & -1 \\ t & -2 & 2 \\ 3 & s & -1 \end{pmatrix}$ 的一个特征向量为 $(1, -2, 3)'$ ，则 s, t 的值分别为（）.

2. 设矩阵 $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ 的逆矩阵 $A^{-1}$ 有一个特征向量 $\alpha = (1, k, 1)'$ ，则 $k = (\quad)$ .

3. 已知 12 是矩阵 $A = \begin{pmatrix} 7 & 4 & -1 \\ 4 & 7 & -1 \\ -4 & a & 4 \end{pmatrix}$ 的一个特征值, 则 $a = (\quad)$ , $A$ 的另外两个特征值分别为 ( ).

4. 设 A 是三阶矩阵, 已知 $\left|A + I_{3}\right| = 0, \left|A + 2I_{3}\right| = 0, \left|A + 3I_{3}\right| = 0$ , 则 $\left|A + 4I_{3}\right| = (\quad)$ .

5. 设 A 是三阶矩阵, 1, 2, 3 是它的特征值, 则 $2A^{2}A^{*} + I_{3}$ 的特征值是 ( ).

6. 设 A 是三阶矩阵, 1, -1, 2 是它的特征值, 则 $2A^{2} + 2A^{-1}$ 的特征值是 ( ).

7. 设 n 阶矩阵 A 满足 $\mathrm{r}(A + I_n) + \mathrm{r}(A - I_n) = n$ ，且 $A \neq I_n$ ，则 A 必有特征值（）.

8. 设 A, B 为 n 阶矩阵, 问 $AB + B, BA + B$ 是否有相同的特征值? ()

9. 设 $\alpha, \beta$ 是两个 n 维非零列向量，则矩阵 $I_{n} - \alpha\beta'$ 的特征值为（）.

10. 设 A 和 B 相似, 问 $A^{*}$ 和 $B^{*}$ 是否也相似? ()

11. 设矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \end{array} \right),
$$

问 A 和 B 相似吗? ( )

12. 设矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & x \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & y & 0 \\ 0 & 0 & - 1 \end{array} \right),
$$

若 A 和 B 相似, 则 x, y 的值分别为 ( ).

13. 矩阵 $A = \begin{pmatrix} -1 & 1 & 0 \\ -4 & 3 & 0 \\ 1 & 0 & 2 \end{pmatrix}$ 是否相似于对角阵？（）

14. 设 n 阶矩阵 A 的秩 r < n，则 A 至少有（）重零特征值.

15. 求极限

$$
\lim _ {n \rightarrow \infty} \left(\begin{array}{c c c}\frac {1}{2}&1&1\\0&\frac {1}{3}&2\\0&0&\frac {1}{5}\end{array}\right) ^ {n} = \left(\begin{array}{c c c}&&\\&&\end{array}\right).
$$

#### 三、解答题

1. 设矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c} a & - 1 & c \\ 5 & b & 3 \\ 1 - c & 0 & - a \end{array} \right)
$$

满足 $|\mathbf{A}| = -1$ ，又 $\mathbf{A}^{*}$ 有一个特征值 $\lambda_0$ 且对应的特征向量为 $(-1, - 1,1)^{\prime}$ ，试求 $a,b,c,\lambda_0$ 的值.

2. 求下列 n 阶矩阵的特征值:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a & b _ {1} & \dots & b _ {n - 1} \\ c _ {1} & a & & \\ \vdots & & \ddots & \\ c _ {n - 1} & & & a \end{array} \right).
$$

3. 设 A 为 n 阶实矩阵, 若对任意非零的 n 维实列向量 $\alpha$ , 总有 $\alpha^{\prime}A\alpha > 0$ , 则称 A 为亚正定矩阵. 求证: 亚正定矩阵 A 的所有特征值的实部都大于零.

4. 设 A, B 都是 n 阶矩阵, 满足: $A^{m} = I_{n}$ 且

$$
\boldsymbol {A} ^ {m - 1} \boldsymbol {B} ^ {m - 1} + \boldsymbol {A} ^ {m - 2} \boldsymbol {B} ^ {m - 2} + \dots + \boldsymbol {A B} + \boldsymbol {I} _ {n} = O.
$$

求证: B 的特征值为 1 的 m 次单位根.

5. 设 A 为 n 阶矩阵, 满足 $(A')^{m} = A^{k}$ , 其中 m, k 是互异的正整数. 求证: A 的特征值为 0 或单位根.

6. 设 $n$ 阶实矩阵 $\mathbf{A}$ 的主对角元素全是 1, 且 $\mathbf{A}$ 的特征值全是非负实数, 求证: $|\mathbf{A}| \leq 1$ .

7. 设 $S = \{A_{1}, A_{2}, \cdots, A_{r}\}$ 为 r 个互异的可逆矩阵构成的集合，且该集合关于矩阵乘法封闭，即对任意的 $M, N \in S$ ，有 $MN \in S$ 。证明： $\sum_{i=1}^{r} A_{i} = O$ 成立的充要条件是 $\operatorname{tr}\left(\sum_{i=1}^{r} A_{i}\right) = 0$ 。

8. 设 $A, B$ 为 $n$ 阶复矩阵, 且存在复数 $a, b$ , 使得 $AB - BA = aA + bB$ . 证明: 存在可逆矩阵 $P$ , 使得 $P^{-1}AP$ 和 $P^{-1}BP$ 都是上三角矩阵.

9. 设三阶矩阵 A 的特征值为 1, -1, 0, 对应的特征向量依次为 $(1, 2, 1)'$ , $(0, -2, 1)'$ , $(1, 1, 2)'$ , 试求 A.

10. 设有两个数列 $\{a_{n}\}, \{b_{n}\}, a_{1} = 1, b_{1} = -1, a_{n} = a_{n-1} + 2b_{n-1}, b_{n} = -a_{n-1} + 4b_{n-1}$ . 求证: $a_{n} = 2^{n+1} - 3^{n}, b_{n} = 2^{n} - 3^{n}$ .

11. 设 $\mathbf{A}$ 为数域 $\mathbb{F}$ 上的 $n$ 阶矩阵, $f(x), g(x)$ 为 $\mathbb{F}$ 上互素的多项式, 且它们在复数域中均无重根. 证明: 若 $\mathrm{r}(f(A)) + \mathrm{r}(g(A)) = n$ , 则 $\mathbf{A}$ 可对角化.

12. 设 $n$ 阶实矩阵 $\mathbf{A}$ 有一个特征值是 1 的三次虚根, 且 $\mathbf{A}$ 的极小多项式的次数等于 2, 求证: $\mathbf{A} + \mathbf{I}_n$ 是可逆矩阵.

13. 设 $A_{1}, A_{2}, \cdots, A_{m}$ 为 n 阶矩阵， $g(x) \in \mathbb{F}[x]$ ，使得 $g(A_{1}), g(A_{2}), \cdots, g(A_{m})$ 都是可逆矩阵。证明：存在 $h(x) \in \mathbb{F}[x]$ ，使得 $g(A_{i})^{-1} = h(A_{i}) (1 \leq i \leq m)$ 。

14. 设 n 阶矩阵 A 适合多项式 $f(x)=a_{m}x^{m}+a_{m-1}x^{m-1}+\cdots+a_{1}x+a_{0}$ ，其中 $|a_{m}|>\sum_{i=0}^{m-1}|a_{i}|$ 。求证：矩阵方程 $2X+AX=XA^{2}$ 只有零解。

15. 设 n 阶矩阵 A 的特征多项式为 $f(\lambda) = \lambda^{n} + a_{1}\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_{n}$ ， $\alpha$ 是 n 维列向量且 $(A^{n-1}\alpha, A^{n-2}\alpha, \cdots, A\alpha, \alpha)$ 是可逆矩阵，求证：

$$
\left(a _ {1}, a _ {2}, \dots , a _ {n}\right) ^ {\prime} = - \left(A ^ {n - 1} \alpha , A ^ {n - 2} \alpha , \dots , A \alpha , \alpha\right) ^ {- 1} A ^ {n} \alpha .
$$

### 6.8.2 训练题答案

#### 一、单选题

1. 应选择 (D).

2. 应选择 (D). A 的特征值 $\lambda_{0}$ 适合 $\lambda_{0}^{2}=1$ ，因此 $\lambda_{0}$ 可能的取值为 -1, 1.

3. 应选择 (A).

4. 应选择 (C).

5. 应选择 (B). 设 $e_i$ 是标准单位列向量, 则 $A e_i = \lambda_i e_i$ , 于是 $\pmb{A}$ 是对角矩阵. 进一步由 $\pmb{A} (e_i + e_j) = \lambda_0 (e_i + e_j)$ 可得 $\lambda_i = \lambda_j = \lambda_0$ , 因此 $\pmb{A}$ 是数量矩阵 $\lambda_0 I_n$ .

6. 应选择 (C). 由计算可知 (A), (B) 和 (D) 中矩阵都没有完全的特征向量系, 而 (C) 中矩阵有两个不同的特征值, 故相似于对角矩阵.

7. 应选择 (B). 比如 $I_{n}$ 有 n 个线性无关的特征向量都属于特征值 1.

8. 应选择 (A). 矩阵 $B = P_{12}AP_{12} = P_{12}^{-1}AP_{12}$ 和 $\pmb{A}$ 相似, 因此特征值相同.

9. 应选择 (D). 只需计算二者之迹即可.

10. 应选择 (C). 和任一可逆矩阵乘法可交换的矩阵必是数量矩阵.

#### 二、填空题

1. 按定义计算 $A\alpha = \lambda_{0}\alpha$ 可得线性方程组, 解之得 s = 6, t = -2.

2. 注意到逆矩阵 $A^{-1}$ 和 A 有相同的特征向量, 不必求出 $A^{-1}$ 即可求出 k=1 或 -2.

3. 由 $|12I_4 - A| = 0$ 求出 $a = -4$ . 由此即可求出另外两个特征值为 3,3.

4. 根据已知, 矩阵 $\mathbf{A}$ 有特征值 $-1, -2, -3$ , 因此矩阵 $A + 4I_{3}$ 有特征值 $3, 2, 1$ , $|A + 4I_{3}|$ 等于其特征值之积, 值为 6.

5. 首先可得 $|A| = 6$ , 又由 $AA^{*} = |A|I_{3}$ 可得 $2A^{2}A^{*} + I_{3} = 12A + I_{3}$ , 因此其特征值为 13, 25, 37.

6. 经计算可得特征值为 4,0,9.

7. 因为 $A \neq I$ ，故 $r(A - I) \neq 0$ ，于是 $r(A + I) < n$ ，即 $|I + A| = 0$ ，因此 A 有特征值 -1。

8. 注意到 $AB + B = (A + I_n)B, BA + B = B(A + I_n)$ , 故由例 6.19 可知 $AB + B, BA + B$ 有相同的特征值.

9. 由例6.19可得 $|\lambda I_n - (I_n - \alpha \beta')| = |(\lambda - 1)I_n + \alpha \beta'| = (\lambda - 1)^{n-1}(\lambda - 1 + \beta' \alpha)$ , 因此 $I_n - \alpha \beta'$ 有特征值 $1(n - 1$ 重), $1 - \beta' \alpha$ .

10. 设 $B = P^{-1}AP$ , 则 $B^{*} = (P^{-1}AP)^{*} = P^{*}A^{*}(P^{-1})^{*} = P^{*}A^{*}(P^{*})^{-1}$ . 因此 $A^{*}$ 和 $B^{*}$ 相似.

11. 相似.

12. 计算 A 和 B 的迹及行列式可算出 x = 0, y = 1.

13. 经计算可知属于二重特征值 1 的线性无关的特征向量只有一个, 因此 A 不能对角化.

14. 由已知, 0 是 A 的特征值并且其几何重数为 n - r, 故其代数重数大于等于 n - r.

15. 记矩阵为 $A$ , 显然 $A$ 有 3 个不同的特征值 $\frac{1}{2}, \frac{1}{3}, \frac{1}{5}$ , 因此存在可逆矩阵 $P$ , 使得 $P^{-1}AP = \operatorname{diag}\left\{\frac{1}{2}, \frac{1}{3}, \frac{1}{5}\right\} = B$ . 注意到 $A^n = PB^n P^{-1}$ 且 $B^n$ 的极限为零矩阵, 故 $A^n$ 的极限也是零矩阵.

#### 三、解答题

1. $A^{*} = |A|A^{-1} = -A^{-1}$ , 又 $A^{-1}$ 的特征向量也是 $A$ 的特征向量, 因此 $A$ 有特征值 $\lambda = -\frac{1}{\lambda_0}$ , 特征向量 $\alpha = (-1, -1, 1)'$ . 由 $A\alpha = \lambda\alpha$ 可得方程组, 再加上 $|A| = -1$ , 解之可求得 $\lambda_0 = 1, a = c = 2, b = -3$ .

2. 注意到 $|\lambda I_n - A|$ 是一个爪型行列式, 故由例 1.4 可得 $|\lambda I_n - A| = (\lambda - a)^{n-2} \left( (\lambda - a)^2 - \sum_{i=1}^{n-1} b_i c_i\right)$ , 于是 $A$ 的特征值为 $a (n-2 \text{重}), a \pm \sqrt{\sum_{i=1}^{n-1} b_i c_i}$ .

3. 设 $\lambda_0 = a + bi$ 是 $A$ 的特征值, $\eta$ 是属于 $\lambda_0$ 的特征向量. 将 $\eta$ 的实部和虚部分开, 记为 $\eta = \alpha + i\beta$ , 则 $A(\alpha + i\beta) = (a + bi)(\alpha + i\beta)$ . 分开实部和虚部可得 $A\alpha = a\alpha - b\beta$ , $A\beta = b\alpha + a\beta$ , 于是 $\alpha' A\alpha = a\alpha' \alpha - b\alpha' \beta$ , $\beta' A\beta = b\beta' \alpha + a\beta' \beta$ . 因此

$$
\alpha^ {\prime} A \alpha + \beta^ {\prime} A \beta = a (\alpha^ {\prime} \alpha + \beta^ {\prime} \beta). \tag {6.11}
$$

因为 $\alpha, \beta$ 中至少有一个是非零列向量，故由假设可知，(6.11) 式左边大于零，又 $\alpha' \alpha + \beta' \beta > 0$ ，因此 a > 0.

4. 将 B 右乘原式, 再将 A 左乘得到的等式, 注意到 $A^{m} = I_{n}$ , 故可得

$$
\boldsymbol {B} ^ {m} + \boldsymbol {A} ^ {m - 1} \boldsymbol {B} ^ {m - 1} + \dots + \boldsymbol {A B} = \boldsymbol {O}. \tag {6.12}
$$

将 (6.12) 式和原式相减得到 $B^{m} = I_{n}$ , 因此 $\pmb{B}$ 的特征值为 1 的 $m$ 次单位根.

5. 设 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则它们也是 $A'$ 的全体特征值。由 $(A')^{m} = A^{k}$ 可知，它们的全体特征值相同（不计顺序），即有 $\{\lambda_{1}^{m}, \lambda_{2}^{m}, \cdots, \lambda_{n}^{m}\} = \{\lambda_{1}^{k}, \lambda_{2}^{k}, \cdots, \lambda_{n}^{k}\}$ 。我们只要证明 $\lambda_{1}$ 等于零或者是单位根即可。从 $\lambda_{1}^{m}$ 出发，记 $i_{0} = 1$ ，故存在 $1 \leq i_{1} \leq n$ ，使得 $\lambda_{1}^{m} = \lambda_{i_{1}}^{k}$ ；又存在 $1 \leq i_{2} \leq n$ ，使得 $\lambda_{i_{1}}^{m} = \lambda_{i_{2}}^{k}; \cdots;$ 不断这样做下去。注意到对任意的正整数 l， $\lambda_{1}^{m^{l}} = \lambda_{i_{l}}^{k^{l}}$ 。由于特征值的下指标有限，故存在两个非负整数 r < s，使得 $i_{r} = i_{s}$ 。在 $\lambda_{i_{r}} = \lambda_{i_{s}}$ 两边同时 $k^{s}$ 次方，可得 $\lambda_{1}^{m^{r}k^{s-r}} = \lambda_{1}^{m^{s}}$ 。若 $\lambda_{1} \neq 0$ ，则由 $m \neq k$ 以及 $\lambda_{1}^{m^{s}-m^{r}k^{s-r}} = 1$ 可知 $\lambda_{1}$ 是单位根。

6. 设 A 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则 $n = \operatorname{tr}(A) = \lambda_{1} + \lambda_{2} + \cdots + \lambda_{n}$ 且 $|A| = \lambda_{1}\lambda_{2}\cdots\lambda_{n}$ ，由几何平均不超过算术平均即得 $|A| \leq 1$ .

7. 必要性显然, 现证充分性. 由 $A_{k}$ 非异可知 $A_{i}A_{k} \neq A_{j}A_{k} (i \neq j)$ , 再由乘法的封闭性可知 $S = \{A_{1}A_{k}, A_{2}A_{k}, \cdots, A_{r}A_{k}\}$ . 令 $A = \sum_{i=1}^{r} A_{i}$ , 则 $A^{2} = rA$ , 于是 $A$ 的特征值也适合 $x^{2} - rx$ , 从而只能是 0 和 $r$ . 由假设 $\operatorname{tr}(A) = 0$ , 故 $r$ 不可能是 $A$ 的特征值, 即 $A - rI_{n}$ 是非异阵. 最后由 $A(A - rI_{n}) = O$ 可得 $A = O$ . 也可以这样来讨论, 注意到 $A^{k} = r^{k-1}A (k \geq 1)$ , 故由 $\operatorname{tr}(A) = 0$ 可得 $\operatorname{tr}(A^{k}) = 0 (k \geq 1)$ . 由例 6.31 可知 $A$ 为幂零矩阵, 于是 $r^{n-1}A = A^{n} = O$ , 从而 $A = O$ .

8. 若 $a = b = 0$ , 则 $AB = BA$ , 由例 6.40 可知 $A, B$ 可以同时上三角化. 若 $a, b$ 不全为零, 不妨设 $a \neq 0$ , 可在等式 $AB - BA = aA + bB$ 两边除以 $a$ , 并用 $a^{-1}B$ 替代 $B$ , 故不妨设 $a = 1$ . 将上述等式改写为 $(A + bB)B - B(A + bB) = A + bB$ , 这不影响结论的证明, 故不妨设 $b = 0$ . 因此, 我们只要证明: 若 $AB - BA = A$ , 则 $A, B$ 可同时上三角化. 首先, 由例 6.32 可知 $A$ 的特征值全为零, 其特征子空间设为 $V_0$ , 则容易验证 $V_0$ 是 $B$ -不变子空间, 由此可证明 $A, B$ 有公共的特征向量. 再仿照例 6.40 的证明, 对阶数进行归纳即可完成证明.

9. 答案是

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 0 & 1 \\ 2 & - 2 & 1 \\ 1 & 1 & 2 \end{array} \right) \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & - 1 & 0 \\ 0 & 0 & 0 \end{array} \right) \left( \begin{array}{c c c} 1 & 0 & 1 \\ 2 & - 2 & 1 \\ 1 & 1 & 2 \end{array} \right) ^ {- 1} = \left( \begin{array}{c c c} 5 & - 1 & - 2 \\ 1 6 & - 4 & - 6 \\ 2 & 0 & - 1 \end{array} \right).
$$

10. 将数列化为矩阵形式:

$$
\binom{a _ {n}}{b _ {n}} = \left( \begin{array}{c c} 1 & 2 \\ - 1 & 4 \end{array} \right) \binom{a _ {n - 1}}{b _ {n - 1}} = \left( \begin{array}{c c} 1 & 2 \\ - 1 & 4 \end{array} \right) ^ {n - 1} \binom{1}{- 1}.
$$

参考例 6.54 的方法, 计算出 $\begin{pmatrix}1 & 2 \\ -1 & 4\end{pmatrix}^{n-1} = \begin{pmatrix}2^{n} - 3^{n-1} & 2 \cdot 3^{n-1} - 2^{n}\\ 2^{n-1} - 3^{n-1} & 2 \cdot 3^{n-1} - 2^{n-1}\end{pmatrix}$ ，由此即得结论.

11. 由例5.77可知 $f(A)g(A) = O$ ，即 $A$ 适合多项式 $f(x)g(x)$ . 注意到 $f(x), g(x)$ 在复数域中均无重根且 $(f(x), g(x)) = 1$ ，故 $f(x)g(x)$ 在复数域中也无重根，再由例6.66可知 $A$ 可对角化.

12. 因为 A 是实矩阵, 所以 1 的另外一个三次虚根也是 A 的特征值. 由于 A 的极小多项式次数等于 2 且含有 A 的所有特征值, 故必为 $x^{2} + x + 1$ . 由 $A^{2} + A + I_{n} = O$ 可知 $A + I_{n}$ 可逆.

13. 设 $A = \text{diag}\{A_1, A_2, \cdots, A_m\}$ ，则 $g(A) = \text{diag}\{g(A_1), g(A_2), \cdots, g(A_m)\}$ 也是可逆矩阵。由例 6.86 可知，存在多项式 $f(x) \in \mathbb{F}[x]$ ，使得 $g(A)^{-1} = f(g(A))$ 。令 $h(x) = f(g(x)) \in \mathbb{F}[x]$ ，则由上式可得 $g(A_i)^{-1} = h(A_i) (1 \leq i \leq m)$ 。

14. 任取 A 的特征值 $\lambda_{0}$ ，则 $f(\lambda_{0}) = 0$ ，我们断言 $|\lambda_{0}| < 1$ 。用反证法，若 $|\lambda_{0}| \geq 1$ ，则 $|a_{m}| = \left| -\sum_{i=0}^{m-1} a_{i} \lambda_{0}^{-m+i} \right| \leq \sum_{i=0}^{m-1} |a_{i}| |\lambda_{0}|^{-m+i} \leq \sum_{i=0}^{m-1} |a_{i}|$ ，这与假设矛盾。将矩阵方程整理为 $(A + 2I_{n})X = X A^{2}$ ，注意到 $A + 2I_{n}$ 的特征值落在 $D_{1}: |z - 2| < 1$ 中， $A^{2}$ 的特征值落在 $D_{2}: |z| < 1$ 中，显然这两个开圆盘不相交，故 $A + 2I_{n}$ 和 $A^{2}$ 没有公共的特征值，最后由例 6.88 可知矩阵方程只有零解。

15. 只需证明 $-(A^{n-1}\alpha, A^{n-2}\alpha, \cdots, \alpha)(a_{1}, a_{2}, \cdots, a_{n})' = A^{n}\alpha$ ，而这由 Cayley-Hamilton 定理即得.
