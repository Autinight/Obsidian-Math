---
title: Hatcher Ch2 2.1 - Simplicial and Singular Homology
tags:
  - textbook
  - algebraic-topology
source: "[[pdf - AT Hatcher.pdf]]"
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

#### Excision

A fundamental property of relative homology groups is given by the following Excision Theorem, describing when the relative groups $H_n(X, A)$ are unaffected by deleting, or excising, a subset $Z \subset A$.

> [!theorem] Theorem 2.20 — Excision
> Given subspaces $Z \subset A \subset X$ such that the closure of $Z$ is contained in the interior of $A$, then the inclusion $(X - Z, A - Z) \hookrightarrow (X, A)$ induces isomorphisms $H_n(X - Z, A - Z) \to H_n(X, A)$ for all $n$. Equivalently, for subspaces $A, B \subset X$ whose interiors cover $X$, the inclusion $(B, A \cap B) \hookrightarrow (X, A)$ induces isomorphisms $H_n(B, A \cap B) \to H_n(X, A)$ for all $n$.

The translation between the two versions is obtained by setting $B = X - Z$ and $Z = X - B$. Then $A \cap B = A - Z$ and the condition $\text{cl}\,Z \subset \text{int}\,A$ is equivalent to $X = \text{int}\,A \cup \text{int}\,B$ since $X - \text{int}\,B = \text{cl}\,Z$.

The proof of the excision theorem will involve a rather lengthy technical detour involving a construction known as **barycentric subdivision**, which allows homology groups to be computed using small singular simplices. In a metric space 'smallness' can be defined in terms of diameters, but for general spaces it will be defined in terms of covers.

For a space $X$, let $\mathcal{U} = \{U_j\}$ be a collection of subspaces of $X$ whose interiors form an open cover of $X$, and let $C_n^\mathcal{U}(X)$ be the subgroup of $C_n(X)$ consisting of chains $\sum_i n_i \sigma_i$ such that each $\sigma_i$ has image contained in some set in the cover $\mathcal{U}$. The boundary map $\partial : C_n(X) \to C_{n-1}(X)$ takes $C_n^\mathcal{U}(X)$ to $C_{n-1}^\mathcal{U}(X)$, so the groups $C_n^\mathcal{U}(X)$ form a chain complex. We denote the homology groups of this chain complex by $H_n^\mathcal{U}(X)$.

> [!proposition] Proposition 2.21
> The inclusion $\iota : C_n^\mathcal{U}(X) \hookrightarrow C_n(X)$ is a chain homotopy equivalence, that is, there is a chain map $\rho : C_n(X) \to C_n^\mathcal{U}(X)$ such that $\iota \rho$ and $\rho \iota$ are chain homotopic to the identity. Hence $\iota$ induces isomorphisms $H_n^\mathcal{U}(X) \approx H_n(X)$ for all $n$.

