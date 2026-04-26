---
type: exercise
aliases:
  - Relative Homology of Surfaces
technique: []
book: AT Hatcher
chapter: 2.1
number: "17"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.17.
> (a) Compute the homology groups $H_n(X, A)$ when $X$ is $S^2$ or $S^1 \times S^1$ and $A$ is a finite set of points in $X$.
> (b) Compute the groups $H_n(X, A)$ and $H_n(X, B)$ for $X$ a closed orientable surface of genus two with $A$ and $B$ the circles shown.

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
