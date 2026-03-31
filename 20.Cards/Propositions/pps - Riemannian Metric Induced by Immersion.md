---
type: proposition
aliases: 
- Riemannian Metric Induced by Immersion
technique: []
tags: []
---


> [!proposition] Proposition: 
> Suppose that we have an immersion $F:M\to N$, where $\left(N,g_{N}\right)$ is a Riemannian manifold. This leads to a pull-back Riemannian metric $g_{M}= F^{*}g_{N}$ on $M$, where
>  $$ g_{M}\left(v,w\right)= g_{N}\left(DF\left(v\right), DF\left(w\right)\right) .$$ 
> It is an inner product as $DF\left(v\right)= 0$ only when $v= 0$.


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
