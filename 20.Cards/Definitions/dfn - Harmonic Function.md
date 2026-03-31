---
type: definition
aliases: 
- Harmonic Function
technique: []
---

> [!remark] Remark: 
> We assume that $\Omega$ is a connected domain in $\mathbb{R} ^{n}$. $\omega _{n}$ denotes the surface area of the unit sphere in $\mathbb{R} ^{n}$.

### Harmonic Function

> [!definition] Definition: 
> A function $u\in C^{2}\left(\Omega \right)$ is harmonic if $\Delta u= 0$ in $\Omega$.

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

