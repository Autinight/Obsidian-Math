---
title: Petersen Riemannian Geometry - Chapter 6
tags:
  - riemannian-geometry
  - sectional-curvature
  - comparison-geometry
source: Petersen - 2016 - Riemannian Geometry
section: Chapter 6
date: 2026-05-09
---

In the previous chapter we classified complete spaces with constant curvature. The goal of this chapter is to compare manifolds with variable curvature to spaces with constant curvature. Our first global result is the Hadamard-Cartan theorem, which says that a simply connected complete manifold with $\sec \leq 0$ is diffeomorphic to $\mathbb{R}^n$. There are also several interesting restrictions on the topology in positive curvature that we shall investigate, notably, the Bonnet-Myers diameter bound and Synge's theorem stating that an orientable even-dimensional manifold with positive curvature is simply connected. Finally, we also cover the classical quarter pinched sphere theorem of Rauch, Berger, and Klingenberg. In subsequent chapters we deal with some more advanced and modern topics in the theory of manifolds with lower curvature bounds.

We start by introducing the concept of differentiation of vector fields along curves. This generalizes and ties in nicely with mixed second partials from the last chapter and also allows us to define higher order partials. This is then used to define parallel fields, Jacobi fields along geodesics, and finally to establish the second variation formula of Synge.

We also establish some basic comparison estimates that are needed here and later in the text. These results are used to show how geodesics and curvature can help in estimating the injectivity, conjugate, and convexity radii.

## 6.1 The Connection Along Curves

Recall that in sections 3.2.4 and 3.2.5 we introduced Jacobi and parallel fields for a smooth distance function. Here we will generalize these concepts to allow for Jacobi and parallel fields along a single geodesic, rather than the whole family of geodesics associated to a distance function. This will be quite useful when we study variations.

### 6.1.1 Vector Fields Along Curves

Let $c: I \to M$ be a curve in $M$. A vector field $V$ along $c$ is by definition a map $V: I \to TM$ with $V(t) \in T_{c(t)}M$ for all $t \in I$. The goal is to define the covariant derivative

$$\dot{V}(t) = \frac{d}{dt}V(t) = \nabla_{\dot{c}}V$$

of $V$ along $c$. We know that $V$ can be thought of as the variational field for a variation $\bar{c}: (-\varepsilon, \varepsilon) \times I \to M$. So it is natural to assume that

$$\frac{d}{dt}V(t) = \frac{\partial^2 \bar{c}}{\partial t \partial s}(0, t).$$

Doing the calculation in local coordinates (see section 5.1) gives

$$V(t) = V^k(t)\partial_k = \frac{\partial \bar{c}^k}{\partial s}(0, t)\partial_k$$

and

$$\frac{\partial^2 \bar{c}}{\partial t \partial s}(0, t) = \frac{\partial^2 \bar{c}^k}{\partial t \partial s}(0, t)\partial_k + \frac{\partial \bar{c}^i}{\partial s}(0, t)\frac{\partial \bar{c}^j}{\partial t}(0, t)\Gamma_{ij}^k\partial_k$$

$$= \frac{dV^k}{dt}(t)\partial_k + V^i(t)\frac{dc^j}{dt}(t)\Gamma_{ij}^k\partial_k.$$

This shows that $\dot{V}$ does not depend on how the variation was chosen. Since the variation can be selected independently of the coordinate system we see that the local coordinate formula is independent of the coordinate system. The formula also shows that if $V(t) = X_{c(t)}$ for some vector field $X$ defined in a neighborhood of $c(t_0)$, then this derivative is a covariant derivative

$$\dot{V}(t_0) = \nabla_{\dot{c}(t_0)}X.$$

Some caution is necessary when thinking of $\dot{V}$ in this way as it is not in general true that $\dot{V}(t_0) = 0$ when $\dot{c}(t_0) = 0$. It could, e.g., happen that $c$ is the constant curve. In this case $V(t)$ is simply a curve in $T_{c(t_0)}M$ and as such has a well-defined velocity that doesn't have to be zero.

From the product rule for mixed partials (see section 5.1) we get the product rule:

$$\frac{d}{dt}g(V, W) = g(\dot{V}, W) + g(V, \dot{W})$$

for vector fields $V, W$ along $c$ by selecting a two-parameter variation $\bar{c}(s, u, t)$ such that

$$\frac{\partial \bar{c}}{\partial s}(0, 0, t) = V(t),$$

$$\frac{\partial \bar{c}}{\partial u}(0, 0, t) = W(t).$$

The local coordinate formula also shows that we have:

$$\frac{d}{dt}(V(t) + W(t)) = \frac{d}{dt}V(t) + \frac{d}{dt}W(t),$$

$$\frac{d}{dt}(\lambda(t)V(t)) = \frac{d\lambda}{dt}(t)V(t) + \lambda(t)\frac{dV}{dt}(t),$$

where $\lambda: I \to \mathbb{R}$ is a function.

As with second partials, differentiation along curves can be done in a larger space and then projected on to $M$. Specifically, if $M \subset \bar{M}$ and $c: I \to M$ is a curve and $V: I \to TM$ a vector field along $c$, then we can compute $\dot{V} \in T\bar{M}$ and then project $(\dot{V})^\top \in TM$ to obtain the derivative of $V$ along $c$ in $M$. Example 6.1.1 shows what can go wrong if we are not careful about projecting the derivatives.

### 6.1.2 Third Partials

One of the uses of taking derivatives of vector fields along curves is that we can now define third and higher order partial derivatives. If we wish to compute

$$\frac{\partial^3 c}{\partial s \partial t \partial u}(s_0, t_0, u_0),$$

then consider the vector field $s \mapsto \frac{\partial^2 c}{\partial t \partial u}(s, t_0, u_0) = V(s)$ and define

$$\frac{\partial^3 c}{\partial s \partial t \partial u}(s_0, t_0, u_0) = \frac{dV}{ds}(s_0).$$

Something rather interesting happens with this definition. We expected and proved that second partials commute. This, however, does not carry over to third partials. It is true that

$$\frac{\partial^3 c}{\partial s \partial t \partial u} = \frac{\partial^3 c}{\partial s \partial u \partial t},$$

but if we switch the first two variables the derivatives might be different. One reason we are not entitled to have these derivatives commute lies in the fact that they were defined with a specific order of derivatives in mind.

> [!example] Example 6.1.1
> Let
> $$c(t, \theta) = \begin{pmatrix} \cos(t) \\ \sin(t)\cos(\theta) \\ \sin(t)\sin(\theta) \end{pmatrix}$$
> be the standard parametrization of $S^2(1) \subset \mathbb{R}^3$ as a surface of revolution around the $x$-axis. We can compute all derivatives in $\mathbb{R}^3$ and then project them on to $S^2(1)$ in order to find the intrinsic partial derivatives. The curves $t \mapsto c(t, \theta)$ are geodesics.
>
> We can see this by direct calculation as
> $$\frac{\partial c}{\partial t} = \begin{pmatrix} -\sin(t) \\ \cos(t)\cos(\theta) \\ \cos(t)\sin(\theta) \end{pmatrix} \in TS^2(1),$$
>
> $$\frac{\partial^2 c}{\partial t^2} = \begin{pmatrix} -\cos(t) \\ -\sin(t)\cos(\theta) \\ -\sin(t)\sin(\theta) \end{pmatrix} \in T\mathbb{R}^3.$$
>
> Thus the Euclidean acceleration is proportional to the base point $c$ and so has zero projection onto $S^2(1)$. Next we compute
>
> $$\frac{\partial^2 c}{\partial \theta \partial t} = \begin{pmatrix} 0 \\ -\cos(t)\sin(\theta) \\ \cos(t)\cos(\theta) \end{pmatrix} \in T\mathbb{R}^3.$$
>
> This vector is tangent to $S^2(1)$ and therefore represents the actual intrinsic mixed partial. Finally we calculate
>
> $$\frac{\partial^3 c}{\partial t \partial \theta \partial t} = \begin{pmatrix} 0 \\ \sin(t)\sin(\theta) \\ -\sin(t)\cos(\theta) \end{pmatrix} \in T\mathbb{R}^3,$$
>
> $$\frac{\partial^3 c}{\partial \theta \partial t^2} = \begin{pmatrix} 0 \\ \sin(t)\sin(\theta) \\ -\sin(t)\cos(\theta) \end{pmatrix} \in T\mathbb{R}^3.$$
>
> These are equal as we would expect in $\mathbb{R}^3$. They are also both tangent to $S^2(1)$. The first term is consequently $\frac{\partial^3 c}{\partial t \partial \theta \partial t}$ as computed in $S^2(1)$. The second has no meaning in $S^2(1)$ as we are supposed to first project $\frac{\partial^2 c}{\partial t^2}$ on to $S^2(1)$ before computing $\frac{\partial}{\partial \theta}\frac{\partial^2 c}{\partial t^2}$ in $\mathbb{R}^3$ and then again project to $S^2(1)$. It follows that in $S^2(1)$ we have
>
> $$\frac{\partial^3 c}{\partial \theta \partial t^2} = 0$$
>
> while
>
> $$\frac{\partial^3 c}{\partial t \partial \theta \partial t} \neq 0.$$
>
> In this example it is also interesting to note that the equator $t = 0$ given by $\theta \mapsto c(0, \theta)$ is a geodesic and that $\frac{\partial^2 c}{\partial \theta \partial t} = 0$ along this equator.

We are now ready to prove what happens when the first two partials in a third-order partial are interchanged.

> [!lemma] Lemma 6.1.2
> The third mixed partials are related to the curvatures by the formula:
> $$\frac{\partial^3 c}{\partial u \partial s \partial t} - \frac{\partial^3 c}{\partial s \partial u \partial t} = R\left(\frac{\partial c}{\partial u}, \frac{\partial c}{\partial s}\right)\frac{\partial c}{\partial t}.$$

> [!proof]
> This result is hardly surprising if we recall the definition of curvature and think of these partial derivatives as covariant derivatives. It is, however, not so clear what happens when the derivatives are not covariant derivatives. We are consequently forced to do the calculation in local coordinates. To simplify matters assume that we are at a point $p = c(u, s, t)$, where $g_{ij}|_p = \delta_{ij}$ and $\Gamma_{ij}^k|_p = 0$. This implies that
>
> $$\frac{\partial}{\partial u}(\partial_i)|_p = 0.$$
>
> Thus
>
> $$\frac{\partial^3 c}{\partial u \partial s \partial t}\bigg|_p = \frac{\partial}{\partial u}\left(\frac{\partial^2 c^l}{\partial s \partial t}\partial_l + \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\Gamma_{ij}^l\partial_l\right)$$
>
> $$= \frac{\partial^3 c^l}{\partial u \partial s \partial t}\partial_l + \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial}{\partial u}\left(\Gamma_{ij}^l\right)\partial_l$$
>
> $$= \frac{\partial^3 c^l}{\partial u \partial s \partial t}\partial_l + \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}\left(\partial_k\Gamma_{ij}^l\right)\partial_l,$$
>
> $$\frac{\partial^3 c}{\partial s \partial u \partial t}\bigg|_p = \frac{\partial^3 c^l}{\partial s \partial u \partial t}\partial_l + \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial u}\frac{\partial c^k}{\partial s}\left(\partial_k\Gamma_{ij}^l\right)\partial_l.$$
>
> Using our formula for $R_{ijk}^l$ in terms of the Christoffel symbols from section 3.1.6 gives
>
> $$\frac{\partial^3 c}{\partial u \partial s \partial t}\bigg|_p - \frac{\partial^3 c}{\partial s \partial u \partial t}\bigg|_p = \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}\left(\partial_k\Gamma_{ij}^l\right)\partial_l - \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial u}\frac{\partial c^k}{\partial s}\left(\partial_k\Gamma_{ij}^l\right)\partial_l$$
>
> $$= \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}\left(\partial_k\Gamma_{ij}^l\right)\partial_l - \frac{\partial c^i}{\partial t}\frac{\partial c^k}{\partial u}\frac{\partial c^j}{\partial s}\left(\partial_j\Gamma_{ik}^l\right)\partial_l$$
>
> $$= \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}\left(\partial_k\Gamma_{ij}^l - \partial_j\Gamma_{ik}^l\right)\partial_l$$
>
> $$= \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}\left(\partial_k\Gamma_{ji}^l - \partial_j\Gamma_{ki}^l\right)\partial_l$$
>
> $$= \frac{\partial c^i}{\partial t}\frac{\partial c^j}{\partial s}\frac{\partial c^k}{\partial u}R_{kji}^l\partial_l$$
>
> $$= R\left(\frac{\partial c}{\partial u}, \frac{\partial c}{\partial s}\right)\frac{\partial c}{\partial t}.$$
> ∎

<!-- __PDF_TO_OBSIDIAN_CONTINUE_HERE__ -->

### 6.1.3 Parallel Transport

A vector field $V$ along $c$ is said to be parallel along $c$ provided $\nabla_{\dot{c}}V = 0$. We know that the tangent field $\dot{c}$ along a geodesic is parallel. We also just saw in example 6.1.1 that the unit field perpendicular to a great circle in $S^2(1)$ is a parallel field.

If $V, W$ are two parallel fields along $c$, then we clearly have that $g(V, W)$ is constant along $c$. In particular, parallel fields along a curve neither change their lengths nor their angles relative to each other; just as parallel fields in Euclidean space are of constant length and make constant angles. Based on example 6.1.1 we can pictorially describe parallel translation around certain triangles in $S^2(1)$ (see figure 6.1). Exercise 6.7.2 covers some basic features of parallel translation on surfaces to aid the reader's geometric understanding.

> [!figure]- 🔴 Figure needed: Parallel translation along a spherical triangle
> Source: p.237, Figure 6.1
> Content: Diagram showing parallel translation around certain triangles in $S^2(1)$
> Action: Screenshot or manual reconstruction needed.

> [!theorem] Theorem 6.1.3 (Existence and Uniqueness of Parallel fields)
> If $t_0 \in I$ and $v \in T_{c(t_0)}M$, then there is a unique parallel field $V(t)$ defined on all of $I$ with $V(t_0) = v$.

> [!proof]
> Choose vector fields $E_1(t), \ldots, E_n(t)$ along $c$ forming a basis for $T_{c(t)}M$ for all $t \in I$. Any vector field $V(t)$ along $c$ can then be written $V(t) = V^i(t)E_i(t)$ for $V^i: I \to \mathbb{R}$. Thus,
> $$\nabla_{\dot{c}}V = \nabla_{\dot{c}}V^i(t)E_i(t) + V^i(t)\nabla_{\dot{c}}E_i$$
> $$= \nabla_{\dot{c}}V^j(t)E_j(t) + \sum_{i,j} V^i(t) \cdot \alpha_i^j(t)E_j(t), \text{ where } \nabla_{\dot{c}}E_i = \sum \alpha_i^j(t)E_j$$
> $$= \sum_j \left(\nabla_{\dot{c}}V^j(t) + V^i(t)\alpha_i^j(t)\right)E_j(t):$$
> Hence, $V$ is parallel if and only if $V^1(t), \ldots, V^n(t)$ satisfy the system of first-order linear differential equations
> $$\nabla_{\dot{c}}V^j(t) = -\sum_{i=1}^n \alpha_i^j(t)V^i(t), \quad j = 1, \ldots, n:$$
> Such systems have the property that for given initial values $V^1(t_0), \ldots, V^n(t_0)$, there is a unique solution defined on all of $I$ with these initial values. $\square$

