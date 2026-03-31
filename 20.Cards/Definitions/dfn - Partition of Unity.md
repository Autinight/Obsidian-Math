---
type: definition
aliases: [Partition of Unity]
---

> [!definition] Definition: 
> The next construction is the most important application of paracompactness. Suppose $M$ is a topological space, and let $\mathcal{X}=(X_\alpha)_{\alpha\in A}$ be an arbitrary open cover of $M$, indexed by a set $A$. A **partition of unity subordinate to $\mathcal{X}$** is an indexed family $(\psi_\alpha)_{\alpha\in A}$ of continuous functions $\psi_\alpha: M \to \mathbb{R}$ with the following properties:
> 
> - (i) $0 \leq \psi_\alpha(x) \leq 1$ for all $\alpha \in A$ and all $x \in M$.
> - (ii) $\operatorname{supp} \psi_\alpha \subseteq X_\alpha$ for each $\alpha \in A$.
> - (iii) The family of supports $(\operatorname{supp} \psi_\alpha)_{\alpha \in A}$ is locally finite, meaning that every point has a neighborhood that intersects $\operatorname{supp} \psi_\alpha$ for only finitely many values of $\alpha$.
> - (iv) $\sum_{\alpha \in A} \psi_\alpha(x) = 1$ for all $x \in M$.
> 
> Because of the local finiteness condition (iii), the sum in (iv) actually has only finitely many nonzero terms in a neighborhood of each point, so there is no issue of convergence. If $M$ is a smooth manifold with or without boundary, a **smooth partition of unity** is one for which each of the functions $\psi_\alpha$ is smooth.

