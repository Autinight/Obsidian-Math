
> [!exercise] Exercise: 
> 给出光滑流形$M$上的余切丛$T^{*}M= \bigcup _{p\in M}T_{p}^{*}M$的$C^{\infty}$坐标覆盖.

> [!proof] Proof: 
> 任取$M$的坐标卡$\left(U,\varphi \right)= \left(U, x^{1},\cdots ,x^{n}\right)$. 则定义
>  $$ T^{*}U=  \coprod  _{p\in U}T_{p}^{*}M,\quad  $$ 
> 定义 $\widetilde{\varphi}:T^{*}U\to \varphi \left(U\right)\times \mathbb{R} ^{n}$
>  $$ \widetilde{\varphi}\left(p,v_{i}\,d x^{i}\right) = \left(x^{1},\cdots ,x^{n},v_1,\cdots ,v_{n}\right)$$ 
> $T^{*}M$配备了使得所有$\widetilde{\varphi}$成为同胚的最弱的拓扑. 此时, 每个$\left(T^{*}U, \widetilde{\varphi}\right)$是$T^{*}M$的一个坐标卡.
> 设$\left(V,\psi \right)= \left(V,y^{1},\cdots ,y^{n}\right)$是$M$的另外一个坐标卡, 则$\left(T^{*}V, \widetilde{\psi}\right)$是$T^{*}M$的一个坐标卡, 
> 在$\widetilde{\varphi }\left(T^{*}U\cap T^{*}V\right)=\widetilde{\varphi }\left( T^{*}\left(U\cap V\right)\right)$上, 
>  $$\widetilde{\psi}\circ \widetilde{\varphi}^{-1} = \left(\psi \circ \varphi ^{-1} , A\right) $$ 
>  $$ A:\left(v_1,\cdots ,v_{n}\right)\mapsto v_{i}dx^{i}= v_{i}\frac{\partial x^{i}}{\partial y^{j}}\,d y^{j}\mapsto \left(v_{i}\frac{\partial x^{i}}{\partial y^{1}},\cdots ,v_{i}\frac{\partial x^{i}}{\partial y^{n}}\right)=  v\cdot \left(\frac{\partial x^{i}}{\partial y^{j}}\left(x\right)\right)$$ 
>  因此$\widetilde{\psi}\circ \widetilde{\varphi}^{-1}$是光滑映射. 类似地可以说明$\widetilde{\varphi}\circ \widetilde{\psi}^{-1}$是光滑的. 故所有的$\left(T^{*}U,\widetilde{\varphi}\right)$构成了$T^{*}M$的一个$C^{\infty}$坐标覆盖.

> [!exercise] Exercise: 
> 设$U$是$n$为光滑流形$M$的一个开子集, $v\in \mathfrak{X}\left(U\right)$. 证明:在任意一点$p\in U$, 存在点$p$的开邻域$V\subseteq U$, 以及光滑切向量场$\tilde{v}\in \mathfrak{X}\left(M\right)$, 使得$\tilde{v}|_{V}= v|_{V}$

> [!proof] Proof: 
> 任取$p\in U$, 由光滑流形上bump function的存在性, 可知存在 $\rho :M\to \mathbb{R}$, 使得
> 1. $0\le \rho \le 1$;
> 2. $\operatorname{supp}\left(\rho \right)\subseteq U$
> 3. 存在$p$的开邻域$V$, 使得在$V$上$\rho \equiv 1$.
> 定义
>  $$ \tilde{v}= \begin{cases} \rho v,&q\in U\\0,&q\in M\setminus \operatorname{supp}\rho  \end{cases}  $$ 
> 在$U\cap M\setminus \operatorname{supp}\rho= U\setminus \operatorname{supp}\rho$上, $\rho v= 0$, 因此$\tilde{v}$良定义. 且$\tilde{v}$在$U$和$M\setminus \operatorname{supp}\rho$上分别光滑, 因此$\tilde{v}$是光滑的向量场, 并且
>  $$ \tilde{v}|_{V}= \left(\rho v\right)|_{V}= v|_{V} $$ 