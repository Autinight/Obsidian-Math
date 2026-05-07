代靖涵 25120222201319

> [!exercise] EXERCISE 
> 设 $X$ 是赋范空间，$\{x_1, x_2, \cdots, x_n\}$ 是 $X$ 中一个线性无关的点集。$\{a_1, a_2, \cdots a_n\}$ 是任意一组实数，证明存在一个有界线性泛函 $f \in X^*$，使得 $f(x_k) = a_k, \forall k = 1, 2, \cdots, n$.

> [!proof] Proof: 
> 令$Y= \operatorname{span}\left\{ x_1,\cdots ,x_{n} \right\}$, 则$Y$是$X$的一个赋范线性子空间. 定义$Y$上的线性泛函
> $$ f_0\left(\sum \lambda _{i}x_{i}\right)= \sum \lambda _{i}a_{i} $$ 
> 由于$Y$是有限维的, $f_0$在$Y$上有界. 有Hahn-Banach定理的, 子空间上的有界线性泛函可以保范数地延拓到全空间上, 因此存在$f\in X^{*}$, 使得
> $$ \left\| f \right\|= \left\| f_0 \right\| ,\quad f|_{Y}= f_0$$ 
> 因此
> $$ f\left(x_{k}\right)= f_0\left(x_{k}\right)= a_{k},\forall k= 1,\cdots,n  $$ 

> [!exercise] EXERCISE 
> 设 $X$ 是线性赋范空间，$X_0 \subset X$ 是一个闭子空间，证明：对 $\forall x \in X$，存在
> $$d(x, X_0) = \sup\{|f(x)| \mid f \in X^*, \|f\| = 1, f|_{X_0} = 0\}.$$

> [!proof] Proof: 
> 任取$f\in X^{*}$满足$\left\| f \right\|= 1, f|_{X_0}= 0$, 都有
> $$ \left| f\left(x\right) \right|= \left| f\left(x-x_0\right) \right|,\forall x_0\in X_0   $$  
> 因此
> $$ \left| f\left(x\right) \right|= \left| f\left(x-x_0\right) \right| \le \left\| f \right\|d\left(x,x_0\right) = d\left(x,X_0\right) $$ 
> 故
> $$ d\left(x,X_0\right)\ge \sup \left\{ \left| f\left(x\right) \right|: f\in X^{*}, \left\| f \right\|  = 1, f|_{X_0}= 0\right\} $$ 
> 另一方面, 我们构造线性泛函$f$, 若$x\in X_0$, 则等式显然成立, 因此下设$x\not \in X_0$, 定义$Y= X_0+ \operatorname{span}\left\{ x \right\}$, 在$Y$上, 定义
> $$ g\left(x_0+ \lambda x\right)= \lambda d\left(x,X_0\right) ,\quad x_0\in X_0, \lambda \in \mathbb{R} $$ 
> 于是任取$y_1= x_0+ \lambda _1 x, y_2=x_0^{\prime} + \lambda _2 x$, 其中$x_0,x_0^{\prime} \in X_0$, 那么
> $$ g\left(y_1+ y_2\right)= g\left(x_0+ x_0^{\prime} + \left(\lambda _1 + \lambda _2 \right)x\right)= \left(\lambda _1 + \lambda _2 \right)d\left(x,X_0\right) $$ 
> 故$g$是线性的.  因此$g$是$Y$上的线性泛函, 并且 
> $$ g|_{X_0}\left(x_0\right)= g\left(x_0\right)= 0\cdot d\left(x,X_0\right)= 0 \implies g|_{X_0}= 0$$ 
> 令$y= x_0+ \lambda x$, 若$\lambda = 0$, 则$g\left(y\right)= g\left(x_0\right)= 0$, 若$\lambda \neq 0$, 则 由于$-\frac{1 }{\lambda  }x_0\in X_0$
> $$ \left| g\left(y\right) \right| = \left| \lambda  \right|d\left(x,X_0\right)= \left| \lambda  \right|d\left(x, X_0\right)  \le \left| \lambda  \right|  \left\| x-\left(-\frac{1 }{\lambda  }\right)x_0 \right\|= \left| \lambda  \right|\left\| \frac{1 }{\lambda  }y \right\|= \left\| y \right\|    $$ 
> 因此
> $$ \left\| g \right\|\le 1 $$ 
>  由$d\left(x,X_0\right)$的定义, 任取$\varepsilon > 0$, 存在$x_0^{\varepsilon }\in X_0$, 使得$\varepsilon + d\left(x,X_0\right)\ge \left\| x-x_0^{\varepsilon } \right\|$
> 于是
> $$ \left\| g \right\|\left\| x-x_0^{\varepsilon } \right\|\ge \left| g\left(x-x_0^{\varepsilon }\right) \right|= d\left(x,X_0\right)\ge \left\| x-x_0^{\varepsilon } \right\|-\varepsilon   $$ 
> 令$\varepsilon \to 0$
> 得到
> $$ \left\| g \right\|\ge 1 $$
> 故$\left\| g \right\|= 1$.
> 通过Hahn-Banach定理, 将$g$保范数地延拓到$X$上, 记作$f$. 则
> $$ \left\| f \right\|= 1,\quad f|_{X_0} = g|_{X_0}= 0,\quad f\left(x\right)= g\left(x\right)= d\left(x,X_0\right)$$ 
> 故
> $$ \sup \left\{ \left| f\left(x\right) \right|: f\in X^{*},\left\| f \right\|= 1, f|_{X_0}  = 0\right\}\ge d\left(x,X_0\right) $$ 
> 综上, 等式成立.

