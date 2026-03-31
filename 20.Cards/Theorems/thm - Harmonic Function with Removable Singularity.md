---
type: theorem
aliases:
  - Harmonic Function with Removable Singularity
technique:
  - Probing Singularities via Moving Boundaries
tags:
  - singularity
  - harmonic
---


> [!theorem] Theorem: 
> Suppose $u$ is harmonic in $B_{R}\setminus \left\{ 0 \right\}$ and satisfies
>  $$ u\left(x\right)= \begin{cases} o\left(\log \left| x \right| \right),&n = 2\\o\left(\left| x \right|^{2-n} \right),& n\ge 3 \end{cases}\quad \text{as }\left| x \right|\to 0   $$
> Then $u$ can be defined at $0$ so that i is $C^{2}$ and harmonic in $B_{R}$. 

> [!proofsketch] Sketch of Proof: 
> 我们证明, 可以控制的奇异性不会使得函数逃逸出以下问题
>  $$ \begin{cases} \Delta v= 0,&\text{in }B_{R}\\v= u,&\text{on }\partial B_{R} \end{cases}  $$ 
> 即证明$w= v-u$在$B_{R}\setminus \left\{ 0 \right\}$恒为零.
> 仅考虑$n\ge 3$的情况. 为此, 我们使用[[tec - Probing Singularities via Moving Boundaries]]中的思想, 将$w$控制在逐渐缩进原点(奇点)的边界$\partial B_{r}(r\to 0)$上, 从而去结合$u$在奇点附近的性质.
>
> 具体地, 将$w$在$\partial B_{r}$的信息拆解成
>  $$ \text{边界的几何信息}\times \text{类基本解项} $$ 
>  $$ \left| w\left(x\right) \right|\le M_{r}\cdot \frac{r^{n-2} }{\left| x \right|^{n-2}  }\quad \text{on }\partial B_{r}.  $$ 
> 这种拆分能在后续的极值原理中起到作用, 纯粹是出于$\left| x \right|^{2-n}$的调和性, 而这种选择, 则出于调和函数的某种唯一性, 它保证了奇异性就是如此地确定.
> 
> 其中 $M_{r}= \max _{\partial B_{r}}\left| w \right|$. 那么结合$w= 0$ on $\partial B_{R}$, 经过极值原理的比较, 
>  $$ M_{r}\cdot \frac{r^{n-2} }{\left| x \right|^{n-2}  } \pm w\left(x\right)\ge 0,\quad \text{on } B_{R}\setminus B_{r}$$ 
> 即
>  $$ \left| w \right|\le M_{r}\cdot \frac{r^{n-2} }{\left| x \right|^{n-2}  }\quad \text{on }B_{R}\setminus B_{r}  $$
> 此时用边界的信息$r^{n-2}$去填补$u$的$o\left(\left| x \right|^{2-n} \right)$奇异性, 就能把$w$控制住. 

> [!proof] Proof: 
> “THEOREM 1.28” ([Han和Lin, 2000, p. 14](zotero://select/library/items/WMGIV6YG)) ([pdf](zotero://open-pdf/library/items/2DCN8JJA?page=25))

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

