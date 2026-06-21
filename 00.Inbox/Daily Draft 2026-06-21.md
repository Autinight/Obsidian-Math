### 09:44

> [!exercise] EXERCISE 
> 设 $X$ 是赋范空间，$\{x_1, x_2, \cdots, x_n\}$ 是 $X$ 中一个线性无关的点集。$\{a_1, a_2, \cdots a_n\}$ 是任意一组实数，证明存在一个有界线性泛函 $f \in X^*$，使得 $f(x_k) = a_k, \forall k = 1, 2, \cdots, n$.

在$\operatorname{span}\left\{ a_1,\cdots,a_n  \right\}$上定义
$$ f\left(\sum \eta _{k}x_{k}\right)= \sum \eta _{k}a_{k} $$
显然$f$是有限维空间上的线性映射, 故而是$\operatorname{span}\left\{ a_1,\cdots ,a_{n} \right\}$上的有界线性泛函. 有Hahn-Banach定理, 存在$\tilde{f}\in X^{*}$, 使得
$$ \tilde{f}|_{\operatorname{span}\left\{ a_1,\cdots ,a_{n} \right\}}= f $$
于是
$$ \tilde{f}\left(x_{k}\right)= a_{k} $$  
> [!exercise] EXERCISE 
> 设 $X$ 是线性赋范空间，$X_0 \subset X$ 是一个闭子空间，证明：对 $\forall x \in X$，存在
> $$d(x, X_0) = \sup\{|f(x)| \mid f \in X^*, \|f\| = 1, f|_{X_0} = 0\}.$$

问$d\left(x,X_0\right)$是不是等于

任取$x\in X$, 由于$X_0$是闭子空间, 存在$f\in X^{*}$, 使得
$$
f|_{X_0}= 0,\quad f\left(x\right)= \left\| x \right\|,\quad \left\| f \right\|= 1 
$$


$f$代表$X_0$上为零, 但是有方向的. 用$x$代表一个$f$.

任取$y\in X_0$, 证明$d\left(x,y\right)$

首先证明$d\left(x,X_0\right)\le \sup \left\{  \right\}$

