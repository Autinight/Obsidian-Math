### 08:51

 $$ \Delta v= -\left| Dv \right|^{2}  $$ 
  $$ w= \left| Dv \right|^{2}  $$ 


 $$ \begin{aligned} \Delta w= \operatorname{div}\left(\nabla w\right)&= \operatorname{div}\left(2\left| Dv \right|\nabla \left| Dv \right|  \right)\\and \end{aligned} $$ 


consider a positive $v\in B_1$, 

 $$ v\left(x\right)= e^{-\alpha \left| x \right|^{2} }-e^{-\alpha } $$

calculate 
 $$ \delta v\left(x\right)= e^{-\alpha \left| x \right|^{2} }\left(\cdots \right)> 0 $$

 for $\left| x \right|\ge \frac{1 }{2 } $. if $\alpha \ge 2n+ 1$.
 
 fixed $\alpha$, $v$ is subharmonic   in $A= B_1\setminus B_{\frac{1}{2}}$. define 

  $$ h_{\varepsilon }\left(x\right)= u\left(x\right)-u\left(x_0\right)+ \varepsilon v\left(x\right) $$

also subharmonic. $v$ is subharmonic. $u$ is harmonic. $h_{\varepsilon }$ is subharmonic. $h_{\varepsilon }\le 0$ on $\partial B_1$ since $u\left(x\right)-u\left(x_0\right)< 0$ since $u\left(x\right)< u\left(x_0\right)$ and $v\left(x\right)= 0$ on $\partial B_1$ since $\left| x \right|= 1$there.

we may take $\varepsilon > 0$ small such that $h_{\varepsilon }\left(x\right)< 0$. why , you know that $u\left(x\right)< u\left(x_0\right)$ for $\left| x \right|= \frac{1 }{2 }$. we can not make $h_{\varepsilon }$ too big. such that $h_{\varepsilon }\left(x\right)$ keep negative. $h_{\varepsilon }$ assumes at the point $x_0$ its maxiumm in $A$, since $h_{\varepsilon }\left(x\right)< 0$ , subharmonic means 下榻. that is $h< 0$ inner $B_{\frac{1}{2}}$, and $\le$ boundary. So $h_{\varepsilon }$ assumes9 99

assumes at thhe point $x_0$, implies


$\Delta h_{\varepsilon }\ge 0$ in $A$, $< 0$ on $\left| x \right|= \frac{1}{2}$. $\le 0$ on $\partial B_1$, then $h_{\varepsilon }< 0$ on $A\setminus \left\{ x_0 \right\}$, since $h_{\varepsilon }\le 0$ on $A$. $= 0$ on $x_0$.

 $$ \frac{\partial h_{\varepsilon }}{\partial n}\left(x_0\right)\ge 0 \quad or\quad \frac{\partial u}{\partial n}\left(x_0\right)$$

 $$ \frac{\partial u}{\partial n}\left(x_0\right)+ \varepsilon \frac{\partial v}{\partial n}\left(x_0\right)\ge 0 $$

 $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge 2\alpha \varepsilon e^{-\alpha }> 0 $$

 we estimate $\varepsilon$

 $$ w\left(x\right)= u\left(x_0\right)-u\left(x\right).$$


$w$ is harmonic.

 $$ \inf _{B_{\frac{1}{2}}w}\ge c\left(n\right)w\left(0\right) $$ 

 $$ u\left(x_0\right)-\max _{B_{\frac{1}{2}}}u\ge c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right) $$ 

 $$ \max _{B_{\frac{1}{2}}}u\le u\left(x_0\right)-c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right) $$

 $$ \varepsilon = \delta c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right) $$

 $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge 2\alpha e^{-\alpha }\delta c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right) $$

we choose $\varepsilon$ such that 
 $$ u\left(x\right)-u\left(x_0\right)+ \varepsilon v\left(\frac{1}{2}\right)< 0 $$     

 $$ \max u< u\left(x_0\right)-\varepsilon v\left(\frac{1 }{2 }\right) $$

找充分大的$\alpha$, $\Delta v$ is subharmonic.

找完$v$, 然后 由于$u\left(x_0\right)$是一个最大值, 我们在外面定量地卡出一个更大的范围,  关于径向的, 然后卡出来之后再边界处得有一定的值, 但是得在边界处等于零. 才不会影响取值.


也就是说对于$u\left(x\right)-u\left(x_0\right)$, 本来就是小于零的, 但是啥都得不到, 往中间插入一个家伙$\varepsilon v$, 让这个外面是零, 里面不太清楚, 但是卡一个边界, 控制一下, 不看里面, 那么只看外边就行了. 保持也是次调和的, 因为我们只需要看外面那个最大值. 

最大值只有$\frac{\partial u}{\partial n}\left(x_0\right)\ge 0$, 这个没什么用, 夹进去一个$v$, 得到

 $$ \frac{\partial u}{\partial n}\ge -\varepsilon \frac{\partial v}{\partial n} $$

 然后你得发现夹进去的这个家伙, 你得加一个正的, 然后但是向外的趋势是缩的, 就是越往外面越小, 正好也是迎合了边界等于零. 内部得是非负的, 


构造辅助函数$v$, 定义

 $$ h\left(x\right)= u\left(x\right)-u\left(x_0\right)+ \varepsilon v\left(x\right) $$

让$h$在$x_0$处取最大值, 从而使得

 $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge -\varepsilon \frac{\partial v}{\partial n}\left(x_0\right) \ge C\left(u\left(x_0\right)-u\left(x\right)\right)$$ 


如何让$h$在$x_0$处取最大值, 由于$u$是调和的, 我们构造次调和的$v$, 使得$h$在$\partial B_1$处取最大值, $u\left(x\right)-u\left(x_0\right)$是整体小于零, 除了$x_0$处保持这个性质. 我们也想让$h$整体小于零. 但是可能做不到, 不过由于我们只在边界上做事情, 可以把内部让出来, 只让 $h$在外面那一圈是小于零的. 这样可以保留在内部向外的一个$v$的递减趋势, 使得$\frac{\partial v}{\partial n}$不会趋向于零变得没什么用. 也就是说, 我们舍弃了让内部小于零的性质, 因为这个没用, 换取了外部向外的一个递减的趋势, 逼迫$\frac{\partial u}{\partial n}$必须把这个趋势给兜住.

也就是说我们在内部的某一条边边上让$h$还是小于零的, 然后让$v$在$\partial B_1$上一点用都没有, 就是零. 然后我们还得向外径向是递减的.

we may take $\varepsilon > 0$ small such that $h_{\varepsilon }\left(x\right)< 0$. why , you know that $u\left(x\right)< u\left(x_0\right)$ for $\left| x \right|= \frac{1 }{2 }$. we can not make $h_{\varepsilon }$ too big. such that $h_{\varepsilon }\left(x\right)$ keep negative. $h_{\varepsilon }$ assumes at the point $x_0$ its maxiumm in $A$, since $h_{\varepsilon }\left(x\right)< 0$ , subharmonic means 下榻. that is $h< 0$ inner $B_{\frac{1}{2}}$, and $\le$ boundary. So $h_{\varepsilon }$ assumes9 99
所以还是需要经常用$\Delta$在径向函数上的表示, 这个很重要, 具体是,

 $$ \Delta = \partial _{r}^{1}+ \frac{n-1 }{r }\partial _{r} $$ 