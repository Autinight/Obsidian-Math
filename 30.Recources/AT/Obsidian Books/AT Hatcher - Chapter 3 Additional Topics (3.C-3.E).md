---
title: AT Hatcher - Chapter 3 Additional Topics (3.C-3.E)
tags:
  - algebraic-topology
  - cohomology
  - h-spaces
  - hopf-algebras
  - bockstein
source: AT Hatcher, Algebraic Topology
section: Chapter 3, Sections 3.C-3.E
date: 2026-05-09
---

# 3.C H–Spaces and Hopf Algebras

Of the three axioms for a group, it would seem that the least subtle is the existence of an identity element. However, we shall see in this section that when topology is added to the picture, the identity axiom becomes much more potent. To give a name to the objects we will be considering, define a space $X$ to be an **H–space**, 'H' standing for 'Hopf', if there is a continuous multiplication map $\mu: X \times X \to X$ and an 'identity' element $e \in X$ such that the two maps $X \to X$ given by $x \mapsto \mu(x, e)$ and $x \mapsto \mu(e, x)$ are homotopic to the identity through maps $(X, e) \to (X, e)$. In particular, this implies that $\mu(e, e) = e$.

In terms of generality, this definition represents something of a middle ground. One could weaken the definition by dropping the condition that the homotopies preserve the basepoint $e$, or one could strengthen it by requiring that $e$ be a strict identity, without any homotopies. An exercise at the end of the section is to show the three possible definitions are equivalent if $X$ is a CW complex. An advantage of allowing homotopies in the definition is that a space homotopy equivalent in the basepointed sense to an H–space is again an H–space.

Imposing basepoint conditions is fairly standard in homotopy theory, and is usually not a serious restriction.

The most classical examples of H–spaces are **topological groups**, spaces $X$ with a group structure such that both the multiplication map $X \times X \to X$ and the inversion map $X \to X$, $x \mapsto x^{-1}$, are continuous. For example, the group $GL_n(\mathbb{R})$ of invertible $n \times n$ matrices with real entries is a topological group when topologized as a subspace of the $n^2$ dimensional vector space $M_n(\mathbb{R})$ of all $n \times n$ matrices over $\mathbb{R}$. It is an open subspace since the invertible matrices are those with nonzero determinant, and the determinant function $M_n(\mathbb{R}) \to \mathbb{R}$ is continuous.

Matrix multiplication is certainly continuous, being defined by simple algebraic formulas, and it is not hard to see that matrix inversion is also continuous if one thinks for example of the classical adjoint formula for the inverse matrix.

Likewise $GL_n(\mathbb{C})$ is a topological group, as is the quaternionic analog $GL_n(\mathbb{H})$, though in the latter case one needs a somewhat different justification since determinants of quaternionic matrices do not have the good properties one would like.

Since these groups $GL_n$ over $\mathbb{R}$, $\mathbb{C}$, and $\mathbb{H}$ are open subsets of Euclidean spaces, they are examples of **Lie groups**, which can be defined as topological groups which are also manifolds. The $GL_n$ groups are noncompact, being open subsets of Euclidean spaces, but they have the homotopy types of compact Lie groups $O(n)$, $U(n)$, and $Sp(n)$. This is explained in §3.D for $GL_n(\mathbb{R})$, and the other two cases are similar.

Among the simplest H–spaces from a topological viewpoint are the unit spheres $S^1$ in $\mathbb{C}$, $S^3$ in the quaternions $\mathbb{H}$, and $S^7$ in the octonions $\mathbb{O}$. These are H–spaces since the multiplications in these division algebras are continuous, being defined by polynomial formulas, and are norm-preserving, $|ab| = |a||b|$, hence restrict to multiplications on the unit spheres, and the identity element of the division algebra lies in the unit sphere in each case. Both $S^1$ and $S^3$ are Lie groups since the multiplications in $\mathbb{C}$ and $\mathbb{H}$ are associative and inverses exist since $aa = |a|^2 = 1$ if $|a| = 1$.

However, $S^7$ is not a group since multiplication of octonions is not associative. Of course $S^0 = \{\pm 1\}$ is also a topological group, trivially. A famous theorem of J. F. Adams asserts that $S^0$, $S^1$, $S^3$, and $S^7$ are the only spheres that are H–spaces; see §4.B for a fuller discussion.

Let us describe now some associative H–spaces where inverses fail to exist. Multiplication of polynomials provides an H–space structure on $\mathbb{CP}^{\infty}$ in the following way. A nonzero polynomial $a_0 + a_1z + \cdots + a_nz^n$ with coefficients $a_i \in \mathbb{C}$ corresponds to a point $(a_0, \cdots, a_n, 0, \cdots) \in \mathbb{C}^{\infty} - \{0\}$. Multiplication of two such polynomials determines a multiplication $\mathbb{C}^{\infty} - \{0\} \times \mathbb{C}^{\infty} - \{0\} \to \mathbb{C}^{\infty} - \{0\}$ which is associative, commutative, and has an identity element $(1, 0, \cdots)$. Since $\mathbb{C}$ is commutative we can factor out by scalar multiplication by nonzero constants and get an induced product $\mathbb{CP}^{\infty} \times \mathbb{CP}^{\infty} \to \mathbb{CP}^{\infty}$ with the same properties. Thus $\mathbb{CP}^{\infty}$ is an associative, commutative H–space with a strict identity. Instead of factoring out by all nonzero scalars, we could factor out only by scalars of the form $\rho e^{2\pi ik/q}$ with $\rho$ an arbitrary positive real, $k$ an arbitrary integer, and $q$ a fixed positive integer. The quotient of $\mathbb{C}^{\infty} - \{0\}$ under this identification, an infinite-dimensional lens space $L^{\infty}$ with $\pi_1(L^{\infty}) \approx \mathbb{Z}_q$, is therefore also an associative, commutative H–space. This includes $\mathbb{RP}^{\infty}$ in particular.

The spaces $J(X)$ defined in §3.2 are also H–spaces, with the multiplication given by $(x_1, \cdots, x_m)(y_1, \cdots, y_n) = (x_1, \cdots, x_m, y_1, \cdots, y_n)$, which is associative and has an identity element $(e)$ where $e$ is the basepoint of $X$. One could describe $J(X)$ as the free associative H–space generated by $X$. There is also a commutative analog of $J(X)$ called the infinite symmetric product $SP(X)$ defined in the following way. Let $SP_n(X)$ be the quotient space of the $n$ fold product $X^n$ obtained by identifying all $n$ tuples $(x_1, \cdots, x_n)$ that differ only by a permutation of their coordinates. The inclusion $X^n \hookrightarrow X^{n+1}$, $(x_1, \cdots, x_n) \mapsto (x_1, \cdots, x_n, e)$ induces an inclusion $SP_n(X) \hookrightarrow SP_{n+1}(X)$, and $SP(X)$ is defined to be the union of this increasing sequence of $SP_n(X)$'s, with the weak topology. Alternatively, $SP(X)$ is the quotient of $J(X)$ obtained by identifying points that differ only by permutation of coordinates. The H–space structure on $J(X)$ induces an H–space structure on $SP(X)$ which is commutative in addition to being associative and having a strict identity. The spaces $SP(X)$ are studied in more detail in §4.K.

The goal of this section will be to describe the extra structure which the multiplication in an H–space gives to its homology and cohomology. This is of particular interest since many of the most important spaces in algebraic topology turn out to be H–spaces.

## Hopf Algebras

Let us look at cohomology first. Choosing a commutative ring $R$ as coefficient ring, we can regard the cohomology ring $H^*(X; R)$ of a space $X$ as an algebra over $R$ rather than merely a ring. Suppose $X$ is an H–space satisfying two conditions:

(1) $X$ is path-connected, hence $H^0(X; R) \approx R$.

(2) $H^n(X; R)$ is a finitely generated free $R$ module for each $n$, so the cross product $H^*(X; R) \otimes_R H^*(X; R) \to H^*(X \times X; R)$ is an isomorphism.

The multiplication $\mu: X \times X \to X$ induces a map $\mu^*: H^*(X; R) \to H^*(X \times X; R)$, and when we combine this with the cross product isomorphism in (2) we get a map

$$
H^*(X; R) \xrightarrow{\Delta} H^*(X; R) \otimes_R H^*(X; R)
$$

which is an algebra homomorphism since both $\mu^*$ and the cross product isomorphism are algebra homomorphisms. The key property of $\Delta$ turns out to be that for any $\alpha \in H^n(X; R)$, $n > 0$, we have

$$
\Delta(\alpha) = \alpha \otimes 1 + 1 \otimes \alpha + \sum_i \alpha'_i \otimes \alpha''_i
$$

where $|\alpha'_i| > 0$ and $|\alpha''_i| > 0$.

To verify this, let $i: X \to X \times X$ be the inclusion $x \mapsto (x, e)$ for $e$ the identity element of $X$, and consider the commutative diagram

> [!figure]- 🔴 Figure needed: Commutative diagram for Hopf algebra coproduct
> Source: Section 3.C, Hopf Algebras
> Content: Commutative diagram showing the maps between $H^*(X; R)$, $H^*(X \times X; R)$, and $H^*(X; R) \otimes_R H^*(X; R)$, including the map $P$ defined by commutativity
> Action: Screenshot or manual reconstruction needed.

The map $P$ is defined by commutativity, and by looking at the lower right triangle we see that $P(\alpha \otimes 1) = \alpha$ and $P(\alpha \otimes \beta) = 0$ if $|\beta| > 0$. The H–space property says that $\mu i \simeq 1$, so $P\Delta = 1$. This implies that the component of $\Delta(\alpha)$ in $H^n(X; R) \otimes_R H^0(X; R)$ is $\alpha \otimes 1$. A similar argument shows the component in $H^0(X; R) \otimes_R H^n(X; R)$ is $1 \otimes \alpha$.

We can summarize this situation by saying that $H^*(X; R)$ is a **Hopf algebra**, that is, a graded algebra $A = \bigoplus_{n \geq 0} A_n$ over a commutative base ring $R$, satisfying the following two conditions:

(1) There is an identity element $1 \in A_0$ such that the map $R \to A_0$, $r \mapsto r \cdot 1$, is an isomorphism. In this case one says $A$ is **connected**.

(2) There is a diagonal or coproduct $\Delta: A \to A \otimes A$, a homomorphism of graded algebras satisfying $\Delta(\alpha) = \alpha \otimes 1 + 1 \otimes \alpha + \sum_i \alpha'_i \otimes \alpha''_i$ where $|\alpha'_i| > 0$ and $|\alpha''_i| > 0$, for all $\alpha$ with $|\alpha| > 0$.

Here and in what follows we take $\otimes$ to mean $\otimes_R$. The multiplication in $A \otimes A$ is given by the standard formula $(\alpha \otimes \beta)(\gamma \otimes \delta) = (-1)^{|\beta||\gamma|}(\alpha\gamma \otimes \beta\delta)$. For a general Hopf algebra the multiplication is not assumed to be either associative or commutative (in the graded sense), though in the example of $H^*(X; R)$ for $X$ an H–space the algebra structure is of course associative and commutative.

> [!example] Example 3C.1
> One of the simplest Hopf algebras is a polynomial ring $R[\alpha]$. The coproduct $\Delta(\alpha)$ must equal $\alpha \otimes 1 + 1 \otimes \alpha$ since the only elements of $R[\alpha]$ of lower dimension than $\alpha$ are the elements of $R$ in dimension zero, so the terms $\alpha'_i$ and $\alpha''_i$ in the coproduct formula $\Delta(\alpha) = \alpha \otimes 1 + 1 \otimes \alpha + \sum_i \alpha'_i \otimes \alpha''_i$ must be zero. The requirement that $\Delta$ be an algebra homomorphism then determines $\Delta$ completely. To describe $\Delta$ explicitly we distinguish two cases. If the dimension of $\alpha$ is even or if $2 = 0$ in $R$, then the multiplication in $R[\alpha] \otimes R[\alpha]$ is strictly commutative and $\Delta(\alpha^n) = (\alpha \otimes 1 + 1 \otimes \alpha)^n = \sum_i \binom{n}{i} \alpha^i \otimes \alpha^{n-i}$. In the opposite case that $\alpha$ is odd-dimensional, then $\Delta(\alpha^2) = (\alpha \otimes 1 + 1 \otimes \alpha)^2 = \alpha^2 \otimes 1 + 1 \otimes \alpha^2$ since $(\alpha \otimes 1)(1 \otimes \alpha) = \alpha \otimes \alpha$ and $(1 \otimes \alpha)(\alpha \otimes 1) = -\alpha \otimes \alpha$ if $\alpha$ has odd dimension. Thus if we set $\beta = \alpha^2$, then $\beta$ is even-dimensional and we have $\Delta(\alpha^{2n}) = \Delta(\beta^n) = (\beta \otimes 1 + 1 \otimes \beta)^n = \sum_i \binom{n}{i} \beta^i \otimes \beta^{n-i}$ and $\Delta(\alpha^{2n+1}) = \Delta(\alpha\beta^n) = \Delta(\alpha)\Delta(\beta^n) = \sum_i \binom{n}{i} \alpha\beta^i \otimes \beta^{n-i} + \sum_i \binom{n}{i} \beta^i \otimes \alpha\beta^{n-i}$.

> [!example] Example 3C.2
> The exterior algebra $\Lambda_R[\alpha]$ on an odd-dimensional generator $\alpha$ is a Hopf algebra, with $\Delta(\alpha) = \alpha \otimes 1 + 1 \otimes \alpha$. To verify that $\Delta$ is an algebra homomorphism we must check that $\Delta(\alpha^2) = \Delta(\alpha)^2$, or in other words, since $\alpha^2 = 0$, we need to see that $\Delta(\alpha)^2 = 0$. As in the preceding example we have $\Delta(\alpha)^2 = (\alpha \otimes 1 + 1 \otimes \alpha)^2 = \alpha^2 \otimes 1 + 1 \otimes \alpha^2$, so $\Delta(\alpha)^2$ is indeed $0$. Note that if $\alpha$ were even-dimensional we would instead have $\Delta(\alpha)^2 = \alpha^2 \otimes 1 + 2\alpha \otimes \alpha + 1 \otimes \alpha^2$, which would be $0$ in $\Lambda_R[\alpha] \otimes \Lambda_R[\alpha]$ only if $2 = 0$ in $R$.

An element $\alpha$ of a Hopf algebra is called **primitive** if $\Delta(\alpha) = \alpha \otimes 1 + 1 \otimes \alpha$. As the preceding examples illustrate, if a Hopf algebra is generated as an algebra by primitive elements, then the coproduct $\Delta$ is uniquely determined by the product. This happens in a number of interesting special cases, but certainly not in general, as we shall see.

The existence of the coproduct in a Hopf algebra turns out to restrict the multiplicative structure considerably. Here is an important example illustrating this:

> [!example] Example 3C.3
> Suppose that the truncated polynomial algebra $F[\alpha]/(\alpha^n)$ over a field $F$ is a Hopf algebra. Then $\alpha$ is primitive, just as it is in $F[\alpha]$, so if we assume either that $\alpha$ is even-dimensional or that $F$ has characteristic $2$, then the relation $\alpha^n = 0$ yields an equation
> 
> $$
> 0 = \Delta(\alpha^n) = \alpha^n \otimes 1 + 1 \otimes \alpha^n + \sum_{0 < i < n} \binom{n}{i} \alpha^i \otimes \alpha^{n-i} = \sum_{0 < i < n} \binom{n}{i} \alpha^i \otimes \alpha^{n-i}
> $$
> 
> which implies that $\binom{n}{i} = 0$ in $F$ for each $i$ in the range $0 < i < n$. This is impossible if $F$ has characteristic $0$, and if the characteristic of $F$ is $p > 0$ then it happens only when $n$ is a power of $p$. For $p = 2$ this was shown in the proof of Theorem 3.21, and the argument given there works just as well for odd primes. Conversely, it is easy to check that if $F$ has characteristic $p$ then $F[\alpha]/(\alpha^{p^i})$ is a Hopf algebra, assuming still that $\alpha$ is even-dimensional if $p$ is odd.
> 
> The characteristic $0$ case of this result implies that $\mathbb{CP}^n$ is not an H–space for finite $n$, in contrast with $\mathbb{CP}^{\infty}$ which is an H–space as we saw earlier. Similarly, taking $F = \mathbb{Z}_2$, we deduce that $\mathbb{RP}^n$ can be an H–space only if $n + 1$ is a power of $2$. Indeed, $\mathbb{RP}^1 = S^1/\pm 1$, $\mathbb{RP}^3 = S^3/\pm 1$, and $\mathbb{RP}^7 = S^7/\pm 1$ have quotient H–space structures from $S^1$, $S^3$ and $S^7$ since $-1$ commutes with all elements of $S^1$, $S^3$, or $S^7$. However, these are the only cases when $\mathbb{RP}^n$ is an H–space since, by an exercise at the end of this section, the universal cover of an H–space is an H–space, and $S^1$, $S^3$, and $S^7$ are the only spheres that are H–spaces, by the theorem of Adams mentioned earlier.

