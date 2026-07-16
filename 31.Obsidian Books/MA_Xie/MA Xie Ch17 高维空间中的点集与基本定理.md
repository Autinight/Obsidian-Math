
# 第十七章 高维空间中的点集与基本定理

本章的内容是 $\mathbf{R}$ 中的点集与实数系基本定理在 $\mathbf{R}^n$ 中的推广，这是研究多元函数的基础。在 §17.1 依照位置关系与密切程度进行点和集合的分类，并讨论其基本性质。§17.2 是 $\mathbf{R}^n$ 中的基本定理。最后一节是学习要点和两组参考题。

## §17.1 点与点集的定义及其基本性质

### 17.1.1 点的分类及其性质

1. 内点、外点、边界点 先回忆一下 $R^{n}$ 中的距离与邻域的定义. 我们知道点 $\boldsymbol{x} = (x_{1}, x_{2}, \cdots, x_{n}) \in \mathbf{R}^{n}$ 的 Euclid 范数（又称模） $|x|$ 定义为 $|x| = \left( \sum_{i=1}^{n} x_{i}^{2} \right)^{1/2}$ . 由此可引进 $R^{n}$ 中任意两点 x 与 y 的 Euclid 距离为

$$
d (\boldsymbol {x}, \boldsymbol {y}) = | \boldsymbol {x} - \boldsymbol {y} | = \left[ \sum_ {i = 1} ^ {n} (x _ {i} - y _ {i}) ^ {2} \right] ^ {\frac {1}{2}}.
$$

与距离有关的最重要的不等式是三角形不等式(参见上册第6页):

$$
| x - z | \leqslant | x - y | + | y - z |.
$$

和 R 中的邻域定义相仿, 可通过距离定义 $R^{n}$ 中的邻域. 设点 $a \in R^{n}, \delta > 0$ , 称

$$
O _ {\delta} (\boldsymbol {a}) = \left\{\boldsymbol {x} \in \mathbf {R} ^ {n} \mid | \boldsymbol {x} - \boldsymbol {a} | <   \delta \right\}
$$

是点 a 的 $\delta$ 邻域, 也称其为以点 a 为中心, 以 $\delta$ 为半径的 n 维开球.

在 $\mathbf{R}^n$ 中给定一个集合 $S$ , 按照点与集合 $S$ 的位置关系可将 $\mathbf{R}^n$ 中的点分为三类: $S$ 的内点、外点、边界点. 具体地说, 对于 $\mathbf{R}^n$ 中的某一点 $\pmb{x}$ , 若存在它的一个邻域 $O_{\delta}(\pmb{x}) \subset S$ , 则称 $\pmb{x}$ 为 $S$ 的内点; 若存在 $\pmb{x}$ 的一个邻域 $O_{\delta}(\pmb{x}) \cap S = \emptyset$ , 则称 $\pmb{x}$ 为 $S$ 的外点; 若在 $\pmb{x}$ 的任一邻域中既有属于 $S$ 的点, 又有不属于 $S$ 的点, 则称 $\pmb{x}$ 为 $S$ 的边界点.

S 的全体内点组成的集合称为 S 的内部, 记为 int S 或 $S^{\circ}$ .

S 的全体边界点组成的集合称为 S 的边界, 记为 $\partial S$ .

2. 聚点 上述分类是按照任一点 $x \in \mathbf{R}^n$ 的邻域内的点是否属于 $S$ 来进行的。如果按照去心邻域进行分类，则可将 $\mathbf{R}^n$ 中的点分为 $S$ 的聚点与非聚点两大类。确切地说，对于点 $x \in \mathbf{R}^n$ ，如果在 $x$ 的任一去心邻域中总有 $S$ 的点，则称 $x$ 为 $S$ 的聚点。 $S$ 的全体聚点组成的集合记为 $S^d$ ，称为 $S$ 的导集。显然内点一定是聚点，外点一定不是聚点。

如果点 $x \in S$ ，且存在 x 的一个邻域 $O_{\delta}(x) \cap S = \{x\}$ ，则称 x 为 S 的孤立点。孤立点一定不是聚点，而边界点有可能是聚点也有可能是孤立点。

聚点是一个重要概念, 它的下述两个等价定义是经常要用到的.

定义 (1) 设点 $x \in \mathbf{R}^n$ , 如果在它的任何邻域 $O_{\delta}(x)$ 内总会有 $S$ 中的无穷多个点, 则称 $x$ 是 $S$ 的一个聚点.

定义 (2) 设点 $x \in \mathbf{R}^n$ , 如果存在由相异点组成的一个点列 $\{x_n\} \subset S$ , $x_n \neq x$ ( $n = 1, 2, \cdots$ ), 使得 $x_n \to x$ , 则称 $x$ 为 $S$ 的一个聚点, 这里 $x_n \to x$ 的含义是 $d(x_n, x) \to 0$ .

例题 17.1.1 证明: 集合 S 的导集的聚点是 S 的聚点, 即 $(S^{d})^{d} \subset S^{d}$ .

