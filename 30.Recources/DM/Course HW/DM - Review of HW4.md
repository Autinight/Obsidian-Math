

> [!exercise] Exercise: 光滑流形的切丛
> 光滑流形 $M$ 的切丛定义为
>
> $$
> TM = \sqcup_{p \in M} T_p M,
>
> $$
>
> 其上有自然投影映射
>
> $$
> \begin{aligned}
>
> \pi: TM &\to M \\
>
> (p, X_p) &\mapsto p
>
> \end{aligned}
>
> $$
>
> - **a).** 求证 $\pi: TM \to M$ 光滑且对任意的 $p \in M$ 和 $X_p \in T_p M$, $(d\pi)_{(p,X_p)}$ 为满射;
>
> - **b).** 求证 $TS^1 \cong S^1 \times \mathbb{R}$;
>
> - **c).** 求证 $TM$ 是可定向的.


> [!proofsketch] Sketch of Proof: 
> 1. 坐标写出来就行了
> 2. 由于$S^{1}$有李群结构, 其李代数$\mathfrak{g}= T_{e}S^{1}\simeq \mathbb{R}$. 任何李群都是可平行化的, 具体地,我们有自然地同构
>  $$ \Phi :S^{1}\times \mathfrak{g}\to TS $$
>  $$ \Phi \left(g,\xi \right)= \left(dL_{g}\right)_{e}\left(\xi \right) $$
> 由李群的性质可知,$\Phi$是光滑的,并且对于固定的$g$, $\left(dL_{g}\right)_{e}$是线性同构. 因此$\Phi$给出了向量丛同构$S^{1}\times \mathfrak{g}\simeq TS$,结合$\mathfrak{g}\simeq \mathbb{R}$, 得到$TS^{1}\simeq S^{1}\times \mathbb{R}$
> 3. 只需要考察任意两个图册都是定向相容的, 这是因为切丛的过渡映射是普通的过度映射$\varphi _{\alpha \beta }$配合它的$Jaocbi$, 由于后者是线性的, 坐标变换写成$\left(x_{\alpha },v_{\alpha }\right)\mapsto \left(x_{\beta }\left(x_{\alpha }\right), v_{\beta }\left(x_{\alpha },v_{\alpha }\right)\right)$, 由于$x_{\beta }$跟$v_{\alpha }$没关系,$\det$就是 $\frac{\partial x_{\beta }}{\partial x_{\alpha }}$和$\frac{\partial v_{\beta }}{\partial v_{\alpha }}$,  由于$v_{\beta }$关于$v_{\alpha }$是线性的, 微分就是过渡映射的微分,所以原来的det就是微分的det的平方.

> [!exercise] Exercise
> - **a).** 求证 $\det: \mathrm{Gl}(n, \mathbb{R}) \to \mathbb{R}$ 是淹没;
>
> - **b).** 求证映射 $f(X) = X^T X$ 是常秩映射.

> [!remark] Remark: 
> $\det$公式 , 先证明$d \det _{I}$, 计算
>  $$ \frac{\mathrm{d}}{\mathrm{d}t}\det \left(I+ tX\right)= \frac{\mathrm{d}}{\mathrm{d}t} \left(1+ t\lambda _{i}\right)^{2}= \operatorname{tr}\left(X\right) $$
> 进而
>  $$ \begin{aligned} \frac{\mathrm{d}}{\mathrm{d}t}\det \left(A+ tX\right)&= \frac{\mathrm{d}}{\mathrm{d}t}\det A \det \left(I+ tA^{-1} X\right)\\&= \det A \operatorname{tr}\left(A^{-1} X\right)\end{aligned} $$  

> [!proofsketch] Sketch of Proof: 
> 1. 取$X= kA$
> 2. 按照定义直接算出来微分$df_{X}\left(H\right)= X^{\top}H+ H^{\top}X$.
> 说明$df_{X}$是满射就行,构造 $H= \frac{1}{2}\left(X^{\top}\right)^{-1} A$可以造出来任何$A$.

> [!exercise] Exercise: 光滑流形的乘积
> 设 $M_i, N_i \ (i=1,2)$ 是光滑流形.
>
> - **a).** 求证 $M_1 \times M_2$ 可由 $M_1, M_2$ 的光滑结构诱导成一个光滑流形;
>
> - **b).** 计算切空间 $T_{(p_1, p_2)}(M_1 \times M_2)$;
>
> - **c).** $f_1: M_1 \to N_1, f_2: M_2 \to N_2$ 是两个光滑映射, 计算 $d_{(p_1, p_2)}(f_1 \times f_2)$.

> [!proofsketch] Sketch of Proof: 
> 1. 取积空间拓扑,我们把坐标开集撑起来, 坐标映射乘起来, 过渡映射也会被乘起来,矩形的开集族构成了覆盖.
> 2. 把坐标切向量都当成是偏导数,得到新的一组切向量.