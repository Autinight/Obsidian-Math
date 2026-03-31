---
type: example
aliases: 
- Hopf Fibration
technique: []
tags: []
---
### Definition

> [!definition] Definition: 
> We think of $S^{3}\subseteq \mathbb{C}^{2}$, $S^{2}\simeq \mathbb{C}P^{1}$. We define the Hopf map $h:S^{3}\to S^{2}$ as 
>  $$ h\left(z_1,z_2\right)= \left[ z_1:z_2 \right]\in \mathbb{C}P^{1} $$ 
> Then for each $p\in S^{2}$, $h^{-1} \left(p\right)\simeq S^{1}\subseteq S^{3}$, which gives a principle bundle
>  $$ S^{1}\hookrightarrow S^{3}\xrightarrow{h}S^{2}  $$ 


> [!remark] Remark: 
> By thinking of $S^{3}\simeq \mathbb{R} ^{3}\cup \left\{ \infty \right\}$, we can visualize the hopf fibration by corresponding each $p\in S^{2}$ to a twisted(by stereographic projection) circle in $\mathbb{R} ^{3}$ to fill up $\mathbb{R} ^{3}$(the North Pole is corresponded to the verticle line).

> [!proof] Proof: 
> For $p= \left[ z_1:z_2 \right]$, note that 
>  $$ h\left(w_1,w_2\right)= \left[ z_1:z_2 \right] $$
> implies
>  $$ \left[ w_1:w_2 \right]= \left[ z_1:z_2 \right] $$
>  We fixed $z_1,z_2$ such that $\left| \left(z_1,z_2\right) \right|= 1$, then
> $$ \frac{w_2 }{w_1 }= \frac{z_2 }{z_1 }= \lambda ,\quad \left(w_1,w_2\right)= \lambda \left(z_1,z_2\right)\implies  \left| \lambda  \right|= 1  $$
> Thus $h^{-1} \left(p\right)$ is the circle
>  $$ \left\{ \lambda \left(z_1,z_2\right)\in S^{3}: \lambda \in S^{1}  \right\} $$ 

### Is a Riemannian Submersion

> [!proposition] Proposition: 
> The Hopf map $H:S^{1}\left(1\right)\to S^{2}\left(\frac{1}{2}\right)$
> can be wriiten explicitly as 
>  $$ H\left(z,w\right)eq\left(\frac{1}{2}\left(\left| w \right|^{2}-\left| z \right|^{2}  \right), z \bar{w}\right) $$ 

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
