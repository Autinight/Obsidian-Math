---
title: "Hatcher Chapter 2 - Additional Topics"
tags:
  - textbook
  - algebraic-topology
source: "[[30.Recources/AT/PDFs/ATHatcher - Chapter2 - Homology.pdf]]"
section: "Additional Topics (2.A, 2.B, 2.C)"
date: 2026-05-01
---

# Additional Topics

## 2.A. Homology and Fundamental Group

There is a close connection between $H_1(X)$ and $\pi_1(X)$, arising from the fact that a map $f : I \to X$ can be viewed as either a path or a singular 1-simplex. If $f$ is a loop, with $f(0) = f(1)$, this singular 1-simplex is a cycle since $\partial f = f(1) - f(0)$.

> [!theorem] Theorem 2A.1
> By regarding loops as singular 1-cycles, we obtain a homomorphism $h : \pi_1(X, x_0) \to H_1(X)$. If $X$ is path-connected, then $h$ is surjective and has kernel the commutator subgroup of $\pi_1(X)$, so $h$ induces an isomorphism from the abelianization of $\pi_1(X)$ onto $H_1(X)$.

> [!proof]
> Recall the notation $f \simeq g$ for the relation of homotopy, fixing endpoints, between paths $f$ and $g$. Regarding $f$ and $g$ as chains, the notation $f \sim g$ will mean that $f$ is homologous to $g$, that is, $f - g$ is the boundary of some 2-chain. Here are some facts about this relation.
> 
> **(i)** If $f$ is a constant path, then $f \sim 0$. Namely, $f$ is a cycle since it is a loop, and since $H_1(\text{point}) = 0$, $f$ must then be a boundary. Explicitly, $f$ is the boundary of the constant singular 2-simplex $\sigma$ having the same image as $f$ since
> $$\partial\sigma = \sigma|[v_1, v_2] - \sigma|[v_0, v_2] + \sigma|[v_0, v_1] = f - f + f = f$$
> 
> **(ii)** If $f \simeq g$ then $f \sim g$. To see this, consider a homotopy $F : I \times I \to X$ from $f$ to $g$. This yields a pair of singular 2-simplices $\sigma_1$ and $\sigma_2$ in $X$ by subdividing the square $I \times I$ into two triangles $[v_0, v_1, v_3]$ and $[v_0, v_2, v_3]$. When one computes $\partial(\sigma_1 - \sigma_2)$, the two restrictions of $F$ to the diagonal of the square cancel, leaving $f - g$ together with two constant singular 1-simplices from the left and right edges of the square. By (i) these are boundaries, so $f - g$ is also a boundary.
> 
> **(iii)** $fg \sim f + g$, where $fg$ denotes the product of the paths $f$ and $g$. For if $\sigma : \Delta^2 \to X$ is the composition of orthogonal projection of $\Delta^2 = [v_0, v_1, v_2]$ onto the edge $[v_0, v_2]$ followed by $fg : [v_0, v_2] \to X$, then $\partial\sigma = g - fg + f$.
> 
> **(iv)** $f \sim -\bar{f}$, where $\bar{f}$ is the inverse path of $f$. This follows from the preceding three observations, which give $f + \bar{f} \sim f\bar{f} \sim 0$.
> 
> Applying (ii) and (iii) to loops, it follows that we have a well-defined homomorphism $h : \pi_1(X, x_0) \to H_1(X)$ sending the homotopy class of a loop $f$ to the homology class of the 1-cycle $f$.


> To show $h$ is surjective when $X$ is path-connected, let $\sum_i n_i\sigma_i$ be a 1-cycle representing a given element of $H_1(X)$. After relabeling the $\sigma_i$'s we may assume each $n_i$ is $\pm 1$. By (iv) we may in fact take each $n_i$ to be $+1$, so our 1-cycle is $\sum_i \sigma_i$. If some $\sigma_i$ is not a loop, then the fact that $\partial(\sum_i \sigma_i) = 0$ means there must be another $\sigma_j$ such that the composed path $\sigma_i\sigma_j$ is defined. By (iii) we may then combine the terms $\sigma_i$ and $\sigma_j$ into a single term $\sigma_i\sigma_j$. Iterating this, we reduce to the case that each $\sigma_i$ is a loop. Since $X$ is path-connected, we may choose a path $\gamma_i$ from $x_0$ to the basepoint of $\sigma_i$. We have $\gamma_i\sigma_i\bar{\gamma}_i \sim \sigma_i$ by (iii) and (iv), so we may assume all $\sigma_i$'s are loops at $x_0$. Then we can combine all the $\sigma_i$'s into a single $\sigma$ by (iii). This says the given element of $H_1(X)$ is in the image of $h$.
> 
> The commutator subgroup of $\pi_1(X)$ is contained in the kernel of $h$ since $H_1(X)$ is abelian. To obtain the reverse inclusion we will show that every class $[f]$ in the kernel of $h$ is trivial in the abelianization $\pi_1(X)^{ab}$ of $\pi_1(X)$.
> 
> If an element $[f] \in \pi_1(X)$ is in the kernel of $h$, then $f$, as a 1-cycle, is the boundary of a 2-chain $\sum_i n_i\sigma_i$. Again we may assume each $n_i$ is $\pm 1$. As in the discussion preceding Proposition 2.6, we can associate to the chain $\sum_i n_i\sigma_i$ a 2-dimensional $\Delta$-complex $K$ by taking a 2-simplex $\Delta^2_i$ for each $\sigma_i$ and identifying certain pairs of edges of these 2-simplices. Namely, if we apply the usual boundary formula to write $\partial\sigma_i = \tau_{i0} - \tau_{i1} + \tau_{i2}$ for singular 1-simplices $\tau_{ij}$, then the formula $f = \partial(\sum_i n_i\sigma_i) = \sum_i n_i\partial\sigma_i = \sum_{i,j}(-1)^j n_i\tau_{ij}$ implies that we can group all but one of the $\tau_{ij}$'s into pairs for which the two coefficients $(-1)^j n_i$ in each pair are $+1$ and $-1$. The one remaining $\tau_{ij}$ is equal to $f$. We then identify edges of the $\Delta^2_j$'s corresponding to the paired $\tau_{ij}$'s, preserving orientations of these edges so that we obtain a $\Delta$-complex $K$.
> 
> The maps $\sigma_i$ fit together to give a map $\sigma : K \to X$. We can deform $\sigma$, staying fixed on the edge corresponding to $f$, so that each vertex maps to the basepoint $x_0$, in the following way. Paths from the images of these vertices to $x_0$ define such a homotopy on the union of the 0-skeleton of $K$ with the edge corresponding to $f$, and then we can appeal to the homotopy extension property in Proposition 0.16 to extend this homotopy to all of $K$. Alternatively, it is not hard to construct such an extension by hand. Restricting the new $\sigma$ to the simplices $\Delta^2_i$, we obtain a new chain $\sum_i n_i\sigma_i$ with boundary equal to $f$ and with all $\tau_{ij}$'s loops at $x_0$.
> 
> Using additive notation in the abelian group $\pi_1(X)^{ab}$, we have the formula $[f] = \sum_{i,j}(-1)^j n_i[\tau_{ij}]$ because of the canceling pairs of $\tau_{ij}$'s. We can rewrite the summation $\sum_{i,j}(-1)^j n_i[\tau_{ij}]$ as $\sum_i n_i[\partial\sigma_i]$ where $[\partial\sigma_i] = [\tau_{i0}] - [\tau_{i1}] + [\tau_{i2}]$. Since $\sigma_i$ gives a nullhomotopy of the composed loop $\tau_{i0} - \tau_{i1} + \tau_{i2}$, we conclude that $[f] = 0$ in $\pi_1(X)^{ab}$. $\square$

