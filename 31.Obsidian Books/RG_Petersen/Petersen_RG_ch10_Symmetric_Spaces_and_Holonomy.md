# Chapter 10 Symmetric Spaces and Holonomy

In this chapter we give an overview of (locally) symmetric spaces and holonomy. Most standard results are proved or at least mentioned. We give a few explicit examples, including the complex projective space, in order to show how one can compute curvatures on symmetric spaces relatively easily. There is a brief introduction to holonomy and the de Rham decomposition theorem. We give a few interesting consequences of this theorem and then proceed to discuss how holonomy and symmetric spaces are related. Finally, we classify all compact manifolds with nonnegative curvature operator.

As we have already seen, Riemann showed that locally there is only one constant curvature geometry. After Lie’s work on “continuous” groups it became clear that one had many more interesting models for geometries. Next to constant curvature spaces, the most natural type of geometry to try to understand is that of (locally) symmetric spaces. One person managed to take all the glory for classifying symmetric spaces; Elie Cartan. He started out in his thesis with cleaning up and correcting Killing’s classification of simple complex Lie algebras and several years later all the simple real Lie algebras. With the help of this and many of his different characterizations of symmetric spaces, Cartan, by the mid 1920s had managed to give a complete (local) classification of all symmetric spaces. This was an astonishing achievement even by today’s deconstructionist standards, not least because Cartan also had to classify the real simple Lie algebras. This in itself takes so much work that most books on Lie algebras give up after having settled the complex case.

After Cartan’s work, a few people worked on getting a better conceptual understanding of some of these new geometries and also on offering a more global classification. Still, not much happened until the 1950s, when people realized a interesting connection between symmetric spaces and holonomy: The de Rham decomposition theorem and Berger’s classification of holonomy groups. It then became clear that almost all holonomy groups occurred for symmetric spaces and consequently gave good approximating geometries to most holonomy groups.

An even more interesting question also came out of this, namely, what about those few holonomy groups that do not occur for symmetric spaces? This is related to the study of Kähler manifolds and some exotic geometries in dimensions 7 and 8. The Kähler case seems to be quite well understood by now, not least because of Yau’s work on the Calabi conjecture. The exotic geometries have only more recently become better understood with D. Joyce’s work.

## 10.1 Symmetric Spaces

There are many ways of representing symmetric spaces. Below we shall see how they can be described as homogeneous spaces, Lie algebras with involutions, or by their curvature tensor.

### 10.1.1 The Homogeneous Description

We say that a Riemannian manifold $( M , g )$ is a symmetric space if for each $p \in M$ the isotropy group $\mathrm { I s o } _ { p }$ contains an isometry $A _ { p }$ such that $D A _ { p } : T _ { p } M \to T _ { p } M$ is the antipodal map $- I$ W !. Since isometries preserve geodesics, any geodesic c .t/ with $c \left( 0 \right) = p$ has the property that: $A _ { p } \circ c \left( t \right) = c \left( - t \right)$ : This quickly shows that D ı D symmetric spaces are homogeneous and hence complete. Specifically, if two points are joined by a geodesic, then the symmetry in the midpoint between these points on the geodesic is an isometry that maps these points to each other. Thus, any two points that can be joined by a broken sequence of geodesics can be mapped to each other by an isometry. This shows that the space is homogeneous.

A homogeneous space $\mathrm { G } / \mathrm { H } = \mathrm { I s o } / \mathrm { I s o } _ { p }$ is symmetric provided that the symmetry $A _ { p }$ Dexists for just one p. In this case we can use $A _ { q } ~ = ~ g \circ A _ { p } \circ g ^ { - 1 }$ , where g is an isometry that takes p to $q .$ D ı ı This means, in particular, that any Lie group G with biinvariant metric is a symmetric space, as $g  g ^ { - 1 }$ is the desired symmetry !around the identity element. Tables 10.1, 10.2, 10.3, 10.4 list some of the important families of homogeneous spaces that are symmetric. They always come in dual pairs of compact and noncompact spaces. There are many more families and several exceptional examples as well.

Table 10.1 Compact Groups 

<table><tr><td>group</td><td>rank</td><td>dim</td></tr><tr><td>SU (n+1)</td><td>n</td><td>n (n+2)</td></tr><tr><td>SO (2n+1)</td><td>n</td><td>n (2n+1)</td></tr><tr><td>Sp (n)</td><td>n</td><td>n (2n+1)</td></tr><tr><td>SO (2n)</td><td>n</td><td>n (2n-1)</td></tr></table>

Table 10.2 Noncompact Analogues of Compact Groups 

<table><tr><td>(complexified group)/group</td><td>rank</td><td>dim</td></tr><tr><td>SL (n+1, C) /SU (n+1)</td><td>n</td><td>n (n+2)</td></tr><tr><td>SO (2n+1, C) /SO (2n+1)</td><td>n</td><td>n (2n+1)</td></tr><tr><td>Sp (n, C) /Sp (n)</td><td>n</td><td>n (2n+1)</td></tr><tr><td>SO (2n, C) /SO (2n)</td><td>n</td><td>n (2n-1)</td></tr></table>

Table 10.3 Compact Homogeneous Spaces 

<table><tr><td>Iso</td><td> $\text{Iso}_p$ </td><td>dim</td><td>rank</td><td>description</td></tr><tr><td>SO (n+1)</td><td>SO (n)</td><td>n</td><td>1</td><td>Sphere</td></tr><tr><td>O (n+1)</td><td>O (n) × {1,-1}</td><td>n</td><td>1</td><td> $\mathbb{R}\mathbb{P}^n$ </td></tr><tr><td>U (n+1)</td><td>U (n) × U (1)</td><td>2n</td><td>1</td><td> $\mathbb{C}\mathbb{P}^n$ </td></tr><tr><td>Sp (n+1)</td><td>Sp (n) × Sp (1)</td><td>4n</td><td>1</td><td> $\mathbb{H}\mathbb{P}^n$ </td></tr><tr><td>F4</td><td>Spin (9)</td><td>16</td><td>1</td><td> $\mathbb{O}\mathbb{P}^2$ </td></tr><tr><td>SO (p+q)</td><td>SO (p) × SO (q)</td><td>pq</td><td>min (p,q)</td><td>Real Grassmannian</td></tr><tr><td>SU (p+q)</td><td>S (U (p) × U (q))</td><td>2pq</td><td>min (p,q)</td><td>Complex Grassmannian</td></tr><tr><td>SU (n)</td><td>SO (n)</td><td>(n2-1)/2</td><td>n-1</td><td> $\mathbb{R}^n$ &#x27;s in  $\mathbb{C}^n$ </td></tr></table>

Table 10.4 Noncompact Homogeneous Spaces 

<table><tr><td>Iso</td><td> $\text{Iso}_p$ </td><td>dim</td><td>rank</td><td>description</td></tr><tr><td>SO (n, 1)</td><td>SO (n)</td><td>n</td><td>1</td><td>Hyperbolic space</td></tr><tr><td>O (n, 1)</td><td>O (n) × {1, -1}</td><td>n</td><td>1</td><td>Hyperbolic  $\mathbb{RP}^n$ </td></tr><tr><td>U (n, 1)</td><td>U (n) × U (1)</td><td>2n</td><td>1</td><td>Hyperbolic  $\mathbb{CP}^n$ </td></tr><tr><td>Sp (n, 1)</td><td>Sp (n) × Sp (1)</td><td>4n</td><td>1</td><td>Hyperbolic  $\mathbb{HP}^n$ </td></tr><tr><td> $F_4^{-20}$ </td><td>Spin (9)</td><td>16</td><td>1</td><td>Hyperbolic  $\mathbb{OP}^2$ </td></tr><tr><td>SO (p, q)</td><td>SO (p) × SO (q)</td><td>pq</td><td>min (p, q)</td><td>Hyperbolic Grassmannian</td></tr><tr><td>SU (p, q)</td><td>S (U (p) × U (q))</td><td>2pq</td><td>min (p, q)</td><td>Complex hyperbolic Grassmannian</td></tr><tr><td>SL (n, R)</td><td>SO (n)</td><td>(n2-1)/2</td><td>n-1</td><td>Euclidean structures on  $\mathbb{R}^n$ </td></tr></table>

Here Spin .n/ is the universal double covering of SO .n/ for $n > 2$ : We also have the following special identities in low dimensions:

$$
\mathrm{SO} (2) = \mathrm{U} (1),
$$

$$
\operatorname{Spin} (3) = \operatorname{SU} (2) = \operatorname{Sp} (1),
$$

$$
\operatorname{Spin} (4) = \operatorname{Spin} (3) \times \operatorname{Spin} (3).
$$

Note that all of the compact examples have sec $\geq 0$ by O’Neill’s formula (see theorem 4.5.3). It also follows from this formula that all the projective spaces (compact and noncompact) have quarter pinched metrics, i.e., the ratio between the smallest and largest sectional curvatures is $\textstyle { \frac { 1 } { 4 } }$ (see also section 4.5.3). These remarks are further justified below.

In the tables there is a column called rank. This is related to the rank of a Lie group as discussed in section 8.3. Here, however, we need a rank concept for more general spaces. The rank of a geodesic $c : \mathbb { R } \to M$ is the dimension of parallel fields E along c such that $R \left( E \left( t \right) , \dot { c } \left( t \right) \right) \dot { c } \left( t \right) = 0$ for all t: The rank of a geodesic P P Dis, in particular, always 1: The rank of a Riemannian manifold is defined as the minimum rank over all of the geodesics in M: For symmetric spaces the rank can be computed from knowledge of Abelian subgroups in Lie groups. For a general manifold there might naturally be metrics with different ranks, but this is actually not so obvious. Is it, for example, possible to find a metric on the sphere of rank $> 1 2 \mathrm { ~ A ~ }$ general remark is that any Cartesian product has rank  2; and also many symmetric spaces have rank $\geq 2$ : It is unclear to what extent other manifolds can also have rank $\geq 2$ : All of the rank 1 symmetric spaces are listed in tables 10.3 and 10.4. The compact ones are also known as CROSSes.

### 10.1.2 Isometries and Parallel Curvature

Another interesting property for symmetric spaces is that they have parallel curvature tensor. This is because the symmetries $A _ { p }$ leave the curvature tensor and its covariant derivative invariant. In particular, we have

$$
D A _ {p} \left(\left(\nabla_ {X} R\right) (Y, Z, W)\right) = \left(\nabla_ {D A _ {p} X} R\right) \left(D A _ {p} Y, D A _ {p} Z, D A _ {p} W\right),
$$

which at p implies

$$
\begin{array}{l} - \left(\nabla_ {X} R\right) (Y, Z, W) = \left(\nabla_ {- X} R\right) (- Y, - Z, - W) \\ = \left(\nabla_ {X} R\right) (Y, Z, W). \\ \end{array}
$$

Thus, $\nabla R = 0$ : This almost characterizes symmetric spaces.

Theorem 10.1.1 (Cartan). $H \left( M , g \right)$ is a Riemannian manifold with parallel curvature tensor, then for each $p \in M$ there is an isometry $A _ { p }$ defined in a neighborhood of p with $D A _ { p } = - I$ on $T _ { p } M$ 2: Moreover, $i f ( M , g )$ is simply connected and complete, D then the symmetry is defined on all of M; and the space is symmetric.

Proof. The global statement follows from the local one using an analytic continuation argument as in the proof of theorem 5.6.7 and the next theorem below. Note that for the local statement we already have a candidate for a map. Namely, if " is so small that $\exp _ { p } : B ( 0 , \varepsilon )  B ( p , \varepsilon )$ is a diffeomorphism, then we can just define $A _ { p } \left( x \right) = - x$ W !in these coordinates. It remains to see why this is an isometry D when we have parallel curvature tensor. Equivalently, we must show that in these coordinates the metric has to be the same at x and x: To this end we switch to polar coordinates and use the fundamental equations relating curvature and the metric. The claim follows if we can prove that the curvature tensor is the same when we go in opposite directions. To check this, first observe that at $p$


$$
R (\cdot , v) v = R (\cdot , - v) (- v).
$$

So the curvatures start out being the same. If @r is the radial field, we also have

$$
(\nabla_ {\partial_ {r}} R) = 0.
$$

Thus, the curvature tensors not only start out being equal, but also satisfy the same simple first-order equation. Consequently, they remain the same as we go equal distance in opposite directions.

A Riemannian manifold with parallel curvature tensor is called a locally symmetric space.

It is worth mentioning that there are left-invariant metrics that are not locally symmetric. The Berger spheres $( \varepsilon \neq 1 )$ and the Heisenberg group do not have ¤parallel curvature tensor. In fact, as they are 3-dimensional they can’t even have parallel Ricci tensor.

With very little extra work we can generalize the above theorem on the existence of local symmetries. Recall that in the discussion about existence of isometries with a given differential prior to theorem 5.6.7 we decided that they could exist only when the spaces had the same constant curvature. However, there is a generalization to symmetric spaces. We know that any isometry preserves the curvature tensor. Thus, if we start with a linear isometry that preserves the curvatures at a point, then we should be able to extend this map in the situation where curvatures are everywhere the same. This is the content of the next theorem.

