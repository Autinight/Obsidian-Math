代靖涵 25120222201319

> [!exercise] Exercise: 3.29
> 设 $\{\varphi_t\}$ 和 $\{\psi_t\}$ 是作用在光滑流形 $M$ 上的两个单参数变换群, 它们所诱导的光滑切向量场是 $X, Y \in \mathfrak{X}(M)$. 证明: $\{\varphi_t\}$ 和 $\{\psi_t\}$ 在光滑流形 $M$ 上的作用是可交换的, 当且仅当 $[X,Y] \equiv 0$.


> [!proof] Proof: 
> $$ \psi _{s}\circ \varphi _{t}= \varphi _{t}\circ \psi _{s} $$ 
> 
> 
> $$ \left. \frac{\mathrm{d}}{\mathrm{d}s} \right|_{0}\left(\psi _{s}\circ \varphi _{t}\left(p\right)\right)= Y_{\varphi _{t}\left(p\right)} $$
> $$ \left. \frac{\mathrm{d}}{\mathrm{d}s} \right|_{0}\left(\varphi _{t}\circ \psi _{s}\left(p\right)\right)= \left(d \varphi _{t}\right)_{p}\left(Y_{p}\right) = \left(\varphi ^{*}_{-t}Y\right)_{\varphi _{t}\left(p\right)}$$  
> 
> 由积分曲线的唯一性, $\varphi _{t},\psi _{s}$可交换, 当且仅当它们的速度向量场相同, 即
> $$ Y= \varphi _{t}^{*}Y,\quad \forall t $$ 
> 
> 
> 
> 
> 若流可交换, 则
> $$ Y= \varphi _{-t}^{*}Y $$ 
> 
> 考虑到
> $$ \varphi _{-t}^{*}Y= Y+ \left(-t\right)\mathcal{L}_{X}Y+ o\left(t\right)= Y-t\left[ X,Y \right]+ o\left(t\right) $$ 
> 可知
> $$ Y= Y-t\left[ X,Y \right]+ o\left(t\right)\implies \left[ X,Y \right]= 0 $$ 
> 
> 
> 反之, 若$\left[ X,Y \right]= 0$, 则
> $$ \mathcal{L}^{2}_{X}Y= \mathcal{L}_{X}\left(\left[ X,Y \right]\right)= 0 $$ 
> 
> 归纳可得
> $$ \mathcal{L}_{X}^{n}Y= \mathcal{L}_{X}\left(\mathcal{L}_{X}^{n-1}Y\right)= 0 $$
> 因此
> $$ \varphi _{t}^{*}Y= Y $$  
> 故而流可交换.




> [!exercise] Exercise: 3.30
> 设 $M$ 是 $n$ 维光滑流形, $X_1, \cdots, X_n \in \mathfrak{X}(M)$ 是 $M$ 上的 $n$ 个光滑切向量场, $U$ 是 $M$ 的一个开子集. 假定 $[X_i, X_j] = 0$, $\forall 1 \leqslant i, j \leqslant n$, 且 $\{X_i|_U, 1 \leqslant i \leqslant n\}$ 在 $U$ 上处处线性无关. 证明: 对于每一点 $p \in U$, 存在在点 $p$ 的局部坐标系 $(V; v^i)$, $V \subset U$, 使得
> $$\frac{\partial}{\partial v^i} = X_i|_V, \quad 1 \leqslant i \leqslant n.$$

> [!proof] Proof: 
> 设$\varphi ^{\left(i\right)}$是$X_{i}$的流, $1\le i\le n$则, $\varphi ^{\left(i\right)}$与$\varphi ^{\left(j\right)}$可交换, $1\le i,j\le n$.
> 固定$p\in U$, 令
> 
> $$ F: W\to M $$ 
> $$ F\left(s^{1},\cdots ,s^{n}\right) = \varphi ^{\left(1\right)}_{s^{1}}\circ \varphi _{s^{2}}^{\left(2\right)}\circ \cdots \circ \varphi _{s^{n}}^{\left(n\right)}\left(p\right)$$ 
> 其中$W\subseteq \mathbb{R} ^{n}$是使得$F$总有定义的开集.
> $$ \begin{aligned} \left(d F\right)_{0}\left(\frac{\partial }{\partial s^{i}}\right)&= \left. \frac{\partial }{\partial s^{i}} \right|_{0}F= \left. \frac{\partial }{\partial s^{i}} \right|_{0}\left(\varphi _{0}^{\left(1\right)}\circ \cdots \circ \widehat{\varphi_{0}^{\left(i\right)}}\circ \cdots \circ \varphi _{0}^{\left(n\right)}\right)\left(\varphi _{s^{i}}^{\left(i\right)}\left(p\right)\right)\\&= \left. \frac{\partial }{\partial s^{i}} \right|_{0}\left(\varphi _{s^{i}}^{\left(i\right)}\left(p\right)\right)= \left(X_{i}\right)_{p} \end{aligned} $$ 
> 而$X_{i}|_{U}$是处处线性无关的, 因此$\left(d F\right)_{0}$是线性同构, 故而有反函数定理, 存在开集$\widetilde{W}\subseteq W$和 $V\subseteq M$, 使得
> $$ F|_{\widetilde{W}}: \widetilde{W}\to V $$ 
> 是一个微分同胚, 设逆映射为$F^{-1}$. 我们$F^{-1}$作为$p$的局部坐标, 则对于任意的$\mathbf{s}= \left(s^{1},\cdots ,s^{n}\right)\in W$
> $$ \begin{aligned} \left(d F\right)_{\mathbf{s}}\left(\frac{\partial }{\partial s^{i}}\right)&= \left. \frac{\partial }{\partial s^{i}} \right|_{s^{i}}F= \frac{\partial }{\partial s^{i}}\varphi _{s^{i}}^{\left(i\right)}\left(\varphi _{s^{1}}^{\left(1\right)}\circ \cdots  \circ \widehat{\varphi_{s^{i}}^{\left(i\right)}}\circ \cdots \circ \varphi _{s^{n}}^{\left(n\right)}\left(p\right)\right)\\&= \left(X_{i}\right)_{F\left(\mathbf{s}\right)}  \end{aligned} $$ 
> 则
> $$ \frac{\partial }{\partial v^{i}}= \left(d F\right)\left(\frac{\partial }{\partial s^{i}}\right)= X_{i} $$ 



