---
type: example
aliases:
- Lie Algebra of Matrix Lie Group
technique: []
tags: []
---
> [!example] Example: The Lie Algebra of a Matrix Lie Group
> For a general Lie group $G$, its Lie algebra is defined as the tangent space at the identity $\mathfrak{g}=T_eG$, with the bracket coming from the commutator of left-invariant vector fields. When $G\subseteq GL(n)$ is a **matrix** Lie group, this abstract structure descends to concrete matrices:
> $$
> \mathfrak{g}=T_IG=\{\,\gamma'(0)\mid \gamma(t)\in G,\ \gamma(0)=I\,\}\subseteq M_n,
> $$
> i.e. the initial velocities of all curves through the identity. Equivalently, via the exponential:
> $$
> \mathfrak{g}=\{X\in M_n\mid \exp(tX)\in G\ \ \forall t\in\mathbb{R}\}.
> $$
> The abstract left-invariant vector field commutator reduces, in the matrix case, to the matrix commutator:
> $$
> [X,Y]=XY-YX.
> $$
> Thus "the Lie algebra of a matrix Lie group" is a concrete instance of general Lie algebra theory: the tangent space is a linear subspace of $M_n$, and the Lie bracket is just the ordinary matrix commutator.


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
