代靖涵 25120222201319

> [!exercise] 习题 2
> 若 $0<a<1$，当 $x\neq 0$，求
> $$
> \lim_{R\to\infty} \frac{1}{\pi} \int_0^\infty \frac{1}{t^a}\cdot\frac{\sin R(x-t)}{x-t}\, dt = \,?
> $$

> [!proof] Proof: 
> 令
> $$ f\left(u\right)= \chi _{\left(0,\infty\right)}\frac{1 }{u^{a } } $$ 
> 则原积分为
> $$ \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(u\right)\frac{\sin R\left(x-u\right) }{ x-u} \,d u= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(x-t\right)\frac{\sin Rt }{t }\,d t= f_{\frac{R }{2\pi  }}\left(x\right)$$ 
> **验证$\frac{f\left(x\right) }{1+ \left| x \right|  }\in L^{1}$**:  
> 1. 当$0< x< 1$时, 
>     $$ \frac{f\left(x\right) }{1+ \left| x \right|  }= \frac{1 }{x^{a} } \frac{1 }{1+ x }\sim \frac{1 }{x^{a} },\quad \text{as }x\to 0$$ 
>     而 $0< a< 1$, $\int _{0}^{1}\frac{1 }{x^{a} }$收敛, 因此$\int _{0}^{1}\frac{\left| f \right|  }{ 1+ \left| x \right| }\,d x< \infty$.
> 2. 当$1< x< \infty$时
>    $$ \frac{f\left(x\right) }{1+ \left| x \right|  }= \frac{1 }{x^{a} }\frac{1 }{1+ x }\sim x^{-\left(a+ 1\right)} ,\quad \text{as }x\to \infty $$ 
>    $a+ 1> 1$, $\int _{1}^{\infty}x^{-\left(a+ 1\right)}\,d x< \infty$, 因此
>    $$ \int _{1}^{\infty}\frac{\left| f \right|  }{1+ \left| x \right|  }< \infty $$ 
>  综上可知$\frac{f }{1+ \left| x \right|  }\in L^{1}$.
> 
> **计算Fourier级数:**
> 
>  1. 当$x> 0$时, $f$在$x$附近等于$t^{-a}$是光滑的, 特别地是有界变差的. 由Jordan判别法, $f$的周期化后函数在$x$满足Fourier级数收敛条件, 并且收敛到
>     $$ f\left(x\right) = x^{-a}$$ 
> 2. 当$x< 0$时,  $f$在$x$附近等于$0$, 因此$f$的Fourier级数在$x$处收敛到$0$.
>
> **最后**, 由单积分定理
>   $$ \lim_{R\to \infty}\frac{1 }{\pi  }\int _{0}^{\infty}\frac{1 }{t^{a} }\cdot \frac{\sin R\left(x-t\right) }{x-t }= \lim_{R\to \infty}f_{\frac{R }{2\pi  }}\left(x\right)= S= \begin{cases} x^{-a},&x> 0\\0,&x< 0 \end{cases}  $$ 