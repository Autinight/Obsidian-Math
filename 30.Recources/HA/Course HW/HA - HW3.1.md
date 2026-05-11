代靖涵 25120222201319

> [!exercise] 习题 1
> 求以下函数的 Fourier 变换：
>
> （1）$f(x)=\chi_{[-a,a]}(x)=\begin{cases}1, & |x|\leq a, \, a>0 \\ 0, & |x|>a\end{cases}$
>
> （2）$f(x)=\begin{cases}\cos(\pi x/2), & |x|\leq 1 \\ 0, & |x|>1\end{cases}$
>

> [!solution] Solution: 
> 1. 根据定义
>    $$ \begin{aligned} \hat{f}\left(t\right)&= \int _{-\infty}^{\infty}\chi _{\left[ -a,a \right]}\left(x\right)= \int _{-a}^{a}e^{-2\pi itx}\\&= \frac{e^{-2\pi iat} -e^{2\pi iat}}{-2\pi it }\\&= \frac{\sin \left(2\pi at\right) }{ \pi t} \end{aligned}$$ 
>    因此Fourier变换为
>    $$ \hat{f}\left(t\right)= \frac{\sin \left(2\pi at\right) }{\pi t } $$ 
>    且
>    $$ \hat{f}\left(0\right)= 2a $$ 
> 2. 根据定义
>    $$ \begin{aligned} \hat{f}\left(t\right)&= \int _{-1}^{1}\cos \left(\frac{\pi x }{2 }\right)e^{-2\pi itx} \,d x\\&= \int _{-1}^{1}\cos \left(\frac{\pi x }{ 2}\right)\cos \left(2\pi tx\right)\,d x-i\int _{-1}^{1}\cos \left(\frac{\pi x }{ 2}\right)\sin \left(2\pi tx\right)\,d x \\&= \int _{-1}^{1}\cos \left(\frac{\pi x }{2 }\right)\cos \left(2\pi tx\right)\,d x\\&= \int _{-1}^{1}\frac{1}{2}\cos \left(\frac{\pi x }{2 }+ 2\pi tx\right)+ \frac{1}{2}\cos \left(\frac{\pi x }{2 }-2\pi tx\right)\,d x\\&= \frac{\sin \left(\frac{\pi  }{2 }-2\pi t\right) }{\frac{\pi  }{2 }-2\pi t }+ \frac{\sin \left(\frac{\pi  }{2 }+ 2\pi t\right) }{\frac{\pi  }{2 }+ 2\pi t } \\&= \frac{\cos \left(2\pi t\right) }{\frac{\pi  }{2 }-2\pi t }+ \frac{\cos \left(2\pi t\right) }{ \frac{\pi  }{2 }+ 2\pi t}\\&= \frac{4\cos \left(2\pi t\right) }{\pi \left(1-16t^{2}\right) }\end{aligned}$$ 
>    其中第三行的等号是因为虚部被积函数为奇函数,  第四行用了积化和差.
>   因此Fourier变换为
>   $$ \hat{f}\left(t\right)= \frac{4\cos \left(2\pi t\right) }{\pi \left(1-16t^{2}\right) },\quad \hat{f}\left(\pm \frac{1}{4}\right)= 1 $$ 
