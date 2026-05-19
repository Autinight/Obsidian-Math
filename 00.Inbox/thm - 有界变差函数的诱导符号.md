---
type: theorem
aliases:
- 有界变差函数的诱导测度
technique: []
tags: []
---

> [!theorem] Theorem: 
> 若$f\in BV\left(\mathbb{R} \right)$, 则由Jordan分解
> $$ f= f_{+ }-f_{-} $$ 
> 定义
> $$ \mu _{f}:= \mu _{f_{+ }}-\mu _{f_{-}} $$ 
> 则$\mu _{f}$是一个有限的signed-Borel测度.


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
