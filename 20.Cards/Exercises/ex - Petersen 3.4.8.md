---
type: exercise
aliases:
  - Petersen 3.4.8
technique: []
book: RG Petersen
chapter: 3
number: "8"
category:
status: done
priority:
tags: []
---

> [!exercise] Exercise 3.4.8:
> Show in analogy with proposition 3.1.5 that if $R$ is the (0,4)-curvature tensor and $\operatorname{Ric}$ the (0,2)-Ricci tensor, then
> 
> $$(\nabla^*R)(Z,X,Y)=(\nabla_X\operatorname{Ric})(Y,Z)-(\nabla_Y\operatorname{Ric})(X,Z).$$
> 
> Conclude that $\nabla^*R=0$ if $\nabla\operatorname{Ric}=0$. Then show that $\nabla^*R=0$ if and only if the (1,1) Ricci tensor satisfies:
> 
> $$(\nabla_X\operatorname{Ric})(Y)=(\nabla_Y\operatorname{Ric})(X)\text{ for all }X,Y.$$

> [!proof] Proof: 
>  $$ \begin{aligned} \left(\nabla ^{*}R\right)\left(Z,X,Y\right)&= -\sum _{i}\left(\nabla _{E_{i}}R\right)\left(E_{i},Z,X,Y\right)\\&=-\sum _{i}\left(\nabla _{E_{i}}R\right)\left(X,Y,E_{i},Z\right)\\&= \sum _{i}\left(\nabla _{X}R\right)\left(Y,E_{i},E_{i},Z\right)+ \sum _{i}\left(\nabla _{Y}R\right)\left(E_{i},X,E_{i},Z\right)\\&= \sum _{i}\left(\nabla _{X}R\right)\left(E_{i},Z,Y,E_{i}\right)- \sum _{i}\left(\nabla _{Y}R\right)\left(E_{i},X,Z,E_{i}\right)\\&= \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{X}R\right)\right)\left(Z,Y\right)- \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{Y}R\right)\right)\left(X,Z\right)\end{aligned}$$ 
>  $$ \operatorname{Rm}\left(X,Y,Z,W\right)= g\left(R\left(X,Y\right)Z,W\right)$$ 
>  $$ Rm= R^{\flat ^{1}_{4}} $$ 
>   $$ \operatorname{Ric}= \operatorname{tr}_{1}^{1}R $$
>  $$ \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\operatorname{Rm}\right)_{jk}=g^{il} R_{ijkl} $$ 
>  $$ \left(\operatorname{Ric}\right)_{jk}= \operatorname{tr}_{1}^{1}R = R_{ijk}^{i}= g^{il}R_{ijkl} $$ 
> Thus
>  $$ \left(\operatorname{Ric}\right)= \operatorname{tr}_{1}^{1}\operatorname{Rm}^{\sharp _{4}^{1}}= \left(\operatorname{tr}_{g}\right)_{4}^{1}\operatorname{Rm}$$ 
>   $$ \left(\nabla _{X}\operatorname{Ric}\right)= \left(\nabla _{X}\left(\operatorname{tr}_{g}\right)_{4}^{1}R\right)= \left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{X}R\right)$$ 
> Thus
>  $$ \begin{aligned} \left(\nabla ^{*}R\right)\left(Z,X,Y\right)&= \left(\nabla _{X}\operatorname{Ric}\right)\left(Z,Y\right)- \left(\nabla _{Y}\operatorname{Ric}\right)\left(X,Z\right)\\&= \left(\nabla _{X}\operatorname{Ric}\right)\left(Y,Z\right)-\left(\nabla _{Y}\operatorname{Ric}\right)\left(X,Z\right) \end{aligned} $$ 
>  $$ \left(\left(\nabla _{X}\operatorname{Ric}\right)\left(Y\right)\right)^{\flat} \left(Z\right)= \left(\left(\nabla _{Y}\operatorname{Ric}\right)\left(X\right)\right)^{\flat}\left(Z\right)$$ 
>  $$ \left(\nabla _{X}\operatorname{Ric}\left(Y\right)\right)= \left(\nabla _{Y}\operatorname{Ric}\left(X\right)\right) $$ 

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
