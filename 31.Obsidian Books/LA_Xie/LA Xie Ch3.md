# 线性空间与线性方程组

## § 3.1 基本概念

## 3.1.1 向量与向量空间

## 1. 定义

设 F 是一个数域, F 中 n 个元素 $a_{1}, a_{2}, \cdots, a_{n}$ 组成的有序组 $\boldsymbol{\alpha} = (a_{1}, a_{2}, \cdots, a_{n})$ 称为数域 F 上的一个 n 维行向量. 若将这 n 个元素排成一列:

$$
\boldsymbol {\alpha} ^ {\prime} = \left( \begin{array}{c} a _ {1} \\ a _ {2} \\ \vdots \\ a _ {n} \end{array} \right),
$$

则称之为 n 维列向量.

## 2. 向量的运算

若 $\boldsymbol{\alpha}=(a_{1},a_{2},\cdots,a_{n}),\boldsymbol{\beta}=(b_{1},b_{2},\cdots,b_{n})$ ，定义向量加法为

$$
\alpha + \beta = (a _ {1} + b _ {1}, a _ {2} + b _ {2}, \dots , a _ {n} + b _ {n}).
$$

又若 $k \in \mathbb{F}$ , 定义 $k$ 与 $\alpha$ 的数乘为

$$
k \alpha = (k a _ {1}, k a _ {2}, \dots , k a _ {n}).
$$

## 3. 向量运算适合的规则

(1) 加法交换律: $\alpha + \beta = \beta + \alpha;$ 

(2) 加法结合律: $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$ ;

(3) $\alpha + 0 = \alpha;$ 

(4) $\alpha + (-\alpha) = 0;$ 

(5) $1 \cdot \alpha = \alpha;$ 

(6) $k(\alpha + \beta) = k\alpha + k\beta;$ 

(7) $(k + l)\alpha = k\alpha + l\alpha$ ; 

(8) $k(l\alpha) = (kl)\alpha$ 

## 4. 定义

设 $V$ 是一个集合, $\mathbb{F}$ 是数域, 若在 $V$ 上定义了元素的加法和 $\mathbb{F}$ 中的数对 $V$ 中元素的数乘, 且这两种运算适合上面的 8 条运算规则, 则称 $V$ 是数域 $\mathbb{F}$ 上的线性空间或向量空间.

## 3.1.2 向量的线性关系

## 1. 定义

设 V 是数域 F 上的向量空间, $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 是 V 中的向量, 若存在 F 中不全为零的 m 个数 $a_{1}, a_{2}, \cdots, a_{m}$ , 使得

$$
a _ {1} \boldsymbol {\alpha} _ {1} + a _ {2} \boldsymbol {\alpha} _ {2} + \dots + a _ {m} \boldsymbol {\alpha} _ {m} = \mathbf {0},
$$

则称向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性相关. 反之, 若不存在这样的数使得上式成立, 则称 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性无关.

## 2. 定义

设 V 是数域 F 上的向量空间, $\beta, \alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 是 V 中向量, 若存在 F 中 m 个数 $a_{1}, a_{2}, \cdots, a_{m}$ , 使得

$$
\boldsymbol {\beta} = a _ {1} \boldsymbol {\alpha} _ {1} + a _ {2} \boldsymbol {\alpha} _ {2} + \dots + a _ {m} \boldsymbol {\alpha} _ {m},
$$

则称向量 $\beta$ 是 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的线性组合, 或称向量 $\beta$ 可用向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 来线性表示 (或线性表出).

## 3. 定理

设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m},\beta$ 是线性空间 V 中的向量.

(1) 若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性相关，则任意一组包含这组向量的向量组必线性相关；若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关，则从这组向量中任意取出一组向量必线性无关.

(2) 向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性相关的充要条件是其中至少有一个向量可以表示为其余向量的线性组合.

(3) 若 $\beta$ 可表示为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 的线性组合，即

$$
\boldsymbol {\beta} = k _ {1} \boldsymbol {\alpha} _ {1} + k _ {2} \boldsymbol {\alpha} _ {2} + \dots + k _ {m} \boldsymbol {\alpha} _ {m},
$$

则表示唯一的充要条件是向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关.

## 4. 定理

设向量组 $A=\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}, B=\{\beta_{1},\beta_{2},\cdots,\beta_{n}\}$ 和 $C=\{\gamma_{1},\gamma_{2},\cdots,\gamma_{p}\}$ 满足：A 中任一向量都是 B 中向量的线性组合，B 中任一向量都是 C 中向量的线性组合，则 A 中任一向量都是 C 中向量的线性组合.

## 3.1.3 基与维数

## 1. 定义

设线性空间 V 中有一族向量 S，如果在 S 中存在一组向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ ，适合如下条件：

(1) $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ 线性无关;

(2) S 中任一向量都可以用 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性表示,

则称向量组 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{r}\}$ 是向量族 S 的极大无关组。向量族的极大无关组可能有许多，但由下面的定理可得：每个极大无关组所含向量的个数都相同。这个数称为向量族的秩。

## 2. 定理

设 $A, B$ 是两组向量, $A$ 含有 $r$ 个向量, $B$ 含有 $s$ 个向量, 且 $A$ 中每个向量均可用 $B$ 中向量线性表示. 若 $A$ 中向量线性无关, 则 $r \leq s$ .

## 3. 定义

数域 $\mathbb{F}$ 上的向量空间 $V$ 的一个极大无关组称为 $V$ 的一组基. 若 $V$ 的基含 $n$ 个向量, 则称 $V$ 是 $n$ 维向量空间.

在向量空间 V 中引进一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 以后，V 中任意一个向量 $\alpha$ 有且只有一种方法表示为基向量的线性组合。设 $\alpha = a_{1}e_{1} + a_{2}e_{2} + \cdots + a_{n}e_{n}$ ，则称 n 维列向量 $(a_{1}, a_{2}, \cdots, a_{n})'$ 为向量 $\alpha$ 在基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 下的坐标向量。映射$\varphi: V \to \mathbb{F}^{n}, \varphi(\alpha) = (a_{1}, a_{2}, \cdots, a_{n})'$ ，是一个一一对应.

## 4. 定义

设 $V$ 和 $U$ 都是数域 $\mathbb{F}$ 上的线性空间, 若存在 $V$ 到 $U$ 的映射 $\varphi$ 适合条件:

(1) $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$ 对任意的 $\alpha, \beta \in V$ 成立;

(2) $\varphi(k\alpha) = k\varphi(\alpha)$ 对任意的 $\alpha \in V, k \in \mathbb{F}$ 成立;

(3) $\varphi$ 是一一对应的，

则称 $\varphi$ 是 V 到 U 的线性同构.

将任一向量映射为它在给定基下的坐标向量的映射 $\varphi: V \rightarrow F^{n}$ 是线性同构.

## 5. 定理

(1) 同构关系是一种等价关系;

(2) 线性同构不仅将线性相关的向量组映射为线性相关的向量组, 而且将线性无关的向量组映射为线性无关的向量组;

(3) 同一个数域 $\mathbb{F}$ 上的线性空间同构的充要条件是它们具有相同的维数.

## 3.1.4 基变换与过渡矩阵

## 1. 过渡矩阵

设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 和 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 是 n 维线性空间 V 的两组基，若

$$
\left\{ \begin{array}{l} f _ {1} = a _ {1 1} e _ {1} + a _ {2 1} e _ {2} + \dots + a _ {n 1} e _ {n}, \\ f _ {2} = a _ {1 2} e _ {1} + a _ {2 2} e _ {2} + \dots + a _ {n 2} e _ {n}, \\ \dots \dots \\ f _ {n} = a _ {1 n} e _ {1} + a _ {2 n} e _ {2} + \dots + a _ {n n} e _ {n}, \end{array} \right.
$$

则矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right)
$$

称为从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵.

## 2. 同一向量在不同基下坐标向量的关系

设 V 是数域 F 上 n 维线性空间, 从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵为 $A = (a_{ij})$ . 若 V 中向量 $\alpha$ 在基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 下的坐标向量是 $(x_{1}, x_{2}, \cdots, x_{n})'$ , 在基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 下的坐标向量是 $(y_{1}, y_{2}, \cdots, y_{n})'$ , 则

$$
\left( \begin{array}{c} x _ {1} \\ x _ {2} \\ \vdots \\ x _ {n} \end{array} \right) = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right) \left( \begin{array}{c} y _ {1} \\ y _ {2} \\ \vdots \\ y _ {n} \end{array} \right).
$$

## 3. 定理

矩阵 A 是 n 维线性空间 V 的基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵，则 A 是可逆矩阵且从基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 到基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 的过渡矩阵为 $A^{-1}$ 。又若 B 是从基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 到基 $\{g_{1}, g_{2}, \cdots, g_{n}\}$ 的过渡矩阵，则从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{g_{1}, g_{2}, \cdots, g_{n}\}$ 的过渡矩阵为 AB。

## 3.1.5 子空间

## 1. 定义

设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, $U$ 是 $V$ 的非空子集, 若 $U$ 在 $V$ 的向量加法与数乘下也成为线性空间, 则称 $U$ 是 $V$ 的子空间.

要验证线性空间 $V$ 的非空子集 $U$ 是子空间, 只要验证 $U$ 中元素在向量加法与数乘下封闭即可.

## 2. 子空间的运算

设 $V_{1}, V_{2}$ 是线性空间 $V$ 的子空间, 定义 $V_{1} + V_{2} = \{v_{1} + v_{2} \mid v_{1} \in V_{1}, v_{2} \in V_{2}\}$ , 则 $V_{1} + V_{2}$ 是 $V$ 的子空间, 称为 $V_{1}$ 与 $V_{2}$ 的和空间. 又交集 $V_{1} \cap V_{2}$ 也是 $V$ 的子空间, 称为 $V_{1}$ 与 $V_{2}$ 的交空间.

## 3. 生成

设 $S$ 是线性空间 $V$ 的子集, $V$ 中所有包含 $S$ 的子空间的交称为由子集 $S$ 生成的子空间, 记为 $L(S)$ . $L(S)$ 是 $V$ 中包含子集 $S$ 的最小子空间, 它由 $S$ 中向量所有可能的线性组合组成.

## 4. 直和

设 $V_{1}, V_{2}, \cdots, V_{k}$ 是线性空间 V 的子空间，若对任意的 $i (1 \leq i \leq k)$ ，均有

$$
V _ {i} \cap (V _ {1} + \dots + V _ {i - 1} + V _ {i + 1} + \dots + V _ {k}) = 0,
$$

则称和 $V_{1} + V_{2} + \cdots + V_{k}$ 是直接和, 简称直和, 记为 $V_{1} \oplus V_{2} \oplus \cdots \oplus V_{k}$ .

## 5. 定理

设 $V_{1}, V_{2}, \cdots, V_{k}$ 是线性空间 V 的子空间， $V_{0} = V_{1} + V_{2} + \cdots + V_{k}$ ，则下列命题等价：

(1) $V_{0}=V_{1}\oplus V_{2}\oplus\cdots\oplus V_{k}$ 是直和;

(2) 对任意的 $2 \leq i \leq k$ ，有 $V_{i} \cap (V_{1} + V_{2} + \cdots + V_{i-1}) = 0;$ 

(3) $\dim V_{0} = \dim V_{1} + \dim V_{2} + \cdots + \dim V_{k};$ 

(4) $V_{1}, V_{2}, \cdots, V_{k}$ 的一组基可以拼成 $V_{0}$ 的一组基;

(5) $V_{0}$ 中的向量表示为 $V_{1}, V_{2}, \cdots, V_{k}$ 中的向量之和时其表示唯一.

## 6. 定理 (交和空间维数公式)

设 $V_{1}, V_{2}$ 是线性空间 V 的两个子空间，则

$$
\dim (V _ {1} + V _ {2}) = \dim V _ {1} + \dim V _ {2} - \dim (V _ {1} \cap V _ {2}).
$$

## 3.1.6 矩阵的秩

## 1. 定义

设 A 是 $m \times n$ 矩阵, A 的行向量组 (或列向量组) 的秩定义为 A 的秩.

## 2. 定理

矩阵的秩在矩阵的初等变换下不变.

## 3. 推论

(1) 对任意一个秩为 $r$ 的 $m \times n$ 矩阵 $\mathbf{A}$ , 总存在 $m$ 阶非异阵 $\mathbf{P}$ 和 $n$ 阶非异阵 $\mathbf{Q}$ , 使得

$$
P A Q = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

(2) 任一矩阵与非异阵相乘, 其秩不变.

(3) $n$ 阶方阵是可逆阵的充要条件是它是满秩阵, 即它的秩等于 $n$ .

(4) 两个 $m \times n$ 矩阵等价 (相抵) 的充要条件是它们具有相同的秩.

## 4. 定理

矩阵 $\mathbf{A}$ 的秩等于 $r$ 的充要条件是 $\mathbf{A}$ 有一个 $r$ 阶子式不等于零, 而 $\mathbf{A}$ 的所有 $r + 1$ 阶子式都等于零.

## 3.1.7 线性方程组的解

## 1. 定理

设有 $n$ 个未知数 $m$ 个方程式组成的线性方程组

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1} + a _ {1 2} x _ {2} + \dots + a _ {1 n} x _ {n} = b _ {1}, \\ a _ {2 1} x _ {1} + a _ {2 2} x _ {2} + \dots + a _ {2 n} x _ {n} = b _ {2}, \\ \dots \dots \\ a _ {m 1} x _ {1} + a _ {m 2} x _ {2} + \dots + a _ {m n} x _ {n} = b _ {m}. \end{array} \right.
$$

它的系数矩阵记为 A, 增广矩阵记为 $\tilde{A}$ , 则

(1) 若 $\widetilde{A}$ 和 $A$ 的秩都等于 $n$ , 则方程组有且只有一组解.

(2) 若 $\widetilde{A}$ 和 $A$ 的秩相等但小于 $n$ , 则方程组有无穷多组解.

(3) 若 $\widetilde{A}$ 和 A 的秩不相等，则方程组无解.

## 2. 定义

设 Ax = 0 是 n 个变元 m 个方程式的齐次线性方程组. 假设 $\eta_{1}, \eta_{2}, \cdots, \eta_{k}$ 是它的一组解向量, 若这组解向量线性无关且方程组的任意一个解向量均可表示为它们的线性组合, 则 $\eta_{1}, \eta_{2}, \cdots, \eta_{k}$ 称为齐次线性方程组 Ax = 0 的一个基础解系.

## 3. 定理

设 Ax = 0 是 n 个变元 m 个方程式的齐次线性方程组. 假设系数矩阵 A 的秩等于 r < n, 则方程组有非零解且每个基础解系均由 n - r 个向量组成.

## 4. 定理

设 $Ax = \beta$ 是 $n$ 个变元 $m$ 个方程式的非齐次线性方程组. 假设 $\pmb{A}$ 的秩等于增广矩阵 $\widetilde{\pmb{A}}$ 的秩, 又假设该方程组的相伴齐次线性方程组 (或称导出组) $\pmb{A}\pmb{x} = \pmb{0}$ 的基础解系为 $\eta_{1},\eta_{2},\cdots,\eta_{n-r}$ ，向量 $\gamma$ 是 Ax= $\beta$ 的一个解（也称为特解），则非齐次线性方程组 Ax= $\beta$ 的所有解均可表示为下列形状：

$$
a _ {1} \eta_ {1} + a _ {2} \eta_ {2} + \dots + a _ {n - r} \eta_ {n - r} + \gamma ,
$$

其中 $a_{1}, a_{2}, \cdots, a_{n-r}$ 可取任意数.

## § 3.2 向量的线性关系

对线性空间 V 中的一组向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ ，判定它们是线性相关还是线性无关，这是线性空间理论中的一个基本问题。处理这类问题通常有两种方法，一种是代数方法，即矩阵的初等变换以及秩的理论；另一种是几何方法，即向量线性关系的定义以及发展起来的线性空间理论。

## 1. 代数方法和具体计算问题

矩阵 $\mathbf{A}$ 的第 $i$ 行从左至右第一个非零元素称为第 $i$ 行的阶梯点. 若矩阵 $\mathbf{A}$ 的阶梯点的列指标随着行数严格递增, 则称这样的矩阵为阶梯形矩阵. 利用数学归纳法容易证明: 对任一矩阵 $\mathbf{A}$ , 经过若干次初等行变换之后, 均可以化为阶梯形矩阵.

例 3.1 设 A 是 $m \times n$ 阶梯形矩阵, 证明: A 的秩等于其非零行的个数, 且阶梯点所在的列向量是 A 的列向量的极大无关组.

证明 设

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c c c} 0 & \dots & a _ {1 k _ {1}} & \dots & \dots & \dots & \dots & \dots \\ 0 & \dots & 0 & \dots & a _ {2 k _ {2}} & \dots & \dots & \dots \\ \vdots & & \vdots & & \vdots & & \vdots & \vdots \\ 0 & \dots & 0 & \dots & 0 & \dots & a _ {r k _ {r}} & \dots \\ & & & O \end{array} \right),
$$

其中 $a_{1k_{1}}, a_{2k_{2}}, \cdots, a_{rk_{r}}$ 是 A 的阶梯点. 设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 是 A 的前 r 行, 我们先证明它们线性无关. 设

$$
c _ {1} \alpha_ {1} + c _ {2} \alpha_ {2} + \dots + c _ {r} \alpha_ {r} = 0,
$$

其中 $c_{1}, c_{2}, \cdots, c_{r}$ 是常数. 上式是关于 n 维行向量的等式, 先考察行向量的第 $k_{1}$ 分量, 可得 $c_{1}a_{1k_{1}} = 0$ . 因为 $a_{1k_{1}} \neq 0$ , 故 $c_{1} = 0$ ; 再依次考察行向量的第 $k_{2}, \cdots, k_{r}$ 分量.

量, 最后可得 $c_{1}=c_{2}=\cdots=c_{r}=0$ . 因此 $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ 线性无关, 从而 A 的秩等于 r, 即其非零行的个数.

再将 r 个阶梯点所在的列向量取出, 拼成一个新的矩阵:

$$
B = \left( \begin{array}{c c c c} a _ {1 k _ {1}} & \dots & \dots & \dots \\ 0 & a _ {2 k _ {2}} & \dots & \dots \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & a _ {r k _ {r}} \\ & O \end{array} \right).
$$

采用相同的方法可证明矩阵 B 的前 r 行线性无关, 因此 $\mathrm{r}(B)=r$ , 从而阶梯点所在的列向量组的秩也等于 r. 又因为 $\mathrm{r}(A)=r$ , 故它们是 A 的列向量的极大无关组. □

例 3.2 设 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 是一个 $m \times n$ 矩阵， $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 是列向量。P 是一个 m 阶可逆矩阵， $B = P A = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ ，其中 $\beta_{j} = P \alpha_{j} (1 \leq j \leq n)$ 。证明：若 $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 是 A 的列向量的极大无关组，则 $\beta_{i_{1}}, \beta_{i_{2}}, \cdots, \beta_{i_{r}}$ 是 B 的列向量的极大无关组。

证明 先证明向量组 $\beta_{i_{1}}, \beta_{i_{2}}, \cdots, \beta_{i_{r}}$ 线性无关. 设

$$
c _ {1} \boldsymbol {\beta} _ {i _ {1}} + c _ {2} \boldsymbol {\beta} _ {i _ {2}} + \dots + c _ {r} \boldsymbol {\beta} _ {i _ {r}} = \mathbf {0},
$$

即

$$
c _ {1} P \alpha_ {i _ {1}} + c _ {2} P \alpha_ {i _ {2}} + \dots + c _ {r} P \alpha_ {i _ {r}} = 0.
$$

已知 P 是可逆矩阵, 因此

$$
c _ {1} \alpha_ {i _ {1}} + c _ {2} \alpha_ {i _ {2}} + \dots + c _ {r} \alpha_ {i _ {r}} = 0.
$$

而向量组 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 线性无关，故 $c_{1}=c_{2}=\cdots=c_{r}=0$ ，这证明了向量组 $\beta_{i_{1}},\beta_{i_{2}},\cdots,\beta_{i_{r}}$ 线性无关。要证这是 B 的列向量的极大无关组，只需证明 B 的任意一个列向量都是这些向量的线性组合即可。设 $\beta_{j}$ 是 B 的任意一个列向量，则 $\beta_{j}=P\alpha_{j}$ 。因为 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 是 A 的列向量的极大无关组，故 $\alpha_{j}$ 可用 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 线性表示。不妨设

$$
\boldsymbol {\alpha} _ {j} = b _ {1} \boldsymbol {\alpha} _ {i _ {1}} + b _ {2} \boldsymbol {\alpha} _ {i _ {2}} + \dots + b _ {r} \boldsymbol {\alpha} _ {i _ {r}},
$$

则

$$
\boldsymbol {P} \alpha_ {j} = b _ {1} \boldsymbol {P} \alpha_ {i _ {1}} + b _ {2} \boldsymbol {P} \alpha_ {i _ {2}} + \dots + b _ {r} \boldsymbol {P} \alpha_ {i _ {r}},
$$

即

$$
\beta_ {j} = b _ {1} \beta_ {i _ {1}} + b _ {2} \beta_ {i _ {2}} + \dots + b _ {r} \beta_ {i _ {r}}. \square
$$

注 (1) 由于矩阵的秩在初等变换下不变, 因此由例 3.1 得到一个求矩阵秩的方法: 用初等行变换将一个矩阵 $A$ 化为阶梯形矩阵 $B$ , 则矩阵 $B$ 的非零行个数就是矩阵 $A$ 的秩.

(2) 求矩阵秩的方法也可以用来求行 (列) 向量组的秩, 方法是将行 (列) 向量组拼成一个矩阵, 用初等变换求出矩阵的秩, 由于矩阵的秩就是其行 (列) 向量组的秩, 从而就得到了向量组的秩.

(3) 知道向量组的秩之后, 我们就可以判定向量组是否线性相关了. 若向量组的秩等于向量的个数, 则向量组线性无关; 若向量组的秩小于向量的个数, 则向量组线性相关.

(4) 进一步还可以求行 (列) 向量组的极大无关组, 注意此时应将行 (列) 向量组按列分块的方式拼成矩阵 $A$ , 并用初等行变换将矩阵变为阶梯形矩阵 $B$ . 由例 3.1 知 $B$ 的阶梯点所在的列向量是 $B$ 的列向量的极大无关组, 再由例 3.2 知初等行变换保持 $A, B$ 列向量的极大无关组的列指标, 从而可得 $A$ 的列向量的极大无关组.

遇到具体的行（列）向量组，要判定线性相关还是线性无关，或者要求出它的秩和极大无关组，我们通常都是利用上面的代数方法去做。

例 3.3 求下列向量组的秩:

$$
(1, 0, - 1, 3, - 2), (2, 1, 0, - 1, 0), (3, 1, - 1, 2, - 2).
$$

解 将向量拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left(\begin{array}{c c c c c}1&0&- 1&3&- 2\\2&1&0&- 1&0\\3&1&- 1&2&- 2\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}1&0&- 1&3&- 2\\0&1&2&- 7&4\\0&0&0&0&0\end{array}\right),
$$

上述矩阵的秩为 2, 故向量组的秩也为 2. □

例 3.4 判定下列两组向量是线性相关还是线性无关:

(1) $(-1,3,1),(2,1,0),(1,4,1);$ 

(2) $(2,3,0),(-1,4,0),(0,0,2).$ 

解 (1) 将向量拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left( \begin{array}{c c c} - 1 & 3 & 1 \\ 2 & 1 & 0 \\ 1 & 4 & 1 \end{array} \right) \to \left( \begin{array}{c c c} - 1 & 3 & 1 \\ 0 & 7 & 2 \\ 0 & 7 & 2 \end{array} \right) \to \left( \begin{array}{c c c} - 1 & 3 & 1 \\ 0 & 7 & 2 \\ 0 & 0 & 0 \end{array} \right),
$$

上述矩阵的秩等于 2, 故向量组线性相关.

(2) 将向量拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left( \begin{array}{c c c} 2 & 3 & 0 \\ - 1 & 4 & 0 \\ 0 & 0 & 2 \end{array} \right) \to \left( \begin{array}{c c c} - 1 & 4 & 0 \\ 2 & 3 & 0 \\ 0 & 0 & 2 \end{array} \right) \to \left( \begin{array}{c c c} - 1 & 4 & 0 \\ 0 & 1 1 & 0 \\ 0 & 0 & 2 \end{array} \right),
$$

上述矩阵秩等于 3, 故向量组线性无关. □

要判定一个向量 $\beta$ 是向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的线性组合, 也可以用矩阵方法. 先求出向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的秩, 再求出向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m},\beta$ 的秩, 如果两者相等, 则 $\beta$ 可用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性表示, 否则 $\beta$ 不能用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性表示. 这种方法实际上和求解非齐次线性方程组是一回事, 即判断是否存在 $x_{1},x_{2},\cdots,x_{m}$ , 使得 $\beta = x_{1}\alpha_{1} + x_{2}\alpha_{2} + \cdots + x_{m}\alpha_{m}$ . 求出 $x_{i}$ 就可以得到具体的表达式, 同时还可以判断表示是否唯一.

例 3.5 判定下列向量 $\beta$ 能否用向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性表示:

$$
\beta = (5, 4, - 2, 4); \alpha_ {1} = (1, 0, - 1, 3), \alpha_ {2} = (2, 1, 0, 1), \alpha_ {3} = (0, - 2, 1, 1);
$$

(2) $\beta=(1,1,1,1)$ ; $\alpha_{1}=(-1,2,-1,1)$ , $\alpha_{2}=(4,0,1,-1)$ , $\alpha_{3}=(3,2,0,0)$ . 

解 (1) 将向量按列分块方式拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left(\begin{array}{r r r r r}1&2&0&5\\0&1&- 2&4\\- 1&0&1&- 2\\3&1&1&4\end{array}\right)\rightarrow \left(\begin{array}{r r r r r}1&2&0&5\\0&1&- 2&4\\0&2&1&3\\0&1&4&- 2\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c}1&2&0&5\\0&1&- 2&4\\0&0&5&- 5\\0&0&6&- 6\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&2&0&5\\0&1&- 2&4\\0&0&5&- 5\\0&0&0&0\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&0&0&1\\0&1&0&2\\0&0&1&- 1\\0&0&0&0\end{array}\right),
$$

故 $\beta$ 能用向量组 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性表示.由线性方程组的求解理论可知上述表示是唯一的，且

$$
\beta = \alpha_ {1} + 2 \alpha_ {2} - \alpha_ {3}.
$$

(2) 将向量按列分块方式拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left(\begin{array}{c c c c}- 1&4&3&1\\2&0&2&1\\- 1&1&0&1\\1&- 1&0&1\end{array}\right)\rightarrow \left(\begin{array}{c c c c}- 1&4&3&1\\0&8&8&3\\0&- 3&- 3&0\\0&0&0&2\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c}- 1&4&3&1\\0&0&0&3\\0&- 3&- 3&0\\0&0&0&2\end{array}\right)\rightarrow \left(\begin{array}{c c c c}- 1&4&3&1\\0&- 3&- 3&0\\0&0&0&3\\0&0&0&0\end{array}\right),
$$

故 $\beta$ 不能用向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性表示. □

例 3.6 求下列向量组的一个极大无关组:

$$
\alpha_ {1} = (1, 1, 2, 2, 1), \alpha_ {2} = (0, 2, 1, 5, - 1), \alpha_ {3} = (2, 0, 3, - 1, 3), \alpha_ {4} = (1, 1, 0, 4, - 1).
$$

解 将向量按列分块方式拼成矩阵, 并用初等行变换化为阶梯形矩阵:

$$
\left(\begin{array}{c c c c}1&0&2&1\\1&2&0&1\\2&1&3&0\\2&5&- 1&4\\1&- 1&3&- 1\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&0&2&1\\0&1&- 1&- 2\\0&0&0&4\\0&0&0&0\\0&0&0&0\end{array}\right).
$$

注意到右边阶梯形矩阵中阶梯点所在的列指标为 1,2,4, 所以 $\alpha_{1},\alpha_{2},\alpha_{4}$ 是向量组的一个极大无关组. 注意到极大无关组一般并不唯一, 在本题中, 除了 $\alpha_{1},\alpha_{2},\alpha_{4}$ 之外, $\alpha_{1},\alpha_{3},\alpha_{4}$ 和 $\alpha_{2},\alpha_{3},\alpha_{4}$ 也都是极大无关组, 但 $\alpha_{1},\alpha_{2},\alpha_{3}$ 不是极大无关组. □

## 2. 几何方法和理论证明问题

遇到向量线性关系的证明题, 通常我们从线性关系的定义出发, 利用发展起来的线性空间理论加以证明. 下面我们给出一些典型的例题.

例 3.7 在 $n(n \geq 2)$ 维线性空间 V 中, 试回答如下问题:

(1) 若 $\alpha_{1}, \alpha_{2}$ 线性相关, $\beta_{1}, \beta_{2}$ 线性相关, 问 $\alpha_{1} + \beta_{1}, \alpha_{2} + \beta_{2}$ 是否必线性相关?

(2) 若 $\alpha_{1}, \alpha_{2}$ 线性无关, $\beta$ 是另一个向量, 问 $\alpha_{1} + \beta, \alpha_{2} + \beta$ 是否必线性无关?

(3) 若 $\alpha, \beta$ 线性无关, $\beta, \gamma$ 线性无关, $\gamma, \alpha$ 线性无关, 问 $\alpha, \beta, \gamma$ 是否必线性无关?

解 (1) 设 $\alpha_{1}, \beta_{1}$ 线性无关, $\alpha_{2} = \alpha_{1}, \beta_{2} = -\beta_{1}$ , 容易验证 $\alpha_{1} + \beta_{1}, \alpha_{2} + \beta_{2}$ 线性无关.

(2) 设 $\alpha_{1}, \alpha_{2}$ 线性无关, $\beta = -\frac{1}{2} (\alpha_{1} + \alpha_{2})$ , 容易验证 $\alpha_{1} + \beta, \alpha_{2} + \beta$ 线性相关.

(3) 设 $\alpha, \beta$ 线性无关, $\gamma = \frac{1}{2} (\alpha + \beta)$ , 容易验证 $\beta, \gamma$ 线性无关, $\gamma, \alpha$ 线性无关, 但 $\alpha, \beta, \gamma$ 线性相关. □

例 3.8 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是线性空间 V 中一组线性无关的向量, $\beta$ 是 V 中的向量. 求证: 或者 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m},\beta$ 线性无关, 或者 $\beta$ 是 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的线性组合.

证明 若 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m},\beta$ 线性无关，则结论得证。若 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m},\beta$ 线性相关，则存在不全为零的数 $c_{1},c_{2},\cdots,c_{m},d$ ，使得

$$
c _ {1} \alpha_ {1} + c _ {2} \alpha_ {2} + \dots + c _ {m} \alpha_ {m} + d \beta = 0.
$$

若 d=0，则 $c_{1}, c_{2}, \cdots, c_{m}$ 不全为零且 $c_{1}\alpha_{1} + c_{2}\alpha_{2} + \cdots + c_{m}\alpha_{m} = 0$ ，这与 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关矛盾。因此 $d \neq 0$ ，从而

$$
\beta = - \frac {c _ {1}}{d} \alpha_ {1} - \frac {c _ {2}}{d} \alpha_ {2} - \dots - \frac {c _ {m}}{d} \alpha_ {m},
$$

即 $\beta$ 是 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的线性组合. □

注 上述结论等价于: 若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关且 $\beta \notin L(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m})$ , 则 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}, \beta$ 线性无关. 虽然这个等价命题很简单, 但后面经常会用到.

例 3.9 设向量 $\beta$ 可由向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性表示, 但不能由其中任何个数少于 m 的部分向量线性表示, 求证: 这 m 个向量线性无关.

证明 用反证法, 设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性相关, 则至少有一个向量是其余向量的线性组合. 不妨设 $\alpha_{m}$ 是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m-1}$ 的线性组合, 则由线性组合的传递性可知, $\beta$ 也是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m-1}$ 的线性组合, 这与假设矛盾. □

例 3.10 设线性空间 V 中向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性无关，已知有序向量组 $\{\beta, \alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}\}$ 线性相关，求证：最多只有一个 $\alpha_{i}$ 可以表示为前面向量的线性组合.

证明 用反证法, 设存在 $1 \leq i < j \leq r$ , 使得

$$
\alpha_ {i} = b \beta + a _ {1} \alpha_ {1} + a _ {2} \alpha_ {2} + \dots + a _ {i - 1} \alpha_ {i - 1},
$$

$$
\alpha_ {j} = d \beta + c _ {1} \alpha_ {1} + c _ {2} \alpha_ {2} + \dots + c _ {j - 1} \alpha_ {j - 1}.
$$

由于 $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ 线性无关, 故 $b\neq0$ . 将第一个等式乘以 $-\frac{d}{b}$ 加到第二个等式上, 可得 $\alpha_{j}$ 是 $\alpha_{1},\alpha_{2},\cdots,\alpha_{j-1}$ 的线性组合, 这与 $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ 线性无关矛盾. □

例 3.11 设 n 维列向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关, A 为 n 阶可逆矩阵, 求证: $A\alpha_{1}, A\alpha_{2}, \cdots, A\alpha_{m}$ 线性无关.

证明 由例3.2即得. $\square$ 

例 3.12 设 A 是 $n \times m$ 矩阵, B 是 $m \times n$ 矩阵, 满足 $AB = I_{n}$ , 求证: B 的 n 个列向量线性无关.

证明 设 $B = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ 为列分块，则 $AB = (A\beta_{1}, A\beta_{2}, \cdots, A\beta_{n})$ . 由 $AB = I_{n}$ 可得 $A\beta_{i} = e_{i} (1 \leq i \leq n)$ , 其中 $e_{i}$ 是 n 维标准单位列向量. 设

$$
c _ {1} \boldsymbol {\beta} _ {1} + c _ {2} \boldsymbol {\beta} _ {2} + \dots + c _ {n} \boldsymbol {\beta} _ {n} = \mathbf {0},
$$

上式两边同时左乘 A, 可得

$$
\mathbf {0} = c _ {1} \boldsymbol {A} \boldsymbol {\beta} _ {1} + c _ {2} \boldsymbol {A} \boldsymbol {\beta} _ {2} + \dots + c _ {n} \boldsymbol {A} \boldsymbol {\beta} _ {n} = c _ {1} \boldsymbol {e} _ {1} + c _ {2} \boldsymbol {e} _ {2} + \dots + c _ {n} \boldsymbol {e} _ {n} = (c _ {1}, c _ {2}, \dots , c _ {n}) ^ {\prime},
$$

