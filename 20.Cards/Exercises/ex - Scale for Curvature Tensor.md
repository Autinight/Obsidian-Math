---
type: exercise
aliases:
  - Scale for Curvature Tensor
technique: []
book: RG Petersen
chapter: 3
number: "18"
category:
status: todo
priority:
tags: []
---
> [!exercise] Exercise 3.4.18:
> Consider a Riemannian metric $(M,g)$ and **scale** the metric by multiplying it by a number $\lambda^2$. This creates a new Riemannian manifold $(M,\lambda^2g)$.
> 17. Show that the new connection and $(1,3)$-curvature tensor remain the same.
> 18. Show that $\operatorname{sec}$, $\operatorname{scal}$, and $\mathcal{R}$ all get multiplied by $\lambda^{-2}$.
> 19. Show that $\operatorname{Ric}$ as a $(1,1)$-tensor is multiplied by $\lambda^{-2}$.
> 20. Show that $\operatorname{Ric}$ as a $(0,2)$-tensor is unchanged.

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
