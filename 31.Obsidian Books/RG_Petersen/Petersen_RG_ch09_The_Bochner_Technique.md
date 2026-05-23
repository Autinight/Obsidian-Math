# Chapter 9 The Bochner Technique

Aside from the variational techniques we’ve used in prior sections one of the oldest and most important techniques in modern Riemannian geometry is that of the Bochner technique. In this chapter we prove the classical theorem of Bochner about obstructions to the existence of harmonic 1-forms. We also explain in detail how the Bochner technique extends to forms and other tensors by using Lichnerowicz Laplacians. This leads to a classification of compact manifolds with nonnegative curvature operator in chapter 10. To establish the relevant Bochner formula for forms, we have used a somewhat forgotten approach by Poor. It appears to be quite simple and intuitive. It can, as we shall see, also be generalized to work on other tensors including the curvature tensor.

The classical focus of the Bochner technique lies in establishing certain vanishing results for suitable tensors in positive curvature. This immediately leads to rigidity results when the curvature is nonnegative. In the 1970s P. Li discovered that it can be further generalized to estimate the dimension of the kernel of the Laplace operators under more general curvature assumptions. This became further enhanced when Gallot realized that the necessary analytic estimates work with only lower Ricci curvature bounds. This will all be explained here and uses in a crucial way results from sections 7.1.5 and 7.1.3.

The Bochner technique was, as the name indicates, invented by Bochner. However, Bernstein knew about it for harmonic functions on domains in Euclidean space. Specifically, he used

$$
\Delta \frac {1}{2} | \nabla u | ^ {2} = | \mathrm{Hess} u | ^ {2},
$$

where $u : \Omega \subset \mathbb { R } ^ { n }  \mathbb { R }$ and $\Delta u = 0$ : It was Bochner who realized that when the W  ! Dsame trick is attempted on Riemannian manifolds, a curvature term also appears. Namely, for $u : ( M , g ) \to \mathbb { R }$ with $\Delta _ { g } u = 0$ one has

$$
\Delta \frac {1}{2} | \nabla u | ^ {2} = | \operatorname{Hess} u | ^ {2} + \operatorname{Ric} (\nabla u, \nabla u).
$$

With this in mind it is clear that curvature influences the behavior of harmonic functions. The next nontrivial step Bochner took was to realize that one can compute $\Delta \frac { 1 } { 2 } \left| \omega \right| ^ { 2 }$ for any harmonic form ! and then try to get information about the topology j jof the manifold. The key ingredient here is of course Hodge’s theorem, which states that any cohomology class can be uniquely represented by a harmonic form. Yano further refined the Bochner technique, but it seems to be Lichnerowicz who really put things into motion when he presented his formulas for the Laplacian on forms and spinors around 1960. After this work, Berger, D. Meyer, Gallot, Gromov-Lawson, Witten, and many others have made significant contributions to this tremendously important subject.

Prior to Bochner’s work Weitzenböck developed a formula very similar to the Bochner formula. We shall also explain this related formula and how it can be used to establish the Bochner formulas we use. It appears that Weitzenböck never realized that his work could have an impact on geometry and only thought of his work as an application of algebraic invariant theory.

# 9.1 Hodge Theory

We start by giving a brief account of Hodge theory to explain why it calculates the homology of a manifold.

Recall that on a manifold M we have the de Rham complex

$$
0 \to \Omega^ {0} (M) \xrightarrow {d ^ {0}} \Omega^ {1} (M) \xrightarrow {d ^ {1}} \Omega^ {2} (M) \to \dots \xrightarrow {d ^ {n - 1}} \Omega^ {n} (M) \to 0,
$$

where $\Omega ^ { k } ( M )$ denotes the space of k-forms on M and $d ^ { k } : \Omega ^ { k } ( M ) \to \Omega ^ { k + 1 } ( M )$ is exterior differentiation. The de Rham cohomology groups

$$
H ^ {k} (M) = \frac {\ker (d ^ {k})}{\operatorname{im} (d ^ {k - 1})}
$$

compute the real cohomology of M. We know that $H ^ { 0 } ( M ) \simeq \mathbb { R }$ if M is connected, and $H ^ { n } ( M ) = \mathbb { R }$ 'if M is orientable and compact. In this case there is a pairing,

$$
\begin{array}{l} \Omega^ {k} (M) \times \Omega^ {n - k} (M) \to \mathbb {R}, \\ \left(\omega_ {1}, \omega_ {2}\right)\rightarrow \int_ {M} \omega_ {1} \wedge \omega_ {2}, \\ \end{array}
$$

# 9.1 Hodge Theory

that induces a nondegenerate pairing on the cohomology groups

$$
H ^ {k} (M) \times H ^ {n - k} (M) \to \mathbb {R}.
$$

This shows that the two vector spaces $H ^ { k } ( M )$ and $H ^ { n - k } ( M )$ are dual to each other and in particular have the same dimension.

When M is endowed with a Riemannian metric g we also obtain an adjoint $\delta = \nabla ^ { * }$ to the differential (see proposition 2.2.8 and section 2.2.2.2). Specifically,

$$
\delta^ {k}: \Omega^ {k + 1} (M) \to \Omega^ {k} (M)
$$

is adjoint to $d ^ { k }$ via the formula

$$
\int_ {M} g \left(\delta^ {k} \omega_ {1}, \omega_ {2}\right) \text { vol } = \int_ {M} g \left(\omega_ {1}, d ^ {k} \omega_ {2}\right) \text { vol }.
$$

It is often convenient to use the notation

$$
\left(T _ {1}, T _ {2}\right) = \frac {1}{\operatorname{vol} M} \int_ {M} g \left(T _ {1}, T _ {2}\right) \text { vol }.
$$

This defines an inner product on any space of tensors of the same type. The map $\delta$ is also the adjoint of d with respect to this normalized inner product.

The Laplacian on forms, also called the Hodge Laplacian, is defined as

$$
\begin{array}{l} \triangle : \Omega^ {k} (M) \to \Omega^ {k} (M), \\ \Delta \omega = (d \delta + \delta d) \omega . \\ \end{array}
$$

In the next section we shall see that on functions the Hodge Laplacian is the negative of the previously defined Laplacian, hence the need for the slightly different symbol $\triangle$ instead of $\Delta$ .

Lemma 9.1.1. $\triangle \omega = 0$ if and only if d!  0 and $\delta \omega = 0$ . In particular, $\omega = 0 ;$ , if $\triangle \omega = 0 a n d \omega = d \theta$ D.

Proof. The proof just uses that the maps are adjoints to each other:

$$
\begin{array}{l} (\triangle \omega , \omega) = (d \delta \omega , \omega) + (\delta d \omega , \omega) \\ = (\delta \omega , \delta \omega) + (d \omega , d \omega). \\ \end{array}
$$

Thus, $\triangle \omega = 0$ implies $( \delta \omega , \delta \omega ) = ( d \omega , d \omega ) = 0$ ; which shows that $\delta \omega = 0$ and $d \omega = 0$ D D. The opposite direction is obvious.

DNote that when $\omega = d \theta$ and $\triangle \omega = 0$ , then $\delta d \theta = 0$ , which in turn shows that $( \omega , \omega ) = ( \theta , \delta d \theta ) = 0$ .

We can now introduce the Hodge cohomology:

$$
\mathcal {H} ^ {k} (M) = \{\omega \in \Omega^ {k} (M) \mid \triangle \omega = 0 \}.
$$

Theorem 9.1.2 (Hodge, 1935). The natural inclusion map $\mathcal { H } ^ { k } ( M ) \to H ^ { k } ( M )$ is an isomorphism.

Proof. The fact that $\mathcal { H } ^ { k } ( M )  H ^ { k } ( M )$ is well-defined and injective follows from !lemma 9.1.1. To show that it is surjective requires a fair bit of work that is standard in the theory of partial differential equations (see [99] or [92]). Some of the results we prove later will help to establish part of this result in a more general context (see exercises 9.6.4 and 9.6.5). The essential idea is the claim; since $\triangle$ is self-adjoint there is an orthogonal decomposition

$$
\Omega^ {k} (M) = \operatorname{im} \triangle \oplus \ker \triangle = \operatorname{im} \triangle \oplus \mathscr {H} ^ {k} (M).
$$

If $\omega \in \Omega ^ { k }$ , then we can write $\omega = d \delta \theta + \delta d \theta + \tilde { \omega }$ , where $\Delta \tilde { \omega } = 0$ . When 2in addition $d \omega = 0$ it follows that $\triangle d \theta = d \delta d \theta = 0$ Q. Since $d \theta$ 4 Q Dis also harmonic it follows that $\delta d \theta = 0$ 4. In particular, $\omega = d \delta \theta + \tilde { \omega }$ and $\tilde { \omega }$ represents the same Dcohomology class as !.

# 9.2 1-Forms

We shall see how Hodge theory can be used to get information about the first Betti number $b _ { 1 } ( M ) = \dim { \mathcal { H } } ^ { 1 } ( M )$ /. In the next section we generalize this to other forms and tensors.

# 9.2.1 The Bochner Formula

Let - be a harmonic 1-form on $( M , g )$ and $\begin{array} { r } { f = \frac { 1 } { 2 } | \theta | ^ { 2 } } \end{array}$ . To get a better feel for this D function consider the vector field X field dual to $\theta , \mathrm { i . e . , } \theta ( v ) = g ( X , v )$ for all v. Then

$$
f = \frac {1}{2} | \theta | ^ {2} = \frac {1}{2} | X | ^ {2} = \frac {1}{2} \theta (X).
$$

Proposition 9.2.1. If X and - are related by $\theta \left( v \right) = g \left( v , X \right)$ , then

(1) $v \mapsto \nabla _ { v } X$ is symmetric if and only $i f d \theta = 0$ and

(2) $\mathrm { d i v } X = - \delta \theta .$

Proof. Recall that

$$
d \theta (V, W) + \left(L _ {X} g\right) (V, W) = 2 g \left(\nabla_ {V} X, W\right).
$$

# 9.2 1-Forms

Since $L _ { X } g$ is symmetric and $d \theta$ is skew-symmetric the result immediately follows. The second part was proven in proposition 2.2.7.

Therefore, when - is harmonic, then divX  0 and X is a symmetric .1; 1/- tensor.

We present the Bochner formula for closed 1-forms formulated through vector fields.