Theorem 10.1.2 (Cartan). Suppose we have a simply connected symmetric space .M; g/ and a complete locally symmetric space $( N , { \bar { g } } )$ of the same dimension. Given a linear isometry L $T _ { p } M \to T _ { q } N$ such that

$$
L \left(R ^ {g} (x, y) z\right) = R ^ {\bar {g}} (L x, L y) L z
$$

for all $x , y , z \in T _ { p } M$ ; there is a unique Riemannian isometry $F : M \to N$ such that $D _ { p } F = L$ :

Proof. The proof of this is, as in the constant curvature case, by analytic continuation. So we need only find these isometries locally. Given that there is an isometry defined locally, we know that it must look like

$$
F = \exp_ {q} \circ L \circ \exp_ {p} ^ {- 1}.
$$

To see that this indeed defines an isometry, we have to show that the metrics in exponential coordinates are the same via the identification of the tangent spaces by L: As usual the radial curvatures determine the metrics. In addition, the curvatures are parallel and satisfy the same first-order equation. We assume that initially the curvatures are the same at p and q via the linear isometry. But then they must be the same in frames that are radially parallel around these points. Consequently, the spaces are locally isometric.

This result shows that the curvature tensor completely characterizes the symmetric space. It also tells us what the isometry group must be in case the symmetric space is simply connected. This will be investigated further below.

### 10.1.3 The Lie Algebra Description

Finally, we offer a more algebraic description of symmetric spaces. There are many ways of writing homogeneous spaces as quotients ${ \mathrm { G / H } } , { \mathrm { e . g . } }$ .,

$$
S ^ {3} = \mathrm{SU(2)} = \mathrm{SO(4) / SO(3)} = \mathrm{O(4) / O(3)}.
$$

But only one of these, $\mathrm { O } \left( 4 \right) / \mathrm { O } \left( 3 \right)$ ; tells us directly that $S ^ { 3 }$ is a symmetric space. This is because the isometry $A _ { p }$ modulo conjugation lies in $\mathrm { O } \left( 4 \right)$ as it is orientation reversing. In this section we present two related descriptions based on Killing fields and curvatures.

To begin we must understand how the map $A _ { p }$ acts on . The push forward $\left( A _ { p } \right) _ { * }$ preserves Killing fields as $A _ { p }$ isois an isometry so there is a natural map $\left( A _ { p } \right) _ { * } =$ $\sigma _ { p } : { \mathrm { i } } { \mathfrak { s o } } \to { \mathrm { i } } { \mathfrak { s o } }$ .

W iso ! isoThroughout the section let .M; g/ be a symmetric space.

Proposition 10.1.3. Let $p \ \in \ M .$ . The map $\sigma _ { p } = \left( A _ { p } \right)$ defines an involution on 2 D - . The 1-eigenspace is p and the . 1/-eigenspace consists of X such that $\left( \nabla X \right) | _ { p } = 0 .$ .

Proof. Since $A _ { p } ^ { 2 } = i d$ it is clear that also $\sigma _ { p } ^ { 2 } = i d .$ . This shows that is a direct D Dsum decomposition of the . 1/-eigenspaces for $\sigma _ { p }$ iso. Moreover, we have:

$$
\sigma (X) = \left(A _ {p}\right) _ {*} X = D A _ {p} \left(X | _ {A _ {p} ^ {- 1}}\right) = D A _ {p} \left(X | _ {A _ {p}}\right)
$$

and as $A _ { p }$ is an isometry

$$
\left(A _ {p}\right) _ {*} (\nabla_ {V} X) = \nabla_ {\left(A _ {p}\right) _ {*} V} \left(A _ {p}\right) _ {*} X = \nabla_ {\left(A _ {p}\right) _ {*} V} \sigma (X).
$$

At p we know that $D A _ { p } = - I$ so if $\sigma \left( X \right) = X$ , then $X | _ { p } = - X | _ { p }$ , showing that $X \in \mathfrak { i s o } _ { p }$ . Conversely, if $X \in \mathfrak { i s o } _ { p }$ , then also $\sigma \left( X \right) \in \mathfrak { i s o } _ { p }$ j D and at p

$$
\begin{array}{l} \nabla_ {v} \sigma (X) = - \nabla_ {D A _ {p} (v)} \sigma (X) \\ = - D A _ {p} \left(\nabla_ {v} X\right) \\ = \nabla_ {v} X \\ \end{array}
$$

showing that $\sigma \left( X \right) = X$ .


On the other hand, if $\sigma _ { p } \left( X \right) = - X$ , then $\left( \nabla X \right) \mid _ { p } = 0$ since at p

$$
- \nabla_ {v} X = \nabla_ {- v} \sigma_ {p} (X) = \nabla_ {v} X.
$$

Conversely, if $( \nabla X ) \mid _ { p } = 0$ , then $- X = \sigma _ { p } \left( X \right)$ as the Killing fields agree at $p$ and r j D both have vanishing derivative at p.

Recall from proposition 8.1.4 that there is a short exact sequence

$$
0 \to \mathfrak {i s o} _ {p} \to \mathfrak {i s o} \to \mathfrak {t} _ {p} \to 0
$$

where

$$
\mathfrak {t} _ {p} = \left\{X | _ {p} \in T _ {p} M \mid X \in \mathfrak {i s o} \right\}.
$$

As M is homogeneous it follows that $\mathrm { t } _ { p } = T _ { p } M$ and since M is symmetric the $( - 1 )$ - eigenspace for $\sigma _ { p }$ t Dis mapped isomorphically onto $T _ { p } M$ . We can then redefine $\mathrm { t } _ { p }$ as the subspace

$$
\mathfrak {t} _ {p} = \left\{X \in \mathfrak {i s o} \mid (\nabla X) | _ {p} = 0 \right\}.
$$

This gives us the natural decomposition $= \mathrm { t } _ { p } \oplus$ s ${ \mathfrak { o } } _ { p }$ and by evaluating at $p$ the alternate representation

$$
\mathfrak {i s o} \simeq T _ {p} M \oplus \mathfrak {s} _ {p} \subset T _ {p} M \oplus \mathfrak {s o} (T _ {p} M),
$$

where

$$
\mathfrak {s} _ {p} = \left\{\left(\nabla X\right) | _ {p} \in \mathfrak {s o} (T _ {p} M) \mid X \in \mathfrak {i s o} _ {p} \right\}.
$$

This leads to

Proposition 10.1.4. If we identify $\mathfrak { o } \simeq T _ { p } M \oplus \mathfrak { s } _ { p } ,$ , then the Lie algebra structure iso ' ˚ sis determined entirely by the curvature tensor and satisfies:

(1) $H X , Y \in T _ { p } M ,$ then $[ X , Y ] = R \left( X , Y \right) \in { \mathfrak { s } } _ { p }$

(2) $H X \in T _ { p } M$ and $S \in { \mathfrak { s } } _ { p } , t h e n \left[ X , S \right] = - S \left( X \right)$

(3) $I f S , T \in { \mathfrak { s } } _ { p } ,$ then $[ S , T ] = - ( S \circ T - T \circ S ) \in \mathfrak { s } _ { p } .$

Proof. We rely on proposition 8.1.3: For X; Y we have

$$
[ \nabla X, \nabla Y ] (V) + \nabla_ {V} [ X, Y ] = R (X, Y) V.
$$

(1) When X; $Y \in \mathfrak { t } _ { p }$ note that $[ X , Y ] = \nabla _ { Y } X - \nabla _ { X } Y$ vanishes at p so $[ X , Y ] \in \mathfrak { i s o } _ { p }$ . 2 t D r The Lie derivative is then represented by $\left( \nabla \left[ X , Y \right] \right) \mid _ { p } \in { \mathfrak { s } } _ { p }$ 2 iso. To calculate this note that Œ X; Y vanishes at $p$ so $\left( \nabla \left[ X , Y \right] \right) | _ { p } = R \left( X | _ { p } , Y | _ { p } \right)$ .

(2) When $X \in \mathfrak { t } _ { p }$ and $Y \in \mathfrak { i s o } _ { p }$ we have $[ X , Y ] = \nabla _ { Y } X - \nabla _ { X } Y$ which at p reduces to $- \nabla _ { X \mid _ { p } } Y .$ .

r j(3) When $X , Y \in \mathfrak { i s o } _ { p }$ it follows that $[ X , Y ] = \nabla _ { X } Y - \nabla _ { Y } X$ also vanishes at $p .$ Moreover, $\left( \nabla \left[ X , Y \right] \right) \mid _ { p } = - \left[ \nabla X , \nabla Y \right] \mid _ { p } .$ .

We just saw how the Lie algebra structure can be calculated from the curvature, but it also shows that the curvature can be calculated from the Lie algebra structure.

On a Lie algebra the adjoint action is defined as

$$
\operatorname{ad} _ {X}: \mathfrak {g} \to \mathfrak {g}
$$

$$
Y \mapsto \operatorname{ad} _ {X} (Y) = [ X, Y ]
$$

and the Killing form by

$$
B (X, Y) = \operatorname{tr} \left(\operatorname{ad} _ {X} \circ \operatorname{ad} _ {Y}\right).
$$

It is easy to check that the Killing form is symmetric and that adX is skew-symmetric with respect to $B \colon$

$$
B \left(\operatorname{ad} _ {X} Y, Z\right) + B (Y, \operatorname{ad} _ {X} Z) = 0.
$$

Remark 10.1.5. In case of the Lie algebra $\simeq T _ { p } M \oplus { \mathfrak { s } } _ { p }$ the map adS , $S \in { \mathfrak { s } } _ { p }$ iso ' ˚ s W, is also skew-symmetric with respect to the natural inner product

$$
g \left(\left(X _ {1}, S _ {1}\right), \left(X _ {2}, S _ {2}\right)\right) = g \left(X _ {1}, X _ {2}\right) + g \left(S _ {1}, S _ {2}\right) = g \left(X _ {1}, X _ {2}\right) - \operatorname{tr} \left(S _ {1} \circ S _ {2}\right).
$$

Thus

$$
B (S, S) = \operatorname{tr} \left(\mathrm{ad} _ {S} \circ \mathrm{ad} _ {S}\right) = - \operatorname{tr} \left(\mathrm{ad} _ {S} \circ \left(\mathrm{ad} _ {S}\right) ^ {*}\right) \leq 0.
$$

Moreover, if $B \left( S , S \right) = 0$ , then $\mathrm { a d } _ { S } = 0$ which in turn implies that $S = 0$ since $\mathrm { a d } _ { S } \left( X \right) = \left[ S , X \right] = S \left( X \right)$ .

The next result tells us how to calculate the curvature tensor algebraically and is very important for the next two sections.

Theorem 10.1.6. If $X , Y , Z \in \mathfrak { t } _ { p } ,$ then $R \left( X , Y \right) Z ~ = ~ \left[ Z , \left[ X , Y \right] \right]$ at p: In Lie algebraic language on $\simeq T _ { p } M \oplus { \mathfrak { s } } _ { p }$ :

$$
R (X, Y) Z = - \mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} (X),
$$

$$
\operatorname{Ric} (Y, Z) = - \frac {1}{2} B (Z, Y).
$$


Moreover, in case $\operatorname { R i c } = \lambda g$ , it follows that the curvature operator has the same sign as $\lambda .$ .

Proof. For completeness we offer a proof that does not rely on the previous proposition. Instead it uses proposition 8.1.3: For $X , Y , Z \in$ we have $\nabla _ { X , Y } ^ { 2 } Z =$ $- R \left( Z , X \right) Y .$ . If we additionally assume $X , Y , Z \in { \mathfrak { t } } _ { p }$ , then $\nabla X = \nabla Y = \nabla Z = 0$ Dat p. Bianchi’s first identity then implies

$$
\begin{array}{l} R (X, Y) Z = R (X, Z) Y - R (Y, Z) X \\ = - \nabla_ {Z} \nabla_ {Y} X + \nabla_ {Z} \nabla_ {X} Y \\ = \nabla_ {Z} [ X, Y ] \\ = [ Z, [ X, Y ] ]. \\ \end{array}
$$

For the Ricci tensor formula first note that the operator $\mathbf { a d } _ { Z } \circ \mathbf { a d } _ { Y }$ leaves the decomposition $\simeq T _ { p } M \oplus { \mathfrak { s } } _ { p }$ invariant since each of $\mathrm { a d } _ { Z }$ and $\operatorname { a d } _ { Y }$ interchange the iso ' ˚ ssubspaces in this factorization. With this in mind we obtain

$$
\begin{array}{l} \operatorname{tr} \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} | _ {T _ {p} M}\right) = \operatorname{tr} \left(\mathrm{ad} _ {Z} | _ {\mathfrak {s} _ {p}} \circ \mathrm{ad} _ {Y} | _ {T _ {p} M}\right) \\ = \operatorname{tr} \left(\mathrm{ad} _ {Y} | _ {T _ {p} M} \circ \mathrm{ad} _ {Z} | _ {\mathfrak {s} _ {p}}\right) \\ = \operatorname{tr} \left(\mathrm{ad} _ {Y} \circ \mathrm{ad} _ {Z} | _ {\mathfrak {s} _ {p}}\right). \\ \end{array}
$$

