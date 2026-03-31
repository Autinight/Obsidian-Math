代靖涵 25120222201319

> [!exercise] Exercise: 
> 假设$d_1$与$d_2$是空间$X$中的两个距离函数. 证明:若$d_1$与$d_2$等价, 即
>  $$ \exists \lambda ,\Lambda > 0, s.t. \lambda d_1\left(x,y\right)\le d_2\left(x,y\right)\le \Lambda d _{x}\left(x,y\right),\forall x,y\in X $$
> 则两个距离定义的极限也等价, 即$d_1\left(x_{n},x_0\right)\to 0\iff d_2\left(x_{n},x_0\right)\to 0$
> 以上命题的逆命题是否成立, 为什么? 

> [!proof] Proof: 
> - 根据$d_1$与$d_2$等价,  存在$\lambda ,\Lambda > 0$, 使得
>   $$ \lambda d_1\left(x_{n},x_0\right)\le d_2\left(x_{n},x_0\right)\le \Lambda d_1\left(x_{n},x_0\right) $$
>   若$d_1\left(x_{n},x_0\right)\to 0$, 在不等式中令$n\to \infty$, 得到 
>   $$ d_2\left(x_{n},x_0\right)\to 0 $$
>   另一方面, 我们有
>    $$ \frac{1 }{\Lambda  }d_2\left(x_{n},x_0\right)\le d_1\left(x_{n},x_0\right)\le \frac{1 }{\lambda  }d_2\left(x_{n},x_0\right) $$
>   若$d_2\left(x_{n},x_0\right)\to 0$, 在不等式中令$n\to \infty$, 得到
>    $$ d_1\left(x_{n},x_0\right)\to 0 $$
>   因此$d_1\left(x_{n},x_0\right)\to 0\iff d_2\left(x_{n},x_0\right)= 0$.
>
> - 逆命题不成立. 考虑$\mathbb{R}$上的距离
>   $$ d_1\left(x,y\right)= \left| x-y \right|,\quad d_2\left(x,y\right)= \frac{\left| x-y \right|  }{1+ \left| x-y \right|  }  $$ 
>   则
>    $$ \begin{aligned} \lim_{n\to \infty}d_1\left(x_{n},x_0\right)= 0&\iff \lim_{n\to \infty}\left| x_{n}-x_0 \right|= 0\\&\iff \lim_{n\to \infty}  \frac{\left| x_{n}-x_0 \right|  }{ 1+ \left| x_{n}-x_0 \right| }= 0\\&\iff \lim_{n\to \infty}d_2\left(x_{n},x_0\right)= 0\end{aligned}  $$
>   两个度量诱导出的极限等价. 但是$d_1$是无界的, $d_2$是有界的, 两个度量不可能等价.

> [!exercise] Exercise: 
> 证明距离空间$\left(X,d\right)$中由距离$d$定义的连续映射与其诱导的拓扑$\tau _{d}$定义的连续映射等价.

> [!proof] Proof: 
> - 若$f:X\to X$在距离$d$定义的映射中连续. 任取$X$上的开集$U$, 任取$x_0\in f^{-1} \left(U\right)$, 设$y_0= f\left(x_0\right)$. 则对于任意的$\varepsilon > 0$满足$B_{d}\left(y_0,\varepsilon \right)\subseteq U$, 存在$\delta > 0$, 使得
>    $$ f\left(B_{d}\left(y_0,\delta \right)\right)\subseteq U $$
>    即$B_{d}\left(x,\delta \right)\subseteq f^{-1} \left(U\right)$. 这表明 $f^{-1} \left(U\right)$是一个开集. 根据定义, $f$在$\tau _{d}$下连续.
> - $f$在$\tau _{d}$下连续. 任取$x_0\in X$,  都有对于任意的 $\varepsilon > 0$, $f^{-1} \left(B_{d}\left(y_0,\varepsilon \right)\right)$是一个$\tau _{d}$中的开集, 其中$y_0= f\left(x_0\right)$. 又$x_0\in f^{-1} \left(B_{d}\left(y_0,\varepsilon \right)\right)$, 可知存在$\delta > 0$, 使得$B_{d}\left(x_0,\delta \right)\subseteq f^{-1} \left(B_{d}\left(y_0,\varepsilon \right)\right)$. 即$f\left(B_{d}\left(x_0,\delta \right)\right)\subseteq B_{d}\left(y_0,\varepsilon \right)$. 这表明$f$关于距离$d$是连续的.

