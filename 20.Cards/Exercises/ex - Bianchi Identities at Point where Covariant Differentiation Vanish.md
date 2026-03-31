---
type: exercise
aliases:
  - Bianchi Identities at Point where Covariant Differentiation Vanish
technique: []
book: RG Petersen
chapter: 3
number: "5"
category:
status: done
priority:
tags: []
---

> [!exercise] Exercise 3.4.5:
> Prove the two Bianchi identities at a point $p\in M$ by using a coordinate system where $\nabla_{\partial_i}\partial_j=0$ at $p$.
>  $$ R\left(X,Y\right)Z+ R\left(Z,X\right)Y+ R\left(Y,Z\right)X= 0 $$ 
>  $$ \left(\nabla _{Z}R\right)_{X,Y}W+ \left(\nabla _{X}R\right)_{Y,Z}W+ \left(\nabla _{Y}R\right)_{Z,X} W= 0$$ 

 

> [!proof] Proof: 
> Denote 
> $$ \partial _{i}\Gamma _{jk}^{s} = \Gamma _{jk,i}^{s},\quad \partial _{i}\partial _{j}\Gamma _{kl}^{s}= \Gamma _{kl,j,i}^{s}$$ 
> 
> $R$ is a tensor, we have
>  $$ \begin{aligned} R\left(\partial _{i},\partial _{j}\right)\partial _{k}&= \left[ \nabla _{\partial _{i}},\nabla _{\partial _{j}} \right]\partial _{k}-\left[ \partial _{i},\partial _{j} \right]\partial _{k} \\&= \nabla _{\partial _{i}}\left(\nabla _{\partial _{j}}\partial _{k}\right)-\nabla _{\partial _{j}}\left(\nabla _{\partial _{i}}\partial _{k}\right)\\&= \nabla _{\partial _{i}}\left(\Gamma _{jk}^{l}\partial _{l}\right)-\nabla _{\partial _{j}}\left(\Gamma _{ik}^{l}\partial _{l}\right)\\&= D_{\partial _{i}}\Gamma _{jk}^{l} \partial _{l}+ \Gamma _{jk}^{l}\nabla _{\partial _{i}}\partial _{l}-D_{\partial _{j}}\Gamma _{ik}^{l}\partial _{l}-\Gamma _{ik}^{l}\nabla _{\partial _{j}}\partial _{l}\\&= \left(D_{\partial _{i}}\Gamma _{jk}^{l}\right)\partial _{l}-\left(D_{\partial _{j}}\Gamma _{ik}^{l}\right)\partial _{l}\text{ at p} \end{aligned}$$ 
> 
> $R$ is a tensor, we have
>  $$ R\left(X^{i}\partial _{i},Y^{j}\partial _{j}\right)Z^{k}\partial _{k}= X^{i}Y^{j}Z^{k}R\left(\partial _{i},\partial _{j}\right)\partial _{k}= X^{i}Y^{j}Z^{k} \left(R_{ijk}^{l}\partial _{l}\right)$$ 
> We need to show that 
>  $$ R_{ijk}^{l}\partial _{l}+ R_{kij}^{l}\partial _{l}+ R_{jki}^{l}\partial _{l}= 0$$
>  $$ R_{ijk}^{l}+ R_{kij}^{l}+ R_{jki}^{l}= 0 $$
> In fact, 
>  $$ \begin{aligned} \left(R_{ijk}^{l}\right)_{p}&=\left(D_{\partial _{i}}\Gamma _{jk}^{l}-D_{\partial _{j}}\Gamma _{ik}^{l}\right)_{p} \end{aligned} $$
>  $$ \begin{aligned} \Gamma _{ijk}^{l}+ \Gamma _{kij}^{l}+ \Gamma _{jki}^{l}&= \Gamma _{jk,i}^{l}-\Gamma _{ik,j}^{l}+ \Gamma _{ij,k}^{l}-\Gamma _{kj,i}^{l}+ \Gamma _{ki,j}^{l}-\Gamma _{ji,k}^{l} \\&=\sum _{cyc}\left(\Gamma _{jk,i}^{l}-\Gamma _{kj,i}^{l}\right)= 0 \end{aligned}$$    
> Similarly, 
>  $$ \begin{aligned} \left(\nabla _{\partial _{i}}R\right)\left(\partial _{j},\partial _{k},\partial _{l}\right)&= \nabla _{\partial _{i}}\left(R\left(\partial _{j},\partial _{k},\partial _{l}\right)\right)-R\left(\nabla _{\partial _{i}}\partial _{j},\partial _{k},\partial _{l}\right)-R\left(\partial _{j},\nabla _{\partial _{i}}\partial _{k},\partial _{l}\right)-R\left(\partial _{j},\partial _{k},\nabla _{\partial _{i}}\partial _{j}\right)\\&=\nabla _{\partial _{i}}\left(\Gamma _{kl,j}^{s}\partial _{s}-\Gamma _{jl,k}^{s}\partial _{s}\right)\\&= \Gamma _{kl,j,i}^{s}\partial _{s}+ \Gamma _{kl,j}^{s}\nabla _{\partial _{i}}\partial _{s}-\Gamma _{jl,k,i}^{s}\partial _{s}-\Gamma _{jl,k}^{s}\nabla _{\partial _{i}}\partial _{s}\\&= \Gamma _{kl,j,i}^{s}\partial _{s}-\Gamma _{jl,k,i}^{s}\partial _{s} \end{aligned} $$ 
>  $$ \begin{aligned} \sum _{cyc}\,d \varepsilon ^{l}\left(\left(\nabla _{\partial _{i}}R\right)_{\partial _{j},\partial _{k}}\partial _{l}\right)&= \Gamma _{kl,j,i}^{s}-\Gamma _{jl,k,i}^{s}+ \Gamma _{il,k,j}^{s}-\Gamma _{kl,i,j}^{s}+ \Gamma _{jl,i,k}^{s}-\Gamma _{il,j,k}^{s}\\&= \sum _{cyc}\left(\Gamma _{kl,j,i}^{s}-\Gamma _{kl,i,j}^{s}\right) = 0\end{aligned} $$ 


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
