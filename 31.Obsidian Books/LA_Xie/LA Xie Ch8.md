# 第8章 二次型


## § 8.1 基本概念

### 8.1.1 二次型与矩阵的合同

#### 1. 二次型的概念

设 $a_{ij}$ 都是数域 F 上的元素,

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} a _ {i i} x _ {i} ^ {2} + 2 \sum_ {1 \leq i <   j \leq n} a _ {i j} x _ {i} x _ {j}, \tag {8.1}
$$

则称 $f(x_{1},x_{2},\cdots,x_{n})$ 是 F 上的一个 n 元二次型.

为了用矩阵来处理二次型, 通常将 (8.1) 式写成矩阵形式:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = \boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {x},
$$

其中

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right), \quad \boldsymbol {x} = \left( \begin{array}{c} x _ {1} \\ x _ {2} \\ \vdots \\ x _ {n} \end{array} \right),
$$

且 $\boldsymbol{A}=(a_{ij})$ 是 F 上的 n 阶对称矩阵，称为二次型 $f(x_{1},x_{2},\cdots,x_{n})$ 的系数矩阵或相伴矩阵.

#### 2. 矩阵的合同

设 A, B 都是 F 上的 n 阶方阵, 若存在 F 上的 n 阶非异阵 C, 使得 $B = C'AC$ , 则称 B 与 A 在 F 上合同或相合.

#### 3. 定理

设二次型 $f(x_{1},x_{2},\cdots,x_{n})$ 的相伴矩阵为 A，又 x=Cy 是未知数 $x_{1},x_{2},\cdots,x_{n}$ 的一个线性变换，其中 C 是非异阵，则 $f(x_{1},x_{2},\cdots,x_{n})$ 在此变换下得到了一个新的二次型 $g(y_{1},y_{2},\cdots,y_{n})$ ，这个新的二次型的相伴矩阵 B 与 A 是合同的，即 $B=C'AC$ 。反过来，如果有两个二次型 $x'Ax$ 与 $y'By$ ，其相伴矩阵 B 与 A 合同，即 $B=C'AC$ ，则只需令 x=Cy 就可以将第一个二次型化为第二个二次型。

#### 4. 定理

$\mathbb{F}$ 上的任一 $n$ 元二次型 $\pmb{x}^{\prime}\pmb{A}\pmb{x}$ 都可经过一个非异线性变换 $\pmb{x} = \pmb{C}\pmb{y}$ 化为标准型(对角型), 即化为如下形状的二次型:

$$
c _ {1} y _ {1} ^ {2} + c _ {2} y _ {2} ^ {2} + \dots + c _ {n} y _ {n} ^ {2},
$$

其中 $c_{1}, c_{2}, \cdots, c_{n}$ 是 F 中的元素.

#### 5. 定理

设 A 是 F 上的 n 阶对称矩阵, 则必存在 F 上的可逆矩阵 C, 使得 $C'AC$ 是对角矩阵.

### 8.1.2 惯性定理

#### 1. 规范标准型

实二次型的标准型通常不唯一, 但是我们可以通过适当的变换使标准型规范化, 即使每一平方项前的系数取 1, -1 或 0. 作了这个限定以后, 得到的标准型称为规范标准型. 一个实二次型的规范标准型是唯一确定的.

#### 2. 惯性定理

对任意一个含 $n$ 个变元的实二次型 $\pmb{x}^{\prime}\pmb{A}\pmb{x}$ , 总可将它化为规范标准型. 不仅如此, 这个规范标准型由原二次型唯一确定, 也就是说, 如果经过不同方法将 $\pmb{x}^{\prime}\pmb{A}\pmb{x}$ 化为两个规范标准型:

$$
\begin{array}{l} y _ {1} ^ {2} + y _ {2} ^ {2} + \dots + y _ {k} ^ {2} - y _ {k + 1} ^ {2} - \dots - y _ {r} ^ {2}, \\ z _ {1} ^ {2} + z _ {2} ^ {2} + \dots + z _ {l} ^ {2} - z _ {l + 1} ^ {2} - \dots - z _ {s} ^ {2}, \\ \end{array}
$$

则 k = l, r = s.

在一个实二次型的标准型中, 正系数项的个数称为这个二次型的正惯性指数, 负系数项的个数称为负惯性指数, 正惯性指数与负惯性指数之和称为这个二次型的秩(它就等于二次型系数矩阵的秩), 正惯性指数与负惯性指数之差称为这个二次型的符号差.

### 8.1.3 正定二次型与正定矩阵

#### 1. 正定型与正定阵

设 $f(x_{1},x_{2},\cdots,x_{n})$ 是一个实二次型，若对任意一组不全为零的实数 $c_{1},c_{2},\cdots,c_{n}$ ，都有 $f(c_{1},c_{2},\cdots,c_{n})>0$ ，则 $f(x_{1},x_{2},\cdots,x_{n})$ 称为正定型，它所对应的实对称矩阵（即系数矩阵）称为正定阵.

#### 2. 负定型、半正定型、半负定型

设 $f(x_{1},x_{2},\cdots,x_{n})$ 是一个实二次型, 若对任意一组不全为零的实数 $c_{1},c_{2},\cdots,c_{n}$ , 都有 $f(c_{1},c_{2},\cdots,c_{n})<0$ , 则 $f(x_{1},x_{2},\cdots,x_{n})$ 称为负定型, 它所对应的实对称矩阵 (即系数矩阵) 称为负定阵.

若对任意一组不全为零的实数 $c_{1}, c_{2}, \cdots, c_{n}$ , 都有 $f(c_{1}, c_{2}, \cdots, c_{n}) \geq 0$ , 则 $f(x_{1}, x_{2}, \cdots, x_{n})$ 称为半正定型, 它所对应的实对称矩阵称为半正定阵. 同理可定义半负定型和半负定阵.

#### 3. 顺序主子式

设 $n$ 阶矩阵 $\mathbf{A} = (a_{ij})$ , 则下列 $n$ 个行列式称为矩阵 $\mathbf{A}$ 的 $n$ 个顺序主子式:

$$
a _ {1 1}, \quad \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right|, \quad \dots , \quad \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|.
$$

#### 4. 定理

实二次型 $f(x_{1},x_{2},\cdots,x_{n})$ 是正定型的充要条件是 f 的正惯性指数等于 n; $f(x_{1},x_{2},\cdots,x_{n})$ 是半正定型的充要条件是 f 的正惯性指数等于 f 的秩（即其系数矩阵的秩）； $f(x_{1},x_{2},\cdots,x_{n})$ 是负定型的充要条件是 f 的负惯性指数等于 n; $f(x_{1},x_{2},\cdots,x_{n})$ 是半负定型的充要条件是 f 的负惯性指数等于 f 的秩.

#### 5. 定理

n 阶实对称矩阵 A 是正定阵的充要条件是 A 的 n 个顺序主子式全大于零.

### 8.1.4 · Hermite 型

#### 1. Hermite 型

设 $f$ 是复数域上的函数：

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {j = 1} ^ {n} \sum_ {i = 1} ^ {n} a _ {i j} \overline {{x _ {i}}} x _ {j},
$$

其中 $\overline{a_{ji}} = a_{ij}$ ，则称 $f$ 是一个Hermite型.

如同普通二次型, Hermite 型也可写为矩阵形式 $f(\pmb{x}) = \overline{\pmb{x}}' \pmb{A} \pmb{x}$ , 这时 $\pmb{A}$ 是一个 Hermite 矩阵, 即 $\overline{\pmb{A}}' = \pmb{A}$ .

#### 2. 复相合

设 $A, B$ 是两个 Hermite 矩阵, 若存在可逆复矩阵 $C$ , 使得 $B = \overline{C}' A C$ , 则称 $A$ 与 $B$ 复相合.

#### 3. 定理

设 A 是一个 Hermite 矩阵, 则必存在可逆复矩阵 C, 使得 $\overline{C}^{\prime}AC$ 为对角矩阵且主对角线上的元素全是实数. 等价地, 对任意一个 Hermite 型 $\overline{x}^{\prime}Ax$ , 总可经过一个非异线性变换 x = Cy 将它化为如下的规范标准型:

$$
\overline {{{y _ {1}}}} y _ {1} + \dots + \overline {{{y _ {p}}}} y _ {p} - \overline {{{y _ {p + 1}}}} y _ {p + 1} - \dots - \overline {{{y _ {r}}}} y _ {r}.
$$

#### 4. 平行的定义及结论

Hermite 型及 Hermite 矩阵的理论与实二次型及实对称矩阵的理论是平行的. 对 Hermite 型或 Hermite 矩阵, 我们同样有惯性定理, 可以定义正惯性指数、负惯性指数、秩和符号差等概念, 可以定义正定、负定、半正定和半负定等概念, 还可以平行地证明相关的判定定理等.

#### 5. 定理

n 阶 Hermite 矩阵 A 是正定阵的充要条件是 A 的 n 个顺序主子式全大于零.

## § 8.2 对称初等变换与矩阵合同

用对称初等变换来讨论对称矩阵的问题是常用的方法之一。设 A 是对称矩阵, 若对 A 进行一次初等行变换, 再进行一次对称的初等列变换, 得到的矩阵仍然是对称矩阵并且和 A 是合同的。具体来说, 下面的对称初等变换都是合同变换:

(1) 对换 A 的第 i 行和第 j 行, 再对换第 i 列和第 j 列;

(2) 将 A 的第 i 行乘以非零常数 k, 再将第 i 列乘以非零常数 k;

(3) 将 $\mathbf{A}$ 的第 $i$ 行乘以常数 $k$ 加到第 $j$ 行上, 再将第 $i$ 列乘以常数 $k$ 加到第 $j$ 列上.

对分块对称矩阵 A, 我们可以用下面的对称分块初等变换来讨论, 它们都是合同变换:

(1) 对换 A 的第 i 分块行和第 j 分块行, 再对换第 i 分块列和第 j 分块列;

(2) 将 $A$ 的第 $i$ 分块行左乘可逆矩阵 $M$ , 再将第 $i$ 分块列右乘 $M'$ ;

(3) 将 A 的第 i 分块行左乘矩阵 M 加到第 j 分块行上, 再将第 i 分块列右乘 $M'$ 加到第 j 分块列上.

例 8.1 设 $\mathrm{diag}\{A_{1}, A_{2}, \cdots, A_{m}\}$ 是分块对角矩阵, 其中 $A_{i}$ 都是对称矩阵, 求证: $\mathrm{diag}\{A_{1}, A_{2}, \cdots, A_{m}\}$ 合同于 $\mathrm{diag}\{A_{i_{1}}, A_{i_{2}}, \cdots, A_{i_{m}}\}$ , 其中 $A_{i_{1}}, A_{i_{2}}, \cdots, A_{i_{m}}$ 是 $A_{1}, A_{2}, \cdots, A_{m}$ 的一个排列.

证明 对换分块对角矩阵的第 i,j 分块行, 再对换第 i,j 分块列, 这是一个合同变换, 变换的结果是将第 $(i,i)$ 分块和第 $(j,j)$ 分块对换了位置. 又任意一个排列都可以通过若干次对换来实现, 因此两个分块对角矩阵 $\mathrm{diag}\{A_{1}, A_{2}, \cdots, A_{m}\}$ 和 $\mathrm{diag}\{A_{i_{1}}, A_{i_{2}}, \cdots, A_{i_{m}}\}$ 合同. □

注 由 §6.4 中的相似分块初等变换以及例 6.46 可知, $\text{diag}\{A_1, A_2, \cdots, A_m\}$ 和 $\text{diag}\{A_{i_1}, A_{i_2}, \cdots, A_{i_m}\}$ 之间不仅是相似关系, 还是合同关系. 事实上, 它们之间是正交相似关系.

例 8.2 求证: n 阶实对称矩阵 A 是正定阵的充要条件是 A 的前 n-1 个顺序主子式的代数余子式以及第 n 个顺序主子式全大于零.

证明 将 A 的第 i 行和第 $n-i+1$ 行对换, 再将第 i 列和第 $n-i+1$ 列对换 $(1 \leq i \leq n)$ , 得到的矩阵记为 B, 则 B 和 A 合同. 注意到 B 的 n 个顺序主子式就是 A 的前 n-1 个顺序主子式的代数余子式以及第 n 个顺序主子式, 故 A 是正定阵当且仅当 B 是正定阵, 这当且仅当 B 的 n 个顺序主子式全大于零, 这也当且仅当 A 的前 n-1 个顺序主子式的代数余子式以及第 n 个顺序主子式全大于零. □

例 8.3 求证: 正定阵的任一主子阵也是正定阵, 半正定阵的任一主子阵也是半正定阵.

证明 对正定阵 A 的某个 r 阶主子阵, 经过适当的合同变换 (对换行与列) 可将它换到左上方, 因此只需对 A 的 r 阶顺序主子阵证明即可. 令这个主子阵为 $A_{r}$ , 作二次型 $g(x) = x' A_{r} x$ . 设 $\alpha$ 是 r 维非零列向量, 后面添上 n - r 个零将 $\alpha$ 加长为 n 维列向量 $\beta$ . 因为 $\beta \neq 0$ , 故由 A 的正定性可得 $g(\alpha) = \alpha' A_{r} \alpha = \beta' A \beta > 0$ , 于是 g 是正定型, 从而 $A_{r}$ 是正定阵. 同理可证另外一个结论. □

例 8.4 设 A 为 n 阶正定实对称矩阵, 求证:

(1) A 的所有主子式全大于零, 特别地, A 的主对角元全大于零;

(2) A 中绝对值最大的元素只在 A 的主对角线上.

证明 (1) 是例 8.3 的直接推论, 当然我们也可以直接证明它. 设 $M$ 是 $\mathbf{A}$ 的第 $i_1, \cdots, i_k$ 行和列交点上的元素组成的主子式. 设 $i_{k+1} < \cdots < i_n$ 是 $[1, n]$ 中去掉 $i_1, \cdots, i_k$ 后剩余的指标, 对二次型 $f(\pmb{x}) = \pmb{x}'\pmb{A}\pmb{x}$ 作如下可逆线性变换:

$$
y _ {1} = x _ {i _ {1}}, \dots , y _ {k} = x _ {i _ {k}}, y _ {j} = x _ {i _ {j}} (k + 1 \leq j \leq n).
$$

于是 $f(x)=y^{\prime}By$ ，且 B 的第 k 个顺序主子式就是 M，因为 B 正定，故有 M>0。

(2) 假设 $A = (a_{ij})$ 中第 $(i,j)$ 元素 $a_{ij}$ 的绝对值最大. 用反证法, 若 $i \neq j$ , 则 $A$ 的第 $i,j$ 行和列交点上的元素组成的主子式为

$$
\left| \begin{array}{c c} a _ {i i} & a _ {i j} \\ a _ {j i} & a _ {j j} \end{array} \right| = a _ {i i} a _ {j j} - a _ {i j} ^ {2} \leq 0,
$$

这与 A 是正定阵矛盾. □

注 例 8.4 (1) 用的是变量代换, 但是它和矩阵的合同变换 (对换行与列) 是等价的, 请读者想一想为什么.

例 3.87 设 n 阶方阵 A 是对称矩阵或反对称矩阵且秩等于 r，求证：A 必有一个 r 阶主子式不等于零.

证法2 设 $\pmb{A}$ 的行向量分别为 $\alpha_{1},\alpha_{2},\cdots ,\alpha_{n}$ , 列向量分别为 $\beta_{1},\beta_{2},\cdots ,\beta_{n}$ . 设 $\alpha_{i_1},\alpha_{i_2},\cdots ,\alpha_{i_r}$ 是 $\pmb{A}$ 行向量的极大无关组, 用行对换可将这些行向量换到前 $r$ 行, 再用对称的列对换可将列向量 $\beta_{i_1},\beta_{i_2},\cdots ,\beta_{i_r}$ 换到前 $r$ 列, 得到的矩阵记为 $\pmb{B}$ , 则 $\pmb{B}$ 仍是对称矩阵 (或反对称矩阵), 且 $\pmb{A}$ 的第 $i_1,i_2,\dots ,i_r$ 行和列交点上的元素组成的主子式变成矩阵 $\pmb{B}$ 的第 $r$ 个顺序主子式 $|\pmb {D}|$ . 只要证明 $|\pmb {D}|\neq 0$ 即可. 由于 $\pmb{B}$ 的后 $n - r$ 个行向量都是前 $r$ 个行向量的线性组合, 故可用第三类初等行变换将它们消去. 接着进行对称的第三类初等列变换, 得到的矩阵记为 $\pmb{C}$ , 则 $\pmb{C}$ 仍是对称矩阵 (或反对称矩阵). 由对称性 (或反对称性) 可知 $\pmb{C}$ 具有下列形式:

$$
\boldsymbol {C} = \left( \begin{array}{c c} \boldsymbol {D} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right),
$$

因为 C 的秩等于 A 的秩, 故 D 的秩等于 r, 从而 $|D| \neq 0$ . □

例 8.5 设有分块对称矩阵:

$$
\boldsymbol {A} = \left( \begin{array}{c c} \boldsymbol {A} _ {1} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {A} _ {2} \end{array} \right),
$$

假设 $A_{1}$ 合同于 $B_{1}, A_{2}$ 合同于 $B_{2}$ ，求证：A 合同于分块对称矩阵

$$
B = \left( \begin{array}{c c} B _ {1} & O \\ O & B _ {2} \end{array} \right).
$$

证明 设 $C_{1}, C_{2}$ 为非异阵, 使得 $C_{1}^{\prime}A_{1}C_{1}=B_{1}, C_{2}^{\prime}A_{2}C_{2}=B_{2}$ , 令

$$
\boldsymbol {C} = \left( \begin{array}{c c} \boldsymbol {C} _ {1} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {C} _ {2} \end{array} \right),
$$

则 C 为非异阵, 使得 $C'AC = B$ . □

例 8.6 设分块实对称矩阵 $M = \begin{pmatrix} A & O \\ O & B \end{pmatrix}$ ，用 $p(A)$ , $q(A)$ 分别表示 A 的正负惯性指数，求证：

$$
p (\boldsymbol {M}) = p (\boldsymbol {A}) + p (\boldsymbol {B}), \quad q (\boldsymbol {M}) = q (\boldsymbol {A}) + q (\boldsymbol {B}).
$$

证明 由实对称矩阵的合同标准型可知, A 合同于 $\mathrm{diag}\{I_{p(A)}, -I_{q(A)}, O\}$ , B 合同于 $\mathrm{diag}\{I_{p(B)}, -I_{q(B)}, O\}$ ，因此由例 8.1 和例 8.5 可知， $M = \mathrm{diag}\{A, B\}$ 合同于 $\mathrm{diag}\{I_{p(A)+p(B)}, -I_{q(A)+q(B)}, O\}$ ，从而结论得证。☐

例 8.7 (正负惯性指数的降阶公式) 设分块实对称矩阵 $M = \begin{pmatrix} A & C \\ C' & B \end{pmatrix}$ ，其中 A, B 都可逆，求证：

$$
p (\boldsymbol {A}) + p (\boldsymbol {B} - \boldsymbol {C} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {C}) = p (\boldsymbol {B}) + p (\boldsymbol {A} - \boldsymbol {C B} ^ {- 1} \boldsymbol {C} ^ {\prime}),
$$

$$
q (\boldsymbol {A}) + q \left(\boldsymbol {B} - \boldsymbol {C} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {C}\right) = q (\boldsymbol {B}) + q \left(\boldsymbol {A} - \boldsymbol {C B} ^ {- 1} \boldsymbol {C} ^ {\prime}\right).
$$

证明 先将 $M$ 的第一分块行左乘 $-C^{\prime}A^{-1}$ 加到第二分块行上, 再将第一分块列右乘 $(-C^{\prime}A^{-1})^{\prime} = -A^{-1}C$ 加到第二分块列上, 可得如下合同变换:

$$
M = \left( \begin{array}{c c} A & C \\ C ^ {\prime} & B \end{array} \right) \to \left( \begin{array}{c c} A & C \\ O & B - C ^ {\prime} A ^ {- 1} C \end{array} \right) \to \left( \begin{array}{c c} A & O \\ O & B - C ^ {\prime} A ^ {- 1} C \end{array} \right).
$$

另一种对称分块初等变换是, 先将 $M$ 的第二分块行左乘 $-CB^{-1}$ 加到第一分块行上, 再将第二分块列右乘 $(-CB^{-1})' = -B^{-1}C'$ 加到第一分块列上, 可得合同变换:

$$
M = \left( \begin{array}{c c} A & C \\ C ^ {\prime} & B \end{array} \right) \to \left( \begin{array}{c c} A - C B ^ {- 1} C ^ {\prime} & O \\ C ^ {\prime} & B \end{array} \right) \to \left( \begin{array}{c c} A - C B ^ {- 1} C ^ {\prime} & O \\ O & B \end{array} \right).
$$

因此 $\begin{pmatrix} A & O \\ O & B - C'A^{-1}C \end{pmatrix}$ 合同于 $\begin{pmatrix} A - CB^{-1}C' & O \\ O & B \end{pmatrix}$ ，再由例 8.6 即得结论。☐

例 8.8 设 $\alpha$ 是 n 维实列向量且 $\alpha' \alpha = 1$ ，求矩阵 $I_{n} - 2\alpha\alpha'$ 的正负惯性指数.解 构造分块对称矩阵 $M = \begin{pmatrix} I_{n} & \sqrt{2}\alpha \\ \sqrt{2}\alpha' & 1 \end{pmatrix}$ ，由例 8.7 可知， $I_{n} - 2\alpha\alpha'$ 的正惯性指数等于 n - 1，负惯性指数等于 1. □

例 8.9 求 $n(n \geq 2)$ 阶实对称矩阵 A 的正负惯性指数, 其中 $a_{i}$ 均为实数:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} ^ {2} & a _ {1} a _ {2} + 1 & \dots & a _ {1} a _ {n} + 1 \\ a _ {2} a _ {1} + 1 & a _ {2} ^ {2} & \dots & a _ {2} a _ {n} + 1 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} + 1 & a _ {n} a _ {2} + 1 & \dots & a _ {n} ^ {2} \end{array} \right).
$$

解 构造分块对称矩阵

$$
M = \left( \begin{array}{c c} {{- I _ {n}}} & {{B}} \\ {{B ^ {\prime}}} & {{- I _ {2}}} \end{array} \right),   \text {其中}   B ^ {\prime} = \left( \begin{array}{c c c c} {{a _ {1}}} & {{a _ {2}}} & {{\dots}} & {{a _ {n}}} \\ {{1}} & {{1}} & {{\dots}} & {{1}} \end{array} \right),
$$

则 $A = -I_{n} - B(-I_{2})^{-1}B'$ . 由于 $C = -I_{2} - B'(-I_{n})^{-1}B = \begin{pmatrix} \sum_{i=1}^{n} a_{i}^{2} - 1 & \sum_{i=1}^{n} a_{i} \\ \sum_{i=1}^{n} a_{i} & n - 1 \end{pmatrix}$ 经过对称初等变换可化为 $\operatorname{diag}\left\{\frac{|C|}{n-1}, n-1\right\}$ , 故当 $|C| > 0$ 时, $p(C) = 2$ , $q(C) = 0$ ; 当 $|C| = 0$ 时, $p(C) = 1$ , $q(C) = 0$ ; 当 $|C| < 0$ 时, $p(C) = 1$ , $q(C) = 1$ . 再由例 2.67 和例 8.7 可知, 当 $(-1)^n |A| > 0$ 时, $p(A) = 2$ , $q(A) = n-2$ ; 当 $|A| = 0$ 时, $p(A) = 1$ , $q(A) = n-2$ ; 当 $(-1)^n |A| < 0$ 时, $p(A) = 1$ , $q(A) = n-1$ . $\square$ 

