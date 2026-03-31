---
type: theorem
aliases: 
- Energy Estimates
technique: []
---

> [!remark] Remark: 
> We will assume the following exposition that 
>  $$ a^{ij},b^{i},c\in L^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and 
>  $$ f\in L^{2}\left(U\right) $$
> where $U$ is an open bounded subset of $\mathbb{R} ^{n}$.

> [!theorem] Theorem: 
> If $L$ is a elliptic operator and $B$ is the corresponding bilinear form. Then there exists constant $\alpha ,\beta > 0$ and $\gamma > 0$ such that 
>  $$ \left| B\left[ u,v \right] \right|\le \alpha \left\| u \right\|_{H_{0}^{1}\left(U\right)}\left\| v \right\|_{H_{0}^{1}\left(U\right)}  $$
> and 
>  $$ \tag{1}\beta \left\| u \right\|_{H_{0}^{1}\left(U\right)}^{2}\le B\left[ u,u \right]+ \gamma \left\| u \right\|^{2}_{L^{2}\left(U\right)} $$
> for all $u,v\in H_{0}^{1}\left(U\right)$.  

> [!note] Note: 
> 可以想象成$u$在$H^1$这个系统中的能量由它本身的质量$\left\| u \right\|_{L^{2}}$和它的势能$\left\| Du \right\|_{L^{2}}$构成. 椭圆性保证了$B\left[ u,u \right]$的二次项可以控制$u$在系统中不会那么''尖锐''(势能$\left\| Du \right\|$被控制).  加上$u$本身的质量$\left\| u \right\|_{L^{2}}$, 并剔除控制势能时产生的一些干扰和参与, 就得到了所需要的控制.

> [!note] Note: 
> - 有界性来源于我们对于系数的假设.
> - 得到不等式(1), 我们实际上做了以下操作:
>   - $B\left[ u,u \right]$的二次项涵盖了算子的椭圆性的信息, 我们用这部分信息来控制$Du$的范数.
>   - 为了剔除$B\left[ u,u \right]$的一次项(相当于$\left| u \right|\left| Du \right|$)的影响, 我们将积分用[[lem - Young's Inequality]]拆成一小部分的$\left\| Du \right\|^{2}_{L^{2}}$(这部分被囊括在$\left\| u \right\|^{2}_{H^{1}}$上了, 我们不让他影响二次项对$Du$的控制就行)和一些$\left\| u \right\|^{2}_{L^{2}}$(这是我们预留的可以随便用的信息)
>   - $B\left[ u,u \right]$剩下的零次项的信息$\left\| u \right\|_{L^{2}}$被我们留下来外挂在不等式上了.


> [!proof] Proof: 
>  $$ \begin{aligned} B\left[ u,v \right]&= \int _{U}\sum _{i,j= 1}^{n}a^{ij}u_{x_{i}}v_{x_{j}}+ \sum _{i= 1}^{n}b^{i}u_{x_{i}}v+ cuv\,d x\\&\le \sum _{i,j= 1}^{n}\left\| a^{ij} \right\|_{L^{\infty}}\int _{U}\left| Du \right|\left| Dv \right|\,d x+  \sum _{i= 1}^{n}\left\| b^{i} \right\|_{L^{\infty}}\int _{U}\left| Du \right|v\,d x\\&+  \left\| c \right\|_{L^{\infty}}\int _{U}uv \,d x\\&\le \sum _{i,j= 1}^{n}\left\| a^{ij} \right\|_{L^{\infty}}\left\| Du \right\|_{L^{2}}\left\| Dv \right\|_{L^{2}}+ \sum _{i= 1}^{n}\left\| b^{i} \right\|_{L^{\infty}}\left\| Du \right\|_{L^{2}}\left\| v \right\|_{L^{2}}\\&+ \left\| c \right\|_{L^{\infty}}\left\| u \right\|_{L^{2}}\left\| v \right\|_{L^{2}}\\&\le \left(\sum _{i,j= 1}^{n}\left\| a^{ij} \right\|_{L^{\infty}}+ \sum _{i= 1}^{n}\left\| b^{i} \right\|_{L^{\infty}}+ \left\| c \right\|_{L^{\infty}}\right)\left\| u \right\|_{H_{0}^{1}}\left\| v \right\|_{H_{0}^{1}}    \end{aligned} $$ 
> The elliptic condition gives that 
>  $$ \begin{aligned} B\left[ u,u \right]&= \int _{U}\sum _{,j= 1}^{n}a^{ij}u_{x_{i}}u_{x_{j}}+ \sum _{i= 1}^{n}b^{i}u_{x_{j}}u+ cu^{2}\,d x\\&\ge \int _{U}\theta \left| Du \right|^{2}\,d x + \sum _{i= 1}^{n}\int _{U}b^{i}u_{x_{j}}u+ c\left\| u \right\|_{L^{2}}^{2} \\&\ge \theta \left(\left\| u \right\|_{H_{0}^{1}\left(U\right)}^{2}-\left\| u \right\|_{L^{2}}^{2}\right)-\sum _{i= 1}^{n}\left\| b^{i} \right\|_{L^{\infty}}\int _{U}\left| Du \right|\left| u \right|\,d x+ c\left\| u \right\|_{L^{2}}^{2}  \end{aligned} $$ 
>
> Now from [[lem - Young's Inequality|Young's Inequality]] with $\varepsilon$, we observe that 
>  $$ \int _{U}\left| Du \right|\left| u \right|\,d x\le  \varepsilon \left\| Du \right\|^{2}_{L^{2}} + \frac{1 }{4\varepsilon  }\left\| u \right\|^{2}_{L^{2}}  $$
> We choose $\varepsilon$ so small that  $\varepsilon \sum _{i= 1}^{n}\left\| b^{i} \right\|_{L^{\infty}}\le \frac{\theta}{2}$. 
>
> Then we have 
>  $$ \begin{aligned} B\left[ u,u \right]&\ge \frac{\theta  }{2 }\left\| u \right\|^{2}_{H^{1}_{0}\left(U\right)}- \gamma \left\| u \right\|_{L^{2}}^{2} \end{aligned} $$
> for some $\gamma$. We completes the proof by taking $\beta = \frac{\theta  }{2 }$. 

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

