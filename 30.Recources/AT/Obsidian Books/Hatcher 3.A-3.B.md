---
title: Hatcher 3.A-3.B - Universal Coefficients and Künneth Formula
date: 2026-05-08
tags:
  - algebraic-topology
  - homology
  - cohomology
  - universal-coefficients
  - kunneth-formula
source: AT Hatcher
section: 3.A, 3.B
---

# Universal Coefficients for Homology

## Section 3.A

The main goal in this section is an algebraic formula for computing homology with arbitrary coefficients in terms of homology with Z coefficients. The theory parallels rather closely the universal coefficient theorem for cohomology in §3.1.

The first step is to formulate the definition of homology with coefficients in terms of tensor products. The chain group $C_n(X; G)$ as defined in §2.2 consists of the finite formal sums $\sum_i g_i \sigma_i$ with $g_i \in G$ and $\sigma_i : \Delta^n \to X$. This means that $C_n(X; G)$ is a direct sum of copies of $G$, with one copy for each singular $n$-simplex in $X$. More generally, the relative chain group $C_n(X, A; G) = C_n(X; G)/C_n(A; G)$ is also a direct sum of copies of $G$, one for each singular $n$-simplex in $X$ not contained in $A$. From the basic properties of tensor products listed in the discussion of the Künneth formula in §3.2 it follows that $C_n(X, A; G)$ is naturally isomorphic to $C_n(X, A) \otimes G$, via the correspondence $\sum_i g_i \sigma_i \mapsto \sum_i \sigma_i \otimes g_i$. Under this isomorphism the boundary map $C_n(X, A; G) \to C_{n-1}(X, A; G)$ becomes the map $\partial \otimes \mathbb{1} : C_n(X, A) \otimes G \to C_{n-1}(X, A) \otimes G$ where $\partial : C_n(X, A) \to C_{n-1}(X, A)$ is the usual boundary map for Z coefficients. Thus we have the following algebraic problem:

Given a chain complex $\cdots \to C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots$ of free abelian groups $C_n$, is it possible to compute the homology groups $H_n(C; G)$ of the associated chain complex $\cdots \to C_n \otimes G \xrightarrow{\partial_n \otimes \mathbb{1}} C_{n-1} \otimes G \to \cdots$ just in terms of $G$ and the homology groups $H_n(C)$ of the original complex?

To approach this problem, the idea will be to compare the chain complex $C$ with two simpler subcomplexes, the subcomplexes consisting of the cycles and the boundaries in $C$, and see what happens upon tensoring all three complexes with $G$.

Let $Z_n = \text{Ker} \partial_n \subset C_n$ and $B_n = \text{Im} \partial_{n+1} \subset C_n$. The restrictions of $\partial_n$ to these two subgroups are zero, so they can be regarded as subcomplexes $Z$ and $B$ of $C$ with trivial boundary maps. Thus we have a short exact sequence of chain complexes consisting of the commutative diagrams:

> [!figure]- 🔴 Figure needed: Short exact sequence diagram (i)
> Source: p.261, diagram (i)
> Content: Commutative diagram showing the short exact sequence of chain complexes
> Action: Screenshot or manual reconstruction needed.

The rows in this diagram split since each $B_n$ is free, being a subgroup of the free group $C_n$. Thus $C_n \approx Z_n \oplus B_{n-1}$, but the chain complex $C$ is not the direct sum of the chain complexes $Z$ and $B$ since the latter have trivial boundary maps but the boundary maps in $C$ may be nontrivial. Now tensor with $G$ to get a commutative diagram:

> [!figure]- 🔴 Figure needed: Tensored diagram (ii)
> Source: p.262, diagram (ii)
> Content: Commutative diagram after tensoring with G
> Action: Screenshot or manual reconstruction needed.

The rows are exact since the rows in (i) split and tensor products satisfy $(A \oplus B) \otimes G \approx A \otimes G \oplus B \otimes G$, so the rows in (ii) are split exact sequences too. Thus we have a short exact sequence of chain complexes $0 \to Z \otimes G \to C \otimes G \to B \otimes G \to 0$. Since the boundary maps are trivial in $Z \otimes G$ and $B \otimes G$, the associated long exact sequence of homology groups has the form:

$$\cdots \to B_n \otimes G \to Z_n \otimes G \to H_n(C; G) \to B_{n-1} \otimes G \to Z_{n-1} \otimes G \to \cdots$$

The 'boundary' maps $B_n \otimes G \to Z_n \otimes G$ in this sequence are simply the maps $i_n \otimes \mathbb{1}$ where $i_n : B_n \to Z_n$ is the inclusion. This is evident from the definition of the boundary map in a long exact sequence of homology groups: In diagram (ii) one takes an element of $B_{n-1} \otimes G$, pulls it back via $(\partial_n \otimes \mathbb{1})^{-1}$ to $C_n \otimes G$, then applies $\partial_n \otimes \mathbb{1}$ to get into $C_{n-1} \otimes G$, then pulls back to $Z_{n-1} \otimes G$.

The long exact sequence (iii) can be broken up into short exact sequences:

$$0 \to \text{Coker}(i_n \otimes \mathbb{1}) \to H_n(C; G) \to \text{Ker}(i_{n-1} \otimes \mathbb{1}) \to 0$$

where $\text{Coker}(i_n \otimes \mathbb{1}) = (Z_n \otimes G) / \text{Im}(i_n \otimes \mathbb{1})$. The next lemma shows this cokernel is just $H_n(C) \otimes G$.

> [!lemma] Lemma 3A.1
> If the sequence of abelian groups $A \xrightarrow{i} B \xrightarrow{j} C \to 0$ is exact, then so is $A \otimes G \xrightarrow{i \otimes \mathbb{1}} B \otimes G \xrightarrow{j \otimes \mathbb{1}} C \otimes G \to 0$.

> [!proof]- Proof
> Certainly the compositions of two successive maps in the latter sequence are zero. Also, $j \otimes \mathbb{1}$ is clearly surjective since $j$ is. To check exactness at $B \otimes G$ it suffices to show that the map $B \otimes G / \text{Im}(i \otimes \mathbb{1}) \to C \otimes G$ induced by $j \otimes \mathbb{1}$ is an isomorphism, which we do by constructing its inverse. Define a map $\phi : C \times G \to B \otimes G / \text{Im}(i \otimes \mathbb{1})$ by $\phi(c, g) = b \otimes g$ where $j(b) = c$. This $\phi$ is well-defined since if $j(b) = j(b') = c$ then $b - b' = i(a)$ for some $a \in A$ by exactness, so $b \otimes g - b' \otimes g = (b - b') \otimes g = i(a) \otimes g \in \text{Im}(i \otimes \mathbb{1})$.
> 
> Since $\phi$ is a homomorphism in each variable separately, it induces a homomorphism $C \otimes G \to B \otimes G / \text{Im}(i \otimes \mathbb{1})$. This is clearly an inverse to the map $B \otimes G / \text{Im}(i \otimes \mathbb{1}) \to C \otimes G$. $\square$

It remains to understand $\text{Ker}(i_{n-1} \otimes \mathbb{1})$, or equivalently $\text{Ker}(i_n \otimes \mathbb{1})$. The situation is that tensoring the short exact sequence:

$$0 \to B_n \xrightarrow{i_n} Z_n \to H_n(C) \to 0$$

with $G$ produces a sequence which becomes exact only by insertion of the extra term $\text{Ker}(i_n \otimes \mathbb{1})$:

$$0 \to \text{Ker}(i_n \otimes \mathbb{1}) \to B_n \otimes G \xrightarrow{i_n \otimes \mathbb{1}} Z_n \otimes G \to H_n(C) \otimes G \to 0$$

What we will show is that $\text{Ker}(i_n \otimes \mathbb{1})$ does not really depend on $B_n$ and $Z_n$ but only on their quotient $H_n(C)$, and of course $G$.

The sequence (v) is a free resolution of $H_n(C)$, where as in §3.1 a free resolution of an abelian group $H$ is an exact sequence

$$\cdots \longrightarrow F_2 \xrightarrow{f_2} F_1 \xrightarrow{f_1} F_0 \xrightarrow{f_0} H \longrightarrow 0$$

with each $F_n$ free.

Tensoring a free resolution of this form with a fixed group $G$ produces a chain complex

$$\cdots \longrightarrow F_1 \otimes G \xrightarrow{f_1 \otimes \mathbb{1}} F_0 \otimes G \xrightarrow{f_0 \otimes \mathbb{1}} H \otimes G \longrightarrow 0$$

By the preceding lemma this is exact at $F_0 \otimes G$ and $H \otimes G$, but to the left of these two terms it may not be exact. For the moment let us write $H_n(F \otimes G)$ for the homology group $\text{Ker}(f_n \otimes \mathbb{1}) / \text{Im}(f_{n+1} \otimes \mathbb{1})$.

> [!lemma] Lemma 3A.2
> For any two free resolutions $F$ and $F'$ of $H$ there are canonical isomorphisms $H_n(F \otimes G) \approx H_n(F' \otimes G)$ for all $n$.

