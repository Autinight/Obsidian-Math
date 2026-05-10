
In this chapter we prove some of the fundamental results for manifolds with lower Ricci curvature bounds. Two important techniques will be developed: Relative volume comparison and weak upper bounds for the Laplacian of distance functions. Later some of the analytic estimates we develop here will be used to estimate Betti numbers for manifolds with lower curvature bounds.

The goal is to develop several techniques to help us understand lower Ricci curvature bounds. In the 50s Calabi discovered that one has weak upper bounds for the Laplacian of distance function given lower Ricci curvature bounds, even at points where this function isn't smooth. However, it wasn't until after 1970, when Cheeger and Gromoll proved their splitting theorem, that this was fully appreciated.

Around 1980, Gromov exposed the world to his view of how volume comparison can be used. The relative volume comparison theorem was actually first proved by Bishop in [14]. At the time, however, one only considered balls of radius less than the injectivity radius. Gromov observed that the result holds for all balls and immediately put it to use in many situations. In particular, he showed how one could generalize the Betti number estimate from Bochner's theorem (see chapter 9) using only topological methods and volume comparison. Anderson refined this to get information about fundamental groups. One's intuition about Ricci curvature has generally been borrowed from experience with sectional curvature. This has led to many naive conjectures that have proven to be false through the construction of several interesting examples of manifolds with nonnegative Ricci curvature. On the other hand, much good work has also come out of this, as we shall see.

The focus in this chapter will be on the fundamental comparison techniques and how they are used to prove a few rigidity theorems. In subsequent chapters there will be many further results related to lower Ricci curvature bounds that depend on more analytical techniques.


---

## 7.1 Volume Comparison

### 7.1.1 The Fundamental Equations

Throughout this section, assume that we have a complete Riemannian manifold $(M, g)$ of dimension $n$ and a distance function $r(x)$ that is smooth on an open set $U \subset M$. In subsequent sections we shall further assume that $r(x) = |xp|$ so that it is smooth on the image of the interior of the segment domain (see section 5.7.3). Recall the following fundamental equations for the metric from proposition 3.2.11:

$$
\begin{aligned}
(1)&\quad \mathcal{L}_{\partial_r} g = 2\mathrm{Hess}\, r, \\
(2)&\quad (\nabla_{\partial_r} \mathrm{Hess}\, r)(X, Y) + (\mathrm{Hess}\, r)^2(X, Y) = -R(X, \partial_r, \partial_r, Y).
\end{aligned}
$$

There is a similar set of equations for the volume form.

> [!proposition] Proposition 7.1.1
> The volume form $\mathrm{vol}$ and Laplacian $\Delta r$ of a smooth distance function $r$ are related by:
> $$
> \begin{aligned}
> \text{(tr1)}&\quad \mathcal{L}_{\partial_r} \mathrm{vol} = \Delta r \, \mathrm{vol}, \\
> \text{(tr2)}&\quad \partial_r \Delta r + \frac{(\Delta r)^2}{n-1} \leq \partial_r \Delta r + |\mathrm{Hess}\, r|^2 = -\mathrm{Ric}(\partial_r, \partial_r).
> \end{aligned}
> $$

> [!proof] Proof
> The first equation was established in section 2.1.3 as one of the definitions of the Laplacian of $r$.
> 
> To establish the second equation we take traces in (2). More precisely, select an orthonormal frame $E_i$, set $X = Y = E_i$, and sum over $i$. In addition it is convenient to assume that this frame is parallel: $\nabla_{\partial_r} E_i = 0$. On the right-hand side
> $$
> \sum_{i=1}^n R(E_i, \partial_r, \partial_r, E_i) = \mathrm{Ric}(\partial_r, \partial_r).
> $$
> 
> While on the left-hand side
> $$
> \sum_{i=1}^n (\nabla_{\partial_r} \mathrm{Hess}\, r)(E_i, E_i) = \sum_{i=1}^n \partial_r \mathrm{Hess}\, r(E_i, E_i) = \partial_r \Delta r
> $$
> and
> $$
> \begin{aligned}
> \sum_{i=1}^n (\mathrm{Hess}\, r)^2(E_i, E_i) &= \sum_{i=1}^n g(\nabla_{E_i} \partial_r, \nabla_{E_i} \partial_r) \\
> &= \sum_{i,j=1}^n g(\nabla_{E_i} \partial_r, g(\nabla_{E_i} \partial_r, E_j) E_j) \\
> &= \sum_{i,j=1}^n g(\nabla_{E_i} \partial_r, E_j) g(\nabla_{E_i} \partial_r, E_j) \\
> &= |\mathrm{Hess}\, r|^2.
> \end{aligned}
> $$
> 
> Finally we need to show that
> $$
> \frac{(\Delta r)^2}{n - 1} \leq |\mathrm{Hess}\, r|^2.
> $$
> 
> To this end also assume that $E_1 = \partial_r$, then
> $$
> \begin{aligned}
> |\mathrm{Hess}\, r|^2 &= \sum_{i,j=1}^n (g(\nabla_{E_i} \partial_r, E_j))^2 \\
> &= \sum_{i,j=2}^n (g(\nabla_{E_i} \partial_r, E_j))^2 \\
> &\geq \frac{1}{n - 1} \left(\sum_{i=2}^n g(\nabla_{E_i} \partial_r, E_i)\right)^2 \\
> &= \frac{1}{n - 1} (\Delta r)^2.
> \end{aligned}
> $$
> 
> The inequality
> $$
> |A|^2 \geq \frac{1}{k} |\mathrm{tr}(A)|^2
> $$
> for a $k \times k$ matrix $A$ is a direct consequence of the Cauchy-Schwarz inequality
> $$
> |(A, I_k)|^2 \leq |A|^2 |I_k|^2 = |A|^2 k,
> $$
> where $I_k$ is the identity $k \times k$ matrix.

If we use the polar coordinate decomposition $g = dr^2 + g_r$ and $\mathrm{vol}_{n-1}$ is the standard volume form on $S^{n-1}(1)$, then $\mathrm{vol} = \lambda(r, \theta) dr \wedge \mathrm{vol}_{n-1}$, where $\theta$ indicates a coordinate on $S^{n-1}$. If we apply (tr1) to this version of the volume form we get

$$
\mathcal{L}_{\partial_r} \mathrm{vol} = \mathcal{L}_{\partial_r}(\lambda(r, \theta) dr \wedge \mathrm{vol}_{n-1}) = \partial_r(\lambda) dr \wedge \mathrm{vol}_{n-1}
$$

as both $\mathcal{L}_{\partial_r} dr = 0$ and $\mathcal{L}_{\partial_r} \mathrm{vol}_{n-1} = 0$. This allows us to simplify (tr1) to the formula

$$
\partial_r \lambda = \lambda \Delta r.
$$

In constant curvature $k$ we know that $g_k = dr^2 + \mathrm{sn}_k^2(r) ds_{n-1}^2$, thus the volume form is

$$
\mathrm{vol}_k = \lambda_k(r) dr \wedge \mathrm{vol}_{n-1} = \mathrm{sn}_k^{n-1}(r) dr \wedge \mathrm{vol}_{n-1}.
$$

This conforms with the fact that

