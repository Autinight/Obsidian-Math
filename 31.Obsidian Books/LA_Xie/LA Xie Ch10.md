# 第10章 双线性型

## § 10.1 基本概念

### 10.1.1 对偶空间

#### 1. 对偶空间

设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, 由 $V$ 到 $\mathbb{F}$ 上的线性映射 (即线性函数) 全体组成的线性空间 $V^{*}$ 称为 $V$ 的共轭空间. 当 $V$ 是有限维空间时, $V^{*}$ 称为 $V$ 的对偶空间.

#### 2. 对偶基

设 V 是数域 F 上的 n 维线性空间, $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 的一组基, V 上的线性函数 $f_{i}$ 定义为 $f_{i}(e_{i}) = 1$ , $f_{i}(e_{j}) = 0 (j \neq i)$ , 则 $f_{1}, f_{2}, \cdots, f_{n}$ 是对偶空间 $V^{*}$ 的一组基, 称为 $e_{1}, e_{2}, \cdots, e_{n}$ 的对偶基. 特别地, $\dim V^{*} = \dim V$ .

#### 3. 记号（，）

定义 $\langle f, x \rangle = f(x)$ , 其中 $f \in V^{*}, x \in V$ , 则 $\langle f, - \rangle = f$ 是 $V$ 上的线性函数, $\langle -, x \rangle$ 是 $V^{*}$ 上的线性函数. 定义线性映射 $\eta: V \to (V^{*})^{*} = V^{**}, \eta(x) = \langle -, x \rangle$ .

#### 4. 定理

当 $V$ 是有限维空间时, 线性映射 $\eta: V \to V^{**}$ 是线性同构. 如果把 $V$ 与 $V^{**}$ 在这个同构下等同起来, 则 $V$ 可以看成是 $V^{*}$ 的对偶空间, 从而 $V$ 与 $V^{*}$ 互为对偶.

#### 5. 定理

设 $V, U$ 是数域 $\mathbb{F}$ 上的线性空间, $\varphi$ 是 $V$ 到 $U$ 的线性映射, 则存在唯一的 $U^{*}$ 到 $V^{*}$ 的线性映射 $\varphi^{*}$ , 使得对任意的 $x \in V$ , $f \in U^{*}$ 满足等式:

$$
\langle \varphi^ {*} (\boldsymbol {f}), \boldsymbol {x} \rangle = \langle \boldsymbol {f}, \varphi (\boldsymbol {x}) \rangle . \tag {10.1}
$$

线性映射 $\varphi^{*}$ 称为 $\varphi$ 的对偶映射. 对偶映射具有下列性质:

(1) $(k_{1}\varphi_{1} + k_{2}\varphi_{2})^{*} = k_{1}\varphi_{1}^{*} + k_{2}\varphi_{2}^{*}$ , 其中 $\varphi_{1},\varphi_{2}\in \mathcal{L}(V,U),k_{1},k_{2}\in \mathbb{F};$ 

(2) $(\psi\varphi)^{*}=\varphi^{*}\psi^{*}$ ，其中 $\varphi\in\mathcal{L}(V,U)$ ， $\psi\in\mathcal{L}(U,W)$ ;

(3) 若 $\varphi: V \to U$ 是线性同构, 则 $\varphi^{*}: U^{*} \to V^{*}$ 也是线性同构, 此时 $(\varphi^{*})^{-1} = (\varphi^{-1})^{*}$ .

#### 6. 定理

设 V, U 是有限维线性空间, $\varphi: V \rightarrow U$ 是线性映射, $\varphi^{*}$ 是 $\varphi$ 的对偶映射.

(1) 设 $\{e_{1},\cdots,e_{n}\}$ 是 V 的一组基, $\{f_{1},\cdots,f_{n}\}$ 是其对偶基; $\{u_{1},\cdots,u_{m}\}$ 是 U 的一组基, $\{g_{1},\cdots,g_{m}\}$ 是其对偶基; $\varphi$ 在基 $\{e_{1},\cdots,e_{n}\}$ 和基 $\{u_{1},\cdots,u_{m}\}$ 下的表示矩阵是 A, 则 $\varphi^{*}$ 在基 $\{g_{1},\cdots,g_{m}\}$ 和基 $\{f_{1},\cdots,f_{n}\}$ 下的表示矩阵是 $A'$ .

(2) $\varphi$ 是单映射的充要条件是 $\varphi^{*}$ 是满映射, $\varphi$ 是满映射的充要条件是 $\varphi^{*}$ 是单映射. 特别地, $\varphi$ 是线性同构的充要条件是 $\varphi^{*}$ 也是线性同构.

### 10.1.2 双线性型

#### 1. 双线性型

设 $U, V$ 是数域 $\mathbb{F}$ 上的线性空间, $U \times V$ 是它们的积集合, 若存在 $U \times V$ 到 $\mathbb{F}$ 的映射 $g$ 适合下列条件:

(1) 对任意的 $x, y \in U, z \in V, \lambda \in F,$ 

$$
g (\boldsymbol {x} + \boldsymbol {y}, \boldsymbol {z}) = g (\boldsymbol {x}, \boldsymbol {z}) + g (\boldsymbol {y}, \boldsymbol {z}), \quad g (\lambda \boldsymbol {x}, \boldsymbol {z}) = \lambda g (\boldsymbol {x}, \boldsymbol {z});
$$

(2) 对任意的 $x \in U, z, w \in V, \lambda \in F,$ 

$$
g (\boldsymbol {x}, \boldsymbol {z} + \boldsymbol {w}) = g (\boldsymbol {x}, \boldsymbol {z}) + g (\boldsymbol {x}, \boldsymbol {w}), \quad g (\boldsymbol {x}, \lambda \boldsymbol {z}) = \lambda g (\boldsymbol {x}, \boldsymbol {z}),
$$

则称 g 是 U 和 V 上的双线性函数或双线性型.

当 U, V 是有限维线性空间时, 任一 $U \times V$ 上的双线性型均可用矩阵来表示. 记 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}$ 是 U 的基, $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ 是 V 的基, 令 $a_{ij} = g(\alpha_{i}, \beta_{j})$ , 则

$$
\boldsymbol {G} = \left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right)
$$

称为 g 在给定基下的表示矩阵. 设 $\alpha = x_{1}\alpha_{1} + x_{2}\alpha_{2} + \cdots + x_{m}\alpha_{m}, \beta = y_{1}\beta_{1} + y_{2}\beta_{2} + \cdots + y_{n}\beta_{n}, x = (x_{1}, x_{2}, \cdots, x_{m})'$ , $y = (y_{1}, y_{2}, \cdots, y_{n})'$ 分别为 $\alpha, \beta$ 的坐标向量, 则

$$
g (\alpha , \beta) = x ^ {\prime} G y.
$$

表示矩阵 G 的秩称为双线性型 g 的秩, 记为 $\mathrm{r}(g)$ .

#### 2. 定理

设 g 是有限维线性空间 U, V 上的双线性型，则总存在 U, V 的基，使得 g 在这两组基下的表示矩阵为相抵标准型 $\begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ ，其中 $r = r(g)$ .

#### 3. 根子空间

设 g 是线性空间 U, V 上的双线性型, 令

$$
L = \{\pmb {x} \in U \mid g (\pmb {x}, \pmb {y}) = 0 \text {对一切} \pmb {y} \in V \text {成立} \},
$$

$$
R = \{\pmb {y} \in V   |   g (\pmb {x}, \pmb {y}) = 0   \text {对一切}   \pmb {x} \in U   \text {成立} \},
$$

则 L 称为 g 的左根子空间, R 称为 g 的右根子空间.

若 g 的左、右根子空间都等于零，则称 g 是非退化的双线性型.

#### 4. 定理

设 g 是线性空间 U, V 上的双线性型, 则 g 非退化的充要条件是

$$
\dim U = \dim V = \mathrm{r} (g).
$$

等价地, g 非退化的充要条件是它的表示矩阵为可逆矩阵.

#### 5. 定理

设 $g_{1}, g_{2}$ 是线性空间 $U, V$ 上的两个非退化双线性型, 则存在 $U$ 上的可逆线性变换 $\varphi$ 及 $V$ 上的可逆线性变换 $\psi$ , 使得对一切 $x \in U, y \in V$ , 有

$$
g _ {2} (\varphi (\boldsymbol {x}), \boldsymbol {y}) = g _ {1} (\boldsymbol {x}, \boldsymbol {y}), \quad g _ {2} (\boldsymbol {x}, \psi (\boldsymbol {y})) = g _ {1} (\boldsymbol {x}, \boldsymbol {y}).
$$

### 10.1.3 纯量积

#### 1. 纯量积

设 g 是线性空间 U = V 上的双线性型, 称 g 是 V 上的一个纯量积 (或数量积).

#### 2. 对称型和交错型

设 g 是线性空间 V 上的纯量积, 若对任意的 $x, y \in V$ , 都有

$$
g (\boldsymbol {x}, \boldsymbol {y}) = g (\boldsymbol {y}, \boldsymbol {x}),
$$

则称 g 是 V 上的对称型; 若对任意的 $x, y \in V$ , 都有

$$
g (\boldsymbol {x}, \boldsymbol {y}) = - g (\boldsymbol {y}, \boldsymbol {x}),
$$

则称 g 是 V 上的交错型 (或反对称型).

#### 3. 正交

设 g 是线性空间 V 上的纯量积, $x, y \in V$ , 若 $g(x, y) = 0$ , 则称 x 左正交 (或左垂直) 于 y, 称 y 右正交 (或右垂直) 于 x, 记为 $x \perp y$ .

#### 4. 定理

设 $g$ 是线性空间 $V$ 上的纯量积, 若对任意的 $\pmb{x},\pmb{y}\in V$ 都有 $\pmb{x}\perp \pmb{y}$ 当且仅当 $\pmb {y}\perp \pmb{x}$ , 则 $g$ 必是对称型或交错型.

#### 5. 定理

设 $g_{1}, g_{2}$ 是线性空间 $V$ 上的非退化纯量积, 则存在 $V$ 上唯一的可逆线性变换 $\varphi$ , 使得对任意的 $\pmb{x}, \pmb{y} \in V$ , 都有

$$
g _ {2} (\varphi (x), y) = g _ {1} (x, y).
$$

### 10.1.4 交错型与辛空间

#### 1. 辛空间

设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, 若在 $V$ 上定义了一个非退化的交错型, 则称 $V$ 为辛空间.

#### 2. 定理

设 g 是 V 上的交错型, 则存在 V 的一组基, 使得 g 在这组基下的表示矩阵为分块对角矩阵:

$$
\operatorname{diag} \{S, \dots , S, 0, \dots , 0 \},
$$

其中 $S = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ ，这组基称为 V 的辛基.

#### 3. 辛变换

设 $V$ 是辛空间, $\varphi$ 是 $V$ 上的可逆线性变换, 若 $g(\varphi(x), \varphi(y)) = g(x, y)$ 对任意的 $x, y \in V$ 成立, 则称 $\varphi$ 是 $V$ 上的辛变换.

#### 4. 定理

设 $V$ 是数域 $\mathbb{F}$ 上的辛空间，则

