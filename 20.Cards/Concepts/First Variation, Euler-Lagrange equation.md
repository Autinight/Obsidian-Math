---
type: concept
aliases: 
- First Variation, Euler-Largrange equation
technique: []
---


### Lagrangian

> [!theorem] Theorem: 
> Suppose $U\subseteq \mathbb{R} ^{n}$ is a bounded, open set with smooth boundary $\partial U$ and we are given a smooth function
>  $$ L:\mathbb{R} ^{n}\times \mathbb{R} \times \overline{U}\to \mathbb{R}  $$
> We call $L$ the Lagrangian.  

> [!definition] Definition: 
> We will write 
>  $$ L= L\left(p,z,x\right)= L\left(p_1,\cdots ,p_{n},z,x_1,\cdots ,x_{n}\right) $$
> for $p\in \mathbb{R} ^{n}$, $z\in \mathbb{R}$, and $x\in U$. Thus $``p"$ is the name of the variable for which we subsitute $Dw\left(x\right)$, and $``z  "$ is the variable for which we substitute $w\left(x\right)$. We alsot set
>  $$ \begin{cases} D_{p}L= \left(L_{p_1},\cdots ,L_{p_{n}}\right)\\D_{x}L= \left(L_{x_1},\cdots ,L_{x_{n}}\right) \end{cases}  $$ 

### Euler-Lagrange Equation

> [!theorem] Theorem: 
> We assume $I\left[ \cdot  \right]$ to have the explicit form
>  $$ I\left[ w \right]:= \int _{U}L\left(Dw\left(x\right),w\left(x\right),x\right)\,d x $$
> for some smooth function $w:\overline{U}\to \mathbb{R}$ satisfying the boundary condition
>  $$ w= g\quad \text{on }\partial U $$
> If a smooth function $u$ satisfies the boundary condition $u= g$ on $\partial U$, happens to be a minimizer of $I\left[ \cdot  \right]$ among all $w$. Then $u$ is automatically a solution of the following **Euler-Lagrange Equation** associated with the ernergy functional $I\left[ \cdot  \right]$
>  $$ -\sum _{i= 1}^{n}\left(L_{p_{i}}\left(Du,u,x\right)\right)_{x_{i}}+ L_{z}\left(Du,u,x\right)= 0 $$

> [!note] Note: 
> 将泛函转化为方程的想法就是, 对于积分的形式, 我们利用测试函数$v$, 将极小性翻译成某种临界点(导数为零), 并借助$v$传递给积分号内部的家伙.

> [!proof] Proof:
> Choose any $v\in C_{c}^{\infty}\left(U\right)$, then $u+ \tau v= u= g$ on $\partial U$ for $\tau \in \mathbb{R}$, we define 
>  $$ i\left(\tau \right):= I\left[ u+ \tau v \right]\quad \left(\tau \in \mathbb{R} \right) $$
> We observe that $i\left(\cdot \right)$ has a minumum at $\tau = 0$. Therefore  $i^{\prime} \left(0\right)= 0$. We explicity compute the derivative by writing out 
>  $$ i\left(\tau \right)= \int _{U}L\left(Du+ \tau Dv,u+ \tau v,x\right)\,d x $$   
> Thus
>  $$ \begin{aligned} i^{\prime} \left(\tau \right)&= \int _{U}\sum _{i= 1}^{n}L_{p_{i}}\left(Du+ \tau Dv,u+ \tau v,x\right)v_{x_{i}}+ L_{z}\left(Du+ \tau Du,u+ \tau v,x\right)v\,d x \end{aligned} $$
> Let $\tau = 0$, to deduce that 
>  $$ 0= i^{\prime} \left(0\right)= \int _{U}\sum _{i= 1}^{n}L_{p_{i}}\left(Du,u,x\right)v_{x_{i}}+ L_{z}\left(Du,u,x\right)v\,d x $$
> Since $v$ has compact support, we can integrate by parts and obtain 
>  $$ 0= \int _{U}\left[ -\sum _{i= 1}^{n}\left(L_{p_{i}}\left(Du,u,x\right) \right)_{x_{i}}+ L_{z}\left(Du,u,x\right)\right]v\,d x $$
> As this equality holds for all test functions $v$, we conclude $u$ solves the nonlinear PDE
>  $$ -\sum _{i= 1}^{n}\left(L_{p_{i}}\left(Du,u,x\right)\right)_{x_{i}}+ L_{z}\left(Du,u,x\right) $$    

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

