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

From 
$$ C\left(X\right)\xrightarrow{i} C\left(Y\right)\xrightarrow{q}C\left(Y,X\right)  $$ 
where $i$ is injective, we have 
$$ H_{n}\left(X\right)\xrightarrow{i_{*}}  H_{n}\left(Y\right)\xrightarrow{q_{*}}  H_{n}\left(Y,X\right)\to  $$ 

where $i_{*}$ is injective , $H_{n}\left(Y\right)= H_{n}\left(X\right)$, we have $\operatorname{ker}i_{*}= 0$, 
$$ 0\to H_{n}\left(X\right)\xrightarrow{i_{*}}H_{n}\left(Y\right)\xrightarrow{q_{*}}H_{n}\left(Y,X\right)\xrightarrow{0}    $$ 

If $A$ is contractible in $X$, then  $X$ is a retract of $X\cup CA$, but note that 
$$ \left(X\cup CA\right)/ X\simeq SA\quad by \quad \begin{cases} x\mapsto *\\\left(a,t+ \frac{1}{2}\right)\mapsto  \left(a,2t\right)\in SA\end{cases}  $$ 

$$ H_{n}\left(Y,X\right)\simeq \widetilde{H}_{n}\left(Y/X\right) $$ 

$$ H_{n}\left(Y\right)\simeq H_{n}\left(Y,X\right)\oplus H_{n}\left(X\right) $$ 


$$ \widetilde{H}_{n}\left(X\cup CA/X\right)\simeq H_{n}\left(X\cup CA,X\right)\simeq \widetilde{H}_{n}\left(SA \right) \simeq \widetilde{H}_{n-1}\left(A\right)$$  

$$ H_{n}\left(CA,A\right)\simeq \widetilde{H}_{n-1}\left(A\right) $$ 


$\left(CA,A\right)$ is a good pari, we have 

$$ H_{n}\left(A\right)\to H_{n}\left(CA\right)\to H_{n}\left(CA,A\right)\to H_{n-1}\left(A\right) $$ 
comes to
$$ H_{n}\left(A\right)\to 0\to H_{n}\left(CA,A\right)\to H_{n-1}\left(A\right)\to 0 $$ 
Thus
$$ H_{n}\left(CA,A\right)\simeq H_{n-1}\left(A\right) $$ 

Thus we have 
$$ H_{n}\left(C\cup CA,X\right) $$ 

From 
$$ A\subseteq X\subseteq X\cup CA $$ 
We have 
$$ H_{n}\left(X,A\right)\to H_{n}\left(X\cup CA,A\right)\to H_{n}\left(X\cup CA,X\right) $$ 
comes to 
$$ H_{n}\left(X,A\right)\to  $$ 


$$ H_{n}\left(X\cup CA,A\right)\simeq \widetilde{H}_{n}\left(\left(X\setminus \left(A\setminus \left\{ * \right\}\right)\right)\cup SA\right)\simeq \widetilde{H}_{n}\left(X\right)\cup \widetilde{H}_{n}\left(SA\right) $$ 
 


> [!proof] Proof: 
> 1. If $A$ is contractible, then there eixsts $f_{t}: A\to X$, such that $f_{1}\left(x\right)= *$.
>    $$ f: A\times I \to X,\quad f\left(x,1\right)= *,\quad f: CA\to X$$ 
>    Exists a continuous map $f:CA\to X$, with $f\left(a,0\right)= a$, $f|_{A}= \operatorname{Id}_{A}$.
>    Then for a map 
>    $$ F: X\cup CA\to X,\quad F= \begin{cases} f\left(x,t\right), &x\in CA\\x,&x \in X \end{cases}  $$ 
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
