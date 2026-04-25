---
type: theorem
aliases: 
- Arzelà
technique: []
tags: []
---

> [!theorem] Theorem: 
> A subset $A\subseteq C\left[ a,b \right]$ is sequentially compact, iff the functions in $A$ are uniformly bounded and equicontinuous. 



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
