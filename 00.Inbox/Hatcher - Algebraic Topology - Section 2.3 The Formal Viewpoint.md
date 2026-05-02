---
title: The Formal Viewpoint
tags:
  - textbook/algebraic-topology
  - mathematics/topology
source: "[[Hatcher - 2002 - Algebraic topology.pdf]]"
section: 2.3
date: 2026-05-02
---

# 1 Section 2.3: The Formal Viewpoint

Sometimes it is good to step back from the forest of details and look for general patterns. In this rather brief section we will first describe the general pattern of homology by axioms, then we will look at some common formal features shared by many of the constructions we have made, using the language of categories and functors which has become common in much of modern mathematics.

## 1.1 Axioms for Homology

For simplicity let us restrict attention to CW complexes and focus on reduced homology to avoid mentioning relative homology. A **(reduced) homology theory** assigns to each nonempty CW complex $X$ a sequence of abelian groups $\tilde{h}_n(X)$ and to each map $f: X \to Y$ between CW complexes a sequence of homomorphisms $f_*: \tilde{h}_n(X) \to \tilde{h}_n(Y)$ such that $(fg)_* = f_* g_*$ and $\mathbb{1}_* = \mathbb{1}$, and so that the following three axioms are satisfied.

> [!axiom] Axiom 1 (Axiom (1) — Homotopy Invariance)
> If $f \simeq g: X \to Y$, then $f_* = g_*: \tilde{h}_n(X) \to \tilde{h}_n(Y)$.

> [!axiom] Axiom 2 (Axiom (2) — Exactness)
> There are boundary homomorphisms $\partial: \tilde{h}_n(X/A) \to \tilde{h}_{n-1}(A)$ defined for each CW pair $(X, A)$, fitting into an exact sequence
> $$
> \cdots \xrightarrow{\partial} \tilde{h}_n(A) \xrightarrow{i_*} \tilde{h}_n(X) \xrightarrow{q_*} \tilde{h}_n(X/A) \xrightarrow{\partial} \tilde{h}_{n-1}(A) \xrightarrow{i_*} \cdots
> $$
> where $i$ is the inclusion and $q$ is the quotient map. Furthermore the boundary maps are natural: For $f: (X, A) \to (Y, B)$ inducing a quotient map $\bar{f}: X/A \to Y/B$, there are commutative diagrams
> ```tikz
> \usepackage{tikz-cd}
> \usepackage{amsmath}
> \begin{document}
> \begin{tikzcd}
> \tilde{h}_n(X/A) \arrow[r, "\partial"] \arrow[d, "\bar{f}_*"] & \tilde{h}_{n-1}(A) \arrow[d, "f_*"] \\
> \tilde{h}_n(Y/B) \arrow[r, "\partial"] & \tilde{h}_{n-1}(B)
> \end{tikzcd}
> \end{document}
> ```

> [!axiom] Axiom 3 (Axiom (3) — Wedge Sum)
> For a wedge sum $X = \bigvee_\alpha X_\alpha$ with inclusions $i_\alpha: X_\alpha \hookrightarrow X$, the direct sum map
> $$
> \bigoplus_\alpha i_{\alpha*}: \bigoplus_\alpha \tilde{h}_n(X_\alpha) \to \tilde{h}_n(X)
> $$
> is an isomorphism for each $n$.

Negative values for the subscripts $n$ are permitted. Ordinary singular homology is zero in negative dimensions by definition, but interesting homology theories with nontrivial groups in negative dimensions do exist.

The third axiom may seem less substantial than the first two, and indeed for finite wedge sums it can be deduced from the first two axioms, though not in general for infinite wedge sums, as an example in the Exercises shows.

It is also possible, and not much more difficult, to give axioms for unreduced homology theories. One supposes one has relative groups $h_n(X, A)$ defined, specializing to absolute groups by setting $h_n(X) = h_n(X, \emptyset)$. Axiom (1) is replaced by its obvious relative form, and axiom (2) is broken into two parts, the first hypothesizing a long exact sequence involving these relative groups, with natural boundary maps, the second stating some version of excision, for example $h_n(X, A) \approx h_n(X/A, A/A)$ if one is dealing with CW pairs. In axiom (3) the wedge sum is replaced by disjoint union.

