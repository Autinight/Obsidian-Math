```tikz
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzpicture}[
  scale=1.05,
  every node/.style={font=\large},
  arr/.style={->, >=stealth, thick},
  lab/.style={font=\normalsize}
]

% Main horizontal row
\node (A) at (-5.2,0) {$\cdots$};
\node (B) at (-2.8,0) {$H_{n+1}(X^{n+1},X^n)$};
\node (C) at (0.6,0) {$H_n(X^n,X^{n-1})$};
\node (D) at (4.3,0) {$H_{n-1}(X^{n-1},X^{n-2})$};
\node (E) at (6.9,0) {$\cdots$};

\draw[arr] (A) -- (B);
\draw[arr] (B) -- node[above, lab] {$d_{n+1}$} (C);
\draw[arr] (C) -- node[above, lab] {$d_n$} (D);
\draw[arr] (D) -- (E);

% Upper exact-sequence pieces
\node (U0) at (-2.8,1.65) {$0$};
\node (U1) at (-1.35,1.05) {$H_n(X^n)$};
\node (U2) at (1.9,2.2) {$H_n(X^{n+1})\cong H_n(X)$};
\node (U3) at (3.25,3.0) {$0$};

\draw[arr] (U0) -- (U1);
\draw[arr] (B) -- node[left, lab] {$\partial_{n+1}$} (U1);
\draw[arr] (U1) -- (U2);
\draw[arr] (U2) -- (U3);
\draw[arr] (U1) -- node[above right, lab] {$j_n$} (C);

% Lower exact-sequence pieces
\node (L0) at (1.15,-2.35) {$0$};
\node (L1) at (2.45,-1.5) {$H_{n-1}(X^{n-1})$};

\draw[arr] (L0) -- (L1);
\draw[arr] (C) -- node[right, lab] {$\partial_n$} (L1);
\draw[arr] (L1) -- node[below right, lab] {$j_{n-1}$} (D);

\end{tikzpicture}
\end{document}
```