(1) V 上的线性变换 $\varphi$ 是辛变换的充要条件是 $\varphi$ 将辛基变到辛基;

(2) 两个辛变换之积仍是辛变换;

(3) 恒等变换是辛变换;

(4) 辛变换的逆变换是辛变换.

### 10.1.5 对称型和正交空间

#### 1. 正交空间

设 $V$ 是数域 $\mathbb{F}$ 上的线性空间, 若在 $V$ 上定义了一个非退化的对称型, 则称 $V$ 为 (正则) 正交空间.

#### 2. 定理

设 $g$ 是 $V$ 上的对称型, 则必存在 $V$ 的一组基, 使得 $g$ 在这组基下的表示矩阵为对角矩阵:

$$
\operatorname{diag} \left\{b _ {1}, \dots , b _ {r}, 0, \dots , 0 \right\},
$$

这组基称为 V 的正交基.

#### 3. 迷向向量

设 x 是正交空间 V 中的非零向量, 若 $g(x, x) = 0$ , 则称 x 是迷向向量. 含有迷向向量的子空间称为迷向子空间.

#### 4. 正交变换

设 $V$ 是正交空间, $\varphi$ 是 $V$ 上的可逆线性变换, 若 $g(\varphi(x), \varphi(y)) = g(x, y)$ 对任意的 $x, y \in V$ 成立, 则称 $\varphi$ 是 $V$ 上的正交变换.

#### 5. 定理

设 V 是数域 F 上的正交空间, 则

(1) 两个正交变换之积是正交变换;

(2) 恒等变换是正交变换;

(3) 正交变换的逆变换是正交变换.

## § 10.2 线性函数与对偶空间

线性空间的对偶空间是一个重要的概念, 它在后续的专业课程以及物理学等领域中都有着广泛的应用. 通常的高等代数课程只讲授数域上的有限维线性空间理论, 对无限维线性空间的情形涉及不多, 比如一般并不给出无限维线性空间中基的定义及其存在性证明 (这需要集合论中的选择公理或 Zorn 引理). 因此除非特意指明, 本章的大部分例题一般都在有限维线性空间的范畴内进行讨论. 例如, 教材 [1] 给出了 §§ 10.1.1 定理 6 (2) 在有限维线性空间情形的证明, 但只要建立了无限维线性空间中基的概念及其存在性, 同样可证明 (2) 对无限维线性空间也成立. 然而, 只有当 $V$ 是有限维线性空间时, 才能由对偶基的存在性推出 $\dim V^{*} = \dim V$ 成立; 当 $V$ 是无限维线性空间时, 上述等式将不再成立, 并且 §§ 10.1.1 定理 4 中的 $\eta: V \to V^{**}$ 也不再是线性同构. 由于这些结论的证明涉及到集合论和抽象代数的一些理论, 故这里不准备展开阐述, 有兴趣的读者可参考 [5].

例 10.1 设 V 是数域 F 上的线性空间 (不必假设维数有限), f, g 是 V 上的非零线性函数, 求证: f 和 g 线性相关的充要条件是 Ker f = Ker g.

证明 若 $f = kg$ , 则显然 $\operatorname{Ker} f = \operatorname{Ker} g$ . 下证充分性. 由 $f \neq 0$ 可知, 存在 $\alpha \in V$ , 使得 $f(\alpha) \neq 0$ , 故可设 $g(\alpha) = kf(\alpha)$ . 对任意的 $v \in V$ , 若设 $f(v) = cf(\alpha)$ , 则 $f(v - c\alpha) = 0$ , 即 $v - c\alpha \in \operatorname{Ker} f = \operatorname{Ker} g$ , 从而 $g(v - c\alpha) = 0$ , 故 $g(v) = cg(\alpha)$ . 因此, 对任意的 $v \in V$ 有

$$
\boldsymbol {g} (\boldsymbol {v}) = c \boldsymbol {g} (\boldsymbol {\alpha}) = c k \boldsymbol {f} (\boldsymbol {\alpha}) = k c \boldsymbol {f} (\boldsymbol {\alpha}) = k \boldsymbol {f} (\boldsymbol {v}),
$$

于是 g = kf，即 f 和 g 线性相关。□

例 10.2 设 V 是数域 F 上的 n 维线性空间, f, g 是 V 上的非零线性函数. 求证: 若 f, g 线性无关, 则对任意的 $v \in V$ , 存在分解 $v = u + w$ , 使得 $f(v) = f(w)$ , $g(v) = g(u)$ .

证明 设 $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 的一组基，则 $\alpha = \sum_{i=1}^{n} c_{i} e_{i} \in \operatorname{Ker} f$ 当且仅当

$$
0 = \boldsymbol {f} (\boldsymbol {\alpha}) = \boldsymbol {f} \left(\sum_ {i = 1} ^ {n} c _ {i} \boldsymbol {e} _ {i}\right) = \sum_ {i = 1} ^ {n} c _ {i} \boldsymbol {f} (\boldsymbol {e} _ {i}),
$$

换言之, $\alpha \in \operatorname{Ker} f$ 当且仅当 $\alpha$ 的坐标向量 $(c_{1}, c_{2}, \cdots, c_{n})'$ 是线性方程 $f(e_{1})x_{1} + f(e_{2})x_{2} + \cdots + f(e_{n})x_{n} = 0$ 的解. 由于 $f, g$ 都是非零线性函数, 故由线性映射的维数公式可知 $\dim \operatorname{Ker} f = n - 1$ , $\dim \operatorname{Ker} g = n - 1$ . 根据一开始的说明可知, $\operatorname{Ker} f \cap \operatorname{Ker} g$ 是下列联立线性方程组的解空间:

$$
\left\{ \begin{array}{l} f (e _ {1}) x _ {1} + f (e _ {2}) x _ {2} + \dots + f (e _ {n}) x _ {n} = 0, \\ g (e _ {1}) x _ {1} + g (e _ {2}) x _ {2} + \dots + g (e _ {n}) x _ {n} = 0. \end{array} \right.
$$

若上述方程组的系数矩阵的秩等于1, 则存在 $k \in \mathbb{F}$ , 使得 $\pmb{g}(\pmb{e}_i) = k\pmb{f}(\pmb{e}_i) (1 \leq i \leq n)$ , 于是 $\pmb{g} = k\pmb{f}$ , 这与 $\pmb{f}, \pmb{g}$ 线性无关矛盾. 因此上述方程组的系数矩阵的秩等于2, 从而 $\dim (\operatorname{Ker} \pmb{f} \cap \operatorname{Ker} \pmb{g}) = n - 2$ . 再由交和空间的维数公式可知

$$
\begin{array}{l} \dim (\operatorname{Ker} \boldsymbol {f} + \operatorname{Ker} \boldsymbol {g}) = \dim \operatorname{Ker} \boldsymbol {f} + \dim \operatorname{Ker} \boldsymbol {g} - \dim (\operatorname{Ker} \boldsymbol {f} \cap \operatorname{Ker} \boldsymbol {g}) \\ = (n - 1) + (n - 1) - (n - 2) = n = \dim V, \\ \end{array}
$$

于是 $V = \operatorname{Ker} f + \operatorname{Ker} g$ . 因此对任意的 $v \in V$ , 存在分解 $v = u + w$ , 其中 $u \in \operatorname{Ker} f$ , $w \in \operatorname{Ker} g$ , 使得 $f(v) = f(w)$ , $g(v) = g(u)$ . □

注 由例 10.2 的证明方法不难得到例 10.1 在有限维线性空间情形的另一证明,请读者自行补充完整.

例 10.3 设 V 是数域 F 上的 n 维线性空间, U 是 V 的非平凡子空间, 求证: 必存在 V 上的线性函数 $f_{i} (1 \leq i \leq r)$ , 使得 $U = \bigcap_{i=1}^{r} \operatorname{Ker} f_{i}$ .

证明 设 $e_{r+1},\cdots,e_{n}$ 是 U 的一组基, 将它扩张为 V 的一组基 $e_{1},\cdots,e_{r},e_{r+1},\cdots,e_{n}$ . 设 $f_{1},f_{2},\cdots,f_{n}$ 为上述基的对偶基, 即满足 $f_{i}(e_{j})=\delta_{ij}$ , 则不难验证 $\operatorname{Ker}f_{i}=L(e_{1},\cdots,e_{i-1},e_{i+1},\cdots,e_{n})$ , 于是 $U=L(e_{r+1},\cdots,e_{n})=\bigcap_{i=1}^{r}\operatorname{Ker}f_{i}$ . ☐

例 10.4 设 U, V 是数域 F 上的线性空间 (不必假设维数有限), $U^{*}$ , $V^{*}$ 分别是它们的共轭空间. 求证:

$$
U ^ {*} \oplus V ^ {*} \cong (U \oplus V) ^ {*}.
$$

证明 设 $f_{1} \in U^{*}, f_{2} \in V^{*}$ ，定义 f 为 $U \oplus V$ 上的线性函数：

$$
\boldsymbol {f} (\boldsymbol {x} + \boldsymbol {y}) = \boldsymbol {f} _ {1} (\boldsymbol {x}) + \boldsymbol {f} _ {2} (\boldsymbol {y}), \quad \boldsymbol {x} \in U, \boldsymbol {y} \in V.
$$

令 $\varphi(f_1 + f_2) = f$ , 则不难验证 $\varphi$ 是 $U^* \oplus V^* \to (U \oplus V)^*$ 的线性映射. 另一方面, 假设 $f$ 是 $U \oplus V$ 上的线性函数, 令 $f_1, f_2$ 分别是 $f$ 在 $U, V$ 上的限制, 定义 $\psi$ 是 $(U \oplus V)^* \to U^* \oplus V^*$ 的线性映射: $\psi(f) = f_1 + f_2$ . 容易验证 $\psi\varphi$ 和 $\varphi\psi$ 分别是 $U^* \oplus V^*$ 和 $(U \oplus V)^*$ 上的恒等映射, 因此 $\varphi$ 是线性同构. □

例 10.5 设 $V_{1}$ 是线性空间 V (不必假设维数有限) 的子空间, 记

$$
V _ {1} ^ {\perp} = \{\boldsymbol {f} \in V ^ {*} | \langle \boldsymbol {f}, V _ {1} \rangle = 0 \}.
$$

求证: $V_{1}^{\perp}$ 是 $V^{*}$ 的子空间, 且若 $V_{2}$ 是 $V$ 的另外一个子空间, 则

$$
V _ {1} ^ {\perp} \cap V _ {2} ^ {\perp} = (V _ {1} + V _ {2}) ^ {\perp}.
$$

证明 容易验证 $V_{1}^{\perp}$ 是子空间. 若 $U, W$ 是 $V$ 的子空间且 $U \subseteq W$ , 显然有 $W^{\perp} \subseteq U^{\perp}$ . 因此 $(V_{1} + V_{2})^{\perp} \subseteq V_{1}^{\perp}, (V_{1} + V_{2})^{\perp} \subseteq V_{2}^{\perp}$ , 从而 $(V_{1} + V_{2})^{\perp} \subseteq V_{1}^{\perp} \cap V_{2}^{\perp}$ . 反之, 若 $\pmb{f} \in V_{1}^{\perp} \cap V_{2}^{\perp}$ , 则对任意的 $\pmb{v}_{1} \in V_{1}, \pmb{v}_{2} \in V_{2}, \langle \pmb{f}, \pmb{v}_{1} + \pmb{v}_{2} \rangle = \pmb{f}(\pmb{v}_{1}) + \pmb{f}(\pmb{v}_{2}) = 0$ , 因此 $\pmb{f} \in (V_{1} + V_{2})^{\perp}$ , 即有 $V_{1}^{\perp} \cap V_{2}^{\perp} \subseteq (V_{1} + V_{2})^{\perp}$ . 这就证明了后一个结论. □

例 10.6 设 V 是数域 F 上的 n 维线性空间, $V_{1}$ 是 V 的子空间, 求证:

$$
\dim V = \dim V _ {1} + \dim V _ {1} ^ {\perp}.
$$

证明 取 $V_{1}$ 的一组基 $e_{1},\cdots,e_{r}$ ，并扩张为 V 的一组基 $e_{1},e_{2},\cdots,e_{n}$ ，再取其对偶基 $f_{1},f_{2},\cdots,f_{n}$ 。由对偶基的定义可知 $f_{j}(e_{i})=0(1\leq i\leq r,r+1\leq j\leq n)$ ，从而 $f_{j}(V_{1})=0$ ，即 $f_{j}\in V_{1}^{\perp}(r+1\leq j\leq n)$ 。另一方面，任取 $f\in V_{1}^{\perp}$ ，设 $f=a_{1}f_{1}+a_{2}f_{2}+\cdots+a_{n}f_{n}$ ，依次作用上 $e_{1},\cdots,e_{r}$ 可得 $a_{1}=\cdots=a_{r}=0$ ，故 f 是 $f_{r+1},\cdots,f_{n}$ 的线性组合。因此 $f_{r+1},\cdots,f_{n}$ 是 $V_{1}^{\perp}$ 的一组基，特别地， $\dim V_{1}^{\perp}=n-r$ ，故结论成立。☐

例 10.7 设 $V_{1}, V_{2}$ 是 n 维线性空间 V 的子空间, 将 V 看成是 $V^{*}$ 的对偶空间.
求证:

$$
(V _ {1} ^ {\perp}) ^ {\perp} = V _ {1}, (V _ {1} \cap V _ {2}) ^ {\perp} = V _ {1} ^ {\perp} + V _ {2} ^ {\perp}.
$$

证明 显然 $V_{1} \subseteq (V_{1}^{\perp})^{\perp}$ . 由例 10.6 可知 $\dim V_{1}^{\perp} = n - \dim V_{1}$ , 故 $\dim (V_1^\perp)^\perp = n - \dim V_1^\perp = \dim V_1$ , 于是 $(V_{1}^{\perp})^{\perp} = V_{1}$ . 由例 10.5 和第一个结论可知,

$$
(V _ {1} ^ {\perp} + V _ {2} ^ {\perp}) ^ {\perp} = (V _ {1} ^ {\perp}) ^ {\perp} \cap (V _ {2} ^ {\perp}) ^ {\perp} = V _ {1} \cap V _ {2},
$$

再次由第一个结论可得 $(V_{1} \cap V_{2})^{\perp} = ((V_{1}^{\perp} + V_{2}^{\perp})^{\perp})^{\perp} = V_{1}^{\perp} + V_{2}^{\perp}$ . □

例 10.8 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, $\varphi^{*}$ 是 $\varphi$ 的对偶变换, 求证:

$$
\operatorname{Im} \varphi^ {*} = (\operatorname{Ker} \varphi) ^ {\perp}.
$$

证法1 假设 $f \in \operatorname{Im} \varphi^{*}$ , 则存在 $g \in V^{*}$ , 使得 $f = \varphi^{*}(g)$ . 对 $\operatorname{Ker} \varphi$ 中任一向量 $x$ , 有

$$
\langle \boldsymbol {f}, \boldsymbol {x} \rangle = \left\langle \varphi^ {*} (\boldsymbol {g}), \boldsymbol {x} \right\rangle = \left\langle \boldsymbol {g}, \varphi (\boldsymbol {x}) \right\rangle = 0.
$$

因此 $f \in (\mathrm{Ker} \varphi)^{\perp}$ ，从而 $\mathrm{Im} \varphi^{*} \subseteq (\mathrm{Ker} \varphi)^{\perp}$ .

另一方面, 设 $\dim \operatorname{Ker} \varphi = k$ , 则由例 10.6 可得 $\dim (\operatorname{Ker} \varphi)^\perp = n - k$ . 设 $\varphi$ 在 $V$ 的一组基 $\{\boldsymbol{e}_1, \cdots, \boldsymbol{e}_n\}$ 下的表示矩阵为 $\boldsymbol{A}$ , 则 $\varphi^*$ 在 $V^*$ 的对偶基 $\{\boldsymbol{f}_1, \cdots, \boldsymbol{f}_n\}$ 下的表示矩阵为 $\boldsymbol{A}'$ . 于是 $\dim \operatorname{Im} \varphi^* = r(\boldsymbol{A}') = r(\boldsymbol{A}) = \dim \operatorname{Im} \varphi = n - k$ , 从而可得 $\operatorname{Im} \varphi^* = (\operatorname{Ker} \varphi)^\perp$ .

