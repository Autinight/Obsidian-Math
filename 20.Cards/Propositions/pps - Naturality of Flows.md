---
type: proposition
aliases: [Naturality of Flows]
---
> [!proposition] Proposition: Naturality of Flows
> Suppose $M$ and $N$ are smooth manifolds, $F: M \to N$ is a smooth map, $X \in \mathfrak{X}(M)$, and $Y \in \mathfrak{X}(N)$. Let $\theta$ be the flow of $X$ and $\eta$ the flow of $Y$. If $X$ and $Y$ are $F$-related, then for each $t \in \mathbb{R}$, $F(M_t) \subseteq N_t$ and $\eta_t \circ F = F \circ \theta_t$ on $M_t$:
> ```tikz
> % 引入 amsmath 以支持更好的数学公式排版
> \usepackage{amsmath}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>     % 定义四个节点，设置坐标位置 (x, y)
>     % 左上角 M_t
>     \node (Mt) at (0, 2.5) {$M_t$};
>     % 右上角 N_t
>     \node (Nt) at (3, 2.5) {$N_t$};
>     % 左下角 M_{-t}
>     \node (M_nt) at (0, 0) {$M_{-t}$};
>     % 右下角 N_{-t}. (注意包含句号)
>     \node (N_nt) at (3, 0) {$N_{-t}.$};
> 
>     % 绘制箭头和标签
>     % 上方箭头 F，标签在上方
>     \draw[->] (Mt) -- node[above] {$F$} (Nt);
>   
>     % 下方箭头 F，标签在下方
>     \draw[->] (M_nt) -- node[below] {$F$} (N_nt);
>   
>     % 左侧箭头 theta_t，标签在左侧
>     \draw[->] (Mt) -- node[left] {$\theta_t$} (M_nt);
>   
>     % 右侧箭头 eta_t，标签在右侧
>     \draw[->] (Nt) -- node[right] {$\eta_t$} (N_nt);
> \end{tikzpicture}
> \end{document}
> ```