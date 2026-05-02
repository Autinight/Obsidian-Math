# Cellular Homology Diagram

This diagram shows the relationship between relative homology groups in the cellular homology construction from Hatcher's Algebraic Topology.

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}
\begin{document}
\begin{tikzcd}[column sep=small, row sep=large]
  & & & 0 \arrow[d] & \\
  & & 0 \arrow[d] & H_n(X^{n+1}) \arrow[d, "\approx"] & \\
  & & H_n(X^n) \arrow[dl, "\partial_{n+1}"'] \arrow[dr, "j_n"] & H_n(X) & \\
  \cdots \arrow[r] & H_{n+1}(X^{n+1}, X^n) \arrow[r, "d_{n+1}"] & H_n(X^n, X^{n-1}) \arrow[r, "d_n"] \arrow[dl, "\partial_n"'] & H_{n-1}(X^{n-1}, X^{n-2}) \arrow[r] & \cdots \\
  & & H_{n-1}(X^{n-1}) \arrow[u, "j_{n-1}"] & & \\
  & & 0 \arrow[u] & &
\end{tikzcd}
\end{document}
```

## Explanation

This diagram illustrates several key features of cellular homology:

1. **Horizontal sequence**: The long exact sequence of the pair $(X^n, X^{n-1})$:
   $$\cdots \to H_{n+1}(X^{n+1}, X^n) \xrightarrow{d_{n+1}} H_n(X^n, X^{n-1}) \xrightarrow{d_n} H_{n-1}(X^{n-1}, X^{n-2}) \to \cdots$$

2. **Vertical maps**: 
   - $j_n: H_n(X^n) \to H_n(X^n, X^{n-1})$ (inclusion of the absolute group into relative)
   - $\partial_n: H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1})$ (boundary map from long exact sequence)

3. **Key observation**: The maps from/to 0 indicate that:
   - $H_n(X^{n+1}) \approx H_n(X)$ (homology stabilizes after the $n$-skeleton for dimension $n$)
   - Certain compositions vanish, which is crucial for defining cellular homology

The cellular chain complex is defined using the groups $H_n(X^n, X^{n-1})$ with boundary maps $d_n$.

---

**Source**: Hatcher, *Algebraic Topology*, Section on Cellular Homology
