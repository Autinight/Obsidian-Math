---
type: proposition
aliases:
- Several Representations of Hess
technique: []
tags: []
---

> [!proposition] Proposition: 
> -  $$ \operatorname{Hess}f= \nabla ^{2}f= \nabla \left(df\right) $$
>    $$ \begin{aligned} \begin{aligned} \operatorname{Hess}f\left(X,Y\right)&= \left(\nabla _{X}\,d f\right)\left(Y\right)\\&= X\left(Y\left(f\right)\right)-\left(\nabla _{X}Y\right)\left(f\right)\\&= \left< \nabla _{X}\operatorname{grad}f,Y \right>_{g} \end{aligned}\end{aligned} $$
> -  $$ 2\operatorname{Hess}f= 2\mathcal{L}_{\operatorname{grad}f} g$$ 

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
