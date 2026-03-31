---
type: definition
aliases: 
- Alternation
technique: []
tags: []
---

> [!definition] Definition: 
> We define a projection $\operatorname{Alt}:T^{k}\left(V^{*}\right)\to \Lambda ^{k}\left(V^{*}\right)$, called **alternation**, as follows:
>  $$ \operatorname{Alt}\alpha = \frac{1 }{k! }\sum _{\sigma \in S_{k}}\left(\operatorname{sgn}\sigma \right)\left({}^{\sigma }\alpha \right) $$ 


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
