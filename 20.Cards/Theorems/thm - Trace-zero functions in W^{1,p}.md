---
type: theorem
aliases: 
- Trace-zero functions in W^{1,p}
technique: []
---

> [!theorem] Theorem: 
> Suppose that $U$ is bounded and $\partial U$ is $C^{1}$. $T$ is the [[thm - Trace-zero functions in W^{1,p}|trace operator]] on $W^{1,p}\left(U\right)$. Then if $u\in W^{1,p}\left(U\right)$, we have
>  $$ u\in W^{1,p}_{0}\left(U\right)\iff Tu= 0\text{ on }\partial U $$ 

> [!proofsketch] Sketch of Proof: 
> $\implies$ 是方便的, 主要难点在于通过$Tu= 0$构造$W^{1,p}$-收敛到$u$的紧支光滑函数列$\left\{ u_{m} \right\}$.
> 
> **预处理**: 使用坐标卡上构造后拉回-紧集上单位分解-光滑逼近的预处理泛式. 并且略微区别于在[[thm - Extension Theorem in W^{1,p}|Extension Theorem]]中直接处理$u$在局部上的限制, 这里接下来只操作加权后的$\psi _{k}u$也是可以的, 它是紧支的, 我们可以顺势零延拓. 因此通过一系列的预处理, 我们可以假设$U= \mathbb{R} _{+ }^{n}$, $\partial U=\partial \mathbb{R} ^{n}_{+ }=  \left\{ x_{n}= 0 \right\}\simeq \mathbb{R} ^{n-1}$.
>  $$ \begin{cases} u\in W^{1,p}\left(\mathbb{R} ^{n}\right),&u\text{ has compact support in } \overline{\mathbb{R}}^{n}_{+ }\\ Tu= 0,& \text{ on }\partial \mathbb{R} ^{n}_{+ }= \mathbb{R} ^{n-1} \end{cases}  $$ 
>
> **Key Idea**: 利用在$\left[ 0,1 \right]\equiv 1$且在$\ge 2$后消失的截断函数$\zeta$, 我们采取对$u$在边界处切除并快速恢复$w_{m}= u\left(x\right)\left(1-\zeta \left(mx_{n}\right)\right)$的逼近模式, 以获得离边界的一段安全距离来做mollify.
> 
> **Trade-off**: 随着恢复速度的加快($m\to \infty$), 可能带来隐形的梯度爆炸问题, 带来一阶导$Dw_{m}$可能无法$L^{p}$收敛到$Du$的风险.
> 
> **Countermeasure**: 可以意识到, 随着$m$的提升, $\omega _{m}$和$u$的差异区域$0< x_{n}\le 2$也在随着$m$同阶地缩小. 因此用$\int _{0}^{\frac{2 }{m }}\int_{\mathbb{R} ^{n-1}}\left| u \right|^{p}\,\mathrm{d}x^{\prime}dt$这段来控制是合理的想法. 又意识到$u\in W^{1,p}\left(\mathbb{R} ^{n}_{+ }\right)$蕴含的$u\in L^{p}\left(\mathbb{R} ^{n}_{+ }\right)$并不允许我们单独拿出来一段区域来估计, 而是需要利用$Du\in W^{1,p}\left(\mathbb{R} ^{n}_{+ }\right)$间接地给出. 因此这是我们后续构造不等式的几乎唯一的方法.