The tensor product $A \otimes B$ of Hopf algebras $A$ and $B$ is again a Hopf algebra, with coproduct the composition $A \otimes B \xrightarrow{\Delta \otimes \Delta} (A \otimes A) \otimes (B \otimes B) \to (A \otimes B) \otimes (A \otimes B)$ where the second map interchanging the middle two factors includes the usual sign in graded commutativity. Thus the preceding examples yield many other Hopf algebras, tensor products of polynomial, truncated polynomial, and exterior algebras on any number of generators. The following theorem of Hopf is a partial converse:

> [!theorem] Theorem 3C.4
> If $A$ is a commutative, associative Hopf algebra over a field $F$ of characteristic $0$, and $A_n$ is finite-dimensional over $F$ for each $n$, then $A$ is isomorphic as an algebra to the tensor product of an exterior algebra on odd-dimensional generators and a polynomial algebra on even-dimensional generators.

There is an analogous theorem of Borel when $F$ is a finite field of characteristic $p$. In this case $A$ is again isomorphic to a tensor product of single-generator Hopf algebras, of one of the following types:
- $F[\alpha]$, with $\alpha$ even-dimensional if $p \neq 2$.
- $\Lambda_F[\alpha]$ with $\alpha$ odd-dimensional.
- $F[\alpha]/(\alpha^{p^i})$, with $\alpha$ even-dimensional if $p \neq 2$.

For a proof see [Borel 1953] or [Kane 1988].

> [!proof]
> Since $A_n$ is finitely generated over $F$ for each $n$, we may choose algebra generators $x_1, x_2, \cdots$ for $A$ with $|x_i| \leq |x_{i+1}|$ for all $i$. Let $A_n$ be the subalgebra generated by $x_1, \cdots, x_n$. This is a Hopf subalgebra of $A$, that is, $\Delta(A_n) \subset A_n \otimes A_n$, since $\Delta(x_i)$ involves only $x_i$ and terms of smaller dimension. We may assume $x_n$ does not lie in $A_{n-1}$.
> 
> Since $A$ is associative and commutative, there is a natural surjection $A_{n-1} \otimes F[x_n] \to A_n$ if $|x_n|$ is even, or $A_{n-1} \otimes \Lambda F[x_n] \to A_n$ if $|x_n|$ is odd. By induction on $n$ it will suffice to prove these surjections are injective. Thus in the two cases we must rule out nontrivial relations $\sum_i \alpha_i x_n^i = 0$ and $\alpha_0 + \alpha_1 x_n = 0$, respectively, with coefficients $\alpha_i \in A_{n-1}$.
> 
> Let $I$ be the ideal in $A_n$ generated by $x_n^2$ and the positive-dimensional elements of $A_{n-1}$, so $I$ consists of the polynomials $\sum_i \alpha_i x_n^i$ with coefficients $\alpha_i \in A_{n-1}$, the first two coefficients $\alpha_0$ and $\alpha_1$ having trivial components in $A_0$. Note that $x_n \not\in I$ since elements of $I$ having dimension $|x_n|$ must lie in $A_{n-1}$. Consider the composition
> 
> $$
> A_n \xrightarrow{\Delta} A_n \otimes A_n \xrightarrow{q} A_n \otimes (A_n/I)
> $$
> 
> with $q$ the natural quotient map. By the definition of $I$, this composition $q\Delta$ sends $\alpha \in A_{n-1}$ to $\alpha \otimes 1$ and $x_n$ to $x_n \otimes 1 + 1 \otimes \bar{x}_n$ where $\bar{x}_n$ is the image of $x_n$ in $A_n/I$.
> 
> In case $|x_n|$ is even, applying $q\Delta$ to a nontrivial relation $\sum_i \alpha_i x_n^i = 0$ gives
> 
> $$
> 0 = \sum_i (\alpha_i \otimes 1)(x_n \otimes 1 + 1 \otimes \bar{x}_n)^i = \left(\sum_i \alpha_i x_n^i\right) \otimes 1 + \sum_i i\alpha_i x_n^{i-1} \otimes \bar{x}_n
> $$
> 
> Since $\sum_i \alpha_i x_n^i = 0$, this implies that $\sum_i i\alpha_i x_n^{i-1} \otimes \bar{x}_n$ is zero in the tensor product $A_n \otimes (A_n/I)$, hence $\sum_i i\alpha_i x_n^{i-1} = 0$ since $x_n \not\in I$ implies $\bar{x}_n \neq 0$. The relation $\sum_i i\alpha_i x_n^{i-1} = 0$ has lower degree than the original relation, and is not the trivial relation since $F$ has characteristic $0$, $\alpha_i \neq 0$ implying $i\alpha_i \neq 0$ if $i > 0$. Since we could assume the original relation had minimum degree, we have reached a contradiction.
> 
> The case $|x_n|$ odd is similar. Applying $q\Delta$ to a relation $\alpha_0 + \alpha_1 x_n = 0$ gives
> 
> $$
> 0 = \alpha_0 \otimes 1 + (\alpha_1 \otimes 1)(x_n \otimes 1 + 1 \otimes \bar{x}_n) = (\alpha_0 + \alpha_1 x_n) \otimes 1 + \alpha_1 \otimes \bar{x}_n
> $$
> 
> Since $\alpha_0 + \alpha_1 x_n = 0$, we get $\alpha_1 \otimes \bar{x}_n = 0$, which implies $\alpha_1 = 0$ and hence $\alpha_0 = 0$. ∎

The structure of Hopf algebras over $\mathbb{Z}$ is much more complicated than over a field. Here is an example that is still fairly simple.

> [!example] Example 3C.5: Divided Polynomial Algebras
> We showed in Proposition 3.22 that the H–space $J(S^n)$ for $n$ even has $H^*(J(S^n); \mathbb{Z})$ a divided polynomial algebra, the algebra $\Gamma_{\mathbb{Z}}[\alpha]$ with additive generators $\alpha_i$ in dimension $ni$ and multiplication given by $\alpha_1^k = k!\alpha_k$, hence $\alpha_i\alpha_j = \binom{i+j}{i}\alpha_{i+j}$. The coproduct in $\Gamma_{\mathbb{Z}}[\alpha]$ is uniquely determined by the multiplicative structure since $\Delta(\alpha_1^k) = (\alpha_1 \otimes 1 + 1 \otimes \alpha_1)^k = \sum_i \binom{k}{i} \alpha_1^i \otimes \alpha_1^{k-i}$, which implies that $\Delta(\alpha_1^k/k!) = \sum_i (\alpha_1^i/i!) \otimes (\alpha_1^{k-i}/(k-i)!)$, that is, $\Delta(\alpha_k) = \sum_i \alpha_i \otimes \alpha_{k-i}$. So in this case the coproduct has a simpler description than the product.
> 
> It is interesting to see what happens to the divided polynomial algebra $\Gamma_{\mathbb{Z}}[\alpha]$ when we change to field coefficients. Clearly $\Gamma_{\mathbb{Q}}[\alpha]$ is the same as $\mathbb{Q}[\alpha]$. In contrast with this, $\Gamma_{\mathbb{Z}_p}[\alpha]$, with multiplication defined by $\alpha_i\alpha_j = \binom{i+j}{i}\alpha_{i+j}$, happens to be isomorphic as an algebra to the infinite tensor product $\bigotimes_{i \geq 0} \mathbb{Z}_p[\alpha_{p^i}]/(\alpha_{p^i}^{p})$, as we will show in a moment. However, as Hopf algebras these two objects are different since $\alpha_{p^i}$ is primitive in $\bigotimes_{i \geq 0} \mathbb{Z}_p[\alpha_{p^i}]/(\alpha_{p^i}^{p})$ but not in $\Gamma_{\mathbb{Z}_p}[\alpha]$ when $i > 0$, since the coproduct in $\Gamma_{\mathbb{Z}_p}[\alpha]$ is given by $\Delta(\alpha_k) = \sum_i \alpha_i \otimes \alpha_{k-i}$.
> 
> Now let us show that there is an algebra isomorphism
> 
> $$
> \Gamma_{\mathbb{Z}_p}[\alpha] \approx \bigotimes_{i \geq 0} \mathbb{Z}_p[\alpha_{p^i}]/(\alpha_{p^i}^{p})
> $$
> 
> Since $\Gamma_{\mathbb{Z}_p}[\alpha] = \Gamma_{\mathbb{Z}}[\alpha] \otimes \mathbb{Z}_p$, this is equivalent to:
> 
> $(*)$ The element $\alpha_1^{n_0} \alpha_p^{n_1} \cdots \alpha_{p^k}^{n_k}$ in $\Gamma_{\mathbb{Z}}[\alpha]$ is divisible by $p$ iff $n_i \geq p$ for some $i$.
> 
> The product $\alpha_1^{n_0} \alpha_p^{n_1} \cdots \alpha_{p^k}^{n_k}$ equals $m\alpha_n$ for $n = n_0 + n_1p + \cdots + n_kp^k$ and some integer $m$. The question is whether $p$ divides $m$. We will show:
> 
> $(**)$ $\alpha_n\alpha_{p^k}$ is divisible by $p$ iff $n_k = p - 1$, assuming that $n_i < p$ for each $i$.
> 
> This implies $(*)$ by an inductive argument in which we build up the product in $(*)$ by repeated multiplication on the right by terms $\alpha_{p^i}$.
> 
> To prove $(**)$ we recall that $\alpha_n\alpha_{p^k} = \binom{n+p^k}{n}\alpha_{n+p^k}$. The mod $p$ value of this binomial coefficient can be computed using Lemma 3C.6 below. Assuming that $n_i < p$ for each $i$ and that $n_{k+1} < p$, the $p$-adic representations of $n + p^k$ and $n$ differ only in the coefficient of $p^k$, so mod $p$ we have $\binom{n+p^k}{n} = \binom{n_{k+1}}{n_k} = n_k + 1$. This conclusion also holds if $n_k + 1 = p$, when the $p$-adic representations of $n + p^k$ and $n$ differ also in the coefficient of $p^{k+1}$. The statement $(**)$ then follows.

> [!lemma] Lemma 3C.6
> If $p$ is a prime, then $\binom{n}{k} \equiv \prod_i \binom{n_i}{k_i} \mod p$ where $n = \sum_i n_ip^i$ and $k = \sum_i k_ip^i$ with $0 \leq n_i < p$ and $0 \leq k_i < p$ are the $p$-adic representations of $n$ and $k$.
> 
> Here the convention is that $\binom{n}{k} = 0$ if $k_i > n_i$ for any $i$.
$\binom{n}{k} = 0$ if $n < k$, and $\binom{n}{0} = 1$ for all $n \geq 0$.

> [!proof]
> In $\mathbb{Z}_p[x]$ there is an identity $(1 + x)^p = 1 + x^p$ since $p$ clearly divides $\binom{p}{k} = p!/k!(p - k)!$ for $0 < k < p$. By induction it follows that $(1 + x)^{p^i} = 1 + x^{p^i}$. Hence if $n = \sum_i n_i p^i$ is the $p$-adic representation of $n$ then:
> $$(1 + x)^n = (1 + x)^{n_0}(1 + x^p)^{n_1}(1 + x^{p^2})^{n_2} \cdots$$
> $$= \left[1 + \binom{n_0}{1}x + \binom{n_0}{2}x^2 + \cdots + \binom{n_0}{p-1}x^{p-1}\right]$$
> $$\times \left[1 + \binom{n_1}{1}x^p + \binom{n_1}{2}x^{2p} + \cdots + \binom{n_1}{p-1}x^{(p-1)p}\right]$$
> $$\times \left[1 + \binom{n_2}{1}x^{p^2} + \binom{n_2}{2}x^{2p^2} + \cdots + \binom{n_2}{p-1}x^{(p-1)p^2}\right]$$
> $$\times \cdots$$
> When this is multiplied out, one sees that no terms combine, and the coefficient of $x^k$ is just $\prod_i \binom{n_i}{k_i}$ where $k = \sum_i k_i p^i$ is the $p$-adic representation of $k$.
>
> $\sqcup\sqcap$

## Pontryagin Product

Another special feature of H–spaces is that their homology groups have a product operation, called the **Pontryagin product**. For an H–space $X$ with multiplication $\mu: X \times X \to X$, this is the composition

$$H_*(X; R) \otimes H_*(X; R) \xrightarrow{\times} H_*(X \times X; R) \xrightarrow{\mu_*} H_*(X; R)$$

where the first map is the cross product defined in §3.B. Thus the Pontryagin product consists of bilinear maps $H_i(X; R) \times H_j(X; R) \to H_{i+j}(X; R)$. Unlike cup product, the Pontryagin product is not in general associative unless the multiplication $\mu$ is associative or at least associative up to homotopy, in the sense that the maps $X \times X \times X \to X$, $(x, y, z) \mapsto \mu(x, \mu(y, z))$ and $(x, y, z) \mapsto \mu(\mu(x, y), z)$ are homotopic. Fortunately most H–spaces one meets in practice satisfy this associativity property. Nor is the Pontryagin product generally commutative, even in the graded sense, unless $\mu$ is commutative or homotopy-commutative, which is relatively rare for H–spaces. We will give examples shortly where the Pontryagin product is not commutative.

In case $X$ is a CW complex and $\mu$ is a cellular map the Pontryagin product can be computed using cellular homology via the cellular chain map

$$C_i(X; R) \times C_j(X; R) \xrightarrow{\times} C_{i+j}(X \times X; R) \xrightarrow{\mu_*} C_{i+j}(X; R)$$

where the cross product map sends generators corresponding to cells $e^i$ and $e^j$ to the generator corresponding to the product cell $e^i \times e^j$, and then $\mu_*$ is applied to this product cell.

> [!example] Example 3C.7
> Let us compute the Pontryagin product for $J(S^n)$. Here there is one cell $e_i^n$ for each $i \geq 0$, and $\mu$ takes the product cell $e_i^n \times e_j^n$ homeomorphically onto the cell $e_{i+j}^n$. This means that $H_*(J(S^n); \mathbb{Z})$ is simply the polynomial ring $\mathbb{Z}[x]$ on an $n$-dimensional generator $x$. This holds for $n$ odd as well as for $n$ even, so the Pontryagin product need not satisfy the same general commutativity relation as cup product. In this example the Pontryagin product structure is simpler than the cup product structure, though for some H–spaces it is the other way round. In applications it is often convenient to have the choice of which product structure to use.
>
> This calculation immediately generalizes to $J(X)$ where $X$ is any connected CW complex whose cellular boundary maps are all trivial. The cellular boundary maps in the product $X^m$ of $m$ copies of $X$ are then trivial by induction on $m$ using Proposition 3B.1, and therefore the cellular boundary maps in $J(X)$ are all trivial since the quotient map $X^m \to J_m(X)$ is cellular and each cell of $J_m(X)$ is the homeomorphic image of a cell of $X^m$. Thus $H_*(J(X); \mathbb{Z})$ is free with additive basis the products $e^{n_1} \times \cdots \times e^{n_k}$ of positive-dimensional cells of $X$, and the multiplicative structure is that of polynomials in noncommuting variables corresponding to the positive-dimensional cells of $X$.
>
> Another way to describe $H_*(J(X); \mathbb{Z})$ in this example is as the tensor algebra $T\tilde{H}_*(X; \mathbb{Z})$, where for a graded $R$-module $M$ that is trivial in dimension zero, like the reduced homology of a path-connected space, the tensor algebra $TM$ is the direct sum of the $n$-fold tensor products of $M$ with itself for all $n \geq 1$, together with a copy of $R$ in dimension zero, with the obvious multiplication coming from tensor product and scalar multiplication.

