---
title: "3.3 Poincaré Duality"
tags:
  - textbook
  - algebraic-topology
source: "[[30.Recources/AT/PDFs/pdf - AT Hatcher.pdf|AT Hatcher]]"
section: "3.3"
date: 2026-05-05
cssclasses:
  - math
---

# 3.3 Poincaré Duality

Algebraic topology is most often concerned with properties of spaces that depend only on homotopy type, so local topological properties do not play much of a role. Digressing somewhat from this viewpoint, we study in this section a class of spaces whose most prominent feature is their local topology, namely manifolds, which are locally homeomorphic to $\mathbb{R}^n$. It is somewhat miraculous that just this local homogeneity property, together with global compactness, is enough to impose a strong symmetry on the homology and cohomology groups of such spaces, as well as strong nontriviality of cup products. This is the Poincaré duality theorem, one of the earliest theorems in the subject. In fact, Poincaré's original work on the duality property came before homology and cohomology had even been properly defined, and it took many years for the concepts of homology and cohomology to be refined sufficiently to put Poincaré duality on a firm footing.

Let us begin with some definitions.

> [!definition] Manifold
> A **manifold** of dimension $n$, or more concisely an $n$ manifold, is a Hausdorff space $M$ in which each point has an open neighborhood homeomorphic to $\mathbb{R}^n$.

The dimension of $M$ is intrinsically characterized by the fact that for $x \in M$, the local homology group $H_i(M, M-\{x\}; \mathbb{Z})$ is nonzero only for $i = n$:

$$H_i(M, M -\{x\}; \mathbb{Z}) \approx H_i(\mathbb{R}^n, \mathbb{R}^n -\{0\}; \mathbb{Z}) \quad \text{by excision}$$
$$\approx \tilde{H}_{i-1}(\mathbb{R}^n -\{0\}; \mathbb{Z}) \quad \text{since } \mathbb{R}^n \text{ is contractible}$$
$$\approx \tilde{H}_{i-1}(S^{n-1}; \mathbb{Z}) \quad \text{since } \mathbb{R}^n -\{0\} \simeq S^{n-1}$$

> [!definition] Closed Manifold
> A compact manifold is called **closed**, to distinguish it from the more general notion of a compact manifold with boundary, considered later in this section.

For example $S^n$ is a closed manifold, as are $\mathbb{RP}^n$ and lens spaces since they have $S^n$ as a covering space. Another closed manifold is $\mathbb{CP}^n$. This is compact since it is a quotient space of $S^{2n+1}$, and the manifold property is satisfied since there is an open cover by subsets homeomorphic to $\mathbb{R}^{2n}$, the sets $U_i = \{ [z_0, \cdots, z_n] \in \mathbb{CP}^n \mid z_i = 1 \}$. The same reasoning applies also for quaternionic projective spaces. Further examples of closed manifolds can be generated from these using the obvious fact that the product of closed manifolds of dimensions $m$ and $n$ is a closed manifold of dimension $m + n$.

Poincaré duality in its most primitive form asserts that for a closed orientable manifold $M$ of dimension $n$, there are isomorphisms $H^k(M; \mathbb{Z}) \approx H_{n-k}(M; \mathbb{Z})$ for all $k$. Implicit here is the convention that homology and cohomology groups of negative dimension are zero, so the duality statement includes the fact that all the nontrivial homology and cohomology of $M$ lies in the dimension range from $0$ to $n$. The definition of 'orientable' will be given below. Without the orientability hypothesis there is a weaker statement that $H^k(M; \mathbb{Z}_2) \approx H_{n-k}(M; \mathbb{Z}_2)$ for all $k$. As we show in Corollaries A.8 and A.9 in the Appendix, the homology groups of a closed manifold are all finitely generated. So via the universal coefficient theorem, Poincaré duality for a closed orientable $n$ manifold $M$ can be stated just in terms of homology: Modulo their torsion subgroups, $H_k(M; \mathbb{Z})$ and $H_{n-k}(M; \mathbb{Z})$ are isomorphic, and the torsion subgroups of $H_k(M; \mathbb{Z})$ and $H_{n-k-1}(M; \mathbb{Z})$ are isomorphic. However, the statement in terms of cohomology is really more natural.

Poincaré duality thus expresses a certain symmetry in the homology of closed orientable manifolds. For example, consider the $n$ dimensional torus $T^n$, the product of $n$ circles. By induction on $n$ it follows from the Künneth formula, or from the easy special case $H_i(X \times S^1; \mathbb{Z}) \approx H_i(X; \mathbb{Z}) \oplus H_{i-1}(X; \mathbb{Z})$ which was an exercise in §2.2, that $H_k(T^n; \mathbb{Z})$ is isomorphic to the direct sum of $\binom{n}{k}$ copies of $\mathbb{Z}$. So Poincaré duality is reflected in the relation $\binom{n}{k} = \binom{n}{n-k}$. The reader might also check that Poincaré duality is consistent with our calculations of the homology of projective spaces and lens spaces, which are all orientable except for $\mathbb{RP}^n$ with $n$ even.

## Dual Cell Structures (Geometric Motivation)

For many manifolds there is a very nice geometric proof of Poincaré duality using the notion of dual cell structures. The germ of this idea can be traced back to the five regular Platonic solids: the tetrahedron, cube, octahedron, dodecahedron, and icosahedron. Each of these polyhedra has a dual polyhedron whose vertices are the center points of the faces of the given polyhedron. Thus the dual of the cube is the octahedron, and vice versa. Similarly the dodecahedron and icosahedron are dual to each other, and the tetrahedron is its own dual. One can regard each of these polyhedra as defining a cell structure $C$ on $S^2$ with a dual cell structure $C^*$ determined by the dual polyhedron. Each vertex of $C$ lies in a dual $2$ cell of $C^*$, each edge of $C$ crosses a dual edge of $C^*$, and each $2$ cell of $C$ contains a dual vertex of $C^*$.

The first figure at the right shows the case of the cube and octahedron. There is no need to restrict to regular polyhedra here, and we can generalize further by replacing $S^2$ by any surface. A portion of a more-or-less random pair of dual cell structures is shown in the second figure. On the torus, if we lift a dual pair of cell structures to the universal cover $\mathbb{R}^2$, we get a dual pair of periodic tilings of the plane, as in the next three figures. The last two figures show that the standard CW structure on the surface of genus $g$, obtained from a $4g$ gon by identifying edges via the product of commutators $[a_1, b_1] \cdots [a_g, b_g]$, is homeomorphic to its own dual.

> [!figure]- 🔴 待插入图片：Dual Cell Structures 系列图
> 原书此处包含 5-6 幅图：立方体/八面体对偶、随机曲面对偶胞腔结构、环面覆盖空间 $\mathbb{R}^2$ 的周期平铺（3幅）、亏格 $g$ 曲面的 CW 结构与其对偶。请从 PDF 截图插入。

Given a pair of dual cell structures $C$ and $C^*$ on a closed surface $M$, the pairing of cells with dual cells gives identifications of cellular chain groups $C_0^* = C_2$, $C_1^* = C_1$, and $C_2^* = C_0$. If we use $\mathbb{Z}$ coefficients these identifications are not quite canonical since there is an ambiguity of sign for each cell, the choice of a generator for the corresponding $\mathbb{Z}$ summand of the cellular chain complex. We can avoid this ambiguity by considering the simpler situation of $\mathbb{Z}_2$ coefficients, where the identifications $C_i = C_{2-i}^*$ are completely canonical. The key observation now is that under these identifications, the cellular boundary map $\partial: C_i \to C_{i-1}$ becomes the cellular coboundary map $\delta: C_{2-i}^* \to C_{2-i+1}^*$ since $\partial$ assigns to a cell the sum of the cells which are faces of it, while $\delta$ assigns to a cell the sum of the cells of which it is a face. Thus $H_i(C; \mathbb{Z}_2) \approx H^{2-i}(C^*; \mathbb{Z}_2)$, and hence $H_i(M; \mathbb{Z}_2) \approx H^{2-i}(M; \mathbb{Z}_2)$ since $C$ and $C^*$ are cell structures on the same surface $M$.

To refine this argument to $\mathbb{Z}$ coefficients the problem of signs must be addressed. After analyzing the situation more closely, one sees that if $M$ is orientable, it is possible to make consistent choices of orientations of all the cells of $C$ and $C^*$ so that the boundary maps in $C$ agree with the coboundary maps in $C^*$, and therefore one gets $H_i(C; \mathbb{Z}) \approx H^{2-i}(C^*; \mathbb{Z})$, hence $H_i(M; \mathbb{Z}) \approx H^{2-i}(M; \mathbb{Z})$.

For manifolds of higher dimension the situation is entirely analogous. One would consider dual cell structures $C$ and $C^*$ on a closed $n$ manifold $M$, each $i$ cell of $C$ being dual to a unique $(n-i)$ cell of $C^*$ which it intersects in one point 'transversely'. For example on the $3$ dimensional torus $S^1 \times S^1 \times S^1$ one could take the standard cell structure lifting to the decomposition of the universal cover $\mathbb{R}^3$ into cubes with vertices at the integer lattice points $\mathbb{Z}^3$, and then the dual cell structure is obtained by translating this by the vector $(1/2, 1/2, 1/2)$. Each edge in either cell structure then has a dual $2$ cell which it pierces orthogonally, and each vertex lies in a dual $3$ cell.

All the manifolds one commonly meets, for example all differentiable manifolds, have dually paired cell structures with the properties needed to carry out the proof of Poincaré duality we have just sketched. However, to construct these cell structures requires a certain amount of manifold theory. To avoid this, and to get a theorem that applies to all manifolds, we will take a completely different approach, using algebraic topology to replace the geometry of dual cell structures.

## Orientations and Homology

Let us consider the question of how one might define orientability for manifolds. First there is the local question: What is an orientation of $\mathbb{R}^n$? Whatever an orientation of $\mathbb{R}^n$ is, it should have the property that it is preserved under rotations and reversed by reflections. For example, in $\mathbb{R}^2$ the notions of 'clockwise' and 'counterclockwise' certainly have this property, as do 'right-handed' and 'left-handed' in $\mathbb{R}^3$. We shall take the viewpoint that this property is what characterizes orientations, so anything satisfying the property can be regarded as an orientation.

With this in mind, we propose the following as an algebraic-topological definition:

> [!definition] Local Orientation
> An **orientation** of $\mathbb{R}^n$ at a point $x$ is a choice of generator of the infinite cyclic group $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\})$, where the absence of a coefficient group from the notation means that we take coefficients in $\mathbb{Z}$.

To verify that the characteristic property of orientations is satisfied we use the isomorphisms $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\}) \approx H_{n-1}(\mathbb{R}^n -\{x\}) \approx H_{n-1}(S^{n-1})$ where $S^{n-1}$ is a sphere centered at $x$. Since these isomorphisms are natural, and rotations of $S^{n-1}$ have degree $1$, being homotopic to the identity, while reflections have degree $-1$, we see that a rotation $\rho$ of $\mathbb{R}^n$ fixing $x$ takes a generator $\alpha$ of $H_n(\mathbb{R}^n, \mathbb{R}^n -\{x\})$ to itself, $\rho_*(\alpha) = \alpha$, while a reflection takes $\alpha$ to $-\alpha$.

Note that with this definition, an orientation of $\mathbb{R}^n$ at a point $x$ determines an orientation at every other point $y$ via the canonical isomorphisms $H_n(\mathbb{R}^n, \mathbb{R}^n-\{x\}) \approx H_n(\mathbb{R}^n, \mathbb{R}^n - B) \approx H_n(\mathbb{R}^n, \mathbb{R}^n -\{y\})$ where $B$ is any ball containing both $x$ and $y$.

An advantage of this definition of local orientation is that it can be applied to any $n$ dimensional manifold $M$:

> [!definition] Local Orientation on a Manifold
> A **local orientation** of $M$ at a point $x$ is a choice of generator $\mu_x$ of the infinite cyclic group $H_n(M, M -\{x\})$.

**Notational Convention.** In what follows we will very often be looking at homology groups of the form $H_n(X, X - A)$. To simplify notation we will write $H_n(X, X - A)$ as $H_n(X \mid A)$, or more generally $H_n(X \mid A; G)$ if a coefficient group $G$ needs to be specified. By excision, $H_n(X \mid A)$ depends only on a neighborhood of the closure of $A$ in $X$, so it makes sense to view $H_n(X \mid A)$ as local homology of $X$ at $A$.

Having settled what local orientations at points of a manifold are, a global orientation ought to be 'a consistent choice of local orientations at all points'. We make this precise by the following definition.

> [!definition] Orientation of a Manifold
> An **orientation** of an $n$ dimensional manifold $M$ is a function $x \mapsto \mu_x$ assigning to each $x \in M$ a local orientation $\mu_x \in H_n(M \mid x)$, satisfying the 'local consistency' condition that each $x \in M$ has a neighborhood $\mathbb{R}^n \subset M$ containing an open ball $B$ of finite radius about $x$ such that all the local orientations $\mu_y$ at points $y \in B$ are the images of one generator $\mu_B$ of $H_n(M \mid B) \approx H_n(\mathbb{R}^n \mid B)$ under the natural maps $H_n(M \mid B) \to H_n(M \mid y)$. If an orientation exists for $M$, then $M$ is called **orientable**.

Every manifold $M$ has an orientable two-sheeted covering space $\widetilde{M}$. For example, $\mathbb{RP}^2$ is covered by $S^2$, and the Klein bottle has the torus as a two-sheeted covering space. The general construction goes as follows. As a set, let

$$\widetilde{M} = \left\{ \mu_x \;\middle|\; x \in M \text{ and } \mu_x \text{ is a local orientation of } M \text{ at } x \right\}$$

