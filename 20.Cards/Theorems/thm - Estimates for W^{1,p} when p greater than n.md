---
type: theorem
aliases: 
- Estimates for W^{1,p} when p greater than n
technique: []
---

> [!theorem] Theorem: 
> Let $U$ be a bounded open subsets of $\mathbb{R} ^{n}$, and suppose that $\partial U$ is $C^{1}$. Assume $p< n< \infty$ and $u \in W^{1,p}\left(U\right)$. Then $u$ has a version $u^{*}\in C^{0,\gamma }\left(\overline{U}\right)$ , for $\gamma = 1-\frac{n }{p }$ with the estimates 
>  $$ \left\| u^{*} \right\|_{C^{0,\gamma }\left(\overline{U}\right)}\le C\left\| u \right\|_{W^{1,p}\left(U\right)} $$
> The constant $C$ depends only on $p,n$ and $U$.

> [!proofsketch] Sketch of Proof: 
> 把$u$紧支地[[thm - Extension Theorem in W^{1,p}|延拓]]到$\mathbb{R} ^{n}$上$\bar{u}$, 并通过一列紧致光滑函数$\left\{ u_{m} \right\}$[[thm - Local Approximation by Smooth Functions in Sobolev Space|逼近]]. [[thm - Morrey's Inequality]]保证了这一列光滑函数在Hölder空间中也逼近一个函数$u^{*}$, 从而是$\bar{u}$的一个version.

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

