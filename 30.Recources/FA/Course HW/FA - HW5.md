代靖涵 25120222201319

> [!exercise] Exercise:
   > 考虑 $B$ 空间 $C[0,1]$ 的子空间 $X=\{f\in C[0,1]\mid f(0)=0\}$, 以及
   >
   > $$X_0=\{f\in X\mid\int_0^1f(x)\,dx=0\}.$$
   >
   > 证明: 不存在 $f_0\in X\setminus X_0$, 使得 $\|f_0\|=1$ 且 $d(f_0,X_0)=1$.

> [!exercise] Exercise:
   > 设 $X$ 是赋范线性空间, $C$ 是以 $0$ 为内点的均衡的有界凸集. 证明: $C$ 的 Minkowski 泛函 $P_C$ 是 $X$ 上的一个范数.

> [!exercise] Exercise:
   > 设 $X$ 是 $B^*$ 空间, $E$ 是以 $0$ 为内点的真凸子集, $P$ 是 $E$ 的 Minkowski 泛函, 求证:
   >
   > 1. $x$ 是 $E$ 的内点当且仅当 $P(x)<1$.
   > 2. $E$ 的内部的闭包等于 $E$ 的闭包.
   
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