---
type: exercise
aliases:
  - Z_n Universal Coefficients Short Sequence
technique: []
book: AT Hatcher
chapter: 2.2
number: "40"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.40.
> From the long exact sequence of homology groups associated to the short exact sequence of chain complexes $0 \to C_i(X) \xrightarrow{n} C_i(X) \to C_i(X; \mathbb{Z}_n) \to 0$ deduce immediately that there are short exact sequences
> $$
> 0 \to H_i(X)/nH_i(X) \to H_i(X; \mathbb{Z}_n) \to n\text{-Torsion}(H_{i-1}(X)) \to 0
> $$
> where $n\text{-Torsion}(G)$ is the kernel of the map $G \xrightarrow{n} G$, $g \mapsto ng$. Use this to show that $\tilde{H}_i(X; \mathbb{Z}_p) = 0$ for all $i$ and all primes $p$ iff $\tilde{H}_i(X)$ is a vector space over $\mathbb{Q}$ for all $i$.

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
