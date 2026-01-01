
> [!exercise] Exercise: 
> 设 $M$ 是一个光滑流形, $\theta \in \Omega^1(M)$ 为恰当 1-形式.
> 
> a). 对任意 $k \in \mathbb{N}$, 设
> $$\begin{aligned}d_\theta: \Omega^k(M) &\to \Omega^{k+1}(M) \\ \omega &\mapsto d\omega + \theta \wedge \omega,\end{aligned}$$
> 证明: 对任意 $\omega \in \Omega^k(M)$, 有 $d_\theta(d_\theta \omega) = 0$.
> 
> b). 考虑复形
>  ```tikz
> \usetikzlibrary{arrows.meta, positioning}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>    % 定义节点位置
>    \node (start) {$0$};
>    \node (omega0) [right=1cm of start] {$\Omega^0(M)$};
>    \node (omega1) [right=1.5cm of omega0] {$\Omega^1(M)$};
>    \node (dots) [right=1.5cm of omega1] {$\dots$};
>    \node (omegam1) [right=1.5cm of dots] {$\Omega^{m-1}(M)$};
>    \node (omegam) [right=1.5cm of omegam1] {$\Omega^m(M)$};
>    \node (end) [right=1cm of omegam] {$0.$};
>    % 绘制箭头和标签
>    \draw[->] (start) -- (omega0);
>    \draw[->] (omega0) -- node[above] {$d_\theta$} (omega1);
>    \draw[->] (omega1) -- node[above] {$d_\theta$} (dots);
>    \draw[->] (dots) -- node[above] {$d_\theta$} (omegam1);
>    \draw[->] (omegam1) -- node[above] {$d_\theta$} (omegam);
>    \draw[->] (omegam) -- (end);
> \end{tikzpicture}
> \end{document}
> ```
>给出 $Z_\theta^k(M)$, $B_\theta^k(M)$ 和 $H_\theta^k(M)$ 的定义, 并证明: $H_\theta^k(M)$ 同构于 $H_{\operatorname{dR}}^k(M)$.

^twist-exterior-differention

> [!proof] Proof: 
> a). 
>  $$ \begin{aligned} d _{\theta }\left( d _{\theta }\omega \right)&= d _{\theta } \left(d \omega + \theta \wedge \omega \right)\\&= d \left(d\omega + \theta \wedge \omega \right)+ \theta \wedge \left(d\omega + \theta \wedge \omega \right) \\&= d\theta \wedge \omega - \theta \wedge d\omega +  \theta \wedge d\omega + \theta \wedge \theta \wedge \omega\\&= d\theta \wedge \omega  \end{aligned} $$
> 由于 $\theta$是恰当的, 特别地它是闭的,  $d\theta = 0$, 因此
>  $$ d _{\theta }\left(d _{\theta }\omega \right)= 0 $$
> b).
>  $$ Z_{\theta }^{k}\left(M\right)= \left\{ \omega \in \Omega ^{k}\left(M\right): d _{\theta }\left(\omega \right)= 0 \right\} $$   
>  $$ B_{\theta }^{k}\left(M\right)= \left\{ \omega \in \Omega ^{k}\left(M\right): \omega \in d _{\theta } \left(\Omega ^{k-1}\left(M\right)\right) \right\} $$ 
>  $$ H_{\theta }^{k}\left(M\right)=  Z_{\theta }^{k}\left(M\right)/ B_{\theta }^{k}\left(M\right) $$ 
>   设 $\theta = d\tau$, 定义$\Phi :Z_{\mathrm{dR}}^{k}\left(M\right)\mapsto H_{\theta }^{k}\left(M\right)$
>  $$ \Phi \left(\omega  \right)= e^{-\tau }\omega +  B_{\theta }^{k}\left(M\right) $$ 
>   $$ d _{\theta }\left(e^{-\tau }\omega \right)= -e^{-\tau }\theta \wedge \omega + e^{-\tau }d\omega + \theta \wedge e^{-\tau }\omega = 0 $$
> 因此 $\Phi \left(\omega \right)$是良定义的. 
> 为了说明$\Phi$是满的, 任取 $\omega\in Z_{\theta }^{k}\left(M\right)$, 则 
>  $$ d\left(e^{\tau }\omega\right)= d _{\theta }\left(e^{\tau }\omega \right)-\theta \wedge e^{\tau }\omega = e^{\tau }\theta \wedge \omega + e^{\tau }\,\mathrm{d} _{\theta }\omega -\theta \wedge e^{\tau }\omega = 0  $$
> 因此 $e^{\tau }\omega \in Z_{\mathrm{dR}}^{k}\left(M\right)$,$\Phi \left(e^{\tau }\omega \right)=\omega$ 故 $\Phi$是满的.
>   此外, 若存在 $\eta  \in \Omega^{k-1}\left(M\right)$, 使得
>  $$ e^{-\tau }\omega = d _{\theta }\eta = d  \eta +  \theta \wedge \eta  $$ 
> 则 
>  $$ \omega = e^{\tau }\left(d  \eta +  d \tau \wedge  \eta \right)= d \left(e^{\tau }\eta \right) \in B_{\mathrm{dR}}^{k}\left(M\right)$$
> 这表明 $\operatorname{ker}\Phi = B_{\mathrm{dR}}^{k}\left(M\right)$. 因此由群同构定理,
>  $$ H_{\mathrm{dR}}^{k}\left(M\right)\simeq H_{\theta }^{k}\left(M\right) $$  


