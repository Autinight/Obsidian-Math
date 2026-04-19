---
type: proposition
aliases:
- Continuous Reliance for Flow Characterized by Compact Interval
technique: []
tags: []
---

> [!proposition] Proposition: 
> Let $M$ be a manifold, $X$ is a smooth vector field on $M$. Let $\mathcal{D}$ be the flow domain for $X$. Then for $p_0\in M$, such $\left[ a,b \right]\subseteq \mathcal{D}^{\left(p_0\right)}$, then there exists a neighborhood $V$ of $p_0$, such that 
>  $$ \left[ a,b \right]\times V\subseteq \mathcal{D} $$ 

> [!proof] Proof: 
> We know from $\left[ a,b \right]\subseteq \mathcal{D}^{\left(p_0\right)}$ that $\left[ a,b \right]\times \left\{ p_0 \right\}\subseteq \mathcal{D}$. Since [[thm - Fundamental Theorem on Flows|flow domain is open]] and $\left[ a,b \right]$ is compact,  the conclusion follows immediately from [[lem - Tube Lemma|Tube Lemma]]

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                return p.aliases && dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```
