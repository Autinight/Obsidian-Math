---
type: definition
aliases: [Universal Covering]
---
> [!definition] Definition
> Let $p:\overline{X}\to X$ be a covering projection of connected spaces. Fix $x\in X$ and $\bar{x}\in\overline{X}$ such that $p(\bar{x})=x$. We say $p:\overline{X}\to X$ is **universal**, if for any given connected covering projection $q:Z\to X$, and an element $z\in Z$ such that $q(z)=x$, there is a unique map $f:\overline{X}\to Z$ such that, $p=q\circ f$ and $f(\bar{x})=z$.
> ```tikz
> \usetikzlibrary{arrows.meta}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>    % 定义节点
>    \node (Xbar) at (0, 2) {$\overline{X}$};
>    \node (Z) at (3, 2) {$Z$};
>    \node (X) at (1.5, 0) {$X$};
> 
>    % 绘制箭头连线
>    % Xbar -> Z (dashed, f)
>    \draw[->, dashed] (Xbar) -- (Z) node[midway, above] {$f$};
>    % Xbar -> X (p)
>    \draw[->] (Xbar) -- (X) node[midway, below left] {$p$};
>    % Z -> X (q)
>    \draw[->] (Z) -- (X) node[midway, below right] {$q$};
> \end{tikzpicture}
> \end{document}
> ```