> [!exercise] Exercise:
> 对任意 $n\in\mathbb{N}$, 设 $M=\mathbb{R}^n\setminus\{e_1,-e_1\}$, 求 de Rham 上同调群 $H_{\operatorname{dR}}^k(M)$. 当 $H_{\operatorname{dR}}^k(M)\not\cong\{0\}$ 时, 显式给出一组微分形式使其的上同调类构成 $H_{\operatorname{dR}}^k(M)$ 的一组基.

> [!proof] Proof: 
> 当 $n\ge 2$时, 
> 令$U= M\cap \left\{ \left(x_1,\cdots ,x_{n}\right): x_1> -\frac{1}{2} \right\}$, $V= M\cap \left\{ \left(x_1,\cdots ,x_{n}\right): x_1< \frac{1}{2} \right\}$. 则
> $$ M= U\cup V,\quad U\cap V $$ 
> $U$,$V$都同伦于 $\mathbb{S}^{n-1}$, 
>  $$ U\cap V= \left\{ \left(x_1,\cdots ,x_{n}\right) : -\frac{1}{2}< x_1< \frac{1}{2} \right\} \simeq \mathbb{R} ^{n}$$ 
> 由Mayer-Vietoris, 存在长正合列
> $$
> \begin{aligned}
>\xrightarrow{\delta} H_{\operatorname{dR}}^p(M) \xrightarrow{k^* \oplus l^*} H_{\operatorname{dR}}^p(U) \oplus H_{\operatorname{dR}}^p(V) \xrightarrow{i^* - j^*} & H_{\operatorname{dR}}^p(U \cap V) \\
> & \xrightarrow{\delta} H_{\operatorname{dR}}^{p+1}(M) \xrightarrow{k^* \oplus l^*} 
> \end{aligned}
> $$
> 对于 $k\ge 1$,
>  $$ H_{\mathrm{dR}}^{k-1}\left(U\cap V\right)\xrightarrow{\delta }H_{\mathrm{dR}}^{k}\left(M\right)\xrightarrow{k^{*}\oplus l^{*}}H_{\mathrm{dR}}^{k}\left(U\right)\oplus H_{\mathrm{dR}}^{k}\left(V\right)\to 0  $$ 
> 其中当 $k> 1$时, $H_{\mathrm{dR}}^{k-1}\left(U\cap V\right)= 0$, 当 $k= 1$时, 考虑到
>  
> $$ H_{\mathrm{dR}}^{0}\left(U\right)\oplus H_{\mathrm{dR}}^{0}\left(V\right)\xrightarrow{i^{*}-j^{*}} H_{\mathrm{dR}}^{0}\left(U\cap V\right)\xrightarrow{\delta }   $$
> 其中 $\left(i^{*}-j^{*}\right)\left(a,b\right)= a-b$是满射, 故 $\operatorname{ker}\delta =\mathbb{R}$,
>   $\operatorname{Im}\delta = 0$, 因此当 $k\ge 1$时, 总有
> $$ H_{\mathrm{dR}}^{k}\left(M\right)\simeq H_{\mathrm{dR}}^{k} \left(U\right)\oplus H_{\mathrm{dR}}^{k}\left(V\right)$$
> 故当 $n\ge 2$时, $M$连通, 我们有
>  $$ H_{\mathrm{dR}}^{k}\left(M\right)\simeq \begin{cases} \mathbb{R} ,&k= 0\\\mathbb{R} ^{2},&k= n-1\\0,&\text{otherwise} \end{cases}  $$  
> 当 $n = 1$时,  $M$有三个连通分支, 我们有
>  $$ H_{\mathrm{dR}}^{k}\left(M\right)\simeq \begin{cases} \mathbb{R} ^{3},&k= 0\\0,&\text{otherwise} \end{cases}  $$ 
> 当$k= 0$时,  $H_{\mathrm{dR}}^{k}\left(M\right)$的基有在连通分支上取常值的函数的同调类给出. 考虑 $n\ge 2$时 $H_{\mathrm{dR}}^{n-1}\left(M\right)$, 令
>  $$ \eta _1 = \frac{1 }{\left| x-e_1 \right|^{n}  }\sum _{i= 1}^{n}\left(-1\right)^{i-1}\left(x_{i}-\delta _{i}^{1}\right)d x^{1}\wedge \cdots \widehat{dx^{i}}\wedge \cdots \wedge dx^{n} $$
>  $$ \eta _2 = \frac{1 }{\left| x+ e_1 \right|^{n}  }\sum _{i= 1}^{n}\left(-1\right)^{i-1}\left(x_{i}+ \delta _{i}^{1}\right)dx^{1}\wedge \cdots   \widehat{dx^{i}}\wedge \cdots \wedge dx^{n} $$ 
> 则 $d \eta _1= 0$, $d \eta _2 = 0$. 则 $\eta _1$以 $e_1$为中心的单位球上积分不为零,  $\eta _2$在以 $-e_1$为中心的单位球上积分不为零. 故
> $$ H_{\mathrm{dR}}^{n-1}\left(U\right)= \left< [\eta _1 ] \right>,\quad H_{\mathrm{dR}}^{n-1}\left(V\right)= \left< \left[ \eta _2  \right] \right> $$
> 因此 $\left[ \eta _1  \right], \left[ \eta _2  \right]$构成 $H_{\mathrm{dR}}^{n-1}\left(M\right)\simeq H_{\mathrm{dR}}^{n-1}\left(U\right)\oplus H _{\mathrm{dR}}^{n-1}\left(V\right)$的一组基.