The end of this proof can be illuminated by looking more closely at the geometry. The complex $K$ is in fact a compact surface with boundary consisting of a single circle formed by the edge corresponding to $f$. This is because any pattern of identifications of pairs of edges of a finite collection of disjoint 2-simplices produces a compact surface with boundary. We leave it as an exercise for the reader to check that the algebraic formula $f = \partial(\sum_i n_i\sigma_i)$ with each $n_i = \pm 1$ implies that $K$ is an orientable surface.

The component of $K$ containing the boundary circle is a standard closed orientable surface of some genus $g$ with an open disk removed, by the basic structure theorem for compact orientable surfaces. Giving this surface the cell structure indicated in the figure, it then becomes obvious that $f$ is homotopic to a product of $g$ commutators in $\pi_1(X)$.


The map $h : \pi_1(X, x_0) \to H_1(X)$ can also be defined by $h([f]) = f_*(α)$ where $f : S^1 \to X$ represents a given element of $\pi_1(X, x_0)$, $f_*$ is the induced map on $H_1$, and $α$ is the generator of $H_1(S^1) \approx \mathbb{Z}$ represented by the standard map $\sigma : I \to S^1$, $\sigma(s) = e^{2\pi is}$. This is because both $[f] \in \pi_1(X, x_0)$ and $f_*(α) \in H_1(X)$ are represented by the loop $f\sigma : I \to X$. A consequence of this definition is that $h([f]) = h([g])$ if $f$ and $g$ are homotopic maps $S^1 \to X$, since $f_* = g_*$ by Theorem 2.10.

> [!example] Example 2A.2
> For the closed orientable surface $M$ of genus $g$, the abelianization of $\pi_1(M)$ is $\mathbb{Z}^{2g}$, the product of $2g$ copies of $\mathbb{Z}$, and a basis for $H_1(M)$ consists of the 1-cycles represented by the 1-cells of $M$ in its standard CW structure. We can also represent a basis by the loops $α_i$ and $β_i$ shown in the figure below since these loops are homotopic to the loops represented by the 1-cells, as one can see in the picture of the cell structure in Chapter 0. The loops $γ_i$, on the other hand, are trivial in homology since the portion of $M$ on one side of $γ_i$ is a compact surface bounded by $γ_i$, so $γ_i$ is homotopic to a loop that is a product of commutators, as we saw a couple paragraphs earlier. The loop $α'_i$ represents the same homology class as $α_i$ since the region between $γ_i$ and $α_i \cup α'_i$ provides a homotopy between $γ_i$ and a product of two loops homotopic to $α_i$ and the inverse of $α'_i$, so $α_i - α'_i \sim γ_i \sim 0$, hence $α_i \sim α'_i$.

---

## 2.B. Classical Applications

In this section we use homology theory to prove several interesting results in topology and algebra whose statements give no hint that algebraic topology might be involved.

To begin, we calculate the homology of complements of embedded spheres and disks in a sphere. Recall that an embedding is a map that is a homeomorphism onto its image.

> [!theorem] Proposition 2B.1
> **(a)** For an embedding $h : D^k \to S^n$, $\tilde{H}_i(S^n - h(D^k)) = 0$ for all $i$.
> 
> **(b)** For an embedding $h : S^k \to S^n$ with $k < n$, $\tilde{H}_i(S^n - h(S^k))$ is $\mathbb{Z}$ for $i = n - k - 1$ and $0$ otherwise.

As a special case of (b) we have the **Jordan curve theorem**: A subspace of $S^2$ homeomorphic to $S^1$ separates $S^2$ into two complementary components, or equivalently, path-components since open subsets of $S^n$ are locally path-connected. One could just as well use $\mathbb{R}^2$ in place of $S^2$ here since deleting a point from an open set in $S^2$ does not affect its connectedness. More generally, (b) says that a subspace of $S^n$ homeomorphic to $S^{n-1}$ separates it into two components, and these components have the same homology groups as a point.


Somewhat surprisingly, there are embeddings where these complementary components are not simply-connected as they are for the standard embedding. An example is the Alexander horned sphere in $S^3$ which we describe in detail following the proof of the proposition. These complications involving embedded $S^{n-1}$'s in $S^n$ are all local in nature since it is known that any locally nicely embedded $S^{n-1}$ in $S^n$ is equivalent to the standard $S^{n-1} \subset S^n$, equivalent in the sense that there is a homeomorphism of $S^n$ taking the given embedded $S^{n-1}$ onto the standard $S^{n-1}$. In particular, both complementary regions are homeomorphic to open balls. When $n = 2$ it is a classical theorem of Schoenflies that all embeddings $S^1 \hookrightarrow S^2$ are equivalent.

By contrast, when we come to embeddings of $S^{n-2}$ in $S^n$, even locally nice embeddings need not be equivalent to the standard one. This is the subject of knot theory, including the classical case of knotted embeddings of $S^1$ in $S^3$ or $\mathbb{R}^3$. For embeddings of $S^{n-2}$ in $S^n$ the complement always has the same homology as $S^1$, according to the theorem, but the fundamental group can be quite different. In spite of the fact that the homology of a knot complement does not detect knottedness, it is still possible to use homology to distinguish different knots by looking at the homology of covering spaces of their complements.

> [!proof]
> We prove (a) by induction on $k$. When $k = 0$, $S^n - h(D^0)$ is homeomorphic to $\mathbb{R}^n$, so this case is trivial. For the induction step it will be convenient to replace the domain disk $D^k$ of $h$ by the cube $I^k$.
> 
> Let $A = S^n - h(I^{k-1} \times [0, 1/2])$ and let $B = S^n - h(I^{k-1} \times [1/2, 1])$, so $A \cap B = S^n - h(I^k)$ and $A \cup B = S^n - h(I^{k-1} \times \{1/2\})$. By induction $\tilde{H}_i(A \cup B) = 0$ for all $i$, so the Mayer-Vietoris sequence gives isomorphisms $\Phi : \tilde{H}_i(S^n - h(I^k)) \to \tilde{H}_i(A) \oplus \tilde{H}_i(B)$ for all $i$. Modulo signs, the two components of $\Phi$ are induced by the inclusions $S^n - h(I^k) \hookrightarrow A$ and $S^n - h(I^k) \hookrightarrow B$, so if there exists an $i$-dimensional cycle $α$ in $S^n - h(I^k)$ that is not a boundary in $S^n - h(I^k)$, then $α$ is also not a boundary in at least one of $A$ and $B$. By iteration we can then produce a nested sequence of closed intervals $I_1 \supset I_2 \supset \cdots$ in the last coordinate of $I^k$ shrinking down to a point $p \in I$, such that $α$ is not a boundary in $S^n - h(I^{k-1} \times I_m)$ for any $m$. On the other hand, by induction on $k$ we know that $α$ is the boundary of a chain $β$ in $S^n - h(I^{k-1} \times \{p\})$. This $β$ is a finite linear combination of singular simplices with compact image in $S^n - h(I^{k-1} \times \{p\})$. The union of these images is covered by the nested sequence of open sets $S^n - h(I^{k-1} \times I_m)$, so by compactness $β$ must actually be a chain in $S^n - h(I^{k-1} \times I_m)$ for some $m$. This contradiction shows that $α$ must be a boundary in $S^n - h(I^k)$, finishing the induction step.
> 
> Part (b) is also proved by induction on $k$, starting with the trivial case $k = 0$ when $S^n - h(S^0)$ is homeomorphic to $S^{n-1} \times \mathbb{R}$. For the induction step, write $S^k$ as the union of hemispheres $D^k_+$ and $D^k_-$ intersecting in $S^{k-1}$. The Mayer-Vietoris sequence for $A = S^n - h(D^k_+)$ and $B = S^n - h(D^k_-)$, both of which have trivial reduced homology by part (a), then gives isomorphisms $\tilde{H}_i(S^n - h(S^k)) \approx \tilde{H}_{i+1}(S^n - h(S^{k-1}))$. $\square$


