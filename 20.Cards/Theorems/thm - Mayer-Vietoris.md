---
type: theorem
aliases: [Mayer-Vietoris]
---
### Preliminaries


```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[>=latex, thick]
    % 定义四个节点位置：左、上、下、右
    % 调整坐标以确保菱形形状和足够的文字空间
    \node (L) at (0, 0) {$U \cap V$};
    \node (T) at (2, 1.5) {$U$};
    \node (B) at (2, -1.5) {$V$};
    \node (R) at (4, 0) {$M,$};

    % 绘制箭头及标签
    % i: 左 -> 上
    \draw[->] (L) -- (T) node[midway, above left] {$i$};
  
    % j: 左 -> 下
    \draw[->] (L) -- (B) node[midway, below left] {$j$};
  
    % k: 上 -> 右
    \draw[->] (T) -- (R) node[midway, above right] {$k$};
  
    % l: 下 -> 右
    \draw[->] (B) -- (R) node[midway, below right] {$l$};
\end{tikzpicture}
\end{document}
```


```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[>=latex, thick]
  % 定义节点位置：左，上，下，右
  \node (left) at (0, 0) {$\Omega^p(M)$};
  \node (top) at (2, 1.5) {$\Omega^p(U)$};
  \node (bottom) at (2, -1.5) {$\Omega^p(V)$};
  \node (right) at (4, 0) {$\Omega^p(U \cap V),$};

  % 绘制箭头和标签
  % 左 -> 上
  \draw[->] (left) -- (top) node[midway, above left] {$k^*$};
  % 左 -> 下
  \draw[->] (left) -- (bottom) node[midway, below left] {$l^*$};
  % 上 -> 右
  \draw[->] (top) -- (right) node[midway, above right] {$i^*$};
  % 下 -> 右
  \draw[->] (bottom) -- (right) node[midway, below right] {$j^*$};
\end{tikzpicture}
\end{document}
```