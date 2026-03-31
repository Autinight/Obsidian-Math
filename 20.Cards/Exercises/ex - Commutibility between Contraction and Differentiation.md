---
type: exercise
aliases:
  - Commutibility between Contraction and Differention
technique: []
book: RG Petersen
chapter: 2
number: "9"
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Let $X$ be a vector field
> 1. Show that for any $\left(1,1\right)$-tensor $S$
>  $$ \operatorname{tr}\left(\nabla _{X}S\right)= \nabla _{X}\operatorname{tr}S $$
> 2. Let $T\left(Y,Z\right)= g\left(S\left(Y\right),Z\right)$. Show that 
>  $$ \left(\nabla _{X}T\right)\left(Y,Z\right)= g\left(\left(\nabla _{X}S\right)\left(Y\right),Z\right). $$
> 3. Show that more generally the contraction and covariant differentiation commute.
> Finally show that type change and covariant differentiation commute.  

> [!remark] Needed:
> - 高维Tensor的Lebniz律
> - Contranction is linear operator.
> - $\nabla _{X}$对Tensor product 的Lebniz rule.

> [!remark] Remark: 
> Type Change 是缩并和度量张量积的复合
>  $$T=  C\left(S\otimes g\right) $$ 
> Contraction 是一对协变逆变张量的配对
> $T$让$S$和$g$的第一个分量配对, 
>  $$ g\left(S\left(\cdot \right),\cdot \right) $$ 
> Contraction和协变导数交换.

> [!proof] Proof: 
> **(1)**
>  $$ S= S^{i}_{j}E_{i}\otimes \sigma ^{j} $$ 
>   $$ \nabla _{X}E_{k} = X_{k}^{j}E_{j}$$ 
>   $$ \operatorname{tr}S= S_{i}^{i} $$ 
>  $$ \begin{aligned} \left(\nabla _{X}S\right)\left(E_{k}\right)&= \left(\nabla _{X}\left(S_{j}^{i}E_{i}\otimes\sigma ^{j}\right)\right)\left(E_{k}\right)= \nabla _{X}\left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\left(E_{k}\right)\right)-\left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\right)\left(\nabla _{X}E_{k}\right)\\&= \nabla _{X}\left(S_{k}^{i}E_{i}\right)- \left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\right)\left(X_{k}^{l}E_{l}\right)= \nabla _{X}\left(S_{k}^{i}E_{i}\right)-X_{k}^{j}\left(S_{j}^{i}E_{i}\right)\\&= \left(D_{X}S_{k}^{i}\right)E_{i}+ S_{k}^{i}X_{i}^{l}E_{l}-X_{k}^{j}\left(S_{j}^{i}E_{i}\right)\\&= \left(D_{X}S_{k}^{i}\right)E_{i}+ S_{k}^{j}X_{j}^{i}E_{i}-X_{k}^{j}S^{i}_{j}E_{i}\end{aligned} $$ 
>   $$ \operatorname{tr}\left(\nabla _{X}S\right)= \left(D_{X}S_{k}^{k}\right)+ S_{k}^{j}X_{j}^{k}-X_{k}^{j}S_{j}^{k}= \left(D_{X}S_{k}^{k}\right) $$ 
>    $$ \nabla _{X}\operatorname{tr}S= D_{X}S_{k}^{k} $$ 
> **(2)**
>  $$ T\left(Y,Z\right)= g\left(S\left(Y\right),Z\right) $$ 
> 
>  $$ \begin{aligned} \left(\nabla _{X}T\right)\left(Y,Z\right)&= \nabla _{X}\left(T\left(Y,Z\right)\right)-T\left(\nabla _{X}Y,Z\right)- T\left(Y,\nabla _{X}Z\right)\\&= \nabla _{X}\left(g\left(S\left(Y\right),Z\right)\right)-g\left(S\left(\nabla _{X}Y\right),Z\right)-g\left(S\left(Y\right),\nabla _{X}Z\right)\\&= g\left(\nabla _{X}\left(S\left(Y\right)\right),Z\right)-g\left(S\left(\nabla _{X}Y\right),Z\right)\\&= g\left(\left(\nabla _{X}S\right)\left(Y\right),Z\right) \end{aligned}$$ 
>   $$ \nabla _{X}\left(S\left(Y\right)\right)= \left(\nabla _{X}S\right)\left(Y\right)+ S\left(\nabla _{X}Y\right) $$ 
> **(3)**
>
>  $$ C\left(\nabla _{X}\left(V\otimes \omega \right)\right)= C\left(\nabla _{X}V\otimes \omega + V\otimes \nabla _{X}\omega \right)= \left< \nabla _{X}V,\omega  \right>+ \left< V,\nabla _{X}\omega  \right> $$
>  $$ \nabla _{X}\left(C\left(V\otimes \omega \right)\right)= \nabla _{X}\left< V,\omega  \right>= \left< \nabla _{X}V,\omega  \right>+ \left< V,\nabla _{X}\omega  \right> $$  
>   $$ [C,\nabla _{X}]= 0 $$ 
>  $$ \begin{aligned} \nabla _{X}\operatorname{Typec}\left(S\right)&= \nabla _{X}C\left(g\otimes S\right) = C\left(\nabla _{X}\left(g\otimes S\right)\right)\\&= C\left(g\otimes \nabla _{X}S\right)= \operatorname{Typec}\left(\nabla _{X}S\right) \end{aligned}$$   


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
