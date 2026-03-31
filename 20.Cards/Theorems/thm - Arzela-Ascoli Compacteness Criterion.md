---
type: theorem
aliases: 
- Arzela-Ascoli Compacteness Criterion
technique: []
---

### Criterion for Uniform Convergence

> [!theorem] Theorem: 
> Suppose that $\left\{ f_{k} \right\}_{k= 1}^{\infty}$ is a sequence of real-valued functions defined on $\mathbb{R} ^{n}$, such that 
>  $$ \left| f_{k}\left(x\right) \right|\le M  \quad \left(k= 1,\cdots ,x\in \mathbb{R} ^{n}\right)$$
> for some constatn $M$ and that the functions $\left\{ f_{k} \right\}_{k= 1}^{\infty}$ are **uniformly equicontinuous**, meaning that for each $\varepsilon > 0$, there exists $\delta > 0$ such that $\left| x-y \right|< \delta$ implies that $\left| f_{k}\left(x\right)-f_{k}\left(y\right) \right|< \varepsilon$, for $x,y \in \mathbb{R} ^{n},k= 1,\cdots$
>
> Then there exists a subsequence $\left\{ f_{k_{j}} \right\}_{j= 1}^{\infty}\subseteq \left\{ f_{k} \right\}_{k= 1}^{\infty}$ and a continuous function $f$ such that 
>  $$ f_{k_{j}}\to f \quad \text{uniformly on compact subsets of }\mathbb{R} ^{n}$$ 


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

