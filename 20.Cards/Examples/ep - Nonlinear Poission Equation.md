---
type: example
aliases: 
- Nonlinear Poission Equation
technique: []
---

> [!proposition] Proposition: 
> Assume we are given a smooth function $f:\mathbb{R} \to \mathbb{R}$ and define its antiderivative $F\left(z\right)= \int _{0}^{z}f\left(y\right)\,d y$. Then the [[First Variation, Euler-Lagrange equation|Euler-Largrange equation]] associated with the functional
>  $$ I\left[ w \right]:= \int _{U}\frac{1}{2}\left| Dw \right|^{2}-F\left(w\right)\,d x  $$
> is the nonlinear Poission equation
>  $$ -\Delta u= f\left(u\right)\quad \text{in }U $$   


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

