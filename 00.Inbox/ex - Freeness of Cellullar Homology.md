---
type: exercise
aliases:
- Freeness of Cellullar Homology
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---

> [!exercise] EXERCISE 2.2.15.
> Show that if $X$ is a CW complex then $H_n(X^n)$ is free by identifying it with the kernel of the cellular boundary map $H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1}, X^{n-2})$.


$$ H_{k}\left(X^{n},X^{n-1}\right)= H_{k}\left(\bigvee S^{n}\right)= \begin{cases} 0,&k\neq n\\\left< \left\{ cells \right\} \right>,&k= n \end{cases}  $$ 

We have homology long- excatc seeuqnce
$$ \cdots \to H_{n}\left(X^{n-1}\right)\to H_{n}\left(X^{n}\right)\to H_{n}\left(X^{n},X^{n-1}\right)\to H_{n-1}\left(X^{n},X^{n-1}\right) $$ 
which implies that 

$$ 0\to H_{n}\left(X^{n-1}\right)\to H_{n}\left(X^{n}\right)\to H_{n}\left(X^{n},X^{n-1}\right)\to 0 $$ 
and

$$ 0\to H_{k}\left(X^{n-1}\right)\to H_{k}\left(X^{n}\right)\to 0 $$
for $k \neq n, n+ 1$, thus
$$ H_{k}\left(X^{n-1}\right)\simeq H_{k}\left(X^{n}\right),\quad k\neq n,n+ 1 $$  

$$ H_{n}\left(X^{n},X^{n-1}\right)\xrightarrow{d _{n}} H_{n-1}\left(X^{n-1},X^{n-2}\right)  $$ 

$$ H_{n}\left(X^{n},X^{n-1}\right)\xrightarrow{\partial _{n}}H_{n-1}\left(X^{n-1}\right) \xrightarrow{j_{n-1}}H_{n-1}\left(X^{n-1},X^{n-2}\right)  $$ 

where

$j_{n-1}$ is injectvie,  $d _{n}= j_{n-1}\circ \partial _{n}$we have 
$$ H_{n-1}\left(X^{n-1}\right) = $$ 



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