> [!exercise] Exercise: 
> 设$D$是$\left[ 0,1 \right]$上具有连续导数的实函数的全体, 在$D$上定义
>  $$ d\left(x,y\right) =  \sup _{0\le t\le 1}\left| x\left(t\right)-y\left(t\right) \right|+ \sup _{0\le t\le 1}\left| x^{\prime} \left(t\right)-y^{\prime} \left(t\right) \right|   $$ 
> 1. 证明$D$是距离空间
> 2. 指出$D$中按距离收敛的意义;
> 3. 证明$D$是完备的.

距离空间的定义, 非负正定, 三角不等式,
> [!proof] Proof: 
> 1. 显然$d\left(x,y\right)= d\left(y,x\right)$, $d\left(x,y\right)\ge 0$, 并且若$d\left(x,y\right)= 0$, 则$\sup _{0\le t\le 1}\left| x\left(t\right)-y\left(t\right) \right| = 0$, 从而 $x\left(t\right)= y\left(t\right)$. 
>   最后, 根据
>     $$ \begin{aligned} \sup _{0\le t\le 1}\left| x\left(t\right)-z\left(t\right) \right|&\le \sup _{0\le t\le 1}\left(\left| x\left(t\right)-y\left(t\right) \right|+ \left| y\left(t\right)-z\left(t\right) \right|  \right)\\&\le \sup _{0\le t\le 1}\left| x\left(t\right)-y\left(t\right) \right|+ \sup _{0\le t\le 1}\left| y\left(t\right)-z\left(t\right) \right|   \end{aligned} $$ 
>    以及
>    $$ \sup _{0\le t\le 1}\left| x^{\prime} \left(t\right)-z^{\prime} \left(t\right) \right|\le \sup _{0\le t\le 1}\left| x^{\prime} \left(t\right)-y^{\prime} \left(t\right) \right|+ \sup _{0\le t\le 1}\left| y^{\prime} \left(t\right)-z^{\prime} \left(t\right) \right|    $$ 
>    得到
>    $$ d\left(x,z\right)\le d\left(x,y\right)+ d\left(y,z\right) $$ 
>    因此$d$是一个距离, $D$是一个距离空间.
> 2. 若$\left\{ x_{n} \right\}$按距离收敛于$x_0$, 则$\left\{ x_{n} \right\}$和$\left\{ x_{n}^{\prime}  \right\}$分别一致收敛于$x_0$和$x_0^{\prime}$. 可作为$C^{1}$曲线一致收敛的定义.
> 3. 若$\left\{ x_{n} \right\}$是$D$中的Cauchy列, 则$\left\{ x_{n} \right\}$和$\left\{ x_{n}^{\prime}  \right\}$ 分别是$C\left[ 0,1 \right]$在一致范数下的Cauchy列. 根据$C\left[ 0,1 \right]$的完备性, 存在$x_0,y_0\in C\left(0,1\right)$, 使得它们分别为$\left\{ x_{n} \right\}$和$\left\{ x_{n}^{\prime}  \right\}$在一致范数下的极限. 只需要证明$x_0^{\prime} = y_0$. 
>   为此, 定义$\tilde{x}_0\left(t\right)= x_{0}\left(0\right)+ \int _{0}^{1}y_0\left(t\right)\,d t$
>   则
>    $$ \begin{aligned} x_{m}\left(t\right)-\tilde{x}_0\left(t\right)&=  x_{m}\left(0\right)-x_0\left(0\right)+ \int _{0}^{1}x_{m}^{\prime} \left(t\right)-y_0\left(t\right)\,d t  \end{aligned}$$ 
>    令$m\to \infty$, 由一致收敛性, 
>     $$ \lim_{m\to \infty}\sup _{0\le t\le 1}\left| x_{m}\left(t\right)-\tilde{x}_{0}\left(t\right) \right|= 0  $$
>    因此$\widetilde{x_0}= x_0$, 又$\widetilde{x_0}^{\prime} \left(t\right)= y_0^{\prime} \left(t\right)$, 故$x_0^{\prime}= y_0$. 

