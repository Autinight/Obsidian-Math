---
title: 3.3 Poincare Duality
tags:
  - textbook
  - AT
  - Hatcher
  - cohomology
source: "[[pdf - AT Hatcher.pdf]]"
section: "3.3"
date: 2026-05-05
---

# 3.3 Poincaré Duality

> [!abstract] 
> Algebraic topology is most often concerned with properties of spaces that depend only on homotopy type, so local topological properties do not play much of a role. Digressing somewhat from this viewpoint, we study in this section a class of spaces whose most prominent feature is their local topology, namely manifolds, which are locally homeomorphic to $\mathbb{R}^n$. It is somewhat miraculous that just this local homogeneity property, together with global compactness, is enough to impose a strong symmetry on the homology and cohomology groups of such spaces, as well as strong nontriviality of cup products. This is the **Poincaré duality theorem**, one of the earliest theorems in the subject.

> [!info]
> Poincaré duality in its most primitive form asserts that for a closed orientable manifold $M$ of dimension $n$, there are isomorphisms $H^k(M; \mathbb{Z}) \cong H_{n-k}(M; \mathbb{Z})$ for all $k$. Without orientability there is a weaker statement $H^k(M; \mathbb{Z}_2) \cong H_{n-k}(M; \mathbb{Z}_2)$.

## Introduction

Let us begin with some definitions.

> [!definition]
> A **manifold** of dimension $n$, or more concisely an **$n$ manifold**, is a Hausdorff space $M$ in which each point has an open neighborhood homeomorphic to $\mathbb{R}^n$. The dimension of $M$ is intrinsically characterized by the fact that for $x \in M$, the local homology group $H_i(M, M-\{x\}; \mathbb{Z})$ is nonzero only for $i = n$:
> $$
> H_i(M, M -\{x\}; \mathbb{Z}) \cong H_i(\mathbb{R}^n, \mathbb{R}^n -\{0\}; \mathbb{Z}) \cong \widetilde{H}_{i-1}(\mathbb{R}^n -\{0\}; \mathbb{Z}) \cong \widetilde{H}_{i-1}(S^{n-1}; \mathbb{Z})
> $$

A compact manifold is called **closed**, to distinguish it from the more general notion of a compact manifold with boundary, considered later in this section. For example $S^n$ is a closed manifold, as are $\mathbb{RP}^n$ and lens spaces since they have $S^n$ as a covering space. Another closed manifold is $\mathbb{CP}^n$. This is compact since it is a quotient space of $S^{2n+1}$, and the manifold property is satisfied since there is an open cover by subsets homeomorphic to $\mathbb{R}^{2n}$, the sets $U_i = \{ [z_0, \cdots, z_n] \in \mathbb{CP}^n \mid z_i = 1 \}$. The same reasoning applies also for quaternionic projective spaces. Further examples of closed manifolds can be generated from these using the obvious fact that the product of closed manifolds of dimensions $m$ and $n$ is a closed manifold of dimension $m + n$.

Poincaré duality in its most primitive form asserts that for a closed orientable manifold $M$ of dimension $n$, there are isomorphisms $H^k(M; \mathbb{Z}) \cong H_{n-k}(M; \mathbb{Z})$ for all $k$. Implicit here is the convention that homology and cohomology groups of negative dimension are zero, so the duality statement includes the fact that all the nontrivial homology and cohomology of $M$ lies in the dimension range from $0$ to $n$. The definition of 'orientable' will be given below. Without the orientability hypothesis there is a weaker statement that $H^k(M; \mathbb{Z}_2) \cong H_{n-k}(M; \mathbb{Z}_2)$ for all $k$. As shown in Corollaries A.8 and A.9 in the Appendix, the homology groups of a closed manifold are all finitely generated. So via the universal coefficient theorem, Poincaré duality for a closed orientable $n$ manifold $M$ can be stated just in terms of homology: Modulo their torsion subgroups, $H_k(M; \mathbb{Z})$ and $H_{n-k}(M; \mathbb{Z})$ are isomorphic, and the torsion subgroups of $H_k(M; \mathbb{Z})$ and $H_{n-k-1}(M; \mathbb{Z})$ are isomorphic. However, the statement in terms of cohomology is really more natural.

Poincaré duality thus expresses a certain symmetry in the homology of closed orientable manifolds. For example, consider the $n$ dimensional torus $T^n$, the product of $n$ circles. By induction on $n$ it follows from the Künneth formula, or from the easy special case $H_i(X\times S^1; \mathbb{Z}) \cong H_i(X; \mathbb{Z}) \oplus H_{i-1}(X; \mathbb{Z})$ which was an exercise in §2.2, that $H_k(T^n; \mathbb{Z})$ is isomorphic to the direct sum of $\binom{n}{k}$ copies of $\mathbb{Z}$. So Poincaré duality is reflected in the relation $\binom{n}{k} = \binom{n}{n-k}$.

### Dual Cell Structures

For many manifolds there is a very nice geometric proof of Poincaré duality using the notion of dual cell structures. The germ of this idea can be traced back to the five regular Platonic solids: the tetrahedron, cube, octahedron, dodecahedron, and icosahedron. Each of these polyhedra has a dual polyhedron whose vertices are the center points of the faces of the given polyhedron. Thus the dual of the cube is the octahedron, and vice versa. Similarly the dodecahedron and icosahedron are dual to each other, and the tetrahedron is its own dual. One can regard each of these polyhedra as defining a cell structure $C$ on $S^2$ with a dual cell structure $C^*$ determined by the dual polyhedron. Each vertex of $C$ lies in a dual $2$ cell of $C^*$, each edge of $C$ crosses a dual edge of $C^*$, and each $2$ cell of $C$ contains a dual vertex of $C^*$. 

Given a pair of dual cell structures $C$ and $C^*$ on a closed surface $M$, the pairing of cells with dual cells gives identifications of cellular chain groups $C_0^* = C_2$, $C_1^* = C_1$, and $C_2^* = C_0$. If we use $\mathbb{Z}$ coefficients these identifications are not quite canonical since there is an ambiguity of sign for each cell. We can avoid this ambiguity by considering the simpler situation of $\mathbb{Z}_2$ coefficients, where the identifications $C_i = C_{2-i}^*$ are completely canonical. The key observation is that under these identifications, the cellular boundary map $\partial : C_i \to C_{i-1}$ becomes the cellular coboundary map $\delta : C_{2-i}^* \to C_{2-i+1}^*$ since $\partial$ assigns to a cell the sum of the cells which are faces of it, while $\delta$ assigns to a cell the sum of the cells of which it is a face. Thus $H_i(C; \mathbb{Z}_2) \cong H^{2-i}(C^*; \mathbb{Z}_2)$, and hence $H_i(M; \mathbb{Z}_2) \cong H^{2-i}(M; \mathbb{Z}_2)$.

To refine this argument to $\mathbb{Z}$ coefficients the problem of signs must be addressed. After analyzing the situation more closely, one sees that if $M$ is orientable, it is possible to make consistent choices of orientations of all the cells of $C$ and $C^*$ so that the boundary maps in $C$ agree with the coboundary maps in $C^*$, and therefore one gets $H_i(C; \mathbb{Z}) \cong H^{2-i}(C^*; \mathbb{Z})$, hence $H_i(M; \mathbb{Z}) \cong H^{2-i}(M; \mathbb{Z})$.

For manifolds of higher dimension the situation is entirely analogous. One would consider dual cell structures $C$ and $C^*$ on a closed $n$ manifold $M$, each $i$ cell of $C$ being dual to a unique $(n-i)$ cell of $C^*$ which it intersects in one point 'transversely'. All the manifolds one commonly meet, for example all differentiable manifolds, have dually paired cell structures with the properties needed to carry out this geometric proof. However, to construct these cell structures requires a certain amount of manifold theory. To avoid this, and to get a theorem that applies to all manifolds, we will take a completely different approach, using algebraic topology to replace the geometry of dual cell structures.

## Orientations and Homology

Let us consider the question of how one might define orientability for manifolds.

> [!definition]
> An **orientation of $\mathbb{R}^n$ at a point $x$** is a choice of generator of the infinite cyclic group $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\})$, where the absence of a coefficient group from the notation means we take coefficients in $\mathbb{Z}$.

