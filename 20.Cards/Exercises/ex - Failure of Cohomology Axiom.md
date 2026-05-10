---
type: exercise
aliases:
  - Failure of Cohomology Axiom
technique: []
book: AT Hatcher
chapter:
number:
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.7.
> Show that the functors $h^n(X) = \operatorname{Hom}(H_n(X), \mathbb{Z})$ do not define a cohomology theory on the category of CW complexes.

For $CW$ complexe, we mean
$$ C_{n}^{CW}\left(X\right)= H_{n}\left(X^{n}, X^{n-1}\right) $$ 
$$ h^{n}\left(X\right)= \operatorname{Hom}\left(H_{n}\left(X^{n},X^{n-1}\right),\mathbb{Z} \right) $$ 
什么是上同调公理, 想想
我还真不知道, 可能是什么
. 首先有链复形, 然后有同调, 满足什么性质, 不懂,

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
