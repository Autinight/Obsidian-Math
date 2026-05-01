---
title: Hatcher Ch2 2.1 - Simplicial and Singular Homology
tags:
  - textbook
  - algebraic-topology
source: "[[30.Recources/AT/PDFs/Hatcher - 2002 - Algebraic topology.pdf]]"
section: Chapter 2, Section 2.1
date: 2026-05-01
---

# Chapter 2 — Homology

The most important homology theory in algebraic topology, and the one we shall be studying almost exclusively, is called singular homology. Since the technical apparatus of singular homology is somewhat complicated, we will first introduce a more primitive version called simplicial homology in order to see how some of the apparatus works in a simpler setting before beginning the general theory.

The natural domain of definition for simplicial homology is a class of spaces we call $\Delta$-complexes, which are a mild generalization of the more classical notion of a simplicial complex. Historically, the modern definition of singular homology was first given in [Eilenberg 1944], and $\Delta$-complexes were introduced soon thereafter in [Eilenberg-Zilber 1950] where they were called semisimplicial complexes. Within a few years this term came to be applied to what Eilenberg and Zilber called complete semisimplicial complexes, and later there was yet another shift in terminology as the latter objects came to be called simplicial sets. In theory this frees up the term semisimplicial complex to have its original meaning, but to avoid potential confusion it seems best to introduce a new name, and the term $\Delta$-complex has at least the virtue of brevity.

## $\Delta$-Complexes

The torus, the projective plane, and the Klein bottle can each be obtained from a square by identifying opposite edges in the way indicated by the arrows. Cutting a square along a diagonal produces two triangles, so each of these surfaces can also be built from two triangles by identifying their edges in pairs. In similar fashion a polygon with any number of sides can be cut along diagonals into triangles, so in fact all closed surfaces can be constructed from triangles by identifying edges. Thus we have a single building block, the triangle, from which all surfaces can be constructed. Using only triangles we could also construct a large class of 2-dimensional spaces that are not surfaces in the strict sense, by allowing more than two edges to be identified together at a time.

## Section 2.1 — Simplicial and Singular Homology

The idea of a $\Delta$-complex is to generalize constructions like these to any number of dimensions. The $n$-dimensional analog of the triangle is the $n$-simplex. This is the smallest convex set in a Euclidean space $\mathbb{R}^m$ containing $n+1$ points $v_0, \cdots, v_n$ that do not lie in a hyperplane of dimension less than $n$, where by a hyperplane we mean the set of solutions of a system of linear equations. An equivalent condition would be that the difference vectors $v_1 - v_0, \cdots, v_n - v_0$ are linearly independent. The points $v_i$ are the vertices of the simplex, and the simplex itself is denoted $[v_0, \cdots, v_n]$. For example, there is the standard $n$-simplex

$$
\Delta^n = \big\{(t_0, \cdots, t_n) \in \mathbb{R}^{n+1} \mid \sum_i t_i = 1 \text{ and } t_i \ge 0 \text{ for all } i\big\}
$$

whose vertices are the unit vectors along the coordinate axes.

For purposes of homology it will be important to keep track of the order of the vertices of a simplex, so '$n$-simplex' will really mean '$n$-simplex with an ordering of its vertices'. A by-product of ordering the vertices of a simplex $[v_0, \cdots, v_n]$ is that this determines orientations of the edges $[v_i, v_j]$ according to increasing subscripts. Specifying the ordering of the vertices also determines a canonical linear homeomorphism from the standard $n$-simplex $\Delta^n$ onto any other $n$-simplex $[v_0, \cdots, v_n]$, preserving the order of vertices, namely, $(t_0, \cdots, t_n) \mapsto \sum_i t_i v_i$. The coefficients $t_i$ are the barycentric coordinates of the point $\sum_i t_i v_i$ in $[v_0, \cdots, v_n]$.

If we delete one of the $n+1$ vertices of an $n$-simplex $[v_0, \cdots, v_n$, then the remaining $n$ vertices span an $(n-1)$-simplex, called a face of $[v_0, \cdots, v_n]$. We adopt the following convention:

> The vertices of a face, or of any subsimplex spanned by a subset of the vertices, will always be ordered according to their order in the larger simplex.

The union of all the faces of $\Delta^n$ is the boundary of $\Delta^n$, written $\partial \Delta^n$. The open simplex $\Delta^n$ is $\Delta^n - \partial \Delta^n$, the interior of $\Delta^n$.

> [!definition] Definition — $\Delta$-Complex Structure
> A $\Delta$-complex structure on a space $X$ is a collection of maps $\sigma_\alpha : \Delta^n \to X$, with $n$ depending on the index $\alpha$, such that:
>
> (i) The restriction $\sigma_\alpha|_{\mathring{\Delta}^n}$ is injective, and each point of $X$ is in the image of exactly one such restriction $\sigma_\alpha|_{\mathring{\Delta}^n}$.
>
> (ii) Each restriction of $\sigma_\alpha$ to a face of $\Delta^n$ is one of the maps $\sigma_\beta : \Delta^{n-1} \to X$. Here we are identifying the face of $\Delta^n$ with $\Delta^{n-1}$ by the canonical linear homeomorphism between them that preserves the ordering of the vertices.
>
> (iii) A set $A \subset X$ is open iff $\sigma_\alpha^{-1}(A)$ is open in $\Delta^n$ for each $\sigma_\alpha$.

Among other things, this last condition rules out trivialities like regarding all the points of $X$ as individual vertices. The earlier decompositions of the torus, projective plane, and Klein bottle into two triangles, three edges, and one or two vertices define $\Delta$-complex structures with a total of six $\sigma_\alpha$'s for the torus and Klein bottle and seven for the projective plane. The orientations on the edges in the pictures are compatible with a unique ordering of the vertices of each simplex, and these orderings determine the maps $\sigma_\alpha$.

A consequence of (iii) is that $X$ can be built as a quotient space of a collection of disjoint simplices $\Delta^n_\alpha$, one for each $\sigma_\alpha : \Delta^n \to X$, the quotient space obtained by identifying each face of a $\Delta^n_\alpha$ with the $\Delta^{n-1}_\beta$ corresponding to the restriction $\sigma_\beta$ of $\sigma_\alpha$ to the face in question, as in condition (ii). One can think of building the quotient space inductively, starting with a discrete set of vertices, then attaching edges to these to produce a graph, then attaching 2-simplices to the graph, and so on. From this viewpoint we see that the data specifying a $\Delta$-complex can be described purely combinatorially as collections of $n$-simplices $\Delta^n_\alpha$ for each $n$ together with functions associating to each face of each $n$-simplex $\Delta^n_\alpha$ an $(n-1)$-simplex $\Delta^{n-1}_\beta$.

More generally, $\Delta$-complexes can be built from collections of disjoint simplices by identifying various subsimplices spanned by subsets of the vertices, where the identifications are performed using the canonical linear homeomorphisms that preserve the orderings of the vertices. The earlier $\Delta$-complex structures on a torus, projective plane, or Klein bottle can be obtained in this way, by identifying pairs of edges of two 2-simplices. If one starts with a single 2-simplex and identifies all three edges to a single edge, preserving the orientations given by the ordering of the vertices, this produces a $\Delta$-complex known as the 'dunce hat'. By contrast, if the three edges of a 2-simplex are identified preserving a cyclic orientation of the three edges, this does not produce a $\Delta$-complex structure, although if the 2-simplex is subdivided into three smaller 2-simplices about a central vertex, then one does obtain a $\Delta$-complex structure on the quotient space.

Thinking of a $\Delta$-complex $X$ as a quotient space of a collection of disjoint simplices, it is not hard to see that $X$ must be a Hausdorff space. Condition (iii) then implies that each restriction $\sigma_\alpha|_{\mathring{\Delta}^n}$ is a homeomorphism onto its image, which is thus an open simplex in $X$. It follows from Proposition A.2 in the Appendix that these open simplices $\sigma_\alpha(\mathring{\Delta}^n)$ are the cells $e^n_\alpha$ of a CW complex structure on $X$ with the $\sigma_\alpha$'s as characteristic maps. We will not need this fact at present, however.

### Simplicial Homology

Our goal now is to define the simplicial homology groups of a $\Delta$-complex $X$. Let $\Delta_n(X)$ be the free abelian group with basis the open $n$-simplices $e^n_\alpha$ of $X$. Elements of $\Delta_n(X)$, called $n$-chains, can be written as finite formal sums $\sum_\alpha n_\alpha e^n_\alpha$ with coefficients $n_\alpha \in \mathbb{Z}$. Equivalently, we could write $\sum_\alpha n_\alpha \sigma_\alpha$ where $\sigma_\alpha : \Delta^n \to X$ is the characteristic map of $e^n_\alpha$, with image the closure of $e^n_\alpha$ as described above. Such a sum $\sum_\alpha n_\alpha \sigma_\alpha$ can be thought of as a finite collection, or 'chain', of $n$-simplices in $X$ with integer multiplicities, the coefficients $n_\alpha$.

As one can see, the boundary of the $n$-simplex $[v_0, \cdots, v_n]$ consists of the various $(n-1)$-dimensional simplices $[v_0, \cdots, \hat{v}_i, \cdots, v_n]$, where the 'hat' symbol $\hat{}$ over $v_i$ indicates that this vertex is deleted from the sequence $v_0, \cdots, v_n$. In terms of chains, we might then wish to say that the boundary of $[v_0, \cdots, v_n]$ is the $(n-1)$-chain formed by the sum of the faces $[v_0, \cdots, \hat{v}_i, \cdots, v_n]$. However, it turns out to be better to insert certain signs and instead let the boundary of $[v_0, \cdots, v_n]$ be $\sum_i (-1)^i [v_0, \cdots, \hat{v}_i, \cdots, v_n]$. Heuristically, the signs are inserted to take orientations into account, so that all the faces of a simplex are coherently oriented:

$$\partial[v_0, v_1] = [v_1] - [v_0]$$
$$\partial[v_0, v_1, v_2] = [v_1, v_2] - [v_0, v_2] + [v_0, v_1]$$
$$\partial[v_0, v_1, v_2, v_3] = [v_1, v_2, v_3] - [v_0, v_2, v_3] + [v_0, v_1, v_3] - [v_0, v_1, v_2]$$

In the last case, the orientations of the two hidden faces are also counterclockwise when viewed from outside the 3-simplex.

With this geometry in mind we define for a general $\Delta$-complex $X$ a boundary homomorphism $\partial_n : \Delta_n(X) \to \Delta_{n-1}(X)$ by specifying its values on basis elements:

$$\partial_n(\sigma_\alpha) = \sum_i (-1)^i \sigma_\alpha|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}$$