Using symmetry of B this gives:

$$
B (Z, Y) = \operatorname{tr} \left(\mathrm{ad} _ {Y} \circ \mathrm{ad} _ {Z} | _ {\mathfrak {s} _ {p}}\right) + \operatorname{tr} \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} | _ {T _ {p} M}\right) = 2 \operatorname{tr} \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} | _ {T _ {p} M}\right).
$$

The formula for the curvature tensor then shows that

$$
\operatorname{Ric} (Z, Y) = - \operatorname{tr} \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} | _ {T _ {p} M}\right) = - \frac {1}{2} B (Z, Y).
$$

In case ${ \mathrm { R i c } } = \lambda g , \lambda \neq 0$ it follows that

$$
\begin{array}{l} g \left(R (X, Y) Z, W\right) | _ {p} = - g \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} (X), W\right) | _ {p} \\ = - \frac {1}{\lambda} \operatorname{Ric} \left(\mathrm{ad} _ {Z} \circ \mathrm{ad} _ {Y} (X), W\right) | _ {p} \\ = \frac {1}{2 \lambda} B \left(\operatorname{ad} _ {Z} \circ \operatorname{ad} _ {Y} (X), W\right) \\ = - \frac {1}{2 \lambda} B \left(\operatorname{ad} _ {Y} (X), \operatorname{ad} _ {Z} (W)\right). \\ = - \frac {1}{2 \lambda} B ([ X, Y ], [ W, Z ]) \\ = \frac {1}{2 \lambda} \operatorname{tr} \left(\operatorname{ad} _ {[ X, Y ]} \circ \left(\operatorname{ad} _ {[ W, Z ]}\right) ^ {*}\right). \\ \end{array}
$$

The diagonal terms for the curvature operator then become

$$
\begin{array}{l} g \left(\Re \left(\sum X _ {i} \wedge Y _ {i}\right), \left(\sum X _ {i} \wedge Y _ {i}\right)\right) | _ {p} = \sum g \left(R \left(X _ {i}, Y _ {i}\right) Y _ {j}, X _ {j}\right) | _ {p} \\ = - \frac {1}{2 \lambda} \sum B \left(\mathrm{ad} _ {X _ {i}} \left(Y _ {i}\right), \mathrm{ad} _ {X _ {j}} \left(Y _ {j}\right)\right) \\ = - \frac {1}{2 \lambda} B \left(\sum \operatorname{ad} _ {X _ {i}} \left(Y _ {i}\right), \sum \operatorname{ad} _ {X _ {i}} \left(Y _ {i}\right)\right). \\ \end{array}
$$

Since $\begin{array} { r l r } { \sum \mathrm { a d } _ { Y _ { i } } \left( X _ { i } \right) } & { { } \in } & { \mathfrak { s } _ { p } } \end{array}$ it follows from remark 10.1.5 that $B \left( \sum \mathrm { a d } _ { X _ { i } } \left( Y _ { i } \right) \right.$ ; $\sum \mathrm { a d } _ { X _ { i } } \left( Y _ { i } \right) ) ~ \leq ~ 0$ 2 s. Thus the eigenvalues of have the same sign as the Einstein constant.

In case Ric 0 corollary 8.2.5 implies that M is flat in the more general case of Dhomogeneous spaces.

Note that the formula is similar to the one that was developed for biinvariant metrics in proposition 4.4.2. However, while left-invariant fields on a Lie group are Killing fields as long as the metric is right-invariant, they generally don’t have vanishing covariant derivative at the identity.

We can now give a slightly more efficient Lie algebra structure of a symmetric space. Suppose $( M , g )$ is a symmetric space and $p \in M$ . We define a bracket operation on $\mathfrak { R } _ { p } = T _ { p } M \oplus \mathfrak { s o } \left( T _ { p } M \right)$ by

$$
\begin{array}{l} [ X, Y ] = R _ {X, Y} \in \mathfrak {s o} (T _ {p} M) \text {for} X, Y \in T _ {p} M, \\ - [ S, X ] = [ X, S ] = S (X) \in T _ {p} M \text {   for   } X \in T _ {p} M \text {   and   } S \in \mathfrak {s o} (T _ {p} M), \\ \left[ S, S ^ {\prime} \right] = - \left(S \circ S ^ {\prime} - S ^ {\prime} \circ S\right) \in \mathfrak {s o} \left(T _ {p} M\right) \text {   for   } S, S ^ {\prime} \in \mathfrak {s o} \left(T _ {p} M\right). \\ \end{array}
$$

This bracket will in general not satisfy the Jacobi identity on triples that involve precisely two elements from $T _ { p } M$

$$
\begin{array}{l} [ S, [ X, Y ] ] + [ Y, [ S, X ] ] + [ X, [ Y, S ] ] \\ = - S \circ R _ {X, Y} + R _ {X, Y} \circ S - R _ {Y, S (X)} + R _ {X, S (Y)} \\ = - S \circ R _ {X, Y} + R _ {X, Y} \circ S + R _ {S (X), Y} + R _ {X, S (Y)}. \\ \end{array}
$$

But the other possibilities for the Jacobi identity do hold. When the triple involves zero or one element from $T _ { p } M$ this is straightforward, while if all three are from $T _ { p } M$ it follows from the Bianchi identity

$$
\begin{array}{l} 0 = R _ {X, Y} Z + R _ {Z, X} Y + R _ {Y, Z} X \\ = [ Z, [ X, Y ] ] + [ Y, [ Z, X ] ] + [ X, [ Y, Z ] ]. \\ \end{array}
$$

Fortunately we have the following modification of theorem 10.1.2.


Corollary 10.1.7. Let $( M , g )$ be a simply connected symmetric space. $H \ S \ \in$ 50 $\left( T _ { p } M \right)$ , then $S \in { \mathfrak { s } } _ { p }$ if and only if for all X; $Y \in T _ { p } M$

$$
- S \circ R _ {X, Y} + R _ {X, Y} \circ S + R _ {S (X), Y} + R _ {X, S (Y)} = 0.
$$

Proof. We start by assuming that $Z \in \mathfrak { i s o } _ { p }$ and $S = \left( \nabla Z \right) \vert _ { p }$ . Since $Z$ is a Killing field we have $L _ { Z } R = 0$ . Since $\left[ V , Z \right] | _ { p } = S \left( V \right)$ Dfor all $V \in T _ { p } M$ this implies that

$$
\begin{array}{l} 0 = (L _ {Z} R) _ {X, Y} V \\ = - S \left(R _ {X, Y} V\right) + R _ {X, Y} S (V) + R _ {S (X), Y} V + R _ {X, S (Y)} V. \\ \end{array}
$$

The converse is proven using theorem 10.1.2 by constructing the flow of the Killing field corresponding to $S \in \mathfrak { s o } \left( T _ { p } M \right)$ . In $T _ { p } M$ construct the isometric flow 2 sofor S. Check that the assumption about S implies that the isometries in this flow satisfy theorem 10.1.2 and then conclude that we obtain a global flow on M. This flow will then generate the desired Killing field.

Let ${ \mathfrak { r } } _ { p } \subset { \mathfrak { s } } _ { p }$ be the Lie algebra generated by the skew-symmetric endomorphisms $R _ { X , Y } \in \mathfrak { s o } \left( T _ { p } M \right)$ : We have basically established the following useful relationship 2 sobetween the curvature tensor and Killing fields on a symmetric space.

Corollary 10.1.8. Let $( M , g )$ be a simply connected symmetric space. The bracket structure on $\Re _ { p }$ makes $T _ { p } M \oplus { \mathfrak { s } } _ { p }$ into a Lie algebra with subalgebra ${ \mathfrak { c } } _ { p } = T _ { p } M \oplus { \mathfrak { r } } _ { p } .$ . In fact $T _ { p } M \oplus { \mathfrak { s } } _ { p }$ ˚ sis characterized as the maximal Lie algebra: ${ \mathfrak { c } } _ { p } \subset T _ { p } M \oplus { \mathfrak { s } } _ { p } \subset$ $\mathrm { N } _ { \mathfrak { R } _ { p } } \left( \mathfrak { c } _ { p } \right)$ ˚ s, where $\mathrm { N } _ { \mathfrak { R } _ { p } } \left( \mathfrak { c } _ { p } \right)$ is the normalizer of ${ \mathfrak { c } } _ { p }$ in $\Re _ { p } .$ c  ˚ s . Moreover, the Lie algebra cinvolution on $T _ { p } M \oplus { \mathfrak { s } } _ { p }$ (and its restriction on ${ \mathfrak { c } } _ { p } )$ R has $T _ { p } M$ as the . 1/-eigenspace and ${ \mathfrak { s } } _ { p }$ ˚ sas the 1-eigenspace.

Proof. We saw in the above corollary that any subalgebra of ${ \mathfrak { k } } \subset { \mathfrak { s o } } \left( T _ { p } M \right)$ such that $T _ { p } M \oplus \mathfrak { k } \subset \mathfrak { R } _ { p }$ k  sobecomes a Lie algebra (i.e., also satisfies the Jacobi identity) must ˚ k  Rbe contained in $T _ { p } M \oplus { \mathfrak { s } } _ { p }$ . We also saw that $T _ { p } M \oplus { \mathfrak { s } } _ { p } \subset \mathrm { N } _ { \mathfrak { R } _ { p } } \left( { \mathfrak { c } } _ { p } \right)$ .

We are now ready to attempt to reverse the construction so as to obtain symmetric spaces from suitable Lie algebras. Assume we have a Lie algebra with a Lie algebra involution $\sigma : { \mathfrak { g } }  { \mathfrak { g } }$ . First decompose ${ \mathfrak { g } } = { \mathfrak { t } } \oplus { \mathfrak { t } }$ gwhere  is the . 1/- W g ! g g D t ˚ k t eigenspace for  and is the 1-eigenspace for . Observe that is a Lie subalgebra as

$$
\begin{array}{l} \sigma [ X, Y ] = [ \sigma (X), \sigma (Y) ] \\ = [ X, Y ]. \\ \end{array}
$$

Similarly, $[ \mathfrak { k } , \mathfrak { t } ] \subset \mathfrak { t }$ and $[ \mathrm { t , t } ] \subset \mathsf { t } .$ .

k t  t t t  kSuppose further that there is a connected compact Lie group K with Lie algebra such that the Lie bracket action of on comes from an action of K on : In case k k t tK is simply connected this will always be the case. Compactness of K allows us to choose a Euclidean metric on making the action of K isometric. It follows that the decomposition ${ \mathfrak { g } } = \mathbf { t } \oplus { \mathfrak { k } }$ tis exactly of the type $\mathfrak { o } = \mathrm { t } _ { p } \oplus \mathrm { i } \mathfrak { s o } _ { p }$ . Next pick a biinvariant metric on K so that ${ \mathfrak { g } } = { \mathfrak { t } } \oplus { \mathfrak { k } }$ is an orthogonal decomposition. Finally, if we can g Dalso choose a Lie group $\mathbf { G } \supset \mathbf { K }$ whose Lie algebra is , then we have constructed a Riemannian manifold $\mathrm { G } / \mathrm { K }$ g: To make it symmetric we need to be able to find an involution $A _ { p }$ on $\mathrm { G } / \mathrm { K }$ . When G is simply connected  will be the differential of a Lie group involution $A : \mathbf { G }  \mathbf { G }$ that is the identity on K. This defines the desired involution on $\mathrm { G } / \mathrm { K }$ W ! that fixes the point $p = \mathsf { K }$ .

DIt rarely happens that all of the Lie groups in play are simply connected or even connected. Nevertheless, the constructions can often be verified directly. Without assumptions about connectedness of the groups there is a long exact sequence:

$$
\pi_ {1} (\mathrm{K}) \rightarrow \pi_ {1} (\mathrm{G}) \rightarrow \pi_ {1} (\mathrm{G} / \mathrm{K}) \rightarrow \pi_ {0} (\mathrm{K}) \rightarrow \pi_ {0} (\mathrm{G}) \rightarrow \pi_ {0} (\mathrm{G} / \mathrm{K}) \rightarrow 1,
$$

where $\pi _ { 0 }$ denotes the set of connected components. As K and G are Lie groups these spaces are in fact groups. From this sequence it follows that $\mathrm { G } / \mathrm { K }$ is connected and simply connected if $\pi _ { 0 } ( \mathbf { K } )  \pi _ { 0 } ( \mathbf { G } )$ is an isomorphism and $\pi _ { 1 } ( \mathbf { K } )  \pi _ { 1 } ( \mathbf { G } )$ is surjective.

This algebraic approach will in general not immediately give us the isometry group of the symmetric space. For Euclidean space we can, aside from the standard way using ${ \mathfrak { g } } = { \mathfrak { i } } { \mathfrak { s } } { \mathfrak { o } }$ , also simply use ${ \mathfrak { g } } = \mathbb { R } ^ { n }$ and let the involution be multiplication g D isoby 1 on all of : For $S ^ { 3 } = \mathrm { O } \left( 4 \right) / \mathrm { O } \left( 3 \right)$ ; we see that the algebraic approach can  g Dalso lead us to the description $S ^ { 3 } = \mathrm { S p i n } \left( 4 \right) / \mathrm { S p i n } \left( 3 \right)$ : However, as any Lie algebra Ddescription can be used to calculate the curvature, corollary 10.1.8 will in principle allow us to determine .