The map $\mu_x \mapsto x$ defines a two-to-one surjection $\widetilde{M} \to M$, and we wish to topologize $\widetilde{M}$ to make this a covering space projection. Given an open ball $B \subset \mathbb{R}^n \subset M$ of finite radius and a generator $\mu_B \in H_n(M \mid B)$, let $U(\mu_B)$ be the set of all $\mu_x \in \widetilde{M}$ such that $x \in B$ and $\mu_x$ is the image of $\mu_B$ under the natural map $H_n(M \mid B) \to H_n(M \mid x)$. It is easy to check that these sets $U(\mu_B)$ form a basis for a topology on $\widetilde{M}$, and that the projection $\widetilde{M} \to M$ is a covering space. The manifold $\widetilde{M}$ is orientable since each point $\mu_x \in \widetilde{M}$ has a canonical local orientation given by the element $\tilde{\mu}_x \in H_n(\widetilde{M} \mid \mu_x)$ corresponding to $\mu_x$ under the isomorphisms $H_n(\widetilde{M} \mid \mu_x) \approx H_n(U(\mu_B) \mid \mu_x) \approx H_n(B \mid x)$, and by construction these local orientations satisfy the local consistency condition necessary to define a global orientation.

> [!proposition] Proposition 3.25
> If $M$ is connected, then $M$ is orientable iff $\widetilde{M}$ has two components. In particular, $M$ is orientable if it is simply-connected, or more generally if $\pi_1(M)$ has no subgroup of index two.

The first statement is a formulation of the intuitive notion of nonorientability as being able to go around some closed loop and come back with the opposite orientation, since in terms of the covering space $\widetilde{M} \to M$ this corresponds to a loop in $M$ that lifts to a path in $\widetilde{M}$ connecting two distinct points with the same image in $M$. The existence of such paths is equivalent to $\widetilde{M}$ being connected.

> [!proof] Proof
> If $M$ is connected, $\widetilde{M}$ has either one or two components since it is a two-sheeted covering space of $M$. If it has two components, they are each mapped homeomorphically to $M$ by the covering projection, so $M$ is orientable, being homeomorphic to a component of the orientable manifold $\widetilde{M}$. Conversely, if $M$ is orientable, it has exactly two orientations since it is connected, and each of these orientations defines a component of $\widetilde{M}$. The last statement of the proposition follows since connected two-sheeted covering spaces of $M$ correspond to index-two subgroups of $\pi_1(M)$, by the classification of covering spaces. $\square$

The covering space $\widetilde{M} \to M$ can be embedded in a larger covering space $M_{\mathbb{Z}} \to M$ where $M_{\mathbb{Z}}$ consists of all elements $\alpha_x \in H_n(M \mid x)$ as $x$ ranges over $M$. As before, we topologize $M_{\mathbb{Z}}$ via the basis of sets $U(\alpha_B)$ consisting of $\alpha_x$'s with $x \in B$ and $\alpha_x$ the image of an element $\alpha_B \in H_n(M \mid B)$ under the map $H_n(M \mid B) \to H_n(M \mid x)$. The covering space $M_{\mathbb{Z}} \to M$ is infinite-sheeted since for fixed $x \in M$, the $\alpha_x$'s range over the infinite cyclic group $H_n(M \mid x)$. Restricting $\alpha_x$ to be zero, we get a copy $M_0$ of $M$ in $M_{\mathbb{Z}}$. The rest of $M_{\mathbb{Z}}$ consists of an infinite sequence of copies $M_k$ of $\widetilde{M}$, $k = 1, 2, \cdots$, where $M_k$ consists of the $\alpha_x$'s that are $k$ times either generator of $H_n(M \mid x)$.

A continuous map $M \to M_{\mathbb{Z}}$ of the form $x \mapsto \alpha_x \in H_n(M \mid x)$ is called a **section** of the covering space. An orientation of $M$ is the same thing as a section $x \mapsto \mu_x$ such that $\mu_x$ is a generator of $H_n(M \mid x)$ for each $x$.

One can generalize the definition of orientation by replacing the coefficient group $\mathbb{Z}$ by any commutative ring $R$ with identity. Then an $R$ **orientation** of $M$ assigns to each $x \in M$ a generator of $H_n(M \mid x; R) \approx R$, subject to the corresponding local consistency condition, where a 'generator' of $R$ is an element $u$ such that $Ru = R$. Since we assume $R$ has an identity element, this is equivalent to saying that $u$ is a unit, an invertible element of $R$. The definition of the covering space $M_{\mathbb{Z}}$ generalizes immediately to a covering space $M_R \to M$, and an $R$ orientation is a section of this covering space whose value at each $x \in M$ is a generator of $H_n(M \mid x; R)$.

The structure of $M_R$ is easy to describe. In view of the canonical isomorphism $H_n(M \mid x; R) \approx H_n(M \mid x) \otimes R$, each $r \in R$ determines a subcovering space $M_r$ of $M_R$ consisting of the points $\pm \mu_x \otimes r \in H_n(M \mid x; R)$ for $\mu_x$ a generator of $H_n(M \mid x)$. If $r$ has order $2$ in $R$ then $r = -r$ so $M_r$ is just a copy of $M$, and otherwise $M_r$ is isomorphic to the two-sheeted cover $\widetilde{M}$. The covering space $M_R$ is the union of these $M_r$'s, which are disjoint except for the equality $M_r = M_{-r}$.

In particular we see that an orientable manifold is $R$ orientable for all $R$, while a nonorientable manifold is $R$ orientable iff $R$ contains a unit of order $2$, which is equivalent to having $2 = 0$ in $R$. Thus every manifold is $\mathbb{Z}_2$ orientable. In practice this means that the two most important cases are $R = \mathbb{Z}$ and $R = \mathbb{Z}_2$. In what follows the reader should keep these two cases foremost in mind, but we will usually state results for a general $R$.

The orientability of a closed manifold is reflected in the structure of its homology, according to the following result.

> [!theorem] Theorem 3.26
> Let $M$ be a closed connected $n$ manifold. Then:
> (a) If $M$ is $R$ orientable, the map $H_n(M; R) \to H_n(M \mid x; R) \approx R$ is an isomorphism for all $x \in M$.
> (b) If $M$ is not $R$ orientable, the map $H_n(M; R) \to H_n(M \mid x; R) \approx R$ is injective with image $\{ r \in R \mid 2r = 0 \}$ for all $x \in M$.
> (c) $H_i(M; R) = 0$ for $i > n$.
>
> In particular, $H_n(M; \mathbb{Z})$ is $\mathbb{Z}$ or $0$ depending on whether $M$ is orientable or not, and in either case $H_n(M; \mathbb{Z}_2) = \mathbb{Z}_2$.

An element of $H_n(M; R)$ whose image in $H_n(M \mid x; R)$ is a generator for all $x$ is called a **fundamental class** for $M$ with coefficients in $R$. By the theorem, a fundamental class exists if $M$ is closed and $R$ orientable. To show that the converse is also true, let $\mu \in H_n(M; R)$ be a fundamental class and let $\mu_x$ denote its image in $H_n(M \mid x; R)$. The function $x \mapsto \mu_x$ is then an $R$ orientation since the map $H_n(M; R) \to H_n(M \mid x; R)$ factors through $H_n(M \mid B; R)$ for $B$ any open ball in $M$ containing $x$. Furthermore, $M$ must be compact since $\mu_x$ can only be nonzero for $x$ in the image of a cycle representing $\mu$, and this image is compact. In view of these remarks a fundamental class could also be called an **orientation class** for $M$.

The theorem will follow fairly easily from a more technical statement:

> [!lemma] Lemma 3.27
> Let $M$ be a manifold of dimension $n$ and let $A \subset M$ be a compact subset. Then:
> (a) If $x \mapsto \alpha_x$ is a section of the covering space $M_R \to M$, then there is a unique class $\alpha_A \in H_n(M \mid A; R)$ whose image in $H_n(M \mid x; R)$ is $\alpha_x$ for all $x \in A$.
> (b) $H_i(M \mid A; R) = 0$ for $i > n$.

To deduce the theorem from this, choose $A = M$, a compact set by assumption. Part (c) of the theorem is immediate from (b) of the lemma. To obtain (a) and (b) of the theorem, let $\Gamma_R(M)$ be the set of sections of $M_R \to M$. The sum of two sections is a section, and a scalar multiple of a section is a section, so $\Gamma_R(M)$ is an $R$ module. There is a homomorphism $H_n(M; R) \to \Gamma_R(M)$ sending a class $\alpha$ to the section $x \mapsto \alpha_x$, where $\alpha_x$ is the image of $\alpha$ under the map $H_n(M; R) \to H_n(M \mid x; R)$. Part (a) of the lemma asserts that this homomorphism is an isomorphism. If $M$ is connected, each section is uniquely determined by its value at one point, so statements (a) and (b) of the theorem are apparent from the earlier discussion of the structure of $M_R$. $\square$

> [!proof] Proof of Lemma 3.27
> The coefficient ring $R$ will play no special role in the argument so we shall omit it from the notation. We break the proof up into four steps.
>
> **(1)** First we observe that if the lemma is true for compact sets $A$, $B$, and $A \cap B$, then it is true for $A \cup B$. To see this, consider the Mayer–Vietoris sequence
> $$0 \longrightarrow H_n(M \mid A \cup B) \xrightarrow{\Phi} H_n(M \mid A) \oplus H_n(M \mid B) \xrightarrow{\Psi} H_n(M \mid A \cap B)$$
> Here the zero on the left comes from the assumption that $H_{n+1}(M \mid A \cap B) = 0$. The map $\Phi$ is $\Phi(\alpha) = (\alpha, -\alpha)$ and $\Psi$ is $\Psi(\alpha, \beta) = \alpha + \beta$, where we omit notation for maps on homology induced by inclusion. The terms $H_i(M \mid A \cup B)$ farther to the left in this sequence are sandwiched between groups that are zero by assumption, so $H_i(M \mid A \cup B) = 0$ for $i > n$. This gives (b). For the existence half of (a), if $x \mapsto \alpha_x$ is a section, the hypothesis gives unique classes $\alpha_A \in H_n(M \mid A)$, $\alpha_B \in H_n(M \mid B)$, and $\alpha_{A \cap B} \in H_n(M \mid A \cap B)$ having image $\alpha_x$ for all $x$ in $A$, $B$, or $A \cap B$ respectively. The images of $\alpha_A$ and $\alpha_B$ in $H_n(M \mid A \cap B)$ satisfy the defining property of $\alpha_{A \cap B}$, hence must equal $\alpha_{A \cap B}$. Exactness of the sequence then implies that $(\alpha_A, -\alpha_B) = \Phi(\alpha_{A \cup B})$ for some $\alpha_{A \cup B} \in H_n(M \mid A \cup B)$. This means that $\alpha_{A \cup B}$ maps to $\alpha_A$ and $\alpha_B$, so $\alpha_{A \cup B}$ has image $\alpha_x$ for all $x \in A \cup B$ since $\alpha_A$ and $\alpha_B$ have this property. To see that $\alpha_{A \cup B}$ is unique, observe that if a class $\alpha \in H_n(M \mid A \cup B)$ has image zero in $H_n(M \mid x)$ for all $x \in A \cup B$, then its images in $H_n(M \mid A)$ and $H_n(M \mid B)$ have the same property, hence are zero by hypothesis, so $\alpha$ itself must be zero since $\Phi$ is injective. Uniqueness of $\alpha_{A \cup B}$ follows by applying this observation to the difference between two choices for $\alpha_{A \cup B}$.
>
> **(2)** A compact set $A \subset M$ can be written as the union of finitely many compact sets $A_1, \cdots, A_m$ each contained in an open $\mathbb{R}^n \subset M$. We now apply (1) to $A_1 \cup \cdots \cup A_{m-1}$ and $A_m$. The intersection of these two sets is $(A_1 \cap A_m) \cup \cdots \cup (A_{m-1} \cap A_m)$, a union of $m-1$ compact sets each contained in an open $\mathbb{R}^n \subset M$. By induction on $m$ this gives a reduction to the case $m = 1$, so $A \subset \mathbb{R}^n \subset M$.
>
> **(3)** When $A \subset \mathbb{R}^n \subset M$ and $A$ is a union of convex compact sets $A_1, \cdots, A_m$ in $\mathbb{R}^n$, an inductive argument as in (2) reduces to the case that $A$ itself is convex. When $A$ is convex the result is evident since the map $H_i(M \mid A) \to H_i(M \mid x)$ is equivalent to $H_i(\mathbb{R}^n \mid A) \to H_i(\mathbb{R}^n \mid x)$ by excision, and the latter map is an isomorphism for any $x \in A$, as both $\mathbb{R}^n - A$ and $\mathbb{R}^n -\{x\}$ deformation retract onto a sphere centered at $x$.
>
> **(4)** For an arbitrary compact set $A \subset \mathbb{R}^n \subset M$ let $\alpha \in H_i(M \mid A)$ be represented by a relative cycle $z$ in $\mathbb{R}^n$ with $\partial z$ in $\mathbb{R}^n - A$, and let $C$ be the union of the images of the singular simplices in $\partial z$. Since $C$ is compact, it has a positive distance $\delta$ from $A$ in $\mathbb{R}^n$. We can cover $A$ by finitely many closed balls in $\mathbb{R}^n$ of radius less than $\delta$ centered at points of $A$. Let $K$ be the union of these balls, so $K$ is disjoint from $C$. The relative cycle $z$ defines an element $\alpha_K \in H_i(M \mid K)$ mapping to the given $\alpha \in H_i(M \mid A)$. If $i > n$ then by (3) we have $H_i(M \mid K) = 0$, so $\alpha_K = 0$, which implies $\alpha = 0$ and hence $H_i(M \mid A) = 0$. For the uniqueness half of (a) when $i = n$ it suffices to show that $\alpha = 0$ if $\alpha_x$ is zero in $H_n(M \mid x)$ for all $x \in A$. Since $K$ is a union of balls $B$ meeting $A$ and $H_n(M \mid B) \to H_n(M \mid x)$ is an isomorphism for all $x \in B$, it follows that $\alpha_K$ maps to zero in $H_n(M \mid x)$ for each $x \in K$ since this is true when $x \in A$. Applying step (3) to the zero section of $M_R \to M$ we conclude that $\alpha_K$ is zero, hence also $\alpha$. This finishes the uniqueness statement in (a). The existence statement is easy since we can let $\alpha_A$ be the image of the element $\alpha_B$ associated to any ball $B$ with $A \subset B \subset \mathbb{R}^n$. $\square$

