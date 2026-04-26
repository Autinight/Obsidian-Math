---
type: exercise
aliases:
  - Identify All Same-Dim Faces of delta^n
technique: []
book: AT Hatcher
chapter: 2.1
number: "09"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.9.
> Compute the homology groups of the $\Delta$-complex $X$ obtained from $\Delta^n$ by identifying all faces of the same dimension. Thus $X$ has a single $k$-simplex for each $k \leq n$.

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
