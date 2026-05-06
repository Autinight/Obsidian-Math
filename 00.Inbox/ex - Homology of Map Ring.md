---
type: exercise
aliases:
- Homology of Map Ring
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.30.
> For the mapping torus $T_f$ of a map $f : X \to X$, we constructed in Example 2.48 a long exact sequence $\cdots \to H_n(X) \xrightarrow{\mathbb{1} - f_*} H_n(X) \to H_n(T_f) \to H_{n-1}(X) \to \cdots$. Use this to compute the homology of the mapping tori of the following maps:
> 1. A reflection $S^2 \to S^2$.
> 2. A map $S^2 \to S^2$ of degree 2.
> 3. The map $S^1 \times S^1 \to S^1 \times S^1$ that is the identity on one factor and a reflection on the other.
> 4. The map $S^1 \times S^1 \to S^1 \times S^1$ that is a reflection on each factor.
> 5. The map $S^1 \times S^1 \to S^1 \times S^1$ that interchanges the two factors and then reflects one of the factors.

We have 
$$ H_{n}\left(X\right)\xrightarrow{1-f_{*}}H_{n}\left(X\right)\xrightarrow{i_{*}}H_{n}\left(T_{f}\right)\xrightarrow{q_{*}}H_{n-1}\left(X\right)   \xrightarrow{1-f_{*}}H_{n-1}\left(X\right)  $$ 
Where we 
$$ T_{f}\xrightarrow{q} T_{f}/X\simeq  \left(X \times I\right)/ \left(X\times \partial I\right)\simeq X  $$ 

$$ H_{n}\left(X \times  I /  \left(X  \times \partial I\right)\right)\xrightarrow{\partial } H_{n-1}\left(X \times I\right)\simeq H_{n}\left(X\times \left\{ 0 \right\}\right)\simeq H_{n}\left( X \times  \left\{ 1 \right\}\right) $$ 

$$ \partial \left(a,b\right)=  a- f_{*}b $$ 

1. 
$$ H_{n}\left(S^{2}\right)\xrightarrow{2}H_{n}\left(S^{2}\right)\xrightarrow{i_{*}} H_{n}\left(T_{f}\right)\xrightarrow{q_{*}}H_{n-1}\left(S^{2}\right)\xrightarrow{2}H_{n-1}\left(S^{2}\right)     $$
For $n = 3$, we have 

$$ 0\to 0\to H_{n}\left(T_{f}\right)\xrightarrow{q_{*}}\mathbb{Z} \xrightarrow{2}0   $$ 
$$ H_{3}\left(T_{f}\right)\simeq \operatorname{Im}q_{*}\simeq \operatorname{ker}2= 0 $$ 

For  $n = 2$, we have 
$$0\to  \mathbb{Z} \xrightarrow{2} \mathbb{Z} \xrightarrow{i_{*}} H_{2}\left(T_{f}\right)\xrightarrow{q_{*}}0\to 0  $$ 
$$ H_{2}\left(T_{f}\right)\simeq  \mathbb{Z} / \operatorname{ker}i_{*}= \mathbb{Z} / \operatorname{Im}2= \mathbb{Z} _{2}$$ 
B
For $n = 1$ , 
$$ 0\to H_{1}\left(T_{f}\right)\xrightarrow{q_{*}}H_{0}\left(S^{2}\right)\xrightarrow{2} H_{0}\left(S^{2}\right)  $$ 
$$ H_{1}\left(T_{f}\right)=  \operatorname{Im} q_{*}=  $$ 
 



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