证 设点 $\boldsymbol{x} \in (S^{d})^{d}$ ，则 $\exists S$ 的相异聚点 $\boldsymbol{x}_{n} (n = 1, 2, \cdots)$ ， $x_{n} \neq x$ ，且 $x_{n} \to x$ 。从而 $\forall \delta > 0, \exists N$ ，当 n > N 时， $\boldsymbol{x}_{n} \in O_{\delta}(\boldsymbol{x})$ 。设 $n_{0} > N$ ，由于 $x_{n_{0}}$ 为 S 的聚点，于是在 $O_{\delta - |x - x_{n_{0}}|}(x_{n_{0}})$ 中含有无穷多个 S 中异于 $x_{n_{0}}$ 的点。显然 $O_{\delta - |x - x_{n_{0}}|}(x_{n_{0}}) \subset O_{\delta}(\boldsymbol{x})$ ，所以 $O_{\delta}(\boldsymbol{x})$ 中有无穷多个异于 x 的 S 中的点，由等价定义 (1) 知 x 为 S 的聚点。

### 17.1.2 集合的分类及其性质

1. 开集、闭集 如果 $\operatorname{int} S = S$ ，则称 $S$ 为开集。开集有如下重要性质：

(1) 任意多个开集的并集是开集;

(2) 有限多个开集的交集是开集;

(3) 全空间 $R^{n}$ 和空集 $\varnothing$ 都是开集.

开集的余集定义为闭集. 又定义 $S$ 的闭包 $\overline{S}$ 为 $\overline{S} = S \cup S^d$ . 易证 $\overline{S}$ 为闭集, 且 $\overline{S} = S \cup \partial S$ . 关于闭集, 下列条件等价:

(1) S 是闭集;

(2) $S^{d}\subset S$ (即 $S=\overline{S}$ );

(3) $\partial S \subset S$ (即 $S = \overline{S}$ ).

例题 17.1.2 设 S 为 $R^{n}$ 中的一个集合，则 $\partial S$ 为闭集.

证1（按定义证）假设点 $x \in (\partial S)^c$ ，即 $\partial S$ 的余集，则 $x$ 只能是 $S$ 的内点或外点.

若点 $x \in \operatorname{int} S$ ，则 $\exists \delta > 0$ ，使得 $O_{\delta}(x) \subset S$ ，由内点定义知 $O_{\delta}(x) \subset \operatorname{int} S$ ，从而 $O_{\delta}(x) \subset (\partial S)^{c}$ ;

若 $\pmb{x}$ 是 $S$ 的外点，则 $\exists \delta > 0$ ，使得 $O_{\delta}(\pmb{x}) \cap S = \emptyset$ ，因此 $O_{\delta}(\pmb{x}) \subset S^{c}$ ，而 $O_{\delta}(\pmb{x})$ 本身是开集，这说明 $O_{\delta}(\pmb{x})$ 中的点都不是 $S$ 的边界点，即 $O_{\delta}(\pmb{x}) \subset (\partial S)^{c}$ .

由定义知 $(\partial S)^{c}$ 为开集, 即 $\partial S$ 为闭集.

证 2 (证 $(\partial S)^{d} \subset \partial S$ ) 设点 $x \in (\partial S)^{d}$ ，由聚点的等价定义 (2) 知存在相异的点列 $\{x_{n}\} \subset \partial S, x_{n} \neq x, n = 1, 2, \cdots$ ，使得 $x_{n} \to x$ ，于是 $\forall \delta > 0, \exists N$ ，当 n > N 时点 $x_{n} \in O_{\delta}(x)$ ，取 $n_{0} > N$ ，由于点 $x_{n_{0}} \in \partial S$ ，则由边界点的定义知 $O_{\delta - |x_{n_{0}} - x|}(x_{n_{0}}) \subset O_{\delta}(x)$ 中有 S 中的点，也有不在 S 中的点，所以 $x \in \partial S$ 。

证3（证 $\partial (\partial S)\subset \partial S$ ）设点 $x\in \partial (\partial S)$ ，则 $\forall \delta >0$ ，在 $O_{\delta /2}(\pmb {x})$ 中有 $\partial S$ 的点 $\pmb{y}$ 又由边界点定义，在 $O_{\delta /2}(\pmb {y})$ 中既有属于 $S$ 的点，也有不属于 $S$ 的点．由于 $O_{\delta /2}(\pmb {y})\subset O_{\delta}(\pmb {x})$ ，因此 $O_{\delta}(\pmb {x})$ 中既有属于 $S$ 的点，也有不属于 $S$ 的点，于是 $\pmb {x}\in \partial S.$ 

