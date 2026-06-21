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


$$
\left| f\left(x\right) \right| \le \left\| f \right\|d\left(x,X_0\right) = d\left(x,X_0\right)
$$

Hahn-Banach, 存在$f$, 使得
$$
f\left(x\right)= f\left(x-y\right) = \left\| x-y \right\|,\quad \left\| f \right\|= 1,\quad f|_{X_0}= 0
$$

为什么$\left\| f \right\|= 1$,

$\left\| f \right\|\ge 1$
$$
\left\| f \right\|\ge \frac{\left| f\left(x-y\right) \right|  }{\left\| x-y \right\| }= 1 
$$

$f$定义在$\operatorname{ker}f+ \operatorname{span}\left\{ x \right\}$

$$
f\left(\lambda x+ X_0\right)= \lambda \left\| x \right\|\le 
$$

$$
f\left( x+ y\right)= \left\| x \right\|\ge d\left(x,X_0\right)
$$
取$y_{n}$, 使得$\lim_{n\to \infty}\left\| x+ y_{n} \right\|= d\left(x,X_0\right)$
$$
f\left(x+ y_{n}\right) = d\left(x,X_0\right)
$$

反过来,任取这样的$f$, 我们有
$$
\left| f\left(x\right) \right|\le \left| f\left(x-y\right) \right| \le \left\| f \right\|\left\| x-y \right\|= \left\| x-y \right\|,\quad \forall y\in X_0  
$$

因此
$$
\left| f\left(x\right) \right|\le \inf _{y\in X_0} \left\| x-y \right\|= d\left(x,X_0\right) 
$$
也就是说, 如果$f$在空间$X_0$上等于零, 则
$$
\left| f\left(x\right) \right| \le \left\| f \right\|\left\| x \right\| 
$$
优化为
$$
\left| f\left(x\right) \right| \le \left\| f\right\|d\left(x,X_0\right) 
$$

$$
X_0\subseteq \operatorname{ker}f\implies \left| f\left(x\right) \right|\le \left\| f\right\|d\left(x,X_0\right)  
$$

特别地,
$$
\left| f\left(x\right) \right|\le \left\| f \right\|d\left(x, \operatorname{ker}f\right)  
$$


存在$y$, 使得

$$
\left\| x-y \right\|\le d\left(x,\operatorname{ker}f\right)+ \varepsilon  
$$


$$
d\left(x,\operatorname{ker}f\right)\ge \frac{\left| f\left(x\right) \right|  }{\left\| f \right\| } 
$$

$$
d\left(x,\operatorname{ker}f\right)\le d\left(x,y\right)= \left\| x-y \right\| 
$$

$$
\frac{\left| f\left(x\right) \right|  }{\left\| f \right\| }= \frac{\left| f\left(x-y\right) \right|  }{ \left\| f \right\|}\le \left\| x-y \right\| 
$$
对于任意的$y$,$\left\| x-y \right\|\ge \frac{\left| f\left(x\right) \right|  }{ \left\| f \right\|}$
于是
$$
d\left(x,\operatorname{ker}f\right) \ge \frac{\left| f\left(x\right) \right|  }{\left\| f \right\| }
$$

存在点列$y_{n}\in \operatorname{ker}f$, 使得
$$
\lim_{n\to \infty}d\left(x,y_{n}\right) = d\left(x, \operatorname{ker}f\right)
$$
则
$$
d\left(x,y_{n}\right) 
$$




$f$连续当且仅当$\operatorname{ker}f$是闭的.

反过来呢, 是否存在$x\not \in \operatorname{ker}f$, 使得$\left| f\left(x\right) \right|= \left\| x \right\|$,

$x$垂直于$\operatorname{ker}f$的那个方向, 如果X是Hilbert空间, 非常好找, 只需要分解
$$
M= \operatorname{ker}f\oplus \left(\operatorname{ker}f\right)^{\perp} 
$$

则$\left(\operatorname{ker}f\right)^{\perp}$是一维的子空间,  

