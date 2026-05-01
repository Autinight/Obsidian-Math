---
title: Hatcher Ch3 3.1 Cohomology Groups
tags:
  - textbook
  - algebraic-topology
source: "[[30.Recources/AT/PDFs/Hatcher - 2002 - Algebraic topology.pdf]]"
section: "Chapter 3, Section 3.1"
date: 2026-05-01
---

# Chapter 3: Cohomology

Cohomology is an algebraic variant of homology, the result of a simple dualization in the definition. Not surprisingly, the cohomology groups $H^i(X)$ satisfy axioms much like the axioms for homology, except that induced homomorphisms go in the opposite direction as a result of the dualization. The basic distinction between homology and cohomology is thus that cohomology groups are **contravariant functors** while homology groups are covariant. In terms of intrinsic information, however, there is not a big difference between homology groups and cohomology groups. The homology groups of a space determine its cohomology groups, and the converse holds at least when the homology groups are finitely generated.

What is a little surprising is that contravariance leads to extra structure in cohomology. This first appears in a natural product, called **cup product**, which makes the cohomology groups of a space into a ring. This is an extremely useful piece of additional structure, and much of this chapter is devoted to studying cup products, which are considerably more subtle than the additive structure of cohomology.

How does contravariance lead to a product in cohomology that is not present in homology? Actually there is a natural product in homology, but it takes the somewhat different form of a map $H_i(X) \times H_j(Y) \to H_{i+j}(X \times Y)$ called the **cross product**. If both $X$ and $Y$ are CW complexes, this cross product in homology is induced from a map of cellular chains sending a pair $(e_i, e_j)$ consisting of a cell of $X$ and a cell of $Y$ to the product cell $e_i \times e_j$ in $X \times Y$. Taking $X = Y$, we thus have the first half of a hypothetical product:

$$H_i(X) \times H_j(X) \to H_{i+j}(X \times X) \to H_{i+j}(X)$$

The difficulty is in defining the second map. The natural thing would be for this to be induced by a map $X \times X \to X$. The multiplication map in a topological group, or more generally an H-space, is such a map, and the resulting **Pontryagin product** can be quite useful when studying these spaces. But for general $X$, the only natural maps $X \times X \to X$ are the projections onto one of the factors, and since these projections collapse the other factor to a point, the resulting product in homology is rather trivial.

With cohomology, however, the situation is better. One still has a cross product

$$H^i(X) \times H^j(Y) \to H^{i+j}(X \times Y)$$

constructed in much the same way as in homology, so one can again take $X = Y$ and get the first half of a product

$$H^i(X) \times H^j(X) \to H^{i+j}(X \times X) \to H^{i+j}(X)$$

But now by contravariance the second map would be induced by a map $X \to X \times X$, and there is an obvious candidate for this map, the **diagonal map** $\Delta(x) = (x, x)$. This turns out to work very nicely, giving a well-behaved product in cohomology, the cup product.

Another sort of extra structure in cohomology whose existence is traceable to contravariance is provided by **cohomology operations**. These make the cohomology groups of a space into a module over a certain rather complicated ring.

The extra layer of algebra in cohomology arising from the dualization in its definition may seem at first to be separating it further from topology, but there are many topological situations where cohomology arises quite naturally. One of these is **Poincaré duality**, the topic of the third section of this chapter. Another is **obstruction theory**, covered in §4.3. Characteristic classes in vector bundle theory provide a further instance.

From the viewpoint of homotopy theory, cohomology is in some ways more basic than homology. As we shall see in §4.3, cohomology has a description in terms of homotopy classes of maps that is very similar to, and in a certain sense dual to, the definition of homotopy groups. There is an analog of this for homology, described in §4.F, but the construction is more complicated.

## The Idea of Cohomology

Let us look at a few low-dimensional examples to get an idea of how one might be led naturally to consider cohomology groups, and to see what properties of a space they might be measuring. For the sake of simplicity we consider simplicial cohomology of $\Delta$-complexes, rather than singular cohomology of more general spaces.

Taking the simplest case first, let $X$ be a 1-dimensional $\Delta$-complex, or in other words an oriented graph. For a fixed abelian group $G$, the set of all functions from vertices of $X$ to $G$ also forms an abelian group, which we denote by $\Delta^0(X; G)$. Similarly the set of all functions assigning an element of $G$ to each edge of $X$ forms an abelian group $\Delta^1(X; G)$. We will be interested in the homomorphism $\delta : \Delta^0(X; G) \to \Delta^1(X; G)$ sending $\varphi \in \Delta^0(X; G)$ to the function $\delta\varphi \in \Delta^1(X; G)$ whose value on an oriented edge $[v_0, v_1]$ is the difference $\varphi(v_1) - \varphi(v_0)$.

For example, $X$ might be the graph formed by a system of trails on a mountain, with vertices at the junctions between trails. The function $\varphi$ could then assign to each junction its elevation above sea level, in which case $\delta\varphi$ would measure the net change in elevation along the trail from one junction to the next. Or $X$ might represent a simple electrical circuit with $\varphi$ measuring voltages at the connection points, the vertices, and $\delta\varphi$ measuring changes in voltage across the components of the circuit, represented by edges.

Regarding the map $\delta : \Delta^0(X; G) \to \Delta^1(X; G)$ as a chain complex with 0's before and after these two terms, the homology groups of this chain complex are by definition the simplicial cohomology groups of $X$, namely $H^0(X; G) = \operatorname{Ker}\delta \subset \Delta^0(X; G)$ and $H^1(X; G) = \Delta^1(X; G) / \operatorname{Im}\delta$.

The group $H^0(X; G)$ is easy to describe explicitly. A function $\varphi \in \Delta^0(X; G)$ has $\delta\varphi = 0$ iff $\varphi$ takes the same value at both ends of each edge of $X$. This is equivalent to saying that $\varphi$ is constant on each component of $X$. So $H^0(X; G)$ is the group of all functions from the set of components of $X$ to $G$. This is a direct product of copies of $G$, one for each component of $X$.

The cohomology group $H^1(X; G) = \Delta^1(X; G) / \operatorname{Im}\delta$ will be trivial iff the equation $\delta\varphi = \psi$ has a solution $\varphi \in \Delta^0(X; G)$ for each $\psi \in \Delta^1(X; G)$. Solving this equation means deciding whether specifying the change in $\varphi$ across each edge of $X$ determines an actual function $\varphi \in \Delta^0(X; G)$. This is rather like the calculus problem of finding a function having a specified derivative, with the difference operator $\delta$ playing the role of differentiation.

The equation $\delta\varphi = \psi$ is always solvable if $X$ is a tree since if we choose arbitrarily a value for $\varphi$ at a basepoint vertex $v_0$, then if the change in $\varphi$ across each edge of $X$ is specified, this uniquely determines the value of $\varphi$ at every other vertex $v$ by induction along the unique path from $v_0$ to $v$ in the tree. When $X$ is not a tree, we first choose a maximal tree in each component of $X$. The cohomology group $H^1(X; G)$ is a direct product of copies of the group $G$, one copy for each edge of $X$ not in one of the chosen maximal trees. This can be compared with the homology group $H_1(X; G)$ which consists of a direct sum of copies of $G$, one for each edge of $X$ not in one of the maximal trees.

Note that the relation between $H^1(X; G)$ and $H_1(X; G)$ is the same as the relation between $H^0(X; G)$ and $H_0(X; G)$, with $H^0(X; G)$ being a direct product of copies of $G$ and $H_0(X; G)$ a direct sum, with one copy for each component of $X$ in either case.