Proposition 9.2.2. Let X be a vector field so that X is symmetric (i.e. corresponding 1-form is closed). $\begin{array} { r } { I f f { \big ( } = \frac { 1 } { 2 } | X | ^ { 2 } } \end{array}$ rand X is the gradient of u near p; then

$$
\nabla f = \nabla_ {X} X.
$$

(2)

$$
\begin{array}{l} \operatorname{Hess} f (V, V) = \operatorname{Hess} ^ {2} u (V, V) + (\nabla_ {X} \operatorname{Hess} u) (V, V) + R (V, X, X, V) \\ = \left| \nabla_ {V} X \right| ^ {2} + g \left(\nabla_ {X, V} ^ {2} X, V\right) + R (V, X, X, V) \\ \end{array}
$$

$$
\begin{array}{l} \Delta f = | \operatorname{Hess} u | ^ {2} + D _ {X} \Delta u + \operatorname{Ric} (X, X) \\ = | \nabla X | ^ {2} + D _ {X} \operatorname{div} X + \operatorname{Ric} (X, X) \\ \end{array}
$$

Proof. For (1) simply observe that

$$
g (\nabla f, V) = D _ {V} \frac {1}{2} | X | ^ {2} = g (\nabla_ {V} X, X) = g (\nabla_ {X} X, V).
$$

(2) is a direct consequence of theorem 3.2.2 applied to the function u.

For (3) take traces in (2). As in the proof of proposition 8.2.1 this gives us the first and third terms. The second term comes from commuting traces and covariant derivatives. Specifically, either $X | _ { p } = 0$ or $E _ { i }$ can be chosen to parallel along X. In either case

$$
\begin{array}{l} \sum g \left(\nabla_ {X, E _ {i}} ^ {2} X, E _ {i}\right) = \sum \left(\nabla_ {X} \text { Hess } u\right) (E _ {i}, E _ {i}) \\ = D _ {X} \sum \mathrm{Hess} u (E _ {i}, E _ {i}) \\ = D _ {X} \Delta u. \\ \end{array}
$$

# 9.2.2 The Vanishing Theorem

We can now easily establish the other Bochner theorem for 1-forms.

Theorem 9.2.3 (Bochner, 1948). $H ( M , g )$ is compact and has $\operatorname { R i c } \geq 0 ,$ , then every harmonic 1-form is parallel.

Proof. Suppose $\omega$ is a harmonic 1-form and X the dual vector field. Then proposition 9.2.2 implies

$$
\Delta \left(\frac {1}{2} | X | ^ {2}\right) = | \nabla X | ^ {2} + \operatorname{Ric} (X, X) \geq 0,
$$

since di $\mathrm { v } X = \Delta u = 0$ . The maximum principle then shows that ${ \scriptstyle { \frac { 1 } { 2 } } } \left| X \right| ^ { 2 }$ must be constant and $| \nabla X | = 0$ .

Corollary 9.2.4. $H ( M , g )$ is as before and furthermore has positive Ricci curvature at one point, then all harmonic 1-forms vanish everywhere.

Proof. Since we just proved $\operatorname { R i c } ( X , X ) \equiv 0$ ; we must have that $X | _ { p } = 0$ if the Ricci tensor is positive on $T _ { p } M$ . But then $X \equiv 0$ ; since X is parallel.

Corollary 9.2.5. If $( M , g )$ is compact and satisfies $\begin{array} { r } { \operatorname { R i c } \geq 0 , } \end{array}$ , then $b _ { 1 } ( M ) \leq n =$ dimM; with equality holding if and only $i f ( M , g )$ is a flat torus.

Proof. We know from Hodge theory that $b _ { 1 } ( M ) = \dim { \mathcal { H } } ^ { 1 } ( M )$ . Now, all harmonic 1-forms are parallel, so the linear map: $\mathcal { H } ^ { 1 } ( M ) \to T _ { p } ^ { * } M$ that evaluates $\omega$ at p is injective. In particular, dim $\mathcal { H } ^ { 1 } ( M ) \leq n$ .

If equality holds, then there are n linearly independent parallel fields $E _ { i } , \ i \ =$ $1 , \ldots , n$ . This clearly implies that .M; g/ is flat. Thus the universal covering is $\mathbb { R } ^ { n }$ with $\pi _ { 1 } \left( M \right)$ acting by isometries. Now pull the vector fields $E _ { i } , i = 1 , \ldots , n$ ; back to $\tilde { E } _ { i } , \ i = 1 , \dots , n$ ; on $\mathbb { R } ^ { n }$ D. These vector fields are again parallel and therefore Dconstant vector fields. This means that we can think of them as the usual Cartesian coordinate vector fields $\partial _ { i }$ : In addition, they are invariant under the action of $\pi _ { 1 } \left( M \right)$ , $\mathrm { i . e . }$ , for each ${ \cal F } \in \pi _ { 1 } \left( M \right)$ we have DF $( \partial _ { i } | _ { p } ) = \partial _ { i } | _ { F ( p ) } , i = 1 , \ldots , n $ : But only 2 j D jtranslations leave all of the coordinate fields invariant. Thus, $\pi _ { 1 } \left( M \right)$ consists entirely of translations. This means that $\pi _ { 1 } \left( M \right)$ is finitely generated, Abelian, and torsion free. Hence $\Gamma \ = \ \mathbb { Z } ^ { k }$ for some k. To see that M is a torus, we need $k \ = \ n$ : If $k < n ,$ then $\mathbb { Z } ^ { k }$ D Dgenerates a proper subspace of the space of translations and can’t act cocompactly on $\mathbb { R } ^ { n }$ . If $k > n ,$ , then $\mathbb { Z } ^ { k }$ can’t act discretely on $\mathbb { R } ^ { n }$ . Thus, it follows that $\Gamma = \mathbb { Z } ^ { n }$ and generates Rn:

# 9.2.3 The Estimation Theorem

The goal is to generalize theorem 9.2.3 to manifolds with a negative lower bound for the Ricci curvature. The techniques were first developed by P. Li in the late ’70s and then improved by Gallot to give the results we present. Gallot’s contribution was in part to obtain a suitable bound for Sobolev constants as in theorem 7.1.13.

# 9.2 1-Forms

We start with a very general analysis lemma. Assume we have a compact Riemannian manifold $( M , g )$ and a vector bundle $E  M$ where the fibers are !endowed with a smoothly varying inner product and the dimension of the fibers is m. Sections of this bundle are denoted $\Gamma \left( E \right)$ and have several natural norms

$$
\begin{array}{l} \| s \| _ {\infty} = \max _ {x \in M} | s (x) |, \\ \| s \| _ {p} = \left(\frac {1}{\mathrm{vol} M} \int_ {M} | s | ^ {p} \mathrm{vol}\right) ^ {\frac {1}{p}}. \\ \end{array}
$$

The normalization is consistent with earlier definitions and guarantees that $\left\| s \right\| _ { p }$ increases to $\left\| s \right\| _ { \infty }$ . Now fix a finite dimensional subspace $V \subset \Gamma \left( E \right)$ k k. All of the k k1norms are then equivalent on this space and we can define

$$
C (V) = \max _ {s \in V - \{0 \}} \frac {\| s \| _ {\infty}}{\| s \| _ {2}}.
$$

The dimension of V can be estimated by this constant and the dimension of the fibers of E.

Lemma 9.2.6 (P. Li). With notation as above

$$
\dim V \leq m \cdot C (V).
$$

Proof. Note that V has a natural inner product

$$
(s _ {1}, s _ {2}) = \frac {1}{\operatorname{vol} M} \int_ {M} \left\langle s _ {1}, s _ {2} \right\rangle \operatorname{vol}
$$

such that $( s , s ) = \| s \| _ { 2 } ^ { 2 } .$ Select an orthonormal basis $e _ { 1 } , \ldots , e _ { l } \in V$ with respect to D k kthis inner product and observe that the function

$$
f (x) = \sum_ {i = 1} ^ {l} | e _ {i} (x) | ^ {2}
$$

does not depend on the choice of orthonormal basis. Moreover,

$$
\frac {1}{\operatorname{vol} M} \int_ {M} f \operatorname{vol} = l = \dim V.
$$

Let $x _ { 0 }$ be the point where $f$ is maximal. Consider the map $V \to E _ { x _ { 0 } }$ that evaluates a section at $x _ { 0 }$ !. We can then assume that the basis is chosen so that the last $l - k$ elements span the kernel. This implies that $k \leq m$ and

$$
\dim V \leq f (x _ {0}) \leq k \cdot C (V)
$$

since each section had unit $L ^ { 2 } { \mathrm { - n o r m } }$ . This proves the claim.

Next we extend the maximum principle to a situation where we can bound $\| u \| _ { \infty }$ in terms of $\left\| u \right\| _ { p }$ .

Theorem 9.2.7 (Moser iteration). Let $( M , g )$ be a compact Riemannian manifold such that

$$
\left\| u \right\| _ {2 \nu} \leq S \left\| \nabla u \right\| _ {2} + \left\| u \right\| _ {2}
$$

for all smooth functions, where $\nu > 1 . \ I f f : M \to [ 0 , \infty )$ is continuous, smooth on $\{ f > 0 \}$ , and $\Delta f \ge - \lambda f$ , then

$$
\| f \| _ {\infty} \leq \exp \left(\frac {S \sqrt {\lambda \nu}}{\sqrt {\nu} - 1}\right) \| f \| _ {2}.
$$

Proof. Since $f$ is minimized on the set where it vanishes we can assume that all of its derivatives vanish there. In fact, $\Delta f$ is nonnegative at those points both in the barrier and distributional sense.

First note that Green’s formula implies

$$
\begin{array}{l} \left(f ^ {2 q - 1}, \Delta f\right) = - \left(d f ^ {2 q - 1}, d f\right) \\ = - (2 q - 1) \left(f ^ {2 q - 2} d f, d f\right). \\ \end{array}
$$

This shows that

$$
\begin{array}{l} \| d f ^ {q} \| _ {2} ^ {2} = q ^ {2} \left(f ^ {2 q - 2} d f, d f\right) \\ \leq \frac {q ^ {2} \lambda}{2 q - 1} (f ^ {2 q - 1}, f) \\ = \frac {q ^ {2} \lambda}{2 q - 1} \| f ^ {q} \| _ {2} ^ {2}. \\ \end{array}
$$

$$
= - \frac {q ^ {2}}{2 q - 1} \left(f ^ {2 q - 1}, \Delta f\right)
$$

# 9.2 1-Forms

We can then use the Sobolev inequality to conclude that

$$
\| f ^ {q} \| _ {2 v} \leq S \| d f ^ {q} \| _ {2} + \| f ^ {q} \| _ {2} \leq \left(S q \left(\frac {\lambda}{2 q - 1}\right) ^ {\frac {1}{2}} + 1\right) \| f ^ {q} \| _ {2}
$$

and

$$
\| f \| _ {2 \nu q} \leq \left(S q \left(\frac {\lambda}{2 q - 1}\right) ^ {\frac {1}{2}} + 1\right) ^ {\frac {1}{q}} \| f \| _ {2 q}.
$$

Letting $q = \nu ^ { k }$ gives

$$
\| f \| _ {2 \nu^ {k + 1}} \leq \left(S \nu^ {k} \left(\frac {\lambda}{2 \nu^ {k} - 1}\right) ^ {\frac {1}{2}} + 1\right) ^ {\nu^ {- k}} \| f \| _ {2 \nu^ {k}}.
$$

Consequently, by starting at $k = 0$ and letting $k \to \infty$ we obtain

$$
\| f \| _ {\infty} \leq \left(\prod_ {k = 0} ^ {\infty} \left(S \nu^ {k} \left(\frac {\lambda}{2 \nu^ {k} - 1}\right) ^ {\frac {1}{2}} + 1\right) ^ {\nu^ {- k}}\right) \| f \| _ {2}.
$$

The infinite product is estimated by taking logarithms and using log $( 1 + x ) \leq x$

$$
\begin{array}{l} \sum_ {k = 0} ^ {\infty} \nu^ {- k} \log \left(S \nu^ {k} \left(\frac {\lambda}{2 \nu^ {k} - 1}\right) ^ {\frac {1}{2}} + 1\right) \leq S \sqrt {\lambda} \sum_ {k = 0} ^ {\infty} \left(\frac {1}{2 \nu^ {k} - 1}\right) ^ {\frac {1}{2}} \\ \leq S \sqrt {\lambda} \sum_ {k = 0} ^ {\infty} \left(\frac {1}{\nu^ {k}}\right) ^ {\frac {1}{2}} \\ = \frac {S \sqrt {\lambda \nu}}{\sqrt {\nu} - 1}. \\ \end{array}
$$

Together these results imply

Theorem 9.2.8 (Gromov, 1980 and Gallot, 1981). If M is a compact Riemannian manifold of dimension n such that $\operatorname { R i c } \geq ( n - 1 )$ k and diam $( M ) \leq D ,$ , then there is a function $C \left( n , k \cdot D ^ { 2 } \right)$ such that

$$
b _ {1} (M) \leq C (n, k \cdot D ^ {2}).
$$

Moreover, $\begin{array} { r } { \operatorname* { l i m } _ { \varepsilon \to 0 } C \left( n , \varepsilon \right) = n } \end{array}$ : In particular, there is $\varepsilon \left( n \right) > 0$ such that when $k \cdot D ^ { 2 } \geq - \varepsilon \left( n \right)$ !; then $b _ { 1 } \left( M \right) \leq n$ :

Proof. Gromov’s proof centered on understanding how covering spaces of M control the Betti number. Gallot’s proof has the advantage of also being useful in a wider context as we shall explore below.

The goal is clearly to estimate dim ${ \mathcal H } ^ { 1 }$ . Lemma 9.2.6 implies that

$$
\dim \mathscr {H} ^ {1} \leq n \cdot C \left(\mathscr {H} ^ {1}\right),
$$

So we have to estimate the ratios k!k1 . To do so consider f  ! . This function is $\frac { \| \omega \| _ { \infty } } { \| \omega \| _ { 2 } }$ $f = | \omega |$ k k smooth except possibly at points where $\omega = 0$ D j j, which also happen to be minimum points for f . Note that

$$
2 f d f = d f ^ {2} = 2 g (\nabla \omega , \omega) \leq 2 | \nabla \omega | f
$$

so we obtain Kato’s inequality $d f \leq | \nabla \omega |$ . If X is the dual vector field to ! the Bochner formula implies

$$
\begin{array}{l} \left| d f \right| ^ {2} + f \Delta f = \frac {1}{2} \Delta f ^ {2} \\ = | \nabla \omega | ^ {2} + \operatorname{Ric} (X, X) \\ \geq | \nabla \omega | ^ {2} + (n - 1) k f ^ {2}. \\ \end{array}
$$

It follows by Kato’s inequality that $\Delta f \geq ( n - 1 ) k f$ . Theorem 9.2.7 then shows that

$$
\| f \| _ {\infty} \leq \exp \left(\frac {S \sqrt {- (n - 1) k \nu}}{\sqrt {\nu} - 1}\right) \| f \| _ {2}.
$$

Since $\begin{array} { r } { \frac { \| f \| _ { \infty } } { \| f \| _ { 2 } } = \frac { \| \omega \| _ { \infty } } { \| \omega \| _ { 2 } } } \end{array}$ we have proven that

$$
\dim \mathscr {H} ^ {1} \leq n \cdot C \left(\mathscr {H} ^ {1}\right) \leq n \cdot \exp \left(\frac {S \sqrt {- (n - 1) k v}}{\sqrt {v} - 1}\right),
$$

where $S = D \cdot C \left( n , k D ^ { 2 } \right)$ is estimated in theorem 7.1.13 and proposition 7.1.17. The D specific nature of the bound proves the theorem.

# 9.3 Lichnerowicz Laplacians

We introduce a natural class of Laplacians and show how the Bochner technique works for these operators. In the next section we then show that there are several natural Laplacians of this type including the Hodge Laplacian.

# 9.3.1 The Connection Laplacian

We start by collecting the results from the previous section in a more general context.

Fix a tensor bundle $E  M$ with m-dimensional fibers. This could the bundle !whose sections are p-forms, symmetric tensors, curvature tensors etc.

First the vanishing result.

Proposition 9.3.1. Let $( M , g )$ be a Riemannian manifold and $T \in \Gamma \left( E \right)$ a section such that $g \left( \nabla ^ { * } \nabla T , T \right) \leq 0 . I f \left| T \right|$ 2has a maximum, then T is parallel.

Proof. Note that

$$
\Delta \frac {1}{2} | T | ^ {2} = | \nabla T | ^ {2} - g (\nabla^ {*} \nabla T, T) \geq 0.
$$

In case T has a maximum we can apply the maximum principle to the function $| T | ^ { 2 }$ j jand conclude that it must be constant and that T itself is parallel.

Next we present the estimating result.

Theorem 9.3.2 (Gallot, 1981). Assume $( M , g )$ is a compact manifold that satisfies the assumption of theorem 9.2.7. Let $V \subset \Gamma \left( M \right)$ be finite dimensional. If

$$
g \left(\nabla^ {*} \nabla T, T\right) \leq \lambda | T | ^ {2}
$$

for all $T \in V ,$ , then

$$
\dim V \leq m \cdot \exp \left(\frac {S \sqrt {\lambda \nu}}{\sqrt {\nu} - 1}\right).
$$

Proof. This is proven as in theorem 9.2.8 using $f = | T |$ . Instead of the Bochner formula we simply use the equation

$$
\left| d f \right| ^ {2} + f \Delta f = \frac {1}{2} \Delta f ^ {2} = | \nabla T | ^ {2} - g (\nabla^ {*} \nabla T, T)
$$

to conclude via ${ \bf K } { \bf a t o } ^ { \prime } { \bf s }$ inequality that $\Delta f \geq - \lambda f$ . We can then finish the proof in the same fashion.

# 9.3.2 The Weitzenböck Curvature

The Weitzenböck curvature operator on a tensor is defined by

$$
\operatorname{Ric} (T) \left(X _ {1}, \dots , X _ {k}\right) = \sum \left(R \left(e _ {j}, X _ {i}\right) T\right) \left(X _ {1}, \dots , e _ {j}, \dots , X _ {k}\right).
$$

We use the Ricci tensor to symbolize this as it is the Ricci tensor when evaluated on vector fields and 1-forms. Specifically:

$$
\operatorname{Ric} (\omega) (X) = \sum (R (e _ {j}, X) \omega) (e _ {j}) = - \omega (\sum R (e _ {j}, X) e _ {j}) = \omega (\operatorname{Ric} (X)).
$$

Often it is referred to as W, but this can be confused with the Weyl tensor.

The Lichnerowicz Laplacian is defined as

$$
\Delta_ {L} T = \nabla^ {*} \nabla T + c \operatorname{Ric} (T)
$$

for a suitable constant $c > 0$ : We shall see below that the Hodge Laplacian on forms is of this type with $c = 1$ : In addition, interesting information can also be extracted Dfor symmetric .0; 2/-tensors as well as the curvature tensor via this operator when we use $\begin{array} { r } { c = { \frac { 1 } { 2 } } } \end{array}$ .

D The Bochner technique works for tensors that lie in the kernel of some Lichnerowicz Laplacian

$$
\Delta_ {L} T = \nabla^ {*} \nabla T + c \operatorname{Ric} (T) = 0.
$$

The idea is to use the maximum principle to show that T is parallel. In order to apply the maximum principle we need $g \left( \nabla ^ { * } \nabla T , T \right) \leq 0$ which by the equation for T is equivalent to showing $g \left( \operatorname { R i c } \left( T \right) , T \right) \geq 0$ :

The two assumptions $\Delta _ { L } T = 0$ and $g \left( \operatorname { R i c } \left( T \right) , T \right) \geq 0$ we make about T require some discussion.

The first assumption is usually implied by showing that the Lichnerowicz Laplacian has an alternate expression such as we have seen for the Hodge Laplacian. The fact that $\Delta _ { L } T = 0$ might come from certain natural restrictions on the tensor Dor even as a consequence of having nontrivial topology. In the next section several natural Laplacians are rewritten as Lichnerowicz Laplacians.

The second assumption $g \left( \operatorname { R i c } \left( T \right) , T \right) \ \geq \ 0$ , is often difficult to check and in many cases it took decades to sort out what curvature assumptions gave the best results. The goal in this section is to first develop a different formula for Ric .T/ and second to change T in a suitable fashion so as to create a significantly simpler formula for $g \left( \operatorname { R i c } \left( T \right) , T \right)$ . This formula will immediately show that $g \left( \operatorname { R i c } \left( T \right) , T \right)$ is nonnegative when the curvature operator is nonnegative. It will also make it very easy to calculate precisely what happens when T is a .0; 1/- or .0; 2/-tensor, a task we delay until the next section. It is worthwhile mentioning that the original proofs of some of these facts were quite complicated and only came to light long after the Bochner technique had been introduced.

# 9.3.3 Simplification of Ric .T/

Since $R _ { X , Y } : T _ { p } M \to T _ { p } M$ is always skew-symmetric it can be decomposed using an W !orthonormal basis of skew-symmetric transformations $\Xi _ { \alpha } ~ \in ~ \mathfrak { s o } \left( T _ { p } M \right)$ : A tricky 2 sopoint enters our formulas at this point. It comes from the fact that if v and w are orthonormal, then $v \wedge w \in \Lambda ^ { 2 } T _ { p } M$ is a unit vector, while the corresponding ^ 2skew-symmetric operator, a counter clockwise rotation of $\pi / 2$ in span $\{ v , w \}$ ; has Euclidean norm ${ \sqrt { 2 } } .$ f g: To avoid confusion and unnecessary factors we assume that so $\left( T _ { p } M \right)$ is endowed with the metric that comes from $\Lambda ^ { 2 } T _ { p } M$ . With that in mind sowe have

$$
\begin{array}{l} R _ {X, Y} = \sum g (R _ {X, Y}, \Xi_ {\alpha}) \Xi_ {\alpha} \\ = \sum g (\Re (X \wedge Y), \Xi_ {\alpha}) \Xi_ {\alpha} \\ = \sum g \left(\Re \left(\Xi_ {\alpha}\right), X \wedge Y\right) \Xi_ {\alpha} \\ = - \sum g (R (\Xi_ {\alpha}) X, Y) \Xi_ {\alpha}. \\ \end{array}
$$

This allows us to rewrite the Weitzenböck curvature operator.

Lemma 9.3.3. For any .0; k/-tensor T

$$
\begin{array}{l} \operatorname{Ric} (T) = - \sum R (\Xi_ {\alpha}) (\Xi_ {\alpha} T), \\ \Delta_ {L} T = \nabla^ {*} \nabla T - c \sum R (\Xi_ {\alpha}) (\Xi_ {\alpha} T). \\ \end{array}
$$

Moreover, Ric is self-adjoint.

Proof. This is a straightforward calculation:

$$
\begin{array}{l} \operatorname{Ric} (T) \left(X _ {1}, \dots , X _ {k}\right) = \sum \left(R \left(e _ {j}, X _ {i}\right) T\right) \left(X _ {1}, \dots , e _ {j}, \dots , X _ {k}\right) \\ = - \sum g (R (\Xi_ {\alpha}) e _ {j}, X _ {i}) (\Xi_ {\alpha} T) (X _ {1}, \dots , e _ {j}, \dots , X _ {k}) \\ = - \sum \left(\Xi_ {\alpha} T\right) \left(X _ {1}, \dots , g \left(R \left(\Xi_ {\alpha}\right) e _ {j}, X _ {i}\right) e _ {j}, \dots , X _ {k}\right) \\ = \sum \left(\Xi_ {\alpha} T\right) \left(X _ {1}, \dots , R \left(\Xi_ {\alpha}\right) X _ {i}, \dots , X _ {k}\right) \\ = - \sum \left(R \left(\Xi_ {\alpha}\right) \left(\Xi_ {\alpha} T\right)\right) \left(X _ {1}, \dots , X _ {i}, \dots , X _ {k}\right). \\ \end{array}
$$

To check that Ric is self-adjoint select an orthonormal basis $\Xi _ { \alpha }$ of eigenvectors for ; i.e., $\Re ( \Xi _ { \alpha } ) = \lambda _ { \alpha } \Xi _ { \alpha }$ : In this case,

$$
\begin{array}{l} g (\operatorname{Ric} (T), S) = - \sum g (R (\Xi_ {\alpha}) (\Xi_ {\alpha} T), S) \\ = - \sum \lambda_ {\alpha} g \left(\Xi_ {\alpha} \left(\Xi_ {\alpha} T\right), S\right) \\ = \sum \lambda_ {\alpha} g (\Xi_ {\alpha} T, \Xi_ {\alpha} S) \\ \end{array}
$$

which is symmetric in T and S.

At first sight we have replaced a simple sum over j and i with a possibly more complicated sum. The next result justifies the reformulation.

Corollary 9.3.4. If $\Re \geq 0$ , then $g \left( \operatorname { R i c } \left( T \right) , T \right) \geq 0 .$ . More generally, If $\Re \geq k ,$ , where $k < 0 ,$ , then $g \left( \operatorname { R i c } \left( T \right) , T \right) \geq k C \left| T \right| ^ { 2 }$  R , where C depends only on the type of the tensor.

Proof. As above assume $\Re ( \Xi _ { \alpha } ) = \lambda _ { \alpha } \Xi _ { \alpha }$ and note that

$$
g \left(\operatorname{Ric} (T), T\right) = \sum \lambda_ {\alpha} \left| \Xi_ {\alpha} T \right| ^ {2} \geq k \sum \left| \Xi_ {\alpha} T \right| ^ {2}.
$$

This shows that the curvature term is nonnegative when $k = 0$ . Clearly there is a constant $C > 0$ Ddepending only on the type of the tensor and dimension of the manifold so that

$$
C \left| T \right| ^ {2} \geq \sum \left| \Xi_ {\alpha} T \right| ^ {2}.
$$

When $k < 0$ this implies:

$$
g \left(\operatorname{Ric} (T), T\right) \geq k C | T | ^ {2}.
$$

This allows us to obtain vanishing and estimation results for all Lichnerowicz Laplacians on manifolds.

Theorem 9.3.5. $I f \Re \geq k$ and diam $\leq D _ { i }$ , then the dimension of

$$
V = \{T \in \Gamma (E) \mid \Delta_ {L} T = \nabla^ {*} \nabla T + c \operatorname{Ric} (T) = 0 \}
$$

is bounded by

$$
m \cdot \exp \left(D \cdot C (n, k D ^ {2}) \frac {\sqrt {- k c C v}}{\sqrt {v} - 1}\right),
$$

and when $k = 0$ all $T \in V$ are parallel tensors.

# 9.4 The Bochner Technique in General

The goal in this section is to show that there are several natural Lichnerowicz Laplacians on Riemannian manifolds.

# 9.4.1 Forms

The first obvious case is that of the Hodge Laplacian on k-forms as we already know that harmonic forms compute the topology of the underlying manifold.

Theorem 9.4.1 (Weitzenböck, 1923). The Hodge Laplacian is the Lichnerowicz Laplacian with c 1: Specifically,

$$
\triangle \omega = (d \delta + \delta d) (\omega) = \nabla^ {*} \nabla \omega + \operatorname{Ric} (\omega).
$$

Proof. We shall follow the proof discovered by W. A. Poor. To perform the calculations we need

$$
\delta \omega (X _ {2}, \dots , X _ {k}) = - \sum (\nabla_ {E _ {i}} \omega) (E _ {i}, X _ {2}, \dots , X _ {k}),
$$

$$
d \omega \left(X _ {0}, \dots , X _ {k}\right) = \sum (- 1) ^ {i} \left(\nabla_ {X _ {i}} \omega\right) \left(X _ {0}, \dots , \hat {X} _ {i}, \dots , X _ {k}\right).
$$

We this in mind we get

$$
\begin{array}{l} d \delta \omega (X _ {1}, \ldots , X _ {k}) = - \sum (- 1) ^ {i + 1} (\nabla_ {X _ {i}, E _ {j}} ^ {2} \omega) (E _ {j}, X _ {1}, \ldots , \hat {X} _ {i}, \ldots , X _ {k}) \\ = - \sum \left(\nabla_ {X _ {i}, E _ {j}} ^ {2} \omega\right) \left(X _ {1}, \ldots , E _ {j}, \ldots , X _ {k}\right), \\ \end{array}
$$

$$
\delta d \omega (X _ {1}, \dots , X _ {k}) = - \sum (\nabla_ {E _ {j}, E _ {j}} ^ {2} \omega) (X _ {1}, \dots , X _ {k})
$$

$$
- \sum (- 1) ^ {i} \left(\nabla_ {E _ {j}, X _ {i}} ^ {2} \omega\right) \left(E _ {j}, X _ {1}, \dots , \hat {X} _ {i}, \dots , X _ {k}\right)
$$

$$
= \left(\nabla^ {*} \nabla \omega\right) (X _ {1}, \dots , X _ {k})
$$

$$
+ \sum \left(\nabla_ {E _ {j}, X _ {i}} ^ {2} \omega\right) \left(X _ {1}, \dots , E _ {j}, \dots , X _ {k}\right).
$$

Thus

$$
\begin{array}{l} \triangle \omega = \nabla^ {*} \nabla \omega + \sum (R (E _ {j}, X _ {i}) \omega) (X _ {1}, \dots , E _ {j}, \dots , X _ {k}) \\ = \nabla^ {*} \nabla \omega + \operatorname{Ric} (\omega). \\ \end{array}
$$

# 9.4.2 The Curvature Tensor

We show that a suitably defined Laplacian on curvature tensors is in fact a Lichnerowicz Laplacian. This Laplacian is a symmetrized version of $\left( \nabla _ { X } \left( \nabla ^ { * } R \right) \right) \left( Y , Z , W \right)$ so as to make it have the same symmetries as R. It appears as r rthe right-hand side in the formula below.

Theorem 9.4.2. The curvature tensor R on a Riemannian manifold satisfies

$$
\begin{array}{l} \left(\nabla^ {*} \nabla R\right) (X, Y, Z, W) + \frac {1}{2} \operatorname{Ric} (R) (X, Y, Z, W) \\ = \frac {1}{2} (\nabla_ {X} \nabla^ {*} R) (Y, Z, W) - \frac {1}{2} (\nabla_ {Y} \nabla^ {*} R) (X, Z, W) \\ + \frac {1}{2} (\nabla_ {Z} \nabla^ {*} R) (W, X, Y) - \frac {1}{2} (\nabla_ {W} \nabla^ {*} R) (Z, X, Y). \\ \end{array}
$$

Proof. By far the most important ingredient in the proof is that we have the second Bianchi identity at our disposal. We will begin the calculation by considering the (0,4)-curvature tensor R. Fix a point p, let X; Y; Z; W be vector fields with $\nabla X =$ $\nabla Y = \nabla Z = \nabla W = 0$ at $p$ and let $E _ { i }$ be a normal frame at $p .$ . Then

$$
\begin{array}{l} \left(\nabla^ {*} \nabla R\right) (X, Y, Z, W) \\ = - \sum_ {i = 1} ^ {n} \left(\nabla_ {E _ {i}, E _ {i}} ^ {2} R\right) (X, Y, Z, W) \\ = \sum_ {i = 1} ^ {n} \left(\nabla_ {E _ {i}, X} ^ {2} R\right) (Y, E _ {i}, Z, W) + \left(\nabla_ {E _ {i}, Y} ^ {2} R\right) (E _ {i}, X, Z, W) \\ = \sum_ {i = 1} ^ {n} \left(\nabla_ {X, E _ {i}} ^ {2} R\right) (Y, E _ {i}, Z, W) + \left(\nabla_ {Y, E _ {i}} ^ {2} R\right) (E _ {i}, X, Z, W) \\ + \sum_ {i = 1} ^ {n} (R (E _ {i}, X) (R)) (Y, E _ {i}, Z, W) + (R (E _ {i}, Y) (R)) (E _ {i}, X, Z, W) \\ = \left(\nabla_ {X} \nabla^ {*} R\right) (Y, Z, W) - \left(\nabla_ {Y} \nabla^ {*} R\right) (X, Z, W) \\ - \sum_ {i = 1} ^ {n} (R (E _ {i}, X) (R)) (E _ {i}, Y, Z, W) + (R (E _ {i}, Y) (R)) (X, E _ {i}, Z, W). \\ \end{array}
$$

Note that the last two terms are half of the expected terms in Ric .R/ .X; Y; Z; W/ :

Using that R is symmetric in the pairs X; Y and Z; W we then obtain

$$
\begin{array}{l} \left(\nabla^ {*} \nabla R\right) (X, Y, Z, W) \\ = \frac {1}{2} (\nabla^ {*} \nabla R) (X, Y, Z, W) + \frac {1}{2} (\nabla^ {*} \nabla R) (Z, W, X, Y) \\ \end{array}
$$

$$
\begin{array}{l} = \frac {1}{2} \left(\left(\nabla_ {X} \nabla^ {*} R\right) (Y, Z, W) - \left(\nabla_ {Y} \nabla^ {*} R\right) (X, Z, W)\right) \\ + \frac {1}{2} \left(\left(\nabla_ {Z} \nabla^ {*} R\right) (W, X, Y) - \left(\nabla_ {W} \nabla^ {*} R\right) (Z, X, Y)\right) \\ - \frac {1}{2} \sum_ {i = 1} ^ {n} (R (E _ {i}, X) (R)) (E _ {i}, Y, Z, W) + (R (E _ {i}, Y) (R)) (X, E _ {i}, Z, W) \\ - \frac {1}{2} \sum_ {i = 1} ^ {n} (R (E _ {i}, Z) (R)) (E _ {i}, W, X, Y) + (R (E _ {i}, W) (R)) (Z, E _ {i}, X, Y) \\ = \frac {1}{2} \left(\left(\nabla_ {X} \nabla^ {*} R\right) (Y, Z, W) - \left(\nabla_ {Y} \nabla^ {*} R\right) (X, Z, W)\right) \\ + \frac {1}{2} \left(\left(\nabla_ {Z} \nabla^ {*} R\right) (W, X, Y) - \left(\nabla_ {W} \nabla^ {*} R\right) (Z, X, Y)\right) \\ - \frac {1}{2} \operatorname{Ric} (R) (X, Y, Z, W). \\ \end{array}
$$

One might expect that, as with the Hodge Laplacian, there should also be terms where one takes the divergence of certain derivatives of R: However, the second Bianchi identity shows that these terms already vanish for R: In particular, R is harmonic if it is divergence free: $\nabla ^ { * } R = 0$ :

# 9.4.3 Symmetric .0; 2/-Tensors

Let h be a symmetric .0; 2/-tensor. If we consider the corresponding .1; 1/-tensor H, then we have defined $\left( d ^ { \nabla } H \right) \left( X , Y \right) = \left( \nabla _ { X } H \right) \left( Y \right) - \left( \nabla _ { Y } H \right) \left( X \right)$ . Changing the type back allows us to define

$$
d ^ {\nabla} h (X, Y, Z) = (\nabla_ {X} h) (Y, Z) - (\nabla_ {Y} h) (X, Z).
$$

In this form the definition is a bit mysterious but it does occur naturally in differential geometry. Originally it comes from considering the second fundamental II for an immersed hypersurface $M ^ { n } \to \mathbb { R } ^ { n + 1 }$ : In this case the Codazzi-Mainardi equations can be expressed as $d ^ { \nabla } \Pi = 0$ . Another natural situation is the Ricci tensor where exercise 3.4.8 shows that

$$
\left(d ^ {\nabla} \operatorname{Ric}\right) (X, Y, Z) = \left(\nabla^ {*} R\right) (Z, X, Y).
$$

This formula also has a counter part relating Schouten and Weyl tensors discussed in exercise 3.4.26.

Using this exterior derivative we obtain a formula that is similar to what we saw for forms and the curvature tensor.

Theorem 9.4.3. Any symmetric .0; 2/-tensor h on a Riemannian manifold satisfies

$$
\left(\nabla_ {X} \nabla^ {*} h\right) (X) + \left(\nabla^ {*} d ^ {\nabla} h\right) (X, X) = \left(\nabla^ {*} \nabla h\right) (X, X) + \frac {1}{2} (\operatorname{Ric} (h)) (X, X).
$$

Proof. Observe that on the left-hand side the terms are

$$
\left(\nabla_ {X} \nabla^ {*} h\right) (X) = - \left(\nabla_ {X, E _ {i}} ^ {2} h\right) (E _ {i}, X)
$$

and

$$
\begin{array}{l} \left(\nabla^ {*} d ^ {\nabla} h\right) (X, X) = - \left(\nabla_ {E _ {i}} d ^ {\nabla} h\right) \left(E _ {i}, X, X\right) \\ = - \left(\nabla_ {E _ {i}, E _ {i}} ^ {2} h\right) (X, X) + \left(\nabla_ {E _ {i}, X} ^ {2} h\right) (E _ {i}, X). \\ \end{array}
$$

Adding these we obtain

$$
\begin{array}{l} \left(\nabla_ {X} \nabla^ {*} h\right) (X) + \left(\nabla^ {*} d ^ {\nabla} h\right) (X, X) \\ = \left(\nabla^ {*} \nabla h\right) (X, X) + \left(\nabla_ {E _ {i}, X} ^ {2} h\right) (E _ {i}, X) - \left(\nabla_ {X, E _ {i}} ^ {2} h\right) (E _ {i}, X) \\ = \left(\nabla^ {*} \nabla h\right) (X, X) + \left(R \left(E _ {i}, X\right) h\right) \left(E _ {i}, X\right). \\ \end{array}
$$

Using that h is symmetric we finally conclude that

$$
\left(R \left(E _ {i}, X\right) h\right) \left(E _ {i}, X\right) = \frac {1}{2} (\operatorname{Ric} (h)) (X, X),
$$

thus finishing the proof.

A symmetric .0; 2/-tensor is called a Codazzi tensor if $d ^ { \nabla } h$ vanishes and harmonic if in addition it is divergence free. This characterization can be simplified slightly.

Proposition 9.4.4. A symmetric .0; 2/-tensor is harmonic if and only if it is a Codazzi tensor with constant trace.

Proof. In general we have that

$$
\begin{array}{l} \left(\nabla^ {*} h\right) (X) = - \left(\nabla_ {E _ {i}} h\right) \left(E _ {i}, X\right) \\ = - \left(\nabla_ {E _ {i}} h\right) (X, E _ {i}) \\ = - \left(\nabla_ {X} h\right) \left(E _ {i}, E _ {i}\right) + \left(d ^ {\nabla} h\right) \left(X, E _ {i}, E _ {i}\right) \\ = - D _ {X} (\operatorname{tr} h) + \left(d ^ {\nabla} h\right) (X, E _ {i}, E _ {i}). \\ \end{array}
$$

Thus Codazzi tensors are divergence free if and only if their trace is constant.

This shows that hypersurfaces with constant mean curvature have harmonic second fundamental form. This fact has been exploited by both Lichnerowicz and

Simons. For the Ricci tensor to be harmonic it suffices to assume that it is Codazzi, but this in turn is a strong condition as it is the same as saying that the full curvature tensor is harmonic.

Corollary 9.4.5. The Ricci tensor is harmonic if and only if the curvature tensor is harmonic.

Proof. We know that the Ricci tensor is a Codazzi tensor precisely when the curvature tensor has vanishing divergence (see exercise 3.4.8). The contracted Bianchi identity (proposition 3.1.5) together with the proof of the above proposition then tells us

$$
\begin{array}{l} 2 D _ {X} \text { scal } = - (\nabla^ {*} \text { Ric }) (X) \\ = D _ {X} (\text { trRic }) \\ = D _ {X} (\text { scal }). \\ \end{array}
$$

Thus the scalar curvature must be constant and the Ricci tensor divergence free.

# 9.4.4 Topological and Geometric Consequences

Theorem 9.4.6 (D. Meyer, 1971, D. Meyer-Gallot, 1975, and Gallot, 1981). Let $( M , g )$ be a closed Riemannian n-manifold. If the curvature operator is nonnegative, then all harmonic forms are parallel. When the curvature operator is positive the only parallel l-forms have l  0; n. Finally when $\Re \geq k$ and ${ \mathrm { d i a m } } \leq D ,$ ,

$$
b _ {l} \left(M\right) \leq \binom {n} {l} \exp \Big (D \cdot C \left(n, k D ^ {2}\right) \sqrt {- k C} \Big).
$$

Proof. The first statement is immediate given the Weitzenböck formula for forms. For the second part we note that when the curvature operator is positive, then the formula

$$
0 = g \left(\mathrm{Ric} (\omega), \omega\right) = \sum \lambda_ {\alpha} | \Xi_ {\alpha} \omega | ^ {2}
$$

shows that $\Xi _ { \alpha } \omega = 0$ for all ˛: Hence by linearity $L \omega = 0$ for all skew-symmetric L: If we assume $m < n$ and select L so that $L \left( \boldsymbol { e } _ { i } \right) = 0$ Dfor $i < m , L ( e _ { m } ) = e _ { m + 1 }$ ; then

$$
0 = (L \omega) (e _ {1}, \dots , e _ {m}) = - \omega (e _ {1}, \dots , e _ {m - 1}, e _ {m + 1}).
$$

Since the basis was arbitrary this shows that $\omega = 0$ :

DThe last part follows from our general estimate from theorem 9.3.5.

We now have a pretty good understanding of manifolds with nonnegative (or positive) curvature operator.

H. Hopf is, among other things, famous for the following problem: Does $S ^ { 2 } \times S ^ { 2 }$ -admit a metric with positive sectional curvature? We already know that this space has positive Ricci curvature and also that it doesn’t admit a metric with positive curvature operator. It is also interesting to observe that $\mathbb { C P } ^ { 2 }$ has positive sectional curvature but doesn’t admit a metric with positive curvature operator either. Thus, even among 4-manifolds, there seems to be a big difference between simply connected manifolds that admit Ric > 0, sec > 0; and $\Re > 0$ : We shall in chapter 12 describe a simply connected manifold that has Ric $> 0$ but doesn’t even admit a metric with $\sec \geq 0$ :

Manifolds with nonnegative curvature operator can in fact be classified (see theorem 10.3.7). From this classification it follows that there are many manifolds that have positive or nonnegative sectional curvature but admit no metric with nonnegative curvature operator.

Example 9.4.7. We can exhibit a metric with nonnegative sectional curvature on $\mathbb { C P } ^ { 2 } \sharp \overline { { \mathbb { C P } ^ { 2 } } }$ by observing that it is an $S ^ { 1 }$ quotient of $S ^ { 2 } \times S ^ { 3 }$ . Namely, let $S ^ { 1 }$ act on the -3-sphere by the Hopf action and on the 2-sphere by rotations. If the total rotation on the 2-sphere is $2 \pi k$ ; then the quotient is $S ^ { 2 } { \times } S ^ { 2 }$ if k is even, and $\mathbb { C P } ^ { 2 } \sharp \overline { { \mathbb { C P } ^ { 2 } } }$ if k is odd. -In all cases O’Neill’s formula tells us that the sectional curvature is nonnegative. From the above-mentioned classification it follows, however, that the only simply connected spaces with nonnegative curvature operator are topologically equivalent to $S ^ { 2 } \times S ^ { 2 } , S ^ { 4 }$ ; or $\mathbb { C P } ^ { 2 }$ : These examples were first discovered by Cheeger but with a -very different construction that also lead to other examples.

The Bochner technique has found many generalizations. It has, for instance, proven very successful in the study of manifolds with nonnegative scalar curvature. Briefly, what happens is that spin manifolds admit certain spinor bundles. These bundles come with a natural first-order operator called the Dirac operator. The square of this operator has a Weitzenböck formula of the form

$$
\nabla^ {*} \nabla + \frac {1}{4} \text { scal. }
$$

This formula was discovered and used by Lichnerowicz (as well as I. Singer, as pointed out in [107]) to show that a sophisticated invariant called the $\hat { A } -$ genus vanishes for spin manifolds with positive scalar curvature. Using some generalizations of this formula, Gromov-Lawson showed that any metric on a torus with scal $\geq 0$ is in fact flat. We just proved this for metrics with $\mathrm { R i c } \geq 0$ : Dirac  operators and their Weitzenböck formulas have also been of extreme importance in physics and 4-manifolds theory. Much of Witten’s work (e.g., the positive mass conjecture) uses these ideas. Also, the work of Seiberg-Witten, which has had a revolutionary impact on 4-manifolds, is related to these ideas.

In relation to our discussion above on positively curved manifolds, we should note that there are still no known examples of simply connected manifolds that admit positive scalar curvature but not positive Ricci curvature. This despite the fact that if $( M , g )$ is any closed Riemannian manifold, then for small enough " the product $\left( M \times S ^ { 2 } , g + \varepsilon ^ { 2 } d s _ { 2 } ^ { 2 } \right)$ clearly has positive scalar curvature. This example shows that - Cthere are non-simply connected manifolds with positive scalar curvature that don’t admit even nonnegative Ricci curvature. Specifically, select your favorite surface $M ^ { 2 }$ with $b _ { 1 } > 4$ : Then $b _ { 1 } \left( M ^ { 2 } \times S ^ { 2 } \right) > 4$ and therefore by Bochner’s theorem can’t -support a metric with nonnegative Ricci curvature.

Finally, we present a more geometric result for the curvature tensor. It was first established in [98], and then with a modified proof in [48]. The proof is quite simple and based on the generalities developed above. In chapter 10 we will also show that this result basically characterizes compact symmetric spaces as they all have nonnegative curvature operator.

Theorem 9.4.8 (Tachibana, 1974). Let $( M , g )$ be a closed Riemannian manifold. If the curvature operator is nonnegative and $\nabla ^ { * } R = 0$ ; then $\nabla R = 0$ . If in addition the curvature operator is positive, then $( M , g )$ r D r Dhas constant curvature.

Proof. We know from above that

$$
\nabla^ {*} \nabla R + \frac {1}{2} \operatorname{Ric} (R) = 0.
$$

So if the curvature operator is nonnegative, then $\nabla R = 0$ .

r DMoreover, when the curvature operator is positive it follows as in the case of forms, that $L R \ = \ 0$ for all $L \ \in \ \mathfrak { s o } \left( T _ { p } M \right)$ : This condition implies, as we shall Dshow below, that $R \left( x , y , y , z \right) ~ = ~ 0$ oand $R ( x , y , v , w ) \ = \ 0$ when the vectors are D Dperpendicular. This in turn shows that any bivector x y is an eigenvector for ; but this can only happen if $\Re = k I$ for some constant k:

R DTo show that the mixed curvatures vanish first select L so that $L \left( y \right) = 0$ and $L \left( x \right) = z$ ; then

$$
0 = L R (x, y, y, x) = - R (L (x), y, y, x) - R (x, y, y, L (x)) = - 2 R (x, y, y, z).
$$

Polarizing in $y = v + w$ ; then shows that

$$
R (x, v, w, z) = - R (x, w, v, z).
$$

The Bianchi identity then implies

$$
\begin{array}{l} R (x, v, w, z) = R (w, v, x, z) - R (w, x, v, z) \\ = - 2 R (w, x, v, z) \\ = 2 R (x, w, v, z) \\ = - 2 R (x, v, w, z) \\ \end{array}
$$

showing that $R \left( x , v , w , z \right) = 0$ :

# 9.4.5 Simplification of g .Ric .T/ ; T/

Finally we mention an alternate method that recovers the formula for 1-forms and also gives a formula for general .0; 2/-tensors.

Having redefined the Weitzenböck curvature of tensors, we take it a step further and also discard the orthonormal basis $\Xi _ { \alpha }$ : To assist in this note that a .0; k/-tensor T can be changed to a tensor $\hat { T }$ with values in $\Lambda ^ { 2 } T M$ . Implicitly this works as follows

$$
g \left(L, \hat {T} \left(X _ {1}, \dots , X _ {k}\right)\right) = (L T) \left(X _ {1}, \dots , X _ {k}\right) \text {   for   all   } L \in \mathfrak {s o} (T M) = \Lambda^ {2} T M.
$$

Lemma 9.4.9. For all .0; k/-tensors T and S

$$
g \left(\operatorname{Ric} (T), S\right) = g \left(\Re (\hat {T}), \hat {S}\right).
$$

Proof. This is a straight forward calculation

$$
\begin{array}{l} g \left(\operatorname{Ric} (T), S\right) = \sum g \left(\Xi_ {\alpha} T, R \left(\Xi_ {\alpha}\right) S\right) \\ = \sum \left(\Xi_ {\alpha} T\right) \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right) \left(R \left(\Xi_ {\alpha}\right) S\right) \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right) \\ = \sum g \left(\Xi_ {\alpha}, \hat {T} \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right)\right) g \left(R \left(\Xi_ {\alpha}\right), \hat {S} \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right)\right) \\ = \sum g \left(\Re \left(g \left(\Xi_ {\alpha}, \hat {T} (e _ {i _ {1}}, \dots , e _ {i _ {k}})\right) \Xi_ {\alpha}\right), \hat {S} (e _ {i _ {1}}, \dots , e _ {i _ {k}})\right) \\ = \sum g \left(\Re \left(\hat {T} \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right)\right), \hat {S} \left(e _ {i _ {1}}, \dots , e _ {i _ {k}}\right)\right) \\ = g \left(\Re (\hat {T}), \hat {S}\right) \\ \end{array}
$$

