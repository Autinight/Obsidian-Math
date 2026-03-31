---
type: lemma
aliases: 
- Young's Inequality
technique: []
---
## Young's Inequality

> [!lemma] Lemma: 
> Let $1< p,q< \infty$, $\frac{1 }{p }+ \frac{1 }{q }= 1$. Then
>  $$ ab\le \frac{a^{p} }{p }+ \frac{b^{q} }{q }\quad \left( a,b> 0\right) $$

> [!note] Note: 
> 我们可以认为$a$有$\frac{1}{p}$次的量纲, $b$有$\frac{1 }{q }$次的量纲, 那么不等式两侧所有项的量纲均为$1$次的. 作为记忆, 发现放缩后的系数也是量纲的次数. 比如下面常用形式中, 为了使左侧是一次的, $b$只能是$\frac{1}{p}$次的, 那么$b^{p-1}$整体的量纲就是$\frac{p-1 }{p }= \frac{1}{q}$.

> [!remark] Remark: 
> 一个$a,b$同量纲的常用的形式是
>  $$ ab^{p-1}\le \frac{a^{p} }{p }+ \frac{b^{p} }{q } $$

## Inequality with $\varepsilon$

> [!lemma] Lemma: 
> Let $1< p,q< \infty$, $\frac{1 }{p }+ \frac{1 }{q }= 1$, $\varepsilon > 0$, then
>  $$ ab\le \frac{\varepsilon a^{p} }{p }+ \frac{\varepsilon ^{-\frac{q}{p}}b^{q} }{q }\quad \left(a,b> 0\right) $$ 

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

