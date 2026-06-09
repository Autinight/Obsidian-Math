代靖涵 25120222201319

> [!exercise] Exercise: 
> 
> 设 $f,g \in L^2(T)$，并且
> $$f(x) \sim \sum_{n=1}^{\infty} c_n e^{inx},$$
> $$g(x) \sim \sum_{n=-\infty}^{\infty} d_n e^{inx},$$
> $$f(x) \cdot g(x) \sim \sum_{n=-\infty}^{\infty} \gamma_n e^{inx},$$
> 
> 试证明：
> $$\gamma_n = \sum_{k=-\infty}^{\infty} c_k d_{n-k}.$$

> [!proof] Proof: 
> 约定$c_{n}= 0\left(n\le 0\right)$, 则$f\sim \sum _{k= -\infty}^{\infty}c_{k}e^{ikx}$
> 令$S_{N}f\left(x\right)= \sum _{k= -N}^{N}c_{k}e^{ikx}$, 由于$f\in L^{2}\left(T\right)$, 有三角函数系的完全性, 
> $$ S_{N}f\to f\text{ in }L^{2}\left(T\right) $$ 
> 对于固定的$g\in L^{2}\left(T\right)$, 有$\bar{g}\left(x\right)e^{inx} \in L^{2}\left(T\right)$, 于是 $S_{N}f$和 $\bar{g}\left(x\right)e^{inx}$做$L^{2}$-配对, 得到
> $$ \begin{aligned} \frac{1 }{2\pi  }\int S_{N}f\left(x\right)g\left(x\right)e^{-inx}\,d x&= \sum _{k= -N}^{N}c_{k}\frac{1 }{2\pi  }\int _{-\pi }^{\pi }g\left(x\right)e^{-i\left(n-k\right)x}\,d x\\&= \sum _{k= -N}^{N}c_{k}d _{n-k} \end{aligned}$$ 
> 由内积的连续性, 
> $$ \begin{aligned} \gamma _{n}&= \frac{1 }{2\pi  }\int _{-\pi }^{2\pi }f\left(x\right)g\left(x\right)e^{-inx} \,d x\\&= \lim_{N\to \infty}\frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left(S_{N}f\right)\left(x\right)\cdot g\left(x\right)\cdot e^{-inx} \,d x\\&= \lim_{N\to \infty}\sum _{k= -N}^{N}c_{k}d _{n-k}\\&= \sum _{k = -\infty}^{\infty}c_{k} d _{n-k}\end{aligned}$$ 
> 其中由Cauchy-Schwarz不等式
> $$ \sum _{ k= -\infty}^{\infty}\left| c_{k}d _{n-k} \right|\le \left(\sum _{k}\left| c_{k} \right|^{2} \right)^{\frac{1}{2}} \left(\sum _{k}\left|  \,d  _{n-k} \right|^{2} \right)^{\frac{1}{2}}= \left\| c \right\|_{\ell ^{2}} \left\| d \right\|_{\ell ^{2}}< \infty$$ 
> 级数是绝对收敛的.


> [!exercise] Exercise: 
> 证明三角级数
> $$\sum_{n=1}^{\infty} \frac{\sin nx}{\ln(n+1)}$$
> 
> 在 $[-\pi, \pi]$ 收敛，但它不是任何可积函数的 Fourier 级数。

