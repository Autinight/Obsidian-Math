---
type: exercise
aliases:
  - Torsion Free Connection for Lie Group
technique: []
book: RG Petersen
chapter: 2
number: "14"
category:
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Let $G$ be a Lie group. Show that there is a unique affine connection such that $\nabla X= 0$ for all left-invariant vector fields. Show that this connection is torsion free if and only if the Lie algebra is Abelian.

> [!proof] Proof: 
> 
> Take a basis for $T_{e}G$, say $e_1,\cdots ,e_{n}$, then define 
>  $$ \left(E_{k}\right)_{g}= \left(\,d L_{g}\right)\left(e_{k}\right) $$
> Then $E_1,\cdots ,E_{k}$ is a left-invariant frame for $G$. 
> If 
>  $$ X= X^{k}E_{k} $$
>  $$ \nabla _{Y}X= \nabla_{Y} \left(X^{k}E_{k}\right)= X^{k}\nabla _{Y}E_{k}+ Y\left(X^{k}\right)E_{k}= Y\left(X^{k}\right)E_{k} $$  
> Same for $\widetilde{\nabla}$, 
>  $$ \widetilde{\nabla}_{Y}X= Y\left(X^{k}\right)E_{k}= \nabla _{Y}X $$
> Thus $\nabla = \widetilde{\nabla}$. Thus the connection is unique. 
>
> For existence, we need to show that 
>  $$ \nabla _{Y}X= Y\left(X^{k}\right)E_{k} $$
> determines exactly a affine connection.
>
> 1.  $$ \nabla _{fX+ gY}Z= \left(fX+ gY\right)\left(Z^{k}\right)E_{k}= f\nabla _{X}Z+ g\nabla _{Y}Z $$ 
> 2.  $$ \nabla _{X}\left(Z_1+ Z_2\right)= X\left(\left(Z_1+ Z_2\right)^{k}\right)E_{k}= X\left(Z_1^{k}\right)E_{k}+ X\left(Z_2^{k}\right)E_{k} $$
> 3.  $$ \nabla _{Y}\left(fX\right)= Y\left(fX^{k}\right)E_{k}= \left(Yf\right)X^{k}E_{k} + fY\left(X^{k}\right)E_{k}= \left(Yf\right)X+ f\nabla _{Y}X$$  
>
>  $$ \begin{aligned} T\left(X,Y\right)&= \nabla _{X}Y-\nabla _{Y}X-\left[ X,Y \right]\\&=X^{i}Y^{j}\left[ E_{i},E_{j} \right]\end{aligned} $$ 
> If this connection is torsion free, iff $\left[ E_{i},E_{j} \right]= 0$, iff Lie algebra is abelian.

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
