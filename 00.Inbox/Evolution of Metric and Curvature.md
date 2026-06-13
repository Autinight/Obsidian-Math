
本节集中计算各种几何量在时间的变化下的演化方程, 把二阶项的结果写成$Laplace$算子, 从而方便地使用抛物型方程的工具.

> [!proposition] Proposition 1
>  $$
>   \frac{\partial }{\partial t}g_{ij}= -2 Hh _{ij} 
>   $$ 

> [!note] Note 2 
> 这里我们利用$\partial _{t}$和$\partial _{i}$的可交换性, 再利用定义$\partial _{t}X= H \vec{n}$,  之后的计算大多都是类似的操作.

> [!proof] Proof: 
> 
> $$
>  \begin{aligned}
>  \frac{\partial g_{ij}}{\partial t}
>  &=
>  \frac{\partial}{\partial t}
>  \left(
>  \frac{\partial X}{\partial x^i}
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

> [!proposition] Proposition 3 
> 
> $$
>  \frac{\partial \vec{n} }{\partial t}= - \operatorname{grad}H
>   $$ 

> [!remark] Remark 4 
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


> [!proposition] Proposition 5 
> $$ \partial _{t}h= \operatorname{Hess}H- H h\circ h^{\sharp } $$ 
> 具体地, 
> $$ \partial _{t}h_{ij}= \nabla _{i}\nabla _{j}H-H h_{jl}g^{lm}h_{im} $$ 

> [!note] Note 6 (Note:)
> $h\circ h^{\sharp }$可以这样来理解, 如果把$\left(h_{jl}\right), \left(g^{lm}\right), \left(h_{im}\right)$都看成是一个矩阵, 那么$h_{jl}g^{lm}h_{im}$就是三个矩阵相乘的$jm$元, 从而大体看成是线性映射的复合. 其中$h^{\sharp }$是$h$通过$g$提升指标后的结果.




> [!proof] Proof: 
> $$\begin{aligned}
> \frac{\partial h_{ij}}{\partial t}
> &= \frac{\partial}{\partial t}
> \left(
> \frac{\partial^2 X}{\partial x^i \partial x^j}, \vec n
> \right) \\
> &= \left(
> \frac{\partial^2(H\vec n)}{\partial x^i \partial x^j}, \vec n
> \right)
> -
> \left(
> \frac{\partial^2 X}{\partial x^i \partial x^j},
> \frac{\partial H}{\partial x^l}
> \frac{\partial X}{\partial x^m} g^{lm}
> \right) \\
> &= \left(
> \frac{\partial}{\partial x^i}
> \left(
> \frac{\partial H}{\partial x^j}\vec n
> + H\left(-h_{jl}g^{lm}\frac{\partial X}{\partial x^m}\right)
> \right), \vec n
> \right)
> -
> \left(
> \Gamma_{ij}^{k}\frac{\partial X}{\partial x^k}
> + h_{ij}\vec n,
> \frac{\partial H}{\partial x^l}
> \frac{\partial X}{\partial x^m}g^{lm}
> \right) \\
> &= \frac{\partial^2 H}{\partial x^i\partial x^j}
> + H\left(
> \frac{\partial}{\partial x^i}
> \left(
> -h_{jl}g^{lm}\frac{\partial X}{\partial x^m}
> \right), \vec n
> \right)
> - \Gamma_{ij}^{k}\frac{\partial H}{\partial x^l}g^{lm}g_{km} \\
> &= \frac{\partial^2 H}{\partial x^i\partial x^j}
> - \Gamma_{ij}^{k}\frac{\partial H}{\partial x^k}
> + H\left(
> -h_{jl}g^{lm}
> \frac{\partial^2 X}{\partial x^i\partial x^m}, \vec n
> \right) \\
> &= \nabla_i\nabla_j H - Hh_{jl}g^{lm}h_{im}.
> \end{aligned}
> 



> [!lemma] Lemma 7 
> $$
> \Delta h_{ij}
> =
> \nabla_i\nabla_j H
> +Hh_{il}g^{lm}h_{mj}
> -|A|^2h_{ij}.
> $$

> [!proof] Proof
> 由混合曲率方程 $(C)$ 与切向曲率方程 $(G)$，有如下计算：
> $$
> \begin{aligned}
> \Delta h_{ij}
> &=g^{mn}\nabla_m\nabla_n h_{ij} \\
> &=g^{mn}\nabla_m\nabla_i h_{jn}
> \qquad\text{由混合曲率方程 }(C) \\
> &=g^{mn}\left(
> \nabla_i\nabla_m h_{jn}
> +R_{mijk}h_n^k
> +R_{mink}h_j^k
> \right) \\
> &=g^{mn}\nabla_i\nabla_j h_{mn}
> +g^{mn}\left[
> (h_{mj}h_{ik}-h_{mk}h_{ij})h_n^k
> +(h_{mn}h_{ik}-h_{mk}h_{in})h_j^k
> \right] \\
> &\qquad\text{其中第一项再次由 }(C)\text{，曲率项由切向曲率方程 }(G) \\
> &=\nabla_i\nabla_j H
> +h_j^n h_{ik}h_n^k
> -h_k^n h_{ij}h_n^k
> +Hh_{ik}h_j^k
> -h_k^n h_{in}h_j^k \\
> &=\nabla_i\nabla_j H
> +Hh_{il}g^{lm}h_{mj}
> -|A|^2h_{ij}.
> \end{aligned}
> $$
>
> 具体而言，混合曲率方程 $(C)$ 用于交换第二基本形式的协变导数指标：
> $$
> \nabla_n h_{ij}=\nabla_i h_{jn},
> \qquad
> \nabla_m h_{jn}=\nabla_j h_{mn}.
> $$
> 切向曲率方程 $(G)$ 用于将曲率项改写为第二基本形式的二次项：
> $$
> R_{mijk}=h_{mj}h_{ik}-h_{mk}h_{ij},
> \qquad
> R_{mink}=h_{mn}h_{ik}-h_{mk}h_{in}.
> $$
> 此外, 第二行到第三行的替换, 不妨看成是$R\left(X,Y\right)$作为张量场上的导子作用在$h$上.
> 
> $$
> R(X,Y)
> =
> [\nabla_X,\nabla_Y]-\nabla_{[X,Y]},
> \qquad
> [\nabla_X,\nabla_Y]
> =
> \nabla_X\nabla_Y-\nabla_Y\nabla_X.
> $$
> 由于 $[\nabla_X,\nabla_Y]$ 是两个导子的交换子，且交换子满足 Leibniz 法则，故仍是导子；$\nabla_{[X,Y]}$ 也是导子，因此 $R(X,Y)$ 也是导子。
> 
> 因此 $R(X,Y)$ 也是张量代数上的导子。于是它作用在张量场上时，满足 Leibniz 法则，并分别作用到张量的每一个指标上。
>
> 对一个 $(0,2)$-张量 $T$，按照本文的指标约定，若
> $$
> (R(\partial_m,\partial_i)\alpha)_j
> =
> R_{mij}{}^k\alpha_k
> $$
> 对任意 $1$-形式 $\alpha$ 成立，则由导子性可得
> $$
> (R(\partial_m,\partial_i)T)_{jn}
> =
> R_{mij}{}^kT_{kn}
> +
> R_{min}{}^kT_{jk}.
> $$
> 取 $T=h$，即
> $$
> (R(\partial_m,\partial_i)h)_{jn}
> =
> R_{mij}{}^k h_{kn}
> +
> R_{min}{}^k h_{jk}
> =
> R_{mijk}h_n{}^k
> +
> R_{mink}h_j{}^k.
> $$
> 另一方面，由曲率算子的定义，在局部坐标场 $[\partial_m,\partial_i]=0$ 下，
> $$
> (R(\partial_m,\partial_i)h)_{jn}
> =
> \nabla_m\nabla_i h_{jn}
> -
> \nabla_i\nabla_m h_{jn}.
> $$
> 因而
> $$
> \nabla_m\nabla_i h_{jn}
> =
> \nabla_i\nabla_m h_{jn}
> +
> R_{mijk}h_n{}^k
> +
> R_{mink}h_j{}^k.
> $$

带入上面的引理, 就能得到

> [!proposition] Proposition 8
> $$
> \frac{\partial h_{ij}}{\partial t}
> =
> \triangle h_{ij}
> -2Hh_{il}g^{lm}h_{mj}
> +|A|^2h_{ij},
> $$

> [!proposition] Proposition 9
> $$\frac{\partial H}{\partial t}=\Delta H+|A|^2H. $$

> [!proof]
> $$
>  \begin{aligned}
> \frac{\partial H}{\partial t}
> &=\frac{\partial}{\partial t}(g^{ij}h_{ij}) \\
> &=-g^{il}\frac{\partial g_{lm}}{\partial t}g^{mj}h_{ij}
> +g^{ij}\frac{\partial h_{ij}}{\partial t} \\
> &=2Hh^{ij}h_{ij}
> +g^{ij}\left(\Delta h_{ij}-2Hh_i^kh_{kj}+|A|^2h_{ij}\right) \\
> &=\Delta H+|A|^2H.
> \end{aligned}
> $$

上面的计算过程中用到了一个对逆度量分量求导的公式

> [!proposition] Proposition 10
> 若
> $$
> \frac{\partial g_{ij}}{\partial t}=-2Hh_{ij},
> $$
> 则逆度量满足
> $$
> \frac{\partial g^{ij}}{\partial t}
> =
> -g^{ik}\frac{\partial g_{kl}}{\partial t}g^{lj}
> =
> 2Hh^{ij}.
> $$

> [!proof]
> 由
> $$
> g^{ik}g_{kj}=\delta^i_j
> $$
> 对 $t$ 求导，得
> $$
> \frac{\partial g^{ik}}{\partial t}g_{kj}
> +g^{ik}\frac{\partial g_{kj}}{\partial t}=0.
> $$
> 两边乘以 $g^{jl}$，得到
> $$
> \frac{\partial g^{il}}{\partial t}
> =
> -g^{ik}\frac{\partial g_{kj}}{\partial t}g^{jl}.
> $$
> 代入
> $$
> \frac{\partial g_{kj}}{\partial t}=-2Hh_{kj},
> $$
> 即
> $$
> \frac{\partial g^{il}}{\partial t}
> =
> 2H g^{ik}h_{kj}g^{jl}
> =
> 2Hh^{il}.
> $$

> [!proposition] Proposition 11
> $$
> \frac{\partial}{\partial t}|A|^2
> =
> \Delta |A|^2
> - 2|\nabla A|^2
> + 2|A|^4.
> $$

同样地, 为了方便我们最后把二阶项替换成Laplace, 还是先来算一下$Lapalace$.

> [!lemma] Lemma 12 
> $$
> \frac{1}{2}\Delta |A|^2
> =
> \langle h_{ij}, \nabla_i \nabla_j H\rangle
> +
> |\nabla A|^2
> +
> Z,
> $$
> where
> $$
> Z
> =
> H\operatorname{tr}(A^3)-|A|^4,
> \qquad
> \operatorname{tr}(A^3)
> =
> g^{ij}g^{kl}g^{mn}h_{ik}h_{lm}h_{nj}.
> $$
> 后续用到的实际上是计算过程中得到的结论
> $$ \Delta \left| A \right|^{2}= 2\left| \nabla A \right|^{2}+ 2\left< h_{ij}, \Delta h_{ji} \right>   $$ 


> [!proof] Proof
> $$
> \begin{aligned}
> \Delta |A|^2
> &=
> \Delta \langle h_{ij},h_{ij}\rangle
> =
> g^{mn}\nabla_m\bigl(2\langle h_{ij},\nabla_n h_{ij}\rangle\bigr) \\
> &=
> 2g^{mn}
> \bigl(
> \langle \nabla_m h_{ij},\nabla_n h_{ij}\rangle
> +
> \langle h_{ij},\nabla_m\nabla_n h_{ij}\rangle
> \bigr) \\
> &=
> 2|\nabla A|^2
> +
> 2\langle h_{ij},\Delta h_{ij}\rangle \\
> &=
> 2|\nabla A|^2
> +
> 2\langle h_{ij},
> \nabla_i\nabla_j H
> +
> Hh_{ik}h_j^k
> -
> |A|^2h_{ij}
> \rangle \\
> &=
> 2|\nabla A|^2
> +
> 2\langle h_{ij},\nabla_i\nabla_j H\rangle
> +
> 2\bigl(H\operatorname{tr}(A^3)-|A|^4\bigr).
> \end{aligned}
> $$

最后来计算$\partial _{t}\left| A \right|^{2}$

> [!proof]- Proof of Proposition 11
> $$
> \begin{aligned}
> \frac{\partial}{\partial t}|A|^2
> &=
> \frac{\partial}{\partial t}
> \bigl(g^{ik}g^{jl}h_{ij}h_{kl}\bigr) \\
> &=
> 4H\bigl(g^{im}h_{mn}g^{nk}\bigr)g^{jl}h_{ij}h_{kl}
> +
> 2g^{ik}g^{jl}
> \bigl(\Delta h_{ij}-2Hh_{im}g^{mn}h_{nj}+|A|^2h_{ij}\bigr)h_{kl} \\
> &=
> 4Hh^{ik}h_{ij}h_k^j
> +
> 2h^{ij}\Delta h_{ij}
> -
> 4Hh_i^n h_{nj}h^{ij}
> +
> 2|A|^4 \\
> &=
> 2\langle h_{ij},\Delta h_{ij}\rangle
> +
> 2|A|^4 .
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> \Delta |A|^2
> &=
> g^{kl}\nabla_k\nabla_l\langle h_{ij},h_{ij}\rangle
> =
> 2g^{kl}\nabla_k\langle h_{ij},\nabla_l h_{ij}\rangle \\
> &=
> 2|\nabla A|^2
> +
> 2\langle h_{ij},\Delta h_{ij}\rangle .
> \end{aligned}
> $$
>
> Thus
> $$
> \frac{\partial}{\partial t}|A|^2
> =
> \Delta |A|^2
> -
> 2|\nabla A|^2
> +
> 2|A|^4 .
> $$