证法2 由例10.7可知, 我们只要证明 $\operatorname{Ker} \varphi = (\operatorname{Im} \varphi^{*})^{\perp}$ 即可. 若 $x \in \operatorname{Ker} \varphi$ , 则对任意的 $\varphi^{*}(f) \in \operatorname{Im} \varphi^{*}$ , 有 $\langle \varphi^{*}(f), x \rangle = \langle f, \varphi(x) \rangle = 0$ , 因此 $x \in (\operatorname{Im} \varphi^{*})^{\perp}$ , 即 $\operatorname{Ker} \varphi \subseteq (\operatorname{Im} \varphi^{*})^{\perp}$ . 另一方面, 任取 $x \in (\operatorname{Im} \varphi^{*})^{\perp}$ , 则对任意的 $\varphi^{*}(f) \in \operatorname{Im} \varphi^{*}$ , 有 $0 = \langle \varphi^{*}(f), x \rangle = \langle f, \varphi(x) \rangle$ . 由 $f$ 的任意性可知 $\varphi(x) = 0$ , 即 $x \in \operatorname{Ker} \varphi$ , 从而 $(\operatorname{Im} \varphi^{*})^{\perp} \subseteq \operatorname{Ker} \varphi$ , 于是结论得证. □

注 例 10.8 证法 2 的好处是, 证明 $\operatorname{Ker} \varphi = (\operatorname{Im} \varphi^{*})^{\perp}$ 的过程不涉及维数的有限性, 从而这一结论在无限维线性空间的情形依然成立 (此时需要无限维线性空间基的存在性). 然而 $\operatorname{Im} \varphi^{*} = (\operatorname{Ker} \varphi)^{\perp}$ 这一结论一般不能推广到无限维线性空间的情形, 但在一些特殊情况下可以推广, 我们来看下面的例题.

例 10.9 设 $\varphi$ 是线性空间 V (不要求是有限维) 上的幂等线性变换 (即 $\varphi^{2} = \varphi$ ), $\varphi^{*}$ 是 $\varphi$ 的对偶变换, 求证:

$$
\operatorname{Im} \varphi^ {*} = (\operatorname{Ker} \varphi) ^ {\perp}.
$$

证明 与例10.8完全一样的证明可得 $\operatorname{Im} \varphi^{*} \subseteq (\operatorname{Ker} \varphi)^{\perp}$ . 另一方面, 任取 $f \in (\operatorname{Ker} \varphi)^{\perp}$ , 如果能证明 $f = \varphi^{*}(f)$ , 就能得到 $f \in \operatorname{Im} \varphi^{*}$ , 从而 $\operatorname{Im} \varphi^{*} = (\operatorname{Ker} \varphi)^{\perp}$ 成立. 事实上, 对任意的 $v \in V$ , 由 $\varphi^{2} = \varphi$ 可知 $v - \varphi(v) \in \operatorname{Ker} \varphi$ , 于是 $f(v - \varphi(v)) = 0$ , 从而 $f(v) = f(\varphi(v)) = \varphi^{*}(f)(v)$ 对任意的 $v \in V$ 成立, 因此 $f = \varphi^{*}(f)$ . □

例 10.10 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, $V_{1}$ 是 V 的子空间, 求证: $V_{1}$ 是 $\varphi$ 的不变子空间的充要条件是 $V_{1}^{\perp}$ 是 $\varphi^{*}$ 的不变子空间.

证明 若 $V_{1}$ 是 $\varphi$ 的不变子空间, 则对任意的 $\pmb{v} \in V_{1}$ , 有 $\varphi(\pmb{v}) \in V_{1}$ , 从而对任意的 $\pmb{f} \in V_{1}^{\perp}$ , 有 $\langle \varphi^{*}(\pmb{f}), \pmb{v} \rangle = \langle \pmb{f}, \varphi(\pmb{v}) \rangle = 0$ , 即 $\varphi^{*}(\pmb{f}) \in V_{1}^{\perp}$ , 于是 $V_{1}^{\perp}$ 是 $\varphi^{*}$ 的不变子空间. 反之, 若 $V_{1}^{\perp}$ 是 $\varphi^{*}$ 的不变子空间, 则对任意的 $f \in V_{1}^{\perp}$ , 有 $\varphi^{*}(f) \in V_{1}^{\perp}$ , 从而对任意的 $v \in V_{1}$ , 有 $\langle f, \varphi(v) \rangle = \langle \varphi^{*}(f), v \rangle = 0$ , 即 $\varphi(v) \in (V_{1}^{\perp})^{\perp} = V_{1}$ , 于是 $V_{1}$ 是 $\varphi$ 的不变子空间. □

注 设 $V$ 是线性空间 (不要求是有限维), $V_{1}$ 是 $V$ 的子空间, 若承认无限维线性空间基的存在性, 则可证明对任一 $\pmb{v} \notin V_{1}$ , 存在 $\pmb{f} \in V_{1}^{\perp}$ , 使得 $\pmb{f}(\pmb{v}) \neq 0$ . 如果有了这一结论, 则例 10.10 的结论对无限维线性空间也成立.

例 10.11 设 V, U 是 F 上的有限维线性空间, $\varphi$ 是 $V \rightarrow U$ 的线性映射. 求证: 若将 V 与 $V^{*}$ , U 与 $U^{*}$ 看成是互为对偶的空间, 则 $(\varphi^{*})^{*} = \varphi$ .

证明 对任意的 $x \in V = V^{**}, f \in U^*$ , 我们有

$$
\langle f, \varphi (x) \rangle = \langle \varphi^ {*} (f), x \rangle = \langle f, \varphi^ {* *} (x) \rangle ,
$$

因此 $\varphi(x) = \varphi^{**}(x)$ , 即 $\varphi = \varphi^{**}$ . □

例 10.12 设 V 是 n 维欧氏空间, 则对任一固定的 $u \in V$ , $(u, -)$ 是 V 上的线性函数, 作映射 $\eta: V \to V^{*}$ , $\eta(u) = (u, -)$ . 证明:

