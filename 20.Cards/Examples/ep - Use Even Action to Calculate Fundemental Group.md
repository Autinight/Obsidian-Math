---
type: example
aliases: [Use Even Action to Calculate Fundemental Group]
---

## $\mathbb{S}^{1},T^{n}$

> [!example] Example: 
>  $$ \pi _1 \left(S^{1}\right)= \mathbb{Z}  $$
> 从而
>  $$ \pi _1 \left(T^{n}\right)= \prod _{i= 1}^{n}\pi _1 \left(S^{1}\right)= \mathbb{Z} ^{n} $$ 

> [!proof] Proof: 
> 考虑 $\mathbb{Z}$在$\mathbb{R}$上的作用
>  $$\varphi : \mathbb{Z} \times \mathbb{R} \to \mathbb{R}  $$
>  $$ \left(z,r\right)\mapsto r+ z $$
> 则对于任意的$z\in \mathbb{Z}\setminus \left\{ 1 \right\}$, $\varphi \left(z,\left(x-\frac{1}{4},x+ \frac{1}{4}\right)\right)\cap\left(x-\frac{1}{4},x+ \frac{1}{4}\right)= \varnothing$, 因此 $\varphi$是even的作用. 
> $\mathbb{R}$在$\mathbb{Z}$下的轨道空间是 $\mathbb{R}/\mathbb{Z}$, 令 $q: \mathbb{R} \to \mathbb{R} /\mathbb{Z}$是商映射, 则 $q$是一个正则复叠. 由于$\mathbb{R}$是连通的, $q$的复叠变换群同构于$\mathbb{Z}$, 并且我们有群同构
>  $$ \mathbb{Z} \simeq \pi _1 \left(\mathbb{R} \setminus \mathbb{Z} \right)/\pi _1 \left(\mathbb{R} \right)= \pi _1 \left(S^{1}\right) $$ 
>

> [!example] Example: 
>  $$ \pi _1 \left(\mathbb{RP}^{n}\right)\simeq \mathbb{Z} _{2} $$

> [!proof] Proof: 
> 考虑 $G= \left\{ I, -I\right\}\simeq \mathbb{Z} _{2}$在 $S^{n}$上的作用. 易见$G$在$S^{n}$上的作用是even的. 任取$x\in S^{n}$, $x$在 $G$下的轨道是 $\left\{ x,-x \right\}$, 因此轨道空间就是
>  $$ S^{n}/\left\{ x\sim -x \right\}= \mathbb{RP}^{n} $$
> 令 $q:S^{n}\to \mathbb{RP}^{n}$是轨道映射, 则 $q$是一个正则复叠, 由于 $S^{n}$是连通的, $q$的复叠变换群同构于 $\mathbb{Z} _{2}$, 并且
>  $$ \mathbb{Z} _{2}\simeq \pi _1 \left(\mathbb{RP}^{n}\right)/\pi _1 \left(S^{n}\right)= \pi _1 \left(\mathbb{RP}^{n}\right) $$ 

> [!example] Example: 
>  $$ \pi _1 \left(L\left(p,q\right)\right)\simeq \mathbb{Z} _{p} $$

> [!proof] Proof: 
> 令 $\zeta = e^{\frac{2\pi i }{p }}$, 考虑 $G= \left\{ 0,1,\cdots ,p-1 \right\}= \mathbb{Z} _{p}$, 则 $L\left(p,q\right)$被定义为 $S^{3}\subseteq \mathbb{C} ^{2}$在作用$G$
>  $$ p\cdot \left(z_1,z_2\right)= \left(\zeta z_1, \zeta ^{q}z_2\right) $$ 
> 下的轨道空间. 由于$G$是even的作用, 我们有 $q:S^{3}\to L\left(p,q\right)$是正则复叠, 并且$\mathbb{Z} _{p}$同构于$q$的复叠变换群, 从而
>  $$ \mathbb{Z} _{p}\simeq \pi _1 \left(L\left(p,q\right)\right)/\pi _1 \left(S^{3}\right)= \pi _1 \left(L\left(p,q\right)\right) $$  