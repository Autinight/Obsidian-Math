---
type: lemma
aliases: 
- Cut-off Function
technique: []
---

> [!lemma] Lemma: 
>  Let $U, V$ be open sets, with $V \subset \subset U$. There exists a smooth function $\zeta$ supported in $U$  such that $\zeta \equiv 1$ on $V$.

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