isoIt is important to realize that a Lie algebra ; in itself, does not give rise to a gsymmetric space. The involution is an integral part of the construction and does not necessarily exist on a given Lie algebra. The map $- i d$ can, for instance, not be used, as it does not preserve the bracket. Rather, it is an anti-automorphism. This is particularly interesting if comes from a Lie group G with biinvariant metric. There the involution $A _ { e } \left( g \right) = g ^ { - 1 }$ is an isometry and makes G a symmetric space. But it’s Ddifferential on is an anti-automorphism. Instead the algebraic description of G as ga symmetric space comes from using ${ \mathfrak { g } } \times { \mathfrak { g } }$ with $\sigma \left( X , Y \right) = \left( Y , X \right)$ : This will be investigated in the next section.

## 10.2 Examples of Symmetric Spaces

We explain how some of the above constructions work in the concrete case of the Grassmann manifold and its hyperbolic counterpart. We also look at complex Grassmannians, but there we restrict attention to the complex projective space. Finally, we briefly discuss the symmetric space structure of SL $\left( n \right) / { \cal { S } } \mathrm { { O } } \left( n \right)$ : After these examples we give a formula for the curvature tensor on compact Lie groups with biinvariant metrics and their noncompact counter parts.

Throughout we use the convention that for X; $Y \in \mathbf { M a t } _ { k \times l }$

$$
\langle X, Y \rangle = \operatorname{tr} \left(X ^ {*} Y\right) = \overline {{\operatorname{tr} \left(X Y ^ {*}\right)}}
$$

with the conjugation only being relevant when the entries are complex. This inner product is invariant under the natural action of $\mathrm { O } \left( k \right) \times \mathrm { O } \left( l \right)$ on ${ \bf M a t } _ { k \times l }$ defined by:

$$
\mathrm{O} (k) \times \mathrm{O} (l) \times \mathrm{Mat} _ {k \times l} \rightarrow \mathrm{Mat} _ {k \times l},
$$

$$
(A, B, X) \mapsto A X B ^ {- 1} = A X B ^ {*}
$$

since

$$
\begin{array}{l} \left\langle O _ {1} X O _ {2}, O _ {1} Y O _ {2} \right\rangle = \operatorname{tr} \left(O _ {2} ^ {*} X ^ {*} O _ {1} ^ {*} O _ {1} Y O _ {2}\right) \\ = \operatorname{tr} \left(O _ {2} ^ {*} X ^ {*} Y O _ {2}\right) \\ = \operatorname{tr} \left(O _ {2} O _ {2} ^ {*} X ^ {*} Y\right) \\ = \langle X, Y \rangle . \\ \end{array}
$$

This allows us to conclude that the metrics we study can be extended to the entire space via an appropriate transitive action whose isotropy is a subgroup of the action by $\mathrm { O } \left( k \right) \times \mathrm { O } \left( l \right)$ on ${ \bf M a t } _ { k \times l }$ .

\- Theorem 10.1.6 is used to calculate the curvatures in specific examples and the relevant Killing forms are calculated in exercise 10.5.6.

### 10.2.1 The Compact Grassmannian

First consider the Grassmannian of oriented k-planes in $\mathbb { R } ^ { k + l }$ , denoted by $M \ =$ $\tilde { \mathbf { G } } _ { k } \left( \mathbb { R } ^ { k + l } \right)$ . Each element in M is a k-dimensional subspace of $\mathbb { R } ^ { k + l }$ Dtogether with an orientation, $\mathrm { e . g . , } \tilde { \mathrm { G } } _ { 1 } \left( \mathbb { R } ^ { n + 1 } \right) = S ^ { n }$ . We shall assume that we have the orthogonal splitting $\mathbb { R } ^ { k + l } = \bar { \mathbb { R } } ^ { k } \oplus \bar { \mathbb { R } ^ { l } }$ D; where the distinguished element $p = \mathbb { R } ^ { k }$ takes up the first Dk coordinates in $\mathbb { R } ^ { k + l }$ Dand is endowed with its natural positive orientation.

Let us first identify M as a homogeneous space. We use that $\mathrm { O } \left( k + l \right)$ acts on $\mathbb { R } ^ { k + l }$ C: If a k-dimensional subspace has the positively oriented orthonormal basis $e _ { 1 } , \ldots , e _ { k }$ , then the image under $O \in \mathrm { O } \left( k + l \right)$ will have the positively oriented orthonormal basis $O e _ { 1 } , \ldots O e _ { k }$ 2 C. This action is clearly transitive. The isotropy group is SO $( k ) \times \mathbf { O } \left( l \right) \subset \mathbf { O } \left( k + l \right)$ :

\- The tangent space at $p = \mathbb { R } ^ { k }$ is naturally identified with the space of $k \times l$ matrices ${ \bf M a t } _ { k \times l }$ D, or equivalently, with $\mathbb { R } ^ { k } \otimes \mathbb { R } ^ { l }$ -: To see this, just observe that any k-dimensional subspace of $\mathbf { \mathbb { R } } ^ { k + l }$ that is close to $\mathbb { R } ^ { k }$ can be represented as a linear graph over $\mathbb { R } ^ { k }$ with values in the orthogonal complement $\mathbb { R } ^ { l }$ : The isotropy action of $\mathrm { S O } \left( k \right) \times \mathrm { O } \left( l \right)$ on ${ \bf M a t } _ { k \times l }$ is:

$$
\mathrm{SO} (k) \times \mathrm{O} (l) \times \mathrm{Mat} _ {k \times l} \rightarrow \mathrm{Mat} _ {k \times l},
$$

$$
(A, B, X) \mapsto A X B ^ {- 1} = A X B ^ {t}.
$$

If we define X to be the matrix that is 1 in the .1; 1/ entry and otherwise zero, then $A X B ^ { t } = A _ { 1 } \left( B _ { 1 } \right) ^ { t }$ ; where $A _ { 1 }$ is the first column of A and $B _ { 1 }$ is the first column of B. DThus, the orbit of X; under the isotropy action, generates a basis for ${ \bf M a t } _ { k \times l }$ but does not cover all of the space. This is an example of an irreducible action on Euclidean space that is not transitive on the unit sphere. The representation, when seen as acting on $\mathbb { R } ^ { k } \otimes \mathbb { R } ^ { l }$ ; is denoted by SO $( k ) \otimes \mathbf { O } \left( l \right)$ :

˝ ˝To see that M is a symmetric space we have to show that the isotropy group contains the required involution. On the tangent space $T _ { p } M = \mathbf { M a t } _ { k \times l }$ it is supposed to act as 1: Thus, we have to find $( A , B ) \in \mathrm { S O } \left( k \right) \times \dot { \mathrm { O } } \left( l \right)$ D such that for all X;

$$
A X B ^ {t} = - X.
$$

Clearly, we can just set

$$
A = I _ {k},
$$

$$
B = - I _ {l}.
$$

Depending on k and l; other choices are possible, but they will act in the same way.

We have now exhibited M as a symmetric space without using the isometry group of the space. In fact SO .k l/ is a covering of the isometry group, although that Crequires some work to prove. But we have found a Lie algebra description with

$$
\mathfrak {s o} (k + l) \subset \mathfrak {i s o},
$$

$$
\mathfrak {s o} (k) \times \mathfrak {s o} (l) \subset \mathfrak {i s o} _ {p},
$$

and an involution that fixes $( k ) \times { \mathfrak { s o } } ( l )$ .

so - soWe shall use the block decomposition of matrices in $( k + l )$ :

$$
X = \left( \begin{array}{c c} X _ {1} & B \\ - B ^ {t} & X _ {2} \end{array} \right),   X _ {1} \in \mathfrak {s o} (k)  ,   X _ {2} \in \mathfrak {s o} (l)  ,   B \in \operatorname{Mat} _ {k \times l}.
$$

If

$$
\mathfrak {t} _ {p} = \left\{\left( \begin{array}{c c} 0 & B \\ - B ^ {t} & 0 \end{array} \right) | B \in \mathrm{Mat} _ {k \times l} \right\},
$$

then we have an orthogonal decomposition:

$$
\mathfrak {s o} (k + l) = \mathfrak {t} _ {p} \oplus \mathfrak {s o} (k) \oplus \mathfrak {s o} (l),
$$

where $\mathrm { t } _ { p } = T _ { p } M$ : Note that $\mathrm { t } _ { p }$ consists of skew-symmetric matrices so

$$
\langle X, Y \rangle = \operatorname{tr} \left(X ^ {t} Y\right) = - \operatorname{tr} (X Y) = - \frac {1}{k + l - 2} B (X, Y).
$$

This will be our metric on $\mathrm { t } _ { p }$ and tells us that $\textstyle \mathrm { R i c } = { \frac { k + l - 2 } { 2 } } g$ and

$$
\langle R (X, Y) Y, X \rangle = - \frac {1}{k + l - 2} B ([ X, Y ], [ X, Y ]) = | [ X, Y ] | ^ {2} \geq 0.
$$

When $k = 1$ or $l = 1$ ; it is easy to see that one gets a metric of constant positive D Dcurvature. Otherwise, the metric will have many zero sectional curvatures.

The calculations also show that in fact ${ \mathfrak { r } } _ { p } = { \mathfrak { s o } } \left( k \right) \oplus$ .l/ and corollary 10.1.8 can be used to show that $\mathfrak { r } = \mathfrak { s o } \left( k + l \right)$ .

### 10.2.2 The Hyperbolic Grassmannian

Next we consider the hyperbolic analogue. In the Euclidean space $\mathbb { R } ^ { k , l }$ we use, instead of the positive definite inner product $v ^ { t } \cdot w$ ; the quadratic form:

$$
\begin{array}{l} v ^ {t} I _ {k, l} w = v ^ {t} \left( \begin{array}{c c} I _ {k} & 0 \\ 0 & - I _ {l} \end{array} \right) w \\ = \sum_ {i = 1} ^ {k} v _ {i} w _ {i} - \sum_ {i = k + 1} ^ {k + l} v _ {i} w _ {i}. \\ \end{array}
$$

The group of linear transformations that preserve this form is denoted by $\mathrm { ~ O ~ } ( k , l )$ : These transformations are defined by the relation

$$
X \cdot I _ {k, l} \cdot X ^ {t} = I _ {k, l}.
$$

Note that if $k , l \ > \ 0$ ; then $\mathrm { ~ O ~ } ( k , l )$ is not compact. But it clearly contains the (maximal) compact subgroup $\mathrm { O } \left( k \right) \times \mathrm { O } \left( l \right)$ :

The Lie algebra  .k; l/ of $\mathrm { ~ O ~ } ( k , l )$ consists of the matrices satisfying

$$
Y \cdot I _ {k, l} + I _ {k, l} \cdot Y ^ {t} = 0.
$$

If we use the same block decomposition for Y as for $I _ { k , l }$ , then

$$
Y = \left( \begin{array}{c c} Y _ {1} & B \\ B ^ {t} & Y _ {2} \end{array} \right),   Y _ {1} \in \mathfrak {s o} (k)  ,   Y _ {2} \in \mathfrak {s o} (l)  ,   B \in \operatorname{Mat} _ {k \times l}.
$$

Now consider only those (oriented) k-dimensional subspaces of $\mathbb { R } ^ { k , l }$ on which this quadratic form generates a positive definite inner product. This space is the hyperbolic Grassmannian $M = \bar { \tilde { G } } _ { k } \left( \mathbb { R } ^ { k , l } \right)$ : The selected point is as before $p = \mathbb { R } ^ { k }$ : DOne can easily see that topologically: $\tilde { G } _ { k } \left( \mathbb { R } ^ { k , l } \right)$ is an open subset of $\tilde { G } _ { k } \left( \mathbb { R } ^ { k + l } \right)$ D: The metric on this space is another story, however. Clearly, $\mathrm { ~ O ~ } ( k , l )$ acts transitively on

M; and those elements that fix p are of the form $\mathbf { S } 0 \left( k \right) \times \mathbf { O } \left( l \right)$ : One can, as before, -find the desired involution, and thus exhibit M as a symmetric space. Again some of these elements act trivially, but at the Lie algebra level this makes no difference. Thus, we have

$$
\mathfrak {s o} (k, l) = \mathfrak {t} _ {p} \oplus \mathfrak {s o} (k) \oplus \mathfrak {s o} (l),
$$

where

$$
\mathfrak {t} _ {p} = \left\{\left( \begin{array}{c c} 0 & B \\ B ^ {t} & 0 \end{array} \right) | B \in \operatorname{Mat} _ {k \times l} \right\}.
$$

This time, however, $\mathrm { t } _ { p }$ consists of symmetric matrices so

$$
\langle X, Y \rangle = \operatorname{tr} \left(X ^ {t} Y\right) = \operatorname{tr} (X Y) = \frac {1}{k + l - 2} B (X, Y).
$$

