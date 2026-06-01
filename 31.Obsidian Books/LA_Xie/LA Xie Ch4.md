# 第4章 线性映射

## § 4.1 基本概念

### 4.1.1 线性映射及运算

#### 1. 定义

设 $\varphi$ 是数域 F 上向量空间 V 到 U 的映射, 如果 $\varphi$ 适合下列条件:

(1) $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta), \alpha, \beta \in V;$ 

(2) $\varphi(k\alpha)=k\varphi(\alpha),\quad\alpha\in V,k\in\mathbb{F},$ 

则称 $\varphi$ 是向量空间 $V$ 到 $U$ 的线性映射. 若 $\varphi$ 是单映射, 则称之为单线性映射; 若 $\varphi$ 是满映射, 则称之为满线性映射; 若 $\varphi$ 既满又单 (即一一对应), 则称之为线性同构.

同一向量空间 V 上的线性映射称为 V 上的线性变换.

#### 2. 线性映射的运算

设 $\varphi$ 和 $\psi$ 是 $V \to U$ 的线性映射, 定义它们的加法和数乘如下:

(1) $(\varphi + \psi)(\alpha) = \varphi(\alpha) + \psi(\alpha)$ ; 

(2) $(k\varphi)(\alpha)=k\varphi(\alpha),$ 

则 $\varphi + \psi, k\varphi$ 都是 $V \to U$ 的线性映射. 若记 $\mathcal{L}(V, U)$ 为 $V$ 到 $U$ 的线性映射全体组成的集合, 则 $\mathcal{L}(V, U)$ 也是 $\mathbb{F}$ 上的向量空间.

$V$ 上的全体线性变换记为 $\mathcal{L}(V)$ , 在 $\mathcal{L}(V)$ 上定义线性变换的乘法为映射的复合, 即

$$
(\varphi \psi) (\alpha) = \varphi (\psi (\alpha)).
$$

在此乘法下， $\mathcal{L}(V)$ 成为 F-代数.

### 4.1.2 线性映射与矩阵

#### 1. 线性映射的表示矩阵

设 $\varphi$ 是 $V\to U$ 的线性映射，分别取 $V$ 和 $U$ 的基如下：

$$
V: e _ {1}, e _ {2}, \dots , e _ {n}; U: f _ {1}, f _ {2}, \dots , f _ {m}.
$$

假设有

$$
\left\{ \begin{array}{l} \varphi (e _ {1}) = a _ {1 1} f _ {1} + a _ {2 1} f _ {2} + \dots + a _ {m 1} f _ {m}, \\ \varphi (e _ {2}) = a _ {1 2} f _ {1} + a _ {2 2} f _ {2} + \dots + a _ {m 2} f _ {m}, \\ \dots \dots \\ \varphi (e _ {n}) = a _ {1 n} f _ {1} + a _ {2 n} f _ {2} + \dots + a _ {m n} f _ {m}, \end{array} \right.
$$

则矩阵

$$
\left( \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right)
$$

称为线性映射 $\varphi$ 在给定基下的表示矩阵.

注 若 $\varphi$ 是向量空间 V 上的线性变换, 则取 V 的一组基, 而不取两组基.

#### 2. 线性映射及其表示矩阵的关系

取定基以后, 数域 $\mathbb{F}$ 上 $n$ 维向量空间 $V$ 到 $m$ 维向量空间 $U$ 的线性映射集合与数域 $\mathbb{F}$ 上 $m \times n$ 矩阵集合之间存在一个一一对应, 即将线性映射 $\varphi$ 映为它在取定基下的表示矩阵. 这个一一对应还是一个线性同构. 对向量空间 $V$ 上的线性变换, 这个一一对应还保持乘法, 即将线性变换的乘法映为相应表示矩阵的乘法.

#### 3. 定义

设 A, B 是数域 F 上的 n 阶矩阵, 若存在数域 F 上的可逆矩阵 P, 使得 $B = P^{-1}AP$ , 则称矩阵 A 和 B 相似.

#### 4. 定理

设 V 是数域 F 上的 n 维向量空间, $\varphi$ 是 V 上的线性变换, $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 和 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 是 V 的两组基, 从第一组基到第二组基的过渡矩阵为 P. 假设 $\varphi$ 在第一组基下的表示矩阵为 A, 在第二组基下的表示矩阵为 B, 则 $B = P^{-1}AP$ , 即向量空间上同一个线性变换在不同基下的表示矩阵必相似.

### 4.1.3 像与核

#### 1. 定义

设 $\varphi$ 是数域 $\mathbb{F}$ 上向量空间 $V$ 到 $U$ 的线性映射, $\varphi$ 的全体像元素构成 $U$ 的子空间, 称为 $\varphi$ 的像空间, 记为 $\operatorname{Im} \varphi$ . 像空间的维数称为 $\varphi$ 的秩. $V$ 中在 $\varphi$ 下映射为零向量的全体向量构成 $V$ 的子空间, 称为 $\varphi$ 的核空间, 记为 $\operatorname{Ker} \varphi$ . 核空间的维数称为 $\varphi$ 的零度.

#### 2. 定理

设 $\varphi$ 是数域 $\mathbb{F}$ 上向量空间 $V$ 到 $U$ 的线性映射, $\pmb{A}$ 是 $\varphi$ 在任意给定基下的表示矩阵, 则 $\varphi$ 的秩等于 $\pmb{A}$ 的秩, $\varphi$ 的零度等于 $V$ 的维数减去 $\pmb{A}$ 的秩.

#### 3. 定理 (线性映射维数公式)

设 $\varphi$ 是数域 $\mathbb{F}$ 上向量空间 $V$ 到 $U$ 的线性映射, 则

$$
\dim \operatorname{Im} \varphi + \dim \operatorname{Ker} \varphi = \dim V.
$$

#### 4. 推论

n 维向量空间 V 上的线性变换 $\varphi$ 是可逆变换的充要条件是, 它在 V 的任意一组基下的表示矩阵是可逆矩阵.

#### 5. 推论

n 维向量空间 V 上的线性变换 $\varphi$ 是可逆变换的充要条件是, 它是单映射或它是满映射.

### 4.1.4 不变子空间

#### 1. 定义

设 $\varphi$ 是数域 $\mathbb{F}$ 上向量空间 $V$ 上的线性变换, $W$ 是 $V$ 的子空间, 若 $W$ 适合条件 $\varphi(W) \subseteq W$ , 则称 $W$ 是 $\varphi$ 的不变子空间.

#### 2. 定理

设 $\varphi$ 是数域 F 上向量空间 V 上的线性变换, W 是 $\varphi$ 的不变子空间. 若取 W 的一组基 $\{e_{1},\cdots,e_{r}\}$ , 再扩张为 V 的一组基 $\{e_{1},\cdots,e_{r},e_{r+1},\cdots,e_{n}\}$ , 则 $\varphi$ 在这组基下的表示矩阵具有下列分块上三角矩阵的形状:

$$
\left( \begin{array}{c c} A _ {1 1} & A _ {1 2} \\ O & A _ {2 2} \end{array} \right),
$$

其中 $A_{11}$ 是一个 r 阶矩阵.

#### 3. 推论

设 $\varphi$ 是数域 F 上向量空间 V 上的线性变换, $V_{1}, V_{2}, \cdots, V_{m}$ 是 $\varphi$ 的不变子空间且 $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{m}$ . 若取 $V_{i}$ 的基拼成 V 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 则 $\varphi$ 在这组基下的表示矩阵具有下列分块对角矩阵的形状:

$$
\left( \begin{array}{c c c c} A _ {1 1} & & & \\ & A _ {2 2} & & \\ & & \ddots & \\ & & & A _ {m m} \end{array} \right).
$$

## § 4.2 线性映射及其运算

在许多问题中, 常常需要定义向量空间之间的线性映射 (或某一向量空间上的线性变换). 一般来说, 无须对向量空间中的每个元素进行定义, 我们可采用下列两种方法来简化定义: 第一, 只要对向量空间的基向量进行定义即可; 第二, 若向量空间可分解为两个 (或多个) 子空间的直和, 则只要对每个子空间进行定义即可. 第一种方法的理论基础是下面的例 4.1; 第二种方法的理论基础是下面的例 4.2. 后面的几个例子用来说明其应用.

例 4.1 设 V 和 U 是数域 F 上的向量空间, $e_{1}, e_{2}, \cdots, e_{n}$ 是 V 的一组基, $u_{1}, u_{2}, \cdots, u_{n}$ 是 U 中 n 个向量, 求证: 存在唯一的 V 到 U 的线性映射 $\varphi$ , 使得 $\varphi(e_{i}) = u_{i}$ .

证明 先证存在性. 对任意的 $\alpha \in V$ ，设 $\alpha = a_{1}e_{1} + a_{2}e_{2} + \cdots + a_{n}e_{n}$ ，则 $a_{1}, a_{2}, \cdots, a_{n}$ 被 $\alpha$ 唯一确定. 令

$$
\varphi (\alpha) = a _ {1} \boldsymbol {u} _ {1} + a _ {2} \boldsymbol {u} _ {2} + \dots + a _ {n} \boldsymbol {u} _ {n},
$$

则 $\varphi$ 是 V 到 U 的映射. 若另有 $\beta = b_{1}e_{1} + b_{2}e_{2} + \cdots + b_{n}e_{n}$ ，则

$$
\varphi (\alpha + \beta) = (a _ {1} + b _ {1}) \boldsymbol {u} _ {1} + (a _ {2} + b _ {2}) \boldsymbol {u} _ {2} + \dots + (a _ {n} + b _ {n}) \boldsymbol {u} _ {n} = \varphi (\alpha) + \varphi (\beta).
$$

又对 F 中的任意元素 k, 有

$$
\varphi (k \alpha) = k a _ {1} \boldsymbol {u} _ {1} + k a _ {2} \boldsymbol {u} _ {2} + \dots + k a _ {n} \boldsymbol {u} _ {n} = k \varphi (\alpha).
$$

因此 $\varphi$ 是线性映射, 显然它满足 $\varphi(e_{i}) = u_{i}$ .

设另有 V 到 U 的线性映射 $\psi$ 满足 $\psi(e_{i}) = u_{i}$ ，则对任意的 $\alpha \in V$ ，有

$$
\begin{array}{l} \psi (\alpha) = \psi \left(a _ {1} e _ {1} + a _ {2} e _ {2} + \dots + a _ {n} e _ {n}\right) \\ = a _ {1} \psi (e _ {1}) + a _ {2} \psi (e _ {2}) + \dots + a _ {n} \psi (e _ {n}) \\ = a _ {1} \boldsymbol {u} _ {1} + a _ {2} \boldsymbol {u} _ {2} + \dots + a _ {n} \boldsymbol {u} _ {n} = \varphi (\alpha). \\ \end{array}
$$

因此 $\psi = \varphi$ ，这就证明了唯一性。□

注 这是一个重要的命题, 通常称为线性扩张定理. 它表明只要选定 $V$ 的一组基和 $U$ 中 $n$ 个向量, 则有且仅有一个线性映射将基向量映到对应的向量. 后面我们将经常采用线性扩张定理来构造线性映射以及判定两个线性映射是否相等.

例 4.2 设线性空间 $V = V_{1} \oplus V_{2}$ ，并且 $\varphi_{1}$ 及 $\varphi_{2}$ 分别是 $V_{1}, V_{2}$ 到 U 的线性映射，求证：存在唯一的从 V 到 U 的线性映射 $\varphi$ ，当 $\varphi$ 限制在 $V_{i}$ 上时等于 $\varphi_{i}$ .

证明 因为 $V = V_{1} \oplus V_{2}$ , 故对任意的 $\alpha \in V$ , $\alpha$ 可唯一地写为 $\alpha = \alpha_{1} + \alpha_{2}$ , 其中 $\alpha_{1} \in V_{1}, \alpha_{2} \in V_{2}$ . 令 $\varphi(\alpha) = \varphi_{1}(\alpha_{1}) + \varphi_{2}(\alpha_{2})$ , 则 $\varphi$ 是 $V$ 到 $U$ 的映射. 不难验证 $\varphi$ 保持加法和数乘, 因此 $\varphi$ 是线性映射. 若另有线性映射 $\psi$ , 它在 $V_{i}$ 上的限制等于 $\varphi_{i}$ , 则

$$
\psi (\alpha) = \psi (\alpha_ {1}) + \psi (\alpha_ {2}) = \varphi_ {1} (\alpha_ {1}) + \varphi_ {2} (\alpha_ {2}) = \varphi (\alpha).
$$

因此 $\psi = \varphi$ ，唯一性得证。□

注 例 4.2 可以推广到多个子空间的情形: 设 $V = V_{1} \oplus \cdots \oplus V_{m}$ ，给定线性映射 $\varphi_{i}: V_{i} \to U (1 \leq i \leq m)$ ，则存在唯一的线性映射 $\varphi: V \to U$ ，使得 $\varphi|_{V_{i}} = \varphi_{i} (1 \leq i \leq m)$ 。我们可以把这样的线性映射 $\varphi$ 简记为 $\varphi_{1} \oplus \cdots \oplus \varphi_{m}$ 。

例 4.3 设 $\varphi$ 是有限维线性空间 V 到 U 的线性映射, 求证: 必存在 U 到 V 的线性映射 $\psi$ , 使得 $\varphi\psi\varphi = \varphi$ .

证明 设 V 和 U 的维数分别是 n 和 m. 由例 4.22 可知, 存在 V 和 U 的基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , $\{f_{1}, f_{2}, \cdots, f_{m}\}$ , 使得 $\varphi$ 在这两组基下的表示矩阵为

$$
\left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right).
$$

这就是 $\varphi(e_i) = f_i, 1 \leq i \leq r; \varphi(e_j) = 0, r + 1 \leq j \leq n$ . 定义 $\psi$ 是 $U$ 到 $V$ 的线性映射, 它在基上的作用为

$$
\psi \left(\boldsymbol {f} _ {i}\right) = \boldsymbol {e} _ {i}, 1 \leq i \leq r; \quad \psi \left(\boldsymbol {f} _ {j}\right) = \mathbf {0}, r + 1 \leq j \leq m,
$$

则在 V 的基上, 有

$$
\begin{array}{l} \varphi \psi \varphi (e _ {i}) = \varphi \psi (f _ {i}) = \varphi (e _ {i}), 1 \leq i \leq r; \\ \varphi \psi \varphi (e _ {j}) = \varphi \psi (\mathbf {0}) = \mathbf {0} = \varphi (e _ {j}), r + 1 \leq j \leq n. \\ \end{array}
$$

于是 $\varphi \psi \varphi = \varphi$ . □

例 4.4 设有数域 F 上的有限维线性空间 V, V', 又 U 是 V 的子空间, $\varphi$ 是 U 到 V' 的线性映射. 求证: 必存在 V 到 V' 的线性映射 $\psi$ , 它在 U 上的限制就是 $\varphi$ .

证明 令 $W$ 是子空间 $U$ 在 $V$ 中的补空间, 即 $V = U \oplus W$ . 定义 $\psi$ 为 $V$ 到 $V'$ 的线性映射, 它在 $U$ 上的限制是 $\varphi$ , 它在 $W$ 上的限制是零线性映射, 这样的 $\psi$ 即为所求. $\square$ 

例 4.5 设 V, U 是 F 上的有限维线性空间, $\varphi$ 是 V 到 U 的线性映射, 求证:

(1) $\varphi$ 是单映射的充要条件是存在 $U$ 到 $V$ 的线性映射 $\psi$ , 使 $\psi \varphi = \mathbf{I}\mathbf{d}_V$ , 这里 $\mathbf{I}\mathbf{d}_V$ 表示 $V$ 上的恒等映射;

(2) $\varphi$ 是满映射的充要条件是存在 $U$ 到 $V$ 的线性映射 $\eta$ , 使 $\varphi \eta = \mathbf{I}\mathbf{d}_U$ , 这里 $\mathbf{I}\mathbf{d}_U$ 表示 $U$ 上的恒等映射.

证明 (1) 若 $\psi \varphi = \mathrm{Id}_V$ , 则对任意的 $v \in \operatorname{Ker} \varphi$ , $v = \psi(\varphi(v)) = 0$ , 即 $\operatorname{Ker} \varphi = 0$ , 从而 $\varphi$ 是单映射. 反之, 若 $\varphi$ 是单映射, 则定义映射 $\varphi_1: V \to \operatorname{Im} \varphi$ , 它与 $\varphi$ 有相同的映射法则, 但值域变为 $\operatorname{Im} \varphi$ . 容易验证 $\varphi_1$ 是线性同构. 设 $U_0$ 是 $\operatorname{Im} \varphi$ 在 $U$ 中的补空间, 即 $U = \operatorname{Im} \varphi \oplus U_0$ . 定义 $\psi$ 为 $U$ 到 $V$ 的线性映射, 它在 $\operatorname{Im} \varphi$ 上的限制为 $\varphi_1^{-1}$ , 它在 $U_0$ 上的限制是零线性映射, 则容易验证 $\psi \varphi = \mathrm{Id}_V$ 成立.

(2) 若 $\varphi \eta = \mathbf{Id}_U$ , 则对任意的 $u \in U$ , $u = \varphi(\eta(u))$ , 从而 $\varphi$ 是满映射. 反之, 若 $\varphi$ 是满映射, 则可取 $U$ 的一组基 $f_1, f_2, \cdots, f_m$ 以及 $V$ 中的向量 $v_1, v_2, \cdots, v_m$ , 使得 $\varphi(v_i) = f_i (1 \leq i \leq m)$ . 定义 $\eta$ 为 $U$ 到 $V$ 的线性映射, 它在基上的作用为 $\eta(f_i) = v_i (1 \leq i \leq m)$ , 则容易验证 $\varphi \eta = \mathbf{Id}_U$ 成立. $\square$ 

例 4.6 设 V, U 是数域 K 上的有限维线性空间, $\varphi, \psi : V \to U$ 是两个线性映射, 证明: 存在 U 上的线性变换 $\xi$ , 使得 $\psi = \xi \varphi$ 成立的充要条件是 $\operatorname{Ker} \varphi \subseteq \operatorname{Ker} \psi$ .

证明 先证必要性: 任取 $\pmb{v} \in \operatorname{Ker} \varphi$ , 则 $\psi(\pmb{v}) = \pmb{\xi} \varphi(\pmb{v}) = \mathbf{0}$ , 即有 $\pmb{v} \in \operatorname{Ker} \psi$ , 从而 $\operatorname{Ker} \varphi \subseteq \operatorname{Ker} \psi$ . 再证充分性: 设 $\dim V = n$ , $\dim U = m$ , $\dim \operatorname{Ker} \varphi = n - r$ . 取 $\operatorname{Ker} \varphi$ 的一组基 $e_{r+1}, \cdots, e_n$ , 扩张为 $V$ 的一组基 $e_1, \cdots, e_r, e_{r+1}, \cdots, e_n$ . 由例 4.23 的证明可知, $\varphi(e_1), \cdots, \varphi(e_r)$ 是 $\operatorname{Im} \varphi$ 的一组基, 将其扩张为 $U$ 的一组基 $\varphi(e_1), \cdots, \varphi(e_r), g_{r+1}, \cdots, g_m$ . 定义 $\pmb{\xi}$ 为 $U$ 上的线性变换, 它在基上的作用为: $\pmb{\xi} (\varphi(e_i)) = \psi(e_i) (1 \leq i \leq r)$ , $\pmb{\xi}(g_j) = \mathbf{0} (r + 1 \leq j \leq m)$ . 由于 $\operatorname{Ker} \varphi \subseteq \operatorname{Ker} \psi$ , 故容易验证 $\psi(e_i) = \pmb{\xi} \varphi(e_i) (1 \leq i \leq n)$ 成立, 从而 $\psi = \pmb{\xi} \varphi$ . □

例 4.7 设 V, U 是数域 K 上的有限维线性空间, $\varphi, \psi : V \to U$ 是两个线性映射, 证明: 存在 V 上的线性变换 $\xi$ , 使得 $\psi = \varphi\xi$ 成立的充要条件是 $\operatorname{Im} \psi \subseteq \operatorname{Im} \varphi$ .

证明 先证必要性: 任取 $\pmb{v} \in V$ , 则 $\psi(\pmb{v}) = \varphi(\pmb{\xi}(\pmb{v})) \in \operatorname{Im} \varphi$ , 从而 $\operatorname{Im} \psi \subseteq \operatorname{Im} \varphi$ . 再证充分性: 取 $V$ 的一组基 $\pmb{e}_1, \pmb{e}_2, \dots, \pmb{e}_n$ , 则 $\psi(\pmb{e}_i) \in \operatorname{Im} \psi \subseteq \operatorname{Im} \varphi$ , 从而存在 $\pmb{f}_i \in V$ , 使得 $\varphi(\pmb{f}_i) = \psi(\pmb{e}_i) (1 \leq i \leq n)$ . 定义 $\pmb{\xi}$ 为 $V$ 上的线性变换, 它在基上的作用为: $\pmb{\xi}(\pmb{e}_i) = \pmb{f}_i (1 \leq i \leq n)$ . 容易验证 $\psi(\pmb{e}_i) = \varphi\pmb{\xi}(\pmb{e}_i) (1 \leq i \leq n)$ 成立, 从而 $\psi = \varphi\xi$ . □

例 4.8 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, $\alpha \in V$ . 若 $\varphi^{m-1}(\alpha) \neq 0$ , 而 $\varphi^{m}(\alpha) = 0$ , 求证: $\alpha, \varphi(\alpha), \varphi^{2}(\alpha), \cdots, \varphi^{m-1}(\alpha)$ 线性无关.

证明 设有 m 个数 $a_{0}, a_{1}, \cdots, a_{m-1}$ ，使得

$$
a _ {0} \boldsymbol {\alpha} + a _ {1} \varphi (\boldsymbol {\alpha}) + \dots + a _ {m - 1} \varphi^ {m - 1} (\boldsymbol {\alpha}) = \mathbf {0}.
$$

上式两边同时作用 $\varphi^{m-1}$ ，则有 $a_{0}\varphi^{m-1}(\alpha)=0$ ，由于 $\varphi^{m-1}(\alpha)\neq0$ ，故 $a_{0}=0$ 。上式两边同时作用 $\varphi^{m-2}$ ，则有 $a_{1}\varphi^{m-1}(\alpha)=0$ ，由于 $\varphi^{m-1}(\alpha)\neq0$ ，故 $a_{1}=0$ 。不断这样做下去，最后可得 $a_{0}=a_{1}=\cdots=a_{m-1}=0$ ，于是 $\alpha,\varphi(\alpha),\varphi^{2}(\alpha),\cdots,\varphi^{m-1}(\alpha)$ 线性无关。☐

例 4.9 设 V 是数域 K 上的 n 维线性空间, $\varphi$ 是 V 上的幂零线性变换, 满足 $\mathrm{r}(\varphi)=n-1$ . 求证: 存在 V 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & 0 \\ 1 & 0 & \dots & 0 & 0 \\ 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{array} \right).
$$

