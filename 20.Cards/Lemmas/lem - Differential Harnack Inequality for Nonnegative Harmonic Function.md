---
type: lemma
aliases: 
- Differential Harnack Inequality for Nonnegative Harmonic Function 
technique: []
tags: []
---

> [!lemma] Lemma: 
> Suppose $u$ is a nonnegative harmonic function in $B_1$. Then there holds
>  $$ \sup _{B_{1/2}}\left| D\log u \right|\le C  $$
> where $C= C\left(n\right)$ is a positive constant.
>  


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
