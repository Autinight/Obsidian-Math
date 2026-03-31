代靖涵 25120222201319

> [!exercise] Exercise 2.17:
> 设 $M=\mathbb{R}$, 命 $U=M$, $\varphi=\operatorname{id}: M \to \mathbb{R}$, 则 $\Sigma_0=\{(U,\varphi)\}$ 是 $M$ 的一个 $C^\infty$ 坐标覆盖 (因为, 它由一个坐标卡组成, 自然是 "彼此" $C^\infty$-相关的). 另外, 命 $V=M$, $\psi: V \to \mathbb{R}$ 使得 $\psi(x)=x^3, \forall x \in V$, 则 $\tilde{\Sigma}_0=\{(V,\psi)\}$ 同样是 $M$ 的一个 $C^\infty$ 坐标覆盖. 将 $\Sigma_0$ 在 $M$ 上所生成的 $C^\infty$ 结构记为 $\mathcal{A}$, 将 $\tilde{\Sigma}_0$ 在 $M$ 上所生成的 $C^\infty$ 结构记为 $\tilde{\mathcal{A}}$, 于是 $(M,\mathcal{A})$ 和 $(M,\tilde{\mathcal{A}})$ 是两个 $1$ 维光滑流形.
> 1. 定义映射 $f: (M,\mathcal{A}) \to (M,\tilde{\mathcal{A}})$ 使得 $f(x)=x, \forall x \in M$, 证明: 映射 $f: (M,\mathcal{A}) \to (M,\tilde{\mathcal{A}})$ 不是 $C^\infty$ 同胚.
> 2. 证明: 一维光滑流形 $(M,\mathcal{A})$ 和 $(M,\tilde{\mathcal{A}})$ 是 $C^\infty$ 同胚的.

> [!proof] Proof: 
> 1.  $f$的坐标表示为
>     $$ \tilde{f}:= \psi \circ f\circ\varphi ^{-1} \left(x\right)= x^{3}$$ 
>      但是
>     $$ \left(x^{\frac{1}{3}}\right)^{\prime} = \frac{1}{3}x^{-\frac{2}{3}} $$ 
>     在$0$处不连续, 因此$\tilde{f}$的逆映射不光滑, $f$不是$C^{\infty}$同胚.
> 2. 考虑$g:M\to M$
>    $$ g\left(x\right)= x^{\frac{1}{3}} $$
>    则
>    $$ \tilde{g}:= \psi \circ g\circ \varphi ^{-1} \left(x\right)= x $$
>    是一个微分同胚, 故$g$是$\left(M,\mathcal{A}\right)\to \left(M,\widetilde{\mathcal{A}}\right)$ 的$C^{\infty}$同胚. 
 

> [!exercise] Exercise 2.18:
> 命
> $$h(t) = \begin{cases} e^{-1/t}, & \forall t > 0, \\ 0, & \forall t \leqslant 0. \end{cases}$$
> 1. 验证 $h \in C^\infty(\mathbb{R})$.
> 2. 对于任意的正数 $0 < r_1 < r_2$, 命
>    $$g(x) = \frac{h(r_2^2 - x)}{h(r_2^2 - x) + h(x - r_1^2)},$$
>    验证: $g \in C^\infty(\mathbb{R})$, $0 \leqslant g \leqslant 1$, 并且 $g(x)=1$ (当 $x \leqslant r_1^2$ 时), $g(x)=0$ (当 $x \geqslant r_2^2$ 时).
> 3. 设 $B(r_1)$, $B(r_2)$ 是 $\mathbb{R}^n$ 中以原点为中心的同心球体, 半径为 $0 < r_1 < r_2$. 利用上面给出的函数构造函数 $G \in C^\infty(\mathbb{R}^n)$, 使得 $G(x)=1, \forall x \in B(r_1)$, $G(x)=0, \forall x \in \mathbb{R}^n \setminus B(r_2)$.

