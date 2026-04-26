---
type: exercise
aliases:
  - Short Exact Sequence Classification
technique: []
book: AT Hatcher
chapter: 2.1
number: "14"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.14.
> Determine whether there exists a short exact sequence $0 \to \mathbb{Z}_4 \to \mathbb{Z}_8 \oplus \mathbb{Z}_2 \to \mathbb{Z}_4 \to 0$. More generally, determine which abelian groups $A$ fit into a short exact sequence $0 \to \mathbb{Z}_{p^m} \to A \to \mathbb{Z}_{p^n} \to 0$ with $p$ prime. What about the case of short exact sequences $0 \to \mathbb{Z} \to A \to \mathbb{Z}_n \to 0$?

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
