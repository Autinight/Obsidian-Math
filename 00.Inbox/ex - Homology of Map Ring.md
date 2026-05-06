---
type: exercise
aliases:
- Homology of Map Ring
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.30.
> For the mapping torus $T_f$ of a map $f : X \to X$, we constructed in Example 2.48 a long exact sequence $\cdots \to H_n(X) \xrightarrow{\mathbb{1} - f_*} H_n(X) \to H_n(T_f) \to H_{n-1}(X) \to \cdots$. Use this to compute the homology of the mapping tori of the following maps:
> 1. A reflection $S^2 \to S^2$.
> 2. A map $S^2 \to S^2$ of degree 2.
> 3. The map $S^1 \times S^1 \to S^1 \times S^1$ that is the identity on one factor and a reflection on the other.
> 4. The map $S^1 \times S^1 \to S^1 \times S^1$ that is a reflection on each factor.
> 5. The map $S^1 \times S^1 \to S^1 \times S^1$ that interchanges the two factors and then reflects one of the factors.

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
