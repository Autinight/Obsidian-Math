---
type: exercise
aliases:
  - Fixed point of 2n-sphere and RP^n
technique: []
book: AT Hatcher
chapter: 2.2
number: "2"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.2.
> Given a map $f : S^{2n} \to S^{2n}$, show that there is some point $x \in S^{2n}$ with either $f(x) = x$ or $f(x) = -x$. Deduce that every map $\mathbb{R}P^{2n} \to \mathbb{R}P^{2n}$ has a fixed point. Construct maps $\mathbb{R}P^{2n-1} \to \mathbb{R}P^{2n-1}$ without fixed points from linear transformations $\mathbb{R}^{2n} \to \mathbb{R}^{2n}$ without eigenvectors.

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
