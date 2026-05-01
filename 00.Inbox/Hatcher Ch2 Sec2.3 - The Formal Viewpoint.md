---
title: "Hatcher Ch2 Sec2.3 - The Formal Viewpoint"
tags:
  - textbook
  - math/algebraic-topology
  - homology
source: "30.Recources/AT/PDFs/ATHatcher - Chapter2 - Homology.pdf"
section: "2.3"
date: 2026-05-01
---

# 2.3. The Formal Viewpoint

## Introduction

The fundamental group $\pi_1(X)$ is especially useful when studying spaces of low dimension, as one would expect from its definition which involves only maps from low-dimensional spaces into $X$, namely loops $I \to X$ and homotopies of loops, maps $I \times I \to X$. The definition in terms of objects that are at most 2 dimensional manifests itself for example in the fact that when $X$ is a CW complex, $\pi_1(X)$ depends only on the 2-skeleton of $X$. In view of the low-dimensional nature of the fundamental group, we should not expect it to be a very refined tool for dealing with high-dimensional spaces. Thus it cannot distinguish between spheres $S^n$ with $n \geq 2$. This limitation to low dimensions can be removed by considering the natural higher-dimensional analogs of $\pi_1(X)$, the homotopy groups $\pi_n(X)$, which are defined in terms of maps of the $n$-dimensional cube $I^n$ into $X$ and homotopies $I^n \times I \to X$ of such maps. Not surprisingly, when $X$ is a CW complex, $\pi_n(X)$ depends only on the $(n+1)$-skeleton of $X$. And as one might hope, homotopy groups do indeed distinguish spheres of all dimensions since $\pi_i(S^n)$ is 0 for $i < n$ and $\mathbb{Z}$ for $i = n$.

However, the higher-dimensional homotopy groups have the serious drawback that they are extremely difficult to compute in general. Even for simple spaces like spheres, the calculation of $\pi_i(S^n)$ for $i > n$ turns out to be a huge problem. Fortunately there is a more computable alternative to homotopy groups: the homology groups $H_n(X)$. Like $\pi_n(X)$, the homology group $H_n(X)$ for a CW complex $X$ depends only on the $(n+1)$-skeleton. For spheres, the homology groups $H_i(S^n)$ are isomorphic to the homotopy groups $\pi_i(S^n)$ in the range $1 \leq i \leq n$, but homology groups have the advantage that $H_i(S^n) = 0$ for $i > n$.

The computability of homology groups does not come for free, unfortunately. The definition of homology groups is decidedly less transparent than the definition of homotopy groups, and once one gets beyond the definition there is a certain amount of technical machinery to be set up before any real calculations and applications can be given.

## Axioms for Homology

An interesting feature of homology that begins to emerge after one has worked with it for a while is that it is the basic properties of homology that are used most often, and not the actual definition itself. This suggests that an axiomatic approach to homology might be possible. This is indeed the case, and in the third section of the chapter we list axioms which completely characterize homology groups for CW complexes. One could take the viewpoint that these rather algebraic axioms are all that really matters about homology groups, that the geometry involved in the definition of homology is secondary, needed only to show that the axiomatic theory is not vacuous. The extent to which one adopts this viewpoint is a matter of taste, and the route taken here of postponing the axioms until the theory is well-established is just one of several possible approaches.

## Categories and Functors

> [!definition] Chain Complex
> A sequence of homomorphisms of abelian groups
> $$\cdots \to C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots \to C_1 \xrightarrow{\partial_1} C_0 \xrightarrow{\partial_0} 0$$
> with $\partial_n \partial_{n+1} = 0$ for each $n$ is called a **chain complex**.

The equation $\partial_n \partial_{n+1} = 0$ is equivalent to the inclusion $\text{Im } \partial_{n+1} \subset \text{Ker } \partial_n$, where Im and Ker denote image and kernel. So we can define the $n$th homology group of the chain complex to be the quotient group $H_n = \text{Ker } \partial_n / \text{Im } \partial_{n+1}$.