Rotations of $S^{n-1}$ have degree $1$, being homotopic to the identity, while reflections have degree $-1$, so a rotation $\rho$ of $\mathbb{R}^n$ fixing $x$ takes a generator $\alpha$ of $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\})$ to itself, $\rho_*(\alpha) = \alpha$, while a reflection takes $\alpha$ to $-\alpha$. An orientation of $\mathbb{R}^n$ at a point $x$ determines an orientation at every other point $y$ via the canonical isomorphisms $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\}) \cong H_n(\mathbb{R}^n, \mathbb{R}^n - B) \cong H_n(\mathbb{R}^n, \mathbb{R}^n -\{y\})$ where $B$ is any ball containing both $x$ and $y$.

> [!definition]
> A **local orientation of $M$ at a point $x$** is a choice of generator $\mu_x$ of the infinite cyclic group $H_n(M, M -\{x\})$.

> [!notation]
> **Notational Convention.** We write $H_n(X, X - A)$ as $H_n(X \parallel A)$, or more generally $H_n(X \parallel A; G)$ if a coefficient group $G$ needs to be specified. By excision, $H_n(X \parallel A)$ depends only on a neighborhood of the closure of $A$ in $X$.

> [!definition]
> An **orientation** of an $n$ dimensional manifold $M$ is a function $x \mapsto \mu_x$ assigning to each $x \in M$ a local orientation $\mu_x \in H_n(M \parallel x)$, satisfying the **local consistency** condition that each $x \in M$ has a neighborhood $\mathbb{R}^n \subset M$ containing an open ball $B$ of finite radius about $x$ such that all the local orientations $\mu_y$ at points $y \in B$ are the images of one generator $\mu_B$ of $H_n(M \parallel B) \cong H_n(\mathbb{R}^n \parallel B)$ under the natural maps $H_n(M \parallel B) \to H_n(M \parallel y)$. If an orientation exists for $M$, then $M$ is called **orientable**.

Every manifold $M$ has an orientable two-sheeted covering space $\widetilde{M}$. For example, $\mathbb{RP}^2$ is covered by $S^2$, and the Klein bottle has the torus as a two-sheeted covering space. The general construction goes as follows. As a set, let
$$
\widetilde{M} = \{ \mu_x \mid x \in M \text{ and } \mu_x \text{ is a local orientation of } M \text{ at } x \}
$$
The map $\mu_x \mapsto x$ defines a two-to-one surjection $\widetilde{M} \to M$, and we wish to topologize $\widetilde{M}$ to make this a covering space projection. Given an open ball $B \subset \mathbb{R}^n \subset M$ of finite radius and a generator $\mu_B \in H_n(M \parallel B)$, let $U(\mu_B)$ be the set of all $\mu_x \in \widetilde{M}$ such that $x \in B$ and $\mu_x$ is the image of $\mu_B$ under the natural map $H_n(M \parallel B) \to H_n(M \parallel x)$. These sets $U(\mu_B)$ form a basis for a topology on $\widetilde{M}$, and the projection $\widetilde{M} \to M$ is a covering space. $\widetilde{M}$ is orientable since each point $\mu_x \in \widetilde{M}$ has a canonical local orientation.

> [!proposition]
> **Proposition 3.25.** If $M$ is connected, then $M$ is orientable iff $\widetilde{M}$ has two components. In particular, $M$ is orientable if it is simply-connected, or more generally if $\pi_1(M)$ has no subgroup of index two.

**Proof:** If $M$ is connected, $\widetilde{M}$ has either one or two components since it is a two-sheeted covering space of $M$. If it has two components, they are each mapped homeomorphically to $M$ by the covering projection, so $M$ is orientable, being homeomorphic to a component of the orientable manifold $\widetilde{M}$. Conversely, if $M$ is orientable, it has exactly two orientations since it is connected, and each of these orientations defines a component of $\widetilde{M}$. The last statement follows since connected two-sheeted covering spaces of $M$ correspond to index-two subgroups of $\pi_1(M)$. ∎

The covering space $\widetilde{M} \to M$ can be embedded in a larger covering space $M_\mathbb{Z} \to M$ where $M_\mathbb{Z}$ consists of all elements $\alpha_x \in H_n(M \parallel x)$ as $x$ ranges over $M$. As before, we topologize $M_\mathbb{Z}$ via the basis of sets $U(\alpha_B)$ consisting of $\alpha_x$'s with $x \in B$ and $\alpha_x$ the image of an element $\alpha_B \in H_n(M \parallel B)$ under the map $H_n(M \parallel B) \to H_n(M \parallel x)$. The covering space $M_\mathbb{Z} \to M$ is infinite-sheeted since for fixed $x \in M$, the $\alpha_x$'s range over the infinite cyclic group $H_n(M \parallel x)$. Restricting $\alpha_x$ to be zero, we get a copy $M_0$ of $M$ in $M_\mathbb{Z}$. The rest of $M_\mathbb{Z}$ consists of an infinite sequence of copies $M_k$ of $\widetilde{M}$, $k = 1, 2, \cdots$, where $M_k$ consists of the $\alpha_x$'s that are $k$ times either generator of $H_n(M \parallel x)$.

A continuous map $M \to M_\mathbb{Z}$ of the form $x \mapsto \alpha_x \in H_n(M \parallel x)$ is called a **section** of the covering space. An orientation of $M$ is the same thing as a section $x \mapsto \mu_x$ such that $\mu_x$ is a generator of $H_n(M \parallel x)$ for each $x$.

### $R$-Orientations

One can generalize the definition of orientation by replacing the coefficient group $\mathbb{Z}$ by any commutative ring $R$ with identity. Then an **$R$ orientation** of $M$ assigns to each $x \in M$ a generator of $H_n(M \parallel x; R) \cong R$, subject to the corresponding local consistency condition, where a 'generator' of $R$ is an element $u$ such that $Ru = R$. Since we assume $R$ has an identity element, this is equivalent to saying that $u$ is a unit, an invertible element of $R$. The definition of the covering space $M_\mathbb{Z}$ generalizes immediately to a covering space $M_R \to M$, and an $R$ orientation is a section of this covering space whose value at each $x \in M$ is a generator of $H_n(M \parallel x; R)$.

The structure of $M_R$ is easy to describe. In view of the canonical isomorphism $H_n(M \parallel x; R) \cong H_n(M \parallel x) \otimes R$, each $r \in R$ determines a subcovering space $M_r$ of $M_R$ consisting of the points $\pm \mu_x \otimes r \in H_n(M \parallel x; R)$ for $\mu_x$ a generator of $H_n(M \parallel x)$. If $r$ has order $2$ in $R$ then $r = -r$ so $M_r$ is just a copy of $M$, and otherwise $M_r$ is isomorphic to the two-sheeted cover $\widetilde{M}$. The covering space $M_R$ is the union of these $M_r$'s, which are disjoint except for the equality $M_r = M_{-r}$.

In particular, an orientable manifold is $R$ orientable for all $R$, while a nonorientable manifold is $R$ orientable iff $R$ contains a unit of order $2$, which is equivalent to having $2 = 0$ in $R$. Thus every manifold is $\mathbb{Z}_2$ orientable. In practice this means that the two most important cases are $R = \mathbb{Z}$ and $R = \mathbb{Z}_2$.

> [!theorem]
> **Theorem 3.26.** Let $M$ be a closed connected $n$ manifold. Then:
> (a) If $M$ is $R$ orientable, the map $H_n(M; R) \to H_n(M \parallel x; R) \cong R$ is an isomorphism for all $x \in M$.
> (b) If $M$ is not $R$ orientable, the map $H_n(M; R) \to H_n(M \parallel x; R) \cong R$ is injective with image $\{ r \in R \mid 2r = 0 \}$ for all $x \in M$.
> (c) $H_i(M; R) = 0$ for $i > n$.
>
> In particular, $H_n(M; \mathbb{Z})$ is $\mathbb{Z}$ or $0$ depending on whether $M$ is orientable or not, and in either case $H_n(M; \mathbb{Z}_2) = \mathbb{Z}_2$.

> [!definition]
> An element of $H_n(M; R)$ whose image in $H_n(M \parallel x; R)$ is a generator for all $x$ is called a **fundamental class** for $M$ with coefficients in $R$. By the theorem, a fundamental class exists if $M$ is closed and $R$ orientable. In view of these remarks a fundamental class could also be called an **orientation class** for $M$.