> [!exercise] Exercise: 
> 设 $M_1,M_2$ 是维数 $n\geqslant 3$ 的连通光滑流形, 令 $M_1\#M_2$ 为它们的**光滑连通和**. **光滑连通和**: 对 $i=1,2$, 令 $U_i$ 是以点 $p_i\in M_i$ 为中心, 同胚于欧氏空间的邻域, 并设 $M_i'=M_i\setminus U_i$, 选取微分同胚 $\varphi:\partial M_1'\to\partial M_2'$, 沿边界粘贴 $M_1',M_2'$ 得到的光滑流形 $M_1\#M_2$.
> 
> a). 证明: 当 $0<p<n-1$ 时, 有
> $$H_{\operatorname{dR}}^p(M_1\#M_2)\cong H_{\operatorname{dR}}^p(M_1)\oplus H_{\operatorname{dR}}^p(M_2)$$
> 
> b). 证明: 若 $M_1$ 和 $M_2$ 均为紧致且可定向的, 则上述同构对 $p=n-1$ 也成立.

> [!proof] Proof: 
> **几何构造与开覆盖选取**
> 根据 GTM 218 Theorem 9.29 (Attaching Smooth Manifolds Along Their Boundaries).光滑连通和 $M=M_1 \# M_2$ 可以被分解为两个闭子流形 $\widetilde{M_1}$ 和 $\widetilde{M_2}$ 的并集, 其中:
> $$\begin{aligned} \widetilde{M_1} \cong M_1' = M_1 \setminus U_1, \quad \widetilde{M_2} \cong M_2' = M_2 \setminus U_2 \end{aligned}$$
> 且它们的公共部分为边界:
> $$\widetilde{M_1} \cap \widetilde{M_2} = \partial \widetilde{M_1} = \partial \widetilde{M_2} \cong \partial M_1' \cong \mathbb{S}^{n-1}$$
> 为了应用 Mayer-Vietoris 定理, 我们利用边界的collar neighborhood 构造开覆盖:
> 令 $U$ 为 $\widetilde{M_1}$ 沿边界向 $\widetilde{M_2}$ 内部延伸得到的开集, $V$ 为 $\widetilde{M_2}$ 沿边界向 $\widetilde{M_1}$ 内部延伸得到的开集. 由同伦等价性可知:
> $$U \simeq \widetilde{M_1} \cong M_1 \setminus \{p_1\}, \quad V \simeq \widetilde{M_2} \cong M_2 \setminus \{p_2\}$$
> 且它们的交集收缩为边界:
> $$U \cap V \simeq \mathbb{S}^{n-1}$$
>
> **Lemma : $H^*(M_i)$ 与 $H^*(M_i \setminus \{p_i\})$ 的关系**
> 对 $M_i = (M_i \setminus \{p_i\}) \cup D_i$ ($D_i$ 为开圆盘) 应用 M-V 序列. 注意到 $U_i \cap (M_i \setminus \{p_i\}) \simeq \mathbb{S}^{n-1}$.
> 当 $0 < p < n$ 时, 有正合列:
> $$H^{p-1}(\mathbb{S}^{n-1}) \to H^p(M_i) \to H^p(M_i \setminus \{p_i\}) \oplus H^p(D_i) \to H^p(\mathbb{S}^{n-1})$$
> 代入 $H^p(D_i)=0$ 以及球面的上同调:
> *   当 $0 < p < n-1$ 时, $H^{p-1}(\mathbb{S}^{n-1})=0, H^p(\mathbb{S}^{n-1})=0$. 故 **$H^p(M_i) \cong H^p(M_i \setminus \{p_i\})$**.
> *   当 $p = n-1$ 时, 序列变为 $0 \to H^{n-1}(M_i) \to H^{n-1}(M_i \setminus \{p_i\}) \xrightarrow{\delta} H^n(D_i)=0$ .  若 $M_i$ 紧致可定向, $H^n(M_i) \cong \mathbb{R}$, 连接同态 $H^{n-1}(\mathbb{S}^{n-1}) \to H^n(M_i)$ 是同构, 迫使前序映射为零. 故此处 **$H^{n-1}(M_i) \cong H^{n-1}(M_i \setminus \{p_i\})$** 依然成立.
>
> **a). $0 < p < n-1$**
> 对 $M = U \cup V$ 应用 M-V 序列:
> $$\cdots \to H^{p-1}(U \cap V) \to H^p(M) \to H^p(U) \oplus H^p(V) \to H^p(U \cap V) \to \cdots$$
> 由于 $U \cap V \simeq \mathbb{S}^{n-1}$, 当 $0 < p < n-1$ 时, 两端均为 $0$. 结合之前的同构:
> $$H^p(M) \cong H^p(U) \oplus H^p(V) \cong H^p(M_1 \setminus \{p_1\}) \oplus H^p(M_2 \setminus \{p_2\}) \cong H^p(M_1) \oplus H^p(M_2)$$
>
> **b). $p = n-1$ (紧致可定向)**
> 此时 M-V 序列片段为:
> $$H^{n-2}(\mathbb{S}^{n-1}) \to H^{n-1}(M) \to H^{n-1}(U) \oplus H^{n-1}(V) \xrightarrow{\Phi} H^{n-1}(\mathbb{S}^{n-1}) \xrightarrow{\Psi} H^n(M)$$
> *   $H^{n-2}(\mathbb{S}^{n-1}) = 0$.
> *   因为 $M_1, M_2$ 紧致可定向, $M$ 亦紧致可定向, 故 $H^n(M) \cong \mathbb{R}$. 连接同态 $\Psi: H^{n-1}(\mathbb{S}^{n-1}) \to H^n(M)$ 实际上是将边界的体积元映射为流形的体积元, 这是一个同构.
> *   因为 $\Psi$ 是同构(单射), 所以 $\operatorname{Im}(\Phi) = \operatorname{Ker}(\Psi) = 0$. 即 $\Phi$ 是零映射.
> 
> 于是得到短正合列:
> $$0 \to H^{n-1}(M) \xrightarrow{\cong} H^{n-1}(U) \oplus H^{n-1}(V) \to 0$$
> 再次利用步骤 2 中的结论 $H^{n-1}(U) \cong H^{n-1}(M_1)$ (对 $M_2$ 同理), 得到:
> $$H^{n-1}(M) \cong H^{n-1}(M_1) \oplus H^{n-1}(M_2)$$

