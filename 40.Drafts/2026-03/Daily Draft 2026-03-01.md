### 09:50


with 

 $$ \left| u_{x_0,r}-\hat{u}\left(x_0\right) \right|\le c\left(n,\alpha \right)Mr^{\alpha }  $$

固定端点, 对于固定尺度, 二进步长之间的误差受控.


对于固定点, 不同尺度的平方平均受控

对于固定尺度, 二进缩进的平均是Cauchy列, 从而收敛

固定端点, 不步长的平方误差只受尺度控制, 任意尺度在二进极限下都趋于同一个极限.

不同尺度, 相同步长的平方误差仅仅保留

 $$ \left(2^{-i}R\right)^{2\alpha }+ R^{-n}\overline{R}^{n}\left(2^{-i}\overline{R}\right)^{2\alpha }\sim 2^{-2\alpha i} $$ 

量纲抵消, 剩下$r_1^{2\alpha }+ r_2^{2\alpha }$来体现步长. 二次在二进步长极限下, 二者极限相同.

对后序极限求和, 得到
 $$ \left| u_{x_0,r_1}-\hat{u}\left(x_0\right) \right|^{2}\le c\left(n\right)M^{2}r_1^{-n} \left(r_1^{n+ 2\alpha }+ 0\right)= c\left(n\right)M^{2}r_1^{2\alpha }  $$ 

 $$ \left| u_{x_0,r}-\hat{u}\left(x_0\right) \right|\le c\left(n,\alpha \right)Mr^{\alpha }  $$

 $\left\{ u_{x,r} \right\}$ converges to $u$ in $L^{1}\left(\Omega \right)$, converges uniformly. $u= \hat{u}$ a.e.

 $\hat{u}$是固定点下极限步长的平均结果. $u_{x,r}$ converges unifromly to $\hat{u}$ and to $u$. $x\mapsto u_{x,r}$ is continuous for $r> 0$, $u$ continuous,

  $$ \left| u\left(x\right) \right|\le CMR^{\alpha }+ \left| u_{x,R} \right|   $$

 $$ \sup _{\Omega ^{\prime} }\left| u \right|\le c\left\{ MR_{0}^{\alpha }+ \left\| u \right\|_{L^{2}\left(\Omega \right)} \right\}  $$ 

 第一层：固定比例单步衰减 ⇒ 极限存在
第二层：若有额外对称结构 ⇒ 全尺度 Hölder

证明是模块化的, 诚然, 可以直接用函数极限的Cauchy形式给出极限, 但是这种离散化的程序是某种具有可推广性的模块化证明结构.

通过步长与极限的收敛速度关系 
 $$ \left| u_{x_0,r}-\hat{u}\left(x_0\right) \right|\le c\left(n,\alpha \right)Mr^{\alpha }  $$

和LDT导出的步长极限就是$u$的结果, 导出$u$受平均和收敛速度的控制

 $$ \left| u\left(x\right) \right|\le CMR^{\alpha }+ \left| u_{x,R} \right|   $$ 
 
$u$ is Holder-continuous. Let $x,y\in \Omega ^{\prime}$ 

Let $x,y\in \Omega ^{\prime}$, with $\operatorname{Re}q\left| x-y \right|< \frac{R_0 }{2 }$, 接下来, 通过这种函数值受收敛速度和平均的控制, 

$R< R_0$, $\left| u_{x,R} \right|$是平均, 把平均释放成固定的$\frac{1 }{\left| B_{R}\left(x\right) \right|  }\left\| u \right\|_{L^{2}\left(\Omega \right)}$, 半径的下届保证了, 平均可以通过配合一个常数释放为全局累积.


