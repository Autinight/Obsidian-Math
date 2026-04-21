---
type: exercise
aliases:
- Hess at Normal Coordinates
technique: []
book:
chapter:
number:
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.27.
> Consider a Riemannian manifold and let $r(x)=|xp|$. Introduce exponential normal coordinates $x^{i}$ at $p$.
> 1. Show that
> $$(\operatorname{Hess}x^{i})_{kl}=-\Gamma_{kl}^{i}=O(r).$$
> 2. Use that $\frac{1}{2}r^{2}=\frac{1}{2}\sum(x^{i})^{2}$ together with $g=\delta_{ij}+O(r^{2})$ to show that
> $$\operatorname{Hess}\frac{1}{2}r^{2}=g+O(r^{2}).$$
> 3. Show that
> $$\operatorname{Hess}r=\frac{1}{r}g_{r}+O(r).$$


> [!proof] Proof: 
> 1. 
>   $$ \begin{aligned} \begin{aligned} \left(\operatorname{Hess}x^{i}\right)_{kl}= \operatorname{Hess}x^{i}\left(\partial _{k},\partial _{l}\right)&= \left(\nabla _{\partial _{k}}dx^{i}\right)\left(\partial _{l}\right)\\&= \partial _{k}\left(\partial _{l}x^{i}\right)- \left(\nabla _{\partial _{k}}\partial _{l}\right)\left(x^{i}\right)\\&= 0-\Gamma _{kl}^{s}\partial _{s}x^{k}= -\Gamma _{kl}^{i}\end{aligned}\end{aligned} $$ 
>   
>   $$ g_{ij}= \delta _{ij}+O\left(r^{2}\right) \implies \partial _{k}g_{ij}= O\left(r\right)$$ 
>   
>   $$ \Gamma _{ij,k}= \frac{1}{2}\left(\partial _{i}g_{jk}+ \partial _{j}g_{ik}-\partial _{k}g_{ij}\right)= O\left(r\right) $$ 
>   
>   $$ \Gamma _{ij}^{k}= g^{kl}\Gamma _{ij,l} = g^{kl}O\left(r\right)= O\left(r\right)$$ 
> 2. $$  \operatorname{Hess}f\left(X,Y\right)= \left(\nabla _{X}df\right)\left(Y\right) $$ 
>    
>    $$ \begin{aligned} \frac{1}{2}\left( \operatorname{Hess}\left(x^{i}\right)^{2}\right)\left(X,Y\right)&=\frac{1}{2} \left(\nabla _{X}\left(d\left(x^{i}\right)^{2}\right)\right)\left(Y\right)\\&=\frac{1}{2} \left(\nabla _{X}\left(2x^{i}dx^{i}\right)\right)\left(Y\right)\\&= \left(dx^{i}\left(X\right)dx^{i}+ x^{i}\nabla _{X}\left(dx^{i}\right)\right)\left(Y\right) \\&= \left(dx^{i}\right)^{2}\left(X,Y\right)+ x^{i}\left(\operatorname{Hess}x^{i}\right)\left(X,Y\right)\\&= \left(dx^{i}\right)^{2}\left(X,Y\right)-x^{i}\Gamma _{kl}^{i}\\&= \left(dx^{i}\right)^{2}\left(X,Y\right)+ O\left(r^{2}\right)\end{aligned} $$ 
>    
>    Note that $\operatorname{Hess}$ is $\mathbb{R}$-linear, we have 
>    $$ \begin{aligned} \operatorname{Hess}\frac{1}{2}r^{2}&= \sum _{i}\left(dx^{i}\right)^{2}+ O\left(r^{2}\right)\\&= \delta _{ij}+ O\left(r^{2}\right)\end{aligned} $$ 
>    
>    Finally, since 
>    $$ g = \delta _{ij}+ O\left(r^{2}\right) \implies \delta _{ij}= g+ O\left(r^{2}\right)$$ 
>    
>    We have 
>    $$ \operatorname{Hess}\frac{1}{2}r^{2}= g+ O\left(r^{2}\right) $$ 
> 3. $$ g =  dr^{2}+ g_{r} $$ 
>    
>    $$ \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)= dr^{2}+ g_{r}+ O\left(r^{2}\right) $$ 
>    $$ \begin{aligned} \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)\left(X,Y\right)&= \left(\nabla _{X}d\left(\frac{1}{2}r^{2}\right)\right)\left(Y\right)\\&= \left(\nabla _{X}\left(rdr\right)\right)\left(Y\right)\\&= \left(\left(dr\left(X\right)\right)dr+ r\nabla _{X}\left(dr\right)\right)\left(Y\right)\\&= dr^{2}\left(X,Y\right)+ r\operatorname{Hess}\left(r\right)\left(X,Y\right) \end{aligned}$$ 
>    
>    $$ \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    $$ g+ O\left(r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    
>    $$ dr^{2}+ g_{r}+ O\left(r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    
>    $$ g_{r}+ O\left(r^{2}\right)= r\operatorname{Hess}r $$ 
>    
>    $$ \operatorname{Hess}r = \frac{1 }{r }g_{r}+ O\left(r\right)$$ 

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
