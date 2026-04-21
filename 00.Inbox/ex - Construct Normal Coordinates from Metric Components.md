---
type: exercise
aliases:
  - Construct Normal Coordinates from Metric Components
technique: []
book: RG Petersen
chapter: 5
number: "30"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.30.
> Assume that we have coordinates $x^{i}$ around a point $p\in(M,g)$ such that $x^{i}(p)=0$ and $g_{ij}x^{j}=\delta_{ij}x^{j}$. Show that these must be exponential normal coordinates. Hint: Define $r=\sqrt{\delta_{ij}x^{i}x^{j}}$; show that it is a smooth distance function away from $p$; and that the integral curves for the gradient are geodesics emanating from $p$.


We define 
$$ r= \sqrt{\delta _{ij}x^{i}x^{j}} $$ 

Then 
$$ r= \sqrt{g_{ij}x^{i}x^{j}} $$ 

And we define 
$$ \tilde{r}\left(q\right)= \left| \exp ^{-1} _{p}\left(q\right) \right|  $$ 


$$ r^{2}= g_{ij}x^{i}x^{j}= \delta _{ij}x^{i}x^{j} $$ 


Suppose that 
$$ \operatorname{grad}r= a^{j}\partial _{j} $$ 
$$ \partial _{k}r= g\left(\operatorname{grad}r,\partial _{k}\right)=g\left(a^{j}\partial _{j},\partial _{k}\right)= a^{j}g_{jk}= \delta _{jk}a^{j}= a_{k}$$ 
We have
$$ \operatorname{grad}r= \sum _{j}\left(\partial _{j}r\right)\partial _{j}= \partial _{r} $$ 




$$ g $$ 



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
