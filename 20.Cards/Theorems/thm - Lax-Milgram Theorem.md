---
type: theorem
aliases: 
- Lax-Milgram Theorem
technique: []
---

> [!theorem] Theorem: 
> Assume that 
>  $$ B:H\times H\to \mathbb{R}  $$
> is a bilinear mapping, for which there exists $\alpha ,\beta > 0$ such that 
>  $$ \tag{i} \left| B\left[ u,v \right] \right|\le \alpha \left\| u \right\|\left\| v \right\|\quad \left(u,v\in H\right)  $$
> and
>  $$ \tag{ii} \beta \left\| u \right\|^{2}\le B\left[ u,u \right]\quad \left(u\in H\right) $$
> Finally, let $f:H\to \mathbb{R}$ be a bounded linear functional on $H$.
>
> Then there exists a unique $u\in H$ such that 
>  $$ B\left[ u,v \right]= \left< f,v \right>\quad \left(v\in H\right) $$

> [!remark] Remark: 
> Note that if $B$ is symmetric, then $B$ is also a inner product in $H$, the conclusion follows immediately from Riesz Representation Theorem.
>
> Lax-Milgram Theorem is primarily significant in that it does not requere symmetry of $B\left[ \;,\; \right]$.

> [!proofsketch] Sketch of Proof: 
> - 每个$u\in H$都对应一个有界线性泛函$v\mapsto B\left[ u,v \right]$再由Rieze表示定理将$u$对应到唯一一个$Au$使得
>   $$ B\left[ u,v \right]= \left(Au,v\right) $$
>    从而给出$B$的一个算子表示$A:H\to H$
> - $B$的有界性(i)导出$A$的有界性, $B$的线性导出$A$的线性, 故$A$是有界线性算子.
> - $B$的强制性/椭圆性(ii)导出控制关系$\beta \left\| u \right\|\le \left\| Au \right\|$, 从而$A$是单射且像$R\left(A\right)$是闭集.
> - 如果$A$不满, $R\left(A\right)$是闭集要求正交元存在, 但是(ii)容不下这样一个元. 因此$A$是线性自同构.
> - 通过Riesze表示定理把$f$对应到一个$w$, 再通过$A$把$w$对应到一个$u$, 具体地, $\left< f,v \right>= \left< w,v \right>, w= Au$, 则
>    $$ \left< f,v \right>= \left< Au,v \right>= B\left[ u,v \right] $$
> - 最后再依靠一次(ii)导出$u$的唯一性.


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