The theorem follows from a more technical statement:

> [!lemma]
> **Lemma 3.27.** Let $M$ be a manifold of dimension $n$ and let $A \subset M$ be a compact subset. Then:
> (a) If $x \mapsto \alpha_x$ is a section of the covering space $M_R \to M$, then there is a unique class $\alpha_A \in H_n(M \parallel A; R)$ whose image in $H_n(M \parallel x; R)$ is $\alpha_x$ for all $x \in A$.
> (b) $H_i(M \parallel A; R) = 0$ for $i > n$.

**Proof of 3.27:** The coefficient ring $R$ will play no special role so we shall omit it from the notation. The proof is broken up into four steps.

**(1)** If the lemma is true for compact sets $A$, $B$, and $A \cap B$, then it is true for $A \cup B$. To see this, consider the Mayer–Vietoris sequence
$$
0 \to H_n(M \parallel A \cup B) \xrightarrow{\Phi} H_n(M \parallel A) \oplus H_n(M \parallel B) \xrightarrow{\Psi} H_n(M \parallel A \cap B)
$$
Here the zero on the left comes from the assumption that $H_{n+1}(M \parallel A \cap B) = 0$. The map $\Phi$ is $\Phi(\alpha) = (\alpha, -\alpha)$ and $\Psi$ is $\Psi(\alpha, \beta) = \alpha + \beta$.

**(2)** A compact set $A \subset M$ can be written as the union of finitely many compact sets $A_1, \cdots, A_m$ each contained in an open $\mathbb{R}^n \subset M$. By induction on $m$ this gives a reduction to the case $m = 1$, so $A \subset \mathbb{R}^n \subset M$.

**(3)** When $A \subset \mathbb{R}^n \subset M$ and $A$ is a union of convex compact sets in $\mathbb{R}^n$, an inductive argument reduces to the case that $A$ itself is convex. When $A$ is convex the result is evident since the map $H_i(M \parallel A) \to H_i(M \parallel x)$ is equivalent to $H_i(\mathbb{R}^n \parallel A) \to H_i(\mathbb{R}^n \parallel x)$ by excision, and the latter map is an isomorphism for any $x \in A$.

**(4)** For an arbitrary compact set $A \subset \mathbb{R}^n \subset M$ let $\alpha \in H_i(M \parallel A)$ be represented by a relative cycle $z$ in $\mathbb{R}^n$ with $\partial z$ in $\mathbb{R}^n - A$, and let $C$ be the union of the images of the singular simplices in $\partial z$. Since $C$ is compact, it has a positive distance $\delta$ from $A$ in $\mathbb{R}^n$. We can cover $A$ by finitely many closed balls in $\mathbb{R}^n$ of radius less than $\delta$ centered at points of $A$. Let $K$ be the union of these balls, so $K$ is disjoint from $C$. The relative cycle $z$ defines an element $\alpha_K \in H_i(M \parallel K)$ mapping to $\alpha$. If $i > n$ then by (3) we have $H_i(M \parallel K) = 0$, so $\alpha_K = 0$ and thus $\alpha = 0$. For uniqueness in (a) when $i = n$, if $\alpha_x = 0$ for all $x \in A$, then $\alpha_K$ maps to zero in $H_n(M \parallel x)$ for each $x \in K$, so $\alpha_K = 0$ and hence $\alpha = 0$. The existence statement is easy by letting $\alpha_A$ be the image of $\alpha_B$ for any ball $B$ with $A \subset B \subset \mathbb{R}^n$. ∎

### Simplicial Construction of Fundamental Class

For a closed $n$ manifold having the structure of a $\Delta$ complex there is a more explicit construction for a fundamental class. Consider the case of $\mathbb{Z}$ coefficients. In simplicial homology a fundamental class must be represented by some linear combination $\sum_i k_i \sigma_i$ of the $n$ simplices $\sigma_i$ of $M$. The condition that the fundamental class maps to a generator of $H_n(M \parallel x; \mathbb{Z})$ for points $x$ in the interiors of the $\sigma_i$'s means that each coefficient $k_i$ must be $\pm 1$. The $k_i$'s must also be such that $\sum_i k_i \sigma_i$ is a cycle. This implies that if $\sigma_i$ and $\sigma_j$ share a common $(n-1)$ dimensional face, then $k_i$ determines $k_j$ and vice versa. Analyzing more closely, a choice of signs for the $k_i$'s making $\sum_i k_i \sigma_i$ a cycle is possible iff $M$ is orientable. With $\mathbb{Z}_2$ coefficients there is no issue of signs, and $\sum_i \sigma_i$ always defines a fundamental class.

> [!corollary]
> **Corollary 3.28.** If $M$ is a closed connected $n$ manifold, the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ is trivial if $M$ is orientable and $\mathbb{Z}_2$ if $M$ is nonorientable.

**Proof:** This is an application of the universal coefficient theorem for homology, using the fact that the homology groups of $M$ are finitely generated. In the orientable case, if $H_{n-1}(M; \mathbb{Z})$ contained torsion, then for some prime $p$, $H_n(M; \mathbb{Z}_p)$ would be larger than the $\mathbb{Z}_p$ coming from $H_n(M; \mathbb{Z})$. In the nonorientable case, $H_n(M; \mathbb{Z}_m)$ is either $\mathbb{Z}_2$ or $0$ depending on whether $m$ is even or odd. This forces the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ to be $\mathbb{Z}_2$. ∎

### Cellular Homology Perspective

When $M$ has a CW structure with a single $n$ cell, which is the case for a large number of manifolds, the structure of $H_n(M; G)$ and $H_{n-1}(M; G)$ can be explained very nicely. Note that there can be no cells of higher dimension since a cell of maximal dimension produces nontrivial local homology in that dimension. Consider the cellular boundary map $d : C_n(M) \to C_{n-1}(M)$ with $\mathbb{Z}$ coefficients. Since $M$ has a single $n$ cell we have $C_n(M) = \mathbb{Z}$.

If $M$ is orientable, $d$ must be zero since $H_n(M; \mathbb{Z}) = \mathbb{Z}$. Then $H_{n-1}(M; \mathbb{Z})$ must be free. On the other hand, if $M$ is nonorientable then $d$ must take a generator of $C_n(M)$ to twice a generator $\alpha$ of a $\mathbb{Z}$ summand of $C_{n-1}(M)$, in order for $H_n(M; \mathbb{Z}_p)$ to be zero for odd primes $p$ and $\mathbb{Z}_2$ for $p = 2$. The cellular chain $\alpha$ must be a cycle since $2\alpha$ is a boundary and hence a cycle. It follows that the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ must be a $\mathbb{Z}_2$ generated by $\alpha$.

> [!proposition]
> **Proposition 3.29.** If $M$ is a connected noncompact $n$ manifold, then $H_i(M; R) = 0$ for $i \ge n$.

**Proof:** Represent an element of $H_i(M; R)$ by a cycle $z$. This has compact image in $M$, so there is an open set $U \subset M$ containing the image of $z$ and having compact closure $\overline{U} \subset M$. Let $V = M - \overline{U}$. Part of the long exact sequence of the triple $(M, U \cup V, V)$ fits into a commutative diagram. When $i > n$, the two groups on either side of $H_i(U \cup V, V; R)$ are zero by Lemma 3.27 since $U \cup V$ and $V$ are the complements of compact sets in $M$. Hence $H_i(U; R) = 0$, so $z$ is a boundary in $U$ and therefore in $M$, and we conclude $H_i(M; R) = 0$.

When $i = n$, the class $[z] \in H_n(M; R)$ defines a section $x \mapsto [z]_x$ of $M_R$. Since $M$ is connected, this section is determined by its value at a single point, so $[z]_x$ will be zero for all $x$ if it is zero for some $x$, which it must be since $z$ has compact image and $M$ is noncompact. By Lemma 3.27, $z$ then represents zero in $H_n(M, V; R)$, hence also in $H_n(U; R)$. So $[z] = 0$ in $H_n(M; R)$. ∎

## The Duality Theorem

The form of Poincaré duality we will prove asserts that for an $R$ orientable closed $n$ manifold, a certain naturally defined map $H^k(M; R) \to H_{n-k}(M; R)$ is an isomorphism. The definition of this map will be in terms of a more general construction called **cap product**, which has close connections with cup product.

