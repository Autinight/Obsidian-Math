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