---
type: lemma
aliases: 
- Harmonic-Type Exponential Energy Decay
technique: []
tags: []
---

> [!lemma] Lemma: 
> Suppose $\left\{ a_{ij} \right\}$ is a constant positive definite matrix with 
>  $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\xi _{i}\xi _{j}\le \Lambda \left| \xi  \right|^{2}\text{ for any }\xi \in \mathbb{R} ^{n}   $$
> for some constant $0< \lambda \le \Lambda$. Suppose $u\in C^{1}\left(B_1\right)$ satisfies 
>  $$ \int _{B_1}a_{ij}D_{i}uD_{j}\varphi = 0\text{ for any }\varphi \in C_{0}^{1}\left(B_1\right) $$
> Then for any $0< \rho \le r$, there hold
> $$ \int _{B_{\rho }}\left| u \right|^{2}\le c\left(\frac{\rho  }{r }\right)^{n}\int _{B_{r}}\left| u \right|^{2},   $$
>  $$ \int _{B_{\rho }}\left| u-u_{\rho } \right|^{2}\le c\left(\frac{\rho  }{r }\right)^{n+ 2}\int _{B_{r}}\left| u-u_{r} \right|^{2}   $$ 
> where $c= \left(\lambda ,\Lambda \right)$ is apositive constant and $u_{r}$ denotes the average of $u$ in $B_{r}$.

> [!remark] Remark: 
> 也就是说,平均积分在收缩的情况下是同阶可控的. 
>
> 




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
