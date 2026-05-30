> [!exercise] **5.10**
> 令
> $$
> G=
> \left\{
> \begin{pmatrix}
> z^1 & z^2\\
> 0 & 1
> \end{pmatrix}
> : z^1,z^2\in\mathbb{C},\ z^1\ne 0
> \right\}.
> $$
> 假定
> $$
> z^1=x^1+\sqrt{-1}x^2,\qquad
> z^2=x^3+\sqrt{-1}x^4.
> $$
> 
> (1) 证明：$G$ 是一个 $4$ 维李群。
> 
> (2) 求李群 $G$ 的 Maurer-Cartan 形式（左不变微分式）。
> 
> (3) 求李群 $G$ 的结构常数。
> 
> (4) 求由
> $$
> \left.\frac{\partial}{\partial x^i}\right|_I,\qquad 1\le i\le 4
> $$
> 决定的单参数子群 $\theta_i(t)$，$1\le i\le 4$。

> [!proof] Proof: 
> (1) 首先证明$G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的代数子群, 我们计算
>  $$ \begin{pmatrix} z^{1}&z^{2}\\0&1 \end{pmatrix}\begin{pmatrix} w^{1}&w^{2}\\0&1 \end{pmatrix}= \begin{pmatrix} z^{1}w^{1}&z^{1}w^{2}+ z^{2}\\0&1 \end{pmatrix} $$
>  由于$z^{1},w^{1}\neq 0$, $z^{1}w^{1}\neq 0$, 故上式右侧属于$G$. 此外,  
> $$ \begin{pmatrix} z^{1}&z^{2}\\0&1 \end{pmatrix}^{-1} = \begin{pmatrix} \left(z^{1}\right)^{-1} &-\left(z^{1}\right)^{-1} z^{2}\\0&1 \end{pmatrix}\in G $$ 
> 故$G$是子群.  
> 
> 又注意到$G$是下面这个光滑映射
> $$ \begin{aligned} f:\operatorname{GL} \left(2,\mathbb{C} \right)&\to \mathbb{C} ^{2}\\\begin{pmatrix} z^{1}&z^{2}\\z^{3}&z^{4} \end{pmatrix}&\mapsto \begin{pmatrix} z^{3}&z^{4} \end{pmatrix} \end{aligned} $$ 
> 的正则水平集$G= f^{-1} \left(\left(0,1\right)\right)$.
> 故$G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的余$4$维的正则水平集, 故为一个$4$维的嵌入子流形. 因此$G$是一个$4$维李群.
> 
> (2) 由于$G$是矩阵李群, 它的Maurer-Cartan形式就是
> $$ \omega = g ^{-1} dg $$ 
> 也就是
> $$ \begin{aligned} \omega &= \begin{pmatrix} \left(z^{1}\right)^{-1} &-\left(z^{1}\right)^{-1} z^{2}\\0&1 \end{pmatrix}\begin{pmatrix} dz^{1}&dz^{2}\\0&0 \end{pmatrix}\\&= \begin{pmatrix}   \left(z^{1}\right)^{-1} dz^{1}&\left(z^{1}\right)^{-1} dz^{2}\\0&0\end{pmatrix} \end{aligned} $$ 
>
> (3) 先计算$G$的李代数$\mathfrak{g}$, 利用
> $$ \mathfrak{g}= \left\{ \gamma ^{\prime} \left(0\right): \gamma :\left(-\varepsilon ,\varepsilon \right)\to G,\gamma \left(0\right)= I \right\} $$ 
> 取$G$上的曲线
> $$ \gamma \left(t\right)= \begin{pmatrix} z^{1}\left(t\right)&z^{2}\left(t\right)\\0&1 \end{pmatrix} $$ 
> 则
> $$ \gamma ^{\prime} \left(0\right)= \begin{pmatrix} \left(z^{1}\right)^{\prime} \left(0\right)&\left(z^{2}\right)^{\prime} \left(0\right)\\0&0 \end{pmatrix} $$ 
> 因此
> $$ \mathfrak{g}= \left\{ \begin{pmatrix} z^{1}&z^{2}\\0&0 \end{pmatrix} : z^{1},z^{2}\in \mathbb{C} \right\} $$ 
> 令
> $$ E_1= \begin{pmatrix} 1&0\\0&0 \end{pmatrix},\quad E_2= \begin{pmatrix} i&0\\0&0 \end{pmatrix},\quad E_3= \begin{pmatrix} 0&1\\0&0 \end{pmatrix},\quad E_4= \begin{pmatrix} 0&i\\0&0 \end{pmatrix} $$ 
> 那么
> $$ \mathfrak{g}= \operatorname{span}\left\{ E_1,E_2,E_3,E_4 \right\} $$ 
> 我们有
> $$ \left[ E_1,E_{j} \right]= 0,\quad j= 2,3,4 $$ 
>
> $$ \left[ E_2,E_3 \right]= E_2E_3-E_3E_2= E_4 $$ 
> $$ \left[ E_2,E_4 \right]=E_2E_4-E_4E_2= -E_3 $$ 
> $$ \left[ E_3,E_4 \right]= E_4E_4-E_4E_3= 0 $$ 
> 于是非零的结构常数只有
> $$ c_{23}^{4}= -c_{32}^{4}= 1,\quad c_{24}^{3}= -c_{42}^{3}= -1 $$ 
> 其余为零.
>
> (4) 注意到$E_1^{k}= E_1,\forall k\in \mathbb{Z} _{\ge 1}$, 于是
> $$ \begin{aligned} \theta _1 \left(t\right)&= \exp \left(tE_1\right)= \sum _{ k= 0}^{\infty}\frac{1 }{k! }t^{k}\left(E_1\right)^{k}\\&= E_1\sum _{k = 0}^{\infty}\frac{1 }{k! }t^{k}+ \left(I-E_1\right) \end{aligned} $$ 


