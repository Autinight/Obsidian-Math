---
type: exercise
aliases:
  - Local Expansion for Metric
technique:
book: RG Petersen
chapter: 5
number: "42"
category:
status: done
priority:
tags: []
---


> [!exercise] EXERCISE 5.9.42.
> Consider exponential normal coordinates around $p\in M$, i.e., $\delta_{ij}x^{j}=g_{ij}x^{j}$ and $x^{i}(p)=0$. All calculations below are at $p$.
> 1. Show that the second partials of the metric satisfy the Bianchi identity
> $$\partial_{l}\partial_{k}g_{ji}+\partial_{j}\partial_{l}g_{ki}+\partial_{k}\partial_{j}g_{li}=0.$$
> Hint: Take three derivatives of the defining relation $x^{i}=\sum_{s}g_{is}x^{s}$ as in lemma 5.5.7.
>
> 
> 2. Use all four of these Bianchi identities with the last index being $i,j,k$, or $l$ to conclude
> $$\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}.$$
> 3. Use the formula for the curvature tensor in normal coordinates from section 3.1.6 to show
> $$R_{ikjl}=\partial_{i}\partial_{j}g_{kl}-\partial_{i}\partial_{l}g_{jk}.$$
> 4. Use (3) and (1) to show
> $$\partial_{i}\partial_{j}g_{kl}=\frac{1}{3}(R_{ikjl}+R_{jkil}).$$
> 5. Show that we have a Taylor expansion
> $$g_{kl}=\delta_{kl}+\frac{1}{3}R_{ikjl}x^{i}x^{j}+O(|x|^{3}).$$
> 6. (**Riemann**) Use the symmetries of the curvature tensor to conclude
> $$\begin{aligned} g&=\sum_{k,l=1}^{n}g_{kl}dx^{k}dx^{l} \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{12}\sum_{i,j,k,l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \end{aligned}$$
> 7. (**Gauss**) Show that in dimension 2 we have
> $$\begin{aligned} g&=dx^{2}+dy^{2}+\frac{1}{3}R_{1212}(xdy-ydx)^{2}+o(x^{2}+y^{2}) \\ &=dx^{2}+dy^{2}-\frac{1}{3}\sec(p)(xdy-ydx)^{2}+o(x^{2}+y^{2}). \end{aligned}$$
> Riemann's construction of the curvature tensor proceeded as follows: Start with the normal coordinates, next use the radial isometry property to conclude that the Taylor expansion has the form
> $$g=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}C_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3})$$
> for some tensor $C$. This tensor has some obvious symmetry properties from the form of the expansion. It is possible to calculate it from the derivatives $\partial_{i}\partial_{j}g_{kl}$ provided they satisfy $\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}$. Finally, one has to show that this property is equivalent to the assertion that the above expansion is possible.