This shows again that Ric is self-adjoint as is self-adjoint on $\Lambda ^ { 2 } T M .$ .

This new expression for g .Ric .T/ ; T/ is also clearly nonnegative when the curvature operator is nonnegative. In addition, it also occasionally allows us to show that it is nonnegative under less restrictive hypotheses.

Proposition 9.4.10. If ! is a 1-form and X the dual vector field, then

$$
\hat {\omega} (Z) = X \wedge Z
$$

and

$$
g \left(\Re (\hat {\omega}), \hat {\omega}\right) = \operatorname{Ric} (X, X).
$$

Proof. In this case

$$
\begin{array}{l} (L \omega) (Z) = - \omega (L (Z)) \\ = - g (X, L (Z)) \\ = - g (L, Z \wedge X) \\ \end{array}
$$

so

$$
\hat {\omega} (Z) = X \wedge Z.
$$

This shows that the curvature term in the Bochner formula becomes

$$
\begin{array}{l} - \sum g \left(R \left(\Xi_ {\alpha}\right) \left(\Xi_ {\alpha} \omega\right), \omega\right) = \sum g \left(\Xi_ {\alpha} \omega , R \left(\Xi_ {\alpha}\right) \omega\right) \\ = \sum g (\hat {\omega} (E _ {i}), \Re (\hat {\omega} (E _ {i}))) \\ = \sum g (\Re (E _ {i} \wedge X), E _ {i} \wedge X) \\ = \sum R (X, E _ {i}, E _ {i}, X) \\ = \operatorname{Ric} (X, X). \\ \end{array}
$$