例 8.10 设 A 是 n 阶可逆实矩阵, $B = \begin{pmatrix} O & A \\ A' & O \end{pmatrix}$ , 求 B 的正负惯性指数.

解 将 B 的第一分块行左乘 $A^{-1}$ ，再将第一分块列右乘 $(A^{-1})' = (A')^{-1}$ ，于是 B 合同于 $C = \begin{pmatrix} O & I_n \\ I_n & O \end{pmatrix}$ 。将 C 的第二分块行加到第一分块行上，再将第二分块列加到第一分块列上，于是 C 合同于 $D = \begin{pmatrix} 2I_n & I_n \\ I_n & O \end{pmatrix}$ 。将 D 的第一分块行左乘 $-\frac{1}{2}I_n$ 加到第二分块行上，再将第一分块列右乘 $-\frac{1}{2}I_n$ 加到第二分块列上，于是 D 合同于 $\begin{pmatrix} 2I_n & O \\ O & -\frac{1}{2}I_n \end{pmatrix}$ ，因此 B 的正负惯性指数都等于 n。☐

例 8.11 设 A 是 n 阶正定实对称矩阵, 求证: $B = \begin{pmatrix} A & -I_{n} \\ -I_{n} & A^{-1} \end{pmatrix}$ 是半正定阵.

证明 将 B 的第一分块行左乘 $A^{-1}$ 加到第二分块行上, 再将第一分块列右乘 $A^{-1}$ 加到第二分块列上, 于是 B 合同于 $\begin{pmatrix} A & O \\ O & O \end{pmatrix}$ , 这是一个半正定矩阵. □

## § 8.3 归纳法的应用

数学归纳法是讨论二次型与相关矩阵问题的常用方法之一。注意到例 8.7 的证明过程展示了这样一种方法, 例如有一个分块对称矩阵 $M = \begin{pmatrix} A & C \\ C' & B \end{pmatrix}$ , 其中 $A$ 是可逆矩阵, 则通过对称分块初等变换可用 $A$ 同时消去 $C$ 与 $C'$ , 从而得到分块对角矩阵 $\begin{pmatrix} A & O \\ O & B - C'A^{-1}C \end{pmatrix}$ 。此时矩阵 $A, B - C'A^{-1}C$ 的阶都比 $M$ 的阶低, 如果问题的条件和结论在合同关系下不改变, 则上述过程就是运用归纳法的基础。事实上, 正定阵的判定准则之一, 即实对称矩阵 $A$ 是正定阵的充要条件是 $A$ 的顺序主子式全大于零, 就是通过上述方法证明的。下面我们再来看几个典型的例题。

例 8.12 证明下列关于 n 阶实对称矩阵 $A = (a_{ij})$ 的命题等价:

(1) A 是正定阵;

(2) 存在主对角元全等于 1 的上三角矩阵 B 和主对角元全为正数的对角矩阵 D，使得 $A = B'DB$ ;

(3) 存在主对角元全为正数的上三角矩阵 C, 使得 $A = C'C$ .

证明 (1) $\Rightarrow$ (2): 只要证明存在主对角元全为 1 的上三角矩阵 $T$ , 使得 $T'AT = D$ 是正定对角矩阵即可. 因为一旦得证, $B = T^{-1}$ 也是主对角元全为 1 的上三角矩阵, 并且 $A = B'DB$ . 对阶数 $n$ 进行归纳, 当 $n = 1$ 时结论显然成立. 假设对 $n - 1$ 阶正定阵结论成立, 现证明 $n$ 阶正定阵的情形. 设 $A = \begin{pmatrix} A_{n-1} & \alpha \\ \alpha' & a_{nn} \end{pmatrix}$ , 其中 $A_{n-1}$ 是 $n - 1$ 阶矩阵, $\alpha$ 是 $n - 1$ 维列向量. 因为 $A$ 正定, 所以 $A_{n-1}$ 是 $n - 1$ 阶正定阵, 从而是可逆矩阵. 考虑如下对称分块初等变换:

$$
\left( \begin{array}{c c} I _ {n - 1} & O \\ - \alpha^ {\prime} A _ {n - 1} ^ {- 1} & 1 \end{array} \right) \left( \begin{array}{c c} A _ {n - 1} & \alpha \\ \alpha^ {\prime} & a _ {n n} \end{array} \right) \left( \begin{array}{c c} I _ {n - 1} & - A _ {n - 1} ^ {- 1} \alpha \\ O & 1 \end{array} \right) = \left( \begin{array}{c c} A _ {n - 1} & O \\ O & a _ {n n} - \alpha^ {\prime} A _ {n - 1} ^ {- 1} \alpha \end{array} \right),
$$

由 A 的正定性可得 $a_{nn} - \alpha' A_{n-1}^{-1} \alpha > 0$ . 再由归纳假设, 存在主对角元全为 1 的 n - 1 阶上三角矩阵 $T_{n-1}$ , 使得 $T_{n-1}' A_{n-1} T_{n-1} = D_{n-1}$ 是 n - 1 阶正定对角矩阵. 令

$$
\boldsymbol {T} = \left( \begin{array}{c c} \boldsymbol {I} _ {n - 1} & - \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha} \\ \boldsymbol {O} & 1 \end{array} \right) \left( \begin{array}{c c} \boldsymbol {T} _ {n - 1} & \boldsymbol {O} \\ \boldsymbol {O} & 1 \end{array} \right),
$$

则 T 是一个主对角元全为 1 的 n 阶上三角矩阵, 使得

$$
\boldsymbol {T} ^ {\prime} \boldsymbol {A} \boldsymbol {T} = \left( \begin{array}{c c} \boldsymbol {D} _ {n - 1} & \boldsymbol {O} \\ \boldsymbol {O} & a _ {n n} - \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha} \end{array} \right)
$$

是 n 阶正定对角矩阵.

(2) $\Rightarrow$ (3): 由 (2) 可设 $D=\mathrm{diag}\{d_{1},d_{2},\cdots,d_{n}\}$ , 令 $s_{i}=\sqrt{d_{i}}>0$ ,

$$
\boldsymbol {S} = \operatorname{diag} \left\{s _ {1}, s _ {2}, \dots , s _ {n} \right\}.
$$

设 C = SB，则 $A = C'C$ 。显然 C = SB 是主对角元全为正数的上三角矩阵。

(3) $\Rightarrow$ (1): 这时 $A = C' I_n C$ , 故 $A$ 和 $I_n$ 合同, 从而 $A$ 正定. $\square$ 

注 设 $C = (c_{ij})$ 为主对角元全为正数的上三角矩阵, 使得 $A = C'C$ , 则 $c_{11}c_{1j} = a_{1j}$ , 从而 $c_{11} = \sqrt{a_{11}} > 0$ , $c_{1j} = \frac{a_{1j}}{\sqrt{a_{11}}} (2 \leq j \leq n)$ , 即 $C$ 的第一行元素被唯一确定. 同理不断地讨论下去, 可得这样的 $C$ 存在并被正定阵 $A$ 唯一确定. 因为 $S$ 是由 $C$ 的主对角元构成的对角矩阵, 故由 $C$ 的唯一性可得 $S$ 的唯一性, 从而可得 $D = S^2$ 以及 $B = S^{-1}C$ 的唯一性. 因此, 例 8.12 中关于正定阵 $A$ 的两种分解 (2) 和 (3) 都是存在且唯一的, 其中分解 (3) 通常称为正定阵 $A$ 的 Cholesky 分解. 另外, 上述两种分解也有非常重要的几何意义, 它们与 Gram-Schmidt 正交化方法密切相关, 我们将在 §9.3 阐述相关的细节.

例 8.13 设 $f(x)=x^{\prime}Ax$ 是实二次型, 相伴矩阵 A 的前 n-1 个顺序主子式 $P_{1},\cdots,P_{n-1}$ 非零, 求证: 经过可逆线性变换 f 可化为下列标准型:

$$
f = P _ {1} y _ {1} ^ {2} + \frac {P _ {2}}{P _ {1}} y _ {2} ^ {2} + \dots + \frac {P _ {n}}{P _ {n - 1}} y _ {n} ^ {2},
$$

其中 $P_{n}=|A|$ .

证明 对 $n$ 用归纳法. 当 $n = 1$ 时结论显然成立, 假设结论对 $n - 1$ 成立. 设

$$
\boldsymbol {A} = \left( \begin{array}{c c} \boldsymbol {A} _ {n - 1} & \boldsymbol {\alpha} \\ \boldsymbol {\alpha} ^ {\prime} & a _ {n n} \end{array} \right),
$$

由于 $\left|A_{n-1}\right|=P_{n-1}\neq0,$ 故可对 A 进行下列对称分块初等变换:

$$
\boldsymbol {A} = \left(\begin{array}{c c}\boldsymbol {A} _ {n - 1}&\boldsymbol {\alpha}\\\boldsymbol {\alpha} ^ {\prime}&a _ {n n}\end{array}\right)\rightarrow \left(\begin{array}{c c}\boldsymbol {A} _ {n - 1}&\boldsymbol {\alpha}\\\boldsymbol {O}&a _ {n n} - \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha}\end{array}\right)\rightarrow \left(\begin{array}{c c}\boldsymbol {A} _ {n - 1}&\boldsymbol {O}\\\boldsymbol {O}&a _ {n n} - \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha}\end{array}\right) = \boldsymbol {B},
$$

显然这是一个合同变换. 又因为第三类分块初等变换不改变行列式的值, 故

$$
\left| \boldsymbol {A} \right| = \left| \boldsymbol {A} _ {n - 1} \right| \left(a _ {n n} - \alpha^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \alpha\right),
$$

即

$$
a _ {n n} - \alpha^ {\prime} A _ {n - 1} ^ {- 1} \alpha = \frac {P _ {n}}{P _ {n - 1}}.
$$

由归纳假设, 存在可逆矩阵 M, 使得

$$
\boldsymbol {M} ^ {\prime} \boldsymbol {A} _ {n - 1} \boldsymbol {M} = \operatorname{diag} \left\{P _ {1}, \frac {P _ {2}}{P _ {1}}, \dots , \frac {P _ {n - 1}}{P _ {n - 2}} \right\}.
$$

作矩阵 $C = \begin{pmatrix} M & O \\ O & 1 \end{pmatrix}$ ，则

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{P _ {1}, \frac {P _ {2}}{P _ {1}}, \dots , \frac {P _ {n}}{P _ {n - 1}} \right\}. \square
$$

例 8.14 设 A 为 n 阶正定实对称矩阵且非主对角元都是负数, 求证: $A^{-1}$ 的每个元素都是正数.

证明 对阶数 $n$ 进行归纳. 当 $n = 1$ 时结论显然成立, 设结论对 $n - 1$ 阶成立, 现证明 $n$ 阶的情形. 设 $\mathbf{A} = \begin{pmatrix} \mathbf{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix}$ , 其中 $\mathbf{A}_{n-1}$ 是 $\mathbf{A}$ 的第 $n - 1$ 个顺序主

子阵, 从而 $A_{n-1}$ 是 $n-1$ 阶正定实对称矩阵且非主对角元都是负数, 故由归纳假设可知 $A_{n-1}^{-1}$ 的每个元素都是正数. 利用分块初等变换可求出

$$
\boldsymbol {A} ^ {- 1} = \left( \begin{array}{c c} \boldsymbol {A} _ {n - 1} ^ {- 1} + d _ {n} ^ {- 1} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha} \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} & - d _ {n} ^ {- 1} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha} \\ - d _ {n} ^ {- 1} \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} & d _ {n} ^ {- 1} \end{array} \right),
$$

其中 $d_{n} = a_{nn} - \alpha^{\prime}A_{n - 1}^{-1}\alpha = |A| / |A_{n - 1}| > 0.$ 注意到 $\pmb{A}_{n - 1}^{-1}$ 的每个元素都是正数，且 $\pmb{\alpha}$ 的每个元素都是负数，故 $A^{-1}$ 的每个元素都是正数. □

例 8.15 设 $\boldsymbol{A} = (a_{ij})$ 是 n 阶正定实对称矩阵, 其逆阵 $\boldsymbol{A}^{-1} = (b_{ij})$ , 求证: $a_{ii}b_{ii} \geq 1$ , 且等号成立当且仅当 A 的第 i 行和列的所有元素除了 $a_{ii}$ 之外全为零.

证明 对换 $\mathbf{A}$ 的第 $i, n$ 行和列, 可将 $a_{ii}$ 换到第 $(n, n)$ 位置, 这相当于合同变换 $\pmb{P}_{in} \pmb{A} \pmb{P}_{in}$ . 此时 $(\pmb{P}_{in} \pmb{A} \pmb{P}_{in})^{-1} = \pmb{P}_{in} \pmb{A}^{-1} \pmb{P}_{in}$ , 即对换了 $\pmb{A}^{-1}$ 的第 $i, n$ 行和列, $b_{ii}$ 也换到了第 $(n, n)$ 位置. 因此不失一般性, 只需证明 $a_{nn} b_{nn} \geq 1$ , 且等号成立当且仅当 $\mathbf{A}$ 的第 $n$ 行和列的所有元素除了 $a_{nn}$ 之外全为零即可. 采用与例8.14相同的记号和论证, 可得 $b_{nn} = d_n^{-1}$ , 再由 $\pmb{A}_{n-1}$ 的正定性可得

$$
b _ {n n} ^ {- 1} = d _ {n} = a _ {n n} - \alpha^ {\prime} A _ {n - 1} ^ {- 1} \alpha \leq a _ {n n},
$$

即有 $a_{nn}b_{nn}\geq 1$ ，且等号成立当且仅当 $\alpha = 0$ □

下面是反对称矩阵的合同标准型, 它可以用典型的归纳法来证明.

例 8.16 设 A 是 n 阶反对称矩阵, 则 A 必合同于下列形状的分块矩阵:

$$
\operatorname{diag} \{S, \dots , S, 0, \dots , 0 \}, \tag {8.2}
$$

其中 $S = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ . 特别地, 反对称矩阵 A 的秩必为偶数 2r, 其中 r 是 S 在 A 的上述合同标准型中的个数.

证明 对阶数 $n$ 进行归纳. 当 $n = 0,1$ 时结论显然成立, 假设结论对阶数小于 $n$ 的反对称矩阵成立. 现有 $n$ 阶反对称矩阵 $\mathbf{A}$ , 若 $\mathbf{A} = \mathbf{O}$ , 结论已成立, 故设 $\mathbf{A} \neq \mathbf{O}$ . 由于反对称矩阵的主对角元全为零, 故可设 $\mathbf{A}$ 的第 $(i,j)$ 元素 $a_{ij} \neq 0 (i < j)$ , 此时 $\mathbf{A}$ 的第 $(j,i)$ 元素为 $-a_{ij}$ . 对换 $\mathbf{A}$ 的第一行与第 $i$ 行, 再对换第一列与第 $i$ 列; 对换第二行与第 $j$ 行, 再对换第二列与第 $j$ 列; 然后将第一行乘以 $\frac{1}{a_{ij}}$ , 第一列乘以 $\frac{1}{a_{ij}}$ ; 最后得到 $\mathbf{A}$ 合同于下列形状的矩阵:

$$
\boldsymbol {M} = \left( \begin{array}{c c} \boldsymbol {S} & \boldsymbol {B} \\ - \boldsymbol {B} ^ {\prime} & \boldsymbol {A} _ {n - 2} \end{array} \right),
$$

其中 $A_{n-2}$ 是 $n - 2$ 阶反对称矩阵. 显然 $S$ 是可逆矩阵, 对 $M$ 作下列对称分块初等变换: 第一分块行左乘 $B'S^{-1}$ 加到第二分块行上, 再将第一分块列右乘 $(B'S^{-1})' = -S^{-1}B$ 加到第二分块列上, 于是 $A$ 合同于下列矩阵:

$$
\boldsymbol {N} = \left( \begin{array}{c c} \boldsymbol {S} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {A} _ {n - 2} + \boldsymbol {B} ^ {\prime} \boldsymbol {S} ^ {- 1} \boldsymbol {B} \end{array} \right).
$$

注意到 $A_{n - 2} + B'S^{-1}B$ 是 $n - 2$ 阶反对称矩阵, 故由归纳假设它合同于 (8.2) 式形状的矩阵, 因此分块对角矩阵 $\pmb{N}$ 也合同于 (8.2) 式形状的矩阵, 结论得证. $\square$ 

注 本例题给出了例 3.88 的另一证明。注意到在本题的证明中, 我们采用的是跨度为 2 的数学归纳法, 故在起始步骤时需要验证 $n = 1,2$ 这两种情形, 但我们不难发现 $n = 2$ 情形的证明完全包含在归纳过程的证明中, 因此可以用 $n = 0,1$ 的情形作为起始步骤。需要注意的是, $n = 0$ 并不意味着存在零阶矩阵, 而只是说明归纳过程已经完全结束。后面遇到跨度为 2 的数学归纳法, 我们通常都采用上述约定。

例 8.17 求证: n 阶实反对称矩阵 A 的行列式值总是非负实数.

证明 由例8.16可知，存在非异实矩阵 $C$ ，使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \operatorname{diag} \left\{\boldsymbol {S}, \dots , \boldsymbol {S}, 0, \dots , 0 \right\},
$$

其中 $S = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ . 若 A 是奇异阵, 则 $|A| = 0$ , 结论显然成立. 若 A 是非异阵, 则由上式可得 $|A| \cdot |C|^2 = |S|^{\frac{n}{2}} = 1$ , 从而 $|A| > 0$ . □

例 8.18 设 A 为 n 阶实反对称矩阵, 求证:

(1) $|I_{n}+A|\geq1+|A|$ ，且等号成立当且仅当 $n\leq2$ 或当 $n\geq3$ 时，A=O.

(2) $|I_{n}+A|\geq1$ , 且等号成立当且仅当 A=O.

证明 (1) 由例 1.46 可知

$$
\left| \boldsymbol {I} _ {n} + \boldsymbol {A} \right| = \left| \boldsymbol {I} _ {n} \right| + \left| \boldsymbol {A} \right| + \sum_ {1 \leq k \leq n - 1} \left(\sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {k} \leq n} \boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ i _ {1} & i _ {2} & \dots & i _ {k} \end{array} \right)\right).
$$

注意到 $A\left(\begin{matrix}i_{1}&i_{2}&\cdots&i_{k}\\ i_{1}&i_{2}&\cdots&i_{k}\end{matrix}\right)$ 是 k 阶实反对称行列式, 故由例 8.17 可知其值大于等于零, 于是 $|I_{n}+A|\geq1+|A|$ 成立. 当 $n\leq2$ 时, 容易验证不等式的等号成立. 当 $n\geq3$ 时, 若不等式的等号成立, 则必有

$$
\boldsymbol {A} \left( \begin{array}{c c} i & j \\ i & j \end{array} \right) = \left| \begin{array}{c c} 0 & a _ {i j} \\ - a _ {i j} & 0 \end{array} \right| = a _ {i j} ^ {2} = 0,
$$

即有 $a_{ij} = 0 (1 \leq i < j \leq n)$ , 从而 $\mathbf{A} = \mathbf{O}$ . (2) 同理可证, 细节留给读者完成. $\square$ 

## § 8.4 合同标准型的应用

引进标准型的目的是为了简化问题的讨论。应用合同标准型（复相合标准型）可以简化二次型和对称矩阵（Hermite 型和 Hermite 矩阵）有关问题的讨论。其方法是先对标准型证明所需结论，若结论在合同（复相合）变换下不变，就可以过渡到一般的情形。这种做法和相抵标准型、相似标准型是完全类似的。

例 8.19 求证: 秩等于 r 的对称矩阵 A 等于 r 个秩等于 1 的对称矩阵之和.

证明 设 C 是可逆矩阵, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \operatorname{diag} \left\{a _ {1}, \dots , a _ {r}, 0, \dots , 0 \right\},
$$

其中 $a_{i} \neq 0 (1 \leq i \leq r)$ , 则

$$
\boldsymbol {A} = (\boldsymbol {C} ^ {- 1}) ^ {\prime} a _ {1} \boldsymbol {E} _ {1 1} \boldsymbol {C} ^ {- 1} + \dots + (\boldsymbol {C} ^ {- 1}) ^ {\prime} a _ {r} \boldsymbol {E} _ {r r} \boldsymbol {C} ^ {- 1},
$$

其中 $E_{ii}$ 是第 $(i,i)$ 元素为 1, 其余元素全为 0 的基础矩阵, 从而每个 $(\boldsymbol{C}^{-1})'a_{i}\boldsymbol{E}_{ii}\boldsymbol{C}^{-1}$ 都是秩等于 1 的对称矩阵. □

例 8.20 设 A 为 n 阶复对称矩阵且秩等于 r, 求证: A 可分解为 $A = T'T$ , 其中 T 是秩等于 r 的 n 阶复矩阵.

证明 A 合同于对角矩阵, 即存在可逆矩阵 C, 使得

$$
\boldsymbol {A} = \boldsymbol {C} ^ {\prime} \operatorname{diag} \left\{c _ {1}, \dots , c _ {r}, 0, \dots , 0 \right\} \boldsymbol {C},
$$

其中 $c_{i} \neq 0 (1 \leq i \leq r)$ . 令 $d_{i} = \sqrt{c_{i}}$ (取定一个平方根即可),

$$
\boldsymbol {D} = \operatorname{diag} \left\{d _ {1}, \dots , d _ {r}, 0, \dots , 0 \right\},
$$

则 $A=(DC)'(DC)$ . 令 T=DC 即得结论. □

例 8.21 求证: 任一 n 阶复矩阵 A 都相似于一个复对称矩阵.

