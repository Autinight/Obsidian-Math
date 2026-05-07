```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=small]
0 \arrow[r]
& \mathbb{Z} \arrow[r, "\times 0"] \arrow[d, equals]
& \mathbb{Z} \arrow[r, "\times 2"] \arrow[d, equals]
& \mathbb{Z} \arrow[r, "\times 0"] \arrow[d, equals]
& \mathbb{Z} \arrow[r] \arrow[d, equals]
& 0
\\
{}
& C_3
& C_2
& C_1
& C_0
& {}
\end{tikzcd}
\end{document}
```