If we apply the last part of this proof to an embedding $h : S^n \to S^n$, the Mayer-Vietoris sequence ends with the terms $\tilde{H}_0(A) \oplus \tilde{H}_0(B) \to \tilde{H}_0(S^n - h(S^{n-1})) \to 0$. Both $\tilde{H}_0(A)$ and $\tilde{H}_0(B)$ are zero, so exactness would imply that $\tilde{H}_0(S^n - h(S^{n-1})) = 0$ which appears to contradict the fact that $S^n - h(S^{n-1})$ has two path-components. The only way out of this dilemma is for $h$ to be surjective, so that $A \cap B$ is empty and the $0$ at the end of the Mayer-Vietoris sequence is $\tilde{H}_{-1}(\emptyset)$ which is $\mathbb{Z}$ rather than $0$.

In particular, this shows that $S^n$ cannot be embedded in $\mathbb{R}^n$ since this would yield a nonsurjective embedding in $S^n$. A consequence is that there is no embedding $\mathbb{R}^m \hookrightarrow \mathbb{R}^n$ for $m > n$ since this would restrict to an embedding of $S^n \subset \mathbb{R}^m$ into $\mathbb{R}^n$. More generally there is no continuous injection $\mathbb{R}^m \to \mathbb{R}^n$ for $m > n$ since this too would give an embedding $S^n \hookrightarrow \mathbb{R}^n$.

### The Alexander Horned Sphere

> [!example] Example 2B.2: The Alexander Horned Sphere
> This is a subspace $S \subset \mathbb{R}^3$ homeomorphic to $S^2$ such that the unbounded component of $\mathbb{R}^3 - S$ is not simply-connected as it is for the standard $S^2 \subset \mathbb{R}^3$. We will construct $S$ by defining a sequence of compact subspaces $X_0 \supset X_1 \supset \cdots$ of $\mathbb{R}^3$ whose intersection is homeomorphic to a ball, and then $S$ will be the boundary sphere of this ball.
> 
> We begin with $X_0$ a solid torus $S^1 \times D^2$ obtained from a ball $B_0$ by attaching a handle $I \times D^2$ along $\partial I \times D^2$. To form the space $X_1 \subset X_0$ we delete part of the short handle, so that what remains is a pair of linked handles attached to the ball $B_1$ that is the union of $B_0$ with the two horns. To form $X_2$ the process is repeated: Decompose each of the second stage handles as a pair of horns and a short handle, then delete a part of the short handle. In the same way $X_n$ is constructed inductively from $X_{n-1}$. Thus $X_n$ is a ball $B_n$ with $2^n$ handles attached, and $B_n$ is obtained from $B_{n-1}$ by attaching $2^n$ horns. There are homeomorphisms $h_n : B_{n-1} \to B_n$ that are the identity outside a small neighborhood of $B_n - B_{n-1}$. As $n$ goes to infinity, the composition $h_n \cdots h_1$ approaches a map $f : B_0 \to \mathbb{R}^3$ which is continuous since the convergence is uniform. The set of points in $B_0$ where $f$ is not equal to $h_n \cdots h_1$ for large $n$ is a Cantor set, whose image under $f$ is the intersection of all the handles. It is not hard to see that $f$ is one-to-one. By compactness it follows that $f$ is a homeomorphism onto its image, a ball $B \subset \mathbb{R}^3$ whose boundary sphere $f(\partial B_0)$ is $S$, the Alexander horned sphere.
> 
> Now we compute $\pi_1(\mathbb{R}^3 - B)$. Note that $B$ is the intersection of the $X_n$'s, so $\mathbb{R}^3 - B$ is the union of the complements $Y_n$ of the $X_n$'s, which form an increasing sequence $Y_0 \subset Y_1 \subset \cdots$. We will show that the groups $\pi_1(Y_n)$ also form an increasing sequence of successively larger groups, whose union is $\pi_1(\mathbb{R}^3 - B)$.