Note that the right side of this equation does indeed lie in $\Delta_{n-1}(X)$ since each restriction $\sigma_\alpha|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}$ is the characteristic map of an $(n-1)$-simplex of $X$.

> [!lemma] Lemma 2.1
> The composition $\Delta_n(X) \xrightarrow{\partial_n} \Delta_{n-1}(X) \xrightarrow{\partial_{n-1}} \Delta_{n-2}(X)$ is zero.

> [!proof] Proof of Lemma 2.1
> We have $\partial_n(\sigma) = \sum_i (-1)^i \sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}$, and hence
>
> $$\partial_{n-1}\partial_n(\sigma) = \sum_{j<i} (-1)^i(-1)^j \sigma|_{[v_0, \cdots, \hat{v}_j, \cdots, \hat{v}_i, \cdots, v_n]} + \sum_{j>i} (-1)^i(-1)^{j-1} \sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, \hat{v}_j, \cdots, v_n]}$$
>
> The latter two summations cancel since after switching $i$ and $j$ in the second sum, it becomes the negative of the first.

The algebraic situation we have now is a sequence of homomorphisms of abelian groups

$$\cdots \to C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots \to C_1 \xrightarrow{\partial_1} C_0 \xrightarrow{\partial_0} 0$$

with $\partial_n \partial_{n+1} = 0$ for each $n$. Such a sequence is called a **chain complex**. Note that we have extended the sequence by a 0 at the right end, with $\partial_0 = 0$. The equation $\partial_n \partial_{n+1} = 0$ is equivalent to the inclusion $\text{Im}\,\partial_{n+1} \subset \text{Ker}\,\partial_n$, where $\text{Im}$ and $\text{Ker}$ denote image and kernel. So we can define the **$n$th homology group** of the chain complex to be the quotient group $H_n = \text{Ker}\,\partial_n / \text{Im}\,\partial_{n+1}$. Elements of $\text{Ker}\,\partial_n$ are called **cycles** and elements of $\text{Im}\,\partial_{n+1}$ are called **boundaries**. Elements of $H_n$ are cosets of $\text{Im}\,\partial_{n+1}$, called **homology classes**. Two cycles representing the same homology class are said to be **homologous**. This means their difference is a boundary.

Returning to the case that $C_n = \Delta_n(X)$, the homology group $\text{Ker}\,\partial_n / \text{Im}\,\partial_{n+1}$ will be denoted $H^\Delta_n(X)$ and called the **$n$th simplicial homology group** of $X$.

> [!example] Example 2.2
> $X = S^1$, with one vertex $v$ and one edge $e$. Then $\Delta_0(S^1)$ and $\Delta_1(S^1)$ are both $\mathbb{Z}$ and the boundary map $\partial_1$ is zero since $\partial e = v - v$. The groups $\Delta_n(S^1)$ are 0 for $n \ge 2$ since there are no simplices in these dimensions. Hence
>
> $$H^\Delta_n(S^1) \approx \begin{cases} \mathbb{Z} & \text{for } n = 0, 1 \\ 0 & \text{for } n \ge 2 \end{cases}$$
>
> This is an illustration of the general fact that if the boundary maps in a chain complex are all zero, then the homology groups of the complex are isomorphic to the chain groups themselves.

> [!example] Example 2.3
> $X = T$, the torus with the $\Delta$-complex structure pictured earlier, having one vertex, three edges $a$, $b$, and $c$, and two 2-simplices $U$ and $L$. As in the previous example, $\partial_1 = 0$ so $H^\Delta_0(T) \approx \mathbb{Z}$. Since $\partial_2 U = a + b - c = \partial_2 L$ and $\{a, b, a+b-c\}$ is a basis for $\Delta_1(T)$, it follows that $H^\Delta_1(T) \approx \mathbb{Z} \oplus \mathbb{Z}$ with basis the homology classes $[a]$ and $[b]$. Since there are no 3-simplices, $H^\Delta_2(T)$ is equal to $\text{Ker}\,\partial_2$, which is infinite cyclic generated by $U - L$ since $\partial(pU + qL) = (p+q)(a+b-c) = 0$ only if $p = -q$. Thus
>
> $$H^\Delta_n(T) \approx \begin{cases} \mathbb{Z} \oplus \mathbb{Z} & \text{for } n = 1 \\ \mathbb{Z} & \text{for } n = 0, 2 \\ 0 & \text{for } n \ge 3 \end{cases}$$

