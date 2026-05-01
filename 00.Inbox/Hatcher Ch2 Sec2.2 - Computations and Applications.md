---
title: "Hatcher Chapter 2 Section 2.2 - Computations and Applications"
tags: [algebraic-topology, homology, cellular-homology, degree, mayer-vietoris]
source: "ATHatcher - Chapter2 - Homology.pdf"
---

# 2.2 Computations and Applications

## Degree

For a map $f : S^n \to S^n$ with $n > 0$, the induced map $f_* : H_n(S^n) \to H_n(S^n)$ is a homomorphism from an infinite cyclic group to itself and so must be of the form $f_*(\alpha) = d\alpha$ for some integer $d$ depending only on $f$. This integer is called the **degree** of $f$, with the notation $\deg f$. 

Here are some basic properties of degree:

> [!theorem] Properties of Degree
> (a) $\deg \mathbb{1} = 1$, since $(\mathbb{1})_* = \mathbb{1}$.
> 
> (b) $\deg f = 0$ if $f$ is not surjective. For if we choose a point $x_0 \in S^n - f(S^n)$ then $f$ can be factored as a composition $S^n \to S^n - \{x_0\} \hookrightarrow S^n$ and $H_n(S^n - \{x_0\}) = 0$ since $S^n - \{x_0\}$ is contractible. Hence $f_* = 0$.
> 
> (c) If $f \simeq g$ then $\deg f = \deg g$ since $f_* = g_*$. The converse statement, that $f \simeq g$ if $\deg f = \deg g$, is a fundamental theorem of Hopf from around 1925 which we prove in Corollary 4.25.
> 
> (d) $\deg(f \circ g) = \deg f \cdot \deg g$, since $(f \circ g)_* = f_* \circ g_*$. As a consequence, $\deg f = \pm 1$ if $f$ is a homotopy equivalence since $f \circ g \simeq \mathbb{1}$ implies $\deg f \cdot \deg g = \deg \mathbb{1} = 1$.
> 
> (e) $\deg f = -1$ if $f$ is a reflection of $S^n$, fixing the points in a subsphere $S^{n-1}$ and interchanging the two complementary hemispheres. For we can give $S^n$ a $\Delta$-complex structure with these two hemispheres as its two $n$-simplices $\sigma_1^n$ and $\sigma_2^n$, and the $n$-chain $\sigma_1^n - \sigma_2^n$ represents a generator of $H_n(S^n)$ as we saw in Example 2.23, so the reflection interchanging $\sigma_1^n$ and $\sigma_2^n$ sends this generator to its negative.
> 
> (f) The antipodal map $-\mathbb{1} : S^n \to S^n$, $x \mapsto -x$, has degree $(-1)^{n+1}$ since it is the composition of $n+1$ reflections, each changing the sign of one coordinate in $\mathbb{R}^{n+1}$.
> 
> (g) If $f : S^n \to S^n$ has no fixed points then $\deg f = (-1)^{n+1}$. For if $f(x) \neq x$ then the line segment from $f(x)$ to $-x$, defined by $t \mapsto (1-t)f(x) - tx$ for $0 \leq t \leq 1$, does not pass through the origin. Hence if $f$ has no fixed points, the formula $f_t(x) = [(1-t)f(x) - tx]/|(1-t)f(x) - tx|$ defines a homotopy from $f$ to the antipodal map. Note that the antipodal map has no fixed points, so the fact that maps without fixed points are homotopic to the antipodal map is a sort of converse statement.


### Application: Tangent Vector Fields

Here is an interesting application of degree:

> [!theorem] Theorem 2.28
> $S^n$ has a continuous field of nonzero tangent vectors iff $n$ is odd.

**Proof:** Suppose $x \mapsto v(x)$ is a tangent vector field on $S^n$, assigning to a vector $x \in S^n$ the vector $v(x)$ tangent to $S^n$ at $x$. Regarding $v(x)$ as a vector at the origin instead of at $x$, tangency just means that $x$ and $v(x)$ are orthogonal in $\mathbb{R}^{n+1}$.

If $v(x) \neq 0$ for all $x$, we may normalize so that $|v(x)| = 1$ for all $x$ by replacing $v(x)$ by $v(x)/|v(x)|$. Assuming this has been done, the vectors $(\cos t)x + (\sin t)v(x)$ lie in the unit circle in the plane spanned by $x$ and $v(x)$. Letting $t$ go from $0$ to $\pi$, we obtain a homotopy $f_t(x) = (\cos t)x + (\sin t)v(x)$ from the identity map of $S^n$ to the antipodal map $-\mathbb{1}$. This implies that $\deg(-\mathbb{1}) = \deg \mathbb{1}$, hence $(-1)^{n+1} = 1$ and $n$ must be odd.

Conversely, if $n$ is odd, say $n = 2k-1$, we can define 
$$v(x_1, x_2, \ldots, x_{2k-1}, x_{2k}) = (-x_2, x_1, \ldots, -x_{2k}, x_{2k-1})$$
Then $v(x)$ is orthogonal to $x$, so $v$ is a tangent vector field on $S^n$, and $|v(x)| = 1$ for all $x \in S^n$. $\square$