These axioms for unreduced homology are essentially the same as those originally laid out in the highly influential book [Eilenberg & Steenrod 1952], except that axiom (3) was omitted since the focus there was on finite complexes, and there was another axiom specifying that the groups $h_n(\text{point})$ are zero for $n \neq 0$, as is true for singular homology. This axiom was called the **'dimension axiom'**, presumably because it specifies that a point has nontrivial homology only in dimension zero. It can be regarded as a normalization axiom, since one can trivially define a homology theory where it fails by setting $h_n(X, A) = H_{n+k}(X, A)$ for a fixed nonzero integer $k$. At the time there were no interesting homology theories known for which the dimension axiom did not hold, but soon thereafter topologists began studying a homology theory called **'bordism'** having the property that the bordism groups of a point are nonzero in infinitely many dimensions. Axiom (3) seems to have appeared first in [Milnor 1962].

Reduced and unreduced homology theories are essentially equivalent. From an unreduced theory $h$ one gets a reduced theory $\tilde{h}$ by setting $\tilde{h}_n(X)$ equal to the kernel of the canonical map $h_n(X) \to h_n(\text{point})$. In the other direction, one sets $h_n(X) = \tilde{h}_n(X_+)$ where $X_+$ is the disjoint union of $X$ with a point. We leave it as an exercise to show that these two transformations between reduced and unreduced homology are inverses of each other. Just as with ordinary homology, one has $h_n(X) \approx \tilde{h}_n(X) \oplus h_n(x_0)$ for any point $x_0 \in X$, since the long exact sequence of the pair $(X, x_0)$ splits via the retraction of $X$ onto $x_0$. Note that $\tilde{h}_n(x_0) = 0$ for all $n$, as can be seen by looking at the long exact sequence of reduced homology groups of the pair $(x_0, x_0)$.

The groups $h_n(x_0) \approx \tilde{h}_n(S^0)$ are called the **coefficients** of the homology theories $h$ and $\tilde{h}$, by analogy with the case of singular homology with coefficients. One can trivially realize any sequence of abelian groups $G_i$ as the coefficient groups of a homology theory by setting
$$
h_n(X, A) = \bigoplus_i H_{n-i}(X, A; G_i). \tag{1.1}
$$

In general, homology theories are not uniquely determined by their coefficient groups, but this is true for singular homology: If $h$ is a homology theory defined for CW pairs, whose coefficient groups $h_n(x_0)$ are zero for $n \neq 0$, then there are natural isomorphisms $h_n(X, A) \approx H_n(X, A; G)$ for all CW pairs $(X, A)$ and all $n$, where $G = h_0(x_0)$. This will be proved in Theorem 4.59.