> [!example] Example 2.4
> $X = \mathbb{RP}^2$, as pictured earlier, with two vertices $v$ and $w$, three edges $a$, $b$, and $c$, and two 2-simplices $U$ and $L$. Then $\text{Im}\,\partial_1$ is generated by $w - v$, so $H^\Delta_0(X) \approx \mathbb{Z}$ with either vertex as a generator. Since $\partial_2 U = -a+b+c$ and $\partial_2 L = a-b+c$, we see that $\partial_2$ is injective, so $H^\Delta_2(X) = 0$. Further, $\text{Ker}\,\partial_1 \approx \mathbb{Z} \oplus \mathbb{Z}$ with basis $a-b$ and $c$, and $\text{Im}\,\partial_2$ is an index-two subgroup of $\text{Ker}\,\partial_1$ since we can choose $c$ and $a-b+c$ as a basis for $\text{Ker}\,\partial_1$ and $a-b+c$ and $2c = (a-b+c) + (-a+b+c)$ as a basis for $\text{Im}\,\partial_2$. Thus $H^\Delta_1(X) \approx \mathbb{Z}_2$.

> [!example] Example 2.5
> We can obtain a $\Delta$-complex structure on $S^n$ by taking two copies of $\Delta^n$ and identifying their boundaries via the identity map. Labeling these two $n$-simplices $U$ and $L$, then it is obvious that $\text{Ker}\,\partial_n$ is infinite cyclic generated by $U - L$. Thus $H^\Delta_n(S^n) \approx \mathbb{Z}$ for this $\Delta$-complex structure on $S^n$. Computing the other homology groups would be more difficult.

Many similar examples could be worked out without much trouble, such as the other closed orientable and nonorientable surfaces. However, the calculations do tend to increase in complexity before long, particularly for higher-dimensional complexes. Some obvious general questions arise: Are the groups $H^\Delta_n(X)$ independent of the choice of $\Delta$-complex structure on $X$? In other words, if two $\Delta$-complexes are homeomorphic, do they have isomorphic homology groups? More generally, do they have isomorphic homology groups if they are merely homotopy equivalent? To answer such questions and to develop a general theory it is best to leave the rather rigid simplicial realm and introduce the singular homology groups. These have the added advantage that they are defined for all spaces, not just $\Delta$-complexes. At the end of this section, after some theory has been developed, we will show that simplicial and singular homology groups coincide for $\Delta$-complexes.

Traditionally, simplicial homology is defined for simplicial complexes, which are the $\Delta$-complexes whose simplices are uniquely determined by their vertices. This amounts to saying that each $n$-simplex has $n+1$ distinct vertices, and that no other $n$-simplex has this same set of vertices. Thus a simplicial complex can be described combinatorially as a set $X_0$ of vertices together with sets $X_n$ of $n$-simplices, which are $(n+1)$-element subsets of $X_0$. The only requirement is that each $(k+1)$-element subset of the vertices of an $n$-simplex in $X_n$ is a $k$-simplex, in $X_k$. From this combinatorial data a $\Delta$-complex $X$ can be constructed, once we choose a partial ordering of the vertices $X_0$ that restricts to a linear ordering on the vertices of each simplex in $X_n$. For example, we could just choose a linear ordering of all the vertices. This might perhaps involve invoking the Axiom of Choice for large vertex sets.

An exercise at the end of this section is to show that every $\Delta$-complex can be subdivided to be a simplicial complex. In particular, every $\Delta$-complex is then homeomorphic to a simplicial complex.

Compared with simplicial complexes, $\Delta$-complexes have the advantage of simpler computations since fewer simplices are required. For example, to put a simplicial complex structure on the torus one needs at least 14 triangles, 21 edges, and 7 vertices, and for $\mathbb{RP}^2$ one needs at least 10 triangles, 15 edges, and 6 vertices. This would slow down calculations considerably!

### Singular Homology

A singular $n$-simplex in a space $X$ is by definition just a map $\sigma : \Delta^n \to X$. The word 'singular' is used here to express the idea that $\sigma$ need not be a nice embedding but can have 'singularities' where its image does not look at all like a simplex. All that is required is that $\sigma$ be continuous. Let $C_n(X)$ be the free abelian group with basis the set of singular $n$-simplices in $X$. Elements of $C_n(X)$, called $n$-chains, or more precisely singular $n$-chains, are finite formal sums $\sum_i n_i \sigma_i$ for $n_i \in \mathbb{Z}$ and $\sigma_i : \Delta^n \to X$. A boundary map $\partial_n : C_n(X) \to C_{n-1}(X)$ is defined by the same formula as before:

$$\partial_n(\sigma) = \sum_i (-1)^i \sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}$$

Implicit in this formula is the canonical identification of $[v_0, \cdots, \hat{v}_i, \cdots, v_n]$ with $\Delta^{n-1}$, preserving the ordering of vertices, so that $\sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}$ is regarded as a map $\Delta^{n-1} \to X$, that is, a singular $(n-1)$-simplex.

Often we write the boundary map $\partial_n$ from $C_n(X)$ to $C_{n-1}(X)$ simply as $\partial$ when this does not lead to serious ambiguities. The proof of Lemma 2.1 applies equally well to singular simplices, showing that $\partial_n \partial_{n+1} = 0$ or more concisely $\partial^2 = 0$, so we can define the singular homology group $H_n(X) = \text{Ker}\,\partial_n / \text{Im}\,\partial_{n+1}$.

It is evident from the definition that homeomorphic spaces have isomorphic singular homology groups $H_n$, in contrast with the situation for $H^\Delta_n$. On the other hand, since the groups $C_n(X)$ are so large, the number of singular $n$-simplices in $X$ usually being uncountable, it is not at all clear that for a $\Delta$-complex $X$ with finitely many simplices, $H_n(X)$ should be finitely generated for all $n$, or that $H_n(X)$ should be zero for $n$ larger than the dimension of $X$ — two properties that are trivial for $H^\Delta_n(X)$.

Though singular homology looks so much more general than simplicial homology, it can actually be regarded as a special case of simplicial homology by means of the following construction. For an arbitrary space $X$, define the **singular complex** $S(X)$ to be the $\Delta$-complex with one $n$-simplex $\Delta^n_\sigma$ for each singular $n$-simplex $\sigma : \Delta^n \to X$, with $\Delta^n_\sigma$ attached in the obvious way to the $(n-1)$-simplices of $S(X)$ that are the restrictions of $\sigma$ to the various $(n-1)$-simplices in $\partial \Delta^n$. It is clear from the definitions that $H^\Delta_n(S(X))$ is identical with $H_n(X)$ for all $n$, and in this sense the singular homology group $H_n(X)$ is a special case of a simplicial homology group. One can regard $S(X)$ as a $\Delta$-complex model for $X$, although it is usually an extremely large object compared to $X$.

