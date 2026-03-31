### 08:16

 $$ \begin{cases} u_{tt}= \Delta u\\u\left(x,0\right)= f\left(x\right)\\u_{t}\left(x,0\right)= g\left(x\right) \end{cases}  $$ 


 $$ \begin{cases} u_{tt}= u_{\times }\\u\left(x,0\right)= f\left(x\right) \end{cases}  $$ 

  $$ f\left(0\right)= f\left(\pi \right)= 0 $$

$u\left(x,t\right)= \varphi \left(x\right)\psi \left(t\right)$ 

 $$ \varphi \left(x\right)\psi ^{\prime \prime} \left(t\right)= \varphi ^{\prime \prime} \left(x\right)\psi \left(t\right) $$

 $$ \frac{\varphi ^{\prime \prime}  }{\varphi  }= \frac{\psi ^{\prime \prime}  }{\psi  } $$

 $$ \varphi \left(0\right)= \varphi \left(\pi \right)= 0 $$

 $$ \frac{\varphi ^{\prime \prime}  }{\varphi  }= \alpha  $$    

 $$ \varphi ^{\prime \prime} -\alpha \varphi = 0 $$

 $$ r= \pm \sqrt{\alpha} $$

 $$ \varphi \left(x\right)= c_1e^{\sqrt{\alpha }x}+ c_2e^{-\sqrt{\alpha }x} $$

$\alpha = 0$, $\alpha < 0$, 

 $$ \varphi  \left(x\right)= C_1\cos \alpha x+ C\sin \alpha x $$ 

 $$ \varphi \left(0\right)= C_1= 0 $$

 $$ \varphi \left(\pi \right)= C_2\sin \alpha \pi = 0 $$

 $$ \alpha \pi = k\pi  $$

 $$ \varphi \left(\pi \right)= C_2\sin k\pi  $$

方程是线性的, 通过假设解是分离变量的, 可以线性叠加出一个满足方程(先不考虑初值)的三角级数的形式解.

方程的解在此时化为三角级数解

 $$ f\left(x\right)= \sum _{m= 1}^{\infty}A_{m}\sin mx $$

中的一系列$A_{m}$是否能找到.

 $$ f\left(x\right)= \frac{f\left(x\right)+ f\left(-x\right) }{2 }+ \frac{f\left(x\right)-f\left(-x\right) }{2 } $$ 

Fourier级数的收敛性 是否收敛, 若收敛,

freeze the leading coefficients compare solutions with harmonic functions. regularity depends on how close solutions are to harmonic functions. need regulartity assumption on the leading coefficients

how to freeze? What we can get by freezing?

$a_{ij}\in L^{\infty}\left(B_1\right)$ is unifomrly ellptic 

 $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\xi _{i} \xi _{j}\le \Lambda \left| \xi  \right|^{2}   $$
$x\in B_1$, $\xi \in \mathbb{R} ^{n}$.

$a_{ij}$ is at least continuous. We assume that $u\in H^{1}\left(B_1\right)$ satisfies 

 $$ \int _{B_1}a_{ij}D_{i}u D_{j}\varphi + cu\varphi = \int _{B_1}f\varphi  $$


$u\in H^{1}\left(B_1\right)$ is a weak solution of 
 $$ \left(a_{ij}u_{i}\right)_{j}+ cu $$  

$a_{ij}\in C^{0}\left(\overline{B_1}\right)$, $c\in L^{n}\left(B_1\right)$, $f\in L^{q}\left(B_1\right)$, $q\in \left(\frac{n }{2 },n\right)$.  Then $u\in C^{\alpha }\left(B_1\right)$, $\alpha = 2-\frac{n }{q }\in \left(0,1\right)$. $1< \frac{n }{q }< 2$. $R_0= R_0\left(\lambda ,\Lambda ,\tau ,\left\| c \right\|_{L^{n}}\right)$ such that for any $x\in B_{\frac{1}{2}}$ and $r\le R_0$, there holds, in a half ball,  with $r\le R_0$, and $R_0$ is a number that exists , a upper bounded of the radius, an estiamte in  the half ball , that meand an interior, there holds

 $$ \int _{B_{r}\left(x\right)}\left| Du \right|^{2}\le Cr^{n-2+ \alpha }\left(\left\| f \right\|^{2}_{L^{q}\left(B_1\right)}+ \left\| u \right\|^{2}_{H^{1}\left(B_1\right)}\right)  $$ 

which is an energy estimated by $\left\| f \right\|^{2}_{L^{q}}$ and $\left\| u \right\|^{2}_{H^{1}\left(B_1\right)}$, with the degree $r^{n-2+ 2\alpha }$,

compare the solution $u$ with harmonic functions and use the perturbation argument.

最常用的是逼近方法, 做Lebesgue


$a_{ij}$ is constant positive definite matric with 

 $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\xi _{i}\xi _{j}\le \Lambda \left| \xi  \right|^{2}   $$ 

 for $0< \lambda \le \Lambda$,

 $u\in H^{1}\left(B_{r}\left(x_0\right)\right)$ is a weak solution of $a_{ij}D_{ij}w= 0$, in $B_{r}\left(x_0\right)$, 

  $$ \int _{B_{\rho }\left(x_0\right)}\left| Dw \right|^{2}\le c\left(\frac{\rho  }{r }\right)^{n}\int _{B_{r}\left(x_0\right)}\left| Dw \right|^{2}   $$ 


 $$ \int _{B_{\rho }\left(x_0\right)}\left| Dw-\left(Dw\right)_{x_0,\rho } \right|^{2}\le c\left(\frac{\rho  }{r }\right)^{n+ 2}\left| Dw-\left(Dw\right)_{x_0,r} \right|^{2}   $$ 

$w$ is a solution of (3.6), so is any one of tis derivativves. Gradient astimates


energy method.

$a_{ij}\in C\left(B_1\right)$, with $\lambda \left| \xi  \right|^{2}\le a_{ij}\left(x\right)\xi _{i}\xi _{j}\le \Lambda \left| \xi  \right|^{2}  $

 $$ \int _{B_1}a_{ij}D_{i}D_{j}\varphi = 0 $$


  integration by parts that th eharmonic functions satisfy the equation for $a_{ij}= \delta _{ij}$.


  $u\in C^{1}\left(B_1\right)$, with 

   $$ \int _{B_1}a_{ij}D_{u}D_{j}\varphi = 0 $$, for $\varphi \in C_{0}^{1}\left(B_1\right)$.


   $$ \eta \in C_{0}^{1}\left(B_1\right)$$, we have

  $$ \int _{B_1}\eta ^{2}\left| Du \right|^{2}\le C\int _{B_1}\left| D\eta  \right|^{2}u^{2} $$   

$\eta \in C_0^{1}\left(B_1\right)$, set $\varphi = \eta ^{2}u$, we have

Hölder inequality, with 

 $$ \lambda \int _{B_1}\eta ^{2}\left| Du \right|^{2}  $$ 

 $$ \int _{B_1}a_{ij}D_{i}u $$

 $$ D_{j}\varphi = 2\eta uD_{j}\eta+ \eta ^{2}D_{j}u  $$  