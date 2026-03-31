---
type: definition
aliases: 
- Riemannian Metric
technique: []
tags: []
---

> [!definition] Definition:
> Let $M$ be a smooth manifold. A **Riemannian metric** on $M$ is a smooth covariant 2-tensor field $g \in \mathcal{T}^2(M)$ whose value $g_p$ at each $p \in M$ is an inner product on $T_pM$.

> [!remark] Remark: 
> Thus $g$ is a symmetric 2-tensor field that is positive definite in the sense that $g_p(v,v) \ge 0$ for each $p \in M$ and each $v \in T_pM$, with equality if and only if $v = 0$.




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
