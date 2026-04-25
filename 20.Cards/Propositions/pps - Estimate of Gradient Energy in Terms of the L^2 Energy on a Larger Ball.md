---
type: proposition
aliases: 
- Estimate of Gradient Energy in Terms of the L^2 Energy on a Larger Ball
technique: []
tags: []
---

> [!corollary] Corollary: 
> Let $u$ be as in [[lem - Cacciopolli's Inequality]]. Then for any $0\le r< R\le 1$, there holds
>  $$ \int _{B_{r}}\left| Du \right|^{2}\le \frac{C }{\left(R-r\right)^{2} }\int _{B_{R}}u^{2}  $$
> where $C$ is a positive constant depending only on $\lambda$ and $\Lambda$.

> [!proof] Proof: 
> Take $\eta$ such that $\eta = 1$ on $B_{r}$, $\eta = 0$ outside $B_{R}$, and $\left| D\eta  \right|\le 2\left(R-r\right)^{-1}$. Then we apply [[lem - Cacciopolli's Inequality]].


> [!remark] Remark: 
> 对于$\eta$的具体构造, 可以磨光以下径向分段连续函数
>  $$ \varphi \left(x\right)= \psi \left(\left| x \right| \right),\quad \psi \left(s\right)= \begin{cases} 1,&0\le s\le r+ \varepsilon \\ \frac{s-\left(r+ \varepsilon \right) }{\left(R-\varepsilon \right)-\left(r+ \varepsilon \right) } ,&r+ \varepsilon \le s\le R-\varepsilon \\0,&s\ge R-\varepsilon \end{cases}  $$ 
> 由于磨光不会增加Lipschitz范数. 调整$\varepsilon$即可.

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
