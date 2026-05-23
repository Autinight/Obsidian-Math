# Chapter 4 Examples

We are now ready to compute the curvature tensors on all of the examples constructed in chapter 1. After a few more general computations, we will exhibit Riemannian manifolds with constant sectional, Ricci, and scalar curvature. In particular, we shall look at the space forms $S _ { k } ^ { n }$ , products of spheres, and the Riemannian version of the Schwarzschild metric. We also offer a local characterization of certain warped products and rotationally symmetric constant curvature metrics in terms of the Hessian of certain modified distance functions.

The examples we present here include a selection of important techniques such as: Conformal change, left-invariant metrics, warped products, Riemannian submersion constructions etc. We shall not always develop the techniques in complete generality. Rather we show how they work in some basic, but important, examples. The exercises also delve into important ideas that are not needed for further developments in the text.

## 4.1 Computational Simplifications

Before we do more concrete calculations it will be useful to have some general results that deal with how one finds the range of the various curvatures.

Proposition 4.1.1. Let $e _ { i }$ be an orthonormal basis for $T _ { p } M$ . If $e _ { i } \wedge e _ { j }$ diagonalize the curvature operator

$$
\Re \left(e _ {i} \wedge e _ {j}\right) = \lambda_ {i j} e _ {i} \wedge e _ {j},
$$

then for any plane 	 in $T _ { p } M$ we have sec $( \pi ) \in \left[ \operatorname* { m i n } \lambda _ { i j } \right.$ ; max $\lambda _ { i j } ]$ .

Proof. If v; w form an orthonormal basis for the plane $\pi$ , then we have sec $( \pi ) =$ $g \left( \Re \left( v \wedge w \right) , \left( v \wedge w \right) \right)$ , so the result is immediate. D

Proposition 4.1.2. Let $e _ { i }$ be an orthonormal basis for $T _ { p } M .$ If $R \left( e _ { i } , e _ { j } \right) e _ { k } \ = \ 0 ,$ , when the indices are mutually distinct, then $e _ { i } \wedge e _ { j }$ Ddiagonalize the curvature operator.

Proof. If we use

$$
\begin{array}{l} g \left(\Re \left(e _ {i} \wedge e _ {j}\right), \left(e _ {k} \wedge e _ {l}\right)\right) = - g \left(R \left(e _ {i}, e _ {j}\right) e _ {k}, e _ {l}\right) \\ = g \left(R \left(e _ {i}, e _ {j}\right) e _ {l}, e _ {k}\right), \\ \end{array}
$$

then we see that this expression is 0 when i; j; k are mutually distinct or if $i , j ,$ l are mutually distinct. Thus, the expression can only be nonzero when $\{ k , l \} = \{ i , j \}$ . This gives the result. g

We shall see that this proposition applies to all rotationally symmetric and doubly warped products. In this case, the curvature operator can then be computed by finding the expressions $R \left( { { e _ { i } } , { e _ { j } } , { e _ { j } } , { e _ { i } } } \right)$ . In general, however, this will definitely not work.

There is also a more general situation where we can find the range of the Ricci curvatures:

Proposition 4.1.3. Let $e _ { i }$ be an orthonormal basis for $T _ { p } M .$ . If

$$
g \left(R \left(e _ {i}, e _ {j}\right) e _ {k}, e _ {l}\right) = 0,
$$

when three of the indices are mutually distinct, then $e _ { i }$ diagonalize Ric.

Proof. Recall that

$$
g \left(\operatorname{Ric} \left(e _ {i}\right), e _ {j}\right) = \sum_ {k = 1} ^ {n} g \left(R \left(e _ {i}, e _ {k}\right) e _ {k}, e _ {j}\right),
$$

so if we assume that $i \neq j ,$ then $g \left( R \left( e _ { i } , e _ { k } \right) e _ { k } , e _ { j } \right) = 0$ unless k is either i or j. However, if $k = i , j ;$ ¤ D, then the expression is zero from the symmetry properties of R. Thus, $e _ { i }$ Dmust diagonalize Ric. □

## 4.2 Warped Products

So far, all we know about curvature is that Euclidean space has $R = 0$ . Using this, we determine the curvature tensor on $S ^ { n - 1 } ( R )$ D. Armed with that information we can in turn calculate the curvatures on rotationally symmetric metrics.


### 4.2.1 Spheres

On $\mathbb { R } ^ { n }$ consider the distance function $r ( x ) \ = \ | x |$ and the polar coordinate representation:

$$
g = d r ^ {2} + g _ {r} = d r ^ {2} + r ^ {2} d s _ {n - 1} ^ {2},
$$

where $d s _ { n - 1 } ^ { 2 }$ is the canonical metric on $S ^ { n - 1 } ( 1 )$ . The level sets are $O _ { r } = S ^ { n - 1 } ( r )$  with the usual induced metric $g _ { r } = r ^ { 2 } d s _ { n - 1 } ^ { 2 }$ . The differential of $r$ Dis given by $d r =$ $\sum { \frac { x ^ { i } } { r } } d x ^ { i }$ and the gradient is $\begin{array} { r } { \partial _ { r } \ = \ \frac { 1 } { r } x ^ { i } \partial _ { i } } \end{array}$ . Since $d s _ { n - 1 } ^ { 2 }$ Dis independent of r we can Dcompute the Hessian of r as follows:

$$
\begin{array}{l} 2 \operatorname{Hess} r = L _ {\partial_ {r}} g \\ = L _ {\partial_ {r}} \left(d r ^ {2}\right) + L _ {\partial_ {r}} \left(r ^ {2} d s _ {n - 1} ^ {2}\right) \\ = L _ {\partial_ {r}} (d r) d r + d r L _ {\partial_ {r}} (d r) + \partial_ {r} (r ^ {2}) d s _ {n - 1} ^ {2} + r ^ {2} L _ {\partial_ {r}} (d s _ {n - 1} ^ {2}) \\ = \partial_ {r} (r ^ {2}) d s _ {n - 1} ^ {2} \\ = 2 r d s _ {n - 1} ^ {2} \\ = 2 \frac {1}{r} g _ {r}. \\ \end{array}
$$

The tangential curvature equation (see theorem 3.2.4) tells us that

$$
R ^ {r} (X, Y) Z = r ^ {- 2} \left(g _ {r} (Y, Z) X - g _ {r} (X, Z) Y\right),
$$

since the curvature on $\mathbb { R } ^ { n }$ is zero. In particular, if $e _ { i }$ is any orthonormal basis, then $R ^ { r } \left( e _ { i } , e _ { j } \right) e _ { k } ~ = ~ 0$ when the indices are mutually distinct. Therefore, $S ^ { n - 1 } ( R )$ has Dconstant curvature $R ^ { - 2 }$ provided $n \geq 3$ . This justifies our notation that $S _ { k } ^ { n }$ is the rotationally symmetric metric $d r ^ { 2 } + \mathrm { s n } _ { k } ^ { 2 } ( r ) d s _ { n - 1 } ^ { 2 }$ when $k \geq 0$ , as these metrics have C  curvature k in this case. In section 4.2.3 we shall see that this is also true when $k < 0$ .

### 4.2.2 Product Spheres

Next we compute the curvatures on the product spheres

$$
S _ {a} ^ {n} \times S _ {b} ^ {m} = S ^ {n} \left(\frac {1}{\sqrt {a}}\right) \times S ^ {m} \left(\frac {1}{\sqrt {b}}\right).
$$

The metric $g _ { r }$ on $S ^ { n } \left( r \right)$ is $g _ { r } = r ^ { 2 } d s _ { n } ^ { 2 }$ , so we can write

$$
S _ {a} ^ {n} \times S _ {b} ^ {m} = \left(S ^ {n} \times S ^ {m}, \frac {1}{a} d s _ {n} ^ {2} + \frac {1}{b} d s _ {m} ^ {2}\right).
$$

Let Y be a unit vector field on $S ^ { n }$ , V a unit vector field on $S ^ { m }$ , and X a unit vector field on either $S ^ { n }$ or $S ^ { m }$ that is perpendicular to both Y and V. The Koszul formula shows that

$$
\begin{array}{l} 2 g \left(\nabla_ {Y} X, V\right) = g ([ Y, X ], V) + g ([ V, Y ], X) - g ([ X, V ], Y) \\ = g ([ Y, X ], V) - g ([ X, V ], Y) \\ = 0, \\ \end{array}
$$

as $[ Y , X ]$ is either zero or tangent to $S ^ { n }$ and likewise with ŒX; V. Thus $\nabla _ { Y } X = 0$ if X is tangent to $S ^ { m }$ and $\nabla _ { Y } X$ is tangent to $S ^ { n }$ if X is tangent to $S ^ { n }$ r D. This shows that $\nabla _ { Y } X$ can be computed on $S _ { a } ^ { n }$ r. We can then calculate R knowing the curvatures on the two spheres from section 4.2.1 and invoke proposition 4.1.2 to obtain:

$$
\begin{array}{l} \Re (X \wedge V) = 0, \\ \Re (X \wedge Y) = a X \wedge Y, \\ \Re (U \wedge V) = b U \wedge V. \\ \end{array}
$$

In particular, proposition 4.1.1 shows that all sectional curvatures lie in the interval Œ0; max $\{ a , b \} ]$ . It also follows that

$$
\begin{array}{l} \operatorname{Ric} (X) = (n - 1) a X, \\ \operatorname{Ric} (V) = (m - 1) b V, \\ \operatorname{scal} = n (n - 1) a + m (m - 1) b. \\ \end{array}
$$

Therefore, we conclude that $S _ { a } ^ { n } \times S _ { b } ^ { m }$ always has constant scalar curvature, is an Einstein manifold exactly when $( n - 1 ) a = ( m - 1 ) b$ (which requires $n , m \geq 2$ or $n = m = 1 )$  D , and has constant sectional curvature only when $n = m = 1$ . Note also D Dthat the curvature tensor on $S _ { a } ^ { n } \times S _ { b } ^ { m }$ is always parallel.

### 4.2.3 Rotationally Symmetric Metrics

Next we consider what happens for a general rotationally symmetric metric

$$
d r ^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}.
$$

The metric is of the form $g = d r ^ { 2 } + g _ { r } \mathrm { o n } ( a , b ) \times S ^ { n - 1 }$ , with $g _ { r } = \rho ^ { 2 } d s _ { n - 1 } ^ { 2 }$ . As $d s _ { n - 1 } ^ { 2 }$ D Cdoes not depend on r we have that


$$
\begin{array}{l} 2 \operatorname{Hess} r = L _ {\partial_ {r}} g _ {r} \\ = L _ {\partial_ {r}} \left(\rho^ {2} d s _ {n - 1} ^ {2}\right) \\ = \partial_ {r} (\rho^ {2}) d s _ {n - 1} ^ {2} + \rho^ {2} L _ {\partial_ {r}} (d s _ {n - 1} ^ {2}) \\ = 2 \rho (\partial_ {r} \rho) d s _ {n - 1} ^ {2} \\ = 2 \frac {\partial_ {r} \rho}{\rho} g _ {r}. \\ \end{array}
$$

The Lie and covariant derivatives of the Hessian are computed as follows:

$$
\begin{array}{l} L _ {\partial_ {r}} \operatorname{Hess} r = L _ {\partial_ {r}} \left(\frac {\partial_ {r} \rho}{\rho} g _ {r}\right) \\ = \partial_ {r} \left(\frac {\partial_ {r} \rho}{\rho}\right) g _ {r} + \frac {\partial_ {r} \rho}{\rho} L _ {\partial_ {r}} (g _ {r}) \\ = \frac {\left(\partial_ {r} ^ {2} \rho\right) \rho - \left(\partial_ {r} \rho\right) ^ {2}}{\rho^ {2}} g _ {r} + 2 \left(\frac {\partial_ {r} \rho}{\rho}\right) ^ {2} g _ {r} \\ = \frac {\partial_ {r} ^ {2} \rho}{\rho} g _ {r} + \left(\frac {\partial_ {r} \rho}{\rho}\right) ^ {2} g _ {r} \\ = \frac {\partial_ {r} ^ {2} \rho}{\rho} g _ {r} + \mathrm{Hess} ^ {2} r \\ \end{array}
$$

and

$$
\begin{array}{l} \nabla_ {\partial_ {r}} \operatorname{Hess} r = \nabla_ {\partial_ {r}} \left(\frac {\partial_ {r} \rho}{\rho} g _ {r}\right) \\ = \partial_ {r} \left(\frac {\partial_ {r} \rho}{\rho}\right) g _ {r} + \frac {\partial_ {r} \rho}{\rho} \nabla_ {\partial_ {r}} (g _ {r}) \\ = \frac {\left(\partial_ {r} ^ {2} \rho\right) \rho - \left(\partial_ {r} \rho\right) ^ {2}}{\rho^ {2}} g _ {r} \\ = \frac {\partial_ {r} ^ {2} \rho}{\rho} g _ {r} - \left(\frac {\partial_ {r} \rho}{\rho}\right) ^ {2} g _ {r} \\ = \frac {\partial_ {r} ^ {2} \rho}{\rho} g _ {r} - \mathrm{Hess} ^ {2} r. \\ \end{array}
$$

The fundamental equations from proposition 3.2.11 show that when restricted to $S ^ { n - 1 }$ we have

$$
\mathrm{Hess} r = \frac {\partial_ {r} \rho}{\rho} g _ {r},
$$

$$
R (\cdot , \partial_ {r}, \partial_ {r}, \cdot) = - \frac {\partial_ {r} ^ {2} \rho}{\rho} g _ {r}.
$$

This implies that

$$
\nabla_ {X} \partial_ {r} = \left\{ \begin{array}{l l} \frac {\partial_ {r} \rho}{\rho} X & \text { if   } X \text {   is   tangent   to   } S ^ {n - 1}, \\ 0 & \text { if   } X = \partial_ {r}. \end{array} \right.
$$

$$
R \left(X, \partial_ {r}\right) \partial_ {r} = \left\{ \begin{array}{l l} - \frac {\partial_ {r} ^ {2} \rho}{\rho} X & \text { if } X \text { is   tangent   to } S ^ {n - 1}, \\ 0 & \text { if } X = \partial_ {r}. \end{array} \right.
$$

Next we calculate the other curvatures on

$$
\left(I \times S ^ {n - 1}, d r ^ {2} + \rho^ {2} (r) d s _ {n - 1} ^ {2}\right)
$$

that come from the tangential and mixed curvature equations (see theorems 3.2.4 and 3.2.5)

$$
g (R (X, Y) V, W) = g _ {r} \left(R ^ {r} (X, Y) V, W\right) - \mathrm{II} (Y, V) \mathrm{II} (X, W) + \mathrm{II} (X, V) \mathrm{II} (Y, W),
$$

$$
g \left(R (X, Y) Z, \partial_ {r}\right) = - \left(\nabla_ {X} \amalg\right) \left(Y, Z\right) + \left(\nabla_ {Y} \amalg\right) \left(X, Z\right).
$$

Using that $g _ { r }$ is the metric of curvature $\textstyle { \frac { 1 } { \rho ^ { 2 } } }$ on the sphere, we have from section 4.2.1 that

$$
g _ {r} \left(R ^ {r} (X, Y) V, W\right) = \frac {1}{\rho^ {2}} g _ {r} (X \wedge Y, W \wedge V).
$$

Combining this with II  Hess r we obtain from the first equation that

$$
g \left(R (X, Y) V, W\right) = \frac {1 - \left(\partial_ {r} \rho\right) ^ {2}}{\rho^ {2}} g _ {r} (X \wedge Y, W \wedge V).
$$

Finally we show that the mixed curvature vanishes as @r depends only on r $\frac { \partial _ { r } \rho } { \rho }$ $r :$

$$
\begin{array}{l} \nabla_ {X} \amalg = \nabla_ {X} \left(\frac {\partial_ {r} \rho}{\rho} g _ {r}\right) \\ = D _ {X} \left(\frac {\partial_ {r} \rho}{\rho}\right) g _ {r} + \frac {\partial_ {r} \rho}{\rho} \nabla_ {X} g _ {r} \\ = 0. \\ \end{array}
$$


From this we can use proposition 4.1.2 to conclude

$$
\Re (X \wedge \partial_ {r}) = - \frac {\partial_ {r} ^ {2} \rho}{\rho} X \wedge \partial_ {r} = - \frac {\ddot {\rho}}{\rho} X \wedge \partial_ {r},
$$

$$
\Re (X \wedge Y) = \frac {1 - (\partial_ {r} \rho) ^ {2}}{\rho^ {2}} X \wedge Y = \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} X \wedge Y
$$

In particular, we have diagonalized . Hence all sectional curvatures lie between the two values $- { \frac { \ddot { \rho } } { \rho } }$ and $\textstyle { \frac { 1 - { \dot { \rho } } ^ { 2 } } { \rho ^ { 2 } } }$ R. Furthermore, if we select an orthonormal basis $E _ { i }$ where $E _ { 1 } = \partial _ { r }$ , then the Ricci tensor and scalar curvature are

$$
\begin{array}{l} \operatorname{Ric} (X) = \sum_ {i = 1} ^ {n} R (X, E _ {i}) E _ {i} \\ = \sum_ {i = 1} ^ {n - 1} R (X, E _ {i}) E _ {i} + R (X, \partial_ {r}) \partial_ {r} \\ = \left((n - 2) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} - \frac {\ddot {\rho}}{\rho}\right) X, \\ \end{array}
$$

$$
\operatorname{Ric} \left(\partial_ {r}\right) = - (n - 1) \frac {\ddot {\rho}}{\rho} \partial_ {r}
$$

$$
\begin{array}{l} \operatorname{scal} = - (n - 1) \frac {\ddot {\rho}}{\rho} + (n - 1) \left((n - 2) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} - \frac {\ddot {\rho}}{\rho}\right) \\ = - 2 (n - 1) \frac {\ddot {\rho}}{\rho} + (n - 1) (n - 2) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}}. \\ \end{array}
$$

When n  2, it follows that sec  R , as there are no tangential curvatures. $n = 2$ $\begin{array} { r } { \sec { } = - \frac { \ddot { \rho } } { \rho } . } \end{array}$ D D  This makes for quite a difference between 2- and higher-dimensional rotationally symmetric metrics.