For the much more difficult problem of finding the maximum number of tangent vector fields on $S^n$ that are linearly independent at each point, see [VBKT] or [Husemoller 1966].

Another nice application of degree, giving a partial answer to a question raised in Example 1.43, is the following result:

> [!proposition] Proposition 2.29
> $\mathbb{Z}_2$ is the only nontrivial group that can act freely on $S^n$ if $n$ is even.

Recall that an **action** of a group $G$ on a space $X$ is a homomorphism from $G$ to the group $\text{Homeo}(X)$ of homeomorphisms $X \to X$, and the action is **free** if the homeomorphism corresponding to each nontrivial element of $G$ has no fixed points. In the case of $S^n$, the antipodal map $x \mapsto -x$ generates a free action of $\mathbb{Z}_2$.

**Proof:** Since homeomorphisms have degree $\pm 1$, an action of a group $G$ on $S^n$ determines a degree function $d : G \to \{\pm 1\}$. This is a homomorphism since $\deg(f \circ g) = \deg f \cdot \deg g$. If the action is free, $d$ sends each nontrivial element of $G$ to $(-1)^{n+1}$ by property (g) above. Thus when $n$ is even, $d$ has trivial kernel, so $G \cong \mathbb{Z}_2$. $\square$


### Local Degree

Next we describe a technique for computing degrees which can be applied to most maps that arise in practice. Suppose $f : S^n \to S^n$, $n > 0$, has the property that for some point $y \in S^n$, the preimage $f^{-1}(y)$ consists of only finitely many points, say $x_1, \ldots, x_m$. Let $U_1, \ldots, U_m$ be disjoint neighborhoods of these points, mapped by $f$ into a neighborhood $V$ of $y$. Then $f(U_i - x_i) \subset V - y$ for each $i$.

Through excision isomorphisms and exact sequences of pairs, we can define the **local degree** of $f$ at $x_i$, written $\deg f|_{x_i}$.

For example, if $f$ is a homeomorphism, then $y$ can be any point and there is only one corresponding $x_i$, so all the maps in the diagram are isomorphisms and $\deg f|_{x_i} = \deg f = \pm 1$. More generally, if $f$ maps each $U_i$ homeomorphically onto $V$, then $\deg f|_{x_i} = \pm 1$ for each $i$. This situation occurs quite often in applications, and it is usually not hard to determine the correct signs.

Here is the formula that reduces degree calculations to computing local degrees:

> [!proposition] Proposition 2.30
> $$\deg f = \sum_i \deg f|_{x_i}$$

**Proof:** By excision, the central term $H_n(S^n, S^n - f^{-1}(y))$ in the preceding diagram is the direct sum of the groups $H_n(U_i, U_i - x_i) \cong \mathbb{Z}$, with $k_i$ the inclusion of the $i$-th summand. The map $p_i$ is projection onto the $i$-th summand since the upper triangle commutes and $p_i k_j = 0$ for $j \neq i$, as $p_i k_j$ factors through $H_n(U_j, U_j) = 0$. Identifying the outer groups in the diagram with $\mathbb{Z}$ as before, commutativity of the lower triangle says that $p_i j(1) = 1$, hence $j(1) = (1, \ldots, 1) = \sum_i k_i(1)$. Commutativity of the upper square says that the middle $f_*$ takes $k_i(1)$ to $\deg f|_{x_i}$, hence the sum $\sum_i k_i(1) = j(1)$ is taken to $\sum_i \deg f|_{x_i}$. Commutativity of the lower square then gives the formula $\deg f = \sum_i \deg f|_{x_i}$. $\square$

**Example 2.31.** We can use this result to construct a map $S^n \to S^n$ of any given degree, for each $n \geq 1$. Let $q : S^n \to \bigvee_k S^n$ be the quotient map obtained by collapsing the complement of $k$ disjoint open balls $B_i$ in $S^n$ to a point, and let $p : \bigvee_k S^n \to S^n$ identify all the summands to a single sphere. Consider the composition $f = p \circ q$. For almost all $y \in S^n$ we have $f^{-1}(y)$ consisting of one point $x_i$ in each $B_i$. The local degree of $f$ at $x_i$ is $\pm 1$ since $f$ is a homeomorphism near $x_i$. By precomposing $p$ with reflections of the summands of $\bigvee_k S^n$ if necessary, we can make each local degree either $+1$ or $-1$, whichever we wish. Thus we can produce a map $S^n \to S^n$ of degree $\pm k$.

**Example 2.32.** In the case of $S^1$, the map $f(z) = z^k$, where we view $S^1$ as the unit circle in $\mathbb{C}$, has degree $k$. This is evident in the case $k = 0$ since $f$ is then constant. The case $k < 0$ reduces to the case $k > 0$ by composing with $z \mapsto z^{-1}$, which is a reflection, of degree $-1$. To compute the degree when $k > 0$, observe first that for any $y \in S^1$, $f^{-1}(y)$ consists of $k$ points $x_1, \ldots, x_k$ near each of which $f$ is a local homeomorphism, stretching a circular arc by a factor of $k$. This local stretching can be eliminated by a deformation of $f$ near $x_i$ that does not change local degree, so the local degree at $x_i$ is the same as for a rotation of $S^1$. A rotation is a homeomorphism so its local degree at any point equals its global degree, which is $+1$ since a rotation is homotopic to the identity. Hence $\deg f|_{x_i} = 1$ and $\deg f = k$.


