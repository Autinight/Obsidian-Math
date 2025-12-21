---
aliases:
  - Mann-Wald Theorem
---
> [!theorem] Continuous Mapping Theorem
> Let $\{X_n\}$ and $X$ be random elements defined on a probability space $(\Omega, \mathcal{F}, P)$ taking values in a metric space $(S, d)$ (usually $\mathbb{R}^k$). Let $g: S \to S'$ be a measurable function on another metric space $(S', d')$. Let $D_g \subset S$ be the set of discontinuity points of the function $g$.
> If $P(X \in D_g) = 0$ (i.e., $g$ is almost everywhere continuous on the support of $X$), then the following conclusions hold:
> 
> **Almost Sure Convergence**:
> $$X_n \xrightarrow{a.s.} X \implies g(X_n) \xrightarrow{a.s.} g(X)$$
> 
> **Convergence in Probability**:
> $$X_n \xrightarrow{P} X \implies g(X_n) \xrightarrow{P} g(X)$$
> 
> **Convergence in Distribution**:
> $$X_n \xrightarrow{d} X \implies g(X_n) \xrightarrow{d} g(X)$$