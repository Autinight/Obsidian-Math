---
type: concept
aliases:
  - Divergence on Riemannian Manifold
technique: []
tags: []
---

### Definition

> [!definition] Definition: 
> Suppose $\left(M,g\right)$ is an oriented Riemannian $n$-manifold with or without boundary, and $d V_{g}$ is its volume form. $X$ is a smooth vector field on $M$. Then there exists a function $\operatorname{div}X$, called the **divergence of $X$**, characterized by:
>  $$ \,d \left(\iota _{X}\,d V_{g}\right)= \left(\operatorname{div}X\right)\,d V_{g} $$ 
> or equivalently
>  $$ \mathcal{L}_{X}\,d V_{g}= \left(\operatorname{div}X\right)\,d V_{g} $$ 

### Coordinate Representations

> [!proposition] Proposition: 
> Let $\left(M,g\right)$ be a Reimannian manifold with or without boundary, and let $\left(x^{i}\right)$ be any smooth local coordinates on an open set $U\subseteq M$. The coordinate representation of the divergence is 
>  $$ \operatorname{div}\left(X^{i}\frac{\partial }{\partial x^{i}}\right)= \frac{1 }{\sqrt{\det g} }\frac{\partial }{\partial x^{i}}\left(X^{i}\sqrt{\det g}\right), $$ 

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