For a closed $n$ manifold having the structure of a $\Delta$-complex there is a more explicit construction for a fundamental class. Consider the case of $\mathbb{Z}$ coefficients. In simplicial homology a fundamental class must be represented by some linear combination $\sum_i k_i \sigma_i$ of the $n$ simplices $\sigma_i$ of $M$. The condition that the fundamental class maps to a generator of $H_n(M \mid x; \mathbb{Z})$ for points $x$ in the interiors of the $\sigma_i$'s means that each coefficient $k_i$ must be $\pm 1$. The $k_i$'s must also be such that $\sum_i k_i \sigma_i$ is a cycle. This implies that if $\sigma_i$ and $\sigma_j$ share a common $(n-1)$ dimensional face, then $k_i$ determines $k_j$ and vice versa. Analyzing the situation more closely, one can show that a choice of signs for the $k_i$'s making $\sum_i k_i \sigma_i$ a cycle is possible iff $M$ is orientable, and if such a choice is possible, then the cycle $\sum_i k_i \sigma_i$ defines a fundamental class. With $\mathbb{Z}_2$ coefficients there is no issue of signs, and $\sum_i \sigma_i$ always defines a fundamental class.

Some information about $H_{n-1}(M)$ can also be squeezed out of the preceding theorem:

> [!corollary] Corollary 3.28
> If $M$ is a closed connected $n$ manifold, the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ is trivial if $M$ is orientable and $\mathbb{Z}_2$ if $M$ is nonorientable.

> [!proof] Proof
> This is an application of the universal coefficient theorem for homology, using the fact that the homology groups of $M$ are finitely generated, from Corollaries A.8 and A.9 in the Appendix. In the orientable case, if $H_{n-1}(M; \mathbb{Z})$ contained torsion, then for some prime $p$, $H_n(M; \mathbb{Z}_p)$ would be larger than the $\mathbb{Z}_p$ coming from $H_n(M; \mathbb{Z})$. In the nonorientable case, $H_n(M; \mathbb{Z}_m)$ is either $\mathbb{Z}_2$ or $0$ depending on whether $m$ is even or odd. This forces the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ to be $\mathbb{Z}_2$. $\square$

The reader who is familiar with Bockstein homomorphisms, which are discussed in §3.E, will recognize that the $\mathbb{Z}_2$ in $H_{n-1}(M; \mathbb{Z})$ in the nonorientable case is the image of the Bockstein homomorphism $H_n(M; \mathbb{Z}_2) \to H_{n-1}(M; \mathbb{Z})$ coming from the short exact sequence of coefficient groups $0 \to \mathbb{Z} \to \mathbb{Z} \to \mathbb{Z}_2 \to 0$.

The structure of $H_n(M; G)$ and $H_{n-1}(M; G)$ for a closed connected $n$ manifold $M$ can be explained very nicely in terms of cellular homology when $M$ has a CW structure with a single $n$ cell, which is the case for a large number of manifolds. Note that there can be no cells of higher dimension since a cell of maximal dimension produces nontrivial local homology in that dimension. Consider the cellular boundary map $d: C_n(M) \to C_{n-1}(M)$ with $\mathbb{Z}$ coefficients. Since $M$ has a single $n$ cell we have $C_n(M) = \mathbb{Z}$. If $M$ is orientable, $d$ must be zero since $H_n(M; \mathbb{Z}) = \mathbb{Z}$. Then since $d$ is zero, $H_{n-1}(M; \mathbb{Z})$ must be free. On the other hand, if $M$ is nonorientable then $d$ must take a generator of $C_n(M)$ to twice a generator $\alpha$ of a $\mathbb{Z}$ summand of $C_{n-1}(M)$, in order for $H_n(M; \mathbb{Z}_p)$ to be zero for odd primes $p$ and $\mathbb{Z}_2$ for $p = 2$. The cellular chain $\alpha$ must be a cycle since $2\alpha$ is a boundary and hence a cycle. It follows that the torsion subgroup of $H_{n-1}(M; \mathbb{Z})$ must be a $\mathbb{Z}_2$ generated by $\alpha$.

Concerning the homology of noncompact manifolds there is the following general statement.

> [!proposition] Proposition 3.29
> If $M$ is a connected noncompact $n$ manifold, then $H_i(M; R) = 0$ for $i \geq n$.

> [!proof] Proof
> Represent an element of $H_i(M; R)$ by a cycle $z$. This has compact image in $M$, so there is an open set $U \subset M$ containing the image of $z$ and having compact closure $\overline{U} \subset M$. Let $V = M - U$. Part of the long exact sequence of the triple $(M, U \cup V, V)$ fits into a commutative diagram:
>
> > [!figure]- 🔴 待插入图片：Proposition 3.29 交换图
> > 原书此处有一交换图，涉及 triple $(M, U \cup V, V)$ 的长正合序列，上行为 $H_i(U \cup V, V) \to H_i(U) \to H_i(M, V)$ 等。请从 PDF 截图插入。
>
> When $i > n$, the two groups on either side of $H_i(U \cup V, V; R)$ are zero by Lemma 3.27 since $U \cup V$ and $V$ are the complements of compact sets in $M$. Hence $H_i(U; R) = 0$, so $z$ is a boundary in $U$ and therefore in $M$, and we conclude that $H_i(M; R) = 0$.
>
> When $i = n$, the class $[z] \in H_n(M; R)$ defines a section $x \mapsto [z]_x$ of $M_R$. Since $M$ is connected, this section is determined by its value at a single point, so $[z]_x$ will be zero for all $x$ if it is zero for some $x$, which it must be since $z$ has compact image and $M$ is noncompact. By Lemma 3.27, $z$ then represents zero in $H_n(M, V; R)$, hence also in $H_n(U; R)$ since the first term in the upper row of the diagram above is zero when $i = n$, by Lemma 3.27 again. So $[z] = 0$ in $H_n(M; R)$, and therefore $H_n(M; R) = 0$ since $[z]$ was an arbitrary element of this group. $\square$

## The Duality Theorem

The form of Poincaré duality we will prove asserts that for an $R$ orientable closed $n$ manifold, a certain naturally defined map $H^k(M; R) \to H_{n-k}(M; R)$ is an isomorphism. The definition of this map will be in terms of a more general construction called **cap product**, which has close connections with cup product.

### Cap Product

For an arbitrary space $X$ and coefficient ring $R$, define an $R$ bilinear cap product

$$\frown:\; C_k(X; R) \times C^\ell(X; R) \to C_{k-\ell}(X; R) \quad \text{for } k \geq \ell$$

by setting

$$\sigma \frown \phi = \phi\left(\sigma \mid [v_0, \cdots, v_\ell]\right) \cdot \sigma \mid [v_\ell, \cdots, v_k]$$

for $\sigma: \Delta^k \to X$ and $\phi \in C^\ell(X; R)$. To see that this induces a cap product in homology and cohomology we use the formula

$$\partial(\sigma \frown \phi) = (-1)^\ell(\partial\sigma \frown \phi - \sigma \frown \delta\phi)$$

which is checked by a calculation:

$$\partial\sigma \frown \phi = \sum_{i=0}^{\ell} (-1)^i \phi\left(\sigma \mid [v_0, \cdots, \widehat{v}_i, \cdots, v_{\ell+1}]\right) \sigma \mid [v_{\ell+1}, \cdots, v_k] + \sum_{i=\ell+1}^{k} (-1)^i \phi\left(\sigma \mid [v_0, \cdots, v_\ell]\right) \sigma \mid [v_\ell, \cdots, \widehat{v}_i, \cdots, v_k]$$

$$\sigma \frown \delta\phi = \sum_{i=0}^{\ell+1} (-1)^i \phi\left(\sigma \mid [v_0, \cdots, \widehat{v}_i, \cdots, v_{\ell+1}]\right) \sigma \mid [v_{\ell+1}, \cdots, v_k]$$

$$\partial(\sigma \frown \phi) = \sum_{i=\ell}^{k} (-1)^{i-\ell} \phi\left(\sigma \mid [v_0, \cdots, v_\ell]\right) \sigma \mid [v_\ell, \cdots, \widehat{v}_i, \cdots, v_k]$$

From the relation $\partial(\sigma \frown \phi) = \pm(\partial\sigma \frown \phi - \sigma \frown \delta\phi)$ it follows that the cap product of a cycle $\sigma$ and a cocycle $\phi$ is a cycle. Further, if $\partial\sigma = 0$ then $\partial(\sigma \frown \phi) = \pm(\sigma \frown \delta\phi)$, so the cap product of a cycle and a coboundary is a boundary. And if $\delta\phi = 0$ then $\partial(\sigma \frown \phi) = \pm(\partial\sigma \frown \phi)$, so the cap product of a boundary and a cocycle is a boundary. These facts imply that there is an induced cap product

$$H_k(X; R) \times H^\ell(X; R) \xrightarrow{\frown} H_{k-\ell}(X; R)$$

which is $R$ linear in each variable.

Using the same formulas, one checks that cap product has the relative forms

$$H_k(X, A; R) \times H^\ell(X; R) \xrightarrow{\frown} H_{k-\ell}(X, A; R)$$
$$H_k(X, A; R) \times H^\ell(X, A; R) \xrightarrow{\frown} H_{k-\ell}(X; R)$$

For example, in the second case the cap product $C_k(X; R) \times C^\ell(X; R) \to C_{k-\ell}(X; R)$ restricts to zero on the submodule $C_k(A; R) \times C^\ell(X, A; R)$, so there is an induced cap product $C_k(X, A; R) \times C^\ell(X, A; R) \to C_{k-\ell}(X; R)$. The formula for $\partial(\sigma \frown \phi)$ still holds, so we can pass to homology and cohomology groups. There is also a more general relative cap product

$$H_k(X, A \cup B; R) \times H^\ell(X, A; R) \xrightarrow{\frown} H_{k-\ell}(X, B; R),$$

defined when $A$ and $B$ are open sets in $X$, using the fact that $H_k(X, A \cup B; R)$ can be computed using the chain groups $C_n(X, A + B; R) = C_n(X; R)/C_n(A + B; R)$, as in the derivation of relative Mayer–Vietoris sequences in §2.2.

Cap product satisfies a naturality property that is a little more awkward to state than the corresponding result for cup product since both covariant and contravariant functors are involved. Given a map $f: X \to Y$, the relevant induced maps on homology and cohomology fit into the diagram shown below.

> [!figure]- 🔴 待插入图片：Cap Product Naturality 图
> 原书 p.241 有一示意图，说明 $f_*$、$f^*$ 与 cap product 的关系。公式为 $f_*(\alpha) \frown \phi = f_*(\alpha \frown f^*(\phi))$。请从 PDF 截图插入。

It does not quite make sense to say this diagram commutes, but the spirit of commutativity is contained in the formula

$$f_*(\alpha) \frown \phi = f_*\left(\alpha \frown f^*(\phi)\right)$$

which is obtained by substituting $f\sigma$ for $\sigma$ in the definition of cap product: $f\sigma \frown \phi = \phi\left(f\sigma \mid [v_0, \cdots, v_\ell]\right) f\sigma \mid [v_\ell, \cdots, v_k]$. There are evident relative versions as well.

Now we can state Poincaré duality for closed manifolds:

> [!theorem] Theorem 3.30 (Poincaré Duality)
> If $M$ is a closed $R$ orientable $n$ manifold with fundamental class $[M] \in H_n(M; R)$, then the map $D: H^k(M; R) \longrightarrow H_{n-k}(M; R)$ defined by $D(\alpha) = [M] \frown \alpha$ is an isomorphism for all $k$.

Recall that a fundamental class for $M$ is an element of $H_n(M; R)$ whose image in $H_n(M \mid x; R)$ is a generator for each $x \in M$. The existence of such a class was shown in Theorem 3.26.

> [!example] Example 3.31: Surfaces
> Let $M$ be the closed orientable surface of genus $g$, obtained as usual from a $4g$ gon by identifying pairs of edges according to the word $a_1 b_1 a_1^{-1} b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}$. A $\Delta$-complex structure on $M$ is obtained by coning off the $4g$ gon to its center, as indicated in the figure for the case $g = 2$.

> [!figure]- 🔴 待插入图片：亏格 2 可定向曲面的 $\Delta$-复形结构
> 原书 p.241 有一图，展示将 $8$ 边形锥化到中心得到的 $\Delta$-复形，并标注了 $a_1, b_1, a_2, b_2$ 和对应的余圈弧 $\alpha_1, \beta_1, \alpha_2, \beta_2$。请从 PDF 截图插入。

> We can compute cap products using simplicial homology and cohomology since cap products are defined for simplicial homology and cohomology by exactly the same formula as for singular homology and cohomology, so the isomorphism between the simplicial and singular theories respects cap products. A fundamental class $[M]$ generating $H_2(M)$ is represented by the $2$ cycle formed by the sum of all $4g$ $2$ simplices with the signs indicated. The edges $a_i$ and $b_i$ form a basis for $H_1(M)$. Under the isomorphism $H^1(M) \approx \operatorname{Hom}(H_1(M), \mathbb{Z})$, the cohomology class $\alpha_i$ corresponding to $a_i$ assigns the value $1$ to $a_i$ and $0$ to the other basis elements. This class $\alpha_i$ is represented by the cocycle $\phi_i$ assigning the value $1$ to the $1$ simplices meeting the arc labeled $\alpha_i$ in the figure and $0$ to the other $1$ simplices. Similarly we have a class $\beta_i$ corresponding to $b_i$, represented by the cocycle $\psi_i$ assigning the value $1$ to the $1$ simplices meeting the arc $\beta_i$ and $0$ to the other $1$ simplices. Applying the definition of cap product, we have $[M] \frown \phi_i = b_i$ and $[M] \frown \psi_i = -a_i$ since in both cases there is just one $2$ simplex $[v_0, v_1, v_2]$ where $\phi_i$ or $\psi_i$ is nonzero on the edge $[v_0, v_1]$. Thus $b_i$ is the Poincaré dual of $\alpha_i$ and $-a_i$ is the Poincaré dual of $\beta_i$. If we interpret Poincaré duality entirely in terms of homology, identifying $\alpha_i$ with its Hom-dual $a_i$ and $\beta_i$ with $b_i$, then the classes $a_i$ and $b_i$ are Poincaré duals of each other, up to sign at least. Geometrically, Poincaré duality is reflected in the fact that the loops $\alpha_i$ and $b_i$ are homotopic, as are the loops $\beta_i$ and $a_i$.
>
> The closed nonorientable surface $N$ of genus $g$ can be treated in the same way if we use $\mathbb{Z}_2$ coefficients.

