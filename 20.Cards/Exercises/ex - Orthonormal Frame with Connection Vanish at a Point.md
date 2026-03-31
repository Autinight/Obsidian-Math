---
type: exercise
aliases:
  - Orthonormal Frame with Connection Vanish at a Point
technique: []
book: RG Petersen
chapter: 2
number: "19"
category:
status: todo
priority:
tags: []
---


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
