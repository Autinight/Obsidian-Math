### 10:32

> [!exercise] Exercise: 5
> 试用算术平均求和法求以下级数的广义和:
> 1. $\frac12+\sum_{k=1}^{\infty}\cos kx$, $x\in[-\pi,\pi]\setminus\{0\}$;
> 2. $\sum_{k=1}^{\infty}\sin kx$, $x\in[-\pi,\pi]$.


$$ S_{n}= \frac{1}{2}+ \sum _{ k= 1}^{n}\cos kx $$ 

$$ \sigma _{n}= \frac{\sum _{k = 0}^{n} S_{n}}{n+ 1 } $$ 


$$ \begin{aligned} \sum _{k= 1}^{n}\left(\cos kx\right)\left(\sin \left(\frac{1}{2}x\right)\right)&= \sum _{k = 1}^{n} \frac{1}{2}\left(\sin \left(kx+ \frac{1}{2}x\right)-\sin \left(kx-\frac{1}{2}x\right)\right)\\&= \frac{1}{2}\left(\sin \left(n+ \frac{1}{2}\right)x\right)-\frac{1}{2}\sin \left(\frac{1}{2}x\right) \end{aligned}  $$ 

$$ \sum _{k = 1}^{n}\left(\cos kx\right)=  \frac{1}{2}\left(\frac{\sin \left(n+ \frac{1}{2}\right)x }{\sin \left(\frac{1}{2}\right)x }\right)-1 $$ 

$$ S_{n}= \frac{1}{2}\left(\frac{\sin \left(n+ \frac{1}{2}\right)x }{ \sin \left(\frac{1}{2}\right)x}-1\right) $$ 

$$ 2\sin \left(\frac{1}{2}x\right)S_{n}= \sin \left(n+ \frac{1}{2}\right)x-\sin \left(\frac{1}{2}x\right) $$ 

$$ 2\sin \left(\frac{1}{2}\right)x\sum _{k = 0}^{n}S_{n}+ \left(n+ 1\right)\sin \left(\frac{1}{2}\right)x= \sum _{k = 0}^{n}\sin \left(n+ \frac{1}{2}\right)x $$ 

$$ \begin{aligned} \sum _{k= 0}^{n}\sin \left(\left(n+ \frac{1}{2}\right)x\right) \sin \left(\frac{1}{2}\right)x&= \frac{1}{2}\sum _{k= 0}^{n}\left(\cos \left(kx\right)-\cos \left(\left(k+ 1\right)x\right)\right)\\&= \frac{1}{2}\left(1- \cos \left(n+ 1\right)x\right) \end{aligned} $$ 

$$ \sum _{k= 0}^{n}\sin \left(\left(n+ \frac{1}{2}\right)\right)=  \frac{1-\cos \left(n+ 1\right)x }{2\sin \left(\frac{1}{2}x\right) } $$ 

$$ \sigma _{n}= \frac{\sum _{k= 0}^{n}S_{n} }{n+ 1 }=  $$ 

$$ \begin{aligned} \sum _{k= 0}^{n}S_{n}&= \frac{\sum _{k= 0}^{n}\sin \left(n+ \frac{1}{2}\right)x-\left(n+ 1\right)\sin \left(\frac{1}{2}x\right) }{2\sin \left(\frac{1}{2}\right)x }\\&= \frac{\sum _{k= 0}^{n}\sin \left(n+ \frac{1}{2}\right)x }{2\sin \left(\frac{1}{2}\right)x } - \frac{\left(n+ 1\right) }{2 }\\&= \frac{1-\cos \left(n+ 1\right)x }{2\sin ^{2}\left(\frac{1}{2}\right)x }-\frac{n+ 1 }{2 }\end{aligned}$$ 

$$ \sigma _{n}= \frac{1-\cos \left(n+ 1\right)x }{2\left(n+ 1\right)\sin ^{2}\left(\frac{1}{2}\right)x }-\frac{1}{2} $$ 

> [!exercise] Exercise: 
> 设 $f(x)=\cos ax,x\in[-\pi,\pi]$, 其中 $a$ 为非整数. 试求 $f$ 的实型 Fourier 级数. 并证明以下等式成立:
> $$ (1) \quad \frac{\pi}{\sin a\pi}=\frac{1}{a}+2a\sum_{k=1}^{\infty}\frac{(-1)^k}{a^2-k^2}; $$
> $$ (2) \quad \frac{\pi}{\tan a\pi}=\frac{1}{a}+2a\sum_{k=1}^{\infty}\frac{1}{a^2-k^2}; $$