Another way of obtaining a map $S^n \to S^n$ of degree $k$ is to take a repeated suspension of the map $z \mapsto z^k$ in Example 2.32, since suspension preserves degree:

> [!proposition] Proposition 2.33
> $\deg Sf = \deg f$, where $Sf : S^{n+1} \to S^{n+1}$ is the suspension of the map $f : S^n \to S^n$.

**Proof:** Let $CS^n$ denote the cone $(S^n \times I)/(S^n \times \{1\})$ with base $S^n = S^n \times \{0\} \subset CS^n$, so $CS^n/S^n$ is the suspension of $S^n$. The map $f$ induces $Cf : (CS^n, S^n) \to (CS^n, S^n)$ with quotient $Sf$. The naturality of the boundary maps in the long exact sequence of the pair $(CS^n, S^n)$ then gives commutativity of the diagram. Hence if $f_*$ is multiplication by $d$, so is $(Sf)_*$. $\square$

Note that for $f : S^n \to S^n$, the suspension $Sf$ maps only one point to each of the two 'poles' of $S^{n+1}$. This implies that the local degree of $Sf$ at each pole must equal the global degree of $Sf$. Thus the local degree of a map $S^n \to S^n$ can be any integer if $n \geq 2$, just as the degree itself can be any integer when $n \geq 1$.


## Cellular Homology

Cellular homology is a very efficient tool for computing the homology groups of CW complexes, based on degree calculations. Before giving the definition of cellular homology, we first establish a few preliminary facts:

> [!lemma] Lemma 2.34
> If $X$ is a CW complex, then:
> 
> (a) $H_k(X^n, X^{n-1})$ is zero for $k \neq n$ and is free abelian for $k = n$, with a basis in one-to-one correspondence with the $n$-cells of $X$.
> 
> (b) $H_k(X^n) = 0$ for $k > n$. In particular, if $X$ is finite-dimensional then $H_k(X) = 0$ for $k > \dim X$.
> 
> (c) The map $H_k(X^n) \to H_k(X)$ induced by the inclusion $X^n \hookrightarrow X$ is an isomorphism for $k < n$ and surjective for $k = n$.

**Proof:** Statement (a) follows immediately from the observation that $(X^n, X^{n-1})$ is a good pair and $X^n/X^{n-1}$ is a wedge sum of $n$-spheres, one for each $n$-cell of $X$. Here we are using Proposition 2.22 and Corollary 2.25. 

Next consider the following part of the long exact sequence of the pair $(X^n, X^{n-1})$:
$$H_{k+1}(X^n, X^{n-1}) \to H_k(X^{n-1}) \to H_k(X^n) \to H_k(X^n, X^{n-1})$$

If $k \geq n$ the last term is zero by part (a) so the middle map is surjective, while if $k \leq n-1$ then the first term is zero so the middle map is injective. Now look at the inclusion-induced homomorphisms
$$H_k(X^0) \to H_k(X^1) \to \cdots \to H_k(X^{k-1}) \to H_k(X^k) \to H_k(X^{k+1}) \to \cdots$$

By what we have just shown these are all isomorphisms except that the map to $H_k(X^k)$ may not be surjective and the map from $H_k(X^k)$ may not be injective. The first part of the sequence then gives statement (b) since $H_k(X^0) = 0$ when $k > 0$. Also, the last part of the sequence gives (c) when $X$ is finite-dimensional.

The proof of (c) when $X$ is infinite-dimensional requires more work, and this can be done in two different ways. The more direct approach is to descend to the chain level and use the fact that a singular chain in $X$ has compact image, hence meets only finitely many cells of $X$ by Proposition A.1 in the Appendix. 

The other approach is more general and uses a mapping telescope construction. $\square$

### The Cellular Chain Complex

Let $X$ be a CW complex. Using Lemma 2.34, portions of the long exact sequences for the pairs $(X^{n+1}, X^n)$, $(X^n, X^{n-1})$, and $(X^{n-1}, X^{n-2})$ fit into a diagram where $d_{n+1}$ and $d_n$ are defined as the compositions $j_n \circ \partial_{n+1}$ and $j_{n-1} \circ \partial_n$, which are just 'relativizations' of the boundary maps $\partial_{n+1}$ and $\partial_n$. 

The composition $d_n \circ d_{n+1}$ includes two successive maps in one of the exact sequences, hence is zero. Thus the horizontal row in the diagram is a chain complex:
$$\cdots \to H_n(X^n, X^{n-1}) \xrightarrow{d_n} H_{n-1}(X^{n-1}, X^{n-2}) \to \cdots$$

This is called the **cellular chain complex** of $X$ since $H_n(X^n, X^{n-1})$ is free with basis in one-to-one correspondence with the $n$-cells of $X$, so one can think of elements of $H_n(X^n, X^{n-1})$ as linear combinations of $n$-cells of $X$. The homology groups of this cellular chain complex are called the **cellular homology groups** of $X$. Temporarily we denote them $H_n^{\text{CW}}(X)$.

