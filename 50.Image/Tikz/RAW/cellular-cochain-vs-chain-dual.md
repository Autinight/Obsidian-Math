```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=small, row sep=large]
H^n(X^n,X^{n-1};G) \arrow[r, "{\delta}"] \arrow[d, "{h}"'] & H^n(X^n;G) \arrow[r] \arrow[d, "{h}"] & H^n(X^{n-1};G) \arrow[r, "{\delta}"] \arrow[d, "{h}"] & H^n(X^{n-1},X^{n-2};G) \arrow[d, "{h}"] \\
\operatorname{Hom}(H_n(X^n,X^{n-1}),G) \arrow[r, "{\partial^*}"] & \operatorname{Hom}(H_n(X^n),G) \arrow[r] & \operatorname{Hom}(H_n(X^{n-1}),G) \arrow[r, "{\partial^*}"] & \operatorname{Hom}(H_n(X^{n-1},X^{n-2}),G)
\end{tikzcd}
\end{document}
```
