---
type: definition
aliases: [de Rham Cohomology Group]
---
## Preliminaries

> [!definition] Definition: 
> Let $M$ be a smooth manifold with or without boundary, and let $p$ be a nonnegative integer. Because $d:\Omega^p(M)\to\Omega^{p+1}(M)$ is linear, its kernel and image are linear subspaces. We define
> $$
> \begin{aligned}
> \mathcal{Z}^p(M) &= \operatorname{Ker}\left(d:\Omega^p(M)\to\Omega^{p+1}(M)\right)=\{\text{closed } p\text{-forms on } M\}, \\
> \mathcal{B}^p(M) &= \operatorname{Im}\left(d:\Omega^{p-1}(M)\to\Omega^p(M)\right)=\{\text{exact } p\text{-forms on } M\}.
> \end{aligned}
> $$
> By convention, we consider $\Omega^p(M)$ to be the zero vector space when $p<0$ or $p>n=\operatorname{dim}M$, so that, for example, $\mathcal{B}^0(M)=0$ and $\mathcal{Z}^n(M)=\Omega^n(M)$.

## Definition

> [!definition] Definition: 
> The fact that every exact form is closed implies that $\mathcal{B}^p(M) \subseteq \mathcal{Z}^p(M)$. Thus, it makes sense to define the **de Rham cohomology group in degree $p$** (or the **$p$th de Rham group**) **of $M$** to be the quotient vector space
> $$H_{\mathrm{dR}}^p(M) = \frac{\mathcal{Z}^p(M)}{\mathcal{B}^p(M)}.$$

> [!remark] Remark: 
> * there "groups" are acual real vector spaces
> * It is clear that $H_{\mathrm{dR}}^{p}(M)=0$ for $p<0$ or $p>\operatorname{dim} M$, because $\Omega^{p}(M)=0$ in those cases. For $0\le p\le n$, the definition implies that $H_{\mathrm{dR}}^{p}(M)=0$ if and only if every closed $p$-form on $M$ is exact.