因此 $c_{1}=c_{2}=\cdots=c_{n}=0$ ，即 B 的 n 个列向量 $\beta_{1},\beta_{2},\cdots,\beta_{n}$ 线性无关。☐

例 3.13 设 $\{\alpha_{i}=(a_{i1},a_{i2},\cdots,a_{in}),1\leq i\leq m\}$ 是一组 n 维行向量, $1\leq j_{1}<j_{2}<\cdots<j_{t}\leq n$ 是给定的 $t(t<n)$ 个指标. 定义 $\widetilde{\alpha}_{i}=(a_{ij_{1}},a_{ij_{2}},\cdots,a_{ij_{t}})$ , 称 $\widetilde{\alpha}_{i}$ 为 $\alpha_{i}$ 的 t 维缩短向量. 求证:

(1) 若 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性相关，则 $\widetilde{\alpha}_{1},\widetilde{\alpha}_{2},\cdots,\widetilde{\alpha}_{m}$ 也线性相关；

(2) 设 n 维行向量 $\boldsymbol{\alpha}=(a_{1},a_{2},\cdots,a_{n})$ 是 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的线性组合，则 $\widetilde{\alpha}$ 也是 $\widetilde{\alpha}_{1},\widetilde{\alpha}_{2},\cdots,\widetilde{\alpha}_{m}$ 的线性组合.

证明 (1) 由假设存在不全为零的数 $c_{1}, c_{2}, \cdots, c_{m}$ , 使得

$$
\mathbf {0} = c _ {1} \boldsymbol {\alpha} _ {1} + c _ {2} \boldsymbol {\alpha} _ {2} + \dots + c _ {m} \boldsymbol {\alpha} _ {m} = (\sum_ {i = 1} ^ {m} c _ {i} a _ {i 1}, \sum_ {i = 1} ^ {m} c _ {i} a _ {i 2}, \dots , \sum_ {i = 1} ^ {m} c _ {i} a _ {i n}).
$$

在等式两边同时取 t 维缩短向量, 可得

$$
\mathbf {0} = \left(\sum_ {i = 1} ^ {m} c _ {i} a _ {i j _ {1}}, \sum_ {i = 1} ^ {m} c _ {i} a _ {i j _ {2}}, \dots , \sum_ {i = 1} ^ {m} c _ {i} a _ {i j _ {t}}\right) = c _ {1} \widetilde {\alpha} _ {1} + c _ {2} \widetilde {\alpha} _ {2} + \dots + c _ {m} \widetilde {\alpha} _ {m},
$$

从而结论成立.

(2) 设 $\alpha = c_{1}\alpha_{1} + c_{2}\alpha_{2} + \cdots + c_{m}\alpha_{m}$ ，则由 (1) 的证明过程可得

$$
\widetilde {\alpha} = c _ {1} \widetilde {\alpha} _ {1} + c _ {2} \widetilde {\alpha} _ {2} + \dots + c _ {m} \widetilde {\alpha} _ {m},
$$

从而结论成立. □

例 3.14 设 V 是实数域上连续函数全体构成的实线性空间, 求证下列函数线性无关:

(1) $\sin x, \sin 2x, \cdots, \sin nx;$ (2) $1, \cos x, \cos 2x, \cdots, \cos nx;$ 

(3) $1, \sin x, \cos x, \sin 2x, \cos 2x, \cdots, \sin nx, \cos nx.$ 

证法 1 根据向量线性无关的基本性质, 我们只要证明 (3) 即可. 对 n 进行归纳, 当 n = 0 时, 显然 1 作为一个函数线性无关. 假设命题对小于 n 的自然数成立, 现证明等于 n 的情形. 设

$$
a + b _ {1} \sin x + c _ {1} \cos x + b _ {2} \sin 2 x + c _ {2} \cos 2 x + \dots + b _ {n} \sin n x + c _ {n} \cos n x = 0,
$$

其中 $a, b_{i}, c_{i}$ 都是实数. 对上式两次求导, 可得

$$
- b _ {1} \sin x - c _ {1} \cos x - 4 b _ {2} \sin 2 x - 4 c _ {2} \cos 2 x - \dots - n ^ {2} b _ {n} \sin n x - n ^ {2} c _ {n} \cos n x = 0,
$$

再将第一个式子乘以 $n^2$ 加到第二个式子上, 可得

$$
a n ^ {2} + \sum_ {i = 1} ^ {n - 1} b _ {i} (n ^ {2} - i ^ {2}) \sin i x + \sum_ {i = 1} ^ {n - 1} c _ {i} (n ^ {2} - i ^ {2}) \cos i x = 0,
$$

由归纳假设即得 $a = b_{1} = c_{1} = \cdots = b_{n-1} = c_{n-1} = 0$ 。将此结论代入第一个式子可得 $b_{n} \sin nx + c_{n} \cos nx = 0$ 。若 $b_{n} \neq 0 (c_{n} \neq 0)$ ，则 $\tan nx = -c_{n}/b_{n} (\cot nx = -b_{n}/c_{n})$ 为常数，矛盾。因此， $b_{n} = c_{n} = 0$ 。

证法2 设

$$
f (x) = a + b _ {1} \sin x + c _ {1} \cos x + b _ {2} \sin 2 x + c _ {2} \cos 2 x + \dots + b _ {n} \sin n x + c _ {n} \cos n x = 0,
$$

其中 $a, b_{i}, c_{i}$ 都是实数. 依次设 $g(x) = 1, \sin x, \cos x, \sin 2x, \cos 2x, \cdots, \sin nx, \cos nx,$ 并分别计算定积分 $\int_{0}^{2\pi}f(x)g(x)\mathrm{d}x$ ，可得 $a=b_{1}=c_{1}=\cdots=b_{n}=c_{n}=0.$ ☐

例 3.15 设向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性无关, 又

$$
\left\{ \begin{array}{l} \beta_ {1} = a _ {1 1} \alpha_ {1} + a _ {1 2} \alpha_ {2} + \dots + a _ {1 r} \alpha_ {r}, \\ \beta_ {2} = a _ {2 1} \alpha_ {1} + a _ {2 2} \alpha_ {2} + \dots + a _ {2 r} \alpha_ {r}, \\ \dots \dots \\ \beta_ {r} = a _ {r 1} \alpha_ {1} + a _ {r 2} \alpha_ {2} + \dots + a _ {r r} \alpha_ {r}. \end{array} \right.
$$

求证: $\beta_{1},\beta_{2},\cdots,\beta_{r}$ 线性相关的充要条件是系数矩阵 $A=(a_{ij})_{r\times r}$ 的行列式为零.

证明 记 A 的行向量为 $\gamma_{1}, \gamma_{2}, \cdots, \gamma_{r}$ . 若 $|A| = 0$ , 则 A 的行向量线性相关, 即存在不全为零的 r 个数 $c_{1}, c_{2}, \cdots, c_{r}$ , 使得

$$
c _ {1} \gamma_ {1} + c _ {2} \gamma_ {2} + \dots + c _ {r} \gamma_ {r} = 0.
$$

经简单计算可得

$$
c _ {1} \boldsymbol {\beta} _ {1} + c _ {2} \boldsymbol {\beta} _ {2} + \dots + c _ {r} \boldsymbol {\beta} _ {r} = \mathbf {0},
$$

从而 $\beta_{1},\beta_{2},\cdots,\beta_{r}$ 线性相关.

反之，若 A 可逆，如有 $k_{1}, k_{2}, \cdots, k_{r}$ ，使得

$$
k _ {1} \boldsymbol {\beta} _ {1} + k _ {2} \boldsymbol {\beta} _ {2} + \dots + k _ {r} \boldsymbol {\beta} _ {r} = \mathbf {0},
$$

将 $\beta_{i}$ 代入，并利用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{r}$ 的线性无关性，可得以 $k_{i}$ 为未知数的线性方程组：

$$
\left\{ \begin{array}{l} a _ {1 1} k _ {1} + a _ {2 1} k _ {2} + \dots + a _ {r 1} k _ {r} = 0, \\ a _ {1 2} k _ {1} + a _ {2 2} k _ {2} + \dots + a _ {r 2} k _ {r} = 0, \\ \dots \dots \\ a _ {1 r} k _ {1} + a _ {2 r} k _ {2} + \dots + a _ {r r} k _ {r} = 0. \end{array} \right.
$$

因为 A 可逆, 所以该方程组只有零解, 从而 $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 线性无关. □

我们可以得到例 3.15 在计算方面的应用.

例 3.16 设向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性无关, 向量组 $\beta_{1}, \beta_{2}, \beta_{3}$ 可由 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性表示:

$$
\left\{ \begin{array}{l} \beta_ {1} = \alpha_ {1} + 2 \alpha_ {2} + 3 \alpha_ {3}, \\ \beta_ {2} = 3 \alpha_ {1} - \alpha_ {2} + 4 \alpha_ {3}, \\ \beta_ {3} = \alpha_ {2} + \alpha_ {3}. \end{array} \right.
$$

问 $\beta_{1},\beta_{2},\beta_{3}$ 是否线性无关？

解 由计算可知系数矩阵

$$
\left( \begin{array}{c c c} 1 & 2 & 3 \\ 3 & - 1 & 4 \\ 0 & 1 & 1 \end{array} \right)
$$

的行列式值等于 -2, 因此向量组 $\beta_{1}, \beta_{2}, \beta_{3}$ 线性无关. □

例 3.17 设向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是齐次线性方程组 Ax = 0 的一个基础解系, 问向量组

$$
\alpha_ {1} + 2 \alpha_ {2} + \alpha_ {3}, 2 \alpha_ {1} + \alpha_ {2} + 2 \alpha_ {3}, \alpha_ {1} + \alpha_ {2} + \alpha_ {3}
$$

是否也是齐次线性方程组 Ax = 0 的一个基础解系？

解 由计算可知系数矩阵

$$
\left( \begin{array}{c c c} 1 & 2 & 1 \\ 2 & 1 & 2 \\ 1 & 1 & 1 \end{array} \right)
$$

的行列式值等于 0, 故要判定的向量组线性相关, 不可能是 Ax = 0 的基础解系. □

我们还可以将例 3.15 进一步推广为如下有用的命题, 它将文字向量组秩的判定也归结为矩阵秩的计算.

例 3.18 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是一组线性无关的向量，向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 可用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性表示如下：

$$
\left\{ \begin{array}{l} \beta_ {1} = a _ {1 1} \alpha_ {1} + a _ {1 2} \alpha_ {2} + \dots + a _ {1 m} \alpha_ {m}, \\ \beta_ {2} = a _ {2 1} \alpha_ {1} + a _ {2 2} \alpha_ {2} + \dots + a _ {2 m} \alpha_ {m}, \\ \dots \dots \\ \beta_ {k} = a _ {k 1} \alpha_ {1} + a _ {k 2} \alpha_ {2} + \dots + a _ {k m} \alpha_ {m}. \end{array} \right.
$$

记表示矩阵 $\boldsymbol{A}=(a_{ij})_{k\times m}$ ，求证：向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 的秩等于 $\mathrm{r}(\boldsymbol{A})$ .

证明 设 $r(A)=r$ ，记 A 的 k 个行向量为 $\gamma_{1},\gamma_{2},\cdots,\gamma_{k}$ 。不失一般性，可假设 A 的前 r 个行向量线性无关，其余行向量均可用前 r 个行向量线性表示。若

$$
\gamma_ {i} = c _ {1} \gamma_ {1} + c _ {2} \gamma_ {2} + \dots + c _ {r} \gamma_ {r},
$$

则经过简单计算可得

$$
\boldsymbol {\beta} _ {i} = c _ {1} \boldsymbol {\beta} _ {1} + c _ {2} \boldsymbol {\beta} _ {2} + \dots + c _ {r} \boldsymbol {\beta} _ {r}.
$$

另一方面，若

$$
c _ {1} \boldsymbol {\beta} _ {1} + c _ {2} \boldsymbol {\beta} _ {2} + \dots + c _ {r} \boldsymbol {\beta} _ {r} = \mathbf {0},
$$

则

$$
c _ {1} \left(a _ {1 1} \boldsymbol {\alpha} _ {1} + \dots + a _ {1 m} \boldsymbol {\alpha} _ {m}\right) + \dots + c _ {r} \left(a _ {r 1} \boldsymbol {\alpha} _ {1} + \dots + a _ {r m} \boldsymbol {\alpha} _ {m}\right) = \mathbf {0},
$$

即

$$
\left(c _ {1} a _ {1 1} + \dots + c _ {r} a _ {r 1}\right) \alpha_ {1} + \dots + \left(c _ {1} a _ {1 m} + \dots + c _ {r} a _ {r m}\right) \alpha_ {m} = 0.
$$

因为 $\alpha_{1},\cdots,\alpha_{m}$ 线性无关, 故可得

$$
\left\{ \begin{array}{l} a _ {1 1} c _ {1} + a _ {2 1} c _ {2} + \dots + a _ {r 1} c _ {r} = 0, \\ a _ {1 2} c _ {1} + a _ {2 2} c _ {2} + \dots + a _ {r 2} c _ {r} = 0, \\ \dots \dots \\ a _ {1 m} c _ {1} + a _ {2 m} c _ {2} + \dots + a _ {r m} c _ {r} = 0. \end{array} \right.
$$

将上述方程组看成是未知数 $c_{i}$ 的齐次线性方程组, 其系数矩阵的秩为 r, 未知数个数也是 r, 因此只有唯一一组解, 即零解. 这表明 $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 是向量组 $\beta_{1}, \beta_{2}, \cdots, \beta_{k}$ 的极大无关组, 因此向量组 $\beta_{1}, \beta_{2}, \cdots, \beta_{k}$ 的秩等于 r. □

下列命题对判断向量组秩的大小是很有用的.

例 3.19 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是向量空间 V 中一组向量，向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 可用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性表出，求证：向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 的秩小于等于向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 的秩.

证明 不失一般性, 可设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 是向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 的极大无关组, $\beta_{1}, \beta_{2}, \cdots, \beta_{s}$ 是向量组 $\beta_{1}, \beta_{2}, \cdots, \beta_{k}$ 的极大无关组. 因为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 可用 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性表出, 所以 $\beta_{1}, \beta_{2}, \cdots, \beta_{s}$ 也可用 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性表出, 从而由 §§ 3.1.3 定理 2 可知 $s \leq r$ , 结论成立. □

注 如果将向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 称为原向量组，将向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 称为表出向量组，则例 3.19 可简述为：“表出向量组的秩不超过原向量组的秩。”从几何上看，这是一个自然的结果。因为每个 $\beta_{i}$ 都属于由 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 生成的子空间，故它们的秩不会超过该子空间的维数。

如果已知向量组的秩, 那么判定其极大无关组有如下简洁的方法, 它在后面会经常用到.

例 3.20 设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 是向量空间 V 中一组向量且其秩等于 r, $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 是其中 r 个向量. 假设下列条件之一成立:

(1) $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 线性无关;

(2) 任一 $\alpha_{i}$ 均可由 $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 线性表示.
求证: $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 是向量组的极大无关组.

证明 (1) 设 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 线性无关, 又设 $\alpha_{j_1}, \alpha_{j_2}, \cdots, \alpha_{j_r}$ 是向量组的极大无关组. 对任意的 $1 \leq i \leq m$ , $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}, \alpha_i$ 均可由 $\alpha_{j_1}, \alpha_{j_2}, \cdots, \alpha_{j_r}$ 线性表示, 由 §§3.1.3 定理 2 的逆否命题可知 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}, \alpha_i$ 必线性相关. 再由例 3.8 可知 $\alpha_i$ 可由 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 线性表示, 从而 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 也是向量组的极大无关组.

(2) 设任一 $\alpha_{i}$ 均可由 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 线性表示。不失一般性，可设 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_s}$ 是向量组 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 的极大无关组。因此， $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_s}$ 线性无关。再由线性组合的传递性可知，任一 $\alpha_{i}$ 均可由 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_s}$ 线性表示，故 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_s}$ 是原向量组的极大无关组，从而 $s = r$ ，即 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 是原向量组的极大无关组。 $\square$ 

若两个向量组可以互相线性表示, 则称它们为等价的向量组. 注意向量组的等价与矩阵的等价 (相抵) 不是一回事. 两个矩阵 $A$ 和 $B$ 等价 (相抵) 是指通过初等变换可将 $A$ 变成 $B$ . 两个矩阵等价 (相抵) 的充要条件是它们具有相同的秩. 但是, 两个向量组如果只具有相同的秩还不能保证它们等价. 比如 $A = \{(1,0)\}$ , $B = \{(0,1)\}$ , 它们的秩都等于 1, 但它们不等价. 下面的例题给出了两个向量组等价的充要条件.

例 3.21 设有两个向量组 $A = \{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 和 $B = \{\beta_{1}, \beta_{2}, \cdots, \beta_{n}\}$ . 求证: 它们等价的充要条件是它们的秩相等且其中一组向量可以用另外一组向量线性表示.

证明 必要性由向量组等价的定义和例 3.19 即得, 下证充分性. 假设向量组 $A$ 可用向量组 $B$ 线性表示, 且它们的秩都等于 $r$ . 不失一般性, 设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 是向量组 $A$ 的极大无关组, $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 是向量组 $B$ 的极大无关组. 考虑向量组 $C = \{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}; \beta_{1}, \beta_{2}, \cdots, \beta_{r}\}$ . 因为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 可用 $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 线性表示, 故 $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 是向量组 $C$ 的极大无关组, 从而向量组 $C$ 的秩等于 $r$ . 又因为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性无关, 故由例 3.20 可知, $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 也是向量组 $C$ 的极大无关组, 从而 $\beta_{1}, \beta_{2}, \cdots, \beta_{r}$ 可用 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性表示, 于是向量组 $B$ 也可用向量组 $A$ 线性表示. 因此, 向量组 $A$ 与向量组 $B$ 等价. □

## § 3.3 线性空间及其基

线性空间理论是整个高等代数的核心。因此，判断某个集合是否构成线性空间，如何计算线性空间的维数或确定其一组基，这些都是线性空间理论中的重要问题。本节将给出这方面的典型例题。

例 3.22 通常的教科书 (如 [1]) 都会提及以下线性空间的典型例子:

(1) 数域 $\mathbb{K}$ 上 $n$ 维行 (列) 向量集合 $\mathbb{K}_n(\mathbb{K}^n)$ , 在行 (列) 向量的加法和数乘下成为 $\mathbb{K}$ 上的线性空间, 称为数域 $\mathbb{K}$ 上的 $n$ 维行 (列) 向量空间.

(2) 数域 $\mathbb{K}$ 上的一元多项式全体 $\mathbb{K}[x]$ , 在多项式的加法和数乘下成为 $\mathbb{K}$ 上的线性空间. 在 $\mathbb{K}[x]$ 中, 取次数小于等于 $n$ 的多项式全体, 记这个集合为 $\mathbb{K}_n[x]$ , 则 $\mathbb{K}_n[x]$ 也是 $\mathbb{K}$ 上的线性空间.

(3) 数域 $\mathbb{K}$ 上 $m \times n$ 矩阵全体 $M_{m \times n}(\mathbb{K})$ , 在矩阵的加法和数乘下成为 $\mathbb{K}$ 上的线性空间.

(4) 若两个数域 $\mathbb{K}_1 \subseteq \mathbb{K}_2$ , 则 $\mathbb{K}_2$ 可以看成是 $\mathbb{K}_1$ 上的线性空间. 向量就是 $\mathbb{K}_2$ 中的数, 向量的加法就是数的加法, 数乘就是 $\mathbb{K}_1$ 中的数乘以 $\mathbb{K}_2$ 中的数. 特别地, 数域 $\mathbb{K}$ 也可以看成是 $\mathbb{K}$ 自身上的线性空间.

(5) 实数域 $\mathbb{R}$ 上的连续函数全体记为 $C(\mathbb{R})$ , 函数的加法及数乘分别定义为 $(f + g)(x) = f(x) + g(x)$ , $(kf)(x) = kf(x)$ , 则 $C(\mathbb{R})$ 是 $\mathbb{R}$ 上的线性空间. $\square$ 

在上面的例子中, 列举的线性空间及其运算 (加法和数乘) 在某种意义下都是标准的. 然而下面的例题却告诉我们, 某些特殊的集合或者常见线性空间上, 还可以定义一些特殊的加法或数乘, 它们或者是或者不是线性空间. 这足以反映线性空间这一概念的广泛包容性.

例 3.23 判断下列集合是否构成实数域 R 上的线性空间:

(1) $V$ 为次数等于 $n (n \geq 1)$ 的实系数多项式全体, 加法和数乘就是多项式的加法和数乘.

(2) $V = M_{n}(\mathbb{R})$ , 数乘就是矩阵的数乘, 加法 $\oplus$ 定义为 $A \oplus B = AB - BA$ , 其中等式右边是矩阵的乘法和减法.

(3) $V = M_{n}(\mathbb{R})$ , 数乘就是矩阵的数乘, 加法 $\oplus$ 定义为 $A \oplus B = AB + BA$ , 其中等式右边是矩阵的乘法和加法.

(4) $V$ 是以 0 为极限的实数数列全体, 即 $V = \left\{\{a_n\} \mid \lim_{n \to \infty} a_n = 0\right\}$ , 定义两个数列的加法 $\oplus$ 及数乘 $\circ$ 为: $\{a_n\} \oplus \{b_n\} = \{a_n + b_n\}, k \circ \{a_n\} = \{ka_n\}$ , 其中等式右边分别是数的加法和乘法.

(5) $V$ 是正实数全体 $\mathbb{R}^{+}$ , 加法 $\oplus$ 定义为 $a \oplus b = ab$ , 数乘 $\circ$ 定义为 $k \circ a = a^{k}$ , 其中等式右边分别是数的乘法和乘方.

(6) $V$ 为实数对全体 $\{(a, b) | a, b \in \mathbb{R}\}$ , 加法 $\oplus$ 定义为 $(a_1, b_1) \oplus (a_2, b_2) = (a_1 + a_2, b_1 + b_2 + a_1 a_2)$ , 数乘 $\circ$ 定义为 $k \circ (a, b) = (ka, kb + \frac{k(k - 1)}{2} a^2)$ , 其中等式右边分别是数的加法和乘法.

解 (1) $V$ 不是线性空间, 因为加法不封闭.

(2) $V$ 不是线性空间, 因为加法不满足交换律, 即 $\mathbf{A} \oplus \mathbf{B} \neq \mathbf{B} \oplus \mathbf{A}$ .

(3) $V$ 不是线性空间, 因为加法不满足结合律, 即 $(A \oplus B) \oplus C \neq A \oplus (B \oplus C)$ .

(4)、(5)、(6) $V$ 都是线性空间, 特别是 (5) 和 (6), 其加法和数乘的定义都不是线性的, 但它们竟然都是线性空间! 请读者自己验证线性空间的 8 条公理的确成立, 在下一节我们会从线性同构的角度来说明它们成为线性空间的深层次理由. $\square$ 

如果考虑的向量族是整个线性空间 $V$ , 那么其极大无关组就称为线性空间 $V$ 的一组基. 因此, 要验证 $V$ 中若干个向量是否组成 $V$ 的一组基必须验证两点: 一是它们线性无关, 二是 $V$ 中任一向量均可表示为这些向量的线性组合. 但是, 如果已知 $V$ 的维数为 $n$ , 而所要验证的向量恰为 $n$ 个, 则我们可以用下面的命题.

例 3.24 设 V 是 n 维线性空间, $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 中 n 个向量. 若它们满足下列条件之一:

(1) $e_{1},e_{2},\cdots,e_{n}$ 线性无关;

(2) V 中任一向量均可由 $e_{1}, e_{2}, \cdots, e_{n}$ 线性表示，
求证： $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 的一组基.

证明 完全类似于例 3.20 的证明. □

下面的命题通常称为基扩张定理, 它在后面会经常用到.

例 3.25 设 V 是 n 维线性空间, $v_{1}, v_{2}, \cdots, v_{m}$ 是一组线性无关的向量 (V 的子空间 U 的一组基), $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 的一组基. 求证: 必可在 $e_{1}, e_{2}, \cdots, e_{n}$ 中选出 n-m 个向量, 使之和 $v_{1}, v_{2}, \cdots, v_{m}$ 一起组成 V 的一组基.

证明 若 m < n, 将 $e_{i} (1 \leq i \leq n)$ 依次加入向量组 $v_{1}, v_{2}, \cdots, v_{m}$ ，则必有一个 $e_{i}$ ，使得 $v_{1}, v_{2}, \cdots, v_{m}, e_{i}$ 线性无关。这是因为若任意一个 $e_{i}$ 加入 $v_{1}, v_{2}, \cdots, v_{m}$ 后均线性相关，则每个 $e_{i}$ 都可用 $v_{1}, v_{2}, \cdots, v_{m}$ 线性表示，由例 3.19 可得 $n \leq m$ ，矛盾。现不妨设 $i = m + 1$ 。若 $m + 1 < n$ ，又可从 $e_{1}, e_{2}, \cdots, e_{n}$ 中找到一个向量，加入之后仍线性无关。不断这样做下去，便可将 $v_{1}, v_{2}, \cdots, v_{m}$ 扩张成为 V 的一组基。☐

容易验证 $n$ 维标准单位行 (列) 向量是数域 $\mathbb{K}$ 上的 $n$ 维行 (列) 向量空间的一组基. 下面我们接着给出一些常见线性空间的基的例子.

例 3.26 设 V 是数域 K 上次数不超过 n 的多项式全体构成的线性空间, 求证: $\{1, x, x^{2}, \cdots, x^{n}\}$ 是 V 的一组基, 并且 $\{1, x + 1, (x + 1)^{2}, \cdots, (x + 1)^{n}\}$ 也是 V 的一组基.

证明 根据多项式的定义容易验证 $\{1, x, x^{2}, \cdots, x^{n}\}$ 是 V 的一组基，特别地， $\dim V = n + 1$ 。对任意的 $f(x) \in V$ ，设 $y = x + 1$ ，则

$$
f (x) = f (y - 1) = b _ {n} y ^ {n} + \dots + b _ {1} y + b _ {0} = b _ {n} (x + 1) ^ {n} + \dots + b _ {1} (x + 1) + b _ {0},
$$

其中 $b_{n},\cdots,b_{1},b_{0}$ 是 K 中的数. 因此, V 中任一多项式 $f(x)$ 均可由 $1,x+1,(x+1)^{2},\cdots,(x+1)^{n}$ 线性表示. 由例 3.24 可知, $\{1,x+1,(x+1)^{2},\cdots,(x+1)^{n}\}$ 是 V 的一组基. □

例 3.27 设 V 是数域 K 上次数小于 n 的多项式全体构成的线性空间, $a_{1}, a_{2}, \cdots, a_{n}$ 是 K 中互不相同的 n 个数, $f(x) = (x - a_{1})(x - a_{2}) \cdots (x - a_{n}), f_{i}(x) = f(x)/(x - a_{i})$ , 求证: $\{f_{1}(x), f_{2}(x), \cdots, f_{n}(x)\}$ 组成 V 的一组基.

证明 因为 $V$ 是 $n$ 维线性空间, 故由例 3.24 只需证明 $n$ 个向量 $f_{1}(x), f_{2}(x), \dots, f_{n}(x)$ 线性无关即可. 设

$$
k _ {1} f _ {1} (x) + k _ {2} f _ {2} (x) + \dots + k _ {n} f _ {n} (x) = 0,
$$

依次令 $x = a_{1}, a_{2}, \cdots, a_{n}$ ，即可求出 $k_{1} = k_{2} = \cdots = k_{n} = 0.$ □

例 3.28 设 V 是数域 K 上 $m \times n$ 矩阵全体组成的线性空间, 令 $E_{ij} (1 \leq i \leq m, 1 \leq j \leq n)$ 是第 $(i,j)$ 元素为 1、其余元素为 0 的 $m \times n$ 矩阵, 求证: 全体 $E_{ij}$ 组成了 V 的一组基, 从而 V 是 mn 维线性空间.

证明 一方面, 对任意的 $A = (a_{ij}) \in V$ , 容易验证 $A = \sum_{i=1}^{m} \sum_{j=1}^{n} a_{ij} E_{ij}$ . 另一方面, 设 $mn$ 个数 $c_{ij} (1 \leq i \leq m, 1 \leq j \leq n)$ 满足 $\sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} E_{ij} = O$ , 则由矩阵相等的定义可得所有的 $c_{ij} = 0$ . 因此, 全体 $E_{ij}$ 组成了 $V$ 的一组基, 从而 $\dim V = mn$ . □

例 3.29 求下列线性空间 V 的维数:

(1) $V$ 是数域 $\mathbb{K}$ 上 $n$ 阶上三角矩阵全体组成的线性空间;

(2) $V$ 是数域 $\mathbb{K}$ 上 $n$ 阶对称矩阵全体组成的线性空间;

(3) $V$ 是数域 $\mathbb{K}$ 上 $n$ 阶反对称矩阵全体组成的线性空间.

解 (1) 容易验证 $\{E_{ij} (1 \leq i \leq j \leq n)\}$ 是 $V$ 的一组基, 因此 $\dim V = \frac{n(n + 1)}{2}$ .

(2) 容易验证 $\{E_{ii} (1 \leq i \leq n); E_{ij} + E_{ji} (1 \leq i < j \leq n)\}$ 是 $V$ 的一组基, 因此 $\dim V = \frac{n(n + 1)}{2}$ .

(3) 容易验证 $\{E_{ij} - E_{ji} (1 \leq i < j \leq n)\}$ 是 V 的一组基，因此 $\dim V = \frac{n(n-1)}{2}$ . □

例 3.30 设 $V_{1} = \{A \in M_{n}(\mathbb{C}) \mid \overline{A}' = A\}$ 为 n 阶 Hermite 矩阵全体, $V_{2} = \{A \in M_{n}(\mathbb{C}) \mid \overline{A}' = -A\}$ 为 n 阶斜 Hermite 矩阵全体, 求证: 在矩阵加法和实数关于矩阵的数乘下, $V_{1}, V_{2}$ 成为实数域 R 上的线性空间, 并且具有相同的维数.

证明 首先, 容易证明对任意的 $A, B \in V_i$ , $c \in \mathbb{R}$ , 我们有 $A + B \in V_i$ , $cA \in V_i$ , 这就验证了上述加法和数乘是定义好的运算. 其次, 容易验证线性空间的 8 条公理成立, 因此 $V_1, V_2$ 是实线性空间 (注意虽然向量都是复矩阵, 但它们绝不是复线性空间). 最后, 容易验证 $\{E_{ii} (1 \leq i \leq n); E_{ij} + E_{ji} (1 \leq i < j \leq n); \mathrm{i}E_{ij} - \mathrm{i}E_{ji} (1 \leq i < j \leq n)\}$ 是 $V_1$ 的一组基, $\{\mathrm{i}E_{ii} (1 \leq i \leq n); E_{ij} - E_{ji} (1 \leq i < j \leq n); \mathrm{i}E_{ij} + \mathrm{i}E_{ji} (1 \leq i < j \leq n)\}$ 是 $V_2$ 的一组基, 因此 $\dim_{\mathbb{R}} V_1 = \dim_{\mathbb{R}} V_2 = n^2$ . □

例 3.31 设 $\mathbb{Q}(\sqrt[3]{2})=\{a+b\sqrt[3]{2}+c\sqrt[3]{4}\}$ ，其中 a, b, c 均是有理数，证明： $\mathbb{Q}(\sqrt[3]{2})$ 是有理数域上的线性空间并求其维数.

证明 事实上, 我们可以证明 $\mathbb{Q}(\sqrt[3]{2})$ 是一个数域. 加法、减法和乘法的封闭性都是显然的, 我们只要证明除法封闭, 或等价地证明非零数的倒数封闭即可. 为此首先需要找出一个数非零的充要条件. 我们断言以下 3 个结论等价:

$$
a + b \sqrt [ 3 ]{2} + c \sqrt [ 3 ]{4} = 0; (2) a ^ {3} + 2 b ^ {3} + 4 c ^ {3} - 6 a b c = 0; (3) a = b = c = 0. \tag {1}
$$