This will be our metric on $\mathrm { t } _ { p }$ . Thus $\begin{array} { r } { \operatorname { R i c } = - \frac { k + l - 2 } { 2 } g } \end{array}$ and

$$
\langle R (X, Y) Y, X \rangle = \frac {1}{k + l - 2} B ([ X, Y ], [ X, Y ]) = - | [ X, Y ] | ^ {2} \leq 0.
$$

This is exactly the negative of the expression we got in the compact case. Hence, the hyperbolic Grassmannians have nonpositive curvature. When $l = 1$ ; we have reconstructed the hyperbolic space together with its isometry group.

Again it follows that ${ \mathfrak { r } } _ { p } = { \mathfrak { s o } } \left( k \right) \oplus { \mathfrak { s o } } \left( l \right)$ and $\mathfrak { o } = \mathfrak { s o } \left( k , l \right)$ .

### 10.2.3 Complex Projective Space Revisited

We view the complex projective space as a complex Grassmannian. Namely, let $M \ = \ \mathbb { C P } ^ { n } \ = \ G _ { 1 } \left( \mathbb { C } ^ { n + 1 } \right)$ , i.e., the complex lines in $\mathbb { C } ^ { n + 1 }$ : More generally one Dcan consider $G _ { k } \left( \mathbb { C } ^ { k + l } \right)$ and the hyperbolic counterparts $G _ { k } \left( \mathbb { C } ^ { k , l } \right)$ of space-like subspaces. We leave this to the reader.

The group $\mathrm { U } \left( n + 1 \right) \subset \mathrm { S O } \left( 2 n + 2 \right)$ consists of those orthogonal transforma-C  Ctions that also preserve the complex structure. If we use complex coordinates, then the Hermitian metric on $\mathbb { C } ^ { n + 1 }$ can be written as $z ^ { * } w = \textstyle \sum \bar { z } _ { i } w _ { i } .$ , where as usual, $A ^ { * } = \bar { A } ^ { t }$ Dis the conjugate transpose. Thus, the elements of $\mathrm { ~ U ~ } ( n + 1 )$ satisfy $A ^ { - 1 } \ = \ A ^ { * }$ N. As with the Grassmannian, U $( n + 1 )$ Cacts on M; but this time, all Dof the transformations of the form $a I _ { ; }$ ; where $\begin{array} { l l l } { { a \bar { a } } } & { { = } } & { { 1 } } \end{array}$ ; act trivially. Thus, we restrict attention to $\mathrm { S U } \left( n + 1 \right)$ N D; which still acts transitively, but with a finite kernel Cconsisting of those aI such that $a ^ { n + 1 } = 1$ .

If $p = \mathbb { C }$ is the first coordinate axis, then the isotropy group is $\mathbf { S } \left( \mathbf { U } \left( 1 \right) \times \mathbf { U } \left( n \right) \right)$ , Di.e., the matrices in $\mathrm { U } \left( 1 \right) \ \times \ \mathrm { U } \left( n \right)$ -of determinant 1: This group is naturally -isomorphic to U .n/ via the map

$$
A \mapsto \left( \begin{array}{c c} \det A ^ {- 1} & 0 \\ 0 & A \end{array} \right).
$$

The involution that makes M symmetric is then given by

$$
\left( \begin{array}{c c} (- 1) ^ {n} & 0 \\ 0 & - I _ {n} \end{array} \right).
$$

We pass to the Lie algebra level in order to compute the curvature tensor. From above, we have

$$
\mathfrak {s u} (n + 1) = \{A \mid A = - A ^ {*}, \operatorname{tr} A = 0 \},
$$

$$
\mathfrak {u} (n) = \{B \mid B = - B ^ {*} \}.
$$

The inclusion looks like

$$
B \mapsto \left( \begin{array}{c c} - \operatorname{tr} B & 0 \\ 0 & B \end{array} \right).
$$

Thus if elements of .n 1/ are written

$$
\left( \begin{array}{c c} - \mathrm{tr} B & - z ^ {*} \\ z & B \end{array} \right),
$$

and

$$
\mathfrak {t} _ {p} = \left\{\left( \begin{array}{c c} 0 & - z ^ {*} \\ z & 0 \end{array} \right) \mid z \in \mathbb {C} ^ {n} \right\}
$$

we obtain

$$
\mathfrak {s u} (n + 1) = \mathfrak {t} _ {p} \oplus \mathfrak {u} (n).
$$

For X; $Y \in \mathfrak { t } _ { p }$

$$
\langle X, Y \rangle = \operatorname{tr} \left(X ^ {*} Y\right) = - \operatorname{tr} (X Y) = - \frac {1}{2 (n + 1)} B (X, Y).
$$

So ${ \mathrm { R i c } } = ( n + 1 ) g$ and

$$
\begin{array}{l} \langle R (X, Y) Y, X \rangle = | [ X, Y ] | ^ {2} \\ = \left| \left( \begin{array}{c c} - (z ^ {*} w - w ^ {*} z) & 0 \\ 0 & w z ^ {*} - z w ^ {*} \end{array} \right) \right| ^ {2} \\ = \left| z ^ {*} w - w ^ {*} z \right| ^ {2} - \operatorname{tr} \left(\left(w z ^ {*} - z w ^ {*}\right) ^ {2}\right) \\ = 4 \left| \operatorname{Im} \left(z ^ {*} w\right) \right| ^ {2} - 2 \operatorname{Re} \left(z ^ {*} w\right) ^ {2} + 2 | z | ^ {2} | w | ^ {2}. \\ \end{array}
$$

To compute the sectional curvatures we need to pick an orthonormal basis X; Y for a plane. This means that $\begin{array} { r } { | z | ^ { 2 } = | w | ^ { 2 } = \frac { 1 } { 2 } } \end{array}$ and Re $( z ^ { \ast } w ) = 0$ , which implies $z ^ { * } w = \mathrm { i I m } \left( z ^ { * } w \right)$ and

$$
\begin{array}{l} \sec (X, Y) = 4 \left| \operatorname{Im} \left(z ^ {*} w\right) \right| ^ {2} - 2 \operatorname{Re} \left(z ^ {*} w\right) ^ {2} + 2 | z | ^ {2} | w | ^ {2} \\ = 6 \left| z ^ {*} w \right| ^ {2} + \frac {1}{2} \\ \leq 2. \\ \end{array}
$$

Showing that ${ \frac { 1 } { 2 } } \leq \sec \leq 2$ , where the minimum value occurs when $z ^ { * } w = 0$ and  the maximum value when $w = \mathrm { i } z$ D. Note that this scaling isn’t consistent with our Ddiscussion in section 4.5.3 but we have still shown that the metric is quarter pinched.

### 10.2.4 SL .n/ =SO .n/

The manifold is the quotient space of the $n \times n$ matrices with determinant 1 by the -orthogonal matrices. The Lie algebra of SL .n/ is

$$
\mathfrak {s l} (n) = \left\{X \in \operatorname{Mat} _ {n \times n} \mid \operatorname{tr} X = 0 \right\}.
$$

This Lie algebra is naturally divided up into symmetric and skew-symmetric matrices .n/ .n/, where consists of the symmetric matrices. On we sl D t ˚ so t tcan use the usual Euclidean metric. The involution is obviously given by I on and I on .n/ so  $( X ) = - X ^ { t }$ . For X; $Y \in { \mathfrak { t } }$

$$
\left<   X, Y \right> = \operatorname{tr} \left(X ^ {*} Y\right) = \operatorname{tr} (X Y) = \frac {1}{2 n} B (X, Y).
$$

So $\operatorname { R i c } = - n g$ and $\langle R \left( X , Y \right) Z , W \rangle = \langle \left[ X , Y \right] , \left[ Z , W \right] \rangle$ . In particular, the sectional D  hcurvatures must be nonpositive.

### 10.2.5 Lie Groups

Next we check how Lie groups become symmetric spaces.

To this end, start with a compact Lie group G with a biinvariant metric. As usual, the Lie algebra of G is identified with $T _ { e } \mathrm { { G } }$ as well as the set of left-invariant gvector fields on G: Since the left-invariant fields are Killing fields it follows that $\mathbf { a d } _ { X } = 2 \nabla X$ is skew-symmetric. In particular, the Killing form is nonpositive and D ronly vanishes on the center of . Thus, when has no center, then $g = - B$ defines a biinvariant as $\operatorname { a d } _ { X }$ g g D is skew-symmetric with respect to B. This is the situation we are interested in.

The Lie algebra description of G as a symmetric space is given by $( { \mathfrak { g } } \oplus { \mathfrak { g } } , \sigma )$ with $\sigma \left( X , Y \right) = \left( Y , X \right)$ : Here the diagonal ${ \mathfrak { g } } ^ { \Delta } = \{ ( X , X ) \mid X \in { \mathfrak { g } } \}$ g ˚ gis the 1-eigenspace, Dwhile the complement ${ \mathfrak { g } } ^ { \perp } = \{ ( X , - X ) \mid X \in { \mathfrak { g } } \}$ jis the $( - 1 ) { \mathrm { - e i g e n s p a c e } }$ . Thus $\mathfrak { k } =$ ${ \mathfrak { g } } ^ { \Delta } \cong { \mathfrak { g } }$ and ${ \mathfrak { t } } = { \mathfrak { g } } ^ { \perp }$ g D f  j 2 gg  k D. We already know that  corresponds to the compact Lie group g Š g t D gG; so we are simply saying that $\mathbf { G } = \left( \mathbf { G } \times \mathbf { G } \right) / \mathbf { G } ^ { \Delta }$ . The Ricci tensor is given by Ric $\begin{array} { r } { { \bf \Pi } = - \frac { 1 } { 2 } B = \frac { 1 } { 2 } g } \end{array}$ D -and the curvatures are nonnegative. Note that the natural inner D  Dproduct on  is scaled by a factor of 2 from the biinvariant metric on .

t gWe can also construct a noncompact symmetric space using the same Lie algebra that comes from a compact Lie group without center. Consider: $( { \mathfrak { g } } \otimes \mathbb { C } , \sigma )$ , where $\sigma \left( X \right) = \bar { X }$ is complex conjugation. Then ${ \mathfrak { k } } \ = \ { \mathfrak { g } } \ \subset \ { \mathfrak { g } } \ \otimes \ { \mathbb { C } }$ g ˝and $\mathfrak { t } \ = \ \mathrm { i g }$ . The D k D g  g ˝inner product on  is B on , while on  the metric is given by $g \left( \mathrm { i } X , \mathrm { i } Y \right) ~ =$ $- B \left( X , Y \right) = B \left( \mathrm { i } X , \mathrm { i } Y \right)$  g. This gives us Ric $\operatorname { ( i } X , \mathrm { i } Y ) = - { \textstyle { \frac { 1 } { 2 } } } B \operatorname { ( i } X , \mathrm { i } Y ) = - { \textstyle { \frac { 1 } { 2 } } } g \operatorname { ( i } X , \mathrm { i } Y )$  Dand nonpositive curvature.

## 10.3 Holonomy

First we discuss holonomy for general manifolds and the de Rham decomposition theorem. We then use holonomy to give a brief discussion of how symmetric spaces can be classified according to whether they are compact or not.

### 10.3.1 The Holonomy Group

Let $( M , g )$ be a Riemannian n-manifold. If $c : [ a , b ] \to M$ is a unit speed curve, then

$$
P _ {c (a)} ^ {c (b)}: T _ {c (a)} M \to T _ {c (b)} M
$$

denotes the effect of parallel translating a vector from $T _ { c ( a ) } M$ to $T _ { c ( b ) } M$ along c. This property will in general depend not only on the endpoints of the curve, but also on the actual curve. We can generalize this to work for piecewise smooth curves by breaking up the process at the breakpoints in the curve.

Suppose the curve is a loop, i.e., $c \left( a \right) = c \left( b \right) = p$ : Then parallel translation yields an isometry on $T _ { p } M$ D D: The set of all such isometries is called the holonomy group at $p$ and is denoted by ${ \mathrm { H o l } } _ { p } = { \mathrm { H o l } } _ { p } ( M , g )$ : One can easily see that this forms a subgroup of $\mathrm { ~ O ~ } ( T _ { p } M ) ~ = ~ \mathrm { { { O } ( { n } ) } }$ D : Moreover, it is a Lie group. This takes some Dwork to establish in case the group isn’t compact. The restricted holonomy group ${ \mathrm { H o l } } _ { p } ^ { 0 } = { \mathrm { H o l } } _ { p } ^ { 0 } \left( M , g \right)$ is the connected normal subgroup that results from using only Dcontractible loops. This group is compact and consequently a Lie group. Here are some elementary properties that are easy to establish:

(a) ${ \mathrm { H o l } } _ { p } \left( \mathbb { R } ^ { n } \right) = \{ 1 \}$ :

(b) $\mathrm { H o l } _ { p } \left( S ^ { n } \left( R \right) \right) = \mathrm { S O } \left( n \right)$ :

(c) ${ \mathrm { H o l } } _ { p } \left( H ^ { n } \right) = { \mathrm { S O } } \left( n \right)$

(d) ${ \mathrm { H o l } } _ { p } \left( M , g \right) \subset { \mathrm { S O } } \left( n \right)$ if and only if M is orientable.

