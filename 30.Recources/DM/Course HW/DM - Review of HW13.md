  

> [!exercise] Exercise: 1
> 设 $M$ 为光滑流形且可表示为两个可定向的开子流形的并, 求证若这两个子流形的交集是连通的则 $M$ 是可定向的, 并由此给出 $\mathbb{S}^n$ 可定向的证明.

> [!remark] Remark: 
> 流形是可定向的, 当且仅当存在一个无处退化的光滑$n$-形式.

> [!proofsketch] Sketch of Proof: 
> - 用微分形式的刻画, 只需要把两个定向形式 $\omega _1$ on $U$和 $\omega _2$ on $V$拼成$M= U\cap V$上的一个定向形式.
> - 在交集处$\omega _1 = f\omega _2$, 必要时调转$\omega _2$使得$f$恒正.
> - 取$U,V$的单位分解,拼成
>   $$ \omega = \rho _1 \omega _1 + \rho _2 \omega _2  $$
>   就行了 , 交集处的非退化性来源于$\omega _1 ,\omega _2$方向的一致性.
> -  最后, $\mathbb{S}^{n}$可定向, 只需要看到挖去南极点和北极点都通过球极投影微分同胚与可定向的$\mathbb{R} ^{n}$.

> [!exercise] Exercise: 2
> 设 $M$ 是可定向的黎曼流形, $S \subset M$ 是子流形 (可能是浸入或嵌入; 可能带边可能不带边). 证明:
>
> a). 若 $S$ 的法丛是平凡的, 则 $S$ 可定向.
>
> b). 若 $S$ 是一个可定向的超曲面, 则 $S$ 的法丛是平凡的.

> [!remark] Remark: 
> - 法丛是子流形切丛在度量下的正交空间.
> - 法丛是平凡的, 当且仅当存在全局的标价
> - 无处退化则在任意基向量下非零.

> [!proofsketch] Sketch of Proof: 
> 1. - 法丛是平凡的, 则可以取出全局的$n-k$个法向量场. 从而可以通过将$n-k$个向量场插入$M$的定向形式$\omega$中得到$S$上的非退化全局向量场.
> 2. - 把全局微分形式看成是微分形式丛的全局截面, 那么法丛的平凡性和超曲面的可定向性就都被翻译成了全局截面的存在性.  
>    - $M$的可定向性保证了丛之间的对应关系, 把法向量$v$映到定向$n$-形式插入$v$得到的为$n-1$余切向量. 利用线性无关性简单证明丛同态是丛同构.
>    - $S$的可定向性就被翻译成了微分形式丛全局截面的存在性, 从而给出法丛全局截面的存在性.


> [!exercise] Exercise: 3
> a). 设 $\mathbb{T}^2 = \mathbb{S}^1 \times \mathbb{S}^1 \subset \mathbb{R}^4$ 为二维环面, 即
>
> $$
>
> \mathbb{T}^2 = \{(w, x, y, z) \mid w^2 + x^2 = y^2 + z^2 = 1\}.
>
> $$
>
> 计算 $\int_{\mathbb{T}^2} \omega$, 其中
>
> $$
>
> \omega = xyz \ dw \wedge dy.
>
> $$
>
> b). 设
>
> $$
>
> \omega = x \ dy \wedge dz + y^2 \ dz \wedge dx + z \ dx \wedge dy
>
> $$
>
> 为 $\mathbb{R}^3$ 上的 $2$-形式, 令 $\iota: \mathbb{S}^2 \to \mathbb{R}^3$ 为标准嵌入, 计算 $\int_{\mathbb{S}^2} \iota^* \omega$.



> [!proofsketch] Sketch of Proof: 1
> 1. 坐标$A$的微分形式用坐标$B$计算, 就是用定义域在$B$上的坐标映射, 把微分形式拉回到$B$上计算.
> 2. 利用Skotes公式
>    $$ \int _{\partial M}\iota ^{*}\omega = \int _{M}d\omega  $$
>     在球体上计算积分 , 剩下非常数项$ydx\wedge dy\wedge dz$的积分利用对称性变成0. 常数项积分变成球体体积$\frac{4}{3}\pi$.