The existence and uniqueness assertion that concluded this proof is a standard theorem in differential equations that we take for granted. The reader should recall that linearity of the equations is a crucial ingredient in showing that the solution exists on all of $I$. Nonlinear equations can fail to have solutions over a whole given interval as we saw with geodesics in section 5.2.

Parallel fields can be used as a substitute for Cartesian coordinates. Namely, if we choose a parallel orthonormal frame $E_1(t), \ldots, E_n(t)$ along the curve $c(t): I \to (M, g)$, then we've seen that any vector field $V(t)$ along $c$ has the property that
$$\frac{dV}{dt} = \frac{d}{dt}\left[V^i(t)E_i(t)\right]$$
$$= \nabla_{\dot{c}}V^i(t)E_i(t) + V^i(t) \cdot \nabla_{\dot{c}}E_i(t)$$
$$= \nabla_{\dot{c}}V^i(t)E_i(t):$$
So $\frac{d}{dt}V$, when represented in the coordinates of the frame, is exactly what we would expect. We could more generally choose a tensor $T$ along $c(t)$ of type $(0, p)$ or $(1, p)$ and compute $\frac{d}{dt}T$. For the sake of simplicity, choose a $(1, 1)$ tensor $S$. Then write $S(E_i(t)) = S_i^j(t)E_j(t)$. Thus $S$ is represented by the matrix $\left[S_i^j(t)\right]$ along the curve. As before, we see that $\frac{d}{dt}S$ is represented by $\left[\nabla_{\dot{c}}S_i^j(t)\right]$.

This makes it possible to understand equations involving only one covariant derivative of the type $\nabla_X$. Let $F_t$ be the local flow near some point $p \in M$ and $H$ a hypersurface in $M$ through $p$ that is perpendicular to $X$. Next choose vector fields $E_1, \ldots, E_n$ on $H$ which form an orthonormal frame for the tangent space to $M$. Finally, construct an orthonormal frame in a neighborhood of $p$ by parallel translating $E_1, \ldots, E_n$ along the integral curves for $X$. Thus, $\nabla_X E_i = 0$, $i = 1, \ldots, n$. Therefore, if we have a vector field $Y$ near $p$, we can write $Y = Y^iE_i$ and $\nabla_X Y = D_X(Y^i)E_i$. Similarly, if $S$ is a $(1, 1)$-tensor, we have $S(E_i) = S_i^jE_i$, and $\nabla_X S$ is represented by $(D_X(S_i^j))$.

In this way parallel frames make covariant derivatives look like standard derivatives in the same fashion that coordinate vector fields make Lie derivatives look like standard derivatives.

### 6.1.4 Jacobi Fields

Another variational field that is often quite useful is the field that comes from a geodesic variation, i.e., $t \mapsto \tilde{c}(s, t)$ is a geodesic for all $s$. We encountered these fields in section 3.2.4 as vector fields satisfying $L_{\partial_r}J = 0$. Here they need only be defined along a single geodesic so the Lie derivative equation no longer makes sense. The second-order Jacobi equation, however, does make sense in this context:
$$0 = \frac{\partial^3 \tilde{c}}{\partial s \partial t^2} = R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t} + \frac{\partial^3 \tilde{c}}{\partial t \partial s \partial t}$$
$$= R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t} + \frac{\partial^3 \tilde{c}}{\partial t^2 \partial s}$$
$$= R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t} + \frac{\partial^2}{\partial t^2}\frac{\partial \tilde{c}}{\partial s}:$$
So if the variational field along $c$ is $J(t) = \frac{\partial \tilde{c}}{\partial s}(0, t)$, then this field solves the linear second-order Jacobi Equation
$$\ddot{J} + R(J, \dot{c})\dot{c} = 0:$$

Given $J(0)$ and $\dot{J}(0)$ there will be a unique Jacobi field with these initial conditions as the Jacobi equation is a linear second-order equation. These variational fields are called Jacobi fields along $c$. In case $J(0) = 0$, they can easily be constructed via the geodesic variation
$$\tilde{c}(s, t) = \exp_p\left(t\left[\dot{c}(0) + s \dot{J}(0)\right]\right):$$

Since $\tilde{c}(s, 0) = p$ for all $s$ we must have $J(0) = \frac{\partial \tilde{c}}{\partial s}(0, 0) = 0$. The derivative is computed as follows:
$$\frac{\partial^2 \tilde{c}}{\partial t \partial s}(0, 0) = \frac{\partial^2 \tilde{c}}{\partial s \partial t}(0, 0)$$
$$= \frac{\partial}{\partial s}\left[\dot{c}(0) + s \dot{J}(0)\right]\bigg|_{s=0}$$
$$= \dot{J}(0):$$

What is particularly interesting about these Jacobi fields is that they control two things we are interesting in studying.

First, observe that they tie in with the differential of the exponential map since
$$J(t) = \frac{\partial \tilde{c}}{\partial s}(0, t)$$
$$= \frac{\partial}{\partial s}\exp_p\left(t\left[\dot{c}(0) + s \dot{J}(0)\right]\right)\bigg|_{(0,t)}$$
$$= D\exp_p\left(\frac{\partial}{\partial s}\left[t\left(\dot{c}(0) + s \dot{J}(0)\right)\right]\right)\bigg|_{(0,t)}$$
$$= D\exp_p\left(t\dot{J}(0)\right);$$

where we think of $t\dot{J}(0) \in T_{t\dot{c}(0)}T_pM$. This shows, in particular, that $D\exp_p$ is nonsingular at $t_0v$ if and only if for each vector $J(t_0) \in T_{\exp_p(t_0v)}M$ there is a Jacobi field along $t \mapsto \exp_p(tv)$ that vanishes at $t = 0$ and has value $J(t_0)$ at $t_0$.

Second, Jacobi fields can also be used to calculate the Hessian of the function $r(x) = |x - p|$. Assume that $c(t)$ is a unit speed geodesic with $c(0) = p$ and $J(t)$ a Jacobi field along $c$ with $J(0) = 0$. As long as $t\dot{c}(0) \in \text{seg}_p^0$, it follows that $\dot{c}(t) = \nabla r|_{c(t)}$ and consequently:
$$\text{Hess}\, r(J(t), J(t)) = g\left(\nabla_{J(t)}\nabla r, J(t)\right)$$
$$= g\left(\frac{\partial^2 \tilde{c}}{\partial s \partial t}, J\right)\bigg|_{(0,t)}$$
$$= g\left(\frac{\partial^2 \tilde{c}}{\partial t \partial s}, J\right)\bigg|_{(0,t)}$$
$$= g\left(\dot{J}(t), J(t)\right):$$

### 6.1.5 Second Variation of Energy

Recall from section 5.4 that all geodesics are stationary points for the energy functional. To better understand what happens near a geodesic we do exactly what we would do in calculus, namely, compute the second derivative of any variation of a geodesic.

> [!theorem] Theorem 6.1.4 (Synge's second variation formula, 1926)
> If $\tilde{c}: (-\epsilon, \epsilon) \times [a, b]$ is a smooth variation of a geodesic $c(t) = \tilde{c}(0, t)$, then
> $$\frac{d^2E(c_s)}{ds^2}\bigg|_{s=0} = \int_a^b \left|\frac{\partial^2 \tilde{c}}{\partial t \partial s}\right|^2 dt - \int_a^b g\left(R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t}, \frac{\partial \tilde{c}}{\partial s}\right) dt + g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_a^b:$$

> [!proof]
> The first variation formula (see lemma 5.4.2) tells us that
> $$\frac{dE(c_s)}{ds} = -\int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial t^2}\right) dt + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_{(s,b)}^{(s,a)}:$$
> With this in mind we can calculate
> $$\frac{\partial^2 E(c_s)}{\partial s^2} = -\frac{\partial}{\partial s}\int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial t^2}\right) dt + \frac{\partial}{\partial s}g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_{(s,b)}^{(s,a)}$$
> $$= -\int_a^b g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial^2 \tilde{c}}{\partial t^2}\right) dt - \int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^3 \tilde{c}}{\partial s \partial t^2}\right) dt$$
> $$+ g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_{(s,b)}^{(s,a)} + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial s \partial t}\right)\bigg|_{(s,b)}^{(s,a)}:$$

Setting $s = 0$ and using that $c(0, t)$ is a geodesic we obtain
$$\frac{\partial^2 E(c_s)}{\partial s^2}\bigg|_{s=0} = -\int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^3 \tilde{c}}{\partial s \partial t^2}\right) dt + g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_b^a + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial s \partial t}\right)\bigg|_b^a$$
$$= -\int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t}\right) dt - \int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^3 \tilde{c}}{\partial t \partial s \partial t}\right) dt$$
$$+ g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_b^a + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial s \partial t}\right)\bigg|_b^a$$
$$= -\int_a^b g\left(\frac{\partial \tilde{c}}{\partial s}, R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t}\right) dt + \int_a^b g\left(\frac{\partial^2 \tilde{c}}{\partial t \partial s}, \frac{\partial^2 \tilde{c}}{\partial t \partial s}\right) dt$$
$$+ g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_b^a + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial s \partial t}\right)\bigg|_b^a$$
$$= \int_a^b \left|\frac{\partial^2 \tilde{c}}{\partial t \partial s}\right|^2 dt - \int_a^b g\left(R\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial \tilde{c}}{\partial t}\right)\frac{\partial \tilde{c}}{\partial t}, \frac{\partial \tilde{c}}{\partial s}\right) dt$$
$$+ g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \frac{\partial \tilde{c}}{\partial t}\right)\bigg|_b^a + g\left(\frac{\partial \tilde{c}}{\partial s}, \frac{\partial^2 \tilde{c}}{\partial s \partial t}\right)\bigg|_b^a:$$

<!-- __PDF_TO_OBSIDIAN_CONTINUE_HERE__ -->

$$\int_a^b \left|\dot{V}\right|^2 dt - \int_a^b g(R(V, \dot{c})\dot{c}, V) dt$$

Another special case occurs when the variational field is parallel $\dot{V} = 0$. In this case the first term drops out:

$$\frac{d^2 E(c_s)}{ds^2}\bigg|_{s=0} = -\int_a^b g(R(V, \dot{c})\dot{c}, V) dt + g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \dot{c}\right)\bigg|_a^b$$

but the formula still depends on the variation and not just on $V$. If, however, we select the variation such that $s \mapsto \tilde{c}(s, t)$ are geodesics, then the last term also drops out.

## 6.2 Nonpositive Sectional Curvature

In this section we show that the exponential map $\exp_p: T_pM \to M$ is a covering map, provided $(M, g)$ is complete and has nonpositive sectional curvature everywhere. This implies, in particular, that no compact simply connected manifold admits such a metric. We shall also prove some interesting results about the fundamental groups of such manifolds.

The first observation about manifolds with nonpositive curvature is that any geodesic from $p$ to $q$ must be a local minimum for $E: \Omega(p, q) \to [0, \infty)$ by our second variation formula. This is in sharp contrast to what we shall prove in positive curvature, where sufficiently long geodesics can never be local minima.

Recall from our discussion of the fundamental equations in section 3.2 and 3.2.4 that Jacobi fields seem particularly well-suited for the task of studying nonpositive curvature. This will be borne out here and later in section 6.4.

### 6.2.1 Manifolds Without Conjugate Points

We start with a result that gives strong restrictions on the behavior of the exponential map.

> [!lemma] Lemma 6.2.1
> If $\exp_p: T_pM \to M$ is nonsingular everywhere, i.e., has no critical points, then it is a covering map.

> [!proof]
> By definition $\exp_p$ is an immersion, so on $T_pM$ choose the pullback metric to make it into a local Riemannian isometry. We then know from lemma 5.6.4 that $\exp_p$ is a covering map provided this new metric on $T_pM$ is complete. To see this, simply observe that the metric is geodesically complete at the origin, since straight lines through the origin are still geodesics.

We can now prove our first big result. It was originally established by Mangoldt for surfaces. Hadamard in a survey article offered a different proof. Cartan extended the result to higher dimensions under the assumption that the manifold is metrically complete.

> [!theorem] Theorem 6.2.2 (Mangoldt, 1881, Hadamard, 1889, and Cartan, 1925)
> If $(M, g)$ is complete, connected, and has $\sec \leq 0$, then the universal covering is diffeomorphic to $\mathbb{R}^n$.

> [!proof]
> The goal is to show that $|D \exp_p(w)| > 0$ for all nonzero $w \in T_vT_pM$. This will imply that $\exp_p$ is nonsingular everywhere and hence a covering map.
>
> Select a Jacobi field $J$ along $c(t) = \exp_p(tv)$ such that $J(0) = 0$ and $\dot{J}(0) = w$ so that $|D \exp_p(w)| = |J(1)|$. Consider the function $t \mapsto \frac{1}{2}|J(t)|^2$ and its first and second derivatives:
>
> $$\frac{d}{dt}\left(\frac{1}{2}|J(t)|^2\right) = g(\dot{J}, J)$$
>
> $$\frac{d^2}{dt^2}\left(\frac{1}{2}|J(t)|^2\right) = \frac{d}{dt}g(\dot{J}, J) = g(\ddot{J}, J) + g(\dot{J}, \dot{J}) = -g(R(J, \dot{c})\dot{c}, J) + |\dot{J}|^2 \geq |\dot{J}|^2$$
>
> The last inequality follows from the assumption that $g(R(x, y)y, x) \leq 0$ for all tangent vectors $x, y$. Integrating this inequality gives
>
> $$g(\dot{J}, J) \geq \int_0^t |\dot{J}|^2 dt + g(\dot{J}(0), J(0)) = \int_0^t |\dot{J}|^2 dt > 0$$
>
> unless $\dot{J}(t) = 0$ for all $t$, in which case $\dot{J}(0) = w = 0$. Assuming $w \neq 0$, integrating the last inequality yields
>
> $$\frac{1}{2}|J(t)|^2 > 0$$
>
> which is what we wanted to prove.

No similar theorem can hold for Riemannian manifolds with $\text{Ric} \leq 0$ or $\text{scal} \leq 0$, since we saw in sections 4.2.3 and 4.2.5 that there exist Ricci flat metrics on $\mathbb{R}^2 \times S^{n-2}$ and scalar flat metrics on $\mathbb{R} \times S^{n-1}$.

### 6.2.2 The Fundamental Group in Nonpositive Curvature

We are going to prove two results on the structure of the fundamental group for manifolds with nonpositive curvature. The interested reader is referred to the book by Eberlein [38] for further results on manifolds with nonpositive curvature.

First we need a little preparation. Let $(M, g)$ be a complete simply connected Riemannian manifold of nonpositive curvature. The two key properties we use are that any two points in $M$ lie on a unique geodesic, and that distance functions are everywhere smooth and convex.

We just saw that $\exp_p: T_pM \to M$ is a diffeomorphism for all $p \in M$. This shows, as in Euclidean space, that there is only one geodesic through $p$ and $q (\neq p)$.

This also shows that the distance function $|xp|$ is smooth on $M \setminus \{p\}$. The modified distance function