证明 由例 7.73 可得 $A = BC$ , 其中 $B, C$ 都是复对称矩阵, 并且可以随意指定 $B, C$ 中的一个为非异阵. 不妨设 $C$ 是非异阵, 则由例 8.20 可得 $C = T'T$ , 其中 $T$ 是非异复矩阵. 于是 $A = BC = BT'T$ 相似于 $T(BT'T)T^{-1} = TBT'$ , 这是一个复对称矩阵. $\square$ 

例 8.22 设实二次型 f 和 g 的系数矩阵分别是 A 和 $A^{-1}$ ，求证：f 和 g 有相同的正负惯性指数.

证明 设 $C^{\prime}AC = diag\{a_{1}, a_{2}, \cdots, a_{n}\}$ ，则

$$
\boldsymbol {C} ^ {- 1} \boldsymbol {A} ^ {- 1} (\boldsymbol {C} ^ {- 1}) ^ {\prime} = (\boldsymbol {C} ^ {\prime} \boldsymbol {A C}) ^ {- 1} = \operatorname{diag} \left\{a _ {1} ^ {- 1}, a _ {2} ^ {- 1}, \dots , a _ {n} ^ {- 1} \right\}.
$$

因为 $a_{i}$ 和 $a_{i}^{-1}$ 有相同的正负性, 所以 $\mathbf{A}$ 和 $\mathbf{A}^{-1}$ 有相同的正负惯性指数. $\square$ 

例 8.23 设 f 是 n 元实二次型, 其系数矩阵 A 满足 $|A| < 0$ , 求证: 必存在一组实数 $a_{1}, a_{2}, \cdots, a_{n}$ , 使得

$$
f (a _ {1}, a _ {2}, \dots , a _ {n}) <   0.
$$

证明 设 C 是可逆矩阵, 使得 $C'AC = B$ 为对角矩阵. 注意到 $|A||C|^{2} = |B|$ , 故 $|B| < 0$ . 因为对调对角矩阵的主对角元后得到的矩阵和原矩阵合同, 故不失一般性, 可设 B 的主对角元前 r 个为负, 后 n - r 个为正, 于是 r 必是奇数. 作 n 维列向量 $\alpha = (1, \cdots, 1, 0, \cdots, 0)'$ , 其中有 r 个 1. 又令 $(a_{1}, a_{2}, \cdots, a_{n})' = C\alpha$ , 则 $f(a_{1}, a_{2}, \cdots, a_{n}) = (C\alpha)'A(C\alpha) = \alpha'B\alpha < 0$ . 也可用反证法来证明, 若结论不成立, 则 f 是半正定型, 从而 A 是半正定阵, 于是 $|A| \geq 0$ , 矛盾! □

例 8.24 如果实二次型 $f(x_{1}, x_{2}, \cdots, x_{n})$ 仅在 $x_{1} = x_{2} = \cdots = x_{n} = 0$ 时为零，证明：f 必是正定型或负定型.

证明 设 f 的正负惯性指数分别为 p, q, 秩为 r, 我们分情况来讨论.

若 $f$ 是不定型, 即 $p > 0$ 且 $q > 0$ , 则存在可逆线性变换 $\pmb{x} = \pmb{C}\pmb{y}$ , 使得 $f$ 可化简为如下规范标准型:

$$
f = y _ {1} ^ {2} + \dots + y _ {p} ^ {2} - y _ {p + 1} ^ {2} - \dots - y _ {r} ^ {2}.
$$

取 $\boldsymbol{y} = (b_{1}, b_{2}, \cdots, b_{n})'$ ，其中 $b_{1} = b_{p+1} = 1$ ，其他 $b_{i}$ 全为零，则 $x = Cy = (a_{1}, a_{2}, \cdots, a_{n})'$ 是一个非零列向量，但 $f(a_{1}, a_{2}, \cdots, a_{n}) = 0$ ，这与假设矛盾，所以 f 不是不定型.

若 $f$ 是半正定型, 但非正定型, 即 $p = r < n$ , 则存在可逆线性变换 $\pmb{x} = \pmb{C}\pmb{y}$ , 使得 $f$ 可化简为如下规范标准型:

$$
f = y _ {1} ^ {2} + \dots + y _ {r} ^ {2}.
$$

取 $\boldsymbol{y}=(b_{1},b_{2},\cdots,b_{n})'$ ，其中 $b_{n}=1$ ，其他 $b_{i}$ 全为零，则 $\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}=(a_{1},a_{2},\cdots,a_{n})'$ 是一个非零列向量，但 $f(a_{1},a_{2},\cdots,a_{n})=0$ ，这与假设矛盾，所以 f 不是非正定型的半正定型。同理可证 f 也不是非负定型的半负定型。

综上所述， $f$ 必是正定型或负定型. □

例 8.25 设 A 为 n 阶实对称矩阵, 若 A 半正定, 求证: $A^{*}$ 也半正定.

证明 因为 A 半正定, 故存在非异阵 C, 使得

$$
C ^ {\prime} A C = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

若 $r = n$ , 则 $\pmb{A}$ 是正定阵, 上式两边同取伴随可得 $C^{*}A^{*}(C^{*})^{\prime} = I_{n}^{*} = I_{n}$ , 故 $A^{*}$ 也是正定阵. 若 $r = n - 1$ , 则上式两边同取伴随可得

$$
\boldsymbol {C} ^ {*} \boldsymbol {A} ^ {*} (\boldsymbol {C} ^ {*}) ^ {\prime} = \left( \begin{array}{c c} \boldsymbol {I} _ {n - 1} & \boldsymbol {O} \\ \boldsymbol {O} & 0 \end{array} \right) ^ {*} = \left( \begin{array}{c c} \boldsymbol {O} & \boldsymbol {O} \\ \boldsymbol {O} & 1 \end{array} \right),
$$

因此 $A^{*}$ 的正惯性指数为 1, 秩也为 1, 从而是半正定阵. 若 r < n - 1, 则 $A^{*} = O$ , 结论自然成立. □

例 8.26 设 A 为 n 阶实对称矩阵, 求证:

(1) A 是正定阵的充要条件是存在 n 阶非异实矩阵 C, 使得 $A = C'C$ .

(2) A 是半正定阵的充要条件是存在 n 阶实矩阵 C, 使得 $A = C'C$ . 特别地, $|A| = |C|^2 \geq 0$ .

证明 (1) 由 §§ 8.1.3 定理 4 可知, $A$ 是正定阵当且仅当 $A$ 合同于 $I_{n}$ , 即存在非异实矩阵 $C$ , 使得 $A = C' I_{n} C = C' C$ .

(2) 由 §§ 8.1.3 定理 4 可知, $A$ 是半正定阵当且仅当 $A$ 合同于 $\operatorname{diag}\{I_r, O\}$ , 即存在非异实矩阵 $B$ , 使得 $A = B'\operatorname{diag}\{I_r, O\} B$ . 令 $C = \operatorname{diag}\{I_r, O\} B$ , 则 $A = C'C$ . 反之, 若 $A = C'C$ , 其中 $C$ 是实矩阵, 则对任一 $n$ 维实列向量 $\alpha$ , $\alpha' A \alpha = \alpha' C' C \alpha = (C \alpha)' (C \alpha) \geq 0$ , 由定义可知 $A$ 为半正定阵. $\square$ 

例 8.26 是正定阵和半正定阵的判定准则之一 (参考 § 8.7 和 § 8.8), 下面我们来看 4 个典型的应用.

例 8.27 设 A 为 n 阶正定实对称矩阵, $\alpha, \beta$ 为 n 维实列向量, 证明: $\alpha^{\prime}A\alpha + \beta^{\prime}A^{-1}\beta \geq 2\alpha^{\prime}\beta$ , 且等号成立的充要条件是 $A\alpha = \beta$ .

证明 由例 8.26 可设 $A = C'C$ , 其中 $C$ 为非异实矩阵, 则 $A^{-1} = C^{-1}(C')^{-1}$ . 再设 $C\alpha = (a_1, a_2, \cdots, a_n)'$ , $(C')^{-1}\beta = (b_1, b_2, \cdots, b_n)'$ 为 $n$ 维实列向量, 则

$$
\begin{array}{l} \alpha^ {\prime} A \alpha + \beta^ {\prime} A ^ {- 1} \beta = \alpha^ {\prime} C ^ {\prime} C \alpha + \beta^ {\prime} C ^ {- 1} (C ^ {\prime}) ^ {- 1} \beta \\ = (C \alpha) ^ {\prime} (C \alpha) + ((C ^ {\prime}) ^ {- 1} \beta) ^ {\prime} ((C ^ {\prime}) ^ {- 1} \beta) \\ = \sum_ {i = 1} ^ {n} \left(a _ {i} ^ {2} + b _ {i} ^ {2}\right) \geq 2 \sum_ {i = 1} ^ {n} a _ {i} b _ {i} = 2 (\boldsymbol {C} \boldsymbol {\alpha}) ^ {\prime} \left(\left(\boldsymbol {C} ^ {\prime}\right) ^ {- 1} \boldsymbol {\beta}\right) = 2 \boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}, \\ \end{array}
$$

等号成立的充要条件是 $a_{i} = b_{i}(1\leq i\leq n)$ ，即 $\pmb {C}\pmb {\alpha} = (\pmb{C}^{\prime})^{-1}\beta$ ，也即 $\pmb {A}\pmb {\alpha} = \pmb {\beta}$ □

例 8.28 设 A 为 n 阶正定实对称矩阵, $\alpha, \beta$ 为 n 维实列向量, 证明: $(\alpha'\beta)^{2} \leq (\alpha'A\alpha)(\beta'A^{-1}\beta)$ , 且等号成立的充要条件是 $A\alpha$ 与 $\beta$ 成比例.

证明 由例 8.26 可设 $A = C'C$ , 其中 $C$ 为非异实矩阵, 则 $A^{-1} = C^{-1}(C')^{-1}$ . 再设 $C\alpha = (a_1, a_2, \cdots, a_n)'$ , $(C')^{-1}\beta = (b_1, b_2, \cdots, b_n)'$ 为 $n$ 维实列向量, 则由 Cauchy-Schwarz 不等式 (参考例 2.63) 可得

$$
\begin{array}{l} (\boldsymbol {\alpha} ^ {\prime} \boldsymbol {\beta}) ^ {2} = \left((\boldsymbol {C} \boldsymbol {\alpha}) ^ {\prime} ((\boldsymbol {C} ^ {\prime}) ^ {- 1} \boldsymbol {\beta})\right) ^ {2} = \left(\sum_ {i = 1} ^ {n} a _ {i} b _ {i}\right) ^ {2} \leq \left(\sum_ {i = 1} ^ {n} a _ {i} ^ {2}\right) \left(\sum_ {i = 1} ^ {n} b _ {i} ^ {2}\right) \\ = \left((C \alpha) ^ {\prime} (C \alpha)\right) \left(\left((C ^ {\prime}) ^ {- 1} \beta\right) ^ {\prime} \left((C ^ {\prime}) ^ {- 1} \beta\right)\right) = \left(\alpha^ {\prime} A \alpha\right) \left(\beta^ {\prime} A ^ {- 1} \beta\right), \\ \end{array}
$$

等号成立的充要条件是 $a_{i}$ 与 $b_{i}$ 对应成比例, 即 $\pmb{C}\alpha$ 与 $(\pmb{C}^{\prime})^{-1}\beta$ 成比例, 也即 $\pmb{A}\alpha$ 与 $\beta$ 成比例. □

正定 (半正定) 实对称矩阵的任一主子式都大于零 (大于等于零), 特别地, 正定 (半正定) 实对称矩阵的迹大于零 (大于等于零). 下面的例题给出了正定性 (半正定性) 关于迹的判定.

例 8.29 设 A 为 n 阶实对称矩阵, 证明:

(1) 若 $\pmb{A}$ 可逆, 则 $\pmb{A}$ 为正定阵的充要条件是对任意的 $n$ 阶正定实对称矩阵 $\pmb{B}$ , $\operatorname{tr}(\pmb{A}\pmb{B}) > 0$ ;

(2) $A$ 为半正定阵的充要条件是对任意的 $n$ 阶半正定实对称矩阵 $\pmb{B}, \mathrm{tr}(\pmb{A}\pmb{B}) \geq 0$ .

证明 (1) 先证必要性. 由例 8.26 可设 $A = C'C$ , 其中 $C$ 为非异实矩阵, 则由迹的交换性可得 $\operatorname{tr}(AB) = \operatorname{tr}(C'CB) = \operatorname{tr}(CBC')$ . 由 $B$ 的正定性可知 $CBC'$ 为正定阵, 故 $\operatorname{tr}(AB) = \operatorname{tr}(CBC') > 0$ .

再证充分性. 用反证法, 若可逆实对称矩阵 $\mathbf{A}$ 不正定, 则存在非异实矩阵 $\mathbf{C}$ , 使得 $\mathbf{A} = \mathbf{C}'\mathrm{diag}\{\mathbf{I}_p, -\mathbf{I}_q\} \mathbf{C}$ , 其中负惯性指数 $q > 0$ . 令 $\mathbf{B} = \mathbf{C}^{-1}\mathrm{diag}\{\mathbf{I}_p, c\mathbf{I}_q\} (\mathbf{C}^{-1})'$ , 其中正数 $c > p / q$ , 则 $\mathbf{B}$ 是正定实对称矩阵, 且

$$
\operatorname{tr} (\boldsymbol {A B}) = \operatorname{tr} \left(\boldsymbol {C} ^ {\prime} \operatorname{diag} \{\boldsymbol {I} _ {p}, - c \boldsymbol {I} _ {q} \} (\boldsymbol {C} ^ {\prime}) ^ {- 1}\right) = \operatorname{tr} (\operatorname{diag} \{\boldsymbol {I} _ {p}, - c \boldsymbol {I} _ {q} \}) = p - c q <   0,
$$

这与假设矛盾!

(2) 同理可证, 细节留给读者完成. □

例 8.30 设 A, B 都是 n 阶半正定实对称矩阵, 证明: AB = O 的充要条件是 $\mathrm{tr}(AB) = 0$ .

证明 必要性显然, 下证充分性. 由例 8.26 可设 $A = C'C$ , $B = DD'$ , 其中 $C, D$ 是 $n$ 阶实矩阵, 则由迹的交换性可得

$$
0 = \operatorname{tr} (\boldsymbol {A B}) = \operatorname{tr} \left(\boldsymbol {C} ^ {\prime} \boldsymbol {C D D} ^ {\prime}\right) = \operatorname{tr} \left(\boldsymbol {D} ^ {\prime} \boldsymbol {C} ^ {\prime} \boldsymbol {C D}\right) = \operatorname{tr} \left((\boldsymbol {C D}) ^ {\prime} (\boldsymbol {C D})\right),
$$

再由迹的正定性可知 $CD = O$ , 于是 $AB = C'(CD)D' = O$ . $\square$ 

## § 8.5 多变元二次型的计算

教材 [1] 介绍了配方法来化简二次型. 事实上, 我们可以根据具体情况选取合适的可逆线性变换来计算实二次型的合同不变量或标准型, 下面是几个典型的例题.

例 8.31 证明: 一个秩大于 1 的实二次型可以分解为两个实系数一次多项式之积的充要条件是它的秩等于 2, 且符号差等于零.

证明 先证必要性. 设秩大于 1 的实二次型

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = (a _ {1} x _ {1} + a _ {2} x _ {2} + \dots + a _ {n} x _ {n}) (b _ {1} x _ {1} + b _ {2} x _ {2} + \dots + b _ {n} x _ {n}),
$$

令

$$
y _ {1} = a _ {1} x _ {1} + a _ {2} x _ {2} + \dots + a _ {n} x _ {n}, \quad y _ {2} = b _ {1} x _ {1} + b _ {2} x _ {2} + \dots + b _ {n} x _ {n}.
$$

如果向量 $(a_{1},a_{2},\cdots,a_{n})$ 和 $(b_{1},b_{2},\cdots,b_{n})$ 线性相关，则它们的元素成比例，不妨假设 $(b_{1},b_{2},\cdots,b_{n})=k(a_{1},a_{2},\cdots,a_{n})$ ，于是 $f=ky_{1}^{2}$ ，这与f的秩大于1相矛盾。因此向量 $(a_{1},a_{2},\cdots,a_{n})$ 和 $(b_{1},b_{2},\cdots,b_{n})$ 线性无关。不妨设 $\begin{vmatrix}a_{1}&a_{2}\\b_{1}&b_{2}\end{vmatrix}\neq0$ ，定义可逆线性变换如下：

$$
\left\{ \begin{array}{l} y _ {1} = a _ {1} x _ {1} + a _ {2} x _ {2} + \dots + a _ {n} x _ {n}, \\ y _ {2} = b _ {1} x _ {1} + b _ {2} x _ {2} + \dots + b _ {n} x _ {n}, \\ y _ {i} = x _ {i} (3 \leq i \leq n), \end{array} \right.
$$

得到 $f = y_{1}y_{2}$ . 再令 $y_{1} = z_{1} + z_{2}, y_{2} = z_{1} - z_{2}, y_{i} = z_{i} (3 \leq i \leq n)$ , 可得 $f = z_{1}^{2} - z_{2}^{2}$ , 显然 $f$ 的秩为 2 且符号差为零.

再证充分性. 假设 $f = y_{1}^{2} - y_{2}^{2}$ , 显然有 $f = (y_{1} + y_{2})(y_{1} - y_{2})$ , 即 $f$ 可以分解为两个一次多项式之积. □

例 8.32 化下列实二次型为标准型:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = x _ {1} x _ {2} + x _ {2} x _ {3} + \dots + x _ {n - 1} x _ {n}.
$$

解令

$$
y _ {i} = \frac {1}{2} (x _ {i} + x _ {i + 1} + x _ {i + 2}), y _ {i + 1} = \frac {1}{2} (x _ {i} - x _ {i + 1} + x _ {i + 2}),
$$

则 $y_{i}^{2} - y_{i + 1}^{2} = x_{i}x_{i + 1} + x_{i + 1}x_{i + 2}$ 因此当 $n = 2k$ 时，令

$$
\left\{ \begin{array}{l} y _ {i} = \frac {1}{2} (x _ {i} + x _ {i + 1} + x _ {i + 2}) (i = 1, 3, \dots , n - 3), \\ y _ {i + 1} = \frac {1}{2} (x _ {i} - x _ {i + 1} + x _ {i + 2}) (i = 1, 3, \dots , n - 3), \\ y _ {n - 1} = \frac {1}{2} (x _ {n - 1} + x _ {n}), \quad y _ {n} = \frac {1}{2} (x _ {n - 1} - x _ {n}), \end{array} \right.
$$

得到

$$
f = y _ {1} ^ {2} - y _ {2} ^ {2} + y _ {3} ^ {2} - y _ {4} ^ {2} + \dots + y _ {n - 1} ^ {2} - y _ {n} ^ {2}.
$$

当 $n = 2k + 1$ 时，令

$$
\left\{ \begin{array}{l} y _ {i} = \frac {1}{2} (x _ {i} + x _ {i + 1} + x _ {i + 2}) (i = 1, 3, \dots , n - 2), \\ y _ {i + 1} = \frac {1}{2} (x _ {i} - x _ {i + 1} + x _ {i + 2}) (i = 1, 3, \dots , n - 2), \\ y _ {n} = x _ {n}, \end{array} \right.
$$

得到

$$
f = y _ {1} ^ {2} - y _ {2} ^ {2} + y _ {3} ^ {2} - y _ {4} ^ {2} + \dots + y _ {n - 2} ^ {2} - y _ {n - 1} ^ {2}. \square
$$

例 8.33 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + \sum_ {1 \leq i <   j \leq n} x _ {i} x _ {j}.
$$

解法 1 用教材 [1] 介绍的配方法可将原式化为

$$
\left(x _ {1} + \frac {1}{2} \sum_ {i = 2} ^ {n} x _ {i}\right) ^ {2} + \frac {3}{4} \left(x _ {2} + \frac {1}{3} \sum_ {i = 3} ^ {n} x _ {i}\right) ^ {2} + \dots + \frac {n}{2 n - 2} \left(x _ {n - 1} + \frac {1}{n} x _ {n}\right) ^ {2} + \frac {n + 1}{2 n} x _ {n} ^ {2}.
$$

解法 2 将原式配方为

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = \frac {1}{2} \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + \frac {1}{2} \left(\sum_ {i = 1} ^ {n} x _ {i}\right) ^ {2}.
$$

容易验证对不全为零的实数 $a_{1}, a_{2}, \cdots, a_{n}, f(a_{1}, a_{2}, \cdots, a_{n}) > 0$ ，于是 f 是正定型，从而其规范标准型为 $y_{1}^{2} + y_{2}^{2} + \cdots + y_{n}^{2}$ . □

例 8.34 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} (x _ {i} - s) ^ {2}, \quad s = \frac {1}{n} (x _ {1} + x _ {2} + \dots + x _ {n}).
$$

解 作线性变换: $y_{i} = x_{i} - s (1 \leq i \leq n - 1), y_{n} = x_{n}$ , 容易验证这是一个可逆线性变换且 $s = y_{1} + y_{2} + \dots + y_{n}$ . 由此可得

$$
f = y _ {1} ^ {2} + y _ {2} ^ {2} + \dots + y _ {n - 1} ^ {2} + (y _ {1} + y _ {2} + \dots + y _ {n - 1}) ^ {2},
$$

进一步可化为

$$
f = 2 \left(\sum_ {i = 1} ^ {n - 1} y _ {i} ^ {2} + \sum_ {1 \leq i <   j \leq n - 1} y _ {i} y _ {j}\right).
$$

再由例8.33即得

$$
f = 2 z _ {1} ^ {2} + \frac {3}{2} z _ {2} ^ {2} + \dots + \frac {n}{n - 1} z _ {n - 1} ^ {2}. \square
$$

例 8.35 化下列实二次型为标准型, 其中 $a_{i}$ 都是实数:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = \left(x _ {1} - a _ {1} x _ {2}\right) ^ {2} + \left(x _ {2} - a _ {2} x _ {3}\right) ^ {2} + \dots + \left(x _ {n - 1} - a _ {n - 1} x _ {n}\right) ^ {2} + \left(x _ {n} - a _ {n} x _ {1}\right) ^ {2}.
$$

解 令 $y_{i} = x_{i} - a_{i+1}x_{i+1} (1 \leq i \leq n-1)$ , 若 $a_{1}a_{2}\cdots a_{n} \neq 1$ , 则令 $y_{n} = x_{n} - a_{n}x_{1}$ ; 若 $a_{1}a_{2}\cdots a_{n} = 1$ , 则令 $y_{n} = x_{n}$ , 通过计算行列式容易验证上述坐标变换是可逆线性变换. 因此, 当 $a_{1}a_{2}\cdots a_{n} \neq 1$ 时, $f$ 的标准型为 $y_{1}^{2} + y_{2}^{2} + \cdots + y_{n}^{2}$ ; 当 $a_{1}a_{2}\cdots a_{n} = 1$ 时, $f = y_{1}^{2} + y_{2}^{2} + \cdots + y_{n-1}^{2} + a_{n}^{2}(y_{1} + a_{1}y_{2} + \cdots + a_{1}\cdots a_{n-2}y_{n-1})^{2}$ , 这是关于 $y_{1}, y_{2}, \cdots, y_{n-1}$ 的正定型 (与 $y_{n}$ 无关), 故 $f$ 的标准型为 $z_{1}^{2} + z_{2}^{2} + \cdots + z_{n-1}^{2}$ . □

例 8.36 设 $X = (x_{ij})_{n \times n}$ 是 n 阶矩阵变量, $f(X) = \operatorname{tr}(X^{2})$ 是关于未定元 $x_{ij} (1 \leq i, j \leq n)$ 的实二次型, 试求 f 的正负惯性指数.

解 经计算可得 $f = \sum_{i=1}^{n} x_{ii}^2 + 2 \sum_{1 \leq i < j \leq n} x_{ij} x_{ji}$ . 作如下可逆线性变换:

$$
\left\{ \begin{array}{l} x _ {i i} = y _ {i i} (1 \leq i \leq n), \\ x _ {i j} = \frac {1}{\sqrt {2}} (y _ {i j} + y _ {j i}), \quad x _ {j i} = \frac {1}{\sqrt {2}} (y _ {i j} - y _ {j i}) (1 \leq i <   j \leq n), \end{array} \right.
$$

可得 $f=\sum_{i=1}^{n}y_{ii}^{2}+\sum_{1\leq i<j\leq n}(y_{ij}^{2}-y_{ji}^{2})$ ，因此 f 的正惯性指数为 $\frac{1}{2}n(n+1)$ ，负惯性指数为 $\frac{1}{2}n(n-1)$ . □

注 由例3.48可知 $M_{n}(\mathbb{R}) = V_{1} \oplus V_{2}$ , 其中 $V_{1}$ 是 $n$ 阶实对称矩阵构成的子空间, $V_{2}$ 是 $n$ 阶实反对称矩阵构成的子空间. 对任意的 $\mathbf{X} \in V_{1}, \mathbf{Y} \in V_{2}$ , 我们有 $f(\mathbf{X}) = \operatorname{tr}(\mathbf{X}^{2}) = \operatorname{tr}(\mathbf{X}\mathbf{X}') \geq 0$ , 等号成立当且仅当 $\mathbf{X} = \mathbf{O}$ ; $f(\mathbf{Y}) = \operatorname{tr}(\mathbf{Y}^{2}) = -\operatorname{tr}(\mathbf{Y}\mathbf{Y}') \leq 0$ , 等号成立当且仅当 $\mathbf{Y} = \mathbf{O}$ ; $\operatorname{tr}(\mathbf{X}\mathbf{Y}) = \operatorname{tr}\left((\mathbf{X}\mathbf{Y})'\right) = \operatorname{tr}(\mathbf{Y}'\mathbf{X}') = -\operatorname{tr}(\mathbf{Y}\mathbf{X}) = -\operatorname{tr}(\mathbf{X}\mathbf{Y})$ , 即有 $\operatorname{tr}(\mathbf{X}\mathbf{Y}) = \operatorname{tr}(\mathbf{Y}\mathbf{X}) = 0$ , 因此

$$
\begin{array}{l} f (\boldsymbol {X} + \boldsymbol {Y}) = \operatorname{tr} \left((\boldsymbol {X} + \boldsymbol {Y}) ^ {2}\right) = \operatorname{tr} \left(\boldsymbol {X} ^ {2}\right) + \operatorname{tr} (\boldsymbol {X Y}) + \operatorname{tr} (\boldsymbol {Y X}) + \operatorname{tr} (\boldsymbol {Y} ^ {2}) \\ = \operatorname{tr} \left(\boldsymbol {X} \boldsymbol {X} ^ {\prime}\right) - \operatorname{tr} \left(\boldsymbol {Y} \boldsymbol {Y} ^ {\prime}\right). \\ \end{array}
$$

因为 $\dim V_{1}=\frac{1}{2}n(n+1)$ , $\dim V_{2}=\frac{1}{2}n(n-1)$ , 故上述等式给出例 8.36 的几何解释.

下面的例子告诉我们: 如果坐标变换不一定是可逆线性变换, 那么实二次型的正负惯性指数会相应地变小或相等.

例8.37 设实二次型

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = y _ {1} ^ {2} + \dots + y _ {k} ^ {2} - y _ {k + 1} ^ {2} - \dots - y _ {k + s} ^ {2},
$$

其中 $y_{i}=a_{i1}x_{1}+a_{i2}x_{2}+\cdots+a_{in}x_{n}(1\leq i\leq k+s)$ ，求证：f 的正惯性指数 $p\leq k$ ，负惯性指数 $q\leq s$ .

证明 假设经过可逆线性变换 x = Cz 后 f 变为规范标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = z _ {1} ^ {2} + \dots + z _ {p} ^ {2} - z _ {p + 1} ^ {2} - \dots - z _ {p + q} ^ {2}.
$$

于是有

$$
y _ {1} ^ {2} + \dots + y _ {k} ^ {2} - y _ {k + 1} ^ {2} - \dots - y _ {k + s} ^ {2} = z _ {1} ^ {2} + \dots + z _ {p} ^ {2} - z _ {p + 1} ^ {2} - \dots - z _ {p + q} ^ {2}. \tag {8.3}
$$

若 p > k，作线性方程组

$$
\left\{ \begin{array}{l} y _ {i} = 0 (1 \leq i \leq k), \\ z _ {j} = 0 (p + 1 \leq j \leq n), \end{array} \right.
$$

这是一个未知数个数 (以 $x_{1}, x_{2}, \cdots, x_{n}$ 为未知数) 超过方程式个数 $(n - (p - k))$ 的齐次线性方程组, 故必有非零解 $\pmb{x} = \pmb{\alpha}$ . 将 $\pmb{x} = \pmb{\alpha}$ 代入 (8.3) 式, 其左边小于等于零, 而其右边大于等于零, 于是只能等于零. 又从 $z_{1}^{2} + \dots + z_{p}^{2} = 0$ 推出 $z_{1} = \dots = z_{p} = 0$ , 这表明 $\pmb{\alpha} = Cz = 0$ , 这与 $\pmb{\alpha}$ 非零相矛盾, 因此 $p \leq k$ . 同理可证 $q \leq s$ . □

例 8.38 设 A 为 m 阶实对称矩阵, C 为 $m \times n$ 实矩阵, 证明: $C'AC$ 的正惯性指数小于等于 A 的正惯性指数; $C'AC$ 的负惯性指数小于等于 A 的负惯性指数.

证明 由于正负惯性指数是合同不变量, 故不妨假设 $A = \mathrm{diag}\{I_k, -I_s, O\}$ 是合同标准型, 其中 $k, s$ 分别是 $\pmb{A}$ 的正负惯性指数. 设 $\pmb{x} = (x_1, x_2, \cdots, x_n)'$ , $f(\pmb{x}) = \pmb{x}'\pmb{C}'\pmb{AC}\pmb{x}$ 是相伴于 $\pmb{C}'\pmb{AC}$ 的二次型, $\pmb{C} = (a_{ij})_{m \times n}$ , $\pmb{y} = (y_1, y_2, \cdots, y_m)' = \pmb{C}\pmb{x}$ , 即 $y_i = a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n (1 \leq i \leq m)$ , 则

$$
f (\boldsymbol {x}) = (\boldsymbol {C x}) ^ {\prime} \boldsymbol {A} (\boldsymbol {C x}) = \boldsymbol {y} ^ {\prime} \boldsymbol {A} \boldsymbol {y} = y _ {1} ^ {2} + \dots + y _ {k} ^ {2} - y _ {k + 1} ^ {2} - \dots - y _ {k + s} ^ {2}.
$$

由例 8.37 可知, $f(x)$ 的正惯性指数 $p \leq k$ , 负惯性指数 $q \leq s$ , 结论得证. □

例 8.39 设 A, B 为 n 阶实对称矩阵，并用 $p(A)$ , $q(A)$ 分别表示 A 的正负惯性指数。求证： $p(A + B) \leq p(A) + p(B)$ , $q(A + B) \leq q(A) + q(B)$ .

证明 考虑如下分块矩阵的乘积:

$$
\left( \begin{array}{c c} I _ {n} & I _ {n} \end{array} \right) \left( \begin{array}{c c} A & O \\ O & B \end{array} \right) \binom{I _ {n}}{I _ {n}} = A + B,
$$

由例 8.6 和例 8.38 可得 $p(\boldsymbol{A} + \boldsymbol{B}) \leq p\begin{pmatrix}\boldsymbol{A} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B}\end{pmatrix} = p(\boldsymbol{A}) + p(\boldsymbol{B}), q(\boldsymbol{A} + \boldsymbol{B}) \leq q\begin{pmatrix}\boldsymbol{A} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{B}\end{pmatrix} = q(\boldsymbol{A}) + q(\boldsymbol{B}).$ □

## § 8.6 矩阵与二次型

二次型 (Hermite 型) 与对称矩阵 (Hermite 矩阵) 之间有着一一对应的关系, 这种关系既可以使我们用矩阵方法来讨论二次型 (Hermite 型) 问题, 也可以用二次型 (Hermite 型) 方法来讨论矩阵问题. 这是二次型 (Hermite 型) 理论与矩阵理论中最常用的方法之一.

### 1. 用矩阵方法来讨论二次型问题

例 8.40 设 A 是 n 阶正定实对称矩阵, 求证: 函数 $f(x) = x'Ax + 2\beta'x + c$ 的极小值等于 $c - \beta'A^{-1}\beta$ , 其中 $\beta = (b_{1}, \cdots, b_{n})'$ , $b_{i}$ 和 c 都是实数.

证明 注意到

$$
f (\boldsymbol {x}) = (x ^ {\prime} 1) \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {\beta} \\ \boldsymbol {\beta} ^ {\prime} & c \end{array} \right) \binom{\boldsymbol {x}}{1},
$$

因为 A 可逆, 故可作如下对称分块初等变换:

$$
\left( \begin{array}{c c} I _ {n} & O \\ - \beta^ {\prime} A ^ {- 1} & 1 \end{array} \right) \left( \begin{array}{c c} A & \beta \\ \beta^ {\prime} & c \end{array} \right) \left( \begin{array}{c c} I _ {n} & - A ^ {- 1} \beta \\ O & 1 \end{array} \right) = \left( \begin{array}{c c} A & O \\ O & c - \beta^ {\prime} A ^ {- 1} \beta \end{array} \right).
$$

由 $\begin{pmatrix}x\\1\end{pmatrix}=\begin{pmatrix}I_{n}&-A^{-1}\beta\\O&1\end{pmatrix}\begin{pmatrix}y\\1\end{pmatrix}$ 可解出 $y=x+A^{-1}\beta,$ 于是

$$
f (\boldsymbol {x}) = \left(\boldsymbol {y} ^ {\prime} 1\right) \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {O} \\ \boldsymbol {O} & c - \beta^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {\beta} \end{array} \right) \binom{\boldsymbol {y}}{1} = \boldsymbol {y} ^ {\prime} \boldsymbol {A} \boldsymbol {y} + c - \beta^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {\beta} \geq c - \beta^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {\beta}.
$$

因此, 当 $x = -A^{-1}\beta$ 时, $f(x)$ 取到极小值 $c - \beta'A^{-1}\beta$ . □

例 8.32 化下列实二次型为标准型:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = x _ {1} x _ {2} + x _ {2} x _ {3} + \dots + x _ {n - 1} x _ {n}.
$$

解法 2 为了方便起见, 不妨考虑 $2f(x_{1}, x_{2}, \cdots, x_{n})$ 的系数矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & & & \\ 1 & 0 & 1 & & \\ & 1 & \ddots & \ddots & \\ & & \ddots & \ddots & 1 \\ & & & 1 & 0 \end{array} \right).
$$

记 $S_{n} = A (n \geq 2)$ , $S_{1}$ 为一阶零矩阵, $C$ 为 $2 \times (n - 2)$ 矩阵, 其中第 (2,1) 元素为 1, 其他元素为 0. 对 $S_{n}$ 进行如下分块, 并利用非异阵 $S_{2}$ 对称地消去同行同列的矩阵 $C, C'$ , 经计算可知 $C'S_{2}^{-1}C = C'S_{2}C = O$ , 故 $S_{n}$ 合同于下列分块对角矩阵:

$$
\boldsymbol {S} _ {n} = \left(\begin{array}{c c}\boldsymbol {S} _ {2}&\boldsymbol {C}\\\boldsymbol {C} ^ {\prime}&\boldsymbol {S} _ {n - 2}\end{array}\right)\rightarrow \left(\begin{array}{c c}\boldsymbol {S} _ {2}&\boldsymbol {O}\\\boldsymbol {O}&\boldsymbol {S} _ {n - 2} - \boldsymbol {C} ^ {\prime} \boldsymbol {S} _ {2} ^ {- 1} \boldsymbol {C}\end{array}\right)\rightarrow \left(\begin{array}{c c}\boldsymbol {S} _ {2}&\boldsymbol {O}\\\boldsymbol {O}&\boldsymbol {S} _ {n - 2}\end{array}\right).
$$

因此, 当 $n = 2k$ 时, $\pmb{A}$ 合同于 $\mathrm{diag}\{\pmb{S}_2, \dots, \pmb{S}_2\}$ , 其中有 $k$ 个 $\pmb{S}_2$ ; 当 $n = 2k + 1$ 时, $\pmb{A}$ 合同于 $\mathrm{diag}\{\pmb{S}_2, \dots, \pmb{S}_2, \pmb{S}_1\}$ , 其中有 $k$ 个 $\pmb{S}_2$ . 注意到 $\pmb{S}_2$ 合同于 $\mathrm{diag}\{1, -1\}$ , 故当 $n = 2k$ 时, $f$ 的规范标准型为 $y_1^2 - y_2^2 + \dots + y_{n-1}^2 - y_n^2$ ; 当 $n = 2k + 1$ 时, $f$ 的规范标准型为 $y_1^2 - y_2^2 + \dots + y_{n-2}^2 - y_{n-1}^2$ . □

例 8.33 化下列实二次型为标准型:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + \sum_ {1 \leq i <   j \leq n} x _ {i} x _ {j}.
$$

解法 3 为了方便起见, 不妨考虑 $2f(x_{1}, x_{2}, \cdots, x_{n})$ 的系数矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 2 & 1 & 1 & \dots & 1 \\ 1 & 2 & 1 & \dots & 1 \\ 1 & 1 & 2 & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 2 \end{array} \right).
$$

注意到 A 的第 k 个顺序主子式 $\left|A_{k}\right|$ 的每行元素之和都为 $k+1$ ，故用求和法可求出 $\left|A_{k}\right|=k+1(1\leq k\leq n)$ ，于是 A 为正定阵。因此 $f(x_{1},x_{2},\cdots,x_{n})$ 为正定型，其规范标准型为 $y_{1}^{2}+y_{2}^{2}+\cdots+y_{n}^{2}$ 。☐

例8.41 设实二次型

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {k} (a _ {i 1} x _ {1} + a _ {i 2} x _ {2} + \dots + a _ {i n} x _ {n}) ^ {2},
$$

其中 $a_{ij}$ 都是实数, 求证 $f$ 是半正定型且 $f$ 的秩等于下列矩阵的秩:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {k 1} & a _ {k 2} & \dots & a _ {k n} \end{array} \right).
$$

证明 $f$ 的半正定性由定义即得. 注意到 $f(x) = (Ax)'(Ax) = x'(A'A)x$ , 故 $f$ 的相伴矩阵为 $A'A$ , 于是由例3.76可知, $\mathrm{r}(f) = \mathrm{r}(A'A) = \mathrm{r}(A)$ . $\square$ 

例 8.34 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} (x _ {i} - s) ^ {2}, \quad s = \frac {1}{n} (x _ {1} + x _ {2} + \dots + x _ {n}).
$$

解法2 令 $y_{i} = x_{i} - s(1\leq i\leq n)$ ，用矩阵表示就是 $\pmb {y} = \pmb {A}\pmb{x}$ ，其中

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} \frac {n - 1}{n} & \frac {1}{n} & \dots & \frac {1}{n} \\ - \frac {1}{n} & \frac {n - 1}{n} & \dots & - \frac {1}{n} \\ \vdots & \vdots & & \vdots \\ - \frac {1}{n} & - \frac {1}{n} & \dots & \frac {n - 1}{n} \end{array} \right).
$$