> To begin we have $\pi_1(Y_0) \approx \mathbb{Z}$ since $X_0$ is a solid torus embedded in $\mathbb{R}^3$ in a standard way. To compute $\pi_1(Y_1)$, let $Y'$ be the closure of $Y_0$ in $Y_1$, so $Y' - Y_0$ is an open annulus $A$ and $\pi_1(Y')$ is also $\mathbb{Z}$. We obtain $Y_1$ from $Y'$ by attaching the space $Z = Y_1 - Y_0$ along $A$. The group $\pi_1(Z)$ is the free group $F_2$ on two generators $α_1$ and $α_2$ represented by loops linking the two handles, since $Z - A$ is homeomorphic to an open ball with two straight tubes deleted. A loop $α$ generating $\pi_1(A)$ represents the commutator $[α_1, α_2]$, as one can see by noting that the closure of $Z$ is obtained from $Z$ by adjoining two disjoint surfaces, each homeomorphic to a torus with an open disk removed; the boundary of this disk is homotopic to $α$ and is also homotopic to the commutator of meridian and longitude circles in the torus, which correspond to $α_1$ and $α_2$. Van Kampen's theorem now implies that the inclusion $Y_0 \hookrightarrow Y_1$ induces an injection of $\pi_1(Y_0)$ into $\pi_1(Y_1)$ as the infinite cyclic subgroup generated by $[α_1, α_2]$.
> 
> In a similar way we can regard $Y_{n+1}$ as being obtained from $Y_n$ by adjoining $2^n$ copies of $Z$. Assuming inductively that $\pi_1(Y_n)$ is the free group $F_{2^n}$ with generators represented by loops linking the $2^n$ smallest handles of $X_n$, then each copy of $Z$ adjoined to $Y_n$ changes $\pi_1(Y_n)$ by making one of the generators into the commutator of two new generators. Note that adjoining a copy of $Z$ induces an injection on $\pi_1$ since the induced homomorphism is the free product of the injection $\pi_1(A) \to \pi_1(Z)$ with the identity map on the complementary free factor. Thus the map $\pi_1(Y_n) \to \pi_1(Y_{n+1})$ is an injection $F_{2^n} \to F_{2^{n+1}}$. The group $\pi_1(\mathbb{R}^3 - B)$ is isomorphic to the union of this increasing sequence of groups by a compactness argument: Each loop in $\mathbb{R}^3 - B$ has compact image and hence must lie in some $Y_n$, and similarly for homotopies of loops.
> 
> In particular we see explicitly why $\pi_1(\mathbb{R}^3 - B)$ has trivial abelianization, because each of its generators is exactly equal to the commutator of two other generators. This inductive construction in which each generator of a free group is decreed to be the commutator of two new generators is perhaps the simplest way of building a nontrivial group with trivial abelianization, and for the construction to have such a nice geometric interpretation is something to marvel at. From a naive viewpoint it may seem a little odd that a highly nonfree group can be built as a union of an increasing sequence of free groups, but this can also easily happen for abelian groups, as $\mathbb{Q}$ for example is the union of an increasing sequence of infinite cyclic subgroups.

### Invariance of Domain

The next theorem says that for subspaces of $\mathbb{R}^n$, the property of being open is a topological invariant. This result is known classically as **Invariance of Domain**, the word 'domain' being an older designation for an open set in $\mathbb{R}^n$.

> [!theorem] Theorem 2B.3
> If $U$ is an open set in $\mathbb{R}^n$ and $h : U \to \mathbb{R}^n$ is an embedding, or more generally just a continuous injection, then the image $h(U)$ is an open set in $\mathbb{R}^n$.


> [!proof]
> Viewing $S^n$ as the one-point compactification of $\mathbb{R}^n$, an equivalent statement is that $h(U)$ is open in $S^n$, and this is what we will prove. Each $x \in U$ is the center point of a disk $D^n \subset U$. It will suffice to prove that $h(D^n - \partial D^n)$ is open in $S^n$. The hypothesis on $h$ implies that its restrictions to $D^n$ and $\partial D^n$ are embeddings. By the previous proposition $S^n - h(\partial D^n)$ has two path-components. These path-components are $h(D^n - \partial D^n)$ and $S^n - h(D^n)$ since these two subspaces are disjoint and path-connected, the first since it is homeomorphic to $D^n - \partial D^n$ and the second by the proposition. Since $S^n - h(\partial D^n)$ is open in $S^n$, its path-components are the same as its components. The components of a space with finitely many components are open, so $h(D^n - \partial D^n)$ is open in $S^n - h(\partial D^n)$ and hence also in $S^n$. $\square$

Here is an application involving the notion of an $n$-manifold, which is a Hausdorff space locally homeomorphic to $\mathbb{R}^n$:

> [!theorem] Corollary 2B.4
> If $M$ is a compact $n$-manifold and $N$ is a connected $n$-manifold, then an embedding $h : M \to N$ must be surjective, hence a homeomorphism.

> [!proof]
> $h(M)$ is closed in $N$ since it is compact and $N$ is Hausdorff. Since $N$ is connected it suffices to show $h(M)$ is also open in $N$, and this is immediate from the theorem. $\square$

The Invariance of Domain and the $n$-dimensional generalization of the Jordan curve theorem were first proved by Brouwer around 1910, at a very early stage in the development of algebraic topology.

### Division Algebras

Here is an algebraic application of homology theory due to H. Hopf:

> [!theorem] Theorem 2B.5
> $\mathbb{R}$ and $\mathbb{C}$ are the only finite-dimensional division algebras over $\mathbb{R}$ which are commutative and have an identity.

By definition, an algebra structure on $\mathbb{R}^n$ is simply a bilinear multiplication map $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^n$, $(a, b) \mapsto ab$. Thus the product satisfies left and right distributivity, $a(b+c) = ab+ac$ and $(a+b)c = ac + bc$, and scalar associativity, $α(ab) = (αa)b = a(αb)$ for $α \in \mathbb{R}$. Commutativity, full associativity, and an identity element are not assumed. An algebra is a **division algebra** if the equations $ax = b$ and $xa = b$ are always solvable whenever $a \neq 0$. In other words, the linear transformations $x \mapsto ax$ and $x \mapsto xa$ are surjective when $a \neq 0$. These are linear maps $\mathbb{R}^n \to \mathbb{R}^n$, so surjectivity is equivalent to having trivial kernel, which means there are no zero-divisors.

The four classical examples are $\mathbb{R}$, $\mathbb{C}$, the quaternion algebra $\mathbb{H}$, and the octonion algebra $\mathbb{O}$. Frobenius proved in 1877 that $\mathbb{R}$, $\mathbb{C}$, and $\mathbb{H}$ are the only finite-dimensional associative division algebras over $\mathbb{R}$ with an identity element.


> [!proof]
> Suppose first that $\mathbb{R}^n$ has a commutative division algebra structure. Define a map $f : S^{n-1} \to S^{n-1}$ by $f(x) = x^2/|x^2|$. This is well-defined since $x \neq 0$ implies $x^2 \neq 0$ in a division algebra. The map $f$ is continuous since the multiplication map $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^n$ is bilinear, hence continuous. Since $f(-x) = f(x)$ for all $x$, $f$ induces a quotient map $\bar{f} : \mathbb{RP}^{n-1} \to S^{n-1}$. The following argument shows that $\bar{f}$ is injective. An equality $f(x) = f(y)$ implies $x^2 = α^2y^2$ for $α = (|x^2|/|y^2|)^{1/2} > 0$. Thus we have $x^2 - α^2y^2 = 0$, which factors as $(x + αy)(x - αy) = 0$ using commutativity and the fact that $α$ is a real scalar. Since there are no divisors of zero, we deduce that $x = \pm αy$. Since $x$ and $y$ are unit vectors and $α$ is real, this yields $x = \pm y$, so $x$ and $y$ determine the same point of $\mathbb{RP}^{n-1}$, which means that $\bar{f}$ is injective.
> 
> Since $\bar{f}$ is an injective map of compact Hausdorff spaces, it must be a homeomorphism onto its image. By Corollary 2B.4, $\bar{f}$ must in fact be surjective if we are not in the trivial case $n = 1$. Thus we have a homeomorphism $\mathbb{RP}^{n-1} \approx S^{n-1}$. This implies $n = 2$ since if $n > 2$ the spaces $\mathbb{RP}^{n-1}$ and $S^{n-1}$ have different homology groups (or different fundamental groups).
> 
> It remains to show that a 2-dimensional commutative division algebra $A$ with identity is isomorphic to $\mathbb{C}$. This is elementary algebra: If $j \in A$ is not a real scalar multiple of the identity element $1 \in A$ and we write $j^2 = a + bj$ for $a, b \in \mathbb{R}$, then $(j - b/2)^2 = a + b^2/4$ so by rechoosing $j$ we may assume that $j^2 = a \in \mathbb{R}$. If $a \geq 0$, say $a = c^2$, then $j^2 = c^2$ implies $(j + c)(j - c) = 0$, so $j = \pm c$, but this contradicts the choice of $j$. So $j^2 = -c^2$ and by rescaling $j$ we may assume $j^2 = -1$, hence $A$ is isomorphic to $\mathbb{C}$. $\square$

Leaving out the last paragraph, the proof shows that a finite-dimensional commutative division algebra, not necessarily with an identity, must have dimension at most 2. Oddly enough, there do exist 2-dimensional commutative division algebras without identity elements, for example $\mathbb{C}$ with the modified multiplication $z \cdot w = z\bar{w}$, the bar denoting complex conjugation.

### The Borsuk-Ulam Theorem

In Theorem 1.10 we proved the 2-dimensional case of the Borsuk-Ulam theorem, and now we will give a proof for all dimensions, using the following theorem of Borsuk:

> [!theorem] Proposition 2B.6
> An odd map $f : S^n \to S^n$, satisfying $f(-x) = -f(x)$ for all $x$, must have odd degree.

The corresponding result that even maps have even degree is easier, and was an exercise for §2.2.

The proof will show that using homology with a coefficient group other than $\mathbb{Z}$ can sometimes be a distinct advantage. The main ingredient will be a certain exact sequence associated to a two-sheeted covering space $p : \tilde{X} \to X$,

$$\cdots \to H_n(X; \mathbb{Z}_2) \xrightarrow{\tau_*} H_n(\tilde{X}; \mathbb{Z}_2) \xrightarrow{p_*} H_n(X; \mathbb{Z}_2) \to H_{n-1}(X; \mathbb{Z}_2) \to \cdots$$


This is the long exact sequence of homology groups associated to a short exact sequence of chain complexes consisting of short exact sequences of chain groups

$$0 \to C_n(X; \mathbb{Z}_2) \xrightarrow{\tau} C_n(\tilde{X}; \mathbb{Z}_2) \xrightarrow{p_\sharp} C_n(X; \mathbb{Z}_2) \to 0$$

The map $p_\sharp$ is surjective since singular simplices $\sigma : \Delta^n \to X$ always lift to $\tilde{X}$, as $\Delta^n$ is simply-connected. Each $\sigma$ has in fact precisely two lifts $\tilde{\sigma}_1$ and $\tilde{\sigma}_2$. Because we are using $\mathbb{Z}_2$ coefficients, the kernel of $p_\sharp$ is generated by the sums $\tilde{\sigma}_1 + \tilde{\sigma}_2$. So if we define $\tau$ to send each $\sigma : \Delta^n \to X$ to the sum of its two lifts to $\tilde{\Delta}^n$, then the image of $\tau$ is the kernel of $p_\sharp$. Obviously $\tau$ is injective, so we have the short exact sequence indicated. Since $\tau$ and $p_\sharp$ commute with boundary maps, we have a short exact sequence of chain complexes, yielding the long exact sequence of homology groups.

The map $\tau_*$ is a special case of more general transfer homomorphisms considered in §3.G, so we will refer to the long exact sequence involving the maps $\tau_*$ as the **transfer sequence**.

> [!proof] Proof of 2B.6
> The proof will involve the transfer sequence for the covering space $p : S^n \to \mathbb{RP}^n$. This has the following form, where to simplify notation we abbreviate $\mathbb{RP}^n$ to $P^n$ and we let the coefficient group $\mathbb{Z}_2$ be implicit:
> 
> $$0 \to H_n(P^n) \xrightarrow{\tau_*} H_n(S^n) \xrightarrow{p_*} H_n(P^n) \to H_{n-1}(P^n) \to \cdots \to H_0(P^n) \xrightarrow{\tau_*} H_0(S^n) \xrightarrow{p_*} H_0(P^n) \to 0$$
> 
> The initial $0$ is $H_{n+1}(P^n; \mathbb{Z}_2)$, which vanishes since $P^n$ is an $n$-dimensional CW complex. The other terms that are zero are $H_i(S^n)$ for $0 < i < n$. We assume $n > 1$, leaving the minor modifications needed for the case $n = 1$ to the reader. All the terms that are not zero are $\mathbb{Z}_2$, by cellular homology. Since all the nonzero groups in the sequence are $\mathbb{Z}_2$, exactness forces the maps to be isomorphisms or zero as indicated.
> 
> An odd map $f : S^n \to S^n$ induces a quotient map $\bar{f} : \mathbb{RP}^n \to \mathbb{RP}^n$. These two maps induce a map from the transfer sequence to itself, and we will need to know that the squares in the resulting diagram commute. This follows from the naturality of the long exact sequence of homology associated to a short exact sequence of chain complexes, once we verify commutativity of the diagram:
> 
> $$\begin{CD}
> C_i(P^n) @>\tau>> C_i(S^n) @>p_\sharp>> C_i(P^n) \\
> @V\bar{f}_\sharp VV @Vf_\sharp VV @V\bar{f}_\sharp VV \\
> C_i(P^n) @>>\tau> C_i(S^n) @>>p_\sharp> C_i(P^n)
> \end{CD}$$
> 
> Here the right-hand square commutes since $p f = \bar{f} p$. The left-hand square commutes since for a singular $i$-simplex $\sigma : \Delta^i \to P^n$ with lifts $\tilde{\sigma}_1$ and $\tilde{\sigma}_2$, the two lifts of $\bar{f}\sigma$ are $f\tilde{\sigma}_1$ and $f\tilde{\sigma}_2$ since $f$ takes antipodal points to antipodal points.


> Now we can see that all the maps $f_*$ and $\bar{f}_*$ in the commutative diagram of transfer sequences are isomorphisms by induction on dimension, using the evident fact that if three maps in a commutative square are isomorphisms, so is the fourth. The induction starts with the trivial fact that $f_*$ and $\bar{f}_*$ are isomorphisms in dimension zero.
> 
> In particular we deduce that the map $f_* : H_n(S^n; \mathbb{Z}_2) \to H_n(S^n; \mathbb{Z}_2)$ is an isomorphism. By Lemma 2.49 this map is multiplication by the degree of $f$ mod 2, so the degree of $f$ must be odd. $\square$

The fact that odd maps have odd degree easily implies the Borsuk-Ulam theorem:

> [!theorem] Corollary 2B.7 (Borsuk-Ulam Theorem)
> For every map $g : S^n \to \mathbb{R}^n$ there exists a point $x \in S^n$ with $g(x) = g(-x)$.

> [!proof]
> Let $f(x) = g(x) - g(-x)$, so $f$ is odd. We need to show that $f(x) = 0$ for some $x$. If this is not the case, we can replace $f(x)$ by $f(x)/|f(x)|$ to get a new map $f : S^n \to S^{n-1}$ which is still odd. The restriction of this $f$ to the equator $S^{n-1}$ then has odd degree by the proposition. But this restriction is nullhomotopic via the restriction of $f$ to one of the hemispheres bounded by $S^{n-1}$. $\square$

---

## 2.C. Simplicial Approximation

Many spaces of interest in algebraic topology can be given the structure of simplicial complexes, and early in the history of the subject this structure was exploited as one of the main technical tools. Later, CW complexes largely superseded simplicial complexes in this role, but there are still some occasions when the extra structure of simplicial complexes can be quite useful. This will be illustrated nicely by the proof of the classical Lefschetz fixed point theorem in this section.

One of the good features of simplicial complexes is that arbitrary continuous maps between them can always be deformed to maps that are linear on the simplices of some subdivision of the domain complex. This is the idea of 'simplicial approximation', developed by Brouwer and Alexander before 1920. Here is the relevant definition: If $K$ and $L$ are simplicial complexes, then a map $f : K \to L$ is **simplicial** if it sends each simplex of $K$ to a simplex of $L$ by a linear map taking vertices to vertices. In barycentric coordinates, a linear map of a simplex $[v_0, \ldots, v_n]$ has the form $\sum_i t_i v_i \mapsto \sum_i t_i f(v_i)$. Since a linear map from a simplex to a simplex is uniquely determined by its values on vertices, this means that a simplicial map is uniquely determined by its values on vertices. It is easy to see that a map from the vertices of $K$ to the vertices of $L$ extends to a simplicial map iff it sends the vertices of each simplex of $K$ to the vertices of some simplex of $L$.

Here is the most basic form of the Simplicial Approximation Theorem:

> [!theorem] Theorem 2C.1 (Simplicial Approximation Theorem)
> If $K$ is a finite simplicial complex and $L$ is an arbitrary simplicial complex, then any map $f : K \to L$ is homotopic to a map that is simplicial with respect to some iterated barycentric subdivision of $K$.


To see that subdivision of $K$ is essential, consider the case of maps $S^n \to S^n$. With fixed simplicial structures on the domain and range spheres there are only finitely many simplicial maps since there are only finitely many ways to map vertices to vertices. Hence only finitely many degrees are realized by maps that are simplicial with respect to fixed simplicial structures in both the domain and range spheres.

Before proving the simplicial approximation theorem we need some terminology and a lemma. The **star** $\text{St}\,\sigma$ of a simplex $\sigma$ in a simplicial complex $X$ is defined to be the subcomplex consisting of all the simplices of $X$ that contain $\sigma$. Closely related to this is the **open star** $\text{st}\,\sigma$, which is the union of the interiors of all simplices containing $\sigma$, where the interior of a simplex $\tau$ is by definition $\tau - \partial\tau$. Thus $\text{st}\,\sigma$ is an open set in $X$ whose closure is $\text{St}\,\sigma$.

> [!theorem] Lemma 2C.2
> For vertices $v_1, \ldots, v_n$ of a simplicial complex $X$, the intersection $\text{st}\,v_1 \cap \cdots \cap \text{st}\,v_n$ is empty unless $v_1, \ldots, v_n$ are the vertices of a simplex $\sigma$ of $X$, in which case $\text{st}\,v_1 \cap \cdots \cap \text{st}\,v_n = \text{st}\,\sigma$.

> [!proof]
> The intersection $\text{st}\,v_1 \cap \cdots \cap \text{st}\,v_n$ consists of the interiors of all simplices $\tau$ whose vertex set contains $\{v_1, \ldots, v_n\}$. If $\text{st}\,v_1 \cap \cdots \cap \text{st}\,v_n$ is nonempty, such a $\tau$ exists and contains the simplex $\sigma = [v_1, \ldots, v_n] \subset X$. The simplices $\tau$ containing $\{v_1, \ldots, v_n\}$ are just the simplices containing $\sigma$, so $\text{st}\,v_1 \cap \cdots \cap \text{st}\,v_n = \text{st}\,\sigma$. $\square$

> [!proof] Proof of 2C.1
> Choose a metric on $K$ that restricts to the standard Euclidean metric on each simplex of $K$. For example, $K$ can be viewed as a subcomplex of a simplex $\Delta^N$ whose vertices are all the vertices of $K$, and we can restrict a standard metric on $\Delta^N$ to give a metric on $K$. Let $\varepsilon$ be a Lebesgue number for the open cover $\{f^{-1}\text{st}\,w \mid w \text{ is a vertex of } L\}$ of $K$. After iterated barycentric subdivision of $K$ we may assume that each simplex has diameter less than $\varepsilon/2$. The closed star of each vertex $v$ of $K$ then has diameter less than $\varepsilon$, hence this closed star maps by $f$ to the open star of some vertex $g(v)$ of $L$. The resulting map $g : K^0 \to L^0$ thus satisfies $f(\text{St}\,v) \subset \text{st}\,g(v)$ for all vertices $v$ of $K$.
> 
> To see that $g$ extends to a simplicial map $g : K \to L$, consider the problem of extending $g$ over a simplex $[v_1, \ldots, v_n]$ of $K$. An interior point $x$ of this simplex lies in $\text{st}\,v_i$ for each $i$, so $f(x)$ lies in $\text{st}\,g(v_i)$ for each $i$, since $f(\text{st}\,v_i) \subset \text{st}\,g(v_i)$ by the definition of $g(v_i)$. Thus $\text{st}\,g(v_1) \cap \cdots \cap \text{st}\,g(v_n) \neq \emptyset$, so $[g(v_1), \ldots, g(v_n)]$ is a simplex of $L$ by the lemma, and we can extend $g$ linearly over $[v_1, \ldots, v_n]$. Both $f(x)$ and $g(x)$ lie in a single simplex of $L$ since $g(x)$ lies in $[g(v_1), \ldots, g(v_n)]$ and $f(x)$ lies in the star of this simplex. So taking the linear path $(1-t)f(x) + tg(x)$, $0 \leq t \leq 1$, in the simplex containing $f(x)$ and $g(x)$ defines a homotopy from $f$ to $g$. $\square$


Notice that if $f$ already sends some vertices of $K$ to vertices of $L$ then we may choose $g$ to equal to $f$ on these vertices, and hence the homotopy from $f$ to $g$ will be stationary on these vertices. This is convenient if one is in a situation where one wants maps and homotopies to preserve basepoints.

### The Lefschetz Fixed Point Theorem

This very classical application of homology is a considerable generalization of the Brouwer fixed point theorem. It is also related to the Euler characteristic formula.

For a homomorphism $\varphi : \mathbb{Z}^n \to \mathbb{Z}^n$ with matrix $[a_{ij}]$, the **trace** $\text{tr}\,\varphi$ is defined to be $\sum_i a_{ii}$, the sum of the diagonal elements of $[a_{ij}]$. Since $\text{tr}([a_{ij}][b_{ij}]) = \text{tr}([b_{ij}][a_{ij}])$, conjugate matrices have the same trace, and it follows that $\text{tr}\,\varphi$ is independent of the choice of basis for $\mathbb{Z}^n$. For a homomorphism $\varphi : A \to A$ of a finitely generated abelian group $A$ we can then define $\text{tr}\,\varphi$ to be the trace of the induced homomorphism $\varphi : A/\text{Torsion} \to A/\text{Torsion}$.

For a map $f : X \to X$ of a finite CW complex $X$, or more generally any space whose homology groups are finitely generated and vanish in high dimensions, the **Lefschetz number** $\tau(f)$ is defined to be $\sum_n (-1)^n \text{tr}(f_* : H_n(X) \to H_n(X))$. In particular, if $f$ is the identity, or is homotopic to the identity, then $\tau(f)$ is the Euler characteristic $\chi(X)$ since the trace of the $n \times n$ identity matrix is $n$.

Here is the Lefschetz fixed point theorem:

> [!theorem] Theorem 2C.3 (Lefschetz Fixed Point Theorem)
> If $X$ is a finite simplicial complex, or more generally a retract of a finite simplicial complex, and $f : X \to X$ is a map with $\tau(f) \neq 0$, then $f$ has a fixed point.

As we show in Theorem A.7 in the Appendix, every compact, locally contractible space that can be embedded in $\mathbb{R}^n$ for some $n$ is a retract of a finite simplicial complex. This includes compact manifolds and finite CW complexes, for example. The compactness hypothesis is essential, since a translation of $\mathbb{R}$ has $\tau = 1$ but no fixed points.

If $X$ has the same homology groups as a point, at least modulo torsion, then the theorem says that every map $X \to X$ has a fixed point. This holds for example for $\mathbb{RP}^n$ if $n$ is even. The case of projective spaces is interesting because of its connection with linear algebra. An invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ takes lines through $0$ to lines through $0$, hence induces a map $\bar{f} : \mathbb{RP}^{n-1} \to \mathbb{RP}^{n-1}$. Fixed points of $\bar{f}$ are equivalent to eigenvectors of $f$. The characteristic polynomial of $f$ has odd degree if $n$ is odd, hence has a real root, so an eigenvector exists in this case. This is in agreement with the observation above that every map $\mathbb{RP}^{2k} \to \mathbb{RP}^{2k}$ has a fixed point.


> [!proof] Proof of 2C.3
> The general case easily reduces to the case of finite simplicial complexes, for suppose $r : K \to X$ is a retraction of a finite simplicial complex $K$ onto $X$. For a map $f : X \to X$, the composition $fr : K \to X \subset K$ then has exactly the same fixed points as $f$. Since $r_* : H_n(K) \to H_n(X)$ is projection onto a direct summand, we have $\text{tr}(f_*r_*) = \text{tr}(f_*)$ and hence $\tau(fr) = \tau(f)$.
> 
> For $X$ a finite simplicial complex, suppose that $f : X \to X$ has no fixed points. We claim there is a subdivision $L$ of $X$, a further subdivision $K$ of $L$, and a simplicial map $g : K \to L$ homotopic to $f$ such that $g(\sigma) \cap \sigma = \emptyset$ for each simplex $\sigma$ of $K$. To see this, first choose a metric $d$ on $X$ as in the proof of the simplicial approximation theorem. Since $f$ has no fixed points, $d(x, f(x)) > 0$ for all $x \in X$, so by the compactness of $X$ there is an $\varepsilon > 0$ such that $d(x, f(x)) > \varepsilon$ for all $x$. Choose a subdivision $L$ of $X$ so that the stars of all simplices have diameter less than $\varepsilon/2$. Applying the simplicial approximation theorem, there is a subdivision $K$ of $L$ and a simplicial map $g : K \to L$ homotopic to $f$. By construction, $g$ has the property that for each simplex $\sigma$ of $K$, $f(\sigma)$ is contained in the star of the simplex $g(\sigma)$. Then $g(\sigma) \cap \sigma = \emptyset$ for each simplex $\sigma$ of $K$ since for any choice of $x \in \sigma$ we have $d(x, f(x)) > \varepsilon$, while $g(\sigma)$ lies within distance $\varepsilon/2$ of $f(x)$ and $\sigma$ lies within distance $\varepsilon/2$ of $x$, as a consequence of the fact that $\sigma$ is contained in a simplex of $L$, $K$ being a subdivision of $L$.
> 
> The Lefschetz numbers $\tau(f)$ and $\tau(g)$ are equal since $f$ and $g$ are homotopic. Since $g$ is simplicial, it takes the $n$-skeleton $K^n$ of $K$ to the $n$-skeleton $L^n$ of $L$, for each $n$. Since $K$ is a subdivision of $L$, $L^n$ is contained in $K^n$, and hence $g(K^n) \subset K^n$ for all $n$. Thus $g$ induces a chain map of the cellular chain complex $\{H_n(K^n, K^{n-1})\}$ to itself. This can be used to compute $\tau(g)$ according to the formula
> 
> $$\tau(g) = \sum_n (-1)^n \text{tr}(g_* : H_n(K^n, K^{n-1}) \to H_n(K^n, K^{n-1}))$$
> 
> This is the analog of Theorem 2.44 for trace instead of rank, and is proved in precisely the same way, based on the elementary algebraic fact that trace is additive for endomorphisms of short exact sequences: Given a commutative diagram with exact rows, then $\text{tr}\,\beta = \text{tr}\,\alpha + \text{tr}\,\gamma$.
> 
> Finally, note that $g_* : H_n(K^n, K^{n-1}) \to H_n(K^n, K^{n-1})$ has trace $0$ since the matrix for $g_*$ has zeros down the diagonal, in view of the fact that $g(\sigma) \cap \sigma = \emptyset$ for each $n$-simplex $\sigma$. So $\tau(f) = \tau(g) = 0$. $\square$

> [!example] Example 2C.4
> Let us verify the theorem in an example. Let $X$ be the closed orientable surface of genus 3, with $f : X \to X$ the 180 degree rotation about a vertical axis passing through the central hole of $X$. Since $f$ has no fixed points, we should have $\tau(f) = 0$. The induced map $f_* : H_0(X) \to H_0(X)$ is the identity, as always for a path-connected space, so this contributes $1$ to $\tau(f)$. For $H_1(X)$ we saw in Example 2A.2 that the six loops $α_i$ and $β_i$ represent a basis. The map $f_*$ interchanges the homology classes of $α_1$ and $α_3$, and likewise for $β_1$ and $β_3$, while $β_2$ is sent to itself and $α_2$ is sent to $α'_2$ which is homologous to $α_2$ as we saw in Example 2A.2. So $f_* : H_1(X) \to H_1(X)$ contributes $-2$ to $\tau(f)$. It remains to check that $f_* : H_2(X) \to H_2(X)$ is the identity, which contributes $+1$ to $\tau(f)$, giving $\tau(f) = 1 - 2 + 1 = 0$ as expected.


### Simplicial Approximations to CW Complexes

The simplicial approximation theorem allows arbitrary continuous maps to be replaced by homotopic simplicial maps in many situations, and one might wonder about the analogous question for spaces: Which spaces are homotopy equivalent to simplicial complexes? We will show this is true for the most common class of spaces in algebraic topology, CW complexes.

> [!theorem] Theorem 2C.5
> Every CW complex $X$ is homotopy equivalent to a simplicial complex, which can be chosen to be of the same dimension as $X$, finite if $X$ is finite, and countable if $X$ is countable.

We will build a simplicial complex $Y \simeq X$ inductively as an increasing union of subcomplexes $Y_n$ homotopy equivalent to the skeleta $X^n$. For the inductive step, assuming we have already constructed $Y_n \simeq X^n$, let $e^{n+1}$ be an $(n+1)$-cell of $X$ attached by a map $\varphi : S^n \to X^n$. The map $S^n \to Y_n$ corresponding to $\varphi$ under the homotopy equivalence $Y_n \simeq X^n$ is homotopic to a simplicial map $f : S^n \to Y_n$ by the simplicial approximation theorem, and it is not hard to see that the spaces $X^n \cup_\varphi e^{n+1}$ and $Y_n \cup_f e^{n+1}$ are homotopy equivalent, where the subscripts denote attaching $e^{n+1}$ via $\varphi$ and $f$, respectively. We can view $Y_n \cup_f e^{n+1}$ as the mapping cone $C_f$, obtained from the mapping cylinder of $f$ by collapsing the domain end to a point. If we knew that the mapping cone of a simplicial map was a simplicial complex, then by performing the same construction for all the $(n+1)$-cells of $X$ we would have completed the induction step. Unfortunately, and somewhat surprisingly, mapping cones and mapping cylinders are rather awkward objects in the simplicial category. To avoid this awkwardness we will instead construct simplicial analogs of mapping cones and cylinders that have all the essential features of actual mapping cones and cylinders.

Let us first construct the simplicial analog of a mapping cylinder. For a simplicial map $f : K \to L$ this will be a simplicial complex $M(f)$ containing both $L$ and the barycentric subdivision $K'$ of $K$ as subcomplexes, and such that there is a deformation retraction $r_t$ of $M(f)$ onto $L$ with $r_1|_{K'} = f$. The construction proceeds one simplex of $K$ at a time, by induction on dimension. To begin, the ordinary mapping cylinder of $f : K^0 \to L$ suffices for $M(f|_{K^0})$. Assume inductively that we have already constructed $M(f|_{K^{n-1}})$. Let $\sigma$ be an $n$-simplex of $K$ and let $\tau = f(\sigma)$, a simplex of $L$ of dimension $n$ or less. By the inductive hypothesis we have already constructed $M(f : \partial\sigma \to \tau)$ with the desired properties, and we let $M(f : \sigma \to \tau)$ be the cone on $M(f : \partial\sigma \to \tau)$. The space $M(f : \partial\sigma \to \tau)$ is contractible since by induction it deformation retracts onto $\tau$ which is contractible. The cone $M(f : \sigma \to \tau)$ is of course contractible, so the inclusion of $M(f : \partial\sigma \to \tau)$ into $M(f : \sigma \to \tau)$ is a homotopy equivalence.