> [!exercise] Exercise: 
> 设 $M$ 是一个光滑紧致定向流形, $\mu$ 是 $M$ 上的一个体积形式, $X$ 是 $M$ 上的一个光滑向量场. 则 $\mathcal{L}_X\mu$ 仍是 $M$ 上的一个光滑 $n$-形式. $X$ 关于体积形式 $\mu$ 的散度是满足 $\mathcal{L}_X\mu=\operatorname{div}_\mu(X)\mu$ 的函数 $\operatorname{div}_\mu(X)$.
> 
> a). 求 $\operatorname{div}_\mu(X)$ 在局部坐标下的表达式.
> 
> b). 证明: 对任意 $f\in C^\infty(M)$,
> $$\begin{aligned}\operatorname{div}_\mu(fX)=f\operatorname{div}_\mu(X)+X(f).\end{aligned}$$
> 
> c). 证明高斯公式:
> $$\begin{aligned}\int_M(\operatorname{div}_\mu X)\mu=\int_{\partial M}\iota_X\mu.\end{aligned}$$
> 
> d). 若 $\operatorname{div}_\mu(X)=0$, 则称向量场 $X$ 是**无散的**. 证明: 若 $M$ 是紧致无边流形 (即 $\partial M=\emptyset$), 且 $X$ 是 $M$ 上的无散向量场, 那么对于任意 $f,g\in C^\infty(M)$, 有
> $$\begin{aligned}\int_M X(f)g\mu=-\int_M fX(g)\mu.\end{aligned}$$