> [!theorem] Theorem 2.35
> $H_n^{\text{CW}}(X) \cong H_n(X)$.

**Proof:** From the diagram above, $H_n(X)$ can be identified with $H_n(X^n)/\text{Im}\,\partial_{n+1}$. Since $j_n$ is injective, it maps $\text{Im}\,\partial_{n+1}$ isomorphically onto $\text{Im}(j_n \circ \partial_{n+1}) = \text{Im}\,d_{n+1}$ and $H_n(X^n)$ isomorphically onto $\text{Im}\,j_n = \ker \partial_n$. Since $j_{n-1}$ is injective, $\ker \partial_n = \ker d_n$. Thus $j_n$ induces an isomorphism of the quotient $H_n(X^n)/\text{Im}\,\partial_{n+1}$ onto $\ker d_n/\text{Im}\,d_{n+1}$. $\square$


### Immediate Applications

Here are a few immediate applications:

(i) $H_n(X) = 0$ if $X$ is a CW complex with no $n$-cells.

(ii) More generally, if $X$ is a CW complex with $k$ $n$-cells, then $H_n(X)$ is generated by at most $k$ elements. For since $H_n(X^n, X^{n-1})$ is free abelian on $k$ generators, the subgroup $\ker d_n$ must be generated by at most $k$ elements, hence also the quotient $\ker d_n/\text{Im}\,d_{n+1}$.

(iii) If $X$ is a CW complex having no two of its cells in adjacent dimensions, then $H_n(X)$ is free abelian with basis in one-to-one correspondence with the $n$-cells of $X$. This is because the cellular boundary maps $d_n$ are automatically zero in this case.

This last observation applies for example to $\mathbb{CP}^n$, which has a CW structure with one cell of each even dimension $2k \leq 2n$ as we saw in Example 0.6. Thus
$$H_i(\mathbb{CP}^n) \cong \begin{cases} \mathbb{Z} & \text{for } i = 0, 2, 4, \ldots, 2n \ 0 & \text{otherwise} \end{cases}$$

Another simple example is $S^n \times S^n$ with $n > 1$, using the product CW structure consisting of a $0$-cell, two $n$-cells, and a $2n$-cell.

It is possible to prove the statements (i)–(iii) for finite-dimensional CW complexes by induction on the dimension, without using cellular homology but only the basic results from the previous section. However, the viewpoint of cellular homology makes (i)–(iii) quite transparent.

### The Cellular Boundary Formula

Next we describe how the cellular boundary maps $d_n$ can be computed. When $n = 1$ this is easy since the boundary map $d_1 : H_1(X^1, X^0) \to H_0(X^0)$ is the same as the simplicial boundary map $\Delta_1(X) \to \Delta_0(X)$. In case $X$ is connected and has only one $0$-cell, then $d_1$ must be $0$, otherwise $H_0(X)$ would not be $\mathbb{Z}$. 

When $n > 1$ we will show that $d_n$ can be computed in terms of degrees:

> [!theorem] Cellular Boundary Formula
> $$d_n(e^n_\alpha) = \sum_\beta d_{\alpha\beta} e^{n-1}_\beta$$
> where $d_{\alpha\beta}$ is the degree of the map $S^{n-1} \to X^{n-1} \to S^{n-1}$ that is the composition of the attaching map of $e^n_\alpha$ with the quotient map collapsing $X^{n-1} - e^{n-1}_\beta$ to a point.

Here we are identifying the cells $e^n_\alpha$ and $e^{n-1}_\beta$ with generators of the corresponding summands of the cellular chain groups. The summation in the formula contains only finitely many terms since the attaching map of $e^n_\alpha$ has compact image, so this image meets only finitely many cells $e^{n-1}_\beta$.


## Euler Characteristic

For a finite CW complex $X$, the **Euler characteristic** $\chi(X)$ is defined to be the alternating sum $\sum_n (-1)^n c_n$ where $c_n$ is the number of $n$-cells of $X$, generalizing the familiar formula vertices - edges + faces for 2-dimensional complexes. The following result shows that $\chi(X)$ can be defined purely in terms of homology, and hence depends only on the homotopy type of $X$. In particular, $\chi(X)$ is independent of the choice of CW structure on $X$.

> [!theorem] Theorem 2.44
> $$\chi(X) = \sum_n (-1)^n \text{rank}\, H_n(X)$$

Here the rank of a finitely generated abelian group is the number of $\mathbb{Z}$ summands when the group is expressed as a direct sum of cyclic groups. We shall need the following fact, whose proof we leave as an exercise: If $0 \to A \to B \to C \to 0$ is a short exact sequence of finitely generated abelian groups, then $\text{rank}\, B = \text{rank}\, A + \text{rank}\, C$.

**Proof:** This is purely algebraic. Let
$$0 \to C_k \xrightarrow{d_k} C_{k-1} \to \cdots \to C_1 \xrightarrow{d_1} C_0 \to 0$$
be a chain complex of finitely generated abelian groups, with cycles $Z_n = \ker d_n$, boundaries $B_n = \text{Im}\, d_{n+1}$, and homology $H_n = Z_n/B_n$. Thus we have short exact sequences $0 \to Z_n \to C_n \to B_{n-1} \to 0$ and $0 \to B_n \to Z_n \to H_n \to 0$, hence
$$\text{rank}\, C_n = \text{rank}\, Z_n + \text{rank}\, B_{n-1}$$
$$\text{rank}\, Z_n = \text{rank}\, B_n + \text{rank}\, H_n$$

