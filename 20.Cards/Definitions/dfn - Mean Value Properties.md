---
type: definition
aliases: 
- Mean Value Properties
technique: []
---

> [!remark] Remark: 
> We assume that $\Omega$ is a connected domain in $\mathbb{R} ^{n}$. $\omega _{n}$ denotes the surface area of the unit sphere in $\mathbb{R} ^{n}$.

### Mean Value Properties

> [!definition] Definition: 
> For $u\in C\left(\Omega \right)$ we define
> 1. $u$ satisfies the first mean value property if 
>    $$ u\left(x\right)= \frac{1 }{\omega _{n}r^{n-1} }\int _{\partial B_{r}\left(x\right)}u\left(y\right)\,d S_{y}\quad \text{for any }B_{r}\left(x\right)\subseteq \Omega  $$ 
> 2. u satisfies the second mean value property if 
>    $$ u\left(x\right)= \frac{n }{\omega _{n}r^{n} }\int _{B_{r}\left(x\right)}u\left(y\right)\,d y\quad \text{for any }B_{r}\left(x\right)\subseteq \Omega  $$

> [!remark] Remark: 
> These two definitions are equivalent. We can difference or integrate with respect to $r$ to see this.

### Parameter Form

> [!proposition] Proposition: 
> We can write the mean value properties in the following equivalent ways:
> 1. $u$ satisfies the first mean value property if 
>    $$ u\left(x\right)= \frac{1 }{\omega _{n} }\int _{\left| w \right|= 1 }u\left(x+ rw\right)\,d S_{w}\quad \text{for any }B_{r}\left(x\right)\subseteq \Omega  $$
> 2. $u$ satisfies the second mean value property if 
>    $$ u\left(x\right)= \frac{n }{\omega _{n} }\int _{\left| z \right|\le 1 }u\left(x+ rz\right)\,d z\quad \text{for any }B_{r}\left(x\right)\subseteq \Omega  $$  

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

