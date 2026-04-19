---
type: lemma
aliases:
- Tube Lemma
technique: []
tags: []
---

> [!proposition] Proposition: 
> Suppose that $X$ and $Y$ are topological space, and $Y$ is compact.
> If $N\subseteq X\times Y$ is a open subset containing a slice $\left\{ x_0 \right\}\times Y$, then there exists a neighbourhood $U$ such that the Tube neighbourhood $U\times Y$  is contained in $N$.

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
