```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=small, row sep=large]
{} & {} & {} & \vdots \arrow[d, "{\delta}"] & {} & {} \\
\cdots \arrow[r] & H^n(X^{n+1},X^n;G) \arrow[r, "{j_n}"] \arrow[dr, "{d_n}"] & H^n(X^n;G) \arrow[r, "{i_n}"] \arrow[d, "{\delta}"] & H^n(X^{n-1};G) \arrow[r] & \cdots \\
{} & {} & H^{n+1}(X^{n+1},X^n;G) \arrow[u, "{\delta}"] & {} & {} & {}
\end{tikzcd}
\end{document}
```
