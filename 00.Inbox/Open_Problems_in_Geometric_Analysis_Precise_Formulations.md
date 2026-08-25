# Open Problems in Geometric Analysis: Precise Formulations and Research-Scale Reductions

> Status checked on: August 25, 2026  
> Scope: min–max theory, free-boundary minimal surfaces, anisotropic minimal surfaces, and mean curvature flow.

## 0. Scope and terminology

This document distinguishes between:

1. **Publicly stated open problems:** questions explicitly posed in papers or surveys, or questions for which no public solution was found by the date above.
2. **Suggested research-scale reductions:** deliberately restricted versions intended to have the scope of a single paper. These reductions are not presented as conjectures stated verbatim in the cited sources.

A problem being publicly open does not imply that nobody is currently working on it. Before committing to a project, one should consult an advisor and contact the original authors about unpublished progress.

---

## 1. A joint index–vertex bound for min–max geodesics

### Definitions

Let $(M^2,g)$ be a closed Riemannian surface. Denote by $\mathcal Z_1(M;\mathbb Z_2)$ the space of one-dimensional flat cycles with coefficients in $\mathbb Z_2$, and let $\bar\lambda\in H^1(\mathcal Z_1(M;\mathbb Z_2);\mathbb Z_2)$ be its fundamental cohomology class. A continuous map $\Phi:X\to\mathcal Z_1(M;\mathbb Z_2)$ is a $p$-sweepout if $\Phi^*(\bar\lambda^p)\ne0$. The $p$-width is

$$
\omega_p(M,g):=\inf_{\Phi\in\mathcal P_p}\sup_{x\in X}\mathbf M(\Phi(x)).
$$

Two-dimensional regularity gives a stationary realization

$$
V_p=\sum_{j=1}^{N_p}m_{p,j}|\sigma_{p,j}|,
\qquad
\omega_p(M,g)=\sum_{j=1}^{N_p}m_{p,j}L_g(\sigma_{p,j}),
$$

where each $\sigma_{p,j}$ is a closed immersed geodesic and $m_{p,j}\in\mathbb N$. Regard $\Gamma_p=\bigcup_j\sigma_{p,j}$ as a finite geodesic network. For a vertex $v$, let $\operatorname{ord}(v)$ be the number of local branches meeting at $v$; a transverse double point has two local branches.

Define

$$
I(\Gamma_p):=\sum_j\operatorname{index}(\sigma_{p,j}),
\qquad
C(\Gamma_p):=\sum_{v\in\operatorname{Vert}(\Gamma_p)}\binom{\operatorname{ord}(v)}2.
$$

### Public open problem

Can one always choose a stationary realization of $\omega_p$ such that

$$
I(\Gamma_p)+C(\Gamma_p)\le p?
$$

Existing work controls the Morse index and the vertex complexity separately, but does not place both quantities under the same budget in full generality.

### Smallest suggested reduction

Prove the case $p=1$: there exists a min–max geodesic network realizing $\omega_1(M,g)$ such that

$$
I(\Gamma_1)+C(\Gamma_1)\le1.
$$

One may first assume that $g$ is bumpy. The central task is to rule out a realizing network that has both a negative variation and a transverse intersection.

### Possible tools

Allen–Cahn min–max approximation, semicontinuity of index, local resolution of transverse intersections, bumpy metrics, and multiplicity one.

### Source

