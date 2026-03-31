### 09:04


maximum principle 

 $$ \inf _{\partial B_1}vpih\le u\le \sup _{\partial B_1}\varphi $$


$x_0\in \partial B_1$, there holds


 $$ \sup _{x\in B_1}\frac{\left| u\left(x\right)-u\left(x_0\right) \right|  }{\left| x-x_0 \right|^{\frac{\alpha  }{2 }}  }\le 2^{\frac{\alpha  }{2 }}\sup _{x\in \partial B_1}\frac{\left| \varphi \left(x\right)-\varphi \left(x_0\right) \right|  }{ \left| x-x_0 \right|^{\alpha } } $$ 


For $x,y\in B_1$, $d _{x}= \operatorname{dist}{\left( \left(x,\partial B_1\right) \right)}$, $\,d _{y}= \operatorname{dist}{\left( y,\partial B_1 \right)}$. $d _{y}\le  d _{x}$. $x_0,y_0\in \partial B_1$, $\left| x-x_0 \right|= d _{x}$, $\left| y-y_0 \right|= d _{y}$. in the boundary. $\left| x-y \right|\le \frac{d _{x} }{2 }$. THen $y\in \overline{B}_{ \frac{d _{x} }{2 }}\left(x\right)\subseteq B_{ d _{x}\left(x\right)}\subseteq B_1$. use interior estimate of $u-u\left(x_0\right)$, get

 $$ d _{x}^{\alpha /2} \frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\frac{\alpha  }{2 }}  }\le C \sup _{\partial B_1}\left| u-u\left(x_0\right) \right|= C\left| u-u\left(x_0\right) \right|_{L^{\infty}\left(B_{ d _{x}\left(x\right)}\left(x\right)\right)}\le C d _{x}^{\alpha /2}\left\| \varphi  \right\|_{C^{\alpha }\left(\partial B_1\right)}   $$ 

why? $\left| u-u\left(x_0\right) \right|\le $

 $$ v\left(y\right)= u\left(\right) $$

 $$ \left| u\left(rx\right)-u\left(ry\right) \right|\le cr^{\alpha }\left| x-y \right|^{\alpha }\sup _{\partial B_{r}}\left| u \right|    $$  


$v\left(z\right)= u\left(x+ rz\right)$

 $$ u\left(x\right)= v\left(0\right),\quad u\left(y\right)=v\left(\frac{y-x }{r }\right)  $$

 $$ \left| u\left(x\right)-u\left(y\right) \right|= \left| v\left(\frac{y-x }{r }\right)-v\left(0\right) \right|\le c\left| x-y \right|^{\frac{\alpha 
  }{2 }}r^{-\frac{\alpha  }{2 }}\sup _{\partial B_{r}}\left| u-u\left(x_0\right) \right|     $$  

当圈不一样大的,时候, 给$\left| x-y \right|$修正一个距离系数. 总让被控制项的移动范围在, 保证右侧的距离系数的尺度不变.

 $$ d _{x}^{\frac{\alpha  }{2 }}\frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\frac{\alpha  }{2 }}  }\le C\left| u-u\left(x_0\right) \right|_{L^{\infty}\left(B_{ d _{x}}\left(x\right)\right)}\le C d _{x}^{\frac{\alpha  }{2 }}  $$ 

 $$ \left| u-u\left(x_0\right) \right|\le   $$


 $$ \left| u-u\left(x_0\right) \right|_{L^{\infty}}\left(B_{d _{x}\left(x\right)}\right)\le \sup   $$  

follows from 1.7, 如果内holder范数被边界控制, 那么,  这还不是holder范数, 如果就是关于$x_0$的, 但

哦, 原先是关于所有$x,y$的, 但是如果能让$y$固定在边界, 固定$x,y$, 找准最短距离, 画一个相切圆. 就能用边界的点估计了, 我们用harnack控制, 把控制挪给边界的点, 再用边界的范数控制估计, harnack放缩的尺度就是半球, 是随着, claim变化的放缩. 因此这个harnack放缩尺度是按照claim取的. 


 $$ \left| u\left(x\right)-u\left(y\right) \right|\le C\left| x-y \right|^{\frac{\alpha  }{2 }}\left\| \varphi  \right\|_{C^{\alpha }\left(\partial B_1\right)}   $$


  $$ \left| u\left(x\right)-u\left(y\right) \right|oe\left| u\left(x\right)-u\left(x_0\right) \right|+ \left| u\left(x_0\right)-u\left(y_0\right) \right|+ \left| u\left(y_0\right)-u\left(y\right) \right|     $$  

想法是啥呢, 为啥取这个$d _{y}$呢, 

assume first that $\left| x-y \right|\le \frac{d _{x} }{2 }$, 此时$y$就可以用这个harnack在半球内的估计. 但是如果落在半球外了, 怎么办. 那么久估计$\left| x_0-y_0 \right|$, $\left| x-x_0 \right|$是那个最短边界点, 这两个边界点 就是holder范数导出的. 就是我们全都用边界点来做了, 要么是1.7, 要么就是纯边界项. 哦, 这里就看出来了, 

 $$ \left| x_0-y_0 \right|\le  d _{x}+ \left| x-y \right|+  d _{y}  $$

半球内的点, 我们处理$\left| x-y \right|$非常小的,情况, 此时不能比较$\left| x_0-y_0 \right|$和$\left| x-y \right|$来达到目的. 这个好像是更不平凡的, 你需要用到调和性质, harnack, 利用函数值的刚性.

对于$\left| x-y \right|$比较大的,情况, 就非常无所谓了, 我们给的估计相当宽裕, 不涉及到局部的弯弯绕绕, 就是控制一个整体的

