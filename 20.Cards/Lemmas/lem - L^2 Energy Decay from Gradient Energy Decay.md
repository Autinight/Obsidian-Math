---
type: lemma
aliases: 
- L^2 Energy Decay from Gradient Energy Decay
technique: []
tags: []
---

> [!lemma] Lemma: 
> Suppose $u\in H^{1}\left(\Omega \right)$ satisfies
>  $$ \int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\le Mr^{\mu }\text{ for any }B_{r}\left(x_0\right)\subseteq \Omega   $$
> for some $\mu \in \left[ 0,n \right)$. Then for any $\Omega ^{\prime} \subset \subset \Omega$ there holds for any $B_{r}\left(x_0\right)\subseteq \Omega$ with $x_0\in \Omega ^{\prime}$
>  $$ \int _{B_{r}\left(x_0\right)}\left| u \right|^{2}\le c\left(n,\lambda ,\mu ,\Omega ,\omega ^{\prime} \right)\left\{ M+ \int _{\Omega }u^{2} \right\}r^{\lambda }  $$
> where $\lambda = \mu + 2$ if $\mu< n-2$ and $\lambda$ is any number in $\left[ 0,n \right)$ if $n-2\le \mu < n$.    



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
