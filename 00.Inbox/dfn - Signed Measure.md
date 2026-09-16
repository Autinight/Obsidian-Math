---
type: definition
aliases:
- Signed Measure
technique: []
tags: []
---
> [!definition] Definition: 
> Let $\left(X, \mathcal{M}\right)$ be a measurable space. We say $\nu$ is a **signed measure** on $\left(X,\mathcal{M}\right)$, provided that $\nu$ is  a set function
> $$
> \nu : \mathcal{M}\to \left[ -\infty,\infty \right] 
> $$
> satisfying:
> 1. $\nu \left(\varnothing \right)= 0$
> 2. If $X_1,X_2,\cdots$ are pairwise disjoint, there is 
>    $$
>    \nu \left(\bigcup _{i= 1}^{\infty}X_{i}\right)= \sum _{i= 1}^{\infty}\nu \left(X_{i}\right) 
>    $$
> 3. There do not exist sets $A,B\in \mathcal{M}$ such that 
>    $$
>    \nu \left(A\right)= \infty,\quad \nu \left(B\right)= -\infty 
>    $$


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
