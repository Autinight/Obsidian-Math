代靖涵 25120222201319

> [!exercise] Exercise:
   > 考虑 $B$ 空间 $C[0,1]$ 的子空间 $X=\{f\in C[0,1]\mid f(0)=0\}$, 以及
   >
   > $$X_0=\{f\in X\mid\int_0^1f(x)\,dx=0\}.$$
   >
   > 证明: 不存在 $f_0\in X\setminus X_0$, 使得 $\|f_0\|=1$ 且 $d(f_0,X_0)=1$.

> [!proof] Proof: 
> 
> 定义
>  $$ \begin{aligned} \Phi :X&\to \mathbb{R}\\ \Phi \left(f\right)&= \int _{0}^{1}f\left(x\right)\,d x \end{aligned} $$
> 
> 则$X_0= \operatorname{ker}\Phi$, 
> 
> 考虑$f_0\in X\setminus X_0$, 使得$\left\| f_0 \right\|= 1$, 则$\Phi \left(f_0\right) \neq 0$, 且
> 
> 
>  $$ \left\| \Phi  \right\|\ge \left| \Phi \left(f_0\right) \right|  $$ 
> 
> 
> 如果
>  $$ \left| \Phi \left(f_0\right) \right|\ge 1  $$
> 则
>  $$ \int _{0}^{1}\left| f_0 \right|\,d x\ge \left| \int _{0}^{1}f_0 \,d x\right|= \left| \Phi \left(f_0\right) \right|\ge 1    $$  
> 只能有$\left| f_0 \right|\ge 1$,  那么由于$\left\| f_0 \right\|= 1$, 这迫使$\left| f_0 \right|\equiv 1$, 与$f_0\in X$矛盾. 因此 $\left| \Phi \left(f_0\right) \right|< 1$.
> 
> 令
>  $$ g_{n}\left(x\right)= f_0\left(x\right)-\Phi \left(f_0\right)u_{n}\left(x\right) $$
> 其中 $u_{n}$待定, 满足
>  $$ \int _{0}^{1}u_{n}\left(x\right)= 1,\quad u_{n}\left(x\right)= 0 $$
> 则
>  $$ \Phi \left(g_{n}\right) = \Phi \left(f_0\right)-\Phi \left(f_0\right)\Phi \left(u_{n}\right)= 0,\quad g_{n}\left(0\right)= 0$$
> $g_{n}\in X_0$.  此时 
>  
>  $$ d\left(f_0,g_{n}\right)= \left| \Phi \left(f_0\right) \right|\left\| u _{n}\right\|   $$ 
> 定义
>  $$ u_{n}\left(x\right)= \frac{n+ 1 }{n }x^{\frac{1}{n}} $$
> 则此时
>  $$ \int _{0}^{1}u_{n}\left(x\right)\,d x= \int _{0}^{1}\frac{n+ 1 }{n }x^{\frac{1}{n}}\,d x= \int _{0}^{1}\frac{n+ 1 }{n }t\,d t^{n}= 1 $$
>  $$ \left\| u_{n} \right\|= \frac{n+ 1 }{n } $$ 
>  那么
>  $$ d\left(f_0,g_{n}\right)= \left| \Phi \left(f_0\right) \right|\frac{n+ 1 }{n }  $$ 
>
> 因此
>  $$ d\left(f_0,X_0\right)\le \lim_{n\to \infty}d\left(f_0,g_{n}\right)= \left| \Phi \left(f_0\right) \right|  $$ 
> 
> 
> 
> 
> 但是前面给出了$\left| \Phi \left(f_0\right) \right|< 1$, 这迫使 $d\left(f_0,X_0\right)< 1$. 因此不存在$f_0\in X\setminus X_0, \left\| f_0 \right\|= 1$, 使得$d\left(f_0,X_0\right)= 1$.





> [!exercise] Exercise:
> 设 $X$ 是赋范线性空间, $C$ 是以 $0$ 为内点的均衡的有界凸集. 证明: $C$ 的 Minkowski 泛函 $P_C$ 是 $X$ 上的一个范数.

