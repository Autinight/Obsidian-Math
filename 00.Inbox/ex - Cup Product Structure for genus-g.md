---
type: exercise
aliases:
  - Cup Product Structure for genus-g
technique: []
book: AT Hatcher
chapter: 3.2
number: "1> [!exercise] EXERCISE 3.2.1.
> Assuming as known the cup product structure on the torus $S^1 \times S^1$, compute the cup product structure in $H^*(M_g)$ for $M_g$ the closed orientable surface of genus $g$ by using the quotient map from $M_g$ to a wedge sum of $g$ tori, shown below."
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 3.2.1.
> Assuming as known the cup product structure on the torus $S^1 \times S^1$, compute the cup product structure in $H^*(M_g)$ for $M_g$ the closed orientable surface of genus $g$ by using the quotient map from $M_g$ to a wedge sum of $g$ tori, shown below.

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