> [!proof] Proof of Proposition 2.21
> The barycentric subdivision process will be performed at four levels, beginning with the most geometric and becoming increasingly algebraic.
>
> **(1) Barycentric Subdivision of Simplices.** The points of a simplex $[v_0, \cdots, v_n]$ are the linear combinations $\sum_i t_i v_i$ with $\sum_i t_i = 1$ and $t_i \ge 0$ for each $i$. The **barycenter** or 'center of gravity' of the simplex $[v_0, \cdots, v_n]$ is the point $b = \sum_i t_i v_i$ whose barycentric coordinates $t_i$ are all equal, namely $t_i = 1/(n+1)$ for each $i$. The barycentric subdivision of $[v_0, \cdots, v_n]$ is the decomposition of $[v_0, \cdots, v_n]$ into the $n$-simplices $[b, w_0, \cdots, w_{n-1}]$ where, inductively, $[w_0, \cdots, w_{n-1}]$ is an $(n-1)$-simplex in the barycentric subdivision of a face $[v_0, \cdots, \hat{v}_i, \cdots, v_n]$. The induction starts with the case $n = 0$ when the barycentric subdivision of $[v_0]$ is defined to be just $[v_0]$ itself.
>
> It follows from the inductive definition that the vertices of simplices in the barycentric subdivision of $[v_0, \cdots, v_n]$ are exactly the barycenters of all the $k$-dimensional faces $[v_{i_0}, \cdots, v_{i_k}]$ of $[v_0, \cdots, v_n]$ for $0 \le k \le n$. When $k = 0$ this gives the original vertices $v_i$ since the barycenter of a 0-simplex is itself. The barycenter of $[v_{i_0}, \cdots, v_{i_k}]$ has barycentric coordinates $t_i = 1/(k+1)$ for $i = i_0, \cdots, i_k$ and $t_i = 0$ otherwise.
>
> The $n$-simplices of the barycentric subdivision of $\Delta^n$, together with all their faces, do in fact form a $\Delta$-complex structure on $\Delta^n$, indeed a simplicial complex structure, though we shall not need to know this in what follows.
>
> A fact we will need is that the diameter of each simplex of the barycentric subdivision of $[v_0, \cdots, v_n]$ is at most $n/(n+1)$ times the diameter of $[v_0, \cdots, v_n]$. Here the diameter of a simplex is by definition the maximum distance between any two of its points, and we are using the metric from the ambient Euclidean space $\mathbb{R}^m$ containing $[v_0, \cdots, v_n]$. The diameter of a simplex equals the maximum distance between any of its vertices because the distance between two points $v$ and $\sum_i t_i v_i$ of $[v_0, \cdots, v_n]$ satisfies the inequality
>
> $$\left|v - \sum_i t_i v_i\right| = \left|\sum_i t_i(v - v_i)\right| \le \sum_i t_i |v - v_i| \le \sum_i t_i \max_j |v - v_j| = \max_j |v - v_j|$$
>
> To obtain the bound $n/(n+1)$ on the ratio of diameters, we therefore need to verify that the distance between any two vertices $w_j$ and $w_k$ of a simplex $[w_0, \cdots, w_n]$ of the barycentric subdivision of $[v_0, \cdots, v_n]$ is at most $n/(n+1)$ times the diameter of $[v_0, \cdots, v_n]$. If neither $w_j$ nor $w_k$ is the barycenter $b$ of $[v_0, \cdots, v_n]$, then these two points lie in a proper face of $[v_0, \cdots, v_n]$ and we are done by induction on $n$. So we may suppose $w_j$, say, is the barycenter $b$, and then by the previous displayed inequality we may take $w_k$ to be a vertex $v_i$. Let $b_i$ be the barycenter of $[v_0, \cdots, \hat{v}_i, \cdots, v_n]$, with all barycentric coordinates equal to $1/n$ except for $t_i = 0$. Then we have $b = \frac{1}{n+1} v_i + \frac{n}{n+1} b_i$. The sum of the two coefficients is 1, so $b$ lies on the line segment $[v_i, b_i]$ from $v_i$ to $b_i$, and the distance from $b$ to $v_i$ is $n/(n+1)$ times the length of $[v_i, b_i]$. Hence the distance from $b$ to $v_i$ is bounded by $n/(n+1)$ times the diameter of $[v_0, \cdots, v_n]$.
>
> The significance of the factor $n/(n+1)$ is that by repeated barycentric subdivision we can produce simplices of arbitrarily small diameter since $(n/(n+1))^r$ approaches 0 as $r$ goes to infinity. It is important that the bound $n/(n+1)$ does not depend on the shape of the simplex since repeated barycentric subdivision produces simplices of many different shapes.
>
> **(2) Barycentric Subdivision of Linear Chains.** The main part of the proof will be to construct a subdivision operator $S : C_n(X) \to C_n(X)$ and show this is chain homotopic to the identity map. First we will construct $S$ and the chain homotopy in a more restricted linear setting.
>
> For a convex set $Y$ in some Euclidean space, the linear maps $\Delta^n \to Y$ generate a subgroup of $C_n(Y)$ that we denote $LC_n(Y)$, the **linear chains**. The boundary map $\partial : C_n(Y) \to C_{n-1}(Y)$ takes $LC_n(Y)$ to $LC_{n-1}(Y)$, so the linear chains form a subcomplex of the singular chain complex of $Y$. We can uniquely designate a linear map $\lambda : \Delta^n \to Y$ by $[w_0, \cdots, w_n]$ where $w_i$ is the image under $\lambda$ of the $i$th vertex of $\Delta^n$. To avoid having to make exceptions for 0-simplices it will be convenient to augment the complex $LC(Y)$ by setting $LC_{-1}(Y) = \mathbb{Z}$ generated by the empty simplex $[\emptyset]$, with $\partial[w_0] = [\emptyset]$ for all 0-simplices $[w_0]$.
>
> Each point $b \in Y$ determines a homomorphism $b : LC_n(Y) \to LC_{n+1}(Y)$ defined on basis elements by $b([w_0, \cdots, w_n]) = [b, w_0, \cdots, w_n]$. Geometrically, the homomorphism $b$ can be regarded as a **cone operator**, sending a linear chain to the cone having the linear chain as the base of the cone and the point $b$ as the tip of the cone. Applying the usual formula for $\partial$, we obtain the relation $\partial b([w_0, \cdots, w_n]) = [w_0, \cdots, w_n] - b(\partial[w_0, \cdots, w_n])$. By linearity it follows that $\partial b(\alpha) = \alpha - b(\partial \alpha)$ for all $\alpha \in LC_n(Y)$. This expresses algebraically the geometric fact that the boundary of a cone consists of its base together with the cone on the boundary of its base. The relation $\partial b(\alpha) = \alpha - b(\partial \alpha)$ can be rewritten as $\partial b + b\partial = \mathbb{1}$, so $b$ is a chain homotopy between the identity map and the zero map on the augmented chain complex $LC(Y)$.
>
> Now we define a subdivision homomorphism $S : LC_n(Y) \to LC_n(Y)$ by induction on $n$. Let $\lambda : \Delta^n \to Y$ be a generator of $LC_n(Y)$ and let $b_\lambda$ be the image of the barycenter of $\Delta^n$ under $\lambda$. Then the inductive formula for $S$ is $S(\lambda) = b_\lambda(S\partial \lambda)$ where $b_\lambda : LC_{n-1}(Y) \to LC_n(Y)$ is the cone operator defined in the preceding paragraph. The induction starts with $S([\emptyset]) = [\emptyset]$, so $S$ is the identity on $LC_{-1}(Y)$. It is also the identity on $LC_0(Y)$, since when $n = 0$ the formula for $S$ becomes $S([w_0]) = w_0(S\partial[w_0]) = w_0(S([\emptyset])) = w_0([\emptyset]) = [w_0]$. When $\lambda$ is an embedding, with image a genuine $n$-simplex $[w_0, \cdots, w_n]$, then $S(\lambda)$ is the sum of the $n$-simplices in the barycentric subdivision of $[w_0, \cdots, w_n]$, with certain signs that could be computed explicitly.
>
> Let us check that the maps $S$ satisfy $\partial S = S\partial$, and hence give a chain map from the chain complex $LC(Y)$ to itself. Since $S = \mathbb{1}$ on $LC_0(Y)$ and $LC_{-1}(Y)$, we certainly have $\partial S = S\partial$ on $LC_0(Y)$. The result for larger $n$ is given by the following calculation:
>
> $$\partial S\lambda = \partial b_\lambda(S\partial\lambda) = S\partial\lambda - b_\lambda \partial(S\partial\lambda) = S\partial\lambda - b_\lambda S(\partial\partial\lambda) = S\partial\lambda$$
>
> where we used $\partial b_\lambda = \mathbb{1} - b_\lambda \partial$ in the second step and induction on $n$ in the third step, and $\partial\partial = 0$ in the last step.
>
> We next build a chain homotopy $T : LC_n(Y) \to LC_{n+1}(Y)$ between $S$ and the identity. We define $T$ on $LC_n(Y)$ inductively by setting $T = 0$ for $n = -1$ and letting $T\lambda = b_\lambda(\lambda - T\partial\lambda)$ for $n \ge 0$. The chain homotopy formula $\partial T + T\partial = \mathbb{1} - S$ is trivial on $LC_{-1}(Y)$ where $T = 0$ and $S = \mathbb{1}$. Verifying the formula on $LC_n(Y)$ with $n \ge 0$ is done by the calculation:
>
> $$\partial T\lambda = \partial b_\lambda(\lambda - T\partial\lambda) = \lambda - T\partial\lambda - b_\lambda \partial(\lambda - T\partial\lambda) = \lambda - T\partial\lambda - b_\lambda[\partial\lambda - \partial T(\partial\lambda)] = \lambda - T\partial\lambda - b_\lambda[S(\partial\lambda) + T\partial(\partial\lambda)] = \lambda - T\partial\lambda - S\lambda$$
>
> where we used $\partial b_\lambda = \mathbb{1} - b_\lambda \partial$ in the second step, and induction in the fifth step, and $\partial\partial = 0$ and $S\lambda = b_\lambda(S\partial\lambda)$ in the last step.
>
> Now we can discard the group $LC_{-1}(Y)$ and the relation $\partial T + T\partial = \mathbb{1} - S$ still holds since $T$ was zero on $LC_{-1}(Y)$.
>
> **(3) Barycentric Subdivision of General Chains.** Define $S : C_n(X) \to C_n(X)$ by setting $S\sigma = \sigma_\sharp S\Delta^n$ for a singular $n$-simplex $\sigma : \Delta^n \to X$. Since $S\Delta^n$ is the sum of the $n$-simplices in the barycentric subdivision of $\Delta^n$, with certain signs, $S\sigma$ is the corresponding signed sum of the restrictions of $\sigma$ to the $n$-simplices of the barycentric subdivision of $\Delta^n$. The operator $S$ is a chain map since
>
> $$\partial S\sigma = \partial \sigma_\sharp S\Delta^n = \sigma_\sharp \partial S\Delta^n = \sigma_\sharp S\partial\Delta^n = \sigma_\sharp S\Big(\sum_i (-1)^i \Delta^n_i\Big) = \sum_i (-1)^i \sigma_\sharp S\Delta^n_i = \sum_i (-1)^i S(\sigma|_{\Delta^n_i}) = S\Big(\sum_i (-1)^i \sigma|_{\Delta^n_i}\Big) = S(\partial\sigma)$$
>
> In similar fashion we define $T : C_n(X) \to C_{n+1}(X)$ by $T\sigma = \sigma_\sharp T\Delta^n$, and this gives a chain homotopy between $S$ and the identity, since the formula $\partial T + T\partial = \mathbb{1} - S$ holds by the calculation
>
> $$\partial T\sigma = \partial \sigma_\sharp T\Delta^n = \sigma_\sharp \partial T\Delta^n = \sigma_\sharp(\Delta^n - S\Delta^n - T\partial\Delta^n) = \sigma - S\sigma - \sigma_\sharp T\partial\Delta^n = \sigma - S\sigma - T(\partial\sigma)$$
>
> where the last equality follows just as in the previous displayed calculation, with $S$ replaced by $T$.
>
> **(4) Iterated Barycentric Subdivision.** A chain homotopy between $\mathbb{1}$ and the iterate $S^m$ is given by the operator $D_m = \sum_{0 \le i < m} TS^i$ since
>
> $$\partial D_m + D_m \partial = \sum_{0 \le i < m}(\partial TS^i + TS^i\partial) = \sum_{0 \le i < m}(\partial TS^i + T\partial S^i) = \sum_{0 \le i < m}(\partial T + T\partial)S^i = \sum_{0 \le i < m}(\mathbb{1} - S)S^i = \sum_{0 \le i < m}(S^i - S^{i+1}) = \mathbb{1} - S^m$$
>
> For each singular $n$-simplex $\sigma : \Delta^n \to X$ there exists an $m$ such that $S^m(\sigma)$ lies in $C_n^\mathcal{U}(X)$ since the diameter of the simplices of $S^m(\Delta^n)$ will be less than a Lebesgue number of the cover of $\Delta^n$ by the open sets $\sigma^{-1}(\text{int}\,U_j)$ if $m$ is large enough. (Recall that a Lebesgue number for an open cover of a compact metric space is a number $\varepsilon > 0$ such that every set of diameter less than $\varepsilon$ lies in some set of the cover; such a number exists by an elementary compactness argument.) We cannot expect the same number $m$ to work for all $\sigma$'s, so let us define $m(\sigma)$ to be the smallest $m$ such that $S^m \sigma$ is in $C_n^\mathcal{U}(X)$.
>
> We now define $D : C_n(X) \to C_{n+1}(X)$ by setting $D\sigma = D_{m(\sigma)}\sigma$ for each singular $n$-simplex $\sigma : \Delta^n \to X$. For this $D$ we would like to find a chain map $\rho : C_n(X) \to C_n(X)$ with image in $C_n^\mathcal{U}(X)$ satisfying the chain homotopy equation
>
> $$\tag{*} \partial D + D\partial = \mathbb{1} - \rho$$
>
> A quick way to do this is simply to regard this equation as defining $\rho$, so we let $\rho = \mathbb{1} - \partial D - D\partial$. It follows easily that $\rho$ is a chain map since
>
> $$\partial\rho(\sigma) = \partial\sigma - \partial^2 D\sigma - \partial D\partial\sigma = \partial\sigma - \partial D\partial\sigma$$
>
> and
>
> $$\rho(\partial\sigma) = \partial\sigma - \partial D\partial\sigma - D\partial^2\sigma = \partial\sigma - \partial D\partial\sigma$$
>
> To check that $\rho$ takes $C_n(X)$ to $C_n^\mathcal{U}(X)$ we compute $\rho(\sigma)$ more explicitly:
>
> $$\rho(\sigma) = \sigma - \partial D\sigma - D(\partial\sigma) = \sigma - \partial D_{m(\sigma)}\sigma - D(\partial\sigma) = S^{m(\sigma)}\sigma + D_{m(\sigma)}(\partial\sigma) - D(\partial\sigma)$$
>
> since $\partial D_m + D_m \partial = \mathbb{1} - S^m$. The term $S^{m(\sigma)}\sigma$ lies in $C_n^\mathcal{U}(X)$ by the definition of $m(\sigma)$. The remaining terms $D_{m(\sigma)}(\partial\sigma) - D(\partial\sigma)$ are linear combinations of terms $D_{m(\sigma)}(\sigma_j) - D_{m(\sigma_j)}(\sigma_j)$ for $\sigma_j$ the restriction of $\sigma$ to a face of $\Delta^n$, so $m(\sigma_j) \le m(\sigma)$ and hence the difference $D_{m(\sigma)}(\sigma_j) - D_{m(\sigma_j)}(\sigma_j)$ consists of terms $TS^i(\sigma_j)$ with $i \ge m(\sigma_j)$, and these terms lie in $C_n^\mathcal{U}(X)$ since $T$ takes $C_{n-1}^\mathcal{U}(X)$ to $C_n^\mathcal{U}(X)$.
>
> Viewing $\rho$ as a chain map $C_n(X) \to C_n^\mathcal{U}(X)$, the equation $(*)$ says that $\partial D + D\partial = \mathbb{1} - \iota\rho$ for $\iota : C_n^\mathcal{U}(X) \hookrightarrow C_n(X)$ the inclusion. Furthermore, $\rho\iota = \mathbb{1}$ since $D$ is identically zero on $C_n^\mathcal{U}(X)$, as $m(\sigma) = 0$ if $\sigma$ is in $C_n^\mathcal{U}(X)$, hence the summation defining $D\sigma$ is empty. Thus we have shown that $\rho$ is a chain homotopy inverse for $\iota$.

