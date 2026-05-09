---
title: Hatcher Ch2 2.2 - Computations and Applications
tags:
  - textbook
  - algebraic-topology
source: "[[pdf - AT Hatcher.pdf]]"
section: "2.2"
date: 2026-05-02
---
#
# 2 Section 2.2 — Computations and Applications

Now that the basic properties of homology have been established, we can begin to move a little more freely. Our first topic, exploiting the calculation of $H_n(S^n)$, is Brouwer's notion of degree for maps $S^n \to S^n$. Historically, Brouwer's introduction of this concept in the years 1910–12 preceded the rigorous development of homology, so his definition was rather different, using the technique of simplicial approximation which we explain in §2.C. The later definition in terms of homology is certainly more elegant, though perhaps with some loss of geometric intuition. More in the spirit of Brouwer's definition is a third approach using differential topology, presented very lucidly in [Milnor 1965].

## 2.1 Degree

For a map $f : S^n \to S^n$ with $n > 0$, the induced map $f_* : H_n(S^n) \to H_n(S^n)$ is a homomorphism from an infinite cyclic group to itself and so must be of the form $f_*(\alpha) = d\alpha$ for some integer $d$ depending only on $f$. This integer is called the **degree** of $f$, with the notation $\deg f$. Here are some basic properties of degree:

**(a)** $\deg \mathbb{1} = 1$, since $\mathbb{1}_* = \mathbb{1}$.

**(b)** $\deg f = 0$ if $f$ is not surjective. For if we choose a point $x_0 \in S^n - f(S^n)$ then $f$ can be factored as a composition $S^n \to S^n - \{x_0\} \hookrightarrow S^n$ and $H_n(S^n - \{x_0\}) = 0$ since $S^n - \{x_0\}$ is contractible. Hence $f_* = 0$.

**(c)** If $f \simeq g$ then $\deg f = \deg g$ since $f_* = g_*$. The converse statement, that $f \simeq g$ if $\deg f = \deg g$, is a fundamental theorem of Hopf from around 1925 which we prove in Corollary 4.25.

**(d)** $\deg fg = \deg f \cdot \deg g$, since $(fg)_* = f_* g_*$. As a consequence, $\deg f = \pm 1$ if $f$ is a homotopy equivalence since $fg \simeq \mathbb{1}$ implies $\deg f \cdot \deg g = \deg \mathbb{1} = 1$.
/
**(e)** $\deg f = -1$ if $f$ is a reflection of $S^n$, fixing the points in a subsphere $S^{n-1}$ and interchanging the two complementary hemispheres. For we can give $S^n$ a $\Delta$-complex structure with these two hemispheres as its two $n$-simplices $\Delta^n_1$ and $\Delta^n_2$, and the $n$-chain $\Delta^n_1 - \Delta^n_2$ represents a generator of $H_n(S^n)$ as we saw in Example 2.23, so the reflection interchanging $\Delta^n_1$ and $\Delta^n_2$ sends this generator to its negative.

**(f)** The antipodal map $-\mathbb{1} : S^n \to S^n$, $x \mapsto -x$, has degree $(-1)^{n+1}$ since it is the composition of $n + 1$ reflections, each changing the sign of one coordinate in $\mathbb{R}^{n+1}$.

**(g)** If $f : S^n \to S^n$ has no fixed points then $\deg f = (-1)^{n+1}$. For if $f(x) \neq x$ then the line segment from $f(x)$ to $-x$, defined by $t \mapsto (1-t)f(x) - tx$ for $0 \leq t \leq 1$, does not pass through the origin. Hence if $f$ has no fixed points, the formula $f_t(x) = [(1-t)f(x) - tx]/|(1-t)f(x) - tx|$ defines a homotopy from $f$ to the antipodal map. Note that the antipodal map has no fixed points, so the fact that maps without fixed points are homotopic to the antipodal map is a sort of converse statement.

Here is an interesting application of degree:

> [!theorem] Theorem 2.1
> $S^n$ has a continuous field of nonzero tangent vectors iff $n$ is odd.

> [!proof] Proof of Theorem 2.28
> Suppose $x \mapsto v(x)$ is a tangent vector field on $S^n$, assigning to a vector $x \in S^n$ the vector $v(x)$ tangent to $S^n$ at $x$. Regarding $v(x)$ as a vector at the origin instead of at $x$, tangency just means that $x$ and $v(x)$ are orthogonal in $\mathbb{R}^{n+1}$. If $v(x) \neq 0$ for all $x$, we may normalize so that $|v(x)| = 1$ for all $x$ by replacing $v(x)$ by $v(x)/|v(x)|$. Assuming this has been done, the vectors $(\cos t)x + (\sin t)v(x)$ lie in the unit circle in the plane spanned by $x$ and $v(x)$. Letting $t$ go from $0$ to $\pi$, we obtain a homotopy $f_t(x) = (\cos t)x + (\sin t)v(x)$ from the identity map of $S^n$ to the antipodal map $-\mathbb{1}$. This implies that $\deg(-\mathbb{1}) = \deg \mathbb{1}$, hence $(-1)^{n+1} = 1$ and $n$ must be odd.
>
> Conversely, if $n$ is odd, say $n = 2k-1$, we can define $v(x_1, x_2, \cdots, x_{2k-1}, x_{2k}) = (-x_2, x_1, \cdots, -x_{2k}, x_{2k-1})$. Then $v(x)$ is orthogonal to $x$, so $v$ is a tangent vector field on $S^n$, and $|v(x)| = 1$ for all $x \in S^n$.

For the much more difficult problem of finding the maximum number of tangent vector fields on $S^n$ that are linearly independent at each point, see [VBKT] or [Husemoller 1966].

Another nice application of degree, giving a partial answer to a question raised in Example 1.43, is the following result:

> [!proposition] Proposition 2.1
> $\mathbb{Z}_2$ is the only nontrivial group that can act freely on $S^n$ if $n$ is even.

Recall that an action of a group $G$ on a space $X$ is a homomorphism from $G$ to the group $\text{Homeo}(X)$ of homeomorphisms $X \to X$, and the action is free if the homeomorphism corresponding to each nontrivial element of $G$ has no fixed points. In the case of $S^n$, the antipodal map $x \mapsto -x$ generates a free action of $\mathbb{Z}_2$.

> [!proof] Proof of Proposition 2.29
> Since homeomorphisms have degree $\pm 1$, an action of a group $G$ on $S^n$ determines a degree function $d : G \to \{\pm 1\}$. This is a homomorphism since $\deg fg = \deg f \cdot \deg g$. If the action is free, $d$ sends each nontrivial element of $G$ to $(-1)^{n+1}$ by property (g) above. Thus when $n$ is even, $d$ has trivial kernel, so $G \subset \mathbb{Z}_2$.

### 2.1.1 Local Degree

