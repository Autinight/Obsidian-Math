---
type: exercise
aliases:
- Convexity and Hessian for Function
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.21.
> Let $f:(M,g)\to\mathbb{R}$ be a smooth function on a Riemannian manifold.
> 1. Let $c:(a,b)\to M$ be a geodesic. Compute the first and second derivatives of $f\circ c$.
> 2. Use this to show that at a local maximum (or minimum) for $f$ the gradient is zero and the Hessian nonpositive (or nonnegative).
> 3. Show that $f$ has everywhere nonnegative Hessian if and only if $f\circ c$ is convex for all geodesics $c$ in $(M,g)$.

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