> [!exercise] Exercise: 4.2
> 设 $M$ 是 $n$ 维光滑流形, $\sigma : \mathfrak{X}(M) \times \mathfrak{X}(M) \to \mathfrak{X}(M)$ 是 2 重线性映射, 且它对每一个自变量是 $C^\infty(M)$-线性的. 证明: 必有以 $C^\infty$ 的方式在每一点 $p \in M$ 指定了一个 $(1,2)$ 型
> $$\sigma(p) : T_pM \times T_pM \to T_pM,$$
> 使得对任意的 $X_1, X_2 \in \mathfrak{X}(M)$ 有
> $$(\sigma(p))(X_1(p), X_2(p)) = (\sigma(X_1, X_2))(p).$$

> [!proof] Proof: 
> 首先证明逐点决定性: 若 $X_1(p) = 0$, 证明 $(\sigma(X_1, X_2))(p) = 0$.
> 
> 在 $p$ 的局部坐标邻域 $U$ 中, 记 $X_1 = \sum_{i=1}^n f^i \frac{\partial}{\partial x^i}$, 由 $X_1(p) = 0$ 知 $f^i(p) = 0$.
> 选取在 $p$ 的邻域内恒为 $1$, 支集包含于 $U$ 的截断函数 $\rho \in C^\infty(M)$.
> 记全局向量场 $E_i = \rho \frac{\partial}{\partial x^i}$, 则在 $p$ 的该邻域内有 $X_1 = \sum_{i=1}^n (\rho f^i) E_i$.
> 
> 由 $\sigma$ 对第一个变量的 $C^\infty(M)$-线性可知:
> $$ (\sigma(X_1, X_2))(p) = \left(\sigma\left(\sum_{i=1}^n (\rho f^i) E_i, X_2\right)\right)(p) = \sum_{i=1}^n (\rho f^i)(p) \cdot (\sigma(E_i, X_2))(p) $$ 
> 由于 $f^i(p) = 0$, 故 $(\sigma(X_1, X_2))(p) = 0$.
> 
> 由对称性, 对于第二个变量同理. 故 $(\sigma(X_1, X_2))(p)$ 的值仅依赖于 $X_1(p)$ 与 $X_2(p)$.
> 
> 现对于任意 $p \in M$ 及 $v_1, v_2 \in T_pM$, 任取满足 $X_1(p)=v_1, X_2(p)=v_2$ 的全局向量场 $X_1, X_2 \in \mathfrak{X}(M)$, 定义:
> $$ \sigma(p)(v_1, v_2) := (\sigma(X_1, X_2))(p) $$ 
> 
> 若取另一组延拓 $\tilde{X}_1, \tilde{X}_2$, 则 $(X_1 - \tilde{X}_1)(p) = 0$, $(X_2 - \tilde{X}_2)(p) = 0$. 由双线性有:
> $$ (\sigma(X_1, X_2) - \sigma(\tilde{X}_1, \tilde{X}_2))(p) = (\sigma(X_1 - \tilde{X}_1, X_2))(p) + (\sigma(\tilde{X}_1, X_2 - \tilde{X}_2))(p) = 0 $$ 
> 故 $\sigma(p)$ 的定义与向量场的选取无关, 从而 $\sigma(p): T_pM \times T_pM \to T_pM$ 是良定的.
> 
> 由定义即有 $(\sigma(p))(X_1(p), X_2(p)) = (\sigma(X_1, X_2))(p)$. 且因前提中 $\sigma(X_1,X_2) \in \mathfrak{X}(M)$, 故此映射以 $C^\infty$ 的方式依赖于 $p$.

> [!exercise] Exercise: 4.5
> 对于 $\alpha \in A^1(M)$, $X \in \mathfrak{X}(M)$, 定义映射 $\mathcal{L}_X \alpha : \mathfrak{X}(M) \to C^\infty(M)$ 为
> $$(\mathcal{L}_X \alpha)(Y) = X(\alpha(Y)) - \alpha([X,Y]), \quad \forall Y \in \mathfrak{X}(M),$$
> 证明: $\mathcal{L}_X \alpha \in A^1(M)$.

> [!proof] Proof: 
> 即说明
> $$ \mathcal{L}_{X}\left(f\alpha \right)= f \mathcal{L}_{X}\alpha  $$ 
>
> $$ \begin{aligned} \begin{aligned} \begin{aligned} \left(\mathcal{L}_{X}\alpha \right)\left(fY\right)&= X\left(\alpha \left(fY\right)\right)-\alpha \left(\left[ X,fY \right]\right)\\&= X\left(f\alpha \left(Y\right)\right)-\alpha \left(f\left[ X,Y \right]+ \left(Xf\right)Y\right)\\&= \left(Xf\right)\alpha \left(Y\right)+ f \left(X\left(\alpha \left(Y\right)\right)\right)-f\alpha \left(\left[ X,Y \right]\right)-\left(Xf\right)\alpha \left(Y\right)\\&= f \mathcal{L}_{X}\alpha  \end{aligned} \end{aligned} \end{aligned} $$ 
> 故$\mathcal{L}_{X}\alpha \in A^{1}\left(M\right)$.