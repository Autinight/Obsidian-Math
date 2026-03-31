---
type: theorem
aliases:
  - Characterization of harmonic functions in the sense of distributions
technique: []
tags:
---

> [!theorem] Theorem: 
> Suppose $u\in C\left(\Omega \right)$ . Then $u$ is harmonic if and only if 
>  $$ \int u\Delta \varphi = 0\quad \text{for any }\varphi \in C_{0}^{2}\left(\Omega \right) $$ 


> [!note] Note: 
> 如果$u$是harmonic的, 通过分部积分就能得到该性质.
>
> 所以, 问题的关键在于如何选取一系列合适的$\varphi$, 使得我们能导出mean value property.
>
> 如果要说明$B_{r}\left(x\right)$上具有中值性质, 一个合适的$\varphi$应该是径向的, 在$B_{r}\left(x\right)$内部非零, 边界消失. 由于对$\int _{B_{r}}$关于$r$求导能给出带$\int _{\partial B_{r}}$的项, 我们或许需要$\Delta$与$\partial _{r}$具有某种联系. 
>
> 考虑与$\rho$相关的一系列测试函数, $\varphi = \rho ^{m}$.
>  $$ \rho \left(y,r\right)= \begin{cases} \left| y \right|^{2}-r^{2}  ,&\left| y \right|\le r\\0,&\left| y \right|> r   \end{cases}  $$ 
> 可以预见地, $\Delta _{y}$和$\frac{\partial ^{2}}{\partial r^{2}}$之间有着相当密切的联系. 对某一个分量$y_{i}$求两次导与对$r$求两次导仅仅有符号的区别, 不过$\Delta _{y}$是$n$个方向的加在一起, 因此$\varphi = \rho ^{n}$是一个相当有竞争力的候选.
>
> 事实上, 如果令
>  $$ \varphi _{k}\left(y,r\right)= \rho ^{n-k}\left(2\left(n-k+ 1\right)\left| y \right|^{2}+ n\rho  \right) $$
> 则$\Delta _{y}\varphi$是$\varphi _{2}$的倍数, $\frac{\partial \varphi _{k}}{\partial r}$是$\varphi _{k+ 1}$的倍数. 每次求导都无非是对$\rho ^{n-k}$降一阶, 并有规律的调整$\left| y \right|^{2}$和$\rho$的配比. 这实际上就是我们把$\varphi$对着$r$求导求到底的过程每步修饰一下反着写出来, $\Delta _{y}$的参与使得我们在$\varphi _2$这一步的积分归零了.
> 
> 由于$\varphi _{k}$带有$\rho ^{n-k}$ , 每一次对$\int _{B_{r}\left(0\right)}u\left(y\right)\varphi _{k}\left(y,r\right)\,d y$关于$r$求导, 都会导致边界的消失, 从而完美地递归下去. 直到$k= n$, 边界项不再消失, 当对最后的积分再次求导时, $\int _{\partial B_{r}}u$和$\int _{B_{r}}u$的关系最终浮现. 
>  $$ r\int _{\partial B_{r}\left(x\right)}u\left(y\right)\,d S_{y}= n\int _{B_{r}\left(x\right)}u\left(y\right)\,d y $$ 

> [!note] Note: 
> 注意到, 只要测试函数求导后在边界处仍然消失, 那么$\partial _{r}$就永远能穿过积分号.

> [!note] Note: 
> 值得注意的是, 上面的$\varphi = \rho ^{n}$并非唯一选择, 这个选择实际上是迎合了空间的维数产生对称性, 即便有$n$次的求导, 却没有增加任何的工作量, 反而让每一步的计算近乎平凡.
>
> 另一种优越的思路是我们舍弃拥抱对称性, 而是直接地通过减少阶数降低工作量, 取$\varphi = \rho ^{2}$, 这是只要关于$r$求一次导, 所涉及的两项积分的关系就能复现, 我们将初始的$\Delta _{y}$的条件带入$\partial _{r}\varphi$相关的积分, 这时候就是一个低阶的ODE. 但是这里可能涉及到一些边界上的光滑性问题, 但是我想可以通过一些工具和逼近论证解决.

> [!proof] Proof: 
> “PROOF” ([Han和Lin, 2000, p. 6](zotero://select/library/items/WMGIV6YG)) ([pdf](zotero://open-pdf/library/items/2DCN8JJA?page=17))

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

