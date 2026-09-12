---
type: concept
aliases:
- Harmonic Function
technique: []
tags: []
description: 介绍了调和性质与平均值性质的关系
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

> [!proof] Proof: 
> 
> We set 
> $$
> \rho = \left| x-y \right|,\quad w= \frac{x-y }{ \left| x-y \right| }  
> $$
> $$
> \int _{\partial B}\frac{\partial u}{\partial \nu    }\,d s= \int _{B}\Delta u\,d x 
> $$
> 
> 
> $$
> \begin{aligned} \int _{\partial B_{\rho }}\frac{\partial u}{\partial \nu }\,d s&= \int _{\partial B_{\rho }} \frac{\partial u}{\partial r}\left(y+ \rho w\right)\,d s= \rho ^{n-1} \int _{\left| w  \right|= 1 }\frac{\partial u}{\partial r} \left(y+ \rho w\right)\,d w\\&= \rho ^{n-1}\partial _{r}\int _{\left| w \right|= 1 }u\left(y+ \rho w\right)\,d w \\ &=  \rho ^{n-1}\partial _{r}\left(\rho ^{1-n}\int _{\partial B_{\rho }}u\left(y+ \rho w\right)\,d s\right) \\&= \rho ^{n-1}\partial _{r}\left(\rho ^{1-n}\int _{\partial B_{\rho }}u\,d s\right) \end{aligned}
> $$
> 
> Consequently for any $\rho \in \left(0,R\right)$, 
> $$
> \rho ^{1-n}\int _{\partial B_{\rho }}u\,d s = (\le ,\ge ) R^{1-n} \int _{\partial B_{R}}u\,d s
> $$
> and since 
> $$
> \lim_{n\to \infty}\rho ^{1-n} \int _{\partial B_{\rho }}u\,d y= n\omega _{n}u\left(y\right) 
> $$
> We get
> $$
> u\left(y\right)= \left(\le ,\ge \right) \frac{1 }{n\omega _{n}R^{n-1} }\int _{\partial B_{R}}u\,d s 
> $$
> which is the surface mean value inequalities.
> To get the solid version, we write the above in the form
> $$
> \rho ^{n-1}u\left(y\right)= \left(\le ,\ge \right) \frac{1 }{n\omega _{n} } \int _{\partial B_{\rho }}u\,d s
> $$
> and integrate with respect to $\rho$ from $0$ to $R$, follows immediately
> $$
>  R^{n}u\left(y\right)= \left(\le ,\ge \right)\frac{1 }{\omega _{n} }\int _{B_{\rho }}u\,d x
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
