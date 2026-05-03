# Commutative Diagram - Ladder Diagram

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath, amssymb}
\begin{document}
\begin{tikzcd}[
  cells = {font = \normalsize},
  labels = {font = \small},
  arrows = {line width = 0.5pt},
  row sep = 30pt,
  column sep = 30pt
]
& 0 \arrow[d] & 0 \arrow[d] & 0 \arrow[d] & \\
\cdots \arrow[r] & A_{n+1} \arrow[r, "\alpha"] & A_n \arrow[r, "\alpha"] & A_{n-1} \arrow[r] & \cdots \\
\cdots \arrow[r] & A_{n+1} \arrow[r, "\partial"] \arrow[u] & A_n \arrow[r, "\partial"] \arrow[u, "i'"] & A_{n-1} \arrow[r] \arrow[u] & \cdots \\
\cdots \arrow[r] & B_{n+1} \arrow[r, "\beta"] \arrow[u, "i"] & B_n \arrow[r, "\beta"] \arrow[u, "i"] & B_{n-1} \arrow[r] \arrow[u, "i"] & \cdots \\
\cdots \arrow[r] & B_{n+1} \arrow[r, "\partial"] \arrow[u] & B_n \arrow[r, "\partial"] \arrow[u, "j'"] & B_{n-1} \arrow[r] \arrow[u] & \cdots \\
\cdots \arrow[r] & C_{n+1} \arrow[r, "\gamma"] \arrow[u, "j"] & C_n \arrow[r, "\gamma"] \arrow[u, "j"] & C_{n-1} \arrow[r] \arrow[u, "j"] & \cdots \\
\cdots \arrow[r] & C_{n+1} \arrow[r, "\partial"] \arrow[u] & C_n \arrow[r, "\partial"] \arrow[u] & C_{n-1} \arrow[r] \arrow[u] & \cdots \\
& 0 \arrow[u] & 0 \arrow[u] & 0 \arrow[u] &
\end{tikzcd}
\end{document}
```

这是一个梯形图（ladder diagram），展示了三个链复形（A, B, C）及其之间的连接态射，常见于同调代数和代数拓扑中。
