---
type: theorem
aliases: [Even Action and Covering]
---
> [!theorem] Theorem: 
> Let a group $G$ act [[dfn - Even Action|evenly]] on a topological space $E$. Let $B$ denote the quotient space consisting of all orbits $\{[e]:e\in E\}$ and let $q:E\to B$ be the quotient map. Then $q$ is a normal covering projection. If $E$ is connected, then the group of covering transformations of $q$ is isomorphic to $G$. Further, there is an exact sequence of groups and homomorphisms:
> ```tikz
> \usetikzlibrary{positioning}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick, node distance=0.8cm]
>     % 定义节点
>     \node (A) {$(1)$};
>     \node (B) [right=of A] {$q_\#(\pi_1(E))$};
>     \node (C) [right=of B] {$\pi_1(B)$};
>     \node (D) [right=1.0cm of C] {$G$}; % 稍微增加距离以容纳上方标签
>     \node (E) [right=of D] {$(1).$};
> 
>     % 绘制箭头
>     \draw[->] (A) -- (B);
>     \draw[->] (B) -- (C);
>     \draw[->] (C) -- node[above] {$\psi$} (D);
>     \draw[->] (D) -- (E);
> \end{tikzpicture}
> \end{document}
> ```