(e) $\mathrm { H o l } _ { p } \left( \tilde { M } , \tilde { g } \right) = \mathrm { H o l } _ { p } ^ { 0 } \left( \tilde { M } , \tilde { g } \right) = \mathrm { H o l } _ { p } ^ { 0 } \left( M , g \right)$ , where $\tilde { M }$ is the universal covering of M:

(f) $\mathrm { H o l } _ { ( p , q ) } \left( M _ { 1 } \times M _ { 2 } , g _ { 1 } + g _ { 2 } \right) = \mathrm { H o l } _ { p } \left( M _ { 1 } , g _ { 1 } \right) \times \mathrm { H o l } _ { q } \left( M _ { 2 } , g _ { 2 } \right)$

(g) $\mathrm { H o l } _ { p } \left( M , g \right)$ - Cis conjugate to $\mathrm { H o l } _ { q } \left( M , g \right)$ -via parallel translation along any curve from p to q:

(h) A tensor at $p \in M$ can be extended to a parallel tensor on $( M , g )$ if and only if 2it is invariant under the holonomy group; e.g., if ! is a 2-form, then we require that ! $\left( P v , P w \right) = \omega \left( v , w \right)$ for all $P \in { \mathrm { H o l } } _ { p } \left( M , g \right)$ and v; $w \in T _ { p } M$ :

We are now ready to study how the Riemannian manifold decomposes according to the holonomy. Guided by (f) we see that being a Cartesian product is reflected in a product structure at the level of the holonomy. Furthermore, (g) shows that if the holonomy decomposes at just one point, then it decomposes everywhere.

To make things more precise, let us consider the action of $\mathrm { H o l } _ { p } ^ { 0 }$ on $T _ { p } M$ : If $E \subset$ $T _ { p } M$ is an invariant subspace, i.e., ${ \mathrm { H o l } } _ { p } ^ { 0 } \left( E \right) \subset E$ ; then the orthogonal complement is also preserved, i.e., Ho $1 _ { p } ^ { 0 } \left( E ^ { \perp } \right) \subset \dot { E } ^ { \perp }$ : Thus, $T _ { p } M$ decomposes into irreducible invariant subspaces:

$$
T _ {p} M = E _ {1} \oplus \dots \oplus E _ {k}.
$$

Here, irreducible means that there are no nontrivial invariant subspaces inside $E _ { i }$ . Since parallel translation around loops at $p$ preserves this decomposition, we see that parallel translation along any curve from p to q preserves this decomposition. Thus, we obtain a global decomposition of the tangent bundle into distributions, each of which is invariant under parallel translation:

$$
T M = \eta_ {1} \oplus \dots \oplus \eta_ {k}.
$$

With this we can state de Rham’s decomposition theorem.

Theorem 10.3.1 (de Rham, 1952). If we decompose the tangent bundle of a Riemannian manifold $( M , g )$ into irreducible components according to the restricted holonomy:


$$
T M = \eta_ {1} \oplus \dots \oplus \eta_ {k},
$$

then around each point $p \in M$ there is a neighborhood U that has a product structure of the form

$$
\begin{array}{l} (U, g) = \left(U _ {1} \times \dots \times U _ {k}, g _ {1} + \dots + g _ {k}\right), \\ T U _ {i} = \eta_ {i | U _ {i}}. \\ \end{array}
$$

Moreover, $i f ( M , g )$ is simply connected and complete, then there is a global splitting

$$
\begin{array}{l} (M, g) = \left(M _ {1} \times \dots \times M _ {k}, g _ {1} + \dots + g _ {k}\right), \\ T M _ {i} = \eta_ {i}. \\ \end{array}
$$

Proof. Given the decomposition into parallel distributions, we first observe that each of the distributions must be integrable. Thus, we do get a local splitting into submanifolds at the manifold level. To see that the metric splits as well, just observe that the submanifolds are totally geodesic, as their tangent spaces are invariant under parallel translation. This gives the local splitting.

The global result is, unfortunately, not a trivial analytic continuation argument and we only offer a general outline. Apparently, one must understand how simple connectivity forces the maximal integral submanifolds to be embedded submanifolds. Let $M _ { i }$ be the maximal integral submanifolds for $\eta _ { i }$ through a fixed $p \in M$ . Consider the abstract Riemannian manifold

$$
\left(M _ {1} \times \dots \times M _ {k}, g _ {1} + \dots + g _ {k}\right).
$$

Around $p ,$ the two manifolds $( M , g )$ and $( M _ { 1 } \times \cdots \times M _ { k } , g _ { 1 } + \cdots + g _ { k } )$ are isometric to each other. As $( M , g )$ -   is complete and each $M _ { i }$ C    Cis totally geodesic it follows that $( M _ { 1 } \times \cdots \times M _ { k } , g _ { 1 } + \cdots + g _ { k } )$ is also complete. The goal is to find an isometric - embedding

$$
(M, g) \rightarrow (M _ {1} \times \dots \times M _ {k}, g _ {1} + \dots + g _ {k}).
$$

Completeness will insure us that the map is onto and in fact a Riemannian covering map. We will then have shown that M is isometric to the universal covering of

$$
\left(M _ {1} \times \dots \times M _ {k}, g _ {1} + \dots + g _ {k}\right),
$$

which is the product manifold

$$
\left(\tilde {M} _ {1} \times \dots \times \tilde {M} _ {k}, \tilde {g} _ {1} + \dots + \tilde {g} _ {k}\right)
$$

with the induced pull-back metric.

Given this decomposition it is reasonable, when studying classification problems for Riemannian manifolds, to study only those Riemannian manifolds that are irreducible, i.e., those where the holonomy has no invariant subspaces. Guided by this we have a nice characterization of Einstein manifolds.

Theorem 10.3.2. If .M; g/ is an irreducible Riemannian manifold with a parallel .1; 1/-tensor T, then both the symmetric $S ~ = ~ { \textstyle \frac { 1 } { 2 } } \left( T + T ^ { * } \right)$ and skew-symmetric $\begin{array} { r } { A = \frac { 1 } { 2 } \left( T - T ^ { * } \right) } \end{array}$ D Cparts have exactly one (complex) eigenvalue. Moreover, if the skew-D symmetric part does not vanish, then it induces a parallel complex structure, i.e., a Kähler structure.

Proof. The fact that T is parallel implies that the adjoint is also parallel as the metric itself is parallel. More precisely we always have:

$$
\begin{array}{l} g \left(\left(\nabla_ {X} T\right) (Y), Z\right) = g \left(\nabla_ {X} T (Y), Z\right) - g \left(T \left(\nabla_ {X} Y\right), Z\right) \\ = \nabla_ {X} g (T (Y), Z) - g (T (Y), \nabla_ {X} Z) - g (T (\nabla_ {X} Y), Z) \\ = \nabla_ {X} g (Y, T ^ {*} (Z)) - g (Y, T ^ {*} (\nabla_ {X} Z)) - g (\nabla_ {X} Y, T ^ {*} (Z)) \\ = g \left(Y, \left(\nabla_ {X} T ^ {*}\right) (Z)\right). \\ \end{array}
$$

Thus $\boldsymbol { \nabla } S = 0 = \boldsymbol { \nabla } A$ and both are invariant under parallel translation.

r D D rFirst, decompose $T _ { p } M = E _ { 1 } \oplus \cdots \oplus E _ { k }$ into the orthogonal eigenspaces for $S : T _ { p } M \to T _ { p } M$ D ˚    ˚with respect to distinct eigenvalues $\lambda _ { 1 } < \cdots < \lambda _ { k }$ : As above, W !   we can parallel translate these eigenspaces to get a global decomposition $T M =$ $\eta _ { 1 } \oplus \cdots \oplus \eta _ { k }$ into parallel distributions, with the property that $S | _ { \eta _ { i } } = \lambda _ { i } \cdot I$ D. But then ˚    ˚the decomposition theorem tells us that $( M , g )$ jis reducible unless $k = 1$ .

DSecond, the skew-symmetric part has purely imaginary eigenvalues, however, we still obtain a decomposition $T _ { p } M = F _ { 1 } \oplus \cdots \oplus F _ { l }$ into orthogonal invariant subspaces such that $A | _ { F _ { k } }$ D ˚  has complex eigenvalue $\mathrm i \mu _ { k }$ , where $\mu _ { 1 } < \cdots < \mu _ { l }$ . The jsame argument as above shows that l  1. If $\mu _ { 1 } \neq 0$ , then $\begin{array} { r } { J = \frac { 1 } { \mu _ { 1 } } A } \end{array}$   is also parallel D ¤ D and only has i as an eigenvalue. This gives us the desired Kähler structure.

Corollary 10.3.3. A simply connected irreducible symmetric space is an Einstein manifold. In particular, it has nonnegative or nonpositive curvature operator according to the sign of the Einstein constant.

### 10.3.2 Rough Classification of Symmetric Spaces

We are now in a position to explain the essence of what irreducible symmetric spaces look like. They are all Einstein and come in three basic categories.

Compact Type: If the Einstein constant is positive, then it follows from Myers’ diameter bound (theorem 6.3.3) that the space is compact. In this case the curvature operator is nonnegative.

Flat Type: If the space is Ricci flat, then it is flat. Thus, the only Ricci flat irreducible examples are $S ^ { 1 }$ and $\mathbb { R } ^ { 1 }$ .

Noncompact Type: When the Einstein constant is negative, then it follows from Bochner’s theorem 8.2.2 on Killing fields that the space is noncompact. In this case the curvature operator is nonpositive.

We won’t give a complete list of all irreducible symmetric spaces, but one interesting feature is that they come in compact/noncompact dual pairs as described in the above tables. Also, there is a further subdivision. Among the compact types there are Lie groups with biinvariant metrics and then all the others. Similarly, in the noncompact regime there are the duals to the biinvariant metrics and then the rest. This gives us the following division explained with Lie algebra pairs that are of the form $\left( \mathfrak { c } _ { p } , \mathfrak { r } _ { p } \right) = \left( \mathfrak { g } , \mathfrak { t } \right)$ . In all cases there is an involution with 1-eigenspace given by c r D g k, and  is the Lie algebra of a compact group that acts on the . 1/-eigenspace . k k One can further use corollary 10.1.8 to show that for these examples $\mathfrak { r } _ { p } = \mathrm { i } \mathfrak { s o } _ { p }$ .

Type I: Compact irreducible symmetric spaces of the form . ; /, where  is simple; the Lie algebra of a compact Lie group; and ${ \mathfrak { k } } \subset { \mathfrak { g } }$ g k ga maximal subalgebra, e.g., . .k  l/ ;  .k/   .l//.

so C so - soType II: Compact irreducible symmetric spaces .  ; 
 /, where  is simple and k ˚ k k kcorresponds to a compact Lie group. The space is a compact Lie group with a biinvariant metric.

Type III: Noncompact symmetric spaces . ; /, where  is simple; the Lie algebra of a non-compact Lie group; and ${ \mathfrak { k } } \subset { \mathfrak { g } }$ g k ga maximal subalgebra corresponding to k  ga compact Lie group, e.g., . .k; l/ ;  .k/   .l// or . .n/ ;  .n//

so soType IV: Noncompact symmetric spaces $( \mathfrak { k } \otimes \mathbb { C } , \mathfrak { k } )$ sl so, where  is simple; corresponds to a compact Lie group; and ${ \mathfrak { k } } \otimes { \mathbb { C } } = { \mathfrak { k } } \oplus { \mathfrak { i } } { \mathfrak { k } }$ kits complexification, e.g., . .n; C/ ; .n//.

Note that since compact type symmetric spaces have nonnegative curvature operator, it becomes possible to calculate their cohomology algebraically. The Bochner technique tells us that all harmonic forms are parallel. As parallel forms are invariant under the holonomy we are left with a classical invariance problem: Determine all forms on a Euclidean space that are invariant under a given group action on the space. It is particularly important to know the cohomology of the real and complex Grassmannians, as one can use that information to define Pontryagin and Chern classes for vector bundles. We refer the reader to [97, vol. 5] and [76] for more on this.

### 10.3.3 Curvature and Holonomy

We mention, without proof, the general classification of connected irreducible holonomy groups. Berger classified all possible holonomies. Simons gave a direct proof of the fact that spaces with nontransitive holonomy must be locally symmetric, i.e., he did not use Berger’s classification of holonomy groups.

Table 10.5 Holonomy Groups 

<table><tr><td>dim = n</td><td>Holp</td><td>Properties</td></tr><tr><td>n</td><td>SO (n)</td><td>Generic case</td></tr><tr><td>n = 2m</td><td>U (m)</td><td>Kähler</td></tr><tr><td>n = 2m</td><td>SU (m)</td><td>Kähler and Ricci flat</td></tr><tr><td>n = 4m</td><td>Sp (1) · Sp (m)</td><td>Quaternionic-Kähler and Einstein</td></tr><tr><td>n = 4m</td><td>Sp (m)</td><td>Hyper-Kähler and Ricci flat</td></tr><tr><td>n = 16</td><td>Spin (9)</td><td>Symmetric and Einstein</td></tr><tr><td>n = 8</td><td>Spin (7)</td><td>Ricci flat</td></tr><tr><td>n = 7</td><td>G2</td><td>Ricci flat</td></tr></table>