Generalizing the preceding example, we have:

> [!proposition] Proposition 3C.8
> If $X$ is a connected CW complex with $H_*(X; R)$ a free $R$-module, then $H_*(J(X); R)$ is isomorphic to the tensor algebra $T\tilde{H}_*(X; R)$.

This can be paraphrased as saying that the homology of the free H–space generated by a space with free homology is the free algebra generated by the homology of the space.

> [!proof]
> With coefficients in $R$, let $\phi: T\tilde{H}_*(X) \to H_*(J(X))$ be the homomorphism whose restriction to the $n$-fold tensor product $\tilde{H}_*(X)^{\otimes n}$ is the composition
> $$\tilde{H}_*(X)^{\otimes n} \cong H_*(X)^{\otimes n} \xrightarrow{\times} H_*(X^n) \to H_*(J_n(X)) \to H_*(J(X))$$
> where the next-to-last map is induced by the quotient map $X^n \to J_n(X)$. It is clear that $\phi$ is a ring homomorphism since the product in $J(X)$ is induced from the natural map $X^m \times X^n \to X^{m+n}$. To show that $\phi$ is an isomorphism, consider the following commutative diagram of short exact sequences:

> [!figure]- 🔴 Figure needed: Commutative diagram of short exact sequences
> Source: p.289, Proposition 3C.8 proof
> Content: Commutative diagram showing the relationship between tensor algebra and homology of James construction
> Action: Screenshot or manual reconstruction needed.

> In the upper row, $T_m \tilde{H}_*(X)$ denotes the direct sum of the products $\tilde{H}_*(X)^{\otimes k}$ for $k \leq m$, so this row is exact. The second row is the homology exact sequence for the pair $(J_n(X), J_{n-1}(X))$, with quotient $J_n(X)/J_{n-1}(X)$ the $n$-fold smash product $X^{\wedge n}$. This long exact sequence breaks up into short exact sequences as indicated, by commutativity of the right-hand square and the fact that the right-hand vertical map is an isomorphism by the Künneth formula, using the hypothesis that $H_*(X)$ is free over the given coefficient ring. By induction on $n$ and the five-lemma we deduce from the diagram that $\phi: T_n \tilde{H}_*(X) \to H_*(J_n(X))$ is an isomorphism for all $n$. Letting $n$ go to $\infty$, this implies that $\phi: T\tilde{H}_*(X) \to H_*(J(X))$ is an isomorphism since in any given dimension $T_n \tilde{H}_*(X)$ is independent of $n$ when $n$ is sufficiently large, and the same is true of $H_*(J_n(X))$ by the second row of the diagram.
>
> $\sqcup\sqcap$

## Dual Hopf Algebras

There is a close connection between the Pontryagin product in homology and the Hopf algebra structure on cohomology. Suppose that $X$ is an H–space such that, with coefficients in a field $R$, the vector spaces $H^n(X; R)$ are finite-dimensional for all $n$.

Alternatively, we could take $R = \mathbb{Z}$ and assume $H_n(X; \mathbb{Z})$ is finitely generated and free for all $n$. In either case we have $H^n(X; R) = \mathrm{Hom}_R(H_n(X; R), R)$, and as a consequence the Pontryagin product $H_*(X; R) \otimes H_*(X; R) \to H_*(X; R)$ and the coproduct $\Delta: H^*(X; R) \to H^*(X; R) \otimes H^*(X; R)$ are dual to each other, both being induced by the H–space product $\mu: X \times X \to X$. Therefore the coproduct in cohomology determines the Pontryagin product in homology, and vice versa.

Specifically, the component $\Delta_{ij}: H^{i+j}(X; R) \to H^i(X; R) \otimes H^j(X; R)$ of $\Delta$ is dual to the product $H_i(X; R) \otimes H_j(X; R) \to H_{i+j}(X; R)$.

> [!example] Example 3C.9
> Consider $J(S^n)$ with $n$ even, so $H^*(J(S^n); \mathbb{Z})$ is the divided polynomial algebra $\Gamma_{\mathbb{Z}}[\alpha]$. In Example 3C.5 we derived the coproduct formula $\Delta(\alpha^k) = \sum_i \alpha^i \otimes \alpha^{k-i}$. Thus $\Delta_{ij}$ takes $\alpha^{i+j}$ to $\alpha^i \otimes \alpha^j$, so if $x_i$ is the generator of $H_{in}(J(S^n); \mathbb{Z})$ dual to $\alpha^i$, then $x_i x_j = x_{i+j}$. This says that $H_*(J(S^n); \mathbb{Z})$ is the polynomial ring $\mathbb{Z}[x]$.
>
> We showed this in Example 3C.7 using the cell structure of $J(S^n)$, but the present proof deduces it purely algebraically from the cup product structure.

Now we wish to show that the relation between $H_*(X; R)$ and $H^*(X; R)$ is perfectly symmetric: They are dual Hopf algebras. This is a purely algebraic fact:

> [!proposition] Proposition 3C.10
> Let $A$ be a Hopf algebra over $R$ that is a finitely generated free $R$-module in each dimension. Then the product $\pi: A \otimes A \to A$ and coproduct $\Delta: A \to A \otimes A$ have duals $\pi^*: A^* \to A^* \otimes A^*$ and $\Delta^*: A^* \otimes A^* \to A^*$ that give $A^*$ the structure of a Hopf algebra.

> [!proof]
> This will be apparent if we reinterpret the Hopf algebra structure on $A$ formally as a pair of graded $R$-module homomorphisms $\pi: A \otimes A \to A$ and $\Delta: A \to A \otimes A$ together with an element $1 \in A_0$ satisfying:
>
> (1) The two compositions $A \xrightarrow{i_\ell} A \otimes A \xrightarrow{\pi} A$ and $A \xrightarrow{i_r} A \otimes A \xrightarrow{\pi} A$ are the identity, where $i_\ell(a) = a \otimes 1$ and $i_r(a) = 1 \otimes a$. This says that $1$ is a two-sided identity for the multiplication in $A$.
>
> (2) The two compositions $A \xrightarrow{\Delta} A \otimes A \xrightarrow{p_\ell} A$ and $A \xrightarrow{\Delta} A \otimes A \xrightarrow{p_r} A$ are the identity, where $p_\ell(a \otimes 1) = a = p_r(1 \otimes a)$, $p_\ell(a \otimes b) = 0$ if $|b| > 0$, and $p_r(a \otimes b) = 0$ if $|a| > 0$. This is just the coproduct formula $\Delta(a) = a \otimes 1 + 1 \otimes a + \sum_i a'_i \otimes a''_i$.
>
> (3) The diagram at the right commutes, with $\tau(a \otimes b \otimes c \otimes d) = (-1)^{|b||c|}a \otimes c \otimes b \otimes d$.

> [!figure]- 🔴 Figure needed: Commutative diagram for Hopf algebra condition
> Source: p.290, Proposition 3C.10 proof
> Content: Diagram showing the condition that $\Delta$ is an algebra homomorphism
> Action: Screenshot or manual reconstruction needed.