$$x \mapsto f_0(x) = f_{0,p}(x) = \frac{1}{2}|xp|^2 = \frac{1}{2}(r(x))^2$$

is then smooth everywhere and its Hessian is given by

$$\text{Hess } f_0 = dr^2 + r \text{ Hess } r$$

If $J(t)$ is a Jacobi field along a unit speed geodesic emanating from $p$ with $J(0) = 0$, then from section 6.1.4

$$\text{Hess } r(J(b), J(b)) = g(\dot{J}(b), J(b)) \geq \int_0^b |\dot{J}|^2 dt > 0$$

Since $J(b)$ can be arbitrary we have shown that the Hessian is positive definite. If $c$ is a geodesic, this implies that $f_0 \circ c$ is convex as

$$\frac{d}{dt}f_0 \circ c = g(\nabla f_0, \dot{c})$$

$$\frac{d^2}{dt^2}f_0 \circ c = \frac{d}{dt}g(\nabla f_0, \dot{c}) = g(\nabla_{\dot{c}}\nabla f_0, \dot{c}) + g(\nabla f_0, \ddot{c}) = \text{Hess } f_0(\dot{c}, \dot{c}) > 0$$

With this in mind we can generalize the idea of convexity slightly (see also section 7.1.3). A function is (strictly) convex if its restriction to all geodesics is (strictly) convex. One sees that the maximum of any collection of convex functions is again convex (you only need to prove this in dimension 1, as we can restrict to geodesics). Given a finite collection of points $p_1, \ldots, p_k \in M$, we can in particular consider the strictly convex function

$$x \mapsto \max\{f_{0,p_1}(x), \ldots, f_{0,p_k}(x)\}$$

In general, any proper, nonnegative, and strictly convex function has a unique minimum. To see this, first note that there must be a minimum as the function is proper and bounded from below. If there were two minima, then the function would be strictly convex when restricted to a geodesic joining these two minima. But then the function would have smaller values on the interior of this segment than at the endpoints.

The uniquely defined minimum for

$$x \mapsto \max\{f_{0,p_1}(x), \ldots, f_{0,p_k}(x)\}$$

is denoted by $\text{cm}_1\{p_1, \ldots, p_k\}$ and called the $L^\infty$ center of mass of $\{p_1, \ldots, p_k\}$. It is the center $q$ of the smallest ball $B(q, R) \supset \{p_1, \ldots, p_k\}$. If instead we had considered

$$x \mapsto \sum_{i=1}^k f_{0,p_i}(x)$$

we would have arrived at the usual center of mass also known as the $L^2$ center of mass.

The first theorem is concerned with fixed points of isometries.

> [!theorem] Theorem 6.2.3 (Cartan, 1925)
> If $(M, g)$ is a complete simply connected Riemannian manifold of nonpositive curvature, then any isometry $F: M \to M$ of finite order has a fixed point.

> [!proof]
> The idea, which is borrowed from Euclidean space, is that the center of mass of any orbit must be a fixed point. First, define the order of $F$ as the smallest integer $k$ such that $F^k = \text{id}$. Second, for any $p \in M$ consider the orbit
> $$\{p, F(p), \ldots, F^{k-1}(p)\}$$
> of $p$. Then construct the center of mass
> $$q = \text{cm}\{p, F(p), \ldots, F^{k-1}(p)\}.$$
> We claim that $F(q) = q$. This is because the function
> $$x \mapsto f(x) = \max\{f_{0,p}(x), \ldots, f_{0,F^{k-1}(p)}(x)\}$$
> has not only $q$ as a minimum, but also $F(q)$. To see this just observe that since $F$ is an isometry, we have
> $$f(F(q)) = \max\{f_{0,p}(F(q)), \ldots, f_{0,F^{k-1}(p)}(F(q))\}$$
> $$= \frac{1}{2}\left(\max\{|F(q) - p|, \ldots, |F(q) - F^{k-1}(p)|\}\right)^2$$
> $$= \frac{1}{2}\left(\max\{|F(q) - F^k(p)|, \ldots, |F(q) - F^{k-1}(p)|\}\right)^2$$
> $$= \frac{1}{2}\left(\max\{|q - F^{k-1}(p)|, \ldots, |q - F^{k-2}(p)|\}\right)^2$$
> $$= f(q).$$
> The uniqueness of minima for strictly convex functions now implies $F(q) = q$. ∎

> [!corollary] Corollary 6.2.4
> If $(M, g)$ is a complete Riemannian manifold of nonpositive curvature, then the fundamental group is torsion free, i.e., all nontrivial elements have infinite order.

The second theorem requires more preparation and a more careful analysis of distance functions. Suppose again that $(M, g)$ is complete, simply connected and of nonpositive curvature. Let us fix a modified distance function: $x \mapsto \frac{1}{2}r^2 = f_0(x)$ and a unit speed geodesic $c: \mathbb{R} \to M$. The Hessian estimate from above only implies that $\frac{d^2}{dt^2}(f_0 \circ c) \geq 0$. However, we know that this second derivative is 1 in Euclidean space. So it shouldn't be surprising that we have a much better quantitative estimate.

> [!lemma] Lemma 6.2.5
> If $(M, g)$ has nonpositive curvature, then any modified distance function satisfies:
> $$\text{Hess } f_0 \geq g.$$

> [!proof]
> We follow the notation in the proof of theorem 6.2.2. If $r(x) = |x - p|$, then
> $$\text{Hess }\frac{1}{2}r^2 = dr^2 + r \cdot \text{Hess } r.$$
> So the claim follows if we can show that
> $$r \cdot \text{Hess } r \geq g_r,$$
> where $g_r = dr^2 + g_r$. This estimate in turn holds if we can prove that
> $$t \cdot \text{Hess } r(J(t), J(t)) = t \cdot g\left(\frac{P}{J(t)}, J(t)\right) \geq g(J(t), J(t)).$$
> The reason behind the proof of this is slightly tricky and is known as Jacobi field comparison. Consider the ratio
> $$\phi(t) = \frac{|J(t)|^2}{g\left(\frac{P}{J(t)}, J(t)\right)}.$$
> By l'Hospital's rule it follows that
> $$\phi(0) = \frac{2g\left(\frac{P}{J(0)}, J(0)\right) - g(R(J(0), \dot{c}(0))\dot{c}(0), J(0)) + |\dot{J}(0)|^2}{|\dot{J}(0)|^2} = 0.$$
> 
> Using that the sectional curvature is nonpositive and then the Cauchy-Schwarz inequality it follows that the derivative satisfies
> $$\dot{\phi}(t) = \frac{2\left(g\left(J, \dot{J}\right)\right)^2 - |\dot{J}|^2|J|^2 + g(R(J, \dot{c})\dot{c}, J)|J|^2}{\left(g\left(J, \dot{J}\right)\right)^2} \geq \frac{2\left(g\left(J, \dot{J}\right)\right)^2 - |\dot{J}|^2|J|^2}{\left(g\left(J, \dot{J}\right)\right)^2} \geq \frac{2\left(g\left(J, \dot{J}\right)\right)^2 - \left(g\left(J, \dot{J}\right)\right)^2}{\left(g\left(J, \dot{J}\right)\right)^2} = 1.$$
> Hence $\phi(t) \geq t$ and $t \cdot g\left(J(t), \dot{J}(t)\right) \geq |J(t)|^2$. ∎

Integrating the inequality
$$\frac{d^2}{dt^2}(f_{0,p} \circ c) \geq 1,$$
where $c$ is a unit speed geodesic, yields
$$|p - c(t)|^2 \geq |p - c(0)|^2 + 2g\left(\nabla f_{0,p}, \dot{c}(0)\right) \cdot t + t^2$$
$$= |p - c(0)|^2 + |c(0) - c(t)|^2 + 2|p - c(0)||c(0) - c(t)|\cos\sigma\left(\nabla f_{0,p}, \dot{c}(0)\right).$$

Thus, if we have a triangle in $M$ with sides lengths $a, b, c$ and where the angle opposite $a$ is $\alpha$, then
$$a^2 \geq b^2 + c^2 - 2bc\cos\alpha.$$

From this, one can conclude that the angle sum in any triangle is $\leq \pi$, and more generally that the angle sum in any quadrilateral is $\leq 2\pi$. See figure 6.2.

> [!figure]- 🔴 Figure needed: Triangle and quadrilateral in negative curvature
> Source: p.246, Figure 6.2
> Content: Illustration showing a triangle and quadrilateral in a negatively curved space, demonstrating the angle sum properties
> Action: Screenshot or manual reconstruction needed.

Now suppose that $(M, g)$ has negative curvature. Then it must follow that all of the above inequalities are strict, unless $p$ lies on the geodesic $c$. In particular, the angle sum in any nondegenerate quadrilateral is $< 2\pi$. This will be crucial for the proof of the next theorem.

> [!theorem] Theorem 6.2.6 (Preissmann, 1943)
> If $(M, g)$ is a compact manifold of negative curvature, then any Abelian subgroup of the fundamental group is cyclic. In particular, no compact product manifold $M \times N$ admits a metric with negative curvature.

The proof requires some preliminary results that can also be used in other contexts as they do not assume that the manifold has nonpositive curvature.

An **axis** for an isometry $F: M \to M$ is a geodesic $c: \mathbb{R} \to M$ such that $F(c)$ is a reparametrization of $c$. Since isometries map geodesics to geodesics, it must follow that
$$F \circ c(t) = c(\pm t + a).$$

Note that if $-$ occurs, then $c\left(\frac{a}{2}\right)$ is fixed by $F$. When $F \circ c(t) = c(t + a)$ we call $a$ the **period** of $F$ with respect to $c$. The period depends on the parametrization of $c$.

Given an isometry $F: M \to M$ the **displacement function** is defined as
$$x \mapsto \delta_F(x) = |x - F(x)|.$$

> [!lemma] Lemma 6.2.7
> Let $F: M \to M$ be an isometry on a complete Riemannian manifold. If the displacement function $\delta_F$ has a positive minimum, then $F$ has an axis.

> [!proof]
> Let $\delta_F$ have a minimum at $p \in M$ and $c: [0, 1] \to M$ be a segment from $p$ to $F(p)$. Then $F \circ c$ is a segment from $F(p)$ to $F^2(p)$ with the same speed. We claim that these two geodesics form an angle $\pi$ at $F(p)$ and thus fit together as the geodesic extension of $c$ to $[0, 2]$. If we fix $t \in [0, 1]$, then
> $$\delta_F(p) \geq \delta_F(c(t))$$
> $$= |c(t) - (F \circ c)(t)|$$
> $$\geq |c(t) - c(1)| + |c(1) - (F \circ c)(t)|$$
> $$= |c(t) - c(1)| + |(F \circ c)(0) - (F \circ c)(t)|$$
> $$= |c(t) - c(1)| + |c(0) - c(t)|$$
> $$= |c(0) - c(1)|$$
> $$= |p - F(p)|.$$
> This means that the curve that consists of $c|_{[t,1]}$ followed by $F \circ c|_{[0,t]}$ must be a segment and thus a geodesic by corollary 5.4.4 (see also figure 6.3). This geodesic is obviously just the extension of $c$, so $(F \circ c)(t) = c(1 + t)$. We can repeat this argument forwards and backwards along the extension of $c$ to $\mathbb{R}$ to show that it becomes an axis for $F$ of period 1. ∎

> [!figure]- 🔴 Figure needed: Dilatation and axes
> Source: p.249, Figure 6.3
> Content: Diagram showing dilatation and axes for an isometry, with points p, F(p), F(F(p)), x, F(x), F(s), and geodesics c1, c2
> Action: Screenshot or manual reconstruction needed.

Let $\pi: \tilde{M} \to M$ be the universal cover of $M$. A **deck transformation** $F: \tilde{M} \to \tilde{M}$ is a map such that $\pi \circ F = \pi$, i.e., a lift of $\pi$. As such, it is determined by the value of $F(p) \in \pi^{-1}(q)$ for a given $p \in \pi^{-1}(q)$. We can think of the fundamental group $\pi_1(M, q)$ as acting by deck transformations: Given $p \in \pi^{-1}(q)$, a loop in $[\alpha] \in \pi_1(M, q)$ yields a deck transformation with $F(p) = \tilde{\alpha}(1)$, where $\tilde{\alpha}$ is the lift of $\alpha$ such that $p = \tilde{\alpha}(0)$. Finally note that in the Riemannian setting deck transformations are isometries since $\pi: \tilde{M} \to M$ is a local isometry.

> [!lemma] Lemma 6.2.8
> If $F: \tilde{M} \to \tilde{M}$ is a nontrivial deck transformation on the universal cover over a compact base $M$, then the dilation $\delta_F$ has a positive minimum. The axis corresponding to this minimum is mapped to a closed geodesic in $M$ whose length is minimal in its free homotopy class. Moreover, $\delta_F(x) \geq 2\,\text{inj}(M)$.

> [!proof]
> Fix a nontrivial deck transformation $F: \tilde{M} \to \tilde{M}$. We start by characterizing the loops in $M$ generated by $F$. First we show that when $x_i \in \tilde{M}$, $i = 0, 1$ are joined to $F(x_i)$ by curves $c_i: [0, 1] \to \tilde{M}$, then the loops $\pi \circ c_i$ are freely homotopic through a homotopy of loops in $M$. To see this choose a path $H(s, 0): [0, 1] \to \tilde{M}$ with $H(i, 0) = x_i$, $i = 0, 1$. Then define $H(s, 1) = F(H(s, 0))$ and $H(i, t) = c_i(t)$, $i = 0, 1$. This defines $H$ on $\partial([0, 1]^2)$. Simple connectivity of $\tilde{M}$ shows this can be extended to a map $H: [0, 1]^2 \to \tilde{M}$. Now $\pi(H(s, t))$ is the desired homotopy in $M$ since
> $$\pi(H(s, 1)) = \pi \circ F(H(s, 0)) = \pi(H(s, 0)).$$
> 
> Conversely we claim that any loop at $\pi(x_1) \in M$ that is freely homotopic through loops to $\pi \circ c_0$ must lift to a curve from $x_1$ to $F(x_1)$. Let $H: [0, 1]^2 \to M$ be such a homotopy, i.e., $H(0, t) = (\pi \circ c_0)(t)$, $H(s, 0) = H(s, 1)$, and $H(1, 0) = \pi(x_1)$. Let $\tilde{H}$ be the lift of $H$ to $\tilde{M}$ such that $\tilde{H}(0, 0) = x_0$. Unique path lifting guarantees that $c_0(t) = \tilde{H}(0, t)$. Now both $\tilde{H}(s, 0)$ and $\tilde{H}(s, 1)$ are lifts of the same curve $H(s, 0)$. As $F$ is a deck transformation $(F \circ \tilde{H})(s, 0)$ is also a lift of $H(s, 0)$. However,
> $$(F \circ \tilde{H})(0, 0) = \tilde{H}(0, 1)$$
> so it follows that
> $$(F \circ \tilde{H})(s, 0) = \tilde{H}(s, 1).$$
> Letting $s = 1$ gives the claim.
> 
> In particular, we have shown that if $F$ is nontrivial, then none of these loops can be homotopically trivial. This implies that $\delta_F(x) \geq 2\,\text{inj}_\pi(x)(M)$, as otherwise the segment from $x$ to $F(x)$ would generate a loop of length $< 2\,\text{inj}_\pi(x)(M)$. However, such loops are contractible as they lie in $B(\pi(x), \text{inj}_\pi(x)(M))$.
> 
> We are now ready to minimize the dilatation. Consider a sequence $q_i \in \tilde{M}$ such that $\lim \delta_F(q_i) = \inf \delta_F \geq \text{inj } M$ and with it a sequence of segments $\tilde{c}_i: [0, 1] \to \tilde{M}$ with $c_i(0) = q_i$ and $c_i(1) = F(q_i)$. Let $c_i = \pi \circ \tilde{c}_i$ be the corresponding loops in $M$. Since $|\dot{c}_i| = \delta_F(q_i)$, compactness of $M$ implies that after possibly passing to a subsequence we can assume that $\dot{c}_i(0)$ converge to a vector $v \in T_qM$ where $q = \lim c_i(0)$ and $|v| = \inf \delta_F$. Continuity of the exponential map implies that the curves $c_i$ converge to the geodesic $c(t) = \exp_q(tv)$. This geodesic is in turn a loop at $q$ that is freely homotopic through loops to $c_i$ for large $i$; because when $|c_i(t) - c(t)| < \text{inj}(M)$, they can be joined by unique short geodesics resulting in a homotopy. The above characterization of loops generated by $F$, then shows that any lift $\tilde{c}$ of $c$ must satisfy $F(\tilde{c}(0)) = \tilde{c}(1)$. All in all,
> $$\delta_F(\tilde{c}(0)) \leq L(\tilde{c}) = L(c) = |v| = \inf \delta_F.$$
> It is clear that $c$ has minimal length in its free homotopy class. A simple application of the first variation formula (see 5.4.2) then shows that it must be a closed geodesic. ∎

