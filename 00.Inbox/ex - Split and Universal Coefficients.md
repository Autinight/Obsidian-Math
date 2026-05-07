---
type: exercise
aliases:
  - Split and Universal Coefficients
technique: []
book: AT Hatcher
chapter: 2.2
number: "43"
category:
status: todo
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
>


> [!proof] Proof: 
> 1. 由
> $$C_{n+ 2} \xrightarrow{\partial _{n+ 2}} C_{n+ 1}\xrightarrow{\partial _{n+ 1}}C_{n}\xrightarrow{\partial _{n}}C_{n-1}\xrightarrow{\partial _{n-1}}C_{n-2}    $$
> 有正合列
> $$ 0\to \operatorname{ker}\partial_{n} \xrightarrow{i} C_{n}\xrightarrow{\partial_{n} } \operatorname{Im}\partial_{n} \to 0 $$ 
> 由于$\operatorname{Im}\partial _{n}$是自由阿贝尔群, 我们有
> $$ C_{n}\simeq \operatorname{ker}\partial _{n} \oplus \operatorname{Im}\partial _{n}$$ 
> 定义$K_{n}= \operatorname{ker}\partial _{n}$, $L_{n}= \operatorname{Im}\partial _{n}\subseteq C_{n}$, 
> 则$\partial _{n}\circ \partial _{n+ 1}\left(L_{n+ 1}\right)= 0\implies \partial _{n+ 1}\left(L_{n+ 1}\right)\subseteq \operatorname{ker}\partial _{n}= K_{n}$
> . 故可以定义链 $C^{\left(n\right)}$
> $$\cdots \to  0\to L_{n+ 1}\xrightarrow{\partial _{n+ 1}}  K_{n}\to 0\to \cdots  $$ 
> 其中$n+ 1$次部分为$L_{n+ 1}$, $n$次部分为$K_{n}$, 其余为零.

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