We have seen how Mayer–Vietoris sequences can be quite useful for singular homology, and in fact every homology theory has Mayer–Vietoris sequences, at least for CW complexes. These can be obtained directly from the axioms in the following way. For a CW complex $X = A \cup B$ with $A$ and $B$ subcomplexes, the inclusion $(B, A \cap B) \hookrightarrow (X, A)$ induces a commutative diagram of exact sequences

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}
\usepackage{amssymb}
\begin{document}
\begin{tikzcd}
\cdots \arrow[r] & h_n(A\cap B) \arrow[r] \arrow[d, "\mathbb{1}"] & h_n(B) \arrow[r] \arrow[d, "\mathrm{inc}"] & h_n(B, A\cap B) \arrow[r] \arrow[d, "\cong"] & h_{n-1}(A\cap B) \arrow[r] \arrow[d, "\mathbb{1}"] & \cdots \\
\cdots \arrow[r] & h_n(A) \arrow[r] & h_n(X) \arrow[r] & h_n(X, A) \arrow[r] & h_{n-1}(A) \arrow[r] & \cdots
\end{tikzcd}
\end{document}
```

The vertical maps between relative groups are isomorphisms since $B/(A \cap B) = X/A$. Then it is a purely algebraic fact, whose proof is Exercise 38 at the end of the previous section, that a diagram such as this with every third vertical map an isomorphism gives rise to a long exact sequence involving the remaining nonisomorphic terms. In the present case this takes the form of a **Mayer–Vietoris sequence**
$$
\cdots \to h_n(A \cap B) \xrightarrow{\phi} h_n(A) \oplus h_n(B) \xrightarrow{\psi} h_n(X) \xrightarrow{\partial} h_{n-1}(A \cap B) \to \cdots \tag{1.2}
$$

## 1.2 Categories and Functors

Formally, singular homology can be regarded as a sequence of functions $H_n$ that assign to each space $X$ an abelian group $H_n(X)$ and to each map $f: X \to Y$ a homomorphism $H_n(f) = f_*: H_n(X) \to H_n(Y)$, and similarly for relative homology groups. This sort of situation arises quite often, and not just in algebraic topology, so it is useful to introduce some general terminology for it. Roughly speaking, 'functions' like $H_n$ are called **'functors'**, and the domains and ranges of these functors are called **'categories'**. Thus for $H_n$ the domain category consists of topological spaces and continuous maps, or in the relative case, pairs of spaces and continuous maps of pairs, and the range category consists of abelian groups and homomorphisms. A key point is that one is interested not only in the objects in the category, for example spaces or groups, but also in the maps, or 'morphisms', between these objects.

Now for the precise definitions. A **category** $\mathcal{C}$ consists of three things:

> [!definition] Definition 1 (Category)
> (1) A collection $\text{Ob}(\mathcal{C})$ of **objects**.
> (2) Sets $\text{Mor}(X, Y)$ of **morphisms** for each pair $X, Y \in \text{Ob}(\mathcal{C})$, including a distinguished 'identity' morphism $\mathbb{1} = \mathbb{1}_X \in \text{Mor}(X, X)$ for each $X$.
> (3) A **'composition of morphisms'** function $\circ: \text{Mor}(X, Y) \times \text{Mor}(Y, Z) \to \text{Mor}(X, Z)$ for each triple $X, Y, Z \in \text{Ob}(\mathcal{C})$, satisfying $f \circ \mathbb{1} = f$, $\mathbb{1} \circ f = f$, and $(f \circ g) \circ h = f \circ (g \circ h)$.

There are plenty of obvious examples, such as:

- The category of **topological spaces**, with continuous maps as the morphisms. Or we could restrict to special classes of spaces such as CW complexes, keeping continuous maps as the morphisms. We could also restrict the morphisms, for example to homeomorphisms.
- The category of **groups**, with homomorphisms as morphisms. Or the subcategory of abelian groups, again with homomorphisms as the morphisms. Generalizing this is the category of **modules over a fixed ring**, with morphisms the module homomorphisms.
- The category of **sets**, with arbitrary functions as the morphisms. Or the morphisms could be restricted to injections, surjections, or bijections.

There are also many categories where the morphisms are not simply functions, for example:

- Any group $G$ can be viewed as a category with only one object and with $G$ as the morphisms of this object, so that condition (3) reduces to two of the three axioms for a group. If we require only these two axioms, associativity and a left and right identity, we have a 'group without inverses', usually called a **monoid** since it is the same thing as a category with one object.
- A partially ordered set $(X, \leq)$ can be considered a category where the objects are the elements of $X$ and there is a unique morphism from $x$ to $y$ whenever $x \leq y$. The relation $x \leq x$ gives the morphism $\mathbb{1}$ and transitivity gives the composition $\text{Mor}(x, y) \times \text{Mor}(y, z) \to \text{Mor}(x, z)$. The condition that $x \leq y$ and $y \leq x$ implies $x = y$ says that there is at most one morphism between any two objects.
- There is a **'homotopy category'** whose objects are topological spaces and whose morphisms are homotopy classes of maps, rather than actual maps. This uses the fact that composition is well-defined on homotopy classes: $f_0 g_0 \simeq f_1 g_1$ if $f_0 \simeq f_1$ and $g_0 \simeq g_1$.
- Chain complexes are the objects of a category, with chain maps as morphisms. This category has various interesting subcategories, obtained by restricting the objects. For example, we could take chain complexes whose groups are zero in negative dimensions, or zero outside a finite range. Or we could restrict to exact sequences, or short exact sequences. In each case we take morphisms to be chain maps, which are commutative diagrams. Going a step further, there is a category whose objects are short exact sequences of chain complexes and whose morphisms are commutative diagrams of maps between such short exact sequences.

> [!definition] Definition 2 (Functor)
> A **functor** $F$ from a category $\mathcal{C}$ to a category $\mathcal{D}$ assigns to each object $X$ in $\mathcal{C}$ an object $F(X)$ in $\mathcal{D}$ and to each morphism $f \in \text{Mor}(X, Y)$ in $\mathcal{C}$ a morphism $F(f) \in \text{Mor}(F(X), F(Y))$ in $\mathcal{D}$, such that $F(\mathbb{1}) = \mathbb{1}$ and $F(f \circ g) = F(f) \circ F(g)$. In the case of the singular homology functor $H_n$, the latter two conditions are the familiar properties $\mathbb{1}_* = \mathbb{1}$ and $(fg)_* = f_* g_*$ of induced maps.

Strictly speaking, what we have just defined is a **covariant** functor. A **contravariant** functor would differ from this by assigning to $f \in \text{Mor}(X, Y)$ a 'backwards' morphism $F(f) \in \text{Mor}(F(Y), F(X))$ with $F(\mathbb{1}) = \mathbb{1}$ and $F(f \circ g) = F(g) \circ F(f)$. A classical example of this is the dual vector space functor, which assigns to a vector space $V$ over a fixed scalar field $K$ the dual vector space $F(V) = V^*$ of linear maps $V \to K$, and to each linear transformation $f: V \to W$ the dual map $F(f) = f^*: W^* \to V^*$, going in the reverse direction. In the next chapter we will study the contravariant version of homology, called **cohomology**.

A number of the constructions we have studied in this chapter are functors:

- The **singular chain complex functor** assigns to a space $X$ the chain complex of singular chains in $X$ and to a map $f: X \to Y$ the induced chain map. This is a functor from the category of spaces and continuous maps to the category of chain complexes and chain maps.
- The **algebraic homology functor** assigns to a chain complex its sequence of homology groups and to a chain map the induced homomorphisms on homology. This is a functor from the category of chain complexes and chain maps to the category whose objects are sequences of abelian groups and whose morphisms are sequences of homomorphisms.
- The composition of the two preceding functors is the functor assigning to a space its singular homology groups.
- The first example above, the singular chain complex functor, can itself be regarded as the composition of two functors. The first functor assigns to a space $X$ its singular complex $S(X)$, a $\Delta$-complex, and the second functor assigns to a $\Delta$-complex its simplicial chain complex. This is what the two functors do on objects, and what they do on morphisms can be described in the following way. A map of spaces $f: X \to Y$ induces a map $f_*: S(X) \to S(Y)$ by composing singular simplices $\Delta^n \to X$ with $f$. The map $f_*$ is a map between $\Delta$-complexes taking the distinguished characteristic maps in the domain $\Delta$-complex to the distinguished characteristic maps in the target $\Delta$-complex. Call such maps $\Delta$-maps and let them be the morphisms in the category of $\Delta$-complexes. Note that a $\Delta$-map induces a chain map between simplicial chain complexes, taking basis elements to basis elements, so we have a simplicial chain complex functor taking the category of $\Delta$-complexes and $\Delta$-maps to the category of chain complexes and chain maps.
- There is a functor assigning to a pair of spaces $(X, A)$ the associated long exact sequence of homology groups. Morphisms in the domain category are maps of pairs, and in the target category morphisms are maps between exact sequences forming commutative diagrams. This functor is the composition of two functors, the first assigning to $(X, A)$ a short exact sequence of chain complexes, the second assigning to such a short exact sequence the associated long exact sequence of homology groups. Morphisms in the intermediate category are the evident commutative diagrams.

Another sort of process we have encountered is the transformation of one functor into another, for example:

- Boundary maps $H_n(X, A) \to H_{n-1}(A)$ in singular homology, or indeed in any homology theory.
- Change-of-coefficient homomorphisms $H_n(X; G_1) \to H_n(X; G_2)$ induced by a homomorphism $G_1 \to G_2$, as in the proof of Lemma 2.49.

> [!definition] Definition 3 (Natural Transformation)
> In general, if one has two functors $F, G: \mathcal{C} \to \mathcal{D}$ then a **natural transformation** $T$ from $F$ to $G$ assigns a morphism $T_X: F(X) \to G(X)$ to each object $X \in \mathcal{C}$, in such a way that for each morphism $f: X \to Y$ in $\mathcal{C}$ the square at the right commutes.
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> F(X) \arrow[r, "T_X"] \arrow[d, "F(f)"] & G(X) \arrow[d, "G(f)"] \\
> F(Y) \arrow[r, "T_Y"] & G(Y)
> \end{tikzcd}
> \end{document}
> ```
> The case that $F$ and $G$ are contravariant rather than covariant is similar.

