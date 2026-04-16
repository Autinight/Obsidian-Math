---
type: exercise
aliases:
- Conformally Equivalent Curvature
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
`

`

`

`

`



 $$ \widetilde{\nabla}_{\partial _{i}}\widetilde{\nabla}_{\partial _{j}}\partial _{k}= \nabla _{\partial _{i}}\left(\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)+ \left(\partial _{i}\psi \right)\left(\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)+ \left(D_{\widetilde{\nabla}_{\partial j}\partial _{k}} \psi \right)\partial _{i}-g\left(\partial _{i},\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)\nabla \psi  $$ 

 $$ \widetilde{\nabla}_{\partial _{j}}\partial _{k}= \nabla _{\partial _{j}}\partial _{k}+ \left(\partial _{j}\psi \right)\partial _{k}+ \left(\partial _{k}\psi \right)\partial _{j}-g_{jk}\nabla \psi  $$ 

 $$ \nabla _{\partial _{i}}\left(\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)= \nabla _{\partial _{i}}\nabla _{\partial _{j}}\partial _{k}+ \left(\partial _{i}\partial _{j}\psi \right)\partial _{k}+ \left(\partial _{j}\psi \right)\nabla _{\partial _{i}}\partial _{k}+ \left(\partial _{i}\partial _{k}\psi \right)\partial _{j}+ \left(\partial _{k}\psi \right)\nabla _{\partial _{i}}\partial _{j}-\partial _{i}g_{jk}\nabla \psi -g_{jk}\nabla _{\partial _{i}}\nabla \psi  $$ 

  $$ \begin{aligned} \nabla _{\partial _{i}}\left(\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)-\nabla _{\partial _{j}}\left(\widetilde{\nabla}_{\partial _{i}}\partial _{k}\right)&= R\left(\partial _{i},\partial _{j}\right)\partial _{k}+ \left(\partial _{j}\psi \right)\nabla _{\partial _{i}}\partial _{k}-\left(\partial _{i}\psi \right)\nabla _{\partial _{j}}\partial _{k}+ \left(\partial _{i}\partial _{k}\psi \right)\partial _{j}-\left(\partial _{j}\partial _{k}\psi \right)\partial _{i}\\&-\partial _{i}g_{jk}\nabla \psi + \partial _{j}g_{ik}\nabla \psi -g_{jk}\nabla _{\partial _{i}}\nabla \psi + g_{ik}\nabla _{\partial _{j}}\nabla \psi \end{aligned} $$ 

   $$ \left(\partial _{i}\psi \right)\left(\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)= \left(\partial _{i}\psi \right)\left(\nabla _{\partial _{j}}\partial _{k}\right)+ \left(\partial _{i}\psi \right)\left(\partial _{j}\psi \right)\partial _{k}+ \left(\partial _{i}\psi \right)\left(\partial _{k}\psi \right)\partial _{j}-g_{jk}\nabla \psi  $$ 

  $$ \begin{aligned} g\left(\partial _{i},\widetilde{\nabla}_{\partial _{j}}\partial _{k}\right)\nabla \psi &= g\left(\partial _{i},\nabla _{\partial _{j}}\partial _{k}\right)\nabla \psi + g\left(\partial _{i}, \left(\partial _{j}\psi \right)\partial _{k}+ \left(\partial _{k}\psi \right)\partial _{j}-g_{jk}\nabla \psi \right)\nabla \psi \\&=g\left(\partial _{i},\nabla _{\partial _{j}}\partial _{k}\right)\nabla \psi + \left(\partial _{j}\psi \right)g_{ik}\nabla \psi + \left(\partial _{k}\psi \right)g_{ij}\nabla \psi -g_{jk}\left(\partial _{i}\psi \right)\nabla \psi  \end{aligned} $$ 

 $$ \begin{aligned} D_{\widetilde{\nabla}_{\partial _{j}}\partial _{k}}\psi &=\left(\nabla _{\partial _{j}}\partial _{k}\right)\psi + \left(\partial _{j}\psi \right)\left(\partial _{k}\psi \right)+ \left(\partial _{k}\psi \right)\left(\partial _{j}\psi \right)-g_{jk}\left(\nabla \psi \right)\psi\\&=  \end{aligned} $$ 




> [!exercise] Exercise: 4.7.14
> Let $\tilde{g}=e^{2\psi}g$ be a metric conformally equivalent to $g$ and a $\tilde{\ }$ referring to metric objects in the conformally changed metric.
>
> 1. Show that
> $$\tilde{\nabla}_XY=\nabla_XY+(D_X\psi)Y+(D_Y\psi)X-g(X,Y)\nabla\psi.$$
>
> 2. With notation as in exercise 3.4.23 show that
> $$\begin{aligned}
> e^{-2\psi}\tilde{R}&=R-2\bigl(\operatorname{Hess}\psi-(d\psi)^2\bigr)\circ g-|d\psi|^2g\circ g\\
> &=R-\bigl(2\operatorname{Hess}\psi-2(d\psi)^2+|d\psi|^2g\bigr)\circ g.
> \end{aligned}$$
>
> 3. If $X,Y$ are orthonormal with respect to $g$, show that
> $$e^{2\psi}\widetilde{\operatorname{sec}}(X,Y)=\operatorname{sec}(X,Y)-\operatorname{Hess}\psi(X,X)-\operatorname{Hess}\psi(Y,Y)+(D_X\psi)^2+(D_Y\psi)^2-|d\psi|^2.$$
>
> 4. Show that
> $$\widetilde{\operatorname{Ric}}=\operatorname{Ric}-(n-2)\bigl(\operatorname{Hess}\psi-d\psi^2\bigr)-\bigl(\Delta\psi+(n-2)|d\psi|^2\bigr)g.$$
>
> 5. Show that
> $$e^{2\psi}\widetilde{\operatorname{scal}}=\operatorname{scal}-2(n-1)\Delta\psi-(n-1)(n-2)|d\psi|^2.$$
>
> 6. Using exercise 3.4.25 show that
> $$e^{-2\psi}\tilde{W}=W.$$
>
> This is referred to as the conformal invariance of the Weyl tensor under conformal changes and was discovered by Weyl.

> [!proof] Proof: 
> 1. From Koszule formula
>     $$ \begin{aligned}2e^{2\psi }\left< \widetilde{\nabla}_{X}Y,Z \right>_{g}=  2\left< \widetilde{\nabla}_{X}Y ,Z\right>_{\tilde{g}} &= X\left< Y,Z \right>_{\tilde{g}} + Y\left< Z,X \right>_{\tilde{g}}-Z\left< X,Y \right>_{\tilde{g}}\\&+ \left< \left[ X,Y \right],Z \right>_{\tilde{g}}-\left< \left[ X,Z \right],Y \right>_{\tilde{g}}-\left< \left[ Y,Z \right],X \right>_{\tilde{g}}\\&= X\left(e^{2\psi }\left< Y,Z \right>_{g}\right)+ Y\left(e^{2\psi }\left< Z,X \right>_{g}\right)-Z\left(e^{2\psi }\left< X,Y \right>_{g}\right)\\&+ e^{2\psi }\left(\left< \left[ X,Y \right],Z \right>_{g}-\left< \left[ X,Z \right],Y \right>_{g}-\left< \left[ Y,Z \right],X \right>_{g}\right)\\&= 2e^{2\psi }\left< \nabla _{X}Y,Z \right>_{g}+2e^{2\psi } \left(D_{X}\psi \right)\left< Y,Z \right>_{g}+2e^{2\psi } \left(D_{Y}\psi \right)\left< Z,X \right>_{g}\\&-2e^{2\psi }\left(D_{Z}\psi \right)\left< X,Y \right>_{g}\end{aligned}$$ 
>     Thus
>     $$ \begin{aligned} \left< \widetilde{\nabla}_{X}Y,Z \right>_{g}&= \left< \nabla _{X}Y,Z \right>_{g}+ \left(D_{X}\psi \right)\left< Y,Z \right>_{g}+ \left(D_{Y}\psi \right)\left< Z,X \right>_{g}-\left< X,Y \right>_{g}\left< \nabla \psi ,Z \right>_{g}\\&=\left< \nabla _{X}Y+ \left(D_{X}\psi \right)Y+ \left(D_{Y}\psi \right)-g\left(X,Y\right)\nabla \psi ,Z \right>_{g} \end{aligned} $$ 
>     Which implies that 
>     $$ \widetilde{\nabla}_{X}Y= \nabla _{X}Y+ \left(D_{X}\psi \right)Y+ \left(D_{Y}\psi \right)X-g\left(X,Y\right)\nabla \psi  $$ 

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
