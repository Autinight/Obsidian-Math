---
type: concept
aliases:
  - Tangent Distributions
  - Distribution
  - k-plane fields
  - tangent subbundles
---

## Definition

> [!definition] Definition: 
> Let $M$ be a smooth manifold. 
> * A **distribution on $M$ of rank $k$** is a rank-$k$ subbundle of $TM$. 
> * It is called a **smooth distribution** if it is a smooth subbundle. 

## Local Characterization

> [!theorem] Theorem: 
> For each $p\in M$ , we gives a linear subspace $D_p\subseteq T_pM$ of dimension $k$, and letting $D=\bigcup_{p\in M} D_p$.  $D$ is a smooth distribution if and only if each point of $M$ has a neighborhood $U$ on which there are smooth vector fields $X_1,\dots,X_k: U\to TM$ such that $X_1|_q,\dots,X_k|_q$ form a basis for $D_q$ at each $q\in U$.

> [!remark] Remark: 
>  In this case, we say that $D$ is the distribution **(locally) spanned by the vector fields** $X_1,\dots,X_k$.