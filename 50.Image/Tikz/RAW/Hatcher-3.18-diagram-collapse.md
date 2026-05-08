```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H^*(X,A;R) \otimes_R H^*(Y,B;R)
  \arrow[r, "\times"]
  \arrow[d]
& H^*(X \times Y, A \times Y \cup X \times B; R)
  \arrow[d, "\cong"]
\\
H^*(X,A;R) \otimes_R H^*(Y/B, B/B;R)
  \arrow[r, "\times"]
& H^*(X \times (Y/B), A \times (Y/B) \cup X \times (B/B); R)
\end{tikzcd}
\end{document}
```