Cycles in singular homology are defined algebraically, but they can be given a somewhat more geometric interpretation in terms of maps from finite $\Delta$-complexes. To see this, note first that a singular $n$-chain $\xi$ can always be written in the form $\sum_i \varepsilon_i \sigma_i$ with $\varepsilon_i = \pm 1$, allowing repetitions of the singular $n$-simplices $\sigma_i$. Given such an $n$-chain $\xi = \sum_i \varepsilon_i \sigma_i$, when we compute $\partial \xi$ as a sum of singular $(n-1)$-simplices with signs $\pm 1$, there may be some canceling pairs consisting of two identical singular $(n-1)$-simplices with opposite signs. Choosing a maximal collection of such canceling pairs, construct an $n$-dimensional $\Delta$-complex $K_\xi$ from a disjoint union of $n$-simplices $\Delta^n_i$, one for each $\sigma_i$, by identifying the pairs of $(n-1)$-dimensional faces corresponding to the chosen canceling pairs. The $\sigma_i$'s then induce a map $K_\xi \to X$. If $\xi$ is a cycle, all the $(n-1)$-dimensional faces of the $\Delta^n_i$'s are identified in pairs. Thus $K_\xi$ is a manifold, locally homeomorphic to $\mathbb{R}^n$, near all points in the complement of the $(n-2)$-skeleton $K_\xi^{n-2}$. All the $n$-simplices of $K_\xi$ can be coherently oriented by taking the signs of the $\sigma_i$'s into account, so $K_\xi - K_\xi^{n-2}$ is actually an oriented manifold. A closer inspection shows that $K_\xi$ is also a manifold near points in the interiors of $(n-2)$-simplices, so the nonmanifold points of $K_\xi$ in fact lie in the $(n-3)$-skeleton. However, near points in the interiors of $(n-3)$-simplices it can very well happen that $K_\xi$ is not a manifold.

In particular, elements of $H_1(X)$ are represented by collections of oriented loops in $X$, and elements of $H_2(X)$ are represented by maps of closed oriented surfaces into $X$. With a bit more work it can be shown that an oriented 1-cycle $\coprod_\alpha S^1_\alpha \to X$ is zero in $H_1(X)$ iff it extends to a map of a compact oriented surface with boundary $\coprod_\alpha S^1_\alpha$ into $X$. The analogous statement for 2-cycles is also true. In the early days of homology theory it may have been believed, or at least hoped, that this close connection with manifolds continued in all higher dimensions, but this has turned out not to be the case. There is a sort of homology theory built from manifolds, called bordism, but it is quite a bit more complicated than the homology theory we are studying here.

After these preliminary remarks let us begin to see what can be proved about singular homology.

> [!proposition] Proposition 2.6
> Corresponding to the decomposition of a space $X$ into its path-components $X_\alpha$ there is an isomorphism of $H_n(X)$ with the direct sum $\bigoplus_\alpha H_n(X_\alpha)$.

> [!proof] Proof of Proposition 2.6
> Since a singular simplex always has path-connected image, $C_n(X)$ splits as the direct sum of its subgroups $C_n(X_\alpha)$. The boundary maps $\partial_n$ preserve this direct sum decomposition, taking $C_n(X_\alpha)$ to $C_{n-1}(X_\alpha)$, so $\text{Ker}\,\partial_n$ and $\text{Im}\,\partial_{n+1}$ split similarly as direct sums, hence the homology groups also split, $H_n(X) \approx \bigoplus_\alpha H_n(X_\alpha)$.

> [!proposition] Proposition 2.7
> If $X$ is nonempty and path-connected, then $H_0(X) \approx \mathbb{Z}$. Hence for any space $X$, $H_0(X)$ is a direct sum of $\mathbb{Z}$'s, one for each path-component of $X$.

> [!proof] Proof of Proposition 2.7
> By definition, $H_0(X) = C_0(X) / \text{Im}\,\partial_1$ since $\partial_0 = 0$. Define a homomorphism $\varepsilon : C_0(X) \to \mathbb{Z}$ by $\varepsilon\big(\sum_i n_i \sigma_i\big) = \sum_i n_i$. This is obviously surjective if $X$ is nonempty. The claim is that $\text{Ker}\,\varepsilon = \text{Im}\,\partial_1$ if $X$ is path-connected, and hence $\varepsilon$ induces an isomorphism $H_0(X) \approx \mathbb{Z}$.
>
> To verify the claim, observe first that $\text{Im}\,\partial_1 \subset \text{Ker}\,\varepsilon$ since for a singular 1-simplex $\sigma : \Delta^1 \to X$ we have $\varepsilon\,\partial_1(\sigma) = \varepsilon(\sigma|_{[v_1]} - \sigma|_{[v_0]}) = 1 - 1 = 0$.
>
> For the reverse inclusion $\text{Ker}\,\varepsilon \subset \text{Im}\,\partial_1$, suppose $\varepsilon\big(\sum_i n_i \sigma_i\big) = 0$, so $\sum_i n_i = 0$. The $\sigma_i$'s are singular 0-simplices, which are simply points of $X$. Choose a path $\tau_i : I \to X$ from a basepoint $x_0$ to $\sigma_i(v_0)$ and let $\sigma_0$ be the singular 0-simplex with image $x_0$. We can view $\tau_i$ as a singular 1-simplex, a map $\tau_i : [v_0, v_1] \to X$, and then we have $\partial \tau_i = \sigma_i - \sigma_0$. Hence $\partial\big(\sum_i n_i \tau_i\big) = \sum_i n_i \sigma_i - \sum_i n_i \sigma_0 = \sum_i n_i \sigma_i$ since $\sum_i n_i = 0$. Thus $\sum_i n_i \sigma_i$ is a boundary, which shows that $\text{Ker}\,\varepsilon \subset \text{Im}\,\partial_1$.

> [!proposition] Proposition 2.8
> If $X$ is a point, then $H_n(X) = 0$ for $n > 0$ and $H_0(X) \approx \mathbb{Z}$.

> [!proof] Proof of Proposition 2.8
> In this case there is a unique singular $n$-simplex $\sigma_n$ for each $n$, and $\partial(\sigma_n) = \sum_i (-1)^i \sigma_{n-1}$, a sum of $n+1$ terms, which is therefore 0 for $n$ odd and $\sigma_{n-1}$ for $n$ even, $n \ne 0$. Thus we have the chain complex
>
> $$\cdots \to \mathbb{Z} \xrightarrow{\approx} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{\approx} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$$
>
> with boundary maps alternately isomorphisms and trivial maps, except at the last $\mathbb{Z}$. The homology groups of this complex are trivial except for $H_0 \approx \mathbb{Z}$.

It is often very convenient to have a slightly modified version of homology for which a point has trivial homology groups in all dimensions, including zero. This is done by defining the **reduced homology groups** $\tilde{H}_n(X)$ to be the homology groups of the augmented chain complex

$$\cdots \to C_2(X) \xrightarrow{\partial_2} C_1(X) \xrightarrow{\partial_1} C_0(X) \xrightarrow{\varepsilon} \mathbb{Z} \to 0$$

where $\varepsilon\big(\sum_i n_i \sigma_i\big) = \sum_i n_i$ as in the proof of Proposition 2.7. Here we had better require $X$ to be nonempty, to avoid having a nontrivial homology group in dimension $-1$. Since $\varepsilon \partial_1 = 0$, $\varepsilon$ vanishes on $\text{Im}\,\partial_1$ and hence induces a map $H_0(X) \to \mathbb{Z}$ with kernel $\tilde{H}_0(X)$, so $H_0(X) \approx \tilde{H}_0(X) \oplus \mathbb{Z}$. Obviously $H_n(X) \approx \tilde{H}_n(X)$ for $n > 0$.

Formally, one can think of the extra $\mathbb{Z}$ in the augmented chain complex as generated by the unique map $[\emptyset] \to X$ where $[\emptyset]$ is the empty simplex, with no vertices. The augmentation map $\varepsilon$ is then the usual boundary map since $\partial[v_0] = [\hat{v}_0] = [\emptyset]$.

