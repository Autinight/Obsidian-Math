---
type: definition
aliases:
- Maurer-Cartan Form
technique: []
tags: []
---
> [!definition] Maurer-Cartan form
> Let $G$ be a Lie group with Lie algebra $\mathfrak g=T_eG$.
> The **left Maurer-Cartan form** is the $\mathfrak g$-valued $1$-form
> $$
> \theta\in \Omega^1(G;\mathfrak g)
> $$
> defined by
> $$
> \theta_g:T_gG\to \mathfrak g,
> \qquad
> \theta_g(v)=(dL_{g^{-1}})_g(v).
> $$

> [!remark] Remark: 
> 最自然的一个$\mathfrak{g}$-值1-形式.

对于矩阵李代数,  $\theta = g^{-1} dg$

什么是$dg$, 
$$ dg: T_{g}G\to \mathfrak{g},\quad ,\quad g\mapsto g  $$ 

For a matrix Lie group,

对于矩阵李群$G\subseteq \operatorname{GL} \left(n,\mathbb{R} \right)$.
每个$g\in G$就是一个矩阵.
$$ g: G\to M_{n}\left(\mathbb{R} \right) $$ 就是一个包含映射. 把每个$G$等同于一个矩阵, 那么$dg$是?
这个矩阵值函数的微分
$$ \left(dg\right)_{g}: T_{g}G\to M_{n}\left(\mathbb{R} \right) $$ 也是一个包含映射, $T_{g}G\subseteq M_{n}\left(\mathbb{R} \right)$. 

其中$T_{g}G$有自然的包含$T_{g}G\subseteq T_{g}M_{n}\left(\mathbb{R} \right)\simeq M_{n}\left(\mathbb{R} \right)$, 于是
$$ \left(dg\right)_{g} $$ 也无非就是一个包含映射. 我们有
$$ \left(dg\right)_{g}\left(v\right)= v $$
这里把$v$一股脑看成是$M_{n}\left(\mathbb{R} \right)$理解就行了.
那么
$$ \left(dL_{g^{-1} }\right)_{g}\left(v\right) $$ 所以我们来看$L_{h}$是什么
$$ L_{h}g = hg $$
于是
$$ \left(dL_{h}\right)_{g} $$ 
$$  $$ 

$$
\boxed{\theta=g^{-1}dg}
$$

so along a curve $g(t)$,

$$
\theta_{g(t)}(g'(t))=g(t)^{-1}g'(t)\in \mathfrak g.
$$

If $X\in\mathfrak g$ and $X^L$ is the corresponding left-invariant vector field, then

$$
\theta(X^L)=X.
$$

The Maurer-Cartan form satisfies the **Maurer-Cartan equation**

$$
\boxed{
d\theta+\frac12[\theta,\theta]=0
}
$$

**Intuition.** The Maurer-Cartan form is the canonical way to identify every tangent space $T_gG$ with the Lie algebra $\mathfrak g$ by translating tangent vectors back to the identity.


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
