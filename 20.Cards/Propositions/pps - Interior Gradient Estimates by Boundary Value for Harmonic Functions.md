---
type: proposition
aliases:
  - Interior Gradient Estimates by Boundary Value for Harmonic Functions
technique:
  - maximum principle
tags:
  - gradient_estimate
  - cut-off
---

> [!proposition] Proposition: 
> Suppose $u$ is harmonic in $B_1$. Then there holds
>  $$ \sup _{B_{\frac{1}{2}}}\left| Du \right|\le c\sup _{\partial B_1}\left| u \right|   $$
> where $c= c\left(n\right)$ is a positive constant. In particular, for any $\alpha \in \left[ 0,1 \right]$ there holds
>  $$ \left| u\left(x\right)-u\left(y\right) \right|\le c\left| x-y \right|^{\alpha }\sup _{\partial B_1}\left| u \right| \text{ for any }x,y\in B_{\frac{1}{2}}    $$  
> where $c= c\left(n,\alpha \right)$ is a positive constant.

> [!remark] Remark: 
> 这里的In particular, 实际上就是在有界的连通开集$\Omega$里面, 
>  $$ \left\| Du \right\|_{L^{\infty}\left(\Omega \right)}\implies u\in C^{0,1}\left(\Omega \right)\implies u\in C^{0,\alpha }\left(\Omega \right) $$
> 其中第二个$\implies$需要有界性. 

> [!proofsketch] Sketch of Proof: 
> 想法是通过截断$\left| Du\right|^{2}$, 并利用极值原理, 将内部$\left| Du \right|$用边界$u$估计的问题, 转化为控制
>  $$ \Delta \left(\eta ^{2}\left| Du \right|^{2}+ \alpha u^{2} \right)\ge 0 $$
> $\eta$让$\left| Du \right|$在内部保持而在边界消失.  
>  $$ \Delta \left(\left| Du \right|^{2} \right)= 2\sum _{i,j= 1}^{n}\left(D_{ij}u\right)^{2}+ 2\sum _{i= 1}^{n}D_{i}uD_{i}\left(\Delta u\right)$$
>  $$ \Delta \left(u^{2}\right)= 2\left| Du \right|^{2}+ 2u\Delta u   $$
> 大体可以认为, 能量的Laplace是高一阶的能量加上符号不确定的交叉项. $\Delta u= 0$保证了在系统达到稳定的情况下, 交叉项消失.
>  $$ \Delta \left(\left| Du \right|^{2} \right)= 2\sum _{i,j= 1}^{n}\left(D_{ij}u\right)^{2} $$
>  $$ \Delta \left(u^{2}\right)= 2\left| Du \right|^{2}  $$   
> 如果我们不做截断, 表达式$\left| Du \right|^{2}+ \alpha u^{2}$的Laplace无论如何都是非负的. 但如果做了截断, 稳定态发生了变化, 产生了交叉项
>  $$ \begin{aligned} \Delta \left(\eta ^{2}\left| Du \right|^{2} \right)&= 2\eta \Delta \eta \left| Du \right|^{2}+ 2\left| D\eta  \right|^{2}\left| Du \right|^{2}\\&+ 8\eta \sum _{i,j= 1}^{n}D_{i}\eta D_{j}uD_{ij}u+ 2\eta ^{2}\sum _{i,j= 1}^{n}\left(D_{ij}u\right)^{2}    \end{aligned} $$
> 对于这个交叉项
>  $$ \begin{aligned} 8\eta D_{i}\eta D_{j}uD_{ij}u&= 2 \left(2\sqrt{2}D_{i}\eta D_{j}u\right)\left(\sqrt{2}\eta D_{ij}u\right)\\&\ge - 8\left(D_{i}\eta D_{j}u\right)^{2}- 2 \eta ^{2}\left(D_{ij}u\right)^{2} \end{aligned} $$
>  求和后, 后者正好抵消, 前者变成$-8\left| D\eta  \right|^{2}\left| Du \right|^{2}$. 
> 这里看出为什么需要二次的截断. 因为我们需要给交叉项保留$\eta$, 来接住后面的平方项. 最后剩下了
>  $$ \Delta \left(\eta ^{2}\left| Du \right|^{2} \right)\ge \left(2\eta \Delta \eta -6\left| \eta \right|^{2} \right)\left| Du \right|^{2}\ge -C\left| Du \right|^{2}   $$
> 这时就可以用$\Delta u^{2}$控制了. 

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