> [!figure]- 🔴 待插入图片：亏格 $g$ 不可定向曲面的 $2g$ 边形构造
> 原书 p.242 有一图，展示 $N_g$ 的 $2g$ 边形粘合，标注了 $a_i$ 边和对应的 $\alpha_i$ 余圈弧。请从 PDF 截图插入。

We view $N$ as obtained from a $2g$ gon by identifying consecutive pairs of edges according to the word $a_1^2 \cdots a_g^2$. We have classes $\alpha_i \in H^1(N; \mathbb{Z}_2)$ represented by cocycles $\phi_i$ assigning the value $1$ to the edges meeting the arc $\alpha_i$. Then $[N] \frown \phi_i = a_i$, so $a_i$ is the Poincaré dual of $\alpha_i$. In terms of homology, $a_i$ is the Hom-dual of $\alpha_i$, so $a_i$ is its own Poincaré dual. Geometrically, the loops $a_i$ on $N$ are homotopic to their Poincaré dual loops $\alpha_i$.

Our proof of Poincaré duality, like the construction of fundamental classes, will be by an inductive argument using Mayer–Vietoris sequences. The induction step requires a version of Poincaré duality for open subsets of $M$, which are noncompact and can satisfy Poincaré duality only when a different kind of cohomology called **cohomology with compact supports** is used.

## Cohomology with Compact Supports

Before giving the general definition, let us look at the conceptually simpler notion of simplicial cohomology with compact supports. Here one starts with a $\Delta$-complex $X$ which is locally compact. This is equivalent to saying that every point has a neighborhood that meets only finitely many simplices. Consider the subgroup $\Delta_c^i(X; G)$ of the simplicial cochain group $\Delta^i(X; G)$ consisting of cochains that are compactly supported in the sense that they take nonzero values on only finitely many simplices. The coboundary of such a cochain $\phi$ can have a nonzero value only on those $(i+1)$ simplices having a face on which $\phi$ is nonzero, and there are only finitely many such simplices by the local compactness assumption, so $\delta\phi$ lies in $\Delta_c^{i+1}(X; G)$. Thus we have a subcomplex of the simplicial cochain complex. The cohomology groups for this subcomplex will be denoted temporarily by $H_c^i(X; G)$.

> [!example] Example 3.32
> Let us compute these cohomology groups when $X = \mathbb{R}$ with the $\Delta$-complex structure having vertices at the integer points. For a simplicial $0$ cochain to be a cocycle it must take the same value on all vertices, but then if the cochain lies in $\Delta_c^0(X)$ it must be identically zero. Thus $H_c^0(\mathbb{R}; G) = 0$. However, $H_c^1(\mathbb{R}; G)$ is nonzero. Namely, consider the map $\Sigma: \Delta_c^1(\mathbb{R}; G) \to G$ sending each cochain to the sum of its values on all the $1$ simplices. Note that $\Sigma$ is not defined on all of $\Delta^1(X)$, just on $\Delta_c^1(X)$. The map $\Sigma$ vanishes on coboundaries, so it induces a map $H_c^1(\mathbb{R}; G) \to G$. This is surjective since every element of $\Delta_c^1(X)$ is a cocycle. It is an easy exercise to verify that it is also injective, so $H_c^1(\mathbb{R}; G) \approx G$.

Compactly supported cellular cohomology for a locally compact CW complex could be defined in a similar fashion, using cellular cochains that are nonzero on only finitely many cells. However, what we really need is singular cohomology with compact supports for spaces without any simplicial or cellular structure.

The quickest definition of this is the following. Let $C_c^i(X; G)$ be the subgroup of $C^i(X; G)$ consisting of cochains $\phi: C_i(X) \to G$ for which there exists a compact set $K = K_\phi \subset X$ such that $\phi$ is zero on all chains in $X - K$. Note that $\delta\phi$ is then also zero on chains in $X - K$, so $\delta\phi$ lies in $C_c^{i+1}(X; G)$ and the $C_c^i(X; G)$'s for varying $i$ form a subcomplex of the singular cochain complex of $X$. The cohomology groups $H_c^i(X; G)$ of this subcomplex are the **cohomology groups with compact supports**.

Cochains in $C_c^i(X; G)$ have compact support in only a rather weak sense. A stronger and perhaps more natural condition would have been to require cochains to be nonzero only on singular simplices contained in some compact set, depending on the cochain. However, cochains satisfying this condition do not in general form a subcomplex of the singular cochain complex. For example, if $X = \mathbb{R}$ and $\phi$ is a $0$ cochain assigning a nonzero value to one point of $\mathbb{R}$ and zero to all other points, then $\delta\phi$ assigns a nonzero value to arbitrarily large $1$ simplices.

It will be quite useful to have an alternative definition of $H_c^i(X; G)$ in terms of algebraic limits, which enter the picture in the following way. The cochain group $C_c^i(X; G)$ is the union of its subgroups $C^i(X, X - K; G)$ as $K$ ranges over compact subsets of $X$. Each inclusion $K \hookrightarrow L$ induces inclusions $C^i(X, X - K; G) \hookrightarrow C^i(X, X - L; G)$ for all $i$, so there are induced maps $H^i(X, X - K; G) \to H^i(X, X - L; G)$. These need not be injective, but one might still hope that $H_c^i(X; G)$ is somehow describable in terms of the system of groups $H^i(X, X - K; G)$ for varying $K$. This is indeed the case, and it is algebraic limits that provide the description.

### Direct Limits

Suppose one has abelian groups $G_\alpha$ indexed by some partially ordered index set $I$ having the property that for each pair $\alpha, \beta \in I$ there exists $\gamma \in I$ with $\alpha \leq \gamma$ and $\beta \leq \gamma$. Such an $I$ is called a **directed set**. Suppose also that for each pair $\alpha \leq \beta$ one has a homomorphism $f_{\alpha\beta}: G_\alpha \to G_\beta$, such that $f_{\alpha\alpha} = \mathbb{1}$ for each $\alpha$, and if $\alpha \leq \beta \leq \gamma$ then $f_{\alpha\gamma}$ is the composition of $f_{\alpha\beta}$ and $f_{\beta\gamma}$. Given this data, which is called a **directed system** of groups, there are two equivalent ways of defining the **direct limit** group $\varinjlim G_\alpha$.

The shorter definition is that $\varinjlim G_\alpha$ is the quotient of the direct sum $\bigoplus_\alpha G_\alpha$ by the subgroup generated by all elements of the form $a - f_{\alpha\beta}(a)$ for $a \in G_\alpha$, where we are viewing each $G_\alpha$ as a subgroup of $\bigoplus_\alpha G_\alpha$.

The other definition, which is often more convenient to work with, runs as follows. Define an equivalence relation on the set $\coprod_\alpha G_\alpha$ by $a \sim b$ if $f_{\alpha\gamma}(a) = f_{\beta\gamma}(b)$ for some $\gamma$, where $a \in G_\alpha$ and $b \in G_\beta$. This is clearly reflexive and symmetric, and transitivity follows from the directed set property. It could also be described as the equivalence relation generated by setting $a \sim f_{\alpha\beta}(a)$. Any two equivalence classes $[a]$ and $[b]$ have representatives $a'$ and $b'$ lying in the same $G_\gamma$, so define $[a] + [b] = [a' + b']$. One checks this is well-defined and gives an abelian group structure to the set of equivalence classes. It is easy to check further that the map sending an equivalence class $[a]$ to the coset of $a$ in $\varinjlim G_\alpha$ is a homomorphism, with an inverse induced by the map $\sum_i a_i \mapsto \sum_i [a_i]$ for $a_i \in G_{\alpha_i}$. Thus we can identify $\varinjlim G_\alpha$ with the group of equivalence classes $[a]$.

A useful consequence of this is that if we have a subset $J \subset I$ with the property that for each $\alpha \in I$ there exists a $\beta \in J$ with $\alpha \leq \beta$, then $\varinjlim G_\alpha$ is the same whether we compute it with $\alpha$ varying over $I$ or just over $J$. In particular, if $I$ has a maximal element $\gamma$, we can take $J = \{\gamma\}$ and then $\varinjlim G_\alpha = G_\gamma$.

Suppose now that we have a space $X$ expressed as the union of a collection of subspaces $X_\alpha$ forming a directed set with respect to the inclusion relation. Then the groups $H_i(X_\alpha; G)$ for fixed $i$ and $G$ form a directed system, using the homomorphisms induced by inclusions. The natural maps $H_i(X_\alpha; G) \to H_i(X; G)$ induce a homomorphism $\varinjlim H_i(X_\alpha; G) \to H_i(X; G)$.

> [!proposition] Proposition 3.33
> If a space $X$ is the union of a directed set of subspaces $X_\alpha$ with the property that each compact set in $X$ is contained in some $X_\alpha$, then the natural map $\varinjlim H_i(X_\alpha; G) \to H_i(X; G)$ is an isomorphism for all $i$ and $G$.

> [!proof] Proof
> For surjectivity, represent a cycle in $X$ by a finite sum of singular simplices. The union of the images of these singular simplices is compact in $X$, hence lies in some $X_\alpha$, so the map $\varinjlim H_i(X_\alpha; G) \to H_i(X; G)$ is surjective. Injectivity is similar: If a cycle in some $X_\alpha$ is a boundary in $X$, compactness implies it is a boundary in some $X_\beta \supset X_\alpha$, hence represents zero in $\varinjlim H_i(X_\alpha; G)$. $\square$

Now we can give the alternative definition of cohomology with compact supports in terms of direct limits. For a space $X$, the compact subsets $K \subset X$ form a directed set under inclusion since the union of two compact sets is compact. To each compact $K \subset X$ we associate the group $H^i(X, X - K; G)$, with a fixed $i$ and coefficient group $G$, and to each inclusion $K \subset L$ of compact sets we associate the natural homomorphism $H^i(X, X-K; G) \to H^i(X, X-L; G)$. The resulting limit group $\varinjlim H^i(X, X-K; G)$ is then equal to $H_c^i(X; G)$ since each element of this limit group is represented by a cocycle in $C^i(X, X - K; G)$ for some compact $K$, and such a cocycle is zero in $\varinjlim H^i(X, X - K; G)$ iff it is the coboundary of a cochain in $C^{i-1}(X, X - L; G)$ for some compact $L \supset K$.

Note that if $X$ is compact, then $H_c^i(X; G) = H^i(X; G)$ since there is a unique maximal compact set $K \subset X$, namely $X$ itself. This is also immediate from the original definition since $C_c^i(X; G) = C^i(X; G)$ if $X$ is compact.

> [!example] Example 3.34: $H_c^*(\mathbb{R}^n; G)$
> To compute $\varinjlim H^i(\mathbb{R}^n, \mathbb{R}^n - K; G)$ it suffices to let $K$ range over balls $B_k$ of integer radius $k$ centered at the origin since every compact set is contained in such a ball. Since $H^i(\mathbb{R}^n, \mathbb{R}^n - B_k; G)$ is nonzero only for $i = n$, when it is $G$, and the maps $H^n(\mathbb{R}^n, \mathbb{R}^n - B_k; G) \to H^n(\mathbb{R}^n, \mathbb{R}^n - B_{k+1}; G)$ are isomorphisms, we deduce that $H_c^i(\mathbb{R}^n; G) = 0$ for $i \neq n$ and $H_c^n(\mathbb{R}^n; G) \approx G$.

This example shows that cohomology with compact supports is not an invariant of homotopy type. This can be traced to difficulties with induced maps. For example, the constant map from $\mathbb{R}^n$ to a point does not induce a map on cohomology with compact supports. The maps which do induce maps on $H_c^*$ are the **proper maps**, those for which the inverse image of each compact set is compact. In the proof of Poincaré duality, however, we will need induced maps of a different sort going in the opposite direction from what is usual for cohomology, maps $H_c^i(U; G) \to H_c^i(V; G)$ associated to inclusions $U \hookrightarrow V$ of open sets in the fixed manifold $M$.

The group $H^i(X, X-K; G)$ for $K$ compact depends only on a neighborhood of $K$ in $X$ by excision, assuming $X$ is Hausdorff so that $K$ is closed. As convenient shorthand notation we will write this group as $H^i(X \mid K; G)$, in analogy with the similar notation used earlier for local homology. One can think of cohomology with compact supports as the limit of these 'local cohomology groups at compact subsets'.

## Duality for Noncompact Manifolds

For $M$ an $R$ orientable $n$ manifold, possibly noncompact, we can define a duality map $D_M: H_c^k(M; R) \to H_{n-k}(M; R)$ by a limiting process in the following way. For compact sets $K \subset L \subset M$ we have a diagram:

> [!figure]- 🔴 待插入图片：Duality Map 定义图（p.245）
> 原书 p.245 有一交换图：上行 $H^k(M \mid K; R) \xrightarrow{i^*} H^k(M \mid L; R)$，下行 $H_n(M \mid K; R) \xleftarrow{i_*} H_n(M \mid L; R)$，以及 cap product 映射到 $H_{n-k}(M; R)$。请从 PDF 截图插入。

where $H_n(M \mid A; R) = H_n(M, M - A; R)$ and $H^k(M \mid A; R) = H^k(M, M - A; R)$. By Lemma 3.27 there are unique elements $\mu_K \in H_n(M \mid K; R)$ and $\mu_L \in H_n(M \mid L; R)$ restricting to a given orientation of $M$ at each point of $K$ and $L$, respectively. From the uniqueness we have $i_*(\mu_L) = \mu_K$. The naturality of cap product implies that $i_*(\mu_L) \frown x = \mu_L \frown i^*(x)$ for all $x \in H^k(M \mid K; R)$, so $\mu_K \frown x = \mu_L \frown i^*(x)$. Therefore, letting $K$ vary over compact sets in $M$, the homomorphisms $H^k(M \mid K; R) \to H_{n-k}(M; R)$, $x \mapsto \mu_K \frown x$, induce in the limit a duality homomorphism $D_M: H_c^k(M; R) \to H_{n-k}(M; R)$.

Since $H_c^*(M; R) = H^*(M; R)$ if $M$ is compact, the following theorem generalizes Poincaré duality for closed manifolds:

> [!theorem] Theorem 3.35
> The duality map $D_M: H_c^k(M; R) \to H_{n-k}(M; R)$ is an isomorphism for all $k$ whenever $M$ is an $R$ oriented $n$ manifold.

The proof will not be difficult once we establish a technical result stated in the next lemma, concerning the commutativity of a certain diagram. Commutativity statements of this sort are usually routine to prove, but this one seems to be an exception. The reader who consults other books for alternative expositions will find somewhat uneven treatments of this technical point, and the proof we give is also not as simple as one would like.

The coefficient ring $R$ will be fixed throughout the proof, and for simplicity we will omit it from the notation for homology and cohomology.

> [!lemma] Lemma 3.36
> If $M$ is the union of two open sets $U$ and $V$, then there is a diagram of Mayer–Vietoris sequences, commutative up to sign:
>
> > [!figure]- 🔴 待插入图片：Lemma 3.36 的 Mayer–Vietoris 交换图（p.246）
> > 原书 p.246 有一大型交换图：上行为 $U, V, U \cap V, U \cup V$ 的 compact support 上同调 Mayer–Vietoris 序列，下行为对应的同调 Mayer–Vietoris 序列，由 duality maps $D$ 连接。请从 PDF 截图插入。

> [!proof] Proof
> Compact sets $K \subset U$ and $L \subset V$ give rise to the Mayer–Vietoris sequence in the upper row of the following diagram, whose lower row is also a Mayer–Vietoris sequence:
>
> > [!figure]- 🔴 待插入图片：证明中的 MV 序列交换图（p.246）
> > 原书 p.246 的局部图：上行涉及 $U, V, U \cap V, U \cup V$ 和紧集 $K, L$，下行为相应的同调序列。两处 excision 同构已标注。
>
> The two maps labeled isomorphisms come from excision. Assuming this diagram commutes, consider passing to the limit over compact sets $K \subset U$ and $L \subset V$. Since each compact set in $U \cap V$ is contained in an intersection $K \cap L$ of compact sets $K \subset U$ and $L \subset V$, and similarly for $U \cup V$, the diagram induces a limit diagram having the form stated in the lemma. The first row of this limit diagram is exact since a direct limit of exact sequences is exact; this is an exercise at the end of the section, and follows easily from the definition of direct limits.
>
> It remains to consider the commutativity of the preceding diagram involving $K$ and $L$. In the two squares shown, not involving boundary or coboundary maps, it is a triviality to check commutativity at the level of cycles and cocycles. Less trivial is the third square, which we rewrite in the following way:
>
> > [!figure]- 🔴 待插入图片：Square (*) — Lemma 3.36 证明中的关键交换方块（p.246-247）
> > 原书 p.246-247 的核心交换方块 $(*)$：涉及 $H^k(M \mid K \cup L) \to H_{n-k-1}(U \cap V)$ 的两条路径，一条经 coboundary $\delta$ 再 cap product，另一条经 cap product 再 Mayer–Vietoris boundary $\partial$。通向符号 $(-1)^{k+1}$ 的交换性。请从 PDF 截图插入。
>
> $$(*)\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad$$
>
> Letting $A = M - K$ and $B = M - L$, the map $\delta$ is the coboundary map in the Mayer–Vietoris sequence obtained from the short exact sequence of cochain complexes
> $$0 \longrightarrow C^*(M, A + B) \longrightarrow C^*(M, A) \oplus C^*(M, B) \longrightarrow C^*(M, A \cap B) \longrightarrow 0$$
> where $C^*(M, A + B)$ consists of cochains on $M$ vanishing on chains in $A$ and chains in $B$. To evaluate the Mayer–Vietoris coboundary map $\delta$ on a cohomology class represented by a cocycle $\phi \in C^*(M, A \cap B)$, the first step is to write $\phi = \phi_A - \phi_B$ for $\phi_A \in C^*(M, A)$ and $\phi_B \in C^*(M, B)$. Then $\delta[\phi]$ is represented by the cocycle $\delta\phi_A = \delta\phi_B \in C^*(M, A + B)$, where the equality $\delta\phi_A = \delta\phi_B$ comes from the fact that $\phi$ is a cocycle, so $\delta\phi = \delta\phi_A - \delta\phi_B = 0$. Similarly, the boundary map $\partial$ in the homology Mayer–Vietoris sequence is obtained by representing an element of $H_i(M)$ by a cycle $z$ that is a sum of chains $z_U \in C_i(U)$ and $z_V \in C_i(V)$, and then $\partial[z] = [\partial z_U]$.
>
> Via barycentric subdivision, the class $\mu_{K \cup L}$ can be represented by a chain $\alpha$ that is a sum $\alpha_{U-L} + \alpha_{U \cap V} + \alpha_{V-K}$ of chains in $U - L$, $U \cap V$, and $V - K$, respectively, since these three open sets cover $M$. The chain $\alpha_{U \cap V}$ represents $\mu_{K \cap L}$ since the other two chains $\alpha_{U-L}$ and $\alpha_{V-K}$ lie in the complement of $K \cap L$, hence vanish in $H_n(M \mid K \cap L) \approx H_n(U \cap V \mid K \cap L)$. Similarly, $\alpha_{U-L} + \alpha_{U \cap V}$ represents $\mu_K$.
>
> In the square $(*)$ let $\phi$ be a cocycle representing an element of $H^k(M \mid K \cup L)$. Under $\delta$ this maps to the cohomology class of $\delta\phi_A$. Continuing on to $H_{n-k-1}(U \cap V)$ we obtain $\alpha_{U \cap V} \frown \delta\phi_A$, which is in the same homology class as $\partial\alpha_{U \cap V} \frown \phi_A$ since
> $$\partial(\alpha_{U \cap V} \frown \phi_A) = (-1)^k(\partial\alpha_{U \cap V} \frown \phi_A - \alpha_{U \cap V} \frown \delta\phi_A)$$
> and $\alpha_{U \cap V} \frown \phi_A$ is a chain in $U \cap V$.
>
> Going around the square $(*)$ the other way, $\phi$ maps first to $\alpha \frown \phi$. To apply the Mayer–Vietoris boundary map $\partial$ to this, we first write $\alpha \frown \phi$ as a sum of a chain in $U$ and a chain in $V$:
> $$\alpha \frown \phi = (\alpha_{U-L} \frown \phi) + (\alpha_{U \cap V} \frown \phi + \alpha_{V-K} \frown \phi)$$
> Then we take the boundary of the first of these two chains, obtaining the homology class $[\partial(\alpha_{U-L} \frown \phi)] \in H_{n-k-1}(U \cap V)$. To compare this with $[\partial\alpha_{U \cap V} \frown \phi_A]$, we have
> $$\partial(\alpha_{U-L} \frown \phi) = (-1)^k \partial\alpha_{U-L} \frown \phi \quad \text{since } \delta\phi = 0$$
> $$= (-1)^k \partial\alpha_{U-L} \frown \phi_A \quad \text{since } \partial\alpha_{U-L} \frown \phi_B = 0, \; \phi_B \text{ being zero on chains in } B = M - L$$
> $$= (-1)^{k+1} \partial\alpha_{U \cap V} \frown \phi_A$$
> where this last equality comes from the fact that $\partial(\alpha_{U-L} + \alpha_{U \cap V}) \frown \phi_A = 0$ since $\partial(\alpha_{U-L} + \alpha_{U \cap V})$ is a chain in $U - K$ by the earlier observation that $\alpha_{U-L} + \alpha_{U \cap V}$ represents $\mu_K$, and $\phi_A$ vanishes on chains in $A = M - K$.
>
> Thus the square $(*)$ commutes up to a sign depending only on $k$. $\square$

> [!proof] Proof of Poincaré Duality (Theorem 3.35)
> There are two inductive steps, finite and infinite:
>
> **(A)** If $M$ is the union of open sets $U$ and $V$ and if $D_U$, $D_V$, and $D_{U \cap V}$ are isomorphisms, then so is $D_M$. Via the five-lemma, this is immediate from the preceding lemma.
>
> **(B)** If $M$ is the union of a sequence of open sets $U_1 \subset U_2 \subset \cdots$ and each duality map $D_{U_i}: H_c^k(U_i) \to H_{n-k}(U_i)$ is an isomorphism, then so is $D_M$. To show this we notice first that by excision, $H_c^k(U_i)$ can be regarded as the limit of the groups $H^k(M \mid K)$ as $K$ ranges over compact subsets of $U_i$. Then there are natural maps $H_c^k(U_i) \to H_c^k(U_{i+1})$ since the second of these groups is a limit over a larger collection of $K$'s. Thus we can form $\varinjlim H_c^k(U_i)$ which is obviously isomorphic to $H_c^k(M)$ since the compact sets in $M$ are just the compact sets in all the $U_i$'s. By Proposition 3.33, $H_{n-k}(M) \approx \varinjlim H_{n-k}(U_i)$. The map $D_M$ is thus the limit of the isomorphisms $D_{U_i}$, hence is an isomorphism.
>
> Now after all these preliminaries we can prove the theorem in three easy steps:
>
> **(1)** The case $M = \mathbb{R}^n$ can be proved by regarding $\mathbb{R}^n$ as the interior of $\Delta^n$, and then the map $D_M$ can be identified with the map $H^k(\Delta^n, \partial\Delta^n) \to H_{n-k}(\Delta^n)$ given by cap product with a unit times the generator $[\Delta^n] \in H_n(\Delta^n, \partial\Delta^n)$ defined by the identity map of $\Delta^n$, which is a relative cycle. The only nontrivial value of $k$ is $k = n$, when the cap product map is an isomorphism since a generator of $H^n(\Delta^n, \partial\Delta^n) \approx \operatorname{Hom}(H_n(\Delta^n, \partial\Delta^n), R)$ is represented by a cocycle $\phi$ taking the value $1$ on $\Delta^n$, so by the definition of cap product, $\Delta^n \frown \phi$ is the last vertex of $\Delta^n$, representing a generator of $H_0(\Delta^n)$.
>
> **(2)** More generally, $D_M$ is an isomorphism for $M$ an arbitrary open set in $\mathbb{R}^n$. To see this, first write $M$ as a countable union of nonempty bounded convex open sets $U_i$, for example open balls, and let $V_i = \bigcup_{j < i} U_j$. Both $V_i$ and $U_i \cap V_i$ are unions of $i-1$ bounded convex open sets, so by induction on the number of such sets in a cover we may assume that $D_{V_i}$ and $D_{U_i \cap V_i}$ are isomorphisms. By (1), $D_{U_i}$ is an isomorphism since $U_i$ is homeomorphic to $\mathbb{R}^n$. Hence $D_{U_i \cup V_i}$ is an isomorphism by (A). Since $M$ is the increasing union of the $V_i$'s and each $D_{V_i}$ is an isomorphism, so is $D_M$ by (B).
>
> **(3)** If $M$ is a finite or countably infinite union of open sets $U_i$ homeomorphic to $\mathbb{R}^n$, the theorem now follows by the argument in (2), with each appearance of the words 'bounded convex open set' replaced by 'open set in $\mathbb{R}^n$'. Thus the proof is finished for closed manifolds, as well as for all the noncompact manifolds one ever encounters in actual practice.
>
> To handle a completely general noncompact manifold $M$ we use a Zorn's Lemma argument. Consider the collection of open sets $U \subset M$ for which the duality maps $D_U$ are isomorphisms. This collection is partially ordered by inclusion, and the union of every totally ordered subcollection is again in the collection by the argument in (B), which did not really use the hypothesis that the collection $\{U_i\}$ was indexed by the positive integers. Zorn's Lemma then implies that there exists a maximal open set $U$ for which the theorem holds. If $U \neq M$, choose a point $x \in M - U$ and an open neighborhood $V$ of $x$ homeomorphic to $\mathbb{R}^n$. The theorem holds for $V$ and $U \cap V$ by (1) and (2), and it holds for $U$ by assumption, so by (A) it holds for $U \cup V$, contradicting the maximality of $U$. $\square$

> [!corollary] Corollary 3.37
> A closed manifold of odd dimension has Euler characteristic zero.

> [!proof] Proof
> Let $M$ be a closed $n$ manifold. If $M$ is orientable, we have $\operatorname{rank} H_i(M; \mathbb{Z}) = \operatorname{rank} H^{n-i}(M; \mathbb{Z})$, which equals $\operatorname{rank} H_{n-i}(M; \mathbb{Z})$ by the universal coefficient theorem. Thus if $n$ is odd, all the terms of $\sum_i (-1)^i \operatorname{rank} H_i(M; \mathbb{Z})$ cancel in pairs.
>
> If $M$ is not orientable we apply the same argument using $\mathbb{Z}_2$ coefficients, with $\operatorname{rank} H_i(M; \mathbb{Z})$ replaced by $\dim H_i(M; \mathbb{Z}_2)$, the dimension as a vector space over $\mathbb{Z}_2$, to conclude that $\sum_i (-1)^i \dim H_i(M; \mathbb{Z}_2) = 0$. It remains to check that this alternating sum equals the Euler characteristic $\sum_i (-1)^i \operatorname{rank} H_i(M; \mathbb{Z})$. We can do this by using the isomorphisms $H^i(M; \mathbb{Z}_2) \approx H_i(M; \mathbb{Z}_2)$ and applying the universal coefficient theorem for cohomology. Each $\mathbb{Z}$ summand of $H_i(M; \mathbb{Z})$ gives a $\mathbb{Z}_2$ summand of $H_i(M; \mathbb{Z}_2)$. Each $\mathbb{Z}_m$ summand of $H_i(M; \mathbb{Z})$ with $m$ even gives $\mathbb{Z}_2$ summands of $H_i(M; \mathbb{Z}_2)$ and $H^{i+1}(M, \mathbb{Z}_2)$, whose contributions to $\sum_i (-1)^i \dim H_i(M; \mathbb{Z}_2)$ cancel. And $\mathbb{Z}_m$ summands of $H_i(M; \mathbb{Z})$ with $m$ odd contribute nothing to $H^*(M; \mathbb{Z}_2)$. $\square$

## Connection with Cup Product

Cup and cap product are related by the formula

$$(*)\qquad\qquad \psi(\alpha \frown \phi) = (\phi \smile \psi)(\alpha)$$

