### 09:09



$C_0^{m}\left(\Omega \right)$, $m$次连续可微, 在$\partial \Omega$的某个邻域为零


$$ \sum _{\left| \alpha  \right|< m }\left\| D^{\alpha } u\right\|_{L^{2}}^{2}\le C\sum _{\left| \alpha  \right| = m} \left\| D^{\alpha } u\right\|_{L^{2}}^{2}$$ 
吧$\Omega$放在立方体内, 然后用分部积分, 得到
$$ u\left(x\right)= \int _{0}^{x_1}\frac{\partial u}{\partial t}\left(t,x_2,\cdots ,x_{n}\right) \,d t$$ 

$$ \left\| u \right\| _{L^{2}}\le a \left\| Du \right\|^{2} $$ 

$$ \left\| x \right\|^{2}= \left\| y+ z \right\|^{2}= \left\| y \right\|^{2}+ \left\| z \right\|^{2} $$ 


Take a span of $M$, $x_{n}\to x$, for each $y\in M^{\perp}$, $\left(x,y\right)= 0$.

完备正交基, 存在性.

$S$是正交集,
$\mathscr{K}$ , 每个全序子集有一个上界, 则有极大元.

Fourier系数, 就是Hilbert space在一组基下的系数

**Schauder基有一个可数的关键属性**



$$ Bessel $$ 
不等式

$$ \sum _{\alpha \in A}\left| \left(x,e_{\alpha }\right) \right| ^{2} $$ 
相当于是$L^{2}$-范数平方. 正交规范集,
对于任意有限自己$A$


$$ \begin{aligned} 0&\le \left\| x- \sum _{i = 1}^{n}\left(x,e_{i}\right)e_{i} \right\|^{2}\\&= \left(x-\sum _{i= 1}^{n}\left(x,e_{i}\right)e_{i}, x-\sum _{j= 1}^{n}\left(x,e_{j}\right)e_{j}\right)\\&= \left\| x \right\|^{2}- \sum _{i = 1}^{n}\left| \left(x,e_{i}\right) \right|^{2}    \end{aligned} $$  
现在的问题是怎么把任意变为可数, 再变为, 有限.
我们来做截断. 


$$ \sum _{\alpha \in A}\left| \left(x,e_{\alpha }\right) \right|^{2}  $$ 

由于每个有限和都是有限的, 所有大于
$$ \frac{1 }{n } $$ 
的
$\left| \left(x,e_{\alpha }\right) \right|$一定是有限多个的. 所有上面的和是一个可数和,所以可以把$\sum _{\alpha \in A}$编排成可数和, 从而用有限个逼近, 去极限得到
$$ \sum _{i = 1}^{n}\left| \left(x,e_{i}\right) \right|^{2}  $$ 
居然必须是可数的, 我倒是没想到.
我们利用Besl不等式, 说明了有限和的范数上界, 然后

**惊人地发现, Hilbert空间中的基元素表示一定是可数的**

我们是通过做可数个截断发现的.

> [!corollary] 推论 1.6.24
> 假设 $\mathscr{X}$ 是 Hilbert 空间, 且 $\{e_\alpha\mid\alpha\in A\}$ 是 $\mathscr{X}$ 中的正交规范集. 那么对 $\forall x\in\mathscr{X}$, 有
> $$\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\in\mathscr{X},$$
> 且
> $$\|x-\sum_{\alpha\in A}(x,e_\alpha)e_\alpha\|^2=\|x\|^2-\sum_{\alpha\in A}|(x,e_\alpha)|^2.\tag{1.6.18}$$

我们已经证明了

Besel不等式, 所以说怎么吧不等式变成


对于有限多个, 我们是有
$$ \left\| x-\sum _{ i = 1}^{n}\left(x, e_{i}\right) e_{i}\right\|^{2}= \left\| x \right\|^{2}-\sum _{i = 1}^{n}\left| \left(x, e_{i}\right) \right| ^{2} $$ 
我们不是说$x$是被可数个表示的吗, 存在


我们只是看到了$A$是一个可数集, 所以
$$ \begin{aligned} LHS & \le  \left\| x- \sum _{i = 1}^{n}\left(x,e_{i}\right)e_{i} \right\|^{2}+ \left\| \sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } -\sum _{i = 1}^{n}\left(x,e_{i}\right)e_{i}\right\| \\&=  \left\| x \right\|^{2}- \sum _{i = 1}^{n}\left| \left(x,e_{\alpha }\right) \right|^{2}+ \cdots   \end{aligned}$$ 
只需要证明
$$ \lim_{n\to \infty}\left\| \sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } -\sum _{i= 1}^{n}\left(x,e_{i}\right)e_{i}\right\| $$ 

可数个是合理的.
为什么需要说明$x_{m}$是基本列? 说明了基本列.


$S$是封闭的, $S$是完备的, Parseval恒等式.

什么是封闭性?

为什么完备能导出Parseval.

完备是指
若
$$ \left\| x-\sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } \right\| ^{2}= 0$$ 
则
$$ x= \sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } $$ 
如果是正交规范 的, 则$\sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha }$也是
是一个基, 也就是说内积空间中的任意元都可以表示.

