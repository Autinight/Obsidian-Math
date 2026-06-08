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


$$ a_0= \frac{1 }{\pi  }\int _{-\pi }^{\pi }\cos ax\,d x= \frac{2 }{\pi  }\int _{0}^{\pi }\cos ax= \frac{2 }{a\pi  } \left[ \sin ax \right]_{0}^{\pi } = \frac{2\sin a\pi  }{a\pi  }$$ 

$$ \begin{aligned} \begin{aligned} a_{n}&= \frac{1 }{\pi  }\int _{-\pi }^{\pi }\cos ax \cos nx\,d x\\&= \frac{2 }{\pi  }\int _{0}^{\pi }\cos ax \cos nx\,d x\\&= \frac{1 }{\pi  } \int _{0}^{\pi }\cos \left(\left(a+ n\right)x\right)+ \cos \left(\left(a-n\right)x\right)\,d x\\&= \frac{1 }{\pi  }\left(\frac{1 }{a+ n }\left[ \sin \left(\left(a+ n\right)x\right) \right]_{0}^{\pi }+ \frac{1 }{a-n }\left[ \sin \left(\left(a-n\right)x\right) \right]_{0}^{\pi }\right)\\&= \frac{1 }{\pi  }\left(\frac{1 }{a+ n }\sin \left(\left(a+ n\right)\pi \right)+ \frac{1 }{a-n }\sin \left(\left(a-n\right)\pi \right)\right)\\&= \frac{1 }{\pi  }\left(\frac{\sin a\pi \cos n\pi + \cos a\pi \sin n\pi  }{ a+ n}\right)+\frac{1 }{\pi  } \frac{\sin a\pi \cos n\pi -\cos \pi \sin n\pi  }{ a-n} \\&= \frac{1 }{\pi  }\frac{\sin a\pi \left(-1\right)^{n} }{a+ n }+ \frac{1 }{\pi  }\frac{\sin a\pi \left(-1\right)^{n} }{ a-n}= \frac{\sin a\pi  }{\pi  }\left(-1\right)^{n}\frac{2a }{a^{2}-n^{2} }\end{aligned} \end{aligned} $$ 

$$ b_{n}= 0 $$ 
于是
$$ f\left(x\right)\sim  \frac{\sin a\pi  }{a\pi  }+ 2a\frac{\sin a\pi  }{\pi  }\sum _{k= 1}^{\infty}\frac{\left(-1\right)^{k} }{a^{2}-k^{2} } \cos kx$$ 

具体收敛的时候
Dini判别法
$$ \int _{0}^{\delta }\frac{\left| \varphi _{x_0}\left(t\right)-s \right|  }{t }< \infty $$ 

全局收敛通常用Jordan判别法, 也就是有界变差

紧区间的$C^{1}$函数是有界变差的, 由Jordan判别法, $f$的 Fourier级数处处收敛到 $\frac{f\left(x+ 0\right)+ f\left(x-0\right) }{2 }= f\left(x\right)$


$$ \cos ax= \frac{\sin a\pi  }{\pi  }\left(\frac{1 }{a }+ 2a\sum _{k= 1}^{\infty}\frac{\left(-1\right)^{k} }{a^{2}-k^{2} }\cos kx\right) $$ 
在$x= 0$处, 收敛于$1$, 得到
$$ \frac{\pi  }{\sin a\pi  }= \frac{1 }{a }+ 2a\sum _{k= 1}^{\infty}\frac{\left(-1\right)^{k} }{a^{2}-k^{2} } $$ 


由于$f$的周期延拓是处处局部有界变差的


$$ \cos a\pi = \frac{\sin a\pi  }{ \pi }\left(\frac{1}{a}+ \right) $$ 
$\cos ax$的Fourier系数, 是$\sim \frac{\left(-1\right)^{n}}{a^{2}-n^{2} }$的.
> [!exercise]
> 令
> $$
> E=\left\{f(x):\frac{f(x)}{1+\left| x \right| }\in L^1(\mathbb R)\right\}.
> $$
> 有
> $$
> L^1(\mathbb R)\subseteq E\subseteq L^1_{\mathrm{loc}}(\mathbb R).
> $$

若$f\in L^{1}$, 由于$\frac{1 }{1+ \left| x \right|  }\in L^{\infty}$, 我们有

取$f\left(x\right)= 1+ \left| x \right|$, 则$f$是局部可积的, 但是
$\frac{1+ \left| x \right| }{1+ \left| x \right|  }= 1$不是$L^{1}$的.

$L^{1}$但是不是$1+ \left| x \right|$的.

$f\left(x\right)= 1$, 则$\frac{1 }{1+ \left| x \right|  }$可积, 但是$1$不可积.

包含关系
$L^{1}\left(\mathbb{R} \right)\subseteq E$ easy

$f\left(x\right)= \frac{f\left(x\right) }{1+ \left| x \right|  }\left(1+ \left| x \right| \right)$

$1+ \left| x \right|$是局部$L^{\infty}$的.


