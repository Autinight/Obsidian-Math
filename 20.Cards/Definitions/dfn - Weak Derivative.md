---
type: definition
aliases: [Weak Derivative]
technique: []
---

## Definition

> [!definition] Definition: Weak Derivative
> Let $U\subseteq \mathbb{R} ^{n}$ be an open set, and let $f\in L_{loc}^{1}\left(U\right)$. $\alpha$ is a multiindex, we say $v\in L^{1}_{loc}\left(U\right)$ is the **$\alpha ^{th}$-weak derivative of $f$**, provided that for each $\varphi \in C_{c}^{\infty}\left(U\right)$, there is
>  $$ \int _{U}f D^{\alpha }\varphi = \left(-1\right)^{\left| \alpha  \right| }\int _{U} v \varphi  $$ 
> In this case, we denote $v$ by $D^{\alpha }f$.

> [!note] Note: 
>  - The definition is motivated by the integration by parts.
>  - 弱导数--以分部积分为准则的无罪推定 : 测试函数无法断定我不能求导, 那我就是可导的

## Uniqueness

> [!lemma] Lemma: 
> If $u,v$ are both the $\alpha ^{th}$-weak derivative of $f$, then
>  $$ u= v,\quad a.e. $$


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