> [!exercise] EXERCISE 
> 设 $\{x_n\}$ 是 $B^*$ 空间 $X$ 中的点列，如果对 $\forall f \in X^*$，数列 $\{f(x_n)\}$ 都有界，求证：$\{x_n\}$ 在 $X$ 中有界。

> [!proof] Proof: 
> 定义$X^{*}$上线性算子$T_{n}: X^{*}\to \mathbb{R}$, 
> $$ T_{n}\left(f\right)= f\left(x_{n}\right) $$ 
> 易见$T_{n}$是线性的. 由于对于每个$f$, $\left\{ f\left(x_{n}\right) \right\}$有界, 根据上面构造, 等价地, $\left\{ T_{n}\left(f\right) \right\}$有界.  由Banach-Steinhaus原理, 
> 存在$M$, 使得
> $$ \left| f\left(x_{n}\right) \right|=  \left| T_{n}\left(f\right) \right|  \le M\left\|f \right\|,\quad \forall n ,\forall  f\in X^{*}$$ 
> 将有界线性泛函$\operatorname{span}\left\{ x_{n} \right\}\to \mathbb{R}$, $\lambda x_{n}\mapsto \lambda \left\| x_{n} \right\|$保范数地延拓到$X$上, 得到$g_{n}\in X^{*}$, 则$\left\| g_{n} \right\|= 1$
> $$ g_{n}\left(x_{n}\right)= \left\| x_{n} \right\| $$ 
> 因此对于每个$n$, 取$f= g_{n}$, 得到
> $$ \left\| x_{n} \right\|= \left| f\left(x_{n}\right) \right|\le M  $$ 
> 这表明$\left\{ x_{n} \right\}$在$X$中有界.

> [!exercise] EXERCISE 
> 证明如果赋范空间中的一个有界线性泛函的保范延拓不唯一，则所有保范延拓的势不小于连续统的势。

> [!proof] Proof: 
> 设$X$是赋范线性空间,$Y\subseteq X$是子空间, $f_0$是$Y$上保范延拓不唯一的有界线性泛函.
> 任取$f_1, f_2\in X^{*}$, 是$f_0$的两个保范数延拓. 定义
> $$ f_{t}= \left(1-t\right)f_1+ tf_2 $$ 
> 则
> 1. $f_{t}|_{Y}= \left(1-t\right)f_1|_{Y}+ tf_2|_{Y}= \left(1-t\right)f+ tf= f$
> 2. $\left\| f_{t} \right\|\le \left(1-t\right)\left\| f_1 \right\|+ t\left\| f_2 \right\|= \left\| f \right\|$
> 3. $\left\| f_{t} \right\|\ge \left\| f_{t}|_{Y} \right\|= \left\| f \right\|$
> 因此$\left\| f_{t} \right\|= \left\| f \right\|$.
> 故$f_{t}$也是$f_0$的一个保范延拓. 
> 此外, 若$f_{t}= f_{s}$, 则
> $$ \left(1-t\right)f1+ tf_2= \left(1-s\right)f_1+ sf_2\implies \left(s-t\right)\left(f_2-f_1\right)= 0\implies t= s $$ 
> 这表明$\left[ 0,1 \right]\to X^{*}$, $t\mapsto f_{t}$是一个单射, 并且它把每个点映到一个保范延拓, 这表明保范延拓全体构成集合的势不小于$\mathfrak{c}$.