> [!proof] Proof: 
> 1. 易见$h$在$0$以外的点显然可导.
>    $$ \lim_{s\to 0^{+ }}\frac{h\left( s\right)-h\left(0\right)}{s } = \lim_{s\to 0^{+ }} \frac{1 }{s }e^{-\frac{1 }{s }}= 0$$ 
>    $$ \lim_{s\to 0^{-}}\frac{h\left(s\right)-h\left(0\right) }{s }= \lim_{s\to 0^{-}}\frac{0-0 }{s }= 0 $$ 
>    故$h$在$0$处也可导, $h^{\prime} \left(0\right)= 0$, 因此
>    $$ h^{\prime} \left(t\right)= \begin{cases} \frac{1 }{t^{2} }e^{-\frac{1}{t}},& \forall t> 0,\\0,&\forall t\le 0 \end{cases}  $$   
>    类似地, 归纳可得, 对于任意的$m \in \mathbb{N} _{> 0}$, 存在多项式$P_{m}\left(\frac{1 }{t }\right)$, 使得$h^{\left(m\right)}\left(t\right)= P_{m}\left(\frac{1 }{t }\right)e^{-\frac{1 }{t }}$, $\forall t> 0$.
>    $$ \lim_{s\to 0^{+ }}\frac{h^{\left(m\right)}\left(s\right)-h^{\left(m\right)}\left(0\right) }{s }= \lim_{s\to 0^{+ }}\left(\frac{1 }{s }P_{m}\left(\frac{1 }{s }\right)\right)e^{-\frac{1 }{s }}= 0 $$
>    $$ \lim_{s\to 0^{-}}\frac{h^{\left(m\right)}\left(s\right)-h^{\left(m\right)}\left(0\right) }{ s} = \lim_{s\to 0^{-}}\frac{0-0 }{s }= 0$$  
>    可得$h^{\left(m\right)}$可导. 因此$h\in C^{\infty}\left(\mathbb{R} \right)$.
> 2. 当$x\le r_1^{2}$时, $h\left(r_2^{2}-x\right)> 0$, $h\left(x-r_1^{2}\right)= 0$, 此时$g\left(x\right)= 1$; 当$r_1^{2}< x<  r_2^{2}$时, $h\left(r_2^{2}-x\right)> 0$, $h\left(x-r_1^{2}\right)> 0$, $0\le g\le 1$; 当$x\ge r_2^{2}$时, $h\left(r_2^{2}-x\right)= 0$, $h\left(x-r_1^{2}\right)> 0$, 此时$g\left(x\right)= 0$. 由于$g$的分子分母分别光滑, 并且其分母总严格大于零, 因此$g$总是光滑的.
>
> 3. 定义
>    $$ G\left(x\right)= g\left(\left| x \right|^{2} \right) $$
>    则$G\in C^{\infty}\left(\mathbb{R} ^{n}\right)$. 当$x\in B\left(r_1\right)$时, $\left| x \right|^{2}< r_1^{2}$, $G\left(x\right)= g\left(\left| x \right|^{2} \right)= 1$； 当$x\in \mathbb{R} ^{n}\setminus B\left(r_2\right)$时, $\left| x \right|^{2}\ge r_2^{2}$, $G\left(x\right)= g\left(\left| x \right|^{2} \right)= 0$.


> [!exercise] Exercise 2.19:
> 设 $M$ 是一个具有第二可数公理的 $n$ 维光滑流形, $A, B$ 是 $M$ 的两个闭子集, 且 $A \cap B = \varnothing$. 证明: 存在光滑函数 $f \in C^\infty(M)$, 使得 $0 \leqslant f \leqslant 1$, 且 $f|_A \equiv 1$, $f|_B \equiv 0$.

> [!proof] Proof: 
> 考虑到
> $$ \left(M\setminus A\right)\cup \left(M\setminus B\right)= M\setminus \left(A\cap B\right)= M $$ 
> 故$\left\{ M\setminus A,M\setminus B\right\}$是$M$的一个开覆盖, 存在从属于它的光滑单位分解$\left\{ \psi _{M\setminus A},\psi _{M\setminus B} \right\}$, 
> 定义 
>  $$ f\left(x\right)= \psi _{M\setminus B} \left(x\right)$$
> 则$f\in C^{\infty}\left(M\right)$. 由于$\psi_{M\setminus A}, \psi _{M\setminus B}$非负, 我们有$0\le f\le 1$.
> 由于$\operatorname{supp}\psi _{M\setminus A}\subseteq M\setminus A$, 当$x\in A$时, $\psi _{M\setminus A}= 0$, 故$\psi _{M\setminus B}\left(x\right)= 1$.  因此$f|_{A}\equiv 1$. 又$\operatorname{supp}\psi _{M\setminus B}\subseteq M\setminus B$, 当$x\in B$时, $\psi _{M\setminus B}= 0$, 此时$f\left(x\right)= 0$. 因此$f|_{B}= 0$.