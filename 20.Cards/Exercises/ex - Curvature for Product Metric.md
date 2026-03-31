---
type: exercise
aliases:
  - Curvature for Product Metric
technique: []
book: RG Petersen
chapter: 3
number: "9"
category:
status: done
priority:
tags: []
---
> [!exercise] Exercise 3.4.9:
> Suppose we have two Riemannian manifolds $(M,g_M)$ and $(N,g_N)$. Then the product has a natural product metric $(M\times N,g_M+g_N)$. Let $X$ be a vector field on $M$ and $Y$ one on $N$. Show that if we regard these as vector fields on $M\times N$, then $\nabla_XY=0$. Conclude that $\operatorname{sec}(X,Y)=0$. This means that product metrics always have many curvatures that vanish.

> [!proof] Proof: 
>  $$ X_{\left(a,b\right)} = X_{a},\quad Y_{\left(c,d\right)}= Y_{d}$$ 
>   $$ \begin{aligned} 2g\left(\nabla _{X}Y,Z\right)&= X\left(g\left(Y,Z\right)\right)+ Y\left(g\left(X,Z\right)\right)-Z\left(g\left(X,Y\right)\right)\\&+ g\left(\left[ X,Y \right],Z\right)-g\left(\left[ X,Z \right],Y\right)-g\left(\left[ Y,Z \right],X\right) \end{aligned} $$ 
> Set $Z= Z_{M}+ Z_{N}$
>  $$ g\left(Y,Z_{M}\right)= 0,\quad g\left(X,Z_{M}\right)= g_{M}\left(X,Z_{M}\right),\quad g\left(X,Y\right)= 0 $$ 
> Suppose that $\varphi _{t}$, $\psi _{t}$ are the flow of $X,Y$ in $M,N$ repectively. Then 
>  $$ \Phi _{t}\left(p,q\right)= \left(\phi _{t}\left(p\right),q\right),\quad \Psi _{t}\left(p,q\right)= \left(p,\psi _{t}\left(q\right)\right) $$
> are the flow for $X,Y$ in $M\times N$ repectively. Then
>  $$ \Phi _{t_1}\circ \Psi _{t_2}\left(p,q\right)= \Psi _{t_2}\circ \Phi _{t_1}  \left(p,q\right)= \left(\varphi _{t_1}\left(p\right),\psi _{t_2}\left(q\right)\right) $$
> The flow commutes, thus $\left[ X,Y \right]= 0$. Similarly, $\left[ Y,Z_{M} \right]= 0$, we have 
>  $$ \begin{aligned} 2g\left(\nabla _{X}Y,Z_{M}\right) &= Y\left(g_{M}\left(X,Z_{M}\right)\right)-g\left(\left[ X,Z_{M} \right],Y\right) \end{aligned}$$   
> where $\left[ X,Z_{M} \right]\in \mathfrak{X}\left(M\right)$, then $g\left(\left[ X,Z_{M} \right],Y\right)= 0$. $g_{M}\left(X,Z_{M}\right)$ is independent with the coordinates for $N$, we have $Y\left(g_{M}\left(X,Z_{M}\right)\right)= 0$. Thus $g\left(\nabla _{X}Y,Z_{M}\right)= 0$. Similarly, $g\left(\nabla _{X}Y,Z_{N}\right)= 0$. Thus $g\left(\nabla _{X}Y,Z\right)= 0$. $\nabla _{X}Y= 0$.
>
>  $$ \operatorname{sec}\left(X,Y\right)= \frac{g\left(R\left(X,Y\right)Y,X\right) }{g\left(X\wedge Y,X\wedge Y\right) }$$
>  $$ \begin{aligned} R\left(X,Y\right)Y&=\nabla _{X}\nabla _{Y}Y-\nabla _{Y}\nabla _{X}Y-\nabla _{\left[ X,Y \right]} Y\\&= \nabla _{X}\left(\nabla _{Y}Y\right) \end{aligned}$$  
> Let $W= \nabla _{Y}Y$, 
>  $$ \begin{aligned} g\left(\nabla _{Y}Y,Z_{M}\right)&= 2Y\left(g\left(Y,Z_{M}\right)\right)-Z_{M}g\left(Y,Y\right)- g\left(\left[ Y,Z_{M} \right]Y\right)- g\left(\left[ Y,Z_{M} \right]\right) + g\left(\left[ Y,Y \right],Z_{M}\right)\\&= 0 \end{aligned}$$ 
> Thus $W\in \mathfrak{X}\left(N\right)$.
>  The above shows that $\nabla _{X}W= 0$. WE have $R\left(X,Y\right)Y= 0$. Thus
>  $$ \operatorname{sec}\left(X,Y\right)= 0 $$ 

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
