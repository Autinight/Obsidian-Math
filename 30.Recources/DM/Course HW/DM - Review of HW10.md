

> [!exercise] Exercise
> $G$ 是李群, $\mathfrak g$ 是它的李代数.
>
> 1. 定义 $G$ 的中心为
>   
> $
> Z(G)=\{g\in G\mid gh=hg,\ \forall h\in G\}.
> $
>
> 求证 $Z(G)$ 是 $G$ 的李子群, 并求它的李子代数.
>
> 2. $\varphi:G\to G$ 是一个李群的自同态, 设
>
> $
> H=\{g\in G\mid \varphi(g)=g\}.
> $
>
> 求证 $H$ 是 $G$ 的李子群, 并求其李子代数.
>
> 3. $O(n),SL(n,\mathbb R)$ 能否实现为 $GL(n,\mathbb R)$ 自同构的不动点? 请证明.

> [!proof] Proof: 
> 4. 对于任意的 $h\in G$, 定义 $\varphi _{h}:G\to G$, $\varphi _{h}\left(g\right)= g^{-1} h^{-1} gh$. 则$\varphi$是一个光滑映射. 易见
>  $$ \begin{aligned} Z\left(G\right)= \left\{ g\in G: \varphi _{h}\left(g\right)= e,\forall h\in G \right\} = \bigcap _{h\in G}\varphi _{h}^{-1} \left(e\right)\end{aligned} $$
> 由于 $\varphi _{h}^{-1} \left(e\right)$ 是闭集, 故 $Z\left(G\right)$是闭集. 由中心自然是子群, 由Cartan闭子群定理,  $Z\left(G\right)$是 $G$的嵌入李子群. 令 $\mathfrak{z}$为 $Z\left(G\right)$的李代数. 对于任意的 $X \in \mathfrak{z}$, 我们有
>  $$ \exp \left(tX\right)\in Z\left(G\right) $$
> 即对于任意的 $h\in G$, 我们有
>  $$ C_{h}\left(\exp \left(tX\right)\right)= \exp \left(tX\right) $$
> 其中 $C_{h}: g\mapsto hgh^{-1}$是共轭自同态. 由指数映射的自然性 $C_{h}\circ \exp = \exp \circ \operatorname{Ad}_{h}$, 于是我们有
>  $$ \exp \left(tX\right)= C_{h}\left(\exp \left(tX\right)\right)= \exp \left(\operatorname{Ad}_{h}\left(tX\right)\right)= \exp \left(\operatorname{tAd}_{h}X\right) $$
> 由单参数子群的唯一性, 
>  $$ X= \operatorname{Ad}_{h}X $$
> 我们就定义
>  $$ \mathfrak{z}^{\prime} = \left\{ X \in \mathfrak{g}: \operatorname{Ad}_{h}\left(X\right)= X,\forall h\in G \right\} $$
> 因此以上表明 $\mathfrak{z}\subseteq \mathfrak{z}^{\prime}$. 反过来, 任取 $X \in \mathfrak{z}^{\prime}$, 易见 $tX \in \mathfrak{z}^{\prime}$, 我们有
>  $$ \operatorname{Ad}_{h}\left(tX\right)= tX $$
>  两边作用指数映射, 利用指数映射的自然性, 得到
>  $$ \exp \left(tX\right)= \exp \left(\operatorname{Ad}_{h}\left(tX\right)\right)= C_{h}\left(\exp \left(tX\right)\right)$$ 
> 这表明 $\exp \left(tX\right)\in \mathfrak{z}$. 因此 $\mathfrak{z}^{\prime} \subseteq \mathfrak{z}$. 综上可知, $Z\left(G\right)$的李子代数就是
>  $$ \mathfrak{z}= \mathfrak{z}^{\prime} = \left\{ X \in \mathfrak{g}: \operatorname{Ad}_{h}\left(X\right)= X \right\} $$
> 若 $G$是连通李群, 考虑到
>  $$\operatorname{Ad}_{\exp\left(tY\right) }X= X $$
> 两边对 $t= 0$处求导, 得到
>  $$ \operatorname{ad}_{Y}X= 0 $$ 
>  反过来, 若 $\operatorname{ad}_{Y}X= 0$恒成立, 
>  考虑到
>  $$ \operatorname{Ad}_{\exp Y}X= e^{\operatorname{ad}_{Y}}X= \sum _{k= 0}^{\infty}\left(\frac{\left(\operatorname{ad}_{Y}\right)^{k} }{k! }\right)X= X $$
> 利用连通性把性质推广到 $G$上即可.
> 
> 5. 令 $\psi :G\to G$, $\psi \left(g\right)= g^{-1} \varphi \left(g\right)$. 则 $\psi$是光滑的映射, 使得
>  $$ H= \psi ^{-1} \left(e\right) $$
> 是闭集. 容易证明$H$是子群, 故$H$是李子群.  设 $\mathfrak{h}$是李子代数, 任取 $X \in \mathfrak{h}$, 则
>  $$ \varphi \left(\exp \left(tX\right)\right)= \exp \left(tX\right) $$
> 由指数映射的自然性
>  $$ \exp \left(t\varphi _{*}\left(X\right)\right)= \exp \left(\varphi _{*}\left(tX\right)\right)= \varphi \left(\exp \left(tX\right)\right)= \exp \left(tX\right) $$  
> 其中 $\varphi _{*}$是 $\varphi$诱导的李代数同态. 根据单参数子群的唯一性,得到
>  $$ \varphi _{*}\left(X\right)= X $$
> 反过来, 若 $\varphi _{*}\left(X\right)= X$, 我们有 $\varphi _{*}\left(tX\right)= tX$, 两边作用指数映射, 利用自然性, 得到
>  $$ \exp \left(tX\right)= \exp \left(\varphi _{*}\left(tX\right)\right)= \varphi \circ \left(\exp \left(tX\right)\right) $$
> 这表明 $\exp \left(tX\right)\in H$, 从而$X \in \mathfrak{h}$. 
> 因此 $\mathfrak{h}$的李子代数就是 $\mathfrak{g}$在 $\varphi _{*}$下的不动点.
>
> 6. 定义 $\varphi :\operatorname{GL} \left(n,\mathbb{R} \right)\to \operatorname{GL} \left(n,\mathbb{R} \right)$,
>  $$ \varphi \left(A\right)= \left(A^{\top}\right)^{-1}  $$
> 则 $\varphi$是李群自同构, 并且
>  $$ \varphi \left(A\right)= A\iff A^{\top}A= I $$
> 这表明 $O\left(n\right)$  被实现为 $\varphi$的不动点.
>
> 对于$n$是偶数的情况, 我们定义 $\varphi :\operatorname{GL} \left(n,\mathbb{R} \right)\to \operatorname{GL} \left(n,\mathbb{R} \right)$
>  $$ \varphi \left(A\right)= \left(\det A\right)A $$
> 则$\varphi$是李群同态. 为了说明单同态, 若 $\left(\det A\right)A= I_{n}$, 则两边取行列式, 得到 $\left(\det A\right)^{n+ 1}= 1$, 从而 $\det A= 1$, $A= I_{n}$, 因此 $\varphi$是单同态. 此外, 由
>  $$ \varphi \left(\left(\det A\right)^{-\frac{1 }{n+ 1 }}A\right)= \left(\det A\right)^{-\frac{n }{n+ 1 }} \det A \left(\det A\right)^{-\frac{1 }{n+ 1 }}A=A $$
> 因此 $\varphi$是满同态, 从而 $\varphi$是李群同构, $\operatorname{SL}\left(n,\mathbb{R} \right)$  被实现为 $\varphi$的不动点.
> 
> 若 $n$是奇数, $\varphi$是李群自同构, 则 $\varphi \left(-I_{n}\right)$是 $\operatorname{GL} \left(n,\mathbb{R} \right)$中的二阶元, 且位于中心, 只能是 $I_{n}$的倍数, 从而只能有
>  $$ \varphi \left(-I_{n}\right)= -I_{n} $$ 
> 这表明任何李群自同构的不动点集包含 $-I_{n}$, 但当此时$n$是奇数, 
>  $$ \det \left(-I_{n}\right)= \left(-1\right)^{n}= -1 $$
> $-I_{n}\not \in \operatorname{SL}\left(n,\mathbb{R} \right)$, 因此 $\operatorname{SL}\left(n,\mathbb{R} \right)$无法被实现为任何李群自同构的不动点集. 

