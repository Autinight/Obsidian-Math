---
type: concept
aliases: 
- Laplace-Beltrami Operator
technique: []
tags: []
---

### Definition

> [!definition] Definition: 
> Let $\left(M,g\right)$ be a Riemannian manifold with or withoud boundary. The **Laplacian**(or **Lapalce-Beltrami operator**) is the linear operator $\Delta :C^{\infty}\left(M\right)\to C^{\infty}\left(M\right)$ defined by 
>  $$ \Delta u= \operatorname{div}\left(\operatorname{grad}u\right) $$ 

### Coordinate Representation

> [!proposition] Proposition: 
> The coordinate representation of Laplacian is 
>  $$ \Delta u= \frac{1 }{\sqrt{\det g} }\frac{\partial }{\partial x^{i}}\left(g^{ij}\frac{\partial u}{\partial x^{j}}\sqrt{\det g}\right) $$ 

> [!proof] Proof: 
> See [[Gradient on Riemannian Manifold]] and [[Divergence on Riemannian Manifold|Divergence on Riemannian Manifold]]

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
