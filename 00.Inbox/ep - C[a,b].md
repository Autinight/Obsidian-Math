---
type: example
aliases:
  - C[a,b]
technique: []
tags:
  - functional_analysis
  - Banach_space
---

### $C\left[ a,b \right]$是Banach空间


### $C\left[ a,b \right]$是可分的度量空间.

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