> This is the condition that $\Delta$ is an algebra homomorphism since if we follow an element $a \otimes b$ across the top of the diagram we get $\Delta(ab)$, while the lower route gives first $\Delta(a) \otimes \Delta(b) = \left(\sum_i a'_i \otimes a''_i\right) \otimes \left(\sum_j b'_j \otimes b''_j\right)$, then after applying $\tau$ and $\pi \otimes \pi$ this becomes $\sum_{i,j}(-1)^{|a''_i||b'_j|}a'_i b'_j \otimes a''_i b''_j = \left(\sum_i a'_i \otimes a''_i\right)\left(\sum_j b'_j \otimes b''_j\right)$, which is $\Delta(a)\Delta(b)$.
>
> Condition (1) for $A$ dualizes to (2) for $A^*$, and similarly (2) for $A$ dualizes to (1) for $A^*$. Condition (3) for $A$ dualizes to (3) for $A^*$.
>
> $\sqcup\sqcap$

> [!example] Example 3C.11
> Let us compute the dual of a polynomial algebra $R[x]$. Suppose first that $x$ has even dimension. Then $\Delta(x^n) = (x \otimes 1 + 1 \otimes x)^n = \sum_i \binom{n}{i} x^i \otimes x^{n-i}$, so if $\alpha_i$ is dual to $x^i$, the term $\binom{n}{i} x^i \otimes x^{n-i}$ in $\Delta(x^n)$ gives the product relation $\alpha_i \alpha_{n-i} = \binom{n}{i} \alpha_n$. This is the rule for multiplication in a divided polynomial algebra, so the dual of $R[x]$ is $\Gamma_R[\alpha]$ if the dimension of $x$ is even. This also holds if $2 = 0$ in $R$, since the even-dimensionality of $x$ was used only to deduce that $R[x] \otimes R[x]$ is strictly commutative.
>
> In case $x$ is odd-dimensional, then as we saw in Example 3C.1, if we set $y = x^2$, we have $\Delta(y^n) = (y \otimes 1 + 1 \otimes y)^n = \sum_i \binom{n}{i} y^i \otimes y^{n-i}$ and $\Delta(xy^n) = \Delta(x)\Delta(y^n) = \sum_i \binom{n}{i} xy^i \otimes y^{n-i} + \sum_i \binom{n}{i} y^i \otimes xy^{n-i}$. These formulas for $\Delta$ say that the dual of $R[x]$ is $\Lambda_R[\alpha] \otimes \Gamma_R[\beta]$ where $\alpha$ is dual to $x$ and $\beta$ is dual to $y$.
>
> This algebra allows us to deduce the cup product structure on $H^*(J(S^n); R)$ from the geometric calculation $H_*(J(S^n); R) \approx R[x]$ in Example 3C.7. As another application, recall from earlier in this section that $\mathbb{RP}^\infty$ and $\mathbb{CP}^\infty$ are H–spaces, so from their cup product structures we can conclude that the Pontryagin rings $H_*(\mathbb{RP}^\infty; \mathbb{Z}_2)$ and $H_*(\mathbb{CP}^\infty; \mathbb{Z})$ are divided polynomial algebras.
>
> In these examples the Hopf algebra is generated as an algebra by primitive elements, so the product determines the coproduct and hence the dual algebra. This is not true in general, however. For example, we have seen that the Hopf algebra $\Gamma_{\mathbb{Z}_p}[\alpha]$ is isomorphic as an algebra to $\bigotimes_{i \geq 0} \mathbb{Z}_p[\alpha^{p^i}]/(\alpha^{p^{p^i}})$, but if we regard the latter tensor product as the tensor product of the Hopf algebras $\mathbb{Z}_p[\alpha^{p^i}]/(\alpha^{p^{p^i}})$ then the elements $\alpha^{p^i}$ are primitive, though they are not primitive in $\Gamma_{\mathbb{Z}_p}[\alpha]$ for $i > 0$. In fact, the Hopf algebra $\bigotimes_{i \geq 0} \mathbb{Z}_p[\alpha^{p^i}]/(\alpha^{p^{p^i}})$ is its own dual, according to one of the exercises below, but the dual of $\Gamma_{\mathbb{Z}_p}[\alpha]$ is $\mathbb{Z}_p[\alpha]$.


> [!exercise] Exercise 1
> Suppose that $X$ is a CW complex with basepoint $e \in X$ a 0-cell. Show that $X$ is an H–space if there is a map $\mu: X \times X \to X$ such that the maps $X \to X$, $x \mapsto \mu(x, e)$ and $x \mapsto \mu(e, x)$, are homotopic to the identity. [Sometimes this is taken as the definition of an H–space, rather than the more restrictive condition in the definition we have given.] With the same hypotheses, show also that $\mu$ can be homotoped so that $e$ is a strict two-sided identity.

> [!exercise] Exercise 2
> Show that a retract of an H–space is an H–space if it contains the identity element.

> [!exercise] Exercise 3
> Show that in a homotopy-associative H–space whose set of path-components is a group with respect to the multiplication induced by the H–space structure, all the path-components must be homotopy equivalent. [Homotopy-associative means associative up to homotopy.]

> [!exercise] Exercise 4
> Show that an H–space or topological group structure on a path-connected, locally path-connected space can be lifted to such a structure on its universal cover. [For the group $SO(n)$ considered in the next section, the universal cover for $n > 2$ is a 2-sheeted cover, a group called $Spin(n)$.]

> [!exercise] Exercise 5
> Show that if $(X, e)$ is an H–space then $\pi_1(X, e)$ is abelian. [Compare the usual composition $fg$ of loops with the product $\mu(f(t), g(t))$ coming from the H–space multiplication $\mu$.]

> [!exercise] Exercise 6
> Show that $S^n$ is an H–space iff the attaching map of the $2n$-cell of $J_2(S^n)$ is homotopically trivial.

> [!exercise] Exercise 7
> What are the primitive elements of the Hopf algebra $\mathbb{Z}_p[x]$ for $p$ prime?

> [!exercise] Exercise 8
> Show that the tensor product of two Hopf algebras is a Hopf algebra.

> [!exercise] Exercise 9
> Apply the theorems of Hopf and Borel to show that for an H–space $X$ that is a connected finite CW complex with $\tilde{H}^*(X; \mathbb{Z}) \neq 0$, the Euler characteristic $\chi(X)$ is $0$.

> [!exercise] Exercise 10
> Let $X$ be a path-connected H–space with $H^*(X; R)$ free and finitely generated in each dimension. For maps $f, g: X \to X$, the product $fg: X \to X$ is defined by $(fg)(x) = f(x)g(x)$, using the H–space product.
>
> (a) Show that $(fg)^*(\alpha) = f^*(\alpha) + g^*(\alpha)$ for primitive elements $\alpha \in H^*(X; R)$.
>
> (b) Deduce that the $k$th power map $x \mapsto x^k$ induces the map $\alpha \mapsto k\alpha$ on primitive elements $\alpha$. In particular the quaternionic $k$th power map $S^3 \to S^3$ has degree $k$.
>
> (c) Show that every polynomial $a_nx^{b_n} + \cdots + a_1x^{b_1} + a_0$ of nonzero degree with coefficients in $\mathbb{H}$ has a root in $\mathbb{H}$. [See Theorem 1.8.]

> [!exercise] Exercise 11
> If $T^n$ is the $n$-dimensional torus, the product of $n$ circles, show that the Pontryagin ring $H_*(T^n; \mathbb{Z})$ is the exterior algebra $\Lambda_{\mathbb{Z}}[x_1, \ldots, x_n]$ with $|x_i| = 1$.
12. Compute the Pontryagin product structure in $H_*(L; \mathbb{Z}_p)$ where $L$ is an infinite-dimensional lens space $S^\infty/\mathbb{Z}_p$, for $p$ an odd prime, using the coproduct in $H^*(L; \mathbb{Z}_p)$.

13. Verify that the Hopf algebras $\Lambda_R[\alpha]$ and $\mathbb{Z}_p[\alpha]/(\alpha^p)$ are self-dual.

14. Show that the coproduct in the Hopf algebra $H^*(X; R)$ dual to $H_*(X; R)$ is induced by the diagonal map $X \to X \times X$, $x \mapsto (x, x)$.

15. Suppose that $X$ is a path-connected H–space such that $H_*(X; \mathbb{Z})$ is free and finitely generated in each dimension, and $H^*(X; \mathbb{Q})$ is a polynomial ring $\mathbb{Q}[\alpha]$. Show that the Pontryagin ring $H_*(X; \mathbb{Z})$ is commutative and associative, with a structure uniquely determined by the ring $H^*(X; \mathbb{Z})$.

16. Classify algebraically the Hopf algebras $A$ over $\mathbb{Z}$ such that $A_n$ is free for each $n$ and $A \otimes \mathbb{Q} \approx \mathbb{Q}[\alpha]$. In particular, determine which Hopf algebras $A \otimes \mathbb{Z}_p$ arise from such $A$'s.

# 3.D The Cohomology of $SO\left(n\right)$
After the general discussion of homological and cohomological properties of H–spaces in the preceding section, we turn now to a family of quite interesting and subtle examples, the orthogonal groups $O(n)$. We will compute their homology and cohomology by constructing very nice CW structures on them, and the results illustrate the general structure theorems of the last section quite well. After dealing with the orthogonal groups we then describe the straightforward generalization to Stiefel manifolds, which are also fairly basic objects in algebraic and geometric topology.

The orthogonal group $O(n)$ can be defined as the group of isometries of $\mathbb{R}^n$ fixing the origin. Equivalently, this is the group of $n \times n$ matrices $A$ with entries in $\mathbb{R}$ such that $AA^t = I$, where $A^t$ is the transpose of $A$. From this viewpoint, $O(n)$ is topologized as a subspace of $\mathbb{R}^{n^2}$, with coordinates the $n^2$ entries of an $n \times n$ matrix. Since the columns of a matrix in $O(n)$ are unit vectors, $O(n)$ can also be regarded as a subspace of the product of $n$ copies of $S^{n-1}$. It is a closed subspace since the conditions that columns be orthogonal are defined by polynomial equations. Hence $O(n)$ is compact. The map $O(n) \times O(n) \to O(n)$ given by matrix multiplication is continuous since it is defined by polynomials. The inversion map $A \mapsto A^{-1} = A^t$ is clearly continuous, so $O(n)$ is a topological group, and in particular an H–space.

The determinant map $O(n) \to \{\pm 1\}$ is a surjective homomorphism, so its kernel $SO(n)$, the 'special orthogonal group', is a subgroup of index two. The two cosets $SO(n)$ and $O(n) - SO(n)$ are homeomorphic to each other since for fixed $B \in O(n)$ of determinant $-1$, the maps $A \mapsto AB$ and $A \mapsto AB^{-1}$ are inverse homeomorphisms between these two cosets. The subgroup $SO(n)$ is a union of components of $O(n)$ since the image of the map $O(n) \to \{\pm 1\}$ is discrete. In fact, $SO(n)$ is path-connected since by linear algebra, each $A \in SO(n)$ is a rotation, a composition of rotations in a family of orthogonal 2 dimensional subspaces of $\mathbb{R}^n$, with the identity map on the subspace orthogonal to all these planes, and such a rotation can obviously be joined to the identity by a path of rotations of the same planes through decreasing angles. Another reason why $SO(n)$ is connected is that it has a CW structure with a single 0 cell, as we show in Proposition 3D.1. An exercise at the end of the section is to show that a topological group with a finite-dimensional CW structure is an orientable manifold, so $SO(n)$ is a closed orientable manifold. From the CW structure it follows that its dimension is $n(n - 1)/2$. These facts can also be proved using fiber bundles.

The group $O(n)$ is a subgroup of $GL_n(\mathbb{R})$, the 'general linear group' of all invertible $n \times n$ matrices with entries in $\mathbb{R}$, discussed near the beginning of §3.C. The Gram–Schmidt orthogonalization process applied to the columns of matrices in $GL_n(\mathbb{R})$ provides a retraction $r : GL_n(\mathbb{R}) \to O(n)$, continuity of $r$ being evident from the explicit formulas for the Gram–Schmidt process. By inserting appropriate scalar factors into these formulas it is easy to see that $O(n)$ is in fact a deformation retract of $GL_n(\mathbb{R})$. Using a bit more linear algebra, namely the polar decomposition, it is possible to show that $GL_n(\mathbb{R})$ is actually homeomorphic to $O(n) \times \mathbb{R}^k$ for $k = n(n + 1)/2$.

The topological structure of $SO(n)$ for small values of $n$ can be described in terms of more familiar spaces:

- $SO(1)$ is a point.
- $SO(2)$, the rotations of $\mathbb{R}^2$, is both homeomorphic and isomorphic as a group to $S^1$, thought of as the unit complex numbers.
- $SO(3)$ is homeomorphic to $\mathbb{RP}^3$. To see this, let $\phi : D^3 \to SO(3)$ send a nonzero vector $x$ to the rotation through angle $|x|\pi$ about the axis formed by the line through the origin in the direction of $x$. An orientation convention such as the 'right-hand rule' is needed to make this unambiguous. By continuity, $\phi$ then sends $0$ to the identity. Antipodal points of $S^2 = \partial D^3$ are sent to the same rotation through angle $\pi$, so $\phi$ induces a map $\bar{\phi} : \mathbb{RP}^3 \to SO(3)$, regarding $\mathbb{RP}^3$ as $D^3$ with antipodal boundary points identified. The map $\bar{\phi}$ is clearly injective since the axis of a nontrivial rotation is uniquely determined as its fixed point set, and $\bar{\phi}$ is surjective since by easy linear algebra each nonidentity element of $SO(3)$ is a rotation about some axis. It follows that $\bar{\phi}$ is a homeomorphism $\mathbb{RP}^3 \approx SO(3)$.
- $SO(4)$ is homeomorphic to $S^3 \times SO(3)$. Identifying $\mathbb{R}^4$ with the quaternions $\mathbb{H}$ and $S^3$ with the group of unit quaternions, the quaternion multiplication $v \mapsto vw$ for fixed $w \in S^3$ defines an isometry $\rho_w \in O(4)$ since $|vw| = |v||w| = |v|$ if $|w| = 1$. Points of $O(4)$ are 4-tuples $(v_1, \cdots, v_4)$ of orthonormal vectors $v_i \in \mathbb{H} = \mathbb{R}^4$, and we view $O(3)$ as the subspace with $v_1 = 1$. A homeomorphism $S^3 \times O(3) \to O(4)$ is defined by sending $(v, (1, v_2, v_3, v_4))$ to $(v, v_2v, v_3v, v_4v) = \rho_v(1, v_2, v_3, v_4)$, with inverse $(v, v_2, v_3, v_4) \mapsto (v, (1, v_2v^{-1}, v_3v^{-1}, v_4v^{-1})) = (v, \rho_{v^{-1}}(v, v_2, v_3, v_4))$. Restricting to identity components, we obtain a homeomorphism $S^3 \times SO(3) \approx SO(4)$. This is not a group isomorphism, however. It can be shown, though we will not digress to do so here, that the homomorphism $\psi : S^3 \times S^3 \to SO(4)$ sending a pair $(u, v)$ of unit quaternions to the isometry $w \mapsto uwv^{-1}$ of $\mathbb{H}$ is surjective with kernel $\mathbb{Z}_2 = \{\pm(1, 1)\}$, and that $\psi$ is a covering space projection, representing $S^3 \times S^3$ as a 2-sheeted cover of $SO(4)$, the universal cover. Restricting $\psi$ to the diagonal $S^3 = \{(u, u)\} \subset S^3 \times S^3$ gives the universal cover $S^3 \to SO(3)$, so $SO(3)$ is isomorphic to the quotient group of $S^3$ by the normal subgroup $\{\pm 1\}$.

Using octonions one can construct in the same way a homeomorphism $SO(8) \approx S^7 \times SO(7)$. But in all other cases $SO(n)$ is only a 'twisted product' of $SO(n - 1)$ and $S^{n-1}$; see Example 4.55 and the discussion following Corollary 4D.3.

## Cell Structure

Our first task is to construct a CW structure on $SO(n)$. This will come with a very nice cellular map $\rho : \mathbb{RP}^{n-1} \times \mathbb{RP}^{n-2} \times \cdots \times \mathbb{RP}^1 \to SO(n)$. To simplify notation we will write $P^i$ for $\mathbb{RP}^i$.

To each nonzero vector $v \in \mathbb{R}^n$ we can associate the reflection $r(v) \in O(n)$ across the hyperplane consisting of all vectors orthogonal to $v$. Since $r(v)$ is a reflection, it has determinant $-1$, so to get an element of $SO(n)$ we consider the composition $\rho(v) = r(v)r(e_1)$ where $e_1$ is the first standard basis vector $(1, 0, \cdots, 0)$. Since $\rho(v)$ depends only on the line spanned by $v$, $\rho$ defines a map $P^{n-1} \to SO(n)$. This map is injective since it is the composition of $v \mapsto r(v)$, which is obviously an injection of $P^{n-1}$ into $O(n) - SO(n)$, with the homeomorphism $O(n) - SO(n) \to SO(n)$ given by right-multiplication by $r(e_1)$. Since $\rho$ is injective and $P^{n-1}$ is compact Hausdorff, we may think of $\rho$ as embedding $P^{n-1}$ as a subspace of $SO(n)$.

More generally, for a sequence $I = (i_1, \cdots, i_m)$ with each $i_j < n$, we define a map $\rho : P^I = P^{i_1} \times \cdots \times P^{i_m} \to SO(n)$ by letting $\rho(v_1, \cdots, v_m)$ be the composition $\rho(v_1) \cdots \rho(v_m)$. If $\phi_i : D^i \to P^i$ is the standard characteristic map for the $i$-cell of $P^i$, restricting to the 2-sheeted covering projection $\partial D^i \to P^{i-1}$, then the product $\phi_I : D^I \to P^I$ of the appropriate $\phi_{i_j}$'s is a characteristic map for the top-dimensional cell of $P^I$. We will be especially interested in the sequences $I = (i_1, \cdots, i_m)$ satisfying $n > i_1 > \cdots > i_m > 0$. These sequences will be called admissible, as will the sequence consisting of a single 0.

> [!proposition] Proposition 3D.1
> The maps $\rho\phi_I : D^I \to SO(n)$, for $I$ ranging over all admissible sequences, are the characteristic maps of a CW structure on $SO(n)$ for which the map $\rho : P^{n-1} \times P^{n-2} \times \cdots \times P^1 \to SO(n)$ is cellular.
>
> In particular, there is a single 0-cell $e^0 = \{1_n\}$, so $SO(n)$ is path-connected. The other cells $e_I = e_{i_1} \cdots e_{i_m}$ are products, via the group operation in $SO(n)$, of the cells $e_i \subset P^{n-1} \subset SO(n)$.

> [!proof]
> According to Proposition A.2 in the Appendix, there are three things to show in order to obtain the CW structure:
>
> (1) For each decreasing sequence $I$, $\rho\phi_I$ is a homeomorphism from the interior of $D^I$ onto its image.
>
> (2) The resulting image cells $e_I$ are all disjoint and cover $SO(n)$.
>
> (3) For each $e_I$, $\rho\phi_I(\partial D^I)$ is contained in a union of cells of lower dimension than $e_I$.
>
> To begin the verification of these properties, define $p : SO(n) \to S^{n-1}$ by evaluation at the vector $e_n = (0, \cdots, 0, 1)$, $p(\alpha) = \alpha(e_n)$. Isometries in $P^{n-2} \subset P^{n-1} \subset SO(n)$ fix $e_n$, so $p(P^{n-2}) = \{e_n\}$. We claim that $p$ is a homeomorphism from $P^{n-1} - P^{n-2}$ onto $S^{n-1} - \{e_n\}$. This can be seen as follows. Thinking of a point in $P^{n-1}$ as a vector $v$, the map $p$ takes this to $\rho(v)(e_n) = r(v)r(e_1)(e_n)$, which equals $r(v)(e_n)$ since $e_n$ is in the hyperplane orthogonal to $e_1$.

> [!figure]- 🔴 Figure needed: Map from projective space to sphere
> Source: Section 3.D, near Proposition 3D.1
> Content: Diagram showing how the map $p$ stretches the lower half of each meridian circle in $S^{n-1}$ onto the whole meridian circle, doubling the angle up from the south pole
> Action: Screenshot or manual reconstruction needed.

> [!proof]
> From the picture at the right it is then clear that $p$ simply stretches the lower half of each meridian circle in $S^{n-1}$ onto the whole meridian circle, doubling the angle up from the south pole, so $P^{n-1} - P^{n-2}$, represented by vectors whose last coordinate is negative, is taken homeomorphically onto $S^{n-1} - \{e_n\}$.
>
> The next statement is that the map
> $$h : (P^{n-1} \times SO(n - 1), P^{n-2} \times SO(n - 1)) \to (SO(n), SO(n - 1))$$
> $$h(v, \alpha) = \rho(v)\alpha$$
> is a homeomorphism from $(P^{n-1} - P^{n-2}) \times SO(n - 1)$ onto $SO(n) - SO(n - 1)$. Here we view $SO(n - 1)$ as the subgroup of $SO(n)$ fixing the vector $e_n$. To construct an inverse to this homeomorphism, let $\beta \in SO(n) - SO(n - 1)$ be given. Then $\beta(e_n) \neq e_n$ so by the preceding paragraph there is a unique $v_\beta \in P^{n-1} - P^{n-2}$ with $\rho(v_\beta)(e_n) = \beta(e_n)$, and $v_\beta$ depends continuously on $\beta$ since $\beta(e_n)$ does. The composition $\alpha_\beta = \rho(v_\beta)^{-1}\beta$ then fixes $e_n$, hence lies in $SO(n - 1)$. Since $\rho(v_\beta)\alpha_\beta = \beta$, the map $\beta \mapsto (v_\beta, \alpha_\beta)$ is an inverse to $h$ on $SO(n) - SO(n - 1)$.
>
> Statements (1) and (2) can now be proved by induction on $n$. The map $\rho$ takes $P^{n-2}$ to $SO(n - 1)$, so we may assume inductively that the maps $\rho\phi_I$ for $I$ ranging over admissible sequences with first term $i_1 < n - 1$ are the characteristic maps for a CW structure on $SO(n - 1)$, with cells the corresponding products $e_I$. The admissible sequences $I$ with $i_1 = n - 1$ then give disjoint cells $e_I$ covering $SO(n) - SO(n - 1)$ by what was shown in the previous paragraph. So (1) and (2) hold for $SO(n)$.
>
> To prove (3) it suffices to show there is an inclusion $P^iP^i \subset P^iP^{i-1}$ in $SO(n)$ since for an admissible sequence $I$, the map $\rho : P^I \to SO(n)$ takes the boundary of the top-dimensional cell of $P^I$ to the image of products $P^J$ with $J$ obtained from $I$ by decreasing one term $i_j$ by 1, yielding a sequence which is admissible except perhaps for having two successive terms equal.
>
> As a preliminary to showing that $P^iP^i \subset P^iP^{i-1}$, observe that for $\alpha \in O(n)$ we have $r(\alpha(v)) = \alpha r(v)\alpha^{-1}$. Hence $\rho(v)\rho(w) = r(v)r(e_1)r(w)r(e_1) = r(v)r(w')$ where $w' = r(e_1)w$. Thus to show $P^iP^i \subset P^iP^{i-1}$ it suffices to find for each pair $v, w \in \mathbb{R}^{i+1}$ a pair $x \in \mathbb{R}^{i+1}$, $y \in \mathbb{R}^i$ with $r(v)r(w) = r(x)r(y)$.
>
> Let $V \subset \mathbb{R}^{i+1}$ be a 2-dimensional subspace containing $v$ and $w$. Since $V \cap \mathbb{R}^i$ is at least 1-dimensional, we can choose a unit vector $y \in V \cap \mathbb{R}^i$. Let $\alpha \in O(i + 1)$ take $V$ to $\mathbb{R}^2$ and $y$ to $e_1$. Then the conjugate $\alpha r(v)r(w)\alpha^{-1} = r(\alpha(v))r(\alpha(w))$ lies in $SO(2)$, hence has the form $\rho(z) = r(z)r(e_1)$ for some $z \in \mathbb{R}^2$ by statement (2) for $n = 2$. Therefore
> $$r(v)r(w) = \alpha^{-1}r(z)r(e_1)\alpha = r(\alpha^{-1}(z))r(\alpha^{-1}(e_1)) = r(x)r(y)$$
> for $x = \alpha^{-1}(z) \in \mathbb{R}^{i+1}$ and $y \in \mathbb{R}^i$.
>
> It remains to show that the map $\rho : P^{n-1} \times P^{n-2} \times \cdots \times P^1 \to SO(n)$ is cellular. This follows from the inclusions $P^iP^i \subset P^iP^{i-1}$ derived above, together with another family of inclusions $P^iP^j \subset P^jP^i$ for $i < j$. To prove the latter we have the formulas
> $$\rho(v)\rho(w) = r(v)r(w') \quad \text{where } w' = r(e_1)w, \text{ as earlier}$$
> $$= r(v)r(w')r(v)r(v)$$
> $$= r(r(v)w')r(v) \quad \text{from } r(\alpha(v)) = \alpha r(v)\alpha^{-1}$$
> $$= r(r(v)r(e_1)w)r(v) = r(\rho(v)w)r(v)$$
> $$= \rho(\rho(v)w)\rho(v') \quad \text{where } v' = r(e_1)v, \text{ hence } v = r(e_1)v'$$
>
> In particular, taking $v \in \mathbb{R}^{i+1}$ and $w \in \mathbb{R}^{j+1}$ with $i < j$, we have $\rho(v)w \in \mathbb{R}^{j+1}$, and the product $\rho(v)\rho(w) \in P^iP^j$ equals the product $\rho(\rho(v)w)\rho(v') \in P^jP^i$.

## Mod 2 Homology and Cohomology

Each cell of $SO(n)$ is the homeomorphic image of a cell in $P^{n-1} \times P^{n-2} \times \cdots \times P^1$, so the cellular chain map induced by $\rho : P^{n-1} \times P^{n-2} \times \cdots \times P^1 \to SO(n)$ is surjective. It follows that with $\mathbb{Z}_2$ coefficients the cellular boundary maps for $SO(n)$ are all trivial since this is true in $P^i$ and hence in $P^{n-1} \times P^{n-2} \times \cdots \times P^1$ by Proposition 3B.1. Thus $H_*(SO(n); \mathbb{Z}_2)$ has a $\mathbb{Z}_2$ summand for each cell of $SO(n)$. One can rephrase this as saying that there are isomorphisms $H_i(SO(n); \mathbb{Z}_2) \approx H_i(S^{n-1} \times S^{n-2} \times \cdots \times S^1; \mathbb{Z}_2)$ for all $i$ since this product of spheres also has cells in one-to-one correspondence

as saying that there are isomorphisms $H_i(SO(n); \mathbb{Z}_2) \approx H_i(S^{n-1} \times S^{n-2} \times \cdots \times S^1; \mathbb{Z}_2)$ for all $i$ since this product of spheres also has cells in one-to-one correspondence with admissible sequences. The full structure of the $\mathbb{Z}_2$ homology and cohomology rings is given by:

> [!theorem] Theorem 3D.2
> (a) $H^*(SO(n); \mathbb{Z}_2) \approx \bigotimes_{i \text{ odd}} \mathbb{Z}_2[\beta_i]/(\beta_i^{p_i})$ where $|\beta_i| = i$ and $p_i$ is the smallest power of 2 such that $|\beta_i^{p_i}| \geq n$.
> 
> (b) The Pontryagin ring $H_*(SO(n); \mathbb{Z}_2)$ is the exterior algebra $\Lambda_{\mathbb{Z}_2}[e_1, \cdots, e_{n-1}]$.
> 
> Here $e_i$ denotes the cellular homology class of the cell $e_i \subset P^{n-1} \subset SO(n)$, and $\beta_i$ is the dual class to $e_i$, represented by the cellular cochain assigning the value 1 to the cell $e_i$ and 0 to all other $i$ cells.

> [!proof]
> As we noted above, $\rho$ induces a surjection on cellular chains. Since the cellular boundary maps with $\mathbb{Z}_2$ coefficients are trivial for both $P^{n-1} \times \cdots \times P^1$ and $SO(n)$, it follows that $\rho^*$ is surjective on $H^*(-; \mathbb{Z}_2)$ and $\rho_*$ is injective on $H_*(-; \mathbb{Z}_2)$. We know that $H^*(P^{n-1} \times \cdots \times P^1; \mathbb{Z}_2)$ is the polynomial ring $\mathbb{Z}_2[\alpha_1, \cdots, \alpha_{n-1}]$ truncated by the relations $\alpha_{i+1}^{i+1} = 0$. For $\beta_i \in H^i(SO(n); \mathbb{Z}_2)$ the dual class to $e_i$, we have $\rho^*(\beta_i) = \sum_j \alpha_j^i$, the class assigning 1 to each $i$ cell in a factor $P^j$ of $P^{n-1} \times \cdots \times P^1$ and 0 to all other $i$ cells, which are products of lower-dimensional cells and hence map to cells in $SO(n)$ disjoint from $e_i$.
> 
> First we will show that the monomials $\beta_I = \beta_{i_1} \cdots \beta_{i_m}$ corresponding to admissible sequences $I$ are linearly independent in $H^*(SO(n); \mathbb{Z}_2)$, hence are a vector space basis. Since $\rho^*$ is injective, we may identify each $\beta_i$ with its image $\sum_j \alpha_j^i$ in the truncated polynomial ring $\mathbb{Z}_2[\alpha_1, \cdots, \alpha_{n-1}]/(\alpha_1^2, \cdots, \alpha_{n-1}^n)$.
> 
> Suppose we have a linear relation $\sum_I b_I\beta_I = 0$ with $b_I \in \mathbb{Z}_2$ and $I$ ranging over the admissible sequences. Since each $\beta_I$ is a product of distinct $\beta_i$'s, we can write the relation in the form $x\beta_1 + y = 0$ where neither $x$ nor $y$ has $\beta_1$ as a factor. Since $\alpha_1$ occurs only in the term $\beta_1$ of $x\beta_1 + y$, where it has exponent 1, we have $x\beta_1 + y = x\alpha_1 + z$ where neither $x$ nor $z$ involves $\alpha_1$. The relation $x\alpha_1 + z = 0$ in $\mathbb{Z}_2[\alpha_1, \cdots, \alpha_{n-1}]/(\alpha_1^2, \cdots, \alpha_{n-1}^n)$ then implies $x = 0$. Thus we may assume the original relation does not involve $\beta_1$.
> 
> Now we repeat the argument for $\beta_2$. Write the relation in the form $x\beta_2 + y = 0$ where neither $x$ nor $y$ involves $\beta_2$ or $\beta_1$. The variable $\alpha_2$ now occurs only in the term $\beta_2$ of $x\beta_2 + y$, where it has exponent 2, so we have $x\beta_2 + y = x\alpha_2^2 + z$ where $x$ and $z$ do not involve $\alpha_1$ or $\alpha_2$. Then $x\alpha_2^2 + z = 0$ implies $x = 0$ and we have a relation involving neither $\beta_1$ nor $\beta_2$. Continuing inductively, we eventually deduce that all coefficients $b_I$ in the original relation $\sum_I b_I\beta_I = 0$ must be zero.
> 
> Observe now that $\beta_i^2 = \beta_{2i}$ if $2i < n$ and $\beta_i^2 = 0$ if $2i \geq n$, since $(\sum_j \alpha_j^i)^2 = \sum_j \alpha_j^{2i}$. The quotient $Q$ of the algebra $\mathbb{Z}_2[\beta_1, \beta_2, \cdots]$ by the relations $\beta_i^2 = \beta_{2i}$ and $\beta_j = 0$ for $j \geq n$ then maps onto $H^*(SO(n); \mathbb{Z}_2)$. This map $Q \to H^*(SO(n); \mathbb{Z}_2)$ is also injective since the relations defining $Q$ allow every element of $Q$ to be represented as a linear combination of admissible monomials $\beta_I$, and the admissible monomials are linearly independent in $H^*(SO(n); \mathbb{Z}_2)$. The algebra $Q$ can also be described as the tensor product in statement (a) of the theorem since the relations $\beta_i^2 = \beta_{2i}$ allow admissible monomials to be written uniquely as monomials in powers of the $\beta_i$'s with $i$ odd, and the relation $\beta_j = 0$ for $j \geq n$ becomes $\beta_i^{p_i} = \beta_{ip_i}^{p_i} = 0$ where $j = ip_i$ with $i$ odd and $p_i$ a power of 2. For a given $i$, this relation holds iff $ip_i \geq n$, or in other words, iff $|\beta_i^{p_i}| \geq n$. This finishes the proof of (a).
> 
> For part (b), note first that the group multiplication $SO(n) \times SO(n) \to SO(n)$ is cellular in view of the inclusions $P^iP^i \subset P^iP^{i-1}$ and $P^iP^j \subset P^jP^i$ for $i < j$. So we can compute Pontryagin products at the cellular level. We know that there is at least an additive isomorphism $H_*(SO(n); \mathbb{Z}_2) \approx \Lambda_{\mathbb{Z}_2}[e_1, \cdots, e_{n-1}]$ since the products $e_I = e_{i_1} \cdots e_{i_m}$ with $I$ admissible form a basis for $H_*(SO(n); \mathbb{Z}_2)$.
> 
> The inclusion $P^iP^i \subset P^iP^{i-1}$ then implies that the Pontryagin product $(e_i)^2$ is 0. It remains only to see the commutativity relation $e_ie_j = e_je_i$. The inclusion $P^iP^j \subset P^jP^i$ for $i < j$ was obtained from the formula $\rho(v)\rho(w) = \rho(\rho(v)w)\rho(v')$ for $v \in \mathbb{R}^{i+1}$, $w \in \mathbb{R}^{j+1}$, and $v' = r(e_1)v$. The map $f: P^i \times P^j \to P^j \times P^i$, $f(v, w) = (\rho(v)w, v')$, is a homeomorphism since it is the composition of homeomorphisms $(v, w) \mapsto (v, \rho(v)w) \mapsto (v', \rho(v)w) \mapsto (\rho(v)w, v')$. The first of these maps takes $e^i \times e^j$ homeomorphically onto itself since $\rho(v)(e^j) = e^j$ if $i < j$. Obviously the second map also takes $e^i \times e^j$ homeomorphically onto itself, while the third map simply transposes the two factors. Thus $f$ restricts to a homeomorphism from $e^i \times e^j$ onto $e^j \times e^i$, and therefore $e_ie_j = e_je_i$ in $H_*(SO(n); \mathbb{Z}_2)$.

The cup product and Pontryagin product structures in this theorem may seem at first glance to be unrelated, but in fact the relationship is fairly direct. As we saw in the previous section, the dual of a polynomial algebra $\mathbb{Z}_2[x]$ is a divided polynomial algebra $\Gamma_{\mathbb{Z}_2}[\alpha]$, and with $\mathbb{Z}_2$ coefficients the latter is an exterior algebra $\Lambda_{\mathbb{Z}_2}[\alpha_0, \alpha_1, \cdots]$ where $|\alpha_i| = 2^i|x|$. If we truncate the polynomial algebra by a relation $x^{2^n} = 0$, then this just eliminates the generators $\alpha_i$ for $i \geq n$. In view of this, if it were the case that the generators $\beta_i$ for the algebra $H^*(SO(n); \mathbb{Z}_2)$ happened to be primitive, then $H^*(SO(n); \mathbb{Z}_2)$ would be isomorphic as a Hopf algebra to the tensor product of the single-generator Hopf algebras $\mathbb{Z}_2[\beta_i]/(\beta_i^{p_i})$, $i = 1, 3, \cdots$, hence the dual algebra $H_*(SO(n); \mathbb{Z}_2)$ would be the tensor product of the corresponding truncated divided polynomial algebras, in other words an exterior algebra as just explained. This is in fact the structure of $H_*(SO(n); \mathbb{Z}_2)$, so since the Pontryagin product in $H_*(SO(n); \mathbb{Z}_2)$ determines the coproduct in $H^*(SO(n); \mathbb{Z}_2)$ uniquely, it follows that the $\beta_i$'s must indeed be primitive.

It is not difficult to give a direct argument that each $\beta_i$ is primitive. The coproduct $\Delta: H^*(SO(n); \mathbb{Z}_2) \to H^*(SO(n); \mathbb{Z}_2) \otimes H^*(SO(n); \mathbb{Z}_2)$ is induced by the group multiplication $\mu: SO(n) \times SO(n) \to SO(n)$. We need to show that the value of $\Delta(\beta_i)$ on $e_I \otimes e_J$, which we denote $\langle \Delta(\beta_i), e_I \otimes e_J \rangle$, is the same as the value $\langle \beta_i \otimes 1 + 1 \otimes \beta_i, e_I \otimes e_J \rangle$ for all cells $e_I$ and $e_J$ whose dimensions add up to $i$.

Since $\Delta = \mu^*$, we have $\langle \Delta(\beta_i), e_I \otimes e_J \rangle = \langle \beta_i, \mu_*(e_I \otimes e_J) \rangle$. Because $\mu$ is the multiplication map, $\mu(e_I \times e_J)$ is contained in $P^IP^J$, and if we use the relations $P^jP^j \subset P^jP^{j-1}$ and $P^jP^k \subset P^kP^j$ for $j < k$ to rearrange the factors $P^j$ of $P^IP^J$ so that their dimensions are in decreasing order, then the only way we will end up with a term $P^i$ is if we start with $P^IP^J$ equal to $P^iP^0$ or $P^0P^i$. Thus $\langle \beta_i, \mu_*(e_I \otimes e_J) \rangle = 0$ unless $e_I \otimes e_J$ equals $e_i \otimes e_0$ or $e_0 \otimes e_i$. Hence $\Delta(\beta_i)$ contains no other terms besides $\beta_i \otimes 1 + 1 \otimes \beta_i$, and $\beta_i$ is primitive.

### Integer Homology and Cohomology

With $\mathbb{Z}$ coefficients the homology and cohomology of $SO(n)$ turns out to be a good bit more complicated than with $\mathbb{Z}_2$ coefficients. One can see a little of this complexity already for small values of $n$, where the homeomorphisms $SO(3) \approx \mathbb{RP}^3$ and $SO(4) \approx S^3 \times \mathbb{RP}^3$ would allow one to compute the additive structure as a direct sum of a certain number of $\mathbb{Z}$'s and $\mathbb{Z}_2$'s. For larger values of $n$ the additive structure is qualitatively the same:

> [!proposition] Proposition 3D.3
> $H_*(SO(n); \mathbb{Z})$ is a direct sum of $\mathbb{Z}$'s and $\mathbb{Z}_2$'s.

> [!proof]
> We compute the cellular chain complex of $SO(n)$, showing that it splits as a tensor product of simpler complexes. For a cell $e^i \subset P^{n-1} \subset SO(n)$ the cellular boundary $de^i$ is $2e^{i-1}$ for even $i > 0$ and $0$ for odd $i$. To compute the cellular boundary of a cell $e^{i_1} \cdots e^{i_m}$ we can pull it back to a cell $e^{i_1} \times \cdots \times e^{i_m}$ of $P^{n-1} \times \cdots \times P^1$ whose cellular boundary, by Proposition 3B.1, is $\sum_j (-1)^{\sigma_j} e^{i_1} \times \cdots \times de^{i_j} \times \cdots \times e^{i_m}$ where $\sigma_j = i_1 + \cdots + i_{j-1}$. Hence $d(e^{i_1} \cdots e^{i_m}) = \sum_j (-1)^{\sigma_j} e^{i_1} \cdots de^{i_j} \cdots e^{i_m}$, where it is understood that $e^{i_1} \cdots de^{i_j} \cdots e^{i_m}$ is zero if $i_j = i_{j+1} + 1$ since $P^{i_j-1}P^{i_j-1} \subset P^{i_j-1}P^{i_j-2}$, in a lower-dimensional skeleton.
> 
> To split the cellular chain complex $C_*(SO(n))$ as a tensor product of smaller chain complexes, let $C_{2i}$ be the subcomplex of $C_*(SO(n))$ with basis the cells $e^0$, $e^{2i}$, $e^{2i-1}$, and $e^{2i}e^{2i-1}$. This is a subcomplex since $de^{2i-1} = 0$, $de^{2i} = 2e^{2i-1}$, and, in $P^{2i} \times P^{2i-1}$, $d(e^{2i} \times e^{2i-1}) = de^{2i} \times e^{2i-1} + e^{2i} \times de^{2i-1} = 2e^{2i-1} \times e^{2i-1}$, hence $d(e^{2i}e^{2i-1}) = 0$ since $P^{2i-1}P^{2i-1} \subset P^{2i-1}P^{2i-2}$.
> 
> The claim is that there are chain complex isomorphisms:
> $$C_*(SO(2k + 1)) \approx C_2 \otimes C_4 \otimes \cdots \otimes C_{2k}$$
> $$C_*(SO(2k + 2)) \approx C_2 \otimes C_4 \otimes \cdots \otimes C_{2k} \otimes C_{2k+1}$$
> where $C_{2k+1}$ has basis $e^0$ and $e^{2k+1}$. Certainly these isomorphisms hold for the chain groups themselves, so it is only a matter of checking that the boundary maps agree. For the case of $C_*(SO(2k + 1))$ this can be seen by induction on $k$, as the reader can easily verify. Then the case of $C_*(SO(2k + 2))$ reduces to the first case by a similar argument.
> 
> Since $H_*(C_{2i})$ consists of $\mathbb{Z}$'s in dimensions $0$ and $4i - 1$ and a $\mathbb{Z}_2$ in dimension $2i - 1$, while $H_*(C_{2k+1})$ consists of $\mathbb{Z}$'s in dimensions $0$ and $2k + 1$, we conclude from the algebraic Künneth formula that $H_*(SO(n); \mathbb{Z})$ is a direct sum of $\mathbb{Z}$'s and $\mathbb{Z}_2$'s.

Note that the calculation shows that $SO(2k)$ and $SO(2k - 1) \times S^{2k-1}$ have isomorphic homology groups in all dimensions.

In view of the preceding proposition, one can get rather complete information about $H_*(SO(n); \mathbb{Z})$ by considering the natural maps to $H_*(SO(n); \mathbb{Z}_2)$ and to the quotient of $H_*(SO(n); \mathbb{Z})$ by its torsion subgroup. Let us denote this quotient by $H_*^{free}(SO(n); \mathbb{Z})$. The same strategy applies equally well to cohomology, and the universal coefficient theorem gives an isomorphism $H^*_{free}(SO(n); \mathbb{Z}) \approx H_*^{free}(SO(n); \mathbb{Z})$.

The proof of the proposition shows that the additive structure of $H_*^{free}(SO(n); \mathbb{Z})$ is fairly simple:
$$H_*^{free}(SO(2k + 1); \mathbb{Z}) \approx H_*(S^3 \times S^7 \times \cdots \times S^{4k-1})$$
$$H_*^{free}(SO(2k + 2); \mathbb{Z}) \approx H_*(S^3 \times S^7 \times \cdots \times S^{4k-1} \times S^{2k+1})$$

The multiplicative structure is also as simple as it could be:

> [!proposition] Proposition 3D.4
> The Pontryagin ring $H_*^{free}(SO(n); \mathbb{Z})$ is an exterior algebra,
> $$H_*^{free}(SO(2k + 1); \mathbb{Z}) \approx \Lambda_{\mathbb{Z}}[a_3, a_7, \cdots, a_{4k-1}]$$
> where $|a_i| = i$
> $$H_*^{free}(SO(2k + 2); \mathbb{Z}) \approx \Lambda_{\mathbb{Z}}[a_3, a_7, \cdots, a_{4k-1}, a'_{2k+1}]$$
> 
> The generators $a_i$ and $a'_{2k+1}$ are primitive, so the dual Hopf algebra $H^*_{free}(SO(n); \mathbb{Z})$ is an exterior algebra on the dual generators $\alpha_i$ and $\alpha'_{2k+1}$.

> [!proof]
> As in the case of $\mathbb{Z}_2$ coefficients we can work at the level of cellular chains since the multiplication in $SO(n)$ is cellular. Consider first the case $n = 2k + 1$. Let $E_i$ be the cycle $e^{2i}e^{2i-1}$ generating a $\mathbb{Z}$ summand of $H_*(SO(n); \mathbb{Z})$. By what we have shown above, the products $E_{i_1} \cdots E_{i_m}$ with $i_1 > \cdots > i_m$ form an additive basis for $H_*^{free}(SO(n); \mathbb{Z})$, so we need only verify that the multiplication is as in an exterior algebra on the classes $E_i$.
> 
> The map $f$ in the proof of Theorem 3D.2 gives a homeomorphism $e^i \times e^j \approx e^j \times e^i$ if $i < j$, and this homeomorphism has local degree $(-1)^{ij+1}$ since it is the composition $(v, w) \mapsto (v, \rho(v)w) \mapsto (v', \rho(v)w) \mapsto (\rho(v)w, v')$ of homeomorphisms with local degrees $+1$, $-1$, and $(-1)^{ij}$. Applying this four times to commute $E_iE_j = e^{2i}e^{2i-1}e^{2j}e^{2j-1}$ to $E_jE_i = e^{2j}e^{2j-1}e^{2i}e^{2i-1}$, three of the four applications give a sign of $-1$ and the fourth gives a $+1$, so we conclude that $E_iE_j = -E_jE_i$ if $i < j$. When $i = j$ we have $(E_i)^2 = 0$ since $e^{2i}e^{2i-1}e^{2i}e^{2i-1} = e^{2i}e^{2i}e^{2i-1}e^{2i-1}$, which lies in a lower-dimensional skeleton because of the relation $P^{2i}P^{2i} \subset P^{2i}P^{2i-1}$.
> 
> Thus we have shown that $H_*(SO(2k + 1); \mathbb{Z})$ contains $\Lambda_{\mathbb{Z}}[E_1, \cdots, E_k]$ as a subalgebra. The same reasoning shows that $H_*(SO(2k + 2); \mathbb{Z})$ contains the subalgebra $\Lambda_{\mathbb{Z}}[E_1, \cdots, E_k, e^{2k+1}]$. These exterior subalgebras account for all the nontorsion in $H_*(SO(n); \mathbb{Z})$, so the product structure in $H_*^{free}(SO(n); \mathbb{Z})$ is as stated.
> 
> Now we show that the generators $E_i$ and $e^{2k+1}$ are primitive in $H_*^{free}(SO(n); \mathbb{Z})$. Looking at the formula for the boundary maps in the cellular chain complex of $SO(n)$, we see that this chain complex is the direct sum of the subcomplexes $C^{(m)}$ with basis the $m$ fold products $e^{i_1} \cdots e^{i_m}$ with $i_1 > \cdots > i_m > 0$. We allow $m = 0$ here, with $C^{(0)}$ having basis the 0 cell of $SO(n)$. The direct sum $C^{(0)} \oplus \cdots \oplus C^{(m)}$ is the cellular chain complex of the subcomplex of $SO(n)$ consisting of cells that are products of $m$ or fewer cells $e^i$. In particular, taking $m = 2$ we have a subcomplex $X \subset SO(n)$ whose homology, mod torsion, consists of the $\mathbb{Z}$ in dimension zero and the $\mathbb{Z}$'s generated by the cells $E_i$, together with the cell $e^{2k+1}$ when $n = 2k + 2$. The inclusion $X \hookrightarrow SO(n)$ induces a commutative diagram:

> [!figure]- 🔴 Figure needed: Commutative diagram for coproduct
> Source: p.301, diagram in proof of Proposition 3D.4
> Content: Commutative diagram showing the inclusion $X \hookrightarrow SO(n)$ and the induced maps on homology with coproducts $\Delta$
> Action: Screenshot or manual reconstruction needed.

> where the lower $\Delta$ is the coproduct in $H_*^{free}(SO(n); \mathbb{Z})$ and the upper $\Delta$ is its analog for $X$, coming from the diagonal map $X \to X \times X$ and the Künneth formula. The classes $E_i$ in the lower left group pull back to elements we label $\tilde{E}_i$ in the upper left group. Since these have odd dimension and $H_*^{free}(X; \mathbb{Z})$ vanishes in even positive dimensions, the images $\Delta(\tilde{E}_i)$ can have no components $a \otimes b$ with both $a$ and $b$ positive-dimensional. The same is therefore true for $\Delta(E_i)$ by commutativity of the diagram, so the classes $E_i$ are primitive. This argument also works for $e^{2k+1}$ when $n = 2k + 2$.
> 
> Since the exterior algebra generators of $H_*^{free}(SO(n); \mathbb{Z})$ are primitive, this algebra splits as a Hopf algebra into a tensor product of single-generator exterior algebras $\Lambda_{\mathbb{Z}}[a_i]$ (and $\Lambda_{\mathbb{Z}}[a'_{2k+1}]$). The dual Hopf algebra $H^*_{free}(SO(n); \mathbb{Z})$ therefore splits as the tensor product of the dual exterior algebras $\Lambda_{\mathbb{Z}}[\alpha_i]$ (and $\Lambda_{\mathbb{Z}}[\alpha'_{2k+1}]$), hence $H^*_{free}(SO(n); \mathbb{Z})$ is also an exterior algebra.

The exact ring structure of $H^*(SO(n); \mathbb{Z})$ can be deduced from these results via Bockstein homomorphisms, as we show in Example 3E.7, though the process is somewhat laborious and the answer not very neat.

### Stiefel Manifolds

Consider the Stiefel manifold $V_{n,k}$, whose points are the orthonormal $k$ frames in $\mathbb{R}^n$, that is, orthonormal $k$ tuples of vectors. Thus $V_{n,k}$ is a subset of the product of $k$ copies of $S^{n-1}$, and it is given the subspace topology. As special cases, $V_{n,n} = O(n)$ and $V_{n,1} = S^{n-1}$. Also, $V_{n,2}$ can be identified with the space of unit tangent vectors to $S^{n-1}$ since a vector $v$ at the point $x \in S^{n-1}$ is tangent to $S^{n-1}$ iff it is orthogonal to $x$. We can also identify $V_{n,n-1}$ with $SO(n)$ since there is a unique way of extending an orthonormal $(n - 1)$ frame to a positively oriented orthonormal $n$ frame.

There is a natural projection $p: O(n) \to V_{n,k}$ sending $\alpha \in O(n)$ to the $k$ frame consisting of the last $k$ columns of $\alpha$, which are the images under $\alpha$ of the last $k$ standard basis vectors in $\mathbb{R}^n$. This projection is onto, and the preimages of points are precisely the cosets $\alpha O(n-k)$, where we embed $O(n-k)$ in $O(n)$ as the orthogonal transformations of the first $n - k$ coordinates of $\mathbb{R}^n$. Thus $V_{n,k}$ can be viewed as the space $O(n)/O(n - k)$ of such cosets, with the quotient topology from $O(n)$. This is the same as the previously defined topology on $V_{n,k}$ since the projection $O(n) \to V_{n,k}$ is a surjection of compact Hausdorff spaces.

When $k < n$ the projection $p: SO(n) \to V_{n,k}$ is surjective, and $V_{n,k}$ can also be viewed as the coset space $SO(n)/SO(n-k)$. We can use this to induce a CW structure on $V_{n,k}$ from the CW structure on $SO(n)$. The cells are the sets of cosets of the form $e^ISO(n - k) = e^{i_1} \cdots e^{i_m}SO(n - k)$ for $n > i_1 > \cdots > i_m \geq n - k$, together with the coset $SO(n - k)$ itself as a 0 cell of $V_{n,k}$. These sets of cosets are unions of cells of $SO(n)$ since $SO(n-k)$ consists of the cells $e^J = e^{j_1} \cdots e^{j_\ell}$ with $n - k > j_1 > \cdots > j_\ell$. This implies that $V_{n,k}$ is the disjoint union of its cells, and the boundary of each cell is contained in cells of lower dimension, so we do have a CW structure.

Since the projection $SO(n) \to V_{n,k}$ is a cellular map, the structure of the cellular chain complex of $V_{n,k}$ can easily be deduced from that of $SO(n)$. For example, the cellular chain complex of $V_{2k+1,2}$ is just the complex $C_{2k}$ defined earlier, while for $V_{2k,2}$ the cellular boundary maps are all trivial. Hence the nonzero homology groups of $V_{n,2}$ are
$$H_i(V_{2k+1,2}; \mathbb{Z}) = \begin{cases} \mathbb{Z} & \text{for } i = 0, 4k - 1 \\ \mathbb{Z}_2 & \text{for } i = 2k - 1 \end{cases}$$
$$H_i(V_{2k,2}; \mathbb{Z}) = \mathbb{Z} \quad \text{for } i = 0, 2k - 2, 2k - 1, 4k - 3$$

Thus $SO(n)$ has the same homology and cohomology groups as the product space $V_{3,2} \times V_{5,2} \times \cdots \times V_{2k+1,2}$ when $n = 2k + 1$, or as $V_{3,2} \times V_{5,2} \times \cdots \times V_{2k+1,2} \times S^{2k+1}$ when $n = 2k + 2$. However, our calculations show that $SO(n)$ is distinguished from these products by its cup product structure with $\mathbb{Z}_2$ coefficients, at least when $n \geq 5$, since $\beta_1^4$ is nonzero in $H^4(SO(n); \mathbb{Z}_2)$ if $n \geq 5$, while for the product spaces the nontrivial element of $H^1(-; \mathbb{Z}_2)$ must lie in the factor $V_{3,2}$, and $H^4(V_{3,2}; \mathbb{Z}_2) = 0$. When $n = 4$ we have $SO(4)$ homeomorphic to $SO(3) \times S^3 = V_{3,2} \times S^3$ as we noted at the beginning of this section. Also $SO(3) = V_{3,2}$ and $SO(2) = S^1$.

> [!exercise] Exercises
> 1. Show that a topological group with a finite-dimensional CW structure is an orientable manifold. [Consider the homeomorphisms $x \mapsto gx$ or $x \mapsto xg$ for fixed $g$ and varying $x$ in the group.]
> 2. Using the CW structure on $SO(n)$, show that $\pi_1SO(n) \approx \mathbb{Z}_2$ for $n \geq 3$. Find a loop representing a generator, and describe how twice this loop is nullhomotopic.
> 3. Compute the Pontryagin ring structure in $H_*(SO(5); \mathbb{Z})$.

# 3.E Bockstein Homomorphisms

Homology and cohomology with coefficients in a field, particularly $\mathbb{Z}_p$ with $p$ prime, often have more structure and are easier to compute than with $\mathbb{Z}$ coefficients. Of course, passing from $\mathbb{Z}$ to $\mathbb{Z}_p$ coefficients can involve a certain loss of information, a blurring of finer distinctions. For example, a $\mathbb{Z}_{p^n}$ in integer homology becomes a pair of $\mathbb{Z}_p$'s in $\mathbb{Z}_p$ homology or cohomology, so the exponent $n$ is lost with $\mathbb{Z}_p$ coefficients. In this section we introduce Bockstein homomorphisms, which in many interesting cases allow one to recover $\mathbb{Z}$ coefficient information from $\mathbb{Z}_p$ coefficients. Bockstein homomorphisms also provide a small piece of extra internal structure to $\mathbb{Z}_p$ homology or cohomology itself, which can be quite useful.

We will concentrate on cohomology in order to have cup products available, but the basic constructions work equally well for homology. If we take a short exact sequence $0 \to G \to H \to K \to 0$ of abelian groups and apply the covariant functor $\text{Hom}(C_n(X), -)$, we obtain
$$0 \longrightarrow C^n(X; G) \longrightarrow C^n(X; H) \longrightarrow C^n(X; K) \longrightarrow 0$$
which is exact since $C_n(X)$ is free. Letting $n$ vary, we have a short exact sequence of chain complexes, so there is an associated long exact sequence
$$\cdots \longrightarrow H^n(X; G) \longrightarrow H^n(X; H) \longrightarrow H^n(X; K) \longrightarrow H^{n+1}(X; G) \longrightarrow \cdots$$
whose 'boundary' map $H^n(X; K) \to H^{n+1}(X; G)$ is called a Bockstein homomorphism.

We shall be interested primarily in the Bockstein $\beta: H^n(X; \mathbb{Z}_m) \to H^{n+1}(X; \mathbb{Z}_m)$ associated to the coefficient sequence $0 \to \mathbb{Z}_m \xrightarrow{m} \mathbb{Z}_{m^2} \to \mathbb{Z}_m \to 0$, especially when $m$ is prime, but for the moment we do not need this assumption. Closely related to $\beta$ is the Bockstein $\tilde{\beta}: H^n(X; \mathbb{Z}_m) \to H^{n+1}(X; \mathbb{Z})$ associated to $0 \to \mathbb{Z} \xrightarrow{m} \mathbb{Z} \to \mathbb{Z}_m \to 0$. From the natural map of the latter short exact sequence onto the former one, we obtain the relationship $\beta = \rho \tilde{\beta}$ where $\rho: H^*(X; \mathbb{Z}) \to H^*(X; \mathbb{Z}_m)$ is the homomorphism induced by the map $\mathbb{Z} \to \mathbb{Z}_m$ reducing coefficients mod $m$. Thus we have a commutative triangle in the following diagram, whose upper row is the exact sequence containing $\tilde{\beta}$.

> [!figure]- 🔴 Figure needed: Commutative triangle diagram for Bockstein
> Source: p.303, diagram showing Bockstein relationships
> Content: Commutative diagram showing the relationship between $\beta$, $\tilde{\beta}$, and $\rho$ in Bockstein homomorphisms
> Action: Screenshot or manual reconstruction needed.

> [!example] Example 3E.1
> Let $X$ be a $K(\mathbb{Z}_m, 1)$, for example $\mathbb{RP}^\infty$ when $m = 2$ or an infinite-dimensional lens space with fundamental group $\mathbb{Z}_m$ for arbitrary $m$. From the homology calculations in Examples 2.42 and 2.43 together with the universal coefficient theorem or cellular cohomology we have $H^n(X; \mathbb{Z}_m) \approx \mathbb{Z}_m$ for all $n$. Let us show that $\beta: H^n(X; \mathbb{Z}_m) \to H^{n+1}(X; \mathbb{Z}_m)$ is an isomorphism for $n$ odd and zero for $n$ even. If $n$ is odd the vertical map $\rho$ in the diagram above is surjective for $X = K(\mathbb{Z}_m, 1)$, as is $\tilde{\beta}$ since the map $m$ is trivial, so $\beta$ is surjective, hence an isomorphism. On the other hand, when $n$ is even the first map $\rho$ in the diagram is surjective, so $\tilde{\beta} = 0$ by exactness, hence $\beta = 0$.

A useful fact about $\beta$ is that it satisfies the derivation property
$$(*) \quad \beta(a \smile b) = \beta(a) \smile b + (-1)^{|a|}a \smile \beta(b)$$
which comes from the corresponding formula for ordinary coboundary. Namely, let $\phi$ and $\psi$ be $\mathbb{Z}_m$ cocycles representing $a$ and $b$, and let $\tilde{\phi}$ and $\tilde{\psi}$ be lifts of these to $\mathbb{Z}_{m^2}$ cochains. Concretely, one can view $\phi$ and $\psi$ as functions on singular simplices with values in $\{0, 1, \cdots, m - 1\}$, and then $\tilde{\phi}$ and $\tilde{\psi}$ can be taken to be the same functions, but with $\{0, 1, \cdots, m - 1\}$ regarded as a subset of $\mathbb{Z}_{m^2}$. Then $\delta\tilde{\phi} = m\eta$ and $\delta\tilde{\psi} = m\mu$ for $\mathbb{Z}_m$ cocycles $\eta$ and $\mu$ representing $\beta(a)$ and $\beta(b)$. Taking cup products, $\tilde{\phi} \smile \tilde{\psi}$ is a $\mathbb{Z}_{m^2}$ cochain lifting the $\mathbb{Z}_m$ cocycle $\phi \smile \psi$, and
$$\delta(\tilde{\phi} \smile \tilde{\psi}) = \delta\tilde{\phi} \smile \tilde{\psi} \pm \tilde{\phi} \smile \delta\tilde{\psi} = m\eta \smile \tilde{\psi} \pm \tilde{\phi} \smile m\mu = m(\eta \smile \psi \pm \phi \smile \mu)$$
where the sign $\pm$ is $(-1)^{|a|}$. Hence $\eta \smile \psi + (-1)^{|a|}\phi \smile \mu$ represents $\beta(a \smile b)$, giving the formula $(*)$.

> [!example] Example 3E.2: Cup Products in Lens Spaces
> The cup product structure for lens spaces was computed in Example 3.41 via Poincaré duality, but using Bocksteins we can deduce it from the cup product structure in $\mathbb{CP}^\infty$, which was computed in Theorem 3.19 without Poincaré duality. Consider first the infinite-dimensional lens space $L = S^\infty/\mathbb{Z}_m$ where $\mathbb{Z}_m$ acts on the unit sphere $S^\infty$ in $\mathbb{C}^\infty$ by scalar multiplication, so the action is generated by the rotation $v \mapsto e^{2\pi i/m}v$. The quotient map $S^\infty \to \mathbb{CP}^\infty$ factors through $L$, so we have a projection $L \to \mathbb{CP}^\infty$. Looking at the cell structure on $L$ described in Example 2.43, we see that each even-dimensional cell of $L$ projects homeomorphically onto the corresponding cell of $\mathbb{CP}^\infty$.
> 
> Namely, the $2n$ cell of $L$ is the homeomorphic image of the $2n$ cell in $S^{2n+1} \subset \mathbb{C}^{n+1}$ formed by the points $\cos\theta(z_1, \cdots, z_n, 0) + \sin\theta(0, \cdots, 0, 1)$ with $\sum_i |z_i|^2 = 1$ and $0 < \theta \leq \pi/2$, and the same is true for the $2n$ cell of $\mathbb{CP}^\infty$. From cellular cohomology it then follows that the map $L \to \mathbb{CP}^\infty$ induces isomorphisms on even-dimensional cohomology with $\mathbb{Z}_m$ coefficients. Since $H^*(\mathbb{CP}^\infty; \mathbb{Z}_m)$ is a polynomial ring, we deduce that if $y \in H^2(L; \mathbb{Z}_m)$ is a generator, then $y^k$ generates $H^{2k}(L; \mathbb{Z}_m)$ for all $k$.
> 
> By Example 3E.1 there is a generator $x \in H^1(L; \mathbb{Z}_m)$ with $\beta(x) = y$. The product formula $(*)$ gives $\beta(xy^k) = \beta(x)y^k - x\beta(y^k) = y^{k+1}$. Thus $\beta$ takes $xy^k$ to a generator, hence $xy^k$ must be a generator of $H^{2k+1}(L; \mathbb{Z}_m)$. This completely determines the cup product structure in $H^*(L; \mathbb{Z}_m)$ if $m$ is odd since the commutativity property of cup product implies that $x^2 = 0$ in this case. The result is that $H^*(L; \mathbb{Z}_m) \approx \Lambda_{\mathbb{Z}_m}[x] \otimes \mathbb{Z}_m[y]$ for odd $m$. When $m$ is even this statement needs to be modified slightly by inserting the relation that $x^2$ is the unique element of order
2 in $H^2(L; \mathbb{Z}_m) \approx \mathbb{Z}_m$, as we showed in Example 3.9 by an explicit calculation in the 2 skeleton of $L$.

The cup product structure in finite-dimensional lens spaces follows from this since a finite-dimensional lens space embeds as a skeleton in an infinite-dimensional lens space, and the homotopy type of an infinite-dimensional lens space is determined by its fundamental group since it is a $K(\pi, 1)$. It follows that the cup product structure on a lens space $S^{2n+1}/\mathbb{Z}_m$ with $\mathbb{Z}_m$ coefficients is obtained from the preceding calculation by truncating via the relation $y^{n+1} = 0$.

The relation $\beta = \rho \tilde{\beta}$ implies that $\beta^2 = \rho \tilde{\beta}\rho \tilde{\beta} = 0$ since $\tilde{\beta}\rho = 0$ in the long exact sequence containing $\tilde{\beta}$. Because $\beta^2 = 0$, the groups $H^n(X; \mathbb{Z}_m)$ form a chain complex with the Bockstein homomorphisms $\beta$ as the 'boundary' maps. We can then form the associated Bockstein cohomology groups $\text{Ker}\, \beta / \text{Im}\, \beta$, which we denote $BH^n(X; \mathbb{Z}_m)$ in dimension $n$. The most interesting case is when $m$ is a prime $p$, so we shall assume this from now on.

> [!proposition] Proposition 3E.3
> If $H^n(X; \mathbb{Z})$ is finitely generated for all $n$, then the Bockstein cohomology groups $BH^n(X; \mathbb{Z}_p)$ are determined by the following rules:
>
> (a) Each $\mathbb{Z}$ summand of $H^n(X; \mathbb{Z})$ contributes a $\mathbb{Z}_p$ summand to $BH^n(X; \mathbb{Z}_p)$.
>
> (b) Each $\mathbb{Z}_{p^k}$ summand of $H^n(X; \mathbb{Z})$ with $k > 1$ contributes $\mathbb{Z}_p$ summands to both $BH^{n-1}(X; \mathbb{Z}_p)$ and $BH^n(X; \mathbb{Z}_p)$.
>
> (c) A $\mathbb{Z}_p$ summand of $H^n(X; \mathbb{Z})$ gives $\mathbb{Z}_p$ summands of $H^{n-1}(X; \mathbb{Z}_p)$ and $H^n(X; \mathbb{Z}_p)$ with $\beta$ an isomorphism between these two summands, hence there is no contribution to $BH^*(X; \mathbb{Z}_p)$.

> [!proof]
> We will use the algebraic notion of minimal chain complexes. Suppose that $C$ is a chain complex of free abelian groups for which the homology groups $H_n(C)$ are finitely generated for each $n$. Choose a splitting of each $H_n(C)$ as a direct sum of cyclic groups. There are countably many of these cyclic groups, so we can list them as $G_1, G_2, \cdots$. For each $G_i$ choose a generator $g_i$ and define a corresponding chain complex $M(g_i)$ by the following prescription. If $g_i$ has infinite order in $G_i \subset H_{n_i}(C)$, let $M(g_i)$ consist of just a $\mathbb{Z}$ in dimension $n_i$, with generator $z_i$. On the other hand, if $g_i$ has finite order $k$ in $H_{n_i}(C)$, let $M(g_i)$ consist of $\mathbb{Z}$'s in dimensions $n_i$ and $n_i + 1$, generated by $x_i$ and $y_i$ respectively, with $\partial y_i = kx_i$. Let $M$ be the direct sum of the chain complexes $M(g_i)$. Define a chain map $\sigma: M \to C$ by sending $z_i$ and $x_i$ to cycles $\zeta_i$ and $\xi_i$ representing the corresponding homology classes $g_i$, and $y_i$ to a chain $\eta_i$ with $\partial\eta_i = k\xi_i$. The chain map $\sigma$ induces an isomorphism on homology, hence also on cohomology with any coefficients, by Corollary 3.4.
>
> The dual cochain complex $M^*$ obtained by applying $\text{Hom}(-, \mathbb{Z})$ splits as the direct sum of the dual complexes $M^*(g_i)$. So in cohomology with $\mathbb{Z}$ coefficients the dual basis element $z_i^*$ generates a $\mathbb{Z}$ summand in dimension $n_i$, while $y_i^*$ generates a $\mathbb{Z}_k$ summand in dimension $n_i + 1$ since $\delta x_i^* = ky_i^*$. With $\mathbb{Z}_p$ coefficients, $p$ prime, $z_i^*$ gives a $\mathbb{Z}_p$ summand of $H^{n_i}(M; \mathbb{Z}_p)$, while $x_i^*$ and $y_i^*$ give $\mathbb{Z}_p$ summands of $H^{n_i}(M; \mathbb{Z}_p)$ and $H^{n_i+1}(M; \mathbb{Z}_p)$ if $p$ divides $k$ and otherwise they give nothing.
>
> The map $\sigma$ induces an isomorphism between the associated Bockstein long exact sequences of cohomology groups, with commuting squares, so we can use $M^*$ to compute $\beta$ and $\tilde{\beta}$, and we can do the calculation separately on each summand $M^*(g_i)$. Obviously $\beta$ and $\tilde{\beta}$ are zero on $y_i^*$ and $z_i^*$. When $p$ divides $k$ we have the class $x_i^* \in H^{n_i}(M; \mathbb{Z}_p)$, and from the definition of Bockstein homomorphisms it follows that $\tilde{\beta}(x_i^*) = (k/p)y_i^* \in H^{n_i+1}(M; \mathbb{Z})$ and $\beta(x_i^*) = (k/p)y_i^* \in H^{n_i+1}(M; \mathbb{Z}_p)$. The latter element is nonzero iff $k$ is not divisible by $p^2$.
>
> $\square$

> [!corollary] Corollary 3E.4
> In the situation of the preceding proposition, $H^*(X; \mathbb{Z})$ contains no elements of order $p^2$ iff the dimension of $BH^n(X; \mathbb{Z}_p)$ as a vector space over $\mathbb{Z}_p$ equals the rank of $H^n(X; \mathbb{Z})$ for all $n$. In this case $\rho: H^*(X; \mathbb{Z}) \to H^*(X; \mathbb{Z}_p)$ is injective on the $p$ torsion, and the image of this $p$ torsion under $\rho$ is equal to $\text{Im}\, \beta$.

> [!proof]
> The first statement is evident from the proposition. The injectivity of $\rho$ on $p$ torsion is in fact equivalent to there being no elements of order $p^2$. The equality $\text{Im}\, \rho = \text{Im}\, \beta$ follows from the fact that $\text{Im}\, \beta = \rho(\text{Im}\, \tilde{\beta}) = \rho(\text{Ker}\, m)$ in the commutative diagram near the beginning of this section, and the fact that for $m = p$ the kernel of $m$ is exactly the $p$ torsion when there are no elements of order $p^2$.
>
> $\square$

> [!example] Example 3E.5
> Let us use Bocksteins to compute $H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z})$. This could instead be done by first computing the homology via the general Künneth formula, then applying the universal coefficient theorem, but with Bocksteins we will only need the simpler Künneth formula for field coefficients in Theorem 3.15.
>
> The cup product structure in $H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z})$ will also be easy to determine via Bocksteins.
>
> For $p$ an odd prime we have $\tilde{H}^*(\mathbb{RP}^\infty; \mathbb{Z}_p) = 0$, hence $\tilde{H}^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z}_p) = 0$ by Theorem 3.15. The universal coefficient theorem then implies that $\tilde{H}^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z})$ consists entirely of elements of order a power of 2. From Example 3E.1 we know that Bockstein homomorphisms in $H^*(\mathbb{RP}^\infty; \mathbb{Z}_2) \approx \mathbb{Z}_2[x]$ are given by $\beta(x^{2k-1}) = x^{2k}$ and $\beta(x^{2k}) = 0$. In $H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z}_2) \approx \mathbb{Z}_2[x, y]$ we can then compute $\beta$ via the product formula $\beta(x^m y^n) = (\beta x^m)y^n + x^m(\beta y^n)$.
>
> The answer can be represented graphically by the figure to the right. Here the dot, diamond, or circle in the $(m, n)$ position represents the monomial $x^m y^n$ and line segments indicate nontrivial Bocksteins. For example, the lower left square records the formulas $\beta(xy) = x^2 y + xy^2$, $\beta(x^2 y) = x^2 y^2 = \beta(xy^2)$, and $\beta(x^2 y^2) = 0$. Thus in this square we see that $\text{Ker}\, \beta = \text{Im}\, \beta$, with generators the 'diagonal' sum $x^2 y + xy^2$ and $x^2 y^2$.