Now substitute the second equation into the first, multiply the resulting equation by $(-1)^n$, and sum over $n$ to get $\sum_n (-1)^n \text{rank}\, C_n = \sum_n (-1)^n \text{rank}\, H_n$. Applying this with $C_n = H_n(X^n, X^{n-1})$ then gives the theorem. $\square$

For example, the surfaces $M_g$ and $N_g$ have Euler characteristics $\chi(M_g) = 2 - 2g$ and $\chi(N_g) = 2 - g$. Thus all the orientable surfaces $M_g$ are distinguished from each other by their Euler characteristics, as are the nonorientable surfaces $N_g$, and there are only the relations $\chi(M_g) = \chi(N_{2g})$.

## Split Exact Sequences

Suppose one has a retraction $r : X \to A$, so $r \circ i = \mathbb{1}$ where $i : A \hookrightarrow X$ is the inclusion. The induced map $i_* : H_n(A) \to H_n(X)$ is then injective since $r_* \circ i_* = \mathbb{1}$. From this it follows that the boundary maps in the long exact sequence for $(X, A)$ are zero, so the long exact sequence breaks up into short exact sequences
$$0 \to H_n(A) \xrightarrow{i_*} H_n(X) \xrightarrow{j_*} H_n(X, A) \to 0$$

The relation $r \circ i = \mathbb{1}$ actually gives more information than this, by the following piece of elementary algebra:

> [!lemma] Splitting Lemma
> For a short exact sequence $0 \to A \xrightarrow{i} B \xrightarrow{j} C \to 0$ of abelian groups, the following conditions are equivalent:
> 
> (a) There is a homomorphism $r : B \to A$ with $r \circ i = \mathbb{1}_A$.
> 
> (b) There is a homomorphism $s : C \to B$ with $j \circ s = \mathbb{1}_C$.
> 
> (c) There is an isomorphism $B \cong A \oplus C$ making the diagram commute, where the maps $A \to A \oplus C$ and $A \oplus C \to C$ are the natural inclusion and projection.

When these equivalent conditions hold, the sequence is said to **split**.


## Mayer-Vietoris Sequences

In addition to the long exact sequence of homology groups for a pair $(X, A)$, there is another sort of long exact sequence, known as a **Mayer-Vietoris sequence**, which is equally powerful but is sometimes more convenient to use. For a pair of subspaces $A, B \subset X$ such that $X$ is the union of the interiors of $A$ and $B$, this exact sequence has the form
$$\cdots \to H_n(A \cap B) \to H_n(A) \oplus H_n(B) \to H_n(X) \to H_{n-1}(A \cap B) \to \cdots \to H_0(X) \to 0$$

In addition to its usefulness for calculations, the Mayer-Vietoris sequence is also applied frequently in induction arguments, where one might know that a certain statement is true for $A$, $B$, and $A \cap B$ by induction and then deduce that it is true for $A \cup B$ by the exact sequence.

### Derivation

The Mayer-Vietoris sequence is easy to derive from the machinery of §2.1. Let $C_n(A + B)$ be the subgroup of $C_n(X)$ consisting of chains that are sums of chains in $A$ and chains in $B$. The usual boundary map $\partial : C_n(X) \to C_{n-1}(X)$ takes $C_n(A + B)$ to $C_{n-1}(A + B)$, so the $C_n(A + B)$'s form a chain complex. According to Proposition 2.21, the inclusions $C_n(A + B) \hookrightarrow C_n(X)$ induce isomorphisms on homology groups.

The Mayer-Vietoris sequence is then the long exact sequence of homology groups associated to the short exact sequence of chain complexes formed by the short exact sequences
$$0 \to C_n(A \cap B) \xrightarrow{\Phi} C_n(A) \oplus C_n(B) \xrightarrow{\Psi} C_n(A + B) \to 0$$
where $\Phi(\alpha) = (\alpha, -\alpha)$ and $\Psi(\alpha, \beta) = \alpha + \beta$.

The boundary map $\partial : H_n(X) \to H_{n-1}(A \cap B)$ can easily be made explicit. A class $\alpha \in H_n(X)$ is represented by a cycle $z$, and by barycentric subdivision or some other method we can choose $z$ to be a sum $x + y$ of chains in $A$ and $B$, respectively. It need not be true that $x$ and $y$ are cycles individually, but $\partial x = -\partial y$ since $\partial(x + y) = 0$, and the element $\partial \alpha \in H_{n-1}(A \cap B)$ is represented by the cycle $\partial x = -\partial y$.

There is also a formally identical Mayer-Vietoris sequence for reduced homology groups.

### Generalizations

