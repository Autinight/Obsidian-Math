
> [!exercise] Exercise 1
> 设 $M$ 为光滑流形且可表示为两个可定向的开子流形的并, 求证若这两个子流形的交集是连通的则 $M$ 是可定向的, 并由此给出 $\mathbb{S}^n$ 可定向的证明.


> [!proof] Proof: 
> 设
>  $$ M= U_1\cup  U_2 $$
> 其中 $U_1,U_2$是可定向的开子流形. 则分别存在$U_1$和 $U_2$上的非退化 $n$-形式 $\omega_1,\omega_2$. 由于在 $U_1\cap U_2$上,  $\omega_1$和 $\omega_2$均处处非零, 从而存在非零的光滑函数 $f\in C^{\infty}\left(U_1\cap U_2\right)$, 使得在 $U_1\cap U_2$上成立
>  $$ \omega_1= f\omega_2 $$
> 由于 $U_1\cap U_2$是连通的,  且 $f$非零, 那么 $f$只能是恒正和恒负的. 若 $f$是恒负的, 我们用 $-\omega_{2}$代替 $\omega_{2}$, 因此下设 $f$是恒正的.
>
> 取 $M$的从属于 $\left\{ U_1,U_2 \right\}$的一个单位分解 $\left\{ \rho _1 ,\rho _2 \right\}$. 定义
>   $$ \omega= \rho _1 \omega_1+ \rho _2 \omega_2 $$
> 规定在局部形式$\omega_1, \omega_2$在未定义的地方取0. 
> 在 $U_1\setminus U_2$上, $\rho _2 = 0$, $\rho _1 = 1$, $\omega= \omega _1$;类似地, 在 $U_2\setminus U_1$上, $\omega= \omega_2$. 在 $U_1\cap U_2$上, 
>  $$ \omega= \rho _1 f\omega_2+ \rho _2 \omega_2= \left(\rho _1 f+ \rho _2 \right)\omega_2 $$ 
> $\rho _1f$和 $\rho _2$均非负, 且至少有一个非零. 因此 $\omega$是处处非零的 $n$-形式. 这就说明了 $M$是可定向的.
>
> 设 $N,S$是 $\mathbb{S}^{n}$的北极点和南极点. 则 令$U_1= \mathbb{S}^{n}\setminus N$和 $U_2= \mathbb{S}^{n}\setminus S$通过球极投影微分同胚于 $\mathbb{R} ^{n}$, 从而是可定向的. $U_1\cap U_2$在 $n\ge 2$时通过球极投影微分同胚于 $\mathbb{R} ^{n}\setminus \left\{ 0 \right\}$, 从而是连通的. 由上面的命题可知,  $\mathbb{S}^{n}$是可定向的. 此外 $\mathbb{S}^{1}$上存在非退化的体积形式 $xdy-ydx$, 从而 $\mathbb{S}^{1}$也是可定向的.



> [!exercise] Exercise 2
> 设 $M$ 是可定向的黎曼流形, $S \subset M$ 是子流形 (可能是浸入或嵌入; 可能带边可能不带边). 证明:
>
> a). 若 $S$ 的法丛是平凡的, 则 $S$ 可定向.
>
> b). 若 $S$ 是一个可定向的超曲面, 则 $S$ 的法丛是平凡的.

> [!proof] Proof: 
> a). 设 $\operatorname{dim}S= k$, 若 $S$的法丛是平凡的, 则存在$NS$的 $r:= n-k$个截面 $\nu _1 ,\cdots ,\nu _{r}$, 使得对于任意的 $p\in S$, $\nu _{1}\left(p\right),\cdots ,\nu _{r}\left(p\right)$线性无关.
> 若 $M$是可定向的, 则存在 $M$上的一个无处退化的 $n$-形式 $\omega$. 定义 $S$上的一个 $k$-形式 $\omega_{S}$: 
>  $$ \omega_{S}=i^{*}\left( \iota _{\nu _r } \cdots \iota _{\nu _{1}}\omega\right) $$ 
> 任取 $T_{p}S$上线性无关的切向量 $v_1,\cdots ,v_{k}$, 则 $\left\{ v_1,\cdots ,v_{k},\nu _1 \left(p\right),\cdots ,\nu _{r}\left(p\right) \right\}$线性无关, 由于 $\omega$是无处退化的
>  $$ \left(\omega_{S}\right)_{p}\left(v_1,\cdots ,v_{k}\right)=\omega_{p}\left(\nu _1 \left(p\right),\cdots ,\nu _{r}\left(p\right),v_1,\cdots ,v_{k}\right)\neq 0  $$ 
> 这表明 $\omega_{S}$在 $S$上无处退化, 因此 $S$可定向.
>
> b). 若 $S$是可定向的, 则存在$S$上的一个处处非零的 $\left(n-1\right)$-形式 $\omega\in \Omega^{n-1}\left(S\right)$. 由于 $M$是可定向的, 存在 $M$上的一个处处非零的 $n$-形式 $\Omega\in \Omega^{n}\left(M\right)$. 定义丛射 
>  $$ \begin{aligned} \Phi : NS&\to \Lambda^{n-1}\left(T^{*}S\right) \\ \left(p,v\right)&\mapsto  i^{*}\left(\iota _{v }\Omega_{p}\right)\end{aligned} $$
> 具体地, 
>  $$ \Phi \left(p,v \right)\left(v_1,\cdots ,v_{n-1}\right)=  \Omega_{p}\left(v,v_1,\cdots ,v_{n-1}\right),\quad v_{i}\in T_{p}S$$
> 则 $\Phi$是光滑的丛同态. 此外, 由于任取 $T_{p}S$上的一组基 $\left\{ v_1,\cdots ,v_{n-1} \right\}$, 和 $N_{p}S$上的非零向量$v$都有, $\left\{ v,v_1,\cdots ,v_{n-1} \right\}$线性无关, 从而 $\Omega_{p}\left(v,v_1,\cdots ,v_{n-1}\right)\neq 0$. 由于 $N_{p}S$和 $\Lambda^{n-1}\left(T^{*}_{p}S\right)$都是一维的, 且 $\Phi \left(p,\cdot \right)$是非零的线性映射, 因此 $\Phi \left(p,\cdot \right)$是线性同构. 这表明 $\Phi$是丛同构. 因此
>  $$ \nu := \Phi ^{-1} \left(\omega\right) $$
> 是 $NS$的一个处处非零的全局截面, 故 $NS$是平凡的.  