注意到 A 的第 k 个顺序主子式 $\left|A_{k}\right|$ 的每行元素之和都为 $(n-k)/n$ ，故用求和法可求出 $\left|A_{k}\right|=(n-k)/n(1\leq k\leq n)$ ，因此 A 的秩等于 n-1。由例 8.41 可知 $\mathrm{r}(f)=\mathrm{r}(A)=n-1$ ，于是半正定型 f 的正惯性指数等于 n-1，其规范标准型为 $z_{1}^{2}+z_{2}^{2}+\cdots+z_{n-1}^{2}$ 。☐

例 8.35 化下列实二次型为标准型, 其中 $a_{i}$ 都是实数:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = (x _ {1} - a _ {1} x _ {2}) ^ {2} + (x _ {2} - a _ {2} x _ {3}) ^ {2} + \dots + (x _ {n - 1} - a _ {n - 1} x _ {n}) ^ {2} + (x _ {n} - a _ {n} x _ {1}) ^ {2}.
$$

解法2 令 $y_{i} = x_{i} - a_{i}x_{i + 1}(1\leq i\leq n - 1),y_{n} = x_{n} - a_{n}x_{1}$ ，用矩阵表示就是 $\pmb {y} = \pmb {A}\pmb{x}$ ，其中

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} 1 & - a _ {1} & & & & \\ & 1 & - a _ {2} & & & \\ & & 1 & \ddots & & \\ & & & \ddots & - a _ {n - 1} \\ - a _ {n} & & & & 1 \end{array} \right).
$$

经计算可知 $\left|A\right|=1-a_{1}a_{2}\cdots a_{n}$ 并且 A 的左上角的 n-1 阶子式等于 1，于是由例 8.41 可知，当 $a_{1}a_{2}\cdots a_{n}=1$ 时， $\mathrm{r}(f)=\mathrm{r}(A)=n-1$ ，f 的规范标准型为 $z_{1}^{2}+z_{2}^{2}+\cdots+z_{n-1}^{2}$ ；当 $a_{1}a_{2}\cdots a_{n}\neq1$ 时， $\mathrm{r}(f)=\mathrm{r}(A)=n$ ，f 的规范标准型为 $z_{1}^{2}+z_{2}^{2}+\cdots+z_{n}^{2}$ 。☐

例 8.13 给出了通过计算二次型系数矩阵的顺序主子式来求标准型的方法, 我们来看下面的例题.

例 8.42 求下列实二次型的标准型:

(1) $f(x_{1},x_{2},\cdots,x_{n})=\sum_{i,j=1}^{n}\max\{i,j\}x_{i}x_{j};$ 

(2) $f(x_{1},x_{2},\cdots,x_{n})=\sum_{i,j=1}^{n}|i-j|x_{i}x_{j}.$ 

解 (1) $f$ 的系数矩阵是 $\mathbf{A} = (a_{ij})$ , 其中 $a_{ij} = \max \{i, j\}$ . 由第 1 章解答题 13 可知, $\mathbf{A}$ 的第 $k$ 个顺序主子式 $|\mathbf{A}_k| = (-1)^{k-1} k (1 \leq k \leq n)$ , 再由例 8.13 可知, $f$ 的规范标准型为 $y_1^2 - y_2^2 - \cdots - y_n^2$ .

(2) $f$ 的系数矩阵是 $\mathbf{A} = (a_{ij})$ , 其中 $a_{ij} = |i - j|$ . 由于 $a_{11} = 0$ , 故先做对称初等变换: 将 $\mathbf{A}$ 的第二行加到第一行上, 再将第二列加到第一列上, 得到的矩阵记为 $\mathbf{B} = (b_{ij})$ , 其中 $b_{11} = 2$ , 即 $|\mathbf{B}_1| = 2$ . 由于第三类初等变换不改变行列式的值, 故由第 1 章解答题 14 可知, $\mathbf{B}$ 的第 $k$ 个顺序主子式 $|\mathbf{B}_k| = (-1)^{k-1}(k-1)2^{k-2} (2 \leq k \leq n)$ , 再由例 8.13 可知, $f$ 的规范标准型为 $y_1^2 - y_2^2 - \cdots - y_n^2$ . $\square$ 

### 2. 用二次型方法来讨论矩阵问题

例 8.43 设 $A = (a_{ij})$ , $B = (b_{ij})$ 都是 n 阶正定实对称矩阵, 求证: A, B 的 Hadamard 乘积 $H = A \circ B = (a_{ij} b_{ij})$ 也是正定阵.

证明 因为 B 是正定阵, 故由例 8.26 可知, 存在可逆实矩阵 C, 使得 $B = C'C$ .
设 $C = (c_{ij})$ ，则 $b_{ij} = \sum_{k=1}^{n} c_{ki} c_{kj}$ . 作二次型

$$
\begin{array}{l} f (\boldsymbol {x}) = \boldsymbol {x} ^ {\prime} \boldsymbol {H} \boldsymbol {x} = \sum_ {i, j = 1} ^ {n} a _ {i j} b _ {i j} x _ {i} x _ {j} = \sum_ {i, j = 1} ^ {n} \left(\sum_ {k = 1} ^ {n} a _ {i j} (c _ {k i} c _ {k j}) x _ {i} x _ {j}\right) \\ = \sum_ {k = 1} ^ {n} \left(\sum_ {i, j = 1} ^ {n} a _ {i j} \left(c _ {k i} x _ {i}\right) \left(c _ {k j} x _ {j}\right)\right) = \sum_ {k = 1} ^ {n} \mathbf {y} _ {k} ^ {\prime} \mathbf {A} \mathbf {y} _ {k}, \\ \end{array}
$$

其中 $\boldsymbol{y}_{k}=(c_{k1}x_{1},c_{k2}x_{2},\cdots,c_{kn}x_{n})'$ . 因为 C 可逆, 所以当 $x\neq0$ 时, 至少有一个 $y_{k}\neq0$ , 因此由 A 的正定性可得 $f(x)>0$ , 于是 f 是正定型, 从而 H 是正定阵. □

例 8.44 设 A 是 n 阶可逆实对称矩阵, S 是 n 阶实反对称矩阵且 AS = SA, 求证: $A + S$ 是可逆矩阵.

证法1 对任一 $n$ 维非零实列向量 $\alpha$ , 我们有

$$
\begin{array}{l} \alpha^ {\prime} (A + S) ^ {\prime} (A + S) \alpha = \alpha^ {\prime} (A ^ {\prime} A + A ^ {\prime} S + S ^ {\prime} A + S ^ {\prime} S) \alpha \\ = \alpha^ {\prime} (A ^ {\prime} A) \alpha + \alpha^ {\prime} (A ^ {\prime} S + S ^ {\prime} A) \alpha + \alpha^ {\prime} (S ^ {\prime} S) \alpha . \\ \end{array}
$$

由于 $A^{\prime}S + S^{\prime}A = AS - SA = O$ , 故上式等于 $\alpha'(A'A)\alpha + \alpha'(S'S)\alpha$ . 由例8.26可知, $A^{\prime}A$ 是正定阵, $S^{\prime}S$ 是半正定阵, 所以上式总大于零, 即 $(A + S)'(A + S)$ 是正定阵, 于是 $|A + S|^2 > 0$ , 从而 $A + S$ 是可逆矩阵.

证法2 由于 $A + S = A(I_n + A^{-1}S)$ , 故只要证明 $I_n + A^{-1}S$ 可逆即可. 由 $AS = SA$ 可知 $A^{-1}S = SA^{-1}$ , 于是

$$
(A ^ {- 1} S) ^ {\prime} = S ^ {\prime} (A ^ {- 1}) ^ {\prime} = S ^ {\prime} (A ^ {\prime}) ^ {- 1} = - S A ^ {- 1} = - A ^ {- 1} S,
$$

即 $A^{-1}S$ 是实反对称矩阵, 最后由例 3.82 即得结论. □

## § 8.7 正定型与正定阵

正定型与正定阵是本章最重要的内容之一, 它们的判定及其应用也是高等代数中的难点之一. 另外, 读者还可以在一些后续专业课程中看到正定型与正定阵的诸多应用. 首先, 我们将正定阵 (正定型类似) 相关的判定准则列举如下.

设 A 是 n 阶实对称矩阵, 则 A 是正定阵的充要条件是以下条件之一:

(1) A 合同于单位矩阵 $I_{n}$ (参考 §§ 8.1.3 定理 4);

(2) 存在非异实矩阵 C, 使得 $A = C'C$ (参考例 8.26 (1));

(3) A 的 n 个顺序主子式全大于零 (参考 §§ 8.1.3 定理 5);

(4) A 的所有主子式全大于零 (参考例 8.4);

(5) A 的所有特征值全大于零 (参考 § 9.7 的第 2 部分).

我们先来看判定准则 (1) 的一个重要应用.

例 8.45 设 A 是 n 阶正定实对称矩阵, S 是 n 阶实反对称矩阵, 求证:

(1) $|A+S|\geq|A|+|S|$ ，且等号成立当且仅当 $n\leq2$ 或当 $n\geq3$ 时，S=O.

(2) $|A+S|\geq|A|$ ，且等号成立当且仅当S=O.

证明 设 C 为非异实矩阵, 使得 $C'AC = I_{n}$ . 注意到问题的条件和结论在同时合同变换 $A \mapsto C'AC, S \mapsto C'SC$ 下不改变, 故不妨从一开始就假设 $A = I_{n}$ 为合同标准型, 从而由例 8.18 即得结论. □

例 8.27、例 8.28 和例 8.29 都是判定准则 (2) 的应用, 下面我们再来看两个例题.

例 8.46 设 A, B 都是 n 阶正定实对称矩阵, c 是正实数, 求证:

(1) $A^{-1}, A^{*}, A + B, cA$ 都是正定阵;

(2) 若 D 是非异实矩阵, 则 $D^{\prime}AD$ 是正定阵;

(3) 若 A - B 是正定阵, 则 $B^{-1} - A^{-1}$ 也是正定阵.

