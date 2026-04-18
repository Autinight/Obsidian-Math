---
type: exercise
aliases:
  - How Regular Curve be Geodesic
technique: []
book: RG Petersen
chapter: 5
number: "4"
category:
status: todo
priority:
tags: []
---

> [!exercise] EXERCISE 5.9.4.
> Show that a regular curve can be reparametrized to be a geodesic if and only if the acceleration is tangent to the curve.

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
