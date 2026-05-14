> [!exercise] 1
> 证明
> $$
> (C[a,b])^*=V_0[a,b].
> $$

> [!proof] Proof: 
> 对于$\alpha \in V_0\left[ a,b \right]$, 定义
> $$ T_{\alpha } \left(f\right)= \int _{a}^{b}f\,d \alpha ,\quad f\in C\left[ a,b \right]$$ 
> 由于$f$连续, $\alpha$有界变差, 故Riemann-Stieljets积分存在,并且
> $$ \left| T_{\alpha }\left(f\right) \right|= \left| \int _{a}^{b}f\,d \alpha  \right|\le \left\| f \right\|_{\infty}V_{a}^{b}\left(\alpha \right)   $$ 
> 故
> $$ \left\| T_{\alpha } \right\|\le \left\| \alpha  \right\|_{BV} $$ 
> 此外, 任取$\varepsilon > 0$, 存在分划$P$, 使得
> $$ \sum _{i = 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|> V_{a}^{b}\left(\alpha \right)-\varepsilon   $$ 
> 可以构造连续函数$f_{\varepsilon }$, 满足$\left\| f_{\varepsilon } \right\|_{\infty}\le 1$, 在$\left(x_{i-1},x_{i}\right)$上, $\left| f_{\varepsilon }-\operatorname{sgn}\left(\alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)\right) \right|\le \frac{\varepsilon  }{b-a }$, 则
> $$ T_{a}\left(f_{\varepsilon }\right) \ge V_{a}^{b}\left(\alpha \right)-2\varepsilon $$ 
> 令$\varepsilon \to 0$, 得到
> $$ \left\| T_{\alpha } \right\|= V_{a}^{b}\left(\alpha \right) $$ 
> 我们定义了等距的线性映射
> $$ T: V_0\left[ a,b \right]\to \left(C\left[ a,b \right]\right)^{*},\quad \alpha \mapsto T_{\alpha } $$ 
> 我们接下来说明$T$是满的, 事实上. 
> 令$B\left[ a,b \right]$是$\left[ a,b \right]$上的有界函数构成的空间, 配备了一致范数. 则$C\left[ a,b \right]$是$B\left[ a,b \right]$的子空间. 取$\varphi \in \left(C\left[ a,b \right]\right)^{*}$.由Hahn-Banach定理, 存在$\widetilde{\varphi}\in B\left[ a,b \right]^{*}$, 使得
> $$ \widetilde{\varphi}|_{C\left[ a,b \right]}= \varphi  $$ 
> 并且
> $$ \left\| \widetilde{\varphi} \right\|= \left\| \varphi  \right\| $$ 
> 定义
> $$ \alpha \left(x\right)= \widetilde{\varphi}\left(\chi _{(a,x]}\right) $$ 
> 则
> $$ \alpha \left(a\right)= 0 $$ 
> 任取分划$P: a= x_0< x_1< \cdots < x_{n}= b$.
> 则
> $$ \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)= \widetilde{\varphi}\left(\chi _{(x_{i-1},x_{i}]}\right) $$ 
> 定义
> $$ g =  \sum _{i= 1}^{n}\operatorname{sgn}\left(\alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)\right)\chi _{(x_{i-1},x_{i}]} $$ 
> 则$g\in B\left[ a,b \right]$, 那么
> $$ \widetilde{\varphi}\left(g\right)= \sum _{i= 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|  $$ 
> 并且
> $$ \sum _{i= 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|= \widetilde{\varphi}\left(g\right)\le \left\| \widetilde{\varphi} \right\|\left\| g \right\|_{\infty}= \left\| \varphi  \right\|\left\| g \right\|_{\infty}\le \left\| \varphi  \right\|  $$ 
> 因此
> $$ V_{a}^{b}\left(\alpha \right)\le \left\| \varphi  \right\| $$ 
> $\alpha$是有界变差的, 并且$\left\| \alpha   \right\|_{BV}\le \left\| \varphi  \right\|$. 接下来只需要验证 $T_{\alpha }= \varphi$.
> 对于$f\in C\left[ a,b \right]$, 取Riemann-Stieltjes和
> $$ \begin{aligned} S\left(P,\xi \right)&= \sum _{i= 1}^{n}f\left(\xi _{i}\right)\left(\alpha  \left(x_{i}\right)-\alpha  \left(x_{i-1}\right)\right)\\&= \sum _{i= 1}^{n}f\left(\xi _{i}\right)\widetilde{\varphi}\left(\chi _{I_{i}}\right)= \widetilde{\varphi}\left(\sum f\left(\xi _{i}\right)\chi _{I_{i}}\right)\end{aligned} $$ 
> 当$\left| P \right|\to 0$时, $\sum f\left(\xi _{i}\right)\chi _{I_{i}}$一致地趋于$f$, 因此
> $$ S\left(P,\xi \right)\to \widetilde{\varphi}\left(f\right)= \varphi \left(f\right) $$ 
> 另一方面, 由$\alpha$有界变差, , $S\left(P,\xi \right)\to \int _{a}^{b}f\,d \alpha$, 因此
> $$ \varphi \left(f\right)= T_{\alpha } $$ 
> 最后, 由于$T$等距, $T_{\alpha }= T_{\beta }\implies V_{a}^{b}\left(\alpha -\beta \right)= 0\implies \alpha = \beta$(因为$\alpha \left(a\right)= \beta \left(a\right)= 0$)


> [!exercise] 2
> 证明
> $$
> (\ell^p)^*=\ell^q,
> $$
> 其中
> $$
> \frac{1}{p}+\frac{1}{q}=1,\qquad 1\leq p<\infty.
> $$

> [!exercise] 3
> 证明
> $$
> c^*=(c_0)^*=\ell^1,
> $$
> 其中
> $$
> c_0=\left\{x=\{\xi_n\}\in c\mid \lim_{n\to\infty}\xi_n=0\right\}
> $$
> 是 $c$ 的子空间。
