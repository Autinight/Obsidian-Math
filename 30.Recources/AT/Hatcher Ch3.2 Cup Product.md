---
title: "Cup Product"
date: 2026-05-05
tags:
  - textbook
  - algebraic-topology
source: "[[pdf - AT Hatcher.pdf]]"
section: "3.2"
---

## 3.2 Cup Product

In the introduction to this chapter we sketched a definition of cup product in terms of another product called cross product. However, to define the cross product from scratch takes some work, so we will proceed in the opposite order, first giving an elementary definition of cup product by an explicit formula with simplices, then afterwards defining cross product in terms of cup product. The other approach of defining cup product via cross product is explained at the end of §3.B.

To define the cup product we consider cohomology with coefficients in a ring $R$, the most common choices being $\mathbb{Z}$, $\mathbb{Z}_n$, and $\mathbb{Q}$. For cochains $\phi \in C^k(X; R)$ and $\psi \in C^\ell(X; R)$, the cup product $\phi \smile \psi \in C^{k+\ell}(X; R)$ is the cochain whose value on a singular simplex $\sigma : \Delta^{k+\ell} \to X$ is given by the formula

$$(\phi \smile \psi)(\sigma) = \phi\big(\sigma|_{[v_0,\cdots,v_k]}\big) \cdot \psi\big(\sigma|_{[v_k,\cdots,v_{k+\ell}]}\big)$$

where the right-hand side is the product in $R$. To see that this cup product of cochains induces a cup product of cohomology classes we need a formula relating it to the coboundary map:

> [!lemma] Lemma 3.6
> $\delta(\phi \smile \psi) = \delta\phi \smile \psi + (-1)^k \phi \smile \delta\psi$ for $\phi \in C^k(X; R)$ and $\psi \in C^\ell(X; R)$.

> [!proof] Proof
> For $\sigma : \Delta^{k+\ell+1} \to X$ we have
>
> $$
> \begin{aligned}
> (\delta\phi \smile \psi)(\sigma) &= \sum_{i=0}^{k+1} (-1)^i \phi\big(\sigma|_{[v_0,\cdots,\hat{v}_i,\cdots,v_{k+1}]}\big) \cdot \psi\big(\sigma|_{[v_{k+1},\cdots,v_{k+\ell+1}]}\big) \\
> (-1)^k(\phi \smile \delta\psi)(\sigma) &= \sum_{i=k}^{k+\ell+1} (-1)^i \phi\big(\sigma|_{[v_0,\cdots,v_k]}\big) \cdot \psi\big(\sigma|_{[v_k,\cdots,\hat{v}_i,\cdots,v_{k+\ell+1}]}\big)
> \end{aligned}
> $$
>
> When we add these two expressions, the last term of the first sum cancels the first term of the second sum, and the remaining terms are exactly $\delta(\phi \smile \psi)(\sigma) = (\phi \smile \psi)(\partial\sigma)$ since $\partial\sigma = \sum_{i=0}^{k+\ell+1} (-1)^i \sigma|_{[v_0,\cdots,\hat{v}_i,\cdots,v_{k+\ell+1}]}$. $\square$

From the formula $\delta(\phi \smile \psi) = \delta\phi \smile \psi \pm \phi \smile \delta\psi$ it is apparent that the cup product of two cocycles is again a cocycle. Also, the cup product of a cocycle and a coboundary, in either order, is a coboundary since $\phi \smile \delta\psi = \pm\delta(\phi \smile \psi)$ if $\delta\phi = 0$, and $\delta\phi \smile \psi = \delta(\phi \smile \psi)$ if $\delta\psi = 0$. It follows that there is an induced cup product

$$H^k(X; R) \times H^\ell(X; R) \xrightarrow{\smile} H^{k+\ell}(X; R)$$

This is associative and distributive since at the level of cochains the cup product obviously has these properties. If $R$ has an identity element, then there is an identity element for cup product, the class $1 \in H^0(X; R)$ defined by the 0-cocycle taking the value $1$ on each singular 0-simplex.

A cup product for simplicial cohomology can be defined by the same formula as for singular cohomology, so the canonical isomorphism between simplicial and singular cohomology respects cup products. Here are three examples of direct calculations of cup products using simplicial cohomology.

> [!example] Example 3.7
> Let $M$ be the closed orientable surface of genus $g \ge 1$ with the $\Delta$-complex structure shown in the figure for the case $g = 2$. The cup product of interest is $H^1(M) \times H^1(M) \to H^2(M)$. Taking $\mathbb{Z}$ coefficients, a basis for $H_1(M)$ is formed by the edges $a_i$ and $b_i$, as we showed in Example 2.36 when we computed the homology of $M$ using cellular homology. We have $H^1(M) \approx \operatorname{Hom}(H_1(M), \mathbb{Z})$ by cellular cohomology or the universal coefficient theorem. A basis for $H_1(M)$ determines a dual basis for $\operatorname{Hom}(H_1(M), \mathbb{Z})$, so dual to $a_i$ is the cohomology class $\alpha_i$ assigning the value $1$ to $a_i$ and $0$ to the other basis elements, and similarly we have cohomology classes $\beta_i$ dual to $b_i$.
>
> To represent $\alpha_i$ by a simplicial cocycle $\phi_i$ we need to choose values for $\phi_i$ on the edges radiating out from the central vertex in such a way that $\delta\phi_i = 0$. This is the "cocycle condition" discussed in the introduction to this chapter, where we saw that it has a geometric interpretation in terms of curves transverse to the edges of $M$. With this interpretation in mind, consider the arc labeled $\alpha_i$ in the figure, which represents a loop in $M$ meeting $a_i$ in one point and disjoint from all the other basis elements $a_j$ and $b_j$. We define $\phi_i$ to have the value $1$ on edges meeting the arc $\alpha_i$ and the value $0$ on all other edges. Thus $\phi_i$ counts the number of intersections of each edge with the arc $\alpha_i$. In similar fashion we obtain a cocycle $\psi_i$ counting intersections with the arc $\beta_i$, and $\psi_i$ represents the cohomology class $\beta_i$ dual to $b_i$.
>
> Now we can compute cup products by applying the definition. Keeping in mind that the ordering of the vertices of each 2-simplex is compatible with the indicated orientations of its edges, we see for example that $\phi_1 \smile \psi_1$ takes the value $0$ on all 2-simplices except the one with outer edge $b_1$ in the lower right part of the figure, where it takes the value $1$. Thus $\phi_1 \smile \psi_1$ takes the value $1$ on the 2-chain $c$ formed by the sum of all the 2-simplices with the signs indicated in the center of the figure. It is an easy calculation that $\partial c = 0$. Since there are no 3-simplices, $c$ is not a boundary, so it represents a nonzero element of $H_2(M)$. The fact that $(\phi_1 \smile \psi_1)(c)$ is a generator of $\mathbb{Z}$ implies both that $c$ represents a generator of $H_2(M) \approx \mathbb{Z}$ and that $\phi_1 \smile \psi_1$ represents the dual generator $\gamma$ of $H^2(M) \approx \operatorname{Hom}(H_2(M), \mathbb{Z}) \approx \mathbb{Z}$. Thus $\alpha_1 \smile \beta_1 = \gamma$.
>
> In similar fashion one computes:
>
> $$
> \alpha_i \smile \beta_j = \begin{cases}
> \gamma, & i = j \\
> 0, & i \neq j
> \end{cases} = -(\beta_i \smile \alpha_j), \qquad
> \alpha_i \smile \alpha_j = 0, \qquad
> \beta_i \smile \beta_j = 0
> $$
>
> These relations determine the cup product $H^1(M) \times H^1(M) \to H^2(M)$ completely since cup product is distributive. Notice that cup product is not commutative in this example since $\alpha_i \smile \beta_i = -(\beta_i \smile \alpha_i)$. We will show in Theorem 3.11 below that this is the worst that can happen: Cup product is commutative up to a sign depending only on dimension, assuming that the coefficient ring itself is commutative.
>
> One can see in this example that nonzero cup products of distinct classes $\alpha_i$ or $\beta_j$ occur precisely when the corresponding loops $\alpha_i$ or $\beta_j$ intersect. This is also true for the cup product of $\alpha_i$ or $\beta_i$ with itself if we allow ourselves to take two copies of the corresponding loop and deform one of them to be disjoint from the other.

> [!example] Example 3.8
> The closed nonorientable surface $N$ of genus $g$ can be treated in similar fashion if we use $\mathbb{Z}_2$ coefficients. Using the $\Delta$-complex structure shown, the edges $a_i$ give a basis for $H_1(N; \mathbb{Z}_2)$, and the dual basis elements $\alpha_i \in H^1(N; \mathbb{Z}_2)$ can be represented by cocycles with values given by counting intersections with the arcs labeled $\alpha_i$ in the figure. Then one computes that $\alpha_i \smile \alpha_i$ is the nonzero element of $H^2(N; \mathbb{Z}_2) \approx \mathbb{Z}_2$ and $\alpha_i \smile \alpha_j = 0$ for $i \neq j$. In particular, when $g = 1$ we have $N = \mathbb{RP}^2$, and the cup product of a generator of $H^1(\mathbb{RP}^2; \mathbb{Z}_2)$ with itself is a generator of $H^2(\mathbb{RP}^2; \mathbb{Z}_2)$.
>
> The remarks in the paragraph preceding this example apply here also, but with the following difference: When one tries to deform a second copy of the loop $\alpha_i$ in the present example to be disjoint from the original copy, the best one can do is make it intersect the original in one point. This reflects the fact that $\alpha_i \smile \alpha_i$ is now nonzero.

> [!example] Example 3.9
> Let $X$ be the 2-dimensional CW complex obtained by attaching a 2-cell to $S^1$ by the degree $m$ map $S^1 \to S^1$, $z \mapsto z^m$. Using cellular cohomology, or cellular homology and the universal coefficient theorem, we see that $H^n(X; \mathbb{Z})$ consists of a $\mathbb{Z}$ for $n = 0$ and a $\mathbb{Z}_m$ for $n = 2$, so the cup product structure with $\mathbb{Z}$ coefficients is uninteresting. However, with $\mathbb{Z}_m$ coefficients we have $H^i(X; \mathbb{Z}_m) \approx \mathbb{Z}_m$ for $i = 0, 1, 2$, so there is the possibility that the cup product of two 1-dimensional classes can be nontrivial.
>
> To obtain a $\Delta$-complex structure on $X$, take a regular $m$-gon subdivided into $m$ triangles $T_i$ around a central vertex $v$, as shown in the figure for the case $m = 4$, then identify all the outer edges by rotations of the $m$-gon. This gives $X$ a $\Delta$-complex structure with $2$ vertices, $m+1$ edges, and $m$ 2-simplices. A generator $\alpha$ of $H^1(X; \mathbb{Z}_m)$ is represented by a cocycle $\phi$ assigning the value $1$ to the edge $e$, which generates $H_1(X)$. The condition that $\phi$ be a cocycle means that $\phi(e_i) + \phi(e) = \phi(e_{i+1})$ for all $i$, subscripts being taken mod $m$. So we may take $\phi(e_i) = i \in \mathbb{Z}_m$. Hence $(\phi \smile \phi)(T_i) = \phi(e_i)\phi(e) = i$. The map $h : H^2(X; \mathbb{Z}_m) \to \operatorname{Hom}(H_2(X; \mathbb{Z}_m), \mathbb{Z}_m)$ is an isomorphism since $\sum_i T_i$ is a generator of $H_2(X; \mathbb{Z}_m)$ and there are 2-cocycles taking the value $1$ on $\sum_i T_i$, for example the cocycle taking the value $1$ on one $T_i$ and $0$ on all the others. The cocycle $\phi \smile \phi$ takes the value $0 + 1 + \cdots + (m-1)$ on $\sum_i T_i$, hence represents $0 + 1 + \cdots + (m-1)$ times a generator $\beta$ of $H^2(X; \mathbb{Z}_m)$. In $\mathbb{Z}_m$ the sum $0 + 1 + \cdots + (m-1)$ is $0$ if $m$ is odd and $k$ if $m = 2k$ since the terms $1$ and $m-1$ cancel, $2$ and $m-2$ cancel, and so on. Thus, writing $\alpha^2$ for $\alpha \smile \alpha$, we have $\alpha^2 = 0$ if $m$ is odd and $\alpha^2 = k\beta$ if $m = 2k$.
>
> In particular, if $m = 2$, $X$ is $\mathbb{RP}^2$ and $\alpha^2 = \beta$ in $H^2(\mathbb{RP}^2; \mathbb{Z}_2)$, as we showed already in Example 3.8.