More generally, one can show that if ! is a p-form and

$$
g \left(\Omega \left(X _ {1}, \ldots , X _ {p - 1}\right), X _ {p}\right) = \omega \left(X _ {1}, \ldots , X _ {p}\right),
$$

then

$$
\hat {\omega} \left(X _ {1}, \ldots , X _ {p}\right) = \sum_ {i = 1} ^ {p} (- 1) ^ {p - i} X _ {i} \wedge \Omega \left(X _ {1}, \ldots , \hat {X} _ {i}, \ldots , X _ {p}\right).
$$

Moreover, note that $\hat { \omega }$ can only vanish when ! vanishes.

Next we focus on understanding Ric $\left( { \hat { h } } \right)$ for .0; 2/-tensors. Given a .0; 2/-tensor h there is a corresponding .1; 1/-tensor called H

$$
h (z, w) = g (H (z), w).
$$

The adjoint of H is denoted $H ^ { * }$ .

Proposition 9.4.11. With that notation

$$
\hat {h} (z, w) = H (z) \wedge w - z \wedge H ^ {*} (w)
$$

and $\hat { h } = 0$ if and only $i f h = \lambda g$ :

Proof. We start by observing that

$$
\begin{array}{l} (L h) (z, w) = - h (L (z), w) - h (z, L (w)) \\ = - g (H (L (z)), w) - g (H (z), L (w)) \\ = - g (L (z), H ^ {*} (w)) - g (L (w), H (z)) \\ = - g (L, z \wedge H ^ {*} (w)) - g (L, w \wedge H (z)) \\ = g (L, H (z) \wedge w - z \wedge H ^ {*} (w)). \\ \end{array}
$$