There are also Mayer-Vietoris sequences for decompositions $X = A \cup B$ such that $A$ and $B$ are deformation retracts of neighborhoods $U$ and $V$ with $U \cap V$ deformation retracting onto $A \cap B$. For example, if $X$ is a CW complex and $A$ and $B$ are subcomplexes, then we can choose for $U$ and $V$ neighborhoods of the form $N(A)$ and $N(B)$ constructed in the Appendix, which have the property that $N(A) \cap N(B) = N(A \cap B)$.

### Examples

**Example 2.46.** Take $X = S^n$ with $A$ and $B$ the northern and southern hemispheres, so that $A \cap B = S^{n-1}$. Then in the reduced Mayer-Vietoris sequence the terms $\tilde{H}_i(A) \oplus \tilde{H}_i(B)$ are zero, so we obtain isomorphisms $\tilde{H}_i(S^n) \cong \tilde{H}_{i-1}(S^{n-1})$. This gives another way of calculating the homology groups of $S^n$ by induction.

**Example 2.47.** We can decompose the Klein bottle $K$ as the union of two Möbius bands $A$ and $B$ glued together by a homeomorphism between their boundary circles. Then $A$, $B$, and $A \cap B$ are homotopy equivalent to circles, so the interesting part of the reduced Mayer-Vietoris sequence for the decomposition $K = A \cup B$ is the segment
$$0 \to \tilde{H}_2(K) \to \tilde{H}_1(A \cap B) \xrightarrow{\Phi} \tilde{H}_1(A) \oplus \tilde{H}_1(B) \xrightarrow{\Psi} \tilde{H}_1(K) \to 0$$

The map $\Phi$ is $\mathbb{Z} \to \mathbb{Z} \oplus \mathbb{Z}$, $1 \mapsto (2, -2)$, since the boundary circle of a Möbius band wraps twice around the core circle. Since $\Phi$ is injective we obtain $\tilde{H}_2(K) = 0$. Furthermore, we have $\tilde{H}_1(K) \cong \mathbb{Z} \oplus \mathbb{Z}_2$ since we can choose $(1, 0)$ and $(1, -1)$ as a basis for $\mathbb{Z} \oplus \mathbb{Z}$. All the higher homology groups of $K$ are zero from the earlier part of the Mayer-Vietoris sequence.

**Example 2.48.** Let us describe an exact sequence which is somewhat similar to the Mayer-Vietoris sequence and which in some cases generalizes it. If we are given two maps $f, g : X \to Y$ then we can form a quotient space $Z$ of the disjoint union of $X \times I$ and $Y$ via the identifications $(x, 0) \sim f(x)$ and $(x, 1) \sim g(x)$, thus attaching one end of $X \times I$ to $Y$ by $f$ and the other end by $g$. 

For example, if $f$ and $g$ are each the identity map $X \to X$ then $Z = X \times S^1$. If only one of $f$ and $g$, say $f$, is the identity map, then $Z$ is homeomorphic to what is called the **mapping torus** of $g$, the quotient space of $X \times I$ under the identifications $(x, 0) \sim (g(x), 1)$. The Klein bottle is an example, with $g$ a reflection $S^1 \to S^1$.

The exact sequence we want has the form
$$\cdots \to H_n(X) \xrightarrow{f_* - g_*} H_n(Y) \xrightarrow{i_*} H_n(Z) \xrightarrow{\partial} H_{n-1}(X) \xrightarrow{f_* - g_*} H_{n-1}(Y) \to \cdots$$
where $i$ is the evident inclusion $Y \hookrightarrow Z$.


## Homology with Coefficients

There is an easy generalization of the homology theory we have considered so far that behaves in a very similar fashion and sometimes offers technical advantages. The generalization consists of using chains of the form $\sum_i n_i \sigma_i$ where each $\sigma_i$ is a singular $n$-simplex in $X$ as before, but now the coefficients $n_i$ are taken to lie in a fixed abelian group $G$ rather than $\mathbb{Z}$. 

Such $n$-chains form an abelian group $C_n(X; G)$, and there is the expected relative version $C_n(X, A; G) = C_n(X; G)/C_n(A; G)$. The old formula for the boundary maps $\partial$ can still be used for arbitrary $G$, namely 
$$\partial \sum_i n_i \sigma_i = \sum_{i,j} (-1)^j n_i \sigma_i|[v_0, \ldots, \hat{v}_j, \ldots, v_n]$$

Just as before, a calculation shows that $\partial^2 = 0$, so the groups $C_n(X; G)$ and $C_n(X, A; G)$ form chain complexes. The resulting homology groups $H_n(X; G)$ and $H_n(X, A; G)$ are called **homology groups with coefficients in $G$**. Reduced groups $\tilde{H}_n(X; G)$ are defined via the augmented chain complex $\cdots \to C_0(X; G) \xrightarrow{\varepsilon} G \to 0$ with $\varepsilon$ again defined by summing coefficients.

### Special Case: $\mathbb{Z}_2$ Coefficients

The case $G = \mathbb{Z}_2$ is particularly simple since one is just considering sums of singular simplices with coefficients $0$ or $1$, so by discarding terms with coefficient $0$ one can think of chains as just finite 'unions' of singular simplices. The boundary formulas also simplify since one no longer has to worry about signs. Since signs are an algebraic representation of orientation considerations, one can also ignore orientations. This means that homology with $\mathbb{Z}_2$ coefficients is often the most natural tool in the absence of orientability.

