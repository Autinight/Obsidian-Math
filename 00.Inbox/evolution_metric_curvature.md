## §2.2 Evolution of Metric and Curvature

From the evolution equation (2.1) for the position vector, we can obtain the evolution equations for the geometric quantities of the hypersurface $X(\cdot,t)$.

> [!proposition] Proposition 2.2
> Under the mean curvature flow,
>
> $$
> \begin{aligned}
> 1)\quad &\frac{\partial}{\partial t}g_{ij}=-2Hh_{ij},\\[4pt]
> 2)\quad &\frac{\partial \vec n}{\partial t}
> =-\nabla^i H\frac{\partial X}{\partial x^i},\\[4pt]
> 3)\quad &\frac{\partial h_{ij}}{\partial t}
> =\Delta h_{ij}-2Hh_{il}g^{lm}h_{mj}+|A|^2h_{ij},\\[4pt]
> 4)\quad &\frac{\partial H}{\partial t}
> =\Delta H+|A|^2H,\\[4pt]
> 5)\quad &\frac{\partial}{\partial t}|A|^2
> =\Delta |A|^2-2|\nabla A|^2+2|A|^4.
> \end{aligned}
> $$

> [!proof]- Proof
> $$
> \begin{aligned}
> 1)\quad
> \frac{\partial g_{ij}}{\partial t}
> &=\frac{\partial}{\partial t}
> \left(
> \frac{\partial X}{\partial x^i},
> \frac{\partial X}{\partial x^j}
> \right)\\
> &=
> \left(
> \frac{\partial}{\partial x^i}(H\vec n),
> \frac{\partial X}{\partial x^j}
> \right)
> +
> \left(
> \frac{\partial X}{\partial x^i},
> \frac{\partial}{\partial x^j}(H\vec n)
> \right)\\
> &=
> H\left(
> \frac{\partial \vec n}{\partial x^i},
> \frac{\partial X}{\partial x^j}
> \right)
> +
> H\left(
> \frac{\partial X}{\partial x^i},
> \frac{\partial \vec n}{\partial x^j}
> \right)\\
> &=
> -2H\left(
> \vec n,
> \frac{\partial^2X}{\partial x^i\partial x^j}
> \right)\\
> &=-2Hh_{ij}.
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> 2)\quad
> \frac{\partial \vec n}{\partial t}
> &=
> \left(
> \frac{\partial \vec n}{\partial t},
> \frac{\partial X}{\partial x^i}
> \right)
> \frac{\partial X}{\partial x^j}g^{ij}\\
> &=
> -\left(
> \vec n,
> \frac{\partial}{\partial t}
> \frac{\partial X}{\partial x^i}
> \right)
> \frac{\partial X}{\partial x^j}g^{ij}\\
> &=
> -\left(
> \vec n,
> \frac{\partial}{\partial x^i}(H\vec n)
> \right)
> \frac{\partial X}{\partial x^j}g^{ij}\\
> &=
> -\frac{\partial H}{\partial x^i}
> \frac{\partial X}{\partial x^j}g^{ij}\\
> &=
> -\nabla^iH\frac{\partial X}{\partial x^i}.
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> 3)\quad
> \frac{\partial h_{ij}}{\partial t}
> &=
> \frac{\partial}{\partial t}
> \left(
> \frac{\partial^2X}{\partial x^i\partial x^j},
> \vec n
> \right)\\
> &=
> \left(
> \frac{\partial^2(H\vec n)}{\partial x^i\partial x^j},
> \vec n
> \right)
> -
> \left(
> \frac{\partial^2X}{\partial x^i\partial x^j},
> \frac{\partial H}{\partial x^l}
> \frac{\partial X}{\partial x^m}g^{lm}
> \right)\\
> &=
> \left(
> \frac{\partial}{\partial x^i}
> \left(
> \frac{\partial H}{\partial x^j}\vec n
> +H\left(-h_{jl}g^{lm}\frac{\partial X}{\partial x^m}\right)
> \right),
> \vec n
> \right)\\
> &\qquad
> -
> \left(
> \Gamma^k_{ij}\frac{\partial X}{\partial x^k}
> +h_{ij}\vec n,
> \frac{\partial H}{\partial x^l}
> \frac{\partial X}{\partial x^m}g^{lm}
> \right)\\
> &=
> \frac{\partial^2H}{\partial x^i\partial x^j}
> +
> H\left(
> \frac{\partial}{\partial x^i}
> \left(
> -h_{jl}g^{lm}\frac{\partial X}{\partial x^m}
> \right),
> \vec n
> \right)
> -
> \Gamma^k_{ij}
> \frac{\partial H}{\partial x^l}
> g^{lm}g_{km}\\
> &=
> \frac{\partial^2H}{\partial x^i\partial x^j}
> -
> \Gamma^k_{ij}\frac{\partial H}{\partial x^k}
> +
> H\left(
> -h_{jl}g^{lm}
> \frac{\partial^2X}{\partial x^i\partial x^m},
> \vec n
> \right)\\
> &=
> \nabla_i\nabla_jH-Hh_{jl}g^{lm}h_{im}.
> \end{aligned}
> $$
>
> Now we need the following lemma.