(1) $\pmb{\eta}$ 是线性同构, 特别地, 若将 $\pmb{u}$ 与 $(\pmb{u}, -)$ 等同起来, 则 $\langle \pmb{u}, \pmb{v} \rangle = (\pmb{u}, \pmb{v})$ , 即可将 $V$ 看成是自身的对偶空间;

(2) V 的任一组标准正交基 $e_{1}, e_{2}, \cdots, e_{n}$ 的对偶基是其自身;

(3) $V$ 上任一线性变换 $\varphi$ 的对偶变换就是 $\varphi$ 的伴随.

证明 (1) 容易验证 $(\pmb{u}, -)$ 是线性函数以及 $\pmb{\eta}$ 是线性映射. 假设 $\pmb{\eta}(\pmb{u}) = \pmb{0}$ , 则对任意的 $\pmb{v} \in V$ , $(\pmb{u}, \pmb{v}) = \pmb{\eta}(\pmb{u})(\pmb{v}) = 0$ , 由内积的正定性可得 $\pmb{u} = \pmb{0}$ , 因此 $\pmb{\eta}$ 是单映射. 又 $\dim V^{*} = \dim V = n$ , 故由线性映射的维数公式可知 $\pmb{\eta}$ 是线性同构.

(2) 由 (1) 以及 $(\pmb{e}_i, \pmb{e}_j) = \delta_{ij}$ 即得结论.

(3) 记 $\varphi^{\sharp}$ 是 $\varphi$ 的对偶变换, $\varphi^{*}$ 是 $\varphi$ 的伴随, 则由 (1) 可知

$$
\langle \varphi^ {\sharp} (\boldsymbol {u}), \boldsymbol {v} \rangle = \langle \boldsymbol {u}, \varphi (\boldsymbol {v}) \rangle = (\boldsymbol {u}, \varphi (\boldsymbol {v})) = (\varphi^ {*} (\boldsymbol {u}), \boldsymbol {v}) = \langle \varphi^ {*} (\boldsymbol {u}), \boldsymbol {v} \rangle ,
$$

再由 $\pmb{u},\pmb{v}$ 的任意性即得 $\varphi^{\sharp} = \varphi^{*}$ . □

## § 10.3 双线性型与纯量积

例 10.13 设 g 是 U, V 上的非退化双线性型, 若 $\{u_{i}\}, \{v_{i}\} (1 \leq i \leq n)$ 分别是 U, V 的基, 使得 $g(\boldsymbol{u}_{i}, \boldsymbol{v}_{j}) = \delta_{ij}$ , 则称 $\{u_{i}\}, \{v_{i}\}$ 是关于 g 的对偶基. 设 $\varphi$ 是 V 上的线性变换, $\varphi^{*}$ 是 $\varphi$ 关于 $g$ 的对偶变换. 若 $\varphi$ 在基 $\{v_{i}\}$ 下的表示矩阵为 $A$ , 求证: $\varphi^{*}$ 在基 $\{u_{i}\}$ 下的表示矩阵是 $A'$ .

证明 设 $\varphi^{*}$ 在基 $\{\pmb{u}_i\}$ 下的表示矩阵为 $B = (b_{ij})$ ，则有

$$
\varphi^ {*} (\boldsymbol {u} _ {i}) = b _ {1 i} \boldsymbol {u} _ {1} + b _ {2 i} \boldsymbol {u} _ {2} + \dots + b _ {n i} \boldsymbol {u} _ {n}, 1 \leq i \leq n.
$$

设 $A=(a_{ij})$ ，则有

$$
\varphi (\boldsymbol {v} _ {j}) = a _ {1 j} \boldsymbol {v} _ {1} + a _ {2 j} \boldsymbol {v} _ {2} + \dots + a _ {n j} \boldsymbol {v} _ {n}, 1 \leq j \leq n.
$$

注意到

$$
b _ {j i} = g \left(\varphi^ {*} (\boldsymbol {u} _ {i}), \boldsymbol {v} _ {j}\right) = g \left(\boldsymbol {u} _ {i}, \varphi (\boldsymbol {v} _ {j})\right) = a _ {i j}, 1 \leq i, j \leq n,
$$

此即 $B = A'$ . □

例 10.14 设 g 是 U, V 上的非零双线性型, 证明: 必存在 U, V 的子空间 $U_{0}, V_{0}$ , 使得 g 在 $U_{0}, V_{0}$ 上的限制是非退化的双线性型, 且

$$
\dim U _ {0} = \dim V _ {0} = \dim U - \dim L,
$$

其中 L 是 g 的左根子空间.

证明 设 g 在 U 的基 $\{u_{1}, u_{2}, \cdots, u_{m}\}$ 和 V 的基 $\{v_{1}, v_{2}, \cdots, v_{n}\}$ 下的表示矩阵为相抵标准型，即

$$
\boldsymbol {A} = \left( \begin{array}{c c} \boldsymbol {I} _ {r} & \boldsymbol {O} \\ \boldsymbol {O} & \boldsymbol {O} \end{array} \right).
$$

令 $U_{0}$ 是由基向量 $u_{1},\cdots,u_{r}$ 生成的子空间， $V_{0}$ 是由基向量 $v_{1},\cdots,v_{r}$ 生成的子空间。显然，将 g 限制在 $U_{0},V_{0}$ 上是非退化的双线性型，且 $\dim U_{0}=\dim V_{0}=r$ 。又 g 的左根子空间就是由 $u_{r+1},\cdots,u_{m}$ 生成的子空间，因此 $\dim L=m-r$ ，即有 $\dim U_{0}=\dim U-\dim L$ 。☐

例 10.15 设 g 是 U, V 上的非退化双线性型, $\varphi, \psi$ 是 V 上的线性变换, 求证:

(1) $(k\varphi + l\psi)^{*} = k\varphi^{*} + l\psi^{*}$ , 其中 $k, l$ 是常数;

(2) $(\psi\varphi)^{*}=\varphi^{*}\psi^{*};$ 

(3) 若 $\varphi$ 是 $V$ 的自同构, 则 $\varphi^{*}$ 是 $U$ 的自同构, 此时 $(\varphi^{*})^{-1} = (\varphi^{-1})^{*}$ ;

(4) $(\varphi^{*})^{*}=\varphi.$ 

证明 (1) 对任意的 $\pmb{u} \in U, \pmb{v} \in V$ , 由对偶变换的定义可得

$$
\begin{array}{l} g (\boldsymbol {u}, (k \varphi + l \psi) (\boldsymbol {v})) = g (\boldsymbol {u}, k \varphi (\boldsymbol {v})) + g (\boldsymbol {u}, l \psi (\boldsymbol {v})) = g (k \varphi^ {*} (\boldsymbol {u}), \boldsymbol {v}) + g (l \psi^ {*} (\boldsymbol {u}), \boldsymbol {v}) \\ = g \left(\left(k \varphi + l \psi\right) ^ {*} (\boldsymbol {u}), \boldsymbol {v}\right), \\ \end{array}
$$

再由对偶变换的唯一性即得 $(k\varphi+l\psi)^{*}=k\varphi^{*}+l\psi^{*}$ 

(2) 对任意的 $\pmb{u} \in U, \pmb{v} \in V$ , 由对偶变换的定义可得

$$
g (\boldsymbol {u}, \psi \varphi (\boldsymbol {v})) = g (\psi^ {*} (\boldsymbol {u}), \varphi (\boldsymbol {v})) = g (\varphi^ {*} \psi^ {*} (\boldsymbol {u}), \boldsymbol {v}),
$$

再由对偶变换的唯一性即得 $(\psi\varphi)^{*}=\varphi^{*}\psi^{*}$ .

(3) 若 $\varphi$ 是 $V$ 的自同构, 则 $\varphi^{-1}\varphi = \varphi \varphi^{-1} = I_V$ . 两边同取对偶, 由 (2) 可得

$$
\varphi^ {*} (\varphi^ {- 1}) ^ {*} = (\varphi^ {- 1}) ^ {*} \varphi^ {*} = I _ {V} ^ {*} = I _ {U},
$$

故 $\varphi^{*}$ 是 U 的自同构, 并且 $(\varphi^{*})^{-1} = (\varphi^{-1})^{*}$ .

(4) 对任意的 $u \in U, v \in V$ ，由对偶变换的定义可得

$$
g (\boldsymbol {u}, \varphi (\boldsymbol {v})) = g \left(\varphi^ {*} (\boldsymbol {u}), \boldsymbol {v}\right) = g \left(\boldsymbol {u}, \left(\varphi^ {*}\right) ^ {*} (\boldsymbol {v})\right),
$$

再由对偶变换的唯一性即得 $(\varphi^{*})^{*} = \varphi$ 。本题也可利用例10.13的结论来证明。 $\square$ 

例 10.16 设 g, h 是 n 维线性空间 V 上秩相同的纯量积, 求证: 必存在 V 上的可逆线性变换 $\varphi, \psi$ , 使得 $h(x, y) = g(\varphi(x), \psi(y))$ 对一切 $x, y \in V$ 成立.

证明 我们用矩阵方法来证明结论. 设 $g, h$ 在 $V$ 的某一组基下的表示矩阵分别为 $\pmb{A}, \pmb{B}$ , 向量 $\pmb{x}, \pmb{y}$ 的坐标向量 (用列向量表示) 分别为 $\alpha, \beta$ , 则

$$
g (\boldsymbol {x}, \boldsymbol {y}) = \alpha^ {\prime} A \beta , h (\boldsymbol {x}, \boldsymbol {y}) = \alpha^ {\prime} B \beta .
$$

又假设线性变换 $\varphi$ 和 $\psi$ 在同一组基下的表示矩阵分别为 $C, D$ (待定), 则

$$
g (\varphi (x), \psi (y)) = (C \alpha) ^ {\prime} A (D \beta) = \alpha^ {\prime} C ^ {\prime} A D \beta .
$$

因为 A 和 B 秩相同, 故存在可逆矩阵 C, D, 使得 $C'AD = B$ , 于是结论得证. □

例 10.17 设 $W = U \oplus V$ , g 是 U 上的纯量积, h 是 V 上的纯量积. 现定义 W 上的纯量积 q 如下:

$$
q (\boldsymbol {x} + \boldsymbol {y}, \boldsymbol {u} + \boldsymbol {v}) = g (\boldsymbol {x}, \boldsymbol {u}) + h (\boldsymbol {y}, \boldsymbol {v}),
$$

其中 $x, u \in U, y, v \in V,$ 求证:

(1) 若 g, h 非退化, 则 q 也非退化;

(2) 若 g, h 是对称型 (交错型), 则 q 也是对称型 (交错型);

(3) 若 $\{\pmb{u}_i\}, \{\pmb{v}_i\}$ 分别是 $U$ 和 $V$ 的基, 且 $g, h$ 在这两组基下的表示矩阵分别为 $\mathbf{A}, \mathbf{B}$ , 则 $q$ 在 $W$ 的基 $\{\pmb{u}_i\} \cup \{\pmb{v}_i\}$ 下的表示矩阵为分块对角矩阵 $\operatorname{diag}\{\mathbf{A}, \mathbf{B}\}$ .

