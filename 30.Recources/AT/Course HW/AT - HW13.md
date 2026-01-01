> [!exercise] Exercise: 
> 设 $p: E \to B$ 是复叠映射, $X$ 连通. 设 $f: X \to B$ 是零伦的连续映射, 证明 $f$ 有提升, 并且每个提升都是零伦的.

> [!proof] Proof: 
> 设 $H$是$f$到常值映射的同伦. 定义 $G\left(x,t\right)= H\left(x,1-t\right)$. 则 $G\left(x,0\right)= b$. 取 $e\in p^{-1} \left(b\right)$. 则 $c_{e}: X\to E$, $c_{e}\left(x\right)= e$是映射 $c_{b}:X\to B, c_{b}\left(x\right)= b$的一个提升. 即 $p\circ c_{e}= c_{b}$. 从而由同伦提升性质, 存在 $G$的唯一的同伦提升 $\overline{G}: X\times \mathbb{I}\to E$, 使得 $\overline{G}\left(x,0\right)=e$, $p\circ \bar{G}= G$. 由于 $G\left(x,1\right)= f\left(x\right)$, 令 $\overline{f}\left(x\right)= \bar{G}\left(x,1\right)$, 则 $p\circ \bar{f}= f$, $\bar{f}$是 $f$的一个提升. 
>
> 任取$f$的提升 $\tilde{f}$, 则由同伦提升性质, 存在唯一的同伦提升 $\overline{H}$, 使得 $\overline{H}\left(x,0\right)= \tilde{f}\left(x\right)$, $p\circ  \overline{H}=H$. 由于 $H\left(x,1\right)=b$, $\overline{H}\left(x,1\right)\in p^{-1} \left(b\right)$. 由于 $\overline{H}\left(X,1\right)$是连通的, $p^{-1} \left(b\right)$是离散的, 从而 $\overline{H}\left(X,1\right)$是单点集, 这表明 $\bar{H}\left(\cdot ,1\right)$是常值映射, 故 $\tilde{f}$是零伦的.

> [!exercise] Exercise: 
> 设 $f: S^2 \to T^2$ 连续, 证明 $f$ 零伦.

> [!proof] Proof: 
> $T^{2}\simeq S^{1}\times S^{1}$, 令 $p: \mathbb{R} ^{2}\to T^{2}$
>  $$ \begin{aligned} p\left(t_1,t_2\right) =\left(e^{2\pi i t_1}, e^{2\pi i t_2}\right) \end{aligned} $$ 
> 则 $p$是万有复叠映射. 由于 $S^{2}$是单连通的, $f_{\sharp}$是零映射, 特别地,  $f_{\sharp}\left(\pi_1\left(S^{2},x\right)\right) =0\subseteq \pi_1\left(T^{2}, f\left(x\right)\right)$, 由[[thm - lifting criterion]], 存在 $f$的一个提升 $\bar{f}$, 使得 $p\circ \bar{f} =f$. 由于 $\mathbb{R} ^{2}$是可缩的, $\bar{f}$同伦于常值映射, 进而 $f$也同伦于常值映射.

> [!exercise] Exercise: 
> 设 $p_i: E_i \to B$ 是复叠映射 ($i=1,2$), 并且有 $(E_1, p_1)$ 到 $(E_2, p_2)$ 的同态 $h: E_1 \to E_2$, 证明 $h$ 是复叠映射.

