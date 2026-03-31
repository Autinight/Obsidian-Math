---
type: example
aliases: 
- Minimal Surfaces
technique: []
---

### First Variation

> [!proposition] Proposition: 
> Let 
>  $$ L\left(p,z,x\right)= \left(1+ \left| p \right|^{2} \right)^{\frac{1}{2}} $$
> so that 
>  $$ I\left[ w \right]= \int _{U}\left(1+ \left| Dw \right|^{2} \right)^{\frac{1}{2}}dx $$
> is the area of the graph of the function $w:U\to \mathbb{R}$. The associated [[First Variation, Euler-Lagrange equation|Euler-Lagrange Equation]] is 
>  $$ \sum _{i= 1}^{n}\left(\frac{u_{x_{i}} }{\left(1+ \left| Du \right|^{2} \right)^{\frac{1}{2}} }\right)_{x_{i}}= \operatorname{div}\left(\frac{Du }{\left(1+ \left| Du \right|^{2} \right)^{\frac{1}{2}} }\right)= 0 $$   

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

