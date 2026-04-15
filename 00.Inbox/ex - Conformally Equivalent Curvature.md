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


 $$2 \begin{aligned} \left< \widetilde{\nabla}_{X}Y ,Z\right>_{\tilde{g}} &= \left<  \right> \end{aligned}$$ 

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
