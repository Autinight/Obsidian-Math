---
type: concept
aliases: 
- Gradient on Riemannian Manifold
technique: []
tags: []
---

> [!definition] Definition: 
> If $g$ is a Riemannian metric on $M$ and $f:M\to \mathbb{R}$ is a smooth function, the **gradient of $f$** is the vector field $\operatorname{grad}f= \left(df\right)^{\sharp }$ obtained from $df$ by raising an index, which is characterized by 
>  $$ df_{p}\left(w\right)=\left< \operatorname{grad}f|_{p},w \right>\quad \text{for all }p\in M,w\in T_{p}M $$
> and has the local basis expression
>  $$ \operatorname{grad}f= \left(g^{ij}E_{i}f\right)E_{j} $$   



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