> [!proof] Proof of the Excision Theorem
> We prove the second version, involving a decomposition $X = A \cup B$. For the cover $\mathcal{U} = \{A, B\}$ we introduce the suggestive notation $C_n(A + B)$ for $C_n^\mathcal{U}(X)$, the sums of chains in $A$ and chains in $B$. At the end of the preceding proof we had formulas $\partial D + D\partial = \mathbb{1} - \iota\rho$ and $\rho\iota = \mathbb{1}$. All the maps appearing in these formulas take chains in $A$ to chains in $A$, so they induce quotient maps when we factor out chains in $A$. These quotient maps automatically satisfy the same two formulas, so the inclusion $C_n(A + B)/C_n(A) \hookrightarrow C_n(X)/C_n(A)$ induces an isomorphism on homology. The map $C_n(B)/C_n(A \cap B) \to C_n(A + B)/C_n(A)$ induced by inclusion is obviously an isomorphism since both quotient groups are free with basis the singular $n$-simplices in $B$ that do not lie in $A$. Hence we obtain the desired isomorphism $H_n(B, A \cap B) \approx H_n(X, A)$ induced by inclusion.

All that remains in the proof of Theorem 2.13 is to replace relative homology groups with absolute homology groups. This is achieved by the following result.

> [!proposition] Proposition 2.22
> For good pairs $(X, A)$, the quotient map $q : (X, A) \to (X/A, A/A)$ induces isomorphisms $q_* : H_n(X, A) \to H_n(X/A, A/A) \approx \tilde{H}_n(X/A)$ for all $n$.

