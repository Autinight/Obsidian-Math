---
type: proposition
aliases:
- Diagonalize the Curvature Operator
technique: []
tags: []
---

> [!proposition] Proposition: 
> Let $e_{i}$ be an orthonormal basis for $T_{p}M$. If $R\left(e_{i},e_{j}\right)e_{k}= 0$, when the indices are mutually distinct, then $e_{i}\wedge e_{j}$ diagonalize the curvature operator.

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
