---
type: exercise
aliases:
  - Split and Universal Coefficients
technique: []
book: AT Hatcher
chapter: 2.2
number: "43"
category:
status: done 
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.43.
> 1. Show that a chain complex of free abelian groups $C_n$ splits as a direct sum of subcomplexes $0 \to L_{n+1} \to K_n \to 0$ with at most two nonzero terms. [Show the short exact sequence $0 \to \text{Ker } \partial \to C_n \to \text{Im } \partial \to 0$ splits and take $K_n = \text{Ker } \partial$.]
> 2. In case the groups $C_n$ are finitely generated, show there is a further splitting into summands $0 \to \mathbb{Z} \to 0$ and $0 \to \mathbb{Z} \xrightarrow{m} \mathbb{Z} \to 0$. [Reduce the matrix of the boundary map $L_{n+1} \to K_n$ to echelon form by elementary row and column operations.]
> 3.  Deduce that if $X$ is a CW complex with finitely many cells in each dimension, then $H_n(X; G)$ is the direct sum of the following groups:
>     - a copy of $G$ for each $\mathbb{Z}$ summand of $H_n(X)$
>     - a copy of $G/mG$ for each $\mathbb{Z}_m$ summand of $H_n(X)$
>     - a copy of the kernel of $G \xrightarrow{m} G$ for each $\mathbb{Z}_m$ summand of $H_{n-1}(X)$




> [!proof] Proof: 
> 1. 由
>    $$C_{n+ 2} \xrightarrow{\partial _{n+ 2}} C_{n+ 1}\xrightarrow{\partial _{n+ 1}}C_{n}\xrightarrow{\partial _{n}}C_{n-1}\xrightarrow{\partial _{n-1}}C_{n-2}    $$
>    有正合列
>    $$ 0\to \operatorname{ker}\partial_{n} \xrightarrow{i} C_{n}\xrightarrow{\partial_{n} } \operatorname{Im}\partial_{n} \to 0 $$ 
>    由于$\operatorname{Im}\partial _{n}$是自由阿贝尔群, 我们有
>    $$ C_{n}\simeq \operatorname{ker}\partial _{n} \oplus L_{n}$$ 
>    其中$L_{n}$是$\partial _{n}$的一个截面, 定义$K_{n}= \operatorname{ker}\partial _{n}$,
>    则$\partial _{n}\circ \partial _{n+ 1}\left(L_{n+ 1}\right)= 0\implies \partial _{n+ 1}\left(L_{n+ 1}\right)\subseteq \operatorname{ker}\partial _{n}= K_{n}$
>    . 故可以定义链 $C^{\left(n\right)}$
>    $$\cdots \to  0\to L_{n+ 1}\xrightarrow{\partial _{n+ 1}}  K_{n}\to 0\to \cdots  $$ 
>    其中$n+ 1$次部分为$L_{n+ 1}$, $n$次部分为$K_{n}$, 其余为零.
> 2.
>   根据构造, 
>   $$ \partial _{n+ 1}|_{L_{n+ 1}}:L_{n+ 1}\xrightarrow{s}\operatorname{Im}\partial _{n}  $$  
> 是同构.
> 设
> $$ K_{n}= \mathbb{Z} _{r^{\left(n\right)}},\quad L_{n}= \mathbb{Z} _{s^{\left(n\right)}} $$ 
> 则
> $$ r^{\left(n\right)}\ge s^{\left(n+ 1\right)} $$ 
> 选择特定的基, $\partial |_{L_{n+ 1}}$可以表示为
> $$ \partial \sim \begin{pmatrix} d_1& &\\& \ddots & \\&& d _{r}\\&O\\\end{pmatrix} $$ 
> 其中$d _{i}\in \mathbb{Z}$, $d _{i}\neq 0$.
> 则
> 设$K_{n}= \left< a_{1} \right>\oplus \left< a_2 \right>\oplus \cdots \oplus \left< a_{r^{\left(n\right)}} \right>$
> $$ L_{n+ 1}= \left< b_1 \right>\oplus \left< b_2 \right>\oplus \cdots \oplus \left< b_{s^{\left(n+ 1\right)}} \right> $$ 
> 其中
> $$ \partial \left(b_{i}\right)= d _{i} a_{i},\quad  1\le i\le r^{\left(n\right)} $$ 
> 将
> $$ 0\to L_{n+ 1}\to K_{n} \to 0$$
> 分解为
> $$ 0\to  \mathbb{Z} = \left< b_{i} \right> \xrightarrow{\times  d _{i}} \mathbb{Z} = \left< a_{i} \right>\to  0 ,\quad  1\le i\le r^{\left(n\right)}$$  
> $$ 0\to 0\to \mathbb{Z} = \left< a_{j} \right>\to 0,\quad  r^{\left(n\right)}< j $$ 
> 
> 3. Since
>    $$ C_{n}^{CW} $$
>    are finitely generated abelian groups. We decoposes $C_{n}^{CW}$ into sum of the groups
>    $$  0\to \mathbb{Z} \to 0 $$  
>    Then each $0\to \mathbb{Z} \to 0$ gives the homoology
>    $$ 0\to \mathbb{Z} \to 0 $$ 
>    which gives a $\mathbb{Z}$- summand of $H_{n}\left(X\right)$
>    . and  
>    $$ 0\to \mathbb{Z} \xrightarrow{m}  \mathbb{Z} \to 0 $$
>    gives the homology
>    $$ 0\to \mathbb{Z} _{m}^{\left(n+ 1\right)}\to \mathbb{Z} _{m}^{\left(n\right)}\to 0 $$ 
>    which gives a $\mathbb{Z} _{m}$ summand of $H_{n+ 1}$ and a $\mathbb{Z} _{m}$ summand of $H_{n}$.
>    
>    
>    
>    
>    Then $C_{n}^{CW}\left(X;G\right)$ composes into
>    $$ 0\to G\to 0 $$ 
>    
>    $$ 0\to G\xrightarrow{m} G\to 0  $$ 
>    
>    Then the homology are 
>    $$ 0\to G\to 0 $$ 
>    
>    $$ 0\to \left(\operatorname{ker}\left(G\xrightarrow{m}G \right)\right)\to G/mG\to 0 $$ 
>    
>    Thus every chain $0\to \mathbb{Z} \to 0$, a.e. a $\mathbb{Z}$-sammand of $H_{n}\left(X\right)$ gives the homology $H_{n}\left(X;G\right)$ a copy of $G$.
>    Every $\mathbb{Z} _{m}$ summand of $H_{n}\left(X\right)$ means the chain 
>    $$ 0\to \left(\operatorname{ker}\left(G\xrightarrow{m} G\right)\right)^{\left(n+ 1\right)}\to \left( G/mG\right)^{\left(n\right)}\to 0 $$  
>    which means a copy of $G/mG$.
>    Every $\mathbb{Z} _{m}$ summand of $H_{n-1}\left(X\right)$ means the chain
>    $$ 0\to \left(\operatorname{ker}\left(G\xrightarrow{m} G\right)\right)^{\left(n\right)}\to \left(G/mG\right)^{\left(n-1\right)}\to 0 $$ 
>    which means a copy of $\left(\operatorname{ker}\left(G\xrightarrow{m} G\right)\right).$
>    


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
