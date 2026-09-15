代靖涵 25120222201319

> [!exercise] Exercise: 
> 判断$f\left(z_1,z_2\right)= \frac{z_1 }{1+ \left| z_2 \right| ^{2} }$是否在$\mathbb{C}^{2}$上全纯?说明理由.

> [!solution] Solution: 
> 将
> $$
> \left| z_2   \right|^{2}= z_2 \overline{z_2}  
> $$
> 代入到$f\left(z_1,z_2\right)$的表达式中, 计算
> $$
>  \frac{\partial f}{\partial \overline{z_2}}= \frac{\partial }{\partial \overline{z_2}}  \frac{z_1 }{1+ z_2 \overline{z_2} }= - \frac{z_1z_2 }{ \left(1+ \left| z_2 \right|^{2} \right)^{2} }
> $$
> 在$\left(1,1\right)$上, 上式右侧取值为$-\frac{1}{4}$. 但是$f$在$\mathbb{C}^{2}$上全纯要求$\frac{\partial }{\partial \overline{z_2}}= 0$, 因此$f$不在$\mathbb{C}^{2}$上全纯.

> [!exercise] Exercise: 
> 证明: 若$f$在$\mathbb{C}^{n}$上全纯且有界, 则$f$为常数.

> [!proof] Proof: 
> 若$f$在$\mathbb{C}^{n}$上全纯且有界, 设$\left| f\left(z\right) \right|\le M$, 则在$\mathbb{C}^{n}$上成立Cauchy估值
> $$
> \left| \frac{\partial ^{k_1+ \cdots + k_{n}}f}{\partial z_1^{k_1}\partial z_2^{k_2}\partial z_{n}^{k_{n}}} \right|\le \frac{k_1!\cdots k_{n}! }{r_1^{k_1}\cdots r_{n}^{k_{n}} }M  
> $$
> 特别地, 对于任意的$R> 0$, 以及$1\le i\le n$, 成立
> $$
> \left| \frac{\partial f}{\partial z_{i}} \right|\le \frac{M }{R }  
> $$
> 令$R\to \infty$, 得到
> $$
> \frac{\partial f}{\partial z_{i}}\equiv 0,\quad 1\le i\le n 
> $$
> 由于连通集上, 导数恒为零的全纯函数是常函数, 故$f$是常值的.

> [!exercise] Exercise: 
> 写出$f\left(z_1,z_2\right)= \sin \left(z_1+ z_2\right)$在$\left(0,0\right)$的Taylor展开式.

> [!proof] Proof: 
> 
> $\sin$在$\mathbb{C}$上是全纯的, 并且有展开
> $$
> \sin w= \sum _{k= 0}^{\infty}\frac{\left(-1\right)^{k} }{\left(2k+ 1\right)! }w^{2k+ 1} 
> $$
> 对于任意的$w\in \mathbb{C}$成立. 带入$w= z_1+ z_2$, 得到
> $$
> \begin{aligned} \sin \left(z_1+ z_2\right)&= \sum _{k= 0}^{\infty} \frac{\left(-1\right)^{k} }{\left(2k+ 1\right)! }\left(z_1+ z_2\right)^{2k+ 1}\\&= \sum _{k= 0}^{\infty}\frac{\left(-1\right)^{k} }{\left(2k+ 1\right)! }\sum _{j= 0}^{2k+ 1}\binom{ 2k+ 1 }{j  }z_1^{j}z_2^{2k+ 1-j}  \\&= \sum _{m,n\ge 0, m+ n\text{为奇数}}\frac{\left(-1\right)^{\frac{m+ n-1 }{2 }} }{m!n! }z_1^{m}z_2^{n} \end{aligned}
> $$
