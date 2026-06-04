### 09:12


> [!exercise] Exercise 10
> 设 $H$ 是 Hilbert 空间，$T:H\to \mathbb K^n$ 是一个满的有界线性算子，$\{e_i\}_{i=1}^n$ 是 $\mathbb K^n$ 的标准正交基。证明存在有限个线性无关的元 $\{y_1,y_2,\cdots,y_n\}\subset H$，使得
> $$
> T(x)=\sum_{i=1}^n \langle y_i,x\rangle e_i,\quad \forall x\in H.
> $$


$T$是满的有界线性算子, 任取

取$\left\{ e_{i} \right\}_{i= 1}^{n}$的一组基



$$ T\left(y_{i}\right) = \sum _{i = 1}^{n}\left< y_{i}, y_{i} \right>e_{i}$$ 

我们先找正交的

那么$T\left(y_{i}\right)= e_{i}$

由于$T$是满的, 存在$y_1,\cdots ,y_{n}$, 使得

$$ T\left(y_{i}\right) = e_{i}$$ 

Riesze表示定理是说, 对于任意的有界线性泛函$f\in H^{*}$, 存在
令
$$ f_{i}= \left< T\left(x\right) ,e_{i}\right> $$ 
则

$$ \left| f_{i}\left(x\right) \right| \le \left\| T\left(x\right) \right\|\left\| e_{i} \right\|\le \left\| T \right\|\left\| x \right\|\implies \left\| f_{i} \right\|\le \left\| T \right\| $$ 

于是$f_{i}$是有界线性泛函. 有Risze表示定理, 存在$y_{i}$, 使得
$$ f_{i}\left(x\right)= \left< y_{i},x \right> $$ 

于是
$$ T\left(x\right)= \left< y_1,x \right> e_1+ \cdots + \left< y_{n},x \right>e_{n}$$ 

我们来证明$y_1,\cdots ,y_{n}$是线性无关的.

设$k_1y_1+ \cdots + k_{n}y_{n}= 0$, 则


$$ \left< k_1f_1+ \cdots + k_{n}f_{n}, x \right>= 0 $$ 
由于$T$是满的线性算子, 

$$ \left< y_1,x \right> e_1+ \cdots + \left< y_{n},x \right>e_{n}$$ 
是满射.
存在$x_{n}$, 使得
$$ \left< y_1,x \right>e_1+ \cdots + \left< y_{n},x \right>e_{n}= e_{n} $$ 
此时
$$ \left< y_{n},x \right>= 1,\quad \left< y_{i},x \right>= 0 $$ 
存在$x_{i}$, 使得
$$ \left< y_{i},x_{i} \right> = 1,\quad \left< y_{i},x_{j} \right>= 0$$ 
若$k_1y_1+ \cdots + k_{n}y_{n}= 0$, 则
$$ k_1\left< y_1,x \right>+ k_2\left< y_{2},x \right>+ \cdots + k_{n}\left< y_{n},x \right>= 0 $$ 
取$x= x_{i}$, 得到
$$ k_{i}= 0 $$ 

> [!exercise] Exercise 12
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$T$ 是 $M$ 上的有界线性算子，证明在 $H$ 上存在一个有界线性算子 $\widetilde T$，使得在 $M$ 上 $\widetilde T$ 与 $T$ 相等并且
> $$
> \|\widetilde T\|\leq \|T\|_M.
> $$

设$\left\{ e_{n} \right\}$是$\overline{M}$的一组标准基.
则
$$ T\left(x\right)= \sum _{i}\left< T\left(x\right) , e_{i}\right>e_{i} $$ 

令$f_{i}= \left< T\left(x\right),e_{i} \right>$
则$f_{i}$是有界线性泛函.

由于
$$ H= \overline{M}\oplus M^{\perp} $$ 
$x$分解为
$$ x= x_{\overline{M}}\oplus x_{M^{\perp}} $$ 
定义
$$ \tilde{f}_{i}\left(x\right)= f_{i}\left(x_{\overline{M}}\right) $$ 

则$\tilde{f}_{i}\left(x\right)\in H^{*}$



$$ \sum _{k = 1}^{\infty}\left\| e_{k}-e_{k}^{\prime}  \right\|^{2}< 1 $$ 

$$ \sum _{k = n}^{\infty}\left\| e_{k}-e_{k}^{\prime}  \right\| < \infty$$ 


$$ \sum _{n}\left(e_{n},x\right)e_{n }= 0 $$ 
我们希望证明$\sum _{n }\left(e_{n}^{\prime} ,x\right)e_{n}^{\prime} = 0$

事实上, 

