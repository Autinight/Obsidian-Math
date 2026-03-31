---
type: theorem
aliases:
  - Harnack Inequality for Harmonic Function
technique: []
---


> [!theorem] Theorem: 
> Suppose $u$ is harmonic in $\Omega$. Then for compact subset $K$ of $\Omega$, there exists a postive constant $C= \left(\Omega ,K\right)$ such that if $u\ge 0$ in $\Omega$, then 
>  $$ \frac{1 }{C }u\left(y\right)\le u\left(x\right)\le Cu\left(y\right)\quad \text{for any }x,y\in K $$

> [!note] Note: 
> Harnack inequality体现出, harmonic是一个强约束, 局部的[自由度]极小, 一个点的值就能控制整个小区域内的行为.

> [!proofsketch] Sketch of Proof: 
> 由于$K$是紧的, 我们只需要在某些局部上做就行.
> 利用中值性质, 通过大圆套小圆的方式互相夹出来, 考虑到对于$x,y\in B_{R}\left(x_0\right)$, 
>  $$ B_{R}\left(x\right)\subseteq B_{2R}\left(x_0\right)\subseteq B_{3R}\left(y\right)\subseteq B_{4R}\left(x_0\right)\subseteq \Omega  $$
> 那么
>  $$ \begin{aligned} u\left(x\right)&= \frac{n}{\omega _{n}R^{n} }\int _{B_{R}\left(x\right)}u\left(z\right)\,d z\\& \le \frac{n }{\omega _{n}R^{n} }\int _{B_{3R}\left(y\right)}u\left(z\right)\,d z\\&= 3^{n}u\left(y\right)\end{aligned} $$
> 由对称性$u\left(y\right)\le 3^{n}u\left(x\right)$.  

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

