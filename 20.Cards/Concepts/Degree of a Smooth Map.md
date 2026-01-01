---
type: concept
aliases: [Degree of a Smooth Map]
---
> [!theorem] Theorem: Degree of a Smooth Map
> Suppose $M$ and $N$ are compact, connected, oriented, smooth manifolds of dimension $n$, and $F: M \to N$ is a smooth map. There exists a unique integer $k$, called the **degree of $F$**, that satisfies both of the following conditions.
>
> (a) For every smooth $n$-form $\omega$ on $N$,
> $$\int_M F^*\omega = k \int_N \omega.$$
>
> (b) If $q \in N$ is a regular value of $F$, then
> $$k = \sum_{x \in F^{-1}(q)} \operatorname{sgn}(x),$$
> where $\operatorname{sgn}(x) = +1$ if $dF_x$ is orientation-preserving, and $-1$ if it is orientation-reversing