Readers who know about the fundamental group $\pi_1(X)$ may wish to make a detour here to look at §2.A where it is shown that $H_1(X)$ is the abelianization of $\pi_1(X)$ whenever $X$ is path-connected. This result will not be needed elsewhere in the chapter, however.

### Homotopy Invariance

The first substantial result we will prove about singular homology is that homotopy equivalent spaces have isomorphic homology groups. This will be done by showing that a map $f : X \to Y$ induces a homomorphism $f_* : H_n(X) \to H_n(Y)$ for each $n$, and that $f_*$ is an isomorphism if $f$ is a homotopy equivalence.

For a map $f : X \to Y$, an induced homomorphism $f_\sharp : C_n(X) \to C_n(Y)$ is defined by composing each singular $n$-simplex $\sigma : \Delta^n \to X$ with $f$ to get a singular $n$-simplex $f_\sharp(\sigma) = f\sigma : \Delta^n \to Y$, then extending $f_\sharp$ linearly via $f_\sharp\big(\sum_i n_i \sigma_i\big) = \sum_i n_i f_\sharp(\sigma_i) = \sum_i n_i f\sigma_i$. The maps $f_\sharp : C_n(X) \to C_n(Y)$ satisfy $f_\sharp \partial = \partial f_\sharp$ since

$$f_\sharp \partial(\sigma) = f_\sharp\Big(\sum_i (-1)^i \sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]}\Big) = \sum_i (-1)^i f\sigma|_{[v_0, \cdots, \hat{v}_i, \cdots, v_n]} = \partial f_\sharp(\sigma)$$

Thus we have a diagram such that in each square the composition $f_\sharp \partial$ equals the composition $\partial f_\sharp$. A diagram of maps with the property that any two compositions of maps starting at one point in the diagram and ending at another are equal is called a **commutative diagram**. In the present case commutativity of the diagram is equivalent to the commutativity relation $f_\sharp \partial = \partial f_\sharp$, but commutative diagrams can contain commutative triangles, pentagons, etc., as well as commutative squares.

The fact that the maps $f_\sharp : C_n(X) \to C_n(Y)$ satisfy $f_\sharp \partial = \partial f_\sharp$ is also expressed by saying that the $f_\sharp$'s define a **chain map** from the singular chain complex of $X$ to that of $Y$. The relation $f_\sharp \partial = \partial f_\sharp$ implies that $f_\sharp$ takes cycles to cycles since $\partial \alpha = 0$ implies $\partial(f_\sharp \alpha) = f_\sharp(\partial \alpha) = 0$. Also, $f_\sharp$ takes boundaries to boundaries since $f_\sharp(\partial \beta) = \partial(f_\sharp \beta)$. Hence $f_\sharp$ induces a homomorphism $f_* : H_n(X) \to H_n(Y)$. An algebraic statement of what we have just proved is:

> [!proposition] Proposition 2.9
> A chain map between chain complexes induces homomorphisms between the homology groups of the two complexes.

Two basic properties of induced homomorphisms which are important in spite of being rather trivial are:
(i) $(fg)_* = f_* g_*$ for a composed mapping $X \xrightarrow{g} Y \xrightarrow{f} Z$. This follows from associativity of compositions $\Delta^n \xrightarrow{\sigma} X \xrightarrow{g} Y \xrightarrow{f} Z$.
(ii) $\mathbb{1}_* = \mathbb{1}$ where $\mathbb{1}$ denotes the identity map of a space or a group.

Less trivially, we have:

> [!theorem] Theorem 2.10
> If two maps $f, g : X \to Y$ are homotopic, then they induce the same homomorphism $f_* = g_* : H_n(X) \to H_n(Y)$.

In view of the formal properties $(fg)_* = f_* g_*$ and $\mathbb{1}_* = \mathbb{1}$, this immediately implies:

> [!corollary] Corollary 2.11
> The maps $f_* : H_n(X) \to H_n(Y)$ induced by a homotopy equivalence $f : X \to Y$ are isomorphisms for all $n$.

For example, if $X$ is contractible then $\tilde{H}_n(X) = 0$ for all $n$.

> [!proof] Proof of Theorem 2.10
> The essential ingredient is a procedure for subdividing $\Delta^n \times I$ into simplices. In $\Delta^n \times I$, let $\Delta^n \times \{0\} = [v_0, \cdots, v_n]$ and $\Delta^n \times \{1\} = [w_0, \cdots, w_n]$, where $v_i$ and $w_i$ have the same image under the projection $\Delta^n \times I \to \Delta^n$. We can pass from $[v_0, \cdots, v_n]$ to $[w_0, \cdots, w_n]$ by interpolating a sequence of $n$-simplices, each obtained from the preceding one by moving one vertex $v_i$ up to $w_i$, starting with $v_n$ and working backwards to $v_0$. Thus the first step is to move $[v_0, \cdots, v_n]$ up to $[v_0, \cdots, v_{n-1}, w_n]$, then the second step is to move this up to $[v_0, \cdots, v_{n-2}, w_{n-1}, w_n]$, and so on. In the typical step $[v_0, \cdots, v_i, w_{i+1}, \cdots, w_n]$ moves up to $[v_0, \cdots, v_{i-1}, w_i, \cdots, w_n]$.
>
> The region between these two $n$-simplices is exactly the $(n+1)$-simplex $[v_0, \cdots, v_i, w_i, \cdots, w_n]$ which has $[v_0, \cdots, v_i, w_{i+1}, \cdots, w_n]$ as its lower face and $[v_0, \cdots, v_{i-1}, w_i, \cdots, w_n]$ as its upper face. Altogether, $\Delta^n \times I$ is the union of the $(n+1)$-simplices $[v_0, \cdots, v_i, w_i, \cdots, w_n]$, each intersecting the next in an $n$-simplex face.
>
> Given a homotopy $F : X \times I \to Y$ from $f$ to $g$ and a singular simplex $\sigma : \Delta^n \to X$, we can form the composition $F \circ (\sigma \times \mathbb{1}) : \Delta^n \times I \to X \times I \to Y$. Using this, we can define **prism operators** $P : C_n(X) \to C_{n+1}(Y)$ by the following formula:
>
> $$P(\sigma) = \sum_i (-1)^i F \circ (\sigma \times \mathbb{1})|_{[v_0, \cdots, v_i, w_i, \cdots, w_n]}$$
>
> We will show that these prism operators satisfy the basic relation
>
> $$\partial P = g_\sharp - f_\sharp - P\partial$$
>
> Geometrically, the left side of this equation represents the boundary of the prism, and the three terms on the right side represent the top $\Delta^n \times \{1\}$, the bottom $\Delta^n \times \{0\}$, and the sides $\partial \Delta^n \times I$ of the prism. To prove the relation we calculate:
>
> $$\partial P(\sigma) = \sum_{j \le i} (-1)^i(-1)^j F \circ (\sigma \times \mathbb{1})|_{[v_0, \cdots, \hat{v}_j, \cdots, v_i, w_i, \cdots, w_n]} + \sum_{j \ge i} (-1)^i(-1)^{j+1} F \circ (\sigma \times \mathbb{1})|_{[v_0, \cdots, v_i, w_i, \cdots, \hat{w}_j, \cdots, w_n]}$$
>
> The terms with $i = j$ in the two sums cancel except for $F \circ (\sigma \times \mathbb{1})|_{[\hat{v}_0, w_0, \cdots, w_n]}$, which is $g \circ \sigma = g_\sharp(\sigma)$, and $-F \circ (\sigma \times \mathbb{1})|_{[v_0, \cdots, v_n, \hat{w}_n]}$, which is $-f \circ \sigma = -f_\sharp(\sigma)$. The terms with $i \ne j$ are exactly $-P\partial(\sigma)$.
>
> Now we can finish the proof of the theorem. If $\alpha \in C_n(X)$ is a cycle, then we have $g_\sharp(\alpha) - f_\sharp(\alpha) = \partial P(\alpha) + P\partial(\alpha) = \partial P(\alpha)$ since $\partial \alpha = 0$. Thus $g_\sharp(\alpha) - f_\sharp(\alpha)$ is a boundary, so $g_\sharp(\alpha)$ and $f_\sharp(\alpha)$ determine the same homology class, which means that $g_*$ equals $f_*$ on the homology class of $\alpha$.

