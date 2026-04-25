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

> [!remark] Remark: 
> - 设流的存在区间是$\left(T_{\min }\left(p\right),T_{\max }\left(p\right)\right)$, 则这个命题等价于$T_{\max }\left(p\right)$是下半连续的, $T_{\min }\left(p\right)$是上半连续的.
> - 下半连续等价于严格上水平集是开的(下水平集是闭的)

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
