---
type: concept
aliases:
- Closed Lie Subgroup
technique: []
tags: []
---

> [!definition] Lie Subgroup
> A subset $H\subset G$ is a **closed subgroup** if
> $$
> H\leq G
> \qquad\text{and}\qquad
> H=\overline H.
> $$
>
> Equivalently, $H$ is a subgroup and is closed in the topology of $G$.




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
