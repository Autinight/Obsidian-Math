---
type: proposition
aliases:
- Differention of det on Matrix Lie Group
technique: []
tags: []
---

> [!exercise] Exercise: 
> 考虑李群同态 $\det: GL(n, \mathbb{K}) \to \mathbb{K}^\times$.则 $\det$ 在$I$ 处的微分
$d(\det)_I : T_I GL(n, \mathbb{K}) \to T_1 \mathbb{K}^\times$,
$d(\det)_I (X) = \mathrm{tr}(X)$

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
