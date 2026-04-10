

算数平均
 $$ \sigma _{n}= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}S_{k} $$ 

若$\sigma _{n}$收敛, 称序列$\left\{ S_{n} \right\}$可算术平均求和于$S$.


 $$ \begin{aligned} \sigma _{n}&= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}\left(u_0+ \cdots + u_{k}\right) = \frac{1 }{n+ 1 }\sum _{k= 0}^{n}\left(u_0+ \cdots + u_{k}\right)= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}\left(n+ 1-k\right)u_{k}\\&= \sum _{k= 0}^{n}\left(1-\frac{k }{n+ 1 }\right) u_{k}\end{aligned}$$ 
 
Then
 $$ S_{n}-\sigma _{n}= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}ku_{k} $$ 

If the series converges, we have, When for each epsilon, 

 $$ \frac{1 }{n+ 1 }\sum _{k= 0}^{N}+ \frac{k}{n+ 1 }\sum _{N}^{\infty}u_{k} $$ 

 $$ \lim_{N\to \infty}\sum _{k= N}^{\infty}u_{k}= 0 $$
 $$ \left| S_{n}-\sigma _{n} \right|\le \varepsilon + \frac{N }{n+ 1 }\sum _{k= 0}^{N}  $$
 $$ \limsup\left|S-\sigma _{n} \right|\le \varepsilon   $$   

For $f\in L\left(\mathbb{T}\right)$, Fourier 
 $$ S_{n}\left(x\right) = \sum _{k= -n}^{n}c_{k}e^{ikx}$$

 $$ \sigma _{n}\left(x\right) = \frac{1 }{n+ 1 }\sum _{k= 0}^{n}$$
 $$ \sum _{k= 0}^{n}c_{k}e^{ikx}=  \sum _{k= -n}^{n}\left(1-\frac{\left| k \right|  }{n+ 1 }\right)c_{k}e^{ikx}$$

 $$ \sigma _{n}\left(x\right) = \sigma _{n}\left(f;x\right)= \frac{1 }{n+ 1 }\sum _{k= 0}$$
 

  $$ D_{n}\left(t\right)= \frac{1 }{2\pi  }\sum _{k= -n}^{n}e^{ikt}= \begin{cases} \frac{1 }{2\pi  }\frac{\sin \left(n+ \frac{1}{2}t\right) }{\sin \frac{1}{2}t } ,&t\neq 2j\pi \\\frac{1 }{2\pi  }\left(2n+ 1\right),&t= 2j\pi \end{cases}  $$ 

 $$ \sigma _{n}\left(x\right)= \frac{1 }{n+ 1 }\sum _{k= 0}^{n}\left(f*D_{k}\right) \left(x\right)$$ 