### General Theory

All the theory we developed in §2.1 for $\mathbb{Z}$ coefficients carries over directly to general coefficient groups $G$ with no change in the proofs. The same is true for Mayer-Vietoris sequences. Differences between $H_n(X; G)$ and $H_n(X)$ begin to appear only when one starts making calculations. When $X$ is a point, the method used to compute $H_n(X)$ shows that $H_n(X; G)$ is $G$ for $n = 0$ and $0$ for $n > 0$. From this it follows just as for $G = \mathbb{Z}$ that $H_n(S^k; G)$ is $G$ for $n = k$ and $0$ otherwise.

### Cellular Homology with Coefficients

Cellular homology also generalizes to homology with coefficients, with the cellular chain group $H_n(X^n, X^{n-1})$ replaced by $H_n(X^n, X^{n-1}; G)$, which is a direct sum of $G$'s, one for each $n$-cell. The proof that the cellular homology groups $H_n^{\text{CW}}(X)$ agree with singular homology $H_n(X)$ extends immediately to give $H_n^{\text{CW}}(X; G) \cong H_n(X; G)$. 

The cellular boundary maps are given by the same formula as for $\mathbb{Z}$ coefficients, $d_n(\sum_\alpha n_\alpha e^n_\alpha) = \sum_{\alpha,\beta} d_{\alpha\beta} n_\alpha e^{n-1}_\beta$. The old proof applies, but the following result is needed to know that the coefficients $d_{\alpha\beta}$ are the same as before:

> [!lemma] Lemma 2.49
> If $f : S^k \to S^k$ has degree $m$, then $f_* : H_k(S^k; G) \to H_k(S^k; G)$ is multiplication by $m$.

**Proof:** As a preliminary observation, note that a homomorphism $\phi : G_1 \to G_2$ induces maps $\phi_\# : C_n(X, A; G_1) \to C_n(X, A; G_2)$ commuting with boundary maps, so there are induced homomorphisms $\phi_* : H_n(X, A; G_1) \to H_n(X, A; G_2)$. These have various naturality properties.

Now let $f : S^k \to S^k$ have degree $m$ and let $\phi : \mathbb{Z} \to G$ take $1$ to a given element $g \in G$. Then we have a commutative diagram, and since the diagram commutes, the assumption that the map across the top takes $1$ to $m$ implies that the map across the bottom takes $g$ to $mg$. $\square$

**Example 2.50.** It is instructive to see what happens to the homology of $\mathbb{RP}^n$ when the coefficient group $G$ is chosen to be a field $F$. The cellular chain complex is
$$\cdots \to 0 \to F \xrightarrow{2} F \to 0 \to F \xrightarrow{2} F \to 0 \to F \to 0$$

Hence if $F$ has characteristic $2$, for example if $F = \mathbb{Z}_2$, then $H_k(\mathbb{RP}^n; F) \cong F$ for $0 \leq k \leq n$, a more uniform answer than with $\mathbb{Z}$ coefficients. On the other hand, if $F$ has characteristic different from $2$ then the boundary maps $F \xrightarrow{2} F$ are isomorphisms, hence $H_k(\mathbb{RP}^n; F)$ is $F$ for $k = 0$ and for $k = n$ odd, and is zero otherwise.

In §3.A we will see that there is a general algebraic formula expressing homology with arbitrary coefficients in terms of homology with $\mathbb{Z}$ coefficients. Some easy special cases that give much of the flavor of the general result are included in the Exercises.

In spite of the fact that homology with $\mathbb{Z}$ coefficients determines homology with other coefficient groups, there are many situations where homology with a suitably chosen coefficient group can provide more information than homology with $\mathbb{Z}$ coefficients. A good example of this is the proof of the Borsuk-Ulam theorem using $\mathbb{Z}_2$ coefficients in §2.B.

**Example 2.51.** Let $X$ be a Moore space $M(\mathbb{Z}_m, n)$ obtained from $S^n$ by attaching a cell $e^{n+1}$ by a map of degree $m$. The quotient map $f : X \to X/S^n = S^{n+1}$ induces trivial homomorphisms on reduced homology with $\mathbb{Z}$ coefficients since the nonzero reduced homology groups of $X$ and $S^{n+1}$ occur in different dimensions. But with $\mathbb{Z}_m$ coefficients the story is different, as we can see by considering the long exact sequence of the pair $(X, S^n)$, which contains the segment
$$0 = H_{n+1}(S^n; \mathbb{Z}_m) \to H_{n+1}(X; \mathbb{Z}_m) \xrightarrow{f_*} H_{n+1}(X/S^n; \mathbb{Z}_m)$$

Exactness says that $f_*$ is injective, hence nonzero since $H_{n+1}(X; \mathbb{Z}_m)$ is $\mathbb{Z}_m$, the cellular boundary map $H_{n+1}(X^{n+1}, X^n; \mathbb{Z}_m) \to H_n(X^n, X^{n-1}; \mathbb{Z}_m)$ being $\mathbb{Z}_m \xrightarrow{m} \mathbb{Z}_m$.


## Exercises

