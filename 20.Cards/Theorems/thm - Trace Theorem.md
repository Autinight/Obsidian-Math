---
type: theorem
aliases: 
- Trace Theorem
technique: []
---

> [!definition] Definition: Trace Theorem
> Suppose $U$ is bounded and $\partial U$ is $C^{1}$. Then there exists a bounded linear operator $T$
>  $$ \begin{aligned} T: W^{1,p}\left(U\right)&\to L^{p}\left(\partial U\right) \end{aligned} $$
> such that 
>
> 1. $Tu= u|_{\partial U}$ for each $u\in W^{1,p}\left(U\right)\cap C\left(\overline{U}\right)$.
> 2. $\left\| Tu \right\|_{L^{p}\left(\partial U\right)}\le C\left\| u \right\|_{W^{1,p}\left(U\right)}$, $\forall u\in W^{1,p}\left(U\right)$, for some constant $C$ depending only on $U$ and $p$.

> [!proofsketch] Sketch of Proof: 
> 证明是标准的流程, 遵循 **先考虑光滑函数**$\to$**平坦边界的坐标卡上进行局部控制**$\to$ **使用$C^{1}$-norm有界的坐标映射拉回** $\to$ **利用紧性将局部控制整合出整体控制** $\to$ **利用光滑函数的稠密性和构造的线性来扩张算子**. 一切如同[[thm - Extension Theorem in W^{1,p}]]中展示的那样. 唯一有区别的是局部构造的对象不同, 因此我们在下面的proof中只展示如何在半球坐标卡上局部控制.
>
> - **局部控制的想法**: 对于$u\in C^{1}\left(\overline{U}\right)$, 用一个在弧形边界上消失的cut-off function $\xi$, 提取半球直边界中的一部分(比如边界$B\left(x,\frac{r }{2 }\right)$中的部分), 使得其被控制在$\xi u$在半球的整个边界上的行为, 利用Gauss公式转化为$u$在半球内部的行为(被$\left\| u \right\|_{W^{1,p}\left(U\right)}$控制).

> [!proof] Proof of Local Domination in Chart: 
> Suppose $x^{0}\in \partial U$, $B= B\left(x^{0},r\right)$ is the ball in the coordinate space, and $\widehat{B}= B\left(x^{0},\frac{r }{2 }\right)$.  Let $\Gamma$ be the boundary of the paritial in $\widehat{B}$. Take a [[lem - Cut-off Function|cut-off function]] $\xi \in C^{\infty}_{c}\left(B\right)$ with $0\le \xi \le 1$ and  $\xi \equiv 1$ on $\widehat{B}$. Then from the Gauss formula
>  $$ \begin{aligned} \int _{\Gamma }\left| u \right|^{p} \,\mathrm{d} S&\le \int _{\left\{ x_{n}= 0 \right\}}\xi \left| u \right|^{p} \,\mathrm{d} S= -\int _{\left\{ x_{n}= 0 \right\}}\xi \left| u \right|^{p}\nu _{x_{n}} \,\mathrm{d} S\\&= -\int _{B^{+ }} \left(\xi \left| u \right|^{p} \right)_{x_{n}}\,\mathrm{d} x\\&= -\int _{B^{+ }}\left| u \right|^{p}\xi _{x_{n}}+ p\left| u \right|^{p-1}\left(\operatorname{sgn}u\right)\xi u_{x_{n}}\,\mathrm{d} x\\&\le C \int _{B^{+ }}\left| u \right|^{p}+ \left| Du \right|^{p}\,\mathrm{d} x\\&\le C\left\| u \right\|_{W^{1,p}\left(U\right)}       \end{aligned} $$ 
> where the last second inequality we use the [[lem - Young's Inequality]].

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