Note that if $h = \lambda g$ then $H = \lambda I = H ^ { * }$ ; thus $\hat { h } = 0$ : Next assume that $\hat { h } = 0$ : Then Dfor all z; w we have

$$
\begin{array}{l} z \wedge H ^ {*} (H (w)) = H (z) \wedge H (w) \\ = - H (w) \wedge H (z) \\ = - w \wedge H ^ {*} (H (z)) \\ = H ^ {*} (H (z)) \wedge w. \\ \end{array}
$$

But that can only be true if $H ^ { * } H = \lambda ^ { 2 } I$ and $H = \lambda I .$ :

This indicates that we have to control curvatures of the type

$$
g \left(\Re \left(H (z) \wedge w - z \wedge H ^ {*} (w)\right), \overline {{H (z) \wedge w - z \wedge H ^ {*} (w)}}\right).
$$

If H is normal, then it can be diagonalized with respect to an orthonormal basis in the complexified tangent bundle. Assuming that $H \left( z \right) = \lambda z$ and $H \left( w \right) = \mu w$ where $z , w \in \bar { T _ { p } } M \otimes \mathbb { C }$ are orthonormal we obtain

$$
\left(\Re \left(H (z) \wedge w - z \wedge H ^ {*} (w)\right), \overline {{H (z) \wedge w - z \wedge H ^ {*} (w)}}\right) = | \lambda - \bar {\mu} | ^ {2} g \left(\Re (z \wedge w), \overline {{z \wedge w}}\right).
$$

