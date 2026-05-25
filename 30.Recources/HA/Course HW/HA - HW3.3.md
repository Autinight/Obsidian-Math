代靖涵 25120222201319

> [!exercise] Exercise: 
> 求以下函数的 Fourier 变换：
> (提示：利用已知函数的 Fourier 变换及 Fourier 变换的性质)
> (1) $f(x) = \left(\frac{\sin ax}{x}\right)^2, a > 0;$   

> [!proof] Proof: 
> 我们有
> $$ \mathcal{F}\left[ \chi _{\left[ -b,b \right]} \right]\left(\xi \right)= \frac{\sin \left(2 \pi b \xi \right) }{\pi \xi  } $$ 
> 令
> $a = 2\pi  b$, 则
>  $$ \mathcal{F}\left[ \chi _{\left[ -b,b \right]} \right]\left(\xi \right)= \frac{\sin \left(a\xi \right) }{\pi \xi  }$$ 
> $$ \mathcal{F}\left[ \frac{\sin \left(a\xi \right) }{\pi \xi  } \right]\left(x\right)=  \chi _{\left[ -b,b \right]}\left(-x\right) = \chi _{\left[ -b,b \right]}\left(x\right)$$  
>  令 $g\left(x\right)= \frac{\sin ax }{x }$, 
> 则
>  $$ \mathcal{F}\left[ g \right]= \mathcal{F}\left[ \pi \cdot \frac{\sin \left(a\xi \right) }{\pi \xi  } \right] = \pi \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(x\right) $$ 
> 则 $f\left(x\right)= g\left(x\right)\cdot g\left(x\right)$, 
>  $$ \begin{aligned} \mathcal{F}\left(f\right)\left(\xi \right)= \hat{g}* \hat{g}\left(\xi \right)&= \pi ^{2} \int _{-\infty}^{\infty} \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(y\right)\chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(\xi -y\right)\,d y\\&= \begin{cases} 0,&\xi \le -\frac{a }{\pi  }, \text{or} \xi \ge \frac{a }{\pi  } \\ \pi a-\pi ^{2}\left| \xi  \right|,& \left| \xi  \right|\le \frac{a }{\pi  }   \end{cases}\\&= \left(\pi a- \pi ^{2}\left| \xi  \right| \right)_{+ } \end{aligned}$$ 

> [!exercise] Exercise: 
> 求以下积分的值：
> (1) $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^2 \cos xt \, dt = ?$   

> [!proof] Proof: 
> 在上一题中取$a= 1$, 
> 令$f\left(t\right)=\left(\frac{\sin t }{t }\right)^{2}$, 由于$f$是偶函数, 我们有
> $$ \hat{f}\left(\xi \right)= \int _{-\infty}^{\infty}\left(\frac{\sin t }{t }\right)^{2}\cos 2\pi \xi t\,d t = \left(\pi -\pi ^{2}\left| \xi  \right| \right)_{+ }$$  
> 于是
> $$ \frac{1 }{\pi  }\int _{-\infty}^{\infty}\left(\frac{\sin t }{t }\right)^{2}\cos xt\,d t=\frac{1 }{\pi  } \hat{f}\left(\frac{x }{2\pi  }\right) = \left(1-\frac{\left|x  \right|  }{2 }\right)_{+ }$$ 

> [!exercise] Exercise: 
>  设 $g \in L(R)$ , $\int_{R} g(x) \mathrm{d}x = 1$ 
> 
>  (1) 证明：对一切 $\xi \in R$ ,
>  $$
>  \lim _ {\delta \rightarrow 0} \hat {g} (\delta \xi) = 1;
>  $$
>  (2) 设连续的 $f \in L(R)$ ，且 $\hat{f} \in L(R)$ ，证明：
>  $$
>  \lim _ {\delta \rightarrow 0} \int_ {- \infty} ^ {\infty} \hat {g} (\delta \xi) \hat {f} (\xi) \mathrm{e} ^ {2 \pi i \xi x} \mathrm{d} \xi  = f (x)
>  $$
>  对一切 $x$ 成立.

