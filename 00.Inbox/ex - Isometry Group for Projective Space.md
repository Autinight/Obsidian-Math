---
type: exercise
aliases:
  - Isometry Group for Projective Space
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---


Let $L\subseteq \mathbb{F}^{n}$ be a 1-dimensional $\mathbb{F}$- linear subspace. Let $P\left(L\right)= L/\left\{ v\sim kv, \right\}$

> [!exercise] EXERCISE 5.9.40.
> Consider the real or complex projective space $\mathbb{FP}^{n}$.
> 1. Show that $\operatorname{GL}(n+1,\mathbb{F})$ acts on $\mathbb{FP}^{n}$ by mapping 1-dimensional subspaces in $\mathbb{F}^{n+1}$ to 1-dimensional subspaces.
> 2. Let $H\subset\operatorname{GL}(n+1,\mathbb{F})$ be the transformations that act trivially. Show that $H=\{\lambda I_{n+1}\mid\lambda\in\mathbb{F}\}$ and is a normal subgroup of $\operatorname{GL}(n+1,\mathbb{F})$.
> 3. Define $\operatorname{PGL}(n+1,\mathbb{F})=\operatorname{GL}(n+1,\mathbb{F})/H$. Show that given $p\in\mathbb{FP}^{n}$ each element $F\in\operatorname{PGL}(n+1,\mathbb{F})$ is uniquely determined by $F(p)$ and $DF|_{p}$.
> 4. Show that there is no Riemannian metric on $\mathbb{FP}^{n}$ such that this action is by isometries.
> 5. Show that the action is by affine transformations with respect to the standard (submersion) metric on $\mathbb{FP}^{n}$ (see exercise 5.9.39 for the definition of affine transformations).
> 6. For a subgroup $G\subset\operatorname{GL}$, define $PG=G/H\cap G$. Show that the isometry group of $\mathbb{RP}^{n}$ is given by $\operatorname{PO}(n+1)$.
> 7. Show that the isometry group of $\mathbb{CP}^{n}$ is given by $\operatorname{PU}(n+1)$.
> 8. Show that the isometry group of $H^{n}(R)$ can be naturally identified with $\operatorname{PO}(n,1)$.
> 9. As in exercise 1.6.9 consider $\operatorname{Iso}(\mathbb{R}^{n})$ as the matrix group
> $$G=\left\{\begin{bmatrix}O&v\\0&1\end{bmatrix}\mid O\in\operatorname{O}(n),~v\in\mathbb{R}^{n}\right\}\subset\operatorname{GL}(n+1,\mathbb{R}).$$
> Show that $PG=G$.

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
