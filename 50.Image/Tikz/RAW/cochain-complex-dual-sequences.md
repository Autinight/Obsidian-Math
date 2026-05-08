```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=small, row sep=large]
0 & Z_{n+1}^* \arrow[l] & C_{n+1}^* \arrow[l] & B_n^* \arrow[l] & 0 \arrow[l] \\
0 & Z_n^* \arrow[l] \arrow[u, "{0}"] & C_n^* \arrow[l] \arrow[u, "{\delta}"] & B_{n-1}^* \arrow[l] \arrow[u, "{0}"] & 0 \arrow[l] \\
0 & Z_{n-1}^* \arrow[l] \arrow[u, "{0}"] & C_{n-1}^* \arrow[l] \arrow[u, "{\delta}"] & B_{n-2}^* \arrow[l] \arrow[u, "{0}"] & 0 \arrow[l]
\end{tikzcd}
\end{document}
```