> [!definition]
> **Cap Product.** For an arbitrary space $X$ and coefficient ring $R$, define an $R$ bilinear cap product
> $$
> \frown: C_k(X; R) \times C^\ell(X; R) \to C_{k-\ell}(X; R)
> $$
> for $k \ge \ell$ by setting
> $$
> \sigma \frown \phi = \phi(\sigma|_{[v_0, \cdots, v_\ell]})\, \sigma|_{[v_\ell, \cdots, v_k]}
> $$
> for $\sigma : \Delta^k \to X$ and $\phi \in C^\ell(X; R)$.

This induces a cap product in homology and cohomology using the formula
$$
\partial(\sigma \frown \phi) = (-1)^\ell(\partial\sigma \frown \phi - \sigma \frown \delta\phi)
$$
which is checked by a direct calculation. From this relation it follows that:
- The cap product of a cycle and a cocycle is a cycle.
- The cap product of a cycle and a coboundary is a boundary.
- The cap product of a boundary and a cocycle is a boundary.

Thus there is an induced cap product
$$
H_k(X; R) \times H^\ell(X; R) \xrightarrow{\frown} H_{k-\ell}(X; R)
$$
which is $R$ linear in each variable.

Using the same formulas, one checks that cap product has the relative forms:
- $H_k(X, A; R) \times H^\ell(X; R) \to H_{k-\ell}(X, A; R)$
- $H_k(X, A; R) \times H^\ell(X, A; R) \to H_{k-\ell}(X; R)$
- $H_k(X, A \cup B; R) \times H^\ell(X, A; R) \to H_{k-\ell}(X, B; R)$ (when $A$ and $B$ are open)

Cap product satisfies the naturality formula
$$
f_*(\alpha) \frown \phi = f_*(\alpha \frown f^*(\phi))
$$

> [!theorem]
> **Theorem 3.30 (Poincaré Duality).** If $M$ is a closed $R$ orientable $n$ manifold with fundamental class $[M] \in H_n(M; R)$, then the map
> $$
> D : H^k(M; R) \to H_{n-k}(M; R)
> $$
> defined by $D(\alpha) = [M] \frown \alpha$ is an isomorphism for all $k$.

### Example 3.31: Surfaces

Let $M$ be the closed orientable surface of genus $g$, obtained from a $4g$-gon by identifying pairs of edges according to the word $a_1b_1a_1^{-1}b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}$. A $\Delta$ complex structure on $M$ is obtained by coning off the $4g$-gon to its center.

A fundamental class $[M]$ generating $H_2(M)$ is represented by the $2$-cycle formed by the sum of all $4g$ $2$-simplices with appropriate signs. The edges $a_i$ and $b_i$ form a basis for $H_1(M)$. Under the isomorphism $H^1(M) \cong \operatorname{Hom}(H_1(M), \mathbb{Z})$, the cohomology class $\alpha_i$ corresponding to $a_i$ assigns the value $1$ to $a_i$ and $0$ to the other basis elements. This class $\alpha_i$ is represented by the cocycle $\phi_i$ assigning the value $1$ to the $1$-simplices meeting the arc labeled $\alpha_i$ and $0$ to the other $1$-simplices. Similarly we have a class $\beta_i$ corresponding to $b_i$.

Applying the definition of cap product, we have $[M] \frown \phi_i = b_i$ and $[M] \frown \psi_i = -a_i$. Thus $b_i$ is the Poincaré dual of $\alpha_i$ and $-a_i$ is the Poincaré dual of $\beta_i$. Geometrically, Poincaré duality is reflected in the fact that the loops $\alpha_i$ and $b_i$ are homotopic, as are the loops $\beta_i$ and $a_i$.

For the closed nonorientable surface $N$ of genus $g$ (using $\mathbb{Z}_2$ coefficients), viewed as obtained from a $2g$-gon by identifying consecutive pairs of edges according to the word $a_1^2 \cdots a_g^2$, we have classes $\alpha_i \in H^1(N; \mathbb{Z}_2)$ represented by cocycles $\phi_i$ assigning the value $1$ to the edges meeting the arc $\alpha_i$. Then $[N] \frown \phi_i = a_i$, so $a_i$ is its own Poincaré dual.

## Cohomology with Compact Supports

The proof of Poincaré duality requires a version for open subsets of $M$, which are noncompact and can satisfy duality only when a different kind of cohomology called **cohomology with compact supports** is used.

> [!definition]
> Let $C_c^i(X; G)$ be the subgroup of $C^i(X; G)$ consisting of cochains $\phi : C_i(X) \to G$ for which there exists a compact set $K = K_\phi \subset X$ such that $\phi$ is zero on all chains in $X - K$. Then $\delta\phi$ is also zero on chains in $X - K$, so the $C_c^i(X; G)$'s form a subcomplex of the singular cochain complex. The cohomology groups $H_c^i(X; G)$ of this subcomplex are the **cohomology groups with compact supports**.

### Example 3.32: $\mathbb{R}$

Compute $H_c^*(\mathbb{R}; G)$. For a simplicial $0$-cochain to be a cocycle it must take the same value on all vertices, but then if the cochain lies in $\Delta_c^0(\mathbb{R})$ it must be identically zero. Thus $H_c^0(\mathbb{R}; G) = 0$. However, $H_c^1(\mathbb{R}; G)$ is nonzero. Consider the map $\Sigma : \Delta_c^1(\mathbb{R}; G) \to G$ sending each cochain to the sum of its values on all the $1$-simplices. $\Sigma$ vanishes on coboundaries, so it induces a map $H_c^1(\mathbb{R}; G) \to G$. This is surjective and injective, so $H_c^1(\mathbb{R}; G) \cong G$.

### Direct Limit Description

> [!definition]
> A **directed set** is a partially ordered index set $I$ such that for each pair $\alpha, \beta \in I$ there exists $\gamma \in I$ with $\alpha \le \gamma$ and $\beta \le \gamma$. A **directed system** of groups consists of groups $G_\alpha$ for $\alpha \in I$ and homomorphisms $f_{\alpha\beta} : G_\alpha \to G_\beta$ for $\alpha \le \beta$, with $f_{\alpha\alpha} = \mathbb{1}$ and $f_{\alpha\gamma} = f_{\beta\gamma} \circ f_{\alpha\beta}$ for $\alpha \le \beta \le \gamma$.

The **direct limit** $\varinjlim G_\alpha$ can be defined as the quotient of $\bigoplus_\alpha G_\alpha$ by the subgroup generated by $a - f_{\alpha\beta}(a)$ for $a \in G_\alpha$, or equivalently as the set of equivalence classes of $\bigsqcup_\alpha G_\alpha$ under $a \sim b$ if $f_{\alpha\gamma}(a) = f_{\beta\gamma}(b)$ for some $\gamma$.

> [!proposition]
> **Proposition 3.33.** If a space $X$ is the union of a directed set of subspaces $X_\alpha$ with the property that each compact set in $X$ is contained in some $X_\alpha$, then the natural map $\varinjlim H_i(X_\alpha; G) \to H_i(X; G)$ is an isomorphism for all $i$ and $G$.

Cohomology with compact supports can be expressed as a direct limit:
$$
H_c^i(X; G) = \varinjlim_{K \subset X \text{ compact}} H^i(X, X - K; G)
$$

### Example 3.34: $H_c^*(\mathbb{R}^n; G)$
Let $K$ range over balls $B_k$ of integer radius $k$ centered at the origin. Since $H^i(\mathbb{R}^n, \mathbb{R}^n - B_k; G)$ is nonzero only for $i = n$, when it is $G$, and the maps $H^n(\mathbb{R}^n, \mathbb{R}^n - B_k; G) \to H^n(\mathbb{R}^n, \mathbb{R}^n - B_{k+1}; G)$ are isomorphisms, we deduce that $H_c^i(\mathbb{R}^n; G) = 0$ for $i \neq n$ and $H_c^n(\mathbb{R}^n; G) \cong G$.

This example shows cohomology with compact supports is **not** a homotopy invariant. The maps which do induce maps on $H_c^*$ are the **proper maps** (those for which the inverse image of each compact set is compact).

## Duality for Noncompact Manifolds

