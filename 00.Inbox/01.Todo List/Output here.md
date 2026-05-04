```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
H_n(D^n_{\alpha},\partial D^n_{\alpha})
  \arrow[r,"{\partial}" description,"{\simeq}"']
  \arrow[d,"{\Phi_{\alpha *}}"']
& \widetilde H_{n-1}(\partial D^n_{\alpha})
  \arrow[rr,"{\Delta_{\alpha\beta *}}"]
  \arrow[d,"{\varphi_{\alpha *}}"]
&& \widetilde H_{n-1}(S^{n-1}_{\beta})
\[
H_n(X^n,X^{n-1})
  \arrow[r,"{\partial_n}" description,"{\simeq}"']
  \arrow[dr,"{d_n}"']
& \widetilde H_{n-1}(X^{n-1})
  \arrow[rr,"{q_*}"]
  \arrow[d,"{j_{n-1}}"]
&& \widetilde H_{n-1}(X^{n-1}/X^{n-2})
  \arrow[u,"{q_{\beta *}}"']
  \arrow[d,"{\simeq}"]
\[
& H_{n-1}(X^{n-1},X^{n-2})
  \arrow[rr,"{\simeq}"']
&& H_{n-1}(X^{n-1}/X^{n-2},X^{n-2}/X^{n-2})
\end{tikzcd}
\end{document}
```