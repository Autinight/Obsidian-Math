```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H^k(X;R) \arrow[r, "{\smile\phi}"] \arrow[d, "{h}"']
& H^{k+\ell}(X;R) \arrow[d, "{h}"]
\\
\operatorname{Hom}_R(H_k(X;R),R) \arrow[r, "{(\frown\phi)^*}"']
& \operatorname{Hom}_R(H_{k+\ell}(X;R),R)
\end{tikzcd}
\end{document}
```
