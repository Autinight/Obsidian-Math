---
type: lemma
aliases: 
- Cacciopolli's Inequality
technique: []
tags: []
---

> [!remark] Remark: 
> In this card, we assume
> $a_{ij}\in C\left(B_1\right)$ satisfies 
>  $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\left(x\right)\xi _{i}\xi _{j}\le \Lambda \left| \xi  \right|^{2}\text{ for any }x\in B_1\text{ and }\xi \in \mathbb{R} ^{n}   $$
> for some positive constants $\lambda$ and $\Lambda$ 

> [!lemma] Lemma: 
> Suppose $u\in C^{1}\left(B_1\right)$ satisfies
>  $$ \int _{B_1}a_{ij}D_{i}uD_{j}\varphi = 0\text{ for any }\varphi \in C_{0}^{1}\left(B_1\right) $$
> Then for any function $\eta \in C_{0}^{1}\left(B_1\right)$, we have 
>  $$ \int _{B_1}\eta ^{2}\left| Du \right|^{2}\le C\int _{B_1}\left| D\eta  \right|^{2}u^{2}   $$  
> where $C$ is a positive constant depending only of $\lambda$ and $\Lambda$.
    
> [!note] Note: 
> 对于$[\eta ,u]$的多项式, 微分算子不改变它们的次数和阶数的和. $a_{ij}D_{i}uD_{j}\varphi$积分等于零, 相当于我们可以操作$\varphi$, 实现求导一次$\eta$去还原一阶$Du$的效果
> 
> 这里的条件, 允许我们操作$\varphi=\eta^{2} u$, 将$\eta$的次数转换为$u$的阶数. $D_{i}uD_{j}\varphi$的总次数为$4$, $D_{j}\varphi$占三个. 通过这个辅助, 利用题设可以将$\eta ^{2}\left| Du \right|^{2}$中用一个$\eta$将$\left| Du \right|$还原成$u$. 也就是
>  $$ \lambda \int _{B_1}\eta ^{2}\left| Du \right|^{2}\le \int _{B_1}a_{ij}\eta ^{2}D_{i}uD_{j}u\le 2\int _{B_1} a_{ij}\eta \left| u \right|\left| Du \right|\left| D\eta  \right|    $$ 
> 用Cauchy不等式和带$\varepsilon$的Young不等式, 先拆分再吸收即可.

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
