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
自然是一个有界线性泛函. 这就给出了上面的保范数映射的逆, 所以是一个等距同构.


### $\left(L^{p}\right)^{*}= L^{q}$

$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 
对于每个$f\in \left(L^{p}\right)^{*}$, 存在$y\in L^{q}$, 使得上面成立, 就是我们要得到的结果, 并且$\left\| f \right\|= \left\| y \right\|_{L^{q}}$

由Holder不等式
$$ \left| f\left(x\right) \right|\le \left\| x \right\|_{L^{p}}\left\| y \right\|_{L^{q}}  $$ 
所以
$$ \left\| f \right\|\le \left\| y \right\|_{L^{q}} $$ 

但这是$y$已经构造好了的情况, 难点是如何找到$y$.
这里
$$ y\left(t\right) dt$$
我们希望找到某种类似的导数
$$ dy^{\prime} \left(t\right) $$  
于是我们希望$y$是某个绝对连续函数的导数. 所以要构造某个绝对连续函数$g\left(s\right)$.
通过Lebniz公式, 如果$g$存在, 形式上就应该是
$$ f\left(x_{s}\right) = \int _{a}^{s}y\left(t\right)\,d t= \int _{a}^{s}d g^{\prime}g^{\prime} \left(s\right)= g\left(s\right)-g\left(a\right) $$ 
同样地, 由于相差一个常数给出的$y$是一样的,我们取$g\left(a\right)= 0$, 于是一个可行的$g$应该满足
$$ f\left(x_{s}\right) = g\left(s\right),\quad x_{s}= \chi _{s}$$ 
形式上是唯一确定的, 问题是如何说明$g\left(s\right)$是有界变差的.

所谓绝对连续, 就是只要控制一些无交区间的长度, 就能一致地控制这些开区间对应的震荡

所以取一系列无交区间$\left[ b_{k},a_{k} \right]$, 使得$\sum \left(b_{k}-a_{k}\right)< \delta$, 我们来控制
$$ \begin{aligned} \sum \left| g\left(b_{k}\right) -g\left(a_{k}\right)\right|&= \sum \left| f\left(x_{b_{k}}-x_{a_{k}}\right) \right|\\&=  f\left(\sum \chi _{\left[ a_{k},b_{k} \right]}\right)\\&\le \left\| f \right\|\left\| \sum \chi _{\left[ a_{k},b_{k} \right]} \right\|_{L^{p}}\\&\le \left\| f \right\|\delta ^{\frac{1}{p}} \end{aligned}   $$ 
是可控的, 所以$g$是AC 的. 所以构造是好的.

也就是说, 我们找到了$g$, 它是AC的, 并且满足
$$ f\left(x_{s}\right)= g\left(s\right) $$ 
定义$y= g^{\prime}$, 就有
$$ f\left(x_{k}\right)= \int _{a}^{s}y\left(t\right)\,d t $$ 
但是我们实际上需要的是
$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 
对于任意的$x$, 用一系列简单函数逼近,  所以需要说明对与简单函数成立
$$ f\left(\varphi \right)= \int _{a}^{b}\varphi \left(t\right)y\left(t\right)\,d t $$ 
这个很容易, 然后就是用$\varphi$逼近$x$, $\left\| \varphi _{m}-x \right\|_{L^{p}}\to 0$
由于$f$是连续的$\lim_{m\to \infty}f\left(\varphi _{m}\right)= f\left(x\right)$, 所以真正要说明的是
$$ ? \; f\left(x\right)= \lim_{m\to \infty}\int _{a}^{b}\varphi _{m}\left(t\right)y\left(t\right)\,d y $$
对了, 我们得去一列几乎处处收敛的, 也就是说从依范数收敛中提取出子列收敛.,  

对了 , 虽然说$y= g^{\prime}$, 但是我们还想还没有算过$\left\| y \right\|_{L^{q}}$, 这是一个问题哦, 不过$y$是$L^{1}$的.