之后呢, 


 $$ \left| u\left(x\right)-u\left(y\right) \right|\le \left| u\left(x\right)-u_{x,2R} \right|+ \left| u\left(y\right)-u_{y,2R} \right|+ \left| u_{x,2R}-u_{y,2R} \right|     $$




  $$ \left| u_{x,2R}-u_{y,2R} \right|\le \frac{2 }{\left| B_{R}\left(x\right) \right|\left(\int _{B_{2R}\left(x\right)}\right)  }  $$  

 $$ \left| x-y \right|= R  $$ 

 $$ \left| u_{x,2R}-u_{y,2R} \right|\le   $$


 $$ B_{2R}\left(x\right)\cap B_{2R}\left(y\right) $$

 $$ \left| z-y \right|\le \left| z-x \right|+ \left| x-y \right|\le R+ R = 2R    $$

 $$ \left| u\left(x\right)-u\left(y\right) \right|\le c\left(n,\alpha \right)M\left| x-y \right|^{\alpha } $$


 $$ \left| x-y \right|> \frac{R_0 }{2 }  $$

 $$ \left| u\left(x\right)-u\left(y\right) \right|\le 2\sup _{\Omega ^{\prime} }\left| u \right| $$


误差, 平均, 平均之间的误差, 平均之间的误差, 通过平均积分控制, 平均积分. 平均积分就是题目给定条件.

如何通过均方误差控制给出逐点误差控制.

控制固定点的不同尺度的差的平方

通过对中介点积分, 把差的平方用两端均方误差控制

两段均方误差就是题目给的条件, 得到不同尺度下的对称估计

先不用对称性, 通过单边的二进估计, 得到特定尺度下, 二进极限的存在性

利用对称性条件, 得到极限独立于尺度选择的唯一性.

带入回对称性估计条件, 取一边的极限, 得到收敛速度的控制

LDT表明, 二进极限就是$u$本身.

于是得到平均收敛到函数的收敛速度控制.

换言之, 就是函数收平均和收敛速度的同时控制.

把半径扩大, 直到让紧集顶到边界, 把平均释放为整体积分, 得到$\sup _{\Omega ^{\prime} }\left| u \right|$的估计.

把函数差用两个平均误差和平均之间的差控制

平均误差直接受收敛速度控制.

当两个点比较近的时候, 用稍大于距离平均误差控制, 这样通过对相交的部分做积分, 可以把平均值之间的差值用平均误差控制, 这时候最大的球落在区域上, 因此控制的范围有一个半径的上界.

对于半径比较大的情况, 就单纯地利用上确界的缩放即可, 控制尺度爆炸的$\left| x-y \right|^{\alpha }$只需要被我们形式地拿出来

