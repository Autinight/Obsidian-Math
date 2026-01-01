---
type: theorem
aliases: [Classification of Dynkin Diagrams]
---
> [!theorem] Theorem:
> Given an irreducible root system $R$, the unlabelled Dynkin diagram associated to $R$ is either a member of one of the four families
> ```tikz
> \usetikzlibrary{calc}
> \begin{document}
> \begin{tikzpicture}[
>     scale=0.9,
>     every node/.style={transform shape},
>     % 定义节点样式：圆形，描边，白色填充
>     dynnode/.style={circle, draw, thick, fill=white, inner sep=0pt, minimum size=6pt},
>     % 定义通用线宽
>     thick
> ]
> 
>     %% Row 1: A_ell
>     \node[anchor=east] at (-1, 0) {$A_\ell$ for $\ell \ge 1$:};
>     % 左侧节点
>     \node[dynnode] (a1) at (0, 0) {};
>     \node[dynnode] (a2) at (1.5, 0) {};
>     \draw (a1) -- (a2);
>     \draw (a2) -- (2.5, 0); % 伸向省略号的线
>     % 省略号
>     \node at (3.25, 0) {$\cdots$};
>     % 右侧节点
>     \draw (4, 0) -- (5, 0); % 来自省略号的线
>     \node[dynnode] (a3) at (5, 0) {};
>     \node[dynnode] (a4) at (6.5, 0) {};
>     \draw (a3) -- (a4);
> 
>     %% Row 2: B_ell
>     \begin{scope}[yshift=-1.5cm]
>         \node[anchor=east] at (-1, 0) {$B_\ell$ for $\ell \ge 2$:};
>         % 左侧
>         \node[dynnode] (b1) at (0, 0) {};
>         \node[dynnode] (b2) at (1.5, 0) {};
>         \draw (b1) -- (b2);
>         \draw (b2) -- (2.5, 0);
>         % 省略号
>         \node at (3.25, 0) {$\cdots$};
>         % 右侧
>         \draw (4, 0) -- (5, 0);
>         \node[dynnode] (b3) at (5, 0) {};
>         \node[dynnode] (b4) at (6.5, 0) {};
>         % 双线
>         \draw ([yshift=2pt]b3.east) -- ([yshift=2pt]b4.west);
>         \draw ([yshift=-2pt]b3.east) -- ([yshift=-2pt]b4.west);
>         % 箭头 >
>         \draw (5.6, 0.2) -- (5.9, 0) -- (5.6, -0.2);
>     \end{scope}
> 
>     %% Row 3: C_ell
>     \begin{scope}[yshift=-3.0cm]
>         \node[anchor=east] at (-1, 0) {$C_\ell$ for $\ell \ge 3$:};
>         % 左侧
>         \node[dynnode] (c1) at (0, 0) {};
>         \node[dynnode] (c2) at (1.5, 0) {};
>         \draw (c1) -- (c2);
>         \draw (c2) -- (2.5, 0);
>         % 省略号
>         \node at (3.25, 0) {$\cdots$};
>         % 右侧
>         \draw (4, 0) -- (5, 0);
>         \node[dynnode] (c3) at (5, 0) {};
>         \node[dynnode] (c4) at (6.5, 0) {};
>         % 双线
>         \draw ([yshift=2pt]c3.east) -- ([yshift=2pt]c4.west);
>         \draw ([yshift=-2pt]c3.east) -- ([yshift=-2pt]c4.west);
>         % 箭头 <
>         \draw (5.9, 0.2) -- (5.6, 0) -- (5.9, -0.2);
>     \end{scope}
> 
>     %% Row 4: D_ell
>     \begin{scope}[yshift=-4.5cm]
>         \node[anchor=east] at (-1, 0) {$D_\ell$ for $\ell \ge 4$:};
>         % 左侧
>         \node[dynnode] (d1) at (0, 0) {};
>         \node[dynnode] (d2) at (1.5, 0) {};
>         \draw (d1) -- (d2);
>         \draw (d2) -- (2.5, 0);
>         % 省略号
>         \node at (3.25, 0) {$\cdots$};
>         % 右侧
>         \draw (4, 0) -- (5, 0);
>         \node[dynnode] (d3) at (5, 0) {};
>         % 分支
>         \node[dynnode] (d4_top) at (6.5, 0.6) {};
>         \node[dynnode] (d4_bot) at (6.5, -0.6) {};
>         \draw (d3) -- (d4_top);
>         \draw (d3) -- (d4_bot);
>     \end{scope}
> 
> \end{tikzpicture}
> \end{document}
> ``` 
> where each of the diagrams above has $\ell$ vertices, or one of the five exceptional diagrams
> ```tikz
> \usetikzlibrary{calc, arrows.meta}
> 
> \begin{document}
> \begin{tikzpicture}[>=latex, thick, 
>     every node/.style={circle, draw, minimum size=5pt, inner sep=0pt, fill=white},
>     label_node/.style={draw=none, fill=none, rectangle, anchor=east, font=\large}
> ]
> 
>     % Grid settings
>     \def\h{1.0} % Horizontal spacing between nodes
>     \def\v{1.5} % Vertical spacing between rows
> 
>     % --- E6 ---
>     \begin{scope}[yshift=0cm]
>         \node[label_node] at (-0.5, 0) {$E_6:$};
>         % Horizontal nodes
>         \foreach \x in {0,1,2,3,4} {
>             \node (e6-\x) at (\x*\h, 0) {};
>         }
>         % Vertical node
>         \node (e6-top) at (2*\h, 1.0) {};
>       
>         % Edges
>         \foreach \x [count=\xi] in {0,1,2,3} {
>             \draw (e6-\x) -- (e6-\xi);
>         }
>         \draw (e6-2) -- (e6-top);
>     \end{scope}
> 
>     % --- E7 ---
>     \begin{scope}[yshift=-\v cm]
>         \node[label_node] at (-0.5, 0) {$E_7:$};
>         % Horizontal nodes
>         \foreach \x in {0,1,2,3,4,5} {
>             \node (e7-\x) at (\x*\h, 0) {};
>         }
>         % Vertical node
>         \node (e7-top) at (2*\h, 1.0) {};
>       
>         % Edges
>         \foreach \x [count=\xi] in {0,1,2,3,4} {
>             \draw (e7-\x) -- (e7-\xi);
>         }
>         \draw (e7-2) -- (e7-top);
>     \end{scope}
> 
>     % --- E8 ---
>     \begin{scope}[yshift=-2*\v cm]
>         \node[label_node] at (-0.5, 0) {$E_8:$};
>         % Horizontal nodes
>         \foreach \x in {0,1,2,3,4,5,6} {
>             \node (e8-\x) at (\x*\h, 0) {};
>         }
>         % Vertical node
>         \node (e8-top) at (2*\h, 1.0) {};
>       
>         % Edges
>         \foreach \x [count=\xi] in {0,1,2,3,4,5} {
>             \draw (e8-\x) -- (e8-\xi);
>         }
>         \draw (e8-2) -- (e8-top);
>     \end{scope}
> 
>     % --- F4 ---
>     \begin{scope}[yshift=-3*\v cm]
>         \node[label_node] at (-0.5, 0) {$F_4:$};
>         % Nodes
>         \foreach \x in {0,1,2,3} {
>             \node (f4-\x) at (\x*\h, 0) {};
>         }
>       
>         % Edges
>         \draw (f4-0) -- (f4-1);
>         \draw (f4-2) -- (f4-3);
>       
>         % Double Edge with Arrow
>         \draw[double, double distance=2.5pt] (f4-1) -- (f4-2);
>       
>         % Manually draw the arrow head in the middle
>         \coordinate (mid) at ($(f4-1)!0.5!(f4-2)$);
>         \draw[thick] ($(mid)+(-0.15, 0.2)$) -- (mid) -- ($(mid)+(-0.15, -0.2)$);
>     \end{scope}
> 
>     % --- G2 ---
>     \begin{scope}[yshift=-4*\v cm]
>         \node[label_node] at (-0.5, 0) {$G_2:$};
>         % Nodes
>         \node (g2-0) at (0, 0) {};
>         \node (g2-1) at (1*\h, 0) {};
>       
>         % Triple Edge
>         % We draw one center line and two offset lines manually to ensure they connect cleanly to the circles
>         \draw (g2-0) -- (g2-1); 
>         \draw ($(g2-0.north east)!0.5!(g2-0.east)$) -- ($(g2-1.north west)!0.5!(g2-1.west)$);
>         \draw ($(g2-0.south east)!0.5!(g2-0.east)$) -- ($(g2-1.south west)!0.5!(g2-1.west)$);
> 
>         % Arrow Head
>         \coordinate (midg) at ($(g2-0)!0.5!(g2-1)$);
>         \draw[thick] ($(midg)+(-0.15, 0.25)$) -- (midg) -- ($(midg)+(-0.15, -0.25)$);
>     \end{scope}
> 
> \end{tikzpicture}
> \end{document}
> ```