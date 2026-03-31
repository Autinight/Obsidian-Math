---
type: theorem
aliases:
  - Estimates for W^{1,p} when p less than n
technique: []
---

> [!theorem] Theorem: 
> Let $U$ be a bounded open subset of $\mathbb{R} ^{n}$, and suppose $\partial U$ is $C^{1}$. Assume $1\le p< n$, then for $u \in W^{1,p}\left(U\right)$. Then $u\in L^{p^{*}}\left(U\right)$, with estimates 
>  $$ \left\| u \right\|_{L^{p^{*}}\left(U\right)}\le C\left\| u \right\|_{W^{1,p}\left(U\right)} $$
> the constatn $C$ depend only on $n$, $p$ and $U$.

> [!proofsketch] Sketch of Proof: 
> 将$u$紧支地[[thm - Extension Theorem in W^{1,p}|延拓]]到 $\mathbb{R} ^{n}$上, 再用紧致光滑函数[[thm - Local Approximation by Smooth Functions in Sobolev Space|逼近]], 以使用不等式[[thm - Gagliardo-Nirenberg-Sobolev Inequality]].

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