> [!proof]- Proof
> We will use Lemma 3.1(a). In the situation described there we have two free resolutions $F$ and $F'$ with a chain map between them. If we tensor the two free resolutions with $G$ we obtain chain complexes $F \otimes G$ and $F' \otimes G$ with the maps $\alpha_n \otimes \mathbb{1}$ forming a chain map between them. Passing to homology, this chain map induces homomorphisms $\alpha_* : H_n(F \otimes G) \to H_n(F' \otimes G)$ which are independent of the choice of $\alpha_n$'s since if $\alpha_n$ and $\alpha'_n$ are chain homotopic via a chain homotopy $\lambda_n$ then $\alpha_n \otimes \mathbb{1}$ and $\alpha'_n \otimes \mathbb{1}$ are chain homotopic via $\lambda_n \otimes \mathbb{1}$.
> 
> For a composition $H \xrightarrow{\alpha} H' \xrightarrow{\beta} H''$ with free resolutions $F$, $F'$, and $F''$ of these three groups also given, the induced homomorphisms satisfy $(\beta\alpha)_* = \beta_*\alpha_*$ since we can choose for the chain map $F \to F''$ the composition of chain maps $F \to F' \to F''$.
> 
> In particular, if we take $\alpha$ to be an isomorphism, with $\beta$ its inverse and $F'' = F$, then $\beta_*\alpha_* = (\beta\alpha)_* = \mathbb{1}_* = \mathbb{1}$, and similarly with $\beta$ and $\alpha$ reversed. So $\alpha_*$ is an isomorphism if $\alpha$ is an isomorphism. Specializing further, taking $\alpha$ to be the identity but with two different free resolutions $F$ and $F'$, we get a canonical isomorphism $\mathbb{1}_* : H_n(F \otimes G) \to H_n(F' \otimes G)$. $\square$

The group $H_n(F \otimes G)$, which depends only on $H$ and $G$, is denoted $\text{Tor}_n(H, G)$. Since a free resolution $0 \to F_1 \to F_0 \to H \to 0$ always exists, as noted in §3.1, it follows that $\text{Tor}_n(H, G) = 0$ for $n > 1$. Usually $\text{Tor}_1(H, G)$ is written simply as $\text{Tor}(H, G)$. As we shall see later, $\text{Tor}(H, G)$ provides a measure of the common torsion of $H$ and $G$, hence the name 'Tor'.

Is there a group $\text{Tor}_0(H, G)$? With the definition given above it would be zero since Lemma 3A.1 implies that $F_1 \otimes G \to F_0 \otimes G \to H \otimes G \to 0$ is exact. It is probably better to modify the definition of $H_n(F \otimes G)$ to be the homology groups of the sequence

$$\cdots \to F_1 \otimes G \to F_0 \otimes G \to 0$$

omitting the term $H \otimes G$ which can be regarded as a kind of augmentation. With this revised definition, Lemma 3A.1 then gives an isomorphism $\text{Tor}_0(H, G) \approx H \otimes G$.