证明 (1) 由已知存在非异实矩阵 $C$ , 使得 $A = C' C$ , 从而 $A^{-1} = (C'C)^{-1} = C^{-1}(C')^{-1} = C^{-1}(C^{-1})'$ , 故 $A^{-1}$ 是正定阵. 又 $A^{*} = (C'C)^{*} = C^{*}(C')^{*} = C^{*}(C^{*})'$ , 故 $A^{*}$ 是正定阵. 对任一非零实列向量 $\alpha, \alpha'(A + B)\alpha = \alpha'A\alpha + \alpha'B\alpha > 0$ , 从而 $A + B$ 是正定阵. 注意到, 若 $A$ 是正定阵, 即使 $B$ 只是半正定阵, 通过上述方法也能推出 $A + B$ 是正定阵. 同理可证 $cA$ 也是正定阵.

(2) 由 (1) 相同的记号可得 $D'AD = D'C'CD = (CD)'(CD)$ , 因为 $CD$ 是可逆矩阵, 故 $D'AD$ 是正定阵.

(3) 由例 2.26 可知 $B^{-1} - A^{-1} = (B + B(A - B)^{-1}B)^{-1}$ , 再由 (1) 和 (2) 即得 $B^{-1} - A^{-1}$ 是正定阵. $\square$ 

例 8.47 设 A 为 n 阶正定实对称矩阵, n 维实列向量 $\alpha, \beta$ 满足 $\alpha' \beta > 0$ , 求证: $H = A - \frac{A \beta \beta' A}{\beta' A \beta} + \frac{\alpha \alpha'}{\alpha' \beta}$ 是正定阵.

证明 根据定义只要证明对任一实列向量 x，均有 $x^{\prime}Hx \geq 0$ ，且等号成立当且仅当 x = 0 即可。一方面，由 $\alpha^{\prime}\beta > 0$ 可知， $\frac{x^{\prime}(\alpha\alpha^{\prime})x}{\alpha^{\prime}\beta} = \frac{(\alpha^{\prime}x)^{2}}{\alpha^{\prime}\beta} \geq 0$ ，等号成立当且仅当 $\alpha^{\prime}x = 0$ 。另一方面，由 A 正定可知，存在非异实矩阵 C，使得 $A = C^{\prime}C$ 。设 $C\beta = (b_{1}, b_{2}, \cdots, b_{n})^{\prime}$ ， $Cx = (x_{1}, x_{2}, \cdots, x_{n})^{\prime}$ ，则由 Cauchy-Schwarz 不等式可知

$$
\boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {x} - \frac {\boldsymbol {x} ^ {\prime} \boldsymbol {A} \beta \beta^ {\prime} \boldsymbol {A} \boldsymbol {x}}{\beta^ {\prime} \boldsymbol {A} \beta} = (\boldsymbol {C x}) ^ {\prime} (\boldsymbol {C x}) - \frac {(\boldsymbol {C x}) ^ {\prime} (\boldsymbol {C} \beta) (\boldsymbol {C} \beta) ^ {\prime} (\boldsymbol {C x})}{(\boldsymbol {C} \beta) ^ {\prime} (\boldsymbol {C} \beta)}
$$

$$
= \left(\sum_ {i = 1} ^ {n} b _ {i} ^ {2}\right) ^ {- 1} \left(\left(\sum_ {i = 1} ^ {n} b _ {i} ^ {2}\right) \left(\sum_ {i = 1} ^ {n} x _ {i} ^ {2}\right) - \left(\sum_ {i = 1} ^ {n} b _ {i} x _ {i}\right) ^ {2}\right) \geq 0,
$$

等号成立当且仅当 $b_{i}$ 与 $x_{i}$ 成比例, 即存在实数 $k$ , 使得 $\pmb{C}\pmb{x} = k\pmb{C}\pmb{\beta}$ , 即 $\pmb{x} = k\pmb{\beta}$ . 由上述计算可得 $\pmb{x}'\pmb{H}\pmb{x} \geq 0$ , 且等号成立当且仅当 $\alpha' \pmb{x} = 0$ 且 $\pmb{x} = k\pmb{\beta}$ , 再由 $\alpha'\beta > 0$ 可得 $k = 0$ , 从而 $\pmb{x} = \mathbf{0}$ , 结论得证. □

通过计算实对称矩阵 $\mathbf{A}$ 的顺序主子式来判定其正定性, 判定准则 (3) 无论是从计算的层面看, 还是从证明的层面看, 都是一个行之有效的方法. 我们来看几个典型的例题.

例 8.48 求证: 下列 n 阶实对称矩阵 $A = (a_{ij})$ 都是正定阵, 其中

(1) $a_{ij} = \frac{1}{i + j};$ 

(2) $a_{ij} = \frac{1}{i + j - 1}$ . 

证明 (1) 注意到 $\mathbf{A}$ 的 $n$ 个顺序主子式都是具有相同形状的 Cauchy 行列式, 故要证明它们全大于零, 只要证明 $\mathbf{A}$ 的行列式大于零即可. 在例 1.18 中, 令 $a_{i} = b_{i} = i (1 \leq i \leq n)$ , 可得 $|\mathbf{A}| = \frac{1 \leq i < j \leq n}{\prod_{i,j=1}^{n} (i + j)} > 0$ , 因此 $\mathbf{A}$ 为正定阵.

(2) 同理在例 1.18 中, 令 $a_{i} = b_{i} = i - \frac{1}{2} (1 \leq i \leq n)$ , 可得 $|\mathbf{A}| = \frac{\prod\limits_{1 \leq i < j \leq n} (j - i)^{2}}{\prod\limits_{i,j=1}^{n} (i + j - 1)} > 0$ , 因此 $\mathbf{A}$ 为正定阵. $\square$ 

例 8.49 设 A 是 n 阶实对称矩阵, 求证: 若 A 是主对角元全大于零的严格对角占优阵, 则 A 是正定阵.

证明 注意到 A 的 n 个顺序主子阵仍然是主对角元全大于零的严格对角占优阵, 故要证明 A 的 n 个顺序主子式全大于零, 只要证明 A 的行列式大于零即可, 而这由例 3.83 即得, 因此 A 是正定阵. □

例 8.50 设 A 是 n 阶实对称矩阵, 求证: 必存在正实数 k, 使得对任一 n 维实列向量 $\alpha$ , 总有

$$
- k \alpha^ {\prime} \alpha \leq \alpha^ {\prime} A \alpha \leq k \alpha^ {\prime} \alpha .
$$

证明 设 $A = (a_{ij})$ ，我们总可以取到充分大的正实数 $k$ ，使得

$$
k \pm a _ {i i} > \sum_ {j = 1, j \neq i} ^ {n} | a _ {i j} |, 1 \leq i \leq n,
$$

即 $kI_{n} \pm A$ 是主对角元全大于零的严格对角占优阵, 由例8.49可得 $kI_{n} \pm A$ 为正定阵, 从而对任一 $n$ 维实列向量 $\alpha$ , 总有 $\alpha'(kI_{n} \pm A)\alpha \geq 0$ , 从而结论得证. $\square$ 

例 8.51 设 $\alpha, \beta$ 为 n 维非零实列向量, 求证: $\alpha' \beta > 0$ 成立的充要条件是存在 n 阶正定实对称矩阵 A, 使得 $\alpha = A\beta$ .

证明 先证充分性. 若存在 $n$ 阶正定实对称矩阵 $\mathbf{A}$ , 使得 $\alpha = A\beta$ , 则 $\alpha' \beta = (A\beta)' \beta = \beta' A\beta > 0$ . 下面用两种方法来证明必要性.

证法 1 注意到问题的条件和结论在矩阵变换 $A \mapsto C'AC$ , $\alpha \mapsto C'\alpha$ , $\beta \mapsto C^{-1}\beta$ 下不改变, 故不妨从一开始就假设 $\beta = e_n = (0, \cdots, 0, 1)'$ (这等价于将原来的 $\beta$ 放在非异阵 $C$ 的最后一列), $\alpha = (a_1, \cdots, a_{n-1}, a_n)'$ , 则 $\alpha'\beta > 0$ 等价于 $a_n > 0$ . 设 $A = \begin{pmatrix} tI_{n-1} & \alpha_{n-1} \\ \alpha'_{n-1} & a_n \end{pmatrix}$ , 其中 $\alpha_{n-1} = (a_1, \cdots, a_{n-1})'$ 且 $t \gg 0$ , 则由行列式的降阶公式可得

$$
\left| \boldsymbol {A} \right| = \left| t \boldsymbol {I} _ {n - 1} \right| \left(a _ {n} - \boldsymbol {\alpha} _ {n - 1} ^ {\prime} (t \boldsymbol {I} _ {n - 1}) ^ {- 1} \boldsymbol {\alpha} _ {n - 1}\right) = t ^ {n - 2} (a _ {n} t - a _ {1} ^ {2} - \dots - a _ {n - 1} ^ {2}) > 0.
$$

又 A 的前 n-1 个顺序主子式都大于零, 故 A 为正定阵且满足 $\alpha = A e_{n} = A \beta$ .

证法 2 设 $A = I_{n} - \frac{\beta\beta'}{\beta'\beta} + \frac{\alpha\alpha'}{\alpha'\beta}$ ，则由例 8.47 可知 A 为正定阵。不难验证 $A\beta = \alpha$ 成立，故结论得证。☐

用线性方程组的求解理论来证明关于正定阵的某些命题是一个常见的技巧, 我们来看下面两个典型的例题.

例 8.52 设 A, B 是 n 阶实矩阵, 使得 $A'B' + BA$ 是正定阵, 求证: A, B 都是非异阵.

证明 用反证法证明. 若 A 为奇异阵, 则存在非零实列向量 $\alpha$ , 使得 $A\alpha = 0$ .
将正定阵 $A^{\prime}B^{\prime} + BA$ 左乘 $\alpha^{\prime}$ ，右乘 $\alpha$ 可得

$$
0 <   \alpha^ {\prime} (A ^ {\prime} B ^ {\prime} + B A) \alpha = (A \alpha) ^ {\prime} (B ^ {\prime} \alpha) + (B ^ {\prime} \alpha) ^ {\prime} (A \alpha) = 0,
$$

这就导出了矛盾. 同理可证 B 也是非异阵. □

若 A 是正定实对称矩阵, 则 A 合同于单位矩阵 $I_{n}$ , 即存在非异实矩阵 C, 使得 $A = C'I_{n}C$ . 因为 C 是实矩阵, 故可把上式中的 $C'$ 改写成 $\overline{C}'$ , 从而 A 复相合于 $I_{n}$ , 于是 A 也是正定 Hermite 矩阵. 因此在处理实矩阵问题的过程中, 如果遇到了复特征值和复特征向量, 那么可以自然地把正定实对称矩阵看成是一种特殊的正定 Hermite 矩阵, 从而其正定性可延拓到复数域上. 下面是一个典型的例题.

例 8.53 设 A, B, C 都是 n 阶正定实对称矩阵, $g(t) = |t^{2}A + tB + C|$ 是关于 t 的多项式, 求证: $g(t)$ 所有复根的实部都小于零.

证明 任取 $g(t)$ 的一个复根 $t_0$ , 则 $\left|t_0^2 A + t_0 B + C\right| = 0$ , 故存在非零复列向量 $\alpha$ , 使得 $(t_0^2 A + t_0 B + C)\alpha = 0$ . 将上述等式左乘 $\overline{\alpha}'$ , 可得

$$
(\overline {{{{\alpha}}}} ^ {\prime} A \alpha) t _ {0} ^ {2} + (\overline {{{{\alpha}}}} ^ {\prime} B \alpha) t _ {0} + (\overline {{{{\alpha}}}} ^ {\prime} C \alpha) = 0.
$$

注意到 A, B, C 也是正定 Hermite 矩阵，故 $a = \overline{\alpha}' A \alpha > 0, b = \overline{\alpha}' B \alpha > 0, c = \overline{\alpha}' C \alpha > 0,$ 并且 $t_{0}$ 是二次方程 $at^{2} + bt + c = 0$ 的根。若 $t_{0}$ 是实根，则 $t_{0} < 0,$ 否则将由 $t_{0} \geq 0$ 得到 $at_{0}^{2} + bt_{0} + c \geq c > 0,$ 这就推出了矛盾。若 $t_{0}$ 是虚根，则 $t_{0}$ 的实部为 $-\frac{b}{2a} < 0,$ 结论得证。□

在前面的例题中, 我们已经讨论过正定阵的许多性质, 下面几个例题也是正定阵的性质及其应用.

例 8.54 设 $A = (a_{ij})$ 是 n 阶正定实对称矩阵, $P_{n-1}$ 是 A 的第 n-1 个顺序主子式, 求证: $|A| \leq a_{nn} P_{n-1}$ .

证明 设 $A = \begin{pmatrix} A_{n-1} & \alpha \\ \alpha' & a_{nn} \end{pmatrix}$ ，用第三类分块初等变换求得

$$
| \boldsymbol {A} | = \left| \begin{array}{c c} \boldsymbol {A} _ {n - 1} & \boldsymbol {\alpha} \\ \boldsymbol {\alpha} ^ {\prime} & a _ {n n} \end{array} \right| = \left| \begin{array}{c c} \boldsymbol {A} _ {n - 1} & \boldsymbol {\alpha} \\ \boldsymbol {O} & a _ {n n} - \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha} \end{array} \right| = (a _ {n n} - \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \boldsymbol {\alpha}) | \boldsymbol {A} _ {n - 1} |.
$$

因为 A 正定, 所以 $A_{n-1}$ 也正定, 从而 $A_{n-1}^{-1}$ 也正定, 于是 $\alpha^{\prime}A_{n-1}^{-1}\alpha\geq0$ . 因此

$$
| \boldsymbol {A} | = (a _ {n n} - \alpha^ {\prime} \boldsymbol {A} _ {n - 1} ^ {- 1} \alpha) | \boldsymbol {A} _ {n - 1} | \leq a _ {n n} | \boldsymbol {A} _ {n - 1} | = a _ {n n} P _ {n - 1}. \square
$$

例 8.55 设 $A = (a_{ij})$ 是 n 阶正定实对称矩阵, 求证: $|A| \leq a_{11}a_{22} \cdots a_{nn}$ , 且等号成立当且仅当 A 是对角矩阵.

证明 由例8.54可得 $|\mathbf{A}| \leq a_{nn}P_{n-1}$ , 且等号成立当且仅当 $\alpha = 0$ . 不断迭代下去, 可得

$$
\left| \boldsymbol {A} \right| \leq a _ {n n} P _ {n - 1} \leq a _ {n - 1, n - 1} a _ {n n} P _ {n - 2} \leq \dots \leq a _ {1 1} a _ {2 2} \dots a _ {n n},
$$

且等号成立当且仅当 A 是对角矩阵. □

例 8.56 设 A, D 是方阵, $M = \begin{pmatrix} A & B \\ B' & D \end{pmatrix}$ 是正定实对称矩阵, 求证: $|M| \leq |A||D|$ , 且等号成立当且仅当 B = O.

证明 由 $M$ 是正定阵可知, $A, D$ 都是正定阵, 从而存在非异实矩阵 $C_1, C_2$ , 使得 $C_1' A C_1 = I_r, C_2' D C_2 = I_{n-r}$ . 令 $C = \mathrm{diag}\{C_1, C_2\}$ , 则

$$
C ^ {\prime} M C \doteq \left( \begin{array}{c c} C _ {1} ^ {\prime} A C _ {1} & C _ {1} ^ {\prime} B C _ {2} \\ C _ {2} ^ {\prime} B ^ {\prime} C _ {1} & C _ {2} ^ {\prime} D C _ {2} \end{array} \right) = \left( \begin{array}{c c} I _ {r} & C _ {1} ^ {\prime} B C _ {2} \\ C _ {2} ^ {\prime} B ^ {\prime} C _ {1} & I _ {n - r} \end{array} \right)
$$

仍是正定阵. 由例 8.55 可得 $|C'MC| \leq 1$ , 且等号成立当且仅当 $C_1'BC_2 = O$ , 即 $|M| \leq |C|^{-2} = |C_1|^{-2}|C_2|^{-2} = |A||D|$ , 且等号成立当且仅当 $B = O$ . $\square$ 

例 8.57 设 A 是 n 阶实矩阵, $A = (B, C)$ 是 A 的一个分块, 其中 B 是 A 的前 k 列组成的矩阵, C 是 A 的后 n - k 列组成的矩阵. 求证:

$$
\left| \boldsymbol {A} \right| ^ {2} \leq \left| \boldsymbol {B} ^ {\prime} \boldsymbol {B} \right| \left| \boldsymbol {C} ^ {\prime} \boldsymbol {C} \right|.
$$

证明 若 A 不是可逆矩阵, 则 $|A|=0$ , 而由定义容易验证 $B^{\prime}B, C^{\prime}C$ 都是半正定阵, 故由例 8.26 可得 $|B^{\prime}B|\geq0, |C^{\prime}C|\geq0$ , 从而上式显然成立. 现设 A 是可逆矩阵, 则由例 8.26 可知, $A^{\prime}A=\begin{pmatrix}B^{\prime}B & B^{\prime}C \\ C^{\prime}B & C^{\prime}C\end{pmatrix}$ 是正定阵, 再由例 8.56 即得结论. □

注 在例 8.56 的证明中, 若考虑 M 的如下对称分块初等变换:

$$
\left( \begin{array}{c c} A & B \\ B ^ {\prime} & D \end{array} \right) \to \left( \begin{array}{c c} A & B \\ O & D - B ^ {\prime} A ^ {- 1} B \end{array} \right) \to \left( \begin{array}{c c} A & O \\ O & D - B ^ {\prime} A ^ {- 1} B \end{array} \right),
$$

则可得 $D - B'A^{-1}B$ 是正定阵。因为第三类分块初等变换不改变行列式的值，故可得 $|M| = |A||D - B'A^{-1}B| \leq |A||D|$ ，即有 $|D - B'A^{-1}B| \leq |D|$ 。利用这一不等式不难证明：若 $A$ 是 $n$ 阶正定实对称矩阵， $B$ 是 $n$ 阶半正定实对称矩阵，则 $|A + B| \geq |A|$ 。不过这并非是最佳的结果，更精确的结论应该是 $|A + B| \geq |A| + |B|$ ，等号成立当且仅当 $n = 1$ 或当 $n \geq 2$ 时， $B = O$ 。要证明这一结论，我们需要实对称矩阵的正交相似标准型理论，同时利用这一理论还能极大地改进和简化关于正定阵和半正定阵的许多结论及其证明。我们把这些留到 §9.8 详细阐述。

例 8.58 设 M 为 n 阶实矩阵, 若对任意的非零实列向量 $\alpha$ , 总有 $\alpha^{\prime}M\alpha > 0$ , 则称 M 是亚正定阵. 证明下列 3 个结论等价:

(1) M 是亚正定阵;

(2) $M + M'$ 是正定阵;

(3) $M = A + S$ , 其中 $\pmb{A}$ 是正定实对称矩阵, $\pmb{S}$ 是实反对称矩阵.

证明 (1) $\Rightarrow$ (2): 将 $\alpha' M \alpha > 0$ 转置后可得 $\alpha' M' \alpha > 0$ , 再将两式相加后可得 $\alpha'(M + M') \alpha > 0$ 对任意的非零实列向量 $\alpha$ 都成立, 因此 $M + M'$ 是正定阵.

(2) $\Rightarrow$ (3): 令 $A = \frac{1}{2} (M + M')$ 为 $M$ 的对称化, $S = \frac{1}{2} (M - M')$ 为 $M$ 的反对称化, 则结论成立.

(3) $\Rightarrow$ (1): 由例2.5可知, 对任意的非零实列向量 $\alpha$ , 总有 $\alpha^{\prime}M\alpha = \alpha^{\prime}A\alpha + \alpha^{\prime}S\alpha = \alpha^{\prime}A\alpha > 0$ , 即 $M$ 为亚正定阵. $\square$ 

注 第6章的解答题3告诉我们：亚正定阵 $M$ 的特征值的实部都大于零，由此可得 $M$ 的行列式值大于零。事实上，这一结论还可以由例8.45得到，即 $|M| = |A + S| \geq |A| > 0$ 。另外，这一结论还能给出例8.52的证法2，即由 $BA + (BA)'$ 正定可知 $BA$ 亚正定，从而 $|BA| > 0$ ，于是 $A, B$ 都是非异阵。

设 $f(x_{1}, x_{2}, \cdots, x_{n})$ 是实二次型, A 是相伴的实对称矩阵, 则容易看出 f 是负定型或半负定型当且仅当 -f 是正定型或半正定型, A 是负定阵或半负定阵当且仅当 -A 是正定阵或半正定阵, 因此负定型或半负定型 (负定阵或半负定阵) 的问题通常都可以转化成正定型或半正定型 (正定阵或半正定阵) 的问题来研究. 下面我们通过 4 道例题来说明负定型和负定阵的判定及相关应用.

例 8.59 设 A 是 n 阶实对称矩阵, $P_{1}, P_{2}, \cdots, P_{n}$ 是 A 的 n 个顺序主子式, 求证 A 负定的充要条件是:

$$
P _ {1} <   0, \quad P _ {2} > 0, \quad \dots , \quad (- 1) ^ {n} P _ {n} > 0.
$$

证明 $\pmb{A}$ 负定当且仅当 $-\pmb{A}$ 正定，由正定阵的顺序主子式判定法即得结论. □

例 8.60 设 A 是 n 阶负定实对称矩阵, 求证: $A^{-1}$ 也是负定阵; 当 n 为偶数时, $A^{*}$ 是负定阵, 当 n 为奇数时, $A^{*}$ 是正定阵.

证明 因为 A 负定, 故存在非异实矩阵 C, 使得 $A = -C'C$ , 于是 $A^{-1} = -C^{-1}(C')^{-1} = -C^{-1}(C^{-1})'$ 也是负定阵; 由例 2.37 可得 $A^{*} = (-1)^{n-1}C^{*}(C')^{*} = (-1)^{n-1}C^{*}(C^{*})'$ , 故当 n 为偶数时, $A^{*} = -C^{*}(C^{*})'$ 是负定阵; 当 n 为奇数时, $A^{*} = C^{*}(C^{*})'$ 是正定阵. □

例 8.61 设有实二次型 $f(x_{1}, x_{2}, \cdots, x_{n}) = x'Ax$ ，其中 $A = (a_{ij})$ 是 n 阶正定实对称矩阵，求证下列实二次型是负定型：

$$
g (x _ {1}, x _ {2}, \dots , x _ {n}) = \left| \begin{array}{c c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} & x _ {1} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} & x _ {2} \\ \vdots & \vdots & & \vdots & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} & x _ {n} \\ x _ {1} & x _ {2} & \dots & x _ {n} & 0 \end{array} \right|.
$$

证法1 由例1.7可得

$$
g (x _ {1}, x _ {2}, \dots , x _ {n}) = - \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} A _ {i j} x _ {i} x _ {j} = - \boldsymbol {x} ^ {\prime} \boldsymbol {A} ^ {*} \boldsymbol {x},
$$

其中 $A_{ij}$ 是元素 $a_{ij}$ 的代数余子式, $\mathbf{A}^{*}$ 是 $\mathbf{A}$ 的伴随矩阵. 因为 $\mathbf{A}$ 正定, 故由例 8.46 可知 $\mathbf{A}^{*}$ 也正定, 从而 $g$ 为负定型.

证法 2 因为 A 正定, 所以 $|A| > 0$ , 故由降阶公式可得

$$
g \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = | \boldsymbol {A} | \left(0 - \boldsymbol {x} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {x}\right) = - | \boldsymbol {A} | \left(\boldsymbol {x} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {x}\right).
$$

再由例 8.46 可知 $A^{-1}$ 也正定, 即 $x^{\prime}A^{-1}x$ 是正定型, 从而 g 为负定型. □

例 8.54 设 $A = (a_{ij})$ 是 n 阶正定实对称矩阵, $P_{n-1}$ 是 A 的第 n-1 个顺序主子式, 求证: $|A| \leq a_{nn} P_{n-1}$ .

证法 2 由行列式性质, 有

