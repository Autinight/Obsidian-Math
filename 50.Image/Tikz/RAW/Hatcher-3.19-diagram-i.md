```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H^i(P^n) \times H^j(P^n)
  \arrow[r, "{\smile}"]
  \arrow[d, "\cong"']
& H^n(P^n)
  \arrow[d, "\cong"]
\\
H^i(P^n, P^n - P^j) \times H^j(P^n, P^n - P^i)
  \arrow[r, "{\smile}"']
& H^n(P^n, P^n - \{p\})
\end{tikzcd}
\end{document}
```
