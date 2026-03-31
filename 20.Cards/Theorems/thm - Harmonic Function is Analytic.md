---
type: theorem
aliases: 
- Harmonic Function is Analytic
technique: []
---


> [!theorem] Theorem: 
> Harmonic function is analytic.

> [!proofsketch] Sketch of Proof: 
> 在充分小的球$B_{2R}\left(x\right)\subseteq \Omega$上, 考虑$\left| h \right|< R$. 
> Taylor展开的余项$R_{m}\left(h\right)$是
>  $$ \frac{1 }{m! }\left[ \left(h_1\frac{\partial }{\partial x_1}+ \cdots + h_{n}\frac{\partial }{\partial x_{n}}\right)^{m}h \right]\left(x_1+ \theta  h_1,\cdots ,x_{n}+ \theta h_{n}\right) $$ 
> 利用估计[[thm - Gradient Estimates for Harmonic Functions]]. 放缩成
>  $$ \frac{1 }{m! }n^{m}\left| h \right|^{m}\frac{n^{m}e^{m-1}m! }{R^{m} } \max _{\overline{B}_{2R}\left(x\right)}\left| u \right|\le \left(\frac{\left| h \right|n^{2}e  }{ R}\right)^{m}\max _{\overline{B}_{2R}\left| u \right| }  $$
> 对于所有的$\left| h \right|$满足$\left| h \right|n^{2}e < \frac{1 }{2 }R$, 有$R_{m}\left(h\right)\to 0$ 当$m\to \infty$时成立.

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