These preliminaries allow us to prove the theorem.

> [!proof] Proof of Theorem 6.2.6
> We know that nontrivial deck transformations have axes. To see that axes are unique in negative curvature, assume that we have two different axes $c_1$ and $c_2$ for $F$. If these intersect in one point, they must, by virtue of being invariant under $F$, intersect in at least two points. But then they must be equal. Thus they do not intersect. Select $p_1 \in c_1$ and $p_2 \in c_2$, and join these points by a segment $\sigma$. Then $F \circ \sigma$ is a segment from $F(p_1)$ to $F(p_2)$. Since $F$ is an isometry that preserves $c_1$ and $c_2$, we see that the adjacent angles along the two axes formed by the quadrilateral $p_1, p_2, F(p_1), F(p_2)$ must add up to $\pi$ (see also figure 6.3). But then the angle sum is $2\pi$, which is not possible unless the quadrilateral is degenerate. That is, all points lie on one geodesic.
> 
> Finally pick a deck transformation $G$ that commutes with $F$. If $1$ is the period, then
> $$(G \circ c)(t + 1) = (G \circ F \circ c)(t) = (F \circ G \circ c)(t).$$
> This implies that $G \circ c$ is an axis for $F$, and so must be $c$ itself. Next consider the group $H$ generated by $F, G$. Any element in this group has $c$ as an axis. Thus we get a map $H \to \mathbb{R}$ that sends an isometry to its uniquely defined period. This map is a homomorphism with trivial kernel. Consider an additive subgroup $A \subset \mathbb{R}$ and let $a = \inf\{x \in A : x > 0\}$. It is easy to check that if $a = 0$, then $A$ is dense, while if $a > 0$, then $A = \{na : n \in \mathbb{Z}\}$. The image of $H$ in $\mathbb{R}$ must have the second property as no nonzero period along $c$ can be smaller than $\frac{\text{inj } M}{|\dot{c}|}$. This shows that $H$ is cyclic. ∎

## 6.3 Positive Curvature

In this section we establish several of the classical results for manifolds with positive curvature. In contrast to the previous section, it is not possible to carry Euclidean geometry over to this setting. So while we try to imitate the results, new techniques are necessary.

In our discussion of the fundamental equations in section 3.2 we saw that using parallel fields most easily gave useful information about Hessians of distance functions when the curvature is nonnegative. This will be confirmed here through the use of suitable variational fields to find the second variation of energy. In section 6.5 below we show how more sophisticated techniques can be used in conjunction with the developments here to establish stronger results.

### 6.3.1 The Diameter Estimate

Our first restriction on positively curved manifolds is an estimate for how long minimal geodesics can be. It was first proven by Bonnet for surfaces and later by Synge for general Riemannian manifolds as an application of his second variation formula.

> [!lemma] Lemma 6.3.1 (Bonnet, 1855 and Synge, 1926)
> If $(M, g)$ satisfies $\sec \geq k > 0$, then geodesics of length $> \pi/\sqrt{k}$ cannot be locally minimizing.

> [!proof]
> Let $c: [0, l] \to M$ be a unit speed geodesic of length $l > \pi/\sqrt{k}$. Along $c$ consider the variational field
> $$V(t) = \sin\left(\frac{\pi}{l} t\right) E(t),$$
> where $E$ is a unit parallel field perpendicular to $c$. Since $V$ vanishes at $t = 0$ and $t = l$, it corresponds to a proper variation. By theorem 6.1.4 the second derivative of this variation is
> $$\frac{d^2E}{ds^2}\bigg|_{s=0} = \int_0^l |\nabla_{\dot{c}}V|^2 dt - \int_0^l g(R(V, \dot{c})\dot{c}, V) dt$$
> $$= \int_0^l \left|\frac{\pi}{l} \cos\left(\frac{\pi}{l} t\right) E(t)\right|^2 dt - \int_0^l g\left(R\left(\sin\left(\frac{\pi}{l} t\right) E(t), \dot{c}\right)\dot{c}, \sin\left(\frac{\pi}{l} t\right) E(t)\right) dt$$
> $$= \left(\frac{\pi}{l}\right)^2 \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - \int_0^l \sin^2\left(\frac{\pi}{l} t\right) \sec(E, \dot{c}) dt$$
> $$\leq \left(\frac{\pi}{l}\right)^2 \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - k \int_0^l \sin^2\left(\frac{\pi}{l} t\right) dt$$
> $$< k \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - k \int_0^l \sin^2\left(\frac{\pi}{l} t\right) dt$$
> $$= 0.$$
> Thus all nearby curves in the variation are shorter than $c$.

The next result is a very interesting and completely elementary consequence of the above result. It seems to have been pointed out first by Hopf-Rinow for surfaces in their famous paper on completeness and soon after by Myers for general Riemannian manifolds.

> [!corollary] Corollary 6.3.2 (Hopf and Rinow, 1931 and Myers, 1932)
> If $(M, g)$ is complete and satisfies $\sec \geq k > 0$, then $M$ is compact and $\text{diam}(M, g) \leq \pi/\sqrt{k} = \text{diam}S^n_k$.
>
> In particular, $M$ has finite fundamental group.

> [!proof]
> As no geodesic of length $> \pi/\sqrt{k}$ can realize the distance between endpoints and $M$ is complete, the diameter cannot exceed $\pi/\sqrt{k}$. Finally use that the universal cover has the same curvature condition to conclude that it must also be compact. Thus, the fundamental group is finite.

These results were later extended to manifolds with positive Ricci curvature by Myers.

> [!theorem] Theorem 6.3.3 (Myers, 1941)
> If $(M, g)$ is a complete Riemannian manifold with $\text{Ric} \geq (n-1)k > 0$, then $\text{diam}(M, g) \leq \pi/\sqrt{k}$. Furthermore, $(M, g)$ has finite fundamental group.

> [!proof]
> It suffices to show as before that no geodesic of length $> \pi/\sqrt{k}$ can be minimal. If $c: [0, l] \to M$ is the geodesic we can select $n - 1$ variational fields
> $$V_i(t) = \sin\left(\frac{\pi}{l} t\right) E_i(t), \quad i = 2, \ldots, n$$
> as before. This time we also assume that $\dot{c}, E_2, \ldots, E_n$ form an orthonormal basis for $T_{c(t)}M$. By adding up the contributions to the second variation formula for each variational field we get
> $$\sum_{i=2}^n \frac{d^2E}{ds^2}\bigg|_{s=0} = \sum_{i=2}^n \left[\int_0^l |\nabla_{\dot{c}}V_i|^2 dt - \int_0^l g(R(V_i, \dot{c})\dot{c}, V_i) dt\right]$$
> $$= (n-1)\left(\frac{\pi}{l}\right)^2 \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - \sum_{i=2}^n \int_0^l \sin^2\left(\frac{\pi}{l} t\right) \sec(E_i, \dot{c}) dt$$
> $$= (n-1)\left(\frac{\pi}{l}\right)^2 \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - \int_0^l \sin^2\left(\frac{\pi}{l} t\right) \text{Ric}(\dot{c}, \dot{c}) dt$$
> $$< (n-1) k \int_0^l \cos^2\left(\frac{\pi}{l} t\right) dt - (n-1) k \int_0^l \sin^2\left(\frac{\pi}{l} t\right) dt$$
> $$< 0.$$
> Thus the second variation is negative for at least one of the variational fields.

> [!example] Example 6.3.4
> The incomplete Riemannian manifold $S^2 - \{\pm p\}$ clearly has constant curvature 1 and infinite fundamental group. To make things worse; the universal covering also has diameter $\pi$.

> [!example] Example 6.3.5
> The manifold $S^1 \times \mathbb{R}^3$ admits a complete doubly warped product metric
> $$dr^2 + \phi^2(r)d\theta^2 + \psi^2(r)ds^2_2,$$
> that has $\text{Ric} > 0$ everywhere. Curvatures are calculated as in 1.4.5. If we define $\phi(t) = t^{1/4}$ and $\psi(t) = t^{3/4}$ for $t \geq 1$, then the Ricci curvature will be positive. Next extend to $[0, 1]$ so that the metric becomes smooth at $t = 0$; the functions are $C^1$ and piecewise smooth at $t = 1$; $\ddot{\phi} < 0$, $0 < \ddot{\psi} \leq 1$; $\dot{\psi} < 0$; and on $[0, 1]$ $\ddot{\phi} \geq 0$. This will result in a $C^1$ metric that has positive Ricci curvature except at $t = 1$. Finally, smooth out $\phi$ at $t = 1$ ensuring that the Ricci curvature stays positive.

### 6.3.2 The Fundamental Group in Even Dimensions

For the next result we need to study what happens when we have a closed geodesic in a Riemannian manifold of positive curvature.

Let $c: [0, l] \to M$ be a closed unit speed geodesic, i.e., $\dot{c}(0) = \dot{c}(l)$. Let $p = c(0) = c(l)$ and consider parallel translation along $c$. This defines a linear isometry $P: T_pM \to T_pM$. Since $c$ is a closed geodesic we have that $P(\dot{c}(0)) = \dot{c}(l) = \dot{c}(0)$. Thus, $P$ preserves the orthogonal complement to $\dot{c}(0)$ in $T_pM$. Now recall that linear isometries $L: \mathbb{R}^k \to \mathbb{R}^k$ with $\det L = (-1)^{k+1}$ have 1 as an eigenvalue, i.e., $L(v) = v$ for some $v \in \mathbb{R}^k$. We can use this to construct a closed parallel field around $c$ in one of two ways:

(1) If $M$ is orientable and even-dimensional, then parallel translation around a closed geodesic preserves orientation, i.e., $\det = 1$. Since the orthogonal complement to $\dot{c}(t)$ in $T_pM$ is odd dimensional there must exist a closed parallel field around $c$.

(2) If $M$ is not orientable, has odd dimension, and furthermore, $c$ is a nonorientable loop, i.e., the orientation changes as we go around this loop, then parallel translation around $c$ is orientation reversing, i.e., $\det = -1$. Now, the orthogonal complement to $\dot{c}(t)$ in $T_pM$ is even-dimensional, and since $P(\dot{c}(0)) = \dot{c}(0)$, it follows that the restriction of $P$ to this even-dimensional subspace still has $\det = -1$. Thus, we get a closed parallel field in this case as well.

> [!figure]- 🔴 Figure needed: Closed geodesic with shorter curves nearby
> Source: p.253, Figure 6.4
> Content: Diagram showing what happens when the closed geodesic is the equator on the standard sphere, with the parallel field and shorter curves (latitudes close to the equator)
> Action: Screenshot or manual reconstruction needed.

In figure 6.4 we have sketched what happens when the closed geodesic is the equator on the standard sphere. In this case there is only one choice for the parallel field, and the shorter curves are the latitudes close to the equator.

This discussion leads to an interesting and surprising topological result for positively curved manifolds.

> [!theorem] Theorem 6.3.6 (Synge, 1936)
> Let $M$ be a compact manifold with $\sec > 0$.
> 1. If $M$ is even-dimensional and orientable, then $M$ is simply connected.
> 2. If $M$ is odd-dimensional, then $M$ is orientable.

> [!proof]
> The proof goes by contradiction. So in either case assume we have a nontrivial universal covering $\pi: \tilde{M} \to M$. Let $F$ be a nontrivial deck transformation that in the odd-dimensional case reverses orientation. From lemma 6.2.8 we obtain a unit speed geodesic (axis) $\tilde{c}: \mathbb{R} \to \tilde{M}$ that is mapped to itself by $F$. Moreover, $c = \pi \circ \tilde{c}$ is the shortest curve in its free homotopy class in $M$ when restricted to an interval $[a, b]$ of length $b - a = \min F$.
> 
> In both cases our assumptions are such that the closed geodesics have closed perpendicular parallel fields. We can now use the second variation formula with this parallel field as variational field. Note that the variation isn't proper, but since the geodesic is closed the end point terms cancel each other
> 
> $$
> \frac{d^2 E(c_s)}{ds^2}\bigg|_{s=0} = -\int_a^b g(R(E, \dot{c})\dot{c}, E)\, dt + g\left(\frac{\partial^2 \tilde{c}}{\partial s^2}, \dot{c}\right)\bigg|_a^b
> $$
> 
> $$
> = -\int_a^b g(R(E, \dot{c})\dot{c}, E)\, dt
> $$
> 
> $$
> = -\int_a^b \sec(E, \dot{c})\, dt
> $$
> 
> $$
> < 0.
> $$
> 
> Thus all nearby curves in this variation are closed curves whose lengths are shorter than $c$. This contradicts our choice of $c$ as the shortest curve in its free homotopy class. ∎

The first important conclusion we get from this result is that while $\mathbb{RP}^2 \times \mathbb{RP}^2$ has positive Ricci curvature, it cannot support a metric of positive sectional curvature. It is, on the other hand, completely unknown whether $S^2 \times S^2$ admits a metric of positive sectional curvature. This is known as the Hopf problem. Recall that in section 6.2.2 we showed, using fundamental group considerations, that no product manifold admits negative curvature. In this case, fundamental group considerations cannot take us as far.

## 6.4 Basic Comparison Estimates

In this section we lay the foundations for the comparison estimates that will be needed later in the text.

### 6.4.1 Riccati Comparison

We start with a general result for differential inequalities.

