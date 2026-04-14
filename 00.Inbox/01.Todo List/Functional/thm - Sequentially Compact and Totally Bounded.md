---
type: theorem
aliases: 
- Sequentially Compact and Totally Bounded
technique: []
tags: []
---

> [!theorem] Theorem: 
> Let $\left(X,d\right)$ be a metric space, $A\subseteq X$ is a subset.
> - If $A$ is  precompact, then $A$ is totally bounded.
> - If $X$ is complete and $A$ is totally bounded, then $A$ is precompact.

> [!proofsketch] Sketch of Proof: 
> - 如果$A$不是完全有界的, 则$A$存在$\varepsilon _0$, 使得$A$没有有限$\varepsilon _0$-子集网. 则能迭代地取出两两之间距离大于$\varepsilon _0$的点列.
> - 若$A\subseteq X$完全有界, $B$是$A$的无穷点列. 则1/2-网给出抓住了$B$无穷多个点的1/2-小球. 吧小球外的点刨去, 被抓住的点记作$B_1$, 那么$B_1$中的某个点$1$-近地抓住了这些点. 类似地可以造出$B_2\subseteq B_1$, $B_2$中某些点$\frac{1}{2}$-近地抓住了$B_2$中的无穷多个点, 以此类推. 取成一个$B$中的点列, 相互之间紧紧抓住, 是Cauchy-列. 

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

