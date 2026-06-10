

> [!proposition] Proposition: 
> $$ \frac{\partial }{\partial t}g_{ij}= -2 Hh _{ij} $$ 

> [!note] Note: 
> 这里我们利用$\partial _{t}$和$\partial _{i}$的可交换性, 再利用定义$\partial _{t}X= H \vec{n}$,  之后的计算大多都是类似的操作.

> [!proof] Proof: 
> 
> $$
>  \begin{aligned}
>  \frac{\partial g_{ij}}{\partial t}
>  &=
>  \frac{\partial}{\partial t}
>  \left(
>  \frac{\partial X}{\partial x^i},
>  \frac{\partial X}{\partial x^j}
>  \right) \\[4pt]
>  &=
>  \left(
>  \frac{\partial}{\partial x^i}(H\vec n),
>  \frac{\partial X}{\partial x^j}
>  \right)
>  +
>  \left(
>  \frac{\partial X}{\partial x^i},
>  \frac{\partial}{\partial x^j}(H\vec n)
>  \right) \\[4pt]
>  &=
>  H\left(
>  \frac{\partial \vec n}{\partial x^i},
>  \frac{\partial X}{\partial x^j}e
>  \right)
>  +
>  H\left(
>  \frac{\partial X}{\partial x^i},
>  \frac{\partial \vec n}{\partial x^j}
>  \right) \\[4pt]
>  &=
>  -2H\left(
>  \vec n,
>  \frac{\partial^2 X}{\partial x^i \partial x^j}
>  \right) \\[4pt]
>  &=
>  -2Hh_{ij}.
>  \end{aligned}
>  $$

> [!proposition] Proposition: 
> $$ \frac{\partial \vec{n} }{\partial t}= - \operatorname{grad}H $$ 

> [!remark] Remark: 
> $$ \operatorname{grad}H= \left(\partial _{i}H dx^{i}\right)^{\sharp }= g^{ij}\partial _{i}H \partial _{j}X$$ 

> [!proof] Proof: 
> 
> $\partial _{t}\vec{n}$是纯切向的, 因为
> $$ 2\left(\partial _{t}\vec{n} , \vec{n} \right)= \partial _{t}\left(\vec{n} ,\vec{n} \right)= 0 $$
> 于是可以分解为切向.
>  $$
>  \begin{aligned}
>  \frac{\partial \vec n}{\partial t}
>  &=
>  \left(
>  \frac{\partial \vec n}{\partial t},
>  \frac{\partial X}{\partial x^i}
>  \right)
>  \frac{\partial X}{\partial x^j} g^{ij} \\
>  &=
>  -\left(
>  \vec n,
>  \frac{\partial}{\partial t}
>  \frac{\partial X}{\partial x^i}
>  \right)
>  \frac{\partial X}{\partial x^j} g^{ij} \\
>  &=
>  -\left(
>  \vec n,
>  \frac{\partial}{\partial x^i}(H\vec n)
>  \right)
>  \frac{\partial X}{\partial x^j} g^{ij} \\
>  &=
>  -\frac{\partial H}{\partial x^i}
>  \frac{\partial X}{\partial x^j} g^{ij} \\
>  &= -\operatorname{grad}H
>  \end{aligned}
>  $$


> [!proposition] Proposition: 
> $$ \partial _{t}h= \operatorname{Hess}H- H h\circ h^{\sharp } $$ 
> 具体地, 
> $$ \partial _{t}h_{ij}= \nabla _{i}\nabla _{j}H-H h_{jl}g^{lm}h_{im} $$ 

> [!note] Note: 
> $h\circ h^{\sharp }$可以这样来理解, 如果把$\left(h_{jl}\right), \left(g^{lm}\right), \left(h_{im}\right)$都看成是一个矩阵, 那么$h_{jl}g^{lm}h_{im}$就是三个矩阵相乘的$jm$元, 从而大体看成是线性映射的复合. 其中$h^{\sharp }$是$h$通过$g$提升指标后的结果.