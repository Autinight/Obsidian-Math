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
$$ \begin{aligned} LHS & \le  \left\| x- \sum _{i = 1}^{n}\left(x,e_{i}\right)e_{i} \right\|^{2}+ \left\| \sum _{\alpha \in A}\left(x,e_{\alpha }\right)e_{\alpha } -\sum _{i = 1}^{n}\left(x,e_{i}\right)e_{i}\right\| \\&\le \end{aligned}$$ 
