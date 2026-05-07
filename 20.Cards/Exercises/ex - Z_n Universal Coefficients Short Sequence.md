---
type: exercise
aliases:
  - Z_n Universal Coefficients Short Sequence
technique: []
book: AT Hatcher
chapter: 2.2
number: "40"
category:
status: done 
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.40.
> From the long exact sequence of homology groups associated to the short exact sequence of chain complexes $0 \to C_i(X) \xrightarrow{n} C_i(X) \to C_i(X; \mathbb{Z}_n) \to 0$ deduce immediately that there are short exact sequences
> $$
> 0 \to H_i(X)/nH_i(X) \to H_i(X; \mathbb{Z}_n) \to n\text{-Torsion}(H_{i-1}(X)) \to 0
> $$
> where $n\text{-Torsion}(G)$ is the kernel of the map $G \xrightarrow{n} G$, $g \mapsto ng$. Use this to show that $\tilde{H}_i(X; \mathbb{Z}_p) = 0$ for all $i$ and all primes $p$ iff $\tilde{H}_i(X)$ is a vector space over $\mathbb{Q}$ for all $i$.

From $0\xrightarrow{}  C_{i}\left(X\right)\xrightarrow{n_{*}} C_{i}\left(X\right)\xrightarrow{q}  C_{i}\left(X;\mathbb{Z} _{n}\right)\to 0$, 

$$  H_{i}\left(X\right)\xrightarrow{n_{i}}H_{i}\left(X\right)\xrightarrow{q_{i}} H_{i} \left(X;\mathbb{Z} _{n}\right) \xrightarrow{\partial _{i}}  H_{i-1}\left(X\right)\xrightarrow{n_{i-1}}  H_{i-1}\left(X\right)$$ 

We have 
$$ 0\xrightarrow{\bar{n}_{i}} H_{i}\left(X\right)/ nH_{i}\left(X\right)\xrightarrow{\bar{q}_{i}}H_{i}\left(X;\mathbb{Z} _{n}\right)\xrightarrow{\overline{\partial}_{i}}n-\mathrm{Torsion}\left(H_{i-1}\left(X\right)\right)\to 0   $$ 

If $\widetilde{H}_{i}\left(X\right)$ is a vector space over $\mathbb{Q}$, the $\widetilde{H}_{i}\left(X\right)$ is torsion-free, we have 
$$ 0\to \widetilde{H}_{i}\left(X\right)/n \widetilde{H}_{i}\left(X\right)\to \widetilde{H}_{i}\left(X;\mathbb{Z} _{n}\right)\to 0 $$ 

$$ \widetilde{H}_{i}\left(X\right)/ n \widetilde{H}_{i}\left(X\right)\simeq \widetilde{H}_{i}\left(X;\mathbb{Z} _{n}\right) $$ 
For $n = p$
$$ \widetilde{H}_{i}\left(X\right)/ p \widetilde{H}_{i}\left(X\right)\simeq \widetilde{H}_{i}\left(X;\mathbb{Z} _{p}\right) $$ 

We need to show that for each $x \in \widetilde{H}_{i}\left(X\right)$, there exists $y$, such that $x= py$. Since $\widetilde{H}_{i}\left(X\right)$ is $\mathbb{Q}$-vector space , $\frac{1}{p}\in \mathbb{Q}$, we know
$$ \frac{x }{p }\in \widetilde{H}_{i}\left(X\right)\implies x= py \text{ for } y= \frac{x}{p}\implies  x\in p \widetilde{H}_{i}\left(X\right)\implies \widetilde{H}_{i}\left(X\right)/ p \widetilde{H}_{i}\left(X\right)= 0 $$ 

Conversely, if $\widetilde{H}_{i}\left(X;\mathbb{Z} _{p}\right)= 0$, then 
$$ 0\xrightarrow{\bar{n}_{i}} H_{i}\left(X\right)/ p H_{i}\left(X\right)\xrightarrow{\bar{q}_{i}}0\implies H_{i}\left(X\right)/ p H_{i}\left(X\right)= 0   $$ 
Which implies that for each  $p$, $x$ can be divided by $p$. $x/p\in \widetilde{H}_{i}\left(X\right)$. Thus for each $n\in \mathbb{Z} _{*}$, $x/n \in \widetilde{H}_{i}\left(X\right)$, Thus $x \frac{\mathbb{Z}  }{ \mathbb{Z} _{*}}= x\mathbb{Q}\subseteq \widetilde{H}_{i}\left(X\right)$. $\widetilde{H}_{i}\left(X\right)$ is a $\mathbb{Q}$-vector space.


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
