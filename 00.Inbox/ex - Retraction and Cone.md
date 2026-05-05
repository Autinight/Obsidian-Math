---
type: exercise
aliases:
  - Retraction and Cone
technique: []
book: AT Hatcher
chapter: 2.2
number: "26"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.26.
> For a pair $(X, A)$, let $X \cup CA$ be $X$ with a cone on $A$ attached.
> 1. Show that $X$ is a retract of $X \cup CA$ iff $A$ is contractible in $X$: There is a homotopy $f_t : A \to X$ with $f_0$ the inclusion $A \hookrightarrow X$ and $f_1$ a constant map.
> 2. Show that if $A$ is contractible in $X$ then $H_n(X, A) \approx \tilde{H}_n(X) \oplus \tilde{H}_{n-1}(A)$, using the fact that $(X \cup CA)/X$ is the suspension $SA$ of $A$.

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
