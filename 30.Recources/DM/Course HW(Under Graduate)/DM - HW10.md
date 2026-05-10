代靖涵 25120222201319

> [!exercise] Exercise: 4.12
> 设 $S^n=\{x\in\mathbb{R}^{n+1}:\sum_{i=1}^{n+1}(x^i)^2=1\}$, 用 $p:S^n\to S^n$ 表示对径映射
>
> $p(x^1,\cdots,x^{n+1})=(-x^1,\cdots,-x^{n+1})$, $\forall(x^1,\cdots,x^{n+1})\in\mathbb{R}^{n+1}$.
>
> 证明:
> 1. 单位球面 $S^n$ 是可定向的 $n$ 维光滑流形.
> 2. 在单位球面 $S^n$ 上固定一个定向, 则当 $n$ 是奇数时, 映射 $p:S^n\to S^n$ 是保持定向的; 当 $n$ 是偶数时, 映射 $p:S^n\to S^n$ 是反转定向的.


> [!proof] Proof: 
> 1. 设$N,S$是北极点和南极点, 令$U= S^{n}\setminus \left\{ S \right\}$, $V= S^{n}\setminus \left\{ N \right\}$. 
>    则$U,V$同胚于 $\mathbb{R} ^{n}$ , 是可定向的.
>    分别存在$U$上的处处非退化的$n$-形式$\omega _{U}$ 和$V$上的处处非退化的$n$-形式$\omega _{V}$.
>    在$U\cap V$上, $\omega _{U}, \omega _{V}$处处非退化, 从而存在非零的$f\in C^{\infty}\left(U\cap V\right)$, 使得
>    $$ \omega _{U}= f\omega _{V} $$ 
>    则$f$不改变符号, 必要时反转$\omega _{V}$的符号, 可以不妨设$f> 0$.
>    
>    $\left\{ U,V \right\}$是$S^{n}$的一个开覆盖, 取从属于它的一个单位分解$\left\{ \psi _{U}, \psi _{V} \right\}$. 
>    
>    定义
>    $$ \omega = \psi _{U}\omega _{U}+ \psi _{V}\omega _{V} $$ 
>    在$U\cap V$上, 
>    $$ \omega = \psi _{U}f\omega _{V}+ \psi _{V}\omega _{V}= \left(\psi _{U}f+ \psi _{V}\right)\omega _{V} $$ 
>    由于$\psi _{U}, \psi _{V}$不同时为零,  故$\psi _{U}f$和$\psi _{V}$不同时为零, $\omega$在$U\cap V$上恒大于零.
>    
>    在$N$上, $\omega = \psi _{U}\omega _{U}=\omega _{U}\neq 0$, 在$S$上, $\omega = \psi _{V}\omega _{V}= \omega _{V}\neq 0$. 因此$\omega$是$S^{n}$上处处非退化的光滑$n$-形式. 因此$S^{n}$是可定向的.
> 2. 定义$S^{n}$上的非退化光滑$n$-形式, 
>    $$ \omega _{x}\left(v_1,\cdots ,v_{n}\right)= \det \left(x,v_1,\cdots ,v_{n}\right) $$ 
>    由于$x$与$T_{x}S^{n}$正交, 若$v_1,\cdots ,v_{n}$是线性无关的, 则$\omega _{x}\left(v_1,\cdots ,v_{n}\right)\neq 0$. 因此$\omega _{x}$是确实是非退化的.
>    而
>    $$ \left(p^{*}\omega \right)_{x}\left(v_1,\cdots ,v_{n}\right)= \omega _{-x}\left(-v_1,\cdots ,-v_{n}\right)= \left(-1\right)^{n}\omega _{-x}\left(v_1,\cdots ,v_{n}\right) $$ 
>    因此
>    $$ \left(p^{*}\omega \right)_{x}= \left(-1\right)^{n}\omega _{-x} $$ 
>    而
>    $$ \omega _{-x}\left(v_1,\cdots ,v_{n}\right)= \det \left(-x,v_1,\cdots ,v_{n}\right)= -\omega _{x}\left(v_1,\cdots ,v_{n}\right) $$
>    因此
>    $$ \left(p^{*}\omega _{x}\right)= \left(-1\right)^{n+ 1}\omega _{x} $$ 
>    当$n$为奇数时, $p^{*}\omega = \omega$, $p$保定向. 当$n$为偶数时, $p^{*}\omega = -\omega$, $p$反定向.



> [!exercise] Exercise: 4.13
> 证明: 黎曼曲面是可定向的 $2$ 维光滑流形.

