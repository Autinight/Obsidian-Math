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

> [!proof]- Proof: 
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

### Maximum Principle

> [!theorem] Theorem: 
> Let $u\in C^{2}\left(\Omega \right)$ satisfies $\Delta u\ge 0$. Assume that there exists $y\in \Omega$ such that $u\left(y\right)= \sup _{x\in \Omega }u\left(x\right)$. Then $u$ is constant.

> [!proof] Proof: 
> Let $M= \sup _{x\in \Omega }u\left(x\right)$. Define
> $$ 
> \Omega _{M}= \left\{ x\in \Omega : u\left(x\right)= M \right\}
>  $$ 
>  Since $u$ is continuous, $u$ is closed relative to $\Omega$. 
>  Note that $u-M$ is subharmonic either. Let $y$ be any point in $\Omega _{M}$,  we have for each $B_{r}\left(y\right)\subset \subset \Omega$, there is 
>  $$
>  0= u\left(y\right)-M\le  \frac{1 }{\omega _{n}r^{n} }\int _{B_{r}\left(y\right)}u\left(x\right)-M\,d x\le 0
>   $$ 
>  Thus $u= M$ on $B_{r}\left(x\right)$, $\Omega _{M}$ is open relative to $\Omega$. We have 
>  $$
>   \Omega _{M}= \Omega  
>   $$ 

> [!theorem] Theorem: 
> Let $u\in C^{2}\left(\Omega \right)\cap C^{0}\left(\overline{\Omega} \right)$. If $\Delta u\ge 0$, then 
> $$ \sup _{x\in \Omega }u= \sup _{x\in \partial \Omega }u $$
> 
> Consequently, for harmonic $u$, we have 
> $$ \inf _{\partial \Omega }u\le u\left(x\right)\le \sup _{\partial \Omega }u,\quad \forall x\in \Omega  $$
> 

> [!corollary] Corollary: Uniqueness Theorem for Dirichlet Problem
> Let $u,v\in C^{2}\left(\Omega \right)\cap C^{0}\left(\overline{\omega}\right)$. If $\Delta u= \Delta v$ and $u|_{\partial \Omega }= v|_{\partial \Omega }$, then $u= v$.


### Harnack Inequality  

> [!theorem] Theorem: 
> Let $u$ be a non-negative harmonic function in $\Omega$. Then for any bounded subdomain $\Omega ^{\prime} \subset \subset \Omega$, there exists $C$ depending only on $n, \Omega , \Omega ^{\prime}$, such that
> $$
> \sup _{\Omega ^{\prime} }u\le C \inf _{\Omega ^{\prime} }u 
> $$ 

> [!remark] Remark: 
> Preview : 由于下方球的估计方式在经过相似变换和正交变换也是成立的, 因此齐次的椭圆方程也会有类似的估计. 

> [!proof] Proof: 
> Let $y\in \Omega$, $B_{4R}\left(y\right)\subseteq \Omega ^{\prime}$. Then for any two points $x_1,x_2\in B_{R}\left(y\right)$, 
> $$
> u\left(x_1\right)= \frac{1 }{\omega _{n}R^{n} } \int _{B_{R}\left(x_1\right)}u\left(x\right)\,d x\le \frac{1 }{\omega _{n}R^{n} }  \int _{B_{2R}\left(y\right)} u\left(x\right)\,d x
> $$
> $$
> u\left(x_2\right)= \frac{1 }{\omega _{n}\left(3R\right)^{n} } \int _{B_{3R}\left(x_2\right)}u\left(x\right)\,d x\ge \frac{1 }{\omega _{n}\left(3R\right)^{n} } \int _{B_{2R}\left(y\right)} u\left(x\right)\,d x
> $$
> Consequently we obtain
> $$
> \sup _{B_{R}\left(y\right)}u\le 3^{n} \inf _{B_{R}\left(y\right)}u \tag{1}
> $$
> We choose $x_1,x_2\in \overline{\Omega}^{\prime}$ such that $u\left(x_1\right)= \sup _{\Omega ^{\prime} }u$ and $u\left(x_2\right)= \inf _{\Omega ^{\prime} }u$. Let $\Gamma \subseteq \overline{\Omega}^{\prime}$ be a closed arc joining $x_1$ and $x_2$ and choose $R$ such that $4R\le \operatorname{dist}{\left(  \Gamma , \partial \Omega  \right)}$. Since $\Gamma$ is compact in $\Omega$.  $\Gamma$ can be covered by a finite number $N$ of balls with radius $R$. Applying the estimate (1) in each ball and combining the resulting inequalities, we obtain
> $$
> u\left(x_1\right)\le 3^{nN}u\left(x_2\right) 
> $$
> Hence the estimate holds with $C= 3^{nN}$.



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