$$ \sum _{n}\left(e_{n}^{\prime} ,x\right)e_{n}^{\prime} = \sum _{n}\left(e_{n}^{\prime} -e_{n},x\right)e_{n}^{\prime} +  \left(e_{n},x\right)e_{n}^{\prime}  $$ 

$$\sum  \left(e_{n}^{\prime} -e_{n},x\right)\left(e_{n}^{\prime} -e_{n}\right)= \sum \left(e_{n}^{\prime} ,x\right)e_{n}^{\prime} -\left(e_{n}^{\prime} ,x\right)e_{n}-\left(e_{n},x\right)e_{n}^{\prime}  $$ 
Parseval, 
$$ \left(e_{n}^{\prime} ,x\right)e_{n}^{\prime} =  $$ 

设$\left\{ e_{n} \right\}$完备, 取$x\in \overline{\operatorname{span}\left\{ e_{n}^{\prime}  \right\}}^{\perp}$

则
$$ \left< x,e_{n} \right>= \left< x,e_{n}-e_{n}^{\prime}  \right> $$ 
由parseval恒等式
$$ \left\| x \right\|^{2}= \sum _{n}\left| \left< x,e_{n} \right> \right| ^{2} $$ 
若$\left\| x \right\|> 0$, 则
$$\left\| x \right\|^{2}=  \sum _{n}\left| \left< x,e_{n}-e_{n}^{\prime}  \right> \right| ^{2}\le \sum _{n}\left\| x \right\|^{2}\left\| e_{n}-e_{n}^{\prime}  \right\|^{2}= \left\| x \right\|^{2}\sum _{n}\left\| e_{n}-e_{n} ^{\prime} \right\|^{2}< \left\| x \right\|^{2} $$ 
矛盾, 因此$\left\| x \right\|= 1$

**我做不出来是因为我产生了误解, 我以为完备性是从$\sum _{n}\left(x,e_{n}\right)e_{n}= 0$推出$x= 0$,这个条件太弱了? 好像并不是,是我用的形式太弱了.** 
我们实际上需要的是$\left(x,e_{n}^{\prime} \right)= 0$即$\left(x, e_{n}-e_{n}^{\prime} \right)= 0$.


Review一下, 


$\left(-l,l\right)$上的 Fourier技术
$$ f\left(x\right)\sim \sum _{n = -\infty}^{\infty}\left[ \frac{1 }{2l }\int _{-l}^{l}f\left(y\right) e^{-in \pi \frac{y}{l}}\,d y\right]e^{in\pi \frac{x}{l}} $$ 

$-\pi ,\pi$的, 我们就写
$$ \sum _{n = -\infty}^{\infty}\frac{1 }{2\pi  }\int _{-\pi }^{\pi }\int _{-\pi }^{\pi }f\left(y\right)e^{-inx\,d y}\,d y $$ 
然后我们要$\left(-\pi ,\pi \right)$
原先$x$是从$-\pi ,\pi$, 我们我们把$x$乘以$\pi$, 那么范围是随着变量反变的, 范围变成$\left(-1,1\right)$, 然后在把$x$除以$l$, 就得到$\left(-l,l\right)$的范围. 所以$inx$变成$in\pi x/l$.



我们变成
$$ \frac{1 }{2\pi  }\int _{-l}^{l}f\left(y\right)e^{it_{n}\left(x-y\right)\,d y} \frac{\pi  }{l }$$ 
固定$\pi$这个区间量, $n \pi /l$是$e$上的指数嘛, 然后$l$很大, $n$一直跑, 相当于覆盖了所有的. 把$l$塞到$dy$上面去, dy变成了
不太对, 差距变成$\frac{\pi  }{l }$ 
跟着点的变化走的.


$$ \frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(y\right)e^{it\left(x,y\right)}\,d y $$ 
的积分
$$ \int _{-\infty}^{\infty}\frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(y\right)e^{it\left(x-y\right)}\,d y\,d t $$ 

展开, 得到
$$ f\left(x\right)\sim \int _{-\infty}^{\infty}\frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(y\right)e^{-ity}\,d y\,d x $$ 

$$ \frac{1 }{2\pi  }\int _{-\infty}^{\infty}f\left(y\right)e^{-ty} \,d y$$ 


$$ c\left(t\right)= \int _{-\inftyo}^{\infty}f\left(y\right)e^{-2\pi ty} \,d y$$ 
把$y$整体乘以$2\pi$, 相当于是说用一个新变量, 使得$2\pi x= y$.从变量的角度来说, 是没有变化的, 这个事实是基于变量替换. 然后我们把区域拉回一下,

