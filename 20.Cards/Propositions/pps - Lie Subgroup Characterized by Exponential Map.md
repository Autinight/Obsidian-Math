---
type: proposition
aliases:
  - Lie Subgroup Characterized by Exponential Map
tags:
  - Lie_subgroup
  - exponential_map
---
> [!proposition] Proposition
> Let $G$ be a Lie group, and let $H \subseteq G$ be a Lie subgroup. With $\operatorname{Lie}(H)$ considered as a subalgebra of $\operatorname{Lie}(G)$ in the usual way, the exponential map of $H$ is the restriction to $\operatorname{Lie}(H)$ of the exponential map of $G$, and
> $$ \operatorname{Lie}(H)=\{X \in \operatorname{Lie}(G) : \exp tX \in H \text{ for all } t \in \mathbb{R}\}. $$

> [!proof]
> Let $i:H\hookrightarrow G$ be the inclusion. For $X\in \operatorname{Lie}(H)$, the curve
> $$
> t\mapsto i(\exp_H(tX))
> $$
> is a one-parameter subgroup of $G$ with initial velocity $(di)_eX=X$.
> By uniqueness of one-parameter subgroups with a given initial velocity,
> $$
> i(\exp_H(tX))=\exp_G(tX).
> $$
> Hence
> $$
> \exp_H X=\exp_G X
> $$
> for all $X\in \operatorname{Lie}(H)$.
>
> Therefore, if $X\in \operatorname{Lie}(H)$, then
> $$
> \exp_G(tX)=\exp_H(tX)\in H
> $$
> for all $t\in\mathbb R$.
> Thus
> $$
> \operatorname{Lie}(H)
> \subseteq
> \{X\in \operatorname{Lie}(G):\exp_G(tX)\in H\ \forall t\in\mathbb R\}.
> $$
>
> Conversely, suppose
> $$
> X\in \operatorname{Lie}(G)
> $$
> and
> $$
> \exp_G(tX)\in H
> $$
> for all $t\in\mathbb R$.
> Then
> $$
> \gamma(t)=\exp_G(tX)
> $$
> is a curve in $H$ through the identity, so
> $$
> \gamma'(0)\in T_eH=\operatorname{Lie}(H).
> $$
> But
> $$
> \gamma'(0)=X.
> $$
> Hence
> $$
> X\in \operatorname{Lie}(H).
> $$
> The reverse inclusion follows, proving the claim.