> [!proof] Proof: 
> 不妨设$X$是非零的线性空间, 则由于$0$是$C$的内点, $C$至少有非零点. 
> 已知$P_{C}$满足
> 
> 1.  $P_{C}\left(x\right)\in \left[ 0,\infty \right],\;P_{C}\left(0\right)= 0$
> 2. $P_{C}\left(\lambda x\right)= \lambda P_{C}\left(x\right),\quad \forall x\in X,\forall \lambda > 0$
> 3. $P_{C}\left(x+ y\right)\le P_{C}\left(x\right)+ P_{C}\left(y\right)$
>
> 只需要进一步说明"$P_{C}\left(x\right)= 0\implies x= 0$"和$P_{C}\left( cx\right)=\left| c \right|P_{C}\left(x\right), \forall x\in X,c\in \mathbb{C}$.
>
> - 事实上, 若$P_{C}\left(x\right)= 0$, 则
>      $$ 0= \inf \left\{ \lambda > 0:\frac{x }{ \lambda }\in C \right\} $$ 
>     可知对于任意的$n$, $nx\in C$. 若$\left\| x \right\|> 0$, 则$\left\{ nx \right\}$是$C$上但在$X$中无界的点列, 与$C$为有界集矛盾, 因此$x= 0$.
>
> - 此外, 任取$x\in X\setminus \left\{ 0 \right\}$, 存在一列正数$\left\{ \lambda _{n} \right\}$, 使得 $\lim_{n\to \infty}\lambda _{n}= P_{C}\left(x\right)$, $\frac{x }{\lambda _{n} }\in C$.
>    任取$c\in \mathbb{C}\setminus \left\{ 0 \right\}$, 则由$C$是均衡的, 
>     $$ \frac{c }{\left| c \right|  }\frac{x }{\lambda _{n} }\in C $$
>    进而$P_{C}\left(cx\right)\le  \left| c \right|\lambda _{n}$ 
>    令$n\to \infty$, 可得
>     $$ P_{C}\left(cx\right)\le \left| c \right| P_{C}\left(x\right) $$ 
>     用$c^{-1}$替换$c$, 用$cx$替换$x$, 得到
>     $$ P_{C}\left(c^{-1} \left(cx\right)\right)\le \left| c \right|^{-1} P_{C}\left(cx\right)  $$
>    即
>     $$ \left| c \right| P_{C}\left(x\right) \le P_{C}\left(cx\right)$$  
>    因此
>     $$ P_{C}\left(cx\right)= \left| c \right|x ,\quad \forall x\in X\setminus \left\{ 0 \right\} $$ 
>    又$P_{C}\left(0\right)= 0$, 因此$P_{C}\left(x\right)= \left| c \right|x,\forall x\in X$. 

> [!exercise] Exercise:
   > 设 $X$ 是 $B^*$ 空间, $E$ 是以 $0$ 为内点的真凸子集, $P$ 是 $E$ 的 Minkowski 泛函, 求证:
   >
   > 1. $x$ 是 $E$ 的内点当且仅当 $P(x)<1$.
   > 2. $E$ 的内部的闭包等于 $E$ 的闭包.
   
