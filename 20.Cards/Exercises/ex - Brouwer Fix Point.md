---
type: exercise
aliases:
  - Brouwer Fix Point
technique: []
book: AT Hatcher
chapter: 2.2
number: "1"
category:
status: done
priority:
tags: []
---

> [!exercise] EXERCISE 2.2.1.
> Prove the Brouwer fixed point theorem for maps $f : D^n \to D^n$ by applying degree theory to the map $S^n \to S^n$ that sends both the northern and southern hemispheres of $S^n$ to the southern hemisphere via $f$. [This was Brouwer's original proof.]

> [!proof] Proof: 
> We identify $S^{n}$ as a subspace of $D^{n}\times \mathbb{R}$, that is 
> $$ x\sim \left(\tilde{x},t\right),\quad \left| x \right|^{2}+ t^{2}= 1, \quad x\in S^{n}, \tilde{x}\in D^{n}, t\in \mathbb{R} _{\ge  0}  $$ 
> Then for $\left(x,t\right)\in S^{n}$, we mapsto 
> $$ \left(\tilde{x},t\right)\in S^{n}\mapsto \tilde{x}\in D^{n}\mapsto f\left(\tilde{x}\right)\in D^{n}\mapsto \left(f\left(\tilde{x}\right), \sqrt{1-\left| f\left(\tilde{x}\right) \right|^{2} }\right)\in S^{2} $$ 
> Then we get a map $F:S^{n}\to S^{n}$ that sends both the northern and southern hemispheres of $S^{n}$ to the southern hemi sphiere.
>
> If $f$ has no fixed point, then so dose $F$. Then $F$ is hmotopic to the antipodal map $A$, since 
> But 
> $$ \det A= \left(-1\right)^{n}\neq 0= \operatorname{deg}F $$ 
> since $F$ is not surjectrive.

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