The relationship $\partial P + P\partial = g_\sharp - f_\sharp$ is expressed by saying $P$ is a **chain homotopy** between the chain maps $f_\sharp$ and $g_\sharp$. We have just shown:

> [!proposition] Proposition 2.12
> Chain-homotopic chain maps induce the same homomorphism on homology.

There are also induced homomorphisms $f_* : \tilde{H}_n(X) \to \tilde{H}_n(Y)$ for reduced homology groups since $f_\sharp \varepsilon = \varepsilon f_\sharp$ where $f_\sharp$ is the identity map on the added groups $\mathbb{Z}$ in the augmented chain complexes. The properties of induced homomorphisms we proved above hold equally well in the setting of reduced homology, with the same proofs.

### Exact Sequences and Excision

If there was always a simple relationship between the homology groups of a space $X$, a subspace $A$, and the quotient space $X/A$, then this could be a very useful tool in understanding the homology groups of spaces such as CW complexes that can be built inductively from successively more complicated subspaces. Perhaps the simplest possible relationship would be if $H_n(X)$ contained $H_n(A)$ as a subgroup and the quotient group $H_n(X)/H_n(A)$ was isomorphic to $H_n(X/A)$. While this does hold in some cases, if it held in general then homology theory would collapse totally since every space $X$ can be embedded as a subspace of a space with trivial homology groups, namely the cone $CX = (X \times I)/(X \times \{0\})$, which is contractible.

It turns out that this overly simple model does not have to be modified too much to get a relationship that is valid in fair generality. The novel feature of the actual relationship is that it involves the groups $H_n(X)$, $H_n(A)$, and $H_n(X/A)$ for all values of $n$ simultaneously. In practice this is not as bad as it might sound, and in addition it has the pleasant side effect of sometimes allowing higher-dimensional homology groups to be computed in terms of lower-dimensional groups which may already be known, for example by induction.

In order to formulate the relationship we are looking for, we need an algebraic definition which is central to algebraic topology. A sequence of homomorphisms

$$\cdots \to A_{n+1} \xrightarrow{\alpha_{n+1}} A_n \xrightarrow{\alpha_n} A_{n-1} \to \cdots$$

is said to be **exact** if $\text{Ker}\,\alpha_n = \text{Im}\,\alpha_{n+1}$ for each $n$. The inclusions $\text{Im}\,\alpha_{n+1} \subset \text{Ker}\,\alpha_n$ are equivalent to $\alpha_n \alpha_{n+1} = 0$, so the sequence is a chain complex, and the opposite inclusions $\text{Ker}\,\alpha_n \subset \text{Im}\,\alpha_{n+1}$ say that the homology groups of this chain complex are trivial.

A number of basic algebraic concepts can be expressed in terms of exact sequences, for example:
(i) $0 \to A \xrightarrow{\alpha} B$ is exact iff $\text{Ker}\,\alpha = 0$, i.e., $\alpha$ is injective.
(ii) $A \xrightarrow{\alpha} B \to 0$ is exact iff $\text{Im}\,\alpha = B$, i.e., $\alpha$ is surjective.
(iii) $0 \to A \xrightarrow{\alpha} B \to 0$ is exact iff $\alpha$ is an isomorphism, by (i) and (ii).
(iv) $0 \to A \xrightarrow{\alpha} B \xrightarrow{\beta} C \to 0$ is exact iff $\alpha$ is injective, $\beta$ is surjective, and $\text{Ker}\,\beta = \text{Im}\,\alpha$, so $\beta$ induces an isomorphism $C \approx B/\text{Im}\,\alpha$. This can be written $C \approx B/A$ if we think of $\alpha$ as an inclusion of $A$ as a subgroup of $B$.

An exact sequence $0 \to A \to B \to C \to 0$ as in (iv) is called a **short exact sequence**.

Exact sequences provide the right tool to relate the homology groups of a space, a subspace, and the associated quotient space:

> [!theorem] Theorem 2.13
> If $X$ is a space and $A$ is a nonempty closed subspace that is a deformation retract of some neighborhood in $X$, then there is an exact sequence
>
> $$\cdots \to \tilde{H}_n(A) \xrightarrow{i_*} \tilde{H}_n(X) \xrightarrow{j_*} \tilde{H}_n(X/A) \xrightarrow{\partial} \tilde{H}_{n-1}(A) \xrightarrow{i_*} \tilde{H}_{n-1}(X) \to \cdots$$
>
> $$\cdots \to \tilde{H}_0(X/A) \to 0$$
>
> where $i$ is the inclusion $A \hookrightarrow X$ and $j$ is the quotient map $X \to X/A$.

The map $\partial$ will be constructed in the course of the proof. The idea is that an element $x \in \tilde{H}_n(X/A)$ can be represented by a chain $\alpha$ in $X$ with $\partial \alpha$ a cycle in $A$ whose homology class is $\partial x \in \tilde{H}_{n-1}(A)$.

Pairs of spaces $(X, A)$ satisfying the hypothesis of the theorem will be called **good pairs**. For example, if $X$ is a CW complex and $A$ is a nonempty subcomplex, then $(X, A)$ is a good pair by Proposition A.5 in the Appendix.

> [!corollary] Corollary 2.14
> $\tilde{H}_n(S^n) \approx \mathbb{Z}$ and $\tilde{H}_i(S^n) = 0$ for $i \ne n$.

> [!proof] Proof of Corollary 2.14
> For $n > 0$ take $(X, A) = (D^n, S^{n-1})$ so $X/A = S^n$. The terms $\tilde{H}_i(D^n)$ in the long exact sequence for this pair are zero since $D^n$ is contractible. Exactness of the sequence then implies that the maps $\tilde{H}_i(S^n) \xrightarrow{\partial} \tilde{H}_{i-1}(S^{n-1})$ are isomorphisms for $i > 0$ and that $\tilde{H}_0(S^n) = 0$. The result now follows by induction on $n$, starting with the case of $S^0$ where the result holds by Propositions 2.6 and 2.8.

As an application of this calculation we have the following classical theorem of Brouwer, the 2-dimensional case of which was proved in §1.1.

> [!corollary] Corollary 2.15
> $\partial D^n$ is not a retract of $D^n$. Hence every map $f : D^n \to D^n$ has a fixed point.

