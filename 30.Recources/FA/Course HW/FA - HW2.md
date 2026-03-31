代靖涵 25120222201319

> [!exercise] Exercise: 1
> 记$P\left[ a,b \right]$是闭区间$\left[ a,b \right]$上的多项式函数空间, 证明$P\left[ a,b \right]$在距离
>  $$ d\left(x,y\right)= \max _{t\in \left[ a,b \right]}\left| x\left(t\right)-y\left(t\right) \right|, \quad x,y\in P\left[ a,b \right]  $$
> 下是不完备的; 其完备化空间是$C\left[ a,b \right]$

> [!proof] Proof: 
> **$P\left[ a,b \right]$的不完备**: 注意到 $d$可以自然地延拓为$C\left[ a,b \right]$上的度量$\bar{d}$, 
>  $$ \bar{d}\left(x,y\right)= \max _{t\in \left[ a,b \right]}\left| x\left(t\right)-y\left(y\right) \right|,\quad x,y\in C\left[ a,b \right]  $$ 
>  考虑
>  $$ \left\{ x_{n} \right\}= \sum _{k= 0}^{n}\frac{1 }{k! }t^{k}$$
>  则
>  $$ \bar{d}\left(x_{n}\left(t\right),e^{t}\right)= \max _{t\in \left[ a,b \right]}\left| \sum _{k= 0}^{n}\frac{1 }{k! }t^{k}-e^{t} \right|  $$ 
> 由于在$\left[ a,b \right]$上, $\left\{ \sum _{k= 0}^{n}\frac{1 }{k! }t^{k} \right\}$一致收敛于$e^{t}$, 因此
>  $$ \lim_{n\to \infty}\bar{d}\left(x_{n}\left(t\right),e^{t}\right)= 0 $$ 
> 
> 由于极限存在, $\left\{ x_{n} \right\}$是$\bar{d}$-Cauchy的, 从而也是$d$-Cauchy的. 
> 
> 但是如果假设$d$是完备的, 则$\left\{ x_{n} \right\}$的$d$-极限存在, 记作$x^{\prime}\in P\left[ a,b \right]$. 则$\left\{ x_{n} \right\}$的 $\bar{d}$-极限也是$x^{\prime}$. 但是$e^{t}\not \in P\left[ a,b \right]$, 这与极限的唯一性矛盾. 故$d$不是完备的. 
> 
> **$\left(C\left[ a,b \right], \bar{d}\right)$的完备性**: 如果$\left\{ y_{n} \right\}$是$\bar{d}$-Cauchy的, 则任意固定$t\in \left[a,b \right]$, $\left\{ y_{n}\left(t\right) \right\}$是Cauchy列, 从而由实数的完备性, 存在$y\left(t\right)$, 使得$\lim_{n\to \infty}y_{n}\left(t\right)= y\left(t\right)$. 任取$\varepsilon > 0$, 存在$N$, 使得对于任意的$m,n\ge N$, 都有
>  $$ \bar{d}\left(y_{m},y_{n}\right)= \max _{t\in \left[ a,b \right]}\left| y_{m}\left(t\right)-y_{n}\left(t\right) \right|\le \varepsilon   $$ 
> 取$n\to \infty$时的极限, 得到
>  $$ \bar{d}\left(y_{m},y\right)= \max _{t\in \left[ a,b \right]}\left| y_{m}\left(t\right)-y\left(t\right) \right|\le \varepsilon   $$ 
> 这根据定义说明了
>  $$ \lim_{m\to \infty}\bar{d}\left(y_{m},y\right)= 0 $$ 
> 因此$C\left[ a,b \right]$是$\bar{d}$-完备的. 
> 
> **$C\left[ a,b \right]$是$P\left[ a,b \right]$的完备化**: 由Weierstrass逼近定理$P\left[ a,b \right]$在$C\left[ a,b \right]$中是$\bar{d}$-稠密的. 故$\left(C\left[ a,b \right],\bar{d}\right)$是$\left(P\left[ a,b \right],d\right)$的一个完备化.



> [!exercise] Exercise: 2
> 设$\left\{ x_{n} \right\}$是距离空间$\left(X,d\right)$中的Cauchy列, 证明: $\left\{ x_{n} \right\}$收敛当且仅当$\left\{ x_{n} \right\}$中存在一个收敛子列.

