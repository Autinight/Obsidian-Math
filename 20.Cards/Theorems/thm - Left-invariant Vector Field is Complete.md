---
type: theorem
aliases: [Left-invariant Vector Field is Complete]
---
> [!theorem] Theorem: 
> Every left-invariant vector field on a Lie group is complete.

> [!proof] Proof: 
> Let $G$ be a Lie Group, $X \in \mathrm{Lie}\left(G\right)$. Let $\theta$ be the flow of $X$. Then $\theta ^{\left(e\right)}$ is defined at least at a interval $\left(-\varepsilon ,\varepsilon \right)$. Since for each $g\in G$, $X$ is $L_{g}$-related to it self, it follows from the [[pps - Naturality of Integral Curves|Naturality of Integral Curves]] that $L_{g}\circ \theta ^{\left(e\right)}$ is an integral curve of $X$ at $g$, thus agree with $\theta ^{\left(g\right)}$ on $\left(-\varepsilon ,\varepsilon \right)$, which means that $\theta ^{\left(g\right)}$ is at least can be defined on $\left(-\varepsilon ,\varepsilon \right)$. Then from the [[lem - Uniform Time Lemma|Uniform Time Lemma]], $X$ is complete.