For $M$ an $R$ orientable $n$ manifold (possibly noncompact), we define a duality map $D_M : H_c^k(M; R) \to H_{n-k}(M; R)$ by a limiting process. For compact sets $K \subset L \subset M$, by Lemma 3.27 there are unique elements $\mu_K \in H_n(M \parallel K; R)$ and $\mu_L \in H_n(M \parallel L; R)$ restricting to a given orientation. The naturality of cap product implies $\mu_K \frown x = \mu_L \frown i_*(x)$ for all $x \in H^k(M \parallel K; R)$. Letting $K$ vary over compact sets, the homomorphisms $H^k(M \parallel K; R) \to H_{n-k}(M; R)$, $x \mapsto \mu_K \frown x$, induce in the limit a duality homomorphism $D_M : H_c^k(M; R) \to H_{n-k}(M; R)$.

> [!theorem]
> **Theorem 3.35.** The duality map $D_M : H_c^k(M; R) \to H_{n-k}(M; R)$ is an isomorphism for all $k$ whenever $M$ is an $R$ oriented $n$ manifold.

> [!lemma]
> **Lemma 3.36.** If $M$ is the union of two open sets $U$ and $V$, then there is a diagram of Mayer–Vietoris sequences, commutative up to sign:
> $$
> \begin{array}{ccccccccc}
> \cdots \to & H_c^k(U \cap V) & \to & H_c^k(U) \oplus H_c^k(V) & \to & H_c^k(U \cup V) & \to & H_c^{k+1}(U \cap V) & \to \cdots \\
> & \downarrow & & \downarrow & & \downarrow & & \downarrow & \\
> \cdots \to & H_{n-k}(U \cap V) & \to & H_{n-k}(U) \oplus H_{n-k}(V) & \to & H_{n-k}(U \cup V) & \to & H_{n-k-1}(U \cap V) & \to \cdots
> \end{array}
> $$
> where the vertical maps are the duality maps.

**Proof outline:** Compact sets $K \subset U$ and $L \subset V$ give rise to a Mayer–Vietoris sequence, and passing to the limit over compact sets yields the stated diagram. The first row is exact since a direct limit of exact sequences is exact. The commutativity of the square involving boundary/coboundary maps is verified by a detailed chain-level analysis using barycentric subdivision. ∎

### Proof of Poincaré Duality

There are two inductive steps:

**(A)** If $M$ is the union of open sets $U$ and $V$ and if $D_U$, $D_V$, and $D_{U \cap V}$ are isomorphisms, then so is $D_M$. Via the five-lemma, this is immediate from Lemma 3.36.

**(B)** If $M$ is the union of a sequence of open sets $U_1 \subset U_2 \subset \cdots$ and each $D_{U_i}$ is an isomorphism, then so is $D_M$. This follows since $\varinjlim H_c^k(U_i) \cong H_c^k(M)$ and $H_{n-k}(M) \cong \varinjlim H_{n-k}(U_i)$, and $D_M$ is the limit of the isomorphisms $D_{U_i}$.

The theorem is then proved in three easy steps:

**(1)** The case $M = \mathbb{R}^n$: Regard $\mathbb{R}^n$ as the interior of $\Delta^n$. The map $D_M$ can be identified with the map $H^k(\Delta^n, \partial \Delta^n) \to H_{n-k}(\Delta^n)$ given by cap product with a generator $[\Delta^n] \in H_n(\Delta^n, \partial \Delta^n)$. The only nontrivial value of $k$ is $k = n$, when the cap product map is an isomorphism since a generator of $H^n(\Delta^n, \partial \Delta^n) \cong \operatorname{Hom}(H_n(\Delta^n, \partial \Delta^n), R)$ is represented by a cocycle $\phi$ taking the value $1$ on $\Delta^n$, and by the definition of cap product, $\Delta^n \frown \phi$ is the last vertex of $\Delta^n$, representing a generator of $H_0(\Delta^n)$.

**(2)** $D_M$ is an isomorphism for $M$ an arbitrary open set in $\mathbb{R}^n$: Write $M$ as a countable union of nonempty bounded convex open sets $U_i$ (e.g., open balls). Let $V_i = \bigcup_{j < i} U_j$. Both $V_i$ and $U_i \cap V_i$ are unions of $i-1$ bounded convex open sets, so by induction $D_{V_i}$ and $D_{U_i \cap V_i}$ are isomorphisms. $D_{U_i}$ is an isomorphism by (1). Hence $D_{U_i \cup V_i}$ is an isomorphism by (A). Since $M$ is the increasing union of the $V_i$'s, $D_M$ is an isomorphism by (B).

**(3)** If $M$ is a finite or countably infinite union of open sets $U_i$ homeomorphic to $\mathbb{R}^n$, the theorem follows by the argument in (2).

For a completely general noncompact manifold $M$, a Zorn's Lemma argument is used: Consider the collection of open sets $U \subset M$ for which $D_U$ are isomorphisms. The union of every totally ordered subcollection is again in the collection by (B). Zorn's Lemma gives a maximal open set $U$. If $U \neq M$, choose $x \in M - U$ and an open neighborhood $V$ of $x$ homeomorphic to $\mathbb{R}^n$. The theorem holds for $V$ and $U \cap V$ by (1) and (2), and for $U$ by assumption, so by (A) it holds for $U \cup V$, contradicting maximality. ∎

> [!corollary]
> **Corollary 3.37.** A closed manifold of odd dimension has Euler characteristic zero.

**Proof:** Let $M$ be a closed $n$ manifold. If $M$ is orientable, $\operatorname{rank} H_i(M; \mathbb{Z}) = \operatorname{rank} H_{n-i}(M; \mathbb{Z})$ by Poincaré duality and the universal coefficient theorem. Thus if $n$ is odd, all terms of $\sum_i (-1)^i \operatorname{rank} H_i(M; \mathbb{Z})$ cancel in pairs. If $M$ is not orientable, apply the same argument using $\mathbb{Z}_2$ coefficients to conclude $\sum_i (-1)^i \dim H_i(M; \mathbb{Z}_2) = 0$, and check this equals $\sum_i (-1)^i \operatorname{rank} H_i(M; \mathbb{Z})$ using the universal coefficient theorem. ∎

## Connection with Cup Product

Cup and cap product are related by the formula
$$
\psi(\alpha \frown \phi) = (\phi \smile \psi)(\alpha)
$$
for $\alpha \in C_{k+\ell}(X; R)$, $\phi \in C^k(X; R)$, and $\psi \in C^\ell(X; R)$. This holds since for a singular $(k+\ell)$ simplex $\sigma : \Delta^{k+\ell} \to X$ we have
$$
\psi(\sigma \frown \phi) = \psi\big(\phi(\sigma|_{[v_0,\cdots,v_k]}) \, \sigma|_{[v_k,\cdots,v_{k+\ell}]}\big) = \phi(\sigma|_{[v_0,\cdots,v_k]}) \, \psi(\sigma|_{[v_k,\cdots,v_{k+\ell}]}) = (\phi \smile \psi)(\sigma)
$$

The formula says that the map $\phi \smile : C^\ell(X; R) \to C^{k+\ell}(X; R)$ is equal to the map $\operatorname{Hom}_R(C_\ell(X; R), R) \to \operatorname{Hom}_R(C_{k+\ell}(X; R), R)$ dual to $\frown \phi$. When the maps $h$ are isomorphisms (e.g., when $R$ is a field, or $R = \mathbb{Z}$ with free homology), then $\phi \smile$ is the dual of $\frown \phi$.

### Cup Product Pairing

For a closed $R$ orientable $n$ manifold $M$, consider the cup product pairing
$$
H^k(M; R) \times H^{n-k}(M; R) \to R, \quad (\phi, \psi) \mapsto (\phi \smile \psi)[M]
$$

> [!definition]
> A bilinear pairing $A \times B \to R$ is **nonsingular** if the maps $A \to \operatorname{Hom}_R(B, R)$ and $B \to \operatorname{Hom}_R(A, R)$ are both isomorphisms.

> [!proposition]
> **Proposition 3.38.** The cup product pairing is nonsingular for closed $R$ orientable manifolds when $R$ is a field, or when $R = \mathbb{Z}$ and torsion in $H^*(M; \mathbb{Z})$ is factored out.

