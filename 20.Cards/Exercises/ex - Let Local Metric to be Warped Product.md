---
type: exercise
aliases:
  - Let Local Metric to be Warped Product
technique: []
book: RG Petersen
chapter: 4
number: "4"
category:
status: todo
priority:
tags: []
---
> [!exercise] Exercise 4.7.4:
> Assume that a Riemannian manifold $(M,g)$ has a function $f$ such that
> $$\operatorname{Hess}f=\lambda(x)g+\mu(f)\,df^2,$$
> where $\lambda:M\to\mathbb{R}$ and $\mu:\mathbb{R}\to\mathbb{R}$. Show that the metric is locally a warped product.

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
