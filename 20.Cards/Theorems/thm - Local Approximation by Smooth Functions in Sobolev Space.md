---
type: theorem
aliases: 
- Local Approximation by Smooth Functions in Sobolev Space
technique: []
---

> [!theorem] Theorem: 
> Let $U\subseteq \mathbb{R} ^{n}$ be an open subsets. If $u\in W^{k,p}\left(U\right)$ for some $1\le p< \infty$, we define 
>  $$ u^{\varepsilon }:=  \eta _{\varepsilon }* u $$
> where $\eta _{\varepsilon }$ is the [[mollifier]]. We have
> 1. $u^{\varepsilon } \in C^{\infty}\left(U_{\varepsilon }\right)$.
> 2. $u^{\varepsilon }\to u$ in $W^{k,p}_{loc}\left(U\right)$ , as $\varepsilon \to 0^{+ }$.

> [!proofsketch] Sketch of Proof: 
> * **拆解问题**: 就是考察$D^{\alpha }u^{\varepsilon }\to D^{\alpha }u$ in $L^{p}_{loc}\left(U\right)$.
> * **核心目标**: 已知$f^{\varepsilon }\to f$ in $L_{loc}^{p}\left(U\right)$, 只需要说明 $D^{\alpha }u^{\varepsilon }= \left(D^{\alpha }u\right)^{\varepsilon }$.
> * **证明技法**: 考虑到卷积的性质, $D^{\alpha }$是关于$x$的, 从而是直接作用在$\eta_{\varepsilon } \left(x-y\right)$上的, 而与$u\left(y\right)$无关. 想法就是利用$\eta _{\varepsilon }$在卷积中的双变量性质, 将对$x$的$D^{\alpha }$转换为对$y$的, 从而递到$u$身上.

> [!proof] Proof: 
>  $$ \begin{aligned}D^{\alpha }u^{\varepsilon }&= \int D^{\alpha }_{x}\eta _{\varepsilon }\left(x-y\right)u\left(y\right)\\  &=\left(-1\right)^{\left| \alpha  \right| }\int D^{\alpha }_{y}\eta _{\varepsilon } \left(x-y\right)u\left(y\right)dy\\&= \left(-1\right)^{\left| \alpha  \right| }\left(-1\right)^{\left| \alpha  \right| }\int \eta _{\varepsilon }\left(x-y\right)D_{y}^{\alpha }u\left(y\right)dy\\&= \eta _{\varepsilon }* D^{\alpha }u \end{aligned} $$ 

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

