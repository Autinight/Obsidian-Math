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
> 1. Show that the new connection and $(1,3)$-curvature tensor remain the same.
> 2. Show that $\operatorname{sec}$, $\operatorname{scal}$, and $\mathcal{R}$ all get multiplied by $\lambda^{-2}$.
> 3. Show that $\operatorname{Ric}$ as a $(1,1)$-tensor is multiplied by $\lambda^{-2}$.
> 4. Show that $\operatorname{Ric}$ as a $(0,2)$-tensor is unchanged.

> [!proof] Proof: 
>  $$ \begin{aligned} g\left(\nabla _{X}^{g}Y,Z\right)&= X\left(g\left(Y,Z\right)\right)+ Y\left(g\left(X,Z\right)\right)-Z\left(g\left(X,Y\right)\right)\\&-g\left(\left[ X,Z \right],Y\right)-g\left(\left[ Y,Z \right],X\right)+ g\left(\left[ X,Y \right],Z\right) \end{aligned} $$ 
> We have
>  $$  \left(\lambda ^{2}g\right)\left(\nabla ^{\lambda ^{2}g}_{X}Y,Z\right)= \lambda ^{2}g\left(\nabla _{X}^{g}Y,Z\right)  $$ 
> Thus $\nabla _{X}^{\lambda ^{2}g}= \nabla _{X}^{g}$. Since $\left(1,3\right)$-curvature is determined by the connetction, thus remain the same.

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
