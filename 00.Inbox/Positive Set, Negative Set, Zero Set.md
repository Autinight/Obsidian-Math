---
type: concept
aliases:
- Positive Set, Negative Set, Zero Set
technique: []
tags: []
---

### Definition

> [!definition] Definition: 
> Let $\varphi$ be a signed measure on measurable space $\left(X,\mathscr{A}\right)$. 
> - We say $P \in \mathscr{A}$ is a positive set of $\varphi$, if 
>   $$
>   \forall E\in \mathscr{A}, \varphi \left(E\cap P\right)\ge 0 
>   $$
> - The positive set of $-\varphi$ is called the negative set of $\varphi$.
> - If a set is both positive set and negative set of $\varphi$, we call it  the zero set of $\varphi$.

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
