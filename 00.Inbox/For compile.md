```tikz
\usepackage{tikz-cd}
\usepackage{amsmath, amssymb}
\begin{document}
\begin{tikzcd}[
  cells = {font = \normalsize},
  labels = {font = \small},
  arrows = {line width = 0.5pt},
  row sep = 30pt,
  column sep = 35pt
]
 &  &  & 0 &  &  \\
 & 0 \arrow[dr] & H_n(X^{n+1}) \cong H_n(X) \arrow[ur] &  &  &  \\
 & H_n(X^n) \arrow[dr, "\partial_{n+1}"] \arrow[ur, "j_n"] &  &  &  &  \\
\cdots \arrow[r] & H_{n+1}(X^{n+1}, X^n) \arrow[rr, "d_{n+1}"] \arrow[ur] &  & H_n(X^n, X^{n-1}) \arrow[rr, "d_n"] \arrow[dr, "\partial_n"] &  & H_{n-1}(X^{n-1}, X^{n-2}) \arrow[r] & \cdots \\
 &  &  & H_{n-1}(X^{n-1}) \arrow[ur, "j_{n-1}"] &  &  \\
 &  & 0 \arrow[ur] &  &  & 
\end{tikzcd}
\end{document}
```