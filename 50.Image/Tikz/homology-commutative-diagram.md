```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[column sep=large, row sep=large]
\dots \arrow[r, "0"] 
& H_{n+1}(X \times I, X \times \partial I) \arrow[d, "q_*"] \arrow[r, "\partial"] 
& H_n(X \times \partial I) \arrow[d, "q_*"] \arrow[r, "i_*"] 
& H_n(X \times I) \arrow[d, "q_*"] \arrow[r, "0"] 
& \dots 
\\
\dots \arrow[r] 
& H_{n+1}(Z, Y) \arrow[r, "\partial"] 
& H_n(Y) \arrow[r, "i_*"] 
& H_n(Z) \arrow[r] 
& \dots
\end{tikzcd}
\end{document}
```