证明 由假设存在正整数 m，使得 $\varphi^{m}=0,\varphi^{m-1}\neq0$ ，从而存在 $\alpha\in V$ ，使得 $\varphi^{m}(\alpha)=0,\varphi^{m-1}(\alpha)\neq0$ 。由例 4.8 可知， $\alpha,\varphi(\alpha),\cdots,\varphi^{m-1}(\alpha)$ 线性无关，于是 $m\leq\dim V=n$ 。另一方面，由 Sylvester 不等式（例 3.66）以及 $r(\varphi)=n-1$ 可知， $r(\varphi^{2})\geq2r(\varphi)-n=n-2$ 。不断这样讨论下去，最终可得 $0=r(\varphi^{m})\geq n-m$ ，即有 $m\geq n$ ，从而 m=n。于是 $\alpha,\varphi(\alpha),\cdots,\varphi^{n-1}(\alpha)$ 是 V 的一组基， $\varphi$ 在这组基下的表示矩阵为 A。☐

## § 4.3 线性同构

线性同构刻画了不同线性空间之间的相同本质, 即同构的线性空间具有相同的线性结构 (或从线性结构的观点来看没有任何区别). 要证明线性映射 $\varphi: V \to U$ 是线性同构, 通常一方面需要验证 $\varphi$ 是单映射 (或等价地验证 $\operatorname{Ker} \varphi = 0$ ), 另一方面需要验证 $\varphi$ 是满映射 (或等价地验证 $\operatorname{Im} \varphi = U$ ). 但若已知前后两个线性空间的维数相等, 则由线性映射的维数公式容易证明, $\varphi$ 是线性同构当且仅当 $\varphi$ 是单映射, 也当且仅当 $\varphi$ 是满映射, 从而只需验证 $\varphi$ 是单映射或满映射即可得到 $\varphi$ 是线性同构. 在 §3.4 中, 我们已经看到了线性同构的一些例子和应用, 下面再来看一些典型例题.

例 4.10 设 $a_{0}, a_{1}, \cdots, a_{n}$ 是数域 F 中 $n+1$ 个不同的数, V 是 F 上次数不超过 n 的多项式全体组成的线性空间. 设 $\varphi$ 是 V 到 $n+1$ 维行向量空间 U 的映射:

$$
\varphi (f) = \left(f \left(a _ {0}\right), f \left(a _ {1}\right), \dots , f \left(a _ {n}\right)\right),
$$

求证: $\varphi$ 是线性同构.

证明 不难验证 $\varphi$ 是一个线性映射. 若 $f(x) \in \operatorname{Ker} \varphi$ , 则 $f(a_{i}) = 0 (0 \leq i \leq n)$ . 因为 $f(x)$ 的次数不超过 $n$ , 故由例 1.30 可知 $f(x) = 0$ , 即 $\operatorname{Ker} \varphi = 0$ , 这证明了映射 $\varphi$ 是单映射. 注意到线性空间 $V$ 和 $U$ 的维数都等于 $n + 1$ , 因此 $\varphi$ 是线性同构. $\square$ 

例 4.11 (Lagrange 插值公式) 设 $a_{0}, a_{1}, \cdots, a_{n}$ 是数域 F 中 $n+1$ 个不同的数, $b_{0}, b_{1}, \cdots, b_{n}$ 是 F 中任意 $n+1$ 个数, 求证: 必存在 F 上次数不超过 n 的多项式 $f(x)$ , 使得 $f(a_{i}) = b_{i} (0 \leq i \leq n)$ , 并将 $f(x)$ 构造出来.

证明 上题已证明映射 $\varphi$ 是映上的, 因此存在性已经证明. 现来构造 $f(x)$ .

设 $e_{i}=(0,\cdots,1,\cdots,0)(1\leq i\leq n+1)$ 是 F 上的 $n+1$ 维标准单位行向量. 对任意的 $0\leq i\leq n$ , 令

$$
f _ {i} (x) = \frac {(x - a _ {0}) \cdots (x - a _ {i - 1}) (x - a _ {i + 1}) \cdots (x - a _ {n})}{(a _ {i} - a _ {0}) \cdots (a _ {i} - a _ {i - 1}) (a _ {i} - a _ {i + 1}) \cdots (a _ {i} - a _ {n})},
$$

则 $f_{i}(a_{i}) = 1, f_{i}(a_{j}) = 0 (j \neq i)$ , 于是 $\varphi(f_{i}) = e_{i+1} (0 \leq i \leq n)$ . 再令

$$
f (x) = b _ {0} f _ {0} (x) + b _ {1} f _ {1} (x) + \dots + b _ {n} f _ {n} (x),
$$

则容易验证 $\varphi(f)=(b_{0},b_{1},\cdots,b_{n})$ ，即 $f(a_{i})=b_{i}(0\leq i\leq n)$ 成立. □

要证明某个有限维线性空间 $V$ 上的线性变换 $\varphi$ 是自同构 (可逆线性变换), 通常有 3 种方法. 一是可尝试直接构造出 $\varphi$ 的逆变换. 二是证明 $\varphi$ 是单映射或者 $\varphi$ 是满映射 (两者只需其一). 三是用矩阵方法, 即选取 $V$ 的一组基, 设 $\varphi$ 在这组基下的表示矩阵为 $A$ , 设法证明 $A$ 是可逆矩阵. 下面是几个典型的例子.

例 4.12 设 $\varphi$ 是数域 F 上线性空间 V 上的线性变换, 若存在正整数 n 以及 $a_{1}, a_{2}, \cdots, a_{n} \in F$ , 使得

$$
\varphi^ {n} + a _ {1} \varphi^ {n - 1} + \dots + a _ {n - 1} \varphi + a _ {n} I _ {V} = 0,
$$

其中 $I_{V}$ 表示恒等变换并且 $a_{n} \neq 0$ ，求证： $\varphi$ 是 V 上的自同构.

证明 由条件可得

$$
\varphi^ {n} + a _ {1} \varphi^ {n - 1} + \dots + a _ {n - 1} \varphi = - a _ {n} I _ {V},
$$

从而

$$
\varphi \left(- \frac {1}{a _ {n}} \left(\varphi^ {n - 1} + \dots + a _ {n - 1} I _ {V}\right)\right) = I _ {V},
$$

于是

$$
\varphi^ {- 1} = - \frac {1}{a _ {n}} \left(\varphi^ {n - 1} + \dots + a _ {n - 1} I _ {V}\right). \square
$$

例 4.13 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, 证明: $\varphi$ 是可逆变换的充要条件是 $\varphi$ 将 V 的基变为基.

证明 若 $\varphi$ 是可逆变换, 则显然 $\varphi$ 将 V 的基变为基. 反之, 若 $e_{1}, e_{2}, \cdots, e_{n}$ 和 $f_{1}, f_{2}, \cdots, f_{n}$ 是 V 的两组基, 使得 $\varphi(e_{i}) = f_{i} (1 \leq i \leq n)$ , 则对任意 $\alpha \in V$ , $\alpha = \lambda_{1} f_{1} + \lambda_{2} f_{2} + \cdots + \lambda_{n} f_{n}$ , 有 $\varphi(\lambda_{1} e_{1} + \lambda_{2} e_{2} + \cdots + \lambda_{n} e_{n}) = \alpha$ , 即 $\varphi$ 是满映射, 从而是自同构. 我们也可以证明 $\varphi$ 是单映射, 从而是自同构 (留给读者完成). 另外还可以这样讨论, 设从基 $e_{1}, e_{2}, \cdots, e_{n}$ 到基 $f_{1}, f_{2}, \cdots, f_{n}$ 的过渡矩阵为 P, 则 $\varphi$ 在基 $e_{1}, e_{2}, \cdots, e_{n}$ 下的表示矩阵就是 P, 这是一个可逆矩阵, 从而 $\varphi$ 是可逆变换. □

例 4.14 设 $U_{1}, U_{2}$ 是 n 维线性空间 V 的子空间, 假设它们维数相同. 求证: 存在 V 上的可逆线性变换 $\varphi$ , 使得 $U_{2} = \varphi(U_{1})$ .

证明 取 $U_{1}$ 的一组基 $e_{1},\cdots,e_{m}$ ，并扩张为 V 的一组基 $e_{1},\cdots,e_{m},e_{m+1},\cdots,e_{n}$ ；取 $U_{2}$ 的一组基 $f_{1},\cdots,f_{m}$ ，并扩张为 V 的一组基 $f_{1},\cdots,f_{m},f_{m+1},\cdots,f_{n}$ 。定义 $\varphi$ 为 V 上的线性变换，它在基上的作用为： $\varphi(e_{i})=f_{i}(1\leq i\leq n)$ ，则由上题可知， $\varphi$ 是可逆线性变换，再由定义容易验证 $\varphi(U_{1})=U_{2}$ 成立。☐

例 4.15 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, 若对 V 中任一向量 $\alpha$ , 总存在正整数 m (m 可能和 $\alpha$ 有关), 使得 $\varphi^{m}(\alpha)=0$ . 求证: $I_{V}-\varphi$ 是自同构.

证法 1 首先证明线性变换 $\varphi$ 是幂零的. 设 $e_1, e_2, \cdots, e_n$ 是线性空间 $V$ 的一组基. 对每个 $e_i$ , 都有 $m_i$ , 使得 $\varphi^{m_i}(e_i) = 0$ , 令 $m$ 为诸 $m_i$ 中最大者. 对 $V$ 中任一向量 $v$ , 设 $v = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n$ , 则有

$$
\varphi^ {m} (\boldsymbol {v}) = a _ {1} \varphi^ {m} (\boldsymbol {e} _ {1}) + a _ {2} \varphi^ {m} (\boldsymbol {e} _ {2}) + \dots + a _ {n} \varphi^ {m} (\boldsymbol {e} _ {n}) = \mathbf {0}.
$$

因此 $\varphi^{m}=0.$ 

注意到下列等式:

$$
(I _ {V} - \varphi) (I _ {V} + \varphi + \varphi^ {2} + \dots + \varphi^ {m - 1}) = I _ {V} - \varphi^ {m} = I _ {V}.
$$

由此即知 $I_{V}-\varphi$ 是自同构.

证法2 只要证明 $I_V - \varphi$ 是单映射即可. 任取 $\alpha \in \operatorname{Ker}(I_V - \varphi)$ , 即 $(I_V - \varphi)(\alpha) = 0$ , 则 $\varphi(\alpha) = \alpha$ . 设 $m$ 为正整数, 使得 $\varphi^m(\alpha) = 0$ , 则 $0 = \varphi^m(\alpha) = \varphi^{m-1}(\alpha) = \cdots = \varphi(\alpha) = \alpha$ , 故 $\operatorname{Ker}(I_V - \varphi) = 0$ , 即 $I_V - \varphi$ 是单映射. □

例 4.16 设 $V = M_{n}(\mathbb{F})$ 是 F 上 n 阶矩阵全体组成的线性空间, A, B 是两个 n 阶矩阵, 定义 V 上的变换: $\varphi(X) = AXB$ . 求证: $\varphi$ 是 V 上的线性变换, $\varphi$ 是可逆变换的充要条件是 A 和 B 都是可逆矩阵.

证明 容易验证 $\varphi$ 是线性变换. 若 $A, B$ 都是可逆矩阵, 则 $\psi(X) = A^{-1}XB^{-1}$ 是 $\varphi$ 的逆线性变换. 下面用两种方法来证明必要性.

证法1 若 $A$ 是不可逆矩阵, 则我们可证明 $\varphi$ 不是单映射, 即存在 $X \neq O$ , 使得 $\varphi(X) = AXB = O$ , 从而 $\varphi$ 不是可逆变换. 事实上, 若 $A$ 的秩等于 $r < n$ , 则存在可逆矩阵 $P$ 和 $Q$ , 使得 $PAQ = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ . 令 $C = \begin{pmatrix} O & O \\ O & I_{n-r} \end{pmatrix}$ , 则 $PAQC = O$ , 而 $P$ 是可逆矩阵, 故 $AQC = O$ , 再令 $X = QC$ 即可. 同理, 若 $B$ 的秩小于 $n$ , 也可以证明 $\varphi$ 不是可逆变换.

证法2 若 $\pmb{A}$ 是不可逆矩阵, 则对任意的 $n$ 阶矩阵 $\pmb{X}, \varphi(\pmb{X}) = \pmb{A}\pmb{X}\pmb{B}$ 总是不可逆矩阵. 因此 $\varphi$ 不可能是映上的. 同理, 若 $\pmb{B}$ 是不可逆矩阵, $\varphi$ 也不是映上的. $\square$ 

对于无限维线性空间之间的线性映射, 我们并没有定义表示矩阵这一概念, 也没有维数公式等结论, 因此研究线性映射或线性变换, 无限维线性空间的情形远比有限维线性空间的情形难得多, 也常出现对有限维线性空间成立的结论在无限维线性空间却不成立的情况. 例如, 要证明无限维线性空间上的线性变换是自同构, 只能按照定义证明它既是单映射又是满映射, 而不能像有限维线性空间上的线性变换那样, 只验证它是单映射或满映射即可.

例 4.17 设 V 是实系数多项式全体构成的实线性空间, 定义 V 上的变换 D, S 如下:

$$
\boldsymbol {D} (f (x)) = \frac {\mathrm{d}}{\mathrm{d} x} f (x), \boldsymbol {S} (f (x)) = \int_ {0} ^ {x} f (t) \mathrm{d} t.
$$

证明: D, S 均为 V 上的线性变换且 $DS = I_{V}$ ，但 $SD \neq I_{V}$ .

证明 简单验证即得结论. 由 $DS = I_V$ 可知, $S$ 是单线性映射, $D$ 是满线性映射. 又容易看出 $S$ 不是满映射, $D$ 不是单映射, 从而它们都不是自同构. $\square$ 

下面的命题对有限维线性空间上的线性变换显然是成立的.

例 4.18 设 V 是 K 上的无限维线性空间, $\varphi, \psi$ 是 V 上的线性变换.

(1) 证明: $\varphi$ 和 $\psi$ 都是可逆变换的充要条件是 $\varphi\psi$ 和 $\psi\varphi$ 都是可逆变换;

(2) 若 $\psi \varphi = I_{V}$ , 则称 $\psi$ 是 $\varphi$ 的左逆变换, $\varphi$ 是 $\psi$ 的右逆变换. 证明: $\varphi$ 是可逆变换的充要条件是 $\varphi$ 有且仅有一个左逆变换 (右逆变换).

证明 (1) 若 $\varphi$ 和 $\psi$ 都是可逆变换, 则 $(\psi^{-1}\varphi^{-1})(\varphi \psi) = (\varphi \psi)(\psi^{-1}\varphi^{-1}) = I_V$ , $(\varphi^{-1}\psi^{-1})(\psi \varphi) = (\psi \varphi)(\varphi^{-1}\psi^{-1}) = I_V$ , 因此 $\varphi \psi$ 和 $\psi \varphi$ 都是可逆变换. 反之, 若 $\varphi \psi$ 和 $\psi \varphi$ 都是可逆变换, 则存在 $V$ 上的线性变换 $\xi, \eta$ , 使得 $\varphi \psi \xi = \xi \varphi \psi = I_V$ , $\psi \varphi \eta = \eta \psi \varphi = I_V$ . 由 $\varphi \psi \xi = I_V$ 可得 $\varphi$ 是满映射, 由 $\eta \psi \varphi = I_V$ 可得 $\varphi$ 是单映射, 从而 $\varphi$ 是可逆变换. 同理可证 $\psi$ 也是可逆变换.

(2) 若 $\varphi$ 是可逆变换, 任取 $\varphi$ 的一个左逆变换 $\psi$ , 则

$$
\boldsymbol {\psi} = \boldsymbol {\psi} \boldsymbol {I} _ {V} = \boldsymbol {\psi} \varphi \varphi^ {- 1} = \boldsymbol {I} _ {V} \varphi^ {- 1} = \varphi^ {- 1},
$$

即 $\varphi$ 的任一左逆变换都是逆变换 $\varphi^{-1}$ . 由逆变换的唯一性可知, $\varphi$ 有且仅有一个左逆变换. 反之, 若 $\varphi$ 有且仅有一个左逆变换 $\psi$ , 则 $\psi \varphi = I_V$ , 且有

$$
(\psi + \varphi \psi - I _ {V}) \varphi = \psi \varphi + \varphi \psi \varphi - \varphi = I _ {V} + \varphi - \varphi = I _ {V},
$$

即 $\psi + \varphi\psi - I_{V}$ 也是 $\varphi$ 的左逆变换, 从而 $\psi + \varphi\psi - I_{V} = \psi$ , 即 $\varphi\psi = I_{V}$ . 因此 $\psi$ 也是 $\varphi$ 的右逆变换, 从而 $\varphi$ 是可逆变换. 同理可证关于右逆变换的结论. □

注 用例 4.18 的结论来看例 4.17, 就能发现 D 之所以不是可逆变换, 是因为它的右逆变换除了 S 之外, 还有无穷多个.

例 4.19 试构造无限维线性空间 V 以及 V 上的线性变换 $\varphi, \psi$ ，使得 $\varphi\psi - \psi\varphi = I_{V}$ .

解 设 $V$ 是实系数多项式全体构成的实线性空间, 线性变换 $\varphi, \psi$ 定义为: 对任一 $f(x) \in V$ , $\varphi(f(x)) = f'(x)$ , $\psi(f(x)) = xf(x)$ . 容易验证 $\varphi \psi - \psi \varphi = I_V$ 成立. $\square$ 

注 事实上, 满足上述性质的线性变换 $\varphi, \psi$ 绝不可能存在于有限维线性空间 $V$ 上. 若存在, 取 $V$ 的一组基并设 $\varphi, \psi$ 的表示矩阵为 $A, B$ , 则有 $AB - BA = I$ 成立. 上式两边同时取迹, 可得

$$
0 = \operatorname{tr} (\boldsymbol {A B} - \boldsymbol {B A}) = \operatorname{tr} (\boldsymbol {I}) = \dim V,
$$

导出矛盾. 上述 3 个例题从一个侧面反映了无限维线性空间和有限维线性空间之间的巨大差异, 虽然我们并不打算深入探讨这个问题, 但仍提醒读者在学习的过程中加以注意.

## § 4.4 线性映射与矩阵

线性映射与矩阵的关系是这一章的核心. 线性映射是一个几何概念, 矩阵是一个代数概念, 它们之间的关系需要掌握以下几点:

(1) 记数域 $\mathbb{F}$ 上 $n$ 维向量空间 $V$ 到 $m$ 维向量空间 $U$ 的线性映射全体为 $\mathcal{L}(V, U)$ , $\mathbb{F}$ 上 $m \times n$ 矩阵全体为 $M_{m \times n}(\mathbb{F})$ . 各自取定 $V$ 和 $U$ 的一组基, 设 $\varphi \in \mathcal{L}(V, U)$ 在给定基下的表示矩阵为 $\pmb{A}$ , 则 $\varphi \mapsto \pmb{A}$ 定义了从 $\mathcal{L}(V, U)$ 到 $M_{m \times n}(\mathbb{F})$ 的一一对应, 这个对应还是一个线性同构. 若 $m = n$ , 则在这个对应下, 线性同构 (可逆线性映射) 对应于可逆矩阵. 特别地, 若 $V = U$ , 上述对应还定义了一个代数同构, 即除了保持加法与数乘外, 还保持乘法. 因此, 两个向量空间之间线性映射的运算完全可以归结为矩阵的运算.

(2) 设线性映射 $\varphi$ 在给定基下的表示矩阵为 $A$ , 则 $\operatorname{Ker} \varphi$ 和齐次线性方程组 $Ax = 0$ 的解空间同构, $\operatorname{Im} \varphi$ 和 $A$ 的全体列向量张成的向量空间同构. 这两点由例 4.20 的结论即得.

例 4.20 设 $\varphi$ 是数域 F 上 n 维线性空间 V 到 m 维线性空间 U 的线性映射. 令 $F^{n}$ 和 $F^{m}$ 分别是 F 上 n 维和 m 维列向量空间. 又设 $e_{1}, e_{2}, \cdots, e_{n}$ 和$f_{1},f_{2},\cdots,f_{m}$ 分别是 V 和 U 的基, $\varphi$ 在给定基下的表示矩阵为 A. 记 $\eta_{1}:V\to F^{n}$ 为 V 中向量映射到它在基 $e_{1},e_{2},\cdots,e_{n}$ 下的坐标向量的线性同构, $\eta_{2}:U\to F^{m}$ 为 U 中向量映射到它在基 $f_{1},f_{2},\cdots,f_{m}$ 下的坐标向量的线性同构, $A:F^{n}\to F^{m}$ 为矩阵乘法诱导的线性映射, 即 $A(\alpha)=A\alpha$ . 求证: $\eta_{2}\varphi=A\eta_{1}$ , 即下列图交换, 并且 $\eta_{1}:\operatorname{Ker}\varphi\to\operatorname{Ker}A,\eta_{2}:\operatorname{Im}\varphi\to\operatorname{Im}A$ 都是线性同构.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-28/36ced1c8-4287-445e-880f-987fd804325a/30977bb4e486344d7eca09604ee1059d8af4bf87d0d424e9613084c6b727df46.jpg)


证明 请参考教材 [1] 中定理 4.3.1 和定理 4.4.1 的证明. □

线性映射和矩阵的上述关系建立了代数语言和几何语言相互转换的桥梁。有了这座桥梁，我们可以把几何问题转化成代数问题来考虑，并用代数的方法加以解决；反过来也可以把代数问题转化成几何问题来考虑，并用几何的方法加以解决。事实上，代数方法和几何方法之间并不存在孰优孰劣的问题，只不过对于各类问题，有时用代数方法处理更简洁，有时用几何方法解决更方便而已。这就好像人的左右手，它们都是不可或缺的，只是各有各的用途而已。因此从某种意义上说，掌握了代数语言与几何语言之间的转换，并能熟练地运用代数方法或几何方法去解决问题，就是掌握了高等代数的核心。

例如在 §3.4 中, 通过抽象的线性空间和具体的列向量空间之间的线性同构, 我们可将几何问题代数化, 并用矩阵的方法加以解决. 在下面以及后面的章节中, 我们将会陆续给出若干例题的代数与几何两种解法, 这些不仅反映了代数与几何之间转换的重要性, 而且揭示了蕴含在问题之中的代数与几何的背景及其意义.

例 4.21 设 $\varphi$ 是线性空间 $V$ 到 $U$ 的线性映射, $\{e_1, e_2, \cdots, e_n\}$ 和 $\{f_1, f_2, \cdots, f_n\}$ 是 $V$ 的两组基, $\{e_1, e_2, \cdots, e_n\}$ 到 $\{f_1, f_2, \cdots, f_n\}$ 的过渡矩阵为 $P$ . $\{g_1, g_2, \cdots, g_m\}$ 和 $\{h_1, h_2, \cdots, h_m\}$ 是 $U$ 的两组基, $\{g_1, g_2, \cdots, g_m\}$ 到 $\{h_1, h_2, \cdots, h_m\}$ 的过渡矩阵为 $Q$ . 又设 $\varphi$ 在基 $\{e_1, e_2, \cdots, e_n\}$ 和基 $\{g_1, g_2, \cdots, g_m\}$ 下的表示矩阵为 $A$ , 在基 $\{f_1, f_2, \cdots, f_n\}$ 和基 $\{h_1, h_2, \cdots, h_m\}$ 下的表示矩阵为 $B$ . 求证: $B = Q^{-1}AP$ .