$$
| \boldsymbol {A} | = \left| \begin{array}{c c c c} a _ {1 1} & \dots & a _ {1, n - 1} & a _ {1 n} \\ a _ {2 1} & \dots & a _ {2, n - 1} & a _ {2 n} \\ \vdots & & \vdots & \vdots \\ a _ {n - 1, 1} & \dots & a _ {n - 1, n - 1} & a _ {n - 1, n} \\ a _ {n 1} & \dots & a _ {n, n - 1} & 0 \end{array} \right| + \left| \begin{array}{c c c c} a _ {1 1} & \dots & a _ {1, n - 1} & 0 \\ a _ {2 1} & \dots & a _ {2, n - 1} & 0 \\ \vdots & & \vdots & \vdots \\ a _ {n - 1, 1} & \dots & a _ {n - 1, n - 1} & 0 \\ a _ {n 1} & \dots & a _ {n, n - 1} & a _ {n n} \end{array} \right|.
$$

令

$$
g (x _ {1}, x _ {2}, \dots , x _ {n - 1}) = \left| \begin{array}{c c c c} a _ {1 1} & \dots & a _ {1, n - 1} & x _ {1} \\ a _ {2 1} & \dots & a _ {2, n - 1} & x _ {2} \\ \vdots & & \vdots & \vdots \\ a _ {n - 1, 1} & \dots & a _ {n - 1, n - 1} & x _ {n - 1} \\ x _ {1} & \dots & x _ {n - 1} & 0 \end{array} \right|,
$$

则

$$
\left| \boldsymbol {A} \right| = g \left(a _ {1 n}, a _ {2 n}, \dots , a _ {n - 1, n}\right) + a _ {n n} P _ {n - 1}.
$$

因为 A 的第 n-1 个顺序主子阵是正定阵, 故由例 8.61 可知 $g(a_{1n}, a_{2n}, \cdots, a_{n-1,n}) \leq 0$ , 从而 $|A| \leq a_{nn} P_{n-1}$ . □

## § 8.8 半正定型和半正定阵

半正定型和半正定阵在教材 [1] 中讨论得比较少, 主要原因是半正定型或半正定阵包含正定型或正定阵作为子集, 所以半正定的判定和正定的判定之间有类似之处. 不过它们之间仍然有很多差异, 因此半正定型和半正定阵也是高等代数中的难点之一. 首先, 我们将半正定阵 (半正定型类似) 的判定准则列举如下.

设 A 是 n 阶实对称矩阵, 则 A 是半正定阵的充要条件是以下条件之一:

(1) A 合同于 $\begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ (参考 §§ 8.1.3 定理 4);

(2) 存在实矩阵 C, 使得 $A = C'C$ (参考例 8.26 (2));

(3) A 的所有主子式全大于等于零 (参考例 8.64);

(4) A 的所有特征值全大于等于零 (参考 § 9.7 的第 2 部分).

判定准则 (1) 和 (2) 在前面的例题中用过多次了, 下面再来看一道例题.

例 8.62 设 A, B 都是 n 阶半正定实对称矩阵, c 是非负实数, 求证:

(1) $A^{*}, A + B, cA$ 都是半正定阵;

(2) 若 D 是实矩阵, 则 $D^{\prime}AD$ 也是半正定阵.

证明 (1) 因为 $A$ 半正定, 故存在实矩阵 $C$ , 使得 $A = C'C$ , 于是 $A^{*} = C^{*}(C')^{*} = C^{*}(C^{*})'$ 是半正定阵. 对任一非零实列向量 $\alpha$ , 有

$$
\alpha^ {\prime} (A + B) \alpha = \alpha^ {\prime} A \alpha + \alpha^ {\prime} B \alpha \geq 0, \quad \alpha^ {\prime} (c A) \alpha = c \alpha^ {\prime} A \alpha \geq 0,
$$

因此 $A + B, cA$ 都是半正定阵.

(2) 采用 (1) 的记号, 则 $D'AD = D'C'CD = (CD)'(CD)$ 也是半正定阵. $\square$ 

下面分别阐述半正定阵的 4 个重要性质及其应用.

性质 1 (极限性质) 半正定阵是正定阵的极限.

例 8.63 n 阶实对称矩阵 A 是半正定阵的充要条件是对任意的正实数 t, $A + tI_{n}$ 都是正定阵.

证明 先证必要性. 对任一非零实列向量 $\alpha$ , 有

$$
\alpha^ {\prime} (A + t I _ {n}) \alpha = \alpha^ {\prime} A \alpha + t \alpha^ {\prime} \alpha .
$$

因为 A 半正定, 故 $\alpha^{\prime}A\alpha \geq 0$ . 又 t > 0 且 $\alpha^{\prime}\alpha > 0$ , 从而 $\alpha^{\prime}(A + tI_{n})\alpha > 0$ , 因此 $A + tI_{n}$ 是正定阵.

再证充分性. 由假设对任一非零实列向量 $\alpha$ 和正实数 $t$ , 有

$$
\alpha^ {\prime} (A + t I _ {n}) \alpha = \alpha^ {\prime} A \alpha + t \alpha^ {\prime} \alpha > 0.
$$

令 $t \to 0+$ , 上式两边同取极限可得 $\alpha' A \alpha \geq 0$ , 即 $A$ 是半正定阵. $\square$ 

例 8.63 告诉我们: 半正定阵是一列正定阵的极限, 称之为半正定阵的极限性质. 因此我们可以利用极限性质和摄动法将半正定阵的问题转化成正定阵的问题来研究.

例 8.64 n 阶实对称矩阵 A 是半正定阵的充要条件是 A 的所有主子式全大于等于零.

证明 必要性由例 8.3 和例 8.26 (2) 即得, 下证充分性. 由例 1.46 可得

$$
\left| \boldsymbol {A} + t \boldsymbol {I} _ {n} \right| = t ^ {n} + c _ {1} t ^ {n - 1} + \dots + c _ {n - 1} t + c _ {n},
$$

其中 $c_{i}$ 是 $\pmb{A}$ 的所有 $i$ 阶主子式之和. 由假设可知 $c_{i} \geq 0 (1 \leq i \leq n)$ , 故对任意的正实数 $t$ , 我们总有 $|\pmb{A} + t\pmb{I}_{n}| > 0$ . 设 $\pmb{A}_{k}(1 \leq k \leq n)$ 是 $\pmb{A}$ 的 $n$ 个顺序主子阵, 则 $\pmb{A}_{k}$ 的主子式也是 $\pmb{A}$ 的主子式, 从而 $\pmb{A}_{k}$ 的所有主子式全大于等于零, 根据上面的讨论可知, 对任意的正实数 $t$ , 我们总有 $|\pmb{A}_{k} + t\pmb{I}_{k}| > 0$ . 注意到 $|\pmb{A}_{k} + t\pmb{I}_{k}| (1 \leq k \leq n)$ 是 $\pmb{A} + t\pmb{I}_{n}$ 的 $n$ 个顺序主子式, 故由上面的讨论可知, 对任意的正实数 $t$ , $\pmb{A} + t\pmb{I}_{n}$ 都是正定阵, 再由例8.63即得 $\pmb{A}$ 为半正定阵. □

注 我们不能用顺序主子式的非负性来推出半正定性, 这一点和正定阵不同. 例如, 矩阵 $A = \operatorname{diag}\{1,0,-1\}$ 的顺序主子式都非负, 但 $\mathbf{A}$ 却不是半正定阵.

利用极限性质和摄动法还可以将关于正定阵的很多结果延拓到半正定阵的情形. 我们来看下面几个延拓及其应用.

例 8.65 设 $A = (a_{ij})$ , $B = (b_{ij})$ 都是 n 阶半正定实对称矩阵, 求证: A, B 的 Hadamard 乘积 $H = A \circ B = (a_{ij} b_{ij})$ 也是半正定阵.

证法 1 设 $B = C'C$ ，其中 C 为实矩阵，剩余的证明与例 8.43 完全类似.

证法2 由于对任意的正实数 $t, A + tI_{n}, B + tI_{n}$ 都是正定阵，故由例8.43可知 $(A + tI_{n}) \circ (B + tI_{n})$ 为正定阵。令 $t \to 0+$ ，即得 $A \circ B$ 为半正定阵。 $\square$ 

例 8.29 设 A 为 n 阶实对称矩阵, 证明:

(1) 若 A 可逆, 则 A 为正定阵的充要条件是对任意的 n 阶正定实对称矩阵 B, $\mathrm{tr}(AB) > 0;$ 

(2) $A$ 为半正定阵的充要条件是对任意的 $n$ 阶半正定实对称矩阵 $B, \operatorname{tr}(AB) \geq 0$ .

证法 2 (2) 先证必要性. 设 $\boldsymbol{A} = (a_{ij})$ , $\boldsymbol{B} = (b_{ij})$ 为半正定阵, 则由例 8.65 可知 $\boldsymbol{A} \circ \boldsymbol{B} = (a_{ij} b_{ij})$ 也为半正定阵, 于是

$$
\operatorname{tr} (\boldsymbol {A B}) = \sum_ {i, j = 1} ^ {n} a _ {i j} b _ {i j} = \boldsymbol {\alpha} ^ {\prime} (\boldsymbol {A} \circ \boldsymbol {B}) \boldsymbol {\alpha} \geq 0,
$$

其中 $\boldsymbol{\alpha}=(1,1,\cdots,1)^{\prime}$ . 再证充分性. 令 $\boldsymbol{x}=(x_{1},x_{2},\cdots,x_{n})^{\prime}\in\mathbb{R}^{n}$ ，则 $B=xx^{\prime}=(x_{i}x_{j})$ 为半正定阵，于是

$$
\operatorname{tr} (\boldsymbol {A B}) = \sum_ {i, j = 1} ^ {n} a _ {i j} x _ {i} x _ {j} = \boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {x} \geq 0,
$$

由 x 的任意性即得 A 为半正定阵.

(1) 的必要性与 (2) 的必要性的证明完全类似, 下证充分性. 对任意的半正定阵 $B$ 和任意的正实数 $t$ , $B + tI_{n}$ 为正定阵, 从而 $\operatorname{tr}(A(B + tI_{n})) > 0$ . 令 $t \to 0+$ , 可得 $\operatorname{tr}(AB) \geq 0$ , 于是由 (2) 的结论可知 $A$ 为半正定阵, 又 $A$ 可逆, 故 $A$ 为正定阵. $\square$ 

例 8.66 设 A 是 n 阶半正定实对称矩阵, S 是 n 阶实反对称矩阵, 求证:

$$
| \boldsymbol {A} + \boldsymbol {S} | \geq | \boldsymbol {A} | + | \boldsymbol {S} | \geq | \boldsymbol {A} | \geq 0.
$$

证明 对任意的正实数 $t, A + tI_{n}$ 为正定阵, 故由例8.45可得

$$
\left| \boldsymbol {A} + t \boldsymbol {I} _ {n} + \boldsymbol {S} \right| \geq \left| \boldsymbol {A} + t \boldsymbol {I} _ {n} \right| + \left| \boldsymbol {S} \right| \geq \left| \boldsymbol {A} + t \boldsymbol {I} _ {n} \right| > 0,
$$

令 $t \rightarrow 0+$ ，即得结论。□

例 8.67 设 M 为 n 阶实矩阵, 若对任意的实列向量 $\alpha$ , 总有 $\alpha'M\alpha \geq 0$ , 则称 M 是亚半正定阵. 证明下列 3 个结论等价:

(1) M 是亚半正定阵;

(2) $M + M'$ 是半正定阵;

(3) $M = A + S$ , 其中 $A$ 是半正定实对称矩阵, $S$ 是实反对称矩阵.

证明 与例 8.58 的证明完全类似, 细节留给读者完成. □

由例 8.66 可知, 亚半正定阵 M 满足 $\left|M\right|=\left|A+S\right|\geq0$ . 下面先给出这一不等式的一个应用, 后面在例 8.72 中, 我们还会利用半正定阵的性质 3 给出上述不等式取严格不等号的充要条件.

例 8.23 的延拓 设 $f(x)=x^{\prime}Ax$ 是 n 元实二次型, n 阶实矩阵 A 未必对称且 $|A|<0$ , 求证: 必存在一组实数 $a_{1}, a_{2}, \cdots, a_{n}$ , 使得 $f(a_{1}, a_{2}, \cdots, a_{n})<0$ .

证明 用反证法证明. 若对任意的 $x \in \mathbb{R}^n$ , $f(x) = x'Ax \geq 0$ , 则 $A$ 是亚半正定阵. 由例8.66和例8.67可知 $|A| \geq 0$ , 这与假设矛盾. $\square$ 

例 8.68 设 $A = (a_{ij})$ 是 n 阶半正定实对称矩阵, 求证: $|A| \leq a_{11}a_{22} \cdots a_{nn}$ , 且等号成立当且仅当或者存在某个 $a_{ii} = 0$ 或者 A 是对角矩阵.

证明 对任意的正实数 $t, A + tI_{n}$ 为正定阵, 故由例8.55可得

$$
\left| \boldsymbol {A} + t \boldsymbol {I} _ {n} \right| \leq \left(a _ {1 1} + t\right) \left(a _ {2 2} + t\right) \dots \left(a _ {n n} + t\right),
$$

令 $t \to 0+$ , 即得不等式. 若 $\mathbf{A}$ 是非正定的半正定阵, 则 $|\mathbf{A}| = 0$ , 此时等号成立当且仅当存在某个 $a_{ii} = 0$ ; 若 $\mathbf{A}$ 是正定阵, 则由例 8.55 可知等号成立当且仅当 $\mathbf{A}$ 是对角矩阵. $\square$ 

例 8.69 设 A, B 都是 n 阶半正定实对称矩阵, 求证: $\frac{1}{n}\mathrm{tr}(AB) \geq |A|^{\frac{1}{n}} |B|^{\frac{1}{n}}$ , 并求等号成立的充要条件.

证明 设 C 为 n 阶实矩阵, 使得 $B = C'C$ , 则 $CAC' = (a_{ij})$ 仍为半正定阵.
注意到 $\mathrm{tr}(AB)=\mathrm{tr}(AC'C)=\mathrm{tr}(CAC')=\sum_{i=1}^{n}a_{ii}$ ，故由例 8.68 和基本不等式可得

$$
| \boldsymbol {A} | ^ {\frac {1}{n}} | \boldsymbol {B} | ^ {\frac {1}{n}} = | \boldsymbol {A} | ^ {\frac {1}{n}} | \boldsymbol {C} ^ {\prime} \boldsymbol {C} | ^ {\frac {1}{n}} = | \boldsymbol {C A C} ^ {\prime} | ^ {\frac {1}{n}} \leq (a _ {1 1} a _ {2 2} \dots a _ {n n}) ^ {\frac {1}{n}} \leq \frac {1}{n} \sum_ {i = 1} ^ {n} a _ {i i} = \frac {1}{n} \operatorname{tr} (\boldsymbol {A B}),
$$

等号成立的充要条件是以下两种情形之一成立：

(1) $a_{11}=a_{22}=\cdots=a_{nn}=0$ , 此时 $\mathrm{tr}(AB)=0$ , 故由例 8.30 可知 AB=O;

(2) $a_{11}=a_{22}=\cdots=a_{nn}=a>0$ , 此时 $CAC'=aI_{n}$ , 故 $AB=AC'C=aI_{n}$ .
综上所述, 等号成立的充要条件是 $AB = kI_{n}$ ，其中 $k \geq 0$ . □

性质 2 若主对角元为零, 则同行同列的所有元素都为零.

由例 8.4 可知, 正定阵 A 的主对角元全为正实数, 并且绝对值最大的元素只在主对角线上. 半正定阵当然没有这么好的性质, 不过通过下面的例题可以看出, 若半正定阵的某个主对角元为零, 则与之同行同列的所有元素都为零. 这个性质可以看成正定阵上述性质的极限版本, 是半正定阵的第二个重要性质.

例 8.70 设 $A = (a_{ij})$ 为 n 阶半正定实对称矩阵, 求证: 若 $a_{ii} = 0$ , 则 A 的第 i 行和第 i 列的所有元素都等于零.

证明 任取 $j \neq i$ , 考虑 $\pmb{A}$ 的第 $i, j$ 行和列构成的主子式, 由例8.64可得

$$
\left| \begin{array}{c c} a _ {i i} & a _ {i j} \\ a _ {j i} & a _ {j j} \end{array} \right| = a _ {i i} a _ {j j} - a _ {i j} a _ {j i} = - a _ {i j} ^ {2} \geq 0,
$$

从而 $a_{ij}=a_{ji}=0(j\neq i)$ ，结论得证. □

例 8.61 设有实二次型 $f(x_{1}, x_{2}, \cdots, x_{n}) = x' A x$ ，其中 $A = (a_{ij})$ 是 n 阶正定

实对称矩阵，求证：实二次型 $g(x_{1}, x_{2}, \cdots, x_{n}) = \begin{vmatrix} A & x \\ x' & 0 \end{vmatrix}$ 是负定型.

证法 3 设 $\alpha = (a_1, a_2, \cdots, a_n)'$ 为实列向量, 要证 $g$ 是负定型, 等价地只要证明: 若 $g(\alpha) \geq 0$ , 则 $\alpha = 0$ 即可. 作 $n + 1$ 变元二次型 $h(y) = y'By$ , 其中 $B = \begin{pmatrix} A & \alpha \\ \alpha' & 0 \end{pmatrix}$ , 则 $|B| = g(\alpha) \geq 0$ . 又已知 $A$ 正定, 因此 $B$ 的前 $n$ 个顺序主子式为正数. 由例 8.13 可知, $h$ 是半正定型, 从而 $B$ 是半正定阵. 注意到 $B$ 的第 $(n + 1, n + 1)$ 元素为零, 故由例 8.70 可知 $\alpha = 0$ . □

性质 3 若 $\alpha^{\prime}A\alpha=0$ ，则 $A\alpha=0$ .

半正定阵的第三个重要性质是: 若 A 为 n 阶半正定阵, $\alpha$ 为 n 维实列向量, 则由 $\alpha^{\prime}A\alpha = 0$ 可以推出 $A\alpha = 0$ . 这是一个非常强的结论, 可以处理很多关于半正定阵的问题. 为了完整起见, 我们在下面的例题中证明一个充要条件.

例 8.71 设 A 为 n 阶实对称矩阵, 求证: A 为半正定阵或半负定阵的充要条件是对任一满足 $\alpha^{\prime}A\alpha = 0$ 的 n 维实列向量 $\alpha$ , 均有 $A\alpha = 0$ .

证明 先证必要性. 若 A 是半正定阵, 则存在实矩阵 C, 使得 $A = C'C$ , 从而

$$
0 = \alpha^ {\prime} A \alpha = \alpha^ {\prime} C ^ {\prime} C \alpha = (C \alpha) ^ {\prime} (C \alpha),
$$

于是 $C\alpha = 0$ ，因此 $A\alpha = C'(C\alpha) = 0.$ 同理可证 $\pmb{A}$ 是半负定阵的情形

再证充分性. 用反证法, 设 A 既不是半正定阵, 也不是半负定阵, 则 A 的正惯性指数 p > 0, 负惯性指数 q > 0. 设 C 是非异实矩阵, 使得 $B = C'AC = \operatorname{diag}\{I_p, -I_q, O\}$ 为 A 的合同标准型. 令 $b_1 = 1, b_{p+1} = 1$ , 其他 $b_i$ 全为零, 则 $\beta = (b_1, b_2, \cdots, b_n)'$ 是非零列向量, 并且满足 $\beta'B\beta = 0$ , 但 $B\beta \neq 0$ , 从而 $\alpha = C\beta = (a_1, a_2, \cdots, a_n)'$ 也是非零列向量, 并且满足 $\alpha'A\alpha = 0$ , 但 $A\alpha = AC\beta = (C')^{-1}B\beta \neq 0$ , 这就推出了矛盾. □

例 8.27 设 A 为 n 阶正定实对称矩阵, $\alpha, \beta$ 为 n 维实列向量, 证明: $\alpha^{\prime}A\alpha + \beta^{\prime}A^{-1}\beta \geq 2\alpha^{\prime}\beta$ , 且等号成立的充要条件是 $A\alpha = \beta$ .

证法2 将要证的不等式整理为

$$
\left( \begin{array}{c c} \boldsymbol {\alpha} ^ {\prime} & \boldsymbol {\beta} ^ {\prime} \end{array} \right) \left( \begin{array}{c c} \boldsymbol {A} & - \boldsymbol {I} _ {n} \\ - \boldsymbol {I} _ {n} & \boldsymbol {A} ^ {- 1} \end{array} \right) \binom{\boldsymbol {\alpha}}{\boldsymbol {\beta}} \geq 0,
$$

这等价于证明 $\begin{pmatrix} A & -I_{n} \\ -I_{n} & A^{-1} \end{pmatrix}$ 是半正定阵, 而这就是例 8.11 的结论. 由例 8.71 可知,

上述不等式的等号成立当且仅当 $\begin{pmatrix} A & -I_{n} \\ -I_{n} & A^{-1} \end{pmatrix} \begin{pmatrix} \alpha \\ \beta \end{pmatrix} = 0$ , 即当且仅当 $A\alpha = \beta$ . □

例 8.72 设 A 为 n 阶半正定实对称矩阵, S 为 n 阶实反对称矩阵, 求证:

(1) $\mathrm{r}(\boldsymbol{A}+\boldsymbol{S})=\mathrm{r}(\boldsymbol{A};\boldsymbol{S});$ 

(2) $|A+S|>0$ 成立的充要条件是 $r(A;S)=n.$ 

证明 (1) 只要证明线性方程组 $\left( \begin{array}{l} A \\ S \end{array} \right)$ $x = 0$ 与 $(A + S)x = 0$ 同解即可. 显然, $\left( \begin{array}{l} A \\ S \end{array} \right)$ $x = 0$ 的任一解都是 $(A + S)x = 0$ 的解. 反之, 任取 $(A + S)x = 0$ 的解 $x = x_0 \in \mathbb{R}^n$ , 即 $(A + S)x_0 = 0$ , 此等式左乘 $x_0'$ , 由例2.5可得

$$
0 = \boldsymbol {x} _ {0} ^ {\prime} (\boldsymbol {A} + \boldsymbol {S}) \boldsymbol {x} _ {0} = \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {A} \boldsymbol {x} _ {0} + \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {S} \boldsymbol {x} _ {0} = \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {A} \boldsymbol {x} _ {0},
$$

再由例 8.71 可知 $Ax_{0}=0$ ，从而 $Sx_{0}=0$ ，于是 $x=x_{0}$ 也是 $\begin{pmatrix}A\\S\end{pmatrix}x=0$ 的解.

(2) 由例 8.66 可知 $|\mathbf{A} + \mathbf{S}| \geq 0$ , 故 $|\mathbf{A} + \mathbf{S}| > 0$ 当且仅当 $\mathbf{A} + \mathbf{S}$ 非异, 由 (1) 可知这也当且仅当 $\mathrm{r}(\mathbf{A}; \mathbf{S}) = \mathrm{r}(\mathbf{A} + \mathbf{S}) = n$ . □

例 8.73 设 A, B 为 n 阶实对称矩阵, 其中 B 半正定且满足 $\left|A + iB\right| = 0$ , 求证: 存在非零实列向量 $\alpha$ , 使得 $A\alpha = B\alpha = 0$ .

证明 由 $|\mathbf{A} + \mathrm{i}\mathbf{B}| = 0$ 可知, 存在非零复列向量 $\gamma = \alpha + \mathrm{i}\beta$ , 其中 $\alpha, \beta \in \mathbb{R}^n$ , 使得 $(\mathbf{A} + \mathrm{i}\mathbf{B})\gamma = (\mathbf{A} + \mathrm{i}\mathbf{B})(\alpha + \mathrm{i}\beta) = 0$ . 按实部和虚部整理后可得

$$
\boldsymbol {A} \boldsymbol {\alpha} - \boldsymbol {B} \boldsymbol {\beta} = \mathbf {0}, \tag {8.4}
$$