> [!figure]- 🔴 Figure needed: Bockstein diagram for $\mathbb{RP}^\infty \times \mathbb{RP}^\infty$
> Source: p.306, graphical representation of Bockstein homomorphisms
> Content: Grid diagram showing dots, diamonds, and circles at $(m,n)$ positions representing monomials $x^m y^n$, with line segments indicating nontrivial Bocksteins
> Action: Screenshot or manual reconstruction needed.

> [!example] Example 3E.5 (continued)
> The same thing happens in all the other squares, so it is apparent that $\text{Ker}\, \beta = \text{Im}\, \beta$ except for the zero-dimensional class '1'. By the preceding corollary this says that all nontrivial elements of $\tilde{H}^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z})$ have order 2. Furthermore, $\text{Im}\, \beta$ consists of the subring $\mathbb{Z}_2[x^2, y^2]$, indicated by the circles in the figure, together with the multiples of $x^2 y + xy^2$ by elements of $\mathbb{Z}_2[x^2, y^2]$. It follows that there is a ring isomorphism
> $$H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z}) \approx \mathbb{Z}[\lambda, \mu, \nu]/(2\lambda, 2\mu, 2\nu, \nu^2 + \lambda^2\mu + \lambda\mu^2)$$
> where $\rho(\lambda) = x^2$, $\rho(\mu) = y^2$, $\rho(\nu) = x^2 y + xy^2$, and the relation $\nu^2 + \lambda^2\mu + \lambda\mu^2 = 0$ holds since $(x^2 y + xy^2)^2 = x^4 y^2 + x^2 y^4$.
>
> This calculation illustrates the general principle that cup product structures with $\mathbb{Z}$ coefficients tend to be considerably more complicated than with field coefficients. One can see even more striking evidence of this by computing $H^*(\mathbb{RP}^\infty \times \mathbb{RP}^\infty \times \mathbb{RP}^\infty; \mathbb{Z})$ by the same technique.

