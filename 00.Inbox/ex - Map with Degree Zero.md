---
type: exercise
aliases:
  - Map with Degree Zero
technique: []
book: AT Hatcher
chapter: 2.2
number: "3"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.3.
> Let $f : S^n \to S^n$ be a map of degree zero. Show that there exist points $x, y \in S^n$ with $f(x) = x$ and $f(y) = -y$. Use this to show that if $F$ is a continuous vector field defined on the unit ball $D^n$ in $\mathbb{R}^n$ such that $F(x) \neq 0$ for all $x$, then there exists a point on $\partial D^n$ where $F$ points radially outward and another point on $\partial D^n$ where $F$ points radially inward.

> [!proof] Proof: 
> 1. If $f$ has no fiex point , then $\operatorname{deg}f= \left(-1\right)^{n+ 1}$, contradiction. If $-f$ has no fixed point then $\operatorname{deg}f= - \left(-1\right)^{n+ 1}$, contradiction. Thus there exists $x,y$ with $f\left(x\right)= x$, $f\left(y\right)= -y$.
> 2. If $F$ is no where vanish vector field on $D^{n}$ then , $F$向外,
>    如何构造一个
>    我们知道毛球定理, 偶数维球面上不存在处处非退化的连续向量场. $f\left(x\right)= x$就是径向的向量场, 所以我们得把$f$延拓到$D^{n}$上, 但是这如何做到呢?但是我们不是延拓, 我们是构造一个$F$, 也就是说, 对于$x\in D^{n}$, 先通过某种方式放到$S^{n-1}$上, 再射回到$D^{n}$上, 对于$y\in D^{n}$, 则$x= \frac{y }{\left\| y \right\| }\in S^{n-1}$, $f\left(x\right)\in S^{n-1}$, 这样再$\left\| y \right\|= 0$的时候会出问题; 或者我们干脆把$D^{n}$切层, 再让$f$应用到每个球面层上.
>    
>    定义
>    $$ F: D^{n}\to D^{n}\\x\mapsto \left\| x \right\|f\left(\frac{x }{\left\| x \right\| }\right),\quad 0\mapsto 0 $$ 
>    
>    当$x\to 0$时, $F\left(x\right)\to 0$, 因此$F$连续. 并且对于1.中的$x,y\in S^{n}\subseteq D^{n}$, $F\left(x\right)= x$是径向向外的, $F\left(y\right)= -y$是径向向内的. 不对, 但是这里有一个零点$F\left(0\right)= 0$, 或者如此对称的构造是不行的?
>   哦不, 我把方向搞反了, 应该是用一个非零的$F: D^{n}\to \mathbb{R} ^{n}$, 然后诱导出一个degree为零的$f$. 如果$f= F\circ i$, 那么用函子作用一下$D^{n}$是可缩的, $f$自动就是零伦, $\operatorname{deg}= 0$. 哇, 原来如此$F\left(x\right)\neq 0$就是为了单位化, 这样定义$f= \frac{F\circ i }{\left\| F\circ i \right\| }$, 那么$f:S^{n}\to S^{n}$就定义好了, 而且是一个零伦,  或者说写得清晰一点, 把单位化的过程写成一个连续映射$I:\mathbb{R} ^{n}\supseteq F\left(D^{n}\right)\to S^{n}$, 那么$f= I\circ F\circ i$, 这时候作用函子就一眼看出来了, $f$是homotopic null , 自然$\operatorname{deg}f= 0$, 那么自动在$\partial D^{n}\simeq S^{n-1}$上, 就有$F\left(x\right)= x$和$F\left(y\right)= -y$这种点. ~

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
