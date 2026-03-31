---
type: proposition
aliases: 
- Caccioppoli-Type Exponential Energy Decay
technique: []
tags: []
---


> [!proposition] Proposition: 
> Let $u$ be as in [[lem - Cacciopolli's Inequality]]. Then for any $0< R\le 1$, there holds
>  $$ \int _{B_{\frac{R }{2 }}}u^{2}\le \theta \int _{B_{R}}u^{2}\text{ and }\int _{B_{\frac{R }{2 }}}\left| Du \right|^{2}\le \theta \int _{B_{R}}\left| Du \right|^{2}   $$ 
> where $\theta = \theta \left(n,\lambda ,\Lambda \right)\in \left(0,1\right)$

> [!remark] Remark: 
> 通过迭代这个估计, 并做重参数化, 我们得到
>  $$ \int _{B_{\rho }}u^{2}\le C\left(\frac{\rho  }{r }\right)^{\mu }\int _{B_{r}}u^{2}\quad \int _{B_{\rho }}\left| Du \right|^{2}\le C\left(\frac{\rho  }{r }\right)^{\mu }\int _{B_{r}}\left| Du \right|^{2}   $$
> for some positive constant $\mu = \mu \left(n,\lambda ,\Lambda \right)$. 即能量是随着半径的收缩指数级衰减的. 

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