> [!proof] Proof: 
> 
>  a). 
> 
> 取局部坐标系 $(U, x^1, \dots, x^n)$, 令 $\mu = \rho dx^1 \wedge \dots \wedge dx^n$, 其中 $\rho > 0$. 设 $X = \sum X^i \frac{\partial}{\partial x^i}$.
> 由李导数的导子性质及 $\mathcal{L}_X(dx^i) = d(X^i)$, 
> $$
> \begin{aligned}
> \mathcal{L}_X \mu &= \mathcal{L}_X(\rho dx^1 \wedge \dots \wedge dx^n) \\
> &= (\mathcal{L}_X \rho) dx^1 \wedge \dots \wedge dx^n + \rho \sum_{i=1}^n dx^1 \wedge \dots \wedge d(X^i) \wedge \dots \wedge dx^n \\
> &= \left( \sum_{k} X^k \frac{\partial \rho}{\partial x^k} \right) dx^1 \wedge \dots \wedge dx^n + \rho \sum_{i=1}^n \frac{\partial X^i}{\partial x^i} dx^1 \wedge \dots \wedge dx^n \\
> &= \sum_{i=1}^n \left( X^i \frac{\partial \rho}{\partial x^i} + \rho \frac{\partial X^i}{\partial x^i} \right) dx^1 \wedge \dots \wedge dx^n \\
> &= \frac{1}{\rho} \sum_{i=1}^n \frac{\partial (\rho X^i)}{\partial x^i} \mu.
> \end{aligned}
> $$
> 故得
> $$
> \begin{aligned}
> \operatorname{div}_\mu(X) = \frac{1}{\rho} \sum_{i=1}^n \frac{\partial (\rho X^i)}{\partial x^i}.
> \end{aligned}
> $$
> 
> b).
> 
> 利用 Cartan 公式 $\mathcal{L}_Y = d \circ \iota_Y + \iota_Y \circ d$. 因 $\mu$ 为体积形式, $d\mu=0$, 故 $\mathcal{L}_Y \mu = d(\iota_Y \mu)$.
> 取 $Y=fX$, 则 $\iota_{fX}\mu = f\iota_X\mu$.
> 展开 $d(f\iota_X\mu)$:
> $$
> \begin{aligned}
> \mathcal{L}_{fX} \mu &= d(f \iota_X \mu) \\
> &= df \wedge (\iota_X \mu) + f d(\iota_X \mu).
> \end{aligned}
> $$
> 注意到 $f d(\iota_X \mu) = f \mathcal{L}_X \mu = f (\operatorname{div}_\mu X) \mu$.
> 对于第一项, 考虑恒等式 $\iota_X(df \wedge \mu) = (\iota_X df)\mu - df \wedge (\iota_X \mu)$.
> 因 $df \wedge \mu$ 为 $(n+1)$-形式, 必为 $0$, 故 $df \wedge (\iota_X \mu) = (\iota_X df)\mu = X(f)\mu$.
> 代回原式
> $$
> \begin{aligned}
> (\operatorname{div}_\mu(fX)) \mu &= X(f)\mu + f(\operatorname{div}_\mu X)\mu.
> \end{aligned}
> $$
> 消去 $\mu$ 即得证.
> 
>  c)
> 
> 由定义及 Cartan 公式
> $$
> \begin{aligned}
> (\operatorname{div}_\mu X)\mu &= \mathcal{L}_X \mu = d(\iota_X \mu).
> \end{aligned}
> $$
> 在 $M$ 上积分, 应用 Stokes 定理
> $$
> \begin{aligned}
> \int_M (\operatorname{div}_\mu X)\mu &= \int_M d(\iota_X \mu) = \int_{\partial M} \iota_X \mu.
> \end{aligned}
> $$
> 
>  d).
> 
> 由 b) 中结论, 取向量场为 $fgX$
> $$
> \begin{aligned}
> \operatorname{div}_\mu(fgX) &= fg\operatorname{div}_\mu(X) + X(fg).
> \end{aligned}
> $$
> 已知 $\operatorname{div}_\mu X = 0$, 且 $X$ 为导子, 故
> $$
> \begin{aligned}
> \operatorname{div}_\mu(fgX) &= X(f)g + fX(g).
> \end{aligned}
> $$
> 两边同乘 $\mu$ 并积分. 由 c) 中高斯公式及 $\partial M = \emptyset$
> $$
> \begin{aligned}
> \int_M (X(f)g + fX(g))\mu &= \int_M \operatorname{div}_\mu(fgX)\mu \\
> &= \int_{\partial M} \iota_{fgX}\mu = 0.
> \end{aligned}
> $$
> 移项即得:
> $$
> \begin{aligned}
> \int_M X(f)g\mu &= -\int_M fX(g)\mu.
> \end{aligned}
> $$

