---
type: definition
aliases:
  - Flow Domain and Flow
  - local flow
  - local one-parameter group action
---
## Definition

> [!definition] Definition: 
>  If $M$ is a manifold.
> * A **flow domain** for $M$ is an open subset $\mathcal{D} \subseteq \mathbb{R} \times M$ with the property that for each $p \in M$, the set $\mathcal{D}^{(p)} = \{t \in \mathbb{R} : (t, p) \in \mathcal{D}\}$ is an open interval containing $0$.
> * A **flow** on $M$ is a continuous map $\theta: \mathcal{D} \to M$, where $\mathcal{D} \subseteq \mathbb{R} \times M$ is a flow domain, that satisfies the following group laws: 
>   - for all $p \in M$,
>   $$\begin{aligned} \theta(0, p) = p, \end{aligned}$$
>   - and for all $s \in \mathcal{D}^{(p)}$ and $t \in \mathcal{D}^{(\theta(s,p))}$ such that $s + t \in \mathcal{D}^{(p)}$,
>   $$\begin{aligned} \theta(t, \theta(s, p)) = \theta(t + s, p). \end{aligned}$$

## Derivative Concepts

> [!definition] Definition: 
> * If $\theta$ is a flow, we define $\theta_t(p)=\theta^{(p)}(t)=\theta(t,p)$ whenever $(t,p)\in\mathcal{D}$.
> *  For each $t\in\mathbb{R}$, we also define
>    $$M_t=\{p\in M : (t,p)\in\mathcal{D}\},$$
>    so that
>    $$p\in M_t \Leftrightarrow t\in\mathcal{D}^{(p)} \Leftrightarrow (t,p)\in\mathcal{D}.$$
> * If $\theta$ is smooth, the **infinitesimal generator of $\theta$** is defined by $V_p=\theta^{(p)}{'}(0)$.