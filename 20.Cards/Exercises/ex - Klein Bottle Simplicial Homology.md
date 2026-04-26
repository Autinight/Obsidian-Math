---
type: exercise
aliases:
  - Klein Bottle Simplicial Homology
technique: []
book: AT Hatcher
chapter: 2.1
number: "05"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.5.
> Compute the simplicial homology groups of the Klein bottle using the $\Delta$-complex structure described at the beginning of this section.

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