“THEOREM 3.1” ([Han和Lin, 2000, p. 48](zotero://select/library/items/WMGIV6YG)) ([pdf](zotero://open-pdf/library/items/2DCN8JJA?page=59))


Poincare不等式, 需要这个东西来得到如果一阶能量在平方平均的意义下是被$r^{\alpha -1}$给控制的.

\那么上面的结论仍然成立, 


如果$u\in H^{1}\left(\Omega \right)$满足

 $$ \int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\le Mr^{\mu }$$


 $$ u\in H_{loc}^{1}\left(\Omega \right)$$

  $$ \int _{B_{r}\left(x\right)}\left|Du \right|^{2}\le M^{2}r^{n-2+ 2\alpha }  $$

Poincare inequality 

 $$ \int _{B_{r}\left(x\right)}\left| u-u_{x,r} \right|^{2}\le c\left(n\right)r^{2}\int _{B_{r}\left(x\right)}\left| Du \right|^{2}\le c\left(n\right)M^{2}r^{n+ 2\alpha }   $$


  $$ u\in H^{1}\left(\Omega \right) $$

 $$ \int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\le Mr^{\mu }  $$ 
 for some $\mu \in \left[ 0,n \right)$. THen for any $\Omega ^{\prime} \subset \subset \Omega$ ther holds for any $B_{r}\left(x_0\right)\subseteq \Omega $ with $x_0\in \Omega ^{\prime}$.

 $$ \int _{B_{r}\left(x_0\right)}\left| u \right|^{2}\le c\left(n,\lambda ,\mu ,\Omega ,\Omega ^{\prime} \right)\left(M+ \int _{\Omega }u^{2}\right)r^{\lambda }  $$    

$\lambda = \mu + 2$

这个估计有点厉害.

Poincare's 不等式

 $$ \left(u\right)_{U}=  \frac{1 }{\left| U \right|  }\int U\,d y $$


$U$ boudned , connected, ope. $C^{1}$ boundary . $1\le p\le \infty$, $C= C\left(n,p,U\right)$ such that 

 $$ \left\| u-\left(u\right)_{p} \right\|_{L^{p}\left(U\right)}\le C\left\| Du \right\|_{L^{p}\left(U\right)} $$

for each $u\in W^{1,p}\left(U\right)$.


argue by contradiction

 $$ \left\| u_{k}-\left(u_{k}\right)_{U} \right\|_{L^{p}\left(U\right)}> k\left\| Du_{k} \right\|_{L^{p}\left(U\right)} $$ 



renormalize by defining

 $$ v_{k}:= \frac{u_{k}-\left(u_{k}\right)_{U} }{\left\| u_{k}-\left(u_{k}\right)_{U} \right\|_{L^{p}} } $$


$\left(v_{k}\right)_{U}= 0$, $\left\| v_{k} \right\|_{L^{p}\left(U\right)}= 1$



 $$ \left\| Dv_{k} \right\|_{L^{p}\left(U\right)}= \frac{Du_{k} }{\left\| u_{k}-\left(u_{k}\right)_{U} \right\|_{L^{p}} }< \frac{1 }{k } $$


Rellich -ondrachov THeorem

造出了有界lx


implies that for each $i$


 $$ \int _{U}\varphi _{x_{i}}\,d x= -\lim_{k_{j}\to \infty}\int _{U}u_{k_{j},x_{i}}\varphi \,d x $$

  $$ \le \int _{U} \left| Dv_{k_{j}} \right|\left\| \varphi  \right\|_{L^{\infty}}  $$  

 $$ \left\| D_{v_{k}} \right\|\to 0 $$

$v\in W^{1,p}\left(U\right)$


 $$ D_{x_{i}}v $$

$Dv= 0$, $v$ is constant.

$U$ is connected. 

$\left(v\right)_{U}= 0$, $v= 0$, $\left\| v \right\|_{}$

如果不被梯度控制, 那么梯度在某些角度就被函数控制了.


如果梯度被控制了, 

通过反向构造序列, 用序列极限凸显矛盾.

可以构造梯度趋于零的有界序列, 极限归零. 范数在极限的意义下是不稳定的. 所以梯度归零是导出矛盾的关键. 

 $$ \left\| u-\left(u\right)_{x,r} \right\|_{L^{p}\left(B\left(x,r\right)\right)}\le Cr\left\| Du \right\|_{L^{p}\left(B\left(x,r\right)\right)} $$

我们看到在球上是如何被控制的.

均值是如何被处理的.

还是受到梯度的控制. 不过

 $$ \left\| u-\left(u\right)_{x,r} \right\|\le C\left(n,p\right)r\left\| Du \right\|_{L^{p}\left(B\left(x,r\right)\right)} $$
  

suppose $u\in $

We have

 $$ \int _{B_{r}\left(x_0\right)}\left| u-\left(u\right)_{x,r} \right|\le \int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\le Mr^{\mu }   $$

and we need to estimate the 

 $$ \int _{B_{r}\left(x_0\right)}\left(u\right)_{x_0,r} $$


$\lambda = \mu + 2$, 


Poincare inequality

 $$ \int _{B_{r}\left(x_0\right)}\left| u-u_{x_0,r} \right|^{2}\le cr^{2}\int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\,d x   $$ 


  $$ \left\| u-\left(u\right)_{U} \right\|_{L^{p}\left(U\right)}\le C\left\| Du \right\|_{L^{p}\left(U\right)} $$ 


exists $C$, depending only on $n,p$, such that 

 $$ \left\| u-\left(u\right)_{x,r} \right\|_{L^{p}\left(B\left(x,r\right)\right)}\le Cr\left\| Du \right\|_{L^{p}\left(B\left(x,r\right)\right)} $$

 here we have an $r$ since the domain is $B_{r}$.


$U= B^{0}\left(0,1\right)$,


 $$ v\left(y\right)= u\left(x+ ry\right)$$


 $$ Dv\left(y\right)= rDu\left(x+ ry\right) $$


 $$ \int _{B\left(0,1\right)}u\left(x+ ry\right)\,d y= \frac{1 }{r^{n} }\int _{B\left(x,r\right)}u\left(z\right)\,d z $$   

多了一个$r$是参数化导致的$Du$的速度缩放. 相较于固定尺度, 多了一个$r$.


BMO

$u\in W^{1,n}\left(\mathbb{R} ^{n}\right)\cap L^{1}\left(\mathbb{R} ^{n}\right)$. $B\left(x,r\right)$ be any ball.

theorem $2$ with $p= 1$ imples

有界平均震荡.

为什么是有界平均震荡, 因为$Du$是$L^{n}$可积的, 平均积分在$p= n$的时候, $r$可以抵消体积, 从而变成纯粹的积分控制. 

 $$ W^{1,n}\left(\mathbb{R} ^{n}\right)\cap L^{1}\left(\mathbb{R} ^{n}\right)\subseteq \mathrm{BMO}\left(\mathbb{R} ^{n}\right) $$

 with the seminorm 

  $$ \left[ u \right]_{\mathrm{BMO}\left(\mathbb{R} ^{n}\right)} = \sup _{B\left(x,r\right)\subseteq \mathbb{R} ^{n}}\left(\frac{1 }{\left| B\left(x,r\right) \right|  }\int\left| u-\left(u\right)_{x,r} \right|\,d y right)$$  





$c\left(n,\lambda ,\mu ,\Omega ,\Omega ^{\prime} \right)\left(M+ \int _{\Omega }u^{2}\right)r^{\lambda }$


 $$ \int _{B_{r}\left(x_0\right)}\left| u-u_{x_0,r} \right|^{2}\le cr^{2}\int _{B_{r}\left(x_0\right)}\left| Du \right|^{2}\,d x\le c\left(n\right)Mr^{\mu + 2}   $$


 $$ \int _{B_{r}\left(x_0\right)}\left| u-u_{x_0,r} \right|^{2}\le c\left(n\right)Mr^{\lambda }  $$

 $$ \int _{B_{\rho }\left(x_0\right)}u^{2}\le 2 \int _{B_{\rho }\left(x_0\right)}\left| u_{x_0,r} \right|^{2}+ 2\int _{B_{\rho }\left(x_0\right)}\left| u-u_{x_0,r} \right|^{2}   $$   

 $$ c\left(n\right)\rho ^{n}\left| u_{x_0,r} \right|^{2}+ 2\int _{B_{r}\left(x_0\right)}\left| u-u_{x_0,r} \right|^{2}   $$ 

 $$ c\left(n\right)\left(\frac{\rho  }{r }\right)^{n}\int _{B_{r}\left(x_0\right)}u^{2}+ c\left(n\right)2Mr^{\lambda } $$ 


 $$ \left| u_{x_0,r} \right|^{2}\le \frac{c\left(n\right) }{r^{n} }in_{B_{r}\left(x_0\right)}u^{2}  $$ 


 $$ \left| u_{x_0,r} \right|^{2}= \left(\frac{1 }{\left| B_{r}\left(x_0\right) \right|  }\int _{B_{r}\left(x_0\right)}u\left(y\right)\,d y\right)^{2}  $$ 


 $$ \left\| u \right\|_{L^{1}}^{2}  $$ 


 $$ \left\| u \right\|_{L^{1}}\le \left\| 1 \right\|_{L^{2}}\left\| u \right\|_{L^{2}}= C\left\| u \right\|_{L^{2}}    $$ 


 $$ \left| u_{x_0,r} \right|^{2}= \frac{1 }{\left| B_{r}\left(x_0\right) \right|^{2}  }\left\| u \right\|_{L^{1}}^{2}\le  \frac{C }{B_{r}\left(x_0\right) } $$ 


 $$ \left\| 1 \right\|_{L^{2}}= \left| B_{r}\left(x_0\right) \right|^{\frac{1}{2}}  $$ 


 $$ \left| u_{x_0,r} \right|^{2}\le \frac{c\left(n\right) }{r^{n} }\int _{B_{r}\left(x_0\right)}u^{2}  $$ 



 $$ \varphi \left(\rho \right)\le c\left(n\right)\left(\left(\frac{\rho  }{r }\right)^{n\varphi \left(r\right)}+ Mr^{la}\right) $$
 

 $$ \int _{B_{\rho }\left(x_0\right)}u^{2}\le c\left(\left(\frac{\rho  }{r }\right)^{\lambda }\int _{B_{r\left(x_0\right)}}u^{2}+ M\rho ^{\lambda }\right) $$ 
 




dmintdi

$r= R_0$. 