> [!proof] Proof: 
> 若存在$f\in L^{1}\left[ -\pi ,\pi  \right]$使得它是$f$的Fourier级数, 则由于级数只要正弦项, $f$是奇函数, 并且$f$的正弦系数满足
> $$ b_{n}= \frac{1 }{\pi  }\int _{-\pi }^{\pi }f\left(x\right)\sin \left(nx\right)\,d x= \frac{1 }{\ln \left(n+ 1\right) },\quad n\ge 1 $$ 
> 令
> $$ F\left(x\right)= \int _{0}^{x}f\left(t\right)\,d t $$ 
> 由于$f\in L^{1}$, 可得$F$在$\left[ -\pi ,\pi  \right]$上绝对连续.
> 通过逐项积分, 我们得到
> $$ F\left(x\right)= \sum _{n = 1}^{\infty}\frac{b_{n}\left(1-\cos nx\right) }{ n}= \sum _{n = 1}^{\infty}\frac{b_{n} }{n }-\sum _{n = 1}^{\infty}\frac{b_{n} }{n }\cos nx $$ 
> 从而
> $$ \frac{1 }{2\pi  } \int _{-\pi }^{\pi }F\left(x\right)\,d x= \sum _{n = 1}^{\infty}\frac{b_{n} }{ n}$$ 
> 其中 $b_{n}= \frac{1 }{\ln \left(n+ 1\right) }$
> $$ \sum _{n = 1}^{\infty}\frac{b_{n} }{n }= \sum _{n = 1}^{\infty}\frac{1 }{ n\ln \left(n+ 1\right)} $$ 
> 但是
> $$ \int _{2}^{\infty}\frac{\,d x }{ x\ln x}= \left[ \ln \ln x \right]_{2}^{\infty}= \infty $$
> 因此由积分判别法, 级数发散多$+ \infty$ , 与$F$在$\left[ -\pi ,\pi  \right]$上绝对连续矛盾. 


> [!exercise] 11
> 设 $f\in L^2(T)$，
> 
> $$
> f\sim \sum_{k=-\infty}^{\infty} c_k e^{ikx}.
> $$
> 
> 对每个 $n$，令
> 
> $$
> \gamma_n=\sum_{k\ne n} c_k\frac{1}{n-k}
> =\sum_{k\ne 0} c_{n-k}\frac{1}{k}.
> $$
> 
> 试证明：
> 
> $$
> \sum_{n=-\infty}^{\infty}|\gamma_n|^2
> \le \pi^2\sum_{k=-\infty}^{\infty}|c_k|^2.
> $$

于是
$$ f\cdot g \sim \sum \gamma _{k} $$ 


$$ \left< f, e^{ikx} \right>= c_{k} $$ 

$$ \gamma _{n}= \sum  c_{k}d _{n-k} $$ 

$$ f\sim \sum _{k= -\infty}^{\infty}c_{k}e^{ikx} $$ 

$$ g\sim \sum _{k= -\infty}^{\infty}c_{k}e^{ikx} $$ 

$$ \begin{aligned} \begin{aligned} \left< f\cdot g, e^{inx} \right>&= \left< f, \bar{g} e^{inx} \right> = \sum \left< c_{k}e^{ikx}, \bar{g}e^{inx} \right>=\sum \left< c_{k}e^{ikx}, d _{-m}e^{imx}e^{inx} \right>\\&= \sum \left< c_{k}e^{ikx}, d _{-m}e^{i\left(m+ n\right)x} \right> \\&= \sum c_{k}d _{n-k} \end{aligned}\end{aligned}$$ 

$$ \begin{aligned} \begin{aligned} \left< f, \bar{g}inx \right>&= \sum \left< c_{k}e^{ikx}, \bar{g}e^{inx} \right>\\&= \sum c_{k}\left< e^{ikx}, \bar{g} e^{inx} \right>\\&= \sum  c_{k}\left< g e^{-inx}, e^{-ikx} \right>\\&= \sum c_{k}\left< g, e^{i\left(n-k\right)x} \right>\\&= \sum c_{k} g_{n-k} \end{aligned}\end{aligned} $$ 

$$ d _{n-k}= \frac{1 }{n-k },\quad  d _{k}= \frac{1 }{k },\quad  d _{0}= 0 $$ 

考虑以$d _{k}$为Fourier系数的函数
$$ g\sim  \sum _{k \neq 0}\frac{1 }{k }e^{ikx} $$ 

逐项求导, 得到

$$ g^{\prime} \left(x\right)= i\sum _{k \neq 0} e^{ikx} $$ 

$$ \int _{-\pi }^{\pi }e^{-ikx}\,d x=  - \frac{1 }{ik } e^{-ikx}|_{-\pi }^{\pi }=  \frac{1 }{ik }2i \sin kx= \frac{2\sin k\pi  }{k }$$ 