证明 任取 $v \in V$ , 设它在基 $\{e_1, e_2, \cdots, e_n\}$ 下的坐标向量为 $(x_1, x_2, \cdots, x_n)'$ , 则它在基 $\{f_1, f_2, \cdots, f_n\}$ 下的坐标向量为 $P^{-1}(x_1, x_2, \cdots, x_n)'$ . $\varphi(v)$ 在基 $\{g_1, g_2, \cdots, g_m\}$ 下的坐标向量为 $A(x_1, x_2, \cdots, x_n)'$ , 在基 $\{h_1, h_2, \cdots, h_m\}$ 下的坐标向量为 $BP^{-1}(x_1, x_2, \cdots, x_n)'$ . 由于从 $\{g_1, g_2, \cdots, g_m\}$ 到 $\{h_1, h_2, \cdots, h_m\}$ 的过渡矩阵为 Q，故 $A(x_{1},x_{2},\cdots,x_{n})' = QBP^{-1}(x_{1},x_{2},\cdots,x_{n})'$ 。因为 $(x_{1},x_{2},\cdots,x_{n})'$ 是任意的，故 $A = QBP^{-1}$ ，即 $B = Q^{-1}AP$ 。☐

例 4.22 设 $\varphi$ 是有限维线性空间 V 到 U 的线性映射, 求证: 必存在 V 和 U 的两组基, 使线性映射 $\varphi$ 在两组基下的表示矩阵为 $\begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ .

证明 设 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 是 V 的一组基， $\{g_{1}, g_{2}, \cdots, g_{m}\}$ 是 U 的一组基， $\varphi$ 在这两组基下的表示矩阵为 A。由相抵标准型理论可知，存在 m 阶非异阵 Q，n 阶非异阵 P，使得 $Q^{-1}AP = \begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ 。设 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 是 V 的一组新基，使得从 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵为 P；设 $\{h_{1}, h_{2}, \cdots, h_{m}\}$ 是 U 的一组新基，使得从 $\{g_{1}, g_{2}, \cdots, g_{m}\}$ 到 $\{h_{1}, h_{2}, \cdots, h_{m}\}$ 的过渡矩阵为 Q，则由例 4.21 可知， $\varphi$ 在两组新基下的表示矩阵为 $Q^{-1}AP = \begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ 。☐

注 利用例 4.22 可以得到 $\operatorname{Ker} \varphi = L(f_{r+1}, \cdots, f_n)$ , $\operatorname{Im} \varphi = L(h_1, \cdots, h_r)$ , 由此即得线性映射的维数公式. 下面的例 4.23 给出了线性映射维数公式的第三种证明.

例 4.23 设 $\varphi: V \to U$ 为线性映射, 求证: $\dim \operatorname{Ker} \varphi + \dim \operatorname{Im} \varphi = \dim V$ .

证明 设 $\dim V = n, \dim \operatorname{Ker} \varphi = k,$ 我们只要证明 $\dim \operatorname{Im} \varphi = n - k$ 即可. 取 $\operatorname{Ker} \varphi$ 的一组基 $e_{1}, \cdots, e_{k}$ ，并将其扩张为 V 的一组基 $e_{1}, \cdots, e_{k}, e_{k+1}, \cdots, e_{n}$ . 任取 $\alpha \in V,$ 设 $\alpha = c_{1}e_{1} + \cdots + c_{k}e_{k} + c_{k+1}e_{k+1} + \cdots + c_{n}e_{n}$ ，则 $\varphi(\alpha) = c_{k+1}\varphi(e_{k+1}) + \cdots + c_{n}\varphi(e_{n})$ ，即 $\operatorname{Im} \varphi$ 中任一向量都是 $\varphi(e_{k+1}), \cdots, \varphi(e_{n})$ 的线性组合. 下证 $\varphi(e_{k+1}), \cdots, \varphi(e_{n})$ 线性无关. 设 $\lambda_{k+1}\varphi(e_{k+1}) + \cdots + \lambda_{n}\varphi(e_{n}) = 0,$ 则 $\varphi(\lambda_{k+1}e_{k+1} + \cdots + \lambda_{n}e_{n}) = 0,$ 即 $\lambda_{k+1}e_{k+1} + \cdots + \lambda_{n}e_{n} \in \operatorname{Ker} \varphi,$ 故可设 $\lambda_{k+1}e_{k+1} + \cdots + \lambda_{n}e_{n} = \lambda_{1}e_{1} + \cdots + \lambda_{k}e_{k},$ 再由 $e_{1}, \cdots, e_{k}, e_{k+1}, \cdots, e_{n}$ 线性无关可知 $\lambda_{1} = \cdots = \lambda_{k} = \lambda_{k+1} = \cdots = \lambda_{n} = 0.$ 因此 $\varphi(e_{k+1}), \cdots, \varphi(e_{n})$ 是 $\operatorname{Im} \varphi$ 的一组基，从而 $\dim \operatorname{Im} \varphi = n - k,$ 结论得证. □

例 4.24 设 $\varphi$ 是 n 维线性空间 V 到 m 维线性空间 U 的线性映射, $\varphi$ 在给定基下的表示矩阵为 A. 求证: $\varphi$ 是满映射的充要条件是 $\mathrm{r}(A)=m$ , $\varphi$ 是单映射的充要条件是 $\mathrm{r}(A)=n$ .

证明 注意到 $\dim \operatorname{Im} \varphi = \operatorname{r}(A)$ , 并且 $\varphi$ 是满映射的充要条件是 $\operatorname{Im} \varphi = U$ , 这也等价于 $\dim \operatorname{Im} \varphi = \dim U = m$ , 故第一个结论成立.

注意到 $\dim \operatorname{Ker} \varphi = n - \mathrm{r}(A)$ , 并且 $\varphi$ 是单映射的充要条件是 $\operatorname{Ker} \varphi = 0$ , 这也等价于 $\dim \operatorname{Ker} \varphi = 0$ , 故第二个结论成立. □

例 4.3 设 $\varphi$ 是有限维线性空间 V 到 U 的线性映射, 求证: 必存在 U 到 V 的线性映射 $\psi$ , 使得 $\varphi\psi\varphi = \varphi$ .

证法 2 (代数方法) 取定 V 和 U 的两组基, 设 $\varphi$ 在这两组基下的表示矩阵为 $m \times n$ 矩阵 A, 则由例 3.93 可知, 存在 $n \times m$ 矩阵 B, 使得 ABA = A. 由矩阵 B 可定义从 U 到 V 的线性映射 $\psi$ , 它适合 $\varphi\psi\varphi = \varphi$ . ☐

例 4.5 设 V, U 是 F 上的有限维线性空间, $\varphi$ 是 V 到 U 的线性映射, 求证:

(1) $\varphi$ 是单映射的充要条件是存在 $U$ 到 $V$ 的线性映射 $\psi$ , 使 $\psi \varphi = \mathbf{I}\mathbf{d}_V$ , 这里 $\mathbf{I}\mathbf{d}_V$ 表示 $V$ 上的恒等映射;

(2) $\varphi$ 是满映射的充要条件是存在 $U$ 到 $V$ 的线性映射 $\eta$ , 使 $\varphi \eta = \mathbf{Id}_U$ , 这里 $\mathbf{Id}_U$ 表示 $U$ 上的恒等映射.

证法 2 (代数方法) 充分性同证法 1, 现只证必要性. 取定 V 和 U 的两组基, 设 $\varphi$ 在这两组基下的表示矩阵为 $m \times n$ 矩阵 A.

(1) 若 $\varphi$ 是单映射, 则由例 4.24 可知 $A$ 是列满秩矩阵. 再由例 3.91 (1) 可知, 存在 $n \times m$ 矩阵 $B$ , 使得 $BA = I_n$ . 由矩阵 $B$ 可定义从 $U$ 到 $V$ 的线性映射 $\psi$ , 它适合 $\psi \varphi = \mathrm{Id}_V$ .

(2) 若 $\varphi$ 是满映射, 则由例 4.24 可知 $A$ 是行满秩矩阵. 再由例 3.91 (2) 可知, 存在 $n \times m$ 矩阵 $C$ , 使得 $AC = I_m$ . 由矩阵 $C$ 可定义从 $U$ 到 $V$ 的线性映射 $\eta$ , 它适合 $\varphi \eta = \mathbf{Id}_U$ . □

例 4.25 设 $\varphi: V \to U$ 为线性映射且 $\varphi$ 的秩为 r，证明：存在 r 个秩为 1 的线性映射 $\varphi_{i}: V \to U (1 \leq i \leq r)$ ，使得 $\varphi = \varphi_{1} + \cdots + \varphi_{r}$ .

证明 取定 V 和 U 的两组基, 设 $\varphi$ 在这两组基下的表示矩阵为 A, 则 $\mathrm{r}(A)=\mathrm{r}(\varphi)=r$ . 由例 3.89 可知, 存在 r 个秩为 1 的矩阵 $A_{i}(1\leq i\leq r)$ , 使得 $A=A_{1}+\cdots+A_{r}$ . 由于线性映射和表示矩阵之间一一对应, 故存在线性映射 $\varphi_{i}:V\to U(1\leq i\leq r)$ , 使得 $\varphi=\varphi_{1}+\cdots+\varphi_{r}$ , 且 $\mathrm{r}(\varphi_{i})=\mathrm{r}(A_{i})=1$ . □

例 4.26 设 $\varphi$ 是线性空间 V 上的线性变换, 若它在 V 的任一组基下的表示矩阵都相同, 求证: $\varphi$ 是纯量变换, 即存在常数 k, 使得 $\varphi(\alpha) = k\alpha$ 对一切 $\alpha \in V$ 都成立.

证明 取定 $V$ 的一组基, 设 $\varphi$ 在这组基下的表示矩阵是 $\mathbf{A}$ . 由已知条件可知, 对任意一个同阶可逆矩阵 $\mathbf{P}, \mathbf{A} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$ , 即 $\mathbf{P}\mathbf{A} = \mathbf{A}\mathbf{P}$ . 因此矩阵 $\mathbf{A}$ 和任意一个可逆矩阵乘法可交换, 于是 $\mathbf{A} = k\mathbf{I}_n$ , 由此即知 $\varphi$ 是纯量变换. $\square$ 

在上面四题中, 我们将线性映射的问题转化为矩阵问题来处理. 反之, 我们也可将矩阵问题转化为线性映射 (线性变换) 问题来处理. 设 $A$ 是数域 $\mathbb{F}$ 上的 $m \times n$ 矩阵, 定义列向量空间 $\mathbb{F}^n$ 到 $\mathbb{F}^m$ 的线性映射: $\varphi(\alpha) = A\alpha$ , 容易验证在 $\mathbb{F}^n$ 和 $\mathbb{F}^m$ 的标准单位列向量构成的基下, $\varphi$ 的表示矩阵就是 $A$ . 同理, 若 $A$ 是 $\mathbb{F}$ 上的 $n$ 阶矩阵, 定义 $\mathbb{F}^n$ 上的线性变换: $\varphi(\alpha) = A\alpha$ , 容易验证在 $\mathbb{F}^n$ 的标准单位列向量构成的基下, $\varphi$ 的表示矩阵就是 $A$ . 因此, 我们有时就把这个线性映射 (线性变换) 写为 $A$ . 上述把代数问题转化成几何问题的语言表述, 在后面的章节中一直会用到. 某些矩阵问题采用这种方式转化为线性映射 (线性变换) 问题后, 往往变得比较容易解决或者可以充分利用几何直观去得到解题思路. 下面是两个典型的例子.

例 4.27 设 A, B 都是数域 F 上的 $m \times n$ 矩阵, 求证: 方程组 Ax = 0, Bx = 0 同解的充要条件是存在可逆矩阵 P, 使得 B = PA.

证明 因为 P 是可逆矩阵, 充分性是显然的. 现通过两种方法来证明必要性.

代数方法 由条件可得方程组 Ax=0, Bx=0, $\begin{pmatrix}A\\B\end{pmatrix}$ x=0 都同解, 从而有

$$
\mathrm{r} (\boldsymbol {A}) = \mathrm{r} (\boldsymbol {B}) = \mathrm{r} \binom{\boldsymbol {A}}{\boldsymbol {B}}.
$$

注意到结论 B = PA 就是说 A, B 可以通过初等行变换相互转化, 因此在证明的过程中, 对 A 或 B 实施初等行变换不影响结论的证明. 设

$$
\boldsymbol {A} = \left( \begin{array}{c} \alpha_ {1} \\ \alpha_ {2} \\ \vdots \\ \alpha_ {m} \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c} \beta_ {1} \\ \beta_ {2} \\ \vdots \\ \beta_ {m} \end{array} \right)
$$

分别为 A, B 的行分块. 不妨对 A, B 都进行行对换, 故可设 $\alpha_{1}, \cdots, \alpha_{r}$ 是 A 的行向量的极大无关组, $\beta_{1}, \cdots, \beta_{r}$ 是 B 的行向量的极大无关组. 由于 $r\begin{pmatrix} A \\ B \end{pmatrix} = r$ , 故由例 3.20 可知, $\alpha_{1}, \cdots, \alpha_{r}$ 和 $\beta_{1}, \cdots, \beta_{r}$ 是向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{m}, \beta_{1}, \beta_{2}, \cdots, \beta_{m}$ 的两组极大无关组. 设 $\beta_{i} = \sum_{j=1}^{r} c_{ij} \alpha_{j} (1 \leq i \leq r)$ , 则容易验证 r 阶方阵 $C = (c_{ij})$ 是非异阵. 设 $\beta_{i} - \alpha_{i} = \sum_{j=1}^{r} d_{ij} \alpha_{j} (r + 1 \leq i \leq m)$ , $D = (d_{ij})$ 是 $(m - r) \times r$ 矩阵, 则容易验证 $P = \begin{pmatrix} C & O \\ D & I_{m-r} \end{pmatrix}$ 是 m 阶非异阵, 并且满足 B = PA.

几何方法 将问题转化成几何的语言即为: 设 $V$ 是 $\mathbb{F}$ 上的 $n$ 维线性空间, $U$ 是 $\mathbb{F}$ 上的 $m$ 维线性空间, $\varphi, \psi: V \to U$ 是两个线性映射. 求证: 若 $\operatorname{Ker} \varphi = \operatorname{Ker} \psi$ , 则存在 $U$ 上的自同构 $\sigma$ , 使得 $\psi = \sigma \varphi$ .

设 $r(\varphi) = r$ ，则 $\dim \operatorname{Ker} \varphi = \dim \operatorname{Ker} \psi = n - r$ 。取 $\operatorname{Ker} \varphi = \operatorname{Ker} \psi$ 的一组基 $e_{r+1}, \cdots, e_n$ ，并将其扩张为 V 的一组基 $e_1, \cdots, e_r, e_{r+1}, \cdots, e_n$ 。根据例 4.23 的证明可知， $\varphi(e_1), \cdots, \varphi(e_r)$ 是 $\operatorname{Im} \varphi$ 的一组基，故可将其扩张为 U 的一组基 $\varphi(e_1), \cdots, \varphi(e_r), f_{r+1}, \cdots, f_m$ 。同理可知， $\psi(e_1), \cdots, \psi(e_r)$ 是 $\operatorname{Im} \psi$ 的一组基，故可将其扩张为 U 的一组基 $\psi(e_1), \cdots, \psi(e_r), g_{r+1}, \cdots, g_m$ 。定义 U 上的线性变换 $\sigma$ 如下：

$$
\sigma (\varphi (e _ {i})) = \psi (e _ {i}), 1 \leq i \leq r; \quad \sigma (f _ {j}) = g _ {j}, r + 1 \leq j \leq m.
$$

因为 $\sigma$ 把 U 的一组基映射为 U 的另一组基, 故 $\sigma$ 是 U 的自同构. 又对 $r+1 \leq j \leq n$ , $\sigma(\varphi(e_{j})) = 0 = \psi(e_{j})$ , 故 $\sigma\varphi = \psi$ 成立. □

例 3.69 (Frobenius 不等式) 证明: $\mathrm{r}(ABC) \geq \mathrm{r}(AB) + \mathrm{r}(BC) - \mathrm{r}(B)$ .

证法 2 (几何方法) 将问题转化成几何的语言即为: 设 $\varphi: V_1 \to V_2$ , $\psi: V_2 \to V_3$ , $\theta: V_3 \to V_4$ 是线性映射, 证明: $\mathrm{r}(\theta \psi \varphi) \geq \mathrm{r}(\theta \psi) + \mathrm{r}(\psi \varphi) - \mathrm{r}(\psi)$ .

下面考虑通过定义域的限制得到的线性映射. 将 $\theta$ 的定义域限制在 $\operatorname{Im} \psi \varphi$ 上可得线性映射 $\theta_1: \operatorname{Im} \psi \varphi \to V_4$ , 它的像空间是 $\operatorname{Im} \theta \psi \varphi$ , 核空间是 $\operatorname{Ker} \theta \cap \operatorname{Im} \psi \varphi$ ; 将 $\theta$ 的定义域限制在 $\operatorname{Im} \psi$ 上可得线性映射 $\theta_2: \operatorname{Im} \psi \to V_4$ , 它的像空间是 $\operatorname{Im} \theta \psi$ , 核空间是 $\operatorname{Ker} \theta \cap \operatorname{Im} \psi$ , 故由线性映射的维数公式可得

$$
\dim (\operatorname{Im} \psi \varphi) = \dim (\operatorname{Ker} \theta \cap \operatorname{Im} \psi \varphi) + \dim (\operatorname{Im} \theta \psi \varphi), \tag {4.1}
$$

$$
\dim (\operatorname{Im} \boldsymbol {\psi}) = \dim (\operatorname{Ker} \boldsymbol {\theta} \cap \operatorname{Im} \boldsymbol {\psi}) + \dim (\operatorname{Im} \boldsymbol {\theta} \boldsymbol {\psi}). \tag {4.2}
$$

注意到 $\operatorname{Im} \psi \varphi \subseteq \operatorname{Im} \psi$ ，故 $\dim(\operatorname{Ker} \theta \cap \operatorname{Im} \psi \varphi) \leq \dim(\operatorname{Ker} \theta \cap \operatorname{Im} \psi)$ ，从而由 (4.1) 式和 (4.2) 式可得

$$
\mathrm{r} (\psi \varphi) - \mathrm{r} (\theta \psi \varphi) \leq \mathrm{r} (\psi) - \mathrm{r} (\theta \psi),
$$

结论得证. □

例 4.28 若数域 F 上的 n 阶方阵 A 和 B 相似, 求证: 它们可以看成是某个线性空间上同一个线性变换在不同基下的表示矩阵.

证明 令 $V = \mathbb{F}^n$ 是 $n$ 维列向量空间, $\{e_1, e_2, \cdots, e_n\}$ 是由 $n$ 维标准单位列向量构成的基, $\varphi$ 是由矩阵 $\pmb{A}$ 的乘法诱导的线性变换, 容易验证 $\varphi$ 在基 $\{e_1, e_2, \cdots, e_n\}$ 下的表示矩阵就是 $\pmb{A}$ . 已知 $\pmb{A}$ 和 $\pmb{B}$ 相似, 即存在可逆矩阵 $\pmb{P}$ , 使得 $B = P^{-1}AP$ .

令 $P = (f_{1}, f_{2}, \cdots, f_{n})$ 为其列分块，由于 P 可逆，故 $f_{1}, f_{2}, \cdots, f_{n}$ 线性无关，从而是 V 的一组基。注意到从基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ 到基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 的过渡矩阵就是 P，因此线性变换 $\varphi$ 在基 $\{f_{1}, f_{2}, \cdots, f_{n}\}$ 下的表示矩阵为 $P^{-1}AP = B$ 。☐

下面两个例子说明如何选择适当的基使得线性变换的表示矩阵满足一定的条件.

例 4.29 设 V 是数域 F 上 n 阶矩阵全体构成的线性空间, $\varphi$ 是 V 上的线性变换: $\varphi(A)=A'$ . 证明: 存在 V 的一组基, 使得 $\varphi$ 在这组基下的表示矩阵是一个对角矩阵且主对角元素全是 1 或 -1, 并求出 1 和 -1 的个数.

证明 设 $V_{1}$ 是由 $n$ 阶对称矩阵组成的子空间, $V_{2}$ 是由反对称矩阵组成的子空间, 则由例3.48可得

$$
V = V _ {1} \oplus V _ {2}.
$$

取 $V_{1}$ 的一组基和 $V_{2}$ 的一组基拼成 V 的一组基，则 $\varphi$ 在这组基下的表示矩阵是对角矩阵且主对角元素或为 1 或为 -1。因为 $\dim V_{1} = \frac{1}{2} n(n + 1)$ ， $\dim V_{2} = \frac{1}{2} n(n - 1)$ ，故 1 的个数为 $\frac{1}{2} n(n + 1)$ ，-1 的个数为 $\frac{1}{2} n(n - 1)$ 。☐

例 4.30 设 V 是数域 K 上的 n 维线性空间, $\varphi, \psi$ 是 V 上的线性变换且 $\varphi^{2} = 0$ , $\psi^{2} = 0$ , $\varphi\psi + \psi\varphi = I$ , I 是 V 上的恒等变换. 求证:

(1) $V = \operatorname{Ker} \varphi \oplus \operatorname{Ker} \psi;$ 

(2) 若 $V$ 是二维空间, 则存在 $V$ 的基 $\pmb{e}_1, \pmb{e}_2$ , 使得 $\varphi, \psi$ 在这组基下的表示矩阵分别为

$$
\boldsymbol {A} = \left( \begin{array}{c c} 0 & 0 \\ 1 & 0 \end{array} \right), \quad \boldsymbol {B} = \left( \begin{array}{c c} 0 & 1 \\ 0 & 0 \end{array} \right);
$$

(3) $V$ 必是偶数维空间且若 $V$ 是 $2k$ 维空间, 则存在 $V$ 的一组基, 使得 $\varphi, \psi$ 在这组基下的表示矩阵分别为下列分块对角矩阵:

$$
\left( \begin{array}{c c c c} A & O & \dots & O \\ O & A & \dots & O \\ \vdots & \vdots & & \vdots \\ O & O & \dots & A \end{array} \right), \quad \left( \begin{array}{c c c c} B & O & \dots & O \\ O & B & \dots & O \\ \vdots & \vdots & & \vdots \\ O & O & \dots & B \end{array} \right),
$$

其中主对角线上分别有 k 个 A 和 k 个 B.

