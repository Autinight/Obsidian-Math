---
type: exercise
aliases:
  - Partial of Metric in Coordinates
technique: []
book: RG Petersen
chapter: 2
number: "8"
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> The metric in coordinates satisfies
> (1) $\partial _{s}g^{ij}= -g^{ik}\partial _{s}g_{kl}g^{lj}$
> (2) $\partial _{s}g^{ij}= -g^{il}\Gamma _{sl}^{j}-g^{jl}\Gamma _{sl}^{i}$

 
> [!proof] Proof: 
>   $$ 0= \partial _{s}\left(\delta _{j}^{k}\right)= \partial _{s}\left(g^{ij}g_{jk}\right)=\partial _{s}g^{ij} g_{jk}+ g^{ij}\partial _{s}g_{jk} $$
> Let $g^{kl}$ act on right, we have 
>  $$ \partial _{s}g^{ij}\delta _{j}^{l}= -g^{ij}\partial _{s}g_{jk}g^{kl}$$
> Where the LHS is $\partial _{s}g^{il}$, switch the index $l$ with $j$, we have
> $$ \partial _{s}g^{ij}= -g^{il}\partial _{s}g_{lk}g^{kj}= -g^{ik}\partial _{s}g_{kl}g^{lj} $$ 
>
>   $$ \begin{aligned} \partial _{s}g_{lk}&= \partial _{s}g\left(\partial _{l},\partial _{k}\right)= g\left(\nabla _{\partial _{s}}\partial _{l},\partial _{k}\right)+ g\left(\partial _{l},\nabla _{\partial _{s}}\partial _{k}\right)\\&= g_{ik}\Gamma _{sl}^{i}+ g_{jl}\Gamma _{sk}^{j} \end{aligned} $$ 
>  $$ \begin{aligned} \partial _{s}g^{ij}&= -g^{ik}\left(g_{ik}\Gamma _{sl}^{i}\right)g^{lj}-g^{ik}\left(g_{jl}\Gamma _{sk}^{j}\right)g^{lj}\\&= -g^{lj}\Gamma _{sl}^{i}- g^{ik}\Gamma _{sk}^{j}\\&= -g^{lj}\Gamma _{sl}^{j}-g^{il}\Gamma _{sl}^{j}\end{aligned} $$ 

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