> [!proof] Proof of Corollary 2.15
> If $r : D^n \to \partial D^n$ is a retraction, then $ri = \mathbb{1}$ for $i : \partial D^n \to D^n$ the inclusion map. The composition $\tilde{H}_{n-1}(\partial D^n) \xrightarrow{i_*} \tilde{H}_{n-1}(D^n) \xrightarrow{r_*} \tilde{H}_{n-1}(\partial D^n)$ is then the identity map on $\tilde{H}_{n-1}(\partial D^n) \approx \mathbb{Z}$. But $i_*$ and $r_*$ are both 0 since $\tilde{H}_{n-1}(D^n) = 0$, and we have a contradiction. The statement about fixed points follows as in Theorem 1.9.

The derivation of the exact sequence of homology groups for a good pair $(X, A)$ will be rather a long story. We will in fact derive a more general exact sequence which holds for arbitrary pairs $(X, A)$, but with the homology groups of the quotient space $X/A$ replaced by **relative homology groups**, denoted $H_n(X, A)$. These turn out to be quite useful for many other purposes as well.

#### Relative Homology Groups

It sometimes happens that by ignoring a certain amount of data or structure one obtains a simpler, more flexible theory which, almost paradoxically, can give results not readily obtainable in the original setting. A familiar instance of this is arithmetic mod $n$, where one ignores multiples of $n$. Relative homology is another example. In this case what one ignores is all singular chains in a subspace of the given space.

Relative homology groups are defined in the following way. Given a space $X$ and a subspace $A \subset X$, let $C_n(X, A)$ be the quotient group $C_n(X)/C_n(A)$. Thus chains in $A$ are trivial in $C_n(X, A)$. Since the boundary map $\partial : C_n(X) \to C_{n-1}(X)$ takes $C_n(A)$ to $C_{n-1}(A)$, it induces a quotient boundary map $\partial : C_n(X, A) \to C_{n-1}(X, A)$. Letting $n$ vary, we have a sequence of boundary maps

$$\cdots \to C_n(X, A) \xrightarrow{\partial} C_{n-1}(X, A) \to \cdots$$

The relation $\partial^2 = 0$ holds for these boundary maps since it holds before passing to quotient groups. So we have a chain complex, and the homology groups $\text{Ker}\,\partial / \text{Im}\,\partial$ of this chain complex are by definition the **relative homology groups** $H_n(X, A)$. By considering the definition of the relative boundary map we see:

- Elements of $H_n(X, A)$ are represented by **relative cycles**: $n$-chains $\alpha \in C_n(X)$ such that $\partial \alpha \in C_{n-1}(A)$.
- A relative cycle $\alpha$ is trivial in $H_n(X, A)$ iff it is a **relative boundary**: $\alpha = \partial \beta + \gamma$ for some $\beta \in C_{n+1}(X)$ and $\gamma \in C_n(A)$.

These properties make precise the intuitive idea that $H_n(X, A)$ is 'homology of $X$ modulo $A$'.

The quotient $C_n(X)/C_n(A)$ could also be viewed as a subgroup of $C_n(X)$, the subgroup with basis the singular $n$-simplices $\sigma : \Delta^n \to X$ whose image is not contained in $A$. However, the boundary map does not take this subgroup of $C_n(X)$ to the corresponding subgroup of $C_{n-1}(X)$, so it is usually better to regard $C_n(X, A)$ as a quotient rather than a subgroup of $C_n(X)$.

Our goal now is to show that the relative homology groups $H_n(X, A)$ for any pair $(X, A)$ fit into a long exact sequence

$$\cdots \to H_n(A) \to H_n(X) \to H_n(X, A) \to H_{n-1}(A) \to H_{n-1}(X) \to \cdots$$
$$\cdots \to H_0(X, A) \to 0$$

This will be entirely a matter of algebra. To start the process, consider the diagram where $i$ is inclusion and $j$ is the quotient map. The diagram is commutative by the definition of the boundary maps. Letting $n$ vary, and drawing these short exact sequences vertically rather than horizontally, we have a large commutative diagram of the form shown at the right, where the columns are exact and the rows are chain complexes which we denote $\mathcal{A}$, $\mathcal{B}$, and $\mathcal{C}$. Such a diagram is called a **short exact sequence of chain complexes**.

We will show that when we pass to homology groups, this short exact sequence of chain complexes stretches out into a long exact sequence of homology groups

$$\cdots \to H_n(\mathcal{A}) \xrightarrow{i_*} H_n(\mathcal{B}) \xrightarrow{j_*} H_n(\mathcal{C}) \xrightarrow{\partial} H_{n-1}(\mathcal{A}) \xrightarrow{i_*} H_{n-1}(\mathcal{B}) \to \cdots$$

where $H_n(\mathcal{A})$ denotes the homology group $\text{Ker}\,\partial / \text{Im}\,\partial$ at $A_n$ in the chain complex $\mathcal{A}$, and $H_n(\mathcal{B})$ and $H_n(\mathcal{C})$ are defined similarly.

The commutativity of the squares in the short exact sequence of chain complexes means that $i$ and $j$ are chain maps. These therefore induce maps $i_*$ and $j_*$ on homology. To define the boundary map $\partial : H_n(\mathcal{C}) \to H_{n-1}(\mathcal{A})$, let $c \in C_n$ be a cycle. Since $j$ is onto, $c = j(b)$ for some $b \in B_n$. The element $\partial b \in B_{n-1}$ is in $\text{Ker}\,j$ since $j(\partial b) = \partial j(b) = \partial c = 0$. So $\partial b = i(a)$ for some $a \in A_{n-1}$ since $\text{Ker}\,j = \text{Im}\,i$. Note that $\partial a = 0$ since $i(\partial a) = \partial i(a) = \partial \partial b = 0$ and $i$ is injective. We define $\partial : H_n(\mathcal{C}) \to H_{n-1}(\mathcal{A})$ by sending the homology class of $c$ to the homology class of $a$, $\partial[c] = [a]$. This is well-defined since:

- The element $a$ is uniquely determined by $\partial b$ since $i$ is injective.
- A different choice $b'$ for $b$ would have $j(b') = j(b)$, so $b' - b$ is in $\text{Ker}\,j = \text{Im}\,i$. Thus $b' - b = i(a')$ for some $a'$, hence $b' = b + i(a')$. The effect of replacing $b$ by $b + i(a')$ is to change $a$ to the homologous element $a + \partial a'$ since $i(a + \partial a') = i(a) + i(\partial a') = \partial b + \partial i(a') = \partial(b + i(a'))$.
- A different choice of $c$ within its homology class would have the form $c + \partial c'$. Since $c' = j(b')$ for some $b'$, we then have $c + \partial c' = c + \partial j(b') = c + j(\partial b') = j(b + \partial b')$, so $b$ is replaced by $b + \partial b'$, which leaves $\partial b$ and therefore also $a$ unchanged.

The map $\partial : H_n(\mathcal{C}) \to H_{n-1}(\mathcal{A})$ is a homomorphism since if $\partial[c_1] = [a_1]$ and $\partial[c_2] = [a_2]$ via elements $b_1$ and $b_2$ as above, then $j(b_1 + b_2) = j(b_1) + j(b_2) = c_1 + c_2$ and $i(a_1 + a_2) = i(a_1) + i(a_2) = \partial b_1 + \partial b_2 = \partial(b_1 + b_2)$, so $\partial([c_1] + [c_2]) = [a_1] + [a_2]$.

> [!theorem] Theorem 2.16
> The sequence of homology groups
>
> $$\cdots \to H_n(\mathcal{A}) \xrightarrow{i_*} H_n(\mathcal{B}) \xrightarrow{j_*} H_n(\mathcal{C}) \xrightarrow{\partial} H_{n-1}(\mathcal{A}) \xrightarrow{i_*} H_{n-1}(\mathcal{B}) \to \cdots$$
>
> is exact.