Now let us move up a dimension, taking $X$ to be a 2-dimensional $\Delta$-complex. Define $\Delta^0(X; G)$ and $\Delta^1(X; G)$ as before, as functions from vertices and edges of $X$ to the abelian group $G$, and define $\Delta^2(X; G)$ to be the functions from 2-simplices of $X$ to $G$. A homomorphism $\delta : \Delta^1(X; G) \to \Delta^2(X; G)$ is defined by:

$$\delta\psi([v_0, v_1, v_2]) = \psi([v_0, v_1]) + \psi([v_1, v_2]) - \psi([v_0, v_2])$$

a signed sum of the values of $\psi$ on the three edges in the boundary of $[v_0, v_1, v_2]$. The two homomorphisms

$$\Delta^0(X; G) \xrightarrow{\delta} \Delta^1(X; G) \xrightarrow{\delta} \Delta^2(X; G)$$

form a chain complex since for $\varphi \in \Delta^0(X; G)$ we have $\delta\delta\varphi = (\varphi(v_1) - \varphi(v_0)) + (\varphi(v_2) - \varphi(v_1)) - (\varphi(v_2) - \varphi(v_0)) = 0$.

The formula for the map $\delta : \Delta^1(X; G) \to \Delta^2(X; G)$ can be looked at from several different viewpoints. Perhaps the simplest is the observation that $\delta\psi = 0$ iff $\psi$ satisfies the additivity property $\psi([v_0, v_2]) = \psi([v_0, v_1]) + \psi([v_1, v_2])$. Thus $\delta\psi$ measures the deviation of $\psi$ from being additive.

The condition $\delta\psi = 0$ has an interpretation of a more geometric nature when $X$ is a surface and the group $G$ is $\mathbb{Z}$ or $\mathbb{Z}_2$. Consider first the simpler case $G = \mathbb{Z}_2$. The condition $\delta\psi = 0$ means that the number of times that $\psi$ takes the value 1 on the edges of each 2-simplex is even, either 0 or 2. This means we can associate to $\psi$ a collection $C_\psi$ of disjoint curves in $X$ crossing the 1-skeleton transversely, such that the number of intersections of $C_\psi$ with each edge is equal to the value of $\psi$ on that edge. If $\psi = \delta\varphi$ for some $\varphi$, then the curves of $C_\psi$ divide $X$ into two regions $X_0$ and $X_1$ where the subscript indicates the value of $\varphi$ on all vertices in the region.

When $G = \mathbb{Z}$ we can refine this construction by building $C_\psi$ from a number of arcs in each 2-simplex, each arc having a transverse orientation, the orientation which agrees or disagrees with the orientation of each edge according to the sign of the value of $\psi$ on the edge. The resulting collection $C_\psi$ of disjoint curves in $X$ can be thought of as something like level curves for a function $\varphi$ with $\delta\varphi = \psi$, if such a function exists. The value of $\varphi$ changes by 1 each time a curve of $C_\psi$ is crossed.

For example, if $X$ is a disk then we will show that $H^1(X; \mathbb{Z}) = 0$, so $\delta\psi = 0$ implies $\psi = \delta\varphi$ for some $\varphi$, hence every transverse curve system $C_\psi$ forms the level curves of a function $\varphi$. On the other hand, if $X$ is an annulus then this need no longer be true, as illustrated by an example where the equation $\psi = \delta\varphi$ obviously has no solution even though $\delta\psi = 0$. By identifying the inner and outer boundary circles of this annulus we obtain a similar example on the torus. Even with $G = \mathbb{Z}_2$ the equation $\psi = \delta\varphi$ has no solution since the curve $C_\psi$ does not separate $X$ into two regions $X_0$ and $X_1$.

From another point of view, $\delta\psi$ can be regarded as an obstruction to finding $\varphi \in \Delta^0(X; G)$ with $\psi = \delta\varphi$, for if $\psi = \delta\varphi$ then $\delta\psi = 0$ since $\delta\delta\varphi = 0$. We can think of $\delta\psi$ as a **local obstruction** to solving $\psi = \delta\varphi$ since it depends only on the values of $\psi$ within individual 2-simplices of $X$. If this local obstruction vanishes, then $\psi$ defines an element of $H^1(X; G)$ which is zero iff $\psi = \delta\varphi$ has an actual solution. This class in $H^1(X; G)$ is thus the **global obstruction** to solving $\psi = \delta\varphi$.

The key to relating cohomology groups to homology groups is the observation that a function from $i$-simplices of $X$ to $G$ is equivalent to a homomorphism from the simplicial chain group $\Delta_i(X)$ to $G$. Thus we have an identification of $\Delta^i(X; G)$ with the group $\operatorname{Hom}(\Delta_i(X), G)$ of homomorphisms $\Delta_i(X) \to G$, which is called the **dual group** of $\Delta_i(X)$. The general formula for $\delta$ is:

$$\delta\varphi([v_0, \ldots, v_{i+1}]) = \sum_j (-1)^j \varphi([v_0, \ldots, \widehat{v_j}, \ldots, v_{i+1}])$$

and the latter sum is just $\varphi(\partial[v_0, \ldots, v_{i+1}])$. Thus we have $\delta\varphi = \varphi\partial$. In other words, $\delta$ sends each $\varphi \in \operatorname{Hom}(\Delta_i(X), G)$ to the composition:

$$\Delta_{i+1}(X) \xrightarrow{\partial} \Delta_i(X) \xrightarrow{\varphi} G$$

which in the language of linear algebra means that $\delta$ is the dual map of $\partial$.

Thus we have the algebraic problem of understanding the relationship between the homology groups of a chain complex and the homology groups of the dual complex obtained by applying the functor $C \mapsto \operatorname{Hom}(C, G)$. This is the first topic of the chapter.

## Section 3.1: Cohomology Groups

### The Universal Coefficient Theorem

Homology groups $H_n(X)$ are the result of a two-stage process: First one forms a chain complex

$$\cdots \to C_{n+1} \xrightarrow{\partial} C_n \xrightarrow{\partial} C_{n-1} \to \cdots$$

of singular, simplicial, or cellular chains, then one takes the homology groups of this chain complex, $\operatorname{Ker}\partial / \operatorname{Im}\partial$. To obtain the cohomology groups $H^n(X; G)$ we interpolate an intermediate step, replacing the chain groups $C_n$ by the dual groups $\operatorname{Hom}(C_n, G)$ and the boundary maps $\partial$ by their dual maps $\delta$, before forming the cohomology groups $\operatorname{Ker}\delta / \operatorname{Im}\delta$. The plan for this section is first to sort out the algebra of this dualization process and show that the cohomology groups are determined algebraically by the homology groups, though in a somewhat subtle way. Then after this algebraic excursion we will define the cohomology groups of spaces and show that these satisfy basic properties very much like those for homology. The payoff for all this formal work will begin to be apparent in subsequent sections.

Let us begin with a simple example. Consider the chain complex:

$$\cdots \to 0 \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to 0 \to \mathbb{Z} \to 0 \to \cdots$$

where $\mathbb{Z} \xrightarrow{2} \mathbb{Z}$ is the map $x \mapsto 2x$. If we dualize by taking $\operatorname{Hom}(-, G)$ with $G = \mathbb{Z}$, we obtain the cochain complex:

$$\cdots \leftarrow 0 \leftarrow \mathbb{Z} \xleftarrow{2} \mathbb{Z} \leftarrow 0 \leftarrow \mathbb{Z} \leftarrow 0 \leftarrow \cdots$$

