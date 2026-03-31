---
type: proposition
aliases: 
- Harnack Inequality for Nonnegative Harmonic Function
technique: []
tags: []
---

> [!proposition] Proposition: 
> Suppose $u$ is a nonnegative harmonic function in $B_1$. Then there holds 
>  $$ u\left(x_1\right)\le Cu\left(x_2\right),\quad \text{for any }x_1,x_2\in B_{1 / 2} $$
> where $C$ is a positive constant depending only on $n$.

> [!proof] Proof: 
> By [[pps - Maximum Principle for Mean Value Property|maximum principle]], $u> 0$ on $B_1$ or $u\equiv 0$ on $B_1$. For the case $u> 0$, take any, $x_1,x_2\in B_{1 / 2}$. From [[lem - Differential Harnack Inequality for Nonnegative Harmonic Function|differential Harnack]] and  by [[lem - Fundamental Theorem of Line Integrals|simple integration]] we obtaine 
>  $$ \begin{aligned} \log \frac{u\left(x_1\right) }{u\left(x_2\right) }&\le \left| x_1-x_2 \right|\int _{0}^{1}\left| D\log u\left(tx_2+ \left(1-t\right)x_1\right) \right|\,d t\\& \le C\left| x_1-x_2 \right|\le \log C\left(n\right) \end{aligned}   $$  
> Thus 
>  $$ u\left(x_1\right)\le C \left(n\right)u\left(x_2\right) $$ 

 

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