> [!lemma] Lemma 2.3
> $$
> \begin{aligned}
> (i)\quad
> \Delta h_{ij}
> &=
> \nabla_i\nabla_jH
> +Hh_{il}g^{lm}h_{mj}
> -|A|^2h_{ij},\\[4pt]
> (ii)\quad
> \frac12\Delta |A|^2
> &=
> \langle h_{ij},\nabla_i\nabla_jH\rangle
> +|\nabla A|^2
> +Z,
> \end{aligned}
> $$
>
> where
>
> $$
> Z=H\operatorname{tr}(A^3)-|A|^4,
> \qquad
> \operatorname{tr}(A^3)=g^{ij}g^{kl}g^{mn}h_{ik}h_{lm}h_{nj}.
> $$

> [!proof]- Proof
> 约定 $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$。超曲面 Gauss 方程：$R_{mij}^{\ \ \ k}=h_m^kh_{ij}-h_{mj}h_i^k$。
>
> $$
> \begin{aligned}
> (i)\quad
> \Delta h_{ij}
> &=
> g^{mn}\nabla_m\nabla_nh_{ij}\\
> &=
> g^{mn}\nabla_m\nabla_ih_{jn}\\
> &=
> g^{mn}
> \left(
> \nabla_i\nabla_mh_{jn}
> -R_{mij}^{\ \ \ k}h_{kn}
> -R_{min}^{\ \ \ k}h_{jk}
> \right)\\
> &=
> g^{mn}\nabla_i\nabla_jh_{mn}
> +
> g^{mn}
> \left(
> (h_{mj}h_{ik}-h_{mk}h_{ij})h^k_n
> +(h_{mn}h_{ik}-h_{mk}h_{in})h^k_j
> \right)\\
> &=
> \nabla_i\nabla_jH
> +h^n_jh_{ik}h^k_n
> -h^n_kh_{ij}h^k_n
> +Hh_{ik}h^k_j
> -h^n_kh_{in}h^k_j\\
> &=
> \nabla_i\nabla_jH
> +Hh_{il}g^{lm}h_{mj}
> -|A|^2h_{ij}.
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> (ii)\quad
> \Delta |A|^2
> &=
> \Delta\langle h_{ij},h_{ij}\rangle
> =
> g^{mn}\nabla_m\left(2\langle h_{ij},\nabla_nh_{ij}\rangle\right)\\
> &=
> 2g^{mn}
> \left(
> \langle\nabla_mh_{ij},\nabla_nh_{ij}\rangle
> +
> \langle h_{ij},\nabla_m\nabla_nh_{ij}\rangle
> \right)\\
> &=
> 2|\nabla A|^2
> +2\langle h_{ij},\Delta h_{ij}\rangle\\
> &=
> 2|\nabla A|^2
> +2\langle h_{ij},
> \nabla_i\nabla_jH
> +Hh_{ik}h^k_j
> -|A|^2h_{ij}
> \rangle\\
> &=
> 2|\nabla A|^2
> +2\langle h_{ij},\nabla_i\nabla_jH\rangle
> +2\left(H\operatorname{tr}(A^3)-|A|^4\right).
> \end{aligned}
> $$
>

> Let us come back the proof of 3). Substituting (i) into the above computation, we get
>
> $$
> \frac{\partial h_{ij}}{\partial t}
> =
> \Delta h_{ij}
> -2Hh_{il}g^{lm}h_{mj}
> +|A|^2h_{ij}.
> $$
>
> $$
> \begin{aligned}
> 4)\quad
> \frac{\partial H}{\partial t}
> &=
> \frac{\partial}{\partial t}(g^{ij}h_{ij})\\
> &=
> -g^{il}\frac{\partial g_{lm}}{\partial t}g^{mj}h_{ij}
> +g^{ij}\frac{\partial h_{ij}}{\partial t}\\
> &=
> 2Hh^{ij}h_{ij}
> +g^{ij}
> \left(
> \Delta h_{ij}
> -2Hh_i^{\ k}h_{kj}
> +|A|^2H
> \right)\\
> &=
> \Delta H+|A|^2H.
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> 5)\quad
> \frac{\partial}{\partial t}|A|^2
> &=
> \frac{\partial}{\partial t}
> \left(
> g^{ik}g^{jl}h_{ij}h_{kl}
> \right)\\
> &=
> 4H(g^{im}h_{mn}g^{nk})g^{jl}h_{ij}h_{kl}\\
> &\qquad
> +
> 2g^{ik}g^{jl}
> \left(
> \Delta h_{ij}
> -2Hh_{im}g^{mn}h_{nj}
> +|A|^2h_{ij}
> \right)h_{kl}\\
> &=
> 4Hh^{ik}h_{ij}h^j_k
> +2h^{ij}\Delta h_{ij}
> -4Hh_i^{\ n}h_{nj}h^{ij}
> +2|A|^4\\
> &=
> 2\langle h_{ij},\Delta h_{ij}\rangle
> +2|A|^4.
> \end{aligned}
> $$
>
> Also,
>
> $$
> \begin{aligned}
> \Delta |A|^2
> &=
> g^{kl}\nabla_k\nabla_l\langle h_{ij},h_{ij}\rangle
> =
> 2g^{kl}\nabla_k\langle h_{ij},\nabla_lh_{ij}\rangle\\
> &=
> 2|\nabla A|^2
> +2\langle h_{ij},\Delta h_{ij}\rangle.
> \end{aligned}
> $$
>
> Thus
>
> $$
> \frac{\partial}{\partial t}|A|^2
> =
> \Delta |A|^2
> -2|\nabla A|^2
> +2|A|^4.
> $$
>
> $\#$
