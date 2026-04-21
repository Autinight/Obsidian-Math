---
type: exercise
aliases:
- Hess at Normal Coordinates
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.27.
> Consider a Riemannian manifold and let $r(x)=|xp|$. Introduce exponential normal coordinates $x^{i}$ at $p$.
> 1. Show that
> $$(\operatorname{Hess}x^{i})_{kl}=\Gamma_{kl}^{i}=O(r).$$
> 2. Use that $\frac{1}{2}r^{2}=\frac{1}{2}\sum(x^{i})^{2}$ together with $g=\delta_{ij}+O(r^{2})$ to show that
> $$\operatorname{Hess}\frac{1}{2}r^{2}=g+O(r^{2}).$$
> 3. Show that
> $$\operatorname{Hess}r=\frac{1}{r}g_{r}+O(r).$$



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