> [!proof] Proof of Proposition 2.22
> Let $V$ be a neighborhood of $A$ in $X$ that deformation retracts onto $A$. We have a commutative diagram. The upper left horizontal map is an isomorphism since in the long exact sequence of the triple $(X, V, A)$ the groups $H_n(V, A)$ are zero for all $n$, because a deformation retraction of $V$ onto $A$ gives a homotopy equivalence of pairs $(V, A) \simeq (A, A)$, and $H_n(A, A) = 0$. The deformation retraction of $V$ onto $A$ induces a deformation retraction of $V/A$ onto $A/A$, so the same argument shows that the lower left horizontal map is an isomorphism as well. The other two horizontal maps are isomorphisms directly from excision. The right-hand vertical map $q_*$ is an isomorphism since $q$ restricts to a homeomorphism on the complement of $A$. From the commutativity of the diagram it follows that the left-hand $q_*$ is an isomorphism.

This proposition shows that relative homology can be expressed as reduced absolute homology in the case of good pairs $(X, A)$, but in fact there is a way of doing this for arbitrary pairs. Consider the space $X \cup CA$ where $CA$ is the cone $(A \times I)/(A \times \{0\})$ whose base $A \times \{1\}$ we identify with $A \subset X$. Using terminology introduced in Chapter 0, $X \cup CA$ can also be described as the mapping cone of the inclusion $A \hookrightarrow X$. The assertion is that $H_n(X, A)$ is isomorphic to $\tilde{H}_n(X \cup CA)$ for all $n$ via the sequence of isomorphisms

$$\tilde{H}_n(X \cup CA) \approx H_n(X \cup CA, CA) \approx H_n(X \cup CA - \{p\}, CA - \{p\}) \approx H_n(X, A)$$

where $p \in CA$ is the tip of the cone. The first isomorphism comes from the exact sequence of the pair, using the fact that $CA$ is contractible. The second isomorphism is excision, and the third comes from a deformation retraction of $CA - \{p\}$ onto $A$.

Here is an application of the preceding proposition:

> [!example] Example 2.23
> Let us find explicit cycles representing generators of the infinite cyclic groups $H_n(D^n, \partial D^n)$ and $\tilde{H}_n(S^n)$. Replacing $(D^n, \partial D^n)$ by the equivalent pair $(\Delta^n, \partial \Delta^n)$, we will show by induction on $n$ that the identity map $\text{id} : \Delta^n \to \Delta^n$, viewed as a singular $n$-simplex, is a cycle generating $H_n(\Delta^n, \partial \Delta^n)$. That it is a cycle is clear since we are considering relative homology. When $n = 0$ it certainly represents a generator.
>
> For the induction step, let $\Lambda \subset \Delta^n$ be the union of all but one of the $(n-1)$-dimensional faces of $\Delta^n$. Then we claim there are isomorphisms
>
> $$H_n(\Delta^n, \partial \Delta^n) \xrightarrow{\approx} H_{n-1}(\partial \Delta^n, \Lambda) \xleftarrow{\approx} H_{n-1}(\Delta^{n-1}, \partial \Delta^{n-1})$$
>
> The first isomorphism is a boundary map in the long exact sequence of the triple $(\Delta^n, \partial \Delta^n, \Lambda)$, whose third terms $H_i(\Delta^n, \Lambda)$ are zero since $\Delta^n$ deformation retracts onto $\Lambda$, hence $(\Delta^n, \Lambda) \simeq (\Lambda, \Lambda)$. The second isomorphism is induced by the inclusion $i : \Delta^{n-1} \to \partial \Delta^n$ as the face not contained in $\Lambda$. When $n = 1$, $i$ induces an isomorphism on relative homology since this is true already at the chain level. When $n > 1$, $\partial \Delta^{n-1}$ is nonempty so we are dealing with good pairs and $i$ induces a homeomorphism of quotients $\Delta^{n-1}/\partial \Delta^{n-1} \approx \partial \Delta^n/\Lambda$. The induction step then follows since the cycle $\text{id}$ is sent under the first isomorphism to the cycle $\partial\,\text{id}$ which equals $\pm \text{id}_{n-1}$ in $C_{n-1}(\partial \Delta^n, \Lambda)$.
>
> To find a cycle generating $\tilde{H}_n(S^n)$ let us regard $S^n$ as two $n$-simplices $\Delta^n_1$ and $\Delta^n_2$ with their boundaries identified in the obvious way, preserving the ordering of vertices. The difference $\Delta^n_1 - \Delta^n_2$, viewed as a singular $n$-chain, is then a cycle, and we claim it represents a generator of $\tilde{H}_n(S^n)$. To see this, consider the isomorphisms
>
> $$\tilde{H}_n(S^n) \xrightarrow{\approx} H_n(S^n, \Delta^n_2) \xleftarrow{\approx} H_n(\Delta^n_1, \partial \Delta^n_1)$$
>
> where the first isomorphism comes from the long exact sequence of the pair $(S^n, \Delta^n_2)$ and the second isomorphism is justified in the nontrivial cases $n > 0$ by passing to quotients as before. Under these isomorphisms the cycle $\Delta^n_1 - \Delta^n_2$ in the first group corresponds to the cycle $\Delta^n_1$ in the third group, which represents a generator of this group as we have seen, so $\Delta^n_1 - \Delta^n_2$ represents a generator of $\tilde{H}_n(S^n)$.

