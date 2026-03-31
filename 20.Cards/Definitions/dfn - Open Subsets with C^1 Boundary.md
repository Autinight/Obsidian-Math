---
type: definition
aliases: [Open Subsets with C^1 Boundary]
technique: []
---
## Definition

> [!definition] Definition: 
> Let $U\subseteq \mathbb{R} ^{n}$ be an open subset. We say $\partial U$ is $C^{1}$, if $\left(U,\partial U\right)$ can be seen as an embedded submanifold with boundary of $\mathbb{R} ^{n}$.

## Useful Characterization

> [!lemma] Lemma: 
> Let $U\subseteq \mathbb{R} ^{n}$ be an open subset. $\partial U$ is $C^{1}$, if and only if for each $x\in \partial U$, there exists $r> 0$, and a $C^{1}$ function $\gamma :\mathbb{R} ^{n-1}\to \mathbb{R}$ such that the following holds after relabling when neccessary
>  $$ U\cap B\left(x,r\right)=B\left(x,r\right)\cap  \left\{ \left(y_1,\cdots ,y_{n}\right): y_{n}> \gamma \left(y_1,\cdots ,y_{n-1}\right) \right\}  $$ 

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

