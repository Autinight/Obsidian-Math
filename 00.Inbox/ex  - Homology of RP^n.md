---
type: exercise
aliases:
- Homology of RP^n
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.19.
> Compute $\tilde{H}_i(\mathbb{R}P^n/\mathbb{R}P^m)$ for $m < n$ by cellular homology, using the standard CW structure on $\mathbb{R}P^n$ with $\mathbb{R}P^m$ as its $m$-skeleton.

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