> [!proof] Proof: 
> $\implies :$ Suppose that $u_{m}\in C_{c}^{\infty}\left(U\right)$ such that $u_{m}\to u$ in $W^{1,p}\left(U\right)$. Since $T$ is a bounded linear operator, then from $Tu_{m}= u_{m}|_{\partial U}= 0$, we have $Tu= 0$ on $\partial U$.
> 
> $\impliedby$: As in the sketch , we may assume that $U= \mathbb{R} ^{n}_{+ }$,  $\partial U= \partial \mathbb{R} ^{n}_{+ }= \left\{ x_{n}= 0 \right\}= \mathbb{R} ^{n-1}$. $u\in W^{1,p}\left(\mathbb{R}_{+ } ^{n}\right)$ with compact support in $\overline{\mathbb{R}}^{n}_{+ }$  , $Tu= 0$ on $\partial \mathbb{R} ^{n}_{+ }= \mathbb{R} ^{n-1}$. There exists $u_{m}\in C^{\infty}_{c}\left(\overline{\mathbb{R}}_{+ }^{n}\right)$ with $Tu_{m}= u_{m}|_{\partial \mathbb{R} ^{n}_{+ }}\to 0$ in $L^{p}\left(\mathbb{R} ^{n-1}\right)$ such that 
>  $$ u_{m}\to u,\text{ in } W^{1,p}\left(\mathbb{R} ^{n}_{+ }\right) $$ 
>
> **Construct the Critical Inequality**: 
> Suppose $x^{\prime} \in \mathbb{R} ^{n-1}$, $x_{n}> 0$, we have
>  $$ \left| u_{m}\left(x^{\prime} ,x_{n}\right) \right|\le \left| u_{m}\left(x^{\prime} ,0\right) \right|+ \int _{0}^{x_{n}}\left| u_{m,x_{n}}\left(x^{\prime} ,t\right) \right|\,\mathrm{d} t    $$ 
> Then 
>  $$ \begin{aligned} \left| u_{m}\left(x^{\prime} ,x_{n}\right) \right|^{p}&\le C \left| u_{m}\left(x^{\prime} ,0\right) \right|^{p}+C  \left(\int _{0}^{x_{n}}\left| u_{m,x_{n}}\left(x^{\prime} ,t\right) \right|\,\mathrm{d} t \right)^{p} \end{aligned} \tag{1}  $$
> For some constatn $C$.
> From Hölder's Inequality, we have
>  $$ \begin{aligned} \left(\int _{0}^{x_{n}}\left| u_{m,x_{n}}\left(x^{\prime} ,t\right) \right|\,\mathrm{d} t \right)^{p}&\le \left(\left\| 1 \right\|_{L^{q}\left(\left(0,x_{n}\right)\right)}\left\| u_{m,x_{n}}\left(x^{\prime} ,t\right) \right\|_{L^{p}\left(\left(0,x_{n}\right)\right)}\right)^{p}\\&\le  x_{n}^{p-1}\int _{0} ^{x_{n}}\left| Du_{m} \right|\,\mathrm{d} t \end{aligned} $$
> Then by integrating $(1)$, we can get
>  $$ \begin{aligned} & \int _{\mathbb{R} ^{n-1}}\left| u_{m}\left(x^{\prime} ,x_{n}\right) \right|^{p}\,\mathrm{d} x^{\prime} \\&\le C\int _{\mathbb{R} ^{n-1}}\left| u_{m}\left(x^{\prime} ,0\right) \right|^{p}\,\mathrm{d} x^{\prime} + Cx_{n}^{p-1}\int _{0}^{x_{n}}\int _{\mathbb{R} ^{n-1}}\left| Du _{m}\right|\,\mathrm{d} x ^{\prime} dt\end{aligned}    $$
> Taking the limit $m\to \infty$ to get 
>  $$ \int _{\mathbb{R} ^{n-1}}\left| u\left(x^{\prime} ,x_{n}\right) \right|^{p}\,\mathrm{d} x^{\prime}  \le C x_{n} ^{p-1}\int _{0}^{x_{n}}\int _{\mathbb{R} ^{n-1}}\left| Du \right|\,\mathrm{d} x^{\prime} \,\mathrm{d} t \tag{2}$$
>
> **Construct the cut-off(recover) function**: Choose $\zeta \in C^{\infty}\left(\mathbb{R} _{+ }\right)$ with
>  $$ \zeta \equiv 1\text{ on } \left[ 0,1 \right],\quad \zeta \equiv 0\text{ on } \mathbb{R} _{+}\setminus \left[ 0,2 \right],\quad 0\le \zeta \le 1 $$
> Write 
>  $$ \begin{cases} \zeta _{m}\left(x\right)= \zeta \left(mx_{n}\right),& x \in \mathbb{R} ^{n}_{+ }\\ w_{m}\left(x\right)= u\left(x\right)\left(1-\zeta _{m}\left(x\right)\right) \end{cases}  $$
> Then 
>  $$ \begin{aligned} \int _{\mathbb{R} ^{n}_{+ }}\left| D\omega _{m}-Du \right|^{p}\,\mathrm{d} x&= \int _{\mathbb{R} ^{n}_{+ }}\left| D\left(u\left(x\right)\right)\zeta _{m}\left(x\right) \right|\,\mathrm{d} x\\&\le C\int _{\mathbb{R} ^{n}_{+ }}  \left| \zeta _{m} \right|^{p}\left| Du \right|^{p}\,\mathrm{d} x+C \int _{\mathbb{R} ^{n}_{+ }} \left| u \right|^{p}m^{p}\left| \zeta  \right|^{p}\,\mathrm{d} x\\&\le C\int _{\mathbb{R} ^{n}_{+ }}\left| \zeta _{m} \right|^{p}\left| Du \right|^{p}\,\mathrm{d} x+  Cm^{p}\int _{0}^{\frac{2}{m}}\int _{\mathbb{R} ^{n-1}}\left| u \right|^{p}\,\mathrm{d} x^{\prime} \,\mathrm{d} t\\&= :A+ B      \end{aligned}  $$
> $A\to 0$ as $m\to \infty$.   
> By applying the inequality (2), we have
>  $$ \begin{aligned} B&\le Cm^{p} \int _{0}^{\frac{2}{m}}\left(x_{n}^{p-1}\int _{0}^{x_{n}}\int _{\mathbb{R} ^{n-1}}\left| Du \right|^{p}\,\mathrm{d} x^{\prime} \,\mathrm{d} t \right)\,\mathrm{d} x_{n}\\&\le  Cm^{p}\int _{0}^{\frac{2}{m}}x_{n}^{p-1}\,\mathrm{d} x_{n}  \int _{0}^{\frac{2}{m}}\int _{\mathbb{R} ^{n-1}}\left| Du \right|^{p}\,\mathrm{d} x^{\prime} \,\mathrm{d} t\\&\le C\int _{0}^{\frac{2}{m}}\int _{\mathbb{R} ^{n-1}}\left| Du \right|^{p}\,\mathrm{d} x^{\prime} \,\mathrm{d} t\to 0,\text{ as } m\to \infty    \end{aligned}$$ 
> Furthermore, it is easy to note that $w_{m}\to u$ in $L^{p}\left(\mathbb{R} ^{n}_{+ }\right)$. We have $w_{m}\to u$ in $W^{1,p}\left(\mathbb{R} ^{n}_{+ }\right)$. Since $w_{m}\equiv 0$ on $\left\{ 0\le x_{n}\le  \frac{1 }{m } \right\}$, we can safely mollify $w_{m}$ to get some $u_{m}$ converging to $u$.


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