2. 紧集、凸集 设 S 是 $R^{n}$ 的一个集合, 如果在 S 的任何一个无限开覆盖 $\{O_{\alpha}\}_{\alpha \in I}$ 中总可以找出有限个开集 $O_{1}, O_{2}, \cdots, O_{k}$ , 同样可以覆盖 S, 即 $\bigcup_{i=1}^{k} O_{i} \supset S$ , 则称 S 是 $R^{n}$ 的一个紧集. 容易证明紧集一定是有界闭集, 而且我们将会看到, 在 $R^{n}$ 中紧集与有界闭集的定义是等价的 (紧性定理).

设 $E$ 是 $\mathbf{R}^n$ 的一个集合, 若 $\forall x_1, x_2 \in E$ , 有 $x = t x_1 + (1 - t) x_2 \in E (0 \leqslant t \leqslant 1)$ , 则称 $E$ 为凸集. 从几何上看, 以 $x_1, x_2$ 为端点的直线段位于 $E$ 内.

例题 17.1.3 紧集的闭子集是紧集.

证 设 E 是一个紧集, F 是 E 的闭子集. 设 $\{O_{\lambda}\}_{\lambda \in I}$ 是 F 的任一开覆盖, 由于 $F^{c} = R^{n} - F$ 是开集, 则 $\{O_{\lambda}\}_{\lambda \in I}$ 与 $F^{c}$ 一起形成紧集 E 的一个开覆盖. 由紧集的定义知在 $\{O_{\lambda}\}_{\lambda \in I}$ 与 $F^{c}$ 中存在有限个开集形成 E 的一个有限覆盖, 记这有限个开集为 $O_{1}, O_{2}, \cdots, O_{k}$ , 不妨设 $F^{c} = O_{k}$ . 由于 $F \subset E$ , 则

$$
\left(\bigcup_ {i = 1} ^ {k - 1} O _ {i}\right) \cup F ^ {c} \supset E \supset F.
$$

但 $F^{\mathrm{c}}\cap F = \emptyset$ ，所以

$$
\bigcup_ {i = 1} ^ {k - 1} O _ {i} \supset F,
$$

由紧集的定义知 F 为紧集.

3. 连通集、区域 设 $D$ 是 $\mathbf{R}^n$ 的一个集合, 如果当 $D$ 分解为两个不相交的非空子集的并集 $A \cup B$ 时, 有 $A^d \cap B \neq \emptyset$ 或者 $A \cap B^d \neq \emptyset$ , 则称 $D$ 为连通集. 当 $D$ 是开集时, 我们有: 开集 $D$ 是连通集的充分必要条件是 $D$ 不能分解为两个不相交的非空子开集的并 (第二组参考题1). 在 $\mathbf{R}$ 中, 连通集有特别直观的描述: $\mathbf{R}$ 中集合 $D$ 是连通集的充分必要条件是 $D$ 为区间 (第二组参考题2).

连通的开集称为区域或开区域. 开区域的闭包称为闭区域.

更为直观并易于判断的概念是道路连通集. 设 $D$ 是 $\mathbf{R}^n$ 的一个集合, 如果当 $D$ 内任何两点 $p, q$ , 都可以找到连续曲线 $l \subset D$ 将 $p$ 和 $q$ 联结, 则称 $D$ 为道路连通集. 这里的连续曲线是指 $l$ 可以表示为参数方程
$$
x _ {i} = \varphi_ {i} (t), \quad i = 1, 2, \dots , n,
$$

其中诸 $\varphi_{i}$ 是区间 [0,1] 上的连续函数，并且 $\boldsymbol{p} = (\varphi_{1}(0), \varphi_{2}(0), \cdots, \varphi_{n}(0))$ ， $\boldsymbol{q} = (\varphi_{1}(1), \varphi_{2}(1), \cdots, \varphi_{n}(1))$ 。可以证明道路连通集一定是连通集，但连通集未必是道路连通集（第二组参考题5）。下面的命题说明了区域的道路连通性。

命题 17.1.1 $R^{n}$ 中的区域都是道路连通的.

