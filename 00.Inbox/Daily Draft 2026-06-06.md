### 09:32


Bessel不等式

设$c_{n}$是Fourier系数, 则

$$ \sum _{ n = -\infty}^{\infty}\left| c_{n} \right| ^{2}\le \frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right|^{2}\,d x  $$ 

$$ S_{n}\left(x\right)= \sum c_{k}e^{ink} $$ 

定义范数
$$ \left\| f \right\|= \frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right| ^{2}\,d x $$ 

$$ \left< f,g \right>= \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f \bar{g}\,d x $$ 



$$ \begin{aligned} \begin{aligned} \left| f-S_{n} \right|^{2}&= \left| f \right|^{2}+ \left| S_{n} \right|^{2}-2\left< f,S_{n} \right>\\&= \left| f \right|^{2}+ \left< \sum c_{k}e^{ink},c_{k}e^{ink} \right>-2\left< f,\sum c_{k}e^{ink} \right>\\&= \left| f \right|^{2}+ \sum c_{k}^{2}- 2\sum c_{k}^{2}= \left| f \right|^{2}-\sum  \left| c_{k} \right|^{2}    \end{aligned}  \end{aligned}  $$ 
Hilbert空间的性质, 取一个正交基$e^{ink}$, 定义内积
$$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\cdot \bar{g} $$ 

则
$$ \left< e^{ink},e^{ink} \right> = \frac{1 }{2\pi  }\int _{-\pi }^{\pi }1\,d x= 0$$ 

$f$的Fourier技术, Fourier部分和,  
$f$是$L^{2}$收敛于部分和的.
并且成立Parseval恒等式
$$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right|^{2}\,d x= \sum _{n = -\infty}^{\infty}\left| c_{n} \right|^{2}   $$ 
回忆一下, 这个事实就是用
$$ \sum _{n = -k}^{k}\left| c_{n} \right|^{2}  $$
来逼近$\frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right|^{2}\,d x$ 

我们知道的是
$$ \sum _{n = -\infty}^{\infty}\left| c_{n} \right| ^{2}\le \frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right| ^{2}\,d x $$ 

所以级数是收敛的.

要证明逼近, 
我们先证明Hilbert空间的Fourier级数收敛, 
定义范数

$$ \left| S_{n+ k}-S_{n} \right| _{2}^{2}= 2\pi \sum _{n + 1\le \left| k \right| \le n+ p}\left| c_{k} \right|^{2} $$ 
任意小, 所以
$\left\{ S_{n} \right\}$是Cauchy列, 存在收敛点列.

$\sum _{n = -\infty}^{\infty}\left| c_{n} \right| ^{2}$是有定义的, 由完备性, 它属于这个Hilbert空间,也就是$L^{2}$空间.

然后我们证明$f_0$的Fourier技术和$f$的一样, 
$$ \left< f,e^{ink} \right> = \left< \sum _{n = 0}^{\infty}S_{n},e^{ink} \right>= \lim_{n\to \infty}\left< \sum _{k= 0}^{n}S_{k}, e^{inj} \right>= c_{k}$$ 
这里相当于把连续性什么的都拆开了.
用Cauchy不等式估计了一下连续性.

只需要知道在这套体系下, 我们将内积定义为
$$ \frac{1 }{2\pi  }\int f \bar{g} $$ 
也是 $L^{2}$空间等价的一个内积, 给出一个范数, 然后用Hilbert空间的性质. 这种$L^{2}$级数的收敛性基本就是Hilbertk空间的基的性质.