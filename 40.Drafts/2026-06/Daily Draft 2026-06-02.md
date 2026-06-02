### 08:05



$-l,l$的fourier系数为
$$ \frac{1 }{2l }\int _{-l}^{l}f\left(x\right)e^{-i \frac{ }{ }n x} $$ 

$$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\left(x\right)e^{-inx}\,d x $$ 


$$ \frac{1 }{2\pi  } \frac{\pi  }{l } \int _{-l}^{l}f\left(\frac{\pi  }{l }x\right)e^{-in\pi x / l}dx $$ 

$$ g\left(x\right)= f\left(\frac{lx }{\pi  }\right) $$ 
Then
$$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\left(\frac{lx }{\pi  }\right)e^{-inx}\,d x= \frac{1 }{2\pi  }\frac{\pi  }{l }\int _{-l}^{l} f\left(x\right) e^{-i n\pi x / l}\,d x$$ 

于是
$$ f\left(x\right)\sim \sum _{k = 0}^{\infty}\left(\frac{1 }{2l }\int _{-l}^{l}f\left(x\right)e^{-in\pi x / l}\,d x\right) e^{in\pi y / l} $$ 


$$ f\left(x\right)\sim \sum _{ k = 0}^{\infty}\frac{1 }{2l }\int _{-l}^{l}f\left(x\right)e^{in\pi  \left(x-y\right)/l}\,d y $$ 


Let
$$ t_{n}= \frac{n\pi  }{l } $$ 

$$ f\left(x\right)\sim \sum _{k = 0}^{\infty}\frac{1 }{2\pi  }\int _{-l}^{l}f\left(x\right)e^{i t_{n}\left(x-y\right)}\,d y \frac{\pi  }{l }$$ 

$$ f\left(x\right)\sim \sum _{k = 0}^{\infty}\frac{1 }{2\pi  }\int _{-l}^{l}f\left(x\right)e^{it_{n}\left(-xy\right)}\,d y \Delta t_{n} $$ 

在这里, 零$t_{n}= \frac{ }{ }$

于是
当$l\to \infty$, $\Delta t_{n}\to 0$, 近似地
$$ f\left(x\right)\sim  \int _{-\infty}^{\infty}\frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(x\right)e^{it\left(x-y\right)}\,d y \,d t = \frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(x\right)\int _{-\infty}^{\infty}e^{it\left(x-y\right)}\,d t\,d y$$ 

$$ f\left(x\right)\sim \int _{-\infty}^{\infty}c\left(t\right)e^{itx}\,d t $$ 

$$ c\left(t\right)= \frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(y\right)e^{-ity}\,d y $$ 

给$t$乘以$2\pi$, $y = 2\pi  x$, 则
$$ c\left(t\right)= \int _{-\infty}^{\infty}f\left(2\pi y\right)e^{-2\pi i ty} \,d y$$ 



若$f\left(-x\right)= f\left(x\right)$, 则 Fourier变换化为
$$ e^{-2\pi ixt}= \cos \left(2\pi  xt\right)-i \sin \left(2\pi  xt\right) $$ 
如果$f$是偶函数, 则$f\cos$是偶函数, $f\sin$是奇函数, 


$$ \hat{f}\left(t\right) = 2\int _{0}^{\infty}f\left(x\right)\cos 2\pi tx\,d x$$ 

$\hat{f}$也是偶函数, 则

$$ f\left(x\right)\sim 2\int _{0}^{\infty}\hat{f}\left(t\right)\cos 2\pi xt\,d t= 4\int _{0}^{\infty}\int _{0}^{\infty}f\left(u\right)\cos 2\pi tu\,d u\cos 2\pi xt\,d t $$ 


$$ \int _{-\infty}^{\infty}f\left(x\right)\cos \left(2\pi  ix\right)-i \sin \left(2\pi  ix\right)\,d x $$ 
如果m$f$是奇函数, 那么$f\cos$是奇函数, $f\sin$是偶函数>



$$ \int _{-\infty}^{\infty}f\left(x\right)\left(\cos \left(2\pi x t\right)-i \sin \left(2\pi xt\right)\right)\,d t $$ 