> [!exercise] Exercise: 
> 设$d_1,\cdots,d_m,\cdots$是 $X$上的距离, 证明:
> 1. $d= \sup _{1\le i\le m}d _{i}$;
> 2. $d= \sqrt{d_1^{2}+ \cdots + d _{m}^{2}}$;
> 3. $d= \sum _{k= 1}^{\infty}\frac{1 }{2^{k} }\cdot \frac{d  _{k} }{1+ d _k }$
> 中的每一个也是$X$上的距离

> [!proof] Proof: 
> 1. 
> - 显然$d\left(x,y\right)= d\left(y,x\right)$.
> - 显然$d\ge 0$. 若$d\left(x,y\right)= 0$, 则 $\forall 1\le i\le m$, $d _{i}\left(x,y\right)= 0$, 进而$x= y$.
> -  $$ \begin{aligned} d\left(x,z\right) =  \sup _{1\le i\le m}d _{i}\left(x,z\right)&\le \sup _{1\le i\le m}\left(d _{i}\left(x,y\right)+ d _{i}\left(y,z\right)\right)\\& \le \sup _{1\le i\le m}d _{i}\left(x,y\right)+ \sup _{1\le i\le m} d _{i}\left(y,z\right)\\&= d\left(x,y\right)+ d\left(y,z\right)\end{aligned} $$ 
> 2. 
> - 显然$d\left(x,y\right)= d\left(y,x\right)$
> - 显然$d\ge 0$. 若$d\left(x,y\right)= 0$, 则 $d _{1}\left(x,y\right)\le d\left(x,y\right)= 0$, 进而$x= y$.
> -  考虑
>    $$ \begin{aligned} d^{2}\left(x,z\right)&= d_1^{2}\left(x,z\right)+ \cdots + d _{m}^{2}\left(x,z\right)\\&\le \left(d_1\left(x,y\right)+ d_1\left(y,z\right)\right)^{2}+ \left(d _{m}\left(x,y\right)+ d _{m}\left(y,z\right)\right)^{2}\\&= d^{2}\left(x,y\right)+ d^{2}\left(y,z\right)+ 2\sum _{i= 1}^{m}d _{i}\left(x,y\right)\,d _{i}\left(y,z\right)\end{aligned}$$ 
>     $$ \left(d\left(x,y\right)+ d\left(y,z\right)\right)^{2}= d^{2}\left(x,y\right)+ d^{2}\left(y,z\right)+ 2d\left(x,y\right)d\left(y,z\right) $$ 
>       由Cauchy不等式
>     $$ \begin{aligned} d\left(x,y\right)d\left(y,z\right)&= \sqrt{d_1^{2}\left(x,y\right)+ \cdots + d _{m}^{2}\left(x,y\right)}\sqrt{d _{1}^{2}\left(y,z\right)+ \cdots + d _{m}^{2}\left(y,z\right)}\\&\ge \sum _{i= 1}^{m} d _{i}\left(x,y\right) \,d _{i}\left(y,z\right) \end{aligned}$$ 
>    因此
>    $$ d^{2}\left(x,z\right)\le\left(d\left(x,y\right)+ d\left(y,z\right)\right)^{2} $$
>    即
>    $$ d\left(x,z\right)\le d\left(x,y\right)+ d\left(y,z\right) $$ 
> 3. 
> - 显然$d\left(x,y\right)= d\left(y,x\right)$
> - 显然$d\ge 0$. 若$d\left(x,y\right)= 0$, 则$\frac{1 }{2 }\frac{d_1\left(x,y\right) }{1+ d_1\left(x,y\right) }\le d\left(x,y\right)= 0$, 从而 $d_1\left(x,y\right)= 0$, $x= y$.
> - 由于
>    $$  d _{k}\left(x,z\right)\le d _{k}\left(x,y\right)+  d _{k}\left(x,z\right) $$ 
>   我们有
>   $$ \begin{aligned} \frac{d _{k}\left(x,z\right) }{1+  d _{k}\left(x,z\right) }&\le \frac{d _{k}\left(x,y\right)+  d _{k}\left(y,z\right) }{1+  d _{k}\left(x,y\right)+  d _{k}\left(y,z\right) }\\&= \frac{d _{k}\left(x,y\right) }{1+ d _{k}\left(x,y\right)+ d _{k}\left(y,z\right) }+ \frac{d _{k}\left(y,z\right) }{1+ d _{k}\left(x,y\right)+  d _{k}\left(y,z\right) }\\&\le \frac{d _{k}\left(x,y\right) }{1+ d _{k}\left(x,y\right) }+ \frac{d _{k}\left(y,z\right) }{1+  _{k}\left(y,z\right) } \end{aligned} $$ 
>   $$ \sum _{k= 1}^{\infty}\frac{1 }{2^{k} }\frac{d _{k}\left(x,z\right) }{1+ d _{k}\left(x,z\right) }\le \sum _{k= 1}^{\infty}\frac{1 }{2^{k} }\frac{d _{k}\left(x,y\right) }{1+ d _{k}\left(x,y\right) }+ \sum _{k= 1}^{\infty}\frac{1 }{2^{k} } \frac{d _{k}\left(y,z\right) }{1+  d _{k}\left(y,z\right) }  $$ 


