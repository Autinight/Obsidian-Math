---
type: exercise
aliases:
  - Riemannian Covering and Volume
technique: []
book: RG Petersen
chapter: 1
number:
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Let $F: M\to N$ be a Riemannian $k$-fold covering map. Show
>  $$ \operatorname{Vol}M= k\cdot \operatorname{Vol}N $$ 


> [!proof] Proof: 
> 
> We now restric $F$ locally to make it a isometry, we have locally
>  $$ g_{M}= F^{*}g_{N} $$ 
> Suppose $q\in N$, $F^{-1} \left(q\right)= \left\{ p_1,\cdots ,p_{k} \right\}$. For each $p_{i}$, by choosing coordinates $x^{1},\cdots ,x^{n}$ such that $g_{p_{i}}\left(\frac{\partial }{\partial x^{k}},\frac{\partial }{\partial x^{l}}\right)= \delta _{k}^{l}$, and setting $y^{k}= x^{k}\circ F^{-1}$, we have  
> 
>  $$ \left(g_{M}\right)_{p_{i}}\left(\frac{\partial }{\partial x^{i}}, \frac{\partial }{\partial x^{j}}\right) =\left(g_{N}\right)_{F\left(p_{i}\right)}\left(D F\left(\frac{\partial }{\partial x^{i}}\right),D F\left(\frac{\partial }{\partial x^{j}}\right)\right)= g_{N}\left(\frac{\partial }{\partial y^{i}},\frac{\partial }{\partial y^{j}}\right) $$ 
> Then it follows that 
>  $$\left( dV_{N}\right)_{q}= \left(\,d y^{1}\cdots \,d y^{n}\right)_{p} $$
> Thus we have 
>  $$ \left(dV_{N}\right)_{q}= \left(dV_{M}\right)_{p_{i}} $$
> We have locally  
>  $$ d V_{M}= F^{*}\left(dV_{N}\right) $$
> Since the volume form is coordinate-free, there must be $d V_{M}= F^{*}dV_{N}$ for each local.
>
> Now  we choose a evenly covered open cover $\left\{ V_{\alpha } \right\}_{\alpha \in \Lambda }$ of $N$. Then 
>  $$ F^{-1} \left(V_{\alpha }\right) = \coprod  _{i= 1}^{k}U_{\alpha ,i}$$ 
> We set $F_{\alpha ,i}= F|_{U_{\alpha ,i}}$. 
> Suppose that $\left\{ \varphi _{\alpha } \right\}$ is a partition of unity subordinate to $\left\{ V_{\alpha } \right\}_{\alpha \in \Lambda }$, then
>  $$ \begin{aligned} \operatorname{Vol}N&= \int _{N}\,d V_{N}\\&= \sum _{\alpha }\int _{N}\varphi _{\alpha }\,d V_{N}\\&= \sum _{\alpha }\int _{V_{\alpha }}\varphi _{\alpha }\,d V_{N}\\&= \sum _{\alpha } \int _{U_{\alpha ,i}}F^{*}\varphi _{\alpha }\,d V_{M} \end{aligned} $$ 
>  $$ \begin{aligned} k\cdot \operatorname{Vol}N &= \sum _{i= 1}^{k}\sum _{\alpha }\int _{U_{\alpha ,i}}F^{*}\varphi _{\alpha }\,d V_{M}\\&=\sum _{\alpha }\int _{F^{-1} \left(V_{\alpha }\right)}F^{*}\varphi _{\alpha }\,d V_{M}\\&= \sum _{\alpha }\int _{M}F^{*}\varphi _{\alpha }\,d V_{M}= \int _{M}F^{*}\left(\sum _{\alpha }\varphi _{\alpha }\right) \,d V_{M}\\&= \int _{M}\,d V_{M}= \operatorname{Vol}M\end{aligned}$$ 
> Where the third line from $\operatorname{supp}\left(F^{*}\varphi _{\alpha }\right)\subseteq F^{-1}\left(\operatorname{supp}\varphi _{\alpha }\right)$



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
