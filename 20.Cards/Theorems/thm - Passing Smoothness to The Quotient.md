---
type: theorem
aliases: [Passing Smoothness to The Quotient]
---

> [!theorem] Theorem: Passing Smoothly to the Quotient
> Suppose $M$ and $N$ are **smooth manifolds** and $\pi: M \to N$ is a **surjective smooth submersion**. If $P$ is a **smooth manifold with or without boundary** and $F: M \to P$ is a **smooth map** that is **constant on the fibers of** $\pi$, then there exists a **unique smooth map** $\widetilde{F}: N \to P$ such that $\widetilde{F} \circ \pi = F$:
> ```tikz
> \usepackage{amsmath}
> \usetikzlibrary{arrows.meta}
> \begin{document}
> \begin{tikzpicture}[>=latex, thick]
>   \node (M) at (0, 2) {$M$};
>   \node (N) at (0, 0) {$N$};
>   \node (P) at (2.5, 0) {$P$};
> 
>   \draw[->] (M) -- node[left] {$\pi$} (N);
>   \draw[->] (M) -- node[above right] {$F$} (P);
>   \draw[->, dashed] (N) -- node[below] {$\widetilde{F}$} (P);
> \end{tikzpicture}
> \end{document}
> ```