We should remark that $\text{Tor}(H, G)$ is a functor of both $G$ and $H$: Homomorphisms $\alpha : H \to H'$ and $\beta : G \to G'$ induce homomorphisms $\alpha_* : \text{Tor}(H, G) \to \text{Tor}(H', G)$ and $\beta_* : \text{Tor}(H, G) \to \text{Tor}(H, G')$, satisfying $(\alpha\alpha')_* = \alpha_*\alpha'_*$, $(\beta\beta')_* = \beta_*\beta'_*$, and $\mathbb{1}_* = \mathbb{1}$. The induced map $\alpha_*$ was constructed in the proof of Lemma 3A.2, while for $\beta$ the construction of $\beta_*$ is obvious.

Before going into calculations of $\text{Tor}(H, G)$ let us finish analyzing the earlier exact sequence (iv). Recall that we have a chain complex $C$ of free abelian groups, with homology groups denoted $H_n(C)$, and tensoring $C$ with $G$ gives another complex $C \otimes G$ whose homology groups are denoted $H_n(C; G)$. The following result is known as the universal coefficient theorem for homology since it describes homology with arbitrary coefficients in terms of homology with the 'universal' coefficient group $\mathbb{Z}$.

> [!theorem] Theorem 3A.3 (Universal Coefficient Theorem for Homology)
> If $C$ is a chain complex of free abelian groups, then there are natural short exact sequences
> $$0 \to H_n(C) \otimes G \to H_n(C; G) \to \text{Tor}(H_{n-1}(C), G) \to 0$$
> for all $n$ and all $G$, and these sequences split, though not naturally.

Naturality means that a chain map $C \to C'$ induces a map between the corresponding short exact sequences, with commuting squares.

> [!proof]- Proof
> This exact sequence is (iv) since we can identify $\text{Coker}(i_n \otimes \mathbb{1})$ with $H_n(C) \otimes G$ and $\text{Ker}(i_{n-1} \otimes \mathbb{1})$ with $\text{Tor}(H_{n-1}(C), G)$. Verifying naturality is a mental exercise in definition-checking, left to the reader.
> 
> The splitting is obtained as follows. We observed earlier that the short exact sequence $0 \to Z_n \to C_n \to B_{n-1} \to 0$ splits, so there is a projection $p : C_n \to Z_n$ restricting to the identity on $Z_n$. The map $p$ gives an extension of the quotient map $Z_n \to H_n(C)$ to a homomorphism $C_n \to H_n(C)$. Letting $n$ vary, we then have a chain map $C \to H(C)$ where the groups $H_n(C)$ are regarded as a chain complex with trivial boundary maps, so the chain map condition is automatic.
> 
> Now tensor with $G$ to get a chain map $C \otimes G \to H(C) \otimes G$. Taking homology groups, we then have induced homomorphisms $H_n(C; G) \to H_n(C) \otimes G$ since the boundary maps in the chain complex $H(C) \otimes G$ are trivial. The homomorphisms $H_n(C; G) \to H_n(C) \otimes G$ give the desired splitting since at the level of chains they are the identity on cycles in $C$, by the definition of $p$. $\square$

> [!corollary] Corollary 3A.4
> For each pair of spaces $(X, A)$ there are split exact sequences
> $$0 \to H_n(X, A) \otimes G \to H_n(X, A; G) \to \text{Tor}(H_{n-1}(X, A), G) \to 0$$
> for all $n$, and these sequences are natural with respect to maps $(X, A) \to (Y, B)$. $\square$

The splitting is not natural, for if it were, a map $X \to Y$ that induced trivial maps $H_n(X) \to H_n(Y)$ and $H_{n-1}(X) \to H_{n-1}(Y)$ would have to induce the trivial map $H_n(X; G) \to H_n(Y; G)$ for all $G$, but in Example 2.51 we saw an instance where this fails, namely the quotient map $M(\mathbb{Z}_m, n) \to S^{n+1}$ with $G = \mathbb{Z}_m$.

The basic tools for computing $\text{Tor}$ are given by:

> [!proposition] Proposition 3A.5
> (1) $\text{Tor}(A, B) \approx \text{Tor}(B, A)$.
> 
> (2) $\text{Tor}(\bigoplus_i A_i, B) \approx \bigoplus_i \text{Tor}(A_i, B)$.
> 
> (3) $\text{Tor}(A, B) = 0$ if $A$ or $B$ is free, or more generally torsionfree.
> 
> (4) $\text{Tor}(A, B) \approx \text{Tor}(T(A), B)$ where $T(A)$ is the torsion subgroup of $A$.
> 
> (5) $\text{Tor}(\mathbb{Z}_n, A) \approx \text{Ker}(A \xrightarrow{n} A)$.
> 
> (6) For each short exact sequence $0 \to B \to C \to D \to 0$ there is a naturally associated exact sequence
> $$0 \to \text{Tor}(A, B) \to \text{Tor}(A, C) \to \text{Tor}(A, D) \to A \otimes B \to A \otimes C \to A \otimes D \to 0$$

> [!proof]- Proof
> Statement (2) is easy since one can choose as a free resolution of $\bigoplus_i A_i$ the direct sum of free resolutions of the $A_i$'s. Also easy is (5), which comes from tensoring the free resolution $0 \to \mathbb{Z} \xrightarrow{n} \mathbb{Z} \to \mathbb{Z}_n \to 0$ with $A$.
> 
> For (3), if $A$ is free, it has a free resolution with $F_n = 0$ for $n \geq 1$, so $\text{Tor}(A, B) = 0$ for all $B$. On the other hand, if $B$ is free, then tensoring a free resolution of $A$ with $B$ preserves exactness, since tensoring a sequence with a direct sum of $\mathbb{Z}$'s produces just a direct sum of copies of the given sequence. So $\text{Tor}(A, B) = 0$ in this case too. The generalization to torsionfree $A$ or $B$ will be given below.
> 
> For (6), choose a free resolution $0 \to F_1 \to F_0 \to A \to 0$ and tensor with the given short exact sequence to get a commutative diagram. The rows are exact since tensoring with a free group preserves exactness. Extending the three columns by zeros above and below, we then have a short exact sequence of chain complexes whose associated long exact sequence of homology groups is the desired six-term exact sequence.
> 
> To prove (1) we apply (6) to a free resolution $0 \to F_1 \to F_0 \to B \to 0$. Since $\text{Tor}(A, F_1)$ and $\text{Tor}(A, F_0)$ vanish by the part of (3) which we have proved, the six-term sequence in (6) reduces to the first row of a diagram. The second row comes from the definition of $\text{Tor}(B, A)$. The vertical isomorphisms come from the natural commutativity of tensor product. Since the squares commute, there is induced a map $\text{Tor}(A, B) \to \text{Tor}(B, A)$, which is an isomorphism by the five-lemma.
> 
> Now we can prove the statement (3) in the torsionfree case. For a free resolution $0 \to F_1 \xrightarrow{\phi} F_0 \to A \to 0$ we wish to show that $\phi \otimes \mathbb{1} : F_1 \otimes B \to F_0 \otimes B$ is injective if $B$ is torsionfree. Suppose $\sum_i x_i \otimes b_i$ lies in the kernel of $\phi \otimes \mathbb{1}$. This means that $\sum_i \phi(x_i) \otimes b_i$ can be reduced to 0 by a finite number of applications of the defining relations for tensor products. Only a finite number of elements of $B$ are involved in this process. These lie in a finitely generated subgroup $B_0 \subset B$, so $\sum_i x_i \otimes b_i$ lies in the kernel of $\phi \otimes \mathbb{1} : F_1 \otimes B_0 \to F_0 \otimes B_0$. This kernel is zero since $\text{Tor}(A, B_0) = 0$, as $B_0$ is finitely generated and torsionfree, hence free.
> 
> Finally, we can obtain statement (4) by applying (6) to the short exact sequence $0 \to T(A) \to A \to A/T(A) \to 0$ since $A/T(A)$ is torsionfree. $\square$

In particular, (5) gives $\text{Tor}(\mathbb{Z}_m, \mathbb{Z}_n) \approx \mathbb{Z}_q$ where $q$ is the greatest common divisor of $m$ and $n$. Thus $\text{Tor}(\mathbb{Z}_m, \mathbb{Z}_n)$ is isomorphic to $\mathbb{Z}_m \otimes \mathbb{Z}_n$, though somewhat by accident. Combining this isomorphism with (2) and (3) we see that for finitely generated $A$ and $B$, $\text{Tor}(A, B)$ is isomorphic to the tensor product of the torsion subgroups of $A$ and $B$, or roughly speaking, the common torsion of $A$ and $B$. This is one reason for the 'Tor' designation, further justification being (3) and (4).

Homology calculations are often simplified by taking coefficients in a field, usually $\mathbb{Q}$ or $\mathbb{Z}_p$ for $p$ prime. In general this gives less information than taking $\mathbb{Z}$ coefficients, but still some of the essential features are retained, as the following result indicates:

> [!corollary] Corollary 3A.6
> (a) $H_n(X; \mathbb{Q}) \approx H_n(X; \mathbb{Z}) \otimes \mathbb{Q}$, so when $H_n(X; \mathbb{Z})$ is finitely generated, the dimension of $H_n(X; \mathbb{Q})$ as a vector space over $\mathbb{Q}$ equals the rank of $H_n(X; \mathbb{Z})$.
> 
> (b) If $H_n(X; \mathbb{Z})$ and $H_{n-1}(X; \mathbb{Z})$ are finitely generated, then for $p$ prime, $H_n(X; \mathbb{Z}_p)$ consists of:
> - (i) a $\mathbb{Z}_p$ summand for each $\mathbb{Z}$ summand of $H_n(X; \mathbb{Z})$,
> - (ii) a $\mathbb{Z}_p$ summand for each $\mathbb{Z}_{p^k}$ summand in $H_n(X; \mathbb{Z})$, $k \geq 1$,
> - (iii) a $\mathbb{Z}_p$ summand for each $\mathbb{Z}_{p^k}$ summand in $H_{n-1}(X; \mathbb{Z})$, $k \geq 1$. $\square$

Even in the case of nonfinitely generated homology groups, field coefficients still give good qualitative information:

> [!corollary] Corollary 3A.7
> (a) $H_n(X; \mathbb{Z}) = 0$ for all $n$ iff $H_n(X; \mathbb{Q}) = 0$ and $H_n(X; \mathbb{Z}_p) = 0$ for all $n$ and all primes $p$.
> 
> (b) A map $f : X \to Y$ induces isomorphisms on homology with $\mathbb{Z}$ coefficients iff it induces isomorphisms on homology with $\mathbb{Q}$ and $\mathbb{Z}_p$ coefficients for all primes $p$.

> [!proof]- Proof
> Statement (b) follows from (a) by passing to the mapping cone of $f$.
> 
> The universal coefficient theorem gives the 'only if' half of (a). For the 'if' implication it suffices to show that if an abelian group $A$ is such that $A \otimes \mathbb{Q} = 0$ and $\text{Tor}(A, \mathbb{Z}_p) = 0$ for all primes $p$, then $A = 0$. For the short exact sequences $0 \to \mathbb{Z} \xrightarrow{p} \mathbb{Z} \to \mathbb{Z}_p \to 0$ and $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$, the six-term exact sequences in (6) of the proposition become:
> $$0 \to \text{Tor}(A, \mathbb{Z}_p) \to A \xrightarrow{p} A \to A \otimes \mathbb{Z}_p \to 0$$
> $$0 \to \text{Tor}(A, \mathbb{Q}/\mathbb{Z}) \to A \to A \otimes \mathbb{Q} \to A \otimes \mathbb{Q}/\mathbb{Z} \to 0$$
> 
> If $\text{Tor}(A, \mathbb{Z}_p) = 0$ for all $p$, then exactness of the first sequence implies that $A \xrightarrow{p} A$ is injective for all $p$, so $A$ is torsionfree. Then $\text{Tor}(A, \mathbb{Q}/\mathbb{Z}) = 0$ by (3) or (4) of the proposition, so the second sequence implies that $A \to A \otimes \mathbb{Q}$ is injective, hence $A = 0$ if $A \otimes \mathbb{Q} = 0$. $\square$

The algebra by means of which the $\text{Tor}$ functor is derived from tensor products has a very natural generalization in which abelian groups are replaced by modules over a fixed ring $R$ with identity, using the definition of tensor product of $R$-modules given in §3.2. Free resolutions of $R$-modules are defined in the same way as for abelian groups, using free $R$-modules, which are direct sums of copies of $R$. Lemmas 3A.1 and 3A.2 carry over to this context without change, and so one has functors $\text{Tor}^R_n(A, B)$. However, it need not be true that $\text{Tor}^R_n(A, B) = 0$ for $n > 1$. The reason this was true when $R = \mathbb{Z}$ was that subgroups of free groups are free, but submodules of free $R$-modules need not be free in general. If $R$ is a principal ideal domain, submodules of free $R$-modules are free, so in this case the rest of the algebra, in particular the universal coefficient theorem, goes through without change. When $R$ is a field $F$, every module is free and $\text{Tor}^F_n(A, B) = 0$ for $n > 0$ via the free resolution $0 \to A \to A \to 0$. Thus $H_n(C \otimes_F G) \approx H_n(C) \otimes_F G$ if $F$ is a field.

## Exercises

> [!exercise] 1
> Use the universal coefficient theorem to show that if $H_*(X; \mathbb{Z})$ is finitely generated, so the Euler characteristic $\chi(X) = \sum_n (-1)^n \text{rank} H_n(X; \mathbb{Z})$ is defined, then for any coefficient field $F$ we have $\chi(X) = \sum_n (-1)^n \text{dim} H_n(X; F)$.

> [!exercise] 2
> Show that $\text{Tor}(A, \mathbb{Q}/\mathbb{Z})$ is isomorphic to the torsion subgroup of $A$. Deduce that $A$ is torsionfree iff $\text{Tor}(A, B) = 0$ for all $B$.

> [!exercise] 3
> Show that if $H_n(X; \mathbb{Q})$ and $H_n(X; \mathbb{Z}_p)$ are zero for all $n$ and all primes $p$, then $H_n(X; \mathbb{Z}) = 0$ for all $n$, and hence $H_n(X; G) = 0$ for all $G$ and $n$.

> [!exercise] 4
> Show that $\otimes$ and $\text{Tor}$ commute with direct limits: $(\varinjlim A_\alpha) \otimes B = \varinjlim (A_\alpha \otimes B)$ and $\text{Tor}(\varinjlim A_\alpha, B) = \varinjlim \text{Tor}(A_\alpha, B)$.

> [!exercise] 5
> From the fact that $\text{Tor}(A, B) = 0$ if $A$ is free, deduce that $\text{Tor}(A, B) = 0$ if $A$ is torsionfree by applying the previous problem to the directed system of finitely generated subgroups $A_\alpha$ of $A$.

> [!exercise] 6
> Show that $\text{Tor}(A, B)$ is always a torsion group, and that $\text{Tor}(A, B)$ contains an element of order $n$ iff both $A$ and $B$ contain elements of order $n$.

# The General Künneth Formula

## Section 3.B

Künneth formulas describe the homology or cohomology of a product space in terms of the homology or cohomology of the factors. In nice cases these formulas take the form $H_*(X \times Y; R) \approx H_*(X; R) \otimes H_*(Y; R)$ or $H^*(X \times Y; R) \approx H^*(X; R) \otimes H^*(Y; R)$ for a coefficient ring $R$. For the case of cohomology, such a formula was given in Theorem 3.15, with hypotheses of finite generation and freeness on the cohomology of one factor. To obtain a completely general formula without these hypotheses it turns out that homology is more natural than cohomology, and the main aim in this section is to derive the general Künneth formula for homology. The new feature of the general case is that an extra $\text{Tor}$ term is needed to describe the full homology of a product.

### The Cross Product in Homology

A major component of the Künneth formula is a cross product map
$$H_i(X; R) \times H_j(Y; R) \xrightarrow{\times} H_{i+j}(X \times Y; R)$$

There are two ways to define this. One is a direct definition for singular homology, involving explicit simplicial formulas. More enlightening, however, is the definition in terms of cellular homology. This necessitates assuming $X$ and $Y$ are CW complexes, but this hypothesis can later be removed by the technique of CW approximation in §4.1. We shall focus therefore on the cellular definition, leaving the simplicial definition to later in this section for those who are curious to see how it goes.

The key ingredient in the definition of the cellular cross product will be the fact that the cellular boundary map satisfies $d(e^i \times e^j) = de^i \times e^j + (-1)^i e^i \times de^j$. Implicit in the right side of this formula is the convention of treating the symbol $\times$ as a bilinear operation on cellular chains.

With this convention we can then say more generally that $d(a \times b) = da \times b + (-1)^i a \times db$ whenever $a$ is a cellular $i$-chain and $b$ is a cellular $j$-chain. From this formula it is obvious that the cross product of two cycles is a cycle. Also, the product of a boundary and a cycle is a boundary since $da \times b = d(a \times b)$ if $db = 0$, and similarly $a \times db = (-1)^i d(a \times b)$ if $da = 0$. Hence there is an induced bilinear map $H_i(X; R) \times H_j(Y; R) \to H_{i+j}(X \times Y; R)$, which is by definition the cross product in cellular homology. Since it is bilinear, it could also be viewed as a homomorphism $H_i(X; R) \otimes_R H_j(Y; R) \to H_{i+j}(X \times Y; R)$. In either form, this cross product turns out to be independent of the cell structures on $X$ and $Y$.

Our task then is to express the boundary maps in the cellular chain complex $C_*(X \times Y)$ for $X \times Y$ in terms of the boundary maps in the cellular chain complexes $C_*(X)$ and $C_*(Y)$. For simplicity we consider homology with $\mathbb{Z}$ coefficients here, but the same formula for arbitrary coefficients follows immediately from this special case. With $\mathbb{Z}$ coefficients, the cellular chain group $C_i(X)$ is free with basis the $i$-cells of $X$, but there is a sign ambiguity for the basis element corresponding to each cell $e^i$, namely the choice of a generator for the $\mathbb{Z}$ summand of $H_i(X^i, X^{i-1})$ corresponding to $e^i$. Only when $i = 0$ is this choice canonical. We refer to these choices as 'choosing orientations for the cells'. A choice of such orientations allows cellular $i$-chains to be written unambiguously as linear combinations of $i$-cells.

The formula $d(e^i \times e^j) = de^i \times e^j + (-1)^i e^i \times de^j$ is not completely canonical since it contains the sign $(-1)^i$ but not $(-1)^j$. Evidently there is some distinction being made between the two factors of $e^i \times e^j$. Since the signs arise from orientations, we need to make explicit how an orientation of cells $e^i$ and $e^j$ determines an orientation of $e^i \times e^j$. Via characteristic maps, orientations can be obtained from orientations of the domain disks of the characteristic maps. It will be convenient to choose these domains to be cubes since the product of two cubes is again a cube. Thus for a cell $e^i_\alpha$ we take a characteristic map $\Phi_\alpha : I^i \to X$ where $I^i$ is the product of $i$ intervals $[0, 1]$. An orientation of $I^i$ is a generator of $H_i(I^i, \partial I^i)$, and the image of this generator under $\Phi_{\alpha *}$ gives an orientation of $e^i_\alpha$. We can identify $H_i(I^i, \partial I^i)$ with $H_i(I^i, I^i - \{x\})$ for any point $x$ in the interior of $I^i$, and then an orientation is determined by a linear embedding $\Delta^i \to I^i$ with $x$ chosen in the interior of the image of this embedding. The embedding is determined by its sequence of vertices $v_0, \cdots, v_i$.

The vectors $v_1 - v_0, \cdots, v_i - v_0$ are linearly independent in $I^i$, thought of as the unit cube in $\mathbb{R}^i$, so an orientation in our sense is equivalent to an orientation in the sense of linear algebra, that is, an equivalence class of ordered bases, two ordered bases being equivalent if they differ by a linear transformation of positive determinant. (An ordered basis can be continuously deformed to an orthonormal basis, by the Gram–Schmidt process, and two orthonormal bases are related either by a rotation or a rotation followed by a reflection, according to the sign of the determinant of the transformation taking one to the other.)

With this in mind, we adopt the convention that an orientation of $I^i \times I^j = I^{i+j}$ is obtained by choosing an ordered basis consisting of an ordered basis for $I^i$ followed by an ordered basis for $I^j$. Notice that reversing the orientation for either $I^i$ or $I^j$ then reverses the orientation for $I^{i+j}$, so all that really matters is the order of the two factors of $I^i \times I^j$.

> [!proposition] Proposition 3B.1
> The boundary map in the cellular chain complex $C_*(X \times Y)$ is determined by the boundary maps in the cellular chain complexes $C_*(X)$ and $C_*(Y)$ via the formula $d(e^i \times e^j) = de^i \times e^j + (-1)^i e^i \times de^j$.

> [!proof]- Proof
> Let us first consider the special case of the cube $I^n$. We give $I$ the CW structure with two vertices and one edge, so the $i$th copy of $I$ has a 1-cell $e^i$ and 0-cells $0^i$ and $1^i$, with $de^i = 1^i - 0^i$. The $n$-cell in the product $I^n$ is $e^1 \times \cdots \times e^n$, and we claim that the boundary of this cell is given by the formula:
> $$d(e^1 \times \cdots \times e^n) = \sum_i (-1)^{i+1} e^1 \times \cdots \times de^i \times \cdots \times e^n \tag{*}$$
> 
> This formula is correct modulo the signs of the individual terms $e^1 \times \cdots \times 0^i \times \cdots \times e^n$ and $e^1 \times \cdots \times 1^i \times \cdots \times e^n$ since these are exactly the $(n-1)$-cells in the boundary sphere $\partial I^n$ of $I^n$. To obtain the signs in (*), note that switching the two ends of an $I$ factor of $I^n$ produces a reflection of $\partial I^n$, as does a transposition of two adjacent $I$ factors. Since reflections have degree $-1$, this implies that (*) is correct up to an overall sign. This final sign can be determined by looking at any term, say the term $0^1 \times e^2 \times \cdots \times e^n$, which has a minus sign in (*). To check that this is right, consider the $n$-simplex $[v_0, \cdots, v_n]$ with $v_0$ at the origin and $v_k$ the unit vector along the $k$th coordinate axis for $k > 0$. This simplex defines the 'positive' orientation of $I^n$ as described earlier, and in the usual formula for its boundary the face $[v_0, v_2, \cdots, v_n]$, which defines the positive orientation for the face $0^1 \times e^2 \times \cdots \times e^n$ of $I^n$, has a minus sign.
> 
> If we write $I^n = I^i \times I^j$ with $i + j = n$ and we set $e^i = e^1 \times \cdots \times e^i$ and $e^j = e^{i+1} \times \cdots \times e^n$, then the formula (*) becomes $d(e^i \times e^j) = de^i \times e^j + (-1)^i e^i \times de^j$.
> 
> We will use naturality to reduce the general case of the boundary formula to this special case. When dealing with cellular homology, the maps $f : X \to Y$ that induce chain maps $f_* : C_*(X) \to C_*(Y)$ of the cellular chain complexes are the cellular maps, taking $X^n$ to $Y^n$ for all $n$, hence $(X^n, X^{n-1})$ to $(Y^n, Y^{n-1})$. The naturality statement we want is then:

> [!lemma] Lemma 3B.2
> For cellular maps $f : X \to Z$ and $g : Y \to W$, the cellular chain maps $f_* : C_*(X) \to C_*(Z)$, $g_* : C_*(Y) \to C_*(W)$, and $(f \times g)_* : C_*(X \times Y) \to C_*(Z \times W)$ are related by the formula $(f \times g)_* = f_* \times g_*$.

> [!proof]- Proof
> The relation $(f \times g)_* = f_* \times g_*$ means that if $f_*(e^i_\alpha) = \sum_\gamma m_{\alpha\gamma} e^i_\gamma$ and if $g_*(e^j_\beta) = \sum_\delta n_{\beta\delta} e^j_\delta$, then $(f \times g)_*(e^i_\alpha \times e^j_\beta) = \sum_{\gamma\delta} m_{\alpha\gamma} n_{\beta\delta} (e^i_\gamma \times e^j_\delta)$. The coefficient $m_{\alpha\gamma}$ is the degree of the composition $f_{\alpha\gamma} : S^i \to X^i/X^{i-1} \to Z^i/Z^{i-1} \to S^i$ where the first and third maps are induced by characteristic maps for the cells $e^i_\alpha$ and $e^i_\gamma$, and the middle map is induced by the cellular map $f$. With the natural choices of basepoints in these quotient spaces, $f_{\alpha\gamma}$ is basepoint-preserving. The $n_{\beta\delta}$'s are obtained similarly from maps $g_{\beta\delta} : S^j \to S^j$. For $f \times g$, the map $(f \times g)_{\alpha\beta,\gamma\delta} : S^{i+j} \to S^{i+j}$ whose degree is the coefficient of $e^i_\gamma \times e^j_\delta$ in $(f \times g)_*(e^i_\alpha \times e^j_\beta)$ is obtained from the product map $f_{\alpha\gamma} \times g_{\beta\delta} : S^i \times S^j \to S^i \times S^j$ by collapsing the $(i + j - 1)$ skeleton of $S^i \times S^j$ to a point. In other words, $(f \times g)_{\alpha\beta,\gamma\delta}$ is the smash product map $f_{\alpha\gamma} \wedge g_{\beta\delta}$.
> 
> What we need to show is the formula $\deg(f \wedge g) = \deg(f) \deg(g)$ for basepoint-preserving maps $f : S^i \to S^i$ and $g : S^j \to S^j$.
> 
> Since $f \wedge g$ is the composition of $f \wedge \mathbb{1}$ and $\mathbb{1} \wedge g$, it suffices to show that $\deg(f \wedge \mathbb{1}) = \deg(f)$ and $\deg(\mathbb{1} \wedge g) = \deg(g)$. We do this by relating smash products to suspension. The smash product $X \wedge S^1$ can be viewed as $X \times I/(X \times \partial I \cup \{x_0\} \times I)$, so it is the reduced suspension $\Sigma X$, the quotient of the ordinary suspension $SX$ obtained by collapsing the segment $\{x_0\} \times I$ to a point. If $X$ is a CW complex with $x_0$ a 0-cell, the quotient map $SX \to X \wedge S^1$ induces an isomorphism on homology since it collapses a contractible subcomplex to a point. Taking $X = S^i$, we have the commutative diagram at the right, and from the induced commutative diagram of homology groups $H_{i+1}$ we deduce that $Sf$ and $f \wedge \mathbb{1}$ have the same degree.
> 
> Since suspension preserves degree by Proposition 2.33, we conclude that $\deg(f \wedge \mathbb{1}) = \deg(f)$. The $\mathbb{1}$ in this formula is the identity map on $S^1$, and by iteration we obtain the same result for $\mathbb{1}$ the identity map on $S^j$ since $S^j$ is the smash product of $j$ copies of $S^1$. This implies also that $\deg(\mathbb{1} \wedge g) = \deg(g)$ since a permutation of coordinates in $S^{i+j}$ does not affect the degree of maps $S^{i+j} \to S^{i+j}$. $\square$

Now to finish the proof of the proposition, let $\Phi : I^i \to X^i$ and $\Psi : I^j \to Y^j$ be characteristic maps of cells $e^i_\alpha \subset X$ and $e^j_\beta \subset Y$. The restriction of $\Phi$ to $\partial I^i$ is the attaching map of $e^i_\alpha$. We may perform a preliminary homotopy of this attaching map $\partial I^i \to X^{i-1}$ to make it cellular. There is no need to appeal to the cellular approximation theorem to do this since a direct argument is easy: First deform the attaching map so that it sends all but one face of $I^i$ to a point, which is possible since the union of these faces is contractible, then do a further deformation so that the image point of this union of faces is a 0-cell. A homotopy of the attaching map $\partial I^i \to X^{i-1}$ does not affect the cellular boundary $de^i_\alpha$, since $de^i_\alpha$ is determined by the induced map $H_{i-1}(\partial I^i) \to H_{i-1}(X^{i-1}) \to H_{i-1}(X^{i-1}, X^{i-2})$. So we may assume $\Phi$ is cellular, and likewise $\Psi$, hence also $\Phi \times \Psi$. The map of cellular chain complexes induced by a cellular map between CW complexes is a chain map, commuting with the cellular boundary maps.

If $e^i$ is the $i$-cell of $I^i$ and $e^j$ the $j$-cell of $I^j$, then $\Phi_*(e^i) = e^i_\alpha$, $\Psi_*(e^j) = e^j_\beta$, and $(\Phi \times \Psi)_*(e^i \times e^j) = e^i_\alpha \times e^j_\beta$, hence:

$$\begin{aligned}
d(e^i_\alpha \times e^j_\beta) &= d((\Phi \times \Psi)_*(e^i \times e^j)) \\
&= (\Phi \times \Psi)_*(d(e^i \times e^j)) && \text{since $(\Phi \times \Psi)_*$ is a chain map} \\
&= (\Phi \times \Psi)_*(de^i \times e^j + (-1)^i e^i \times de^j) && \text{by the special case} \\
&= \Phi_*(de^i) \times \Psi_*(e^j) + (-1)^i \Phi_*(e^i) \times \Psi_*(de^j) && \text{by the lemma} \\
&= d\Phi_*(e^i) \times \Psi_*(e^j) + (-1)^i \Phi_*(e^i) \times d\Psi_*(e^j) && \text{since $\Phi_*$ and $\Psi_*$ are chain maps} \\
&= de^i_\alpha \times e^j_\beta + (-1)^i e^i_\alpha \times de^j_\beta
\end{aligned}$$

which completes the proof of the proposition. $\square$

> [!example] Example 3B.3
> Consider $X \times S^k$ where we give $S^k$ its usual CW structure with two cells. The boundary formula in $C_*(X \times S^k)$ takes the form $d(a \times b) = da \times b$ since $d = 0$ in $C_*(S^k)$. So the chain complex $C_*(X \times S^k)$ is just the direct sum of two copies of the chain complex $C_*(X)$, one of the copies having its dimension shifted upward by $k$. Hence $H_n(X \times S^k; \mathbb{Z}) \approx H_n(X; \mathbb{Z}) \oplus H_{n-k}(X; \mathbb{Z})$ for all $n$. In particular, we see that all the homology classes in $X \times S^k$ are cross products of homology classes in $X$ and $S^k$.

> [!example] Example 3B.4
> More subtle things can happen when $X$ and $Y$ both have torsion in their homology. To take the simplest case, let $X$ be $S^1$ with a cell $e^2$ attached by a map $S^1 \to S^1$ of degree $m$, so $H_1(X; \mathbb{Z}) \approx \mathbb{Z}_m$ and $H_i(X; \mathbb{Z}) = 0$ for $i > 1$. Similarly, let $Y$ be obtained from $S^1$ by attaching a 2-cell by a map of degree $n$. Thus $X$ and $Y$ each have CW structures with three cells and so $X \times Y$ has nine cells.

> [!figure]- 🔴 Figure needed: CW structure diagram for X × Y
> Source: p.272, diagram
> Content: Diagram showing the nine cells of X × Y with X in the horizontal direction and Y in the vertical direction, with arrows denoting nonzero cellular boundary maps
> Action: Screenshot or manual reconstruction needed.

These are indicated by the dots in the diagram at the right, with $X$ in the horizontal direction and $Y$ in the vertical direction. The arrows denote the nonzero cellular boundary maps. For example the two arrows leaving the dot in the upper right corner indicate that $\partial(e^2 \times e^2) = m(e^1 \times e^2) + n(e^2 \times e^1)$.

Obviously $H_1(X \times Y; \mathbb{Z})$ is $\mathbb{Z}_m \oplus \mathbb{Z}_n$. In dimension 2, $\text{Ker} \partial$ is generated by $e^1 \times e^1$, and the image of the boundary map from dimension 3 consists of the multiples $(\ell m - kn)(e^1 \times e^1)$. These form a cyclic group generated by $q(e^1 \times e^1)$ where $q$ is the greatest common divisor of $m$ and $n$, so $H_2(X \times Y; \mathbb{Z}) \approx \mathbb{Z}_q$.

In dimension 3 the cycles are the multiples of $(m/q)(e^1 \times e^2) + (n/q)(e^2 \times e^1)$, and the smallest such multiple that is a boundary is $q[(m/q)(e^1 \times e^2) + (n/q)(e^2 \times e^1)] = m(e^1 \times e^2) + n(e^2 \times e^1)$, so $H_3(X \times Y; \mathbb{Z}) \approx \mathbb{Z}_q$.

Since $X$ and $Y$ have no homology above dimension 1, this 3-dimensional homology of $X \times Y$ cannot be realized by cross products. As the general theory will show, $H_2(X \times Y; \mathbb{Z})$ is $H_1(X; \mathbb{Z}) \otimes H_1(Y; \mathbb{Z})$ and $H_3(X \times Y; \mathbb{Z})$ is $\text{Tor}(H_1(X; \mathbb{Z}), H_1(Y; \mathbb{Z}))$.

This example generalizes easily to higher dimensions, with $X = S^i \cup e^{i+1}$ and $Y = S^j \cup e^{j+1}$, the attaching maps having degrees $m$ and $n$, respectively. Essentially the same calculation shows that $X \times Y$ has both $H_{i+j}$ and $H_{i+j+1}$ isomorphic to $\mathbb{Z}_q$.

We should say a few words about why the cross product is independent of CW structures. For this we will need a fact proved in the next chapter in Theorem 4.8, that every map between CW complexes is homotopic to a cellular map. As we mentioned earlier, a cellular map induces a chain map between cellular chain complexes. It is easy to see from the equivalence between cellular and singular homology that the map on cellular homology induced by a cellular map is the same as the map induced on singular homology. Now suppose we have cellular maps $f : X \to Z$ and $g : Y \to W$. Then Lemma 3B.2 implies that we have a commutative diagram. Now take $Z$ and $W$ to be the same spaces as $X$ and $Y$ but with different CW structures, and let $f$ and $g$ be cellular maps homotopic to the identity. The vertical maps in the diagram are then the identity, and commutativity of the diagram says that the cross products defined using the different CW structures coincide.

> [!example] Example 3B.4
> More subtle things can happen when $X$ and $Y$ both have torsion in their homology. To take the simplest case, let $X$ be $S^1$ with a cell $e^2$ attached by a map $S^1 \to S^1$ of degree $m$, so $H_1(X; \mathbb{Z}) \approx \mathbb{Z}_m$ and $H_i(X; \mathbb{Z}) = 0$ for $i > 1$. Similarly, let $Y$ be obtained from $S^1$ by attaching a 2-cell by a map of degree $n$. Thus $X$ and $Y$ each have CW structures with three cells and so $X \times Y$ has nine cells.

> [!figure]- 🔴 Figure needed: CW structure diagram for X × Y
> Source: p.272, diagram
> Content: Diagram showing the nine cells of X × Y with X in the horizontal direction and Y in the vertical direction, with arrows denoting nonzero cellular boundary maps
> Action: Screenshot or manual reconstruction needed.

These are indicated by the dots in the diagram at the right, with $X$ in the horizontal direction and $Y$ in the vertical direction. The arrows denote the nonzero cellular boundary maps. For example the two arrows leaving the dot in the upper right corner indicate that $\partial(e^2 \times e^2) = m(e^1 \times e^2) + n(e^2 \times e^1)$.

Obviously $H_1(X \times Y; \mathbb{Z})$ is $\mathbb{Z}_m \oplus \mathbb{Z}_n$. In dimension 2, $\text{Ker} \partial$ is generated by $e^1 \times e^1$, and the image of the boundary map from dimension 3 consists of the multiples $(\ell m - kn)(e^1 \times e^1)$. These form a cyclic group generated by $q(e^1 \times e^1)$ where $q$ is the greatest common divisor of $m$ and $n$, so $H_2(X \times Y; \mathbb{Z}) \approx \mathbb{Z}_q$.

In dimension 3 the cycles are the multiples of $(m/q)(e^1 \times e^2) + (n/q)(e^2 \times e^1)$, and the smallest such multiple that is a boundary is $q[(m/q)(e^1 \times e^2) + (n/q)(e^2 \times e^1)] = m(e^1 \times e^2) + n(e^2 \times e^1)$, so $H_3(X \times Y; \mathbb{Z}) \approx \mathbb{Z}_q$.

Since $X$ and $Y$ have no homology above dimension 1, this 3-dimensional homology of $X \times Y$ cannot be realized by cross products. As the general theory will show, $H_2(X \times Y; \mathbb{Z})$ is $H_1(X; \mathbb{Z}) \otimes H_1(Y; \mathbb{Z})$ and $H_3(X \times Y; \mathbb{Z})$ is $\text{Tor}(H_1(X; \mathbb{Z}), H_1(Y; \mathbb{Z}))$.

This example generalizes easily to higher dimensions, with $X = S^i \cup e^{i+1}$ and $Y = S^j \cup e^{j+1}$, the attaching maps having degrees $m$ and $n$, respectively. Essentially the same calculation shows that $X \times Y$ has both $H_{i+j}$ and $H_{i+j+1}$ isomorphic to $\mathbb{Z}_q$.

We should say a few words about why the cross product is independent of CW structures. For this we will need a fact proved in the next chapter in Theorem 4.8, that every map between CW complexes is homotopic to a cellular map. As we mentioned earlier, a cellular map induces a chain map between cellular chain complexes. It is easy to see from the equivalence between cellular and singular homology that the map on cellular homology induced by a cellular map is the same as the map induced on singular homology. Now suppose we have cellular maps $f : X \to Z$ and $g : Y \to W$. Then Lemma 3B.2 implies that we have a commutative diagram. Now take $Z$ and $W$ to be the same spaces as $X$ and $Y$ but with different CW structures, and let $f$ and $g$ be cellular maps homotopic to the identity. The vertical maps in the diagram are then the identity, and commutativity of the diagram says that the cross products defined using the different CW structures coincide.

Cross product is obviously bilinear, or in other words, distributive. It is not hard to check that it is also associative. What about commutativity? If $T : X \times Y \to Y \times X$ is transposition of the factors, then we can ask whether $T_*(a \times b)$ equals $b \times a$. The only effect transposing the factors has on the definition of cross product is in the convention for orienting a product $I^i \times I^j$ by taking an ordered basis in the first factor followed by an ordered basis in the second factor. Switching the two factors can be achieved by moving each of the $i$ coordinates of $I^i$ past each of the coordinates of $I^j$. This is a total of $ij$ transpositions of adjacent coordinates, each realizable by a reflection, so a sign of $(-1)^{ij}$ is introduced. Thus the correct formula is $T_*(a \times b) = (-1)^{ij} b \times a$ for $a \in H_i(X)$ and $b \in H_j(Y)$.

### The Algebraic Künneth Formula

By adding together the various cross products we obtain a map
$$\bigoplus_i [H_i(X; \mathbb{Z}) \otimes H_{n-i}(Y; \mathbb{Z})] \longrightarrow H_n(X \times Y; \mathbb{Z})$$

and it is natural to ask whether this is an isomorphism. Example 3B.4 above shows that this is not always the case, though it is true in Example 3B.3. Our main goal in what follows is to show that the map is always injective, and that its cokernel is $\bigoplus_i \text{Tor}(H_i(X; \mathbb{Z}), H_{n-i-1}(Y; \mathbb{Z}))$. More generally, we consider other coefficients besides $\mathbb{Z}$ and show in particular that with field coefficients the map is an isomorphism.

For CW complexes $X$ and $Y$, the relationship between the cellular chain complexes $C_*(X)$, $C_*(Y)$, and $C_*(X \times Y)$ can be expressed nicely in terms of tensor products. Since the $n$-cells of $X \times Y$ are the products of $i$-cells of $X$ with $(n-i)$-cells of $Y$, we have $C_n(X \times Y) \approx \bigoplus_i [C_i(X) \otimes C_{n-i}(Y)]$, with $e^i \times e^j$ corresponding to $e^i \otimes e^j$. Under this identification the boundary formula of Proposition 3B.1 becomes $d(e^i \otimes e^j) = de^i \otimes e^j + (-1)^i e^i \otimes de^j$. Our task now is purely algebraic, to compute the homology of the chain complex $C_*(X \times Y)$ from the homology of $C_*(X)$ and $C_*(Y)$.

Suppose we are given chain complexes $C$ and $C'$ of abelian groups $C_n$ and $C'_n$, or more generally $R$-modules over a commutative ring $R$. The tensor product chain complex $C \otimes_R C'$ is then defined by $(C \otimes_R C')_n = \bigoplus_i (C_i \otimes_R C'_{n-i})$, with boundary maps given by $\partial(c \otimes c') = \partial c \otimes c' + (-1)^i c \otimes \partial c'$ for $c \in C_i$ and $c' \in C'_{n-i}$. The sign $(-1)^i$ guarantees that $\partial^2 = 0$ in $C \otimes_R C'$, since:
$$\partial^2(c \otimes c') = \partial[\partial c \otimes c' + (-1)^i c \otimes \partial c'] = \partial^2 c \otimes c' + (-1)^{i-1} \partial c \otimes \partial c' + (-1)^i \partial c \otimes \partial c' + c \otimes \partial^2 c' = 0$$

From the boundary formula $\partial(c \otimes c') = \partial c \otimes c' + (-1)^i c \otimes \partial c'$ it follows that the tensor product of cycles is a cycle, and the tensor product of a cycle and a boundary, in either order, is a boundary, just as for the cross product defined earlier. So there is induced a natural map on homology groups $H_i(C) \otimes_R H_{n-i}(C') \to H_n(C \otimes_R C')$. Summing over $i$ then gives a map $\bigoplus_i [H_i(C) \otimes_R H_{n-i}(C')] \to H_n(C \otimes_R C')$. This figures in the following algebraic version of the Künneth formula:

> [!theorem] Theorem 3B.5 (Algebraic Künneth Formula)
> If $R$ is a principal ideal domain and the $R$-modules $C_i$ are free, then for each $n$ there is a natural short exact sequence
> $$0 \to \bigoplus_i [H_i(C) \otimes_R H_{n-i}(C')] \to H_n(C \otimes_R C') \to \bigoplus_i [\text{Tor}^R(H_i(C), H_{n-i-1}(C')] \to 0$$
> and this sequence splits.

This is a generalization of the universal coefficient theorem for homology, which is the case that $R = \mathbb{Z}$ and $C'$ consists of just the coefficient group $G$ in dimension zero. The proof will also be a natural generalization of the proof of the universal coefficient theorem.

> [!proof]- Proof
> First we do the special case that the boundary maps in $C$ are all zero, so $H_i(C) = C_i$. In this case $\partial(c \otimes c') = (-1)^i c \otimes \partial c'$ and the chain complex $C \otimes_R C'$ is simply the direct sum of the complexes $C_i \otimes_R C'$, each of which is a direct sum of copies of $C'$ since $C_i$ is free. Hence $H_n(C_i \otimes_R C') \approx C_i \otimes_R H_{n-i}(C') = H_i(C) \otimes_R H_{n-i}(C')$. Summing over $i$ yields an isomorphism $H_n(C \otimes_R C') \approx \bigoplus_i [H_i(C) \otimes_R H_{n-i}(C')]$, which is the statement of the theorem since there are no $\text{Tor}$ terms, $H_i(C) = C_i$ being free.
> 
> In the general case, let $Z_i \subset C_i$ and $B_i \subset C_i$ denote kernel and image of the boundary homomorphisms for $C$. These give subchain complexes $Z$ and $B$ of $C$ with trivial boundary maps. We have a short exact sequence of chain complexes $0 \to Z \to C \to B \to 0$ made up of the short exact sequences $0 \to Z_i \to C_i \xrightarrow{\partial} B_{i-1} \to 0$ each of which splits since $B_{i-1}$ is free, being a submodule of $C_{i-1}$ which is free by assumption.
> 
> Because of the splitting, when we tensor $0 \to Z \to C \to B \to 0$ with $C'$ we obtain another short exact sequence of chain complexes, and hence a long exact sequence in homology:
> $$\cdots \to H_n(Z \otimes_R C') \to H_n(C \otimes_R C') \to H_{n-1}(B \otimes_R C') \to H_{n-1}(Z \otimes_R C') \to \cdots$$
> where we have $H_{n-1}(B \otimes_R C')$ instead of the expected $H_n(B \otimes_R C')$ since $\partial : C \to B$ decreases dimension by one. Checking definitions, one sees that the 'boundary' map $H_{n-1}(B \otimes_R C') \to H_{n-1}(Z \otimes_R C')$ in the preceding long exact sequence is just the map induced by the natural map $B \otimes_R C' \to Z \otimes_R C'$ coming from the inclusion $B \subset Z$.
> 
> Since $Z$ and $B$ are chain complexes with trivial boundary maps, the special case at the beginning of the proof converts the preceding exact sequence into:
> $$\cdots \xrightarrow{i_n} \bigoplus_i [Z_i \otimes_R H_{n-i}(C')] \to H_n(C \otimes_R C') \to \bigoplus_i [B_i \otimes_R H_{n-i-1}(C')] \xrightarrow{i_{n-1}} \bigoplus_i [Z_i \otimes_R H_{n-i-1}(C')] \to \cdots$$
> 
> So we have short exact sequences:
> $$0 \to \text{Coker} i_n \to H_n(C \otimes_R C') \to \text{Ker} i_{n-1} \to 0$$

> where $\text{Coker} i_n = \bigoplus_i [Z_i \otimes_R H_{n-i}(C')] / \text{Im} i_n$, and this equals $\bigoplus_i [H_i(C) \otimes_R H_{n-i}(C')]$ by Lemma 3A.1. It remains to identify $\text{Ker} i_{n-1}$ with $\bigoplus_i \text{Tor}^R(H_i(C), H_{n-i}(C'))$.
> 
> By the definition of $\text{Tor}$, tensoring the free resolution $0 \to B_i \to Z_i \to H_i(C) \to 0$ with $H_{n-i}(C')$ yields an exact sequence:
> $$0 \to \text{Tor}^R(H_i(C), H_{n-i}(C')) \to B_i \otimes_R H_{n-i}(C') \to Z_i \otimes_R H_{n-i}(C') \to H_i(C) \otimes_R H_{n-i}(C') \to 0$$
> 
> Hence, summing over $i$, $\text{Ker} i_n = \bigoplus_i \text{Tor}^R(H_i(C), H_{n-i}(C'))$.
> 
> Naturality should be obvious, and we leave it for the reader to fill in the details.
> 
> We will show that the short exact sequence in the statement of the theorem splits assuming that both $C$ and $C'$ are free. This suffices for our applications. For the extra argument needed to show splitting when $C'$ is not free, see the exposition in [Hilton & Stammbach 1970].
> 
> The splitting is via a homomorphism $H_n(C \otimes_R C') \to \bigoplus_i [H_i(C) \otimes_R H_{n-i}(C')]$ constructed in the following way. As already noted, the sequence $0 \to Z_i \to C_i \to B_{i-1} \to 0$ splits, so the quotient maps $Z_i \to H_i(C)$ extend to homomorphisms $C_i \to H_i(C)$. Similarly we obtain $C'_j \to H_j(C')$ if $C'$ is free. Viewing the sequences of homology groups $H_i(C)$ and $H_j(C')$ as chain complexes $H(C)$ and $H(C')$ with trivial boundary maps, we thus have chain maps $C \to H(C)$ and $C' \to H(C')$, whose tensor product is a chain map $C \otimes_R C' \to H(C) \otimes_R H(C')$. The induced map on homology for this last chain map is the desired splitting map since the chain complex $H(C) \otimes_R H(C')$ equals its own homology, the boundary maps being trivial. $\square$

### The Topological Künneth Formula

Now we can apply the preceding algebra to obtain the topological statement we are looking for:

> [!theorem] Theorem 3B.6 (Topological Künneth Formula)
> If $X$ and $Y$ are CW complexes and $R$ is a principal ideal domain, then there are natural short exact sequences
> $$0 \to \bigoplus_i [H_i(X; R) \otimes_R H_{n-i}(Y; R)] \to H_n(X \times Y; R) \to \bigoplus_i \text{Tor}^R(H_i(X; R), H_{n-i-1}(Y; R)) \to 0$$
> and these sequences split.

Naturality means that maps $X \to X'$ and $Y \to Y'$ induce a map from the short exact sequence for $X \times Y$ to the corresponding short exact sequence for $X' \times Y'$, with commuting squares. The splitting is not natural, however, as an exercise at the end of this section demonstrates.

> [!proof]- Proof
> When dealing with products of CW complexes there is always the bothersome fact that the compactly generated CW topology may not be the same as the product topology. However, in the present context this is not a real problem. Since the two topologies have the same compact sets, they have the same singular simplices and hence the same singular homology groups.
> 
> Let $C = C_*(X; R)$ and $C' = C_*(Y; R)$, the cellular chain complexes with coefficients in $R$. Then $C \otimes_R C' = C_*(X \times Y; R)$ by Proposition 3B.1, so the algebraic Künneth formula gives the desired short exact sequences. Their naturality follows from naturality in the algebraic Künneth formula, since we can homotope arbitrary maps $X \to X'$ and $Y \to Y'$ to be cellular by Theorem 4.8, assuring that they induce chain maps of cellular chain complexes. $\square$

> [!corollary] Corollary 3B.7
> If $F$ is a field and $X$ and $Y$ are CW complexes, then the cross product map $h : \bigoplus_i [H_i(X; F) \otimes_F H_{n-i}(Y; F)] \to H_n(X \times Y; F)$ is an isomorphism for all $n$. $\square$

There is also a relative version of the Künneth formula for CW pairs $(X, A)$ and $(Y, B)$. This is a split short exact sequence:

$$0 \to \bigoplus_i [H_i(X, A; R) \otimes_R H_{n-i}(Y, B; R)] \to H_n(X \times Y, A \times Y \cup X \times B; R) \to \bigoplus_i \text{Tor}^R(H_i(X, A; R), H_{n-i-1}(Y, B; R)) \to 0$$

for $R$ a principal ideal domain. This too follows from the algebraic Künneth formula since the isomorphism of cellular chain complexes $C_*(X \times Y) \approx C_*(X) \otimes C_*(Y)$ passes down to a quotient isomorphism:

$$C_*(X \times Y)/C_*(A \times Y \cup X \times B) \approx C_*(X)/C_*(A) \otimes C_*(Y)/C_*(B)$$

since bases for these three relative cellular chain complexes correspond bijectively with the cells of $(X - A) \times (Y - B)$, $X - A$, and $Y - B$, respectively.

As a special case, suppose $A$ and $B$ are basepoints $x_0 \in X$ and $y_0 \in Y$. Then the subcomplex $A \times Y \cup X \times B$ can be identified with the wedge sum $X \vee Y$ and the quotient $X \times Y / X \vee Y$ is the smash product $X \wedge Y$. Thus we have a reduced Künneth formula:

$$0 \to \bigoplus_i [\tilde{H}_i(X; R) \otimes_R \tilde{H}_{n-i}(Y; R)] \to \tilde{H}_n(X \wedge Y; R) \to \bigoplus_i \text{Tor}^R(\tilde{H}_i(X; R), \tilde{H}_{n-i-1}(Y; R)) \to 0$$

If we take $Y = S^k$ for example, then $X \wedge S^k$ is the $k$-fold reduced suspension of $X$, and we obtain isomorphisms $\tilde{H}_n(X; R) \approx \tilde{H}_{n+k}(X \wedge S^k; R)$.

The Künneth formula and the universal coefficient theorem can be combined to give a more concise formula $H_n(X \times Y; R) \approx \bigoplus_i H_i(X; H_{n-i}(Y; R))$. The naturality of this isomorphism is somewhat problematic, however, since it uses the splittings in the Künneth formula and universal coefficient theorem. With a little more algebra the formula can be shown to hold more generally for an arbitrary coefficient group $G$ in place of $R$; see [Hilton & Wylie 1967], p. 227.

There is an analogous formula $\tilde{H}_n(X \wedge Y; R) \approx \bigoplus_i \tilde{H}_i(X; \tilde{H}_{n-i}(Y; R))$. As a special case, when $Y$ is a Moore space $M(G, k)$ we obtain isomorphisms $\tilde{H}_n(X; G) \approx \tilde{H}_{n+k}(X \wedge M(G, k); \mathbb{Z})$. Again naturality is an issue, but in this case there is a natural isomorphism obtainable by applying Theorem 4.59 in §4.3, after verifying that the functors $h_n(X) = \tilde{H}_{n+k}(X \wedge M(G, k); \mathbb{Z})$ define a reduced homology theory, which is not hard. The isomorphism $\tilde{H}_n(X; G) \approx \tilde{H}_{n+k}(X \wedge M(G, k); \mathbb{Z})$ says that homology with arbitrary coefficients can be obtained from homology with $\mathbb{Z}$ coefficients by a topological construction as well as by the algebra of tensor products. For general homology theories this formula can be used as a definition of homology with coefficients.

One might wonder about a cohomology version of the Künneth formula. Taking coefficients in a field $F$ and using the natural isomorphism $\text{Hom}(A \otimes B, C) \approx \text{Hom}(A, \text{Hom}(B, C))$, the Künneth formula for homology and the universal coefficient theorem give isomorphisms:
$$\begin{aligned}
H^n(X \times Y; F) &\approx \text{Hom}_F(H_n(X \times Y; F), F) \\
&\approx \bigoplus_i \text{Hom}_F(H_i(X; F) \otimes H_{n-i}(Y; F), F) \\
&\approx \bigoplus_i \text{Hom}_F(H_i(X; F), \text{Hom}_F(H_{n-i}(Y; F), F)) \\
&\approx \bigoplus_i \text{Hom}_F(H_i(X; F), H^{n-i}(Y; F)) \\
&\approx \bigoplus_i H^i(X; H^{n-i}(Y; F))
\end{aligned}$$

More generally, there are isomorphisms $H^n(X \times Y; G) \approx \bigoplus_i H^i(X; H^{n-i}(Y; G))$ for any coefficient group $G$; see [Hilton & Wylie 1967], p. 227. However, in practice it usually suffices to apply the Künneth formula for homology and the universal coefficient theorem for cohomology separately. Also, Theorem 3.15 shows that with stronger hypotheses one can draw stronger conclusions using cup products.

### The Simplicial Cross Product

Let us sketch how the cross product $H_m(X; R) \otimes H_n(Y; R) \to H_{m+n}(X \times Y; R)$ can be defined directly in terms of singular homology. What one wants is a cross product at the level of singular chains, $C_m(X; R) \otimes C_n(Y; R) \to C_{m+n}(X \times Y; R)$. If we are given singular simplices $f : \Delta^m \to X$ and $g : \Delta^n \to Y$, then we have the product map $f \times g : \Delta^m \times \Delta^n \to X \times Y$, and the idea is to subdivide $\Delta^m \times \Delta^n$ into simplices of dimension $m + n$ and then take the sum of the restrictions of $f \times g$ to these simplices, with appropriate signs.

In the special cases that $m$ or $n$ is 1 we have already seen how to subdivide $\Delta^m \times \Delta^n$ into simplices when we constructed prism operators in §2.1. The generalization to $\Delta^m \times \Delta^n$ is not completely obvious, however. Label the vertices of $\Delta^m$ as $v_0, v_1, \cdots, v_m$ and the vertices of $\Delta^n$ as $w_0, w_1, \cdots, w_n$. Think of the pairs $(i, j)$ with $0 \leq i \leq m$ and $0 \leq j \leq n$ as the vertices of an $m \times n$ rectangular grid in $\mathbb{R}^2$. Let $\sigma$ be a path formed by a sequence of $m + n$ horizontal and vertical edges in this grid starting at $(0, 0)$ and ending at $(m, n)$, always moving either to the right or upward. To such a path $\sigma$ we associate a linear map $\ell_\sigma : \Delta^{m+n} \to \Delta^m \times \Delta^n$ sending the $k$th vertex of $\Delta^{m+n}$ to $(v_{i_k}, w_{j_k})$ where $(i_k, j_k)$ is the $k$th vertex of the edgepath $\sigma$. Then we define a simplicial cross product:

$$C_m(X; R) \otimes C_n(Y; R) \xrightarrow{\times} C_{m+n}(X \times Y; R)$$

by the formula:

$$f \times g = \sum_\sigma (-1)^{|\sigma|} (f \times g) \circ \ell_\sigma$$

where $|\sigma|$ is the number of squares in the grid lying below the path $\sigma$. Note that the symbol '$\times$' means different things on the two sides of the equation. From this definition it is a calculation to show that $\partial(f \times g) = \partial f \times g + (-1)^m f \times \partial g$. This implies that the cross product of two cycles is a cycle, and the cross product of a cycle and a boundary is a boundary, so there is an induced cross product in singular homology.

One can see that the images of the maps $\ell_\sigma$ give a simplicial structure on $\Delta^m \times \Delta^n$ in the following way. We can view $\Delta^m$ as the subspace of $\mathbb{R}^m$ defined by the inequalities $0 \leq x_1 \leq \cdots \leq x_m \leq 1$, with the vertex $v_i$ as the point having coordinates $m - i$ zeros followed by $i$ ones. Similarly we have $\Delta^n \subset \mathbb{R}^n$ with coordinates $0 \leq y_1 \leq \cdots \leq y_n \leq 1$. The product $\Delta^m \times \Delta^n$ then consists of $(m + n)$-tuples $(x_1, \cdots, x_m, y_1, \cdots, y_n)$ satisfying both sets of inequalities. The combined inequalities $0 \leq x_1 \leq \cdots \leq x_m \leq y_1 \leq \cdots \leq y_n \leq 1$ define a simplex $\Delta^{m+n}$ in $\Delta^m \times \Delta^n$, and every other point of $\Delta^m \times \Delta^n$ satisfies a similar set of inequalities obtained from $0 \leq x_1 \leq \cdots \leq x_m \leq y_1 \leq \cdots \leq y_n \leq 1$ by a permutation of the variables 'shuffling' the $y_j$'s into the $x_i$'s. Each such shuffle corresponds to an edgepath $\sigma$ consisting of a rightward edge for each $x_i$ and an upward edge for each $y_j$ in the shuffled sequence. Thus we have $\Delta^m \times \Delta^n$ expressed as the union of simplices $\Delta^{m+n}_\sigma$ indexed by the edgepaths $\sigma$. One can check that these simplices fit together nicely to form a $\Delta$-complex structure on $\Delta^m \times \Delta^n$, which is also a simplicial complex structure. See [Eilenberg & Steenrod 1952], p. 68. In fact this construction is sufficiently natural to make the product of any two $\Delta$-complexes into a $\Delta$-complex.

### The Cohomology Cross Product

In §3.2 we defined a cross product $H^k(X; R) \times H^\ell(Y; R) \to H^{k+\ell}(X \times Y; R)$ in terms of the cup product. Let us now describe the alternative approach in which the cross product is defined directly via cellular cohomology, and then cup product is defined in terms of this cross product.

The cellular definition of cohomology cross product is very much like the definition in homology. Given CW complexes $X$ and $Y$, define a cross product of cellular cochains $\phi \in C^k(X; R)$ and $\psi \in C^\ell(Y; R)$ by setting:

$$(\phi \times \psi)(e^k_\alpha \times e^\ell_\beta) = \phi(e^k_\alpha) \psi(e^\ell_\beta)$$

and letting $\phi \times \psi$ take the value 0 on $(k+\ell)$-cells of $X \times Y$ which are not the product of a $k$-cell of $X$ with an $\ell$-cell of $Y$. Another way of saying this is to use the convention that a cellular cochain in $C^k(X; R)$ takes the value 0 on cells of dimension different from $k$, and then we can let $(\phi \times \psi)(e^m_\alpha \times e^n_\beta) = \phi(e^m_\alpha) \psi(e^n_\beta)$ for all $m$ and $n$.

The cellular coboundary formula $\delta(\phi \times \psi) = \delta\phi \times \psi + (-1)^k \phi \times \delta\psi$ for cellular cochains $\phi \in C^k(X; R)$ and $\psi \in C^\ell(Y; R)$ follows easily from the corresponding boundary formula in Proposition 3B.1, namely:

$$\begin{aligned}
\delta(\phi \times \psi)(e^m_\alpha \times e^n_\beta) &= (\phi \times \psi)(\partial(e^m_\alpha \times e^n_\beta)) \\
&= (\phi \times \psi)(\partial e^m_\alpha \times e^n_\beta + (-1)^m e^m_\alpha \times \partial e^n_\beta) \\
&= \delta\phi(e^m_\alpha) \psi(e^n_\beta) + (-1)^m \phi(e^m_\alpha) \delta\psi(e^n_\beta) \\
&= (\delta\phi \times \psi + (-1)^k \phi \times \delta\psi)(e^m_\alpha \times e^n_\beta)
\end{aligned}$$

where the coefficient $(-1)^m$ in the next-to-last line can be replaced by $(-1)^k$ since $\phi(e^m_\alpha) = 0$ unless $k = m$. From the formula $\delta(\phi \times \psi) = \delta\phi \times \psi + (-1)^k \phi \times \delta\psi$ it follows just as for homology and for cup product that there is an induced cross product in cellular cohomology.

To show this agrees with the earlier definition, we can first reduce to the case that $X$ has trivial $(k-1)$ skeleton and $Y$ has trivial $(\ell-1)$ skeleton via the commutative diagram. The left-hand vertical map is surjective, so by commutativity, if the two definitions of cross product agree in the upper row, they agree in the lower row. Next, assuming $X^{k-1}$ and $Y^{\ell-1}$ are trivial, consider the commutative diagram. The vertical maps here are injective, $X^k \times Y^\ell$ being the $(k+\ell)$ skeleton of $X \times Y$, so it suffices to see that the two definitions agree in the lower row. We have $X^k = \bigvee_\alpha S^k_\alpha$ and $Y^\ell = \bigvee_\beta S^\ell_\beta$, so by restriction to these wedge summands the question is reduced finally to the case of a product $S^k_\alpha \times S^\ell_\beta$. In this case, taking $R = \mathbb{Z}$, we showed in Theorem 3.15 that the cross product in question is the map $\mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ sending $(1, 1)$ to $\pm 1$, with the original definition of cross product. The same is obviously true using the cellular cross product. So for $R = \mathbb{Z}$ the two cross products agree up to sign, and it follows that this is also true for arbitrary $R$. We leave it to the reader to sort out the matter of signs.

To relate cross product to cup product we use the diagonal map $\Delta : X \to X \times X$, $x \mapsto (x, x)$. If we are given a definition of cross product, we can define cup product as the composition:

$$H^k(X; R) \times H^\ell(X; R) \xrightarrow{\times} H^{k+\ell}(X \times X; R) \xrightarrow{\Delta_*} H^{k+\ell}(X; R)$$

This agrees with the original definition of cup product since we have:

$$\Delta_*(a \times b) = \Delta_*(p_1^*(a) \smile p_2^*(b)) = \Delta_*(p_1^*(a)) \smile \Delta_*(p_2^*(b)) = a \smile b$$

as both compositions $p_1 \Delta$ and $p_2 \Delta$ are the identity map of $X$.

Unfortunately, the definition of cellular cross product cannot be combined with $\Delta$ to give a definition of cup product at the level of cellular cochains. This is because $\Delta$ is not a cellular map, so it does not induce a map of cellular cochains. It is possible to homotope $\Delta$ to a cellular map by Theorem 4.8, but this involves arbitrary choices. For example, the diagonal of a square can be pushed across either adjacent triangle. In particular cases one might hope to understand the geometry well enough to compute an explicit cellular approximation to the diagonal map, but usually other techniques for computing cup products are preferable.

The cohomology cross product satisfies the same commutativity relation as for homology, namely $T_*(a \times b) = (-1)^{k\ell} b \times a$ for $T : X \times Y \to Y \times X$ the transposition map, $a \in H^k(Y; R)$, and $b \in H^\ell(X; R)$. The proof is the same as for homology. Taking $X = Y$ and noting that $T \Delta = \Delta$, we obtain a new proof of the commutativity property of cup product.

## Exercises

1. Compute the groups $H_i(\mathbb{R}P^m \times \mathbb{R}P^n; G)$ and $H^i(\mathbb{R}P^m \times \mathbb{R}P^n; G)$ for $G = \mathbb{Z}$ and $\mathbb{Z}_2$ via the cellular chain and cochain complexes. [See Example 3B.4.]

2. Let $C$ and $C'$ be chain complexes, and let $I$ be the chain complex consisting of $\mathbb{Z}$ in dimension 1 and $\mathbb{Z} \times \mathbb{Z}$ in dimension 0, with the boundary map taking a generator $e$ in dimension 1 to the difference $v_1 - v_0$ of generators $v_i$ of the two $\mathbb{Z}$'s in dimension 0. Show that a chain map $f : I \otimes C \to C'$ is precisely the same as a chain homotopy between the two chain maps $f_i : C \to C'$, $c \mapsto f(v_i \otimes c)$, $i = 0, 1$. [The chain homotopy is $h(c) = f(e \otimes c)$.]

3. Show that the splitting in the topological Künneth formula cannot be natural by considering the map $f \times \mathbb{1} : M(\mathbb{Z}_m, n) \times M(\mathbb{Z}_m, n) \to S^{n+1} \times M(\mathbb{Z}_m, n)$ where $f$ collapses the $n$-skeleton of $M(\mathbb{Z}_m, n) = S^n \cup e^{n+1}$ to a point.

4. Show that the cross product of fundamental classes for closed $R$-orientable manifolds $M$ and $N$ is a fundamental class for $M \times N$.

5. Show that slant products:

   $$H_n(X \times Y; R) \times H_j(Y; R) \to H_{n-j}(X; R), \quad (e_i \times e_j, \phi) \mapsto \phi(e_j) e_i$$

   $$H^n(X \times Y; R) \times H_j(Y; R) \to H^{n-j}(X; R), \quad (\phi, e_j) \mapsto \left[ e_i \mapsto \phi(e_i \times e_j) \right]$$

   can be defined via the indicated cellular formulas. [These 'products' are in some ways more like division than multiplication, and this is reflected in the common notation $a/b$ for them, or $a \backslash b$ when the order of the factors is reversed. The first of the two slant products is related to cap product in the same way that the cohomology cross product is related to cup product.]