---
type: definition
aliases:
- Delta-Complex
technique: []
tags: []
---
> [!definition] 定义 1 (Definition:)
> A **$\Delta$-complex structure** on a space $X$ is a collection of maps $\sigma_\alpha : \Delta^n \to X$, with $n$ depending on the index $\alpha$, such that:
> 1. The restriction $\sigma_\alpha \vert_{\mathring{\Delta}^n}$ is injective, and each point of $X$ is in the image of exactly one such restriction $\sigma_\alpha \vert_{\mathring{\Delta}^n}$.
> 2. Each restriction of $\sigma_\alpha$ to a face of $\Delta^n$ is one of the maps $\sigma_\beta : \Delta^{n-1} \to X$. Here we are identifying the face of $\Delta^n$ with $\Delta^{n-1}$ by the canonical linear homeomorphism between them that preserves the ordering of the vertices.
> 3. A set $A \subset X$ is open iff $\sigma_\alpha^{-1}(A)$ is open in $\Delta^n$ for each $\sigma_\alpha$.

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
