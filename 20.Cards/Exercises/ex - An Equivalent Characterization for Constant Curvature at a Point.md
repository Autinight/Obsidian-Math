---
type: exercise
aliases:
  - An Equivalent Characterization for Constant Curvature at a Point
technique: []
book: RG Petersen
chapter: 3
number: "10"
category:
status: done
priority:
tags: []
---

> [!exercise] Exercise 3.4.10:
> Show that a Riemannian manifold has constant curvature at $p\in M$ if and only if $R(v,w)z=0$ for all orthogonal $v,w,z\in T_pM$. Hint: Start by showing: if a symmetric bilinear form $B(v,w)$ on an inner product space has the property that $B(v,w)=0$ when $v\perp w$, then $B$ is a multiple of the inner product.

> [!proof] Proof: 
>
> Lemma : 
>
> Take a orthonormal basis $e_1,\cdots ,e_{n}$. Only need to show that there exists $\lambda$, such that 
>  $$ B\left(e_{i},e_{i}\right)= B\left(e_{j},e_{j}\right) $$ 
> In fact
>  $$ 0= B\left(e_{i}+ e_{j},e_{i}-e_j\right)= B\left(e_{i},e_{i}\right) -B\left(e_{j},e_{j}\right)$$ 
> If $M$ has constant curvature, say $\operatorname{sec}\left(\pi \right)= k$, then form Riemann 1854.
>  $$ R\left(v_1,v_2\right)v_3= -k\left(v_1\wedge v_2\right)\left(v_3\right) $$ 
> 
> $$ \left(v\wedge w\right)z= g\left(v,z\right)w-g\left(w,z\right)v = 0$$ 
> for all orthogonal $v,w,z\in T_{p}M$. Thus $R\left(v,w\right)z= 0$.
>
> Conversly, set
>  $$ R_{x}\left(y,z\right)= Rm\left(y,x,z,x\right)= g\left(R\left(y,x\right)z,x\right) $$ 
> Since $R_{x}$ is a symmetric bilinear form for each orthogonal $y,z\in T_{p}M$.
> We have $R_{x}\left(y,z\right)= k_{x}g\left(y,z\right)$
>  $$ Rm\left(y,x,z,x\right)= k_{x}g\left(y,z\right) $$  
>  $$ \operatorname{Sec}\left(x,y\right)= k_{x} $$ 
> For unit $y$.
> We need to show that 
>  $$ \operatorname{Sec}\left(z,y\right)= \operatorname{Sec}\left(x,y\right) $$ 
> for some unit $y$. Take $y$ such that $y\in \operatorname{span}\left(x,y\right)^{\perp}$, then 
>  $$ \operatorname{sec}\left(z,y\right)= \operatorname{sec}\left(y,z\right)= k_{y}= \operatorname{sec}\left(y,x\right)= \operatorname{sec}\left(x,y\right) $$
> Then $k_{x}= k_{z}$ for all $x,z$. Thus 
>  $$ \operatorname{sec}\left(x,y\right)\equiv k $$
>  


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
