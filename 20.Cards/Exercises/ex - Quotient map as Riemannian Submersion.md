---
type: exercise
aliases:
  - Quotient map as Riemannian Submersion
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
> Suppose we have an isometric group action $G$ on $\left(M,g\right)$ such that the quotient space $M /G$ is a manifold and the quotient map a submersion. Show that there is a unique Riemannian metric on the quotient making the quotient map a Riemannian submersion.

> [!proof] Proof: 
>  $$ \pi :M\to M / G $$ 
>  is a submersion. 
> 
>   $$ D\pi _{p}: \mathcal{H}_{p}\to T_{[p]}\left(M/G\right) $$
>  $$ v+ \mathcal{V}_{p}\mapsto D\pi _{p}\left(v\right) $$ 
> is linear isomorphism. We define $\tilde{g}$ on $M/G$, as 
>  $$ \tilde{g}\left(D\pi \left(v\right),D\pi \left(w\right)\right)= g\left(v,w\right) $$  
> We need to check that for $p_1,p_2\in M$ such that $a\left(p_1\right)= p_2$, 
> If $v_1,w_1\in \mathcal{H}_{p_1}$, $v_2,w_2\in \mathcal{H}_{p_2}$, $D\pi _{p_1}\left(v_1\right)= D\pi _{p_2}\left(v_2\right)$. $\widetilde{v_1}= Da_{p_1}\left(v_1\right)$, $\widetilde{w_1}= Da_{p_1}\left(w_1\right)$, then $\widetilde{v_1}\in \mathcal{H}_{p_2},\widetilde{w_1}\in \mathcal{H}_{p_2}$
> From $g =  a^{*}g$, we have
>  $$ g_{p_1}\left(v_1,w_1\right)= g_{p_2}\left(\widetilde{v_1},\widetilde{w_1}\right) $$ 
> We only need to check that 
>  $$ g_{p_2}\left(\widetilde{v_1},\widetilde{w_1}\right)= g_{p_2}\left(v_2,w_2\right) $$ 
> for which, since $\widetilde{v_1},\widetilde{w_1}\in \mathcal{H}_{p_2}$ we only need $\widetilde{v_1}-v_2\in \mathcal{V}_{p_1}$, $\widetilde{w_1}-w_2\in \mathcal{V}_{p_2}$, equivalently, $D\pi _{p_1}\left(\widetilde{v_1}\right)= D\pi _{p_1}\left(v_2\right)$, $D\pi _{p_1}\left(\widetilde{w_1}\right)= D\pi _{p_1}\left(w_2\right)$.  Observe that
>  $$ D\pi _{p_2}\left(\widetilde{v_1}\right)= \left(D\left(\pi \circ a\right) \right)_{p_1}\left(v_1\right) $$ 
> and recall  $D\pi _{p_1}\left(v_1\right)= D\pi _{p_2}\left(v_2\right)$, 
> we need to check that $D\left(\pi \circ a\right)_{p_1}\left(v_1\right)= D\pi _{p_1}\left(v_1\right)$. In fact, it is obvious from $\pi \circ a= \pi$.




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
