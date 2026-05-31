---
type: definition
aliases:
- Maurer-Cartan Form
technique: []
tags: []
---
> [!definition] Maurer-Cartan form
> Let $G$ be a Lie group with Lie algebra $\mathfrak g=T_eG$.
> The **left Maurer-Cartan form** is the $\mathfrak g$-valued $1$-form
> $$
> \theta\in \Omega^1(G;\mathfrak g)
> $$
> defined by
> $$
> \theta_g:T_gG\to \mathfrak g,
> \qquad
> \theta_g(v)=(dL_{g^{-1}})_g(v).
> $$

> [!remark] Remark: 
> 最自然的一个$\mathfrak{g}$-值1-形式.


The Maurer-Cartan form satisfies the **Maurer-Cartan equation**

$$
\boxed{
d\theta+\frac12[\theta,\theta]=0
}
$$

**Intuition.** The Maurer-Cartan form is the canonical way to identify every tangent space $T_gG$ with the Lie algebra $\mathfrak g$ by translating tangent vectors back to the identity.


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