由公式 $(x+y+z)(x^{2}+y^{2}+z^{2}-xy-yz-zx)=x^{3}+y^{3}+z^{3}-3xyz$ 很容易从(1)推出(2). 假设(2)对不全为零的有理数a,b,c成立, 将(2)式两边同时乘以a,b,c公分母的立方, 可将a,b,c化为整数; 又可将整数a,b,c的最大公因数从(2)式提出, 因此不妨假设满足(2)式的a,b,c是互素的整数. 由(2)式可得a是偶数, 可设 $a=2a_{1}$ , 代入(2)式可得 $(2')4a_{1}^{3}+b^{3}+2c^{3}-6a_{1}bc=0$ ; 由 $(2')$ 式可得b是偶数, 可设 $b=2b_{1}$ , 代入 $(2')$ 式可得 $(2'')2a_{1}^{3}+4b_{1}^{3}+c^{3}-6a_{1}b_{1}c=0$ ; 由 $(2'')$ 式可得c是偶数, 可设 $c=2c_{1}$ , 这样a,b,c就有了公因子2, 这与它们互素矛盾. 因此, 从(2)可以推出(3). 从(3)推出(1)是显然的.

任取 $\mathbb{Q}(\sqrt[3]{2})$ 中的非零数 $a + b\sqrt[3]{2} + c\sqrt[3]{4}$ , 由上述充要条件以及公式可得

$(a+b\sqrt[3]{2}+c\sqrt[3]{4})\left((a^{2}-2bc)+(2c^{2}-ab)\sqrt[3]{2}+(b^{2}-ac)\sqrt[3]{4}\right)=a^{3}+2b^{3}+4c^{3}-6abc\neq0,$ 从而 $(a^{2}-2bc)+(2c^{2}-ab)\sqrt[3]{2}+(b^{2}-ac)\sqrt[3]{4}\neq0.$ 将倒数 $\frac{1}{(a+b\sqrt[3]{2}+c\sqrt[3]{4})}$ 的分子分母同时乘以非零数 $(a^{2}-2bc)+(2c^{2}-ab)\sqrt[3]{2}+(b^{2}-ac)\sqrt[3]{4}$ 进行化简，可得

$$
\frac {1}{a + b \sqrt [ 3 ]{2} + c \sqrt [ 3 ]{4}} = \frac {(a ^ {2} - 2 b c) + (2 c ^ {2} - a b) \sqrt [ 3 ]{2} + (b ^ {2} - a c) \sqrt [ 3 ]{4}}{a ^ {3} + 2 b ^ {3} + 4 c ^ {3} - 6 a b c} \in \mathbb {Q} (\sqrt [ 3 ]{2}).
$$

这就证明了 $\mathbb{Q}(\sqrt[3]{2})$ 是一个数域. 因为 $\mathbb{Q} \subseteq \mathbb{Q}(\sqrt[3]{2})$ , 故由例 3.22 可知, $\mathbb{Q}(\sqrt[3]{2})$ 是有理数域上的线性空间.

由 $\mathbb{Q}(\sqrt[3]{2})$ 的定义可知, $\mathbb{Q}(\sqrt[3]{2})$ 中每个数都是 $1, \sqrt[3]{2}, \sqrt[3]{4}$ 的 $\mathbb{Q}$ -线性组合; 又由上述充要条件可知, $1, \sqrt[3]{2}, \sqrt[3]{4}$ 是 $\mathbb{Q}$ -线性无关的. 因此, $\{1, \sqrt[3]{2}, \sqrt[3]{4}\}$ 是 $\mathbb{Q}(\sqrt[3]{2})$ 的一组基. 特别地, $\dim_{\mathbb{Q}} \mathbb{Q}(\sqrt[3]{2}) = 3$ . $\square$ 

例 3.32 设 $K_{1}, K_{2}, K_{3}$ 是数域且 $K_{1} \subseteq K_{2} \subseteq K_{3}$ . 若将 $K_{2}$ 看成是 $K_{1}$ 上的线性空间, 其维数为 m, 又将 $K_{3}$ 看成是 $K_{2}$ 上的线性空间, 其维数为 n, 求证: 如将 $K_{3}$ 看成是 $K_{1}$ 上的线性空间, 则其维数为 mn.

证明 $K_{2}$ 作为 $K_{1}$ 上的线性空间, 取其一组基为 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ ; $K_{3}$ 作为 $K_{2}$ 上的线性空间, 取其一组基为 $\{\beta_{1},\beta_{2},\cdots,\beta_{n}\}$ . 注意到 $\alpha_{i},\beta_{j}$ 都是数, 现在我们断言: $K_{3}$ 作为 $K_{1}$ 上的线性空间, $\{\alpha_{i}\beta_{j}(1\leq i\leq m,1\leq j\leq n)\}$ 恰为其一组基.

一方面, 对 $K_{3}$ 中任一数 a, 存在 $K_{2}$ 中的数 $b_{1}, b_{2}, \cdots, b_{n}$ , 使得

$$
a = b _ {1} \beta_ {1} + b _ {2} \beta_ {2} + \dots + b _ {n} \beta_ {n}.
$$

又对 $b_{j} \in K_{2}$ ，存在 $K_{1}$ 中的数 $c_{1j}, c_{2j}, \cdots, c_{mj}$ ，使得

$$
b _ {j} = c _ {1 j} \alpha_ {1} + c _ {2 j} \alpha_ {2} + \dots + c _ {m j} \alpha_ {m}, 1 \leq j \leq n.
$$

将上述两式进行整理, 可得

$$
a = \sum_ {j = 1} ^ {n} b _ {j} \beta_ {j} = \sum_ {j = 1} ^ {n} \left(\sum_ {i = 1} ^ {m} c _ {i j} \alpha_ {i}\right) \beta_ {j} = \sum_ {j = 1} ^ {n} \sum_ {i = 1} ^ {m} c _ {i j} \alpha_ {i} \beta_ {j},
$$

即 $\mathbb{K}_3$ 中任一数均可由 $\{\alpha_i\beta_j (1 \leq i \leq m, 1 \leq j \leq n)\}$ 线性表示.

另一方面，设有 $\mathbb{K}_1$ 中的数 $k_{ij}(1\leq i\leq m,1\leq j\leq n)$ ，使得

$$
\sum_ {j = 1} ^ {n} \sum_ {i = 1} ^ {m} k _ {i j} \alpha_ {i} \beta_ {j} = 0,
$$

则经过变形可得

$$
\sum_ {j = 1} ^ {n} \left(\sum_ {i = 1} ^ {m} k _ {i j} \alpha_ {i}\right) \beta_ {j} = 0.
$$

注意到 $\sum_{i=1}^{m}k_{ij}\alpha_{i}\in\mathbb{K}_{2}$ 且 $\beta_{1},\beta_{2},\cdots,\beta_{n}$ 是 $K_{3}/K_{2}$ 的一组基, 故有 $\sum_{i=1}^{m}k_{ij}\alpha_{i}=0(1\leq j\leq n)$ . 又因为 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ 是 $K_{2}/K_{1}$ 的一组基, 故有 $k_{ij}=0(1\leq i\leq m,1\leq j\leq n)$ , 即 $\{\alpha_{i}\beta_{j}(1\leq i\leq m,1\leq j\leq n)\}$ 是 $K_{1}$ -线性无关的.

综上所述， $\{\alpha_{i}\beta_{j}(1\leq i\leq m,1\leq j\leq n)\}$ 是 $\mathbb{K}_3 / \mathbb{K}_1$ 的一组基，特别地， $\dim_{\mathbb{K}_1}\mathbb{K}_3 = mn = \dim_{\mathbb{K}_1}\mathbb{K}_2\cdot \dim_{\mathbb{K}_2}\mathbb{K}_3.$ □

注 设 $F \subseteq K$ 为数域, K 作为 F 上的线性空间, 一组基为 $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ ; 设 V 为 K 上的 n 维线性空间, 一组基为 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ . 由与例 3.32 完全类似的证明可知, V 是 F 上的 mn 维线性空间, 一组基可选择为 $\{\alpha_{i}e_{j}(1 \leq i \leq m, 1 \leq j \leq n)\}$ .

例 3.33 证明下列线性空间是实数域上的无限维线性空间:

(1) 实数域 $\mathbb{R}$ 上的连续函数全体构成的线性空间 $C(\mathbb{R})$ (见例 3.22 (5));

(2) 以 0 为极限的实数数列全体构成的线性空间 $V = \left\{\{a_n\} \mid \lim_{n \to \infty} a_n = 0\right\}$ (见例 3.23 (4)).

证明 我们用反证法来证明.

(1) 若 $C(\mathbb{R})$ 是有限维线性空间, 则可取到正整数 $k > \dim C(\mathbb{R})$ . 然而由例 3.14 可知 $\sin x, \sin 2x, \cdots, \sin kx$ 是 R-线性无关的, 矛盾.

(2) 若 $V$ 是有限维线性空间, 则可取到正整数 $k > \dim V$ . 构造 $V$ 中 $k$ 个数列:

$$
\{a _ {n} ^ {(1)} = \frac {1}{n} \}, \{a _ {n} ^ {(2)} = \frac {1}{n ^ {2}} \}, \dots , \{a _ {n} ^ {(k)} = \frac {1}{n ^ {k}} \}.
$$

设有实数 $c_{1}, c_{2}, \cdots, c_{k}$ ，使得

$$
c _ {1} \{a _ {n} ^ {(1)} \} + c _ {2} \{a _ {n} ^ {(2)} \} + \dots + c _ {k} \{a _ {n} ^ {(k)} \} = \{0 \},
$$

则对于任意的正整数 n，成立

$$
\frac {c _ {1}}{n} + \frac {c _ {2}}{n ^ {2}} + \dots + \frac {c _ {k}}{n ^ {k}} = 0.
$$

任取 k 个不同的正整数代入上式, 并利用 Vandermonde 行列式即得 $c_{1}=c_{2}=\cdots=c_{k}=0$ , 从而上述 k 个数列线性无关, 矛盾. □

事实上, 对于无限维线性空间也可以定义基的概念. 首先, 需要适当地修改线性无关和线性表示的定义.

定义 设 $B = \{e_i\}_{i \in I}$ 为线性空间 $V$ 中的向量族, 若 $B$ 中任意有限个向量都线性无关, 则称向量族 $B$ 线性无关; 若向量 $\alpha$ 可表示为 $B$ 中有限个向量的线性组合, 则称 $\alpha$ 可被向量族 $B$ 线性表示. 若线性空间 $V$ 中存在线性无关的向量族 $B$ , 使得 $V = L(B)$ , 即 $V$ 中任一向量都可被 $B$ 线性表示, 则称向量族 $B$ 是 $V$ 的一组基.

然后, 再利用选择公理或 Zorn 引理就可以证明任意线性空间中基的存在性了.

由于高等代数主要研究有限维线性空间理论, 故我们不对上述内容做进一步的展开, 有兴趣的读者可以参考相关的教材. 虽然如此, 在本书中我们还是会适当地强调有限维线性空间和无限维线性空间在某些性质上的巨大差异, 这些讨论将为我们学习后续专业课程提供几何上的想象和例证.

## § 3.4 线性同构和几何问题代数化

同一个数域 $\mathbb{K}$ 上的两个线性空间 $V, U$ 称为是线性同构的, 若存在一个一一对应 $\varphi: V \to U$ , 使得 $\varphi$ 保持两个线性空间的代数运算 (加法和数乘). 因此, 线性同构的两个线性空间实际上具有相同的代数结构 (即线性结构), 从而 $\varphi$ 保持对应向量组的线性关系和秩. 特别地, $V$ 和 $U$ 具有相同的维数 (参考 §§ 3.1.3 定理 5).

我们先来看几个线性同构的例子.

例 3.34 验证下列映射是线性同构:

(1) 一维实行向量空间 $\mathbb{R}$ , 例 3.23 (5) 中的实线性空间 $\mathbb{R}^{+}$ , 映射 $\varphi: \mathbb{R} \to \mathbb{R}^{+}$ 定义为 $\varphi(x) = \mathrm{e}^{x}$ ;

(2) 二维实行向量空间 $\mathbb{R}_2$ , 例 3.23 (6) 中的实线性空间 $V$ , 映射 $\varphi: \mathbb{R}_2 \to V$ 定义为 $\varphi(a, b) = (a, b + \frac{1}{2} a^2)$ .

解 (1) $\varphi$ 的逆映射是 $\psi: \mathbb{R}^{+} \to \mathbb{R}$ , $\psi(y) = \ln y$ , 故 $\varphi$ 是一一对应. 根据加法和数乘的定义可得

$$
\varphi (x + y) = \mathrm{e} ^ {x + y} = \mathrm{e} ^ {x} \mathrm{e} ^ {y} = \varphi (x) \oplus \varphi (y), \varphi (k x) = \mathrm{e} ^ {k x} = (\mathrm{e} ^ {x}) ^ {k} = k \circ \varphi (x),
$$

因此 $\varphi: R \rightarrow R^{+}$ 是线性同构.

(2) $\varphi$ 的逆映射是 $\psi: V \to \mathbb{R}_2$ , $\psi(x, y) = (x, y - \frac{x^2}{2})$ , 故 $\varphi$ 是一一对应. 根据具体的计算可得

$$
\varphi \left(a _ {1} + a _ {2}, b _ {1} + b _ {2}\right) = \varphi \left(a _ {1}, b _ {1}\right) \oplus \varphi \left(a _ {2}, b _ {2}\right), \varphi (k a, k b) = k \circ \varphi (a, b),
$$

因此 $\varphi : \mathbb{R}_2 \to V$ 是线性同构. $\square$ 

注 从上例可以看出, 例 3.23 (5) 和 (6) 中的对象和常见的线性空间之间存在着线性同构, 所以即使它们的加法和数乘定义得极其不自然, 但仍然可使它们成为线性空间.

例 3.35 构造下列线性空间之间的线性同构:

(1) $V$ 是数域 $\mathbb{K}$ 上的 $n$ 阶上三角矩阵构成的线性空间, $U$ 是数域 $\mathbb{K}$ 上的 $n$ 阶对称矩阵构成的线性空间 (参考例 3.29);

(2) $V$ 是数域 $\mathbb{K}$ 上主对角元全为零的 $n$ 阶上三角矩阵构成的线性空间, $U$ 是数域 $\mathbb{K}$ 上的 $n$ 阶反对称矩阵构成的线性空间 (参考例 3.29);

(3) $V$ 是 $n$ 阶 Hermite 矩阵构成的实线性空间, $U$ 是 $n$ 阶斜 Hermite 矩阵构成的实线性空间 (参考例 3.30).

解 (1) $\varphi: V \to U$ 定义为: 对任意的 $A = (a_{ij}) \in V$ , 当 $i \leq j$ 时, 矩阵 $\varphi(A)$ 的第 $(i,j)$ 元素为 $a_{ij}$ ; 当 $i > j$ 时, 矩阵 $\varphi(A)$ 的第 $(i,j)$ 元素为 $a_{ji}$ . 容易验证 $\varphi: V \to U$ 是定义好的映射, 并且是数域 $\mathbb{K}$ 上的线性同构.

(2) $\varphi: V \to U$ 定义为: 对任意的 $A = (a_{ij}) \in V$ , $\varphi(A) = A - A'$ . 容易验证 $\varphi: V \to U$ 是定义好的映射, 并且是数域 $\mathbb{K}$ 上的线性同构.

(3) $\varphi: V \to U$ 定义为: 对任意的 $A = (a_{ij}) \in V$ , $\varphi(A) = iA$ . 容易验证 $\varphi: V \to U$ 是定义好的映射, 并且是实数域上的线性同构. 注意到 $\varphi$ 的逆映射 $\psi: U \to V$ 为: $\psi(B) = -iB$ . $\square$ 

我们还有一类特别重要的线性同构. 设 $V$ 是数域 $\mathbb{K}$ 上的 $n$ 维线性空间, $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组基并固定次序. 对任一向量 $\alpha \in V$ , 设 $\alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n$ , 则映射 $\eta: V \to \mathbb{K}^n$ 定义为: $\eta(\alpha) = (\lambda_1, \lambda_2, \cdots, \lambda_n)'$ , 即 $\eta$ 将 $V$ 中的向量映射到它在给定基下的坐标向量. 容易验证 $\eta: V \to \mathbb{K}^n$ 是一个线性同构. 因此, 通过这个线性同构, 我们可将抽象的线性空间 $V$ 和具体的列向量空间 $\mathbb{K}^n$ 等同起来. 进一步, 将 §§ 3.1.3 定理 5 运用到线性同构 $\eta$ 上, 我们可以得到如下重要的定理.

定理 假设和记号同上, 设 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}, \beta$ 是 V 中向量, 它们在给定基下的坐标向量记为 $\widetilde{\alpha}_{1}, \widetilde{\alpha}_{2}, \cdots, \widetilde{\alpha}_{m}, \widetilde{\beta}$ , 则

(1) $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性无关的充要条件是 $\widetilde{\alpha}_{1},\widetilde{\alpha}_{2},\cdots,\widetilde{\alpha}_{m}$ 线性无关.

(2) $\beta$ 可以用 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性表示的充要条件是 $\widetilde{\beta}$ 可以用 $\widetilde{\alpha}_{1}, \widetilde{\alpha}_{2}, \cdots, \widetilde{\alpha}_{m}$ 线性表示.

(3) $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 是向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的极大无关组的充要条件是 $\widetilde{\alpha}_{i_1}$ , $\widetilde{\alpha}_{i_2}, \cdots, \widetilde{\alpha}_{i_r}$ 是向量组 $\widetilde{\alpha}_1, \widetilde{\alpha}_2, \cdots, \widetilde{\alpha}_m$ 的极大无关组. 特别地, 我们有

$$
\mathrm{r} \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {m}\right) = \mathrm{r} \left(\widetilde {\alpha} _ {1}, \widetilde {\alpha} _ {2}, \dots , \widetilde {\alpha} _ {m}\right).
$$

由上述定理, 我们可以将抽象线性空间 $V$ 中向量组线性关系的判定和秩的计算, 转化为具体列向量空间 $\mathbb{K}^n$ 中由它们的坐标向量构成的列向量组线性关系的判定和秩的计算. 由于后者通常可以通过矩阵的方法来处理, 故上述过程被称为“几何问题代数化”. 接下来我们将给出几个典型例题, 体会一下“几何问题代数化”这一技巧.

例 3.18 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是一组线性无关的向量，向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 可用 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性表示如下：

$$
\left\{ \begin{array}{l} \beta_ {1} = a _ {1 1} \alpha_ {1} + a _ {1 2} \alpha_ {2} + \dots + a _ {1 m} \alpha_ {m}, \\ \beta_ {2} = a _ {2 1} \alpha_ {1} + a _ {2 2} \alpha_ {2} + \dots + a _ {2 m} \alpha_ {m}, \\ \dots \dots \\ \beta_ {k} = a _ {k 1} \alpha_ {1} + a _ {k 2} \alpha_ {2} + \dots + a _ {k m} \alpha_ {m}. \end{array} \right.
$$

记表示矩阵 $\boldsymbol{A}=(a_{ij})_{k\times m}$ ，求证：向量组 $\beta_{1},\beta_{2},\cdots,\beta_{k}$ 的秩等于 $\mathrm{r}(\boldsymbol{A})$ .

证法 2 令 V 是由 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 生成的向量空间. 因为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关, 故它们组成 V 的一组基, V 的维数等于 m. 注意到 $\beta_{i}$ 在这组基下的坐标向量为 $(a_{i1}, a_{i2}, \cdots, a_{im})'$ , 故由这些列向量组成的矩阵就是 $A'$ , 从而向量组 $\beta_{1}, \beta_{2}, \cdots, \beta_{k}$ 的秩等于 $\mathrm{r}(A') = \mathrm{r}(A)$ . □

例 3.36 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{k};\beta_{1},\beta_{2},\cdots,\beta_{m}$ 是向量空间 V 中的向量，且满足：

$$
\left\{ \begin{array}{l} \beta_ {1} = c _ {1 1} \alpha_ {1} + c _ {1 2} \alpha_ {2} + \dots + c _ {1 k} \alpha_ {k}, \\ \beta_ {2} = c _ {2 1} \alpha_ {1} + c _ {2 2} \alpha_ {2} + \dots + c _ {2 k} \alpha_ {k}, \\ \dots \dots \\ \beta_ {m} = c _ {m 1} \alpha_ {1} + c _ {m 2} \alpha_ {2} + \dots + c _ {m k} \alpha_ {k}. \end{array} \right.
$$

记上述表示式中的系数矩阵为 $C = (c_{ij})_{m \times k}$ ，求证：

(1) 若 $\mathrm{r}(\boldsymbol{C}) = k$ ，则这两组向量等价.

(2) 若 $r(C)=r$ ，则向量组 $\beta_{1},\beta_{2},\cdots,\beta_{m}$ 的秩不超过 r.

证明 (1) 在 $V$ 中取定一组基 $\pmb{e}_1, \pmb{e}_2, \dots, \pmb{e}_n$ , 假设在这组基下 $\alpha_i$ 的坐标向量是 $\widetilde{\alpha}_i (1 \leq i \leq k)$ , $\beta_j$ 的坐标向量是 $\widetilde{\beta}_j (1 \leq j \leq m)$ , 则

$$
\left\{ \begin{array}{l} \widetilde {\beta} _ {1} = c _ {1 1} \widetilde {\alpha} _ {1} + c _ {1 2} \widetilde {\alpha} _ {2} + \dots + c _ {1 k} \widetilde {\alpha} _ {k}, \\ \widetilde {\beta} _ {2} = c _ {2 1} \widetilde {\alpha} _ {1} + c _ {2 2} \widetilde {\alpha} _ {2} + \dots + c _ {2 k} \widetilde {\alpha} _ {k}, \\ \dots \dots \\ \widetilde {\beta} _ {m} = c _ {m 1} \widetilde {\alpha} _ {1} + c _ {m 2} \widetilde {\alpha} _ {2} + \dots + c _ {m k} \widetilde {\alpha} _ {k}, \end{array} \right.
$$

写成矩阵形式为

$$
(\widetilde {\boldsymbol {\beta}} _ {1}, \widetilde {\boldsymbol {\beta}} _ {2}, \dots , \widetilde {\boldsymbol {\beta}} _ {m}) = (\widetilde {\boldsymbol {\alpha}} _ {1}, \widetilde {\boldsymbol {\alpha}} _ {2}, \dots , \widetilde {\boldsymbol {\alpha}} _ {k}) \boldsymbol {C} ^ {\prime}.
$$

因为 $C'$ 是一个行满秩 $k \times m$ 矩阵, 故由例 3.91 可知, 存在 $m \times k$ 矩阵 T, 使得 $C'T = I_k$ , 于是

$$
(\widetilde {\boldsymbol {\beta}} _ {1}, \widetilde {\boldsymbol {\beta}} _ {2}, \dots , \widetilde {\boldsymbol {\beta}} _ {m}) \boldsymbol {T} = (\widetilde {\boldsymbol {\alpha}} _ {1}, \widetilde {\boldsymbol {\alpha}} _ {2}, \dots , \widetilde {\boldsymbol {\alpha}} _ {k}).
$$

这表明 $\alpha_{1},\alpha_{2},\cdots,\alpha_{k}$ 可用 $\beta_{1},\beta_{2},\cdots,\beta_{m}$ 来线性表示，于是这两组向量等价.

(2) 类似于 (1) 的讨论, 可用两个矩阵乘积的秩不超过每个矩阵的秩得到. $\square$ 

例 3.37 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是数域 F 上 n 维线性空间 V 中的 m 个向量，且已知它们的秩等于 r．求证：全体满足 $x_{1}\alpha_{1}+x_{2}\alpha_{2}+\cdots+x_{m}\alpha_{m}=0$ 的列向量 $(x_{1},x_{2},\cdots,x_{m})'(x_{i}\in\mathbb{F})$ 构成数域 F 上 m 维列向量空间 $F^{m}$ 的 m-r 维子空间.

证明 在 V 中引进基以后, 记 $\widetilde{\alpha}_{i}$ 是 $\alpha_{i}$ 的坐标向量, 则 $x_{1}\alpha_{1} + x_{2}\alpha_{2} + \cdots + x_{m}\alpha_{m} = 0$ 等价于 $x_{1}\widetilde{\alpha}_{1} + x_{2}\widetilde{\alpha}_{2} + \cdots + x_{m}\widetilde{\alpha}_{m} = 0$ . 而后者是一个齐次线性方程组, 其系数矩阵的秩等于 r (将 $x_{i}$ 视为未知数), 故其解构成 $F^{m}$ 的 m - r 维子空间. □

例 3.38 设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是线性空间 V 的一组基, 问: $\{e_{1}, e_{1} + e_{2}, \cdots, e_{1} + e_{2} + \cdots + e_{n}\}$ 是否也是 V 的基?

答 将 $\{e_{1}, e_{1} + e_{2}, \cdots, e_{1} + e_{2} + \cdots + e_{n}\}$ 对应的坐标向量拼成如下矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ 0 & 1 & \dots & 1 \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & 1 \end{array} \right).
$$

显然 $\left|A\right|=1$ ，从而 A 是满秩阵，于是 $\left\{e_{1},e_{1}+e_{2},\cdots,e_{1}+e_{2}+\cdots+e_{n}\right\}$ 也是 V 的一组基。☐

例 3.39 已知向量组 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{s}\}(s>1)$ 是线性空间 V 的一组基，设 $\beta_{1}=\alpha_{1}+\alpha_{2},\beta_{2}=\alpha_{2}+\alpha_{3},\cdots,\beta_{s}=\alpha_{s}+\alpha_{1}$ . 讨论向量 $\beta_{1},\beta_{2},\cdots,\beta_{s}$ 的线性相关性.

解 将 $\beta_{1},\beta_{2},\cdots,\beta_{s}$ 对应的坐标向量拼成如下矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 0 & \dots & 1 \\ 1 & 1 & \dots & 0 \\ 0 & 1 & \dots & 0 \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & 1 \end{array} \right).
$$

经计算可得 $\left|A\right|=1+(-1)^{s+1}$ . 因此当 s 为偶数时, $\left|A\right|=0$ , 从而向量 $\beta_{1},\beta_{2},\cdots,\beta_{s}$ 线性相关; 当 s 为奇数时, $\left|A\right|=2$ , 从而向量 $\beta_{1},\beta_{2},\cdots,\beta_{s}$ 线性无关. □

例 3.40 设 $\{e_{1}, e_{2}, e_{3}, e_{4}\}$ 是线性空间 V 的一组基, 已知

$$
\left\{ \begin{array}{l} \alpha_ {1} = e _ {1} + e _ {2} + e _ {3} + 3 e _ {4}, \\ \alpha_ {2} = - e _ {1} - 3 e _ {2} + 5 e _ {3} + e _ {4}, \\ \alpha_ {3} = 3 e _ {1} + 2 e _ {2} - e _ {3} + 4 e _ {4}, \\ \alpha_ {4} = - 2 e _ {1} - 6 e _ {2} + 1 0 e _ {3} + 2 e _ {4}, \end{array} \right.
$$

求 $\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4}$ 的一个极大无关组.

解 将 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \alpha_{4}$ 对应的坐标向量拼成如下矩阵, 并用初等行变换将其化为阶梯形矩阵:

$$
\boldsymbol {A} = \left(\begin{array}{c c c c}1&- 1&3&- 2\\1&- 3&2&- 6\\1&5&- 1&1 0\\3&1&4&2\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&- 1&3&- 2\\0&- 2&- 1&- 4\\0&0&- 7&0\\0&0&0&0\end{array}\right).
$$

因此, 矩阵 A 的第一列、第二列和第三列是坐标向量组的极大无关组, 从而 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \alpha_{4}$ 的一个极大无关组. □

例 3.41 设 $a_{1}, a_{2}, \cdots, a_{n}$ 是 n 个不同的数, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是线性空间 V 的一组基, 已知

$$
\left\{ \begin{array}{l} \alpha_ {1} = e _ {1} + a _ {1} e _ {2} + \dots + a _ {1} ^ {n - 1} e _ {n}, \\ \alpha_ {2} = e _ {1} + a _ {2} e _ {2} + \dots + a _ {2} ^ {n - 1} e _ {n}, \\ \dots \dots \\ \alpha_ {n} = e _ {1} + a _ {n} e _ {2} + \dots + a _ {n} ^ {n - 1} e _ {n}, \end{array} \right.
$$

求证: $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{n}\}$ 也是 V 的一组基.

证明 将 $\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$ 对应的坐标向量拼成如下矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ a _ {1} & a _ {2} & \dots & a _ {n} \\ \vdots & \vdots & & \vdots \\ a _ {1} ^ {n - 1} & a _ {2} ^ {n - 1} & \dots & a _ {n} ^ {n - 1} \end{array} \right).
$$

显然, $|\mathbf{A}| = \prod_{1\leq i < j\leq n}(a_j - a_i)\neq 0$ ，故 $\mathbf{A}$ 是满秩阵，从而 $\{\alpha_1,\alpha_2,\dots ,\alpha_n\}$ 也是 $V$ 的一组基.□

## § 3.5 基变换与过渡矩阵

例 3.42 设 $\{u_{1}, u_{2}, \cdots, u_{n}\}, \{e_{1}, e_{2}, \cdots, e_{n}\}, \{f_{1}, f_{2}, \cdots, f_{n}\}$ 是向量空间 V 的 3 组基. 若从 $u_{1}, u_{2}, \cdots, u_{n}$ 到 $e_{1}, e_{2}, \cdots, e_{n}$ 的过渡矩阵是 A, 从 $u_{1}, u_{2}, \cdots, u_{n}$ 到 $f_{1}, f_{2}, \cdots, f_{n}$ 的过渡矩阵是 B, 求从 $e_{1}, e_{2}, \cdots, e_{n}$ 到 $f_{1}, f_{2}, \cdots, f_{n}$ 的过渡矩阵.

解 从 $e_1, e_2, \cdots, e_n$ 到 $u_1, u_2, \cdots, u_n$ 的过渡矩阵为 $A^{-1}$ , 故从 $e_1, e_2, \cdots, e_n$ 到 $f_1, f_2, \cdots, f_n$ 的过渡矩阵为 $A^{-1}B$ . □

例 3.43 在四维行向量空间中求从基 $e_{1}, e_{2}, \cdots, e_{n}$ 到 $f_{1}, f_{2}, \cdots, f_{n}$ 的过渡矩阵, 其中

$$
\boldsymbol {e} _ {1} = (1, 1, 0, 1), \boldsymbol {e} _ {2} = (2, 1, 2, 0), \boldsymbol {e} _ {3} = (1, 1, 0, 0), \boldsymbol {e} _ {4} = (0, 1, - 1, - 1),
$$

$$
\boldsymbol {f} _ {1} = (1, 0, 0, 1), \boldsymbol {f} _ {2} = (0, 0, 1, - 1), \boldsymbol {f} _ {3} = (2, 1, 0, 3), \boldsymbol {f} _ {4} = (- 1, 0, 1, 2).
$$

解 这类题如用求解线性方程组的方法比较繁, 可采用下列方法.

设该向量空间的标准基为

$$
\boldsymbol {u} _ {1} = (1, 0, 0, 0), \boldsymbol {u} _ {2} = (0, 1, 0, 0), \boldsymbol {u} _ {3} = (0, 0, 1, 0), \boldsymbol {u} _ {4} = (0, 0, 0, 1),
$$

则从 $u_{1}, u_{2}, u_{3}, u_{4}$ 到 $e_{1}, e_{2}, e_{3}, e_{4}$ 的过渡矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 2 & 1 & 0 \\ 1 & 1 & 1 & 1 \\ 0 & 2 & 0 & - 1 \\ 1 & 0 & 0 & - 1 \end{array} \right),
$$

从 $u_{1}, u_{2}, u_{3}, u_{4}$ 到 $f_{1}, f_{2}, f_{3}, f_{4}$ 的过渡矩阵为

$$
\boldsymbol {B} = \left( \begin{array}{c c c c} 1 & 0 & 2 & - 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 1 & - 1 & 3 & 2 \end{array} \right).
$$

根据上例, 从基 $e_1, e_2, e_3, e_4$ 到 $f_1, f_2, f_3, f_4$ 的过渡矩阵为 $A^{-1}B$ . 它可以用初等变换和求逆矩阵类似的方法直接求得 (对矩阵 $(A; B)$ 进行初等行变换, 将 $A$ 化为单位矩阵, 则右边一块就化为了 $A^{-1}B$ ):

$$
(\boldsymbol {A}; \boldsymbol {B}) = \left(\begin{array}{c c c c c c c c}1&2&1&0&1&0&2&- 1\\1&1&1&1&0&0&1&0\\0&2&0&- 1&0&1&0&1\\1&0&0&- 1&1&- 1&3&2\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{r r r r r r r r}1&2&1&0&1&0&2&- 1\\0&- 1&0&1&- 1&0&- 1&1\\0&2&0&- 1&0&1&0&1\\0&- 2&- 1&- 1&0&- 1&1&3\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c c c c c}1&0&1&2&- 1&0&0&1\\0&- 1&0&1&- 1&0&- 1&1\\0&0&0&1&- 2&1&- 2&3\\0&0&- 1&- 3&2&- 1&3&1\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{r r r r r r r r}1&0&0&- 1&1&- 1&3&2\\0&- 1&0&1&- 1&0&- 1&1\\0&0&- 1&- 3&2&- 1&3&1\\0&0&0&1&- 2&1&- 2&3\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c c c c c}1&0&0&0&- 1&0&1&5\\0&- 1&0&0&1&- 1&1&- 2\\0&0&- 1&0&- 4&2&- 3&1 0\\0&0&0&1&- 2&1&- 2&3\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c c c c} 1 & 0 & 0 & 0 & - 1 & 0 & 1 & 5 \\ 0 & 1 & 0 & 0 & - 1 & 1 & - 1 & 2 \\ 0 & 0 & 1 & 0 & 4 & - 2 & 3 & - 1 0 \\ 0 & 0 & 0 & 1 & - 2 & 1 & - 2 & 3 \end{array} \right).
$$

因此，所求之过渡矩阵为

$$
\left( \begin{array}{c c c c} - 1 & 0 & 1 & 5 \\ - 1 & 1 & - 1 & 2 \\ 4 & - 2 & 3 & - 1 0 \\ - 2 & 1 & - 2 & 3 \end{array} \right)
$$

. □ 

例 3.44 设 a 为常数, 求向量 $\alpha=(a_{1},a_{2},\cdots,a_{n})$ 在基

$$
\left\{\boldsymbol {f} _ {1} = \left(a ^ {n - 1}, a ^ {n - 2}, \dots , a, 1\right), \boldsymbol {f} _ {2} = \left(a ^ {n - 2}, a ^ {n - 3}, \dots , 1, 0\right), \dots , \boldsymbol {f} _ {n} = (1, 0, \dots , 0, 0) \right\}
$$

下的坐标.

解 设 $e_{1}, e_{2}, \cdots, e_{n}$ 是标准单位行向量，则从 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵是

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a ^ {n - 1} & a ^ {n - 2} & \dots & 1 \\ a ^ {n - 2} & a ^ {n - 3} & \dots & 0 \\ \vdots & \vdots & & \vdots \\ a & 1 & \dots & 0 \\ 1 & 0 & \dots & 0 \end{array} \right).
$$

设 $\alpha$ 在 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 下的坐标向量为 $x = (x_{1}, x_{2}, \cdots, x_{n})$ ，则有 $Ax' = \alpha'$ 。这是一个非齐次线性方程组，可由初等行变换求出方程组的解：

$$
\left(\begin{array}{c c c c c}a ^ {n - 1}&a ^ {n - 2}&\dots&1&a _ {1}\\a ^ {n - 2}&a ^ {n - 3}&\dots&0&a _ {2}\\\vdots&\vdots&&\vdots&\vdots\\a&1&\dots&0&a _ {n - 1}\\1&0&\dots&0&a _ {n}\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}0&a ^ {n - 2}&\dots&1&a _ {1} - a ^ {n - 1} a _ {n}\\0&a ^ {n - 3}&\dots&0&a _ {2} - a ^ {n - 2} a _ {n}\\\vdots&\vdots&&\vdots&\vdots\\0&1&\dots&0&a _ {n - 1} - a a _ {n}\\1&0&\dots&0&a _ {n}\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c} 0 & 0 & \dots & 1 & a _ {1} - a a _ {2} \\ 0 & 0 & \dots & 0 & a _ {2} - a a _ {3} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 1 & \dots & 0 & a _ {n - 1} - a a _ {n} \\ 1 & 0 & \dots & 0 & a _ {n} \end{array} \right) \to \left( \begin{array}{c c c c c} 1 & 0 & \dots & 0 & a _ {n} \\ 0 & 1 & \dots & 0 & a _ {n - 1} - a a _ {n} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 0 & a _ {2} - a a _ {3} \\ 0 & 0 & \dots & 1 & a _ {1} - a a _ {2} \end{array} \right),
$$

