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
