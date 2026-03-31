

> [!exercise] Exercise
> 设 $\iota: M^r \hookrightarrow \mathbb{R}^K$ 为包含映射, 即对任意 $x \in M$, $d\iota_x: T_xM \to T_x\mathbb{R}^K \cong \mathbb{R}^K$, 若
>
> $$N_x(M,\mathbb{R}^K) = T_xM^\perp = \{v \in \mathbb{R}^K \mid v \perp T_xM\},$$
>
> $$N(M,\mathbb{R}^K) = \{(x,v) \mid x \in M, v \in T_xM^\perp\},$$
>
> $N(M,\mathbb{R}^K)$ 称为 $M$ 在 $\mathbb{R}^K$ 中的法丛.
>
> 1. 求证 $N(M,\mathbb{R}^K)$ 是流形;
>
> 2. 设
>
> $\pi: N(M,\mathbb{R}^K) \to M$
>
> $(x,v) \mapsto x$
>
> 求证 $\pi$ 是一个淹没.



> [!proof] Proof: 
> 1. - 嵌入到欧式空间中得到拓扑.
>    - 把坐标标价扩张, 剩下的正交化. 变成法空间的坐标向量场.
>    - 过度映射是正交矩阵乘一个流形的过渡映射
> 2. 坐标表示就是扔掉表示法丛的那几个向量场, Jacobi是$\begin{pmatrix} I&* \end{pmatrix}$.


> [!exercise] Exercise
> $$\mathbb{T}^2 = S^1 \times S^1 = \{(x^1, x^2, x^3, x^4) \mid (x^1)^2 + (x^2)^2 = 1, (x^3)^2 + (x^4)^2 = 1\}.$$
>
> 设 $\iota: \mathbb{T}^2 \hookrightarrow \mathbb{R}^4$ 是典范嵌入, 设
>
> $$g: \mathbb{R}^4 \to \mathbb{R}^3$$
>
> $$(x^1, x^2, x^3, x^4) \mapsto (x^1(2+x^3), x^2(2+x^3), x^4)$$
>
> 1. 计算 $dg$;
>
> 2. 求证 $f = g \circ \iota$ 是一个嵌入.

> [!remark] Remark: 
> 单射,浸入加拓扑嵌入, 等于光滑嵌入

> [!proofsketch] Sketch of Proof: 
> 1. 就是计算Jacobi
> 2. - **单射**: 
>       看映射
>       - $x^{4}= y^{4}$, 配合$\mathbb{T}^{2}$给出$x^{3}= \pm y^{3}$.
>       - $g$的形式结合$\mathbb{T}^{2}$的性质, 对前两个平方相加,导出
>            $$ \left(2+ x^{3}\right)^{2}= \left(2+ y^{3}\right)^{2}\implies \left(2+ x^{3}\right)= \pm \left(2+ y^{3}\right) $$ 
>       - 总能给出$x^{3}= y^{3}$
>       - 在配合$g$的前两项导出$x^{1}= y^{1},x^{2}= y^{2}$.
>    - **浸入**: 
>    $$ \left(\theta ,\varphi \right)\mapsto \left(\cos \theta \left(2+ \cos \varphi \right), \sin \theta \left(2+ \cos \varphi \right),\sin \varphi \right) $$
>  $$ \begin{pmatrix} -\sin \theta \left(2+ \cos \varphi \right)&\cos \theta \left(2-\sin \varphi \right)\\cos\theta \left(2+ \cos \varphi \right)&\sin \theta \left(2-\sin \varphi \right)\\0&\cos \varphi  \end{pmatrix} $$  
> 总是满秩,故是浸入.
>  - **拓扑嵌入**: 紧到Hausdorff空间的连续单射



> [!exercise] Exercise
> 1. 设
>
> $f: \mathbb{S}^2 \to \mathbb{R}^3$
>
> $(x,y,z) \mapsto (yz, zx, xy)$
>
> 确定在 $\mathbb{RP}^2$ 中的哪些点上, 由 $f$ 诱导的映射不是一个浸入.
>
> 2. 设
>
> $f: \mathbb{S}^2 \to \mathbb{R}^4$
>
> $(x,y,z) \mapsto (x^2-y^2, yz, zx, xy)$
>
> 求证 $f$ 诱导了 $\mathbb{RP}^2$ 到 $\mathbb{R}^4$ 的嵌入.

> [!proofsketch] Sketch of Proof: 
> 1. $\pi :\mathbb{S}^{2}\to \mathbb{RP}^{2}$是光滑复叠映射, 从而是局部的微分同胚. 因此$f$在$p$不是浸入, 当且仅当$\bar{f}$在$\left[ p \right]$处不是浸入. 考虑嵌入$\iota :\mathbb{S}^{2}\hookrightarrow \mathbb{R} ^{3}$, 则$f= \iota ^{*}F$, 其中$F:\mathbb{R} ^{3}\to \mathbb{R} ^{3}$, $\left(x,y,z\right)\mapsto \left(yz,zx,xy\right)$, 
>  $$ dF= \begin{pmatrix} 0&z&y\\z&0&x\\y&x&0 \end{pmatrix} $$
> 由于$\iota$是浸入, 若$f$在$p$是浸入, 必然有$F$亦然, 因此我们考察使得 $\det dF= 0$的点. 考虑$z= 0$的情况, 则 
>  $$ d F= \begin{pmatrix} 0&0&y\\0&0&x\\y&x&0 \end{pmatrix} $$
> 此时
>  $$ \operatorname{ker}dF= \operatorname{span}\left\{ 1, -\frac{y }{x },0 \right\} $$
> 与$T_{p}\mathbb{S}^{2}$有非零的交集, 当且仅当 与位置向量场垂直, 此时$x^{2}= y^{2}$, 得到
>  $$ \left(x,y,z\right)= \left(\pm \frac{1 }{\sqrt{2} },\pm \frac{1 }{\sqrt{2} },0\right) $$
> 类似地, 我们当$x= 0$或$y= 0$时, 我们得到使得$f$不是浸入的其他$8$个点, 一共12个点,这$12$个点归属于$6$个$\mathbb{RP}^{n}$上的等价类, 
>  $$\left[ 1:\pm 1:0 \right],\left[ 0:1:\pm 1 \right],[1:0:\pm 1]$$    
>
> 2. 类似地, 通过考察 $\operatorname{ker}\widetilde{df}_{\iota \left(p\right)}\cap T_{p}\mathbb{S}^{2}$考察哪些点不是浸入, 计算欧式空间函数的jacobi,发现当某个坐标为零的时候才可能是不满的, 计算一通,发现结论是没有非浸入点.
>    $f$是单射, 只需要若$f$相等, 则原像属于同一个纤维, 即相差一个正负号, 还是对$f$的后几个分量进行平方求和的操作,结合前面的
> 