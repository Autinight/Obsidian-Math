代靖涵 25120222201319

> [!exercise] Exercise: 
> 设$f\in C\left(\mathbf{T}\right)$, 若$f\left(x\right)$的Fourier级数一致收敛, 则该级数的和为$f\left(x\right)$.

> [!proof] Proof: 
> 设$\sum _{k\in \mathbb{Z} }c_{k}e^{ikx}$为$f\left(x\right)$的Fourier级数, 其中
>  $$ c_{k}= \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\left(x\right)e^{-ikx} $$ 
> 设$\sum _{k\in \mathbb{Z} }c_{k}e^{ikx}$一致收敛到函数$g\left(x\right)$, 则根据一致收敛性, 
>  $$ \begin{aligned} \frac{1 }{2\pi  }\int _{-\pi }^{\pi } g\left(x\right)e^{-inx}&= \frac{1 }{2\pi  }\int _{-\pi }^{\pi }e^{-inx}\sum _{k\in \mathbb{Z} }c_{k}e^{ikx}\\&=  \sum _{k\in \mathbb{Z} }\frac{1 }{2\pi  }\int _{-\pi }^{\pi }e^{-inx}\left(c_{k}e^{ikx}\right)= \sum _{k\in \mathbb{Z} }\frac{c_{k} }{2\pi  }\int _{-\pi }^{\pi }e^{i\left(k-n\right)x}\end{aligned}$$ 
> 由于
>  $$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }e^{ikx}= \begin{cases} 1,&k= 0\\0,&\text{otherwise} \end{cases}  $$ 
> 我们得到
>  $$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }g\left(x\right)e^{-inx}= c_{n}= \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\left(x\right)e^{-inx},\forall n\in \mathbb{Z}  $$
> 根据三角函数系的完全性, $f\left(x\right)= g\left(x\right), a.e.$. 又$g$作为连续函数的一致极限是连续的, 必然有$f$,$g$处处相等.  因此
>  $$ f\left(x\right)= \sum _{k\in \mathbb{Z} }c_{k}e^{ikx} $$ 