1. Prove the Brouwer fixed point theorem for maps $f : D^n \to D^n$ by applying degree theory to the map $S^n \to S^n$ that sends both the northern and southern hemispheres of $S^n$ to the southern hemisphere via $f$. [This was Brouwer's original proof.]

2. Given a map $f : S^{2n} \to S^{2n}$, show that there is some point $x \in S^{2n}$ with either $f(x) = x$ or $f(x) = -x$. Deduce that every map $\mathbb{RP}^{2n} \to \mathbb{RP}^{2n}$ has a fixed point. Construct maps $\mathbb{RP}^{2n-1} \to \mathbb{RP}^{2n-1}$ without fixed points from linear transformations $\mathbb{R}^{2n} \to \mathbb{R}^{2n}$ without eigenvectors.

3. Let $f : S^n \to S^n$ be a map of degree zero. Show that there exist points $x, y \in S^n$ with $f(x) = x$ and $f(y) = -y$. Use this to show that if $F$ is a continuous vector field defined on the unit ball $D^n$ in $\mathbb{R}^n$ such that $F(x) \neq 0$ for all $x$, then there exists a point on $\partial D^n$ where $F$ points radially outward and another point on $\partial D^n$ where $F$ points radially inward.

4. Construct a surjective map $S^n \to S^n$ of degree zero, for each $n \geq 1$.

5. Show that any two reflections of $S^n$ across different $n$-dimensional hyperplanes are homotopic, in fact homotopic through reflections. [The linear algebra formula for a reflection in terms of inner products may be helpful.]

6. Show that every map $S^n \to S^n$ can be homotoped to have a fixed point if $n > 0$.

7. For an invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ show that the induced map on $H_n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \cong H_{n-1}(\mathbb{R}^n - \{0\}) \cong \mathbb{Z}$ is $\mathbb{1}$ or $-\mathbb{1}$ according to whether the determinant of $f$ is positive or negative. [Use Gaussian elimination to show that the matrix of $f$ can be joined by a path of invertible matrices to a diagonal matrix with $\pm 1$'s on the diagonal.]

8. A polynomial $f(z)$ with complex coefficients, viewed as a map $\mathbb{C} \to \mathbb{C}$, can always be extended to a continuous map of one-point compactifications $\bar{f} : S^2 \to S^2$. Show that the degree of $\bar{f}$ equals the degree of $f$ as a polynomial. Show also that the local degree of $\bar{f}$ at a root of $f$ is the multiplicity of the root.

9. Compute the homology groups of the following 2-complexes:
   (a) The quotient of $S^2$ obtained by identifying north and south poles to a point.
   (b) $S^1 \vee (S^1 \times S^1)$.
   (c) The space obtained from $D^2$ by first deleting the interiors of two disjoint subdisks in the interior of $D^2$ and then identifying all three resulting boundary circles together via homeomorphisms preserving clockwise orientations of these circles.
   (d) The quotient space of $S^1 \times S^1$ obtained by identifying points in the circle $S^1 \times \{x_0\}$ that differ by $2\pi/m$ rotation and identifying points in the circle $\{x_0\} \times S^1$ that differ by $2\pi/n$ rotation.

10. Let $X$ be the quotient space of $S^2$ under the identifications $x \sim -x$ for $x$ in the equator $S^1$. Compute the homology groups $H_i(X)$. Do the same for $S^3$ with antipodal points of the equatorial $S^2 \subset S^3$ identified.

11. In an exercise for §1.2 we described a 3-dimensional CW complex obtained from the cube $I^3$ by identifying opposite faces via a one-quarter twist. Compute the homology groups of this complex.

12. Show that the quotient map $S^1 \times S^1 \to S^2$ collapsing the subspace $S^1 \vee S^1$ to a point is not nullhomotopic by showing that it induces an isomorphism on $H_2$. On the other hand, show via covering spaces that any map $S^2 \to S^1 \times S^1$ is nullhomotopic.

13. Let $X$ be the 2-complex obtained from $S^1$ with its usual cell structure by attaching two 2-cells by maps of degrees 2 and 3, respectively.
    (a) Compute the homology groups of all the subcomplexes $A \subset X$ and the corresponding quotient complexes $X/A$.
    (b) Show that $X \simeq S^2$ and that the only subcomplex $A \subset X$ for which the quotient map $X \to X/A$ is a homotopy equivalence is the trivial subcomplex, the 0-cell.

14. A map $f : S^n \to S^n$ satisfying $f(x) = f(-x)$ for all $x$ is called an **even map**. Show that an even map $S^n \to S^n$ must have even degree, and that the degree must in fact be zero when $n$ is even. When $n$ is odd, show there exist even maps of any given even degree.

15. Show that if $X$ is a CW complex then $H_n(X^n)$ is free by identifying it with the kernel of the cellular boundary map $H_n(X^n, X^{n-1}) \to H_{n-1}(X^{n-1}, X^{n-2})$.

[Additional exercises 16-43 continue with topics on simplicial complexes, cellular homology, Euler characteristic, Mayer-Vietoris sequences, and homology with coefficients...]

---

**Note:** This markdown file contains the main content of Section 2.2. Some detailed proofs, examples, and exercises have been summarized for brevity. Refer to the original PDF for complete details.

