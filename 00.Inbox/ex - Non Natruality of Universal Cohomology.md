---
type: exercise
aliases:
- Non Natruality of Universal Cohomology
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---

> [!exercise] EXERCISE 3.1.11.
> Let $X$ be a Moore space $M(\mathbb{Z}_m, n)$ obtained from $S^n$ by attaching a cell $e^{n+1}$ by a map of degree $m$. (a) Show that the quotient map $X \to X/S^n = S^{n+1}$ induces the trivial map on $\widetilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^{n+1}(-; \mathbb{Z})$. Deduce that the splitting in the universal coefficient theorem for cohomology cannot be natural. (b) Show that the inclusion $S^n \hookrightarrow X$ induces the trivial map on $\widetilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^n(-; \mathbb{Z})$.


$$ X/S^{n}\simeq S^{n+ 1} $$ 
$$ X= e^{n+ 1}\cup _{\varphi }S^{n} $$ 

$$ \varphi : \partial e^{n+ 1}\to S^{n},\quad  $$ 

$\left(X,S^{n}\right)$ is a good paire, we have 
$$ H^{n}\left(X/S^{n}\right) \simeq H^{n}\left(X,S^{n}\right)$$ 

$$ C^{n}\left(X,S^{n}\right)\to C^{n}\left(X\right)\to C^{n}\left(S^{n}\right) $$ 

$$ H^{n}\left(S^{n+ 1}\right)= H^{n}\left(X,S^{n}\right)\to H^{n}\left(X\right)\to H^{n}\left(S^{n}\right) $$ 

$$ \widetilde{H}^{k}\left(X\right)= \begin{cases} \mathbb{Z} _{m}, &k= n+ 1  \end{cases}  $$ 


For $k \neq n+ 1$, we have 

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