> [!proof] Proof: 
> 任取 $e\in E_2$, $b =p\left(e\right)$. 设 $V_1$, $V_2$是分别被 $p_1,p_2$均匀复叠的 $b$的开邻域, 则令 $V =V_1\cap V_2$, 则 $V$是$b$的同时被 $p_1,p_2$均匀复叠的开邻域. 设
>  $$ p_1^{-1} \left(V\right) =\coprod  _{i}U_{i},\quad p_2^{-1} \left(V\right) =\coprod  _{j}W_{j} $$
> 使得 $p_1\left(U_{i}\right) =p_2\left(W_{j}\right) =V$. 不妨设 $e\in W_{1}$, 考虑到$p_2\circ h  =p_1$我们有
>  $$ h^{-1} \left(W_1\right)\subseteq h^{-1} \left(p_2^{-1} \left(V\right)\right) =p_1^{-1} \left(V\right) =\coprod  _{i}U_{i} $$
> 任取 $U_{i}$, 则 $h\left(U_{i}\right)$是连通的, 考虑到
>  $$V =p_1\left(U_{i}\right) =p_2\circ h \left(U_{i}\right)\implies  h\left(U_i\right)\subseteq p_2^{-1} \left(V\right) =\coprod _{j}W_{j} $$ 
> 由连通性, 存在唯一的 $j\left(i\right)$, 使得 $h\left(U_{i}\right)\subseteq W_{j\left(i\right)}$, $U_{i}\in h^{-1} \left(W_{j\left(i\right)}\right)$. 因此 $U_{i}$要么与 $h^{-1} \left(W_1\right)$无交, 要么完全包含在其中, 因此
>  $$ h^{-1} \left(W_1\right) =\coprod  _{i\in \mathcal{I}}U_{i} $$ 
> 其中
>  $$ \mathcal{I} =\left\{ i: h\left(U_{i}\right)\subseteq W_1 \right\} $$ 
> 对于每个 $U_{i}$, $i\in \mathcal{I}$, 我们有
>  $$p_1|_{U_{i}} =\left(p_2\circ h\right)|_{U_{i}} =p_2|_{W_1}\circ h|_{U_{i}} $$ 
> 其中 $p_1|_{U_{i}}:U_{i}\to V$和 $p_2|_{W_1}:W_1\to V$均为同胚映射, 因此 $h|_{U_i}$也为同胚映射, 且
>  $$ h|_{U_i}\left(U_i\right) =\left(p_2|_{W_1}\right)^{-1}  p_1|_{U_{i}} \left(U_{i}\right) =\left(p_2|_{W_1}\right)^{-1} \left(V\right) =W_1$$ 
> 因此 $h$将每个 $U_{i}, i\in \mathcal{I}$同胚地映到 $W_1$. 这表明 $h$是复叠映射.

> [!exercise] Exercise: 
> 如果 $q-q'$ 能被 $p$ 整除, 则 $L(p,q)=L(p,q')$.

> [!proof] Proof: 
> 令 $\zeta$是一个 $p$次单位根, 
>  考虑循环群 $G= \left< \zeta  \right>\simeq \mathbb{Z} _{p}$, 则$\zeta \mapsto \varphi _{q}$和 $\zeta \mapsto \varphi _{q^{\prime} }$分别生成两种 $\mathbb{Z} _{p}$在$\mathbb{S}^{3}$上的作用,其中
>  $$ \varphi _{q}:\left(z_0,z_1\right)\mapsto \left(\zeta z_0, \zeta ^{q}z_1\right) $$
>  $$ \varphi _{q^{\prime} }:\left(z_0,z_1\right)\mapsto \left(\zeta z_0, \zeta ^{q^{\prime} }z_1\right) $$
> $\mathbb{S}^{3}$模掉轨道得到的商空间分别为 $L\left(p,q\right)$和 $L\left(p,q^{\prime} \right)$. 由于 $p|\left(q-q^{\prime} \right)$, 我们有 $\zeta ^{q-q^{\prime} }= 1$,
> 任取 $\left(z_0,z_1\right)\in \mathbb{S}^{3}$, $\left(z_0,z_1\right)$在 $\left< \varphi _{q} \right>$下的轨道为
>  $$ \left\{ \left(\zeta ^{k}z_0, \zeta ^{kq}z_1\right) \right\} = \left\{ \left(\zeta ^{k}z_0,\zeta ^{kq^{\prime} + k\left(q-q^{\prime} \right)}z_1\right) \right\}= \left\{ \left(\zeta ^{k}z_0, \zeta ^{kq^{\prime} }z_1\right) \right\}$$
> 等于 $\left(z_0,z_1\right)$在 $\left< \varphi _{q^{\prime} } \right>$下的轨道. 因此商空间 $L\left(p,q\right)$, $L\left(p,q^{\prime} \right)$相同. 

> [!exercise] Exercise: 
> 若 $p: E \to B$ 是正则复叠映射, $U \subset B$ 是道路连通的基本邻域, $V_\alpha$ 是 $p^{-1}(U)$ 的一个分支. 证明 $p^{-1}(U)$ 的所有分支的集合为 $\{h(V_\alpha) \mid h \in \mathscr{D}(E, p)\}$.

