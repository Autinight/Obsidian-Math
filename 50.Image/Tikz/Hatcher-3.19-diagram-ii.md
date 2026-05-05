```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H^i(P^n, P^n - P^j)
  \arrow[r, "\cong"]
  \arrow[d, "\cong"']
& H^i(P^i, P^i - \{p\})
  \arrow[d, "\cong"]
\\
H^i(P^n, P^n - \{p\})
  \arrow[r, "\cong"']
& H^i(P^i, \partial P^i)
\end{tikzcd}
\end{document}
```
