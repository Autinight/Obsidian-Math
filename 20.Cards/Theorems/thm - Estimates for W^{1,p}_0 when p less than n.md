---
type: theorem
aliases: 
- Estimates for W^{1,p}_0 when p less than n
technique: []
---

> [!theorem] Theorem: 
> Assume $U$ is a bounded open subset of $\mathbb{R} ^{n}$. Suppose $u\in W^{1,p}_{0}\left(U\right)$ for some $1\le p< n$. Then we have the estimate 
>  $$ \left\| u \right\|_{L^{q}\left(U\right)}\le C\left\| Du \right\|_{L^{p}\left(U\right)} $$
> for each $q\in \left[ 1,p^{*} \right]$, the constant $C$ depend only on $p,q,n$ and $U$.

> [!proofsketch] Sketch of Proof: 
> 与[[thm - Estimates for W^{1,p} when p less than n]]的唯一区别是, 有了trace-zero的性质, 我们不必付出$\left\| u \right\|_{L^{p}\left(U\right)}$的代价去依赖[[thm - Extension Theorem in W^{1,p}]], 而是可以免费地延拓到$\mathbb{R} ^{n}$上.


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

