---
type: theorem
aliases:
  - Boundary H^2-regularity
technique: []
---

> [!theorem] Theorem: 
> Assume 
>  $$ a^{ij}\in C^{1}\left(\overline{U}\right),b^{i},c\in L^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and $f\in L^{2}\left(U\right)$
> Suppose that $u\in H_{0}^{1}\left(U\right)$ is a weak solution of the elliptic boundary-value problem
>  $$ \begin{cases} Lu= f,&\text{in }U\\ u= 0,& \text{on }\partial U \end{cases}  $$
> Assume finally
>  $$ \partial U\text{ is }C^{2} $$
> Then 
>  $$ u\in H^{2}\left(U\right) $$
> and we have the estimate
>  $$ \left\| u \right\|_{H^{2}\left(U\right)}\le C\left(\left\| f \right\|_{L^{2}\left(U\right)}+ \left\| u \right\|_{L^{2}\left(U\right)}\right)  $$
> The constant $C$ depending only on $U$ and the coefficients of $L$.     

> [!proofsketch] Sketch of Proof: 
> - 依旧利用$\partial U$的紧性, 可以局部地单独处理每一小块边界. 再结合内部的正则性就能完成说明.
> - 还是先在上半球面$U= B^{0}\left(0,1\right)\cap \mathbb{R} _{+ }^{n}$上完成估计, 然后再拉回到一般的边界坐标卡上. 这样可以通过仅仅失去一个方向上的可计算性, 来忽略边界的影响. 而这样的代价是我们堪堪可以接受的..
> - 我们依旧通过估计$Du$的差商$D_{k}^{h}Du$来导出正则性. 只不过略微区别于在[[thm - Interior H^2-regularity]]做的那样, 我们无法给出第$n$个坐标方向, 即边界的法向的差商. 但好在前$n-1$个方向的差商估计依旧是可以通过微调[[thm - Difference Quotients and Weak Derivatives|Difference Quotient]]引理的内容做到, 而且估计方法与之前处理内正则性几乎完全一致. 也就是说, 我们不能通过这种方式得到正则性的唯一的项就是$u_{x_{n}x_{n}}$. 但是由于我们知道了其它一切信息, $Lu= f$以及$a^{nn}> 0$强迫了这个线性泛函$u_{x_{n}x_{n}}$一定是$L^{2}$函数.
> - 做完了半球上的估计, 就可以拉回到一般的边界坐标卡上了. 这里麻烦的就是我们相当于要拉回整个方程, 从而涉及到一些二次型的坐标变换. 选择保体积的坐标映射($\left| \det D\Phi  \right|= 1$)会好算一些. 同时也相当于要对算子的椭圆性做拉回的坐标变换, 验证拉回后依旧是椭圆的. 这个环节会涉及到很多繁复的计算.
> - 最后选取有限个覆盖了边界的边界坐标卡, 以及一个大的内部开集, 把估计拼起来就可以了.

> [!note] Note: 
> 对于边界的处理, 大体就是**切向靠积分, 法向靠方程**.

> [!note] Note: 关于边界的光滑性
> **为什么要求$\partial U$是$C^{2}$的?**: 由于对方程的拉回会给系数填上坐标映射的导数$D \Phi$项, 为了确保新系数也是$C^{1}$的, $\Phi$必须是至少$C^{2}$的

> [!proof] Proof: 
> ([Evans, 2010, p. 315](zotero://select/library/items/XLIU5F2D)) ([pdf](zotero://open-pdf/library/items/ASRQX4Y6?page=332))
> 
> 坐标变换的部分可以用矩阵看得清楚一些, 我们只观察二阶项. 设$A:= A\left(x\right):= \left(a^{ij}\left(x\right)\right)_{ij}$, 那么
>  $$ \sum _{i,j= 1}^{n}a^{ij}\left(x\right)u_{x_{i}}v_{x_{j}}= \left(Du\right)A\left(Dv\right)^{\top} $$
> 令$u^{\prime}\left(y\right)= u\left(\Psi \left(y\right)\right)$, 则$Du^{\prime} = \left(Du\circ \Psi\right)\cdot \left(D\Psi \right)$, 令$v\left(x\right)= v^{\prime} \left(\Phi \left(x\right)\right)$, 则$v^{\prime}\left(y\right) = v\left(\Psi \left(y\right)\right)$, 从而$Dv^{\prime} = \left(Dv\circ \Psi\right)\cdot \left(D\Psi \right)$. 令$\widetilde{A}= \left(\left(D\Phi  \right)\left(A\circ \Psi\right)\left(D\Phi  ^{\top}\right)\left| \det  D\Psi \right|\right)$. 则考虑$\widetilde{A}$对应双线性型$\widetilde{B}$, $\widetilde{B}\left[ u^{\prime} ,v^{\prime}  \right]$的二阶部分就等于
>  $$ \begin{aligned} &\int \left(Du^{\prime} \right)\widetilde{A}\left(Dv^{\prime} \right)^{\top}dy\\&= \int \Psi ^{*}\left(\left(Du\right)\left(D\Psi \right)\left(D\Phi \right)A\left(D\Phi \right)^{\top}\left(D\Psi \right)^{\top}\left(Dv\right)^{\top}\right)\Psi ^{*}\left(dx\right)\\&=\int \left(Du\right)\left(D\Psi \right)\left(D\Phi \right)A\left(D\Phi \right)^{\top}\left(D\Psi \right)^{\top}\left(Dv\right)^{\top}   dx \\&= \int \left(Du\right)A\left(Dv\right)^{\top}dx\end{aligned} $$
> 与$B\left[ u,v \right]$的二阶部分一致.   并且定义的$\widetilde{A}$与$A$有相同的特征值

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                return p.aliases && dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```

