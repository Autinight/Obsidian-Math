---
type: definition
aliases: [The Lie Algebra of a Lie Group]
---

> [!definition] Definition: 
> Suppose $G$ is a Lie group. 
> * A vector field $X$ on $G$ is said to be **left-invariant** if it is invariant under all left translations, in the sense that it is $L_g$-related to itself for every $g\in G$. More explicitly, this means
> $$\begin{aligned} d(L_g)_{g'}(X_{g'})=X_{gg'},\quad \text{for all } g,g'\in G. \end{aligned}$$
> Since $L_g$ is a diffeomorphism, this can be abbreviated by writing $(L_g)_*X=X$ for every $g\in G$.
> 
> Because $(L_g)_*(aX+bY)=a(L_g)_*X+b(L_g)_*Y$, the set of all smooth left-invariant vector fields on $G$ is a linear subspace of $\mathfrak{X}(G)$. But it is much more than that. The central fact is that it is closed under Lie brackets.