$$
\boldsymbol {A} \boldsymbol {\beta} + \boldsymbol {B} \boldsymbol {\alpha} = \mathbf {0}. \tag {8.5}
$$

将 (8.5) 式左乘 $\alpha'$ 减去 (8.4) 式左乘 $\beta'$ , 注意到 $\alpha' A \beta = (\alpha' A \beta)' = \beta' A \alpha$ , 故可得 $\alpha' B \alpha + \beta' B \beta = 0$ . 由 $B$ 的半正定性可得 $\alpha' B \alpha = \beta' B \beta = 0$ , 再由例 8.71 可得 $B \alpha = B \beta = 0$ , 从而 $A \alpha = A \beta = 0$ . 因为 $\gamma \neq 0$ , 故 $\alpha, \beta$ 中至少有一个是非零实列向量, 从而结论得证. □

利用半正定阵的性质 3, 还可以简洁地求出半正定型的规范标准型.

例 8.74 设 A 为 n 阶半正定实对称矩阵, $f(x) = x'Ax$ 是相伴的半正定实二次型. 设 $\operatorname{Ker} f(x) = \{\alpha \in \mathbb{R}^{n} \mid f(\alpha) = \alpha' A \alpha = 0\}$ 作为实线性空间的维数等于 d, 求证: $f(x)$ 的规范标准形为 $y_{1}^{2} + y_{2}^{2} + \cdots + y_{n-d}^{2}$ .

证明 由例8.71可知 $\operatorname{Ker} f(x)$ 等于齐次线性方程组 $Ax = 0$ 的解空间, 故由 $\dim \operatorname{Ker} f(x) = d$ 和线性方程组的求解理论可知 $\mathbf{r}(A) = n - d$ , 于是半正定型 $f(x)$ 的正惯性指数等于 $n - d$ , 从而结论得证. □

若实二次型 $f(\pmb{x})$ 可通过配方（不要求是非异线性变换）变成完全平方和，则 $f(\pmb{x})$ 必为半正定型．一般来说， $\operatorname {Ker}f(x)$ 及其维数比较容易求出，因此由例8.74便可快速得到 $f(x)$ 的规范标准型．我们来看两个典型的例子.

例 8.34 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} (x _ {i} - s) ^ {2}, \quad s = \frac {1}{n} (x _ {1} + x _ {2} + \dots + x _ {n}).
$$

解法 3 显然 $f(x)$ 是半正定型, 并且 $\operatorname{Ker} f(x) = \{(c, c, \cdots, c) \mid c \in \mathbb{R}\}$ 的维数等于 1, 故由例 8.74 可知 $f(x)$ 的规范标准型为 $y_{1}^{2} + y_{2}^{2} + \cdots + y_{n-1}^{2}$ . □

例 8.35 化下列实二次型为标准型, 其中 $a_{i}$ 都是实数:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = (x _ {1} - a _ {1} x _ {2}) ^ {2} + (x _ {2} - a _ {2} x _ {3}) ^ {2} + \dots + (x _ {n - 1} - a _ {n - 1} x _ {n}) ^ {2} + (x _ {n} - a _ {n} x _ {1}) ^ {2}.
$$

解法3 显然 $f(\pmb{x})$ 是半正定型. 当 $a_1 a_2 \cdots a_n \neq 1$ 时, $\operatorname{Ker} f(\pmb{x}) = 0$ , 故 $f(\pmb{x})$ 的规范标准型为 $y_1^2 + y_2^2 + \cdots + y_n^2$ ; 当 $a_1 a_2 \cdots a_n = 1$ 时, $\operatorname{Ker} f(\pmb{x}) = \{(c, a_2 \cdots a_n c, \cdots, a_n c) \mid c \in \mathbb{R}\}$ 的维数等于1, 故 $f(\pmb{x})$ 的规范标准型为 $y_1^2 + y_2^2 + \cdots + y_{n-1}^2$ . □

性质 4 (主对角块占优) 主对角块可消去同行同列的其他块.

半正定阵的第四个重要性质是: 若实对称矩阵 $M = \begin{pmatrix} A & B \\ B' & D \end{pmatrix}$ 是半正定阵, 则主对角块 $A, D$ 占优, 即利用 $A, D$ 以及第三类分块初等变换可将非主对角块消去,从而得到分块对角矩阵. 若 $M$ 为正定阵, 则 $A, D$ 都是正定阵, 从而上述性质显然成立. 若 $M$ 为半正定阵, 则由线性方程组的求解理论 (参考例3.105) 可知, 上述性质等价于如下结论.

例 8.75 设 $M = \begin{pmatrix} A & B \\ B' & D \end{pmatrix}$ 为半正定实对称矩阵, 求证: $\mathrm{r}(A; B) = \mathrm{r}(A)$ .

证法1 根据线性方程组的求解理论, 要证明 $\mathrm{r}(A; B) = \mathrm{r}(A)$ , 只要证明线性方程组 $\left( \begin{array}{l} A \\ B' \end{array} \right)x = 0$ 与 $Ax = 0$ 同解即可. 显然前面线性方程组的解, 下面证明反之也成立. 设 $Ax_0 = 0$ , 其中 $x_0$ 是实列向量, 则有

$$
\left( \begin{array}{c c} \boldsymbol {x} _ {0} ^ {\prime} & \boldsymbol {0} \end{array} \right) \left( \begin{array}{c c} \boldsymbol {A} & \boldsymbol {B} \\ \boldsymbol {B} ^ {\prime} & \boldsymbol {D} \end{array} \right) \binom{\boldsymbol {x} _ {0}}{\boldsymbol {0}} = \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {A} \boldsymbol {x} _ {0} = 0,
$$

由例 8.71 可知 $\begin{pmatrix} A & B \\ B' & D \end{pmatrix} \begin{pmatrix} x_{0} \\ 0 \end{pmatrix} = 0$ ，即有 $\begin{pmatrix} A \\ B' \end{pmatrix} x_{0} = 0$ 成立，从而结论得证.

证法 2 由 M 的半正定性可得 A 的半正定性, 因此存在非异实矩阵 C, 使得 $C'AC = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ . 考虑如下合同变换:

$$
\left( \begin{array}{c c} C ^ {\prime} & O \\ O & I \end{array} \right) \left( \begin{array}{c c} A & B \\ B ^ {\prime} & D \end{array} \right) \left( \begin{array}{c c} C & O \\ O & I \end{array} \right) = \left( \begin{array}{c c} C ^ {\prime} A C & C ^ {\prime} B \\ B ^ {\prime} C & D \end{array} \right) = \left( \begin{array}{c c c} I _ {r} & O & B _ {1} \\ O & O & B _ {2} \\ B _ {1} ^ {\prime} & B _ {2} ^ {\prime} & D \end{array} \right),
$$

由例 8.70 可知 $B_{2} = O$ . 对分块矩阵 $(A; B)$ 左乘 $C'$ , 相当于实施初等行变换, 再对左边的分块 $A$ 右乘 $C$ , 相当于实施初等列变换, 注意到矩阵的秩在初等变换下不改变, 故有

$$
\mathrm{r} (\boldsymbol {A}; \boldsymbol {B}) = \mathrm{r} (\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C}; \boldsymbol {C} ^ {\prime} \boldsymbol {B}) = \mathrm{r} \left( \begin{array}{c c c} \boldsymbol {I} _ {r} & \boldsymbol {O} & \boldsymbol {B} _ {1} \\ \boldsymbol {O} & \boldsymbol {O} & \boldsymbol {O} \end{array} \right) = r = \mathrm{r} (\boldsymbol {A}).
$$

注 半正定阵的性质 4 (例 8.75) 可看成是半正定阵的性质 2 (例 8.70) 的推广.

例 8.76 设 A, B, A - B 都是 n 阶半正定实对称矩阵, 求证: $\mathrm{r}(A; B) = \mathrm{r}(A)$ .

证法 1 根据线性方程组的求解理论, 要证明 $\mathrm{r}(A; B) = \mathrm{r}(A)$ , 只要证明线性方程组 $\left( \begin{array}{l} A \\ B \end{array} \right)x = 0$ 与 $Ax = 0$ 同解即可. 显然前面线性方程组的解是后面线性方程组的解, 下面证明反之也成立. 设 $Ax_0 = 0$ , 其中 $x_0$ 是实列向量, 则将等式 $A = (A - B) + B$ 的两边同时左乘 $x_0'$ , 右乘 $x_0$ , 可得

$$
0 = \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {A} \boldsymbol {x} _ {0} = \boldsymbol {x} _ {0} ^ {\prime} (\boldsymbol {A} - \boldsymbol {B}) \boldsymbol {x} _ {0} + \boldsymbol {x} _ {0} ^ {\prime} \boldsymbol {B} \boldsymbol {x} _ {0}.
$$

因为 A - B, B 都是半正定阵, 故 $\boldsymbol{x}_{0}^{\prime}(\boldsymbol{A} - \boldsymbol{B})\boldsymbol{x}_{0} \geq 0, \boldsymbol{x}_{0}^{\prime}\boldsymbol{B}\boldsymbol{x}_{0} \geq 0$ , 由上述等式可得 $\boldsymbol{x}_{0}^{\prime}(\boldsymbol{A} - \boldsymbol{B})\boldsymbol{x}_{0} = \boldsymbol{x}_{0}^{\prime}\boldsymbol{B}\boldsymbol{x}_{0} = 0$ , 再由例 8.71 可得 $Bx_{0} = 0$ , 因此 $x = x_{0}$ 也是线性方程组 $\begin{pmatrix} A \\ B \end{pmatrix}$ $x = 0$ 的解, 结论得证.

证法 2 考虑如下对称分块初等变换:

$$
\left( \begin{array}{c c} A - B & O \\ O & B \end{array} \right) \to \left( \begin{array}{c c} A - B & B \\ O & B \end{array} \right) \to \left( \begin{array}{c c} A & B \\ B & B \end{array} \right),
$$

因为 A - B, B 都是半正定阵, 故 $\begin{pmatrix} A - B & O \\ O & B \end{pmatrix}$ 也是半正定阵, 从而 $\begin{pmatrix} A & B \\ B & B \end{pmatrix}$ 也是半正定阵, 由例 8.75 即得结论. □

下面的例题给出了两个半正定实对称矩阵之和为正定阵的充要条件, 读者可以和例 8.72 进行对比.

例 8.77 设 A, B 为 n 阶半正定实对称矩阵, 求证:

(1) $\mathrm{r}(A+B)=\mathrm{r}(A;B);$ 

(2) $A+B$ 是正定阵的充要条件是 $r(A;B)=n$ .

证明 (1) 由例 8.76 可知, $\mathrm{r}(\boldsymbol{A} + \boldsymbol{B}) = \mathrm{r}(\boldsymbol{A} + \boldsymbol{B};\boldsymbol{B}) = \mathrm{r}(\boldsymbol{A};\boldsymbol{B})$ .

(2) 注意到 $A + B$ 是半正定阵, 故它是正定阵当且仅当它是非异阵, 即 $\mathrm{r}(A + B) = n$ , 再由 (1) 可知, 这也当且仅当 $\mathrm{r}(A; B) = n$ . □

利用半正定阵的性质 4, 我们还可以得到类似于例 8.12 的关于半正定阵的刻画.

例 8.78 证明下列关于 n 阶实对称矩阵 $A = (a_{ij})$ 的命题等价:

(1) A 是半正定阵;

(2) 存在主对角元全等于 1 的上三角矩阵 B 和主对角元全为非负实数的对角矩阵 D, 使得 $A = B'DB$ ;

(3) 存在主对角元全为非负实数的上三角矩阵 C, 使得 $A = C'C$ .

证明 (1) $\Rightarrow$ (2): 只要证明存在主对角元全为 1 的上三角矩阵 $T$ , 使得 $T'AT = D$ 是半正定对角矩阵即可. 因为一旦得证, $B = T^{-1}$ 也是主对角元全为 1 的上三角矩阵, 并且 $A = B'DB$ . 对阶数 $n$ 进行归纳, 当 $n = 1$ 时结论显然成立. 假设对 $n - 1$ 阶半正定阵结论成立, 现证明 $n$ 阶半正定阵的情形. 设 $A = \begin{pmatrix} A_{n-1} & \alpha \\ \alpha' & a_{nn} \end{pmatrix}$ , 其中 $A_{n-1}$ 是 $n - 1$ 阶矩阵, $\alpha$ 是 $n - 1$ 维列向量. 因为 $A$ 半正定, 所以 $A_{n-1}$ 是 $n - 1$ 阶半正定阵, 并且由例 8.75 可得 $\mathrm{r}(A_{n-1};\alpha) = \mathrm{r}(A_{n-1})$ , 故由线性方程组的求解理论可知, 存在 $n-1$ 维列向量 $\beta$ , 使得 $A_{n-1}\beta = \alpha$ . 考虑如下对称分块初等变换:

$$
\left( \begin{array}{c c} I _ {n - 1} & O \\ - \beta^ {\prime} & 1 \end{array} \right) \left( \begin{array}{c c} A _ {n - 1} & \alpha \\ \alpha^ {\prime} & a _ {n n} \end{array} \right) \left( \begin{array}{c c} I _ {n - 1} & - \beta \\ O & 1 \end{array} \right) = \left( \begin{array}{c c} A _ {n - 1} & O \\ O & a _ {n n} - \beta^ {\prime} A _ {n - 1} \beta \end{array} \right),
$$

由 $\pmb{A}$ 的半正定性可得 $a_{nn} - \beta' A_{n-1} \beta \geq 0$ . 再由归纳假设, 存在主对角元全为 1 的 $n-1$ 阶上三角矩阵 $\boldsymbol{T}_{n-1}$ , 使得 $\boldsymbol{T}_{n-1}' \boldsymbol{A}_{n-1} \boldsymbol{T}_{n-1} = \boldsymbol{D}_{n-1}$ 是 $n-1$ 阶半正定对角矩阵. 令

$$
\boldsymbol {T} = \left( \begin{array}{c c} \boldsymbol {I} _ {n - 1} & - \boldsymbol {\beta} \\ \boldsymbol {O} & 1 \end{array} \right) \left( \begin{array}{c c} \boldsymbol {T} _ {n - 1} & \boldsymbol {O} \\ \boldsymbol {O} & 1 \end{array} \right),
$$

则 $\pmb{T}$ 是一个主对角元全为1的 $n$ 阶上三角矩阵, 使得

$$
\boldsymbol {T} ^ {\prime} \boldsymbol {A} \boldsymbol {T} = \left( \begin{array}{c c} \boldsymbol {D} _ {n - 1} & \boldsymbol {O} \\ \boldsymbol {O} & a _ {n n} - \beta^ {\prime} \boldsymbol {A} _ {n - 1} \beta \end{array} \right)
$$

是 n 阶半正定对角矩阵.

(2) $\Rightarrow$ (3): 设 $D=\mathrm{diag}\{d_{1},d_{2},\cdots,d_{n}\}$ ，令 $s_{i}=\sqrt{d_{i}}\geq0$ ,

$$
\boldsymbol {S} = \operatorname{diag} \left\{s _ {1}, s _ {2}, \dots , s _ {n} \right\}.
$$

设 C = SB，则 $A = C'C$ 。显然 C = SB 是主对角元全为非负实数的上三角矩阵。

(3) $\Rightarrow$ (1): 由 $A = C' C$ 可知 $A$ 为半正定阵. $\square$ 

注 (1) 若 $A$ 是半正定阵, 则一般来说, 使得 $A = C' C$ 成立的主对角元全为非负实数的上三角矩阵 $C$ 并不一定是唯一的, 这一点和正定阵的情形不同. 例如, $A = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ , 则 $C_1 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 和 $C_2 = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ 都是主对角元全为非负实数的上三角矩阵且 $A = C_1' C_1 = C_2' C_2$ . 我们还将在第9章用矩阵的 $QR$ 分解给出例8.12和例8.78的另一证明.

(2) 我们还有例 8.78 中 $(1) \Rightarrow (2)$ 的另一证明. 设 $A = \begin{pmatrix} a_{11} & \alpha' \\ \alpha & A_{n-1} \end{pmatrix}$ , 可利用半正定阵的性质 2 对 $a_{11}$ 进行讨论, 再由归纳法即得结论. 证明细节留给读者完成.

§ 8.7 和 § 8.8 中正定和半正定实对称矩阵的很多性质和结论都可以平行地推广到正定和半正定 Hermite 矩阵上, 这些推广对于复矩阵的研究非常重要. 我们把这些推广的叙述和证明留给读者完成.

## § 8.9 基础训练

### 8.9.1 训练题

#### 一、单选题

1. 矩阵 $A = \begin{pmatrix} 0 & \frac{1}{\sqrt{2}} & 1 \\ \frac{1}{\sqrt{2}} & 3 & -\frac{3}{2} \\ 1 & -\frac{3}{2} & 0 \end{pmatrix}$ 对应的二次型为（）.

(A) $x_{1}^{2} + \frac{1}{2}x_{1}x_{2} + 2x_{1}x_{3} - 3x_{2}x_{3}$ 

(B) $2\sqrt{2}x_{1}x_{2}-3x_{2}^{2}+x_{1}x_{3}-\frac{3}{2}x_{2}x_{3}$ 

(C) $\sqrt{2}x_{1}x_{2}+3x_{2}^{2}+2x_{1}x_{3}-3x_{2}x_{3}$ 

(D) $x_{1}x_{2} - 3x_{2}^{2} + x_{1}x_{3} - 3x_{2}x_{3}$ 

2. 设 $f(x_{1}, x_{2}, x_{3}) = x_{1}x_{2} + x_{1}x_{3} - x_{2}x_{3}$ ，则它的相伴实对称矩阵（即系数矩阵）为（）.

$$
\text {(A)} \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & - 1 \end{array} \right)
$$

$$
\text { (B) } \left( \begin{array}{c c c} 0 & 1 & 1 \\ 1 & 0 & - 1 \\ 1 & - 1 & 0 \end{array} \right)
$$

$$
\text { (C) } \left( \begin{array}{c c c} 0 & 1 & 1 \\ 0 & 0 & - 1 \\ 0 & 0 & 0 \end{array} \right)
$$

$$
\text {(D)} \left( \begin{array}{c c c} 0 & \frac {1}{2} & \frac {1}{2} \\ \frac {1}{2} & 0 & - \frac {1}{2} \\ \frac {1}{2} & - \frac {1}{2} & 0 \end{array} \right)
$$

3. 在下列二次型中, 正惯性指数等于 2 的是 ( ).

(A) $f(x_{1},x_{2},x_{3}) = (x_{1} + x_{2} + x_{3})^{2} - 2x_{2}^{2}$ 

(B) $f(x_{1},x_{2},x_{3}) = x_{1}^{2} + x_{2}^{2} + 5x_{3}^{2} - 6x_{1}x_{2} - 2x_{1}x_{3} + 2x_{2}x_{3}$ 

(C) $f(x_{1},x_{2},x_{3}) = x_{1}^{2} + x_{2}^{2} + x_{3}^{2} - x_{1}x_{2}$ 

(D) $f(x_{1},x_{2},x_{3}) = x_{1}^{2} + x_{2}^{2} + x_{3}^{2} - 2x_{1}x_{2} + 2x_{1}x_{3} - 2x_{2}x_{3}$ 

4. 设 $A = \begin{pmatrix} -1 & 0 & 0 \\ 0 & \frac{1}{3} & 0 \\ 0 & 0 & -2 \end{pmatrix}$ ，则和 A 合同的矩阵是（）.

$$
\text {(A)} \left( \begin{array}{c c c} - 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)
$$

$$
\text {(B)} \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & - 2 & 0 \\ 0 & 0 & 1 \end{array} \right)
$$

(C) $\left( \begin{array}{ccc}2 & 0 & 0\\ 0 & -1 & 0\\ 0 & 0 & -5 \end{array} \right)$ 

(D) $\begin{pmatrix}2&0&0\\0&1&0\\0&0&3\end{pmatrix}$ 

5. 设实对称矩阵 A 的秩等于 r，正惯性指数为 m，则它的符号差为（）.

(A) r 

(B) m - r 

(C) 2m - r 

(D) r - m 

6. 在下列二次型中, 属于正定型的是 ( ).

(A) $f(x_{1}, x_{2}, x_{3}) = x_{1}^{2} + x_{2}^{2}$ 

(B) $f(x_{1}, x_{2}, x_{3}) = x_{1}^{2} + x_{2}^{2} + 2x_{1}x_{2} + x_{3}^{2}$ 

(C) $f(x_{1},x_{2},x_{3})=4x_{1}^{2}+x_{2}^{2}+2x_{3}^{2}+2x_{1}x_{2}+4x_{1}x_{3}+2x_{2}x_{3}$ 

(D) $f(x_{1},x_{2},x_{3})=x_{1}^{2}+x_{2}^{2}+x_{3}^{2}+2x_{1}x_{2}+2x_{1}x_{3}+2x_{2}x_{3}$ 

7. 设 A 是 n 阶实对称矩阵, 则 A 为正定阵的充要条件是 ( ).

(A) $|A| > 0$ 

(B) 存在 n 阶可逆实矩阵 C, 使得 $A = C'C$ 

(C) 对元素全不为零的实列向量 x，总有 $x^{\prime}Ax > 0$ 

(D) 存在 n 维实列向量 $\alpha \neq 0$ ，使得 $\alpha' A \alpha > 0$ 

8. 实二次型 $f(x_{1},\cdots,x_{n})$ 的系数矩阵是（）时必是正定型.

(A) 实对称且主对角线上元素都为正数

(B) 实对称且所有元素都为正数

(C) 实对称且顺序主子式的值都为正数

(D) 实对称且行列式的值为正数

9. 设 A, B 为正定实对称矩阵, 则 ( ).

(A) $AB, A + B$ 一定都是正定阵

(B) $AB$ 是正定阵, $A + B$ 不是正定阵

(C) $A + B$ 是正定阵, AB 不一定是正定阵

(D) AB 必不是正定阵, $A + B$ 必是正定阵

10. 设实二次型 $f(x_{1}, x_{2}, x_{3}) = (k + 1)x_{1}^{2} + (k - 1)x_{2}^{2} + (k - 2)x_{3}^{2}$ ，当（）时， $f$ 必是正定型.

(A) k > 0 

(B) k > 1 

(C) k = 1 

(D) k > 2 

11. 下列条件不能保证 n 阶实对称矩阵 A 为正定阵的是（）.

(A) $A^{-1}$ 正定

(B) A 的负惯性指数为零

(C) A 合同于单位矩阵

(D) A 的正惯性指数等于 n

12. 设 A 是 n 阶正定阵, 则下列结论错误的是 ( ).

(A) $|A| > 0$ 

(B) A 的元素全是正数

(C) A 非异

(D) A 的主对角线上元素全是正数

13. 当 $k$ 为（）时，实对称矩阵 $\mathbf{A} = \begin{pmatrix} k & k & 1 \\ k & k & 0 \\ 1 & 0 & k^2 \end{pmatrix}$ 为正定阵.

(A) k > 1 

(B) $k^2 > 1$ 

(C) k < 0 

(D) $k$ 不存在

14. 下列矩阵中合同于单位矩阵的是（）.

(A) $\begin{pmatrix}1&1&1\\ 1&1&1\\ 1&1&1\end{pmatrix}$ 

(B) $\begin{pmatrix}1&0&1\\0&1&0\\1&0&1\end{pmatrix}$ 

(C) $\begin{pmatrix}1&2&1\\2&7&1\\1&1&8\end{pmatrix}$ 

(D) $\begin{pmatrix}2&-1&2\\-1&3&-3\\2&-3&-4\end{pmatrix}$ 

15. 设 A 是 n 阶实反对称矩阵, 则 $A^{\prime}A$ 必是().

(A) 正定阵

(B) 负定矩阵

(C) 半正定阵