for $\alpha \in C_{k+\ell}(X; R)$, $\phi \in C^k(X; R)$, and $\psi \in C^\ell(X; R)$. This holds since for a singular $(k+\ell)$ simplex $\sigma: \Delta^{k+\ell} \to X$ we have

$$\psi(\sigma \frown \phi) = \psi\left(\phi\left(\sigma \mid [v_0, \cdots, v_k]\right) \sigma \mid [v_k, \cdots, v_{k+\ell}]\right) = \phi\left(\sigma \mid [v_0, \cdots, v_k]\right) \psi\left(\sigma \mid [v_k, \cdots, v_{k+\ell}]\right) = (\phi \smile \psi)(\sigma)$$

The formula $(*)$ says that the map $\phi \smile\; : C^\ell(X; R) \to C^{k+\ell}(X; R)$ is equal to the map $\operatorname{Hom}_R(C_\ell(X; R), R) \to \operatorname{Hom}_R(C_{k+\ell}(X; R), R)$ dual to $\frown \phi$. Passing to homology and cohomology, we obtain the commutative diagram at the right:

![[50.Image/Tikz/cup-cap-product-relation.md]] When the maps $h$ are isomorphisms, for example when $R$ is a field or when $R = \mathbb{Z}$ and the homology groups of $X$ are free, then the map $\phi \smile$ is the dual of $\frown \phi$. Thus in these cases cup and cap product determine each other, at least if one assumes finite generation so that cohomology determines homology as well as vice versa. However, there are examples where cap and cup products are not equivalent when $R = \mathbb{Z}$ and there is torsion in homology.

By means of the formula $(*)$, Poincaré duality has nontrivial implications for the cup product structure of manifolds. For a closed $R$ orientable $n$ manifold $M$, consider the cup product pairing

$$H^k(M; R) \times H^{n-k}(M; R) \longrightarrow R, \quad (\phi, \psi) \mapsto (\phi \smile \psi)[M]$$

Such a bilinear pairing $A \times B \to R$ is said to be **nonsingular** if the maps $A \to \operatorname{Hom}_R(B, R)$ and $B \to \operatorname{Hom}_R(A, R)$, obtained by viewing the pairing as a function of each variable separately, are both isomorphisms.

> [!proposition] Proposition 3.38
> The cup product pairing is nonsingular for closed $R$ orientable manifolds when $R$ is a field, or when $R = \mathbb{Z}$ and torsion in $H^*(M; \mathbb{Z})$ is factored out.

> [!proof] Proof
> Consider the composition
> $$H^{n-k}(M; R) \xrightarrow{h} \operatorname{Hom}_R(H_{n-k}(M; R), R) \xrightarrow{D^*} \operatorname{Hom}_R(H^k(M; R), R)$$
> where $h$ is the map appearing in the universal coefficient theorem, induced by evaluation of cochains on chains, and $D^*$ is the Hom dual of the Poincaré duality map $D: H^k \to H_{n-k}$. The composition $D^* h$ sends $\psi \in H^{n-k}(M; R)$ to the homomorphism $\phi \mapsto \psi([M] \frown \phi) = (\phi \smile \psi)[M]$. For field coefficients or for integer coefficients with torsion factored out, $h$ is an isomorphism. Nonsingularity of the pairing in one of its variables is then equivalent to $D$ being an isomorphism. Nonsingularity in the other variable follows by commutativity of cup product. $\square$

> [!corollary] Corollary 3.39
> If $M$ is a closed connected orientable $n$ manifold, then an element $\alpha \in H^k(M; \mathbb{Z})$ generates an infinite cyclic summand of $H^k(M; \mathbb{Z})$ iff there exists an element $\beta \in H^{n-k}(M; \mathbb{Z})$ such that $\alpha \smile \beta$ is a generator of $H^n(M; \mathbb{Z}) \approx \mathbb{Z}$. With coefficients in a field this holds for any $\alpha \neq 0$.

> [!proof] Proof
> For $\alpha$ to generate a $\mathbb{Z}$ summand of $H^k(M; \mathbb{Z})$ is equivalent to the existence of a homomorphism $\phi: H^k(M; \mathbb{Z}) \to \mathbb{Z}$ with $\phi(\alpha) = \pm 1$. By the nonsingularity of the cup product pairing, $\phi$ is realized by taking cup product with an element $\beta \in H^{n-k}(M; \mathbb{Z})$ and evaluating on $[M]$, so having a $\beta$ with $\alpha \smile \beta$ generating $H^n(M; \mathbb{Z})$ is equivalent to having $\phi$ with $\phi(\alpha) = \pm 1$. The case of field coefficients is similar but easier. $\square$

