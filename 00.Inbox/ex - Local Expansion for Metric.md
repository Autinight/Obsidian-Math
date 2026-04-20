---
type: exercise
aliases:
- Local Expansion for Metric
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---

> [!exercise] EXERCISE 5.9.42.
> Consider exponential normal coordinates around $p\in M$, i.e., $\delta_{ij}x^{j}=g_{ij}x^{j}$ and $x^{i}(p)=0$. All calculations below are at $p$.
> 1. Show that the second partials of the metric satisfy the Bianchi identity
> $$\partial_{l}\partial_{k}g_{ji}+\partial_{j}\partial_{l}g_{ki}+\partial_{k}\partial_{j}g_{li}=0.$$
> Hint: Take three derivatives of the defining relation $x^{i}=\sum_{s}g_{is}x^{s}$ as in lemma 5.5.7.
> 2. Use all four of these Bianchi identities with the last index being $i,j,k$, or $l$ to conclude
> $$\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}.$$
> 3. Use the formula for the curvature tensor in normal coordinates from section 3.1.6 to show
> $$R_{ikjl}=\partial_{i}\partial_{j}g_{kl}-\partial_{i}\partial_{l}g_{jk}.$$
> 4. Use (3) and (1) to show
> $$\partial_{i}\partial_{j}g_{kl}=\frac{1}{3}(R_{ikjl}+R_{jkil}).$$
> 5. Show that we have a Taylor expansion
> $$g_{kl}=\delta_{kl}+\frac{1}{3}R_{ikjl}x^{i}x^{j}+O(|x|^{3}).$$
> 6. (**Riemann**) Use the symmetries of the curvature tensor to conclude
> $$\begin{aligned} g&=\sum_{k,l=1}^{n}g_{kl}dx^{k}dx^{l} \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{12}\sum_{i,j,k,l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \end{aligned}$$
> 7. (**Gauss**) Show that in dimension 2 we have
> $$\begin{aligned} g&=dx^{2}+dy^{2}+\frac{1}{3}R_{1212}(xdy-ydx)^{2}+o(x^{2}+y^{2}) \\ &=dx^{2}+dy^{2}-\frac{1}{3}\sec(p)(xdy-ydx)^{2}+o(x^{2}+y^{2}). \end{aligned}$$
> Riemann's construction of the curvature tensor proceeded as follows: Start with the normal coordinates, next use the radial isometry property to conclude that the Taylor expansion has the form
> $$g=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}C_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3})$$
> for some tensor $C$. This tensor has some obvious symmetry properties from the form of the expansion. It is possible to calculate it from the derivatives $\partial_{i}\partial_{j}g_{kl}$ provided they satisfy $\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}$. Finally, one has to show that this property is equivalent to the assertion that the above expansion is possible.

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