The preceding proposition implies that the excision property holds also for subcomplexes of CW complexes:

> [!corollary] Corollary 2.24
> If the CW complex $X$ is the union of subcomplexes $A$ and $B$, then the inclusion $(B, A \cap B) \hookrightarrow (X, A)$ induces isomorphisms $H_n(B, A \cap B) \to H_n(X, A)$ for all $n$.

> [!proof] Proof of Corollary 2.24
> Since CW pairs are good, Proposition 2.22 allows us to pass to the quotient spaces $B/(A \cap B)$ and $X/A$ which are homeomorphic, assuming we are not in the trivial case $A \cap B = \emptyset$.

Here is another application of the preceding proposition:

> [!corollary] Corollary 2.25
> For a wedge sum $\bigvee_\alpha X_\alpha$, the inclusions $i_\alpha : X_\alpha \hookrightarrow \bigvee_\alpha X_\alpha$ induce an isomorphism $\bigoplus_\alpha i_{\alpha_*} : \bigoplus_\alpha \tilde{H}_n(X_\alpha) \to \tilde{H}_n(\bigvee_\alpha X_\alpha)$, provided that the wedge sum is formed at basepoints $x_\alpha \in X_\alpha$ such that the pairs $(X_\alpha, x_\alpha)$ are good.

> [!proof] Proof of Corollary 2.25
> Since reduced homology is the same as homology relative to a basepoint, this follows from the proposition by taking $(X, A) = (\coprod_\alpha X_\alpha, \coprod_\alpha \{x_\alpha\})$.

Here is an application of the machinery we have developed, a classical result of Brouwer from around 1910 known as 'invariance of dimension', which says in particular that $\mathbb{R}^m$ is not homeomorphic to $\mathbb{R}^n$ if $m \ne n$.

> [!theorem] Theorem 2.26 — Invariance of Dimension
> If nonempty open sets $U \subset \mathbb{R}^m$ and $V \subset \mathbb{R}^n$ are homeomorphic, then $m = n$.

> [!proof] Proof of Theorem 2.26
> For $x \in U$ we have $H_k(U, U - \{x\}) \approx H_k(\mathbb{R}^m, \mathbb{R}^m - \{x\})$ by excision. From the long exact sequence for the pair $(\mathbb{R}^m, \mathbb{R}^m - \{x\})$ we get $H_k(\mathbb{R}^m, \mathbb{R}^m - \{x\}) \approx \tilde{H}_{k-1}(\mathbb{R}^m - \{x\})$. Since $\mathbb{R}^m - \{x\}$ deformation retracts onto a sphere $S^{m-1}$, we conclude that $H_k(U, U - \{x\})$ is $\mathbb{Z}$ for $k = m$ and 0 otherwise. By the same reasoning, $H_k(V, V - \{y\})$ is $\mathbb{Z}$ for $k = n$ and 0 otherwise. Since a homeomorphism $h : U \to V$ induces isomorphisms $H_k(U, U - \{x\}) \to H_k(V, V - \{h(x)\})$ for all $k$, we must have $m = n$.

Generalizing the idea of this proof, the **local homology groups** of a space $X$ at a point $x \in X$ are defined to be the groups $H_n(X, X - \{x\})$. For any open neighborhood $U$ of $x$, excision gives isomorphisms $H_n(X, X - \{x\}) \approx H_n(U, U - \{x\})$ assuming points are closed in $X$, and thus the groups $H_n(X, X - \{x\})$ depend only on the local topology of $X$ near $x$. A homeomorphism $f : X \to Y$ must induce isomorphisms $H_n(X, X - \{x\}) \approx H_n(Y, Y - \{f(x)\})$ for all $x$ and $n$, so the local homology groups can be used to tell when spaces are not locally homeomorphic at certain points, as in the preceding proof. The exercises give some further examples of this.

#### Naturality

The exact sequences we have been constructing have an extra property that will become important later at key points in many arguments, though at first glance this property may seem just an idle technicality, not very interesting. We shall discuss the property now rather than interrupting later arguments to check it when it is needed, but the reader may prefer to postpone a careful reading of this discussion.

The property is called **naturality**. For example, to say that the long exact sequence of a pair is natural means that for a map $f : (X, A) \to (Y, B)$, the diagram

$$\cdots \to H_n(A) \xrightarrow{i_*} H_n(X) \xrightarrow{j_*} H_n(X, A) \xrightarrow{\partial} H_{n-1}(A) \to \cdots$$

is commutative when the vertical maps are the appropriate $f_*$'s. Commutativity of the squares involving $i_*$ and $j_*$ follows from the obvious commutativity of the corresponding squares of chain groups, with $C_n$ in place of $H_n$. For the other square, when we defined induced homomorphisms we saw that $f_\sharp \partial = \partial f_\sharp$ at the chain level. Then for a class $[\alpha] \in H_n(X, A)$ represented by a relative cycle $\alpha$, we have $f_* \partial[\alpha] = f_*[\partial\alpha] = [f_\sharp \partial\alpha] = [\partial f_\sharp \alpha] = \partial[f_\sharp \alpha] = \partial f_*[\alpha]$.

Alternatively, we could appeal to the general algebraic fact that the long exact sequence of homology groups associated to a short exact sequence of chain complexes is natural: For a commutative diagram of short exact sequences of chain complexes

$$0 \to \mathcal{A} \to \mathcal{B} \to \mathcal{C} \to 0$$