> [!proof] Proof: 
> 1. $$ \begin{aligned} \begin{aligned} \hat{g}\left(\delta \xi \right)&=\int _{-\infty}^{\infty}g\left(t\right)e^{-2\pi  i \left(\delta \xi \right)t}\,d  t\end{aligned} \end{aligned}$$ 
>    当$\delta \to 0$时, 
>    $$ g\left(t\right)e^{-2\pi i\left(\delta \xi \right)t}\to g\left(x\right) $$ 
>    逐点地成立.
>    又
>     $$ \left\| g\left(t\right)e^{-2\pi i\delta \xi t} \right\|_{L^{1}}\le \left\| e^{-2\pi i\delta \xi t} \right\|_{\infty}\left\| g \right\|_{L^{1}}\le \left\| g \right\|_{L^{1}} $$ 
>    故由控制收敛定理
>     $$ \lim_{\delta \to 0}\hat{g}\left(\delta \xi \right)= \int _{-\infty}^{\infty}g\left(t\right)\,d t= 1 $$ 
> 2. 由于$f$连续, $f, \hat{f}\in L^{1}$, 我们有
> $$ f\left(x\right)= \int _{-\infty}^{\infty}\hat{f}\left(\xi \right)e^{2\pi i \xi x}d\xi  $$ 
> 令
>  $$ I_{\delta }= \int _{-\infty}^{\infty}\hat{g}\left(\delta \xi \right)\hat{f}\left(\xi \right)e^{2\pi i \xi x}d\xi  $$ 
> 当$\delta \to 0$时, 
> $$ \hat{g}\left(\delta \xi \right)\hat{f}\left(\xi \right)e^{2\pi i\xi x} \to \hat{f}\left(\xi \right)e^{2\pi i\xi x}\,$$ 
> 逐点地成立, 并且
> $$ \left| \hat{g}\left(\delta \xi \right) \right|\le \left\| g \right\|_{L^{1}}  $$ 
> $$ \left| \hat{g}\left(\delta \xi \right)\hat{f}\left(\xi \right)e^{2\pi i\xi x} \right|  \le \left\| g \right\|_{L^{1}}\left| \hat{f} \right| $$ 
> 而$\left\| g \right\|_{L^{1}}\left| \hat{f} \right|\in L^{1}$, 由控制收敛定理
> $$ \lim_{\delta \to 0}I_{\delta } \left(x\right)= \int _{\mathbb{R} }\hat{f}\left(\xi \right)e^{2\pi i\xi x}d\xi = f\left(x\right)$$ 


> [!exercise] Exercise: 
> (1) 设 $f \in L(R)$ ，且 $(f * f)(x) = f(x)$ ，a.e., 试证 
> $$
>f\left(x\right) = 0, \quad \mathrm{a.e.};
> $$
> (2) 设 $f \in L(\mathbb{R})$ ，且 $(f * f)(x) = 0$ ，a.e., 试证 $f(x) = 0$ ，a.e..

> [!proof] Proof: 
> 1. $$ \hat{f}\left(x\right)= \widehat{f*f}\left(x\right)= \hat{f}\left(x\right)\hat{f}\left(x\right) $$ 
>    于是
>    $$ \hat{f}\left(\mathbb{R} \right)\subseteq \left\{ 0,1 \right\} $$ 
>    由于$\hat{f}$连续, $\mathbb{R}$连通, 只能有 $\hat{f}\equiv 1$或者$\hat{f}\equiv 0$, 前者Riemann-Lebesgue引理矛盾, 因此只能有$\hat{f}\equiv 0$.
>    由 Fourier变换的唯一性, 
>    $$ f\left(x\right)= 0,\quad a.e. $$ 
> 2. 取Fourier变换, 得到
>   $$ \hat{f}\left(x\right)\hat{f}\left(x\right)= 0\implies \hat{f}\left(x\right)\equiv 0\implies f= 0,\quad a.e. $$ 