> [!proof] Proof: 
> 1. 若$P\left(x\right)< 1$, 则存在$\lambda<  1$, 使得$\frac{x }{\lambda  } \in E$, 记$\tilde{x}= \frac{x }{\lambda  }$. 由于$0$是$E$的内点, 存在$r> 0$, 使得$B_{r}= B_{r}\left(0\right)\subseteq E$. 令$\tilde{r}= \left(1-\lambda \right)r$. 则任取$y\in B_{\tilde{r}}\left(x\right)$, 我们有$\frac{y-x }{1-\lambda  }\in B_{r}\left(0\right)\subseteq E$. 由于$E$是凸集, 我们有
>      $$ y= \left(1-\lambda \right)\left(\frac{y-x }{1-\lambda  }\right)+ \lambda \tilde{x}\in E $$
>    因此$B_{\tilde{r}}\left(x\right)\subseteq E$, $x$是$E$的内点.  
>
>    反过来, 若$x$是$E$的内点, 则存在$r> 0$使得$B_{r}\left(x\right)\subseteq E$. 则$\left(1+ \frac{r }{2 }\right)x\in E$, 那么
>      $$ P\left(x\right)\le \frac{1 }{1+ \frac{r }{2 } }< 1 $$ 
>
> 2. 易见$\overline{E^{\circ}}\subseteq \overline{E}$.  另一方面, 任取$x\in \overline{E}$, 则存在$E$上的点列$\left\{ x_{n} \right\}$, 使得$\lim_{n\to \infty}x_{n}= x$. 则$P\left(x_{n}\right)\le 1$, 且存在$M> 0$, 使得$\left\| x_{n} \right\|\le M,\forall n$. 令$y_{n}= \frac{n }{n+ 1 }x_n$, 则$P\left(y_{n}\right)= \frac{n }{n+ 1 }P\left(x_{n}\right)< 1$, 由1.知$y_{n}$是$E$的内点.
>     $$ \left\| y_{n}-x \right\|\le  \left\| y_{n}-x_{n} \right\|+ \left\| x_{n}-x \right\| $$
>     其中
>     $$ \left\| y_{n}-x_{n} \right\| = \frac{1 }{n+ 1 }\left\| x_{n} \right\|\le \frac{M }{n+ 1 }$$  
>      因此 $\lim_{n\to \infty}\left\| y_{n}-x_{n}\right\|= 0$, 又$\lim_{n\to \infty}\left\| x_{n}-x \right\|= 0$, 故$\lim_{n\to \infty}\left\| y_{n}-x \right\|= 0$. 这表明$x\in \overline{E^{\circ}}$.

> [!exercise] Exercise:
>  设Banach空间$(X,\|\cdot\|)$具有Schauder基$\{e_n\}$, 用$M$表示所有使得$\sum_{k=1}^\infty\xi_ke_k$在$X$中收敛的数列$\{\xi_k\}$的全体, 按通常方式定义线性运算构成的线性空间. 对于每一$x=\{\xi_k\}\in M$, 定义:
>
> $$\|x\|_1=\operatorname{sup}_n\left\|\sum_{k=1}^n\xi_ke_k\right\|$$
>
> 证明$(M,\|\cdot\|_1)$是Banach空间.

> [!proof] Proof: 
> 取$M$上的Cauchy列$\left\{ x^{\left(m\right)}_{k} \right\}_{m}$. 任取$\varepsilon > 0$, 存在$N$, 使得对于所有的$m,p> N$, 都有
>  $$ \begin{aligned} \left\| x^{\left(m\right)}-x^{\left(p\right)} \right\|_{1}&=\sup _{n}\left\| \sum _{k= 1}^{n}\left(\xi ^{\left(m\right)}_{k}-\xi ^{\left(p\right)}_{k}\right) e_{k}\right\|< \varepsilon  \end{aligned}\tag{*} $$ 
> 对于任意的$n$, 
>  $$ \begin{aligned} \left| \xi _{n}^{\left(m\right)}-\xi _{n}^{\left(p\right)} \right|\left\| e_{n} \right\|=  \left\|\left( \xi _{n}^{\left(m\right)}-\xi _{n}^{\left(p\right)}\right)e_{n}\right\|&\le \left\| \sum _{k = 1}^{n}\left(\xi _{k}^{\left(m\right)}-\xi _{k}^{\left(p\right)}\right)e_{k} \right\| + \left\|  \sum _{k= 1}^{n-1}\left(\xi _{k}^{\left(m\right)}-\xi _{k}^{\left(p\right)}\right)e_{k}\right\| \\&\le 2\varepsilon \end{aligned} $$ 
> 因此$\left\{ \xi _{n}^{\left(k\right)} \right\}_{k}$是一个Cauchy列, 设它收敛到$\xi _{n}$. 令$x= \sum _{k= 1}^{\infty}\xi _{k}e_{k}$.
> 考虑到
> 
>  $$ \left\| \sum _{k= n}^{l}\xi _{k}e_{k} \right\| \le \left\| \sum _{k= n}^{l}\left(\xi _{k}-\xi _{k}^{\left(m\right)}\right) e_{k}\right\|+ \left\| \sum _{k= n}^{l}\xi _{k}^{\left(m\right)}e_{k} \right\|$$ 
>  对于固定的$m> N$, 充分大的$p$和任意的$n$, 由(*)式可知
>   $$\left\|  \sum _{k= 1}^{n}\left(\xi _{k}^{\left(m\right)}-\xi _{k}^{\left(p\right)}\right)e_{k} \right\| \le \varepsilon  $$
> 其中令$p\to \infty$, 得到
>  $$ \left\| \sum _{k= 1}^{n}\left(\xi _{k}^{\left(m\right)}-\xi _{k}\right)e_{k} \right\|\le \varepsilon \tag{**}  $$
> 于是
> 当$l> n>  N$时,
>  $$ \left\| \sum _{k = n}^{l}\left(\xi _{k}-\xi _{k}^{\left(m\right)}\right)e_{k} \right\|\le \left\| \sum _{k= 1}^{n-1}\left(\xi _{k}-\xi _{k}^{\left(m\right)}\right)e_{k} \right\|-\left\| \sum _{k= 1}^{l}\left(\xi _{k}-\xi _{k}^{\left(m\right)}\right)e_{k} \right\|\le 2\varepsilon  $$ 
> 此外, 存在$N^{\prime}$, 使得当$l> n> N^{\prime}$时,
>   $$ \left\| \sum _{k= n}^{l}\xi _{k}^{\left(m\right)}e_{k} \right\| < \varepsilon $$
> 此时
>  $$ \left\| \sum _{k= n}^{l}\xi _{k}e_{k} \right\|< 3\varepsilon  $$
> 再有$X$的完备性, 可知$\sum _{k= 1}^{\infty}\xi _{k}e_{k}$收敛于$X$.  
> 
> 最后, 回到(**), 令$n\to \infty$, 得到
>  $$ \left\| x^{\left(m\right)}-x \right\|\le \varepsilon  $$
> 令$\varepsilon \to \infty$, 得到
>  $$ \lim_{m\to \infty}x^{\left(m\right)}= x $$  
> 因此$M$是Banach空间.
  