> [!exercise] **5.11**
> 设 $\theta: \mathbb{R} \to G$ 是 $r$ 维李群 $G$ 的一个单参数子群。命 $\theta'(0) = X \in T_e G$。定义映射 $\tilde{\psi}: \mathbb{R} \times G \to G$ 为
> $$\tilde{\psi}(t, g) = \theta(t) \cdot g,\quad \forall t \in \mathbb{R},\; g \in G.$$
> 证明：$\tilde{\psi}$ 是作用在 $G$ 上的单参数变换群，并且它所诱导的切向量场是由 $X \in T_e G$ 生成的右不变向量场。

> [!exercise] **5.12**
> 证明：李群 $G$ 的任意一个右不变向量场 $\tilde{X}$ 必定在李群 $G$ 上生成一个单参数变换群 $\psi: \mathbb{R} \times G \to G$，使得它在 $G$ 上所诱导的向量场恰好是右不变向量场 $\tilde{X}$ 本身。

> [!exercise] **5.13**
> 设 $G$ 是 $r$ 维李群，证明：每一个切向量 $X \in T_e G$ 唯一地决定了李群 $G$ 的一个单参数子群 $\theta: \mathbb{R} \to G$，使得 $\theta'(0) = X$，且
> $$\theta'(t) = \tilde{X}\bigl(\theta(t)\bigr),$$
> 其中 $\tilde{X} \in \mathfrak{X}(G)$ 是由 $X \in T_e G$ 决定的右不变向量场。

> [!exercise] **5.16**
> 设
> $$
> M=\mathbb{R}^2=\mathbb{C}
> =
> \left\{
> \binom{u}{1}
> \mid
> u=u^1+\sqrt{-1}u^2\in\mathbb{C}
> \right\},
> $$
> 并且设 $G$ 是习题 5.10 给出的 $4$ 维李群。定义 $G$ 在 $M$ 上的左作用是
> $$
> \varphi:G\times M\to M,
> $$
> 使得对于任意的
> $$
> g=
> \begin{pmatrix}
> z^1 & z^2\\
> 0 & 1
> \end{pmatrix}
> \in G,
> \qquad
> w=\binom{u}{1}\in M,
> $$
> 有
> $$
> \varphi(g,w)
> =
> \begin{pmatrix}
> z^1 & z^2\\
> 0 & 1
> \end{pmatrix}
> \binom{u}{1}
> =
> \binom{z^1u+z^2}{1}.
> $$
> 
> (1) 证明：$G$ 是左作用在 $M$ 上的李变换群。
> 
> (2) 求 $G$ 在 $M$ 上的左作用所产生的基本向量场。