the induced diagram of long exact sequences is commutative. Commutativity of the first two squares is obvious since $\beta i = i' \alpha$ implies $\beta_* i_* = i'_* \alpha_*$ and $\gamma j = j' \beta$ implies $\gamma_* j_* = j'_* \beta_*$. For the third square, recall that the map $\partial : H_n(\mathcal{C}) \to H_{n-1}(\mathcal{A})$ was defined by $\partial[c] = [a]$ where $c = j(b)$ and $i(a) = \partial b$. Then $\partial[\gamma(c)] = [\alpha(a)]$ since $\gamma(c) = \gamma j(b) = j'(\beta(b))$ and $i'(\alpha(a)) = \beta i(a) = \beta \partial(b) = \partial \beta(b)$. Hence $\partial \gamma_*[c] = \alpha_*[a] = \alpha_* \partial[c]$.

This algebraic fact also implies naturality of the long exact sequence of a triple and the long exact sequence of reduced homology of a pair.

Finally, there is the naturality of the long exact sequence in Theorem 2.13, that is, commutativity of the diagram where $i$ and $q$ denote inclusions and quotient maps, and $\bar{f} : X/A \to Y/B$ is induced by $f$. The first two squares commute since $\bar{f}i = i\bar{f}$ and $\bar{f}q = qf$. The third square expands into a composite of three smaller squares, whose commutativity has already been shown.

### The Equivalence of Simplicial and Singular Homology

We can use the preceding results to show that the simplicial and singular homology groups of $\Delta$-complexes are always isomorphic. For the proof it will be convenient to consider the relative case as well, so let $X$ be a $\Delta$-complex with $A \subset X$ a subcomplex. Thus $A$ is the $\Delta$-complex formed by any union of simplices of $X$. Relative groups $H^\Delta_n(X, A)$ can be defined in the same way as for singular homology, via relative chains $\Delta_n(X, A) = \Delta_n(X)/\Delta_n(A)$, and this yields a long exact sequence of simplicial homology groups for the pair $(X, A)$ by the same algebraic argument as for singular homology. There is a canonical homomorphism $H^\Delta_n(X, A) \to H_n(X, A)$ induced by the chain map $\Delta_n(X, A) \to C_n(X, A)$ sending each $n$-simplex of $X$ to its characteristic map $\sigma : \Delta^n \to X$. The possibility $A = \emptyset$ is not excluded, in which case the relative groups reduce to absolute groups.

> [!theorem] Theorem 2.27
> The homomorphisms $H^\Delta_n(X, A) \to H_n(X, A)$ are isomorphisms for all $n$ and all $\Delta$-complex pairs $(X, A)$.

> [!proof] Proof of Theorem 2.27
> First we do the case that $X$ is finite-dimensional and $A$ is empty. For $X^k$ the $k$-skeleton of $X$, consisting of all simplices of dimension $k$ or less, we have a commutative diagram of exact sequences. Let us first show that the first and fourth vertical maps are isomorphisms for all $n$.
>
> The simplicial chain group $\Delta_n(X^k, X^{k-1})$ is zero for $n \ne k$, and is free abelian with basis the $k$-simplices of $X$ when $n = k$. Hence $H^\Delta_n(X^k, X^{k-1})$ has exactly the same description. The corresponding singular homology groups $H_n(X^k, X^{k-1})$ can be computed by considering the map $\Phi : \coprod_\alpha(\Delta^k_\alpha, \partial \Delta^k_\alpha) \to (X^k, X^{k-1})$ formed by the characteristic maps $\Delta^k \to X$ for all the $k$-simplices of $X$. Since $\Phi$ induces a homeomorphism of quotient spaces $\coprod_\alpha \Delta^k_\alpha / \coprod_\alpha \partial \Delta^k_\alpha \approx X^k/X^{k-1}$, it induces isomorphisms on all singular homology groups. Thus $H_n(X^k, X^{k-1})$ is zero for $n \ne k$, while for $n = k$ this group is free abelian with basis represented by the relative cycles given by the characteristic maps of all the $k$-simplices of $X$, in view of the fact that $H_k(\Delta^k, \partial \Delta^k)$ is generated by the identity map $\Delta^k \to \Delta^k$, as we showed in Example 2.23. Therefore the map $H^\Delta_k(X^k, X^{k-1}) \to H_k(X^k, X^{k-1})$ is an isomorphism.
>
> By induction on $k$ we may assume the second and fifth vertical maps in the preceding diagram are isomorphisms as well. The following frequently quoted basic algebraic lemma will then imply that the middle vertical map is an isomorphism, finishing the proof when $X$ is finite-dimensional and $A = \emptyset$.

> [!lemma] The Five-Lemma
> In a commutative diagram of abelian groups as at the right, if the two rows are exact and $\alpha$, $\beta$, $\delta$, and $\varepsilon$ are isomorphisms, then $\gamma$ is an isomorphism also.

> [!proof] Proof of the Five-Lemma
> It suffices to show:
>
> (a) $\gamma$ is surjective if $\beta$ and $\delta$ are surjective and $\varepsilon$ is injective.
>
> (b) $\gamma$ is injective if $\beta$ and $\delta$ are injective and $\alpha$ is surjective.
>
> The proofs of these two statements are straightforward diagram chasing. There is really no choice about how the argument can proceed, and it would be a good exercise for the reader to close the book now and reconstruct the proofs without looking.
>
> **To prove (a)**, start with an element $c' \in C'$. Then $k'(c') = \delta(d)$ for some $d \in D$ since $\delta$ is surjective. Since $\varepsilon$ is injective and $\varepsilon \ell(d) = \ell' \delta(d) = \ell' k'(c') = 0$, we deduce that $\ell(d) = 0$, hence $d = k(c)$ for some $c \in C$ by exactness of the upper row. The difference $c' - \gamma(c)$ maps to 0 under $k'$ since $k'(c') - k'\gamma(c) = k'(c') - \delta k(c) = k'(c') - \delta(d) = 0$. Therefore $c' - \gamma(c) = j'(b')$ for some $b' \in B'$ by exactness. Since $\beta$ is surjective, $b' = \beta(b)$ for some $b \in B$, and then $\gamma(c + j(b)) = \gamma(c) + \gamma j(b) = \gamma(c) + j'\beta(b) = \gamma(c) + j'(b') = c'$, showing that $\gamma$ is surjective.
>
> **To prove (b)**, suppose that $\gamma(c) = 0$. Since $\delta$ is injective, $\delta k(c) = k' \gamma(c) = 0$ implies $k(c) = 0$, so $c = j(b)$ for some $b \in B$. The element $\beta(b)$ satisfies $j'\beta(b) = \gamma j(b) = \gamma(c) = 0$, so $\beta(b) = i'(a')$ for some $a' \in A'$. Since $\alpha$ is surjective, $a' = \alpha(a)$ for some $a \in A$. Since $\beta$ is injective, $\beta(i(a) - b) = \beta i(a) - \beta(b) = i'\alpha(a) - \beta(b) = i'(a') - \beta(b) = 0$ implies $i(a) - b = 0$. Thus $b = i(a)$, and hence $c = j(b) = ji(a) = 0$ since $ji = 0$. This shows $\gamma$ has trivial kernel.

