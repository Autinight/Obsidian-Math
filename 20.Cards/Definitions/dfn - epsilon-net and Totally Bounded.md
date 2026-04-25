---
type: definition
aliases: 
- epsilon-net and Totally Bounded
technique: []
tags: []
---

### epsilon-net

> [!definition] Definition:
> Let $\left(X,d\right)$ be a metric space, $A,B\subseteq X$, $\varepsilon > 0$. We say $A$ is an $\varepsilon$-net for $B$, if for each $x\in B$, there exists $y\in A$ such that $d\left(x,y\right)< \varepsilon$. That is 
>  $$ B\subseteq \bigcup _{x\in A}B_{\varepsilon }\left(x\right) $$  

> [!remark] Remark: 
> We say the $\varepsilon$-net is finite, if it is a finite set.

### Totally Bounded

> [!definition] Definition: 
> We say $K\subseteq X$ is **totally bounded**, if for every $\varepsilon > 0$, there exists a finite $\varepsilon$-net for $K$.

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
