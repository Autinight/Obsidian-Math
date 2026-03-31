---
type: concept
aliases: [Sobolev Spaces]
technique: []
---

## Definition

> [!definition] Definition: Sobolev Spaces
> For open subsets $U\subseteq \mathbb{R} ^{n}$, the **Sobolev Space** 
>  $$ W^{k,p}\left(U\right) $$ 
> consists of local integrable functions $f\in L_{loc}^{p}\left(U\right)$ whose $\alpha ^{th}$-derivative $D^{\alpha }f$ exists in weak sense and is $L^{p}$-integrable, for all multiindex $\alpha$ with $0\le \left| \alpha  \right|\le k$.

## Norm

> [!definition] Definition: 
> For $u\in W^{k,p}\left(U\right)$, we define its norm $\left\| u \right\|_{W^{k,p}\left(U\right)}$ by 
>  $$ \left\| u \right\|_{W^{k,p}\left(U\right)}= \begin{cases} \left(\sum _{\left| \alpha  \right|\le k }\int _{U}\left| D^{\alpha }u \right|^{p} \right)^{\frac{1}{p}},& 1\le p< \infty\\ \sum _{\left| \alpha  \right|\le k } \operatorname{ess}\sup _{U}\left| D^{\alpha }u \right|,&p= \infty  \end{cases}  $$

## Properties of Weak Derivatives

> [!proposition] Proposition: 
> Let $u,v\in W^{k,p}\left(U\right)$.
> 1. For $\alpha$ with $\left| \alpha  \right|\le p$, and $\beta$ with $\left| \beta  \right|\le k-\left| \alpha  \right|$, we have $D^{\alpha }\left(D^{\beta }u\right)= D^{\alpha + \beta }u$
> 2. For $\left| \alpha  \right|\le k$ and $\lambda ,\mu \in \mathbb{R}$, we have 
>    $$ D^{\alpha }\left(\lambda u+ \mu v\right)= \lambda D^{\alpha }u+ \mu D^{\alpha }v $$  
> 3. If $V$ is an open subset of $U$, then 
>    $$ u\in W^{k,p}\left(V\right) $$ 
> 4. If $\xi \in C_{c}^{\infty}\left(U\right)$, then $\xi u\in W^{k,p}\left(U\right)$, and 
>    $$ D^{\alpha }\left(\xi u\right)= \sum _{\beta \le \alpha }\binom{ \alpha   }{\beta   } D^{\beta }\xi  D^{\alpha -\beta }u  $$ 

## Zero-Boundary Sobolev Spaces

> [!definition] Definition: 
> For open subset $U\subseteq \mathbb{R} ^{n}$, we define 
>  $$ W_{0}^{k,p}\left(U\right) $$ 
> as the closure of $C^{\infty}_{c}\left(U\right)$ in $W^{k,p}\left(U\right)$. 

## As a Function Sapce

> [!theorem] Theorem: 
> For each $k= 1,2,\cdots$ and $1\le p\le \infty$, the Sobolev space $W^{k,p}\left(U\right)$ is a Banach space.

```dataviewjs
// 获取当前文件的 technique 字段
const techs = dv.current().technique;

// 只有当 techs 存在且不为空时才执行
if (techs && techs.length > 0) {
    
    // 1. 动态输出标题
    dv.header(3, "Related Techniques");
    
    // 2. 查找并输出链接
    // 逻辑: 寻找库中所有笔记, 条件是: 那个笔记的别名(aliases) 恰好包含在我的 techniques 列表中
    dv.list(
        dv.pages()
        .where(p => p.aliases && p.aliases.some(a => techs.includes(a)))
        .file.link
    )
}
```

