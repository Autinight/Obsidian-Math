代靖涵 25120222201319

> [!exercise] Exercise:
> 设实值函数$f(x)$在$(0,2\pi)$上单调减, 试证明其Fourier正弦系数$b_n\ge 0$.

> [!proof] Proof: 
> 
>  $$ \begin{aligned} \pi b_{n}&= \int _{0}^{2\pi }f\left(x\right)\sin nx\,d x\\&= \sum _{k= 1}^{2n}\int _{\pi \frac{k-1 }{n }}^{\pi \frac{k }{n }}f\left(x\right)\sin nx\,d x\\&=\frac{1 }{n }\sum _{k= 1}^{2n}\int _{\pi \left(k-1\right)}^{\pi k}f\left(\frac{x }{n }\right)\sin x\,d x\\&=\frac{1 }{n } \sum _{m= 0}^{n-1}\int _{\pi \left(2m\right)}^{\pi \left(2m+ 1\right)}f\left(\frac{x }{n }\right)\sin x\,d x+ \frac{1 }{n }\sum _{p= 0}^{n-1}\int _{\pi \left(2p+ 1\right)} ^{\pi \left(2p+ 2\right)}f\left(\frac{x }{n }\right)\sin x\,d x\end{aligned} $$ 
> 
> 注意到
>  $$ \int _{\pi \left(2p+ 1\right)}^{\pi \left(2p+ 2\right)}f\left(\frac{x }{n }\right)\sin x\,d x=- \int _{\pi \left(2p\right)}^{\pi \left(2p+ 1\right)}f\left(\frac{x+ \pi  }{n }\right)\sin x\,d x $$ 
> 
> 则
>  $$\pi  b_{n}= \frac{1 }{n }\sum _{m= 0}^{n-1}\int _{\pi \left(2m\right)}^{\pi \left(2m+ 1\right)} \left(f\left(\frac{x }{n }\right)-f\left(\frac{x+ \pi  }{n }\right)\right)\sin x\,d x$$
> 
> 由于$f$递减, $f\left(\frac{x }{n }\right)-f\left(\frac{x+ \pi  }{n }\right)\ge 0$. 又在$\left(\pi \left(2m\right),\pi \left(2m+ 1\right)\right)$上, $\sin x\ge 0$, 因此$b_{n}\ge 0$