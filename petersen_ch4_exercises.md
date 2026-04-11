### Petersen – Riemannian Geometry (3rd ed.), §4.7 Exercises

**EXERCISE 4.7.1**  
Show that the Schwarzschild metric does not have parallel curvature tensor.

**EXERCISE 4.7.2**  
Show that the Berger spheres $(\varepsilon \neq 1)$ do not have parallel curvature tensor.

**EXERCISE 4.7.3**  
This exercise covers a few interesting aspects of projective spaces.
1. Show that $U(n+1)$ acts by isometries on $\mathbf{CP}^n$. Hint: Use that $U(n+1)$ acts by isometries on $S^{2n+1}(1)$ and commutes with the quotient action that creates $\mathbf{CP}^n$.
2. Show that for each $p \in \mathbf{CP}^n$ there is an isometry $A_p \in \mathrm{Iso}_p$ with $DA_p|_p = -I$.
3. Use the fact that isometries leave $V$ and $R$ invariant to show that $V R = 0$.
4. Repeat 1–3 for $\mathbf{HP}^n$ using the symplectic group $Sp(n+1)$ of matrices with quaternionic entries satisfying $A^* A = I$, where $A^* = \overline{A}^\top$. See also Exercise 1.6.22.

**EXERCISE 4.7.4**  
Assume that a Riemannian manifold $(M,g)$ has a function $f$ such that $\operatorname{Hess} f = A(x) g + \lambda(f) \, df \otimes df$, where $\lambda : M \to \mathbf{R}$ and $A : \mathbf{R} \to \mathbf{R}$. Show that the metric is locally a warped product.

**EXERCISE 4.7.5**  
Show that if $\operatorname{Hess} f = A g$, then $A$ is constant.

**EXERCISE 4.7.6**  
Let $f$ be a function on $(M,g)$ with $\nabla f \neq 0$, and assume $\nabla f$ is an eigenvector for $S(X) = \nabla_X \nabla f$. Show that if $S$ has at most two eigenvalues, then $g$ is locally a warped product metric.

