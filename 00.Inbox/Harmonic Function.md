---
type: concept
aliases:
- Harmonic Function
technique: []
tags: []
---

> [!remark] Remark: 
> Let $\Omega$ be a domain in $\mathbb{R} ^{n}$. Denotes $\omega _{n}$ by the volume of the unit ball in $\mathbb{R} ^{n}$.

### Harmonic Function

> [!definition] Definition: Harmonic Function
> Let $u\in C^{2}\left(\Omega \right)$. The Laplace of $u$, denotes by $\Delta u$, is defined by 
> $$
> \Delta u=  \sum _{i= 1}^{n}D_{ii}u= \operatorname{div}Du
> $$
> The function $u$ is called harmonic(subharmonic, superharmonic) in $\Omega$, if it satisfies there 
> $$
> \Delta u= 0 (\ge 0,\le 0) 
> $$

### Mean Value Property

> [!theorem] Theorem: 
> 
> Let $u \in C^{2}\left(\Omega \right)$ satisfies $\Delta u= 0\left(\ge 0,\le 0\right)$, then for any ball $B= B_{R}\left(y\right)\subset \subset \Omega$, we have 
> $$
> u\left(y\right)= \left(\le ,\ge \right) \frac{1 }{n\omega _{n}R^{n-1} }\int _{\partial B}u\,d s
> $$
> and
> $$
> u\left(y\right)= \left(\le ,\ge \right)\frac{1 }{\omega _{n}R^{n} }\int _{B} u\,d x
> $$

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
