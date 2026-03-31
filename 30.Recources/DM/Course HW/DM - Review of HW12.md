

> [!exercise] Exercise
> 设 $M$ 是一个光滑的 $n$ 维流形, $A$ 是 $M$ 上的一个光滑的协变 $k$ 阶张量场. 如果 $(U, (x^i))$ 和 $(\tilde{U}, (\tilde{x}^j))$ 是 $M$ 上两个重叠的光滑坐标卡, 即 $A$ 可分别写成
>
> $$
> A = A_{i_1 \dots i_k} dx^{i_1} \otimes \dots \otimes dx^{i_k} = \tilde{A}_{j_1 \dots j_k} d\tilde{x}^{j_1} \otimes \dots \otimes d\tilde{x}^{j_k}.
>
> $$
>
> 试用 $\tilde{A}_{j_1 \dots j_k}$ 表示分量函数 $A_{i_1 \dots i_k}$.

> [!remark] Remark: 
>  $$ \frac{\partial }{\partial x^{i}}= \frac{\partial \tilde{x}^{j}}{\partial x^{i}} \frac{\partial }{\partial \tilde{x}^{j}} $$ 

> [!proofsketch] Sketch of Proof: 
> 把坐标切向量场的替换公式直接带进去就行了


> [!exercise] Exercise: 偶数维欧氏空间上的典则辛形式
> 设 $(x^1, \dots, x^n, y^1, \dots, y^n)$ 为 $\mathbb{R}^{2n}$ 中的坐标函数, 令
>
> $$
> \omega = \sum_{i=1}^n dx^i \wedge dy^i.
>
> $$
>
> 1. 计算 $d\omega$.
>
> 2. 计算 $\omega^n = \omega \wedge \dots \wedge \omega$.
>
> 3. 计算 $\iota^*\omega$:
>
>    - 设 $\iota: \mathbb{R}^{2n-2} \hookrightarrow \mathbb{R}^{2n}$ 为由 $x^n = y^n = 0$ 定义的嵌入.
>
>    - 设 $\iota: \mathbb{R}^n \hookrightarrow \mathbb{R}^{2n}$ 为由 $y^1 = \dots = y^n = 0$ 定义的嵌入.
>
>    - 设 $\iota: \mathbb{T}^n \hookrightarrow \mathbb{R}^{2n}$ 为由 $(x^i)^2 + (y^i)^2 = 1, 1 \leqslant i \leqslant n$ 定义的嵌入.
>
> 7. 给定 $f \in C^\infty(\mathbb{R}^{2n})$, 构造 $X_f$ 使得 $\iota_{X_f}\omega = df$.
>
> 8. 令 $X_f$ 如上定义. 求证: $\mathcal{L}_{X_f}f = 0$ 且 $\mathcal{L}_{X_f}\omega = 0$.

> [!remark] Remark: 
> 记住d的分次Lebniz律
>  $$ d\left(\omega \wedge \eta \right)= \left(d\omega \right)\wedge \eta + \left(-1\right)^{k\left(\omega \right)}\omega \wedge \left(d\omega \right) $$ 

> [!remark] Remark: 
> Cartan's Magic Formula
>  $$ \mathcal{L}_X \omega = i_X (d\omega) + d(i_X \omega) $$ 
> 就是$i_{X}$和$d$换一换加起来.

> [!proofsketch] Sketch of Proof: 
> 1. 全都带$d\circ d$直接变成零了.
> 2. 展开按照 $dx^{i}\wedge dy^{i}$一对一对安排, 有重复的全都消掉了, 最后就剩下 $i_1,\cdots ,i_{n}$是排列的情况, 一对一对挪不改变符号, 所以剩下 $n!$个一样的.
> 3. 利用拉回和$d$的交换性把$\iota$塞到里面就行了, $(a),(b)$都是直着来的, 直接塞进去就行. $\mathbb{T}^{n}$需要取一组角度坐标$\left(\theta ^{1},\cdots ,\theta ^{n}\right)$, 把$\iota$用坐标写出了, 剩下就是一样的计算.
> 4.  把$X_{f}$和$df$按照分量写开, 考虑两个形式在每个坐标上的取值让他们一样就行. 
> 5. Cartan魔术公式展开就行, 然后注意一下4.的结论和$d\omega = 0$.

> [!exercise] Exercise
> 在 $\mathbb{R}^3$ 上定义一个如下的 2-形式 $\omega$,
>
> $$
> \omega = x dy \wedge dz + y dz \wedge dx + z dx \wedge dy.
>
> $$
>
> - **a).** 在球面坐标 $(\rho, \varphi, \theta)$ 下计算 $\omega$, 其中
>
> $
> (x, y, z) = (\rho \sin \varphi \cos \theta, \rho \sin \varphi \sin \theta, \rho \cos \varphi).
> $
>
> - **b).** 分别在直角坐标和球坐标下计算 $d\omega$, 并验证这两个表达式表示同一个 3-形式.
>
> - **c).** 设 $\iota_{\mathbb{S}^2} : \mathbb{S}^2 \hookrightarrow \mathbb{R}^3$ 为自然嵌入, 在坐标 $(\varphi, \theta)$ 下计算拉回 $\iota_{\mathbb{S}^2}^*\omega$ (在坐标有定义的开集上).
>
> - **d).** 求证 $\iota_{\mathbb{S}^2}^*\omega$ 在 $\mathbb{S}^2$ 上处处非零.

> [!proofsketch] Sketch of Proof: 
> 1. 没什么可说的, 代入计算, 注意最后结果系数是$\rho ^{3}\sin \varphi$
>   
> 2. 算就行了. 考虑表达式两个坐标映射的切换, 注意到
>    $$ \left(x,y,z\right)\mapsto \left(\rho \sin \varphi \cos \theta ,\rho \sin \varphi \sin \theta ,\cos \varphi \right) $$
>       是$\operatorname{Id}_{\mathbb{R} ^{3}}$的坐标表示就行了, 用它拉回一下. 
> 
> 2. 用 $\left(\varphi ,\theta \right)\to \left(\rho ,\varphi ,\theta \right)$的坐标表示$\iota$拉回就行.
> 4. 上面算出来了$\sin \varphi  d\varphi \wedge d\theta$是$\iota _{\mathbb{S}^{2}}^{*2*}\omega$, 它在 $\left\{ \sin \varphi \neq 0 \right\}$上是非退化的, 注意到$\omega$是轮换对称的, 我们换一换坐标, 可以得到一些别的$\varphi^{\prime}$, 不同的$\left\{ \sin \varphi ^{\prime} \neq 0 \right\}$一块覆盖了$\mathbb{S}^{2}$.