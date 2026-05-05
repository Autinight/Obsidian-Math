```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=small, row sep=large]
0 \arrow[r] & Z_{n+1} \arrow[r] \arrow[d, "{0}"] & C_{n+1} \arrow[r] \arrow[d, "{\partial}"] & B_n \arrow[r] \arrow[d, "{0}"] & 0 \\
0 \arrow[r] & Z_n \arrow[r] \arrow[d, "{0}"] & C_n \arrow[r] \arrow[d, "{\partial}"] & B_{n-1} \arrow[r] \arrow[d, "{0}"] & 0 \\
0 \arrow[r] & Z_{n-1} \arrow[r] & C_{n-1} \arrow[r] & B_{n-2} \arrow[r] & 0
\end{tikzcd}
\end{document}
```
