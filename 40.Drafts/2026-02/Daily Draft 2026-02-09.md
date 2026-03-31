### 08:31


什么是fundamental solutions? 有什么用?

顾名思义, 或许是解一类方程的一个通用关键组件, 但是如何实现, 为什么呢实现, 依赖怎样的对称性?

seeking a harmonic function depend only on $r= \left| x-a \right|$. $v\left(r\right)= u\left(x\right)$.

 $$ \frac{\partial }{\partial x_{i}}= \frac{\partial r}{\partial x_{i}}\frac{\partial }{\partial r}= \frac{x_{i}-a_{i} }{\left| x-a \right|  }\frac{\partial }{\partial r} $$
  $$ \begin{aligned} \frac{\partial }{\partial x_{i}}\frac{\partial }{\partial x_{i}}&= \frac{\partial }{\partial x_{i}}\left(\frac{x_{i}-a }{\left| x-a \right|  }\right)\frac{\partial }{\partial r}+ \frac{x_{i}-a }{\left| x-a \right|  }\frac{\partial }{\partial x_{i}}\frac{\partial }{\partial r}\\&= \frac{\left| x-a \right|-\left(x_{i}-a_{i}\right)\frac{x_{i}-a }{\left| x-a \right|  }  }{\left| x-a \right|^{2}  }\frac{\partial }{\partial r}+ \frac{\left(x_{i}-a_{i}\right)^{2} }{\left| x-a \right|^{2}  }\frac{\partial }{\partial r}\frac{\partial }{\partial r}\\&=  \end{aligned} $$

 $$ \Delta _{x}= \frac{n\left| x-a \right|-\frac{\left| x-a \right|^{2}  }{\left| x-a \right|  }  }{\left| x-a \right|^{2}  }\frac{\partial }{\partial r}+ \frac{\partial }{\partial r}\frac{\partial }{\partial r}= \frac{n-1 }{r }\frac{\partial }{\partial r}+ \frac{\partial }{\partial r}\frac{\partial }{\partial r} $$

  $$ v^{\prime \prime} + \frac{n-1 }{r }v^{\prime} = 0 $$

$v^{\prime} = p$, $v^{\prime \prime} = r^{\prime}$

 $$ p^{\prime} + \frac{n-1 }{r }p= 0 $$


  $$ \left(e^{\int \frac{n-1 }{r }}p\right)^{\prime} = 0 $$

 $$ p= Ce^{-\int \frac{n-1 }{r }} = Ce^{-\left(n-1\right)\ln \left| r \right| }= C\frac{1 }{r^{n-1} }$$   

 $$ v= \begin{cases} c_1+ c_2\log r,&n = 2\\c_3+ c_4r^{2-n},&n \ge 3 \end{cases}  $$ 

  $$ \int _{\partial B_{r}}\frac{\partial v}{\partial r}\,d S= 1 $$
在边界处均匀的向外膨胀? 