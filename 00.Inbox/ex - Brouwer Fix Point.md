---
type: exercise
aliases:
- Brouwer Fix Point
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---

> [!exercise] EXERCISE 2.2.1.
> Prove the Brouwer fixed point theorem for maps $f : D^n \to D^n$ by applying degree theory to the map $S^n \to S^n$ that sends both the northern and southern hemispheres of $S^n$ to the southern hemisphere via $f$. [This was Brouwer's original proof.]

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