Constant curvature: First, we compute the curvature of $d r ^ { 2 } + \mathrm { s n } _ { k } ^ { 2 } ( r ) d s _ { n - 1 } ^ { 2 }$ on $S _ { k } ^ { n } .$ Since $\rho = \mathbf { s } \mathbf { n } _ { k }$ solves ${ \ddot { \rho } } + k \rho = 0$ it follows that sec $( X , \partial _ { r } ) = k .$  To compute $\textstyle { \frac { 1 - { \dot { \rho } } ^ { 2 } } { \rho ^ { 2 } } }$ recall from section 1.4.3 that if $\rho = \mathrm { s n } _ { k } ( r )$ , then

$$
\begin{array}{l} \dot {\rho} = \mathrm{cs} _ {k}, \\ 1 - \dot {\rho} ^ {2} = k \rho^ {2}. \\ \end{array}
$$

Thus, all sectional curvatures are equal to k, as promised.

Next let us see if we can find any interesting Ricci flat or scalar flat examples.

Ricci flat metrics: A Ricci flat metric must satisfy

$$
\frac {\ddot {\rho}}{\rho} = 0,
$$

$$
(n - 2) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} - \frac {\ddot {\rho}}{\rho} = 0.
$$

Hence, ${ \ddot { \rho } } \equiv 0$ and $\dot { \rho } ^ { 2 } \equiv 1$ , when $n > 2$ . Thus, $\rho \left( r \right) = a \pm r .$ . In case $n = 2$ we only need $\Ddot { \rho } = 0$ P  D ˙ D. In any case, the only Ricci flat rotationally symmetric metrics are, in R Dfact, flat.

Scalar flat metrics: To find scalar flat metrics we need to solve

$$
2 (n - 1) \left(- \frac {\ddot {\rho}}{\rho} + \frac {n - 2}{2} \cdot \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}}\right) = 0,
$$

when $n \geq 3$ . We rewrite this equation as

$$
\ddot {\rho} + \frac {n - 2}{2} \frac {\dot {\rho} ^ {2} - 1}{\rho} = 0.
$$

This is an autonomous second-order equation and can be made into a first-order equation by using $\rho$ as a new independent variable. If ${ \dot { \rho } } = G ( \rho )$ , then $\ddot { \rho } = G ^ { \prime } \dot { \rho } =$ $G ^ { \prime } G$ and the first-order equation becomes

$$
G ^ {\prime} G + \frac {n - 2}{2} \frac {G ^ {2} - 1}{\rho} = 0.
$$

Separation of variables shows that G and $\rho$ are related by

$$
\dot {\rho} ^ {2} = G ^ {2} = 1 + C \rho^ {2 - n},
$$

which after differentiation yields:

$$
\ddot {\rho} = - \frac {n - 2}{2} C \rho^ {1 - n}.
$$

We focus on solutions to this family of second-order equations. Note that they will in turn solve $\dot { \rho } ^ { 2 } = 1 + C \rho ^ { 2 - n }$ , when the initial values are related by $( \dot { \rho } \left( 0 \right) ) ^ { 2 } =$ P1  C . .0//2n . $1 + C \left( \rho \left( 0 \right) \right) ^ { 2 - n }$

CTo analyze the solutions to this equation that are positive and thus yield Riemannian metrics, we need to study the cases $C > 0 , C = 0 , C < 0$ separately. But first, notice that if $C \neq 0$ , then both $\dot { \rho }$ and $\ddot { \rho }$ approach $\pm \infty$ at points where $\rho$ approaches 0.

$C = 0 { \mathrm { : } }$ In this case ${ \ddot { \rho } } \equiv 0$ Rand $\dot { \rho } ^ { 2 } ( 0 ) = 1$ 1. Thus, $\rho = a + r$ is the only solution D R  P Dand the metric is the standard Euclidean metric.

$C > 0 \colon \rho$ is concave since

$$
\ddot {\rho} = - \frac {n - 2}{2} C \rho^ {1 - n} <   0.
$$


Thus, if $\rho$ is extended to its maximal interval, then it must cross the “r-axis,” but as pointed out above this means that $\ddot { \rho }$ becomes undefined. Consequently, we don’t get any nice metrics this way.

$C \ < 0 :$ This time the solutions are convex. If we write $C = - \rho _ { 0 } ^ { n - 2 }$ , then the equation $\begin{array} { r } { \dot { \rho } ^ { 2 } = 1 - \left( \frac { \rho _ { 0 } } { \rho } \right) ^ { 2 - n } } \end{array}$ shows that $0 < \rho _ { 0 } \le \rho$ . In case $\rho \left( a \right) = \rho _ { 0 }$ , it follows that ${ \dot { \rho } } \left( a \right) = 0$ and $\ddot { \rho } \left( a \right) > 0$ . Thus a is a strict minimum and the solution exists in P Da neighborhood of $^ { a , }$ . Furthermore, $| \dot { \rho } | \leq 1$ so the solutions can’t blow up in finite time. This shows that $\rho$ j Pj is defined on all of R. Thus, there are scalar flat rotationally symmetric metrics on R Sn 1. $\mathbb { R } \times S ^ { n - 1 }$

-We focus on the solution with $\rho ( 0 ) = \rho _ { 0 } > 0$ , which forces ${ \dot { \rho } } ( 0 ) = 0$ . Notice that $\rho$ is even as $\rho \left( - r \right)$ D P Dsolves the same initial value problem. Consequently, $( r , x ) \mapsto$ $( - r , - x )$ is an isometry on

$$
\left(\mathbb {R} \times S ^ {n - 1}, d r ^ {2} + \rho^ {2} (r) d s _ {n - 1} ^ {2}\right).
$$

Thus we get a Riemannian covering map

$$
\mathbb {R} \times S ^ {n - 1} \rightarrow \tau (\mathbb {R P} ^ {n - 1})
$$

and a scalar flat metric on $\tau \left( \mathbb { R } \mathbb { P } ^ { n - 1 } \right)$ , the tautological line bundle over $\mathbb { R } \mathbb { P } ^ { n - 1 }$ .

If we use $\rho$ as the parameter instead of r, then

$$
d \rho^ {2} = \dot {\rho} ^ {2} d r ^ {2} = \left(1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 2}\right) d r ^ {2}.
$$

When $r > 0$ it follows that $\rho > \rho _ { 0 }$ and the metric has the more algebraically explicit form

$$
d r ^ {2} + \rho^ {2} (r) d s _ {n - 1} ^ {2} = \frac {1}{1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 2}} d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}.
$$

This shows that the metric looks like the Euclidean metric $d \rho ^ { 2 } + \rho ^ { 2 } d s _ { n - 1 } ^ { 2 }$ as $\rho \to \infty$

In section 5.6.2 we show that $\mathbb { R } \times S ^ { n - 1 } , n \geq 3$ C  ! 1, does not admit a (complete) - constant curvature metric. Later in section 7.3.1 and theorem 7.3.5, we will see that if $\mathbb { R } \times S ^ { n - 1 }$ has $\operatorname { R i c } \equiv 0 .$ , then $S ^ { n - 1 }$ also has a metric with $\operatorname { R i c } \equiv 0$ . When $n = 3$ or -4 this means that $S ^ { 2 }$ and $S ^ { 3 }$  Dhave flat metrics, and we shall see in section 5.6.2 that this is not possible. Thus we have found a manifold with a nice scalar flat metric that does not carry any Ricci flat or constant curvature metrics.

### 4.2.4 Doubly Warped Products

We wish to compute the curvatures on

$$
\left(I \times S ^ {p} \times S ^ {q}, d r ^ {2} + \rho^ {2} (r) d s _ {p} ^ {2} + \phi^ {2} (r) d s _ {q} ^ {2}\right).
$$

This time the Hessian looks like

$$
\mathrm{Hess} r = (\partial_ {r} \rho) \rho d s _ {p} ^ {2} + (\partial_ {r} \phi) \phi d s _ {q} ^ {2}.
$$

and we see as in the rotationally symmetric case that

$$
\nabla_ {X} \mathrm{II} = 0.
$$

Thus the mixed curvatures vanish. Let X; Y be tangent to $S ^ { p }$ and V; W tangent to $S ^ { q } .$ . Using our curvature calculations from the rotationally symmetric case (see section 4.2.3) and the product sphere case (see section 4.2.2) the tangential curvature equations (see theorem 3.2.4) yield

$$
\Re (\partial_ {r} \wedge X) = - \frac {\ddot {\rho}}{\rho} \partial_ {r} \wedge X,
$$

$$
\Re \left(\partial_ {r} \wedge V\right) = - \frac {\ddot {\phi}}{\phi} \partial_ {r} \wedge V,
$$

$$
\Re (X \wedge Y) = \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} X \wedge Y,
$$

$$
\Re (U \wedge V) = \frac {1 - \dot {\phi} ^ {2}}{\phi^ {2}} U \wedge V,
$$

$$
\Re (X \wedge V) = - \frac {\dot {\rho} \dot {\phi}}{\rho \phi} X \wedge V.
$$

From this it follows that all sectional curvatures are convex linear combinations of

$$
- \frac {\ddot {\rho}}{\rho}, - \frac {\ddot {\phi}}{\phi}, \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}}, \frac {1 - \dot {\phi} ^ {2}}{\phi^ {2}}, - \frac {\dot {\rho} \dot {\phi}}{\rho \phi}.
$$

Moreover,

$$
\operatorname{Ric} \left(\partial_ {r}\right) = \left(- p \frac {\ddot {\rho}}{\rho} - q \frac {\ddot {\phi}}{\phi}\right) \partial_ {r},
$$


$$
\operatorname{Ric} (X) = \left(\frac {- \ddot {\rho}}{\rho} + (p - 1) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} - q \cdot \frac {\dot {\rho} \dot {\phi}}{\rho \phi}\right) X,
$$

$$
\operatorname{Ric} (V) = \left(\frac {- \ddot {\phi}}{\phi} + (q - 1) \frac {1 - \dot {\phi} ^ {2}}{\phi^ {2}} - p \cdot \frac {\dot {\rho} \dot {\phi}}{\rho \phi}\right) V.
$$

### 4.2.5 The Schwarzschild Metric

We wish to find a Ricci flat metric on $\mathbb { R } ^ { 2 } \times S ^ { n - 2 }$ . Choose $p = n - 2$ and $q = 1$ in - Dthe above doubly warped product case so that the metric is on $( 0 , \infty ) \times S ^ { n - 2 } \times S ^ { 1 }$ . $ { \mathrm { W e } } ^ { \cdot }  { \mathrm { l l } }$ see that this forces $d r ^ { 2 } + \rho ^ { 2 } \left( r \right) d s _ { n - 2 } ^ { 2 }$ 1 - -to be scalar flat (see also exercise 4.7.16 Cfor a more general treatment).

The equations to be solved are:

$$
- (n - 2) \frac {\ddot {\rho}}{\rho} - \frac {\ddot {\phi}}{\phi} = 0,
$$

$$
- \frac {\ddot {\rho}}{\rho} + (n - 3) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} - \frac {\dot {\rho} \dot {\phi}}{\rho \phi} = 0,
$$

$$
- \frac {\ddot {\phi}}{\phi} - (n - 2) \frac {\dot {\rho} \dot {\phi}}{\rho \phi} = 0.
$$

Subtracting the first and last gives

$$
\frac {\ddot {\rho}}{\rho} = \frac {\dot {\rho} \dot {\phi}}{\rho \phi}.
$$

If we substitute this into the second equation we simply obtain the scalar flat equation for $d r ^ { 2 } + \rho ^ { 2 } \left( r \right) d s _ { n - 2 } ^ { 2 }$ :

$$
- 2 \frac {\ddot {\rho}}{\rho} + (n - 3) \frac {1 - \dot {\rho} ^ {2}}{\rho^ {2}} = 0.
$$

We use the solution $\rho \left( r \right)$ from section 4.2.3 that is even in r and satisfies:

$$
\rho (0) = \rho_ {0},
$$

$$
\dot {\rho} ^ {2} = 1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 3}.
$$

Next note that $\begin{array} { r } { \frac { \ddot { \rho } } { \rho } = \frac { \dot { \rho } \dot { \phi } } { \rho \phi } } \end{array}$ implies that $\begin{array} { r } { \frac { \dot { \rho } } { \phi } = c } \end{array}$ is constant. Thus we can define $\phi$ using ${ \dot { \rho } } = c \phi$ .

Since $\begin{array} { r } { \dot { \rho } ^ { 2 } = 1 - \left( \frac { \rho _ { 0 } } { \rho } \right) ^ { n - 3 } } \end{array}$ we obtain $\begin{array} { r } { c ^ { 2 } \phi ^ { 2 } = 1 - \left( \frac { \rho _ { 0 } } { \rho } \right) ^ { n - 3 } } \end{array}$ . This forces $\phi \left( 0 \right) = 0$ From $\begin{array} { r } { 2 \ddot { \rho } = \left( n - 3 \right) \frac { 1 } { \rho _ { 0 } } \left( \frac { \rho _ { 0 } } { \rho } \right) ^ { n - 2 } } \end{array}$ n 2 we get

$$
2 c \dot {\phi} = (n - 3) \frac {1}{\rho_ {0}} \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 2}.
$$

To obtain a smooth metric on $\mathbb { R } ^ { 2 } \times S ^ { n - 2 }$ we need $\phi$ to be odd with $\dot { \phi } \left( 0 \right) = 1$ . This forces $\begin{array} { r } { c = \frac { n - 3 } { 2 } \rho _ { 0 } ^ { - 1 } } \end{array}$ and gives us $\begin{array} { r } { \dot { \phi } = \left( \frac { \rho _ { 0 } } { \rho } \right) ^ { n - 2 } } \end{array}$ . Since $\rho$ Dis even this makes $\dot { \phi }$ even and hence $\phi$ odd as $\phi \left( 0 \right) = 0$ . We also see that $\begin{array} { r } { \ddot { \phi } = \frac { n - 3 } { 2 } ( 2 - n ) \rho _ { 0 } ^ { n - 3 } \rho ^ { 1 - n } \phi } \end{array}$ . This D D shows that the first equation, and hence the other two, are satisfied:

$$
- (n - 2) \frac {n - 3}{2} \rho_ {0} ^ {n - 2} \rho^ {1 - n} - \frac {n - 3}{2} (2 - n) \rho_ {0} ^ {n - 3} \rho^ {1 - n} = 0.
$$

If we use $\rho$ as a parameter instead of $r$ as in section 4.2.3, then we obtain the more explicit algebraic form

$$
\frac {1}{1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 3}} d \rho^ {2} + \rho^ {2} d s _ {n - 2} ^ {2} + \rho_ {0} ^ {2} \frac {4}{(n - 3) ^ {3}} \left(1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 3}\right) d \theta^ {2}.
$$

Thus, the metric looks like $\mathbb { R } ^ { n - 1 } \times S ^ { 1 }$ at infinity, where the metric on $S ^ { 1 }$ is suitably -scaled. Therefore, the Schwarzschild metric is a Ricci flat metric on $\mathbb { R } ^ { 2 } \times S ^ { n - 2 }$ that at infinity looks approximately like the flat metric on $\mathbb { R } ^ { n - 1 } \times S ^ { 1 }$ .

-The classical Schwarzschild metric is a space-time metric and is not smooth at $\rho =$ $\rho _ { 0 }$ . The parameter $c$ Dabove is taken to be the speed of light and is not forced to depend on $\rho _ { 0 }$ . We also replace $S ^ { 1 }$ by R. The metric looks like:

$$
\frac {1}{1 - \frac {\rho_ {0}}{\rho}} d \rho^ {2} + \rho^ {2} d s _ {2} ^ {2} - \frac {1}{c ^ {2}} \left(1 - \frac {\rho_ {0}}{\rho}\right) d t ^ {2}.
$$

## 4.3 Warped Products in General

We are now ready for a slightly more general context for warped products. This will allow us to characterize the rotationally symmetric constant curvature metrics through a very simple equation for the Hessian of a modified distance function.

### 4.3.1 Basic Constructions

Given a Riemannian metric $( H , g _ { H } )$ a warped product (over I) is defined as a metric on $I \times H$ , where $I \subset \mathbb { R }$ is an open interval, with metric

$$
g = d r ^ {2} + \rho^ {2} (r) g _ {H},
$$

where $\rho > 0$ on all of I. One could also more generally consider

$$
\psi^ {2} (r) d r ^ {2} + \rho^ {2} (r) g _ {H}.
$$

However, a change of coordinates defined by relating the differentials $d \rho = \psi \left( r \right)$ dr allows us to rewrite this as

$$
d \rho^ {2} + \rho^ {2} (r (\rho)) g _ {H}.
$$

Important special cases are the basic product $g = d r ^ { 2 } + g _ { H }$ and polar coordinates $d r ^ { \bar { 2 } } + r ^ { 2 } d s _ { n - 1 } ^ { 2 }$ on $( 0 , \infty ) \times S ^ { n - 1 }$ D Crepresenting the Euclidean metric.