In the original chain complex the homology groups are $\mathbb{Z}$'s in dimensions 0 and 3, together with a $\mathbb{Z}_2$ in dimension 1. The homology groups of the dual cochain complex, which are called cohomology groups to emphasize the dualization, are again $\mathbb{Z}$'s in dimensions 0 and 3, but the $\mathbb{Z}_2$ in the 1-dimensional homology of the original complex has shifted up a dimension to become a $\mathbb{Z}_2$ in 2-dimensional cohomology.

More generally, consider any chain complex of finitely generated free abelian groups. Such a chain complex always splits as the direct sum of elementary complexes of the forms $0 \to \mathbb{Z} \to 0$ and $0 \to \mathbb{Z} \xrightarrow{m} \mathbb{Z} \to 0$, according to Exercise 43 in §2.2. Applying $\operatorname{Hom}(-, \mathbb{Z})$ to this direct sum of elementary complexes, we obtain the direct sum of the corresponding dual complexes $0 \leftarrow \mathbb{Z} \leftarrow 0$ and $0 \leftarrow \mathbb{Z} \xleftarrow{m} \mathbb{Z} \leftarrow 0$. Thus the cohomology groups are the same as the homology groups except that **torsion is shifted up one dimension**. We will see later in this section that the same relation between homology and cohomology holds whenever the homology groups are finitely generated, even when the chain groups are not finitely generated. It would also be quite easy to see in this example what happens if $\operatorname{Hom}(-, \mathbb{Z})$ is replaced by $\operatorname{Hom}(-, G)$, since the dual elementary cochain complexes would then be $0 \leftarrow G \leftarrow 0$ and $0 \leftarrow G \xleftarrow{m} G \leftarrow 0$.

Consider now a completely general chain complex $C$ of free abelian groups:

$$\cdots \to C_{n+1} \xrightarrow{\partial} C_n \xrightarrow{\partial} C_{n-1} \to \cdots$$

To dualize this complex we replace each chain group $C_n$ by its dual cochain group $C_n^* = \operatorname{Hom}(C_n, G)$, and we replace each boundary map $\partial : C_n \to C_{n-1}$ by its dual coboundary map $\delta = \partial^* : C_{n-1}^* \to C_n^*$.

> [!note] Dual Homomorphism
> For a homomorphism $\alpha : A \to B$, the dual homomorphism $\alpha^* : \operatorname{Hom}(B, G) \to \operatorname{Hom}(A, G)$ is defined by $\alpha^*(\varphi) = \varphi\alpha$, so $\alpha^*$ sends $B \xrightarrow{\varphi} G$ to the composition $A \xrightarrow{\alpha} B \xrightarrow{\varphi} G$. Dual homomorphisms obviously satisfy $(\alpha\beta)^* = \beta^*\alpha^*$, $1_1^* = 1_1$, and $0^* = 0$.

Since $\partial\partial = 0$ it follows that $\delta\delta = 0$, and the cohomology group $H^n(C; G)$ can be defined as the "homology group" $\operatorname{Ker}\delta / \operatorname{Im}\delta$ at $C_n^*$ in the cochain complex:

$$\cdots \leftarrow C_{n+1}^* \xleftarrow{\delta} C_n^* \xleftarrow{\delta} C_{n-1}^* \leftarrow \cdots$$

Our goal is to show that the cohomology groups $H^n(C; G)$ are determined solely by $G$ and the homology groups $H_n(C) = \operatorname{Ker}\partial / \operatorname{Im}\partial$.

There is a natural map $h : H^n(C; G) \to \operatorname{Hom}(H_n(C), G)$, defined as follows. A class in $H^n(C; G)$ is represented by a homomorphism $\varphi : C_n \to G$ such that $\delta\varphi = 0$, that is, $\varphi\partial = 0$, or in other words, $\varphi$ vanishes on $B_n$. The restriction $\varphi_0 = \varphi|_{Z_n}$ then induces a quotient homomorphism $\bar{\varphi}_0 : Z_n/B_n \to G$, an element of $\operatorname{Hom}(H_n(C), G)$. Thus there is a well-defined quotient map $h : H^n(C; G) \to \operatorname{Hom}(H_n(C), G)$ sending the cohomology class of $\varphi$ to $\bar{\varphi}_0$.

It is not hard to see that $h$ is surjective. The short exact sequence

$$0 \to Z_n \to C_n \xrightarrow{\partial} B_{n-1} \to 0$$

splits since $B_{n-1}$ is free. Thus there is a projection homomorphism $p : C_n \to Z_n$ that restricts to the identity on $Z_n$. This extends homomorphisms $H_n(C) \to G$ to elements of $\operatorname{Ker}\delta$, giving a split short exact sequence:

$$0 \to \operatorname{Ker}h \to H^n(C; G) \xrightarrow{h} \operatorname{Hom}(H_n(C), G) \to 0$$

The remaining task is to analyze $\operatorname{Ker}h$. A convenient way to start is to consider not just the chain complex $C$, but also its subcomplexes consisting of the cycles and the boundaries. Thus we consider the commutative diagram of short exact sequences (i), where the vertical boundary maps on $Z_{n+1}$ and $B_n$ are zero. Dualizing gives a commutative diagram (ii). The rows are exact since the rows of (i) split.

We may view (ii) as part of a short exact sequence of chain complexes. Since the coboundary maps in the $Z_n^*$ and $B_n^*$ complexes are zero, the associated long exact sequence of homology groups has the form:

$$\cdots \leftarrow B_n^* \leftarrow Z_n^* \leftarrow H^n(C; G) \leftarrow B_{n-1}^* \leftarrow Z_{n-1}^* \leftarrow \cdots$$

The "boundary maps" $Z_n^* \to B_n^*$ in this long exact sequence are the dual maps $i_n^*$ of the inclusions $i_n : B_n \hookrightarrow Z_n$. Doing this yields short exact sequences:

$$0 \leftarrow \operatorname{Ker}i_n^* \leftarrow H^n(C; G) \leftarrow \operatorname{Coker}i_{n-1}^* \leftarrow 0$$

Under the identification of $\operatorname{Ker}i_n^*$ with $\operatorname{Hom}(H_n(C), G)$, the map $H^n(C; G) \to \operatorname{Ker}i_n^*$ becomes the map $h$ considered earlier. Thus we can rewrite as a split short exact sequence:

$$0 \to \operatorname{Coker}i_{n-1}^* \to H^n(C; G) \xrightarrow{h} \operatorname{Hom}(H_n(C), G) \to 0$$

Our objective now is to show that the more mysterious term $\operatorname{Coker}i_{n-1}^*$ depends only on $H_{n-1}(C)$ and $G$, in a natural, functorial way. First let us observe that $\operatorname{Coker}i_{n-1}^*$ would be zero if it were always true that the dual of a short exact sequence was exact, since the dual of the short exact sequence

$$0 \to B_{n-1} \xrightarrow{i_{n-1}} Z_{n-1} \to H_{n-1}(C) \to 0 \tag{vi}$$

is the sequence

$$0 \leftarrow B_{n-1}^* \xleftarrow{i_{n-1}^*} Z_{n-1}^* \leftarrow H_{n-1}(C)^* \leftarrow 0 \tag{vii}$$