> [!proof] Proof: 
> 其中一个方向是显然的, 若$\left\{ x_{n} \right\}$收敛, 则它自身就是一个收敛子列. 
>
> 接下来, 设$\left\{ x_{n} \right\}$中存在收敛子列$\left\{ x_{n_{k}} \right\}$, 设其收敛于$x$.
> 任取$\varepsilon > 0$, 
> 由于$\left\{ x_{n} \right\}$  是Cauchy的, 存在$N_1$, 使得对于任意的$m,n> N_1$, 都有
>  $$ d\left(x_{m},x_{n}\right)< \frac{\varepsilon  }{2 } $$
> 此外, 由于$\left\{ x_{n_{k}} \right\}$收敛, 存在$n_{k}> N_1$, 使得
>  $$ d\left(x_{n_{k}},x\right)< \frac{\varepsilon  }{2 } $$
> 那么此时对于任意的$n> N_1$ , 我们有
>  $$ d\left(x_{n},x\right)\le d\left(x_{n},x_{n_{k}}\right)+ d\left(x_{n_{k}},x\right)< \frac{\varepsilon  }{2 }+ \frac{\varepsilon  }{2 }= \varepsilon  $$ 
> 因此$\lim_{n\to \infty}d\left(x_{n},x\right)= 0$, $\left\{ x_{n} \right\}$收敛于$x$.

> [!exercise] Exercise: 3
> 设$\left(X,d\right)$是距离空间, 证明: $\left(X,d\right)$是完备的当且仅当$\left(X,d\right)$中闭球套定理成立.

> [!proof] Proof: 
> **完备性蕴含闭球套定理**:  设$B_{n}= \left\{ x\in X:d\left(x,x_{n}\right)\le r_{n} \right\}$满足
> 1. $B_1\supseteq B_2\supseteq \cdots$
> 2. $\lim_{n\to \infty}r_{n}= 0$
> 
> 任取$\varepsilon > 0$, 存在$N$, 使得对于任意的$n\ge N$, $r_{n}< \frac{\varepsilon  }{2 }$
> 于是对于任意的$n,m\ge N$, 取定$x\in B_{n}\cap B_{m}$, 
>  $$ d\left(x_{n},x_{m}\right)\le d\left(x_{n},x\right)+ d\left(x,x_{m}\right)\le r_{n}+ r_{m}< \varepsilon  $$
> 因此$\left\{ x_{n} \right\}$是Cauchy列. 由$\left(X,d\right)$的完备性, 存在$x^{\prime} \in X$使得$\lim_{n\to \infty}d\left(x_{n},x^{\prime} \right)= 0$.
> 若$y\in \bigcap _{n = 1}^{\infty}B_{n}$, 则
>  $$ d\left(y,x^{\prime} \right)\le d\left(y,x_{n}\right)+ d\left(x_{n},x^{\prime} \right)\le r_{n}+ d\left(x_{n},x^{\prime} \right) $$  
> 断言$x^{\prime} \in \bigcap _{n = 1}^{\infty}B_{n}$. 若不然, 存在$n_0$, 使得$x^{\prime} \not \in B_{n_0}$. 那么对于任意的$n\ge n_0$, $x^{\prime} \not \in B_{n}.$ 从而$d\left(x_{n},x^{\prime} \right)\ge r_{n}$. 令$n\to \infty$导出矛盾.   
>
> 最后, 若$y\in \bigcap _{n = 1}^{\infty}B_{n}$, 则
>  $$ d\left(y,x^{\prime} \right)\le d\left(y,x_{n}\right)+ d\left(x_{n},x^{\prime} \right) \le r_{n}+ d\left(x_{n},x^{\prime} \right)$$ 
> 
> 令$n\to \infty$, 得到 $d\left(y,x^{\prime} \right)= 0$.  因此$\bigcap _{n = 1}^{\infty}B_{n}= \left\{ x^{\prime}  \right\}$.
>
> **闭球套导出完备性**: 若取$X$上的Cauchy列$\left\{ x_{n} \right\}$. 递归地取出一系列$\left\{ N_{n} \right\}$: 任取$n\in \mathbb{N}$, 存在$N_{n}\ge N_{n-1}$, 使得 对于所有的$m,n> N_{n}$, 都有
>  $$ d\left(x_{m},x_{n}\right)< \frac{1 }{2^{n+ 1} } $$ 
> 考虑$B_{n}= B\left(x_{N_{n}},\frac{1 }{2^{n} }\right)$, 则对于$y\in B_{n}$, 我们有
>  $$ d\left(y,x_{N_{n-1}}\right)\le d\left(y,x_{N_{n}}\right)+ d\left(x_{N_{n}},x_{N_{n-1}}\right) \le \frac{1 }{2^{n} }+\frac{1 }{2^{n} }< \frac{1 }{2^{n-1} }  $$ 
> 因此$y\in B_{n-1}$. 这表明$B_{n}\subseteq B_{n-1}$. 因此$\left\{ B_{n} \right\}$是一个闭球套. 存在唯一的$x\in \bigcap _{n = 1}^{\infty}B_{n}$.  从而
>  $$ \lim_{n\to \infty}d\left(x, x_{N_{n}}\right) = 0$$
> 故子列$\left\{ x_{N_{n}} \right\}$ 收敛于$x$. 根据Exercise 2: "Cauchy列若存在收敛的子列, 则自身也收敛", 因此$\left\{ x_{n} \right\}$收敛于$x$. 这表明$\left(X,d\right)$是完备的.