证明 若矩阵 A 和 B 可逆, 则 $\mathrm{diag}\{A,B\}$ 也可逆, 因此 (1) 是 (3) 的推论. (2) 的验证很容易, 现只需证明 (3). 因为

$$
q (\boldsymbol {u} _ {i}, \boldsymbol {v} _ {j}) = q (\boldsymbol {u} _ {i} + \mathbf {0}, \mathbf {0} + \boldsymbol {v} _ {j}) = g (\boldsymbol {u} _ {i}, \mathbf {0}) + h (\mathbf {0}, \boldsymbol {v} _ {j}) = 0,
$$

以及 $q(\boldsymbol{v}_{j}, \boldsymbol{u}_{i}) = 0$ ，所以 q 的表示矩阵是分块对角矩阵。又

$$
q (\boldsymbol {u} _ {i}, \boldsymbol {u} _ {j}) = g (\boldsymbol {u} _ {i}, \boldsymbol {u} _ {j}), \quad q (\boldsymbol {v} _ {i}, \boldsymbol {v} _ {j}) = h (\boldsymbol {v} _ {i}, \boldsymbol {v} _ {j}),
$$

因此结论成立. □

例 10.18 设 V 是由 n 阶实矩阵全体构成的欧氏空间 (取 Frobenius 内积), 则 Frobenius 内积 $(-,-)$ 是 V 上的非退化对称型. 设 $A_{1},\cdots,A_{n^{2}}$ 是 V 的一组基, $B_{1},\cdots,B_{n^{2}}$ 是其对偶基, 即满足 $(A_{i},B_{j})=\delta_{ij}(1\leq i,j\leq n^{2})$ . 求证:

$$
\sum_ {i = 1} ^ {n ^ {2}} A _ {i} B _ {i} = I _ {n}.
$$

证明 设 $E_{11},\cdots,E_{nn}$ 是 n 阶基础矩阵, 为书写方便将它们依次标记为 $E_{1},\cdots,E_{n^{2}}$ . 显然, 这是 V 的一组标准正交基, 从而它的对偶基也是其自身. 设

$$
\left(\boldsymbol {A} _ {1}, \dots , \boldsymbol {A} _ {n ^ {2}}\right) = \left(\boldsymbol {E} _ {1}, \dots , \boldsymbol {E} _ {n ^ {2}}\right) \boldsymbol {P}, \quad \left(\boldsymbol {B} _ {1}, \dots , \boldsymbol {B} _ {n ^ {2}}\right) = \left(\boldsymbol {E} _ {1}, \dots , \boldsymbol {E} _ {n ^ {2}}\right) \boldsymbol {Q},
$$

其中 $\boldsymbol{P}=(p_{ij}),\boldsymbol{Q}=(q_{ij})$ 是基之间的过渡矩阵，则 $A_{i}=\sum_{k=1}^{n^{2}}p_{ki}\boldsymbol{E}_{k},\boldsymbol{B}_{j}=\sum_{l=1}^{n^{2}}q_{lj}\boldsymbol{E}_{l}.$ 于是对任意的 $1 \leq i, j \leq n^{2}$ 有

$$
\delta_ {i j} = \left(\boldsymbol {A} _ {i}, \boldsymbol {B} _ {j}\right) = \left(\sum_ {k = 1} ^ {n ^ {2}} p _ {k i} \boldsymbol {E} _ {k}, \sum_ {l = 1} ^ {n ^ {2}} q _ {l j} \boldsymbol {E} _ {l}\right) = \sum_ {k = 1} ^ {n ^ {2}} p _ {k i} q _ {k j},
$$

这即为 $P^{\prime}Q = I_{n^{2}}$ 于是 $QP^{\prime} = I_{n^{2}}$ ，从而 $PQ^{\prime} = I_{n^{2}}$ ，此即 $\sum_{i=1}^{n^2} p_{ki} q_{li} = \delta_{kl}$ 因此

$$
\begin{array}{l} \sum_ {i = 1} ^ {n ^ {2}} \boldsymbol {A} _ {i} \boldsymbol {B} _ {i} = \sum_ {i, k, l = 1} ^ {n ^ {2}} p _ {k i} q _ {l i} \boldsymbol {E} _ {k} \boldsymbol {E} _ {l} = \sum_ {k, l = 1} ^ {n ^ {2}} \left(\sum_ {i = 1} ^ {n ^ {2}} p _ {k i} q _ {l i}\right) \boldsymbol {E} _ {k} \boldsymbol {E} _ {l} = \sum_ {k, l = 1} ^ {n ^ {2}} \delta_ {k l} \boldsymbol {E} _ {k} \boldsymbol {E} _ {l} \\ = \sum_ {k = 1} ^ {n ^ {2}} E _ {k} ^ {2} = \sum_ {i, j = 1} ^ {n} E _ {i j} E _ {i j} = \sum_ {i = 1} ^ {n} E _ {i i} = I _ {n}. \square \\ \end{array}
$$

例 10.19 设 g 是 n 维线性空间 V 上的对称型或交错型, U 是 V 的子空间, 求证: $U \cap U^{\perp} = 0$ 的充要条件是 g 限制在 U 上是一个非退化的纯量积, 这时有直和分解 $V = U \oplus U^{\perp}$ .

证明 设 $U \cap U^{\perp} = 0$ , 若 $g$ 限制在 $U$ 上退化, 则存在 $U$ 中非零向量 $\pmb{u}$ , 使得 $g(\pmb{u}, U) = 0$ , 从而 $\pmb{u} \in U \cap U^{\perp}$ , 推出矛盾. 反之, 设 $g$ 限制在 $U$ 上非退化, 任取 $\pmb{u} \in U \cap U^{\perp}$ , 则 $g(\pmb{u}, U) = 0$ , 从而 $\pmb{u} = \pmb{0}$ , 这表明 $U \cap U^{\perp} = 0$ .

对于第二个结论, 我们先证明若 $g$ 限制在 $U$ 上非退化, 则 $\dim U + \dim U^{\perp} = n$ . 对任意的 $\pmb{v} \in V$ , $g(\pmb{v}, -)$ 限制在 $U$ 上是 $U$ 上的线性函数. 作线性映射 $\varphi: V \to U^{*}$ , $\varphi(\pmb{v}) = g(\pmb{v}, -)$ , 则 $\operatorname{Ker} \varphi = U^{\perp}$ . 因为 $g$ 限制在 $U$ 上非退化, 故限制映射 $\varphi|_{U}: U \to U^{*}$ 是单射, 又 $\dim U = \dim U^{*}$ , 从而 $\varphi|_{U}: U \to U^{*}$ 是同构. 因此对任意的 $\pmb{f} \in U^{*}$ , 存在 $\pmb{u} \in U$ , 使得 $\pmb{f} = g(\pmb{u}, -)$ , 于是 $\varphi$ 是满射. 最后, 由线性映射的维数公式即得 $\dim U + \dim U^{\perp} = n$ , 又因为 $U \cap U^{\perp} = 0$ , 所以 $V = U \oplus U^{\perp}$ . □

## § 10.4 交错型与辛几何

例 10.20 设 h 是三维线性空间 V 上的非零交错型, 求证: 存在 V 上的线性函数 f, g, 使得对任意的 $x, y \in V$ , 有 $h(x, y) = f(x)g(y) - f(y)g(x)$ .

证明 设 $h$ 在 $V$ 的基 $\pmb{v}_1, \pmb{v}_2, \pmb{v}_3$ 下的表示矩阵为标准型 $\left( \begin{array}{ccc}0 & 1 & 0\\ -1 & 0 & 0\\ 0 & 0 & 0 \end{array} \right)$ ，令

$$
\boldsymbol {f} (\boldsymbol {x}) = h (\boldsymbol {x}, \boldsymbol {v} _ {2}), \quad \boldsymbol {g} (\boldsymbol {x}) = h (\boldsymbol {v} _ {1}, \boldsymbol {x}),
$$

不难验证 f, g 即为要求之线性函数. □

我们通过下面这道例题来看一看如何求出辛空间的一组辛基.

例 10.21 设四维辛空间 $(V,g)$ 在一组基 $\{e_{1},e_{2},e_{3},e_{4}\}$ 下的表示矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 0 & 2 & - 1 & 3 \\ - 2 & 0 & 4 & - 2 \\ 1 & - 4 & 0 & 1 \\ - 3 & 2 & - 1 & 0 \end{array} \right),
$$

求 V 的一组辛基.

解 由例 8.16 可知, 存在可逆矩阵 C, 使得 $C'AC = B = \text{diag}\{S, S\}$ , 其中

$$
\boldsymbol {S} = \left( \begin{array}{c c} 0 & 1 \\ - 1 & 0 \end{array} \right).
$$

基之间的过渡矩阵 C 可用对称初等变换法来求 (类似于对称矩阵合同于对角矩阵的求法): 对矩阵 $(A; I)$ 施以初等行变换, 再对 A 施以对称的初等列变换, 直到将 A 变为 B, 此时 I 就变成 $C'$ , 转置后即得 C.

将 $\frac{1}{2}$ 乘以 $(A; I)$ 的第二行, 再乘以第二列得到

$$
(\boldsymbol {A}; \boldsymbol {I}) \longrightarrow \left( \begin{array}{c c c c c c c c} 0 & 1 & - 1 & 3 & 1 & 0 & 0 & 0 \\ - 1 & 0 & 2 & - 1 & 0 & \frac {1}{2} & 0 & 0 \\ 1 & - 2 & 0 & 1 & 0 & 0 & 1 & 0 \\ - 3 & 1 & - 1 & 0 & 0 & 0 & 0 & 1 \end{array} \right);
$$

将第二行分别乘以 1, -3 后加到第三行及第四行上, 再将第二列分别乘以 1, -3 后加到第三列及第四列上得到

$$
\rightarrow \left(\begin{array}{c c c c c c c c}0&1&0&0&1&0&0&0\\- 1&0&2&- 1&0&\frac {1}{2}&0&0\\0&- 2&0&6&0&\frac {1}{2}&1&0\\0&1&- 6&0&0&- \frac {3}{2}&0&1\end{array}\right);
$$

将第一行分别乘以 2, -1 后加到第三行及第四行上, 再将第一列分别乘以 2, -1 后加到第三列及第四列上得到

$$
\rightarrow \left(\begin{array}{c c c c c c c c}0&1&0&0&1&0&0&0\\- 1&0&0&0&0&\frac {1}{2}&0&0\\0&0&0&6&2&\frac {1}{2}&1&0\\0&0&- 6&0&- 1&- \frac {3}{2}&0&1\end{array}\right);
$$

将第四行乘以 $\frac{1}{6}$ , 再将第四列乘以 $\frac{1}{6}$ 后得到

$$
\rightarrow \left(\begin{array}{c c c c c c c c}0&1&0&0&1&0&0&0\\- 1&0&0&0&0&\frac {1}{2}&0&0\\0&0&0&1&\frac {1}{3}&\frac {1}{1 2}&\frac {1}{6}&0\\0&0&- 1&0&- 1&- \frac {3}{2}&0&1\end{array}\right).
$$

因此，要求的一组辛基 $\{\pmb{v}_1,\pmb{v}_2,\pmb{v}_3,\pmb{v}_4\}$ 为