证明 (1) 任取 $\alpha \in V$ , 则由 $I = \varphi \psi + \psi \varphi$ 得到 $\alpha = \varphi \psi(\alpha) + \psi \varphi(\alpha)$ . 注意到 $\varphi \psi(\alpha) \in \operatorname{Ker} \varphi, \psi \varphi(\alpha) \in \operatorname{Ker} \psi$ , 因此 $V = \operatorname{Ker} \varphi + \operatorname{Ker} \psi$ . 又若 $\beta \in \operatorname{Ker} \varphi \cap \operatorname{Ker} \psi$ , 则 $\beta = \varphi \psi(\beta) + \psi \varphi(\beta) = 0$ , 即 $\operatorname{Ker} \varphi \cap \operatorname{Ker} \psi = 0$ . 于是 $V = \operatorname{Ker} \varphi \oplus \operatorname{Ker} \psi$ .

(2) 取 $0 \neq e_1 \in \operatorname{Ker} \psi, e_2 = \varphi(e_1)$ , 则 $\varphi(e_2) = \varphi^2(e_1) = 0$ , 即 $e_2 \in \operatorname{Ker} \varphi$ . 又若 $e_2 = 0$ , 则 $e_1 \in \operatorname{Ker} \varphi \cap \operatorname{Ker} \psi = 0$ , 和假设矛盾, 于是 $e_2 \neq 0$ . 因此 $e_1, e_2$ 组成 $V$ 的一组基, 不难验证在这组基下, $\varphi, \psi$ 的表示矩阵符合要求.

(3) 设 $\dim\operatorname{Ker}\psi = k$ ，并取 $\operatorname{Ker}\psi$ 的一组基 $e_{1}, e_{2}, \cdots, e_{k}$ 。令 $e_{k+1} = \varphi(e_{1})$ ， $e_{k+2} = \varphi(e_{2}), \cdots, e_{2k} = \varphi(e_{k})$ ，则由 $\varphi^{2} = 0$ 可得 $e_{k+1}, e_{k+2}, \cdots, e_{2k}$ 都属于 $\operatorname{Ker}\varphi$ 。我们先证明向量组 $e_{k+1}, e_{k+2}, \cdots, e_{2k}$ 是线性无关的。设有

$$
c _ {1} \boldsymbol {e} _ {k + 1} + c _ {2} \boldsymbol {e} _ {k + 2} + \dots + c _ {k} \boldsymbol {e} _ {2 k} = \mathbf {0},
$$

两边作用 $\psi$ ，可得

$$
c _ {1} \psi (e _ {k + 1}) + c _ {2} \psi (e _ {k + 2}) + \dots + c _ {k} \psi (e _ {2 k}) = 0.
$$

注意到 $\boldsymbol{e}_{1}=\varphi\psi(\boldsymbol{e}_{1})+\psi\varphi(\boldsymbol{e}_{1})=\psi(\boldsymbol{e}_{k+1})$ ，同理 $\boldsymbol{e}_{2}=\psi(\boldsymbol{e}_{k+2}),\cdots,\boldsymbol{e}_{k}=\psi(\boldsymbol{e}_{2k})$ 。因此上式就是

$$
c _ {1} \boldsymbol {e} _ {1} + c _ {2} \boldsymbol {e} _ {2} + \dots + c _ {k} \boldsymbol {e} _ {k} = \mathbf {0}.
$$

而 $e_{1}, e_{2}, \cdots, e_{k}$ 线性无关，故 $c_{1} = c_{2} = \cdots = c_{k} = 0$ ，即向量组 $e_{k+1}, e_{k+2}, \cdots, e_{2k}$ 线性无关。特别地，我们有 $\dim \operatorname{Ker} \varphi \geq k = \dim \operatorname{Ker} \psi$ 。由于 $\varphi, \psi$ 的地位是对称的，故同理可证 $\dim \operatorname{Ker} \psi \geq \dim \operatorname{Ker} \varphi$ ，从而 $\dim \operatorname{Ker} \varphi = \dim \operatorname{Ker} \psi = k$ ，并且 $e_{k+1}, e_{k+2}, \cdots, e_{2k}$ 是 $\operatorname{Ker} \varphi$ 的一组基。因为 $V = \operatorname{Ker} \varphi \oplus \operatorname{Ker} \psi$ ，故 $e_{1}, \cdots, e_{k}, e_{k+1}, \cdots, e_{2k}$ 组成 V 的一组基。现将基向量排列如下：

$$
\boldsymbol {e} _ {1}, \boldsymbol {e} _ {k + 1}, \boldsymbol {e} _ {2}, \boldsymbol {e} _ {k + 2}, \dots , \boldsymbol {e} _ {k}, \boldsymbol {e} _ {2 k}.
$$

不难验证, 在这组基下 $\varphi, \psi$ 的表示矩阵即为所求. $\square$ 

## § 4.5 像空间和核空间

利用像空间和核空间来讨论线性映射的满性和单性是常见的方法, 因此它们是相伴于线性映射的两个重要的子空间. 如何来确定线性映射的像空间和核空间, 以及如何运用它们去研究线性映射的性质, 我们将在下面的例子中作介绍.

例 4.31 设线性空间 V 上的线性变换 $\varphi$ 在基 $\{e_{1}, e_{2}, e_{3}, e_{4}\}$ 下的表示矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 0 & 2 & 1 \\ - 1 & 2 & 1 & 3 \\ 1 & 2 & 5 & 5 \\ 2 & - 2 & 1 & - 2 \end{array} \right),
$$

求 $\varphi$ 的核空间与像空间（用基的线性组合来表示）.

解 像空间通过坐标向量同构于 A 的列向量生成的子空间, 通过计算可得 A 的秩等于 2, 且 A 的第一、第二列向量线性无关, 于是 Imφ 的基的坐标向量为 $(1,-1,1,2)'$ , $(0,2,2,-2)'$ , 从而 Imφ = $k_{1}(e_{1}-e_{2}+e_{3}+2e_{4})+k_{2}(2e_{2}+2e_{3}-2e_{4})$ . 核空间通过坐标向量同构于齐次线性方程组 Ax=0 的解空间, 通过计算可得该方程组的基础解系为 $(-4,-3,2,0)'$ , $(-1,-2,0,1)'$ , 此即 Kerφ 的基的坐标向量, 于是 Kerφ = $k_{1}(-4e_{1}-3e_{2}+2e_{3})+k_{2}(-e_{1}-2e_{2}+e_{4})$ . □

例 4.32 设 V 是数域 F 上的线性空间, $\varphi_{1}, \varphi_{2}, \cdots, \varphi_{k}$ 是 V 上的非零线性变换. 求证: 存在 $\alpha \in V$ , 使得 $\varphi_{i}(\alpha) \neq 0 (1 \leq i \leq k)$ .

证明 因为 $\varphi_{i} \neq 0$ , 所以 $\operatorname{Ker} \varphi_{i}$ 是 $V$ 的真子空间. 由例3.54可知, 有限个真子空间 $\operatorname{Ker} \varphi_{i}$ 不能覆盖全空间 $V$ , 故必存在 $\alpha \in V$ , 使得 $\alpha$ 不属于任意一个 $\operatorname{Ker} \varphi_{i}$ , 从而结论得证. □

例 4.33 设 V 是数域 F 上的线性空间, $\varphi_{1}, \varphi_{2}, \cdots, \varphi_{k}$ 是 V 上互不相同的线性变换. 求证: 存在 $\alpha \in V$ , 使得 $\varphi_{1}(\alpha), \varphi_{2}(\alpha), \cdots, \varphi_{k}(\alpha)$ 互不相同.

证明 令 $\varphi_{ij} = \varphi_i - \varphi_j (1 \leq i < j \leq k)$ , 则 $\varphi_{ij}$ 是 $V$ 上的非零线性变换. 由例4.32可知, 存在 $\alpha \in V$ , 使得 $\varphi_{ij}(\alpha) \neq 0$ , 即 $\varphi_i(\alpha) \neq \varphi_j(\alpha) (1 \leq i < j \leq k)$ , 从而结论得证. □

例 4.34 设 A 是 n 阶方阵, 求证: $\mathrm{r}(A^{n})=\mathrm{r}(A^{n+1})=\mathrm{r}(A^{n+2})=\cdots$ 

证法1（代数方法）由秩的不等式可得

$$
n = \mathrm{r} (\boldsymbol {I} _ {n}) \geq \mathrm{r} (\boldsymbol {A}) \geq \mathrm{r} (\boldsymbol {A} ^ {2}) \geq \dots \geq \mathrm{r} (\boldsymbol {A} ^ {n}) \geq \mathrm{r} (\boldsymbol {A} ^ {n + 1}) \geq 0.
$$

上述 $n + 2$ 个整数都在 $[0, n]$ 之间, 故由抽屉原理可知, 存在某个整数 $m \in [0, n]$ , 使得 $\mathrm{r}(\mathbf{A}^m) = \mathrm{r}(\mathbf{A}^{m+1})$ . 对任意的 $k \geq m$ , 由矩阵秩的 Frobenius 不等式可得

$$
\mathrm{r} (\boldsymbol {A} ^ {k + 1}) = \mathrm{r} (\boldsymbol {A} ^ {k - m} \boldsymbol {A} ^ {m} \boldsymbol {A}) \geq \mathrm{r} (\boldsymbol {A} ^ {k - m} \boldsymbol {A} ^ {m}) + \mathrm{r} (\boldsymbol {A} ^ {m} \boldsymbol {A}) - \mathrm{r} (\boldsymbol {A} ^ {m}) = \mathrm{r} (\boldsymbol {A} ^ {k}),
$$

又 $\mathrm{r}(\pmb{A}^{k + 1})\leq \mathrm{r}(\pmb{A}^k)$ ，故 $\mathrm{r}(\pmb{A}^{k + 1}) = \mathrm{r}(\pmb{A}^k)$ 对任意的 $k\geq m$ 成立，结论得证

证法 2 (几何方法) 将 A 看成是 n 维列向量空间上的线性变换, 记为 $\varphi$ , 注意下列子空间链:

$$
V \supseteq \operatorname{Im} \varphi \supseteq \operatorname{Im} \varphi^ {2} \supseteq \dots \supseteq \operatorname{Im} \varphi^ {n} \supseteq \operatorname{Im} \varphi^ {n + 1}.
$$

上述 $n + 2$ 个子空间的维数都在 $[0, n]$ 之间, 故由抽屉原理可知, 存在某个整数 $m \in [0, n]$ , 使得 $\operatorname{Im} \varphi^{m} = \operatorname{Im} \varphi^{m+1}$ . 现要证明对任意的 $k \geq m$ , $\operatorname{Im} \varphi^{k} = \operatorname{Im} \varphi^{k+1}$ . 一方面, $\operatorname{Im} \varphi^{k+1} \subseteq \operatorname{Im} \varphi^{k}$ 是显然的. 另一方面, 任取 $\alpha \in \operatorname{Im} \varphi^{k}$ , 则存在 $\beta \in V$ , 使得 $\alpha = \varphi^{k}(\beta)$ . 由于 $\varphi^{m}(\beta) \in \operatorname{Im} \varphi^{m} = \operatorname{Im} \varphi^{m+1}$ , 故存在 $\gamma \in V$ , 使得 $\varphi^{m}(\beta) = \varphi^{m+1}(\gamma)$ , 从而

$$
\boldsymbol {\alpha} = \varphi^ {k} (\boldsymbol {\beta}) = \varphi^ {k - m} (\varphi^ {m} (\boldsymbol {\beta})) = \varphi^ {k - m} (\varphi^ {m + 1} (\boldsymbol {\gamma})) = \varphi^ {k + 1} (\boldsymbol {\gamma}) \in \operatorname{Im} \varphi^ {k + 1},
$$

故 $\operatorname{Im} \varphi^k = \operatorname{Im} \varphi^{k+1}$ 对任意的 $k \geq m$ 成立, 取维数后即得结论. □

例 4.35 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, 求证: 必存在整数 $m \in [0, n]$ , 使得

$$
\operatorname{Im} \varphi^ {m} = \operatorname{Im} \varphi^ {m + 1}, \quad \operatorname{Ker} \varphi^ {m} = \operatorname{Ker} \varphi^ {m + 1}, \quad V = \operatorname{Im} \varphi^ {m} \oplus \operatorname{Ker} \varphi^ {m}.
$$

证明 根据例 4.34 的证明可知, 存在整数 $m \in [0, n]$ , 使得

$$
\operatorname{Im} \varphi^ {m} = \operatorname{Im} \varphi^ {m + 1} = \operatorname{Im} \varphi^ {m + 2} = \dots .
$$

注意到对任意的正整数 $i$ , $\operatorname{Ker} \varphi^i \subseteq \operatorname{Ker} \varphi^{i+1}$ . 再由维数公式可知, 对任意的 $i \geq m$ , $\dim \operatorname{Ker} \varphi^i = \dim V - \dim \operatorname{Im} \varphi^i = n - \dim \operatorname{Im} \varphi^m$ 是一个不依赖于 $i$ 的常数, 因此

$$
\operatorname{Ker} \varphi^ {m} = \operatorname{Ker} \varphi^ {m + 1} = \operatorname{Ker} \varphi^ {m + 2} = \dots .
$$

若 $\alpha \in \operatorname{Im} \varphi^{m} \cap \operatorname{Ker} \varphi^{m}$ , 则 $\alpha = \varphi^{m}(\beta)$ , $\varphi^{m}(\alpha) = 0$ . 于是 $0 = \varphi^{m}(\alpha) = \varphi^{2m}(\beta)$ , 即 $\beta \in \operatorname{Ker} \varphi^{2m} = \operatorname{Ker} \varphi^{m}$ , 从而 $\alpha = \varphi^{m}(\beta) = 0$ , 这证明了 $\operatorname{Im} \varphi^{m} \cap \operatorname{Ker} \varphi^{m} = 0$ . 又对 $V$ 中任一向量 $\alpha$ , 因为 $\varphi^{m}(\alpha) \in \operatorname{Im} \varphi^{m} = \operatorname{Im} \varphi^{2m}$ , 所以 $\varphi^{m}(\alpha) = \varphi^{2m}(\beta)$ , 其中 $\beta \in V$ . 我们有分解式

$$
\boldsymbol {\alpha} = \varphi^ {m} (\boldsymbol {\beta}) + (\boldsymbol {\alpha} - \varphi^ {m} (\boldsymbol {\beta})).
$$

注意到 $\varphi^{m}(\alpha -\varphi^{m}(\beta)) = 0$ ，即 $\alpha -\varphi^m (\beta)\in \mathrm{Ker}\varphi^m$ ，这就证明了 $V = \operatorname {Im}\varphi^{m}+$ $\operatorname {Ker}\varphi^{m}$ .因此

$$
V = \operatorname{Im} \varphi^ {m} \oplus \operatorname{Ker} \varphi^ {m}. \square
$$

注 也可不证明 $V = \operatorname{Im} \varphi^{m} + \operatorname{Ker} \varphi^{m}$ , 改由维数公式 $\dim \operatorname{Im} \varphi^{m} + \dim \operatorname{Ker} \varphi^{m} = n$ 直接得到 $V = \operatorname{Im} \varphi^{m} \oplus \operatorname{Ker} \varphi^{m}$ .

例 4.36 设 V 是数域 K 上的 n 维线性空间, $\varphi$ 是 V 上的线性变换, 证明以下 9 个结论等价:

(1) $V = \operatorname{Ker} \varphi \oplus \operatorname{Im} \varphi;$ 

(2) $V = \operatorname{Ker} \varphi + \operatorname{Im} \varphi;$ 

(3) $\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi = 0;$ 

(4) $\operatorname{Ker} \varphi = \operatorname{Ker} \varphi^2$ , 或等价地, $\dim \operatorname{Ker} \varphi = \dim \operatorname{Ker} \varphi^2$ ;

(5) $\operatorname{Ker} \varphi = \operatorname{Ker} \varphi^2 = \operatorname{Ker} \varphi^3 = \cdots$ ，或等价地， $\dim \operatorname{Ker} \varphi = \dim \operatorname{Ker} \varphi^2 = \dim \operatorname{Ker} \varphi^3 = \cdots$ ；

(6) $\operatorname{Im} \varphi = \operatorname{Im} \varphi^2$ , 或等价地, $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2)$ ;

(7) $\operatorname{Im} \varphi = \operatorname{Im} \varphi^2 = \operatorname{Im} \varphi^3 = \cdots$ ，或等价地， $\mathrm{r}(\varphi) = \mathrm{r}(\varphi^2) = \mathrm{r}(\varphi^3) = \cdots$ ；

(8) $\operatorname{Ker} \varphi$ 存在 $\varphi$ -不变补空间, 即存在 $\varphi$ -不变子空间 $U$ , 使得 $V = \operatorname{Ker} \varphi \oplus U$ ;

(9) $\operatorname{Im} \varphi$ 存在 $\varphi$ -不变补空间, 即存在 $\varphi$ -不变子空间 $W$ , 使得 $V = \operatorname{Im} \varphi \oplus W$ .

证明 由直和的定义可知 $(1) \Leftrightarrow (2) + (3)$ , 于是 $(1) \Rightarrow (2)$ 和 $(1) \Rightarrow (3)$ 都是显然的. 根据交和空间维数公式和线性映射维数公式可知

$$
\dim (\operatorname{Ker} \varphi + \operatorname{Im} \varphi) = \dim \operatorname{Ker} \varphi + \dim \operatorname{Im} \varphi - \dim (\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi)
$$

$$
= \dim V - \dim (\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi),
$$

于是 (2) $\Leftrightarrow$ (3) 成立, 从而前 3 个结论两两等价.

(3) $\Rightarrow$ (4): 显然 $\operatorname{Ker} \varphi \subseteq \operatorname{Ker} \varphi^2$ 成立. 任取 $\alpha \in \operatorname{Ker} \varphi^2$ , 则 $\varphi(\alpha) \in \operatorname{Ker} \varphi \cap \operatorname{Im} \varphi = 0$ , 于是 $\varphi(\alpha) = 0$ , 即 $\alpha \in \operatorname{Ker} \varphi$ , 从而 $\operatorname{Ker} \varphi^2 \subseteq \operatorname{Ker} \varphi$ 也成立, 故 (4) 成立.

(4) $\Rightarrow$ (3): 任取 $\alpha \in \operatorname{Ker} \varphi \cap \operatorname{Im} \varphi$ , 则存在 $\beta \in V$ , 使得 $\alpha = \varphi(\beta)$ , 于是 $0 = \varphi(\alpha) = \varphi^2(\beta)$ , 即 $\beta \in \operatorname{Ker} \varphi^2 = \operatorname{Ker} \varphi$ , 从而 $\alpha = \varphi(\beta) = 0$ , 即 (3) 成立.

(5) $\Rightarrow$ (4) 是显然的, 下证 (4) $\Rightarrow$ (5): 设 $\operatorname{Ker} \varphi^k = \operatorname{Ker} \varphi^{k+1}$ 已对正整数 $k$ 成立, 先证 $\operatorname{Ker} \varphi^{k+1} = \operatorname{Ker} \varphi^{k+2}$ 也成立, 然后用归纳法即得结论. $\operatorname{Ker} \varphi^{k+1} \subseteq \operatorname{Ker} \varphi^{k+2}$ 是显然的. 任取 $\alpha \in \operatorname{Ker} \varphi^{k+2}$ , 即 $\mathbf{0} = \varphi^{k+2}(\alpha) = \varphi^{k+1}(\varphi(\alpha))$ , 于是 $\varphi(\alpha) \in \operatorname{Ker} \varphi^{k+1} = \operatorname{Ker} \varphi^k$ , 从而 $\varphi^{k+1}(\alpha) = \varphi^k(\varphi(\alpha)) = 0$ , 即 $\alpha \in \operatorname{Ker} \varphi^{k+1}$ , 于是 $\operatorname{Ker} \varphi^{k+2} \subseteq \operatorname{Ker} \varphi^{k+1}$ 也成立.

(3) $\Leftrightarrow$ (6): 考虑 $\varphi$ 在不变子空间 $\operatorname{Im} \varphi$ 上的限制变换 $\varphi|_{\operatorname{Im} \varphi}: \operatorname{Im} \varphi \to \operatorname{Im} \varphi$ , 由限制的定义可知它的核等于 $\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi$ , 它的像等于 $\operatorname{Im} \varphi^2$ . 由于有限维线性空间上的线性变换是单射当且仅当它是满射, 当且仅当它是同构, 故 (3) $\Leftrightarrow$ (6) 成立.

(7) $\Rightarrow$ (6) 是显然的, 下证 (6) $\Rightarrow$ (7): 设 $\operatorname{Im} \varphi^k = \operatorname{Im} \varphi^{k+1}$ 已对正整数 $k$ 成立, 先证 $\operatorname{Im} \varphi^{k+1} = \operatorname{Im} \varphi^{k+2}$ 也成立, 然后用归纳法即得结论. $\operatorname{Im} \varphi^{k+2} \subseteq \operatorname{Im} \varphi^{k+1}$ 是显然的. 任取 $\alpha \in \operatorname{Im} \varphi^{k+1}$ , 即存在 $\beta \in V$ , 使得 $\alpha = \varphi^{k+1}(\beta)$ . 由于 $\varphi^k(\beta) \in \operatorname{Im} \varphi^k = \operatorname{Im} \varphi^{k+1}$ , 故存在 $\gamma \in V$ , 使得 $\varphi^k(\beta) = \varphi^{k+1}(\gamma)$ , 于是 $\alpha = \varphi^{k+1}(\beta) = \varphi(\varphi^k(\beta)) = \varphi(\varphi^{k+1}(\gamma)) = \varphi^{k+2}(\gamma) \in \operatorname{Im} \varphi^{k+2}$ , 从而 $\operatorname{Im} \varphi^{k+1} \subseteq \operatorname{Im} \varphi^{k+2}$ 也成立.

(1) $\Rightarrow$ (8) 是显然的, 下证 (8) $\Rightarrow$ (1). 我们先证 $\operatorname{Im} \varphi \subseteq U$ : 任取 $\varphi(\pmb{v}) \in \operatorname{Im} \varphi$ , 由直和分解可设 $\pmb{v} = \pmb{v}_1 + \pmb{u}$ , 其中 $\pmb{v}_1 \in \operatorname{Ker} \varphi$ , $\pmb{u} \in U$ , 则由 $U$ 的 $\varphi$ -不变性可得 $\varphi(\pmb{v}) = \varphi(\pmb{v}_1) + \varphi(\pmb{u}) = \varphi(\pmb{u}) \in U$ . 考虑不等式

$\dim V = \dim (\operatorname {Ker}\varphi \oplus U) = \dim \operatorname {Ker}\varphi +\dim U\geq \dim \operatorname {Ker}\varphi +\dim \operatorname {Im}\varphi = \dim V,$ 从而只能是 $U = \operatorname {Im}\varphi$ ，于是(1)成立.

(1) $\Rightarrow$ (9) 是显然的, 下证 (9) $\Rightarrow$ (1). 我们先证 $W \subseteq \operatorname{Ker} \varphi$ : 任取 $\boldsymbol{w} \in W$ , 则由 $W$ 的 $\varphi$ -不变性可得 $\varphi(\boldsymbol{w}) \in \operatorname{Im} \varphi \cap W = 0$ , 即有 $\boldsymbol{w} \in \operatorname{Ker} \varphi$ . 考虑不等式