因此 $\boldsymbol{x}=(a_{n},a_{n-1}-aa_{n},\cdots,a_{2}-aa_{3},a_{1}-aa_{2})$ . □

例 3.45 设 V 是次数不超过 n 的实系数多项式全体组成的线性空间, 求从基 $\{1, x, x^{2}, \cdots, x^{n}\}$ 到基 $\{1, x - a, (x - a)^{2}, \cdots, (x - a)^{n}\}$ 的过渡矩阵, 并以此证明多项式的 Taylor 公式:

$$
f (x) = f (a) + \frac {f ^ {\prime} (a)}{1 !} (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n},
$$

其中 $f^{(n)}(x)$ 表示 $f(x)$ 的 n 次导数.

解 过渡矩阵 $(n + 1$ 阶) 容易求出为

$$
\boldsymbol {P} = \left( \begin{array}{c c c c c} 1 & - a & a ^ {2} & \dots & (- 1) ^ {n} a ^ {n} \\ 0 & 1 & - 2 a & \dots & (- 1) ^ {n - 1} n a ^ {n - 1} \\ 0 & 0 & 1 & \dots & (- 1) ^ {n - 2} \frac {n (n - 1)}{2 !} a ^ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \end{array} \right).
$$

注意 P 的逆矩阵 $P^{-1}$ 可通过变换 $x \rightarrow (x + a)$ 马上得到 (不必用初等变换法求逆矩阵):

$$
\boldsymbol {P} ^ {- 1} = \left( \begin{array}{c c c c c} 1 & a & a ^ {2} & \dots & a ^ {n} \\ 0 & 1 & 2 a & \dots & n a ^ {n - 1} \\ 0 & 0 & 1 & \dots & \frac {n (n - 1)}{2 !} a ^ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \end{array} \right).
$$

设 $f(x)=a_{0}+a_{1}x+a_{2}x^{2}+\cdots+a_{n}x^{n}$ ，则 $f(x)$ 在基 $\{1,x-a,(x-a)^{2},\cdots,(x-a)^{n}\}$ 下的坐标向量为

$$
\boldsymbol {P} ^ {- 1} \left( \begin{array}{c} a _ {0} \\ a _ {1} \\ a _ {2} \\ \vdots \\ a _ {n} \end{array} \right) = \left( \begin{array}{c c c c c} 1 & a & a ^ {2} & \dots & a ^ {n} \\ 0 & 1 & 2 a & \dots & n a ^ {n - 1} \\ 0 & 0 & 1 & \dots & \frac {n (n - 1)}{2 !} a ^ {n - 2} \\ \vdots & \vdots & \vdots & & \vdots \\ 0 & 0 & 0 & \dots & 1 \end{array} \right) \left( \begin{array}{c} a _ {0} \\ a _ {1} \\ a _ {2} \\ \vdots \\ a _ {n} \end{array} \right) = \left( \begin{array}{c} f (a) \\ \frac {f ^ {\prime} (a)}{1 !} \\ \vdots \\ \frac {f ^ {(n)} (a)}{n !} \end{array} \right),
$$

由此即得结论. □

## § 3.6 子空间与商空间

例 3.46 设 $V = M_{n}(\mathbb{K})$ 是数域 K 上的 n 阶矩阵全体组成的线性空间, $A \in V$ , 求证: 与 A 乘法可交换的矩阵全体 $C(A)$ 组成 V 的子空间且其维数不为零. 又若 T 是 V 的非空子集, 求证: 与 T 中任一矩阵乘法可交换的矩阵全体 $C(T)$ 也构成 V 的子空间且其维数不为零.

证明 由于纯量阵 $cI_{n}$ 与任一 $n$ 阶矩阵 $\pmb{A}$ 乘法可交换, 故 $L(I_{n}) \subseteq C(A)$ . 任取 $\pmb{B}, \pmb{C} \in C(\pmb{A}), k \in \mathbb{K}$ , 容易验证 $\pmb{B} + \pmb{C} \in C(\pmb{A}), k\pmb{B} \in C(\pmb{A})$ , 故 $C(\pmb{A})$ 是 $M_{n}(\mathbb{K})$ 的子空间且其维数不为零. $C(T)$ 的结论同理可证. $\square$ 

下面的例 3.47 给出了求子空间的和空间以及交空间的矩阵方法。对抽象的线性空间, 可将它等同于行 (列) 向量空间, 然后用矩阵方法来求解, 这样做往往比较简便。

例 3.47 设 $\alpha_{1}=(1,0,-1,0)$ , $\alpha_{2}=(0,1,2,1)$ , $\alpha_{3}=(2,1,0,1)$ 是四维实行向量空间 V 中的向量，它们生成的子空间为 $V_{1}$ ，又向量 $\beta_{1}=(-1,1,1,1)$ , $\beta_{2}=(1,-1,-3,-1)$ , $\beta_{3}=(-1,1,-1,1)$ 生成的子空间为 $V_{2}$ ，求子空间 $V_{1}+V_{2}$ 和 $V_{1}\cap V_{2}$ 的基.

解法 1 $V_{1} + V_{2}$ 是由 $\alpha_{i}$ 和 $\beta_{i}$ 生成的, 因此只要求出这 6 个向量的极大无关组即可. 将这 6 个向量按列分块方式拼成矩阵, 并用初等行变换将其化为阶梯形矩阵:

$$
\left(\begin{array}{c c c c c c}1&0&2&- 1&1&- 1\\0&1&1&1&- 1&1\\- 1&2&0&1&- 3&- 1\\0&1&1&1&- 1&1\end{array}\right)\rightarrow \left(\begin{array}{c c c c c c}1&0&2&- 1&1&- 1\\0&1&1&1&- 1&1\\0&2&2&0&- 2&- 2\\0&0&0&0&0&0\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c c} 1 & 0 & 2 & - 1 & 1 & - 1 \\ 0 & 1 & 1 & 1 & - 1 & 1 \\ 0 & 0 & 0 & - 2 & 0 & - 4 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array} \right),
$$

故可取 $\alpha_{1},\alpha_{2},\beta_{1}$ 为 $V_{1}+V_{2}$ 的基 (不唯一).

再来求 $V_{1} \cap V_{2}$ 的基. 首先注意到 $\alpha_{1}, \alpha_{2}$ 是 $V_{1}$ 的基 (从上面的矩阵即可看出), 又不难验证 $\beta_{1}, \beta_{2}$ 是 $V_{2}$ 的基, $V_{2}$ 中的向量可以表示为 $\beta_{1}, \beta_{2}$ 的线性组合. 假设 $t_{1} \beta_{1} + t_{2} \beta_{2}$ 属于 $V_{1}$ , 则向量组 $\alpha_{1}, \alpha_{2}, t_{1} \beta_{1} + t_{2} \beta_{2}$ 和向量组 $\alpha_{1}, \alpha_{2}$ 的秩相等 (因为 $\alpha_{1}, \alpha_{2}$ 是 $V_{1}$ 的基). 因此, 我们可以用矩阵方法来求出参数 $t_{1}, t_{2}$ . 注意到

$$
\left( \begin{array}{c c c} 1 & 0 & - t _ {1} + t _ {2} \\ 0 & 1 & t _ {1} - t _ {2} \\ - 1 & 2 & t _ {1} - 3 t _ {2} \\ 0 & 1 & t _ {1} - t _ {2} \end{array} \right) \to \left( \begin{array}{c c c} 1 & 0 & - t _ {1} + t _ {2} \\ 0 & 1 & t _ {1} - t _ {2} \\ 0 & 2 & - 2 t _ {2} \\ 0 & 0 & 0 \end{array} \right) \to \left( \begin{array}{c c c} 1 & 0 & - t _ {1} + t _ {2} \\ 0 & 1 & t _ {1} - t _ {2} \\ 0 & 0 & - 2 t _ {1} \\ 0 & 0 & 0 \end{array} \right),
$$

故可得 $t_{1}=0$ ，所以 $V_{1}\cap V_{2}$ 的基可取为 $\beta_{2}$ .

解法2 求 $V_{1} + V_{2}$ 的基同解法1，现用解线性方程组的方法来求 $V_{1} \cap V_{2}$ 的基。因为 $\alpha_{1}, \alpha_{2}$ 是 $V_{1}$ 的基， $\beta_{1}, \beta_{2}$ 是 $V_{2}$ 的基，故对任一向量 $\gamma \in V_{1} \cap V_{2}, \gamma = x_{1} \alpha_{1} + x_{2} \alpha_{2} = (-x_{3}) \beta_{1} + (-x_{4}) \beta_{2}$ 。因此，求向量 $\gamma$ 等价于求解线性方程组

$$
x _ {1} \alpha_ {1} + x _ {2} \alpha_ {2} + x _ {3} \beta_ {1} + x _ {4} \beta_ {2} = 0.
$$

通过初等行变换将其系数矩阵 $(\alpha_{1},\alpha_{2},\beta_{1},\beta_{2})$ 进行化简:

$$
\left(\begin{array}{c c c c}1&0&- 1&1\\0&1&1&- 1\\0&0&- 2&0\\0&0&0&0\end{array}\right)\rightarrow \left(\begin{array}{c c c c}1&0&0&1\\0&1&0&- 1\\0&0&1&0\\0&0&0&0\end{array}\right),
$$

故上述线性方程组的通解为 $(x_{1}, x_{2}, x_{3}, x_{4}) = k(-1, 1, 0, 1)$ , 从而 $\pmb{\gamma} = -k(\pmb{\alpha}_{1} - \pmb{\alpha}_{2}) = -k\pmb{\beta}_{2}(k \in \mathbb{R})$ , 于是 $\pmb{\beta}_{2}$ 是 $V_{1} \cap V_{2}$ 的基. $\square$ 

要证明向量空间 $V$ 是其子空间 $V_{1}, V_{2}$ 的直和, 只需证明两件事: 一是证明 $V$ 中任一向量均可表示为 $V_{1}$ 与 $V_{2}$ 中向量之和, 即 $V = V_{1} + V_{2}$ ; 二是证明 $V_{1}$ 与 $V_{2}$ 的交等于零. 下面是两个典型的例子.

例 3.48 设 V 是数域 F 上 n 阶矩阵组成的向量空间, $V_{1}$ 和 $V_{2}$ 分别是 F 上对称矩阵和反对称矩阵组成的子集. 求证: $V_{1}$ 和 $V_{2}$ 都是 V 的子空间且 $V = V_{1} \oplus V_{2}$ .

证明 由于对称矩阵之和仍是对称矩阵, 一个数乘以对称矩阵仍是对称矩阵, 因此 $V_{1}$ 是 $V$ 的子空间. 同理 $V_{2}$ 也是 $V$ 的子空间. 又由例 2.10 可知, 任一 $n$ 阶矩阵都可以表示为一个对称矩阵和一个反对称矩阵之和, 故 $V = V_{1} + V_{2}$ . 若一个矩阵既是对称矩阵又是反对称矩阵, 则它一定是零矩阵. 这就是说 $V_{1} \cap V_{2} = 0$ . 于是 $V = V_{1} \oplus V_{2}$ . $\square$ 

例 3.49 设 $V_{1}, V_{2}$ 分别是数域 F 上的齐次线性方程组 $x_{1} = x_{2} = \cdots = x_{n}$ 与 $x_{1} + x_{2} + \cdots + x_{n} = 0$ 的解空间, 求证: $F^{n} = V_{1} \oplus V_{2}$ .

证明 由线性方程组解的定理知, $V_{1}$ 的维数是 1, $V_{2}$ 的维数是 $n - 1$ . 若列向量 $\alpha \in V_{1} \cap V_{2}$ , 则 $\alpha$ 既是第一个线性方程组的解, 也是第二个线性方程组的解, 不难看出 $\alpha$ 只能等于零向量, 因此 $V_{1} \cap V_{2} = 0$ . 又因为

$$
\dim (V _ {1} \oplus V _ {2}) = \dim V _ {1} + \dim V _ {2} = 1 + (n - 1) = n = \dim \mathbb {F} ^ {n},
$$

故 $\mathbb{F}^n = V_1\oplus V_2.$ □

例 3.50 设 U, V 是数域 K 上的两个线性空间, $W = U \times V$ 是 U 和 V 的积集合, 即 $W = \{(\boldsymbol{u}, \boldsymbol{v}) | \boldsymbol{u} \in U, \boldsymbol{v} \in V\}$ . 现在 W 上定义加法和数乘:

$$
\left(\boldsymbol {u} _ {1}, \boldsymbol {v} _ {1}\right) + \left(\boldsymbol {u} _ {2}, \boldsymbol {v} _ {2}\right) = \left(\boldsymbol {u} _ {1} + \boldsymbol {u} _ {2}, \boldsymbol {v} _ {1} + \boldsymbol {v} _ {2}\right), k (\boldsymbol {u}, \boldsymbol {v}) = (k \boldsymbol {u}, k \boldsymbol {v}).
$$

验证: $W$ 是 $\mathbb{K}$ 上的线性空间 (这个线性空间称为 $U$ 和 $V$ 的外直和).

又若设 $U' = \{(\pmb{u}, \pmb{0}) | \pmb{u} \in U\}$ , $V' = \{(\pmb{0}, \pmb{v}) | \pmb{v} \in V\}$ , 求证: $U', V'$ 是 $W$ 的子空间, $U'$ 和 $U$ 同构, $V'$ 和 $V$ 同构, 并且 $W = U' \oplus V'$ .

证明 容易验证 $W$ 在上述加法和数乘下满足线性空间的 8 条公理, 从而是 $\mathbb{K}$ 上的线性空间. 任取 $(\pmb{u}_1, \pmb{0}), (\pmb{u}_2, \pmb{0}) \in U', k \in \mathbb{K}$ , 则 $(\pmb{u}_1, \pmb{0}) + (\pmb{u}_2, \pmb{0}) = (\pmb{u}_1 + \pmb{u}_2, \pmb{0}) \in U'$ , $k(\pmb{u}_1, \pmb{0}) = (k\pmb{u}_1, \pmb{0}) \in U'$ , 因此 $U'$ 是 $W$ 的子空间. 同理可证 $V'$ 是 $W$ 的子空间. 构造映射 $\varphi: U \to U'$ , $\varphi(\pmb{u}) = (\pmb{u}, \pmb{0})$ , 容易验证 $\varphi$ 是一一对应并且保持加法和数乘运算, 所以 $\varphi: U \to U'$ 是一个线性同构. 构造映射 $\psi: V \to V'$ , $\psi(\pmb{v}) = (\pmb{0}, \pmb{v})$ , 同理可证 $\psi: V \to V'$ 是一个线性同构. 显然 $U' \cap V' = 0$ , 又对 $W$ 中任一向量 $(\pmb{u}, \pmb{v})$ , 有 $(\pmb{u}, \pmb{v}) = (\pmb{u}, \pmb{0}) + (\pmb{0}, \pmb{v}) \in U' + V'$ , 因此 $W = U' \oplus V'$ . □

例 3.51 设 U 是 V 的子空间, 求证: 存在 V 的子空间 W, 使得 $V = U \oplus W$ . 这样的子空间 W 称为子空间 U 在 V 中的补空间.

证明 取子空间 U 的一组基 $\{e_{1},\cdots,e_{m}\}$ ，由基扩张定理可将其扩张为 V 的一组基 $\{e_{1},\cdots,e_{m},e_{m+1},\cdots,e_{n}\}$ 。令 $W=L(e_{m+1},\cdots,e_{n})$ ，则 $V=U+W$ 。由于 $\{e_{m+1},\cdots,e_{n}\}$ 是 W 的一组基，故 $\dim V=\dim U+\dim W$ ，从而 $V=U\oplus W$ 。☐

注 在上例中 $U \cap W = \{\mathbf{0}\}$ , 而不是 $U \cap W = \emptyset$ ; 同时 $V = U + W$ 是子空间的和, 而不是 $V = U \cup W$ . 因此, 补空间绝不是补集, 请读者务必注意! 一般来说, 补空间并不唯一. 例如, 若 $\dim V - \dim U \geq 1$ 且 $\dim U \geq 1$ , 则 $U$ 有无限个补空间.

和两个子空间的情形不同, 要判定子空间 $V_{1}, V_{2}, \cdots, V_{m} (m \geq 3)$ 的和是否为直和, 只验证 $V_{i} \cap V_{j} = 0 (1 \leq i < j \leq m)$ 是远远不够的. 例如 $\mathbb{R}_{2}$ 的 3 个子空间: $V_{1} = \{(a,0) | a \in \mathbb{R}\}$ , $V_{2} = \{(0,b) | b \in \mathbb{R}\}$ , $V_{3} = \{(a,a) | a \in \mathbb{R}\}$ , 它们满足 $V_{i} \cap V_{j} = 0 (1 \leq i < j \leq 3)$ , 但 $V_{1} + V_{2} + V_{3}$ 不是直和. 因此在子空间个数多于两个的情形下, 我们通常需要利用 §§ 3.1.5 定理 5 来进行直和判定.

例 3.52 若 $V = U \oplus W$ 且 $U = U_{1} \oplus U_{2}$ ，求证： $V = U_{1} \oplus U_{2} \oplus W$ .

证明 由 $U = U_{1} \oplus U_{2}$ 可得 $U_{1} \cap U_{2} = 0$ ; 由 $V = U \oplus W$ 可得 $(U_{1} + U_{2}) \cap W = U \cap W = 0$ , 因此由 §§ 3.1.5 定理 5 (2) 可得 $U_{1} + U_{2} + W$ 是直和, 从而 $V = U_{1} + U_{2} + W = U_{1} \oplus U_{2} \oplus W$ . □

例 3.53 求证: 每一个 n 维线性空间均可表示为 n 个一维子空间的直和.

证明 设 V 是 n 维线性空间, 取其一组基为 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ . 设 $V_{i} = L(e_{i}) (1 \leq i \leq n)$ , 则 $V_{i}$ 是 V 的一维子空间且 $V = V_{1} + V_{2} + \cdots + V_{n}$ . 注意到 $\dim V = n = \dim V_{1} + \dim V_{2} + \cdots + \dim V_{n}$ , 故由 §§ 3.1.5 定理 5(3) 可知, $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{n}$ . 注意到 $V_{i}$ 的基是 $\{e_{i}\}$ , 因此 $V_{i} (1 \leq i \leq n)$ 的基能拼成 V 的基, 故由 §§ 3.1.5 定理 5(4) 也可得到结论. 再注意到 V 中任一向量写成基向量 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 的线性组合时, 其表示是唯一的. 这就是说, V 中任一向量写成 $V_{i}$ 中的向量之和时, 其表示是唯一的, 故由 §§ 3.1.5 定理 5(5) 同样可得结论. □

例 3.54 设 $V_{1}, V_{2}, \cdots, V_{m}$ 是数域 F 上向量空间 V 的 m 个真子空间, 证明: 在 V 中必存在一个向量 $\alpha$ , 它不属于任何一个 $V_{i}$ .

证明 对个数 $m$ 进行归纳, 当 $m = 1$ 时结论显然成立. 设 $m = k$ 时结论成立, 现要证明 $m = k + 1$ 时结论也成立. 由归纳假设, 存在向量 $\alpha$ , 它不属于任何一个 $V_{i} (1 \leq i \leq k)$ . 若 $\alpha$ 也不属于 $V_{k+1}$ , 则结论已成立, 因此可设 $\alpha \in V_{k+1}$ . 在 $V_{k+1}$ 外选一个向量 $\beta$ , 作集合 $M = \{t\alpha + \beta | t \in \mathbb{F}\}$ . 事实上, 我们可将 $M$ 看成是通过 $\beta$ 的终点且平行于 $\alpha$ 的一根“直线”, 现要证明它和每个 $V_{i}$ 最多只有一个交点. 首先, $M$ 和 $V_{k+1}$ 无交点, 因为若 $t\alpha + \beta \in V_{k+1}$ , 则从 $t\alpha \in V_{k+1}$ 可推出 $\beta \in V_{k+1}$ , 与假设矛盾. 又若对某个 $V_{i} (i < k + 1)$ , 存在 $t_{1} \neq t_{2}$ , 使得 $t_{1}\alpha + \beta \in V_{i}, t_{2}\alpha + \beta \in V_{i}$ , 则 $(t_{1} - t_{2})\alpha \in V_{i}$ , 从而导致 $\alpha \in V_{i}$ , 与假设矛盾. 因此, $M$ 中只有有限个向量属于 $V_{i}$ 的并集, 而 $t$ 有无穷多个选择, 由此即得结论. □

注 上述证明要用到任意一个数域都有无穷个元素这一事实. 因此, 对于有限域 (读者以后可能会学到) 上的向量空间, 上例结论不一定成立.

例 3.55 设 $V_{1}, V_{2}, \cdots, V_{m}$ 是数域 F 上向量空间 V 的 m 个真子空间, 证明: V 中必有一组基, 使得每个基向量都不在诸 $V_{i}$ 的并中.

证明 由例3.54可知, 存在非零向量 $e_1 \in V$ , 使得 $e_1 \notin \bigcup_{i=1}^{m} V_i$ . 定义 $V_{m+1} = L(e_1)$ , 再由例3.54可知, 存在向量 $e_2 \in V$ , 使得 $e_2 \notin \bigcup_{i=1}^{m+1} V_i$ . 由例3.8可知, $e_2 \notin L(e_1)$ 意味着 $e_1, e_2$ 线性无关. 重新定义 $V_{m+1} = L(e_1, e_2)$ , 再由例3.54可知, 存在向量 $e_3 \in V$ , 使得 $e_3 \notin \bigcup_{i=1}^{m+1} V_i$ . 再由例3.8可知, $e_3 \notin L(e_1, e_2)$ 意味着 $e_1, e_2, e_3$ 线性无关. 不断重复上述讨论, 即添加线性无关的向量重新定义 $V_{m+1}$ , 并反复利用例3.54和例3.8的结论, 最后可以得到 $n$ 个线性无关的向量 $e_1, e_2, \cdots, e_n$ , 它们构成 $V$ 的一组基, 且满足 $e_j \notin \bigcup_{i=1}^{m} V_i (1 \leq j \leq n)$ . □

利用 “几何问题代数化” 这一技巧, 我们可以给出上述两道例题的一个统一证法.

例 3.54 和例 3.55 的证法 2 任取 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ . 对任意的正整数 k, 构造 V 中向量 $\alpha_{k} = e_{1} + ke_{2} + \cdots + k^{n-1}e_{n}$ , 设向量族 $S = \{\alpha_{k} \mid k = 1, 2, \cdots\}$ . 由例 3.41 可知, S 中任意 n 个不同的向量都构成 V 的一组基. 因为 $V_{i}$ 都是 V 的真子空间, 所以每个 $V_{i}$ 至多包含 S 中 n - 1 个向量. 由于 S 是无限集合, 故存在某个向量 $\alpha_{k}$ , 使得 $\alpha_{k}$ 不属于任何一个 $V_{i}$ , 这就证明了例 3.54. 进一步, 在 S 中还存在 n 个不同的向量 $\alpha_{k_{1}}, \alpha_{k_{2}}, \cdots, \alpha_{k_{n}}$ , 使得每个 $\alpha_{k_{j}}$ 都不属于任何一个 $V_{i}$ , 此时 $\{\alpha_{k_{1}}, \alpha_{k_{2}}, \cdots, \alpha_{k_{n}}\}$ 就构成了 V 的一组基, 这就证明了例 3.55. □

在下面两个例子中, 我们将介绍商空间的概念及其基本性质, 并证明商空间与补空间同构.

例 3.56 设 V 是数域 K 上的线性空间, U 是 V 的子空间. 对任意的 $v \in V$ , 集合 $v + U := \{v + u \mid u \in U\}$ 称为 v 的 U-陪集. 在所有 U-陪集构成的集合 $S = \{v + U \mid v \in V\}$ 中, 定义加法和数乘如下, 其中 $v_{1}, v_{2} \in V, k \in K$ :

$$
\left(\boldsymbol {v} _ {1} + U\right) + \left(\boldsymbol {v} _ {2} + U\right) := \left(\boldsymbol {v} _ {1} + \boldsymbol {v} _ {2}\right) + U, k \cdot \left(\boldsymbol {v} _ {1} + U\right) := k \cdot \boldsymbol {v} _ {1} + U.
$$

证明下列结论成立:

(1) $U$ -陪集之间的关系是: 作为集合或者相等, 或者不相交;

(2) $v_{1} + U = v_{2} + U$ (作为集合相等) 当且仅当 $v_{1} - v_{2} \in U$ . 特别地, $v + U$ 是 $V$ 的子空间当且仅当 $v \in U$ ;

(3) $S$ 中的加法以及 $\mathbb{K}$ 关于 $S$ 的数乘不依赖于代表元的选取, 即若 $\pmb{v}_{1} + U = \pmb{v}_{1}^{\prime} + U$ 以及 $\pmb{v}_{2} + U = \pmb{v}_{2}^{\prime} + U$ , 则 $(\pmb{v}_{1} + U) + (\pmb{v}_{2} + U) = (\pmb{v}_{1}^{\prime} + U) + (\pmb{v}_{2}^{\prime} + U)$ , 以及 $k \cdot (\pmb{v}_{1} + U) = k \cdot (\pmb{v}_{1}^{\prime} + U)$ ;

(4) $S$ 在上述加法和数乘下成为数域 $\mathbb{K}$ 上的线性空间, 称为 $V$ 关于子空间 $U$ 的商空间, 记为 $V / U$ .

证明 (1) 设 $(\pmb{v}_1 + U) \cap (\pmb{v}_2 + U) \neq \emptyset$ ，即存在 $\pmb{u}_1, \pmb{u}_2 \in U$ ，使得 $\pmb{v}_1 + \pmb{u}_1 = \pmb{v}_2 + \pmb{u}_2$ ，从而 $\pmb{v}_1 - \pmb{v}_2 = \pmb{u}_2 - \pmb{u}_1 \in U$ ，于是

$$
\boldsymbol {v} _ {1} + U = \boldsymbol {v} _ {2} + (\boldsymbol {v} _ {1} - \boldsymbol {v} _ {2}) + U \subseteq \boldsymbol {v} _ {2} + U, \boldsymbol {v} _ {2} + U = \boldsymbol {v} _ {1} + (\boldsymbol {v} _ {2} - \boldsymbol {v} _ {1}) + U \subseteq \boldsymbol {v} _ {1} + U,
$$

因此 $v_{1} + U = v_{2} + U.$ 

(2) 由 (1) 的证明过程即得. 特别地, $\pmb{v} + U$ 是 $V$ 的子空间 $\Rightarrow \mathbf{0} \in \pmb{v} + U \Rightarrow \pmb{v} \in U \Rightarrow \pmb{v} + U = U$ 是 $V$ 的子空间.

(3) 若 $\pmb{v}_1 + U = \pmb{v}_1' + U$ 以及 $\pmb{v}_2 + U = \pmb{v}_2' + U$ , 则存在 $\pmb{u}_1, \pmb{u}_2 \in U$ , 使得 $\pmb{v}_1 - \pmb{v}_1' = \pmb{u}_1, \pmb{v}_2 - \pmb{v}_2' = \pmb{u}_2$ , 从而 $(\pmb{v}_1 + \pmb{v}_2) - (\pmb{v}_1' + \pmb{v}_2') = \pmb{u}_1 + \pmb{u}_2 \in U$ , $k \cdot \pmb{v}_1 - k \cdot \pmb{v}_1' = k \cdot \pmb{u}_1 \in U$ , 于是

$$
\left(\boldsymbol {v} _ {1} + U\right) + \left(\boldsymbol {v} _ {2} + U\right) = \left(\boldsymbol {v} _ {1} + \boldsymbol {v} _ {2}\right) + U = \left(\boldsymbol {v} _ {1} ^ {\prime} + \boldsymbol {v} _ {2} ^ {\prime}\right) + U = \left(\boldsymbol {v} _ {1} ^ {\prime} + U\right) + \left(\boldsymbol {v} _ {2} ^ {\prime} + U\right),
$$

$$
k \cdot (\boldsymbol {v} _ {1} + U) = k \cdot \boldsymbol {v} _ {1} + U = k \cdot \boldsymbol {v} _ {1} ^ {\prime} + U = k \cdot (\boldsymbol {v} _ {1} ^ {\prime} + U).
$$

(4) 请读者自行验证加法和数乘满足线性空间的 8 条公理. □

例 3.57 设 V 是数域 K 上的 n 维线性空间, U 是 V 的子空间, W 是 U 的补空间, 证明: $\dim V/U = \dim V - \dim U$ , 并且存在线性同构 $\varphi: W \to V/U$ .

证明 取子空间 U 的一组基 $\{e_{1},\cdots,e_{m}\}$ ，补空间 W 的一组基 $\{e_{m+1},\cdots,e_{n}\}$ ，则 $\{e_{1},\cdots,e_{m},e_{m+1},\cdots,e_{n}\}$ 是 V 的一组基。我们断言 $\{e_{m+1}+U,\cdots,e_{n}+U\}$ 是商空间 V/U 的一组基。一方面，对任意的 $v\in V$ ，设 $v=\sum_{i=1}^{n}a_{i}e_{i}$ ，则

$$
\boldsymbol {v} + U = \left(\sum_ {i = 1} ^ {n} a _ {i} \boldsymbol {e} _ {i}\right) + U = \left(\sum_ {i = m + 1} ^ {n} a _ {i} \boldsymbol {e} _ {i}\right) + U = \sum_ {i = m + 1} ^ {n} a _ {i} (\boldsymbol {e} _ {i} + U).
$$

另一方面，设 $a_{m+1}, \cdots, a_{n} \in K$ ，使得 $\sum_{i=m+1}^{n} a_{i}(\boldsymbol{e}_{i} + U) = \mathbf{0} + U$ ，即 $\left(\sum_{i=m+1}^{n} a_{i}\boldsymbol{e}_{i}\right) + U = U$ ，从而 $\sum_{i=m+1}^{n} a_{i}\boldsymbol{e}_{i} \in U$ 。于是存在 $a_{1}, \cdots, a_{m} \in K$ ，使得 $\sum_{i=m+1}^{n} a_{i}\boldsymbol{e}_{i} = -\sum_{i=1}^{m} a_{i}\boldsymbol{e}_{i}$ ，即 $\sum_{i=1}^{n} a_{i}\boldsymbol{e}_{i} = \mathbf{0}$ ，从而 $a_{i} = 0 (1 \leq i \leq n)$ 。因此， $\dim V/U = n - m = \dim V - \dim U$ 。
对任意的 $w \in W$ ，设 $w = \sum_{i=m+1}^{n} a_{i} e_{i}$ ，定义映射 $\varphi: W \to V/U$ 为

$$
\varphi (\boldsymbol {w}) = \boldsymbol {w} + U = \sum_ {i = m + 1} ^ {n} a _ {i} (\boldsymbol {e} _ {i} + U).
$$

容易验证 $\varphi$ 保持加法和数乘, 并且是一一对应, 从而是线性同构. □

## § 3.7 矩阵的秩

矩阵秩的计算及估计在高等代数中有着诸多的应用, 例如在 §3.2 中, 我们利用矩阵秩的计算可以判定向量组的线性关系等. 秩的等式 (不等式) 的证明是矩阵理论中的一个难点, 要证明它们通常需要一定的技巧, 而且我们还将发现, 随着矩阵的秩在高等代数中应用的深入, 相关的证明技巧将会更丰富, 也更具有难度. 在本节中, 我们将主要介绍 3 种方法, 分别是利用矩阵的初等变换、线性方程组的求解理论和线性空间理论来进行矩阵秩的等式 (不等式) 的证明.

## 1. 初等变换法

因为矩阵的秩在初等变换或分块初等变换下不变, 故初等变换法是处理矩阵秩的首要方法, 然后再配合利用如下矩阵秩的基本公式, 就可以证明一系列结论.

矩阵秩的基本公式 (将在下面的例题中依次证明):

(1) 若 $k \neq 0$ , $\mathrm{r}(k\mathbf{A}) = \mathrm{r}(\mathbf{A})$ ;

(2) $r(\boldsymbol{A}\boldsymbol{B}) \leq \min\{\mathrm{r}(\boldsymbol{A}), \mathrm{r}(\boldsymbol{B})\}$ ; 

(3) $r\begin{pmatrix} A & O \\ O & B \end{pmatrix} = r(A) + r(B);$ 

$$
(4) \mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {C} \\ \boldsymbol {O} & \boldsymbol {B} \end{array} \right) \geq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}), \mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {D} & \boldsymbol {B} \end{array} \right) \geq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B});
$$

(5) $\mathrm{r}(\boldsymbol{A};\boldsymbol{B}) \leq \mathrm{r}(\boldsymbol{A}) + \mathrm{r}(\boldsymbol{B}), \mathrm{r}\binom{\boldsymbol{A}}{\boldsymbol{B}} \leq \mathrm{r}(\boldsymbol{A}) + \mathrm{r}(\boldsymbol{B});$ 

(6) $\mathrm{r}(\boldsymbol{A}+\boldsymbol{B})\leq\mathrm{r}(\boldsymbol{A})+\mathrm{r}(\boldsymbol{B}),\mathrm{r}(\boldsymbol{A}-\boldsymbol{B})\leq\mathrm{r}(\boldsymbol{A})+\mathrm{r}(\boldsymbol{B});$ 

(7) $\mathrm{r}(\boldsymbol{A}-\boldsymbol{B})\geq|\mathrm{r}(\boldsymbol{A})-\mathrm{r}(\boldsymbol{B})|$ . 

例 3.58 设 A 是 $m \times n$ 矩阵, $k \neq 0$ , 求证: $\mathrm{r}(k\mathbf{A}) = \mathrm{r}(\mathbf{A})$ .

证明 由于 $k\mathbf{A} = \mathbf{P}_1(k)\mathbf{P}_2(k)\dots \mathbf{P}_m(k)\mathbf{A}$ ，故 $\mathrm{r}(k\mathbf{A}) = \mathrm{r}(\mathbf{A})$ □

例 3.59 设 $A = (a_{ij})$ , $B = (b_{ij})$ 是 $m \times n$ 矩阵, 且 $b_{ij} = (-1)^{i+j} a_{ij}$ . 求证: $\mathrm{r}(A) = \mathrm{r}(B)$ .