> [!proof] Proof of Theorem 2.16
> There are six things to verify:
>
> **Im $i_* \subset$ Ker $j_*$**. This is immediate since $ji = 0$ implies $j_* i_* = 0$.
>
> **Im $j_* \subset$ Ker $\partial$**. We have $\partial j_* = 0$ since in this case $\partial b = 0$ in the definition of $\partial$.
>
> **Im $\partial \subset$ Ker $i_*$**. Here $i_* \partial = 0$ since $i_* \partial$ takes $[c]$ to $[\partial b] = 0$.
>
> **Ker $j_* \subset$ Im $i_*$**. A homology class in Ker $j_*$ is represented by a cycle $b \in B_n$ with $j(b)$ a boundary, so $j(b) = \partial c'$ for some $c' \in C_{n+1}$. Since $j$ is surjective, $c' = j(b')$ for some $b' \in B_{n+1}$. We have $j(b - \partial b') = j(b) - j(\partial b') = j(b) - \partial j(b') = 0$ since $\partial j(b') = \partial c' = j(b)$. So $b - \partial b' = i(a)$ for some $a \in A_n$. This $a$ is a cycle since $i(\partial a) = \partial i(a) = \partial(b - \partial b') = \partial b = 0$ and $i$ is injective. Thus $i_*[a] = [b - \partial b'] = [b]$, showing that $i_*$ maps onto Ker $j_*$.
>
> **Ker $\partial \subset$ Im $j_*$**. In the notation used in the definition of $\partial$, if $c$ represents a homology class in Ker $\partial$, then $a = \partial a'$ for some $a' \in A_n$. The element $b - i(a')$ is a cycle since $\partial(b - i(a')) = \partial b - \partial i(a') = \partial b - i(\partial a') = \partial b - i(a) = 0$. And $j(b - i(a')) = j(b) - ji(a') = j(b) = c$, so $j_*$ maps $[b - i(a')]$ to $[c]$.
>
> **Ker $i_* \subset$ Im $\partial$**. Given a cycle $a \in A_{n-1}$ such that $i(a) = \partial b$ for some $b \in B_n$, then $j(b)$ is a cycle since $\partial j(b) = j(\partial b) = ji(a) = 0$, and $\partial$ takes $[j(b)]$ to $[a]$.

This theorem represents the beginnings of the subject of homological algebra. The method of proof is sometimes called **diagram chasing**.

Returning to topology, the preceding algebraic theorem yields a long exact sequence of homology groups:

$$\cdots \to H_n(A) \xrightarrow{i_*} H_n(X) \xrightarrow{j_*} H_n(X, A) \xrightarrow{\partial} H_{n-1}(A) \xrightarrow{i_*} H_{n-1}(X) \to \cdots$$
$$\cdots \to H_0(X, A) \to 0$$

The boundary map $\partial : H_n(X, A) \to H_{n-1}(A)$ has a very simple description: If a class $[\alpha] \in H_n(X, A)$ is represented by a relative cycle $\alpha$, then $\partial[\alpha]$ is the class of the cycle $\partial \alpha$ in $H_{n-1}(A)$. This is immediate from the algebraic definition of the boundary homomorphism in the long exact sequence of homology groups associated to a short exact sequence of chain complexes.

This long exact sequence makes precise the idea that the groups $H_n(X, A)$ measure the difference between the groups $H_n(X)$ and $H_n(A)$. In particular, exactness implies that if $H_n(X, A) = 0$ for all $n$, then the inclusion $A \hookrightarrow X$ induces isomorphisms $H_n(A) \approx H_n(X)$ for all $n$, by the remark (iii) following the definition of exactness. The converse is also true according to an exercise at the end of this section.

There is a completely analogous long exact sequence of reduced homology groups for a pair $(X, A)$ with $A \ne \emptyset$. This comes from applying the preceding algebraic machinery to the short exact sequence of chain complexes formed by the short exact sequences $0 \to C_n(A) \to C_n(X) \to C_n(X, A) \to 0$ in nonnegative dimensions, augmented by the short exact sequence $0 \to \mathbb{Z} \xrightarrow{\mathbb{1}} \mathbb{Z} \to 0 \to 0$ in dimension $-1$. In particular this means that $\tilde{H}_n(X, A)$ is the same as $H_n(X, A)$ for all $n$, when $A \ne \emptyset$.

> [!example] Example 2.17
> In the long exact sequence of reduced homology groups for the pair $(D^n, \partial D^n)$, the maps $H_i(D^n, \partial D^n) \xrightarrow{\partial} \tilde{H}_{i-1}(S^{n-1})$ are isomorphisms for all $i > 0$ since the remaining terms $\tilde{H}_i(D^n)$ are zero for all $i$. Thus we obtain the calculation
>
> $$H_i(D^n, \partial D^n) \approx \begin{cases} \mathbb{Z} & \text{for } i = n \\ 0 & \text{otherwise} \end{cases}$$

> [!example] Example 2.18
> Applying the long exact sequence of reduced homology groups to a pair $(X, x_0)$ with $x_0 \in X$ yields isomorphisms $H_n(X, x_0) \approx \tilde{H}_n(X)$ for all $n$ since $\tilde{H}_n(x_0) = 0$ for all $n$.

There are induced homomorphisms for relative homology just as there are in the nonrelative, or 'absolute', case. A map $f : X \to Y$ with $f(A) \subset B$, or more concisely $f : (X, A) \to (Y, B)$, induces homomorphisms $f_\sharp : C_n(X, A) \to C_n(Y, B)$ since the chain map $f_\sharp : C_n(X) \to C_n(Y)$ takes $C_n(A)$ to $C_n(B)$, so we get a well-defined map on quotients, $f_\sharp : C_n(X, A) \to C_n(Y, B)$. The relation $f_\sharp \partial = \partial f_\sharp$ holds for relative chains since it holds for absolute chains. By Proposition 2.9 we then have induced homomorphisms $f_* : H_n(X, A) \to H_n(Y, B)$.

> [!proposition] Proposition 2.19
> If two maps $f, g : (X, A) \to (Y, B)$ are homotopic through maps of pairs $(X, A) \to (Y, B)$, then $f_* = g_* : H_n(X, A) \to H_n(Y, B)$.

> [!proof] Proof of Proposition 2.19
> The prism operator $P$ from the proof of Theorem 2.10 takes $C_n(A)$ to $C_{n+1}(B)$, hence induces a relative prism operator $P : C_n(X, A) \to C_{n+1}(Y, B)$. Since we are just passing to quotient groups, the formula $\partial P + P\partial = g_\sharp - f_\sharp$ remains valid. Thus the maps $f_\sharp$ and $g_\sharp$ on relative chain groups are chain homotopic, and hence they induce the same homomorphism on relative homology groups.

An easy generalization of the long exact sequence of a pair $(X, A)$ is the **long exact sequence of a triple** $(X, A, B)$, where $B \subset A \subset X$:

$$\cdots \to H_n(A, B) \to H_n(X, B) \to H_n(X, A) \to H_{n-1}(A, B) \to \cdots$$

This is the long exact sequence of homology groups associated to the short exact sequence of chain complexes formed by the short exact sequences

$$0 \to C_n(A, B) \to C_n(X, B) \to C_n(X, A) \to 0$$

For example, taking $B$ to be a point, the long exact sequence of the triple $(X, A, B)$ becomes the long exact sequence of reduced homology for the pair $(X, A)$.

// __CONTINUE_HERE__