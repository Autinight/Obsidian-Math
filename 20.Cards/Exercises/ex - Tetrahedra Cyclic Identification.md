---
type: exercise
aliases:
  - Tetrahedra Cyclic Identification
technique: []
book: AT Hatcher
chapter: 2.1
number: "08"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.8.
> Construct a 3-dimensional $\Delta$-complex $X$ from $n$ tetrahedra $T_1, \cdots, T_n$ by the following two steps. First arrange the tetrahedra in a cyclic pattern so that each $T_i$ shares a common vertical face with its two neighbors $T_{i-1}$ and $T_{i+1}$, subscripts being taken mod $n$. Then identify the bottom face of $T_i$ with the top face of $T_{i+1}$ for each $i$. Show the simplicial homology groups of $X$ in dimensions $0, 1, 2, 3$ are $\mathbb{Z}, \mathbb{Z}_n, 0, \mathbb{Z}$, respectively.

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
