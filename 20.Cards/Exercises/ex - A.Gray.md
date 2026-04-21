---
type: exercise
aliases:
  - A.Gray
technique: []
book: RG Petersen
chapter: 5
number: "43"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.43.
> With notation as in the previous exercise show:
> 1. $\sqrt{\det(g_{kl})}=1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+O(|x|^{3})$.
> 2. (**A. Gray**) $\operatorname{vol}B(p,r)=\omega_{n}r^{n}\left(1-\frac{\operatorname{scal}(p)}{6(n+2)}r^{2}+O(r^{3})\right)$, where $\omega_{n}=\operatorname{vol}(B(0,1)\subset\mathbb{R}^{n})$. Hint: Use (1) and expand the integral using polar coordinates.

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
