---
type: exercise
aliases:
  - Convexity and Hessian for Function
technique: []
book: RG Petersen
chapter: 5
number: "21"
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.21.
> Let $f:(M,g)\to\mathbb{R}$ be a smooth function on a Riemannian manifold.
> 1. Let $c:(a,b)\to M$ be a geodesic. Compute the first and second derivatives of $f\circ c$.
> 2. Use this to show that at a local maximum (or minimum) for $f$ the gradient is zero and the Hessian nonpositive (or nonnegative).
> 3. Show that $f$ has everywhere nonnegative Hessian if and only if $f\circ c$ is convex for all geodesics $c$ in $(M,g)$.


> [!proof] Proof: 
> 1. $$ \frac{\mathrm{d}}{\mathrm{d}t}\left(f\circ c\right)= df\left(c^{\prime} \left(t\right)\right)= \left(c^{\prime} \left(t\right)\right)\left(f\right)$$ 
> $$ \begin{aligned} \left(f\circ c\right)^{\prime \prime} \left(t\right)&= \frac{\mathrm{d}}{\mathrm{d}t} \left(df\left(c^{\prime} \left(t\right)\right)\right)= \frac{\mathrm{d}}{\mathrm{d}t}g\left(\operatorname{grad}f,c^{\prime} \left(t\right)\right)\\&= g\left(\nabla _{c^{\prime} \left(t\right)}\operatorname{grad}f,c^{\prime} \left(t\right)\right)+ g\left(\operatorname{grad}f, \nabla _{c^{\prime} \left(t\right)}c^{\prime} \left(t\right)\right)\\&= \operatorname{Hess}f\left(c^{\prime} \left(t\right),c^{\prime} \left(t\right)\right) \end{aligned}$$ 
> 2. If $f$ reach the maximum at $p$, let $c$ be the geodesic with the initial velocity $\operatorname{grad}f$.
> $$ \left(f\circ  c\right)^{\prime} \left(0\right)\le 0 $$
> $$ \left(f\circ c\right)^{\prime} \left(0\right)= \left(c^{\prime} \left(0\right)\right)\left(f\right)= \left< \operatorname{grad}f,c^{\prime} \left(0\right) \right>= \left< \operatorname{grad}f,\operatorname{grad}f \right>= \left| \operatorname{grad}f \right|^{2}\le 0  $$  
> Then 
> $$ \operatorname{grad}f= 0 $$ 
> Similarly, if $f$ reach the minimum at $p$ , then $-f$ reach the maximum, $\operatorname{grad}f= -\left(\operatorname{grad}\left(-f\right)\right)= 0$
> $$ \begin{aligned} \left(f\circ c\right)\left(t\right)&= f\left(p\right)+ t \left(f\circ c\right)^{\prime} \left(0\right)+ \frac{1}{2}t^{2}\left(f\circ c\right)^{\prime \prime} \left(0\right)+ o\left(t^{2}\right)\\&= f\left(p\right)+ tg\left(\operatorname{grad}f,v\right)+ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)+ o\left(t^{2}\right)  \\&= f\left(p\right)+ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)\end{aligned} $$ 
> $$ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)=f\left(c\left(t\right)\right)-f\left(p\right)+ o\left(t^{2}\right)\ge o\left(t^{2}\right) $$ 
> $$ \operatorname{Hess}f\left(v,v\right)\ge o\left(1\right) \implies \operatorname{Hess}f\left(v,v\right)\ge 0$$ 
> 
> 3. 
> $$ \left(f\circ c\right)^{\prime \prime} \left(t\right)= \operatorname{Hess}f\left(c^{\prime} \left(t\right),c^{\prime} \left(t\right)\right)  $$ 
> $f\circ c$ is convex for all geodesic, iff $\left(f\circ c\right)^{\prime} \left(t\right)\ge 0$ for all geodesic $c$. Since for each $v$, there exists $c^{\prime} \left(t\right)= v$.


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