> [!example] Example 3.40: Projective Spaces
> The cup product structure of $H^*(\mathbb{CP}^n; \mathbb{Z})$ as a truncated polynomial ring $\mathbb{Z}[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 2$ can easily be deduced from this as follows. The inclusion $\mathbb{CP}^{n-1} \hookrightarrow \mathbb{CP}^n$ induces an isomorphism on $H^i$ for $i \leq 2n-2$, so by induction on $n$, $H^{2i}(\mathbb{CP}^n; \mathbb{Z})$ is generated by $\alpha^i$ for $i < n$. By the corollary, there is an integer $m$ such that the product $\alpha \smile m\alpha^{n-1} = m\alpha^n$ generates $H^{2n}(\mathbb{CP}^n; \mathbb{Z})$. This can only happen if $m = \pm 1$, and therefore $H^*(\mathbb{CP}^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^{n+1})$. The same argument shows $H^*(\mathbb{HP}^n; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 4$. For $\mathbb{RP}^n$ one can use the same argument with $\mathbb{Z}_2$ coefficients to deduce that $H^*(\mathbb{RP}^n; \mathbb{Z}_2) \approx \mathbb{Z}_2[\alpha]/(\alpha^{n+1})$ with $|\alpha| = 1$. The cup product structure in infinite-dimensional projective spaces follows from the finite-dimensional case, as we saw in the proof of Theorem 3.19.
>
> Could there be a closed manifold whose cohomology is additively isomorphic to that of $\mathbb{CP}^n$ but with a different cup product structure? For $n = 2$ the answer is no since duality implies that the square of a generator of $H^2$ must be a generator of $H^4$. For $n = 3$, duality says that the product of generators of $H^2$ and $H^4$ must be a generator of $H^6$, but nothing is said about the square of a generator of $H^2$. Indeed, for $S^2 \times S^4$, whose cohomology has the same additive structure as $\mathbb{CP}^3$, the square of the generator of $H^2(S^2 \times S^4; \mathbb{Z})$ is zero since it is the pullback of a generator of $H^2(S^2; \mathbb{Z})$ under the projection $S^2 \times S^4 \to S^2$, and in $H^*(S^2; \mathbb{Z})$ the square of the generator of $H^2$ is zero. More generally, an exercise for §4.D describes closed $6$ manifolds having the same cohomology groups as $\mathbb{CP}^3$ but where the square of the generator of $H^2$ is an arbitrary multiple of a generator of $H^4$.

> [!example] Example 3.41: Lens Spaces
> Cup products in lens spaces can be computed in the same way as in projective spaces. For a lens space $L^{2n+1}$ of dimension $2n+1$ with fundamental group $\mathbb{Z}_m$, we computed $H^i(L^{2n+1}; \mathbb{Z})$ in Example 2.43 to be $\mathbb{Z}$ for $i = 0$ and $2n+1$, $\mathbb{Z}_m$ for odd $i < 2n+1$, and $0$ otherwise. In particular, this implies that $L^{2n+1}$ is orientable, which can also be deduced from the fact that $L^{2n+1}$ is the orbit space of an action of $\mathbb{Z}_m$ on $S^{2n+1}$ by orientation-preserving homeomorphisms, using an exercise at the end of this section. By the universal coefficient theorem, $H^i(L^{2n+1}; \mathbb{Z}_m)$ is $\mathbb{Z}_m$ for each $i \leq 2n+1$. Let $\alpha \in H^1(L^{2n+1}; \mathbb{Z}_m)$ and $\beta \in H^2(L^{2n+1}; \mathbb{Z}_m)$ be generators. The statement we wish to prove is:
>
> $$H^j(L^{2n+1}; \mathbb{Z}_m) \text{ is generated by } \begin{cases} \beta^i & \text{for } j = 2i \\ \alpha\beta^i & \text{for } j = 2i + 1 \end{cases}$$
>
> By induction on $n$ we may assume this holds for $j \leq 2n-1$ since we have a lens space $L^{2n-1} \subset L^{2n+1}$ with this inclusion inducing an isomorphism on $H^j$ for $j \leq 2n-1$, as one sees by comparing the cellular chain complexes for $L^{2n-1}$ and $L^{2n+1}$. The preceding corollary does not apply directly for $\mathbb{Z}_m$ coefficients with arbitrary $m$, but its proof does since the maps $h: H^i(L^{2n+1}; \mathbb{Z}_m) \to \operatorname{Hom}(H_i(L^{2n+1}; \mathbb{Z}_m), \mathbb{Z}_m)$ are isomorphisms. We conclude that $\beta \smile k\alpha\beta^{n-1}$ generates $H^{2n+1}(L^{2n+1}; \mathbb{Z}_m)$ for some integer $k$. We must have $k$ relatively prime to $m$, otherwise the product $\beta \smile k\alpha\beta^{n-1} = k\alpha\beta^n$ would have order less than $m$ and so could not generate $H^{2n+1}(L^{2n+1}; \mathbb{Z}_m)$. Then since $k$ is relatively prime to $m$, $\alpha\beta^n$ is also a generator of $H^{2n+1}(L^{2n+1}; \mathbb{Z}_m)$. From this it follows that $\beta^n$ must generate $H^{2n}(L^{2n+1}; \mathbb{Z}_m)$, otherwise it would have order less than $m$ and so therefore would $\alpha\beta^n$.
>
> The rest of the cup product structure on $H^*(L^{2n+1}; \mathbb{Z}_m)$ is determined once $\alpha^2$ is expressed as a multiple of $\beta$. When $m$ is odd, the commutativity formula for cup product implies $\alpha^2 = 0$. When $m$ is even, commutativity implies only that $\alpha^2$ is either zero or the unique element of $H^2(L^{2n+1}; \mathbb{Z}_m) \approx \mathbb{Z}_m$ of order two. In fact it is the latter possibility which holds, since the $2$ skeleton $L^2$ is the circle $L^1$ with a $2$ cell attached by a map of degree $m$, and we computed the cup product structure in this $2$ complex in Example 3.9. It does not seem to be possible to deduce the nontriviality of $\alpha^2$ from Poincaré duality alone, except when $m = 2$.
>
> The cup product structure for an infinite-dimensional lens space $L^\infty$ follows from the finite-dimensional case since the restriction map $H^j(L^\infty; \mathbb{Z}_m) \to H^j(L^{2n+1}; \mathbb{Z}_m)$ is an isomorphism for $j \leq 2n+1$. As with $\mathbb{RP}^n$, the ring structure in $H^*(L^{2n+1}; \mathbb{Z})$ is determined by the ring structure in $H^*(L^{2n+1}; \mathbb{Z}_m)$, and likewise for $L^\infty$, where one has the slightly simpler structure $H^*(L^\infty; \mathbb{Z}) \approx \mathbb{Z}[\alpha]/(m\alpha)$ with $|\alpha| = 2$. The case of $L^{2n+1}$ is obtained from this by setting $\alpha^{n+1} = 0$ and adjoining the extra $\mathbb{Z} \approx H^{2n+1}(L^{2n+1}; \mathbb{Z})$.
>
> A different derivation of the cup product structure in lens spaces is given in Example 3E.2.

Using the ad hoc notation $H^k_{free}(M)$ for $H^k(M)$ modulo its torsion subgroup, the preceding proposition implies that for a closed orientable manifold $M$ of dimension $2n$, the middle-dimensional cup product pairing $H^n_{free}(M) \times H^n_{free}(M) \to \mathbb{Z}$ is a nonsingular bilinear form on $H^n_{free}(M)$. This form is symmetric or skew-symmetric according to whether $n$ is even or odd.

The algebra in the skew-symmetric case is rather simple: With a suitable choice of basis, the matrix of a skew-symmetric nonsingular bilinear form over $\mathbb{Z}$ can be put into the standard form consisting of $2 \times 2$ blocks $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ along the diagonal and zeros elsewhere, according to an algebra exercise at the end of the section. In particular, the rank of $H^n(M^{2n})$ must be even when $n$ is odd. We are already familiar with these facts in the case $n = 1$ by the explicit computations of cup products for surfaces in §3.2.

The symmetric case is much more interesting algebraically. There are only finitely many isomorphism classes of symmetric nonsingular bilinear forms over $\mathbb{Z}$ of a fixed rank, but this 'finitely many' grows rather rapidly, for example it is more than $80$ million for rank $32$; see [Serre 1973] for an exposition of this beautiful chapter of number theory. One can ask whether all these forms actually occur as cup product pairings in closed manifolds $M^{4k}$ for a given $k$. The answer is yes for $4k = 4, 8, 16$ but seems to be unknown in other dimensions. In dimensions $4$, $8$, and $16$ one can even take $M^{4k}$ to be simply-connected and have the bare minimum of homology: $\mathbb{Z}$'s in dimensions $0$ and $4k$ and a free abelian group in dimension $2k$. In dimension $4$ there are at most two nonhomeomorphic simply-connected closed $4$ manifolds with the same bilinear form. Namely, there are two manifolds with the same form if the square $\alpha \smile \alpha$ of some $\alpha \in H^2(M^4)$ is an odd multiple of a generator of $H^4(M^4)$, for example for $\mathbb{CP}^2$, and otherwise the $M^4$ is unique, for example for $S^4$ or $S^2 \times S^2$; see [Freedman & Quinn 1990]. In §4.C we take the first step in this direction by proving a classical result of J. H. C. Whitehead that the homotopy type of a simply-connected closed $4$ manifold is uniquely determined by its cup product structure.

## Other Forms of Duality

### Manifolds with Boundary

Generalizing the definition of a manifold, an $n$ **manifold with boundary** is a Hausdorff space $M$ in which each point has an open neighborhood homeomorphic either to $\mathbb{R}^n$ or to the half-space $\mathbb{R}^n_+ = \{ (x_1, \cdots, x_n) \in \mathbb{R}^n \mid x_n \geq 0 \}$. If a point $x \in M$ corresponds under such a homeomorphism to a point $(x_1, \cdots, x_n) \in \mathbb{R}^n_+$ with $x_n = 0$, then by excision we have $H_n(M, M -\{x\}; \mathbb{Z}) \approx H_n(\mathbb{R}^n_+, \mathbb{R}^n_+ -\{0\}; \mathbb{Z}) = 0$, whereas if $x$ corresponds to a point $(x_1, \cdots, x_n) \in \mathbb{R}^n_+$ with $x_n > 0$ or to a point of $\mathbb{R}^n$, then $H_n(M, M -\{x\}; \mathbb{Z}) \approx H_n(\mathbb{R}^n, \mathbb{R}^n -\{0\}; \mathbb{Z}) \approx \mathbb{Z}$. Thus the points $x$ with $H_n(M, M -\{x\}; \mathbb{Z}) = 0$ form a well-defined subspace, called the **boundary** of $M$ and denoted $\partial M$. For example, $\partial \mathbb{R}^n_+ = \mathbb{R}^{n-1}$ and $\partial D^n = S^{n-1}$. It is evident that $\partial M$ is an $(n-1)$ dimensional manifold with empty boundary.

If $M$ is a manifold with boundary, then a **collar neighborhood** of $\partial M$ in $M$ is an open neighborhood homeomorphic to $\partial M \times [0, 1)$ by a homeomorphism taking $\partial M$ to $\partial M \times \{0\}$.

> [!proposition] Proposition 3.42
> If $M$ is a compact manifold with boundary, then $\partial M$ has a collar neighborhood.

> [!proof] Proof
> Let $M'$ be $M$ with an external collar attached, the quotient of the disjoint union of $M$ and $\partial M \times [0, 1]$ in which $x \in \partial M$ is identified with $(x, 0) \in \partial M \times [0, 1]$. It will suffice to construct a homeomorphism $h: M \to M'$ since $\partial M'$ clearly has a collar neighborhood.
>
> Since $M$ is compact, so is the closed subspace $\partial M$. This implies that we can choose a finite number of continuous functions $\phi_i: \partial M \to [0, 1]$ such that the sets $V_i = \phi_i^{-1}(0, 1]$ form an open cover of $\partial M$ and each $V_i$ has closure contained in an open set $U_i \subset M$ homeomorphic to the half-space $\mathbb{R}^n_+$. After dividing each $\phi_i$ by $\sum_j \phi_j$ we may assume $\sum_i \phi_i = 1$.
>
> Let $\psi_k = \phi_1 + \cdots + \phi_k$ and let $M_k \subset M'$ be the union of $M$ with the points $(x, t) \in \partial M \times [0, 1]$ with $t \leq \psi_k(x)$. By definition $\psi_0 = 0$ and $M_0 = M$. We construct a homeomorphism $h_k: M_{k-1} \to M_k$ as follows. The homeomorphism $U_k \approx \mathbb{R}^n_+$ gives a collar neighborhood $\partial U_k \times [-1, 0]$ of $\partial U_k$ in $U_k$, with $x \in \partial U_k$ corresponding to $(x, 0) \in \partial U_k \times [-1, 0]$. Via the external collar $\partial M \times [0, 1]$ we then have an embedding $\partial U_k \times [-1, 1] \subset M'$. We define $h_k$ to be the identity outside this $\partial U_k \times [-1, 1]$, and for $x \in \partial U_k$ we let $h_k$ stretch the segment $\{x\} \times [-1, \psi_{k-1}(x)]$ linearly onto $\{x\} \times [-1, \psi_k(x)]$.
>
> The composition of all the $h_k$'s then gives a homeomorphism $M \approx M'$, finishing the proof. $\square$

More generally, collars can be constructed for the boundaries of paracompact manifolds in the same way.

A compact manifold $M$ with boundary is defined to be $R$ **orientable** if $M - \partial M$ is $R$ orientable as a manifold without boundary. If $\partial M \times [0, 1)$ is a collar neighborhood of $\partial M$ in $M$ then $H_i(M, \partial M; R)$ is naturally isomorphic to $H_i(M - \partial M, \partial M \times (0, \varepsilon); R)$, so when $M$ is $R$ orientable, Lemma 3.27 gives a relative fundamental class $[M]$ in $H_n(M, \partial M; R)$ restricting to a given orientation at each point of $M - \partial M$.

It will not be difficult to deduce the following generalization of Poincaré duality to manifolds with boundary from the version we have already proved for noncompact manifolds:

> [!theorem] Theorem 3.43
> Suppose $M$ is a compact $R$ orientable $n$ manifold whose boundary $\partial M$ is decomposed as the union of two compact $(n-1)$ dimensional manifolds $A$ and $B$ with a common boundary $\partial A = \partial B = A \cap B$. Then cap product with a fundamental class $[M] \in H_n(M, \partial M; R)$ gives isomorphisms $D_M: H^k(M, A; R) \to H_{n-k}(M, B; R)$ for all $k$.

The possibility that $A$, $B$, or $A \cap B$ is empty is not excluded. The cases $A = \emptyset$ and $B = \emptyset$ are sometimes called **Lefschetz duality**.

> [!proof] Proof
> The cap product map $D_M: H^k(M, A; R) \to H_{n-k}(M, B; R)$ is defined since the existence of collar neighborhoods of $A \cap B$ in $A$ and $B$ and $\partial M$ in $M$ implies that $A$ and $B$ are deformation retracts of open neighborhoods $U$ and $V$ in $M$ such that $U \cup V$ deformation retracts onto $A \cup B = \partial M$ and $U \cap V$ deformation retracts onto $A \cap B$.
>
> The case $B = \emptyset$ is proved by applying Theorem 3.35 to $M - \partial M$. Via a collar neighborhood of $\partial M$ we see that $H^k(M, \partial M; R) \approx H_c^k(M - \partial M; R)$, and there are obvious isomorphisms $H_{n-k}(M; R) \approx H_{n-k}(M - \partial M; R)$.
>
> The general case reduces to the case $B = \emptyset$ by applying the five-lemma to the following diagram, where coefficients in $R$ are implicit:
>
> ![[50.Image/Tikz/theorem-343-five-lemma.md]]
>
> For commutativity of the middle square one needs to check that the boundary map $H_n(M, \partial M) \to H_{n-1}(\partial M)$ sends a fundamental class for $M$ to a fundamental class for $\partial M$. We leave this as an exercise at the end of the section. $\square$

Here is another kind of duality which generalizes the calculation of the local homology groups $H_i(M, M -\{x\}; \mathbb{Z})$:

> [!theorem] Theorem 3.44
> If $K$ is a compact, locally contractible subspace of a closed orientable $n$ manifold $M$, then $H^i(M, M - K; \mathbb{Z}) \approx H_{n-i}(K; \mathbb{Z})$ for all $i$.

> [!proof] Proof
> Let $U$ be an open neighborhood of $K$ in $M$. Consider the following diagram whose rows are long exact sequences of pairs:
>
> > [!figure]- 🔴 待插入图片：Theorem 3.44 证明中的交换图（p.255）
> > 原书 p.255：两行分别为 $(M, M-K)$ 和 $(M, U)$ 的长正合序列，由 cap product with $[M]$ 联系。第一/第三个竖直箭头由相对 cap product 给出。请从 PDF 截图插入。
>
> The second vertical map is the Poincaré duality isomorphism given by cap products with a fundamental class $[M]$. This class can be represented by a cycle which is the sum of a chain in $M - K$ and a chain in $U$ representing elements of $H_n(M - K, U - K)$ and $H_n(U, U - K)$ respectively, and the first and third vertical maps are given by relative cap products with these classes. It is not hard to check that the diagram commutes up to sign, where for the square involving boundary and coboundary maps one uses the formula for the boundary of a cap product.
>
> Passing to the direct limit over decreasing $U \supset K$, the first vertical arrow becomes the Poincaré duality isomorphism $H^i(M - K) \approx H_{n-i}^c(M - K)$. The five-lemma then gives an isomorphism $H^i(M, M - K) \approx \varinjlim H_{n-i}(U)$. We will show that the natural map from this limit to $H_{n-i}(K)$ is an isomorphism. This is easy when $K$ has a neighborhood that is a mapping cylinder of some map $X \to K$, as in the 'letter examples' at the beginning of Chapter 0, since in this case we can compute the direct limit using neighborhoods $U$ which are segments of the mapping cylinder that deformation retract to $K$.
>
> For the general case we use Theorem A.7 and Corollary A.9 in the Appendix. The latter says that $M$ can be embedded in some $\mathbb{R}^k$ as a retract of a neighborhood $N$ in $\mathbb{R}^k$, and then Theorem A.7 says that $K$ is a retract of a neighborhood in $\mathbb{R}^k$ and hence, by restriction, of a neighborhood $W$ in $M$. We can compute $\varinjlim H_{n-i}(U)$ using just neighborhoods $U$ in $W$, so these also retract to $K$ and hence the map $\varinjlim H_{n-i}(U) \to H_{n-i}(K)$ is surjective. To show that it is injective, note first that the retraction $U \to K$ is homotopic to the identity $U \to U$ through maps $U \to \mathbb{R}^k$, via the standard linear homotopy. Choosing a smaller $U$ if necessary, we may assume this homotopy is through maps $U \to N$ since $K$ is stationary during the homotopy. Applying the retraction $N \to M$ gives a homotopy through maps $U \to M$ fixed on $K$. Restricting to sufficiently small $V \subset U$, we then obtain a homotopy in $U$ from the inclusion map $V \to U$ to the retraction $V \to K$. Thus the map $H_{n-i}(U) \to H_{n-i}(V)$ factors as $H_{n-i}(U) \to H_{n-i}(K) \to H_{n-i}(V)$ where the first map is induced by inclusion and the second by the retraction. This implies that the kernel of $\varinjlim H_{n-i}(U) \to H_{n-i}(K)$ is trivial. $\square$

From this theorem we can easily deduce Alexander duality:

> [!corollary] Corollary 3.45 (Alexander Duality)
> If $K$ is a compact, locally contractible, nonempty, proper subspace of $S^n$, then $\tilde{H}^i(S^n - K; \mathbb{Z}) \approx \tilde{H}_{n-i-1}(K; \mathbb{Z})$ for all $i$.

> [!proof] Proof
> The long exact sequence of reduced homology for the pair $(S^n, S^n - K)$ gives isomorphisms $\tilde{H}^i(S^n - K; \mathbb{Z}) \approx H^{i+1}(S^n, S^n - K; \mathbb{Z})$ for most values of $i$. The exception is when $i = n-1$ and we have only a short exact sequence
> $$0 \longrightarrow \tilde{H}^n(S^n; \mathbb{Z}) \longrightarrow H^n(S^n, S^n - K; \mathbb{Z}) \longrightarrow \tilde{H}^{n-1}(S^n - K; \mathbb{Z}) \longrightarrow 0$$
> where the initial $0$ is $\tilde{H}^n(S^n - K; \mathbb{Z})$ which is zero since the components of $S^n - K$ are noncompact $n$ manifolds. This short exact sequence splits since we can map it to the corresponding sequence with $K$ replaced by a point in $K$. Thus $\tilde{H}^{n-1}(S^n - K; \mathbb{Z})$ is $H^n(S^n, S^n - K; \mathbb{Z})$ with a $\mathbb{Z}$ summand canceled, just as $\tilde{H}_0(K; \mathbb{Z})$ is $H_0(K; \mathbb{Z})$ with a $\mathbb{Z}$ summand canceled. $\square$

The special case of Alexander duality when $K$ is a sphere or disk was treated by more elementary means in Proposition 2B.1. As remarked there, it is interesting that the homology of $S^n - K$ does not depend on the way that $K$ is embedded in $S^n$. There can be local pathologies as in the case of the Alexander horned sphere, or global complications as with knotted circles in $S^3$, but these have no effect on the homology of the complement. The only requirement is that $K$ is not too bad a space itself.

An example where the theorem fails without the local contractibility assumption is the 'quasi-circle', defined in an exercise for §1.3. This compact subspace $K \subset \mathbb{R}^2$ can be regarded as a subspace of $S^2$ by adding a point at infinity. Then we have $\tilde{H}^0(S^2 - K; \mathbb{Z}) \approx \mathbb{Z}$ since $S^2 - K$ has two path-components, but $\tilde{H}_1(K; \mathbb{Z}) = 0$ since $K$ is simply-connected.

> [!corollary] Corollary 3.46
> If $X \subset \mathbb{R}^n$ is compact and locally contractible then $H_i(X; \mathbb{Z})$ is $0$ for $i \geq n$ and torsionfree for $i = n-1$ and $n-2$.

For example, a closed nonorientable $n$ manifold $M$ cannot be embedded as a subspace of $\mathbb{R}^{n+1}$ since $H_{n-1}(M; \mathbb{Z})$ contains a $\mathbb{Z}_2$ subgroup, by Corollary 3.28. Thus the Klein bottle cannot be embedded in $\mathbb{R}^3$. More generally, the $2$ dimensional complex $X_{m,n}$ studied in Example 1.24, the quotient spaces of $S^1 \times I$ under the identifications $(z, 0) \sim (e^{2\pi i/m}z, 0)$ and $(z, 1) \sim (e^{2\pi i/n}z, 1)$, cannot be embedded in $\mathbb{R}^3$ if $m$ and $n$ are not relatively prime, since $H_1(X_{m,n}; \mathbb{Z})$ is $\mathbb{Z} \times \mathbb{Z}_d$ where $d$ is the greatest common divisor of $m$ and $n$. The Klein bottle is the case $m = n = 2$.

> [!proof] Proof of Corollary 3.46
> Viewing $X$ as a subspace of the one-point compactification $S^n$, Alexander duality gives isomorphisms $\tilde{H}^i(X; \mathbb{Z}) \approx \tilde{H}_{n-i-1}(S^n - X; \mathbb{Z})$. The latter group is zero for $i \geq n$ and torsionfree for $i = n-1$, so the result follows from the universal coefficient theorem since $X$ has finitely generated homology groups. $\square$

### Čech Cohomology

There is a way of extending Alexander duality and the duality in Theorem 3.44 to compact sets $K$ that are not locally contractible, by replacing the singular cohomology of $K$ with another kind of cohomology called **Čech cohomology**. This is defined in the following way. To each open cover $\mathcal{U} = \{U_\alpha\}$ of a given space $X$ we can associate a simplicial complex $N(\mathcal{U})$ called the **nerve** of $\mathcal{U}$. This has a vertex $v_\alpha$ for each $U_\alpha$, and a set of $k+1$ vertices spans a $k$ simplex whenever the $k+1$ corresponding $U_\alpha$'s have nonempty intersection. When another cover $\mathcal{V} = \{V_\beta\}$ is a refinement of $\mathcal{U}$, so each $V_\beta$ is contained in some $U_\alpha$, then these inclusions induce a simplicial map $N(\mathcal{V}) \to N(\mathcal{U})$ that is well-defined up to homotopy. We can then form the direct limit $\varinjlim H^i(N(\mathcal{U}); G)$ with respect to finer and finer open covers $\mathcal{U}$. This limit group is by definition the **Čech cohomology** group $\check{H}^i(X; G)$.

For a full exposition of this cohomology theory see [Eilenberg & Steenrod 1952]. With an analogous definition of relative groups, Čech cohomology turns out to satisfy the same axioms as singular cohomology. For spaces homotopy equivalent to CW complexes, Čech cohomology coincides with singular cohomology, but for spaces with local complexities it often behaves more reasonably. For example, if $X$ is the subspace of $\mathbb{R}^3$ consisting of the spheres of radius $1/n$ and center $(1/n, 0, 0)$ for $n = 1, 2, \cdots$, then contrary to what one might expect, $H^3(X; \mathbb{Z})$ is nonzero, as shown in [Barratt & Milnor 1962]. But $\check{H}^3(X; \mathbb{Z}) = 0$ and $\check{H}^2(X; \mathbb{Z}) = \mathbb{Z}^\infty$, the direct sum of countably many copies of $\mathbb{Z}$.

Oddly enough, the corresponding Čech homology groups defined using inverse limits are not so well-behaved. This is because the exactness axiom fails due to the algebraic fact that an inverse limit of exact sequences need not be exact, as a direct limit would be; see §3.F. However, there is a way around this problem using a more refined definition. This is **Steenrod homology** theory, which the reader can learn about in [Milnor 1995].

## Exercises

1. Show that there exist nonorientable $1$ dimensional manifolds if the Hausdorff condition is dropped from the definition of a manifold.

2. Show that deleting a point from a manifold of dimension greater than $1$ does not affect orientability of the manifold.

3. Show that every covering space of an orientable manifold is an orientable manifold.

4. Given a covering space action of a group $G$ on an orientable manifold $M$ by orientation-preserving homeomorphisms, show that $M/G$ is also orientable.

5. Show that $M \times N$ is orientable iff $M$ and $N$ are both orientable.

6. Given two disjoint connected $n$ manifolds $M_1$ and $M_2$, a connected $n$ manifold $M_1 \# M_2$, their **connected sum**, can be constructed by deleting the interiors of closed $n$ balls $B_1 \subset M_1$ and $B_2 \subset M_2$ and identifying the resulting boundary spheres $\partial B_1$ and $\partial B_2$ via some homeomorphism between them. (Assume that each $B_i$ embeds nicely in a larger ball in $M_i$.)
   - (a) Show that if $M_1$ and $M_2$ are closed then there are isomorphisms $H_i(M_1 \# M_2; \mathbb{Z}) \approx H_i(M_1; \mathbb{Z}) \oplus H_i(M_2; \mathbb{Z})$ for $0 < i < n$, with one exception: If both $M_1$ and $M_2$ are nonorientable, then $H_{n-1}(M_1 \# M_2; \mathbb{Z})$ is obtained from $H_{n-1}(M_1; \mathbb{Z}) \oplus H_{n-1}(M_2; \mathbb{Z})$ by replacing one of the two $\mathbb{Z}_2$ summands by a $\mathbb{Z}$ summand. [Euler characteristics may help in the exceptional case.]
   - (b) Show that $\chi(M_1 \# M_2) = \chi(M_1) + \chi(M_2) - \chi(S^n)$ if $M_1$ and $M_2$ are closed.

7. For a map $f: M \to N$ between connected closed orientable $n$ manifolds with fundamental classes $[M]$ and $[N]$, the **degree** of $f$ is defined to be the integer $d$ such that $f_*([M]) = d[N]$, so the sign of the degree depends on the choice of fundamental classes. Show that for any connected closed orientable $n$ manifold $M$ there is a degree $1$ map $M \to S^n$.

8. For a map $f: M \to N$ between connected closed orientable $n$ manifolds, suppose there is a ball $B \subset N$ such that $f^{-1}(B)$ is the disjoint union of balls $B_i$ each mapped homeomorphically by $f$ onto $B$. Show the degree of $f$ is $\sum_i \varepsilon_i$ where $\varepsilon_i$ is $+1$ or $-1$ according to whether $f: B_i \to B$ preserves or reverses local orientations induced from given fundamental classes $[M]$ and $[N]$.

9. Show that a $p$ sheeted covering space projection $M \to N$ has degree $\pm p$, when $M$ and $N$ are connected closed orientable manifolds.

10. Show that for a degree $1$ map $f: M \to N$ of connected closed orientable manifolds, the induced map $f_*: \pi_1 M \to \pi_1 N$ is surjective, hence also $f_*: H_1(M) \to H_1(N)$. [Lift $f$ to the covering space $\widetilde{N} \to N$ corresponding to the subgroup $\operatorname{Im} f_* \subset \pi_1 N$, then consider the two cases that this covering is finite-sheeted or infinite-sheeted.]

11. If $M_g$ denotes the closed orientable surface of genus $g$, show that degree $1$ maps $M_g \to M_h$ exist iff $g \geq h$.

12. As an algebraic application of the preceding problem, show that in a free group $F$ with basis $x_1, \cdots, x_{2k}$, the product of commutators $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}]$ is not equal to a product of fewer than $k$ commutators $[v_i, w_i]$ of elements $v_i, w_i \in F$. [Recall that the $2$ cell of $M_k$ is attached by the product $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}]$. From a relation $[x_1, x_2] \cdots [x_{2k-1}, x_{2k}] = [v_1, w_1] \cdots [v_j, w_j]$ in $F$, construct a degree $1$ map $M_j \to M_k$.]