存在$F$, 使得
$$
F\left(f\right) = \left\| f \right\|,\quad \left\| F \right\|= 1
$$
如果空间是自反的, 则存在$x$, 使得
$$
f\left(x\right) = \left\| f \right\|,\quad \left\| x \right\|= 1
$$

那么
$$
\left\| f \right\| 
$$


问$d\left(x,X_0\right)$是不是等于

任取$x\in X$, 由于$X_0$是闭子空间, 存在$f\in X^{*}$, 使得
$$
f|_{X_0}= 0,\quad f\left(x\right)= \left\| x \right\|,\quad \left\| f \right\|= 1 
$$


$f$代表$X_0$上为零, 但是有方向的. 用$x$代表一个$f$.

任取$y\in X_0$, 证明$d\left(x,y\right)$

首先证明$d\left(x,X_0\right)\le \sup \left\{  \right\}$


任取$y\in X_0$, 
$$
d\left(x,y\right)= \left\| x-y \right\| 
$$

由于$x\not \in X_0$, $x-y\not \in X_0$, 由Hahn-Banach定理, 存在$f$,  使得

$$
f|_{X_0}= 0,\quad f\left(x-y\right)= \left\| x-y \right\|,\quad \left\| f \right\|= 1 
$$

赋范线性空间, 闭子空间上的有界线性泛函可以延拓
闭子空间上,

于是
$$
d\left(x,y\right)= \left\| x-y \right\|= f\left(x-y\right)= f\left(x\right)= \left| f\left(x\right) \right|  
$$

因此
$$
d\left(x,X_0\right)\le d\left(x,y\right)\le \left| f\left(x\right) \right|\le \sup \left\{  \right\}  
$$

是否$\left\| f \right\|= 1?$,



$$
f\left(\lambda x+ X_0\right) = \lambda 
$$

任取$\varepsilon > 0$, 存在$z$, 使得
$$
\left| f\left(z\right) \right|> \left(\left\| f \right\|-\varepsilon \right) \left\| z \right\| 
$$
令
$$
y=  x-\frac{f\left(x\right) }{f\left(z\right) }z
$$

则$y\in \operatorname{ker}f$, 我们有
$$
\left\| x-y \right\|= \left\| \frac{f\left(x\right) }{ f\left(z\right)} z\right\|= \frac{\left| f\left(x\right) \right|  }{\left| f\left(z\right) \right|  }\left\| z \right\|< \frac{\left| f\left(x\right) \right|  }{\left\| f \right\|-\varepsilon  } 
$$

于是
$$
d\left(x,\operatorname{ker}f\right)\le \left\| x-y \right\|< \frac{f\left(x\right) }{\left\| f \right\|-\varepsilon  } 
$$
一个是取点列, 使得
$$
d\left(x,y_{n}\right) \to d\left(x,\operatorname{ker}f\right)
$$
一个是取点列, 使得
$$
\lim_{n\to \infty}\left| f\left(y_{n}\right) \right| = \left\| f \right\|\left\| y_{n} \right\| 
$$


设$M$是赋范线性空间$X$上的闭子空间, $x\not \in M$, 证明存在$f\in X^{*}$, 使得
$$
f|_{M}= 0,\quad f\left(x\right)= d\left(x,X_0\right),\quad \left\| f \right\|= 1 
$$
> [!exercise] EXERCISE 
> 设 $\{x_n\}$ 是 $B^*$ 空间 $X$ 中的点列，如果对 $\forall f \in X^*$，数列 $\{f(x_n)\}$ 都有界，求证：$\{x_n\}$ 在 $X$ 中有界。

Banach-Steinhause
> [!exercise] EXERCISE 
> 证明如果赋范空间中的一个有界线性泛函的保范延拓不唯一，则所有保范延拓的势不小于连续统的势。

保范延拓的全体是凸的o.

> [!exercise] EXERCISE
> 设 $G$ 是赋范空间 $X$ 的子空间，$x_0 \in X$，证明：$x_0 \in \overline{G}$，当且仅当对 $X$ 上任一满足
> $$f(x) = 0 \quad (x \in G)$$
> 的有界线性泛函 $f$ 必有 $f(x_0) = 0$.

