---
type: theorem
aliases:
  - Gradient Estimates for Harmonic Functions
technique: []
tags:
  - gradient-estimate
---

### Estimates for $Du$

> [!lemma] lemma: 
> Suppose $u\in C\left(\overline{B}_{R}\right)$ is harmonic in $B_{R}= B_{R}\left(x_0\right)$. Then there holds
>  $$ \left| Du\left(x_0\right) \right|\le \frac{n }{R }\max _{\overline{B}_{R}}\left| u \right|   $$ 

> [!proofsketch] Sketch of Proof: 
> 导数$D_{x_{i}}u$也是调和的, 从而可以利用中值性质把点值变成区域积分值, 进而替换成边界上的函数积分值.

> [!proof] Proof: 
> By coordinate transformation , we may assume $Du\left(x_0\right)= \left(D_{x_1}u\left(x_0\right),0,\cdots ,0\right)$. For each $r$ with $0< r< R$, $u\in C\left(\overline{B}_{r}\right)$. Since $u$ is smooth, $D_{x_1}u$ is harmonic as well, then by its mean value property, 
>  $$ \begin{aligned} D_{x_1}u\left(x_0\right)&= \frac{n }{\omega _{n}r^{n} }\int _{B_{r}\left(x_0\right)}D_{x_1}u\left(y\right)\,d y\\&= \frac{n }{\omega _{n}r^{n} }\int _{\partial B_{r}\left(x_0\right)} u\left(y\right) \nu _1 \,d S_{y} \end{aligned} $$
> Then 
>  $$ \left| Du\left(x_0\right) \right|\le \frac{n }{\omega _{n}r^{n} } \max _{\partial B_{r}\left(x_0\right)}\left| u \right| \omega _{n}r^{n-1}\le \frac{n }{r }\max _{\overline{B}_{R}}\left| u \right|    $$
> Taking $r\to R$, we completes the proof.

> [!lemma] Lemma: 
> Suppose $u\in C\left(\overline{B}_{R}\right)$ is a nonnegative harmonic function in $B_{R}= B_{R}\left(x_0\right)$. Then there holds
>  $$ \left| Du\left(x_0\right) \right|\le \frac{n }{R }u\left(x_0\right)  $$ 

> [!proofsketch] Sketch of Proof: 
> $u$非负时, 对以下进一步使用中值性质即可
>  $$ D_{x_1}u\left(x_0\right)= \frac{n }{\omega _{n}R^{n} }\int _{\partial B_{R}}u\left(y\right)\nu _1 \,d S_{y}\le \frac{n }{R }u\left(x_0\right) $$ 

### Estimates for $D^{\alpha }u$

> [!proposition] Proposition: 
> Suppose $u\in C\left(\overline{B}_{R}\right)$ is harmonic in $B_{R}= B_{R}\left(x_0\right)$. Then there holds for any multi-index $\alpha$ with $\left| \alpha  \right|= m$.
>  $$ \left| D^{\alpha }u\left(x_0\right) \right|\le \frac{n^{m}e^{m-1}m! }{R^{m} }\max _{\overline{B}_{R}}\left| u \right|   $$

> [!proofsketch] Sketch of Proof: 
> 考虑单一方向的$m$阶导数, 简单记作$D^{m}$. 我们可以反复使用上面的估计进行降阶. 每次向外降阶使用的步长为$r_{i}$, 为了使得$m$次的放缩比例$\frac{n }{r_1 }\cdots \frac{n }{r_{m} }$乘在一起最小, 我们需要$r_1= \cdots = r_{m}:= r:= \frac{R }{m }$, 从而得到
>  $$ \tag{1}\left| D^{m}u\left(x_0\right) \right|\le \frac{n^{m}m^{m} }{R^{m} }\max _{\overline{B}_{R}}\left| u \right|   $$
> 
> 考虑到Stirling公式
>  $$ m!=  \sqrt{2\pi m} \left(\frac{m }{e }\right)^{m}e^{\frac{\theta _{m}  }{12m }},\quad 0< \theta _{m}< 1$$
>  $$ m^{m}= \frac{e^{m}m! }{\sqrt{2\pi m}e^{\frac{\theta _{m} }{12m }} } $$
> 如果将上述形式带入不等式(1), 并将$\sqrt{2\pi m}e^{\frac{\theta _{m} }{12m }}$替换成$e$, 这个家伙在$m\ge 2$时一眼就能看出来是大于等于$e$的, 从而(1)中的不等号仍然被保持. $m= 1$不能一眼看出来(实际上两步加一起放超了), 但是替换成$e$恰好是我们为了卡住上面引理的$m= 1$的边界情况设立的. 于是最终就得到
>  $$ \left| D^{m}u\left(x_0\right) \right|\le \frac{n^{m}e^{m-1}m! }{R^{m} }\max _{\overline{B}_{R}}\left| u \right|   $$
> 对于一般的多重指标$\alpha$, 由于$\alpha _1 !\cdots \alpha _{n}!\le \left(\left| \alpha  \right| \right)!$, 不等式也是成立的.   

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