> [!exercise] Exercise:
>  设$(X,\|\cdot\|)$是赋范空间, $Y$是$X$的子空间. 对于$x\in X$, 令:
>
> $$\delta=d(x,Y)=\operatorname{inf}_{y\in Y}\|x-y\|$$
>
> 如果存在$y_0\in Y$, 使得$\|x-y_0\|=\delta$, 称$y_0$是$x$的最佳逼近.
>
> 1. 证明: 如果$Y$是$X$的有穷维子空间, 则对每一$x\in X$, 存在最佳逼近.
> 2. 试举例说明, 当$Y$不是有穷维空间时, 1. 的结论不成立.
> 3. 试举例说明, 一般地, 最佳逼近不惟一.
> 4. 证明对于每一点$x\in X$, $x$关于子空间$Y$的最佳逼近点集是凸集.

> [!proof] Proof: 
> 1.  任取$x\in X$, 若$x\in Y$, 则$x$就是自己的最佳逼近, 若$x\not \in Y$, 则$\left\| x \right\|= d\left(x,0\right)\ge d\left(x,Y\right)$.
>      定义
>      $$  K= \left\{ y\in Y: \left\| x-y \right\|\le \left\| x \right\| \right\}$$
>     则$K$是$Y$中的有界闭集, 由Heine-Borel定理, $K$是紧集. 则考虑连续映射
>      $$ K\to \mathbb{R} ,\quad y\mapsto d\left(y,x\right) $$
>     它存在最小值点$y_0$, 使得
>      $$ d\left(x,y_0\right)= d\left(x,K\right) $$ 
>     注意到
>      $$ d\left(x,K\right)= \inf _{y\in Y}\left\{ \left\| x-y \right\| : \left\| x-y \right\| \le \left\| x \right\|\right\}= \inf _{y\in Y}\left\| x-y \right\|= d\left(x,Y\right)$$
>     因此
>      $$ d\left(x,y_0\right)= d\left(x,Y\right) $$
>     $x$存在最佳逼近.  
> 2. 考虑$c_0$上的有界线性泛函$f\left(x\right)= \sum _{n = 1}^{\infty}\frac{x_{n} }{2^{n} }$ , 则算子范数
>     $$ \left\| f \right\|= \sum _{n = 1}^{\infty}\frac{1 }{2^{n} }= 1 $$
>    考虑$x= \left(1,0,0,\cdots \right)$, 则$\left\| x \right\|= 1$. 
>     $$ d\left(x,\operatorname{ker}f\right)= \frac{\left| f\left(x\right) \right| }{\left\| f \right\| }= \frac{1}{2} $$
>    接下来说明不存在$y\in \operatorname{ker}f$, 使得$d\left(x,y\right)= \frac{1}{2}$, 事实上, 若$d\left(x,y\right)= \frac{1}{2}$, 则对于任意的$n$
>     $$ \left| x_{n}-y_{n} \right|\le \frac{1}{2}  $$
>    其中
>     $$ \left| y_1 \right|\ge  \left| x_1 \right|-\left| x_1-y_1 \right|\ge  1- \frac{1}{2} = \frac{1}{2}  $$
>     $$ \left| y_{n} \right| \le \frac{1}{2},\quad n\ge 2 $$
>    则
>     $$0=  \left| f\left(y\right) \right|= \left| \sum _{n = 1}^{\infty}\frac{y_{n} }{2^{n} } \right| \ge \frac{1 }{2 }\left| y_1 \right|-\sum _{n = 2}\frac{\left| y_{n} \right|  }{2^{n} } \ge \frac{1}{4}-\frac{1}{4}= 0  $$
>    于是
>     $$ \left| y_{n} \right| = \frac{1}{2},\forall n $$   
>    再带入$f\left(y\right)= 0$, 发现只能有$y_1= \pm \frac{1}{2}$, $y_{k}= \mp\frac{1}{2},\forall k\ge 2$, 无论如何, $\left\{ y_{n} \right\}$不是收敛到零的序列, $y\not \in c_0$, 矛盾.
> 3. 考虑$\left(\mathbb{R} ^{2},\left\| \cdot  \right\|_{\infty}\right)$, 令$Y= \left\{ 0 \right\}\times \mathbb{R}$, 则对于$x= \left(1,0\right)$,
>    $$ d\left(x,Y\right)= \inf _{t\in \mathbb{R} }\left\| \left(0,1\right)-\left(0,t\right) \right\|= \inf _{t\in \mathbb{R} }\max \left(1,\left| t \right| \right)= 1 $$
>    则只有$t\in \left[ -1,1 \right]$, 都有$\left(0,t\right)$是$x$的最佳逼近点. 
> 
> 4. 设$S$为最佳逼近点集, 即
>  $$ S= \left\{ y\in Y:\left\| x-y \right\|= \delta  \right\} $$
> 若$S$为空集和单点集, 则$S$是凸的. 若$S$至少有两个点, 任取$y_1,y_2\in S$, 以及$\lambda \in \left[ 0,1 \right]$, 则$\lambda y_1+ \left(1-\lambda \right)y_2\in Y$, 计算
>  $$ \begin{aligned} \left\| x-\left(\lambda y_1+ \left(1-\lambda \right)y_2\right) \right\|&=\left\| \lambda x+ \left(1-\lambda \right)x-\lambda y_1-\left(1-y\lambda \right)y_2 \right\| \\&\le \lambda \left\| x-y_1 \right\|+ \left(1-\lambda \right)\left\| x-y_2 \right\|\\&\le \lambda \delta + \left(1-\lambda \right)\delta = \delta   \end{aligned} $$ 
> 又根据$\delta$的定义, $\left\| x-\left(\lambda y_1+ \left(1-\lambda \right)y_2\right) \right\|\le \delta$, 因此$\lambda y_1+ \left(1-\lambda \right)y_2\in S$.



