---
type: theorem
aliases: 
- Infinite Differentiability in the Interior
technique: []
---

> [!theorem] Theorem: 
> Assume
>  $$ a^{ij},b^{i},c \in C^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and 
>  $$ f\in C^{\infty}\left(U\right) $$
> Suppose $u\in H^{1}\left(U\right)$ is a weak solution of the elliptic PDE
>  $$ Lu= f \quad \text{ in }U$$
> Then
>  $$ u\in C^{\infty}\left(U\right) $$    




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

