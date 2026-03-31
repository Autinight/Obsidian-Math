---
type: exercise
aliases:
  - Constant Curvature has Parallel Curvature Tensor
technique: []
book: RG Petersen
chapter: 3
number: "6"
category:
status: done
priority:
tags: []
---
> [!exercise] Exercise 3.4.6:
> Show that a Riemannian manifold with constant curvature has parallel curvature tensor.

> [!remark] Remark: 
> 根据Riemann,1854. $x\wedge y\left(z\right)$是$\operatorname{sec}\left(\pi \right)\equiv 1$的曲率张量.

> [!proof] Proof: 
> We need to show that 
>  $$ \nabla R = 0 $$
>  $$ \begin{aligned} \left(\nabla R\right)\left(X,Y,Z,W\right)&= \nabla _{X}R\left(Y,Z,W\right)\\&=\nabla _{X}\left(R\left(Y,Z\right)W\right)-R\left(\nabla _{X}Y,Z\right)W-R\left(Y,\nabla _{X}Z\right)W-R\left(Y,Z\right)\nabla _{X}W \\&= \nabla _{X}\left(-k\left(Y\wedge Z\right)W\right)-R\left(-k\left(\nabla _{X}Y\wedge Z\right)\left(W\right)\right)-R\left(-k\left(Y\wedge \nabla _{X}Z\right)\left(W\right)\right)\\&+ k\left(Y\wedge X\right)\left(\nabla _{X}W\right)\\&= -k\nabla _{X}\left(\left(Y\wedge Z\right)W\right)+ k \left(\nabla _{X}Y\wedge Z\right)\left(W\right)+ k\left(Y\wedge \nabla _{X}Z\right)\left(W\right)+ k\left(Y\wedge X\left(\nabla _{X}W\right)\right)\end{aligned} $$  
>  $$ R\left(X,Y\right)Z= -k\left(X\wedge Y\right)\left(Z\right) $$ 
> Only need to show that 
>  $$- \nabla _{X}\left(\left(Y\wedge Z\right)W\right)+ \left(\nabla _{X}Y\wedge Z\right)\left(W\right)+ \left(Y\wedge \nabla _{X}Z\right)\left(W\right)+ \left(Y\wedge Z\right)\left(\nabla _{X}W\right)= 0 $$ 
>
>  $$ \left(x\wedge y\right)\left(v\right)= g\left(x,v\right)y-g\left(y,v\right)x $$ 
>  $$ \left(Y\wedge Z\right)\left(W\right)= g\left(Y,W\right)Z-g\left(Z,W\right)Y $$
>  $$ \left(\nabla _{X}Y\wedge Z\right)\left(W\right)= g\left(\nabla _{X}Y,W\right)Z-g\left(Z,W\right)\nabla _{X}Y $$
>  $$ \left(Y\wedge \nabla _{X}Z\right)\left(W\right)= g\left(Y,W\right)\nabla _{X}Z-g\left(\nabla _{X}Z,W\right)Y $$
>  $$ \left(Y\wedge Z\right)\left(\nabla _{X}W\right)= g\left(Y,\nabla _{X}W\right)Z- g\left(Z,\nabla _{X}W\right)Y$$    
> Sum over the three, RHS is 
>  $$ \left(\nabla _{X}\left(g\left(Y,W\right)\right)Z\right)-\left(\nabla _{X}\left(g\left(Z,W\right)Y\right)\right)+ g\left(Y,W\right)\nabla _{X}Z-g\left(Z,W\right)\nabla _{X}Y $$ 
>  $$ \begin{aligned} \nabla _{X}\left(\left(Y\wedge Z\right)\left(W\right)\right)&= \nabla _{X}\left(g\left(Y,W\right)\left(Z\right)-g\left(Z,W\right)\left(Y\right)\right)\\&= \left(\nabla _{X}g\left(Y,W\right)\right)\left(Z\right)+ g\left(Y,W\right)\nabla _{X}Z - \left(\nabla _{X}g\left(Z,W\right)\right)\left(Y\right)-g\left(Z,W\right)\left(Y\right)\end{aligned} $$ 
> which are the same as the summation of the above three.
>
> 

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
