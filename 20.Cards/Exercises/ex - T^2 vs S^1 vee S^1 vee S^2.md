---
type: exercise
aliases:
  - T^2 vs S^1 vee S^1 vee S^2
technique: []
book: AT Hatcher
chapter: 2.1
number: "29"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.29.
> Show that $S^1 \times S^1$ and $S^1 \vee S^1 \vee S^2$ have isomorphic homology groups in all dimensions, but their universal covering spaces do not.

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