$\dim V = \dim (\operatorname {Im}\varphi \oplus W) = \dim \operatorname {Im}\varphi +\dim W\leq \dim \operatorname {Im}\varphi +\dim \operatorname {Ker}\varphi = \dim V,$ 从而只能是 $W = \mathrm{Ker}\varphi$ ，于是(1)成立.□

下面我们从商空间的角度给出线性映射维数公式的第四种证法.

例 4.37 设 V, U 是数域 K 上的有限维线性空间, $\varphi: V \to U$ 是线性映射, 证明: 由 $\varphi$ 诱导的线性映射 $\overline{\varphi}: V/\operatorname{Ker}\varphi \to \operatorname{Im}\varphi$ , $\overline{\varphi}(\boldsymbol{v} + \operatorname{Ker}\varphi) = \varphi(\boldsymbol{v})$ 是线性同构. 特别地, $\dim V = \dim \operatorname{Ker}\varphi + \dim \operatorname{Im}\varphi$ .

证明 首先, $\overline{\varphi}$ 的定义不依赖于 $\operatorname{Ker} \varphi$ -陪集代表元的选取. 事实上, 若 $v_{1} + \operatorname{Ker} \varphi = v_{2} + \operatorname{Ker} \varphi$ , 即 $v_{1} - v_{2} \in \operatorname{Ker} \varphi$ , 则 $0 = \varphi(v_{1} - v_{2}) = \varphi(v_{1}) - \varphi(v_{2})$ , 即 $\varphi(v_{1}) = \varphi(v_{2})$ . 其次, 容易验证 $\overline{\varphi}$ 是一个线性映射 (留给读者完成). 再次, 由 $\overline{\varphi}$ 的定义不难看出它是满射. 最后, 由 $\overline{\varphi}$ 的定义可知 $\operatorname{Ker} \overline{\varphi} = \{0 + \operatorname{Ker} \varphi\}$ 是商空间 $V / \operatorname{Ker} \varphi$ 的零子空间, 故为单射, 从而 $\overline{\varphi}: V / \operatorname{Ker} \varphi \to \operatorname{Im} \varphi$ 是线性同构. 由商空间的维数公式可得

$$
\dim \operatorname{Im} \varphi = \dim (V / \operatorname{Ker} \varphi) = \dim V - \dim \operatorname{Ker} \varphi ,
$$

由此即得线性映射的维数公式. □

例 4.38 设 U, W 是 n 维线性空间 V 的子空间且 $\dim U + \dim W = \dim V$ . 求证: 存在 V 上的线性变换 $\varphi$ , 使得 $\operatorname{Ker} \varphi = U, \operatorname{Im} \varphi = W$ .

证明 取 U 的一组基 $e_{1}, \cdots, e_{m}$ ，并将其扩张为 V 的一组基 $e_{1}, \cdots, e_{m}, e_{m+1}, \cdots, e_{n}$ ，再取 W 的一组基 $f_{m+1}, \cdots, f_{n}$ 。定义 $\varphi$ 为 V 上的线性变换，它在基上的作用为： $\varphi(e_{i}) = 0 (1 \leq i \leq m)$ ， $\varphi(e_{j}) = f_{j} (m + 1 \leq j \leq n)$ 。注意到 $f_{m+1}, \cdots, f_{n}$ 是 W 的一组基，故通过简单的验证可得 $\operatorname{Ker} \varphi = U, \operatorname{Im} \varphi = W$ 。☐

线性映射的维数公式是描写线性映射的像空间和核空间关系的重要公式, 它在许多地方有重要的应用. 下面的例子可供参考.

例 4.39 设 $V = M_{n}(\mathbb{F})$ 是 F 上 n 阶矩阵全体构成的线性空间, $\varphi : V \to F$ 是迹函数, 即对任意的 $\boldsymbol{A} = (a_{ij}) \in V$ ,

$$
\varphi (\boldsymbol {A}) = a _ {1 1} + a _ {2 2} + \dots + a _ {n n}.
$$

求证: $\varphi$ 是 $V$ 到一维空间 $\mathbb{F}$ 上的线性映射, 并求 $\operatorname{Ker} \varphi$ 的维数及其一组基.

证明 容易验证 $\varphi$ 是线性映射且是映上的. 注意到 $V$ 是 $n^2$ 维线性空间, 由线性映射的维数公式可知, $\dim \operatorname{Ker} \varphi = n^2 - 1$ . 记 $E_{ij}$ 为 $n$ 阶基础矩阵, 即第 $(i, j)$ 元素为 1 , 其余元素为 0 的矩阵. 容易验证下列 $n^2 - 1$ 个矩阵迹为零且线性无关, 因此它们组成了 $\operatorname{Ker} \varphi$ 的一组基:

$$
\boldsymbol {E} _ {i j} (i \neq j), \boldsymbol {E} _ {1 1} - \boldsymbol {E} _ {2 2}, \boldsymbol {E} _ {2 2} - \boldsymbol {E} _ {3 3}, \dots , \boldsymbol {E} _ {n - 1, n - 1} - \boldsymbol {E} _ {n n}. \square
$$

例 4.40 设 $\varphi$ 是有限维线性空间 V 到 U 的线性映射, 且 V 的维数大于 U 的维数, 求证: $\operatorname{Ker} \varphi \neq 0$ .

证明 由线性映射的维数公式

$$
\dim V = \dim \operatorname{Im} \varphi + \dim \operatorname{Ker} \varphi ,
$$

以及 $\dim \operatorname{Im} \varphi \leq \dim U < \dim V$ 可得 $\dim \operatorname{Ker} \varphi > 0$ , 即 $\operatorname{Ker} \varphi \neq 0$ .

例 4.41 设 $\varphi$ 是有限维线性空间 V 到 U 的满线性映射, 求证: 必存在 V 的子空间 W, 使得 $V = W \oplus \operatorname{Ker} \varphi$ , 且 $\varphi$ 在 W 上的限制是 W 到 U 上的线性同构.

证法1 取 $\operatorname{Ker} \varphi$ 的一组基 $e_1, \cdots, e_k$ , 并将其扩张为 $V$ 的一组基 $e_1, \cdots, e_k, e_{k+1}, \cdots, e_n$ . 令 $W = L(e_{k+1}, \cdots, e_n)$ , 则显然 $V = W \oplus \operatorname{Ker} \varphi$ . 由例4.23的证明可知, $\varphi(e_{k+1}), \cdots, \varphi(e_n)$ 是 $\operatorname{Im} \varphi = U$ 的一组基, 故 $\varphi$ 在 $W$ 上的限制将 $W$ 的一组基 $e_{k+1}, \cdots, e_n$ 映射为 $U$ 的一组基 $\varphi(e_{k+1}), \cdots, \varphi(e_n)$ , 从而必为线性同构.

证法2 取 $W$ 为 $\operatorname{Ker} \varphi$ 在 $V$ 中的补空间. 对任意的 $\pmb{u} \in U$ , 由于 $\varphi$ 是映上的, 故存在 $\pmb{v} = \pmb{w} + \pmb{v}_1$ , 其中 $\pmb{w} \in W$ , $\pmb{v}_1 \in \operatorname{Ker} \varphi$ , 使得 $\pmb{u} = \varphi(\pmb{v}) = \varphi(\pmb{w})$ , 于是 $\varphi$ 在 $W$ 上的限制也是映上的. 另一方面, 由维数公式可知, $\dim W = \dim V - \dim \operatorname{Ker} \varphi = \dim U$ . 再对 $\varphi$ 在 $W$ 上的限制用线性映射的维数公式可知, 它必是单映射, 于是 $\varphi$ 在 $W$ 上的限制是 $W$ 到 $U$ 上的线性同构. □

例 4.42 设 $\varphi$ 是有限维线性空间 V 到 $V'$ 的线性映射, U 是 $V'$ 的子空间且 $U \subseteq \operatorname{Im} \varphi$ , 求证: $\varphi^{-1}(U) = \{v \in V \mid \varphi(v) \in U\}$ 是 V 的子空间, 且

$$
\dim U + \dim \operatorname{Ker} \varphi = \dim \varphi^ {- 1} (U).
$$

证明 容易验证 $\varphi^{-1}(U)$ 是 $V$ 的子空间. 将 $\varphi$ 限制在 $\varphi^{-1}(U)$ 上, 它是到 $U$ 上的线性映射. 因为 $0 \in U$ , 故 $\operatorname{Ker} \varphi \subseteq \varphi^{-1}(U)$ . 再对 $\varphi$ 在 $\varphi^{-1}(U)$ 上的限制用线性映射的维数公式即得结论. $\square$ 

例 4.43 设 U 是有限维线性空间 V 的子空间, $\varphi$ 是 V 上的线性变换, 求证:

(1) $\dim U - \dim \operatorname{Ker} \varphi \leq \dim \varphi(U) \leq \dim U;$ 

(2) $\dim\varphi^{-1}(U)\leq\dim U+\dim\operatorname{Ker}\varphi.$ 

证明 (1) 注意到当 $\varphi$ 限制在 $U$ 上时, $\operatorname{Ker}(\varphi|_U) = U \cap \operatorname{Ker} \varphi$ , 故由线性映射的维数公式可得

$$
\dim U = \dim (U \cap \operatorname{Ker} \varphi) + \dim \varphi (U).
$$

于是

$$
\dim U - \dim \operatorname{Ker} \varphi \leq \dim \varphi (U),
$$

而 $\dim\varphi(U)\leq\dim U$ 是显然的.

(2) 设 $\overline{\varphi}$ 是线性变换 $\varphi$ 在子空间 $\varphi^{-1}(U)$ 上的限制, 则 $\operatorname{Im} \overline{\varphi} = U \cap \operatorname{Im} \varphi$ , $\operatorname{Ker} \overline{\varphi} = \operatorname{Ker} \varphi \cap \varphi^{-1}(U) = \operatorname{Ker} \varphi$ . 由线性映射的维数公式可得

$$
\dim \varphi^ {- 1} (U) = \dim (U \cap \operatorname{Im} \varphi) + \dim \operatorname{Ker} \varphi .
$$

显然, 由 $\dim (U\cap \operatorname {Im}\varphi)\leq \dim U$ 可推出

$$
\dim \varphi^ {- 1} (U) \leq \dim U + \dim \operatorname{Ker} \varphi . \square
$$

例 4.44 利用上题证明: 若 A, B 是数域 F 上两个 n 阶方阵, 则

$$
\mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - n \leq \mathrm{r} (\boldsymbol {A B}) \leq \min \{\mathrm{r} (\boldsymbol {A}), \mathrm{r} (\boldsymbol {B}) \}.
$$

证明 令 $V$ 是 $\mathbb{F}$ 上 $n$ 维列向量空间, 则 $\pmb{A}$ 和 $\pmb{B}$ 可看成是 $V$ 上的线性变换. 又令 $U = B(V)$ , 注意到 $A(U) = A B(V)$ , 故 $\dim A(U) = r(A B)$ , $\dim \operatorname{Ker} A = n - r(A)$ , 即线性方程组 $A x = 0$ 的解空间维数. 而 $\dim U = \dim B(V) = r(B)$ , 由上题中 (1) 的结论, 可得

$$
\mathrm{r} (\boldsymbol {A}) + \mathrm{r} (\boldsymbol {B}) - n \leq \mathrm{r} (\boldsymbol {A B}).
$$

又显然有 $\dim A(U) \leq \dim A(V)$ , 故得 $r(A B) \leq r(A)$ . 从 $\dim A(U) \leq \dim U$ 可得 $r(A B) \leq r(B)$ . $\square$ 

## § 4.6 不变子空间

通过不变子空间来研究线性变换是一种常用的方法, 它可以将全空间上的问题化为维数较小的子空间上的问题. 因此, 在许多问题中常常要证明一个子空间是某个线性变换的不变子空间. 下面是几个典型的例子.

例4.45 设线性空间 $V$ 上的线性变换 $\varphi$ 在基 $\{e_1, e_2, e_3, e_4\}$ 下的表示矩阵为

$$
\boldsymbol {A} = \left( \begin{array}{c c c c} 1 & 0 & 2 & - 1 \\ 0 & 1 & 4 & - 2 \\ 2 & - 1 & 0 & 1 \\ 2 & - 1 & - 1 & 2 \end{array} \right),
$$

求证: $U = L(e_{1} + 2e_{2}, e_{3} + e_{4}, e_{1} + e_{2})$ 和 $W = L(e_{2} + e_{3} + 2e_{4})$ 都是 $\varphi$ 的不变子空间.

证明 要证明由若干个向量生成的子空间是某个线性变换的不变子空间, 通常只需证明这些向量在线性变换的作用下仍在这个子空间中即可. 注意到 $\varphi(e_1 + 2e_2)$ 的坐标向量为

$$
\left( \begin{array}{c c c c} 1 & 0 & 2 & - 1 \\ 0 & 1 & 4 & - 2 \\ 2 & - 1 & 0 & 1 \\ 2 & - 1 & - 1 & 2 \end{array} \right) \left( \begin{array}{c} 1 \\ 2 \\ 0 \\ 0 \end{array} \right) = \left( \begin{array}{c} 1 \\ 2 \\ 0 \\ 0 \end{array} \right),
$$

即 $\varphi (e_1 + 2e_2) = e_1 + 2e_2\in U.$ 同理可计算出

$$
\varphi \left(\boldsymbol {e} _ {3} + \boldsymbol {e} _ {4}\right) = \left(\boldsymbol {e} _ {1} + 2 \boldsymbol {e} _ {2}\right) + \left(\boldsymbol {e} _ {3} + \boldsymbol {e} _ {4}\right) \in U,
$$

$$
\varphi \left(\boldsymbol {e} _ {1} + \boldsymbol {e} _ {2}\right) = \left(\boldsymbol {e} _ {1} + \boldsymbol {e} _ {2}\right) + \left(\boldsymbol {e} _ {3} + \boldsymbol {e} _ {4}\right) \in U,
$$

$$
\varphi \left(\boldsymbol {e} _ {2} + \boldsymbol {e} _ {3} + 2 \boldsymbol {e} _ {4}\right) = \boldsymbol {e} _ {2} + \boldsymbol {e} _ {3} + 2 \boldsymbol {e} _ {4} \in W,
$$

因此结论成立. □

例 4.46 设 $V_{1}, V_{2}$ 是 V 上线性变换 $\varphi$ 的不变子空间, 求证: $V_{1} \cap V_{2}, V_{1} + V_{2}$ 也是 $\varphi$ 的不变子空间.

证明 任取 $\pmb{v} \in V_1 \cap V_2$ ，则由 $\pmb{v} \in V_i$ 可得 $\varphi(\pmb{v}) \in V_i (i = 1,2)$ ，于是 $\varphi(\pmb{v}) \in V_1 \cap V_2$ ，从而 $V_1 \cap V_2$ 是 $\varphi$ -不变子空间.

任取 $v \in V_{1} + V_{2}$ ，则 $v = v_{1} + v_{2}$ ，其中 $v_{i} \in V_{i}$ ，故 $\varphi(v_{i}) \in V_{i} (i = 1, 2)$ ，于是 $\varphi(v) = \varphi(v_{1}) + \varphi(v_{2}) \in V_{1} + V_{2}$ ，从而 $V_{1} + V_{2}$ 是 $\varphi-$ 不变子空间。☐

例 4.47 设 $\varphi$ 是 $n(n \geq 2)$ 维线性空间 V 上的线性变换, 证明以下 n 个结论等价:

(1) V 的任一 1 维子空间都是 $\varphi-$ 不变子空间;

...... 

(r) V 的任一 r 维子空间都是 $\varphi-$ 不变子空间;

...... 

(n-1) V 的任一 n-1 维子空间都是 $\varphi$ -不变子空间;

(n) $\varphi$ 是纯量变换.

证明 注意到当 $1 \leq i \leq n - 2$ 时, 任一 $i$ 维子空间 $V_{0}$ 都可表示为两个 $i + 1$ 维子空间 $V_{1}, V_{2}$ 的交, 于是由例4.46可知: $(n) \Rightarrow (n - 1) \Rightarrow (n - 2) \Rightarrow \cdots \Rightarrow (1)$ 显然成立, 剩下只要证明 $(1) \Rightarrow (n)$ 即可. 取 $V$ 的一组基 $\{e_{1}, e_{2}, \cdots, e_{n}\}$ , 由(1)可设 $\varphi(e_{i}) = \lambda_{i} e_{i} (1 \leq i \leq n)$ . 只要证明 $\lambda_{1} = \lambda_{2} = \cdots = \lambda_{n}$ 即可得到 $\varphi$ 为纯量变换. 用反证法, 不妨设 $\lambda_{1} \neq \lambda_{2}$ , 则由 $L(e_{1} + e_{2})$ 也是 $\varphi$ -不变子空间可设 $\varphi(e_{1} + e_{2}) = \lambda_{0}(e_{1} + e_{2})$ , 于是 $(\lambda_{1} - \lambda_{0}) e_{1} + (\lambda_{2} - \lambda_{0}) e_{2} = 0$ , 从而 $\lambda_{1} = \lambda_{2} = \lambda_{0}$ , 矛盾. □

例 4.48 设 $\varphi, \psi$ 是线性空间 V 上的线性变换且 $\varphi\psi = \psi\varphi$ ，求证：Im $\varphi$ 及 Ker $\varphi$ 都是 $\psi$ 的不变子空间.

证明 任取 $\pmb{v} \in \operatorname{Im} \varphi$ ，即 $\pmb{v} = \varphi(\pmb{u})$ ，则 $\psi(\pmb{v}) = \psi \varphi(\pmb{u}) = \varphi \psi(\pmb{u}) \in \operatorname{Im} \varphi$ ，即 $\operatorname{Im} \varphi$ 是 $\psi$ 的不变子空间.

任取 $v \in \operatorname{Ker} \varphi$ ，即 $\varphi(v) = 0$ ，则 $\varphi\psi(v) = \psi\varphi(v) = 0$ 。因此， $\psi(v) \in \operatorname{Ker} \varphi$ ，即 $\operatorname{Ker} \varphi$ 是 $\psi$ 的不变子空间。☐

例 4.49 设 A 为数域 K 上的 n 阶幂零阵, B 为 n 阶方阵, 满足 AB = BA 且 r(AB) = r(B). 求证: B = O.

证明 将 $A, B$ 都看成是 $\mathbb{K}^n$ 上的线性变换, 设 $A^k = O$ , 其中 $k$ 为正整数. 由 $AB = BA$ 以及例4.48可知 $\operatorname{Im} B$ 是 $A$ -不变子空间. 考虑 $A$ 在 $\operatorname{Im} B$ 上的限制 $A|_{\operatorname{Im} B}$ , 其像空间的维数 $\dim AB(\mathbb{K}^n) = \operatorname{r}(AB) = \operatorname{r}(B) = \dim \operatorname{Im} B$ , 故 $A|_{\operatorname{Im} B}$ 是 $\operatorname{Im} B$ 上的满线性变换. 于是 $(A|_{\operatorname{Im} B})^k = A^k|_{\operatorname{Im} B} = O|_{\operatorname{Im} B}$ 也是 $\operatorname{Im} B$ 上的满线性变换, 从而只能是 $\operatorname{Im} B = 0$ , 即 $B = O$ . □

例 4.50 设 $\varphi$ 是 n 维线性空间 V 上的自同构, 若 W 是 $\varphi$ 的不变子空间, 求证: W 也是 $\varphi^{-1}$ 的不变子空间.

证明 将 $\varphi$ 限制在 $W$ 上, 它是 $W$ 上的线性变换. 由于 $\varphi$ 是单映射, 故它在 $W$ 上的限制也是单映射, 从而也是满映射, 即它是 $W$ 上的自同构, 于是 $\varphi(W) = W$ , 由此即得 $\varphi^{-1}(W) = W$ . $\square$ 

注 如果 $V$ 是无限维线性空间, 则例 4.50 的结论一般并不成立. 例如, $V = \mathbb{K}[x^{-1}, x]$ 是由数域 $\mathbb{K}$ 上的 Laurent 多项式 $f(x) = \sum_{i=-m}^{n} a_i x^i (m, n \in \mathbb{N})$ 构成的线性空间, $V$ 上的线性变换 $\varphi, \psi$ 定义为 $\varphi(f(x)) = xf(x), \psi(f(x)) = x^{-1} f(x)$ . 显然, $\varphi, \psi$ 互为逆映射, 从而都是自同构. 注意到 $W = \mathbb{K}[x]$ 是 $V$ 的 $\varphi$ -不变子空间, 但 $W$ 显然不是 $\varphi^{-1}$ -不变子空间.

例 4.51 设 V 是次数小于 n 的实系数多项式组成的线性空间, D 是 V 上的求导变换. 求证: D 的任一 $k (k \geq 1)$ 维不变子空间必是由 $\{1, x, \cdots, x^{k-1}\}$ 生成的子空间. 特别地, 向量 1 包含在 D 的任一非零不变子空间中.

证明 任取 D 的一个 $k(k \geq 1)$ 维不变子空间 $V_{0}$ ，再取出 $V_{0}$ 中次数最高的一个多项式（不唯一） $f(x) = a_{l}x^{l} + a_{l-1}x^{l-1} + \cdots + a_{1}x + a_{0}$ ，其中 $a_{l} \neq 0$ 。注意到 $V_{0}$ 是 D 不变子空间，由 $D^{l}f(x) = a_{l}l! \in V_{0}$ 可得 $1 \in V_{0}$ ；由 $D^{l-1}f(x) = a_{l}l!x + a_{l-1}(l-1)! \in V_{0}$ 可得 $x \in V_{0}; \cdots;$ 由 $Df(x) = a_{l}lx^{l-1} + a_{l-1}(l-1)x^{l-2} + \cdots + a_{1} \in V_{0}$ 可得 $x^{l-1} \in V_{0}$ ；最后由 $f(x) \in V_{0}$ 可得 $x^{l} \in V_{0}$ 。因为 $V_{0}$ 中所有多项式的次数都小于等于 l，所以 $\{1, x, \cdots, x^{l}\}$ 构成了 $V_{0}$ 的一组基，于是 $k = \dim V_{0} = l + 1$ ，即 l = k - 1，从而结论得证。☐

例 4.52 设 $\varphi$ 是 n 维线性空间 V 上的线性变换, $\varphi$ 在 V 的一组基下的表示矩阵为对角阵且主对角线上的元素互不相同, 求 $\varphi$ 的所有不变子空间.

解 设 $\varphi$ 在基 $e_{1}, e_{2}, \cdots, e_{n}$ 下的表示矩阵为 $\mathrm{diag}\{d_{1}, d_{2}, \cdots, d_{n}\}$ ，其中 $d_{1}, d_{2}, \cdots, d_{n}$ 互不相同，则 $\varphi(e_{i}) = d_{i}e_{i}$ 。对任意的指标集 $1 \leq i_{1} < i_{2} < \cdots < i_{r} \leq n$ ，容易验证 $U = L(e_{i_{1}}, e_{i_{2}}, \cdots, e_{i_{r}})$ 是 $\varphi$ 的不变子空间。注意到 $1, 2, \cdots, n$ 的子集共有 $2^{n}$ 个（空集对应于零子空间），故上述形式的 $\varphi-$ 不变子空间共有 $2^{n}$ 个。下面我们证明 $\varphi$ 的任一不变子空间都是上述不变子空间之一。

