---
type: theorem
aliases: [the Exact Sequence of Normal Covering]
---
> [!theorem] Theorem:
> Let $p:\overline{X}\to X$ be a connected normal covering, $\bar{x}\in\overline{X}$ be such that $p(\bar{x})=x\in X$. Then we have an exact sequence of groups and homomorphisms:
> ```tikz
> \usetikzlibrary{positioning}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>    % 定义节点
>    \node (1) {1};
>    \node (2) [right=0.8cm of 1] {$\pi_1(\overline{X}, \bar{x})$};
>    \node (3) [right=1.5cm of 2] {$\pi_1(X, x)$};
>    \node (4) [right=1.5cm of 3] {$G(p)$};
>    \node (5) [right=0.8cm of 4] {$1.$};
> 
>    % 绘制箭头和标签
>    \draw[->] (1) -- (2);
>    \draw[->] (2) -- node[above] {$p_\#$} (3);
>    \draw[->] (3) -- node[above] {$\Psi$} (4);
>    \draw[->] (4) -- (5);
> \end{tikzpicture}
> \end{document}
> ```

> [!proof] Proof: 
> Put [[lem - Deck Transformation and Right Cosets|Deck Transformation and Right Cosets]] $\Psi =  \Phi ^{-1} q$, where $q: \pi _1 \left(X,x\right)/ \pi _1 \left(\overline{X},\bar{x}\right )$ is the quotient map.