证明如果零化$G$闭零花$x_0$, 则$x_0\in \overline{G}$.

若$x_0\not \in \overline{G}$, 存在$f$, 使得
$$
f|_{\overline{G}}= 0,\quad f\left(x_0\right)= d\left(x_0, \overline{G}\right),quad 
$$

由于$\overline{G}$是闭的, $x_0\not \in \overline{G}$, $d\left(x_0, \overline{G}\right)> 0$. 于是$f|_{G}= 0$ 但是$f\left(x_0\right)> 0$, 矛盾.

> [!exercise] EXERCISE 
> 设 $X$ 是赋范空间，$x_k \in X (k=1, \cdots, n)$，$a_1, a_2, \cdots, a_n$ 是一组数并且满足条件：存在常数 $M$，使得对任意 $t_1, t_2, \cdots, t_n$
> $$\left|\sum_{k=1}^n t_k a_k\right| \leqslant M \left\|\sum_{k=1}^n t_k x_k\right\|.$$
> 证明存在 $X$ 上的线性泛函 $f$，使得
> 1) $f(x_k) = a_k \quad (k=1,2,\cdots,n)$;
> 2) $\|f\| \leqslant M$.


定义
$$
f\left(\sum _{k = 1}^{n}t_{k}x_{k}\right)= \sum _{k= 1}^{n}t_{k}a_{k} 
$$
则
$$
f\left(x_{k}\right)= a_{k} 
$$

$f$是线性的. 
$$
\left| f\left(x\right) \right|\le M\left\| x \right\|  
$$
$\left\| f \right\|\le M$
有Hahn-Banach定理.

对于$1\le p< \infty$, 证明
$$
\left(L^{p}\left[ 0,1 \right]\right)^{*}= L^{q}\left[ 0,1 \right] 
$$

对于每个$y\in L^{q}$, 定义 $F_{y}: L^{p}\to \mathbb{R}$
$$
F_{y}\left(x\right)= \int _{0}^{1}x\left(t\right)y\left(t\right)\,d t 
$$
则
$$
\left| F_{y}\left(x\right) \right|\le \left\| x \right\|_{L^{p}}\left\| y \right\|_{L^{q}}  
$$
于是
$$
\left\| F_{y} \right\|= \left\| y \right\|_{L^{q}} 
$$

$F_{y}$是有界线性泛函.

另一方面, 

$$
\frac{1 }{p }+ \frac{1 }{q }= 1,\quad p+ q= pq\implies  
$$
令
$$
\left\| x^{p-1} \right\|_{L^{q}}= \left(\int _{0}^{1}x^{\left(p-1\right)q}\right)^{\frac{1}{q}}= \left\| x \right\|_{p}^{\frac{p }{ q}}< \infty
$$
于是$x^{p-1}\in L^{q}$.
取$x=\operatorname{sgn}\left(y\right) y^{\left(q-1\right)}$, 则
$$
F_{y}\left(\operatorname{sgn}\left(y\right)y^{\left(q-1\right)}\right)=  \left\| y \right\|_{L^{q}}^{q}
$$
$$
\left\| \operatorname{sgn}\left(y\right) y^{\left(q-1\right)}\right\|= \left\| y \right\|_{L^{q}}^{\frac{q }{ p}} 
$$
于是
$$
F_{y}\left(x\right)=\left\| y \right\|^{\frac{q}{p}}\left\| y \right\|^{q-\frac{q }{ p}}= \left\| x \right\|\left\| y \right\|
$$
于是
$$
\left\| F_{y} \right\|\ge \frac{F_{y}\left(x\right) }{\left\| x \right\| }= \left\| y \right\| 
$$
于是
$$
\left\| F_{y} \right\|= \left\| y \right\| 
$$

$$
L^{q}\left[ 0,1 \right]\mapsto \left(L^{p}\right) ^{*}
$$
是等距映射.

若
$$
F_{y_1}= F_{y_2}, 则 \int _{0}^{1}x\left(t\right)\left(y_1-y_2\right)\left(t\right)\,d t= 0,\implies y_1= y_2= 0,a.e. 
$$
于是
$y\mapsto F_{y}$是单射.