任取 $\varphi$ 的非零不变子空间 $U$ , 设指标集

$$
I = \{i \in [ 1, n ] | \text {存在某个}   {\pmb \alpha} \in U,   \text {使得}   {\pmb \alpha} = c {\pmb e} _ {i} + \dots ,   \text {其中}   c \neq 0 \}.
$$

因为 $U \neq 0$ ，故 $I \neq \emptyset$ ，不妨设 $I = \{i_{1}, i_{2}, \cdots, i_{r}\}$ 。由指标集 I 的定义可知， $U \subseteq L(e_{i_{1}}, e_{i_{2}}, \cdots, e_{i_{r}})$ 。下面我们证明 $e_{i_{j}} \in U (j = 1, 2, \cdots, r)$ 成立。不失一般性，我们只需证明 $e_{i_{1}} \in U$ 即可。由指标集 I 的定义可知，存在 $\alpha \in U$ ，使得

$$
\boldsymbol {\alpha} = c _ {1} \boldsymbol {e} _ {i _ {1}} + c _ {2} \boldsymbol {e} _ {i _ {2}} + \dots + c _ {k} \boldsymbol {e} _ {i _ {k}},
$$

其中 $c_{1}, c_{2}, \cdots, c_{k}$ 都是非零常数. 将上式作用 $\varphi^{l}$ , 可得

$$
\varphi^ {l} (\alpha) = c _ {1} d _ {i _ {1}} ^ {l} e _ {i _ {1}} + c _ {2} d _ {i _ {2}} ^ {l} e _ {i _ {2}} + \dots + c _ {k} d _ {i _ {k}} ^ {l} e _ {i _ {k}}, l = 1, 2, \dots , k - 1.
$$

因此，我们有

$$
(\boldsymbol {\alpha}, \varphi (\boldsymbol {\alpha}), \dots , \varphi^ {k - 1} (\boldsymbol {\alpha})) = (e _ {i _ {1}}, e _ {i _ {2}}, \dots , e _ {i _ {k}}) \left( \begin{array}{c c c c} c _ {1} & c _ {1} d _ {i _ {1}} & \dots & c _ {1} d _ {i _ {1}} ^ {k - 1} \\ c _ {2} & c _ {2} d _ {i _ {2}} & \dots & c _ {2} d _ {i _ {2}} ^ {k - 1} \\ \vdots & \vdots & & \vdots \\ c _ {k} & c _ {k} d _ {i _ {k}} & \dots & c _ {k} d _ {i _ {k}} ^ {k - 1} \end{array} \right).
$$

上式右边的矩阵记为 A, 由于 $\left|A\right|=c_{1}c_{2}\cdots c_{k}\prod_{1\leq r<s\leq k}(d_{i_{s}}-d_{i_{r}})\neq0$ , 故 A 为可逆矩阵, 从而

$$
\left(\boldsymbol {e} _ {i _ {1}}, \boldsymbol {e} _ {i _ {2}}, \dots , \boldsymbol {e} _ {i _ {k}}\right) = (\alpha , \varphi (\alpha), \dots , \varphi^ {k - 1} (\alpha)) \boldsymbol {A} ^ {- 1},
$$

特别地， $e_{i_1}$ 可以表示为 $\alpha, \varphi(\alpha), \cdots, \varphi^{k-1}(\alpha)$ 的线性组合。因为 U 是 $\varphi$ 的不变子空间，故 $\alpha, \varphi(\alpha), \cdots, \varphi^{k-1}(\alpha)$ 都是 U 中的向量，从而 $e_{i_1} \in U$ ，因此 $U = L(e_{i_1}, e_{i_2}, \cdots, e_{i_r})$ 。综上所述， $\varphi$ 的不变子空间共有 $2^n$ 个。☐

例 4.53 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $U$ 是 $r$ 维 $\varphi$ -不变子空间. 取 $U$ 的一组基 $\{e_1, \cdots, e_r\}$ , 并扩张为 $V$ 的一组基 $\{e_1, \cdots, e_r, e_{r+1}, \cdots, e_n\}$ . 设 $\varphi$ 在这组基下的表示矩阵 $A = (a_{ij}) = \begin{pmatrix} A_{11} & A_{12} \\ O & A_{22} \end{pmatrix}$ 为分块上三角阵, 其中 $A_{11}$ 是 $\varphi$ 在不变子空间 $U$ 上的限制 $\varphi|_U$ 在基 $\{e_1, \cdots, e_r\}$ 下的表示矩阵. 证明: $\varphi$ 诱导的变换 $\overline{\varphi}(v + U) = \varphi(v) + U$ 是商空间 $V/U$ 上的线性变换, 并且在 $V/U$ 的一组基 $\{e_{r+1} + U, \cdots, e_n + U\}$ 下的表示矩阵为 $A_{22}$ .

证明 由 $U$ 是 $\varphi$ -不变子空间容易验证 $\overline{\varphi}$ 的定义不依赖于 $U$ -陪集代表元的选取, 从而是定义好的变换. $\overline{\varphi}$ 的线性由 $\varphi$ 的线性即得 (请读者自行验证). 由 $\varphi$ 的表示矩阵为 $A$ 可得

$$
\begin{array}{l} \overline {{{\varphi}}} \left(\boldsymbol {e} _ {r + 1} + U\right) = a _ {r + 1, r + 1} \left(\boldsymbol {e} _ {r + 1} + U\right) + \dots + a _ {n, r + 1} \left(\boldsymbol {e} _ {n} + U\right), \\ \dots \\ \end{array}
$$

$$
\overline {{{\varphi}}} (\boldsymbol {e} _ {n} + U) = a _ {r + 1, n} (\boldsymbol {e} _ {r + 1} + U) + \dots + a _ {n, n} (\boldsymbol {e} _ {n} + U),
$$

故 $\overline{\varphi}$ 在基 $\{e_{r+1} + U, \cdots, e_n + U\}$ 下的表示矩阵为 $A_{22}$ . □

## § 4.7 幂等变换

线性变换 $\varphi$ 若满足 $\varphi^2 = \varphi$ , 则称为幂等变换, 这是一类比较简单又有重要用途的线性变换. 我们先来看一个幂等变换的简单例子.

设 $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{m}$ 为线性空间 V 关于子空间 $V_{i} (1 \leq i \leq m)$ 的直和分解，则 V 中任一向量 v 可唯一地分解为 $v = v_{1} + v_{2} + \cdots + v_{m}$ ，其中 $v_{i} \in V_{i}$ 。定义 $\varphi_{i} : V \to V, \varphi_{i}(v) = v_{i} (1 \leq i \leq m)$ ，容易验证 $\varphi_{i}$ 是 V 上的线性变换，称为 V 到 $V_{i}$ 上的投影变换。通过简单的验证可以得到投影变换满足如下性质：

(1) $\varphi_{i}^{2} = \varphi_{i}, \varphi_{i}\varphi_{j} = 0 (i \neq j), I_{V} = \varphi_{1} + \varphi_{2} + \cdots + \varphi_{m};$ 

(2) $\operatorname{Im} \varphi_i = V_i$ , $\operatorname{Ker} \varphi_i = \bigoplus_{j \neq i} V_j$ , $V = \operatorname{Im} \varphi_i \oplus \operatorname{Ker} \varphi_i$ . 

因此, 投影变换 $\varphi_{i}$ 都是幂等变换; 若取 $V_{i}$ 的一组基拼成 $V$ 的一组基, 则 $\varphi_{i}$ 在这组基下的表示矩阵为 $\operatorname{diag}\{0, \cdots, 0, 1, \cdots, 1, 0, \cdots, 0\}$ , 其中有 $\dim V_{i}$ 个 1; 另外还有 $V = \operatorname{Im} \varphi_{1} \oplus \operatorname{Im} \varphi_{2} \oplus \cdots \oplus \operatorname{Im} \varphi_{m}, \operatorname{Ker} \varphi_{1} \cap \operatorname{Ker} \varphi_{2} \cap \cdots \cap \operatorname{Ker} \varphi_{m} = 0$ .

然而下面的例子告诉我们, 幂等变换其实就是投影变换.

例 4.54 设 $\varphi$ 是 n 维线性空间 V 上的幂等变换, 证明: $V = U \oplus W$ , 其中 $U = \operatorname{Im} \varphi = \operatorname{Ker}(I_V - \varphi)$ , $W = \operatorname{Im}(I_V - \varphi) = \operatorname{Ker} \varphi$ , 且 $\varphi$ 就是 V 到 U 上的投影变换.

证明 因为 $\varphi^2 = \varphi$ , 故 $\operatorname{Im} \varphi \subseteq \operatorname{Ker}(I - \varphi)$ , $\operatorname{Im}(I - \varphi) \subseteq \operatorname{Ker} \varphi$ . 对任意的 $\alpha \in V$ , $\varphi(\alpha) \in \operatorname{Ker}(I - \varphi)$ , $(I - \varphi)(\alpha) \in \operatorname{Ker} \varphi$ , 于是 $\alpha = (I - \varphi)(\alpha) + \varphi(\alpha) \in \operatorname{Ker} \varphi + \operatorname{Ker}(I - \varphi)$ , 从而 $V = \operatorname{Ker} \varphi + \operatorname{Ker}(I - \varphi)$ . 任取 $\beta \in \operatorname{Ker} \varphi \cap \operatorname{Ker}(I - \varphi)$ , 则 $\beta = (I - \varphi)(\beta) + \varphi(\beta) = 0$ , 即 $\operatorname{Ker} \varphi \cap \operatorname{Ker}(I - \varphi) = 0$ . 因此, $V = \operatorname{Ker} \varphi \oplus \operatorname{Ker}(I - \varphi)$ . 特别地, 由维数公式可得 $\dim \operatorname{Im} \varphi = \dim \operatorname{Ker}(I - \varphi)$ , $\dim \operatorname{Im}(I - \varphi) = \dim \operatorname{Ker} \varphi$ , 从而 $\operatorname{Im} \varphi = \operatorname{Ker}(I - \varphi)$ , $\operatorname{Im}(I - \varphi) = \operatorname{Ker} \varphi$ .

令 $U = \operatorname{Im} \varphi = \operatorname{Ker}(I - \varphi)$ , $W = \operatorname{Im}(I - \varphi) = \operatorname{Ker} \varphi$ , 则 $V = U \oplus W$ . 注意到对任意的 $\alpha \in V$ , $\alpha = \varphi(\alpha) + (I - \varphi)(\alpha)$ , 其中 $\varphi(\alpha) \in U$ , $(I - \varphi)(\alpha) \in W$ , 故 $\varphi$ 就是 $V$ 到 $U$ 上的投影变换. □

注 从例 4.54 可以看出, 对线性空间 $V$ 上的幂等变换 $\varphi$ , 总存在 $V$ 的一组基 (它由 $U$ 的基和 $W$ 的基拼成), 使得 $\varphi$ 在这组基下的表示矩阵为下列对角矩阵:

$$
\left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right),
$$

其中 $I_{r}$ 为 r 阶单位矩阵, r 等于 $\dim U$ , 即 $\varphi$ 的像空间的维数.

例 4.55 设 A 是数域 F 上的 n 阶幂等矩阵, 求证:

(1) 存在 n 阶非异阵 P, 使得 $P^{-1}AP = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ ，其中 $r = r(A)$ ;

(2) $\mathrm{r}(\boldsymbol{A}) = \mathrm{tr}(\boldsymbol{A}).$ 

证明 将 A 看成是 n 维列向量空间 $F^{n}$ 上的线性变换, 则它是幂等变换, 因此由例 4.54 的注即得 (1). 注意到 $\mathrm{tr}(A)=\mathrm{tr}(P^{-1}AP)=\mathrm{tr}\begin{pmatrix}I_{r}&O\\O&O\end{pmatrix}=r=\mathrm{r}(A)$ , 故 (2) 也成立. □

例 4.56 设 A, B 是数域 F 上的 n 阶幂等矩阵, 且 A 和 B 的秩相同, 求证: 必存在 F 上的 n 阶可逆矩阵 C, 使得 CB = AC.

证明 由例4.55可知, $A$ 和 $B$ 均相似于矩阵 $\begin{pmatrix} I_r & O \\ O & O \end{pmatrix}$ , 于是 $A$ 和 $B$ 相似, 即存在可逆矩阵 $C$ , 使得 $B = C^{-1}AC$ , 即 $CB = AC$ . □

例 4.57 设 $\varphi, \psi$ 是 n 维线性空间 V 上的幂等线性变换, 求证:

(1) $\operatorname{Im} \varphi = \operatorname{Im} \psi$ 的充要条件是 $\varphi \psi = \psi, \psi \varphi = \varphi$ ;

(2) $\operatorname{Ker} \varphi = \operatorname{Ker} \psi$ 的充要条件是 $\varphi \psi = \varphi, \psi \varphi = \psi$ .

证明 (1) 由 $\psi = \varphi \psi$ 可得 $\operatorname{Im} \psi \subseteq \operatorname{Im} \varphi$ . 同理由 $\varphi = \psi \varphi$ 可得 $\operatorname{Im} \varphi \subseteq \operatorname{Im} \psi$ . 因此 $\operatorname{Im} \varphi = \operatorname{Im} \psi$ .

反之，若 $\operatorname{Im} \varphi = \operatorname{Im} \psi$ ，则对任意的 $\alpha \in V, \psi(\alpha) \in \operatorname{Im} \psi = \operatorname{Im} \varphi$ ，故存在 $\beta \in V$ ，使得 $\psi(\alpha) = \varphi(\beta)$ 。注意到 $\varphi^2 = \varphi$ ，故 $\varphi \psi(\alpha) = \varphi^2(\beta) = \varphi(\beta) = \psi(\alpha)$ ，于是 $\varphi \psi = \psi$ 。同理可证 $\psi \varphi = \varphi$ 。

(2) 设 $\varphi\psi = \varphi, \psi\varphi = \psi$ 。对任意的 $\alpha \in \operatorname{Ker} \varphi$ ，即 $\varphi(\alpha) = 0$ ，有 $\psi(\alpha) = \psi\varphi(\alpha) = 0$ ，即 $\alpha \in \operatorname{Ker} \psi$ ，于是 $\operatorname{Ker} \varphi \subseteq \operatorname{Ker} \psi$ 。同理可证 $\operatorname{Ker} \psi \subseteq \operatorname{Ker} \varphi$ ，因此 $\operatorname{Ker} \varphi = \operatorname{Ker} \psi$ 。

反之, 设 $\operatorname{Ker} \varphi = \operatorname{Ker} \psi$ . 对任意的 $\alpha \in V$ , 有 $\psi(\alpha - \psi(\alpha)) = \psi(\alpha) - \psi^2(\alpha) = 0$ , 因此 $\alpha - \psi(\alpha) \in \operatorname{Ker} \psi = \operatorname{Ker} \varphi$ , 从而 $\varphi(\alpha - \psi(\alpha)) = 0$ , 即 $\varphi(\alpha) = \varphi \psi(\alpha)$ , 于是 $\varphi = \varphi \psi$ . 同理可证 $\psi \varphi = \psi$ . □

例 4.58 设 $\varphi, \psi$ 是 n 维线性空间 V 上的幂等线性变换, 求证:

(1) $\varphi + \psi$ 是幂等变换的充要条件是 $\varphi\psi = \psi\varphi = 0;$ 

(2) $\varphi - \psi$ 是幂等变换的充要条件是 $\varphi\psi = \psi\varphi = \psi$ .

证明 充分性容易验证, 下面证明必要性.

(1) 若 $(\varphi + \psi)^2 = \varphi + \psi$ ，则 $\varphi \psi + \psi \varphi = 0$ ，即 $\varphi \psi = -\psi \varphi$ 。将上式两边分别左乘及右乘 $\varphi$ ，可得 $\varphi \psi \varphi = -\varphi \psi = -\psi \varphi$ 。因此 $\varphi \psi = \psi \varphi = 0$ 。

(2) 若 $(\varphi - \psi)^{2} = \varphi - \psi$ ，则 $\varphi\psi + \psi\varphi = 2\psi$ 。将上式两边分别左乘及右乘 $\varphi$ ，可得 $\varphi\psi\varphi = \varphi\psi = \psi\varphi$ 。因此 $\varphi\psi = \psi\varphi = \psi$ 。☐

例 4.59 设 $\varphi_{1},\cdots,\varphi_{m}$ 是 n 维线性空间 V 上的线性变换, 且适合条件:

$$
\varphi_ {i} ^ {2} = \varphi_ {i}, \quad \varphi_ {i} \varphi_ {j} = 0 (i \neq j), \quad \operatorname{Ker} \varphi_ {1} \cap \dots \cap \operatorname{Ker} \varphi_ {m} = 0.
$$

求证: V 是 $\operatorname{Im}\varphi_{1},\cdots,\operatorname{Im}\varphi_{m}$ 的直和.

证明 任取 $\alpha \in \operatorname{Im} \varphi_i \cap (\sum_{j \neq i} \operatorname{Im} \varphi_j)$ , 设 $\alpha = \varphi_i(\beta)$ , 其中 $\beta \in V$ , 则 $\varphi_i(\alpha) = \varphi_i^2(\beta) = \varphi_i(\beta) = \alpha$ . 又可设

$$
\boldsymbol {\alpha} = \varphi_ {1} (\boldsymbol {\alpha} _ {1}) + \dots + \varphi_ {i - 1} (\boldsymbol {\alpha} _ {i - 1}) + \varphi_ {i + 1} (\boldsymbol {\alpha} _ {i + 1}) + \dots + \varphi_ {m} (\boldsymbol {\alpha} _ {m}),
$$

于是

$$
\boldsymbol {\alpha} = \varphi_ {i} (\boldsymbol {\alpha}) = \varphi_ {i} \left(\varphi_ {1} \left(\boldsymbol {\alpha} _ {1}\right) + \dots + \varphi_ {i - 1} \left(\boldsymbol {\alpha} _ {i - 1}\right) + \varphi_ {i + 1} \left(\boldsymbol {\alpha} _ {i + 1}\right) + \dots + \varphi_ {m} \left(\boldsymbol {\alpha} _ {m}\right)\right) = \mathbf {0}.
$$

因此 $\operatorname{Im} \varphi_i \cap (\sum_{j \neq i} \operatorname{Im} \varphi_j) = 0$ .

对 V 中任一向量 $\alpha$ 以及任意的 i, 有

$$
\varphi_ {i} (\boldsymbol {\alpha} - \left(\varphi_ {1} (\boldsymbol {\alpha}) + \dots + \varphi_ {m} (\boldsymbol {\alpha})\right)) = \varphi_ {i} (\boldsymbol {\alpha}) - \varphi_ {i} ^ {2} (\boldsymbol {\alpha}) = \mathbf {0},
$$

因此

$$
\boldsymbol {\alpha} - \left(\varphi_ {1} (\boldsymbol {\alpha}) + \dots + \varphi_ {m} (\boldsymbol {\alpha})\right) \in \operatorname{Ker} \varphi_ {1} \cap \dots \cap \operatorname{Ker} \varphi_ {m} = 0,
$$

从而 $\boldsymbol{\alpha}-(\varphi_{1}(\boldsymbol{\alpha})+\cdots+\varphi_{m}(\boldsymbol{\alpha}))=0,$ 即 $\boldsymbol{\alpha}=\varphi_{1}(\boldsymbol{\alpha})+\cdots+\varphi_{m}(\boldsymbol{\alpha})$ ，于是 V=Im $\varphi_{1}+\cdots+Im\varphi_{m}$ 。这就证明了 V 是 Im $\varphi_{1},\cdots,Im\varphi_{m}$ 的直和。☐

例 4.60 设 $\varphi, \varphi_{1}, \cdots, \varphi_{m}$ 是 n 维线性空间 V 上的线性变换, 满足: $\varphi^{2} = \varphi$ 且 $\varphi = \varphi_{1} + \varphi_{2} + \cdots + \varphi_{m}$ . 求证: $\mathrm{r}(\varphi) = \mathrm{r}(\varphi_{1}) + \mathrm{r}(\varphi_{2}) + \cdots + \mathrm{r}(\varphi_{m})$ 成立的充要条件是 $\varphi_{i}^{2} = \varphi_{i}, \varphi_{i}\varphi_{j} = 0 (i \neq j)$ .

证法 1 (几何方法) 令 $V_{0} = \operatorname{Im}\varphi, V_{i} = \operatorname{Im}\varphi_{i}$ ，则由 $\varphi = \varphi_{1} + \varphi_{2} + \cdots + \varphi_{m}$ 可得 $V_{0} \subseteq V_{1} + V_{2} + \cdots + V_{m}$ .

先证充分性. 由 $\varphi_{i}^{2} = \varphi_{i}, \varphi_{i}\varphi_{j} = 0 (i \neq j)$ 可得 $\varphi_{i} = (\varphi_{1} + \varphi_{2} + \dots + \varphi_{m})\varphi_{i} = \varphi \varphi_{i}$ , 故 $V_{i} \subseteq V_{0}$ , 从而 $V_{0} = V_{1} + V_{2} + \dots + V_{m}$ . 要证上述和为直和, 只要证明零向量表示唯一即可. 设

$$
\mathbf {0} = \alpha_ {1} + \alpha_ {2} + \dots + \alpha_ {m}, \alpha_ {i} = \varphi_ {i} (\boldsymbol {v} _ {i}) \in V _ {i} (1 \leq i \leq m),
$$

则 $\mathbf{0}=\varphi_{i}(\varphi_{1}(\mathbf{v}_{1}))+\varphi_{i}(\varphi_{2}(\mathbf{v}_{2}))+\cdots+\varphi_{i}(\varphi_{m}(\mathbf{v}_{m}))=\varphi_{i}^{2}(\mathbf{v}_{i})=\varphi_{i}(\mathbf{v}_{i})=\alpha_{i}$ . 因此 $V_{0}=V_{1}\oplus V_{2}\oplus\cdots\oplus V_{m}$ . 两边同取维数即得 $\mathrm{r}(\varphi)=\mathrm{r}(\varphi_{1})+\mathrm{r}(\varphi_{2})+\cdots+\mathrm{r}(\varphi_{m})$ .

再证必要性. 注意到

$$
\dim V _ {0} \leq \dim (V _ {1} + V _ {2} + \dots + V _ {m}) \leq \dim V _ {1} + \dim V _ {2} + \dots + \dim V _ {m},
$$

故由 $\mathrm{r}(\varphi)=\mathrm{r}(\varphi_{1})+\mathrm{r}(\varphi_{2})+\cdots+\mathrm{r}(\varphi_{m})$ 可得 $\dim V_{0}=\dim V_{1}+\dim V_{2}+\cdots+\dim V_{m}$ ，从而上式中的不等号只能取等号。由直和的充要条件可知， $V_{1}+V_{2}+\cdots+V_{m}$ 是直和，并且

$$
V _ {0} = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {m}.
$$

