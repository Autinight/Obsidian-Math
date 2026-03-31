---
type: theorem
aliases:
  - Hölder Regularity from Oscillation Decay
technique: []
tags:
  - growth_of_local_integrals
  - Hölder_continuity
  - regularity
---

> [!theorem] Theorem: 
> Suppose $u\in L^{2}\left(\Omega \right)$ satisfies
>  $$ \int _{B_{r}\left(x\right)}\left| u-u_{x,r} \right|^{2}\le M^{2}r^{n+ 2\alpha }\text{ for any }B_{r}\left(x\right)\subseteq \Omega   $$ 
> for some $\alpha \in \left(0,1\right)$. Then $u\in C^{0,\alpha}$ and for any $\Omega ^{\prime} \subset \subset \Omega$ there holds
>  $$ \sup _{\Omega ^{\prime} }\left| u \right|+ \sup _{x,y\in \Omega ^{\prime} , x\neq y}\frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\alpha }  }\le c\left\{ M+ \left\| u \right\|_{L^{2}\left(\Omega \right)} \right\}  $$ 
> where $c= c\left(n,\alpha ,\Omega ,\Omega ^{\prime} \right)> 0$.

> [!note] Note: 
> 如果$u$的震荡$\left| u-u_{x,r} \right|$在$L^{2}$-average的意义下是$Mr^{\alpha }$阶衰减的, 那么$u$的$\alpha$-Hölder norm被$M$和$\left\| u \right\|_{L^{2}}$控制. 


