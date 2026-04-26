---
type: exercise
aliases:
  - Good Pair Counterexample
technique: []
book: AT Hatcher
chapter: 2.1
number: "26"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.1.26.
> Show that $H_1(X, A)$ is not isomorphic to $\widetilde{H}_1(X/A)$ if $X = [0, 1]$ and $A$ is the sequence $1, 1/2, 1/3, \cdots$ together with its limit $0$.

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
