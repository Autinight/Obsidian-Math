---
type: theorem
aliases: 
- Characterization of Compact Sets in Metric Space
technique: []
tags: []
---

> [!theorem] Theorem: 
> Let $\left(X,d\right)$ be a metric space and let $K\subseteq X$. Then the following are equivalent.
> 1. $K$ is sequentially compact.
> 2. $K$ is complete and totally bounded.
> 3. Every open cover of $K$ has a finite subcover.



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