Theorem 10.3.4 (Berger, 1955 and Simons, 1962). Let .M; g/ be a simply connected irreducible Riemannian n-manifold. The holonomy ${ \mathrm { H o l } } _ { p }$ either acts transitively on the unit sphere in $T _ { p } M$ or $( M , g )$ is a symmetric space of $r a n k \ge ~ 2$ : Moreover, in the first case the holonomy is one of the groups in table 10.5.

The first important thing to understand is that while we list the groups it is important how they act on the tangent space. The same group, e.g., SU .m/ acts irreducibly in the standard way on $\mathbb { C } ^ { m }$ , but it also acts irreducibly via conjugation on $( m ) = \mathbb { R } ^ { m ^ { 2 } - 1 }$ . It is only in the former case that the metric is forced to be Ricci su Dflat. The latter situation occurs on the symmetric space SU .m/.

It is curious that all but the two largest irreducible holonomy groups, SO .n/ and U .m/ ; force the metric to be Einstein and in some cases even Ricci flat. Looking at the relationship between curvature and holonomy, it is clear that having small holonomy forces the curvature tensor to have special properties. One can, using a case-by-case check, see that various traces of the curvature tensor must be zero, thus forcing the metric to be either Einstein or even Ricci flat (see [12] for details). Note that Kähler metrics do not have to be Einstein (see exercise 4.7.24). Quaternionic Kähler manifolds are not necessarily Kähler, as $\operatorname { S p } \left( 1 \right) \cdot \operatorname { S p } \left( m \right)$ is not contained in U .2m/, in fact Sp $( 1 ) \cdot \mathrm { S p } \left( 1 \right) = \mathrm { S O } \left( 4 \right)$ . Using a little bit of the theory of Kähler  Dmanifolds, it is not hard to see that metrics with holonomy SU .n/ are Ricci flat. Since Sp $( m ) \subset \mathbf { S U } \left( 2 m \right)$ ; it follows that hyper-Kähler manifolds are Ricci flat. One can also prove that the last two holonomies occur only for Ricci flat manifolds. With the exception of the four types of Ricci flat holonomies all other holonomies occur for symmetric spaces. This follows from the above classification and the fact that the rank one symmetric spaces have holonomy SO .n/ ; U .m/ ; Sp .1/  Sp .m/ ; or Spin .9/ :

This leads to another profound question. Are there compact simply connected Ricci flat spaces with holonomy SU .m/ ; Sp .m/ ; ${ \bf G } _ { 2 }$ ; or Spin .7/? The answer is yes. But it is a highly nontrivial yes. Yau got the Fields medal, in part, for establishing the SU .m/ case. Actually, he solved the Calabi conjecture, and the holonomy question was a by-product (see, e.g., [12] for more information on the Calabi conjecture). Note that we have the Eguchi-Hanson metric (exercise 4.7.24 and 4.7.23) which is a complete Ricci flat Kähler metric and therefore has SU .2/ as holonomy group. D. Joyce solved the cases of Spin .7/ and ${ \bf G } _ { 2 }$ by methods similar to those employed by Yau. An even more intriguing question is whether there are compact simply connected Ricci flat manifolds with SO .n/ as a holonomy group. Note that the Schwarzschild metric (see section 4.2.5) is complete, Ricci flat, and has SO .n/ as holonomy group. For more in-depth information on these issues we refer the reader to [12].

A general remark about how special $( \neq \mathbf { S O } \left( n \right) )$ holonomies occur: It seems ¤that they are all related to the existence of parallel forms. In the Kähler case, for example, the Kähler form is a parallel nondegenerate 2-form. Correspondingly, one has a parallel 4-form for quaternionic-Kähler manifolds, and a parallel 8-form for manifolds with holonomy Spin .9/ (which are all known to be locally symmetric). This is studied in more detail in the proof of the classification of manifolds with nonnegative curvature operator below. For the last two exceptional holonomies Spin .7/ and ${ \bf G } _ { 2 }$ there are also special 4-forms that do the job of identifying these types of spaces.

From the classification of holonomy groups we immediately get an interesting corollary.

Corollary 10.3.5. If a Riemannian manifold has the property that the holonomy doesn’t act transitively on the unit sphere, then it is either reducible or a locally symmetric space of rank 2: In particular, the rank must be $\geq 2 .$ .

It is unclear to what extent the converse fails for general manifolds. For nonpositive curvature, however, there is the famous higher-rank rigidity result proved independently by W. Ballmann and Burns-Spatzier (see [7] and [21]).

Theorem 10.3.6. A compact Riemannian manifold of nonpositive curvature of rank $\geq 2$ does not have transitive holonomy. In particular, it must be either reducible or locally symmetric.

It is worthwhile mentioning that in [9] it was shown that the rank of a compact nonpositively curved manifold can be computed from the fundamental group. Thus, a good deal of geometric information is automatically encoded into the topology. The rank rigidity theorem is proved by dynamical systems methods. The idea is to look at the geodesic flow on the unit sphere bundle, i.e., the flow that takes a unit vector and moves it time t along the unit speed geodesic in the direction of the unit vector. This flow has particularly nice properties on nonpositively curved manifolds. The idea is to use the flat parallel fields to show that the holonomy can’t be transitive. The Berger-Simons result then shows that the manifold has to be locally symmetric if it is irreducible.

In nonnegative curvature, on the other hand, it is possible to find irreducible spaces that are not symmetric and have rank $\geq 2$ : On $\overline { { S ^ { 2 } \times S ^ { 2 } } }$ we have a product  -metric that is reducible and has rank 3. But if we take another metric on this space that comes as a quotient of $S ^ { 2 } \times S ^ { 3 }$ by an action of $S ^ { 1 }$ (acting by rotations on the first -factor and the Hopf action on the second), then we get a metric which has rank 2. The only way in which a rank 2 metric can split off a de Rham factor is if it splits off something 1-dimensional, but that is topologically impossible in this case. So in conclusion, the holonomy must be transitive and irreducible.

By assuming the stronger condition that the curvature operator is nonnegative, one can almost classify all such manifolds. This was first done in [48] and in more generality in Chen’s article in [51]. This classification allows us to conclude that higher rank gives rigidity. The theorem and proof are a nice synthesis of everything we have learned in this and the previous chapter. In particular, the proof uses the Bochner technique in the two most nontrivial cases we have covered: for forms and the curvature tensor.

Theorem 10.3.7 (Gallot and D. Meyer, 1975). $H ( M , g )$ is a compact Riemannian n-manifold with nonnegative curvature operator, then one of the following cases must occur:

(a) $( M , g ) ~ i s ~ e i t h e r ~ r e d u c i b l e ~ o r ~ l o c a l l y ~ s y m m e t r i c .$

(b) $\mathrm { H o l } ^ { 0 } \left( M , g \right) = \mathrm { S O } \left( n \right)$ and the universal covering is a homology sphere.

(c) $\begin{array} { r } { \mathrm { H o l } ^ { 0 } \left( M , g \right) = \mathrm { U } \left( \frac { n } { 2 } \right) a n d t h e u n i v e r s a l c o \nu e r i n g i s a h o m o l o g y \mathbb { C } \mathbb { P } ^ { \frac { n } { 2 } } . } \end{array}$

Proof. First we use the structure theory from section 7.3.3 to conclude that the universal covering is isometric to $N \times \mathbb { R } ^ { k }$ , where $k > 0$ if the fundamental group -is infinite. In particular, the manifold is reducible. Therefore, we can assume that we work with a simply connected compact manifold M: Now we observe that either all of the homology groups $H ^ { p } \left( M , \mathbb { R } \right) = 0$ for $p = 1 , \ldots , n - 1$ ; in which case D Dthe space is a homology sphere, or some homology group $H ^ { p } \left( M , \mathbb { R } \right) \neq 0$ for some $p \neq 0$ ; n. In the latter case there is a harmonic $p { \mathrm { - } } \mathrm { f o r m }$ ¤ by the Hodge theorem. ¤The Bochner technique tells us that this form must be parallel, since the curvature operator is nonnegative. The idea of the proof is to check the possibilities for this when we know the holonomy.

We can assume that the manifold is irreducible and has transitive holonomy. The Ricci flat cases are impossible as the nonnegative curvature would then make the manifold flat. Thus, we have only the four possibilities SO $\begin{array} { r } { ( n ) , \mathrm { U } \left( \frac { n } { 2 } \right) , \mathrm { S p } \left( 1 \right) \mathrm { S p } \left( \frac { n } { 4 } \right) } \end{array}$ ; or Spin .9/ : In the latter two cases one can show from holonomy considerations that the manifold must be Einstein. Tachibana’s result (see theorem 9.4.8) then implies that the metric is locally symmetric. From the classification of symmetric spaces it is further possible to show that the space is isometric to either $\mathbb { H } \mathbb { P } ^ { \frac { n } { 4 } }$ or $\mathbb { O P } ^ { 2 }$ :

Now assume that the holonomy is SO .n/ and that we have a parallel p-form !. When $0 < p < n$ and $v _ { 1 } , \dotsc , v _ { p } \in T _ { p } M$ it is possible to find an element of $P \in$ ${ \mathrm { S O } } \left( n \right)$ such that $P \left( v _ { i } \right) = v _ { i } , i = 2 , \cdots , p$ and $P \left( v _ { 1 } \right) = - v _ { 1 }$ 2. Therefore, when the D D    D holonomy is SO .n/ and ! is invariant under parallel translation, then

$$
\omega \left(v _ {1}, \dots , v _ {p}\right) = \omega \left(P v _ {1}, \dots , P v _ {p}\right)
$$

$$
= \omega (- v _ {1}, v _ {2}, \dots , v _ {p})
$$

$$
= - \omega (v _ {1}, \dots , v _ {p}).
$$

This shows that $\omega = 0$ :

DThis leaves us with the case where the holonomy is ${ \mathrm { U } } \left( { \frac { n } { 2 } } \right) , { \mathrm { i } } . { \mathrm { e } } . , $ , the metric is Kähler. In this situation we show that the cohomology ring must be the same as that of $\mathbb { C P } ^ { \frac { n } { 2 } } , \mathrm { i . e . }$ , there is a homology class $\omega \in H ^ { 2 } \left( M , \mathbb { R } \right)$ such that any homology class is proportional to some power $\omega ^ { k } = \omega \wedge \ldots \wedge \omega$ . This can be seen as follows. Since the holonomy is $\begin{array} { r } { \mathrm { U } \left( \frac { n } { 2 } \right) } \end{array}$ D ^ ^there must be an almost complex structure on the tangent spaces that is invariant under parallel translation. After type change this gives us a parallel 2-form !. Any other parallel 2-from must be a multiple of this form by theorem 10.3.2, so dim $H ^ { 2 } = 1$ . The odd cohomology groups vanish, like in the case where the holonomy is ${ \mathrm { S O } } \left( n \right)$ , since the antipodal map $\begin{array} { r } { P = - I \in \mathrm { U } \left( \frac { n } { 2 } \right) } \end{array}$ when n is even. More generally, consider a p-form - with $1 < p < n$  2that is invariant under $\begin{array} { r } { \mathrm { U } \left( \frac { n } { 2 } \right) } \end{array}$ . Select an orthonormal basis $e _ { 1 } , \ldots , e _ { n }$ for $T _ { p } M$ . We claim that $\theta$ has the same values on any p vectors $e _ { i _ { 1 } } , \ldots e _ { i _ { p } }$ ; where $i _ { 1 } < \cdots < i _ { p }$ . There is an element $P \in \mathrm { U } \left( { \frac { n } { 2 } } \right)$ such that $P \left( e _ { i } \right) = e _ { i } \operatorname { f o r } i = 1 , \dots , p - 1$ and $P \left( e _ { p } \right) = e _ { i _ { p } }$ so it follows that $\theta \left( e _ { 1 } , \ldots , e _ { p } \right) = \theta \left( e _ { 1 } , \ldots , e _ { p - 1 } , e _ { i _ { p } } \right)$ D . This can be repeated for $p - 1$ etc. This shows D that all p-forms must be multiples of each other. Now the powers $\omega ^ { k } = \omega \wedge \cdots \wedge$ ! are all nontrivial parallel forms, so they must generate $H ^ { 2 k }$ D ^    ^. This shows that M has the cohomology ring of $\mathbb { C P } ^ { \frac { n } { 2 } }$ .

There are two questions left over in this classification. Namely, for the sphere and complex projective space we get only homology rigidity. For the sphere one can clearly perturb the standard metric and still have positive curvature operator, so one couldn’t expect more there. On $\mathbb { C P } ^ { 2 }$ , say, we know that the curvature operator has exactly two zero eigenvalues. These two zero eigenvalues and eigenvectors are actually forced on us by the fact that the metric is Kähler. Therefore; if we perturb the standard metric, while keeping the same Kähler structure, then these two zero eigenvalues will persist and the positive eigenvalues will stay positive. Thus, the curvature operator stays nonnegative.

