---
type: exercise
aliases:
  - Fundamental Theorem of Hypersurface Theory
technique: []
book: RG Petersen
chapter: 3
number: "21"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 3.4.21 (FUNDAMENTAL THEOREM OF (HYPER-)SURFACE THEORY).
> Consider a Riemannian immersion $F : M^n \looparrowright \mathbb{R}^{n+1}$. In coordinates on $M$ it can be written as
> $$ (u^1(x), \dots, u^{n+1}(x)) = F(x) = F(x^1, \dots, x^n) $$
> and we define
> $$ U_k^i = \frac{\partial u^i}{\partial x^k}. $$
> 1. Show that
>    $$ \frac{\partial U_j^i}{\partial x^k} = \Gamma_{kj}^s U_s^i - \mathrm{II}_{jk} N^i, $$
>    where $N = N^i \frac{\partial}{\partial u^i}$ is a choice of unit normal and the second fundamental form is $\mathrm{II}_{jk} = \mathrm{II}(\partial_j, \partial_k) = g(\nabla_{\partial_j} N, \partial_k)$.
> 2. Show that the integrability conditions for this system are equivalent to the Gauss (tangential) and Codazzi (mixed) curvature equations:
>    $$ R_{iklj} = \mathrm{II}_{ij} \mathrm{II}_{kl} - \mathrm{II}_{ik} \mathrm{II}_{jl} $$
>    $$ \frac{\partial \mathrm{II}_{jk}}{\partial x^l} - \frac{\partial \mathrm{II}_{jl}}{\partial x^k} = \Gamma_{lj}^s \mathrm{II}_{sk} - \Gamma_{kj}^s \mathrm{II}_{sl} $$
> 3. Given metric coefficients $g_{ij}$ and a symmetric tensor $\mathrm{II}_{ij}$ that is related to the metric coefficients through the Gauss and Codazzi equations, show that locally there exists a Riemannian immersion such that the second fundamental form is given by $\mathrm{II}_{ij}$.
> 4. We can now give a local characterization of spaces with constant positive curvature. Given a metric of constant curvature $R^{-2} > 0$, show that there is a Riemannian immersion into $\mathbb{R}^{n+1}$ whose image lies in a sphere of radius $R$. Hint: Guess what the second fundamental form should look like and show that the constant curvature condition gives the Gauss and Codazzi equations. Note that for $S^n(R)$ the unit normal is $N = \pm R^{-1} F$.

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
