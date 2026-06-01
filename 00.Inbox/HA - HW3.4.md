> [!exercise] Exercise: 8 
> 求以下积分的值：
> $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^4 \mathrm{d}t = ?$

> [!proof] Proof: 
> 令
> $$ f\left(t\right)= \frac{\left(\sin t\right)^{2} }{t^{2} } $$ 
> 则当$t \to 0$时, $f\left(t\right)\to 1$, 当$t\to \infty$, 时, $f\left(t\right)= o\left(t^{-2}\right)$, 因此$f\in L^{1}\cap L^{2}\left(\mathbb{R} \right)$
> 于是
> $$ \left\| f \right\|_{2}= \left\| \hat{f} \right\|_{2} $$ 
> 之前的作业中证明了
> $$ \hat{f}\left(\xi \right)= \left(\pi ^{2}-\pi \left| \xi  \right| \right) _{+ }$$ 
> 于是
> $$ \left\| \hat{f} \right\|_{2}^{2}= \int _{-\infty}^{\infty}\left(\pi ^{2}-\pi \left| \xi  \right| \right)_{+ }^{2}\,d \xi = 2\int _{0}^{\pi }\left(\pi ^{2}-\pi \xi \right)^{2}\,d \xi = \frac{2 }{3 }\pi  $$ 
> 而
> $$ \left\| f \right\|^{2}_{2}= \int _{-\infty}^{\infty}\frac{\left(\sin t\right)^{4} }{t^{4} }\,d t $$ 
> 因此
> $$ \int _{-\infty}^{\infty}\frac{\left(\sin t\right)^{4} }{t^{4} }\,d t= \frac{2 }{3 }\pi  $$ 

> [!exercise] Exercise: 7
> 用 Parseval 等式来证明以下关系式：当 $a > 0, b > 0$ 时，
> 1. $\int_{-\infty}^{\infty} \frac{\sin(at)\sin(bt)}{t^2} \mathrm{d}t = \pi \min(a, b)$ ;   
> 2. $\int_{-\infty}^{\infty} \frac{t^2}{(t^2 + a^2)(t^2 + b^2)} \, \mathrm{d}t = \frac{\pi}{a + b}$ .

> [!proof] Proof: 
> 1. 令
>    $$ f_{a}\left(t\right)= \frac{\sin \left(at\right) }{t },\quad f_{b}\left(t\right)= \frac{\sin \left(bt\right) }{t }  $$ 
>    
>    
>    则 $f_{a}, f_{b}\in L^{1}\cap L^{2}\left(\mathbb{R} \right)$.
>    
>    
>    由Parseval等式, 我们有
>    $$ \int _{-\infty}^{\infty}f_{a}\left(t\right){f}_{b}\left(t\right)\,d t= \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)\,d t$$ 
>    
>    其中
>    $$ \int _{-\infty}^{\infty}f_{a}\left(t\right)f_{b}\left(t\right)\,d t= \int _{-\infty}^{\infty}\frac{\sin \left(at\right)\sin \left(bt\right) }{t^{2} }\,d t $$ 
>    
>    
>    
>    
>    
>    此外,
>    $$F\left[ \frac{\sin \left(ax\right) }{  x} \right]\left(\xi \right)= \pi \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(\xi \right) $$  
>    
>    于是
>    $$ \hat{f}_{a}\left(t\right)= \pi \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(t\right) ,\quad \hat{f}_{b}\left(t\right)= \pi \chi _{\left[ -\frac{b }{2\pi  },\frac{b }{2\pi  } \right]}\left(t\right)$$
>    因此
>    $$ \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right) \hat{f}_{b}\left(t\right)\,d t= \pi ^{2}\int _{-\frac{\min \left(a,b\right) }{2\pi  }}^{\frac{\min \left(a,b\right) }{2\pi  }}\,d t= \pi \min \left(a,b\right)$$  
>    
>    最终得到
>    $$ \int _{-\infty}^{\infty}\frac{\sin \left(at\right) \sin \left(bt\right)}{t^{2} }\,d t= \pi \min \left(a,b\right)$$ 
> 
> 2. 令
>    $$ f_{a}\left(t\right)= \frac{t }{t^{2}+ a^{2} },\quad f_{b}\left(t\right)= \frac{t }{t^{2}+ b^{2} }$$ 
>    
>    则
>    $$ f_{a}\left(t\right)= \frac{1}{2}\left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right) $$ 
>    
>    $$ \frac{1 }{2\pi \left(a+ it\right) }= \left[ \frac{e^{-\left(a+ it\right)2\pi x} }{ 2\pi \left(a+ it\right)} \right]_{\infty}^{0}= \int _{0}^{\infty}e^{-\left(a+ it\right)2\pi x}= \int _{0}^{\infty}e^{-2\pi ax}e^{-2\pi x it}\,d x $$ 
>    类似地, 
>    $$ \frac{1 }{2\pi  }\frac{1 }{a-it }= \int _{-\infty}^{0}e^{2\pi ax} e^{2\pi x it}\,d x$$ 
>    故
>    $$ \frac{1 }{2\pi  }\left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right) = \mathcal{F}\left[ e^{-2\pi a\left| x \right| } \right]\left(t\right)$$ 
>    故
>    $$ f_{a}\left(t\right)= \mathcal{F}\left[ \pi e^{-2\pi a\left| x \right| } \right] \left(t\right)$$
>    故
>    $$ \hat{f}_{a}\left(t\right)eq\pi e^{-2\pi a\left| -t \right| }= \pi e^{-2\pi a\left| t \right| } $$  
>    
>    同样地
>    $$ \hat{f}_{b}\left(t\right)= e^{-2\pi  b \left| t \right| } $$ 
>    
>    于是
>    $$ \begin{aligned} \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)&= \pi ^{2}\int _{-\infty}^{\infty}e^{-2\pi \left(a+ b\right)\left| t \right| }\,d t\\&= 2\pi ^{2}\int _{0}^{\infty}e^{-2\pi \left(a+ b\right)t} \,d t\\&= \frac{\pi  }{a+ b }\end{aligned} $$ 
>    由Parseval等式, 
>    $$ \begin{aligned} \int _{-\infty}^{\infty}\frac{t^{2} }{\left(t^{2}+ a^{2}\right)\left(t^{2}+ b^{2}\right) }&= \int _{-\infty}^{\infty}f_{a}\left(t\right)f_{b}\left(t\right)\,d t\\&= \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)\,d t\\&= \frac{\pi  }{a+ b } \end{aligned} $$ 