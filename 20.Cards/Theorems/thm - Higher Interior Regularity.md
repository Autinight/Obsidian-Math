---
type: theorem
aliases: 
- Higher Interior Regularity
technique: []
---

> [!theorem] Theorem: 
> Let $m$ be a nonnegative integer, and assume 
>  $$ a^{ij},b^{i},c\in C^{m+ 1}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and
>  $$ f\in H^{m}\left(U\right) $$
> Suppose $u\in H^{1}\left(U\right)$ is a weak solution of the elliptic PDE
>  $$ Lu= f \quad \text{in }U $$
> Then 
>  $$ u\in H_{loc}^{m+ 2}\left(U\right) $$
> and for each $V\subset \subset U$ we have the estimate
>  $$ \left\| u \right\|_{H^{m+ 2}\left(V\right)}\le C\left(\left\| f \right\|_{H^{m}\left(U\right)}+ \left\| u \right\|_{L^{2}\left(U\right)}\right) $$ 

> [!proofsketch] Sketch of Proof: 
> - 对$m$归纳, 设
>    $$ a^{ij},b^{j},c\in C^{m+ 2}\left(U\right) $$
>    $$ f\in H^{m+ 1}\left(U\right) $$
>   且$u\in H^{1}\left(U\right)$是$Lu= f$在$U$上的弱解. 由归纳假设
>    $$ u\in H_{loc}^{m+ 2}\left(U\right) $$
>   并且有估计
>    $$ \left\| u \right\|_{H^{m+ 2}\left(W\right)} \le C\left(\left\| f \right\|_{H^{m}\left(U\right)}+ \left\| u \right\|_{L^{2}\left(U\right)}\right)$$
>   $m= 0$时就是定理[[thm - Interior H^2-regularity]].
> - 想法是, 如果我们不想从底层来重构证明, 那么能够本质提升正则性的, 只有源头的$m= 0$的那一步. 于是我们尝试将$D^{\alpha }u$变成是某个方程的$H^{1}\left(W\right)$弱解, 然后得到$D^{\alpha }u\in H_{loc}^{2}\left(V\right)$对于$V\subset \subset W$, 从而规避掉复杂的技术性讨论, 将所有困难都藏进归纳假设里面.
> - 不出意外地, 能为$u$带来导数的只有与其配对的测试函数$v$, 我们让$v:= \left(-1\right)^{\left| \alpha  \right| }D^{\alpha }\tilde{v}$, 其中$\tilde{v}\in C_{c}^{\infty}\left(W\right)$. 那么$D^{\alpha }$就通过分部积分转换到$a^{ij}u_{x_{i}}, b^{i}u_{x_{i}}$和$cu$这些项身上.  用Lebniz律拆开, 我们能得到完整的$\left(a^{ij}D^{\alpha }u_{x_{i}}\right)_{x_{j}}$, $b^{i}D^{\alpha }u_{x_{i}}$, $cD^{\alpha }u$, 和一大堆低阶的项. 由于是低一阶的项, 它们的可积性全都被归纳假设给囊括了, 我们一并堆到等式右面去, 与$D^{\alpha }f$一起写成一个$\tilde{f}$. 它们正好是$L^{2}$可积的. 并且$\left\| \tilde{f}\right\|_{L^{2}\left(W\right)}\le C\left(\left\| f \right\|_{H^{m+ 1}\left(W\right)}+ \left\| u \right\|_{H^{m+ 2}\left(W\right)}\right)$, 而$\left\| u \right\|_{H^{m+ 2}\left(W\right)}$又是被$\left\| f \right\|_{H^{m}\left(U\right)}$和$\left\| u \right\|_{L^{2}\left(U\right)}$控制的, 就得到了最终的估计.



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

