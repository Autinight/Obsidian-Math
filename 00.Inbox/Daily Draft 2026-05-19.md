### 15:50


F.Riesz是说, $C\left[ a,b \right]$与$BV\left[ a,b \right]$诱导的测度的全体是等距同构, 通过
$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right) $$ 
其中$f\in C\left[ a,b \right]$, $\nu \left(t\right)\in BV\left[ a,b \right]$, $d\nu \left(t\right)$是$\nu \left(t\right)$诱导的符号Radon测度. $\left\| f \right\|= V_{a}^{b}\left(\nu \right)$


对于一个$f\in \left(C\left[ a,b \right]\right)^{*}$, 我们要构造出$\nu \left(t\right)$. 考虑$C\left[ a,b \right]$的完备化$L^{\infty}\left[ a,b \right]$, $L^{\infty}\left[ a,b \right]$上的函数是由 $\chi$拼出来的, 所以我们要定义$\nu \left(t\right)$, 使得等式在$\chi$上一致. 比如说对于$\chi _{s}$, 即$s$及之前取1, 之后取零. 那么
$$f\left(\chi _{s}\right) = \int _{a}^{b}\chi _{s}d \nu \left(t\right)= \mu _{\nu }\left([a,s]\right)= \nu \left(s\right)-\nu \left(a\right)$$ 
我们让$\nu \left(a\right)= 0$, 相差常数倍的有界变差函数诱导出了相同的测度. 那么
$$ f\left(\chi _{s}\right)= \nu \left(s\right) $$ 
但是这里有一个问题, 就是$\chi _{s}$是不连续的, 但是落在连续函数的完备化, 即$L^{\infty}$函数空间上, 因此用HB把$f$保范数地延拓到$F\in L^{\infty}$. 那么
$$ F\left(\chi _{s}\right) = \nu \left(s\right)$$ 
从这个层面看, 虽然$F$的信息是在函数空间上的作用, 但是这些作用都是从一些简单函数生成的, 在某种程度上只是作用在$\left[ a,b \right]$的一个信息, 即某一个函数所描述的信息, 我们研究的问题, 无非就是这个函数是一个什么样的函数.

就是我们需要的构造. 
我们先说明$V_{a}^{b}\left(\nu \right)\le \left\| F \right\|$, 思路就是把变差写成一些$\nu$-函数值, 在通过上面的那层信息传递的讨论, 变成一个泛函的取值.
$$ \sum \left| \nu \left(t_{k}\right)-\nu \left(t_{k-1}\right) \right|= \sum \varepsilon _{k}\left(\nu \left(t_{k}\right)-\nu \left(t_{k-1}\right)\right),\quad \varepsilon _{k}= \operatorname{sgn}\left(\nu \left(t_{k}\right)-\nu \left(t_{k-1}\right)\right)  $$
$$ \begin{aligned} \sum \varepsilon _{k}\left(\nu \left(t_{k}\right)-\nu \left(t_{k-1}\right)\right)&= \sum \varepsilon _{k}\left(F\left(\chi _{t_{k}}\right)-F\left(\chi _{t_{k-1}}\right)\right)\\&= F\left(\sum \varepsilon _{k}\left(\chi _{t_{k}}-\chi _{t_{k-1}}\right)\right) \end{aligned} $$  

而$\sum \varepsilon _{k}\left(\chi _{t_{k}}-\chi _{t_{k-1}}\right)$有范数1, 那么我们就得到这个变差小于等于$\left\| F \right\|$.这是一个方向.

另一个方向是控制$\left\| F \right\|$, 这个反向通常需要一些构造和逼近.我们构造一个函数$\chi _{k}$, 离$\nu$的全变差非常近, 所以我们先取离全变差非常近的一个变差
$$ \sum \left| \nu \left(t_{k}\right)-\nu\left(t_{k_{k-1}}\right) \right| \ge V_{a}^{b}\left(\nu \right) -\varepsilon $$
然后我们就需要
然后我们需要构造一个$x$, $F$的作用是通过简单函数体现的, 我们想办法把$x$写成这个样子, 也就是
$$ x\left(s\right)= \sum _{k}x\left(s\right)\left(\chi_{t_{k}}\left(s\right)-\chi _{t_{k-1}}\left(s\right)\right) $$ 
好像作用不了, 因为$x\left(s\right)$不是常数, 所以取附近的一个点, 定义
$$ y\left(s\right)= \sum _{k}x\left(t_{k}\right)\left(\chi _{t_{k}\left(s\right)}-\chi _{t_{k-1}}\left(s\right)\right) $$ 
那么
$$ F\left(y\right)= \sum _{k}x\left(t_{k}\right)\left(\nu \left(t_{k}\right)-\nu \left(t_{k-1}\right)\right) $$ 
我们是把$\left\| F \right\|$用全变差来控制来着.
$$ \left\| F \right\|\left\| y \right\|\le \left\| F\left(y\right) \right\|\le \sum \left\| x\left(t_{k}\right) \right\|\left| \nu \left(t_{k}\right)-\nu \left(t_{k-1}\right) \right|\le \sum _{k}\left\| x \right\|_{\infty}\left| \nu \left(t_{k}\right)-\nu \left(t_{k-1}\right) \right|   $$ 
对于每个变差都能定义这样的一个$y$, 所以
$$ \left\| F \right\|\le \frac{\left\| x \right\|_{\infty} }{\left\| y \right\| }V_{a}^{b}\left(\nu \right) $$ 

然后我们得说$\left\| y \right\|\to \left\| x \right\|_{\infty}$, 通过$\left\| y-x \right\|_{\infty}\to 0$来说明. 对于每个$s$,均只落在一个区间上, 所以$x\left(s\right)-y\left(s\right)$一定是某一个$x\left(s\right)-x\left(t_{k}\right)$, 就是不知道是哪个$s$哪个$k$, 但是这个不重要, 因为$x$是一致连续的. 所以就得到
$$ \left\| F \right\|\le V_{a}^{b}\left(\nu \right) $$ 

剩下的收尾工作就是说明$f\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right)$了, 那前面的构造
$$ F\left(\chi _{s}\right)= \nu \left(s\right) $$ 
实际上就蕴含了
$$ F\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right) $$ 
了,为$L^{\infty}$可以通过一些$\chi_{s}$逼近过来. 所以把$x$限制在连续函数上, 就得到了
$$ f\left(x\right)= F\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right) $$ 

书上是说$y\to x$, 由于$F$连续, 所以$F\left(y\right)\to F\left(x\right)$, $F\left(y\right)$是R-S和,所以按定义就是$F\left(x\right)$就是R-S积分.


我们找到了$f$到$\nu$的保范数的通过, 反过来, 对于给定的$\nu$, 我们定义
$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right) $$ 
R-S积分的性质自然就是
$$ \left| f\left(x\right) \right|\le \left\| x \right\|_{\infty}V_{a}^{b}\left(\nu \right)  $$ 
即
$$ \left\| f \right\|\le V_{a}^{b}\left(\nu \right) $$ 
自然是一个有界线性泛函.