> [!exercise] Exercise: 
> 证明如果距离空间是可分的,则它的任意子空间也是可分的; 反之, 如果距离空间不可分, 它的子空间是否也不可分?

> [!proof] Proof: 
> 由于度量空间可分当且仅当它第二可数, 
> 若$\left(X,d\right)$是可分的, 则存在$X$的一个可数基$\mathcal{B}$, 任取$X$的子空间$Y$, 我们有
>  $$ \left\{ U\cap Y : U\in \mathcal{B}\right\} $$
> 是$\left(Y, \tilde{d}\right)$的一个可数基, 从而$Y$也是第二可数的, 进而$\left(Y,\tilde{d}\right)$可分.
>
> 反之, 如果距离空间不可分, 其子空间未必不可分.  比如若$X$是不可数的离散空间, 则$X$是不可分的. 但是对于$x\in X$, $\left\{ x \right\}$是$X$的可分的子空间, 因为$\left\{ x \right\}$本身构成${x}$的一个可数基.

> [!exercise] Exercise: 
> 设$\left(X,d\right)$是距离空间, $A\subseteq X$, 令
>  $$ f\left(x\right)= \inf _{y\in A}d\left(x,y\right)\quad \left(x\in X\right) $$
> 证明$f\left(x\right)$是$X$上的连续函数.

> [!proof] Proof: 
> 任取$X$上趋于$x$的点列$\left\{ x_{n} \right\}$, 即$\lim_{n\to \infty}d\left(x_{n},x\right)= 0$. 我们有
>  $$ f\left(x_{n}\right)= \inf _{y\in A}d\left(x_{n},y\right)\le d\left(x,x_{n}\right)+ \inf _{y\in A}d\left(x,y\right) $$ 
> 取$n\to \infty$的上极限, 得到
>  $$ \limsup_{n\to \infty}f\left(x_{n}\right)\le \inf _{y\in A}d\left(x,y\right) $$ 
> 另一方面, 
>  $$ f\left(x_{n}\right)= \inf _{y\in A}d\left(x_{n},y\right)\ge  \inf _{y\in A}d\left(x,y\right)-d\left(x,x_{n}\right) $$
> 取$n\to \infty$的下极限, 得到
>  $$ \liminf_{n\to \infty}f\left(x_{n}\right) \ge \inf _{y\in A}d\left(x,y\right)$$  
> 因此
>  $$ \lim_{n\to \infty}f\left(x_{n}\right)= \inf _{y\in A}d\left(x,y\right)= f\left(x\right) $$
> 根据Heine原理, $f$是$X$上的连续函数. 