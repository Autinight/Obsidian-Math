---
type: exercise
aliases:
  - Parallel Ricci Tensor has Constant Scalar Curvature
technique: []
book: RG Petersen
chapter: 3
number: "7"
category:
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Show that a Riemannian manifold with parallel Ricci tensor has constant scalar curvature.
 
> [!proof] Proof: 
> If 
>  $$ \nabla \operatorname{Ric}= 0 $$ 
> Then 
>  $$ \begin{aligned} \nabla \operatorname{scal}&= \nabla \left(\operatorname{tr}\left(\operatorname{Ric}\right)\right)\\&= \operatorname{tr}\left(\nabla \operatorname{Ric}\right)\\&= 0 \end{aligned} $$ 
> Thus
>  $$ \operatorname{scal}= c $$ 




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