证明 将 A 的第 i 行乘以 $(-1)^{i}$ ，又将第 j 列乘以 $(-1)^{j}$ ，即得矩阵 B，因此 A 和 B 相抵，故结论成立。☐

例 3.60 求证: $r(AB) \leq \min\{r(A), r(B)\}$ .

证明 设 A 是 $m \times n$ 矩阵, B 是 $n \times s$ 矩阵. 将矩阵 B 按列分块, $B = (\beta_{1}, \beta_{2}, \cdots, \beta_{s})$ , 则 $AB = (A\beta_{1}, A\beta_{2}, \cdots, A\beta_{s})$ . 若 B 列向量的极大无关组为 $\{\beta_{j_{1}}, \beta_{j_{2}}, \cdots, \beta_{j_{r}}\}$ , 则 B 的任一列向量 $\beta_{j}$ 均可用 $\{\beta_{j_{1}}, \beta_{j_{2}}, \cdots, \beta_{j_{r}}\}$ 线性表示. 于是任一 $A\beta_{j}$ 也可用 $\{A\beta_{j_{1}}, A\beta_{j_{2}}, \cdots, A\beta_{j_{r}}\}$ 来线性表示. 因此, 向量组 $\{A\beta_{1}, A\beta_{2}, \cdots, A\beta_{s}\}$ 的秩不超过 r, 即 $r(AB) \leq r(B)$ . 同理, 对矩阵 A 用行分块的方法可以证明 $r(AB) \leq r(A)$ . □

注 上例即是说, 矩阵相乘之后秩相等或变小. 这是证明矩阵秩的不等式时一个重要的技巧, 关键是如何选取适当的矩阵 (可以是奇异矩阵) 以取得较好的效果.

例 3.61 求证: $\mathrm{r}\begin{pmatrix} A & O \\ O & B \end{pmatrix} = \mathrm{r}(A) + \mathrm{r}(B).$ 

证明 设 A, B 的秩分别为 $r_{1}, r_{2}$ ，则存在非异阵 $P_{1}, Q_{1}$ 和非异阵 $P_{2}, Q_{2}$ ，使得

$$
P _ {1} A Q _ {1} = \left( \begin{array}{c c} I _ {r _ {1}} & O \\ O & O \end{array} \right), P _ {2} B Q _ {2} = \left( \begin{array}{c c} I _ {r _ {2}} & O \\ O & O \end{array} \right).
$$

于是

$$
\left( \begin{array}{c c} P _ {1} & O \\ O & P _ {2} \end{array} \right) \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \left( \begin{array}{c c} Q _ {1} & O \\ O & Q _ {2} \end{array} \right) = \left( \begin{array}{c c} P _ {1} A Q _ {1} & O \\ O & P _ {2} B Q _ {2} \end{array} \right) = \left( \begin{array}{c c c c} I _ {r _ {1}} & O & O & O \\ O & O & O & O \\ O & O & I _ {r _ {2}} & O \\ O & O & O & O \end{array} \right).
$$

因此, $\mathrm{r}\left( \begin{array}{ll}A & O\\ O & B \end{array} \right) = r_1 + r_2 = \mathrm{r}(A) + \mathrm{r}(B).$ □

注 例 3.61 是关于矩阵秩的一个十分基本的公式, 它除了告诉我们分块对角矩阵的秩等于每个对角矩阵秩的和之外, 我们还可以反过来用这个公式, 即看到两个矩阵秩之和时, 可以把这两个矩阵拼成一个分块对角矩阵去考虑问题. 但如果是分块上 (下) 三角矩阵, 通常我们只能得到如下秩的不等式.

例 3.62 求证: $\mathrm{r}\begin{pmatrix} A & C \\ O & B \end{pmatrix} \geq \mathrm{r}(A) + \mathrm{r}(B)$ , $\mathrm{r}\begin{pmatrix} A & O \\ D & B \end{pmatrix} \geq \mathrm{r}(A) + \mathrm{r}(B)$ .

证法 1 我们只证明第一个不等式, 第二个不等式同理可证. 采用与例 3.61 相同的证法和记号, 可得

$$
\left( \begin{array}{c c} P _ {1} & O \\ O & P _ {2} \end{array} \right) \left( \begin{array}{c c} A & C \\ O & B \end{array} \right) \left( \begin{array}{c c} Q _ {1} & O \\ O & Q _ {2} \end{array} \right) = \left( \begin{array}{c c} P _ {1} A Q _ {1} & P _ {1} C Q _ {2} \\ O & P _ {2} B Q _ {2} \end{array} \right) = \left( \begin{array}{c c c c} I _ {r _ {1}} & O & C _ {1 1} & C _ {1 2} \\ O & O & C _ {2 1} & C _ {2 2} \\ O & O & I _ {r _ {2}} & O \\ O & O & O & O \end{array} \right).
$$

在上面的分块矩阵中实施第三类分块初等变换, 用 $I_{r_1}$ 消去同行的矩阵; 用 $I_{r_2}$ 消去

同列的矩阵, 再将 $C_{22}$ 对换到第 (2,2) 位置:

$$
\left( \begin{array}{c c c c} I _ {r _ {1}} & O & C _ {1 1} & C _ {1 2} \\ O & O & C _ {2 1} & C _ {2 2} \\ O & O & I _ {r _ {2}} & O \\ O & O & O & O \end{array} \right) \to \left( \begin{array}{c c c c} I _ {r _ {1}} & O & O & O \\ O & O & O & C _ {2 2} \\ O & O & I _ {r _ {2}} & O \\ O & O & O & O \end{array} \right) \to \left( \begin{array}{c c c c} I _ {r _ {1}} & O & O & O \\ O & C _ {2 2} & O & O \\ O & O & I _ {r _ {2}} & O \\ O & O & O & O \end{array} \right),
$$

最后由例3.61可得

$$
\mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {C} \\ \boldsymbol {O} & \boldsymbol {B} \end{array} \right) = \mathrm{r} (\boldsymbol {I} _ {r _ {1}}) + \mathrm{r} (\boldsymbol {C} _ {2 2}) + \mathrm{r} (\boldsymbol {I} _ {r _ {2}}) \geq r _ {1} + r _ {2} = \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}).
$$

证法2 我们也可用子式法来证明. 设 $r \begin{pmatrix} A & O \\ O & B \end{pmatrix} = r$ , 则由 §§ 3.1.6 定理 4 可知, $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ 有一个 $r$ 阶子式不为零, 不妨设为 $\begin{vmatrix} A_1 & O \\ O & B_1 \end{vmatrix}$ , 其中 $A_1, B_1$ 分别是 $A, B$ 的子阵. 注意 $A_1$ 或 $B_1$ 允许是零阶矩阵, 这对应于该子式完全包含在 $B$ 或 $A$ 中, 但若 $A_1, B_1$ 的阶数都大于零, 则通过该子式非零容易验证 $A_1, B_1$ 都是方阵. 设在矩阵 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 中对应的 $r$ 阶子式是 $\begin{vmatrix} A_1 & C_1 \\ O & B_1 \end{vmatrix}$ , 则由 Laplace 定理可得 $\begin{vmatrix} A_1 & C_1 \\ O & B_1 \end{vmatrix} = |A_1||B_1| = \begin{vmatrix} A_1 & O \\ O & B_1 \end{vmatrix} \neq 0$ , 再次由 §§ 3.1.6 定理 4 可得

$$
\mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {C} \\ \boldsymbol {O} & \boldsymbol {B} \end{array} \right) \geq r = \mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {B} \end{array} \right) = \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}).
$$

例 3.63 求证: $\mathrm{r}(A;B) \leq \mathrm{r}(A) + \mathrm{r}(B), \mathrm{r}\binom{A}{B} \leq \mathrm{r}(A) + \mathrm{r}(B).$ 

证明 注意到

$$
(I; I) \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) = (A; B), \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \binom{I}{I} = \binom{A}{B},
$$

故由例 3.60 和例 3.61 即得结论. □

例 3.64 求证: $\mathrm{r}(A+B)\leq\mathrm{r}(A)+\mathrm{r}(B)$ , $\mathrm{r}(A-B)\leq\mathrm{r}(A)+\mathrm{r}(B)$ .

证明 注意到

$$
(A; B) \binom{I}{I} = A + B, (A; B) \binom{I}{- I} = A - B,
$$

故由例 3.60 和例 3.63 即得结论. □

例 3.65 求证: $\mathrm{r}(A-B) \geq |\mathrm{r}(A)-\mathrm{r}(B)|$ .

证明 由于 $\mathrm{r}(\pmb {A} - \pmb {B}) = \mathrm{r}(\pmb {B} - \pmb {A})$ ，故不妨设 $\mathrm{r}(\pmb {A})\geq \mathrm{r}(\pmb {B})$ ，则由例3.64可得 $\operatorname {r}(A - B) + \operatorname {r}(B)\geq \operatorname {r}(A - B + B) = \operatorname {r}(A)$ ，即 $\operatorname {r}(A - B)\geq \operatorname {r}(A) - \operatorname {r}(B). \square$ 

例 3.66 (Sylvester 不等式) 设 A 是 $m \times n$ 矩阵, B 是 $n \times t$ 矩阵, 求证:

$$
\mathrm{r} (\boldsymbol {A B}) \geq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - n.
$$

证明 考虑下列矩阵的分块初等变换:

$$
\left( \begin{array}{c c} I _ {n} & O \\ O & A B \end{array} \right) \to \left( \begin{array}{c c} I _ {n} & O \\ A & A B \end{array} \right) \to \left( \begin{array}{c c} I _ {n} & - B \\ A & O \end{array} \right) \to \left( \begin{array}{c c} B & I _ {n} \\ O & A \end{array} \right),
$$

由例3.61和例3.62可得

$$
\mathrm{r} (\boldsymbol {A B}) + n = \mathrm{r} \left( \begin{array}{c c} \boldsymbol {I} _ {n} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {A B} \end{array} \right) = \mathrm{r} \left( \begin{array}{c c} \boldsymbol {B} & \boldsymbol {I} _ {n} \\ \boldsymbol {O} & \boldsymbol {A} \end{array} \right) \geq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}),
$$

即 $\mathrm{r}(\mathbf{A}\mathbf{B})\geq \mathrm{r}(\mathbf{A}) + \mathrm{r}(\mathbf{B}) - n.$ □

推论 若 A 是 $m \times n$ 矩阵, B 是 $n \times t$ 矩阵且 AB = O, 则 $\mathrm{r}(A) + \mathrm{r}(B) \leq n$ .

例 3.67 设 A, B 为 n 阶方阵, 满足 AB = O. 证明: 若 n 是奇数, 则 $AB' + A'B$ 必为奇异阵; 若 n 为偶数, 举例说明上述结论一般不成立.

证明 由例3.66的推论可知, $\mathrm{r}(\mathbf{A}) + \mathrm{r}(\mathbf{B}) \leq n$ . 若 $n$ 为奇数, 则 $\mathrm{r}(\mathbf{A}), \mathrm{r}(\mathbf{B})$ 中至少有一个小于等于 $\frac{n}{2}$ , 从而小于等于 $\frac{n - 1}{2}$ . 不妨设 $\mathrm{r}(\mathbf{A}) \leq \frac{n - 1}{2}$ , 于是

$$
\mathrm{r} \left(\boldsymbol {A} \boldsymbol {B} ^ {\prime} + \boldsymbol {A} ^ {\prime} \boldsymbol {B}\right) \leq \mathrm{r} \left(\boldsymbol {A} \boldsymbol {B} ^ {\prime}\right) + \mathrm{r} \left(\boldsymbol {A} ^ {\prime} \boldsymbol {B}\right) \leq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} \left(\boldsymbol {A} ^ {\prime}\right) = 2 \mathrm{r} (\boldsymbol {A}) \leq n - 1,
$$

从而 $AB' + A'B$ 为奇异阵. 例如, 当 n = 2 时, 令 $A = B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ , 则 AB = O,
但 $AB' + A'B = I_{2}$ 为非异阵. □

例 3.68 设 $A_{1}, A_{2}, \cdots, A_{m}$ 为 n 阶方阵, 求证:

$$
\mathrm{r} \left(\boldsymbol {A} _ {1}\right) + \mathrm{r} \left(\boldsymbol {A} _ {2}\right) + \dots + \mathrm{r} \left(\boldsymbol {A} _ {m}\right) \leq (m - 1) n + \mathrm{r} \left(\boldsymbol {A} _ {1} \boldsymbol {A} _ {2} \dots \boldsymbol {A} _ {m}\right).
$$

特别地, 若 $A_{1}A_{2}\cdots A_{m}=O$ , 则 $\mathrm{r}(A_{1})+\mathrm{r}(A_{2})+\cdots+\mathrm{r}(A_{m})\leq(m-1)n.$ 

证明 反复利用例 3.66 可得

$$
\begin{array}{l} \mathrm{r} (\boldsymbol {A} _ {1}) + \mathrm{r} (\boldsymbol {A} _ {2}) + \mathrm{r} (\boldsymbol {A} _ {3}) + \dots + \mathrm{r} (\boldsymbol {A} _ {m}) \\ \leq n + \mathrm{r} (\boldsymbol {A} _ {1} \boldsymbol {A} _ {2}) + \mathrm{r} (\boldsymbol {A} _ {3}) + \dots + \mathrm{r} (\boldsymbol {A} _ {m}) \\ \leq 2 n + \mathrm{r} (\boldsymbol {A} _ {1} \boldsymbol {A} _ {2} \boldsymbol {A} _ {3}) + \dots + \mathrm{r} (\boldsymbol {A} _ {m}) \\ \leq \dots \leq (m - 1) n + \mathrm{r} (\boldsymbol {A} _ {1} \boldsymbol {A} _ {2} \dots \boldsymbol {A} _ {m}). \square \end{array}
$$

我们还可以将 Sylvester 不等式进行如下的推广.

例 3.69 (Frobenius 不等式) 证明: $r(ABC) \geq r(AB) + r(BC) - r(B)$ .

证明 考虑下列分块初等变换:

$$
\left(\begin{array}{c c}A B C&O\\O&B\end{array}\right)\rightarrow \left(\begin{array}{c c}A B C&A B\\O&B\end{array}\right)\rightarrow \left(\begin{array}{c c}O&A B\\- B C&B\end{array}\right)\rightarrow \left(\begin{array}{c c}A B&O\\B&B C\end{array}\right).
$$

由例3.61和例3.62可得

$$
\mathrm{r} (A B C) + \mathrm{r} (B) = \mathrm{r} \left( \begin{array}{c c} A B C & O \\ O & B \end{array} \right) = \mathrm{r} \left( \begin{array}{c c} A B & O \\ B & B C \end{array} \right) \geq \mathrm{r} (A B) + \mathrm{r} (B C),
$$

由此即得结论. □

下面我们给出幂等矩阵和对合矩阵关于秩的判定准则.

例 3.70 求证: n 阶矩阵 A 是幂等矩阵 (即 $A^{2} = A$ ) 的充要条件是:

$$
\mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\hat {\boldsymbol {I}} _ {n} - \boldsymbol {A}) = n.
$$

证明 在下列矩阵的分块初等变换中矩阵的秩保持不变:

$$
\left(\begin{array}{c c}A&O\\O&I - A\end{array}\right)\rightarrow \left(\begin{array}{c c}A&A\\O&I - A\end{array}\right)\rightarrow \left(\begin{array}{c c}A&A\\A&I\end{array}\right)\rightarrow \left(\begin{array}{c c}A - A ^ {2}&A\\O&I\end{array}\right)\rightarrow \left(\begin{array}{c c}A - A ^ {2}&O\\O&I\end{array}\right).
$$

因此

$$
\mathrm{r} \left( \begin{array}{c c} A & O \\ O & I - A \end{array} \right) = \mathrm{r} \left( \begin{array}{c c} A - A ^ {2} & O \\ O & I \end{array} \right),
$$

即 $\mathrm{r}(\pmb {A}) + \mathrm{r}(\pmb {I} - \pmb {A}) = \mathrm{r}(\pmb {A} - \pmb{A}^2) + n,$ 由此即得结论. □

例 3.71 求证: n 阶矩阵 A 是对合矩阵 (即 $A^{2} = I_{n}$ ) 的充要条件是:

$$
\mathrm{r} (\boldsymbol {I} _ {n} + \boldsymbol {A}) + \mathrm{r} (\boldsymbol {I} _ {n} - \boldsymbol {A}) = n.
$$

证明 在下列矩阵的分块初等变换中, 矩阵的秩保持不变:

$$
\begin{array}{c}\left(\begin{array}{c c}I _ {n} + A&O\\O&I _ {n} - A\end{array}\right)\rightarrow \left(\begin{array}{c c}I _ {n} + A&I _ {n} + A\\O&I _ {n} - A\end{array}\right)\rightarrow \left(\begin{array}{c c}I _ {n} + A&I _ {n} + A\\I _ {n} + A&2 I _ {n}\end{array}\right)\rightarrow\\\left(\begin{array}{c c}\frac {1}{2} (I _ {n} - A ^ {2})&I _ {n} + A\\O&2 I _ {n}\end{array}\right)\rightarrow \left(\begin{array}{c c}\frac {1}{2} (I _ {n} - A ^ {2})&O\\O&2 I _ {n}\end{array}\right).\end{array}
$$

因此

$$
\mathrm{r} \left( \begin{array}{c c} I _ {n} + A & O \\ O & I _ {n} - A \end{array} \right) = \mathrm{r} \left( \begin{array}{c c} \frac {1}{2} (I _ {n} - A ^ {2}) & O \\ O & 2 I _ {n} \end{array} \right),
$$

即 $\mathrm{r}(\pmb{I}_n + \pmb{A}) + \mathrm{r}(\pmb{I}_n - \pmb{A}) = \mathrm{r}(\pmb{I}_n - \pmb{A}^2) + n,$ 由此即得结论. □

例 3.72 设 A 是 n 阶矩阵, 求证: $\mathrm{r}(A) + \mathrm{r}(I_n + A) \geq n$ .

证法 1 由下列分块初等变换即得结论

$$
\left(\begin{array}{c c}A&O\\O&I + A\end{array}\right)\rightarrow \left(\begin{array}{c c}A&A\\O&I + A\end{array}\right)\rightarrow \left(\begin{array}{c c}A&A\\- A&I\end{array}\right)\rightarrow \left(\begin{array}{c c}A + A ^ {2}&A\\O&I\end{array}\right)\rightarrow \left(\begin{array}{c c}A + A ^ {2}&O\\O&I\end{array}\right).
$$

证法 2 $\mathrm{r}(\boldsymbol{A})+\mathrm{r}(\boldsymbol{I}+\boldsymbol{A})=\mathrm{r}(-\boldsymbol{A})+\mathrm{r}(\boldsymbol{I}+\boldsymbol{A})\geq\mathrm{r}(-\boldsymbol{A}+\boldsymbol{I}+\boldsymbol{A})=\mathrm{r}(\boldsymbol{I})=n.$ □

例 3.73 (秩的降阶公式) 设有分块矩阵 $M = \begin{pmatrix} A & B \\ C & D \end{pmatrix}$ ，证明：

(1) 若 A 可逆, 则 $\mathrm{r}(M)=\mathrm{r}(A)+\mathrm{r}(D-CA^{-1}B)$ ;

(2) 若 D 可逆, 则 $\mathrm{r}(M)=\mathrm{r}(D)+\mathrm{r}(A-BD^{-1}C)$ ;

(3) 若 A, D 都可逆, 则 $\mathrm{r}(A) + \mathrm{r}(D - CA^{-1}B) = \mathrm{r}(D) + \mathrm{r}(A - BD^{-1}C)$ .

证明 (1) 由分块初等变换可得

$$
\left( \begin{array}{c c} A & B \\ C & D \end{array} \right) \to \left( \begin{array}{c c} A & B \\ O & D - C A ^ {- 1} B \end{array} \right) \to \left( \begin{array}{c c} A & O \\ O & D - C A ^ {- 1} B \end{array} \right),
$$

由此即得结论.

(2) 同理可证明.

(3) 由 (1) 和 (2) 即得. $\square$ 

例3.74 设

$$
M = \left( \begin{array}{c c c c} a _ {1} ^ {2} & a _ {1} a _ {2} + 1 & \dots & a _ {1} a _ {n} + 1 \\ a _ {2} a _ {1} + 1 & a _ {2} ^ {2} & \dots & a _ {2} a _ {n} + 1 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} + 1 & a _ {n} a _ {2} + 1 & \dots & a _ {n} ^ {2} \end{array} \right),
$$

证明: $\mathrm{r}(M) \geq n - 1$ , 等号成立当且仅当 $|M| = 0$ .

证明 若 n = 1, 结论显然成立. 下设 $n \geq 2$ . 取 $A = -I_{n}, D = -I_{2}$ , $C = B' = \begin{pmatrix} a_{1} & a_{2} & \cdots & a_{n} \\ 1 & 1 & \cdots & 1 \end{pmatrix}$ , 则 $M = A - BD^{-1}C$ . 注意到 $D - CA^{-1}B = \begin{pmatrix} \sum_{i=1}^{n} a_{i}^{2} - 1 & \sum_{i=1}^{n} a_{i} \\ \sum_{i=1}^{n} a_{i} & n - 1 \end{pmatrix}$ , 从而 $r(D - CA^{-1}B) \geq 1$ . 由秩的降阶公式可得

$$
2 + \mathrm{r} (\boldsymbol {M}) = \mathrm{r} (\boldsymbol {D}) + \mathrm{r} (\boldsymbol {M}) = \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {D} - \boldsymbol {C A} ^ {- 1} \boldsymbol {B}) \geq n + 1,
$$

于是 $\mathrm{r}(M) \geq n - 1$ ，等号成立当且仅当 $M$ 不满秩，即 $|M| = 0$ . □

例 3.75 设 A, B 都是数域 K 上的 n 阶矩阵且 AB = BA, 证明:

$$
\mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) \leq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - \mathrm{r} (\boldsymbol {A B}).
$$

证明 考虑如下分块矩阵的乘法:

$$
\left( \begin{array}{c c} I & I \\ O & I \end{array} \right) \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \left( \begin{array}{c c} I & - B \\ I & A \end{array} \right) = \left( \begin{array}{c c} A + B & - A B + B A \\ B & B A \end{array} \right) = \left( \begin{array}{c c} A + B & O \\ B & A B \end{array} \right).
$$

由例3.60和例3.62可得

$$
\mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) = \mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {B} \end{array} \right) \geq \mathrm{r} \left( \begin{array}{c c} \boldsymbol {A} + \boldsymbol {B} & \boldsymbol {O} \\ \boldsymbol {B} & \boldsymbol {B A} \end{array} \right) \geq \mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) + \mathrm{r} (\boldsymbol {A B}),
$$

由此即得结论. □

## 2. 利用线性方程组的求解理论讨论矩阵的秩

设 A 是数域 K 上的 $m \times n$ 矩阵, 则齐次线性方程组 Ax = 0 的解集 $V_{A}$ 是 n 维列向量空间 $K^{n}$ 的子空间. 根据线性方程组的求解理论, 我们有

$$
\dim V _ {\boldsymbol {A}} + \mathrm{r} (\boldsymbol {A}) = n,
$$

即齐次线性方程组解空间的维数与系数矩阵的秩之和等于未知数的个数。根据上述公式，由矩阵的秩可以讨论线性方程组解的性质；反过来，也可以由线性方程组解的性质讨论矩阵的秩。下面的几个例子具有一定的典型性。

例 3.76 设 A 是 $m \times n$ 实矩阵, 求证: $\mathrm{r}(A'A) = \mathrm{r}(AA') = \mathrm{r}(A)$ .

证明 首先证明 $\mathrm{r}(A'A) = \mathrm{r}(A)$ , 为此我们将证明齐次线性方程组 $Ax = 0$ 和 $A'Ax = 0$ 同解. 显然 $Ax = 0$ 的解都是 $A'Ax = 0$ 的解. 反之, 任取方程组 $A'Ax = 0$ 的解 $\alpha \in \mathbb{R}^n$ , 则 $\alpha'A'A\alpha = 0$ , 即 $(A\alpha)'(A\alpha) = 0$ . 记 $A\alpha = (b_1, b_2, \cdots, b_m)' \in \mathbb{R}^m$ , 则

$$
b _ {1} ^ {2} + b _ {2} ^ {2} + \dots + b _ {m} ^ {2} = 0.
$$

因为 $b_{i}$ 是实数, 故每个 $b_{i} = 0$ , 即 $\mathbf{A}\alpha = \mathbf{0}$ , 也即 $\alpha$ 是 $\mathbf{A}\mathbf{x} = \mathbf{0}$ 的解. 这就证明了方程组 $\mathbf{A}\mathbf{x} = \mathbf{0}$ 和 $\mathbf{A}'\mathbf{A}\mathbf{x} = \mathbf{0}$ 同解, 即 $V_{\mathbf{A}} = V_{\mathbf{A}'\mathbf{A}}$ , 于是 $\mathrm{r}(\mathbf{A}'\mathbf{A}) = \mathrm{r}(\mathbf{A})$ . 在上述等式中用 $\mathbf{A}'$ 替代 $\mathbf{A}$ 可得 $\mathrm{r}(\mathbf{A}\mathbf{A}') = \mathrm{r}(\mathbf{A}')$ , 又因为 $\mathrm{r}(\mathbf{A}) = \mathrm{r}(\mathbf{A}')$ , 故结论得证. $\square$ 

注 类似的方法可证明: 若 A 是 $m \times n$ 复矩阵, 则 $\mathrm{r}\left(\overline{\boldsymbol{A}}^{\prime}\boldsymbol{A}\right) = \mathrm{r}\left(\boldsymbol{A}\overline{\boldsymbol{A}}^{\prime}\right) = \mathrm{r}(\boldsymbol{A})$ .

例 3.77 设 A 和 B 是数域 K 上的 n 阶矩阵, 若线性方程组 Ax = 0 和 Bx = 0 同解, 且每个方程组的基础解系含 m 个线性无关的向量, 求证: $\mathrm{r}(A - B) \leq n - m$ .

证明 由方程组 Ax = 0 和 Bx = 0 同解可知, Ax = 0 的解都是 $(A - B)x = 0$ 的解, 即 $V_{A} \subseteq V_{A - B}$ , 从而 $\dim V_{A - B} \geq \dim V_{A} = m$ , 于是 $\mathrm{r}(A - B) \leq n - m$ . □

例 3.78 设 A 是 $m \times n$ 矩阵, B 是 $n \times k$ 矩阵, 证明: 方程组 ABx = 0 和方程组 Bx = 0 同解的充要条件是 $\mathrm{r}(AB) = \mathrm{r}(B)$ .

证明 显然方程组 Bx = 0 的解都是方程组 ABx = 0 的解, 即 $V_{B} \subseteq V_{AB}$ , 于是两个线性方程组同解, 即 $V_{B} = V_{AB}$ 的充要条件是 $\dim V_{B} = \dim V_{AB}$ . 又 $\dim V_{B} = k - r(B)$ , $\dim V_{AB} = k - r(AB)$ , 因此上述两个方程组同解的充要条件是 $\mathrm{r}(AB) = \mathrm{r}(B)$ . □

例 3.79 设 A 是 $m \times n$ 矩阵, B 是 $n \times k$ 矩阵. 若 AB 和 B 有相同的秩, 求证: 对任意的 $k \times l$ 矩阵 C, 矩阵 ABC 和矩阵 BC 也有相同的秩.

证法1 由假设和例3.78可知, 方程组 $ABx = 0$ 和方程组 $Bx = 0$ 同解. 要证明 $\mathrm{r}(ABC) = \mathrm{r}(BC)$ , 我们只要证明方程组 $ABCx = 0$ 和方程组 $BCx = 0$ 同解即可. 显然方程组 $BCx = 0$ 的解都是方程组 $ABCx = 0$ 的解. 反之, 若列向量 $\alpha$ 是方程组 $ABCx = 0$ 的解, 则 $C\alpha$ 是方程组 $ABx = 0$ 的解, 因此 $C\alpha$ 也是方程组 $Bx = 0$ 的解, 即 $BC\alpha = 0$ , 于是 $\alpha$ 也是方程组 $BCx = 0$ 的解. 这就证明了方程组 $ABCx = 0$ 和方程组 $BCx = 0$ 同解, 从而结论得证.

证法2 由Frobenius不等式可得

$$
\mathrm{r} (\boldsymbol {A B C}) \geq \mathrm{r} (\boldsymbol {A B}) + \mathrm{r} (\boldsymbol {B C}) - \mathrm{r} (\boldsymbol {B}) = \mathrm{r} (\boldsymbol {B C}),
$$

又因为 $r(ABC) \leq r(BC)$ ，故结论得证。□

例 3.75 设 A, B 都是数域 K 上的 n 阶矩阵且 AB = BA, 证明:

$$
\mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) \leq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - \mathrm{r} (\boldsymbol {A B}).
$$

证法2 设 $V_{A}$ 是方程组 $\mathbf{Ax} = \mathbf{0}$ 的解空间, $V_{B}, V_{AB}, V_{A+B}$ 的意义同理. 若列向量 $\alpha \in V_{A} \cap V_{B}$ , 即 $\alpha$ 满足 $A\alpha = 0$ 且 $B\alpha = 0$ , 于是 $(A + B)\alpha = 0$ , 即 $\alpha \in V_{A+B}$ , 从而 $V_{A} \cap V_{B} \subseteq V_{A+B}$ . 同理可证 $V_{A} \subseteq V_{BA}, V_{B} \subseteq V_{AB}$ . 因为 $AB = BA$ , 所以 $V_{BA} = V_{AB}$ , 从而 $V_{A} + V_{B} \subseteq V_{AB}$ . 因此, 我们有

$$
\dim (V _ {A} \cap V _ {B}) \leq \dim V _ {A + B} = n - \mathrm{r} (A + B), \dim (V _ {A} + V _ {B}) \leq \dim V _ {A B} = n - \mathrm{r} (A B).
$$

将上面两个不等式相加, 再由交和空间维数公式可得

$$
\begin{array}{r c l} n - \mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) + n - \mathrm{r} (\boldsymbol {A B}) & \geq & \dim (V _ {\boldsymbol {A}} \cap V _ {\boldsymbol {B}}) + \dim (V _ {\boldsymbol {A}} + V _ {\boldsymbol {B}}) \\ & = & \dim V _ {\boldsymbol {A}} + \dim V _ {\boldsymbol {B}} = n - \mathrm{r} (\boldsymbol {A}) + n - \mathrm{r} (\boldsymbol {B}), \end{array}
$$

因此 $\mathrm{r}(\pmb {A} + \pmb {B}) + \mathrm{r}(\pmb {A}\pmb {B})\leq \mathrm{r}(\pmb {A}) + \mathrm{r}(\pmb {B})$ ，结论得证.□

例 3.80 设数域 K 上的 n 阶矩阵 $\boldsymbol{A} = (a_{ij})$ 满足: $|A| = 0$ 且某个元素 $a_{ij}$ 的代数余子式 $A_{ij} \neq 0$ . 求证: 齐次线性方程组 Ax = 0 的所有解都可写为下列形式:

$$
k \left( \begin{array}{c} A _ {i 1} \\ A _ {i 2} \\ \vdots \\ A _ {i n} \end{array} \right), k \in \mathbb {K}.
$$

证明 显然 A 的秩等于 n-1, 因此线性方程组 Ax=0 的基础解系只含一个向量. 注意到 $|A|=0$ , 故 $AA^{*}=|A|I_{n}=O$ , 于是伴随矩阵 $A^{*}$ 的任一列向量都是 Ax=0 的解. 又已知 $A_{ij}\neq0$ , 因此 $A^{*}$ 的第 i 个列向量 $(A_{i1},A_{i2},\cdots,A_{in})'$ 是 Ax=0 的基础解系. □

例 3.81 设 n 阶矩阵 A 的行列式等于零, 证明: $A^{*}$ 的秩不超过 1.

证明 若 A 的秩小于 n-1，则 A 的任意一个 n-1 阶子式等于零，故 $A^{*}=O$ ， $A^{*}$ 的秩为零。若 A 的秩等于 n-1，则由上题可知 $A^{*}$ 的 n 个列向量都成比例且至少有一列不为零，故 $A^{*}$ 的秩等于 1。☐

注 当 $n > 2$ 时, 若 $\pmb{A}$ 不是可逆矩阵, 则由上题可知 $(\pmb{A}^{*})^{*} = \pmb{O}$ , 这就给出了例2.39的证法3.

第 2 章解答题 14 设 n 阶矩阵 A 的每一行、每一列的元素之和都为零, 证明: A 的每个元素的代数余子式都相等.