**Proof:** Consider the composition
$$
H^{n-k}(M; R) \xrightarrow{h} \operatorname{Hom}_R(H_{n-k}(M; R), R) \xrightarrow{D^*} \operatorname{Hom}_R(H^k(M; R), R)
$$
where $h$ is the map from the universal coefficient theorem, and $D^*$ is the Hom dual of the Poincaré duality map $D : H^k \to H_{n-k}$. The composition $D^*h$ sends $\psi \in H^{n-k}$ to $\phi \mapsto \psi([M] \frown \phi) = (\phi \smile \psi)[M]$. For field coefficients or $\mathbb{Z}$ with torsion factored out, $h$ is an isomorphism. ∎

> [!corollary]
> **Corollary 3.39.** If $M$ is a closed connected orientable $n$ manifold, then an element $\alpha \in H^k(M; \mathbb{Z})$ generates an infinite cyclic summand of $H^k(M; \mathbb{Z})$ iff there exists $\beta \in H^{n-k}(M; \mathbb{Z})$ such that $\alpha \smile \beta$ is a generator of $H^n(M; \mathbb{Z}) \cong \mathbb{Z}$.

### Example 3.40: Projective Spaces

The cup product structure of $H^*(\mathbb{CP}^n; \mathbb{Z})$ as a truncated polynomial ring $\mathbb{Z}[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 2$ can be deduced as follows. The inclusion $\mathbb{CP}^{n-1} \hookrightarrow \mathbb{CP}^n$ induces an isomorphism on $H^i$ for $i \le 2n-2$, so by induction, $H^{2i}(\mathbb{CP}^n; \mathbb{Z})$ is generated by $\alpha^i$ for $i < n$. By Corollary 3.39, there is an integer $m$ such that $\alpha \smile m\alpha^{n-1} = m\alpha^n$ generates $H^{2n}(\mathbb{CP}^n; \mathbb{Z})$. This can only happen if $m = \pm 1$, therefore $H^*(\mathbb{CP}^n; \mathbb{Z}) \cong \mathbb{Z}[\alpha]/(\alpha^{n+1})$.

The same argument shows $H^*(\mathbb{HP}^n; \mathbb{Z}) \cong \mathbb{Z}[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 4$. For $\mathbb{RP}^n$, use $\mathbb{Z}_2$ coefficients to deduce $H^*(\mathbb{RP}^n; \mathbb{Z}_2) \cong \mathbb{Z}_2[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 1$.

Could there be a closed manifold whose cohomology is additively isomorphic to that of $\mathbb{CP}^n$ but with a different cup product structure? For $n = 2$ the answer is no since duality implies the square of a generator of $H^2$ must be a generator of $H^4$. For $n = 3$, duality says the product of generators of $H^2$ and $H^4$ must be a generator of $H^6$, but nothing is said about the square of a generator of $H^2$. Indeed, for $S^2 \times S^4$, which has the same additive structure as $\mathbb{CP}^3$, the square of the generator of $H^2(S^2 \times S^4; \mathbb{Z})$ is zero.

### Example 3.41: Lens Spaces

For a lens space $L^{2n+1}$ of dimension $2n+1$ with fundamental group $\mathbb{Z}_m$, we have $H^i(L^{2n+1}; \mathbb{Z})$ is $\mathbb{Z}$ for $i = 0$ and $2n+1$, $\mathbb{Z}_m$ for odd $i < 2n+1$, and $0$ otherwise. By the universal coefficient theorem, $H^i(L^{2n+1}; \mathbb{Z}_m) \cong \mathbb{Z}_m$ for each $i \le 2n+1$.

Let $\alpha \in H^1(L^{2n+1}; \mathbb{Z}_m)$ and $\beta \in H^2(L^{2n+1}; \mathbb{Z}_m)$ be generators. The statement is:
$$
H^j(L^{2n+1}; \mathbb{Z}_m) \text{ is generated by } \begin{cases}
\beta^i & \text{for } j = 2i \\
\alpha\beta^i & \text{for } j = 2i+1
\end{cases}
$$

The cup product structure for $L^\infty$ follows from the finite-dimensional case: $H^*(L^\infty; \mathbb{Z}) \cong \mathbb{Z}[\alpha]/(m\alpha)$ with $|\alpha| = 2$.

### Middle-Dimensional Cup Product

For a closed orientable manifold $M$ of dimension $2n$, the middle-dimensional cup product pairing
$$
H^n_{\text{free}}(M) \times H^n_{\text{free}}(M) \to \mathbb{Z}
$$
is a nonsingular bilinear form on $H^n_{\text{free}}(M)$. This form is symmetric or skew-symmetric according to whether $n$ is even or odd. In the skew-symmetric case, the rank of $H^n(M^{2n})$ must be even when $n$ is odd.

The symmetric case is much more interesting algebraically. There are only finitely many isomorphism classes of symmetric nonsingular bilinear forms over $\mathbb{Z}$ of a fixed rank. One can ask whether all these forms actually occur as cup product pairings in closed manifolds $M^{4k}$. The answer is yes for $4k = 4, 8, 16$ but seems to be unknown in other dimensions.

## Other Forms of Duality

> [!definition]
> An **$n$ manifold with boundary** is a Hausdorff space $M$ in which each point has an open neighborhood homeomorphic either to $\mathbb{R}^n$ or to the half-space $\mathbb{R}^n_+ = \{ (x_1, \cdots, x_n) \in \mathbb{R}^n \mid x_n \ge 0 \}$. Points corresponding to $x_n = 0$ under such homeomorphisms satisfy $H_n(M, M - \{x\}; \mathbb{Z}) = 0$ and form the **boundary** $\partial M$. The boundary $\partial M$ is an $(n-1)$ dimensional manifold with empty boundary.

A **collar neighborhood** of $\partial M$ in $M$ is an open neighborhood homeomorphic to $\partial M \times [0, 1)$ by a homeomorphism taking $\partial M$ to $\partial M \times \{0\}$.

> [!proposition]
> **Proposition 3.42.** If $M$ is a compact manifold with boundary, then $\partial M$ has a collar neighborhood.

**Proof sketch:** Let $M'$ be $M$ with an external collar attached. Construct a homeomorphism $h : M \to M'$ using a partition of unity argument with functions $\phi_i : \partial M \to [0,1]$ supported in coordinate neighborhoods homeomorphic to $\mathbb{R}^n_+$. ∎

A compact manifold $M$ with boundary is $R$ orientable if $M - \partial M$ is $R$ orientable. When $M$ is $R$ orientable, Lemma 3.27 gives a **relative fundamental class** $[M]$ in $H_n(M, \partial M; R)$.

> [!theorem]
> **Theorem 3.43 (Lefschetz Duality).** Suppose $M$ is a compact $R$ orientable $n$ manifold whose boundary $\partial M$ is decomposed as the union of two compact $(n-1)$ dimensional manifolds $A$ and $B$ with a common boundary $\partial A = \partial B = A \cap B$. Then cap product with a fundamental class $[M] \in H_n(M, \partial M; R)$ gives isomorphisms
> $$
> D_M : H^k(M, A; R) \to H_{n-k}(M, B; R)
> $$
> for all $k$. (The cases $A = \emptyset$ or $B = \emptyset$ are included.)

> [!theorem]
> **Theorem 3.44.** If $K$ is a compact, locally contractible subspace of a closed orientable $n$ manifold $M$, then
> $$
> H_i(M, M - K; \mathbb{Z}) \cong H^{n-i}(K; \mathbb{Z})
> $$
> for all $i$.

**Proof outline:** Let $U$ be an open neighborhood of $K$ in $M$. Consider the diagram of long exact sequences of pairs:
$$
\begin{array}{ccccccccc}
\cdots \to & H_i(M-K) & \to & H_i(M) & \to & H_i(M, M-K) & \to & H_{i-1}(M-K) & \to \cdots \\
& \downarrow & & \downarrow & & \downarrow & & \downarrow & \\
\cdots \to & H_c^{n-i}(M-K) & \to & H^{n-i}(M) & \to & \varinjlim H^{n-i}(U) & \to & H_c^{n-i+1}(M-K) & \to \cdots
\end{array}
$$
The second vertical map is the Poincaré duality isomorphism. Passing to the direct limit over decreasing $U \supset K$, the first vertical arrow becomes the Poincaré duality isomorphism $H_i(M-K) \cong H_c^{n-i}(M-K)$. The five-lemma gives $H_i(M, M-K) \cong \varinjlim H^{n-i}(U)$, and the natural map from this limit to $H^{n-i}(K)$ is an isomorphism when $K$ is locally contractible. ∎

> [!corollary]
> **Corollary 3.45 (Alexander Duality).** If $K$ is a compact, locally contractible, nonempty, proper subspace of $S^n$, then
> $$
> \widetilde{H}_i(S^n - K; \mathbb{Z}) \cong \widetilde{H}^{n-i-1}(K; \mathbb{Z})
> $$
> for all $i$.

**Proof:** The long exact sequence of reduced homology for the pair $(S^n, S^n - K)$ gives isomorphisms $\widetilde{H}_i(S^n - K; \mathbb{Z}) \cong H_{i+1}(S^n, S^n - K; \mathbb{Z})$ for most values of $i$. The exception is $i = n-1$ where we have a short exact sequence that splits, so $\widetilde{H}_{n-1}(S^n - K; \mathbb{Z})$ is $H_n(S^n, S^n - K; \mathbb{Z})$ with a $\mathbb{Z}$ summand canceled, just as $\widetilde{H}^0(K; \mathbb{Z})$ is $H^0(K; \mathbb{Z})$ with a $\mathbb{Z}$ summand canceled. ∎

The special case when $K$ is a sphere or disk was treated by more elementary means in Proposition 2B.1. The homology of $S^n - K$ does not depend on the way $K$ is embedded in $S^n$, provided $K$ is not too bad a space itself.

> [!corollary]
> **Corollary 3.46.** If $X \subset \mathbb{R}^n$ is compact and locally contractible then $H_i(X; \mathbb{Z})$ is $0$ for $i \ge n$ and torsionfree for $i = n-1$ and $n-2$.

For example, a closed nonorientable $n$ manifold $M$ cannot be embedded as a subspace of $\mathbb{R}^{n+1}$ since $H_{n-1}(M; \mathbb{Z})$ contains a $\mathbb{Z}_2$ subgroup (Corollary 3.28). Thus the Klein bottle cannot be embedded in $\mathbb{R}^3$.

**Proof:** Viewing $X$ as a subspace of the one-point compactification $S^n$, Alexander duality gives isomorphisms $\widetilde{H}_i(X; \mathbb{Z}) \cong \widetilde{H}^{n-i-1}(S^n - X; \mathbb{Z})$. The latter group is zero for $i \ge n$ and torsionfree for $i = n-1$. ∎

### Čech Cohomology

There is a way of extending Alexander duality and Theorem 3.44 to compact sets $K$ that are not locally contractible, by replacing singular cohomology of $K$ with **Čech cohomology**.

> [!definition]
> To each open cover $\mathcal{U} = \{U_\alpha\}$ of a space $X$ we associate a simplicial complex $N(\mathcal{U})$ called the **nerve** of $\mathcal{U}$. This has a vertex $v_\alpha$ for each $U_\alpha$, and a set of $k+1$ vertices spans a $k$ simplex whenever the $k+1$ corresponding $U_\alpha$'s have nonempty intersection. When another cover $\mathcal{V}$ is a refinement of $\mathcal{U}$, these inclusions induce a simplicial map $N(\mathcal{V}) \to N(\mathcal{U})$ well-defined up to homotopy. The **Čech cohomology group** $\check{H}^i(X; G)$ is defined as the direct limit $\varinjlim H^i(N(\mathcal{U}); G)$ with respect to finer and finer open covers $\mathcal{U}$.

Čech cohomology satisfies the same axioms as singular cohomology. For spaces homotopy equivalent to CW complexes, it coincides with singular cohomology, but for spaces with local complexities it often behaves more reasonably.

## Exercises

> [!exercise] 1
> Show that there exist nonorientable $1$ dimensional manifolds if the Hausdorff condition is dropped from the definition of a manifold.

> [!exercise] 2
> Show that deleting a point from a manifold of dimension greater than $1$ does not affect orientability of the manifold.

> [!exercise] 3
> Show that every covering space of an orientable manifold is an orientable manifold.

> [!exercise] 4
> Given a covering space action of a group $G$ on an orientable manifold $M$ by orientation-preserving homeomorphisms, show that $M/G$ is also orientable.

> [!exercise] 5
> Show that $M \times N$ is orientable iff $M$ and $N$ are both orientable.

> [!exercise] 6
> Given two disjoint connected $n$ manifolds $M_1$ and $M_2$, a connected $n$ manifold $M_1 \sharp M_2$, their **connected sum**, can be constructed by deleting the interiors of closed $n$ balls $B_1 \subset M_1$ and $B_2 \subset M_2$ and identifying the resulting boundary spheres $\partial B_1$ and $\partial B_2$ via some homeomorphism between them.
> 
> (a) Show that if $M_1$ and $M_2$ are closed then there are isomorphisms $H_i(M_1 \sharp M_2; \mathbb{Z}) \cong H_i(M_1; \mathbb{Z}) \oplus H_i(M_2; \mathbb{Z})$ for $0 < i < n$, with one exception: If both $M_1$ and $M_2$ are nonorientable, then $H_{n-1}(M_1 \sharp M_2; \mathbb{Z})$ is obtained from $H_{n-1}(M_1; \mathbb{Z}) \oplus H_{n-1}(M_2; \mathbb{Z})$ by replacing one of the two $\mathbb{Z}_2$ summands by a $\mathbb{Z}$ summand.
> 
> (b) Show that $\chi(M_1 \sharp M_2) = \chi(M_1) + \chi(M_2) - \chi(S^n)$ if $M_1$ and $M_2$ are closed.

> [!exercise] 7
> For a map $f : M \to N$ between connected closed orientable $n$ manifolds with fundamental classes $[M]$ and $[N]$, the **degree** of $f$ is defined to be the integer $d$ such that $f_*([M]) = d[N]$, so the sign of the degree depends on the choice of fundamental classes. Show that for any connected closed orientable $n$ manifold $M$ there is a degree $1$ map $M \to S^n$.

> [!exercise] 8
> For a map $f : M \to N$ between connected closed orientable $n$ manifolds, suppose there is a ball $B \subset N$ such that $f^{-1}(B)$ is the disjoint union of balls $B_i$ each mapped homeomorphically by $f$ onto $B$. Show the degree of $f$ is $\sum_i \varepsilon_i$ where $\varepsilon_i$ is $+1$ or $-1$ according to whether $f : B_i \to B$ preserves or reverses local orientations induced from given fundamental classes $[M]$ and $[N]$.

> [!exercise] 9
> Show that a $p$ sheeted covering space projection $M \to N$ has degree $\pm p$, when $M$ and $N$ are connected closed orientable manifolds.

> [!exercise] 10
> Show that for a degree $1$ map $f : M \to N$ of connected closed orientable manifolds, the induced map $f_* : \pi_1 M \to \pi_1 N$ is surjective, hence also $f_* : H_1(M) \to H_1(N)$. [Lift $f$ to the covering space $\widetilde{N} \to N$ corresponding to the subgroup $\operatorname{Im} f_* \subset \pi_1 N$, then consider the two cases that this covering is finite-sheeted or infinite-sheeted.]

> [!exercise] 11
> If $M_g$ denotes the closed orientable surface of genus $g$, show that degree $1$ maps $M_g \to M_h$ exist iff $g \ge h$.

> [!exercise] 12
> As an algebraic application of the preceding problem, show that in a free group $F$ with basis $x_1, \cdots, x_{2k}$, the product of commutators $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}]$ is not equal to a product of fewer than $k$ commutators $[v_i, w_i]$ of elements $v_i, w_i \in F$. [Recall that the $2$ cell of $M_k$ is attached by the product $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}]$. From a relation $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}] = [v_1, w_1] \cdots [v_j, w_j]$ in $F$, construct a degree $1$ map $M_j \to M_k$.]