$$
\Delta r = (n - 1) \frac{\mathrm{sn}_k'(r)}{\mathrm{sn}_k(r)},
$$

$$
\partial_r(\mathrm{sn}_k^{n-1}(r)) = (n - 1) \frac{\mathrm{sn}_k'(r)}{\mathrm{sn}_k(r)} \mathrm{sn}_k^{n-1}(r).
$$


---

### 7.1.2 Volume Estimation

With the above information we can prove the estimates that are analogous to our basic comparison estimates for the metric and Hessian of $r(x) = |xp|$ assuming lower sectional curvature bounds (see section 6.4).

> [!lemma] Lemma 7.1.2 (Ricci Comparison)
> If $(M, g)$ has $\text{Ric} \geq (n-1) \cdot k$ for some $k \in \mathbb{R}$, then
> 
> $$
> \Delta r \leq (n-1) \frac{\text{sn}_k'(r)}{\text{sn}_k(r)},
> $$
> 
> $$
> \partial_r\left(\frac{\lambda}{\lambda_k}\right) \leq 0,
> $$
> 
> $$
> \lambda(r, \theta) \leq \lambda_k(r) = \text{sn}_k^{n-1}(r).
> $$

> [!proof]- Proof
> Notice that the right-hand sides of the inequalities correspond exactly to what one would obtain in constant curvature $k$. Thus the first inequality is a direct consequence of corollary 6.4.2 if we use $\rho = \Delta r / (n-1)$.
> 
> For the second inequality use that $\partial_r \lambda = \lambda \Delta r$ to conclude that
> 
> $$
> \partial_r \lambda \leq (n-1) \frac{\text{sn}_k'(r)}{\text{sn}_k(r)} \lambda
> $$
> 
> and
> 
> $$
> \partial_r \lambda_k = (n-1) \frac{\text{sn}_k'(r)}{\text{sn}_k(r)} \lambda_k.
> $$
> 
> This means that
> 
> $$
> \partial_r\left(\frac{\lambda}{\lambda_k}\right) \leq 0.
> $$
> 
> The last inequality follows from the second after the observation that $\lambda = r^{n-1} + O(r^n)$ at $r = 0$ so that
> 
> $$
> \lim_{r \to 0} \frac{\lambda}{\lambda_k} = 1.
> $$

Our first volume comparison yields the obvious upper volume bound coming from the upper bound on the volume density.

> [!lemma] Lemma 7.1.3
> If $(M, g)$ has $\text{Ric} \geq (n-1) \cdot k$, then $\text{vol } B(p, r) \leq v(n, k, r)$, where $v(n, k, r)$ denotes the volume of a ball of radius $r$ in the constant curvature space form $S_k^n$.

> [!proof]- Proof
> In polar coordinates
> 
> $$
> \begin{aligned}
> \text{vol } B(p, r) &= \int_{\text{seg}_p \cap B(0,r)} \lambda(r) \, dr \wedge \text{vol}_{n-1} \\
> &\leq \int_{\text{seg}_p \cap B(0,r)} \lambda_k(r) \, dr \wedge \text{vol}_{n-1} \\
> &\leq \int_{B(0,r)} \text{vol}_k \\
> &= v(n, k, r).
> \end{aligned}
> $$

With a little more technical work, the above absolute volume comparison result can be improved in a rather interesting direction. The result one obtains is referred to as the relative volume comparison estimate. It will prove invaluable throughout the rest of the text.

> [!lemma] Lemma 7.1.4 (Relative Volume Comparison, Bishop, 1964 and Gromov, 1980)
> Let $(M, g)$ be a complete Riemannian manifold with $\text{Ric} \geq (n-1) \cdot k$. The volume ratio
> 
> $$
> r \mapsto \frac{\text{vol } B(p, r)}{v(n, k, r)}
> $$
> 
> is a nonincreasing function whose limit is 1 as $r \to 0$.

> [!proof]- Proof
> We will use exponential polar coordinates. The volume form $\lambda \, dr \wedge \text{vol}_{n-1}$ for $(M, g)$ is initially defined only on some star-shaped subset of $T_pM = \mathbb{R}^n$ but we can just set $\lambda = 0$ outside this set. The comparison density $\lambda_k$ is defined on all of $\mathbb{R}^n$ when $k \leq 0$ and on $B(0, \pi/\sqrt{k})$ when $k > 0$. We can likewise extend $\lambda_k = 0$ outside $B(0, \pi/\sqrt{k})$. Myers' theorem 6.3.3 says that $\lambda = 0$ on $\mathbb{R}^n - B(0, \pi/\sqrt{k})$ in this case. So we might as well just consider $r < \pi/\sqrt{k}$ when $k > 0$.
> 
> The ratio is
> 
> $$
> \frac{\text{vol } B(p, R)}{v(n, k, R)} = \frac{\int_0^R \int_{S^{n-1}} \lambda \, dr \wedge \text{vol}_{n-1}}{\int_0^R \int_{S^{n-1}} \lambda_k \, dr \wedge \text{vol}_{n-1}},
> $$
> 
> and $0 \leq \lambda(r, \theta) \leq \lambda_k(r) = \text{sn}_k^{n-1}(r)$ everywhere.
> 
> Differentiation of this quotient with respect to $R$ yields
> 
> $$
> \begin{aligned}
> &\frac{d}{dR} \left( \frac{\text{vol } B(p, R)}{v(n, k, R)} \right) \\
> &= \frac{\left(\int_{S^{n-1}} \lambda(R, \theta) \, \text{vol}_{n-1}\right) \left(\int_0^R \int_{S^{n-1}} \lambda_k(r) \, dr \wedge \text{vol}_{n-1}\right)}{(v(n, k, R))^2} \\
> &\quad - \frac{\left(\int_{S^{n-1}} \lambda_k(R) \, \text{vol}_{n-1}\right) \left(\int_0^R \int_{S^{n-1}} \lambda(r, \theta) \, dr \wedge \text{vol}_{n-1}\right)}{(v(n, k, R))^2} \\
> &= (v(n, k, R))^{-2} \cdot \int_0^R \left[ \left(\int_{S^{n-1}} \lambda(R, \theta) \, \text{vol}_{n-1}\right) \cdot \left(\int_{S^{n-1}} \lambda_k(r) \, \text{vol}_{n-1}\right) \right. \\
> &\quad \left. - \left(\int_{S^{n-1}} \lambda_k(R) \, \text{vol}_{n-1}\right) \left(\int_{S^{n-1}} \lambda(r, \theta) \, \text{vol}_{n-1}\right) \right] dr.
> \end{aligned}
> $$
> 
> So to see that
> 
> $$
> R \mapsto \frac{\text{vol } B(p, R)}{v(n, k, R)}
> $$
> 
> is nonincreasing, it suffices to check that
> 
> $$
> \frac{\int_{S^{n-1}} \lambda(r, \theta) \, \text{vol}_{n-1}}{\int_{S^{n-1}} \lambda_k(r) \, \text{vol}_{n-1}} = \frac{1}{\omega_{n-1}} \int_{S^{n-1}} \frac{\lambda(r, \theta)}{\lambda_k(r)} \, \text{vol}_{n-1}
> $$
> 
> is nonincreasing. This follows from lemma 7.1.2 as $\partial_r(\lambda(r, \theta)/\lambda_k(r)) \leq 0$. ∎


---

### 7.1.3 The Maximum Principle

We explain how one can assign second derivatives to functions at points where the function is not smooth. In section 12.1 we shall also discuss generalized gradients, but this theory is completely different and works only for Lipschitz functions.

The key observation for our development of generalized Hessians and Laplacians is

> [!lemma] Lemma 7.1.5
> If $f, h : (M, g) \to \mathbb{R}$ are $C^2$ functions such that $f(p) = h(p)$ and $f(x) \geq h(x)$ for all $x$ near $p$, then
> 
> 1. $\nabla f(p) = \nabla h(p)$,
> 2. $\text{Hess}\, f|_p \geq \text{Hess}\, h|_p$,
> 3. $\Delta f(p) \geq \Delta h(p)$.

> [!proof]- Proof
> If $(M, g) \subset (\mathbb{R}, g_{\mathbb{R}})$, then the theorem is standard from single variable calculus. In general, let $c : (-\epsilon, \epsilon) \to M$ be a curve with $c(0) = p$. Then use this observation on $f \circ c$, $h \circ c$ to see that
> 
> $$
> df(\dot{c}(0)) = dh(\dot{c}(0)),
> $$
> 
> $$
> \text{Hess}\, f(\dot{c}(0), \dot{c}(0)) \geq \text{Hess}\, h(\dot{c}(0), \dot{c}(0)).
> $$
> 
> This clearly implies the lemma if we let $v = \dot{c}(0)$ run over all $v \in T_pM$. ∎

The lemma implies that a $C^2$ function $f : M \to \mathbb{R}$ has $\text{Hess}\, f|_p \geq B$, where $B$ is a symmetric bilinear map on $T_pM$ (or $\Delta f(p) \geq a \in \mathbb{R}$), if and only if for every $\epsilon > 0$ there exists a function $f_\epsilon(x)$ defined in a neighborhood of $p$ such that:

1. $f_\epsilon(p) = f(p)$,
2. $f(x) \geq f_\epsilon(x)$ in some neighborhood of $p$,
3. $\text{Hess}\, f_\epsilon|_p \geq B - \epsilon \cdot g|_p$ (or $\Delta f_\epsilon(p) \geq a - \epsilon$).

Such functions $f_\epsilon$ are called **support functions from below**. One can analogously use support functions from above to find upper bounds for $\text{Hess}\, f$ and $\Delta f$. Support functions are also known as **barrier functions** in PDE theory.

For a continuous function $f : (M, g) \to \mathbb{R}$ we say that: $\text{Hess}\, f|_p \geq B$ (or $\Delta f(p) \geq a$) if and only if for all $\epsilon > 0$ there exist smooth support functions $f_\epsilon$ satisfying (1)-(3). One also says that $\text{Hess}\, f|_p \geq B$ (or $\Delta f(p) \geq a$) hold in the **support** or **barrier sense**. In PDE theory there are other important ways of defining weak derivatives. The notion used here is guided by what we can obtain from geometry.

One can easily check that if $(M, g) \subset (\mathbb{R}, g_{\mathbb{R}})$, then $f$ is convex if $\text{Hess}\, f \geq 0$ everywhere. Thus, $f : (M, g) \to \mathbb{R}$ is convex if $\text{Hess}\, f \geq 0$ everywhere. Using this, one can prove

> [!theorem] Theorem 7.1.6
> If $f : (M, g) \to \mathbb{R}$ is continuous with $\text{Hess}\, f \geq 0$ everywhere, then $f$ is constant near any local maximum. In particular, $f$ cannot have a global maximum unless $f$ is constant.

We shall need a more general version of this theorem called the maximum principle. As stated below, it was first proved for smooth functions by E. Hopf in 1927 and then later for continuous functions by Calabi in 1958 using the idea of support functions. A continuous function $f : (M, g) \to \mathbb{R}$ with $\Delta f \geq 0$ everywhere is said to be **subharmonic**. If $\Delta f \leq 0$, then $f$ is **superharmonic**.

> [!theorem] Theorem 7.1.7 (The Strong Maximum Principle)
> If $f : (M, g) \to \mathbb{R}$ is continuous and subharmonic, then $f$ is constant in a neighborhood of every local maximum. In particular, if $f$ has a global maximum, then $f$ is constant.

> [!proof]- Proof
> First, suppose that $\Delta f > 0$ everywhere. Then $f$ can't have any local maxima at all. For if $f$ has a local maximum at $p \in M$, then there would exist a smooth support function $f_\epsilon(x)$ with
> 
> 1. $f_\epsilon(p) = f(p)$,
> 2. $f_\epsilon(x) \leq f(x)$ for all $x$ near $p$,
> 3. $\Delta f_\epsilon(p) > 0$.
> 
> Here (1) and (2) imply that $f_\epsilon$ must also have a local maximum at $p$. But this implies that $\text{Hess}\, f_\epsilon(p) \leq 0$, which contradicts (3).
> 
> Next assume that $\Delta f \geq 0$ and let $p \in M$ be a local maximum for $f$. For sufficiently small $r < \text{inj}(p)$ the restriction $f : B(p, r) \to \mathbb{R}$ will have a global maximum at $p$. If $f$ is constant on $B(p, r)$, then we are done. Otherwise assume (by possibly decreasing $r$) that $f(x_0) \neq f(p)$ for some
> 
> $$
> x_0 \in \partial B(p, r) = \{x \in M \mid |xp| = r\}
> $$
> 
> and define
> 
> $$
> V = \{x \in \partial B(p, r) \mid f(x) = f(p)\}.
> $$
> 
> Our goal is to construct a smooth function $h = e^{\alpha\varphi} - 1$ such that
> 
> - $h < 0$ on $V$,
> - $h(p) = 0$,
> - $\Delta h > 0$ on $\bar{B}(p, r)$.
> 
> This function is found by first selecting an open disc $U \subset \partial B(p, r)$ that contains $V$ and then $\varphi$ such that
> 
> - $\varphi(p) = 0$,
> - $\varphi < 0$ on $U$,
> - $\nabla \varphi \neq 0$ on $\bar{B}(p, r)$.
> 
> Such a $\varphi$ can be found by letting $\varphi = x^1$ in a coordinate system $(x^1, \ldots, x^n)$ centered at $p$ where $U$ lies in the lower half-plane: $x^1 < 0$ (see also figure 7.1). Lastly, choose $\alpha$ so large that
> 
> $$
> \Delta h = \alpha e^{\alpha\varphi}(\alpha|\nabla\varphi|^2 + \Delta\varphi) > 0 \text{ on } \bar{B}(p, r).
> $$
> 
> Now consider the function $\bar{f} = f + \delta h$ on $\bar{B}(p, r)$. This function has a local maximum in the interior $B(p, r)$, provided $\delta$ is very small, since this forces
> 
> $$
> \bar{f}(p) = f(p) > \max \{\bar{f}(x) \mid x \in \partial B(p, r)\}.
> $$
> 
> On the other hand, we can also show that $\bar{f}$ has positive Laplacian, thus obtaining a contradiction as in the first part of the proof. To see that the Laplacian is positive,
> 
> > [!note] Fig. 7.1 Coordinate function construction
> 
> select $f_\epsilon$ as a support function from below for $f$ at $q \in B(p, r)$. Then $f_\epsilon + \delta h$ is a support function from below for $\bar{f}$ at $q$. The Laplacian of this support function is estimated by
> 
> $$
> \Delta(f_\epsilon + \delta h)(q) \geq -\epsilon + \delta\Delta h(q),
> $$
> 
> which for given $\delta$ must become positive as $\epsilon \to 0$. ∎

A continuous function $f : (M, g) \to \mathbb{R}$ is said to be **linear** if $\text{Hess}\, f \equiv 0$, i.e., both of the inequalities $\text{Hess}\, f \geq 0$, $\text{Hess}\, f \leq 0$ hold everywhere. This easily implies that

$$
(f \circ c)(t) = f(c(0)) + \alpha t
$$

for each geodesic $c$ as $f \circ c$ is both convex and concave. Thus

$$
f \circ \exp_p(x) = f(p) + g(v_p, x)
$$

for each $p \in M$ and some $v_p \in T_pM$. In particular, $f$ is $C^\infty$ with $\nabla f|_p = v_p$.

More generally, we have the concept of a **harmonic function**. This is a continuous function $f : (M, g) \to \mathbb{R}$ with $\Delta f = 0$. The maximum principle shows that if $M$ is closed, then all harmonic functions are constant. On incomplete or complete open manifolds, however, there are often many harmonic functions. This is in contrast to the existence of linear functions, where $\nabla f$ is necessary parallel and therefore splits the manifold locally into a product where one factor is an interval. It is an important fact that any harmonic function is $C^\infty$ if the metric is $C^\infty$. Using the above maximum principle this is a standard result in PDE theory (see also theorem 9.2.7 and section 11.2).

> [!theorem] Theorem 7.1.8 (Regularity of harmonic functions)
> If $f : (M, g) \to \mathbb{R}$ is continuous and harmonic in the weak sense, then $f$ is smooth.

> [!proof]- Proof
> We fix $p \in M$ and a neighborhood $\Omega$ around $p$ with smooth boundary. We can in addition assume that $\Omega$ is contained in a coordinate neighborhood. It is a standard but nontrivial fact from PDE theory that the following Dirichlet boundary value problem has a solution:
> 
> $$
> \Delta u = 0,
> $$
> 
> $$
> u|_{\partial\Omega} = f|_{\partial\Omega}.
> $$
> 
> Moreover, such a solution $u$ is smooth on the interior of $\Omega$. Now consider the two functions $u - f$ and $f - u$ on $\Omega$. If they are both nonpositive, then they must vanish and hence $f = u$ is smooth near $p$. Otherwise one of these functions must be positive somewhere. However, as it vanishes on the boundary and is subharmonic this implies that it has an interior global maximum. The maximum principle then shows that the function is constant, but this is only possible if it vanishes. ∎


---

### 7.1.4 Geometric Laplacian Comparison

The idea of using support functions to estimate the Laplacian is particularly convenient for geometric applications since distance functions always have support functions from above.

> [!lemma] Lemma 7.1.9 (Calabi, 1958)
> If $(M, g)$ is complete and $\mathrm{Ric}(M, g) \geq (n-1)k$, then any distance function $r(x) = |xp|$ satisfies:
> 
> $$
> \Delta r(x) \leq (n-1) \frac{\mathrm{sn}'_k(r(x))}{\mathrm{sn}_k(r(x))}.
> $$

> [!proof] Proof
> We know from lemma 7.1.2 that the result is true whenever $r$ is smooth. In general, we can for each $q \in M$ choose a unit speed segment $\sigma : [0, L] \to M$ with $\sigma(0) = p$, $\sigma(L) = q$. Then the triangle inequality implies that $r_\varepsilon(x) = \varepsilon + |\sigma(\varepsilon)x|$ is a support function from above for $r$ at $q$. If all these support functions are smooth at $q$, then
> 
> $$
> \Delta r_\varepsilon(q) \leq (n-1) \frac{\mathrm{sn}'_k(r_\varepsilon(q))}{\mathrm{sn}_k(r_\varepsilon(q))}
> $$
> 
> $$
> = (n-1) \frac{\mathrm{sn}'_k(r(q) - \varepsilon)}{\mathrm{sn}_k(r(q) - \varepsilon)}
> $$
> 
> $$
> \searrow (n-1) \frac{\mathrm{sn}'_k(r(q))}{\mathrm{sn}_k(r(q))}
> $$
> 
> as $\varepsilon \to 0$ since $\mathrm{sn}'_k(r)/\mathrm{sn}_k(r)$ is decreasing.
> 
> Now for the smoothness. Fix $\varepsilon > 0$ and suppose $r_\varepsilon$ is not smooth at $q$. Then we know from lemma 5.7.9 that either
> 
> (1) there are two segments from $\sigma(\varepsilon)$ to $q$,
> 
> (2) $q$ is a critical value for $\exp_{\sigma(\varepsilon)} : \mathrm{seg}(\sigma(\varepsilon)) \to M$.
> 
> Case (1) would give us a nonsmooth curve of length $L$ from $p$ to $q$, which we know is impossible. Thus, case (2) must hold. To get a contradiction out of this, we show that this implies that $\exp_q$ has $\sigma(\varepsilon)$ as a critical value.
> 
> Using that $q$ is critical for $\exp_{\sigma(\varepsilon)}$, we find a Jacobi field $J(t): [\varepsilon, L] \to TM$ along $\sigma|_{[\varepsilon,L]}$ such that $J(\varepsilon) = 0$, $\dot{J}(\varepsilon) \neq 0$ and $J(L) = 0$ (see section 5.7.3). Then also $\dot{J}(L) \neq 0$ as it solves a linear second-order equation. Running backwards from $q$ to $\sigma(\varepsilon)$ then shows that $\exp_q$ is critical at $\sigma(\varepsilon)$. This however contradicts that $\sigma : [0, L] \to M$ is a segment.


---

### 7.1.5 The Segment, Poincaré, and Sobolev Inequalities

We shall use the results obtained in section 7.1.2 to prove a some important analytic inequalities that will be used in chapter 9.

> [!theorem] Theorem 7.1.10 (The Segment Inequality, Cheeger and Colding, 1996)
> Assume that $(M, g)$ has $\text{Ric} \geq (n - 1)k$, $k \leq 0$. Let $f : M \to [0, \infty)$ and $A, B \subset W \subset M$. Further select segments $c_{x,y}: [0, 1] \to M$ between points $x, y \in M$.
> 
> If $c_{x,y}(t) \in W$ for all $x \in A$, $y \in B$, $t \in [0, 1]$, and $\text{diam}\, W \leq D$, then
> $$
> \int_{A \times B} \int_0^1 f \circ c_{x,y}(t)\, dt\, \text{vol}_x \wedge \text{vol}_y \leq C (\text{vol}\, A + \text{vol}\, B) \int_W f\, \text{vol},
> $$
> where $C = C(n, kD^2)$.

> [!proof]- Proof
> Define
> $$
> C = \max_{R \leq D} \frac{\text{sn}_k^{n-1}(R)}{\text{sn}_k^{n-1}(R/2)}.
> $$
> 
> Note that when $k = 0$ we have $C = 2^{n-1}$ and otherwise one can show that
> $$
> C = \frac{\sinh^{n-1}(\sqrt{-k}\, D)}{\sinh^{n-1}(\sqrt{-k}\, D/2)}.
> $$
> 
> Fix $x \in A$, $t \geq 1/2$, and use polar coordinates with center $x$. The map $y \mapsto c_{x,y}(t)$ is a well-defined "scaling" by $t$ inside the segment domain. With that in mind we have:
> $$
> \begin{aligned}
> \int_B f \circ c_{x,y}(t)\, \text{vol}_y &= \int_B f \circ c_{x,y}(t)\, \lambda(y)\, dr \wedge \text{vol}_{n-1} \\
> &= \int_B f \circ c_{x,y}(t)\, \lambda(c_{x,y}(t)) \frac{\lambda(y)}{\lambda(c_{x,y}(t))}\, dr \wedge \text{vol}_{n-1} \\
> &\leq C \int_B f \circ c_{x,y}(t)\, \lambda(c_{x,y}(t))\, dr \wedge \text{vol}_{n-1} \\
> &\leq C \int_W f\, \text{vol}.
> \end{aligned}
> $$
> 
> This gives us
> $$
> \int_A \int_B \int_{1/2}^1 f \circ c_{x,y}(t)\, dt\, \text{vol}_y\, \text{vol}_x \leq \frac{1}{2} C\, \text{vol}\, A \int_W f\, \text{vol}.
> $$
> 
> Similarly
> $$
> \int_B \int_A \int_0^{1/2} f \circ c_{x,y}(t)\, dt\, \text{vol}_x\, \text{vol}_y \leq \frac{1}{2} C\, \text{vol}\, B \int_W f\, \text{vol}.
> $$
> 
> Adding these gives the desired result.

This estimate allows us to establish a weak Poincaré inequality. To formulate the result it'll be convenient to define the $L^p$ norm on a domain $B$ by also averaging the integral:

$$
\|u\|_{p,B} = \left(\frac{1}{\text{vol}\, B} \int_B |u|^p\, \text{vol}\right)^{1/p}
$$

and using the notation $u_B = \frac{1}{\text{vol}\, B} \int_B u\, \text{vol}$ for the average value of a function on a bounded domain.

> [!corollary] Corollary 7.1.11
> Assume that $(M, g)$ has $\text{Ric} \geq (n - 1)k$, $k \leq 0$. Any smooth $u : M \to [0, \infty)$ satisfies
> $$
> \|u - u_{B(p,R)}\|_{1,B(p,R)} \leq 4C^2 R\, \| |du| \|_{1,B(p,2R)},
> $$
> where $R \leq D$.

> [!proof]- Proof
> This proof is due to Cheeger and Colding. We use the segment inequality with $A = B = B(p, R)$, $W = B(p, 2R)$, and $f = |du|$ as well as the observation
> $$
> \begin{aligned}
> \int_B |u - u_B|\, \text{vol}_x &= \int_B \left|u(x) - \frac{1}{\text{vol}\, B} \int_B u(y)\, \text{vol}_y\right| \text{vol}_x \\
> &= \int_B \left|\frac{1}{\text{vol}\, B} \int_B (u(x) - u(y))\, \text{vol}_y\right| \text{vol}_x \\
> &\leq \frac{1}{\text{vol}\, B} \int_B \int_B |u(x) - u(y)|\, \text{vol}_y\, \text{vol}_x \\
> &\leq \frac{1}{\text{vol}\, B} \int_B \int_B \int_0^1 |xy|\, |du|(c_{x,y}(t))\, dt\, \text{vol}_y\, \text{vol}_x \\
> &\leq \frac{2R}{\text{vol}\, B} \int_B \int_B \int_0^1 \|du\|(c_{x,y}(t))\, dt\, \text{vol}_y\, \text{vol}_x.
> \end{aligned}
> $$
> 
> This shows that
> $$
> \|u - u_{B(p,R)}\|_{1,B(p,R)} \leq \frac{4CR\, \text{vol}\, B(p,2R)}{\text{vol}\, B(p,R)} \cdot \| |du| \|_{1,B(p,2R)}.
> $$
> 
> The result follows by using that the volume ratio is bounded explicitly by the ratio
> $$
> \frac{v(n, k, 2R)}{v(n, k, R)} \leq \frac{v(n, k, 2D)}{v(n, k, D)}.
> $$

> [!remark] Remark 7.1.12
> Note that the corollary holds for any measurable $u$ with a function $G$ in place of $|du|$ provided
> $$
> |u(x) - u(y)| \leq \int_0^1 G(c(t)) |\dot{c}|\, dt
> $$
> for all $c \in \Omega_{x,y}$. Such a $G$ is also called an **upper gradient**.

This leads us, surprisingly, to the much stronger Poincaré-Sobolev inequality where the domain is the same on both sides and a stronger norm is used on the left-hand side.

> [!theorem] Theorem 7.1.13
> Assume that $(M, g)$ has $\text{Ric} \geq (n - 1)k$, $k \leq 0$. For all smooth $u : M \to [0, \infty)$ and $\nu \in [1, n/(n-1)]$
> $$
> \|u - u_{B(x,R)}\|_{\nu,B(x,R)} \leq C(n, kD^2) R\, \| |du| \|_{1,B(x,R)},
> $$
> where $R \leq D$.

We offer a proof by Hajłasz and Koskela that can be found in [60]. An even shorter proof is possible when $\nu < n/(n-1)$. Traditionally, proofs of this theorem required a very deep and difficult theorem from geometric measure theory. Here we only need a few basic concepts from analysis together with the weak Poincaré inequality and relative volume comparison. This proof has the added benefit of easily allowing generalizations to suitable metric spaces. We will for simplicity prove it in case $B(x, R) = M$ and $D$ is an upper bound for the diameter of $M$. To keep constants at bay we shall also keep writing them as $C$ with the understanding that $C = C(n, kD^2)$ depends on $n$ and possibly also $kD^2$. However, the constants might change from line to line in a proof.

The maximal function of a function $u$ is defined as

$$
M(u)(x) = \sup_{R \in (0,D]} \frac{1}{\text{vol}\, B(x,R)} \int_{B(x,R)} |u|\, \text{vol}.
$$

We only need the weak version of the maximal function estimate. Note that this estimate does not bound $\|M(u)\|_1$ in terms of $\|u\|_1$, which is in fact impossible, but it can be used to prove the standard bounds $\|M(u)\|_p \leq C \|u\|_p$ for all $p > 1$.

> [!theorem] Theorem 7.1.14 (Maximal Function Theorem)
> There exists a constant $C = C(n, kD^2)$ such that
> $$
> t\, \text{vol}\,\{M(u) > t\} \leq C \int |u|\, \text{vol}.
> $$

> [!proof]- Proof
> Note that for each $x \in \{M(u) > t\}$ there is $R_x \leq D$ such that
> $$
> t\, \text{vol}\, B(x, R_x) < \int_{B(x,R_x)} |u|\, \text{vol}.
> $$
> 
> Now use the basic covering property (see exercise 7.5.5) to cover $\{M(u) > t\}$ by balls $B(x_i, 5R_{x_i})$ with the property that $B(x_i, R_{x_i})$ are pairwise disjoint. Relative volume comparison gives us
> $$
> \frac{\text{vol}\, B(x, 5R)}{\text{vol}\, B(x, R)} \leq \frac{v(n, k, 5D)}{v(n, k, D)} = C = C(n, kD^2).
> $$
> 
> We can then estimate
> $$
> \begin{aligned}
> t\, \text{vol}\,\{M(u) > t\} &\leq \sum t\, \text{vol}\, B(x_i, 5R_{x_i}) \\
> &\leq C \sum t\, \text{vol}\, B(x_i, R_{x_i}) \\
> &< C \sum \int_{B(x_i,R_{x_i})} |u|\, \text{vol} \\
> &\leq C \int |u|\, \text{vol}.
> \end{aligned}
> $$

> [!theorem] Theorem 7.1.15
> Assume that $(M, g)$ has $\text{Ric} \geq (n - 1)k$, $k \leq 0$, and $\text{diam}\, M \leq D$. Let $u : M \to [0, \infty)$ be smooth. There is a weak Poincaré-Sobolev inequality
> $$
> t^{n/(n-1)}\, \text{vol}\,\{ |u - u_{B(x,R)}| > t \} \leq C R^{n/(n-1)}\, \text{vol}\, M\, \| |du| \|_1^{n/(n-1)},
> $$
> where $C = C(n, kD^2)$.

> [!proof]- Proof
> For simplicity we prove this when $R = D$. Fix $x \in M$ and define $R_i = 2^{-i}D$. If $B_i = B(x, R_i)$, then $M = B_0$. By continuity of $u$ we have $u(x) = \lim u_{B_i}$. This tells us that
> $$
> \begin{aligned}
> |u(x) - u_{B_0}| &\leq \sum_{i=0}^{\infty} |u_{B_i} - u_{B_{i+1}}| \\
> &\leq \sum_{i=0}^{\infty} \|u - u_{B_i}\|_{1,B_{i+1}} \\
> &\leq \sum_{i=0}^{\infty} \frac{\text{vol}\, B_i}{\text{vol}\, B_{i+1}} \|u - u_{B_i}\|_{1,B_i} \\
> &\leq C \sum_{i=0}^{\infty} \|u - u_{B_i}\|_{1,B_i} \\
> &\leq 2C^3 \sum_{i=0}^{\infty} R_i\, \| |du| \|_{1,B_{i-1}}.
> \end{aligned}
> $$
> 
> Therefore, it suffices to prove an estimate of the form:
> $$
> t^{n/(n-1)}\, \text{vol}\left\{\sum_{i=0}^{\infty} R_i\, \| |du| \|_{1,B_{i-1}} > t\right\} \leq C D^{n/(n-1)}\, \text{vol}\, M\, \| |du| \|_1^{n/(n-1)}.
> $$
> 
> For any $x \in M$ and $r > 0$ split up the sum
> $$
> \sum_{R_i \leq r} R_i\, \| |du| \|_{1,B_{i-1}} + \sum_{R_i > r} R_i\, \| |du| \|_{1,B_{i-1}}.
> $$
> 
> The first term is controlled by the maximal function
> $$
> \sum_{R_i \leq r} R_i\, \| |du| \|_{1,B_{i-1}} \leq \left(\sum_{R_i \leq r} R_i\right) M(|du|)(x) \leq 2r\, M(|du|)(x).
> $$
> 
> The second term is bounded by $\| |du| \|_1$ as follows:
> $$
> \begin{aligned}
> \sum_{R_i > r} R_i\, \| |du| \|_{1,B_{i-1}} &\leq \left(\sum_{R_i > r} R_i \frac{\text{vol}\, M}{\text{vol}\, B_{i-1}}\right) \| |du| \|_1 \\
> &\leq C \sum_{R_i > r} R_i \left(\frac{D}{R_{i-1}}\right)^n \| |du| \|_1 \\
> &\leq C \sum_{R_i > r} \frac{2^{-i}}{2^{-n(i-1)}} D\, \| |du| \|_1 \\
> &= C \cdot 2^{-n} \sum_{R_i > r} 2^{(n-1)i}\, D\, \| |du| \|_1 \\
> &\leq 2^{1-n} C\, 2^{(n-1)i_0}\, D\, \| |du| \|_1 \\
> &= 2^{1-n} C \left(\frac{2^{i_0}}{D^{-1}}\right)^{n-1} D^n\, \| |du| \|_1 \\
> &= 2^{1-n} C\, r^{1-n}\, D^n\, \| |du| \|_1 \\
> &\leq 2^{1-n} C\, r^{1-n}\, D^n\, \| |du| \|_1.
> \end{aligned}
> $$
> 
> Thus
> $$
> \sum_{i=0}^{\infty} R_i \|du\|_{1,B_{i-1}} \leq C\left(r M(|du|)(x) + r^{1-n} D^n \|du\|_1\right)
> $$
> 
> and for $r = D\left(\frac{\|du\|_1}{M(|du|)(x)}\right)^{1/n}$ yields the estimate:
> $$
> \sum_{i=0}^{\infty} R_i \|du\|_{1,B_{i-1}} \leq CD\left(M(|du|)(x)\right)^{\frac{n-1}{n}}\|du\|_1^{\frac{1}{n}}.
> $$
> 
> Note that while it is natural to assume $r \leq D$ this estimate is still valid when $r > D$. The maximal function theorem can now be used to obtain the inequality
> $$
> \begin{aligned}
> &\text{vol}\left\{\sum_{i=0}^{\infty} R_i \|du\|_{1,B_{i-1}} > t\right\} \\
> &= \text{vol}\left\{\left(\sum_{i=0}^{\infty} R_i \|du\|_{1,B_{i-1}}\right)^{\frac{n}{n-1}} > t^{\frac{n}{n-1}}\right\} \\
> &\leq \text{vol}\left\{CD^{\frac{n}{n-1}}\|du\|_1^{\frac{1}{n-1}}M(|du|)(x) > t^{\frac{n}{n-1}}\right\} \\
> &\leq t^{-\frac{n}{n-1}}CD^{\frac{n}{n-1}}\|du\|_1^{\frac{1}{n-1}}\int_M |du|\, \text{vol} \\
> &\leq t^{-\frac{n}{n-1}}CD^{\frac{n}{n-1}}\text{vol}\, M\,\|du\|_1^{\frac{n}{n-1}}.
> \end{aligned}
> $$

The proof of the Poincaré-Sobolev inequality can now be completed as follows.

> [!proof]- Proof of Theorem 7.1.13
> We use the estimate from theorem 7.1.15 to prove the result. First we need two more elementary facts. Note that for any $c \in \mathbb{R}$:
> $$
> \|u - u_M\|_p \leq \|c - u_M\|_p + \|u - c\|_p = |u_M - c| + \|u - c\|_p \leq 2\|u - c\|_p
> $$
> and
> $$
> \inf_c \|u - c\|_p \leq \|u - u_M\|_p.
> $$
> 
> So it suffices to estimate $\|u - c\|_p$ for a suitable $c$.
> 
> For a general $u : M \to \mathbb{R}$ find $m$ such that $\text{vol}\{u \geq m\} \geq \text{vol}\, M/2$ and $\text{vol}\{u \leq m\} \geq \text{vol}\, M/2$. Then split $u$ into the two functions $v^+ = \max\{u - m, 0\}$ and $v^- = \max\{m - u, 0\}$. Note that they both satisfy $\text{vol}\{v^\pm = 0\} \geq \text{vol}\, M/2$.
> 
> While $v^\pm$ is not smooth we can set $|dv^\pm| = 0$ at all points where $v^\pm$ vanishes. Thus it suffices to show that
> $$
> \|v^\pm\|_{\frac{n}{n-1}} \leq C(n, kD^2) D \|dv^\pm\|_1
> $$
> as
> $$
> \|u\|_{\frac{n}{n-1}} = \|v^+\|_{\frac{n}{n-1}} + \|v^-\|_{\frac{n}{n-1}} \quad \text{and} \quad |dv^+| + |dv^-| \leq |du|.
> $$
> 
> We first claim that $v = v^\pm$ satisfies
> $$
> \text{vol}\{v > t\} \leq 2\, \text{vol}\{|v - c| > t/2\}.
> $$
> 
> To see this note that when $t/2 \leq c$ we have $\{c - v > t/2\} \subset \{v = 0\}$, while when $t/2 \geq c$ we have $\{v > c + t/2\} \subset \{v > t\}$.
> 
> For $0 < a < b$ consider the truncated function
> $$
> v_a^b(x) = \begin{cases}
> b - a & \text{if } v(x) \geq b, \\
> v(x) - a & \text{if } a < v(x) \leq b, \\
> 0 & \text{if } v(x) \leq a,
> \end{cases}
> $$
> 
> and note that the weak Poincaré inequality holds for $v_a^b$ if we use $|dv| \cdot \chi_{\{a < v \leq b\}}$ as an upper gradient. Theorem 7.1.15 can now be used:
> $$
> \begin{aligned}
> t^{\frac{n}{n-1}} \text{vol}\{v_a^b > t\} &\leq 2t^{\frac{n}{n-1}} \inf_c \text{vol}\{|v_a^b - c| > t/2\} \\
> &= 2^{\frac{n}{n-1}+1}\left(\frac{t}{2}\right)^{\frac{n}{n-1}} \inf_c \text{vol}\{|v_a^b - c| > t/2\} \\
> &\leq 2^{\frac{n}{n-1}+1}\left(\frac{t}{2}\right)^{\frac{n}{n-1}} \text{vol}\{|v_a^b - (v_a^b)_M| > t/2\} \\
> &\leq CD^{\frac{n}{n-1}} 2^{\frac{n}{n-1}+1} \text{vol}\, M \left\||dv| \cdot \chi_{\{a < v \leq b\}}\right\|_1^{\frac{n}{n-1}}.
> \end{aligned}
> $$
> 
> We then get the desired estimate as follows:
> $$
> \begin{aligned}
> \int v^{\frac{n}{n-1}}\, \text{vol} &\leq \sum_{k=-\infty}^{\infty} 2^{k\frac{n}{n-1}}\, \text{vol}\{2^{k-1} \leq v \leq 2^k\} \\
> &\leq \sum_k 2^{k\frac{n}{n-1}}\, \text{vol}\{v > 2^{k-1}\} \\
> &\leq \sum_k 2^{k\frac{n}{n-1}}\, \text{vol}\{v_{2^{k-2}}^{2^{k-1}} > 2^{k-1} - 2^{k-2}\} \\
> &= \sum_k 2^{k\frac{n}{n-1}}\, \text{vol}\{v_{2^{k-2}}^{2^{k-1}} > 2^{k-2}\} \\
> &\leq 2^{3\frac{n}{n-1}+1} CD^{\frac{n}{n-1}}\, \text{vol}\, M \sum_k \left\||dv| \cdot \chi_{\{2^{k-2} < v \leq 2^{k-1}\}}\right\|_1^{\frac{n}{n-1}} \\
> &\leq 2^{3\frac{n}{n-1}+1} CD^{\frac{n}{n-1}}\, \text{vol}\, M \left\|\sum_k |dv| \cdot \chi_{\{2^{k-2} < v \leq 2^{k-1}\}}\right\|_1^{\frac{n}{n-1}} \\
> &= 2^{3\frac{n}{n-1}+1} CD^{\frac{n}{n-1}}\, \text{vol}\, M \|dv\|_1^{\frac{n}{n-1}}.
> \end{aligned}
> $$

> [!remark] Remark 7.1.16
> See exercise 7.5.17 for the Poincaré inequality for functions with Dirichlet boundary conditions.

Finally we also obtain an entire hierarchy of such inequalities.

> [!proposition] Proposition 7.1.17
> Assume that all smooth functions on $(M,g)$ satisfy the inequality
> $$
> \|u - u_M\|_{\frac{s}{s-1}} \leq S\|du\|_1,
> $$
> with $s > 1$, then for $1 \leq p < s$
> $$
> \|u\|_{\frac{sp}{s-p}} \leq \frac{p(s-1)}{s-p} S\|du\|_p + \|u\|_p.
> $$

> [!proof]- Proof
> When $p = 1$, this follows from
> $$
> \begin{aligned}
> \|u - u_M\|_{\frac{s}{s-1}} &\geq \|u\|_{\frac{s}{s-1}} - \|u_M\|_{\frac{s}{s-1}} \\
> &= \|u\|_{\frac{s}{s-1}} - |u_M| \\
> &\geq \|u\|_{\frac{s}{s-1}} - \|u\|_1.
> \end{aligned}
> $$
> 
> For $p > 1$ first note that
> $$
> \begin{aligned}
> \|u\|_{\frac{qs}{s-1}}^q &= \|u^q\|_{\frac{s}{s-1}} \\
> &\leq S\|du^q\|_1 + \|u^q\|_1 \\
> &= Sq\|u^{q-1}du\|_1 + \|u^{q-1}u\|_1 \\
> &\leq \|u\|_{\frac{p(q-1)}{p-1}}^{q-1}\left(Sq\|du\|_p + \|u\|_p\right).
> \end{aligned}
> $$
> 
> Then choose $q = \frac{p(s-1)}{s-p}$ so that $\frac{qs}{s-1} = \frac{p(q-1)}{p-1} = \frac{sp}{s-p}$ to obtain the desired inequality.

Finally we establish the Rellich compactness theorem. The same strategy can also be used to prove the more general Kondrachov compactness theorem for $L^p(M)$. Define $W^{1,2}(M)$ as the Hilbert space closure of $C^\infty(M)$ with the square norm $\|u\|_2^2 + \|du\|_2^2$. Recall that a sequence $v_i \in (H, (\cdot, \cdot))$ in a Hilbert space is weakly convergent, $v_i \to v$ if $(v_i, w) \to (v, w)$ for all $w \in H$. Moreover, any bounded sequence has a weakly convergent subsequence.

> [!theorem] Theorem 7.1.18 (Rellich Compactness)
> Assume $(M^n, g)$ is a compact Riemannian $n$-manifold. The inclusion $W^{1,2}(M) \subset L^2(M)$ is compact.

> [!proof]- Outline of Proof
> Consider a sequence $u_i$ of smooth functions where $\|u_i\|_2^2 + \|du_i\|_2^2$ is bounded. Then there will be a weakly convergent subsequence $u_i \to u$. In particular, $u_{i,B(x,R)} \to u_{B(x,R)}$ for fixed $x \in M$ and $R > 0$.
> 
> By the Lebesgue differentiation theorem we also have that $u_{B(x,R)} \to u(x)$ as $R \to 0$ for almost all $x \in M$. Next note that by theorem 7.1.15
> $$
> \text{vol}\{|u_i - u_{i,B(x,R)}| > \epsilon\} \leq C\left(\frac{R}{\epsilon}\right)^{\frac{n}{n-1}} \text{vol}\, M\, \|du_i\|_1^{\frac{n}{n-1}} \leq C'\left(\frac{R}{\epsilon}\right)^{\frac{n}{n-1}},
> $$
> where $C'$ is independent of $i$.
> 
> This implies that $\text{vol}\{|u_i(x) - u(x)| > \epsilon\} \to 0$ as $i \to \infty$. We can then extract another subsequence of $u_i$ that converges pointwise to $u$ almost everywhere on $M$. Since $\|u_i\|_{\frac{2n}{n-2}}$ is bounded, Egorov's theorem implies that $u_i \to u$ in $L^2$.

---

## 7.2 Applications of Ricci Curvature Comparison

### 7.2.1 Finiteness of Fundamental Groups

Our first application of volume comparison shows how one can control the fundamental group. We start with a result that addresses how fundamental groups can be represented.

> [!lemma] Lemma 7.2.1 (Gromov, 1980)
> A compact Riemannian manifold $M$ admits generators $\{c_1, \ldots, c_m\}$ for the fundamental group $\Gamma = \pi_1(M)$ such that all relations for $\Gamma$ are of the form $c_i \cdot c_j \cdot c_k^{-1} = 1$ for suitable $i, j, k$. Moreover, the generators $c_i$ can be represented by loops of length $\leq 3\, \text{diam}(M)$.

> [!proof]- Proof
> For any $\epsilon \in (0, \text{inj}(M))$ choose a triangulation of $M$ such that adjacent vertices in this triangulation are joined by a curve of length less that $\epsilon$. Let $\{x_1, \ldots, x_k\}$ denote the set of vertices and $\{e_{ij}\}$ the edges joining adjacent vertices (thus, $e_{ij}$ is not necessarily defined for all $i, j$). If $x$ is the projection of $\tilde{x} \in \tilde{M}$, then join $x$ and $x_i$ by a segment $\sigma_i$ for all $i = 1, \ldots, k$ and construct the loops $\sigma_{ij} = \sigma_i e_{ij}\sigma_j^{-1}$ for adjacent vertices.
>
> Any loop in $M$ based at $x$ is homotopic to a loop in the 1-skeleton of the triangulation, i.e., a loop that is constructed out of juxtaposing edges $e_{ij}$. Since $e_{ij}e_{jk} = e_{ij}\sigma_j^{-1}\sigma_j e_{jk}$ such loops are the product of loops of the form $\sigma_{ij}$. Therefore, $\Gamma$ is generated by $\sigma_{ij}$.
>
> Next observe that if three vertices $x_i, x_j, x_k$ are adjacent to each other, then they span a 2-simplex $\Delta_{ijk}$. Consequently the loop $\sigma_{ij}\sigma_{jk}\sigma_{ki} = \sigma_{ij}\sigma_{jk}\sigma_{ik}^{-1}$ is homotopically trivial. We claim that these are the only relations needed to describe $\Gamma$. To see this, let $\sigma$ be any loop in the 1-skeleton that is homotopically trivial in $M$. Then $\sigma$ also contracts in the 2-skeleton. Thus, a homotopy corresponds to a collection of 2-simplices $\Delta_{ijk}$. In this way we can represent the relation $\sigma = 1$ as a product of elementary relations of the form $\sigma_{ij}\sigma_{jk}\sigma_{ik}^{-1} = 1$.
>
> The generators correspond to loops of length $\leq 2\, \text{diam}(M) + \epsilon$ so the result is proven.

A simple example might be instructive here.

> [!example] Example 7.2.2
> Consider $M_k = S^3/\mathbb{Z}_k$; the constant curvature 3-sphere divided out by the cyclic group of order $k$. As $k \to \infty$ the volume of these manifolds goes to zero, while the curvature is $1$ and the diameter $\pi/2$. Thus, the fundamental groups can only get bigger at the expense of having small volume. If we insist on writing the cyclic group $\mathbb{Z}_k$ in the above manner, then the number of generators needed goes to infinity as $k \to \infty$. This is also justified by the next theorem.

For numbers $n \in \mathbb{N}$, $k \in \mathbb{R}$, and $v, D \in (0, \infty)$, let $\mathfrak{M}(n, k, v, D)$ denote the class of compact Riemannian $n$-manifolds with

$$
\text{Ric} \geq (n-1)k,
$$

$$
\text{vol} \geq v,
$$

$$
\text{diam} \leq D.
$$

We can now prove:

> [!theorem] Theorem 7.2.3 (Anderson, 1990)
> There are only finitely many fundamental groups among the manifolds in $\mathfrak{M}(n, k, v, D)$ for fixed $n, k, v, D$.

> [!proof]- Proof
> Choose generators $\{c_1, \ldots, c_m\}$ as in the lemma. Since the number of possible relations is bounded by $2^{m^3}$, we have reduced the problem to showing that $m$ is bounded. Fix $x \in \tilde{M}$ and consider $c_i$ as deck transformations. The lemma also guarantees that $|xc_i(x)| \leq 3D$. Fix a fundamental domain $F \subset \tilde{M}$ that contains $x$, i.e., a closed set such that $\pi : F \to M$ is onto and $\text{vol}\, F = \text{vol}\, M$. One could, for example, choose the Dirichlet domain
>
> $$
> F = \{z \in \tilde{M} \mid |xz| \leq |c(x)z| \text{ for all } c \in \pi_1(M)\}.
> $$
>
> Then the sets $c_i(F)$ are disjoint up to sets of measure $0$; all have the same volume; and all lie in the ball $B(x, 6D)$. Thus,
>
> $$
> m \leq \frac{\text{vol}\, B(x, 6D)}{\text{vol}\, F} \leq \frac{v(n, k, 6D)}{v}.
> $$
>
> In other words, we have bounded the number of generators in terms of $n, D, v, k$ alone.

A related result shows that groups generated by short loops must in fact be finite.

> [!lemma] Lemma 7.2.4 (Anderson, 1990)
> For fixed numbers $n \in \mathbb{N}$, $k \in \mathbb{R}$, and $v, D \in (0, \infty)$ there exist $L = L(n, k, v, D)$ and $N = N(n, k, v, D)$ such that if $M \in \mathfrak{M}(n, k, v, D)$, then any subgroup of $\pi_1(M)$ that is generated by loops of length $\leq L$ must have order $\leq N$.

> [!proof]- Proof
> Let $\Gamma \subset \pi_1(M)$ be a subgroup generated by loops $\{c_1, \ldots, c_k\}$ of length $\leq L$. Consider the universal covering $\pi : \tilde{M} \to M$ and let $x \in \tilde{M}$ be chosen such that the loops are based at $\pi(x)$. Then select a fundamental domain $F \subset \tilde{M}$ as above with $x \in F$. Thus, for any $c_1, c_2 \in \pi_1(M)$, either $c_1 = c_2$ or $c_1(F) \cap c_2(F)$ has measure $0$.
>
> Now define $U(r)$ as the set of $c \in \Gamma$ such that $c$ can be written as a product of at most $r$ elements from $\{c_1, \ldots, c_k\}$. Since $|xc_i(x)| \leq L$ for all $i$ it follows that $|xc(x)| \leq r \cdot L$ for all $c \in U(r)$. This means that $c(F) \subset B(x, r \cdot L + D)$. As the sets $c(F)$ are disjoint up to sets of measure zero, we obtain
>
> $$
> |U(r)| \leq \frac{\text{vol}\, B(x, r \cdot L + D)}{\text{vol}\, F} \leq \frac{v(n, k, r \cdot L + D)}{v}.
> $$
>
> Now define
>
> $$
> N = \frac{v(n, k, 2D)}{v} + 1,
> $$
>
> $$
> L = \frac{D}{N}.
> $$
>
> If $\Gamma$ has more than $N$ elements we get a contradiction by using $r = N$ as we would have
>
> $$
> \frac{v(n, k, 2D)}{v} + 1 = N \leq |U(N)| \leq \frac{v(n, k, 2D)}{v}.
> $$


---

### 7.2.2 Maximal Diameter Rigidity

Next we show how Laplacian comparison can be used. Given Myers' diameter estimate, it is natural to ask what happens when the diameter attains it maximal value. The next result shows that only the sphere has this property.

> [!theorem] Theorem 7.2.5 (S. Y. Cheng, 1975)
> If $(M, g)$ is a complete Riemannian manifold with $\text{Ric} \geq (n-1)k > 0$ and $\text{diam} = \pi/\sqrt{k}$, then $(M, g)$ is isometric to $S_k^n$.

> [!proof] Proof
> Fix $p, q \in M$ such that $|pq| = \pi/\sqrt{k}$. Define $r(x) = |xp|$, $\tilde{r}(x) = |xq|$. We will show that
> 
> 1. $r + \tilde{r} = \pi/\sqrt{k}$, $x \in M$.
> 2. $r, \tilde{r}$ are smooth on $M - \{p, q\}$.
> 3. $\text{Hess} \, r = \frac{sn'_k}{sn_k} ds^2_{n-1}$ on $M - \{p, q\}$.
> 4. $g = dr^2 + sn^2_k \, ds^2_{n-1}$.
> 
> We already know that (3) implies (4) and that (4) implies $M$ must be $S_k^n$.
> 
> **Proof of (1):** Consider $\tilde{r}(x) = |xq|$ and $r(x) = |xp|$, where $|pq| = \pi/\sqrt{k}$. Then $r + \tilde{r} \geq \pi/\sqrt{k}$, and equality will hold for any $x \in M - \{p, q\}$ that lies on a segment joining $p$ and $q$. On the other hand lemma 7.1.9 implies
> 
> $$
> \Delta(r + \tilde{r}) \leq \Delta r + \Delta \tilde{r}
> $$
> 
> $$
> \leq (n-1)\sqrt{k} \cot(\sqrt{k} \, r(x)) + (n-1)\sqrt{k} \cot(\sqrt{k} \, \tilde{r}(x))
> $$
> 
> $$
> \leq (n-1)\sqrt{k} \cot(\sqrt{k} \, r(x)) + (n-1)\sqrt{k} \cot(\sqrt{k}(\pi/\sqrt{k} - r(x)))
> $$
> 
> $$
> = (n-1)\sqrt{k}(\cot(\sqrt{k} \, r(x)) + \cot(\pi - \sqrt{k} \, r(x))) = 0.
> $$
> 
> Thus $r + \tilde{r}$ is superharmonic on $M - \{p, q\}$ and has a global minimum. Consequently, the minimum principle implies that $r + \tilde{r} = \pi/\sqrt{k}$ on $M$.
> 
> **Proof of (2):** If $x \in M - \{q, p\}$, then $x$ can be joined to both $p$ and $q$ by segments $c_1, c_2$. The previous statement says that if we put these two segments together, then we get a segment from $p$ to $q$ through $x$. Such a segment must be smooth (see proposition 5.4.4). Thus $c_1$ and $c_2$ are both subsegments of a larger segment. This implies from our characterization of when distance functions are smooth that both $r$ and $\tilde{r}$ are smooth at $x \in M - \{p, q\}$ (see corollary 5.7.11).
> 
> **Proof of (3):** Since $r(x) + \tilde{r}(x) = \pi/\sqrt{k}$, we have $\Delta r = -\Delta \tilde{r}$. On the other hand,
> 
> $$
> (n-1) \frac{sn'_k(r(x))}{sn_k(r(x))} \geq \Delta r(x)
> $$
> 
> $$
> = -\Delta \tilde{r}(x)
> $$
> 
> $$
> \geq -(n-1) \frac{sn'_k(\tilde{r}(x))}{sn_k(\tilde{r}(x))}
> $$
> 
> $$
> = -(n-1) \frac{sn'_k(\pi/\sqrt{k} - r(x))}{sn_k(\pi/\sqrt{k} - r(x))}
> $$
> 
> $$
> = (n-1) \frac{sn'_k(r(x))}{sn_k(r(x))}.
> $$
> 
> This implies,
> 
> $$
> \Delta r = (n-1) \frac{sn'_k}{sn_k}
> $$
> 
> and
> 
> $$
> -(n-1)k = \partial_r(\Delta r) + \frac{(\Delta r)^2}{n-1}
> $$
> 
> $$
> \leq \partial_r(\Delta r) + |\text{Hess} \, r|^2
> $$
> 
> $$
> \leq -\text{Ric}(\partial_r, \partial_r)
> $$
> 
> $$
> \leq -(n-1)k.
> $$
> 
> Hence, all inequalities are equalities, and in particular
> 
> $$
> (\Delta r)^2 = (n-1)|\text{Hess} \, r|^2.
> $$
> 
> Recall from the proof of $tr^2$ from proposition 7.1.1 that this gives us equality in the Cauchy-Schwarz inequality $k|A|^2 \geq (tr \, A)^2$. Thus $A = \frac{tr \, A}{k} I_k$. In our case we have restricted $\text{Hess} \, r$ to the $(n-1)$ dimensional space orthogonal to $\partial_r$ so on this space we obtain:
> 
> $$
> \text{Hess} \, r = \frac{\Delta r}{n-1} g_r = \frac{sn'_k}{sn_k} g_r.
> $$

We now know that a complete manifold with $\text{Ric} \geq (n-1) \cdot k > 0$ has diameter $\leq \pi/\sqrt{k}$, and equality holds only when the space is $S_k^n$. Therefore, a natural perturbation question is: Do manifolds with $\text{Ric} \geq (n-1) \cdot k > 0$ and $\text{diam} \approx \pi/\sqrt{k}$, have to be homeomorphic or diffeomorphic to a sphere?

For $n = 2, 3$ this is true. When $n \geq 4$, however, there are counterexamples. The case $n = 2$ will be settled later and $n = 3$ was proven in [95] (but sadly never published). The examples for $n \geq 4$ are divided into two cases: $n = 4$ and $n \geq 5$.

> [!example] Example 7.2.6 (Anderson, 1990)
> For $n = 4$ consider metrics on $I \times S^3$ of the form
> 
> $$
> dr^2 + \rho^2\sigma_1^2 + \phi^2(\sigma_2^2 + \sigma_3^2).
> $$
> 
> If we define
> 
> $$
> \rho(r) = \begin{cases} \sin(ar)/a, & r \leq r_0 \\ c_1 \sin(r + \delta), & r \geq r_0 \end{cases}
> $$
> 
> $$
> \phi(r) = \begin{cases} br^2 + c, & r \leq r_0 \\ c_2 \sin(r + \delta), & r \geq r_0 \end{cases}
> $$
> 
> and then reflect these functions in $r = \pi/2 - \delta$, we get a metric on $\mathbb{C}P^2 \# \overline{\mathbb{C}P}^2$. For any small $r_0 > 0$ we can adjust the parameters so that $\rho$ and $\phi$ become $C^1$ and generate a metric with $\text{Ric} \geq 3$. For smaller and smaller choices of $r_0$ we see that $\delta \to 0$, so the interval $I \to [0, \pi]$ as $r_0 \to 0$. This means that the diameters converge to $\pi$.

> [!example] Example 7.2.7 (Otsu, 1991)
> For $n \geq 5$ we consider standard doubly warped products:
> 
> $$
> dr^2 + \rho^2 \cdot ds_2^2 + \phi^2 ds^2_{n-3}
> $$
> 
> on $I \times S^2 \times S^{n-3}$. Similar choices for $\rho$ and $\phi$ will yield metrics on $S^2 \times S^{n-2}$ with $\text{Ric} \geq n-1$ and diameter $\to \pi$.

In both of the above examples we only constructed $C^1$ functions $\rho, \phi$ and therefore only $C^1$ metrics. However, the functions are concave and can easily be smoothed near the break points so as to stay concave. This will not change the values or first derivatives much and only increase the second derivative in absolute value. Thus the lower curvature bound still holds.


---

## 7.3 Manifolds of Nonnegative Ricci Curvature

In this section we shall prove the splitting theorem of Cheeger-Gromoll. This theorem is analogous to the maximal diameter theorem in many ways. It also has far-reaching consequences for compact manifolds with nonnegative Ricci curvature. For instance, it can be used to show that $S^3 \times S^1$ does not admit a Ricci flat metric.

### 7.3.1 Rays and Lines

We will work only with complete and noncompact manifolds in this section. A ray $r(t) : [0, \infty) \to (M, g)$ is a unit speed geodesic such that

$$
|r(t)r(s)| = |t - s| \text{ for all } t, s \geq 0.
$$

One can think of a ray as a semi-infinite segment or as a segment from $r(0)$ to infinity. A line $l(t) : \mathbb{R} \to (M, g)$ is a unit speed geodesic such that

$$
|l(t)l(s)| = |t - s| \text{ for all } t, s \in \mathbb{R}.
$$

> [!lemma] Lemma 7.3.1
> If $p \in (M, g)$, then there is always a ray emanating from $p$. If $M$ is disconnected at infinity, then $(M, g)$ contains a line.

**Fig. 7.2 Construction of rays and lines**

> [!proof]- Proof
> Let $p \in M$ and consider a sequence $q_i \to \infty$. Find unit vectors $v_i \in T_pM$ such that:
> 
> $$
> \sigma_i(t) = \exp_p(tv_i), \quad t \in [0, d(p, q_i)]
> $$
> 
> is a segment from $p$ to $q_i$. By possibly passing to a subsequence, we can assume that $v_i \to v \in T_pM$ (see figure 7.2). Now
> 
> $$
> \sigma(t) = \exp_p(tv), \quad t \in [0, \infty),
> $$
> 
> becomes a segment. This is because $\sigma_i$ converges pointwise to $\sigma$ by continuity of $\exp_p$, and thus
> 
> $$
> |\sigma(s)\sigma(t)| = \lim |\sigma_i(s)\sigma_i(t)| = |s - t|.
> $$
> 
> A complete manifold is connected at infinity if for every compact set $K \subset M$ there is a compact set $C \supset K$ such that any two points in $M - C$ can be joined by a curve in $M - K$. If $M$ is not connected at infinity, we say that $M$ is disconnected at infinity.
> 
> If $M$ is disconnected at infinity, then there is a compact set $K$ and sequences of points $p_i \to \infty$, $q_i \to \infty$ such that any curve from $p_i$ to $q_i$ passes through $K$. If we join these points by segments $\sigma_i : (-a_i, b_i) \to M$ such that $a_i, b_i \to \infty$, $\sigma_i(0) \in K$, then the sequence will subconverge to a line (see figure 7.2).

> [!example] Example 7.3.2
> Surfaces of revolution $dr^2 + \rho^2(r)ds^2_{n-1}$, where $\rho : [0, \infty) \to [0, \infty)$ and $\dot{\rho}(t) < 1$, $\ddot{\rho}(t) < 0$, $t > 0$, cannot contain any lines. These manifolds look like paraboloids.

> [!example] Example 7.3.3
> Any complete metric on $S^{n-1} \times \mathbb{R}$ must contain a line since the manifold is disconnected at infinity.

> [!example] Example 7.3.4
> The Schwarzschild metric on $S^{n-2} \times \mathbb{R}^2$ does not contain any lines. This will also follow from our main result in this section as the space is not metrically a product.

> [!theorem] Theorem 7.3.5 (The Splitting Theorem, Cheeger and Gromoll, 1971)
> If $(M, g)$ contains a line and has $\text{Ric} \geq 0$, then $(M, g)$ is isometric to a product $(H \times \mathbb{R}, g_0 + dt^2)$.

> [!proof]- Outline of Proof
> The proof is quite involved and will require several constructions. The main idea is to find a distance function $r : M \to \mathbb{R}$ (i.e. $|\nabla r| \equiv 1$) that is linear (i.e. $\text{Hess}\, r \equiv 0$). Having found such a function, one can easily see that $M = U_0 \times \mathbb{R}$, where $U_0 = \{r = 0\}$ and $g = dt^2 + g_0$.
> 
> The maximum principle will play a key role in showing that $r$, when it has been constructed, is both smooth and linear. Recall that in the proof of the maximal diameter theorem 7.2.5 we used two distance functions $r, \tilde{r}$ placed at maximal distance from each other and then proceeded to show that $r + \tilde{r}$ is constant. This implied that $r, \tilde{r}$ were smooth, except at the two chosen points, and that $\Delta r$ is exactly what it is in constant curvature. We then used the rigidity part of the Cauchy-Schwarz inequality to compute $\text{Hess}\, r$.
> 
> In the construction of our linear distance function we shall use a similar construction. In this situation the two ends of the line play the role of the points at maximal distance. Using this line we will construct two distance functions $b_{\pm}$ from infinity that are continuous, satisfy $b_+ + b_- \geq 0$ (from the triangle inequality), $\Delta b_{\pm} \leq 0$, and $b_+ + b_- = 0$ on the line. Thus, $b_+ + b_-$ is superharmonic and has a global minimum. The minimum principle implies that $b_+ + b_- \equiv 0$. Thus, $b_+ = -b_-$ and
> 
> $$
> 0 \geq \Delta b_+ = -\Delta b_- \geq 0,
> $$
> 
> which shows that both of $b_{\pm}$ are harmonic and $C^{\infty}$. At this point in the proof it is shown that they are distance functions, i.e., $|\nabla b_{\pm}| \equiv 1$. We can then invoke proposition 7.1.1 to conclude that
> 
> $$
> \begin{aligned}
> 0 &= D_{\nabla b_{\pm}} \Delta b_{\pm} + \frac{(\Delta b_{\pm})^2}{n - 1} \\
>   &\leq D_{\nabla b_{\pm}} \Delta b_{\pm} + |\text{Hess}\, b_{\pm}|^2 \\
>   &= |\text{Hess}\, b_{\pm}|^2 \\
>   &\leq -\text{Ric}(\nabla b_{\pm}, \nabla b_{\pm}) \\
>   &\leq 0.
> \end{aligned}
> $$
> 
> This shows that $|\text{Hess}\, b_{\pm}|^2 = 0$ and $b_{\pm}$ are the sought after linear distance functions.


---

### 7.3.2 Busemann Functions

For the rest of this section fix a complete noncompact Riemannian manifold $(M, g)$ with nonnegative Ricci curvature. Let $c : [0, \infty) \to (M, g)$ be a unit speed ray, and define

$$
b_t(x) = |xc(t)| - t.
$$

> [!proposition] Proposition 7.3.6
> The functions $b_t$ satisfy:
> 
> (1) For fixed $x$, the function $t \mapsto b_t(x)$ is decreasing and bounded in absolute value by $|xc(0)|$.
> 
> (2) $|b_t(x) - b_t(y)| \leq |xy|$.
> 
> (3) $\Delta b_t(x) \leq \frac{n-1}{b_t + t}$ everywhere.

> [!proof] Proof
> (2) and (3) are obvious since $b_t(x) + t$ is the distance from $c(t)$. For (1), first observe that the triangle inequality implies
> 
> $$
> |b_t(x)| = ||xc(t)| - t| = ||xc(t)| - |c(0)c(t)|| \leq |xc(0)|.
> $$
> 
> Second, if $s < t$, then
> 
> $$
> \begin{aligned}
> b_t(x) - b_s(x) &= |xc(t)| - t - |xc(s)| + s \\
> &= |xc(t)| - |xc(s)| - |c(t)c(s)| \\
> &\leq |c(t)c(s)| - |c(t)c(s)| = 0.
> \end{aligned}
> $$

This proposition shows that the family of distance decreasing functions $\{b_t\}_{t \geq 0}$ is pointwise bounded and decreasing. Thus, $b_t$ converges pointwise to a distance decreasing function $b_c$ satisfying

$$
|b_c(x) - b_c(y)| \leq |xy|,
$$

$$
|b_c(x)| \leq |xc(0)|,
$$

and

$$
b_c(c(r)) = \lim b_t(c(r)) = \lim (|c(r)c(t)| - t) = -r.
$$

This function $b_c$ is called the **Busemann function** for $c$ and should be interpreted as renormalized a distance function from "$c(\infty)$."

> [!example] Example 7.3.7
> If $M = (\mathbb{R}^n, g_{\mathbb{R}^n})$, then all Busemann functions are of the form
> 
> $$
> b_c(x) = \dot{c}(0) \cdot (c(0) - x)
> $$
> 
> (see figure 7.3).

**Fig. 7.3** Busemann function in Euclidean space

**Fig. 7.4** Asymptote construction from a ray

The level sets $b_c^{-1}(t)$ are called **horospheres**. In $\mathbb{R}^n$ these are obviously hyperplanes. In the Poincaré model of hyperbolic space they look like spheres that are tangent to the boundary.

Given our ray $c$, as before, and $p \in M$, consider a family of unit speed segments $\sigma_t : [0, L_t] \to (M, g)$ from $p$ to $c(t)$. As in the construction of rays this family subconverges to a ray $\tilde{c} : [0, \infty) \to M$, with $\tilde{c}(0) = p$. Such $\tilde{c}$ are called **asymptotes** for $c$ from $p$ (see figure 7.4) and need not be unique.

> [!proposition] Proposition 7.3.8
> The Busemann functions are related by:
> 
> (1) $b_c(x) \leq b_c(p) + b_{\tilde{c}}(x)$.
> 
> (2) $b_c(\tilde{c}(t)) = b_c(p) + b_{\tilde{c}}(\tilde{c}(t)) = b_c(p) - t$.

> [!proof] Proof
> Let $\sigma_i : [0, L_i] \to (M, g)$ be the segments converging to $\tilde{c}$. To check (1), observe that
> 
> $$
> \begin{aligned}
> |xc(s)| - s &\leq |x\tilde{c}(t)| + |\tilde{c}(t)c(s)| - s \\
> &= |x\tilde{c}(t)| - t + |p\tilde{c}(t)| + |\tilde{c}(t)c(s)| - s \\
> &\to |x\tilde{c}(t)| - t + |p\tilde{c}(t)| + b_c(\tilde{c}(t)) \text{ as } s \to \infty.
> \end{aligned}
> $$
> 
> Thus, we see that (1) is true provided that (2) is true. To establish (2), note that
> 
> $$
> |pc(t_i)| = |p\sigma_i(s)| + |\sigma_i(s)c(t_i)|
> $$
> 
> for some sequence $t_i \to \infty$. Then $\sigma_i(s) \to \tilde{c}(s)$ and
> 
> $$
> \begin{aligned}
> b_c(p) &= \lim (|pc(t_i)| - t_i) \\
> &= \lim (|p\tilde{c}(s)| + |\tilde{c}(s)c(t_i)| - t_i) \\
> &= |p\tilde{c}(s)| + \lim (|\tilde{c}(s)c(t_i)| - t_i) \\
> &= s + b_c(\tilde{c}(s)) \\
> &= -b_{\tilde{c}}(\tilde{c}(s)) + b_c(\tilde{c}(s)).
> \end{aligned}
> $$

**Fig. 7.5** Triangle inequality for two Busemann functions

We have shown that $b_c$ has $b_c(p) + b_{\tilde{c}}$ as support function from above at $p \in M$.

> [!lemma] Lemma 7.3.9
> If $\mathrm{Ric}(M, g) \geq 0$, then $\Delta b_c \leq 0$ everywhere.

> [!proof] Proof
> Since $b_c(p) + b_{\tilde{c}}$ is a support function from above at $p$, we only need to check that $\Delta b_{\tilde{c}} \leq 0$ at $p$. To see this, observe that the functions $b_t(x) = |x\tilde{c}(t)| - t$ are support functions from above for $b_{\tilde{c}}$ at $p$. Furthermore, these functions are smooth at $p$ with
> 
> $$
> \Delta b_t(p) \leq \frac{n-1}{t} \to 0 \text{ as } t \to \infty.
> $$

#### Proof of Theorem 7.3.5

Now suppose $(M, g)$ has $\mathrm{Ric} \geq 0$ and contains a line $c(t) : \mathbb{R} \to M$. Let $b^+$ be the Busemann function for $c : [0, \infty) \to M$, and $b^-$ the Busemann function for $c : (-\infty, 0] \to M$. Thus,

$$
b^+(x) = \lim_{t \to +\infty} (|xc(t)| - t),
$$

$$
b^-(x) = \lim_{t \to +\infty} (|xc(-t)| - t).
$$

Clearly,

$$
b^+(x) + b^-(x) = \lim_{t \to +\infty} (|xc(t)| + |xc(-t)| - 2t),
$$

so by the triangle inequality $(b^+ + b^-)(x) \geq 0$ for all $x$. Moreover, $(b^+ + b^-)(c(t)) = 0$ since $c$ is a line (see figure 7.5).

This gives us a function $b^+ + b^-$ with $\Delta(b^+ + b^-) \leq 0$ and a global minimum at $c(t)$. The minimum principle then shows that $b^+ + b^- = 0$ everywhere. In particular, $b^+ = -b^-$ and $\Delta b^+ = \Delta b^- = 0$ everywhere.

To finish the proof of the splitting theorem, we still need to show that $b^{\pm}$ are distance functions, i.e. $|\nabla b^{\pm}| \equiv 1$. To see this, let $p \in M$ and construct asymptotes $\tilde{c}^{\pm}$ for $c^{\pm}$ from $p$. Then consider $b_t^{\pm}(x) = |x\tilde{c}^{\pm}(t)| - t$, and observe:

$$
b_t^+(x) \geq b^+(x) - b^+(p) = -b^-(x) + b^-(p) \geq -b_t^-(x)
$$

with equality holding for $x = p$. Since both $b_t^{\pm}$ are smooth at $p$ with unit gradient it follows that $\nabla b_t^+(p) = -\nabla b_t^-(p)$. Then $b^{\pm}$ must also be differentiable at $p$ with unit gradient. Therefore, we have shown (without using that $b^{\pm}$ are smooth from $\Delta b^{\pm} = 0$) that $b^{\pm}$ are everywhere differentiable with unit gradient. The result that harmonic functions are smooth can now be invoked and the proof is finished as explained earlier.


---

### 7.3.3 Structure Results in Nonnegative Ricci Curvature

The splitting theorem gives several nice structure results for compact manifolds with nonnegative Ricci curvature.

> [!corollary] Corollary 7.3.10
> $S^k \times S^1$ does not admit any Ricci flat metrics when $k = 2, 3$.

> [!proof]- Proof
> The universal covering is $S^k \times \mathbb{R}$. As this space is disconnected at infinity any metric with nonnegative Ricci curvature must split. If the original metric is Ricci flat, then after the splitting we obtain a Ricci flat metric on a $k$-manifold $H$ that is homotopy equivalent to $S^k$. In particular, $H$ is compact and simply connected. If $k \leq 3$, such a metric must also be flat and so can't be simply connected as it is compact.
> 
> When $k \geq 4$ it is not known whether any space that is homotopy equivalent to $S^k$ admits a Ricci flat metric, but there do exist Ricci flat metrics on compact simply connected manifolds in dimensions $\geq 4$.

> [!theorem] Theorem 7.3.11 (Structure Theorem for Nonnegative Ricci Curvature, Cheeger and Gromoll, 1971)
> Suppose $(M, g)$ is a compact Riemannian manifold with $\mathrm{Ric} \geq 0$.
> 
> (1) The universal cover $(\tilde{M}, \tilde{g})$ splits isometrically as a product $N \times \mathbb{R}^k$, where $N$ is a compact manifold.
> 
> (2) The isometry group splits $\mathrm{Iso}(\tilde{M}) = \mathrm{Iso}(N) \times \mathrm{Iso}(\mathbb{R}^k)$.
> 
> (3) There exists a finite normal subgroup $G \subset \pi_1(M)$ whose factor group is $\pi_1(M) \cap \mathrm{Iso}(\mathbb{R}^k)$ and there is a finite index subgroup $\mathbb{Z}^k \subset \pi_1(M) \cap \mathrm{Iso}(\mathbb{R}^k)$.

> [!proof]- Proof
> First we use the splitting theorem to write $\tilde{M} = N \times \mathbb{R}^k$, where $N$ does not contain any lines. Observe that if $c(t) = (c_1(t), c_2(t)) \in N \times \mathbb{R}^k$ is a geodesic, then both $c_i$ are geodesics, and if $c$ is a line, then both $c_i$ are also lines unless they are constant. Thus, all lines in $\tilde{M}$ must be of the form $c(t) = (x, \sigma(t))$, where $x \in N$ and $\sigma$ is a line in $\mathbb{R}^k$.
> 
> (2) Let $F : \tilde{M} \to \tilde{M}$ be an isometry. If $L(t)$ is a line in $\tilde{M}$, then $F \circ L$ is also a line in $\tilde{M}$. Since all lines in $\tilde{M}$ lie in $\mathbb{R}^k$ and every vector tangent to $\mathbb{R}^k$ is the velocity of some line, we see that for each $x \in N$ we can find $F_1(x) \in N$ such that
> $$
> F : \{x\} \times \mathbb{R}^k \to \{F_1(x)\} \times \mathbb{R}^k.
> $$
> 
> This implies that $F$ must be of the form $F = (F_1, F_2)$, where $F_1 : N \to N$ is an isometry. Since $DF$ preserves the tangent spaces to $\mathbb{R}^k$ it must also preserve the tangent spaces to $N$. Thus $F_2 : \mathbb{R}^k \to \mathbb{R}^k$. This shows that $\mathrm{Iso}(\tilde{M}) = \mathrm{Iso}(N) \times \mathrm{Iso}(\mathbb{R}^k)$.
> 
> (1) Since the deck transformations $\pi_1$ act by isometries we can consider the group $\pi_1 \cap \mathrm{Iso}(N)$ that comes from the projection $N \times \mathbb{R}^k \to N$. As $\pi_1$ acts discretely and cocompactly on $\tilde{M}$, it follows that $\pi_1 \cap \mathrm{Iso}(N)$ also acts cocompactly on $N$. In particular, for any sequence $p_i \in N$, it is possible to select $F_i \in \pi_1 \cap \mathrm{Iso}(N)$ such that all the points $F_i(p_i)$ lie in a fixed compact subset of $N$.
> 
> If $N$ is not compact, then it must contain a ray $c(t) : [0, \infty) \to N$. We can then choose a sequence $t_i \to \infty$ and $F_i \in \pi_1 \cap \mathrm{Iso}(N)$ such that $F_i(c(t_i))$ lie in a compact set. We can then choose a subsequence so that $DF_i(\dot{c}(t_i))$ converges to a unit vector $v \in TN$. This implies that the geodesics $c_i : \mathbb{R} \to N$ defined by $c_i(t) = F_i(c(t + t_i))$ converge to the geodesic $\exp(tv)$. Moreover, for a fixed $a \in \mathbb{R}$ the geodesics $c_i$ are rays on $[a, \infty)$ when $t_i \geq -a$ so it follows that $\exp(tv)$ is also a ray on $[a, \infty)$. But this shows that $\exp(tv) : \mathbb{R} \to N$ is a line which contradicts that $N$ does not contain any lines.
> 
> (3) Let $G$ be the kernel that comes from the map $\pi_1(M) \to \pi_1(M) \cap \mathrm{Iso}(\mathbb{R}^k)$ induced by the projection $N \times \mathbb{R}^k \to \mathbb{R}^k$. This group acts freely and discretely on $N \times \mathbb{R}^k$ without acting in the second factor. Thus it acts freely and discretely on $N$ and must be finite as $N$ is compact.
> 
> The translations form a normal subgroup $\mathbb{R}^k \subset \mathrm{Iso}(\mathbb{R}^k)$ whose factor group is $O(k)$. The intersection $\pi_1(M) \cap \mathbb{R}^k$ is a finitely generated Abelian group with finite index in $\pi_1 \cap \mathrm{Iso}(\mathbb{R}^k)$ that acts discretely and cocompactly on $\mathbb{R}^k$. In particular, it is of the form $\mathbb{Z}^m$. When $m < k$ it is not possible for $\mathbb{Z}^m$ to act cocompactly on $\mathbb{R}^k$ since it will generate a proper subspace of the space of translations on $\mathbb{R}^k$. On the other hand if $m > k$, then $\mathbb{Z}^m$ will contain two elements that are linearly independent over $\mathbb{Q}$ but not over $\mathbb{R}$ inside the space of translations. The subgroup in $\mathbb{Z}^m$ generated by these two elements will generate orbits that are contained in line, but it can't act discretely on these lines (see also the end of the proof of theorem 6.2.6.) We conclude that $\pi_1(M) \cap \mathbb{R}^k = \mathbb{Z}^k$. (For more details about discrete actions on $\mathbb{R}^n$ see also [38] and [106].)

> [!remark] Remark 7.3.12
> Wilking in [103] has in fact shown that any group $G$ that admits a finite normal subgroup $H \subset G$ so that $G/H$ acts discretely and cocompactly on a Euclidean space must be the fundamental group of a compact manifold with nonnegative sectional curvature.

We next prove some further results about the structure of compact manifolds with nonnegative Ricci curvature.

> [!corollary] Corollary 7.3.13
> Suppose $(M, g)$ is a compact Riemannian manifold with $\mathrm{Ric} \geq 0$. If $M$ is $K(\pi, 1)$, i.e., the universal cover is contractible, then the universal covering is Euclidean space and $(M, g)$ is a flat manifold.

> [!proof]- Proof
> We know that $\tilde{M} = \mathbb{R}^k \times C$, where $C$ is compact. The only way in which this space can be contractible is if $C$ is contractible. But the only compact manifold that is contractible is the one-point space.

> [!corollary] Corollary 7.3.14
> If $(M, g)$ is compact with $\mathrm{Ric} \geq 0$ and has $\mathrm{Ric} > 0$ on some tangent space $T_pM$, then $\pi_1(M)$ is finite.

> [!proof]- Proof
> Since $\mathrm{Ric} > 0$ on an entire tangent space, the universal cover cannot split into a product $\mathbb{R}^k \times C$, where $k \geq 1$. Thus, the universal covering is compact.

This result is a bit stronger than simply showing that $H^1(M, \mathbb{R}) = 0$ as we shall prove using the Bochner technique (see 9.2.3). The next result is equivalent to Bochner's theorem, but the proof is quite a bit different.

> [!corollary] Corollary 7.3.15
> If $(M, g)$ is compact and has $\mathrm{Ric} \geq 0$, then $b_1(M) \leq \dim M = n$, with equality holding if and only if $(M, g)$ is a flat torus.

> [!proof]- Proof
> There is a natural surjection
> $$
> h : \pi_1(M) \to H_1(M, \mathbb{Z}) \simeq \mathbb{Z}^{b_1} \times T,
> $$
> that maps loops to cycles, and where $T$ is a finite Abelian group. The structure of the fundamental group shows that $h(G) \subset T$ since $G$ is finite. Thus we obtain a surjective homomorphism $\pi_1(M)/G \to \mathbb{Z}^{b_1}$, where $\pi_1(M)/G = \pi_1(M) \cap \mathrm{Iso}(\mathbb{R}^k)$. Moreover, the image of $\pi_1(M) \cap \mathbb{R}^k = \mathbb{Z}^k$ in $\mathbb{Z}^{b_1}$ has finite index. This shows that $b_1 \leq k \leq n$.
> 
> When $b_1 = n$ it follows that $\tilde{M} = \mathbb{R}^n$. In particular, $G$ is trivial. Moreover, the restriction of $h$ to $\mathbb{Z}^n$ must be injective as the image otherwise couldn't have finite index in $H_1(M, \mathbb{Z})$. Thus the kernel of $h$ cannot intersect the finite index subgroup $\mathbb{Z}^n \subset \pi_1(M)$ and so must be finite. However, any isometry on $\mathbb{R}^n$ of finite order has a fixed point so it follows that $\ker h$ is trivial. Thus $\pi_1(M) \simeq \mathbb{Z}^n \times T$ and consequently $T$ is trivial. This shows that $M = \mathbb{R}^n/\mathbb{Z}^n$ is a torus. Note, however, that the action of $\mathbb{Z}^n$ on $\mathbb{R}^n$ might not be the standard action so we don't necessarily end up with the square torus.

Finally we prove a similar structure result for homogeneous spaces.

> [!theorem] Theorem 7.3.16
> Let $(M, g)$ be a Riemannian manifold that is homogeneous. If $\mathrm{Ric} \geq 0$, then
> $$
> (M, g) = (N \times \mathbb{R}^k, g_N + g_{\mathbb{R}^k}),
> $$
> where $(N, g_N)$ is a compact homogeneous space.

> [!proof]- Proof
> First split $(M, g) = (N \times \mathbb{R}^k, g_N + g_{\mathbb{R}^k})$ so that $N$ does not contain any lines. Then note that the isometry group splits as in theorem 7.3.11 thus forcing $N$ to become homogeneous.
> 
> The claim will then follow from the splitting theorem provided we can show that any noncompact homogeneous space contains a line. To see this choose a unit speed ray $c : [0, \infty) \to M$ and isometries $F_s$ such that $F_s(c(s)) = c(0)$. Now consider the unit speed rays $c_s : [-s, \infty)$ defined by $c_s(t) = F_s(c(t + s))$. Then $c_s(0) = c(0)$ and $\dot{c}_s(0) = \dot{c}(0)$ so $c_s$ is simply the extension of $c$. As $c_s$ is a ray it follows that the extension of $c$ to $\mathbb{R}$ must be a line.


---

## 7.4 Further Study

The adventurous reader could consult [53] for further discussions. Anderson's article [2] contains some interesting examples of manifolds with nonnegative Ricci curvature. For the examples with almost maximal diameter we refer the reader to [3] and [81]. It is also worthwhile to consult the original paper on the splitting theorem [31] and the elementary proof of it in [41]. The reader should also consult the articles by Colding, Perel'man, and Zhu in [54] to get an idea of how the subject has developed.


---

## 7.5 Exercises

> [!exercise] Exercise 7.5.1
> With notation as in section 7.1.1 and using $\mathrm{vol} = \lambda dr \wedge \mathrm{vol}_{n-1}$ show that $\mu = \lambda^{1/(n-1)}$ satisfies
> 
> $$
> \partial_r^2 \mu \leq -\frac{\mu}{n-1} \mathrm{Ric}(\partial_r, \partial_r),
> $$
> 
> $$
> \mu(0, \theta) = 0,
> $$
> 
> $$
> \lim_{r \to 0} \partial_r \mu(r, \theta) = 1.
> $$
> 
> This can also be used to show the desired estimates for the volume form.

> [!exercise] Exercise 7.5.2 (Calabi and Yau)
> Let $(M, g)$ be a complete noncompact manifold with $\mathrm{Ric} \geq 0$ and fix $p \in M$.
> 
> (1) Show that for each $R > 1$ there is an $x \in M$ such that
> 
> $$
> \mathrm{vol} B(p, 1) \leq \mathrm{vol} B(x, R+1) - \mathrm{vol} B(x, R-1)
> $$
> 
> $$
> \leq \frac{(R+1)^n - (R-1)^n}{(R+1)^n} \mathrm{vol} B(p, 2R).
> $$
> 
> (2) Show that there is a constant $C > 0$ so that $\mathrm{vol} B(p, R) \geq CR$.

> [!exercise] Exercise 7.5.3
> Let $f : I \to \mathbb{R}$ be continuous, where $I \subset \mathbb{R}$ an interval. Show that the following conditions are equivalent.
> 
> (1) $f$ is convex.
> 
> (2) $f$ has a "linear" support function from below of the form $a(x - x_0) + f(x_0)$ at every $x_0 \in I$.
> 
> (3) $f'' \geq 0$ in the support sense at all points $x_0 \in I$.

> [!exercise] Exercise 7.5.4
> Show that on a compact Riemannian manifold it is not possible to find $S(s) < \infty$ such that
> 
> $$
> \|f - f_M\|_{s/(s-1)} \leq S \|df\|_1
> $$
> 
> when $1 < s < \dim M$.

> [!exercise] Exercise 7.5.5 (Basic Covering Lemma)
> Given a separable metric space $(X, d)$ and a bounded positive function $R : X \to (0, D]$, show that there is a countable subset $A \subset X$, such that the balls $B(p, R(p))$ are pairwise disjoint for $p \in A$ and
> 
> $$
> X = \bigcup_{p \in A} B(p, 5R(p)).
> $$
> 
> **Hint:** Select the points in $A$ successively so that
> 
> $$
> R(p_{k+1}) \geq \frac{1}{2} \sup_{p \in X - \bigcup_{i=1}^k B(p_i, 2R(p_i))} R(p).
> $$

> [!exercise] Exercise 7.5.6
> Assume the distance function $r(x) = |xp|$ is smooth on $B(p, R)$. Show that if
> 
> $$
> \mathrm{Hess} \, r = \frac{\mathrm{sn}_k'(r)}{\mathrm{sn}_k(r)} g_r
> $$
> 
> in polar coordinates, then all sectional curvatures on $B(p, R)$ are equal to $k$.

> [!exercise] Exercise 7.5.7
> Construct convex surfaces in $\mathbb{R}^3$ by capping off cylinders $[-R, R] \times S^1$ to show that the Sobolev-Poincaré constants increase as $R$ increases.
> 
> **Hint:** Consider test functions that are constant except on $[-1, 1] \times S^1$.

> [!exercise] Exercise 7.5.8
> Show that if $(M, g)$ has $\mathrm{Ric} \geq (n-1)k$ and for some $p \in M$ we have $\mathrm{vol} B(p, R) = v(n, k, R)$, then the metric has constant curvature $k$ on $B(p, R)$.

> [!exercise] Exercise 7.5.9
> Let $X$ be a vector field on a Riemannian manifold and consider $F_t(p) = \exp_p(tX|_p)$.
> 
> (1) For $v \in T_p M$ show that $J(t) = DF_t(v)$ is a Jacobi field along $t \mapsto c(t) = \exp_p(tX|_p)$ with the initial conditions $J(0) = v$, $\dot{J}(0) = \nabla_v X$.
> 
> (2) Select an orthonormal basis $e_i$ for $T_p M$ and let $J_i(t) = DF_t(e_i)$. Show that
> 
> $$
> (\det[DF_t])^2 = \det[g(J_i(t), J_j(t))].
> $$
> 
> (3) Show that as long as $\det(DF_t) \neq 0$ it satisfies
> 
> $$
> \frac{d^2}{dt^2}((\det(DF_t))^{1/n}) \leq -\frac{(\det(DF_t))^{1/n}}{n} \mathrm{Ric}(\dot{c}, \dot{c}).
> $$
> 
> **Hint:** Use that any $n \times n$ matrix satisfies $(\mathrm{tr}(A))^2 \leq n \, \mathrm{tr}(A^*A)$.

> [!exercise] Exercise 7.5.10
> Show that a complete manifold $(M, g)$ with the property that
> 
> $$
> \mathrm{Ric} \geq 0,
> $$
> 
> $$
> \lim_{r \to \infty} \frac{\mathrm{vol} B(p, r)}{\omega_n r^n} = 1,
> $$
> 
> for some $p \in M$, must be isometric to Euclidean space.

> [!exercise] Exercise 7.5.11
> Show that any function on an $n$-dimensional Riemannian manifold satisfies
> 
> $$
> |\mathrm{Hess} \, u|^2 \geq \frac{1}{n} |\Delta u|^2
> $$
> 
> with equality holding only when $\mathrm{Hess} \, u = \frac{\Delta u}{n} g$. What can you say about $M$ when $\mathrm{Hess} \, u = \frac{\Delta u}{n} g$?

> [!exercise] Exercise 7.5.12
> Show that if $u, v : M \to \mathbb{R}$ are compactly supported functions that are both smooth on open dense sets in $M$, then the following integrals make sense and are equal
> 
> $$
> \int u \Delta v \, \mathrm{vol} = \int v \Delta u \, \mathrm{vol} = -\int g(du, dv) \, \mathrm{vol} = -\int g(\nabla u, \nabla v) \, \mathrm{vol}.
> $$

> [!exercise] Exercise 7.5.13
> Show that if $\Delta u = \lambda u$ on a closed Riemannian manifold, then $\lambda \leq 0$ and when $\lambda = 0$, then $u$ is constant.

> [!exercise] Exercise 7.5.14
> Show that the modified distance functions $u_k = \cos(\sqrt{k} r)$ on $S_k^n = S^n(1/\sqrt{k})$, satisfy $\Delta u_k = -(nk)u_k$ and $\int u_k \, \mathrm{vol} = 0$.

> [!exercise] Exercise 7.5.15 (Lichnerowicz)
> Let $(M^n, g)$ be closed with $\mathrm{Ric} \geq (n-1)k > 0$. Use the Bochner formula to show that all functions with $\Delta u = -\lambda u$, $\lambda > 0$, satisfy $\lambda \geq nk$.
> 
> The spectral theorem for $\Delta$ then implies that all functions with $\int u \, \mathrm{vol} = 0$ satisfy the Poincaré inequality
> 
> $$
> \int u^2 \, \mathrm{vol} \leq \frac{1}{nk} \int |du|^2 \, \mathrm{vol}.
> $$

> [!exercise] Exercise 7.5.16 (Obata)
> Let $(M^n, g)$ be closed with $\mathrm{Ric} \geq (n-1)k > 0$. Use the Bochner formula as in exercise 7.5.15 to show that if there is a function such that $\Delta u = -(nk)u$, then $\mathrm{Hess} \, u = -ku g$. Conclude that $(M^n, g) = S_k^n$.

> [!exercise] Exercise 7.5.17 (P. Li and Schoen)
> The goal of this exercise is to show a Poincaré inequality for functions that vanish on the boundary of a ball. Let $(M, g)$ be a complete Riemannian $n$-manifold with $\mathrm{Ric} \geq -(n-1)k^2$, $k \geq 0$; $p \in M$; $R > 0$ chosen so that $\partial B(p, 2R) \neq \emptyset$; $q \in \partial B(p, 2R)$; and $r(x) = |xq|$.
> 
> (1) Show that $\Delta r \leq (n-1)(R^{-1} + k)$ on $B(p, R)$.
> 
> (2) Let $f(x) = a \exp(-ar(x))$, $a > 0$. Show that
> 
> $$
> \Delta f \geq a \exp(-a^3 R)(a - (n-1)(R^{-1} + k)).
> $$
> 
> (3) Let $u \geq 0$ be a smooth function with compact support in $B(p, R)$ and choose $a = n(R^{-1} + k)$. Use
> 
> $$
> \int_{B(p,R)} u \Delta f \, \mathrm{vol} = -\int_{B(p,R)} g(du, df) \, \mathrm{vol}
> $$
> 
> to show that
> 
> $$
> \int_{B(p,R)} u \, \mathrm{vol} \leq C \int_{B(p,R)} |du| \, \mathrm{vol},
> $$
> 
> where $C = \frac{R}{1+kR} \exp(2n(1 + kR))$.
> 
> (4) Prove this inequality for all smooth functions $u$ with compact support in $B(p, R)$.
> 
> (5) Let $s \geq 1$ and $u$ have compact support in $B(p, R)$. Show that
> 
> $$
> \int_{B(p,R)} |u|^s \, \mathrm{vol} \leq (sC)^s \int_{B(p,R)} |du| \, \mathrm{vol}.
> $$

> [!exercise] Exercise 7.5.18 (Cheeger)
> The relative volume comparison estimate can be generalized as follows: Suppose $(M^n, g)$ has $\mathrm{Ric} \geq (n-1)k$.
> 
> (1) Select points $p_1, \ldots, p_k \in M$. Then the function
> 
> $$
> r \mapsto \frac{\mathrm{vol}(\bigcup_{i=1}^k B(p_i, r))}{v(n, k, r)}
> $$
> 
> is nonincreasing and converges to $k$ as $r \to 0$.
> 
> (2) If $A \subset M$, then
> 
> $$
> r \mapsto \frac{\mathrm{vol}(\bigcup_{p \in A} B(p, r))}{v(n, k, r)}
> $$
> 
> is nonincreasing. To prove this, use the above with the finite collection of points taken to be very dense in $A$.

> [!exercise] Exercise 7.5.19
> The absolute volume comparison can be generalized to hold for cones. Namely, for $p \in M$ and a subset $\Gamma \subset T_p M$ of unit vectors, consider the cones defined in polar coordinates:
> 
> $$
> B^\Gamma(p, R) = \{(t, \theta) \in M \mid t \leq R \text{ and } \theta \in \Gamma\}.
> $$
> 
> If $\mathrm{Ric} \, M \geq (n-1)k$, show that
> 
> $$
> \mathrm{vol} \, B^\Gamma(p, R) \leq \mathrm{vol} \, \Gamma \cdot \int_0^R (\mathrm{sn}_k(t))^{n-1} dt.
> $$

> [!exercise] Exercise 7.5.20
> Let $G$ be a compact connected Lie group with a biinvariant metric such that $\mathrm{Ric} \geq 0$. Use the results from this chapter to prove
> 
> (1) If $G$ has finite center, then $G$ has finite fundamental group.
> 
> (2) A finite covering of $G$ looks like $G' \times T^k$, where $G'$ is compact simply connected, and $T^k$ is a torus.
> 
> (3) If $G$ has finite fundamental group, then the center is finite.

> [!exercise] Exercise 7.5.21
> Let $(M, g)$ be an $n$-dimensional Riemannian manifold that is isometric to Euclidean space outside some compact subset $K \subset M$, i.e., $M - K$ is isometric to $\mathbb{R}^n - C$ for some compact set $C \subset \mathbb{R}^n$. If $\mathrm{Ric}_g \geq 0$, show that $M = \mathbb{R}^n$.

> [!exercise] Exercise 7.5.22
> Show that if $\mathrm{Ric} \geq n-1$, then $\mathrm{diam} \leq \pi$, by showing that if $|pq| > \pi$, then
> 
> $$
> e_{p,q}(x) = |px| + |xq| - |pq|
> $$
> 
> has negative Laplacian at a local minimum.