> [!proposition] Proposition 6.4.1 (Riccati Comparison Principle)
> If we have two smooth functions $\lambda_{1,2}: (0, b) \to \mathbb{R}$ such that
> 
> $$
> \dot{\lambda}_1 + \lambda_1^2 \leq \dot{\lambda}_2 + \lambda_2^2,
> $$
> 
> then
> 
> $$
> \lambda_2 - \lambda_1 \leq \limsup_{t \to 0} (\lambda_2(t) - \lambda_1(t)).
> $$

> [!proof]
> Let $F(t) = \int (\lambda_2 + \lambda_1)\, dt$ be an antiderivative for $\lambda_2 + \lambda_1$ on $(0, b)$. The claim follows since the function $(\lambda_2 - \lambda_1)e^F$ is increasing:
> 
> $$
> \frac{d}{dt}\left[(\lambda_2 - \lambda_1)e^F\right] = \left(\dot{\lambda}_2 - \dot{\lambda}_1 + \lambda_2^2 - \lambda_1^2\right)e^F \geq 0.
> $$
> 
> ∎

This can be turned into more concrete estimates.

> [!corollary] Corollary 6.4.2 (Riccati Comparison Estimate)
> Consider a smooth function $\lambda: (0, b) \to \mathbb{R}$ with $\lambda(t) = \frac{1}{t} + O(t)$ and a real constant $k$.
> 
> 1. If $\dot{\lambda} + \lambda^2 \leq -k$, then
>    
>    $$
>    \lambda(t) \leq \frac{\text{sn}_k'(t)}{\text{sn}_k(t)}.
>    $$
>    
>    Moreover, $b \leq \frac{\pi}{\sqrt{k}}$ when $k > 0$.
> 
> 2. If $-k \leq \dot{\lambda} + \lambda^2$, then
>    
>    $$
>    \frac{\text{sn}_k'(t)}{\text{sn}_k(t)} \leq \lambda(t)
>    $$
>    
>    for all $t < b$ when $k \leq 0$ and $t < \min\{b, \frac{\pi}{\sqrt{k}}\}$ when $k > 0$.

> [!proof]
> First note that for any $k$ the comparison function satisfies
> 
> $$
> \frac{\text{sn}_k'(t)}{\text{sn}_k(t)} = \frac{1}{t} + O(t)
> $$
> 
> and solves
> 
> $$
> \dot{\lambda} + \lambda^2 = -k.
> $$
> 
> When $k > 0$ this function is only defined on $(0, \frac{\pi}{\sqrt{k}})$ and
> 
> $$
> \lim_{t \to \frac{\pi}{\sqrt{k}}} \frac{\text{sn}_k'(t)}{\text{sn}_k(t)} = -\infty.
> $$
> 
> In case $\dot{\lambda} + \lambda^2 \leq -k$ this will prevent $\lambda$ from being smooth when $b > \frac{\pi}{\sqrt{k}}$.
> 
> Similarly, when $-k \leq \dot{\lambda} + \lambda^2$ we are forced to assume that $b \leq \frac{\pi}{\sqrt{k}}$ in order for the comparison function to be defined. ∎

Let us apply these results to one of the most commonly occurring geometric situations. Suppose that on a Riemannian manifold $(M, g)$ we have introduced exponential coordinates around a point $p \in M$ so that $g = dr^2 + g_r$ on a star shaped open set in $T_pM \setminus \{0\} = (0, \infty) \times S^{n-1}$. Along any given geodesic from $p$ the metric $g_r$ is thought of as being on $S^{n-1}$. It is not important for the next result that $M$ be complete as it is essentially local in nature.

> [!theorem] Theorem 6.4.3 (Rauch Comparison)
> Assume that $(M, g)$ satisfies $k \leq \sec \leq K$. If $g = dr^2 + g_r$ represents the metric in the polar coordinates, then
> 
> $$
> \frac{\text{sn}_K'(r)}{\text{sn}_K(r)}g_r \leq \text{Hess}\, r \leq \frac{\text{sn}_k'(r)}{\text{sn}_k(r)}g_r.
> $$
> 
> Consequently, the modified distance functions from corollary 4.3.4 satisfy:
> 
> $$
> \text{Hess}\, f_k \leq (1 - kf_k)g,
> $$
> 
> $$
> \text{Hess}\, f_K \geq (1 - Kf_K)g.
> $$

> [!proof]
> It'll be convenient to use slightly different techniques for lower and upper curvature bounds. Specifically, for lower curvature bounds parallel fields are the easiest to use, while Jacobi fields are better suited to upper curvature bounds.
> 
> In both cases assume that we have a unit speed geodesic $c(t)$ with $c(0) = p$ and that $t \in [0, b]$, with $c([0, b]) \subset \exp_p\left(\text{seg}^0_p\right)$ so that $r(x) = |x|$ is smooth along the entire geodesic segment.
> 
> We start with the upper curvature situation as it is quite close in spirit to lemma 6.2.5. In fact that proof can be easily adapted to the case where $\sec \leq K \leq 0$, but when $K > 0$ it runs into trouble (see exercise 6.7.11). Instead consider the reciprocal ratio
> 
> $$
> \lambda(t) = \frac{g(\dot{J}, J)}{|J|^2} = \frac{\text{Hess}\, r\left(\frac{J}{|J|}, \frac{J}{|J|}\right)}{1}
> $$
> 
> for a Jacobi field along $c$ with $J(0) = 0$ and $\dot{J}(0) \perp \dot{c}(0)$. It follows that $J(t) \perp \dot{c}(t)$ for all $t$ and
> 
> $$
> \dot{\lambda} = -\frac{R(J, \dot{c}, \dot{c}, J)}{|J|^2} + \frac{|\dot{J}|^2}{|J|^2} - \frac{2(g(\dot{J}, J))^2}{|J|^4}
> $$
> 
> $$
> \leq -K + \frac{|\dot{J}|^2}{|J|^2} - \frac{2\left(\frac{g(\dot{J}, J)}{|J|^2}\right)^2}{1}
> $$
> 
> $$
> \leq -K - \lambda^2.
> $$
> 
> In case there is a lower curvature bound, select instead a unit parallel field $E$ along $c$ that is perpendicular to $\dot{c}$ and consider
> 
> $$
> \lambda = g(S(E), E) = \text{Hess}\, r(E, E).
> $$
> 
> From part (2) of proposition 3.2.11 we obtain
> 
> $$
> \dot{\lambda} = -R(E, \dot{c}, \dot{c}, E) - g(S(E), S(E))
> $$
> 
> $$
> \leq -k - (g(S(E), E))^2
> $$
> 
> $$
> = -k - \lambda^2.
> $$
> 
> In both cases we have the initial conditions that $\lambda(t) = \frac{1}{t} + O(t)$ and so we obtain the desired inequalities for $\lambda$ and hence $\text{Hess}\, r$ from corollary 6.4.2.
> 
> The Hessian estimates for the modified distance functions follow immediately. ∎

> [!remark] Remark 6.4.4
> A more traditional proof technique using the index form is discussed in exercise 6.7.25 within the context of lower curvature bounds. It can also be adapted to deal with upper curvature bounds.

### 6.4.2 The Conjugate Radius

As in the proof of theorem 6.2.2 we are going to estimate where the exponential map is nonsingular.

> [!example] Example 6.4.5
> Consider $S^n_K$, $K > 0$. If we fix $p \in S^n_K$ and use polar coordinates, then the metric looks like $dr^2 + \text{sn}_K^2 ds_{n-1}^2$. At distance $\frac{\pi}{\sqrt{K}}$ from $p$ we will hit a conjugate point no matter what direction we go in.

As a generalization of our result on no conjugate points when $\sec \leq 0$ we can show

> [!theorem] Theorem 6.4.6
> If $(M, g)$ has $\sec \leq K$, $K > 0$, then
> 
> $$
> \exp_p: B\left(0, \frac{\pi}{\sqrt{K}}\right) \to M
> $$
> 
> has no critical points.

> [!proof]
> Let $c(t)$ be a unit speed geodesic and $J(t)$ a Jacobi field along $c$ with $J(0) = 0$ and $\dot{J}(0) \perp \dot{c}(0)$. We have to show that $J(t)$ can't vanish for any $t \in (0, \frac{\pi}{\sqrt{K}})$. Assume that $J > 0$ on $(0, b)$ and $J(b) = 0$. From the proof of theorem 6.4.3 we obtain
> 
> $$
> \frac{g(\dot{J}(t), J(t))}{|J(t)|^2} \leq \frac{\text{sn}_K'(t)}{\text{sn}_K(t)}
> $$
> 
> for $t < \min\{b, \frac{\pi}{\sqrt{K}}\}$. This is equivalent to saying that
> 
> $$
> \frac{d}{dt}\left[\frac{|J(t)|}{\text{sn}_K(t)}\right] \leq 0.
> $$
> 
> Since $D \exp_p$ is the identity at the origin it follows that $|J(t)| = t|\dot{J}(0)| + O(t^2)$. This together with l'Hôpital's rule shows that
> 
> $$
> \lim_{t \to 0} \left[\frac{|J(t)|}{\text{sn}_K(t)}\right] = \lim_{t \to 0} \frac{g(\dot{J}(t), J(t))}{|J(t)|} = \lim_{t \to 0} \frac{\text{Hess}\, r(J(t), J(t))}{|J(t)|}.
> $$

<!-- __PDF_TO_OBSIDIAN_CONTINUE_HERE__ -->

It follows that $J(t) = \frac{\|PJ(0)\|}{\sqrt{K}} \sin_K(t) > 0$ for all $t < \min\{b, \frac{\pi}{\sqrt{K}}\}$. This shows that we can't have $b < \frac{\pi}{\sqrt{K}}$ and the claim follows. ∎

With this information about conjugate points, we also get estimates for the injectivity radius using the characterization from lemma 5.7.12. For Riemannian manifolds with $\sec \leq 0$ the injectivity radius satisfies

$$\mathrm{inj}(p) = \frac{1}{2} \cdot (\text{length of shortest geodesic loop based at } p)$$

as there are no conjugate points whatsoever. On a closed Riemannian manifold with $\sec \leq 0$ we claim that

$$\mathrm{inj}(M) = \inf_{p \in M} \mathrm{inj}(p) = \frac{1}{2} \cdot (\text{length of shortest closed geodesic}).$$

Since $M$ is closed, the infimum must be a minimum. This follows from continuity $p \mapsto \mathrm{inj}(p)$, which in turn is a consequence of $\exp: TM \to M \times M$ being smooth and the characterization of $\mathrm{inj}(p)$ from lemma 5.7.12. If $p \in M$ realizes this infimum, and $c: [0,1] \to M$ is the geodesic loop realizing $\mathrm{inj}(p)$, then we can split $c$ into two equal segments joining $p$ and $c(\frac{1}{2})$. Thus, $\mathrm{inj}(c(\frac{1}{2})) \leq \mathrm{inj}(p)$, but this means that $c$ must also be a geodesic loop as seen from $c(\frac{1}{2})$. In particular, it is smooth at $p$ and forms a closed geodesic.

The same line of reasoning yields the following more general result.

> [!lemma] Lemma 6.4.7 (Klingenberg)
> Let $(M, g)$ be a compact Riemannian manifold with $\sec \leq K$, where $K > 0$. Then
> $$\mathrm{inj}(p) \leq \min\left\{\frac{\pi}{\sqrt{K}}, \frac{1}{2} \cdot (\text{length of shortest geodesic loop based at } p)\right\},$$
> and
> $$\mathrm{inj}(M) \leq \frac{\pi}{\sqrt{K}} \quad \text{or} \quad \mathrm{inj}(M) = \frac{1}{2} \cdot (\text{length of shortest closed geodesic}).$$

These estimates will be used in the next section.

Next we turn our attention to the convexity radius.

> [!theorem] Theorem 6.4.8
> Suppose $R$ satisfies
> 1. $R \leq \frac{1}{2} \cdot \mathrm{inj}(x)$, for $x \in B(p, R)$, and
> 2. $R \leq \frac{1}{2} \cdot \frac{\pi}{\sqrt{K}}$, where $K = \sup\{\sec(v) \mid v \in T_xM, x \in B(p, R)\}$.
>
> Then $r(x) = |xp|$ is convex on $B(p, R)$, and any two points in $B(p, R)$ are joined by a unique segment that lies in $B(p, R)$.

> [!proof]
> The first condition tells us that any two points in $B(p, R)$ are joined by a unique segment in $M$, and that $r(x)$ is smooth on $B(p, 2R) \setminus \{p\}$. The second condition ensures that $\mathrm{Hess}\, r \leq 0$ on $B(p, R)$. It then remains to be shown that if $x, y \in B(p, R)$, and $c: [0,1] \to M$ is the unique segment joining them, then $c \subset B(p, R)$.
>
> For fixed $x \in B(p, R)$, define $C_x$ to be the set of $y$s for which this holds. Certainly $x \in C_x$ and $C_x$ is open. If $y \in B(p, R) \cap \partial C_x$, then the segment $c: [0,1] \to M$ joining $x$ to $y$ must lie in $B(p, R)$ by continuity. Now consider $\phi(t) = r(c(t))$. By assumption
> $$\phi(0), \phi(1) < R,$$
> $$\ddot{\phi}(t) = \mathrm{Hess}\, r(P_c(t), P_c(t)) \leq 0.$$
>
> Thus, $\phi$ is convex, and consequently
> $$\max \phi(t) \leq \max\{\phi(0), \phi(1)\} < R,$$
> showing that $c \subset B(p, R)$. ∎

The largest $R$ such that $r(x)$ is convex on $B(p, R)$ and any two points in $B(p, R)$ are joined by unique segments in $B(p, R)$ is called the convexity radius at $p$. Globally,

$$\mathrm{conv:rad}(M, g) = \inf_{p \in M} \mathrm{conv:rad}(p).$$

The previous result tells us

$$\mathrm{conv:rad}(M, g) \leq \min\left\{\frac{\mathrm{inj}(M, g)}{2}, \frac{\pi}{2\sqrt{K}}\right\}, \quad K = \sup \sec(M, g).$$

In nonpositive curvature this simplifies to

$$\mathrm{conv:rad}(M, g) = \frac{\mathrm{inj}(M, g)}{2}.$$

## 6.5 More on Positive Curvature

In this section we shall establish some further restrictions on the topology of manifolds with positive curvature. The highlight will be the classical quarter pinched sphere theorem of Rauch, Berger, and Klingenberg. To prove this theorem requires considerable preparation. We shall elaborate further on this theorem and its generalizations in section 12.3.

### 6.5.1 The Injectivity Radius in Even Dimensions

Using the ideas of the proof of theorem 6.3.6 we get another interesting restriction on the geometry of positively curved manifolds.

> [!theorem] Theorem 6.5.1 (Klingenberg, 1959)
> If $(M, g)$ is a compact orientable even-dimensional manifold with $0 < \sec \leq 1$, then $\mathrm{inj}(M, g) \geq \pi$. If $M$ is not orientable, then $\mathrm{inj}(M, g) \geq \frac{\pi}{2}$.

> [!proof]
> The nonorientable case follows from the orientable case, as the orientation cover will have $\mathrm{inj}(M, g) \geq \pi$.
>
> By lemma 6.4.7 and the upper curvature bound it follows that if $\mathrm{inj}\, M < \pi$, then the injectivity radius is realized by a closed geodesic. So let us assume that there is a closed geodesic $c: [0, 2\,\mathrm{inj}\,M] \to M$ parametrized by arclength, where $2\,\mathrm{inj}\,M < 2\pi$. Since $M$ is orientable and even dimensional, we know from section 6.3.2 and the proof of theorem 6.3.6 that for all small $\varepsilon > 0$ there are curves $c_\varepsilon: [0, 2\,\mathrm{inj}\, M] \to M$ that converge to $c$ as $\varepsilon \to 0$ and with $L(c_\varepsilon) < L(c) = 2\,\mathrm{inj}\, M$. Since $c_\varepsilon \subset B(c_\varepsilon(0), \mathrm{inj}\, M)$ there is a unique segment from $c_\varepsilon(0)$ to $c_\varepsilon(t)$. Thus, if $c_\varepsilon(t_\varepsilon)$ is the point at maximal distance from $c_\varepsilon(0)$ on $c_\varepsilon$, we get a segment $\sigma_\varepsilon$ joining these points that in addition is perpendicular to $c_\varepsilon$ at $c_\varepsilon(t_\varepsilon)$. As $\varepsilon \to 0$, it follows that $t_\varepsilon \to \mathrm{inj}\, M$, and thus the segments $\sigma_\varepsilon$ must subconverge to a segment from $c(0)$ to $c(\mathrm{inj}\, M)$ that is perpendicular to $c$ at $c(\mathrm{inj}\, M)$. However, as the conjugate radius is $\geq \pi > \mathrm{inj}\, M$, and $c$ is a geodesic loop realizing the injectivity radius at $c(0)$, we know from lemma 5.7.12 that there can only be two segments from $c(0)$ to $c(\mathrm{inj}\, M)$.
>
> Thus, we have a contradiction with our assumption $\pi > \mathrm{inj}\, M$. ∎

In figure 6.5 we have pictured a fake situation that gives the idea of the proof. The closed geodesic is the equator on the standard sphere, and $\sigma_\varepsilon$ converges to a segment going through the north pole.

> [!figure]- 🔴 Figure needed: Equator with shortcut through the North Pole
> Source: p.260, Figure 6.5
> Content: Illustration showing a closed geodesic (equator) on a sphere with a segment through the north pole, demonstrating the proof idea for Klingenberg's injectivity radius theorem
> Action: Screenshot or manual reconstruction needed.

A similar result can clearly not hold for odd-dimensional manifolds. In dimension 3 the quotients of spheres $S^3/\mathbb{Z}_k$ for all positive integers $k$ are all orientable. The image of the Hopf fiber via the covering map $S^3 \to S^3/\mathbb{Z}_k$ is a closed geodesic of length $\frac{2\pi}{k}$ that goes to 0 as $k \to \infty$. Also, the Berger spheres $(S^3, g_\varepsilon)$ give counterexamples, as the Hopf fiber is a closed geodesic of length $2\pi\varepsilon$. In this case the curvatures lie in $[\varepsilon^2, 4 - 3\varepsilon^2]$. So if we rescale the upper curvature bound to be 1, the length of the Hopf fiber becomes $\frac{2\pi\varepsilon}{\sqrt{4 - 3\varepsilon^2}}$ and the curvatures will lie in the interval $\left[\frac{\varepsilon^2}{4-3\varepsilon^2}, 1\right]$. When $\varepsilon < \frac{1}{\sqrt{3}}$, the Hopf fibers have length $< 2\pi$. In this case the lower curvature bound becomes smaller than $\frac{1}{9}$.

A much deeper result by Klingenberg asserts that if a simply connected manifold has all its sectional curvatures in the interval $(\frac{1}{4}, 1]$, then the injectivity radius is still $\geq \pi$ (see the next section for the proof). This result has been improved first by Klingenberg-Sakai and Cheeger-Gromoll to allow for the curvatures to be in $[\frac{1}{4}, 1]$. More recently, Abresch-Meyer showed that the injectivity radius estimate still holds if the curvatures are in $[\frac{1}{4} - 10^{-6}, 1]$. The Berger spheres show that such an estimate will not hold if the curvatures are allowed to be in $[\frac{1}{9} - \varepsilon, 1]$. Notice that the hypothesis on the fundamental group being trivial is necessary in order to eliminate all the constant curvature spaces with small injectivity radius.

These injectivity radius estimates will be used to prove some fascinating sphere theorems.

### 6.5.2 Applications of Index Estimation

Some notions and results from topology are needed to explain the material here. We say that $A \subset X$ is $l$-connected if the relative homotopy groups $\pi_k(X, A)$ vanish for $k \leq l$. A theorem of Hurewicz then shows that the relative homology groups $H_k(X, A)$ also vanish for $k \leq l$. The long exact sequences for the pair $(X, A)$

$$\pi_{k+1}(X, A) \to \pi_k(A) \to \pi_k(X) \to \pi_k(X, A)$$

and

$$H_{k+1}(X, A) \to H_k(A) \to H_k(X) \to H_k(X, A)$$

then show that $\pi_k(A) \to \pi_k(X)$ and $H_k(A) \to H_k(X)$ are isomorphisms for $k < l$ and surjective for $k = l$.

We say that a critical point $p \in M$ for a smooth function $f: M \to \mathbb{R}$ has index $\geq m$ if the Hessian of $f$ is negative definite on an $m$-dimensional subspace in $T_pM$. Note that if $m \geq 1$, then $p$ can't be a local minimum for $f$ as the function must decrease in the directions where the Hessian is negative definite. The index of a critical point gives us information about how the topology of $M$ changes as we pass through this point. In Morse theory a much more precise statement is proven, but it also requires the critical points to be nondegenerate, an assumption we do not wish to make here (see [75]).

> [!theorem] Theorem 6.5.2
> Let $f: M \to \mathbb{R}$ be a smooth proper function. If $b$ is not a critical value for $f$ and all critical points in $f^{-1}([a, b])$ have index $\geq m$, then
> $$f^{-1}((-\infty, a]) \subset f^{-1}((-\infty, b])$$
> is $(m-1)$-connected.

> [!proof]
> **Outline of Proof.** If there are no critical points in $f^{-1}([a, b])$, then the gradient flow will deform $f^{-1}((-\infty, b])$ to $f^{-1}((-\infty, a])$. This is easy to prove and is explained in lemma 12.1.1. If there are critical points, then by compactness we can cover the set of critical points by finitely many open sets $U_i \subset (-a, a)^n$, $0 < a < 1$, where $\overline{N}U_i \subset V_i$ and $\overline{N}V_i \subset [-1, 1]^n$ is a closed box coordinate chart where the first $m$ coordinates correspond to directions where $\mathrm{Hess}\, f$ is negative definite.
>
> Consider a map $\phi: N^{k-1} \to f^{-1}([a, b])$, $k \leq m$, where $\partial N^{k-1} \subset f^{-1}((-\infty, a])$ if the boundary is nonempty.
>
> - On $M \setminus \bigcup U_i$ we can use the flow of $-\chi(x) \nabla f|_x$, where $\chi \geq 0$ and $\chi^{-1}(0) = \bigcup \overline{N}U_i$. This will deform $\phi$ keeping it fixed on $N U_i$ and forcing $\max_{f^{-1}([a,b])} f \circ \phi$ to decrease while ensuring that $\max_{N V_i} f \circ \phi$ is not obtained on $\partial V_i$.
>
> - Let $S_i = \{p \in V_i \mid x_1(p) = \cdots = x_m(p) = 0\}$. The restriction $k \leq m$ allows us to use transversality to ensure that there is a homotopy $\phi_t$, $t \in [0, \varepsilon)$, where $\phi_0 = \phi$; $\phi_t$ does not intersect $S_i$ for $t > 0$; and $t \mapsto \phi_t$ is constant on $M \setminus V_i$. Moreover, for sufficiently small $t$, $\max_{N V_i} f \circ \phi_t$ is still not obtained on $\partial V_i$.
>
> - Finally, when $\phi$ doesn't intersect the submanifold $S_i$, the flow for the radial field $\sum_{j=1}^m x_j \partial_j$ on $N V_i$ decreases the value of $\max_{N V_i} f \circ \phi$ and moves $\phi$ outside $N U_i$.
>
> With these three types of deformations it is possible to continuously deform $\phi$ until its image lies in $f^{-1}((-\infty, a])$. ∎

In analogy with $\Omega_{p,q}(M)$ define

$$\Omega_{A,B}(M) = \{c: [0,1] \to M \mid c(0) \in A, c(1) \in B\}.$$

If $A, B \subset M$ are compact, then the energy functional $E: \Omega_{A,B}(M) \to [0, \infty)$ is reasonably nice in the sense that it behaves like a proper smooth function on a manifold. If in addition $A$ and $B$ are submanifolds, then the variational fields for variations in $\Omega_{A,B}(M)$ consist of fields along the curve that are tangent to $A$ and $B$ at the endpoints. Therefore, critical points are naturally identified with geodesics that are perpendicular to $A$ and $B$ at the endpoints. We say that the index of such a geodesic $\geq k$ if there is a $k$-dimensional space of fields along the geodesic such that the second variation of these fields is negative.

One can now either try to reprove the above theorem in a suitable infinite dimensional context (see [30] or [69]) or use finite dimensional approximations to $\Omega_{A,B}(M)$ (see [75]). Both routes are technical but fairly straightforward.

<!-- __PDF_TO_OBSIDIAN_CONTINUE_HERE__ -->

> [!theorem] Theorem 6.5.3
> Let $M$ be a complete Riemannian manifold and $A \subset M$ a compact submanifold. If every geodesic in $\Omega_{A,A}(M)$ that is perpendicular to $A$ at the end points has index $\geq k$, then $A \subset M$ is $k$-connected.

> [!proof] Outline of Proof
> See also [30] or [69, Theorem 2.5.16] for a proof. Identify $A = E^{-1}(0)$ and use the previous theorem as a guide for how to deform maps. This shows that $A \subset \Omega_{A,A}(M)$ is $(k - 1)$-connected. Next we note that
> $$\pi_i(\Omega_{A,A}(M), A) = \pi_{i+1}(M, A)$$
> This proves the result. ∎

This theorem can be used to prove a sphere theorem by Berger.

> [!theorem] Theorem 6.5.4 (Berger, 1958)
> Let $M$ be a closed $n$-manifold with $\sec \geq 1$. If $\text{inj}_p > \pi/2$ for some $p \in M$, then $M$ is $(n - 1)$-connected and hence a homotopy sphere.

> [!proof]
> We'll use theorem 6.5.3 with $A = \{p\}$. First note that every geodesic loop at $p$ is either the constant curve or has length $> \pi$ since $\text{inj}_p > \pi/2$. We showed in lemma 6.3.1 that geodesics of length $> \pi$ have proper variations whose second derivative is negative. In fact each parallel field along the geodesic could be modified to create such a variation. As there is an $(n - 1)$-dimensional space of such parallel fields we conclude that the index of such geodesics is $\geq (n - 1)$. This shows that $p \in M$ is $(n - 1)$-connected and consequently that $M$ is $(n - 1)$-connected.
> 
> Finally, to see that $M$ is a homotopy sphere we select a map $F: M \to S^n$ of degree 1. Since $M$ is $(n - 1)$-connected this map must be an isomorphism on $\pi_k$ for $k < n$ as $S^n$ is also $(n - 1)$-connected. We claim that
> $$\pi_n(M) \cong H_n(M) \to H_n(S^n) \cong \pi_n(S^n)$$
> is an isomorphism. Hurewicz's result shows that the homotopy and homology groups are isomorphic, while the fact that $F$ has degree 1 implies that $H_n(S^n) \to H_n(M)$ is an isomorphism. A theorem of Whitehead then implies that $F$ is a homotopy equivalence. ∎

This theorem is even more interesting in view of the injectivity radius estimate in positive curvature that we discussed in section 6.5.1. We can extend this to odd dimensions using theorem 6.5.3.

> [!theorem] Theorem 6.5.5 (Klingenberg, 1961)
> A compact simply connected Riemannian $n$-manifold $(M, g)$ with $1 \leq \sec < 4$ has $\text{inj} > \pi/2$.

> [!proof]
> It is more convenient to show that simply connected manifolds with $1 < \sec \leq 4$ have $\text{inj} \geq \pi/2$. A simple scaling shows that this implies the statement of the theorem. We can also assume that $n \geq 3$ as we know the theorem to be true in even dimensions. The lower curvature bound implies that there is a $\delta > 0$ such that geodesics of length $\leq \pi - \delta$ have index $\leq n - 1 - 2$. In particular, any map $[0, 1] \to \Omega_{p,p}(M)$ of constant speed loops based at $p$ is homotopic to a map where the loops have length $< \pi$. It is easy to force the loops to have constant speed as we can replace them by nearby loops that are piecewise segments and therefore shorter. This can be done uniformly along a fixed homotopy by selecting the break points on $S^1$ independently of the variational parameter.
> 
> The proof proceeds by contradiction so assume that $\text{inj}_p < \pi/2$. Then lemma 6.4.7 shows that there is a geodesic loop at $p$ of length $< \pi$ that realizes the injectivity radius. Next use simple connectivity to find a homotopy of loops based at $p$ to the constant loop and further assume that all the loops in the homotopy have constant speed and length $< \pi$. For each $s \in [0, 1]$ parametrize the corresponding loop $c_s(t): [0, 1] \to M$ so that $c_s(0) = c_s(1) = p$; $c_0(t) = p$ for all $t$; and $c_1$ the closed geodesic of length $< \pi$. As each $c_s$ has length $< \pi$ it must be contained in $B(p, \pi/2)$.
> 
> Note that the exponential map $\exp_p: B(0, \pi/2) \to B(p, \pi/2) \subset M$ is nonsingular and a diffeomorphism when restricted to $B(0, \text{inj}_p)$. We shall further use the pull back metric on $B(0, \frac{\pi}{2})$ so that $\exp_p$ becomes a local isometry. This tells us that any of the loops $c_s: [0, 1] \to B(p, \pi/2)$ with $c(0) = p$ have a unique lift to a curve $\tilde{c}_s: [0, b_s] \to \tilde{B}(0, \pi/2)$ with $\tilde{c}_s(0) = 0$. Here either $\tilde{c}_s(b_s) \in \partial B(0, \pi/2)$ or $b = 1$. Note that when $c_s$ is a piecewise geodesic, then we can easily create such a lift by lifting the velocity vectors at break points.
> 
> Let $A \subset [0, 1]$ be the set of $s$ such that $c_s$ lifts to a loop $\tilde{c}_s: [0, 1] \to B(0, \pi/2)$ based at $0$.
> 
> Clearly $0 \in A$, and as $\exp_p$ is a diffeomorphism near $0$ loops $c_s$ with $s$ near $0$ also lift to loops.
> 
> $A$ is closed: Let $s_i \in A$ converge to $s$. Then $\tilde{c}_{s_i}(1)$ is defined and $\tilde{c}_{s_i}(1) = 0$. The unique lift $\tilde{c}_s$ must be the limit of the curves $\tilde{c}_{s_i}$. Thus it is defined on $[0, 1]$ and is a loop. Finally observe that the limit curve $\tilde{c}_s$ clearly lies $\tilde{B}(0, \pi/2)$ and is forced to lie in the interior as it has length $< \pi$.
> 
> $A$ is open: Fix $s_0 \in A$ and let the lift be $\tilde{c}_{s_0}$. Select $\epsilon > 0$ so that $\exp_p: B(\tilde{c}_{s_0}(t), \epsilon) \to B(c_{s_0}(t), \epsilon)$ is an isometry for all $t$ and $B(\tilde{c}_{s_0}(t), \epsilon) \subset B(0, \pi/2)$. For $s$ near $s_0$, the loops $c_s$ must be contained in $\cup_{t \in [0,1]} B(c_{s_0}(t), \epsilon)$. But then they have unique lifts to loops in $\cup_{t \in [0,1]} B(\tilde{c}_{s_0}(t), \epsilon) \subset B(0, \pi/2)$. Thus $\tilde{c}_s(1) \in B(0, \epsilon)$ is a lift of $p$ and consequently $\tilde{c}_s(1) = 0$. This shows that a neighborhood of $s_0$ is contained in $A$.
> 
> All in all we've concluded that $A = [0, 1]$. However, the geodesic $c_1$ lifts to a line that starts at $0$ and consequently is not a loop. The establishes the contradiction. ∎

This gives us the classical version of the sphere theorem.

> [!corollary] Corollary 6.5.6 (Rauch, Berger, and Klingenberg, 1951–61)
> Let $M$ be a closed simply connected $n$-manifold with $4 > \sec \geq 1$. Then $M$ is $(n - 1)$-connected and hence a homotopy sphere.

The conclusion can be strengthened to say that $M$ is homeomorphic to a sphere. This follows from the solution to the (generalized) Poincaré conjecture given what we have already proven. In section 12.3 we exhibit an explicitly constructed homeomorphism.

Using an analysis similar to the proof of theorem 6.5.4 one also gets the more modest result.

> [!corollary] Corollary 6.5.7
> If $M$ is a closed $n$-manifold with $\text{Ric} \geq (n - 1)$ and $\text{inj}_p > \pi/2$ for some $p \in M$, then $M$ is simply connected.

Finally we mention a significant result that allows us to make strong conclusions about connectedness in positive curvature. The result will be enhanced in lemma 8.3.6.

> [!lemma] Lemma 6.5.8 (The Connectedness Principle, Wilking, 2003)
> Let $M^n$ be a compact $n$-manifold with positive sectional curvature.
> 
> (a) If $N^{n-k} \subset M^n$ is a closed codimension $k$ totally geodesic submanifold, then $N \subset M$ is $(n - 2k + 1)$-connected.
> 
> (b) If $N_1^{n-k_1}$ and $N_2^{n-k_2}$ are closed totally geodesic submanifolds of $M$ with $k_1 \leq k_2$ and $k_1 + k_2 \leq n$, then $N_1 \cap N_2$ is a nonempty totally geodesic submanifold and $N_1 \cap N_2 \to N_2$ is $(n - k_1 - k_2)$-connected.

> [!proof]
> (a) Let $c \in \Omega_{N,N}(M)$ be a geodesic and $E$ a parallel field along $c$ such that $E$ is tangent to $N$ at the endpoints. Then we can construct a variation $\bar{c}(s, t)$ such that $\bar{c}(0, t) = c(t)$ and $s \mapsto \bar{c}(s, t)$ is a geodesic with initial velocity $E|_{c(t)}$. Since $N$ is totally geodesic we see that $\bar{c}(s, 0), \bar{c}(s, 1) \in N$. Thus the variational curves lie in $\Omega_{N,N}(M)$. The second variation formula for this variation tells us that
> $$\frac{d^2 E(c_s)}{ds^2}\bigg|_{s=0} = \int_0^1 |\dot{E}|^2 dt - \int_a^b g(R(E, \dot{c})\dot{c}, E) dt + g\left(\frac{\partial^2 \bar{c}}{\partial s^2}, \dot{c}\right)\bigg|_0^1$$
> $$= -\int_0^1 g(R(E, \dot{c})\dot{c}, E) dt$$
> $$< 0$$
> since $\dot{E} = 0$, $\frac{\partial^2 \bar{c}}{\partial s^2} = 0$, and $E$ is perpendicular to $\dot{c}$. Thus each such parallel field gives us a negative variation. This shows that the index of $c$ is bigger than the set of parallel variational fields.
> 
> Let $V \subset T_c(1)M$ be the subspace of vectors $v = E(1)$, where $E$ is a parallel field along $c$ with $E(0) \in T_c(0)N$. The space of parallel fields used to get negative variations is then identified with $V \cap T_c(1)N$. To find the dimension of that space we note that $T_pN$ and hence also $V$ have dimension $n - k$. Moreover, $V$ and $T_c(1)N$ lie in the orthogonal complement to $\dot{c}(1)$. Putting this together gives us
> $$2n - 2k = \dim(T_c(1)N) + \dim(V)$$
> $$= \dim(V \cap T_c(1)N) + \dim(V + T_c(1)N)$$
> $$\leq \dim(V \cap T_c(1)N) + n - 1$$
> 
> (b) It is easy to show that $N_1 \cap N_2$ is also totally geodesic. The key is to guess that for $p \in N_1 \cap N_2$ we have $T_p(N_1 \cap N_2) = T_pN_1 \cap T_pN_2$. To see that $N_1 \cap N_2 \neq \emptyset$ select a geodesic from $N_1$ to $N_2$. The dimension conditions imply that there is a $(n - k_1 - k_2 + 1)$-dimensional space of parallel field along this geodesic that are tangent to $N_1$ and $N_2$ at the end points. Since $k_1 + k_2 \leq n$ we get a variation with negative second derivative, thus nearby variational curves are shorter. This shows that there can't be a nontrivial geodesic of shortest length joining $N_1$ and $N_2$.
> 
> Using $E: \Omega_{N_1,N_2}(M) \to [0, \infty)$ we can identify $N_1 \cap N_2 = E^{-1}(0)$. So we have in fact shown that $N_1 \cap N_2 \subset \Omega_{N_1,N_2}(M)$ is $(n - k_1 - k_2)$-connected. Using that $N_1 \subset M$ is $(n - 2k_1 + 1)$-connected shows that $\Omega_{N_1,N_2}(M) \subset \Omega_{M,N_2}(M)$ is also $(n - 2k_1 + 1)$-connected. Since $k_1 \leq k_2$ this shows that $N_1 \cap N_2 \subset \Omega_{M,N_2}(M)$ is $(n - k_1 - k_2)$-connected. Finally observe that $\Omega_{M,N_2}(M)$ can be retracted to $N_2$ and is homotopy equivalent to $N_2$. This proves the claim. ∎

What is commonly known as Frankel's theorem is included in part (b). The statement is simply that under the conditions in (b) the intersection is nonempty.

## 6.6 Further Study

Several textbooks treat the material mentioned in this chapter, and they all use variational calculus. We especially recommend [23, 30, 47] and [65]. The latter also discusses in more detail closed geodesics and, more generally, minimal maps and surfaces in Riemannian manifolds.

As we won't discuss manifolds of nonpositive curvature in detail later in the text some references for this subject should be mentioned here. With the knowledge we have right now, it shouldn't be too hard to read the books [10] and [8]. For a more advanced account we recommend the survey by Eberlein-Hammenstad-Schroeder in [51]. At the moment the best, most complete, and up to date book on the subject is probably [38].

For more information about the injectivity radius in positive curvature the reader should consult the article by Abresch and Meyer in [54].

All of the necessary topological background material used in this chapter can be found in [75] and [96].

## 6.7 Exercises

> [!exercise] EXERCISE 6.7.1
> Show that in even dimensions the sphere and real projective space are the only closed manifolds with constant positive curvature.

> [!exercise] EXERCISE 6.7.2
> Consider a rotationally symmetric metric $dr^2 + \phi^2(r) d\theta^2$. We wish to understand parallel translation along a latitude, i.e., a curve with $r = a$. To this end construct a cone $dr^2 + (\phi(a) + \phi'(a)(r - a))^2 d\theta^2$ that is tangent to this surface at the latitude $r = a$. In case the surface really is a surface of revolution, this cone is a real cone that is tangent to the surface along the latitude $r = a$.
> 
> (1) Show that in the standard coordinates $(r, \theta)$ on these two surfaces, the covariant derivative $\nabla_{\partial_\theta}$ is the same along the curve $r = a$. Conclude that parallel translation is the same along this curve on these two surfaces.
> 
> (2) Now take a piece of paper and try to figure out what parallel translation along a latitude on a cone looks like. If you unwrap the paper, then it is flat; thus parallel translation is what it is in the plane. Now rewrap the paper and observe that parallel translation along a latitude does not necessarily generate a closed parallel field.
> 
> (3) Show that in the above example the parallel field along $r = a$ closes up when $\phi'(a) = 0$.

> [!exercise] EXERCISE 6.7.3 (Fermi-Walker transport)
> Related to parallel transport there is a more obscure type of transport sometimes used in physics. Let $c: [a, b] \to M$ be a curve into a Riemannian manifold whose speed never vanishes and
> $$T = \frac{\dot{c}}{|\dot{c}|}$$
> the unit tangent of $c$. We say that $V$ is a Fermi-Walker field along $c$ if
> $$\dot{V} = g(V, T) \dot{T} - g(V, \dot{T}) T$$
> $$= (\dot{T} \wedge T)(V)$$
> 
> (1) Show that given $V(t_0)$ there is a unique Fermi-Walker field $V$ along $c$ whose value at $t_0$ is $V(t_0)$.
> 
> (2) Show that $T$ is a Fermi-Walker field along $c$.
> 
> (3) Show that if $V, W$ are Fermi-Walker fields along $c$, then $g(V, W)$ is constant along $c$.
> 
> (4) If $c$ is a geodesic, then Fermi-Walker fields are parallel.

<!-- __PDF_TO_OBSIDIAN_CONTINUE_HERE__ -->

> [!exercise] Exercise 6.7.4
> Let $(M, g)$ be a complete $n$-manifold of constant curvature $k$. Select a linear isometry $L: T_pM \to T_{N_p}S^n_k$. When $k \leq 0$ show that
> $$\exp_p \circ L^{-1} \circ \exp_{N_p}^{-1}: S^n_k \to M$$
> is a Riemannian covering map. When $k > 0$ show that
> $$\exp_p \circ L^{-1} \circ \exp_{N_p}^{-1}: S^n_k \setminus \{-N_p\} \to M$$
> extends to a Riemannian covering map $S^n_k \to M$. (Hint: Use that the differential of the exponential maps is controlled by the metric, which in turn can be computed when the curvature is constant. You should also use the conjugate radius ideas presented in connection with theorem 6.2.2.)

> [!exercise] Exercise 6.7.5
> Let $c(s, t): [0, 1]^2 \to (M, g)$ be a variation where $R\left(\frac{\partial c}{\partial s}, \frac{\partial c}{\partial t}\right) = 0$. Show that for each $v \in T_{c(0,0)}M$, there is a parallel field $V: [0, 1]^2 \to TM$ along $c$, i.e., $\frac{\partial V}{\partial s} = \frac{\partial V}{\partial t} = 0$ everywhere.

> [!exercise] Exercise 6.7.6
> Use the formula
> $$R\left(\frac{\partial c}{\partial s}, \frac{\partial c}{\partial t}\right) \frac{\partial c}{\partial u} = \frac{\partial^3 c}{\partial s \partial t \partial u} - \frac{\partial^3 c}{\partial t \partial s \partial u}$$
> to show that the two skew-symmetry properties and Bianchi's first identity from proposition 3.1.1 hold for the curvature tensor.

> [!exercise] Exercise 6.7.7
> Let $c$ be a geodesic and $X$ a Killing field in a Riemannian manifold. Show that the restriction of $X$ to $c$ is a Jacobi field.

> [!exercise] Exercise 6.7.8
> Let $c: [0, 1] \to M$ be a geodesic. Show that $\exp_{c(0)}$ has a critical point at $\dot{c}(0)$ if and only if there is a nontrivial Jacobi field $J$ along $c$ such that $J(0) = 0$, $\dot{J}(0) \perp \dot{c}(0)$, and $J(1) = 0$.

> [!exercise] Exercise 6.7.9
> Fix $p \in M$ and $v \in \text{seg}^0_p$. Consider a geodesic $c(t) = \exp_p(tv)$ and geodesic variation $\bar{c}(s, t) = \exp_p(t(v + sw))$ with variational Jacobi field $J(t)$. Show that if $f_0(x) = \frac{1}{2}|xp|^2$, then
> $$\nabla f_0|_{c(1)} = \dot{c}(1);$$
> $$\text{Hess } f_0(J(1), J(1)) = g\left(\dot{J}(1), J(1)\right).$$
> Use this equation to prove lemma 6.2.5 without first estimating $\text{Hess } r$.

> [!exercise] Exercise 6.7.10
> Let $c$ be a geodesic in a Riemannian manifold and $J_1, J_2$ Jacobi fields along $c$.
> 
> (1) Show that $g\left(\dot{J}_1, J_2\right) - g\left(J_1, \dot{J}_2\right)$ is constant.
> 
> (2) Show that $g(J_1(t), \dot{c}(t)) = g(J_1(0), \dot{c}(0)) + g\left(\dot{J}_1(0), \dot{c}(0)\right)t$.

> [!exercise] Exercise 6.7.11
> Let $J$ be a nontrivial Jacobi field along a unit speed geodesic $c$ with $J(0) = 0$, $\dot{J}(0) \perp \dot{c}(0)$. Assume that the Riemannian manifold has sectional curvature $\leq K$.
> 
> (1) Define
> $$\rho = \frac{|J|^2}{g\left(J, \dot{J}\right)}$$
> and show that $\dot{\rho} \leq 1 + K\rho^2$, $\rho(0) = 0$ for as long as $\rho$ is defined.
> 
> (2) Show that if $J(b) = 0$ for some $b > 0$, then $g\left(J(t), \dot{J}(t)\right) = 0$ for some $t \in (0, b)$. Give an explicit example where this occurs.

> [!exercise] Exercise 6.7.12
> Let $c$ be a geodesic in a Riemannian manifold and $\mathcal{J}$ a space of Jacobi fields along $c$. Further assume that $\mathcal{J}$ is self-adjoint, i.e., $g\left(\dot{J}_1, J_2\right) = g\left(J_1, \dot{J}_2\right)$ for all $J_1, J_2 \in \mathcal{J}$. Consider the subspace
> $$\mathcal{J}(t) = \text{span}\{\dot{J}(t) \mid J \in \mathcal{J}, J(t) = 0\} + \{J(t) \mid J \in \mathcal{J}\} \subset T_{c(t)}M.$$
> 
> (1) Show that the two subspaces in this sum are orthogonal.
> 
> (2) Show that the space $\{J \in \mathcal{J} \mid J(t) = 0\} \subset \mathcal{J}$ is naturally isomorphic to the first summand in the decomposition.
> 
> (3) Show that $\dim \mathcal{J} = \dim \mathcal{J}(t)$ for all $t$. Hint: Consider a basis for $\mathcal{J}$ where the first part of the basis spans $\{J \in \mathcal{J} \mid J(t) = 0\}$.

> [!exercise] Exercise 6.7.13
> A Riemannian manifold is said to be $k$-point homogeneous if for all pairs of points $(p_1, \ldots, p_k)$ and $(q_1, \ldots, q_k)$ with $|p_ip_j| = |q_iq_j|$ there is an isometry $F$ with $F(p_i) = q_i$. When $k = 1$ we simply say that the space is homogeneous.
> 
> (1) Show that a homogenous space has constant scalar curvature.
> 
> (2) Show that if $k > 1$ and $(M, g)$ is $k$-point homogeneous, then $M$ is also $(k - 1)$-point homogeneous.
> 
> (3) Show that if $(M, g)$ is two-point homogeneous, then $(M, g)$ is an Einstein metric.
> 
> (4) Show that if $(M, g)$ is three-point homogeneous, then $(M, g)$ has constant curvature.
> 
> (5) Show that $\mathbb{RP}^2$ is not three-point homogeneous by finding two equilateral triangles of side lengths $\frac{\pi}{3}$ that are not congruent by an isometry.
> 
> It is possible to show that the simply connected space forms are the only three-point homogeneous spaces. Moreover, all 2-point homogeneous spaces are symmetric with rank 1 (see [106]).

> [!exercise] Exercise 6.7.14
> Starting with a geodesic on a two-dimensional space form, discuss how the equidistant curves change as they move away from the original geodesic.

> [!exercise] Exercise 6.7.15
> Let $r(x) = |xp|$ in a Riemannian manifold with $-K \leq \sec \leq K$. Write the metric as $g = dr^2 + g_r$ on $B(p, R) \setminus \{p\} = (0, R) \times S^{n-1}$, where $2R < \text{inj}_p$.
> 
> (1) Show that
> $$\frac{\text{sn}^2_K(r)}{K} ds^2_{n-1} \leq g_r \leq \frac{\text{sn}^2_{-K}(r)}{-K} ds^2_{n-1}.$$
> Hint: Estimate $|J|^2$, where $J$ is a Jacobi field along a geodesic $c$ with $c(0) = 0$, $J(0) = 0$, $\dot{J}(0) \perp \dot{c}(0)$, and $|\dot{J}(0)| = 1$.
> 
> (2) Show that there is a universal constant $C$ such that
> $$\left|\text{Hess } \frac{1}{2}r^2 - g\right| \leq \frac{CK^2R^2}{2}$$
> as long as $R < \frac{\pi}{2\sqrt{K}}$.

> [!exercise] Exercise 6.7.16
> Let $(M, g)$ be a complete Riemannian manifold. Show that every element of $\pi_1(M, p)$ contains a shortest loop at $p$ and that this shortest loop is a geodesic loop.

> [!exercise] Exercise 6.7.17
> Let $(M, g)$ be a complete Riemannian manifold with $\text{inj}_p < R$, where $\exp_p: B(0, R) \to B(p, R)$ is nonsingular. Show that the geodesic loop $c$ at $p$ that realizes the injectivity radius has index 0. Hint: When $c$ is trivial as an element in $\pi_1(M, p)$, show that it does not admit a homotopy through loops that are all shorter than $c$. When $c$ is nontrivial as an element in $\pi_1(M, p)$, show that it is a local minimum for the energy functional.

> [!exercise] Exercise 6.7.18 (Frankel)
> Let $M$ be an $n$-dimensional Riemannian manifold of positive curvature and $A, B$ two closed totally geodesic submanifolds. Show directly that $A$ and $B$ must intersect if $\dim A + \dim B \geq n$. Hint: assume that $A$ and $B$ do not intersect. Then find a segment of shortest length from $A$ to $B$. Show that this segment is perpendicular to each submanifold. Then use the dimension condition to find a parallel field along this geodesic that is tangent to $A$ and $B$ at the endpoints to the segments. Finally use the second variation formula to get a shorter curve from $A$ to $B$.

> [!exercise] Exercise 6.7.19
> Let $M$ be a complete $n$-dimensional Riemannian manifold and $A \subset M$ a compact submanifold. Establish the following statements without using Wilking's connectedness principle.
>
> 1. Show that curves in $\Omega_{A,A}(M)$ that are not stationary for the energy functional can be deformed to shorter curves in $\Omega_{A,A}(M)$.
> 2. Show that the stationary curves for the energy functional on $\Omega_{A,A}(M)$ consist of geodesics that are perpendicular to $A$ at the end points.
> 3. If $M$ has positive curvature, $A \subset M$ is totally geodesic, and $2\dim A \geq \dim M$, then all stationary curves can be deformed to shorter curves in $\Omega_{A,A}(M)$.
> 4. (Wilking) Conclude using (3) that any curve $c : [0, 1] \to M$ that starts and ends in $A$ is homotopic through such curves to a curve in $A$, i.e., $\pi_1(M, A)$ is trivial.

> [!exercise] Exercise 6.7.20
> Generalize Preissmann's theorem to show that any solvable subgroup of the fundamental group of a compact negatively curved manifold must be cyclic. Hint: Recall that the group is torsion free. Use contradiction and solvability to find a subgroup generated by deck transformations $F, G$ with $F \circ G = G^k \circ F$, $k \neq 0$. Then show that if $c$ is an axis for $G$, then $F \circ c$ is an axis for $G^k$ and use uniqueness of axes for $G^k$ to reach a contradiction.

> [!exercise] Exercise 6.7.21
> Let $(M, g)$ be a compact manifold of positive curvature and $F : M \to M$ an isometry of finite order without fixed points. Show that if $\dim M$ is even, then $F$ must be orientation reversing, while if $\dim M$ is odd, it must be orientation preserving. Weinstein has proven that this holds even if we don't assume that $F$ has finite order.

> [!exercise] Exercise 6.7.22
> Use an analog of theorem 6.2.3 to show that any closed manifold of constant curvature $= 1$ must either be the standard sphere or have diameter $\leq \frac{\pi}{2}$. Generalize this to show that any closed manifold with $\sec \geq 1$ is either simply connected or has diameter $\leq \frac{\pi}{2}$. In section 12.3 we shall show the stronger statement that a closed manifold with $\sec \geq 1$ and diameter $> \frac{\pi}{2}$ must in fact be homeomorphic to a sphere.

> [!exercise] Exercise 6.7.23
> Consider a complete Riemannian $n$-manifold $(M, g)$ with $|\sec| \leq K$. Fix $n$ points $p_i$ and a ball $B(p, \varepsilon)$ such that the distance functions $r_i(x) = |x p_i|$ are smooth on $B(p, \varepsilon)$ with $g(\nabla r_i, \nabla r_j)|_p = \delta_{ij}$ and $|p p_i| \geq 2\varepsilon$.
>
> 1. Let $g_{ij} = g(\nabla r_i, \nabla r_j) = g(dr_i, dr_j)$. Show that there exists $C(K, \varepsilon) > 0$ such that
>    $$|dg_{ij}| \leq C = C(n, K, \varepsilon).$$
> 2. Show further that $C(n, K, \varepsilon)$ can be chosen so that $C(n, \lambda^2 K, \lambda \varepsilon) \to 0$ as $\lambda \to \infty$.
> 3. Show that there is a $\delta = \delta(n, C) > 0$ such that $g_{ij}$ is invertible on $B(p, \delta)$ and the inverse $g^{ij}$ satisfies:
>    $$|g^{ij} - \delta^{ij}| \leq \frac{1}{9} \text{ and } |dg^{ij}| \leq C_0(n, K, \varepsilon).$$
>    Hint: Find $\delta$ such that $|g^{ij} - \delta^{ij}| \leq \frac{1}{10}$ on $B(p, \delta)$ and use a geometric series of matrices to calculate the inverse.
> 4. Show that $(r_1(x) - r_1(p), \ldots, r_n(x) - r_n(p))$ form a coordinate system on $B(p, \delta)$ and that the image contains the ball $B(0, \frac{\delta}{4})$. Hint: Inspect the proof of the inverse function theorem.

> [!exercise] Exercise 6.7.24 (The Index Form)
> Below we shall use the second variation formula to prove several results established in section 5.7.3. If $V, W$ are vector fields along a geodesic $c : [0, 1] \to (M, g)$, then the index form is the symmetric bilinear form
> $$I_0^1(V, W) = I(V, W) = \int_0^1 \left( g(\nabla V, \nabla W) - g(R(V, \dot{c})\dot{c}, W) \right) dt.$$
> In case the vector fields come from a proper variation of $c$ this is equal to the second variation of energy. Assume below that $c : [0, 1] \to (M, g)$ locally minimizes the energy functional. This implies that $I(V, V) \geq 0$ for all proper variations.
>
> 1. If $I(V, V) = 0$ for a proper variation, then $V$ is a Jacobi field. Hint: Let $W$ be any other variational field that also vanishes at the end points and use that
>    $$0 \leq I(V + \varepsilon W, V + \varepsilon W) = I(V, V) + 2\varepsilon I(V, W) + \varepsilon^2 I(W, W)$$
>    for all small $\varepsilon$ to show that $I(V, W) = 0$. Then use that this holds for all $W$ to show that $V$ is a Jacobi field.
> 2. Let $V$ and $J$ be variational fields along $c$ such that $V(0) = J(0)$ and $V(1) = J(1)$. If $J$ is a Jacobi field show that
>    $$I(V, J) = I(J, J).$$
> 3. (The Index Lemma) Assume in addition that there are no Jacobi fields along $c$ that vanish at both end points. If $V$ and $J$ are as in (2) show that $I(V, V) \geq I(J, J)$ with equality holding only if $V = J$ on $[0, 1]$. Hint: Prove that if $V \neq J$, then
>    $$0 < I(V - J, V - J) = I(V, V) - I(J, J).$$
> 4. Assume that there is a nontrivial Jacobi field $J$ that vanishes at $0$ and $1$, show that $c : [0, 1 + \varepsilon] \to M$ is not locally minimizing for $\varepsilon > 0$. Hint: For sufficiently small $\varepsilon$ there is a Jacobi field $K : [1 - \varepsilon, 1 + \varepsilon] \to TM$ such that $K(1 + \varepsilon) = 0$ and $K(1 - \varepsilon) = J(1 - \varepsilon)$. Let $V$ be the variational field such that $V|_{[0,1-\varepsilon]} = J$ and $V|_{[1-\varepsilon,1+\varepsilon]} = K$. Finally extend $J$ to be zero on $[1, 1 + \varepsilon]$. Now show that
>    $$0 = I_0^1(J, J) = I_0^{1+\varepsilon}(J, J) = I_0^{1-\varepsilon}(J, J) + I_{1-\varepsilon}^{1+\varepsilon}(J, J) > I_0^{1-\varepsilon}(J, J) + I_{1-\varepsilon}^{1+\varepsilon}(K, K) = I(V, V).$$

> [!exercise] Exercise 6.7.25 (Index Comparison)
> Let $J$ be a nontrivial Jacobi field along a unit speed geodesic $c$ with $J(0) = 0$, $\nabla J(0) \perp \dot{c}(0)$. Assume that the Riemannian manifold has sectional curvature $\leq k$. The index form on $c|_{[0,b]}$ is given by
> $$I_0^b(V, V) = \int_0^b \left( |\nabla V|^2 - g(R(V, \dot{c})\dot{c}, V) \right) dt$$
> and we assume that there are no Jacobi fields on $c|_{[0,b]}$ that vanish at the ends points as in part (3) of exercise 6.7.24.
>
> 1. Show that $I_0^b(J, J) = g(J(b), \nabla J(b))$.
> 2. Define
>    $$V(t) = \frac{\mathrm{sn}_k(t)}{\mathrm{sn}_k(b)} E(t)$$
>    where $E$ is a parallel field with $E(b) = J(b)$. Show that
>    $$I_0^b(V, V) \leq \frac{\mathrm{sn}_k'(b)}{\mathrm{sn}_k(b)} |J(b)|^2.$$
>    Hint: Differentiate $\mathrm{sn}_k(t) \mathrm{sn}_k'(t)$.
> 3. Conclude that $g(J(b), \nabla J(b)) \leq \frac{\mathrm{sn}_k'(b)}{\mathrm{sn}_k(b)} |J(b)|^2$ and use this to prove the part of theorem 6.4.3 that relates to lower curvature bounds.

> [!exercise] Exercise 6.7.26
> Consider a subgroup $G \subset \mathrm{Iso}(M, g)$ of a Riemannian manifold. The topology of $\mathrm{Iso}(M, g)$ is the compact-open topology discussed in exercise 5.9.41.
>
> 1. Show that if $M$ is complete, simply connected, has nonpositive curvature, and $G$ is compact, then $G$ has a fixed point, i.e., there exists $p \in M$ that is fixed by all elements in $G$. Hint: Imitate the proof of theorem 6.2.3.
> 2. Given $p \in M$ and $\varepsilon > 0$, we say that $G$ is $(p, \varepsilon)$-small, if $Gp \subset N_B(p, \varepsilon)$. Show that for sufficiently small $\varepsilon(p)$ the closure $N_G \subset \mathrm{Iso}(M, g)$ of a $(p, \varepsilon)$-small group is compact and also $(p, \varepsilon)$-small. Note: We do not assume that $M$ is complete so closed balls are not necessarily compact.
> 3. Show that if $G$ is $(p, \varepsilon)$-small, then it is $(q, 2|pq| + \varepsilon)$-small.
> 4. Assume that $G$ is $(p, \varepsilon)$-small and that $\varepsilon$ is much smaller than the convexity radius for all points in $N_B(p, 4\varepsilon)$. Show that $G$ has a fixed point. Hint: Imitate (1) after noting all of the necessary distance functions are convex on suitable domains.
> 5. Given a Riemannian manifold show that for all $p \in M$ there exists $\varepsilon > 0$ such that no subgroup $G \subset \mathrm{Iso}(M, g)$ can be $(p, \varepsilon)$-small. Hint: As in the proof of theorem 5.6.19 make $G$ act freely on a suitable subset of $M \times \cdots \times M$.
> 6. A topological group is said to have no small subgroups if there a neighborhood around the identity that contains no nontrivial subgroups. Show that $\mathrm{Iso}(M, g)$ has no small subgroups.
>
> Bochner-Montgomery showed more generally that a locally compact subgroup of $\mathrm{Diff}(M)$ has no small subgroups. Gleason and Yamabe then later proved that a locally compact topological group without small subgroups is a Lie group. See also [79] for the complete story of this fascinating solution to Hilbert's 5th problem. It is still unknown whether (locally) compact subgroups of the homeomorphism group of a topological manifold are necessarily Lie groups.

> [!exercise] Exercise 6.7.27
> Construct a Riemannian metric on the tangent bundle to a Riemannian manifold $(M, g)$ such that $\pi : TM \to M$ is a Riemannian submersion and the metric restricted to the tangent spaces is the given Euclidean metric. Hint: Construct a suitable horizontal distribution by declaring that for a given curve in $M$ all parallel fields along this curve correspond to the horizontal lifts of this curve.

> [!exercise] Exercise 6.7.28
> For a Riemannian manifold $(M, g)$ let $FM$ be the frame bundle of $M$. This is a fiber bundle $\pi : FM \to M$ whose fiber over $p \in M$ consists of orthonormal bases for $T_p M$. Find a Riemannian metric on $FM$ that makes $\pi$ into a Riemannian submersion and such that the fibers are isometric to $O(n)$. Hint: Construct a suitable horizontal distribution by declaring that for a given curve in $M$ all orthonormal parallel frames along this curve correspond to the horizontal lifts of this curve.
 