> [!proof] Proof: 
> 取黎曼面$M$的一个全纯图册$\left\{ \left(U_{\alpha },z_{\alpha }\right) \right\}$, 设$z_{\alpha }= x_{\alpha }+ iy_{\alpha }$.
> 定义局部定向形式
> $$ \omega _{\alpha }= dx_{\alpha }\wedge dy_{\alpha } $$  
> 在交集$U_{\alpha }\cap U_{\beta }$上, 坐标变换$z_{\beta }= f\left(z_{\alpha }\right)$是全纯的.
> 我们有
> $$ d x_{\beta }\wedge dy_{\beta }= \operatorname{deg}\left(J_{f}\right)\cdot dx_{\alpha }\wedge d y_{\alpha } $$ 
> 接下来计算$\det J_{f}$.
> 我们将全纯函数$f$写成
> $$ f\left(x+ iy\right)= u\left(x,y\right)+ iv\left(x,y\right) $$ 
> 由于$f$是全纯的, 满足Cauchy-Rieman方程, 
> $$ \frac{\partial u}{\partial x}= \frac{\partial v}{\partial y},\quad \frac{\partial u}{\partial y}= -\frac{\partial v}{\partial x} $$ 
> 那么$f$作为实坐标映射, 计算其Jacobi为
> $$ \begin{aligned} J_{f}&= \begin{pmatrix} \frac{\partial u}{\partial x}&\frac{\partial u}{\partial y}\\ \frac{\partial v}{\partial x}&\frac{\partial v}{\partial y} \end{pmatrix}\\&= \begin{pmatrix}  \frac{\partial u}{\partial x}&\frac{\partial u}{\partial y}\\-\frac{\partial u}{\partial y}&\frac{\partial u}{\partial x} \end{pmatrix} \end{aligned}$$ 
> 于是
> $$ \det J_{f}=\left(\frac{\partial u}{\partial x}\right)^{2}+ \left(\frac{\partial u}{\partial y}\right)^{2}\ge 0 $$ 
> 由于$f$是坐标变换, $\det J_{f}\neq 0$, 因此$\det J_{f}> 0$.
> 故
> 每个局部上定义的定向形式
> $$ \omega _{\alpha }= d x_{\alpha }\wedge dy_{\alpha } $$ 
> 是定向相容的.  利用单位分解, 可以构造出全局的定向形式.


> [!exercise] Exercise: 4.14
> 设 $M$ 是 $n$ 维光滑流形. 证明: $M$ 的切丛 $TM$ 是可定向的 $2n$ 维光滑流形.

> [!proof] Proof: 
> 设 $\{(U_\alpha, \varphi_\alpha)\}$ 是 $M$ 的一个光滑图册,它给出 $TM$ 的一个光滑图册 $\{(\pi^{-1}(U_\alpha), \tilde{\varphi}_\alpha)\}$.
> 
> 转移函数为
> $$
> \tilde{\varphi}_{\alpha\beta}(x_\alpha, v_\alpha) = \left( \varphi_{\alpha\beta}(x_\alpha), (d\varphi_{\alpha\beta})_{x_\alpha}(v_\alpha) \right) = (x_\beta(x_\alpha), v_\beta(x_\alpha, v_\alpha))
> $$
> 
> 它的 Jacobi 为
> $$
> d\tilde{\varphi}_{\alpha\beta} = \begin{pmatrix} 
> \frac{\partial x_\beta}{\partial x_\alpha} & \frac{\partial x_\beta}{\partial v_\alpha} \\ 
> \frac{\partial v_\beta}{\partial x_\alpha} & \frac{\partial v_\beta}{\partial v_\alpha}
> \end{pmatrix}
> $$
> 
> 由于 $v_\beta$ 关于 $v_\alpha$ 是线性的,故 $\frac{\partial v_\beta}{\partial v_\alpha} = (d\varphi_{\alpha\beta})_{x_\alpha}$.
> 
> 又 $\frac{\partial x_\beta}{\partial x_\alpha} = (d\varphi_{\alpha\beta})_{x_\alpha}$.
> 
> 由于 $x_\beta$ 不依赖 $v_\alpha$,有 $\frac{\partial x_\beta}{\partial v_\alpha} = 0$.
> 
> 因此
> $$
> \det(d\tilde{\varphi}_{\alpha\beta})_{(x_\alpha, v_\alpha)} = \left( (\det d\varphi_{\alpha\beta})_{x_\alpha} \right)^2 > 0
> $$
> 
> 故 $TM$ 是可定向的.