From the simplicial analog $M(f)$ of a mapping cylinder we construct the simplicial 'mapping cone' $C(f)$ by attaching the ordinary cone on $K'$ to the subcomplex $K' \subset M(f)$.


> [!proof] Proof of 2C.5
> We will construct for each $n$ a CW complex $Z_n$ containing $X^n$ as a deformation retract and also containing as a deformation retract a subcomplex $Y_n$ that is a simplicial complex. Beginning with $Y_0 = Z_0 = X^0$, suppose inductively that we have already constructed $Y_n$ and $Z_n$. Let the cells $e^{n+1}_\alpha$ of $X$ be attached by maps $\varphi_\alpha : S^n \to X^n$. Using the simplicial approximation theorem, there is a homotopy from $\varphi_\alpha$ to a simplicial map $f_\alpha : S^n \to Y_n$. The CW complex $W_n = Z_n \cup \bigcup_\alpha M(f_\alpha)$ contains a simplicial subcomplex $S^n_\alpha$ homeomorphic to $S^n$ at one end of $M(f_\alpha)$, and the homeomorphism $S^n \approx S^n_\alpha$ is homotopic in $W_n$ to the map $f_\alpha$, hence also to $\varphi_\alpha$. Let $Z_{n+1}$ be obtained from $Z_n$ by attaching $D^{n+1}_\alpha \times I$'s via these homotopies between the $\varphi_\alpha$'s and the inclusions $S^n_\alpha \hookrightarrow W_n$. Thus $Z_{n+1}$ contains $X^{n+1}$ at one end, and at the other end we have a simplicial complex $Y_{n+1} = Y_n \cup \bigcup_\alpha C(f_\alpha)$, where $C(f_\alpha)$ is obtained from $M(f_\alpha)$ by attaching a cone on the subcomplex $S^n_\alpha$. Since $D^{n+1} \times I$ deformation retracts onto $\partial D^{n+1} \times I \cup D^{n+1} \times \{1\}$, we see that $Z_{n+1}$ deformation retracts onto $Z_n \cup Y_{n+1}$, which in turn deformation retracts onto $Y_n \cup Y_{n+1} = Y_{n+1}$ by induction. Likewise, $Z_{n+1}$ deformation retracts onto $X^{n+1} \cup W_n$ which deformation retracts onto $X^{n+1} \cup Z_n$ and hence onto $X^{n+1} \cup X^n = X^{n+1}$ by induction.
> 
> Let $Y = \bigcup_n Y_n$ and $Z = \bigcup_n Z_n$. The deformation retractions of $Z_n$ onto $X^n$ give deformation retractions of $X \cup Z_n$ onto $X$, and the infinite concatenation of the latter deformation retractions is a deformation retraction of $Z$ onto $X$. Similarly, $Z$ deformation retracts onto $Y$. $\square$