$$ \int _{-\pi }^{\pi }\operatorname{sgn}\left(x\right)e^{-ikx} \,d x= 2\int _{0}^{\pi }e^{-ikx}\,d x=  -2\frac{1 }{ik }\left[ e^{-ikx} \right]_{0}^{\pi }=\frac{4 }{ik } $$ 

$$ e^{-i\pi }= -1,\quad e^{0}= 1 $$ 

$$ \sum _{k= -\infty}^{\infty}\left| \gamma _{n} \right|^{2}=  \left\| f\cdot g \right\|_{2}^{2}\le  \left\| f^{2} \right\|_{L^{2}}\left\| g ^{2}\right\|_{L^{2}}  $$ 
有Dirichlet判据, $\sum _{k \neq 0}^{\infty}\frac{1 }{k }e^{ikx}$在$x\neq 2k\pi$的时候收敛, 从而Fourier级数是几乎处处收敛的.

$-i$



> [!proof] Proof:
> 由 Parseval 知 $\{c_k\}_{k\in \mathbb Z}\in \ell^2(\mathbb Z)$。先注意对每个固定的 $n$，
> $$
> \sum_{k\ne 0}\left|c_{n-k}\right|\frac{1}{|k|}
> \le
> \left(\sum_{k\ne 0}|c_{n-k}|^2\right)^{1/2}
> \left(\sum_{k\ne 0}\frac{1}{k^2}\right)^{1/2}
> <\infty,
> $$
> 所以 $\gamma_n$ 定义良好。
>
> 令 $h$ 为 $2\pi$-周期函数，且在 $0<x<2\pi$ 上
> $$
> h(x)=i(\pi-x).
> $$
> 则 $h\in L^\infty(T)$，并且 $\|h\|_\infty\le \pi$。又
> $$
> \widehat h(0)
> =
> \frac{1}{2\pi}\int_0^{2\pi} i(\pi-x)\,dx
> =
> 0.
> $$
> 对 $k\ne 0$，有
> $$
> \begin{aligned}
> \widehat h(k)
> &=
> \frac{1}{2\pi}\int_0^{2\pi} i(\pi-x)e^{-ikx}\,dx\\
> &=
> \frac{i}{2\pi}\left[\frac{(\pi-x)e^{-ikx}}{-ik}\right]_{0}^{2\pi}\\
> &=
> \frac{1}{k}.
> \end{aligned}
> $$
> 因此
> $$
> h(x)\sim \sum_{k\ne 0}\frac{1}{k}e^{ikx}.
> $$
>
> 因为 $f\in L^2(T)$ 且 $h\in L^\infty(T)$，所以 $fh\in L^2(T)$。由前一题的乘积 Fourier 系数公式，$fh$ 的第 $n$ 个 Fourier 系数为
> $$
> \widehat{fh}(n)
> =
> \sum_{m=-\infty}^{\infty}c_m\widehat h(n-m)
> =
> \sum_{m\ne n}c_m\frac{1}{n-m}
> =
> \gamma_n.
> $$
> 于是由 Parseval，
> $$
> \begin{aligned}
> \sum_{n=-\infty}^{\infty}|\gamma_n|^2
> &=
> \sum_{n=-\infty}^{\infty}|\widehat{fh}(n)|^2\\
> &=
> \frac{1}{2\pi}\int_T |f(x)h(x)|^2\,dx\\
> &\le
> \|h\|_\infty^2\frac{1}{2\pi}\int_T |f(x)|^2\,dx\\
> &\le
> \pi^2\sum_{k=-\infty}^{\infty}|c_k|^2.
> \end{aligned}
> $$
> 即
> $$
> \sum_{n=-\infty}^{\infty}|\gamma_n|^2
> \le
> \pi^2\sum_{k=-\infty}^{\infty}|c_k|^2.
> $$




$$ \left\| f^{2} \right\|_{L^{2}}, $$ 