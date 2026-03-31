### 06:48

$X,Y$ Banach. $X\subseteq Y$

$X\subset \subset Y$, provided, the norm be dominated, $\left\| u \right\|_{Y}\le C \left\| u \right\|_{X}$. That is understandable. Since $X,Y$ is Banach, if $\left\{ u_{m} \right\}$ converges to a guy in $X$. Then $\left\{ u_{m} \right\}$ converges to a guy in $Y$.

the properly embedded , we mean each bounded sequence in $X$ is precompact in $Y$, what's that mean?

precompact is , if $\left\{ u_{k}\right\}_{k= 1}^{\infty}$ is a sequenmce in $X$ with $\sup _{k}\left\| u_{k} \right\|_{X}< \infty$, that is a bounded sequence, then some subsequence $\left\{ u_{k_{j}} \right\}_{j= 1}^{\infty}\subseteq \left\{ u_{k} \right\}_{k= 1}^{\infty}$ converges in $Y$ to some limit $u$: 
 $$ \lim_{j\to \infty}\left\| u_{k_{j}}-u \right\|_{y} $$

That is bounded sequence have convergent subsequence, sequence compact, and we called it the precompact for sequence. 

In metric space, precompact(the closure is compact) is always the same as the sequence compact, and we admitt that.

just remember, the operator is bounded and something like a suquence compact.

We know $W^{1,p}\left(U\right)$ $p< n$ is embedded in $L^{p^{*}}\left(U\right)$, or we say in $L^{1}\left(U\right)$ for $q\le p^{*}$. 

Then we say the embedding is compact when $q< p^{*}$.

How to find subsequence for the bounded $\left\{ u_{m} \right\}$?

By extension , we may assume $U= \mathbb{R} ^{n}$ , $\left\{ u_{m} \right\}_{m= 1}^{\infty}$ all have compact support in some boudned open set $V\subseteq \mathbb{R} ^{n}$.


 $$ \sup _{m}\left\| u_{m} \right\|_{W^{1,p}\left(V\right)}< \infty $$

 Then we can do mollify to get $\left\{ u^{\varepsilon }_{m} \right\}_{m= 1}^{\infty}$, we may assume have support in $V$ as well(by enhancing $V$).

 Claim $u_{m}^{\varepsilon }\to u$ in $L^{1}\left(\right)$, uniformly in $m$.

 First note that if $u_{m}$ is smooth , then

  $$ \begin{aligned} u_{m}^{\varepsilon }\left(x\right)-u_{m}\left(x\right)&= \frac{1 }{\varepsilon ^{n} }\int _{B\left(x,\varepsilon \right)}\eta \left(\frac{x-z }{\varepsilon  }\right)\left(u_{m}\left(z\right)-u_{m}\left(x\right)\right)\,\mathrm{d} z\\&= \int _{B\left(x,1\right)}\eta \left(y\right)\left(u_{m}\left(x-\varepsilon y\right)-u_{m}\left(x\right)\right)\,\mathrm{d} y\\&=  \int _{B\left(x,1\right)}\eta \left(y\right) \int _{0}^{1}\left(\frac{\mathrm{d}}{\mathrm{d}t}u_{m}\left(x-\varepsilon ty\right)\right)\,\mathrm{d} t\,\mathrm{d} y\\&=  -\varepsilon \int _{B\left(x,1\right)}\eta \left(y\right)\int _{0}^{1}Du_{m}\left(x-\varepsilon ty\right)\cdot y\,\mathrm{d} t\,\mathrm{d} y   \end{aligned} $$

   $$ \begin{aligned} \int _{V}\left| u_{m}^{\varepsilon }\left(x\right)-u_{m}\left(x\right) \right|\,\mathrm{d} x&\le \varepsilon  \int _{B\left(0,1\right)}  \eta \left(y\right)\int _{0}^{1}\int _{V}\left| Du_{m}\left(x-\varepsilon ty\right) \right|\,\mathrm{d} x\,\mathrm{d} t\,\mathrm{d} y\\&\le \varepsilon \int _{B\left(0,1\right)}\eta \left(y\right)\int _{0}^{1}\int _{V}\left| Du_{m}\left(z\right) \right|\,\mathrm{d} z\,\mathrm{d} t\,\mathrm{d} y\\&= \varepsilon \int _{B\left(0,1\right)}\eta \left(y\right) \left(\int _{V}\left| Du_{m}\left(z\right) \right|\,\mathrm{d} z \right)\,\mathrm{d} y\\&= \varepsilon \int _{V}\left| Du_{m}\left(z\right) \right|z   \end{aligned} $$ 

  $z= x-\varepsilon y$ , $dz= \frac{1 }{\varepsilon ^{n} }dy$ 

  We have done in $L^{1}\left(V\right)$, and we need interpolation inequality for $L^{p}$.

  Assume $1\le s\le r\le t\le \infty$, and 
   $$ \frac{1 }{r }= \frac{\theta  }{s }+ \frac{\left(1-\theta \right) }{t } $$

   Suppose $u \in L^{s}\left(U\right)\cap L^{t}\left(U\right)$. Then $u\in L^{r}\left(U\right)$ and 