> [!exercise] EXERCISE
> 设 $G$ 是赋范空间 $X$ 的子空间，$x_0 \in X$，证明：$x_0 \in \overline{G}$，当且仅当对 $X$ 上任一满足
> $$f(x) = 0 \quad (x \in G)$$
> 的有界线性泛函 $f$ 必有 $f(x_0) = 0$.

> [!proof] Proof: 
> $\implies$: 若$x_0\in \overline{G}$, 则存在点列$\left\{ y_{n} \right\}\subseteq G$, 使得$y_{n}\to x_0$, 任取$f\in X^{*}$满足$f|_{G}= 0$, 则$f\left(y_{n}\right)= 0$, $\forall n$. 由$f$的连续性, 
> $$ f\left(x_0\right)= \lim_{n\to \infty}f\left(y_{n}\right)= 0 $$
> $\impliedby$: 我们证明, 若$x_0\not \in \overline{G}$, 则存在$f\in X^{*}$, 使得$f|_{G}= 0$但是$f\left(x_0\right)\neq 0$.
> 由于$\overline{G}$是闭子空间, 我们有
> $$ d\left(x_0, \overline{G}\right)> 0 $$  
> 定义$Y:= \overline{G}+ \operatorname{span}\left\{ x_0 \right\}$, 在$Y$上定义
> $$ g\left(y+ \lambda x_0\right):= \lambda d\left(x_0, \overline{G}\right) ,\quad y\in \overline{G}, \lambda \in \mathbb{F}$$ 
> 则与Exercise 2. 相同, $g|_{\overline{G}}= 0$, $g\left(x_0\right)= d\left(x_0 , \overline{G}\right)$, $\left\| g \right\|= 1$. 由Hahn-Banach定理, 将$g$保范地延拓到$X$上, 得到$f\in X^{*}$, $f$满足
> $$ f|_{G}= 0,\quad f\left(x_0\right)= d\left(x_0, \overline{G}\right)> 0 $$ 


> [!exercise] EXERCISE 
> 设 $X$ 是赋范空间，$x_k \in X (k=1, \cdots, n)$，$a_1, a_2, \cdots, a_n$ 是一组数并且满足条件：存在常数 $M$，使得对任意 $t_1, t_2, \cdots, t_n$
> $$\left|\sum_{k=1}^n t_k a_k\right| \leqslant M \left\|\sum_{k=1}^n t_k x_k\right\|.$$
> 证明存在 $X$ 上的线性泛函 $f$，使得
> 1) $f(x_k) = a_k \quad (k=1,2,\cdots,n)$;
> 2) $\|f\| \leqslant M$.

> [!proof] Proof: 
> 定义$Y= \operatorname{span}\left\{ x_1,\cdots ,x_{n} \right\}$. 定义
> $$ g\left(\sum _{k= 1}^{n}t_{k}x_{k}\right):= \sum _{k= 1}^{n}t_{k}a_{k} $$ 
> **良定义**: 若$\sum t_{k}x_{k}= \sum s_{k}x_{k}$, 则$\sum \left(t_{k}-s_{k}\right)x_{k}= 0$, 由题设可知, 令$u_{k}= t_{k}-s_{k}$, 则
> $$ \left| \sum u_{k}a_{k} \right|\le M\left\| \sum u_{k}x_{k} \right\|= 0  $$ 
> 故$\sum t_{k}a_{k}= \sum s_{k}g_{k}$, 这表明$g$是良定义的.
> 显然$g$是**线性**的. 
> 由于$\left\| g \right\|_{Y}\le M$, 可以将$g$保范地延拓到$X$上, 得到$f\in X^{*}$, 满足
> $$ \left\| f \right\|= \left\| g \right\|_{Y}\le M,\quad f\left(x_{k}\right)= g\left(x_{k}\right)= a_{k} $$ 

