---
type: exercise
aliases:
  - Freeness of Cellullar Homology
technique: []
book: AT Hatcher
chapter: 2.2
number: "15"
category:
status: done
priority:
tags: []
---

> [!exercise] EXERCISE 2.2.15.
> Show that if $X$ is a CW complex then $H_n(X^n)$ is free by identifying it with the kernel of the cellular boundary map $H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1}, X^{n-2})$.


$$ H_{k}\left(X^{n},X^{n-1}\right)= H_{k}\left(\bigvee S^{n}\right)= \begin{cases} 0,&k\neq n\\\left< \left\{ cells \right\} \right>,&k= n \end{cases}  $$ 

We have homology long- excatc seeuqnce
$$ \cdots \to H_{n}\left(X^{n-1}\right)\to H_{n}\left(X^{n}\right)\to H_{n}\left(X^{n},X^{n-1}\right)\to H_{n-1}\left(X^{n},X^{n-1}\right) $$ 
which implies that 

$$ H_{k+ 1}\left(X^{n},X^{n-1}\right)\to H_{k}\left(X^{n-1}\right)\to H_{k }\left(X^{n}\right)\to H_{k}\left(X^{n},X^{n-1}\right) $$ 

For $k \neq n$, we have 
$$ H_{k}\left(X^{n-1}\right)\to H_{k}\left(X^{n}\right) \to 0$$
Thus $H_{k}\left(X^{n-1}\right)\to H_{k}\left(X^{n}\right)$ is surjective.
For $k\neq n-1$, we have 
$$ 0\to H_{k}\left(X^{n-1}\right)\to H_{k}\left(X^{n}\right) $$ 
Thus $H_{k}\left(X^{n-1}\right)\to H_{k}\left(X^{n}\right)$ is injective. Thus for  $k\neq n, n-1$, $H_{k}\left(X^{n-1}\right)\simeq H_{k}\left(X^{n}\right)$ 

For $k> n$, we have 
$$ H_{k}\left(X^{n}\right)\simeq H_{k}\left(X^{n-1}\right)\simeq \cdots \simeq H_{k}\left(X^{0}\right)= 0 $$ 

For $k< n$, we have 
$$ H_{k}\left(X^{n}\right)\simeq H_{k}\left(X^{n+ 1}\right)\simeq \cdots \simeq H_{k}\left(X\right) $$ 



$$ H_{n}\left(X^{n},X^{n-1}\right) \xrightarrow{d _{n}}H_{n-1}\left(X^{n-1},X^{n-2}\right) $$ 

From 
$$0\to H_{n}\left(X^{n}\right)\to  H_{n}\left(X^{n},X^{n-1}\right)\xrightarrow{\partial _{n}}H_{n-1}\left(X^{n-1}\right)\to \cdots   $$ 
and
$$ d _{n}\left(x\right)= 0\implies  j_{n-1}\left(\partial _{n}\left(x\right)\right)= 0\implies \partial _{n}\left(x\right)\in \operatorname{ker}j_{n-1}\implies \partial _{n}\left(x\right)= 0\implies x \in \operatorname{ker}\partial _{n} $$  
we have 

$$ H_{n}\left(X^{n}\right)\xrightarrow{j_{n}} H_{n}\left(X^{n},X^{n-1}\right)\xrightarrow{\partial _{n}}H_{n-1}\left(X^{n-1}\right)\xrightarrow{j_{n-1}}   H_{n-1}\left(X^{n-1},X^{n-2}\right)  $$ 
where $j_{n-1}$ is injective, $\,d _{n}=  j_{n-1}\circ \partial _{n}$

$$ \operatorname{ker}d _{n} $$
That is $x\in \operatorname{ker}\partial _{n}= \operatorname{Im}j_{n}$

$$0= H_{n}\left(X^{n-1}\right)\to H_{n}\left(X^{n}\right)\xrightarrow{j_{n}}H_{n}\left(X^{n}, X^{n-1}\right)\to \cdots   $$ 
Thus $j_{n}$ is injective, then 
$$ \operatorname{ker} d _{n}\simeq  \operatorname{Im} j_{n}\simeq  H_{n}\left(X^{n}\right) $$ 

But $H_{n}\left(X^{n},X^{n-1}\right)$ and $H_{n-1}\left(X^{n-1},X^{n-2}\right)$ are free abelian groups , the $\operatorname{ker} d _{n}$ is free as well.


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