因为 $\operatorname{Im} \varphi_{i} = V_{i} \subseteq V_{0} = \operatorname{Im} \varphi$ , 故对 $V$ 中任一向量 $\alpha$ , 存在 $\beta \in V$ , 使得 $\varphi_{i}(\alpha) = \varphi(\beta)$ , 从而

$$
\begin{array}{l} \varphi_ {i} (\alpha) = \varphi (\beta) = \varphi^ {2} (\beta) = \left(\varphi_ {1} + \varphi_ {2} + \dots + \varphi_ {m}\right) \varphi (\beta) \\ = \left(\varphi_ {1} + \varphi_ {2} + \dots + \varphi_ {m}\right) \varphi_ {i} (\alpha) \\ = \varphi_ {1} \varphi_ {i} (\alpha) + \varphi_ {2} \varphi_ {i} (\alpha) + \dots + \varphi_ {m} \varphi_ {i} (\alpha). \\ \end{array}
$$

由直和表示的唯一性可知

$$
\varphi_ {i} ^ {2} (\boldsymbol {\alpha}) = \varphi_ {i} (\boldsymbol {\alpha}), \quad \varphi_ {j} \varphi_ {i} (\boldsymbol {\alpha}) = \mathbf {0} (j \neq i),
$$

于是 $\varphi_{i}^{2} = \varphi_{i},\varphi_{i}\varphi_{j} = 0(i\neq j).$ 

证法2(代数方法) 把问题转换成代数的语言: 设 $A, A_{1}, A_{2}, \cdots, A_{m}$ 是 n 阶矩阵, 满足 $A^{2} = A$ 且 $A = A_{1} + A_{2} + \cdots + A_{m}$ , 求证: $\mathrm{r}(A) = \mathrm{r}(A_{1}) + \mathrm{r}(A_{2}) + \cdots + \mathrm{r}(A_{m})$ 成立的充要条件是 $A_{i}^{2} = A_{i}, A_{i}A_{j} = O (i \neq j)$ .

先证充分性. 若 $A_{i}^{2} = A_{i}$ , 则由例 4.55 可知 $\mathrm{r}(A_{i}) = \mathrm{tr}(A_{i})$ , 从而

$$
\begin{array}{l} \mathrm{r} (\boldsymbol {A}) = \operatorname{tr} (\boldsymbol {A}) = \operatorname{tr} \left(\boldsymbol {A} _ {1} + \boldsymbol {A} _ {2} + \dots + \boldsymbol {A} _ {m}\right) \\ = \operatorname{tr} \left(\boldsymbol {A} _ {1}\right) + \operatorname{tr} \left(\boldsymbol {A} _ {2}\right) + \dots + \operatorname{tr} \left(\boldsymbol {A} _ {m}\right) = \mathrm{r} \left(\boldsymbol {A} _ {1}\right) + \mathrm{r} \left(\boldsymbol {A} _ {2}\right) + \dots + \mathrm{r} \left(\boldsymbol {A} _ {m}\right). \\ \end{array}
$$

再证必要性. 因为 A 是幂等矩阵, 故由例 3.70 可得 $n = \mathrm{r}(I_n - A) + \mathrm{r}(A)$ , 从而 $n = \mathrm{r}(I_n - A) + \mathrm{r}(A_1) + \mathrm{r}(A_2) + \cdots + \mathrm{r}(A_m)$ . 构造如下分块对角矩阵并对其实施分块初等变换, 可得

$$
\left(\begin{array}{c c c c c}\boldsymbol {I} _ {n} - \boldsymbol {A}&&&&\\&\boldsymbol {A} _ {1}&&&\\&&\boldsymbol {A} _ {2}&&\\&&&\ddots&\\&&&&\boldsymbol {A} _ {m}\end{array}\right)\rightarrow \left(\begin{array}{c c c c c}\boldsymbol {I} _ {n} - \boldsymbol {A}&&&&\\\boldsymbol {A} _ {1}&\boldsymbol {A} _ {1}&&&\\\boldsymbol {A} _ {2}&&\boldsymbol {A} _ {2}&&\\\vdots&&&\ddots&\\\boldsymbol {A} _ {m}&&&&\boldsymbol {A} _ {m}\end{array}\right)\rightarrow
$$

$$
\left( \begin{array}{c c c c c} I _ {n} & A _ {1} & A _ {2} & \dots & A _ {m} \\ A _ {1} & A _ {1} & & & \\ A _ {2} & & A _ {2} & & \\ \vdots & & & \ddots & \\ A _ {m} & & & & A _ {m} \end{array} \right) \to \left( \begin{array}{c c c c c} I _ {n} & O & O & \dots & O \\ O & A _ {1} - A _ {1} ^ {2} & - A _ {1} A _ {2} & \dots & - A _ {1} A _ {m} \\ O & - A _ {2} A _ {1} & A _ {2} - A _ {2} ^ {2} & \dots & - A _ {2} A _ {m} \\ \vdots & \vdots & \vdots & & \vdots \\ O & - A _ {m} A _ {1} & - A _ {m} A _ {2} & \dots & A _ {m} - A _ {m} ^ {2} \end{array} \right).
$$

由 $n = \mathrm{r}(I_n - A) + \mathrm{r}(A_1) + \mathrm{r}(A_2) + \cdots + \mathrm{r}(A_m)$ 可得最后一个矩阵的右下角部分必为零矩阵，从而 $A_i^2 = A_i, A_i A_j = O (i \neq j)$ . □

注 在例 4.60 中, 若取 $\varphi = I_{V}$ 为 V 上的恒等变换, 则此时线性变换 $\varphi_{i}$ 满足 $\varphi_{1} + \varphi_{2} + \cdots + \varphi_{m} = I_{n}$ . 例 4.60 的证明过程告诉我们, 如果下列条件之一成立:

(1) $\dim V = \dim \operatorname{Im} \varphi_{1} + \dim \operatorname{Im} \varphi_{2} + \cdots + \dim \operatorname{Im} \varphi_{m};$ 

(2) $\varphi_{i}^{2} = \varphi_{i}, \varphi_{i}\varphi_{j} = 0 (i \neq j),$ 

则 $V = \operatorname{Im} \varphi_{1} \oplus \operatorname{Im} \varphi_{2} \oplus \cdots \oplus \operatorname{Im} \varphi_{m}$ ，并且 $\varphi_{i}$ 就是 V 到 $\operatorname{Im} \varphi_{i}$ 上的投影变换。例 4.59 也有类似的几何意义。另外，例 4.57 和例 4.58 也可用幂等变换等价于投影变换来给出直观的几何证明，请读者自行思考。

## § 4.8 基础训练

### 4.8.1 训练题

#### 一、单选题

1. 设 $\varphi$ 是三维行向量空间上的变换, 下列 $\varphi$ 不是线性变换的是().

(A) $\varphi(a_{1}, a_{2}, a_{3}) = (2a_{1} - a_{2} + a_{3}, a_{2} + 5a_{3}, a_{1} - a_{3})$ 

(B) $\varphi(a_{1},a_{2},a_{3})=(a_{1}^{2},a_{2}^{2},a_{3}^{2})$ 

(C) $\varphi(a_{1},a_{2},a_{3})=(0,a_{1},0)$ 

(D) $\varphi(a_{1},a_{2},a_{3})=(3a_{3},3a_{2},3a_{1})$ 

2. 设 $\varphi$ 是 n 维向量空间 V 上的线性变换, 适合下列条件的 $\varphi$ 不是同构的是().

(A) $\varphi$ 是单映射

(B) $\dim \operatorname{Im} \varphi = n$ 

(C) $\varphi$ 是一一对应

(D) $\varphi$ 适合条件 $\varphi^{n}=0$ 

3. 设 $\mathbb{F}$ 上三维列向量空间 $V$ 上的线性变换 $\varphi$ 在基 $\{e_1, e_2, e_3\}$ 下的表示矩阵是

$$
\left( \begin{array}{c c c} 1 & - 1 & 2 \\ 2 & 0 & 1 \\ 1 & 2 & - 1 \end{array} \right),
$$

则 $\varphi$ 在基 $\{e_{3}, e_{2}, e_{1}\}$ 下的表示矩阵是（）.

(A) $\begin{pmatrix}1&-1&2\\2&0&1\\1&2&-1\end{pmatrix}$ 

(B) $\begin{pmatrix}1&2&1\\-1&0&2\\2&1&-1\end{pmatrix}$ 

$$
\text {(C)} \left( \begin{array}{c c c} - 1 & 2 & 1 \\ 1 & 0 & 2 \\ 2 & - 1 & 1 \end{array} \right)
$$

$$
\text { (D) } \left( \begin{array}{c c c} 2 & - 1 & 1 \\ 1 & 0 & 2 \\ - 1 & 2 & 1 \end{array} \right)
$$

4. 设 $V$ 是 $n$ 维向量空间, $\varphi$ 和 $\psi$ 是 $V$ 上的线性变换, 则它们的像空间维数相同的充要条件是 ( ).

(A) $\varphi$ 和 $\psi$ 都是可逆变换

(B) $\varphi$ 和 $\psi$ 的核空间相同

(C) $\varphi$ 和 $\psi$ 的像空间相同

(D) $\varphi$ 和 $\psi$ 在任一组基下的表示矩阵的秩相同

5. 设 V 是 n 维向量空间, 则 V 上线性变换全体组成的向量空间的维数为 ( ).

(A) n 

(B) $\frac{1}{2}n(n+1)$ 

(C) $n^2$ 

(D) 无穷大

6. 设 n 维向量空间 V 有一组基, 使得这组基的每个基向量生成的子空间都是 V 上线性变换 $\varphi$ 的不变子空间, 则 $\varphi$ 在这组基下的表示矩阵 ( ).

(A) 必是可逆矩阵

(B) 必是上三角矩阵但不一定是对角矩阵

(C) 必是下三角矩阵但不一定是对角矩阵

(D) 必是对角矩阵

7. 设 $\varphi, \psi$ 是 n 维向量空间 V 上的线性变换, 它们适合条件 ( ) 时, 必有 $\varphi = \psi$ .

(A) 它们的像空间和核空间分别相同

(B) 对 V 中某 n 个线性无关的向量 $\alpha_{1},\cdots,\alpha_{n}$ ，均有 $\varphi(\alpha_{i})=\psi(\alpha_{i})(1\leq i\leq n)$ 

(C) $\varphi, \psi$ 都是可逆变换

(D) 它们的秩相同

8. 设 $\varphi$ 是 $n (n \geq 2)$ 维向量空间 $V$ 上的非零线性变换, 已知 $\varphi$ 不是可逆变换. 下面条件能保证 $\varphi$ 的核空间与像空间之交为零的是 ( ).

(A) $\varphi$ 在 V 的某组基下的表示矩阵 A 适合 $A^{n}=O$ 

(B) $\varphi$ 在 V 的某组基下的表示矩阵 A 适合 $A^{2}=A$ 

(C) $\varphi$ 的核空间维数与它的像空间维数相等

(D) $\varphi$ 的核空间维数与它的像空间维数之和等于 n

9. 下列条件不能保证 n 维向量空间 V 上的非零线性变换 $\varphi$ 为可逆变换的是（）.

(A) $\varphi$ 在 V 的某组基下的表示矩阵的行列式不为零

(B) $\varphi$ 在 V 的某组基下的表示矩阵是一个对称矩阵

(C) $\varphi$ 将 V 的 n 个线性无关的向量变成 n 个线性无关的向量

(D) $\varphi$ 没有非平凡不变子空间

10. 设 $V$ 是二维实列向量空间, 用下列矩阵定义的 $V$ 上的线性变换中没有非平凡不变子空间的是 ( ).

(A) $\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ 

(B) $\begin{pmatrix}1&1\\1&1\end{pmatrix}$ 

(C) $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ 

(D) $\begin{pmatrix}2&0\\0&3\end{pmatrix}$ 

#### 二、填空题

1. 设 V 是数域 F 上的一维空间, 写出 V 上所有的线性变换 ( ).

2. 设 $F^{4}$ 上的线性变换 $\varphi$ 在基 $\{e_{1}, e_{2}, e_{3}, e_{4}\}$ 下的表示矩阵为

$$
\left( \begin{array}{c c c c} 1 & 2 & 0 & 1 \\ 3 & 0 & - 1 & 2 \\ 2 & 5 & 3 & 1 \\ 1 & 2 & 1 & 3 \end{array} \right),
$$

求在基 $\{e_1, e_1 + e_2, e_1 + e_2 + e_3, e_1 + e_2 + e_3 + e_4\}$ 下它的表示矩阵.

3. 设 V 是次数小于 n 的实系数多项式全体组成的向量空间, D 是 V 上的求导变换, 写出在基 $1, x, x^{2}, \cdots, x^{n-1}$ 下线性变换 D 的表示矩阵.

4. 设线性空间 $V$ 上的线性变换 $\varphi, \psi$ 在 $V$ 的某组基下的表示矩阵分别为 $A, B$ , 则线性变换 $\varphi \psi + 2 \varphi^2$ 在同一组基下的表示矩阵为 ( ).

5. 设有线性空间 $V$ 上的线性变换 $\varphi, \psi$ , 已知 $\varphi$ 是可逆变换, 又 $\varphi$ 和 $\psi$ 在第一组基下的表示矩阵分别为 $A, B, V$ 的第一组基到第二组基的过渡矩阵为 $P$ , 则线性变换 $\psi \varphi^{-2} + 2 \varphi + I_V$ 在第二组基下的表示矩阵为 ( ).

6. 举例说明虽然对 $V$ 上的线性变换 $\varphi$ , 总有 $\dim \operatorname{Im} \varphi + \dim \operatorname{Ker} \varphi = \dim V$ , 但未必有 $V = \operatorname{Im} \varphi \oplus \operatorname{Ker} \varphi$ .

7. 是否存在 V 上的线性变换, 它将一组线性相关的向量变成一组线性无关的向量? ()

8. 十维向量空间 $V$ 上的线性变换 $\varphi$ 在一组基下的表示矩阵为 $\mathbf{A}$ , 已知齐次线性方程组 $\mathbf{A}\mathbf{x} = \mathbf{0}$ 的解空间维数为 3, 则 $\dim \operatorname{Im} \varphi = (\quad)$ .

9. 设 $e_{1}, e_{2}, \cdots, e_{n}$ 和 $f_{1}, f_{2}, \cdots, f_{n}$ 是线性空间 V 的两组基，从第一组基到第二组基的过渡矩阵为 P。若 $\varphi$ 是 V 上的线性变换，且恰有 $\varphi(e_{i}) = f_{i} (1 \leq i \leq n)$ ，问 $\varphi$ 在第二组基下的表示矩阵是什么？（）

10. 设 V 是由数域 F 上的二阶矩阵全体组成的向量空间, 定义 V 上的线性变换 $\varphi$ 如下:

$$
\varphi (\boldsymbol {A}) = \left( \begin{array}{c c} 1 & 1 \\ 1 & 1 \end{array} \right) \boldsymbol {A} \left( \begin{array}{c c} 2 & 0 \\ 0 & 1 \end{array} \right),
$$

则 $\varphi$ 的秩和零度分别是（）.

#### 三、解答题

1. 设 V 和 U 分别是数域 F 上的 n 维和 m 维向量空间, $e_{1}, e_{2}, \cdots, e_{n}$ 和 $f_{1}, f_{2}, \cdots, f_{m}$ 分别是 V 和 U 的基. 定义 V 到 U 的线性映射 $\varphi_{ij} (1 \leq i \leq m, 1 \leq j \leq n)$ :

$$
\varphi_ {i j} (e _ {j}) = f _ {i}, \quad \varphi_ {i j} (e _ {k}) = 0 (k \neq j).
$$

求证: $\varphi_{ij}$ 组成向量空间 $\mathcal{L}(V,U)$ 的一组基. 若令 $\sigma(\varphi_{ij}) = E_{ij}$ , 这里 $E_{ij}$ 是第 $(i,j)$ 元素为 1, 其余元素都为 0 的 $m \times n$ 基础矩阵, 则 $\sigma$ 定义了从 $\mathcal{L}(V,U)$ 到 $\mathbb{F}$ 上 $m \times n$ 矩阵全体组成的向量空间 $M_{m \times n}(\mathbb{F})$ 的线性同构.

2. 设 V 是由几乎处处为零的无穷实数数列 (即 $(a_{0}, a_{1}, a_{2}, \cdots, a_{n}, \cdots)$ ，其中只有有限多个 $a_{i}$ 不为零) 组成的实向量空间， $R[x]$ 是由所有实系数多项式组成的实向量空间。定义 $\varphi$ 如下：

$$
\varphi (a _ {0}, a _ {1}, a _ {2}, \dots , a _ {n}, \dots) = a _ {0} + a _ {1} x + a _ {2} x ^ {2} + \dots + a _ {n} x ^ {n},
$$

其中 $a_{n} \neq 0$ ，而 $a_{s} = 0 (s > n)$ . 求证: $\varphi$ 是线性同构.

3. 设 $V$ 是实系数多项式全体组成的向量空间, $\varphi$ 是求导变换. 定义 $V$ 中的变换 $\psi$ 如下: $\psi(f(x)) = xf(x)$ . 求证: $\psi$ 是 $V$ 上的线性变换且对任意的正整数 $n$ , 有 $\varphi \psi^n - \psi^n \varphi = n \psi^{n-1}$ .

4. 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换, $U_{1}, U_{2}$ 是 $V$ 的子空间且 $V = U_{1} \oplus U_{2}$ . 若 $\varphi(U_{1}) \subseteq U_{2}, \varphi(U_{2}) \subseteq U_{1}$ , 求证: $\mathrm{r}(\varphi) = \dim \varphi(U_{1}) + \dim \varphi(U_{2})$ .

5. 设 V 是数域 F 上的向量空间, $\varphi$ 是 V 上的线性变换, 若 $\varphi$ 在基 $e_{1}, e_{2}, \cdots, e_{n}$ 下的表示矩阵为

$$
\left( \begin{array}{c c c c c} 0 & 0 & \dots & 0 & 0 \\ 1 & 0 & \dots & 0 & 0 \\ 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{array} \right),
$$

求证:

(1) V 中包含 $e_{1}$ 的 $\varphi-$ 不变子空间只有 V 自身;

(2) V 的任一非零 $\varphi$ -不变子空间必包含 $e_{n}$ ;

(3) V 不能分解为两个非平凡 $\varphi-$ 不变子空间的直和.

6. 设 A, B 是 n 阶矩阵且 A 可逆, 求证: AB 和 BA 相似.

7. 设 $V$ 是 $n$ 维向量空间, $\varphi$ 及 $\psi$ 是其上的线性变换, 求证:

$$
\dim \operatorname{Ker} \varphi \psi \leq \dim \operatorname{Ker} \varphi + \dim \operatorname{Ker} \psi .
$$

8. 设 $\mathbb{F}^n$ 是数域 $\mathbb{F}$ 上 $n$ 维列向量空间, $\pmb{A}$ 是 $m \times n$ 矩阵, $\pmb{B}$ 是 $l \times n$ 矩阵. 若 $W$ 是齐次线性方程组 $B\pmb{x} = \pmb{0}$ 的解空间 (W 看成是 $\mathbb{F}^n$ 的子空间). 定义 $\varphi$ 为 $\mathbb{F}^n$ 到 $\mathbb{F}^m$ 的线性映射: $\varphi(\alpha) = A\alpha$ , 证明:

$$
\dim \varphi (W) = \mathrm{r} \binom{\boldsymbol {A}}{\boldsymbol {B}} - \mathrm{r} (\boldsymbol {B}).
$$

9. 设 $\varphi$ 是向量空间 $V$ 上的线性变换且 $\varphi^2 = I$ , 但 $\varphi$ 本身不是恒等映射 $I$ . 令 $U = \{v \in V | \varphi(v) = v\}$ , $W = \{v \in V | \varphi(v) = -v\}$ . 求证: $U, W$ 都是 $V$ 的子空间且 $V = U \oplus W$ .

10. 设 $\varphi_{1},\cdots,\varphi_{k}$ 是 n 维线性空间 V 上的线性变换, 满足条件 $\varphi_{i}^{2}=\varphi_{i},\varphi_{i}\varphi_{j}=0(i\neq j)$ .
求证:

$$
V = \operatorname{Im} \varphi_ {1} \oplus \dots \oplus \operatorname{Im} \varphi_ {k} \oplus \left(\bigcap_ {i = 1} ^ {k} \operatorname{Ker} \varphi_ {i}\right).
$$

11. 设 $\varphi_{1}, \varphi_{2}, \cdots, \varphi_{m}$ 是 n 维线性空间 V 上的线性变换，满足条件

$$
\varphi_ {1} + \varphi_ {2} + \dots + \varphi_ {m} = I, \mathrm{r} (\varphi_ {1}) + \mathrm{r} (\varphi_ {2}) + \dots + \mathrm{r} (\varphi_ {m}) = n,
$$

其中 I 是 V 上的恒等变换. 求证: $\varphi_{i}^{2} = \varphi_{i}, \varphi_{i}\varphi_{j} = 0 (i \neq j)$ .

12. 设 $V$ 是有理数域上的三维空间, $\varphi$ 是 $V$ 上的线性变换且 $\varphi(\alpha) = \beta$ , $\varphi(\beta) = \gamma$ , $\varphi(\gamma) = \alpha + \beta$ . 求证: 若 $\alpha \neq 0$ , 则 $\alpha, \beta, \gamma$ 是线性无关的向量.

13. 设 $A, B$ 分别为数域 $\mathbb{K}$ 上的 $m, n$ 阶方阵, 线性变换 $\varphi: M_{m \times n}(\mathbb{K}) \to M_{m \times n}(\mathbb{K})$ 定义为 $\varphi(X) = A X B$ , 试求 $\operatorname{Ker} \varphi$ 的维数及其一组基.

14. 设 V 为数域 K 上的 n 维线性空间, $S = \{v_{1}, v_{2}, \cdots, v_{m}\}$ 为 V 中的向量组, 定义集合 $R_{S} = \{(a_{1}, a_{2}, \cdots, a_{m}) \in \mathbb{K}^{m} | a_{1}v_{1} + a_{2}v_{2} + \cdots + a_{m}v_{m} = 0\}$ . 再取 V 中的向量组 $T = \{u_{1}, u_{2}, \cdots, u_{m}\}$ . 证明:

(1) $R_{S}$ 是 $K^{m}$ 的线性子空间;

(2) 存在线性变换 $\varphi$ ，使得 $\varphi(v_{i}) = u_{i} (1 \leq i \leq m)$ 的充要条件是 $R_{S} \subseteq R_{T}$ ;

(3) 存在线性自同构 $\varphi$ ，使得 $\varphi(v_{i}) = u_{i} (1 \leq i \leq m)$ 的充要条件是 $R_{S} = R_{T}$ .

15. 设 A, B 均为 $m \times n$ 矩阵，满足 $\mathrm{r}(A + B) = \mathrm{r}(A) + \mathrm{r}(B)$ ，证明：存在 m 阶非异阵 P, n 阶非异阵 Q，使得