> [!proof] Proof: 
> 1. From 
>    $$dr\left(v\right)= g\left(\partial _{r},v\right) $$
>    We have 
>    $$ \left(\sum _{i}x^{i}\varepsilon _{i}\right) \left(v^{i}\partial _{i}\right)= g_{ij}\left(x^{i}\partial _{i},v^{i}\partial _{i}\right)$$
>    $$ \delta _{ij}x^{i}v^{j}= g_{ij}x^{i}v^{j} \implies \delta _{ij}x^{i}= g_{ij}x^{i}$$     
>    Sum over $i$, to get
>    $$ x^{j}= g_{ij}x^{i} $$
>    $$ \partial _{k}x^{j}= \delta _{k}^{j}= \left(\partial _{k}g_{ij}\right)x^{i}+ g_{ij}\delta _{k}^{i} $$  
>    $$ 0= \left(\partial _{l}\partial _{k}g_{ij}\right)x^{i}+ \left(\partial _{k}g_{ij}\right)\delta ^{i}_{l}+ \left(\partial _{l}g_{ij}\right)\delta _{k}^{i} $$ 
>    Take value at $p$, we have 
>    $$ \left(\partial _{k}g_{ij}\right)\delta _{l}^{i}+ \left(\partial _{l}g_{ij}\right)\delta _{k}^{i}= 0 $$ 
>    Sum over $i$, we have 
>    $$ \left(\partial _{k}g_{lj}\right)+ \left(\partial _{l}g_{kj}\right)= 0 $$
>    $$ \left(\partial _{i}\partial _{k}g_{lj}\right)+ \left(\partial _{i}\partial _{l}g_{kj}\right)= 0\tag{*} $$ 
>    Use 
>    $$ \partial _{l}\partial _{k}g_{ji}= -\partial _{l}\partial _{j}g_{ki}= -\partial _{j}\partial _{l}g_{ki},\quad \partial _{j}\partial _{l}g_{ki}= -\partial _{j}\partial _{k}g_{li}= -\partial _{k}\partial _{j}g_{li},\quad \partial _{k}\partial _{j}g_{li}= -\partial _{k}\partial _{l}g_{j}= -\partial _{l}\partial _{k}g_{ji} $$ 
>    Sum over the three, we get
>    $$\partial _{l}\partial _{k}g_{ji}+ \partial _{j}\partial _{l}g_{ki}+ \partial _{k}\partial _{j}g_{li}=-\left(\partial _{l}\partial _{k}g_{ji}+ \partial _{j}\partial _{l}g_{ki}+ \partial _{k}\partial _{j}g_{li}\right)  \implies \cdots = 0 $$ 
> 2. From (*)
>    $$ \left(\partial _{i}\partial _{j}g_{kl}\right)= -\partial _{i}\partial _{k}g_{jl}= -\partial _{k}\partial _{i}g_{lj}= \partial _{k}\partial _{l}g_{ij} $$ 
> 3. Recall
>    $$ R_{ijk}^{l}\partial _{l}= \nabla _{i}\nabla _{j}\partial _{k}- \nabla _{j}\nabla _{i}\partial _{k} $$
>    $$ R_{ijk}^{l}= \partial _{i}\Gamma _{jk}^{l} -\partial _{j}\Gamma _{ik}^{l}+ \Gamma _{jk}^{s}\Gamma _{is}^{l}-\Gamma _{ik}^{s}\Gamma _{js}^{l}$$  
>    
>    $$ R_{ijkl}= g_{ml}R_{ijk}^{m}= g_{ml}\left(\partial _{i}\Gamma _{jk}^{m}-\partial _{j}\Gamma _{ik}^{m}+ \Gamma _{jk}^{s}\Gamma _{is}^{m}-\Gamma _{ik}^{s}\Gamma _{js}^{m}\right) $$ 
>    
>    $$ R_{ijkl}= \partial _{i}\Gamma _{jk,l} -\partial _{j}\Gamma _{ik,l}+ g^{st}\Gamma _{ik,s}\Gamma _{jl,t}-g^{st}\Gamma _{jk,s}\Gamma _{il,t}$$ 
>    where
>    $$ \Gamma _{jk,l}= g_{ml}\Gamma _{jk}^{m} $$ 
>    We have at $p$
>    $$ R_{ijkl}= \partial _{i}\Gamma _{jk,l} -\partial _{j}\Gamma _{ik,l}$$ 
>    
>    $$2\Gamma _{jk,l}= \partial _{j}g_{kl}+ \partial _{k}g_{jl}-\partial _{l}g_{jk} $$
>    $$ 2\partial _{i}\Gamma _{jk,l}= \partial _{i}\partial _{j}g_{kl}+ \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk} $$  
>    $$ 2\partial _{j}\Gamma _{ik,l}= \partial _{j}\partial _{i}g_{kl}+ \partial _{j}\partial _{k}g_{il}-\partial _{j}\partial _{l}g_{ik} $$ 
>    
>    We have from 2.
>    $$ \begin{aligned} 2R_{ijkl}&= \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk}-\partial _{j}\partial _{k}g_{il}+ \partial _{j}\partial _{l}g_{ik}\\&= \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk} -\partial _{i}\partial _{l}g_{jk}+ \partial _{i}\partial _{k}g_{jl}\\&= 2\partial _{i}\partial _{k}g_{jl}-2\partial _{i}\partial _{l}g_{jk}\end{aligned} $$ 
>    By adjusting index, we have 
>    $$ R_{ikjl}= \partial _{i}\partial _{j}g_{kl}-\partial _{i}\partial _{l}g_{jk} $$ 
>    $\partial _{\cdot }\partial _{\cdot }g_{\cdot \cdot }$, 1324-1423
>    
> 4. 
>    $$ \begin{aligned} \begin{aligned} R_{jkjl}+ R_{jkil}&= \partial _{i}\partial _{j}g_{kl}-\partial _{i}\partial _{l}g_{jk}+ \partial _{j}\partial _{i}g_{kl}-\partial _{j}\partial _{l}g_{ki}\\&= 2\partial _{i}\partial _{j}g_{kl}-\left(\partial _{i}\partial _{l}g_{jk}+ \partial _{j}\partial _{l}g_{ik}\right)\\&= 2\partial _{i}\partial _{j}g_{kl}-\left(-\partial _{i}\partial _{j}g_{kl}\right)\\&= 3\partial _{i}\partial _{j}g_{kl} \end{aligned} \end{aligned} $$ 
>    
> 5.  We know that $\partial _{r}g_{kl}= 0$ at $p$.
>    Then 
>    $$ \begin{aligned} g_{kl}&= \delta _{kl}+ \frac{1 }{2 }\left(\partial _{i}\partial _{j}g_{kl}\right)x^{i}x^{j} + O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}\left(R_{ikjl}+ R_{jkil}\right)x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ \frac{1}{6}R_{jkil}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{3}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right) \end{aligned}$$ 
> 6. $$ \begin{aligned} g &= \sum _{k,l}^{n}g_{kl}dx^{k}dx^{l}\\&= \sum _{k,l = 1}^{n}\left(\delta _{kl}+ \frac{1}{3}R_{ijkl}x^{i}x^{j}\right)\,d x^{k}\,d x^{l}+ O\left(\left| x \right|^{3} \right)\\&= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{3 }\sum _{i,j,k,l = 1}^{n}R_{ijkl}x^{i}x^{j}\,d x^{k}\,d x^{l}  \end{aligned} $$ 
>    
>    $$ \begin{aligned}\sum _{i,j,k,l} R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)&=\sum _{i,j,k,l} R_{ikjl}\left(x^{i}x^{j}\,d x^{k}\,d x^{l}-x^{i}x^{l}\,d x^{k}\,d x^{j}-x^{k}x^{j}\,d x^{i}\,d x^{l} + x^{k}x^{l}\,d x^{i}\,d x^{j}\right)\\&= \sum _{i,j,k,l}R_{ikjl}x^{i}x^{j}\,d x^{k}\,d x^{l}-\sum _{i,j,k,l}R_{iklj}x^{i}x^{j}\,d x^{k}\,d x^{l}\\&-\sum _{i,j,k,l}R_{kijl}x^{i}x^{j}\,d x^{k}\,d x^{l}+ \sum_{i,j,k,l}R_{kilj}x^{i}x^{j}\,d x^{k}\,d x^{l}\\&= 4R_{ikjl}\sum _{i,j,k,l}x^{i}x^{j}\,d x^{k}\,d x^{l}  \end{aligned}$$ 
>    
>    Thus
>    $$ \begin{aligned} g &= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{12 }\sum _{i,j,k,l}R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)+ O\left(\left| x \right|^{3} \right)\\ &= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{3 }\sum _{i< j,k< l}R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)+ O\left(\left| x\right|^{3} \right) \end{aligned} $$ 
> 7. In $\operatorname{dim}$ 2,
>    $$ \begin{aligned} g &= \,d x^{^{2}}+ \,d y^{2}+ \frac{1}{3}R_{1212}\left(xdy-ydx\right)\left(xdy-ydx\right)+ O\left(\left| \sqrt{x^{2}+ y^{2}} \right|^{3} \right)\\&= \,d x^{2}+ \,d y^{2}+ \frac{1}{3}R_{1212}\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right)\\&= dx^{2}+ dy^{2}-\frac{1}{3}R_{1221}\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right)\\&=dx^{2}+ dy^{2}-\frac{1}{3}\operatorname{sec}\left(p\right)\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right) \end{aligned} $$ 

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
