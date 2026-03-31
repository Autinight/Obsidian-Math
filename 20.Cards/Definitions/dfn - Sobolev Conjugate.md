---
type: definition
aliases: 
- Sobolev Conjugate
technique: []
---

> [!definition] Definition: 
> If $1\le p< \infty$, the Sobolev Conjugate of $p$ is 
>  $$ p^{*}:= \frac{np }{n-p } $$
> Note that 
>  $$ \frac{1 }{p^{*} }= \frac{1}{p}-\frac{1}{n} $$  

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

