---
type: proposition
aliases:
  - Root's Additivity(Subtractibility) when strictly Obtuse(Acute)
---
## Statement

> [!proposition] Proposition: 
> Let $\alpha,\beta \in R$.
> 1. If the angle between $\alpha$ and $\beta$ is strictly obtuse, then $\alpha +  \beta\in R$.
> 2. If the angle between $\alpha$ and $\beta$ is strictly acute and $\left(\beta ,\beta \right)\ge \left(\alpha ,\alpha \right)$, then $\alpha -\beta \in R$.

> [!proof]- Proof: 
> In either case, we may assume that $\left(\beta ,\beta \right)\ge \left(\alpha ,\alpha \right)$. By [[Root System]] (R3), we know that $s_{\beta }\left(\alpha \right)= \alpha -\left< \alpha ,\beta  \right>\beta$ lies in $R$. The table in [[lem - Finiteness Lemma  and the Classification of Cartan integers]] gives that $\left< \alpha ,\beta  \right>$ is equal to $-1$ in the formal case and $1$ in the latter case.

## Corollary

> [!corollary] Corollary: 
> Let $B$ be a basis for a root system $R$. Then for each $\alpha ,\beta \in B$, $\alpha \neq \beta$, there is $\left(\alpha ,\beta \right)\le 0$

> [!proof] Proof: 
> If not, $\alpha -\beta \in R$ , a contradiction to the proposition.