Returning to the proof of the theorem, we next consider the case that $X$ is infinite-dimensional, where we will use the following fact: A compact set in $X$ can meet only finitely many open simplices of $X$, that is, simplices with their proper faces deleted. This is a general fact about CW complexes proved in the Appendix, but here is a direct proof for $\Delta$-complexes. If a compact set $C$ intersected infinitely many open simplices, it would contain an infinite sequence of points $x_i$ each lying in a different open simplex. Then the sets $U_i = X - \bigcup_{j \ne i}\{x_j\}$, which are open since their preimages under the characteristic maps of all the simplices are clearly open, form an open cover of $C$ with no finite subcover.

This can be applied to show the map $H^\Delta_n(X) \to H_n(X)$ is surjective. Represent a given element of $H_n(X)$ by a singular $n$-cycle $z$. This is a linear combination of finitely many singular simplices with compact images, meeting only finitely many open simplices of $X$, hence contained in $X^k$ for some $k$. We have shown that $H^\Delta_n(X^k) \to H_n(X^k)$ is an isomorphism, in particular surjective, so $z$ is homologous in $X^k$ (hence in $X$) to a simplicial cycle. This gives surjectivity. Injectivity is similar: If a simplicial $n$-cycle $z$ is the boundary of a singular chain in $X$, this chain has compact image and hence must lie in some $X^k$, so $z$ represents an element of the kernel of $H^\Delta_n(X^k) \to H_n(X^k)$. But we know this map is injective, so $z$ is a simplicial boundary in $X^k$, and therefore in $X$.

It remains to do the case of arbitrary $X$ with $A \ne \emptyset$, but this follows from the absolute case by applying the five-lemma to the canonical map from the long exact sequence of simplicial homology groups for the pair $(X, A)$ to the corresponding long exact sequence of singular homology groups.

We can deduce from this theorem that $H_n(X)$ is finitely generated whenever $X$ is a $\Delta$-complex with finitely many $n$-simplices, since in this case the simplicial chain group $\Delta_n(X)$ is finitely generated, hence also its subgroup of cycles and therefore also the latter group's quotient $H^\Delta_n(X)$. If we write $H_n(X)$ as the direct sum of cyclic groups, then the number of $\mathbb{Z}$ summands is known traditionally as the **$n$th Betti number** of $X$, and integers specifying the orders of the finite cyclic summands are called **torsion coefficients**.

It is a curious historical fact that homology was not thought of originally as a sequence of groups, but rather as Betti numbers and torsion coefficients. One can after all compute Betti numbers and torsion coefficients from the simplicial boundary maps without actually mentioning homology groups. This computational viewpoint, with homology being numbers rather than groups, prevailed from when Poincaré first started serious work on homology around 1900, up until the 1920s when the more abstract viewpoint of groups entered the picture. During this period 'homology' meant primarily 'simplicial homology', and it was another 20 years before the shift to singular homology was complete, with the final definition of singular homology emerging only in a 1944 paper of Eilenberg, after contributions from quite a few others, particularly Alexander and Lefschetz. Within the next few years the rest of the basic structure of homology theory as we have presented it fell into place, and the first definitive treatment appeared in the classic book [Eilenberg & Steenrod 1952].

### Exercises

1. What familiar space is the quotient $\Delta$-complex of a 2-simplex $[v_0, v_1, v_2]$ obtained by identifying the edges $[v_0, v_1]$ and $[v_1, v_2]$, preserving the ordering of vertices?

2. Show that the $\Delta$-complex obtained from $\Delta^3$ by performing the order-preserving edge identifications $[v_0, v_1] \sim [v_1, v_3]$ and $[v_0, v_2] \sim [v_2, v_3]$ deformation retracts onto a Klein bottle. Also, find other pairs of identifications of edges that produce $\Delta$-complexes deformation retracting onto a torus, a 2-sphere, and $\mathbb{RP}^2$.

3. Construct a $\Delta$-complex structure on $\mathbb{RP}^n$ as a quotient of a $\Delta$-complex structure on $S^n$ having vertices the two vectors of length 1 along each coordinate axis in $\mathbb{R}^{n+1}$.

4. Compute the simplicial homology groups of the triangular parachute obtained from $\Delta^2$ by identifying its three vertices to a single point.

5. Compute the simplicial homology groups of the Klein bottle using the $\Delta$-complex structure described at the beginning of this section.

6. Compute the simplicial homology groups of the $\Delta$-complex obtained from $n+1$ 2-simplices $\Delta^2_0, \cdots, \Delta^2_n$ by identifying all three edges of $\Delta^2_0$ to a single edge, and for $i > 0$ identifying the edges $[v_0, v_1]$ and $[v_1, v_2]$ of $\Delta^2_i$ to a single edge and the edge $[v_0, v_2]$ to the edge $[v_0, v_1]$ of $\Delta^2_{i-1}$.

7. Find a way of identifying pairs of faces of $\Delta^3$ to produce a $\Delta$-complex structure on $S^3$ having a single 3-simplex, and compute the simplicial homology groups of this $\Delta$-complex.

8. Construct a 3-dimensional $\Delta$-complex $X$ from $n$ tetrahedra $T_1, \cdots, T_n$ by the following two steps. First arrange the tetrahedra in a cyclic pattern as in the figure, so that each $T_i$ shares a common vertical face with its two neighbors $T_{i-1}$ and $T_{i+1}$, subscripts being taken mod $n$. Then identify the bottom face of $T_i$ with the top face of $T_{i+1}$ for each $i$. Show the simplicial homology groups of $X$ in dimensions 0, 1, 2, 3 are $\mathbb{Z}$, $\mathbb{Z}_n$, 0, $\mathbb{Z}$, respectively. [The space $X$ is an example of a lens space; see Example 2.43 for the general case.]

9. Compute the homology groups of the $\Delta$-complex $X$ obtained from $\Delta^n$ by identifying all faces of the same dimension. Thus $X$ has a single $k$-simplex for each $k \le n$.