> [!definition] Cycles, Boundaries, and Homology Classes
> - Elements of $\text{Ker } \partial_n$ are called **cycles**
> - Elements of $\text{Im } \partial_{n+1}$ are called **boundaries**
> - Elements of $H_n$ are cosets of $\text{Im } \partial_{n+1}$, called **homology classes**
> - Two cycles representing the same homology class are said to be **homologous**. This means their difference is a boundary.

### Exact Sequences

> [!definition] Exact Sequence
> A sequence of homomorphisms
> $$\cdots \to A_{n+1} \xrightarrow{\alpha_{n+1}} A_n \xrightarrow{\alpha_n} A_{n-1} \to \cdots$$
> is said to be **exact** if $\text{Ker } \alpha_n = \text{Im } \alpha_{n+1}$ for each $n$.

The inclusions $\text{Im } \alpha_{n+1} \subset \text{Ker } \alpha_n$ are equivalent to $\alpha_n \alpha_{n+1} = 0$, so the sequence is a chain complex, and the opposite inclusions $\text{Ker } \alpha_n \subset \text{Im } \alpha_{n+1}$ say that the homology groups of this chain complex are trivial.

A number of basic algebraic concepts can be expressed in terms of exact sequences:

1. $0 \to A \xrightarrow{\alpha} B$ is exact iff $\text{Ker } \alpha = 0$, i.e., $\alpha$ is injective.
2. $A \xrightarrow{\alpha} B \to 0$ is exact iff $\text{Im } \alpha = B$, i.e., $\alpha$ is surjective.
3. $0 \to A \xrightarrow{\alpha} B \to 0$ is exact iff $\alpha$ is an isomorphism.
4. $0 \to A \xrightarrow{\alpha} B \xrightarrow{\beta} C \to 0$ is exact iff $\alpha$ is injective, $\beta$ is surjective, and $\text{Ker } \beta = \text{Im } \alpha$, so $\beta$ induces an isomorphism $C \cong B/\text{Im } \alpha$.

> [!definition] Short Exact Sequence
> An exact sequence $0 \to A \to B \to C \to 0$ is called a **short exact sequence**.

### Long Exact Sequence of Homology Groups

> [!theorem] Long Exact Sequence from Short Exact Sequence of Chain Complexes
> Given a short exact sequence of chain complexes
> $$0 \to A \xrightarrow{i} B \xrightarrow{j} C \to 0$$
> there is a long exact sequence of homology groups
> $$\cdots \to H_n(A) \xrightarrow{i_*} H_n(B) \xrightarrow{j_*} H_n(C) \xrightarrow{\partial} H_{n-1}(A) \xrightarrow{i_*} H_{n-1}(B) \to \cdots$$

The boundary map $\partial: H_n(C) \to H_{n-1}(A)$ is defined as follows: Let $c \in C_n$ be a cycle. Since $j$ is onto, $c = j(b)$ for some $b \in B_n$. The element $\partial b \in B_{n-1}$ is in $\text{Ker } j$ since $j(\partial b) = \partial j(b) = \partial c = 0$. So $\partial b = i(a)$ for some $a \in A_{n-1}$ since $\text{Ker } j = \text{Im } i$. Note that $\partial a = 0$ since $i(\partial a) = \partial i(a) = \partial \partial b = 0$ and $i$ is injective. We define $\partial: H_n(C) \to H_{n-1}(A)$ by sending the homology class of $c$ to the homology class of $a$, $\partial[c] = [a]$.

### Naturality

> [!definition] Naturality
> The long exact sequences we have been constructing have an extra property called **naturality**. For example, to say that the long exact sequence of a pair is natural means that for a map $f: (X,A) \to (Y,B)$, the diagram of long exact sequences commutes.

This property ensures that homomorphisms induced by continuous maps are compatible with the boundary maps in long exact sequences.

## Related Sections

- See [[Hatcher Ch2 Sec2.1 - Simplicial and Singular Homology]] for the definition of homology groups
- See [[Hatcher Ch2 Sec2.2 - Computations and Applications]] for computational techniques

---

*Note: This section provides the formal, axiomatic viewpoint of homology theory, emphasizing that the basic properties and axioms of homology are often more important than the explicit definition in terms of singular simplices.*