> [!exercise] Exercise
> 令 $H \subset GL(3,\mathbb{R})$ 为 3 维 Heisenberg 群
>
> $$
> H=\left\{\begin{pmatrix}
>
> 1 & a & b\\
>
> 0 & 1 & c\\
>
> 0 & 0 & 1
>
> \end{pmatrix}\Bigg|\, a,b,c\in\mathbb{R}\right\}.
>
> $$
>
> 1. 求 $H$ 的李代数 $\mathfrak{h}$, 并求 $Z(H)$ 和 $\mathfrak{z}(\mathfrak{h})$.
>
> 2. 求证 $\operatorname{exp}:\mathfrak{h}\to H$ 是微分同胚.

> [!proof] Proof: 
>  任取 $A\in H$, 我们有 
>  $$ A\in T_{I_{n}}H $$
> 由于 $H$上的曲线只有 $a,b,c$三个分量可能不为常值, 因此
>  $$ T_{I_{n}}H\subseteq \operatorname{span}\left\{ E_{12},E_{13},E_{23} \right\} $$  
> 根据李代数的维数定理, $\operatorname{dim}T_{I_{n}}H= \operatorname{dim}H= 3$, 因此
>  $$ \mathfrak{h}\simeq T_{I_{n}H}\simeq \operatorname{span}\left\{ E_{12}, E_{13},E_{23} \right\} $$ 
> 取 $A,B\in H$, 若 $A$是中心, 通过比较 $AB= BA$的分量, 得出
>  $$ Z\left(H\right)= \left\{ \begin{pmatrix} 1&0&b\\0&1&0\\0&0&1 \end{pmatrix}:  b\in \mathbb{R} \right\}\simeq \mathbb{R}  $$ 
> 由于$H$是连通李群, 中心的李代数就是李代数的中心, 我们得到
>  $$ \mathfrak{z}\left(\mathfrak{h}\right)= T_{I_{n}}Z\left(H\right)= \operatorname{span}\left\{ E_{13} \right\}  $$ 
> 2. 考虑到 $X^{k}= 0$,$\forall k\ge 3$, 将矩阵指数展开, 得到表达式, 做线性代数解方程的操作就可以了.

