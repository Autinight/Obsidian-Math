---
type: exercise
aliases:
  - Suspension Isomorphism
technique: []
book: AT Hatcher
chapter: 2.1
number: "20"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.20.
> Show that $\widetilde{H}_n(X) \cong \widetilde{H}_{n+1}(SX)$ for all $n$, where $SX$ is the suspension of $X$. More generally, thinking of $SX$ as the union of two cones $CX$ with their bases identified, compute the reduced homology groups of the union of any finite number of cones $CX$ with their bases identified.

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
