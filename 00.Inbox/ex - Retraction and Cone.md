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

If $A$ is contractible in $X$, then $H_{n}\left(X,A\right)\simeq \widetilde{H}_{n}\left(X\right)\oplus \widetilde{H}_{n-1}\left(A\right)$

$\left(X\cup CA\right)/X$ is the susension $SA$ of $A$,

> [!proof] Proof: 
> 1. If $A$ is contractible, then there eixsts $f_{t}: A\to X$, such that $f_{1}\left(x\right)= *$.
>    $$ f: A\times I \to X,\quad f\left(x,1\right)= *,\quad f: CA\to X$$ 
>    Exists a continuous map $f:CA\to X$, with $f\left(a,0\right)= a$, $f|_{A}= \operatorname{Id}_{A}$.
>    Then for a map 
>    $$ F: X\cup CA\to X,\quad F= \begin{cases} f\left(x\right), &x\in CA\\x,&x \in X \end{cases}  $$ 
>    
>    on $CA\cap X= A$, we have $f\left(x\right)= x$. Thus $F$ is well-defined and continuous.
>    
>    Let 
>    $$ i: X \hookrightarrow  X\cup CA $$ 
>    
>    Then 
>    $$ F\circ i= \operatorname{Id}_{X} $$ 
>    $X$ is a rectract of $X\cup CA$. 
>    
>    The other side, if $X$ is a retract of $X\cup CA$, then there exists $F$ such that $F\circ i= \operatorname{Id}_{X}$, that is a continuous map
>    $$ F: X\cup CA\to X,\quad F\left(x\right)= x,\quad \forall x\in X $$ 
>    
>    We define 
>    $$ f_{t}\left(a\right)= F\left([a,t]\right), \quad \text{for }\left[ a,t \right]\in CA $$ 
>    Then $\left(t,a\right)\mapsto f_{t}\left(a\right)$ is continuous, and $f_{1}\left(a\right)= F\left(\left[ a,1 \right]\right)= *$. $f_{0}\left(a\right)= F\left(a\right)= a$.


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