We have been describing the passage from topology to the abstract world of categories and functors, but there is also a nice path in the opposite direction:

To each category $\mathcal{C}$ there is associated a $\Delta$-complex $B\mathcal{C}$ called the **classifying space** of $\mathcal{C}$, whose $n$-simplices are the strings $X_0 \to X_1 \to \cdots \to X_n$ of morphisms in $\mathcal{C}$. The faces of this simplex are obtained by deleting an $X_i$, and then composing the two adjacent morphisms if $i \neq 0, n$. Thus when $n = 2$ the three faces of $X_0 \to X_1 \to X_2$ are $X_0 \to X_1$, $X_1 \to X_2$, and the composed morphism $X_0 \to X_2$. In case $\mathcal{C}$ has a single object and the morphisms of $\mathcal{C}$ form a group $G$, then $B\mathcal{C}$ is the same as the $\Delta$-complex $BG$ constructed in Example 1B.7, a $K(G, 1)$. In general, the space $B\mathcal{C}$ need not be a $K(G, 1)$, however. For example, if we start with a $\Delta$-complex $X$ and regard its set of simplices as a partially ordered set $\mathcal{C}(X)$ under the relation of inclusion of faces, then $B\mathcal{C}(X)$ is the barycentric subdivision of $X$.

A functor $F: \mathcal{C} \to \mathcal{D}$ induces a map $B\mathcal{C} \to B\mathcal{D}$. This is the $\Delta$-map that sends an $n$-simplex $X_0 \to X_1 \to \cdots \to X_n$ to the $n$-simplex $F(X_0) \to F(X_1) \to \cdots \to F(X_n)$.