C  1 -The goal is to repackage the information that describes the warped product representation with a goal of finding a simple characterization of such metrics. Rather than using both r and $\rho$ we will see that just one function suffices. Starting with a warped product $d r ^ { 2 } + \rho ^ { 2 } \left( r \right) g _ { H }$ construct the function $\begin{array} { r } { f { \mathbf \alpha } = { \mathbf \{ \alpha } } \int \rho d \boldsymbol { r }  \end{array}$ on $M = I \times H$ . Since $d f = \rho d r$ Cit is clear that

$$
d r ^ {2} + \rho^ {2} (r) g _ {H} = \frac {1}{\rho^ {2} (r)} d f ^ {2} + \rho^ {2} (r) g _ {H}.
$$

Proposition 4.3.1. The Hessian of f has the property

$$
\operatorname{Hess} f = \dot {\rho} g.
$$

Proof. The Hessian of f is calculated from the Hessian of r. The latter is calculated as in section 4.2.3

$$
\begin{array}{l} \text { Hess } r = \frac {1}{2} L _ {\partial_ {r}} g \\ = \frac {1}{2} L _ {\partial_ {r}} \left(d r ^ {2} + \rho^ {2} (r) g _ {H}\right) \\ = \frac {1}{2} \partial_ {r} (\rho^ {2} (r)) g _ {H} \\ = \dot {\rho} \rho g _ {H}. \\ \end{array}
$$

So we obtain

$$
\begin{array}{l} (\operatorname{Hess} f) (X, Y) = (\nabla_ {X} d f) (Y) \\ = \left(\nabla_ {X} \rho d r\right) (Y) \\ = \dot {\rho} d r (X) d r (Y) + \rho \operatorname{Hess} r (X, Y) \\ = \dot {\rho} d r ^ {2} (X, Y) + \rho \text {Hess} r (X, Y) \\ = \dot {\rho} d r ^ {2} (X, Y) + \dot {\rho} \rho^ {2} g _ {H} \\ = \dot {\rho} g. \\ \end{array}
$$

In other words we have shown that for a warped product it is possible to find a function f whose Hessian is conformal to the metric. In fact the relationship

$$
\dot {\rho} = \frac {d \rho}{d r} = \frac {d \rho}{d f} \frac {d f}{d r} = \frac {d \rho}{d f} \rho = \frac {1}{2} \frac {d | \nabla f | ^ {2}}{d f}
$$

tells us that the warped product representation depends only on f and $| \nabla f |$ since we have

$$
g = \frac {1}{| \nabla f | ^ {2}} d f ^ {2} + | \nabla f | ^ {2} g _ {H},
$$

$$
\mathrm{Hess} f = \frac {1}{2} \frac {d | \nabla f | ^ {2}}{d f} g.
$$

Before turning to the general characterization let us consider how these constructions work on our standard constant curvature warped products.

Example 4.3.2. Consider the warped product given by

$$
d r ^ {2} + \mathrm{sn} _ {k} ^ {2} (r) d s _ {n - 1} ^ {2}.
$$

We select the antiderivative of $\mathrm { s n } _ { k } \left( r \right)$ that vanishes at $r = 0$ . When $k = 0$

$$
f = \int r d r = \frac {1}{2} r ^ {2},
$$

$$
\operatorname{Hess} f = g.
$$

When $k \neq 0$

$$
f = \int \operatorname{sn} _ {k} (r) = \frac {1}{k} - \frac {1}{k} \operatorname{cs} _ {k} (r),
$$

$$
\operatorname{Hess} f = \operatorname{cs} _ {k} (r) g = (1 - k f) g.
$$


More specifically, when $k = 1$

$$
f = 1 - \cos r,
$$

$$
\operatorname{Hess} f = \cos r = 1 - f
$$

and when $k = - 1$

$$
f = - 1 + \cosh r,
$$

$$
\operatorname{Hess} f = \cosh r = 1 + f.
$$

### 4.3.2 General Characterization

We can now state and prove our main characterization of warped products.

Theorem 4.3.3 (Brinkmann, 1925). If there is a smooth function f whose Hessian is conformal to the metric, i.e., Hess $f \ = \ \lambda g ,$ , then the Riemannian structure is locally a warped product $g = d r ^ { 2 } + \rho ^ { 2 } \left( r \right)$ gH around any point where df $\neq 0 .$ . Moreover, if df $( p ) \ = \ 0$ Dand $\lambda \left( p \right) \neq 0 ,$ , then $g = d r ^ { 2 } + \rho ^ { 2 } ( r ) d s _ { n - 1 } ^ { 2 }$ ¤on some neighborhood of $\dot { p } .$ .

Proof. We first focus attention on the case where $d f$ never vanishes. Thus $f$ can locally be considered the first coordinate in a coordinate system.

Define $\rho = | \nabla f |$ and note that

$$
D _ {X} \rho^ {2} = 2 \operatorname{Hess} f (\nabla f, X) = 2 \lambda g (\nabla f, X),
$$

i.e., $d \rho ^ { 2 } = 2 \lambda d f$ . Consequently also d $\wedge d f = 0$ . It follows that $d \rho$ and $d \lambda$ are Dboth proportional to $d f$ ^and in particular that $\rho$ Dand  are locally constant on level sets of $f .$ . Thus we can assume that $\rho = \rho \left( f \right)$ and $\lambda = \lambda \left( f \right)$ . This shows in turn that $\textstyle { \frac { 1 } { \rho } } d f$ Dis closed and locally exact. Define r by $\begin{array} { r } { d r = { \frac { 1 } { \rho } } d f } \end{array}$ and use r as a new parameter. Note that r is a distance function since

$$
\partial_ {r} = \nabla r = \frac {1}{\rho (f)} \nabla f
$$

is a unit vector field. We can then decompose the metric as $g = d r ^ { 2 } + g ,$ on a suitable domain $I \times H \subset M$ , where $H \subset \{ x \in M \mid r \left( x \right) = r _ { 0 } \}$ . When $X \perp \partial$ it follows that $\begin{array} { r } { \nabla _ { X } d r = \frac { 1 } { \rho } \nabla _ { X } d f } \end{array}$ . Thus Hess $\begin{array} { r } { r = { \frac { \lambda } { \rho } } g , } \end{array}$ 2and $\begin{array} { r } { L _ { \partial _ { r } } g _ { r } = \frac { 2 \lambda } { \rho } g _ { r } } \end{array}$ D g2 gr.

Observe that if $g _ { H }$ is defined such that $g _ { r _ { 0 } } = \rho ^ { 2 } \left( r _ { 0 } \right) g _ { H }$ is the restriction of $g$ to the fixed level set $r = r _ { 0 }$ , then also

$$
L _ {\partial_ {r}} \left(\rho^ {2} g _ {H}\right) = \left(\partial_ {r} \rho^ {2}\right) g _ {H} = 2 \lambda \rho g _ {H} = \frac {2 \lambda}{\rho} \rho^ {2} g _ {H}.
$$

This shows that

$$
g = d r ^ {2} + g _ {r} = d r ^ {2} + \rho^ {2} g _ {H}.
$$

Next assume that $p$ is a nondegenerate critical point for $f .$ After possibly replacing f by $\alpha f + \beta$ , we can assume that Hess $f = \lambda g$ with $f ( p ) = 0 , d f \vert _ { p } = 0$ , and $\lambda \left( p \right) = 1$ C D D. Further assume that M is the connected component of $\{ f < \epsilon \}$ Dthat contains $p$ Dand that $p$ is the only critical point for $f .$ Since Hess $f = g$ at $p$ gthere exist coordinates around p with $y ^ { i } \left( p \right) = 0$ and

$$
f \left(y ^ {1}, \dots , y ^ {n}\right) = \frac {1}{2} \left(\left(y ^ {1}\right) ^ {2} + \dots + \left(y ^ {n}\right) ^ {2}\right).
$$

Therefore, all the regular level sets for f are spheres in this coordinates system. We can use the first part of the proof to obtain a warped product structure $d r ^ { 2 } + \rho ^ { 2 } g _ { S ^ { n - 1 } }$ on ${ \cal M } - \{ p \} \simeq ( 0 , b ) \times S ^ { n - 1 }$ , where $g _ { S ^ { n - 1 } }$ is a metric on $S ^ { n - 1 }$ and $r  0$ as we approach $p$ g ' - !. When all functions are written as functions of r they are determined by $\lambda$ in the following simple way:

$$
\begin{array}{l} f = f (r), \\ \frac {d f}{d r} = \rho (r), \\ \frac {d ^ {2} f}{d r ^ {2}} = \frac {d \rho}{d r} = \lambda , \\ f (0) = \frac {d f}{d r} (0) = \rho (0) = 0, \\ \frac {d ^ {2} f}{d r ^ {2}} (0) = \frac {d \rho}{d r} (0) = \lambda (0) = 1. \\ \end{array}
$$

The goal is to show that $g _ { S ^ { n - 1 } } = d s _ { n - 1 } ^ { 2 }$ . The initial conditions for $\rho$ guarantee that the metric $d r ^ { 2 } + \rho ^ { 2 } d s _ { n - 1 } ^ { 2 }$ D is continuous at p when we switch to Cartesian coordinates C as in section 1.4.4. We can use a similar analysis here. First assume that dim $M = 2$ and $x = r$ cos $\theta , y = r$ sin $\theta$ , where r is as above and $\theta$ coordinatizes $S ^ { 1 }$ D. The metric $g _ { S ^ { 1 } }$ on $S ^ { 1 }$ Dmust take the form $\phi ^ { 2 } \left( \theta \right) d \theta ^ { 2 }$ for some function $\phi : S ^ { 1 } \to ( 0 , \infty )$ . The metric is then given by $g = \dot { d r } ^ { 2 } + \rho ^ { 2 } \left( r \right) \phi ^ { 2 } \left( \theta \right) d \theta ^ { 2 }$ W ! 1. As the new coordinate fields are


$$
\partial_ {x} = \cos \theta \partial_ {r} - \frac {1}{r} \sin \theta \partial_ {\theta},
$$

$$
\partial_ {y} = \sin \theta \partial_ {r} + \frac {1}{r} \cos \theta \partial_ {\theta},
$$

the new metric coefficients become

$$
g _ {x x} = \cos^ {2} \theta + \phi^ {2} (\theta) \frac {\rho^ {2} (r)}{r ^ {2}} \sin^ {2} \theta ,
$$

$$
g _ {y y} = \sin^ {2} \theta + \phi^ {2} (\theta) \frac {\rho^ {2} (r)}{r ^ {2}} \cos^ {2} \theta .
$$

As $r \to 0$ we obtain the limits

$$
g _ {x x} (p) = \cos^ {2} \theta + \phi^ {2} (\theta) \sin^ {2} \theta ,
$$

$$
g _ {y y} (p) = \sin^ {2} \theta + \phi^ {2} (\theta) \cos^ {2} \theta ,
$$

since $\rho \left( 0 \right) = 0$ and ${ \dot { \rho } } \left( 0 \right) = 1$ . However, these limits are independent of $\theta$ as they D P Dare the metric coefficients at $p .$ . This implies first that $\phi \left( \theta \right)$ is constant since

$$
g _ {x x} (p) + g _ {y y} (p) = 1 + \phi^ {2} (\theta)
$$

and then that $\phi = 1 \mathrm { a s } g _ { x x } ( p )$ is independent of $\theta .$ .

DThis case can be adapted to higher dimensions. Simply select a plane that intersects the unit sphere $S ^ { n - 1 }$ in a great circle $c \left( \theta \right)$ , where $\theta$ is the arclength parameter with respect to the standard metric. The metric g restricted to this plane can then be expressed as in the 2-dimensional case and it follows that $1 = \phi ^ { 2 } \left( \theta \right) =$ $g _ { S ^ { n - 1 } } \left( { \frac { d c } { d \theta } } , { \frac { d c } { d \theta } } \right)$ . $\textstyle \mathrm { A s } \ { \frac { d c } { d \theta } }$ can be chosen to be any unit vector on $S ^ { n - 1 }$ D Dit follows that $g _ { S ^ { n - 1 } }$ agrees with the standard metric on the unit sphere.

This theorem can be used to characterize the warped product constant curvature metrics from example 4.3.2.

Corollary 4.3.4. If there is a function f on a Riemannian manifold such that

$$
f (p) = 0,
$$

$$
d f | _ {p} = 0,
$$

and

$$
\operatorname{Hess} f = (1 - k f) g,
$$

then the metric is the warped product metric of curvature k in a neighborhood of p as described in example 4.3.2.

Proof. Note that $\lambda = 1 - k f$ is an explicit function of f . So we can find $f = f \left( r \right)$ as the solution to

$$
\frac {d ^ {2} f}{d r ^ {2}} = 1 - k f,
$$

$$
f (0) = 0,
$$

$$
f ^ {\prime} (0) = 0,
$$

and the warping function by

$$
\rho (r) = | \nabla f | = \frac {d f}{d r}.
$$

The solutions are consequently given by the standard warped product representations of constant curvature metrics:

Euclidean Space

$$
g = d r ^ {2} + r ^ {2} d s _ {n - 1} ^ {2},
$$

$$
f (r) = \frac {1}{2} r ^ {2}.
$$

Constant curvature $k \neq 0$

$$
g = d r ^ {2} + \mathrm{sn} _ {k} ^ {2} (r) d s _ {n - 1} ^ {2},
$$

$$
f (r) = \frac {1}{k} - \frac {1}{k} \operatorname{cs} _ {k} (r).
$$

In all cases $r = 0$ corresponds to the point $p .$

Remark 4.3.5. A function $f : M \to \mathbb { R }$ is called transnormal provided $\left| d f \right| ^ { 2 } = \rho ^ { 2 } \left( f \right)$ for some smooth function $\rho .$ W ! j j D. We saw above that functions with conformal Hessian locally have this property. However, it is easy to construct transnormal functions that do not have conformal Hessian. A good example is the function $\begin{array} { r } { f = \frac { 1 } { 2 } } \end{array}$ sin .2r/ on the doubly warped product representation of $S ^ { 3 } \left( 1 \right)$ given by $d r ^ { 2 } + \sin ^ { 2 } \bar { ( r ) } d \theta _ { 1 } ^ { 2 } +$ $\cos ^ { 2 } \left( r \right) d \theta _ { 2 } ^ { 2 }$ on $( 0 , \pi / 2 ) \times S ^ { 1 } \times S ^ { 1 }$ .

### 4.3.3 Conformal Representations of Warped Products

If $( M , g )$ is a Riemannian manifold and is positive on M, then we can construct a new Riemannian manifold $( M , \psi ^ { 2 } g )$ . Such a change in metric is called a conformal change, and $\psi ^ { 2 }$ is referred to as the conformal factor.

A warped product can be made to look like a conformal metric in two basic ways.

$$
d r ^ {2} + \rho^ {2} (r) g _ {H} = \psi^ {2} (\rho) (d \rho^ {2} + g _ {H}),
$$


$$
d r = \psi (\rho) d \rho ,
$$

$$
\rho (r) = \psi (\rho)
$$

or

$$
\begin{array}{l} d r ^ {2} + \rho^ {2} (r) g _ {H} = \psi^ {2} (\rho) \left(d \rho^ {2} + \rho^ {2} g _ {H}\right), \\ d r = \psi (\rho) d \rho , \\ \rho (r) = \rho \psi (\rho). \\ \end{array}
$$

#### 4.3.3.1 Conformal Models of Spheres

The first of these changes has been studied since the time of Mercator. The sphere of radius R and curvature $\frac { 1 } { R ^ { 2 } }$ can be written as

$$
\begin{array}{l} R ^ {2} d s _ {n} ^ {2} = R ^ {2} \left(d t ^ {2} + \sin^ {2} (t) d s _ {n - 1} ^ {2}\right) \\ = d r ^ {2} + R ^ {2} \sin^ {2} \left(\frac {r}{R}\right) d s _ {n - 1} ^ {2}. \\ \end{array}
$$

The conformal change envisioned by Mercator takes the form

$$
R ^ {2} d s _ {n} ^ {2} = \psi^ {2} (\rho) (d \rho^ {2} + d s _ {n - 1} ^ {2}).
$$

As

$$
\begin{array}{l} \psi (\rho) d \rho = d r, \\ \psi (\rho) = R \sin \left(\frac {r}{R}\right) \\ \end{array}
$$

we obtain

$$
\begin{array}{l} d \rho = \frac {d r}{R \sin \left(\frac {r}{R}\right)}, \\ \rho = \frac {1}{2} \log \frac {1 - \cos \left(\frac {r}{R}\right)}{1 + \cos \left(\frac {r}{R}\right)}. \\ \end{array}
$$

Thus

$$
\cos \left(\frac {r}{R}\right) = \frac {1 - \exp (2 \rho)}{1 + \exp (2 \rho)}
$$

and

$$
\psi^ {2} = R ^ {2} \sin^ {2} \left(\frac {r}{R}\right) = R ^ {2} \frac {4 \exp (2 \rho)}{(1 + \exp (2 \rho)) ^ {2}}
$$

showing that

$$
R ^ {2} d s _ {n} ^ {2} = R ^ {2} \frac {4 \exp (2 \rho)}{(1 + \exp (2 \rho)) ^ {2}} \left(d \rho^ {2} + d s _ {n - 1} ^ {2}\right).
$$

Switching the spherical metric to being conformal to the polar coordinate representation of Euclidean space took even longer and probably wasn’t studied much until the time of Riemann. The calculations in this case require that we first solve

$$
\frac {d \rho}{\rho} = \frac {d r}{R \sin \left(\frac {r}{R}\right)}.
$$

This integrates to

$$
\rho^ {2} = \frac {1 - \cos \left(\frac {r}{R}\right)}{1 + \cos \left(\frac {r}{R}\right)}
$$

and implies

$$
\cos \left(\frac {r}{R}\right) = \frac {1 - \rho^ {2}}{1 + \rho^ {2}}.
$$

The relationship

$$
R \sin \left(\frac {r}{R}\right) = \rho \psi (\rho)
$$

then gives us

$$
\psi^ {2} (\rho) = R ^ {2} \frac {4}{(1 + \rho^ {2}) ^ {2}}
$$

and consequently

$$
\begin{array}{l} R ^ {2} d s _ {n} ^ {2} = R ^ {2} \psi^ {2} (\rho) (d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}) \\ = R ^ {2} \frac {4}{(1 + \rho^ {2}) ^ {2}} \left(d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}\right) \\ = \frac {4 R ^ {2}}{(1 + \rho^ {2}) ^ {2}} g _ {\mathbb {R} ^ {n}}. \\ \end{array}
$$

This gives us a representation of the metric on the punctured sphere that only involves algebraic functions. See also exercise 4.7.13 for a geometric construction of the representation.

#### 4.3.3.2 Conformal Models of Hyperbolic Space

We defined hyperbolic space $H ^ { n }$ in example 1.1.7 and exhibited it as a rotationally symmetric metric in example 1.4.6. The rotationally symmetric metric on $H ^ { n } \left( R \right)$ can be written as

$$
\begin{array}{l} d r ^ {2} + \mathrm{sn} _ {R - 2} ^ {2} (r) d s _ {n - 1} ^ {2} = d r ^ {2} + R ^ {2} \sinh^ {2} \left(\frac {r}{R}\right) d s _ {n - 1} ^ {2} \\ = R ^ {2} \left(d t ^ {2} + \sinh^ {2} (t) d s _ {n - 1} ^ {2}\right). \\ \end{array}
$$

A construction similar to what we just saw for the sphere leads to the conformal polar coordinate representation

$$
R ^ {2} \left(d t ^ {2} + \sinh^ {2} (t) d s _ {n - 1} ^ {2}\right) = \frac {4 R ^ {2}}{(1 - \rho^ {2}) ^ {2}} g _ {\mathbb {R} ^ {n}}.
$$

This time, however, the metric is only defined on the unit ball. This is also known as the Poincarè model on the unit disc. See also exercise 4.7.13 for a geometric construction of the representation.

Consider the metric

$$
\left(\frac {1}{x ^ {n}}\right) ^ {2} \left((d x ^ {1}) ^ {2} + \dots + (d x ^ {n}) ^ {2}\right)
$$