**EXERCISE 4.7.7 (O'Neill)**  
For a Riemannian submersion define the $A$-tensors $A_X Y = [X^H, Y^H]^V$ and likewise $A_Y X = [Y^H, X^H]^V$, extending by $A_X V = A_V X = 0$. Analogously define $T$-tensors (cf. Exercises 2.5.25–26).
1. Show that both $A$-tensors are tensorial.
2. $A_X Y = [X, Y]^V$.
3. $g(A_X Y, V) = -g(Y, A_X V)$.
4. $(\nabla_Y A)_X W = -A_{\nabla_Y X} W$ and $(\nabla_X A)_Y W = -A_{\nabla_X Y} W$.
5. Analogous identities for $T$.
6. Show $g((\nabla_U A)_X V, W) = g(T_U V, A_X W) - g(T_U W, A_X V)$.

**EXERCISE 4.7.8 (O'Neill)**  
Using the previous exercise, show the Gauss-type curvature identities
$$R(Y, X, X, Y) = R(Y^H, X^H, X^H, Y^H) - 3\|A_X Y\|^2,$$
$$R(V, X, X, V) = g((\nabla_V T)_Y V, X) + \|A_X V\|^2 - \|T_V X\|^2,$$
and compare the last formula with the radial curvature equation.

**EXERCISE 4.7.9**  
Let $(M,g) = (M_1 \times M_2, g_1 + g_2)$.
1. Show $R = R_1 + R_2$ (pulled back).
2. If each $(M_i, g_i)$ has constant curvature $c_i$, show $R = c_1 \, g_1 \owedge g_1 + c_2 \, g_2 \owedge g_2$.
3. $(M,g)$ is Einstein iff $(n_1 - 1) c_1 = (n_2 - 1) c_2$.
4–5. Analyze when the Weyl tensor vanishes and when it does not.

**EXERCISE 4.7.10**  
Let $(M^n, g) = (I \times N, dr^2 + \varphi^2(r) g_N)$ have constant curvature $k$.
1. Show $(N^{n-1}, \varphi^2(r) g_N)$ has curvature $k + \varphi''/\varphi$ if $n>2$.
2. Show hyperbolic space can be represented as a warped product over both hyperbolic and Euclidean bases.

**EXERCISE 4.7.11**  
Let $(N^{n-1}, g_N)$ be Einstein with $\mathrm{Ric} = (n-2)\kappa \, g_N$. Find $\varphi : \mathbf{R} \to (0, \infty)$ so that $(\mathbf{R} \times N, dr^2 + \varphi^2 g_N)$ is Einstein with $\mathrm{Ric} = \lambda g$.

**EXERCISE 4.7.12**  
Let $(N^{n-1}, g_N)$ have constant curvature $c$ and consider $(I \times N, dr^2 + \varphi^2 g_N)$.
1. Derive the full curvature tensor in terms of $c, \varphi, \varphi', \varphi''$.
2. Show the Weyl tensor vanishes.
3. Show directly that the Schouten tensor $P$ satisfies $(\nabla_X P)(Y, Z) = (\nabla_Y P)(X, Z)$.

**EXERCISE 4.7.13**  
Describe stereographic projection from $x_{n+1} = 0$ to a hypersurface transverse to lines through $-e_{n+1}$. Show how it gives conformal charts on $S^n$ and $H^n$.

**EXERCISE 4.7.14**  
Let $\tilde g = e^{2v} g$.
1. Derive $\tilde \nabla_X Y = \nabla_X Y + (dv(X))Y + (dv(Y))X - g(X, Y) \, \nabla v$.
2. Using Exercise 3.4.23, show
$$\tilde R = e^{-2v} \big(R - 2 \, \mathrm{Hess} \, v + 2 \, dv \otimes dv - 2\|dv\|^2 g\big).$$
3. For $X, Y$ orthonormal, show $$e^{2v} \, \widetilde{\sec}(X, Y) = \sec(X, Y) - \mathrm{Hess} \, v(X, X) - \mathrm{Hess} \, v(Y, Y) + (dv(X))^2 + (dv(Y))^2 - \|dv\|^2.$$ 
4. Show $$\widetilde{\mathrm{Ric}} = \mathrm{Ric} - (n-2)(\mathrm{Hess} \, v - dv \otimes dv) - (\Delta v + (n-2) \|dv\|^2) g.$$ 
5. Show $$\widetilde{\mathrm{scal}} = e^{-2v}\Big( \mathrm{scal} - 2(n-1) \Delta v - (n-1)(n-2) \|dv\|^2 \Big).$$ 
6. Conclude that the Weyl tensor is conformally invariant.

**EXERCISE 4.7.15**  
Show the scalar-flat metric from §4.2.3 can be written as
$$\frac{1}{\varphi^{n-2}} \Big( \varphi^2 dr^2 + r^2 \varphi^2 d\Omega^2 \Big),$$
and rewrite the Schwarzschild metric accordingly.

**EXERCISE 4.7.16 (Static Einstein equations)**  
For $g = g_N + \omega^2 dt^2$ on $N^{n-1} \times \mathbf{R}$:
1. Show $\nabla^M_Y Y = \nabla^N_Y Y$ and deduce $\mathrm{Ric}^M(X, 0_t) = 0$.
2. Show $|\partial_t|^2 = \omega^2$.
3. Compute $\nabla_X \partial_t = (dv(X)) \partial_t$ and related identities.
4. Show $\mathrm{Ric}^M(\partial_t, \partial_t) = -\omega \Delta_N \omega$, and $\mathrm{Ric}^M(X, X) = \mathrm{Ric}^N(X, X) - \frac{1}{\omega} \mathrm{Hess} \, \omega(X, X)$.
5. Conclude $\mathrm{Ric}^M = \lambda g$ iff
$$\mathrm{Ric}^N - \frac{1}{\omega} \mathrm{Hess} \, \omega = \lambda g_N, \qquad \Delta_N \omega + \lambda (n-1) \omega = 0.$$

**EXERCISE 4.7.17**  
Define locally conformally flat metrics and show: (a) space forms are locally conformally flat, (b) Einstein + LCF implies constant curvature, (c) revisit isothermal coordinates in 2D and the associated differential conditions.

**EXERCISE 4.7.18 (Schouten)**  
Show $g$ is locally conformally flat iff $W = 0$ and locally $P = 2 \, \mathrm{Hess} \, v - 2 \, dv \otimes dv + \|dv\|^2 g$. Deduce $(\nabla_X P)(Y, Z) = (\nabla_Y P)(X, Z)$.

**EXERCISE 4.7.19 (Schouten)**  
Assume $W = 0$ and $(\nabla_X P)(Y, Z) = (\nabla_Y P)(X, Z)$. Prove the integrability conditions to recover $v$ with $P$ of the above form.

**EXERCISE 4.7.20**  
For $(N^{n-1} \times \mathbf{R}, g_N + dt^2)$, compute $P_{ij} = \tfrac{1}{2}(\mathrm{scal}_{g_N}) g_{ij}$ and show the product metric is conformally flat iff $\mathrm{scal}_{g_N}$ is constant.

**EXERCISE 4.7.21**  
Let $(M^n, g)$, $n>2$, have constant curvature $k$.
1. Use Exercise 4.7.19 to show $g$ is locally conformally flat.
2. If $g = e^{-2v} \delta$, show $$2 e^{v} d_i d_j e^{v} = \Big(k + \|dv\|^2\Big) \delta_{ij}.$$ 
3. Conclude $$e^{v} = a \sum_i (x^i)^2 + b_i x^i + c$$ with $k = 4ac - \|b\|^2$.

**EXERCISE 4.7.22**  
On the Heisenberg group with left-invariant orthonormal frame $(X, Y, Z)$, compute the brackets, Ricci eigenvalues, scalar curvature, and show the Ricci tensor is not parallel.

**EXERCISE 4.7.23**  
Consider metrics $$dr^2 + \alpha(r) (\theta_1^2 + \theta_2^2 + \theta_3^2).$$ Show certain ODE data produce the Eguchi–Hanson Ricci-flat metric and study its asymptotics.

**EXERCISE 4.7.24**  
For the same ansatz, show the almost complex structure given by
$$J = \begin{pmatrix} 0 & -I \\ I & 0 \end{pmatrix}$$
is parallel iff $\alpha = \beta$, compute the scalar curvature, and note the existence of scalar-flat metrics on each rank-2 bundle over $S^n$.

**EXERCISE 4.7.25**  
Show $T \mathbb{RP}^{n-1}$ admits rotationally symmetric metrics $dr^2 + \varphi^2(r) ds_{n-1}^2$ that equal the Euclidean metric for $r>1$ yet have nonpositive Ricci curvature. Argue why no such perturbation yields nonnegative scalar or sectional curvature.

**EXERCISE 4.7.26**  
Define orthogonal coordinates. Show they always exist in dimension $2$ but need not for $n>3$; relate to curvature components $R_{ijkl}$ with distinct indices.

**EXERCISE 4.7.27**  
Show the Weyl tensors for the Schwarzschild and Eguchi–Hanson metrics are nonzero.

**EXERCISE 4.7.28**  
In a $4$-dimensional oriented Riemannian manifold, analyze the Hodge star on $\Lambda^2$, split $\Lambda^2 = \Lambda^+ \oplus \Lambda^-$, write the curvature operator in block form, and study its special features in $4$ dimensions.