$$ y= 2\pi x $$
那么$x$落在 $$ \varphi \left(y\right)= 2\pi y $$  
$\varphi \left(y\right)$, $\varphi ^{*}\left(A\right)= A\circ \varphi$. 所以变量是用$\varphi$映射的, 区域使用$\varphi ^{*}$拉回的.

$y\mapsto \varphi \left(y\right)$
区域是$y$属于什么, 现在就应该考虑$\varphi \left(y\right)$属于什么 
$y\in A$,

现在考虑
$$ \varphi \left(y\right) \in \varphi \left(A\right)$$ 
好像不太对,
$$ \varphi \left(y\right)= 2\pi u $$ 
$y\in A$, $\varphi \left(y\right)\in \varphi \left(A\right)$
$y=  \varphi \left(u\right)$
$y\in A$, $u\in \varphi ^{-1} \left(A\right)$
乘以$2\pi$是一个行为, 是一个函数.

然后对于$f\in L\left(\mathbb{R} \right)$, 可以定义$\hat{f}$,

根据它的形式, 我们知道, $\left\| \hat{f} \right\|_{\infty}\le \left\| f \right\|_{L^{1}}$.

一致连续.
$f^{\prime} \left(x\right)= 2\pi it$

Riemann Lebesgue引理,$\lim_{\left| t \right|\to \infty }\hat{f}\left(t\right)= 0$

$\hat{f}\left(t+ h\right)-\hat{f}\left(t\right)$

我们发现函数变化全体现在$e^{2}$上面, 所以求导形式就是对$e$来讲的.

平移$-h$, 实际上$e$平移$h$.
所有的$u-h$, 我们加回去$e$

$$ \mathcal{F}\left(f\left(t-h\right)\right) = e^{-2\pi ith}\hat{f}\left(t\right)$$ 
根据控制收敛定理

控制收敛定理是需要第一个想到的, 为什么会想到, 因为我们研究的就是$h\to 0$的收敛性, 所以就是里面这个积分的收敛性,它无关于$t$. 避免$t$.
所以说一致连续, 可以不要什么$\varepsilon$, 我们直接从说明一个收敛过程与$t$无关.





$\hat{f}$一致收敛.


一致范数和Mk$L^{1}$范数的关系, 用的都是$\left| e \right|\le 1$.线性


$\hat{f}g =  f \hat{g}$.

因为$\widehat{}$是把$f$变成权, 然后对$e^{-2\pi itx}$积分.而$tu$是对称的,如果有另一个$g\left(t\right)$的函数, 我们可以看成是把$g\left(t\right)$变成权然后对$u$积分.

卷积不等式
$$ \left\| f*g \right\|_{1}\le \left\| f \right\|_{1}\left\| g \right\|_{1} $$ 

卷积的变换就是变换的和.
$f\left(x-u\right)g\left(u\right)$

就是卷积, 然后固定的是$x$, 的$du$积分.

当做Fourier变换的时候, 固定$t$, 然后变化$x$, 但是$x$是卷积中的固定.
对$x$积分,是对前面$f\left(x-u\right)$, 配上$e^{-2\pi i\left(x-u\right)}$

$-2\pi itx$, $-2\pi i t\left(x-u\right)$, $-2\pi itu$

$u$和$\left(x-u\right)$正好分配了.
把差商作用在$e$上 , 差商算符需要用$xf$控制.

局部绝对连续, 有导数, 导数卷积$2\pi it \hat{f}$.

卷积的导数是直接导数

导数的卷积是分布积分. 所以我们还是对了$e$求导, 但是由于分布积分, 有一个符号, 而且求导的对象是积分的变量$t$, 而不是函数的变量$x$.



绝对连续加$f^{\prime} \in L$, 等于无穷远端小时.


**无穷区间上, 绝对连续不一定$L^{1}$**, 


我们来做反演, 我们希望

$$ f\left(x\right)= \int _{-\infty}^{\infty}\hat{f}\left(t\right)e^{2\pi ixt}\,d t $$ 




来看反常积分是否存在
$$ f_{R}\left(x\right)= \int _{-R}^{R}\hat{f}\left(t\right)e^{2\pi ixt} \,d t$$ 

$$ \begin{aligned} \begin{aligned} \int _{-R}^{R}\int _{-\infty}^{\infty}f\left(u\right)e^{2\pi ut} e^{2\pi xt}\,d u\,d t\\&= \int _{-\infty}^{\infty}f\left(u\right)\int _{-R}^{R}e^{2\pi \left(x-u\right)it}\,d t\,d u\\&= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(u\right)\frac{\sin 2\pi R\left(x-u\right) }{x-u }  \\&= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(x-t\right)\end{aligned} \end{aligned}$$ 

