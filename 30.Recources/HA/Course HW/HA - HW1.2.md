代靖涵 25120222201319
> [!exercise] Exercise: 
> 若$f\in L^{p}\left(\mathbb{R} ^{n}\right)$, $\mathscr{K}\in L^{q}\left(\mathbb{R} ^{n}\right)$, $1\le p\le \infty$, $\frac{1 }{ p}+ \frac{1 }{q }= 1$, 证明: $f*\mathscr{K}$在$\mathbb{R} ^{n}$上有界并且连续.

> [!proof] Proof: 
> 
> 1. 由Hölder不等式, 
>     $$ \begin{aligned} \left| f*\mathscr{K}\left(x\right) \right| &\le  \int _{\mathbb{R} ^{n}}\left| f\left(x-y\right)\mathscr{K}\left(y\right) \right| \,d y\\&\le \left\| f \right\|_{p}\left\| \mathscr{K} \right\|_{q}< \infty \end{aligned} $$ 
>    故$f*\mathscr{K}$在$\mathbb{R} ^{n}$上有界. 
>
> 
> 2. 当$p< \infty$时, 
>     $$ \begin{aligned} \left| f*\mathscr{K}\left(x+ h\right)-f*\mathscr{K}\left(x\right) \right|&=\left| \int _{\mathbb{R} ^{n}}f\left(x+ h-y\right)\mathscr{K}\left(y\right)-f\left(x-y\right)\mathscr{K}\left(y\right) \,d y\right|  \\&\le \int _{\mathbb{R} ^{n}}\left| f\left(x+ h-y\right)-f\left(x-y\right) \right|\left| \mathscr{K}\left(y\right) \right|\,d y\\&\le \left(\int _{\mathbb{R} ^{n}}\left| f\left(x+ h\right)-f\left(x\right) \right|^{p} \right)^{\frac{1}{p}}\left\| \mathscr{K} \right\|_{q}   \end{aligned}  $$ 
>    由$L^{p}$积分的平移连续性, 我们有
>     $$ \lim_{h\to 0}\left(\int _{\mathbb{R} ^{n}}\left| f\left(x+ h\right)-f\left(x\right) \right| ^{p}\right)^{\frac{1 }{p }}= 0 $$ 
>    因此
>     $$ \lim_{h\to 0}f*\mathscr{K}\left(x+ h\right)= f*\mathscr{K}\left(x\right) $$
>    故$f*\mathscr{K}$连续. 
> 
>    当$p= \infty$时, 
>    $$ \begin{aligned} \left| f*\mathscr{K}\left(x+ h\right)-f*\mathscr{K}\left(x\right) \right|&=  \left| \int _{\mathbb{R} ^{n}}f\left(x-y\right)\mathscr{K}\left(y+ h\right)-f\left(x-y\right)\mathscr{K}\left(y\right)\,d y \right|\\&\le \int _{\mathbb{R} ^{n}}\left| f\left(x-y\right) \right|\left| \mathscr{K}\left(y+ h\right)-\mathscr{K}\left(y\right) \right|\,d y\\&\le \left\| f \right\|_{L^{\infty}}\int _{\mathbb{R} ^{n}}\left| \mathscr{K}\left(y+ h\right) -\mathscr{K}\left(y\right)\right|\,d y     \end{aligned}  $$ 
>    由$\mathscr{K}$的$L^{1}$-积分的平移连续性, $f*\mathscr{K}$连续.