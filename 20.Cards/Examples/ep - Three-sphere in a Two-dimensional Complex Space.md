---
type: example
aliases: 
- Three-sphere in a Two-dimensional Complex Space
technique: []
tags: []
---

> [!example] Example: 
> Consider $S^{3}\subseteq \mathbb{C} ^{2}$ defined as 
>  $$ S^{3}= \left\{ \left(z,w\right)\in \mathbb{C}^{2}: \left| z\right|^{2}+ \left| w\right|^{2}= 1   \right\} $$ 
> - The tangent space at $\left(z,w\right)\in {S}^{3}$ is 
>     $$ \operatorname{ker}\left(d F\right)|_{\left(z,w\right)}= \left\{ a\partial _{z}+ b\partial _{w}: \operatorname{Re}\left(a \bar{z}+ b \bar{w}\right)= 0 \right\} $$
>    with a basis
>  $$ V_1= i\left(z,w\right),\quad V_2= \left(-\bar{w},\bar{z}\right),\quad V_3= i\left(-\bar{w},\bar{z}\right) $$  

> [!proof] Proof: 
> **Tangent Space**: The defining map of $S^{3}$ is $F\left(z,w\right)= z \bar{z}+ w \bar{w}-1$. Then 
>  $$ \begin{aligned} dF &= \bar{z}\,d z+ z d \bar{z}+ \bar{w}\,d w+ w \,d \bar{w}\\&= 2\operatorname{Re}\circ\left(\bar{z}\,d z+  \bar{w}\,d w\right)  \end{aligned}$$ 
> Then the tangent space at $\left(z,w\right)$ is $\operatorname{ker}\left(d F\right)|_{\left(z,w\right)}$
>  $$ \operatorname{ker}\left(d F\right)|_{\left(z,w\right)}= \left\{ a\partial _{z}+ b\partial _{w}: \operatorname{Re}\left(a \bar{z}+ b \bar{w}\right)= 0 \right\} $$ 

 $$ \lambda \bar{w}\partial _{z}-\lambda \bar{z}\partial _{w} $$ 



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