---

## Exercises

### Section 2.A Exercises

1. Compute $H_i(S^n - X)$ when $X$ is a subspace of $S^n$ homeomorphic to $S^k \vee S^\ell$ or to $S^k \sqcup S^\ell$.

2. Show that $\tilde{H}_i(S^n - X) \approx \tilde{H}_{n-i-1}(X)$ when $X$ is homeomorphic to a finite connected graph. [First do the case that the graph is a tree.]

3. Let $(D, S) \subset (D^n, S^{n-1})$ be a pair of subspaces homeomorphic to $(D^k, S^{k-1})$, with $D \cap S^{n-1} = S$. Show the inclusion $S^{n-1} - S \hookrightarrow D^n - D$ induces an isomorphism on homology.

4. In the unit sphere $S^{p+q-1} \subset \mathbb{R}^{p+q}$ let $S^{p-1}$ and $S^{q-1}$ be the subspheres consisting of points whose last $q$ and first $p$ coordinates are zero, respectively.
   - (a) Show that $S^{p+q-1} - S^{p-1}$ deformation retracts onto $S^{q-1}$, and is in fact homeomorphic to $S^{q-1} \times \mathbb{R}^p$.
   - (b) Show that $S^{p-1}$ and $S^{q-1}$ are not the boundaries of any pair of disjointly embedded disks $D^p$ and $D^q$ in $D^{p+q}$.

