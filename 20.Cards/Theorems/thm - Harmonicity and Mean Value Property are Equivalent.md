---
type: theorem
aliases: 
- Harmonicity and Mean Value Property are Equivalent
technique: []
---


### From Harmonic to Mean Value Property

> [!theorem] Theorem: 
> Let $u\in C^{2}\left(\Omega \right)$ be harmonic in $\Omega$. Then $u$ satisfies the mean value property in $\Omega$.

> [!proofsketch] Sketch of Proof: 
> 根据散度定理, 由于内部没有膨胀和压缩$\int_{B_{\rho }\left(x\right)}\Delta u\left(y\right)\,d y= 0$, 导致边界上没有变化的趋势$\frac{\partial }{\partial \rho }\int _{\left| \omega  \right|= 1 }u\left(x+ \rho \omega \right)\,d S_{\omega }= 0$, 于是可以无损的缩回到原点$u\left(x\right)$.

> [!proof] Proof: 
> From the divergence theorem, 
>  $$ \begin{aligned} \int _{B_{\rho \left(x\right)}}\Delta u\left(y\right)\,d y&= \int _{\partial B_{\rho \left(x\right)}}\frac{\partial u}{\partial \nu }\left(y\right)\,d y\\&= \rho ^{n-1}\int _{\left| w \right|= 1 }\frac{\partial u}{\partial \nu }\left(x+ \rho w\right)\,d w=\rho ^{n-1} \int _{\left| w \right|= 1 } \nabla u\left(x+ \rho w\right)\cdot w\\&=\rho ^{n-1} \frac{\partial }{\partial \rho }\int _{\left| w \right|= 1 }u\left(x+ \rho w\right)\,d w = 0\end{aligned} $$ 
> This implies that 
>  $$ \frac{\partial }{\partial \rho }\int _{\left| w \right|= 1 }u\left(x+ \rho w\right)\,d w= 0 $$
> for each $0< \rho < r$, then 
>  $$ \int _{\left| w \right|= 1 }u\left(x+ \rho w\right)\,d w= \text{Constant} $$
> Take the limit $\rho \to 0$ to get 
>  $$ \int _{\left| w \right|= 1 }u\left(x+ \rho w\right)\,d w= u\left(x\right) $$   

### From Mean Value Property to Harmonicity

> [!theorem] Theorem: 
> If $u\in C\left(\Omega \right)$ has [[dfn - Mean Value Properties|mean value property]] in $\Omega$, then $u$ is smooth and harmonic in $\Omega$.

> [!proofsketch] Sketch of Proof: 
> 如果能给出$u$的光滑性, 那么通过
>  $$ \int _{B_{r}\left(x\right)}\Delta u\left(y\right)\,d y= r^{n-1}\frac{\partial }{\partial r}\int _{\left| w \right|= 1 } u\left(x+ rw\right)\,d w= r^{n-1}\frac{\partial }{\partial r}u\left(x\right)= 0$$
>  并结合$\Delta u\in C^{\infty}\left(\Omega \right)$,
>  $$ \Delta u\left(x\right)= \lim_{r\to 0}\int _{B_{r}\left(x\right)}\Delta u\left(y\right)\,d y= 0 $$
> 就能完成证明. 因此主要任务就是说明$u$的光滑性.
>
> 通过[[mollifier]]来完成证明. 由于光滑性是局部的, 我们只需要对每个$x\in \Omega$使其囊括在某一个$u_{\varepsilon}:= \left(u*\eta _{\varepsilon }\right)\left(x\right)$的定义域内即可. 由于mollifier $\eta _{\varepsilon }$是径向函数, 且$u$有球壳上的中值性质, $u$和$\eta _{\varepsilon }$在球壳上的权重配比就是它们在中心点的那个值. 经过计算, $u\left(x\right)= u_{\varepsilon }\left(x\right), \forall x\in \Omega _{\varepsilon }$

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

