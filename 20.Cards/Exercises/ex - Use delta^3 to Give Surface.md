---
type: exercise
aliases:
  - Use delta^3 to Give Surface
technique: []
book: AT Hatcher
chapter: 2.1
number: "02"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.2.
> Show that the $\Delta$-complex obtained from $\Delta^3$ by performing the order-preserving edge identifications $[v_0, v_1] \sim [v_1, v_3]$ and $[v_0, v_2] \sim [v_2, v_3]$ deformation retracts onto a Klein bottle. Also, find other pairs of identifications of edges that produce $\Delta$-complexes deformation retracting onto a torus, a 2-sphere, and $\mathbb{R}P^2$.

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