$$
(\pmb {v} _ {1}, \pmb {v} _ {2}, \pmb {v} _ {3}, \pmb {v} _ {4}) = (\pmb {e} _ {1}, \pmb {e} _ {2}, \pmb {e} _ {3}, \pmb {e} _ {4}) \pmb {C}, \text {其中} \pmb {C} = \left( \begin{array}{c c c c} {{1}} & {{0}} & {{\frac {1}{3}}} & {{- 1}} \\ {{0}} & {{\frac {1}{2}}} & {{\frac {1}{1 2}}} & {{- \frac {3}{2}}} \\ {{0}} & {{0}} & {{\frac {1}{6}}} & {{0}} \\ {{0}} & {{0}} & {{0}} & {{1}} \end{array} \right). \square
$$

例 10.22 设 $(V,g)$ 是辛空间, $\varphi$ 是 V 上的辛变换, $\varphi$ 在一组辛基下的表示矩阵称为辛矩阵. 令 $A = \text{diag}\{S, \cdots, S\}$ , 其中 $S = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ . 求证: n 阶方阵 T 是辛矩阵的充要条件是 $T'AT = A$ . 特别地, 辛变换的行列式值等于 1 或 -1.

证明 选取一组辛基 $v_{1}, v_{2}, \cdots, v_{n}$ , 则交错型 $g$ 在这组基下的表示矩阵恰为 $\mathbf{A}$ . 设 $V$ 中向量 $\mathbf{x}, \mathbf{y}$ 在这组基下的坐标向量分别为 $\alpha, \beta$ , 辛变换 $\varphi$ 在这组基下的表示矩阵为 $\mathbf{T}$ , 则

$$
\alpha^ {\prime} A \beta = g (\boldsymbol {x}, \boldsymbol {y}) = g (\varphi (\boldsymbol {x}), \varphi (\boldsymbol {y})) = (T \alpha) ^ {\prime} A (T \beta) = \alpha^ {\prime} T ^ {\prime} A T \beta
$$

对任意的列向量 $\alpha, \beta$ 都成立, 从而 $T'AT = A$ 成立. 反之亦不难倒推回去, 故结论成立. 由 $T'AT = A$ 取行列式可得 $|T|^2 = 1$ , 于是 $|T| = \pm 1$ , 从而 $\det \varphi = \pm 1$ . $\square$ 

注 由例 9.134 可知, 实辛空间 $(V,g)$ 上的辛变换 $\varphi$ 的行列式值等于 1, 请读者自行思考其中的原因.

## § 10.5 对称型与正交几何

例 10.23 设 g 是 n 维线性空间 V 上的非退化对称型, $\varphi$ 是 V 上的正交变换, 求证: $\det \varphi = \pm 1$ .

证明 选取一组正交基 $e_1, e_2, \cdots, e_n$ ，则非退化对称型 $g$ 在这组基下的表示矩阵为可逆对角矩阵 $\mathbf{A}$ 。设 $\varphi$ 在这组基下的表示矩阵为 $\mathbf{T}$ ，因为 $\varphi$ 是正交变换，故对任意的 $\mathbf{x}, \mathbf{y} \in V$ 有 $g(\varphi(\mathbf{x}), \varphi(\mathbf{y})) = g(\mathbf{x}, \mathbf{y})$ ，由类似于上例的讨论可知 $T' A T = A$ 。此式取行列式可得 $|\mathbf{T}|^2 = 1$ ，于是 $|\mathbf{T}| = \pm 1$ ，从而 $\det \varphi = \pm 1$ 。 $\square$ 

例 10.24 设 g 是 n 维线性空间 V 上的非退化对称型, $\varphi$ 是 V 上的线性变换, 求证: $\varphi$ 是正交变换的充要条件是 $\varphi^{*}\varphi = I$ .

证明 若 $\varphi$ 是正交变换, 则对任意的 $x, y \in V$ 有 $g(\varphi(x), \varphi(y)) = g(x, y)$ , 从而可得

$$
g (\boldsymbol {x}, \varphi^ {*} \varphi (\boldsymbol {y})) = g (\boldsymbol {x}, \boldsymbol {y}).
$$

因为 g 非退化, 所以 $\varphi^{*}\varphi = I$ . 充分性只要反过来推回去即可. □

例 10.25 设 V 是双曲平面, $\varphi$ 是 V 上的正交变换且 $\det \varphi = -1$ , 求证: $\varphi$ 是镜像变换.

证明 设 $g$ 是定义双曲平面 $V$ 的非退化对称型, 则由教材 [1] 中的定理 10.5.3 可知, 存在 $V$ 的一组基 $\pmb{u}, \pmb{v}$ , 使得

$$
g (\boldsymbol {u}, \boldsymbol {u}) = g (\boldsymbol {v}, \boldsymbol {v}) = 0, \quad g (\boldsymbol {u}, \boldsymbol {v}) = g (\boldsymbol {v}, \boldsymbol {u}) = 1.
$$

设 $\varphi$ 在基 $u, v$ 下的表示矩阵为 $A = (a_{ij})$ , 即有

$$
\varphi (\boldsymbol {u}) = a _ {1 1} \boldsymbol {u} + a _ {2 1} \boldsymbol {v}, \quad \varphi (\boldsymbol {v}) = a _ {1 2} \boldsymbol {u} + a _ {2 2} \boldsymbol {v},
$$

则从 $g(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{u})) = g(\boldsymbol{u}, \boldsymbol{u}) = 0$ 可推出 $a_{11} = 0$ 或 $a_{21} = 0$ ; 从 $g(\varphi(\boldsymbol{v}), \varphi(\boldsymbol{v})) = g(\boldsymbol{v}, \boldsymbol{v}) = 0$ 可推出 $a_{22} = 0$ 或 $a_{12} = 0$ . 由于 $\varphi$ 是可逆变换, 故只有下列可能性: 或者 $a_{12} = a_{21} = 0$ , 或者 $a_{11} = a_{22} = 0$ . 假设为前者, 由 $g(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = g(\boldsymbol{u}, \boldsymbol{v}) = 1$ 可推出 $a_{11}a_{22} = 1$ , 这与 $\operatorname{det}\varphi = -1$ 矛盾, 因此必有 $a_{11} = a_{22} = 0$ . 这时再由 $g(\varphi(\boldsymbol{u}), \varphi(\boldsymbol{v})) = g(\boldsymbol{u}, \boldsymbol{v}) = 1$ 可推出 $a_{12}a_{21} = 1$ . 令 $\beta = a_{12}\boldsymbol{u} - \boldsymbol{v}$ , 则不难验证 $\varphi = S_{\beta}$ 是镜像变换. □

例 10.26 设 g 是 n 维实线性空间 V 上的非退化对称型, g 的正惯性指数为 p, 负惯性指数为 q. 假设 W 是 V 的极大全迷向子空间, 求证: $\dim W = \min\{p, q\}$ .

证明 设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是 V 的一组基, 使得 g 在这组基下的表示矩阵为

$$
\operatorname{diag} \{1, \dots , 1, - 1, \dots , - 1 \},
$$

其中有 $p$ 个1, $q$ 个-1, 不妨假设 $p \leq q (p > q$ 类似可证). 令

$$
\boldsymbol {v} _ {1} = \boldsymbol {e} _ {1} + \boldsymbol {e} _ {p + 1}, \quad \boldsymbol {v} _ {2} = \boldsymbol {e} _ {2} + \boldsymbol {e} _ {p + 2}, \quad \dots , \quad \boldsymbol {v} _ {p} = \boldsymbol {e} _ {p} + \boldsymbol {e} _ {2 p};
$$

$$
\boldsymbol {u} _ {1} = \boldsymbol {e} _ {1} - \boldsymbol {e} _ {p + 1}, \quad \boldsymbol {u} _ {2} = \boldsymbol {e} _ {2} - \boldsymbol {e} _ {p + 2}, \quad \dots , \quad \boldsymbol {u} _ {p} = \boldsymbol {e} _ {p} - \boldsymbol {e} _ {2 p}.
$$

显然, $\{\pmb{v}_1, \dots, \pmb{v}_p, \pmb{u}_1, \dots, \pmb{u}_p, e_{2p+1}, \dots, e_n\}$ 是 $V$ 的一组基. 由基向量 $\{\pmb{v}_1, \dots, \pmb{v}_p\}$ 生成的子空间 $W$ , 其维数等于 $p$ , 且不难验证这是一个全迷向子空间.

现假设 W 是维数大于 p 的全迷向子空间, 令 U 是由基向量 $\{e_{p+1},\cdots,e_{n}\}$ 生成的子空间. 因为 U 的维数为 n-p, W 的维数大于 p, 故由交和空间的维数公式可知 $U \cap W \neq 0$ . 任取 $0 \neq \beta \in U \cap W$ , 可设 $\beta = b_{p+1} e_{p+1} + b_{p+2} e_{p+2} + \cdots + b_{n} e_{n}$ , 则

$$
g (\boldsymbol {\beta}, \boldsymbol {\beta}) = - b _ {p + 1} ^ {2} - b _ {p + 2} ^ {2} - \dots - b _ {n} ^ {2} <   0,
$$

这与 $\beta$ 是迷向向量矛盾, 因此 $V$ 中全迷向子空间的维数最多为 $p$ . □

例 10.27 设 $V = U_{1} \oplus U_{2} \oplus \cdots \oplus U_{r}$ ，若 $U_{i} \perp U_{j}$ 对一切 $i \neq j$ 成立，则称 V 是 $U_{i}$ 的正交直和，记为 $V = U_{1} \perp U_{2} \perp \cdots \perp U_{r}$ 。现假设

$$
V = U _ {1} \perp U _ {2} \perp \dots \perp U _ {r} = V _ {1} \perp V _ {2} \perp \dots \perp V _ {r},
$$

若存在保距同构 $\varphi_{i}: U_{i} \to V_{i} (1 \leq i \leq r)$ , 求证: 存在 $V$ 上的正交变换 $\varphi$ , 使之在每个 $U_{i}$ 上的限制就是 $\varphi_{i}$ .

证明 令 $\varphi(u_1 + u_2 + \cdots + u_r) = \varphi_1(u_1) + \varphi_2(u_2) + \cdots + \varphi_r(u_r)$ , 其中每个 $u_i \in U_i$ . 不难验证 $\varphi$ 就是所需之正交变换. □

例 10.28 设 g 是 n 维实线性空间 V 上的非退化对称型, $\varphi$ 是 V 上的正交变换, $V_{1} = \{x \in V \mid \varphi(x) = x\}$ . 求证: $V_{1}$ 是子空间且 $\dim V = \dim V_{1} + \dim(I - \varphi)V$ .

证明 显然 $V_{1} = \mathrm{Ker}(I - \varphi)$ , 由线性映射的维数公式即得结论. □

例 10.29 设 V 是 n 维欧氏空间, g 是 V 上的一个对称型. 满足 $g(\boldsymbol{u}, \boldsymbol{u}) = 0$ 的非零向量 u 称为迷向向量. 求证: V 存在一组由迷向向量组成的标准正交基的充要条件是 g 在 V 的某一组标准正交基下的表示矩阵的迹等于零.

证明 我们把问题转化成代数语言. 设 $\pmb{A}$ 是 $g$ 在某一组标准正交基下的表示矩阵, 则 $\pmb{A}$ 是实对称矩阵. 因此原问题等价于下面的矩阵问题: 实对称矩阵 $\pmb{A} = (a_{ij})$ 正交相似于主对角元全是零的对称矩阵的充要条件是 $\operatorname{tr}(\pmb{A}) = 0$ . 必要性是显然的, 下证充分性. 对阶数 $n$ 进行归纳. 当 $n = 1$ 时结论显然成立, 假设对 $n - 1$ 阶矩阵结论已成立, 现证 $n$ 阶矩阵的情形. 下面分两种情况进行讨论.

若 A 的主对角元中有一个为零, 由于主对角元的对换是正交相似变换, 故不妨设 $a_{11}=0$ , 于是 $A=\begin{pmatrix}0&\alpha^{\prime}\\ \alpha&A_{1}\end{pmatrix}$ . 注意到 $A_{1}$ 是 n-1 阶实对称矩阵且 $\mathrm{tr}(A_{1})=0$ , 故由归纳假设可知, 存在 n-1 阶正交矩阵 R, 使得 $R^{\prime}A_{1}R$ 的主对角元全为零. 令 $P=\mathrm{diag}\{1,R\}$ , 则 P 是 n 阶正交矩阵, 使得 $P^{\prime}AP$ 的主对角元全为零.

若 A 的主对角元全部非零, 我们的目标是通过正交相似变换将 A 化为第 (1,1) 元素为零的实对称矩阵, 再由第一种情况的讨论即得结论. 首先设 P 为正交矩阵, 使得 $P^{\prime}AP = \text{diag}\{\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}\}$ , 由假设可知 $\lambda_{1} + \lambda_{2} + \cdots + \lambda_{n} = \text{tr}(A) = 0$ . 若存在某个 $\lambda_{i} = 0$ , 则结论得证, 故不妨设 $\lambda_{i}$ 全部非零. 因为主对角元的对换是正交相似变换, 故不妨进一步假设 $\lambda_{1} > 0, \lambda_{2} < 0$ . 设 $P = (e_{1}, e_{2}, \cdots, e_{n})$ , 则 $e_{1}, e_{2}, \cdots, e_{n}$ 是 $R^{n}$ 的标准正交基, 且满足 $Ae_{i} = \lambda_{i}e_{i}$ . 设 t, s 为实参数, 满足如下条件:

