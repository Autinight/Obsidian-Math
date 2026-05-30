---
type: theorem
aliases:
- Maurer-Cartan Equation
technique: []
tags: []
---

> [!theorem] Maurer-Cartan Equation
> 
> **Maurer-Cartan equation.** The form $\omega$ satisfies
> $$
> d\omega + \tfrac{1}{2}[\omega,\omega] = 0,
> $$
> where $[\omega,\omega]$ is the wedge product paired with the Lie bracket: $[\omega,\omega](X,Y) = 2\,[\omega(X),\omega(Y)]$.
>
> **Matrix Lie group form.** For $G\subseteq GL(n)$, the Maurer-Cartan form is $\omega = g^{-1}\,dg$, and the equation reads
> $$
> d\omega = -\,\omega\wedge\omega,
> $$
> since $[\omega,\omega] \leftrightarrow 2\,\omega\wedge\omega$ under the matrix commutator.

> [!remark] Remark: 
> Let $G$ be a Lie group with Lie algebra $\mathfrak{g}$. The **Maurer-Cartan form** is the $\mathfrak{g}$-valued $1$-form $\omega \in \Omega^1(G;\mathfrak{g})$ defined by left-translating every tangent vector back to the identity:
> $$
> \omega_g = (dL_{g^{-1}})_g : T_gG \xrightarrow{\ \sim\ } T_eG = \mathfrak{g}.
> $$
> It is the canonical left-invariant $\mathfrak{g}$-valued form, satisfying $\omega_e = \mathrm{id}_{\mathfrak{g}}$.


> [!theorem] Structure Constants from Maurer-Cartan
> Expand the Maurer-Cartan form as $\omega = \omega^k e_k$. Then
> $$
> d\omega^k = -\tfrac{1}{2}\,c^{k}_{\,ij}\,\omega^i\wedge\omega^j.
> $$
> **Use it:** compute $d\omega^k$, write it as $\sum_{i<j} a^k_{ij}\,\omega^i\wedge\omega^j$, and read off
> $$
> c^{k}_{\,ij} = -\,a^{k}_{ij}\quad(i<j).
> $$


> [!example] Reading Off Structure Constants from Maurer-Cartan
> Fix a basis $\{e_1,\dots,e_n\}$ of $\mathfrak{g}$ with structure constants defined by
> $$
> [e_i,e_j] = c^{k}_{\,ij}\,e_k, \qquad c^{k}_{\,ij} = -c^{k}_{\,ji}.
> $$
> Expand the Maurer-Cartan form in this basis as $\omega = \omega^i\,e_i$, where each $\omega^i$ is a left-invariant real-valued $1$-form (the dual coframe to the left-invariant vector fields $X_i$ with $\omega^i(X_j)=\delta^i_j$).
>
> **Step 1 — expand the bracket term.**
> $$
> [\omega,\omega] = [\omega^i e_i,\ \omega^j e_j] = \omega^i\wedge\omega^j\,[e_i,e_j] = c^{k}_{\,ij}\,\omega^i\wedge\omega^j\,e_k.
> $$
>
> **Step 2 — plug into $d\omega + \tfrac12[\omega,\omega]=0$.** Componentwise ($e_k$-coefficient):
> $$
> d\omega^k + \tfrac{1}{2}\,c^{k}_{\,ij}\,\omega^i\wedge\omega^j = 0.
> $$
>
> **Result — the Maurer-Cartan structure equations.**
> $$
> \boxed{\,d\omega^k = -\tfrac{1}{2}\,c^{k}_{\,ij}\,\omega^i\wedge\omega^j\,}
> $$
> So the structure constants are exactly the coefficients of $d\omega^k$ in the basis of $2$-forms $\{\omega^i\wedge\omega^j\}_{i<j}$. Concretely:
> $$
> c^{k}_{\,ij} = d\omega^k(X_i,X_j) = -\,\omega^k\big([X_i,X_j]\big).
> $$

> [!example] Concrete computation
> Given an explicit left-invariant coframe $\{\omega^k\}$, compute each $d\omega^k$ and write it as $\sum_{i<j} a^k_{ij}\,\omega^i\wedge\omega^j$. Then
> $$
> c^{k}_{\,ij} = -\,a^{k}_{ij} \quad (i<j), \qquad c^{k}_{\,ji} = -\,c^{k}_{\,ij}.
> $$
> **Matrix group shortcut.** For $G\subseteq GL(n)$, take $\omega = g^{-1}dg$, expand $\omega = \sum_k \omega^k e_k$ against a matrix basis $\{e_k\}$ of $\mathfrak{g}$, then differentiate using $d\omega = -\omega\wedge\omega$ and match $e_k$-components to extract the $c^{k}_{\,ij}$.


> [!remark] Meaning
> The equation encodes the entire local structure of $G$: it is the integrability (flatness) condition for $\omega$, expressing that the group multiplication is associative at the infinitesimal level. Conversely, by the **fundamental theorem of Cartan**, a $\mathfrak{g}$-valued $1$-form on a simply connected manifold satisfying the Maurer-Cartan equation is locally $g^{-1}dg$ for a map into $G$, unique up to left translation.


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