> [!example] Example 3E.6
> Let us construct finite CW complexes $X_1$, $X_2$, and $Y$ such that the rings $H^*(X_1; \mathbb{Z})$ and $H^*(X_2; \mathbb{Z})$ are isomorphic but $H^*(X_1 \times Y; \mathbb{Z})$ and $H^*(X_2 \times Y; \mathbb{Z})$ are isomorphic only as groups, not as rings.
>
> According to Theorem 3.15 this can happen only if all three of $X_1$, $X_2$, and $Y$ have torsion in their $\mathbb{Z}$ cohomology. The space $X_1$ is obtained from $S^2 \times S^2$ by attaching a 3 cell $e^3$ to the second $S^2$ factor by a map of degree 2. Thus $X_1$ has a CW structure with cells $e^0$, $e^2_1$, $e^2_2$, $e^3$, $e^4$ with $e^3$ attached to the 2 sphere $e^0 \cup e^2_2$. The space $X_2$ is obtained from $S^2 \vee S^2 \vee S^4$ by attaching a 3 cell to the second $S^2$ summand by a map of degree 2, so it has a CW structure with the same collection of five cells, the only difference being that in $X_2$ the 4 cell is attached trivially. For the space $Y$ we choose a Moore space $M(\mathbb{Z}_2, 2)$, with cells labeled $f^0$, $f^2$, $f^3$, the 3 cell being attached by a map of degree 2.
>
> From cellular cohomology we see that both $H^*(X_1; \mathbb{Z})$ and $H^*(X_2; \mathbb{Z})$ consist of $\mathbb{Z}$'s in dimensions 0, 2, and 4, and a $\mathbb{Z}_2$ in dimension 3. In both cases all cup products of positive-dimensional classes are zero since for dimension reasons the only possible nontrivial product is the square of the 2 dimensional class, but this is zero as one sees by restricting to the subcomplex $S^2 \times S^2$ or $S^2 \vee S^2 \vee S^4$. For the space $Y$ we have $H^*(Y; \mathbb{Z})$ consisting of a $\mathbb{Z}$ in dimension 0 and a $\mathbb{Z}_2$ in dimension 3, so the cup product structure here is trivial as well.
>
> With $\mathbb{Z}_2$ coefficients the cellular cochain complexes for $X_i$, $Y$, and $X_i \times Y$ are all trivial, so we can identify the cells with a basis for $\mathbb{Z}_2$ cohomology. In $X_i$ and $Y$ the only nontrivial $\mathbb{Z}_2$ Bocksteins are $\beta(e^2_2) = e^3$ and $\beta(f^2) = f^3$. The Bocksteins in $X_i \times Y$ can then be computed using the product formula for $\beta$, which applies to cross product as well as cup product since cross product is defined in terms of cup product.
>
> The results are shown in the following table, where an arrow denotes a nontrivial Bockstein.

