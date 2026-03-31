### 07:12

确定了$\left\| u \right\|_{L^{\infty}}\le \left\| \varphi  \right\|_{L^{\infty}}$.

如何用边界holder半范数取估计内部的?

拆成两步, 将内部-内部的关系用边界-边界拆成
    1. 内部减边界用边界减边界
    2. 内部减内部用内部减边界
   
在边界一点$x_0$附近, 观察holder半范数如何变化.

在非常近的时候, $u\left(x\right)\approx \varphi \left(x_0\right)$.

在任意固定小的球附近, $\left| u\left(x\right)-u\left(x_0\right) \right|/\left| x-x_0 \right|^{k}$最大的时候, 也就是$\left| x-x_0 \right|^{k}$最小的时候, $x$位于$x_0$的径向方向, 或者说, $x_0$处切空间的法向. 根据曲线的Frenet展开

 $$ \gamma \left(s\right)= \gamma \left(0\right)+ sT\left(0\right)+ \frac{1}{2}\kappa \left(0\right)s^{2}N\left(0\right)+ O\left(s^{3}\right) $$ 

边界沿法向的偏离是切向的二阶小量. 因此局部的关系大概是
 $$ \sup \frac{\left| u\left(x\right)-u\left(x_0\right) \right|  }{ \left| x-x_0 \right|^{\frac{\alpha  }{2 }} }\sim \frac{\left| \varphi \left(x\right)-\varphi \left(x_0\right) \right|  }{\left| x-x_0 \right|^{\alpha }  } $$

在边界上成立估计

当想要把$\left| u \right|$用$\left| x -x_0\right|^{\frac{\alpha  }{2 }}$控制住, 要用$\left| x \right|$最小的状态来控制它, 也就是$\left| x \right|$几乎是法向的情形. 因此把法向置于单独的坐标, 让$u$被$\left(x^{1}\right)^{\frac{\alpha  }{2 }}$控制住.

思想层: 当两个对象之间缺乏直接结构时，引入一个共同可控的中介层，把“对象–对象”的关系降维为“对象–中介”的关系。这里将内部与内部用边界与边界的控制, 拆分成....
局部化, 将处理对象用局部的视角看待, 主要观察那些在局部上发生变化的量.
规范化, 将主要研究内容规范到益于计算的坐标上. 这里将法向完全放在$x_1$上, 将$\left| u-u\left(x_0\right) \right|, \left| x-x_0 \right|$变成$\left| u \right|, \left| x \right|$.

框架层: 内部与边界用边界与边界控制时, 在局部的边界上, 法向偏移是切向的二阶项两, 所以整体偏移可以用平方阶的法向偏移体现. 而对于一致凸的曲线, 有一个一致的正定控制. 