---
type: proposition
aliases: 
- Hölder Regularity from Gradient Energy Decay
technique: []
tags: []
---


> [!proposition] Proposition: 
> Suppose $u\in H_{loc}^{1}\left(\Omega \right)$ satisfies 
>  $$ \int _{B_{r}\left(x\right)} \left| Du \right|^{2}\le M^{2}r^{n-2+2\alpha }\text{ for any }B_{r}\left(x\right)\subseteq \Omega  $$ 
> for omse $\alpha \in \left(0,1\right)$. Then $u\in C^{\alpha }\left(\Omega \right)$ and for any $\Omega ^{\prime} \subset \subset \Omega$,  there holds
>  $$ \sup _{\Omega ^{\prime} }\left| u \right|+ \sup _{x,y\in \Omega ^{\prime} , x\neq y}\frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\alpha }  }\le c\left\{ M+ \left\| u \right\|_{L^{2}\left(\Omega \right)} \right\}  $$ 
> where $c= c\left(n,\alpha ,\Omega ,\Omega ^{\prime} \right)> 0$

> [!proof] Proof: 
> By Poincaré inequality, we obtain
>  $$ \int _{B_{r}\left(x\right)}\left| u-u_{x,r} \right|^{2}\le c\left(n\right)r^{2}\int _{B_{r}\left(x\right)}\left| Du \right|^{2}\le c\left(n\right)M^{2}r^{n+ 2\alpha }   $$ 
> By applying [[thm - Hölder Regularity from Oscillation Decay]], we have re result.


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
