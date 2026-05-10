> [!exercise] Exercise: 4.12
> 设 $S^n=\{x\in\mathbb{R}^{n+1}:\sum_{i=1}^{n+1}(x^i)^2=1\}$, 用 $p:S^n\to S^n$ 表示对径映射
>
> $p(x^1,\cdots,x^{n+1})=(-x^1,\cdots,-x^{n+1})$, $\forall(x^1,\cdots,x^{n+1})\in\mathbb{R}^{n+1}$.
>
> 证明:
> 1. 单位球面 $S^n$ 是可定向的 $n$ 维光滑流形.
> 2. 在单位球面 $S^n$ 上固定一个定向, 则当 $n$ 是奇数时, 映射 $p:S^n\to S^n$ 是保持定向的; 当 $n$ 是偶数时, 映射 $p:S^n\to S^n$ 是反转定向的.


取$S^{n}$上的一个处处非退化的光滑$n$-形式$\omega$.

则$p$是保定向的, 当且仅当
$$ p^{*}\omega  $$ 


> [!proof] Proof: 
> 1. 设$N,S$是北极点和南极点, 令$U= S^{n}\setminus \left\{ S \right\}$, $V= S^{n}\setminus \left\{ N \right\}$. 
>    则$U,V$同胚于 $\mathbb{R} ^{n}$ , 是可定向的.
>    分别存在$U$上的处处非退化的$n$-形式$\omega _{U}$ 和$V$上的处处非退化的$n$-形式$\omega _{V}$.
>    在$U\cap V$上, $\omega _{U}, \omega _{V}$处处退化, 从而存在非零的$f\in C^{\infty}\left(U\cap V\right)$, 使得
>    $$ \omega _{U}= f\omega _{V} $$ 
>    则$f$不改变符号, 必要时反转$\omega _{V}$的符号, 可以不妨设$f> 0$.
>    
>    $\left\{ U,V \right\}$是$S^{n}$的一个开覆盖, 取从属于它的一个单位分解$\left\{ \psi _{U}, \psi _{V} \right\}$. 
>    
>    定义
>    $$ \omega = \psi _{U}\omega _{U}+ \psi _{V}\omega _{V} $$ 
>    在$U\cap V$上, 
>    $$ \omega = \psi _{U}f\omega _{V}+ \psi _{V}\omega _{V}= \left(\psi _{U}f+ \psi _{V}\right)\omega _{V} $$ 
>    由于$\psi _{U}, \psi _{V}$不同时为零,  故$\psi _{U}f$和$\psi _{V}$不同时为零, $\omega$在$U\cap V$上恒非负.
>    
>    在$N$上, $\omega = \psi _{U}\omega _{U}=\omega _{U}\neq 0$, 在$S$上, $\omega = \psi _{V}\omega _{V}= \omega _{V}\neq 0$. 因此$\omega$是$S^{n}$上处处非退化的光滑$n$-形式. 因此$S^{n}$是可定向的.

> [!exercise] Exercise: 4.13
> 证明: 黎曼曲面是可定向的 $2$ 维光滑流形.

> [!exercise] Exercise: 4.14
> 设 $M$ 是 $n$ 维光滑流形. 证明: $M$ 的切丛 $TM$ 是可定向的 $2n$ 维光滑流形.