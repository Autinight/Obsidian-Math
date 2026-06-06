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

$e^{ink}$是完备的规范正交基, 即满足正交, 规范, 封闭.

封闭是说闭包是整个, 也就是说垂直空间是

垂直空间等于闭包的垂直空间, 因为垂直在极限下保持, 是闭个的性质.也就是说正交空间是零. 这只需要Hilbert空间的内积的性质对吧, 我们用了正交分解. 但是为什么Hilbert空间能正交分解来着?


设$M$是闭子空间对吧, 这个家伙是凸的. Hilbert空间中, 闭凸的家伙有最佳逼近. 

最佳逼近是正交元, 所以$H$的任一点, 它有一个最佳逼近, 而差值就是正交元. 最佳逼近就是投影, 差值就是正交部分.


闭凸的家伙有最佳逼近, 因为直线是落在上面的


**Bessel**不等式, 函数和展开的差反应了真实余量.

$Parseval$恒等式, 完备正交基的忠实反映.


$$ \frac{1 }{2\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right|^{2}= \sum_{n = -\infty}^{\infty}\left| c_{n} \right|^{2}   $$ 
这是关于范数展开的Parseval等式.

内积式的Parseval等式.

$f,g$对内积的忠实反应.

已经说明了Fourier级数对$f$的$L^{2}$-逼近.

$\left< f, \bar{g} \right>= \left< \sum c_{k}e^{ink}, d _{-n}e^{ink}\right>$

$$ \left< f,\bar{g} \right>- \left< S_{n},T_{n} \right>= \left< f-S_{n}, \bar{g} \right>+ \left< S_{n}, \bar{g}-T_{n} \right>\le \left\| \bar{g} \right\|\left\| f-S_{n} \right\|+ \left\| S_{n} \right\|\left\| \bar{g}-T_{n} \right\| $$ 
$S_{n}$收敛, 所以有界, 所以上面的收敛.


所以我们把框架搭好, 这些事实其实是非常显而易见的. 

这一大堆恒等式, 无非就是Fourier级数在$L^{2}$收敛下, 如何用Fourier级数取代替真实的内积来表示, 所以$\bar{g}\sim \sum _{k = -\infty}^{\infty}d _{-k}e^{ikx}$, 从泛函的角度来说, 一切都很Trivial. 


Parseval等式对除了$L^{2}$函数外的其他情况, 我们把内积换成对偶配对, 通过分别的范数估计, 得到用Fourier级数代替对偶配对的效果.
$
所以我们需要各自的逼近效果, 有界变差给出Fourier逼近., 得到

$$ \left< f, \lim_{n\to \infty}S_{n} \right>= \left< f,g \right> $$ 
这里不再有内积, 但是仍然是某种配对, 我们用积分显式地写出来

$$ \begin{aligned} \frac{1 }{2\pi  }\int _{-\pi }^{\pi }f\left(x\right)S_{n}\left(g,x\right)\,d x\\&= \sum _{k = -n}^{n}c_{-k}d _{k} \end{aligned} $$ 
我们还是执行了一个类似于下面的操作

$$ 
\left< f, d _{k} e^{ikx} \right>= d _{k}  
$$ 

$$ 
\left< f, \overline{S_{n}} \right>= \left< f, \overline{\sum  d _{k}e^{ikx}} \right>=d _{k}\left< f, \overline{e^{ikx}} \right>= \sum  d _{k} c_{-k}
$$

局部有界变差, 则收敛. 有界变差, 单调和, 间断点可列, 几乎处处收敛.
于是

 {$}

有界变差 $\left< f, S_{n} \right>\to \left< f,g \right>$

等式右侧的级数不一定收敛. 但是我们确实通过控制收敛定理证明了极限相当(包含控制收敛定理的趋于无穷的情况).


对函数逐项积分, 得到


$$ \begin{aligned} \begin{aligned} \int _{0}^{t}f\left(\tau \right)\,d \tau &= \sum _{n = -\infty}^{\infty}\int _{0}^{t}c_{n}e^{inx}\,d \tau\\&=c_0t +  \sum  \left[ \frac{c_{n}e^{inx} }{in } \right]_{0}^{t}\\&= c_0t+ \sum  _{n \neq 0} \frac{c_{n}e^{inx} }{ in}- \sum _{n \neq 0} \frac{c_{n} }{in }\\&= c_0t+  i\sum _{n  \neq 0}\frac{c_{n} }{n }-  i  \sum _{n  \neq 0} \frac{c_{n}e^{inx} }{n } \end{aligned}\end{aligned} $$ 
并且右端的级数一致收敛.所

意思就是, 只要你是$L^{1}$的, 不管你Fourier级数收敛不收敛, 我积分增加正则性, 他就必须得收敛, 而且非常厉害, 一定是一致收敛, 只要能积分, 必须收敛.

这里就用到那个$L$和有界变差配对的形式的Parseval恒等式.

我们就把积分理解成配对, 和一个比较trivial的函数配对. 反正上面说明了 有界变差, 性质就够好, 就不用管你$f$到底能不能Fourier收敛, 反正积分是可以的, 配对可以补偿你本身的奇异性质.

我们用一个$g =  \chi _{\left(0,t\right)}$
这么一个家伙, 那么 Fourier系数算一算, $d _{n}= \frac{1 }{2\pi  }\int _{0}^{t}e^{-inx}\,d x= \begin{cases} \frac{1 }{2\pi  }\frac{i }{n }\left(e^{- i  nt }-1\right)\\\frac{1 }{2\pi  }t \end{cases}$

然后你Parseval 恒等式, 不用管$f$的Fourier级数到底收不收敛, 我们要的 就是配对后的那个家伙, 一定是相等的.

然后引入了一个$\psi$ , 不知道干嘛

我们还想证明右侧是一致收敛的.


现在右边这个级数和, 我们把它造成是Fourier级数, 然后

然后把Parseval恒等式得到的结构, 变化出另一个Fourier级数的表达式, 这个表达式是真正Fourier级数收敛于原函数的, 所以我们就看新造的这个"原函数"到底有没有一致收敛的Fourier级数.

Fourier级数的一致收敛性有一些已知的判据, 比如说$\psi$, 也就是说新造的原函数是绝对连续的.

$c_{k}\left(\psi ^{\prime} \right)= c_{k}$

$$ c_{k}\left(\psi \right)= \frac{c_{k} }{ik } $$ 



