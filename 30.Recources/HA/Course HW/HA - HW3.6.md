> [!exercise] 9
> 求积分方程
> $$
> \int_{-\infty}^{\infty}
> \frac{u(t)}{(x-t)^2+a^2}\,dt
> =
> \frac{1}{x^2+b^2},
> \qquad 0<a<b
> $$
> 的解 $u(t)\in L^2(\mathbb{R})$。

> [!proof] Proof: 
> 对两边做Fourier变换, 得到
>  $$  \hat{u}\cdot  \mathcal{F}\left[ \frac{1 }{x^{2}+ a^{2} } \right] = \mathcal{F}\left[ \frac{1 }{x^{2}+ b^{2} } \right]$$ 
>  
>  已知
>  $$ \mathcal{F}\left[ e^{-\left| x \right| } \right]= \frac{2 }{1+ 4\pi ^{2}t^{2} } $$ 
>  利用伸缩率
>  $$ \mathcal{F}\left[ e^{-\left| rx \right| } \right] = \frac{1 }{r }\frac{2 }{1+ 4\pi ^{2}\left(\frac{t }{r }\right)^{2} }= \frac{r }{2\pi ^{2} }\frac{1 }{\frac{r^{2} }{4\pi ^{2} }+ t^{2} }$$ 
>  令
>  $$ \frac{r^{2} }{4\pi ^{2} }= a^{2}, then \quad r= 2\pi a $$ 
>  我们有
>  $$ \mathcal{F}\left[ e^{-\left| 2\pi a x \right| } \right] \left(t\right)= \frac{a }{\pi  }\frac{1 }{a^{2}+ t^{2} }$$ 
>  则
>  $$ \mathcal{F}\left[ \frac{\pi  }{a }e^{-\left| 2\pi ax \right| } \right] \left(t\right)= \frac{1 }{a^{2}+ t^{2} }$$ 
>  
>  $$ \mathcal{F}\left[ \frac{1 }{a^{2}+ x^{2} } \right] \left(t\right)= \frac{\pi  }{a }e^{-\left| 2\pi a\left(-t\right) \right| }= \frac{\pi  }{a }e^{-\left| 2\pi at \right| }$$ 
>  
>  同样地
>  $$ \mathcal{F}\left[ \frac{1 }{b^{2}+ x^{2} } \right] \left(t\right)=  \frac{\pi  }{b }e^{-\left| 2\pi bt \right| }$$ 
>  我们有
>  $$ \hat{u} \frac{\pi  }{a  }e^{-\left| 2\pi at \right| }= \frac{\pi }{b  }e^{-\left| 2\pi bt \right| } $$ 
>  
>  $$ \hat{u}= \frac{a }{b}e^{\left| 2\pi at \right| }e^{-\left| 2\pi bt \right| }= \frac{a }{b}e^{2\pi \left(a-b\right)\left| t \right| } $$ 
>  
> $$ \begin{aligned} \begin{aligned} \begin{aligned} u\left(x\right)&= \int _{-\infty}^{\infty}\hat{u}e^{2\pi ixt}\,d t\\&= \frac{a }{b}\int _{-\infty}^{\infty}e^{2\pi \left(a-b\right)\left| t \right| }e^{2\pi ixt} \,d t\\&= \frac{a }{b }\int _{0}^{\infty}e^{2\pi \left(a-b+ ix\right)t}+ e^{2\pi \left(a-b-ix\right)t}\,d t\\&= -\frac{a }{b }\left(\frac{1 }{2\pi \left(a-b+ ix\right) }+ \frac{1 }{2\pi \left(a-b-ix\right) }\right)\\&= \frac{a }{b }\frac{1 }{2\pi  }\left(\frac{1 }{b-a+ ix }+ \frac{1 }{b-a-ix }\right)\\&= \frac{a }{b}\frac{1 }{2\pi  }\frac{2\left(b-a\right) }{\left(b-a\right)^{2}+ x^{2} } = \frac{a\left(b-a\right) }{\pi b\left(\left(b-a\right)^{2}+ x^{2}\right) }\end{aligned} \end{aligned}\end{aligned} $$ 