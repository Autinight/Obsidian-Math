---
type: definition
aliases: 
- Version of a Function
technique: []
---

> [!definition] Definition: 
> We say $u^{*}$ is a **version** of a given function $u$ provided 
>  $$ u= u^{*}\text{ a.e.} $$ 

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

