代靖涵 25120222201319

> [!exercise] Exercise: 
> 
> 设 $f,g \in L^2(T)$，并且
> 
> $$f(x) \sim \sum_{n=1}^{\infty} c_n e^{inx},$$
> 
> $$g(x) \sim \sum_{n=-\infty}^{\infty} d_n e^{inx},$$
> 
> $$f(x) \cdot g(x) \sim \sum_{n=-\infty}^{\infty} \gamma_n e^{inx},$$
> 
> 试证明：
> 
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
> 
> 证明三角级数
> 
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