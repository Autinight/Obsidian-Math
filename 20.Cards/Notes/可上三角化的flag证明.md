---
type: concept
aliases:
- 可上三角化的flag证明
technique: []
tags: []
---
> [!theorem] Theorem: 
> 设$V$是$n$维$\mathbb{F}$-线性空间, $T\in \operatorname{End}_{\mathbb{F}}\left(V\right)$, 且$T$的所有特征值均落在$\mathbb{F}$上, 则$T$是可上三角化的.

为此, 我们介绍一个等价刻画

> [!proposition] Proposition: 
> 每个使得$T$上三角化的基, 都对应一个 $T$-不变的flag:
> $$ 0\subseteq V_1\subseteq V_2\subseteq \cdots \subseteq V_{n}= V $$ 
> 满足
> $$ \operatorname{dim}V_{k}= k, \quad T\left(V_{k}\right)\subseteq V_{k} $$ 

> [!remark] Remark: 
> $$ p_{\lambda }\left(T\right)= p_{\lambda }\left(T|_{W}\right)p_{\lambda }\left(\overline{T}\right) $$ 
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

> [!proof] Proof: 
> 我们证明, 若已经给定$T$-不变子空间$V_{k}$使得$\operatorname{dim}V_{k}< \operatorname{dim}V$, 则存在$T$-不变子空间$V_{k+ 1}\subseteq V$, 使得
> $$ V_{k}\subseteq V_{k+ 1},\quad \operatorname{dim}V_{k+ 1}= \operatorname{dim}V_{k}+ 1 $$ 
> 如果证明了这个命题, 由于$\left\{ 0 \right\}$就是一个$T$-不变子空间, 我们得到$V_1\subseteq V$, $\operatorname{dim}V_1= 1$, 此外, 由于$V$是有限维的, 必然存在一个$V_{m}$, 使得$\operatorname{dim}V_{m}= \operatorname{dim}V$, 从而$V_{m}= V$. 
> 下面来证明这个结论:
> 
> 由于$V/V_{k}$也是$\mathbb{F}$-线性空间, 且特征值都落在$\mathbb{F}$上, 由于商空间上的诱导变换$\overline{T}$的特征多项式整除原特征多项式, 故$\overline{T}$的特征值也落在$\mathbb{F}$上. 从而存在特征向量$\bar{v}_{k+ 1}$, 使得
> $$ \overline{T}\left(\bar{v}_{k+ 1}\right)= \lambda \bar{v}_{k+ 1} $$
> 我们定义
> $$ V_{k+ 1}= \pi ^{-1} \left(\operatorname{span}\left\{ \bar{v}_{k+ 1} \right\}\right) $$
> 那么
> $$ V_1= \pi ^{-1} \left(\left[ 0 \right]\right)\subseteq V_2 $$   
> 并且将$\pi$限制在$V_2$上:
> $$ \pi |_{V_{k+ 1}}: V_{k+ 1}\to \operatorname{span}\left\{ \bar{v}_{k+ 1} \right\} $$ 
> 利用维数公式, 得到
> $$ \operatorname{dim}V_{k+ 1}= \operatorname{dim}V_{k}+ 1 $$ 