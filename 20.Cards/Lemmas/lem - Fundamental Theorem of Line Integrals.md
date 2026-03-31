---
type: lemma
aliases: 
- Fundamental Theorem of Line Integrals
technique: []
tags: []
---

> [!lemma] Lemma: 
> If a vector field **F** is a gradient field, meaning there exists a scalar potential function $f$ with
> $$
> \mathbf F = \nabla f,
> $$
> then for any smooth curve $C$ that starts at point $A$ and ends at point $B$, 
> $$
> f\left(B\right)-f\left(A\right)= \int _{C}\mathbf{F}\cdot \,d \mathbf{r}
> $$
> If $C$ is parametrized by $\gamma\left(t\right):\left[ a,b\right]\to C$. Then 
>  $$ \begin{aligned} f\left(B\right)-f\left(A\right)&= \int _{a}^{b}\mathbf{F}\left(\gamma \left(t\right)\right)\cdot \gamma ^{\prime} \left(t\right)\,d t\\&=  \int _{a}^{b}\nabla f\left(\gamma \left(t\right)\right)\cdot \gamma ^{\prime} \left(t\right)\,d t\end{aligned} $$
> Specifically,
>  $$ \left| f\left(B\right)-f\left(A\right) \right|\le \left| \gamma ^{\prime} \left(t\right) \right|\int _{a}^{b}\left| \nabla f\left(\gamma \left(t\right)\right) \right|\,d t    $$ 





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