$$ -i \int _{-\infty}^{\infty}f\left(x\right)\sin \left(2\pi xt\right)\,d t $$ 

$$ -i \int _{-\infty}^{\infty}f\left(-x\right)\sin \left(2\pi  xt\right)\,d x $$ 

$$ -i \int _{-\infty}^{\infty}f\left(x\right)-\left(\sin 2\pi xt\right) $$ 

$$ \lim_{\left| t \right|\to \infty }\hat{f}\left(t\right)= 0 $$ 


$$ \int _{-\infty}^{\infty}f\left(x\right)\sin kx\,d x $$ 

$$ \left| \hat{f}\left(t\right) \right|\le \int _{-\infty}^{\infty}\left| f\left(t\right) \right| \,d t\le \left\| f \right\|_{1}  $$ 

$$ f\mapsto \hat{f},\quad L^{1}\left(\mathbb{R} \right)\to L $$ 

$L^{1}$到$L^{\infty}$. $\hat{f}\left(t\right)$, 一致连续

$$ \hat{f}\left(u+ t\right)-f\left(u\right) $$ 

$$ \int _{-\infty}^{\infty}f\left(y\right)e^{-2\pi i\left(u+ t\right)y}\,d y-\int _{-\infty}^{\infty}f\left(u\right)e^{-2\pi iuy} \,d y$$ 

$$ \int _{-\infty}^{\infty}f\left(y\right)e^{-2\pi uy}\left(e^{-2\pi ty}-1\right)\,d y=  $$ 

$$ \int _{-\infty}^{\infty}\left| f\left(y\right) \right| \left| e^{-2\pi  i ty} -1\right|\,d y  $$ 
当$t\to 0$, $e^{-2\pi i ty}-1\to 1$, 被控制$2\left| f \right|$.

控制收敛定理.

与$t$无关.

$$ F\left[ f\left(x-h\right) \right]\left(t\right)= e^{-2\pi iht}\hat{f}\left(t\right) $$ 

$$ F\left[ e^{2\pi hx}f \right]\left(t\right)= \hat{f}\left(t-h\right)= \left(\tau _{h}\hat{f}\right)\left(t\right) $$ 

$$ \int _{-\infty}^{\infty}f\left(y\right)e^{2\pi i\left(x-h\right)y} \,d y$$ 
平移直接拿出来$e^{2\pi i h}$
$$ \int _{-\infty}^{\infty}f\left(y\right)e^{2\pi hy}e^{-2\pi ixy}\,d y= \int _{-\infty}^{\infty}f\left(y\right)e^{-2\pi iy\left(x-h\right)}\,d y= \hat{f}\left(x-h\right) $$ 

$$ F\left[ f\left(ax\right) \right]= \frac{1 }{\left| a \right|  }\hat{f}\left(\frac{t }{a }\right) $$ 

$$ \int _{-\infty}^{\infty}f\left(ax\right)e^{-2\pi i tx}\,d x $$ 

如果$a> 0$, 则因为要还原, 所以, 除以.
$$ \frac{1 }{a }\int _{-\infty}^{\infty}f\left(x\right)e^{-2\pi i \frac{t }{a }x}\,d x = \frac{1 }{a }\hat{f}\left(\frac{x }{a }\right)$$ 

如果$f,g\in L\left(\mathbb{R} \right)$

$$ \int _{-\infty}^{\infty}\hat{f}g\,d t= \int _{-\infty}^{\infty}fghar\left(t\right)\,d t $$ 

$$ \int _{-\infty}^{\infty}\int _{-\infty}^{\infty}e^{-2\pi itu}f\left(u\right)g\left(t\right)\,d u\,d t $$ 

$$ \int _{-\infty}^{\infty} $$ 

$$ L^{1} $$
范数给出$L^{\infty}$上界. 

$$ \left\| \hat{f}_{n}\left(t\right)-\hat{f}\left(t\right) \right\|\le \left\| f_{n}-f \right\| $$ 

由于$L^{1}$范数经常变成$L^{\infty}$范数, $L^{1}$收敛经常变成一致收敛.

$$ \left(f*g\right)^=  $$ 