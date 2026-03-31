---
type: exercise
aliases:
  - Local Gradient Field and Self-adjoint Connection
technique: []
book: RG Petersen
chapter: 2
number: "11"
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Show that a vector field $X$ on a Riemannian manifold is locally a gradient field if and only if $Z\mapsto \nabla _{Z}X$ is self-adjoint.


> [!proof] ProofIf
> **(1)**
>If
>  $$ X= \operatorname{grad}f $$
>  $$ \begin{aligned}\left< \nabla _{Y}X,Z \right>=  \left< \nabla _{Y}\left(\operatorname{grad}f\right),Z \right>_{g}&= \nabla _{Y}\left(\left< \operatorname{grad}f,Z \right>\right)-g\left(\operatorname{grad}f,\nabla _{Y}Z\right)\\&= D_{Y}\left(\,d f\left(Z\right)\right)-\,d f\left(\nabla _{Y}Z\right) \end{aligned} $$    
> 
>   $$ \begin{aligned} \left< Y,\nabla _{Z}X \right>_{g}&= \left< Y,\nabla _{Z}\operatorname{grad}f \right>_{g}\\&= D_{Z}\left< Y,\operatorname{grad}f \right>-\left< \nabla _{Z}Y,\operatorname{grad}f \right>\\&= D_{Z}\left(\,d f\left(Y\right)\right)-\,d f\left(\nabla _{Z}Y\right) \end{aligned} $$ 
> 
>  $$ \left< \nabla _{Y}X,Z \right>-\left< Y,\nabla _{Z}X \right>= D_{Y}\left(df\left(Z\right)\right)-D_{Z}\left(df\left(Y\right)\right)-df\left(\left[ Y,Z \right]\right)= d^{2}f\left(Y,Z\right)= 0 $$ 
> 
> **(2)**
>  If 
>  $$ \left< \nabla _{Y}X,Z \right>= \left< Y,\nabla _{Z}X \right> $$ 
>  
> 
>  $$ X= \operatorname{grad}f\iff X^{\sharp }= df $$
> Since closed form is locally exact, we only need to show that $d\left(X^{\sharp }\right)= 0$,
>  $$ \begin{aligned} d\left(X^{\sharp }\right)\left(Y,Z\right)&= D_{Y}\left(X^{\sharp }\left(Z\right)\right)-D_{Z}\left(X^{\sharp }\left(Y\right)\right)-X^{\sharp }\left(\left[ Y,Z \right]\right)\\&= D_{Y}\left(\left< X,Z \right>\right)-D_{Z}\left(\left< X,Y \right>\right)-\left< X,\left[ Y,Z \right] \right>\\&= \left< \nabla _{Y}X,Z \right>+ \left< X,\nabla _{Y}Z \right>-\left< \nabla _{Z}X,Y \right>-\left< X,\nabla _{Z}Y \right>-\left< X,\left[ Y,Z \right] \right>\\&= \left< X,\nabla _{Y}Z-\nabla _{Z}Y-\left[ Y,Z \right] \right>\\&= \left< X,T\left(Y,Z\right) \right>= 0 \end{aligned}$$ 


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