> [!exercise] Exercise: 
> 证明: 若$C$是$\mathbb{R}^n$中的一个紧凸子集, 则存在$m \le n$, 使得$C$同胚于$\mathbb{R}^m$中的单位球.


> [!proof] Proof: 
> 取$C$在子空间拓扑的意义下的一个内点$x_0\in C$, 通过平移, 不妨设$x_0= 0$. 考虑
>  $$ V= \bigcap _{K}\left\{ K\text{是包含了C的线性子空间} \right\} $$ 
> 则$V$是包含了$C$的一个线性子空间, 设$\operatorname{dim}V= m\le n$.
> 存在$R> \varepsilon > 0$, 使得
>  $$ B_{V}\left(0,\varepsilon \right)\subseteq C\subseteq B_{V}\left(0,R\right) $$ 
> 设$P_{C}$是Minkowski泛函, 定义
>  $$ F:C\to B^{m}: $$
>  $$ F\left(x\right)= \begin{cases} \frac{P_{C}\left(x\right) }{\left\| x \right\| }x,&x\neq 0\\0,&x= 0 \end{cases}  $$  
> 当$x\neq 0$时, $P_{C}$和$\left\| \cdot  \right\|$均连续, 故$F$连续. 当$x\to 0$时, 由$B_{V}\left(0,\varepsilon \right)\subseteq C$, 可知$P_{C}\left(x\right)\le \frac{1 }{\varepsilon  }\left\| x \right\|$, 从而
>  $$ \left\| F\left(x\right) \right\|= p_{C}\left(x\right)\to 0 $$
> 故$F$在原点连续. 
> 定义
>  $$ G:B^{m}\to C $$
>  $$ G\left(y\right)= \begin{cases} \frac{\left\| y \right\| }{P_{C}\left(y\right) }y,&y\neq 0\\0,&y= 0 \end{cases}  $$
> 则
>  $$ p_{C}\left(G\left(y\right)\right)= P_{C}\left(\frac{\left\| y \right\| }{p_{C}\left(y\right) }y\right)= \left\| y \right\|\le 1 $$
> 故$G\left(y\right)\in C$. 
> 由$C\subseteq B_{V}\left(0,\mathbb{R} \right)$, 可得$P_{C}\left(y\right)\ge \frac{1 }{R }\left\| y \right\|$, $\left\| G\left(y\right) \right\|\le R\left\| y \right\|\to 0$. 故$G$连续. 容易验证$F\circ G= \operatorname{Id}$, $G\circ F= \operatorname{Id}$. 因此$F$是$C$与$B^{m}$之间的同胚映射.   