A natural transformation from a functor $F$ to a functor $G$ induces a homotopy between the induced maps of classifying spaces. We leave this for the reader to make explicit, using the subdivision of $\Delta^n \times I$ into $(n+1)$ simplices described earlier in the chapter.

## 1.3 Exercises

> [!exercise] Exercise 1 (1)
> If $T_n(X, A)$ denotes the torsion subgroup of $H_n(X, A; \mathbb{Z})$, show that the functors $(X, A) \rightsquigarrow T_n(X, A)$, with the obvious induced homomorphisms $T_n(X, A) \to T_n(Y, B)$ and boundary maps $T_n(X, A) \to T_{n-1}(A)$, do not define a homology theory. Do the same for the 'mod torsion' functor $MT_n(X, A) = H_n(X, A; \mathbb{Z}) / T_n(X, A)$.

> [!exercise] Exercise 2 (2)
> Define a candidate for a reduced homology theory on CW complexes by
> $$
> \tilde{h}_n(X) = \prod_i \tilde{H}_i(X) \Big/ \bigoplus_i \tilde{H}_i(X).
> $$
> Thus $\tilde{h}_n(X)$ is independent of $n$ and is zero if $X$ is finite-dimensional, but is not identically zero, for example for $X = \bigvee_i S^i$. Show that the axioms for a homology theory are satisfied except that the wedge axiom fails.

> [!exercise] Exercise 3 (3)
> Show that if $\tilde{h}$ is a reduced homology theory, then $\tilde{h}_n(\text{point}) = 0$ for all $n$. Deduce that there are suspension isomorphisms $\tilde{h}_n(X) \approx \tilde{h}_{n+1}(SX)$ for all $n$.

> [!exercise] Exercise 4 (4)
> Show that the wedge axiom for homology theories follows from the other axioms in the case of finite wedge sums.