> [!exercise] 13
> Let $M'_h \subset M_g$ be a compact subsurface of genus $h$ with one boundary circle, so $M'_h$ is homeomorphic to $M_h$ with an open disk removed. Show there is no retraction $M_g \to M'_h$ if $h > g/2$. [Apply the previous problem, using the fact that $M_g - M'_h$ has genus $g-h$.]

> [!exercise] 14
> Let $X$ be the shrinking wedge of circles in Example 1.25, the subspace of $\mathbb{R}^2$ consisting of the circles of radius $1/n$ and center $(1/n, 0)$ for $n = 1, 2, \cdots$.
> 
> (a) If $f_n : I \to X$ is the loop based at the origin winding once around the $n$th circle, show that the infinite product of commutators $[f_1, f_2][f_3, f_4] \cdots$ defines a loop in $X$ that is nontrivial in $H_1(X)$. [Use Exercise 12.]
> 
> (b) If we view $X$ as the wedge sum of the subspaces $A$ and $B$ consisting of the odd-numbered and even-numbered circles, respectively, use the same loop to show that the map $H_1(X) \to H_1(A) \oplus H_1(B)$ induced by the retractions of $X$ onto $A$ and $B$ is not an isomorphism.

> [!exercise] 15
> For an $n$ manifold $M$ and a compact subspace $A \subset M$, show that $H_n(M, M - A; R)$ is isomorphic to the group $\Gamma_R(A)$ of sections of the covering space $M_R \to M$ over $A$, that is, maps $A \to M_R$ whose composition with $M_R \to M$ is the identity.