> [!proofsketch] Sketch of Proof: 
> **思想层**: 
>   - 一个点处的值, 可以用一列趋于它的东西和收敛速度控制. 所以这里研究球平均$u_{x,R}$有多快地收敛到$u\left(x\right)$. 再让$\left\| u \right\|_{L^{2}\left(\Omega \right)}$在固定区域上化身为球平均.
>   - 两点之间的误差, 可以通过变化三角不等式的中介点, 从而将误差均摊为小区域上的平均误差. 就像7.所做的那样
> 
> **实现层**: 
> 1. 把固定中心点$x_0$下, 不同尺度$r_1,r_2$平均的差用两项震荡估计   
>    $$ \left| u_{x_0,r_1}-u_{x_0,r_2} \right|^{2}\le 2\left(\left| u\left(x\right)-u_{x_0,r_1} \right|^{2}+ \left| u\left(x\right)-u_{x_0,r_2} \right|^{2}  \right)  $$
> 2. 把上述估计在较小的球上积分, 得到一个关于用两个尺度的平均震荡的不那么对称的估计
>    $$ \left| u_{x_0,r_1}-u_{x_0,r_2} \right|^{2}\le \frac{2 }{\omega _{n}r_1^{n} }\left\{ \int _{Br_1\left(x_0\right)}\left| u-u_{x_0,r_1} \right|^{2}+ \int _{B_{r_2}\left(x_0\right)}\left| u-u_{x_0,r_2} \right|^{2}   \right\}  $$
>    把题设的局部增长控制带进去, 得到
>    $$ \left| u_{x_0,r_1}-u_{x_0,r_2} \right|^{2}\le c\left(n\right)M^{2}r_1^{-n}\left\{ r_1^{n+ 2\alpha }+ r_2^{n+ 2\alpha } \right\}\tag{1} $$
> 3. 上面这个估计的形式具有某种单边的依赖性, 我们考虑对固定比例系数$R$, 做二进步长的尺度缩小, 此时平均的变化控制为
>    $$ \left| u_{x_0,2^{-\left(i+ 1\right)}R}-u_{x_0, 2^{-i}R} \right|\le c\left(n\right)2^{-\left(i+ 1\right)\alpha }MR^{\alpha }  $$
>    进而得到该尺度系数$R$给出的二进缩小尺度平均积分值列$\left\{ u_{x_0,2^{-i}R} \right\}$是Cauchy的.
> 4. 利用估计(1)的对称性, 导出尺度系数与极限的无关性
>    $$ \hat{u}\left(x_0\right)= \lim_{r\to 0^{+ }}u_{x_0,r} $$
>     更重要的是, 我们有收敛速度的估计
>    $$ \left| u_{x_0,r}-\hat{u}\left(x_0\right) \right|\le c\left(n,\alpha \right)Mr^{\alpha } \tag{2} $$   
> 
> 5. [[thm - Lebesgue Differentiation Theorem|LDT]]给出$\hat{u}$无非是$u$的一个version. 上述的一致控制(2)将$x\mapsto u_{x,r}$的连续性迁移给$u\left(x\right)$. 并且$\left| u \right|$就可以用收敛速度和平均积分这两个要素来估计
>    $$ \left| u\left(x\right) \right|\le CMR^{\alpha }+ \left| u_{x,R} \right|   $$
>    把$R$固定一个上界$R_0= \operatorname{dist}{\left( \Omega ^{\prime} ,\partial \Omega  \right)}$, 这样平均积分的体积系数就能当成是常数, 从而把平均积分看成是$\left\| u \right\|_{L^{2}\left(\Omega \right)}$, 得到
>    $$ \sup _{\Omega ^{\prime} }\left| u \right|\le c\left\{ MR_{0}^{\alpha }+ \left\| u \right\|_{L^{2}\left(\Omega \right)} \right\}  $$  
> 6. 为了估计Hölder模, 我们做如下拆分
>    $$ \text{x,y两点差}\le \text{x处球平均误差}+ \text{y处球平均误差}+ \text{x,y球平均之差} $$ 
>    $$ \left| u\left(x\right)-u\left(y\right) \right|\le \left| u\left(x\right)-u_{x,2R} \right|+ \left| u\left(y\right)-u_{y,2R} \right|+ \left| u_{x,2R}-u_{y,2R} \right|     $$
> 7. 当$x,y$距离比较近时研究点的正则性, 球$B_{2R}\left(x\right)\cap B_{2R}\left(y\right)$包含了一个小球$B_{R}\left(x\right)$, 通过在这个小球上把误差积分, 将误差平摊给二者的$L^{2}$平均误差
>    $$ \left| u_{x,2R}-u_{y,2R} \right|^{2}\le \frac{2 }{\left| B_{R}\left(x\right) \right|  }\left\{ \int _{B_{2R}\left(x\right)}\left| u-u_{x,2R} \right|^{2}  + \int _{B_{2R}\left(y\right)}\left| u-u_{y,2R} \right|^{2} \right\}  $$ 
>     从而带入题设拟定的球平均正则性.
> 
> 8. 当$x,y$距离比较远的时候, 就是研究区域整体的积分增长控制, 由于区域有界, 这部分比较平凡.

> [!note] Note: 
> - sketch的3.4两步中, 为了证明的可迁移性, 存在将证明模块化使用的痕迹. 在证明极限存在时, 避免直接通过对称性估计 $\left| u_{x_0,r_1}-u_{x_0,r_2} \right|^{2}\le c\left(n\right)M^{2}r_1^{-n}\left\{ r_1^{n+ 2\alpha }+ r_2^{n+ 2\alpha } \right\}\le CM\min \left(r_1,r_2\right)^{\alpha }$得到函数极限存在的Cauchy条件. 而是先采用更弱的条件也能做到的固定尺度的离散化估计$\left| u_{x_0,2^{-\left(i+ 1\right)R}} -u_{x_0,2^{-i}R}\right|$, 然后再用估计的对称性统一尺度这一更为标准的范式.
> - 除此之外, 离散化的估计天然地给出更细节的收敛速度. 因为连续估计实质上是[小尺度受大尺度控制];离散估计实质上是[层级受中间层级的衰减总和的控制], 离散化估计直接给出相邻离散层级之间的[衰减量], 是更为精细的估计. 
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
