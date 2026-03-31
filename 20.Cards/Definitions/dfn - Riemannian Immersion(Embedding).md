---
type: definition
aliases: 
- Riemannian Immersion(Embedding)
technique: []
tags: []
---

> [!definition] Definition: 
> A **Riemannian immersion**  (or Riemannian embedding) is an immersion (or embedding) $F:M\to N$ such that $g_{M}= F^{*}g_{N}$. Riemannian immersions are also called **isetric immersions**.

> [!remark] Remark: 
> Riemannian immersion 在局部上保持距离, 但几乎总是不保持整体距离的. 因为更大的空间中往往存在更多[捷径].



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