on the open half space $x ^ { n } > 0$ . If we define $r = \log ( x ^ { n } )$ , then this also becomes the warped product:

$$
g = d r ^ {2} + (e ^ {- r}) ^ {2} \left((d x ^ {1}) ^ {2} + \dots + (d x ^ {n - 1}) ^ {2}\right).
$$

The upper half space model can be realized as the Poincaré disc using an inversion, i.e., a conformal transformation of Euclidean space that inverts in a suitable sphere. It’ll be convenient to write $x = ( x ^ { 1 } , \ldots , x ^ { n - 1 } )$ as the first $n - 1$ coordinates and $y \ = \ x ^ { n }$ D. The inversion in the sphere of radius $\sqrt { 2 }$ centered at $( 0 , - 1 ) \in \mathbb { R } ^ { n - 1 } \times \mathbb { R }$ Dis given by

$$
\begin{array}{l} F (x, y) = (0, - 1) + \frac {2 (x , y + 1)}{r ^ {2}} \\ = \left(\frac {2 x}{r ^ {2}}, - 1 + \frac {2 (y + 1)}{r ^ {2}}\right) \\ = \frac {1}{r ^ {2}} \left(2 x, 1 - | x | ^ {2} - y ^ {2}\right), \\ \end{array}
$$

where $r ^ { 2 } = \left| x \right| ^ { 2 } + ( y + 1 ) ^ { 2 }$ . This maps H to the unit ball since

$$
| F (x, y) | ^ {2} = 1 - \frac {4 y}{r ^ {2}} = \rho^ {2}.
$$

The goal is to show that F transforms the conformal unit ball model to the conformal half space model. This is a direct calculation after we write F out in coordinates:

$$
F ^ {k} = 2 \frac {x ^ {k}}{r ^ {2}}, k <   n,
$$

$$
F ^ {n} = \frac {2 (y + 1)}{r ^ {2}} - 1.
$$

This allows us to calculate the differentials so that we can check how the metric is transformed:

$$
\begin{array}{l} \frac {4}{(1 - \rho^ {2}) ^ {2}} \left((d F ^ {n}) ^ {2} + \sum_ {k <   n} (d F ^ {k}) ^ {2}\right) \\ = \frac {(r ^ {2}) ^ {2}}{4 y ^ {2}} \left(\frac {2 d y}{r ^ {2}} - \frac {2 (y + 1) 2 r d r}{(r ^ {2}) ^ {2}}\right) ^ {2} \\ + \sum_ {k <   n} \frac {(r ^ {2}) ^ {2}}{4 y ^ {2}} \left(\frac {2 d x ^ {k}}{r ^ {2}} - \frac {2 x ^ {k} 2 r d r}{(r ^ {2}) ^ {2}}\right) ^ {2} \\ = \frac {1}{y ^ {2}} \left(d y - \frac {(y + 1) 2 r d r}{r ^ {2}}\right) ^ {2} + \frac {1}{y ^ {2}} \sum_ {k <   n} \left(d x ^ {k} - \frac {x ^ {k} 2 r d r}{r ^ {2}}\right) ^ {2} \\ = \frac {1}{y ^ {2}} \left(d y ^ {2} + \sum_ {k <   n} \left(d x ^ {k}\right) ^ {2}\right) + \frac {1}{y ^ {2}} \left(\frac {(y + 1) 2 r d r}{r ^ {2}}\right) ^ {2} + \frac {1}{y ^ {2}} \sum_ {k <   n} \left(\frac {x ^ {k} 2 r d r}{r ^ {2}}\right) ^ {2} \\ - \frac {1}{y ^ {2}} d y \frac {(y + 1) 2 r d r}{r ^ {2}} - \frac {1}{y ^ {2}} \sum_ {k <   n} d x ^ {k} \frac {x ^ {k} 2 r d r}{r ^ {2}} \\ - \frac {1}{y ^ {2}} \frac {(y + 1) 2 r d r}{r ^ {2}} d y - \frac {1}{y ^ {2}} \sum_ {k <   n} \frac {x ^ {k} 2 r d r}{r ^ {2}} d x ^ {k} \\ = \frac {1}{y ^ {2}} \left(d y ^ {2} + g _ {\mathbb {R} ^ {n - 1}}\right) + \frac {1}{y ^ {2}} r ^ {2} \left(\frac {2 r d r}{r ^ {2}}\right) ^ {2} \\ - \frac {1}{y ^ {2}} r d r \frac {2 r d r}{r ^ {2}} \\ - \frac {1}{y ^ {2}} \frac {2 r d r}{r ^ {2}} r d r \\ = \frac {1}{y ^ {2}} \left(d y ^ {2} + g _ {\mathbb {R} ^ {n - 1}}\right). \\ \end{array}
$$

More generally, we can ask when

$$
\psi^ {2} \cdot ((d x ^ {1}) ^ {2} + \dots + (d x ^ {n}) ^ {2})
$$

has constant curvature? Clearly, $\psi \cdot d x ^ { 1 } , \ldots , \psi \cdot d x ^ { n }$ is an orthonormal coframe, and $\textstyle { \frac { 1 } { \psi } } \partial _ { 1 } , \ldots , { \frac { 1 } { \psi } } \partial _ { n }$  is an orthonormal frame. We can use the Koszul formula to compute $\dot { \nabla } _ { \partial _ { i } } \partial _ { j }$ and hence the curvature tensor. This task is done in exercise 4.7.21 or in [97, r vols. II and IV]. Using

$$
\psi = \left(1 + \frac {k}{4} r ^ {2}\right) ^ {- 1}
$$

gives the Riemann model for a metric of constant curvature k on $\mathbb { R } ^ { n }$ if $k \geq 0$ and on $B ( 0 , \frac { 2 } { \sqrt { | k | } } )$ if $k < 0$ .

j jThe Riemann model with $k = - 1$ and the Poincaré model from above are also isometric if we use the map $F \left( x \right) = 2 x$ . This clearly maps the unit ball to the ball Dof radius 2 and the metric is changed as follows

$$
\frac {1}{\left(1 - \frac {1}{4} | F | ^ {2}\right) ^ {2}} \left(\sum_ {k = 1} ^ {n} \left(d F ^ {k}\right) ^ {2}\right) = \frac {4}{\left(1 - | x | ^ {2}\right) ^ {2}} \left(\sum_ {k = 1} ^ {n} \left(d x ^ {k}\right) ^ {2}\right).
$$

### 4.3.4 Singular Points

The polar coordinate conformal model

$$
d r ^ {2} + \varphi^ {2} (r) d s _ {n - 1} ^ {2} = \psi^ {2} (\rho) \left(d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}\right)
$$

offers a different approach to the study of smoothness of the metric as we approach a point $r _ { 0 } \in \partial I$ where $\varphi \left( r _ { 0 } \right) = 0$ . Assume that the parametrization satisfies $\rho \left( r _ { 0 } \right) =$ 0. When $g _ { H } = d s _ { n - 1 } ^ { 2 }$ Dsmoothness on the right-hand side

$$
\psi^ {2} (\rho) \left(d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2}\right)
$$

depends only on $\psi ^ { 2 } \left( \rho \right)$ being smooth (see Section 1.4.4). Thinking of $\rho$ as being Euclidean distance indicates that this is not entirely trivial. In fact we must assume that $\psi \left( 0 \right) ~ > ~ 0$ and $\psi ^ { ( \mathrm { o d d } ) } \left( 0 \right) ~ = ~ 0$ . Translating back to $\varphi$ we obtain the usual conditions: $\dot { \varphi } \left( 0 \right) = \pm 1$ and $\varphi ^ { \mathrm { ( e v e n ) } } \left( 0 \right) = 0$ .

## 4.4 Metrics on Lie Groups

We are going to study some general features of left-invariant metrics and show how things simplify in the biinvariant situation. There are two examples of left-invariant metrics. The first represents hyperbolic space $H ^ { 2 }$ , and the other is the Berger sphere (see example 1.3.5).

### 4.4.1 Generalities on Left-invariant Metrics

We can construct a metric on a Lie group G by fixing an inner product .; / on $T _ { e } \mathrm { { G } }$ and then translating it to $T _ { g } M$ using left-translation $L _ { g } \left( x \right) = g x$ . The metric is also denoted $( X , Y )$ on G so as not to confuse it with elements $g \in { \mathrm { G } }$ . With this metric, $L _ { g }$ becomes an isometry for all g since

$$
\begin{array}{l} \left(D L _ {g}\right) | _ {h} = \left(D L _ {g h h ^ {- 1}}\right) | _ {h} \\ = \left(D \left(L _ {g h} \circ L _ {h ^ {- 1}}\right)\right) | _ {h} \\ = \left(D L _ {g h}\right) | _ {e} \circ \left(D L _ {h ^ {- 1}}\right) | _ {h} \\ = \left(D L _ {g h}\right) | _ {e} \circ \left(\left(D L _ {h}\right) | _ {e}\right) ^ {- 1} \\ \end{array}
$$

and we have assumed that $\left( D L _ { g h } \right) | _ { e }$ and $( D L _ { h } ) \mid _ { e }$ are isometries.

Left-invariant fields $X , \mathsf { i . e . , } D L _ { g } \left( X | _ { h } \right) = X | _ { g h }$ are completely determined by their value at the identity. This identifies $T _ { e } M$ D jwith , the space of left-invariant fields. gNote that is in a natural way a vector space as addition of left-invariant fields is gleft-invariant. It is also a Lie algebra as the vector field Lie bracket of two such fields is again left-invariant. In section 1.3.2 we saw that on matrix groups the Lie bracket is simply the commutator of the matrices in $T _ { e } M$ representing the vector fields.

If $X \in { \mathfrak { g } }$ , then the integral curve through $e \in \mathbf { G }$ is denoted by exp .tX/. In case of 2 g 2a matrix group the standard matrix exponential $e ^ { t X }$ is in fact the integral curve since

$$
\begin{array}{l} \frac {d}{d t} | _ {t = t _ {0}} \left(e ^ {t X}\right) = \frac {d}{d t} | _ {s = 0} \left(e ^ {(t _ {0} + s) X}\right) \\ = \frac {d}{d t} | _ {s = 0} \left(e ^ {t _ {0} X} e ^ {s X}\right) \\ = \frac {d}{d t} | _ {s = 0} \left(L _ {e ^ {t _ {0} X}} e ^ {s X}\right) \\ = D \left(L _ {e ^ {t _ {0} X}}\right) \left(\frac {d}{d t} | _ {s = 0} e ^ {s X}\right) \\ = D \left(L _ {e ^ {t _ {0} X}}\right) (X | _ {I}) \\ = X \big | _ {e ^ {t _ {0} X}}. \\ \end{array}
$$


The key property for $t \mapsto \exp \left( t X \right)$ to be the integral curve for X is evidently that the derivative at $t = 0 { \mathrm { i s } } X | _ { e }$ and that $t \mapsto \exp \left( t X \right)$ is a homomorphism

$$
\exp ((t + s) X) = \exp (t X) \exp (s X).
$$

The entire flow for X can be written as follows

$$
F ^ {t} (x) = x \exp (t X) = L _ {x} \exp (t X) = R _ {\exp (t X)} (x).
$$

The curious thing is that the flow maps $F ^ { t } : \mathrm { G }  \mathrm { G }$ don’t act by isometries unless W !the metric is also invariant under right-translations, i.e., the metric is biinvariant. In particular, the elements of are not in general Killing fields. In fact, it is the gright-invariant fields that are Killing fields for left-invariant metrics as their flows are generated by

$$
F ^ {t} (x) = \exp (t X) x = R _ {x} \exp (t X) = L _ {\exp (t X)} (x).
$$

We can give a fairly reasonable way of checking that a left-invariant metric is also biinvariant. Conjugation $x \mapsto g x g ^ { - 1 }$ is denoted $\mathbf { A d } _ { g } \left( x \right) = g x g ^ { - 1 }$ on Lie groups 7! Dand is called the adjoint action of G on G. The differential of this action at $e \in \mathrm { { G } }$ is a linear map $\operatorname { A d } _ { g } : { \mathfrak { g } } \to { \mathfrak { g } }$ 2denoted by the same symbol, and called the adjoint W g ! gaction of G on . It is in fact a Lie algebra isomorphism. These two adjoint actions are related by

$$
\operatorname{Ad} _ {g} \left(\exp (t X)\right) = \exp \left(t \operatorname{Ad} _ {g} (X)\right).
$$

This is quite simple to prove. It only suffices to check that $t \mapsto \mathsf { A d } _ { g } ( \exp { ( t X ) } )$ is a homomorphism with differential $\operatorname { A d } _ { g } \left( X \right)$ at $t ~ = ~ 0$ 7!. The latter follows from Dthe definition of the differential of a map and the former by noting that it is the composition of two homomorphisms $x \mapsto \operatorname { A d } _ { g } \left( x \right)$ / and $t \mapsto \exp \left( t X \right)$ . We can now give our criterion for biinvariance.

Proposition 4.4.1. A left-invariant metric is biinvariant if and only if the adjoint action on the Lie algebra is by isometries.

Proof. In case the metric is biinvariant we know that both $L _ { g }$ and $R _ { g ^ { - 1 } }$ act by isometries. Thus also $\mathrm { A d } _ { g } = L _ { g } \circ R _ { g ^ { - 1 } }$ acts by isometries. The differential is then a D ılinear isometry on the Lie algebra.

Conversely, assume that $\operatorname { A d } _ { g } : { \mathfrak { g } } \to { \mathfrak { g } }$ is always an isometry. Using that

$$
\left(D R _ {g}\right) | _ {h} = \left(D R _ {h g}\right) | _ {e} \circ \left(\left(D R _ {h}\right) | _ {e}\right) ^ {- 1}
$$

it clearly suffices to prove that $\left( D R _ { g } \right) \mid _ { e }$ is always an isometry. This follows from

$$
R _ {g} = L _ {g} \circ \mathrm{Ad} _ {g ^ {- 1}},
$$

$$
\left(D R _ {g}\right) | _ {e} = D \left(L _ {g}\right) | _ {e} \circ \mathrm{Ad} _ {g ^ {- 1}}.
$$

In sections 4.4.2 and 4.4.3 we shall see how this can be used to check whether metrics are biinvariant in some specific matrix group examples.

Before giving examples of how to compute the connection and curvatures for left-invariant metrics we present the general and simpler situation of biinvariant metrics.

Proposition 4.4.2. Consider a Lie group G with a biinvariant metric .; / and $X , Y , Z , W \in { \mathfrak { g } } .$ . Then

$$
\nabla_ {Y} X = \frac {1}{2} [ Y, X ],
$$

$$
R (X, Y) Z = - \frac {1}{4} \left[ [ X, Y ], Z \right],
$$

$$
R (X, Y, Z, W) = \frac {1}{4} ([ X, Y ], [ W, Z ]).
$$

In particular, the sectional curvature is always nonnegative, when .; / is positive definite.

Proof. We first need to construct the adjoint action adX ${ \mathfrak { s g } } \to { \mathfrak { g } }$ of the Lie algebra W g ! gon the Lie algebra. If we think of the adjoint action of the Lie group on the Lie algebra as a homomorphism $\operatorname { A d } : \mathbf { G } \to \operatorname { A u t } \left( { \mathfrak { g } } \right)$ , then ad    End . / is simply the differential ad $= D \left( { \mathrm { A d } } \right) | _ { e }$ W ! g W g !. In section 2.1.4 it is shown that adX $( Y ) = [ X , Y ]$ . D jThe biinvariance of the metric shows that the image Ad $\left( \mathbf { G } \right) \subset \mathbf { O } \left( \mathfrak { g } \right)$ Dlies in the  ggroup of orthogonal transformations on . This immediately shows that the image gof ad lies in the set of skew-adjoint transformations since

$$
\begin{array}{l} 0 = \frac {d}{d t} (Y, Z) | _ {t = 0} \\ = \frac {d}{d t} \left(\mathrm{Ad} _ {\exp (t X)} (Y), \mathrm{Ad} _ {\exp (t X)} (Z)\right) | _ {t = 0} \\ = \left(\operatorname{ad} _ {X} Y, Z\right) + (Y, \operatorname{ad} _ {X} Y). \\ \end{array}
$$

Keeping this skew-symmetry in mind we can use the Koszul formula on $X , Y , Z \in$ to see that


$$
\begin{array}{l} 2 \left(\nabla_ {Y} X, Z\right) = D _ {X} (Y, Z) + D _ {Y} (Z, X) - D _ {Z} (X, Y) \\ - ([ X, Y ], Z) - ([ Y, Z ], X) + ([ Z, X ], Y) \\ = - ([ X, Y ], Z) - ([ Y, Z ], X) + ([ Z, X ], Y) \\ = - ([ X, Y ], Z) + ([ Y, X ], Z) + ([ X, Y ], Z) \\ = ([ Y, X ], Z). \\ \end{array}
$$

As for the curvature we then have

$$
\begin{array}{l} R (X, Y) Z = \nabla_ {X} \nabla_ {Y} Z - \nabla_ {Y} \nabla_ {X} Z - \nabla_ {[ X, Y ]} Z \\ = \frac {1}{2} \nabla_ {X} [ Y, Z ] - \frac {1}{2} \nabla_ {Y} [ X, Z ] - \frac {1}{2} [ [ X, Y ], Z ] \\ = \frac {1}{4} [ X, [ Y, Z ] ] - \frac {1}{4} [ Y, [ X, Z ] ] - \frac {1}{2} [ [ X, Y ], Z ] \\ = \frac {1}{4} [ X, [ Y, Z ] ] + \frac {1}{4} [ Y, [ Z, X ] ] + \frac {1}{4} [ Z, [ X, Y ] ] - \frac {1}{4} [ [ X, Y ], Z ] \\ = - \frac {1}{4} \left[ [ X, Y ], Z \right], \\ \end{array}
$$

and finally

$$
\begin{array}{l} (R (X, Y) Z, W) = - \frac {1}{4} ([ [ X, Y ], Z ], W) \\ = \frac {1}{4} ([ Z, [ X, Y ] ], W) \\ = - \frac {1}{4} ([ Z, W ], [ X, Y ]) \\ = \frac {1}{4} ([ X, Y ], [ W, Z ]). \\ \end{array}
$$

![](images/db764a72c6d2961732f8f2caabde07b1d442a0da4ecf7173dd7479fbc13ad56f.jpg)

