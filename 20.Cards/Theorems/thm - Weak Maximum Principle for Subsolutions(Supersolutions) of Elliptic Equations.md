---
type: theorem
aliases: 
- Weak Maximum Principle for Subsolutions(Supersolutions) of Elliptic Equations
technique: []
tags: []
---

> [!theorem] Theorem: 
> Assume $u\in C^{2}\left(U\right)\cap C\left(\overline{U}\right)$ and 
>  $$ c\equiv 0,\quad \text{in }U $$
> 1. If 
>    $$ Lu\le 0\quad \text{ in }U ,$$
>       then 
>    $$ \max _{\overline{U}}u= \max _{\partial U}u $$   
> 2. If 
>    $$ Lu\ge 0\quad \text{in }U, $$
>    then  
>    $$ \min _{\overline{U}}u= \min _{\partial U}u $$  

> [!proofsketch] Sketch of Proof: 
> 说明内部的最大值点会产生矛盾.
> 1. 通过椭圆算子的二阶项通过坐标变换规整到对角形. 在最大值点, 算子的正定性和二阶导非正导出这一点$Lu\ge 0$.
> 2. 在$Lu$始终严格大于零时, 导出一个矛盾. 而对于一般的情况, 可以利用一致椭圆性将结果微扰到恒严格大于零的稳定情况.
> 3. 微扰项选择$e^{\lambda x_1}$, 是因为指数型函数往往将微分算子的阶数转换成多项式的次数, 方便处理.

> [!remark] Remark: 
> 对比[[thm - Maxium Principle for Subharmonic Function]]中采用的手段, 由于调和算子是各项同性的, 最值性质可以通过球平均来反映. 微扰的手段也选择了长度$\left| x \right|^{2}$, 而不是像这里提取出某一个主方向.

> [!proof] Proof: 
> **Assumption when inequality is strict**: 
> Let us first suppose we have the strict inequality
>  $$ Lu< 0,\quad \text{in }U $$
> and yet there exists a point $x_0\in U$ with
>  $$ u\left(x_0\right)= \max _{\overline{U}}x $$
> Now at this maximum point $x_0$, we have 
>  $$ Du\left(x_0\right)= 0 $$
>  $$ D^{2}u\left(x_0\right)\le 0 $$
> **Coordinate Transformation**: Since the matrix $A= \left(a^{ij}\left(x_0\right)\right)_{ij}$ is symmetric and positive definite, there exists and orthogonal matrix $O= \left(o_{ij}\right)$ so that 
>  $$ OAO^{\top}=  \operatorname{diag} \left( d_1,\cdots,d_n  \right):= B,\quad OO^{\top}= I   $$     
> set $y= x_0+ O\left(x-x_0\right)$.  Then $x-x_0= O^{\top}\left(y-x_0\right)$. $y_{k}= \sum _{j= 1}o^{k}_{j}x_{j}$ 
>  $$ \partial _{x_{i}}= \frac{\partial y_{k}}{\partial x_{i}}\partial _{y_{k}} =  o^{k}_{i}\partial _{y_{k}},\quad \partial _{y_{i}}= o^{i}_{k}\partial _{x_{k}}$$ 
> We have 
>  $$ u_{x_{i}}=\sum _{k= 1}^{n} o^{k}_{i} u_{y_{k}}$$
> For simplicity, 
>  $$ D_{x}u= O^{\top}D_{y}u $$
> 
> And
>  $$ u_{x_{i}x_{j}}= \sum _{k}o^{k}_{i} \left(\partial _{x_{j}}u_{y_{k}}\right)= \sum _{k}o_{i}^{k}\left(\sum _{l}o_{j}^{l}u_{y_{k}y_{l}}\right)= \sum _{k,l = 1}^{n}u_{y_{k}y_{l}}o^{k}_{i}o^{l}_{j} $$   
> For simplicity
>  $$ D^{2}_{x}u= O^{\top}\left(D^{2}_{y}u\right) O $$ 
> Hence at $x_0$, 
>  $$ \begin{aligned} \sum _{i,j= 1}^{n}a^{ij}u_{x_{i}x_{j}}&= \operatorname{tr}\left(A^{\top} D^{2}_{x}u\right)\\&= \operatorname{tr}\left(A^{\top}O^{\top}\left(D^{2}_{y}u\right)O\right)\\&= \operatorname{tr}\left(\left(O^{\top}AO\right)^{\top}D^{2}_{y}u\right)\\&= \operatorname{tr}\left(B \left(D^{2}_{y}u\right)\right)= \sum _{k= 1}^{n}d _{k} u_{y_{k}y_{k}}\le 0 \end{aligned}  $$
> since $d _{k}> 0$, $u_{y_{k}}u_{y_{k}}\le 0$, according to $D^{2}u\le 0$.
> 
> **Contradiction**: Thus at $x_0$ 
>  $$ Lu= -\sum _{i,j= 1}^{n}a^{ij}u_{x_{i}}u_{x_{j}}+ \sum _{i= 1}^{n}b^{i}u_{x_{i}}\ge 0 $$
> Then we have a contradiction. 
>
> **Perturbation to Generallize**: We write 
>  $$ u^{\varepsilon }\left(x\right)= u\left(x\right)+ \varepsilon e^{\lambda x_1} $$
> Then 
>  $$ \begin{aligned} Lu^{\varepsilon }&= Lu+ e^{\lambda x_1}\left(-\lambda ^{2}a^{11}+ \lambda b^{1}\right)\\&\le \varepsilon e^{\lambda x_1} \left(-\lambda ^{2}\theta + \left\| b \right\|_{L^{\infty}}\lambda \right)\\&< 0,\quad \text{ in U}\end{aligned} $$
> for sufficiently large $\lambda$.
> Then the above argues that 
>  $$ \max _{\overline{U}}u\le \max _{\overline{U}}u^{\varepsilon }= \max _{\partial U} u^{\varepsilon }\le \max _{\partial U}u+ \varepsilon e^{\lambda \max _{\partial U}\left| x_1 \right| }$$
> Let $\varepsilon \to 0$ to find $\max _{\overline{U}}u= \max _{\partial U}u$   



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