The curvature term $g \left( \Re \left( z \wedge w \right) , { \overline { { z \wedge w } } } \right)$ looks like a complexified sectional R ^ ^curvature and is in fact called the complex sectional curvature. It can be recalculated without reference to the complexification. If we consider $z = x + \mathrm { i } y$ and $w = u + \mathrm { i } v$ , $x , y , u , v \in T M$ , then

$$
\begin{array}{l} g \left(\Re (z \wedge w), \bar {z} \wedge \bar {w}\right) = g \left(\Re (x \wedge u - y \wedge v), x \wedge u - y \wedge v\right) \\ + g \left(\Re (x \wedge v + y \wedge u), x \wedge v + y \wedge u\right) \\ = g \left(\Re (x \wedge u), x \wedge u\right) + g \left(\Re (y \wedge v), y \wedge v\right) \\ + g (\Re (x \wedge v), x \wedge v) + g (\Re (y \wedge u), y \wedge u) \\ - 2 g \left(\Re (x \wedge u), y \wedge v\right) + 2 g \left(\Re (x \wedge v), y \wedge u\right) \\ \end{array}
$$

$$
\begin{array}{l} = R (x, u, u, x) + R (y, v, v, y) + R (x, v, v, x) + R (y, u, u, y) \\ + 2 R (x, u, y, v) - 2 R (x, v, y, u) \\ = R (x, u, u, x) + R (y, v, v, y) + R (x, v, v, x) + R (y, u, u, y) \\ - 2 (R (v, y, x, u) + R (x, v, y, u)) \\ = R (x, u, u, x) + R (y, v, v, y) + R (x, v, v, x) + R (y, u, u, y) \\ + 2 R (y, x, v, u) \\ = R (x, u, u, x) + R (y, v, v, y) + R (x, v, v, x) + R (y, u, u, y) \\ + 2 R (x, y, u, v). \\ \end{array}
$$

The first line in this derivation shows that complex sectional curvatures are nonnegative when $\Re \geq 0$ : Thus we see that it is weaker than working with the R curvature operator. On the other hand it is stronger than sectional curvature.

