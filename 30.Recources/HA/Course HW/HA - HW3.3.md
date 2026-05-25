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
>  $$ \begin{aligned} \mathcal{F}\left(f\right)\left(\xi \right)= \hat{g}* \hat{g}\left(\xi \right)&= \pi ^{2} \int _{-\infty}^{\infty} \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(y\right)\chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(\xi -y\right)\,d y\\&= \begin{cases} 0,&\xi \le -\frac{a }{\pi  }, \text{or} \xi \ge \frac{a }{\pi  } \\ \pi a-\pi ^{2}\left| \xi  \right|,& \left| \xi  \right|\le \frac{a }{\pi  }   \end{cases} \end{aligned}$$ 

> [!exercise] Exercise: 
> 求以下积分的值：
> (1) $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^2 \cos xt \, dt = ?$   

> [!exercise] Exercise: 
>  设 $g \in L(R)$ , $\int_{R} g(x) \mathrm{d}x = 1$ 
> 
>  (1) 证明：对一切 $\xi \in R$ ,
>  $$
>  \lim _ {\delta \rightarrow 0} \hat {g} (\delta \xi) = 1;
>  $$
>  (2) 设连续的 $f \in L(R)$ ，且 $\hat{f} \in L(R)$ ，证明：
>  $$
>  \lim _ {\delta \rightarrow 0} \int_ {- \infty} ^ {\infty} \hat {g} (\delta \xi) \hat {f} (\xi) \mathrm{e} ^ {2 m \xi x} \mathrm{d} x = f (x)
>  $$
>  对一切 $x$ 成立.


> [!exercise] Exercise: 
> (1) 设 $f \in L(R)$ ，且 $(f * f)(x) = f(x)$ ，a.e., 试证 
> $$
>f\left(x\right) = 0, \quad \mathrm{a.e.};
> $$
> (2) 设 $f \in L(\mathbb{R})$ ，且 $(f * f)(x) = 0$ ，a.e., 试证 $f(x) = 0$ ，a.e..