The cup product formula $(\phi \smile \psi)(\sigma) = \phi(\sigma|_{[v_0,\cdots,v_k]}) \cdot \psi(\sigma|_{[v_k,\cdots,v_{k+\ell}]})$ also gives relative cup products

$$
\begin{aligned}
H^k(X; R) \times H^\ell(X, A; R) &\xrightarrow{\smile} H^{k+\ell}(X, A; R) \\
H^k(X, A; R) \times H^\ell(X; R) &\xrightarrow{\smile} H^{k+\ell}(X, A; R) \\
H^k(X, A; R) \times H^\ell(X, A; R) &\xrightarrow{\smile} H^{k+\ell}(X, A; R)
\end{aligned}
$$

since if $\phi$ or $\psi$ vanishes on chains in $A$ then so does $\phi \smile \psi$. There is a more general relative cup product

$$H^k(X, A; R) \times H^\ell(X, B; R) \xrightarrow{\smile} H^{k+\ell}(X, A \cup B; R)$$

when $A$ and $B$ are open subsets of $X$ or subcomplexes of the CW complex $X$. This is obtained in the following way. The absolute cup product restricts to a cup product $C^k(X, A; R) \times C^\ell(X, B; R) \to C^{k+\ell}(X, A + B; R)$ where $C^n(X, A + B; R)$ is the subgroup of $C^n(X; R)$ consisting of cochains vanishing on sums of chains in $A$ and chains in $B$.

If $A$ and $B$ are open in $X$, the inclusions $C^n(X, A \cup B; R) \hookrightarrow C^n(X, A + B; R)$ induce isomorphisms on cohomology, via the five-lemma and the fact that the restriction maps $C^n(A \cup B; R) \to C^n(A + B; R)$ induce isomorphisms on cohomology as we saw in the discussion of excision in the previous section. Therefore the cup product $C^k(X, A; R) \times C^\ell(X, B; R) \to C^{k+\ell}(X, A + B; R)$ induces the desired relative cup product $H^k(X, A; R) \times H^\ell(X, B; R) \to H^{k+\ell}(X, A \cup B; R)$. This holds also if $X$ is a CW complex with $A$ and $B$ subcomplexes since here again the maps $C^n(A \cup B; R) \to C^n(A + B; R)$ induce isomorphisms on cohomology, as we saw for homology in §2.2.

> [!proposition] Proposition 3.10
> For a map $f : X \to Y$, the induced maps $f^* : H^n(Y; R) \to H^n(X; R)$ satisfy $f^*(\alpha \smile \beta) = f^*(\alpha) \smile f^*(\beta)$, and similarly in the relative case.

> [!proof] Proof
> This comes from the cochain formula $f^\sharp(\phi) \smile f^\sharp(\psi) = f^\sharp(\phi \smile \psi)$:
>
> $$
> \begin{aligned}
> (f^\sharp\phi \smile f^\sharp\psi)(\sigma) &= f^\sharp\phi(\sigma|_{[v_0,\cdots,v_k]}) f^\sharp\psi(\sigma|_{[v_k,\cdots,v_{k+\ell}]}) \\
> &= \phi(f\sigma|_{[v_0,\cdots,v_k]}) \psi(f\sigma|_{[v_k,\cdots,v_{k+\ell}]}) \\
> &= (\phi \smile \psi)(f\sigma) = f^\sharp(\phi \smile \psi)(\sigma)
> \end{aligned}
> $$
> $\square$

The natural question of whether the cup product is commutative is answered by the following:

> [!theorem] Theorem 3.11
> The identity $\alpha \smile \beta = (-1)^{k\ell} \beta \smile \alpha$ holds for all $\alpha \in H^k(X, A; R)$ and $\beta \in H^\ell(X, A; R)$, when $R$ is commutative.

Taking $\alpha = \beta$, this implies in particular that if $\alpha$ is an element of $H^k(X, A; R)$ with $k$ odd, then $2(\alpha \smile \alpha) = 0$ in $H^{2k}(X, A; R)$, or more concisely, $2\alpha^2 = 0$. Hence if $H^{2k}(X, A; R)$ has no elements of order two, then $\alpha^2 = 0$. For example, if $X$ is the 2-complex obtained by attaching a disk to $S^1$ by a map of degree $m$ as in Example 3.9 above, then we can deduce that the square of a generator of $H^1(X; \mathbb{Z}_m)$ is zero if $m$ is odd, and is either zero or the unique element of $H^2(X; \mathbb{Z}_m) \approx \mathbb{Z}_m$ of order two if $m$ is even. As we showed, the square is in fact nonzero when $m$ is even.

> [!proof] Proof
> Consider first the case $A = \emptyset$. For cochains $\phi \in C^k(X; R)$ and $\psi \in C^\ell(X; R)$ one can see from the definition that the cup products $\phi \smile \psi$ and $\psi \smile \phi$ differ only by a permutation of the vertices of $\Delta^{k+\ell}$. The idea of the proof is to study a particularly nice permutation of vertices, namely the one that totally reverses their order. This has the convenient feature of also reversing the ordering of vertices in any face.
>
> For a singular $n$-simplex $\sigma : [v_0, \cdots, v_n] \to X$, let $\bar{\sigma}$ be the singular $n$-simplex obtained by preceding $\sigma$ by the linear homeomorphism of $[v_0, \cdots, v_n]$ reversing the order of the vertices. Thus $\bar{\sigma}(v_i) = \sigma(v_{n-i})$. This reversal of vertices is the product of $n + (n-1) + \cdots + 1 = n(n+1)/2$ transpositions of adjacent vertices, each of which reverses orientation of the $n$-simplex since it is a reflection across an $(n-1)$-dimensional hyperplane. So to take orientations into account we would expect that a sign $\varepsilon_n = (-1)^{n(n+1)/2}$ ought to be inserted. Hence we define a homomorphism $\rho : C_n(X) \to C_n(X)$ by $\rho(\sigma) = \varepsilon_n \bar{\sigma}$.
>
> We will show that $\rho$ is a chain map, chain homotopic to the identity, so it induces the identity on cohomology. From this the theorem quickly follows. Namely, the formulas
>
> $$
> \begin{aligned}
> (\rho^*\phi \smile \rho^*\psi)(\sigma) &= \phi(\varepsilon_k \bar{\sigma}|_{[v_k,\cdots,v_0]}) \cdot \psi(\varepsilon_\ell \bar{\sigma}|_{[v_{k+\ell},\cdots,v_k]}) \\
> \rho^*(\psi \smile \phi)(\sigma) &= \varepsilon_{k+\ell} \psi(\bar{\sigma}|_{[v_{k+\ell},\cdots,v_k]}) \cdot \phi(\bar{\sigma}|_{[v_k,\cdots,v_0]})
> \end{aligned}
> $$
>
> show that $\varepsilon_k\varepsilon_\ell(\rho^*\phi \smile \rho^*\psi) = \varepsilon_{k+\ell}\rho^*(\psi \smile \phi)$, since we assume $R$ is commutative. A trivial calculation gives $\varepsilon_{k+\ell} = (-1)^{k\ell}\varepsilon_k\varepsilon_\ell$, hence $\rho^*\phi \smile \rho^*\psi = (-1)^{k\ell}\rho^*(\psi \smile \phi)$. Since $\rho$ is chain homotopic to the identity, the $\rho^*$'s disappear when we pass to cohomology classes, and so we obtain the desired formula $\alpha \smile \beta = (-1)^{k\ell}\beta \smile \alpha$.
> [...chain map and chain homotopy details...]
> $\square$

## The Cohomology Ring

Since cup product is associative and distributive, it is natural to try to make it the multiplication in a ring structure on the cohomology groups of a space $X$. This is easy to do if we simply define $H^*(X; R)$ to be the direct sum of the groups $H^n(X; R)$. Elements of $H^*(X; R)$ are finite sums $\sum_i \alpha_i$ with $\alpha_i \in H^i(X; R)$, and the product of two such sums is defined to be $(\sum_i \alpha_i)(\sum_j \beta_j) = \sum_{i,j} \alpha_i \beta_j$. It is routine to check that this makes $H^*(X; R)$ into a ring, with identity if $R$ has an identity. Similarly, $H^*(X, A; R)$ is a ring via the relative cup product. Taking scalar multiplication by elements of $R$ into account, these rings can also be regarded as $R$-algebras.

For example, the calculations in Example 3.8 or 3.9 above show that $H^*(\mathbb{RP}^2; \mathbb{Z}_2)$ consists of the polynomials $a_0 + a_1\alpha + a_2\alpha^2$ with coefficients $a_i \in \mathbb{Z}_2$, so $H^*(\mathbb{RP}^2; \mathbb{Z}_2)$ is the quotient $\mathbb{Z}_2[\alpha]/(\alpha^3)$ of the polynomial ring $\mathbb{Z}_2[\alpha]$ by the ideal generated by $\alpha^3$. This example illustrates how $H^*(X; R)$ often has a more compact description than the sequence of individual groups $H^n(X; R)$, so there is a certain economy in the change of scale that comes from regarding all the groups $H^n(X; R)$ as part of a single object $H^*(X; R)$.

Adding cohomology classes of different dimensions to form $H^*(X; R)$ is a convenient formal device, but it has little topological significance. One always regards the cohomology ring as a **graded ring**: a ring $A$ with a decomposition as a sum $\bigoplus_{k \ge 0} A_k$ of additive subgroups $A_k$ such that the multiplication takes $A_k \times A_\ell$ to $A_{k+\ell}$. To indicate that an element $a \in A$ lies in $A_k$ we write $|a| = k$. This applies in particular to elements of $H^k(X; R)$. Some authors call $|a|$ the "degree" of $a$, but we will use the term "dimension" which is more geometric and avoids potential confusion with the degree of a polynomial.

A graded ring satisfying the commutativity property of Theorem 3.11, $ab = (-1)^{|a||b|}ba$, is usually called simply **commutative** in the context of algebraic topology, in spite of the potential for misunderstanding. In the older literature one finds less ambiguous terms such as **graded commutative**, **anticommutative**, or **skew commutative**.