> [!exercise] Exercise: 
> 设$C$是$B$空间$X$中的一个有界闭凸集, 映射$T_1, T_2 : C \to X$满足:
> 1. $T_1x + T_2y \in C, \forall x, y \in C$;
> 2. $T_1$是一个压缩映射, $T_2$是一个**紧映射**(把有界集映为列紧集的连续映射).
> 求证: $T_1 + T_2$在$C$上至少有一个不动点.

> [!proof] Proof: 
> 固定$y\in C$, 定义$F_{y}:C\to X$
>  $$ F_{y}\left(x\right)= T_1x+ T_2y $$ 
> 由1.可知, $F_{y}\left(C\right)\subseteq C$. 由于$T_1$是压缩映射
>  $$ \left\| F_{y}\left(x_1\right)-F_{y}\left(x_2\right) \right\|\le \left\| T_1x_1-T_1x_2 \right\|\le \lambda \left\| x_1-x_2 \right\|,\quad \lambda < 1 $$
> 于是$F_{y}$是$C$上的压缩映射. 由于$X$是Banach空间, $C$是闭集, $C$也是完备的度量空间. 由Banach不动点定理, 存在$F_{y}$的不动点$P_{y}$. 考虑映射
>  $$ G:C\to C,\quad y\mapsto  P_{y} $$  
> 则
>  $$ \begin{aligned} \begin{aligned} \begin{aligned} \left\| P_{y_1}-P_{y_2} \right\|&=\left\| F_{y_1}\left(P_{y_1}\right)-F_{y_2} \left(P_{y_2}\right)\right\|\\&\le \left\| T_1P_{y_1}+ T_2y_1-T_1P_{y_2}-T_2y_2 \right\|\\&\le  \left\| T_1\left(P_{y_1}-P_{y_2}\right) \right\|+ \left\| T_2\left(y_1-y_2\right) \right\|\\&\le  \lambda \left\| P_{y_1} -P_{y_2}\right\|+ \left\| T_2\left(y_1-y_2\right) \right\| \end{aligned}\end{aligned} \end{aligned} $$
> 移项可得
>  $$ \left\| P_{y_1}-P_{y_2} \right\|\le  \frac{\left\| T_2\left(y_1-y_2\right) \right\| }{1-\lambda  } $$ 
> 由于$T_1,T_2$连续, $G$也连续. 任取$C$中的序列$\left\{ y_{n} \right\}$, 由于$C$有界, $T_2$紧, 可知$\left\{ T_2y_{n} \right\}$有收敛子列. 记作$\left\{ T_2y_{n_{k}} \right\}$.
> 根据
>  $$ \left\| P_{y_{n_{i}}}-P_{y_{n_{j}}} \right\|\le \frac{1 }{1-\lambda  }\left\| T_2 y_{n_{i}}-T_2y_{n_{j}}\right\| $$
> 可知$\left\{ P_{y_{n_{k}}} \right\}$也是Cauchy列, 进而由完备性可知收敛于$C$中某一点. 故$G\left(C\right)$是列紧的. 由Schauder不动点定理, 必然存在$G$的不动点. 设$P_{y_0}= y_0$, 那么
>  $$ \left(T_1+ T_2\right)y_0= T_1y_0+ T_2y_0= F_{y_0}\left(y_0\right)= y_0 $$
> 故$y_0$是$T_1+ T_2$在$C$上的不动点. 