证明关于$\left| x-y \right|$大小的讨论, 分别管理局部的点正则性和整体的控制. 具体$\left| x-y \right|$我们卡在什么一个范围其实无所谓, 没有必要硬是 $\frac{d _{x} }{2 }$, 只要大于某个倍数就行了, 前面的harnack也一样, 也不一定非要是半球, 只要是内部有一些控制就行了. 它们两个其实选取的都比较随意. 本质区分就是一个穷尽了内部的极小, 另一个只要控制一个不太小就能生效. 至此, 如何通过1.7说明命题已经明了.

接下来来看, 如何说明1.7 内部减内部, 用边界减边界控制. 比较困难

寻求一个更容易的, 内部减边界上一点, 边界减边界上用一点, 这样就创造了共同语言.

利用这个更容易的家伙, 完成内部减内部到边界减边界.

内部减内部, 在贴着边界最紧的那一点上, 在这个局部的小球上, 用harnack, 把压力传到边界的取值上 卧槽, 不是harrnack, 是interior gradient estimate,.

接下来证明1.7, 怎么证呢, 考虑

asumme $B_1= B_1\left(1,0,\cdots ,0\right)$, $x_0= 0$, and $\varphi \left(0\right)= 0$. $B_1$ is a ball. we take the ball as $B_1\left(1,0,\cdots ,0\right)$, $x_0= 0$, $\varphi \left(0\right)= 0$? to set this by
$\varphi \left(0\right)= 0$. 


Define $K= \sup _{x\in \partial B_1}\left| \varphi \left(x\right) \right|/ \left| x \right|^{\alpha }$, what is that , why we use a $K$? $\left| x \right|^{2}= 2x_1$ for $x\in \partial B_1$. $x\in \partial B_1$, ther eholds

$x\in \partial B_1$, $\partial B_1=?$. 


 $$ \left| x-\left(1,0,\cdots ,0\right) \right|= 1  $$ 


 $$ \left(x_1-1\right)^{2}+ \cdots + x_{n}^{2}= 1 $$

 $$ \left| x \right|^{2}= x_1^{2}+ \cdots + x_{n}^{2}  $$  


 $$ \left| x-\left(1,0,\cdots ,0\right) \right|^{2}= \left| x \right|^{2}- 2x_1+ 1= 1\implies \left| x \right|^{2}= 2x_1    $$ 

 $$ \varphi \left(x\right)\le K\left| x \right|^{\alpha }\le 2^{\frac{\alpha  }{2 }}Kx_1^{\frac{\alpha  }{2 }}  $$

define $v\left(x\right)= 2^{\frac{\alpha  }{2 }}Kx_1^{\frac{\alpha  }{2 }}$in $B_1$. Then we have 

 $$ \Delta v\left(x\right)= 2^{\frac{\alpha  }{2 }}K\cdot \frac{\alpha  }{2 }\left(\frac{\alpha  }{2 }-1\right)x_1^{\frac{\alpha  }{2 }-2}< 0 $$

   $$ u\left(x\right)\le v\left(x\right) $$  

 $$ \Delta v< 0 $$

 $$ u\left(x\right)\le v\left(x\right)\le 2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }}$$

 $$ \left| u \right|\le 2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }}   $$   

 这块是干嘛呢

把要看的边界点归中, 把中心点放上面,

然后呢, 把要估计的项写作$K$, 做了标准化之后, 模长非常好算, 变成$x_1$,


 $$ \left| x \right|^{2} -\left| x-\left(1,0,0,\cdots ,0\right) \right|^{2}= 2x_1+ 1   $$ 

把距离看成化为模长.


 $$ \varphi \left(x\right)\le K\left| x \right|^{\alpha }  $$ 



 $$ \varphi \left(x\right)\le K\left| x \right|^{\alpha }\le 2^{\frac{\alpha  }{2 }}x_1^{\frac{\alpha  }{2 }}$$

所以$\frac{\alpha  }{2 }$怎么来的, 来自己把模长变成坐标, 把平方变成一次坐标.


$$ v\left(x\right)= 2^{\frac{\alpha  }{2 }}Kx_1^{\frac{\alpha _2 }{2 }} $$ 


$$ \Delta v\left(x\right)= 2^{\frac{\alpha  }{2 }}K\cdot \frac{\alpha  }{2 }\left(\frac{\alpha  }{2 }-1\right)x_1^{\frac{\alpha  }{2 }-2}< 0 $$

$u\left(x\right)\le v\left(x\right)= 2^{\frac{\alpha  }{2 }}Kx_1\frac{\alpha  }{2 }\le 2^{\frac{\alpha  }{2 }}\left| x \right|^{\frac{\alpha  }{2 }}$



$$ u\le v $$

是为啥,




$$ \Delta \left(u-v\right)\ge 0 $$

$$ u-v \le 0$$ 
 
 on boundary, why on boundary, 

$$ v\left(x\right)= 2^{\frac{\alpha  }{2 }}= K $$

$$ v\left(x\right)= \sup _{x\in \partial B_1}\left| \varphi \left(x\right) \right|  $$    


$u\le v$ on $\partial B_1$.


$\Delta v\left(x\right)= 2^{\frac{\alpha  }{2 }}$




 $$ \left| u\left(x\right) \right|\le 2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }}   $$ 


 本质困难是通过极值原理解决的,

所以为啥能成功, 弦长差不多是模长的  $x_1$是点到切平面的法向距离, 

所以还是用极值原理, 把问题化成是

$\left| u\left(x\right) \right|$和$2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }}$.


 $$ \left| u\left(x\right) \right|\le 2^{\frac{\alpha  }{2 }}\left| x \right|^{\frac{\alpha  }{2 }} K   $$ 