证法 2 由假设可知 A 是奇异矩阵. 若 A 的秩小于 n-1, 则 A 的任意一个代数余子式 $A_{ij}$ 都等于零, 结论显然成立. 若 A 的秩等于 n-1, 则线性方程组 Ax=0 的基础解系只含一个向量. 又因为 A 的每一行元素之和都等于零, 我们可以选取 $\alpha=(1,1,\cdots,1)'$ 作为 Ax=0 的基础解系. 由例 3.80 的证明可知 $A^{*}$ 的每一列都与 $\alpha$ 成比例, 特别地, $A^{*}$ 的每一行都相等. 对 $A'$ 重复上面的讨论, 注意到 $(A')^{*}=(A^{*})'$ , 从而 $A^{*}$ 的每一列都相等, 于是 A 的所有代数余子式 $A_{ij}$ 都相等. □

由公式 $\dim V_{\mathbf{A}} + \mathrm{r}(\mathbf{A}) = n$ 可以得到一个简单的推论, 即线性方程组 $A\mathbf{x} = \mathbf{0}$ 只有零解的充要条件是 $\mathbf{A}$ 为列满秩阵. 特别地, 若 $\mathbf{A}$ 是方阵, 则线性方程组 $A\mathbf{x} = \mathbf{0}$ 只有零解的充要条件是 $\mathbf{A}$ 为非异阵. 这一充要条件可以用来证明方阵的非异性 (参考 §2.4), 我们在例 2.30 中应用过, 下面再来看几个典型例题.

例 3.82 设 A 是 n 阶实反对称阵, $D = \text{diag}\{d_1, d_2, \cdots, d_n\}$ 是同阶对角阵且主对角元素全大于零, 求证: $|A + D| > 0$ . 特别地, $|I_n \pm A| > 0$ , 从而 $I_n \pm A$ 都是非异阵.

证明 先证明 $\left|A+D\right|\neq0$ ，只需证明 $(A+D)x=0$ 只有零解。因为 $\boldsymbol{x}^{\prime}(A+D)\boldsymbol{x}=0$ ，转置可得 $\boldsymbol{x}^{\prime}(-A+D)\boldsymbol{x}=0$ ，上述两式相加即得 $x^{\prime}Dx=0$ 。若设 $\boldsymbol{x}=(x_{1},x_{2},\cdots,x_{n})^{\prime}$ ，则有 $d_{1}x_{1}^{2}+d_{2}x_{2}^{2}+\cdots+d_{n}x_{n}^{2}=0$ 。由于 $d_{i}$ 都大于零并且 $x_{i}$ 都是实数，故只能是 $x_{1}=x_{2}=\cdots=x_{n}=0$ ，即有 x=0。

再证明本题的结论. 设 $f(t) = |tA + D|$ , 则 $f(t)$ 是关于 $t$ 的多项式, 从而是关于 $t$ 的连续函数. 注意到对任意的实数 $t, tA$ 仍是实反对称阵, 故由上面的讨论可得 $f(t) = |tA + D| \neq 0$ , 即 $f(t)$ 是 $\mathbb{R}$ 上处处不为零的连续函数. 注意到当 $t = 0$ 时, $f(0) = |D| > 0$ , 因此 $f(t)$ 只能是 $\mathbb{R}$ 上取值恒为正数的连续函数. 特别地, $f(1) = |A + D| > 0$ . □

例 3.83 如果 n 阶实方阵 $A = (a_{ij})$ 适合条件:

$$
\left| a _ {i i} \right| > \sum_ {j = 1, j \neq i} ^ {n} \left| a _ {i j} \right|, 1 \leq i \leq n,
$$

则称 $A$ 是严格对角占优阵. 求证: 严格对角占优阵必是非异阵. 若上述条件改为

$$
a _ {i i} > \sum_ {j = 1, j \neq i} ^ {n} | a _ {i j} |, 1 \leq i \leq n,
$$

求证: $|A|>0$ .

证明 对第一个结论, 只需证明线性方程组 Ax = 0 只有零解. 若有非零解, 设为 $(c_{1}, c_{2}, \cdots, c_{n})$ , 假设 $c_{k}$ 是其中绝对值最大者. 将解代入该方程组的第 k 个方程式, 得

$$
a _ {k 1} c _ {1} + \dots + a _ {k k} c _ {k} + \dots + a _ {k n} c _ {n} = 0,
$$

即有

$$
- a _ {k k} c _ {k} = a _ {k 1} c _ {1} + \dots + a _ {k, k - 1} c _ {k - 1} + a _ {k, k + 1} c _ {k + 1} + \dots + a _ {k n} c _ {n}.
$$

上式两边同取绝对值, 由三角不等式以及 $c_{k}$ 是绝对值最大的假设可得

$$
\begin{array}{r c l} | a _ {k k} | | c _ {k} | & \leq & | a _ {k 1} | | c _ {1} | + \dots + | a _ {k, k - 1} | | c _ {k - 1} | + | a _ {k, k + 1} | | c _ {k + 1} | + \dots + | a _ {k n} | | c _ {n} | \\ & \leq & \left(\sum_ {j = 1, j \neq k} ^ {n} | a _ {k j} |\right) | c _ {k} |, \end{array}
$$

从而有

$$
\left| a _ {k k} \right| \leq \sum_ {j = 1, j \neq k} ^ {n} \left| a _ {k j} \right|,
$$

得到矛盾. 因此, 方程组 Ax = 0 只有零解.

第二个结论的证明可借助连续函数的性质. 考虑矩阵 $t\mathbf{I}_n + \mathbf{A}$ , 当 $t \geq 0$ 时, 这是一个严格对角占优阵, 因此其行列式 $f(t) = |t\mathbf{I}_n + \mathbf{A}|$ 不为零. 又 $f(t)$ 是关于 $t$ 的多项式且首项系数为 1 , 所以当 $t$ 充分大时, $f(t) > 0$ . 注意到 $f(t)$ 是 $[0, +\infty)$ 上处处不为零的连续函数, 并且当 $t$ 充分大时取值为正, 因此 $f(t)$ 在 $[0, +\infty)$ 上取值恒为正. 特别地, $f(0) = |\mathbf{A}| > 0$ . □

例 3.84 设 A 是 n 阶实对称阵, 求证: $I_{n} + iA$ 和 $I_{n} - iA$ 都是非异阵.

证明 只需证明 $(I_n + \mathrm{i}A)x = 0$ 只有零解. 由 $\overline{x}'(I_n + \mathrm{i}A)x = 0$ 共轭转置可得 $\overline{x}'(I_n - \mathrm{i}A)x = 0$ . 上述两式相加, 可得 $\overline{x}'I_nx = 0$ , 因此 $x = 0$ . □

## 3. 利用线性空间理论讨论矩阵的秩

按照最初的定义, 矩阵的秩就是矩阵的行 (列) 向量组的秩, 因此通过线性空间理论去讨论矩阵的秩是十分自然的事情. 下面我们列举一些典型的例题.

例 3.62 求证: $\mathrm{r}\begin{pmatrix} A & C \\ O & B \end{pmatrix} \geq \mathrm{r}(A) + \mathrm{r}(B).$ 

证法3 设 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 是 $A$ 的列分块, $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 是 $A$ 的列向量的极大无关组; 设 $B = (\beta_{1}, \beta_{2}, \cdots, \beta_{l}), C = (\gamma_{1}, \gamma_{2}, \cdots, \gamma_{l})$ 是 $B, C$ 的列分块, $\beta_{j_1}, \beta_{j_2}, \cdots, \beta_{j_s}$ 是 $B$ 的列向量的极大无关组, 则 $\mathrm{r}(A) = r$ 且 $\mathrm{r}(B) = s$ . 我们接下来证明: 作为 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 的列向量, $\begin{pmatrix} \alpha_{i_1} \\ 0 \end{pmatrix}, \cdots, \begin{pmatrix} \alpha_{i_r} \\ 0 \end{pmatrix}, \begin{pmatrix} \gamma_{j_1} \\ \beta_{j_1} \end{pmatrix}, \cdots, \begin{pmatrix} \gamma_{j_s} \\ \beta_{j_s} \end{pmatrix}$ 线性无关. 设

$$
c _ {1} \binom{\boldsymbol {\alpha} _ {i _ {1}}}{\mathbf {0}} + \dots + c _ {r} \binom{\boldsymbol {\alpha} _ {i _ {r}}}{\mathbf {0}} + d _ {1} \binom{\gamma_ {j _ {1}}}{\boldsymbol {\beta} _ {j _ {1}}} + \dots + d _ {s} \binom{\gamma_ {j _ {s}}}{\boldsymbol {\beta} _ {j _ {s}}} = \mathbf {0},
$$

即

$$
c _ {1} \boldsymbol {\alpha} _ {i _ {1}} + \dots + c _ {r} \boldsymbol {\alpha} _ {i _ {r}} + d _ {1} \boldsymbol {\gamma} _ {j _ {1}} + \dots + d _ {s} \boldsymbol {\gamma} _ {j _ {s}} = \mathbf {0}, d _ {1} \boldsymbol {\beta} _ {j _ {1}} + \dots + d _ {s} \boldsymbol {\beta} _ {j _ {s}} = \mathbf {0}.
$$

由上面的假设即得 $c_{1}=\cdots=c_{r}=d_{1}=\cdots=d_{s}=0$ ，于是上述结论得证。因为 $\begin{pmatrix}A&C\\O&B\end{pmatrix}$ 的列向量中有 $r+s$ 个线性无关，故 $\mathrm{r}\begin{pmatrix}A&C\\O&B\end{pmatrix}\geq r+s=\mathrm{r}(A)+\mathrm{r}(B)$ 。☐

设 A 是矩阵, $|D|$ 是 A 的 r 阶子式, A 中所有包含 $|D|$ 为 r 阶子式的 $r+1$ 子式称为 $|D|$ 的 $r+1$ 阶加边子式. 下面的例题给出了矩阵的秩关于加边子式的判定准则.

例 3.85 求证: 矩阵 A 的秩等于 r 的充要条件是 A 存在一个 r 阶子式 $|D|$ 不等于零, 而 $|D|$ 的所有 $r+1$ 阶加边子式全等于零.

证明 只需证明充分性. 不失一般性, 我们可设 $|\pmb{D}|$ 是由 $\pmb{A}$ 的前 $r$ 行和前 $r$ 列构成的 $r$ 阶子式. 设

$$
\boldsymbol {A} = \left( \begin{array}{c} \boldsymbol {\alpha} _ {1} \\ \boldsymbol {\alpha} _ {2} \\ \vdots \\ \boldsymbol {\alpha} _ {m} \end{array} \right) = (\boldsymbol {\beta} _ {1}, \boldsymbol {\beta} _ {2}, \dots , \boldsymbol {\beta} _ {n})
$$

为矩阵 A 的行分块和列分块，记 $\tau_{\leq r}\alpha_{i}$ 为行向量 $\alpha_{i}$ 关于前 r 列的缩短向量（缩短向量的定义请参考例 3.13）， $\tau_{\leq r}\beta_{j}$ 为列向量 $\beta_{j}$ 关于前 r 行的缩短向量。由 $|D| \neq 0$ 可得 $\tau_{\leq r}\alpha_{1}, \cdots, \tau_{\leq r}\alpha_{r}$ 线性无关，由例 3.13 可知 $\alpha_{1}, \cdots, \alpha_{r}$ 线性无关。我们只要证明 $\alpha_{1}, \cdots, \alpha_{r}$ 是 A 的行向量的极大无关组即可得到 $\mathrm{r}(A) = r$ 。用反证法证明，若它们不是极大无关组，则可以添加一个行向量，不妨设为 $\alpha_{r+1}$ ，使得 $\alpha_{1}, \cdots, \alpha_{r}, \alpha_{r+1}$ 线性无关。设 $A_{1}$ 是 A 的前 $r + 1$ 行构成的矩阵，则 $A_{1} = (\tau_{\leq r+1}\beta_{1}, \tau_{\leq r+1}\beta_{2}, \cdots, \tau_{\leq r+1}\beta_{n})$ 且 $\mathrm{r}(A_{1}) = r + 1$ 。由 $|D| \neq 0$ 可得 $\tau_{\leq r}\beta_{1}, \cdots, \tau_{\leq r}\beta_{r}$ 线性无关，由例 3.13 可知 $\tau_{\leq r+1}\beta_{1}, \cdots, \tau_{\leq r+1}\beta_{r}$ 线性无关。因为 $\mathrm{r}(A_{1}) = r + 1$ ，故存在 $A_{1}$ 的一个列向量，不妨设为 $\tau_{\leq r+1}\beta_{r+1}$ ，使得 $\tau_{\leq r+1}\beta_{1}, \cdots, \tau_{\leq r+1}\beta_{r}, \tau_{\leq r+1}\beta_{r+1}$ 线性无关. 设 $A_{2}=(\tau_{\leq r+1}\beta_{1},\cdots,\tau_{\leq r+1}\beta_{r},\tau_{\leq r+1}\beta_{r+1})$ ，即 $A_{2}$ 是 A 的前 $r+1$ 行和前 $r+1$ 列构成的方阵，则 $\mathrm{r}(A_{2})=r+1$ 。因此， $|A_{2}|\neq0$ 是包含 $|D|$ 的 $r+1$ 阶加边子式，这与假设矛盾。☐

例 3.86 设 $m \times n$ 矩阵 A 的 m 个行向量为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ ，且 $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 是其极大无关组，又设 A 的 n 个列向量为 $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ ，且 $\beta_{j_{1}}, \beta_{j_{2}}, \cdots, \beta_{j_{r}}$ 是其极大无关组。证明： $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 和 $\beta_{j_{1}}, \beta_{j_{2}}, \cdots, \beta_{j_{r}}$ 交叉点上的元素组成的子矩阵 D 的行列式 $|D| \neq 0$ 。

证明 因为 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 是极大无关组，故 A 的任一行向量 $\alpha_{s}$ 均可表示为 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}$ 的线性组合。记 $\widetilde{\alpha}_{i_{1}},\widetilde{\alpha}_{i_{2}},\cdots,\widetilde{\alpha}_{i_{r}},\widetilde{\alpha}_{s}$ 分别是 $\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}},\alpha_{s}$ 在 $j_{1},j_{2},\cdots,j_{r}$ 列处的缩短向量，由例 3.13 可知， $\widetilde{\alpha}_{s}$ 均可表示为 $\widetilde{\alpha}_{i_{1}},\widetilde{\alpha}_{i_{2}},\cdots,\widetilde{\alpha}_{i_{r}}$ 的线性组合。考虑由列向量 $\beta_{j_{1}},\beta_{j_{2}},\cdots,\beta_{j_{r}}$ 组成的矩阵 $B=(\beta_{j_{1}},\beta_{j_{2}},\cdots,\beta_{j_{r}})$ ，这是一个 $m\times r$ 矩阵且秩等于 r。由于矩阵 B 的任一行向量 $\widetilde{\alpha}_{s}$ 均可用 $\widetilde{\alpha}_{i_{1}},\widetilde{\alpha}_{i_{2}},\cdots,\widetilde{\alpha}_{i_{r}}$ 线性表示，并且 B 的行秩等于 r，故由例 3.20 可知， $\widetilde{\alpha}_{i_{1}},\widetilde{\alpha}_{i_{2}},\cdots,\widetilde{\alpha}_{i_{r}}$ 是 B 的行向量的极大无关组，从而它们线性无关。注意到 r 阶方阵 D 的行向量恰好是 $\widetilde{\alpha}_{i_{1}},\widetilde{\alpha}_{i_{2}},\cdots,\widetilde{\alpha}_{i_{r}}$ ，因此 D 是满秩阵，从而 $|D|\neq0$ 。☐

例 3.87 设 A 是一个 n 阶方阵, A 的第 $i_{1}, \cdots, i_{r}$ 行和第 $i_{1}, \cdots, i_{r}$ 列交叉点上的元素组成的子式称为 A 的主子式. 若 A 是对称阵或反对称阵且秩等于 r, 求证: A 必有一个 r 阶主子式不等于零.

证明 由对称性或反对称性, 若 A 的第 $i_{1}, \cdots, i_{r}$ 行是 A 的行向量的极大无关组, 则它的第 $i_{1}, \cdots, i_{r}$ 列也是 A 的列向量的极大无关组, 因此由例 3.86 可知, 它们交叉点上的元素组成的 r 阶主子式不等于零. □

例 3.88 证明: 反对称阵的秩必为偶数.

证明 用反证法, 设反对称阵 $A$ 的秩等于 $2r + 1$ , 则由例 3.87 可知, $A$ 有一个 $2r + 1$ 阶主子式 $|D|$ 不等于零. 注意到反对称阵的主子式是反对称行列式, 而奇数阶反对称行列式的值等于零, 从而 $|D| = 0$ , 矛盾. $\square$ 

例 3.75 设 A, B 都是数域 K 上的 n 阶矩阵且 AB = BA, 证明:

$$
\mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) \leq \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - \mathrm{r} (\boldsymbol {A B}).
$$

证法 3 设 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为 A 的列分块， $B = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ 为 B 的列分块。记 $U_{A} = L(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为 A 的列向量生成的 $K^{n}$ 的子空间， $U_{B}, U_{AB}, U_{A+B}$ 的意义同理。因为向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 的极大无关组就是 $L(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 的一组基，故 $r(A) = \dim U_{A}$ ，关于 B, AB, A + B 的等式同理可得。显然，我们有 $U_{A+B} \subseteq U_{A} + U_{B}$ 。注意到 $AB = (A\beta_{1}, A\beta_{2}, \cdots, A\beta_{n})$ ，若设 $\beta_{j} = (b_{1j}, b_{2j}, \cdots, b_{nj})'$ ，则 AB 的列向量 $A\beta_{j} = b_{1j}\alpha_{1} + b_{2j}\alpha_{2} + \cdots + b_{nj}\alpha_{n} \in U_{A}$ ，从而 $U_{AB} \subseteq U_{A}$ 。又因为 AB = BA，故 $U_{AB} \subseteq U_{A} \cap U_{B}$ 。最后，由上述包含关系以及交和空间维数公式可得

$$
\begin{array}{r c l} \mathrm{r} (\boldsymbol {A} + \boldsymbol {B}) + \mathrm{r} (\boldsymbol {A B}) & = & \dim U _ {\boldsymbol {A} + \boldsymbol {B}} + \dim U _ {\boldsymbol {A B}} \leq \dim (U _ {\boldsymbol {A}} + U _ {\boldsymbol {B}}) + \dim (U _ {\boldsymbol {A}} \cap U _ {\boldsymbol {B}}) \\ & = & \dim U _ {\boldsymbol {A}} + \dim U _ {\boldsymbol {B}} = \mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}). \square \end{array}
$$

注 例 3.75 是一道矩阵秩的典型例题, 我们分别给出了它的 3 种证法, 而这恰好对应于本节所阐述的 3 种一般的方法, 请读者好好加以体会. 从另一个角度来看, 第一种证法利用矩阵的初等变换, 从而是代数的方法; 后两种证法利用线性方程组解的理论和线性空间理论, 从而是几何的方法. 不过从本质上看, 后两种几何方法其实是一种方法, 因为它们正好对应于线性映射的核空间和像空间, 而这将是第 4 章要阐述的内容.

## § 3.8 相抵标准型及其应用

任一 $m \times n$ 矩阵 $\mathbf{A}$ 经过初等变换均可化成相抵标准型

$$
\left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right),
$$

其中 $r$ 为 $\mathbf{A}$ 的秩. 矩阵的秩是矩阵在相抵关系下的全系不变量, 即两个同阶矩阵相抵当且仅当它们的秩相等. 在 §2.5 初等变换及其应用这一节, 我们已经看到了相抵标准型的一些应用. 在引入矩阵秩的概念后, 可以利用相抵标准型来解决更多的问题. 通常的方法是, 先对相抵标准型证明该问题成立, 然后再处理一般矩阵的情形. 我们来看下面几个典型的例题.

例 3.89 求证: 秩等于 r 的矩阵可以表示为 r 个秩等于 1 的矩阵之和, 但不能表示为少于 r 个秩为 1 的矩阵之和.

证明 将 A 化为相抵标准型, 即存在非异矩阵 P 及 Q, 使得

$$
A = P \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) Q.
$$

矩阵 $\begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ 显然可以化为 r 个秩等于 1 的矩阵之和, 记为 $A_{1} + A_{2} + \cdots + A_{r}$ ,
则 $A = PA_{1}Q + PA_{2}Q + \cdots + PA_{r}Q$ ，每个 $PA_{i}Q$ 秩都等于 1.

若 $A = B_{1} + B_{2} + \cdots + B_{k}, k < r,$ 且每个 $B_{i}$ 的秩都等于 1, 则由例 3.64 可知 $\mathrm{r}(A) \leq \mathrm{r}(B_{1}) + \mathrm{r}(B_{2}) + \cdots + \mathrm{r}(B_{k}) = k,$ 这与 $\mathrm{r}(A) = r$ 矛盾, 故不可能. □

例 3.90 设 A, B, C 分别为 $m \times n$ , $p \times q$ 和 $m \times q$ 矩阵, $M = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ . 证明: $\mathrm{r}(M) = \mathrm{r}(A) + \mathrm{r}(B)$ 成立的充要条件是矩阵方程 $AX + YB = C$ 有解, 其中 X, Y 分别是 $n \times q$ 和 $m \times p$ 未知矩阵.

证明 先证充分性. 设 $X = X_0$ , $Y = Y_0$ 是矩阵方程 $AX + YB = C$ 的解, 则将 $M$ 的第一分块列右乘 $-X_0$ 加到第二分块列上, 再将第二分块行左乘 $-Y_0$ 加到第一分块行上, 可得分块对角阵 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ , 于是 $\mathrm{r}(M) = \mathrm{r}\left( \begin{array}{cc} A & O \\ O & B \end{array} \right) = \mathrm{r}(A) + \mathrm{r}(B)$ .

再证必要性. 设 $P_{1}AQ_{1} = \begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}, P_{2}BQ_{2} = \begin{pmatrix} I_{s} & O \\ O & O \end{pmatrix}$ , 其中 $P_{1}, Q_{1}, P_{2}, Q_{2}$ 为非异阵, $r = r(A), s = r(B)$ . 注意到问题的条件和结论在相抵变换:

$$
\boldsymbol {A} \mapsto P _ {1} \boldsymbol {A} Q _ {1}, \boldsymbol {B} \mapsto P _ {2} B Q _ {2}, \boldsymbol {C} \mapsto P _ {1} C Q _ {2}, \boldsymbol {X} \mapsto Q _ {1} ^ {- 1} X Q _ {2}, \boldsymbol {Y} \mapsto P _ {1} Y P _ {2} ^ {- 1}
$$

下保持不变, 故不妨从一开始就假设 $A = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , $B = \begin{pmatrix} I_s & O \\ O & O \end{pmatrix}$ 都是相抵标准型. 设 $C = \begin{pmatrix} C_1 & C_2 \\ C_3 & C_4 \end{pmatrix}$ , $X = \begin{pmatrix} X_1 & X_2 \\ X_3 & X_4 \end{pmatrix}$ , $Y = \begin{pmatrix} Y_1 & Y_2 \\ Y_3 & Y_4 \end{pmatrix}$ 为对应的分块. 考虑 $M$ 的如下分块初等变换:

$$
M = \left(\begin{array}{c c c c}I _ {r}&O&C _ {1}&C _ {2}\\O&O&C _ {3}&C _ {4}\\O&O&I _ {s}&O\\O&O&O&O\end{array}\right)\rightarrow \left(\begin{array}{c c c c}I _ {r}&O&O&O\\O&O&O&C _ {4}\\O&O&I _ {s}&O\\O&O&O&O\end{array}\right),
$$

由于 $\mathrm{r}(M) = \mathrm{r}(A) + \mathrm{r}(B) = r + s$ ，故 $C_4 = O$ .于是矩阵方程 $AX + YB = C$ ，即

$$
\left( \begin{array}{c c} \boldsymbol {X} _ {1} & \boldsymbol {X} _ {2} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) + \left( \begin{array}{c c} \boldsymbol {Y} _ {1} & \boldsymbol {O} \\ \boldsymbol {Y} _ {3} & \boldsymbol {O} \end{array} \right) = \left( \begin{array}{c c} \boldsymbol {X} _ {1} + \boldsymbol {Y} _ {1} & \boldsymbol {X} _ {2} \\ \boldsymbol {Y} _ {3} & \boldsymbol {O} \end{array} \right) = \left( \begin{array}{c c} \boldsymbol {C} _ {1} & \boldsymbol {C} _ {2} \\ \boldsymbol {C} _ {3} & \boldsymbol {O} \end{array} \right)
$$

有解, 例如 $X_{1} = C_{1}, X_{2} = C_{2}, Y_{1} = O, Y_{3} = C_{3}$ , 其余分块取法任意. $\square$ 

例 3.91 设 A 是 $m \times n$ 矩阵, 求证:

(1) 若 $\mathrm{r}(\pmb {A}) = n$ , 即 $\pmb{A}$ 是列满秩阵, 则必存在秩等于 $n$ 的 $n\times m$ 矩阵 $\pmb{B}$ , 使得 $BA = I_{n}$ (这样的矩阵 $\pmb{B}$ 称为 $\pmb{A}$ 的左逆);

(2) 若 $\mathrm{r}(\pmb{A}) = m$ , 即 $\pmb{A}$ 是行满秩阵, 则必存在秩等于 $m$ 的 $n \times m$ 矩阵 $\pmb{C}$ , 使得 $AC = I_{m}$ (这样的矩阵 $\pmb{C}$ 称为 $\pmb{A}$ 的右逆).

证明 (1) 设 $P$ 为 $m$ 阶非异阵, $Q$ 为 $n$ 阶非异阵, 使得

$$
P A Q = \binom{I _ {n}}{O},
$$

因此 $(I_{n},O)PAQ = I_{n}$ , 即 $(I_{n},O)PA = Q^{-1}$ , 于是 $Q(I_n,O)PA = I_n$ . 令 $B = Q(I_n,O)P$ 即可.

(2) 同理可证, 或者考虑 $A'$ 并利用 (1) 的结论. $\square$ 

推论 列满秩矩阵适合左消去律, 即若 $\pmb{A}$ 列满秩且 $AD = AE$ , 则 $D = E$ . 同理, 行满秩矩阵适合右消去律, 即若 $\pmb{A}$ 行满秩且 $DA = EA$ , 则 $D = E$ .

例 3.92 (满秩分解) 设 $m \times n$ 矩阵 A 的秩为 r, 证明:

(1) $A = BC$ , 其中 $B$ 是 $m \times r$ 矩阵且 $\mathrm{r}(B) = r$ , $C$ 是 $r \times n$ 矩阵且 $\mathrm{r}(C) = r$ , 这种分解称为 $A$ 的满秩分解;

(2) 若 $\pmb{A}$ 有两个满秩分解 $A = B_{1}C_{1} = B_{2}C_{2}$ , 则存在 $r$ 阶非异阵 $\pmb{P}$ , 使得 $B_{2} = B_{1}\pmb{P}, C_{2} = P^{-1}C_{1}$ .

证明 (1) 设 $P$ 为 $m$ 阶非异阵, $Q$ 为 $n$ 阶非异阵, 使得

$$
A = P \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) Q = P \binom{I _ {r}}{O} (I _ {r}, O) Q.
$$

令 $B = P \begin{pmatrix} I_{r} \\ O \end{pmatrix}$ , $C = (I_{r}, O)Q$ , 即得结论.

(2) 由例 3.91 可知, 存在 $r \times m$ 行满秩阵 $S_{2}, n \times r$ 列满秩阵 $T_{2}$ , 使得 $S_{2}B_{2} = I_{r}$ , $C_{2}T_{2} = I_{r}$ , 于是

$$
\boldsymbol {B} _ {2} = \boldsymbol {B} _ {2} (\boldsymbol {C} _ {2} \boldsymbol {T} _ {2}) = (\boldsymbol {B} _ {2} \boldsymbol {C} _ {2}) \boldsymbol {T} _ {2} = (\boldsymbol {B} _ {1} \boldsymbol {C} _ {1}) \boldsymbol {T} _ {2} = \boldsymbol {B} _ {1} (\boldsymbol {C} _ {1} \boldsymbol {T} _ {2}),
$$

$$
\boldsymbol {C} _ {2} = \left(\boldsymbol {S} _ {2} \boldsymbol {B} _ {2}\right) \boldsymbol {C} _ {2} = \boldsymbol {S} _ {2} \left(\boldsymbol {B} _ {2} \boldsymbol {C} _ {2}\right) = \boldsymbol {S} _ {2} \left(\boldsymbol {B} _ {1} \boldsymbol {C} _ {1}\right) = \left(\boldsymbol {S} _ {2} \boldsymbol {B} _ {1}\right) \boldsymbol {C} _ {1},
$$

$$
\left(\boldsymbol {S} _ {2} \boldsymbol {B} _ {1}\right) \left(\boldsymbol {C} _ {1} \boldsymbol {T} _ {2}\right) = \boldsymbol {S} _ {2} \left(\boldsymbol {B} _ {1} \boldsymbol {C} _ {1}\right) \boldsymbol {T} _ {2} = \boldsymbol {S} _ {2} \left(\boldsymbol {B} _ {2} \boldsymbol {C} _ {2}\right) \boldsymbol {T} _ {2} = \left(\boldsymbol {S} _ {2} \boldsymbol {B} _ {2}\right) \left(\boldsymbol {C} _ {2} \boldsymbol {T} _ {2}\right) = \boldsymbol {I} _ {r}.
$$

令 $P = C_{1}T_{2}$ ，即得结论。□

注 从几何的观点来看, $A = BC$ 是满秩分解当且仅当 $B$ 的 $r$ 个列向量是 $A$ 的 $n$ 个列向量张成线性空间的一组基, 也当且仅当 $C$ 的 $r$ 个行向量是 $A$ 的 $m$ 个行向量张成线性空间的一组基 (请读者自行证明). 有了这个结论, 我们可以不用计算 $A$ 的相抵标准型, 就能得到它的满秩分解.

例 3.93 设 A 为 $m \times n$ 矩阵, 证明: 存在 $n \times m$ 矩阵 B, 使得 ABA = A.

证法1 设 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , 其中 $P$ 是 $m$ 阶非异阵, $Q$ 是 $n$ 阶非异阵. 注意到问题的条件和结论在相抵变换: $A \mapsto PAQ$ , $B \mapsto Q^{-1}BP^{-1}$ 下保持不变, 故不妨从一开始就假设 $A = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ 是相抵标准型. 设 $B = \begin{pmatrix} B_1 & B_2 \\ B_3 & B_4 \end{pmatrix}$ 为对应的分块, 由 $ABA = A$ 可得 $B_1 = I_r$ , 其余分块取法任意.

证法2 设 $A = CD$ 为 $\pmb{A}$ 的满秩分解, $\pmb{E}$ 为列满秩阵 $\pmb{C}$ 的左逆, $\pmb{F}$ 是行满秩阵 $\pmb{D}$ 的右逆. 令 $B = FE$ , 则

$$
A B A = (C D) (F E) (C D) = C (D F) (E C) D = C D = A. \square
$$

例3.94 设 $A, B$ 分别是 $3 \times 2, 2 \times 3$ 矩阵且满足

$$
\boldsymbol {A} \boldsymbol {B} = \left( \begin{array}{c c c} 8 & 2 & - 2 \\ 2 & 5 & 4 \\ - 2 & 4 & 5 \end{array} \right),
$$

试求 BA.

解法 1 通过简单的计算可得 $\mathrm{r}(AB)=2$ ，从而 $\mathrm{r}(A)\geq2,\mathrm{r}(B)\geq2$ 。又因为矩阵的秩不超过行数和列数的最小值，故 $\mathrm{r}(A)=\mathrm{r}(B)=2$ ，即 A 是列满秩阵，B 是行满秩阵。再通过简单的计算可得 $(AB)^{2}=9AB$ ，经整理可得 $A(BA-9I_{2})B=O$ 。根据例 3.91 的推论，可以在上式的左边消去 A，右边消去 B，从而可得 $BA=9I_{2}$ 。

解法 2 由解法 1 中矩阵秩的计算可知, AB 是题中 3 阶矩阵 C 的满秩分解. 注意到 C 的后两列线性无关, 因此可取另一种满秩分解为

$$
\boldsymbol {C} = \left( \begin{array}{c c} 2 & - 2 \\ 5 & 4 \\ 4 & 5 \end{array} \right) \left( \begin{array}{c c c} 2 & 1 & 0 \\ - 2 & 0 & 1 \end{array} \right) = \boldsymbol {A} _ {1} \boldsymbol {B} _ {1}.
$$

由例 3.92 可知, BA 相似于 $B_{1}A_{1}=9I_{2}$ , 从而 $BA=P^{-1}(9I_{2})P=9I_{2}$ . □

下面我们给出幂等矩阵关于满秩分解的一个刻画.

例 3.95 设 A 是 n 阶方阵且 $\mathrm{r}(A)=r$ ，求证： $A^{2}=A$ 的充要条件是存在秩等于 r 的 $n \times r$ 矩阵 S 和秩等于 r 的 $r \times n$ 矩阵 T，使得 A=ST, $TS=I_{r}$ .

证明 充分性显然, 现证必要性. 设 $P, Q$ 为 $n$ 阶非异阵, 使得

$$
A = P \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) Q.
$$

代入 $A^{2}=A$ 消去两侧的非异阵 P 和 Q, 可得

$$
\left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) Q P \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

只需令

$$
\boldsymbol {S} = \boldsymbol {P} \left( \begin{array}{c c} \boldsymbol {I} _ {r} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) \binom{\boldsymbol {I} _ {r}}{\boldsymbol {O}}, \boldsymbol {T} = (\boldsymbol {I} _ {r}, \boldsymbol {O}) \left( \begin{array}{c c} \boldsymbol {I} _ {r} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) \boldsymbol {Q},
$$

经简单计算即得结论. □

推论 设 A 为 n 阶幂等矩阵, 则 $\mathrm{tr}(A)=\mathrm{r}(A)$ .

证明 由上例可知, $\operatorname{tr}(\boldsymbol{A}) = \operatorname{tr}(\boldsymbol{S}\boldsymbol{T}) = \operatorname{tr}(\boldsymbol{T}\boldsymbol{S}) = \operatorname{tr}(\boldsymbol{I}_r) = r = \operatorname{r}(\boldsymbol{A})$ . □

注 如果读者已学过相似标准型, 用相似标准型来证明则更简单. 事实上, 由 $A^2 = A$ 可知, 存在可逆矩阵 $\pmb{P}$ , 使得

$$
\boldsymbol {A} = \boldsymbol {P} \left( \begin{array}{c c} \boldsymbol {I} _ {r} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) \boldsymbol {P} ^ {- 1} = \boldsymbol {P} \binom{\boldsymbol {I} _ {r}}{\boldsymbol {O}} (\boldsymbol {I} _ {r}, \boldsymbol {O}) \boldsymbol {P} ^ {- 1},
$$

令 $S = P \begin{pmatrix} I_{r} \\ O \end{pmatrix}, T = (I_{r}, O)P^{-1}$ 即可.

在后面的章节中我们可以看到, 利用矩阵的相抵标准型, 还可以化简线性映射的表示矩阵 (例 4.22), 证明特征值的降阶公式 (例 6.19), 研究 $AX = XB$ 型矩阵方程的解 (例 6.23), 以及处理矩阵的相似问题 (例 6.47) 等.

## § 3.9 线性方程组的解及其应用

如何求解线性方程组是高等代数中第一个重要的问题, 为了彻底地回答这个问题, 我们依次引入了行列式、矩阵和线性空间等概念, 并发展了它们的一整套理论, 然后才给出了这一问题的完满回答. 线性方程组的求解理论自身内容十分丰富, 包括解的判定定理和结构定理等; 其应用也十分广泛, 例如, 我们曾用线性方程组的求解理论判定某个向量能否由给定向量组线性表出, 求出交空间的基以及推导出矩阵秩的相关性质等. 在本节中, 我们将给出带参数线性方程组解的讨论和解空间的相关性质、线性方程组公共解的讨论以及线性方程组的求解理论在解析几何上的应用等.

## 1. 线性方程组解的讨论和解空间的性质

例 3.96 讨论下列线性方程组的解, 其中 $\lambda$ 为参数:

$$
\left\{ \begin{array}{l} 2 x _ {1} + 3 x _ {2} + x _ {3} + x _ {4} = 1, \\ x _ {1} + 2 x _ {2} - x _ {3} + 4 x _ {4} = 2, \\ x _ {1} + 3 x _ {2} - 4 x _ {3} + 1 1 x _ {4} = \lambda . \end{array} \right.
$$

解 对增广矩阵进行初等行变换:

$$
\left(\begin{array}{c c c c c}2&3&1&1&1\\1&2&- 1&4&2\\1&3&- 4&1 1&\lambda\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}1&2&- 1&4&2\\2&3&1&1&1\\1&3&- 4&1 1&\lambda\end{array}\right)\rightarrow
$$

$$
\left(\begin{array}{c c c c c}1&2&- 1&4&2\\0&- 1&3&- 7&- 3\\0&1&- 3&7&\lambda - 2\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}1&2&- 1&4&2\\0&- 1&3&- 7&- 3\\0&0&0&0&\lambda - 5\end{array}\right).
$$

因此, 当 $\lambda = 5$ 时有无穷多组解, 否则无解. □

例 3.97 讨论下列线性方程组的解, 其中 $\lambda$ 为参数:

$$
\left\{ \begin{array}{l} \lambda x _ {1} + x _ {2} + x _ {3} + x _ {4} = 1, \\ x _ {1} + \lambda x _ {2} + x _ {3} + x _ {4} = \lambda , \\ x _ {1} + x _ {2} + \lambda x _ {3} + x _ {4} = \lambda^ {2}, \\ x _ {1} + x _ {2} + x _ {3} + \lambda x _ {4} = \lambda^ {3}. \end{array} \right.
$$

解 对增广矩阵进行初等行变换 (将所有行加到第一行), 可得

$$
\left( \begin{array}{c c c c c} \lambda + 3 & \lambda + 3 & \lambda + 3 & \lambda + 3 & b \\ 1 & \lambda & 1 & 1 & \lambda \\ 1 & 1 & \lambda & 1 & \lambda^ {2} \\ 1 & 1 & 1 & \lambda & \lambda^ {3} \end{array} \right),
$$

其中 $b = 1 + \lambda +\lambda^2 +\lambda^3$ .若 $\lambda = -3,$ 则 $b = -20$ ，此时原方程组无解

现设 $\lambda \neq -3$ . 令 $c = b / (\lambda + 3)$ , 则上述矩阵经初等行变换可变为

$$
\left( \begin{array}{c c c c c} 1 & 1 & 1 & 1 & c \\ 1 & \lambda & 1 & 1 & \lambda \\ 1 & 1 & \lambda & 1 & \lambda^ {2} \\ 1 & 1 & 1 & \lambda & \lambda^ {3} \end{array} \right) \to \left( \begin{array}{c c c c c} 1 & 1 & 1 & 1 & c \\ 0 & \lambda - 1 & 0 & 0 & \lambda - c \\ 0 & 0 & \lambda - 1 & 0 & \lambda^ {2} - c \\ 0 & 0 & 0 & \lambda - 1 & \lambda^ {3} - c \end{array} \right).
$$

因此, 当 $\lambda = 1$ 时, $c = 1$ , 原方程组有无穷多组解; 当 $\lambda \neq 1, -3$ 时, 原方程组有唯一一组解. $\square$ 

例 3.98 设 A 是一个 $m \times n$ 矩阵，记 $\alpha_{i}$ 是 A 的第 i 个行向量， $\beta = (b_{1}, b_{2}, \cdots, b_{n})$ . 求证：若齐次线性方程组 Ax = 0 的解全是方程 $b_{1}x_{1} + b_{2}x_{2} + \cdots + b_{n}x_{n} = 0$ 的解，则 $\beta$ 是 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 的线性组合.

证明 令 $B = \begin{pmatrix} A \\ \beta \end{pmatrix}$ , 由已知, 方程组 $Ax = 0$ 和方程组 $Bx = 0$ 同解, 故 $\mathrm{r}(A) = \mathrm{r}(B)$ , 从而 $A$ 的行向量的极大无关组也是 $B$ 的行向量的极大无关组. 因此, $\beta$ 可表示为 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 的线性组合. $\square$ 

例 3.99 设 Ax = β 是 m 个方程式 n 个未知数的线性方程组, 求证: 它有解的充要条件是方程组 $A'y = 0$ 的任一解 α 均适合等式 $\alpha' \beta = 0$ .

证明 方程组 $Ax = \beta$ 有解当且仅当 $r(A; \beta) = r(A)$ , 当且仅当 $r\begin{pmatrix} A' \\ \beta'\end{pmatrix} = r(A')$ , 当且仅当方程组 $\begin{pmatrix} A'\ \\ \beta'\end{pmatrix} y = 0$ 与 $A'y = 0$ 同解, 而这当且仅当 $A'y = 0$ 的任一解 $\alpha$ 均适合等式 $\beta'\alpha = 0$ , 即 $\alpha'\beta = 0$ . $\square$ 

例 3.100 设有两个线性方程组:

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1} + a _ {1 2} x _ {2} + \dots + a _ {1 n} x _ {n} = b _ {1}, \\ a _ {2 1} x _ {1} + a _ {2 2} x _ {2} + \dots + a _ {2 n} x _ {n} = b _ {2}, \\ \dots \dots \\ a _ {m 1} x _ {1} + a _ {m 2} x _ {2} + \dots + a _ {m n} x _ {n} = b _ {m}; \end{array} \right.\tag{3.1}
$$

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1} + a _ {2 1} x _ {2} + \dots + a _ {m 1} x _ {m} = 0, \\ a _ {1 2} x _ {1} + a _ {2 2} x _ {2} + \dots + a _ {m 2} x _ {m} = 0, \\ \dots \dots \\ a _ {1 n} x _ {1} + a _ {2 n} x _ {2} + \dots + a _ {m n} x _ {m} = 0, \\ b _ {1} x _ {1} + b _ {2} x _ {2} + \dots + b _ {m} x _ {m} = 1. \end{array} \right.\tag{3.2}
$$

求证: 方程组 (3.1) 有解的充要条件是方程组 (3.2) 无解.

证明 设第一个线性方程组的系数矩阵为 $A$ , 常数向量为 $\beta$ , 则第二个线性方程组的系数矩阵和增广矩阵分别为

$$
\boldsymbol {B} = \binom{\boldsymbol {A} ^ {\prime}}{\beta^ {\prime}}, \widetilde {\boldsymbol {B}} = \left( \begin{array}{c c} \boldsymbol {A} ^ {\prime} & \boldsymbol {O} \\ \beta^ {\prime} & 1 \end{array} \right).
$$

显然, 我们有 $\mathrm{r}(\widetilde{\boldsymbol{B}})=\mathrm{r}(\boldsymbol{A}^{\prime})+1=\mathrm{r}(\boldsymbol{A})+1.$ 

若方程组 (3.1) 有解, 则 $\mathrm{r}(\boldsymbol{A};\boldsymbol{\beta}) = \mathrm{r}(\boldsymbol{A})$ , 故 $\mathrm{r}(\boldsymbol{B}) = \mathrm{r}(\boldsymbol{B}') = \mathrm{r}(\boldsymbol{A};\boldsymbol{\beta}) = \mathrm{r}(\boldsymbol{A}) \neq \mathrm{r}(\widetilde{\boldsymbol{B}})$ . 因此, 方程组 (3.2) 无解.

反之, 若方程组 (3.1) 无解, 则 $\mathrm{r}(\boldsymbol{A};\boldsymbol{\beta}) = \mathrm{r}(\boldsymbol{A}) + 1$ , 故 $\mathrm{r}(\boldsymbol{B}) = \mathrm{r}(\boldsymbol{B}') = \mathrm{r}(\boldsymbol{A};\boldsymbol{\beta}) = \mathrm{r}(\boldsymbol{A}) + 1 = \mathrm{r}(\widetilde{\boldsymbol{B}})$ . 因此, 方程组 (3.2) 有解. □

例 3.101 设 A 是秩为 r 的 $m \times n$ 矩阵, 求证: 必存在秩为 n - r 的 $n \times (n - r)$ 矩阵 B, 使得 AB = O.

证明 考虑线性方程组 Ax=0, 它有 n-r 个基础解系, 不妨设为 $\beta_{1},\cdots,\beta_{n-r}$ .
令 $B = (\beta_{1}, \cdots, \beta_{n-r})$ ，则 $AB = (A\beta_{1}, \cdots, A\beta_{n-r}) = O$ ，结论得证. □

例3.102 设

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right) (m <   n),
$$

已知 Ax = 0 的基础解系为 $\beta_{i} = (b_{i1}, b_{i2}, \cdots, b_{in})' (1 \leq i \leq n - m)$ ，试求齐次线性方程组

$$
\sum_ {j = 1} ^ {n} b _ {i j} y _ {j} = 0 (i = 1, 2, \dots , n - m)
$$

的基础解系.

解 令 $B = (\beta_{1}, \beta_{2}, \cdots, \beta_{n - m})$ , 则 $AB = O$ , $B'A' = O$ . 已知 $A$ 的秩为 $m$ , 因此 $B'y = 0$ 的基础解系为 $A'$ 的全部列向量, 即 $A$ 的所有行向量. $\square$ 

例 3.103 设 $V_{0}$ 是数域 K 上 n 维列向量空间的真子空间, 求证: 必存在矩阵 A, 使得 $V_{0}$ 是 n 元齐次线性方程组 Ax = 0 的解空间.

证明 设 $\beta_{1},\cdots,\beta_{r}$ 是子空间 $V_{0}$ 的一组基. 令 $B=(\beta_{1},\cdots,\beta_{r})$ ，这是一个 $n\times r$ 矩阵. 考虑齐次线性方程组 $B^{\prime}x=0$ ，因为 B 的秩等于 r，故其基础解系含 n-r 个向量，记为 $\alpha_{1},\cdots,\alpha_{n-r}$ . 令 $A=(\alpha_{1},\cdots,\alpha_{n-r})^{\prime}$ ，这是个 $(n-r)\times n$ 矩阵且秩为 n-r. 由 $B^{\prime}A^{\prime}=O$ 可得 AB=O，因此齐次线性方程组 Ax=0 的基础解系是 $\beta_{1},\cdots,\beta_{r}$ ，其解空间就是 $V_{0}$ . □

例 3.104 设 A 是秩为 r 的 $m \times n$ 矩阵, $\alpha_{1}, \cdots, \alpha_{n-r}$ 与 $\beta_{1}, \cdots, \beta_{n-r}$ 是齐次线性方程组 Ax = 0 的两个基础解系. 求证: 必存在 n - r 阶可逆矩阵 P, 使得

$$
\left(\beta_ {1}, \dots , \beta_ {n - r}\right) = \left(\alpha_ {1}, \dots , \alpha_ {n - r}\right) P.
$$

证明 设 U 是齐次线性方程组 Ax = 0 的解空间, 则向量组 $\alpha_{1}, \cdots, \alpha_{n-r}$ 与 $\beta_{1}, \cdots, \beta_{n-r}$ 是 U 的两组基. 令 P 是这两组基之间的过渡矩阵, 则

$$
\left(\beta_ {1}, \dots , \beta_ {n - r}\right) = \left(\alpha_ {1}, \dots , \alpha_ {n - r}\right) P. \square
$$

线性方程组解的判定定理可以推广到矩阵方程的情形.

例 3.105 设 A, B 为 $m \times n$ 和 $m \times p$ 矩阵, X 为 $n \times p$ 未知矩阵, 证明: 矩阵方程 AX = B 有解的充要条件是 $\mathrm{r}(A; B) = \mathrm{r}(A)$ .

证明 设 $A = (\alpha_{1}, \cdots, \alpha_{n})$ , $B = (\beta_{1}, \cdots, \beta_{p})$ , $X = (x_{1}, \cdots, x_{p})$ 为对应的列分块. 设 $r(A) = r$ 且 $\alpha_{i_{1}}, \cdots, \alpha_{i_{r}}$ 是 A 的列向量的极大无关组. 注意到矩阵方程 AX = B 有解当且仅当 p 个线性方程组. $Ax_{i} = \beta_{i} (1 \leq i \leq p)$ 都有解. 因此, 若 AX = B 有解, 则每个 $\beta_{i}$ 都是 A 的列向量的线性组合, 从而是 $\alpha_{i_{1}}, \cdots, \alpha_{i_{r}}$ 的线性组合, 于是 $\alpha_{i_{1}}, \cdots, \alpha_{i_{r}}$ 是 $(A; B)$ 的列向量的极大无关组, 故 $r(A; B) = r$ . 反之, 若 $r(A; B) = r$ , 则由例 3.20 可知, $\alpha_{i_{1}}, \cdots, \alpha_{i_{r}}$ 是 $(A; B)$ 的列向量的极大无关组, 于是每个 $\beta_{i}$ 都是 A 的列向量的线性组合, 从而 AX = B 有解. □

线性方程组解的结构定理也可以推广到矩阵方程的情形, 我们通过一个具体的例子进行说明.

例 3.106 设 $A = \begin{pmatrix} 1 & 1 & 2 & 1 \\ 1 & 2 & 3 & 3 \\ 2 & 3 & 5 & 4 \\ 3 & 5 & 8 & 7 \end{pmatrix}$ , $B = \begin{pmatrix} 1 & 1 \\ 5 & -1 \\ 6 & 0 \\ 11 & -1 \end{pmatrix}$ , X 为 $4 \times 2$ 未知矩阵, 试求矩阵方程 AX = B 的解.

解 将矩阵方程的增广矩阵 $(A; B)$ 进行初等行变换 (必要时可进行列对换), 最后化成如下解方程组的标准型:

$$
\left(\begin{array}{c c c c c c}1&1&2&1&1&1\\1&2&3&3&5&- 1\\2&3&5&4&6&0\\3&5&8&7&1 1&- 1\end{array}\right)\rightarrow \left(\begin{array}{c c c c c c}1&0&1&- 1&- 3&3\\0&1&1&2&4&- 2\\0&0&0&0&0&0\\0&0&0&0&0&0\end{array}\right).
$$

由 $\mathrm{r}(\mathbf{A};\mathbf{B}) = \mathrm{r}(\mathbf{A}) = 2$ 可知矩阵方程有解，再由线性方程组解的结构定理可知矩阵方程的解为

$X = \begin{pmatrix} -1 & 1 \\ -1 & -2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} k_{11} & k_{12} \\ k_{21} & k_{22} \end{pmatrix} + \begin{pmatrix} -3 & 3 \\ 4 & -2 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}$ ，其中 $k_{ij} \in K.$ □

例 3.107 设 A, B 为 $m \times n$ 和 $n \times p$ 矩阵, 证明: 存在 $p \times n$ 矩阵 C, 使得 ABC = A 的充要条件是 $\mathrm{r}(A) = \mathrm{r}(AB)$ .

证明 必要性由秩的不等式 $\mathrm{r}(\mathbf{A})\geq \mathrm{r}(\mathbf{AB})\geq \mathrm{r}(\mathbf{ABC}) = \mathrm{r}(\mathbf{A})$ 即得. 充分性由例3.105以及秩的不等式 $\mathrm{r}(\mathbf{AB})\leq \mathrm{r}(\mathbf{AB};\mathbf{A}) = \mathrm{r}\left(\mathbf{A}(\mathbf{B};\mathbf{I}_n)\right)\leq \mathrm{r}(\mathbf{A})$ 即得. □

## 2. 线性方程组的公共解

如果有两个含 $n$ 个未知数的齐次线性方程组 $Ax = 0$ 和 $Bx = 0$ , 要求它们的公共解, 只需将它们联立起来求解即可. 若只已知两个齐次线性方程组的基础解系,而不知道方程组本身, 要求它们的公共解, 只需求它们的基础解系生成的解空间的交即可, 而求两个子空间交的方法在 §3.6 中已有交代. 对两个非齐次线性方程组, 若只已知它们的通解, 而不知道方程组本身, 要求它们的公共解, 我们可以这样来做:

设 $Ax = \beta_{1}, Bx = \beta_{2}$ 是两个含 n 个未知数的非齐次线性方程组。方程组 $Ax = \beta_{1}$ 有特解 $\gamma$ 且 Ax = 0 的基础解系为 $\eta_{1}, \cdots, \eta_{n-r}$ 。方程组 $Bx = \beta_{2}$ 有特解 $\delta$ 且 Bx = 0 的基础解系为 $\xi_{1}, \cdots, \xi_{n-s}$ 。

方法 1 假设它们的公共解为 $\gamma + t_{1}\eta_{1} + \cdots + t_{n-r}\eta_{n-r}$ , 则 $\gamma + t_{1}\eta_{1} + \cdots + t_{n-r}\eta_{n-r} - \delta$ 是 $Bx = 0$ 的解, 因此可以表示为 $\xi_{1}, \cdots, \xi_{n-s}$ 的线性组合. 于是矩阵 $(\xi_{1}, \cdots, \xi_{n-s}, \gamma + t_{1}\eta_{1} + \cdots + t_{n-r}\eta_{n-r} - \delta)$ 的秩等于 $n - s$ . 由此可以求出 $t_{1}, \cdots, t_{n-r}$ , 从而求出公共解.

方法 2 假设它们的公共解为 $\zeta$ ，则

$$
\zeta = \gamma + t _ {1} \eta_ {1} + \dots + t _ {n - r} \eta_ {n - r} = \delta + (- u _ {1}) \xi_ {1} + \dots + (- u _ {n - s}) \xi_ {n - s}.
$$

要求公共解 $\zeta$ 等价于求解下列关于未定元 $t_{1},\cdots,t_{n-r};u_{1},\cdots,u_{n-s}$ 的线性方程组：

$$
t _ {1} \eta_ {1} + \dots + t _ {n - r} \eta_ {n - r} + u _ {1} \xi_ {1} + \dots + u _ {n - s} \xi_ {n - s} = \delta - \gamma .
$$

下面是这类问题的一个典型例子.

例 3.108 设有两个非齐次线性方程组 (I), (II), 它们的通解分别为

$$
\gamma + t _ {1} \eta_ {1} + t _ {2} \eta_ {2}; \quad \delta + k _ {1} \xi_ {1} + k _ {2} \xi_ {2},
$$

其中 $\gamma = (5, -3, 0, 0)'$ , $\eta_{1} = (-6, 5, 1, 0)'$ , $\eta_{2} = (-5, 4, 0, 1)'$ ; $\delta = (-11, 3, 0, 0)'$ , $\xi_{1} = (8, -1, 1, 0)'$ , $\xi_{2} = (10, -2, 0, 1)'$ . 求这两个方程组的公共解.

解法 1 设公共解为

$$
\boldsymbol {\gamma} + t _ {1} \boldsymbol {\eta} _ {1} + t _ {2} \boldsymbol {\eta} _ {2} = \left( \begin{array}{c} 5 - 6 t _ {1} - 5 t _ {2} \\ - 3 + 5 t _ {1} + 4 t _ {2} \\ t _ {1} \\ t _ {2} \end{array} \right).
$$

注意矩阵 $(\pmb{\xi}_1, \pmb{\xi}_2, \gamma - \delta + t_1 \pmb{\eta}_1 + t_2 \pmb{\eta}_2)$ 的秩等于 2，对此矩阵作初等行变换：

$$
\left(\begin{array}{c c c}8&1 0&1 6 - 6 t _ {1} - 5 t _ {2}\\- 1&- 2&- 6 + 5 t _ {1} + 4 t _ {2}\\1&0&t _ {1}\\0&1&t _ {2}\end{array}\right)\rightarrow \left(\begin{array}{c c c}1&0&t _ {1}\\0&1&t _ {2}\\8&1 0&1 6 - 6 t _ {1} - 5 t _ {2}\\- 1&- 2&- 6 + 5 t _ {1} + 4 t _ {2}\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c} 1 & 0 & t _ {1} \\ 0 & 1 & t _ {2} \\ 0 & 0 & 1 6 - 1 4 t _ {1} - 1 5 t _ {2} \\ 0 & 0 & - 6 + 6 t _ {1} + 6 t _ {2} \end{array} \right),
$$

可得关于 $t_1, t_2$ 的方程组

$$
\left\{ \begin{array}{l} 1 4 t _ {1} + 1 5 t _ {2} = 1 6, \\ 6 t _ {1} + 6 t _ {2} = 6. \end{array} \right.
$$

解得 $t_{1} = -1, t_{2} = 2$ ，所以公共解为（只有一个向量） $\gamma - \eta_{1} + 2\eta_{2} = (1, 0, -1, 2)'$ .

解法 2 求公共解等价于求解下列线性方程组:

$$
t _ {1} \eta_ {1} + t _ {2} \eta_ {2} + u _ {1} \xi_ {1} + u _ {2} \xi_ {2} = \delta - \gamma .
$$

对其增广矩阵实施初等行变换, 可得

$$
\left(\begin{array}{c c c c c}- 6&- 5&8&1 0&- 1 6\\5&4&- 1&- 2&6\\1&0&1&0&0\\0&1&0&1&0\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}1&0&0&0&- 1\\0&1&0&0&2\\0&0&1&0&1\\0&0&0&1&- 2\end{array}\right),
$$

故 $(t_1, t_2, u_1, u_2)$ 只有唯一解 $(-1, 2, 1, -2)$ . 因此, 公共解为 $\gamma - \eta_1 + 2\eta_2 = \delta - \xi_1 + 2\xi_2 = (1, 0, -1, 2)'$ . □

例 3.109 设有非齐次线性方程组 (I):