$$
\left(\boldsymbol {e} _ {1} + t \boldsymbol {e} _ {2}\right) ^ {\prime} \boldsymbol {A} \left(\boldsymbol {e} _ {1} + t \boldsymbol {e} _ {2}\right) = \lambda_ {1} + t ^ {2} \lambda_ {2} = 0, \quad \left(\boldsymbol {e} _ {1} + t \boldsymbol {e} _ {2}\right) ^ {\prime} \left(\boldsymbol {e} _ {1} + s \boldsymbol {e} _ {2}\right) = 1 + s t = 0,
$$

则容易算出 $t = \sqrt{-\frac{\lambda_{1}}{\lambda_{2}}}$ , $s = -\sqrt{-\frac{\lambda_{2}}{\lambda_{1}}}$ . 令 $\widetilde{e}_{1} = \frac{e_{1} + te_{2}}{\|e_{1} + te_{2}\|}$ , $\widetilde{e}_{2} = \frac{e_{1} + se_{2}}{\|e_{1} + se_{2}\|}$ , 则 $\widetilde{e}_{1}, \widetilde{e}_{2}, e_{3}, \cdots, e_{n}$ 是 $R^{n}$ 的标准正交基. 令 $Q = (\widetilde{e}_{1}, \widetilde{e}_{2}, e_{3}, \cdots, e_{n})$ , 则 Q 是正交矩阵, 且由上述条件容易验证 $Q'AQ$ 是一个第 (1,1) 元素为零的实对称矩阵, 从而结论得证. □

例10.30 设四维实空间 $V$ 上定义了一个对称型 $g$ , 在基 $\{e_1, e_2, e_3, e_4\}$ 下的表示矩阵为

