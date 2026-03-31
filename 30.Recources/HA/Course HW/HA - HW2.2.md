> [!exercise] Exercise: 
> 设 $f(x)=\cos ax,x\in[-\pi,\pi]$, 其中 $a$ 为非整数. 试求 $f$ 的实型 Fourier 级数. 并证明以下等式成立:
> $$ (1) \quad \frac{\pi}{\sin a\pi}=\frac{1}{a}+2a\sum_{k=1}^{\infty}\frac{(-1)^k}{a^2-k^2}; $$
> $$ (2) \quad \frac{\pi}{\tan a\pi}=\frac{1}{a}+2a\sum_{k=1}^{\infty}\frac{1}{a^2-k^2}; $$

> [!proof] Proof: 
> 设
>  $$ f\left(x\right)\sim \frac{1 }{2 }a_0+ \sum _{n = 1}^{\infty}\left(a_{n}\cos nx+ b_{n}\sin nx\right) $$ 
> 则
>  $$ a_0= \frac{1 }{\pi  }\int _{-\pi }^{\pi }\cos ax\,d x= \frac{2\sin a\pi  }{a\pi  } $$ 
> 
> $$ \begin{aligned} a_{n}= \frac{1 }{\pi  }\int _{-\pi }^{\pi }\cos ax \cos nx\,d x&= \frac{1}{2\pi  }\int _{-\pi }^{\pi }\cos \left(\left(a+ n\right)x\right)+ \cos \left(\left(a-n\right)x\right)\,d x\\&= \frac{1 }{2\pi  }\left(\frac{1 }{a+ n }[\sin \left(a+ n\right)x]_{-\pi }^{\pi }+ \frac{1 }{a-n }\left[ \sin \left(a-n\right)x \right]_{-\pi }^{\pi }\right)\\&= \frac{1 }{2\pi  }\left(\frac{\left(-1\right)^{n}2\sin \pi a }{a+ n }+ \frac{ \left(-1\right)^{n}2\sin \pi a}{a-n }\right)\\&=  \frac{\sin \pi a }{\pi  }2a\frac{\left(-1\right)^{n} }{a^{2}-n^{2} }\end{aligned} $$ 
>  由于$f$是偶函数, $b_{n}= 0$. 因此 $f$的实型级数为
>   $$ \frac{\sin a\pi  }{a\pi  }+\frac{\sin \pi a }{\pi  } 2a\sum _{n = 1}^{\infty}\frac{\left(-1\right)^{n} }{a^{2}-n^{2} }\cos nx $$ 
> 
>  1. 
>  $$ \varphi _{0}\left(t\right) =\frac{1}{2}\left(f\left(t\right)+ f\left(-t\right)\right)=  \cos at $$
>  而
>   $$ \frac{1-\cos at }{ t}= \frac{1}{2}a^{2}t+ o\left(t\right) $$ 
> 故存在$\delta > 0$, 使得对于任意的$\left| t \right|< \delta$, 都有
>  $$\left|  \frac{1-\cos at }{t } \right|\le \frac{1}{2}a^{2}\left| t \right| + \left| t \right|  $$ 
> 从而
>  $$ \int _{0}^{\delta }\frac{\left| \varphi _0 \left(t\right)-1 \right|  }{t }\le \int _{0}^{\delta }\frac{1}{2}a^{2}t+ t\,d t< \infty $$ 
> 由Dini判别法, $f$的 Fourier级数在$0$处收敛于$1$. 于是
>  $$ 1= \frac{\sin a\pi  }{a\pi  }+ \frac{\sin a\pi  }{\pi  }2a\sum _{n = 1}^{\infty}\frac{\left(-1\right)^{n} }{a^{2}-n^{2} } $$ 
>  即
>   $$ \frac{\pi  }{\sin a\pi  }= \frac{1 }{a }+ 2a\sum _{n = 1}^{\infty}\frac{\left(-1\right)^{n} }{a^{2}-n^{2} } $$ 
>
> 2. 由于$f\in C^{1}\left(\left[ -\pi ,\pi  \right]\right)$, 故$f$是有界变差的, 特别地, $f$在$\pi$附近有界变差. 由Jordan判别法,  $f$的 Fourier级数在$\pi$处收敛于
>  $$ \frac{1}{2}\left[ f\left(\pi + 0\right)+ f\left(\pi -0\right) \right]= \cos a\pi  $$ 
> 因此
>  $$ \cos a\pi = \frac{\sin a\pi  }{a\pi  }+ \frac{\sin a\pi  }{\pi  }2a\sum  _{n = 1}^{\infty}\frac{\left(-1\right)^{n} }{a^{2}-n^{2} }\cos n\pi  $$ 
> 故
>  $$ \frac{\pi  }{\tan a\pi  }= \frac{1 }{a }+ 2a\sum _{n = 1}^{\infty}\frac{1 }{a^{2}-n^{2} }   $$ 



