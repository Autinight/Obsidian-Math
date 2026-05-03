# 三维双复形交换图

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath, amssymb}
\begin{document}
\begin{tikzcd}[
  cells = {font = \normalsize},
  labels = {font = \scriptsize},
  arrows = {line width = 0.5pt},
  row sep = 25pt,
  column sep = 35pt
]
& 0 \arrow[d] & 0 \arrow[d] & 0 \arrow[d] & \\
\cdots \arrow[r] & A'_{n+1} \arrow[r, "\partial"] \arrow[d, "i'"] & A'_n \arrow[r, "\partial"] \arrow[d, "i'"] & A'_{n-1} \arrow[r] \arrow[d, "i'"] & \cdots \\
\cdots \arrow[r] & A_{n+1} \arrow[r, "\partial"] \arrow[d, "i"] \arrow[ur, "\alpha"] & A_n \arrow[r, "\partial"] \arrow[d, "i"] \arrow[ur, "\alpha"] & A_{n-1} \arrow[r] \arrow[d, "i"] \arrow[ur, "\alpha"] & \cdots \\
\cdots \arrow[r] & B'_{n+1} \arrow[r, "\partial"] \arrow[d, "j'"] & B'_n \arrow[r, "\partial"] \arrow[d, "j'"] & B'_{n-1} \arrow[r] \arrow[d, "j'"] & \cdots \\
\cdots \arrow[r] & B_{n+1} \arrow[r, "\partial"] \arrow[d, "j"] \arrow[ur, "\beta"] & B_n \arrow[r, "\partial"] \arrow[d, "j"] \arrow[ur, "\beta"] & B_{n-1} \arrow[r] \arrow[d, "j"] \arrow[ur, "\beta"] & \cdots \\
\cdots \arrow[r] & C'_{n+1} \arrow[r, "\partial"] \arrow[d] & C'_n \arrow[r, "\partial"] \arrow[d] & C'_{n-1} \arrow[r] \arrow[d] & \cdots \\
\cdots \arrow[r] & C_{n+1} \arrow[r, "\partial"] \arrow[d] \arrow[ur, "\gamma"] & C_n \arrow[r, "\partial"] \arrow[d] \arrow[ur, "\gamma"] & C_{n-1} \arrow[r] \arrow[d] \arrow[ur, "\gamma"] & \cdots \\
& 0 \arrow[u] & 0 \arrow[u] & 0 \arrow[u] &
\end{tikzcd}
\end{document}
```

这是一个三维的双复形交换图，展示了：
- 三对链复形：$(A, A')$, $(B, B')$, $(C, C')$
- 水平方向：边界算子 $\partial$
- 垂直方向：连接态射 $i, i', j, j'$
- 对角方向：链映射 $\alpha, \beta, \gamma$

常见于谱序列、滤链复形和同调代数的高维结构中。
