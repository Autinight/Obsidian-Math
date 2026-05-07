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
& {\substack{\mathbb{Z}\ \Vert\ C_3}} \arrow[r, "{0}"]
& {\substack{\mathbb{Z}\ \Vert\ C_2}} \arrow[r, "{2}"]
& {\substack{\mathbb{Z}\ \Vert\ C_1}} \arrow[r, "{0}"]
& {\substack{\mathbb{Z}\ \Vert\ C_0}} \arrow[r]
& 0
\end{tikzcd}
\end{document}
```