There are three special cases depending on the dimension of $\mathsf { s p a n } _ { \mathbb { R } } \left\{ x , y , u , v \right\}$ . When $y = v = 0$ f gwe obtain the standard definition of sectional curvature. When D Dx; y; u; v are orthonormal we obtain the so called isotropic curvature, and finally if $u = v$ we get a sum of two sectional curvatures

$$
2 R (x, u, u, x) + 2 R (y, u, u, y)
$$

also called a second Ricci curvature when x; y; u are orthonormal.

The next result is a general version of two separate theorems. Simons and Berger did the case of symmetric tensors and Micallef-Wang the case of 2-forms.

Proposition 9.4.12. Let h be a .0; 2/-tensor such that H is normal. If the complex sectional curvatures are nonnegative, then g $\left( \Re \left( { \hat { h } } \right) , { \hat { h } } \right) \geq 0$ :

Proof. We can use complex orthonormal bases as well as real bases to compute $g \left( \Re \left( \hat { h } \right) , \hat { h } \right)$ : Using that H is normal we obtain a complex orthonormal basis $e _ { i }$ of eigenvectors $H \left( \boldsymbol { e } _ { i } \right) = \lambda _ { i } \boldsymbol { e } _ { i }$ and $H ^ { * } \left( e _ { i } \right) = \bar { \lambda } _ { i } e _ { i }$ . From that we quickly obtain

$$
\begin{array}{l} g \left(\Re (\hat {h}), \hat {h}\right) = \sum g \left(\Re \left(\hat {h} \left(e _ {i}, e _ {j}\right)\right), \overline {{\hat {h} \left(e _ {i} , e _ {j}\right)}}\right) \\ = \sum g \left(\Re \left(H \left(e _ {i}\right) \wedge e _ {j} - e _ {i} \wedge H ^ {*} \left(e _ {j}\right)\right), \overline {{H \left(e _ {i}\right) \wedge e _ {j} - e _ {i} \wedge H ^ {*} \left(e _ {j}\right)}}\right) \\ = \sum \left| \lambda_ {i} - \bar {\lambda} _ {j} \right| ^ {2} g \left(\Re \left(e _ {i} \wedge e _ {j}\right), \overline {{e _ {i} \wedge e _ {j}}}\right). \\ \end{array}
$$

In the special case where H is self-adjoint the eigenvalues/vectors are real and we need only use the real sectional curvatures. When H is skew-adjoint the eigenvectors are purely imaginary unless they correspond to zero eigenvalues. This shows that we must use the isotropic curvatures and also the second Ricci curvatures when M is odd dimensional. However, in this case none of the terms involve real sectional curvatures.

These characterizations can be combined to show

Proposition 9.4.13. $g \left( \Re \left( { \hat { h } } \right) , { \hat { h } } \right) \geq 0$ for all .0; 2/-tensors on $T _ { p } M$ if all complex sectional curvatures on $\mathrm { \dot { \it T } } _ { p } M$ are nonnegative.

Proof. We decompose $h = h _ { s } + h _ { a }$ into symmetric and skew symmetric parts. Then

$$
\begin{array}{l} g \left(\Re (\hat {h}), \hat {h}\right) = g \left(\Re (\hat {h} _ {s}), \hat {h} _ {s}\right) + g \left(\Re (\hat {h} _ {a}), \hat {h} _ {a}\right) + g \left(\Re (\hat {h} _ {s}), \hat {h} _ {a}\right) \\ + g \left(\Re \left(\hat {h} _ {a}\right), \hat {h} _ {s}\right) \\ = g \left(\Re \left(\hat {h} _ {s}\right), \hat {h} _ {s}\right) + g \left(\Re \left(\hat {h} _ {a}\right), \hat {h} _ {a}\right) + 2 g \left(\Re \left(\hat {h} _ {s}\right), \hat {h} _ {a}\right). \\ \end{array}
$$

However,

$$
\begin{array}{l} g \left(\Re \left(\hat {h} _ {s}\right), \hat {h} _ {a}\right) = \sum g \left(\Re \left(\hat {h} _ {s} \left(e _ {i}, e _ {j}\right)\right), \hat {h} _ {a} \left(e _ {i}, e _ {j}\right)\right) \\ = - \sum g \left(\Re \left(\hat {h} _ {s} \left(e _ {j}, e _ {i}\right)\right), \hat {h} _ {a} \left(e _ {j}, e _ {i}\right)\right) \\ = - g \left(\Re \left(\hat {h} _ {s}\right), \hat {h} _ {a}\right). \\ \end{array}
$$

So

$$
g \left(\Re (\hat {h}), \hat {h}\right) = g \left(\Re (\hat {h} _ {s}), \hat {h} _ {s}\right) + g \left(\Re (\hat {h} _ {a}), \hat {h} _ {a}\right)
$$

and the result follows from the previous proposition.

![](images/7b5697b2d9014c4fdf73c174bd19dca7396e8be1961b70e067c22c205d9c13f4.jpg)

# 9.5 Further Study

For more general and complete accounts of the Bochner technique and spin geometry we recommend the two texts [107] and [71]. The latter book also has a complete proof of the Hodge theorem. Other sources for this particular result are [65], [92], and [101].

For other generalizations to manifolds with integral curvature bounds the reader should consult [46]. In there the reader will find a complete discussion on generalizations of the above mentioned results about Betti numbers.

# 9.6 Exercises

EXERCISE 9.6.1. Suppose $( M ^ { n } , g )$ is compact and has $b _ { 1 } = k$ : If $\operatorname { R i c } \geq 0$ ; then the universal covering splits:

$$
\left(\tilde {M}, g\right) = (N, h) \times \left(\mathbb {R} ^ {k}, g _ {\mathbb {R} ^ {n}}\right).
$$

Give an example where $b _ { 1 } < n$ and $( { \tilde { M } } , g ) = ( \mathbb { R } ^ { n } , g _ { \mathbb { R } ^ { n } } )$ .

EXERCISE 9.6.2. Show directly that if $E _ { i }$ is an orthonormal frame and $V \mapsto \nabla _ { V } X$ is symmetric, then $\begin{array} { r } { \sum _ { i } g \left( \nabla _ { E _ { i } } X , \nabla _ { X } E _ { i } \right) = 0 } \end{array}$ without assuming that $E _ { i }$ 7! rare parallel in the direction of X.

EXERCISE 9.6.3. Show that for an oriented Riemannian manifold: $( { \mathrm { i m } } d ^ { k - 1 } ) ^ { \perp } =$ $\ker \delta ^ { k - 1 }$ and $\mathrm { i m } d ^ { k - 1 } \subset \left( \ker \delta ^ { k - 1 } \right) ^ { \perp } \mathrm { i n } \Omega ^ { k } \left( M \right)$ .

EXERCISE 9.6.4. Let $( M ^ { n } , g )$ be a compact Riemannian manifold and $E  M$ a tensor bundle. Let $W ^ { k , 2 } \left( E \right)$ denote the Hilbert space completion of $\Gamma \left( E \right)$ !with square norm $\begin{array} { r } { \sum _ { i = 0 } ^ { k } \left\| \nabla ^ { i } T \right\| _ { 2 } ^ { 2 } , \mathrm { e . g . , i f } T \in W ^ { 1 , 2 } \left( E \right) } \end{array}$ , then T is defined as an element in $L ^ { 2 }$ Dand its derivative $\nabla T$ as an $L ^ { 2 }$ 2tensor that satisfies $( \nabla T , \nabla S ) = ( T , \nabla ^ { * } \nabla S )$ for all $S \in \Gamma \left( E \right)$ r. It follows that $\Gamma \left( E \right) \subset W ^ { k , 2 } \left( E \right)$ r r D r ris dense. The Sobolev inequality 2can be used to show that $\begin{array} { r } { \bigcap _ { k \geq 0 } W ^ { k , 2 } \left( E \right) \ = \ \bigcap _ { k \geq 0 } W ^ { k , p } \left( E \right) } \end{array}$ for all $p \ < \ \infty$ . The  D techniques from section 7.1.5 can easily be adapted to show that a tensor $T \in W ^ { 1 , p }$ is Hölder continuous when $p > n$ (see also [60]). This in turn shows that $\Gamma \left( E \right) =$ $\textstyle \bigcap _ { k \geq 0 } W ^ { k , 2 } \left( E \right)$ .

(1) Show that for all $T \in \Gamma \left( E \right)$ there is a commutation relationship

$$
\nabla^ {*} \nabla (\nabla^ {k} T) - \nabla^ {k} (\nabla^ {*} \nabla T) = \sum_ {i = 0} ^ {k} C _ {i} ^ {k} (\nabla^ {k - i} R \otimes \nabla^ {i} T),
$$

where $C _ { i } ^ { k } \left( \nabla ^ { k - i } R \otimes \nabla ^ { i } T \right)$ is a suitable contraction.

r(2) Assume that $T \in W ^ { 1 , 2 } \left( \dot { E } \right)$ and $T ^ { \prime } \in W ^ { k , 2 } \left( E \right)$ satisfy $( T ^ { \prime } , S ) = ( \nabla T , \nabla S )$ for all $S \in \Gamma ( E ) , { \mathrm { i . e . } }$ ., $\nabla ^ { * } \nabla T = T ^ { \prime }$ 2weakly, show that $T \in W ^ { k + 1 , 2 } \left( E \right)$ r. Hint: Define 2 r rthe weak derivatives $\nabla ^ { l + 1 } T$ 2inductively using a relationship of the form:

$$
\left(\nabla^ {l + 1} T, \nabla^ {l + 1} S\right) = \left(\nabla^ {l} T ^ {\prime}, \nabla^ {l} S\right) + \sum_ {i = 0} ^ {l} \left(C _ {i} ^ {l} \left(\nabla^ {l - i} R \otimes \nabla^ {i} T\right), \nabla^ {l} S\right).
$$

(3) Conclude that if $T ^ { \prime } \in \Gamma \left( E \right)$ , then $T \in \Gamma \left( E \right)$ and $\nabla ^ { * } \nabla T = T ^ { \prime }$ .

EXERCISE 9.6.5. Let $( M ^ { n } , g )$ be a compact Riemannian manifold with diamM $\leq$ $D , \ \Re \ \geq \ k$ , and $E \  \ M$ a tensor bundle with m-dimensional fibers and a R  !Lichnerowicz Laplacian $\Delta _ { L }$ . The goal is to establish the spectral theorem for $\Delta _ { L }$ and as a consequence obtain the orthogonal decomposition $\Gamma \left( E \right) = \ker \Delta _ { L }$ im $\Delta _ { L }$ .

(1) Consider the Hilbert space completion $W ^ { 1 , 2 } \left( E \right)$ of  .E/ as in exercise 9.6.4. Show that the right-hand side in $( \Delta _ { L } T , S ) \ = \ ( \nabla T , \nabla S ) + c ( \operatorname { R i c } \left( T \right) , S )$ is symmetric and well-defined for all $T , S \in W ^ { 1 , 2 } \left( E \right)$ r.

(2) Show that $\begin{array} { r } { \operatorname* { i n f } _ { T \in W ^ { 1 , 2 } , \| T \| _ { 2 } = 1 } \left( \Delta _ { L } T , T \right) > c C k } \end{array}$ , where $k \leq 0$ and C is the constant 2in corollary 9.3.4.