> [!exercise] Exercise 3
> a). 设 $\mathbb{T}^2 = \mathbb{S}^1 \times \mathbb{S}^1 \subset \mathbb{R}^4$ 为二维环面, 即
> $$
> \mathbb{T}^2 = \{(w, x, y, z) \mid w^2 + x^2 = y^2 + z^2 = 1\}.
> $$
> 计算 $\int_{\mathbb{T}^2} \omega$, 其中
> $$
> \omega = xyz \ dw \wedge dy.
> $$
>
> b). 设
> $$
> \omega = x \ dy \wedge dz + y^2 \ dz \wedge dx + z \ dx \wedge dy
> $$
> 为 $\mathbb{R}^3$ 上的 $2$-形式, 令 $\iota: \mathbb{S}^2 \to \mathbb{R}^3$ 为标准嵌入, 计算 $\int_{\mathbb{S}^2} \iota^* \omega$.

> [!solution] Solution: 
> a). 考虑 $\mathbb{T}^{2}$在 $\left\{ w\neq 1, y\neq 1 \right\}$上的坐标映射
>  $$ \psi : \left(\cos\theta, \sin \theta, \cos \varphi ,\sin \varphi \right)\to \left(\theta ,\varphi \right) $$ 
> 则
>  $$ \begin{aligned} \int _{\mathbb{T}^{2}}\omega &= \int _{\left(0,2\pi \right)^{2}}\left(\psi ^{-1} \right) ^{*}\omega  \end{aligned} $$ 
> 其中
>  $$ \begin{aligned} \left(\psi ^{-1} \right)^{*}\omega& = \sin \theta \cos \varphi \sin \varphi d\cos \theta \wedge d\cos \varphi \\&= \sin ^{2}\theta \sin ^{2}\varphi \cos \varphi  d\theta \wedge d\varphi  \end{aligned} $$ 
> 因此 
>  $$ \begin{aligned} \int _{\left(0,2\pi \right)^{2}}\left(\psi ^{-1} \right)^{*}\omega& = \int _{0}^{2\pi }\int _{0}^{2\pi }\sin ^{2}\theta \sin ^{2}\varphi \cos \varphi d\varphi d\theta \\&= \int _{0}^{2\pi }\sin ^{2}\theta  \cdot 0 d\theta \\&= 0 \end{aligned} $$ 
> 故
>  $$ \int _{\mathbb{T}^{2}}\omega = 0 $$
> b).  
>  $$ \begin{aligned} d\omega & = dx\wedge dy\wedge dz+ 2ydy\wedge dz\wedge dx+ dz\wedge dx\wedge dy\\&=\left(2+ 2y\right)dx\wedge dy\wedge dz  \end{aligned} $$
> 由Stokes公式,
>  $$ \begin{aligned} \int _{\mathbb{S}^{2}}\iota ^{*}\omega &= \int _{B\left(0,1\right)}d\omega \\&= \int _{B\left(0,1\right)}\left(2+ 2y\right)dxdydz\\&= \int _{B\left(0,1\right)}2dxdydz\\&= 2 \operatorname{Vol}\left(B\left(0,1\right)\right)\\&= \frac{8\pi  }{3 } \end{aligned} $$ 
> 其中第三个等号是因为 $y$关于自身是奇函数, 且积分区域关于 $\left\{ y= 0 \right\}$对称.

