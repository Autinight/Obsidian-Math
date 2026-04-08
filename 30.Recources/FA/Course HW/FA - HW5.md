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
>  $$ \left\| y_{n}-x \right\|\le  \left\| y_{n}-x_{n} \right\|+ \left\| x_{n}-x \right\| $$
> 其中
>  $$ \left\| y_{n}-x_{n} \right\| = \frac{1 }{n+ 1 }\left\| x_{n} \right\|\le \frac{M }{n+ 1 }$$  
> 因此 $\lim_{n\to \infty}\left\| y_{n}-x_{n}\right\|= 0$, 又$\lim_{n\to \infty}\left\| x_{n}-x \right\|= 0$, 故$\lim_{n\to \infty}\left\| y_{n}-x \right\|= 0$. 这表明$x\in \overline{E^{\circ}}$.

> [!exercise] Exercise:
>  设Banach空间$(X,\|\cdot\|)$具有Schauder基$\{e_n\}$, 用$M$表示所有使得$\sum_{k=1}^\infty\xi_ke_k$在$X$中收敛的数列$\{\xi_k\}$的全体, 按通常方式定义线性运算构成的线性空间. 对于每一$x=\{\xi_k\}\in M$, 定义:
>
> $$\|x\|_1=\operatorname{sup}_n\left\|\sum_{k=1}^n\xi_ke_k\right\|$$
>
> 证明$(M,\|\cdot\|_1)$是Banach空间.

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

> [!exercise] Exercise: 
> 证明: 若$C$是$\mathbb{R}^n$中的一个紧凸子集, 则存在$m \le n$, 使得$C$同胚于$\mathbb{R}^m$中的单位球.

> [!exercise] Exercise: 
> 设$C$是$B$空间$X$中的一个有界闭凸集, 映射$T_1, T_2 : C \to X$满足:
> 1. $T_1x + T_2y \in C, \forall x, y \in C$;
> 2. $T_1$是一个压缩映射, $T_2$是一个**紧映射**(把有界集映为列紧集的连续映射).
> 求证: $T_1 + T_2$在$C$上至少有一个不动点.

> [!exercise] Exercise: 
> 设$K(x,y)$是$[0,1] \times [0,1]$上的正值连续函数, 定义映射
> $$T : C[0,1] \to C[0,1], \quad u(x) \mapsto (Tu)(x) = \int_0^1 K(x,y)u(y)dy.$$
> 求证: 存在$\lambda > 0$以及非负但不恒为零的连续函数$u$, 满足$Tu = \lambda u$.