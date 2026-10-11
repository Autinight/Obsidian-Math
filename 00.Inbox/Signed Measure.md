---
type: concept
aliases:
  - Signed Measure
technique: []
tags: []
---
# Definition

> [!definition] Definition 1 (Definition:)
> Let $\left(X, \mathscr{A}\right)$ be a measurable space. We say $\nu$ is a **signed measure** on $\left(X,\mathcal{M}\right)$, provided that $\nu$ is  a set function
> $$
> \nu : \mathcal{M}\to \left[ -\infty,\infty \right] 
> $$
> satisfying:
> 1. $\nu \left(\varnothing \right)= 0$
> 2. If $X_1,X_2,\cdots$ are pairwise disjoint, there is 
>    $$
>    \nu \left(\bigcup _{i= 1}^{\infty}X_{i}\right)= \sum _{i= 1}^{\infty}\nu \left(X_{i}\right) 
>    $$
> 3. There do not exist sets $A,B\in \mathcal{M}$ such that 
>    $$
>    \nu \left(A\right)= \infty,\quad \nu \left(B\right)= -\infty 
>    $$

# Basic Properties

> [!lemma] 
> Let $\varphi$ be a signed measure on measurable space $\left(X, \mathscr{A}\right)$. 
> 1. If $E,F\in \mathscr{A}$ with $\varphi \left(E\right)> -\infty$, $F\subseteq E$, then 
>   $$
>   \varphi \left(F\right)> -\infty 
>   $$
> 2. If $A_{n}\in \mathscr{A}$, $A_{n}\uparrow A$, then 
>   $$
>   \lim_{n\to \infty}\varphi \left(A_{n}\right)= A 
>   $$
> 3. If $B_{n}\in \mathscr{A}$, $B_{n}\downarrow B$ and $\left| \varphi \left(B_1\right) \right|< \infty$, then
>   $$
>   \lim_{n\to \infty}\varphi \left(B_{n}\right)= B 
>   $$


## Positive Set, Negative Set, Zero Set

> [!definition] Definition: 
> Let $\varphi$ be a signed measure on measurable space $\left(X,\mathscr{A}\right)$. 
> - We say $P \in \mathscr{A}$ is a positive set of $\varphi$, if 
>   $$
>   \forall E\in \mathscr{A}, \varphi \left(E\cap P\right)\ge 0 
>   $$
> - The positive set for $-\varphi$ is called the negative set of $\varphi$.
> - If a set is both positive set and negative set of $\varphi$, we call it  the zero set for $\varphi$.

> [!note] 
> If we see sets in signed-measure space is composed with "negative-measure part" and "positive-measure part", then a positive set is one who only has "positive-measure part". 

The following theorem shows that we can extract such "positive-measure part" from a set with positive measure.

> [!theorem] 
> Let $\varphi$ be a sgined measure on measurable space $\left(X, \mathscr{A}\right)$. $E\in \mathscr{A}$ and $\varphi \left(E\right)> 0$, then there exists $S\in \mathscr{A}$, $S\subseteq E$, such that $\varphi \left(S\right)> 0$ as well as $S$ is a positive set for $\varphi$.


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