J. Marx-Kuo, L. Sarnataro, and D. Stryker, *Index, Intersections, and Multiplicity of Min-Max Geodesics*, [arXiv:2410.02580](https://arxiv.org/abs/2410.02580).

---

## 2. The exact value of the fifth width $\omega_5(D^2)$

### Definitions and known bounds

Let $D^2=\{x\in\mathbb R^2:|x|\le1\}$ carry the Euclidean metric. Using the relative cycle space $\mathcal Z_1(D^2,\partial D^2;\mathbb Z_2)$, define

$$
\omega_p(D^2):=\inf_{\Phi\in\mathcal P_p(D^2,\partial D^2)}\sup_{x\in X}\mathbf M(\Phi(x)).
$$

A relatively stationary one-dimensional varifold is a finite free-boundary geodesic network: its interior edges are straight segments, its interior vertices satisfy a vector balancing condition, and its boundary vertices satisfy the corresponding balance condition for variations tangent to the boundary. A realizing varifold should not be assumed in advance to be a single smooth billiard trajectory.

The known values and bound are

$$
\omega_1(D^2)=\omega_2(D^2)=2,
\qquad
\omega_3(D^2)=\omega_4(D^2)=4,
\qquad
\omega_5(D^2)>4.
$$

### Public open problem

Determine the exact value of $\omega_5(D^2)$ and classify all free-boundary stationary integral one-varifolds $V$ satisfying

$$
\|V\|(D^2)=\omega_5(D^2).
$$

### Finite research program

1. Construct an explicit $5$-sweepout giving an upper bound $\omega_5(D^2)\le L_*$.
2. Classify all free-boundary stationary straight-line networks of mass at most $L_*$.
3. Use index, vertex complexity, mod-$2$ topology, and pull-tight arguments to eliminate networks that cannot support a $5$-sweepout.
4. If the upper and lower bounds agree, prove rigidity of the realizing network.

### Sources

- R. Donato, *The First $p$-Widths of the Unit Disk*, [arXiv:2002.06724](https://arxiv.org/abs/2002.06724).
- Subsequent work on realizations of widths and finite geodesic networks on surfaces with boundary: [arXiv:2505.03047](https://arxiv.org/abs/2505.03047).

---

## 3. Morse index and nullity of explicit immersed free-boundary minimal annuli

### Definitions

Let $X:\Sigma\to\mathbb B^3$ be a two-sided free-boundary minimal immersion with $\Sigma\cong S^1\times[0,1]$ and

$$
X(\partial\Sigma)\subset\partial\mathbb B^3,
\qquad
X(\Sigma)\perp\partial\mathbb B^3\quad\text{along }\partial\Sigma.
$$

The second-variation form for normal variations is

$$
Q_\Sigma(u,u)=\int_\Sigma\left(|\nabla u|^2-|A|^2u^2\right)\,dA-\int_{\partial\Sigma}u^2\,ds.
$$

The Morse index is the maximal dimension of a subspace of $H^1(\Sigma)$ on which $Q_\Sigma$ is negative definite. With the convention $\Delta=\operatorname{div}\nabla$, the nullity is the dimension of the solution space of

$$
(\Delta_\Sigma+|A|^2)u=0\quad\text{on }\Sigma,
$$

$$
\partial_\eta u=u\quad\text{on }\partial\Sigma,
$$

where $\eta$ is the outward conormal.

Fernández–Hauswirth–Mira constructed a countable family of explicit immersed free-boundary minimal annuli. Denote the member determined by a closing parameter $\alpha$ by $\Sigma_\alpha$.

### Public research problem

For every admissible $\alpha$, compute

$$
\operatorname{index}(\Sigma_\alpha)
\quad\text{and}\quad
\operatorname{nullity}(\Sigma_\alpha),
$$

and determine how these quantities vary with the period, rotation number, or covering number.

### Smallest suggested reduction

Fix a non-rotational example $\Sigma_{\alpha_0}$ of minimal period:

1. Decompose its Jacobi operator under the discrete symmetry group.
2. Numerically locate the low eigenvalues and formulate the expected exact index.
3. Prove the exact index analytically, rather than only upper and lower bounds.
4. Decide whether every Jacobi field in the nullspace is induced by an ambient rotation.

### Source

I. Fernández, L. Hauswirth, and P. Mira, *Free Boundary Minimal Annuli in the Unit Ball*, [DOI:10.1007/s00205-023-01943-z](https://doi.org/10.1007/s00205-023-01943-z), especially the discussion of stability and index.

---

## 4. Monotonicity of the $1$-width for radial graphs over the sphere

### Definitions

Let $f\in C^\infty(S^n)$ satisfy $f\ge1$, and define the radial graph

$$
S_f^n:=\{f(x)x:x\in S^n\}\subset\mathbb R^{n+1}.
$$

Let $g_f$ be its induced metric. Denote by $\omega_1(S_f^n,g_f)$ the Almgren–Pitts first width defined using $(n-1)$-dimensional cycles with $\mathbb Z_2$ coefficients. For the unit round sphere,

$$
\omega_1(S^n,g_{\mathrm{round}})=|S^{n-1}|.
$$

### Public open problem

Does every $f\ge1$ satisfy

$$
\omega_1(S_f^n,g_f)\ge|S^{n-1}|,
$$

with equality only when $f\equiv1$?

### Suggested reduction A: rotational symmetry

Assume $f(x)=F(x_{n+1})$ and prove the same inequality and rigidity statement. The candidate minimal hypersurfaces and sweepouts can then be reduced to a variational problem for a profile curve.

### Suggested reduction B: perturbations of the round sphere

Set

$$
f_\varepsilon=1+\varepsilon\varphi,
\qquad
\varphi\ge0.
$$

Prove that if $\varphi\not\equiv0$, then for all sufficiently small $\varepsilon>0$,

$$
\omega_1(S_{f_\varepsilon}^n)>|S^{n-1}|.
$$

The main difficulty is that the width need not depend smoothly on the metric, particularly when the realizing minimal hypersurface is not unique.

### Source

J. Chen and P. Gaspar, open questions on widths and rigidity of radial graphs, [arXiv:2402.18799](https://arxiv.org/abs/2402.18799).

---

## 5. Classification of boundary graphs for fixed genus and number of boundary components

### Definition

Let $\Sigma\subset\mathbb B^3$ be a connected, compact, properly embedded free-boundary minimal surface with

$$
\partial\Sigma=\gamma_1\sqcup\cdots\sqcup\gamma_b\subset S^2.
$$

Define the boundary graph $G_\partial(\Sigma)$ as follows. Its vertices are the connected components of $S^2\setminus\bigcup_i\gamma_i$. Each boundary component $\gamma_i$ gives an edge joining the two complementary regions adjacent to $\gamma_i$. By the Jordan curve theorem, $G_\partial(\Sigma)$ is a tree with $b$ edges and $b+1$ vertices.

For fixed genus $g$ and number of boundary components $b$, define

$$
\mathcal T_{g,b}:=
\left\{
[T]:
\begin{array}{l}
T\cong G_\partial(\Sigma),\\
\Sigma\subset\mathbb B^3\text{ is connected, properly embedded, and free-boundary minimal},\\
\operatorname{genus}(\Sigma)=g,
\quad |\pi_0(\partial\Sigma)|=b
\end{array}
\right\}.
$$

### Public open problem

Determine $\mathcal T_{g,b}$ for every $(g,b)$. Equivalently, given a finite tree $T$ with $b$ edges, find necessary and sufficient conditions for $T$ to be realized by an embedded free-boundary minimal surface of genus $g$.

Known constraints include strong star-graph rigidity in genus zero. Star graphs have been realized for arbitrary prescribed $g$ and $b$. Some non-star graphs have also been constructed, but no general classification is known.

### Suggested finite reduction

Use the existing constructions to identify the smallest unresolved pair $(g_0,b_0)$ and then determine the entire finite set

$$
\mathcal T_{g_0,b_0}\subset\{[T]:T\text{ is a tree with }b_0\text{ edges}\}.
$$

A solution could come from either direction: constructing missing trees, or proving obstructions from genus, complement topology, symmetry, Morse index, or Steklov spectral data. No particular low-order tree is asserted here to remain unrealized before that preliminary check.

### Sources

- Constructions of free-boundary minimal surfaces with arbitrary topology: [arXiv:2402.13121](https://arxiv.org/abs/2402.13121).
- A. Chu and D. Franz, questions on boundary graphs: [arXiv:2412.16785](https://arxiv.org/abs/2412.16785).

---

## 6. The critical catenoid as an area lower bound

### Background

Let $\mathbb K\subset\mathbb B^3$ denote the critical catenoid, the rotational free-boundary minimal annulus meeting the unit sphere orthogonally.

### Public open problem

If $\Sigma\to\mathbb B^3$ is a compact free-boundary minimal immersion other than an equatorial flat disk, must

$$
\operatorname{Area}(\Sigma)\ge\operatorname{Area}(\mathbb K)
$$

hold? If equality holds, must $\Sigma$ be congruent to $\mathbb K$? The full immersed version allows arbitrary genus, arbitrarily many boundary components, and self-intersections, so it is substantially larger than a single-paper project.

### Suggested finite reduction

Prove the embedded genus-zero version: if $\Sigma\subset\mathbb B^3$ is connected, embedded, genus zero, and not a disk, then

$$
\operatorname{Area}(\Sigma)\ge\operatorname{Area}(\mathbb K),
$$

with equality only for the critical catenoid. If this remains too broad, first impose a fixed number of boundary components, reflection symmetry, or a radial-graph condition.

### Available structure

The coordinate functions satisfy the Steklov problem

$$
\Delta_\Sigma x_i=0,
\qquad
\partial_\eta x_i=x_i\quad\text{on }\partial\Sigma.
$$

Consequently,

$$
2\operatorname{Area}(\Sigma)=\operatorname{Length}(\partial\Sigma),
$$

so the area problem is equivalent to a sharp lower bound for the boundary length.

### Sources

- Survey containing the critical-catenoid area question: [arXiv:1907.05053](https://arxiv.org/abs/1907.05053).
- Area estimates for embedded genus-zero free-boundary minimal surfaces: [arXiv:2301.01892](https://arxiv.org/abs/2301.01892).

---

## 7. Quadratic intrinsic area growth for stable anisotropic minimal surfaces in $\mathbb R^3$

### Definitions

Let $\Phi:\mathbb R^3\setminus\{0\}\to(0,\infty)$ be smooth, positive, even, one-homogeneous, and uniformly elliptic. Thus, there exist $0<\lambda\le\Lambda<\infty$ such that for every $|\nu|=1$ and $\tau\perp\nu$,

$$
\lambda|\tau|^2\le D^2\Phi(\nu)[\tau,\tau]\le\Lambda|\tau|^2.
$$

For a two-sided immersed surface $M^2\to\mathbb R^3$, define

$$
\mathcal F_\Phi(M)=\int_M\Phi(\nu)\,dA.
$$

The surface is $\Phi$-minimal if the first variation vanishes, and stable if the second variation is nonnegative for every compactly supported normal variation. Let $B_M(p,R)$ be an intrinsic geodesic ball.

### Public open problem

If $M^2\to\mathbb R^3$ is a complete, two-sided, stable $\Phi$-minimal immersion, does there exist a constant $C$ such that

$$
\operatorname{Area}_M(B_M(p,R))\le CR^2
\quad\text{for every }R\ge1?
$$

This intrinsic growth estimate is closely tied to the stable anisotropic Bernstein problem in dimension two.

### Suggested restricted version

Define the ellipticity ratio $\kappa(\Phi)=\Lambda/\lambda$. Find an explicit $\kappa_0>1$ such that every complete stable $\Phi$-minimal surface has quadratic intrinsic area growth whenever $\kappa(\Phi)\le\kappa_0$. A realistic goal is to enlarge the range allowed by existing small-perturbation results, or to remove proximity to the Euclidean area integrand within a rotationally or reflection-symmetric family.

A weaker intermediate target is to prove, for each fixed $\varepsilon>0$,

$$
\operatorname{Area}_M(B_M(p,R))\le C_\varepsilon R^{2+\varepsilon}.
$$

### Sources

- O. Chodosh and C. Li, questions on stable anisotropic minimal surfaces and area growth, [arXiv:2206.06394](https://arxiv.org/abs/2206.06394).
- Subsequent progress: [arXiv:2505.16595](https://arxiv.org/abs/2505.16595).

---

## 8. Classification of graphs at infinity of self-shrinkers

### Definition

Let $\Sigma^2\subset\mathbb R^3$ be a complete, properly embedded, finite-topology self-shrinker satisfying

$$
H+\frac12\langle x,\nu\rangle=0.
$$

For a sufficiently large regular value $R$, the intersection $\Sigma\cap S_R^2$ consists of finitely many disjoint closed curves. Define $G_\infty(\Sigma)$ by taking the connected components of $S_R^2\setminus(\Sigma\cap S_R^2)$ as vertices and the intersection curves as edges joining their adjacent complementary regions. Under the appropriate finite-topology and transversality hypotheses, its isomorphism type stabilizes for large $R$ and is a tree.

### Public open problem

For a fixed genus $g$, characterize the finite trees that occur as $G_\infty(\Sigma)$. Define

$$
\mathcal G_g:=\{[G_\infty(\Sigma)]:\operatorname{genus}(\Sigma)=g\}.
$$

The objective is to determine $\mathcal G_g$, or at least to find necessary and sufficient realizability conditions.

### Suggested finite reduction

Fix $g=1$ and a small integer $b_0$, and determine

$$
\mathcal G_{1,\le b_0}:=\{[T]\in\mathcal G_1:|E(T)|\le b_0\}.
$$

This requires combining asymptotic analysis of the ends, graph-theoretic obstructions, gluing or equivariant min–max constructions, and stability of the graph type under limiting procedures.

### Source

A. Chu and D. Franz, questions on graphs at infinity, [arXiv:2412.16785](https://arxiv.org/abs/2412.16785).

---

## 9. A closed embedded genus-one self-shrinker of Gaussian Morse index $5$

### Definitions

Self-shrinkers are critical points of the Gaussian area functional

$$
F(\Sigma):=\frac1{4\pi}\int_\Sigma e^{-|x|^2/4}\,dA.
$$

The Gaussian Jacobi operator is

$$
L_f=\Delta_\Sigma-\frac12\langle x,\nabla_\Sigma(\cdot)\rangle+|A|^2+\frac12.
$$

Its quadratic form is

$$
Q_f(u,u)=\int_\Sigma\left(|\nabla u|^2-\left(|A|^2+\frac12\right)u^2\right)e^{-|x|^2/4}\,dA.
$$

For a closed self-shrinker, the Gaussian Morse index is the maximal dimension of a subspace on which $Q_f$ is negative definite.

### Explicit conjecture

Does there exist a smooth, closed, embedded, genus-one self-shrinker $\Sigma\subset\mathbb R^3$ satisfying

$$
\operatorname{index}_F(\Sigma)=5?
$$

Chu–Sun propose such a surface as a candidate for a “second generic” singularity model after spherical and cylindrical singularities.

### Suggested finite reduction

Choose an existing closed embedded genus-one self-shrinker $\Sigma_*$ and attempt to prove

$$
\operatorname{index}_F(\Sigma_*)=5.
$$

A practical sequence is: decompose $L_f$ using symmetry; numerically locate its negative eigenvalues; prove $\operatorname{index}_F(\Sigma_*)\ge5$ analytically; and then prove $\operatorname{index}_F(\Sigma_*)\le5$ using nodal-domain arguments, Dirichlet–Neumann decomposition, or rigorous spectral comparison. The upper bound is usually the difficult part.

### Source

A. Chu and A. Sun, *Genus One Singularities in Mean Curvature Flow*, [arXiv:2308.05923](https://arxiv.org/abs/2308.05923), Conjecture 1.9.

---

## 10. Optional direction: a pinching improvement for embedded prescribed-mean-curvature spheres

### Full problem

Let $(S^3,g)$ be a Riemannian three-sphere and let $h:S^3\to(0,\infty)$ be smooth. Does there exist an oriented smooth embedding $X:S^2\hookrightarrow S^3$ satisfying

$$
H_X=h\circ X?
$$

When $\Sigma=\partial\Omega$, this is the Euler–Lagrange equation of

$$
\mathcal A^h(\Omega)=\operatorname{Area}(\partial\Omega)-\int_\Omega h\,dV_g.
$$

The full problem for arbitrary metrics and arbitrary positive functions is a field-level problem, not a small or medium project.

### Suggested quantitative reduction

On the unit round three-sphere, let $h$ satisfy the admissibility conditions required by the current PMC min–max theory. The known pinching constant can be expressed as the positive root $h_0\approx0.547$ of

$$
\pi h_0^3+2h_0^2+4\pi h_0-8=0.
$$

Existing results give an embedded solution under the relevant genericity and admissibility assumptions when $\|h\|_{L^\infty}<h_0$, with subsequent work giving at least two solutions under the same pinching condition.

A precise medium-scale target is to find an explicit $h_*>h_0$ such that every generic admissible function satisfying

$$
\|h\|_{L^\infty(S^3)}<h_*
$$

still admits an embedded two-sphere $\Sigma$ with $H_\Sigma=h|_\Sigma$. One may first restrict to functions invariant under a prescribed finite symmetry group.

### Sources

- L. Sarnataro and D. Stryker, *Optimal Regularity for Minimizers of the Prescribed Mean Curvature Functional over Isotopies*, [arXiv:2304.02722](https://arxiv.org/abs/2304.02722).
- L. Mazurowski and X. Zhou, *Pairs of Embedded Spheres with Pinched Prescribed Mean Curvature*, [arXiv:2511.08228](https://arxiv.org/abs/2511.08228).

---

## 11. Priority assessment

| Priority | Problem | Estimated scale | Main risk |
|---:|---|---|---|
| 1 | Exact value of $\omega_5(D^2)$ | Small to medium | Complete classification of low-mass stationary networks |
| 2 | Joint index–vertex bound for $p=1$ | Small to medium | Simultaneous control of two distinct complexity measures |
| 3 | Index of explicit free-boundary minimal annuli | Small to medium | A sharp spectral upper bound may be delicate |
| 4 | Monotonicity of the radial-graph $1$-width | Medium | Width may depend nonsmoothly on the metric |
| 5 | Boundary graphs for fixed $(g,b)$ | Medium | Both constructions and obstructions may require new ideas |
| 6 | Critical-catenoid area lower bound | Medium to heavy | No known sharp monotone quantity or calibration |
| 7 | Anisotropic quadratic area growth | Medium to heavy | Stability inequalities weaken for general integrands |
| 8 | Graphs at infinity of self-shrinkers | Medium to heavy | Coupling between end analysis and global construction |
| 9 | Genus-one index-$5$ self-shrinker | Medium to heavy | Controlling the entire negative spectrum |
| Optional | Improvement of the PMC pinching constant | Medium to heavy | Active area with a substantial risk of overlap |

For an early-stage doctoral project, the recommended order is:

1. the exact value of $\omega_5(D^2)$;
2. the joint index–vertex bound for $p=1$;
3. the Morse index of an explicit free-boundary minimal annulus.

---

## 12. Outdated formulations and problems that should not be described as small

1. The question of whether $\mathbb B^3$ contains embedded free-boundary minimal surfaces with arbitrary prescribed genus and number of boundary components has been addressed by recent arbitrary-topology constructions.
2. The critical catenoid is not unique among immersed free-boundary minimal annuli; the Fernández–Hauswirth–Mira examples disprove that formulation. Uniqueness under an additional embeddedness assumption may still be open.
3. The unrestricted Nirenberg problem, the general $\sigma_k$-Yamabe problem, and extension of higher-dimensional Ricci flow under a scalar-curvature bound are field-level problems. Only sharply specified symmetric, perturbative, or quantitative reductions belong on a small-to-medium-scale list.