Bessel不等式是说如果你有表示,那么有不等式

Hilbert空间中的正交规范集,则 你的内积也是属于$\mathfrak{X}$的, 因为
$$ \sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } = \sum _{i = 1}^{\infty}\left(x,e_{\alpha }\right)e_{\alpha }$$ 
被定义为有限维组合的上确界.
因为是可数的, 所以$\sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha }$
可以看成是可数点列极限.
于是,
验证Cauchy条件, 然后发现收敛. 这是第一个结论


$$ \frac{1 }{\sqrt{2\pi } }e^{\int } $$ 
是一组基, 或者
$$ \frac{1 }{2\pi  }e^{2\pi  i n t} $$ 

复圆盘上, $L^{2}$-可积的解析函数空间, 有一组基$\varphi _{n}\left(z\right)= \sqrt{\frac{n }{\pi  }}z^{n-1}$, 就是多项式函数展开, 然后配一个系数.
可以计算Fourier系数.

内积空间中线性无关的一列, 可以正交化.
$$ y_{n}= x_{n}-\sum _{k = 1}^{n-1}\left(x_{n},e_{k}\right)e_{k} $$ 


$$ y_{n} $$
与$e_1,\cdots ,e_{n-1}$ 正交.

内积空间, 线性同构, 保内积
$$ \left(Tx,Ty\right)= \left(x,y\right) $$ 

可分的Hilbert space与$\ell ^{2}$的一个空间或一个有限子空间同构.

可分的, 找到线性无关的元素, 使得$\operatorname{span}\left\{ y_{n} \right\}$在$H$中稠密. 正交化, 有限维的span是一样 .



设$H$是Hilbert空间, $C$是闭的凸子集, 则

存在唯一的$x_0\in C$, 使得
$x_0$是最佳逼近
$$ \left\| y-x_0 \right\|= \inf _{x\in C}\left\| y-x \right\| $$ 

为什么存在, 


$$ m= \inf _{x\in C}\left\| y-x \right\| $$ 
于是你找一列$\left\{ x_{n} \right\}\in C$, 使得
$$ \left\| y-x_{m} \right\|\to m $$ 

我们来考虑$x_{n}$是不是Cauchy列, 计算
$$ \begin{aligned} \begin{aligned} \left\| x_{m}-x_{n} \right\| &= \left\| \left(y-x_{m}\right)-\left(y-x_{n}\right) \right\|^{2}\\&=-\left\| \left(y-x_{m}\right)+ \left(y-x_{n}\right) \right\|+ 2\left(\left\| y-x_{m} \right\|^{2}+ \left\| y-x_{n} \right\|^{2}\right)\\&= -4\left\| y-\frac{x_{m}+ x_{n} }{2 } \right\|+ 2\left(\to 2m\right) \\&\le -4m^{2}+ 4m^{2}\to 0\end{aligned} \end{aligned}$$ 

凸集,
$$ \left\| y-\frac{x_{m}+ x_{n} }{2 } \right\|\ge m $$ 
于是是Cauchy列, 进而由完备性可知收敛.
Hilbert性质用与平行四边形公式.

存在$x_{n}\to x_0$. $x_0\in C$, 由于是闭集.

所以凸性在于平行四边形公式的时候, 另一条对角线可控.

闭性在于我们找的逼近点是收敛点,它得在$C$limm .

唯一性就

$x_0$是最佳逼近, 当且仅当
$$ R\left(y-x_0, x_0-x\right)\ge 0,\forall x\in C $$ 

展开复Hilbert空间的一个和式, 就是
$$ \left\| a \right\|^{2}+ 2\operatorname{Re}\left(a,b\right)+ \left\| b \right\|^{2} $$ 
最佳逼近, 考虑和最佳逼近的距离

用凸集构建一个连线方向的方程, 在$x$趋于$x_0$的过程中, 我们有
$$ 2t\operatorname{Re}\left(y-x_0,x-x_0\right)\le t^{2}\left\| \times-x_0 \right\|^{2} $$ 这块比较重要. 
所以
$$ \operatorname{Re}\left(y-x_0,x-x_0\right)\le 0 $$ 

$$ \operatorname{Re}\left(y-x_0, x_0-x\right)\ge 0 $$ 

$y$和$x_0$的距离, $x$和$x_0$的距离是小于等于零的.. $y$和$x$是两个方向, 最佳逼近点o
用点和圆盘的模型, $x_0$作为最佳逼近点, 所在的距离水平面, 将$C$和$y$切分.

反过来.
我们把$\left\| y-x_0 \right\|^{2}$拆成两个家伙和$x_0$的距离的差, 然后展开, 二次项剩下$\left\| x_0-x \right\|^{2}$, 交叉项就是$\operatorname{Re}$, 所以这里的$\operatorname{Re}$就是内积和展开式的交叉项.

$x_0$是$y_0$的最佳逼近, 当且仅当

最佳逼近, $y$是$x$在$M$上的最佳逼近, 当且仅当$x-y\perp M$.