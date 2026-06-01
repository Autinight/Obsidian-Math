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
> $$ f_{a}\left(t\right)= \frac{\sin \left(at\right) }{t } ,\quad f_{b}\left(t\right)= \frac{\sin \left(bt\right) }{t }$$ 