and if this were exact at $B_{n-1}^*$, then $i_{n-1}^*$ would be surjective, hence $\operatorname{Coker}i_{n-1}^*$ would be zero. This argument does apply if $H_{n-1}(C)$ happens to be free, since (vi) splits in this case, which implies that (vii) is also split exact. So in this case the map $h$ in (v) is an isomorphism. However, in the general case it is easy to find short exact sequences whose duals are not exact. For example, if we dualize $0 \to \mathbb{Z} \xrightarrow{n} \mathbb{Z} \to \mathbb{Z}_n \to 0$ by applying $\operatorname{Hom}(-, \mathbb{Z})$ we get $0 \leftarrow \mathbb{Z} \xleftarrow{n} \mathbb{Z} \leftarrow 0 \leftarrow 0$ which fails to be exact at the left-hand $\mathbb{Z}$, precisely the place we are interested in for $\operatorname{Coker}i_{n-1}^*$.

> [!note] Dual Exactness Exercise
> We might mention in passing that the loss of exactness at the left end of a short exact sequence after dualization is in fact all that goes wrong, in view of the following:
>
> **Exercise**: If $A \to B \to C \to 0$ is exact, then dualizing by applying $\operatorname{Hom}(-, G)$ yields an exact sequence $A^* \leftarrow B^* \leftarrow C^* \leftarrow 0$.
>
> However, we will not need this fact in what follows.

The exact sequence (vi) above

has the special feature that both $B_{n-1}$ and $Z_{n-1}$ are free, so it can be regarded as a **free resolution** of $H_{n-1}(C)$, where a free resolution of an abelian group $H$ is an exact sequence:

$$\cdots \to F_2 \xrightarrow{f_2} F_1 \xrightarrow{f_1} F_0 \xrightarrow{f_0} H \to 0$$

with each $F_n$ free. If we dualize this free resolution by applying $\operatorname{Hom}(-, G)$, we may lose exactness, but at least we get a cochain complex. Let us use the temporary notation $H^n(F; G)$ for the homology group $\operatorname{Ker}f_{n+1}^* / \operatorname{Im}f_n^*$ of this dual complex. Note that the group $\operatorname{Coker}i_{n-1}^*$ that we are interested in is $H^1(F; G)$ where $F$ is the free resolution above.

> [!theorem] Lemma 3.1
> (a) Given free resolutions $F$ and $F'$ of abelian groups $H$ and $H'$, then every homomorphism $\alpha : H \to H'$ can be extended to a chain map from $F$ to $F'$. Furthermore, any two such chain maps extending $\alpha$ are chain homotopic.
>
> (b) For any two free resolutions $F$ and $F'$ of $H$, there are canonical isomorphisms $H^n(F; G) \cong H^n(F'; G)$ for all $n.