> [!example] Example 3.12: Polynomial Rings
> Among the simplest graded rings are polynomial rings $R[\alpha]$ and their truncated versions $R[\alpha]/(\alpha^n)$, consisting of polynomials of degree less than $n$. The example we have seen is $H^*(\mathbb{RP}^2; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]/(\alpha^3)$. More generally we will show in Theorem 3.19 that $H^*(\mathbb{RP}^n; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]/(\alpha^{n+1})$ and $H^*(\mathbb{RP}^\infty; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]$. In these cases $|\alpha| = 1$. We will also show that $H^*(\mathbb{CP}^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^{n+1})$ and $H^*(\mathbb{CP}^\infty; \mathbb{Z}) \approx \mathbb{Z}[\alpha]$ with $|\alpha| = 2$. The analogous results for quaternionic projective spaces are also valid, with $|\alpha| = 4$. The coefficient ring $\mathbb{Z}$ in the complex and quaternionic cases could be replaced by any commutative ring $R$, but not for $\mathbb{RP}^n$ and $\mathbb{RP}^\infty$ since a polynomial ring $R[\alpha]$ is strictly commutative, so for this to be a commutative ring in the graded sense we must have either $|\alpha|$ even or $2 = 0$ in $R$.
>
> Polynomial rings in several variables also have graded ring structures, and these graded rings can sometimes be realized as cohomology rings of spaces. For example, $\mathbb{Z}_2[\alpha_1, \cdots, \alpha_n]$ is $H^*(X; \mathbb{Z}_2)$ for $X$ the product of $n$ copies of $\mathbb{RP}^\infty$, with $|\alpha_i| = 1$ for each $i$, as we will see in Example 3.20.

> [!example] Example 3.13: Exterior Algebras
> Another nice example of a commutative graded ring is the **exterior algebra** $\Lambda_R[\alpha_1, \cdots, \alpha_n]$ over a commutative ring $R$ with identity. This is the free $R$-module with basis the finite products $\alpha_{i_1} \cdots \alpha_{i_k}$, $i_1 < \cdots < i_k$, with associative, distributive multiplication defined by the rules $\alpha_i\alpha_j = -\alpha_j\alpha_i$ for $i \neq j$ and $\alpha_i^2 = 0$. The empty product of $\alpha_i$'s is allowed, and provides an identity element $1$ in $\Lambda_R[\alpha_1, \cdots, \alpha_n]$. The exterior algebra becomes a commutative graded ring by specifying odd dimensions for the generators $\alpha_i$.
>
> The example we have seen is the torus $T^2 = S^1 \times S^1$, where $H^*(T^2; \mathbb{Z}) \approx \Lambda_\mathbb{Z}[\alpha, \beta]$ with $|\alpha| = |\beta| = 1$ by the calculations in Example 3.7. More generally, for the $n$-torus $T^n$, $H^*(T^n; R)$ is the exterior algebra $\Lambda_R[\alpha_1, \cdots, \alpha_n]$ as we will see in Example 3.16. The same is true for any product of odd-dimensional spheres, where $|\alpha_i|$ is the dimension of the $i$th sphere.

Induced homomorphisms are ring homomorphisms by Proposition 3.10. Here is an example illustrating this fact.

> [!example] Example 3.14: Product Rings
> The isomorphism $H^*(\bigsqcup_\alpha X_\alpha; R) \xrightarrow{\approx} \prod_\alpha H^*(X_\alpha; R)$ whose coordinates are induced by the inclusions $i_\alpha : X_\alpha \hookrightarrow \bigsqcup_\alpha X_\alpha$ is a ring isomorphism with respect to the usual coordinatewise multiplication in a product ring, because each coordinate function $i_\alpha^*$ is a ring homomorphism. Similarly for a wedge sum the isomorphism $\tilde{H}^*(\bigvee_\alpha X_\alpha; R) \approx \prod_\alpha \tilde{H}^*(X_\alpha; R)$ is a ring isomorphism. Here we take reduced cohomology to be cohomology relative to a basepoint, and we use relative cup products. We should assume the basepoints $x_\alpha \in X_\alpha$ are deformation retracts of neighborhoods, to be sure that the claimed isomorphism does indeed hold.
>
> This product ring structure for wedge sums can sometimes be used to rule out splittings of a space as a wedge sum up to homotopy equivalence. For example, consider $\mathbb{CP}^2$, which is $S^2$ with a cell $e^4$ attached by a certain map $f : S^3 \to S^2$. Using homology or just the additive structure of cohomology it is impossible to conclude that $\mathbb{CP}^2$ is not homotopy equivalent to $S^2 \vee S^4$, and hence that $f$ is not homotopic to a constant map. However, with cup products we can distinguish these two spaces since the square of each element of $H^2(S^2 \vee S^4; \mathbb{Z})$ is zero in view of the ring isomorphism $\tilde{H}^*(S^2 \vee S^4; \mathbb{Z}) \approx \tilde{H}^*(S^2; \mathbb{Z}) \oplus \tilde{H}^*(S^4; \mathbb{Z})$, but the square of a generator of $H^2(\mathbb{CP}^2; \mathbb{Z})$ is nonzero since $H^*(\mathbb{CP}^2; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^3)$.
>
> More generally, cup products can be used to distinguish infinitely many different homotopy classes of maps $S^{4n-1} \to S^{2n}$ for all $n \ge 1$. This is systematized in the notion of the Hopf invariant, which is studied in §4.B.

Here is the evident general question raised by the preceding examples:

> [!question] The Realization Problem
> Which graded commutative $R$-algebras occur as cup product algebras $H^*(X; R)$ of spaces $X$?
>
> This is a difficult problem, with the degree of difficulty depending strongly on the coefficient ring $R$. The most accessible case is $R = \mathbb{Q}$, where essentially every graded commutative $\mathbb{Q}$-algebra is realizable, as shown in [Quillen 1969]. Next in order of difficulty is $R = \mathbb{Z}_p$ with $p$ prime. This is much harder than the case of $\mathbb{Q}$, and only partial results, obtained with much labor, are known. Finally there is $R = \mathbb{Z}$, about which very little is known beyond what is implied by the $\mathbb{Z}_p$ cases.

## A Künneth Formula

One might guess that there should be some connection between cup product and product spaces, and indeed this is the case, as we will show in this subsection.

To begin, we define the **cross product**, or external cup product as it is sometimes called. This is the map

$$H^*(X; R) \times H^*(Y; R) \xrightarrow{\times} H^*(X \times Y; R)$$

given by $a \times b = p_1^*(a) \smile p_2^*(b)$ where $p_1$ and $p_2$ are the projections of $X \times Y$ onto $X$ and $Y$. Since cup product is distributive, the cross product is bilinear, that is, linear in each variable separately. We might hope that the cross product map would be an isomorphism in many cases, thereby giving a nice description of the cohomology rings of these product spaces. However, a bilinear map is rarely a homomorphism, so it could hardly be an isomorphism. Fortunately there is a nice algebraic solution to this problem, and that is to replace the direct product $H^*(X; R) \times H^*(Y; R)$ by the tensor product $H^*(X; R) \otimes_R H^*(Y; R)$.