> [!exercise] Exercise: 4
> 证明距离空间中每一个Cauchy列是有界集.

> [!proof] Proof: 
> 我们证明无界点列不是Cauchy列.
> 
>
> 固定$x_0\in X$. 如果点列$\left\{ x_{m} \right\}$不是有界的, 那么对于任意的$n$, 递归地取出$m_{n}> m_{n-1}$, 使得
>  $$ d\left(x_{m_{n}},x_0\right)> d\left(x_{m_{n-1}},x_0\right)+ 1 $$
>  于是
>  $$ d\left(x_{m_{n}},x_{m_{n-1}}\right)\ge d\left(x_{m_{n}},x_0\right)-d\left(x_{m_{n-1}},x_0\right)> 1 $$
> 因此$\left\{ x_{m_{n}} \right\}$不是Cauchy列. 由于Cauchy列的子列也是Cauchy列, 故$\left\{ x_{m} \right\}$不是Cauchy列.

> [!exercise] Exercise: 5
> 证明距离空间的完备子空间是闭子空间.

> [!proof] Proof: 
> 设$\left(X,d\right)\subseteq \left(Y,\bar{d}\right)$是完备的子空间. $\overline{X}$是$X$在$Y$中的闭包. 任取$x\in \overline{X}$, 存在$X$上的点列$\left\{ x_{n} \right\}$, 使得$\lim_{n\to \infty}x_{n}= x$. 则$\left\{ x_{n} \right\}$是Cauchy列. 由于$X$是完备的, 存在$x^{\prime} \in X$, 使得$\lim_{n\to \infty}x_{n}= x^{\prime}$. 根据极限的唯一性, $x^{\prime} = x$, 因此$x\in X$. 这表明$\overline{X}= X$, 即$X$是$Y$的闭子空间.

> [!exercise] Exercise: 6
> 设$F_1,F_2$是距离空间$X$中不相交的闭集, 证明存在$X$上的连续函数$f\left(x\right)$, 使得当$x\in F_1$时$f\left(x\right)= 0$, 当$x\in F_2$时$f\left(x\right)= 1$.

> [!proof] Proof: 
> 由于映射
>  $$ x\mapsto d\left(x,F_{i}\right) $$
> 是连续映射, $i= 1,2$.
> 那么可以定义连续映射 
>  $$ f\left(x\right)= \frac{d\left(x,F_1\right) }{d\left(x,F_1\right)+ d\left(x,F_2\right) } $$ 
> 当$x\in F_1$时, $d\left(x,F_2\right)> 0$, $d\left(x,F_1\right)= 0$, 此时$f\left(x\right)= 0$. 当$x\in F_2$时, $d\left(x,F_1\right)> 0$, $d\left(x,F_2\right)= 0$, 此时$f\left(x\right)= 1$

> [!exercise] Exercise: 7
> 用压缩映射原理证明反函数定理:
> 设$U\in \mathbb{R} ^{m}$是一个开集,$f:U\to \mathbb{R} ^{m}$是可微并且导数也连续. 若对$x_0\in U$有
>  $$ \left| \frac{\partial f}{\partial x}\left(x_0\right) \right|= \det \left(\frac{\partial f_{i}}{\partial x_{j}}\left(x_0\right)\right)_{1\le i,j\le m}\neq 0  $$
> 则存在$x_0$的一个邻域$U_0\subseteq U$, 使得$f$在$U_0$上的反函数存在.