$$ \left\| u \right\|_{L^{p}\left(U\right)}\le \left\| u \right\|^{\theta }_{L^{s}\left(U\right)}\left\| u \right\|^{1-\theta }_{L^{t}\left(U\right)} $$  

 $$ \int _{V}\left| u^{\varepsilon }_{m}-u_{m}\left(x\right) \right|^{q}\,\mathrm{d} \le \varepsilon ^{q}\int _{V}\left| Du_{m}\left(z\right) \right|^{q}\,\mathrm{d} z   $$

  $$ \left\| u_{m}^{\varepsilon }  -u_{m}\right\|_{L^{q}\left(V\right)}\le \varepsilon \left\| Du_{m} \right\|_{L^{q}\left(V\right)} $$  

  $\left\| Du_{m} \right\|\in L^{p}\left(V\right)$, we also use GNS to show that for  
  $$ \frac{1}{q}= \frac{1}{p^{\prime} }-\frac{1}{n}$$
   $$ p^{\prime} = \frac{nq }{q+ n } $$

   we need for $q< p^{*}$, $p^{*}= \frac{pn }{n-p }$

   There will be $C$ depending on $q$. if we just throw it out.                                                                          

   we should use $GNS$ many times, but we don't need. It only use the fact that the midium one, is dominated by the lower  one and a higher one, it is all we need.

   $\frac{1 }{q}=  \theta  + \frac{\left(1-\theta \right) }{p^{*} }$


   fixed $\varepsilon$, to show $u_{m}^{\varepsilon }$ is equicontinuous.


   subsequence convergent in $L^{q}\left(V\right)$  norm

   sequence converges uniformly , 


   stanrdord diagnao argument scxtract sa subsequence 

   $$ \lim_{l,k\to \infty}\left\| u_{m_{l}}-u_{m_{k}} \right\|_{L^{q}\left(V\right)}= 0 $$

   一致有界加等度连续, subsequence, continuous function , uniformly on compact subsets.

convergent uniformly on $L^{q}\left(V\right)$ in $m$.

Choose diganal argument to abataine uniformly on ocmpact set, suquence the norm , nuniformly 


how to show quicontinuous, 

$\left| u_{m}^{\varepsilon }\left(x\right) \right|< \le \frac{C }{\varepsilon ^{n} }< \infty $


 $$ \left| Du_{m}^{\varepsilon }\left(x\right) \right|\le  \frac{C }{\varepsilon ^{n+ 1} }< \infty  $$

 $\left\| D \eta _{\varepsilon } \right\|_{L^{\infty}\left(\mathbb{R}\right)}$,  $\left\| \eta _{\varepsilon } \right\|_{L^{\infty}\left(\mathbb{R} ^{n}\right)}$, are bounded , so the 

  $$ \left| u_{m}\left(x+ \omega t\right)-u\left(x\right) \right|\le \int  \sup \left| D u_{m}^{\varepsilon }\left(x\right) \right|\,\mathrm{d}t= \delta     $$

  Arzela-Ascloli compactness criterion, converges uniformly , 

  We will shoiw that subsequence, $\limsup_{j,k}\to \infty\left\| u_{m_{j}}-u_{m_{k}} \right\|_{L^{q}\left(V\right)}\le \delta$

  让磨光后的函数列, 对于固定的磨光系数, 是一致收敛的. 

  利用$\varepsilon \to 0$的一致收敛, 

  得益于$\left| Du _{m}\right|$范数的一致有界, $u_{m}^{\varepsilon }\to u$是可以关于$m$一致地在$L^{q}\left(V\right)$收敛, 这借助$L^{1}$核$L^{p^{*}}$, 并利用插值不等式.

  $u_{m}^{\varepsilon }$不增加范数, 只需要一边范数的一致收敛, 对$L^{1}\left(V\right)$可以做到.

  固定$\varepsilon$ , 考察光滑函数列的一致有界和等度连续, 给出一致收敛光滑函数子列.  再利用$\varepsilon$关于$m$的一致收敛性, 给出原列的一致任意接近, 根据对角线论证, 给出收敛子列.

  已经说明嵌入了, uniformly in $m$

  一致性是为了给出对角线论证, 需要一个一致的估计$\delta$.

  
### 16:11

uniformly elliptic, if constant $\theta > 0$ such that 
 $$ \sum _{i,j= 1}^{n}a^{ij}\left(x\right)\xi _{i} \xi _{j}\ge \theta \left| \xi  \right|^{2}  $$ 

 That is 

  $$ \xi ^{\top}A\xi \ge \theta \xi ^{\top}\xi  $$
   $$ \xi ^{\top}\left(A-\theta I\right)\xi \ge 0 $$

 $$ A\xi = \lambda \xi  $$

 then 
  $$ \xi ^{\top}\left(\lambda -\theta \right)\xi = \left(\lambda -\theta \right)\left| \xi  \right|^{2}\ge 0\implies \lambda \ge \theta   $$    

$-\Delta$ is an exmaple when $a_{ij}= \delta ^{i}_{j}$. 

$Lu= 0$ will be similar to $\Delta u= 0$.