> [!exercise] Exercise: 
> 求证 $SO(3)$ 微分同胚于 $\mathbb{RP}^{3}$. 

> [!proof] Proof: 
> 将 $S^{3}$刻画为$\left\{ x\in \mathbb{H}, \left| x \right|= 1  \right\}$, 其中 $\mathbb{H}= \operatorname{span}\left\{ 1,i,j,k \right\}$为四元数代数. 通过计算Defining map $F:\mathbb{H}\to \mathbb{R}$,$F\left(x\right)= \left| x \right|^{2}$的ker, 我们得到
>  $$ T_{1}S^{3}= \operatorname{span}\left\{ i,j,k \right\}\simeq \mathbb{R} ^{3} $$
> 将$SO\left(3\right)$刻画为 $T_{1}S^{3}$上的自同构, $S^{3}$存在$\mathbb{H}$的李子群结构, 我们考虑共轭作用 $C_{q}: S^{3}\to S^{3}$, $C_{q}\left(w\right)=  q w q^{-1}$,是线性的变换, 从而$\operatorname{Ad}_{q}: T_{1}\mathbb{S}^{3}\to T_{1}\mathbb{S}^{3}$作为 $C_{q}$在 $1$处的微分是形式相同的线性同构, 
>  $$ \operatorname{Ad}_{q}\left(w\right)=  q w q^{-1}  $$
> 此外,
>  $$ \left| \operatorname{Ad}_{q}\left(w\right) \right|= \left| q \right|\left| w \right|\left| q \right|^{-1} = \left| w \right|      $$
> 因此 $\operatorname{Ad}_{q}$是等距同构, $\operatorname{Ad}_{q}\subseteq O\left(3\right)$. 由于 $\operatorname{Ad}: \mathbb{S}^{3}\to \operatorname{GL} \left(\mathbb{S}^{3}\right)$是光滑函数, 且 $\mathbb{S}^{3}$连通, 因此 $\operatorname{Ad}\left(\mathbb{S}^{3}\right)$是连通的, 并且 $\operatorname{Id}_{\mathbb{S}^{3}}\in \operatorname{Ad}\left(\mathbb{S}^{3}\right)$, 我们有 $\operatorname{Ad}\left(\mathbb{S}^{3}\right)\subseteq \operatorname{SO}\left(3\right)$  . 
> 考虑 $\mathbb{RP}^{3}\simeq S^{3}\setminus \left\{ -1,1 \right\}$, 注意到
>  $$ \operatorname{ker}\operatorname{Ad}=  \left\{ q\in \mathbb{S}^{3}: qwq^{-1} = w,\forall w\in \mathbb{S}^{3} \right\}= \left\{ 1,-1 \right\}$$
> 因此 $\operatorname{ker}\operatorname{Ad}$是一个零维流形, 我们有
>  $$ \operatorname{Lie}\left(\operatorname{ker}\operatorname{Ad}\right)= T_{1} \left(\operatorname{ker}\operatorname{Ad}\right)= \operatorname{ker}\left(d\operatorname{Ad}_{1}\right)$$  
> 因此 $d \operatorname{Ad}_{1}$是线性同构, 由李群的齐性可知, $\operatorname{Ad}$是局部的微分同胚, 从而是开映射. 我们有 $\operatorname{Ad}\left(\mathbb{S}^{3}\right)$是 开集. 由 $\mathbb{S}^{3}$是紧集, 从而$\operatorname{Ad}\left(\mathbb{S}^{3}\right)$是紧集, 而 $\operatorname{SO}\left(3\right)$是闭子集, 因此 $\operatorname{Ad}\left(\mathbb{S}^{3}\right)$也是闭的, 连通性迫使 $\operatorname{Ad}\left(\mathbb{S}^{3}\right)= \operatorname{SO}\left(3\right)$. 由李群第一同构定理, 由于 $\left\{ -1,1 \right\}$是 $\mathbb{S}^{3}$的闭子群, 我们有
>  $$ \mathbb{RP}^{3}\simeq \mathbb{S}^{3}\setminus \left\{ -1,1 \right\}\simeq _{\operatorname{Lie}} \operatorname{SO}\left(3\right) $$
> 从而给出了微分同胚. 
