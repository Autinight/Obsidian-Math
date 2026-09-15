代靖涵 25120222201319

> [!exercise] Exercise: 
> 判断$f\left(z_1,z_2\right)= \frac{z_1 }{1+ \left| z_2 \right| ^{2} }$是否在$\mathbb{C}^{2}$上全纯?说明理由.

> [!solution] Solution: 
> 将
$$
\left| z_2   \right|^{2}= z_2 \overline{z_2}  
$$
代入到$f\left(z_1,z_2\right)$的表达式中, 计算
$$
 \frac{\partial f}{\partial \overline{z_2}}= \frac{\partial }{\partial \overline{z_2}}  \frac{z_1 }{1+ z_2 \overline{z_2} }= - \frac{z_1z_2 }{ \left(1+ \left| z_2 \right|^{2} \right)^{2} }
$$
在$\left(1,1\right)$上, 上式右侧取值为$-\frac{1}{4}$. 但是$f$在$\mathbb{C}^{2}$上全纯要求$\frac{\partial }{\partial \overline{z_2}}= 0$, 因此$f$不在$\mathbb{C}^{2}$上全纯.

> [!exercise] Exercise: 
> 证明: 若$f$在$\mathbb{C}^{n}$上全纯且有界, 则$f$为常数.

> [!exercise] Exercise: 
> 写出$f\left(z_1,z_2\right)= \sin \left(z_1+ z_2\right)$在$\left(0,0\right)$的Taylor展开式.