> [!proof] Proof: 
> 若 $p$是正则复叠映射, 则 $\mathscr{D}\left(E,p\right)$单传递地作用在每个纤维上.
>   $$ p\circ \left(h\left(V_{\alpha }\right)\right)= p\left(V_{\alpha }\right)= U $$
> 故 $h\left(V_{\alpha }\right)\subseteq  p^{-1} \left(U\right)$. 由于 $h\left(V_{\alpha }\right)$是连通的, 存在某个分支 $V_{\beta }$, 使得 $h\left(V_{\alpha }\right)\subseteq V_{\beta }$, $p|_{V_{\beta   }}$是同胚映射, 
>  $$ h\left(V_{\alpha }\right)= p|_{V_{\beta }}^{-1}  \circ p|_{V_{\beta }}\left(h\left(V_{\alpha }\right)\right)= p|_{V_{\beta }}^{-1} \left(p\left(V_{\alpha }\right)\right)= p|_{V_{\beta }}^{-1} \left(U\right)= V_{\beta } $$ 
>是一个分支.
>
> 任取分支 $V_{\beta }$,由于正则复叠的甲板变换群 $\mathscr{D}\left(E,p\right)$传递地作用在每个纤维 $p^{-1} \left(x\right)$上. 特别地, 取 $x\in U$, 存在 $x_{\alpha }\in V_{\alpha }$, $x_{\beta }\in V_{\beta }$, 使得 $p\left(x_{\alpha }\right)= p\left(x_{\beta }\right)= x$. 由传递性, 存在 $h\in \mathscr{D}\left(E,p\right)$, 使得 $h\left(x_{\alpha }\right)= x_{\beta }$, 从而$h\left(V_{\alpha }\right)\cap V_{\beta }\neq \varnothing$. 由分支的无交性, $h\left(V_{\alpha }\right)= V_{\beta }$. 因此任意分支落在 $\left\{ h\left(V_{\alpha }\right):h\in \mathscr{D}\left(E,p\right) \right\}$中.

> [!exercise] Exercise: 
> 设 $p: E \to B$ 是泛复叠映射. $a$ 和 $a'$ 是 $B$ 的两条有相同起, 终点的道路, $\tilde{a}$ 和 $\tilde{a}'$ 是 $a$ 和 $a'$ 的提升, 且 $\tilde{a}(0)=\tilde{a}'(0)$. 证明 $\tilde{a}(1)=\tilde{a}'(1) \iff a \simeq a'$.

> [!proof] Proof: 
> 令 $e= \tilde{a}\left(0\right)= \tilde{a}^{\prime} \left(0\right)$. 若 $\tilde{a}\left(1\right)= \tilde{a}^{\prime} \left(1\right)$, 则 $[\tilde{a}^{\prime} *\tilde{a}^{-1} ]\in \pi _1 \left(E,e\right)$
> 由提升的唯一性 $\tilde{a}^{\prime} * \tilde{a}^{-1}$是$a^{\prime} *a^{-1}$的提升.因此
> $$ [a^{\prime} ][a]^{-1} = p_{\sharp }\left([\tilde{a}^{\prime} *\tilde{a}^{-1} ]\right)\in p_{\sharp }\left(\pi _1 \left(E,e\right)\right) $$
> 由于 $E$泛复叠映射, $E$是单连通的, 从而 $\pi _{\sharp }\left(\pi _1 \left(E,e\right)\right)=\left\{ 1 \right\}$. $\left[ a^{\prime}  \right]\left[ a \right]^{-1} = 1$, 即 $a\simeq a^{\prime}$.
>
> 反过来, 若 $a\simeq a^{\prime}$, 设 $H$是同伦映射, 则存在 $H$的提升 $\widetilde{H}$, 使得 $\widetilde{H}\left(0,\cdot \right)= \tilde{a}$. 令 $b= a\left(1\right)$, 则 $p\circ \widetilde{H}\left(s,1\right)=b$, $\widetilde{H} \left(s,1\right)\in p^{-1} \left(b\right)$. 但是 $p^{-1} \left(b\right)$是离散的,  $\widetilde{H}\left(\mathbb{I},1\right)$是连通的, 且 $\widetilde{H}\left(0,1\right)=\tilde{a}\left(1\right)$, 只能有 $\widetilde{H}\left(s,1\right)= \tilde{a}\left(1\right)$, 特别地, $\tilde{a}^{\prime} \left(1\right)= \widetilde{H}\left(1,1\right)= \tilde{a}\left(1\right)$

