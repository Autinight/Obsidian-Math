# 第9章 内积空间

## § 9.1 基本概念

### 9.1.1 内积空间的定义

#### 1. 欧氏空间

设 $V$ 是实数域上的线性空间, 若存在某种规则, 使得对 $V$ 中任意一对有序向量 $\pmb{x},\pmb{y}$ , 都对应一个实数 $(\pmb {x},\pmb{y})$ , 适合如下性质:

(1) $(\boldsymbol{y},\boldsymbol{x})=(\boldsymbol{x},\boldsymbol{y});$ 

(2) $(x+y,z)=(x,z)+(y,z);$ 

(3) $(cx,y)=c(x,y)$ , c 为任一实数;

(4) $(x,x)\geq0,$ 且等号成立当且仅当x=0,

则称在 $V$ 上定义了一个内积. 实数 $(\pmb{x},\pmb{y})$ 称为向量 $\pmb{x}$ 和 $\pmb{y}$ 的内积. 若 $V$ 是 $n$ 维空间, 则称 $V$ 是 $n$ 维欧氏空间.

#### 2. 酉空间

设 $V$ 是复数域上的线性空间, 若存在某种规则, 使得对 $V$ 中任意一对有序向量 $\pmb{x},\pmb{y}$ , 都对应一个复数 $(\pmb {x},\pmb{y})$ , 适合如下性质:

(1) $(\boldsymbol{y}, \boldsymbol{x}) = \overline{(\boldsymbol{x}, \boldsymbol{y})}$ ; 

(2) $(x+y,z)=(x,z)+(y,z);$ 

(3) $(cx,y)=c(x,y)$ , c 为任一复数;

(4) $(x,x)\geq0$ ,且等号成立当且仅当x=0,

则称在 $V$ 上定义了一个内积. 复数 $(\pmb{x}, \pmb{y})$ 称为向量 $\pmb{x}$ 和 $\pmb{y}$ 的内积. 若 $V$ 是 $n$ 维空间, 则称 $V$ 是 $n$ 维酉空间.

欧氏空间和酉空间统称为内积空间.

#### 3. 向量范数或长度

设 V 是内积空间, x 是 V 中的向量, 定义 x 的范数 (长度) 为

$$
\| \boldsymbol {x} \| = (\boldsymbol {x}, \boldsymbol {x}) ^ {\frac {1}{2}}.
$$

#### 4. 距离

设 x, y 是内积空间 V 中的向量, 定义 x, y 之间的距离为 $d(x, y) = \|x - y\|$ .

#### 5. 向量之间的夹角

设 x, y 是内积空间 V 中的非零向量, 定义 x, y 之间的夹角 $\theta$ 的余弦为

$$
\cos \theta = \left\{ \begin{array}{l l} { \frac {(x , y)}{\| x \| \| y \|}} & {(\text {此时} V \text {为实内积空间});} \\ { \frac {| (x , y) |}{\| x \| \| y \|}} & {(\text {此时} V \text {为复内积空间}).} \end{array} \right.
$$

#### 6. 正交

设 x, y 是内积空间 V 中的向量, 若 $(x, y) = 0$ , 则称 x 和 y 正交, 记为 $x \perp y$ .

#### 7. 定理

设 V 是内积空间, x, y 是 V 中的向量, c 是任意常数, 则

(1) $\|cx\| = |c| \cdot \|x\|;$ 

(2) $|(\boldsymbol{x},\boldsymbol{y})|\leq||\boldsymbol{x}||\cdot||\boldsymbol{y}||;$ 

(3) $\|x+y\|\leq\|x\|+\|y\|$ . 

### 9.1.2 正交基

#### 1. 正交基

设 $V$ 是 $n$ 维内积空间, 若 $V$ 有一组基两两正交, 则称这组基为 $V$ 的正交基. 进一步, 若每个基向量的长度都等于 1 , 则称之为标准正交基.

#### 2. 定理

$n$ 维内积空间中两两正交的非零向量组必线性无关; 任意一个 $n$ 维内积空间必有标准正交基.

#### 3. Gram-Schmidt 正交化方法

设 V 是 n 维内积空间, $x_{1}, x_{2}, \cdots, x_{m}$ 是 V 中 m 个线性无关的向量, 令

$$
\begin{array}{l} \boldsymbol {y} _ {1} = \boldsymbol {x} _ {1}, \\ \boldsymbol {y} _ {2} = \boldsymbol {x} _ {2} - \frac {\left(\boldsymbol {x} _ {2} , \boldsymbol {y} _ {1}\right)}{\| \boldsymbol {y} _ {1} \| ^ {2}} \boldsymbol {y} _ {1}, \\ \boldsymbol {y} _ {3} = \boldsymbol {x} _ {3} - \frac {\left(\boldsymbol {x} _ {3} , \boldsymbol {y} _ {1}\right)}{\| \boldsymbol {y} _ {1} \| ^ {2}} \boldsymbol {y} _ {1} - \frac {\left(\boldsymbol {x} _ {3} , \boldsymbol {y} _ {2}\right)}{\| \boldsymbol {y} _ {2} \| ^ {2}} \boldsymbol {y} _ {2}, \\ \boldsymbol {y} _ {m} = \boldsymbol {x} _ {m} - \sum_ {j = 1} ^ {m - 1} \frac {\left(\boldsymbol {x} _ {m} , \boldsymbol {y} _ {j}\right)}{\| \boldsymbol {y} _ {j} \| ^ {2}} \boldsymbol {y} _ {j}, \\ \end{array}
$$

. . . . . . . . . . . . . . 

则 $y_{1}, y_{2}, \cdots, y_{m}$ 是两两正交的非零向量组.

#### 4. 正交补

设 $V$ 是 $n$ 维内积空间, $U$ 是子空间, 则和 $U$ 正交的全体向量组成 $V$ 的一个子空间, 称为 $U$ 的正交补空间, 记为 $U^{\perp}$ .

#### 5. 正交直和

设 $V$ 是 $n$ 维内积空间, $U_{i} (1 \leq i \leq m)$ 是子空间. 假设 $U_{i}$ 两两正交且 $V$ 是 $U_{i}$ 的和空间, 则称 $V$ 是 $U_{i}$ 的正交直和, 记为

$$
V = U _ {1} \perp U _ {2} \perp \dots \perp U _ {m}.
$$

#### 6. 定理

设 V 是 n 维内积空间, U 是子空间, 则

(1) $V = U \perp U^{\perp};$ 

(2) U 的任意一组标准正交基都可以扩张为 V 的一组标准正交基.

### 9.1.3 伴随

#### 1. 定理

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上唯一的线性变换 $\varphi^{*}$ , 使得对任意的 $x, y \in V$ , 都有

$$
(\varphi (x), y) = (x, \varphi^ {*} (y)).
$$

上述 $\varphi^{*}$ 称为线性变换 $\varphi$ 的伴随.

#### 2. 伴随的表示矩阵

设 V 是 n 维内积空间, $\varphi$ 是 V 上的线性变换, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是 V 的一组标准正交基, 且 $\varphi$ 在这组基下的表示矩阵为 A. 若 V 是欧氏空间, 则 $\varphi^{*}$ 在这组基下的表示矩阵为 $A'$ , 即 A 的转置; 若 V 是酉空间, 则 $\varphi^{*}$ 在这组基下的表示矩阵为 $\overline{A}'$ , 即 A 的共轭转置.

#### 3. 伴随的性质

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, $c$ 是某个常数, 则

(1) $(\varphi + \psi)^{*} = \varphi^{*} + \psi^{*}$ ; 

(2) $(c\varphi)^{*} = \overline{c}\varphi^{*};$ 

(3) $(\varphi \psi)^{*} = \psi^{*}\varphi^{*};$ 

(4) $(\varphi^{*})^{*}=\varphi.$ 

### 9.1.4 正交变换与酉变换

#### 1. 定义

设 $V$ 是 $n$ 维内积空间, $\varphi$ 是 $V$ 上的线性变换, 若 $\varphi$ 保持内积, 即对任意的 $x, y \in V$ , $(\varphi(x), \varphi(y)) = (x, y)$ , 则当 $V$ 是欧氏空间时, 称 $\varphi$ 是 $V$ 上的正交变换; 当 $V$ 是酉空间时, 称 $\varphi$ 是 $V$ 上的酉变换.

#### 2. 正交矩阵和酉矩阵

若 $n$ 阶实矩阵 $\pmb{P}$ 适合 $P^{\prime}P = PP^{\prime} = I_{n}$ , 则称为正交矩阵; 若 $n$ 阶复矩阵 $\pmb{U}$ 适合 $\overline{\pmb{U}}^{\prime}\pmb{U} = \pmb{U}\overline{\pmb{U}}^{\prime} = I_{n}$ , 则称为酉矩阵.

#### 3. 定理

欧氏空间上的线性变换 $\varphi$ 是正交变换的充要条件是 $\varphi$ 在某一组（任一组）标准正交基下的表示矩阵是正交矩阵；酉空间上的线性变换 $\varphi$ 是酉变换的充要条件是 $\varphi$ 在某一组（任一组）标准正交基下的表示矩阵是酉矩阵.

### 9.1.5 正规算子

#### 1. 自伴随算子

设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的线性变换, 若 $\varphi = \varphi^{*}$ , 则称 $\varphi$ 是 $V$ 上的自伴随算子. 当 $V$ 是欧氏空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是对称矩阵; 当 $V$ 是酉空间时, $\varphi$ 是自伴随算子的充要条件是 $\varphi$ 在某一组 (任一组) 标准正交基下的表示矩阵是 Hermite 矩阵.

注 当 $V$ 是欧氏空间时, 自伴随算子又称为对称变换; 当 $V$ 是酉空间时, 自伴随算子又称为 Hermite 变换.

#### 2. 定理

设 $\varphi$ 是 $n$ 维内积空间 $V$ 上的自伴随算子, 则存在 $V$ 的一组标准正交基 $\{e_1, e_2, \dots, e_n\}$ , 使得 $\varphi$ 在这组基下的表示矩阵是实对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_i$ 都是 $\varphi$ 的特征向量.

#### 3. 定理

实对称矩阵和 Hermite 矩阵的特征值都是实数.

#### 4. 定理

任意一个实对称矩阵 $A$ 都正交相似于对角矩阵, 即存在正交矩阵 $P$ , 使得 $P'AP$ 是对角矩阵, 且该对角矩阵的主对角元是 $A$ 的特征值. 任意一个 Hermite 矩阵 $H$ 都酉相似于实对角矩阵, 即存在酉矩阵 $U$ , 使得 $\overline{U}'HU$ 是实对角矩阵, 且该对角矩阵的主对角元是 $H$ 的特征值.

#### 5. 正规算子与正规矩阵

设 $\varphi$ 是内积空间 $V$ 上的线性变换, 若 $\varphi \varphi^{*} = \varphi^{*}\varphi$ , 则称 $\varphi$ 是正规算子.

若 $n$ 阶复矩阵 $\mathbf{A}$ 适合 $A\overline{A}' = \overline{A}' A$ , 则称为复正规矩阵; 若 $n$ 阶实矩阵 $\mathbf{A}$ 适合 $A A' = A' A$ , 则称为实正规矩阵.

#### 6. 定理

设 $\varphi$ 是 n 维酉空间 V 上的正规算子, 则存在 V 的一组标准正交基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 使得 $\varphi$ 在这组基下的表示矩阵是对角矩阵, 且该对角矩阵的主对角元就是 $\varphi$ 的特征值, 每个基向量 $e_{i}$ 都是 $\varphi$ 的特征向量.
#### 7. 定理

任一复正规矩阵均酉相似于复对角矩阵.

#### 8. 推论

任一 n 阶酉矩阵均酉相似于下列形状的对角矩阵:

$$
\operatorname{diag} \left\{c _ {1}, c _ {2}, \dots , c _ {n} \right\},
$$

其中 $c_{i}$ 为模长等于 1 的复数.

#### 9. 定理

设 $V$ 是 $n$ 维欧氏空间, $\varphi$ 是 $V$ 上的正规算子, 则存在 $V$ 的一组标准正交基, 使得 $\varphi$ 在这组基下的表示矩阵为下列分块对角矩阵:

$$
\operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\}, \tag {9.1}
$$

其中 $A_{i}$ 为形如 $\begin{pmatrix} a_{i} & b_{i} \\ -b_{i} & a_{i} \end{pmatrix}$ 的二阶实矩阵, $c_{j}$ 是实数.

#### 10. 定理

设 A 是 n 阶实正规矩阵, 则存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $A_{i}$ 为形如 $\begin{pmatrix} a_{i} & b_{i} \\ -b_{i} & a_{i} \end{pmatrix}$ 的二阶实矩阵, $c_{j}$ 是实数.

#### 11. 推论

设 A 是 n 阶正交矩阵, 则存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $A_{i}$ 为形如 $\begin{pmatrix}\cos\theta_{i}&\sin\theta_{i}\\-\sin\theta_{i}&\cos\theta_{i}\end{pmatrix}$ 的二阶实矩阵, $c_{j}=1$ 或 -1.

#### 12. 推论

设 A 是 n 阶实反对称矩阵, 则存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, 0, \dots , 0 \right\},
$$

其中 $A_{i}$ 为形如 $\begin{pmatrix}0 & c_{i} \\ -c_{i} & 0\end{pmatrix}$ 的二阶实矩阵. 特别地, 实反对称矩阵的特征值为零或纯虚数.

### 9.1.6 谱分解和极分解

#### 1. 谱分解定理

设 V 是 n 维内积空间, $\varphi$ 是 V 上的线性变换, 当 V 是欧氏空间时假设 $\varphi$ 是自伴随算子, 当 V 是酉空间时假设 $\varphi$ 是复正规算子. 设 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的所有不同的特征值, $V_{i}$ 是 $\lambda_{i}$ 的特征子空间, 则 V 是诸 $V_{i}$ 的正交直和. 又设 $E_{i}$ 为 V 到 $V_{i}$ 上的正交投影, 则

$$
\varphi = \lambda_ {1} E _ {1} + \lambda_ {2} E _ {2} + \dots + \lambda_ {k} E _ {k}.
$$

#### 2. 极分解定理

设 $V$ 是 $n$ 维酉 (欧氏) 空间, $\varphi$ 是 $V$ 上的线性变换, 则存在 $V$ 上的酉变换 (正交变换) $\omega$ 以及 $V$ 上的半正定自伴随算子 $\psi$ , 使得 $\varphi = \omega \psi$ , 其中 $\psi$ 被 $\varphi$ 唯一确定, 当 $\varphi$ 是可逆线性变换时, $\omega$ 也被 $\varphi$ 唯一确定.

#### 3. 矩阵的极分解

若 $\pmb{A}$ 是 $n$ 阶实矩阵, 则存在 $n$ 阶正交矩阵 $\pmb{Q}$ 和半正定实对称矩阵 $\pmb{S}$ , 使得 $\pmb{A} = \pmb{Q}\pmb{S}$ . 若 $\pmb{B}$ 是 $n$ 阶复矩阵, 则存在 $n$ 阶酉矩阵 $\pmb{U}$ 和半正定 Hermite 矩阵 $\pmb{H}$ , 使得 $\pmb{B} = \pmb{U}\pmb{H}$ . 上述分解式当 $\pmb{A}, \pmb{B}$ 是可逆矩阵时是唯一的.

### 9.1.7 奇异值分解

#### 1. 定理

设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在唯一的线性映射 $\varphi^{*}: U \to V$ , 使得对任意的 $\pmb{v} \in V, \pmb{u} \in U$ , 总有

$$
(\varphi (\boldsymbol {v}), \boldsymbol {u}) = (\boldsymbol {v}, \varphi^ {*} (\boldsymbol {u})).
$$

上述 $\varphi^{*}$ 称为线性映射 $\varphi$ 的伴随.

#### 2.奇异值

设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 若存在非负实数 $\sigma$ 以及非零向量 $\pmb{v} \in V, \pmb{u} \in U$ , 使得

$$
\varphi (\boldsymbol {v}) = \sigma \boldsymbol {u}, \quad \varphi^ {*} (\boldsymbol {u}) = \sigma \boldsymbol {v},
$$

则称 $\sigma$ 是 $\varphi$ 的奇异值, $v, u$ 分别称为 $\varphi$ 关于 $\sigma$ 的右奇异向量与左奇异向量.

#### 3.奇异值分解定理

设 $V, U$ 分别为 $n, m$ 维欧氏空间 (酉空间), $\varphi: V \to U$ 是线性映射, 则存在 $V$ 和 $U$ 的标准正交基, 使得 $\varphi$ 在这两组基下的表示矩阵为

$$
\left( \begin{array}{c c} s & o \\ o & o \end{array} \right),
$$

其中 $S = \text{diag}\{\sigma_{1}, \sigma_{2}, \cdots, \sigma_{r}\}$ , $\sigma_{1} \geq \sigma_{2} \geq \cdots \geq \sigma_{r} > 0$ 是 $\varphi$ 的非零奇异值.

#### 4. 矩阵的奇异值分解

设 $\mathbf{A}$ 为 $m \times n$ 实矩阵 (复矩阵), 则存在 $m$ 阶正交矩阵 (酉矩阵) $\mathbf{P}, n$ 阶正交矩阵 (酉矩阵) $\mathbf{Q}$ , 使得

$$
A = P \left( \begin{array}{c c} S & O \\ O & O \end{array} \right) Q,
$$

其中 $S = \text{diag}\{\sigma_{1}, \sigma_{2}, \cdots, \sigma_{r}\}$ , $\sigma_{1} \geq \sigma_{2} \geq \cdots \geq \sigma_{r} > 0$ 是 A 的非零奇异值.

## § 9.2 内积空间与 Gram 矩阵

如果实线性空间 (或复线性空间) $V$ 上附加了一个满足对称性 (共轭对称性)、第一变量的线性以及正定性的二元运算 $(-,-)$ , 则这个二元运算就称为 $V$ 上的内积, 而带有内积结构的实线性空间 (或复线性空间) $V$ 就称为实内积空间 (复内积空间). 我们可把线性空间 $V$ 看成是底空间, 而把内积看成是附加在 $V$ 上的度量结构, 因此 $V$ 的维数和基, 以及 $V$ 上的线性变换等都是由底空间的线性结构诱导出来的. 本章将重点阐述的是, 在添加了内积结构之后, $V$ 和 $V$ 上的线性变换具有的进一步的性质以及相关的应用等.

下面的例题给出了常见线性空间上的内积结构.

例 9.1 证明下列线性空间在给定的二元运算下成为内积空间:

(1) 设 $V = \mathbb{R}^n$ 为 $n$ 维实列向量空间, $\pmb{G}$ 为 $n$ 阶正定实对称矩阵, 对任意的 $\alpha, \beta \in V$ , 定义 $(\alpha, \beta) = \alpha' G \beta$ ;

(2) 设 $V = \mathbb{R}_n$ 为 $n$ 维实行向量空间, $\pmb{G}$ 为 $n$ 阶正定实对称矩阵, 对任意的 $\alpha, \beta \in V$ , 定义 $(\alpha, \beta) = \alpha G \beta'$ ;

(3) 设 $V = \mathbb{C}^n$ 为 $n$ 维复列向量空间, $\pmb{H}$ 为 $n$ 阶正定 Hermite 矩阵, 对任意的 $\alpha, \beta \in V$ , 定义 $(\alpha, \beta) = \alpha' H \overline{\beta}$ ;

(4) 设 $V = \mathbb{C}^n$ 为 $n$ 维复行向量空间, $\pmb{H}$ 为 $n$ 阶正定 Hermite 矩阵, 对任意的 $\alpha, \beta \in V$ , 定义 $(\alpha, \beta) = \alpha H \overline{\beta}'$ ;

(5) 设 $V = C[a, b]$ 为闭区间 $[a, b]$ 上的连续函数全体构成的实线性空间, 对任意的 $f(t), g(t) \in V$ , 定义 $(f(t), g(t)) = \int_{a}^{b} f(t) g(t) \mathrm{d}t$ ;

(6) 设 $V = \mathbb{R}[x]$ 为实系数多项式全体构成的实线性空间，对任意的 $f(x) = a_{0} + a_{1}x + \cdots + a_{n}x^{n}, g(x) = b_{0} + b_{1}x + \cdots + b_{m}x^{m}$ ，定义 $(f(x), g(x)) = a_{0}b_{0} + a_{1}b_{1} + \cdots + a_{k}b_{k}$ ，其中 $k = \min\{n, m\}$ ;

(7) 设 $V = M_{n}(\mathbb{R})$ 为 n 阶实矩阵全体构成的实线性空间, 对任意的 $\boldsymbol{A} = (a_{ij})$ , $\boldsymbol{B} = (b_{ij}) \in V$ , 定义 $(\boldsymbol{A}, \boldsymbol{B}) = \operatorname{tr}(\boldsymbol{A}\boldsymbol{B}') = \sum_{i,j=1}^{n} a_{ij} b_{ij};$ 

(8) 设 $V = M_{n}(\mathbb{C})$ 为 $n$ 阶复矩阵全体构成的复线性空间, 对任意的 $\mathbf{A} = (a_{ij})$ , $\mathbf{B} = (b_{ij}) \in V$ , 定义 $(\mathbf{A}, \mathbf{B}) = \operatorname{tr}(\mathbf{A}\overline{\mathbf{B}}^{\prime}) = \sum_{i,j=1}^{n} a_{ij} \overline{b_{ij}}$ .

证明 (1) 首先注意到 $\alpha'G\beta$ 是一个数, $G$ 是实对称矩阵, 故它们都等于自身的转置, 从而 $(\alpha, \beta) = \alpha'G\beta = (\alpha'G\beta)' = \beta'G'\alpha = \beta G\alpha' = (\beta, \alpha)$ , 即得对称性; 其次由矩阵乘法的性质可得第一变量的线性; 最后由 $G$ 的正定性可知, $(\alpha, \alpha) = \alpha'G\alpha \geq 0$ , 且等号成立当且仅当 $\alpha = 0$ , 即得正定性. 因此上述二元运算是 $\mathbb{R}^n$ 上的内积, 称为由正定实对称矩阵 $G$ 定义的内积. 当 $G = I_n$ 时, 上述内积称为 $\mathbb{R}^n$ 上的标准内积.

(2) 类似于 (1) 的证明可得. 当 $G = I_{n}$ 时, 上述内积称为 $\mathbb{R}_n$ 上的标准内积.

(3) 首先注意到 $\overline{H}^{\prime} = H$ , 故 $(\alpha, \beta) = \overline{\alpha}^{\prime} \overline{H} \beta = (\overline{\alpha}^{\prime} \overline{H} \beta)^{\prime} = \beta^{\prime} \overline{H}^{\prime} \overline{\alpha} = \beta^{\prime} H \overline{\alpha} = (\beta, \alpha)$ , 即得共轭对称性; 其次由矩阵乘法的性质可得第一变量的线性; 最后由 $H$ 的正定性可知, $(\alpha, \alpha) = \alpha^{\prime} H \overline{\alpha} \geq 0$ , 且等号成立当且仅当 $\alpha = 0$ , 即得正定性. 因此上述二元运算是 $\mathbb{C}^{n}$ 上的内积, 称为由正定 Hermite 矩阵 $H$ 定义的内积. 当 $H = I_{n}$ 时, 上述内积称为 $\mathbb{C}^{n}$ 上的标准内积.

(4) 类似于 (3) 的证明可得. 当 $H = I_{n}$ 时, 上述内积称为 $\mathbb{C}_{n}$ 上的标准内积.

(5) 对称性显然成立; 由积分运算的线性可得第一变量的线性; 由连续函数的性

质可得正定性, 因此上述二元运算是 $C[a,b]$ 上的内积.

(6) 容易验证对称性、第一变量的线性和正定性都成立.

(7) 参考 § 2.7, 由求迹运算的对称性、线性和正定性即得上述二元运算的对称性、线性和正定性, 因此它是 $M_{n}(\mathbb{R})$ 上的内积.

(8) 证明是类似的. 这两种由矩阵的迹定义的内积称为矩阵空间上的 Frobenius 内积. $\square$ 

内积空间 $V$ 中向量 $\alpha$ 的范数（长度）定义为 $\| \alpha \| = (\alpha, \alpha)^{\frac{1}{2}}$ ，因此由内积的正定性可得范数的正定性，即 $\| \alpha \| \geq 0$ ，且等号成立当且仅当 $\alpha = 0$ 。§§ 9.1.1 定理 7 还给出了范数其他重要的性质，例如 Cauchy-Schwarz 不等式和三角不等式等。作为内积正定性的另一个应用，我们有如下简单实用的技巧。

例 9.2 设 V 为内积空间, 求证:

(1) 若 $(\alpha, \beta) = 0$ 对任意的 $\beta \in V$ 都成立, 则 $\alpha = 0$ ; 若 $(\alpha, \beta) = 0$ 对任意的 $\alpha \in V$ 都成立, 则 $\beta = 0$ ;

(2) 设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是 V 的一组基，若 $(\alpha, e_{i}) = (\beta, e_{i})$ 对任意的 i 都成立，则 $\alpha = \beta$ .

证明 (1) 若 $(\alpha, \beta) = 0$ 对任意的 $\beta \in V$ 都成立, 令 $\beta = \alpha$ , 可得 $(\alpha, \alpha) = 0$ , 由内积的正定性即得 $\alpha = 0$ . 同理可证另一情形.

(2) 若 $(\boldsymbol{\alpha}, \boldsymbol{e}_{i}) = (\boldsymbol{\beta}, \boldsymbol{e}_{i})$ 对任意的 i 都成立，则 $(\boldsymbol{\alpha} - \boldsymbol{\beta}, \boldsymbol{e}_{i}) = 0$ 对任意的 i 都成立.
设 $\alpha-\beta=\sum_{i=1}^{n}c_{i}e_{i}$ ，则由第二变量的共轭线性可得 $(\boldsymbol{\alpha}-\boldsymbol{\beta},\boldsymbol{\alpha}-\boldsymbol{\beta})=(\boldsymbol{\alpha}-\boldsymbol{\beta},\sum_{i=1}^{n}c_{i}\boldsymbol{e}_{i})=$ $\sum_{i=1}^{n}\overline{c_{i}}(\boldsymbol{\alpha}-\boldsymbol{\beta},\boldsymbol{e}_{i})=0,$ 再由内积的正定性即得 $\alpha=\beta.$ ☐

注 由实内积的对称性可推出第二变量的线性, 然而复内积的共轭对称性只能推出第二变量的共轭线性, 这是实内积和复内积的区别之一, 请读者务必注意. 因为实数的共轭等于自身, 所以实内积空间的定义相容于复内积空间的定义. 因此在后面很多例题的叙述和解答的过程中, 除非题目已标明是哪一类内积空间, 否则我们一般都按照复内积空间的情形来处理.

设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是内积空间 V 的一组基，令 $g_{ij} = (e_{i}, e_{j})$ ，则 $G = (g_{ij})_{n \times n}$ 称为内积空间 V 关于基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 的 Gram 矩阵或度量矩阵。设 $\alpha, \beta \in V$ 在上述基下的坐标向量分别为 x, y，则有

$$
(\alpha , \beta) = \left\{ \begin{array}{l l} x ^ {\prime} G y & (\text {此时} V \text {为欧氏空间}); \\ x ^ {\prime} G \overline {{y}} & (\text {此时} V \text {为酉空间}). \end{array} \right. \tag {9.2}
$$

进一步, 由内积的对称性 (共轭对称性) 和正定性可知 $G$ 是正定实对称矩阵 (正定 Hermite 矩阵), 于是 $V$ 上的一个内积结构对应于一个 $n$ 阶正定实对称矩阵 ( $n$ 阶正定 Hermite 矩阵) $G$ . 反之, 一个 $n$ 阶正定实对称矩阵 ( $n$ 阶正定 Hermite 矩阵) $G$ 按照 (9.2) 式可以定义 $V$ 上的一个内积结构 (验证方法与例 9.1 (1) 和 (3) 类似). 因此, 若取定 $n$ 维实 (复) 线性空间 $V$ 上的一组基, 则 $V$ 上的内积结构全体与 $n$ 阶正定实对称矩阵 ( $n$ 阶正定 Hermite 矩阵) 全体之间存在着一个一一对应. 正是在这个意义下, 线性空间上的内积结构的研究等价于 Gram 矩阵的研究, 即等价于正定实对称矩阵 (正定 Hermite 矩阵) 的研究, 这也是我们在第 8 章研究正定阵的重要原因.

我们也可以考虑另一个方向的问题: 若取定 $n$ 维实 (复) 线性空间 $V$ 上的一种内积结构, 使之成为实 (复) 内积空间, 那么不同基的 Gram 矩阵之间会有怎样的关系呢? 下面的例题告诉我们, 它们之间是合同 (复相合) 的关系.

例 9.3 设 V 为 n 维内积空间, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 和 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 分别是 V 的两组基. 设基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 的 Gram 矩阵为 G, 基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的 Gram 矩阵为 H, 从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵为 C. 求证: 若 V 为欧氏空间, 则 $H = C'GC$ ; 若 V 为酉空间, 则 $H = C'GC$ .

证明 设 $V$ 为酉空间, $\pmb{G} = (g_{ij})$ , $\pmb{H} = (h_{ij})$ , $\pmb{C} = (c_{ij})$ , 则 $\pmb{f}_k = \sum_{i=1}^{n} c_{ik} \pmb{e}_i$ , 于是

$$
h _ {k l} = \left(\boldsymbol {f} _ {k}, \boldsymbol {f} _ {l}\right) = \left(\sum_ {i = 1} ^ {n} c _ {i k} \boldsymbol {e} _ {i}, \sum_ {j = 1} ^ {n} c _ {j l} \boldsymbol {e} _ {j}\right) = \sum_ {i, j = 1} ^ {n} c _ {i k} \overline {{c _ {j l}}} (\boldsymbol {e} _ {i}, \boldsymbol {e} _ {j}) = \sum_ {i, j = 1} ^ {n} c _ {i k} g _ {i j} \overline {{c _ {j l}}}.
$$

上式左边是 H 的第 $(k,l)$ 元素, 右边是 $C^{\prime}G\overline{C}$ 的第 $(k,l)$ 元素, 从而结论得证. □

例 9.4 设 V 是 n 维实 (复) 内积空间, H 是一个 n 阶正定实对称矩阵 (正定 Hermite 矩阵), 求证: 必存在 V 上的一组基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ , 使得它的 Gram 矩阵就是 H.

证明 任取 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ ，设其 Gram 矩阵为 G，这也是一个 n 阶正定实对称矩阵（正定 Hermite 矩阵），于是 G 与 H 合同（复相合），即存在 n 阶非异阵 $C = (c_{ij})$ ，使得 $H = C'GC(H = C'GC\overline{C})$ 。令 $f_{j} = \sum_{i=1}^{n} c_{ij} e_{i} (1 \leq j \leq n)$ ，则由 C 非异可知 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 是 V 的一组基，并且从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵恰为 C，再由例 9.3 可知，基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的 Gram 矩阵就是 $C'GC = H (C'GC\overline{C} = H)$ 。☐

例 9.4 告诉我们, 若给定一个 n 维实 (复) 内积空间 V, 则从 V 所有的基构成的集合到所有 n 阶正定实对称矩阵 (n 阶正定 Hermite 矩阵) 构成的集合有一个满映射, 它将 $V$ 的一组基映为这组基的 Gram 矩阵. 这个映射当然不会是单映射, 请读者自行思考其中的原因.

Gram 矩阵的概念还可以推广到内积空间中的任一向量组, 我们来看如下例题 (酉空间的情形同理可得).

例 9.5 设 $v_{1}, v_{2}, \cdots, v_{m}$ 是欧氏空间 V 中 m 个向量, 矩阵

$$
\boldsymbol {G} = \boldsymbol {G} (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}) = \left( \begin{array}{c c c c} (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {1}) & (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}) & \dots & (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {m}) \\ (\boldsymbol {v} _ {2}, \boldsymbol {v} _ {1}) & (\boldsymbol {v} _ {2}, \boldsymbol {v} _ {2}) & \dots & (\boldsymbol {v} _ {2}, \boldsymbol {v} _ {m}) \\ \vdots & \vdots & & \vdots \\ (\boldsymbol {v} _ {m}, \boldsymbol {v} _ {1}) & (\boldsymbol {v} _ {m}, \boldsymbol {v} _ {2}) & \dots & (\boldsymbol {v} _ {m}, \boldsymbol {v} _ {m}) \end{array} \right)
$$

称为向量 $v_{1}, v_{2}, \cdots, v_{m}$ 的 Gram 矩阵. 求证:

(1) G 是半正定实对称矩阵;

(2) 向量组 $v_{1}, v_{2}, \cdots, v_{m}$ 线性无关当且仅当 G 是正定阵，也当且仅当 G 是可逆矩阵.

证明 (1) 由内积的对称性可知 $G$ 是实对称矩阵. 对任意的实列向量 $\alpha = (a_{1}, a_{2}, \cdots, a_{m})'$ , 令 $\pmb{v} = a_{1}\pmb{v}_{1} + a_{2}\pmb{v}_{2} + \cdots + a_{m}\pmb{v}_{m}$ , 则有

$$
\boldsymbol {\alpha} ^ {\prime} \boldsymbol {G} \boldsymbol {\alpha} = \sum_ {i, j = 1} ^ {m} a _ {i} a _ {j} (\boldsymbol {v} _ {i}, \boldsymbol {v} _ {j}) = (\sum_ {i = 1} ^ {m} a _ {i} \boldsymbol {v} _ {i}, \sum_ {j = 1} ^ {m} a _ {j} \boldsymbol {v} _ {j}) = (\boldsymbol {v}, \boldsymbol {v}) \geq 0,
$$

因此 G 是半正定阵.

(2) 注意到半正定阵 $G$ 是正定阵当且仅当 $G$ 是非异阵, 故两个充要条件只要证明其中一个即可. 我们用两种方法来证明它们.

证法1 若 $v_{1}, v_{2}, \cdots, v_{m}$ 线性无关，则对任意的非零实列向量 $\boldsymbol{\alpha} = (a_{1}, a_{2}, \cdots, a_{m})'$ ， $v = a_{1}v_{1} + a_{2}v_{2} + \cdots + a_{m}v_{m} \neq 0$ ，从而 $\boldsymbol{\alpha}'\boldsymbol{G}\boldsymbol{\alpha} = (\boldsymbol{v}, \boldsymbol{v}) > 0$ ，故 G 是正定阵。若 $v_{1}, v_{2}, \cdots, v_{m}$ 线性相关，则存在非零实列向量 $\boldsymbol{\alpha} = (a_{1}, a_{2}, \cdots, a_{m})'$ ，使得 $v = a_{1}v_{1} + a_{2}v_{2} + \cdots + a_{m}v_{m} = 0$ ，从而 $\boldsymbol{\alpha}'\boldsymbol{G}\boldsymbol{\alpha} = (\boldsymbol{v}, \boldsymbol{v}) = 0$ ，故 G 不是正定阵。

证法 2 假设 $v_{1}, v_{2}, \cdots, v_{m}$ 线性相关，则存在不全为零的数 $k_{1}, k_{2}, \cdots, k_{m}$ ，使得 $k_{1}v_{1} + k_{2}v_{2} + \cdots + k_{m}v_{m} = 0$ 。将 $k_{i}$ 乘以 G 的第 i 行后求和得到

$$
\left(k _ {1} \boldsymbol {v} _ {1} + k _ {2} \boldsymbol {v} _ {2} + \dots + k _ {m} \boldsymbol {v} _ {m}, \boldsymbol {v} _ {j}\right) = 0, \quad 1 \leq j \leq m, \tag {9.3}
$$

即 G 的 m 个行向量线性相关, 因此 G 不是可逆矩阵. 反之, 若 G 不可逆, 则 G 的 m 个行向量线性相关, 即存在不全为零的数 $k_{1}, k_{2}, \cdots, k_{m}$ , 使得 (9.3) 式成立. 于是

$$
\left(k _ {1} \boldsymbol {v} _ {1} + k _ {2} \boldsymbol {v} _ {2} + \dots + k _ {m} \boldsymbol {v} _ {m}, k _ {1} \boldsymbol {v} _ {1} + k _ {2} \boldsymbol {v} _ {2} + \dots + k _ {m} \boldsymbol {v} _ {m}\right) = 0,
$$

从而 $k_{1}v_{1} + k_{2}v_{2} + \cdots + k_{m}v_{m} = 0$ ，因此 $v_{1}, v_{2}, \cdots, v_{m}$ 线性相关。☐

注 向量组 $v_{1}, v_{2}, \cdots, v_{m}$ 的 Gram 矩阵的几何意义是, 这 m 个向量张成的平行 2m 面体的体积等于其 Gram 矩阵的行列式的算术平方根 (证明可参考例 9.15):

$$
V (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}) = | \boldsymbol {G} (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}) | ^ {\frac {1}{2}}.
$$

特别地, 设 $V = R^{n}$ (取标准内积), n 阶实矩阵 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为其列分块, 则 $G(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}) = A'A$ , 于是 $V(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}) = |A'A|^{\frac{1}{2}} = \text{abs}(|A|)$ . 因此, n 阶行列式的绝对值等于其 n 个列向量张成的平行 2n 面体的体积, 这就是 n 阶行列式的几何意义.

内积的正定性在前面几道例题以及下面这道例题的证明中都发挥了重要的作用.

例 9.6 证明: 在 n 维欧氏空间 V 中, 两两夹角大于直角的向量个数至多是 $n + 1$ 个.

证明 用反证法证明. 假设存在 $n + 2$ 个两两夹角大于直角的向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n+1}, \alpha_{n+2} \in V$ , 则由 $\dim V = n$ 可知, $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n+1}$ 必线性相关, 即存在不全为零的实数 $c_{1}, c_{2}, \cdots, c_{n+1}$ , 使得 $c_{1} \alpha_{1} + c_{2} \alpha_{2} + \cdots + c_{n+1} \alpha_{n+1} = 0$ . 将此式按照系数正负整理为如下形式:

$$
\sum_ {c _ {i} > 0} c _ {i} \alpha_ {i} = \sum_ {c _ {j} <   0} (- c _ {j}) \alpha_ {j}. \tag {9.4}
$$

由 $c_{1}, c_{2}, \cdots, c_{n+1}$ 不全为零不妨设存在某个 $c_{i} > 0$ . 若 (9.4) 式两边都等于零, 则有

$$
0 = (\sum_ {c _ {i} > 0} c _ {i} \alpha_ {i}, \alpha_ {n + 2}) = \sum_ {c _ {i} > 0} c _ {i} (\alpha_ {i}, \alpha_ {n + 2}) <   0,
$$

矛盾. 因此 (9.4) 式两边都非零, 从而也存在某个 $c_{j} < 0$ , 于是

$$
0 <   \left(\sum_ {c _ {i} > 0} c _ {i} \alpha_ {i}, \sum_ {c _ {i} > 0} c _ {i} \alpha_ {i}\right) = \left(\sum_ {c _ {i} > 0} c _ {i} \alpha_ {i}, \sum_ {c _ {j} <   0} (- c _ {j}) \alpha_ {j}\right) = \sum_ {c _ {i} > 0} \sum_ {c _ {j} <   0} c _ {i} (- c _ {j}) (\alpha_ {i}, \alpha_ {j}) <   0,
$$

矛盾. 例如, 不妨设 $V = \mathbb{R}^n$ (取标准内积), 则向量 $\alpha_1 = (n, -1, \cdots, -1)'$ , $\alpha_2 = (-1, n, \cdots, -1)'$ , $\alpha_n = (-1, -1, \cdots, n)'$ , $\alpha_{n+1} = (-1, -1, \cdots, -1)'$ 就满足两两夹角大于直角. 因此, $n+1$ 就是两两夹角大于直角的向量个数的最佳上界, 结论得证. □

注 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{n+1}$ 是 n 维欧氏空间 V 中两两夹角大于直角的 $n+1$ 个向量, 利用与例 9.6 的证明完全类似的讨论还能证明:

(1) $\alpha_{1},\alpha_{2},\cdots,\alpha_{n+1}$ 中任意n个向量必线性无关;

(2) $\alpha_{1},\alpha_{2},\cdots,\alpha_{n+1}$ 中任一向量必为其余向量的负系数线性组合.

我们把上述两个推论的证明留给读者完成.

利用内积与正定实对称矩阵 (正定 Hermite 矩阵) 之间的关系, 我们可以用代数方法来解决几何问题, 也可以用几何方法来处理代数问题, 下面是几个典型的例题.

例 9.7 设 V 是 n 维欧氏空间, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是 V 的一组基, $c_{1}, c_{2}, \cdots, c_{n}$ 是 n 个实数, 求证: 存在唯一的向量 $\alpha \in V$ , 使得对任意的 $i, (\alpha, e_{i}) = c_{i}$ .

证明 设 $\alpha = x_{1}e_{1} + x_{2}e_{2} + \cdots + x_{n}e_{n}$ ，则 $(\alpha, e_{i}) = c_{i} (1 \leq i \leq n)$ 等价于如下线性方程组：

$$
\left\{ \begin{array}{l} (e _ {1}, e _ {1}) x _ {1} + (e _ {1}, e _ {2}) x _ {2} + \dots + (e _ {1}, e _ {n}) x _ {n} = c _ {1}, \\ (e _ {2}, e _ {1}) x _ {1} + (e _ {2}, e _ {2}) x _ {2} + \dots + (e _ {2}, e _ {n}) x _ {n} = c _ {2}, \\ \dots \dots \\ (e _ {n}, e _ {1}) x _ {1} + (e _ {n}, e _ {2}) x _ {2} + \dots + (e _ {n}, e _ {n}) x _ {n} = c _ {n}. \end{array} \right.
$$

注意到上述方程组的系数矩阵是基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 的 Gram 矩阵，故其行列式非零，从而上述方程组有唯一解，于是满足条件的 $\alpha$ 存在且唯一。☐

例 9.8 设 V 是实系数多项式全体构成的实线性空间, 任取

$$
f (x) = a _ {0} + a _ {1} x + \dots + a _ {n} x ^ {n}, \quad g (x) = b _ {0} + b _ {1} x + \dots + b _ {m} x ^ {m},
$$

证明: 如下定义的二元运算是 V 上的内积:

$$
(f, g) = \sum_ {i, j} \frac {a _ {i} b _ {j}}{i + j + 1}.
$$

证明 容易验证 $(f(x), g(x)) = \int_{0}^{1} f(x) g(x) \, dx$ ，故由例 9.1 (5) 即得结论。因为 $1, x, \cdots, x^{n-1}$ 是 V 中一组线性无关的向量，所以由例 9.5 知其 Gram 矩阵 $A = \left(\frac{1}{i + j - 1}\right)_{n \times n}$ 是一个正定阵，这也给出了例 8.48 (2) 的几何证明。☐

例 9.9 设 A 是 n 阶半正定实对称矩阵, 求证: 对任意的 n 维实列向量 x, y, 有

$$
(x ^ {\prime} A y) ^ {2} \leq (x ^ {\prime} A x) (y ^ {\prime} A y).
$$

证法1 由例8.63可知, 对任意正实数 $t$ , $\mathbf{A} + t\mathbf{I}_n$ 都是正定阵, 这决定了 $n$ 维列向量空间 $\mathbb{R}^n$ 上的一个内积, 故由Cauchy-Schwarz不等式可得

$$
\left(\boldsymbol {x} ^ {\prime} (\boldsymbol {A} + t \boldsymbol {I} _ {n}) \boldsymbol {y}\right) ^ {2} \leq \left(\boldsymbol {x} ^ {\prime} (\boldsymbol {A} + t \boldsymbol {I} _ {n}) \boldsymbol {x}\right) \left(\boldsymbol {y} ^ {\prime} (\boldsymbol {A} + t \boldsymbol {I} _ {n}) \boldsymbol {y}\right).
$$

注意到上式两边都是关于 t 的连续函数, 同时取极限, 令 $t \rightarrow 0+$ , 即得结论.

证法 2 由于 A 半正定, 故存在实矩阵 C, 使得 $A = C'C$ . 考虑 n 维列向量空间 $R^{n}$ 上的标准内积, 由 Cauchy-Schwarz 不等式可得

$$
(x ^ {\prime} A y) ^ {2} = (C x, C y) ^ {2} \leq \| C x \| ^ {2} \| C y \| ^ {2} = (x ^ {\prime} A x) (y ^ {\prime} A y).
$$

证法 3 因为 A 是半正定阵, 故对任意的实数 t, 有

$$
(\boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {x}) t ^ {2} + 2 (\boldsymbol {x} ^ {\prime} \boldsymbol {A} \boldsymbol {y}) t + (\boldsymbol {y} ^ {\prime} \boldsymbol {A} \boldsymbol {y}) = (t \boldsymbol {x} + \boldsymbol {y}) ^ {\prime} \boldsymbol {A} (t \boldsymbol {x} + \boldsymbol {y}) \geq 0.
$$

若 $x^{\prime}Ax = 0$ ，则由例8.71可知 $Ax = 0$ ，从而 $x^{\prime}Ay = (Ax)^{\prime}y = 0$ ，于是结论成立.若 $x^{\prime}Ax\neq 0$ ，则上述关于 $t$ 的二次方程恒大于等于零当且仅当其判别式小于等于零，由此即得要证的结论.□

本节的大部分结论都有实和复对应的两个版本, 但实内积空间和复内积空间之间还是存在着一些差异, 我们来看下面的例题.

例 9.10 证明: 在 $R^{n}$ (取标准内积) 中存在一个非零线性变换 $\varphi$ , 使 $\varphi(\alpha) \perp \alpha$ 对任意的 $\alpha \in R^{n}$ 成立, 但是在 $C^{n}$ (取标准内积) 中这样的非零线性变换不存在.

证明 任取一个 $n$ 阶非零实反对称矩阵 $\pmb{A}$ , 对任意的 $\alpha \in \mathbb{R}^n$ , 定义 $\varphi(\alpha) = A\alpha$ , 则由例2.5可得 $(\alpha, \varphi(\alpha)) = \alpha' A\alpha = 0$ . 下面给出 $\mathbb{C}^n$ 情形的3种证法. 用反证法来证明, 设在 $\mathbb{C}^n$ (取标准内积) 中存在满足条件的非零线性变换 $\varphi$ .

证法1 设 $\{e_1, e_2, \cdots, e_n\}$ 是 $\mathbb{C}^n$ 的标准单位列向量, $\varphi$ 在这组基下的表示矩阵为 $A = (a_{ij})$ , 则对任意的 $\alpha \in \mathbb{C}^n$ , $\varphi(\alpha) = A\alpha$ . 由假设可知, 对任意的 $\alpha \in \mathbb{C}^n$ , 有 $(\varphi(\alpha), \alpha) = \alpha' A' \overline{\alpha} = 0$ . 取 $\alpha = e_i$ , 代入条件可得 $a_{ii} = 0 (1 \leq i \leq n)$ . 取 $\alpha = e_i + e_j$ , 代入条件可得 $a_{ij} + a_{ji} = 0 (1 \leq i < j \leq n)$ . 取 $\alpha = e_i + i e_j$ , 代入条件可得 $a_{ij} - a_{ji} = 0 (1 \leq i < j \leq n)$ . 于是 $a_{ij} = a_{ji} = 0 (1 \leq i < j \leq n)$ , 从而 $A = O$ , 这与 $\varphi \neq 0$ 矛盾!

证法2 首先, 我们证明 $\varphi$ 的特征值全部为零. 设 $\lambda_0$ 是 $\varphi$ 的特征值, $\alpha$ 是对应的特征向量, 则 $0 = (\varphi(\alpha), \alpha) = (\lambda_0\alpha, \alpha) = \lambda_0(\alpha, \alpha)$ , 由于 $(\alpha, \alpha) \neq 0$ , 故只能是 $\lambda_0 = 0$ . 其次, 由 Jordan 标准型理论可知, 存在 $\mathbb{C}^n$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为 $\operatorname{diag}\{J_{r_1}(0), J_{r_2}(0), \cdots, J_{r_k}(0)\}$ . 若 $\varphi$ 不可对角化, 则必存在某个 $r_i > 1$ , 不妨设 $r_1 > 1$ , 于是 $\varphi(e_1) = 0$ , $\varphi(e_2) = e_1$ . 由 $(\varphi(e_2), e_2) = 0$ 可得 $(e_1, e_2) = 0$ , 再由 $(\varphi(e_1 + e_2), e_1 + e_2) = 0$ 可得 $(e_1, e_1) = 0$ , 从而 $e_1 = 0$ , 这与假设矛盾, 于是 $\varphi$ 可对角化. 最后, 由 $\varphi$ 的 Jordan 标准型是零矩阵可知 $\varphi = 0$ , 这与假设矛盾.

证法 3 对任意的 $\alpha, \beta \in C^{n}$ ，有

$$
\begin{array}{l} (\varphi (\alpha), \beta) = \frac {1}{4} (\varphi (\alpha + \beta), \alpha + \beta) - \frac {1}{4} (\varphi (\alpha - \beta), \alpha - \beta) \\ + \frac {\mathrm{i}}{4} (\varphi (\alpha + \mathrm{i} \beta), \alpha + \mathrm{i} \beta) - \frac {\mathrm{i}}{4} (\varphi (\alpha - \mathrm{i} \beta), \alpha - \mathrm{i} \beta) = 0. \\ \end{array}
$$

令 $\beta = \varphi (\alpha)$ , 由内积的正定性可得 $\varphi (\alpha) = 0$ 对任意的 $\alpha \in \mathbb{C}^n$ 成立, 即 $\varphi = 0$ , 这与假设矛盾. 因此在 $\mathbb{C}^n$ 中满足条件的非零线性变换不存在. □

## § 9.3 Gram-Schmidt 正交化方法和正交补空间

设 V 为 n 维内积空间, 则由例 9.4 可知, 任一 n 阶正定实对称矩阵 (正定 Hermite 矩阵) H 都能成为 V 的某组基的 Gram 矩阵. 特别地, 取 $H = I_{n}$ , 则存在 V 的一组基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ , 使得它的 Gram 矩阵就是单位矩阵 $I_{n}$ , 即 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 是 V 的一组标准正交基. 由例 9.3 我们也可以具体地构造出一组标准正交基, 以下不妨设 V 是欧氏空间. 首先, 任取 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 设其 Gram 矩阵为 G, 则 G 是正定实对称矩阵. 其次, 通过对称初等变换法可将 G 化为单位矩阵 $I_{n}$ , 即存在 n 阶非异实矩阵 $C = (c_{ij})$ , 使得 $C'GC = I_{n}$ . 最后, 令

$$
\left(\boldsymbol {f} _ {1}, \boldsymbol {f} _ {2}, \dots , \boldsymbol {f} _ {n}\right) = \left(\boldsymbol {e} _ {1}, \boldsymbol {e} _ {2}, \dots , \boldsymbol {e} _ {n}\right) \boldsymbol {C},
$$

即 $f_{j}=\sum_{i=1}^{n}c_{ij}e_{i}$ ，则 $\{f_{1},f_{2},\cdots,f_{n}\}$ 是 V 的一组基，并且它的 Gram 矩阵就是 $C^{\prime}GC=I_{n}$ 。从上述过程不难看出，因为当 $n\geq2$ 时，过渡矩阵 C 有无穷多种选法，所以可构造出 V 的无穷多组标准正交基。

从几何的层面上看, 上述构造标准正交基的代数方法虽然简单, 但缺乏几何直观和意义. 然而, Gram-Schmidt 方法却是一个从几何直观入手的向量组的正交化方法, 具有重要的几何意义. Gram-Schmidt 方法 (具体公式参考 §§ 9.1.2) 粗略地说就是, 如果前 $k - 1$ 个向量 $\pmb{v}_1, \dots, \pmb{v}_{k-1}$ 已经两两正交, 那么只要将第 $k$ 个向量 $\pmb{u}_k$ 减去其在 $\pmb{v}_1, \dots, \pmb{v}_{k-1}$ 张成子空间上的正交投影, 即可得到与 $\pmb{v}_1, \dots, \pmb{v}_{k-1}$ 都正交的向量 $\pmb{v}_k$ . 特别地, 若 $\{\pmb{u}_1, \pmb{u}_2, \dots, \pmb{u}_n\}$ 是欧氏空间 $V$ 的一组基, 则通过 Gram-Schmidt 方法可得到一组正交基 $\{\pmb{v}_1, \pmb{v}_2, \dots, \pmb{v}_n\}$ , 再将每个基向量标准化, 即可得到 $V$ 的一组标准正交基 $\{\pmb{w}_1, \pmb{w}_2, \dots, \pmb{w}_n\}$ . 这 3 组基之间的关系为

$$
\left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {n}\right) = \left(\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {n}\right) \boldsymbol {B} = \left(\boldsymbol {w} _ {1}, \boldsymbol {w} _ {2}, \dots , \boldsymbol {w} _ {n}\right) \boldsymbol {C},
$$

其中 B 是主对角元全为 1 的上三角矩阵, C 是主对角元全为正实数的上三角矩阵. 设 $A = G(u_{1}, u_{2}, \cdots, u_{n})$ , $D = G(v_{1}, v_{2}, \cdots, v_{n})$ 分别是对应的 Gram 矩阵, 则 A是正定实对称矩阵, D 是正定对角矩阵, 由例 9.3 可得 A 的如下分解:

$$
A = B ^ {\prime} D B = C ^ {\prime} C,
$$

这就是例 8.12 中关于正定实对称矩阵 A 的两种分解, 再由例 8.12 后面的注可知上述两种分解的唯一性. 因此, 基 $\{u_{1}, u_{2}, \cdots, u_{n}\}$ 的 Gram 矩阵的分解 $A = B'DB$ 一一对应于通过 Gram-Schmidt 方法得到的正交基 $\{v_{1}, v_{2}, \cdots, v_{n}\}$ , 而 Gram 矩阵的 Cholesky 分解 $A = C'C$ 则一一对应于通过 Gram-Schmidt 正交化和标准化得到的标准正交基 $\{w_{1}, w_{2}, \cdots, w_{n}\}$ .

除了求标准正交基之外, Gram-Schmidt 方法还有许多其他的应用. 设 $V$ 是内积空间, $\pmb{u}$ 是 $V$ 中的向量, $\{\pmb{w}_1, \dots, \pmb{w}_k\}$ 是子空间 $W$ 的一组标准正交基, 则由 Gram-Schmidt 方法可知 $\pmb{v} = \pmb{u} - \sum_{i=1}^{k} (\pmb{u}, \pmb{w}_i) \pmb{w}_i$ 与 $\pmb{w}_1, \dots, \pmb{w}_k$ 正交. 令 $\pmb{w} = \sum_{i=1}^{k} (\pmb{u}, \pmb{w}_i) \pmb{w}_i$ , 则 $\pmb{u} = \pmb{v} + \pmb{w}$ 且 $(\pmb{v}, \pmb{w}) = 0$ , 于是 $\| \pmb{u} \|^2 = \| \pmb{v} \|^2 + \| \pmb{w} \|^2$ . 由此可得

(1) Bessel 不等式: $\|u\|^{2} \geq \|w\|^{2} = \sum_{i=1}^{k} |(\boldsymbol{u}, \boldsymbol{w}_{i})|^{2};$ 

(2) 向量 u 到子空间 W 的距离为 $\|v\|$ ，即 $\min_{x\in W}\|u-x\|=\|v\|$ .

我们来看 Gram-Schmidt 正交化方法及其应用的几道典型例题.

例 9.11 设 $V = \mathbb{R}[x]_{n}$ 为次数小于等于 n 的实系数多项式构成的欧氏空间，对任意的 $f(x), g(x)$ ，其内积定义为 $(f(x), g(x)) = \int_{-1}^{1} f(x) g(x) \, dx$ （参考例 9.1(5)）.

设 $u_{0}(x) = 1$ , $u_{k}(x) = \frac{\mathrm{d}^{k}}{\mathrm{d}x^{k}}\left[(x^{2} - 1)^{k}\right] (k \geq 1)$ , $m_{k} = \sqrt{\frac{2^{k+1} k!(2k)!}{(2k+1)!!}} (k \geq 0)$ . 求证：从基 $\{1, x, \cdots, x^{n}\}$ 出发，由 Gram-Schmidt 正交化方法得到的标准正交基为 $\left\{\frac{u_{k}(x)}{m_{k}}, 0 \leq k \leq n\right\}$ ，称之为 Legendre 多项式.

证明 由 Gram-Schmidt 正交化方法, 从 $1, x, x^2, x^3$ 可得标准正交基中前 4 个基向量分别为 $w_0(x) = \frac{1}{\sqrt{2}}$ , $w_1(x) = \sqrt{\frac{3}{2}}x$ , $w_2(x) = \sqrt{\frac{5}{8}}(3x^2 - 1)$ , $w_3(x) = \sqrt{\frac{7}{8}}(5x^3 - 3x)$ , 读者不难验证这就是 Legendre 多项式的前 4 个多项式. 不过这样的计算很难推广到一般的情形, 但我们可以通过验证 $\{u_k(x)\}$ 是一组正交基以及 Cholesky 分解与 Gram-Schmidt 正交化和标准化之间的一一对应来证明结论.

首先注意到, 对任意的 $j < k$ , 有 $\frac{\mathrm{d}^j}{\mathrm{d}x^j}\left[(x^2 - 1)^k\right] \bigg|_{x = \pm 1} = 0$ , 故由分部积分可得

$$
(u _ {k} (x), x ^ {j}) = \int_ {- 1} ^ {1} \frac {\mathrm{d} ^ {k}}{\mathrm{d} x ^ {k}} \left[ (x ^ {2} - 1) ^ {k} \right] x ^ {j} \mathrm{d} x = - j \int_ {- 1} ^ {1} \frac {\mathrm{d} ^ {k - 1}}{\mathrm{d} x ^ {k - 1}} \left[ (x ^ {2} - 1) ^ {k} \right] x ^ {j - 1} \mathrm{d} x.
$$

不断做下去可知, 当 j < k 时, $(u_{k}(x), x^{j}) = 0$ ; $(u_{k}(x), x^{k}) = (-1)^{k} k! \int_{-1}^{1} (x^{2} - 1)^{k} dx$ .
注意到 $u_{k}(x)$ 是一个 k 次多项式且首项系数为 $2k(2k-1)\cdots(k+1)$ ，由上述结果并

且经过进一步的计算可知，

$$
\| u _ {k} (x) \| ^ {2} = \frac {2 ^ {k + 1} k ! (2 k) !}{(2 k + 1) ! !}, \quad (u _ {k} (x), u _ {l} (x)) = 0 (k > l),
$$

因此 $\left\{\frac{u_{k}(x)}{m_{k}},0\leq k\leq n\right\}$ 是 V 的一组标准正交基。设从基 $\{1,x,\cdots,x^{n}\}$ 到基 $\left\{\frac{u_{k}(x)}{m_{k}},0\leq k\leq n\right\}$ 的过渡矩阵为 P，基 $\{1,x,\cdots,x^{n}\}$ 的 Gram 矩阵为 A，则 P 是一个主对角元全大于零的上三角矩阵，且由例 9.3 可得 $I_{n+1}=P^{\prime}AP$ ，从而 $A=(P^{-1})^{\prime}P^{-1}$ 是 Cholesky 分解。由 Cholesky 分解的唯一性以及它与 Gram-Schmidt 正交化和标准化之间的一一对应可知， $\left\{\frac{u_{k}(x)}{m_{k}},0\leq k\leq n\right\}$ 就是从基 $\{1,x,\cdots,x^{n}\}$ 出发由 Gram-Schmidt 正交化方法得到的标准正交基。☐

例 9.12 设 $V = \mathbb{R}[x]_{3}$ 为次数小于等于 3 的实系数多项式构成的欧氏空间, 其内积定义同例 9.11, 试求 $\min_{f(x) \in V} \int_{-1}^{1} (\mathrm{e}^{x} - f(x))^{2} \mathrm{d}x$ .

解 本题即求 $\min_{f(x) \in V} \| \mathrm{e}^x - f(x) \|^2$ . 由例9.11可知, $V$ 的一组标准正交基为 $w_0(x) = \frac{1}{\sqrt{2}}$ , $w_1(x) = \sqrt{\frac{3}{2}} x$ , $w_2(x) = \sqrt{\frac{5}{8}} (3x^2 - 1)$ , $w_3(x) = \sqrt{\frac{7}{8}} (5x^3 - 3x)$ , 经计算可得 $(\mathrm{e}^x, w_0(x)) = \frac{\sqrt{2}}{2} (\mathrm{e} - \mathrm{e}^{-1})$ , $(\mathrm{e}^x, w_1(x)) = \sqrt{6} \mathrm{e}^{-1}$ , $(\mathrm{e}^x, w_2(x)) = \frac{\sqrt{10}}{2} (\mathrm{e} - 7 \mathrm{e}^{-1})$ , $(\mathrm{e}^x, w_3(x)) = \frac{\sqrt{14}}{2} (37 \mathrm{e}^{-1} - 5 \mathrm{e})$ . 因此, 由Gram-Schmidt方法的几何意义可得

$$
\begin{array}{l} \min _ {f (x) \in V} \| \mathrm{e} ^ {x} - f (x) \| ^ {2} = \| \mathrm{e} ^ {x} - \sum_ {i = 0} ^ {3} (\mathrm{e} ^ {x}, w _ {i} (x)) w _ {i} (x) \| ^ {2} \\ = \left\| \mathrm{e} ^ {x} - \frac {1}{2} (\mathrm{e} - \mathrm{e} ^ {- 1}) - 3 \mathrm{e} ^ {- 1} x - \frac {5}{4} (\mathrm{e} - 7 \mathrm{e} ^ {- 1}) (3 x ^ {2} - 1) - \frac {7}{4} (3 7 \mathrm{e} ^ {- 1} - 5 \mathrm{e}) (5 x ^ {3} - 3 x) \right\| ^ {2} \\ \approx 0. 0 0 0 0 2 2 2 8 8 8 7. \square \\ \end{array}
$$

列向量组的 Gram-Schmidt 正交化还给出了矩阵的 QR 分解, 这可以看成是 Gram-Schmidt 正交化方法的另一个应用.

例 9.13 设 A 是 n 阶实 (复) 矩阵, 则 A 可分解为 A = QR, 其中 Q 是正交 (酉) 矩阵, R 是一个主对角元全大于等于零的上三角矩阵, 并且若 A 是可逆矩阵, 则这样的分解必唯一.

证明 设 A 是 n 阶实矩阵, $\boldsymbol{A} = (\boldsymbol{u}_{1}, \boldsymbol{u}_{2}, \cdots, \boldsymbol{u}_{n})$ 是 A 的列分块. 考虑 n 维实列向量空间 $R^{n}$ , 并取其标准内积, 我们先通过类似于 Gram-Schmidt 方法的正交化过程, 把 $\{u_1, u_2, \cdots, u_n\}$ 变成一组两两正交的向量 $\{w_1, w_2, \cdots, w_n\}$ , 并且 $w_k$ 或者是零向量或者是单位向量.

我们用数学归纳法来定义上述向量 $\boldsymbol{w}_{k}(1 \leq k \leq n)$ . 假设 $w_{1}, \cdots, w_{k-1}$ 已经定义好, 现来定义 $w_{k}$ . 令

$$
\boldsymbol {v} _ {k} = \boldsymbol {u} _ {k} - \sum_ {j = 1} ^ {k - 1} (\boldsymbol {u} _ {k}, \boldsymbol {w} _ {j}) \boldsymbol {w} _ {j}.
$$

若 $v_{k}=0$ ，则令 $w_{k}=0$ ；若 $v_{k}\neq0$ ，则令 $w_{k}=\frac{v_{k}}{\|v_{k}\|}$ 。容易验证 $\{w_{1},w_{2},\cdots,w_{n}\}$ 是一组两两正交的向量， $w_{k}$ 或者是零向量或者是单位向量，并且满足：

$$
\boldsymbol {u} _ {k} = \sum_ {j = 1} ^ {k - 1} (\boldsymbol {u} _ {k}, \boldsymbol {w} _ {j}) \boldsymbol {w} _ {j} + \| \boldsymbol {v} _ {k} \| \boldsymbol {w} _ {k}, \quad 1 \leq k \leq n. \tag {9.5}
$$

由上式可得

$$
\boldsymbol {A} = (\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {n}) = (\boldsymbol {w} _ {1}, \boldsymbol {w} _ {2}, \dots , \boldsymbol {w} _ {n}) \boldsymbol {R}, \tag {9.6}
$$

其中 R 是一个上三角矩阵且主对角元依次为 $\|v_{1}\|$ , $\|v_{2}\|$ , $\cdots$ , $\|v_{n}\|$ ，全大于等于零，并且由 (9.5) 式可知，如果 $w_{k}=0$ ，则 R 的第 k 行元素全为零。

假设 $w_{i_{1}}, w_{i_{2}}, \cdots, w_{i_{r}}$ 是其中的非零向量全体，则可将它们扩张为 $R^{n}$ 的一组标准正交基 $\{\widetilde{w}_{1}, \widetilde{w}_{2}, \cdots, \widetilde{w}_{n}\}$ ，其中 $\widetilde{w}_{j} = w_{j} (j = i_{1}, i_{2}, \cdots, i_{r})$ 。令 $Q = (\widetilde{w}_{1}, \widetilde{w}_{2}, \cdots, \widetilde{w}_{n})$ ，则 Q 是正交矩阵。注意到若 $w_{k} = 0$ ，则 R 的第 k 行元素全为零，此时用 $\widetilde{w}_{k}$ 代替 $w_{k}$ 仍然可使 (9.6) 式成立，因此

$$
\boldsymbol {A} = \left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {n}\right) = \left(\widetilde {\boldsymbol {w}} _ {1}, \widetilde {\boldsymbol {w}} _ {2}, \dots , \widetilde {\boldsymbol {w}} _ {n}\right) \boldsymbol {R} = \boldsymbol {Q} \boldsymbol {R},
$$

从而得到了 A 的 QR 分解.

若可逆实矩阵 A 有两个 QR 分解 $A = QR = Q_{1}R_{1}$ ，则 $Q^{-1}Q_{1} = RR_{1}^{-1}$ 。因为正交矩阵的逆矩阵和乘积仍是正交矩阵，上三角矩阵的逆矩阵和乘积仍是上三角矩阵，故 $Q^{-1}Q_{1} = RR_{1}^{-1}$ 是正交上三角矩阵，从而是正交对角矩阵。又因为正交对角矩阵的主对角元只能是 1 或 -1，且 $RR_{1}^{-1}$ 的主对角元全大于零，故 $RR_{1}^{-1} = I_{n}$ ，从而 $R_{1} = R, Q_{1} = Q$ ，分解唯一性得证。复矩阵情形的证明完全类似。□

例 8.12 和例 8.78 证明下列关于 n 阶实对称矩阵 $A = (a_{ij})$ 的命题等价:

(1) A 是正定阵 (半正定阵);

(2) 存在主对角元全等于 1 的上三角矩阵 B 和主对角元全为正数 (非负实数) 的对角矩阵 D, 使得 $A = B'DB$ ;

(3) 存在主对角元全为正数 (非负实数) 的上三角矩阵 C, 使得 $A = C'C$ .

证法 2 因为半正定阵 A 是正定阵当且仅当 A 是可逆矩阵, 所以由可逆性和例 8.78 的结论很容易推出例 8.12 的结论, 下面只证明例 8.78.

(1)⇒(3)、(2): 因为 A 半正定, 故存在实矩阵 P, 使得 $A = P'P$ . 设 P = QC 是 QR 分解, 其中 Q 是正交矩阵, C 是主对角元全大于等于零的上三角矩阵, 则 $A = (QC)'(QC) = C'(Q'Q)C = C'C$ . 由例 9.13 的证明可知, 若 $C = (c_{ij})$ 的第 $(i,i)$ 元素 $c_{ii} = 0$ , 则 C 的第 i 行元素全为零. 令 $D = \text{diag}\{c_{11}^2, c_{22}^2, \cdots, c_{nn}^2\}$ , 且 $B = (b_{ij})$ 定义为: 若 $c_{ii} > 0$ , 则 $b_{ij} = \frac{c_{ij}}{c_{ii}} (1 \leq j \leq n)$ ; 若 $c_{ii} = 0$ , 则 $b_{ij} = \delta_{ij} (1 \leq j \leq n)$ , 其中 $\delta_{ij}$ 是 Kronecker 符号. 容易验证 B 是主对角元全等于 1 的上三角矩阵且 $A = B'DB$ .

(2) $\Rightarrow$ (1) 和 (3) $\Rightarrow$ (1) 都是显然的. $\square$ 

注 事实上, 正定阵的 Cholesky 分解和非异阵的 QR 分解从某种意义上看是等价的. 上面的证明即是由非异阵的 QR 分解推出正定阵的 Cholesky 分解. 反之, 对任一非异实矩阵 A, $A^{\prime}A$ 是正定阵, 设 $A^{\prime}A = R^{\prime}R$ 是 Cholesky 分解, 其中 R 是主对角元全大于零的上三角矩阵. 令 $Q = AR^{-1}$ , 则 $Q^{\prime}Q = (AR^{-1})'(AR^{-1}) = (R')^{-1}(A^{\prime}A)R^{-1} = (R')^{-1}(R^{\prime}R)R^{-1} = I_{n}$ , 即 Q 是正交矩阵, 从而 A = QR 是 QR 分解. 从几何的层面上看, 上述两种矩阵分解都等价于 Gram-Schmidt 正交化和标准化过程, 所以它们之间的等价性是自然的.

在内积空间中使用标准正交基通常可以简化问题的讨论. 例如, 因为标准正交基的 Gram 矩阵是单位矩阵 $I_{n}$ , 故通过坐标向量表示内积的 (9.2) 式就变成了列向量空间中的标准内积, 这为我们讨论进一步的问题 (如保积同构、伴随算子等) 提供了方便. 下面的例题推广了例 9.4, 利用标准正交基可以简化其证明过程.

例 9.14 设 V 是 n 维欧氏空间, A 是 m 阶半正定实对称矩阵且 $\mathrm{r}(A)=r\leq n$ , 求证: 必存在 V 上的向量组 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ , 使得其 Gram 矩阵就是 A.

证明 采用与例9.3类似的讨论可证明: 若向量组 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ 与 $\{\beta_{1},\beta_{2},\cdots,\beta_{k}\}$ 满足 $\alpha_{j}=\sum_{i=1}^{k}c_{ij}\beta_{i}(1\leq j\leq m)$ , 即 $(\alpha_{1},\alpha_{2},\cdots,\alpha_{m})=(\beta_{1},\beta_{2},\cdots,\beta_{k})C$ , 其中 $C=(c_{ij})_{k\times m}$ , 则有

$$
\boldsymbol {G} \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {m}\right) = \boldsymbol {C} ^ {\prime} \boldsymbol {G} \left(\beta_ {1}, \beta_ {2}, \dots , \beta_ {k}\right) \boldsymbol {C}.
$$

因为 A 是秩为 r 的 m 阶半正定阵, 故由第 8 章解答题 12 可知, 存在 $r \times m$ 实矩阵 T, 使得 $A = T'T$ . 取 V 的一组标准正交基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 令

$$
\left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {m}\right) = \left(e _ {1}, e _ {2}, \dots , e _ {r}\right) T,
$$

则由上面的结论即得

$$
\boldsymbol {G} \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {m}\right) = \boldsymbol {T} ^ {\prime} \boldsymbol {G} \left(e _ {1}, e _ {2}, \dots , e _ {r}\right) \boldsymbol {T} = \boldsymbol {T} ^ {\prime} \boldsymbol {T} = \boldsymbol {A}.
$$

下面 3 个例题反映了 Gram-Schmidt 正交化方法对向量组的 Gram 矩阵的影响.

例 9.15 证明: 若用 Gram-Schmidt 方法将线性无关的向量组 $u_{1}, u_{2}, \cdots, u_{m}$ 变成正交向量组 $v_{1}, v_{2}, \cdots, v_{m}$ ，则这两组向量的 Gram 矩阵的行列式值不变，即

$$
\left| \boldsymbol {G} \left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {m}\right) \right| = \left| \boldsymbol {G} \left(\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}\right) \right| = \| \boldsymbol {v} _ {1} \| ^ {2} \| \boldsymbol {v} _ {2} \| ^ {2} \dots \| \boldsymbol {v} _ {m} \| ^ {2}.
$$

证明 由 Gram-Schmidt 正交化过程可得

$$
\left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {m}\right) = \left(\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}\right) \boldsymbol {B},
$$

其中 B 是一个主对角元全为 1 的上三角矩阵, 再由例 9.14 的证明过程可得

$$
\boldsymbol {G} (\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {m}) = \boldsymbol {B} ^ {\prime} \boldsymbol {G} (\boldsymbol {v} _ {1}, \boldsymbol {v} _ {2}, \dots , \boldsymbol {v} _ {m}) \boldsymbol {B}.
$$

注意到 $G(\boldsymbol{v}_{1},\boldsymbol{v}_{2},\cdots,\boldsymbol{v}_{m})$ 是主对角元分别为 $\|v_{1}\|^{2},\|v_{2}\|^{2},\cdots,\|v_{m}\|^{2}$ 的对角矩阵，故上式两边同取行列式即得结论. □

例 9.16 证明下列不等式:

$$
0 \leq | G (\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {m}) | \leq \| \boldsymbol {u} _ {1} \| ^ {2} \| \boldsymbol {u} _ {2} \| ^ {2} \dots \| \boldsymbol {u} _ {m} \| ^ {2},
$$

后一个等号成立的充要条件是 $u_{i}$ 两两正交或者某个 $u_{i}=0$ .

证明 由例 9.5 可知 $G(u_1, u_2, \cdots, u_m)$ 是一个半正定实对称矩阵, 故由例 8.26 可知 $|G(u_1, u_2, \cdots, u_m)| \geq 0$ . 对第二个不等式, 我们分情况讨论. 若 $G(u_1, u_2, \cdots, u_m)$ 是非正定的半正定阵, 则 $0 = |G(u_1, u_2, \cdots, u_m)| \leq \|u_1\|^2 \|u_2\|^2 \cdots \|u_m\|^2$ , 并且等号成立的充要条件是某个 $u_i = 0$ . 若 $G(u_1, u_2, \cdots, u_m)$ 是正定阵, 则由例 9.5 可知 $u_1, u_2, \cdots, u_m$ 线性无关. 由 Gram-Schmidt 正交化过程可得

$$
\boldsymbol {v} _ {i} = \boldsymbol {u} _ {i} - \sum_ {j = 1} ^ {i - 1} \frac {\left(\boldsymbol {u} _ {i} , \boldsymbol {v} _ {j}\right)}{\| \boldsymbol {v} _ {j} \| ^ {2}} \boldsymbol {v} _ {j}.
$$

再由勾股定理可得 $\| \pmb{u}_i\|^2 = \| \pmb{v}_i\|^2 +\sum_{j = 1}^{i - 1}\frac{(\pmb{u}_i,\pmb{v}_j)^2}{\|\pmb{v}_j\|^2}\geq \| \pmb{v}_i\|^2 >0.$ 最后由例9.15可得

$$
\left| \boldsymbol {G} \left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \dots , \boldsymbol {u} _ {m}\right) \right| = \left\| \boldsymbol {v} _ {1} \right\| ^ {2} \left\| \boldsymbol {v} _ {2} \right\| ^ {2} \dots \left\| \boldsymbol {v} _ {m} \right\| ^ {2} \leq \left\| \boldsymbol {u} _ {1} \right\| ^ {2} \left\| \boldsymbol {u} _ {2} \right\| ^ {2} \dots \left\| \boldsymbol {u} _ {m} \right\| ^ {2},
$$

等号成立当且仅当 $\|v_{i}\|^{2}=\|u_{i}\|^{2}(1\leq i\leq m)$ ，这也当且仅当 $v_{i}=u_{i}(1\leq i\leq m)$ ，从而当且仅当 $u_{i}$ 两两正交。□

例 9.17 设 $A = (a_{ij})$ 是 n 阶实矩阵, 证明下列 Hadamard 不等式:

$$
| \boldsymbol {A} | ^ {2} \leq \prod_ {j = 1} ^ {n} \sum_ {i = 1} ^ {n} a _ {i j} ^ {2}.
$$

证明 设 $u_{1}, u_{2}, \cdots, u_{n}$ 是 A 的 n 个列向量，则 $G = A' A$ 可以看成是 $u_{1}, u_{2}, \cdots, u_{n}$ 在 $R^{n}$ 的标准内积下的 Gram 矩阵. 由例 9.16 可得

$$
\left| \boldsymbol {A} \right| ^ {2} = \left| \boldsymbol {A} ^ {\prime} \boldsymbol {A} \right| = | \boldsymbol {G} | \leq \prod_ {j = 1} ^ {n} \left\| \boldsymbol {u} _ {j} \right\| ^ {2} = \prod_ {j = 1} ^ {n} \sum_ {i = 1} ^ {n} a _ {i j} ^ {2}. \square
$$

注 (1) 例 9.16 和例 9.17 还可以直接由例 8.68 得到. 另外, 利用 Hadamard 不等式可以证明如下结论: 若 $n$ 阶实矩阵 $\mathbf{A} = (a_{ij})$ 满足 $|a_{ij}| \leq M (1 \leq i, j \leq n)$ , 则 $|\mathbf{A}| \leq M^n \cdot n^{\frac{n}{2}}$ . 这些证明的细节留给读者自行完成.

(2) 例 9.15 和例 9.16 的结论对复内积空间也成立, 不过证明中有两个细微之处需要修改, 请读者自行完成. 因此对 $n$ 阶复矩阵 $\mathbf{A} = (a_{ij})$ , 用相同的方法可以证明:

$$
| \det A | ^ {2} \leq \prod_ {j = 1} ^ {n} \sum_ {i = 1} ^ {n} | a _ {i j} | ^ {2}.
$$

有限维内积空间 $V$ 是任一子空间 $U$ 与其正交补空间 $U^{\perp}$ 的正交直和, 因此我们经常利用正交补空间配合数学归纳法证明关于内积空间以及线性算子的某些重要命题. 关于正交补空间的验证, 常常利用有限维空间中的维数关系, 它可以使证明更加简洁. 我们先来看正交补空间性质的两道例题.

例 9.18 设 $U_{1}, U_{2}, U$ 是 n 维内积空间 V 的子空间, 求证:

(1) $(U^{\perp})^{\perp}=U;$ 

(2) $(U_{1}+U_{2})^{\perp}=U_{1}^{\perp}\cap U_{2}^{\perp};$ 

(3) $(U_{1}\cap U_{2})^{\perp}=U_{1}^{\perp}+U_{2}^{\perp};$ 

(4) $V^{\perp}=0,0^{\perp}=V.$ 

证明 (1) 因为 $V = U^{\perp} \oplus (U^{\perp})^{\perp}$ , 故 $\dim(U^{\perp})^{\perp} = n - \dim U^{\perp} = \dim U$ . 另一方面, 显然有 $U \subseteq (U^{\perp})^{\perp}$ , 因此 $(U^{\perp})^{\perp} = U$ .

(2) 显然 $(U_{1} + U_{2})^{\perp} \subseteq U_{1}^{\perp}, (U_{1} + U_{2})^{\perp} \subseteq U_{2}^{\perp}$ , 于是 $(U_{1} + U_{2})^{\perp} \subseteq U_{1}^{\perp} \cap U_{2}^{\perp}$ . 反之, 对任一 $\alpha \in U_{1}^{\perp} \cap U_{2}^{\perp}, \beta \in U_{1} + U_{2}$ , 记 $\beta = \beta_{1} + \beta_{2}$ , 其中 $\beta_{1} \in U_{1}, \beta_{2} \in U_{2}$ , 则

$$
(\alpha , \beta) = (\alpha , \beta_ {1} + \beta_ {2}) = (\alpha , \beta_ {1}) + (\alpha , \beta_ {2}) = 0,
$$

故 $\alpha \in (U_1 + U_2)^\perp$ ，于是 $U_{1}^{\perp}\cap U_{2}^{\perp}\subseteq (U_{1} + U_{2})^{\perp}$ .因此 $(U_{1} + U_{2})^{\perp} = U_{1}^{\perp}\cap U_{2}^{\perp}$ 

(3) 由 (1) 及 (2), 有 $(U_{1}^{\perp} + U_{2}^{\perp})^{\perp} = (U_{1}^{\perp})^{\perp} \cap (U_{2}^{\perp})^{\perp} = U_{1} \cap U_{2}$ .

(4) 显然成立. □

例 9.19 设 S 是 n 维内积空间 V 的子集, 证明:

(1) $S^{\perp}=\{\alpha\in V\mid(\alpha,S)=0\}$ 是V的子空间;

(2) $(S^{\perp})^{\perp}$ 等于由 S 生成的子空间.

证明 (1) 显然成立, 下证明 (2). 设 $S$ 生成的子空间为 $U$ , 一方面有 $U^{\perp} \subseteq S^{\perp}$ . 另一方面, 对任一 $\boldsymbol{v} \in S^{\perp}$ , $\boldsymbol{u} \in U$ , 将 $\boldsymbol{u}$ 表示为 $S$ 中向量的线性组合, $\boldsymbol{u} = a_{1} \boldsymbol{x}_{1} + \cdots + a_{k} \boldsymbol{x}_{k}$ , 其中 $\boldsymbol{x}_{i} \in S$ . 由 $(\boldsymbol{x}_{i}, \boldsymbol{v}) = 0$ 可得 $(\boldsymbol{u}, \boldsymbol{v}) = 0$ , 于是 $\boldsymbol{v} \in U^{\perp}$ , 从而 $S^{\perp} \subseteq U^{\perp}$ , 因此 $S^{\perp} = U^{\perp}$ . 最后由例 9.18 (1) 可知 $(S^{\perp})^{\perp} = (U^{\perp})^{\perp} = U$ . $\square$ 

下面 4 个例题是正交补空间的一些应用, 其中例 9.20 与例 3.103, 例 9.21 与例 3.99 之间有着密切的联系.

例 9.20 设 A 为 $m \times n$ 实矩阵, 齐次线性方程组 Ax = 0 的解空间为 U, 求 $U^{\perp}$ 适合的线性方程组.

解 设 A 的秩为 r，则解空间 U 是 $R^{n}$ (取标准内积) 的 n-r 维子空间。取 U 的一组基 $\eta_{1},\cdots,\eta_{n-r}$ ，令 $B=(\eta_{1},\cdots,\eta_{n-r})$ 为 $n\times(n-r)$ 实矩阵，则由例 9.19(2) 的证明可得 $U^{\perp}=\{\eta_{1},\cdots,\eta_{n-r}\}^{\perp}$ ，因此 $U^{\perp}$ 适合的线性方程组为 $B^{\prime}x=0$ 。☐

例 9.21 设 A 为 $m \times n$ 实矩阵, 求证: 非齐次线性方程组 $Ax = \beta$ 有解的充要条件是向量 $\beta$ 属于齐次线性方程组 $A' y = 0$ 解空间的正交补空间.

证明 设 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为列分块, $U = L(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为 $R^{m}$ (取标准内积) 的子空间, 则 Ax = β 有解当且仅当 $\beta \in U$ . 另一方面, $A' y = 0$ 的解空间即为 $\{y \in R^{m} \mid (\alpha_{i}, y) = 0, 1 \leq i \leq n\} = U^{\perp}$ , 注意到 $U = (U^{\perp})^{\perp}$ , 故结论得证. □

例 9.22 设 V 为 n 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), $V_{1}, V_{2}$ 分别为 n 阶实对称矩阵全体和 n 阶实反对称矩阵全体构成的子空间, 求证:

$$
V = V _ {1} \perp V _ {2}.
$$

证明 一方面, 由例 3.48 可知 $V = V_{1} \oplus V_{2}$ . 另一方面, 对任意的 $\mathbf{A} \in V_{1}, \mathbf{B} \in V_{2}$ , 由迹的交换性可得

$$
(\boldsymbol {A}, \boldsymbol {B}) = \operatorname{tr} (\boldsymbol {A B ^ {\prime}}) = - \operatorname{tr} (\boldsymbol {A B}) = - \operatorname{tr} (\boldsymbol {B A}) = - \operatorname{tr} (\boldsymbol {B A ^ {\prime}}) = - (\boldsymbol {B}, \boldsymbol {A}) = - (\boldsymbol {A}, \boldsymbol {B}),
$$

于是 $(\pmb {A},\pmb {B}) = 0,$ 从而 $V_{1}\perp V_{2}$ ，因此 $V = V_{1}\perp V_{2}$ □

例 9.11 的证法 2 设 $V_{k}$ 是由次数小于等于 k 的实系数多项式构成的子空间, $w_{k}(x)=\frac{u_{k}(x)}{m_{k}}(0\leq k\leq n)$ , 同证法 1 的计算可知这是一组两两正交的单位向量.

下面用归纳法来证明结论. 当 k=0 时结论显然成立, 假设从 $1,x,\cdots,x^{k}$ 出发, 经过 Gram-Schmidt 正交化方法得到 $V_{k}$ 的一组标准正交基为 $w_{0}(x),w_{1}(x),\cdots,w_{k}(x)$ . 现设 $x^{k+1}$ 经过 Gram-Schmidt 正交化方法得到的单位向量为 $\widetilde{w}_{k+1}(x)$ , 满足 $(w_{i}(x),\widetilde{w}_{k+1}(x))=0(0\leq i\leq k)$ , 于是 $V_{k+1}=V_{k}\perp L(w_{k+1}(x))=V_{k}\perp L(\widetilde{w}_{k+1}(x))$ . 因此 $L(w_{k+1}(x))=L(\widetilde{w}_{k+1}(x))$ 是 $V_{k}$ 在 $V_{k+1}$ 中的正交补空间, 注意到 $w_{k+1}(x)$ 和 $\widetilde{w}_{k+1}(x)$ 都是范数为 1 且首项系数为正数的 $k+1$ 次多项式, 故 $\widetilde{w}_{k+1}(x)=w_{k+1}(x)$ , 结论得证. □

## § 9.4 伴 随

伴随是内积空间理论中最重要的概念之一. 在处理有关伴随的问题时, 除了运用直接验证法外, 也常常采用矩阵方法. 如果线性变换 $\varphi$ 在一组标准正交基下的表示矩阵为 $A$ , 则其伴随 $\varphi^{*}$ 在同一组标准正交基下的表示矩阵为 $A'$ (欧氏空间) 或 $\overline{A}'$ (西空间). 这使我们能用矩阵来讨论有关问题, 例 9.23、例 9.24 和例 9.25 就是非常典型的例子. 例 9.28 是正规算子及其伴随的基本性质, 它在后面有重要的用途.

例 9.23 设 V 是有限维内积空间, $\varphi, \psi$ 是 V 上的线性变换, c 是常数, 求证:

(1) $(\varphi + \psi)^{*} = \varphi^{*} + \psi^{*}$ ; 

(2) $(c\varphi)^{*} = \overline{c}\varphi^{*};$ 

(3) $(\varphi \psi)^{*} = \psi^{*}\varphi^{*};$ 

(4) $(\varphi^{*})^{*} = \varphi ;$ 

(5) 若 $\varphi$ 可逆, 则 $\varphi^{*}$ 也可逆, 此时 $(\varphi^{*})^{-1} = (\varphi^{-1})^{*}$ .

证法1 设 $\varphi, \psi$ 在 $V$ 的一组标准正交基下的表示矩阵为 $A, B$ , 则 $\varphi^{*}, \psi^{*}$ 在同一组标准正交基下的表示矩阵为 $\overline{A}', \overline{B}'$ . 由线性变换和表示矩阵的一一对应, 我们只要验证矩阵的共轭转置满足上述5条性质即可, 而这些都是显然的.

证法 2 我们也可以直接用伴随的定义来证明, 下面以 (3) 为例, 其余的留给读者自行验证. 对任意的 $\alpha, \beta \in V$ , 有

$$
((\varphi \psi) (\alpha), \beta) = (\varphi (\psi (\alpha)), \beta) = (\psi (\alpha), \varphi^ {*} (\beta)) = (\alpha , \psi^ {*} (\varphi^ {*} (\beta))) = (\alpha , (\psi^ {*} \varphi^ {*}) (\beta)),
$$

由伴随的唯一性即得 $(\varphi \psi)^{*} = \psi^{*}\varphi^{*}$ □

例 9.24 设 $\varphi$ 是有限维内积空间 V 上的线性变换, 求证: 若 $\varphi$ 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ , 则 $\varphi^{*}$ 的全体特征值为 $\overline{\lambda_{1}}, \overline{\lambda_{2}}, \cdots, \overline{\lambda_{n}}$ .

证明 取 $V$ 的一组标准正交基, 设 $\pmb{A}$ 是 $\varphi$ 的表示矩阵, 则无论 $V$ 是酉空间还是欧氏空间, $\varphi^{*}$ 的表示矩阵总可写为 $\overline{\pmb{A}}'$ . 由假设

$$
\left| \lambda I _ {n} - A \right| = (\lambda - \lambda_ {1}) (\lambda - \lambda_ {2}) \dots (\lambda - \lambda_ {n}),
$$

令 $\lambda = \overline{\mu}$ ，则有

$$
\begin{array}{l} \left| \lambda I _ {n} - \overline {{A}} ^ {\prime} \right| = \left| \bar {\mu} I _ {n} - \overline {{A}} \right| = \overline {{\left| \mu I _ {n} - A \right|}} = \overline {{(\mu - \lambda_ {1}) (\mu - \lambda_ {2}) \cdots (\mu - \lambda_ {n})}} \\ = (\overline {{\mu}} - \overline {{\lambda_ {1}}}) (\overline {{\mu}} - \overline {{\lambda_ {2}}}) \dots (\overline {{\mu}} - \overline {{\lambda_ {n}}}) = (\lambda - \overline {{\lambda_ {1}}}) (\lambda - \overline {{\lambda_ {2}}}) \dots (\lambda - \overline {{\lambda_ {n}}}), \\ \end{array}
$$

故结论成立. □

例 9.25 设 $\varphi$ 是有限维内积空间 V 上的线性变换, $\varphi$ 的极小多项式为 $g(x)$ , 证明: $\varphi^{*}$ 的极小多项式为 $\overline{g}(x)$ , 这里 $\overline{g}(x)$ 的系数等于 $g(x)$ 系数的共轭.

证明 取 $V$ 的一组标准正交基, 设 $\pmb{A}$ 是 $\varphi$ 的表示矩阵, 则无论 $V$ 是酉空间还是欧氏空间, $\varphi^{*}$ 的表示矩阵总可写为 $\overline{\pmb{A}}'$ . 注意到 $g(\pmb{A}) = \pmb{O}$ 当且仅当 $\bar{g}(\overline{\pmb{A}}') = \pmb{O}$ , 故结论成立. $\square$ 

下面的例题提供了处理内积空间中相关问题的归纳基础.

例 9.26 设 $\varphi$ 是内积空间 V 上的线性变换, 若 U 是 $\varphi$ 的不变子空间, 求证: $U^{\perp}$ 是 $\varphi^{*}$ 的不变子空间.

证明 任取 $\alpha \in U, \beta \in U^{\perp}$ , 由 $(\alpha, \varphi^{*}(\beta)) = (\varphi(\alpha), \beta) = 0$ 即得结论. □

例 9.27 设 V 是 n 维内积空间, $\varphi$ 是 V 上的线性变换, 求证: $\operatorname{Im}\varphi^{*} = (\operatorname{Ker}\varphi)^{\perp}$ .

证明 由例 9.18 可知, 只要证明 $\operatorname{Ker} \varphi = (\operatorname{Im} \varphi^{*})^{\perp}$ 即可. 一方面, 任取 $\alpha \in \operatorname{Ker} \varphi$ , 则对任一 $\beta \in V$ 有 $(\alpha, \varphi^{*}(\beta)) = (\varphi(\alpha), \beta) = (0, \beta) = 0$ , 即 $\alpha \in (\operatorname{Im} \varphi^{*})^{\perp}$ , 于是 $\operatorname{Ker} \varphi \subseteq (\operatorname{Im} \varphi^{*})^{\perp}$ . 另一方面, 任取 $\alpha \in (\operatorname{Im} \varphi^{*})^{\perp}$ , 则对任一 $\beta \in V$ 有 $0 = (\alpha, \varphi^{*}(\beta)) = (\varphi(\alpha), \beta)$ , 令 $\beta = \varphi(\alpha)$ 或由例 9.2 即得 $\varphi(\alpha) = 0$ , 即 $\alpha \in \operatorname{Ker} \varphi$ , 于是 $(\operatorname{Im} \varphi^{*})^{\perp} \subseteq \operatorname{Ker} \varphi$ , 因此结论得证. □

例 9.28 设 V 是 n 维内积空间, $\varphi$ 是 V 上的正规算子, $\alpha$ 是 V 中的非零向量, 求证: $\alpha$ 是 $\varphi$ 属于特征值 $\lambda$ 的特征向量的充要条件是 $\alpha$ 是 $\varphi^{*}$ 属于特征值 $\overline{\lambda}$ 的特征向量.

$$
\begin{array}{r l} & {\text {证明} \quad \text {先证明对任意的} \alpha \in V, \text {有} \| \varphi (\alpha) \| = \| \varphi^ {*} (\alpha) \|. \text {因为} \varphi \text {是正规算子,故}} \\ & {\| \varphi (\alpha) \| ^ {2} = (\varphi (\alpha), \varphi (\alpha)) = (\alpha , \varphi^ {*} \varphi (\alpha)) = (\alpha , \varphi \varphi^ {*} (\alpha)) = (\varphi^ {*} (\alpha), \varphi^ {*} (\alpha)) = \| \varphi^ {*} (\alpha) \| ^ {2}.} \end{array}
$$

又因为 $(\lambda I - \varphi)^{*} = \overline{\lambda} I - \varphi^{*}$ , 且 $(\lambda I - \varphi)(\overline{\lambda} I - \varphi^{*}) = (\overline{\lambda} I - \varphi^{*})(\lambda I - \varphi)$ , 所以 $\lambda I - \varphi$ 也是正规算子. 于是

$$
\| (\lambda I - \varphi) (\alpha) \| = \| (\bar {\lambda} I - \varphi^ {*}) (\alpha) \|
$$

对任意的 $\alpha$ 成立, 从而 $(\lambda I - \varphi)(\alpha) = 0$ 当且仅当 $(\bar{\lambda} I - \varphi^{*})(\alpha) = 0$ . □

下面我们来看几个求伴随算子的具体例子.

例 9.29 设 V 是由 n 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), V 上的线性变换 $\varphi$ 定义为 $\varphi(A)=PAQ$ , 其中 $P,Q\in V$ .

(1) 求 $\varphi$ 的伴随 $\varphi^{*}$ ;

(2) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是正交算子的充要条件是 $P' P = c I_n$ , $QQ' = c^{-1} I_n$ , 其中 $c$ 是正实数;

(3) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是自伴随算子的充要条件是 $P' = \pm P$ , $Q' = \pm Q$ ;

(4) 若 $P, Q$ 都是可逆矩阵, 求证: $\varphi$ 是正规算子的充要条件是 $P, Q$ 都是正规矩阵.

解 (1) 对任意的 $A, B \in V$ , 由迹的交换性可得

$$
(\varphi (A), B) = \operatorname{tr} (P A Q B ^ {\prime}) = \operatorname{tr} (A Q B ^ {\prime} P) = \operatorname{tr} \left(A (P ^ {\prime} B Q ^ {\prime}) ^ {\prime}\right) = (A, P ^ {\prime} B Q ^ {\prime}).
$$

定义 V 上的线性变换 $\psi$ 为 $\psi(B)=P^{\prime}BQ^{\prime}$ ，则上式即为 $(\varphi(A),B)=(A,\psi(B))$ .
由伴随的唯一性即得 $\varphi^{*} = \psi$ .

(2) 若 $\varphi$ 是正交算子, 即 $\varphi^{*}\varphi = I_{V}$ , 则由 (1) 可知, $P^{\prime}PAQQ^{\prime} = A$ 对任意的 $A \in V$ 成立. 由 $Q$ 的非异性可得 $P^{\prime}PA = A(QQ^{\prime})^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_{n}$ 可得 $P^{\prime}P = (QQ^{\prime})^{-1}$ , 因此上式即言 $P^{\prime}P$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$ , 使得 $P^{\prime}P = cI_{n}$ . 又 $P$ 可逆, 故 $P^{\prime}P$ 正定, 从而 $c > 0$ , 由此即得必要性. 充分性显然成立.

(3) 若 $\varphi$ 是自伴随算子, 即 $\varphi^{*} = \varphi$ , 则由 (1) 可知, $P^{\prime}AQ^{\prime} = PAQ$ 对任意的 $A \in V$ 成立. 由 $P, Q$ 的非异性可得 $P^{-1}P^{\prime}A = AQ(Q^{\prime})^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_{n}$ 可得 $P^{-1}P^{\prime} = Q(Q^{\prime})^{-1}$ , 因此上式即言 $P^{-1}P^{\prime}$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$ , 使得 $P^{-1}P^{\prime} = cI_{n}$ , 即 $P^{\prime} = cP$ . 此式转置后可得 $P = cP^{\prime} = c^{2}P$ , 又 $P$ 可逆, 故 $c^{2} = 1$ , 从而 $c = \pm 1$ , 由此即得必要性. 充分性显然成立.

(4) 若 $\varphi$ 是正规算子, 即 $\varphi^{*}\varphi = \varphi \varphi^{*}$ , 则由 (1) 可知, $P^{\prime}PAQQ^{\prime} = PP^{\prime}AQ^{\prime}Q$ 对任意的 $A \in V$ 成立. 由 $P, Q$ 的非异性可得 $(PP^{\prime})^{-1}P^{\prime}PA = AQ^{\prime}Q(QQ^{\prime})^{-1}$ 对任意的 $A \in V$ 成立. 令 $A = I_{n}$ 可得 $(PP^{\prime})^{-1}P^{\prime}P = Q^{\prime}Q(QQ^{\prime})^{-1}$ , 因此上式即言 $(PP^{\prime})^{-1}P^{\prime}P$ 与任意的 $A$ 均乘法可交换, 于是存在实数 $c$ , 使得 $(PP^{\prime})^{-1}P^{\prime}P = cI_{n}$ , 即 $P^{\prime}P = cPP^{\prime}$ . 上式两边同时取迹, 由于 $P$ 可逆, 故 $\operatorname{tr}(P^{\prime}P) = \operatorname{tr}(PP^{\prime}) > 0$ , 从而 $c = 1$ , 由此即得必要性. 充分性显然成立. □

第2章解答题15 设 $A = (a_{ij})$ 为 $n$ 阶方阵, 定义函数 $f(A) = \sum_{i,j=1}^{n} a_{ij}^2$ . 设 $P$ 为 $n$ 阶可逆矩阵, 使得对任意的 $n$ 阶方阵 $A$ 成立: $f(PAP^{-1}) = f(A)$ . 证明: 存在非零常数 $c$ , 使得 $P' P = cI_n$ .

证法 2 我们把数域限定在实数域上, 并取 $V = M_{n}(\mathbb{R})$ 上的 Frobenius 内积, 则 $f(A) = \sum_{i,j=1}^{n} a_{ij}^{2} = \|A\|^{2}$ . 设 $\varphi(A) = PAP^{-1}$ 为 $V$ 上的线性变换, 则题目条件可改写为 $\|\varphi(A)\| = \|A\|$ 对任意的 $A \in V$ 成立, 于是 $\varphi$ 是正交算子, 从而由例 9.29 (2) 即得结论. □

例 9.30 设 V 是 n 阶实对称矩阵构成的欧氏空间 (取 Frobenius 内积).

(1) 求出 V 的一组标准正交基;

(2) 设 $T$ 是一个 $n$ 阶实矩阵, $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(A) = T' A T$ , 求证: $\varphi$ 是自伴随算子的充要条件是 $T$ 为对称矩阵或反对称矩阵.

证明 (1) 记 $E_{ij}$ 为 $n$ 阶基础矩阵, 则容易验证下列矩阵构成了 $V$ 的一组标准正交基:

$$
\boldsymbol {E} _ {i i} (1 \leq i \leq n); \frac {1}{\sqrt {2}} (\boldsymbol {E} _ {i j} + \boldsymbol {E} _ {j i}) (1 \leq i <   j \leq n).
$$

(2) 先证充分性. 若 $\pmb{T}$ 为对称矩阵或反对称矩阵, 则由例 9.29 可知, $\varphi^{*}(\pmb{A}) = (\pmb{T}^{\prime})^{\prime}\pmb{A}\pmb{T}^{\prime} = \pmb{T}\pmb{A}\pmb{T}^{\prime} = \pmb{T}^{\prime}\pmb{A}\pmb{T} = \varphi(\pmb{A})$ 对任一 $\pmb{A} \in V$ 成立, 故 $\varphi = \varphi^{*}$ 是自伴随算子.

再证必要性. 若 $\varphi$ 是自伴随算子, 则同上理由可得 $T A T^{\prime} = T^{\prime} A T$ 对任一 $A \in V$ 成立. 设 $T = (t_{ij})$ , 令 $A = E_{ij} + E_{ji}$ 代入上述等式可得

$$
t _ {i k} t _ {j l} + t _ {i l} t _ {j k} = t _ {k i} t _ {l j} + t _ {l i} t _ {k j} \tag {9.7}
$$

对一切 $i,j,k,l$ 都成立. 令 $k = l$ , 则可得

$$
t _ {i k} t _ {j k} = t _ {k i} t _ {k j}
$$

对一切 $i, j, k$ 都成立。进一步令 $i = j$ ，则可得 $t_{ik}^2 = t_{ki}^2$ 对一切 $i, k$ 都成立，因此 $t_{ik} = t_{ki}$ 或 $t_{ik} = -t_{ki}$ 。假设有某个 $i \neq k, t_{ik} = t_{ki} \neq 0$ ；又有某个 $t_{uv} = -t_{vu} \neq 0$ ，则从 $t_{ik}t_{uk} = t_{ki}t_{ku}$ 可推出 $t_{uk} = t_{ku}$ 。这时若 $t_{uk} \neq 0$ ，则从 $t_{uk}t_{uv} = t_{ku}t_{vu}$ 可推出 $t_{uv} = t_{vu}$ ，矛盾。若 $t_{uk} = 0$ ，则在 (9.7) 式中令 $j = u, l = v$ ，仍可推出 $t_{uv} = t_{vu}$ ，依然矛盾。于是或者 $t_{ik} = t_{ki}$ 对一切 $i, k$ 成立，或者 $t_{ik} = -t_{ki}$ 对一切 $i, k$ 成立，即 $\pmb{T}$ 或者是对称矩阵，或者是反对称矩阵。 $\square$ 

有限维内积空间上的线性算子必存在伴随算子, 然而下面的例题告诉我们, 无限维内积空间上线性算子的伴随算子可能不存在. 这一事实也反映了有限维内积空间与无限维内积空间之间的区别.

例 9.31 设 $U = \mathbb{R}[x]$ , 取例 9.1 (6) 中的内积. 任取 $f(x), g(x) \in U$ , 若设某些系数为零, 则可将它们都写成统一的形式: $f(x) = a_0 + a_1 x + \cdots + a_n x^n$ , $g(x) = b_0 + b_1 x + \cdots + b_n x^n$ .

(1) 线性变换 $\varphi$ 定义为 $\varphi(f(x)) = a_{1} + a_{2}x + \cdots + a_{n}x^{n-1}$ ，试求 $\varphi$ 的伴随；

(2) 线性变换 $\varphi$ 定义为 $\varphi(f(x)) = a_{0} + a_{1}(1 + x) + a_{2}(1 + x + x^{2}) + \cdots + a_{n}(\sum_{i=0}^{n} x^{i})$ ,
求证: $\varphi$ 的伴随不存在.

证明 (1) 经简单的计算可知, $\varphi^{*}(g(x)) = b_{0}x + b_{1}x^{2} + \dots + b_{n-1}x^{n} + b_{n}x^{n+1}$ .

(2) 注意到 $(f(x), x^{i}) = a_{i}$ ，也就是说 $f(x)$ 和 $x^{i}$ 的内积就是 $f(x)$ 的 $x^{i}$ 项系数。用反证法来证明，设 $\varphi$ 的伴随算子 $\varphi^{*}$ 存在，我们来推出矛盾。对任意的 $n \geq m$ ，我们有 $(\varphi(x^{n}), x^{m}) = (1 + x + \cdots + x^{n}, x^{m}) = 1$ ，故 $(x^{n}, \varphi^{*}(x^{m})) = 1$ 对任意给定的 m 以及所有的 $n \geq m$ 都成立，这说明 $\varphi^{*}(x^{m})$ 有无穷多个单项的系数不为零，这与 $\varphi^{*}(x^{m})$ 是多项式相矛盾。因此 $\varphi$ 的伴随不存在。☐

## § 9.5 保积同构、正交变换和正交矩阵

设 $\varphi: V \to U$ 是内积空间之间的线性同构, 若 $\varphi$ 保持内积, 则称为保积同构. 若两个线性空间之间存在线性同构, 则它们具有相同的线性结构, 从而在考虑线性问题时可将它们等同起来. 同理, 若两个内积空间之间存在保积同构, 则它们具有相同的内积结构, 从而在考虑内积问题时也可将它们等同起来, 这也是研究保积同构的意义所在. 本节将从 4 个方面研究保积同构的性质及其应用.

#### 1. 保积同构和几何问题代数化

在欧氏空间 (西空间) $V$ 中取定一组标准正交基, 容易验证将任一向量映射为它在这组基下的坐标向量的线性同构 $\varphi: V \to \mathbb{R}^n$ ( $\varphi: V \to \mathbb{C}^n$ ) 实际上也是一个保积同构. 因此我们可以把抽象的欧氏空间 (西空间) $V$ 上的问题转化为具体的取标准内积的列向量空间 $\mathbb{R}^n(\mathbb{C}^n)$ 上的问题来解决, 这就是内积空间版本的“几何问题代数化”技巧 (线性空间的版本请参考 §3.4). 我们先来看这一技巧的两个应用.

例 9.32 设 V 是 n 维欧氏空间, $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}, \beta_{1}, \beta_{2}, \cdots, \beta_{n} \in V$ . 证明: 若存在非零向量 $\alpha \in V$ , 使得 $\sum_{i=1}^{n} (\alpha, \alpha_{i}) \beta_{i} = 0$ , 则必存在非零向量 $\beta \in V$ , 使得 $\sum_{i=1}^{n} (\beta, \beta_{i}) \alpha_{i} = 0$ .

证明 取 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ ，设 $\alpha, \beta$ 的坐标向量分别为 x, y;

$\alpha_{i}$ 的坐标向量为 $x_{i}(1 \leq i \leq n)$ ; $\beta_{i}$ 的坐标向量为 $y_{i}(1 \leq i \leq n)$ ; n 阶实矩阵 $A = (x_{1}, x_{2}, \cdots, x_{n})$ , $B = (y_{1}, y_{2}, \cdots, y_{n})$ , 则由抽象向量映射到坐标向量的保积同构 $\varphi : V \to R^{n}$ , 可把本题化为如下矩阵问题: 若存在非零列向量 x, 使得

$$
\sum_ {i = 1} ^ {n} \left(\boldsymbol {x} ^ {\prime} \boldsymbol {x} _ {i}\right) \boldsymbol {y} _ {i} = \boldsymbol {B} \boldsymbol {A} ^ {\prime} \boldsymbol {x} = \mathbf {0}, \tag {9.8}
$$

则必存在非零列向量 y，使得

$$
\sum_ {i = 1} ^ {n} \left(\boldsymbol {y} ^ {\prime} \boldsymbol {y} _ {i}\right) \boldsymbol {x} _ {i} = \boldsymbol {A B} ^ {\prime} \boldsymbol {y} = \mathbf {0}. \tag {9.9}
$$

事实上, 由齐次线性方程组 (9.8) 有非零解可得 $\mathrm{r}(BA') < n$ , 注意到 $AB' = (BA')'$ , 故 $\mathrm{r}(AB') < n$ , 于是齐次线性方程组 (9.9) 也有非零解, 结论得证. □

例 9.33 设 V 是 n 维欧氏空间, $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ 是一组向量, $G = G(\alpha_{1},\alpha_{2},\cdots,\alpha_{m})$ 是其 Gram 矩阵, 求证: $\mathrm{r}(\alpha_{1},\alpha_{2},\cdots,\alpha_{m})=\mathrm{r}(G)$ .

证明 取 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ ，设 $\alpha_{i}$ 的坐标向量为 $x_{i} (1 \leq i \leq m)$ ， $A = (x_{1}, x_{2}, \cdots, x_{m})$ 为 $n \times m$ 实矩阵，则由抽象向量映射到坐标向量的保积同构 $\varphi : V \to R^{n}$ 可知 $G = A'A$ ，于是只要证明 $\mathrm{r}(A) = \mathrm{r}(A'A)$ 成立即可，而这由例 3.76 即得。☐

#### 2. 保积同构的判定及其应用

下面是保积同构的几个例子.

例 9.34 试构造下列内积空间之间的保积同构:

(1) $M_{n}(\mathbb{R})$ (取 Frobenius 内积) 与 $\mathbb{R}^{n^2}$ (取标准内积);

(2) $M_{n}(\mathbb{C})$ (取 Frobenius 内积) 与 $\mathbb{C}^{n^2}$ (取标准内积);

(3) $V = \mathbb{R}[x]$ (取[0,1]区间的积分内积)与 $U = \mathbb{R}[x]$ (取例9.1(6)中的内积).

解 (1) 取 $M_{n}(\mathbb{R})$ 中基础矩阵 $\{\pmb{E}_{ij}\}$ 构成的标准正交基, 则将任一 $\pmb{A} = (a_{ij})$ 映射为在上述基下的坐标向量 $(a_{11}, a_{12}, \cdots, a_{1n}, \cdots, a_{n1}, a_{n2}, \cdots, a_{nn})'$ 的线性映射 $\psi: M_{n}(\mathbb{R}) \to \mathbb{R}^{n^2}$ 是线性同构. 对任意的 $\pmb{B} = (b_{ij}) \in M_{n}(\mathbb{R})$ , 有

$$
(\psi (\boldsymbol {A}), \psi (\boldsymbol {B})) = \sum_ {i, j = 1} ^ {n} a _ {i j} b _ {i j} = (\boldsymbol {A}, \boldsymbol {B}),
$$

故 $\psi : M_n(\mathbb{R}) \to \mathbb{R}^{n^2}$ 是保积同构.

(2) 同理可证复矩阵的情形.

(3) 设线性无关向量组 $\{1, x, \cdots, x^n\}$ 在 $[0, 1]$ 区间的积分内积下的 Gram 矩阵为 $A = (a_{ij})$ , 其中 $a_{ij} = \frac{1}{i + j - 1} (1 \leq i, j \leq n + 1)$ . 由例 9.5 可知, $A$ 是正定阵, 取其 Cholesky 分解 $A = C'C$ , 其中 $C = (c_{ij})$ 是主对角元全大于零的上三角矩阵. 我们先构造一个线性同构 $\psi: V \to U$ , 对任意的 $f(x) = a_0 + a_1x + \cdots + a_nx^n$ , 定义

$$
\psi (f (x)) = a _ {0} c _ {1 1} + a _ {1} \left(c _ {1 2} + c _ {2 2} x\right) + \dots + a _ {n} \left(c _ {1, n + 1} + c _ {2, n + 1} x + \dots + c _ {n + 1, n + 1} x ^ {n}\right),
$$

即 $(\psi(1),\psi(x),\cdots,\psi(x^{n}))=(1,x,\cdots,x^{n})C$ 。容易证明 A 的第 r 个顺序主子阵的 Cholesky 分解恰由 C 的第 r 个顺序主子阵决定（这仍然是一个上三角矩阵）。若取线性无关向量组 $\{1,x,\cdots,x^{m}\}$ ，则按照上述方法定义出来的 $\psi(1),\psi(x),\cdots,\psi(x^{m})$ 与已定义的 $\psi(1),\psi(x),\cdots,\psi(x^{n})$ 的前面部分总是相同的。因此 $\psi$ 的定义不依赖于 n 的选取，并且容易验证 $\psi$ 是 $V\to U$ 的线性映射。再由 C 的非异性容易证明 $\psi:V\to U$ 是线性同构。任取 $f(x),g(x)\in V$ ，若设某些系数为零，则可将它们都写成统一的形式： $f(x)=a_{0}+a_{1}x+\cdots+a_{n}x^{n},g(x)=b_{0}+b_{1}x+\cdots+b_{n}x^{n}$ 。记 $\alpha=(a_{0},a_{1},\cdots,a_{n})',\beta=(b_{0},b_{1},\cdots,b_{n})'$ ，则由内积的定义可得

$$
(\psi (f (x)), \psi (g (x))) = (\boldsymbol {C} \alpha) ^ {\prime} (\boldsymbol {C} \beta) = \alpha^ {\prime} (\boldsymbol {C} ^ {\prime} \boldsymbol {C}) \beta = \alpha^ {\prime} \boldsymbol {A} \beta = (f (x), g (x)),
$$

因此 $\psi: V \rightarrow U$ 是保积同构. □

注 通过例 9.34 (3) 可以把例 9.31 (2) 中的线性算子 $\varphi$ 从 $U$ 拉回到 $V$ 上, 即有 $V$ 上的线性算子 $\psi^{-1}\varphi\psi$ , 它在 [0,1] 区间的积分内积下不存在伴随算子.

两个维数相同的欧氏空间 (酉空间) 之间的线性映射 $\varphi: V \to U$ 是保积同构当且仅当 $\varphi$ 保持内积或保持范数, 当且仅当 $\varphi$ 把 $V$ 的某一组 (任一组) 标准正交基映为 $U$ 的一组标准正交基. 我们已经知道一组基的 Gram 矩阵完全决定了内积结构, 因此也有如下保积同构的判定准则.

例 9.35 设 V, U 都是 n 维欧氏空间, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 和 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 分别是 V 和 U 的一组基 (不一定是标准正交基), 线性映射 $\varphi: V \to U$ 满足 $\varphi(e_{i}) = f_{i} (1 \leq i \leq n)$ . 求证: $\varphi$ 是保积同构的充要条件是这两组基的 Gram 矩阵相等, 即

$$
\boldsymbol {G} \left(\boldsymbol {e} _ {1}, \boldsymbol {e} _ {2}, \dots , \boldsymbol {e} _ {n}\right) = \boldsymbol {G} \left(\boldsymbol {f} _ {1}, \boldsymbol {f} _ {2}, \dots , \boldsymbol {f} _ {n}\right).
$$

证明 $\varphi$ 把 $V$ 的一组基映为 $U$ 的一组基保证了 $\varphi$ 是线性同构。若 $\varphi$ 保持内积，则 $(e_i, e_j) = (\varphi(e_i), \varphi(e_j)) = (f_i, f_j)$ ，从而它们的 Gram 矩阵相同。反之，若它们的 Gram 矩阵相同，任取 $\alpha, \beta \in V$ ，设它们在基 $\{e_1, e_2, \cdots, e_n\}$ 下的坐标向量分别为 $x, y$ ，则 $\varphi(\alpha), \varphi(\beta)$ 在基 $\{f_1, f_2, \cdots, f_n\}$ 下的坐标向量也分别为 $x, y$ ，于是

$$
(\varphi (\alpha), \varphi (\beta)) = x ^ {\prime} G (f _ {1}, f _ {2}, \dots , f _ {n}) y = x ^ {\prime} G (e _ {1}, e _ {2}, \dots , e _ {n}) y = (\alpha , \beta),
$$

故 $\varphi : V \to U$ 是保积同构. $\square$ 

接下来我们考虑例 9.35 关于向量组的推广. 我们已经知道向量组 Gram 矩阵的许多性质, 而下面的例题告诉我们, 向量组的 Gram 矩阵不仅决定了向量之间的内积关系, 也决定了向量之间的线性关系.

例 9.36 设 V 是 n 维欧氏空间, $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 是一组向量, $G = G(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m})$ 是其 Gram 矩阵.

(1) 求证: $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是极大无关组的充要条件是 $G$ 的第 $i_1, i_2, \cdots, i_r$ 行和列构成的主子式非零, 且对任意的 $i \neq i_1, i_2, \cdots, i_r$ , $G$ 的第 $i_1, i_2, \cdots, i_r$ , $i$ 行和列构成的主子式等于零.

(2) $R = \{(c_{1}, c_{2}, \cdots, c_{m})' \in \mathbb{R}^{m} \mid c_{1}\alpha_{1} + c_{2}\alpha_{2} + \cdots + c_{m}\alpha_{m} = 0\}$ 称为向量组 $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 的线性关系集合, 容易验证它是 $\mathbb{R}^{m}$ 的线性子空间. 求证: $R$ 是线性方程组 $Gx = 0$ 的解空间.

(3) 设 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ 线性无关, $\{\gamma_{1},\gamma_{2},\cdots,\gamma_{m}\}$ 是由 Gram-Schmidt 方法得到的标准正交向量组. 设上述两组向量之间的线性关系由可逆矩阵 P 定义, 即 $(\gamma_{1},\gamma_{2},\cdots,\gamma_{m})=(\alpha_{1},\alpha_{2},\cdots,\alpha_{m})P$ , 求证: P 由 G 唯一确定.

证明 (1) $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 是极大无关组当且仅当 $\{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}\}$ 线性无关，且对任意的 $i \neq i_1, i_2, \cdots, i_r, \{\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}, \alpha_i\}$ 线性相关，故由例 9.5 (2) 即知结论成立.

(2) 由内积的正定性可知, $\beta = (c_{1}, c_{2}, \cdots, c_{m})' \in R$ 当且仅当 $(\sum_{i=1}^{m} c_{i} \alpha_{i}, \sum_{i=1}^{m} c_{i} \alpha_{i}) = 0$ , 即 $\beta'\mathbf{G}\beta = 0$ , 再由例 8.71 可知, 这也当且仅当 $\mathbf{G}\beta = \mathbf{0}$ , 即 $\beta = (c_{1}, c_{2}, \cdots, c_{m})'$ 是线性方程组 $\mathbf{G}\mathbf{x} = \mathbf{0}$ 的解.

(3) 由例9.14的证明过程可得

$$
\boldsymbol {I} _ {m} = \boldsymbol {G} \left(\gamma_ {1}, \gamma_ {2}, \dots , \gamma_ {m}\right) = \boldsymbol {P} ^ {\prime} \boldsymbol {G} \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {m}\right) \boldsymbol {P} = \boldsymbol {P} ^ {\prime} \boldsymbol {G} \boldsymbol {P},
$$

从而 $G = (P^{-1})'P^{-1}$ 为 Cholesky 分解. 由 Cholesky 分解的唯一性可知, P 由 G 唯一确定. □

例 9.37 设 $\{\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4}\}$ 是欧氏空间 V 中的向量, 其 Gram 矩阵为 G = A'A, 其中

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 4 & 5 & 3 \\ 1 & 1 & - 1 & 3 \\ 1 & 7 & 1 1 & 9 \\ 1 & 0 & - 3 & 1 \end{array} \right).
$$

试求 $\{\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4}\}$ 的一组极大无关组，以及由这一极大无关组通过Gram-Schmidt方法得到的标准正交向量组.

解 设 $\boldsymbol{A} = (\boldsymbol{u}_{1}, \boldsymbol{u}_{2}, \boldsymbol{u}_{3}, \boldsymbol{u}_{4})$ 为列分块，利用初等行变换容易验证 $\{\boldsymbol{u}_{1}, \boldsymbol{u}_{2}, \boldsymbol{u}_{4}\}$ 是 A 的列向量的极大无关组，再利用 Cauchy-Binet 公式可得 $G\begin{pmatrix}1 & 2 & 4 \\ 1 & 2 & 4\end{pmatrix} > 0,$ 但 $|G| = |A|^{2} = 0,$ 故由例 9.36 (1) 可知 $\{\alpha_{1}, \alpha_{2}, \alpha_{4}\}$ 是一组极大无关组，其 Gram 矩阵为

$$
\boldsymbol {G} (\boldsymbol {\alpha} _ {1}, \boldsymbol {\alpha} _ {2}, \boldsymbol {\alpha} _ {4}) = \left( \begin{array}{c c c c} 1 & 1 & 1 & 1 \\ 4 & 1 & 7 & 0 \\ 3 & 3 & 9 & 1 \end{array} \right) \left( \begin{array}{c c c} 1 & 4 & 3 \\ 1 & 1 & 3 \\ 1 & 7 & 9 \\ 1 & 0 & 1 \end{array} \right) = \left( \begin{array}{c c c} 4 & 1 2 & 1 6 \\ 1 2 & 6 6 & 7 8 \\ 1 6 & 7 8 & 1 0 0 \end{array} \right).
$$

经计算可得 G 的 Cholesky 分解为

$$
\boldsymbol {G} (\boldsymbol {\alpha} _ {1}, \boldsymbol {\alpha} _ {2}, \boldsymbol {\alpha} _ {4}) = \left( \begin{array}{c c c} 4 & 1 2 & 1 6 \\ 1 2 & 6 6 & 7 8 \\ 1 6 & 7 8 & 1 0 0 \end{array} \right) = \left( \begin{array}{c c c} 2 & 0 & 0 \\ 6 & \sqrt {3 0} & 0 \\ 8 & \sqrt {3 0} & \sqrt {6} \end{array} \right) \left( \begin{array}{c c c} 2 & 6 & 8 \\ 0 & \sqrt {3 0} & \sqrt {3 0} \\ 0 & 0 & \sqrt {6} \end{array} \right),
$$

故由例 9.36 (3) 可知, 经 Gram-Schmidt 正交化方法从 $\{\alpha_{1}, \alpha_{2}, \alpha_{4}\}$ 得到的正交标准向量组 $\{\gamma_{1}, \gamma_{2}, \gamma_{4}\}$ 之间的线性关系为

$$
(\gamma_ {1}, \gamma_ {2}, \gamma_ {4}) = (\alpha_ {1}, \alpha_ {2}, \alpha_ {4}) P, \quad P = \left( \begin{array}{c c c} 2 & 6 & 8 \\ 0 & \sqrt {3 0} & \sqrt {3 0} \\ 0 & 0 & \sqrt {6} \end{array} \right) ^ {- 1} = \left( \begin{array}{c c c} \frac {1}{2} & - \frac {3}{\sqrt {3 0}} & - \frac {1}{\sqrt {6}} \\ 0 & \frac {1}{\sqrt {3 0}} & - \frac {1}{\sqrt {6}} \\ 0 & 0 & \frac {1}{\sqrt {6}} \end{array} \right). \square
$$

例 9.38 设 V, U 都是 n 维欧氏空间, $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 和 $\{\beta_{1}, \beta_{2}, \cdots, \beta_{m}\}$ 分别是 V 和 U 中的向量组. 证明: 存在保积同构 $\varphi: V \to U$ , 使得

$$
\varphi (\alpha_ {i}) = \beta_ {i} (1 \leq i \leq m)
$$

成立的充要条件是这两组向量的 Gram 矩阵相等.

证明 必要性类似于例 9.35 的必要性的证明, 下证充分性. 设向量组 $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 和 $\{\beta_{1}, \beta_{2}, \cdots, \beta_{m}\}$ 有相同的 Gram 矩阵, $V_{1} = L(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}), U_{1} = L(\beta_{1}, \beta_{2}, \cdots, \beta_{m})$ . 设 $\{\alpha_{i_{1}}, \alpha_{i_{2}}, \cdots, \alpha_{i_{r}}\}$ 是向量组 $\{\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}\}$ 的极大无关组, 若设 $c_{1} \beta_{i_{1}} + c_{2} \beta_{i_{2}} + \cdots + c_{r} \beta_{i_{r}} = 0$ , 则由例 9.36 (2) 可得 $c_{1} \alpha_{i_{1}} + c_{2} \alpha_{i_{2}} + \cdots +$ $c_{r}\alpha_{i_{r}}=0$ ，从而 $c_{1}=c_{2}=\cdots=c_{r}=0$ ，即 $\beta_{i_{1}},\beta_{i_{2}},\cdots,\beta_{i_{r}}$ 线性无关；又对任意的 $i\neq i_{1},i_{2},\cdots,i_{r}$ ，若设 $\alpha_{i}=a_{1}\alpha_{i_{1}}+a_{2}\alpha_{i_{2}}+\cdots+a_{r}\alpha_{i_{r}}$ ，则由例9.36(2)可得 $\beta_{i}=a_{1}\beta_{i_{1}}+a_{2}\beta_{i_{2}}+\cdots+a_{r}\beta_{i_{r}}$ ，于是 $\{\beta_{i_{1}},\beta_{i_{2}},\cdots,\beta_{i_{r}}\}$ 也是向量组 $\{\beta_{1},\beta_{2},\cdots,\beta_{m}\}$ 的极大无关组，从而 $\{\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}\}$ 和 $\{\beta_{i_{1}},\beta_{i_{2}},\cdots,\beta_{i_{r}}\}$ 分别是 $V_{1},U_{1}$ 的一组基。定义线性映射 $\varphi_{1}:V_{1}\to U_{1}$ 为 $\varphi_{1}(\alpha_{i_{k}})=\beta_{i_{k}}(1\leq k\leq r)$ ，则由例9.35的充分性可知， $\varphi_{1}:V_{1}\to U_{1}$ 是保积同构。对任意的 $i\neq i_{1},i_{2},\cdots,i_{r}$ ，

$$
\varphi_ {1} (\boldsymbol {\alpha} _ {i}) = \varphi_ {1} \left(\sum_ {k = 1} ^ {r} a _ {k} \boldsymbol {\alpha} _ {i _ {k}}\right) = \sum_ {k = 1} ^ {r} a _ {k} \varphi_ {1} (\boldsymbol {\alpha} _ {i _ {k}}) = \sum_ {k = 1} ^ {r} a _ {k} \beta_ {i _ {k}} = \beta_ {i},
$$

从而 $\varphi_{1}(\alpha_{i})=\beta_{i}(1\leq i\leq m)$ . 注意到 $V=V_{1}\perp V_{1}^{\perp}, U=U_{1}\perp U_{1}^{\perp}$ ，故可取 $V_{1}^{\perp}$ 的一组标准正交基 $\gamma_{r+1},\cdots,\gamma_{n},U_{1}^{\perp}$ 的一组标准正交基 $\delta_{r+1},\cdots,\delta_{n}$ ，定义线性映射 $\varphi_{2}:V_{1}^{\perp}\to U_{1}^{\perp}$ 为 $\varphi_{2}(\gamma_{j})=\delta_{j}(r+1\leq j\leq n)$ ，则 $\varphi_{2}:V_{1}^{\perp}\to U_{1}^{\perp}$ 也是保积同构。下面定义线性映射 $\varphi:V\to U$ ，对任一 $v=\alpha+\gamma\in V$ ，其中 $\alpha\in V_{1},\gamma\in V_{1}^{\perp}$ ，定义 $\varphi(v)=\varphi_{1}(\alpha)+\varphi_{2}(\gamma)$ ，容易验证 $\varphi:V\to U$ 是线性同构。我们还有

$$
\begin{array}{l} (\varphi (\boldsymbol {v}), \varphi (\boldsymbol {v})) = (\varphi_ {1} (\alpha) + \varphi_ {2} (\gamma), \varphi_ {1} (\alpha) + \varphi_ {2} (\gamma)) = (\varphi_ {1} (\alpha), \varphi_ {1} (\alpha)) + (\varphi_ {2} (\gamma), \varphi_ {2} (\gamma)) \\ = (\alpha , \alpha) + (\gamma , \gamma) = (\alpha + \gamma , \alpha + \gamma) = (v, v), \\ \end{array}
$$

故 $\varphi : V \to U$ 保持范数, 从而是满足题目条件的保积同构. $\square$ 

注 若设 $\{\alpha_{i_{1}},\alpha_{i_{2}},\cdots,\alpha_{i_{r}}\}$ 是向量组 $\{\alpha_{1},\alpha_{2},\cdots,\alpha_{m}\}$ 的极大无关组，则由例 9.36 (1) 可以直接得到 $\{\beta_{i_{1}},\beta_{i_{2}},\cdots,\beta_{i_{r}}\}$ 也是向量组 $\{\beta_{1},\beta_{2},\cdots,\beta_{m}\}$ 的极大无关组.

例 9.38 具有十分明显的几何意义, 并且它的证明是构造性的, 从而可用来构造满足某些条件的保积同构. 例 9.37 的解法 2 和例 9.39 是两个应用.

例 9.37 的解法 2 设 $A = (u_1, u_2, u_3, u_4)$ 为列分块, 容易验证 $\{u_1, u_2, u_4\}$ 是 $A$ 的列向量的极大无关组. 设 $U = L(u_1, u_2, u_3, u_4)$ , 则 $U$ 是 $\mathbb{R}^4$ (取标准内积) 的三维子空间, 并且 $A'A$ 就是列向量组 $\{u_1, u_2, u_3, u_4\}$ 的 Gram 矩阵. 由假设 $G(\alpha_1, \alpha_2, \alpha_3, \alpha_4) = G(u_1, u_2, u_3, u_4)$ , 故由例 9.38 可知, 存在一个从 $V$ 的三维子空间 $W$ 到 $U$ 上的保积同构 $\varphi$ , 使得 $\varphi(\alpha_i) = u_i (1 \leq i \leq 4)$ . 由于保积同构保持极大无关组的下指标, 并且保持对应向量在 Gram-Schmidt 正交化和标准化过程中出现的所有系数 (参考例 9.36 (3)), 故 $\{\alpha_1, \alpha_2, \alpha_4\}$ 就是向量组 $\{\alpha_1, \alpha_2, \alpha_3, \alpha_4\}$ 的极大无关组, 并且求 $\{\alpha_1, \alpha_2, \alpha_4\}$ 与 Gram-Schmidt 正交化方法得到的标准正交向量组 $\{\gamma_1, \gamma_2, \gamma_4\}$ 之间的线性关系等价于求 $\{u_1, u_2, u_4\}$ 与 Gram-Schmidt 正交化方法得到的标准正交向量组 $\{w_{1}, w_{2}, w_{4}\}$ 之间的线性关系. 经计算可得

$$
\left(\boldsymbol {w} _ {1}, \boldsymbol {w} _ {2}, \boldsymbol {w} _ {4}\right) = \left(\boldsymbol {u} _ {1}, \boldsymbol {u} _ {2}, \boldsymbol {u} _ {4}\right) \boldsymbol {P}, \quad \boldsymbol {P} = \left( \begin{array}{c c c} \frac {1}{2} & - \frac {3}{\sqrt {3 0}} & - \frac {1}{\sqrt {6}} \\ 0 & \frac {1}{\sqrt {3 0}} & - \frac {1}{\sqrt {6}} \\ 0 & 0 & \frac {1}{\sqrt {6}} \end{array} \right),
$$

因此 $(\gamma_{1},\gamma_{2},\gamma_{4}) = (\alpha_{1},\alpha_{2},\alpha_{4})P.$ □

#### 3. 正交变换与镜像变换

实 (复) 内积空间 $V$ 上的保积自同构称为正交变换 (酉变换), 这是内积空间理论中一个重要的研究对象. 前面关于保积同构的判定准则都适用于正交变换 (酉变换), 此外利用伴随算子, 我们还有如下判定准则: 线性变换 $\varphi$ 是正交变换 (酉变换) 当且仅当 $\varphi^{*} = \varphi^{-1}$ , 当且仅当 $\varphi$ 在 $V$ 的某一组 (任一组) 标准正交基下的表示矩阵为正交矩阵 (酉矩阵).

例 9.39 设 A, B 是 $m \times n$ 实矩阵, 求证: $A'A = B'B$ 的充要条件是存在 m 阶正交矩阵 Q, 使得 A = QB.

证明 充分性显然成立, 下证必要性. 取 $V = \mathbb{R}^{m}$ 上的标准内积, 设 $A = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}), B = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ 为列分块, 则由 $A' A = B'B$ 可得 $G(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}) = G(\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ , 再由例 9.38 可知, 存在 $V$ 上的正交变换 $\varphi$ , 使得 $\varphi(\beta_{i}) = \alpha_{i} (1 \leq i \leq n)$ . 设 $\varphi$ 在 $V$ 的标准单位列向量构成的标准正交基下的表示矩阵为 $Q$ , 则 $Q$ 为正交矩阵且 $Q\beta_{i} = \alpha_{i} (1 \leq i \leq n)$ , 因此

$$
Q B = (Q \beta_ {1}, Q \beta_ {2}, \dots , Q \beta_ {n}) = (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) = A. \square
$$

镜像变换是一种正交变换, 它特别简单, 容易研究, 而一般的正交变换都可以表示为镜像变换之积, 这就使它在正交变换中显得特别重要. 例 9.40 介绍了镜像变换的定义; 例 9.41 介绍了镜像矩阵的定义以及和镜像变换的基本关系; 例 9.42 是常用的构造镜像变换的方法; 例 9.43 是一个著名的结论, 称为 Cartan-Dieudonné 定理, 它把正交变换 (正交矩阵) 表示为若干个镜像变换 (镜像矩阵) 之积. 证明采用数学归纳法, 这也是处理这类问题的常用方法.

例 9.40 (1) 设 v 是 n 维欧氏空间 V 中长度为 1 的向量, 定义线性变换:

$$
\varphi (\boldsymbol {x}) = \boldsymbol {x} - 2 (\boldsymbol {v}, \boldsymbol {x}) \boldsymbol {v},
$$

证明: $\varphi$ 是正交变换且 $\operatorname{det} \varphi = -1$ ;

(2) 设 $\psi$ 是 $n$ 维欧氏空间 $V$ 中的正交变换, 1 是 $\psi$ 的特征值且几何重数等于 $n - 1$ , 证明: 必存在 $V$ 中长度为 1 的向量 $\pmb{v}$ , 使得

$$
\psi (\boldsymbol {x}) = \boldsymbol {x} - 2 (\boldsymbol {v}, \boldsymbol {x}) \boldsymbol {v}.
$$

证明 (1) 取 $e_1 = v$ , 并将它扩张为 $V$ 的一组标准正交基 $e_1, e_2, \cdots, e_n$ , 则 $\varphi(e_1) = -e_1$ , $\varphi(e_i) = e_i (i > 1)$ , 于是 $\varphi$ 在这组标准正交基下的表示矩阵为 $\operatorname{diag}\{-1, 1, \cdots, 1\}$ . 这是一个正交矩阵, 因此 $\varphi$ 是正交变换且行列式值为 $-1$ .

(2) 设 $\psi$ 的属于特征值 1 的特征子空间为 $V_{1}$ , 由假设 $\dim V_{1} = n - 1$ , 取 $V_{1}$ 的一组标准正交基 $e_{2}, \cdots, e_{n}$ , 则 $\psi(e_{i}) = e_{i} (2 \leq i \leq n)$ . 设 $V_{1}^{\perp} = L(e_{1})$ , 其中 $e_{1}$ 是单位向量, 则 $e_{1}, e_{2}, \cdots, e_{n}$ 是 $V$ 的一组标准正交基. 注意到 $V_{1}$ 是 $\psi$ 的不变子空间, 故由例 9.26 可知, $V_{1}^{\perp} = L(e_{1})$ 是 $\psi^{*} = \psi^{-1}$ 的不变子空间, 从而也是 $\psi$ 的不变子空间, 于是 $e_{1}$ 是 $\psi$ 的特征向量. 设 $\psi(e_{1}) = \lambda_{1}e_{1}$ , 其中特征值 $\lambda_{1}$ 为实数. 由于 $\psi$ 是正交变换, 故 $\lambda_{1}$ 等于 1 或 -1. 若 $\lambda_{1} = 1$ , 则 $\psi(e_{1}) = e_{1}$ , 从而 $\psi$ 的属于特征值 1 的特征子空间将是 $V$ , 这与假设矛盾. 因此 $\lambda_{1} = -1$ , 即有 $\psi(e_{1}) = -e_{1}$ . 令 $v = e_{1}$ , 作线性变换

$$
\varphi (\boldsymbol {x}) = \boldsymbol {x} - 2 (\boldsymbol {v}, \boldsymbol {x}) \boldsymbol {v},
$$

不难验证 $\psi(e_i) = \varphi(e_i) (1 \leq i \leq n)$ 成立, 故 $\psi = \varphi$ . □

注 例 9.40 中的线性变换 $\varphi$ 称为镜像变换. 镜像变换的几何意义是: 它将某个向量 (如上例的向量 $v$ ) 变为其反向向量, 而和该向量正交的向量保持不动. 更加直观的描述是: 镜像变换就是关于某个 $n - 1$ 维超平面 (如上例的 $L(v)^{\perp}$ ) 的镜像对称.

例 9.41 设 n 阶矩阵 $M = I_{n} - 2\alpha\alpha'$ ，其中 $\alpha$ 是 n 维实列向量且 $\alpha'\alpha = 1$ ，这样的 M 称为镜像矩阵。设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换，求证： $\varphi$ 是镜像变换的充要条件是 $\varphi$ 在 V 的某一组（任一组）标准正交基下的表示矩阵为镜像矩阵。

证明 先证必要性. 设 $\varphi$ 是镜像变换, 则由例 9.40 可知, $\varphi$ 在 $V$ 的某一组标准正交基下的表示矩阵为 $A = \mathrm{diag}\{-1,1,\dots ,1\} = I_n - 2\beta \beta '$ , 其中 $\beta = (1,0,\dots ,0)'$ . 设 $\varphi$ 在 $V$ 的任一组标准正交基下的表示矩阵为 $M$ , 则 $M$ 和 $A$ 正交相似, 即存在正交矩阵 $P$ , 使得 $M = PAP'$ , 于是

$$
\boldsymbol {M} = \boldsymbol {P} (\boldsymbol {I} _ {n} - 2 \beta \beta^ {\prime}) \boldsymbol {P} ^ {\prime} = \boldsymbol {I} _ {n} - 2 (\boldsymbol {P} \beta) (\boldsymbol {P} \beta) ^ {\prime}.
$$

令 $\alpha = P\beta,$ 则 $\alpha$ 的长度为 1 且 $M = I_{n} - 2\alpha\alpha'$ .

再证充分性. 设 $\varphi$ 在 V 的某一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 下的表示矩阵为 $M = I_{n} - 2\alpha\alpha'$ ，其中 $\alpha' \alpha = 1$ . 设 $\alpha = (a_{1}, a_{2}, \cdots, a_{n})'$ ，令 $v = a_{1}e_{1} + a_{2}e_{2} + \cdots + a_{n}e_{n}$ . 对 V 中任一向量 $x = b_{1}e_{1} + b_{2}e_{2} + \cdots + b_{n}e_{n}$ ，记 $\beta = (b_{1}, b_{2}, \cdots, b_{n})'$ ，则

$$
M \beta = \beta - 2 \alpha \alpha^ {\prime} \beta = \beta - 2 (\alpha , \beta) \alpha .
$$

由线性变换和表示矩阵的一一对应可得

$$
\varphi (\boldsymbol {x}) = \boldsymbol {x} - 2 (\boldsymbol {v}, \boldsymbol {x}) \boldsymbol {v},
$$

注意到 v 的长度为 1, 故 $\varphi$ 是镜像变换. □

例 9.42 设 u, v 是欧氏空间中两个长度相等的不同向量, 求证: 必存在镜像变换 $\varphi$ , 使得 $\varphi(u) = v$ .

证明 令

$$
e = \frac {\boldsymbol {u} - \boldsymbol {v}}{\| \boldsymbol {u} - \boldsymbol {v} \|},
$$

定义 $\varphi$ 如下:

$$
\varphi (x) = x - 2 (e, x) e,
$$

则 $\varphi$ 是镜像变换, 注意 $(\pmb{u},\pmb{u}) = (\pmb{v},\pmb{v})$ , 我们有

$$
\left\| \boldsymbol {u} - \boldsymbol {v} \right\| ^ {2} = (\boldsymbol {u} - \boldsymbol {v}, \boldsymbol {u} - \boldsymbol {v}) = (\boldsymbol {u}, \boldsymbol {u}) + (\boldsymbol {v}, \boldsymbol {v}) - 2 (\boldsymbol {u}, \boldsymbol {v}) = 2 (\boldsymbol {u}, \boldsymbol {u}) - 2 (\boldsymbol {u}, \boldsymbol {v}) = 2 (\boldsymbol {u}, \boldsymbol {u} - \boldsymbol {v}).
$$

$$
\varphi (\boldsymbol {u}) = \boldsymbol {u} - 2 (\boldsymbol {e}, \boldsymbol {u}) \boldsymbol {e} = \boldsymbol {u} - 2 \left(\frac {\boldsymbol {u} - \boldsymbol {v}}{\| \boldsymbol {u} - \boldsymbol {v} \|}, \boldsymbol {u}\right) \frac {\boldsymbol {u} - \boldsymbol {v}}{\| \boldsymbol {u} - \boldsymbol {v} \|} = \boldsymbol {u} - 2 \frac {(\boldsymbol {u} , \boldsymbol {u} - \boldsymbol {v})}{\| \boldsymbol {u} - \boldsymbol {v} \| ^ {2}} (\boldsymbol {u} - \boldsymbol {v}) = \boldsymbol {v}.
$$

例 9.43 n 维欧氏空间中任一正交变换均可表示为不超过 n 个镜像变换之积.

证明 对 n 进行归纳. 当 n=1 时, 正交变换 $\varphi$ 或是恒等变换, 或是 $\varphi(x)=-x$ , 后者已是镜像变换, 而恒等变换可看成是零个镜像变换之积, 故结论成立. 假设结论对 n-1 成立, 现设 V 是 n 维欧氏空间, $\varphi$ 是 V 上的正交变换. 若 $\varphi$ 是恒等变换, 则可看成是零个镜像变换之积, 故结论成立. 下设 $\varphi$ 不是恒等变换, 取 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ , 则存在某个 i, 使得 $\varphi(e_{i}) \neq e_{i}$ . 不失一般性, 可设 $\varphi(e_{1}) \neq e_{1}$ , 因为 $\|\varphi(e_{1})\| = \|e_{1}\| = 1$ , 故由例 9.42 可知, 存在镜像变换 $\psi$ , 使得 $\psi\varphi(e_{1}) = e_{1}$ . 注意到 $\psi\varphi$ 也是正交变换, 故 $(\psi\varphi)^{*}(e_{1}) = (\psi\varphi)^{-1}(e_{1}) = e_{1}$ , 于是 $V_{1} = L(e_{1})^{\perp}$ 是 $\psi\varphi$ 的不变子空间. 由归纳假设, $\psi\varphi|_{V_{1}} = \psi_{1}\psi_{2} \cdots \psi_{k}$ , 其中 $k \leq n-1$ , 且每个 $\psi_{i}$ 都是 $V_{1}$ 上的镜像变换. 我们可将 $\psi_{i}$ 扩张到全空间 V 上, 满足 $\psi_{i}(e_{1}) = e_{1}$ , 不难验证得到的线性变换都是 V 上的镜像变换 (仍记为 $\psi_{i}$ ). 注意到 $\psi^{-1} = \psi^{*} = \psi$ , 故

$$
\varphi = \psi^ {- 1} \psi_ {1} \dots \psi_ {k} = \psi \psi_ {1} \dots \psi_ {k}
$$

可表示为不超过 $n$ 个镜像变换之积, 结论得证. $\square$ 

下面是镜像变换的两个应用, 首先我们给出矩阵 $QR$ 分解的另一证明.

例 9.13 设 A 是 n 阶实矩阵, 则 A 可分解为 A = QR, 其中 Q 是正交矩阵, R 是一个主对角元全大于等于零的上三角矩阵, 并且若 A 是可逆矩阵, 则这样的分解必唯一.

证法2 对阶数 $n$ 进行归纳. 当 $n = 1$ 时结论显然成立. 假设对 $n - 1$ 阶矩阵结论成立, 现证 $n$ 阶矩阵的情形. 设 $\mathbf{A} = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为其列分块, $\beta = (\|\alpha_{1}\|, 0, \cdots, 0)'$ 为 $n$ 维列向量, 则 $\|\alpha_{1}\| = \|\beta\|$ , 故由例9.42可知, 存在 $n$ 阶单位矩阵或镜像矩阵 $\mathbf{M}$ , 使得 $M\alpha_{1} = \beta$ . 于是

$$
M A = (M \alpha_ {1}, M \alpha_ {2}, \dots , M \alpha_ {n}) = \left( \begin{array}{c c} \| \alpha_ {1} \| & * \\ O & A _ {1} \end{array} \right),
$$

其中 $A_{1}$ 是 $n - 1$ 阶实矩阵. 由归纳假设, 存在 $n - 1$ 阶正交矩阵 $Q_{1}$ 和主对角元全大于等于零的上三角矩阵 $\mathbf{R}_{1}$ , 使得 $A_{1} = Q_{1} R_{1}$ . 容易验证单位矩阵或镜像矩阵 $M$ 适合 $M^{-1} = M' = M$ , 因此

$$
\boldsymbol {A} = \boldsymbol {M} \left( \begin{array}{c c} \| \boldsymbol {\alpha} _ {1} \| & * \\ \boldsymbol {O} & \boldsymbol {Q} _ {1} \boldsymbol {R} _ {1} \end{array} \right) = \boldsymbol {M} \left( \begin{array}{c c} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} _ {1} \end{array} \right) \left( \begin{array}{c c} \| \boldsymbol {\alpha} _ {1} \| & * \\ \boldsymbol {O} & \boldsymbol {R} _ {1} \end{array} \right).
$$

令

$$
\boldsymbol {Q} = \boldsymbol {M} \left( \begin{array}{c c} 1 & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {Q} _ {1} \end{array} \right), \quad \boldsymbol {R} = \left( \begin{array}{c c} \| \boldsymbol {\alpha} _ {1} \| & * \\ \boldsymbol {O} & \boldsymbol {R} _ {1} \end{array} \right),
$$

显然 A = QR 满足要求. 当 A 是可逆矩阵时, QR 分解的唯一性同证法 1. □

例 9.44 设 Q 为 n 阶正交矩阵, 1 不是 Q 的特征值. 设 $P = I_{n} - 2\alpha\alpha'$ , 其中 $\alpha$ 是 n 维实列向量且 $\alpha' \alpha = 1$ . 求证: 1 是 PQ 的特征值.

证明 由于1不是Q的特征值, 故 $Q - I_n$ 为可逆矩阵, 令 $x = (Q - I_n)^{-1}\alpha$ , 则非零实列向量x满足Qx-x=α. 取 $R^n$ 的标准内积, 由Q为正交矩阵可知 $\| Qx\| = \| x\|$ , 并且P是关于n-1维超平面 $L(\alpha)^\perp$ 的镜像对称, 故由 $Qx - x = \alpha$ 以及例9.42可知 $P(Qx) = x$ , 即x是PQ关于特征值1的特征向量, 结论得证. □

#### 4. 正交矩阵的性质

正交矩阵的刻画是: $n$ 阶实矩阵 $\mathbf{A}$ 为正交矩阵当且仅当 $\mathbf{A}$ 的 $n$ 个行向量构成 $\mathbb{R}_n$ (取标准内积) 的一组标准正交基, 也当且仅当 $\mathbf{A}$ 的 $n$ 个列向量构成 $\mathbb{R}^n$ (取标准内积)的一组标准正交基. 另外, 正交矩阵的行列式值等于 $\pm 1$ , 特征值是模长等于 1 的复数. 下面我们来看一些应用正交矩阵性质的典型例题.

例 9.44 的推广 设 Q 为 n 阶正交矩阵, 1 不是 Q 的特征值. 设 P 为 n 阶正交矩阵, $|P| = -1$ . 求证: 1 是 PQ 的特征值.

证明 若 A 为正交矩阵，则可设 A 的全体特征值为 $1, \cdots, 1, -1, \cdots, -1$ ， $\cos\theta_{i} \pm i\sin\theta_{i}(1 \leq i \leq r)$ ，其中 $\sin\theta_{i} \neq 0$ 。若 1 不是 A 的特征值，则特征值 -1 有 n - 2r 个，从而 $|A| = (-1)^{n-2r} = (-1)^{n}$ 。回到本题，由条件可知 $|P| = -1$ ， $|Q| = (-1)^{n}$ ，从而 $|PQ| = (-1)^{n+1} \neq (-1)^{n}$ 。注意到 PQ 仍为正交阵，从而 1 必为 PQ 的特征值。☐

设正交矩阵 $\boldsymbol{A}=(a_{ij})$ ，则 $A^{\prime}=A^{-1}=|A|^{-1}A^{*}$ ，于是 $a_{ij}=|A|^{-1}A_{ij}=\pm A_{ij}$ ，其中 $A_{ij}$ 是元素 $a_{ij}$ 的代数余子式。这个结论还可以推广，这就是下面的命题。

例 9.45 设 A 是 n 阶正交矩阵, 求证: A 的任一 k 阶子式 $A\left(\begin{matrix}i_{1}&i_{2}&\cdots&i_{k}\\ j_{1}&j_{2}&\cdots&j_{k}\end{matrix}\right)$ 的值等于 $|A|^{-1}$ 乘以其代数余子式的值.

证明 先对特殊情形 $A\begin{pmatrix}1&2&\cdots&k\\1&2&\cdots&k\end{pmatrix}$ 进行证明. 设 $A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}$ ,
其中 $|A_{11}| = A \begin{pmatrix} 1 & 2 & \cdots & k \\ 1 & 2 & \cdots & k \end{pmatrix}$ ， $|A_{22}|$ 就是 $|A_{11}|$ 的代数余子式. 注意到 $A' = \begin{pmatrix} A_{11}' & A_{21}' \\ A_{12}' & A_{22}' \end{pmatrix}$ ，故由 $AA' = I_n$ 可得

$$
\left( \begin{array}{c c} A _ {1 1} A _ {1 1} ^ {\prime} + A _ {1 2} A _ {1 2} ^ {\prime} & A _ {1 1} A _ {2 1} ^ {\prime} + A _ {1 2} A _ {2 2} ^ {\prime} \\ A _ {2 1} A _ {1 1} ^ {\prime} + A _ {2 2} A _ {1 2} ^ {\prime} & A _ {2 1} A _ {2 1} ^ {\prime} + A _ {2 2} A _ {2 2} ^ {\prime} \end{array} \right) = \left( \begin{array}{c c} I _ {k} & O \\ O & I _ {n - k} \end{array} \right).
$$

于是

$$
\boldsymbol {A} _ {1 1} \boldsymbol {A} _ {1 1} ^ {\prime} + \boldsymbol {A} _ {1 2} \boldsymbol {A} _ {1 2} ^ {\prime} = \boldsymbol {I} _ {k}, \quad \boldsymbol {A} _ {2 1} \boldsymbol {A} _ {2 1} ^ {\prime} + \boldsymbol {A} _ {2 2} \boldsymbol {A} _ {2 2} ^ {\prime} = \boldsymbol {I} _ {n - k}, \quad \boldsymbol {A} _ {2 1} \boldsymbol {A} _ {1 1} ^ {\prime} + \boldsymbol {A} _ {2 2} \boldsymbol {A} _ {1 2} ^ {\prime} = \boldsymbol {O}.
$$

令 $C = \begin{pmatrix} A_{11}' & O \\ A_{12}' & I_{n - k} \end{pmatrix}$ , 则 $|C| = |A_{11}'| = |A_{11}|$ . 又

$$
\boldsymbol {A} \boldsymbol {C} = \left( \begin{array}{c c} \boldsymbol {A} _ {1 1} \boldsymbol {A} _ {1 1} ^ {\prime} + \boldsymbol {A} _ {1 2} \boldsymbol {A} _ {1 2} ^ {\prime} & \boldsymbol {A} _ {1 2} \\ \boldsymbol {A} _ {2 1} \boldsymbol {A} _ {1 1} ^ {\prime} + \boldsymbol {A} _ {2 2} \boldsymbol {A} _ {1 2} ^ {\prime} & \boldsymbol {A} _ {2 2} \end{array} \right) = \left( \begin{array}{c c} \boldsymbol {I} _ {k} & \boldsymbol {A} _ {1 2} \\ \boldsymbol {O} & \boldsymbol {A} _ {2 2} \end{array} \right),
$$

故 $|\mathbf{A}\mathbf{C}| = |\mathbf{A}||\mathbf{C}| = |\mathbf{A}_{22}|$ ，即 $|\mathbf{A}||\mathbf{A}_{11}| = |\mathbf{A}_{22}|$ ，从而 $|\mathbf{A}_{11}| = |\mathbf{A}|^{-1}|\mathbf{A}_{22}|$ .

对一般情形, 将矩阵 A 的第 $i_{1}, i_{2}, \cdots, i_{k}$ 行经过 $(i_{1}-1)+(i_{2}-2)+\cdots+(i_{k}-k)=i_{1}+i_{2}+\cdots+i_{k}-\frac{1}{2}k(k+1)$ 次相邻对换移至第 $1,2,\cdots,k$ 行; 再将第 $j_{1}, j_{2}, \cdots, j_{k}$ 列经过 $(j_{1}-1)+(j_{2}-2)+\cdots+(j_{k}-k)=j_{1}+j_{2}+\cdots+j_{k}-\frac{1}{2}k(k+1)$ 次相邻对换移至第 $1,2,\cdots,k$ 列; 得到的矩阵记为 B. 因为第一类初等矩阵 $P_{ij}$ 也是正交矩阵, 故矩阵 B 仍是正交矩阵. 记 $p=i_{1}+i_{2}+\cdots+i_{k}, q=j_{1}+j_{2}+\cdots+j_{k}$ , 则 $|B|=(-1)^{p+q}|A|$ . 注意到

$$
\boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right) = \boldsymbol {B} \left( \begin{array}{c c c c} 1 & 2 & \dots & k \\ 1 & 2 & \dots & k \end{array} \right),
$$

$$
\widehat {\boldsymbol {A}} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right) = (- 1) ^ {p + q} \widehat {\boldsymbol {B}} \left( \begin{array}{c c c c} 1 & 2 & \dots & k \\ 1 & 2 & \dots & k \end{array} \right),
$$

并由特殊情形可得 $B\begin{pmatrix}1&2&\cdots&k\\1&2&\cdots&k\end{pmatrix}=|B|^{-1}\widehat{B}\begin{pmatrix}1&2&\cdots&k\\1&2&\cdots&k\end{pmatrix}$ ，因此

$$
\boldsymbol {A} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right) = | \boldsymbol {A} | ^ {- 1} \widehat {\boldsymbol {A}} \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {k} \\ j _ {1} & j _ {2} & \dots & j _ {k} \end{array} \right). \square
$$

正交矩阵的特征值的模长都等于 1, 这个结论也可作如下两个推广.

例 9.46 证明: 正交矩阵任一 k 阶子阵的特征值的模长都不超过 1.

证明 设 A 为 n 阶正交矩阵, 先对特殊情形 $A\begin{pmatrix}1&2&\cdots&k\\1&2&\cdots&k\end{pmatrix}$ 进行证明. 设 $A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}$ , 其中 $A_{11}=A\begin{pmatrix}1&2&\cdots&k\\1&2&\cdots&k\end{pmatrix}$ . 由 $A^{\prime}A=I_{n}$ 可得 $A_{11}^{\prime}A_{11}+A_{21}^{\prime}A_{21}=I_{k}$ . 任取 $A_{11}$ 的一个特征值 $\lambda\in C$ 以及对应的特征向量 $\alpha\in C^{k}$ , 则将上式左乘 $\overline{\alpha}^{\prime}$ , 右乘 $\alpha$ 可得

$$
\overline {{{(A _ {1 1} \alpha)}}} ^ {\prime} (A _ {1 1} \alpha) + \overline {{{(A _ {2 1} \alpha)}}} ^ {\prime} (A _ {2 1} \alpha) = \overline {{{\alpha}}} ^ {\prime} \alpha ,
$$

即有 $|\lambda|^2 \overline{\alpha}' \alpha + \overline{(A_{21} \alpha)}' (A_{21} \alpha) = \overline{\alpha}' \alpha,$ 从而 $(1 - |\lambda|^2) \overline{\alpha}' \alpha = \overline{(A_{21} \alpha)}' (A_{21} \alpha) \geq 0.$ 由 $\alpha \neq 0$ 可得 $\overline{\alpha}' \alpha > 0,$ 于是 $1 - |\lambda|^2 \geq 0,$ 即有 $|\lambda| \leq 1$ .

对一般情形, 经过行对换与列对换, 总可将正交矩阵 A 的 k 阶子阵换到左上角. 因为第一类初等矩阵 $P_{ij}$ 也是正交矩阵, 故变换后的矩阵 B 仍是正交矩阵, 从而由特殊情形即得结论成立. □

例 9.47 设 P 是 n 阶正交矩阵, $D = \text{diag}\{d_1, d_2, \cdots, d_n\}$ 是实对角矩阵, 记 m 和 M 分别是诸 $|d_i|$ 中的最小者和最大者. 求证: 若 $\lambda$ 是矩阵 PD 的特征值, 则 $m \leq |\lambda| \leq M$ .

证明 设特征值 $\lambda$ 对应的特征向量为 $\boldsymbol{\alpha}=(a_{1},a_{2},\cdots,a_{n})^{\prime}\in\mathbb{C}^{n}$ ，即有 $PD\alpha=\lambda\alpha$ ，上式共轭转置后可得 $\overline{\alpha}^{\prime}DP^{\prime}=\overline{\lambda}\overline{\alpha}^{\prime}$ 。将这两个等式相乘后可得 $\overline{\alpha}^{\prime}DP^{\prime}PD\alpha=\overline{\lambda}\lambda\overline{\alpha}^{\prime}\alpha$ ，即有 $\overline{\alpha}^{\prime}D^{2}\alpha=|\lambda|^{2}\overline{\alpha}^{\prime}\alpha$ 。由假设可得

$$
m ^ {2} \sum_ {i = 1} ^ {n} | a _ {i} | ^ {2} \leq \sum_ {i = 1} ^ {n} d _ {i} ^ {2} | a _ {i} | ^ {2} = | \lambda | ^ {2} \sum_ {i = 1} ^ {n} | a _ {i} | ^ {2} \leq M ^ {2} \sum_ {i = 1} ^ {n} | a _ {i} | ^ {2},
$$

由此即得 $m \leq |\lambda| \leq M$ . □

本节所有关于欧氏空间或正交矩阵的例题都可以平行地推广到酉空间或酉矩阵的情形, 我们把相关细节留给读者自己完成.

## § 9.6 用正交变换法化简二次型

设 $f(x) = x'Ax$ 为实二次型, $A$ 为相伴的实对称矩阵, 则通过非异线性变换 $x = Py$ 可将 $f(x)$ 化为只含平方项的标准型. 然而从几何的层面上看, 上述处理方法并不理想. 主要原因是在考虑几何对象的分类问题时, 所作的线性变换通常都要求保持度量, 即在欧氏空间中等价于保持内积或范数, 因为这对应于两组标准正交基之间的基变换, 所以过渡矩阵 $P$ 必须是正交矩阵 (更严格地还可以进一步要求 $|P| = 1$ ). 因此从几何的层面上看, 我们需要考虑实二次型和实对称矩阵在正交相似 (也是正交合同) 变换下的标准型. 由实对称矩阵的正交相似标准型理论可知, 存在正交矩阵 $P$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

其中 $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$ 是 A 的全体特征值. 因此通过正交变换 x=Py 可将 $f(x)$ 化为标准型

$$
\lambda_ {1} y _ {1} ^ {2} + \lambda_ {2} y _ {2} ^ {2} + \dots + \lambda_ {n} y _ {n} ^ {2}. \tag {9.10}
$$

具体地, 用正交变换化简二次型的步骤是:

(1) 写出二次型的系数矩阵 A, 求出 A 的特征值 $\lambda_{i}$ 及其线性无关的特征向量.

(2) 若 $\lambda_{i}$ 是 $k (k > 1)$ 重特征值, 则用 Gram-Schmidt 正交化方法将它的 $k$ 个线性无关的特征向量正交化. 由于属于不同特征值的特征向量必互相正交, 故单特征值对应的特征向量不必正交化.

(3) 假设已经得到 $n$ 个两两正交的特征向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ , 令 $\beta_{i} = \frac{\alpha_{i}}{\|\alpha_{i}\|} (1 \leq i \leq n)$ , 则 $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ 是一组两两正交的单位特征向量. 令 $P = (\beta_{1}, \beta_{2}, \cdots, \beta_{n})$ , 则 $P$ 就是要求的正交矩阵, 此时 $P'AP = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 注意 $\beta_{i}$ 是属于特征值 $\lambda_{i}$ 的特征向量.

注 如果实二次型中含有未知参数, 通常我们先求出这个参数, 再按上面的步骤求正交矩阵. 因为在正交变换过程中, 特征值保持不变, 所以常常利用特征值的性质确定参数. 比如常用的有: 特征值之和等于矩阵的迹; 特征值之积等于矩阵的行列式值等.

例 9.48 设实二次型 $f(x_{1}, x_{2}, x_{3}) = x_{1}^{2} + ax_{2}^{2} + x_{3}^{2} + 2bx_{1}x_{2} + 2x_{1}x_{3} + 2x_{2}x_{3}$ 经过正交变换 x = Py 可化为 $y_{2}^{2} + 4y_{3}^{2}$ ，求 a, b 的值和正交矩阵 P.

解 实二次型 $f$ 的系数矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & b & 1 \\ b & a & 1 \\ 1 & 1 & 1 \end{array} \right).
$$

由假设可知 A 的特征值为 0,1,4, 于是 $1 + a + 1 = 0 + 1 + 4$ , 从而 a = 3. 又 A 的行列式值等于 0, 经计算可得 b = 1.

经计算可知, $\lambda_{1} = 0$ 的特征向量为 $(1,0, - 1)^{\prime};\lambda_{2} = 1$ 的特征向量为 $(1, - 1,1)^{\prime};$ $\lambda_{3} = 4$ 的特征向量为 $(1,2,1)^{\prime}$ . 因为属于不同特征值的特征向量互相正交, 所以只需将它们单位化即可, 于是

$$
\boldsymbol {P} = \left( \begin{array}{c c c} \frac {1}{\sqrt {2}} & \frac {1}{\sqrt {3}} & \frac {1}{\sqrt {6}} \\ 0 & - \frac {1}{\sqrt {3}} & \frac {2}{\sqrt {6}} \\ - \frac {1}{\sqrt {2}} & \frac {1}{\sqrt {3}} & \frac {1}{\sqrt {6}} \end{array} \right). \square
$$

如果 $n$ 元实二次型的系数矩阵 $\mathbf{A}$ 有 $r$ 重特征根 $\lambda_0$ , 则 $\lambda_0$ 必有 $r$ 个线性无关的特征向量, 因此矩阵 $\lambda_0 I_n - A$ 的秩为 $n - r$ . 利用这个性质也可以决定实二次型中的未知参数. 下面是一个典型的例子.

例 9.49 设实二次型 $f(x_{1}, x_{2}, x_{3}) = 2x_{1}^{2} + 5x_{2}^{2} + 5x_{3}^{2} + 2ax_{1}x_{2} + 2bx_{1}x_{3} - 8x_{2}x_{3}$ 经过正交变换 x = Py 可化为 $y_{1}^{2} + y_{2}^{2} + cy_{3}^{2}$ ，求 a, b, c 的值和正交矩阵 P.

解 实二次型 f 的系数矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 2 & a & b \\ a & 5 & - 4 \\ b & - 4 & 5 \end{array} \right).
$$

由假设可知 A 的特征值为 1, 1, c, 于是 $1 + 1 + c = 2 + 5 + 5$ , 从而 c = 10. 注意到特征值 1 的代数重数等于 2, 故其几何重数也等于 2, 从而 $\mathrm{r}(I_{3} - A) = 1$ . 对 $I_{3} - A$ 进行初等变换:

$$
\boldsymbol {I} _ {3} - \boldsymbol {A} = \left(\begin{array}{c c c}- 1&- a&- b\\- a&- 4&4\\- b&4&- 4\end{array}\right)\rightarrow \left(\begin{array}{c c c}- 1&- a&- b\\- a&- 4&4\\- a - b&0&0\end{array}\right),
$$

故由 $\mathrm{r}(\pmb{I}_3 - \pmb{A}) = 1$ 可得 $-a - b = 0, \frac{-a}{-1} = \frac{-4}{-a} = \frac{4}{-b}$ , 解出 $a = 2, b = -2$ 或 $a = -2, b = 2$ .

当 a=2, b=-2 时, 经计算可知, 特征值 1 的两个线性无关的特征向量为

$$
\alpha_ {1} = (- 2, 1, 0) ^ {\prime}, \quad \alpha_ {2} = (2, 0, 1) ^ {\prime},
$$

将它们正交化再单位化得到

$$
\beta_ {1} = \left(- \frac {2}{\sqrt {5}}, \frac {1}{\sqrt {5}}, 0\right) ^ {\prime}, \quad \beta_ {2} = \left(\frac {2}{3 \sqrt {5}}, \frac {4}{3 \sqrt {5}}, \frac {\sqrt {5}}{3}\right) ^ {\prime};
$$

特征值 10 的特征向量为 $\alpha_{3}=(-1,-2,2)^{\prime}$ ，将其单位化得到 $\beta_{3}=(-\frac{1}{3},-\frac{2}{3},\frac{2}{3})^{\prime}$ ，于是正交矩阵

$$
\boldsymbol {P} = \left( \begin{array}{c c c} - \frac {2}{\sqrt {5}} & \frac {2}{3 \sqrt {5}} & - \frac {1}{3} \\ \frac {1}{\sqrt {5}} & \frac {4}{3 \sqrt {5}} & - \frac {2}{3} \\ 0 & \frac {\sqrt {5}}{3} & \frac {2}{3} \end{array} \right).
$$

当 $a = -2, b = 2$ 时，经类似的计算可得正交矩阵

$$
\boldsymbol {P} = \left( \begin{array}{c c c} - \frac {2}{\sqrt {5}} & \frac {2}{3 \sqrt {5}} & - \frac {1}{3} \\ - \frac {1}{\sqrt {5}} & - \frac {4}{3 \sqrt {5}} & \frac {2}{3} \\ 0 & - \frac {\sqrt {5}}{3} & - \frac {2}{3} \end{array} \right). \square
$$

每个 $n$ 阶实对称矩阵 $\pmb{A}$ 都有 $n$ 个两两正交的特征向量. 若已知 $\pmb{A}$ 的部分特征向量, 利用这个性质可求出其余特征向量, 从而求出正交矩阵 $\pmb{P}$ 以及 $\pmb{A}$ 自身. 下面的例子可以说明这一点.

例 9.50 设四阶实对称矩阵 A 的特征值为 0, 0, 0, 4, 且属于特征值 0 的线性无关特征向量为 $(-1, 1, 0, 0)'$ , $(-1, 0, 1, 0)'$ , $(-1, 0, 0, 1)'$ , 求出矩阵 A.

解 设属于特征值 4 的特征向量为 $(x_{1}, x_{2}, x_{3}, x_{4})'$ ，则它和属于特征值 0 的特征向量都正交，故

$$
\left\{ \begin{array}{l} - x _ {1} + x _ {2} = 0, \\ - x _ {1} + x _ {3} = 0, \\ - x _ {1} + x _ {4} = 0. \end{array} \right.
$$

解此方程组得到一个线性无关解 $(1,1,1,1)'$ . 用 Gram-Schmidt 正交化方法将属于特征值 0 的 3 个特征向量正交化再单位化得到

$$
\left(- \frac {1}{\sqrt {2}}, \frac {1}{\sqrt {2}}, 0, 0\right) ^ {\prime}, \quad \left(- \frac {1}{\sqrt {6}}, - \frac {1}{\sqrt {6}}, \frac {2}{\sqrt {6}}, 0\right) ^ {\prime}, \quad \left(- \frac {\sqrt {3}}{6}, - \frac {\sqrt {3}}{6}, - \frac {\sqrt {3}}{6}, \frac {\sqrt {3}}{2}\right) ^ {\prime}.
$$

又将属于特征值 4 的特征向量 $(1,1,1,1)'$ 单位化得到

$$
\left(\frac {1}{2}, \frac {1}{2}, \frac {1}{2}, \frac {1}{2}\right) ^ {\prime}.
$$

于是正交矩阵

$$
\boldsymbol {P} = \left( \begin{array}{c c c c} - \frac {1}{\sqrt {2}} & - \frac {1}{\sqrt {6}} & - \frac {\sqrt {3}}{6} & \frac {1}{2} \\ \frac {1}{\sqrt {2}} & - \frac {1}{\sqrt {6}} & - \frac {\sqrt {3}}{6} & \frac {1}{2} \\ 0 & \frac {2}{\sqrt {6}} & - \frac {\sqrt {3}}{6} & \frac {1}{2} \\ 0 & 0 & \frac {\sqrt {3}}{2} & \frac {1}{2} \end{array} \right),
$$

$$
\boldsymbol {A} = \boldsymbol {P} \operatorname{diag} \{0, 0, 0, 4 \} \boldsymbol {P} ^ {\prime} = \left( \begin{array}{c c c c} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{array} \right). \square
$$

例 9.51 设 $A = (a_{ij})$ 为三阶实对称矩阵, $A^{*}$ 为 A 的伴随矩阵,

$$
f (x _ {1}, x _ {2}, x _ {3}, x _ {4}) = \left| \begin{array}{c c c c} x _ {1} ^ {2} & x _ {2} & x _ {3} & x _ {4} \\ - x _ {2} & a _ {1 1} & a _ {1 2} & a _ {1 3} \\ - x _ {3} & a _ {2 1} & a _ {2 2} & a _ {2 3} \\ - x _ {4} & a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

若 $|\mathbf{A}| = -12$ , $\operatorname{tr}(\mathbf{A}) = 1$ , 且 $(1,0,-2)'$ 为线性方程组 $(\mathbf{A}^{*} - 4\mathbf{I}_{3})\mathbf{x} = \mathbf{0}$ 的解, 试给出正交变换 $\mathbf{x} = \mathbf{P}\mathbf{y}$ 将 $f(x_{1},x_{2},x_{3},x_{4})$ 化为标准型.

解 利用 $AA^{*} = |A|I_{3}$ 经简单计算可知, $\alpha_{1} = (1,0,-2)^{\prime}$ 也是线性方程组 $(A + 3I_{3})x = 0$ 的解, 因此 $\lambda_{1} = -3$ 是 $A$ 的特征值, $\alpha_{1}$ 是对应的特征向量. 设 $A$ 的另外两个特征值为 $\lambda_{2},\lambda_{3}$ , 则有

$$
| \boldsymbol {A} | = \lambda_ {1} \lambda_ {2} \lambda_ {3} = - 1 2, \quad \operatorname{tr} (\boldsymbol {A}) = \lambda_ {1} + \lambda_ {2} + \lambda_ {3} = 1,
$$

即有 $\lambda_{2} + \lambda_{3} = \lambda_{2}\lambda_{3} = 4$ ，从而可解出 $\lambda_{2} = \lambda_{3} = 2$ 。设特征值 2 对应的特征向量为 $(x_{1}, x_{2}, x_{3})'$ ，由于属于不同特征值的特征向量相互正交，故有 $x_{1} - 2x_{3} = 0$ ，从而可解出 $\alpha_{2} = (0,1,0)'$ ， $\alpha_{3} = (2,0,1)'$ 为特征值 2 的两个线性无关的特征向量。注意到 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 已经两两正交了，将其单位化后可得正交矩阵

$$
Q = \left( \begin{array}{c c c} \frac {1}{\sqrt {5}} & 0 & \frac {2}{\sqrt {5}} \\ 0 & 1 & 0 \\ - \frac {2}{\sqrt {5}} & 0 & \frac {1}{\sqrt {5}} \end{array} \right),
$$

使得 $Q^{\prime}AQ = diag\{-3, 2, 2\}$ . 又由降阶公式可得

$$
f (x _ {1}, x _ {2}, x _ {3}, x _ {4}) = | \boldsymbol {A} | \left(x _ {1} ^ {2} + (x _ {2}, x _ {3}, x _ {4}) \boldsymbol {A} ^ {- 1} (x _ {2}, x _ {3}, x _ {4}) ^ {\prime}\right).
$$

注意到 $Q^{\prime}A^{-1}Q = \mathrm{diag}\left\{-\frac{1}{3},\frac{1}{2},\frac{1}{2}\right\}$ ，若令 $P = \mathrm{diag}\{1,Q\}$ ，则 $P$ 是正交矩阵，并且正交变换 $\pmb {x} = \pmb {P}\pmb{y}$ 可将 $f(x_{1},x_{2},x_{3},x_{4})$ 化为标准型

$$
- 1 2 \left(y _ {1} ^ {2} - \frac {1}{3} y _ {2} ^ {2} + \frac {1}{2} y _ {3} ^ {2} + \frac {1}{2} y _ {4} ^ {2}\right) = - 1 2 y _ {1} ^ {2} + 4 y _ {2} ^ {2} - 6 y _ {3} ^ {2} - 6 y _ {4} ^ {2}. \square
$$

(9.10) 式还告诉我们: 通过计算实二次型 $f$ 的系数矩阵 $\mathbf{A}$ 的全体特征值, 可以快速得到 $f$ 或 $\mathbf{A}$ 的正负惯性指数 (即正负特征值的个数) 以及 $f$ 的规范标准型. 下面来看第 8 章中几道例题的新解法.

例 8.8 设 $\alpha$ 是 n 维实列向量且 $\alpha' \alpha = 1$ ，求矩阵 $I_{n} - 2\alpha\alpha'$ 的正负惯性指数.

解法 2 由例 6.20 或例 9.40 可知, $I_{n} - 2\alpha \alpha^{\prime}$ 的特征值为 1 ( $n - 1$ 重), $-1$ (1 重), 故其正负惯性指数分别为 $n - 1, 1$ . □

例 8.9 求 $n(n \geq 2)$ 阶实对称矩阵 A 的正负惯性指数, 其中 $a_{i}$ 均为实数:

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a _ {1} ^ {2} & a _ {1} a _ {2} + 1 & \dots & a _ {1} a _ {n} + 1 \\ a _ {2} a _ {1} + 1 & a _ {2} ^ {2} & \dots & a _ {2} a _ {n} + 1 \\ \vdots & \vdots & & \vdots \\ a _ {n} a _ {1} + 1 & a _ {n} a _ {2} + 1 & \dots & a _ {n} ^ {2} \end{array} \right).
$$

解法 2 由例 6.22 可知, A 的特征值为 $-1(n-2$ 重) 及矩阵 C 的两个特征值:

$$
C = \left( \begin{array}{c c} \sum_ {i = 1} ^ {n} a _ {i} ^ {2} - 1 & \sum_ {i = 1} ^ {n} a _ {i} \\ \sum_ {i = 1} ^ {n} a _ {i} & n - 1 \end{array} \right).
$$

由于 C 是实对称矩阵, 故其特征值 $\lambda_{1}, \lambda_{2}$ 都是实数; 又 $\lambda_{1} + \lambda_{2} = \operatorname{tr}(C) \geq 0$ , 故 $\lambda_{1}, \lambda_{2}$ 中至少有一个为非负实数. 因此, 若 $\lambda_{1}\lambda_{2} = |C| > 0$ , 则 $\lambda_{1}, \lambda_{2}$ 都是正实数; 若 $\lambda_{1}\lambda_{2} = |C| = 0$ , 则不妨设 $\lambda_{1} = 0$ , 于是 $\lambda_{2} = \operatorname{tr}(C) \geq 0$ . 显然 $\lambda_{2} \neq 0$ , 否则 C = O, 矛盾, 故 $\lambda_{2} > 0$ ; 若 $\lambda_{1}\lambda_{2} = |C| < 0$ , 则 $\lambda_{1}, \lambda_{2}$ 一正一负.

由例 2.67 可知 $\left|A\right|=(-1)^{n}\left|C\right|$ ，因此当 $(-1)^{n}\left|A\right|>0$ 时，A 的正负惯性指数分别为 2, n-2；当 $\left|A\right|=0$ 时，A 的正负惯性指数分别为 1, n-2；当 $(-1)^{n}\left|A\right|<0$ 时，A 的正负惯性指数分别为 1, n-1。☐

例 8.10 设 A 是 n 阶可逆实矩阵, $B = \begin{pmatrix} O & A \\ A' & O \end{pmatrix}$ , 求 B 的正负惯性指数.

解法2 由例2.76可得

$$
\left| \lambda I _ {2 n} - B \right| = \left| \lambda^ {2} I _ {n} - A ^ {\prime} A \right|.
$$

由于 A 是可逆实矩阵, 故 $A^{\prime}A$ 是正定实对称矩阵, 若设其特征值为 $\lambda_{i}>0(1\leq i\leq n)$ , 则 B 的特征值为 $\pm\sqrt{\lambda_{i}}(1\leq i\leq n)$ , 因此 B 的正负惯性指数都等于 n. □

例 8.32 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = x _ {1} x _ {2} + x _ {2} x _ {3} + \dots + x _ {n - 1} x _ {n}.
$$

解法 3 为了方便起见, 不妨考虑 $2f(x_{1}, x_{2}, \cdots, x_{n})$ 的系数矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 1 & & & \\ 1 & 0 & 1 & & \\ & 1 & \ddots & \ddots & \\ & & \ddots & \ddots & 1 \\ & & & 1 & 0 \end{array} \right).
$$

由例 6.65 的计算可知, A 的特征值为 $\lambda_{k}=2\cos\frac{k\pi}{n+1}(1\leq k\leq n)$ . 因此, 当 n=2m 时, A 有 m 个正特征值, m 个负特征值, 于是 f 的规范标准型为 $y_{1}^{2}-y_{2}^{2}+\cdots+y_{n-1}^{2}-y_{n}^{2}$ ; 当 $n=2m+1$ 时, A 有 m 个正特征值, m 个负特征值, 1 个零特征值, 于是 f 的规范标准型为 $y_{1}^{2}-y_{2}^{2}+\cdots+y_{n-2}^{2}-y_{n-1}^{2}$ . □

例 8.33 化下列实二次型为标准型:

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = \sum_ {i = 1} ^ {n} x _ {i} ^ {2} + \sum_ {1 \leq i <   j \leq n} x _ {i} x _ {j}.
$$

解法 4 为了方便起见, 不妨考虑 $2f(x_{1}, x_{2}, \cdots, x_{n})$ 的系数矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 2 & 1 & 1 & \dots & 1 \\ 1 & 2 & 1 & \dots & 1 \\ 1 & 1 & 2 & \dots & 1 \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & 1 & 1 & \dots & 2 \end{array} \right).
$$

由特征值的降阶公式可得 $\left|\lambda I_{n}-A\right|=(\lambda-1)^{n-1}(\lambda-n-1)$ ，故 A 的特征值为 1 (n-1 重)， $n+1$ (1 重)，于是 A 是正定阵。因此 f 为正定型，其规范标准型为 $y_{1}^{2}+y_{2}^{2}+\cdots+y_{n}^{2}$ 。☐

## § 9.7 实对称矩阵的正交相似标准型

实对称矩阵的正交相似标准型是一个强有力的工具. 设 A 和 B 正交相似, 即存在正交矩阵 P, 使得 $B = P'AP$ , 由于 $P' = P^{-1}$ , 故 B 和 A 既合同又相似, 因此利用正交相似标准型可以得到比一般的合同标准型更加深入的结果. 下面分 4 个方面阐述相关的内容.

#### 1. 实二次型值的估计以及实对称矩阵特征值的估计

例 9.52 设 A 是 n 阶实对称矩阵, 其特征值为 $\lambda_{1} \leq \lambda_{2} \leq \cdots \leq \lambda_{n}$ , 求证: 对任意的 n 维实列向量 $\alpha$ , 均有

$$
\lambda_ {1} \alpha^ {\prime} \alpha \leq \alpha^ {\prime} A \alpha \leq \lambda_ {n} \alpha^ {\prime} \alpha ,
$$

且前一个不等式等号成立的充要条件是 $\alpha$ 属于特征值 $\lambda_{1}$ 的特征子空间，后一个不等式等号成立的充要条件是 $\alpha$ 属于特征值 $\lambda_{n}$ 的特征子空间.

证明 设 P 为正交矩阵, 使得 $P^{\prime}AP = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 对任意的实列向量 $\alpha$ , 设 $\beta = P^{\prime}\alpha = (b_{1}, b_{2}, \cdots, b_{n})'$ , 则

$$
\begin{array}{l} \alpha^ {\prime} A \alpha = \beta^ {\prime} (P ^ {\prime} A P) \beta = \lambda_ {1} b _ {1} ^ {2} + \lambda_ {2} b _ {2} ^ {2} + \dots + \lambda_ {n} b _ {n} ^ {2} \\ \leq \lambda_ {n} b _ {1} ^ {2} + \lambda_ {n} b _ {2} ^ {2} + \dots + \lambda_ {n} b _ {n} ^ {2} = \lambda_ {n} \beta^ {\prime} \beta = \lambda_ {n} (P ^ {\prime} \alpha) ^ {\prime} (P ^ {\prime} \alpha) = \lambda_ {n} \alpha^ {\prime} \alpha , \\ \end{array}
$$

等号成立的充要条件是若 $\lambda_{i} \neq \lambda_{n}$ , 则 $b_{i} = 0$ , 这也等价于 $\alpha$ 属于特征值 $\lambda_{n}$ 的特征子空间. 同理可证前一个不等式及其等号成立的充要条件. $\square$ 

注 例 9.52 是例 8.50 的推广, 即利用实对称矩阵的正交相似标准型得到了实二次型取值的精确上下界. 例 9.52 还可以推广到 Hermite 矩阵的情形, 其证明只要将 $\alpha'$ 换成 $\overline{\alpha}'$ 即可. 然而这种推广并不是平凡的, 因为当我们处理一般的实矩阵时, 不可避免地会遇到复特征值和复特征向量, 此时若把实对称矩阵当作 Hermite 矩阵来处理, 会使讨论变得更加简洁. 这种技巧在第 8 章研究正定实对称矩阵时也用到过.

例 9.52 (Hermite 矩阵版本) 设 A 是 n 阶 Hermite 矩阵, 其特征值为 $\lambda_{1} \leq \lambda_{2} \leq \cdots \leq \lambda_{n}$ , 求证: 对任意的 n 维复列向量 $\alpha$ , 均有

$$
\lambda_ {1} \overline {{{{\alpha}}}} ^ {\prime} \alpha \leq \overline {{{{\alpha}}}} ^ {\prime} A \alpha \leq \lambda_ {n} \overline {{{{\alpha}}}} \alpha ,
$$

且前一个不等式等号成立的充要条件是 $\alpha$ 属于特征值 $\lambda_{1}$ 的特征子空间，后一个不等式等号成立的充要条件是 $\alpha$ 属于特征值 $\lambda_{n}$ 的特征子空间. □

下面是应用例 9.52 来估计矩阵特征值的几个典型例题.

例 9.53 设 A, B 是 n 阶实对称矩阵, 其特征值分别为

$$
\lambda_ {1} \leq \lambda_ {2} \leq \dots \leq \lambda_ {n}, \quad \mu_ {1} \leq \mu_ {2} \leq \dots \leq \mu_ {n}.
$$

求证: $A + B$ 的特征值全落在 $[\lambda_1 + \mu_1, \lambda_n + \mu_n]$ 中.

证明 由例9.52可知, 对任意的 $n$ 维实列向量 $\alpha$ , 有 $\alpha' A \alpha \leq \lambda_n \alpha' \alpha$ , $\alpha' B \alpha \leq \mu_n \alpha' \alpha$ . 因为 $A + B$ 仍是实对称矩阵, 故其特征值全为实数. 任取 $A + B$ 的实特征值 $\nu$ 及其特征向量 $\beta$ , 则 $\beta'(A + B) \beta = \nu \beta' \beta$ . 注意到

$$
\boldsymbol {\beta} ^ {\prime} (\boldsymbol {A} + \boldsymbol {B}) \boldsymbol {\beta} = \boldsymbol {\beta} ^ {\prime} \boldsymbol {A} \boldsymbol {\beta} + \boldsymbol {\beta} ^ {\prime} \boldsymbol {B} \boldsymbol {\beta} \leq \lambda_ {n} \boldsymbol {\beta} ^ {\prime} \boldsymbol {\beta} + \mu_ {n} \boldsymbol {\beta} ^ {\prime} \boldsymbol {\beta} = (\lambda_ {n} + \mu_ {n}) \boldsymbol {\beta} ^ {\prime} \boldsymbol {\beta},
$$

且 $\beta' \beta > 0$ , 故 $\nu \leq \lambda_n + \mu_n$ . 同理可证 $\nu \geq \lambda_1 + \mu_1$ . □

例 9.54 设 $\lambda = a + bi$ 是 n 阶实矩阵 A 的特征值, 实对称矩阵 $A + A'$ 和 Hermite 矩阵 $-\mathrm{i}(A - A')$ 的特征值分别为

$$
\mu_ {1} \leq \mu_ {2} \leq \dots \leq \mu_ {n}, \nu_ {1} \leq \nu_ {2} \leq \dots \leq \nu_ {n}.
$$

求证: $\mu_{1} \leq 2a \leq \mu_{n}, \nu_{1} \leq 2b \leq \nu_{n}$ .

证明 设 $\alpha$ 是 $A$ 的属于特征值 $\lambda = a + bi$ 的特征向量, 即有 $A\alpha = \lambda \alpha$ . 将此式左乘 $\overline{\alpha}'$ 可得 $\overline{\alpha}' A\alpha = \lambda \overline{\alpha}' \alpha$ ; 再将此式共轭转置可得 $\overline{\alpha}' A'\alpha = \overline{\lambda} \overline{\alpha}' \alpha$ ; 最后将上述两式相加以及相减再乘以 -i, 可分别得到

$$
\overline {{{\alpha}}} ^ {\prime} (A + A ^ {\prime}) \alpha = (\lambda + \bar {\lambda}) \overline {{{\alpha}}} ^ {\prime} \alpha = 2 a \overline {{{\alpha}}} ^ {\prime} \alpha ,
$$

$$
\overline {{{\alpha}}} ^ {\prime} (- \mathrm{i} (A - A ^ {\prime})) \alpha = - \mathrm{i} (\lambda - \bar {\lambda}) \overline {{{\alpha}}} ^ {\prime} \alpha = 2 b \overline {{{\alpha}}} ^ {\prime} \alpha .
$$

注意到 $\overline{\alpha}'\alpha > 0$ ，故由例 9.52 (Hermite 矩阵版本) 即得结论。☐

例 9.55 设 A 是 n 阶实矩阵, $A^{\prime}A$ 的特征值为

$$
\mu_ {1} \leq \mu_ {2} \leq \dots \leq \mu_ {n}.
$$

求证: 若 $\lambda$ 是 A 的特征值, 则

$$
\sqrt {\mu_ {1}} \leq | \lambda | \leq \sqrt {\mu_ {n}}.
$$

证明 设 $\alpha$ 是 $A$ 的属于特征值 $\lambda$ 的特征向量, 即有 $A\alpha = \lambda \alpha$ , 将此式共轭转置可得 $\overline{\alpha}' A' = \overline{\lambda} \overline{\alpha}'$ , 再将上述两式乘在一起可得 $\overline{\alpha}' A'A\alpha = |\lambda|^2 \overline{\alpha}' \alpha$ , 最后由例 9.52 (Hermite 矩阵版本) 即得结论. □

例 9.56 设 $A_{1}, \cdots, A_{k}$ 是 n 阶实矩阵, $A_{i}^{\prime}A_{i}$ 的特征值为

$$
\mu_ {i 1} \leq \mu_ {i 2} \leq \dots \leq \mu_ {i n}, 1 \leq i \leq k.
$$

求证: 若 $\lambda$ 是 $A_{1}\cdots A_{k}$ 的特征值, 则

$$
\sqrt {\mu_ {1 1} \cdots \mu_ {k 1}} \leq | \lambda | \leq \sqrt {\mu_ {1 n} \cdots \mu_ {k n}}.
$$

证明 设 $\alpha$ 是 $A_{1}\cdots A_{k}$ 的属于特征值 $\lambda$ 的特征向量, 即有 $A_{1}\cdots A_{k}\alpha = \lambda\alpha$ , 将此式共轭转置可得 $\overline{\alpha}'A_{k}'\cdots A_{1}' = \overline{\lambda}\overline{\alpha}'$ , 再将上述两式乘在一起可得

$$
\overline {{{{\alpha}}}} ^ {\prime} A _ {k} ^ {\prime} \dots A _ {1} ^ {\prime} A _ {1} \dots A _ {k} \alpha = | \lambda | ^ {2} \overline {{{{\alpha}}}} ^ {\prime} \alpha ,
$$

最后对 $A_{i}^{\prime}A_{i}(1 \leq i \leq k)$ 应用例 9.52 (Hermite 矩阵版本) 即得结论. □

注 读者可以自行写出例 9.53 的 Hermite 矩阵版本, 以及例 9.54、例 9.55 和例 9.56 的复矩阵版本, 并证明它们.

例 9.57 设 n 阶复矩阵 M 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则 M 的谱半径 $\rho(M)$ 定义为 $\rho(M) = \max_{1 \leq i \leq n} |\lambda_{i}|$ 。设 A, B, C 为 n 阶实矩阵，使得 $\begin{pmatrix} A & B \\ B' & C \end{pmatrix}$ 为半正定实对称矩阵，证明： $\rho(B)^{2} \leq \rho(A)\rho(C)$ .

证明 我们先来处理 $\begin{pmatrix} A & B \\ B' & C \end{pmatrix}$ 为正定实对称矩阵的情形. 此时, A, C 都是正定阵, 设它们的全体特征值分别为

$$
\lambda_ {1} \leq \lambda_ {2} \leq \dots \leq \lambda_ {n}, \nu_ {1} \leq \nu_ {2} \leq \dots \leq \nu_ {n},
$$

则 $\rho(\boldsymbol{A})=\lambda_{n},\rho(\boldsymbol{C})=\nu_{n}$ 且 $A^{-1}$ 的全体特征值为 $\lambda_{n}^{-1}\leq\lambda_{n-1}^{-1}\leq\cdots\leq\lambda_{1}^{-1}$ . 考虑如下对称分块初等变换:

$$
\left( \begin{array}{c c} I _ {n} & O \\ - B ^ {\prime} A ^ {- 1} & I _ {n} \end{array} \right) \left( \begin{array}{c c} A & B \\ B ^ {\prime} & C \end{array} \right) \left( \begin{array}{c c} I _ {n} & - A ^ {- 1} B \\ O & I _ {n} \end{array} \right) = \left( \begin{array}{c c} A & O \\ O & C - B ^ {\prime} A ^ {- 1} B \end{array} \right),
$$

由 $\left( \begin{array}{ll}A & B\\ B' & C \end{array} \right)$ 是正定阵可知, $C - B'A^{-1}B$ 也是正定阵. 任取 $B$ 的特征值 $\mu \in \mathbb{C}$ 及其特征向量 $\beta \in \mathbb{C}^n$ , 即有 $B\beta = \mu \beta$ 以及 $\overline{\beta}' B' = \overline{\mu}\overline{\beta}'$ . 将 $C - B'A^{-1}B$ 看成是正定 Hermite 矩阵, 则有 $\overline{\beta}' (C - B'A^{-1}B)\beta > 0$ , 再由例 9.52 (Hermite 矩阵版本) 可得

$$
\nu_ {n} \overline {{{{\boldsymbol {\beta}}}}} ^ {\prime} \boldsymbol {\beta} \geq \overline {{{{\boldsymbol {\beta}}}}} ^ {\prime} \boldsymbol {C} \boldsymbol {\beta} > \overline {{{{\boldsymbol {\beta}}}}} ^ {\prime} \boldsymbol {B} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {B} \boldsymbol {\beta} = | \mu | ^ {2} \overline {{{{\boldsymbol {\beta}}}}} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {\beta} \geq | \mu | ^ {2} \lambda_ {n} ^ {- 1} \overline {{{{\boldsymbol {\beta}}}}} ^ {\prime} \boldsymbol {\beta}.
$$

注意到 $\overline{\beta}'\beta > 0$ ，故 $|\mu|^2 < \lambda_n\nu_n$ ，即 $|\mu|^2 < \rho(A)\rho(C)$ ，于是 $\rho(B)^2 < \rho(A)\rho(C)$ .

我们用摄动法来处理半正定的情形. 对任意的正实数 $t$ , $\left( \begin{array}{cc} A + tI_n & B \\ B' & C + tI_n \end{array} \right)$ 是正定阵, 从而由正定情形的结论可知

$$
\rho (\boldsymbol {B}) ^ {2} <   \rho (\boldsymbol {A} + t \boldsymbol {I} _ {n}) \rho (\boldsymbol {C} + t \boldsymbol {I} _ {n}) = (\rho (\boldsymbol {A}) + t) (\rho (\boldsymbol {C}) + t),
$$

令 $t \to 0+$ 即得 $\rho(B)^2 \leq \rho(A)\rho(C)$ . □

例 9.58 设 n 阶实对称矩阵 $\boldsymbol{A} = (a_{ij})$ 为非负矩阵, 即所有的元素 $a_{ij} \geq 0$ , 且 A 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ , 求证: 存在某个特征值 $\lambda_{j} = \rho(\boldsymbol{A}) = \max_{1 \leq i \leq n} |\lambda_{i}|$ , 并可取到 $\lambda_{j}$ 的某个特征向量 $\beta$ 为非负向量, 即 $\beta$ 的所有元素都大于等于零.

证明 任取一个特征值 $\lambda_{k}$ , 使得 $|\lambda_{k}| = \max_{1 \leq i \leq n} |\lambda_{i}|$ , 并取 $\lambda_{k}$ 的特征向量 $\alpha = (a_{1}, a_{2}, \cdots, a_{n})'$ , 即有 $A\alpha = \lambda_{k}\alpha$ , 于是 $\alpha' A\alpha = \lambda_{k}\alpha'\alpha$ . 以下不妨设 $\lambda_{1} \leq \lambda_{2} \leq \cdots \leq \lambda_{n}$ , 令 $\beta = (|a_{1}|, |a_{2}|, \cdots, |a_{n}|)'$ , 则 $\beta$ 是非负向量且 $\beta'\beta = \sum_{i=1}^{n} a_{i}^{2} = \alpha'\alpha$ . 注意到 $a_{ij} \geq 0 (1 \leq i, j \leq n)$ , 故由例 9.52 可得如下不等式:

$$
\begin{array}{l} \left| \lambda_ {k} \right| \boldsymbol {\alpha} ^ {\prime} \boldsymbol {\alpha} = \left| \lambda_ {k} \boldsymbol {\alpha} ^ {\prime} \boldsymbol {\alpha} \right| = \left| \boldsymbol {\alpha} ^ {\prime} \boldsymbol {A} \boldsymbol {\alpha} \right| = \left| \sum_ {i, j = 1} ^ {n} a _ {i j} a _ {i} a _ {j} \right| \\ \leq \sum_ {i, j = 1} ^ {n} a _ {i j} \left| a _ {i} \right| \left| a _ {j} \right| = \beta^ {\prime} A \beta \leq \lambda_ {n} \beta^ {\prime} \beta = \lambda_ {n} \alpha^ {\prime} \alpha , \\ \end{array}
$$

于是 $\lambda_{n} \geq |\lambda_{k}| \geq 0$ . 再由假设可知 $\lambda_{n} = |\lambda_{k}| = \max_{1 \leq i \leq n} |\lambda_{i}|$ , 因此上述不等式取等号. 特别地, $\beta^{\prime} A \beta = \lambda_{n} \beta^{\prime} \beta$ , 故由例 9.52 中不等式取等号的充要条件可知, $\beta$ 就是属于特征值 $\lambda_{n}$ 的非负特征向量. □

#### 2. 正定阵和半正定阵性质的研究

记号 设 A, B 是实对称矩阵, 我们用 A > O 表示 A 是正定阵, $A \geq O$ 表示 A 是半正定阵. 当 A 和 B 都是正定阵时, 用 A > B 表示 A - B 是正定阵; 当 A 和 B 都是半正定阵时, 用 $A \geq B$ 表示 A - B 是半正定阵.

例 9.59 求证: 若 A 是 n 阶正定实对称矩阵, 则 $A + A^{-1} \geq 2I_{n}$ .

证法 1 设 P 是正交矩阵, 使得 $P^{\prime}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{i} > 0$ 是 A 的特征值, 则

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1} ^ {- 1}, \lambda_ {2} ^ {- 1}, \dots , \lambda_ {n} ^ {- 1} \right\}.
$$

因为 $\lambda_{i}+\lambda_{i}^{-1}\geq2$ ，故 $P^{\prime}AP+P^{\prime}A^{-1}P-2I_{n}$ 是半正定阵，由此即得 $A+A^{-1}\geq2I_{n}$ 证法 2 注意到

$$
\boldsymbol {A} + \boldsymbol {A} ^ {- 1} - 2 \boldsymbol {I} _ {n} = \left( \begin{array}{c c} \boldsymbol {I} _ {n} & \boldsymbol {I} _ {n} \end{array} \right) \left( \begin{array}{c c} \boldsymbol {A} & - \boldsymbol {I} _ {n} \\ - \boldsymbol {I} _ {n} & \boldsymbol {A} ^ {- 1} \end{array} \right) \binom{\boldsymbol {I} _ {n}}{\boldsymbol {I} _ {n}},
$$

故由例8.11可知 $A + A^{-1}\geq 2I_{n}$ □

在第 8 章, 我们用合同标准型给出了例 8.27 和例 8.28 的证明. 在这里, 我们也可以用正交相似标准型给出这两个例题的新证法. 下面以例 8.27 为例, 例 8.28 留给读者自己完成.

例 8.27 设 A 为 n 阶正定实对称矩阵, $\alpha, \beta$ 为 n 维实列向量, 证明: $\alpha^{\prime}A\alpha + \beta^{\prime}A^{-1}\beta \geq 2\alpha^{\prime}\beta$ , 且等号成立的充要条件是 $A\alpha = \beta$ .

证法 3 设 P 是正交矩阵, 使得 $A = P'$ diag $\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}P$ , 其中 $\lambda_{i} > 0$ 是 A 的特征值, 则

$$
\boldsymbol {A} ^ {- 1} = \boldsymbol {P} ^ {\prime} \operatorname{diag} \left\{\lambda_ {1} ^ {- 1}, \lambda_ {2} ^ {- 1}, \dots , \lambda_ {n} ^ {- 1} \right\} \boldsymbol {P}.
$$

设 $\Lambda=\mathrm{diag}\{\lambda_{1},\lambda_{2},\cdots,\lambda_{n}\},\boldsymbol{P}\boldsymbol{\alpha}=(a_{1},a_{2},\cdots,a_{n})^{\prime},\boldsymbol{P}\boldsymbol{\beta}=(b_{1},b_{2},\cdots,b_{n})^{\prime}$ ，则

$$
\begin{array}{l} \alpha^ {\prime} A \alpha + \beta^ {\prime} A ^ {- 1} \beta = (P \alpha) ^ {\prime} \Lambda (P \alpha) + (P \beta) ^ {\prime} \Lambda^ {- 1} (P \beta) \\ = \left(\lambda_ {1} a _ {1} ^ {2} + \lambda_ {1} ^ {- 1} b _ {1} ^ {2}\right) + \left(\lambda_ {2} a _ {2} ^ {2} + \lambda_ {2} ^ {- 1} b _ {2} ^ {2}\right) + \dots + \left(\lambda_ {n} a _ {n} ^ {2} + \lambda_ {n} ^ {- 1} b _ {n} ^ {2}\right) \\ \geq 2 a _ {1} b _ {1} + 2 a _ {2} b _ {2} + \dots + 2 a _ {n} b _ {n} = 2 (\boldsymbol {P} \alpha) ^ {\prime} (\boldsymbol {P} \beta) = 2 \alpha^ {\prime} \beta , \\ \end{array}
$$

等号成立当且仅当 $\lambda_{i}a_{i} = b_{i}(1\leq i\leq n)$ ，即 $\pmb {\Lambda}(\pmb {P}\pmb {\alpha}) = (\pmb {P}\pmb {\beta})$ ，也即 $(\pmb {P}'\pmb {\Lambda}\pmb {P})\pmb {\alpha} = \pmb {\beta},$ 从而当且仅当 $A\pmb {\alpha} = \beta$ 成立.□

例 9.60 设 B 是 n 阶半正定实对称矩阵, $\mu_{1}, \mu_{2}, \cdots, \mu_{n}$ 是 B 的全体特征值, 证明: 对任意给定的正整数 k > 1, 存在一个只和 $\mu_{1}, \mu_{2}, \cdots, \mu_{n}$ 有关的实系数多项式 $f(x)$ , 满足: $B = f(B^{k})$ .

证明 设 Q 为正交矩阵, 使得 $Q^{\prime}BQ = \operatorname{diag}\{\mu_{1}, \mu_{2}, \cdots, \mu_{n}\}$ , 其中 $\mu_{i} \geq 0$ . 设 $\mu_{i_{1}}, \mu_{i_{2}}, \cdots, \mu_{i_{s}}$ 是 B 的全体不同特征值, $\lambda_{i} = \mu_{i}^{k} (1 \leq i \leq n)$ , 则 $\lambda_{i} \geq 0$ 且 $\lambda_{i_{1}}, \lambda_{i_{2}}, \cdots, \lambda_{i_{s}}$ 两两互异. 作 Lagrange 插值多项式 (参考例 4.11):

$$
f (x) = \sum_ {j = 1} ^ {s} \mu_ {i _ {j}} \frac {(x - \lambda_ {i _ {1}}) \cdots (x - \lambda_ {i _ {j - 1}}) (x - \lambda_ {i _ {j + 1}}) \cdots (x - \lambda_ {i _ {s}})}{(\lambda_ {i _ {j}} - \lambda_ {i _ {1}}) \cdots (\lambda_ {i _ {j}} - \lambda_ {i _ {j - 1}}) (\lambda_ {i _ {j}} - \lambda_ {i _ {j + 1}}) \cdots (\lambda_ {i _ {j}} - \lambda_ {i _ {s}})}.
$$

显然 $f(\lambda_{i_j}) = \mu_{i_j}(1\leq j\leq s)$ ，从而 $f(\lambda_i) = \mu_i(1\leq i\leq n)$ ，于是

$$
\operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\} = \operatorname{diag} \left\{f \left(\lambda_ {1}\right), f \left(\lambda_ {2}\right), \dots , f \left(\lambda_ {n}\right) \right\} = f (\operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}).
$$

因此

$$
\begin{array}{l} \boldsymbol {B} = \boldsymbol {Q} \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\} \boldsymbol {Q} ^ {\prime} = \boldsymbol {Q} f (\operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}) \boldsymbol {Q} ^ {\prime} \\ = f \left(\boldsymbol {Q} \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\} \boldsymbol {Q} ^ {\prime}\right) = f \left(\left(\boldsymbol {Q} \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\} \boldsymbol {Q} ^ {\prime}\right) ^ {k}\right) = f \left(\boldsymbol {B} ^ {k}\right). \square \\ \end{array}
$$

例 9.61 设 A 是 n 阶半正定实对称矩阵, 求证: 对任意的正整数 k > 1, 必存在唯一的 n 阶半正定实对称矩阵 B, 使得 $A = B^{k}$ . 这样的半正定阵 B 称为半正定阵 A 的 k 次方根, 记为 $B = A^{\frac{1}{k}}$ .

证明 设 P 是正交矩阵, 使得 $P^{\prime}AP = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{i} \geq 0$ 是 A 的特征值. 令 $B = P \text{diag}\{\lambda_{1}^{\frac{1}{k}}, \lambda_{2}^{\frac{1}{k}}, \cdots, \lambda_{n}^{\frac{1}{k}}\}P'$ , 则 B 为半正定阵且 $A = B^{k}$ , 这就证明了 k 次方根的存在性.

设 B 是 A 的 k 次方根, 则对 B 的任一特征值 $\mu_{i}, \mu_{i}^{k}$ 是 A 的特征值, 即 $\mu_{i}$ 是 A 的某个特征值的非负 k 次方根. 由例 9.60 可知, 存在一个只和 A 的所有特征值的非负 k 次方根有关的实系数多项式 $f(x)$ , 使得 $B = f(B^{k}) = f(A)$ . 设 C 是 A 的另一个 k 次方根, 则同上讨论也有 $C = f(A)$ , 从而 B = C, 这就证明了 k 次方根的唯一性. □

教材 [1] 是利用几何方法（谱分解的存在唯一性）给出半正定自伴随算子的 $k$ 次方根的存在唯一性的，而上面我们用代数方法给出了另一证明.

例 9.62 若 A 是半正定实对称矩阵, B 是同阶实矩阵且 AB = BA, 求证: $A^{\frac{1}{2}}B = BA^{\frac{1}{2}}$ .

证明 由例 9.60 可知, 存在实系数多项式 $f(x)$ , 使得 $A^{\frac{1}{2}} = f(A)$ , 再由 $A$ 与 $B$ 乘法可交换可得 $A^{\frac{1}{2}}$ 与 $B$ 乘法可交换. $\square$ 

作为实对称矩阵正交相似标准型理论的推论, 我们知道实对称矩阵 $A$ 是正定阵 (半正定阵) 当且仅当 $A$ 的所有特征值全大于零 (全大于等于零). 下面两道例题都是这一判定准则的应用.

例 9.63 设 A 为 n 阶实对称矩阵, 求证: A 为正定阵 (半正定阵) 的充要条件是

$$
c _ {r} = \sum_ {1 \leq i _ {1} <   i _ {2} <   \dots <   i _ {r} \leq n} A \left( \begin{array}{c c c c} i _ {1} & i _ {2} & \dots & i _ {r} \\ i _ {1} & i _ {2} & \dots & i _ {r} \end{array} \right) > 0 (\geq 0), 1 \leq r \leq n.
$$

证明 由正定阵 (半正定阵) 的性质可知必要性成立, 下证充分性. 由例 1.47 可知, $A$ 的特征多项式

$$
f (\lambda) = | \lambda I _ {n} - A | = \lambda^ {n} - c _ {1} \lambda^ {n - 1} + \dots + (- 1) ^ {n - 1} c _ {n - 1} \lambda + (- 1) ^ {n} c _ {n},
$$

其中所有的 $c_{i} > 0(\geq 0)$ . 注意到 $\pmb{A}$ 的特征值, 即 $f(\lambda)$ 的根全是实数, 故由例5.41(3)可知, $f(\lambda)$ 的根全大于零 (全大于等于零), 因此 $\pmb{A}$ 是正定阵 (半正定阵). $\square$ 

若 A 为半正定实对称矩阵, 则存在实矩阵 C, 使得 $A = C'C$ . 有了 k 次方根这一工具后, 通常可以取 $C = A^{\frac{1}{2}}$ , 这样往往可以有效地化简问题. 这一技巧在后面一些例题中会经常用到.

例 9.64 设 A, B 都是 n 阶实对称矩阵, 证明:

(1) 若 A 半正定或者 B 半正定, 则 AB 的特征值全是实数;

(2) 若 $A, B$ 都半正定, 则 $AB$ 的特征值全是非负实数;

(3) 若 A 正定, 则 B 正定的充要条件是 AB 的特征值全是正实数.

证明 (1) 设 $A$ 半正定, 则由例 6.19 可知, $AB = A^{\frac{1}{2}}A^{\frac{1}{2}}B$ 与 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 有相同的特征值. 注意到 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 仍是实对称矩阵, 故其特征值全是实数, 于是 $AB$ 的特征值也全是实数. 同理可证 $B$ 为半正定阵的情形.

(2) 采用与 (1) 相同的讨论, 注意到 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 仍是半正定阵, 故其特征值全是非负实数, 于是 $AB$ 的特征值也全是非负实数.

(3) 采用与 (1) 相同的讨论, 注意到 $A^{\frac{1}{2}}$ 是正定阵, 故 $AB$ 的特征值全是正实数当且仅当 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 的特征值全是正实数, 这当且仅当 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 是正定阵, 从而当且仅当 $B$ 是正定阵. $\square$ 

下面几道例题都可以看成是例 9.64 及其证明方法的应用.

例 9.65 设 A, B 都是半正定实对称矩阵, 其特征值分别为

$$
\lambda_ {1} \leq \lambda_ {2} \leq \dots \leq \lambda_ {n}, \quad \mu_ {1} \leq \mu_ {2} \leq \dots \leq \mu_ {n}.
$$

求证: $AB$ 的特征值全落在 $[\lambda_1\mu_1, \lambda_n\mu_n]$ 中.

证明 采用与例 9.64 (1) 相同的讨论, 我们只要证明 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 的特征值全落在 $[\lambda_1\mu_1,\lambda_n\mu_n]$ 中即可. 任取 $A^{\frac{1}{2}}BA^{\frac{1}{2}}$ 的特征值 $\nu$ 及其特征向量 $\alpha$ , 即有 $A^{\frac{1}{2}}BA^{\frac{1}{2}}\alpha = \nu \alpha$ . 此式两边左乘 $\alpha'$ , 并由例 9.52 可得

$$
\nu \alpha^ {\prime} \alpha = (A ^ {\frac {1}{2}} \alpha) ^ {\prime} B (A ^ {\frac {1}{2}} \alpha) \geq \mu_ {1} (A ^ {\frac {1}{2}} \alpha) ^ {\prime} (A ^ {\frac {1}{2}} \alpha) = \mu_ {1} \alpha^ {\prime} A \alpha \geq \lambda_ {1} \mu_ {1} \alpha^ {\prime} \alpha ,
$$

由此即得 $\nu \geq \lambda_1\mu_1$ 同理可证 $\nu \leq \lambda_n\mu_n$ □

下面两道例题已用合同标准型证明过, 这里用正交相似标准型再证明一次.

例 8.29 设 A 为 n 阶实对称矩阵, 证明:

(1) 若 A 可逆, 则 A 为正定阵的充要条件是对任意的 n 阶正定实对称矩阵 B, $\mathrm{tr}(AB) > 0;$ 

(2) A 为半正定阵的充要条件是对任意的 n 阶半正定实对称矩阵 B, $\mathrm{tr}(AB) \geq 0$ .

证法 2 (1) 先证必要性. 若 A 为正定阵, 则由例 9.64 (3) 可知, AB 的特征值全大于零, 从而 $\mathrm{tr}(AB)>0$ . 再证充分性. 用反证法, 设 A 不是正定阵, 则由 A 可逆知 A 至少有一个特征值小于零, 不妨设 $\lambda_{1}<0$ . 设 P 为正交矩阵, 使得

$P^{\prime}AP=\mathrm{diag}\{\lambda_{1},\lambda_{2},\cdots,\lambda_{n}\}$ . 令 B=P diag $\{N,1,\cdots,1\}P^{\prime}$ ，其中 N 是充分大的正实数，则 B 为正定阵，且

$$
\operatorname{tr} (\boldsymbol {A B}) = \operatorname{tr} \left((\boldsymbol {P} ^ {\prime} \boldsymbol {A P}) (\boldsymbol {P} ^ {\prime} \boldsymbol {B P})\right) = N \lambda_ {1} + \lambda_ {2} + \dots + \lambda_ {n} <   0,
$$

这与假设矛盾. 因此 A 必为正定阵.

(2) 利用例 9.64 (2) 即可证明必要性, 而充分性的证明与 (1) 完全类似. □

例 8.30 设 A, B 都是 n 阶半正定实对称矩阵, 证明: AB = O 的充要条件是 $\mathrm{tr}(AB) = 0$ .

证法2 必要性是显然的, 下证充分性. 注意到 $0 = \operatorname{tr}(AB) = \operatorname{tr}(B^{\frac{1}{2}}AB^{\frac{1}{2}})$ , 并且 $B^{\frac{1}{2}}AB^{\frac{1}{2}}$ 为半正定阵, 故 $B^{\frac{1}{2}}AB^{\frac{1}{2}}$ 的主对角元或特征值全为零. 由例8.70或实对称矩阵的正交相似标准型可知

$$
O = B ^ {\frac {1}{2}} A B ^ {\frac {1}{2}} = (A ^ {\frac {1}{2}} B ^ {\frac {1}{2}}) ^ {\prime} (A ^ {\frac {1}{2}} B ^ {\frac {1}{2}}),
$$

于是 $A^{\frac{1}{2}}B^{\frac{1}{2}} = O$ ，从而 $AB = A^{\frac{1}{2}}(A^{\frac{1}{2}}B^{\frac{1}{2}})B^{\frac{1}{2}} = O.$ □

例 8.69 设 A, B 都是 n 阶半正定实对称矩阵, 求证: $\frac{1}{n}\operatorname{tr}(AB) \geq |A|^{\frac{1}{n}}|B|^{\frac{1}{n}}$ , 并求等号成立的充要条件.

证法 2 注意到 $B^{\frac{1}{2}}AB^{\frac{1}{2}}$ 仍为半正定阵，若设其特征值为 $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$ ，则 $\lambda_{i}\geq0$ ，且 $\mathrm{tr}(AB)=\mathrm{tr}(B^{\frac{1}{2}}AB^{\frac{1}{2}})=\sum_{i=1}^{n}\lambda_{i}$ ，故由基本不等式可得

$$
\left| \boldsymbol {A} \right| ^ {\frac {1}{n}} \left| \boldsymbol {B} \right| ^ {\frac {1}{n}} = \left| \boldsymbol {B} ^ {\frac {1}{2}} \boldsymbol {A} \boldsymbol {B} ^ {\frac {1}{2}} \right| ^ {\frac {1}{n}} = \left(\lambda_ {1} \lambda_ {2} \dots \lambda_ {n}\right) ^ {\frac {1}{n}} \leq \frac {1}{n} \sum_ {i = 1} ^ {n} \lambda_ {i} = \frac {1}{n} \operatorname{tr} (\boldsymbol {A B}),
$$

等号成立的充要条件是以下两种情形之一成立：

(1) $\lambda_{1}=\lambda_{2}=\cdots=\lambda_{n}=0,$ 此时 $\mathrm{tr}(AB)=0,$ 故由例 8.30 可知 AB=O;

(2) $\lambda_{1} = \lambda_{2} = \dots = \lambda_{n} = a > 0$ , 此时 $B^{\frac{1}{2}}AB^{\frac{1}{2}} = aI_{n}$ , 故 $AB = aI_{n}$ .

综上所述, 等号成立的充要条件是 $AB = kI_{n}$ , 其中 $k \geq 0$ . □

例 9.66 设 A 是 n 阶正定实对称矩阵, B 是同阶实矩阵, 使得 AB 是实对称矩阵. 求证: AB 是正定阵的充要条件是 B 的特征值全是正实数.

证明 由 A 正定可得 $A^{-1}$ 也正定, 再由例 9.64 (3) 可知, AB 正定的充要条件是 $A^{-1}(AB)=B$ 的特征值全是正实数. □

例 9.67 设 A, B 都是 n 阶正定实对称矩阵, 求证: AB 是正定实对称矩阵的充要条件是 AB = BA.

证明 由例 9.64 (3) 可知, $AB$ 的特征值全大于零, 因此 $AB$ 是正定阵当且仅当它是实对称矩阵, 即 $AB = (AB)' = BA$ . $\square$ 

例 9.68 设 A, B 都是 n 阶正定实对称矩阵, 满足 AB = BA, 求证: A - B 是正定阵的充要条件是 $A^{2} - B^{2}$ 是正定阵.

证明 由 $AB = BA$ 可得 $A^2 - B^2 = (A + B)(A - B)$ , 其中 $A + B$ 是正定阵. 由例9.64(3)可知, $A - B$ 是正定阵当且仅当 $A^2 - B^2$ 的特征值全大于零, 即当且仅当 $A^2 - B^2$ 为正定阵. $\square$ 

#### 3. 利用正交相似标准型化简矩阵问题

当矩阵问题的条件和结论在正交相似变换下不改变时, 可以将其中一个实对称矩阵化为正交相似标准型来处理, 这一技巧与运用相抵、相似以及合同标准型的技巧是类似的. 我们来看 4 道典型的例题.

例 9.69 设 A, C 都是 n 阶正定实对称矩阵, 求证: 矩阵方程 $AX + XA = C$ 存在唯一解 B, 并且 B 也是正定实对称矩阵.

证明 设 P 为正交矩阵, 使得 $P^{\prime}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{i} > 0$ . 注意到问题的条件和结论在同时正交相似变换 $A \mapsto P^{\prime}AP, X \mapsto P^{\prime}XP, C \mapsto P^{\prime}CP$ 下不改变, 故不妨从一开始就假设 $A = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ 为正交相似标准型. 设 $X = (x_{ij}), C = (c_{ij})$ , 则矩阵方程 $AX + XA = C$ 等价于方程组 $(\lambda_{i} + \lambda_{j})x_{ij} = c_{ij}$ , 由此可唯一地解出 $x_{ij} = \frac{c_{ij}}{\lambda_{i} + \lambda_{j}} (1 \leq i, j \leq n)$ , 从而矩阵方程有唯一解 $B = \left(\frac{c_{ij}}{\lambda_{i} + \lambda_{j}}\right)$ . 显然 B 是实对称矩阵, 任取 B 的特征值 $\lambda$ 及其特征向量 $\alpha$ , 将等式 $AB + BA = C$ 左乘 $\alpha'$ , 右乘 $\alpha$ 可得

$$
\alpha^ {\prime} A (B \alpha) + (B \alpha) ^ {\prime} A \alpha = \alpha^ {\prime} C \alpha ,
$$

即有 $2\lambda \alpha^{\prime}A\alpha = \alpha^{\prime}C\alpha$ ，于是 $\lambda = \frac{\alpha^{\prime}C\alpha}{2\alpha^{\prime}A\alpha} >0,$ 因此 $B$ 为正定阵.□

注 本题还可以作如下推广: 设 A 为 n 阶亚正定阵, C 为 n 阶正定 (半正定) 实对称矩阵, 则矩阵方程 $A^{\prime}X + XA = C$ 存在唯一解 B, 并且 B 也是正定 (半正定) 实对称矩阵. 矩阵方程解的存在唯一性可由例 6.91 得到, 正定 (半正定) 的证明类似于上面的讨论. 另外, 本题的逆命题并不成立, 即若 A 为正定阵, B 为正定 (半正定) 阵, 则 $AB + BA$ 不一定是正定 (半正定) 阵. 例如, $A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ , $B = \begin{pmatrix} 1 & 0 \\ 0 & \varepsilon \end{pmatrix}$ , 其中 $0 \leq \varepsilon \ll 1$ . 请读者自行验证具体的细节.

例 9.70 设 A, B 是 n 阶实对称矩阵, 满足 $AB + BA = O$ , 证明: 若 A 半正定, 则存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \dots , \lambda_ {r}, 0, \dots , 0 \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{0, \dots , 0, \mu_ {r + 1}, \dots , \mu_ {n} \right\}.
$$

证明 由于 A 半正定, 故存在正交矩阵 Q, 使得 $Q^{\prime}AQ = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{i} > 0 (1 \leq i \leq r)$ , $\lambda_{r+1} = \cdots = \lambda_{n} = 0$ . 注意到问题的条件和结论在同时正交相似变换 $A \mapsto Q^{\prime}AQ$ , $B \mapsto Q^{\prime}BQ$ 下不改变, 故不妨从一开始就假设 A 为正交相似标准型 $diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 设 $B = (b_{ij})$ , 则由 $AB + BA = O$ 可得 $(\lambda_{i} + \lambda_{j})b_{ij} = 0$ . 当 i, j 至少有一个落在 [1, r] 中时, 有 $\lambda_{i} + \lambda_{j} > 0$ , 从而 $b_{ij} = 0$ , 于是 $B = diag\{O, B_{n-r}\}$ , 其中 $B_{n-r}$ 是 B 右下角的 n - r 阶主子阵. 由于 $B_{n-r}$ 是一个实对称矩阵, 故存在 n - r 阶正交矩阵 R, 使得 $R^{\prime}B_{n-r}R = diag\{\mu_{r+1}, \cdots, \mu_{n}\}$ . 令 $P = diag\{I_{r}, R\}$ , 则 P 是 n 阶正交矩阵, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \dots , \lambda_ {r}, 0, \dots , 0 \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{0, \dots , 0, \mu_ {r + 1}, \dots , \mu_ {n} \right\}. \square
$$

例 9.71 设 A 为 n 阶半正定实对称矩阵, S 为 n 阶实反对称矩阵, 满足 $AS + SA = O$ . 证明: $|A + S| > 0$ 的充要条件是 $\mathrm{r}(A) + \mathrm{r}(S) = n$ .

证明 由于 A 半正定, 故存在正交矩阵 Q, 使得 $Q^{\prime}AQ = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{i} > 0 (1 \leq i \leq r)$ , $\lambda_{r+1} = \cdots = \lambda_{n} = 0$ . 注意到问题的条件和结论在同时正交相似变换 $A \mapsto Q^{\prime}AQ$ , $S \mapsto Q^{\prime}SQ$ 下不改变, 故不妨从一开始就假设 A 为正交相似标准型 $diag\{\Lambda, O\}$ , 其中 $\Lambda = diag\{\lambda_{1}, \cdots, \lambda_{r}\}$ . 设 $S = (b_{ij})$ , 则由 $AS + SA = O$ 可得 $(\lambda_{i} + \lambda_{j})b_{ij} = 0$ . 当 i, j 至少有一个落在 [1, r] 中时, 有 $\lambda_{i} + \lambda_{j} > 0$ , 从而 $b_{ij} = 0$ , 于是 $S = diag\{O, S_{n-r}\}$ , 其中 $S_{n-r}$ 是 S 右下角的 n - r 阶主子阵. 注意到 $S_{n-r}$ 是一个实反对称矩阵, 故由例 8.17 可知 $|S_{n-r}| \geq 0$ , 从而

$$
| \boldsymbol {A} + \boldsymbol {S} | = | \operatorname{diag} \{\boldsymbol {\Lambda}, \boldsymbol {S} _ {n - r} \} | = | \boldsymbol {\Lambda} | \cdot | \boldsymbol {S} _ {n - r} | \geq 0.
$$

因此， $|\pmb {A} + \pmb {S}| > 0$ 当且仅当 $|S_{n - r}| > 0$ ，即当且仅当 $\mathrm{r}(\pmb {S}_{n - r}) = n - r,$ 这也当且仅当 $\operatorname {r}(\pmb {A}) + \operatorname {r}(\pmb {S}) = \operatorname {r}(\pmb {\Lambda}) + \operatorname {r}(\pmb {S}_{n - r}) = r + (n - r) = n.$ □

第 2 章解答题 11 设 A, B 为 n 阶实对称矩阵, 证明: $\mathrm{tr}\left((AB)^{2}\right) \leq \mathrm{tr}(A^{2}B^{2})$ , 并求等号成立的充要条件.

证法 2 设 P 为正交矩阵, 使得 $P^{\prime}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 注意到问题的条件和结论在同时正交相似变换 $A \mapsto P^{\prime}AP, B \mapsto P^{\prime}BP$ 下不改变, 故不妨从一开始就假设 A 为正交相似标准型 $diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ . 设 $B = (b_{ij})$ , 则经计算可知

$$
\begin{array}{l} \operatorname{tr} \left(\boldsymbol {A} ^ {2} \boldsymbol {B} ^ {2}\right) - \operatorname{tr} \left((\boldsymbol {A B}) ^ {2}\right) = \sum_ {i, j = 1} ^ {n} \lambda_ {i} ^ {2} b _ {i j} ^ {2} - \sum_ {i, j = 1} ^ {n} \lambda_ {i} \lambda_ {j} b _ {i j} ^ {2} \\ = \sum_ {1 \leq i <   j \leq n} \left(\lambda_ {i} ^ {2} + \lambda_ {j} ^ {2} - 2 \lambda_ {i} \lambda_ {j}\right) b _ {i j} ^ {2} = \sum_ {1 \leq i <   j \leq n} \left(\lambda_ {i} - \lambda_ {j}\right) ^ {2} b _ {i j} ^ {2} \geq 0, \\ \end{array}
$$

且等号成立当且仅当 $\lambda_{i}b_{ij} = \lambda_{j}b_{ij}(1\leq i < j\leq n)$ ，这也当且仅当 $\lambda_{i}b_{ij} = \lambda_{j}b_{ij}(1\leq$ $i,j\leq n)$ ，即当且仅当 $AB = BA$ 成立.□

#### 4. 可对角化判定准则 7: 相似于实对称矩阵

实对称矩阵正交相似于对角矩阵, 从而可对角化. 如果一个矩阵相似于某个实对称矩阵, 那么这个矩阵必可对角化, 这也是矩阵可对角化的判定准则 7 (参考 §6.5). 我们来看 4 道典型的例题.

例 9.72 设 A 是 n 阶实矩阵, B 是 n 阶正定实对称矩阵, 满足 $A^{\prime}B = BA$ , 证明: A 可对角化.

证法 1 注意到 B 正定, 故由 $A^{\prime}B = BA$ 可得

$$
\boldsymbol {B} ^ {\frac {1}{2}} \boldsymbol {A} \boldsymbol {B} ^ {- \frac {1}{2}} = \boldsymbol {B} ^ {- \frac {1}{2}} \boldsymbol {A} ^ {\prime} \boldsymbol {B} ^ {\frac {1}{2}} = (\boldsymbol {B} ^ {\frac {1}{2}} \boldsymbol {A} \boldsymbol {B} ^ {- \frac {1}{2}}) ^ {\prime},
$$

即 $B^{\frac{1}{2}}AB^{-\frac{1}{2}}$ 是实对称矩阵, 又 A 相似于 $B^{\frac{1}{2}}AB^{-\frac{1}{2}}$ , 故 A 可对角化.

证法2 设 $V = \mathbb{R}^n$ , 取由正定阵 $\pmb{B}$ 定义的内积, $\varphi$ 为由矩阵 $\pmb{A}$ 的乘法定义的线性变换. 由条件 $A'B = BA$ 经过简单的计算不难验证 $(\varphi(x), y) = (x, \varphi(y))$ 对任意的 $x, y \in V$ 成立, 因此 $\varphi$ 是 $V$ 上的自伴随算子, 从而可对角化, 于是 $\pmb{A}$ 也可对角化. $\square$ 

注 若 B 只是半正定阵, 则例 9.72 的结论一般并不成立. 例如, $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ , $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ ，则 $A'B = BA = O$ ，但 A 不可对角化.

例 9.73 设 A, B 都是 n 阶半正定实对称矩阵, 证明: AB 可对角化.

证明 设 C 为非异实矩阵, 使得 $C'AC = diag\{I_{r}, O\}$ , 则 AB 相似于

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {B} (\boldsymbol {C} ^ {\prime}) ^ {- 1} = (\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C}) \left(\boldsymbol {C} ^ {- 1} \boldsymbol {B} (\boldsymbol {C} ^ {- 1}) ^ {\prime}\right).
$$

注意到 $C^{-1}B(C^{-1})'$ 仍然是半正定阵, 故不妨从一开始就假设 $\mathbf{A}$ 是合同标准型 $\operatorname{diag}\{\mathbf{I}_r,\mathbf{O}\}$ . 设 $\mathbf{B} = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ 为对应的分块, 则 $\mathbf{AB} = \begin{pmatrix} B_{11} & B_{12} \\ O & O \end{pmatrix}$ . 因

为 B 半正定, 故由例 8.75 可得 $\mathrm{r}(B_{11};B_{12})=\mathrm{r}(B_{11})$ , 于是存在实矩阵 M, 使得 $B_{12}=B_{11}M$ . 考虑如下相似变换:

$$
\left( \begin{array}{c c} I & M \\ O & I \end{array} \right) A B \left( \begin{array}{c c} I & - M \\ O & I \end{array} \right) = \left( \begin{array}{c c} I & M \\ O & I \end{array} \right) \left( \begin{array}{c c} B _ {1 1} & B _ {1 2} \\ O & O \end{array} \right) \left( \begin{array}{c c} I & - M \\ O & I \end{array} \right) = \left( \begin{array}{c c} B _ {1 1} & O \\ O & O \end{array} \right),
$$

于是 AB 相似于 $\mathrm{diag}\{B_{11}, O\}$ ，这是一个实对称矩阵，从而 AB 可对角化。☐

注 由例 9.64 (2) 或上述证明中 $B_{11}$ 的半正定性可知, $AB$ 相似于主对角元全大于等于零的对角矩阵. 另外, 若 $A$ 是正定阵, $B$ 是实对称矩阵, 则 $AB$ 也可对角化. 事实上, $AB$ 相似于 $A^{-\frac{1}{2}}(AB)A^{\frac{1}{2}} = A^{\frac{1}{2}}BA^{\frac{1}{2}}$ , 这是一个实对称矩阵, 从而 $AB$ 可对角化. 又若 $A$ 是半正定阵, $B$ 是实对称矩阵, 则 $AB$ 一般不可对角化. 例如, $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ , $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ , 则 $AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 不可对角化.

例9.74 设 $n$ 阶实矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c} a _ {1 1} & a _ {1 2} & & & & \\ a _ {2 1} & a _ {2 2} & \ddots & & & \\ & \ddots & \ddots & \ddots & & \\ & & \ddots & a _ {n - 1, n - 1} & a _ {n - 1, n} \\ & & & a _ {n, n - 1} & a _ {n n} \end{array} \right),
$$

求证: 若 $a_{i,i+1}a_{i+1,i} \geq 0 (1 \leq i \leq n-1)$ , 则 $\mathbf{A}$ 的特征值全为实数; 若 $a_{i,i+1}a_{i+1,i} > 0 (1 \leq i \leq n-1)$ , 则 $\mathbf{A}$ 在实数域上可对角化.

证明 在三对角矩阵 A 中, 若存在某个 $a_{i,i+1}=0$ 或 $a_{i+1,i}=0$ , 则 $|\lambda I-A|=|\lambda I-A_{1}||\lambda I-A_{2}|$ , 其中 $A_{1}, A_{2}$ 是满足相同条件的低阶三对角矩阵. 不断这样做下去, 故我们只要证明若 $a_{i,i+1}a_{i+1,i}>0(1\leq i\leq n-1)$ , 则 A 在实数域上可对角化即可. 考虑如下相似变换: 将 A 的第二行乘以 $\sqrt{\frac{a_{12}}{a_{21}}}$ , 再将第二列乘以 $\sqrt{\frac{a_{21}}{a_{12}}}$ , 这样第 (1,2) 元素和第 (2,1) 元素都变成了 $\sqrt{a_{12}a_{21}}$ ; 第 (1,1) 元素和第 (2,2) 元素保持不变; 第 (2,3) 元素变为 $a_{23}\sqrt{\frac{a_{12}}{a_{21}}}$ , 第 (3,2) 元素变为 $a_{32}\sqrt{\frac{a_{21}}{a_{12}}}$ . 一般地, 令 $d_{i+1}=\sqrt{\frac{a_{12}a_{23}\cdots a_{i,i+1}}{a_{21}a_{32}\cdots a_{i+1,i}}}$ , 依次将第 $i+1$ 行乘以 $d_{i+1}$ , 再将第 $i+1$ 列乘以 $d_{i+1}^{-1}(1\leq i\leq n-1)$ , 最后可得到 A 实相似于一个实对称矩阵, 从而 A 在实数域上可对角化. □

例 6.65 设 a, b, c 为复数且 $bc \neq 0$ ，证明下列 n 阶矩阵 A 可对角化：

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c c c} a & b & & & & & \\ c & a & b & & & & \\ & c & a & b & & & \\ & & \ddots & \ddots & \ddots & & \\ & & & c & a & b \\ & & & & c & a \end{array} \right).
$$

证法2 简记三对角矩阵 $\mathbf{A} = \mathbf{T}(a, b, c)$ , 要证 $\mathbf{A}$ 可对角化, 只要证 $\mathbf{A} - a\mathbf{I}_n$ 可对角化即可, 故不妨设 $a = 0$ . 由于 $bc \neq 0$ , 故按照上面的方法, 依次将第 $i + 1$ 行乘以 $\sqrt{\left(\frac{b}{c}\right)^i}$ , 再将第 $i + 1$ 列乘以 $\sqrt{\left(\frac{c}{b}\right)^i} (1 \leq i \leq n - 1)$ , 则可得到 $\mathbf{A}$ 复相似于三对角矩阵 $\mathbf{T}(0, \sqrt{bc}, \sqrt{bc}) = \sqrt{bc} \cdot \mathbf{T}(0, 1, 1)$ . 因为三对角矩阵 $\mathbf{T}(0, 1, 1)$ 是实对称矩阵, 故 $\sqrt{bc} \cdot \mathbf{T}(0, 1, 1)$ 可对角化, 从而 $\mathbf{A}$ 也可对角化. □

## § 9.8 同时合同对角化

本节主要讨论涉及两个实对称矩阵的相关问题。首先我们用实对称矩阵的正交相似标准型证明例 9.75，称为同时合同对角化，这一方法是后面讨论的基础，在涉及两个实对称矩阵的问题中特别有用。

例 9.75 设 A 是 n 阶正定实对称矩阵, B 是同阶实对称矩阵, 求证: 必存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \tag {9.11}
$$

其中 $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$ 是 $A^{-1}B$ 的特征值.

证明 因为 A 正定, 故存在可逆矩阵 P, 使得 $P^{\prime}AP = I_{n}$ . 由于 $P^{\prime}BP$ 仍为实对称矩阵, 故存在正交矩阵 Q, 使得

$$
Q ^ {\prime} (P ^ {\prime} B P) Q = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

令 C = PQ，则 C 满足 (9.11) 式的要求。注意到

$$
\boldsymbol {C} ^ {\prime} (\lambda \boldsymbol {A} - \boldsymbol {B}) \boldsymbol {C} = \lambda \boldsymbol {I} _ {n} - \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda - \lambda_ {1}, \lambda - \lambda_ {2}, \dots , \lambda - \lambda_ {n} \right\},
$$

故 $\lambda_{i}$ 是多项式 $|\lambda A - B|$ 的根, 又 $A$ 可逆, 所以也是 $|\lambda I_{n} - A^{-1}B|$ 的根, 即为 $A^{-1}B$ 的特征值. $\square$ 

例 9.76 设 A 是 n 阶正定实对称矩阵, B 是 n 阶半正定实对称矩阵. 求证:

$$
\left| \boldsymbol {A} + \boldsymbol {B} \right| \geq \left| \boldsymbol {A} \right| + \left| \boldsymbol {B} \right|,
$$

等号成立的充要条件是 n=1 或当 $n \geq 2$ 时, B = O.

证明 由例9.75可知, 存在可逆矩阵 $C$ , 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

因为 B 半正定, 故 $C^{\prime}BC$ 也半正定, 从而 $\lambda_{i} \geq 0$ . 注意到

$$
\begin{array}{l} \left| \boldsymbol {C} ^ {\prime} \right| \left| \boldsymbol {A} + \boldsymbol {B} \right| \left| \boldsymbol {C} \right| = \left| \boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} + \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} \right| = (1 + \lambda_ {1}) (1 + \lambda_ {2}) \dots (1 + \lambda_ {n}) \\ \geq 1 + \lambda_ {1} \lambda_ {2} \dots \lambda_ {n} = | C ^ {\prime} A C | + | C ^ {\prime} B C | = | C ^ {\prime} | (| A | + | B |) | C |, \\ \end{array}
$$

故有 $|\mathbf{A} + \mathbf{B}| \geq |\mathbf{A}| + |\mathbf{B}|$ , 等号成立当且仅当 $n = 1$ 或当 $n \geq 2$ 时, 所有的 $\lambda_{i} = 0$ , 这也当且仅当 $n = 1$ 或当 $n \geq 2$ 时, $\mathbf{B} = \mathbf{O}$ . □

注 例 9.76 也可通过与例 8.18 和例 8.45 完全类似的讨论来得到, 具体的细节留给读者完成. 另外, 利用摄动法可将例 9.76 推广到两个矩阵都是半正定阵的情形. 设 A, B 都是 n 阶半正定实对称矩阵, 则对任意的正实数 t, $A + tI_{n}$ 是正定阵, 因此由例 9.76 可得 $|A + tI_{n} + B| \geq |A + tI_{n}| + |B|$ , 令 $t \to 0+$ 即得 $|A + B| \geq |A| + |B|$ . 当然, 也可以分情况讨论来证明. 若 $|A| = |B| = 0$ , 则结论显然成立; 若 $|A| > 0$ 或 $|B| > 0$ , 则 A 或 B 正定, 直接利用例 9.76 即得结论.

例 9.77 设 A, B 都是 n 阶正定实对称矩阵, 求证:

$$
\vert \boldsymbol {A} + \boldsymbol {B} \vert \geq 2 ^ {n} \vert \boldsymbol {A} \vert^ {\frac {1}{2}} \vert \boldsymbol {B} \vert^ {\frac {1}{2}},
$$

等号成立的充要条件是 A = B.

证明 由例9.75可知, 存在可逆矩阵 $C$ , 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

因为 B 正定, 故 $C^{\prime}BC$ 也正定, 从而 $\lambda_{i}>0$ . 注意到

$$
\begin{array}{l} \left| \boldsymbol {C} ^ {\prime} \right| \left| \boldsymbol {A} + \boldsymbol {B} \right| \left| \boldsymbol {C} \right| = \left| \boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} + \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} \right| = (1 + \lambda_ {1}) (1 + \lambda_ {2}) \dots (1 + \lambda_ {n}) \\ \geq 2 ^ {n} \sqrt {\lambda_ {1} \lambda_ {2} \cdots \lambda_ {n}} = 2 ^ {n} | C ^ {\prime} A C | ^ {\frac {1}{2}} | C ^ {\prime} B C | ^ {\frac {1}{2}} = | C ^ {\prime} | (2 ^ {n} | A | ^ {\frac {1}{2}} | B | ^ {\frac {1}{2}}) | C |, \\ \end{array}
$$

故 $|\mathbf{A} + \mathbf{B}| \geq 2^n |\mathbf{A}|^{\frac{1}{2}}|\mathbf{B}|^{\frac{1}{2}}$ ，等号成立当且仅当所有的 $\lambda_i = 1$ ，也当且仅当 $\mathbf{A} = \mathbf{B}$ . □

注 例 9.77 也可通过摄动法或分情况讨论推广到两个矩阵都是半正定阵的情形, 具体的细节留给读者完成.

例 9.66 设 A 是 n 阶正定实对称矩阵, B 是同阶实矩阵, 使得 AB 是实对称矩阵. 求证: AB 是正定阵的充要条件是 B 的特征值全是正实数.

证法2 由例9.75可知，存在可逆矩阵 $C$ ，使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} (\boldsymbol {A} \boldsymbol {B}) \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

其中 $\lambda_{i}$ 是矩阵 $A^{-1}(AB) = B$ 的特征值. 因此 $AB$ 是正定阵当且仅当 $C'(AB)C$ 是正定阵, 这也当且仅当 $B$ 的特征值 $\lambda_{i}$ 全是正实数. □

例 9.67 设 A, B 都是 n 阶正定实对称矩阵, 求证: AB 是正定实对称矩阵的充要条件是 AB = BA.

证法 2 若 AB 是正定实对称矩阵, 则 $AB = (AB)' = BA$ . 反之, 若 AB = BA, 则 AB 是实对称矩阵. 因为 A 正定, 故 $A^{-1}$ 也正定, 由例 9.75 可知, 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} ^ {- 1} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

其中 $\lambda_{i}$ 是矩阵 AB 的特征值. 因为 B 正定, 故 $C^{\prime}BC$ 也正定, 从而 $\lambda_{i}>0$ , 因此 AB 是正定阵. □

例 9.78 设 A, B 都是 n 阶正定实对称矩阵, 满足 $A \geq B$ , 求证: $B^{-1} \geq A^{-1}$ .

证明 由例 9.75 可知, 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

因为 B 正定, 故 $C^{\prime}BC$ 也正定, 从而 $\lambda_{i}>0$ . 一方面, 我们有

$$
\boldsymbol {C} ^ {\prime} (\boldsymbol {A} - \boldsymbol {B}) \boldsymbol {C} = \operatorname{diag} \left\{1 - \lambda_ {1}, 1 - \lambda_ {2}, \dots , 1 - \lambda_ {n} \right\},
$$

因为 A - B 半正定, 故 $\lambda_{i} \leq 1$ , 从而 $\lambda_{i}^{-1} \geq 1$ . 另一方面, 我们有

$$
\boldsymbol {C} ^ {- 1} \boldsymbol {A} ^ {- 1} (\boldsymbol {C} ^ {\prime}) ^ {- 1} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {- 1} \boldsymbol {B} ^ {- 1} (\boldsymbol {C} ^ {\prime}) ^ {- 1} = \operatorname{diag} \left\{\lambda_ {1} ^ {- 1}, \lambda_ {2} ^ {- 1}, \dots , \lambda_ {n} ^ {- 1} \right\},
$$

于是

$$
\boldsymbol {C} ^ {- 1} \left(\boldsymbol {B} ^ {- 1} - \boldsymbol {A} ^ {- 1}\right) \left(\boldsymbol {C} ^ {- 1}\right) ^ {\prime} = \operatorname{diag} \left\{\lambda_ {1} ^ {- 1} - 1, \lambda_ {2} ^ {- 1} - 1, \dots , \lambda_ {n} ^ {- 1} - 1 \right\}
$$

为半正定阵, 因此 $B^{-1}-A^{-1}$ 也是半正定阵. □

例 9.79 设 A, B 都是 n 阶正定实对称矩阵, 满足 $A \geq B$ , 求证: $A^{\frac{1}{2}} \geq B^{\frac{1}{2}}$ .

证明 由例9.75可知，存在可逆矩阵 $C$ ，使得

$$
\left(\boldsymbol {C} ^ {- 1}\right) ^ {\prime} \boldsymbol {A} ^ {\frac {1}{2}} \boldsymbol {C} ^ {- 1} = \boldsymbol {I} _ {n}, \quad \left(\boldsymbol {C} ^ {- 1}\right) ^ {\prime} \boldsymbol {B} ^ {\frac {1}{2}} \boldsymbol {C} ^ {- 1} = \boldsymbol {\Lambda} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

因为 $B^{\frac{1}{2}}$ 正定, 故 $(C^{-1})'B^{\frac{1}{2}}C^{-1}$ 也正定, 从而 $\lambda_{i}>0$ . 设正定阵 $CC'=D=(d_{ij})$ ,
则 $d_{ii}>0$ . 注意到 $A^{\frac{1}{2}}=C'C, B^{\frac{1}{2}}=C'\Lambda C$ , 故有

$$
\boldsymbol {A} - \boldsymbol {B} = (\boldsymbol {C} ^ {\prime} \boldsymbol {C}) ^ {2} - (\boldsymbol {C} ^ {\prime} \boldsymbol {\Lambda} \boldsymbol {C}) ^ {2} = \boldsymbol {C} ^ {\prime} (\boldsymbol {D} - \boldsymbol {\Lambda} \boldsymbol {D} \boldsymbol {\Lambda}) \boldsymbol {C} \geq \boldsymbol {O},
$$

于是 $D - \Lambda D\Lambda$ 是半正定阵, 从而其 $(i,i)$ 元素 $d_{ii}(1 - \lambda_i^2)\geq 0$ , 故 $0 < \lambda_{i}\leq 1$ . 因此

$$
\boldsymbol {A} ^ {\frac {1}{2}} - \boldsymbol {B} ^ {\frac {1}{2}} = \boldsymbol {C} ^ {\prime} (\boldsymbol {I} _ {n} - \boldsymbol {\Lambda}) \boldsymbol {C} = \boldsymbol {C} ^ {\prime} \operatorname{diag} \left\{1 - \lambda_ {1}, 1 - \lambda_ {2}, \dots , 1 - \lambda_ {n} \right\} \boldsymbol {C} \geq \boldsymbol {O},
$$

从而结论得证. □

例 9.80 设 A, B 是 n 阶实对称矩阵, 其中 A 正定且 B 与 A - B 均半正定, 求证: $\left|\lambda A - B\right| = 0$ 的所有根全落在 [0,1] 中, 并且 $\left|A\right| \geq \left|B\right|$ .

证明 由例9.75可知, 存在可逆矩阵 $C$ , 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

其中 $\lambda_{i}$ 是矩阵 $A^{-1}B$ 的特征值, 即是 $|\lambda A-B|=0$ 的根. 因为 B 半正定, 故 $C^{\prime}BC$ 也半正定, 从而 $\lambda_{i}\geq0$ . 因为 A-B 半正定, 故 $C^{\prime}(A-B)C=\mathrm{diag}\{1-\lambda_{1},1-\lambda_{2},\cdots,1-\lambda_{n}\}$ 也半正定, 从而 $\lambda_{i}\leq1$ , 因此 $|\lambda A-B|=0$ 的所有根 $\lambda_{i}$ 全落在 [0,1] 中. 由 $|A^{-1}B|=\lambda_{1}\lambda_{2}\cdots\lambda_{n}\leq1$ 可得 $|A|\geq|B|$ . 另外, 这一不等式也可由例 9.76 的半正定版本得到. □

例 9.76 是一个重要的不等式, 下面我们来看它的两个应用.

例 8.56 设 A, D 是方阵, $M = \begin{pmatrix} A & B \\ B' & D \end{pmatrix}$ 是正定实对称矩阵, 求证: $|M| \leq |A||D|$ , 且等号成立当且仅当 B = O.

证法 2 注意到 A 正定, 故可对题中矩阵进行下列对称分块初等变换:

$$
\left( \begin{array}{c c} A & B \\ B ^ {\prime} & D \end{array} \right) \to \left( \begin{array}{c c} A & B \\ O & D - B ^ {\prime} A ^ {- 1} B \end{array} \right) \to \left( \begin{array}{c c} A & O \\ O & D - B ^ {\prime} A ^ {- 1} B \end{array} \right),
$$

得到的矩阵仍正定, 从而 $D - B'A^{-1}B$ 是正定阵. 因为第三类分块初等变换不改变行列式的值, 故

$$
\left| \begin{array}{c c} A & B \\ B ^ {\prime} & D \end{array} \right| = | A | | D - B ^ {\prime} A ^ {- 1} B |.
$$

注意到 $D = (D - B'A^{-1}B) + B'A^{-1}B$ ，其中 $B'A^{-1}B$ 是半正定阵，故由例 9.76 可得

$$
| D | \geq | D - B ^ {\prime} A ^ {- 1} B | + | B ^ {\prime} A ^ {- 1} B | \geq | D - B ^ {\prime} A ^ {- 1} B |,
$$

上述不等式的两个等号都成立当且仅当 $B^{\prime}A^{-1}B = O$ 。由 $O = B^{\prime}A^{-1}B = (A^{-\frac{1}{2}}B)'(A^{-\frac{1}{2}}B)$ 取迹后可得 $A^{-\frac{1}{2}}B = O$ ，从而 $B = O$ ，于是上述不等式的两个等号都成立当且仅当 $B = O$ 。综上所述，我们有

$$
\left| \begin{array}{c c} A & B \\ B ^ {\prime} & D \end{array} \right| = | A | | D - B ^ {\prime} A ^ {- 1} B | \leq | A | | D |,
$$

等号成立当且仅当 B = O. □

例 9.81 设 A 是 $m \times n$ 实矩阵, B 是 $s \times n$ 实矩阵, 又假设它们都是行满秩的. 令 $M = AB'(BB')^{-1}BA'$ , 求证: M 和 $AA' - M$ 都是半正定阵, 并且 $|M| \leq |AA'|$ .

证明 设 $C = \begin{pmatrix} A \\ B \end{pmatrix}$ , 则 $CC' = \begin{pmatrix} A \\ B \end{pmatrix}(A', B') = \begin{pmatrix} AA' & AB' \\ BA' & BB' \end{pmatrix}$ 是半正定阵. 因为 $A, B$ 都是行满秩阵, 故由第 8 章解答题 6 可得 $AA', BB'$ 都是正定阵, 从而 $(BB')^{-1}$ 也是正定阵, 于是 $M = AB'(BB')^{-1}BA'$ 是半正定阵. 对矩阵 $CC'$ 实施对称分块初等变换可得

$$
\left( \begin{array}{c c} A A ^ {\prime} & A B ^ {\prime} \\ B A ^ {\prime} & B B ^ {\prime} \end{array} \right) \to \left( \begin{array}{c c} A A ^ {\prime} - A B ^ {\prime} (B B ^ {\prime}) ^ {- 1} B A ^ {\prime} & O \\ B A ^ {\prime} & B B ^ {\prime} \end{array} \right) \to \left( \begin{array}{c c} A A ^ {\prime} - M & O \\ O & B B ^ {\prime} \end{array} \right),
$$

由此即得 $AA' - M$ 是半正定阵. 再由例 9.76 的半正定版本或例 9.80 即得 $|M| \leq |AA'|$ . □

例 9.75 的结论一般并不能推广到一个是半正定阵, 另一个是实对称矩阵的情形.
例如, $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ , $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ , 经过简单的计算可知 A, B 不能同时合同对角化.
不过下面的命题告诉我们, 若 A, B 都是半正定阵, 则它们可以同时合同对角化.

例 9.82 设 A, B 都是 n 阶半正定实对称矩阵, 求证: 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \operatorname{diag} \{1, \dots , 1, 0, \dots , 0 \}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\mu_ {1}, \dots , \mu_ {r}, \mu_ {r + 1}, \dots , \mu_ {n} \right\}.
$$

证明 因为 A 是半正定阵, 故存在可逆矩阵 P, 使得 $P^{\prime}AP = \begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ . 此时 $P^{\prime}BP = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$ 仍是半正定阵. 由例 8.75 可知 $\mathrm{r}(B_{21}; B_{22}) = \mathrm{r}(B_{22})$ , 故存在实矩阵 M, 使得 $B_{21} = B_{22}M$ . 考虑两个矩阵如下的同时合同变换:

$$
\left( \begin{array}{c c} I _ {r} & - M ^ {\prime} \\ O & I _ {n - r} \end{array} \right) \left( \begin{array}{c c} B _ {1 1} & B _ {1 2} \\ B _ {2 1} & B _ {2 2} \end{array} \right) \left( \begin{array}{c c} I _ {r} & O \\ - M & I _ {n - r} \end{array} \right) = \left( \begin{array}{c c} B _ {1 1} - M ^ {\prime} B _ {2 2} M & O \\ O & B _ {2 2} \end{array} \right),
$$

$$
\left( \begin{array}{c c} I _ {r} & - M ^ {\prime} \\ O & I _ {n - r} \end{array} \right) \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right) \left( \begin{array}{c c} I _ {r} & O \\ - M & I _ {n - r} \end{array} \right) = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

由于 $B_{11} - M'B_{22}M$ 和 $B_{22}$ 都是半正定阵，故存在正交矩阵 $Q_{1}, Q_{2}$ ，使得

$$
\boldsymbol {Q} _ {1} ^ {\prime} \left(\boldsymbol {B} _ {1 1} - \boldsymbol {M} ^ {\prime} \boldsymbol {B} _ {2 2} \boldsymbol {M}\right) \boldsymbol {Q} _ {1} = \operatorname{diag} \left\{\mu_ {1}, \dots , \mu_ {r} \right\}, \quad \boldsymbol {Q} _ {2} ^ {\prime} \boldsymbol {B} _ {2 2} \boldsymbol {Q} _ {2} = \operatorname{diag} \left\{\mu_ {r + 1}, \dots , \mu_ {n} \right\}.
$$

令 $C = P \begin{pmatrix} I_{r} & O \\ -M & I_{n-r} \end{pmatrix} \begin{pmatrix} Q_{1} & O \\ O & Q_{2} \end{pmatrix}$ ，则 C 是可逆矩阵，使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \operatorname{diag} \{1, \dots , 1, 0, \dots , 0 \}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {B} \boldsymbol {C} = \operatorname{diag} \left\{\mu_ {1}, \dots , \mu_ {r}, \mu_ {r + 1}, \dots , \mu_ {n} \right\}. \square
$$

利用例 9.82 可以给出例 9.76 和例 9.77 的半正定版本的第三种证法, 此外我们再给出例 9.82 的两个应用.

例 9.83 设 A, B 都是 n 阶半正定实对称矩阵, 求证:

(1) $A + B$ 是正定阵的充要条件是存在 $n$ 个线性无关的实列向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ , 以及指标集 $I \subseteq \{1, 2, \cdots, n\}$ , 使得

$$
\boldsymbol {\alpha} _ {i} ^ {\prime} \boldsymbol {A} \boldsymbol {\alpha} _ {j} = \boldsymbol {\alpha} _ {i} ^ {\prime} \boldsymbol {B} \boldsymbol {\alpha} _ {j} = 0 (\forall i \neq j), \quad \boldsymbol {\alpha} _ {i} ^ {\prime} \boldsymbol {A} \boldsymbol {\alpha} _ {i} > 0 (\forall i \in I), \quad \boldsymbol {\alpha} _ {j} ^ {\prime} \boldsymbol {B} \boldsymbol {\alpha} _ {j} > 0 (\forall j \notin I);
$$

(2) r(A;B) = r(A + B). 

证明 (1) 在例 9.82 中, 令 $C = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 为其列分块, 由此即得结论.

(2) 证明 $\mathrm{r}(A; B) = \mathrm{r}(A + B)$ 有 3 种方法。第一种是利用线性方程组的求解理论，其讨论过程类似于例 8.76 的证法 1。第二种方法是直接利用例 8.76 的结论，请参考例 8.77 的证明。第三种方法是直接利用例 9.82 的结论，有 $\mathrm{r}(A; B) = \mathrm{r}(C'AC; C'BC)$ ，此时 $C'AC$ 和 $C'BC$ 都是半正定对角矩阵。若 $C'AC$ 和 $C'BC$ 同一行的主对角元全为零，则 $(C'AC; C'BC)$ 和 $C'(A + B)C$ 的这一行都是零向量，对求秩不起作用；若 $C'AC$ 和 $C'BC$ 同一行的主对角元至少有一个大于零，则 $(C'AC; C'BC)$ 和 $C'(A + B)C$ 的这一行对求秩都起了加 1 的作用，因此 $\mathrm{r}(A; B) = \mathrm{r}(C'AC; C'BC) = \mathrm{r}\left(C'(A + B)C\right) = \mathrm{r}(A + B)$ 。 $\square$ 

例 9.67 (半正定版本) 设 A, B 都是 n 阶半正定实对称矩阵, 求证: AB 是半正定实对称矩阵的充要条件是 AB = BA.

证明 由例 9.64 (2) 可知, $AB$ 的特征值全大于等于零, 因此 $AB$ 是半正定阵当且仅当它是实对称矩阵, 即 $AB = (AB)' = BA$ . $\square$ 

例 9.84 设 A, B, C 都是 n 阶半正定实对称矩阵, 使得 ABC 是对称矩阵, 即满足 ABC = CBA, 求证: ABC 是半正定阵.

证明 由例9.82可知, 存在可逆矩阵 $P$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \{1, \dots , 1, 0, \dots , 0 \}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {C} \boldsymbol {P} = \operatorname{diag} \left\{\mu_ {1}, \dots , \mu_ {r}, \mu_ {r + 1}, \dots , \mu_ {n} \right\}.
$$

注意到问题的条件和结论在合同变换 $A \mapsto P'AP, B \mapsto P^{-1}B(P^{-1})', C \mapsto P'CP$ 下不改变，故不妨从一开始就假设 $A = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}, C = \begin{pmatrix} \Lambda_1 & O \\ O & \Lambda_2 \end{pmatrix}$ ，其中 $r = r(A)$ ， $\Lambda_{1}=\operatorname{diag}\{\mu_{1},\cdots,\mu_{r}\},\;\Lambda_{2}=\operatorname{diag}\{\mu_{r+1},\cdots,\mu_{n}\}$ 都是半正定对角矩阵。设 $B=\begin{pmatrix} B_{11}&B_{12}\\ B_{21}&B_{22}\end{pmatrix}$ 为对应的分块，则由 $ABC=\begin{pmatrix} B_{11}\Lambda_{1}&B_{12}\Lambda_{2}\\ O&O\end{pmatrix}$ 是对称矩阵可知， $B_{11}\Lambda_{1}$ 是对称矩阵且 $B_{12}\Lambda_{2}=O$ 。由 B 半正定可得 $B_{11}$ 半正定，再由例 9.67 的半正定版本可知 $B_{11}\Lambda_{1}$ 是半正定阵，因此 $ABC=\operatorname{diag}\{B_{11}\Lambda_{1},O\}$ 也是半正定阵。☐

## § 9.9 Schur 定理

对于一般的复（实）矩阵，我们当然不能期望它酉相似（正交相似）于对角矩阵。但对于复矩阵，我们可以证明它必酉相似于上三角矩阵，这就是著名的 Schur 定理。下面我们给出一个简洁的代数证明，其几何证明请参考教材 [1]。

例 9.85 设 A 是 n 阶复矩阵, 求证: 存在 n 阶酉矩阵 U, 使得 $U^{-1}AU$ 是上三角矩阵.

证明 由例6.39可知, 存在可逆矩阵 $P$ , 使得 $P^{-1}AP = M$ 是上三角矩阵. 又由例9.13可知, 存在酉矩阵 $U$ 和上三角矩阵 $R$ , 使得 $P = UR$ , 于是

$$
\boldsymbol {A} = \boldsymbol {P M P} ^ {- 1} = (\boldsymbol {U R}) \boldsymbol {M} (\boldsymbol {U R}) ^ {- 1} = \boldsymbol {U} (\boldsymbol {R M R} ^ {- 1}) \boldsymbol {U} ^ {- 1}.
$$

因为上三角矩阵的逆阵是上三角矩阵, 上三角矩阵的乘积是上三角矩阵, 故 $RMR^{-1}$ 仍是上三角矩阵, 从而 $U^{-1}AU = RMR^{-1}$ 是上三角矩阵. $\square$ 

下面我们来证明实数域上的 Schur 定理, 即例 9.87. 因为实矩阵的特征值未必都是实数, 故任意一个实方阵只能正交相似于分块上三角矩阵, 证明也更加复杂一些. 首先, 我们来讨论实矩阵的复特征值和复特征向量的相关性质.

例 9.86 设 A 是 n 阶实矩阵, 虚数 $a + bi$ 是 A 的一个特征值, $u + vi$ 是对应的特征向量, 其中 u, v 是实列向量. 求证: u, v 必线性无关. 若 A 是正规矩阵, 则 u, v 相互正交且长度相同 (取实列向量空间的标准内积).

证明 由假设

$$
\boldsymbol {A} (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a + b \mathrm{i}) (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a \boldsymbol {u} - b \boldsymbol {v}) + (a \boldsymbol {v} + b \boldsymbol {u}) \mathrm{i}. \tag {9.12}
$$

假设 u, v 线性相关, 不妨设 $u \neq 0$ , v = ku, 则 $(1 + \mathrm{ki})\mathbf{A}\mathbf{u} = (1 + \mathrm{ki})(a + \mathrm{bi})\mathbf{u}$ , 于是 $\mathbf{A}\mathbf{u} = (a + \mathrm{bi})\mathbf{u}$ , 由此可得 $A\mathbf{u} = a\mathbf{u}$ , $b\mathbf{u} = 0$ , 这与 $b \neq 0$ 且 $u \neq 0$ 相矛盾.

若 A 是正规矩阵, 在 (9.12) 式中比较实部和虚部得到

$$
\boldsymbol {A} \boldsymbol {u} = a \boldsymbol {u} - b \boldsymbol {v}, \quad \boldsymbol {A} \boldsymbol {v} = a \boldsymbol {v} + b \boldsymbol {u}.
$$

因为 A 正规, 故由例 9.28 可知, $u + vi$ 也是 $A'$ 的属于特征值 a - bi 的特征向量, 即

$$
\boldsymbol {A} ^ {\prime} (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a - b \mathrm{i}) (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a \boldsymbol {u} + b \boldsymbol {v}) + (a \boldsymbol {v} - b \boldsymbol {u}) \mathrm{i}.
$$

比较实部和虚部得到

$$
\boldsymbol {A} ^ {\prime} \boldsymbol {u} = a \boldsymbol {u} + b \boldsymbol {v}, \quad \boldsymbol {A} ^ {\prime} \boldsymbol {v} = a \boldsymbol {v} - b \boldsymbol {u}.
$$

又 $(\mathbf{A}\mathbf{u},\mathbf{u}) = (\mathbf{u},\mathbf{A}'\mathbf{u}),(\mathbf{A}\mathbf{u},\mathbf{v}) = (\mathbf{u},\mathbf{A}'\mathbf{v})$ ，将 $\mathbf{A}\mathbf{u},\mathbf{A}'\mathbf{u}$ 及 $A^{\prime}v$ 代入得到

$$
(a \boldsymbol {u} - b \boldsymbol {v}, \boldsymbol {u}) = (\boldsymbol {u}, a \boldsymbol {u} + b \boldsymbol {v}), (a \boldsymbol {u} - b \boldsymbol {v}, \boldsymbol {v}) = (\boldsymbol {u}, a \boldsymbol {v} - b \boldsymbol {u}).
$$

由此可得 $(\pmb{u},\pmb{v}) = 0, (\pmb{u},\pmb{u}) = (\pmb{v},\pmb{v})$ 。□

例 9.87 证明: n 阶实方阵 A 必正交相似于下列分块上三角矩阵:

$$
C = \left( \begin{array}{c c c c c c} A _ {1} & & & & & \\ & \ddots & & & * \\ & & A _ {r} & & \\ & & & c _ {1} & & \\ & & & & \ddots & \\ & & & & & c _ {k} \end{array} \right),
$$

其中 $A_{i}(1 \leq i \leq r)$ 是二阶实矩阵且 $A_{i}$ 的特征值具有 $a_{i} \pm b_{i}\mathrm{i}(b_{i} \neq 0)$ 的形状, $c_{j}(1 \leq j \leq k)$ 是实数.

证明 对阶数 $n$ 进行归纳. 当 $n = 0$ 时表示归纳过程已结束, 当 $n = 1$ 时结论显然成立. 现设对阶小于 $n$ 的矩阵结论成立, 下分两种情况对 $n$ 阶矩阵 $\mathbf{A}$ 进行讨论.

首先, 假设 $\pmb{A}$ 有实特征值 $\lambda$ . 因为 $\pmb{A}$ 和 $\pmb{A}'$ 有相同的特征值, 故 $\lambda$ 也是 $\pmb{A}'$ 的特征值. 将 $\pmb{A}$ 看成是 $n$ 维实列向量空间 $\mathbb{R}^n$ (取标准内积) 上的线性变换, 显然 $\pmb{A}'$ 是 $\pmb{A}$ 的伴随. 设 $\pmb{e}_n$ 是 $\pmb{A}'$ 的属于特征值 $\lambda$ 的单位特征向量, 则 $L(\pmb{e}_n)^\perp$ 是 $\pmb{A}$ 的不变子空间. 将 $\pmb{A}$ 限制在 $L(\pmb{e}_n)^\perp$ 上, 由归纳假设, 存在 $L(\pmb{e}_n)^\perp$ 的标准正交基 $\pmb{e}_1, \dots, \pmb{e}_{n-1}$ , 使得线性变换 $\pmb{A}$ 在这组基下的表示矩阵为分块上三角矩阵. 于是在标准正交基 $\pmb{e}_1, \pmb{e}_2, \dots, \pmb{e}_n$ 下, 线性变换 $\pmb{A}$ 的表示矩阵就是要求的矩阵 $\pmb{C}$ . 因为线性变换 $\pmb{A}'$ 在同一组标准正交基下的表示矩阵为 $\pmb{C}'$ , 故由 $\pmb{A}'\pmb{e}_n = \lambda \pmb{e}_n$ 可知 $\lambda = c_k$ .

其次, 假设 $\mathbf{A}$ 没有实特征值, 并设 $a + bi$ 是 $\mathbf{A}$ 的虚特征值. 因为 $\mathbf{A}$ 和 $\mathbf{A}'$ 有相同的特征值, 故 $a + bi$ 也是 $\mathbf{A}'$ 的特征值. 假设 $\mathbf{A}'$ 的属于特征值 $a + bi$ 的特征向量为 $\alpha + \beta i$ , 其中 $\alpha, \beta$ 是实列向量, 则有

$$
\boldsymbol {A} ^ {\prime} (\boldsymbol {\alpha} + \beta \mathrm{i}) = (a + b \mathrm{i}) (\boldsymbol {\alpha} + \beta \mathrm{i}).
$$

比较实部和虚部得到

$$
\boldsymbol {A} ^ {\prime} \boldsymbol {\alpha} = a \boldsymbol {\alpha} - b \boldsymbol {\beta}, \quad \boldsymbol {A} ^ {\prime} \boldsymbol {\beta} = b \boldsymbol {\alpha} + a \boldsymbol {\beta}.
$$

由例 9.86 可知, $\alpha, \beta$ 必线性无关. 设 $U = L(\alpha, \beta)$ 为 $\mathbb{R}^n$ 的子空间, 则上式表明 $U$ 是线性变换 $A'$ 的不变子空间, 于是 $U^{\perp}$ 是 $A'$ 的伴随 $A$ 的不变子空间. 注意到 $\dim U^{\perp} = n - 2$ , 故由归纳假设, 存在 $U^{\perp}$ 的标准正交基 $e_1, \cdots, e_{n-2}$ , 使得线性变换 $A$ 在这组基下的表示矩阵为分块上三角矩阵:

$$
\left( \begin{array}{c c c} A _ {1} & & * \\ & \ddots & \\ & & A _ {r - 1} \end{array} \right).
$$

在 U 中选取一组标准正交基 $e_{n-1}, e_{n}$ ，则在标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 下，线性变换 A 的表示矩阵为：

$$
D = \left( \begin{array}{c c c c} A _ {1} & & & * \\ & \ddots & & \\ & & A _ {r - 1} & \\ & & & A _ {r} \end{array} \right).
$$

由于线性变换 $A'$ 在同一组标准正交基下的表示矩阵为 $D'$ ，故 $A_{r}$ 是 $A'$ 在 U 的标准正交基 $e_{n-1}, e_{n}$ 下的表示矩阵。又 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ 是 $A'$ 在 U 的基 $\alpha, \beta$ 下的表示矩

阵, 于是 $A_{r}$ 相似于 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ ，从而它的特征值也为 $a \pm bi$ . ☐

例 9.88 设 n 阶实矩阵 A 的特征值全是实数, 求证: A 正交相似于上三角矩阵.

证明 这是例 9.87 的直接推论. 另外, 也可由例 6.39 和例 9.13 的实版本, 采用完全类似于例 9.85 的讨论得到. □

例 9.89 设 A, B 是实方阵且分块矩阵 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$ 是实正规矩阵, 求证: C = O 且 A, B 也是正规矩阵.

证明 由已知

$$
\left( \begin{array}{c c} A & C \\ O & B \end{array} \right) \left( \begin{array}{c c} A ^ {\prime} & O \\ C ^ {\prime} & B ^ {\prime} \end{array} \right) = \left( \begin{array}{c c} A ^ {\prime} & O \\ C ^ {\prime} & B ^ {\prime} \end{array} \right) \left( \begin{array}{c c} A & C \\ O & B \end{array} \right),
$$

从而 $AA' + CC' = A'A$ . 由于 $\operatorname{tr}(AA' + CC') = \operatorname{tr}(A'A) = \operatorname{tr}(AA')$ , 故可得 $\operatorname{tr}(CC') = 0$ , 再由 $C$ 是实矩阵可推出 $C = O$ , 于是 $AA' = A'A, BB' = B'B$ . $\square$ 

利用例 9.87 和例 9.89 的结论, 可以给出实正规矩阵正交相似标准型的一个代数证明, 它和教材 [1] 中的纯几何证明完全不同.

例 9.90 设 A 是 n 阶实正规矩阵, 求证: 存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $A_{i}=\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}(1\leq i\leq r)$ 是二阶实矩阵, $c_{j}(2r+1\leq j\leq n)$ 是实数.

证明 由例 9.87, A 正交相似于例 9.87 中的分块上三角矩阵, 再反复用例 9.89 的结论可知这是个分块对角矩阵. 又因为每一块都是正规矩阵, 故或是二阶正规矩阵 $A_{i}$ , 或是实数 $c_{j}$ (一阶矩阵). 对于二阶正规矩阵的情形, 由例 9.86 的证明过程可知, 若设 $A_{i}$ 的特征值为 $a_{i} + b_{i}i$ , 对应的特征向量为 $u + vi$ , 令 $P_{i} = \left( \frac{u}{\|u\|}, \frac{v}{\|v\|} \right)$ , 则 $P_{i}$ 为二阶正交矩阵, 且 $P_{i}'A_{i}P_{i} = \begin{pmatrix} a_{i} & b_{i} \\ -b_{i} & a_{i} \end{pmatrix}$ . □

## § 9.10 复正规算子与复正规矩阵

酉空间 $V$ 上的线性变换 $\varphi$ 是正规算子的充要条件是存在 $V$ 的一组标准正交基, 使得 $\varphi$ 在这组基下的表示矩阵为对角矩阵. 西变换、Hermite 变换以及斜 Hermite 变换都是正规算子的常见例子. 本节将给出酉空间 $V$ 上的线性变换 $\varphi$ 是正规算子的其他几个充要条件, 以及复正规矩阵的一些性质等.

例 9.91 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 V 中任意的向量 $\alpha$ , 都有 $\|\varphi(\alpha)\|=\|\varphi^{*}(\alpha)\|$ .

证法 1 必要性由例 9.28 给出, 现证充分性. 我们只要证明对任意的 $u, v \in V$ , 都有 $(\varphi(u), \varphi(v)) = (\varphi^*(u), \varphi^*(v))$ . 事实上, 由上述等式可知 $(u, \varphi^*\varphi(v)) = (u, \varphi\varphi^*(v))$ 成立, 由此即可推出 $\varphi\varphi^* = \varphi^*\varphi$ . 我们可以仿照教材 [1] 中证明保持范数的线性变换一定保持内积的方法进行讨论. 注意到在酉空间 $V$ 中, 内积可用范数来表示, 即对任意的 $u, v \in V$ ,

$$
(\boldsymbol {u}, \boldsymbol {v}) = \frac {1}{4} \| \boldsymbol {u} + \boldsymbol {v} \| ^ {2} - \frac {1}{4} \| \boldsymbol {u} - \boldsymbol {v} \| ^ {2} + \frac {\mathrm{i}}{4} \| \boldsymbol {u} + \mathrm{i} \boldsymbol {v} \| ^ {2} - \frac {\mathrm{i}}{4} \| \boldsymbol {u} - \mathrm{i} \boldsymbol {v} \| ^ {2},
$$

故由 $\varphi, \varphi^{*}$ 的线性可得

$$
\begin{array}{l} (\varphi (\boldsymbol {u}), \varphi (\boldsymbol {v})) = \frac {1}{4} \| \varphi (\boldsymbol {u} + \boldsymbol {v}) \| ^ {2} - \frac {1}{4} \| \varphi (\boldsymbol {u} - \boldsymbol {v}) \| ^ {2} + \frac {\mathrm{i}}{4} \| \varphi (\boldsymbol {u} + \mathrm{i} \boldsymbol {v}) \| ^ {2} - \frac {\mathrm{i}}{4} \| \varphi (\boldsymbol {u} - \mathrm{i} \boldsymbol {v}) \| ^ {2} \\ = \frac {1}{4} \| \varphi^ {*} (\boldsymbol {u} + \boldsymbol {v}) \| ^ {2} - \frac {1}{4} \| \varphi^ {*} (\boldsymbol {u} - \boldsymbol {v}) \| ^ {2} + \frac {\mathrm{i}}{4} \| \varphi^ {*} (\boldsymbol {u} + \mathrm{i} \boldsymbol {v}) \| ^ {2} - \frac {\mathrm{i}}{4} \| \varphi^ {*} (\boldsymbol {u} - \mathrm{i} \boldsymbol {v}) \| ^ {2} \\ = \left(\varphi^ {*} (\boldsymbol {u}), \varphi^ {*} (\boldsymbol {v})\right). \\ \end{array}
$$

证法 2 考虑线性算子 $\varphi\varphi^{*}-\varphi^{*}\varphi$ ，这是一个自伴随算子，因此存在 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ ，使得 $\varphi\varphi^{*}-\varphi^{*}\varphi$ 在这组基下的表示矩阵是对角矩阵 $\mathrm{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ ，即有 $(\varphi\varphi^{*}-\varphi^{*}\varphi)(e_{i}) = \lambda_{i}e_{i} (1 \leq i \leq n)$ 。于是

$$
\lambda_ {i} \left(\boldsymbol {e} _ {i}, \boldsymbol {e} _ {i}\right) = \left(\lambda_ {i} \boldsymbol {e} _ {i}, \boldsymbol {e} _ {i}\right) = \left(\left(\varphi \varphi^ {*} - \varphi^ {*} \varphi\right) \left(\boldsymbol {e} _ {i}\right), \boldsymbol {e} _ {i}\right) = \left(\varphi^ {*} \left(\boldsymbol {e} _ {i}\right), \varphi^ {*} \left(\boldsymbol {e} _ {i}\right)\right) - \left(\varphi \left(\boldsymbol {e} _ {i}\right), \varphi \left(\boldsymbol {e} _ {i}\right)\right) = 0,
$$

从而 $\lambda_{i} = 0(1\leq i\leq n)$ ，因此 $\varphi \varphi^{*} = \varphi^{*}\varphi .$ □

例 9.92 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是若 v 是 $\varphi$ 属于特征值 $\lambda$ 的特征向量, 则 v 也是 $\varphi^{*}$ 属于特征值 $\overline{\lambda}$ 的特征向量.

证法1 必要性就是例9.28, 现证充分性. 对维数 $n$ 进行归纳, 当 $n = 1$ 时结论显然成立, 假设对 $n - 1$ 维酉空间结论成立. 设 $\pmb{v}$ 是 $\varphi$ 的属于特征值 $\lambda$ 的特征向量, 即 $\varphi(v) = \lambda v$ , 由条件可知, $\varphi^{*}(v) = \overline{\lambda} v$ . 记 $U = L(v)^{\perp}$ , 则 $\dim U = n - 1$ , 由例 9.26 可知 $U$ 是 $\varphi$ 及 $\varphi^{*}$ 的不变子空间. 将 $\varphi$ 和 $\varphi^{*}$ 限制在 $U$ 上, 容易验证 $\varphi^{*}|_{U} = (\varphi|_{U})^{*}$ , 故由归纳假设可知, $\varphi|_{U}$ 是 $U$ 上的正规算子, 即 $\varphi|_{U}\varphi^{*}|_{U} = \varphi^{*}|_{U}\varphi|_{U}$ . 显然 $\varphi\varphi^{*}(v) = \varphi^{*}\varphi(v)$ , 因此 $\varphi\varphi^{*} = \varphi^{*}\varphi$ 成立, 即 $\varphi$ 是 $V$ 上的正规算子.

证法 2 由 Schur 定理可知, 存在 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ , 使得 $\varphi$ 在这组基下的表示矩阵是上三角矩阵 $\boldsymbol{A} = (a_{ij})$ , 于是 $\varphi^{*}$ 在同一组基下的表示矩阵为 $\overline{A}'$ . 注意到

$$
\varphi (\boldsymbol {e} _ {1}) = a _ {1 1} \boldsymbol {e} _ {1}, \quad \varphi^ {*} (\boldsymbol {e} _ {1}) = \overline {{a _ {1 1}}} \boldsymbol {e} _ {1} + \overline {{a _ {1 2}}} \boldsymbol {e} _ {2} + \dots + \overline {{a _ {1 n}}} \boldsymbol {e} _ {n},
$$

但由条件可知 $\varphi^{*}(e_{1})=\overline{a_{11}}e_{1}$ ，因此 $a_{12}=\cdots=a_{1n}=0$ 。同理不断地讨论下去，可得 $a_{ij}=0(1\leq i<j\leq n)$ ，于是 A 是对角矩阵。因此 $\varphi$ 在一组标准正交基下的表示矩阵是对角矩阵，从而 $\varphi$ 是正规算子。☐

注 在教材 [1] 中, 我们采用了如下证法: $\varphi\varphi^{*} = \varphi^{*}\varphi \Rightarrow$ 例 9.91 的充分条件 $\Rightarrow$ 例 9.92 的充分条件 $\Rightarrow \varphi$ 在一组标准正交基下的表示矩阵是对角矩阵 $\Rightarrow \varphi\varphi^{*} = \varphi^{*}\varphi$ . 因此在这个意义下, 例 9.91 和例 9.92 其实是自然的推论.

例 9.93 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 $\varphi$ 的任一特征值 $\lambda_{0}$ , 都有 $V = \operatorname{Ker}(\varphi - \lambda_{0} I_{V}) \perp \operatorname{Im}(\varphi - \lambda_{0} I_{V})$ .

证明 设 $\lambda_{1},\lambda_{2},\cdots,\lambda_{k}$ 是 $\varphi$ 的全体不同特征值, $V_{1},V_{2},\cdots,V_{k}$ 是对应的特征子空间. 先证必要性. 若 $\varphi$ 是正规算子, 则 $V=V_{1}\perp V_{2}\perp\cdots\perp V_{k}$ . 容易验证 $\mathrm{Ker}(\varphi-\lambda_{i}\mathbf{I}_{V})=V_{i},\mathrm{Im}(\varphi-\lambda_{i}\mathbf{I}_{V})=V_{1}\perp\cdots\perp V_{i-1}\perp V_{i+1}\perp\cdots\perp V_{k}$ , 于是 $V=\mathrm{Ker}(\varphi-\lambda_{i}\mathbf{I}_{V})\perp\mathrm{Im}(\varphi-\lambda_{i}\mathbf{I}_{V})(1\leq i\leq k)$ .

再证充分性. 由条件可知, 对 $\varphi$ 的任一特征值 $\lambda_0$ , 都有 $\operatorname{Ker}(\varphi - \lambda_0 I_V) \cap \operatorname{Im}(\varphi - \lambda_0 I_V) = 0$ , 故由例 7.40 可知 $\varphi$ 可对角化, 于是 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$ . 对任意的 $1 \leq i \neq j \leq k$ , $V_i = \operatorname{Ker}(\varphi - \lambda_i I_V)$ , $V_j \subseteq \operatorname{Im}(\varphi - \lambda_i I_V)$ , 于是 $V_i \perp V_j$ , 从而 $V = V_1 \perp V_2 \perp \cdots \perp V_k$ , 因此 $\varphi$ 是正规算子. □

利用复正规算子的谱分解, 我们还可以证明下面 3 个充要条件.

例 9.94 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi = \varphi_{1} + i\varphi_{2}$ , 其中 $\varphi_{1}$ 和 $\varphi_{2}$ 是自伴随算子且 $\varphi_{1}\varphi_{2} = \varphi_{2}\varphi_{1}$ .

证明 先证充分性. 由条件可知, $\varphi \varphi^{*} = (\varphi_{1} + \mathrm{i}\varphi_{2})(\varphi_{1} - \mathrm{i}\varphi_{2}) = \varphi_{1}^{2} + \varphi_{2}^{2} = \varphi^{*}\varphi.$ 再证必要性. 令

$$
\varphi_ {1} = \frac {1}{2} (\varphi + \varphi^ {*}), \quad \varphi_ {2} = \frac {1}{2 \mathrm{i}} (\varphi - \varphi^ {*}),
$$

则容易验证 $\varphi_{1}, \varphi_{2}$ 是自伴随算子且乘法可交换. 上述构造用谱分解来看更加清楚, 设 $\varphi = \lambda_{1} E_{1} + \lambda_{2} E_{2} + \cdots + \lambda_{k} E_{k}$ , 其中 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的全体不同特征值, $E_{i}$ 是从 V 到 $\lambda_{i}$ 的特征子空间 $V_{i}$ 的正交投影. 设 $\lambda_{i} = a_{i} + ib_{i}$ , 其中 $a_{i}, b_{i}$ 是实数, 令

$$
\varphi_ {1} = a _ {1} \boldsymbol {E} _ {1} + a _ {2} \boldsymbol {E} _ {2} + \dots + a _ {k} \boldsymbol {E} _ {k}, \quad \varphi_ {2} = b _ {1} \boldsymbol {E} _ {1} + b _ {2} \boldsymbol {E} _ {2} + \dots + b _ {k} \boldsymbol {E} _ {k},
$$

则容易验证 $\varphi = \varphi_{1} + \mathrm{i}\varphi_{2},\varphi_{1},\varphi_{2}$ 是自伴随算子且 $\varphi_1\varphi_2 = \varphi_2\varphi_1$ □

例 9.95 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是存在某个复系数多项式 $f(x)$ , 使得 $\varphi^{*} = f(\varphi)$ .

证明 先证充分性. 若 $\varphi^{*} = f(\varphi)$ , 显然有 $\varphi \varphi^{*} = \varphi^{*} \varphi$ , 因此 $\varphi$ 是正规算子.

再证必要性. 设 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的全体不同特征值, 由谱分解定理, 有

$$
\varphi = \lambda_ {1} E _ {1} + \lambda_ {2} E _ {2} + \dots + \lambda_ {k} E _ {k}.
$$

因为 $E_{i}^{*}=E_{i}$ ，所以

$$
\varphi^ {*} = \overline {{{{\lambda_ {1}}}}} \boldsymbol {E} _ {1} + \overline {{{{\lambda_ {2}}}}} \boldsymbol {E} _ {2} + \dots + \overline {{{{\lambda_ {k}}}}} \boldsymbol {E} _ {k}.
$$

注意到 $E_{i}^{2}=E_{i}, E_{i}E_{j}=0 (i\neq j)$ ，故对任意的正整数 m，有

$$
\varphi^ {m} = \lambda_ {1} ^ {m} E _ {1} + \lambda_ {2} ^ {m} E _ {2} + \dots + \lambda_ {k} ^ {m} E _ {k}.
$$

进一步, 对任意的多项式 $f(x)=a_{0}+a_{1}x+\cdots+a_{m}x^{m}$ , 有

$$
\begin{array}{l} f (\varphi) = a _ {0} I + a _ {1} \varphi + \dots + a _ {m} \varphi^ {m} \\ = a _ {0} \left(\sum_ {i = 1} ^ {k} \boldsymbol {E} _ {i}\right) + a _ {1} \left(\sum_ {i = 1} ^ {k} \lambda_ {i} \boldsymbol {E} _ {i}\right) + \dots + a _ {m} \left(\sum_ {i = 1} ^ {k} \lambda_ {i} ^ {m} \boldsymbol {E} _ {i}\right) \\ = \sum_ {i = 1} ^ {k} f (\lambda_ {i}) \boldsymbol {E} _ {i}. \\ \end{array}
$$

令 $f_{j}(x) = \prod_{i\neq j}\frac{x - \lambda_{i}}{\lambda_{j} - \lambda_{i}}$ ，则 $f_{j}(\lambda_{j}) = 1$ ， $f_{j}(\lambda_{i}) = 0(i\neq j)$ ，由此即得 $f_{j}(\varphi) =$ $\sum_{i = 1}^{k}f_{j}(\lambda_{i})E_{i} = E_{j}$ .再令 $f(x) = \sum_{j = 1}^{k}\overline{\lambda_j} f_j(x)$ ，则有

$$
f (\varphi) = \sum_ {j = 1} ^ {k} \overline {{{\lambda_ {j}}}} f _ {j} (\varphi) = \sum_ {j = 1} ^ {k} \overline {{{\lambda_ {j}}}} E _ {j} = \varphi^ {*}. \square
$$

例 9.96 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi = \omega \psi$ , 其中 $\omega$ 为酉算子, $\psi$ 是半正定自伴随算子, 且 $\omega$ 与 $\psi$ 乘法可交换.

证明 先证充分性. 若 $\varphi = \omega \psi$ , 则 $\varphi^{*} = \psi^{*}\omega^{*} = \psi \omega^{-1}$ , 故由 $\omega \psi = \psi \omega$ 可得 $\varphi \varphi^{*} = \omega \psi^{2}\omega^{-1} = \psi^{2} = \varphi^{*}\varphi$ , 因此 $\varphi$ 是正规算子.

再证必要性. 设 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的全体不同特征值, 由谱分解定理, 有

$$
\varphi = \lambda_ {1} E _ {1} + \lambda_ {2} E _ {2} + \dots + \lambda_ {k} E _ {k}.
$$

若 $\lambda_{i} \neq 0$ ，令 $r_{i} = |\lambda_{i}|$ ， $s_{i} = \frac{\lambda_{i}}{|\lambda_{i}|}$ ；若 $\lambda_{i} = 0$ ，令 $r_{i} = 0$ ， $s_{i} = 1$ 或 -1。再令

$$
\boldsymbol {\omega} = s _ {1} \boldsymbol {E} _ {1} + s _ {2} \boldsymbol {E} _ {2} + \dots + s _ {k} \boldsymbol {E} _ {k}, \quad \boldsymbol {\psi} = r _ {1} \boldsymbol {E} _ {1} + r _ {2} \boldsymbol {E} _ {2} + \dots + r _ {k} \boldsymbol {E} _ {k},
$$

则容易验证 $\omega$ 为酉算子, $\psi$ 是半正定自伴随算子, 且 $\omega$ 与 $\psi$ 乘法可交换. □

例 9.97 设 $A = (a_{ij})$ 是 n 阶复矩阵, $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 是其特征值, 求证:

$$
\sum_ {i = 1} ^ {n} | \lambda_ {i} | ^ {2} \leq \sum_ {i, j = 1} ^ {n} | a _ {i j} | ^ {2},
$$

且等号成立的充要条件是 A 为正规矩阵.

证明 由 Schur 定理可知, 存在酉矩阵 U, 使得

$$
\overline {{\boldsymbol {U}}} ^ {\prime} \boldsymbol {A} \boldsymbol {U} = \boldsymbol {B} = \left( \begin{array}{c c c c} \lambda_ {1} & b _ {1 2} & \dots & b _ {1 n} \\ 0 & \lambda_ {2} & \dots & b _ {2 n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} \end{array} \right)
$$

为上三角矩阵, 于是

$$
\boldsymbol {B} \overline {{\boldsymbol {B}}} ^ {\prime} = \left( \begin{array}{c c c c} \lambda_ {1} & b _ {1 2} & \dots & b _ {1 n} \\ 0 & \lambda_ {2} & \dots & b _ {2 n} \\ \vdots & \vdots & & \vdots \\ 0 & 0 & \dots & \lambda_ {n} \end{array} \right) \left( \begin{array}{c c c c} \overline {{\lambda_ {1}}} & 0 & \dots & 0 \\ \overline {{b _ {1 2}}} & \overline {{\lambda_ {2}}} & \dots & 0 \\ \vdots & \vdots & & \vdots \\ \overline {{b _ {1 n}}} & \overline {{b _ {2 n}}} & \dots & \overline {{\lambda_ {n}}} \end{array} \right),
$$

经计算可得

$$
\operatorname{tr} \left(\boldsymbol {B} \overline {{\boldsymbol {B}}} ^ {\prime}\right) = \sum_ {i = 1} ^ {n} \left| \lambda_ {i} \right| ^ {2} + \sum_ {1 \leq i <   j \leq n} \left| b _ {i j} \right| ^ {2}.
$$

另一方面，由迹的交换性可得

$$
\operatorname{tr} \left(\boldsymbol {B} \overline {{\boldsymbol {B}}} ^ {\prime}\right) = \operatorname{tr} \left(\overline {{\boldsymbol {U}}} ^ {\prime} \boldsymbol {A} \overline {{\boldsymbol {A}}} ^ {\prime} \boldsymbol {U}\right) = \operatorname{tr} \left(\boldsymbol {A} \overline {{\boldsymbol {A}}} ^ {\prime}\right) = \sum_ {i, j = 1} ^ {n} | a _ {i j} | ^ {2},
$$

再由上述两个等式可得

$$
\sum_ {i = 1} ^ {n} \left| \lambda_ {i} \right| ^ {2} + \sum_ {1 \leq i <   j \leq n} \left| b _ {i j} \right| ^ {2} = \sum_ {i, j = 1} ^ {n} \left| a _ {i j} \right| ^ {2}. \tag {9.13}
$$

由 (9.13) 式即得要证的不等式, 且等号成立当且仅当 $b_{ij} = 0 (1 \leq i < j \leq n)$ , 这也当且仅当 $\pmb{A}$ 西相似于对角矩阵 $\pmb{B}$ , 从而当且仅当 $\pmb{A}$ 是正规矩阵. $\square$ 

下面我们来看例 9.97 的 3 个应用.

例 9.98 设 $A=(a_{ij})$ 是 n 阶复矩阵, $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$ 是其特征值, 求证:

$$
\sum_ {i = 1} ^ {n} \left| \lambda_ {i} \right| ^ {2} = \inf _ {\det X \neq 0} \| X ^ {- 1} A X \| _ {F} ^ {2},
$$

其中 $\|\cdot\|_{F}$ 表示由复矩阵的 Frobenius 内积诱导的范数.

证明 注意到对任意的可逆矩阵 X，矩阵 $X^{-1}AX$ 的特征值仍为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，故由例 9.97 可得

$$
\left\| \boldsymbol {X} ^ {- 1} \boldsymbol {A} \boldsymbol {X} \right\| _ {\mathrm{F}} ^ {2} \geq \sum_ {i = 1} ^ {n} \left| \lambda_ {i} \right| ^ {2}. \tag {9.14}
$$

另一方面，设 P 为可逆矩阵，使得

$$
\boldsymbol {P} ^ {- 1} \boldsymbol {A} \boldsymbol {P} = \boldsymbol {J} = \operatorname{diag} \left\{\boldsymbol {J} _ {r _ {1}} \left(\lambda_ {1}\right), \boldsymbol {J} _ {r _ {2}} \left(\lambda_ {2}\right), \dots , \boldsymbol {J} _ {r _ {k}} \left(\lambda_ {k}\right) \right\}
$$

为 Jordan 标准型. 对任意的 $\varepsilon > 0$ , 记 $J_{r_i}(\lambda_i, \varepsilon)$ 为 $r_i$ 阶上三角矩阵, 其主对角元全为 $\lambda_i$ , 上次对角元全为 $\varepsilon$ , 其余元素全为零. 显然, $J_{r_i}(\lambda_i, \varepsilon)$ 的特征值全为 $\lambda_i$ , 其几何重数为 1, 于是 $J_{r_i}(\lambda_i, \varepsilon)$ 相似于 $J_{r_i}(\lambda_i)(1 \leq i \leq k)$ . 记 $J(\varepsilon) = \mathrm{diag}\{J_{r_1}(\lambda_1, \varepsilon), J_{r_2}(\lambda_2, \varepsilon), \cdots, J_{r_k}(\lambda_k, \varepsilon)\}$ , 则对任意的 $\varepsilon > 0$ , $J(\varepsilon)$ 相似于 $J$ , 从而也相似于 $A$ , 因此

$$
\inf _ {\det \boldsymbol {X} \neq 0} \| \boldsymbol {X} ^ {- 1} \boldsymbol {A} \boldsymbol {X} \| _ {\mathrm{F}} ^ {2} \leq \| \boldsymbol {J} (\varepsilon) \| _ {\mathrm{F}} ^ {2} \leq \sum_ {i = 1} ^ {n} | \lambda_ {i} | ^ {2} + (n - 1) \varepsilon^ {2}. \tag {9.15}
$$

最后由 (9.14) 式和 (9.15) 式即得结论. □

例 9.99 设 $A = (a_{ij})$ 是 n 阶实矩阵, 其特征值 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 都是实数, 求证:

$$
\sum_ {i = 1} ^ {n} \lambda_ {i} ^ {2} \leq \sum_ {i, j = 1} ^ {n} a _ {i j} ^ {2},
$$

且等号成立的充要条件是 A 为对称矩阵.

证法 1 由例 9.97 即得不等式, 且等号成立当且仅当 A 是实正规矩阵. 又 A 的特征值全为实数, 故由例 9.90 可知, A 正交相似于对角矩阵, 从而为实对称矩阵.

证法 2 由例 9.88 以及完全类似于例 9.97 的讨论可得不等式, 且等号成立当且仅当 A 正交相似于对角矩阵, 从而为实对称矩阵. □

例 9.100 设 A, B 和 AB 都是 n 阶复正规矩阵, 求证: BA 也是复正规矩阵.

证明 设 AB 的特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，则由例 9.97 可得

$$
\operatorname{tr} \left((A B) (\overline {{{A B}}}) ^ {\prime}\right) = | \lambda_ {1} | ^ {2} + | \lambda_ {2} | ^ {2} + \dots + | \lambda_ {n} | ^ {2}.
$$

由迹的交换性可得

$$
\begin{array}{l} \operatorname{tr} \left((A B) (\overline {{{A B}}}) ^ {\prime}\right) = \operatorname{tr} \left(A B \overline {{{B}}} ^ {\prime} \overline {{{A}}} ^ {\prime}\right) = \operatorname{tr} \left(B \overline {{{B}}} ^ {\prime} \overline {{{A}}} ^ {\prime} A\right), \\ \operatorname{tr} \left((B A) (\overline {{B A}}) ^ {\prime}\right) = \operatorname{tr} \left(B A \overline {{A}} ^ {\prime} \overline {{B}} ^ {\prime}\right) = \operatorname{tr} \left(\overline {{B}} ^ {\prime} B A \overline {{A}} ^ {\prime}\right). \\ \end{array}
$$

再由 A, B 是正规矩阵可得 $A\overline{A}' = \overline{A}'A$ , $B\overline{B}' = \overline{B}'B$ , 由此即得

$$
\operatorname{tr} \left((B A) (\overline {{B A}}) ^ {\prime}\right) = | \lambda_ {1} | ^ {2} + | \lambda_ {2} | ^ {2} + \dots + | \lambda_ {n} | ^ {2}.
$$

注意到 $BA$ 和 $AB$ 具有相同的特征值, 故由例 9.97 可知, $BA$ 也是正规矩阵. $\square$ 

例 9.101 设 A 是 n 阶斜 Hermite 矩阵, 即 $\overline{A}' = -A$ . 证明: A 必酉相似于对角矩阵 $\mathrm{diag}\{c_{1}, c_{2}, \cdots, c_{n}\}$ , 其中 $c_{i}$ 是零或纯虚数.

证明 注意到斜 Hermite 矩阵 A 满足 $AA' = -A^{2} = \overline{A}'A$ ，故 A 为正规矩阵，因此存在酉矩阵 U，使得 $\overline{U}'AU = diag\{c_{1}, c_{2}, \cdots, c_{n}\}$ 。因为 $(\overline{U}'AU)' = \overline{U}'\overline{A}'U = -\overline{U}'AU$ ，故对角矩阵 $diag\{c_{1}, c_{2}, \cdots, c_{n}\}$ 也是斜 Hermite 矩阵，从而每个 $c_{i}$ 都满足 $\overline{c_{i}} = -c_{i}$ ，即 $c_{i}$ 是零或纯虚数。☐

例 9.102 设 $S = \{n\text{阶斜 Hermite 矩阵 } A\}$ , $T = \{I_n + B \text{可逆的 } n\text{阶酉矩阵 } B\}$ . 映射 $\varphi: S \to T$ 定义为 $\varphi(A) = (I_n - A)(I_n + A)^{-1}$ , 映射 $\psi: T \to S$ 定义为 $\psi(B) = (I_n - B)(I_n + B)^{-1}$ . 求证: $\psi\varphi = I_S, \varphi\psi = I_T$ , 即 $\varphi, \psi$ 实现了集合 $S, T$ 之间的一一对应.

证明 由例9.101可知斜Hermite矩阵 $\mathbf{A}$ 的特征值都是零或纯虚数, 于是 $I_{n} + A$ 是可逆矩阵. 再由矩阵运算不难验证 $\varphi(A) \in T$ , 因此 $\varphi$ 的定义是有意义的. 同理由矩阵运算不难验证 $\psi(B) \in S$ , 因此 $\psi$ 的定义也是有意义的. $\psi \varphi = I_S$ 和 $\varphi \psi = I_T$ 都可以通过矩阵运算得到验证, 具体的细节留给读者完成.

设 $C = \{z \in \mathbb{C} \mid |z| = 1, z \neq -1\}$ 是复平面上的单位圆挖去 $(-1,0)$ 点, $I = \{yi \mid y \in \mathbb{R}\}$ 是复平面上的虚轴, 容易验证 $f(z) = \frac{1 - z}{1 + z}$ 不仅是 $I \to C$ 的连续映射, 还是 $C \to I$ 的连续映射, 并且由 $f \circ f(z) = z$ 可知, $f: I \to C$ 是一个连续双射 (称为同胚). 下面我们通过酉相似标准型和上述 $f$ 来描述本题中的一一对应.

对任一 $A \in S$ ，由例 9.101 可知，存在酉矩阵 U，使得 $\overline{U}'AU = \Lambda_A = diag\{c_1, c_2, \cdots, c_n\}$ ，其中 $c_i \in I$ 。因此 $\overline{U}'\varphi(A)U = \varphi(\Lambda_A) = diag\{f(c_1), f(c_2), \cdots, f(c_n)\}$ ，其中 $f(c_i) \in C$ ，从而 $\varphi(A) \in T$ 。再对任一 $B \in T$ ，由 §§ 9.1.5 推论 8 可知，存在酉矩阵 V，使得 $\overline{V}'BV = \Lambda_B = diag\{d_1, d_2, \cdots, d_n\}$ ，其中 $d_i \in C$ 。因此 $\overline{V}'\psi(B)V = \psi(\Lambda_B) = diag\{f(d_1), f(d_2), \cdots, f(d_n)\}$ ，其中 $f(d_i) \in I$ ，从而 $\psi(B) \in S$ 。最后由 $f: I \to C$ 是一个双射可知， $\varphi: S \to T$ 和 $\psi: T \to S$ 互为逆映射。☐

## § 9.11 实正规算子与实正规矩阵

欧氏空间上的正规算子或实正规矩阵的理论要比酉空间上的正规算子或复正规矩阵的理论复杂得多, 其原因是实矩阵不一定有实特征值及实特征向量. 通常可以有多种方法得到实正规矩阵的正交相似标准型理论. 例如在 §9.9 中, 我们已通过实数版本的 Schur 定理 (例 9.87) 和正规矩阵的性质证明了其正交相似标准型理论, 这是一个代数的证明. 在教材 [1] 中, 通过极小多项式诱导的空间直和分解以及极小多项式为二次多项式的实正规算子的研究给出了其正交相似标准型理论, 这是一个几何的证明. 事实上, 我们还可以通过数学归纳法给出实正规矩阵正交相似标准型理论的直接证明, 其中最关键的技巧就是例 9.86, 即当 $A$ 没有实特征值时, 亦可构造它的二维不变子空间来运用归纳假设.

例 9.90 设 A 是 n 阶实正规矩阵, 求证: 存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $A_{i}=\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}(1\leq i\leq r)$ 是二阶实矩阵, $c_{j}(2r+1\leq j\leq n)$ 是实数.

证法 2 对阶数 n 进行归纳. 当 n = 0 时表示归纳过程已经结束. 当 n = 1 时, 结论显然成立. 假设对小于 n 阶的实正规矩阵结论成立, 现证 n 阶实正规矩阵 A 的情形. 将 A 看成是 n 维实列向量空间 $R^{n}$ (取标准内积) 上的线性变换, 则 A 是实正规算子且 $A'$ 是其伴随. 下面分两种情况进行讨论.

首先, 假设 A 有实特征值 $\lambda$ , 取其单位特征向量 $e_{n}$ , 则由例 9.28 可知, $e_{n}$ 也是 $A'$ 属于特征值 $\lambda$ 的特征向量. 因此 $L(e_{n})$ 是 A, $A'$ 的不变子空间, 故由例 9.26 可知, $L(e_{n})^{\perp}$ 也是 A, $A'$ 的不变子空间, 将 A, $A'$ 限制在 $L(e_{n})^{\perp}$ , 容易验证 A 仍然是实正规算子. 由归纳假设, 存在 $L(e_{n})^{\perp}$ 的标准正交基 $e_{1}, \cdots, e_{n-1}$ , 使得线性变换 A 在这组基下的表示矩阵是 n-1 阶的标准型, 于是在标准正交基 $e_{1}, \cdots, e_{n-1}, e_{n}$ 下, 线性变换 A 的表示矩阵就是要求的标准型.

其次, 假设 $\mathbf{A}$ 没有实特征值, 并设虚数 $a + b\mathrm{i}$ 是 $\mathbf{A}$ 的特征值, $\mathbf{u} + \mathbf{v}\mathrm{i}$ 是对应的特征向量, 其中 $\mathbf{u}, \mathbf{v}$ 是实列向量, 则由例 9.86 可知, $(\mathbf{u}, \mathbf{v}) = 0$ 且 $\| \mathbf{u} \| = \| \mathbf{v} \|$ . 令 $e_{n-1} = \frac{\mathbf{u}}{\|\mathbf{u}\|}, e_n = \frac{\mathbf{v}}{\|\mathbf{v}\|}$ , 则由例 9.86 的证明过程可得

$$
\boldsymbol {A} \boldsymbol {e} _ {n - 1} = a \boldsymbol {e} _ {n - 1} - b \boldsymbol {e} _ {n}, \quad \boldsymbol {A} \boldsymbol {e} _ {n} = b \boldsymbol {e} _ {n - 1} + a \boldsymbol {e} _ {n},
$$

$$
\boldsymbol {A} ^ {\prime} \boldsymbol {e} _ {n - 1} = a \boldsymbol {e} _ {n - 1} + b \boldsymbol {e} _ {n}, \quad \boldsymbol {A} ^ {\prime} \boldsymbol {e} _ {n} = - b \boldsymbol {e} _ {n - 1} + a \boldsymbol {e} _ {n}.
$$

令 $U = L(e_{n-1}, e_n)$ ，则上式表明 U 是 A, $A'$ 的不变子空间，故由例 9.26 可知， $U^{\perp}$ 也是 A, $A'$ 的不变子空间，将 A, $A'$ 限制在 $U^{\perp}$ ，容易验证 A 仍然是实正规算子。由归纳假设，存在 $U^{\perp}$ 的标准正交基 $e_1, \cdots, e_{n-2}$ ，使得线性变换 A 在这组基下的表示矩阵是 n-2 阶的标准型，又 A 在 $e_{n-1}, e_n$ 下的表示矩阵为 $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ ，于是在标准正交基 $e_1, \cdots, e_{n-2}, e_{n-1}, e_n$ 下，线性变换 A 的表示矩阵就是要求的标准型。☐

注 实正规矩阵的正交相似标准型理论的上述证明其实是例 9.86 和例 9.87 证明的综合体, 这一证明的特点是将代数方法和几何方法综合在一起, 而不是把它们割裂开来. 运用代数 (矩阵) 技巧, 可以把实矩阵自然地看成复矩阵, 从而得到复特征值和复特征向量, 再将复特征向量分离出两个线性无关的实列向量, 并由此构造出二维不变子空间; 而运用几何 (线性变换) 技巧, 则可以有效地处理不变子空间, 并将问题化约到低维空间上, 以此完成归纳过程. 请读者仔细体会证明中的精妙之处.

下面我们将给出欧氏空间中的线性变换是实正规算子的几个充要条件，并和复正规算子的情形进行一些比较.

例 9.103 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 V 中任意的向量 $\alpha$ , 都有 $\|\varphi(\alpha)\|=\|\varphi^{*}(\alpha)\|$ .

证明 例 9.91 的证法 2 可以原封不动地搬到实正规算子的情形, 而其证法 1 也可以适用于实正规算子的情形, 只要采用实内积空间中内积表示为范数的如下表达式即可:

$$
(\boldsymbol {u}, \boldsymbol {v}) = \frac {1}{4} \| \boldsymbol {u} + \boldsymbol {v} \| ^ {2} - \frac {1}{4} \| \boldsymbol {u} - \boldsymbol {v} \| ^ {2}. \square
$$

因为实正规算子可能没有实特征值和实特征向量, 所以需要将例 9.92 和例 9.94 的实正规算子版本作一些调整才行.

例 9.104 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是对 V 中任意两个向量 $\alpha, \beta$ , 若 $\varphi(\alpha) = a\alpha - b\beta$ 且 $\varphi(\beta) = b\alpha + a\beta$ (其中 a, b 是实数), 则必有 $\varphi^{*}(\alpha) = a\alpha + b\beta$ 且 $\varphi^{*}(\beta) = -b\alpha + a\beta$ .

证明 任取 $V$ 的一组标准正交基, 设 $\varphi$ 在这组基下的表示矩阵为 $A$ , 则 $\varphi^{*}$ 在这组基下的表示矩阵为 $A'$ , 再设 $\alpha, \beta$ 的坐标向量分别为 $u, v$ .

先证必要性. 若 $\pmb{u} = \pmb{v} = \mathbf{0}$ , 则结论显然成立, 以下不妨设 $\pmb{u}, \pmb{v}$ 不全为零. 若 $b = 0$ , 则 $\pmb{A}\pmb{u} = a\pmb{u}, \pmb{A}\pmb{v} = a\pmb{v}$ , 即 $\pmb{u}, \pmb{v}$ 是 $\pmb{A}$ 属于实特征值 $a$ 的特征向量或零向量, 从而由例9.28可知, $\pmb{u}, \pmb{v}$ 也是 $A'$ 属于实特征值 $a$ 的特征向量或零向量, 结论得证. 若 $b \neq 0$ , 令 $\pmb{w} = \pmb{u} + \pmb{v}\mathrm{i}$ , 则 $\pmb{w} \neq \mathbf{0}$ 且 $\pmb{A}\pmb{w} = (a + b\mathrm{i})\pmb{w}$ , 即 $\pmb{w}$ 是 $\pmb{A}$ 属于虚特征值 $a + b\mathrm{i}$ 的特征向量, 故由例9.28可知, $\pmb{w}$ 也是 $A'$ 属于虚特征值 $a - b\mathrm{i}$ 的特征向量, 从而不难验证结论成立.

再证充分性. 与必要性完全类似的讨论可得, 若 $w$ 是 $\pmb{A}$ 属于特征值 $\lambda$ 的特征向量, 则 $\pmb{w}$ 也是 $A'$ 属于特征值 $\overline{\lambda}$ 的特征向量, 故由例9.92可知, $\pmb{A}$ 是复正规矩阵. 又 $\pmb{A}$ 是实矩阵, 故 $\pmb{A}$ 也是实正规矩阵, 从而 $\varphi$ 是实正规算子. □

例 9.105 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi = \varphi_{1} + \varphi_{2}$ , 其中 $\varphi_{1}$ 是自伴随算子, $\varphi_{2}$ 是斜对称算子, 且 $\varphi_{1}\varphi_{2} = \varphi_{2}\varphi_{1}$ .

证明 先证充分性. 由条件可得

$$
\varphi \varphi^ {*} = (\varphi_ {1} + \varphi_ {2}) (\varphi_ {1} - \varphi_ {2}) = \varphi_ {1} ^ {2} - \varphi_ {2} ^ {2} = \varphi^ {*} \varphi .
$$

再证必要性. 令 $\varphi_{1} = \frac{1}{2} (\varphi +\varphi^{*}),\varphi_{2} = \frac{1}{2} (\varphi -\varphi^{*})$ ，则容易验证 $\varphi_{1}$ 是自伴随算子， $\varphi_{2}$ 是斜对称算子，且 $\varphi_{1}\varphi_{2} = \varphi_{2}\varphi_{1}$ 

上面的构造用正交相似标准型来看更加清楚, 设 $\varphi$ 在一组标准正交基下的表示矩阵为正交相似标准型

$$
\operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

则实对角矩阵 $\mathrm{diag}\{a_{1},a_{1},\cdots,a_{r},a_{r},c_{2r+1},\cdots,c_{n}\}$ 对应的自伴随算子即为 $\varphi_{1}$ ，实反对称矩阵 $\mathrm{diag}\left\{\begin{pmatrix}0&b_{1}\\-b_{1}&0\end{pmatrix},\cdots,\begin{pmatrix}0&b_{r}\\-b_{r}&0\end{pmatrix},0,\cdots,0\right\}$ 对应的斜对称算子即为 $\varphi_{2}$ ，并且矩阵的乘法可交换性对应于线性算子的乘法可交换性. □

例 9.106 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是存在某个实系数多项式 $g(x)$ , 使得 $\varphi^{*} = g(\varphi)$ .

证法1 先证充分性. 若 $\varphi^{*} = g(\varphi)$ , 则 $\varphi \varphi^{*} = \varphi^{*}\varphi$ 显然成立. 再证必要性. 设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $a_{i}, b_{i}, c_{j}$ 都是实数并且 $b_{i} \neq 0$ . 由线性变换与矩阵的一一对应, 我们只要证明存在某个实系数多项式 $g(x)$ , 使得 $\mathbf{A}' = g(\mathbf{A})$ 即可. 由于分块对角矩阵主对角线上的分块调换次序是一个正交相似变换 (这也等价于调换基向量的次序), 故不妨将完全相同的分块放在一起, 于是可假设 $\mathbf{A}$ 已是如下形状:

$$
\boldsymbol {A} = \operatorname{diag} \left\{\boldsymbol {B} _ {1}, \dots , \boldsymbol {B} _ {s}, \boldsymbol {B} _ {s + 1}, \dots , \boldsymbol {B} _ {t} \right\},
$$

其中 $B_{i}=\operatorname{diag}\left\{\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix},\cdots,\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}\right\},1\leq i\leq s;B_{j}=\operatorname{diag}\{c_{j},\cdots,c_{j}\},$ $s+1\leq j\leq t.$ 注意到 $B_{i}$ 适合多项式 $g_{i}(x)=(x-a_{i})^{2}+b_{i}^{2}(1\leq i\leq s),B_{j}$ 适合多项式 $g_{j}(x)=x-c_{j}(s+1\leq j\leq t)$ ，故 $\{g_{1}(x),g_{2}(x),\cdots,g_{t}(x)\}$ 是一组两两互素的多项式。令 $f_{i}(x)=2a_{i}-x(1\leq i\leq s),f_{j}(x)=x(s+1\leq j\leq t)$ ，则容易验证 $B_{i}^{\prime}=f_{i}(B_{i})(1\leq i\leq s),B_{j}^{\prime}=f_{j}(B_{j})(s+1\leq j\leq t)$ ，因此由例7.31可知，存在实系数多项式 $g(x)$ ，使得 $A^{\prime}=g(A)$ 。

证法 2 充分性同证法 1, 下证必要性. 设 A 是 $\varphi$ 在某组标准正交基下的表示矩阵, 我们只要证明存在某个实系数多项式 $g(x)$ , 使得 $A' = g(A)$ 即可. 由于 A 是实正规矩阵, 故可以自然地看成是复正规矩阵, 由例 9.95 可知, 存在复系数多项式 $f(x)$ , 使得 $A' = f(A)$ . 将 $f(x)$ 各项系数的实部和虚部分开得到两个实系数多项式 $g(x), h(x)$ , 使得 $f(x) = g(x) + ih(x)$ , 于是可得 $A' = g(A) + ih(A)$ , 从而只能是 $A' = g(A), h(A) = O$ , 结论得证. □

例 9.107 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是正规算子的充要条件是 $\varphi = \omega \psi$ , 其中 $\omega$ 是正交算子, $\psi$ 是半正定自伴随算子, 且 $\omega \psi = \psi \omega$ .

证明 充分性的证明同例 9.96 充分性的证明, 下证必要性. 设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $a_{i}, b_{i}, c_{j}$ 都是实数并且 $b_{i} \neq 0$ . 由线性变换与矩阵的一一对应, 我们只要证明存在乘法可交换的正交矩阵 $\pmb{P}$ 和半正定实对称矩阵 $\pmb{S}$ , 使得 $\pmb{A} = \pmb{P}\pmb{S}$ 即可. 令 $k_{i} = \sqrt{a_{i}^{2} + b_{i}^{2}}$ , $a_{i} = k_{i}\cos \theta_{i}$ , $b_{i} = k_{i}\sin \theta_{i}$ , $1 \leq i \leq r$ . 若 $c_{j} = 0$ , 则令 $k_{j} = 0$ , $d_{j} = 1$ 或 $-1$ ; 若 $c_{j} \neq 0$ , 则令 $k_{j} = |c_{j}|$ , $d_{j} = \frac{c_{j}}{|c_{j}|}$ , $2r + 1 \leq j \leq n$ . 令

$$
\boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} \cos \theta_ {1} & \sin \theta_ {1} \\ - \sin \theta_ {1} & \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} \cos \theta_ {r} & \sin \theta_ {r} \\ - \sin \theta_ {r} & \cos \theta_ {r} \end{array} \right), d _ {2 r + 1}, \dots , d _ {n} \right\},
$$

$$
\boldsymbol {S} = \operatorname{diag} \left\{k _ {1}, k _ {1}, \dots , k _ {r}, k _ {r}, k _ {2 r + 1}, \dots , k _ {n} \right\},
$$

则容易验证这就是所要求的分解. □

例 9.108 设 $\varphi$ 是 n 维欧氏空间 V 上的正规算子, 其极小多项式为 $g(x)=(x-a)^{2}+b^{2}$ , 其中 $b\neq0$ , 求证: $\varphi$ 是 V 上的自同构且 $\varphi^{*}=(a^{2}+b^{2})\varphi^{-1}$ .

证明 只要证明 $\varphi^{*}\varphi = (a^{2} + b^{2})I_{V}$ 即可. 设 $\varphi$ 在 $V$ 的某组标准正交基下的表示矩阵为正交相似标准型

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

其中 $a_{i}, b_{i}, c_{j}$ 都是实数并且 $b_{i} \neq 0$ . 因为 $\varphi$ 的极小多项式为 $g(x) = (x - a)^{2} + b^{2}$ , 所以在上述分块矩阵中没有一阶的块, 并且每个二阶的块都等于 $\left( \begin{array}{cc}a & b \\ -b & a \end{array} \right)$ (也可以直接引用教材 [1] 中的定理 9.7.2 得到这一结论), 从而 $\varphi$ 在这组基下的表示矩阵为

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} a & b \\ - b & a \end{array} \right), \dots , \left( \begin{array}{c c} a & b \\ - b & a \end{array} \right) \right\}, r = \frac {n}{2}.
$$

因为 $A^{\prime}A=(a^{2}+b^{2})I_{n}$ ，所以 $\varphi^{*}\varphi=(a^{2}+b^{2})I_{V}$ . □

例 9.109 设 $\varphi$ 是 n 维欧氏空间 V 上的正规算子, $\psi$ 是 V 上某一线性算子, 满足 $\varphi\psi = \psi\varphi$ , 求证: $\varphi^{*}\psi = \psi\varphi^{*}$ .

证法 1 我们引用一下教材 [1] 中证明实正规算子正交相似标准型的几何方法. 设 $g(x)$ 是 $\varphi$ 的极小多项式, 则 $g(x)=g_{1}(x)g_{2}(x)\cdots g_{t}(x)$ 在实数域上可以分解为互异的首一不可约多项式 $g_{i}(x)$ 的乘积. 令 $V_{i}=\operatorname{Ker}g_{i}(\varphi)$ , 则

$$
V = V _ {1} \perp V _ {2} \perp \dots \perp V _ {t},
$$

$\varphi_{i}=\varphi|_{V_{i}}$ 是 $V_{i}$ 上的正规算子且极小多项式为 $g_{i}(x)$ . 若 $g_{i}(x)=(x-a_{i})^{2}+b_{i}^{2}$ , 则存在 $V_{i}$ 的标准正交基, 使得 $\varphi_{i}$ 的表示矩阵为 $\text{diag}\left\{\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix},\cdots,\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}\right\}$ ; 若 $g_{i}(x)=x-c_{i}$ , 则 $\varphi_{i}=c_{i}I_{V_{i}}$ . 具体的证明请参考教材 [1] § 9.7. 回到本题的证明, 由于 $\varphi\psi=\psi\varphi$ , 故易证 $V_{i}$ 也是 $\psi$ 的不变子空间. 令 $\psi_{i}=\psi|_{V_{i}}$ , 则有 $\varphi_{i}\psi_{i}=\psi_{i}\varphi_{i}$ . 若 $g_{i}(x)=(x-a_{i})^{2}+b_{i}^{2}$ , 则 $\varphi_{i}$ 满足例 9.108 的条件, 从而 $\varphi_{i}^{*}=(a_{i}^{2}+b_{i}^{2})\varphi_{i}^{-1}$ , 于是由 $\varphi_{i}^{-1}\psi_{i}=\psi_{i}\varphi_{i}^{-1}$ 即得 $\varphi_{i}^{*}\psi_{i}=\psi_{i}\varphi_{i}^{*}$ ; 若 $g_{i}(x)=x-c_{i}$ , 则 $\varphi_{i}=\varphi_{i}^{*}=c_{i}I_{V_{i}}$ , 此时 $\varphi_{i}^{*}\psi_{i}=\psi_{i}\varphi_{i}^{*}$ 显然成立. 因为 $\varphi^{*}\psi=\psi\varphi^{*}$ 在每一个 $V_{i}$ 上都成立, 所以在 V 上也成立. 我们也可以平行地给出代数的证明, 类似于例 9.106 证法 1 中的讨论, 可假设 $\varphi$ 在某组标准正交基下的表示矩阵已是如下形状的标准型:

$$
\boldsymbol {A} = \operatorname{diag} \left\{\boldsymbol {B} _ {1}, \dots , \boldsymbol {B} _ {s}, \boldsymbol {B} _ {s + 1}, \dots , \boldsymbol {B} _ {t} \right\},
$$

其中 $B_{i}=\operatorname{diag}\left\{\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix},\cdots,\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}\right\},1\leq i\leq s;B_{j}=\operatorname{diag}\{c_{j},\cdots,c_{j}\},$ $s+1\leq j\leq t.$ 设 $\psi$ 在同一组基下的表示矩阵是 C，则 AC=CA. 因为 $B_{i}$ 的特征值互不相同，故由例 6.90 可知， $C=\operatorname{diag}\{C_{1},C_{2},\cdots,C_{t}\}$ ，从而 $B_{i}C_{i}=C_{i}B_{i}$ . 注意到 $B_{i}^{\prime}=(a_{i}^{2}+b_{i}^{2})B_{i}^{-1}(1\leq i\leq s),B_{j}^{\prime}=B_{j}(s+1\leq j\leq t)$ ，故可得 $B_{i}^{\prime}C_{i}=C_{i}B_{i}^{\prime}$ ，于是 $A^{\prime}C=CA^{\prime}$ ，从而 $\varphi^{*}\psi=\psi\varphi^{*}$ 成立.

证法2 由例9.106可知, 存在实系数多项式 $g(x)$ , 使得 $\varphi^{*} = g(\varphi)$ . 因为 $\varphi$ 与 $\psi$ 乘法可交换, 所以 $\varphi^{*}$ 也与 $\psi$ 乘法可交换. □

例 9.110 设 $\varphi$ 是 n 维欧氏空间 V 上的非零线性变换, 求证: $\varphi$ 保持向量的正交性不变的充要条件是存在正实数 k, 使得 $\varphi^{*}\varphi = kI_{V}$ .

证法1 先证充分性. 若 $\varphi^{*}\varphi = kI_{V}$ , 则对任意正交的向量 $u, v, (\varphi(u), \varphi(v)) = (\varphi^{*}\varphi(u), v) = k(u, v) = 0$ , 即 $\varphi$ 保持向量的正交性不变. 再证必要性. 取 $V$ 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ , 因为 $\varphi$ 保持向量的正交性不变, 所以 $\varphi(e_{1}), \varphi(e_{2}), \cdots, \varphi(e_{n})$ 是一个两两正交的向量组. 对任意的 $i \neq j$ , $(e_{i} + e_{j}, e_{i} - e_{j}) = 0$ , 故 $(\varphi(e_{i}) + \varphi(e_{j}), \varphi(e_{i}) - \varphi(e_{j})) = 0$ , 从而 $(\varphi(e_{i}), \varphi(e_{i})) = (\varphi(e_{j}), \varphi(e_{j}))$ , 于是 $(\varphi(e_{i}), \varphi(e_{i}))$ 是一个不依赖于 $i$ 的常数, 设之为 $k$ . 又因为 $\varphi$ 是非零线性变换, 故至少存在一个 $i$ , 使得 $\varphi(e_{i}) \neq 0$ , 从而 $k > 0$ , 于是 $\| \varphi(e_{i}) \| = \sqrt{k} (1 \leq i \leq n)$ . 考虑线性变换 $\frac{1}{\sqrt{k}}\varphi$ , 它将标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 映为标准正交基 $\frac{1}{\sqrt{k}}\varphi(e_{1}), \frac{1}{\sqrt{k}}\varphi(e_{2}), \cdots, \frac{1}{\sqrt{k}}\varphi(e_{n})$ , 故为正交变换, 从而 $\left(\frac{1}{\sqrt{k}}\varphi^{*}\right)\left(\frac{1}{\sqrt{k}}\varphi\right) = I_{V}$ , 即 $\varphi^{*}\varphi = kI_{V}$ 成立.

证法2 充分性的证明同证法1, 下证必要性. 设 $S = \{v \in V \mid \| v \| = 1\}$ , 任取两个不正交的向量 $u, v \in S$ , 由Gram-Schmidt正交化方法可知 $(v - (v, u) u, u) = 0$ , 从而有 $(\varphi(v) - (v, u) \varphi(u), \varphi(u)) = 0$ , 于是 $(\varphi(v), \varphi(u)) = (v, u)(\varphi(u), \varphi(u)).$ 同理可得 $(\varphi(u), \varphi(v)) = (u, v)(\varphi(v), \varphi(v))$ , 由于 $(u, v) \neq 0$ , 故 $(\varphi(u), \varphi(u)) = (\varphi(v), \varphi(v))$ . 对两个正交的向量 $u, v \in S$ , 令 $w = \frac{1}{\sqrt{2}}(u + v) \in S$ , 则 $w$ 与 $u, v$ 中任意一个都不正交, 从而由上面的讨论可知, $(\varphi(u), \varphi(u)) = (\varphi(w), \varphi(w)) = (\varphi(v), \varphi(v))$ , 因此 $(\varphi(v), \varphi(v))$ 是 $S$ 上的常值函数, 记之为 $k$ . 因为 $\varphi$ 是非零线性变换, 故存在非零向量 $v \in V$ , 使得 $\varphi(v) \neq 0$ , 从而 $\varphi\left(\frac{v}{\|v\|}\right) = \frac{\varphi(v)}{\|v\|} \neq 0$ , 于是 $k > 0$ . 因此对任一非零向量 $v \in V$ , 有 $\sqrt{k} = \left\|\varphi\left(\frac{v}{\|v\|}\right)\right\| = \frac{\|\varphi(v)\|}{\|v\|}$ , 从而 $\left\|\frac{1}{\sqrt{k}} \varphi(v)\right\| = \|v\|$ , 这个等式对 $v = 0$ 也成立, 这说明 $\frac{1}{\sqrt{k}} \varphi$ 保持范数, 从而是正交变换, 于是 $\left(\frac{1}{\sqrt{k}} \varphi^{*}\right)\left(\frac{1}{\sqrt{k}} \varphi\right) = I_V$ , 即 $\varphi^{*} \varphi = k I_V$ 成立. □

例 9.110 及其两种证法可以推广到酉空间的情形, 相关细节留给读者自行完成.
利用例 9.110 还能证明例 9.93 的实正规算子版本.

例 9.111 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, $g(x)$ 是 $\varphi$ 的极小多项式, 求证: $\varphi$ 是正规算子的充要条件是对 $g(x)$ 的任一不可约因式 $g_{i}(x)$ , 以下两个条件都成立:

(1) $V = \operatorname{Ker} g_i(\varphi) \perp \operatorname{Im} g_i(\varphi)$ ; 

(2) 任取 $\operatorname{Ker} g_i(\varphi)$ 中两个正交的向量 $\alpha, \beta$ , 则 $\varphi(\alpha)$ 与 $\varphi(\beta)$ 也正交.

证明 先证必要性. 若 $\varphi$ 是正规算子, 则由教材 [1] 中的定理 9.7.1 可知, $\varphi$ 的极小多项式 $g(x)$ 无重因式, 即 $g(x) = g_{1}(x)g_{2}(x)\cdots g_{k}(x)$ , 其中 $g_{i}(x)$ 是 $g(x)$ 互异的首一不可约因式, 并且

$$
V = \operatorname{Ker} g _ {1} (\varphi) \perp \operatorname{Ker} g _ {2} (\varphi) \perp \dots \perp \operatorname{Ker} g _ {k} (\varphi). \tag {9.16}
$$

对任意的 $i \neq j$ , 由 $(g_{i}(x), g_{j}(x)) = 1$ 可知, 存在实系数多项式 $u(x), v(x)$ , 使得 $g_{i}(x) u(x) + g_{j}(x) v(x) = 1$ , 于是 $g_{i}(\varphi) u(\varphi) + g_{j}(\varphi) v(\varphi) = I_{V}$ . 任取 $\pmb{v} \in \operatorname{Ker} g_{j}(\varphi)$ , 则有 $\pmb{v} = g_{i}(\varphi) u(\varphi)(\pmb{v}) + v(\varphi) g_{j}(\varphi)(\pmb{v}) = g_{i}(\varphi) u(\varphi)(\pmb{v}) \in \operatorname{Im} g_{i}(\varphi)$ , 于是 $\operatorname{Ker} g_{j}(\varphi) \subseteq \operatorname{Im} g_{i}(\varphi)$ . 进一步, $\sum_{j \neq i} \operatorname{Ker} g_{j}(\varphi) \subseteq \operatorname{Im} g_{i}(\varphi)$ . 由线性映射维数公式以及 (9.16) 式可得 $\operatorname{Im} g_{i}(\varphi) = \sum_{j \neq i} \operatorname{Ker} g_{j}(\varphi) = \bot_{j \neq i} \operatorname{Ker} g_{j}(\varphi)$ , 从而 $V = \operatorname{Ker} g_{i}(\varphi) \perp \operatorname{Im} g_{i}(\varphi)$ , 即条件 (1) 成立. 令 $\varphi_{i}$ 为 $\varphi$ 在 $\operatorname{Ker} g_{i}(\varphi)$ 上的限制, 则 $\varphi_{i}$ 仍为实正规算子且极小多项式为 $g_{i}(x)$ . 若 $g_{i}(x) = x - c_{i}$ , 则 $\varphi_{i} = c_{i}I$ 为纯量变换, 它显然保持向量的正交性不变. 若 $g_{i}(x)=(x-a_{i})^{2}+b_{i}^{2}$ ，其中 $b_{i}\neq0$ ，则由例 9.108 可得 $\varphi_{i}^{*}\varphi_{i}=(a_{i}^{2}+b_{i}^{2})I$ ，再由例 9.110 可知 $\varphi_{i}$ 保持向量的正交性不变，即条件 (2) 也成立.

再证充分性. 设 $\varphi$ 满足条件 (1) 和 (2), 其极小多项式 $g(x) = g_1(x)^{r_1}g_2(x)^{r_2}\cdots g_k(x)^{r_k}$ , 其中 $g_i(x)$ 是 $g(x)$ 互异的首一不可约因式. 若 $r_1 > 1$ , 则对任一 $\pmb{v} \in V$ , $g_1(\pmb{\varphi})^{r_1 - 1}g_2(\pmb{\varphi})^{r_2}\cdots g_k(\pmb{\varphi})^{r_k}(\pmb{v}) \in \operatorname{Ker}g_1(\pmb{\varphi}) \cap \operatorname{Im}g_1(\pmb{\varphi}) = 0$ , 于是 $\pmb{\varphi}$ 也适合多项式 $g_1(x)^{r_1 - 1}g_2(x)^{r_2}\cdots g_k(x)^{r_k}$ , 这与 $g(x)$ 是极小多项式相矛盾, 因此 $g(x) = g_1(x)g_2(x)\cdots g_k(x)$ . 由例7.87可知, $V = \operatorname{Ker}g_1(\pmb{\varphi}) \oplus \operatorname{Ker}g_2(\pmb{\varphi}) \oplus \dots \oplus \operatorname{Ker}g_k(\pmb{\varphi})$ , 由必要性中间完全类似的讨论可得 $\operatorname{Im}g_i(\pmb{\varphi}) = \oplus_{j \neq i} \operatorname{Ker}g_j(\pmb{\varphi})$ , 再由条件 (1) 可知, 对任意的 $i \neq j$ , $\operatorname{Ker}g_i(\pmb{\varphi}) \perp \operatorname{Ker}g_j(\pmb{\varphi})$ , 于是

$$
V = \operatorname{Ker} g _ {1} (\varphi) \perp \operatorname{Ker} g _ {2} (\varphi) \perp \dots \perp \operatorname{Ker} g _ {k} (\varphi).
$$

若 $g_{i}(x)=x-c_{i}$ ，则 $\varphi_{i}=c_{i}I$ 为纯量变换，于是存在 $\operatorname{Ker}g_{i}(\varphi)$ 的一组标准正交基，使得 $\varphi_{i}$ 的表示矩阵为纯量矩阵 $c_{i}I$ 。若 $g_{i}(x)=(x-a_{i})^{2}+b_{i}^{2}$ ，其中 $b_{i}\neq0$ ，则 $\varphi_{i}$ 是非零线性变换且保持 $\operatorname{Ker}g_{i}(\varphi)$ 中向量的正交性不变，故由例 9.110 可知，存在正实数 $k_{i}$ ，使得 $\varphi_{i}^{*}\varphi_{i}=k_{i}I$ ，故 $\varphi_{i}^{*}=k_{i}\varphi_{i}^{-1}$ ，于是 $\varphi_{i}$ 是 $\operatorname{Ker}g_{i}(\varphi)$ 上的正规算子，从而存在一组标准正交基，使得 $\varphi_{i}$ 的表示矩阵为 $A_{i}=\operatorname{diag}\left\{\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix},\cdots,\begin{pmatrix}a_{i}&b_{i}\\-b_{i}&a_{i}\end{pmatrix}\right\}$ 。将 $\operatorname{Ker}g_{i}(\varphi)$ 的标准正交基拼成全空间 V 的一组标准正交基，则 $\varphi$ 在这组基下的表示矩阵为

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\},
$$

这是一个实正规矩阵, 从而 $\varphi$ 是实正规算子. $\square$ 

例 9.112 设 $\varphi$ 是 n 维欧氏空间 V 上的线性变换, 求证: $\varphi$ 是斜对称算子 (即 $\varphi^{*} = -\varphi$ ) 的充要条件是对任意的向量 v, $\varphi(v)$ 与 v 都正交.

证明 先证必要性. 若 $\varphi^{*} = -\varphi$ , 则对任意的 $v \in V$ , $(\varphi(v), v) = (v, \varphi^{*}(v)) = (v, -\varphi(v)) = -(\varphi(v), v)$ , 从而 $(\varphi(v), v) = 0$ . 再证充分性. 任取 $u, v \in V$ , 则由条件可得

$$
\begin{array}{l} 0 = (\varphi (\boldsymbol {u} + \boldsymbol {v}), \boldsymbol {u} + \boldsymbol {v}) = (\varphi (\boldsymbol {u}), \boldsymbol {u}) + (\varphi (\boldsymbol {u}), \boldsymbol {v}) + (\varphi (\boldsymbol {v}), \boldsymbol {u}) + (\varphi (\boldsymbol {v}), \boldsymbol {v}), \\ = (\varphi (\boldsymbol {u}), \boldsymbol {v}) + (\varphi (\boldsymbol {v}), \boldsymbol {u}), \\ \end{array}
$$

从而 $(\varphi(\boldsymbol{u}),\boldsymbol{v})=-(\varphi(\boldsymbol{v}),\boldsymbol{u})=(\boldsymbol{u},-\varphi(\boldsymbol{v}))$ 对任意的 $u,v\in V$ 成立，再由伴随的唯一性即得 $\varphi^{*}=-\varphi$ . □

注 例 9.112 对酉空间就不成立了, 请读者自行思考其中的原因 (参考例 9.10).

在前面我们已经看到不变子空间对研究正规算子的重要意义, 接下去的例 9.113 是关于正规算子不变子空间的最重要的结论, 其中对实正规算子不变子空间的证明虽然比较复杂, 但其方法在前面的例题中已使用过多次, 相信读者是不会陌生的.

例 9.113 设 $\varphi$ 是 n 维内积空间 V 上的正规算子, U 是 $\varphi$ 的不变子空间. 求证: U 也是 $\varphi^{*}$ 的不变子空间, 从而 $\varphi$ 在 U 上的限制仍然是一个正规算子.

证法1 我们对欧氏空间和酉空间分别进行证明. 先假设 $V$ 是酉空间, 我们对不变子空间 $U$ 的维数 $k$ 进行归纳. 当 $k = 1$ 时, $U$ 是一维子空间, 可以由一个向量 $\pmb{u}$ 生成. 显然 $\pmb{u}$ 是 $\varphi$ 的特征向量, 由例9.28可知, $\pmb{u}$ 也是 $\varphi^{*}$ 的特征向量, 从而 $U = L(\pmb{u})$ 也是 $\varphi^{*}$ 的不变子空间. 假设对 $k - 1$ 维不变子空间结论成立, 现设 $U$ 是 $k$ 维不变子空间. 将 $\varphi$ 限制在 $U$ 上, 设 $\lambda$ 是 $\varphi|_{U}$ 的特征值, $\pmb{u} \in U$ 是对应的特征向量. 令 $W = L(\pmb{u})$ , 则由例9.28可知, $W$ 既是 $\varphi$ 的不变子空间, 也是 $\varphi^{*}$ 的不变子空间, 再由例9.26可知, $W^{\perp}$ 也是 $\varphi$ 和 $\varphi^{*}$ 的不变子空间. 令 $W_{0} = U \cap W^{\perp}$ , 则易证 $U = W \perp W_{0}$ 且 $W_{0}$ 是 $\varphi$ 的 $k - 1$ 维不变子空间. 由归纳假设, $W_{0}$ 是 $\varphi^{*}$ 的不变子空间, 于是 $U$ 也是 $\varphi^{*}$ 的不变子空间. 至此我们对酉空间证明了结论.

再假设 $V$ 是欧氏空间, 我们也对 $U$ 的维数 $k$ 进行归纳. 当 $k = 0$ 时表示归纳过程已经结束. 当 $k = 1$ 时, 类似于酉空间的情形同理可证明. 假设对小于 $k$ 维的不变子空间结论成立, 现设 $U$ 是 $k$ 维不变子空间. 取 $U$ 和 $U^{\perp}$ 的标准正交基组成 $V$ 的基, $\varphi$ 在此基下的表示矩阵为 $N = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ , $N$ 是正规矩阵. 我们将 $V$ 等同于 $\mathbb{R}^n$ (取标准内积), $U$ 等同于 $\mathbb{R}^k$ (看成是 $\mathbb{R}^n$ 的子空间, 后 $n - k$ 个分量全为零), 将 $\varphi$ 等同于 $N$ , $\varphi|_U$ 等同于 $A$ . 若 $A$ 有实特征值, 则类似于酉空间的情形用归纳假设即得结论. 以下假设 $A$ 没有实特征值, 并设 $a + bi$ 是其虚特征值, $\boldsymbol{u} + \boldsymbol{v}\mathrm{i}$ 是对应的特征向量, 注意到它们也是 $N$ 的虚特征值和虚特征向量, 故由例9.86可知, $W = L(\boldsymbol{u}, \boldsymbol{v})$ 作为 $U$ 的二维子空间, 既是 $N$ 的不变子空间, 也是 $N'$ 的不变子空间, 再由例9.26可知, $W^{\perp}$ 也是 $N$ 和 $N'$ 的不变子空间. 令 $W_0 = U \cap W^{\perp}$ , 则易证 $U = W \perp W_0$ 且 $W_0$ 是 $N$ 的 $k - 2$ 维不变子空间. 由归纳假设, $W_0$ 是 $N'$ 的不变子空间, 于是 $U$ 也是 $N'$ 的不变子空间. 至此我们对欧氏空间也证明了结论.

证法2 我们只对欧氏空间证明, 西空间的证明类似. 取 $U$ 和 $U^{\perp}$ 的标准正交基组成 $V$ 的基, $\varphi$ 在此基下的表示矩阵为 $N = \begin{pmatrix} A & C \\ O & B \end{pmatrix}$ , $N$ 是正规矩阵, 故由例9.89可知 $C = O$ . 又 $\varphi^{*}$ 的表示矩阵为 $N'$ , 故 $U$ 也是 $\varphi^{*}$ 的不变子空间.

特别地, 可将 $\varphi$ 和 $\varphi^{*}$ 限制在 $U$ 上, 并且容易验证 $\varphi^{*}|_{U}$ 仍是 $\varphi|_{U}$ 的伴随, 故由 $\varphi|_{U}\varphi^{*}|_{U}=\varphi^{*}|_{U}\varphi|_{U}$ 可知 $\varphi|_{U}$ 仍是正规算子. $\square$ 

## § 9.12 实正规矩阵的正交相似标准型

上一节我们讨论了实正规算子和实正规矩阵的几何结构及其相关的应用, 这一节将着重讨论实正规矩阵的正交相似标准型在矩阵理论中的一些应用.

例 9.75 告诉我们, 若 A 是正定实对称矩阵, B 是实对称矩阵, 则存在可逆矩阵 C, 使得 $C'AC = I_{n}$ , $C'BC$ 是对角矩阵, 这个结论称为同时合同对角化. 在 §9.8 中, 我们已看到同时合同对角化在处理实对称矩阵时的诸多应用. 类似地, 若 S 是实反对称矩阵, 则例 9.114 告诉我们, 存在可逆矩阵 C, 使得 $C'AC = I_{n}$ , $C'SC$ 是实反对称矩阵的正交相似标准型, 我们亦称之为同时合同标准化.

例 9.114 设 A 为 n 阶正定实对称矩阵, S 是同阶实反对称矩阵, 求证: 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {S} \boldsymbol {C} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\}, \tag {9.17}
$$

其中 $b_{1},\cdots,b_{r}$ 是非零实数.

证明 因为 A 是正定阵, 故存在可逆矩阵 P, 使得 $P^{\prime}AP = I_{n}$ . 又矩阵 $P^{\prime}SP$ 还是实反对称矩阵, 故存在正交矩阵 Q, 使得

$$
\boldsymbol {Q} ^ {\prime} (\boldsymbol {P} ^ {\prime} \boldsymbol {S} \boldsymbol {P}) \boldsymbol {Q} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

其中 $b_{1}, \cdots, b_{r}$ 是非零实数. 此时 $Q'(P'AP)Q = I_{n}$ ，只需令 C = PQ 即得结论. □
同时合同标准化在处理实反对称矩阵时比较有用, 我们来看 3 个典型的例题.

例 8.45 设 A 是 n 阶正定实对称矩阵, S 是 n 阶实反对称矩阵, 求证:

(1) $|A+S|\geq|A|+|S|$ ，且等号成立当且仅当 $n\leq2$ 或当 $n\geq3$ 时，S=O.

(2) $|A+S|\geq|A|$ ，且等号成立当且仅当S=O.

证法 2 (2) 由例 9.114 可知, 存在可逆矩阵 C, 使得 (9.17) 式成立. 因此我们有

$$
\begin{array}{l} \left| C ^ {\prime} \right| \left| A + S \right| \left| C \right| = \left| C ^ {\prime} A C + C ^ {\prime} S C \right| \\ = \left| \operatorname{diag} \left\{\left( \begin{array}{c c} 1 & b _ {1} \\ - b _ {1} & 1 \end{array} \right), \dots , \left( \begin{array}{c c} 1 & b _ {r} \\ - b _ {r} & 1 \end{array} \right), 1, \dots , 1 \right\} \right| \\ = \left(1 + b _ {1} ^ {2}\right) \left(1 + b _ {2} ^ {2}\right) \dots \left(1 + b _ {r} ^ {2}\right) \geq 1 = | \boldsymbol {C} ^ {\prime} | | \boldsymbol {A} | | \boldsymbol {C} |, \\ \end{array}
$$

且等号成立的充要条件是 r=0，这也等价于 $C^{\prime}SC=O$ ，即 S=O。

(1) 与 (2) 的证明类似, 但等号成立的充要条件需要讨论, 细节留给读者完成. □

例 9.115 设 n 阶实矩阵 A 满足 $A + A'$ 正定 (即 A 是亚正定阵), 求证:

$$
\left| \boldsymbol {A} + \boldsymbol {A} ^ {\prime} \right| \leq 2 ^ {n} | \boldsymbol {A} |,
$$

且等号成立的充要条件是 A 为对称矩阵.

证明 注意到矩阵 A 的如下分解:

$$
\boldsymbol {A} = \frac {1}{2} (\boldsymbol {A} + \boldsymbol {A} ^ {\prime}) + \frac {1}{2} (\boldsymbol {A} - \boldsymbol {A} ^ {\prime}),
$$

其中 $\frac{1}{2}(\boldsymbol{A}+\boldsymbol{A}')$ 是正定阵, $\frac{1}{2}(\boldsymbol{A}-\boldsymbol{A}')$ 是实反对称矩阵, 故由例 8.45 可得 $|A| \geq \frac{1}{2^{n}} |A + A'|$ , 等号成立的充要条件是 $\frac{1}{2}(\boldsymbol{A}-\boldsymbol{A}') = \boldsymbol{O}$ , 即 A 为对称矩阵. □

例 9.116 设 A, B 为 n 阶实矩阵, 其中 A 的 n 个特征值都是正实数, 并且满足 $AB + BA' = 2AA'$ . 证明:

(1) B 必为对称矩阵;

(2) A 为对称矩阵当且仅当 A = B，也当且仅当 $\mathrm{tr}(B^{2}) = \mathrm{tr}(AA')$ ;

(3) $|B|\geq|A|$ ，且等号成立的充要条件是A=B.

证明 (1) 考虑矩阵方程

$$
\boldsymbol {A} \boldsymbol {X} - \boldsymbol {X} (- \boldsymbol {A} ^ {\prime}) = 2 \boldsymbol {A} \boldsymbol {A} ^ {\prime}, \tag {9.18}
$$

由于 A 的特征值都是正实数, 故 $-A'$ 的特征值都是负实数, 从而它们没有公共的特征值. 由例 6.91 可知, 矩阵方程 (9.18) 存在唯一解 $X = B \in M_{n}(\mathbb{R})$ . 将等式 $AB + BA' = 2AA'$ 两边同时转置, 可得 $AB' + B'A' = 2AA'$ , 即 $X = B'$ 也是矩阵方程 (9.18) 的解, 由解的唯一性可得 $B = B'$ , 即 B 为对称矩阵.

(2) 若 A 为对称矩阵, 则 X = A 也是矩阵方程 (9.18) 的解, 由解的唯一性可得 B = A, 于是 $B^{2} = AA'$ , 从而 $\mathrm{tr}(B^{2}) = \mathrm{tr}(AA')$ . 反之, 若 $\mathrm{tr}(B^{2}) = \mathrm{tr}(AA')$ , 则

$$
\begin{array}{l} \operatorname{tr} \left((A - B) (A - B) ^ {\prime}\right) = \operatorname{tr} \left((A - B) (A ^ {\prime} - B)\right) \\ = \operatorname{tr} \left(\boldsymbol {A} \boldsymbol {A} ^ {\prime} + \boldsymbol {B} ^ {2} - (\boldsymbol {A} \boldsymbol {B} + \boldsymbol {B} \boldsymbol {A} ^ {\prime})\right) = \operatorname{tr} (\boldsymbol {B} ^ {2}) - \operatorname{tr} (\boldsymbol {A} \boldsymbol {A} ^ {\prime}) = 0, \\ \end{array}
$$

由迹的正定性可得 A - B = O，即 A = B 是对称矩阵。

(3) 注意到 $AB + (AB)' = 2AA'$ 为正定阵且 $|A| > 0$ , 故由例 9.115 可得 $|2AA'| \leq 2^n |AB|$ , 由此可得 $|B| \geq |A|$ , 等号成立当且仅当 $AB$ 为对称矩阵, 即当且仅当 $AB = AA'$ , 这也当且仅当 $A = B$ . □

例 9.117 设 A 为 n 阶实正规矩阵, 求证: 存在特征值为 1 或 -1 的正交矩阵 P, 使得 $P'AP = A'$ .

证明 设 Q 为正交矩阵, 使得

$$
\boldsymbol {Q} ^ {\prime} \boldsymbol {A} \boldsymbol {Q} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & b _ {r} \\ - b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\}
$$

为正交相似标准型, 上式两边转置后有

$$
\boldsymbol {Q} ^ {\prime} \boldsymbol {A} ^ {\prime} \boldsymbol {Q} = \operatorname{diag} \left\{\left( \begin{array}{c c} a _ {1} & - b _ {1} \\ b _ {1} & a _ {1} \end{array} \right), \dots , \left( \begin{array}{c c} a _ {r} & - b _ {r} \\ b _ {r} & a _ {r} \end{array} \right), c _ {2 r + 1}, \dots , c _ {n} \right\}.
$$

设正交矩阵 $R = \text{diag}\left\{\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \cdots, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, 1, \cdots, 1\right\}$ ，其中有 r 个二阶分块，则容易验证 $R'(Q'AQ)R = Q'A'Q$ ，即有 $(QRQ')'A(QRQ') = A'$ 。令 P = QRQ'，则 P 为正交矩阵且 $P'AP = A'$ 。又 P 正交相似于 R，故其特征值为 1 或 -1。□

例 9.30 设 V 是 n 阶实对称矩阵构成的欧氏空间 (取 Frobenius 内积).

(1) 求出 V 的一组标准正交基;

(2) 设 T 是一个 n 阶实矩阵, V 上的线性变换 $\varphi$ 定义为 $\varphi(A)=T^{\prime}AT$ , 求证: $\varphi$ 是自伴随算子的充要条件是 T 为对称矩阵或反对称矩阵.

证法 2 (2) 我们用实正规矩阵的正交相似标准型来证明: 若 $T^{\prime}AT = TAT^{\prime}$ 对任意的 n 阶实对称矩阵 A 都成立, 则 T 必为实对称矩阵或实反对称矩阵.

先取 $A = I_{n}$ ，则 $T'T = TT'$ ，即 T 为实正规矩阵，故存在正交矩阵 P，使得 $P'TP = \text{diag}\left\{\begin{pmatrix} a_{1} & b_{1} \\ -b_{1} & a_{1} \end{pmatrix}, \cdots, \begin{pmatrix} a_{r} & b_{r} \\ -b_{r} & a_{r} \end{pmatrix}, c_{2r+1}, \cdots, c_{n}\right\}$ ，其中 $b_{1}, \cdots, b_{r}$ 是非零实数。注意到此时条件可改写为

$$
(P ^ {\prime} T P) ^ {\prime} (P ^ {\prime} A P) (P ^ {\prime} T P) = (P ^ {\prime} T P) (P ^ {\prime} A P) (P ^ {\prime} T P) ^ {\prime},
$$

$P^{\prime}AP$ 可取到任意的实对称矩阵, 并且 T 对称或反对称当且仅当 $P^{\prime}TP$ 对称或反对称, 故不妨从一开始就假设 T 是上述标准型. 若 T 主对角线上的分块都是一阶矩阵, 则 T 就是对称矩阵. 若 T 主对角线上的分块存在二阶矩阵, 我们只要证明此时 T 必为反对称矩阵即可. 首先, 对二阶矩阵 $T_{1}=\begin{pmatrix}a&b\\-b&a\end{pmatrix}(b\neq0)$ , 令 $A_{1}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ , 则由 $T_{1}^{\prime}A_{1}T_{1}=T_{1}A_{1}T_{1}^{\prime}$ 经过简单计算可得 ab=0, 但 b≠0, 故 a=0. 其次, 若

T 主对角线上的分块还存在一阶矩阵, 对三阶矩阵 $T_{2}=\begin{pmatrix}0&b&0\\-b&0&0\\0&0&\lambda\end{pmatrix}(b\neq0)$ , 令 $A_{2}=\begin{pmatrix}0&0&0\\0&0&1\\0&1&0\end{pmatrix}$ ，则由 $T_{2}^{\prime}A_{2}T_{2}=T_{2}A_{2}T_{2}^{\prime}$ 经过简单计算可得 $b\lambda=0$ ，但 $b\neq0$ ，故 $\lambda=0.$ 因此 $T=\operatorname{diag}\left\{\begin{pmatrix}0 & b_{1}\\-b_{1} & 0\end{pmatrix},\cdots,\begin{pmatrix}0 & b_{r}\\-b_{r} & 0\end{pmatrix},0,\cdots,0\right\}$ 必为反对称矩阵.
综上所述，结论得证. □

接下来我们看一看正交矩阵的正交相似标准型的若干应用.

例 9.118 证明: (1) 任一正交矩阵均可表示为不超过两个实对称矩阵之积;

(2) 任一 n 阶实矩阵均可表示为不超过 3 个实对称矩阵之积.

证明 (1) 设 A 是正交矩阵, 则存在正交矩阵 P, 使得 $P^{\prime}AP = B = \text{diag}\{B_{1}, \cdots, B_{r}, c_{2r+1}, \cdots, c_{n}\}$ , 其中 $B_{i} = \begin{pmatrix} \cos \theta_{i} & -\sin \theta_{i} \\ \sin \theta_{i} & \cos \theta_{i} \end{pmatrix} (1 \leq i \leq r)$ , $c_{j} = \pm 1 (2r + 1 \leq j \leq n)$ . 若设

$$
\boldsymbol {S} _ {i} = \left( \begin{array}{c c} \cos \theta_ {i} & \sin \theta_ {i} \\ \sin \theta_ {i} & - \cos \theta_ {i} \end{array} \right), \quad \boldsymbol {T} _ {i} = \left( \begin{array}{c c} 1 & 0 \\ 0 & - 1 \end{array} \right),
$$

则 $B_{i}=S_{i}T_{i}(1\leq i\leq r)$ . 令

$$
\boldsymbol {S} = \operatorname{diag} \left\{\boldsymbol {S} _ {1}, \dots , \boldsymbol {S} _ {r}, c _ {2 r + 1}, \dots , c _ {n} \right\}, \quad \boldsymbol {T} = \operatorname{diag} \left\{\boldsymbol {T} _ {1}, \dots , \boldsymbol {T} _ {r}, 1, \dots , 1 \right\},
$$

则 B = ST，其中 S, T 都是实对称矩阵。最后 $A = (PSP')(PTP')$ ，即 A 是两个实对称矩阵之积。

(2) 对任意的 $n$ 阶实矩阵 $\mathbf{A}$ , 由矩阵的极分解可得 $\mathbf{A} = \mathbf{Q}\mathbf{S}$ , 其中 $\mathbf{Q}$ 是正交矩阵, $\mathbf{S}$ 是半正定实对称矩阵, 再由 (1) 可知, $\mathbf{Q}$ 可以分解为不超过两个实对称矩阵之积, 从而结论得证. $\square$ 

例 9.119 设 A, B 为 n 阶正交矩阵, 求证: $|A| + |B| = 0$ 当且仅当 $n - \mathrm{r}(A + B)$ 为奇数.

证明 因为正交矩阵的逆矩阵以及正交矩阵的乘积都是正交矩阵, 故 $AB^{-1}$ 还是正交矩阵. $|A| + |B| = 0$ 等价于 $|AB^{-1}| = -1$ , 又 $\mathrm{r}(A + B) = \mathrm{r}(AB^{-1} + I_n)$ , 故只要证明: 若 $A$ 是 $n$ 阶正交矩阵, 则 $|A| = -1$ 当且仅当 $n - \mathrm{r}(A + I_n)$ 为奇数即可. 下面给出两种证法.

证法 1 设 P 是正交矩阵, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} \cos \theta_ {1} & - \sin \theta_ {1} \\ \sin \theta_ {1} & \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} \cos \theta_ {r} & - \sin \theta_ {r} \\ \sin \theta_ {r} & \cos \theta_ {r} \end{array} \right), 1, \dots , 1, - 1, \dots , - 1 \right\},
$$

其中 $\sin\theta_{i}\neq0(1\leq i\leq r)$ ，且有 s 个 1, t 个 -1。于是 $|A|=(-1)^{t}$ ，并且

$$
\begin{array}{l} \boldsymbol {P} ^ {\prime} (\boldsymbol {A} + \boldsymbol {I} _ {n}) \boldsymbol {P} \\ = \operatorname{diag} \left\{\left( \begin{array}{c c} 1 + \cos \theta_ {1} & - \sin \theta_ {1} \\ \sin \theta_ {1} & 1 + \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} 1 + \cos \theta_ {r} & - \sin \theta_ {r} \\ \sin \theta_ {r} & 1 + \cos \theta_ {r} \end{array} \right), 2, \dots , 2, 0, \dots , 0 \right\}, \\ \end{array}
$$

从而 $\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_{n})=n-t.$ 因此 $|A|=-1$ 当且仅当 t 为奇数, 即当且仅当 $n-\mathrm{r}(\boldsymbol{A}+\boldsymbol{I}_{n})$ 为奇数.

证法 2 由于正交矩阵 A 也是复正规矩阵, 从而酉相似于对角矩阵, 特别地, A 可复对角化. 注意到 A 的特征值是模长等于 1 的复数, 故或者是模长等于 1 的共轭虚特征值, 或者是 ±1. 设 A 的特征值 -1 的几何重数 $n - \mathrm{r}(A + I_n) = t$ , 则其代数重数也为 t, 于是 $|A| = (-1)^t = -1$ 当且仅当 $n - \mathrm{r}(A + I_n) = t$ 为奇数. □

注 例 9.119 的直接推论是: 若正交矩阵 A, B 满足 $|A| + |B| = 0$ , 则 $|A + B| = 0$ . 这一结论也可由第 2 章矩阵的技巧 (类似于例 2.19 的讨论) 来得到. 又因为正交矩阵行列式的值等于 1 或 -1, 故例 9.119 的等价命题为: 设 A, B 为 n 阶正交矩阵, 则 $|A| = |B|$ 当且仅当 $n - r(A + B)$ 为偶数.

例 9.120 设 A 为 n 阶正交矩阵, 证明: $\mathrm{r}(I_{n}-A)=\mathrm{r}\left((I_{n}-A)^{2}\right)$ .

证法 1 设 P 是正交矩阵, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} \cos \theta_ {1} & - \sin \theta_ {1} \\ \sin \theta_ {1} & \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} \cos \theta_ {r} & - \sin \theta_ {r} \\ \sin \theta_ {r} & \cos \theta_ {r} \end{array} \right), 1, \dots , 1, - 1, \dots , - 1 \right\},
$$

其中 $\sin\theta_{i}\neq0(1\leq i\leq r)$ ，且有 s 个 1, t 个 -1。因此

$$
\begin{array}{l} \boldsymbol {P} ^ {\prime} (\boldsymbol {I} _ {n} - \boldsymbol {A}) \boldsymbol {P} \\ = \operatorname{diag} \left\{\left( \begin{array}{c c} 1 - \cos \theta_ {1} & \sin \theta_ {1} \\ - \sin \theta_ {1} & 1 - \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} 1 - \cos \theta_ {r} & \sin \theta_ {r} \\ - \sin \theta_ {r} & 1 - \cos \theta_ {r} \end{array} \right), 0, \dots , 0, 2, \dots , 2 \right\}, \\ \end{array}
$$

从而 $\mathrm{r}(\boldsymbol{I}_{n}-\boldsymbol{A})=n-s$ . 同理可得 $\boldsymbol{P}'(\boldsymbol{I}_{n}-\boldsymbol{A})^{2}\boldsymbol{P}$ 的表达式, 并由此可得 $\mathrm{r}\left((\boldsymbol{I}_{n}-\boldsymbol{A})^{2}\right)=n-s$ , 故结论成立.

证法 2 由于正交矩阵 A 也是复正规矩阵, 从而酉相似于对角矩阵, 特别地, A 可复对角化, 再由例 7.41 即得结论.

证法 3 在第 3 章解答题 8 中, 令 a = 1 即得结论. □

例 9.121 设 $\varphi$ 是 n 维欧氏空间 V 上的正交变换, 若 $\det\varphi=1$ , 则称 $\varphi$ 是一个旋转; 若 $\det\varphi=-1$ , 则称 $\varphi$ 是一个反射. 求证:

(1) 奇数维空间的旋转必有保持不动的非零向量, 即存在 $0 \neq v \in V$ , $\varphi(v) = v$ ;

(2) 反射必有反向的非零向量, 即存在 $0 \neq v \in V$ , $\varphi(v) = -v$ .

证明 由正交变换的正交相似标准型理论可知, 存在 V 的一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ , 使得 $\varphi$ 在这组基下的表示矩阵为

$$
\boldsymbol {A} = \operatorname{diag} \left\{\left( \begin{array}{c c} \cos \theta_ {1} & - \sin \theta_ {1} \\ \sin \theta_ {1} & \cos \theta_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} \cos \theta_ {r} & - \sin \theta_ {r} \\ \sin \theta_ {r} & \cos \theta_ {r} \end{array} \right), 1, \dots , 1, - 1, \dots , - 1 \right\},
$$

其中 $\sin\theta_{i}\neq0(1\leq i\leq r)$ ，且有 s 个 1, t 个 -1。因此 $2r+s+t=n$ ，且 $\det\varphi=\det A=(-1)^{t}$ .

(1) 若 $n$ 为奇数且 $\operatorname{det} \varphi = 1$ , 则 $t$ 为偶数, 并且 $s = n - 2r - t$ 为奇数. 特别地, $s \geq 1$ , 因此存在某个基向量 $\pmb{e}_i$ , 使得 $\varphi(\pmb{e}_i) = \pmb{e}_i$ .

(2) 若 $\operatorname{det} \varphi = -1$ , 则 $t$ 为奇数, 特别地, $t \geq 1$ , 因此存在某个基向量 $\pmb{e}_i$ , 使得 $\varphi(\pmb{e}_i) = -\pmb{e}_i$ . $\square$ 

注 我们来看一看二阶、三阶正交矩阵的几何意义. 二阶正交矩阵 A 按照行列式的值可分成两大类: 若 $|A|=1$ , 则 $A=\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$ 表示以原点为中心的某个角度的旋转; 若 $|A|=-1$ , 则由例 9.121 (2) 可知, $A=\begin{pmatrix}\cos\theta & \sin\theta \\ \sin\theta & -\cos\theta\end{pmatrix}$ 表示沿过原点的某条直线的反射. 由例 9.121 可知, 三阶正交矩阵 A 的正交相似标准型总可以选择为 $\mathrm{diag}\left\{\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}, |A|\right\}$ 的形式. 设 $U=L(e_{1}, e_{2}), L=L(e_{3})$ , 则当 $|A|=1$ 时, 正交变换是以 L 为固定轴的旋转 (投影在平面 U 上是某个角度的旋转); 当 $|A|=-1$ 时, 正交变换是关于平面 U 的反射 (即由 $e_{3}$ 定义的镜像变换) 再复合以 L 为固定轴的旋转.

例 9.122 设 $S = \{n\text{阶实反对称矩阵} A\}$ , $T = \{I_n + B \text{可逆的 } n \text{阶正交矩阵} B\}$ . 映射 $\varphi: S \to T$ 定义为 $\varphi(A) = (I_n - A)(I_n + A)^{-1}$ , 映射 $\psi: T \to S$ 定义为 $\psi(B) = (I_n - B)(I_n + B)^{-1}$ . 求证: $\psi \varphi = I_S, \varphi \psi = I_T$ , 即 $\varphi, \psi$ 实现了集合 $S, T$ 之间的一一对应.

证明 由例3.82可知 $I_{n} + A$ 是可逆矩阵, 再由矩阵运算不难验证 $\varphi(A) \in T$ , 因此 $\varphi$ 的定义是有意义的. 同理由矩阵运算不难验证 $\psi(B) \in S$ , 因此 $\psi$ 的定义也是有意义的. $\psi \varphi = I_{S}$ 和 $\varphi \psi = I_{T}$ 都可以通过矩阵运算得到验证, 具体的细节留给读者完成.

设 $f(z)=(1-z)(1+z)^{-1}$ ，显然 $f(0)=1$ 且 $f(1)=0$ ，即 f 为 $\{0\}$ 和 $\{1\}$ 之间的双射。设 $\theta\in(-\pi,0)\cup(0,\pi)$ ，若 $A=\begin{pmatrix}0&\tan\frac{\theta}{2}\\-\tan\frac{\theta}{2}&0\end{pmatrix}$ ，则通过简单的计算可得 $f(A)=(I_{n}-A)(I_{n}+A)^{-1}=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$ ；若 $B=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$ ，则通过简单的计算可得 $f(B)=(I_{n}-B)(I_{n}+B)^{-1}=\begin{pmatrix}0&\tan\frac{\theta}{2}\\-\tan\frac{\theta}{2}&0\end{pmatrix}$ ，因此 f 也给出了二阶实反对称矩阵与二阶旋转正交矩阵之间的双射。下面我们通过正交相似标准型和上述 f 来描述本题中的一一对应。

对任一 $A \in S$ ，存在正交矩阵 P，使得 $P'AP = diag\{A_1, \cdots, A_r, 0, \cdots, 0\}$ ，其中 $A_i = \begin{pmatrix} 0 & \tan \frac{\theta_i}{2} \\ -\tan \frac{\theta_i}{2} & 0 \end{pmatrix}$ ，则容易验证 $P'\varphi(A)P = diag\{f(A_1), \cdots, f(A_r), 1, \cdots, 1\}$ ，从而 $\varphi(A) \in T$ 。再对任一 $B \in T$ ，存在正交矩阵 Q，使得 $Q'BQ = diag\{B_1, \cdots, B_r, 1, \cdots, 1\}$ ，其中 $B_i = \begin{pmatrix} \cos \theta_i & -\sin \theta_i \\ \sin \theta_i & \cos \theta_i \end{pmatrix}$ ，则容易验证 $Q'\psi(B)Q = diag\{f(B_1), \cdots, f(B_r), 0, \cdots, 0\}$ ，从而 $\psi(B) \in S$ 。最后由 f 是一个双射可知， $\varphi: S \to T$ 和 $\psi: T \to S$ 互为逆映射。☐

## § 9.13 同时正交对角化与同时正交标准化

在 §6.3 中, 我们讨论过乘法交换性诱导的同时上三角化和同时对角化的问题,接下来我们将讨论这样两个问题:

(1) 同时正交 (酉) 对角化 对实对称矩阵 (复正规矩阵) A 和 B, 何时存在正交矩阵 (酉矩阵) P, 使得 $P^{\prime}AP$ 和 $P^{\prime}BP$ 都是对角矩阵 ( $\overline{P}^{\prime}AP$ 和 $\overline{P}^{\prime}BP$ 都是对角矩阵). 这个问题的几何版本是: 对欧氏空间上的自伴随算子 (酉空间上的正规算子) $\varphi$ 和 $\psi$ , 该内积空间中何时存在一组由它们的公共特征向量构成的标准正交基. 例 9.123 回答了这个问题, 例 9.124 将这一结论推广到多个矩阵或线性变换的情形. 处理这类问题的关键是要找出线性变换的公共特征向量, 然后使用归纳法.

(2) 同时正交标准化 对实正规矩阵 $A$ 和 $B$ , 何时存在正交矩阵 $P$ , 使得 ${P}^{\prime }{AP}$ 和 $P^{\prime}BP$ 都是正交相似标准型. 例9.125回答了这个问题, 例9.126将这一结论推广到多个矩阵或线性变换的情形. 因为实矩阵未必有实特征值和实特征向量, 所以我们采用实与复之间相互转换的方法来解决这个问题. 这也是解决实矩阵或实空间问题的一个常用方法, 在 §9.11 实正规算子和实正规矩阵的有关讨论中经常用到它.

例 9.123 设 $\varphi, \psi$ 是 n 维欧氏空间（酉空间）V 上的两个自伴随算子（正规算子），求证：V 有一组由 $\varphi, \psi$ 的公共特征向量构成的标准正交基的充要条件是 $\varphi\psi = \psi\varphi$ .

证明 先证必要性. 因为 $\varphi$ 和 $\psi$ 在由它们的公共特征向量构成的标准正交基下的表示矩阵都是对角矩阵, 并且对角矩阵乘法可交换, 所以 $\varphi\psi = \psi\varphi$ .

再证充分性. 对维数 $n$ 进行归纳. 当 $n = 1$ 时结论显然成立. 假设对 $n - 1$ 维内积空间结论成立, 现考虑 $n$ 维内积空间的情形. 因为 $\varphi, \psi$ 是欧氏空间 (酉空间) 上乘法可交换的自伴随算子 (正规算子), 并且它们的特征值都是实数 (复数), 故由例 6.38 可知, $\varphi, \psi$ 至少有一个公共的单位特征向量 $e_1$ . 由例 9.28 可知, $e_1$ 也是 $\varphi^*, \psi^*$ 的特征向量, 再由例 9.26 可知, $L(e_1)^\perp$ 是 $\varphi, \psi$ 和 $\varphi^*, \psi^*$ 的不变子空间, 从而 $\varphi, \psi$ 限制在 $L(e_1)^\perp$ 上仍为乘法可交换的自伴随算子 (正规算子). 由归纳假设, $n - 1$ 维子空间 $L(e_1)^\perp$ 有一组由 $\varphi, \psi$ 的公共特征向量构成的标准正交基 $e_2, \cdots, e_n$ , 于是 $V$ 有一组由 $\varphi, \psi$ 的公共特征向量构成的标准正交基 $e_1, e_2, \cdots, e_n$ . □

注 例 9.123 还可以有以下两种证法: 或者仿照例 6.41 的证明思路进行讨论 (此时全空间等于特征子空间的正交直和), 或者直接利用例 6.41 的结论得到由 $\varphi, \psi$ 的公共特征向量构成的一组基, 再用 Gram-Schmidt 方法得到要求的标准正交基. 例 9.123 的代数版本是: $n$ 阶实对称矩阵 (复正规矩阵) $A, B$ 同时正交 (酉) 相似于对角矩阵的充要条件是 $AB = BA$ . 下面的例题是例 9.123 关于个数的推广.

例 9.124 设 $A_{1}, A_{2}, \cdots, A_{m}$ 是 m 个实对称矩阵 (复正规矩阵) 且两两乘法可交换, 求证: 存在正交矩阵 (酉矩阵) P, 使得 $P^{\prime}A_{i}P(\overline{P}^{\prime}A_{i}P)$ 都是对角矩阵.

证明 将 $A_{i}$ 看成是 $n$ 维列向量空间 (取标准内积) 上的线性变换, 对维数 $n$ 用数学归纳法, 证明存在一组由诸 $A_{i}$ 的公共特征向量组成的标准正交基. 当 $n = 1$ 时结论显然成立, 假设对 $n - 1$ 维空间结论成立, 我们用例 9.123 同样的方法来处理 $n$ 维空间的情形. 由例 6.42 可知, 诸 $A_{i}$ 至少有一个公共的单位特征向量 $e_{1}$ , 这也是诸 $A_{i}^{\prime}$ 的公共特征向量, 于是 $L(e_{1})^{\perp}$ 是诸 $A_{i}, A_{i}^{\prime}$ 的 $n - 1$ 维不变子空间. 将 $A_{i}$ 限制在 $L(e_{1})^{\perp}$ 上, 由归纳假设, $L(e_{1})^{\perp}$ 有一组由诸 $A_{i}$ 的公共特征向量组成的标准正交基 $e_{2}, \cdots, e_{n}$ , 因此 $e_{1}, e_{2}, \cdots, e_{n}$ 就是要求的标准正交基. $\square$ 

例 9.125 设 A, B 是两个 n 阶实正规矩阵且 AB = BA, 求证: 存在正交矩阵 P, 使得 $P'AP$ 和 $P'BP$ 同时为正交相似标准型.

证明 同上可将 $A, B$ 看成是 $n$ 维列向量空间（取标准内积）上的线性变换。对维数 $n$ 进行归纳。当 $n = 0$ 时表示归纳过程已经结束，当 $n = 1$ 时结论显然成立。假设对维数小于 $n$ 的空间结论成立，现考虑 $n$ 维空间的情形。因为 $AB = BA$ ，所以 $A, B$ 有公共的特征向量，但未必是实向量。如果是实向量，可设它的长度为 1，记之为 $e_1$ 。由于 $A, B$ 都是正规算子，故由例 9.28 可知， $e_1$ 也是 $A', B'$ 的特征向量，从而由例 9.26 可知， $L(e_1)^\perp$ 是 $A, B$ 的不变子空间，并且线性变换 $A, B$ 限制在 $L(e_1)^\perp$ 上仍为乘法可交换的正规算子，从而由归纳假设即得结论。因此我们只需讨论复特征向量的情形。设这个公共的特征向量为 $\alpha = u + vi$ ，其中 $u, v$ 都是实向量，再设

$$
\boldsymbol {A} (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a _ {1} + b _ {1} \mathrm{i}) (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}), \quad \boldsymbol {B} (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}) = (a _ {2} + b _ {2} \mathrm{i}) (\boldsymbol {u} + \boldsymbol {v} \mathrm{i}).
$$

由例 9.86 的证明过程及其结论, 我们可得

$$
\boldsymbol {A} \boldsymbol {u} = a _ {1} \boldsymbol {u} - b _ {1} \boldsymbol {v}, \boldsymbol {A} \boldsymbol {v} = b _ {1} \boldsymbol {u} + a _ {1} \boldsymbol {v}, \boldsymbol {A} ^ {\prime} \boldsymbol {u} = a _ {1} \boldsymbol {u} + b _ {1} \boldsymbol {v}, \boldsymbol {A} ^ {\prime} \boldsymbol {v} = - b _ {1} \boldsymbol {u} + a _ {1} \boldsymbol {v};
$$

$$
\boldsymbol {B} \boldsymbol {u} = a _ {2} \boldsymbol {u} - b _ {2} \boldsymbol {v}, \boldsymbol {B} \boldsymbol {v} = b _ {2} \boldsymbol {u} + a _ {2} \boldsymbol {v}, \boldsymbol {B} ^ {\prime} \boldsymbol {u} = a _ {2} \boldsymbol {u} + b _ {2} \boldsymbol {v}, \boldsymbol {B} ^ {\prime} \boldsymbol {v} = - b _ {2} \boldsymbol {u} + a _ {2} \boldsymbol {v};
$$

并且 $\| \pmb{u}\| = \| \pmb{v}\|$ , $(\pmb {u},\pmb {v}) = 0$ . 不妨假设 $\pmb {u},\pmb{v}$ 是单位向量, 于是在二维子空间 $L(\pmb {u},\pmb {v})$ 上, 线性变换 $\pmb{A},\pmb{B}$ 在标准正交基 $\pmb {u},\pmb {v}$ 下的表示矩阵分别为

$$
\left( \begin{array}{c c} a _ {1} & b _ {1} \\ - b _ {1} & a _ {1} \end{array} \right), \quad \left( \begin{array}{c c} a _ {2} & b _ {2} \\ - b _ {2} & a _ {2} \end{array} \right).
$$

设 $W = L(u, v)^{\perp}$ ，因为 $L(u, v)$ 也是 $A', B'$ 的不变子空间，故由例 9.26 可知，W 是 A, B 的不变子空间，并且线性变换 A, B 限制在 W 上仍为乘法可交换的正规算子。由归纳假设，存在 W 的一组标准正交基 $e_{3}, \cdots, e_{n}$ ，使得 A, B 在这组基下的表示矩阵同时为正交相似标准型。令 $e_{1} = u, e_{2} = v$ ，则 A, B 在标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 下的表示矩阵同时为正交相似标准型。☐

注 例 9.125 的几何版本是: 设 $\varphi, \psi$ 是 $n$ 维欧氏空间 $V$ 上两个乘法可交换的正规算子, 则存在 $V$ 的一组标准正交基, 使得 $\varphi, \psi$ 在这组基下的表示矩阵同时为正交相似标准型. 我们也可以沿着教材 [1] 中建立实正规算子正交相似标准型理论的主线, 给出上述结论的纯几何证明. 下面的例题是例 9.125 关于个数的推广, 其证明与例 9.125 的证明完全类似. 上述两个证明细节留给读者自行完成.

例 9.126 设 $A_{1}, A_{2}, \cdots, A_{m}$ 是 m 个实正规矩阵且两两乘法可交换, 求证: 存在正交矩阵 P, 使得 $P^{\prime}A_{i}P$ 同时为正交相似标准型. □

下面我们先来看同时正交对角化的几个应用.

例 9.67 设 A, B 都是 n 阶正定实对称矩阵, 求证: AB 是正定实对称矩阵的充要条件是 AB = BA.

证法 3 必要性显然, 下证充分性. 由于 A, B 都是正定实对称矩阵且 AB = BA, 故由例 9.124 可知, 存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i},\mu_{i}$ 都是正实数. 因此 $P^{\prime}ABP=\mathrm{diag}\{\lambda_{1}\mu_{1},\lambda_{2}\mu_{2},\cdots,\lambda_{n}\mu_{n}\}$ ，从而 AB 是正定实对称矩阵. □

例 9.68 设 A, B 都是 n 阶正定实对称矩阵, 满足 AB = BA, 求证: A - B 是正定阵的充要条件是 $A^{2} - B^{2}$ 是正定阵.

证法 2 由于 A, B 都是正定实对称矩阵且 AB = BA, 故由例 9.124 可知, 存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i},\mu_{i}$ 都是正实数．若 $\mathbf{A} - \mathbf{B}$ 是正定阵，则 $P^{\prime}(A - B)P$ 也是正定阵，故 $\lambda_{i} > \mu_{i}(1\leq i\leq n)$ ，于是对任意的正有理数 $k$ ，有

$$
\boldsymbol {P} ^ {\prime} \left(\boldsymbol {A} ^ {k} - \boldsymbol {B} ^ {k}\right) \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1} ^ {k} - \mu_ {1} ^ {k}, \lambda_ {2} ^ {k} - \mu_ {2} ^ {k}, \dots , \lambda_ {n} ^ {k} - \mu_ {n} ^ {k} \right\},
$$

从而 $A^{k}-B^{k}$ 也是正定阵. 由上述讨论即得本题结论. □

例 9.70 设 A, B 是 n 阶实对称矩阵, 满足 $AB + BA = O$ , 证明: 若 A 半正定, 则存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \dots , \lambda_ {r}, 0, \dots , 0 \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{0, \dots , 0, \mu_ {r + 1}, \dots , \mu_ {n} \right\}.
$$

证法 2 注意到 $(AB)' = B'A' = BA = -AB$ ，即 AB 是实反对称矩阵。我们断言 AB = O。用反证法，若 AB 为非零实反对称矩阵，则存在 n 阶正交矩阵 P，使得

$$
\boldsymbol {P} ^ {\prime} (\boldsymbol {A B}) \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

其中 $b_{i} \neq 0 (1 \leq i \leq r), r \geq 1$ . 设 $\pmb{P}$ 的前两个列向量为 $\alpha_{1} \neq 0, \alpha_{2} \neq 0$ , 则有

$$
A B \alpha_ {1} = - b _ {1} \alpha_ {2}, A B \alpha_ {2} = b _ {1} \alpha_ {1}.
$$

由 A 的半正定性可得

$$
\alpha_ {1} ^ {\prime} B A B \alpha_ {1} = - b _ {1} \alpha_ {1} ^ {\prime} B \alpha_ {2} \geq 0, \quad \alpha_ {2} ^ {\prime} B A B \alpha_ {2} = b _ {1} \alpha_ {2} ^ {\prime} B \alpha_ {1} = b _ {1} \alpha_ {1} ^ {\prime} B \alpha_ {2} \geq 0,
$$

从而有 $\alpha_{1}^{\prime} B A B \alpha_{1} = 0$ . 由例8.71可知 $A B \alpha_{1} = 0$ , 于是 $b_{1} \alpha_{2} = 0$ , 这与 $b_{1} \neq 0$ , $\alpha_{2} \neq 0$ 矛盾. 因此 $A B = B A = O$ , 故由例9.124可知, $A, B$ 可同时正交对角化. 再由 $A B = O$ 即得要证的结论.

证法3 由 $AB = -BA$ 可得 $A^2 B = -ABA = BA^2$ , 即 $A^2$ 与 $B$ 乘法可交换. 由例9.124可知, 存在 $n$ 阶正交矩阵 $\pmb{P}$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} ^ {2} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1} ^ {2}, \dots , \lambda_ {r} ^ {2}, 0, \dots , 0 \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \operatorname{diag} \left\{\mu_ {1}, \dots , \mu_ {r}, \mu_ {r + 1}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i} > 0(1\leq i\leq r),r = \mathrm{r}(A)$ .注意到

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} ^ {2} \boldsymbol {P} = (\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P}) ^ {2} = \left(\operatorname{diag} \{\lambda_ {1}, \dots , \lambda_ {r}, 0, \dots , 0 \}\right) ^ {2},
$$

由于 A 是半正定阵, 故 $P^{\prime}AP$ 与 $\mathrm{diag}\{\lambda_{1},\cdots,\lambda_{r},0,\cdots,0\}$ 都是 $P^{\prime}A^{2}P$ 的算术平方根. 由半正定阵算术平方根的唯一性 (即例 9.61) 可得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \dots , \lambda_ {r}, 0, \dots , 0 \right\}.
$$

将上述诸式代入 $AB + BA = O$ 中可得 $\mu_{1} = \cdots = \mu_{r} = 0$ ，结论得证。□

当我们遇到复特征值和复特征向量时, 我们可以把实矩阵看成是复矩阵来处理,这是我们常用的技巧之一. 因此, 我们可以把实对称矩阵、实反对称矩阵和正交矩阵等实正规矩阵自然地看成是复正规矩阵来处理, 这样便可应用同时酉对角化的技巧.

例 8.44 设 A 是 n 阶可逆实对称矩阵, S 是 n 阶实反对称矩阵且 AS = SA, 求证: $A + S$ 是可逆矩阵.

证法 3 A 是实对称矩阵, 可把它看成是 Hermite 矩阵, S 是实反对称矩阵, 可把它看成是斜 Hermite 矩阵. 因为 AS = SA, 故由例 9.124 可知, 存在酉矩阵 U, 使得

$$
\overline {{{U}}} ^ {\prime} \boldsymbol {A} \boldsymbol {U} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \overline {{{U}}} ^ {\prime} \boldsymbol {S} \boldsymbol {U} = \operatorname{diag} \left\{\mu_ {1} \mathrm{i}, \mu_ {2} \mathrm{i}, \dots , \mu_ {n} \mathrm{i} \right\},
$$

其中 $\lambda_{i} \neq 0, \mu_{i}$ 都是实数, 于是

$$
\overline {{{U}}} ^ {\prime} (\boldsymbol {A} + \boldsymbol {S}) \boldsymbol {U} = \operatorname{diag} \left\{\lambda_ {1} + \mu_ {1} \mathrm{i}, \lambda_ {2} + \mu_ {2} \mathrm{i}, \dots , \lambda_ {n} + \mu_ {n} \mathrm{i} \right\},
$$

即 $\lambda_{i} + \mu_{i}\mathrm{i}$ 是 $A + S$ 的全体特征值. 因为实矩阵的虚特征值成对, 故不妨设 $\lambda_{2i-1} + \mu_{2i-1}\mathrm{i}$ 与 $\lambda_{2i} + \mu_{2i}\mathrm{i}(1 \leq i \leq r)$ 互为共轭虚特征值, 而 $\mu_{j} = 0 (2r + 1 \leq j \leq n)$ , 从而

$$
| \boldsymbol {A} + \boldsymbol {S} | = | \overline {{{\boldsymbol {U}}}} ^ {\prime} (\boldsymbol {A} + \boldsymbol {S}) \boldsymbol {U} | = \left(\lambda_ {1} ^ {2} + \mu_ {1} ^ {2}\right) \dots \left(\lambda_ {2 r - 1} ^ {2} + \mu_ {2 r - 1} ^ {2}\right) \lambda_ {2 r + 1} \dots \lambda_ {n} \neq 0.
$$

下面我们来看同时正交标准化的几个应用.

例 8.44 的证法 4 因为 A 为实对称矩阵, S 为实反对称矩阵且 AS = SA, 故由例 9.125 可知, 存在正交矩阵 P, 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {S} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

其中 $b_{1},\cdots,b_{r}$ 是非零实数. 由 A, S 乘法可交换可知 $P^{\prime}AP, P^{\prime}SP$ 乘法可交换, 从而可得 $\lambda_{1}=\lambda_{2},\cdots,\lambda_{2r-1}=\lambda_{2r}$ . 注意到 A 可逆, 故 $\lambda_{i}\neq0(1\leq i\leq n)$ , 于是

$$
\boldsymbol {P} ^ {\prime} (\boldsymbol {A} + \boldsymbol {S}) \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} \lambda_ {1} & b _ {1} \\ - b _ {1} & \lambda_ {1} \end{array} \right), \dots , \left( \begin{array}{c c} \lambda_ {2 r - 1} & b _ {r} \\ - b _ {r} & \lambda_ {2 r - 1} \end{array} \right), \lambda_ {2 r + 1}, \dots , \lambda_ {n} \right\},
$$

从而

$$
| \boldsymbol {A} + \boldsymbol {S} | = | \boldsymbol {P} ^ {\prime} (\boldsymbol {A} + \boldsymbol {S}) \boldsymbol {P} | = \left(\lambda_ {1} ^ {2} + b _ {1} ^ {2}\right) \dots \left(\lambda_ {2 r - 1} ^ {2} + b _ {r} ^ {2}\right) \lambda_ {2 r + 1} \dots \lambda_ {n} \neq 0.
$$

例 9.71 设 A 为 n 阶半正定实对称矩阵, S 为 n 阶实反对称矩阵, 满足 $AS + SA = O$ . 证明: $|A + S| > 0$ 的充要条件是 $\mathrm{r}(A) + \mathrm{r}(S) = n$ .

证法 2 注意到 $(AS)' = S'A' = -SA = AS$ , 即 $AS$ 是实对称矩阵. 我们断言 $AS = O$ . 用反证法, 若 $AS$ 是非零实对称矩阵, 则它必有非零的实特征值 $\lambda_0$ 及其实特征向量 $\alpha$ , 满足 $AS\alpha = \lambda_0\alpha$ . 此式两边左乘 $(S\alpha)'$ , 并由例 2.5 可得 $(S\alpha)'A(S\alpha) = -\lambda_0\alpha'S\alpha = 0$ . 再由例 8.71 可知 $A(S\alpha) = 0$ , 于是 $\lambda_0\alpha = 0$ , 这与 $\lambda_0 \neq 0, \alpha \neq 0$ 矛盾. 因此 $AS = SA = O$ , 故由例 9.125 可知, 存在正交矩阵 $P$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\},
$$

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {S} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

其中 $\lambda_{i}\geq0(1\leq i\leq n)$ ， $b_{1},\cdots,b_{r}$ 是非零实数， $r(S)=2r$ 。由 AS=O 可得 $\lambda_{i}=0(1\leq i\leq2r)$ ，因此

$$
\left| \boldsymbol {A} + \boldsymbol {S} \right| = \left| \boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} + \boldsymbol {P} ^ {\prime} \boldsymbol {S} \boldsymbol {P} \right| = b _ {1} ^ {2} \dots b _ {r} ^ {2} \lambda_ {2 r + 1} \dots \lambda_ {n} > 0
$$

当且仅当 $\lambda_{j} > 0 (2r + 1 \leq j \leq n)$ , 这也当且仅当 $\mathrm{r}(A) = n - 2r$ , 即当且仅当 $\mathrm{r}(A) + \mathrm{r}(S) = n$ . 在得到 $AS = SA = O$ 之后, 也可用同时酉对角化的技巧来处理, 这与例8.44的证法3完全类似, 细节留给读者补充完整.

证法3 由 $AS = -SA$ 可得 $A^2 S = -ASA = SA^2$ , 即 $A^2$ 与 $S$ 乘法可交换. 由例9.125可知, 存在 $n$ 阶正交矩阵 $\pmb{P}$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} ^ {2} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1} ^ {2}, \lambda_ {2} ^ {2}, \dots , \lambda_ {n} ^ {2} \right\},
$$

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {S} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

其中 $\lambda_{i}\geq0(1\leq i\leq n),b_{1},\cdots,b_{r}$ 是非零实数, $\mathrm{r}(S)=2r$ . 注意到

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} ^ {2} \boldsymbol {P} = (\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P}) ^ {2} = \left(\operatorname{diag} \{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \}\right) ^ {2},
$$

由于 A 是半正定阵, 故 $P^{\prime}AP$ 与 $\mathrm{diag}\{\lambda_{1},\lambda_{2},\cdots,\lambda_{n}\}$ 都是 $P^{\prime}A^{2}P$ 的算术平方根.
由半正定阵算术平方根的唯一性 (即例 9.61) 可得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}.
$$

将上述诸式代入 $AS + SA = O$ 中可得 $\lambda_{i} = 0(1\leq i\leq 2r)$ ，剩余讨论同证法2.□

在例 9.96 和例 9.107 中, 满足条件 $\omega \psi = \psi \omega$ 的极分解 $\varphi = \omega \psi$ 虽然不一定唯一 (比如当正规算子 $\varphi$ 不可逆时), 但由例 9.124 和例 9.125 可知, $\varphi$ 的极分解一定是形如必要性证明中那样的构造. 我们把具体的细节留给读者自己验证.

利用例 9.124, 还可以把同时合同对角化 (即例 9.75) 推广到多个矩阵的情形.

例 9.127 设 $A_{1}, A_{2}, \cdots, A_{m}$ 为 n 阶实对称矩阵, 其中 $A_{1}$ 是正定阵, 且对任意的 $2 \leq i < j \leq m$ , $A_{i}A_{1}^{-1}A_{j}$ 都是对称矩阵. 求证: 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} _ {1} \boldsymbol {C} = \boldsymbol {I} _ {n}, \quad \boldsymbol {C} ^ {\prime} \boldsymbol {A} _ {i} \boldsymbol {C} = \operatorname{diag} \left\{\lambda_ {i 1}, \lambda_ {i 2}, \dots , \lambda_ {i n} \right\}, 2 \leq i \leq m,
$$

其中 $\{\lambda_{i1},\lambda_{i2},\cdots,\lambda_{in}\}$ 是 $A_{1}^{-1}A_{i}$ 的全体特征值.

证明 由 $A_{1}$ 正定可知 $A_{1}^{-\frac{1}{2}} A_{1} A_{1}^{-\frac{1}{2}} = I_{n}$ , 由 $A_{i} A_{1}^{-1} A_{j}$ 对称可知 $A_{i} A_{1}^{-1} A_{j} = A_{j} A_{1}^{-1} A_{i}$ , 从而 $(A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}})(A_{1}^{-\frac{1}{2}} A_{j} A_{1}^{-\frac{1}{2}}) = (A_{1}^{-\frac{1}{2}} A_{j} A_{1}^{-\frac{1}{2}})(A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}})$ , 即实对称矩阵 $A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}} (2 \leq i \leq m)$ 两两乘法可交换. 由例 9.124 可知, 存在正交矩阵 $P$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} _ {1} ^ {- \frac {1}{2}} \boldsymbol {A} _ {i} \boldsymbol {A} _ {1} ^ {- \frac {1}{2}} \boldsymbol {P} = \operatorname{diag} \left\{\lambda_ {i 1}, \lambda_ {i 2}, \dots , \lambda_ {i n} \right\}, 2 \leq i \leq m,
$$

此时 $P^{\prime}A_{1}^{-\frac{1}{2}}A_{1}A_{1}^{-\frac{1}{2}}P=I_{n}$ ，故只要令 $C=A_{1}^{-\frac{1}{2}}P$ 即得结论。由特征值的降阶公式可知， $\{\lambda_{i1},\lambda_{i2},\cdots,\lambda_{in}\}$ 也是 $(A_{1}^{-\frac{1}{2}}P)(P^{\prime}A_{1}^{-\frac{1}{2}}A_{i})=A_{1}^{-1}A_{i}$ 的全体特征值。☐

例 9.128 设 A 为 n 阶正定实对称矩阵, B, C 为 n 阶半正定实对称矩阵, 使得 $BA^{-1}C$ 是对称矩阵. 求证:

$$
| \boldsymbol {A} | \cdot | \boldsymbol {A} + \boldsymbol {B} + \boldsymbol {C} | \leq | \boldsymbol {A} + \boldsymbol {B} | \cdot | \boldsymbol {A} + \boldsymbol {C} |, \tag {9.19}
$$

且等号成立的充要条件是 $BA^{-1}C = O$ .

证明 由例 9.127 可知, 存在可逆矩阵 P, 使得 $P^{\prime}AP = I_{n}$ ,

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \boldsymbol {\Lambda} _ {\boldsymbol {B}} = \operatorname{diag} \left\{\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {n} \right\}, \quad \boldsymbol {P} ^ {\prime} \boldsymbol {C} \boldsymbol {P} = \boldsymbol {\Lambda} _ {\boldsymbol {C}} = \operatorname{diag} \left\{\mu_ {1}, \mu_ {2}, \dots , \mu_ {n} \right\},
$$

其中 $\lambda_{i}\geq0,\mu_{i}\geq0(1\leq i\leq n)$ . 将 (9.19) 式两边左乘 $|P^{\prime}|^{2}$ ，右乘 $|P|^{2}$ ，故只要证明

$$
\left| I _ {n} + \Lambda_ {B} + \Lambda_ {C} \right| \leq \left| I _ {n} + \Lambda_ {B} \right| \cdot \left| I _ {n} + \Lambda_ {C} \right|
$$

即可, 而这由 $1 + \lambda_{i} + \mu_{i} \leq (1 + \lambda_{i})(1 + \mu_{i}) (1 \leq i \leq n)$ 即得. (9.19) 式的等号成立当且仅当 $\lambda_{i}\mu_{i} = 0 (1 \leq i \leq n)$ , 即当且仅当 $O = \Lambda_{B}\Lambda_{C} = (P^{\prime}BP)(P^{\prime}CP) = P^{\prime}(BA^{-1}C)P$ , 这也当且仅当 $BA^{-1}C = O$ . □

利用例 9.126, 还可以把同时合同标准化 (即例 9.114) 推广到多个矩阵的情形.

例 9.129 设 $A_{1}$ 为 n 阶正定实对称矩阵, $A_{2}, \cdots, A_{m}$ 是 n 阶实反对称矩阵, 且对任意的 $2 \leq i < j \leq m$ , $A_{i}A_{1}^{-1}A_{j}$ 都是对称矩阵. 求证: 存在可逆矩阵 C, 使得

$$
\boldsymbol {C} ^ {\prime} \boldsymbol {A} _ {1} \boldsymbol {C} = \boldsymbol {I} _ {n}, \boldsymbol {C} ^ {\prime} \boldsymbol {A} _ {i} \boldsymbol {C} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {i 1} \\ - b _ {i 1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {i r} \\ - b _ {i r} & 0 \end{array} \right), 0, \dots , 0 \right\}, 2 \leq i \leq m.
$$

证明 由 $A_{1}$ 正定可知 $A_{1}^{-\frac{1}{2}} A_{1} A_{1}^{-\frac{1}{2}} = I_{n}$ , 由 $A_{i} A_{1}^{-1} A_{j}$ 对称可知 $A_{i} A_{1}^{-1} A_{j} = A_{j} A_{1}^{-1} A_{i}$ , 从而 $(A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}})(A_{1}^{-\frac{1}{2}} A_{j} A_{1}^{-\frac{1}{2}}) = (A_{1}^{-\frac{1}{2}} A_{j} A_{1}^{-\frac{1}{2}})(A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}})$ , 即实反对称矩阵 $A_{1}^{-\frac{1}{2}} A_{i} A_{1}^{-\frac{1}{2}} (2 \leq i \leq m)$ 两两乘法可交换. 由例9.126可知, 存在正交矩阵 $P$ , 使得

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {A} _ {1} ^ {- \frac {1}{2}} \boldsymbol {A} _ {i} \boldsymbol {A} _ {1} ^ {- \frac {1}{2}} \boldsymbol {P} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {i 1} \\ - b _ {i 1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {i r} \\ - b _ {i r} & 0 \end{array} \right), 0, \dots , 0 \right\}, 2 \leq i \leq m,
$$

此时 $P^{\prime}A_{1}^{-\frac{1}{2}}A_{1}A_{1}^{-\frac{1}{2}}P = I_{n}$ ，故只要令 $C = A_1^{-\frac{1}{2}}P$ 即得结论. □

例 9.130 设 A 为 n 阶正定实对称矩阵, B, C 为 n 阶实反对称矩阵, 使得 $BA^{-1}C$ 是对称矩阵. 求证:

$$
| \boldsymbol {A} | \cdot | \boldsymbol {B} + \boldsymbol {C} | \leq | \boldsymbol {A} + \boldsymbol {B} | \cdot | \boldsymbol {A} + \boldsymbol {C} |, \tag {9.20}
$$

且等号成立的充要条件是 $BA^{-1}C = -A$ .

证明 由例 9.129 可知, 存在可逆矩阵 P, 使得 $P^{\prime}AP = I_{n}$ ,

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {B} \boldsymbol {P} = \boldsymbol {\Lambda} _ {\boldsymbol {B}} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & b _ {1} \\ - b _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & b _ {r} \\ - b _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\},
$$

$$
\boldsymbol {P} ^ {\prime} \boldsymbol {C} \boldsymbol {P} = \boldsymbol {\Lambda} _ {\boldsymbol {C}} = \operatorname{diag} \left\{\left( \begin{array}{c c} 0 & c _ {1} \\ - c _ {1} & 0 \end{array} \right), \dots , \left( \begin{array}{c c} 0 & c _ {r} \\ - c _ {r} & 0 \end{array} \right), 0, \dots , 0 \right\}.
$$

将 (9.20) 式两边左乘 $|\mathbf{P}'|^2$ , 右乘 $|\mathbf{P}|^2$ , 故只要证明

$$
\left| \boldsymbol {\Lambda} _ {B} + \boldsymbol {\Lambda} _ {C} \right| \leq \left| \boldsymbol {I} _ {n} + \boldsymbol {\Lambda} _ {B} \right| \cdot \left| \boldsymbol {I} _ {n} + \boldsymbol {\Lambda} _ {C} \right|
$$

即可, 而这由 $(b_{i} + c_{i})^{2} \leq (1 + b_{i}^{2})(1 + c_{i}^{2}) (1 \leq i \leq r)$ 即得. (9.20) 式的等号成立当且仅当 $n = 2r$ 且 $b_{i}c_{i} = 1 (1 \leq i \leq r)$ , 即当且仅当 $-I_{n} = \Lambda_{B}\Lambda_{C} = (P^{\prime}BP)(P^{\prime}CP) = P^{\prime}(BA^{-1}C)P$ , 这也当且仅当 $BA^{-1}C = -(PP')^{-1} = -A$ . □

## § 9.14 谱分解、极分解、奇异值分解及其应用

矩阵分解是矩阵理论中一个重要的研究方向, 具有广泛的应用. 前面我们已经介绍过矩阵的满秩分解、Cholesky 分解和 $QR$ 分解等内容, 本节将分成 4 个部分, 分别介绍谱分解、极分解、奇异值分解以及广义逆等内容.

#### 1. 谱分解及其应用

设 $\varphi$ 是欧氏空间 V 上的自伴随算子或酉空间 V 上的正规算子, $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{k}$ 是 $\varphi$ 的全体不同特征值, $V_{1}, V_{2}, \cdots, V_{k}$ 是对应的特征子空间, 则

$$
V = V _ {1} \perp V _ {2} \perp \dots \perp V _ {k}. \tag {9.21}
$$

设 $E_{i}$ 是从 V 到 $V_{i}$ 上的正交投影算子，则 $\varphi = \lambda_{1}E_{1} + \lambda_{2}E_{2} + \cdots + \lambda_{k}E_{k}$ 称为 $\varphi$ 的谱分解。容易验证谱分解一定是存在并且唯一的。其实，谱分解等价于欧氏空间中自伴随算子（实对称矩阵）的正交相似标准型，以及酉空间中正规算子（复正规矩阵）的酉相似标准型，因此上述两个标准型分解有时也称为对应算子或矩阵的谱分解。

谱分解有着广泛的用途. 例如在 §9.10, 我们利用谱分解证明了复正规算子的 3 个充要条件; 在教材 [1] 中, 我们利用谱分解证明了复正规算子是自伴随算子、正定或半正定自伴随算子、酉算子关于特征值的判定准则, 利用谱分解的存在唯一性证明了半正定自伴随算子的算术平方根的存在唯一性, 进一步给出了线性算子的极分解.

事实上, (9.21) 式是欧氏空间中自伴随算子和酉空间中正规算子的判定准则, 即若内积空间 $V$ 上的线性算子 $\varphi$ 的特征值都在基域中, 则 $\varphi$ 为实自伴随算子或复正规算子的充要条件是全空间等于特征子空间的正交直和. 这一判定准则的两个典型应用是例 9.93 和例 9.131.

例 9.131 设 $\varphi$ 是 n 维欧氏空间 V 上的幂等线性变换 (即 $\varphi^{2} = \varphi$ ), 若对 V 中任一向量 $\alpha$ , 均有 $\|\varphi(\alpha)\| \leq \|\alpha\|$ , 求证: $\varphi$ 是自伴随算子.

证明 注意到 $\varphi$ 是幂等变换, 即适合多项式 $x^{2} - x$ , 故 $\varphi$ 的极小多项式无重根, 从而可对角化. 设 $\varphi$ 的特征值 $i$ 对应的特征子空间为 $V_{i} (i = 0,1)$ , 则 $V = V_{0} \oplus V_{1}$ . 任取 $v_{0} \in V_{0}, v_{1} \in V_{1}$ , 令 $v = v_{0} + t v_{1}$ , 其中 $t$ 为实参数, 则 $\varphi(v) = t v_{1}$ . 由 $\| \varphi(v) \| \leq \| v\|$ 可得

$$
t ^ {2} \| \boldsymbol {v} _ {1} \| ^ {2} \leq t ^ {2} \| \boldsymbol {v} _ {1} \| ^ {2} + 2 t (\boldsymbol {v} _ {0}, \boldsymbol {v} _ {1}) + \| \boldsymbol {v} _ {0} \| ^ {2},
$$

于是 $2t(\pmb{v}_0, \pmb{v}_1) + \| \pmb{v}_0\|^2 \geq 0$ 对任意的 $t \in \mathbb{R}$ 成立, 从而只能是 $(\pmb{v}_0, \pmb{v}_1) = 0$ , 故 $V_0$ 与 $V_1$ 正交. 因此 $V = V_0 \perp V_1$ , 故 $\varphi$ 是自伴随算子. $\square$ 

下面是利用谱分解唯一性的一个典型例题.

例 9.132 设 $\varphi, \psi$ 为 n 维酉空间 V 上的正规算子, 它们都满足不同特征值的模长互不相同. 证明: $\|\varphi(v)\| = \|\psi(v)\|$ 对任意的 $v \in V$ 成立的充要条件是存在谱分解:

$$
\varphi = \lambda_ {1} \boldsymbol {E} _ {1} + \dots + \lambda_ {k} \boldsymbol {E} _ {k}, \quad \psi = \mu_ {1} \boldsymbol {E} _ {1} + \dots + \mu_ {k} \boldsymbol {E} _ {k},
$$

其中 $\lambda_{1},\cdots,\lambda_{k}$ 和 $\mu_{1},\cdots,\mu_{k}$ 分别是 $\varphi$ 和 $\psi$ 的全体不同特征值, $E_{i}$ 是对应的正交投影算子, 并且 $|\lambda_{i}|=|\mu_{i}|(1\leq i\leq k)$ .

证明 先证充分性. 对任意的 $v \in V$ ，由谱分解的性质可得

$$
\begin{array}{l} \left\| \varphi (\boldsymbol {v}) \right\| ^ {2} = \left| \lambda_ {1} \right| ^ {2} \left\| \boldsymbol {E} _ {1} (\boldsymbol {v}) \right\| ^ {2} + \dots + \left| \lambda_ {k} \right| ^ {2} \left\| \boldsymbol {E} _ {k} (\boldsymbol {v}) \right\| ^ {2}, \\ \left\| \boldsymbol {\psi} (\boldsymbol {v}) \right\| ^ {2} = \left| \mu_ {1} \right| ^ {2} \left\| \boldsymbol {E} _ {1} (\boldsymbol {v}) \right\| ^ {2} + \dots + \left| \mu_ {k} \right| ^ {2} \left\| \boldsymbol {E} _ {k} (\boldsymbol {v}) \right\| ^ {2}, \\ \end{array}
$$

于是 $\|\varphi(v)\|=\|\psi(v)\|$ 成立.

再证必要性. 注意到在酉空间 $V$ 中, 内积可用范数来表示, 即对任意的 $\pmb{u}, \pmb{v} \in V$ ,

$$
(\boldsymbol {u}, \boldsymbol {v}) = \frac {1}{4} \| \boldsymbol {u} + \boldsymbol {v} \| ^ {2} - \frac {1}{4} \| \boldsymbol {u} - \boldsymbol {v} \| ^ {2} + \frac {\mathrm{i}}{4} \| \boldsymbol {u} + \mathrm{i} \boldsymbol {v} \| ^ {2} - \frac {\mathrm{i}}{4} \| \boldsymbol {u} - \mathrm{i} \boldsymbol {v} \| ^ {2},
$$

故由 $\varphi,\psi$ 的线性可得

$$
\begin{array}{l} (\varphi (\boldsymbol {u}), \varphi (\boldsymbol {v})) = \frac {1}{4} \| \varphi (\boldsymbol {u} + \boldsymbol {v}) \| ^ {2} - \frac {1}{4} \| \varphi (\boldsymbol {u} - \boldsymbol {v}) \| ^ {2} + \frac {\mathrm{i}}{4} \| \varphi (\boldsymbol {u} + \mathrm{i} \boldsymbol {v}) \| ^ {2} - \frac {\mathrm{i}}{4} \| \varphi (\boldsymbol {u} - \mathrm{i} \boldsymbol {v}) \| ^ {2}, \\ (\boldsymbol {\psi} (\boldsymbol {u}), \boldsymbol {\psi} (\boldsymbol {v})) = \frac {1}{4} \| \boldsymbol {\psi} (\boldsymbol {u} + \boldsymbol {v}) \| ^ {2} - \frac {1}{4} \| \boldsymbol {\psi} (\boldsymbol {u} - \boldsymbol {v}) \| ^ {2} + \frac {\mathrm{i}}{4} \| \boldsymbol {\psi} (\boldsymbol {u} + \mathrm{i} \boldsymbol {v}) \| ^ {2} - \frac {\mathrm{i}}{4} \| \boldsymbol {\psi} (\boldsymbol {u} - \mathrm{i} \boldsymbol {v}) \| ^ {2}, \\ \end{array}
$$

因此 $(\varphi(u), \varphi(v)) = (\psi(u), \psi(v))$ ，从而 $(\varphi^{*}\varphi(u), v) = (\psi^{*}\psi(u), v)$ ，即 $(\varphi^{*}\varphi(u) - \psi^{*}\psi(u), v) = 0$ 对任意的 $u, v \in V$ 成立。对任意给定的 $u \in V$ ，在上式中令 $v = \varphi^{*}\varphi(u) - \psi^{*}\psi(u)$ ，由内积的正定性可得 $\varphi^{*}\varphi(u) = \psi^{*}\psi(u)$ ，又这一等式对任意的 $u \in V$ 成立，故可得 $\varphi^{*}\varphi = \psi^{*}\psi$ 。设正规算子 $\varphi, \psi$ 的谱分解分别为

$$
\varphi = \lambda_ {1} E _ {1} + \dots + \lambda_ {k} E _ {k}, \quad \psi = \mu_ {1} F _ {1} + \dots + \mu_ {l} F _ {l},
$$

其中 $\lambda_{1},\cdots,\lambda_{k}$ 是 $\varphi$ 的全体不同特征值, $E_{1},\cdots,E_{k}$ 是对应的正交投影算子; $\mu_{1},\cdots,\mu_{l}$ 是 $\psi$ 的全体不同特征值, $F_{1},\cdots,F_{l}$ 是对应的正交投影算子, 则 $\varphi^{*},\psi^{*}$ 的谱分解分别为

$$
\varphi^ {*} = \overline {{{{\lambda_ {1}}}}} E _ {1} + \dots + \overline {{{{\lambda_ {k}}}}} E _ {k}, \quad \psi^ {*} = \overline {{{{\mu_ {1}}}}} F _ {1} + \dots + \overline {{{{\mu_ {l}}}}} F _ {l},
$$

于是有

$$
\varphi^ {*} \varphi = | \lambda_ {1} | ^ {2} E _ {1} + \dots + | \lambda_ {k} | ^ {2} E _ {k} = | \mu_ {1} | ^ {2} F _ {1} + \dots + | \mu_ {l} | ^ {2} F _ {l} = \psi^ {*} \psi .
$$

因为 $|\lambda_i| (1 \leq i \leq k)$ 互不相同, $|\mu_j| (1 \leq j \leq l)$ 互不相同, 故上式是 $\varphi^* \varphi = \psi^* \psi$ 的两个谱分解. 由正规算子谱分解的唯一性可知 $k = l$ , 且在适当调整指标顺序后有 $|\lambda_i| = |\mu_i|$ , $E_i = F_i (1 \leq i \leq k)$ . $\square$ 

#### 2. 极分解及其应用

n 阶实 (复) 矩阵的极分解 $A = Q S = S_{1} Q$ ，其中 Q 是正交矩阵 (酉矩阵)， $S, S_{1}$ 是半正定实对称矩阵 (Hermite 矩阵)，是复数的极分解 $z = \rho (\cos \theta + i \sin \theta)$ 的推广。下面我们来看应用极分解的两道典型例题。

例 9.133 设 A 为 n 阶实矩阵, $A^{\prime}A$ 的全体特征值为 $\lambda_{1}^{2}, \lambda_{2}^{2}, \cdots, \lambda_{n}^{2}$ , 其中 $0 \leq \lambda_{i} \leq 1 (1 \leq i \leq n)$ . 证明:

$$
\left| \boldsymbol {I} _ {n} - \boldsymbol {A} \right| \geq (1 - \lambda_ {1}) (1 - \lambda_ {2}) \dots (1 - \lambda_ {n}).
$$

证明 设 A 的极分解为 A = QS，其中 Q 是正交矩阵，S 是半正定实对称矩阵，则 $A^{\prime}A = S^{2}$ ，从而 S 的全体特征值为 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，满足 $0 \leq \lambda_{i} \leq 1$ ，于是只要证明 $|I_{n} - QS| \geq (1 - \lambda_{1})(1 - \lambda_{2}) \cdots (1 - \lambda_{n})$ 即可。设 P 为正交矩阵，使得 $P^{\prime}SP = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ ，则 $|I_{n} - QS| = |I_{n} - (P^{\prime}QP)(P^{\prime}SP)|$ ，注意到 $P^{\prime}QP$ 仍为正交矩阵，故不妨从一开始就假设 S 是正交相似标准型 $\text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ 。下面分两种情况进行讨论。

若存在某个 $\lambda_{i} = 1$ , 则只要证明 $|I_{n} - QS| \geq 0$ 即可. 由例9.47可知, $QS$ 特征值的模长都小于等于1, 于是 $I_{n} - QS$ 特征值的实部都大于等于零. 注意到 $I_{n} - QS$ 的特征值或者是非负实数, 或者是共轭虚数, 故 $|I_{n} - QS| \geq 0$ 成立.

若所有的 $\lambda_{i}<1$ ，令 $T=I_{n}-S=\operatorname{diag}\{1-\lambda_{1},1-\lambda_{2},\cdots,1-\lambda_{n}\}$ ，则 T 正定且 $|T|=(1-\lambda_{1})(1-\lambda_{2})\cdots(1-\lambda_{n})$ 。再令 $R=T^{-1}=\operatorname{diag}\{\mu_{1},\mu_{2},\cdots,\mu_{n}\}$ ，其中 $\mu_{i}=\frac{1}{1-\lambda_{i}}\geq1$ ，这时只要证明 $|I_{n}-Q(I_{n}-T)|\geq|T|$ ，或等价地证明 $|R-Q(R-I_{n})|\geq1$ 即可。任取 $R-Q(R-I_{n})$ 的特征值 $\lambda\in C$ 以及对应的特征向量 $\xi\in C^{n}$ ，则 $(R-Q(R-I_{n}))\xi=\lambda\xi$ ，即 $(R-\lambda I_{n})\xi=Q(R-I_{n})\xi$ 。设 $\xi=(a_{1},a_{2},\cdots,a_{n})'$ ，则

$$
\overline {{{{\boldsymbol {\xi}}}}} ^ {\prime} (\boldsymbol {R} - \overline {{{{\lambda}}}} \boldsymbol {I} _ {n}) (\boldsymbol {R} - \lambda \boldsymbol {I} _ {n}) \boldsymbol {\xi} = \overline {{{{\boldsymbol {\xi}}}}} ^ {\prime} (\boldsymbol {R} - \boldsymbol {I} _ {n}) \boldsymbol {Q} ^ {\prime} \boldsymbol {Q} (\boldsymbol {R} - \boldsymbol {I} _ {n}) \boldsymbol {\xi} = \overline {{{{\boldsymbol {\xi}}}}} ^ {\prime} (\boldsymbol {R} - \boldsymbol {I} _ {n}) ^ {2} \boldsymbol {\xi},
$$

从而有

$$
\begin{array}{l} \left| \mu_ {1} - \lambda \right| ^ {2} \left| a _ {1} \right| ^ {2} + \left| \mu_ {2} - \lambda \right| ^ {2} \left| a _ {2} \right| ^ {2} + \dots + \left| \mu_ {n} - \lambda \right| ^ {2} \left| a _ {n} \right| ^ {2} \\ = (\mu_ {1} - 1) ^ {2} \left| a _ {1} \right| ^ {2} + (\mu_ {2} - 1) ^ {2} \left| a _ {2} \right| ^ {2} + \dots + (\mu_ {n} - 1) ^ {2} \left| a _ {n} \right| ^ {2}. \\ \end{array}
$$

由于 $a_{1}, a_{2}, \cdots, a_{n}$ 不全为零，故存在某个 i，使得 $|\mu_{i} - \lambda| \leq \mu_{i} - 1$ ，这说明 $\lambda$ 的实部大于等于 1。因此 $\lambda$ 或者为大于等于 1 的实数，或者为实部大于等于 1 的共轭虚数，从而 $|R - Q(R - I_{n})| \geq 1$ 成立。☐

例 9.134 设 $J = \begin{pmatrix} O & I_{n} \\ -I_{n} & O \end{pmatrix}$ ，A 为 2n 阶实矩阵，满足 $AJA' = J$ ，求证： $|A| = 1$ .

证法 1 由 Laplace 定理容易算出 $|J|=1$ ，从而由 $AJA'=J$ 可得 $|A|^{2}=1$ ，即 $|A|=\pm1$ 。设 $A=\begin{pmatrix}B&C\\D&E\end{pmatrix}$ ，则有

$$
\boldsymbol {A} \boldsymbol {J} + \boldsymbol {J} \boldsymbol {A} = \left( \begin{array}{c c} \boldsymbol {B} & \boldsymbol {C} \\ \boldsymbol {D} & \boldsymbol {E} \end{array} \right) \left( \begin{array}{c c} \boldsymbol {O} & \boldsymbol {I} _ {n} \\ - \boldsymbol {I} _ {n} & \boldsymbol {O} \end{array} \right) + \left( \begin{array}{c c} \boldsymbol {O} & \boldsymbol {I} _ {n} \\ - \boldsymbol {I} _ {n} & \boldsymbol {O} \end{array} \right) \left( \begin{array}{c c} \boldsymbol {B} & \boldsymbol {C} \\ \boldsymbol {D} & \boldsymbol {E} \end{array} \right) = \left( \begin{array}{c c} \boldsymbol {D} - \boldsymbol {C} & \boldsymbol {B} + \boldsymbol {E} \\ - \boldsymbol {B} - \boldsymbol {E} & \boldsymbol {D} - \boldsymbol {C} \end{array} \right),
$$

由例 2.73 可得 $\left|AJ + JA\right| \geq 0$ . 注意到 $(AJ + JA)A' = AJA' + JAA' = J(I_{2n} + AA')$ , 并且 $I_{2n} + AA'$ 为正定阵, 故有

$$
\left| \boldsymbol {A} \boldsymbol {J} + \boldsymbol {J} \boldsymbol {A} \right| \left| \boldsymbol {A} \right| = \left| (\boldsymbol {A} \boldsymbol {J} + \boldsymbol {J} \boldsymbol {A}) \boldsymbol {A} ^ {\prime} \right| = \left| \boldsymbol {J} \right| \left| \boldsymbol {I} _ {2 n} + \boldsymbol {A} \boldsymbol {A} ^ {\prime} \right| > 0,
$$

于是 $|\mathbf{A}| > 0$ ，从而 $|\mathbf{A}| = 1$ 

证法 2 设 $A = \begin{pmatrix} B & C \\ D & E \end{pmatrix}$ ，则由 $AJA' = J$ 可得

$$
B C ^ {\prime} = C B ^ {\prime}, D E ^ {\prime} = E D ^ {\prime}, E B ^ {\prime} - D C ^ {\prime} = I _ {n}.
$$

设 C = SQ 为极分解, 其中 Q 是正交矩阵, S 是半正定实对称矩阵, 则 $C' = Q'S$ , 并且有

$$
\boldsymbol {C} (\boldsymbol {B} + t \boldsymbol {Q}) ^ {\prime} = \boldsymbol {C B ^ {\prime}} + t \boldsymbol {C Q ^ {\prime}} = \boldsymbol {B C ^ {\prime}} + t \boldsymbol {S} = (\boldsymbol {B} + t \boldsymbol {Q}) \boldsymbol {C ^ {\prime}}.
$$

因为 $|\mathbf{B} + t\mathbf{Q}| = |\mathbf{Q}||t\mathbf{I}_n + B\mathbf{Q}'|$ 是一个关于 $t$ 的 $n$ 次多项式, 故在实数域上至多只有 $n$ 个根, 从而可取到一列实数 $t_k \to 0$ , 使得 $\mathbf{B} + t_k\mathbf{Q}$ 均非异. 利用降阶公式计算下列行列式的值:

$$
\begin{array}{l} \left| \begin{array}{c c} \boldsymbol {B} + t _ {k} \boldsymbol {Q} & \boldsymbol {C} \\ \boldsymbol {D} & \boldsymbol {E} \end{array} \right| \\ = | \boldsymbol {B} + t _ {k} \boldsymbol {Q} | \cdot | \boldsymbol {E} - \boldsymbol {D} (\boldsymbol {B} + t _ {k} \boldsymbol {Q}) ^ {- 1} \boldsymbol {C} | = | \boldsymbol {E} - \boldsymbol {D} (\boldsymbol {B} + t _ {k} \boldsymbol {Q}) ^ {- 1} \boldsymbol {C} | \cdot | (\boldsymbol {B} + t _ {k} \boldsymbol {Q}) ^ {\prime} | \\ = \left| \boldsymbol {E} \left(\boldsymbol {B} + t _ {k} \boldsymbol {Q}\right) ^ {\prime} - \boldsymbol {D} \left(\boldsymbol {B} + t _ {k} \boldsymbol {Q}\right) ^ {- 1} \boldsymbol {C} \left(\boldsymbol {B} + t _ {k} \boldsymbol {Q}\right) ^ {\prime} \right| = \left| \boldsymbol {E} \left(\boldsymbol {B} + t _ {k} \boldsymbol {Q}\right) ^ {\prime} - \boldsymbol {D C} ^ {\prime} \right| \\ = \left| \boldsymbol {E} \boldsymbol {B} ^ {\prime} - \boldsymbol {D} \boldsymbol {C} ^ {\prime} + t _ {k} \boldsymbol {E} \boldsymbol {Q} ^ {\prime} \right| = \left| \boldsymbol {I} _ {n} + t _ {k} \boldsymbol {E} \boldsymbol {Q} ^ {\prime} \right|. \\ \end{array}
$$

上式两边同取极限, 令 $t_k \to 0$ , 即得 $|\mathbf{A}| = |\mathbf{I}_n| = 1$ . □

#### 3. 奇异值分解及其应用

首先, 我们简单地回顾一下矩阵奇异值分解的求法. 设 $\mathbf{A}$ 是 $m \times n$ 实矩阵, 则 $\mathbf{A}'\mathbf{A}$ 是 $n$ 阶半正定实对称矩阵, 故存在 $n$ 阶正交矩阵 $\mathbf{Q}$ , 使得 $\mathbf{Q}'\mathbf{A}'\mathbf{A}\mathbf{Q} = \mathrm{diag}\{\lambda_1, \cdots, \lambda_r, 0, \cdots, 0\}$ , 其中 $r = r(\mathbf{A}'\mathbf{A}) = r(\mathbf{A})$ 且 $\lambda_1 \geq \cdots \geq \lambda_r > 0$ 为 $\mathbf{A}'\mathbf{A}$ 的正特征值. 设 $\mathbf{Q} = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 为列分块, 令 $\sigma_i = \sqrt{\lambda_i}$ , $\beta_i = \frac{1}{\sigma_i}\mathbf{A}\alpha_i (1 \leq i \leq r)$ , 则 $\beta_1, \cdots, \beta_r$ 是两两正交长度为 1 的 $m$ 维列向量, 将其扩张为 $\mathbb{R}^m$ (取标准内积) 的一组标准正交基 $\beta_1, \beta_2, \cdots, \beta_m$ . 令 $\mathbf{P} = (\beta_1, \beta_2, \cdots, \beta_m)$ , 则 $\mathbf{P}$ 为 $m$ 阶正交矩阵, 满足 $\mathbf{AQ} = P\mathbf{A}$ , 其中 $\mathbf{\Lambda} = \begin{pmatrix} S & O \\ O & O \end{pmatrix}$ , $S = \mathrm{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$ 且 $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 为 $\mathbf{A}$ 的全体正奇异值, $\mathbf{A} = P\Lambda\mathbf{Q}'$ 即为 $\mathbf{A}$ 的奇异值分解. 我们注意以下两点:

(1) 方阵 A 的极分解和奇异值分解之间可以互相推导。例如，由奇异值分解 $A = P \Lambda Q'$ 可得极分解 $A = (PQ')(Q \Lambda Q')$ ，反之亦然。因此在处理方阵问题时，这两种分解所起的作用是类似的。

(2) $A$ 的正奇异值就是 $A^{\prime} A$ 的正特征值的算术平方根. 因此遇到 $A^{\prime} A$ 的问题时 (如例 9.133), 利用极分解或奇异值分解来考虑是一种自然的选择.

下面我们来看一些应用奇异值分解的典型例题.

例 9.39 设 A, B 是 $m \times n$ 实矩阵, 求证: $A'A = B'B$ 的充要条件是存在 m 阶正交矩阵 P, 使得 A = PB.

证法2 沿用上面的记号. 因为 $A^{\prime} A = B^{\prime} B$ , 故 $A, B$ 有相同的奇异值, 并且 $Q$ 是相同的. 由此可得两个 $m$ 阶正交矩阵 $P_{1}, P_{2}$ , 使得

$$
\boldsymbol {A} = \boldsymbol {P} _ {1} \left( \begin{array}{c c} \boldsymbol {S} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) \boldsymbol {Q} ^ {\prime}, \quad \boldsymbol {B} = \boldsymbol {P} _ {2} \left( \begin{array}{c c} \boldsymbol {S} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right) \boldsymbol {Q} ^ {\prime}.
$$

令 $P = P_{1}P_{2}^{\prime}$ ，则 P 为 m 阶正交矩阵，满足 A = PB. □

第2章解答题15 设 $A = (a_{ij})$ 为 $n$ 阶方阵, 定义函数 $f(A) = \sum_{i,j=1}^{n} a_{ij}^2$ . 设 $P$ 为 $n$ 阶可逆矩阵, 使得对任意的 $n$ 阶方阵 $A$ 成立: $f(PAP^{-1}) = f(A)$ . 证明: 存在非零常数 $c$ , 使得 $P' P = cI_n$ .

证法 3 我们把数域限定在实数域上, $f(A) = \sum_{i,j=1}^{n} a_{ij}^2 = \text{tr}(AA')$ . 设 $P = Q_1 DQ_2$ 为奇异值分解, 其中 $Q_1, Q_2$ 为正交矩阵, $D = \text{diag}\{d_1, d_2, \cdots, d_n\}$ 为对角矩阵, $d_i > 0 (1 \leq i \leq n)$ , 则 $P'P = Q'_2 D^2 Q_2$ , 于是有

$$
\begin{array}{l} f \left(\boldsymbol {P} \boldsymbol {A} \boldsymbol {P} ^ {- 1}\right) = \operatorname{tr} \left(\boldsymbol {P} \boldsymbol {A} \boldsymbol {P} ^ {- 1} \left(\boldsymbol {P} ^ {\prime}\right) ^ {- 1} \boldsymbol {A} ^ {\prime} \boldsymbol {P} ^ {\prime}\right) = \operatorname{tr} \left(\left(\boldsymbol {P} ^ {\prime} \boldsymbol {P}\right) \boldsymbol {A} \left(\boldsymbol {P} ^ {\prime} \boldsymbol {P}\right) ^ {- 1} \boldsymbol {A} ^ {\prime}\right) \\ = \operatorname{tr} \left(\boldsymbol {Q} _ {2} ^ {\prime} \boldsymbol {D} ^ {2} \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) \boldsymbol {D} ^ {- 2} \boldsymbol {Q} _ {2} \boldsymbol {A} ^ {\prime}\right) = \operatorname{tr} \left(\boldsymbol {D} ^ {2} \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) \boldsymbol {D} ^ {- 2} \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) ^ {\prime}\right). \\ = f \left(\boldsymbol {D} \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) \boldsymbol {D} ^ {- 1}\right), \\ \end{array}
$$

$$
f (\boldsymbol {A}) = \operatorname{tr} \left(\boldsymbol {A} \boldsymbol {A} ^ {\prime}\right) = \operatorname{tr} \left(\left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right) ^ {\prime}\right) = f \left(\boldsymbol {Q} _ {2} \boldsymbol {A} \boldsymbol {Q} _ {2} ^ {\prime}\right).
$$

因此对任意的 $B = Q_{2}AQ'_{2} = (b_{ij})$ ，总有 $f(DBD^{-1}) = f(B)$ 成立，此式经简单的计算即为

$$
\sum_ {i, j = 1} ^ {n} \frac {d _ {i} ^ {2}}{d _ {j} ^ {2}} b _ {i j} ^ {2} = \sum_ {i, j = 1} ^ {n} b _ {i j} ^ {2},
$$

故只能是 $d_{1}=d_{2}=\cdots=d_{n}=d>0$ ，从而 $P^{\prime}P=Q_{2}^{\prime}(d^{2}I_{n})Q_{2}=d^{2}I_{n}$ 。☐

例 9.135 设 A 为 n 阶实矩阵, 求证: A 的谱半径 $\rho(A)$ (即 A 的特征值模长的最大值) 小于等于 A 的最大奇异值.

证明 设 $A = P\Lambda Q'$ 为奇异值分解, 其中 $\Lambda = \text{diag}\{\sigma_1, \cdots, \sigma_r, 0, \cdots, 0\}$ 且 $\sigma_1 \geq \cdots \geq \sigma_r > 0$ 为 A 的全体正奇异值. 注意到 $A' A = Q\Lambda^2 Q'$ , 故由例 9.55 即得 $\rho(A) \leq \sigma_1$ . □

例 9.136 设 A 为 n 阶实矩阵, 求证: $\mathrm{tr}(A)^{2} \leq \mathrm{r}(A) \mathrm{tr}(A'A)$ , 并求等号成立的充要条件.

证明 设 $A = P\Lambda Q'$ 为奇异值分解, 其中 $\Lambda = \text{diag}\{\sigma_1, \cdots, \sigma_r, 0, \cdots, 0\}$ 且 $\sigma_1 \geq \cdots \geq \sigma_r > 0$ 为 A 的全体正奇异值. 注意到 $\text{tr}(A) = \text{tr}(P\Lambda Q') = \text{tr}(Q'P\Lambda)$ , 若设正交矩阵 $Q'P = (p_{ij})$ , 则 $\text{tr}(A) = p_{11}\sigma_1 + p_{22}\sigma_2 + \cdots + p_{rr}\sigma_r$ . 另一方面, $\text{tr}(A'A) = \text{tr}(Q\Lambda^2Q') = \text{tr}(\Lambda^2) = \sigma_1^2 + \sigma_2^2 + \cdots + \sigma_r^2$ , 故由 Cauchy-Schwarz 不等式可得

$$
\begin{array}{l} \operatorname{tr} (\boldsymbol {A}) ^ {2} = \left(p _ {1 1} \sigma_ {1} + p _ {2 2} \sigma_ {2} + \dots + p _ {r r} \sigma_ {r}\right) ^ {2} \\ \leq \left(p _ {1 1} ^ {2} + p _ {2 2} ^ {2} + \dots + p _ {r r} ^ {2}\right) \left(\sigma_ {1} ^ {2} + \sigma_ {2} ^ {2} + \dots + \sigma_ {r} ^ {2}\right) \\ \leq r \left(\sigma_ {1} ^ {2} + \sigma_ {2} ^ {2} + \dots + \sigma_ {r} ^ {2}\right) = \mathrm{r} (\boldsymbol {A}) \operatorname{tr} \left(\boldsymbol {A} ^ {\prime} \boldsymbol {A}\right), \\ \end{array}
$$

等号成立当且仅当 $p_{11} = \cdots = p_{rr} = \pm 1$ 且 $\sigma_{1} = \cdots = \sigma_{r} = \sigma > 0$ ，即当且仅当 $Q'P = \begin{pmatrix} \pm I_{r} & O \\ O & P_{n-r} \end{pmatrix}, \Lambda = \begin{pmatrix} \sigma I_{r} & O \\ O & O \end{pmatrix}$ 。此时， $A = P\Lambda Q' = P\Lambda(Q'P)P' = P\left(\begin{pmatrix}\pm\sigma I_{r} & O \\ O & O \end{pmatrix}\right)P'$ 为实对称矩阵且非零特征值都相等，不难验证这就是上述不等式等号成立的充要条件。☐

例 9.137 设 A 为 n 阶幂等实矩阵, 求证: $A^{\prime}A$ 的非零特征值都大于等于 1.

证明 设 $A = P\Lambda Q'$ 为奇异值分解, 其中 $\Lambda = \operatorname{diag}\{\sigma_{1}, \cdots, \sigma_{r}, 0, \cdots, 0\}$ 且 $\sigma_{1} \geq \cdots \geq \sigma_{r} > 0$ 为 A 的全体正奇异值. 注意到 $A' A = Q\Lambda^{2}Q'$ , 故 $A' A$ 的非零特征值为 $\sigma_{i}^{2}(1 \leq i \leq r)$ , 我们只要证明 $\sigma_{i} \geq 1$ 即可. 设正交矩阵 $PQ' = (p_{ij})$ , 则由 $A^{2} = A$ 可得 $P\Lambda Q' P\Lambda Q' = P\Lambda Q'$ , 于是 $\Lambda(Q' P)\Lambda = \Lambda$ , 又由此可得 $\sigma_{i}^{2} p_{ii} = \sigma_{i}$ , 于是 $\sigma_{i} p_{ii} = 1 (1 \leq i \leq r)$ . 注意到 $0 < p_{ii} \leq 1$ , 故 $\sigma_{i} = p_{ii}^{-1} \geq 1 (1 \leq i \leq r)$ . □

例 9.131 (代数版本) 设 A 为 n 阶幂等实矩阵, 若对任意的实列向量 x, 均有 $x^{\prime}A^{\prime}Ax \leq x^{\prime}x$ , 求证: A 是实对称矩阵.

证法2 任取半正定阵 $A^{\prime}A$ 的特征值 $\lambda_0$ 及其特征向量 $\alpha$ , 即有 $A\alpha = \lambda_0\alpha$ , 则 $\alpha^{\prime}A^{\prime}A\alpha = \lambda_0^2\alpha^{\prime}\alpha \leq \alpha^{\prime}\alpha$ , 于是 $\lambda_0^2 \leq 1$ , 从而 $0 \leq \lambda_0 \leq 1$ . 又由例9.137可知, 若 $\lambda_0 \neq 0$ , 则 $\lambda_0 \geq 1$ , 从而 $\lambda_0 = 1$ . 设 $\mathrm{r}(A^{\prime}A) = \mathrm{r}(A) = r$ , 则 $A^{\prime}A$ 的特征值为 $1(r$ 重), $0 (n - r$ 重). 注意到 $A$ 是幂等矩阵, 故由例4.55可得 $\operatorname{tr}(A^2) = \operatorname{tr}(A) = \operatorname{r}(A) = r = \operatorname{tr}(A^{\prime}A)$ , 再由例2.49可知 $A$ 为实对称矩阵.

证法3 由条件可知 $I_{n} - A^{\prime}A$ 为半正定阵, 故存在 $n$ 阶实矩阵 $C$ , 使得 $I_{n} - A^{\prime}A = C^{\prime}C$ . 注意到 $A^{2} = A$ , 故有 $A^{\prime}C^{\prime}CA = A^{\prime}(I_{n} - A^{\prime}A)A = A^{\prime}A - (A^{\prime})^{2}A^{2} = A^{\prime}A - A^{\prime}A = O$ , 由例2.9即得 $CA = O$ . 于是 $O = C^{\prime}CA = (I_{n} - A^{\prime}A)A = A - A^{\prime}A^{2} = A - A^{\prime}A$ , 从而 $A = A^{\prime}A$ 为实对称矩阵. $\square$ 

#### 4. 广义逆及其应用

利用奇异值分解, 我们还可以定义线性映射和矩阵的广义逆. 下面对欧氏空间之间的线性映射和实矩阵进行阐述, 酉空间之间的线性映射和复矩阵的情形同理可得.

例 9.138 设 V, U 分别为 n, m 维欧氏空间, $\varphi: V \rightarrow U$ 为线性映射, 求证: 存在唯一的线性映射 $\psi: U \rightarrow V$ , 满足如下条件:

(1) $\varphi \psi \varphi = \varphi$ ; 

(2) $\psi\varphi\psi = \psi;$ 

(3) $\psi \varphi$ 与 $\varphi \psi$ 都是自伴随算子.

上述 $\psi$ 称为 $\varphi$ 的 Moore-Penrose 广义逆, 记为 $\varphi^{\dagger}$ .

证明 先证存在性. 记 $\pmb{\xi}:(\mathrm{Ker}\varphi)^{\perp}\to \mathrm{Im}\varphi$ 为 $\varphi$ 在 $(\mathrm{Ker}\varphi)^{\perp}$ 上的限制, 容易验证 $\operatorname{Ker}\pmb {\xi} = 0$ 并且 $\dim (\mathrm{Ker}\varphi)^{\perp} = n - \dim \mathrm{Ker}\varphi = \dim \mathrm{Im}\varphi,$ 故由线性映射的维数公式可知, $\pmb{\xi}$ 为线性同构. 构造映射 $\psi :U\to V$ 如下:

$$
\psi (\pmb {u}) = \left\{ \begin{array}{l l} {\pmb {\xi} ^ {- 1} (\pmb {u}),} & {\text {若}   \pmb {u} \in \mathrm{Im}   \varphi ;} \\ {\pmb {0},} & {\text {若}   \pmb {u} \in (\mathrm{Im}   \varphi) ^ {\perp},} \end{array} \right.
$$

因为 $U = \operatorname{Im} \varphi \oplus (\operatorname{Im} \varphi)^{\perp}$ ，故由例 4.2 可知，上述定义可以唯一地延拓到整个 U 上并使 $\psi$ 成为线性映射。考虑 $\varphi$ 的奇异值分解，设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 和 $\{f_{1}, f_{2}, \cdots, f_{m}\}$ 分别为 V 和 U 的标准正交基，使得 $\varphi$ 在这两组基下的表示矩阵为 $\begin{pmatrix} S & O \\ O & O \end{pmatrix}$ ，其中 $S = \operatorname{diag}\{\sigma_{1}, \sigma_{2}, \cdots, \sigma_{r}\}$ ， $\sigma_{1} \geq \sigma_{2} \geq \cdots \geq \sigma_{r} > 0$ 为 $\varphi$ 的全体正奇异值，即有 $\varphi(e_{i}) = \sigma_{i} f_{i} (1 \leq i \leq r)$ ， $\varphi(e_{j}) = 0 (r + 1 \leq j \leq n)$ 。容易验证

$$
\operatorname{Ker} \varphi = L \left(\boldsymbol {e} _ {r + 1}, \dots , \boldsymbol {e} _ {n}\right), \quad (\operatorname{Ker} \varphi) ^ {\perp} = L \left(\boldsymbol {e} _ {1}, \dots , \boldsymbol {e} _ {r}\right),
$$

$$
\operatorname{Im} \varphi = L \left(\boldsymbol {f} _ {1}, \dots , \boldsymbol {f} _ {r}\right), (\operatorname{Im} \varphi) ^ {\perp} = L \left(\boldsymbol {f} _ {r + 1}, \dots , \boldsymbol {f} _ {m}\right),
$$

并且 $\psi(f_{i})=\frac{1}{\sigma_{i}}e_{i}(1\leq i\leq r)$ , $\psi(f_{j})=0(r+1\leq j\leq m)$ . 容易验证 $\varphi,\psi$ 满足题中的 3 个条件, 这就证明了 $\varphi$ 的广义逆的存在性.

再证唯一性. 设 $\varphi^{\dagger}$ 和 $\varphi^{\sharp}$ 是 $\varphi$ 的两个广义逆, 我们来证明它们一定相等. 反复利用广义逆的 3 个条件, 考虑如下计算:

$$
\begin{array}{l} \varphi^ {\dagger} = \varphi^ {\dagger} \varphi \varphi^ {\dagger} = (\varphi^ {\dagger} \varphi) ^ {*} \varphi^ {\dagger} = \varphi^ {*} (\varphi^ {\dagger}) ^ {*} \varphi^ {\dagger} = (\varphi \varphi^ {\sharp} \varphi) ^ {*} (\varphi^ {\dagger}) ^ {*} \varphi^ {\dagger} \\ = \varphi^ {*} (\varphi^ {\sharp}) ^ {*} \varphi^ {*} (\varphi^ {\dagger}) ^ {*} \varphi^ {\dagger} = (\varphi^ {\sharp} \varphi) ^ {*} (\varphi^ {\dagger} \varphi) ^ {*} \varphi^ {\dagger} = \varphi^ {\sharp} \varphi \varphi^ {\dagger} \varphi \varphi^ {\dagger} = \varphi^ {\sharp} \varphi \varphi^ {\dagger}; \\ \end{array}
$$

$$
\varphi^ {\sharp} = \varphi^ {\sharp} \varphi \varphi^ {\sharp} = \varphi^ {\sharp} (\varphi \varphi^ {\sharp}) ^ {*} = \varphi^ {\sharp} (\varphi^ {\sharp}) ^ {*} \varphi^ {*} = \varphi^ {\sharp} (\varphi^ {\sharp}) ^ {*} (\varphi \varphi^ {\dagger} \varphi) ^ {*}
$$

$$
= \varphi^ {\sharp} (\varphi^ {\sharp}) ^ {*} \varphi^ {*} (\varphi^ {\dagger}) ^ {*} \varphi^ {*} = \varphi^ {\sharp} (\varphi \varphi^ {\sharp}) ^ {*} (\varphi \varphi^ {\dagger}) ^ {*} = \varphi^ {\sharp} \varphi \varphi^ {\sharp} \varphi \varphi^ {\dagger} = \varphi^ {\sharp} \varphi \varphi^ {\dagger},
$$

由此即得 $\varphi^{\sharp} = \varphi^{\dagger}$ □

注 (1) 当 $\varphi: V \to U$ 是线性同构时, 容易看出 $\varphi^{\dagger} = \varphi^{-1}$ , 因此线性映射的广义逆是线性同构的逆的推广. 例 9.138 告诉我们, 对于欧氏空间之间的任意线性映射, 其广义逆都存在; 特别地, 当 $\varphi = 0$ 时, $\varphi^{\dagger} = 0$ ; 进一步, 我们还可以利用线性映射的奇异值分解构造出其广义逆, 即存在 $V$ 和 $U$ 的标准正交基, 使得 $\varphi$ 在这两组基下的表示矩阵为 $\left( \begin{array}{ll} S & O \\ O & O \end{array} \right)$ , 且 $\varphi^{\dagger}$ 在这两组基下的表示矩阵为 $\left( \begin{array}{ll} S^{-1} & O \\ O & O \end{array} \right)$ , 其中 $S = \mathrm{diag}\{\sigma_1, \sigma_2, \cdots, \sigma_r\}$ , $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$ 为 $\varphi$ 的全体正奇异值.

(2) 例 9.138 的代数版本就是矩阵的广义逆. 设 A 为 $m \times n$ 实矩阵, 则存在唯一的 $n \times m$ 实矩阵 $A^{\dagger}$ , 满足如下条件:

(1) $AA^{\dagger}A = A$ ; (2) $A^{\dagger}AA^{\dagger} = A^{\dagger}$ ; (3) $A^{\dagger}A$ 与 $AA^{\dagger}$ 都是实对称矩阵.上述矩阵 $A^{\dagger}$ 称为 $A$ 的 Moore-Penrose 广义逆. 若 $A$ 是 $n$ 阶可逆矩阵, 则 $A^{\dagger} = A^{-1}$ , 因此矩阵的广义逆是方阵的逆阵的推广. 当 $A = O_{m \times n}$ 时, $A^{\dagger} = O_{n \times m}$ . 若设 $A = P\begin{pmatrix} S & O \\ O & O \end{pmatrix} Q'$ 为 $A$ 的奇异值分解, 则 $A^{\dagger} = Q\begin{pmatrix} S^{-1} & O \\ O & O \end{pmatrix} P'$ 为 $A^{\dagger}$ 的奇异值分解. 这也给出了从矩阵 $A$ 求其广义逆 $A^{\dagger}$ 的计算方法. 矩阵的广义逆在矩阵理论中有着重要的应用, 限于篇幅我们不准备展开这方面的讨论. 为了联系起内积空间理论和线性方程组的求解理论, 我们来看广义逆的如下应用.

例 9.139 设 V, U 分别为 n, m 维欧氏空间, $\varphi: V \to U$ 为线性映射, $\varphi^{\dagger}$ 为 $\varphi$ 的广义逆. 求证: $\varphi^{\dagger}\varphi$ 是 V 到 $(\operatorname{Ker}\varphi)^{\perp}$ 上的正交投影算子, $\varphi\varphi^{\dagger}$ 是 U 到 $\operatorname{Im}\varphi$ 上的正交投影算子.

证明 由例 9.138 的证明过程可知, 存在 V 的标准正交基 $e_{1}, e_{2}, \cdots, e_{n}, U$ 的标准正交基 $f_{1}, f_{2}, \cdots, f_{m}$ , 使得

$$
\varphi \left(\boldsymbol {e} _ {i}\right) = \sigma_ {i} \boldsymbol {f} _ {i} (1 \leq i \leq r), \quad \varphi \left(\boldsymbol {e} _ {i}\right) = \mathbf {0} (r + 1 \leq i \leq n);
$$

$$
\varphi^ {\dagger} \left(\boldsymbol {f} _ {j}\right) = \frac {1}{\sigma_ {j}} \boldsymbol {e} _ {j} (1 \leq j \leq r), \quad \varphi^ {\dagger} \left(\boldsymbol {f} _ {j}\right) = \mathbf {0} (r + 1 \leq j \leq m).
$$

因此 $\varphi^{\dagger}\varphi(e_{i})=e_{i}(1\leq i\leq r),\varphi^{\dagger}\varphi(e_{i})=\mathbf{0}(r+1\leq i\leq n);\varphi\varphi^{\dagger}(\boldsymbol{f}_{j})=\boldsymbol{f}_{j}(1\leq j\leq r),\varphi\varphi^{\dagger}(\boldsymbol{f}_{j})=\mathbf{0}(r+1\leq j\leq m).$ 注意到 $\operatorname{Ker}\varphi=L(\boldsymbol{e}_{r+1},\cdots,\boldsymbol{e}_{n}),(\operatorname{Ker}\varphi)^{\perp}=L(\boldsymbol{e}_{1},\cdots,\boldsymbol{e}_{r}),\operatorname{Im}\varphi=L(\boldsymbol{f}_{1},\cdots,\boldsymbol{f}_{r}),(\operatorname{Im}\varphi)^{\perp}=L(\boldsymbol{f}_{r+1},\cdots,\boldsymbol{f}_{m}),$ 故结论成立. □

例 9.140 设 A 为 $m \times n$ 实矩阵, $\beta$ 是 m 维实列向量, 并取实列向量空间上的标准内积. 求证:

(1) 若线性方程组 $Ax = \beta$ 有解, 则 $z = A^{\dagger} \beta$ 是唯一的长度最小的解;

(2) 若线性方程组 $Ax = \beta$ 无解, 则 $z = A^{\dagger}\beta$ 是最佳逼近, 即满足

$$
\| \boldsymbol {A} \boldsymbol {z} - \boldsymbol {\beta} \| \leq \| \boldsymbol {A} \boldsymbol {x} - \boldsymbol {\beta} \|, \forall \boldsymbol {x} \in \mathbb {R} ^ {n},
$$

并且是所有最佳逼近中唯一的长度最小的最佳逼近.

证明 (1) 任取线性方程组的解 $x_0$ , 即满足 $Ax_0 = \beta$ , 则由 $AA^\dagger A = A$ 可知, $z = A^\dagger \beta = A^\dagger Ax_0$ 也满足 $Az = AA^\dagger Ax_0 = Ax_0 = \beta$ , 即 $z$ 也是线性方程组的解. 由例 9.139 可知, $z = A^\dagger Ax_0$ 是 $x_0$ 到 $(\operatorname{Ker} A)^\perp$ 上的正交投影, 从而 $\| z \| \leq \| x_0 \|$ , 等号成立当且仅当 $x_0 = z$ . 由 $x_0$ 的任意性可知, $z = A^\dagger \beta$ 是唯一的长度最小的解.

(2) 由例 9.139 可知, $Az = AA^{\dagger}\beta$ 是 $\beta$ 到 $\operatorname{Im} A$ 上的正交投影, 因此对任意的 $x \in \mathbb{R}^{n}$ , $(\beta - AA^{\dagger}\beta) \perp Ax$ . 于是由勾股定理可得

$$
\| \boldsymbol {A} \boldsymbol {x} - \boldsymbol {\beta} \| ^ {2} = \| (\boldsymbol {A} \boldsymbol {z} - \boldsymbol {\beta}) + \boldsymbol {A} (\boldsymbol {x} - \boldsymbol {z}) \| ^ {2} = \| \boldsymbol {A} \boldsymbol {z} - \boldsymbol {\beta} \| ^ {2} + \| \boldsymbol {A} (\boldsymbol {x} - \boldsymbol {z}) \| ^ {2} \geq \| \boldsymbol {A} \boldsymbol {z} - \boldsymbol {\beta} \| ^ {2},
$$

等号成立当且仅当 $A(x - z) = 0$ . 对满足 $Ax = Az$ 的任一 $\pmb{x}$ , 存在 $\pmb{y} \in \operatorname{Ker} A$ , 使得 $\pmb{x} = \pmb{y} + \pmb{z}$ . 由例9.139的证明过程可知, $\pmb{z} = A^{\dagger} \beta \in (\operatorname{Ker} A)^{\perp}$ , 因此 $\| \pmb{x} \|^{2} = \| \pmb{y} \|^{2} + \| \pmb{z} \|^{2} \geq \| \pmb{z} \|^{2}$ , 等号成立当且仅当 $\pmb{x} = \pmb{z}$ , 即 $\pmb{z}$ 是所有最佳逼近中唯一的长度最小的最佳逼近. □

注 在实际问题中我们遇到的 $Ax = \beta$ 通常都是系数矩阵 $\pmb{A}$ 列满秩但无解的线性方程组. 此时, 容易验证 $A^\dagger = (A'A)^{-1}A'$ , 因此最佳逼近为 $z = (A'A)^{-1}A'\beta$ , 这就是矛盾线性方程组 $Ax = \beta$ 的最小二乘解.

## § 9.15 基础训练

### 9.15.1 训练题

#### 一、单选题

1. 若 A, B 是正交矩阵, k 是非零实数, P 是可逆矩阵, 则 ( ).

(A) $A + B$ 也是正交矩阵

(B) $kA$ 也是正交矩阵

(C) $AB$ 也是正交矩阵

(D) $P^{-1}AP$ 也是正交矩阵

2. 下列结论正确的是（）.

(A) 若非零向量 u, v 正交, 则 u, v 线性无关

(B) 若向量 $v_{1}$ 和 $v_{2}$ 正交, $v_{2}$ 和 $v_{3}$ 正交, 则 $v_{1}$ 和 $v_{3}$ 正交

(C) 若 $U, W$ 是欧氏空间 $V$ 的子空间, 适合 $U \cap W = 0$ , 则 $U$ 和 $W$ 正交

(D) 若 $U, W$ 是欧氏空间 $V$ 的子空间, 适合 $U \cap W = 0$ 且 $\dim V = \dim U + \dim W$ , 则 $U$ 是 $W$ 的正交补空间

3. 和矩阵 $M = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ 正交相似的矩阵是（）.

(A) $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ 

(B) $\begin{pmatrix}1&2\\0&-1\end{pmatrix}$ 

(C) $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ 

(D) $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ 

4. 设 A 是 n 阶实对称矩阵, 则 ( ).

(A) A 有 n 个不同的特征值

(B) A 的特征值的绝对值等于 1

(C) A 的任意 n 个线性无关的特征向量两两正交

(D) 存在正交矩阵 P, 使得 $P^{\prime}AP$ 为对角矩阵

5. 下列结论正确的是（）.

(A) 两个相似的实对称矩阵必正交相似

(B) 两个同阶的正定实对称矩阵必相似

(C) 两个合同的实对称矩阵必正交相似

(D) 特征值完全相同的同阶矩阵必相似

6. 设 A 是 n 阶正交矩阵, 则 ( ).

(A) A 的特征值全是实数

(B) A 的特征值的模长等于 1

(C) A 有 n 个不同的特征值

(D) A 的线性无关的特征向量两两正交

7. 设 $\varphi$ 是 n 维欧氏空间 V 上的对称变换, 则 ( ).

(A) $\varphi$ 在 V 的任意一组基下的表示矩阵是实对称矩阵

(B) $\varphi$ 在 V 的任意一组正交基下的表示矩阵是实对称矩阵

(C) $\varphi$ 在 V 的任意一组标准正交基下的表示矩阵是实对称矩阵

(D) $\varphi$ 在 V 的任意一组基下的表示矩阵都正交相似

8. 在下列条件中, 能保证 n 阶矩阵 A 是正交矩阵的是 ( ).

(A) A 将 n 维正交列向量变成正交列向量

(B) 对任意的 n 维列向量 $\alpha, \|A\alpha\| = \|\alpha\|$ 

(C) A 保持向量夹角不变

(D) A 的特征值全为 1 或 -1

9. n 维欧氏空间 V 上的线性变换 $\varphi$ 为正交变换的充要条件是（）.

(A) $\varphi$ 在 V 的任一组基下的表示矩阵都是正交矩阵

(B) $\varphi$ 在 V 的任一组正交基下的表示矩阵都是正交矩阵

(C) $\varphi$ 在 V 的任一组标准正交基下的表示矩阵都是正交矩阵

(D) $\varphi$ 在 V 的任一组标准正交基下的表示矩阵都是实对称矩阵

10. 设 u, v 是 n 维欧氏空间 V 中的向量, 下列结论错误的是 ( ).

(A) 若 u 和 V 的一组基中每一个基向量的内积均为零, 则 u = 0

(B) 若 $e_{1},\cdots,e_{n}$ 是 V 的基, 从 $(u,e_{i})=(v,e_{i})$ 对一切 i 成立可推出 u=v

(C) 若 $e_{1},\cdots,e_{n}$ 是 V 的基, 又 $(\boldsymbol{u},\boldsymbol{e}_{1})^{2}+\cdots+(\boldsymbol{u},\boldsymbol{e}_{n})^{2}=1$ , 则 $\|u\|=1$ 

(D) 若 u, v 都是单位向量且不相同，则它们线性相关的充要条件是 u = -v

11. 上三角矩阵 A 是正交矩阵的充要条件是（）.

(A) A 是对角矩阵

(B) A 是单位矩阵

(C) A 是对角矩阵且主对角线上的元素为 1 或 -1

(D) A 是对角矩阵且主对角线上的元素为 1, -1 或 0

12. n 阶矩阵 A 是正交矩阵的充要条件是（）.

(A) A 的特征值全为 1 或 -1

(B) A 的列向量组成 n 维列向量空间 $R^{n}$ 的一组标准正交基

(C) A 的列向量两两正交

(D) A 正交相似于单位矩阵

13. 下列矩阵没有实特征值的是（）.

(A) 实对称矩阵

(B) 奇数阶实矩阵

(C) 二阶非零实反对称矩阵

(D) 实上三角矩阵

14. 两个 n 阶实对称矩阵相似的充要条件是（）.

(A) 它们合同

(B) 它们的特征值都是实数 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 

(C) 它们的特征值都是两两不相等的实数 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 

(D) 它们都是正交矩阵

15. 在欧氏空间中, 下列命题正确的是 ( ).

(A) 两个正交变换的线性组合仍是正交变换

(B) 两个对称变换的线性组合仍是对称变换

(C) 对称变换将正交向量组变为正交向量组

(D) 对称变换必是可逆变换

16. 正交矩阵 A 经过下列变换后仍是正交矩阵的是（）.

(A) 对 A 进行一次初等变换

(B) 对 A 进行一次相似变换, 即将 A 变为 $P^{-1}AP$ , 其中 P 是同阶可逆矩阵

(C) 对 A 进行一次合同变换, 即将 A 变为 $C'AC$ , 其中 C 是同阶可逆矩阵

(D) 对换 A 的第 i, j 行后再对换第 i, j 列

17. 设 A 是正交矩阵, 则下列矩阵不一定是正交矩阵的是 ( ).

(A) $A'$ 

(B) $A^{*}$ 

(C) -A 

(D) $P^{-1}AP$ ，其中 $P$ 是同阶可逆矩阵

18. 二阶实正规矩阵 A 不是对称矩阵, 则 A 是正交矩阵的充要条件是 ( ).

(A) A 的行列式值等于 1

(B) A 的行列式值等于 -1

(C) A 是可逆矩阵

(D) A 是奇异矩阵

19. 设 $\varphi, \psi$ 是 n 维酉空间上的自伴随算子，则下列线性变换仍是自伴随算子的是（）.

(A) $\psi\varphi$ 

(B) i(φψ - ψφ) 

(C) i(φψ + ψφ) 

(D) $\varphi\psi - \psi\varphi$ 

20. 设 V 是 n 维欧氏空间, $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 是 V 的一组基, G 是关于这组基的度量矩阵. 设线性变换 $\varphi$ 在这组基下的表示矩阵为 A, 则 $\varphi$ 是自伴随算子的充要条件是().

(A) A 是对称矩阵

(B) A 是正交矩阵

(C) $A'G = GA$ 

(D) AG = GA 

#### 二、填空题

1. 向量 $(1,1, - 1, - 1),(1,1,0,0),(0,0, - 1, - 1),(2,2, - 1, - 1),(1,0, - 1, - 1)$ 在四维行向量空间（取标准内积）中生成的子空间的正交补空间的维数是（ ）.

2. 设 $\alpha, \beta$ 是 n 维欧氏空间 V 中两个非零向量，定义 $\varphi(x) = (x, \alpha)\beta$ ，问 $\varphi$ 是正规算子吗？()

3. 设 $e_{1}, e_{2}$ 是二维欧氏空间中的一组标准正交基, $\alpha_{1}, \alpha_{2}$ 是空间中两个向量, 已知 $(e_{1}, \alpha_{1}) = 1, (e_{1}, \alpha_{2}) = -1, (e_{2}, \alpha_{1}) = 2, (e_{2}, \alpha_{2}) = 1$ , 问 $\alpha_{1}, \alpha_{2}$ 是否线性相关? ()

4. 已知三维欧氏空间中有一组基 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ ，其度量矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & - 1 & 0 \\ - 1 & 2 & 0 \\ 0 & 0 & 3 \end{array} \right),
$$

向量 $\beta = 2\alpha_{1} + 3\alpha_{2} - \alpha_{3}$ ，求 $\beta$ 的长度.

5. 设 $\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$ 是 n 维列向量空间的一组标准正交基, A 是可逆矩阵, 问 $A\alpha_{1},A\alpha_{2},\cdots,A\alpha_{n}$ 是否仍是标准正交基? ()

6. 设

$$
\boldsymbol {A} = \left( \begin{array}{c c c} a & - \frac {3}{7} & \frac {2}{7} \\ b & c & d \\ - \frac {3}{7} & \frac {2}{7} & e \end{array} \right)
$$

是正交矩阵, 则 $a = (\quad)$ , $e = (\quad)$ .

7. 设实对称矩阵 A 的特征多项式为 $\lambda^{2}-5\lambda+6$ ，写出 A 的正交相似标准型.

8. 设 $\alpha$ 是四维实列向量且 $\alpha' \alpha = 1$ ，又 $A = I_{4} - 2\alpha\alpha'$ ，写出 A 的正交相似标准型.

9. 在实三维行向量组成的欧氏空间中, 已知向量 $e_1, e_2, e_3$ 是标准正交基, 问向量 $\frac{1}{3}(2e_1 + 2e_2 - e_3)$ , $\frac{1}{3}(2e_1 - e_2 + 2e_3)$ , $\frac{1}{3}(e_1 - 2e_2 - 2e_3)$ 是否也是一组标准正交基? ( )

10. 设 A 是幂零实对称矩阵, 问 A 是否必是零矩阵? ()

11. 已知二阶实对称矩阵 A 的一个特征向量为 $(1, -1)'$ ，写出 A 的与 $(1, -1)'$ 线性无关且长度为 1 的特征向量（）.

12. 已知三阶正交矩阵 A 有一个特征值 $\frac{1}{2} + \frac{\sqrt{3}}{2}i$ 且 A 的行列式值等于 1，则 A 的其余两个特征值为（）.

13. 两个同阶实对称矩阵的极小多项式相同, 它们是否相似? ()

14. 两个同阶实对称矩阵的特征多项式相同, 它们是否相似? ()

15. 设 $\varphi$ 是欧氏空间 $V$ 上的正交变换, $V_{0}$ 是 $\varphi$ 的不变子空间, 问 $V_{0}^{\perp}$ 是否也是 $\varphi$ 的不变子空间? ( )

16. 设 $V_{1}, V_{2}$ 是欧氏空间 V 的子空间且 $V_{1}$ 和 $V_{2}$ 的正交补空间相同, 问 $V_{1}$ 和 $V_{2}$ 是否相同?
()

17. 设 $V$ 是由 $n$ 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), $\pmb{T}$ 是一个 $n$ 阶实矩阵, 定义 $V$ 上的线性变换 $\varphi(A) = T A$ , 求 $\varphi$ 的伴随.

18. n 阶对称正交矩阵按正交相似分类, 共有 ( ) 类.

19. 设 $\varphi$ 是 n 维酉空间 V 上的线性变换, 若存在 V 的一组基 $\{v_{1},\cdots,v_{n}\}$ , 使得 $\varphi$ 在这组基下的表示矩阵为对角矩阵, 问 $\varphi$ 是否必是正规算子? ()

20. 设 $\varphi$ 是 n 维酉空间 V 上的正规算子, 若它的特征值全是实数, 则它必是 ( ) 算子.

#### 三、解答题

1. 证明: 在内积空间中平行四边形两对角线平方和等于四边平方和, 即

$$
\left\| \boldsymbol {x} + \boldsymbol {y} \right\| ^ {2} + \left\| \boldsymbol {x} - \boldsymbol {y} \right\| ^ {2} = 2 \| \boldsymbol {x} \| ^ {2} + 2 \| \boldsymbol {y} \| ^ {2}.
$$

2. 设 $e_{1}, e_{2}, \cdots, e_{n}$ 为内积空间 V 的一组标准正交基，求证：对任意的 $\alpha, \beta \in V$ ，有

$$
(\alpha , \beta) = (\alpha , e _ {1}) \overline {{(\beta , e _ {1})}} + (\alpha , e _ {2}) \overline {{(\beta , e _ {2})}} + \dots + (\alpha , e _ {n}) \overline {{(\beta , e _ {n})}}.
$$

3. 设 U 是欧氏空间 V 的子空间, $\eta_{1}, \eta_{2}, \cdots, \eta_{r}$ 是 U 的一组基, $\gamma$ 是 V 中的非零向量. 设 $G_{0} = |G(\eta_{1}, \eta_{2}, \cdots, \eta_{r})|$ , $G = |G(\eta_{1}, \eta_{2}, \cdots, \eta_{r}, \gamma)|$ 分别是向量组的 Gram 矩阵的行列式值. 求证: $\gamma$ 到子空间 U 的距离为 $d = \sqrt{\frac{G}{G_{0}}}$ .

4. 设 n 维欧氏空间 V 中有 $n+1$ 个向量 $\alpha_{0}, \alpha_{1}, \cdots, \alpha_{n}$ ，它们两两之间的距离都是 d > 0.
令 $\beta_{i}=\alpha_{i}-\alpha_{0}(1\leq i\leq n)$ ，求证：

(1) $(\beta_{i},\beta_{j})=\frac{d^{2}}{2}(1\leq i\neq j\leq n);$ 

(2) $\beta_{1},\cdots,\beta_{n}$ 是 V 的一组基.

5. 设 $\alpha, \beta$ 是 n 维酉空间 V 中的两个向量, V 上的变换 $\varphi$ 定义为 $\varphi(x) = (x, \alpha)\beta$ , 求证: $\varphi$ 是 V 上的线性变换, 并求 $\varphi^{*}$ . 若 $\alpha, \beta$ 是两个正交单位向量, 将它们扩展为 V 的一组标准正交基 $\{e_{1} = \alpha, e_{2} = \beta, e_{3}, \cdots, e_{n}\}$ , 求 $\varphi$ 和 $\varphi^{*}$ 在这组基下的表示矩阵.

6. 设 $\varphi$ 是 $n$ 维欧氏空间 $V$ 上的变换, 且满足条件 $(\varphi(x), \varphi(y)) = (x, y)$ , 求证: $\varphi$ 是 $V$ 上的正交变换.

7. 设 $V$ 是由 $n$ 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), $V$ 上的线性变换 $\varphi$ 定义为 $\varphi(X) = AX$ , 其中 $A \in V$ . 求证: $\varphi$ 是正交算子的充要条件是 $A$ 为正交矩阵; $\varphi$ 是自伴随算子的充要条件是 $A$ 为对称矩阵.

8. 设 A 为八阶正交矩阵, 求证: A 中不存在元素皆为 $\frac{1}{2\sqrt{2}}$ 的三阶子矩阵.

9. 求证: 正定实对称矩阵 A 为正交矩阵的充要条件是 A 为单位矩阵.

10. 设实对称矩阵

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} a & 1 & 1 & - 1 \\ 1 & a & - 1 & 1 \\ 1 & - 1 & a & 1 \\ - 1 & 1 & 1 & a \end{array} \right)
$$

有一个单特征值 -3, 求 a 的值并求正交矩阵 P, 使得 $P^{\prime}AP$ 为对角矩阵.

11. 设三阶实对称矩阵 A 的各行元素之和均为 3, 向量 $\alpha_{1}=(-1,2,-1)^{\prime}, \alpha_{2}=(0,-1,1)^{\prime}$ 是线性方程组 Ax=0 的两个解.

(1) 求 A 的特征值和特征向量;

(2) 求正交矩阵 Q 和对角矩阵 D, 使得 $Q'AQ = D$ .

12. 已知曲面 $2x^{2} + ay^{2} + 2z^{2} + 2xy + 2xz + 2yz = 3$ 经过正交变换

$$
\left( \begin{array}{c} x \\ y \\ z \end{array} \right) = P \left( \begin{array}{c} u \\ v \\ w \end{array} \right)
$$

可化为椭球面 $u^2 + v^2 + bw^2 = 3$ ，求 $a, b$ 的值和正交矩阵 $\pmb{P}$ .

13. 设 A 为 n 阶实对称矩阵, 求证: A 有 n 个不同特征值的充要条件是对 A 的任一特征值 $\lambda_{0}$ 及其特征向量 $\alpha$ , 矩阵 $\begin{pmatrix} A - \lambda_{0} I_{n} & \alpha \\ \alpha' & 0 \end{pmatrix}$ 均非异.

14. 设 A, B 为 n 阶正定实对称矩阵, 求证: $\frac{2^{n+1}}{|A+B|} \leq \frac{1}{|A|} + \frac{1}{|B|}$ , 且等号成立的充要条件是 A = B.

15. 设 A 为 n 阶实对称矩阵, 求证:

(1) 若 A 正定, 则对任意的 $B \in M_{n \times m}(\mathbb{R})$ , 有 $0 \leq |B'(A + BB')^{-1}B| < 1$ , 并且左边等号成立的充要条件是 $r(B) < m$ ;

(2) 若 A 半正定, 则存在 $B \in M_{n \times m}(\mathbb{R})$ , 使得 $A + BB'$ 正定且 $|B'(A + BB')^{-1}B| = 1$ 的充要条件是 $\mathrm{r}(A) = n - m$ .

16. 设 A, B 是 n 阶正定实对称矩阵且 A - B 是半正定阵, $A_{r}, B_{r}$ 分别表示 A, B 的由第 $i_{1}, \cdots, i_{r}$ 行和列交点上元素组成的主子阵, 求证: $|A_{r}| \geq |B_{r}|$ .

17. 设 $\varphi$ 为 $n$ 维欧氏空间 $V$ 上的非异线性变换, 求证: $\varphi$ 保持向量的夹角不变 (即对任意的非零向量 $\alpha, \beta$ , 它们的夹角等于 $\varphi(\alpha), \varphi(\beta)$ 的夹角) 的充要条件是 $\varphi$ 保持向量的正交性不变.

18. 设 A, B 是 n 阶实正规矩阵, 求证: 若 A, B 相似, 则它们必正交相似.

19. 设 A 为 n 阶实对称矩阵, S 是 n 阶非异实反对称矩阵且 AS = SA, 求证: $|A + S| \geq |S|$ , 且等号成立的充要条件是 A = O.

20. 证明: 谱分解定理之逆也成立, 即若酉空间 $V$ 上存在一组线性算子 $\{E_1, E_2, \cdots, E_k\}$ , 适合 $E_1 + E_2 + \cdots + E_k = I$ , $E_i E_j = 0 (i \neq j)$ , $E_i^2 = E_i = E_i^*$ , 并且线性算子 $\varphi = \lambda_1 E_1 + \lambda_2 E_2 + \cdots + \lambda_k E_k$ , 则 $\varphi$ 是正规算子.

21. 求证: $n$ 维酉空间 $V$ 上秩等于 1 的线性变换 $\varphi$ 是半正定自伴随算子的充要条件是它在某一组 (任一组) 标准正交基下的表示矩阵具有形式: $\overline{x}'x$ , 其中 $x$ 是 $n$ 维非零行向量.

22. 设 A 为 n 阶实对称矩阵, 求证: A 是半正定阵的充要条件是存在同阶实对称矩阵 B, 使得 $A = B^{2}$ .

23. 设 A 为 $m \times n$ 列满秩实矩阵, $P = A(A' A)^{-1} A'$ , 求证: 存在 $m \times n$ 实矩阵 Q, 使得 $I_{n} = Q' Q$ 且 $P = QQ'$ .

24. 设 A 为 n 阶实矩阵, 求证: 存在可逆矩阵 Q, 使得 $QAQ = A'$ .

25. 设 A 为 $m \times n$ 实矩阵, 求证: 对任意的 m 维实列向量 $\beta$ , n 元线性方程组 $A'Ax = A'\beta$ 一定有解.

### 9.15.2 训练题答案

#### 一、单选题

1. 应选择 (C).

2. 应选择 (A). 两两正交的非零向量组线性无关.

3. 应选择 (A). 正交相似的矩阵特征值相同, 计算后可知应排除 (C) 和 (D). 又正交相似于实对角矩阵的必为实对称矩阵, 也应排除 (B).

4. 应选择 (D).

5. 应选择 (A). 相似的矩阵具有相同的特征值, 而特征值相同的实对称矩阵必正交相似.

6. 应选择 (B).

7. 应选择 (C).

8. 应选择 (B). 保持范数一定保持内积.

9. 应选择 (C).

10. 应选择 (C). 只有当 $e_{1}, \cdots, e_{n}$ 是标准正交基时, (C) 中的结论才成立.

11. 应选择 (C). 正交矩阵的每一个行向量和每一个列向量都是单位向量.

12. 应选择 (B).

13. 应选择 (C).

14. 应选择 (B).

15. 应选择 (B). 对称矩阵的线性组合仍是对称矩阵.

16. 应选择 (D). 因为 (D) 中的变换是正交相似变换, 所以变换后的矩阵仍是正交矩阵.

17. 应选择 (D).

18. 应选择 (A). 非对称的二阶实正规矩阵 A 必正交相似于 $B = \begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ ，其中 $b \neq 0$ 。若 $|A| = 1$ ，则 $|B| = a^{2} + b^{2} = 1$ ，于是 $B'B = I_{2}$ ，即 B 是正交矩阵，从而 A 也是正交矩阵。

19. 应选择 (B).

20. 应选择 (C). 任取 $V$ 中向量 $\alpha, \beta$ , 设其坐标向量分别为 $x, y$ , 则 $(\varphi(\alpha), \beta) = (Ax)'Gy = x'A'Gy$ , $(\alpha, \varphi(\beta)) = x'G(Ay) = x'GAy$ . 因此 $\varphi$ 是自伴随算子当且仅当对任意的 $x, y \in \mathbb{R}^n$ , $x'A'Gy = x'GAy$ 成立, 分别取 $x, y$ 为标准单位列向量可知, 这也当且仅当 $A'G = GA$ 成立.

#### 二、填空题

1. 经计算可知这些向量的秩为 3, 因此它们生成的子空间的维数为 3, 其正交补空间的维数等于 1.

2. 否. 由定义可求出 $\varphi^{*}(y) = (\beta, y)\alpha$ , 于是 $\varphi^{*}\varphi(x) = \varphi^{*}((x, \alpha)\beta) = (x, \alpha)(\beta, \beta)\alpha$ , $\varphi\varphi^{*}(x) = \varphi((\beta, x)\alpha) = (\beta, x)(\alpha, \alpha)\beta$ . 显然 $\varphi^{*}\varphi$ 与 $\varphi\varphi^{*}$ 一般不相等.

3. 由条件可知 $\alpha_{1} = e_{1} + 2e_{2}, \alpha_{2} = -e_{1} + e_{2}$ , 显然它们线性无关.

4. 由于 $\beta$ 的坐标向量为 $y = (2,3,-1)'$ , 故 $\|\beta\| = (y'A y)^{\frac{1}{2}} = \sqrt{13}$ .

5. 不一定. 只有当 A 是正交矩阵时结论才成立.

6. 经计算可得 a = e = -6/7.

7. 经计算可知 A 的特征值为 2,3, 因此 A 的正交相似标准型为 diag{2,3}.

8. 由例 9.41 可知 A 是一个镜像矩阵, 故 A 的正交相似标准型为 $diag\{-1,1,1,1\}$ .

9. 经验算后可知是标准正交基.

10. 由于幂零矩阵的特征值全是零, 故 A 的正交相似标准型为零矩阵, 从而 A = O.

11. $\left(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right)^{\prime}$ 或 $\left(-\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right)^{\prime}$ 

12. 实矩阵若有虚特征值必共轭成对出现, 又 $\mathbf{A}$ 的特征值之积等于 $|\mathbf{A}| = 1$ , 由此可求得 $\mathbf{A}$ 的其余特征值为 $\frac{1}{2} - \frac{\sqrt{3}}{2}\mathrm{i}, 1$ .

13. 不一定. 例如:

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{array} \right),
$$

极小多项式都是 $(\lambda - 1)(\lambda - 2)$ ，但特征多项式不同，故不相似。

14. 相似. 两个实对称矩阵的特征值相同必正交相似.

15. 注意到 $\varphi$ 可逆, 故限制变换 $\varphi|_{V_0}$ 是单射, 从而是线性同构. 于是 $\varphi^{-1}(V_0) = V_0$ , 即 $V_0$ 是 $\varphi^{-1} = \varphi^*$ 的不变子空间, 从而 $V_0^{\perp}$ 也是 $\varphi = (\varphi^{*})^{*}$ 的不变子空间.

16. $V_{1}=(V_{1}^{\perp})^{\perp}=(V_{2}^{\perp})^{\perp}=V_{2}.$ 

17. 由定义可求得 $\varphi^{*}(B) = T^{\prime}B$ . 参考例9.29.

18. 对称正交矩阵正交相似于对角矩阵且主对角线上的元素为 1 或 -1, 故有 $n + 1$ 类.

19. 不一定. 因为未必有标准正交基使得 $\varphi$ 在这组基下的表示矩阵是对角矩阵. 如在二维实行向量空间中, 令 $v_{1} = (1,0), v_{2} = (1,1), \varphi(v_{1}) = v_{1}, \varphi(v_{2}) = 2v_{2}$ , 则可以验证 $\varphi^{*}\varphi \neq \varphi\varphi^{*}$ .

20. 它必是自伴随 (Hermite) 算子.

#### 三、解答题

1. 根据内积的性质经简单计算即得 $(x + y, x + y) + (x - y, x - y) = 2(x, x) + 2(y, y)$ .

2. $\alpha=(\alpha,e_{1})e_{1}+(\alpha,e_{2})e_{2}+\cdots+(\alpha,e_{n})e_{n}$ ，同理有 $\beta$ 的表达式，代入 $(\alpha,\beta)$ 中并利用内积的性质即得结论.

3. 设 $\gamma$ 到 $U = L(\eta_{1}, \cdots, \eta_{r})$ 的距离为 d，则 $\gamma = k_{1}\eta_{1} + \cdots + k_{r}\eta_{r} + de$ ，其中 e 为单位向量且 $e \perp V$ 。由假设可得

$$
(\eta_ {1}, \dots , \eta_ {r}, \gamma) = (\eta_ {1}, \dots , \eta_ {r}, e) C, \quad C = \left( \begin{array}{c c c c} 1 & & & k _ {1} \\ & \ddots & & \vdots \\ & & 1 & k _ {r} \\ & & & d \end{array} \right),
$$

故由向量组 Gram 矩阵的性质可得 $G(\eta_{1},\cdots,\eta_{r},\gamma)=C^{\prime}G(\eta_{1},\cdots,\eta_{r},e)C$ ，从而 $G=|C^{\prime}|$ $\left|\operatorname{diag}\{G(\eta_{1},\cdots,\eta_{r}),1\}\right|\cdot|C|=|C|^{2}G_{0}=d^{2}G_{0}$ ，于是 $d=\sqrt{\frac{G}{G_{0}}}$ 。这道题的几何意义是，一个平行 2m 面体的体积等于其底（平行 2(m-1) 面体）的体积乘以高。

4. (1) 显然 $\|\beta_{i}\|=\|\alpha_{i}-\alpha_{0}\|=d(1\leq i\leq n)$ ，又对任意的 $i\neq j, d^{2}=\|\alpha_{i}-\alpha_{j}\|^{2}=\|\beta_{i}-\beta_{j}\|^{2}=\|\beta_{i}\|^{2}+\|\beta_{j}\|^{2}-2(\beta_{i},\beta_{j})$ ，故 $(\beta_{i},\beta_{j})=d^{2}/2(1\leq i\neq j\leq n)$ . (2) 注意到 $\beta_{1},\cdots,\beta_{n}$ 的 Gram 矩阵 $G=G(\beta_{1},\cdots,\beta_{n})$ 的主对角元全为 $d^{2}$ ，其余元素全为 $d^{2}/2$ ，用求和法可计算出 $|G|=(n+1)d^{2n}/2^{n}>0$ ，故由例 9.5 可知， $\beta_{1},\cdots,\beta_{n}$ 线性无关，从而是 V 的一组基.

5. 由定义可得 $\varphi^{*}(y) = (y, \beta)\alpha$ . 显然在标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 下, $\varphi$ 的表示矩阵为 $E_{21}$ , 即第 (2,1) 元素为 1, 其余元素为零的基础矩阵, $\varphi^{*}$ 的表示矩阵为 $E_{12}$ .

6. 只要证明 $\varphi$ 是线性变换, 就能推出 $\varphi$ 是正交变换. 对任意的 $x, y, z \in V, a, b \in \mathbb{R}$ , 有

$$
\begin{array}{l} (\varphi (a \boldsymbol {x} + b \boldsymbol {y}) - a \varphi (\boldsymbol {x}) - b \varphi (\boldsymbol {y}), \varphi (z)) = (\varphi (a \boldsymbol {x} + b \boldsymbol {y}), \varphi (z)) - a (\varphi (\boldsymbol {x}), \varphi (z)) - b (\varphi (\boldsymbol {y}), \varphi (z)) \\ = (a \boldsymbol {x} + b \boldsymbol {y}, z) - a (\boldsymbol {x}, z) - b (\boldsymbol {y}, z) = 0, \\ \end{array}
$$

从而可得

$$
\begin{array}{l} \left\| \varphi (a x + b y) - a \varphi (x) - b \varphi (y) \right\| ^ {2} \\ = (\varphi (a \boldsymbol {x} + b \boldsymbol {y}) - a \varphi (\boldsymbol {x}) - b \varphi (\boldsymbol {y}), \varphi (a \boldsymbol {x} + b \boldsymbol {y})) - a (\varphi (a \boldsymbol {x} + b \boldsymbol {y}) - a \varphi (\boldsymbol {x}) - b \varphi (\boldsymbol {y}), \varphi (\boldsymbol {x})) \\ - b (\varphi (a x + b y) - a \varphi (x) - b \varphi (y), \varphi (y)) = 0. \\ \end{array}
$$

于是 $\varphi(ax+by)=a\varphi(x)+b\varphi(y)$ ，结论得证.

7. 由例 9.29 可得 $\varphi^{*}(X) = A^{\prime}X$ , 于是 $\varphi$ 是正交算子, 即 $\varphi^{*}\varphi = I_{V}$ 当且仅当 $A^{\prime}AX = X$ 对任意的 $X \in V$ 成立, 即当且仅当 $A^{\prime}A = I_{n}$ ; $\varphi$ 是自伴随算子, 即 $\varphi = \varphi^{*}$ 当且仅当 $AX = A^{\prime}X$ 对任意的 $X \in V$ 成立, 即当且仅当 $A = A^{\prime}$ .

8. 用反证法, 假设 $A$ 中存在元素皆为 $\frac{1}{2\sqrt{2}}$ 的 3 阶子矩阵 $B$ , 则那些与 $B$ 同行但不同列的元素按照原来的顺序构成一个 $3 \times 5$ 矩阵, 记为 $C$ . 由 $A$ 为正交矩阵可知, $C$ 的 3 个行向量 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 满足 $(\alpha_{i}, \alpha_{i}) = 5 / 8$ 且 $(\alpha_{i}, \alpha_{j}) = -3 / 8 (i \neq j)$ , 故 $CC' = \begin{pmatrix} 5 / 8 & -3 / 8 & -3 / 8 \\ -3 / 8 & 5 / 8 & -3 / 8 \\ -3 / 8 & -3 / 8 & 5 / 8 \end{pmatrix}$ . 用求和法可计算出 $|CC'| = -1 / 8$ , 这与 $CC'$ 是半正定阵矛盾.

9. 充分性显然成立, 下证必要性. 证法1: 由 $A' = A$ 可得 $I_n = AA' = A^2$ , 从而 $(A + I_n)(A - I_n) = O$ . 由 $A$ 正定可知 $A + I_n$ 也正定, 从而可逆, 于是 $A - I_n = O$ , 即 $A = I_n$ . 证法2: 由于 $A$ 是正定实对称矩阵, 故存在正交矩阵 $P$ , 使得 $P'AP = \Lambda = \text{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}$ , 其中 $\lambda_i > 0$ . 又 $A$ 为正交矩阵, 故 $\Lambda = P'AP$ 也是正交矩阵, 从而所有的 $\lambda_i = 1$ , 于是 $A = PI_nP' = I_n$ .

10. 由降阶公式可得 $|\lambda I_4 - A| = (\lambda - a - 1)^3 (\lambda - a + 3)$ , 再由-3是 $\pmb{A}$ 的单特征值可知 $a = 0$ , 于是 $\pmb{A}$ 的特征值为1(3重), -3(1重). 可求出特征值1的特征向量为 $\alpha_{1} = (1,1,1,1)^{\prime}$ , $\alpha_{2} = (1,1,-1,-1)^{\prime}$ , $\alpha_{3} = (1,-1,1,-1)$ ; 特征值-3的特征向量为 $\alpha_{4} = (1,-1,-1,1)^{\prime}$ . 注意到上述特征向量已经两两正交, 故单位化后即得正交矩阵 $P = \frac{1}{2}\left( \begin{array}{cccc}1 & 1 & 1 & 1\\ 1 & 1 & -1 & -1\\ 1 & -1 & 1 & -1\\ 1 & -1 & -1 & 1 \end{array} \right)$ , 使得 $P^{\prime}AP = \mathrm{diag}\{1,1,1,-3\}$ .

11. (1) 由条件可知, $\alpha_{1}, \alpha_{2}$ 是特征值 0 的特征向量, $\alpha_{3} = (1,1,1)^{\prime}$ 是特征值 3 的特征向量.
(2) 由 Gram-Schmidt 方法可将 $\alpha_{1}, \alpha_{2}$ 正交化, 然后再将两两正交的 3 个特征向量单位化, 最后得到正交矩阵 $Q = \begin{pmatrix} -\frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}} \\ \frac{2}{\sqrt{6}} & 0 & \frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}} \end{pmatrix}$ , 使得 $Q^{\prime}AQ = D = \mathrm{diag}\{0,0,3\}$ .

12. 由条件可知二次型的相伴实对称矩阵及其正交相似标准型分别为

$$
\boldsymbol {A} = \left( \begin{array}{c c c} 2 & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & 2 \end{array} \right), \quad \boldsymbol {P} ^ {\prime} \boldsymbol {A} \boldsymbol {P} = \left( \begin{array}{c c c} 1 & & \\ & 1 & \\ & & b \end{array} \right).
$$

由 $\operatorname{tr}(\mathbf{A}) = 2 + a + 2 = 1 + 1 + b$ 可得 $b = a + 2$ , 再由 $|\mathbf{A}| = b$ 可得 $b = 3a - 2$ , 故 $a = 2, b = 4$ . 可求出特征值 1 的特征向量为 $\alpha_{1} = (-1,1,0)^{\prime}, \alpha_{2} = (-1,0,1)^{\prime}$ ; 特征值 4 的特征向量为 $\alpha_{3} = (1,1,1)^{\prime}$ . 利用 Gram-Schmidt 方法将 $\alpha_{1}, \alpha_{2}$ 正交化, 然后再将两两正交的 3 个特征向量单

位化, 最后得到正交矩阵 $P = \begin{pmatrix} -\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & \frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{pmatrix}$ ，使得 $P'AP = diag\{1, 1, 4\}$ .

13. 设 P 为正交矩阵, 使得 $P^{\prime}AP = diag\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 其中 $\lambda_{1} = \lambda_{0}$ , 正交矩阵 P 的第一列可取为单位特征向量 $\alpha/\|\alpha\|$ . 于是 $Pe_{1}=\alpha/\|\alpha\|$ , 即 $P^{\prime}\alpha=\|\alpha\|e_{1}=(\|\alpha\|,0,\cdots,0)^{\prime}$ . 考虑如下正交相似变换:

$$
\begin{array}{l} \left( \begin{array}{c c} P ^ {\prime} & O \\ O & 1 \end{array} \right) \left( \begin{array}{c c} A - \lambda_ {0} I _ {n} & \alpha \\ \alpha^ {\prime} & 0 \end{array} \right) \left( \begin{array}{c c} P & O \\ O & 1 \end{array} \right) = \left( \begin{array}{c c} P ^ {\prime} (A - \lambda_ {0} I _ {n}) P & P ^ {\prime} \alpha \\ \alpha^ {\prime} P & 0 \end{array} \right) \\ \left( \begin{array}{c c} P ^ {\prime} & O \\ O & 1 \end{array} \right) \left( \begin{array}{c c} A - \lambda_ {0} I _ {n} & \alpha \\ \alpha^ {\prime} & 0 \end{array} \right) \left( \begin{array}{c c} P & O \\ O & 1 \end{array} \right) = \left( \begin{array}{c c} P ^ {\prime} (A - \lambda_ {0} I _ {n}) P & P ^ {\prime} \alpha \\ \alpha^ {\prime} P & 0 \end{array} \right) \\ \end{array}
$$

$$
= \left( \begin{array}{c c c c c} 0 & & & & \| \boldsymbol {\alpha} \| \\ & \lambda_ {2} - \lambda_ {0} & & & \\ & & \ddots & & \\ & & & \lambda_ {n} - \lambda_ {0} & \\ \| \boldsymbol {\alpha} \| & & & & 0 \end{array} \right),
$$

最后一个矩阵空白处均为 0. 两边取行列式即得 $\begin{vmatrix} A - \lambda_{0} I_{n} & \alpha \\ \alpha' & 0 \end{vmatrix} = -\|\alpha\|^{2} (\lambda_{2} - \lambda_{0}) \cdots (\lambda_{n} - \lambda_{0})$ ,
由此即得充要条件.

14. 注意到问题的条件和结论在同时合同变换 $A \mapsto C'AC, B \mapsto C'BC$ 下不改变，故由例 9.75 不妨从一开始就假设 $A = I_{n}, B = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ ，其中 $\lambda_{i} > 0$ 。由基本不等式可得

$$
| \boldsymbol {A} + \boldsymbol {B} | (\frac {1}{| \boldsymbol {A} |} + \frac {1}{| \boldsymbol {B} |}) = \prod_ {i = 1} ^ {n} (1 + \lambda_ {i}) \cdot (1 + \frac {1}{\lambda_ {1} \cdots \lambda_ {n}}) \geq 2 ^ {n} \prod_ {i = 1} ^ {n} \sqrt {\lambda_ {i}} \cdot \frac {2}{\sqrt {\lambda_ {1} \cdots \lambda_ {n}}} = 2 ^ {n + 1},
$$

等号成立当且仅当所有的 $\lambda_{i}=1$ ，即当且仅当 A=B.

15. 假设 $A + BB'$ 可逆, 考虑如下对称分块初等变换, 其中第一步是将第二分块行左乘 $B$ 加到第一分块行上, 再将第二分块列右乘 $B'$ 加到第一分块列上; 第二步是用 $A + BB'$ 对称地消去同行同列的分块 $B, B'$ :

$$
\left(\begin{array}{c c}A&O\\O&I _ {m}\end{array}\right)\rightarrow \left(\begin{array}{c c}A + B B ^ {\prime}&B\\B ^ {\prime}&I _ {m}\end{array}\right)\rightarrow \left(\begin{array}{c c}A + B B ^ {\prime}&O\\O&I _ {m} - B ^ {\prime} (A + B B ^ {\prime}) ^ {- 1} B\end{array}\right). \tag {9.22}
$$

(1) 设 A 正定, 则 $A + BB'$ 也正定, 从而 $B'(A + BB')^{-1}B$ 半正定. 由 (9.22) 式可知 $I_m - B'(A + BB')^{-1}B$ 正定, 于是由例 9.76 可得 $0 \leq |B'(A + BB')^{-1}B| < 1$ . 再由第 8 章解答题 6 可知, 上述不等式左边等号成立的充要条件是 $\mathrm{r}(B) < m$ . (2) 设 A 半正定, 先证必要性: 注意到 $B'(A + BB')^{-1}B$ 半正定, 再由 (9.22) 式可知 $I_m - B'(A + BB')^{-1}B$ 也半正定, 故 $B'(A + BB')^{-1}B$ 的所有特征值都落在 [0,1] 中. 又 $|B'(A + BB')^{-1}B| = 1$ , 于是其所有特征值都等于 1, 从而 $B'(A + BB')^{-1}B = I_m$ . 分别计算 (9.22) 式两边分块对角矩阵的秩可得 $\mathrm{r}(A) + m = \mathrm{r}(A + BB') = n$ , 故 $\mathrm{r}(A) = n - m$ . 再证充分性: 由 A 半正定以及 $\mathrm{r}(A) = n - m$ 可知, 存在非异实矩阵 C, 使得 $A = C \begin{pmatrix} I_{n-m} & O \\ O & O \end{pmatrix} C'$ . 令 $B = C \begin{pmatrix} O \\ I_m \end{pmatrix}$ , 则 $A + BB' = CC'$ 为正定阵, 且 $B'(A + BB')^{-1}B = (O - I_m)C'(CC')^{-1}C \begin{pmatrix} O \\ I_m \end{pmatrix} = I_m$ .

16. 由正定阵和半正定阵的性质可知, $A_{r}, B_{r}$ 都是正定阵, $A_{r} - B_{r}$ 是半正定阵, 从而由例9.76即得结论.

17. 必要性显然成立, 下证充分性. 若 $\varphi$ 保持向量的正交性不变, 则由例 9.110 可知, 存在正实数 $k$ , 使得 $\varphi^{*}\varphi = kI_{V}$ . 因此对任意的向量 $\alpha, \beta$ , 有 $(\varphi(\alpha), \varphi(\beta)) = (\varphi^{*}\varphi(\alpha), \beta) = k(\alpha, \beta)$ , 特别地, $\| \varphi(\alpha) \| = \sqrt{k} \| \alpha \|$ . 于是对任意的非零向量 $\alpha, \beta$ , 有

$$
\cos \theta_ {\varphi (\alpha), \varphi (\beta)} = \frac {(\varphi (\alpha) , \varphi (\beta))}{\| \varphi (\alpha) \| \| \varphi (\beta) \|} = \frac {(\alpha , \beta)}{\| \alpha \| \| \beta \|} = \cos \theta_ {\alpha , \beta},
$$

若将夹角规定在 $[0, \pi]$ 中，则可得 $\theta_{\varphi(\alpha), \varphi(\beta)} = \theta_{\alpha, \beta}$ ，即 $\varphi$ 保持向量的夹角不变.

18. 特征值是实正规矩阵在正交相似关系下的全系不变量. 由实正规矩阵 $A, B$ 相似可知它们的特征值相同, 从而它们必正交相似.

19. 证法 1 (类似例 8.44 的证法 2): 由例 8.17 以及 S 的非异性可知 $|S| > 0$ , 从而只需证明 $|I_{n} + AS^{-1}| \geq 1$ , 等号成立当且仅当 $AS^{-1} = O$ 即可. 由 AS = SA 以及 S 的反对称性容易验证 $AS^{-1}$ 也是实反对称矩阵, 从而由例 8.45 即得结论. 证法 2: 将 A 看成是 Hermite 矩阵, S 看成是斜 Hermite 矩阵, 由于 AS = SA, 故由例 9.124 可知 A, S 可同时酉对角化, 剩余的证明类似于例 8.44 的证法 3, 请读者自行补充完整. 证法 3: 由于 A, S 都是实正规矩阵且 AS = SA, 故由例 9.125 可知 A, S 可同时正交标准化, 剩余的证明类似于例 8.44 的证法 4, 请读者自行补充完整. 事实上, 我们还可以把例 8.44 的结论推广如下: 设 A 是 n 阶可逆实对称矩阵, S 是 n 阶实反对称矩阵且 AS = SA, 则当 $|A| > 0$ 时, $|A + S| \geq |A|$ ; 当 $|A| < 0$ 时, $|A + S| \leq |A|$ , 且等号成立的充要条件都是 S = O. 上述推广的证明也请读者自行补充完整.

20. 直接验证即得结论.

21. 先证必要性. $\varphi$ 在任一组标准正交基下的表示矩阵 $H$ 是一个秩为 1 的半正定 Hermite 矩阵, 故存在非异复矩阵 $C$ , 使得 $H = \overline{C}' \operatorname{diag}\{1,0,\cdots,0\} C$ . 令 $x = (1,0,\cdots,0)C$ , 则 $x$ 是非零行向量, 使得 $H = \overline{x}'x$ . 再证充分性. 根据线性变换与矩阵的一一对应, 我们只要证明 $\overline{x}'x$ 是秩为 1 的半正定 Hermite 矩阵, 而这是显然的.

22. 充分性由 $A = B^2 = B'B$ 即得. 必要性由例9.61即得.

23. 注意到 $A^{\prime}A$ 为 $n$ 阶半正定实对称矩阵且 $\mathrm{r}(A^{\prime}A) = \mathrm{r}(A) = n$ , 故 $A^{\prime}A$ 为正定阵. 令 $Q = A(A^{\prime}A)^{-\frac{1}{2}}$ , 则 $P = QQ'$ 且 $Q^{\prime}Q = (A^{\prime}A)^{-\frac{1}{2}}A^{\prime}A(A^{\prime}A)^{-\frac{1}{2}} = I_{n}$ .

24. 设 $A = Q'S$ 为极分解, 其中 $Q$ 为正交矩阵, $S$ 为半正定实对称矩阵, 则 $QAQ = Q(Q'S)Q = SQ = (Q'S)' = A'$ .

25. 证法1: 由例3.76可知, $\mathrm{r}(A) = \mathrm{r}(A'A) \leq \mathrm{r}(A'A; A'\beta) = \mathrm{r}\left(A'(A; \beta)\right) \leq \mathrm{r}(A') = \mathrm{r}(A)$ , 故有 $\mathrm{r}(A'A; A'\beta) = \mathrm{r}(A'A)$ , 从而线性方程组 $A'Ax = A'\beta$ 一定有解. 证法2: 我们断言 $z = A^{\dagger}\beta$ 一定是线性方程组 $A'Ax = A'\beta$ 的解, 其中 $A^{\dagger}$ 是 $A$ 的广义逆. 事实上, 由例9.139可知, $Az = AA^{\dagger}\beta$ 是 $\beta$ 在 $\operatorname{Im} A$ 上的正交投影, 因此 $(\beta - AA^{\dagger}\beta) \perp \operatorname{Im} A$ . 特别地, $\beta - AA^{\dagger}\beta$ 与 $A$ 的所有列向量都正交, 从而 $A'(\beta - AA^{\dagger}\beta) = 0$ , 于是 $A'AA^{\dagger}\beta = A'\beta$ , 即 $z = A^{\dagger}\beta$ 是线性方程组 $A'Ax = A'\beta$ 的解.
