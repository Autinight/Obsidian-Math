## Statement

>[!theorem] Theorem: Lifting Criterion
> Let $p:\left( \overline{X}, \bar{x}\right)\to \left(X,x\right)$ be a covering projection. Let $Y$ be a path-connected and  locally path-connected space. Then there exists a lift $\bar{f}$ of $f$ at $\bar{x}$, that is a continuous map $\bar{f}:\left( Y,y\right)\to \left(\overline{X}, \bar{x}\right)$ such that the diagram commutes.
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> & (\overline{X}, \overline{x}) \arrow[d, "p"] \\
> (Y, y) \arrow[ur, "\bar{f}"] \arrow[r, "f"'] & (X, x)
> \end{tikzcd}
> \end{document}
> ```


## Corollary

> [!corollary] Corollary:
> Let $Y$ be a locally path connected and simply connected space and $p:\bar X\to X$ be a covering projection. Then every map $f:Y\to X$ has a lift $\bar{f}:Y\to \bar X$. 

