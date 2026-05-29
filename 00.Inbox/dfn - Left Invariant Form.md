---
type: definition
aliases:
- Left Invariant Form
technique: []
tags: []
---
> [!definition] Left-invariant differential form
> Let $G$ be a Lie group. F
>
> A differential $k$-form $\omega\in \Omega^k(G)$ is called **left-invariant** if
> $$
> L_a^*\omega=\omega
> $$
> for every $a\in G$.

Equivalently, for every $g\in G$ and $v_1,\dots,v_k\in T_gG$,

$$
\omega_g(v_1,\dots,v_k)
=
\omega_e\big((dL_{g^{-1}})_g v_1,\dots,(dL_{g^{-1}})_g v_k\big).
$$

Thus a left-invariant $k$-form is completely determined by its value at the identity:

$$
\omega_e\in \Lambda^k\mathfrak g^*,
\qquad \mathfrak g=T_eG.
$$

Hence

$$
\{\text{left-invariant }k\text{-forms on }G\}
\cong
\Lambda^k\mathfrak g^*.
$$

**Intuition.** A left-invariant form is a form whose value is unchanged under left translation. It is essentially a multilinear alternating form on the Lie algebra, transported to every point of the group by left multiplication.


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
