---
type: exercise
aliases:
  - Stereographic Projection and Conformal Model
technique: []
book: RG Petersen
chapter: 4
number: "13"
category:
status: todo
priority:
tags: []
---
> [!exercise] Exercise: 4.7.13
> The stereographic projection of $x^{n+1}=0$ to a hypersurface $M\subset\mathbb{R}^n\times\mathbb{R}$ that is transverse to the lines emanating from $-e_{n+1}=(0,\ldots,0,-1)$ is given by $x\mapsto S(x)$ where $x\in\mathbb{R}^n$ and
> $$S(x)=-e_{n+1}+\lambda(x)\bigl(e_{n+1}+(x,0)\bigr).$$
>
> 1. When $M=S^n(1)$ show that $\lambda(1+|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $S^n(1)$ is given by
> $$\frac{4}{(1+|x|^2)^2}g_{\mathbb{R}^n}.$$
>
> 2. When $M=H^n(1)\in\mathbb{R}^{n,1}$ show that $\lambda(1-|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $H^n(1)$ is Poincaré disc
> $$\frac{4}{(1-|x|^2)^2}g_{\mathbb{R}^n}.$$

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
