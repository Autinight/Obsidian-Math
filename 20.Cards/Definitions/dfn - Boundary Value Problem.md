---
type: definition
aliases: 
- Boundary Value Problem
technique: []
---


> [!definition] Definition:
> We will frequently study the following boundary value problem 
>  $$ \tag{1}\begin{cases} Lu= f,&\text{in }U\\u= 0,& \text{on }\partial U \end{cases}  $$
> where $U$ is an open bounded subset of $\mathbb{R} ^{n}$ and $u:\overline{U}\to \mathbb{R}$ is the unkown $u= u\left(x\right)$. Here $f:U\to \mathbb{R}$ is given, and $L$ denotes a second-order partial differential operator having either of the form
>  $$ \tag{2}Lu= -\sum _{i,j= 1}^{n}\left(a^{ij}\left(x\right)u_{x_{i}}\right)_{x_{j}}+ \sum _{i= 1}^{n}b^{i}\left(x\right)u_{x_{i}}+ c\left(x\right)u $$
> or else
>  $$ \tag{3}Lu= -\sum _{i,j= 1}^{n}a^{ij}\left(x\right)u_{x_{i}}u_{x_{j}}+ \sum _{i= 1}^{n}b^{i}\left(x\right)u_{x_{i}}+ c\left(x\right)u $$
> for given coefficient functions $a^{ij}$, $b^{i}$, c ($i,j=  1,\cdots,n$)   

> [!remark] Remark: 
> We say the PDE $Lu= f$ is in **divergence form** if $L$ is given by (1) and is in **nonivergence** form provided $L$ is given by (2)

> [!remark] Remark: 
> 设$A= \left(a^{ij}\right)_{n\times n}$. 则$Lu$的二次部分就是$\operatorname{tr}\left(A \cdot D^{2}u\right)$. 由于$D^{2}u$是对称矩阵, 令$A= S+ K$, 其中$S$是对称矩阵, $K$是反对称矩阵, 则$\operatorname{tr}\left(A\cdot D^{2}u\right)= \operatorname{tr}\left(S\cdot D^{2}u\right)$. 
>
> **因此, 我们可以不妨设$a^{ij}= a^{ji}$**.

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

