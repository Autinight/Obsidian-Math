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

 $$\widetilde{R}\left(X,Y\right)Z= \widetilde{\nabla}_{X}\widetilde{\nabla}_{Y}Z-\widetilde{\nabla}_{Y}\widetilde{\nabla}_{X}Z-\widetilde{\nabla}_{\left[X,Y \right]}Z $$ 
 $$ \widetilde{R}\left(\partial _{i},\partial _{j}\right)\partial _{k}= \widetilde{\nabla}_{\partial _{i}}\widetilde{\nabla}_{\partial _{j}}\partial _{k}-\widetilde{\nabla }_{\partial _{j}}\widetilde{\nabla}_{\partial _{i}}\partial _{k} $$ 
  $$ \begin{aligned} \widetilde{\nabla}_{X}\widetilde{\nabla}_{Y}Z&= \widetilde{\nabla}_{X}\left(\nabla _{Y}Z+ \left(D_{Y}\psi \right)Z+ \left(D_{Z}\psi \right)Y-g\left(Y,Z\right)\nabla \psi \right)\\&= \nabla _{X}\nabla _{Y}Z+ \left(D_{X}D_{Y}\psi \right)Z+ \left(D_{X}D_{Z}\psi \right)Y-Xg\left(Y,Z\right)\nabla \psi  \end{aligned} $$ 
 $$ \widetilde{\nabla}_{Y}\widetilde{\nabla}_{X}Z= \nabla _{Y}\nabla _{X}Z+ \left(D_{Y}D_{X}\psi \right)Z+ \left(D_{Y}D_{Z}\psi \right)X-Yg\left(X,Z\right)\nabla \psi  $$ 

 $$ \operatorname{Hess}\psi =  $$ 


  $$ \widetilde{R}\left(\partial _{i},\partial _{j}\right)\partial _{k}= R\left(\partial _{i},\partial _{j}\right)\partial _{k}+ \left(\partial _{i}\partial _{k}\psi \right)\partial _{j}-\left(\partial _{j}\partial _{k}\psi \right)\partial _{i}- g\left(\partial _{j},\nabla _{\partial _{i}}\partial _{k}\right)\nabla \psi + g\left(\partial _{i},\nabla _{\partial _{j}}\partial _{k}\right)\nabla \psi $$ 

 $$ \begin{aligned} e^{-2\psi } \widetilde{R}\left(\partial _{i},\partial _{j},\partial _{k},\partial _{l}\right)&=R\left(\partial _{i},\partial _{j},\partial _{k},\partial _{l}\right)+ \left(\partial _{i}\partial _{k}\psi \right)g\left(\partial _{j},\partial _{l}\right)-\left(\partial _{j}\partial _{k}\psi \right)g\left(\partial _{i},\partial _{l}\right)\\&-g\left(\partial _{j},\nabla _{\partial _{i}}\partial _{k}\right)\left(d\psi \right)\left(\partial _{l}\right)+ g\left(\partial _{i},\nabla _{\partial _{j}}\partial _{k}\right)\left(d\psi \right)\left(\partial _{l}\right) \end{aligned}$$ 





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