5. Let $S$ be an embedded $k$-sphere in $S^n$ for which there exists a disk $D^n \subset S^n$ intersecting $S$ in the disk $D^k \subset D^n$ defined by the first $k$ coordinates of $D^n$. Let $D^{n-k} \subset D^n$ be the disk defined by the last $n-k$ coordinates, with boundary sphere $S^{n-k-1}$. Show that the inclusion $S^{n-k-1} \hookrightarrow S^n - S$ induces an isomorphism on homology groups.


### Section 2.B Exercises

6. Modify the construction of the Alexander horned sphere to produce an embedding $S^2 \hookrightarrow \mathbb{R}^3$ for which neither component of $\mathbb{R}^3 - S^2$ is simply-connected.

7. Analyze what happens when the number of handles in the basic building block for the Alexander horned sphere is doubled.

8. Show that $\mathbb{R}^{2n+1}$ is not a division algebra over $\mathbb{R}$ if $n > 0$ by considering how the determinant of the linear map $x \mapsto ax$ given by the multiplication in a division algebra structure would vary as $a$ moves along a path in $\mathbb{R}^{2n+1} - \{0\}$ joining two antipodal points.

9. Make the transfer sequence explicit in the case of a trivial covering $\tilde{X} \to X$, where $\tilde{X} = X \times S^0$.