13. Let $M_h' \subset M_g$ be a compact subsurface of genus $h$ with one boundary circle, so $M_h'$ is homeomorphic to $M_h$ with an open disk removed. Show there is no retraction $M_g \to M_h'$ if $h > g/2$. [Apply the previous problem, using the fact that $M_g - M_h'$ has genus $g - h$.]

14. Let $X$ be the shrinking wedge of circles in Example 1.25, the subspace of $\mathbb{R}^2$ consisting of the circles of radius $1/n$ and center $(1/n, 0)$ for $n = 1, 2, \cdots$.
    - (a) If $f_n: I \to X$ is the loop based at the origin winding once around the $n$th circle, show that the infinite product of commutators $[f_1, f_2][f_3, f_4] \cdots$ defines a loop in $X$ that is nontrivial in $H_1(X)$. [Use Exercise 12.]
    - (b) If we view $X$ as the wedge sum of the subspaces $A$ and $B$ consisting of the odd-numbered and even-numbered circles, respectively, use the same loop to show that the map $H_1(X) \to H_1(A) \oplus H_1(B)$ induced by the retractions of $X$ onto $A$ and $B$ is not an isomorphism.

15. For an $n$ manifold $M$ and a compact subspace $A \subset M$, show that $H_n(M, M - A; R)$ is isomorphic to the group $\Gamma_R(A)$ of sections of the covering space $M_R \to M$ over $A$, that is, maps $A \to M_R$ whose composition with $M_R \to M$ is the identity.

16. Show that $(\alpha \frown \phi) \frown \psi = \alpha \frown (\phi \smile \psi)$ for all $\alpha \in C_k(X; R)$, $\phi \in C^\ell(X; R)$, and $\psi \in C^m(X; R)$. Deduce that cap product makes $H_*(X; R)$ a right $H^*(X; R)$ module.

17. Show that a direct limit of exact sequences is exact. More generally, show that homology commutes with direct limits: If $\{C_\alpha, f_{\alpha\beta}\}$ is a directed system of chain complexes, with the maps $f_{\alpha\beta}: C_\alpha \to C_\beta$ chain maps, then $H_n(\varinjlim C_\alpha) = \varinjlim H_n(C_\alpha)$.

18. Show that a direct limit $\varinjlim G_\alpha$ of torsionfree abelian groups $G_\alpha$ is torsionfree. More generally, show that any finitely generated subgroup of $\varinjlim G_\alpha$ is realized as a subgroup of some $G_\alpha$.

19. Show that a direct limit of countable abelian groups over a countable indexing set is countable. Apply this to show that if $X$ is an open set in $\mathbb{R}^n$ then $H_i(X; \mathbb{Z})$ is countable for all $i$.

20. Show that $H_c^0(X; G) = 0$ if $X$ is path-connected and noncompact.

21. For a space $X$, let $X^+$ be the one-point compactification. If the added point, denoted $\infty$, has a neighborhood in $X^+$ that is a cone with $\infty$ the cone point, show that the evident map $H_c^n(X; G) \to H^n(X^+, \infty; G)$ is an isomorphism for all $n$. [Question: Does this result hold when $X = \mathbb{Z} \times \mathbb{R}$?]

22. Show that $H_c^n(X \times \mathbb{R}; G) \approx H_c^{n-1}(X; G)$ for all $n$.

23. Show that for a locally compact $\Delta$-complex $X$ the simplicial and singular cohomology groups $H_c^i(X; G)$ are isomorphic. This can be done by showing that $\Delta_c^i(X; G)$ is the union of its subgroups $\Delta^i(X, A; G)$ as $A$ ranges over subcomplexes of $X$ that contain all but finitely many simplices, and likewise $C_c^i(X; G)$ is the union of its subgroups $C^i(X, A; G)$ for the same family of subcomplexes $A$.

24. Let $M$ be a closed connected $3$ manifold, and write $H_1(M; \mathbb{Z})$ as $\mathbb{Z}^r \oplus F$, the direct sum of a free abelian group of rank $r$ and a finite group $F$. Show that $H_2(M; \mathbb{Z})$ is $\mathbb{Z}^r$ if $M$ is orientable and $\mathbb{Z}^{r-1} \oplus \mathbb{Z}_2$ if $M$ is nonorientable. In particular, $r \geq 1$ when $M$ is nonorientable. Using Exercise 6, construct examples showing there are no other restrictions on the homology groups of closed $3$ manifolds. [In the nonorientable case consider the manifold $N$ obtained from $S^2 \times I$ by identifying $S^2 \times \{0\}$ with $S^2 \times \{1\}$ via a reflection of $S^2$.]

25. Show that if a closed orientable manifold $M$ of dimension $2k$ has $H_{k-1}(M; \mathbb{Z})$ torsionfree, then $H_k(M; \mathbb{Z})$ is also torsionfree.

26. Compute the cup product structure in $H^*(S^2 \times S^8 \# S^4 \times S^6; \mathbb{Z})$, and in particular show that the only nontrivial cup products are those dictated by Poincaré duality. [See Exercise 6. The result has an evident generalization to connected sums of $S^i \times S^{n-i}$'s for fixed $n$ and varying $i$.]

27. Show that after a suitable change of basis, a skew-symmetric nonsingular bilinear form over $\mathbb{Z}$ can be represented by a matrix consisting of $2 \times 2$ blocks $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ along the diagonal and zeros elsewhere. [For the matrix of a bilinear form, the following operation can be realized by a change of basis: Add an integer multiple of the $i$th row to the $j$th row and add the same integer multiple of the $i$th column to the $j$th column. Use this to fix up each column in turn. Note that a skew-symmetric matrix must have zeros on the diagonal.]

28. Show that a nonsingular symmetric or skew-symmetric bilinear pairing over a field $\mathbb{F}$, of the form $\mathbb{F}^n \times \mathbb{F}^n \to \mathbb{F}$, cannot be identically zero when restricted to all pairs of vectors $v, w$ in a $k$ dimensional subspace $V \subset \mathbb{F}^n$ if $k > n/2$.

29. Use the preceding problem to show that if the closed orientable surface $M_g$ of genus $g$ retracts onto a graph $X \subset M_g$, then $H_1(X)$ has rank at most $g$. Deduce an alternative proof of Exercise 13 from this, and construct a retraction of $M_g$ onto a wedge sum of $k$ circles for each $k \leq g$.

30. Show that the boundary of an $R$ orientable manifold is also $R$ orientable.

31. Show that if $M$ is a compact $R$ orientable $n$ manifold, then the boundary map $H_n(M, \partial M; R) \to H_{n-1}(\partial M; R)$ sends a fundamental class for $(M, \partial M)$ to a fundamental class for $\partial M$.

32. Show that a compact manifold does not retract onto its boundary.

33. Show that if $M$ is a compact contractible $n$ manifold then $\partial M$ is a homology $(n-1)$ sphere, that is, $H_i(\partial M; \mathbb{Z}) \approx H_i(S^{n-1}; \mathbb{Z})$ for all $i$.

34. For a compact manifold $M$ verify that the following diagram relating Poincaré duality for $M$ and $\partial M$ is commutative, up to sign at least:

> [!figure]- 🔴 待插入图片：Exercise 34 交换图（p.260）
> 原书 p.260：一个将 $M$ 和 $\partial M$ 的 Poincaré 对偶联系起来的交换图，涉及 $H^k(M) \to H^k(\partial M) \to H^{k+1}(M, \partial M)$ 和同调对应行。请从 PDF 截图插入。

35. If $M$ is a noncompact $R$ orientable $n$ manifold with boundary $\partial M$ having a collar neighborhood in $M$, show that there are Poincaré duality isomorphisms $H_c^k(M; R) \approx H_{n-k}(M, \partial M; R)$ for all $k$, using the five-lemma and the following diagram:

> [!figure]- 🔴 待插入图片：Exercise 35 交换图（p.259）
> 原书 p.259：非紧流形带边界的 five-lemma 交换图，涉及 $M - \partial M$ 和 collar neighborhood 的 excision 同构。请从 PDF 截图插入。