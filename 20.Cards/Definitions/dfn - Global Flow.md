---
type: definition
aliases:
  - Global Flow
  - one-parameter group action
---

## Definition

> [!definition] Definition: 
> Motivated by these observations, we define a **global flow** on $M$ (also called a **one-parameter group action**) to be a continuous left $\mathbb{R}$-action on $M$; that is, a continuous map $\theta: \mathbb{R} \times M \rightarrow M$ satisfying the following properties for all $s, t \in \mathbb{R}$ and $p \in M$:
> $$
> \begin{aligned}
> \theta(t, \theta(s, p)) = \theta(t + s, p), \qquad \theta(0, p) = p. 
> \end{aligned}
> $$
> Given a global flow $\theta$ on $M$, we define two collections of maps as follows:

## Derivative Concepts

> [!definition] Definition: 
> Given a global flow $\theta$ on $M$, we define two collections of maps as follows:
> 
> - For each $t\in\mathbb{R}$, define a continuous map $\theta_t: M \to M$ by
> $$\theta_t(p) = \theta(t, p).$$
> The defining properties are equivalent to the **group laws**
> $$\begin{aligned}
> \theta_t \circ \theta_s = \theta_{t+s}, \qquad \theta_0 = \operatorname{Id}_M. 
> \end{aligned}$$
> As is the case for any continuous group action, each map $\theta_t: M \to M$ is a homeomorphism, and if the flow is smooth, $\theta_t$ is a diffeomorphism.
> 
> - For each $p\in M$, define a curve $\theta^{(p)}: \mathbb{R} \to M$ by
> $$\theta^{(p)}(t) = \theta(t, p).$$
> The image of this curve is the orbit of $p$ under the group action.