证 设 D 是 $R^{n}$ 中的一个非空连通开集. 取点 $x \in D$ , 设 $U(x)$ 为 D 中所有与 x 有 D 中连续曲线相联结的点的集合. 容易看到 $U(x)$ 是一个道路连通集. 我们证明 $U(x) = D$ . 设 $y \in U(x)$ , 并取 $\delta > 0$ 使 $O_{\delta}(y) \subset D$ . $\forall z \in O_{\delta}(y)$ 存在 $O_{\delta}(y)$ 中的直线段联结 z 到 y, 从而存在 D 中的连续曲线联结 z 到 x, 所以 $O_{\delta}(y) \subset U(x)$ . 因而 $U(x)$ 是包含 x 的开集. 如 $D - U(x) \neq \varnothing$ , 则 $D - U(x) = \bigcup U(y')$ , 其中 $y'$ 取遍 $D - U(x)$ 中的点. 按前面的证明, 每个 $U(y')$ 都是开集, 因此 $D - U(x)$ 也是开集. D 有开集分解式 $D = U(x) \cup (D - U(x))$ , 与 D 是连通开集矛盾. 这就证明了 $D - U(x) = \varnothing$ , 所以 $D = U(x)$ 是道路连通集. □

4. 距离概念的推广 点与点的距离概念可推广到点 x 与集合 S, 集合 $S_{1}$ 与集合 $S_{2}$ 之间的距离:

$$
\begin{array}{c} d (\boldsymbol {x}, S) = \inf _ {\boldsymbol {y} \in S} \{| \boldsymbol {x} - \boldsymbol {y} | \}; \\ d (S _ {1}, S _ {2}) = \inf _ {\boldsymbol {x} \in S _ {1}, \boldsymbol {y} \in S _ {2}} \{| \boldsymbol {x} - \boldsymbol {y} | \} = \inf _ {\boldsymbol {x} \in S _ {1}} \{d (\boldsymbol {x}, S _ {2}) \} = \inf _ {\boldsymbol {y} \in S _ {2}} \{d (\boldsymbol {y}, S _ {1}) \}. \end{array}
$$

点与集合的距离可以看作是两个集合之间的距离的特殊情况. 同时还可以定义一个集合 $S$ 的直径 $d_{S}$ 为

$$
d _ {S} = \sup _ {\boldsymbol {x}, \boldsymbol {y} \in S} \left\{\left| \boldsymbol {x} - \boldsymbol {y} \right| \right\}.
$$

关于集合的运算有下列命题:

命题 17.1.2 (De Morgan (德摩根) 法则) 设 $A_{\alpha} (\alpha \in I)$ 为一族集合, 则有

$$
\left(\bigcup_ {\alpha \in I} A _ {\alpha}\right) ^ {c} = \bigcap_ {\alpha \in I} (A _ {\alpha}) ^ {c}, \quad \left(\bigcap_ {\alpha \in I} A _ {\alpha}\right) ^ {c} = \bigcup_ {\alpha \in I} (A _ {\alpha}) ^ {c}.
$$

由命题 17.1.2 易证下述结论: 任意多个闭集的交集仍是闭集; 有限多个闭集的并集仍是闭集.

### 17.1.3 思考题

1. 按定义证明闭集的如下重要性质：

(1) 任意多个闭集的交集是闭集; (2) 有限多个闭集的并集是闭集.

2. 证明聚点定义 (1), (2) 的等价性.

3. 在例题 17.1.1 的证明中, 我们使用的是聚点等价定义 (1). 若使用原始定义, 证明是否能通过? 若不能, 应如何修改?

4. 无限多个开集的交是否一定是开集？

### 17.1.4 练习题

1. 证明: $\overline{S} = S \cup \partial S$ .

2. 证明: $\partial S = \overline{S} - \operatorname{int} S$ .

3. 若 $A \cap B = \emptyset$ , 则 $\overline{A} \cap (\operatorname{int} B) = \emptyset$ .

4. 证明: $S = S^{d} \Longleftrightarrow S$ 闭, 且 $S$ 无孤立点.

5. S 为 $R^{n}$ 中的点集, 证明: $\overline{S} = \{x \in R^{n} \mid d(x, S) = 0\}$ .

6. 若 S 为凸集, 则 $\overline{S}$ 也是凸集.

7. 对于集合 $S$ 与任一组集合 $A_{\alpha}, \alpha \in I$ , 恒有分配律:

$$
S \cap \left(\bigcup_ {\alpha \in I} A _ {\alpha}\right) = \bigcup_ {\alpha \in I} (S \cap A _ {\alpha}).
$$

## §17.2 R $^{n}$ 中的几个基本定理

### 17.2.1 综述

$\mathbf{R}$ 中的六个基本定理（见上册第三章）能推广到 $\mathbf{R}^n (n > 1)$ 上的是四个定理，它们是：

(1) 闭矩形套定理;

(2) 凝聚定理: $R^{n}$ 中的有界点列一定有收敛子列 (或聚点定理: 有界无限点集一定有聚点);

(3) Cauchy 收敛准则: 收敛点列 $\Longleftrightarrow$ 基本点列;

(4) 紧性定理: $\mathbf{R}^n$ 中的点集 $S$ 是紧集的充分必要条件是 $S$ 为有界闭集 (覆盖定理).

其他两个定理 (确界存在定理, 单调有界定理) 之所以不能推广到高维空间, 是因为它们与一维直线上的点的顺序有关.

紧性定理的叙述与一维的覆盖定理不同, 这可以从两方面进行解释:

(1) 如果在一维的情况下我们也定义闭集与紧集, 则覆盖定理就叙述为: 有界闭区间是紧集 (参见上册 80-81 页);

(2) 一维的覆盖定理不能以充分必要条件的形式叙述, 因为那时没有定义闭集, 而一维紧集是有界闭集但不一定是有界闭区间.

下面我们利用 De Morgan 法则给出紧性定理的另一种等价的表达形式.

定义 设集合 $S \in \mathbf{R}^n$ , 称 $\mathbf{R}^n$ 中的子集族 $\{F_{\lambda}\}_{\lambda \in I}$ 关于 $S$ 具有有限交性质, 若对于 $I$ 的任何有限子集 $J$ 均有

$$
S \cap \left(\bigcap_ {\lambda \in J} F _ {\lambda}\right) \neq \varnothing .
$$

命题 17.2.1 $R^{n}$ 中的集合 S 是紧集的充分必要条件是任何关于 S 具有有限交性质的闭集族 $\{F_{\lambda}\}_{\lambda \in I}$ 与 S 必有非空交, 即

$$
S \cap \left(\bigcap_ {\lambda \in I} F _ {\lambda}\right) \neq \varnothing .
$$

证 先证充分性. 设任一关于 $S$ 具有有限交性质的闭集族与 $S$ 有非空交. 任取 $S$ 的一个开覆盖 $\{O_{\lambda}\}_{\lambda \in I}$ , 则由 De Morgan 法则, 从 $\bigcup O_{\lambda} \supset S$ 得

$$
\bigcup_ {\lambda \in I} O _ {\lambda} \supset S
$$

$$
\bigcap_ {\lambda \in I} O _ {\lambda} ^ {c} \subset S ^ {c},
$$

即

$$
S \cap \left(\bigcap_ {\lambda \in I} O _ {\lambda} ^ {c}\right) = \varnothing .
$$

由条件知， $\bigcap_{\lambda\in I}O_{\lambda}^{c}$ 关于 S 无有限交性质，即存在有限个 $O_{1}^{c}, O_{2}^{c}, \cdots, O_{k}^{c}$ ，使得

$$
S \cap \left(\bigcap_ {i = 1} ^ {k} O _ {i} ^ {c}\right) = \varnothing ,
$$

从而

$$
\bigcap_ {i = 1} ^ {k} O _ {i} ^ {c} \subset S ^ {c}.
$$

于是

$$
\bigcup_ {i = 1} ^ {k} O _ {i} \supset S.
$$

这样的 $O_{i}(i=1,2,\cdots,k)$ 就是 S 的一个有限开覆盖，所以 S 为紧集.

再证必要性. 设 $S$ 为紧集, $\{F_{\lambda}\}_{\lambda \in I}$ 是任一关于 $S$ 具有有限交性质的闭集族, 假设 $S \cap \left( \bigcap_{\lambda \in I} F_{\lambda} \right) = \emptyset$ , 即可由 De Morgan 法则推出矛盾. 从略.

### 17.2.2 例题

例题 17.2.1 (闭集套定理) 设 $\{D_{k}\}$ 是一列非空闭集, 它满足:

(1) $D_{k+1} \subset D_k, k = 1, 2, \cdots;$ 

(2) $D_{k}$ 的直径 $\delta_{k} = \sup_{\pmb{x},\pmb{y}\in D_{k}}\{|x - y|\} \to 0 (k\to \infty)$ ，则这列闭集 $D_{k}(k = 1,2,\dots)$ 存在惟一的公共点.

证 1 (用凝聚定理) 在每个 $D_{k}$ 中任取一点 $x_{k}$ ，则 $\{x_{k}, k=1,2,\cdots\}$ 为一有界无穷点列，由凝聚定理存在点 x 及 $\{x_{k}\}$ 的子列 $\{x_{k_{i}}, i=1,2,\cdots\}$ 使得

$$
\boldsymbol {x} _ {k _ {i}} \rightarrow \boldsymbol {x} (i \rightarrow \infty).
$$

下面证 x 为 $D_{k} (k=1,2,\cdots)$ 的公共点. 事实上, $\forall k_{0} \in N_{+}$ , 当 $k_{i} \geqslant k_{0}$ 时

$$
\boldsymbol {x} _ {k _ {i}} \in D _ {k _ {i}} \subset D _ {k _ {0}}.
$$

令 $i\to \infty$ ，由于 $D_{k_0}$ 是闭集，则 $\pmb {x}\in D_{k_0}$ 

下证惟一性. 用反证法, 若存在两个公共点 $\pmb{x},\pmb{x}^{*}$ , 记 $d = |\pmb{x} - \pmb{x}^{*}|$ , 则 $d > 0$ , 由于 $\delta_{k} \to 0$ , 于是 $\exists K$ , 当 $k > K$ 时, $\delta_{k} < d$ , 此与 $\pmb{x},\pmb{x}^{*} \in D_{k}$ 矛盾.

证2（用Cauchy收敛准则）在每个 $D_{k}$ 中取一点 $\pmb{x}_{k}$ ，则

$$
\left| \boldsymbol {x} _ {k} - \boldsymbol {x} _ {l} \right| \leqslant \max \left\{\delta_ {k}, \delta_ {l} \right\}.
$$

由 Cauchy 收敛准则知存在点 x，使得 $x_{k} \rightarrow x$ 。又 $\forall k_{0} \in N_{+}$ ，当 $k > k_{0}$ 时

$$
\boldsymbol {x} _ {k} \in D _ {k} \subset D _ {k _ {0}}.
$$

令 $k\to \infty$ ，则 $\pmb {x}\in D_{k_0}$ ，即 $\pmb{x}$ 为 $D_{k}(k\geqslant 1)$ 的公共点.惟一性的证明同证1. □

例题 17.2.2 设 S 为 $R^{n}$ 中的集合, 若 S 既开且闭, 则 $S = R^{n}$ 或 $S = \varnothing$ .

证1 因 $S$ 是闭集, 故 $\mathbf{R}^n - S$ 是开集. 于是 $\mathbf{R}^n = S \cup (\mathbf{R}^n - S)$ 是两个不相交开集的并. 由 $\mathbf{R}^n$ 的连通性可知 $S$ 与 $\mathbf{R}^n - S$ 中至少有一为空集, 故 $S = \mathbf{R}^n$ 或 $S = \emptyset$ .

证 2 (不用连通性概念的证明) 首先证明 $\partial S = \emptyset$ . 因为 $S$ 开, $S$ 内的点都是内点, 所以 $S$ 内无 $S$ 的边界点. 同理 $\mathbf{R}^n - S$ 内也无 $S$ 的边界点, 因此 $\partial S = \emptyset$ . 如果 $S$ 与 $\mathbf{R}^n - S$ 均非空, 则存在点 $\pmb{x} \in S$ , 点 $\pmb{y} \in \mathbf{R}^n - S$ . 设 $L$ 是联结 $\pmb{x}$ 与 $\pmb{y}$ 的直线段, 则 $L$ 是有界闭集. 设 $\pmb{z}$ 是 $L$ 的中点, 则 $\pmb{z} \in S$ 或 $\pmb{z} \in \mathbf{R}^n - S$ . 因而 $L$ 有子直线段 $L_1$ 分别以 $S$ 与 $\mathbf{R}^n - S$ 中的点为其端点, 依此可构造由 $L$ 的子直线段组成的有界非空闭集套 $L \supset L_1 \supset \dots \supset L_i \supset \dots$ , 其集合半径趋于零, 且两端点分别为 $S$ 与 $\mathbf{R}^n - S$ 中的点. 由闭集套定理, 存在惟一的点 $\pmb{p}$ 属于所有的直线段. 由边界点的定义可见 $\pmb{p} \in \partial S$ , 与 $\partial S = \emptyset$ 矛盾.

例题 17.2.3 按 $(1) \Rightarrow (2) \Rightarrow (3) \Rightarrow (1)$ 的次序证明下列三个命题的等价性.

(1) S 是紧集;

(2) S 的任一无限子集必有聚点在 S 中;

(3) S 是有界闭集.

证 (1) $\Rightarrow$ (2). 用反证法. 设 $F$ 是 $S$ 的无限子集, $\forall x \in S$ , 它都不是 $F$ 的聚点 (这其中有两种可能, 一是 $F$ 没有聚点, 二是 $F$ 有聚点但不在 $S$ 中). 由聚点的定义 $\exists \delta_{x} > 0$ , 使得在 $O_{\delta_x}(\pmb{x})$ 中没有异于 $\pmb{x}$ 的 $F$ 的点. 由于 $\bigcup_{\pmb{x} \in S} O_{\delta_x}(\pmb{x}) \supset S \supset F$ 以及 $S$ 是紧集, 从而存在有限个 $O_{\delta_1}(\pmb{x}_1), O_{\delta_2}(\pmb{x}_2), \dots, O_{\delta_k}(\pmb{x}_k)$ 满足

$$
\bigcup_ {i = 1} ^ {k} O _ {\delta_ {i}} (\boldsymbol {x} _ {i}) \supset S \supset F.
$$

由此可看出 F 是有限集, 与 F 是无限集矛盾.

(2) $\Rightarrow$ (3). 由已知条件知 $S^d \subset S$ , 从而 $S$ 闭. 下面用反证法证明 $S$ 有界, 若不然在 $S$ 中有子列 $\{\pmb{x}_k\}$ 满足 $|\pmb{x}_k| \to +\infty (k \to \infty)$ , 可见 $\{\pmb{x}_k\}$ 没有聚点, 与已知条件矛盾.

(3) $\Rightarrow$ (1). 用闭矩形套定理. 其详细证明在很多教科书中都有, 从略.

例题 17.2.4 设 $S_{1}, S_{2}$ 都是 $R^{n}$ 中的有界闭集， $S_{1} \cap S_{2} = \varnothing$ ，证明：存在两个开集 $O_{1}$ 和 $O_{2}$ ，使得 $S_{i} \subset O_{i}, i = 1, 2$ ，且 $O_{1} \cap O_{2} = \varnothing$ .

分析 若 $S_{1}$ 与 $S_{2}$ 只是两个单点集 $\{\pmb{x}_1\}$ 与 $\{\pmb{x}_2\}$ , 则 $d = d(\pmb{x}_1, \pmb{x}_2) > 0$ . 令

$$
O _ {i} = \left\{\boldsymbol {x} \in \mathbf {R} ^ {n} \mid d (\boldsymbol {x}, \boldsymbol {x} _ {i}) <   d / 3 \right\}, i = 1, 2,
$$

则 $O_{i}$ 为开集， $O_{i} \supset S_{i}, i = 1,2$ ，且 $O_{1} \cap O_{2} = \emptyset$ 。由此启发我们对一般的有界闭集把证明分成两部分。

证 第一步: 证明 $d = d(S_1, S_2) > 0$ . 用反证法. 若 $d(S_1, S_2) = 0$ , 则由 $d(S_1, S_2)$ 的定义, $\exists x_n \in S_1, y_n \in S_2$ , 使得

$$
\lim _ {n \rightarrow \infty} | \boldsymbol {x} _ {n} - \boldsymbol {y} _ {n} | = 0.\tag{17.1}
$$

由 $S_{1}, S_{2}$ 有界及凝聚定理知, $\{\pmb{x}_{n}\}, \{\pmb{y}_{n}\}$ 都有收敛子列, 不妨设 $\pmb{x}_{n} \to \pmb{x}$ , $\pmb{y}_{n} \to \pmb{y}$ . 由 $S_{1}, S_{2}$ 闭知 $\pmb{x} \in S_{1}, \pmb{y} \in S_{2}$ . 在 (17.1) 中令 $n \to \infty$ 得 $\pmb{x} = \pmb{y}$ , 此与 $S_{1} \cap S_{2} = \emptyset$ 矛盾.

第二步: 直接定义

$$
O _ {i} = \left\{\boldsymbol {x} \in \mathbf {R} ^ {n} \mid d (\boldsymbol {x}, S _ {i}) <   d / 3 \right\}, i = 1, 2,
$$

则 $O_{i}$ 为开集， $O_{i} \supset S_{i}, i = 1,2,$ 且 $O_{1} \cap O_{2} = \emptyset$ .

还有一种更有启发性 (可用于下面第一组参考题的第 5 题) 的构造 $O_{1}, O_{2}$ 的办法是定义

$$
O _ {1} = \bigcup_ {\boldsymbol {x} \in S _ {1}} O _ {d _ {\boldsymbol {x}} / 3} (\boldsymbol {x}), \quad O _ {2} = \bigcup_ {\boldsymbol {y} \in S _ {2}} O _ {d _ {\boldsymbol {y}} / 3} (\boldsymbol {y}),
$$

其中 $d_{x}$ 是 $x \in S_{1}$ 到 $S_{2}$ 的距离, $d_{y}$ 是 $y \in S_{2}$ 到 $S_{1}$ 的距离.

### 17.2.3 练习题

1. 设 A, B 是 $R^{n}$ 中的两个不相交的闭集, 其中一个有界, 证明: $d(A, B) > 0$ . 如果 A, B 均是无界闭集, 是否仍有 $d(A, B) > 0$ ?

2. 设 $S_{1}, S_{2}$ 为 $\mathbf{R}^{n}$ 中不相交的闭集, 其中一个有界. 证明: 存在开集 $O_{1}, O_{2}$ 满足 $S_{i} \subset O_{i}, i = 1, 2$ , 且 $O_{1} \cap O_{2} = \varnothing$ .

3. 由闭矩形套定理证明凝聚定理.

4. 由凝聚定理证明 Cauchy 收敛定理.

5. 由紧性定理证明聚点定理.

## §17.3 对于教学的建议

### 17.3.1 学习要点

1. 本章有很多集合论的知识, 对于初学者来说是比较抽象的, 但它们却是进一步学习数学的基本语言之一. 在教学中最基本的要求是理解各类集合的概念. 根据我们的经验, 以聚点作为一个切入点来展开一些练习很有效果. 此外, 举例是理解概念的最有效的手段. 通常的教科书中有足够的例子供习题课选用.

2. 在上册第三章中的实数系基本定理中，除去单调有界定理和确界存在定理需要用到实数的有序性外，其余四个基本定理都得到了推广，其中闭区间套定理被推广成比较方便的闭集套定理的形式.

3. 在以后的学习中, 用得最多的集合概念是区域. 我们给出了它的比较正规的描述. 根据命题 17.1.1, 也可以道路连通开集来定义 $\mathbf{R}^n$ 中的区域, 这样可以在现阶段避开连通与道路连通这两个易混淆的概念.

4. 多元基本定理延续了第三章的内容, 相对而言, 学生理解不是很困难. 因而有条件时可适当布置一些应用题, 如本章的第一组参考题 2.

5. 对习题课的建议 教师应该根据实际教学课时来选取材料, 确定教案. 一般来说, 本章的教学时段只有一次多一点的习题课. 因此, 习题课的安排首先要保证学生能理解概念, 能正确叙述多元基本定理的内容. 其次是一些初步的集合证明题和基本定理的应用题 (可集中于某一个定理, 如闭集套定理的应用). 至于连通性的讨论和紧性的等价描述完全是补充内容.

学生们在证明某个集合 $S$ 具有某种性质时，有时采用如下错误证法：先对 $S$ 是开集时证明结论，然后对 $S$ 是闭集时证明结论。由以上两步得到结论成立。要告诉他们尽管开集的余集是闭集，闭集的余集是开集，但这并不意味着集合只有开集和闭集两大类。

在证明像17.2.3小节中的练习题1时，学生们往往不会下手，或者是不会做，或者是不得要领地写一大堆。要引导他们从最简单的情况开始思考。如果 $A$ 为单点集 $\{\pmb{x}\}$ 时，用反证法，设 $d(\pmb {x},B) = 0$ ，则存在 $\pmb{y}_n\in B$ ，使得 $|\pmb {x} - \pmb{y}_n|\to 0(n\to \infty)$ 因而 $\{\pmb{y}_n\}$ 是有界列，有收敛子列，然后如例题17.2.4第一步那样推出矛盾。当 $A$ 为一般有界闭集时，讨论是类似的（此时如何证明 $\{\pmb{y}_n\}$ 也是有界列呢？）。

### 17.3.2 参考题

#### 第一组参考题

1. 证明: $\mathbf{R}^n$ 中每个闭集可表为可列个开集的交, 每个开集可表为可列个闭集的并.

2. 用闭集套定理证明三角形三边上的中线交于一点.

3. 设函数 $f(x)$ 在 $(- \infty, + \infty)$ 上连续, 证明: $E = \{(x, f(x)) \mid x \in (-\infty, + \infty)\}$ 是平面上的闭集 (称为 $f$ 的图像).

4. 证明: int S 是开集, 而且是包含于 S 的最大开集.

5. $(\mathbf{R}^n$ 的正规性) 设 $S_{1}, S_{2}$ 为 $\mathbf{R}^n$ 中不相交的闭集 (不一定有界). 证明: 存在开集 $O_{1}, O_{2}$ 满足 $S_{i} \subset O_{i}, i = 1, 2$ , 且 $O_{1} \cap O_{2} = \emptyset$ .

6. (1) 设 S 是 $R^{n}$ 中的有界集合. 证明: $\forall \delta > 0, \exists S$ 中有限个点 $p_{1}, p_{2}, \cdots, p_{k}$ , 使得 $\bigcup_{i=1}^{k} O_{\delta}(p_{i}) \supset S;$ 

(2) 证明覆盖定理的 Lebesgue 形式: 若 $\{G_{\alpha}\}$ 是有界闭集 $F$ 的开覆盖, 则 $\exists \delta > 0$ , 使得 $\forall p \in F$ , 存在 $\{G_{\alpha}\}$ 中的一个开集 $G$ , 满足 $O_{\delta}(p) \subset G$ ;

(3) 证明覆盖定理的 Lebesgue 形式与通常的表述形式 (若 $\{G_{\alpha}\}$ 是有界闭集 F 的开覆盖, 则存在 $\{G_{\alpha}\}$ 中的有限个开集 $G_{1}, G_{2}, \cdots, G_{m}$ , 使得 $\bigcup_{i=1}^{m} G_{i} \supset F$ ) 等价.

#### 第二组参考题

1. 证明: $\mathbf{R}^n$ 中开集 $D$ 是连通集的充分必要条件是 $D$ 不能分解为两个不相交的非空子开集的并.

2. 证明: $\mathbf{R}$ 中集合 $D$ 是连通集的充分必要条件是 $D$ 为区间.

3. 证明：有公共点的连通集的并集是连通集.

4. 证明: $A = \{(x, y) \mid x, y \text{ 至少有一个是有理数} \}$ 是 $\mathbf{R}^2$ 中的道路连通集.

5. 证明：道路连通集一定是连通集，但连通集未必是道路连通集。（考察例子 $E = \left\{(x, y) \mid y = \sin \frac{1}{x}, 0 < x \leqslant \frac{2}{\pi}\right\}$ ，证明 $\overline{E}$ 是连通而非道路连通的。）

6. 设 A, B 为 $R^{n}$ 的非空子集, 定义 $A + B$ 为 $R^{n}$ 中一切形如 $x + y$ 的点组成的集合, 其中 $x \in A, y \in B$ .

(1) 如果 K 为 $R^{n}$ 的紧子集, C 为 $R^{n}$ 的闭子集, 证明: $K + C$ 为 $R^{n}$ 的闭子集;

(2) 如果 $K, C$ 均为 $\mathbf{R}^n$ 的闭子集, $K + C$ 未必为 $\mathbf{R}^n$ 的闭子集. 考虑 $K$ 为整数集合, $C$ 为一切形如 $\alpha m$ 的数组成的集合, 其中 $m \in K$ , $\alpha$ 是某个确定的无理数. 证明: $\overline{K + C} = \mathbf{R}$ , 但 $K + C \neq \mathbf{R}$ .