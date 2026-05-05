```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
0 \arrow[r]
& H^*(X,A) \otimes H^*(y_0) \arrow[r] \arrow[d, "\times"]
& H^*(X,A) \otimes H^*(Y) \arrow[r] \arrow[d, "\times"]
& H^*(X,A) \otimes H^*(Y,y_0) \arrow[r] \arrow[d, "\times"]
& 0
\\
0 \arrow[r]
& H^*(X \times y_0, A \times y_0) \arrow[r]
& H^*(X \times Y, A \times Y) \arrow[r]
& H^*(X \times Y, A \times Y \cup X \times y_0) \arrow[r]
& 0
\end{tikzcd}
\end{document}
```