若
$\nu ,\mu$是两个sigma-有限测度, $\nu$关于$\mu$绝对连续.

$$
\mu \left(E\right)= 0\implies \nu \left(E\right)= 0 
$$

存在$\mu$-可测函数$g$, 使得
$$
\nu \left(E\right)= \int _{E}g\left(x\right)\,d \mu  
$$

定义
$$
\nu \left(E\right)= F\left(\chi _{E}\right) 
$$
其中$F$是有界线性泛函.  易见$\nu$是有限可加的.
并且$\nu$对递减列封闭.

$$
\nu \left(E\right)\le \left\| F \right\|\left\| \chi _{E} \right\|= \left\| F \right\|\mu \left(E_{n}\right) ^{\frac{1}{p}}
$$

$\nu \left(E\right)= F\left(\chi _{E}\right)$定义了一个测度.

证明有限可加, 加递减于零的列封闭.

然后证明关于$\mu \left(E\right)$绝对连续.

然后应用Radon-Nikodym定理,

存在可测函数$g$, 使得
$$
\nu \left(E\right)= \int _{E}g\,d \mu  
$$

$$
F\left(\chi _{E}\right)= \int _{0}^{1}\chi _{E}\left(x\right)g\left(x\right)\,d \mu  
$$
于是
$$
F\left(f\right)= \int _{0}^{1}f\left(x\right)g\left(x\right)\,d \mu  
$$
对于简单函数成立.

简单函数列在$L^{p}$中稠密, 于是

$$
F\left(f\right)= \lim_{n\to \infty}F\left(f_{n}\right) 
$$
但这需要$F$连续, 确实连续.

但是接下来证明
$$
\lim_{n\to \infty}F\left(f_{n}\right) = \int _{0}^{1}f\left(x\right)g\left(x\right)\,d \mu 
$$
我们需要控制收敛定理, 从而需要$g\in L^{q}$.


需要证明两种情况的

$$
\left\| g \right\|_{L^{q}} \le \left\| F \right\|
$$

由于暂时没有可积性, 但是还要证明$L^{q}$范数小于等于$\left\| F \right\|$, 于是我们有$E_{t}= \left\{ \left| g \right| \le t \right\}$来截断一下, 获得可积性以便于控制, 然后再单调收敛定理说明真正的可积性.
所以这个操作的理由是,单调收敛定理不需要可积性, 而是一种先验式的估计.

$$
f= \chi _{E_{t}}\left| g \right|^{q-2}\bar{g}  
$$
于是$p= 1$的情况, 

我们证明
$$
\left\| g \right\|_{L^{\infty}}\le \left\| F \right\| 
$$
这需要说明
$$
A= \left\{ x\in \left[ 0,1 \right] : \left| g\left(x\right) \right|> \left\| F \right\|+ \varepsilon  \right\} 
$$
对于任意的$\varepsilon > 0$都是零测的.

我们仍然需要截断, $\chi _{E_{t}}\cap A$, 证明这个集合零测, 
$$
f= \chi _{E_{t}\cap A}\operatorname{sgn}\bar{g} 
$$
$$
f= \chi _{E_{t}\cap A}\frac{g }{\left| g \right|  }
$$

$$
F\left(f\right)= \int _{E_{t}\cap A}\left| g \right|\ge \left(\left\| F \right\|+ \varepsilon \right) \mu \left(E_{t}\cap A\right)
$$
$$
F\left(f\right)\le \left\| F \right\|\left\| f \right\|= \left\| F \right\|\mu \left(E_{t}\cap A\right)
$$

$$
\mu \left(E_{t}\cap A\right)\left(\left\| F \right\|+ \varepsilon \right) \le \mu \left(E_{t}\cap A\right)\left\| F \right\|
$$

> [!exercise] 1
> 证明
> $$
> (C[a,b])^*=V_0[a,b].
> $$


任取$\alpha \in V_0\left[ a,b \right]$, 则$\alpha$分解为两个单调递增函数之差
$$
\alpha = \alpha ^{+ }-\alpha ^{-} 
$$

定义
