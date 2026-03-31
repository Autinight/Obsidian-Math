---
type: theorem
aliases: 
- Convolution Convergence Theorem with Radially Decreasing Controlled Kernels
technique: []
tags: []
---

> [!theorem] Theorem: 
> Suppose that $\mathscr{K}\in L\left(\mathbb{R} ^{n}\right)$ with $\int _{\mathbb{R} ^{n}}\mathscr{K}\,d x= 1$. And soppuse there exists $\varphi  \left(x\right)\in L\left(\mathbb{R} ^{n}\right)$, with $\varphi \left(x\right)= \varphi _0 \left(\left| x \right| \right)$, $\varphi _0$ is decresing, such that 
>  $$ \left| \mathscr{K}\left(x\right) \right|\le \varphi \left(x\right),\quad a.e.x\in \mathbb{R} ^{n}  $$
> Then if $f\in L^{p}\left(\mathbb{R} ^{n}\right)$ , $1\le p\le \infty$, we have 
>  $$ \lim_{\varepsilon \to 0}\left(f*\mathscr{K}_{\varepsilon }\left(x\right)\right)= f\left(x\right),\quad \text{for each Lebesgue point } x $$ 



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
