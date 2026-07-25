---
type: concept
aliases:
- Sobolev空间
technique: []
tags: []
---

> [!note] Note: Sobolev空间是Banach空间:
> $L^{p}$收敛把弱导数关系传递给极限.
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
