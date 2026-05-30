---
type: theorem
aliases:
  - Cartan Closed Subgroup
technique: []
tags:
  - Cartan_closed_subgroup
  - Lie_subgroup
---
> [!theorem] Cartan Closed Subgroup Theorem
> Let $G$ be a Lie group and let $H\leq G$ be a closed subgroup.
>
> Then $H$ admits a unique smooth manifold structure such that $H$ is an embedded Lie subgroup of $G$.
>
> Equivalently, the inclusion
> $$
> i:H\hookrightarrow G
> $$
> is an injective immersion and a topological embedding onto its image.

> [!proof]- Proof Sketch(AI)
> Define
> $$
> \mathfrak h
> =
> \{X\in\mathfrak g:\exp(tX)\in H\ \text{for all }t\in\mathbb R\}.
> $$
>
> Using the closedness of $H$ and the BCH formula, one shows that $\mathfrak h$ is a Lie subalgebra of $\mathfrak g$.
>
> Near the identity, choose a vector space splitting
> $$
> \mathfrak g=\mathfrak h\oplus\mathfrak m.
> $$
>
> The map
> $$
> (X,Y)\mapsto \exp(X)\exp(Y)
> $$
> gives local coordinates near $e\in G$.
>
> Closedness of $H$ implies that, locally,
> $$
> H=\exp(\mathfrak h)
> $$
> inside these coordinates.
>
> Hence $H$ is a submanifold near the identity. Translating by elements of $H$ gives the embedded submanifold structure on all of $H$.


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
