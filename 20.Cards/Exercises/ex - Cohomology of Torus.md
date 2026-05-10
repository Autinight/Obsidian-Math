---
type: exercise
aliases:
  - Cohomology of Torus
technique: []
book: AT Hatcher
chapter: 3.1
number: "06"
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.6.
> (a) Directly from the definitions, compute the simplicial cohomology groups of $S^1 \times S^1$ with $\mathbb{Z}$ and $\mathbb{Z}_2$ coefficients, using the $\Delta$-complex structure given in §2.1.
> 
> (b) Do the same for $\mathbb{RP}^2$ and the Klein bottle.



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
