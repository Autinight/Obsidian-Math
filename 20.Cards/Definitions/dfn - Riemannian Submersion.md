---
type: definition
aliases: 
- Riemannian Submersion
technique: []
tags: []
---

> [!lemma] Lemma: 
> Let $F:M\to N$ be a submersion, and let $p\in M$, denote $\operatorname{ker}DF_{p}$ by $\mathcal{V}_{p}$. Choose any complementary subspace $\mathcal H_p$ of $\mathcal V_p$, so that
> $$T_pM=\mathcal V_p\oplus\mathcal H_p.$$
> Since $DF _{p}:T_{p}M\to T_{F\left(p\right)}N$ is surjective, 
>  $$ D F_{p}|_{\mathcal{H}_{p}}: \mathcal{H}_{p}\to T_{F\left(p\right)}N $$ 
> is a linear isomorphism.
> 
> In particular, if $\left(M,g\right)$ is a Riemannian manifold, there is a natural choice of complementary subspace, namely $\mathcal{H}_{p}= \left(\operatorname{ker}D F_{p}\right)^{\perp_{g}}$.

### Definition

> [!definition] Definition: 
> By a **Riemannian submersion** $F:\left(M,g_{M}\right)\to \left(N,g_{N}\right)$, we mean a submersion $F:M\to N$ such that for each $p\in M$, 
> $$DF: \operatorname{ker}\left(D F\right)^{\perp}=\mathcal{H}_{p}\to T_{F\left(p\right)}N$$
>  is a linear isometry. In other words, if $v,w\in T_{p}M$ are perpendicular to the kernel of $D F:T_{p}M\to T_{F\left(p\right)}N$, then
>  $$ g_{M}\left(v,w\right)= g_{N}\left(D F\left(v\right), D F\left(w\right)\right) $$

> [!note] Note: 
> $\operatorname{ker}\left(DF\right)$是完全指向纤维内部的方向. $\operatorname{ker}\left(D F\right)^{\perp}$是纤维指向其它纤维的方向. $g_{M}$用$g_{N}$的方式刻画了纤维与纤维之间的跨越.
>
> 或者说, $g_{N}$过滤了纤维内部的度量信息.

> [!remark] Remark: 
> This is equivalent to the adjoint $\left(D F_{p}\right)^{*}:T_{F\left(p\right)}N\to T_{p}M$ preserving inner products of vectors.


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
