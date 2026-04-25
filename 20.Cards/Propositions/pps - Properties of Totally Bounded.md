---
type: proposition
aliases: 
- Properties of Totally Bounded
technique: []
tags: []
---


> [!proposition] Proposition: 
> $\left(X,d\right)$ is a metric space. $A\subseteq X$ is a [[dfn - epsilon-net and Totally Bounded|Totally Bounded]] subset. Then
> 1. $A$ is bounded.
> 2. For each $\varepsilon > 0$, the $\varepsilon$-net can be taken as the subset of $A$.
> 3. $A$ is seperable.


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