There are more profound results that tell us more about the topological structure in cases (b) and (c). For case (b) one can use Ricci flow techniques to show that the space is diffeomorphic to a space of constant curvature. This is a combination of results by Hamilton (see [61]) and Böhm-Wilking (see [16]). In case (c) the universal cover is biholomorphic to $\mathbb { C P } ^ { \frac { n } { 2 } }$ . This was proven by Mok (see [78]) and can now also be proven using the Ricci flow. In fact the entire result can be generalized using the Ricci flow to hold under weaker assumptions (see [19]).

Theorem 10.3.8 (Brendle and Schoen, 2008). $H ( M , g )$ is a compact Riemannian n-manifold with nonnegative complex sectional curvature, then one of the following cases must occur:

(a) $( M , g ) ~ i s ~ e i t h e r ~ r e d u c i b l e ~ o r ~ l o c a l l y ~ s y m m e t r i c .$   
(b) M is diffeomeorphic to a space of constant positive curvature.   
$\mathrm { ( c ) } \qquad T h e u n i v e r s a l c o \nu e r i n g o f M i s b i h o l o m o r p h i c t o \mathbb { C } \mathbb { P } ^ { \frac { n } { 2 } } .$

Given that there is such a big difference between the classes of manifolds with nonnegative curvature operator and nonnegative sectional curvature, one might think the same is true for nonpositive curvature. However, the above rank rigidity theorem tells us that in fact nonpositive sectional curvature is much more rigid than nonnegative sectional curvature. Nevertheless, there is an example of Aravinda and Farrell showing that there are nonpositively curved manifolds that do not admit metrics with nonpositive curvature operator (see [5]).

## 10.4 Further Study

We have not covered all important topics about symmetric spaces. For more indepth information we recommend the texts by Besse, Helgason, and Jost (see [12, Chapters 7,10], [13, Chapter 3], [62], and [65, Chapter 6]). Another very good text which covers the theory of Lie groups and symmetric spaces is [64]. O’Neill’s book [80, Chapter 8] also has a nice elementary account of symmetric spaces. Finally, Klingenberg’s book [69] has an excellent geometric account of symmetric spaces.

## 10.5 Exercises

EXERCISE 10.5.1. Let M be a symmetric space and $X \in \mathfrak { t } _ { p } , \mathrm { i . e . , } X$ is a nontrivial Killing field with $\left( \nabla X \right) \mid _ { p } = 0$ .

(1) Show that the flow for X is given by $\begin{array} { r } { F _ { s } = A _ { \mathrm { e x p } _ { p } \left( \frac { s } { 2 } X | _ { p } \right) } \circ A _ { p } } \end{array}$   
(2) Show that $c \left( t \right) = \exp \left( t X \vert _ { p } \right)$ is an axis for $F _ { s } , \mathbf { e . g . } , F _ { s } \left( c \left( t \right) \right) = c \left( t + s \right)$   
(3) Show that if $c \left( a \right) = c \left( b \right)$ j, then $\dot { c } \left( a \right) = \dot { c } \left( b \right)$   
D P D P(4) Conclude that geodesic loops are always closed geodesics.

EXERCISE 10.5.2. Let M be a symmetric space. Show that the action of $A _ { p } : M \to M$ on $\pi _ { 1 } \left( M , p \right)$ is given by $g \mapsto g ^ { - 1 }$ and conclude that $\pi _ { 1 } \left( M , p \right)$ is W !Abelian. Hint: Every element of $\pi _ { 1 } \left( M , p \right)$ 7!is represented by a geodesic loop which by the previous exercise is a closed geodesic.

EXERCISE 10.5.3. Let M be a symmetric space and c a geodesic in M.

(1) Let E .t/ be a parallel field along c. Show that $R \left( E , { \dot { c } } \right)$ c is also parallel.   
(2) If E .0/ is an eigenvector for $R \left( \cdot , \dot { c } \left( 0 \right) \right) \dot { c } \left( 0 \right)$ P Pwith eigenvalue , then $J \left( t \right) =$ $\mathbf { s n } _ { \kappa } \left( t \right) E \left( t \right)$ and $J \left( t \right) = \mathsf { s n } _ { \kappa } ^ { \prime } \left( t \right) E \left( t \right)$ P Pare both Jacobi fields along c.   
D (3) Show that if J .t/ is a Jacobi field along c with $J \left( 0 \right) = 0$ and $J \left( t _ { 0 } \right) = 0$ , then $\begin{array} { r } { \dot { J } \left( \frac { t _ { 0 } } { 2 } \right) = 0 } \end{array}$ .   
D(4) With J as in (3) construct a geodesic variation $c \left( s , t \right)$ such that $\begin{array} { r } { \frac { \partial c } { \partial s } \left( 0 , t \right) = J \left( t \right) } \end{array}$ , $c \left( s , 0 \right) = c \left( 0 \right)$ , and $c \left( s , t _ { 0 } \right) = c \left( t _ { 0 } \right)$ .

EXERCISE 10.5.4. Let M be a symmetric space.

(1) Show directly that if M is compact, then sec $\geq 0$ . Hint: Argue by contradiction and produce a Jacobi field that is unbounded along a geodesic.   
(2) Show that if c is a closed geodesic, then $R \left( \cdot , \dot { c } \right) \dot { c }$ has no negative eigenvalues.   
(3) Show that if M has Ric > 0, then sec 0.

EXERCISE 10.5.5. Assume that M has nonpositive or nonnegative sectional curvature. Let c be a geodesic and E a parallel field along c: Show that the following conditions are equivalent.

(1) $g \left( R \left( E , \dot { c } \right) \dot { c } , E \right) = 0$ everywhere.   
P P D(2) R .E; c/ c  0 everywhere.   
P P D(3) E is a Jacobi field.

EXERCISE 10.5.6. (1) Let be a real Lie algebra with Killing form B. Show that gthe Killing form of the complixification ${ \mathfrak { g } } \otimes \mathbb { C }$ is simply the complexification of B.

(2) Show that the Killing forms of $( n , \mathbb { C } )$ and .n/ are given by $B \left( X , Y \right) =$ gl gl2ntr .XY/  2trXtrY. Hint: As a basis use the matrices $E _ { i j } = \left[ \delta _ { i s } \delta _ { j t } \right] _ { 1 \leq s , t \leq n } .$

(3) Show that on $( n , \mathbb { C } ) = { \mathfrak { s l } } ( n ) \otimes \mathbb { C }$ the Killing form is $B \left( X , Y \right) = \overline { { { 2 } } } \overline { { { n } } } \overline { { { \mathrm { t r } } } } \left( X Y \right)$ . sl D slHint: Use (2) and the fact that $I \in \mathfrak { g l } ( n , \mathbb { C } )$ Dcommutes with all elements in sl $( n , \mathbb { C } )$ .

sl(4) Show that $( k + l , \mathbb { C } ) = { \mathfrak { s u } } ( k , l ) \otimes \mathbb { C }$ , and conclude that $( k + l )$ and  .k; l/ sl Chave Killing form $B \left( X , Y \right) = 2 \left( k + l \right) \operatorname { t r } \left( X Y \right)$ .

(5) Show that on $( n , \mathbb { C } ) = { \mathfrak { s o } } ( n ) \otimes \mathbb { C }$ the Killing form is given by $B \left( X , Y \right) =$ so D so ˝.n  2/ tr .XY/. Hint: Use the basis $E _ { i j } - E _ { j i } , i < j$ .

 (6) Show that  .k  l; C/   .k; l/  C, and conclude that  .k; l/ has Killing form $B \left( X , Y \right) = \left( k + l - 2 \right) \operatorname { t r } \left( X Y \right)$ ˝.

EXERCISE 10.5.7. Show that $\mathrm { G L } ^ { + } \left( p + q , \mathbb { R } \right) / \mathrm { S O } \left( p , q \right)$ defines a symmetric space Cand that it can be identified with the nondegenerate bilinear forms on $\mathbb { R } ^ { p + q }$ that have index q.

EXERCISE 10.5.8. Show that U $\left( p , q \right) / \mathrm { S O } \left( p , q \right)$ defines a symmetric space and that ${ \mathfrak { u } } \left( p , q \right) \otimes \mathbb { C } = { \mathfrak { g l } } \left( p + q , \mathbb { C } \right)$ .

EXERCISE 10.5.9. Show that the holonomy of $\mathbb { C P } ^ { n }$ is $\mathrm { ~ U ~ } ( n )$ :

EXERCISE 10.5.10. Show that a covering space of a symmetric space is also a symmetric space. Show by example that the converse is not necessarily true.

EXERCISE 10.5.11. Show that a manifold is flat if and only if the holonomy is discrete, i.e., ${ \mathfrak { o l } } _ { p } = \{ 0 \}$ .

EXERCISE 10.5.12. Show that a compact Riemannian manifold with irreducible restricted holonomy and $\operatorname { R i c } \geq 0$ has finite fundamental group.

EXERCISE 10.5.13. Which known spaces can be described by SL .2; R/ =SO .2/ and SL .2; C/ =SU .2/?

EXERCISE 10.5.14. Show that the holonomy of a Riemannian manifold is contained in U .m/ if and only if it has a Kähler structure.

EXERCISE 10.5.15. Show that if a homogeneous space has $\mathfrak { i } \mathfrak { s o } _ { p } = \mathfrak { s o } \left( T _ { p } M \right)$ at some point, then it has constant curvature.

EXERCISE 10.5.16. Show that the subalgebras $( k ) \times { \mathfrak { s o } } ( n - k )$ and $\mathfrak { u } \left( \frac { n } { 2 } \right)$ are maximal in .n/.

EXERCISE 10.5.17. Show that $( m ) \subset { \mathfrak { s o } } \left( m ^ { 2 } - 1 \right)$ . Hint: Let .m/ act on itself.

EXERCISE 10.5.18. Show that for any Riemannian manifold $\mathfrak { r } _ { p } \subset \mathfrak { h o l } _ { p }$ . Give an example where equality does not hold.

EXERCISE 10.5.19. Show that for a symmetric space $\mathfrak { r } _ { p } = \mathfrak { h o l } _ { p }$ . Use this to show that unless the curvature is constant $\mathfrak { r } _ { p } = \mathfrak { h o l } _ { p } = \mathrm { i } \mathfrak { s o } _ { p }$ r D holprovided ${ \mathfrak { r } } _ { p } \subset { \mathfrak { s o } } \left( T _ { p } M \right)$ is maximal.

EXERCISE 10.5.20. Show that SO $\left( n , \mathbb { C } \right) / \operatorname { S O } \left( n \right)$ and SL $\left( n , \mathbb { C } \right) / \operatorname { S U } \left( n \right)$ are symmetric spaces with nonpositive curvature operator.

EXERCISE 10.5.21. The quaternionic projective space is defined as being the quaternionic lines in $\mathbb { H } ^ { n + \hat { 1 } }$ . This was discussed when $n = 1$ in exercise 1.6.22. Define the symplectic group Sp $( n ) \subset \mathrm { S U } \left( 2 n \right) \subset \mathrm { S O } \left( 4 n \right)$ Das the orthogonal matrices  that commute with the three complex structures generated by i; j; k on $\mathbb { R } ^ { 4 n }$ : An alternative way of looking at this group is by considering $n \times n$ matrices A with quaternionic entries such that

$$
A ^ {- 1} = A ^ {*}.
$$

Show that if we think of $\mathbb { H } ^ { n + 1 }$ as a right (or left) H module, then the space of quaternionic lines can be written as

$$
\mathbb {H} \mathbb {P} ^ {n} = \operatorname{Sp} (n + 1) / (\operatorname{Sp} (1) \times \operatorname{Sp} (n)).
$$

EXERCISE 10.5.22. Construct the hyperbolic analogues of the complex projective spaces. Show that they have negative curvature and are quarter pinched.

EXERCISE 10.5.23. Give a Lie algebra description of a locally symmetric space (not necessarily complete). Explain why this description corresponds to a global symmetric space. Conclude that a simply connected locally symmetric space admits a monodromy map into a unique global symmetric space. Show that if the locally symmetric space is complete, then the monodromy map is bijective.

EXERCISE 10.5.24. Show that if an irreducible symmetric space has strictly positive or negative curvature operator, then it has constant curvature.

EXERCISE 10.5.25. Let M be a symmetric space. Show that if $X \in \mathfrak { t } _ { p }$ and $Y \in \mathfrak { i s o } _ { p }$ ; then $[ X , Y ] \in \mathfrak { t } _ { p }$ :

EXERCISE 10.5.26. Let M be a symmetric space and X; $Y , Z \in \mathfrak { t } _ { p }$ : Show that

$$
\begin{array}{l} R (X, Y) Z = \left[ L _ {X}, L _ {Y} \right] Z, \\ \operatorname{Ric} (X, Y) = - \operatorname{tr} ([ L _ {X}, L _ {Y} ]). \\ \end{array}
$$

EXERCISE 10.5.27. Consider a Riemannian manifold M and a p-form $\omega$ on $T _ { p } M$ . Show that ! has an extension to a parallel form on M if and only if ! is invariant under ${ \mathrm { H o l } } _ { p } \left( M \right)$ .