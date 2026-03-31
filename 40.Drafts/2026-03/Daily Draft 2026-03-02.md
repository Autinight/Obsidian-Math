### 11:07



 $$ \varphi \left(\rho \right)\le A\left[ \left(\frac{\rho  }{r }\right)^{\alpha }+ \varepsilon  \right]\varphi \left(r\right)+ Br^{\beta } $$

 $\rho , r$

two terms,  one is $\varphi \left(r\right)$ with the coefficient $\left(\frac{\rho  }{r }\right)^{\alpha }+ \varepsilon$, $\varepsilon$ is the bouded term, and $\left(\frac{\rho  }{r }\right)^{\alpha }$ is ratio term. with constants $\alpha$, geater than the additional term $Br^{\beta }$.'

把$r^{\beta }$变成$\rho ^{\beta }$, 夹得紧一点. $\alpha$变成$\gamma$, 更小了, 比例的缩放宽一点. 把缩放


$\varphi \left(\rho \right)$控制在$\varphi \left(r\right)$这个界的缩放上, 缩放的比例是$\left(\frac{\rho  }{r }\right)^{\alpha }$. 把$\alpha$缩一个任意小变成$\gamma$, 我们放宽了一点点, 换成是对$\rho$本身的控制. 前提我发还需要一个常数倍的$\varphi \left(r\right)$.

怎么证明呢, 就考虑$\tau \in \left(0,1\right)$. $r< R$, we have 

 $$ \varphi \left(\tau r\right)\le A\tau ^{\alpha }\left[1+ \varepsilon \tau ^{-\alpha } \right]\varphi \left(r\right)+ Br^{\beta } $$

把比例哪里晒了, 写成是比例就好了, 比例是, 选择$\tau < 1$, $2A\tau ^{\alpha }= \tau ^{\gamma }$, $\varepsilon _0 \tau ^{-\alpha }< 1$是干嘛呢, 这样写成

 $$ \varphi \left(\tau r\right)\le \tau ^{\gamma }\varphi \left(r\right)+ Br^{\beta } $$ 

 算了, 把这个证明跳过去, 前面的话

 $$ \int _{B_{\rho }\left(x_0\right)}u^{2}\le c\left(\left(\frac{\rho  }{r }\right)^{\lambda }\int _{B_{r}\left(x_0\right)}u^{2}+ M\rho ^{\lambda }\right) $$

把$\lambda$提出来, 然后被$r$换成是$R_0$, 这个比例就是一个界了,

 $$ \int _{B_{\rho }\left(x_0\right)}u^{2}\le c\rho ^{\lambda }\left(\int _{\Omega }u^{2}+ M\right) $$

体现了局部积分是如何被增长控制的. 

J-N Lemma

$u\in L^{1}\left(\Omega \right)$

$\int _{B_{r}\left(x\right)}\left| u-u_{x,r} \right|\le Mr^{n}$

如果一阶平均误差不超过体积两集的变化, 那么

 $$ \int _{B_{r}\left(x\right)}e^{\frac{p_0 }{M }\left| u-u_{x,r} \right| }\le Cr^{n} $$

那么指数误差不超过体积两集的变化

$p_0,C$ depend on $n$.

$L^{\infty}\subseteq _{+ }BMO$

$u\left(x\right)= \log \left(x\right)$,

$f\in L^{1}\left(Q_0\right)$ is nonnegative and $\alpha > 0 \left| Q_0 \right|^{-1} \int _{Q_0}f$ is a fixed constant. Then there exists a sequence of dyadic cubes $\left\{ Q_{j} \right\}$ in $Q_0$ such that 

 $$ f\left(x\right)\le \alpha  $$

大部分的片上是 有界的, 小部分的片是平均可控的

Hölder Continuity 


$a_{ij}\in L^{\infty}\left(B_1\right)$ is uniformly elliptic in $B_1= B_1\left(0\right)$.

 $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\left(x\right)\xi _{i} \xi _{j}\le \Lambda \left| \xi  \right|^{2}   $$

$a_{ij}$ is continuous. $u\in H^{1}\left(B_1\right)$ with 

 $$ \int _{B_1}a_{ij}D_{i}uD_{j}\varphi + cu\varphi = \int _{B_1}f\varphi$$
 
  
不同尺度的平均的差拆成两项震荡. 积分得到不同尺度的平均的差被控制为

$c\left(n\right)M^{2}r_1^{-n}\left(r_1^{n+ 2\alpha }+ r_2^{n+ 2\alpha }\right)$

在固定端点处, 固定步长比例$R$的二进缩小尺度平均, 构成Cauchy列. 构成收敛级数
.

并非直接使用

这里存在为了证明的可迁移性, 将证明模块化使用的痕迹. 避免直接通过对称性估计 $\left| u_{x_0,r_1}-u_{x_0,r_2} \right|^{2}\le c\left(n\right)M^{2}r_1^{-n}\left\{ r_1^{n+ 2\alpha }+ r_2^{n+ 2\alpha } \right\}\le CM\min \left(r_1,r_2\right)^{\alpha }$得到函数极限的存在Cauchy条件. 而是先采用更弱的条件也能做到的固定尺度的离散化估计$\left| u_{x_0,2^{-\left(i+ 1\right)R}} -u_{x_0,2^{-i}R}\right|$, 然后再用对称估计统一尺度的操作的更为标准的范式.