We note that Lie groups with biinvariant Riemannian metrics always have nonnegative sectional curvature and with a little more work it is also possible to show that the curvature operator is nonnegative (see exercise 3.4.32).

### 4.4.2 Hyperbolic Space as a Lie Group

Let G be the 2-dimensional Lie group

$$
\mathrm{G} = \left\{\left[ \begin{array}{c c} \alpha & \beta \\ 0 & 1 \end{array} \right] | \alpha > 0, \beta \in \mathbb {R} \right\}.
$$

Notice that the first row can be identified with the upper half plane. The Lie algebra of G is

$$
\mathfrak {g} = \left\{\left[ \begin{array}{c c} a & b \\ 0 & 0 \end{array} \right] \mid a, b \in \mathbb {R} \right\}.
$$

If we define

$$
X = \left[ \begin{array}{c c} 1 & 0 \\ 0 & 0 \end{array} \right], Y = \left[ \begin{array}{c c} 0 & 1 \\ 0 & 0 \end{array} \right],
$$

then

$$
[ X, Y ] = X Y - Y X = Y.
$$

Now declare X; Y to be an orthonormal frame on G. Then use the Koszul formula to compute

$$
\nabla_ {X} X = 0, \nabla_ {Y} Y = X, \nabla_ {X} Y = 0, \nabla_ {Y} X = \nabla_ {X} Y - [ X, Y ] = - Y.
$$

Hence,

$$
R (X, Y) Y = \nabla_ {X} \nabla_ {Y} Y - \nabla_ {Y} \nabla_ {X} Y - \nabla_ {[ X, Y ]} Y = \nabla_ {X} X - 0 - \nabla_ {Y} Y = - X,
$$

which implies that G has constant curvature 1.

We can also compute $\operatorname { A d } _ { g }$ :

$$
\begin{array}{l} \operatorname{Ad} _ {\left[ \begin{array}{c c} \alpha & \beta \\ 0 & 1 \end{array} \right]} \left[ \begin{array}{c c} a & b \\ 0 & 0 \end{array} \right] = \left[ \begin{array}{c c} \alpha & \beta \\ 0 & 1 \end{array} \right] \left[ \begin{array}{c c} a & b \\ 0 & 0 \end{array} \right] \left[ \begin{array}{c c} \alpha & \beta \\ 0 & 1 \end{array} \right] ^ {- 1} \\ = \left[ \begin{array}{c c} a & - a \beta + b \alpha \\ 0 & 0 \end{array} \right] \\ = a X + (- a \beta + b \alpha) Y. \\ \end{array}
$$

The orthonormal basis

$$
\left[ \begin{array}{c c} 1 & 0 \\ 0 & 0 \end{array} \right], \left[ \begin{array}{c c} 0 & 1 \\ 0 & 0 \end{array} \right]
$$

is then mapped to the basis

$$
\left[ \begin{array}{c c} 1 & - \beta \\ 0 & 0 \end{array} \right], \left[ \begin{array}{c c} 0 & \alpha \\ 0 & 0 \end{array} \right].
$$

This, however, is not an orthonormal basis unless ˇ 0 and ˛ 1. Therefore, the D Dmetric is not biinvariant, nor are the left-invariant fields Killing fields.


This example can be generalized to higher dimensions. Thus, the upper half plane is in a natural way also a Lie group with a left-invariant metric of constant curvature 1. This is in sharp contrast to the spheres, where only $S ^ { 3 } = \mathrm { S U } ( 2 )$ and $S ^ { 1 } = S O$ .2/ are Lie groups.

### 4.4.3 Berger Spheres

On SU.2/ consider the left-invariant metric such that $\lambda _ { 1 } ^ { - 1 } X _ { 1 } , \lambda _ { 2 } ^ { - 1 } X _ { 2 } , \lambda _ { 3 } ^ { - 1 } X _ { 3 }$ is an orthonormal frame and $[ X _ { i } , X _ { i + 1 } ] = 2 X _ { i + 2 }$ (indices are mod 3) as in example 1.3.5. The Koszul formula is:

$$
2 \left(\nabla_ {X _ {i}} X _ {j}, X _ {k}\right) = \left(\left[ X _ {i}, X _ {j} \right], X _ {k}\right) + \left(\left[ X _ {k}, X _ {i} \right], X _ {j}\right) - \left(\left[ X _ {j}, X _ {k} \right], X _ {i}\right).
$$

From this we can quickly see that as with a biinvariant metric we have: $\nabla _ { X _ { i } } X _ { i } = 0$ . It also follows that

$$
\nabla_ {X _ {i}} X _ {i + 1} = \left(\frac {\lambda_ {i + 2} ^ {2} + \lambda_ {i + 1} ^ {2} - \lambda_ {i} ^ {2}}{\lambda_ {i + 2} ^ {2}}\right) X _ {i + 2},
$$

$$
\nabla_ {X _ {i + 1}} X _ {i} = [ X _ {i + 1}, X _ {i} ] + \nabla_ {X _ {i}} X _ {i + 1}
$$

$$
= \left(\frac {- \lambda_ {i + 2} ^ {2} + \lambda_ {i + 1} ^ {2} - \lambda_ {i} ^ {2}}{\lambda_ {i + 2} ^ {2}}\right) X _ {i + 2}.
$$

This shows that

$$
\begin{array}{l} R (X _ {i}, X _ {i + 1}) X _ {i + 2} = \nabla_ {X _ {i}} \nabla_ {X _ {i + 1}} X _ {i + 2} \\ - \nabla_ {X _ {i + 1}} \nabla_ {X _ {i}} X _ {i + 2} - \nabla_ {[ X _ {i}, X _ {i + 1} ]} X _ {i + 2} \\ = 0 - 0 - 0. \\ \end{array}
$$

Thus all curvatures between three distinct vectors vanish.

The special case of Berger spheres occur when $\lambda _ { 1 } = \varepsilon < 1 , \lambda _ { 2 } = \lambda _ { 3 } = 1$ . In this case

$$
\nabla_ {X _ {1}} X _ {2} = \left(2 - \varepsilon^ {2}\right) X _ {3}, \nabla_ {X _ {2}} X _ {1} = - \varepsilon^ {2} X _ {3}
$$

$$
\nabla_ {X _ {2}} X _ {3} = X _ {1}, \nabla_ {X _ {3}} X _ {2} = - X _ {1},
$$

$$
\nabla_ {X _ {3}} X _ {1} = \varepsilon^ {2} X _ {2}, \nabla_ {X _ {1}} X _ {3} = (\varepsilon^ {2} - 2) X _ {2}.
$$

and

$$
R \left(X _ {1}, X _ {2}\right) X _ {2} = \varepsilon^ {2} X _ {1},
$$

$$
\begin{array}{l} R \left(X _ {3}, X _ {1}\right) X _ {1} = \varepsilon^ {4} X _ {3}, \\ R \left(X _ {2}, X _ {3}\right) X _ {3} = \left(4 - 3 \varepsilon^ {2}\right) X _ {2}, \\ \end{array}
$$

$$
\begin{array}{l} \Re \left(X _ {1} \wedge X _ {2}\right) = \varepsilon^ {2} X _ {1} \wedge X _ {2}, \\ \Re \left(X _ {3} \wedge X _ {1}\right) = \varepsilon^ {2} X _ {3} \wedge X _ {1}, \\ \Re \left(X _ {2} \wedge X _ {3}\right) = (4 - 3 \varepsilon^ {2}) X _ {2} \wedge X _ {3}. \\ \end{array}
$$

Thus all sectional curvatures must lie in the interval $\left[ \varepsilon ^ { 2 } , 4 - 3 \varepsilon ^ { 2 } \right]$ . Note that as $\varepsilon  0$ the sectional curvature sec $( X _ { 2 } , X _ { 3 } )  4$ , which is the curvature of the base !space $S ^ { 2 } \left( { \frac { 1 } { 2 } } \right)$ in the Hopf fibration.

We should also consider the adjoint action in this case. The standard orthogonal basis $X _ { 1 } , X _ { 2 } , X _ { 3 }$ is mapped to

$$
\begin{array}{l} \operatorname{Ad} \left[ \begin{array}{c c} z & w \\ - \bar {w} & \bar {z} \end{array} \right] X _ {1} = \left(| z | ^ {2} - | w | ^ {2}\right) X _ {1} - 2 \operatorname{Re} (w z) X _ {2} - 2 \operatorname{Im} (w z) X _ {3}, \\ \operatorname{Ad} \left[ \begin{array}{c c} z & w \\ - \bar {w} & \bar {z} \end{array} \right] X _ {2} = 2   \mathrm{i}   \operatorname{Im} \left(z \bar {w}\right) X _ {1} + \operatorname{Re} \left(w ^ {2} + z ^ {2}\right) X _ {2} + \operatorname{Im} \left(w ^ {2} + z ^ {2}\right) X _ {3}, \\ \operatorname{Ad} \left[ \begin{array}{c c} z & w \\ - \bar {w} & \bar {z} \end{array} \right] X _ {3} = 2 \operatorname{Re} \left(z \bar {w}\right) X _ {1} + \operatorname{Re} \left(\mathrm{i} \left(z ^ {2} - w ^ {2}\right)\right) X _ {2} + \operatorname{Im} \left(\mathrm{i} \left(z ^ {2} - w ^ {2}\right)\right) X _ {3}. \\ \end{array}
$$

If the three vectors $X _ { 1 } , X _ { 2 } , X _ { 3 }$ have the same length, then we see that the adjoint action is by isometries, otherwise not.

## 4.5 Riemannian Submersions

In this section we develop formulas for curvatures that relate to Riemannian submersions. The situation is similar to that of distance functions, which as we know are Riemannian submersions. In this case, however, we determine the curvature of the base space from information about the total space.

### 4.5.1 Riemannian Submersions and Curvatures

Throughout this section let $F : ( \bar { M } , \bar { g } ) \  \ ( M , g )$ be a Riemannian submersion. W N !Like with the metrics we shall use the standard $\mathbf { \tilde { \Delta } b a r } \mathbf { \overrightarrow { \Delta } }$ notation: $\bar { p }$ and $p$ and $\bar { X }$ and X for points and vector fields that are F-related, i.e., $F ( { \bar { p } } ) = p$ Nand $D F \left( { \bar { X } } \right) = X$ .

The vertical distribution consists of the tangent spaces to the preimages $F ^ { - 1 } \left( p \right)$ and is given by $\mathcal { V } _ { \bar { p } } \ = \ \ker D F _ { \bar { p } } \ \subset \ T _ { \bar { p } } \bar { M }$ . The horizontal distribution is the orthogonal complement $\mathcal { H } _ { \bar { p } } ^ { } = \left( \mathcal { H } _ { \bar { p } } \right) ^ { \perp } \subset T _ { \bar { p } } \bar { M }$ . The fact that F is a Riemannian submersion means that $D F : \mathcal { H } _ { p } \to T _ { p } M$  Nis an isometry for all $\bar { p } \in \bar { M }$ . Given a vector field X on W N ! N 2M we can always find a unique horizontal vector field X on M that is F related to X. We say that $\bar { X }$ is a basic horizontal lift of X. Any vector in $\bar { M }$ can be decomposed Ninto horizontal and vertical parts: $v = v ^ { \mathcal { V } } + v ^ { \mathcal { H } }$ .

D CThe next proposition gives some important properties for relationships between vertical and basic horizontal vector fields.

Proposition 4.5.1. Let V be a vertical vector field on $\bar { M }$ and X; Y; Z vector fields on M with basic horizontal lifts ${ \bar { X } } , { \bar { Y } } , { \bar { Z } } .$ .

(1) $\left[ V , { \bar { X } } \right]$ is vertical,   
(2) $\left( L _ { V } \bar { g } \right) \left( \bar { X } , \bar { Y } \right) = D _ { V } \bar { g } \left( \bar { X } , \bar { Y } \right) = 0 ,$   
(3) $\bar { g } \left( \left[ \bar { X } , \bar { Y } \right] , V \right) = 2 \bar { g } \left( \nabla _ { \bar { X } } \bar { Y } , V \right) = - 2 \bar { g } \left( \nabla _ { V } \bar { X } , \bar { Y } \right) = 2 \bar { g } \left( \nabla _ { \bar { Y } } V , \bar { X } \right) ,$   
(4) $\begin{array} { r } { \nabla _ { \bar { X } } \bar { Y } = \overline { { \nabla _ { X } Y } } + \frac { 1 } { 2 } \left[ \bar { X } , \bar { Y } \right] ^ { \mathcal { V } } } \end{array}$ .

Proof. (1): $\bar { X }$ is F related to X and V is F related to the zero vector field on M. Thus

$$
D F \left(\left[ \bar {X}, V \right]\right) = \left[ D F (\bar {X}), D F (V) \right] = [ X, 0 ] = 0.
$$

(2): We use (1) to see that

$$
\begin{array}{l} \left(L _ {V} \bar {g}\right) (\bar {X}, \bar {Y}) = D _ {V} \bar {g} (\bar {X}, \bar {Y}) - \bar {g} ([ V, \bar {X} ], \bar {Y}) - \bar {g} (\bar {X}, [ V, \bar {Y} ]) \\ = D _ {V} \bar {g} (\bar {X}, \bar {Y}). \\ \end{array}
$$

Next we use that F is a Riemannian submersion to conclude that $\bar { g } \left( \bar { X } , \bar { Y } \right) \ =$ $g \left( X , Y \right)$ N N N D. But this implies that the inner product is constant in the direction of the vertical distribution.

(3): Using (1) and (2) the Koszul formula in each case reduces to

$$
\begin{array}{l} 2 \bar {g} (\nabla_ {\bar {X}} \bar {Y}, V) = \bar {g} ([ \bar {X}, \bar {Y} ], V), \\ 2 \bar {g} (\nabla_ {V} \bar {X}, \bar {Y}) = - \bar {g} ([ \bar {X}, \bar {Y} ], V), \\ 2 \bar {g} (\nabla_ {\bar {Y}} V, \bar {X}) = \bar {g} ([ \bar {X}, \bar {Y} ], V). \\ \end{array}
$$

This proves the claim.

(4) We have just seen in (3) that $\textstyle { \frac { 1 } { 2 } } \left[ { \bar { X } } , { \bar { Y } } \right] ^ { \mathcal { Y } }$ is the vertical component of $\nabla _ { \bar { X } } { \bar { Y } }$ . We know that $\overline { { \nabla _ { X } Y } }$ rNis horizontal so it only remains to be seen that it is the horizontal rcomponent of $\nabla _ { \hat { X } } { \hat { Y } }$ . The Koszul formula together with F relatedness of the fields rNand the fact that inner products are the same in $\bar { M }$ and M show that

$$
2 \bar {g} (\nabla_ {\bar {X}} \bar {Y}, \bar {Z}) = 2 g (\nabla_ {X} Y, Z) = 2 \bar {g} (\overline {{\nabla_ {X} Y}}, \bar {Z}).
$$

![](images/c75b83d7947d976f3c5078d63e32e5f82d111c3e551ed511312c3c33b811a3be.jpg)

Note that the map that takes horizontal vector fields X; Y on $\bar { M }$ to $\left[ X , Y \right] ^ { \mathcal { Y } }$ measures the extent to which the horizontal distribution is integrable in the sense of Frobenius. It is in fact tensorial and skew-symmetric since

$$
[ X, f Y ] ^ {\mathcal {V}} = f [ X, Y ] ^ {\mathcal {V}} + (D _ {X} f) Y ^ {\mathcal {V}} = f [ X, Y ] ^ {\mathcal {V}}.
$$

Therefore, it defines a map $\mathcal { H } \times \mathcal { H }  \mathcal { V }$ called the integrability tensor.

Example 4.5.2. In the case of the Hopf map $S ^ { 3 } ( 1 )  S ^ { 2 } ( \frac { 1 } { 2 } )$ we have that $X _ { 1 }$ is vertical and $X _ { 2 } , X _ { 3 }$ are horizontal. However, $X _ { 2 } , X _ { 3 }$ ! are not basic. Still, we know that $[ X _ { 2 } , X _ { 3 } ] = 2 X _ { 1 }$ so the horizontal distribution cannot be integrable.

We are now ready to give a formula for the curvature tensor on M in terms of the curvature tensor on M and the integrability tensor.

Theorem 4.5.3 (B. O’Neill and A. Grey). Let R be the curvature tensor on M and $\bar { R }$ the curvature tensor on M. These curvature tensors are related by the formula

$$
g \left(R (X, Y) Y, X\right) = \bar {g} \left(\bar {R} (\bar {X}, \bar {Y}) \bar {Y}, \bar {X}\right) + \frac {3}{4} \left| [ \bar {X}, \bar {Y} ] ^ {\mathcal {V}} \right| ^ {2}.
$$

Proof. The proof is a direct calculation using the above properties. We calculate the full curvature tensor so let X; Y; Z; H be vector fields on M with vanishing Lie brackets. This forces the corresponding Lie brackets $\left[ { \bar { X } } , { \bar { Y } } \right]$ , etc. in $\bar { M }$ to be vertical.

$$
\begin{array}{l} \bar {g} \left(\bar {R} (\bar {X}, \bar {Y}) \bar {Z}, \bar {H}\right) = \bar {g} \left(\nabla_ {\bar {X}} \nabla_ {\bar {Y}} \bar {Z} - \nabla_ {\bar {Y}} \nabla_ {\bar {X}} \bar {Z} - \nabla_ {[ \bar {X}, \bar {Y} ]} \bar {Z}, \bar {H}\right) \\ = \bar {g} \left(\nabla_ {\bar {X}} \left(\overline {{\nabla_ {Y} Z}} + \frac {1}{2} [ \bar {Y}, \bar {Z} ]\right), \bar {H}\right) \\ - \bar {g} \left(\nabla_ {\bar {Y}} \left(\overline {{\nabla_ {X} Z}} + \frac {1}{2} [ \bar {X}, \bar {Z} ]\right), \bar {H}\right) \\ + \bar {g} \left(\left[ \bar {Z}, \bar {H} \right], \left[ \bar {X}, \bar {Y} \right]\right) \\ = \bar {g} \left(\overline {{\nabla_ {X} \nabla_ {Y} Z}} + \frac {1}{2} \left[ \bar {X}, \overline {{\nabla_ {Y} Z}} \right] ^ {\mathcal {V}} + \frac {1}{2} \nabla_ {\bar {X}} \left[ \bar {Y}, \bar {Z} \right], \bar {H}\right) \\ - \bar {g} \left(\overline {{\nabla_ {Y} \nabla_ {X} Z}} + \frac {1}{2} \left[ \bar {Y}, \overline {{\nabla_ {X} Z}} \right] ^ {\mathcal {V}} + \frac {1}{2} \nabla_ {\bar {Y}} \left[ \bar {X}, \bar {Z} \right], \bar {H}\right) \\ - \frac {1}{2} \bar {g} \left(\left[ \bar {X}, \bar {Y} \right], \left[ \bar {H}, \bar {Z} \right]\right) \\ \end{array}
$$