(D) 半负定矩阵

#### 二、填空题

1. 设可逆矩阵 A 和 B 合同, 问 $A^{-1}$ 和 $B^{-1}$ 是否合同? ()

2. $n(n>1)$ 阶实对称矩阵 A 和它的伴随矩阵 $A^{*}$ 是否必合同？（）

3. 设 n 阶实对称矩阵 A 合同于对角矩阵 B, 其主对角元中有 m 个零, t 个正实数. 问 A 的秩、正惯性指数、负惯性指数及符号差是什么? ()

4. 设实对称矩阵 A 的秩为 r，符号差为 s，比较 $|s|$ 和 r 的大小。（）

5. 用对称初等变换法将下列二次型化为规范标准型:

$$
2 x _ {1} x _ {2} - 6 x _ {1} x _ {3} - 6 x _ {2} x _ {4} + 2 x _ {3} x _ {4}.
$$

6. 确定 $\lambda$ 的取值范围, 使得下列实二次型为正定型:

$$
f (x _ {1}, x _ {2}, x _ {3}, x _ {4}) = \lambda x _ {1} ^ {2} + \lambda x _ {2} ^ {2} + \lambda x _ {3} ^ {2} + x _ {4} ^ {2} + 2 x _ {1} x _ {2} + 2 x _ {1} x _ {3} - 2 x _ {2} x _ {3}.
$$

7. 设 n 阶实对称矩阵 A, B 都是正定阵, 问: 分块矩阵 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ 是否是正定阵? ()

8. 任意两个同阶正定阵合同吗？（）

9. 设 A 是 n 阶实矩阵, 问: $A^{\prime}A$ 何时为正定阵? ()

10. n 阶实对称矩阵按合同分类, 共有 ( ) 类.

11. 设秩为 n 的 n 元实二次型 f 和 -f 合同，则 f 的正惯性指数等于（）.

12. 设 A 是正定阵, 问 $A^{*}$ 是否也是正定阵? ()

13. 设 A 是正定阵, 问 $A^{k}(k>1)$ 是否也是正定阵? ()

14. 设实对称矩阵 A 的极小多项式为 $x^{3}-2x$ ，问 A 是否是正定阵？（）

15. 某同学对下列实二次型用配方法求惯性指数:

$$
\begin{array}{l} f \left(x _ {1}, x _ {2}, x _ {3}\right) = x _ {1} ^ {2} + x _ {2} ^ {2} + x _ {3} ^ {2} - x _ {1} x _ {2} - x _ {1} x _ {3} - x _ {2} x _ {3} \\ = \frac {1}{2} \left(x _ {1} - x _ {2}\right) ^ {2} + \frac {1}{2} \left(x _ {2} - x _ {3}\right) ^ {2} + \frac {1}{2} \left(x _ {1} - x _ {3}\right) ^ {2}, \\ \end{array}
$$

因此他认为 f 是正定型. 你认为他的结论是否正确? 如不正确, 指出错误的原因.

#### 三、解答题

1. 求证: 元素全是整数的反对称矩阵的行列式是某个整数的平方.

2. 设矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & a & 1 \\ 0 & 0 & 1 & 2 \end{array} \right)
$$

有一个特征值为 3, 求 a 的值并求可逆矩阵 C, 使得 $(AC)'(AC)$ 是对角矩阵.

3. 化下列实二次型为标准型:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {2 n}\right) = x _ {1} x _ {2 n} + x _ {2} x _ {2 n - 1} + \dots + x _ {n} x _ {n + 1}.
$$

4. 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + \sum_ {i = 1} ^ {n - 1} x _ {i} x _ {i + 1}.
$$

5. 化下列实二次型为标准型:

$$
f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = n \sum_ {i = 1} ^ {n} x _ {i} ^ {2} - \left(\sum_ {i = 1} ^ {n} x _ {i}\right) ^ {2}.
$$

6. 设 A 是 m 阶正定实对称矩阵, B 是 $m \times n$ 实矩阵. 求证: $B'AB$ 是正定阵的充要条件是 $\mathrm{r}(B) = n$ .

7. 设 A 为 n 阶实对称矩阵, 求证:

(1) 若 A 正定, 则对任意的 $x \in R^{n}$ , 有 $0 \leq x'(A + xx')^{-1}x < 1$ ;

(2) 若 A 半正定, 则存在 $x \in R^{n}$ , 使得 $A + xx'$ 正定且 $\boldsymbol{x}'(\boldsymbol{A} + \boldsymbol{x}\boldsymbol{x}')^{-1}\boldsymbol{x} = 1$ 的充要条件是 $\mathrm{r}(\boldsymbol{A}) = n - 1$ .

8. 设 $A = (a_{ij})$ 为 n 阶实矩阵, 满足:

(1) $a_{11} = a_{22} = \dots = a_{nn} = a > 0;$ 

(2) $\sum_{j=1}^{n}|a_{ij}| + \sum_{j=1}^{n}|a_{ji}| < 4a (1 \leq i \leq n)$ . 

试求二次型 $f(x)=x^{\prime}Ax$ 的规范标准型, 其中 $x=(x_{1},x_{2},\cdots,x_{n})^{\prime}$ .

9. 求证: $n$ 阶矩阵 $\mathbf{A} = (a_{ij})$ 是正定阵, 其中 $a_{ij} = \frac{1}{(i + j)^k}$ , $k$ 是任意的正整数.

10. 设 A, B, A - B 都是 n 阶正定实对称矩阵, 问 $A^{2} - B^{2}$ 是否为正定阵? 若成立, 请证之; 若不成立, 请举出反例.

11. 设 A, B 都是 n 阶亚正定阵, c 是正实数, 求证:

(1) $A + B, cA, A', A^{-1}, A^*$ 都是亚正定阵;

(2) 若 C 是 n 阶非异实矩阵, 则 $C^{\prime}AC$ 是亚正定阵;

(3) 若 B 是对称矩阵且 A - B 是亚正定阵, 则 $B^{-1} - A^{-1}$ 也是亚正定阵.

12. 设 A 为 n 阶实对称矩阵, 求证: A 是秩为 r 的半正定阵的充要条件是存在秩等于 r 的 $r \times n$ 实矩阵 B, 使得 $A = B'B$ .

13. 设 A 为 n 阶正定实对称矩阵, B 为 n 阶实矩阵, 使得 $\begin{pmatrix} A & B' \\ B & A^{-1} \end{pmatrix}$ 为半正定阵, 求证: B 的特征值都落在复平面上的单位圆内 (包含边界).

14. 设 A, B 都是 n 阶亚半正定阵, c 为非负实数. 求证:

(1) $A+B,cA,A'$ 和 $A^{*}$ 都是亚半正定阵;

(2) 若 C 是 n 阶实矩阵, 则 $C^{\prime}AC$ 也是亚半正定阵;

(3) 若 C 是 n 阶亚正定阵, 则 $A + C$ 也是亚正定阵;

(4) A 的特征值的实部都大于等于零, 特别地, $|A| \geq 0$ ;

(5) 举例说明: 非异的亚半正定阵不一定是亚正定阵.

15. 设实二次型 $f(x_{1}, x_{2}, \cdots, x_{n})$ 的秩等于 n，符号差等于 s。求证：在 n 维实列向量空间 V 中，存在维数等于 $\frac{1}{2}(n - |s|)$ 的子空间 U，使得对 U 中任一向量 $\alpha, f(\alpha) = 0$ 。

### 8.9.2 训练题答案

#### 一、单选题

1. 应选择 (C).

2. 应选择 (D).

3. 应选择 (B).

4. 应选择 (C). 合同的矩阵有相同的正负惯性指数.

5. 应选择 (C).

6. 应选择 (C). 对相伴矩阵用对称初等变换法化简或用顺序主子式法判定均可.

7. 应选择 (B).

8. 应选择 (C).

9. 应选择 (C). 注意两个对称矩阵之积是对称矩阵当且仅当它们乘法可交换.

10. 应选择 (D).

11. 应选择 (B). 负惯性指数为零并不意味着正惯性指数等于 n (秩可能小于 n).

12. 应选择 (B). 例如正定阵 $A = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ .

13. 应选择 (D). 由顺序主子式法可知 $k$ 不存在.

14. 应选择 (C). (A) 和 (B) 中矩阵的秩小于 3, (D) 中矩阵的主对角线上有负元素, 因此它们都不是正定阵, 故不合同于单位矩阵.

15. 应选择 (C). 对实矩阵 A 而言, $A^{\prime}A$ 总是半正定阵, 只有当 A 可逆时, $A^{\prime}A$ 才是正定阵.

#### 二、填空题

1. 必合同. 设 $B = C'AC$ , 其中 $C$ 是可逆矩阵. 将两边求逆可得 $B^{-1} = C^{-1}A^{-1}(C')^{-1} = C^{-1}A^{-1}(C^{-1})'$ , 此即表明 $A^{-1}$ 和 $B^{-1}$ 合同.

2. 不一定. 若 $A = I_{n}$ , 则 $A^{*} = I_{n}$ , 二者当然合同. 但若 $A = \operatorname{diag}\{1, 1, -1\}$ , 则 $A^{*} = \operatorname{diag}\{-1, -1, 1\}$ , $A$ 和 $A^{*}$ 的正惯性指数不相同, 因此不合同.

3. A 的秩等于 B 的主对角线上非零元素的个数, 即 n - m. B 的主对角线上正实数的个数 t 就是 A 的正惯性指数, 负实数的个数 n - m - t 就是 A 的负惯性指数. 由此可知符号差等于 $2t + m - n$ .

4. 设 A 的正惯性指数为 p，负惯性指数为 q，则 $r = p + q, s = p - q$ 。由不等式 $|p - q| \leq p + q$ 即知 $|s| \leq r$ 。

5. 二次型的系数矩阵为 $\left( \begin{array}{cccc}0 & 1 & -3 & 0\\ 1 & 0 & 0 & -3\\ -3 & 0 & 0 & 1\\ 0 & -3 & 1 & 0 \end{array} \right)$ ，对它施以对称初等变换可求得正惯性指数为

2, 负惯性指数为 2, 因此规范标准型为 $y_{1}^{2} + y_{2}^{2} - y_{3}^{2} - y_{4}^{2}$ .

6. 二次型的系数矩阵为 $A = \begin{pmatrix} \lambda & 1 & 1 & 0 \\ 1 & \lambda & -1 & 0 \\ 1 & -1 & \lambda & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ ，A 的顺序主子式为 $|A_{1}| = \lambda, |A_{2}| =$ 

$\left| \begin{array}{ll}\lambda & 1\\ 1 & \lambda \end{array} \right| = \lambda^2 -1,|\mathbf{A}_3| = \left| \begin{array}{lll}\lambda & 1 & 1\\ 1 & \lambda & -1\\ 1 & -1 & \lambda \end{array} \right| = (\lambda +1)^2 (\lambda -2),|\mathbf{A}_4| = |\mathbf{A}_3| = (\lambda +1)^2 (\lambda -2).$ 要使 $f$ 为正定型，必须有 $\lambda >0,\lambda^2 -1 > 0,( \lambda +1)^2 (\lambda -2) > 0,$ 解得 $\lambda >2.$ 

7. 必正定.

8. 合同. 因为它们都合同于同阶单位矩阵.

9. 当 A 是可逆矩阵时, $A^{\prime}A = A^{\prime}I_{n}A$ , 因此 $A^{\prime}A$ 是正定阵.

10. 共有 $\frac{1}{2}(n+1)(n+2)$ 类.

11. $\frac{n}{2}$ . 

12. $A^{*}$ 是正定阵 (参考例 8.46).

13. $A^k$ 是正定阵. 注意到 $\pmb{A}$ 是可逆矩阵, 故当 $k = 2m$ 是偶数时, $A^k = (A^m)'I_nA^m$ , $A^k$ 和

$I_{n}$ 合同, 因此 $A^{k}$ 仍是正定阵; 当 $k = 2m + 1$ 是奇数时, $\boldsymbol{A}^{k} = (\boldsymbol{A}^{m})' \boldsymbol{A} \boldsymbol{A}^{m}$ , $A^{k}$ 和 A 合同, 因此 $A^{k}$ 仍是正定阵.

14. A 必不是正定阵, 因为 0 是 A 的特征值, 故 $|A| = 0$ .

15. 不正确, 因为他使用的是不可逆线性变换.

#### 三、解答题

1. 设 A 是整数反对称矩阵, 由例 8.16 可知, 存在有理数域上的可逆矩阵 C, 使得 $C'AC$ 为 (8.2) 式所示, 则 $|C|^{2}|A|=|C'AC|=1$ 或 0. 因此 $|A|$ 是某个有理数的平方, 但整数矩阵的行列式是整数, 故 $|A|$ 必是某个整数的平方.

2. 由 $|3I_4 - A| = 0$ 可得 $a = 2$ , 故 $\mathbf{A}'\mathbf{A} = \mathrm{diag}\left\{\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right, \left( \begin{array}{ll}5 & 4 \\ 4 & 5\end{array} \right)\}$ . 经计算可取 $\mathbf{C} = \mathrm{diag}\left\{\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right, \frac{1}{\sqrt{2}}\left( \begin{array}{ll} -1 & 1 \\ 1 & 1\end{array} \right)\}$ ( $\mathbf{C}$ 的选取不唯一), 使得 $(\mathbf{AC})'(\mathbf{AC}) = \mathbf{C}'(\mathbf{A}'\mathbf{A})\mathbf{C} = \mathrm{diag}\{1,1,1,9\}$ .

3. 解法 1: 作如下非异线性变换: $x_{i} = y_{i} + y_{2n+1-i}, x_{2n+1-i} = y_{i} - y_{2n+1-i} (1 \leq i \leq n)$ , 则 $f = y_{1}^{2} + \cdots + y_{n}^{2} - y_{n+1}^{2} - \cdots - y_{2n}^{2}$ . 解法 2: 二次型 $f$ 的系数矩阵 $\mathbf{A}$ 是一个 $2n$ 阶实对称矩阵, 其反对角元全为 $\frac{1}{2}$ , 其余元素全为 0. 由例 8.10 可知 $\mathbf{A}$ 的正负惯性指数都是 $n$ , 因此二次型 $f$ 的规范标准型为 $f = y_{1}^{2} + \cdots + y_{n}^{2} - y_{n+1}^{2} - \cdots - y_{2n}^{2}$ .

4. 解法 1: 用教材 [1] 介绍的配方法可得 $f$ 的标准型为 $(x_{1} + \frac{1}{2} x_{2})^{2} + \frac{3}{4}(x_{2} + \frac{2}{3} x_{3})^{2} + \cdots + \frac{n}{2n - 2}(x_{n - 1} + \frac{n - 1}{n} x_{n})^{2} + \frac{n + 1}{2n} x_{n}^{2}$ . 解法 2: 将二次型配方为 $\frac{1}{2} x_{1}^{2} + \frac{1}{2}(x_{1} + x_{2})^{2} + \frac{1}{2}(x_{2} + x_{3})^{2} + \cdots + \frac{1}{2}(x_{n - 1} + x_{n})^{2} + \frac{1}{2} x_{n}^{2}$ , 从而 $f$ 至少是半正定的. 若上式等于零, 则显然有 $x_{1} = x_{2} = \cdots = x_{n} = 0$ , 因此二次型 $f$ 是正定型. 解法 3: 二次型 $f$ 的系数矩阵 $\mathbf{A}$ 是一个三对角矩阵, 主对角元全为 1, 上下次对角元全为 $\frac{1}{2}$ , 并且 $\mathbf{A}$ 的每个顺序主子式形状相同. 由例 1.14 可知每个顺序主子式均大于零, 于是 $\mathbf{A}$ 是正定阵, 从而二次型 $f$ 为正定型.

5. 解法 1: 将二次型 f 配方为 $\sum_{1\leq i<j\leq n}(x_i-x_j)^2$ ，因此 f 半正定。又 $\operatorname{Ker}f(x)=\{(c,c,\cdots,c)\mid c\in\mathbb{R}\}$ 的维数等于 1，故由例 8.74 可知，f 的规范标准型为 $y_1^2+y_2^2+\cdots+y_{n-1}^2$ 。解法 2: 二次型 f 的系数矩阵为 nA，其中 A 是例 8.34 解法 2 中的矩阵。根据例 8.34 解法 2 中 A 的顺序主子式的计算以及例 8.13 可知，f 的规范标准型为 $y_1^2+y_2^2+\cdots+y_{n-1}^2$ 。

6. 由 A 的正定性可知, $B^{\prime}AB$ 至少是半正定的, 并且 $x^{\prime}(B^{\prime}AB)x = (Bx)^{\prime}A(Bx) = 0$ 当且仅当 Bx = 0. 因此, $B^{\prime}AB$ 是正定阵当且仅当 Bx = 0 只有零解, 再由线性方程组的求解理论可知, 这也当且仅当 $r(B) = n$ .

7. 假设 $A + xx'$ 可逆, 考虑如下对称分块初等变换:

$$
\left(\begin{array}{c c}A&O\\O&1\end{array}\right)\rightarrow \left(\begin{array}{c c}A&x\\O&1\end{array}\right)\rightarrow \left(\begin{array}{c c}A + x x ^ {\prime}&x\\x ^ {\prime}&1\end{array}\right)\rightarrow \left(\begin{array}{c c}A + x x ^ {\prime}&O\\O&1 - x ^ {\prime} (A + x x ^ {\prime}) ^ {- 1} x\end{array}\right). \tag {8.6}
$$

(1) 设 A 正定, 则 $A + xx'$ 也正定, 从而由 (8.6) 式可知 $1 - x'(A + xx')^{-1}x > 0$ , 于是 $0 \leq x'(A + xx')^{-1}x < 1$ . (2) 设 A 半正定, 先证必要性: 分别计算 (8.6) 式两边分块对角矩阵的秩可得 $\mathrm{r}(A)+1=\mathrm{r}(A+xx')=n$ ，故 $\mathrm{r}(A)=n-1$ 。再证充分性：由 A 半正定以及 $\mathrm{r}(A)=n-1$ 可知，存在非异实矩阵 C，使得 $A=C\begin{pmatrix}I_{n-1}&O\\O&0\end{pmatrix}C'$ 。令 $x=C\begin{pmatrix}O\\1\end{pmatrix}\in R^{n}$ ，则 $A+xx'=CC'$ 为正定阵，且 $x'(A + xx')^{-1}x = (O - 1)C'(CC')^{-1}C\begin{pmatrix}O\\1\end{pmatrix}=1.$ 

8. 考虑 A 的对称化 $\frac{1}{2}(A+A')$ ，由假设不难验证这是一个主对角元全大于零的严格对角占优阵，故由例 8.49 可知 $\frac{1}{2}(A+A')$ 是正定阵，因此二次型 $f(x)=\frac{1}{2}x'(A+A')x$ 是正定型，其规范标准型为 $y_{1}^{2}+y_{2}^{2}+\cdots+y_{n}^{2}$ .

9. 由例 8.48 (1) 和例 8.43 即得结论.

10. 一般来说, $A^2 - B^2$ 不一定是正定阵. 例如, $A = \begin{pmatrix} 2.0011 & 0.001 \\ 0.001 & 1.001 \end{pmatrix}$ , $B = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ , 容易验证 $A, B, A - B$ 都是正定阵, 但 $|A^2 - B^2| < 0$ , 从而 $A^2 - B^2$ 不是正定阵.

11. (1) $A + B, cA, A'$ 的亚正定性直接由定义验证即得. 由第6章解答题3可知 $|A| > 0$ , 从而 $A$ 可逆. 对任意的非零实列向量 $\alpha, A^{-1}\alpha \neq 0$ , 故由 $A'$ 的亚正定性可得 $\alpha'A^{-1}\alpha = (A^{-1}\alpha)'A'(A^{-1}\alpha) > 0$ , 于是 $A^{-1}$ 是亚正定阵. 注意到 $A^{*} = |A| \cdot A^{-1}$ , 故 $A^{*}$ 也是亚正定阵. (2) 直接由定义验证即得. (3) 由例2.26可知 $B^{-1} - A^{-1} = (B + B(A - B)^{-1}B)^{-1}$ , 再由(1)和(2)可得 $B^{-1} - A^{-1}$ 是亚正定阵.

12. 若 $A = B'B$ ，则由例 3.76 可得 $\mathrm{r}(A) = \mathrm{r}(B'B) = \mathrm{r}(B) = r$ ，且对任意的 n 维实列向量 $\alpha, \alpha' A \alpha = \alpha' B'B \alpha = (B \alpha)'(B \alpha) \geq 0$ ，因此 A 是秩为 r 的半正定阵。反之，若 A 是秩为 r 的半正定阵，则存在可逆矩阵 C，使得 $A = C' \operatorname{diag}\{1, \cdots, 1, 0, \cdots, 0\} C$ ，其中有 r 个 1。令 $B = (I_r, O)C$ ，则 B 是秩等于 r 的 $r \times n$ 矩阵，且 $A = B'B$ 。

13. 由对称分块初等变换 $\left( \begin{array}{cc} A & B' \\ B & A^{-1} \end{array} \right) \to \left( \begin{array}{cc} A - B'AB & O \\ O & A^{-1} \end{array} \right)$ 可知 $A - B'AB$ 为半正定实对称矩阵, 它也是半正定 Hermite 矩阵. 任取 $B$ 的特征值 $\lambda_0 \in \mathbb{C}$ 及其特征向量 $\alpha \in \mathbb{C}^n$ , 则有 $\overline{\alpha}'(A - B'AB)\alpha \geq 0$ , 即有 $\overline{\alpha}'A\alpha (1 - |\lambda_0|^2) \geq 0$ . 由于 $A$ 是正定实对称矩阵, 也是正定 Hermite 矩阵, 故 $\overline{\alpha}'A\alpha > 0$ , 于是 $1 - |\lambda_0|^2 \geq 0$ , 从而 $|\lambda_0| \leq 1$ .

14. (1) $A + B, cA, A'$ 的亚半正定性直接由定义验证即得。注意到 $A$ 是亚半正定阵的充要条件是对任意的正实数 $t, A + tI_n$ 都是亚正定阵，其证明完全类似于例 8.63 的证明。因此由解答题 11 可知，对任意的正实数 $t, (A + tI_n)^*$ 都是亚正定阵，再令 $t \to 0+$ ，即得 $A^*$ 的亚半正定性。(2) 和 (3) 直接由定义验证即得。(4) 的证明完全类似于第 6 章解答题 3 的证明。至于 $|A| \geq 0$ 的证明，既可以利用特征值实部的非负性，也可以直接利用例 8.66 的结论，还可以利用解答题 11 中亚正定阵行列式值的正性，然后用极限性质和摄动法进行过渡。(5) 例如， $A = \begin{pmatrix} 1 & 1 \\ -1 & 0 \end{pmatrix}$ 满足要求。

15. 设 $x = Cy$ , $f = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_n^2$ , 其中 $p$ 是二次型的正惯性指数. 不失一般性, 可设 $p \leq n - p$ (否则可对 $-f$ 考虑本问题), 则 $s = p - (n - p) = 2p - n \leq 0$ , 从而 $\frac{1}{2}(n - |s|) = p$ 是非负整数. 令 $\beta_i (1 \leq i \leq p)$ 是第 $i$ 坐标和第 $p + i$ 坐标等于 1 , 其他坐标等于 0 的 $n$ 维列向量, 容易验证这 $p$ 个向量线性无关. 令 $\alpha_i = C\beta_i (1 \leq i \leq p)$ , 因为 $C$ 可逆, 故 $\{\alpha_1, \cdots, \alpha_p\}$ 线性无关. 令 $U = L(\alpha_1, \cdots, \alpha_p)$ , 则 $\dim U = \frac{1}{2}(n - |s|)$ , 显然对任意的 $\alpha \in U$ , $f(\alpha) = 0$ .
