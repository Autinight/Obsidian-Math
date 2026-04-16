
> [!exercise] Exercise: 6
> 设$f(x)$以$2\pi$为周期, 且$f \in \operatorname{Lip}1$, 试证明:
> $$|\sigma_n(x) - f(x)| \leqslant A\frac{\ln n}{n}, \quad x \in [-\pi, \pi], n > 1,$$
> 其中$\sigma_n(x)$是$S(f)$的部分和的算术平均.

> [!proof] Proof: 
>
>  $$ \begin{aligned}  \sigma _{n}\left(x\right)-f\left(x\right)&= f*K_{n}\left(x\right)-f\left(x\right)\\&= \int _{-\pi }^{\pi }K_{n}\left(t\right)f\left(x-t\right)-\int _{-\pi }^{\pi }K_{n}\left(x\right)f\left(x\right) \,d t\\&= \int _{-\pi }^{\pi }K_{n}\left(t\right)\left(f\left(x-t\right)-f\left(x\right)\right)\,d t\\&= \int _{0 }^{\pi }K_{n}\left(t\right)\psi _{x}\left(t\right)\,d t \end{aligned} $$ 
> 其中
>  $$ \psi _{x}\left(t\right)= f\left(x+ t\right)+ f\left(x-t\right)-2f\left(x\right) $$ 
 
 $$ \int _{0}^{\frac{1 }{n }}K\left(t\right)\psi _{x}\left(t\right) $$ 