$$
\begin{array}{l} = g (R (X, Y) Z, H) \\ - \frac {1}{2} \bar {g} \left(\left[ \bar {Y}, \bar {Z} \right], \nabla_ {\bar {X}} \bar {H}\right) + \frac {1}{2} \bar {g} \left(\left[ \bar {X}, \bar {Z} \right], \nabla_ {\bar {Y}} \bar {H}\right) \\ - \frac {1}{2} \bar {g} \left(\left[ \bar {X}, \bar {Y} \right], \left[ \bar {H}, \bar {Z} \right]\right) \\ = g (R (X, Y) Z, H) \\ - \frac {1}{4} \bar {g} \left(\left[ \bar {Y}, \bar {Z} \right], \left[ \bar {X}, \bar {H} \right]\right) + \frac {1}{4} \bar {g} \left(\left[ \bar {X}, \bar {Z} \right], \left[ \bar {Y}, \bar {H} \right]\right) \\ - \frac {1}{2} \bar {g} \left(\left[ \bar {X}, \bar {Y} \right], \left[ \bar {H}, \bar {Z} \right]\right) \\ \end{array}
$$

When X H and Y Z we get the above formula.

![](images/01178a45e471b96b4aa3d67ca172e8740f4fb35ba52be20a436bbf874db8b62c.jpg)

More generally, one can find formulas for $\bar { R }$ where the variables are various combinations of basic horizontal and vertical fields.

### 4.5.2 Riemannian Submersions and Lie Groups

One can find many examples of manifolds with nonnegative or positive curvature using the previous theorem. In this section we shall explain the terminology in the general setting. The types of examples often come about by having $\left( { \bar { M } } , { \bar { g } } \right)$ with a free compact group action G by isometries and using $M = \mathbf { G } \backslash \bar { M } = \bar { M } / \mathbf { G }$ N. Note we D n Dnormally write such quotients on the right, but the action is generally on the left so $\mathbf { G } \backslash M$ is more appropriate. Examples are:

$$
\begin{array}{l} \mathbb {C P} ^ {n} = S ^ {2 n + 1} / S ^ {1}, \\ T S ^ {n} = \left(\mathrm{SO} (n + 1) \times \mathbb {R} ^ {n}\right) / \mathrm{SO} (n), \\ M = \operatorname{SU} (3) / T ^ {2}. \\ \end{array}
$$

The complex projective space will be studied further in section 4.5.3.

The most important general example of a Riemannian submersion comes about by having an isometric group action by G on $\bar { M }$ such that the quotient space is a manifold $M = \bar { M } / \mathrm { G }$ (see section 5.6.4 for conditions on the action that make Dthis true). Such a submersion is also called fiber homogeneous as the group acts transitively on the fibers of the submersion. In this case we have a natural map $F : { \bar { M } }  M$ that takes orbits to points, i.e., $p = \{ x \cdot { \bar { p } } \mid x \in { \bf G } \}$ for $\bar { p } \in \bar { M }$ . The W !vertical space $\mathcal { V } _ { \bar { p } }$ D f  N j 2 g N 2then consists of the vectors that are tangent to the action. These Ndirections can be found using the Killing fields generated by G. If $\mathfrak { X } \in \mathfrak { g } = T _ { e } \mathbf { G }$ , then we get a vector $X | _ { \bar { p } } \in T _ { \bar { p } } \bar { M }$ by the formula

$$
X | _ {\bar {p}} = \frac {d}{d t} \left(\exp (t \mathfrak {X}) \cdot \bar {p}\right) | _ {t = 0},
$$

This means that the flow for X on $\bar { M }$ is defined by $F ^ { t } ( \bar { p } ) = \exp { ( t \mathfrak { X } ) } \cdot \bar { p } .$ . As the map $\bar { p } \mapsto x \cdot \bar { p }$ is assumed to be an isometry for all $x \in \mathbf G$ X  N we get that the flow N 7!  N 2acts by isometries. This means that X is a Killing field. The next observation is that the action preserves the vertical distribution, i.e., Dx $\left( \mathcal { V } _ { \bar { p } } \right) = \mathcal { V } _ { x \cdot \bar { p } }$ . Using the Killing fields this follows from

$$
\begin{array}{l} D x \left(X | _ {\bar {p}}\right) = D x \left(\frac {d}{d t} \left(\exp (t \mathfrak {X}) \cdot \bar {p}\right) | _ {t = 0}\right) \\ = \frac {d}{d t} (x \cdot (\exp (t \mathfrak {X}) \cdot \bar {p})) | _ {t = 0} \\ = \frac {d}{d t} \left(\left(x \exp (t \mathfrak {X}) x ^ {- 1}\right) \cdot x \cdot \bar {p}\right) | _ {t = 0} \\ = \left(\left(\operatorname{Ad} _ {x} (\exp (t \mathfrak {X}))\right) \cdot x \cdot \bar {p}\right) | _ {t = 0} \\ = \frac {d}{d t} \left(\left(\exp \left(t \operatorname{Ad} _ {x} \mathfrak {X}\right)\right) \cdot x \cdot \bar {p}\right) | _ {t = 0} \\ = \left(\operatorname{Ad} _ {x} (\mathfrak {X})\right) | _ {x \cdot \bar {p}}. \\ \end{array}
$$

Thus $D x \left( X | _ { \bar { p } } \right)$ comes from first conjugating  via the adjoint action in $T _ { e } \mathrm { { G } }$ and then jNevaluating it at $x \cdot { \bar { p } }$ . Since $( \operatorname { A d } _ { x } \left( \mathfrak { X } \right) ) | _ { x \cdot \bar { p } } \in \mathcal { V } _ { x \cdot \bar { p } }$ we get that Dx maps vertical spaces  N X j N 2 Nto vertical spaces. However, it doesn’t preserve the Killing fields in the way one might have hoped for. As Dx is a linear isometry it also preserves the orthogonal complements. These complements are our horizontal spaces $\mathcal { H } _ { \bar { p } } ^ { } = \left( \mathcal { V } _ { \bar { p } } \right) ^ { \perp } \subset T _ { \bar { p } } \bar { M }$ . We know that $D F : \mathcal { H } _ { p } \to T _ { p } M$ N D N  Nis an isomorphism. We have also seen that all of the spaces $\mathcal { H } _ { x \cdot \bar { p } }$ W N !are isometric to $\mathcal { H } _ { p } ^ { 2 }$ via Dx. We can then define the Riemannian metric on $T _ { p } M$ N Nusing the isomorphism $D F : \mathcal { H } _ { p } \to T _ { p } M$ . This means that $F : { \bar { M } }  M$ defines a Riemannian submersion.

In the above discussion we did not discuss what conditions to put on the action of G on $\bar { M }$ in order to ensure that the quotient becomes a nice manifold. If G is compact and acts freely, then this will happen. The general situation is studied in section 5.6.4. In the next subsection we consider the special case of complex projective space as a quotient of a sphere. There is also a general way of getting new metrics on $\bar { M }$ it self from having a general isometric group action. This will be considered in section 4.5.4.

### 4.5.3 Complex Projective Space

Recall that $\mathbb { C P } ^ { n } = S ^ { 2 n + 1 } / S ^ { 1 }$ , where $S ^ { 1 }$ acts by complex scalar multiplication on $S ^ { 2 n + 1 } \subset \mathbb { C } ^ { n + 1 }$ D. If we write the metric as

$$
d s _ {2 n + 1} ^ {2} = d r ^ {2} + \sin^ {2} (r) d s _ {2 n - 1} ^ {2} + \cos^ {2} (r) d \theta^ {2},
$$

then we can think of the $S ^ { 1 }$ action on $S ^ { 2 n + 1 }$ as acting separately on $S ^ { 2 n - 1 }$ and $S ^ { 1 }$ . Then

$$
\mathbb {C P} ^ {n} = \left[ 0, \frac {\pi}{2} \right] \times \left(\left(S ^ {2 n - 1} \times S ^ {1}\right) / S ^ {1}\right),
$$

and the metric can be written as discussed in section 1.4.6

$$
d r ^ {2} + \sin^ {2} (r) (g + \cos^ {2} (r) h).
$$

If we restrict our attention to the case where $n = 2$ , then the metric can be written as

$$
d r ^ {2} + \sin^ {2} (r) \left(\cos^ {2} (r) (\sigma^ {1}) ^ {2} + (\sigma^ {2}) ^ {2} + (\sigma^ {3}) ^ {2}\right).
$$

This is a bit different from the warped product metrics we have seen so far. It is certainly still possible to apply the general techniques of distance functions to compute the curvature tensor. Instead we use the Riemannian submersion apparatus that was developed in the previous section. We shall also consider the general case rather than $n = 2$ .

DThe O’Neill formula from theorem 4.5.3 immediately shows that $\mathbb { C P } ^ { n }$ has sectional curvature $\geq 1$ . Let V be the unit vector field on $S ^ { 2 n + 1 }$ that is tangent to the $S ^ { 1 }$ action. Then i V is the unit inward pointing normal vector to $S ^ { 2 n + 1 } \subset \bar { \mathbb { C } } ^ { n + 1 }$ . This shows that the horizontal distribution, which is orthogonal to V, is invariant under multiplication by i. This corresponds to the fact that $\mathbb { C P } ^ { n }$ has a complex structure. It also gives us the integrability tensor for this submersion. If we let X; Y be basic Nhorizontal vector fields and denote the canonical Euclidean metric on $\mathbb { C } ^ { n + 1 }$ by ${ \bar { g } } .$ , then

$$
\begin{array}{l} \bar {g} \left(\frac {1}{2} [ \bar {X}, \bar {Y} ], V\right) = \bar {g} \left(\nabla_ {\bar {X}} ^ {S ^ {2 n + 1}} \bar {Y}, V\right) \\ = \bar {g} \left(\nabla_ {\bar {X}} ^ {\mathbb {C} ^ {n + 1}} \bar {Y}, V\right) \\ = - \bar {g} \left(\bar {Y}, \nabla_ {\bar {X}} ^ {\mathbb {C} ^ {n + 1}} V\right) \\ = \bar {g} \left(\bar {Y}, \nabla_ {\mathrm{i} \bar {X}} ^ {\mathbb {C} ^ {n + 1}} \mathrm{i} V\right) \\ = \Pi^ {S ^ {2 n + 1}} (\bar {Y}, \mathrm{i} \bar {X}) \\ = \bar {g} (\bar {Y}, \mathrm{i} \bar {X}). \\ \end{array}
$$

Thus

$$
\frac {1}{2} \left[ \bar {X}, \bar {Y} \right] ^ {\mathcal {V}} = \bar {g} \left(\bar {Y}, \mathrm{i} \bar {X}\right) V.
$$

If we let X; Y be orthonormal on $\mathbb { C P } ^ { n }$ , then the horizontal lifts ${ \bar { X } } , { \bar { Y } }$ are also orthonormal so

$$
\begin{array}{l} \sec (X, Y) = 1 + \frac {3}{4} \left| [ \bar {X}, \bar {Y} ] ^ {\mathcal {V}} \right| ^ {2} \\ = 1 + 3 \left| \bar {g} (\bar {Y}, \mathrm{i} \bar {X}) \right| ^ {2} \\ \leq 4, \\ \end{array}
$$

with equality precisely when $\bar { Y } = \pm \mathrm { i } \bar { X }$ .

D ˙The proof of theorem 4.5.3 in fact gave us a formula for the full curvature tensor. One can use that formula on an orthonormal set of vectors of the form X, i X, Y, i Y to see that the curvature operator is not diagonalized on a decomposable basis of the form $E _ { i } \wedge E _ { j }$ as was the case in the previous examples. In fact it is diagonalized by ^vectors of the form

$$
\begin{array}{l} X \wedge \mathrm{i} X \pm Y \wedge \mathrm{i} Y, \\ X \wedge Y \pm \mathrm{i} X \wedge \mathrm{i} Y, \\ X \wedge \mathrm{i} Y \pm Y \wedge \mathrm{i} X \\ \end{array}
$$

and has eigenvalues that lie in the interval $[ 0 , 6 ]$

We can also see that this metric on $\mathbb { C P } ^ { n }$ is Einstein with Einstein constant $2 n + 2$ . If we fix a unit vector X and an orthonormal basis for the complement $E _ { 0 } , \dots , E _ { 2 n - 2 }$ so that the lifts satisfy $\mathrm { i } \bar { X } = \bar { E } _ { 0 }$ , then we get that

$$
\begin{array}{l} \operatorname{Ric} (X, X) = \sum_ {i = 0} ^ {2 n - 2} \sec (X, E _ {i}) \\ = \sec (X, E _ {0}) + \sum_ {i = 1} ^ {2 n - 2} \sec (X, E _ {i}) \\ = 1 + 3 \left| \bar {g} (\bar {E} _ {0}, \mathrm{i} \bar {X}) \right| ^ {2} + \sum_ {i = 1} ^ {2 n - 2} \left(1 + 3 \left| \bar {g} (\bar {E} _ {i}, \mathrm{i} \bar {X}) \right| ^ {2}\right) \\ = 1 + 3 \left| \bar {g} (\mathrm{i} \bar {X}, \mathrm{i} \bar {X}) \right| ^ {2} + \sum_ {i = 1} ^ {2 n - 2} \left(1 + 3 | 0 | ^ {2}\right) \\ = 1 + 3 + 2 n - 2 \\ = 2 n + 2. \\ \end{array}
$$

### 4.5.4 Berger-Cheeger Perturbations

The construction we do here was first considered by Cheeger and was based on a slightly different construction by Berger used to construct the Berger spheres.

Fix a Riemannian manifold .M; g/ and a Lie group G with a right-invariant metric .; /. If G acts by isometries on M, then it also acts by isometries on $\mathbf { G } \times M$ with respect to the product metrics $g _ { \lambda } ~ = ~ \lambda ( , ) ~ + ~ g , ~ \lambda ~ > ~ 0$ -via the action $h \cdot ( x , p ) \mapsto ( x h ^ { - 1 } , h p )$ D C. This action is free as G acts freely on itself. The quotient $\left( \mathbf { G } \times M \right) / \mathbf { G }$ is also denoted by $\mathbf { G } \times _ { \mathbf { G } } M$ . The natural map $M \to \mathbf { G } \times M \to \mathbf { G } \times _ { \mathbf { G } } M$ - - ! - ! -is a bijection. Thus the quotient is in a natural way a manifold diffeomorphic to M. The quotient map $Q : \mathbf { G } \times M  M$ is explicitly given by $Q \left( x , p \right) = x p$ .

W - !As G acts by isometries with respect to the product metrics $\lambda \left( , \right) + g$ we obtain a submersion metric $g _ { \lambda }$ on $M = \mathbf { G } \times _ { \mathrm { G } } M$ C. We wish to study this perturbed metric’s D -relation to the original metric g. The tangent space $T _ { p } M$ is naturally decomposed into the vectors $\mathcal { Y } _ { p }$ that are tangent to the action and the orthogonal complement $\mathcal { H } _ { p }$ . Unlike the case where G acts freely on M this decomposition is not necessarily a nicely defined distribution. It might happen that G fixes certain but not all points in M. For example, at points p that are fixed it follows that $\mathcal { H } _ { p } ~ = ~ \{ 0 \}$ . At other points $\mathcal { V } _ { p } \neq \{ 0 \}$ D. The nomenclature is, however, not inappropriate. If $\mathfrak { X } \in T _ { e } \mathbf { G }$ , then $F ^ { t } \left( p \right) = \exp \left( t \mathfrak { X } \right) \cdot p$ defines a 1-parameter group of isometries. If $\textstyle X = { \frac { d } { d t } } F ^ { t } \left( p \right) \left| _ { t = 0 } \right.$ D X is the corresponding Killing field on M, then $\left( - \mathfrak { X } , X | _ { p } \right) \in T _ { e } \mathbf { G } \times T _ { p } M$ jis a vertical direction for this action at $( e , p ) \in \mathbf { G } \times M$ X j. Therefore, $\dot { \mathcal { Y } } _ { p }$ 2 -is simply the image of the 2 -projection of the vertical distribution to $T _ { p } M$ . Vectors in $\mathcal { H } _ { p }$ are thus also horizontal for the action on $\mathbf { G } \times M$ . All the other horizontal vectors in $T _ { e } \mathbf { G } \times T _ { p } M$ depend on -the choice of  and have a component of the form $( | X | _ { p } | _ { g } ^ { 2 } \mathfrak { X } , \lambda | \mathfrak { X } | ^ { 2 } X | _ { p } )$ . The image of such a horizontal vector under $Q : \mathbf { G } \times M  M$ j Xis given by

$$
\begin{array}{l} D Q \left(\left| X | _ {p} \right| _ {g} ^ {2} \mathfrak {X}, \lambda \left| \mathfrak {X} \right| ^ {2} X | _ {p}\right) = \left| X | _ {p} \right| _ {g} ^ {2} D Q (\mathfrak {X}, 0) + \lambda \left| \mathfrak {X} \right| ^ {2} D Q (0, X | _ {p}) \\ = - \left| X | _ {p} \right| _ {g} ^ {2} D Q \left(\frac {d}{d t} (e \cdot \exp (- t \mathfrak {X})) | _ {t = 0}, 0\right) \\ + \lambda | \mathfrak {X} | ^ {2} D Q \left(0, \frac {d}{d t} (\exp (t \mathfrak {X}) \cdot p) | _ {t = 0}\right) \\ = - \left| X \right| _ {p} \big | _ {g} ^ {2} \frac {d}{d t} (Q (\exp (- t \mathfrak {X}), p)) | _ {t = 0} \\ + \lambda | \mathfrak {X} | ^ {2} \frac {d}{d t} (Q (e, \exp (t \mathfrak {X}) \cdot p)) | _ {t = 0} \\ = - \left| X \right| _ {p} \big | _ {g} ^ {2} \frac {d}{d t} (\exp (- t \mathfrak {X}) \cdot p) | _ {t = 0} \\ + \lambda | \mathfrak {X} | ^ {2} \frac {d}{d t} (\exp (t \mathfrak {X}) \cdot p) | _ {t = 0} \\ \end{array}
$$