10. (a) Show the quotient space of a finite collection of disjoint 2-simplices obtained by identifying pairs of edges is always a surface, locally homeomorphic to $\mathbb{R}^2$.
(b) Show the edges can always be oriented so as to define a $\Delta$-complex structure on the quotient surface. [This is more difficult.]

11. Show that if $A$ is a retract of $X$ then the map $H_n(A) \to H_n(X)$ induced by the inclusion $A \subset X$ is injective.

12. Show that chain homotopy of chain maps is an equivalence relation.

13. Verify that $f \simeq g$ implies $f_* = g_*$ for induced homomorphisms of reduced homology groups.

14. Determine whether there exists a short exact sequence $0 \to \mathbb{Z}_4 \to \mathbb{Z}_8 \oplus \mathbb{Z}_2 \to \mathbb{Z}_4 \to 0$. More generally, determine which abelian groups $A$ fit into a short exact sequence $0 \to \mathbb{Z}_{p^m} \to A \to \mathbb{Z}_{p^n} \to 0$ with $p$ prime. What about the case of short exact sequences $0 \to \mathbb{Z} \to A \to \mathbb{Z}_n \to 0$?

15. For an exact sequence $A \to B \to C \to D \to E$ show that $C = 0$ iff the map $A \to B$ is surjective and $D \to E$ is injective. Hence for a pair of spaces $(X, A)$, the inclusion $A \hookrightarrow X$ induces isomorphisms on all homology groups iff $H_n(X, A) = 0$ for all $n$.

16. (a) Show that $H_0(X, A) = 0$ iff $A$ meets each path-component of $X$.
(b) Show that $H_1(X, A) = 0$ iff $H_1(A) \to H_1(X)$ is surjective and each path-component of $X$ contains at most one path-component of $A$.

17. (a) Compute the homology groups $H_n(X, A)$ when $X$ is $S^2$ or $S^1 \times S^1$ and $A$ is a finite set of points in $X$.
(b) Compute the groups $H_n(X, A)$ and $H_n(X, B)$ for $X$ a closed orientable surface of genus two with $A$ and $B$ the circles shown. [What are $X/A$ and $X/B$?]

18. Show that for the subspace $\mathbb{Q} \subset \mathbb{R}$, the relative homology group $H_1(\mathbb{R}, \mathbb{Q})$ is free abelian and find a basis.

19. Compute the homology groups of the subspace of $I \times I$ consisting of the four boundary edges plus all points in the interior whose first coordinate is rational.

20. Show that $\tilde{H}_n(X) \approx \tilde{H}_{n+1}(SX)$ for all $n$, where $SX$ is the suspension of $X$. More generally, thinking of $SX$ as the union of two cones $CX$ with their bases identified, compute the reduced homology groups of the union of any finite number of cones $CX$ with their bases identified.

21. Making the preceding problem more concrete, construct explicit chain maps $s : C_n(X) \to C_{n+1}(SX)$ inducing isomorphisms $\tilde{H}_n(X) \to \tilde{H}_{n+1}(SX)$.

22. Prove by induction on dimension the following facts about the homology of a finite-dimensional CW complex $X$, using the observation that $X^n/X^{n-1}$ is a wedge sum of $n$-spheres:
(a) If $X$ has dimension $n$ then $H_i(X) = 0$ for $i > n$ and $H_n(X)$ is free.
(b) $H_n(X)$ is free with basis in bijective correspondence with the $n$-cells if there are no cells of dimension $n-1$ or $n+1$.
(c) If $X$ has $k$ $n$-cells, then $H_n(X)$ is generated by at most $k$ elements.

23. Show that the second barycentric subdivision of a $\Delta$-complex is a simplicial complex. Namely, show that the first barycentric subdivision produces a $\Delta$-complex with the property that each simplex has all its vertices distinct, then show that for a $\Delta$-complex with this property, barycentric subdivision produces a simplicial complex.

24. Show that each $n$-simplex in the barycentric subdivision of $\Delta^n$ is defined by $n$ inequalities $t_{i_0} \le t_{i_1} \le \cdots \le t_{i_n}$ in its barycentric coordinates, where $(i_0, \cdots, i_n)$ is a permutation of $(0, \cdots, n)$.

25. Find an explicit, noninductive formula for the barycentric subdivision operator $S : C_n(X) \to C_n(X)$.

26. Show that $H_1(X, A)$ is not isomorphic to $\tilde{H}_1(X/A)$ if $X = [0, 1]$ and $A$ is the sequence $1, 1/2, 1/3, \cdots$ together with its limit 0. [See Example 1.25.]

27. Let $f : (X, A) \to (Y, B)$ be a map such that both $f : X \to Y$ and the restriction $f : A \to B$ are homotopy equivalences.
(a) Show that $f_* : H_n(X, A) \to H_n(Y, B)$ is an isomorphism for all $n$.
(b) For the case of the inclusion $f : (D^n, S^{n-1}) \hookrightarrow (D^n, D^n - \{0\})$, show that $f$ is not a homotopy equivalence of pairs — there is no $g : (D^n, D^n - \{0\}) \to (D^n, S^{n-1})$ such that $fg$ and $gf$ are homotopic to the identity through maps of pairs. [Observe that a homotopy equivalence of pairs $(X, A) \to (Y, B)$ is also a homotopy equivalence for the pairs obtained by replacing $A$ and $B$ by their closures.]

28. Let $X$ be the cone on the 1-skeleton of $\Delta^3$, the union of all line segments joining points in the six edges of $\Delta^3$ to the barycenter of $\Delta^3$. Compute the local homology groups $H_n(X, X - \{x\})$ for all $x \in X$. Define $\partial X$ to be the subspace of points $x$ such that $H_n(X, X - \{x\}) = 0$ for all $n$, and compute the local homology groups $H_n(\partial X, \partial X - \{x\})$. Use these calculations to determine which subsets $A \subset X$ have the property that $f(A) \subset A$ for all homeomorphisms $f : X \to X$.

29. Show that $S^1 \times S^1$ and $S^1 \vee S^1 \vee S^2$ have isomorphic homology groups in all dimensions, but their universal covering spaces do not.

30. In each of the following commutative diagrams assume that all maps but one are isomorphisms. Show that the remaining map must be an isomorphism as well.

31. Using the notation of the five-lemma, give an example where the maps $\alpha$, $\beta$, $\delta$, and $\varepsilon$ are zero but $\gamma$ is nonzero. This can be done with short exact sequences in which all the groups are either $\mathbb{Z}$ or 0.