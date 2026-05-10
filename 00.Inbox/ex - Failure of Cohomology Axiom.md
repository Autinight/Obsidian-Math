---
type: exercise
aliases:
  - Failure of Cohomology Axiom
technique: []
book: AT Hatcher
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.7.
> Show that the functors $h^n(X) = \operatorname{Hom}(H_n(X), \mathbb{Z})$ do not define a cohomology theory on the category of CW complexes.

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