$$
\left\{ \begin{array}{l} 7 x _ {1} - 6 x _ {2} + 3 x _ {3} = b, \\ 8 x _ {1} - 9 x _ {2} + a x _ {4} = 7. \end{array} \right.
$$

又已知方程组 (II) 的通解为

$$
(1, 1, 0, 0) ^ {\prime} + t _ {1} (1, 0, - 1, 0) ^ {\prime} + t _ {2} (2, 3, 0, 1) ^ {\prime}.
$$

若这两个方程组有无穷多组公共解, 求出 $a, b$ 的值并求出公共解.

解 将 (II) 的通解写为 $(1 + t_{1} + 2t_{2}, 1 + 3t_{2}, -t_{1}, t_{2})'$ , 代入方程组 (I) 化简得到

$$
\left\{ \begin{array}{l} 4 t _ {1} - 4 t _ {2} = b - 1, \\ 8 t _ {1} + (a - 1 1) t _ {2} = 8. \end{array} \right.
$$

要使这两个方程组有无穷多组公共解, $t_1, t_2$ 必须有无穷多组解, 于是上面方程组的系数矩阵和增广矩阵的秩都应该等于 1 , 从而 $a = 3, b = 5$ . 解出方程组得到 $t_1 = t_2 + 1$ , 因此方程组 (I), (II) 的公共解为

$$
(1 + t _ {1} + 2 t _ {2}, 1 + 3 t _ {2}, - t _ {1}, t _ {2}) ^ {\prime} = (2, 1, - 1, 0) ^ {\prime} + t _ {2} (3, 3, - 1, 1) ^ {\prime},
$$

其中 $t_2$ 为任意数. $\square$ 

## 3. 在解析几何上的应用

例 3.110 求平面上 n 个点 $(x_{1}, y_{1}), (x_{2}, y_{2}), \cdots, (x_{n}, y_{n})$ 位于同一条直线上的充要条件.

解 充要条件为第一个点和其余点代表的向量之差属于一个一维子空间, 即 $(x_{i} - x_{1}, y_{i} - y_{1})$ 都成比例. 写成矩阵形式为

$$
\mathrm{r} \left( \begin{array}{c c c c} x _ {2} - x _ {1} & x _ {3} - x _ {1} & \dots & x _ {n} - x _ {1} \\ y _ {2} - y _ {1} & y _ {3} - y _ {1} & \dots & y _ {n} - y _ {1} \end{array} \right) \leq 1,
$$

或

$$
\mathrm{r} \left( \begin{array}{c c c c c} x _ {1} & x _ {2} & x _ {3} & \dots & x _ {n} \\ y _ {1} & y _ {2} & y _ {3} & \dots & y _ {n} \\ 1 & 1 & 1 & \dots & 1 \end{array} \right) \leq 2. \square
$$

例 3.111 求三维实空间中 4 点 $(x_{i}, y_{i}, z_{i}) (1 \leq i \leq 4)$ 共面的充要条件.

解 设 4 点的向量为 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \alpha_{4}$ , 则 4 点共面的充要条件是: 向量组 $\alpha_{2} - \alpha_{1}, \alpha_{3} - \alpha_{1}, \alpha_{4} - \alpha_{1}$ 的秩不超过 2. 不难将此写成矩阵形式:

$$
\mathrm{r} \left( \begin{array}{c c c} x _ {2} - x _ {1} & x _ {3} - x _ {1} & x _ {4} - x _ {1} \\ y _ {2} - y _ {1} & y _ {3} - y _ {1} & y _ {4} - y _ {1} \\ z _ {2} - z _ {1} & z _ {3} - z _ {1} & z _ {4} - z _ {1} \end{array} \right) \leq 2,
$$

或

$$
\mathrm{r} \left( \begin{array}{c c c c} x _ {1} & x _ {2} & x _ {3} & x _ {4} \\ y _ {1} & y _ {2} & y _ {3} & y _ {4} \\ z _ {1} & z _ {2} & z _ {3} & z _ {4} \\ 1 & 1 & 1 & 1 \end{array} \right) \leq 3. \square
$$

例 3.112 证明: 通过平面内不在一条直线上的 3 点 $(x_{1}, y_{1}), (x_{2}, y_{2}), (x_{3}, y_{3})$ 的圆方程为

$$
\left| \begin{array}{c c c c} x ^ {2} + y ^ {2} & x & y & 1 \\ x _ {1} ^ {2} + y _ {1} ^ {2} & x _ {1} & y _ {1} & 1 \\ x _ {2} ^ {2} + y _ {2} ^ {2} & x _ {2} & y _ {2} & 1 \\ x _ {3} ^ {2} + y _ {3} ^ {2} & x _ {3} & y _ {3} & 1 \end{array} \right| = 0.
$$

证明 圆方程可设为

$$
u _ {1} (x ^ {2} + y ^ {2}) + u _ {2} x + u _ {3} y + u _ {4} = 0,
$$

于是得到未知数 $u_{1}, u_{2}, u_{3}, u_{4}$ 的方程组为

$$
\left\{ \begin{array}{l} (x _ {1} ^ {2} + y _ {1} ^ {2}) u _ {1} + x _ {1} u _ {2} + y _ {1} u _ {3} + u _ {4} = 0, \\ (x _ {2} ^ {2} + y _ {2} ^ {2}) u _ {1} + x _ {2} u _ {2} + y _ {2} u _ {3} + u _ {4} = 0, \\ (x _ {3} ^ {2} + y _ {3} ^ {2}) u _ {1} + x _ {3} u _ {2} + y _ {3} u _ {3} + u _ {4} = 0. \end{array} \right.
$$

上述方程组加上原方程组组成一个含 4 个未知数、4 个方程式的齐次线性方程组, 它有非零解的充要条件是系数行列式等于零, 即

$$
\left| \begin{array}{c c c c} x ^ {2} + y ^ {2} & x & y & 1 \\ x _ {1} ^ {2} + y _ {1} ^ {2} & x _ {1} & y _ {1} & 1 \\ x _ {2} ^ {2} + y _ {2} ^ {2} & x _ {2} & y _ {2} & 1 \\ x _ {3} ^ {2} + y _ {3} ^ {2} & x _ {3} & y _ {3} & 1 \end{array} \right| = 0.
$$

由例 3.110 可知 3 点不在一条直线上意味着

$$
\left| \begin{array}{c c c} x _ {1} & y _ {1} & 1 \\ x _ {2} & y _ {2} & 1 \\ x _ {3} & y _ {3} & 1 \end{array} \right| \neq 0,
$$

故圆方程不退化. □

例 3.113 求平面上不在一条直线上的 4 个点 $(x_{1}, y_{1}), (x_{2}, y_{2}), (x_{3}, y_{3}), (x_{4}, y_{4})$ 位于同一个圆上的充要条件.

解 由例 3.112 可得充要条件为

$$
\left| \begin{array}{c c c c} x _ {1} ^ {2} + y _ {1} ^ {2} & x _ {1} & y _ {1} & 1 \\ x _ {2} ^ {2} + y _ {2} ^ {2} & x _ {2} & y _ {2} & 1 \\ x _ {3} ^ {2} + y _ {3} ^ {2} & x _ {3} & y _ {3} & 1 \\ x _ {4} ^ {2} + y _ {4} ^ {2} & x _ {4} & y _ {4} & 1 \end{array} \right| = 0. \square
$$

例 3.114 已知平面上两条不同的二次曲线 $a_{i}x^{2} + b_{i}xy + c_{i}y^{2} + d_{i}x + e_{i}y + f_{i} = 0 (i = 1, 2)$ 交于 4 个不同的点 $(x_{i}, y_{i}) (1 \leq i \leq 4)$ . 求证: 过这 4 个点的二次曲线均可写为如下形状:

$$
\lambda_ {1} \left(a _ {1} x ^ {2} + b _ {1} x y + c _ {1} y ^ {2} + d _ {1} x + e _ {1} y + f _ {1}\right) + \lambda_ {2} \left(a _ {2} x ^ {2} + b _ {2} x y + c _ {2} y ^ {2} + d _ {2} x + e _ {2} y + f _ {2}\right) = 0.
$$

证明 显然上述曲线过这 4 个交点. 现设 $ax^2 + bxy + cy^2 + dx + ey + f = 0$ 是过这 4 个交点的二次曲线, 则有

$$
\left\{ \begin{array}{l} a x _ {1} ^ {2} + b x _ {1} y _ {1} + c y _ {1} ^ {2} + d x _ {1} + e y _ {1} + f = 0, \\ a x _ {2} ^ {2} + b x _ {2} y _ {2} + c y _ {2} ^ {2} + d x _ {2} + e y _ {2} + f = 0, \\ a x _ {3} ^ {2} + b x _ {3} y _ {3} + c y _ {3} ^ {2} + d x _ {3} + e y _ {3} + f = 0, \\ a x _ {4} ^ {2} + b x _ {4} y _ {4} + c y _ {4} ^ {2} + d x _ {4} + e y _ {4} + f = 0. \end{array} \right.\tag{3.3}
$$

视 $a, b, c, d, e, f$ 为未知数, 则线性方程组 (3.3) 有线性无关的解 $(a_{1}, b_{1}, c_{1}, d_{1}, e_{1}, f_{1})'$ , $(a_{2}, b_{2}, c_{2}, d_{2}, e_{2}, f_{2})'$ . 如果能证明方程组 (3.3) 的系数矩阵的秩等于 4 , 则这两个解就构成了基础解系, 从而即得结论.

容易验证 4 个交点中的任意 3 个点都不共线, 而且经过坐标轴适当的旋转, 可以假设这 4 个交点的横坐标 $x_{1}, x_{2}, x_{3}, x_{4}$ 互不相同. 用反证法证明结论, 设方程组 (3.3) 系数矩阵 $\mathbf{A}$ 的秩小于 4. 由任意 3 个交点不共线以及例 3.110 可知, $(x_{1}, x_{2}, x_{3}, x_{4})'$ , $(y_{1}, y_{2}, y_{3}, y_{4})'$ , $(1, 1, 1, 1)'$ 线性无关, 从而它们是 $\mathbf{A}$ 的列向量的极大无关组, 于是 $(x_{1}^{2}, x_{2}^{2}, x_{3}^{2}, x_{4}^{2})'$ 是它们的线性组合, 故可设 $x_{i}^{2} = rx_{i} + sy_{i} + t (1 \leq i \leq 4)$ , 其中 $r, s, t$ 是实数. 由于 $x_{1}, x_{2}, x_{3}, x_{4}$ 互不相同, 故 $s \neq 0$ , 于是 $y_{i} = \frac{1}{s} x_{i}^{2} - \frac{r}{s} x_{i} - \frac{t}{s} (1 \leq i \leq 4)$ . 考虑 $\mathbf{A}$ 的第一列、第二列、第四列和第六列构成的四阶行列式 $|\mathbf{B}|$ , 利用 Vandermonde 行列式容易算出 $|\mathbf{B}| = -\frac{1}{s} \prod_{1 \leq i < j \leq 4} (x_{i} - x_{j}) \neq 0$ , 于是 $\mathbf{A}$ 的秩等于 4, 这与假设矛盾. 因此方程组 (3.3) 的系数矩阵的秩只能等于 4. □

## § 3.10 基础训练

## 3.10.1 训练题

## 一、单选题

1. 已知任一 n 维向量均可由 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 线性表示，则 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ ().
(A) 线性相关 (B) 秩等于 n (C) 秩小于 n (D) 以上都不对

2. 设 A 为 n 阶方阵且 $|A| = 0$ ，则 ( ). 
(A) A 中必有两行 (列) 元素对应成比例
(B) A 中至少有一行 (列) 元素全为零
(C) A 中至少有一行向量是其余各行向量的线性组合(D) A 中每一行向量都是其余各行向量的线性组合

3. 一个向量组中的极大线性无关组（）.
(A) 个数唯一
(B) 个数不唯一
(C) 所含向量个数唯一
(D) 所含向量个数不唯一

4. 设向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s} (s > 1, \alpha_{1} \neq 0)$ 线性相关，则（）由 $\alpha_{1}, \cdots, \alpha_{i-1}$ 线性表示.
(A) 每个 $\alpha_{i}(i>1)$ 都能
(B) 每个 $\alpha_{i}(i>1)$ 都不能
(C) 有一个 $\alpha_{i}(i>1)$ 能
(D) 某一个 $\alpha_{i}(i>1)$ 不能

5. 设 $m \times n$ 矩阵 $\mathbf{A}$ 中 $n$ 个列向量线性无关, 则 $\mathbf{A}$ 的秩 ( ).
(A) 大于 $m$ (B) 大于 $n$ (C) 等于 $m$ (D) 等于 $n$ 

6. 设矩阵 A 和 B 等价, A 有一个 k 阶子式不等于零, 则 B 的秩 ( ) k.
(A) < (B) = (C) ≥ (D) ≤

7. 已知 $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & t \\ 3 & 6 & 9 \end{pmatrix}$ ，B 为三阶非零矩阵且 BA = O，则 ( ). 
(A) 当 t = 6 时，B 的秩必为 1
(B) 当 t = 6 时，B 的秩必为 2
(C) 当 $t \neq 6$ 时，B 的秩必为 1
(D) 当 $t \neq 6$ 时，B 的秩必为 2

8. 向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 的秩为 r 的充要条件是 ( ). 
(A) 向量组中不含零向量
(B) 向量组中没有两个向量的对应分量成比例
(C) 向量组中有一个向量不能由其余向量线性表示
(D) 向量组线性无关

9. A 是三阶方阵, $A^{*}$ 是其伴随, A 的所有二阶子式都等于零, 则 ( ). 
(A) $r(A) \leq 1$ , $r(A^{*}) = 0$ (B) $r(A) = 1$ , $r(A^{*}) = 0$ (C) $r(A) \leq 1$ , $r(A^{*}) = 1$ (D) $r(A) = 2$ , $r(A^{*}) = 1$ 

10. 要下列齐次线性方程组有非零解, 只需条件 ( ) 满足: $\left\{ \begin{array}{l} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = 0, \\ \cdots\cdots\\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = 0. \end{array} \right.$ 

(A) $m \leq n$ (B) $m = n$ (C) $m > n$ (D) 系数矩阵的秩小于 $n$ 

11. 设 A 是 $m \times n$ 矩阵, 若非齐次线性方程组 Ax = $\beta$ 的解不唯一, 则结论 ( ) 成立.
(A) A 的秩小于 m (B) m < n (C) A 是零矩阵 (D) Ax = 0 的解不唯一

12. 设 A 是 $m \times n$ 矩阵, 若线性方程组 Ax = 0 有非零解, 则必有 ( ). (A) m < n (B) r(A) < n

(C) A 中有两列对应元素成比例 (D) A 的行向量组线性相关

13. 设 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是齐次线性方程组 $Ax = 0$ 的一个基础解系, 则 ( ) 也是该方程组的基础解系.
(A) $\alpha_{1} + \alpha_{2} - \alpha_{3}, \alpha_{1} + \alpha_{2} + 5\alpha_{3}, 4\alpha_{1} + \alpha_{2} - 2\alpha_{3}$ (B) $\alpha_{1} + 2\alpha_{2} + \alpha_{3}, 2\alpha_{1} + \alpha_{2} + 2\alpha_{3}, \alpha_{1} + \alpha_{2} + \alpha_{3}$ (C) $\alpha_{1} + \alpha_{2}, \alpha_{1} + \alpha_{2} + \alpha_{3}$ (D) $\alpha_{1} - \alpha_{2}, \alpha_{2} - \alpha_{3}, \alpha_{3} - \alpha_{1}$ 

14. 当 $t = (\quad)$ 时, 向量组 $\alpha_{1} = (2, 1, 0)$ , $\alpha_{2} = (3, 2, 5)$ , $\alpha_{3} = (5, 4, t)$ 线性相关.
(A) 5
(B) 10
(C) 15
(D) 20

15. 设 $\alpha_{1}=(1,4,1)$ , $\alpha_{2}=(2,1,-5)$ , $\alpha_{3}=(6,2,-16)$ , $\beta=(2,t,3)$ , 当 $t=(\quad)$ 时, $\beta$ 可用 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性表示.
(A) 1
(B) 3
(C) 6
(D) 9

## 二、填空题

1. 设向量 $\beta_{1} = \alpha_{1} - \alpha_{2}, \beta_{2} = \alpha_{2} - \alpha_{3}, \beta_{3} = \alpha_{3} - \alpha_{4}, \beta_{4} = \alpha_{4} - \alpha_{1}$ , 则向量组 $\beta_{1}, \beta_{2}, \beta_{3}, \beta_{4}$ 线性相关吗？（）

2. 若向量 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性无关, 则其中任意两个向量线性无关. 反之, 若其中任意两个向量线性无关, 问该向量组是否线性无关? ( )

3. 若 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性相关, 则 $\alpha_{1}$ 是否必可由 $\alpha_{2}, \alpha_{3}$ 线性表示? ( )

4. n 维行向量空间中的任意 n 个线性无关的行向量是否和向量组 $e_{1} = (1, 0, \cdots, 0)$ , $e_{2} = (0, 1, \cdots, 0)$ , $\cdots$ , $e_{n} = (0, 0, \cdots, 1)$ 等价? ()

5. 设 n 维列向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关, A 为可逆矩阵, 问 $A\alpha_{1}, A\alpha_{2}, \cdots, A\alpha_{m}$ 是否线性无关? ()

6. 设向量 $\beta$ 可由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性表示, 但不能由其中任何个数少于 m 的部分向量组线性表示, 问这个向量组是否线性无关? ()

7. 设向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性无关，问向量组

$$
\beta_ {1} = \alpha_ {1}, \beta_ {2} = \alpha_ {1} + \alpha_ {2}, \dots , \beta_ {m} = \alpha_ {1} + \alpha_ {2} + \dots + \alpha_ {m}
$$

是否线性无关？（）

8. 设向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性无关，问向量组

$$
\beta_ {1} = \alpha_ {1} + 4 \alpha_ {2} + \alpha_ {3}, \beta_ {2} = 2 \alpha_ {1} + \alpha_ {2} - \alpha_ {3}, \beta_ {3} = \alpha_ {1} - 3 \alpha_ {3}.
$$

是否线性无关？（）

9. 设 $\alpha_{1} = (1,3,0,2)$ , $\alpha_{2} = (-1,0,1,0)$ , $\alpha_{3} = (5,9,-2,6)$ , 问: 是否存在数 $a_{ij} (1 \leq i,j \leq 3)$ , 使得向量组

$$
\beta_ {1} = a _ {1 1} \alpha_ {1} + a _ {1 2} \alpha_ {2} + a _ {1 3} \alpha_ {3}, \beta_ {2} = a _ {2 1} \alpha_ {1} + a _ {2 2} \alpha_ {2} + a _ {2 3} \alpha_ {3}, \beta_ {3} = a _ {3 1} \alpha_ {1} + a _ {3 2} \alpha_ {2} + a _ {3 3} \alpha_ {3}
$$

线性无关？（）

10. 若向量组 $A: \alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 中每个向量都可由它的一个部分向量组 $B: \alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 唯一地线性表示, 问向量组 $A$ 的秩是否等于 $r$ ? ( )

11. 设向量 $\beta$ 可由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 线性表示，但不能由 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r-1}$ 线性表示，问向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r}$ 和向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{r-1}, \beta$ 的秩是否相等？（）

12. 若线性方程组中方程式的个数多于未知数的个数, 此方程组是否必无解? ( )

13. 现有齐次线性方程组 Ax = 0, 其中 A 的秩为 r, 未知数个数为 n, 问: 是否任意 n - r 个解向量都是它的一个基础解系? ()

14. 非齐次线性方程组 $Ax = \beta$ 的系数矩阵 $\mathbf{A}$ 是 $m \times n$ 矩阵, 若 $\mathbf{A}$ 的行向量组线性无关, 问该方程组是否一定有解? ( )

15. 设 $\eta_{1}, \eta_{2}, \cdots, \eta_{r}$ 是非齐次线性方程组 Ax = $\beta$ 的解向量，设 $k_{1}, k_{2}, \cdots, k_{r}$ 是一组数，适合 $k_{1} + k_{2} + \cdots + k_{r} = 1$ ，问： $k_{1}\eta_{1} + k_{2}\eta_{2} + \cdots + k_{r}\eta_{r}$ 是否也是该方程组的解？（）

## 三、解答题

1. 已知向量空间 V 中 $m(m>1)$ 个向量 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性相关. 求证: 可找到 m 个不全为零的数 $c_{1},c_{2},\cdots,c_{m}$ ，使对 V 中任一向量 $\beta$ ，向量组 $\beta,\alpha_{1}+c_{1}\beta,\cdots,\alpha_{m}+c_{m}\beta$ 都线性相关.

2. 设 V 是实数域上连续函数空间, $a_{1}, a_{2}, \cdots, a_{n}$ 是 n 个不同的实数, 求证: $e^{a_{1}x}, e^{a_{2}x}, \cdots, e^{a_{n}x}$ 线性无关.

3. 设 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{p}\}\subseteqK^{m}$ 是 p 个线性无关的 m 维列向量, $\{\beta_{1},\beta_{2},\cdots,\beta_{q}\}\subseteqK^{n}$ 是 q 个线性无关的 n 维列向量. 求证: $\{\alpha_{i}\cdot\beta_{j}^{\prime}\mid1\leq i\leq p,1\leq j\leq q\}$ 是 pq 个线性无关的 $m\times n$ 矩阵.

4. 设 $\mathbb{Q}(\sqrt{2},\sqrt{3}) = \{a + b\sqrt{2} + c\sqrt{3} + d\sqrt{6}\}$ , 其中 $a, b, c, d$ 都是有理数. 证明: $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 是有理数域上的线性空间并求其维数.

5. 已知向量组 $\alpha_{1} = (1,2,1,-2), \alpha_{2} = (2,3,1,0), \alpha_{3} = (1,2,2,-3), \beta_{1} = (1,1,1,1), \beta_{2} = (1,0,1,-1), \beta_{3} = (1,3,0,-4)$ , 设子空间 $V_{1} = L(\alpha_{1}, \alpha_{2}, \alpha_{3}), V_{2} = L(\beta_{1}, \beta_{2}, \beta_{3})$ . 求 $V_{1} + V_{2}$ 及 $V_{1} \cap V_{2}$ 的维数和基.

6. 设 A, B 都是 n 阶矩阵, 求证: $\mathrm{r}(AB - I_n) \leq \mathrm{r}(A - I_n) + \mathrm{r}(B - I_n)$ .

7. 已知矩阵 $B_{i}(1 \leq i \leq k)$ 是 n 阶幂等矩阵，即 $B_{i}^{2} = B_{i}$ ，又 $A = B_{1} \cdots B_{k}$ ，求证：

$$
\mathrm{r} (\boldsymbol {I} _ {n} - \boldsymbol {A}) \leq k (n - \mathrm{r} (\boldsymbol {A})).
$$

8. 设 $n$ 阶实方阵 $\pmb{A}$ 满足 $AA' = a^2 I_n$ , 其中 $a$ 为实数, 证明:

$$
\mathrm{r} (a \boldsymbol {I} _ {n} - \boldsymbol {A}) = \mathrm{r} \left((a \boldsymbol {I} _ {n} - \boldsymbol {A}) ^ {2}\right).
$$

9. 设 $n$ 阶方阵 $\pmb{A},\pmb{B}$ 满足: $(\pmb {A} + \pmb {B})^{2} = \pmb {A} + \pmb {B},\mathrm{r}(\pmb {A} + \pmb {B}) = \mathrm{r}(\pmb {A}) + \mathrm{r}(\pmb {B})$ ，证明：

$$
A ^ {2} = A, B ^ {2} = B, A B = B A = O.
$$

10. 设 A 是一个对称矩阵, A 有一个 r 阶主子式 $|M|$ 不等于零且 A 所有包含 $|M|$ 的 $r+1$ 及 $r+2$ 阶加边主子式都等于零, 求证: A 的秩等于 r.

11. 设 $\mathbf{A}$ 是一个反对称矩阵, $\mathbf{A}$ 有一个 $r$ 阶主子式 $|\mathbf{M}|$ 不等于零且 $\mathbf{A}$ 所有包含 $|\mathbf{M}|$ 的 $r + 2$ 阶加边主子式都等于零, 求证: $\mathbf{A}$ 的秩等于 $r$ .

12. 求解下列线性方程组, 其中 k 为参数:

$$
\left\{ \begin{array}{l} k x _ {1} + x _ {2} + x _ {3} = - 2, \\ x _ {1} + k x _ {2} + x _ {3} = - 2, \\ x _ {1} + x _ {2} + k x _ {3} = - 2. \end{array} \right.
$$

13. 已知非齐次线性方程组 $Ax = \beta$ 的相伴齐次线性方程组 $Ax = 0$ 的基础解系为 $\{\eta_1, \cdots, \eta_{n-r}\}$ , $Ax = \beta$ 的特解为 $\gamma$ , 求证: $\gamma, \gamma + \eta_1, \cdots, \gamma + \eta_{n-r}$ 线性无关.

14. 已知非齐次线性方程组 $Ax = \beta$ 有解. 求证: 每个解向量中第 $k$ 个分量都等于零的充要条件是将增广矩阵 $\widetilde{A}$ 的第 $k$ 列划去后得到的矩阵的秩比 $\widetilde{A}$ 的秩小.

15. 设在实平面上有 3 条不同的直线:

$$
\begin{array}{l l l} L _ {1} & : & a x + b y + c = 0, \\ L _ {2} & : & b x + c y + a = 0, \\ L _ {3} & : & c x + a y + b = 0, \end{array}
$$

求证: 它们相交于一点的充要条件是 $a + b + c = 0$ .

## 3.10.2 训练题答案

## 一、单选题

1. 应选择 (B).

2. 应选择 (C). 当 $|\mathbf{A}| = 0$ 时, 矩阵 $\mathbf{A}$ 的秩小于 $n$ , 因此行向量线性相关, 于是至少有一个行向量是其余行向量的线性组合.

3. 应选择 (C). 向量组的极大无关组含有相同的向量个数.

4. 应选择 (C).

5. 应选择 (D).

6. 应选择 (C). 由矩阵秩的子式判别法可得.

7. 应选择 (C). 当 $t = 6$ 时, $\pmb{A}$ 的秩等于 1 , 于是 $\pmb{B}$ 的秩可能是 1 或 2 , 故不应该选择 (A) 与 (B). 当 $t \neq 6$ 时, $\pmb{A}$ 的秩等于 2 , $\pmb{B}$ 的秩不可能为 2 (因为方程组 $A' x = 0$ 的基础解系只含一个向量).

8. 应选择 (D).

9. 应选择 (A). 当 $A$ 的二阶子式全为零时, $A$ 的任意一个代数余子式都等于零, 故 $A^{*} = O$ . 这时 $A$ 有可能是零矩阵.

10. 应选择 (D). 由线性方程组求解的判定定理可得.

11. 应选择 (D). 由非齐次线性方程组的解与其相伴齐次方程组的解的关系可得.

12. 应选择 (B).

13. 应选择 (A). 注意 (C) 中只有两个向量, 不可能成为方程组的基础解系, 另外只有 (A) 中向量线性无关.

14. 应选择 (C). 当 $t = 15$ 时, 向量组的秩小于 3.

15. 应选择 (D). 要使 $\beta$ 能表示为 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 的线性组合, 当且仅当向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \beta$ 的秩等于向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 的秩, 经计算可知 $t = 9$ .

## 二、填空题

1. 线性相关. 由于 $\beta_{1} + \beta_{2} + \beta_{3} + \beta_{4} = 0$ , 故向量组线性相关.

2. 不一定. 如 3 个二维行向量 $(1,0),(0,1),(1,1)$ 两两线性无关, 但这 3 个向量线性相关.

3. 不一定. 如 $\alpha_{1} = (1,0), \alpha_{2} = (0,0), \alpha_{3} = (0,1)$ .

4. 等价. $n$ 维向量空间中任意 $n$ 个线性无关的向量均可成为一组基, 因此它们互相等价.

5. 线性无关. 参考例 3.11.

6. 线性无关. 参考例 3.9.

7. 线性无关. 参考例 3.15 计算行列式, 或参考例 3.18 计算矩阵的秩, 或由例 3.38 直接可得.

8. 线性无关. 因为通过计算可知, 矩阵 $\begin{pmatrix}1 & 2 & 1 \\ 4 & 1 & 0 \\ 1 & -1 & -3\end{pmatrix}$ 的行列式值等于 16 或秩等于 3, 故由

例 3.15 或例 3.18 即得结论.

9. 不存在. 因为通过计算可知, 向量组 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 的秩等于 2, 故表出向量组 $\beta_{1}, \beta_{2}, \beta_{3}$ 的秩小于等于 2 (参考例 3.19 的注), 从而不可能线性无关.

10. 等于 r. 因为这时表示唯一, 故 $\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}$ 线性无关 (参考 §§ 3.1.2 定理 3(3)), 于是这 r 个向量是原向量组的极大无关组.

11. 相等. 因为这两个向量组等价, 故它们的秩相等.

12. 不一定.

13. 不一定. 只有当这 $n - r$ 个解向量线性无关时才构成基础解系.

14. 有解. 因为这时 $\pmb{A}$ 的秩为 $m$ , 而其增广矩阵是 $m \times (n + 1)$ 矩阵, 秩只能为 $m$ .

15. 是解. 将向量代入计算即得.

## 三、解答题

1. 已知 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 线性相关，故存在不全为零的数 $k_{1}, k_{2}, \cdots, k_{m}$ ，使得 $k_{1}\alpha_{1} + k_{2}\alpha_{2} + \cdots + k_{m}\alpha_{m} = 0$ 。因为 m > 1 且 $k_{i}$ 不全为零，故必存在数 $c_{1}, c_{2}, \cdots, c_{m}$ ，使得 $k_{1}c_{1} + k_{2}c_{2} + \cdots + k_{m}c_{m} = -1$ 。于是对任意的 $\beta$ ，有 $\beta + k_{1}(\alpha_{1} + c_{1}\beta) + k_{2}(\alpha_{2} + c_{2}\beta) + \cdots + k_{m}(\alpha_{m} + c_{m}\beta) = 0$ 。

2. 设 $k_{1}, k_{2}, \cdots, k_{n}$ 为 n 个实数，使得 $k_{1}e^{a_{1}x} + k_{2}e^{a_{2}x} + \cdots + k_{n}e^{a_{n}x} = 0$ 。对上式求导 i 次并令 x = 0，可得 $a_{1}^{i}k_{1} + a_{2}^{i}k_{2} + \cdots + a_{n}^{i}k_{n} = 0 (i = 0, 1, \cdots, n - 1)$ 。上述 n 个方程构成了关于 $k_{1}, k_{2}, \cdots, k_{n}$ 的线性方程组，其系数行列式是关于 $a_{1}, a_{2}, \cdots, a_{n}$ 的 Vandermonde 行列式。由于 $a_{1}, a_{2}, \cdots, a_{n}$ 互不相同，故系数行列式不等于零，从而方程组只有零解 $k_{1} = k_{2} = \cdots = k_{n} = 0$ ，于是 $e^{a_{1}x}, e^{a_{2}x}, \cdots, e^{a_{n}x}$ 线性无关。

3. 设 $c_{ij} \in \mathbb{K}$ , 使得 $\sum_{i=1}^{p} \sum_{j=1}^{q} c_{ij} \boldsymbol{\alpha}_i \cdot \boldsymbol{\beta}_j' = \boldsymbol{O}$ , 则有

$$
\sum_ {i = 1} ^ {p} \alpha_ {i} \cdot (\sum_ {j = 1} ^ {q} c _ {i j} \beta_ {j} ^ {\prime}) = O.\tag{3.4}
$$

设 $\sum_{j=1}^{q}c_{ij}\beta_{j}^{\prime}=(a_{i1},a_{i2},\cdots,a_{in})(1\leq i\leq p)$ ，则比较 (3.4) 式两边矩阵的第 k 列有 $\sum_{i=1}^{p}a_{ik}\alpha_{i}=0$ .
由 $\alpha_{1},\alpha_{2},\cdots,\alpha_{p}$ 线性无关可得 $a_{ik}=0(1\leq i\leq p,1\leq k\leq n)$ ，于是 $\sum_{j=1}^{q}c_{ij}\beta_{j}^{\prime}=0(1\leq i\leq p)$ .
再由 $\beta_{1},\beta_{2},\cdots,\beta_{q}$ 线性无关可得 $c_{ij}=0(1\leq i\leq p,1\leq j\leq q)$ ，因此 $\{\alpha_{i}\cdot\beta_{j}^{\prime}\mid1\leq i\leq p,1\leq j\leq q\}$ 线性无关.

4. 事实上, 我们可以证明 $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 是一个数域。加法、减法和乘法的封闭性都是显然的, 我们只要证明除法封闭, 或等价地证明非零数的倒数封闭即可。首先需要找出一个数非零的充要条件, 我们断言: $a + b\sqrt{2} + c\sqrt{3} + d\sqrt{6} = 0$ 当且仅当 $a = b = c = d = 0$ 。充分性是显然的, 下证必要性。由 $\sqrt{2}$ 是无理数容易验证 $a + b\sqrt{2} = 0$ 当且仅当 $a = b = 0$ 。将表达式整理为 $a + b\sqrt{2} = -(c + d\sqrt{2})\sqrt{3}$ , 我们断言 $c + d\sqrt{2} = 0$ 。用反证法, 若 $c + d\sqrt{2} \neq 0$ , 则 $c - d\sqrt{2} \neq 0$ , 从而 $c^2 - 2d^2 \neq 0$ , 于是

$$
\sqrt {3} = - \frac {a + b \sqrt {2}}{c + d \sqrt {2}} = \frac {2 b d - a c}{c ^ {2} - 2 d ^ {2}} + \frac {a d - b c}{c ^ {2} - 2 d ^ {2}} \sqrt {2} = p + q \sqrt {2},
$$

其中 $p = \frac{2bd - ac}{c^{2} - 2d^{2}}$ , $q = \frac{ad - bc}{c^{2} - 2d^{2}}$ . 若 q = 0, 则 $\sqrt{3} = p \in Q$ , 矛盾. 若 p = 0, 则 $\sqrt{\frac{3}{2}} = q \in Q$ , 矛盾. 因此, p, q 都是非零有理数. 上式两边平方后可得 $\sqrt{2} = \frac{3 - p^{2} - 2q^{2}}{2pq} \in Q$ , 矛盾. 因此 $c + d\sqrt{2} = 0$ , 从而 $a + b\sqrt{2} = 0$ , 于是 a = b = c = d = 0. 任取 $\mathbb{Q}(\sqrt{2}, \sqrt{3})$ 中的非零数 $a + b\sqrt{2} + c\sqrt{3} + d\sqrt{6}$ , 由上述充要条件可知

$$
a - b \sqrt {2} + c \sqrt {3} - d \sqrt {6} \neq 0, a + b \sqrt {2} - c \sqrt {3} - d \sqrt {6} \neq 0, a - b \sqrt {2} - c \sqrt {3} + d \sqrt {6} \neq 0.
$$

利用上述3个非零数对 $(a + b\sqrt{2} + c\sqrt{3} + d\sqrt{6})^{-1}$ 进行分母有理化，可得

$$
\frac {1}{a + b \sqrt {2} + c \sqrt {3} + d \sqrt {6}} = \frac {(a + b \sqrt {2} - c \sqrt {3} - d \sqrt {6}) ((a ^ {2} + 2 b ^ {2} - 3 c ^ {2} - 6 d ^ {2}) - 2 (a b - 3 c d) \sqrt {2})}{(a ^ {2} + 2 b ^ {2} - 3 c ^ {2} - 6 d ^ {2}) ^ {2} - 8 (a b - 3 c d) ^ {2}}
$$

属于 $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 。因此 $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 是一个数域，从而是 $\mathbb{Q}$ 上的线性空间。由 $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 的定义可知， $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 中每个数都是 $1, \sqrt{2}, \sqrt{3}, \sqrt{6}$ 的 $\mathbb{Q}$ -线性组合；又由上述充要条件可知， $1, \sqrt{2}, \sqrt{3}, \sqrt{6}$ 是 $\mathbb{Q}$ -线性无关的。因此 $\{1, \sqrt{2}, \sqrt{3}, \sqrt{6}\}$ 是 $\mathbb{Q}(\sqrt{2},\sqrt{3})$ 的一组基。特别地， $\dim_{\mathbb{Q}} \mathbb{Q}(\sqrt{2},\sqrt{3}) = 4$ 。

5. $V_{1} + V_{2} = L(\alpha_{1}, \alpha_{2}, \alpha_{3}, \beta_{1}, \beta_{2}, \beta_{3})$ , 经计算可知 $V_{1} + V_{2}$ 的基 (即 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \beta_{1}, \beta_{2}, \beta_{3}$ 的极大无关组) 为 $\alpha_{1}, \alpha_{2}, \alpha_{3}, \beta_{2}$ (答案不唯一), 故 $V_{1} + V_{2}$ 的维数等于 4. 又经计算可知, $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 的秩为 3, $\beta_{1}, \beta_{2}, \beta_{3}$ 的秩也为 3, 故 $V_{1}, V_{2}$ 的维数都等于 3, 再由交和空间维数公式可知 $V_{1} \cap V_{2}$ 的维数等于 2. 要求 $V_{1} \cap V_{2}$ 的基, 只要求下列齐次线性方程组的基础解系即可 (参考例 3.47 的解法 2): $x_{1} \alpha_{1} + x_{2} \alpha_{2} + x_{3} \alpha_{3} + x_{4} \beta_{1} + x_{5} \beta_{2} + x_{6} \beta_{3} = 0$ . 经计算可知, $V_{1} \cap V_{2}$ 的基为 $\beta_{1}, \beta_{3}$ (答案不唯一).

6. 注意到 $AB - I_{n} = (A - I_{n})B + (B - I_{n})$ ，故 $\mathrm{r}(AB - I_n) \leq \mathrm{r}\left((A - I_n)B\right) + \mathrm{r}(B - I_n) \leq \mathrm{r}(A - I_n) + \mathrm{r}(B - I_n)$ .

7. 由 $A = B_{1} \cdots B_{k}$ 可得 $\mathrm{r}(A) \leq \mathrm{r}(B_{i})$ . 因为 $B_{i}$ 是幂等矩阵, 故由例3.70可得 $\mathrm{r}(I_{n} - B_{i}) = n - \mathrm{r}(B_{i})$ . 注意到 $I_{n} - A = (I_{n} - B_{1}) + B_{1}(I_{n} - B_{2}) + \dots + B_{1} \cdots B_{k-1}(I_{n} - B_{k})$ , 故 $\mathrm{r}(I_{n} - A) \leq \sum_{i=1}^{k} \mathrm{r}(I_{n} - B_{i}) = \sum_{i=1}^{k} (n - \mathrm{r}(B_{i})) \leq k(n - \mathrm{r}(A))$ .

8. 若 $a = 0$ , 则 $AA' = O$ , 由例 2.46 可知 $A = O$ , 从而结论显然成立. 若 $a \neq 0$ , 注意到 $(aI_n - A)^2 = (\frac{1}{a} AA' - A)(aI_n - A) = -\frac{1}{a} A(aI_n - A')(aI_n - A) = -\frac{1}{a} A(aI_n - A)'(aI_n - A)$ , 则由例 3.76 以及 $-\frac{1}{a} A$ 的非异性可得 $\mathrm{r}\left((aI_n - A)^2\right) = \mathrm{r}\left((aI_n - A)'(aI_n - A)\right) = \mathrm{r}(aI_n - A)$ .

9. 由例3.70可得 $n = \mathrm{r}(A + B) + \mathrm{r}(I_n - A - B) = \mathrm{r}(A) + \mathrm{r}(B) + \mathrm{r}(I_n - A - B)$ . 构造如下分块对角阵，并对其实施分块初等变换，可得

$$
\left(\begin{array}{c c c c}A&O&O\\O&B&O\\O&O&I _ {n} - A - B\end{array}\right)\rightarrow \left(\begin{array}{c c c c}A&O&O\\O&B&O\\A&B&I _ {n} - A - B\end{array}\right)\rightarrow \left(\begin{array}{c c c c}A&O&A\\O&B&B\\A&B&I _ {n}\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c} A - A ^ {2} & - A B & O \\ - B A & B - B ^ {2} & O \\ A & B & I _ {n} \end{array} \right) \to \left( \begin{array}{c c c} A - A ^ {2} & - A B & O \\ - B A & B - B ^ {2} & O \\ O & O & I _ {n} \end{array} \right).
$$

注意到分块初等变换不改变矩阵的秩, 故可得 $\mathrm{r}\left( \begin{array}{cc} A - A^2 & -AB \\ -BA & B - B^2 \end{array} \right) = 0$ , 从而 $A^2 = A, B^2 = B$ , $AB = BA = O$ .

10. 对一个对称矩阵进行一次行对换, 再进行一次对称的列对换, 得到的矩阵仍是对称矩阵. 因此, 不妨设 $M$ 在 $\pmb{A}$ 的左上角. 现考虑任意一个包含 $M$ 的 $r + 2$ 阶主子阵 $\left( \begin{array}{ccc}M & \alpha & \beta \\ \alpha' & a_{ss} & a_{st}\\ \beta' & a_{ts} & a_{tt} \end{array} \right)$ ,注意由对称性 $a_{st} = a_{ts}$ . 因为 $|M| \neq 0$ , 故 $M$ 是可逆矩阵. 对上述矩阵作分块初等行变换分别消去 $\alpha'$ 及 $\beta'$ , 可得

$$
\left( \begin{array}{c c c} M & \alpha & \beta \\ 0 & a _ {s s} - \alpha^ {\prime} M ^ {- 1} \alpha & a _ {s t} - \alpha^ {\prime} M ^ {- 1} \beta \\ 0 & a _ {t s} - \beta^ {\prime} M ^ {- 1} \alpha & a _ {t t} - \beta^ {\prime} M ^ {- 1} \beta \end{array} \right).
$$

因为 $\left|\begin{matrix}M & \alpha \\ \alpha' & a_{ss}\end{matrix}\right|=0$ ，故 $a_{ss}-\alpha'M^{-1}\alpha=0$ 。同理 $a_{tt}-\beta'M^{-1}\beta=0$ 。又 $a_{ts}-\beta'M^{-1}\alpha$ 是一个数，把它看成 $1\times1$ 矩阵，转置后有 $a_{ts}-\beta'M^{-1}\alpha=a_{st}-\alpha'M^{-1}\beta$ 。再由已知，上述 $r+2$ 阶子式等于零，可得

$$
\left| \begin{array}{c c c} M & \alpha & \beta \\ 0 & a _ {s s} - \alpha^ {\prime} M ^ {- 1} \alpha & a _ {s t} - \alpha^ {\prime} M ^ {- 1} \beta \\ 0 & a _ {t s} - \beta^ {\prime} M ^ {- 1} \alpha & a _ {t t} - \beta^ {\prime} M ^ {- 1} \beta \end{array} \right| = 0,
$$

从而 $a_{ts} - \beta^{\prime}M^{-1}\alpha = a_{st} - \alpha^{\prime}M^{-1}\beta = 0$ 。上述讨论对任意的 $r$ 维列向量 $\alpha, \beta$ 都成立。因此，若在 $A$ 中用上述方法消去 $\alpha^{\prime}$ 时，其后面的项全部消去，于是可消去除前 $r$ 行外的所有行。这就证明了 $A$ 的秩等于 $r$ 。

11. 注意反对称矩阵的奇数阶主子式总等于零, 其余同上题证明.

12. 当 k = -2 时，方程组无解；当 k = 1 时，方程组的通解为 $(-2,0,0)' + c_{1}(-1,1,0)' + c_{2}(-1,0,1)'$ ，其中 $c_{1}, c_{2}$ 为任意数；当 $k \neq -2, 1$ 时，方程组有唯一解 $\left(-\frac{2}{k+2}, -\frac{2}{k+2}, -\frac{2}{k+2}\right)'$ .
13. 假设 $a_{0}\gamma + a_{1}(\gamma + \eta_{1}) + \cdots + a_{n-r}(\gamma + \eta_{n-r}) = 0$ ，得 $(a_{0} + a_{1} + \cdots + a_{n-r})\gamma + a_{1}\eta_{1} + \cdots + a_{n-r}\eta_{n-r} = 0$ 。两边作用 A 得 $(a_{0} + a_{1} + \cdots + a_{n-r})\beta = 0$ ，故 $a_{0} + a_{1} + \cdots + a_{n-r} = 0$ 。于是 $a_{1}\eta_{1} + \cdots + a_{n-r}\eta_{n-r} = 0$ ，由于 $\eta_{1}, \cdots, \eta_{n-r}$ 是基础解系，故 $a_{i} = 0$ 。

14. 不失一般性, 令 $k = 1$ . 又假设 $\mathbf{A} = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 是其列向量分块, 将方程组写为 $x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = \beta$ . 若解向量中第一个分量总是零, 则 $\beta = c_2\alpha_2 + \cdots + c_n\alpha_n$ , 其中 $(0, c_2, \cdots, c_n)'$ 是某个解向量, 于是 $\mathrm{r}(\alpha_2, \cdots, \alpha_n) = \mathrm{r}(\alpha_2, \cdots, \alpha_n, \beta)$ . 假设 $\alpha_1 = a_2\alpha_2 + \cdots + a_n\alpha_n$ , 则 $(-1)\alpha_1 + (a_2 + c_2)\alpha_2 + \cdots + (a_n + c_n)\alpha_n = \beta$ , 即 $(-1, a_2 + c_2, \cdots, a_n + c_n)'$ 也将是解, 这与解的第一个分量都是零矛盾. 因此 $\alpha_1$ 不能表示为其余 $\alpha_i$ 的线性组合. 注意到 $\beta$ 可表示为 $\alpha_2, \cdots, \alpha_n$ 的线性组合, 因此, $\widetilde{\mathbf{A}}$ 划去第一列后得到矩阵的秩比 $\widetilde{\mathbf{A}}$ 的秩小. 反过来, 若某个解向量中第一分量不等于零, 不妨假设有 $c_1\alpha_1 + c_2\alpha_2 + \cdots + c_n\alpha_n = \beta$ , $c_1 \neq 0$ , 则 $\alpha_1$ 可以表示为 $\alpha_2, \cdots, \alpha_n, \beta$ 的线性组合. 因此, $\widetilde{\mathbf{A}}$ 划去第一列后得到矩阵的秩与 $\widetilde{\mathbf{A}}$ 的秩相同.

15. 3条直线相交于一点的充要条件是方程组有唯一解, 即 $\mathrm{r}\left( \begin{array}{ll} a & b \\ b & c \\ c & a \end{array} \right) = \mathrm{r}\left( \begin{array}{lll} a & b & c \\ b & c & a \\ c & a & b \end{array} \right) = 2$ . 3条直线不同表明 $\mathrm{r}\left( \begin{array}{lll} a & b & c \\ b & c & a \end{array} \right) = 2$ , 故上述充要条件等价于矩阵 $A = \left( \begin{array}{lll} a & b & c \\ b & c & a \\ c & a & b \end{array} \right)$ 的秩等于 2, 这也等价于 $|A| = 0$ . 注意到 $|A| = (a + b + c)(ab + bc + ca - a^2 - b^2 - c^2)$ , 并且由于 $a, b, c$ 不全相等, 故 $ab + bc + ca - a^2 - b^2 - c^2 = -\frac{1}{2}((a - b)^2 + (b - c)^2 + (c - a)^2) < 0$ , 于是 $|A| = 0$ 当且仅当 $a + b + c = 0$ .