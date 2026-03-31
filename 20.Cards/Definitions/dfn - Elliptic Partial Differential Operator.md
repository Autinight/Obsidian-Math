---
type: definition
aliases: 
- Elliptic Partial Differential Operator
technique: []
---


> [!definition] Definition: 
> We say the [[dfn - Boundary Value Problem|paritial differential operator]] $L$ is (uniformly) elliptic if there exists a constant $\theta > 0$ such that 
>  $$ \sum _{i,j= 1}^{n}a_{ij}\xi _{i}\xi _{j}\ge \theta \left| \xi  \right|^{2}  $$
> for a.e. $x\in U$ and all $\xi \in \mathbb{R} ^{n}$.   

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