> [!figure]- 🔴 Figure needed: Bockstein table for $X_i \times Y$
> Source: p.307, table showing Bockstein homomorphisms
> Content: Table with arrows denoting nontrivial Bocksteins for $X_i$, $Y$, and $X_i \times Y$
> Action: Screenshot or manual reconstruction needed.

> [!example] Example 3E.6 (continued)
> The two arrows from $e^2_2 \times f^2$ mean that $\beta(e^2_2 \times f^2) = e^3 \times f^2 + e^2_2 \times f^3$. It is evident that $BH^*(X_i \times Y; \mathbb{Z}_2)$ consists of $\mathbb{Z}_2$'s in dimensions 0, 2, and 4, so Proposition 3E.3 implies that the nontorsion in $H^*(X_i \times Y; \mathbb{Z})$ consists of $\mathbb{Z}$'s in these dimensions. Furthermore, by Corollary 3E.4 the 2 torsion in $H^*(X_i \times Y; \mathbb{Z})$ corresponds to the image of $\beta$ and consists of $\mathbb{Z}_2 \times \mathbb{Z}_2$'s in dimensions 3 and 5 together with $\mathbb{Z}_2$'s in dimensions 6 and 7. In particular, there is a $\mathbb{Z}_2$ corresponding to $e^3 \times f^2 + e^2_2 \times f^3$ in dimension 5.
>
> There is no $p$ torsion for odd primes $p$ since $H^*(X_i \times Y; \mathbb{Z}_p) \approx H^*(X_i; \mathbb{Z}_p) \otimes H^*(Y; \mathbb{Z}_p)$ is nonzero only in even dimensions.
>
> We can see now that with $\mathbb{Z}$ coefficients, the cup product $H^2 \times H^5 \to H^7$ is nontrivial for $X_1 \times Y$ but trivial for $X_2 \times Y$. For in $H^*(X_i \times Y; \mathbb{Z}_2)$ we have, using the relation $(a \times b) \smile (c \times d) = (a \smile c) \times (b \smile d)$ which follows immediately from the definition of cross product,
>
> (1) $e^2_1 \times f^0 \smile e^2_1 \times f^3 = (e^2_1 \smile e^2_1) \times (f^0 \smile f^3) = 0$ since $e^2_1 \smile e^2_1 = 0$
>
> (2) $e^2_1 \times f^0 \smile (e^3 \times f^2 + e^2_2 \times f^3) = (e^2_1 \smile e^3) \times (f^0 \smile f^2) + (e^2_1 \smile e^2_2) \times (f^0 \smile f^3) = (e^2_1 \smile e^2_2) \times f^3$ since $e^2_1 \smile e^3 = 0$
>
> and in $H^7(X_i \times Y; \mathbb{Z}_2) \approx H^7(X_i \times Y; \mathbb{Z})$ we have $(e^2_1 \smile e^2_2) \times f^3 = e^4 \times f^3 \neq 0$ for $i = 1$ but $(e^2_1 \smile e^2_2) \times f^3 = 0 \times f^3 = 0$ for $i = 2$.
>
> Thus the cohomology ring of a product space is not always determined by the cohomology rings of the factors.