(3) Show that a sequence $T _ { i } ~ \subset ~ W ^ { 1 , 2 } \left( E \right)$ , where $\begin{array} { r l r } { \left\| T _ { i } \right\| _ { 2 } } & { { } = } & { 1 } \end{array}$ and $( \Delta _ { L } T _ { i } , T _ { i } )$  k k Dis bounded, will have an L2-convergent subsequence that is also weakly convergent in $W ^ { 1 , 2 } \left( E \right)$ . Hint: Use theorem 7.1.18.

(4) Consider a closed subspace $V \subset W ^ { 1 , 2 } \left( E \right)$ that is invariant under $\Delta _ { L }$ . Show that the infimum $\begin{array} { r } { \lambda = \operatorname* { i n f } _ { T \in V , \| T \| = 1 } \left( \Delta _ { L } T , T \right) } \end{array}$ is achieved by a $T \in V$ , then use Dexercise 9.6.4 to show that $T \in \Gamma \left( E \right)$ and $\Delta _ { L } T = \lambda T$ 2. Hint: Prove and use that

$$
\| T \| _ {2} ^ {2} + \| \nabla T \| _ {2} ^ {2} \leq \operatorname * {l i m i n f} _ {i \to \infty} \left(\| T _ {i} \| _ {2} ^ {2} + \| \nabla T _ {i} \| _ {2} ^ {2}\right)
$$

if $T _ { i } \to T$ (weak convergence) in $W ^ { 1 , 2 } \left( E \right)$ .

(5) Consider a finite dimensional subspace $V \subset \Gamma \left( E \right)$ that is spanned by eigentensors $T _ { i }$ with $\Delta _ { L } T _ { i } = \lambda _ { i } T _ { i }$ . Show that dim $V \leq m C \left( n , \operatorname* { m a x } _ { i } \lambda _ { i } , c , D ^ { 2 } k \right)$ .   
D(6) Show that all eigenspaces for $\Delta _ { L }$ are finite dimensional and that the set of eigenvalues is discrete. Conclude that they can be ordered $\lambda _ { 1 } < \lambda _ { 2 } < \cdots$ with $\begin{array} { r } { \operatorname* { l i m } _ { i \to \infty } \lambda _ { i } = \infty } \end{array}$ .   
!1 D 1(7) Show that the eigenspaces for $\Delta _ { L }$ are orthogonal and that their direct sum is dense in  .E/.   
(8) Show that  $( E ) = \ker \Delta _ { L }$ im $\Delta _ { L }$ . Hint: Use exercise 9.6.4.

EXERCISE 9.6.6. Let $( M , g )$ be an n-dimensional Riemannian manifold that is isometric to Euclidean space outside some compact subset $K \subset M$ ; i.e., $M - K$ is isometric to $\mathbb { R } ^ { n } - C$ for some compact set $C \subset \mathbb { R } ^ { n }$ : If $\operatorname { R i c } _ { g } \ \geq \ 0$ ; show that $M = \mathbb { R } ^ { n }$   : Hint: Find a metric on the n-torus that is isometric to a neighborhood of $K \subset M$ somewhere and otherwise flat. Alternatively, show that any parallel 1-form on $\mathbb { R } ^ { n } - C$ extends to a harmonic 1-form on M. Then apply Bochner’s formula to show that it must in fact be parallel when $\operatorname { R i c } _ { g } \geq 0$ ; and use this to conclude that the manifold is flat.

EXERCISE 9.6.7. Let $( M , g )$ be an Einstein metric. Show that all harmonic 1-forms are eigen-forms for the connection Laplacian $\nabla ^ { * } \nabla$ .

EXERCISE 9.6.8. Given two vector fields X and Y on $( M , g )$ such that X and Y are symmetric, develop Bochner formulas for Hess ${ \scriptstyle { \frac { 1 } { 2 } } } g \left( X , Y \right)$ and $\Delta \textstyle { \frac { 1 } { 2 } } g \left( X , Y \right)$ :

EXERCISE 9.6.9. For general tensors $s _ { 1 }$ and $s _ { 2 }$ of the same type show in analogy with the formula

$$
\Delta \frac {1}{2} | s | ^ {2} = | \nabla s | ^ {2} - g (\nabla^ {*} \nabla s, s)
$$

that:

$$
\Delta g \left(s _ {1}, s _ {2}\right) = 2 g \left(\nabla s _ {1}, \nabla s _ {2}\right) + g \left(\nabla^ {*} \nabla s _ {1}, s _ {2}\right) + g \left(s _ {1}, \nabla^ {*} \nabla s _ {2}\right).
$$

Use this on forms to develop Bochner formulas for inner products of such sections.

More generally consider the 1-form defined by $\omega \left( v \right) \ = \ g \left( \nabla _ { v } s _ { 1 } , s _ { 2 } \right)$ that represents half of the differential of $g \left( s _ { 1 } , s _ { 2 } \right)$ : Show that

$$
- \delta \omega = g (\nabla s _ {1}, \nabla s _ {2}) - g (\nabla^ {*} \nabla s _ {1}, s _ {2})
$$

$$
d \omega (X, Y) = g (R (X, Y) s _ {1}, s _ {2}) - g (\nabla_ {X} s _ {1}, \nabla_ {Y} s _ {2}) + g (\nabla_ {Y} s _ {1}, \nabla_ {X} s _ {2}).
$$

EXERCISE 9.6.10. Let $( M , g )$ be n-dimensional.

(1) Show that

$$
L \omega = 0
$$

if L is skew-symmetric and $\omega$ is an n-form.

(2) When $n = 2$

$$
L R = 0
$$

for all skew-symmetric L:

(3) For general L

$$
L \mathrm{vol} = \operatorname{tr} (L) \mathrm{vol}.
$$

EXERCISE 9.6.11 (Simons). Let $( M , g )$ be a compact Riemannian manifold with a .0; 2/-tensor field h that is a symmetric Codazzi tensor with constant trace.

(1) Show that if $\sec \geq 0 .$ , then $\nabla h = 0$ :   
(2) Moreover, if sec > 0, then $h = c \cdot g$ for some constant c.   
(3) If the Gauss equations

$$
R (X, Y, Z, W) = h (X, W) h (Y, Z) - h (X, Z) h (Y, W)
$$

are satisfied and the trace of h vanishes, then

$$
\Delta \frac {1}{2} | h | ^ {2} \geq | \nabla h | ^ {2} - | h | ^ {4}.
$$

EXERCISE 9.6.12. Let $( M ^ { n } , g ) \ \ \Phi \ \mathbb { R } ^ { n + 1 }$ be an isometric immersion of a manifold.

(1) Show that the second fundamental form II is a Codazzi tensor.   
(2) Show Liebmann’s theorem: If $( M , g )$ has constant mean curvature and nonnegative second fundamental from, then $( M , g )$ is a constant curvature sphere.

On the other hand, Wente has exhibited immersed tori with constant mean curvature (see Wente’s article in [51]).

EXERCISE 9.6.13 (Berger). Show that a compact manifold with harmonic curvature and nonnegative sectional curvature has parallel Ricci curvature.

EXERCISE 9.6.14. Suppose we have a Killing field K on a closed Riemannian manifold $( M , g )$ : Assume that ! is a harmonic form.

(1) Show that $L _ { K } \omega = 0$ . Hint: Show that $L _ { K } \omega$ is also harmonic.   
(2) Show that $i _ { K } \omega$ Dis closed, but not necessarily harmonic.   
(3) Show that all harmonic forms are invariant under Iso0 .M/.   
(4) Give an example where a harmonic form is not invariant under all of Iso .M/.

EXERCISE 9.6.15. Let $( M , g )$ be a closed Kähler manifold with Kähler form !, i.e., a parallel nondegenerate 2-form. Show

$$
\omega^ {k} = \underbrace {\omega \wedge \cdots \wedge \omega} _ {k \text { times }}
$$

is closed but not exact by showing that $\omega ^ { \frac { \mathrm { d i m } M } { 2 } }$ is proportional to the volume form. Conclude that none of the even homology groups vanish.

EXERCISE 9.6.16. Let $E \to M$ be a tensor bundle.

(1) Let $\Omega ^ { p } \left( M , E \right)$ denote the alternating p-linear maps from TM to E (note that $\Omega ^ { 0 } \left( M , E \right) = \Gamma \left( E \right) )$ . Show that $\Omega ^ { * } \left( M \right)$ acts in a natural way from both left and right on $\Omega ^ { * } \left( M , E \right)$ by wedge product.

(2) Show that there is a natural wedge product

$$
\Omega^ {p} (M, \operatorname{Hom} (E, E)) \times \Omega^ {q} (M, E) \to \Omega^ {p + q} (M, E).
$$

(3) Show that there is a connection dependent exterior derivative

$$
d ^ {\nabla}: \Omega^ {p} (M, E) \to \Omega^ {p + 1} (M, E)
$$

with the property that it satisfies the exterior derivative version of Leibniz’s rule with respect to the above defined wedge products, and such that for $s \in \Gamma \left( E \right)$ we have: $d ^ { \nabla } s = \nabla s$ :

(4) Think of $R \left( X , Y \right) s \in \Omega ^ { 2 }$ .M; Hom .E; E// : Show that:

$$
\left(d ^ {\nabla} \circ d ^ {\nabla}\right) (s) = R \wedge s
$$

for any $s \in \Omega ^ { p } \left( M , E \right)$ and that Bianchi’s second identity can be stated as $d ^ { \nabla } R = 0$ :

# 9.6 Exercises

EXERCISE 9.6.17. If we let $E = T M$ in the previous exercise, then

$$
\Omega^ {1} (M, T M) = \operatorname{Hom} (T M, T M)
$$

will simply consist of all .1; 1/-tensors.

(1) Show that in this case $d ^ { \nabla } s = 0$ if and only if s is a Codazzi tensor.   
D(2) The entire chapter seems to indicate that whenever we have a tensor bundle E and an element $s \in \Omega ^ { p } \left( M , E \right)$ with $d ^ { \nabla } s = 0$ ; then there is a Bochner type 2 Dformula for s: Moreover, when in addition s is “divergence free” and some sort of curvature is nonnegative, then s should be parallel. Can you develop a theory in this generality?   
(3) Show that if X is a vector field, then X is a Codazzi tensor if and only if $R \left( \cdot , \cdot \right) X = 0$ r: Give an example of a vector field such that X is Codazzi but X   D ritself is not parallel. Is it possible to establish a Bochner type formula for exact tensors like $\nabla X = d ^ { \nabla } X$ even if they are not closed?

EXERCISE 9.6.18 (Thomas). Show that in dimensions $n > 3$ the Gauss equations $( { \mathfrak { R } } = S \wedge S )$ imply the Codazzi equations $\left( d ^ { \nabla } S = 0 \right)$ provided detS $\neq 0$ : Hint: use R D ^ D ¤the second Bianchi identity and be very careful with how things are defined. It will also be useful to study the linear map

$$
\operatorname{Hom} \left(\Lambda^ {2} V, V\right)\rightarrow \operatorname{Hom} \left(\Lambda^ {3} V, \Lambda^ {2} V\right),
$$

$$
T \mapsto T \land S
$$

for a linear map $S : V \to V$ : In particular, one can see that this map is injective only when the rank of $S \mathrm { i s } \geq 4$ :