$$
P A Q = \left( \begin{array}{c c c} I _ {r} & O & O \\ O & O & O \\ O & O & O \end{array} \right), P B Q = \left( \begin{array}{c c c} O & O & O \\ O & I _ {s} & O \\ O & O & O \end{array} \right).
$$

### 4.8.2 训练题答案

#### 一、单选题

1. 应选择 (B).

2. 应选择 (D).

3. 应选择 (C). 直接计算即可.

4. 应选择 (D). 像空间维数相等并不意味着像空间相同, 因此不能选 (C). 同理也不能选 (B).

5. 应选择 (C). $\mathcal{L}(V)$ 同构于 n 阶矩阵组成的向量空间, 因此维数等于 $n^{2}$ .

6. 应选择 (D). 直接计算可得.

7. 应选择 (B). $V$ 中任意 $n$ 个线性无关的向量都可组成一组基, 两个线性变换在基上作用相同则必相等.

8. 应选择 (B). 此时 $\varphi^2 = \varphi$ , 任取 $\alpha \in \operatorname{Ker} \varphi \cap \operatorname{Im} \varphi$ , 设 $\alpha = \varphi(\beta)$ , 则 $0 = \varphi(\alpha) = \varphi^2(\beta) = \varphi(\beta) = \alpha$ , 因此 $\operatorname{Ker} \varphi \cap \operatorname{Im} \varphi = 0$ .

9. 应选择 (B). 注意 (D), 因为 $\operatorname{Ker} \varphi$ 是 $\varphi$ 的不变子空间, 又 $\operatorname{Ker} \varphi \neq V$ , 故 $\operatorname{Ker} \varphi = 0$ .

10. 应选择 (C). 这是平面上的一个旋转, 角度为 $\frac{\pi}{2}$ , 因此无一维不变子空间.

#### 二、填空题

1. $\varphi(\alpha)=k\alpha,k\in\mathbb{F}.$ 

2. $\begin{pmatrix} -2 & 0 & 1 & 0 \\ 1 & -4 & -8 & -7 \\ 1 & 4 & 6 & 4 \\ 1 & 3 & 4 & 7 \end{pmatrix}$ . 

3. D 的表示矩阵为 $\begin{pmatrix}0&1&0&\cdots&0\\0&0&2&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&n-1\\0&0&0&\cdots&0\end{pmatrix}.$ 

4. $AB + 2A^2$ 5. $P^{-1}BA^{-2}P + 2P^{-1}AP + I_n$ 

5. 例子: 设 $V$ 是由次数小于 2 的实系数多项式全体组成的线性空间, $\pmb{D}$ 是求导变换, 则 $\operatorname{Ker} D = \operatorname{Im} D$ , 因此 $\operatorname{Ker} D \cap \operatorname{Im} D \neq 0$ .

6. 不存在.

7. dim Im φ = 7. 

8. $\varphi$ 在第一组基下的表示矩阵为 $P$ , 故在第二组基下的表示矩阵为 $P^{-1}PP = P$ .

9. 选择 $V$ 的一组基 $\pmb{E}_{11}, \pmb{E}_{12}, \pmb{E}_{21}, \pmb{E}_{22}$ ( $\pmb{E}_{ij}$ 为第 $(i,j)$ 元素为 1, 其余元素为 0 的基础矩阵). 计算出 $\varphi$ 在这组基下的表示矩阵为 $\left( \begin{array}{cccc} 2 & 0 & 2 & 0 \\ 0 & 1 & 0 & 1 \\ 2 & 0 & 2 & 0 \\ 0 & 1 & 0 & 1 \end{array} \right)$ , 此矩阵的秩为 2, 因此 $\varphi$ 的秩等于 2, 零度也是 2.

#### 三、解答题

1. 设 $\sum_{i=1}^{m} \sum_{j=1}^{n} a_{ij} \varphi_{ij} = 0$ , 将它作用在 $e_j$ 上可得 $\sum_{i=1}^{m} a_{ij} f_i = 0$ . 由于 $\{f_j\}$ 线性无关, 故 $a_{ij} = 0$ , 因此 $\{\varphi_{ij}\}$ 线性无关. 而 $\mathcal{L}(V, U)$ 的维数恰好为 $mn$ , 故 $\{\varphi_{ij}\}$ 构成了 $\mathcal{L}(V, U)$ 的一组基. 因为 $\sigma$ 定义了从 $\mathcal{L}(V, U)$ 的基到 $M_{m \times n}(\mathbb{F})$ 的基的线性映射, 因此必是线性同构.

2. 先验证 $\varphi$ 是线性映射, 再证明这是一个一一对应.

3. 直接验证 $\psi$ 是线性变换以及所需的等式成立.

4. 显然 $\operatorname{Im} \varphi = \varphi(U_1) + \varphi(U_2)$ , 又 $\varphi(U_1) \cap \varphi(U_2) \subseteq U_2 \cap U_1 = 0$ , 因此 $\operatorname{Im} \varphi = \varphi(U_1) \oplus \varphi(U_2)$ , 取维数后即得结论.

5. 由条件可得 $\varphi(e_1) = e_2, \varphi(e_2) = e_3, \cdots, \varphi(e_{n-1}) = e_n, \varphi(e_n) = 0$ . 注意到 $\varphi^i(e_1) = e_{i+1} (1 \leq i \leq n-1)$ , 故包含 $e_1$ 的 $\varphi$ -不变子空间必包含所有的基向量 $e_i$ , 从而只能是 $V$ 自身, (1) 得证. 设 $W$ 是非零 $\varphi$ -不变子空间, 取 $\alpha = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n$ 为 $W$ 中的非零向量. 不妨设 $a_1 = \cdots = a_{k-1} = 0$ , 但 $a_k \neq 0$ , 则 $\varphi^{n-k}(\alpha) = a_k e_n \in W$ , 于是 $e_n \in W$ , (2) 得证. (3) 是 (2) 的直接推论.

6. $BA = A^{-1}(AB)A.$ 

7. 几何方法: 线性变换 $\psi$ 在 $\operatorname{Ker} \varphi \psi$ 上的限制诱导了线性映射 $\psi_1: \operatorname{Ker} \varphi \psi \to \operatorname{Ker} \varphi$ . 注意到 $\operatorname{Ker} \psi_1 = \operatorname{Ker} \varphi \psi \cap \operatorname{Ker} \psi = \operatorname{Ker} \psi, \operatorname{Im} \psi_1 \subseteq \operatorname{Ker} \varphi$ , 故由维数公式可得 $\dim \operatorname{Ker} \varphi \psi = \dim \operatorname{Im} \psi_1 + \dim \operatorname{Ker} \psi_1 \leq \dim \operatorname{Ker} \varphi + \dim \operatorname{Ker} \psi$ . 代数方法: 在 $V$ 中选取一组基, 设 $\varphi, \psi$ 在这组基下的表示矩阵为 $A, B$ , 问题转化为证明 $n - r(A B) \leq (n - r(A)) + (n - r(B))$ , 即 $r(A B) \geq r(A) + r(B) - n$ . 这是例3.66或例4.44的结论.

8. 将 $\varphi$ 限制在 $W$ 上, 由维数公式可得 $n - \mathrm{r}(B) = \dim W = \dim \varphi(W) + \dim \operatorname{Ker} \varphi|_W$ . 注意到 $\operatorname{Ker} \varphi|_W = \operatorname{Ker} \varphi \cap W$ 是线性方程组 $Ax = 0$ 与 $Bx = 0$ 的公共解空间, 即为线性方程组 $\left( \begin{array}{l} A \\ B \end{array} \right)x = 0$ 的解空间, 故 $\dim \operatorname{Ker} \varphi|_W = n - \mathrm{r}\left( \begin{array}{l} A \\ B \end{array} \right)$ . 综合上面的式子, 即得结论.

9. 容易验证 $U$ 及 $W$ 是子空间, 现证明 $V$ 是这两个子空间的直和. 首先 $W \cap U = 0$ 是显然的, 因此只需证明 $V = U + W$ 即可. 任取 $V$ 中向量 $\pmb{v}$ , 令 $\pmb{u} = \frac{1}{2} (\pmb{v} + \varphi(\pmb{v}))$ , $\pmb{w} = \frac{1}{2} (\pmb{v} - \varphi(\pmb{v}))$ , 则由 $\varphi^2 = I$ 容易验证: $\varphi(\pmb{u}) = \pmb{u}$ , 即 $\pmb{u} \in U$ ; $\varphi(\pmb{w}) = -\pmb{w}$ , 即 $\pmb{w} \in W$ . 注意到 $\pmb{v} = \pmb{u} + \pmb{w}$ , 故

$V = U + W$ 成立.

10. 本题是例 4.59 的推广. 令 $\varphi_{k+1} = I - (\varphi_1 + \cdots + \varphi_k)$ , 容易验证 $\varphi_i \varphi_{k+1} = \varphi_{k+1} \varphi_i = 0 (1 \leq i \leq k)$ , $\varphi_{k+1}^2 = \varphi_{k+1}$ , $\operatorname{Ker} \varphi_1 \cap \cdots \cap \operatorname{Ker} \varphi_k \cap \operatorname{Ker} \varphi_{k+1} = 0$ 以及 $\operatorname{Im} \varphi_{k+1} = \bigcap_{i=1}^{k} \operatorname{Ker} \varphi_i$ , 于是由例 4.59 即得结论.

11. 本题是例 4.60 的特殊情况.

12. 先证明 $\alpha, \beta$ 线性无关. 若不然, 因为 $\alpha \neq 0$ , 故可设 $\beta = k\alpha$ , 即 $\varphi(\alpha) = k\alpha$ , 从而 $\gamma = \varphi(\beta) = \varphi(k\alpha) = k^2\alpha$ , $\varphi(\gamma) = \varphi(k^2\alpha) = k^3\alpha$ . 又 $\varphi(\gamma) = \alpha + \beta = \alpha + k\alpha$ , 于是 $k^3\alpha = \alpha + k\alpha$ . 因为 $\alpha \neq 0$ , 所以 $k^3 - k - 1 = 0$ , 但这个方程没有有理数解, 从而 $k$ 不存在, 这与假设矛盾. 因此 $\alpha, \beta$ 线性无关. 再证明 $\alpha, \beta, \gamma$ 线性无关. 若不然, 因为 $\alpha, \beta$ 线性无关, 故可设 $\gamma = k_1\alpha + k_2\beta$ , 则 $\varphi(\gamma) = \varphi(k_1\alpha + k_2\beta) = k_1\varphi(\alpha) + k_2\varphi(\beta) = k_1\beta + k_2\gamma = k_1k_2\alpha + (k_1 + k_2^2)\beta$ . 再由 $\varphi(\gamma) = \alpha + \beta$ 以及 $\alpha, \beta$ 线性无关得到 $\left\{ \begin{array}{l} k_1k_2 = 1, \\ k_1 + k_2^2 = 1. \end{array} \right.$ 容易证明这个方程组没有有理数解, 这与假设矛盾. 因此 $\alpha, \beta, \gamma$ 线性无关.

13. 设 $P_{1}, Q_{1}, P_{2}, Q_{2}$ 为非异阵, 使得 $P_{1}AQ_{1} = \begin{pmatrix} I_{r} & O \\ O & O \end{pmatrix}$ , $P_{2}BQ_{2} = \begin{pmatrix} I_{s} & O \\ O & O \end{pmatrix}$ , 其中 $r = r(A)$ , $s = r(B)$ . 任取 $X \in \operatorname{Ker} \varphi$ , 设 $Q_{1}^{-1}XP_{2}^{-1} = \begin{pmatrix} X_{11} & X_{12} \\ X_{21} & X_{22} \end{pmatrix}$ 为对应的分块 (其中 $X_{11}$ 是 $r \times s$ 矩阵), 则由 $\varphi(X) = AXB = O$ 可解出 $X = Q_{1} \begin{pmatrix} O & X_{12} \\ X_{21} & X_{22} \end{pmatrix} P_{2}$ , 其中 $X_{12}, X_{21}, X_{22}$ 可以任意取. 因此, $\dim \operatorname{Ker} \varphi = mn - rs$ , 并且 $\operatorname{Ker} \varphi$ 的一组基可取为 $\{Q_{1}E_{ij}P_{2} \mid 1 \leq i \leq m, 1 \leq j \leq n, (i,j) \notin [1,r] \times [1,s]\}$ , 其中 $E_{ij}$ 为 $m \times n$ 基础矩阵.

14. 几何方法: (1) 容易验证. (2) 必要性显然, 下证充分性. 不妨设 $\{v_1, \cdots, v_r\}$ 是向量组 $S$ 的极大无关组, 并将其扩张为 $V$ 的一组基 $\{v_1, \cdots, v_r, e_{r+1}, \cdots, e_n\}$ . 定义 $\varphi$ 为 $V$ 上的线性变换, 它在基上的作用为: $\varphi(v_i) = u_i (1 \leq i \leq r)$ , $\varphi(e_j) = 0 (r + 1 \leq j \leq n)$ . 对任一 $v_j (r + 1 \leq j \leq m)$ , 设 $v_j = \lambda_1 v_1 + \cdots + \lambda_r v_r$ , 则 $(\lambda_1, \cdots, \lambda_r, 0, \cdots, 0, -1, 0, \cdots, 0) \in R_S$ . 由 $R_S \subseteq R_T$ 可知, $u_j = \lambda_1 u_1 + \cdots + \lambda_r u_r$ . 因此 $\varphi(v_j) = \varphi (\sum_{i=1}^{r} \lambda_i v_i) = \sum_{i=1}^{r} \lambda_i \varphi(v_i) = \sum_{i=1}^{r} \lambda_i u_i = u_j (r + 1 \leq j \leq m)$ . (3) 必要性显然, 下证充分性. 不妨设 $\{v_1, \cdots, v_r\}$ 是向量组 $S$ 的极大无关组, 并将其扩张为 $V$ 的一组基 $\{v_1, \cdots, v_r, e_{r+1}, \cdots, e_n\}$ . 利用与 (2) 相同的证明可得: 若 $v_j = \lambda_1 v_1 + \cdots + \lambda_r v_r$ , 则 $u_j = \lambda_1 u_1 + \cdots + \lambda_r u_r (r + 1 \leq j \leq m)$ . 设 $\mu_1 u_1 + \cdots + \mu_r u_r = 0$ , 则 $(\mu_1, \cdots, \mu_r, 0, \cdots, 0) \in R_T$ . 由 $R_S = R_T$ 可知, $\mu_1 v_1 + \cdots + \mu_r v_r = 0$ . 又 $\{v_1, \cdots, v_r\}$ 线性无关, 故 $\mu_1 = \cdots = \mu_r = 0$ . 因此 $\{u_1, \cdots, u_r\}$ 是向量组 $T$ 的极大无关组, 将其扩张为 $V$ 的一组基 $\{u_1, \cdots, u_r, f_{r+1}, \cdots, f_n\}$ . 定义 $\varphi$ 为 $V$ 上的线性变换, 它在基上的作用为: $\varphi(v_i) = u_i (1 \leq i \leq r)$ , $\varphi(e_j) = f_j (r + 1 \leq j \leq n)$ . 因为 $\varphi$ 把基映到基, 故 $\varphi$ 为自同构. 利用与 (2) 相同的证明可得 $\varphi(v_j) = u_j (r + 1 \leq j \leq m)$ . 代数方法: 取定 $V$ 的一组基 $e_1, e_2, \cdots, e_n$ , 则有 $V$ 到 $n$ 维列向量空间 $\mathbb{K}^n$ 的线性同构 $\eta: V \to \mathbb{K}^n$ , 它将 $v \in V$ 映到 $v$ 关于基 $e_1, e_2, \cdots, e_n$ 的坐标向量. 设 $\alpha_i = \eta(v_i)$ , $\beta_i = \eta(u_i) (1 \leq i \leq m)$ , 则 $\alpha_i, \beta_i$ 都是 $n$ 维列向量. 按列分块构造 $n \times m$ 矩阵 $A = (\alpha_1, \alpha_2, \cdots, \alpha_m)$ , $B = (\beta_1, \beta_2, \cdots, \beta_m)$ . 在线性同构的意义下, $R_S$ 等同于线性方程组 $Ax = 0$ 的解空间 $V_A$ , $R_T$ 等同于线性方程组 $Bx = 0$ 的解空间 $V_B$ . 因此在线性同构的

意义下，本题等价于证明如下结论：

(1) 线性方程组 Ax = 0 的解空间 $V_{A}$ 是 $K^{m}$ 的子空间;

(2) 存在 n 阶方阵 P, 使得 PA = B 的充要条件是 $V_{A} \subseteq V_{B}$ ;

(3) 存在 n 阶非异阵 P, 使得 PA = B 的充要条件是 $V_{A} = V_{B}$ .

(1) 显然成立. (2) 是例 4.6 的代数版本. (3) 是例 4.27.

15. 代数方法: 设 $\mathrm{r}(\boldsymbol{A}) = r, \mathrm{r}(\boldsymbol{B}) = s$ , 则 $\mathrm{r}(\boldsymbol{A} + \boldsymbol{B}) = r + s$ , 且存在 $m$ 阶非异阵 $S, n$ 阶非异阵 $T$ , 使得

$$
\boldsymbol {S A T} = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right), \quad \boldsymbol {S B T} = \left( \begin{array}{c c} B _ {1 1} & B _ {1 2} \\ B _ {2 1} & B _ {2 2} \end{array} \right), \quad \boldsymbol {S} (\boldsymbol {A} + \boldsymbol {B}) \boldsymbol {T} = \left( \begin{array}{c c} I _ {r} + B _ {1 1} & B _ {1 2} \\ B _ {2 1} & B _ {2 2} \end{array} \right).
$$

因为 $\mathrm{r}(\mathbf{A} + \mathbf{B}) = r + s$ , 故删去 $S(A + B)T$ 的前 $r$ 行, 可得后 $m - r$ 行的秩必大于等于 $s$ , 即 $\mathrm{r}(B_{21}, B_{22}) \geq s$ . 另一方面, 我们还有 $\mathrm{r}(B_{21}, B_{22}) \leq \mathrm{r}(B) = s$ , 故 $\mathrm{r}(B_{21}, B_{22}) = \mathrm{r}(B) = s$ , 从而 $(B_{21}, B_{22})$ 的行向量的极大无关组也是 SBT 的行向量组的极大无关组. 因此利用 SBT 的后 $m - r$ 行的初等行变换可以消去 SBT 的前 $r$ 行. 同理可证利用 SBT 的后 $n - r$ 列的初等列变换可以消去 SBT 的前 $r$ 列, 即存在 $m$ 阶非异阵 $U, n$ 阶非异阵 $V$ , 使得

$$
U S A T V = \left( \begin{array}{c c} I _ {r} & O \\ O & O \end{array} \right), U S B T V = \left( \begin{array}{c c} O & O \\ O & B _ {2 2} \end{array} \right).
$$

此时存在 m-r 阶非异阵 C, n-r 阶非异阵 D, 使得 $CB_{22}D = \begin{pmatrix} I_s & O \\ O & O \end{pmatrix}$ . 令 P = $\begin{pmatrix} I_r & O \\ O & C \end{pmatrix} US$ , $Q = TV \begin{pmatrix} I_r & O \\ O & D \end{pmatrix}$ , 则 P 为 m 阶非异阵, Q 为 n 阶非异阵, 且满足结论. 几何方法: 将问题转换成几何的语言: 设 $V = K^n$ 为 n 维列向量空间, $U = K^m$ 为 m 维列向量空间, $\varphi_A, \varphi_B: V \to U$ 分别是矩阵 A, B 左乘诱导的线性映射, 满足 $\mathrm{r}(\varphi_A + \varphi_B) = \mathrm{r}(\varphi_A) + \mathrm{r}(\varphi_B)$ , 证明: 存在 V 的一组基, U 的一组基, 使得 $\varphi_A, \varphi_B$ 在这两组基下的表示矩阵分别是题中的两个矩阵. 设 $\mathrm{r}(A) = r$ , $\mathrm{r}(B) = s$ , 则 $\mathrm{r}(A + B) = r + s$ . 注意到 $\mathrm{r}(A + B) \leq \mathrm{r}\begin{pmatrix} A \\ B \end{pmatrix} \leq \mathrm{r}(A) + \mathrm{r}(B)$ , 因此 $\mathrm{r}\begin{pmatrix} A \\ B \end{pmatrix} = r + s$ , 从而 $\dim(\operatorname{Ker} \varphi_A \cap \operatorname{Ker} \varphi_B) = n - (r + s)$ . 由交和空间的维数公式可得 $\dim(\operatorname{Ker} \varphi_A + \operatorname{Ker} \varphi_B) = (n - r) + (n - s) - (n - r - s) = n$ , 故有 $V = \operatorname{Ker} \varphi_A + \operatorname{Ker} \varphi_B$ . 另一方面, 注意到 $\mathrm{r}(A + B) = \dim\operatorname{Im}(\varphi_A + \varphi_B) \leq \dim(\operatorname{Im} \varphi_A + \operatorname{Im} \varphi_B) \leq \dim\operatorname{Im} \varphi_A + \dim\operatorname{Im} \varphi_B = \mathrm{r}(A) + \mathrm{r}(B)$ , 因此 $\operatorname{Im}(\varphi_A + \varphi_B) = \operatorname{Im} \varphi_A + \operatorname{Im} \varphi_B = \operatorname{Im} \varphi_A \oplus \operatorname{Im} \varphi_B$ . 取 $\operatorname{Ker} \varphi_A \cap \operatorname{Ker} \varphi_B$ 的一组基 $\{e_{r+s+1}, \cdots, e_n\}$ , 将其扩张为 $\operatorname{Ker} \varphi_A$ 的一组基 $\{e_{r+1}, \cdots, e_n\}$ , 再将其扩张为 $\operatorname{Ker} \varphi_B$ 的一组基 $\{e_1, \cdots, e_n\}$ 恰好是 $V = \operatorname{Ker} \varphi_A + \operatorname{Ker} \varphi_B$ 的一组基. 又由例 4.23 的证明可知, $Ae_1, \cdots, Ae_r$ 是 $\operatorname{Im} \varphi_A$ 的一组基, $Be_{r+1}, \cdots, Be_{r+s}$ 是 $\operatorname{Im} \varphi_B$ 的一组基. 注意到 $Ae_1, \cdots, Ae_r, Be_{r+1}, \cdots, Be_{r+s}$ 线性无关, 故可扩张为 U 的一组基 $Ae_1, \cdots, Ae_r, Be_{r+1}, \cdots, Be_{r+s}$ 线性无关, 故可扩张为 U 的一组基 $Ae_1, \cdots, Ae_r, Be_{r+1}, \cdots, Be_{r+s}, f_{r+s+1}, \cdots, f_m$ . 最后容易验证 $\varphi_A, \varphi_B$ 在 V 的一组基 $e_1, \cdots, e_n$ 和 U 的一组基 $Ae_1, \cdots, Ae_r, Be_{r+1}, \cdots, Be_{r+s}, f_{r+s+1}, \cdots, f_m$ 下的表示矩阵即为所要求的矩阵.