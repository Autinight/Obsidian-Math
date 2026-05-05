```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H^k(A;R) \otimes H^\ell(Y;R)
  \arrow[r]
  \arrow[d]
& H^{k+1}(X,A;R) \otimes H^\ell(Y;R)
  \arrow[d]
\\
H^{k+\ell}(A \times Y; R)
  \arrow[r, "\delta"']
& H^{k+\ell+1}(X \times Y, A \times Y; R)
\end{tikzcd}
\end{document}
```