> [!proof] Proof of Lemma 3.1
> The $\alpha_i$'s will be constructed inductively. Since the $F_i$'s are free, it suffices to define each $\alpha_i$ on a basis for $F_i$. To define $\alpha_0$, observe that surjectivity of $f'_0$ implies that for each basis element $x$ of $F_0$ there exists $x' \in F'_0$ such that $f'_0(x') = \alpha f_0(x)$, so we define $\alpha_0(x) = x'$. We would like to define $\alpha_1$ in the same way, sending a basis element $x \in F_1$ to an element $x' \in F'_1$ such that $f'_1(x') = \alpha_0 f_1(x)$. Such an $x'$ will exist if $\alpha_0 f_1(x)$ lies in $\operatorname{Im}f'_1 = \operatorname{Ker}f'_0$, which it does since $f'_0 \alpha_0 f_1 = \alpha f_0 f_1 = 0$. The same procedure defines all the subsequent $\alpha_i$'s.
>
> If we have another chain map extending $\alpha$ given by maps $\alpha'_i : F_i \to F'_i$, then the differences $\beta_i = \alpha_i - \alpha'_i$ define a chain map extending the zero map $\beta : H \to H'$. It will suffice to construct maps $\lambda_i : F_i \to F'_{i+1}$ defining a chain homotopy from $\beta_i$ to 0, that is, with $\beta_i = f'_{i+1}\lambda_i + \lambda_{i-1}f_i$. The $\lambda_i$'s are constructed inductively by a procedure much like the construction of the $\alpha_i$'s.
>
> For part (b), the maps $\alpha_n$ constructed in (a) dualize to maps $\alpha_n^* : F'^*_n \to F^*_n$ forming a chain map between the dual complexes $F'^*$ and $F^*$. Therefore we have induced homomorphisms on cohomology $\alpha^* : H^n(F'; G) \to H^n(F; G)$. These do not depend on the choice of $\alpha_n$'s since any other choices $\alpha'_n$ are chain homotopic. Taking $\alpha$ to be the identity with two different free resolutions $F$ and $F'$, we get a canonical isomorphism $1_1^* : H^n(F'; G) \to H^n(F; G)$. $\square$

Every abelian group $H$ has a free resolution of the form $0 \to F_1 \to F_0 \to H \to 0$, with $F_i = 0$ for $i > 1$. For this free resolution we obviously have $H^n(F; G) = 0$ for $n > 1$, so this must also be true for all free resolutions. Thus the only interesting group $H^n(F; G)$ is $H^1(F; G)$. The standard notation for it is $\operatorname{Ext}(H, G)$. This notation arises from the fact that $\operatorname{Ext}(H, G)$ has an interpretation as the set of isomorphism classes of extensions of $G$ by $H$, that is, short exact sequences $0 \to G \to J \to H \to 0$.

> [!theorem] Theorem 3.2 (Universal Coefficient Theorem for Cohomology)
> If a chain complex $C$ of free abelian groups has homology groups $H_n(C)$, then the cohomology groups $H^n(C; G)$ of the cochain complex $\operatorname{Hom}(C_n, G)$ are determined by split exact sequences:
>
> $$0 \to \operatorname{Ext}(H_{n-1}(C), G) \to H^n(C; G) \xrightarrow{h} \operatorname{Hom}(H_n(C), G) \to 0$$

Computing $\operatorname{Ext}(H, G)$ for finitely generated $H$ is not difficult using the following three properties:

1. $\operatorname{Ext}(H \oplus H', G) \cong \operatorname{Ext}(H, G) \oplus \operatorname{Ext}(H', G)$
2. $\operatorname{Ext}(H, G) = 0$ if $H$ is free
3. $\operatorname{Ext}(\mathbb{Z}_n, G) \cong G/nG$

The first of these can be obtained by using the direct sum of free resolutions of $H$ and $H'$ as a free resolution for $H \oplus H'$. If $H$ is free, the free resolution $0 \to H \to H \to 0$ yields the second property, while the third comes from dualizing the free resolution $0 \to \mathbb{Z} \xrightarrow{n} \mathbb{Z} \to \mathbb{Z}_n \to 0$ to produce an exact sequence $0 \leftarrow G \xleftarrow{n} G \leftarrow 0$. In particular, these three properties imply that $\operatorname{Ext}(H, \mathbb{Z})$ is isomorphic to the **torsion subgroup** of $H$ if $H$ is finitely generated. Since $\operatorname{Hom}(H, \mathbb{Z})$ is isomorphic to the free part of $H$ if $H$ is finitely generated, we have:

> [!corollary] Corollary 3.3
> If the homology groups $H_n$ and $H_{n-1}$ of a chain complex $C$ of free abelian groups are finitely generated, with torsion subgroups $T_n \subset H_n$ and $T_{n-1} \subset H_{n-1}$, then:
>
> $$H^n(C; \mathbb{Z}) \cong (H_n/T_n) \oplus T_{n-1}$$

It is useful in many situations to know that the short exact sequences in the universal coefficient theorem are **natural**, meaning that a chain map $\alpha$ between chain complexes $C$ and $C'$ of free abelian groups induces a commutative diagram:

$$\begin{CD}
0 @>>> \operatorname{Ext}(H_{n-1}(C), G) @>>> H^n(C; G) @>{h}>> \operatorname{Hom}(H_n(C), G) @>>> 0 \\
@. @V{}VV @V{}VV @V{}VV @. \\
0 @>>> \operatorname{Ext}(H_{n-1}(C'), G) @>>> H^n(C'; G) @>{h}>> \operatorname{Hom}(H_n(C'), G) @>>> 0
\end{CD}$$

This is apparent if one just thinks about the construction; one obviously obtains a map between the short exact sequences containing $\operatorname{Ker}i_n^*$ and $\operatorname{Coker}i_{n-1}^*$, the identification $\operatorname{Ker}i_n^* = \operatorname{Hom}(H_n(C), G)$ is certainly natural, and the proof of Lemma 3.1 shows that $\operatorname{Ext}(H, G)$ depends naturally on $H$.

However, the splitting in the universal coefficient theorem is **not natural** since it depends on the choice of the projections $p : C_n \to Z_n$. An exercise at the end of the section gives a topological example showing that the splitting in fact cannot be natural.

The naturality property together with the five-lemma proves:

> [!corollary] Corollary 3.4
> If a chain map between chain complexes of free abelian groups induces an isomorphism on homology groups, then it induces an isomorphism on cohomology groups with any coefficient group $G$.

One could attempt to generalize the algebraic machinery by replacing abelian groups by modules over a chosen ring $R$ and $\operatorname{Hom}$ by $\operatorname{Hom}_R$. If $R$ is a principal ideal domain, one obtains natural split short exact sequences:

$$0 \to \operatorname{Ext}_R(H_{n-1}(C), G) \to H^n(C; G) \xrightarrow{h} \operatorname{Hom}_R(H_n(C), G) \to 0$$

If $R$ is a field, then $R$-modules are always free and so the $\operatorname{Ext}_R$ term is always zero. The proof of Lemma 3.1 on the uniqueness of free resolutions is valid for modules over an arbitrary ring $R$. Moreover, every $R$-module $H$ has a free resolution, which can be constructed in the following way. Choose a set of generators for $H$ as an $R$-module, and let $F_0$ be a free $R$-module with basis in one-to-one correspondence with these generators. Thus we have a surjective homomorphism $f_0 : F_0 \to H$ sending the basis elements to the chosen generators. Now repeat the process with $\operatorname{Ker}f_0$ in place of $H$, constructing a homomorphism $f_1 : F_1 \to F_0$ sending a basis for a free $R$-module $F_1$ onto generators for $\operatorname{Ker}f_0$. And inductively, construct $f_n : F_n \to F_{n-1}$ with image equal to $\operatorname{Ker}f_{n-1}$ by the same procedure.

By Lemma 3.1 the groups $H^n(F; G)$ depend only on $H$ and $G$, not on the free resolution $F$. The standard notation for $H^n(F; G)$ is $\operatorname{Ext}^n_R(H, G)$. For sufficiently complicated rings $R$ the groups $\operatorname{Ext}^n_R(H, G)$ can be nonzero for $n > 1$. In certain more advanced topics in algebraic topology these $\operatorname{Ext}^n_R$ groups play an essential role.

A final remark about the definition of $\operatorname{Ext}^n_R(H, G)$: By the Exercise stated earlier, exactness of $F_1 \to F_0 \to H \to 0$ implies exactness of $F_1^* \leftarrow F_0^* \leftarrow H^* \leftarrow 0$. This means that $H^0(F; G)$ as defined above is zero. Rather than having $\operatorname{Ext}^0_R(H, G)$ be automatically zero, it is better to define $H^n(F; G)$ as the $n$th homology group of the complex $\cdots \leftarrow F_1^* \leftarrow F_0^* \leftarrow 0$ with the term $H^*$ omitted. This can be viewed as defining the groups $H^n(F; G)$ to be **unreduced** cohomology groups. With this slightly modified definition we have:

$$\operatorname{Ext}^0_R(H, G) = H^0(F; G) = H^* = \operatorname{Hom}_R(H, G)$$

by the exactness of $F_1^* \leftarrow F_0^* \leftarrow H^* \leftarrow 0$. The real reason why unreduced Ext groups are better than reduced groups is perhaps to be found in certain exact sequences involving Ext and Hom derived in §3.F, which would not work with the Hom terms replaced by zeros.

### Cohomology of Spaces

Now we return to topology. Given a space $X$ and an abelian group $G$, we define the group $C^n(X; G)$ of singular $n$-cochains with coefficients in $G$ to be the dual group $\operatorname{Hom}(C_n(X), G)$ of the singular chain group $C_n(X)$. Thus an $n$-cochain $\varphi \in C^n(X; G)$ assigns to each singular $n$-simplex $\sigma : \Delta^n \to X$ a value $\varphi(\sigma) \in G$.

The coboundary map $\delta : C^n(X; G) \to C^{n+1}(X; G)$ is the dual $\partial^*$, so for a cochain $\varphi \in C^n(X; G)$, its coboundary $\delta\varphi$ is the composition:

$$C_{n+1}(X) \xrightarrow{\partial} C_n(X) \xrightarrow{\varphi} G$$

This means that for a singular $(n+1)$-simplex $\sigma : \Delta^{n+1} \to X$ we have:

$$\delta\varphi(\sigma) = \sum_i (-1)^i \varphi(\sigma|_{[v_0, \ldots, \widehat{v_i}, \ldots, v_{n+1}]})$$

It is automatic that $\delta^2 = 0$ since $\delta^2$ is the dual of $\partial^2 = 0$. Therefore we can define the **cohomology group** $H^n(X; G)$ with coefficients in $G$ to be the quotient $\operatorname{Ker}\delta / \operatorname{Im}\delta$ at $C^n(X; G)$ in the cochain complex:

$$\cdots \leftarrow C^{n+1}(X; G) \xleftarrow{\delta} C^n(X; G) \xleftarrow{\delta} C^{n-1}(X; G) \leftarrow \cdots \leftarrow C^0(X; G) \leftarrow 0$$

Elements of $\operatorname{Ker}\delta$ are **cocycles**, and elements of $\operatorname{Im}\delta$ are **coboundaries**.

Since the chain groups $C_n(X)$ are free, the algebraic universal coefficient theorem takes on the topological guise of split short exact sequences:

$$0 \to \operatorname{Ext}(H_{n-1}(X), G) \to H^n(X; G) \to \operatorname{Hom}(H_n(X), G) \to 0$$

which describe how cohomology groups with arbitrary coefficients are determined purely algebraically by homology groups with $\mathbb{Z}$ coefficients. For example, if the homology groups of $X$ are finitely generated then Corollary 3.3 tells how to compute the cohomology groups $H^n(X; \mathbb{Z})$ from the homology groups.

When $n = 0$ there is no $\operatorname{Ext}$ term, and the universal coefficient theorem reduces to an isomorphism $H^0(X; G) \cong \operatorname{Hom}(H_0(X), G)$. This can also be seen directly from the definitions. Since singular 0-simplices are just points of $X$, a cochain in $C^0(X; G)$ is an arbitrary function $\varphi : X \to G$, not necessarily continuous. For this to be a cocycle means that $\varphi$ is constant on path-components of $X$. Thus $H^0(X; G)$ is all the functions from path-components of $X$ to $G$.

Likewise in the case of $H^1(X; G)$ the universal coefficient theorem gives an isomorphism $H^1(X; G) \cong \operatorname{Hom}(H_1(X), G)$ since $\operatorname{Ext}(H_0(X), G) = 0$, the group $H_0(X)$ being free. If $X$ is path-connected, $H_1(X)$ is the abelianization of $\pi_1(X)$ and we can identify $\operatorname{Hom}(H_1(X), G)$ with $\operatorname{Hom}(\pi_1(X), G)$ since $G$ is abelian.

The universal coefficient theorem has a simpler form if we take coefficients in a field $F$ for both homology and cohomology. In the generalization of the universal coefficient theorem to the case of modules over a principal ideal domain, the $\operatorname{Ext}_F$ terms vanish since $F$ is a field, so we obtain isomorphisms:

$$H^n(X; F) \cong \operatorname{Hom}_F(H_n(X; F), F)$$

Thus, with field coefficients, **cohomology is the exact dual of homology**.

For the remainder of this section we will go through the main features of singular homology and check that they extend without much difficulty to cohomology.

#### Reduced Groups

Reduced cohomology groups $\tilde{H}^n(X; G)$ can be defined by dualizing the augmented chain complex $\cdots \to C_0(X) \xrightarrow{\varepsilon} \mathbb{Z} \to 0$, then taking $\operatorname{Ker}/\operatorname{Im}$. As with homology, this gives $\tilde{H}^n(X; G) = H^n(X; G)$ for $n > 0$, and the universal coefficient theorem identifies $\tilde{H}^0(X; G)$ with $\operatorname{Hom}(\tilde{H}_0(X), G)$.

We can describe the difference between $\tilde{H}^0(X; G)$ and $H^0(X; G)$ more explicitly. The augmentation map $\varepsilon : C_0(X) \to \mathbb{Z}$ sends each singular 0-simplex $\sigma$ to 1, so the dual map $\varepsilon^*$ sends a homomorphism $\varphi : \mathbb{Z} \to G$ to the composition $C_0(X) \xrightarrow{\varepsilon} \mathbb{Z} \xrightarrow{\varphi} G$, which is the function $\sigma \mapsto \varphi(1)$. This is a constant function $X \to G$. Thus $\tilde{H}^0(X; G)$ is all functions $X \to G$ that are constant on path-components modulo the functions that are constant on all of $X$.

#### Relative Groups and the Long Exact Sequence of a Pair

To define relative groups $H^n(X, A; G)$ for a pair $(X, A)$ we first dualize the short exact sequence:

$$0 \to C_n(A) \xrightarrow{i} C_n(X) \xrightarrow{j} C_n(X, A) \to 0$$

by applying $\operatorname{Hom}(-, G)$ to get:

$$0 \leftarrow C^n(A; G) \xleftarrow{i^*} C^n(X; G) \xleftarrow{j^*} C^n(X, A; G) \leftarrow 0$$

where by definition $C^n(X, A; G) = \operatorname{Hom}(C_n(X, A), G)$. The map $i^*$ restricts a cochain on $X$ to a cochain on $A$. We can view $C^n(X, A; G)$ as the functions from singular $n$-simplices in $X$ to $G$ that vanish on simplices in $A$.

Relative coboundary maps $\delta : C^n(X, A; G) \to C^{n+1}(X, A; G)$ are obtained as restrictions of the absolute $\delta$'s, so relative cohomology groups $H^n(X, A; G)$ are defined. The fact that the relative cochain group is a subgroup of the absolute cochains, namely the cochains vanishing on chains in $A$, means that **relative cohomology is conceptually a little simpler than relative homology**.

The maps $i^*$ and $j^*$ commute with $\delta$, so we get an associated **long exact sequence of cohomology groups**:

$$\cdots \to H^n(X, A; G) \xrightarrow{j^*} H^n(X; G) \xrightarrow{i^*} H^n(A; G) \xrightarrow{\delta} H^{n+1}(X, A; G) \to \cdots$$

By similar reasoning one obtains a long exact sequence of reduced cohomology groups for a pair $(X, A)$ with $A$ nonempty. There is also a long exact sequence for a triple $(X, A, B)$.

> [!note] Duality Between Connecting Homomorphisms
> There is a duality relationship between the connecting homomorphisms $\delta : H^n(A; G) \to H^{n+1}(X, A; G)$ and $\partial : H_{n+1}(X, A) \to H_n(A)$. This takes the form of the commutative diagram:
>
> $$\begin{CD}
> H^n(A; G) @>{\delta}>> H^{n+1}(X, A; G) \\
> @V{h}VV @V{h}VV \\
> \operatorname{Hom}(H_n(A), G) @>{\partial^*}>> \operatorname{Hom}(H_{n+1}(X, A), G)
> \end{CD}$$

#### Induced Homomorphisms

Dual to the chain maps $f_\sharp : C_n(X) \to C_n(Y)$ induced by $f : X \to Y$ are the cochain maps $f^\sharp : C^n(Y; G) \to C^n(X; G)$. The relation $f_\sharp \partial = \partial f_\sharp$ dualizes to $\delta f^\sharp = f^\sharp \delta$, so $f^\sharp$ induces homomorphisms $f^* : H^n(Y; G) \to H^n(X; G)$. The properties $(fg)_\sharp = g_\sharp f_\sharp$ and $1_1_\sharp = 1_1$ imply $(fg)^* = g^* f^*$ and $1_1^* = 1_1$, so $X \mapsto H^n(X; G)$ and $(X, A) \mapsto H^n(X, A; G)$ are **contravariant functors**, the "contra" indicating that induced maps go in the reverse direction.

The algebraic universal coefficient theorem applies also to relative cohomology since the relative chain groups $C_n(X, A)$ are free, and there is a naturality statement: A map $f : (X, A) \to (Y, B)$ induces a commutative diagram between the universal coefficient exact sequences.

#### Homotopy Invariance

The statement is that if $f \simeq g : (X, A) \to (Y, B)$, then $f^* = g^* : H^n(Y, B) \to H^n(X, A)$. This is proved by direct dualization of the proof for homology. From the proof of Theorem 2.10 we have a chain homotopy $P$ satisfying $g_\sharp - f_\sharp = \partial P + P\partial$. This relation dualizes to $g^\sharp - f^\sharp = P^*\delta + \delta P^*$, so $P^*$ is a chain homotopy between the maps $f^\sharp, g^\sharp : C^n(Y; G) \to C^n(X; G)$.

#### Excision

For cohomology this says that for subspaces $Z \subset A \subset X$ with the closure of $Z$ contained in the interior of $A$, the inclusion $i : (X - Z, A - Z) \hookrightarrow (X, A)$ induces isomorphisms $i^* : H^n(X, A; G) \to H^n(X - Z, A - Z; G)$ for all $n$. This follows from the corresponding result for homology by the naturality of the universal coefficient theorem and the five-lemma.

Alternatively, the proof of excision for homology dualizes easily to cohomology. In the proof for homology there were chain maps $\iota : C_n(A+B) \to C_n(X)$ and $\rho : C_n(X) \to C_n(A+B)$ such that $\rho\iota = 1_1$ and $1_1 - \iota\rho = \partial D + D\partial$ for a chain homotopy $D$. Dualizing by taking $\operatorname{Hom}(-, G)$, we have maps $\rho^*$ and $\iota^*$ between $C^n(A + B; G)$ and $C^n(X; G)$, and these induce isomorphisms on cohomology since $\iota^*\rho^* = 1_1$ and $1_1 - \rho^*\iota^* = D^*\delta + \delta D^*$. By the five-lemma, the maps $C^n(X, A; G) \to C^n(A + B, A; G)$ also induce isomorphisms on cohomology.

#### Axioms for Cohomology

These are exactly dual to the axioms for homology. Restricting attention to CW complexes again, a (reduced) cohomology theory is a sequence of **contravariant** functors $\tilde{h}^n$ from CW complexes to abelian groups, together with natural coboundary homomorphisms $\delta : \tilde{h}^n(A) \to \tilde{h}^{n+1}(X/A)$ for CW pairs $(X, A)$, satisfying the following axioms:

> [!axiom] Cohomology Axioms
> 1. **Homotopy**: If $f \simeq g : X \to Y$, then $f^* = g^* : \tilde{h}^n(Y) \to \tilde{h}^n(X)$.
> 2. **Exactness**: For each CW pair $(X, A)$ there is a long exact sequence:
>
> $$\cdots \xrightarrow{\delta} \tilde{h}^n(X/A) \xrightarrow{q^*} \tilde{h}^n(X) \xrightarrow{i^*} \tilde{h}^n(A) \xrightarrow{\delta} \tilde{h}^{n+1}(X/A) \xrightarrow{q^*} \cdots$$
>
> 3. **Wedge**: For a wedge sum $X = \bigvee_\alpha X_\alpha$ with inclusions $i_\alpha : X_\alpha \hookrightarrow X$, the product map $\prod_\alpha i_\alpha^* : \tilde{h}^n(X) \to \prod_\alpha \tilde{h}^n(X_\alpha)$ is an isomorphism for each $n$.

Note that the third axiom involves **direct product**, rather than the direct sum appearing in the homology version. This is because of the natural isomorphism $\operatorname{Hom}(\bigoplus_\alpha A_\alpha, G) \cong \prod_\alpha \operatorname{Hom}(A_\alpha, G)$, which implies that the cochain complex of a disjoint union $\bigsqcup_\alpha X_\alpha$ is the direct product of the cochain complexes of the individual $X_\alpha$'s, and this direct product splitting passes through to cohomology groups. The same argument applies in the relative case, so we get isomorphisms:

$$H^n\left(\bigsqcup_\alpha X_\alpha, \bigsqcup_\alpha A_\alpha; G\right) \cong \prod_\alpha H^n(X_\alpha, A_\alpha; G)$$

The third axiom is obtained by taking the $A_\alpha$'s to be basepoints $x_\alpha$ and passing to the quotient $\bigsqcup_\alpha X_\alpha / \bigsqcup_\alpha x_\alpha = \bigvee_\alpha X_\alpha$.

The relation between reduced and unreduced cohomology theories is the same as for homology, as described in §2.3.

#### Simplicial Cohomology

If $X$ is a $\Delta$-complex and $A \subset X$ is a subcomplex, then the simplicial chain groups $\Delta_n(X, A)$ dualize to simplicial cochain groups $\Delta^n(X, A; G) = \operatorname{Hom}(\Delta_n(X, A), G)$, and the resulting cohomology groups are by definition the simplicial cohomology groups $H^n_\Delta(X, A; G)$. Since the inclusions $\Delta_n(X, A) \subset C_n(X, A)$ induce isomorphisms $H_n^\Delta(X, A) \cong H_n(X, A)$, Corollary 3.4 implies that the dual maps $C^n(X, A; G) \to \Delta^n(X, A; G)$ also induce isomorphisms $H^n(X, A; G) \cong H^n_\Delta(X, A; G)$.

#### Cellular Cohomology

For a CW complex $X$ this is defined via the cellular cochain complex formed by the horizontal sequence in a certain diagram, where coefficients in a given group $G$ are understood, and the cellular coboundary maps $d_n$ are the compositions $\delta_n j_n$, making the triangles commute. Note that $d_n d_{n-1} = 0$ since $j_n \delta_{n-1} = 0$.

> [!theorem] Theorem 3.5
> $H^n(X; G) \cong \operatorname{Ker}d_n / \operatorname{Im}d_{n-1}$. Furthermore, the cellular cochain complex $\{H^n(X^n, X^{n-1}; G), d_n\}$ is isomorphic to the dual of the cellular chain complex, obtained by applying $\operatorname{Hom}(-, G)$.

> [!proof] Proof
> The universal coefficient theorem implies that $H^k(X^n, X^{n-1}; G) = 0$ for $k \neq n$. The long exact sequence of the pair $(X^n, X^{n-1})$ then gives isomorphisms $H^k(X^n; G) \cong H^k(X^{n-1}; G)$ for $k \neq n, n-1$. Hence by induction on $n$ we obtain $H^k(X^n; G) = 0$ if $k > n$. Thus the diagonal sequences in the preceding diagram are exact. The universal coefficient theorem also gives $H^k(X, X^{n+1}; G) = 0$ for $k \leq n + 1$, so $H^n(X; G) \cong H^n(X^{n+1}; G)$. The diagram then yields isomorphisms:
>
> $$H^n(X; G) \cong H^n(X^{n+1}; G) \cong \operatorname{Ker}\delta_n \cong \operatorname{Ker}d_n / \operatorname{Im}\delta_{n-1} \cong \operatorname{Ker}d_n / \operatorname{Im}d_{n-1}$$
>
> For the second statement, the first and third vertical maps are isomorphisms by the universal coefficient theorem, and commutativity follows from naturality of $h$. $\square$

#### Mayer–Vietoris Sequences

In the absolute case these take the form:

$$\cdots \to H^n(X; G) \xrightarrow{\Psi} H^n(A; G) \oplus H^n(B; G) \xrightarrow{\Phi} H^n(A \cap B; G) \to H^{n+1}(X; G) \to \cdots$$

where $X$ is the union of the interiors of $A$ and $B$. This is the long exact sequence associated to the short exact sequence of cochain complexes:

$$0 \to C^n(A + B; G) \xrightarrow{\psi} C^n(A; G) \oplus C^n(B; G) \xrightarrow{\varphi} C^n(A \cap B; G) \to 0$$

Here $C^n(A + B; G)$ is the dual of the subgroup $C_n(A + B) \subset C_n(X)$ consisting of sums of singular $n$-simplices lying in $A$ or in $B$. The map $\psi$ has coordinates the two restrictions to $A$ and $B$, and $\varphi$ takes the difference of the restrictions to $A \cap B$.

There is also a relative Mayer–Vietoris sequence:

$$\cdots \to H^n(X, Y; G) \to H^n(A, C; G) \oplus H^n(B, D; G) \to H^n(A \cap B, C \cap D; G) \to \cdots$$

for a pair $(X, Y) = (A \cup B, C \cup D)$ with $C \subset A$ and $D \subset B$ such that $X$ is the union of the interiors of $A$ and $B$ while $Y$ is the union of the interiors of $C$ and $D$. To derive this, consider first the map of short exact sequences of cochain complexes:

$$\begin{CD}
0 @>>> C^n(A+B, C+D; G) @>{\psi}>> C^n(A, C; G) \oplus C^n(B, D; G) @>{\varphi}>> C^n(A \cap B, C \cap D; G) @>>> 0 \\
@. @VVV @VVV @VVV @. \\
0 @>>> C^n(A+B; G) @>{\psi}>> C^n(A; G) \oplus C^n(B; G) @>{\varphi}>> C^n(A \cap B; G) @>>> 0
\end{CD}$$

Here $C^n(A+B, C+D; G)$ is defined as the kernel of $C^n(A+B; G) \to C^n(C+D; G)$, the restriction map, so the second sequence is exact. The vertical maps are restrictions. The second and third of these induce isomorphisms on cohomology, so by the five-lemma the first vertical map also induces isomorphisms on cohomology. The relative Mayer–Vietoris sequence is then the long exact sequence associated to the short exact sequence:

$$0 \to C^n(A + B, C + D; G) \xrightarrow{\psi} C^n(A, C; G) \oplus C^n(B, D; G) \xrightarrow{\varphi} C^n(A \cap B, C \cap D; G) \to 0$$

This is exact since it is the dual of the short exact sequence:

$$0 \to C_n(A \cap B, C \cap D) \to C_n(A, C) \oplus C_n(B, D) \to C_n(A + B, C + D) \to 0$$

constructed in §2.2, which splits since $C_n(A+B, C+D)$ is free with basis the singular $n$-simplices in $A$ or in $B$ that do not lie in $C$ or in $D$.

### Exercises

1. Show that $\operatorname{Ext}(H, G)$ is a contravariant functor of $H$ for fixed $G$, and a covariant functor of $G$ for fixed $H$.

2. Show that the maps $G \xrightarrow{n} G$ and $H \xrightarrow{n} H$ multiplying each element by the integer $n$ induce multiplication by $n$ in $\operatorname{Ext}(H, G)$.

3. Regarding $\mathbb{Z}_2$ as a module over the ring $\mathbb{Z}_4$, construct a resolution of $\mathbb{Z}_2$ by free modules over $\mathbb{Z}_4$ and use this to show that $\operatorname{Ext}^n_{\mathbb{Z}_4}(\mathbb{Z}_2, \mathbb{Z}_2)$ is nonzero for all $n$.

4. What happens if one defines homology groups $h_n(X; G)$ as the homology groups of the chain complex $\cdots \to \operatorname{Hom}(G, C_n(X)) \to \operatorname{Hom}(G, C_{n-1}(X)) \to \cdots$? More specifically, what are the groups $h_n(X; G)$ when $G = \mathbb{Z}, \mathbb{Z}_m$, and $\mathbb{Q}$?

5. Regarding a cochain $\varphi \in C^1(X; G)$ as a function from paths in $X$ to $G$, show that if $\varphi$ is a cocycle, then:
   - (a) $\varphi(fg) = \varphi(f) + \varphi(g)$
   - (b) $\varphi$ takes the value 0 on constant paths
   - (c) $\varphi(f) = \varphi(g)$ if $f \simeq g$
   - (d) $\varphi$ is a coboundary iff $\varphi(f)$ depends only on the endpoints of $f$, for all $f$.

6. (a) Directly from the definitions, compute the simplicial cohomology groups of $S^1 \times S^1$ with $\mathbb{Z}$ and $\mathbb{Z}_2$ coefficients.
   (b) Do the same for $\mathbb{RP}^2$ and the Klein bottle.

7. Show that the functors $h_n(X) = \operatorname{Hom}(H_n(X), \mathbb{Z})$ do not define a cohomology theory on the category of CW complexes.

8. Many basic homology arguments work just as well for cohomology even though maps go in the opposite direction. Verify this in the following cases:
   - (a) Compute $\tilde{H}^i(S^n; G)$ by induction on $n$ in two ways: using the long exact sequence of a pair, and using the Mayer–Vietoris sequence.
   - (b) Show that if $A$ is a closed subspace of $X$ that is a deformation retract of some neighborhood, then the quotient map $X \to X/A$ induces isomorphisms $H^n(X, A; G) \cong \tilde{H}^n(X/A; G)$ for all $n$.
   - (c) Show that if $A$ is a retract of $X$ then $H^n(X; G) \cong H^n(A; G) \oplus H^n(X, A; G)$.

9. Show that if $f : S^n \to S^n$ has degree $d$ then $f^* : H^n(S^n; G) \to H^n(S^n; G)$ is multiplication by $d$.

10. For the lens space $L_m(\ell_1, \ldots, \ell_n)$ defined in Example 2.43, compute the cohomology groups using the cellular cochain complex and taking coefficients in $\mathbb{Z}, \mathbb{Q}, \mathbb{Z}_m$, and $\mathbb{Z}_p$ for $p$ prime.

11. Let $X$ be a Moore space $M(\mathbb{Z}_m, n)$ obtained from $S^n$ by attaching a cell $e^{n+1}$ by a map of degree $m$.
   - (a) Show that the quotient map $X \to X/S^n = S^{n+1}$ induces the trivial map on $\tilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^{n+1}(-; \mathbb{Z})$. Deduce that the splitting in the universal coefficient theorem for cohomology cannot be natural.
   - (b) Show that the inclusion $S^n \hookrightarrow X$ induces the trivial map on $\tilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^n(-; \mathbb{Z})$.

12. Show $H^k(X, X^n; G) = 0$ if $X$ is a CW complex and $k \leq n$.

13. Let $\langle X, Y \rangle$ denote the set of basepoint-preserving homotopy classes of basepoint-preserving maps $X \to Y$. Using Proposition 1B.9, show that if $X$ is a connected CW complex and $G$ is an abelian group, then the map $\langle X, K(G, 1) \rangle \to H^1(X; G)$ sending a map $f : X \to K(G, 1)$ to the induced homomorphism $f_* : H_1(X) \to H_1(K(G, 1)) \cong G$ is a bijection.

---

### Cup Product (Preview of Section 3.2)

In the introduction to this chapter we sketched a definition of cup product in terms of another product called cross product. However, we will proceed in the opposite order, first giving an elementary definition of cup product by an explicit formula with simplices, then afterwards defining cross product in terms of cup product.

To define the cup product we consider cohomology with coefficients in a ring $R$, the most common choices being $\mathbb{Z}, \mathbb{Z}_n$, and $\mathbb{Q}$. For cochains $\varphi \in C^k(X; R)$ and $\psi \in C^\ell(X; R)$, the **cup product** $\varphi \smile \psi \in C^{k+\ell}(X; R)$ is the cochain whose value on a singular simplex $\sigma : \Delta^{k+\ell} \to X$ is given by the formula:

$$\boxed{(\varphi \smile \psi)(\sigma) = \varphi\left(\sigma|_{[v_0, \ldots, v_k]}\right) \cdot \psi\left(\sigma|_{[v_k, \ldots, v_{k+\ell}]}\right)}$$

where the right-hand side is the product in $R$.

> [!lemma] Lemma 3.6 (Leibniz Rule for Cup Product)
> $\delta(\varphi \smile \psi) = \delta\varphi \smile \psi + (-1)^k \varphi \smile \delta\psi$ for $\varphi \in C^k(X; R)$ and $\psi \in C^\ell(X; R)$.

> [!proof] Proof of Lemma 3.6
> For $\sigma : \Delta^{k+\ell+1} \to X$ we have:
>
> $$\begin{aligned}
> (\delta\varphi \smile \psi)(\sigma) &= \sum_{i=0}^{k+1} (-1)^i \varphi\left(\sigma|_{[v_0, \ldots, \widehat{v_i}, \ldots, v_{k+1}]}\right) \cdot \psi\left(\sigma|_{[v_{k+1}, \ldots, v_{k+\ell+1}]}\right) \\
> (-1)^k(\varphi \smile \delta\psi)(\sigma) &= \sum_{i=k}^{k+\ell+1} (-1)^i \varphi\left(\sigma|_{[v_0, \ldots, v_k]}\right) \cdot \psi\left(\sigma|_{[v_k, \ldots, \widehat{v_i}, \ldots, v_{k+\ell+1}]}\right)
> \end{aligned}$$
>
> When we add these two expressions, the last term of the first sum cancels the first term of the second sum, and the remaining terms are exactly $\delta(\varphi \smile \psi)(\sigma) = (\varphi \smile \psi)(\partial\sigma)$ since:
>
> $$\partial\sigma = \sum_{i=0}^{k+\ell+1} (-1)^i \sigma|_{[v_0, \ldots, \widehat{v_i}, \ldots, v_{k+\ell+1}]}$$
>
> $\square$