$$
\begin{array}{l} = \left| X | _ {p} \right| _ {g} ^ {2} X | _ {p} + \lambda \left| \mathfrak {X} \right| ^ {2} X | _ {p} \\ = \left(\lambda | \mathfrak {X} | ^ {2} + \left| X | _ {p} \right| _ {g} ^ {2}\right) X | _ {p} \\ \end{array}
$$

The horizontal lift of $X | _ { p } \in \mathcal { V } _ { p }$ to $T _ { e } \mathbf { G } \times T _ { p } M$ is consequently given by

$$
\overline {{X | _ {p}}} = \left(\frac {\left| X | _ {p} \right| _ {g} ^ {2}}{\lambda \left| \mathfrak {X} \right| ^ {2} + \left| X | _ {p} \right| _ {g} ^ {2}} \mathfrak {X}, \frac {\lambda \left| \mathfrak {X} \right| ^ {2}}{\lambda \left| \mathfrak {X} \right| ^ {2} + \left| X | _ {p} \right| _ {g} ^ {2}} X | _ {p}\right),
$$

and its length in $g _ { \lambda }$ satisfies

$$
\begin{array}{l} \left| \overline {{X | _ {p}}} \right| _ {g \lambda} ^ {2} = \left(\frac {\left| X | _ {p} \right| _ {g} ^ {2}}{\lambda \left| \mathfrak {X} \right| ^ {2} + \left| X | _ {p} \right| _ {g} ^ {2}}\right) ^ {2} \lambda \left| \mathfrak {X} \right| ^ {2} \\ + \left(\frac {\lambda | \mathfrak {X} | ^ {2}}{\lambda | \mathfrak {X} | ^ {2} + | X | _ {p} | _ {g} ^ {2}}\right) ^ {2} | X | _ {p} | _ {g} ^ {2} \\ = \frac {\lambda | \mathfrak {X} | ^ {2}}{\lambda | \mathfrak {X} | ^ {2} + | X | _ {p} | _ {g} ^ {2}} | X | _ {p} | _ {g} ^ {2} \\ \leq \left| X | _ {p} \right| _ {g} ^ {2}. \\ \end{array}
$$

In particular, $\left| \overline { { X | _ { p } } } \right| _ { g _ { \lambda } } ^ { 2 }$ ˇˇX p has limit 0 as $\lambda ~  ~ 0$ and limit $| X | _ { p } | _ { g } ^ { 2 }$ as $\lambda \ \to \ \infty$ . This means that the metric $g _ { \lambda }$ is gotten from g by squeezing the orbits of the action of G. However, the squeezing depends on the point according to this formula. The only case where the squeezing is uniform is when the Killing fields generated by the action have constant length on M. The Berger spheres are a special case of this.

Using that we know how to compute horizontal lifts and that the metric on $\mathbf { G } \times M$ is a product metric it is possible to compute the curvature of $g _ { \lambda }$ -in terms of the curvature of $g , \lambda$ , the curvature of .; /, and the integrability tensor. We will consider one important special case.

Let $X , Y \in \mathcal { H } _ { p }$ . In this case the vectors are already horizontal for the action on $\mathbf { G } \times M$ 2. Thus we have that $\sec _ { g _ { \lambda } } \left( X , Y \right) \geq \sec _ { g } \left( X , Y \right)$ . There is a correction coming - from the integrability tensor associated with the action on $\mathbf { G } \times \boldsymbol { M }$ that possibly increases these curvatures.

## 4.6 Further Study

The book by O’Neill [80] gives an excellent account of Minkowski geometry and also studies in detail the Schwarzschild metric in the setting of general relativity. It appears to have been the first exact nontrivial solution to the vacuum Einstein field equations. There is also a good introduction to locally symmetric spaces and their properties. This book is probably the most comprehensive elementary text and is good for a first encounter with most of the concepts in differential geometry. The third edition of [47] also contains a good number of examples. Specifically they have a lot of material on hyperbolic space. They also have a brief account of the Schwarzschild metric in the setting of general relativity.

Another book, which contains many more advanced examples, is [12]. This is also a good reference on Riemannian geometry in general.

## 4.7 Exercises

Remark. It will be useful to read exercises 3.4.23, 3.4.24, and 3.4.25 before doing the exercises for this chapter.

EXERCISE 4.7.1. Show that the Schwarzschild metric does not have parallel curvature tensor.

EXERCISE 4.7.2. Show that the Berger spheres $( \varepsilon \neq 1 )$ do not have parallel curvature tensor.

EXERCISE 4.7.3. This exercise covers a few interesting aspects of projective spaces.

(1) Show that $\mathrm { ~ U ~ } ( n + 1 )$ acts by isometries on $\mathbb { C P } ^ { n }$ . Hint: Use that $\mathrm { ~ U ~ } ( n + 1 )$ acts Cby isometries on $S ^ { 2 n + 1 } \left( 1 \right)$ C/ and commutes with the quotient action that creates CPn.

(2) Show that for each $p \in \mathbb { C P } ^ { n }$ there is an isometry $A _ { p } \in \mathrm { I s o } _ { p }$ with $D A _ { p } | _ { p } = - I .$

2 2(3) Use the fact that isometries leave and R invariant to show that $\nabla R = 0$

(4) Repeat 1,2,3 for $\mathbb { H } \mathbb { P } ^ { n }$ rusing the symplectic group $\mathrm { S p } \left( n + 1 \right)$ r Dof matrices with quaternionic entries satisfying $A ^ { * } A ~ = ~ I ,$ , where $A ^ { * } = \hat { A } ^ { t }$ . See also exercise 1.6.22 for more on quaternions.

EXERCISE 4.7.4. Assume that a Riemannian manifold $( M , g )$ has a function f such that

$$
\mathrm{Hess} f = \lambda (x) g + \mu (f) d f ^ {2},
$$

where $\lambda : M \to \mathbb { R }$ and $\mu : \mathbb { R } \to \mathbb { R }$ . Show that the metric is locally a warped product.

EXERCISE 4.7.5. Show that if Hess $f = \lambda g$ , then $\begin{array} { r } { \lambda = \frac { \Delta f } { \mathrm { d i m } M } } \end{array}$ .

EXERCISE 4.7.6. Consider a function f on a Riemannian manifold $( M , g )$ so that $\nabla f \neq 0$ and $\nabla f$ is an eigenvector for $S \left( X \right) \ = \ \nabla _ { X } \nabla f$ . Show that if S has $\leq 2$ r ¤ r D r reigenvalues, then the metric is locally a warped product metric.

EXERCISE 4.7.7 (O’NEILL). For a Riemannian submersion as in section 4.5 define the A-tensors

$$
\begin{array}{l} A _ {\bar {X}} \bar {Y} = \left[ \bar {\nabla} _ {\bar {X}} \bar {Y} \right] ^ {\mathcal {V}}, \\ A _ {\bar {X}} V = \left[ \bar {\nabla} _ {\bar {X}} V \right] ^ {\mathcal {H}}. \\ \end{array}
$$

We also have the T-tensor from exercises 2.5.26 and 2.5.25 but our notation for horizontal and vertical fields is the reverse of tangent and normal fields from those exercises. Note that both $A _ { \bar { X } }$ and $T _ { V }$ make sense. We can extend both tensors by declaring $A _ { V } = 0$ and $T _ { \bar { X } } = 0$ and thus obtain .1; 2/-tensors on $\bar { M } .$ .

(1) Show that both A-tensors are tensorial.   
(2) Show that $\begin{array} { r } { A _ { \bar { X } } \bar { Y } = \frac { 1 } { 2 } \left[ \bar { X } , \bar { Y } \right] ^ { \mathcal { Y } } } \end{array}$ .   
(3) Show that g $\left( A _ { \bar { X } } \bar { Y } , V \right) = - \bar { g } \left( \bar { Y } , A _ { \bar { X } } V \right)$   
(4) Show that $( \nabla _ { V } A ) _ { W } = - A _ { T _ { V } W }$ Nand $( \nabla _ { X } A ) _ { W } = - A _ { A _ { X } W }$   
(5) Show that $( \nabla _ { \bar { X } } T ) _ { \bar { Y } } = - T _ { A _ { \bar { X } } \bar { Y } }$ and $( \nabla _ { V } T ) _ { \bar { Y } } = - T _ { T _ { V } \bar { Y } } .$   
(6) Show that

$$
\bar {g} \left((\nabla_ {U} A) _ {\bar {X}} V, W\right) = \bar {g} \left(T _ {U} V, A _ {\bar {X}} W\right) - \bar {g} \left(T _ {U} W, A _ {\bar {X}} V\right).
$$

EXERCISE 4.7.8 $\left( { \mathrm { O } } ^ { \prime } { \mathrm { N E I L L } } \right)$ . This exercise builds on the previous exercise. The Gauss equations explain how to calculate the curvature tensor on vectors tangent to the fibers of a submersion. Show that horizontal and “verti-zontal” curvatures can be calculated by the formulas

$$
\bar {R} \left(\bar {Y}, \bar {X}, \bar {X}, \bar {Y}\right) = R \left(Y, X, X, Y\right) - 3 \left| A _ {\bar {X}} \bar {Y} \right| ^ {2}
$$

and

$$
\bar {R} (V, \bar {X}, \bar {X}, V) = \bar {g} ((\nabla_ {\bar {X}} T) _ {V} V, \bar {X}) + | A _ {\bar {X}} V | ^ {2} - | T _ {V} \bar {X} | ^ {2}.
$$

Compare the last formula to the radial curvature equation.

EXERCISE 4.7.9. Let $( M , g ) \ = \ ( M _ { 1 } \times M _ { 2 } , g _ { 1 } + g _ { 2 } )$ be a Riemannian product manifold.

(1) Show that $R = R _ { 1 } + R _ { 2 }$ , where $R _ { i }$ is the curvature tensor of $( M _ { i } , g _ { i } )$ pulled back to M.   
(2) Assume for the remainder of this exercise that $( M _ { i } , g _ { i } )$ has constant curvature $c _ { i }$ . Show that $R = c _ { 1 } g _ { 1 } \circ g _ { 1 } + c _ { 2 } g _ { 2 } \circ g _ { 2 }$ .


(3) Show that $( M , g )$ is Einstein if and only if $( n _ { 1 } - 1 ) c _ { 1 } \ = \ ( n _ { 2 } - 1 ) c _ { 2 }$ where $n _ { i } = \dim M _ { i }$ .

D(4) Show that the Weyl tensor for $( M , g )$ vanishes when either $c _ { 1 } = - c _ { 2 } , n _ { 1 } = 1$ , or $n _ { 2 } = 1$ . Hint: Calculate $( g _ { 1 } - g _ { 2 } ) \circ ( g _ { 1 } + g _ { 2 } )$ D and compare it to R.

D  ı C(5) Show that if none of the conditions in (4) hold, then the Weyl tensor does not vanish.

EXERCISE 4.7.10. Let $( M ^ { n } , g ) \ = \ ( I \times N , d r ^ { 2 } + \rho ^ { 2 } ( r ) g _ { N } )$ be a warped product metric with constant curvature k.

(1) Show that $\left( N ^ { n - 1 } , \rho ^ { 2 } \left( r \right) g _ { N } \right)$ has constant curvature $\begin{array} { r } { k + \left( \frac { \dot { \rho } } { \rho } \right) ^ { 2 } \operatorname { i f } n > 2 } \end{array}$

(2) Show explicitly that hyperbolic space can be represented as a warped product over both hyperbolic space and Euclidean space.

EXERCISE 4.7.11. Consider an Einstein metric $\left( N ^ { n - 1 } , g _ { N } \right)$ with $\begin{array} { r } { \mathrm { R i c } \ = \ \frac { n - 2 } { n - 1 } \lambda g _ { N } } \end{array}$ $\lambda ~ < ~ 0$ . Find a $\rho : \mathbb { R }  ( 0 , \infty )$ such that $( M ^ { n } , g ) \ = \ ( \mathbb { R } \times N , d r ^ { 2 } + \rho ^ { 2 } \left( r \right) g _ { N } )$ W !becomes an Einstein metric with $\mathtt { R i c } = \lambda g$ .

EXERCISE 4.7.12. Let $\left( N ^ { n - 1 } , g _ { N } \right)$ have constant curvature c with $n > 2$ . Consider the warped product metric $\left( M , g \right) ^ { \cdot } = \left( I \times N , d r ^ { 2 } + \rho ^ { 2 } \left( r \right) g _ { N } \right)$ .

(1) Show that the curvature of g is given by

$$
\begin{array}{l} R = \frac {c - \dot {\rho} ^ {2}}{\rho^ {2}} g _ {r} \circ g _ {r} - 2 \frac {\ddot {\rho}}{\rho} d r ^ {2} \circ g _ {r} \\ = \frac {c - \dot {\rho} ^ {2}}{\rho^ {2}} g \circ g - 2 \left(\frac {\ddot {\rho}}{\rho} + \frac {c - \dot {\rho} ^ {2}}{\rho^ {2}}\right) d r ^ {2} \circ g. \\ \end{array}
$$

(2) Show that the Weyl tensor vanishes.

(3) Show directly that the Schouten tensor satisfies:

$$
\left(\nabla_ {X} P\right) (Y, Z) = \left(\nabla_ {Y} P\right) (X, Z).
$$

See also exercise 3.4.26 for an indirect approach when $n > 3$ .

EXERCISE 4.7.13. The stereographic projection of $x ^ { n + 1 } = 0$ to a hypersurface $M \subset$ $\mathbb { R } ^ { n } \times \mathbb { R }$ that is transverse to the lines emanating from $- e _ { n + 1 } = ( 0 , \ldots , 0 , - 1 )$ is given by $x \mapsto S \left( x \right)$ where $x \in \mathbb { R } ^ { n }$ and $S \left( x \right) = - e _ { n + 1 } + \lambda \left( x \right) \left( e _ { n + 1 } + \left( x , 0 \right) \right)$ .

(1) When $M = S ^ { n } \left( 1 \right)$ show that $\lambda \left( 1 + \left| x \right| ^ { 2 } \right) = 2$ and that S is a conformal map with the property that in these coordinates the metric on $S ^ { n } \left( 1 \right)$ is given by

$$
\frac {4}{(1 + | x | ^ {2}) ^ {2}} g _ {\mathbb {R} ^ {n}}.
$$

(2) When $M = H ^ { n } \left( 1 \right) \in \mathbb { R } ^ { n , 1 }$ show that $\lambda \left( 1 - \left| x \right| ^ { 2 } \right) = 2$ and that S is a conformal map with the property that in these coordinates the metric on $H ^ { n } \left( 1 \right)$ is Poincaré disc

$$
\frac {4}{(1 - | x | ^ {2}) ^ {2}} g _ {\mathbb {R} ^ {n}}.
$$

EXERCISE 4.7.14. Let $\tilde { g } = e ^ { 2 \psi } g$ be a metric conformally equivalent to $g$ and $\mathrm { ~ a ~ } ^ { \sim }$ Q Dreferring to metric objects in the conformally changed metric.

(1) Show that

$$
\tilde {\nabla} _ {X} Y = \nabla_ {X} Y + (D _ {X} \psi) Y + (D _ {Y} \psi) X - g (X, Y) \nabla \psi .
$$

(2) With notation as in exercise 3.4.23 show that

$$
\begin{array}{l} e ^ {- 2 \psi} \tilde {R} = R - 2 (\operatorname{Hess} \psi - (d \psi) ^ {2}) \circ g - | d \psi | ^ {2} g \circ g \\ = R - \left(2 \operatorname{Hess} \psi - 2 (d \psi) ^ {2} + | d \psi | ^ {2} g\right) \circ g. \\ \end{array}
$$

(3) If X; Y are orthonormal with respect to g, show that

$$
\begin{array}{l} e ^ {2 \psi} \widetilde {\sec} (X, Y) = \sec (X, Y) - \operatorname{Hess} \psi (X, X) - \operatorname{Hess} \psi (Y, Y) \\ + (D _ {X} \psi) ^ {2} + (D _ {Y} \psi) ^ {2} - | d \psi | ^ {2}. \\ \end{array}
$$

(4) Show that

$$
\widetilde {\operatorname{Ric}} = \operatorname{Ric} - (n - 2) (\operatorname{Hess} \psi - d \psi^ {2}) - (\Delta \psi + (n - 2) | d \psi | ^ {2}) g.
$$

(5) Show that

$$
e ^ {2 \psi} \widetilde {\mathrm{scal}} = \mathrm{scal} - 2 (n - 1) \Delta \psi - (n - 1) (n - 2) | d \psi | ^ {2}.
$$

(6) Using exercise 3.4.25 show that

$$
e ^ {- 2 \psi} \tilde {W} = W.
$$

This is referred to as the conformal invariance of the Weyl tensor under conformal changes and was discovered by Weyl.


EXERCISE 4.7.15. Show that

$$
\left(\frac {1}{4} \rho_ {0} ^ {n - 2} + r ^ {2 - n}\right) ^ {\frac {4}{n - 2}} g _ {\mathbb {R} ^ {n}} = \frac {1}{1 - \left(\frac {\rho_ {0}}{\rho}\right) ^ {n - 2}} d \rho^ {2} + \rho^ {2} d s _ {n - 1} ^ {2},
$$

where the right-hand side is the scalar flat metric from section 4.2.3. Use this to rewrite the Schwarzschild metric from section 4.2.5 as

$$
\left(\frac {1}{4} \rho_ {0} ^ {n - 3} + r ^ {3 - n}\right) ^ {\frac {4}{n - 3}} g _ {\mathbb {R} ^ {n - 1}} + \rho_ {0} ^ {2} \frac {4}{(n - 3) ^ {3}} \left(\frac {\frac {1}{4} \rho_ {0} ^ {n - 3} - r ^ {3 - n}}{\frac {1}{4} \rho_ {0} ^ {n - 3} + r ^ {3 - n}}\right) ^ {2} d \theta^ {2}.
$$

EXERCISE 4.7.16 (STATIC EINSTEIN EQUATIONS). Consider a metric of the form $( M , g ) = \bigl ( N \times  { \mathbb { R } } , g _ { N } + w ^ { 2 } d t ^ { 2 } \bigr )$ , where $w : N \to ( 0 , \infty )$ and dim $N = n - 1$ . Let D - C W ! 1 D X; Y; Z be vector fields on N. Note that they can also be considered as vector fields on M.

