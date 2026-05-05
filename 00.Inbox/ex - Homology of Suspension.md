---
type: exercise
aliases:
  - Homology of Suspension
technique: []
book: AT Hatcher
chapter: 2.1
number: "20"
category:
status: todo
priority:
tags: []
---
> [!exercise] Exercise: 
> Show that $\tilde{H}_n(X) \approx \tilde{H}_{n+1}(SX)$ for all $n$, where $SX$ is the suspension of $X$. More generally, thinking of $SX$ as the union of two cones $CX$ with their bases identified, compute the reduced homology groups of the union of any finite number of cones $CX$ with their bases identified.

Consider the pari 
$$ \left(SX,X\right) $$ 

$X$ is a good pair of $SX$, since $X$ is closed in $SX$, and has an open neighbourhood deformation rectract to it.


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