Next we describe a technique for computing degrees which can be applied to most maps that arise in practice. Suppose $f : S^n \to S^n$, $n > 0$, has the property that for some point $y \in S^n$, the preimage $f^{-1}(y)$ consists of only finitely many points, say $x_1, \cdots, x_m$. Let $U_1, \cdots, U_m$ be disjoint neighborhoods of these points, mapped by $f$ into a neighborhood $V$ of $y$. Then $f(U_i - x_i) \subset V - y$ for each $i$, and we have a diagram

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=large, row sep=large]
  & H_n(U_i, U_i - x_i) \arrow[rr, "f_*"] \arrow[dl, "\cong"'] 
  & & H_n(V, V - y) \arrow[d, "\cong"] \\
  H_n(S^n, S^n - x_i) \arrow[dr, "\cong"'] 
  & H_n(S^n, S^n - f^{-1}(y)) \arrow[l, "p_i"'] \arrow[u, "k_i"] \arrow[rr, "f_*"] 
  & & H_n(S^n, S^n - y) \arrow[u, "\cong"'] \\
  & H_n(S^n) \arrow[u, "j"] \arrow[rr, "f_*"'] 
  & & H_n(S^n) \arrow[u, "\cong"']
\end{tikzcd}
\end{document}
```



where all the maps are the obvious ones, and in particular $k_i$ and $p_i$ are induced by inclusions, so the triangles and squares commute. The two isomorphisms in the upper half of the diagram come from excision, while the lower two isomorphisms come from exact sequences of pairs. Via these four isomorphisms, the top two groups in the diagram can be identified with $H_n(S^n) \approx \mathbb{Z}$, and the top homomorphism $f_*$ becomes multiplication by an integer called the **local degree** of $f$ at $x_i$, written $\deg f|_{x_i}$.

For example, if $f$ is a homeomorphism, then $y$ can be any point and there is only one corresponding $x_i$, so all the maps in the diagram are isomorphisms and $\deg f|_{x_i} = \deg f = \pm 1$. More generally, if $f$ maps each $U_i$ homeomorphically onto $V$, then $\deg f|_{x_i} = \pm 1$ for each $i$. This situation occurs quite often in applications, and it is usually not hard to determine the correct signs.

Here is the formula that reduces degree calculations to computing local degrees:

> [!proposition] Proposition 2.2
> $\deg f = \sum_i \deg f|_{x_i}$.

> [!proof] Proof of Proposition 2.30
> By excision, the central term $H_n(S^n, S^n - f^{-1}(y))$ in the preceding diagram is the direct sum of the groups $H_n(U_i, U_i - x_i) \approx \mathbb{Z}$, with $k_i$ the inclusion of the $i$th summand. The map $p_i$ is projection onto the $i$th summand since the upper triangle commutes and $p_i k_j = 0$ for $j \neq i$, as $p_i k_j$ factors through $H_n(U_j, U_j) = 0$. Identifying the outer groups in the diagram with $\mathbb{Z}$ as before, commutativity of the lower triangle says that $p_i j(1) = 1$, hence $j(1) = (1, \cdots, 1) = \sum_i k_i(1)$. Commutativity of the upper square says that the middle $f_*$ takes $k_i(1)$ to $\deg f|_{x_i}$, hence the sum $\sum_i k_i(1) = j(1)$ is taken to $\sum_i \deg f|_{x_i}$. Commutativity of the lower square then gives the formula $\deg f = \sum_i \deg f|_{x_i}$.

> [!example] Example 2.1
> We can use this result to construct a map $S^n \to S^n$ of any given degree, for each $n \geq 1$. Let $q : S^n \to \bigvee_k S^n$ be the quotient map obtained by collapsing the complement of $k$ disjoint open balls $B_i$ in $S^n$ to a point, and let $p : \bigvee_k S^n \to S^n$ identify all the summands to a single sphere. Consider the composition $f = pq$. For almost all $y \in S^n$ we have $f^{-1}(y)$ consisting of one point $x_i$ in each $B_i$. The local degree of $f$ at $x_i$ is $\pm 1$ since $f$ is a homeomorphism near $x_i$. By precomposing $p$ with reflections of the summands of $\bigvee_k S^n$ if necessary, we can make each local degree either $+1$ or $-1$, whichever we wish. Thus we can produce a map $S^n \to S^n$ of degree $\pm k$.

> [!example] Example 2.2
> In the case of $S^1$, the map $f(z) = z^k$, where we view $S^1$ as the unit circle in $\mathbb{C}$, has degree $k$. This is evident in the case $k = 0$ since $f$ is then constant. The case $k < 0$ reduces to the case $k > 0$ by composing with $z \mapsto z^{-1}$, which is a reflection, of degree $-1$. To compute the degree when $k > 0$, observe first that for any $y \in S^1$, $f^{-1}(y)$ consists of $k$ points $x_1, \cdots, x_k$ near each of which $f$ is a local homeomorphism, stretching a circular arc by a factor of $k$. This local stretching can be eliminated by a deformation of $f$ near $x_i$ that does not change local degree, so the local degree at $x_i$ is the same as for a rotation of $S^1$. A rotation is a homeomorphism so its local degree at any point equals its global degree, which is $+1$ since a rotation is homotopic to the identity. Hence $\deg f|_{x_i} = 1$ and $\deg f = k$.

Another way of obtaining a map $S^n \to S^n$ of degree $k$ is to take a repeated suspension of the map $z \mapsto z^k$ in Example 2.32, since suspension preserves degree:

> [!proposition] Proposition 2.3
> $\deg Sf = \deg f$, where $Sf : S^{n+1} \to S^{n+1}$ is the suspension of the map $f : S^n \to S^n$.

> [!proof] Proof of Proposition 2.33
> Let $CS^n$ denote the cone $(S^n \times I)/(S^n \times 1)$ with base $S^n = S^n \times 0 \subset CS^n$, so $CS^n/S^n$ is the suspension of $S^n$. The map $f$ induces $Cf : (CS^n, S^n) \to (CS^n, S^n)$ with quotient $Sf$. The naturality of the boundary maps in the long exact sequence of the pair $(CS^n, S^n)$ then gives commutativity of the diagram:
>
>```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
H_n(S^n) \arrow[r, "f_*"] \arrow[d, "\partial"] & H_n(S^n) \arrow[d, "\partial"] \\
H_{n+1}(CS^n/S^n) \arrow[r, "Sf_*"] & H_{n+1}(CS^n/S^n)
\end{tikzcd}
> \end{document}
> ```
> Hence if $f_*$ is multiplication by $d$, so is $Sf_*$.


Note that for $f : S^n \to S^n$, the suspension $Sf$ maps only one point to each of the two 'poles' of $S^{n+1}$. This implies that the local degree of $Sf$ at each pole must equal the global degree of $Sf$. Thus the local degree of a map $S^n \to S^n$ can be any integer if $n \geq 2$, just as the degree itself can be any integer when $n \geq 1$.

## 2.2 Cellular Homology

Cellular homology is a very efficient tool for computing the homology groups of CW complexes, based on degree calculations. Before giving the definition of cellular homology, we first establish a few preliminary facts:

> [!lemma] Lemma 2.1
> If $X$ is a CW complex, then:
> 1. $H_k(X^n, X^{n-1})$ is zero for $k \neq n$ and is free abelian for $k = n$, with a basis in one-to-one correspondence with the $n$-cells of $X$.
> 2. $H_k(X^n) = 0$ for $k > n$. In particular, if $X$ is finite-dimensional then $H_k(X) = 0$ for $k > \dim X$.
> 3. The map $H_k(X^n) \to H_k(X)$ induced by the inclusion $X^n \hookrightarrow X$ is an isomorphism for $k < n$ and surjective for $k = n$.

> [!proof] Proof of Lemma 2.34
> Statement (a) follows immediately from the observation that $(X^n, X^{n-1})$ is a good pair and $X^n/X^{n-1}$ is a wedge sum of $n$-spheres, one for each $n$-cell of $X$. Here we are using Proposition 2.22 and Corollary 2.25.
>
> Next consider the following part of the long exact sequence of the pair $(X^n, X^{n-1})$:
> $$H_{k+1}(X^n, X^{n-1}) \to H_k(X^{n-1}) \to H_k(X^n) \to H_k(X^n, X^{n-1})$$
> If $k \neq n$ the last term is zero by part (a) so the middle map is surjective, while if $k \neq n-1$ then the first term is zero so the middle map is injective. Now look at the inclusion-induced homomorphisms
> $$H_k(X^0) \to H_k(X^1) \to \cdots \to H_k(X^{k-1}) \to H_k(X^k) \to H_k(X^{k+1}) \to \cdots$$
> By what we have just shown these are all isomorphisms except that the map to $H_k(X^k)$ may not be surjective and the map from $H_k(X^k)$ may not be injective. The first part of the sequence then gives statement (b) since $H_k(X^0) = 0$ when $k > 0$. Also, the last part of the sequence gives (c) when $X$ is finite-dimensional.
>
> The proof of (c) when $X$ is infinite-dimensional requires more work. The more direct approach uses the fact that a singular chain in $X$ has compact image, hence meets only finitely many cells of $X$ by Proposition A.1 in the Appendix. Thus each chain lies in a finite skeleton $X^m$. So a $k$-cycle in $X$ is a cycle in some $X^m$, and then by the finite-dimensional case of (c), the cycle is homologous to a cycle in $X^n$ if $n \geq k$, so $H_k(X^n) \to H_k(X)$ is surjective. Similarly for injectivity, if a $k$-cycle in $X^n$ bounds a chain in $X$, this chain lies in some $X^m$ with $m \geq n$, so by the finite-dimensional case the cycle bounds a chain in $X^n$ if $n > k$.
>
> The other approach is more general. From the long exact sequence of the pair $(X, X^n)$ it suffices to show $H_k(X, X^n) = 0$ for $k \leq n$. Since $H_k(X, X^n) \approx \tilde{H}_k(X/X^n)$, this reduces the problem to showing:
> $(*)$ $\tilde{H}_k(X) = 0$ for $k \leq n$ if the $n$-skeleton of $X$ is a point.
>
> When $X$ is finite-dimensional, $(*)$ is immediate. For the infinite-dimensional case, consider $X \times [0, \infty)$ with its product cell structure, where we give $[0, \infty)$ the cell structure with the integer points as 0-cells. Let $T = \bigcup_i X_i \times [i, \infty)$, a subcomplex of $X \times [0, \infty)$. We claim that $T \simeq X$. Since $X$ is a deformation retract of $X \times [0, \infty)$, it suffices to show that $X \times [0, \infty)$ also deformation retracts onto $T$. Let $Y_i = T \cup (X \times [i, \infty))$. Then $Y_i$ deformation retracts onto $Y_{i+1}$ since $X \times [i, i+1]$ deformation retracts onto $X_i \times [i, i+1] \cup X \times \{i+1\}$ by Proposition 0.16.
>
> Recalling that $X_0$ is a point, let $R \subset T$ be the ray $X_0 \times [0, \infty)$ and let $Z \subset T$ be the union of this ray with all the subcomplexes $X_i \times \{i\}$. Then $Z/R$ is homeomorphic to $\bigvee_i X_i$, a wedge sum of finite-dimensional complexes with $n$-skeleton a point, so $\tilde{H}_k(Z/R) = 0$ for $k \leq n$. The same is therefore true for $Z$, from the long exact sequence of the pair $(Z, R)$, since $R$ is contractible. Similarly, $T/Z$ is a wedge sum of finite-dimensional complexes with $(n+1)$-skeleton a point, since if we first collapse each subcomplex $X_i \times \{i\}$ of $T$ to a point, we obtain the infinite sequence of suspensions $SX_i$ 'skewered' along the ray $R$, and then if we collapse $R$ to a point we obtain $\bigvee_i \Sigma X_i$ where $\Sigma X_i$ is the reduced suspension of $X_i$, so $\Sigma X_i$ has $(n+1)$-skeleton a point. Thus $\tilde{H}_k(T/Z) = 0$ for $k \leq n + 1$. The long exact sequence of the pair $(T, Z)$ then implies that $\tilde{H}_k(T) = 0$ for $k \leq n$, and we have proved $(*)$.

Let $X$ be a CW complex. Using Lemma 2.34, portions of the long exact sequences for the pairs $(X^{n+1}, X^n)$, $(X^n, X^{n-1})$, and $(X^{n-1}, X^{n-2})$ fit into a diagram
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

where $d_{n+1}$ and $d_n$ are defined as the compositions $j_n \partial_{n+1}$ and $j_{n-1}\partial_n$, which are just 'relativizations' of the boundary maps $\partial_{n+1}$ and $\partial_n$. The composition $d_n d_{n+1}$ includes two successive maps in one of the exact sequences, hence is zero. Thus the horizontal row is a chain complex, called the **cellular chain complex** of $X$ since $H_n(X^n, X^{n-1})$ is free with basis in one-to-one correspondence with the $n$-cells of $X$, so one can think of elements of $H_n(X^n, X^{n-1})$ as linear combinations of $n$-cells of $X$. The homology groups of this cellular chain complex are called the **cellular homology groups** of $X$. Temporarily we denote them $H_n^{CW}(X)$.

> [!theorem] Theorem 2.2
> $H_n^{CW}(X) \approx H_n(X)$.

> [!proof] Proof of Theorem 2.35
> From the diagram above, $H_n(X)$ can be identified with $H_n(X^n)/\text{Im} \partial_{n+1}$. Since $j_n$ is injective, it maps $\text{Im} \partial_{n+1}$ isomorphically onto $\text{Im}(j_n \partial_{n+1}) = \text{Im} d_{n+1}$ and $H_n(X^n)$ isomorphically onto $\text{Im} j_n = \text{Ker} \partial_n$. Since $j_{n-1}$ is injective, $\text{Ker} \partial_n = \text{Ker} d_n$.
>
> Thus $j_n$ induces an isomorphism of the quotient $H_n(X^n)/\text{Im} \partial_{n+1}$ onto $\text{Ker} d_n/\text{Im} d_{n+1}$.

Here are a few immediate applications:

**(i)** $H_n(X) = 0$ if $X$ is a CW complex with no $n$-cells.

**(ii)** More generally, if $X$ is a CW complex with $k$ $n$-cells, then $H_n(X)$ is generated by at most $k$ elements. For since $H_n(X^n, X^{n-1})$ is free abelian on $k$ generators, the subgroup $\text{Ker} d_n$ must be generated by at most $k$ elements, hence also the quotient $\text{Ker} d_n/\text{Im} d_{n+1}$.

**(iii)** If $X$ is a CW complex having no two of its cells in adjacent dimensions, then $H_n(X)$ is free abelian with basis in one-to-one correspondence with the $n$-cells of $X$. This is because the cellular boundary maps $d_n$ are automatically zero in this case.

This last observation applies for example to $\mathbb{C}P^n$, which has a CW structure with one cell of each even dimension $2k \leq 2n$ as we saw in Example 0.6. Thus

$$
\tilde{H}_i(\mathbb{C}P^n) \approx \begin{cases} \mathbb{Z} & \text{for } i = 0, 2, 4, \cdots, 2n \\ 0 & \text{otherwise} \end{cases} \tag{2.1}
$$

Another simple example is $S^n \times S^n$ with $n > 1$, using the product CW structure consisting of a 0-cell, two $n$-cells, and a $2n$-cell.

It is possible to prove the statements (i)–(iii) for finite-dimensional CW complexes by induction on the dimension, without using cellular homology but only the basic results from the previous section. However, the viewpoint of cellular homology makes (i)–(iii) quite transparent.

### 2.2.1 The Cellular Boundary Formula

Next we describe how the cellular boundary maps $d_n$ can be computed. When $n = 1$ this is easy since the boundary map $d_1 : H_1(X^1, X^0) \to H_0(X^0)$ is the same as the simplicial boundary map $\Delta_1(X) \to \Delta_0(X)$. In case $X$ is connected and has only one 0-cell, then $d_1$ must be 0, otherwise $H_0(X)$ would not be $\mathbb{Z}$. When $n > 1$ we will show that $d_n$ can be computed in terms of degrees:

> [!definition] Definition 2.1 (Cellular Boundary Formula)
> $d_n(e^n_\alpha) = \sum_\beta d_{\alpha\beta} e^{n-1}_\beta$ where $d_{\alpha\beta}$ is the degree of the map $S^{n-1}_\alpha \to X^{n-1} \to S^{n-1}_\beta$ that is the composition of the attaching map of $e^n_\alpha$ with the quotient map collapsing $X^{n-1} - e^{n-1}_\beta$ to a point.

Here we are identifying the cells $e^n_\alpha$ and $e^{n-1}_\beta$ with generators of the corresponding summands of the cellular chain groups. The summation in the formula contains only finitely many terms since the attaching map of $e^n_\alpha$ has compact image, so this image meets only finitely many cells $e^{n-1}_\beta$.

To derive the cellular boundary formula, consider the commutative diagram 
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
  \arrow[r, "{\partial}", "{\simeq}"']
  \arrow[d, "{\Phi_{\alpha *}}"']
& \widetilde H_{n-1}(\partial D^n_{\alpha})
  \arrow[r, "{\Delta_{\alpha\beta *}}"]
  \arrow[d, "{\varphi_{\alpha *}}"]

& \widetilde H_{n-1}(S^{n-1}_{\beta})
\\
H_n(X^n,X^{n-1})
  \arrow[r, "{\partial_n}", "{\simeq}"']
  \arrow[dr, "{d_n}"']
& \widetilde H_{n-1}(X^{n-1})
  \arrow[r, "{q_*}"]
  \arrow[d, "{j_{n-1}}"]

& \widetilde H_{n-1}(X^{n-1}/X^{n-2})
  \arrow[u, "{q_{\beta *}}"']
  \arrow[d, "{\simeq}"]
\\
{}
& H_{n-1}(X^{n-1},X^{n-2})
  \arrow[r, "{\simeq}"']

& H_{n-1}(X^{n-1}/X^{n-2},X^{n-2}/X^{n-2})
\end{tikzcd}
\end{document}
```
where:
- $\Phi_\alpha$ is the characteristic map of the cell $e^n_\alpha$ and $\varphi_\alpha$ is its attaching map.
- $q : X^{n-1} \to X^{n-1}/X^{n-2}$ is the quotient map.
- $q_\beta : X^{n-1}/X^{n-2} \to S^{n-1}_\beta$ collapses the complement of the cell $e^{n-1}_\beta$ to a point, the resulting quotient sphere being identified with $S^{n-1}_\beta = D^{n-1}_\beta/\partial D^{n-1}_\beta$ via the characteristic map $\Phi_\beta$.
- $\Delta_{\alpha\beta} : \partial D^n_\alpha \to S^{n-1}_\beta$ is the composition $q_\beta q \varphi_\alpha$, in other words, the attaching map of $e^n_\alpha$ followed by the quotient map $X^{n-1} \to S^{n-1}_\beta$ collapsing the complement of $e^{n-1}_\beta$ in $X^{n-1}$ to a point.

The map $\Phi_{\alpha*}$ takes a chosen generator $[D^n_\alpha] \in H_n(D^n_\alpha, \partial D^n_\alpha)$ to a generator of the $\mathbb{Z}$ summand of $H_n(X^n, X^{n-1})$ corresponding to $e^n_\alpha$. Letting $e^n_\alpha$ denote this generator, commutativity of the left half of the diagram then gives $d_n(e^n_\alpha) = j_{n-1}\varphi_{\alpha*}\partial[D^n_\alpha]$. In terms of the basis for $H_{n-1}(X^{n-1}, X^{n-2})$ corresponding to the cells $e^{n-1}_\beta$, the map $q_{\beta*}$ is the projection of $\tilde{H}_{n-1}(X^{n-1}/X^{n-2})$ onto its $\mathbb{Z}$ summand corresponding to $e^{n-1}_\beta$. Commutativity of the diagram then yields the formula for $d_n$ given above.

### 2.2.2 Cellular Homology Examples

> [!example] Example 2.3
> Let $M_g$ be the closed orientable surface of genus $g$ with its usual CW structure consisting of one 0-cell, $2g$ 1-cells, and one 2-cell attached by the product of commutators $[a_1, b_1] \cdots [a_g, b_g]$. The associated cellular chain complex is
> $$0 \to \mathbb{Z} \xrightarrow{d_2} \mathbb{Z}^{2g} \xrightarrow{d_1} \mathbb{Z} \to 0$$
> As observed above, $d_1$ must be 0 since there is only one 0-cell. Also, $d_2$ is 0 because each $a_i$ or $b_i$ appears with its inverse in $[a_1, b_1] \cdots [a_g, b_g]$, so the maps $\Delta_{\alpha\beta}$ are homotopic to constant maps. Since $d_1$ and $d_2$ are both zero, the homology groups of $M_g$ are the same as the cellular chain groups, namely, $\mathbb{Z}$ in dimensions 0 and 2, and $\mathbb{Z}^{2g}$ in dimension 1.

> [!example] Example 2.4
> The closed nonorientable surface $N_g$ of genus $g$ has a cell structure with one 0-cell, $g$ 1-cells, and one 2-cell attached by the word $a_1^2 a_2^2 \cdots a_g^2$. Again $d_1 = 0$, and $d_2 : \mathbb{Z} \to \mathbb{Z}^g$ is specified by the equation $d_2(1) = (2, \cdots, 2)$ since each $a_i$ appears in the attaching word of the 2-cell with total exponent 2, which means that each $\Delta_{\alpha\beta}$ is homotopic to the map $z \mapsto z^2$, of degree 2. Since $d_2(1) = (2, \cdots, 2)$, we have $d_2$ injective and hence $H_2(N_g) = 0$. If we change the basis for $\mathbb{Z}^g$ by replacing the last standard basis element $(0, \cdots, 0, 1)$ by $(1, \cdots, 1)$, we see that $H_1(N_g) \approx \mathbb{Z}^{g-1} \oplus \mathbb{Z}_2$.

These two examples illustrate the general fact that the orientability of a closed connected manifold $M$ of dimension $n$ is detected by $H_n(M)$, which is $\mathbb{Z}$ if $M$ is orientable and 0 otherwise. This is shown in Theorem 3.26.

> [!example] Example 2.5 (Example 2.38: An Acyclic Space)
> Let $X$ be obtained from $S^1 \vee S^1$ by attaching two 2-cells by the words $a^5 b^{-3}$ and $b^3(ab)^{-2}$. Then $d_2 : \mathbb{Z}^2 \to \mathbb{Z}^2$ has matrix $\begin{pmatrix} 5 & -2 \\ -3 & 1 \end{pmatrix}$, with the two columns coming from abelianizing $a^5 b^{-3}$ and $b^3(ab)^{-2}$ to $5a - 3b$ and $-2a + b$, in additive notation. The matrix has determinant $-1$, so $d_2$ is an isomorphism and $\tilde{H}_i(X) = 0$ for all $i$. Such a space $X$ is called **acyclic**.
>
> We can see that this acyclic space is not contractible by considering $\pi_1(X)$, which has the presentation $\langle a, b \mid a^5 b^{-3}, b^3(ab)^{-2} \rangle$. There is a nontrivial homomorphism from this group to the group $G$ of rotational symmetries of a regular dodecahedron, sending $a$ to the rotation $\rho_a$ through angle $2\pi/5$ about the axis through the center of a pentagonal face, and $b$ to the rotation $\rho_b$ through angle $2\pi/3$ about the axis through a vertex of this face. The composition $\rho_a \rho_b$ is a rotation through angle $\pi$ about the axis through the midpoint of an edge abutting this vertex. Thus the relations $a^5 = b^3 = (ab)^2$ defining $\pi_1(X)$ become $\rho_a^5 = \rho_b^3 = (\rho_a \rho_b)^2 = 1$ in $G$, which means there is a well-defined homomorphism $\rho : \pi_1(X) \to G$ sending $a$ to $\rho_a$ and $b$ to $\rho_b$. It is not hard to see that $G$ is generated by $\rho_a$ and $\rho_b$, so $\rho$ is surjective. With more work one can compute that the kernel of $\rho$ is $\mathbb{Z}_2$, generated by the element $a^5 = b^3 = (ab)^2$, and this $\mathbb{Z}_2$ is in fact the center of $\pi_1(X)$. In particular, $\pi_1(X)$ has order 120 since $G$ has order 60.

After these 2-dimensional examples, let us now move up to three dimensions, where we have the additional task of computing the cellular boundary map $d_3$.

> [!example] Example 2.6
> A 3-dimensional torus $T^3 = S^1 \times S^1 \times S^1$ can be constructed from a cube by identifying each pair of opposite square faces. The second figure shows a slightly different pattern of identifications of opposite faces, with the front and back faces now identified via a rotation of the cube around a horizontal left-right axis. The space produced by these identifications is the product $K \times S^1$ of a Klein bottle and a circle. For both $T^3$ and $K \times S^1$ we have a CW structure with one 3-cell, three 2-cells, three 1-cells, and one 0-cell. The cellular chain complexes thus have the form
> $$0 \to \mathbb{Z} \xrightarrow{d_3} \mathbb{Z}^3 \xrightarrow{d_2} \mathbb{Z}^3 \xrightarrow{0} \mathbb{Z} \to 0$$
>
> In the case of the 3-torus $T^3$ the cellular boundary map $d_2$ is zero by the same calculation as for the 2-dimensional torus. We claim that $d_3$ is zero as well. This amounts to saying that the three maps $\Delta_{\alpha\beta} : S^2 \to S^2$ corresponding to the three 2-cells have degree zero. Each $\Delta_{\alpha\beta}$ maps the interiors of two opposite faces of the cube homeomorphically onto the complement of a point in the target $S^2$ and sends the remaining four faces to this point. Computing local degrees at the center points of the two opposite faces, we see that the local degree is $+1$ at one of these points and $-1$ at the other, since the restrictions of $\Delta_{\alpha\beta}$ to these two faces differ by a reflection of the boundary of the cube across the plane midway between them, and a reflection has degree $-1$. Since the cellular boundary maps are all zero, we deduce that $H_i(T^3)$ is $\mathbb{Z}$ for $i = 0, 3$, $\mathbb{Z}^3$ for $i = 1, 2$, and 0 for $i > 3$.
>
> For $K \times S^1$, when we compute local degrees for the front and back faces we find that the degrees now have the same rather than opposite signs since the map $\Delta_{\alpha\beta}$ on these two faces differs not by a reflection but by a rotation of the boundary of the cube. The local degrees for the other faces are the same as before. Using the letters $A, B, C$ to denote the 2-cells given by the faces orthogonal to the edges $a, b, c$, respectively, we have the boundary formulas $d_3 e^3 = 2C$, $d_2 A = 2b$, $d_2 B = 0$, and $d_2 C = 0$. It follows that $H_3(K \times S^1) = 0$, $H_2(K \times S^1) = \mathbb{Z} \oplus \mathbb{Z}_2$, and $H_1(K \times S^1) = \mathbb{Z} \oplus \mathbb{Z} \oplus \mathbb{Z}_2$.

> [!example] Example 2.7 (Example 2.40: Moore Spaces)
> Given an abelian group $G$ and an integer $n \geq 1$, we will construct a CW complex $X$ such that $H_n(X) \approx G$ and $\tilde{H}_i(X) = 0$ for $i \neq n$. Such a space is called a **Moore space**, commonly written $M(G, n)$ to indicate the dependence on $G$ and $n$. It is probably best for the definition of a Moore space to include the condition that $M(G, n)$ be simply-connected if $n > 1$. The spaces we construct will have this property.
>
> As an easy special case, when $G = \mathbb{Z}_m$ we can take $X$ to be $S^n$ with a cell $e^{n+1}$ attached by a map $S^n \to S^n$ of degree $m$. More generally, any finitely generated $G$ can be realized by taking wedge sums of examples of this type for finite cyclic summands of $G$, together with copies of $S^n$ for infinite cyclic summands of $G$.
>
> In the general nonfinitely generated case let $F \to G$ be a homomorphism of a free abelian group $F$ onto $G$, sending a basis for $F$ onto some set of generators of $G$. The kernel $K$ of this homomorphism is a subgroup of a free abelian group, hence is itself free abelian. Choose bases $\{x_\alpha\}$ for $F$ and $\{y_\beta\}$ for $K$, and write $y_\beta = \sum_\alpha d_{\beta\alpha} x_\alpha$. Let $X^n = \bigvee_\alpha S^n_\alpha$, so $H_n(X^n) \approx F$ via Corollary 2.25. We will construct $X$ from $X^n$ by attaching cells $e^{n+1}_\beta$ via maps $f_\beta : S^n \to X^n$ such that the composition of $f_\beta$ with the projection onto the summand $S^n_\alpha$ has degree $d_{\beta\alpha}$. Then the cellular boundary map $d_{n+1}$ will be the inclusion $K \hookrightarrow F$, hence $X$ will have the desired homology groups.
>
> The construction of $f_\beta$ generalizes the construction in Example 2.31 of a map $S^n \to S^n$ of given degree. Namely, we can let $f_\beta$ map the complement of $\sum_\alpha |d_{\beta\alpha}|$ disjoint balls in $S^n$ to the 0-cell of $X^n$ while sending $|d_{\beta\alpha}|$ of the balls onto the summand $S^n_\alpha$ by maps of degree $+1$ if $d_{\beta\alpha} > 0$, or degree $-1$ if $d_{\beta\alpha} < 0$.

> [!example] Example 2.8
> By taking a wedge sum of the Moore spaces constructed in the preceding example for varying $n$ we obtain a connected CW complex with any prescribed sequence of homology groups in dimensions 1, 2, 3, $\cdots$.

> [!example] Example 2.9 (Example 2.42: Real Projective Space $\mathbb{R}P^n$)
> As we saw in Example 0.4, $\mathbb{R}P^n$ has a CW structure with one cell $e^k$ in each dimension $k \leq n$, and the attaching map for $e^k$ is the 2-sheeted covering projection $\varphi : S^{k-1} \to \mathbb{R}P^{k-1}$. To compute the boundary map $d_k$ we compute the degree of the composition $S^{k-1} \xrightarrow{\varphi} \mathbb{R}P^{k-1} \xrightarrow{q} \mathbb{R}P^{k-1}/\mathbb{R}P^{k-2} = S^{k-1}$, with $q$ the quotient map. The map $q\varphi$ restricts to a homeomorphism from each component of $S^{k-1} - S^{k-2}$ onto $\mathbb{R}P^{k-1} - \mathbb{R}P^{k-2}$, and these two homeomorphisms are obtained from each other by precomposing with the antipodal map of $S^{k-1}$, which has degree $(-1)^k$. Hence $\deg q\varphi = \deg \mathbb{1} + \deg(-\mathbb{1}) = 1 + (-1)^k$, and so $d_k$ is either 0 or multiplication by 2 according to whether $k$ is odd or even. Thus the cellular chain complex for $\mathbb{R}P^n$ is
>
> If $n$ is even:
> $$0 \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \xrightarrow{0} \cdots \xrightarrow{2} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{2} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$$
>
> If $n$ is odd:
> $$0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{2} \cdots \xrightarrow{2} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{2} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$$
>
> From this it follows that
> $$H_k(\mathbb{R}P^n) = \begin{cases} \mathbb{Z} & \text{for } k = 0 \text{ and for } k = n \text{ odd} \\ \mathbb{Z}_2 & \text{for } k \text{ odd}, 0 < k < n \\ 0 & \text{otherwise} \end{cases}$$

> [!example] Example 2.10 (Example 2.43: Lens Spaces)
> This example is somewhat more complicated. Given an integer $m > 1$ and integers $\ell_1, \cdots, \ell_n$ relatively prime to $m$, define the lens space $L = L_m(\ell_1, \cdots, \ell_n)$ to be the orbit space $S^{2n-1}/\mathbb{Z}_m$ of the unit sphere $S^{2n-1} \subset \mathbb{C}^n$ with the action of $\mathbb{Z}_m$ generated by the rotation $\rho(z_1, \cdots, z_n) = (e^{2\pi i \ell_1/m} z_1, \cdots, e^{2\pi i \ell_n/m} z_n)$, rotating the $j$th $\mathbb{C}$ factor of $\mathbb{C}^n$ by the angle $2\pi \ell_j/m$. In particular, when $m = 2$, $\rho$ is the antipodal map, so $L = \mathbb{R}P^{2n-1}$ in this case. In the general case, the projection $S^{2n-1} \to L$ is a covering space since the action of $\mathbb{Z}_m$ on $S^{2n-1}$ is free: Only the identity element fixes any point of $S^{2n-1}$ since each point of $S^{2n-1}$ has some coordinate $z_j$ nonzero and then $e^{2\pi ik\ell_j/m} z_j \neq z_j$ for $0 < k < m$, as a result of the assumption that $\ell_j$ is relatively prime to $m$.
>
> We shall construct a CW structure on $L$ with one cell $e^k$ for each $k \leq 2n - 1$ and show that the resulting cellular chain complex is
> $$0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{m} \mathbb{Z} \xrightarrow{0} \cdots \xrightarrow{0} \mathbb{Z} \xrightarrow{m} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$$
> with boundary maps alternately 0 and multiplication by $m$. Hence
> $$H_k(L_m(\ell_1, \cdots, \ell_n)) = \begin{cases} \mathbb{Z} & \text{for } k = 0, 2n-1 \\ \mathbb{Z}_m & \text{for } k \text{ odd}, 0 < k < 2n-1 \\ 0 & \text{otherwise} \end{cases}$$
>
> To obtain the CW structure, first subdivide the unit circle $\mathbb{C}$ in the $n$th $\mathbb{C}$ factor of $\mathbb{C}^n$ by taking the points $e^{2\pi ij/m} \in \mathbb{C}$ as vertices, $j = 1, \cdots, m$. Joining the $j$th vertex of $\mathbb{C}$ to the unit sphere $S^{2n-3} \subset \mathbb{C}^{n-1}$ by arcs of great circles in $S^{2n-1}$ yields a $(2n-2)$-dimensional ball $B^{2n-2}_j$ bounded by $S^{2n-3}$. Specifically, $B^{2n-2}_j$ consists of the points $\cos\theta(0, \cdots, 0, e^{2\pi ij/m}) + \sin\theta(z_1, \cdots, z_{n-1}, 0)$ for $0 \leq \theta \leq \pi/2$. Similarly, joining the $j$th edge of $\mathbb{C}$ to $S^{2n-3}$ gives a ball $B^{2n-1}_j$ bounded by $B^{2n-2}_j$ and $B^{2n-2}_{j+1}$, subscripts being taken mod $m$. The rotation $\rho$ carries $S^{2n-3}$ to itself and rotates $\mathbb{C}$ by the angle $2\pi \ell_n/m$, hence $\rho$ permutes the $B^{2n-2}_j$'s and the $B^{2n-1}_j$'s. A suitable power of $\rho$, namely $\rho^r$ where $r\ell_n \equiv 1 \mod m$, takes each $B^{2n-2}_j$ and $B^{2n-1}_j$ to the next one. Since $\rho^r$ has order $m$, it is also a generator of the rotation group $\mathbb{Z}_m$, and hence we may obtain $L$ as the quotient of one $B^{2n-1}_j$ by identifying its two faces $B^{2n-2}_j$ and $B^{2n-2}_{j+1}$ together via $\rho^r$.
>
> In particular, when $n = 2$, $B^{2n-1}_j$ is a lens-shaped 3-ball and $L$ is obtained from this ball by identifying its two curved disk faces via $\rho^r$, which may be described as the composition of the reflection across the plane containing the rim of the lens, taking one face of the lens to the other, followed by a rotation of this face through the angle $2\pi\ell/m$ where $\ell = r\ell_1$. The lens space $L$ is determined by the rotation angle $2\pi\ell/m$, so it is conveniently written $L_{\ell/m}$. Clearly only the mod $m$ value of $\ell$ matters. It is a classical theorem of Reidemeister from the 1930s that $L_{\ell/m}$ is homeomorphic to $L_{\ell'/m'}$ iff $m' = m$ and $\ell' \equiv \pm\ell^{\pm 1} \mod m$. For example, when $m = 7$ there are only two distinct lens spaces $L_{1/7}$ and $L_{2/7}$. The 'if' part of this theorem is easy: Reflecting the lens through a mirror shows that $L_{\ell/m} \approx L_{-\ell/m}$, and by interchanging the roles of the two $\mathbb{C}$ factors of $\mathbb{C}^2$ one obtains $L_{\ell/m} \approx L_{\ell^{-1}/m}$. In the converse direction, $L_{\ell/m} \approx L_{\ell'/m'}$ clearly implies $m = m'$ since $\pi_1(L_{\ell/m}) \approx \mathbb{Z}_m$. The rest of the theorem takes considerably more work.
>
> Returning to the construction of a CW structure on $L_m(\ell_1, \cdots, \ell_n)$, observe that the $(2n-3)$-dimensional lens space $L_m(\ell_1, \cdots, \ell_{n-1})$ sits in $L_m(\ell_1, \cdots, \ell_n)$ as the quotient of $S^{2n-3}$, and $L_m(\ell_1, \cdots, \ell_n)$ is obtained from this subspace by attaching two cells, of dimensions $2n-2$ and $2n-1$, coming from the interiors of $B^{2n-1}_j$ and its two identified faces $B^{2n-2}_j$ and $B^{2n-2}_{j+1}$. Inductively this gives a CW structure on $L_m(\ell_1, \cdots, \ell_n)$ with one cell $e^k$ in each dimension $k \leq 2n-1$.
>
> The boundary maps in the associated cellular chain complex are computed as follows. The first one, $d_{2n-1}$, is zero since the identification of the two faces of $B^{2n-1}_j$ is via a reflection (degree $-1$) across $B^{2n-1}_j$ fixing $S^{2n-3}$, followed by a rotation (degree $+1$), so $d_{2n-1}(e^{2n-1}) = e^{2n-2} - e^{2n-2} = 0$. The next boundary map $d_{2n-2}$ takes $e^{2n-2}$ to $me^{2n-3}$ since the attaching map for $e^{2n-2}$ is the quotient map $S^{2n-3} \to L_m(\ell_1, \cdots, \ell_{n-1})$ and the balls $B^{2n-3}_j$ in $S^{2n-3}$ which project down onto $e^{2n-3}$ are permuted cyclically by the rotation $\rho$ of degree $+1$. Inductively, the subsequent boundary maps $d_k$ then alternate between 0 and multiplication by $m$.
>
> Also of interest are the infinite-dimensional lens spaces $L_m(\ell_1, \ell_2, \cdots) = S^\infty/\mathbb{Z}_m$ defined in the same way as in the finite-dimensional case. The space $L_m(\ell_1, \ell_2, \cdots)$ is the union of the increasing sequence of finite-dimensional lens spaces for $n = 1, 2, \cdots$, each of which is a subcomplex of the next. Its cellular chain complex consists of a $\mathbb{Z}$ in each dimension with boundary maps alternately 0 and $m$, so its reduced homology consists of a $\mathbb{Z}_m$ in each odd dimension.
>
> In the terminology of §1.B, the infinite-dimensional lens space $L_m(\ell_1, \ell_2, \cdots)$ is an Eilenberg–MacLane space $K(\mathbb{Z}_m, 1)$ since its universal cover $S^\infty$ is contractible. By Theorem 1B.8 the homotopy type of $L_m(\ell_1, \ell_2, \cdots)$ depends only on $m$, and not on the $\ell_i$'s. This is not true in the finite-dimensional case, when two lens spaces $L_m(\ell_1, \cdots, \ell_n)$ and $L_m(\ell'_1, \cdots, \ell'_n)$ have the same homotopy type iff $\ell_1 \cdots \ell_n \equiv \pm k^n \ell'_1 \cdots \ell'_n \mod m$ for some integer $k$. For example, the 3-dimensional lens spaces $L_{1/5}$ and $L_{2/5}$ are not homotopy equivalent, though they have the same fundamental group and the same homology groups. On the other hand, $L_{1/7}$ and $L_{2/7}$ are homotopy equivalent but not homeomorphic.

## 2.3 Euler Characteristic

For a finite CW complex $X$, the **Euler characteristic** $\chi(X)$ is defined to be the alternating sum $\sum_n (-1)^n c_n$ where $c_n$ is the number of $n$-cells of $X$, generalizing the familiar formula vertices − edges + faces for 2-dimensional complexes. The following result shows that $\chi(X)$ can be defined purely in terms of homology, and hence depends only on the homotopy type of $X$. In particular, $\chi(X)$ is independent of the choice of CW structure on $X$.

> [!theorem] Theorem 2.3
> $\chi(X) = \sum_n (-1)^n \text{rank } H_n(X)$.

Here the **rank** of a finitely generated abelian group is the number of $\mathbb{Z}$ summands when the group is expressed as a direct sum of cyclic groups. We shall need the following fact, whose proof we leave as an exercise: If $0 \to A \to B \to C \to 0$ is a short exact sequence of finitely generated abelian groups, then $\text{rank } B = \text{rank } A + \text{rank } C$.

> [!proof] Proof of Theorem 2.44
> This is purely algebraic. Let
> $$0 \to C_k \xrightarrow{d_k} C_{k-1} \to \cdots \to C_1 \xrightarrow{d_1} C_0 \to 0$$
> be a chain complex of finitely generated abelian groups, with cycles $Z_n = \text{Ker } d_n$, boundaries $B_n = \text{Im } d_{n+1}$, and homology $H_n = Z_n/B_n$. Thus we have short exact sequences $0 \to Z_n \to C_n \to B_{n-1} \to 0$ and $0 \to B_n \to Z_n \to H_n \to 0$, hence
> $$\text{rank } C_n = \text{rank } Z_n + \text{rank } B_{n-1}$$
> $$\text{rank } Z_n = \text{rank } B_n + \text{rank } H_n$$
> Now substitute the second equation into the first, multiply the resulting equation by $(-1)^n$, and sum over $n$ to get $\sum_n (-1)^n \text{rank } C_n = \sum_n (-1)^n \text{rank } H_n$. Applying this with $C_n = H_n(X^n, X^{n-1})$ then gives the theorem.

For example, the surfaces $M_g$ and $N_g$ have Euler characteristics $\chi(M_g) = 2 - 2g$ and $\chi(N_g) = 2 - g$. Thus all the orientable surfaces $M_g$ are distinguished from each other by their Euler characteristics, as are the nonorientable surfaces $N_g$, and there are only the relations $\chi(M_g) = \chi(N_{2g})$.

## 2.4 Split Exact Sequences

Suppose one has a retraction $r : X \to A$, so $ri = \mathbb{1}$ where $i : A \to X$ is the inclusion. The induced map $i_* : H_n(A) \to H_n(X)$ is then injective since $r_* i_* = \mathbb{1}$. From this it follows that the boundary maps in the long exact sequence for $(X, A)$ are zero, so the long exact sequence breaks up into short exact sequences

$$
0 \to H_n(A) \xrightarrow{i_*} H_n(X) \xrightarrow{j_*} H_n(X, A) \to 0 \tag{2.2}
$$

The relation $r_* i_* = \mathbb{1}$ actually gives more information than this, by the following piece of elementary algebra:

> [!lemma] Lemma 2.2 (Splitting Lemma)
> For a short exact sequence $0 \to A \xrightarrow{i} B \xrightarrow{j} C \to 0$ of abelian groups the following statements are equivalent:
> (a) There is a homomorphism $p : B \to A$ such that $pi = \mathbb{1} : A \to A$.
> (b) There is a homomorphism $s : C \to B$ such that $js = \mathbb{1} : C \to C$.
> (c) There is an isomorphism $B \approx A \oplus C$ making a commutative diagram as at the right, where the maps in the lower row are the obvious ones, $a \mapsto (a, 0)$ and $(a, c) \mapsto c$.
>
> If these conditions are satisfied, the exact sequence is said to **split**. Note that (c) is symmetric: There is no essential difference between the roles of $A$ and $C$.

**Sketch of Proof:** For the implication (a) ⇒ (c) one checks that the map $B \to A \oplus C$, $b \mapsto (p(b), j(b))$, is an isomorphism with the desired properties. For (b) ⇒ (c) one uses instead the map $A \oplus C \to B$, $(a, c) \mapsto i(a) + s(c)$. The opposite implications (c) ⇒ (a) and (c) ⇒ (b) are fairly obvious. If one wants to show (b) ⇒ (a) directly, one can define $p(b) = i^{-1}(b - sj(b))$. Further details are left to the reader.

Except for the implications (b) ⇒ (a) and (b) ⇒ (c), the proof works equally well for nonabelian groups. In the nonabelian case, (b) is definitely weaker than (a) and (c), and short exact sequences satisfying (b) only determine $B$ as a semidirect product of $A$ and $C$. The difficulty is that $s(C)$ might not be a normal subgroup of $B$. In the nonabelian case one defines 'splitting' to mean that (b) is satisfied.

In both the abelian and nonabelian contexts, if $C$ is free then every exact sequence $0 \to A \xrightarrow{i} B \xrightarrow{j} C \to 0$ splits, since one can define $s : C \to B$ by choosing a basis $\{c_\alpha\}$ for $C$ and letting $s(c_\alpha)$ be any element $b_\alpha \in B$ such that $j(b_\alpha) = c_\alpha$. The converse is also true: If every short exact sequence ending in $C$ splits, then $C$ is free. This is because for every $C$ there is a short exact sequence $0 \to A \to B \to C \to 0$ with $B$ free — choose generators for $C$ and let $B$ have a basis in one-to-one correspondence with these generators, then let $B \to C$ send each basis element to the corresponding generator — so if this sequence $0 \to A \to B \to C \to 0$ splits, $C$ is isomorphic to a subgroup of a free group, hence is free.

From the Splitting Lemma and the remarks preceding it we deduce that a retraction $r : X \to A$ gives a splitting $H_n(X) \approx H_n(A) \oplus H_n(X, A)$. This can be used to show the nonexistence of such a retraction in some cases, for example in the situation of the Brouwer fixed point theorem, where a retraction $D^n \to S^{n-1}$ would give an impossible splitting $H_{n-1}(D^n) \approx H_{n-1}(S^{n-1}) \oplus H_{n-1}(D^n, S^{n-1})$. For a somewhat more subtle example, consider the mapping cylinder $M_f$ of a degree $m$ map $f : S^n \to S^n$ with $m > 1$. If $M_f$ retracted onto the $S^n \subset M_f$ corresponding to the domain of $f$, we would have a split short exact sequence.

```tikz
\usepackage{tikz-cd}
\usepackage{amssymb}
\begin{document}
\begin{tikzcd}
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "\mathbb{1}"'] & B \arrow[r, "j"] \arrow[d, "\cong"] & C \arrow[r] \arrow[d, "\mathbb{1}"] & 0 \\
0 \arrow[r] & A \arrow[r] & A \oplus C \arrow[r] & C \arrow[r] & 0
\end{tikzcd}
\end{document}
```

But this sequence does not split since $\mathbb{Z}$ is not isomorphic to $\mathbb{Z} \oplus \mathbb{Z}_m$ if $m > 1$, so the retraction cannot exist. In the simplest case of the degree 2 map $S^1 \to S^1$, $z \mapsto z^2$, this says that the Möbius band does not retract onto its boundary circle.

## 2.5 Homology of Groups

In §1.B we constructed for each group $G$ a CW complex $K(G, 1)$ having a contractible universal cover, and we showed that the homotopy type of such a space $K(G, 1)$ is uniquely determined by $G$. The homology groups $H_n(K(G, 1))$ therefore depend only on $G$, and are usually denoted simply $H_n(G)$. The calculations for lens spaces in Example 2.43 show that $H_n(\mathbb{Z}_m)$ is $\mathbb{Z}_m$ for odd $n$ and 0 for even $n > 0$. Since $S^1$ is a $K(\mathbb{Z}, 1)$ and the torus is a $K(\mathbb{Z} \times \mathbb{Z}, 1)$, we also know the homology of these two groups. More generally, the homology of finitely generated abelian groups can be computed from these examples using the Künneth formula in §3.B and the fact that a product $K(G, 1) \times K(H, 1)$ is a $K(G \times H, 1)$.

Here is an application of the calculation of $H_n(\mathbb{Z}_m)$:

> [!proposition] Proposition 2.4
> If a finite-dimensional CW complex $X$ is a $K(G, 1)$, then the group $G = \pi_1(X)$ must be torsionfree.

This applies to quite a few manifolds, for example closed surfaces other than $S^2$ and $\mathbb{R}P^2$, and also many 3-dimensional manifolds such as complements of knots in $S^3$.

> [!proof] Proof of Proposition 2.45
> If $G$ had torsion, it would have a finite cyclic subgroup $\mathbb{Z}_m$ for some $m > 1$, and the covering space of $X$ corresponding to this subgroup of $G = \pi_1(X)$ would be a $K(\mathbb{Z}_m, 1)$. Since $X$ is a finite-dimensional CW complex, the same would be true of its covering space $K(\mathbb{Z}_m, 1)$, and hence the homology of the $K(\mathbb{Z}_m, 1)$ would be nonzero in only finitely many dimensions. But this contradicts the fact that $H_n(\mathbb{Z}_m)$ is nonzero for infinitely many values of $n$.

Reflecting the richness of group theory, the homology of groups has been studied quite extensively. A good starting place for those wishing to learn more is the textbook [Brown 1982]. At a more advanced level the books [Adem & Milgram 1994] and [Benson 1992] treat the subject from a mostly topological viewpoint.

## 2.6 Mayer–Vietoris Sequences

In addition to the long exact sequence of homology groups for a pair $(X, A)$, there is another sort of long exact sequence, known as a **Mayer–Vietoris sequence**, which is equally powerful but is sometimes more convenient to use. For a pair of subspaces $A, B \subset X$ such that $X$ is the union of the interiors of $A$ and $B$, this exact sequence has the form

$$
\cdots \to H_n(A \cap B) \xrightarrow{\Phi} H_n(A) \oplus H_n(B) \xrightarrow{\Psi} H_n(X) \xrightarrow{\partial} H_{n-1}(A \cap B) \to \cdots \tag{2.3}
$$
$$
\cdots \to H_0(X) \to 0 \tag{2.4}
$$

In addition to its usefulness for calculations, the Mayer–Vietoris sequence is also applied frequently in induction arguments, where one might know that a certain statement is true for $A$, $B$, and $A \cap B$ by induction and then deduce that it is true for $A \cup B$ by the exact sequence.

The Mayer–Vietoris sequence is easy to derive from the machinery of §2.1. Let $C_n(A + B)$ be the subgroup of $C_n(X)$ consisting of chains that are sums of chains in $A$ and chains in $B$. The usual boundary map $\partial : C_n(X) \to C_{n-1}(X)$ takes $C_n(A + B)$ to $C_{n-1}(A + B)$, so the $C_n(A + B)$'s form a chain complex. According to Proposition 2.21, the inclusions $C_n(A + B) \hookrightarrow C_n(X)$ induce isomorphisms on homology groups. The Mayer–Vietoris sequence is then the long exact sequence of homology groups associated to the short exact sequence of chain complexes formed by the short exact sequences

$$
0 \to C_n(A \cap B) \xrightarrow{\varphi} C_n(A) \oplus C_n(B) \xrightarrow{\psi} C_n(A + B) \to 0 \tag{2.5}
$$

where $\varphi(x) = (x, -x)$ and $\psi(x, y) = x + y$. The exactness of this short exact sequence can be checked as follows. First, $\text{Ker } \varphi = 0$ since a chain in $A \cap B$ that is zero as a chain in $A$ (or in $B$) must be the zero chain. Next, $\text{Im } \varphi \subset \text{Ker } \psi$ since $\psi\varphi = 0$. Also, $\text{Ker } \psi \subset \text{Im } \varphi$ since for a pair $(x, y) \in C_n(A) \oplus C_n(B)$ the condition $x + y = 0$ implies $x = -y$, so $x$ is a chain in both $A$ and $B$, that is, $x \in C_n(A \cap B)$, and $(x, y) = (x, -x) \in \text{Im } \varphi$. Finally, exactness at $C_n(A + B)$ is immediate from the definition of $C_n(A + B)$.

The boundary map $\partial : H_n(X) \to H_{n-1}(A \cap B)$ can easily be made explicit. A class $\alpha \in H_n(X)$ is represented by a cycle $z$, and by barycentric subdivision or some other method we can choose $z$ to be a sum $x + y$ of chains in $A$ and $B$, respectively. It need not be true that $x$ and $y$ are cycles individually, but $\partial x = -\partial y$ since $\partial(x + y) = 0$, and the element $\partial\alpha \in H_{n-1}(A \cap B)$ is represented by the cycle $\partial x = -\partial y$, as is clear from the definition of the boundary map in the long exact sequence of homology groups associated to a short exact sequence of chain complexes.

There is also a formally identical Mayer–Vietoris sequence for reduced homology groups, obtained by augmenting the previous short exact sequence of chain complexes in the obvious way.

Mayer–Vietoris sequences can be viewed as analogs of the van Kampen theorem since if $A \cap B$ is path-connected, the $H_1$ terms of the reduced Mayer–Vietoris sequence yield an isomorphism $H_1(X) \approx (H_1(A) \oplus H_1(B))/\text{Im } \Phi$. This is exactly the abelianized statement of the van Kampen theorem, and $H_1$ is the abelianization of $\pi_1$ for path-connected spaces, as we show in §2.A.

There are also Mayer–Vietoris sequences for decompositions $X = A \cup B$ such that $A$ and $B$ are deformation retracts of neighborhoods $U$ and $V$ with $U \cap V$ deformation retracting onto $A \cap B$. Under these assumptions the five-lemma implies that the maps $C_n(A + B) \to C_n(U + V)$ induce isomorphisms on homology, and hence so do the maps $C_n(A + B) \to C_n(X)$. For example, if $X$ is a CW complex and $A$ and $B$ are subcomplexes, then we can choose for $U$ and $V$ neighborhoods of the form $N_\varepsilon(A)$ and $N_\varepsilon(B)$ constructed in the Appendix.

> [!example] Example 2.11
> Take $X = S^n$ with $A$ and $B$ the northern and southern hemispheres, so that $A \cap B = S^{n-1}$. Then in the reduced Mayer–Vietoris sequence the terms $\tilde{H}_i(A) \oplus \tilde{H}_i(B)$ are zero, so we obtain isomorphisms $\tilde{H}_i(S^n) \approx \tilde{H}_{i-1}(S^{n-1})$. This gives another way of calculating the homology groups of $S^n$ by induction.

> [!example] Example 2.12
> We can decompose the Klein bottle $K$ as the union of two Möbius bands $A$ and $B$ glued together by a homeomorphism between their boundary circles. Then $A$, $B$, and $A \cap B$ are homotopy equivalent to circles, so the interesting part of the reduced Mayer–Vietoris sequence for the decomposition $K = A \cup B$ is the segment
> $$0 \to H_2(K) \to H_1(A \cap B) \xrightarrow{\Phi} H_1(A) \oplus H_1(B) \to H_1(K) \to 0$$
> The map $\Phi$ is $\mathbb{Z} \to \mathbb{Z} \oplus \mathbb{Z}$, $1 \mapsto (2, -2)$, since the boundary circle of a Möbius band wraps twice around the core circle. Since $\Phi$ is injective we obtain $H_2(K) = 0$. Furthermore, we have $H_1(K) \approx \mathbb{Z} \oplus \mathbb{Z}_2$ since we can choose $(1, 0)$ and $(1, -1)$ as a basis for $\mathbb{Z} \oplus \mathbb{Z}$. All the higher homology groups of $K$ are zero from the earlier part of the Mayer–Vietoris sequence.

> [!example] Example 2.13
> Let us describe an exact sequence which is somewhat similar to the Mayer–Vietoris sequence and which in some cases generalizes it. If we are given two maps $f, g : X \to Y$ then we can form a quotient space $Z$ of the disjoint union of $X \times I$ and $Y$ via the identifications $(x, 0) \sim f(x)$ and $(x, 1) \sim g(x)$, thus attaching one end of $X \times I$ to $Y$ by $f$ and the other end by $g$. For example, if $f$ and $g$ are each the identity map $X \to X$ then $Z = X \times S^1$. If only one of $f$ and $g$, say $f$, is the identity map, then $Z$ is homeomorphic to what is called the **mapping torus** of $g$, the quotient space of $X \times I$ under the identifications $(x, 0) \sim (g(x), 1)$. The Klein bottle is an example, with $g$ a reflection $S^1 \to S^1$.
>
> The exact sequence we want has the form
> $(*)$ $\cdots \to H_n(X) \xrightarrow{f_* - g_*} H_n(Y) \xrightarrow{i_*} H_n(Z) \to H_{n-1}(X) \xrightarrow{f_* - g_*} H_{n-1}(Y) \to \cdots$
> where $i$ is the evident inclusion $Y \hookrightarrow Z$.
>
> To derive this exact sequence, consider the map $q : (X \times I, X \times \partial I) \to (Z, Y)$ that is the restriction to $X \times I$ of the quotient map $X \times I \amalg Y \to Z$. The map $q$ induces a map of long exact sequences. In the upper row the middle term is the direct sum of two copies of $H_n(X)$, and the map $i_*$ is surjective since $X \times I$ deformation retracts onto $X \times \{0\}$ and $X \times \{1\}$. Surjectivity of the maps $i_*$ in the upper row implies that the next maps are 0, which in turn implies that the maps $\partial$ are injective. Thus the map $\partial$ in the upper row gives an isomorphism of $H_{n+1}(X \times I, X \times \partial I)$ onto the kernel of $i_*$, which consists of the pairs $(\alpha, -\alpha)$ for $\alpha \in H_n(X)$. This kernel is a copy of $H_n(X)$, and the middle vertical map $q_*$ takes $(\alpha, -\alpha)$ to $f_*(\alpha) - g_*(\alpha)$. The left-hand $q_*$ is an isomorphism since these are good pairs and $q$ induces a homeomorphism of quotient spaces $(X \times I)/(X \times \partial I) \to Z/Y$. Hence if we replace $H_{n+1}(Z, Y)$ in the lower exact sequence by the isomorphic group $H_n(X) \approx \text{Ker } i_*$ we obtain the long exact sequence we want.
>
> In the case of the mapping torus of a reflection $g : S^1 \to S^1$, with $Z$ a Klein bottle, the interesting portion of the exact sequence $(*)$ gives $H_2(Z) = 0$ and we have a short exact sequence $0 \to \mathbb{Z}_2 \to H_1(Z) \to \mathbb{Z} \to 0$. This splits since $\mathbb{Z}$ is free, so $H_1(Z) \approx \mathbb{Z}_2 \oplus \mathbb{Z}$.
>
> If $Y$ is the disjoint union of spaces $Y_1$ and $Y_2$, with $f : X \to Y_1$ and $g : X \to Y_2$, then $Z$ consists of the mapping cylinders of these two maps with their domain ends identified. For example, suppose we have a CW complex decomposed as the union of two subcomplexes $A$ and $B$ and we take $f$ and $g$ to be the inclusions $A \cap B \hookrightarrow A$ and $A \cap B \hookrightarrow B$. Then the double mapping cylinder $Z$ is homotopy equivalent to $A \cup B$ since we can view $Z$ as $(A \cap B) \times I$ with $A$ and $B$ attached at the two ends, and then slide the attaching of $A$ down to the $B$ end to produce $A \cup B$ with $(A \cap B) \times I$ attached at one of its ends. By Proposition 0.18 the sliding operation preserves homotopy type, so we obtain a homotopy equivalence $Z \simeq A \cup B$. The exact sequence $(*)$ in this case is the Mayer–Vietoris sequence.

A relative form of the Mayer–Vietoris sequence is sometimes useful. If one has a pair of spaces $(X, Y) = (A \cup B, C \cup D)$ with $C \subset A$ and $D \subset B$, such that $X$ is the union of the interiors of $A$ and $B$, and $Y$ is the union of the interiors of $C$ and $D$, then there is a **relative Mayer–Vietoris sequence**

$$
\cdots \to H_n(A \cap B, C \cap D) \xrightarrow{\Phi} H_n(A, C) \oplus H_n(B, D) \xrightarrow{\Psi} H_n(X, Y) \xrightarrow{\partial} \cdots \tag{2.6}
$$

To derive this, consider the commutative diagram where $C_n(A + B, C + D)$ is the quotient of the subgroup $C_n(A + B) \subset C_n(X)$ by its subgroup $C_n(C + D) \subset C_n(Y)$. Thus the three columns of the diagram are exact. We have seen that the first two rows are exact, and we claim that the third row is exact also, with the maps $\varphi$ and $\psi$ induced from the $\varphi$ and $\psi$ in the second row. Since $\psi\varphi = 0$ in the second row, this holds also in the third row, so the third row is at least a chain complex. Viewing the three rows as chain complexes, the diagram then represents a short exact sequence of chain complexes. The associated long exact sequence of homology groups has two out of every three terms zero since the first two rows of the diagram are exact. Hence the remaining homology groups are zero and the third row is exact.

The third column maps to $0 \to C_n(Y) \to C_n(X) \to C_n(X, Y) \to 0$, inducing maps of homology groups that are isomorphisms for the $X$ and $Y$ terms as we have seen above. So by the five-lemma the maps $C_n(A + B, C + D) \to C_n(X, Y)$ also induce isomorphisms on homology. The relative Mayer–Vietoris sequence is then the long exact sequence of homology groups associated to the short exact sequence of chain complexes given by the third row of the diagram.

## 2.7 Homology with Coefficients

There is an easy generalization of the homology theory we have considered so far that behaves in a very similar fashion and sometimes offers technical advantages. The generalization consists of using chains of the form $\sum_i n_i \sigma_i$ where each $\sigma_i$ is a singular $n$-simplex in $X$ as before, but now the coefficients $n_i$ are taken to lie in a fixed abelian group $G$ rather than $\mathbb{Z}$. Such $n$-chains form an abelian group $C_n(X; G)$, and there is the expected relative version $C_n(X, A; G) = C_n(X; G)/C_n(A; G)$. The old formula for the boundary maps $\partial$ can still be used for arbitrary $G$, namely $\partial\left(\sum_i n_i \sigma_i\right) = \sum_{i,j} (-1)^j n_i \sigma_i|_{[v_0, \cdots, \hat{v}_j, \cdots, v_n]}$. Just as before, a calculation shows that $\partial^2 = 0$, so the groups $C_n(X; G)$ and $C_n(X, A; G)$ form chain complexes. The resulting homology groups $H_n(X; G)$ and $H_n(X, A; G)$ are called **homology groups with coefficients in $G$**. Reduced groups $\tilde{H}_n(X; G)$ are defined via the augmented chain complex $\cdots \to C_0(X; G) \xrightarrow{\varepsilon} G \to 0$ with $\varepsilon$ again defined by summing coefficients.

The case $G = \mathbb{Z}_2$ is particularly simple since one is just considering sums of singular simplices with coefficients 0 or 1, so by discarding terms with coefficient 0 one can think of chains as just finite 'unions' of singular simplices. The boundary formulas also simplify since one no longer has to worry about signs. Since signs are an algebraic representation of orientation considerations, one can also ignore orientations. This means that homology with $\mathbb{Z}_2$ coefficients is often the most natural tool in the absence of orientability.

All the theory we developed in §2.1 for $\mathbb{Z}$ coefficients carries over directly to general coefficient groups $G$ with no change in the proofs. The same is true for Mayer–Vietoris sequences. Differences between $H_n(X; G)$ and $H_n(X)$ begin to appear only when one starts making calculations. When $X$ is a point, the method used to compute $H_n(X)$ shows that $H_n(X; G)$ is $G$ for $n = 0$ and 0 for $n > 0$. From this it follows just as for $G = \mathbb{Z}$ that $\tilde{H}_n(S^k; G)$ is $G$ for $n = k$ and 0 otherwise.

Cellular homology also generalizes to homology with coefficients, with the cellular chain group $H_n(X^n, X^{n-1})$ replaced by $H_n(X^n, X^{n-1}; G)$, which is a direct sum of $G$'s, one for each $n$-cell. The proof that the cellular homology groups $H_n^{CW}(X)$ agree with singular homology $H_n(X)$ extends immediately to give $H_n^{CW}(X; G) \approx H_n(X; G)$. The cellular boundary maps are given by the same formula as for $\mathbb{Z}$ coefficients, $d_n\left(\sum_\alpha n_\alpha e^n_\alpha\right) = \sum_{\alpha,\beta} d_{\alpha\beta} n_\alpha e^{n-1}_\beta$. The old proof applies, but the following result is needed to know that the coefficients $d_{\alpha\beta}$ are the same as before:

> [!lemma] Lemma 2.3
> If $f : S^k \to S^k$ has degree $m$, then $f_* : H_k(S^k; G) \to H_k(S^k; G)$ is multiplication by $m$.

> [!proof] Proof of Lemma 2.49
> As a preliminary observation, note that a homomorphism $\varphi : G_1 \to G_2$ induces maps $\varphi_\sharp : C_n(X, A; G_1) \to C_n(X, A; G_2)$ commuting with boundary maps, so there are induced homomorphisms $\varphi_* : H_n(X, A; G_1) \to H_n(X, A; G_2)$. These have various naturality properties. For example, they give a commutative diagram mapping the long exact sequence of homology for the pair $(X, A)$ with $G_1$ coefficients to the corresponding sequence with $G_2$ coefficients. Also, the maps $\varphi_*$ commute with homomorphisms $f_*$ induced by maps $f : (X, A) \to (Y, B)$.
>
> Now let $f : S^k \to S^k$ have degree $m$ and let $\varphi : \mathbb{Z} \to G$ take 1 to a given element $g \in G$. Then we have a commutative diagram, where commutativity of the outer two squares comes from the inductive calculation of these homology groups, reducing to the case $k = 0$ when the commutativity is obvious. Since the diagram commutes, the assumption that the map across the top takes 1 to $m$ implies that the map across the bottom takes $g$ to $mg$.

> [!example] Example 2.14
> It is instructive to see what happens to the homology of $\mathbb{R}P^n$ when the coefficient group $G$ is chosen to be a field $F$. The cellular chain complex is
> $$\cdots \to F \xrightarrow{0} F \xrightarrow{2} F \xrightarrow{0} F \xrightarrow{2} F \xrightarrow{0} F \to 0$$
> Hence if $F$ has characteristic 2, for example if $F = \mathbb{Z}_2$, then $H_k(\mathbb{R}P^n; F) \approx F$ for $0 \leq k \leq n$, a more uniform answer than with $\mathbb{Z}$ coefficients. On the other hand, if $F$ has characteristic different from 2 then the boundary maps $F \xrightarrow{2} F$ are isomorphisms, hence $H_k(\mathbb{R}P^n; F)$ is $F$ for $k = 0$ and for $k = n$ odd, and is zero otherwise.
>
> In §3.A we will see that there is a general algebraic formula expressing homology with arbitrary coefficients in terms of homology with $\mathbb{Z}$ coefficients.

In spite of the fact that homology with $\mathbb{Z}$ coefficients determines homology with other coefficient groups, there are many situations where homology with a suitably chosen coefficient group can provide more information than homology with $\mathbb{Z}$ coefficients. A good example of this is the proof of the Borsuk–Ulam theorem using $\mathbb{Z}_2$ coefficients in §2.B.

As another illustration, we will now give an example of a map $f : X \to Y$ with the property that the induced maps $f_*$ are trivial for homology with $\mathbb{Z}$ coefficients but not for homology with $\mathbb{Z}_m$ coefficients for suitably chosen $m$. Thus homology with $\mathbb{Z}_m$ coefficients tells us that $f$ is not homotopic to a constant map, which we would not know using only $\mathbb{Z}$ coefficients.

> [!example] Example 2.15
> Let $X$ be a Moore space $M(\mathbb{Z}_m, n)$ obtained from $S^n$ by attaching a cell $e^{n+1}$ by a map of degree $m$. The quotient map $f : X \to X/S^n = S^{n+1}$ induces trivial homomorphisms on reduced homology with $\mathbb{Z}$ coefficients since the nonzero reduced homology groups of $X$ and $S^{n+1}$ occur in different dimensions. But with $\mathbb{Z}_m$ coefficients the story is different, as we can see by considering the long exact sequence of the pair $(X, S^n)$, which contains the segment
> $$0 = \tilde{H}_{n+1}(S^n; \mathbb{Z}_m) \to \tilde{H}_{n+1}(X; \mathbb{Z}_m) \xrightarrow{f_*} \tilde{H}_{n+1}(X/S^n; \mathbb{Z}_m)$$
> Exactness says that $f_*$ is injective, hence nonzero since $\tilde{H}_{n+1}(X; \mathbb{Z}_m)$ is $\mathbb{Z}_m$, the cellular boundary map $H_{n+1}(X^{n+1}, X^n; \mathbb{Z}_m) \to H_n(X^n, X^{n-1}; \mathbb{Z}_m)$ being $\mathbb{Z}_m \xrightarrow{m} \mathbb{Z}_m$.

## 2.8 Exercises

1. Prove the Brouwer fixed point theorem for maps $f : D^n \to D^n$ by applying degree theory to the map $S^n \to S^n$ that sends both the northern and southern hemispheres of $S^n$ to the southern hemisphere via $f$. [This was Brouwer's original proof.]

2. Given a map $f : S^{2n} \to S^{2n}$, show that there is some point $x \in S^{2n}$ with either $f(x) = x$ or $f(x) = -x$. Deduce that every map $\mathbb{R}P^{2n} \to \mathbb{R}P^{2n}$ has a fixed point. Construct maps $\mathbb{R}P^{2n-1} \to \mathbb{R}P^{2n-1}$ without fixed points from linear transformations $\mathbb{R}^{2n} \to \mathbb{R}^{2n}$ without eigenvectors.

3. Let $f : S^n \to S^n$ be a map of degree zero. Show that there exist points $x, y \in S^n$ with $f(x) = x$ and $f(y) = -y$. Use this to show that if $F$ is a continuous vector field defined on the unit ball $D^n$ in $\mathbb{R}^n$ such that $F(x) \neq 0$ for all $x$, then there exists a point on $\partial D^n$ where $F$ points radially outward and another point on $\partial D^n$ where $F$ points radially inward.

4. Construct a surjective map $S^n \to S^n$ of degree zero, for each $n \geq 1$.

5. Show that any two reflections of $S^n$ across different $n$-dimensional hyperplanes are homotopic, in fact homotopic through reflections. [The linear algebra formula for a reflection in terms of inner products may be helpful.]

6. Show that every map $S^n \to S^n$ can be homotoped to have a fixed point if $n > 0$.

7. For an invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ show that the induced map on $H_n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \approx \tilde{H}_{n-1}(\mathbb{R}^n - \{0\}) \approx \mathbb{Z}$ is $\mathbb{1}$ or $-\mathbb{1}$ according to whether the determinant of $f$ is positive or negative. [Use Gaussian elimination to show that the matrix of $f$ can be joined by a path of invertible matrices to a diagonal matrix with $\pm 1$'s on the diagonal.]

8. A polynomial $f(z)$ with complex coefficients, viewed as a map $\mathbb{C} \to \mathbb{C}$, can always be extended to a continuous map of one-point compactifications $\hat{f} : S^2 \to S^2$. Show that the degree of $\hat{f}$ equals the degree of $f$ as a polynomial. Show also that the local degree of $\hat{f}$ at a root of $f$ is the multiplicity of the root.

9. Compute the homology groups of the following 2-complexes:
(a) The quotient of $S^2$ obtained by identifying north and south poles to a point.
(b) $S^1 \times (S^1 \vee S^1)$.
(c) The space obtained from $D^2$ by first deleting the interiors of two disjoint subdisks in the interior of $D^2$ and then identifying all three resulting boundary circles together via homeomorphisms preserving clockwise orientations of these circles.
(d) The quotient space of $S^1 \times S^1$ obtained by identifying points in the circle $S^1 \times \{x_0\}$ that differ by $2\pi/m$ rotation and identifying points in the circle $\{x_0\} \times S^1$ that differ by $2\pi/n$ rotation.

10. Let $X$ be the quotient space of $S^2$ under the identifications $x \sim -x$ for $x$ in the equator $S^1$. Compute the homology groups $\tilde{H}_i(X)$. Do the same for $S^3$ with antipodal points of the equatorial $S^2 \subset S^3$ identified.

11. In an exercise for §1.2 we described a 3-dimensional CW complex obtained from the cube $I^3$ by identifying opposite faces via a one-quarter twist. Compute the homology groups of this complex.

12. Show that the quotient map $S^1 \times S^1 \to S^2$ collapsing the subspace $S^1 \vee S^1$ to a point is not nullhomotopic by showing that it induces an isomorphism on $H_2$. On the other hand, show via covering spaces that any map $S^2 \to S^1 \times S^1$ is nullhomotopic.

13. Let $X$ be the 2-complex obtained from $S^1$ with its usual cell structure by attaching two 2-cells by maps of degrees 2 and 3, respectively.
(a) Compute the homology groups of all the subcomplexes $A \subset X$ and the corresponding quotient complexes $X/A$.
(b) Show that $X \simeq S^2$ and that the only subcomplex $A \subset X$ for which the quotient map $X \to X/A$ is a homotopy equivalence is the trivial subcomplex, the 0-cell.

14. A map $f : S^n \to S^n$ satisfying $f(x) = f(-x)$ for all $x$ is called an **even map**. Show that an even map $S^n \to S^n$ must have even degree, and that the degree must in fact be zero when $n$ is even. When $n$ is odd, show there exist even maps of any given even degree. [Hints: If $f$ is even, it factors as a composition $S^n \to \mathbb{R}P^n \to S^n$. Using the calculation of $H_n(\mathbb{R}P^n)$ in the text, show that the induced map $H_n(S^n) \to H_n(\mathbb{R}P^n)$ sends a generator to twice a generator when $n$ is odd. It may be helpful to show that the quotient map $\mathbb{R}P^n \to \mathbb{R}P^n/\mathbb{R}P^{n-1}$ induces an isomorphism on $H_n$ when $n$ is odd.]

15. Show that if $X$ is a CW complex then $H_n(X^n)$ is free by identifying it with the kernel of the cellular boundary map $H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1}, X^{n-2})$.

16. Let $\Delta^n = [v_0, \cdots, v_n]$ have its natural $\Delta$-complex structure with $k$-simplices $[v_{i_0}, \cdots, v_{i_k}]$ for $i_0 < \cdots < i_k$. Compute the ranks of the simplicial (or cellular) chain groups $\Delta_i(\Delta^n)$ and the subgroups of cycles and boundaries. [Hint: Pascal's triangle.] Apply this to show that the $k$-skeleton of $\Delta^n$ has homology groups $\tilde{H}_i((\Delta^n)^k)$ equal to 0 for $i < k$, and free of rank $\binom{n}{k+1}$ for $i = k$.

17. Show the isomorphism between cellular and singular homology is natural in the following sense: A map $f : X \to Y$ that is cellular — satisfying $f(X^n) \subset Y^n$ for all $n$ — induces a chain map $f_\sharp$ between the cellular chain complexes of $X$ and $Y$, and the map $f_* : H_n^{CW}(X) \to H_n^{CW}(Y)$ induced by this chain map corresponds to $f_* : H_n(X) \to H_n(Y)$ under the isomorphism $H_n^{CW} \approx H_n$.

18. For a CW pair $(X, A)$ show there is a relative cellular chain complex formed by the groups $H_i(X^i, X^{i-1} \cup A^i)$, having homology groups isomorphic to $H_n(X, A)$.

19. Compute $\tilde{H}_i(\mathbb{R}P^n/\mathbb{R}P^m)$ for $m < n$ by cellular homology, using the standard CW structure on $\mathbb{R}P^n$ with $\mathbb{R}P^m$ as its $m$-skeleton.

20. For finite CW complexes $X$ and $Y$, show that $\chi(X \times Y) = \chi(X)\chi(Y)$.

21. If a finite CW complex $X$ is the union of subcomplexes $A$ and $B$, show that $\chi(X) = \chi(A) + \chi(B) - \chi(A \cap B)$.

22. For $X$ a finite CW complex and $p : \hat{X} \to X$ an $n$-sheeted covering space, show that $\chi(\hat{X}) = n\chi(X)$.

23. Show that if the closed orientable surface $M_g$ of genus $g$ is a covering space of $M_h$, then $g = n(h - 1) + 1$ for some $n$, namely, $n$ is the number of sheets in the covering. [Conversely, if $g = n(h - 1) + 1$ then there is an $n$-sheeted covering $M_g \to M_h$, as we saw in Example 1.41.]

24. Suppose we build $S^2$ from a finite collection of polygons by identifying edges in pairs. Show that in the resulting CW structure on $S^2$ the 1-skeleton cannot be either of the two graphs shown, with five and six vertices. [This is one step in a proof that neither of these graphs embeds in $\mathbb{R}^2$.]

25. Show that for each $n \in \mathbb{Z}$ there is a unique function $\varphi$ assigning an integer to each finite CW complex, such that (a) $\varphi(X) = \varphi(Y)$ if $X$ and $Y$ are homeomorphic, (b) $\varphi(X) = \varphi(A) + \varphi(X/A)$ if $A$ is a subcomplex of $X$, and (c) $\varphi(S^0) = n$. For such a function $\varphi$, show that $\varphi(X) = \varphi(Y)$ if $X \simeq Y$.

26. For a pair $(X, A)$, let $X \cup CA$ be $X$ with a cone on $A$ attached.
(a) Show that $X$ is a retract of $X \cup CA$ iff $A$ is contractible in $X$: There is a homotopy $f_t : A \to X$ with $f_0$ the inclusion $A \hookrightarrow X$ and $f_1$ a constant map.
(b) Show that if $A$ is contractible in $X$ then $H_n(X, A) \approx \tilde{H}_n(X) \oplus \tilde{H}_{n-1}(A)$, using the fact that $(X \cup CA)/X$ is the suspension $SA$ of $A$.

27. The short exact sequences $0 \to C_n(A) \to C_n(X) \to C_n(X, A) \to 0$ always split, but why does this not always yield splittings $H_n(X) \approx H_n(A) \oplus H_n(X, A)$?

28. (a) Use the Mayer–Vietoris sequence to compute the homology groups of the space obtained from a torus $S^1 \times S^1$ by attaching a Möbius band via a homeomorphism from the boundary circle of the Möbius band to the circle $S^1 \times \{x_0\}$ in the torus.
(b) Do the same for the space obtained by attaching a Möbius band to $\mathbb{R}P^2$ via a homeomorphism of its boundary circle to the standard $\mathbb{R}P^1 \subset \mathbb{R}P^2$.

29. The surface $M_g$ of genus $g$, embedded in $\mathbb{R}^3$ in the standard way, bounds a compact region $R$. Two copies of $R$, glued together by the identity map between their boundary surfaces $M_g$, form a closed 3-manifold $X$. Compute the homology groups of $X$ via the Mayer–Vietoris sequence for this decomposition of $X$ into two copies of $R$. Also compute the relative groups $H_i(R, M_g)$.

30. For the mapping torus $T_f$ of a map $f : X \to X$, we constructed in Example 2.48 a long exact sequence $\cdots \to H_n(X) \xrightarrow{\mathbb{1} - f_*} H_n(X) \to H_n(T_f) \to H_{n-1}(X) \to \cdots$. Use this to compute the homology of the mapping tori of the following maps:
(a) A reflection $S^2 \to S^2$.
(b) A map $S^2 \to S^2$ of degree 2.
(c) The map $S^1 \times S^1 \to S^1 \times S^1$ that is the identity on one factor and a reflection on the other.
(d) The map $S^1 \times S^1 \to S^1 \times S^1$ that is a reflection on each factor.
(e) The map $S^1 \times S^1 \to S^1 \times S^1$ that interchanges the two factors and then reflects one of the factors.

31. Use the Mayer–Vietoris sequence to show there are isomorphisms $\tilde{H}_n(X \vee Y) \approx \tilde{H}_n(X) \oplus \tilde{H}_n(Y)$ if the basepoints of $X$ and $Y$ that are identified in $X \vee Y$ are deformation retracts of neighborhoods $U \subset X$ and $V \subset Y$.

32. For $SX$ the suspension of $X$, show by a Mayer–Vietoris sequence that there are isomorphisms $\tilde{H}_n(SX) \approx \tilde{H}_{n-1}(X)$ for all $n$.

33. Suppose the space $X$ is the union of open sets $A_1, \cdots, A_n$ such that each intersection $A_{i_1} \cap \cdots \cap A_{i_k}$ is either empty or has trivial reduced homology groups. Show that $\tilde{H}_i(X) = 0$ for $i \geq n - 1$, and give an example showing this inequality is best possible, for each $n$.

34. [Deleted — see the errata for comments.]

35. Use the Mayer–Vietoris sequence to show that a nonorientable closed surface, or more generally a finite simplicial complex $X$ for which $H_1(X)$ contains torsion, cannot be embedded as a subspace of $\mathbb{R}^3$ in such a way as to have a neighborhood homeomorphic to the mapping cylinder of some map from a closed orientable surface to $X$. [This assumption on a neighborhood is in fact not needed if one deduces the result from Alexander duality in §3.3.]

36. Show that $H_i(X \times S^n) \approx H_i(X) \oplus H_{i-n}(X)$ for all $i$ and $n$, where $H_i = 0$ for $i < 0$ by definition. Namely, show $H_i(X \times S^n) \approx H_i(X) \oplus H_i(X \times S^n, X \times \{x_0\})$ and $H_i(X \times S^n, X \times \{x_0\}) \approx H_{i-1}(X \times S^{n-1}, X \times \{x_0\})$. [For the latter isomorphism the relative Mayer–Vietoris sequence yields an easy proof.]

37. Give an elementary derivation for the Mayer–Vietoris sequence in simplicial homology for a $\Delta$-complex $X$ decomposed as the union of subcomplexes $A$ and $B$.

38. Show that a commutative diagram with the two sequences across the top and bottom exact, gives rise to an exact sequence $\cdots \to E_{n+1} \to B_n \to C_n \oplus D_n \to E_n \to B_{n-1} \to \cdots$ where the maps are obtained from those in the previous diagram in the obvious way, except that $B_n \to C_n \oplus D_n$ has a minus sign in one coordinate.

39. Use the preceding exercise to derive relative Mayer–Vietoris sequences for CW pairs $(X, Y) = (A \cup B, C \cup D)$ with $A = B$ or $C = D$.

40. From the long exact sequence of homology groups associated to the short exact sequence of chain complexes $0 \to C_i(X) \xrightarrow{n} C_i(X) \to C_i(X; \mathbb{Z}_n) \to 0$ deduce immediately that there are short exact sequences
$$
0 \to H_i(X)/nH_i(X) \to H_i(X; \mathbb{Z}_n) \to n\text{-Torsion}(H_{i-1}(X)) \to 0 \tag{2.7}
$$
where $n\text{-Torsion}(G)$ is the kernel of the map $G \xrightarrow{n} G$, $g \mapsto ng$. Use this to show that $\tilde{H}_i(X; \mathbb{Z}_p) = 0$ for all $i$ and all primes $p$ iff $\tilde{H}_i(X)$ is a vector space over $\mathbb{Q}$ for all $i$.

41. For $X$ a finite CW complex and $F$ a field, show that the Euler characteristic $\chi(X)$ can also be computed by the formula $\chi(X) = \sum_n (-1)^n \dim H_n(X; F)$, the alternating sum of the dimensions of the vector spaces $H_n(X; F)$.

42. Let $X$ be a finite connected graph having no vertex that is the endpoint of just one edge, and suppose that $H_1(X; \mathbb{Z})$ is free abelian of rank $n > 1$, so the group of automorphisms of $H_1(X; \mathbb{Z})$ is $GL_n(\mathbb{Z})$, the group of invertible $n \times n$ matrices with integer entries whose inverse matrix also has integer entries. Show that if $G$ is a finite group of homeomorphisms of $X$, then the homomorphism $G \to GL_n(\mathbb{Z})$ assigning to $g : X \to X$ the induced homomorphism $g_* : H_1(X; \mathbb{Z}) \to H_1(X; \mathbb{Z})$ is injective. Show the same result holds if the coefficient group $\mathbb{Z}$ is replaced by $\mathbb{Z}_m$ with $m > 2$. What goes wrong when $m = 2$?

43. (a) Show that a chain complex of free abelian groups $C_n$ splits as a direct sum of subcomplexes $0 \to L_{n+1} \to K_n \to 0$ with at most two nonzero terms. [Show the short exact sequence $0 \to \text{Ker } \partial \to C_n \to \text{Im } \partial \to 0$ splits and take $K_n = \text{Ker } \partial$.]
(b) In case the groups $C_n$ are finitely generated, show there is a further splitting into summands $0 \to \mathbb{Z} \to 0$ and $0 \to \mathbb{Z} \xrightarrow{m} \mathbb{Z} \to 0$. [Reduce the matrix of the boundary map $L_{n+1} \to K_n$ to echelon form by elementary row and column operations.]
(c) Deduce that if $X$ is a CW complex with finitely many cells in each dimension, then $H_n(X; G)$ is the direct sum of the following groups:
- a copy of $G$ for each $\mathbb{Z}$ summand of $H_n(X)$
- a copy of $G/mG$ for each $\mathbb{Z}_m$ summand of $H_n(X)$
- a copy of the kernel of $G \xrightarrow{m} G$ for each $\mathbb{Z}_m$ summand of $H_{n-1}(X)$