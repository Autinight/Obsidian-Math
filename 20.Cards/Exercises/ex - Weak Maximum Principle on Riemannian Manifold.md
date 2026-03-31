---
type: exercise
aliases:
  - Weak Maximum Principle on Riemannian Manifold
technique: []
book: RG Petersen
chapter: 2
number: "27"
category: boundary
status: todo
priority: high
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