$$
\left( \begin{array}{c c c c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & - 1 \end{array} \right).
$$

上述空间 $V$ 称为Minkowski空间. $V$ 中适合 $g(\alpha, \alpha) > 0$ 的向量 $\pmb{\alpha}$ 称为空间向量; 适合 $g(\alpha, \alpha) < 0$ 的向量称为时间向量; 适合 $g(\alpha, \alpha) = 0$ 的非零向量称为光向量. 证明:

(1) V 中任意两个时间向量不可能互相正交;

(2) $V$ 中任意一个时间向量不可能正交于一个光向量;

(3) $V$ 中两个光向量正交的充要条件是它们线性相关.

证明 (1) 设 $x, y$ 是两个时间向量且

$$
\boldsymbol {x} = a _ {1} \boldsymbol {e} _ {1} + a _ {2} \boldsymbol {e} _ {2} + a _ {3} \boldsymbol {e} _ {3} + a _ {4} \boldsymbol {e} _ {4}, \quad \boldsymbol {y} = b _ {1} \boldsymbol {e} _ {1} + b _ {2} \boldsymbol {e} _ {2} + b _ {3} \boldsymbol {e} _ {3} + b _ {4} \boldsymbol {e} _ {4}.
$$

若它们正交, 则 $g(\pmb{x}, \pmb{y}) = 0$ 且 $g(\pmb{x}, \pmb{x}) < 0$ , $g(\pmb{y}, \pmb{y}) < 0$ . 于是

$$
a _ {1} ^ {2} + a _ {2} ^ {2} + a _ {3} ^ {2} <   a _ {4} ^ {2}, \quad b _ {1} ^ {2} + b _ {2} ^ {2} + b _ {3} ^ {2} <   b _ {4} ^ {2}, \quad a _ {1} b _ {1} + a _ {2} b _ {2} + a _ {3} b _ {3} = a _ {4} b _ {4}.
$$

由 Cauchy 不等式, 有

$$
a _ {4} ^ {2} b _ {4} ^ {2} = \left(a _ {1} b _ {1} + a _ {2} b _ {2} + a _ {3} b _ {3}\right) ^ {2} \leq \left(a _ {1} ^ {2} + a _ {2} ^ {2} + a _ {3} ^ {2}\right) \left(b _ {1} ^ {2} + b _ {2} ^ {2} + b _ {3} ^ {2}\right),
$$

导出矛盾.

(2) 设 $\pmb{u} = c_{1}\pmb{e}_{1} + c_{2}\pmb{e}_{2} + c_{3}\pmb{e}_{3} + c_{4}\pmb{e}_{4}$ 是光向量, 则 $g(\pmb{u}, \pmb{u}) = 0$ , 即 $c_{1}^{2} + c_{2}^{2} + c_{3}^{2} = c_{4}^{2}$ . 若 $\pmb{x} \perp \pmb{u}$ , 则 $a_{1}c_{1} + a_{2}c_{2} + a_{3}c_{3} = a_{4}c_{4}$ . 同 (1) 用 Cauchy 不等式可证这是不可能的.

(3) 设 $v = d_{1}e_{1} + d_{2}e_{2} + d_{3}e_{3} + d_{4}e_{4}$ 也是光向量, 若它和 u 正交, 则 $c_{1}d_{1} + c_{2}d_{2} + c_{3}d_{3} = c_{4}d_{4}$ . 又 $d_{1}^{2} + d_{2}^{2} + d_{3}^{2} = d_{4}^{2}$ , 运用 Cauchy 不等式等号成立的充要条件即知 u, v 线性相关. □

## § 10.6 基础训练

### 10.6.1 训练题

#### 一、单选题

1. 设 $\varphi$ 是有限维线性空间 $V \rightarrow U$ 的线性映射, $\varphi^{*}$ 是其对偶映射, 则 ( ).

(A) 若 $\varphi$ 是单映射, 则 $\varphi^{*}$ 也是单映射

(B) 若 $\varphi$ 是满映射, 则 $\varphi^{*}$ 也是满映射

(C) 若 $\varphi$ 是单映射, 则 $\varphi^{*}$ 是满映射

(D) 若 $\varphi^{*}$ 是单映射, 则 $\varphi$ 也是单映射

2. 设 $V$ 是数域 $\mathbb{F}$ 上的三维空间, $V^{*}$ 是其对偶空间, $\pmb{v}_{1},\pmb{v}_{2},\pmb{v}_{3}$ 是 $V$ 的一组基, $\pmb{v}_{1}^{*},\pmb{v}_{2}^{*},\pmb{v}_{3}^{*}$ 是对偶基, 则 $V$ 中基 $\pmb{v}_{1},\pmb{v}_{1} + \pmb{v}_{2},\pmb{v}_{1} + \pmb{v}_{2} + \pmb{v}_{3}$ 的对偶基是（ ）.

(A) $v_{1}^{*}, v_{1}^{*} + v_{2}^{*}, v_{1}^{*} + v_{2}^{*} + v_{3}^{*}$ 

(B) $v_{1}^{*} - v_{2}^{*}, v_{2}^{*} - v_{3}^{*}, v_{3}^{*}$ 

(C) $v_{1}^{*}, v_{1}^{*} - v_{2}^{*}, v_{2}^{*} - v_{3}^{*}$ 

(D) $v_{1}^{*} - v_{2}^{*}, v_{1}^{*} - v_{3}^{*}, v_{2}^{*} + v_{3}^{*}$ 

3. 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $\varphi^{*}$ 是其对偶变换. $V_{1}$ 是 $V$ 的子空间, 记 $V_{1}^{\perp} = \{f \in V^{*} \mid f(V_{1}) = 0\}$ , 则下列结论正确的是 ( ).

(A) $\dim(\operatorname{Ker}\varphi^{*})^{\perp} = \dim\operatorname{Ker}\varphi$ 

(B) $\dim(\operatorname{Ker}\varphi)^{\perp} = \dim\operatorname{Im}\varphi$ 

(C) $\dim(\operatorname{Im}\varphi^{*})^{\perp} = \dim\operatorname{Im}\varphi$ 

(D) $\dim\operatorname{Im}\varphi^{*}=\dim(\operatorname{Im}\varphi)^{\perp}$ 

4. 设 $V$ 是数域 $\mathbb{F}$ 上的三维行向量空间, $\pmb{x} = (x_{1}, x_{2}, x_{3})$ , $\pmb{y} = (y_{1}, y_{2}, y_{3})$ , 则下列函数是 $V \times V \to \mathbb{F}$ 的双线性函数的是 ( ).

(A) $f(x,y)=x_{1}^{2}+x_{1}y_{1}+2x_{1}y_{2}$ 

(B) $f(x,y)=x_{1}y_{1}+x_{2}y_{3}+2x_{1}-3y_{3}$ 

(C) $f(x,y)=x_{1}x_{2}+x_{2}y_{3}+2x_{3}y_{3}$ 

(D) $f(x,y)=2x_{1}y_{2}+x_{2}y_{1}-5x_{3}y_{2}+2x_{3}y_{3}$ 

5. 双线性型 $g: V \times V \rightarrow F$ 在线性空间 V 的不同基下的表示矩阵（）.

(A) 必相似

(B) 必合同

(C) 必正交相似

(D) 必相等

6. 设 $g: U \times V \to \mathbb{F}$ 是双线性型, $U^{*}$ 是 $U$ 的对偶空间, 作映射 $\varphi: V \to U^{*}, \varphi(v) = g(-, v)$ , 则 ( ).

(A) $\operatorname{Ker} \varphi$ 为 $g$ 的右根子空间

(B) $\operatorname{Ker} \varphi$ 为 $g$ 的左根子空间

(C) $\operatorname{Im}\varphi$ 为 g 的右根子空间

(D) $\operatorname{Im} \varphi$ 为 $g$ 的左根子空间

7. 下列纯量积非退化的是（）.

(A) V 是 F 上的四维行向量空间, $\boldsymbol{x} = (x_{1}, x_{2}, x_{3}, x_{4}), \boldsymbol{y} = (y_{1}, y_{2}, y_{3}, y_{4}), g(\boldsymbol{x}, \boldsymbol{y}) = x_{1}y_{2} + 2x_{1}y_{3} - 3x_{3}y_{3}$ 

(B) $V$ 是 $\mathbb{F}$ 上的四维行向量空间, $\pmb{x} = (x_{1}, x_{2}, x_{3}, x_{4}), \pmb{y} = (y_{1}, y_{2}, y_{3}, y_{4}), g(\pmb{x}, \pmb{y}) = x_{1}y_{1} + 2x_{1}y_{3} - 2x_{2}y_{1} + x_{2}y_{2} + x_{3}y_{2} + 4x_{3}y_{3}$ 

(C) V 是 n 维实列向量空间, A 是 n 阶幂等矩阵, $A \neq I_{n}$ , $g(x, y) = x' A y$ 

(D) V 是 n 阶矩阵组成的线性空间, $g(A, B) = \operatorname{tr}(AB)$ 

8. 设 g, h 是 V 上两个非退化的纯量积, $v_{1}, v_{2}, \cdots, v_{n}$ 是 V 的基, g 在这组基下的表示矩阵为 A, h 在这组基下的表示矩阵为 B. 设 $\varphi$ 是 V 上的线性变换, 使得 $h(x, y) = g(\varphi(x), y)$ , 则 $\varphi$ 在上述基下的表示矩阵为 ( ).

(A) $A^{-1}B$ 

(B) $BA^{-1}$ 

(C) $B'(A^{-1})'$ 

(D) $(A^{-1})'B'$ 

9. 数域 F 上两个 n 阶反对称矩阵合同的充要条件是（）.

(A) 它们相抵

(B) 它们的特征值相同

(C) 它们相似

(D) 作为复矩阵它们酉相似

10. $U, V$ 分别是数域 $\mathbb{F}$ 上的 $m$ 维和 $n$ 维线性空间, 则由 $U \times V \to \mathbb{F}$ 全体双线性型组成的线性空间的维数是 ( ).

(A) m 

(B) n 

(C) $m + n$ 

(D) mn 

#### 二、填空题

1. 若 $\dim V = n$ ，则 $\dim V^{*} = (\quad)$ .

2. 设 $\varphi$ 是线性空间 $V$ 到 $U$ 的线性映射, 它在 $V$ 和 $U$ 的一对基下的表示矩阵为 $\mathbf{A}$ , 则 $\varphi$ 的对偶映射 $\varphi^{*}$ 在对偶基下的表示矩阵是 ( ).

3. 设 $V$ 和 $U$ 分别是数域 $\mathbb{F}$ 上的 $n$ 维和 $m$ 维线性空间, $\varphi$ 是 $V$ 到 $U$ 的线性映射. 已知 $\dim \operatorname{Im} \varphi = r$ , 则 $\dim \operatorname{Ker} \varphi^{*} = (\quad)$ .

4. 设 $V$ 是数域 $\mathbb{F}$ 上的 $n$ 维线性空间, $V^{*}$ 是 $V$ 的对偶空间. 设 $\{e_1, \cdots, e_n\}, \{e_1', \cdots, e_n'\}$ 是 $V$ 的两组基, 且从 $\{e_1, \cdots, e_n\}$ 到 $\{e_1', \cdots, e_n'\}$ 的过渡矩阵是 $P$ . 又假设 $\{f_1, \cdots, f_n\}$ 和

$\{f_{1}^{\prime},\cdots,f_{n}^{\prime}\}$ 分别是 $\{e_{1},\cdots,e_{n}\}$ 和 $\{e_{1}^{\prime},\cdots,e_{n}^{\prime}\}$ 的对偶基，则从 $\{f_{1},\cdots,f_{n}\}$ 到 $\{f_{1}^{\prime},\cdots,f_{n}^{\prime}\}$ 的过渡矩阵是（）.

5. 设 g 是 $V \times U \rightarrow F$ 的双线性型, $g^{*}$ 是 $U^{*} \times V^{*} \rightarrow F$ 的双线性型. 假设 g 在 V 的基 $v_{1}, v_{2}, \cdots, v_{n}$ 及 U 的基 $u_{1}, u_{2}, \cdots, u_{m}$ 下的表示矩阵为 A, $g^{*}$ 在 $U^{*}$ 的对偶基 $u_{1}^{*}, u_{2}^{*}, \cdots, u_{m}^{*}$ 及 $V^{*}$ 的对偶基 $v_{1}^{*}, v_{2}^{*}, \cdots, v_{n}^{*}$ 下的表示矩阵为 B. 问 A 和 B 满足什么条件时, 必有 $g(v_{i}, u_{j}) = g^{*}(u_{j}^{*}, v_{i}^{*})$ ?

6. 设 $U$ 和 $V$ 分别是数域 $\mathbb{F}$ 上的 $m$ 维和 $n$ 维线性空间, $g$ 是 $U \times V \to \mathbb{F}$ 的双线性型. 假设 $g$ 在一对基下的表示矩阵为 $\pmb{A}$ 且 $\pmb{A}$ 的秩为 $r$ , 则 $g$ 的左根子空间的维数是 ( ), $g$ 的右根子空间的维数为 ( ).

7. 设 g 是线性空间 V 上的纯量积, $\varphi$ 是 V 上的线性变换, $v_{1}, v_{2}, \cdots, v_{n}$ 是 V 的一组基, g 在这组基下的表示矩阵为 A, $\varphi$ 在这组基下的表示矩阵为 B, 则双线性型 $h(x, y) = g(\varphi(x), y)$ 在这组基下的表示矩阵为 ( ).

8. 设 $V$ 是由实数域上次数小于 3 的多项式全体组成的线性空间, 定义双线性型

$$
g (f _ {1} (x), f _ {2} (x)) = \int_ {0} ^ {1} f _ {1} (x) f _ {2} (x) \mathrm{d} x.
$$

写出 g 在基 $1, x, x^{2}$ 下的表示矩阵.

9. 将 V 上的纯量积 g 表示为一个对称型和一个交错型之和.

10. 设 V 是 n 维线性空间, 则 V 上所有交错型组成的线性空间的维数为 ( ).

### 10.6.2 训练题答案

#### 一、单选题

1. 应选择 (C). $\varphi$ 是单映射的充要条件是 $\varphi^{*}$ 是满映射.

2. 应选择 (B). 计算方法参考填空题 4.

3. 应选择 (B). 设 $\varphi$ 的秩为 $r$ , 则 $\dim \operatorname{Ker} \varphi = n - r$ , 故 $\dim (\operatorname{Ker} \varphi)^\perp = r = \dim \operatorname{Im} \varphi$ .

4. 应选择 (D).

5. 应选择 (B).

6. 应选择 (A).

7. 应选择 (D). 事实上, (A), (B) 中纯量积的表示矩阵都是奇异阵, 因此是退化的. 当矩阵 $\mathbf{A}$ 是幂等矩阵而非单位矩阵时, $\mathbf{A}$ 必是奇异阵, 故 (C) 也是退化的. 若 $g(\mathbf{AB}) = \operatorname{tr}(\mathbf{AB}) = 0$ 对任意的矩阵 $\mathbf{B}$ 成立, 取 $\mathbf{B} = \mathbf{E}_{ji}$ , 则可得 $a_{ij} = 0 (1 \leq i, j \leq n)$ , 即有 $\mathbf{A} = \mathbf{O}$ , 从而 $g$ 是非退化的.

8. 应选择 (D). 不妨设 $V$ 是 $n$ 维列向量空间, 又设 $C$ 是 $\varphi$ 的表示矩阵, 则

$$
h (x, y) = x ^ {\prime} B y = g (C x, y) = (C x) ^ {\prime} A y = x ^ {\prime} C ^ {\prime} A y.
$$

因此 $C = (BA^{-1})' = (A^{-1})'B'$ .

9. 应选择 (A). 同阶反对称矩阵合同的充要条件是它们的秩相等.

10. 应选择 (D). 选定 $U, V$ 的基后, $U \times V \to \mathbb{F}$ 的双线性型组成的线性空间和 $\mathbb{F}$ 上 $m \times n$ 矩阵组成的线性空间同构, 因此维数等于 $mn$ .

#### 二、填空题

1. n. 

2. $A'$ . 

3. 设 A 是 $\varphi$ 的表示矩阵, 由于 A 和 $A'$ 的秩相等, 故 Im $\varphi$ 和 Im $\varphi^{*}$ 具有相同的维数, 因此 dim Ker $\varphi^{*} = m - r$ .

4. 设 $P = (p_{ij})$ ，又设从 $\{f_{1}^{\prime}, \cdots, f_{n}^{\prime}\}$ 到 $\{f_{1}, \cdots, f_{n}\}$ 的过渡矩阵为 $Q = (q_{ij})$ ，于是

$$
\boldsymbol {f} _ {j} = q _ {1 j} \boldsymbol {f} _ {1} ^ {\prime} + \dots + q _ {n j} \boldsymbol {f} _ {n} ^ {\prime}, \quad \boldsymbol {e} _ {i} ^ {\prime} = p _ {1 i} \boldsymbol {e} _ {1} + \dots + p _ {n i} \boldsymbol {e} _ {n},
$$

从而 $\langle f_{j}, e_{i}^{\prime}\rangle = q_{ij} = p_{ji}$ ，即 $Q = P^{\prime}$ 。因此从 $\{f_{1}, \cdots, f_{n}\}$ 到 $\{f_{1}^{\prime}, \cdots, f_{n}^{\prime}\}$ 的过渡矩阵是 $(P^{\prime})^{-1}$ 。

5. $B = A'$ . 

6. g 的左根子空间的维数为 m-r，右根子空间的维数为 n-r.

7. $B'A$ . 

8. 表示矩阵为 $\begin{pmatrix}1&\frac{1}{2}&\frac{1}{3}\\ \frac{1}{2}&\frac{1}{3}&\frac{1}{4}\\ \frac{1}{3}&\frac{1}{4}&\frac{1}{5}\end{pmatrix}$ .

9. $g = \frac{1}{2} (g + g^{*}) + \frac{1}{2} (g - g^{*})$ ，其中 $g^{*}(\pmb {x},\pmb {y}) = g(\pmb {y},\pmb{x})$ 

10. 交错型的表示矩阵为反对称矩阵, 因此答案为 $\frac{1}{2}n(n-1)$ .