10. Use the transfer sequence for the covering $S^\infty \to \mathbb{RP}^\infty$ to compute $H_n(\mathbb{RP}^\infty; \mathbb{Z}_2)$.

11. Use the transfer sequence for the covering $X \times S^\infty \to X \times \mathbb{RP}^\infty$ to produce isomorphisms $H_n(X \times \mathbb{RP}^\infty; \mathbb{Z}_2) \approx \bigoplus_{i \leq n} H_i(X; \mathbb{Z}_2)$ for all $n$.

### Section 2.C Exercises

1. What is the minimum number of edges in simplicial complex structures $K$ and $L$ on $S^1$ such that there is a simplicial map $K \to L$ of degree $n$?

2. Use the Lefschetz fixed point theorem to show that a map $S^n \to S^n$ has a fixed point unless its degree is equal to the degree of the antipodal map $x \mapsto -x$.

3. Verify that the formula $f(z_1, \ldots, z_{2k}) = (z_2, -z_1, z_4, -z_3, \ldots, z_{2k}, -z_{2k-1})$ defines a map $f : \mathbb{C}^{2k} \to \mathbb{C}^{2k}$ inducing a quotient map $\mathbb{CP}^{2k-1} \to \mathbb{CP}^{2k-1}$ without fixed points.

4. If $X$ is a finite simplicial complex and $f : X \to X$ is a simplicial homeomorphism, show that the Lefschetz number $\tau(f)$ equals the Euler characteristic of the set of fixed points of $f$. In particular, $\tau(f)$ is the number of fixed points if the fixed points are isolated. [Hint: Barycentrically subdivide $X$ to make the fixed point set a subcomplex.]

5. Let $M$ be a closed orientable surface embedded in $\mathbb{R}^3$ in such a way that reflection across a plane $P$ defines a homeomorphism $r : M \to M$ fixing $M \cap P$, a collection of circles. Is it possible to homotope $r$ to have no fixed points?

6. Do an even-genus analog of Example 2C.4 by replacing the central torus by a sphere letting $f$ be a homeomorphism that restricts to the antipodal map on this sphere.

7. Verify that the Lefschetz fixed point theorem holds also when $\tau(f)$ is defined using homology with coefficients in a field $F$.

8. Let $X$ be homotopy equivalent to a finite simplicial complex and let $Y$ be homotopy equivalent to a finite or countably infinite simplicial complex. Using the simplicial approximation theorem, show that there are at most countably many homotopy classes of maps $X \to Y$.

9. Show that there are only countably many homotopy types of finite CW complexes.

---

*End of Additional Topics*