$$ x-u= t $$ 
这个过程, $u$被怎么操作了.

$$ u= t-x $$ 

原先是$-u$, 我们先变成了$t$, 和就是说先加一个负号, 然后整体减$x$.c
从$x-u$变成$u$, 需要先加$x$, 然后反转符号.
没必要
但是应该是能理清楚的

$x-u= t$, $u = x-t$
关注变量$t$.  $u$先反转符号, 然后
说是$x-u$变成$u$, 实际上是$u-x$变成$-u$, $u$变成$x-u$, 我们先反转符号在加$x$.
$x-u= t$, $x= u+ t$.


$$ f_{R}\left(x\right)= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(x-t\right)\frac{\sin 2\pi Rt }{t }\,d t $$ 
Dirichlet积分, Di


所以我们不需要直接$L^{1}$, 而是考虑
$$ f_{R}\left(x\right)$$的极限. 
考虑一个Cauchy极限.

只需要 $$ \frac{f\left(x+ t\right) }{t }\in L\left(R\right) $$ 

$\frac{\sin 2\pi Rt }{t }$有下届 , 远端$o\left(\frac{1 }{t }\right)$
近端有下届, 所以只需要$o\left(\frac{1 }{1+ \left| x \right|  }\right)$
积分进而可以收敛.m

若$\frac{f }{1+ \left| x \right|  }\in L\left(R\right)$, 则$f$在有界区间是可积. 是

定义$f^{\left(a\right)}$是从$a$跑出去一个周期. 然后延拓


$f_{R}$在$\left(a,a+ 2\pi \right)$的收敛性, 与$f^{\left(a\right)}$的 Fourier技术的收敛性相同. $S_{n}\left(f^{\left(a\right)},x\right)$

如果$\frac{f }{1+ \left| x \right|  }\in L\left(R\right)$, 这是保证 
$f_{R}$有定义来着.


这非常神奇. 为什么一个全域的积分极限, 能与一个周期函数的Fourier级数和有相同的收敛性呢?

由Riemann-Lebesgue引理, 





由R-L引理, 
$$ f_{R}\left(x_0\right)= \frac{1 }{\pi  }\int _{-\delta }^{\delta }f\left(x_0+ t\right)\frac{\sin 2\pi Rt }{t }\,d t+ o\left(1\right) $$ 

由局部化引理, 收敛性又只取决于一个小区间的行为. 而 Fourier级数, 经过代数操作后, 就变成是的Dirichlet核的卷积.
$$ \frac{1 }{2\pi  }\int f^{\left(a\right)}\left(x_0+ t\right) \frac{\sin \left(n+ \frac{1}{2}\right)t }{\sin \left(\frac{t }{2 }\right) }\,d t $$ 

在$t= 0$附近, Dirichlet核的 收敛性为由核在$t= 0$附近, 决定, 那么
$$ S_{n}\left(f^{\left(a\right)},x_0\right)= \frac{1 }{2\pi  }\int f\left(x_0+ t\right)\frac{\sin \left(n+ \frac{1}{2}t\right) }{\frac{t}{2} } $$ 

$$ S_{n}\left(f^{\left(a\right)},x_0\right)= \frac{1 }{\pi  }\int _{-\delta }^{\delta }f\left(x_0+ t\right) \frac{\sin \left(n+ \frac{1}{2}\right)t }{t }\,d t+ o\left(1\right)$$ 
所以说现在就是比较两个核
$$ \frac{\sin 2\pi Rt }{t } ,\quad \frac{\sin \left(n+ \frac{1}{2}\right)t }{t }$$ 

$$ \frac{\sin R_1 t }{t } $$ 

$$ R_2= \left[ R_1 \right]+ \frac{1}{2} $$ 
$$ \neq \left[ R_1 \right], R_2= n+ \frac{1}{2} $$ 

$$ f_{R}\left(x_0\right)-S_{\left[ 2\pi R \right]} $$ 
所以说我们是让$n$和$R$做一个颗粒度对齐, 让
$$ n+ \frac{1}{2}= R_2= \left[ R_1 \right] + \frac{1}{2}$$ 
得到
$$ \left| R_1-R_2 \right|\le \frac{1}{2}  $$ 


i got it , 这里用了黎曼局部化引理吧, 把问题放到局部, 这样大部分的积分都会被高速震荡杀掉, 所以我们把两个核的作用范围对齐. 然后我们再尽量对齐两个核的颗粒度, 让它们的震荡速度差不多, 将这种差不多用和差化积, 弥留成一个有界项, 和一个高速震荡项, 正好杀死剩下的可积函数
