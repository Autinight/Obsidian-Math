---
type: proposition
aliases: [Properties of the Exponential Map]
---
> [!proposition] Properties of the Exponential Map
> Let $G$ be a Lie group and let $\mathfrak{g}$ be its Lie algebra.
>
> * (a) The exponential map is a smooth map from $\mathfrak{g}$ to $G$.
> * (b) For any $X \in \mathfrak{g}$ and $s, t \in \mathbb{R}$, $\operatorname{exp}(s+t)X = \operatorname{exp} sX \operatorname{exp} tX$.
> * (c) For any $X \in \mathfrak{g}$, $(\operatorname{exp} X)^{-1} = \operatorname{exp}(-X)$.
> * (d) For any $X \in \mathfrak{g}$ and $n \in \mathbb{Z}$, $(\operatorname{exp} X)^n = \operatorname{exp}(nX)$.
> * (e) The differential $(d \operatorname{exp})_0: T_0\mathfrak{g} \to T_eG$ is the identity map, under the canonical identifications of both $T_0\mathfrak{g}$ and $T_eG$ with $\mathfrak{g}$ itself.
> * (f) The exponential map restricts to a diffeomorphism from some neighborhood of $0$ in $\mathfrak{g}$ to a neighborhood of $e$ in $G$.
> * (g) If $H$ is another Lie group, $\mathfrak{h}$ is its Lie algebra, and $\Phi: G \to H$ is a Lie group homomorphism, the following diagram commutes:
>  ```tikz
> \usepackage{amssymb}
> \usepackage{amsmath}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>    % 定义节点
>    \node (g_alg) at (0, 2.5) {$\mathfrak{g}$};
>    \node (h_alg) at (3, 2.5) {$\mathfrak{h}$};
>    \node (G) at (0, 0) {$G$};
>    \node (H) at (3, 0) {$H$};
> 
>    % 绘制箭头和标签
>    \draw[->] (g_alg) -- node[above] {$\Phi_*$} (h_alg);
>    \draw[->] (g_alg) -- node[left] {$\operatorname{exp}$} (G);
>    \draw[->] (h_alg) -- node[right] {$\operatorname{exp}$} (H);
>    \draw[->] (G) -- node[below] {$\Phi$} (H);
> \end{tikzpicture}
> \end{document}
> ```
> * (h) The flow $\theta$ of a left-invariant vector field $X$ is given by $\theta_t = R_{\operatorname{exp} tX}$ (right multiplication by $\operatorname{exp} tX$).