> [!exercise] 16
> Show that $(\alpha \frown \phi) \frown \psi = \alpha \frown (\phi \smile \psi)$ for all $\alpha \in C_k(X; R)$, $\phi \in C^\ell(X; R)$, and $\psi \in C^m(X; R)$. Deduce that cap product makes $H_*(X; R)$ a right $H^*(X; R)$ module.

> [!exercise] 17
> Show that a direct limit of exact sequences is exact. More generally, show that homology commutes with direct limits: If $\{C_\alpha, f_{\alpha\beta}\}$ is a directed system of chain complexes, with the maps $f_{\alpha\beta} : C_\alpha \to C_\beta$ chain maps, then $H_n(\varinjlim C_\alpha) = \varinjlim H_n(C_\alpha)$.

> [!exercise] 18
> Show that a direct limit $\varinjlim G_\alpha$ of torsionfree abelian groups $G_\alpha$ is torsionfree. More generally, show that any finitely generated subgroup of $\varinjlim G_\alpha$ is realized as a subgroup of some $G_\alpha$.

> [!exercise] 19
> Show that a direct limit of countable abelian groups over a countable indexing set is countable. Apply this to show that if $X$ is an open set in $\mathbb{R}^n$ then $H_i(X; \mathbb{Z})$ is countable for all $i$.

> [!exercise] 20
> Show that $H_c^0(X; G) = 0$ if $X$ is path-connected and noncompact.

> [!exercise] 21
> For a space $X$, let $X^+$ be the one-point compactification. If the added point, denoted $\infty$, has a neighborhood in $X^+$ that is a cone with $\infty$ the cone point, show that the evident map $H_c^n(X; G) \to H^n(X^+, \infty; G)$ is an isomorphism for all $n$.

> [!exercise] 22
> Show that $H_c^n(X \times \mathbb{R}; G) \cong H_c^{n-1}(X; G)$ for all $n$.

> [!exercise] 23
> Show that for a locally compact $\Delta$ complex $X$ the simplicial and singular cohomology groups $H_c^i(X; G)$ are isomorphic. This can be done by showing that $\Delta_c^i(X; G)$ is the union of its subgroups $\Delta^i(X, A; G)$ as $A$ ranges over subcomplexes of $X$ that contain all but finitely many simplices, and likewise $C_c^i(X; G)$ is the union of its subgroups $C^i(X, A; G)$ for the same family of subcomplexes $A$.

> [!exercise] 24
> Let $M$ be a closed connected $3$ manifold, and write $H_1(M; \mathbb{Z})$ as $\mathbb{Z}^r \oplus F$, the direct sum of a free abelian group of rank $r$ and a finite group $F$. Show that $H_2(M; \mathbb{Z})$ is $\mathbb{Z}^r$ if $M$ is orientable and $\mathbb{Z}^{r-1} \oplus \mathbb{Z}_2$ if $M$ is nonorientable. In particular, $r \ge 1$ when $M$ is nonorientable. Using Exercise 6, construct examples showing there are no other restrictions on the homology groups of closed $3$ manifolds. [In the nonorientable case consider the manifold $N$ obtained from $S^2 \times I$ by identifying $S^2 \times \{0\}$ with $S^2 \times \{1\}$ via a reflection of $S^2$.]

> [!exercise] 25
> Show that if a closed orientable manifold $M$ of dimension $2k$ has $H_{k-1}(M; \mathbb{Z})$ torsionfree, then $H_k(M; \mathbb{Z})$ is also torsionfree.

> [!exercise] 26
> Compute the cup product structure in $H^*(S^2 \times S^8 \sharp S^4 \times S^6; \mathbb{Z})$, and in particular show that the only nontrivial cup products are those dictated by Poincaré duality. [See Exercise 6. The result has an evident generalization to connected sums of $S^i \times S^{n-i}$'s for fixed $n$ and varying $i$.]

> [!exercise] 27
> Show that after a suitable change of basis, a skew-symmetric nonsingular bilinear form over $\mathbb{Z}$ can be represented by a matrix consisting of $2 \times 2$ blocks
> $$
> \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}
> $$
> along the diagonal and zeros elsewhere. [For the matrix of a bilinear form, the following operation can be realized by a change of basis: Add an integer multiple of the $i$th row to the $j$th row and add the same integer multiple of the $i$th column to the $j$th column. Use this to fix up each column in turn. Note that a skew-symmetric matrix must have zeros on the diagonal.]

> [!exercise] 28
> Show that a nonsingular symmetric or skew-symmetric bilinear pairing over a field $F$, of the form $F^n \times F^n \to F$, cannot be identically zero when restricted to all pairs of vectors $v, w$ in a $k$ dimensional subspace $V \subset F^n$ if $k > n/2$.

> [!exercise] 29
> Use the preceding problem to show that if the closed orientable surface $M_g$ of genus $g$ retracts onto a graph $X \subset M_g$, then $H_1(X)$ has rank at most $g$. Deduce an alternative proof of Exercise 13 from this, and construct a retraction of $M_g$ onto a wedge sum of $k$ circles for each $k \le g$.

> [!exercise] 30
> Show that the boundary of an $R$ orientable manifold is also $R$ orientable.

> [!exercise] 31
> Show that if $M$ is a compact $R$ orientable $n$ manifold, then the boundary map $H_n(M, \partial M; R) \to H_{n-1}(\partial M; R)$ sends a fundamental class for $(M, \partial M)$ to a fundamental class for $\partial M$.

> [!exercise] 32
> Show that a compact manifold does not retract onto its boundary.

> [!exercise] 33
> Show that if $M$ is a compact contractible $n$ manifold then $\partial M$ is a homology $(n-1)$ sphere, that is, $H_i(\partial M; \mathbb{Z}) \cong H_i(S^{n-1}; \mathbb{Z})$ for all $i$.

> [!exercise] 34
> For a compact manifold $M$ verify that the following diagram relating Poincaré duality for $M$ and $\partial M$ is commutative, up to sign at least:
> $$
> \begin{array}{ccccc}
> H^{k-1}(\partial M) & \xrightarrow{\delta} & H^k(M, \partial M) & \xrightarrow{j^*} & H^k(M) \\
> \downarrow & & \downarrow & & \downarrow \\
> H_{n-k}(\partial M) & \xrightarrow{\partial} & H_{n-k}(M, \partial M) & \xrightarrow{i_*} & H_{n-k}(M)
> \end{array}
> $$
> where the vertical maps are the duality isomorphisms.

> [!exercise] 35
> If $M$ is a noncompact $R$ orientable $n$ manifold with boundary $\partial M$ having a collar neighborhood in $M$, show that there are Poincaré duality isomorphisms
> $$
> H_c^k(M; R) \cong H_{n-k}(M, \partial M; R)
> $$
> for all $k$, using the five-lemma and the following diagram:
> $$
> \begin{array}{ccccccccc}
> \cdots \to & H_c^k(M - \partial M) & \to & H_c^k(M) & \to & H_c^k(\partial M \times (0,1)) & \to & H_c^{k+1}(M - \partial M) & \to \cdots \\
> & \downarrow & & \downarrow & & \downarrow & & \downarrow & \\
> \cdots \to & H_{n-k}(M, \partial M) & \to & H_{n-k}(M) & \to & H_{n-k}(\partial M) & \to & H_{n-k-1}(M, \partial M) & \to \cdots
> \end{array}
> $$