(1) Show that $\nabla _ { X } ^ { N } Y ~ = ~ \nabla _ { X } ^ { M } Y$ and $R ^ { N } \left( X , Y \right) Z ~ = ~ R ^ { M } \left( X , Y \right) Z$ . Conclude that $\operatorname { R i c } ^ { M } \left( X , \partial _ { t } \right) \stackrel { \cdot \cdot } { = } 0 .$ .   
D(2) Show the vector field $\partial _ { t }$ satisfies $\left| \partial _ { t } \right| ^ { 2 } = w ^ { 2 } \mathrm { i n } \left( M , g \right)$   
(3) Show that

$$
\nabla_ {\partial_ {t}} ^ {M} \partial_ {t} = - w \nabla w \text { and } \nabla_ {X} ^ {M} \partial_ {t} = \nabla_ {\partial_ {t}} ^ {M} X = \frac {1}{w} (D _ {X} w) \partial_ {t}.
$$

Hint: Show that $g \left( \nabla _ { \partial _ { t } } ^ { M } \partial _ { t } , \partial _ { t } \right) = 0$ and calculate $D _ { X } \left| \partial _ { t } \right| ^ { 2 }$

(4) Show that

$$
R ^ {M} (X, \partial_ {t}) \partial_ {t} = - w \nabla_ {X} \nabla w,
$$

and

$$
\operatorname{Ric} ^ {M} \left(\partial_ {t}, \partial_ {t}\right) = - w \Delta w,
$$

$$
\operatorname{Ric} ^ {M} (X, X) = \operatorname{Ric} ^ {N} (X, X) - \frac {1}{w} \operatorname{Hess} (X, X).
$$

(5) Show that $\operatorname { R i c } ^ { M } = \lambda g , \lambda \in \mathbb { R }$ , if and only if

$$
\operatorname{Ric} ^ {N} - \frac {1}{w} \operatorname{Hess} w = \lambda g _ {N},
$$

$$
w \Delta w + \lambda w ^ {2} = 0,
$$

if and only if

$$
\operatorname{Ric} ^ {N} - \frac {1}{w} \operatorname{Hess} w = \lambda g _ {N},
$$

$$
\operatorname{scal} ^ {N} = (n - 2) \lambda .
$$

EXERCISE 4.7.17. A Riemannian manifold $( M , g )$ is said to be locally conformally flat if every $p \in M$ lies in a coordinate neighborhood U where

$$
g = e ^ {- 2 \psi} \left(\left(d x ^ {1}\right) ^ {2} + \dots + (d x ^ {n}) ^ {2}\right).
$$

(1) Show that the space forms $S _ { k } ^ { n }$ with metrics $d r ^ { 2 } + \mathrm { s n } _ { k } ^ { 2 } \left( r \right) d s _ { n - 1 } ^ { 2 }$ are locally conformally flat.   
(2) Show that if an Einstein metric is locally conformally flat, then it has constant curvature.   
(3) When $n = 2$ Gauss showed that such coordinates always exit. They are called Disothermal coordinates. Assume that dim $M = 2$ .

(a) Show that if $d u \neq 0$ on some open subset $o \subset M$ , then up to sign there is a unique 1-form $\omega = i _ { \nabla u } { \ v } 0 \ l _ { g }$ that satisfies: $\vert d u \vert = \vert \omega \vert$ and $g \left( d u , \omega \right) = 0$ .   
(b) Show that $d \omega = \left( \Delta _ { g } u \right) \mathrm { v o l } _ { g }$ .   
D(c) Show that isothermal coordinates exit provided that for each $p \in M$ it is possible to find u on a neighborhood of p so that $\Delta _ { g } u = 0$ and $d u | _ { p } \neq 0$ .

EXERCISE 4.7.18 (SCHOUTEN 1921). Let $( M , g )$ be a Riemannian manifold of dimension $n > 2$ .

(1) Show that g is locally conformally flat if and only if $W ~ = ~ 0$ and locally there is a function so that P 2 Hess $\psi - 2 \left( d \psi \right) ^ { 2 } + \left| d \psi \right| ^ { 2 } g$ . Note that the condition $W = 0$ Dis redundant when $n = 3$ C j j. Hint: You have to use the D Dcurvature characterization of being locally Euclidean (see exercise 3.4.20 or theorem 5.5.8).

(2) Show that if g is locally conformally flat then

$$
\left(\nabla_ {X} P\right) (Y, Z) = \left(\nabla_ {Y} P\right) (X, Z).
$$

Hint: When $n > 3$ , this follows from exercise 3.4.26. When $n \geq 3$ , use that $R = P \circ g$ , the specific form of P from (1), and show that

$$
\left(\nabla_ {X} \operatorname{Hess} \psi\right) (Y, Z) - \left(\nabla_ {Y} \operatorname{Hess} \psi\right) (X, Z) = R (X, Y, \nabla \psi , Z).
$$

EXERCISE 4.7.19 (SCHOUTEN 1921). In this exercise assume that we have a Riemannian manifold of dimension $n > 2$ such that $W = 0$ and $\left( \nabla _ { X } P \right) \left( Y , Z \right) =$ $\left( \nabla _ { Y } P \right) \left( X , Z \right)$ .


(1) Show that if there is a 1-form ! such that

$$
\nabla \omega = \frac {1}{2} P + \omega^ {2} - \frac {1}{2} | \omega | ^ {2} g,
$$

then locally $\omega = d \psi$ and P  2 Hess $\psi - 2 \left( d \psi \right) ^ { 2 } + \left| \nabla \psi \right| ^ { 2 } g .$ .

D D (2) The integrability condition for finding such an $\omega$ C jr jin the sense of exercise 3.4.20 can be stated using only covariant derivatives. On the left-hand side we take one more derivative $\nabla _ { X , Y } ^ { 2 } \omega$ and use the Ricci formula for commuting covariant rderivatives as an alternative to Clairaut’s theorem on partial derivatives:

$$
\nabla_ {X, Y} ^ {2} \omega - \nabla_ {Y, X} ^ {2} \omega = R _ {X, Y} \omega .
$$

Show that if $\begin{array} { r } { \nabla \omega = \frac { 1 } { 2 } P + \omega ^ { 2 } - \frac { 1 } { 2 } \left| \omega \right| ^ { 2 } g } \end{array}$ , then

$$
\begin{array}{l} \left(\nabla_ {X, Y} ^ {2} \omega\right) (Z) = \frac {1}{2} \left(\nabla_ {X} P\right) (Y, Z) \\ + \left(\nabla_ {X} \omega\right) (Y) \omega (Z) + \omega (Y) \left(\nabla_ {X} \omega\right) (Z) \\ - g \left(\nabla_ {X} \omega , \omega\right) g (Y, Z). \\ \end{array}
$$

(3) Use $\begin{array} { r } { \nabla \omega = \frac { 1 } { 2 } P + \omega ^ { 2 } - \frac { 1 } { 2 } \left| \omega \right| ^ { 2 } } \end{array}$ g again to show that

$$
\begin{array}{l} \nabla_ {X, Y} ^ {2} \omega - \nabla_ {Y, X} ^ {2} \omega = \frac {1}{2} P (X, Z) \omega (Y) - \frac {1}{2} P (X, V) g (Y, Z) \\ - \frac {1}{2} P (Y, Z) \omega (X) + \frac {1}{2} P (Y, V) g (X, Z) \\ = (P \circ g) (X, Y, V, Z), \\ \end{array}
$$

where V is the vector field dual to $\omega$

(4) Now use $R = P \circ g$ to show that

$$
\left(R _ {X, Y} \omega\right) (Z) = (P \circ g) (X, Y, V, Z).
$$

(5) Finally, show that this implies that the integrability conditions for solving for ! are satisfied and conclude that the manifold is locally conformally flat.

EXERCISE 4.7.20. Consider a product metric $( N ^ { 2 } \times \mathbb { R } , g _ { N } + g _ { \mathbb { R } } )$ .

$\begin{array} { r } { P _ { N \times \mathbb { R } } = \frac { \mathrm { s c a l } _ { N } } { 2 } ( g _ { N } - g _ { \mathbb { R } } ) } \end{array}$   
 D (2) Show that this product metric is conformally flat if and only if scalN is constant.

EXERCISE 4.7.21. Let $( M ^ { n } , g )$ ; $n > 2$ have constant curvature k.

(1) Use exercise 4.7.19 to show that the metric is locally conformally flat.

(2) Show that if $g = e ^ { - 2 \psi } \left( \left( d x ^ { 1 } \right) ^ { 2 } + \cdots + ( d x ^ { n } ) ^ { 2 } \right)$ , then

$$
2 e ^ {\psi} \partial_ {i} \partial_ {j} e ^ {\psi} = \left(k + \sum \left(\partial_ {k} e ^ {\psi}\right) ^ {2}\right) \delta_ {i j}.
$$

Hint: Use part 2 of 4.7.14.

(3) Show that

$$
e ^ {\psi} = a + \sum b _ {i} x ^ {i} + c \sum \left(x ^ {i}\right) ^ {2},
$$

where $k = 4 a c - \textstyle \sum b _ { i } ^ { 2 } .$

EXERCISE 4.7.22. The Heisenberg group with its Lie algebra is

$$
\mathrm{G} = \left\{\left[ \begin{array}{c c c} 1 & a & c \\ 0 & 1 & b \\ 0 & 0 & 1 \end{array} \right] \mid a, b, c \in \mathbb {R} \right\},
$$

$$
\mathfrak {g} = \left\{\left[ \begin{array}{c c c} 0 & x & z \\ 0 & 0 & y \\ 0 & 0 & 0 \end{array} \right] \mid a, b, c \in \mathbb {R} \right\}.
$$

A basis for the Lie algebra is:

$$
X = \left[ \begin{array}{c c c} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{array} \right], Y = \left[ \begin{array}{c c c} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{array} \right], Z = \left[ \begin{array}{c c c} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{array} \right].
$$

(1) Show that the only nonzero brackets are

$$
[ X, Y ] = - [ Y, X ] = Z.
$$

Now introduce a left-invariant metric on G such that X; Y; Z form an orthonormal frame.

(2) Show that the Ricci tensor has both negative and positive eigenvalues.

(3) Show that the scalar curvature is constant.

(4) Show that the Ricci tensor is not parallel.

EXERCISE 4.7.23. Consider metrics of the form

$$
d r ^ {2} + \rho^ {2} (r) \left(\phi^ {2} (r) (\sigma^ {1}) ^ {2} + (\sigma^ {2}) ^ {2} + (\sigma^ {3}) ^ {2}\right).
$$


(1) Show that if

$$
\dot {\rho} = \phi ,
$$

$$
\dot {\rho} ^ {2} = 1 - k \rho^ {- 4},
$$

$$
\rho (0) = k ^ {\frac {1}{4}}, \dot {\rho} (0) = 0,
$$

$$
\phi (0) = 0, \dot {\phi} (0) = 2,
$$

then we obtain a family of Ricci flat metrics on $T S ^ { 2 }$ .

(2) Show that $\rho ( r ) \sim r , \dot { \rho } ( r ) \sim 1 , \ddot { \rho } ( r ) \sim 2 k r ^ { - 5 } \mathrm { a s } r  \infty$ . Conclude that all Pcurvatures are of order $r ^ { - 6 }$ as $r  \infty$ ! 1and that the metric looks like $( 0 , \infty ) \times$ $\mathbb { R P } ^ { 3 } = ( 0 , \infty ) \times \mathrm { S O } \left( 3 \right)$ ! 1 1 -at infinity. Moreover, show that scaling one of these D 1 -metrics corresponds to changing k. Thus, we really have only one Ricci flat metric; it is called the Eguchi-Hanson metric.

EXERCISE 4.7.24. For the general metric

$$
d r ^ {2} + \rho^ {2} (r) \left(\phi^ {2} (r) (\sigma^ {1}) ^ {2} + (\sigma^ {2}) ^ {2} + (\sigma^ {3}) ^ {2}\right)
$$

show that the .1; 1/-tensor, which in the orthonormal frame looks like

$$
\left[ \begin{array}{c c c c} 0 & - 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & - 1 \\ 0 & 0 & 1 & 0 \end{array} \right],
$$

yields a Hermitian structure.

(1) Show that this structure is Kähler, i.e., parallel, if and only if ${ \dot { \rho } } = \phi$

(2) Find the scalar curvature for such metrics.

(3) Show that there are scalar flat metrics on all the 2-dimensional vector bundles over $S ^ { 2 }$ . The one on $T S ^ { 2 }$ is the Eguchi-Hanson metric, and the one on $S ^ { 2 } \times \mathbb { R } ^ { 2 }$ is the Schwarzschild metric.

EXERCISE 4.7.25. Show that $\tau \left( \mathbb { R } \mathbb { P } ^ { n - 1 } \right)$  admits rotationally symmetric metrics $d r ^ { 2 } + \rho ^ { 2 } \left( r \right) d s _ { n - 1 } ^ { 2 }$ such that $\rho \left( r \right) = r$ for $r ~ > ~ 1$ and the Ricci curvatures are C  Dnonpositive. Thus, the Euclidean metric can be topologically perturbed to have nonpositive Ricci curvature. It is not possible to perturb the Euclidean metric in this way to have nonnegative scalar curvature or nonpositive sectional curvature. Try to convince yourself of that by looking at rotationally symmetric metrics on $\mathbb { R } ^ { n }$ and $\tau \left( \mathbb { R } \mathbb { P } ^ { n - 1 } \right)$ .

EXERCISE 4.7.26. We say that $( M , g )$ admits orthogonal coordinates around $p \in M$ if we have coordinates on some neighborhood of $\dot { p } .$ , where

$$
g _ {i j} = 0 \text {   for   } i \neq j,
$$

i.e., the coordinate vector fields are perpendicular. Show that such coordinates always exist in dimension 2, while they may not exist in dimension $> 3$ . To find a counterexample, you may want to show that in such coordinates the curvatures $R _ { i j k } ^ { l } = 0$ if all indices are distinct. It can be shown that such coordinates always Dexist in 3 dimensions.

EXERCISE 4.7.27. Show that the Weyl tensors for the Schwarzschild metric and the Eguchi-Hanson metrics are not zero.

EXERCISE 4.7.28. In this problem we shall see that even in dimension 4 the curvature tensor has some very special properties. Throughout we let $( M , g )$ be a 4-dimensional oriented Riemannian manifold. The bivectors $\Lambda ^ { 2 } T M$ come with a natural endomorphism called the Hodge  operator. It is defined as follows: for any oriented orthonormal basis $e _ { 1 } , e _ { 2 } , e _ { 3 } , e _ { 4 }$ we define $( e _ { 1 } \wedge e _ { 2 } ) = e _ { 3 } \wedge e _ { 4 }$ .

(1) Show that his gives a well-defined linear endomorphism which satisfies: $\ast = \textit { } I .$ (Extend the definition to a linear map: $\ast : \Lambda ^ { p } T M  \Lambda ^ { q } T M .$ , where $p + q = n$ . When $n = 2$ , we have: $T M  T M = \Lambda ^ { 1 } T M$ !satisfies: $* = - \ I$ , C D D 
 W ! Dthus yielding an almost complex structure on any surface.)

(2) Now decompose $\Lambda ^ { 2 } T M$ into 1 and 1 eigenspaces $\Lambda ^ { + } T M$ and $\Lambda ^ { - } T M$ for . Show that if $e _ { 1 } , e _ { 2 } , e _ { 3 } , e _ { 4 }$ C is an oriented orthonormal basis, then

$$
\begin{array}{l} e _ {1} \wedge e _ {2} \pm e _ {3} \wedge e _ {4} \in \Lambda^ {\pm} T M, \\ e _ {1} \wedge e _ {3} \pm e _ {4} \wedge e _ {2} \in \Lambda^ {\pm} T M, \\ e _ {1} \wedge e _ {4} \pm e _ {2} \wedge e _ {3} \in \Lambda^ {\pm} T M. \\ \end{array}
$$

(3) Thus, any linear map $L : \Lambda ^ { 2 } T M \to \Lambda ^ { 2 } T M$ has a block decomposition

$$
\begin{array}{l} L = \left[ \begin{array}{c c} A & D \\ B & C \end{array} \right], \\ A: \Lambda^ {+} T M \to \Lambda^ {+} T M, \\ D: \Lambda^ {+} T M \to \Lambda^ {-} T M, \\ B: \Lambda^ {-} T M \to \Lambda^ {+} T M, \\ C: \Lambda^ {-} T M \to \Lambda^ {-} T M. \\ \end{array}
$$

In particular, we can decompose the curvature operator $\Lambda ^ { 2 } T M  \Lambda ^ { 2 } T M ;$

$$
\mathfrak {R} = \left[ \begin{array}{c c} A & D \\ B & C \end{array} \right].
$$


Since is symmetric, we get that A; C are symmetric and that $D = B ^ { * }$ is the Radjoint of B. One can furthermore show that

$$
A = W ^ {+} + \frac {\mathrm{scal}}{1 2} I,
$$

$$
C = W ^ {-} + \frac {\mathrm{scal}}{1 2} I,
$$

where the Weyl tensor can be written

$$
W = \left[ \begin{array}{c c} W ^ {+} & 0 \\ 0 & W ^ {-} \end{array} \right].
$$

Find these decompositions for both of the doubly warped metrics:

$$
I \times S ^ {1} \times S ^ {2}, d r ^ {2} + \rho^ {2} (r) d \theta^ {2} + \phi^ {2} (r) d s _ {2} ^ {2},
$$

$$
I \times S ^ {3}, d r ^ {2} + \rho^ {2} (r) \left(\phi^ {2} (r) (\sigma^ {1}) ^ {2} + (\sigma^ {2}) ^ {2} + (\sigma^ {3}) ^ {2}\right).
$$

Use as basis for TM the natural frames in which we computed the curvature tensors. Now

(4) find the curvature operators for the Schwarzschild metric, the Eguchi-Hanson metric, $S ^ { 2 } \times S ^ { 2 } , S ^ { 4 }$ , and $\mathbb { C P } ^ { 2 }$ .

(5) Show that $( M , g )$ is Einstein if and only if $B = 0$ if and only if for every plane and its orthogonal complement $\pi ^ { \perp }$ Dwe have: sec $( \pi ) = \sec \left( \pi ^ { \perp } \right)$ .