> [!exercise] Exercise: 
> 设$K(x,y)$是$[0,1] \times [0,1]$上的正值连续函数, 定义映射
> $$T : C[0,1] \to C[0,1], \quad u(x) \mapsto (Tu)(x) = \int_0^1 K(x,y)u(y)dy.$$
> 求证: 存在$\lambda > 0$以及非负但不恒为零的连续函数$u$, 满足$Tu = \lambda u$.

> [!proof] Proof: 
> 定义
>  $$ C= \left\{ u\in L^{1}\left(0,1\right): u\ge 0,a.e., \int _{0}^{1}u\,d x= 1 \right\} $$
> 则$C$是$L^{1}\left(0,1\right)$上的有界闭的凸集. 
>
> $K\left(x,y\right)$是紧集上的严格正的连续函数, 存在$m,M> 0$, 使得
>  $$ 0< m\le K\left(x,y\right)\le M,\quad \forall x,y\in \left[ 0,1 \right] $$ 
> 则
>  $$ m\le \left(Tu\right)\left(x\right)\le M $$
> 则$Tu$严格正, 且因此$\left\| Tu \right\|_{L^{1}}\ge m$. 
>
> 定义$A:C\to L^{1}\left(0,1\right)$
>  $$ A\left(u\right)= \frac{Tu }{\left\| Tu \right\|_{L^{1}} } $$ 
> 则$A\left(C\right)\subseteq C$.
>
> 为了说明$A$在$C$上连续, 取$u_{m}\to u$于$L^{1}$, 则
>  $$ \left| \left(Tu_{n}\right)\left(x\right)-\left(Tu\right)\left(x\right) \right|\le \int _{0}^{1}K\left(x,y\right)\left| u_{n}\left(y\right)-u\left(y\right) \right|\,d y\le M\left\| u_{n}-u \right\|_{L^{1}}   $$ 
> 故$Tu_{n}\to Tu$是一致收敛的, 进而$L^{1}$收敛. 又$\left\| Tu \right\|_{L^{1}}$连续且有正下届$m$, 可知$A\left(u_{n}\right)\to A\left(u\right)$, $A$连续.
>
> 任取$u\in C$
>  $$ \begin{aligned} \left| \left(Tu\right)\left(x_1\right)-\left(Tu\right)\left(x_2\right) \right|&\le \sup _{x_1,x_2} \left| K\left(x_1,y\right)-K\left(x_2,y\right) \right|\int _{0}^{1}u\left(y\right)\,d y\\&= \sup _{x_1,x_2}\left| K\left(x_1,y\right)-K\left(x_2,y\right) \right| \end{aligned}  $$ 
> 由于$K$关于$x$一致连续, 可见$T\left(C\right)$是等度连续的. 又$T\left(C\right)$一致有界, 由A-A定理, $T\left(C\right)$是列紧的. 进而$A\left(C\right)$是在$C\left[ 0,1 \right]$列紧. 又$C\left[ 0,1 \right]$连续地嵌入到$L^{1}\left(0,1\right)$, $A\left(C\right)$在$L^{1}$中列紧.
> 由Schauder不动点定理, 存在$u\in C$, 使得$u= A\left(u\right)$. 又$Tu$一定是连续的, 因此$u$连续.
> 令$\lambda = \left\| Tu \right\|_{L^{1}}$, 则
>  $$ Tu= \lambda u $$
> 且$u\in C\cap C\left[ 0,1 \right]$为满足条件的函数.