> [!example] Example 3E.7
> Bockstein homomorphisms can be used to get a more complete picture of the structure of $H^*(SO(n); \mathbb{Z})$ than we obtained in the preceding section. Continuing the notation employed there, we know from the calculation for $\mathbb{RP}^\infty$ in Example 3E.1 that $\beta\left(\sum_j \alpha^{2i-1}_j\right) = \sum_j \alpha^{2i}_j$ and $\beta\left(\sum_j \alpha^{2i}_j\right) = 0$, hence $\beta(\beta_{2i-1}) = \beta_{2i}$ and $\beta(\beta_{2i}) = 0$. Taking the case $n = 5$ as an example, we have $H^*(SO(5); \mathbb{Z}_2) \approx \mathbb{Z}_2[\beta_1, \beta_3]/(\beta^8_1, \beta^2_3)$. The upper part of the table at the top of the next page shows the nontrivial Bocksteins. Once again two arrows from an element mean 'sum', for example $\beta(\beta_1\beta_3) = \beta(\beta_1)\beta_3 + \beta_1\beta(\beta_3) = \beta_2\beta_3 + \beta_1\beta_4 = \beta^2_1\beta_3 + \beta^5_1$. This Bockstein data allows us to calculate $H^i(SO(5); \mathbb{Z})$ modulo odd torsion, with the results indicated in the remainder of the table, where the vertical arrows denote the map $\rho$. As we showed in Proposition 3D.3, there is no odd torsion, so this in fact gives the full calculation of $H^i(SO(5); \mathbb{Z})$.

> [!figure]- 🔴 Figure needed: Bockstein table for $SO(5)$
> Source: p.308, table showing nontrivial Bocksteins and cohomology groups
> Content: Table showing nontrivial Bocksteins in upper part, and $H^i(SO(5); \mathbb{Z})$ calculation in lower part with vertical arrows denoting $\rho$
> Action: Screenshot or manual reconstruction needed.

> [!example] Example 3E.7 (continued)
> It is interesting that the generator $y \in H^3(SO(5); \mathbb{Z}) \approx \mathbb{Z}$ has $y^2$ nontrivial, since this implies that the ring structures of $H^*(SO(5); \mathbb{Z})$ and $H^*(\mathbb{RP}^7 \times S^3; \mathbb{Z})$ are not isomorphic, even though the cohomology groups and the $\mathbb{Z}_2$ cohomology rings of these two spaces are the same. An exercise at the end of the section is to show that in fact $SO(5)$ is not homotopy equivalent to the product of any two CW complexes with nontrivial cohomology.
>
> A natural way to describe $H^*(SO(5); \mathbb{Z})$ would be as a quotient of a free graded commutative associative algebra $F[x, y, z]$ over $\mathbb{Z}$ with $|x| = 2$, $|y| = 3$, and $|z| = 7$. Elements of $F[x, y, z]$ are representable as polynomials $p(x, y, z)$, subject only to the relations imposed by commutativity. In particular, since $y$ and $z$ are odd-dimensional we have $yz = -zy$, and $y^2$ and $z^2$ are nonzero elements of order 2 in $F[x, y, z]$. Any monomial containing $y^2$ or $z^2$ as a factor also has order 2. In these terms, the calculation of $H^*(SO(5); \mathbb{Z})$ can be written
> $$H^*(SO(5); \mathbb{Z}) \approx F[x, y, z]/(2x, x^4, y^4, z^2, xz, x^3 - y^2)$$
>
> The next figure shows the nontrivial Bocksteins for $H^*(SO(7); \mathbb{Z}_2)$. Here the numbers across the top indicate dimension, stopping with 21, the dimension of $SO(7)$. The labels on the dots refer to the basis of products of distinct $\beta_i$'s. For example, the dot labeled 135 is $\beta_1\beta_3\beta_5$.

> [!figure]- 🔴 Figure needed: Bockstein diagram for $SO(7)$
> Source: p.309, diagram showing nontrivial Bocksteins for $H^*(SO(7); \mathbb{Z}_2)$
> Content: Diagram with dimensions 0-21 across top, dots labeled with products of distinct $\beta_i$'s, showing Poincaré duality symmetry
> Action: Screenshot or manual reconstruction needed.

> [!example] Example 3E.7 (continued)
> The left-right symmetry of the figure displays Poincaré duality quite graphically. Note that the corresponding diagram for $SO(5)$, drawn in a slightly different way from the preceding figure, occurs in the upper left corner as the subdiagram with labels 1 through 4. This subdiagram has the symmetry of Poincaré duality as well.
>
> From the diagram one can with some effort work out the cup product structure in $H^*(SO(7); \mathbb{Z})$, but the answer is rather complicated, just as the diagram is:
> $$F[x, y, z, v, w]/(2x, 2v, x^4, y^4, z^2, v^2, w^2, xz, vz, vw, y^2w, x^3y^2v, y^2z - x^3v, xw - y^2v - x^3v)$$
> where $x$, $y$, $z$, $v$, $w$ have dimensions 2, 3, 7, 7, 11, respectively. It is curious that the relation $x^3 = y^2$ in $H^*(SO(5); \mathbb{Z})$ no longer holds in $H^*(SO(7); \mathbb{Z})$.

> [!exercise] Exercises
>
> 1. Show that $H^*(K(\mathbb{Z}_m, 1); \mathbb{Z}_k)$ is isomorphic as a ring to $H^*(K(\mathbb{Z}_m, 1); \mathbb{Z}_m) \otimes \mathbb{Z}_k$ if $k$ divides $m$. In particular, if $m/k$ is even, this is $\Lambda_{\mathbb{Z}_k}[x] \otimes \mathbb{Z}_k[y]$.
>
> 2. In this problem we will derive one half of the classification of lens spaces up to homotopy equivalence, by showing that if $L_m(\ell_1, \cdots, \ell_n) \simeq L_m(\ell'_1, \cdots, \ell'_n)$ then $\ell_1 \cdots \ell_n \equiv \pm\ell'_1 \cdots \ell'_n k^n \mod m$ for some integer $k$. The converse is Exercise 29 for §4.2.
>
>     (a) Let $L = L_m(\ell_1, \cdots, \ell_n)$ and let $\mathbb{Z}_m^*$ be the multiplicative group of invertible elements of $\mathbb{Z}_m$. Define $t \in \mathbb{Z}_m^*$ by the equation $xy^{n-1} = tz$ where $x$ is a generator of $H^1(L; \mathbb{Z}_m)$, $y = \beta(x)$, and $z \in H^{2n-1}(L; \mathbb{Z}_m)$ is the image of a generator of $H^{2n-1}(L; \mathbb{Z})$. Show that the image $\tau(L)$ of $t$ in the quotient group $\mathbb{Z}_m^*/\pm(\mathbb{Z}_m^*)^n$ depends only on the homotopy type of $L$.
>
>     (b) Given nonzero integers $k_1, \cdots, k_n$, define a map $f: S^{2n-1} \to S^{2n-1}$ sending the unit vector $(r_1 e^{i\theta_1}, \cdots, r_n e^{i\theta_n})$ in $\mathbb{C}^n$ to $(r_1 e^{ik_1\theta_1}, \cdots, r_n e^{ik_n\theta_n})$. Show:
>
>        1) $f$ has degree $k_1 \cdots k_n$.
>
>        2) $f$ induces a quotient map $\bar{f}: L \to L'$ for $L' = L_m(\ell'_1, \cdots, \ell'_n)$ provided that $k_j\ell_j \equiv \ell'_j \mod m$ for each $j$.
>
>        3) $\bar{f}$ induces an isomorphism on $\pi_1$, hence on $H^1(-; \mathbb{Z}_m)$.
>
>        4) $\bar{f}$ has degree $k_1 \cdots k_n$, i.e., $\bar{f}_*$ is multiplication by $k_1 \cdots k_n$ on $H^{2n-1}(-; \mathbb{Z})$.
>
>     (c) Using the $\bar{f}$ in (b), show that $\tau(L) = k_1 \cdots k_n \tau(L')$.
>
>     (d) Deduce that if $L_m(\ell_1, \cdots, \ell_n) \simeq L_m(\ell'_1, \cdots, \ell'_n)$, then $\ell_1 \cdots \ell_n \equiv \pm\ell'_1 \cdots \ell'_n k^n \mod m$ for some integer $k$.
>
> 3. Let $X$ be the smash product of $k$ copies of a Moore space $M(\mathbb{Z}_p, n)$ with $p$ prime. Compute the Bockstein homomorphisms in $H^*(X; \mathbb{Z}_p)$ and use this to describe $H^*(X; \mathbb{Z})$.
>
> 4. Using the cup product structure in $H^*(SO(5); \mathbb{Z})$, show that $SO(5)$ is not homotopy equivalent to the product of any two CW complexes with nontrivial cohomology.