> [!proof] Proof: 
> **预处理**: 由于$Df\left(x_0\right)$可逆, 令$\tilde{f}\left(x\right)= \left(Df\left(x_0\right)\right)^{-1} \left(f\left(x+ x_0\right)-f\left(x_0\right)\right)$. 则$f$存在反函数当且仅当$\tilde{f}$存在反函数. 因此不妨设$x_0= 0$, $f\left(x_0\right)= 0$, $Df\left(0\right)= I$.
> 
> **化为不动点问题**
> 任取$y\in \mathbb{R} ^{m}$, 定义
>    $$ T_{y}\left(x\right)= x-f\left(x\right)+ y $$
> 则$f\left(x\right)= y$当且仅当$x$是$T_{y}$的一个不动点.
> 
> **验证压缩映射**
> 
> 由于$T_{y}\left(0\right)= y$, 
>  $$ DT_{y}= I-Df ,\quad DT_{y}\left(0\right)= 0$$ 
> 
>  由$DT_{y}$的连续性,  存在$V= \overline{B}_{r}\left(0\right)$, 使得对于任意的$y$, $DT_{y}$的算子范数$\left\| D T_{y} \right\|_{V}< \frac{1}{2}$. 
> 那么对于任意的$x_1,x_2\in V$
>  $$ \begin{aligned} \left| T_{y}\left(x_1\right)-T_{y}\left(x_2\right) \right|&= \int _{0}^{1}\left(DT_{y}\left(x_1+ t\left(x_2-x_1\right)\right)\right)\cdot \left(x_2-x_1\right)\,d t\\&\le \left\| DT_{y} \right\|_{V}\left| x_2-x_1 \right|\\&< \frac{1}{2}\left| x_2-x_1 \right|   \end{aligned}   $$ 
> 特别地$\left| T_{y}\left(x\right) -y\right|\le \frac{1}{2}\left| x \right|$, $\left| T_{y}\left(x\right) \right|\le \frac{1}{2}\left| x \right|+ \left| y \right|\le \frac{1}{2}r+ \left| y \right|$. 那么对于任意的 $y\in \overline{B}_{\frac{1}{2}r}\left(0\right)$, $\left| T_{y}\left(x\right) \right|\le  r,\forall x\in \overline{B_{r}}\left(0\right)$, 于是
>  $$ T_{y}: \overline{B}_{r}\left(0\right)\to \overline{B}_{r}\left(0\right) $$
> 是完备度量空间上的压缩映射. 根据压缩映射原理, 存在唯一的$x\in \overline{B}_{r}\left(0\right)$, 使得$T_{y}\left(x\right)= x$, 即$f\left(x\right)= y$, 这给出了逆映射$g: B_{\frac{1}{2}r}\left(x\right)\to f^{-1} \left(B_{\frac{1}{2}r}\left(x\right)\right)$, $g\left(y\right)= f$.
>
 
> [!exercise] Exercise: 8
> 举例说明, 在压缩映射原理中, 
> 1. 空间完备性的条件不可少;
> 2. 映射$T$所满足的条件不能代之以条件:
>    $$ d\left(Tx,Ty\right)< d\left(x,y\right),\quad \left(x\neq y\right) $$

> [!proof] Proof: 
> 1. 考虑区间$\left(0,1\right)$.  令$f\left(x\right)= \frac{1}{2}x$. 则显然
>  $$ \left| f\left(x_1\right)-f\left(x_2\right) \right|= \frac{1}{2}\left| x_1-x_2 \right|   $$
> 但是 $f\left(x\right)= x\implies x= 0\not \in \left(0 ,1\right)$. $f$在$\left(0,1\right)$上没有不动点, 故完备性不可少.
>
> 2. 考虑$[0,\infty)$上的函数$f\left(x\right)= x+ e^{-x}$.  那么
>  $$ \left| f\left(x\right)-f\left(y\right) \right|\le \left| 1-e^{-\xi } \right|\left| x-y \right|< 1  $$
> 其中$\xi \in \left[ x,y \right]$ . 但是$f\left(x\right)> x$不存在不动点.
>  

> [!exercise] Exercise: 9
> 证明: 存在闭区间$\left[ 0,1 \right]$上的连续函数$x\left(t\right)$, 使得
>  $$ x\left(t\right)= \frac{1 }{2 }\sin x\left(t\right)-a\left(t\right) $$
> 其中, $a\left(t\right)$是给定的$\left[ 0,1 \right]$上的连续函数. 