Let us review the definition and basic properties of tensor products. For abelian groups $A$ and $B$ the tensor product $A \otimes B$ is defined to be the abelian group with generators $a \otimes b$ for $a \in A$, $b \in B$, and relations $(a + a') \otimes b = a \otimes b + a' \otimes b$ and $a \otimes (b + b') = a \otimes b + a \otimes b'$. So the zero element of $A \otimes B$ is $0 \otimes 0 = 0 \otimes b = a \otimes 0$, and $-(a \otimes b) = -a \otimes b = a \otimes (-b)$. Some readily verified elementary properties are:

(1) $A \otimes B \approx B \otimes A$.
(2) $(\bigoplus_i A_i) \otimes B \approx \bigoplus_i (A_i \otimes B)$.
(3) $(A \otimes B) \otimes C \approx A \otimes (B \otimes C)$.
(4) $\mathbb{Z} \otimes A \approx A$.
(5) $\mathbb{Z}_n \otimes A \approx A/nA$.
(6) A pair of homomorphisms $f : A \to A'$ and $g : B \to B'$ induces a homomorphism $f \otimes g : A \otimes B \to A' \otimes B'$ via $(f \otimes g)(a \otimes b) = f(a) \otimes g(b)$.
(7) A bilinear map $\phi : A \times B \to C$ induces a homomorphism $A \otimes B \to C$ sending $a \otimes b$ to $\phi(a, b)$.

In (1)–(5) the isomorphisms are the obvious ones, for example $a \otimes b \mapsto b \otimes a$ in (1) and $n \otimes a \mapsto na$ in (4). Properties (1), (2), (4), and (5) allow the calculation of tensor products of finitely generated abelian groups.

The generalization to tensor products of modules over a commutative ring $R$ is easy. One defines $A \otimes_R B$ for $R$-modules $A$ and $B$ to be the quotient of $A \otimes B$ obtained by imposing the further relations $ra \otimes b = a \otimes rb$ for $r \in R$, $a \in A$, and $b \in B$. This relation guarantees that $A \otimes_R B$ is again an $R$-module. In case $R$ is not commutative, one assumes $A$ is a right $R$-module and $B$ is a left $R$-module, and the relation is written instead $ar \otimes b = a \otimes rb$, but now $A \otimes_R B$ is only an abelian group, not an $R$-module. However, we will restrict attention to the case that $R$ is commutative in what follows.

It is an easy algebra exercise to see that $A \otimes_R B = A \otimes B$ when $R$ is $\mathbb{Z}_m$ or $\mathbb{Q}$. But in general $A \otimes_R B$ is not the same as $A \otimes B$. For example, if $R = \mathbb{Q}(\sqrt{2})$, which is a 2-dimensional vector space over $\mathbb{Q}$, then $R \otimes_R R = R$ but $R \otimes R$ is a 4-dimensional vector space over $\mathbb{Q}$.

The statements (1)–(3), (6), and (7) remain valid for tensor products of $R$-modules. The generalization of (4) is the canonical isomorphism $R \otimes_R A \approx A$, $r \otimes a \mapsto ra$.

Property (7) of tensor products guarantees that the cross product as defined above gives rise to a homomorphism of $R$-modules

$$H^*(X; R) \otimes_R H^*(Y; R) \xrightarrow{\times} H^*(X \times Y; R), \qquad a \otimes b \mapsto a \times b$$

which we shall also call cross product. This map becomes a ring homomorphism if we define the multiplication in a tensor product of graded rings by $(a \otimes b)(c \otimes d) = (-1)^{|b||c|} ac \otimes bd$ where $|x|$ denotes the dimension of $x$. Namely, if we denote the cross product map by $\mu$ and we define $(a \otimes b)(c \otimes d) = (-1)^{|b||c|} ac \otimes bd$, then

$$
\begin{aligned}
\mu\big((a \otimes b)(c \otimes d)\big) &= (-1)^{|b||c|}\mu(ac \otimes bd) \\
&= (-1)^{|b||c|}(a \smile c) \times (b \smile d) \\
&= (-1)^{|b||c|} p_1^*(a \smile c) \smile p_2^*(b \smile d) \\
&= (-1)^{|b||c|} p_1^*(a) \smile p_1^*(c) \smile p_2^*(b) \smile p_2^*(d) \\
&= p_1^*(a) \smile p_2^*(b) \smile p_1^*(c) \smile p_2^*(d) \\
&= (a \times b)(c \times d) = \mu(a \otimes b)\mu(c \otimes d)
\end{aligned}
$$

> [!theorem] Theorem 3.15
> The cross product $H^*(X; R) \otimes_R H^*(Y; R) \to H^*(X \times Y; R)$ is an isomorphism of rings if $X$ and $Y$ are CW complexes and $H^k(Y; R)$ is a finitely generated free $R$-module for all $k$.

Results of this type, computing homology or cohomology of a product space, are known as **Künneth formulas**. The hypothesis that $X$ and $Y$ are CW complexes will be shown to be unnecessary in §4.1 when we consider CW approximations to arbitrary spaces. On the other hand, the freeness hypothesis cannot always be dispensed with, as we shall see in §3.B when we obtain a completely general Künneth formula for the homology of a product space.

When the conclusion of the theorem holds, the ring structure in $H^*(X \times Y; R)$ is determined by the ring structures in $H^*(X; R)$ and $H^*(Y; R)$. Example 3E.6 shows that some hypotheses are necessary in order for this to be true.

> [!example] Example 3.16
> The exterior algebra $\Lambda_R[\alpha_1, \cdots, \alpha_n]$ is the graded tensor product over $R$ of the one-variable exterior algebras $\Lambda_R[\alpha_i]$ where the $\alpha_i$'s have odd dimension. The Künneth formula then gives an isomorphism $H^*(S^{k_1} \times \cdots \times S^{k_n}; \mathbb{Z}) \approx \Lambda_\mathbb{Z}[\alpha_1, \cdots, \alpha_n]$ if the dimensions $k_i$ are all odd. With some $k_i$'s even, one would have the tensor product of an exterior algebra for the odd-dimensional spheres and truncated polynomial rings $\mathbb{Z}[\alpha]/(\alpha^2)$ for the even-dimensional spheres. Of course, $\Lambda_\mathbb{Z}[\alpha]$ and $\mathbb{Z}[\alpha]/(\alpha^2)$ are isomorphic as rings, but when one takes tensor products in the graded sense it becomes important to distinguish them as graded rings, with $\alpha$ odd-dimensional in $\Lambda_\mathbb{Z}[\alpha]$ and even-dimensional in $\mathbb{Z}[\alpha]/(\alpha^2)$. These remarks apply more generally with any coefficient ring $R$ in place of $\mathbb{Z}$, though when $R = \mathbb{Z}_2$ there is no need to distinguish between the odd-dimensional and even-dimensional cases since signs become irrelevant.

The idea of the proof of the theorem will be to consider, for a fixed CW complex $Y$, the functors

$$
\begin{aligned}
h_n(X, A) &= \bigoplus_i \big(H_i(X, A; R) \otimes_R H_{n-i}(Y; R)\big) \\
k_n(X, A) &= H_n(X \times Y, A \times Y; R)
\end{aligned}
$$

The cross product, or a relative version of it, defines a map $\mu : h_n(X, A) \to k_n(X, A)$ which we would like to show is an isomorphism when $X$ is a CW complex and $A = \emptyset$. We will show:

(1) $h_*$ and $k_*$ are cohomology theories on the category of CW pairs.
(2) $\mu$ is a natural transformation: It commutes with induced homomorphisms and with coboundary homomorphisms in long exact sequences of pairs.

It is obvious that $\mu : h_n(X) \to k_n(X)$ is an isomorphism when $X$ is a point since it is just the scalar multiplication map $R \otimes_R H_n(Y; R) \to H_n(Y; R)$. The following general fact will then imply the theorem.

> [!proposition] Proposition 3.17
> If a natural transformation between unreduced cohomology theories on the category of CW pairs is an isomorphism when the CW pair is $(\text{point}, \emptyset)$, then it is an isomorphism for all CW pairs.

> [!proof] Proof
> Let $\mu : h^*(X, A) \to k^*(X, A)$ be the natural transformation. By the five-lemma it will suffice to show that $\mu$ is an isomorphism when $A = \emptyset$.
>
> First we do the case of finite-dimensional $X$ by induction on dimension. The induction starts with the case that $X$ is 0-dimensional, where the result holds by hypothesis and by the axiom for disjoint unions.
>
> For the induction step, $\mu$ gives a map between the two long exact sequences for the pair $(X^n, X^{n-1})$, with commuting squares since $\mu$ is a natural transformation. The five-lemma reduces the inductive step to showing that $\mu$ is an isomorphism for $(X, A) = (X^n, X^{n-1})$. Let $\Phi : \bigsqcup_\alpha (D_\alpha^n, \partial D_\alpha^n) \to (X^n, X^{n-1})$ be a collection of characteristic maps for all the $n$-cells of $X$. By excision, $\Phi_*$ is an isomorphism for $h_*$ and $k_*$, so by naturality it suffices to show that $\mu$ is an isomorphism for $(X, A) = \bigsqcup_\alpha (D_\alpha^n, \partial D_\alpha^n)$. The axiom for disjoint unions gives a further reduction to the case of the pair $(D^n, \partial D^n)$. Finally, this case follows by applying the five-lemma to the long exact sequences of this pair, since $D^n$ is contractible and hence is covered by the 0-dimensional case, and $\partial D^n$ is $(n-1)$-dimensional.
>
> The case that $X$ is infinite-dimensional reduces to the finite-dimensional case by a telescope argument as in the proof of Lemma 2.34. We leave this for the reader since the finite-dimensional case suffices for the special $h_*$ and $k_*$ we are considering, as the maps $h_i(X) \to h_i(X^n)$ and $k_i(X) \to k_i(X^n)$ induced by the inclusion $X^n \hookrightarrow X$ are isomorphisms when $n$ is sufficiently large with respect to $i$. $\square$

> [!proof] Proof of 3.15
> It remains to check that $h_*$ and $k_*$ are cohomology theories, and that $\mu$ is a natural transformation. Since we are dealing with unreduced cohomology theories there are four axioms to verify.
>
> (1) **Homotopy invariance**: $f \simeq g$ implies $f^* = g^*$. This is obvious for both $h_*$ and $k_*$.
>
> (2) **Excision**: $h^*(X, A) \approx h^*(B, A \cap B)$ for $A$ and $B$ subcomplexes of the CW complex $X = A \cup B$. This is obvious, and so is the corresponding statement for $k_*$ since $(A \times Y) \cup (B \times Y) = (A \cup B) \times Y$ and $(A \times Y) \cap (B \times Y) = (A \cap B) \times Y$.
>
> (3) **The long exact sequence of a pair**. This is a triviality for $k_*$, but a few words of explanation are needed for $h_*$, where the desired exact sequence is obtained in two steps. For the first step, tensor the long exact sequence of ordinary cohomology groups for a pair $(X, A)$ with the free $R$-module $H^n(Y; R)$, for a fixed $n$. This yields another exact sequence because $H^n(Y; R)$ is a direct sum of copies of $R$, so the result of tensoring an exact sequence with this direct sum is simply to produce a direct sum of copies of the exact sequence, which is again an exact sequence. The second step is to let $n$ vary, taking a direct sum of the previously constructed exact sequences for each $n$, with the $n$th exact sequence shifted up by $n$ dimensions.
>
> (4) **Disjoint unions**. Again this axiom obviously holds for $k_*$, but some justification is required for $h_*$. What is needed is the algebraic fact that there is a canonical isomorphism $(\prod_\alpha M_\alpha) \otimes_R N \approx \prod_\alpha (M_\alpha \otimes_R N)$ for $R$-modules $M_\alpha$ and a finitely generated free $R$-module $N$. Since $N$ is a direct product of finitely many copies $R_\beta$ of $R$, $M_\alpha \otimes_R N$ is a direct product of corresponding copies $M_{\alpha\beta} = M_\alpha \otimes_R R_\beta$ of $M_\alpha$ and the desired relation becomes $\prod_\beta \prod_\alpha M_{\alpha\beta} \approx \prod_\alpha \prod_\beta M_{\alpha\beta}$, which is obviously true.
>
> Finally there is naturality of $\mu$ to consider. Naturality with respect to maps between spaces is immediate from the naturality of cup products. Naturality with respect to coboundary maps in long exact sequences is commutativity of the following square: To check this, start with an element of the upper left product, represented by cocycles $\phi \in C^k(A; R)$ and $\psi \in C^\ell(Y; R)$. Extend $\phi$ to a cochain $\tilde{\phi} \in C^k(X; R)$. Then the pair $(\tilde{\phi}, \psi)$ maps rightward to $(\delta\tilde{\phi}, \psi)$ and then downward to $p_1^\sharp(\delta\tilde{\phi}) \smile p_2^\sharp(\psi)$. Going the other way around the square, $(\tilde{\phi}, \psi)$ maps downward to $p_1^\sharp(\tilde{\phi}) \smile p_2^\sharp(\psi)$ and then rightward to $\delta(p_1^\sharp(\tilde{\phi}) \smile p_2^\sharp(\psi))$ since $p_1^\sharp(\tilde{\phi}) \smile p_2^\sharp(\psi)$ extends $p_1^\sharp(\phi) \smile p_2^\sharp(\psi)$ over $X \times Y$. Finally, $\delta(p_1^\sharp(\tilde{\phi}) \smile p_2^\sharp(\psi)) = p_1^\sharp(\delta\tilde{\phi}) \smile p_2^\sharp(\psi)$ since $\delta\psi = 0$. $\square$

It is sometimes important to have a relative version of the Künneth formula in Theorem 3.15. The relative cross product is

$$H^*(X, A; R) \otimes_R H^*(Y, B; R) \xrightarrow{\times} H^*(X \times Y, A \times Y \cup X \times B; R)$$

for CW pairs $(X, A)$ and $(Y, B)$, defined just as in the absolute case by $a \times b = p_1^*(a) \smile p_2^*(b)$ where $p_1^*(a) \in H^*(X \times Y, A \times Y; R)$ and $p_2^*(b) \in H^*(X \times Y, X \times B; R)$.

> [!theorem] Theorem 3.18
> For CW pairs $(X, A)$ and $(Y, B)$ the cross product homomorphism $H^*(X, A; R) \otimes_R H^*(Y, B; R) \to H^*(X \times Y, A \times Y \cup X \times B; R)$ is an isomorphism of rings if $H^k(Y, B; R)$ is a finitely generated free $R$-module for each $k$.

> [!proof] Proof
> The case $B = \emptyset$ was covered in the course of the proof of the absolute case, so it suffices to deduce the case $B \neq \emptyset$ from the case $B = \emptyset$.
>
> The following commutative diagram shows that collapsing $B$ to a point reduces the proof to the case that $B$ is a point: The lower map is an isomorphism since the quotient spaces $(X \times Y)/(A \times Y \cup X \times B)$ and $(X \times (Y/B))/(A \times (Y/B) \cup X \times (B/B))$ are the same.
>
> In the case that $B$ is a point $y_0 \in Y$, consider the commutative diagram. Since $y_0$ is a retract of $Y$, the upper row of this diagram is a split short exact sequence. The lower row is the long exact sequence of a triple, and it too is a split short exact sequence since $(X \times y_0, A \times y_0)$ is a retract of $(X \times Y, A \times Y)$. The middle and right cross product maps are isomorphisms by the case $B = \emptyset$ since $H^k(Y; R)$ is a finitely generated free $R$-module if $H^k(Y, y_0; R)$ is. The five-lemma then implies that the left-hand cross product map is an isomorphism as well. $\square$

The relative cross product for pairs $(X, x_0)$ and $(Y, y_0)$ gives a reduced cross product

$$\tilde{H}^*(X; R) \otimes_R \tilde{H}^*(Y; R) \xrightarrow{\times} \tilde{H}^*(X \wedge Y; R)$$

where $X \wedge Y$ is the **smash product** $X \times Y/(X \times \{y_0\} \cup \{x_0\} \times Y)$. The preceding theorem implies that this reduced cross product is an isomorphism if $\tilde{H}^*(X; R)$ or $\tilde{H}^*(Y; R)$ is free and finitely generated in each dimension. For example, we have isomorphisms $\tilde{H}^n(X; R) \approx \tilde{H}^{n+k}(X \wedge S^k; R)$ via cross product with a generator of $H^k(S^k; R) \approx R$. The space $X \wedge S^k$ is the $k$-fold reduced suspension $\Sigma^k X$ of $X$, so we see that the suspension isomorphisms $\tilde{H}^n(X; R) \approx \tilde{H}^{n+k}(\Sigma^k X; R)$ derivable by elementary exact sequence arguments can also be obtained via cross product with a generator of $\tilde{H}^*(S^k; R)$.

## Spaces with Polynomial Cohomology

Earlier in this section we mentioned that projective spaces provide examples of spaces whose cohomology rings are polynomial rings. Here is the precise statement:

> [!theorem] Theorem 3.19
> $H^*(\mathbb{RP}^n; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]/(\alpha^{n+1})$ and $H^*(\mathbb{RP}^\infty; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]$, where $|\alpha| = 1$. In the complex case, $H^*(\mathbb{CP}^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^{n+1})$ and $H^*(\mathbb{CP}^\infty; \mathbb{Z}) \approx \mathbb{Z}[\alpha]$ where $|\alpha| = 2$.

This turns out to be a quite important result, and it can be proved in a number of different ways. The proof we give here uses the geometry of projective spaces to reduce the result to a very special case of the Künneth formula. Another proof using Poincaré duality will be given in Example 3.40. A third proof is contained in Example 4D.5 as an application of the Gysin sequence.

> [!proof] Proof
> Let us do the case of $\mathbb{RP}^n$ first. To simplify notation we abbreviate $\mathbb{RP}^n$ to $P^n$ and we let the coefficient group $\mathbb{Z}_2$ be implicit. Since the inclusion $P^{n-1} \hookrightarrow P^n$ induces an isomorphism on $H^i$ for $i \le n-1$, it suffices by induction on $n$ to show that the cup product of a generator of $H^{n-1}(P^n)$ with a generator of $H^1(P^n)$ is a generator of $H^n(P^n)$. It will be no more work to show more generally that the cup product of a generator of $H^i(P^n)$ with a generator of $H^{n-i}(P^n)$ is a generator of $H^n(P^n)$. As a further notational aid, we let $j = n-i$, so $i + j = n$.
>
> The proof uses some of the geometric structure of $P^n$. Recall that $P^n$ consists of nonzero vectors $(x_0, \cdots, x_n) \in \mathbb{R}^{n+1}$ modulo multiplication by nonzero scalars. Inside $P^n$ is a copy of $P^i$ represented by vectors whose last $j$ coordinates $x_{i+1}, \cdots, x_n$ are zero. We also have a copy of $P^j$ represented by points whose first $i$ coordinates $x_0, \cdots, x_{i-1}$ are zero. The intersection $P^i \cap P^j$ is a single point $p$, represented by vectors whose only nonzero coordinate is $x_i$.
>
> Let $U$ be the subspace of $P^n$ represented by vectors with nonzero coordinate $x_i$. Each point in $U$ may be represented by a unique vector with $x_i = 1$ and the other $n$ coordinates arbitrary, so $U$ is homeomorphic to $\mathbb{R}^n$, with $p$ corresponding to $0$ under this homeomorphism. We can write this $\mathbb{R}^n$ as $\mathbb{R}^i \times \mathbb{R}^j$, with $\mathbb{R}^i$ as the coordinates $x_0, \cdots, x_{i-1}$ and $\mathbb{R}^j$ as the coordinates $x_{i+1}, \cdots, x_n$. In the figure $P^n$ is represented as a disk with antipodal points of its boundary sphere identified to form a $P^{n-1} \subset P^n$ with $U = P^n - P^{n-1}$ the interior of the disk.
>
> Consider the diagram
>
> $$
> \begin{CD}
> H^i(P^n) \times H^j(P^n) @>{\smile}>> H^n(P^n) \\
> @VVV @VVV \\
> H^i(P^n, P^n-\{p\}) \times H^j(P^n, P^n-\{p\}) @>{\smile}>> H^n(P^n, P^n-\{p\}) \\
> @AAA @AAA \\
> H^i(\mathbb{R}^i \times \mathbb{R}^j, \mathbb{R}^i \times \mathbb{R}^j - \{0\}) \times H^j(\mathbb{R}^i \times \mathbb{R}^j, \mathbb{R}^i \times \mathbb{R}^j - \{0\}) @>{\smile}>> H^n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \\
> @AAA @AAA \\
> H^i(\mathbb{R}^i, \mathbb{R}^i - \{0\}) \times H^j(\mathbb{R}^j, \mathbb{R}^j - \{0\}) @>{\smile}>> H^n(\mathbb{R}^n, \mathbb{R}^n - \{0\})
> \end{CD}
> $$
>
> which commutes by naturality of cup product. We will show that the four vertical maps are isomorphisms and that the lower cup product map takes generator cross generator to generator. Commutativity of the diagram will then imply that the upper cup product map also takes generator cross generator to generator.
>
> The lower map in the right column is an isomorphism by excision. For the upper map in this column, the fact that $P^n - \{p\}$ deformation retracts to a $P^{n-1}$ gives an isomorphism $H^n(P^n, P^n-\{p\}) \approx H^n(P^n, P^{n-1})$ via the five-lemma applied to the long exact sequences for these pairs. And $H^n(P^n, P^{n-1}) \approx H^n(P^n)$ by cellular cohomology.
>
> To see that the vertical maps in the left column are isomorphisms we will use the following commutative diagram:
>
> $$
> \begin{CD}
> H^i(P^n) @>>> H^i(P^i) @>>> H^i(P^i, P^i-\{p\}) \\
> @VVV @VVV @VVV \\
> H^i(P^n, P^n-P^j) @>>> H^i(P^n, P^n-P^j) @>>> H^i(P^n, P^n-\{p\}) \\
> @AAA @AAA @AAA \\
> H^i(P^i) @>>> H^i(P^i) @>>> H^i(\mathbb{R}^i, \mathbb{R}^i-\{0\})
> \end{CD}
> $$
>
> If we can show all these maps are isomorphisms, then the same argument will apply with $i$ and $j$ interchanged, and the vertical maps in the left column of the first diagram will be isomorphisms.
>
> The left-hand square in this second diagram consists of isomorphisms by cellular cohomology. The right-hand vertical map is obviously an isomorphism. The lower right horizontal map is an isomorphism by excision, and the map to the left of this is an isomorphism since $P^i - \{p\}$ deformation retracts onto $P^{i-1}$. The remaining maps will be isomorphisms if the middle map in the upper row is an isomorphism. And this map is in fact an isomorphism because $P^n - P^j$ deformation retracts onto $P^{i-1}$ by the following argument. The subspace $P^n - P^j \subset P^n$ consists of points represented by vectors $v = (x_0, \cdots, x_n)$ with at least one of the coordinates $x_0, \cdots, x_{i-1}$ nonzero. The formula $f_t(v) = (x_0, \cdots, x_{i-1}, tx_i, \cdots, tx_n)$ for $t$ decreasing from $1$ to $0$ gives a well-defined deformation retraction of $P^n - P^j$ onto $P^{i-1}$ since $f_t(\lambda v) = \lambda f_t(v)$ for scalars $\lambda \in \mathbb{R}$.
>
> The cup product map in the bottom row of the first diagram is equivalent to the cross product $H^i(I^i, \partial I^i) \times H^j(I^j, \partial I^j) \to H^n(I^n, \partial I^n)$, where the cross product of generators is a generator by the relative form of the Künneth formula in Theorem 3.18. Alternatively, if one wishes to use only the absolute Künneth formula, the cross product for cubes is equivalent to the cross product $H^i(S^i) \times H^j(S^j) \to H^n(S^i \times S^j)$ by means of the quotient maps $I^i \to S^i$ and $I^j \to S^j$ collapsing the boundaries of the cubes to points.
>
> This finishes the proof for $\mathbb{RP}^n$. The case of $\mathbb{RP}^\infty$ follows from this since the inclusion $\mathbb{RP}^n \hookrightarrow \mathbb{RP}^\infty$ induces isomorphisms on $H^i(-; \mathbb{Z}_2)$ for $i \le n$ by cellular cohomology.
>
> Complex projective spaces are handled in precisely the same way, using $\mathbb{Z}$ coefficients and replacing each $H^k$ by $H^{2k}$ and $\mathbb{R}$ by $\mathbb{C}$. $\square$

There are also quaternionic projective spaces $\mathbb{HP}^n$ and $\mathbb{HP}^\infty$, defined exactly as in the complex case, with CW structures of the form $e^0 \cup e^4 \cup e^8 \cup \cdots$. Associativity of quaternion multiplication is needed for the identification $v \sim \lambda v$ to be an equivalence relation, so the definition does not extend to octonionic projective spaces, though there is an octonionic projective plane $\mathbb{OP}^2$ defined in Example 4.47. The cup product structure in quaternionic projective spaces is just like that in complex projective spaces, except that the generator is 4-dimensional:

$$
H^*(\mathbb{HP}^\infty; \mathbb{Z}) \approx \mathbb{Z}[\alpha] \quad\text{and}\quad H^*(\mathbb{HP}^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^{n+1}), \qquad |\alpha| = 4
$$

The same proof as in the real and complex cases works here as well.

The cup product structure for $\mathbb{RP}^\infty$ with $\mathbb{Z}$ coefficients can easily be deduced from the cup product structure with $\mathbb{Z}_2$ coefficients, as follows. In general, a ring homomorphism $R \to S$ induces a ring homomorphism $H^*(X, A; R) \to H^*(X, A; S)$. In the case of the projection $\mathbb{Z} \to \mathbb{Z}_2$ we get for $\mathbb{RP}^\infty$ an induced chain map of cellular cochain complexes with $\mathbb{Z}$ and $\mathbb{Z}_2$ coefficients:

From this we see that the ring homomorphism $H^*(\mathbb{RP}^\infty; \mathbb{Z}) \to H^*(\mathbb{RP}^\infty; \mathbb{Z}_2)$ is injective in positive dimensions, with image the even-dimensional part of $H^*(\mathbb{RP}^\infty; \mathbb{Z}_2)$. Alternatively, this could be deduced from the universal coefficient theorem. Hence we have

$$H^*(\mathbb{RP}^\infty; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(2\alpha) \quad\text{with } |\alpha| = 2.$$

The cup product structure in $H^*(\mathbb{RP}^n; \mathbb{Z})$ can be computed in a similar fashion, though the description is a little cumbersome:

$$
\begin{aligned}
H^*(\mathbb{RP}^{2k}; \mathbb{Z}) &\approx \mathbb{Z}[\alpha]/(2\alpha, \alpha^{k+1}), & |\alpha| &= 2 \\
H^*(\mathbb{RP}^{2k+1}; \mathbb{Z}) &\approx \mathbb{Z}[\alpha, \beta]/(2\alpha, \alpha^{k+1}, \beta^2, \alpha\beta), & |\alpha| &= 2,\ |\beta| = 2k+1
\end{aligned}
$$

Here $\beta$ is a generator of $H^{2k+1}(\mathbb{RP}^{2k+1}; \mathbb{Z}) \approx \mathbb{Z}$. From this calculation we see that the rings $H^*(\mathbb{RP}^{2k+1}; \mathbb{Z})$ and $H^*(\mathbb{RP}^{2k} \vee S^{2k+1}; \mathbb{Z})$ are isomorphic, though with $\mathbb{Z}_2$ coefficients this is no longer true, as the generator $\alpha \in H^1(\mathbb{RP}^{2k+1}; \mathbb{Z}_2)$ has $\alpha^{2k+1} \neq 0$, while $\alpha^{2k+1} = 0$ for the generator $\alpha \in H^1(\mathbb{RP}^{2k} \vee S^{2k+1}; \mathbb{Z}_2)$.

> [!example] Example 3.20
> Combining the calculation $H^*(\mathbb{RP}^\infty; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]$ with the Künneth formula, we see that $H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z}_2)$ is isomorphic to $\mathbb{Z}_2[\alpha_1] \otimes \mathbb{Z}_2[\alpha_2]$, which is just the polynomial ring $\mathbb{Z}_2[\alpha_1, \alpha_2]$. More generally it follows by induction that for a product of $n$ copies of $\mathbb{RP}^\infty$, the $\mathbb{Z}_2$ cohomology is a polynomial ring in $n$ variables. Similar remarks apply to $\mathbb{CP}^\infty$ and $\mathbb{HP}^\infty$ with coefficients in $\mathbb{Z}$ or any commutative ring.

The following theorem of Hopf is a nice algebraic application of the cup product structure in $H^*(\mathbb{RP}^n \times \mathbb{RP}^n; \mathbb{Z}_2)$.

> [!theorem] Theorem 3.21
> If $\mathbb{R}^n$ has the structure of a division algebra over the scalar field $\mathbb{R}$, then $n$ must be a power of $2$.

> [!proof] Proof
> For a division algebra structure on $\mathbb{R}^n$ the multiplication maps $x \mapsto ax$ and $x \mapsto xa$ are linear isomorphisms for each nonzero $a$, so the multiplication map $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^n$ induces a map $h : \mathbb{RP}^{n-1} \times \mathbb{RP}^{n-1} \to \mathbb{RP}^{n-1}$ which is a homeomorphism when restricted to each subspace $\mathbb{RP}^{n-1} \times \{y\}$ and $\{x\} \times \mathbb{RP}^{n-1}$. The map $h$ is continuous since it is a quotient of the multiplication map which is bilinear and hence continuous. The induced homomorphism $h^*$ on $\mathbb{Z}_2$ cohomology is a ring homomorphism $\mathbb{Z}_2[\alpha]/(\alpha^n) \to \mathbb{Z}_2[\alpha_1, \alpha_2]/(\alpha_1^n, \alpha_2^n)$ determined by the element $h^*(\alpha) = k_1\alpha_1 + k_2\alpha_2$. The inclusion $\mathbb{RP}^{n-1} \hookrightarrow \mathbb{RP}^{n-1} \times \mathbb{RP}^{n-1}$ onto the first factor sends $\alpha_1$ to $\alpha$ and $\alpha_2$ to $0$, as one sees by composing with the projections of $\mathbb{RP}^{n-1} \times \mathbb{RP}^{n-1}$ onto its two factors. The fact that $h$ restricts to a homeomorphism on the first factor then implies that $k_1$ is nonzero. Similarly $k_2$ is nonzero, so since these coefficients lie in $\mathbb{Z}_2$ we have $h^*(\alpha) = \alpha_1 + \alpha_2$.
>
> Since $\alpha^n = 0$ we must have $h^*(\alpha^n) = 0$, so $(\alpha_1 + \alpha_2)^n = \sum_k \binom{n}{k} \alpha_1^k \alpha_2^{n-k} = 0$. This is an equation in the ring $\mathbb{Z}_2[\alpha_1, \alpha_2]/(\alpha_1^n, \alpha_2^n)$, so the coefficient $\binom{n}{k}$ must be zero in $\mathbb{Z}_2$ for all $k$ in the range $0 < k < n$. It is a rather easy number theory fact that this happens only when $n$ is a power of $2$. Namely, an obviously equivalent statement is that in the polynomial ring $\mathbb{Z}_2[x]$, the equality $(1+x)^n = 1 + x^n$ holds only when $n$ is a power of $2$. To prove the latter statement, write $n$ as a sum of powers of $2$, $n = n_1 + \cdots + n_k$ with $n_1 < \cdots < n_k$. Then $(1+x)^n = (1+x)^{n_1} \cdots (1+x)^{n_k} = (1 + x^{n_1}) \cdots (1 + x^{n_k})$ since squaring is an additive homomorphism with $\mathbb{Z}_2$ coefficients. If one multiplies the product $(1 + x^{n_1}) \cdots (1 + x^{n_k})$ out, no terms combine or cancel since $n_i \ge 2n_{i-1}$ for each $i$, and so the resulting polynomial has $2^k$ terms. Thus if this polynomial equals $1 + x^n$ we must have $k = 1$, which means that $n$ is a power of $2$. $\square$

The same argument can be applied with $\mathbb{C}$ in place of $\mathbb{R}$, to show that if $\mathbb{C}^n$ is a division algebra over $\mathbb{C}$ then $\binom{n}{k} = 0$ for all $k$ in the range $0 < k < n$, but now we can use $\mathbb{Z}$ rather than $\mathbb{Z}_2$ coefficients, so we deduce that $n = 1$. Thus there are no higher-dimensional division algebras over $\mathbb{C}$. This is assuming we are talking about finite-dimensional division algebras. For infinite dimensions there is for example the field of rational functions $\mathbb{C}(x)$.

We saw in Theorem 3.19 that $\mathbb{RP}^\infty$, $\mathbb{CP}^\infty$, and $\mathbb{HP}^\infty$ have cohomology rings that are polynomial algebras. We will describe now a construction for enlarging $S^{2n}$ to a space $J(S^{2n})$ whose cohomology ring $H^*(J(S^{2n}); \mathbb{Z})$ is almost the polynomial ring $\mathbb{Z}[x]$ on a generator $x$ of dimension $2n$. And if we change from $\mathbb{Z}$ to $\mathbb{Q}$ coefficients, then $H^*(J(S^{2n}); \mathbb{Q})$ is exactly the polynomial ring $\mathbb{Q}[x]$. This construction, known as the **James reduced product**, is also of interest because of its connections with loopspaces described in §4.J.

For a space $X$, let $X^k$ be the product of $k$ copies of $X$. From the disjoint union $\bigsqcup_{k \ge 1} X^k$, let us form a quotient space $J(X)$ by identifying $(x_1, \cdots, x_i, \cdots, x_k)$ with $(x_1, \cdots, \hat{x}_i, \cdots, x_k)$ if $x_i = e$, a chosen basepoint of $X$. Points of $J(X)$ can thus be thought of as $k$-tuples $(x_1, \cdots, x_k)$, $k \ge 0$, with no $x_i = e$. Inside $J(X)$ is the subspace $J_m(X)$ consisting of the points $(x_1, \cdots, x_k)$ with $k \le m$. This can be viewed as a quotient space of $X^m$ under the identifications $(x_1, \cdots, x_i, e, \cdots, x_m) \sim (x_1, \cdots, e, x_i, \cdots, x_m)$. For example, $J_1(X) = X$ and $J_2(X) = X \times X/(x, e) \sim (e, x)$. If $X$ is a CW complex with $e$ a 0-cell, the quotient map $X^m \to J_m(X)$ glues together the $m$ subcomplexes of the product complex $X^m$ where one coordinate is $e$. These glueings are by homeomorphisms taking cells onto cells, so $J_m(X)$ inherits a CW structure from $X^m$. There are natural inclusions $J_m(X) \subset J_{m+1}(X)$ as subcomplexes, and $J(X)$ is the union of these subcomplexes, hence is also a CW complex.

> [!proposition] Proposition 3.22
> For $n > 0$, $H^*(J(S^n); \mathbb{Z})$ consists of a $\mathbb{Z}$ in each dimension a multiple of $n$. If $n$ is even, the $i$th power of a generator of $H^n(J(S^n); \mathbb{Z})$ is $i!$ times a generator of $H^{in}(J(S^n); \mathbb{Z})$, for each $i \ge 1$.
>
> When $n$ is odd, $H^*(J(S^n); \mathbb{Z})$ is isomorphic as a graded ring to $H^*(S^n; \mathbb{Z}) \otimes H^*(J(S^{2n}); \mathbb{Z})$.
>
> It follows that for $n$ even, $H^*(J(S^n); \mathbb{Z})$ can be identified with the subring of the polynomial ring $\mathbb{Q}[x]$ additively generated by the monomials $x^i/i!$. This subring is called a **divided polynomial algebra** and is denoted $\Gamma_\mathbb{Z}[x]$. Thus $H^*(J(S^n); \mathbb{Z})$ is isomorphic to $\Gamma_\mathbb{Z}[x]$ when $n$ is even and to $\Lambda_\mathbb{Z}[x] \otimes \Gamma_\mathbb{Z}[y]$ when $n$ is odd.

> [!proof] Proof
> Giving $S^n$ its usual CW structure, the resulting CW structure on $J(S^n)$ consists of exactly one cell in each dimension a multiple of $n$. If $n > 1$ we deduce immediately from cellular cohomology that $H^*(J(S^n); \mathbb{Z})$ consists exactly of $\mathbb{Z}$'s in dimensions a multiple of $n$. For an alternative argument that works also when $n = 1$, consider the quotient map $q : (S^n)^m \to J_m(S^n)$. This carries each cell of $(S^n)^m$ homeomorphically onto a cell of $J_m(S^n)$. In particular $q$ is a cellular map, taking $k$-skeleton to $k$-skeleton for each $k$, so $q$ induces a chain map of cellular chain complexes. This chain map is surjective since each cell of $J_m(S^n)$ is the homeomorphic image of a cell of $(S^n)^m$. Hence the cellular boundary maps for $J_m(S^n)$ will be trivial if they are trivial for $(S^n)^m$, as indeed they are since $H^*((S^n)^m; \mathbb{Z})$ is free with basis in one-to-one correspondence with the cells, by Theorem 3.15.
>
> We can compute cup products in $H^*(J_m(S^n); \mathbb{Z})$ by computing their images under $q^*$. Let $x_k$ denote the generator of $H^{kn}(J_m(S^n); \mathbb{Z})$ dual to the $kn$ cell, represented by the cellular cocycle assigning the value $1$ to the $kn$ cell. Since $q$ identifies all the $n$ cells of $(S^n)^m$ to form the $n$ cell of $J_m(S^n)$, we see from cellular cohomology that $q^*(x_1)$ is the sum $\alpha_1 + \cdots + \alpha_m$ of the generators of $H^n((S^n)^m; \mathbb{Z})$ dual to the $n$ cells of $(S^n)^m$. By the same reasoning we have $q^*(x_k) = \sum_{i_1 < \cdots < i_k} \alpha_{i_1} \cdots \alpha_{i_k}$.
>
> If $n$ is even, the cup product structure in $H^*((S^n)^m; \mathbb{Z})$ is strictly commutative and $H^*((S^n)^m; \mathbb{Z}) \approx \mathbb{Z}[\alpha_1, \cdots, \alpha_m]/(\alpha_1^2, \cdots, \alpha_m^2)$. Then we have
>
> $$q^*(x_1^m) = (\alpha_1 + \cdots + \alpha_m)^m = m! \, \alpha_1 \cdots \alpha_m = m! \, q^*(x_m)$$
>
> Since $q^*$ is an isomorphism on $H^{mn}$ this implies $x_1^m = m! \, x_m$ in $H^{mn}(J_m(S^n); \mathbb{Z})$. The inclusion $J_m(S^n) \hookrightarrow J(S^n)$ induces isomorphisms on $H^i$ for $i \le mn$ so we have $x_1^m = m! \, x_m$ in $H^*(J(S^n); \mathbb{Z})$ as well, where $x_1$ and $x_m$ are interpreted now as elements of $H^*(J(S^n); \mathbb{Z})$.
>
> When $n$ is odd we have $x_1^2 = 0$ by commutativity, and it will suffice to prove the following two formulas:
>
> (a) $x_1 x_{2m} = x_{2m+1}$ in $H^*(J_{2m+1}(S^n); \mathbb{Z})$.
> (b) $x_2 x_{2m-2} = m x_{2m}$ in $H^*(J_{2m}(S^n); \mathbb{Z})$.
>
> For (a) we apply $q^*$ and compute in the exterior algebra $\Lambda_\mathbb{Z}[\alpha_1, \cdots, \alpha_{2m+1}]$:
>
> $$
> q^*(x_1 x_{2m}) = \big(\sum_i \alpha_i\big) \big(\sum_i \alpha_1 \cdots \hat{\alpha}_i \cdots \alpha_{2m+1}\big) = \sum_i \alpha_i \alpha_1 \cdots \hat{\alpha}_i \cdots \alpha_{2m+1} = \sum_i (-1)^{i-1} \alpha_1 \cdots \alpha_{2m+1}
> $$
>
> The coefficients in this last summation are $+1, -1, \cdots, +1$, so their sum is $+1$ and (a) follows. For (b) we have
>
> $$
> \begin{aligned}
> q^*(x_2 x_{2m-2}) &= \big(\sum_{i_1 < i_2} \alpha_{i_1} \alpha_{i_2}\big) \big(\sum_{i_1 < i_2} \alpha_1 \cdots \hat{\alpha}_{i_1} \cdots \hat{\alpha}_{i_2} \cdots \alpha_{2m}\big) \\
> &= \sum_{i_1 < i_2} \alpha_{i_1} \alpha_{i_2} \alpha_1 \cdots \hat{\alpha}_{i_1} \cdots \hat{\alpha}_{i_2} \cdots \alpha_{2m} = \sum_{i_1 < i_2} (-1)^{i_1-1} (-1)^{i_2-2} \alpha_1 \cdots \alpha_{2m}
> \end{aligned}
> $$
>
> The terms in the coefficient $\sum_{i_1 < i_2} (-1)^{i_1-1} (-1)^{i_2-2}$ for a fixed $i_1$ have $i_2$ varying from $i_1+1$ to $2m$. These terms are $+1, -1, \cdots$ and there are $2m-i_1$ of them, so their sum is $0$ if $i_1$ is even and $1$ if $i_1$ is odd. Now letting $i_1$ vary, it takes on the odd values $1, 3, \cdots, 2m-1$, so the whole summation reduces to $m$ 1's and we have the desired relation $x_2 x_{2m-2} = m x_{2m}$. $\square$

In $\Gamma_\mathbb{Z}[x] \subset \mathbb{Q}[x]$, if we let $x_i = x^i/i!$ then the multiplicative structure is given by $x_i x_j = \binom{i+j}{i} x_{i+j}$. More generally, for a commutative ring $R$ we could define $\Gamma_R[x]$ to be the free $R$-module with basis $x_0 = 1, x_1, x_2, \cdots$ and multiplication defined by $x_i x_j = \binom{i+j}{i} x_{i+j}$. The preceding proposition implies that $H^*(J(S^{2n}); R) \approx \Gamma_R[x]$. When $R = \mathbb{Q}$ it is clear that $\Gamma_\mathbb{Q}[x]$ is just $\mathbb{Q}[x]$. However, for $R = \mathbb{Z}_p$ with $p$ prime something quite different happens: There is an isomorphism

$$\Gamma_{\mathbb{Z}_p}[x] \approx \mathbb{Z}_p[x_1, x_p, x_{p^2}, \cdots]/(x_1^p, x_p^p, x_{p^2}^p, \cdots) = \bigotimes_{i \ge 0} \mathbb{Z}_p[x_{p^i}]/(x_{p^i}^p)$$

as we show in §3.C, where we will also see that divided polynomial algebras are in a certain sense dual to polynomial algebras.

The examples of projective spaces lead naturally to the following question: Given a coefficient ring $R$ and an integer $d > 0$, is there a space $X$ having $H^*(X; R) \approx R[\alpha]$ with $|\alpha| = d$? Historically, it took major advances in the theory to answer this simple-looking question. Here is a table giving all the possible values of $d$ for some of the most obvious and important choices of $R$, namely $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{Z}_2$, and $\mathbb{Z}_p$ with $p$ an odd prime.

$$
\begin{array}{c|c}
R & d \\ \hline
\mathbb{Z} & 2, 4 \\
\mathbb{Q} & \text{any even number} \\
\mathbb{Z}_2 & 1, 2, 4 \\
\mathbb{Z}_p & \text{any even divisor of }2(p-1)
\end{array}
$$

As we have seen, projective spaces give the examples for $\mathbb{Z}$ and $\mathbb{Z}_2$. Examples for $\mathbb{Q}$ are the spaces $J(S^d)$, and examples for $\mathbb{Z}_p$ are constructed in §3.G. Showing that no other $d$'s are possible takes considerably more work. The fact that $d$ must be even when $R \neq \mathbb{Z}_2$ is a consequence of the commutativity property of cup product. In Theorem 4L.9 and Corollary 4L.10 we will settle the case $R = \mathbb{Z}$ and show that $d$ must be a power of $2$ for $R = \mathbb{Z}_2$ and a power of $p$ times an even divisor of $2(p-1)$ for $R = \mathbb{Z}_p$, $p$ odd. Ruling out the remaining cases is best done using K-theory, as in [VBKT] or the classical reference [Adams & Atiyah 1966]. However there is one slightly anomalous case, $R = \mathbb{Z}_2$, $d = 8$, which must be treated by special arguments; see [Toda 1963].

It is an interesting fact that for each even $d$ there exists a CW complex $X_d$ which is simultaneously an example for all the admissible choices of coefficients $R$ in the table. Moreover, $X_d$ can be chosen to have the simplest CW structure consistent with its cohomology, namely a single cell in each dimension a multiple of $d$. For example, we may take $X_2 = \mathbb{CP}^\infty$ and $X_4 = \mathbb{HP}^\infty$. The next space $X_6$ would have $H^*(X_6; \mathbb{Z}_p) \approx \mathbb{Z}_p[\alpha]$ for $p = 7, 13, 19, 31, \cdots$, primes of the form $3s + 1$, the condition $6 \mid 2(p-1)$ being equivalent to $p = 3s + 1$. (By a famous theorem of Dirichlet there are infinitely many primes in any such arithmetic progression.) Note that, in terms of $\mathbb{Z}$ coefficients, $X_d$ must have the property that for a generator $\alpha$ of $H^d(X_d; \mathbb{Z})$, each power $\alpha^i$ is an integer $a_i$ times a generator of $H^{di}(X_d; \mathbb{Z})$, with $a_i \neq 0$ if $H^*(X_d; \mathbb{Q}) \approx \mathbb{Q}[\alpha]$ and $a_i$ relatively prime to $p$ if $H^*(X_d; \mathbb{Z}_p) \approx \mathbb{Z}_p[\alpha]$. A construction of $X_d$ is given in [SSAT], or in the original source [Hoffman & Porter 1973].

One might also ask about realizing the truncated polynomial ring $R[\alpha]/(\alpha^{n+1})$, in view of the examples provided by $\mathbb{RP}^n$, $\mathbb{CP}^n$, and $\mathbb{HP}^n$, leaving aside the trivial case $n = 1$ where spheres provide examples. The analysis for polynomial rings also settles which truncated polynomial rings are realizable; there are just a few more than for the full polynomial rings.

There is also the question of realizing polynomial rings $R[\alpha_1, \cdots, \alpha_n]$ with generators $\alpha_i$ in specified dimensions $d_i$. Since $R[\alpha_1, \cdots, \alpha_m] \otimes_R R[\beta_1, \cdots, \beta_n]$ is equal to $R[\alpha_1, \cdots, \alpha_m, \beta_1, \cdots, \beta_n]$, the product of two spaces with polynomial cohomology is again a space with polynomial cohomology, assuming the number of polynomial generators is finite in each dimension. For example, the $n$-fold product $(\mathbb{CP}^\infty)^n$ has $H^*((\mathbb{CP}^\infty)^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha_1, \cdots, \alpha_n]$ with each $\alpha_i$ 2-dimensional. Similarly, products of the spaces $J(S^{d_i})$ realize all choices of even $d_i$'s with $\mathbb{Q}$ coefficients.

However, with $\mathbb{Z}$ and $\mathbb{Z}_p$ coefficients, products of one-variable examples do not exhaust all the possibilities. As we show in §4.D, there are three other basic examples with $\mathbb{Z}$ coefficients:

1. Generalizing the space $\mathbb{CP}^\infty$ of complex lines through the origin in $\mathbb{C}^\infty$, there is the **Grassmann manifold** $G_n(\mathbb{C}^\infty)$ of $n$-dimensional vector subspaces of $\mathbb{C}^\infty$, and this has $H^*(G_n(\mathbb{C}^\infty); \mathbb{Z}) \approx \mathbb{Z}[\alpha_1, \cdots, \alpha_n]$ with $|\alpha_i| = 2i$. This space is also known as $BU(n)$, the "classifying space" of the unitary group $U(n)$. It is central to the study of vector bundles and K-theory.

2. Replacing $\mathbb{C}$ by $\mathbb{H}$, there is the quaternionic Grassmann manifold $G_n(\mathbb{H}^\infty)$, also known as $BSp(n)$, the classifying space for the symplectic group $Sp(n)$, with $H^*(G_n(\mathbb{H}^\infty); \mathbb{Z}) \approx \mathbb{Z}[\alpha_1, \cdots, \alpha_n]$ with $|\alpha_i| = 4i$.

3. There is a classifying space $BSU(n)$ for the special unitary group $SU(n)$, whose cohomology is the same as for $BU(n)$ but with the first generator $\alpha_1$ omitted, so $H^*(BSU(n); \mathbb{Z}) \approx \mathbb{Z}[\alpha_2, \cdots, \alpha_n]$ with $|\alpha_i| = 2i$.

These examples and their products account for all the realizable polynomial cup product rings with $\mathbb{Z}$ coefficients, according to a theorem in [Andersen & Grodal 2008]. The situation for $\mathbb{Z}_p$ coefficients is more complicated and will be discussed in §3.G.

Polynomial algebras are examples of **free graded commutative algebras**, where "free" means loosely "having no unnecessary relations". In general, a free graded commutative algebra is a tensor product of single-generator free graded commutative algebras. The latter are either polynomial algebras $R[\alpha]$ on even-dimension generators $\alpha$ or quotients $R[\alpha]/(2\alpha^2)$ with $\alpha$ odd-dimensional. Note that if $R$ is a field then $R[\alpha]/(2\alpha^2)$ is either the exterior algebra $\Lambda_R[\alpha]$ if the characteristic of $R$ is not $2$, or the polynomial algebra $R[\alpha]$ otherwise. Every graded commutative algebra is a quotient of a free one, clearly.

> [!example] Example 3.23: Subcomplexes of the $n$-Torus
> To give just a small hint of the endless variety of nonfree cup product algebras that can be realized, consider subcomplexes of the $n$-torus $T^n$, the product of $n$ copies of $S^1$. Here we give $S^1$ its standard minimal cell structure and $T^n$ the resulting product cell structure. We know that $H^*(T^n; \mathbb{Z})$ is the exterior algebra $\Lambda_\mathbb{Z}[\alpha_1, \cdots, \alpha_n]$, with the monomial $\alpha_{i_1} \cdots \alpha_{i_k}$ corresponding via cellular cohomology to the $k$-cell $e^1_{i_1} \times \cdots \times e^1_{i_k}$. So if we pass to a subcomplex $X \subset T^n$ by omitting certain cells, then $H^*(X; \mathbb{Z})$ is the quotient of $\Lambda_\mathbb{Z}[\alpha_1, \cdots, \alpha_n]$ obtained by setting the monomials corresponding to the omitted cells equal to zero. Since we are dealing with rings, we are factoring out by an ideal in $\Lambda_\mathbb{Z}[\alpha_1, \cdots, \alpha_n]$, the ideal generated by the monomials corresponding to the "minimal" omitted cells, those whose boundary is entirely contained in $X$. For example, if we take $X$ to be the subcomplex of $T^3$ obtained by deleting the cells $e^1_1 \times e^1_2 \times e^1_3$ and $e^1_2 \times e^1_3$, then $H^*(X; \mathbb{Z}) \approx \Lambda_\mathbb{Z}[\alpha_1, \alpha_2, \alpha_3]/(\alpha_2\alpha_3)$.
>
> How many different subcomplexes of $T^n$ are there? To each subcomplex $X \subset T^n$ we can associate a finite simplicial complex $C_X$ by the following procedure. View $T^n$ as the quotient of the $n$-cube $I^n = [0,1]^n \subset \mathbb{R}^n$ obtained by identifying opposite faces. If we intersect $I^n$ with the hyperplane $x_1 + \cdots + x_n = \varepsilon$ for small $\varepsilon > 0$, we get a simplex $\Delta^{n-1}$. Then for $q : I^n \to T^n$ the quotient map, we take $C_X$ to be $\Delta^{n-1} \cap q^{-1}(X)$. This is a subcomplex of $\Delta^{n-1}$ whose $k$-simplices correspond exactly to the $(k+1)$-cells of $X$. In this way we get a one-to-one correspondence between subcomplexes $X \subset T^n$ and subcomplexes $C_X \subset \Delta^{n-1}$. Every simplicial complex with $n$ vertices is a subcomplex of $\Delta^{n-1}$, so we see that $T^n$ has quite a large number of subcomplexes if $n$ is not too small.
>
> The cohomology rings $H^*(X; \mathbb{Z})$ are of a type that was completely classified in [Gubeladze 1998], Theorem 3.1, and from this classification it follows that the ring $H^*(X; \mathbb{Z})$ (or even $H^*(X; \mathbb{Z}_2)$) determines the subcomplex $X$ uniquely, up to permutation of the $n$ circle factors of $T^n$.
>
> More elaborate examples could be produced by looking at subcomplexes of the product of $n$ copies of $\mathbb{CP}^\infty$. In this case the cohomology rings are isomorphic to polynomial rings modulo ideals generated by monomials, and it is again true that the cohomology ring determines the subcomplex up to permutation of factors. However, these cohomology rings are still a whole lot less complicated than the general case, where one takes free algebras modulo ideals generated by arbitrary polynomials having all their terms of the same dimension.

Let us conclude this section with an example of a cohomology ring that is not too far removed from a polynomial ring.

> [!example] Example 3.24: Cohen–Macaulay Rings
> Let $X$ be the quotient space $\mathbb{CP}^\infty / \mathbb{CP}^{n-1}$. The quotient map $\mathbb{CP}^\infty \to X$ induces an injection $H^*(X; \mathbb{Z}) \to H^*(\mathbb{CP}^\infty; \mathbb{Z})$ embedding $H^*(X; \mathbb{Z})$ in $\mathbb{Z}[\alpha]$ as the subring generated by $1, \alpha^n, \alpha^{n+1}, \cdots$. If we view this subring as a module over $\mathbb{Z}[\alpha^n]$, it is free with basis $\{1, \alpha^{n+1}, \alpha^{n+2}, \cdots, \alpha^{2n-1}\}$. Thus $H^*(X; \mathbb{Z})$ is an example of a **Cohen–Macaulay ring**: a ring containing a polynomial subring over which it is a finitely generated free module. While polynomial cup product rings are rather rare, Cohen–Macaulay cup product rings occur much more frequently.

## Exercises

> [!exercise] 1
> Assuming as known the cup product structure on the torus $S^1 \times S^1$, compute the cup product structure in $H^*(M_g)$ for $M_g$ the closed orientable surface of genus $g$ by using the quotient map from $M_g$ to a wedge sum of $g$ tori.

> [!exercise] 2
> Using the cup product $H^k(X, A; R) \times H^\ell(X, B; R) \to H^{k+\ell}(X, A \cup B; R)$, show that if $X$ is the union of contractible open subsets $A$ and $B$, then all cup products of positive-dimensional classes in $H^*(X; R)$ are zero. This applies in particular if $X$ is a suspension. Generalize to the situation that $X$ is the union of $n$ contractible open subsets, to show that all $n$-fold cup products of positive-dimensional classes are zero.

> [!exercise] 3
> (a) Using the cup product structure, show there is no map $\mathbb{RP}^n \to \mathbb{RP}^m$ inducing a nontrivial map $H^1(\mathbb{RP}^m; \mathbb{Z}_2) \to H^1(\mathbb{RP}^n; \mathbb{Z}_2)$ if $n > m$. What is the corresponding result for maps $\mathbb{CP}^n \to \mathbb{CP}^m$?
>
> (b) Prove the Borsuk–Ulam theorem by the following argument. Suppose on the contrary that $f : S^n \to \mathbb{R}^n$ satisfies $f(x) \neq f(-x)$ for all $x$. Then define $g : S^n \to S^{n-1}$ by $g(x) = (f(x) - f(-x))/|f(x) - f(-x)|$, so $g(-x) = -g(x)$ and $g$ induces a map $\mathbb{RP}^n \to \mathbb{RP}^{n-1}$. Show that part (a) applies to this map.

> [!exercise] 4
> Apply the Lefschetz fixed point theorem to show that every map $f : \mathbb{CP}^n \to \mathbb{CP}^n$ has a fixed point if $n$ is even, using the fact that $f^* : H^*(\mathbb{CP}^n; \mathbb{Z}) \to H^*(\mathbb{CP}^n; \mathbb{Z})$ is a ring homomorphism. When $n$ is odd show there is a fixed point unless $f^*(\alpha) = -\alpha$, for $\alpha$ a generator of $H^2(\mathbb{CP}^n; \mathbb{Z})$. [See Exercise 3 in §2.C for an example of a map without fixed points in this exceptional case.]

> [!exercise] 5
> Show the ring $H^*(\mathbb{RP}^\infty; \mathbb{Z}_{2k})$ is isomorphic to $\mathbb{Z}_{2k}[\alpha, \beta]/(2\alpha, 2\beta, \alpha^2 - k\beta)$ where $|\alpha| = 1$ and $|\beta| = 2$. [Use the coefficient map $\mathbb{Z}_{2k} \to \mathbb{Z}_2$ and the proof of Theorem 3.19.]

> [!exercise] 6
> Use cup products to compute the map $H^*(\mathbb{CP}^n; \mathbb{Z}) \to H^*(\mathbb{CP}^n; \mathbb{Z})$ induced by the map $\mathbb{CP}^n \to \mathbb{CP}^n$ that is a quotient of the map $\mathbb{C}^{n+1} \to \mathbb{C}^{n+1}$ raising each coordinate to the $d$th power, $(z_0, \cdots, z_n) \mapsto (z_0^d, \cdots, z_n^d)$, for a fixed integer $d > 0$. [First do the case $n = 1$.]

> [!exercise] 7
> Use cup products to show that $\mathbb{RP}^3$ is not homotopy equivalent to $\mathbb{RP}^2 \vee S^3$.

> [!exercise] 8
> Let $X$ be $\mathbb{CP}^2$ with a cell $e^3$ attached by a map $S^2 \to \mathbb{CP}^1 \subset \mathbb{CP}^2$ of degree $p$, and let $Y = M(\mathbb{Z}_p, 2) \vee S^4$. Thus $X$ and $Y$ have the same 3-skeleton but differ in the way their 4-cells are attached. Show that $X$ and $Y$ have isomorphic cohomology rings with $\mathbb{Z}$ coefficients but not with $\mathbb{Z}_p$ coefficients.

> [!exercise] 9
> Show that if $H^n(X; \mathbb{Z})$ is free for each $n$, then $H^*(X; \mathbb{Z}_p)$ and $H^*(X; \mathbb{Z}) \otimes \mathbb{Z}_p$ are isomorphic as rings, so in particular the ring structure with $\mathbb{Z}$ coefficients determines the ring structure with $\mathbb{Z}_p$ coefficients.

> [!exercise] 10
> Show that the cross product map $H^*(X; \mathbb{Z}) \otimes H^*(Y; \mathbb{Z}) \to H^*(X \times Y; \mathbb{Z})$ is not an isomorphism if $X$ and $Y$ are infinite discrete sets. [This shows the necessity of the hypothesis of finite generation in Theorem 3.15.]

> [!exercise] 11
> Using cup products, show that every map $S^{k+\ell} \to S^k \times S^\ell$ induces the trivial homomorphism $H^{k+\ell}(S^{k+\ell}) \to H^{k+\ell}(S^k \times S^\ell)$, assuming $k > 0$ and $\ell > 0$.

> [!exercise] 12
> Show that the spaces $(S^1 \times \mathbb{CP}^\infty)/(S^1 \times \{x_0\})$ and $S^3 \times \mathbb{CP}^\infty$ have isomorphic cohomology rings with $\mathbb{Z}$ or any other coefficients. [An exercise for §4.L is to show these two spaces are not homotopy equivalent.]

> [!exercise] 18
> For the closed orientable surface $M$ of genus $g \ge 1$, show that for each nonzero $\alpha \in H^1(M; \mathbb{Z})$ there exists $\beta \in H^1(M; \mathbb{Z})$ with $\alpha\beta \neq 0$. Deduce that $M$ is not homotopy equivalent to a wedge sum $X \vee Y$ of CW complexes with nontrivial reduced homology. Do the same for closed nonorientable surfaces using cohomology with $\mathbb{Z}_2$ coefficients.
