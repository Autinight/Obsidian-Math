代靖涵 25120222201319

> [!exercise] Exercise: 5
> 试用算术平均求和法求以下级数的广义和:
> 1. $\frac12+\sum_{k=1}^{\infty}\cos kx$, $x\in[-\pi,\pi]\setminus\{0\}$;
> 2. $\sum_{k=1}^{\infty}\sin kx$, $x\in[-\pi,\pi]$.

> [!solution] Solution: 
> 1.   当$x\in \left[ -\pi ,\pi  \right]\setminus \left\{ 0 \right\}$时, $\sin \frac{1}{2}x\neq 0$, 因此
>      $$ \begin{aligned} S_{n}&=\frac{1}{2}+  \sum _{k= 1}^{n}\cos kx \\&= \frac{1}{2}+ \frac{1 }{\sin \frac{1}{2}x }\sum _{k= 1}^{n}\cos kx\sin \frac{1}{2}x\\&= \frac{1}{2}+ \frac{1 }{\sin \frac{1}{2}x }\sum _{k= 1}^{n} \frac{1}{2} \left(\sin \left(\left(k+ \frac{1 }{2 }\right)x\right)-\sin \left(\left(k-\frac{1}{2}\right)x\right)\right)\\&= \frac{1}{2}+ \frac{1}{2}\frac{1 }{\sin \frac{1}{2}x }\left(-\sin \frac{1}{2}x+ \sin \left(\left(n+ \frac{1}{2}\right)x\right)\right)\\&= \frac{1}{2}\frac{\sin \left(\left(n+ \frac{1}{2}\right)x\right) }{\sin \frac{1}{2}x }\end{aligned}$$
>      继而
>      $$ \begin{aligned} \sigma _{n}&= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}S_{k}= \frac{1}{2\sin \frac{1}{2}x} \sum _{k= 0}^{n}\sin \left(\left(k+\frac{1}{2} \right)x\right)\\&=\frac{1 }{n+ 1 } \frac{1}{2\sin \frac{1}{2}x} \frac{1 }{\sin  \frac{1}{2}x }\sum _{k= 0}^{n}\sin \frac{1}{2}x\sin \left(\left(k+ \frac{1}{2}\right)x\right)\\&= \frac{1 }{n+ 1 }\frac{1 }{4\sin^{2} \frac{1}{2}x } \sum _{k= 0}^{n}\left(\cos kx-\cos \left(\left(k+ 1\right)x\right)\right)\\&= \frac{1 }{n+ 1 }\frac{1 }{4\sin^{2} \frac{1}{2}x }\left(1-\cos \left(\left(n+ 1\right)x\right)\right) \end{aligned} $$
>      于是对于任意的$x\in \left[ -\pi ,\pi  \right]\setminus \left\{ 0 \right\}$
>       $$ \lim_{n\to \infty}\sigma _{n}= 0 $$
>      广义和为零. 
> 2. 
> 当$x= \pi$或$x= -\pi$或$x= 0$时, 显然级数和为零, 进而广义和也为零. 当$x\in \left(-\pi ,\pi \right)\setminus \left\{ 0 \right\}$时, $\sin  \frac{1}{2}x \neq 0$, 此时
>  $$ \begin{aligned} S_{n}&= \sum _{k= 1}^{n}\sin kx\\&= \frac{1 }{\sin  \frac{1}{2}x }\sum _{k= 1}^{n}\sin  \frac{1}{2}x\sin kx \\&= \frac{1}{2\sin \frac{1}{2}x}\sum _{k= 1}^{n}\left(\cos \left(\left(k-\frac{1}{2}\right)x\right)- \cos  \left(\left(k+ \frac{1}{2}\right)x\right)\right)\\&= \frac{1 }{2\sin \frac{1}{2}x }\left(\cos  \frac{1}{2}x- \cos \left(\left(n+ \frac{1}{2}\right)x\right)\right)\\&= \frac{1}{2}\cot \frac{1}{2}x - \frac{\cos  \left(\left(n+ \frac{1}{2}\right)x\right) }{2\sin \frac{1}{2}x }\end{aligned} $$ 
> 进而
>  $$ \begin{aligned} \sigma _{n}&= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}S_{k}\\&= \frac{1}{2}\cot \frac{1}{2}x -\frac{1 }{n+ 1 }\frac{1 }{2\sin \frac{1}{2}x }\sum _{k= 0}^{n}\cos \left(\left(k+ \frac{1}{2}\right)x\right)\\&= \frac{1}{2}\cot \frac{1}{2}x -\frac{1 }{n+ 1 }\frac{1 }{4\sin^{2} \frac{1}{2}x }\sum _{k= 0}^{n}2\cos \left(\left(k+ \frac{1}{2}\right)x\right)\sin \frac{1}{2}x\\&= \frac{1}{2}\cot \frac{1}{2}x -\frac{1 }{n+ 1 }\frac{1 }{4\sin^{2} \frac{1}{2}x }\sum _{k= 0}^{n}\left(\sin \left(\left(k+ 1\right)x\right)-\sin kx\right)\\&= \frac{1}{2}\cot \frac{1}{2}x -\frac{\sin \left(\left(n+ 1\right)x\right) }{4\left(n+ 1\right)\sin^{2} \frac{1}{2}x }\end{aligned} $$ 
> 于是此时 $\lim_{n\to \infty}\sigma _{n}= \frac{1}{2}\cot \frac{1}{2}x$. 因此广义和为 $\frac{1}{2}\cot \frac{1}{2}x$.

> [!exercise] Exercise: 15
> 设$f\in L^p(T)$,$1\le p\le\infty$,试证明:$\|\sigma_n(f)\|_p\le\|f\|_p$.

> [!proof] Proof: 
>  $$ \sigma _{n}\left(f\right)= \left(f*K_{n}\right)\left(t\right) $$ 
> 其中$\left\{ K_{n} \right\}$是Fejer核.
> 由卷积的Young不等式.
>  $$ \left\| f* K_{n}\right\|_{p}\le \left\| K_{n} \right\|_{1}\left\| f \right\|_{p} $$ 
> 由于$K_{n}\ge 0$, 并且$\int _{-\pi }^{\pi }K_{n}\left(t\right)\,d t= 1$, 我们有
>  $$ \left\| K_{n} \right\|_{1}= 1 $$
> 于是
>  $$ \left\| \sigma _{n}\left(f\right) \right\|_{p}= \left\| f*K_{n} \right\|_{p}\le \left\| f \right\|_{p} $$  