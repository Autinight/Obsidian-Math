---
type: concept
aliases: 
- Variations
technique: []
---


### Basic Ideas

Supposing that we wish to solve some particular partial differential operator and $u$ is the unknown, which for simplicity we wrrite in the abstract form

 $$\tag{1} A\left[ u \right]= 0 $$

In this fomular $A\left[ \cdot  \right]$ denotes a give, possibly nonlinear partial differential operator and $u$ is the unknown.

> [!definition] Definition: 
> **Variational Problesm**, that is, PDE of the form (1), where the nonlinear operator $A\left[ \cdot  \right]$ is the "derivative" of and appropriate "energy" functional $I\left[ \cdot  \right]$. Symbolically we write
>  $$ A\left[ \cdot  \right]= I^{\prime} \left[ \cdot  \right] $$
> Then problem (1) reads
>  $$ I^{\prime} \left[ u \right]= 0 $$  

> [!remark] Remark: 
> The point is that whereas it is usually extremly difficult to solve $(1)$ directly, it may be much easier to discover minumium(or maximum or other critical) points of the functional $I\left[ \cdot  \right]$. 

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

