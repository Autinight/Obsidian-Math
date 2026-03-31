---
type: proposition
aliases: 
- Maximum Principle for Mean Value Property
technique: []
---
> [!remark] Remark: 
> We assume that $\Omega$ is a connected domain in $\mathbb{R} ^{n}$. $\omega _{n}$ denotes the surface area of the unit sphere in $\mathbb{R} ^{n}$.

### Maximum Principle for Mean Value Property

> [!proposition] Proposition: 
> If $u\in C\left(\overline{\Omega}\right)$ satisfies the mean value property in $\Omega$, then $U$ assumes its maximum and minimum only on $\partial \Omega$ unless $u$ is constant.

> [!remark] Remark: 
> Thanks to [[thm - Harmonicity and Mean Value Property are Equivalent]], Maximum Principle applicable to [[dfn - Harmonic Function|harmonic function]].

> [!proofsketch] Sketch of Proof: 
> 使用连通性论证. $\left\{ u= \max _{\overline{\Omega}}u \right\}\subseteq \Omega$天生是闭的. 由于中值性质的调解, 最大值必须向外扩散, 从而是开性质.

> [!proof] Proof: 
> Set 
>  $$ \Sigma  = \left\{ x\in \Omega :u\left(x\right)= M= \max _{\overline{\Omega}}u \right\} $$
> It is obvious that $\Omega$ is closed in $\Omega$.   Next we show that $\Sigma$ is open. For any $x_0\in \Sigma$, take $\overline{B}_{r}\left(x_0\right)\subseteq \Omega$ for some $r> 0$, by the [[dfn - Mean Value Properties|Mean Value Properties]] we have 
>  $$ M= u\left(x_0\right)= \frac{n }{\omega _{n}r^{n} }\int _{B_{r}\left(x_0\right)}u\left(y\right)\,d y\le M \frac{n }{\omega _{n}r^{n} }\int _{B_{r}\left(x_0\right)}1\,d y= M $$ 
> This implies $u= M$ in $B_{r}\left(x_0\right)$. Hence $\Sigma = \varnothing$ or $\Sigma = \Omega$.

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

