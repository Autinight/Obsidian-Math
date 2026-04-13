
 $$ \mathbb{C}^{n+ 1}= \mathbb{C}^{n}\times \mathbb{C}^{1} = \mathbb{R} _{> 0}\times S^{2n-1}\times \mathbb{R} _{> 0}\times S^{1}$$ 
 $$ S^{2n+ 1}= \left\{ Z\in \mathbb{C}^{n}, \omega \in \mathbb{C}^{1}: \left| Z \right|^{2}+ \left| \omega  \right|^{2}= 1   \right\} $$
  $$ F\left(\theta ,p,q\right):[0,\pi ]\times S^{2n-1}\times S^{1}\hookrightarrow S^{2n+ 1} $$
 $$ \left(r ,p,q\right)\mapsto \left(\sin r\cdot p, \cos r\cdot q\right) $$   
 $$ Z= \sin \left(r\right)\cdot z,\quad z\in S^{2n-1},\quad w= \cos \left(r\right)\cdot e^{i\theta } ,\quad \theta \in \left[ 0,2\pi  \right)$$ 

 $$ dZ= \cos rdr\cdot z+ \sin \left(r\right)dz $$
 这里应该把$z$看成是映射$S^{2n+ 1}\hookrightarrow \mathbb{C} ^{n+ 1}$, 则里相当于把, 那么$dz^{2}$相当于我们希望他变成$\mathbb{C}^{n+ 1}$上的度量, 既然继承自$S^{2n+ 1}$.
  $$ \,d \omega = -\sin r\,d r\cdot e^{i\theta } + \cos r\cdot ie^{i\theta }\,d \theta $$
 $$ \left| dZ \right|  $$   
 $$ ds_{2n+ 1}^{2}= \left| dZ \right|^{2}+ \left| dw \right|^{2}= \cos ^{2}r\,d r^{2}+ \sin ^{2}r\,d s_{2n-1}^{2}   $$ 
 

我能理解可以这么参数化
 $$ \left[ 0,\pi  \right)\times S^{2n-1} \times S^{1}\to S^{2n+ 1}$$ 
 这是一个几乎完美的分解, 但是这好像其实是由
 $$ \mathbb{R} \times \mathbb{R} \to \mathbb{R}  $$
  $$ F\left(x,y\right)= x^{2}+ y^{2} $$
把$F^{-1} \left(1\right)$的参数化为$\left[ 0,\pi  \right)$的想法和

$$\mathbb{C} ^{n}\times \mathbb{C} ^{1}\to \mathbb{C}^{n+ 1} $$
的想法结合在一起得到的, 理应能通过这两个原子自然地拼接在一起, 但是我补不全中间的过程,我从直觉上能接受的变量代换, 就是它写成等距同构的那个样子

 当我们写下$\left(Z,w\right)\in S^{2n+ 1}$, 已经做了两件事情, 一件事
  $$ S^{2n+ 1}\hookrightarrow \mathbb{C}^{n+ 1} = \mathbb{R} \times S^{2n+ 1}$$
  另一件是
   $$ \mathbb{C}^{n+ 1}\simeq \mathbb{C}^{n}\times \mathbb{C}\simeq \left(\mathbb{R} \times S^{2n-1}\right)\times \left(\mathbb{R} \times S^{1}\right) $$  


把$\mathbb{C} ^{n+ 1}\simeq \mathbb{C} ^{n}\times \mathbb{C} ^{1}$, $\mathbb{C} ^{n}\simeq \mathbb{R} \times S^{2n-1}$,$\mathbb{C} \simeq \mathbb{R}\times S^{1}$细细揉碎, 一切的$\simeq$都看成是等距同构, 这里我们把无数笛卡尔积的等距同构拼成这个稀碎的一堆笛卡尔积的等距同构.

 $$ \mathbb{R} \times S^{2n-1} \times \mathbb{R} \times S^{1}\to \mathbb{C}^{n+ 1}= \mathbb{C}^{n}\times \mathbb{C}^{1}\to  \mathbb{R} \times S^{2n+ 1}$$ 
  $$ \left(r_1,p,r_2,q\right)\mapsto \left(r_1p,r_2q\right)\mapsto \left(\sqrt{r_1^{2}+ r_2^{2}},\frac{r_1p }{\sqrt{r_1^{2}+ r_2^{2}} },\frac{r_2q }{ \sqrt{r_1^{2}+ r_2^{2}}}\right) $$ 
考虑映射
 $$ F:\mathbb{R} \times \mathbb{R} \to \mathbb{R} ,\quad F\left(x,y\right)= x^{2}+ y^{2} $$
 它诱导一个等距同构
  $$ [0,\pi )\to F^{-1} \left(1\right)= S^{1} $$  
这里赋予$\left[ 0,\pi  \right)$使得上述成为等距同构的度量.

那么上面的一大串笛卡尔积分解, 限制在水平集$\left\{ 1 \right\}\times S^{2n+ 1}$上, 这一大堆等距同构就耦合在一起, 变成我们想要的分解了.
 