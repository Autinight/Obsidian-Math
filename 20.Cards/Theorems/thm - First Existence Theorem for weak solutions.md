---
type: theorem
aliases: 
- First Existence Theorem for weak solutions
technique: []
---

> [!remark] Remark: 
> We assume that 
>  $$ a^{ij},b^{j},c\in L^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and 
>  $$ f\in L^{2}\left(U\right) $$  

> [!theorem] Theorem: 
> There is a number $\gamma \ge 0$ such that for each 
>  $$ \mu \ge \gamma$$
> and each function 
>  $$ f\in L^{2}\left(U\right) $$
> there exists a unique weak solution $u\in H_{0}^{1}\left(U\right)$ of the boundary-value problem
>  $$ \begin{cases} Lu+ \mu u= f,& \text{in }U\\u= 0,&\text{on }\partial U \end{cases}  $$   

> [!proofsketch] Sketch of Proof: 
> [[thm - Energy Estimates|上回书]]说道, $L$这个算子虽然自己不能抑制$u$在系统中的能量$\left\| u \right\|_{H^{2}}$, 但是给它配上一些质量$\left\| u \right\|_{L^{2}}$就做得到了, 因此我们给它做一点''配重''$L_{\mu }:= L+ \mu u$, 这个算子就具有强制性了. 根据[[thm - Lax-Milgram Theorem]]. 实际上我们做成了一个线性同构$L_{\gamma }: H_{0}^{1}\to H^{-1}$. 解方程就是找$L_{\gamma }u= f$, $f\in L^{2}$这样一个水平集中的元素, 自然是存在的.

### Mapping $H_{0}^{1}$ to $H^{-1}$

> [!theorem] Theorem: 
> For all 
>  $$ f^{i}\in L^{2}\left(U\right)\quad \left(i= 0,\cdots ,n\right) $$
> there eixsts a unique weak solution $u$ of the PDE
>  $$ \begin{cases} Lu+ \mu u= f^{0}-\sum _{i= 1}^{n}f_{x_{i}}^{i}&\text{in }U\\u= 0,& \text{on }\partial U \end{cases}  $$
> In particular, we deduce that the mapping
>  $$ L_{\mu }= L+ \mu I: H_{0}^{1}\left(U\right)\to H^{-1} \left(U\right)\quad \left(\mu \ge \gamma \right) $$
> is an isomorphism,   

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