> [!proof] Proof: 
> 定义$T:C\left[ 0,1 \right]\to C\left[ 0,1 \right]$
>  $$ T\left(x\right)= \frac{1}{2}\sin \circ x-a $$ 
> 则
>  $$ \left| T\left(x\left(t\right)\right)-T\left(y\left(t\right)\right) \right|\le \frac{1}{2}\left| \sin x\left(t\right)-\sin y\left(t\right) \right|\le \frac{1}{2}\left| \cos \xi  \right|\left|x\left(t\right)-y\left(t\right) \right|  \le \frac{1}{2}\left| x\left(t\right)-y\left(t\right) \right|    $$
> 其中 $\xi \in \left[ x\left(t\right),y\left(t\right) \right]$, 因此
>  $$ d\left(T\left(x\right),T\left(x\right)\right)\le \frac{1}{2}d\left(x,y\right) $$ 
> $T$是完备度量空间上的压缩映射, 故存在不动点$x\left(t\right)$, 使得
>  $$ x\left(t\right)= T\left(x\left(t\right)\right) = \frac{1}{2}\sin x\left(t\right)-a\left(t\right)$$ 

> [!exercise] Exercise: 10
> 设$X$是完备距离空间, $T$是$X$上到自身的映射, 在闭球$\overline{B}= \left\{ x\in X:d\left(x_0,x\right)\le r \right\}$上, $d\left(Tx,Ty\right)\le \theta d\left(x,y\right)$且$d\left(x_0,Tx_0\right)< \left(1-\theta \right)r$, 其中$0\le \theta < 1$. 证明$T$在$\bar{B}$上有唯一不动点.

> [!proof] Proof: 
> 在闭球$\overline{B}$上, 
>  令$x_1= Tx_0$, 递归地定义$x_{n}= Tx_{n-1}$. 
> 则
>  $$ d\left(x_{n},x_{n-1}\right)\le  \theta ^{n-1}d\left(x_1,x_0\right)<  \left(1-\theta \right)\theta ^{n-1} r$$ 
>  $$ d\left(x_{n},x_0\right)\le \sum _{k= 1}^{n}d\left(x_{n},x_{n-1}\right)< \left(1-\theta \right)r\sum _{k= 1}^{n} \theta ^{k}= \left(1-\theta \right)\theta r\frac{1-\theta ^{n} }{ 1-\theta }= \theta \left(1-\theta ^{n}\right)r< r$$ 
> 故$x_{n}\in B$. 类似压缩映射原理的证明, 由
>  $$ d\left(x_{n},x_{n+ p}\right)\le \sum _{k= n+ 1}^{n+ p}d\left(x_{k},x_{k-1}\right)\le \theta ^{n}\frac{1-\theta ^{p} }{1-\theta  }d\left(x_1,x_0\right)\le \frac{\theta ^{n} }{ 1-\theta }d\left(x_1,x_0\right) $$ 
> 可知$\left\{ x_{n} \right\}$是Cauchy列. 由于$X$是完备的, 可设$\left\{ x_{n} \right\}$收敛于$x$. 则$x_{n}\in B$表明$x\in \overline{B}$. 
> 对
>  $$ x_{n}= Tx_{n-1} $$
> 取$n\to \infty$可得 $T$在$\overline{B}$上有不动点$x$. 
> 若$x^{\prime}$是另一不动点, 则
>  $$ d\left(x,x^{\prime} \right)= d\left(Tx,Tx^{\prime} \right)\le \theta d\left(x,x^{\prime} \right)\implies  d\left(x,x^{\prime} \right)= 0$$
> 导出不动点的唯一性. 

> [!exercise] Exercise: 11
> 设$X$是紧距离空间, $T$是$X$上到自身的映射且满足条件: 对任意$x,y\in X$, 当$x\neq y$时,
>  $$ d\left(Tx,Ty\right)< d\left(x,y\right) $$ 
> 证明$T$在$X$上有唯一不动点.

> [!proof] Proof: 
> 令
>  $$ f\left(x\right)= d\left(x,Tx\right) $$
> 则由于$f$是连续的, $X$是紧的, $f$在$X$上有最小值. 设
>  $$ f\left(x_0\right)= \min _{x\in X}f\left(x\right) $$ 
> 断言$x_0$是$T$在$X$上的不动点. 即$f\left(x_0\right)= 0$. 事实上, 若$d\left(x_0,T\left(x_0\right)\right)> 0$, 则考虑到
>  $$f\left(T\left(x_0\right)\right)=  d\left(T\left(T\left(x_0\right)\right),T\left(x_0\right)\right)< d\left(x_0,T\left(x_0\right)\right) = f\left(x_0\right)$$ 
> 与$f\left(x_0\right)$是最小值矛盾.
>
> 最后, 若$x_0^{\prime}$是另一个不动点, 则
>  $$ d\left(x_0,x_0^{\prime} \right)= d\left(Tx_0,Tx_0^{\prime} \right) < d\left(x_0,x_0^{\prime} \right)\implies d\left(x_0,x_0^{\prime} \right)= 0$$
> 因此$x_0$是唯一的不动点, 