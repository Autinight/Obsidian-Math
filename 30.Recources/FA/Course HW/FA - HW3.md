代靖涵 25120222201319

> [!exercise] Exercise:
> 证明集合 $E=\{\sin nt\}_{n=1}^{\infty}$ 在 $C[0,\pi]$ 中有界但不完全有界.

> [!proof] Proof: 
> 显然, 对于任意的$n\in \mathbb{Z} _{\ge 1}$, $t\in \left[ 0,\pi  \right]$, 都有
>  $$ \left| \sin nt \right|\le 1  $$
> 故$E$在一致范数下有界.
>
> 反证: 如果$E$是完全有界的, 则存在$E$的一个子集 $A$, 使得$A$是$E$的有限$\frac{1}{2}$-网. 那么特别地, 存在某个$\sin m_0t\in A$, 使得对于无穷多个$\sin nt\in E$, 都有
>  $$ d\left(\sin m_0t, \sin n_{k}t\right)= \max _{t\in \left[ 0,\pi  \right]} \left| \sin m_0t-\sin nt \right| < \frac{1}{2} $$ 
> 把这无穷多个函数写成一个子列$\left\{ \sin n_{k}t \right\}_{k= 1}^{\infty}\subseteq E$
> 
> 对于$n_{k}> m_0$, 取$t= \frac{\pi  }{2\left(n_{k}-m_0\right)  }$, 则
>  $$ \begin{aligned} \left| \sin n_{k}t - \sin m_0t \right|&= \left| 2\cos \left(\frac{n_{k}+ m_0 }{2  }t\right) \sin \left(\frac{n_{k}-m_0 }{2  }t\right)\right|\\&= \left| 2\cos \left(\frac{n_{k}+ m_0 }{n_{k}-m_0 }\frac{\pi  }{4 }\right)\sin \left(\frac{\pi  }{4 }\right) \right| \\&= \sqrt{2}\left| \cos \left(\frac{n_{k}+ m_0 }{n_{k}-m_0 }\frac{\pi  }{4 }\right) \right|  \end{aligned}  $$ 
> 因此
>  $$ d\left(\sin n_{k}t, \sin m_0t\right)\ge  \sqrt{2}\left| \cos \left(\frac{n_{k}+ m_0 }{n_{k}-m_0 }\frac{\pi  }{4 }\right) \right|  $$ 
> 由于$\lim_{k\to \infty}\frac{n_{k}+ m_0 }{n_{k}-m_0 }= 1$, 我们有
>  $$ \limsup_{k\to \infty}d\left(\sin n_{k}t ,\sin m_0t\right)\ge 1  $$ 
> 这与$d\left(\sin m_0t,\sin n_{k}t\right)< \frac{1 }{2 }$矛盾.
> 因此$E$不是完全有界的.

> [!exercise] Exercise:
> 设 $A,B$ 是度量空间 $(X,d)$ 中的两个紧集, 证明: $\exists x_0\in A,y_0\in B$ 使得
> $$
> d(x_0,y_0)=d(A,B):=\inf\{d(x,y)\mid x\in A,y\in B\}.
> $$

> [!proof] Proof: 
> 令
>  $$ \lambda = d\left(A,B\right)= \inf \left\{ d\left(x,y\right):x\in A,y\in B \right\} $$ 
> 令
>  $$ \mu = \inf _{x\in A}\left\{ d\left(x,B\right) \right\} $$ 
> 任取$\varepsilon > 0$, 存在$x_1\in A,y_1\in B$, 使得 $\lambda + \varepsilon \ge d\left(x_1,y_1\right)$, 于是
>  $$ \lambda + \varepsilon  \ge d\left(x_1,y_1\right)\ge d\left(x_1,B\right)\ge \inf _{x\in A}\left\{ d\left(x,B\right) \right\}= \mu $$
> 故$\lambda \ge \mu$. 另一方面, 存在$x_2\in A$, 使得
>  $$ \mu + \frac{\varepsilon  }{2 }\ge d\left(x_2,A\right) $$ 
> 存在$y_2\in B$, 使得
>  $$ d\left(x_2,A\right)+ \frac{\varepsilon  }{2 }\ge d\left(x_2,y_2\right) $$
> 于是
>  $$ \mu + \varepsilon \ge d\left(x_2,y_2\right)\ge \inf \left\{ d\left(x,y\right):x\in A,y\in B \right\}= \lambda  $$
> 因此$\lambda = \mu$.
>
> 注意到
>  $$ A\to \mathbb{R} ,\quad x\mapsto d\left(x,B\right) $$
> 是紧集上的连续函数, 故存在$x_0\in A$, 使得
>  $$ d\left(x_0,B\right)= \inf _{x\in A}\left\{ d\left(x,B\right) \right\}= \mu  $$  
> 此外, 
>  $$ B\mapsto \mathbb{R} ,\quad y\mapsto d\left(x_0,y\right) $$ 
> 也是紧集上的连续函数, 故存在$y_0\in B$, 使得
>  $$ d\left(x_0,y_0\right)= \inf \left\{ d\left(x_0,y\right):y\in B \right\}= d\left(x_0,B\right)= \mu  $$ 
> 因此
>  $$ d\left(x_0,y_0\right)= \mu = \lambda = d\left(A,B\right) $$ 

> [!exercise] Exercise:
> 证明 $l^2$ 空间中的 Arzela-Ascoli 定理: $l^2$ 空间中的集合 $M$ 是列紧的, 当且仅当 $M$ 满足以下两个条件:
> 
> 1. $M$ 有界.
> 2. 级数集
> $$
> \left\{\sum_{n=1}^{\infty}|x_n|^2\mid x=\{x_n\}\in M\right\}
> $$
> 等度连续, 即 $\forall\varepsilon>0,\exists N=N(\varepsilon)\in\mathbb{N}$, 使得对每一个 $x=\{x_n\}\in M$, 当 $n\ge N$ 时, 都有
> $$
> \sum_{k=n}^{\infty}|x_k|^2<\varepsilon.
> $$

> [!proof] Proof: 
> **若$M$是列紧的**:
> 则由于$\ell ^{2}$在$d\left(x,y\right)= \left(\sum _{n = 1}^{\infty}\left| x_{n}-y_{n} \right|^{2}\right)^{\frac{1}{2}}$下构成度量空间. 由度量空间上列紧集的等价刻画, $M$是完全有界的, 特别地也是有界的.
> 接下来, 说明级数集等度连续. 任取$\varepsilon > 0$, 存在$A\subseteq M$, 使得$A$构成$M$的一个有限$\frac{1}{2}\varepsilon ^{\frac{1}{2}}$-网, 记作$A= \left\{ \mathbf{x}^{\left(1\right)} ,\cdots ,\mathbf{x}^{\left(k\right)}\right\}$. 由于级数$\sum _{n = 1}^{\infty}\left| x_{n}^{\left(k\right)} \right|^{2}$收敛,  存在$N_{k}$, 使得当$n\ge N_{k}$时, 都有
>  $$ \sum _{m= n}^{\infty}\left| x_{m}^{\left(k\right)} \right|^{2}<\left( \frac{1 }{2 }\varepsilon^{\frac{1}{2}} \right)^{2}  $$
> 取$N= \max\left\{ N_1,\cdots ,N_{k} \right\}$. 任取$\mathbf{x}\in M$, 存在$\mathbf{x}^{\left(k_0\right)}\in A$, 使得 $d\left(\mathbf{x},\mathbf{x}^{\left(k_0\right)}\right)<\frac{1}{2}\varepsilon ^{\frac{1}{2}}$. 那么对于任意的$n\ge N$, 我们有
> 
>  $$ \begin{aligned} \left(\sum _{m = n}^{\infty}\left| x_{m} \right|^{2}\right)^{\frac{1}{2}}&\le \left(\sum _{m = n}^{\infty}\left| x_{m}^{\left(k_0\right)} \right|^{2} \right)^{\frac{1}{2}}+ \left(\sum _{m = n}^{\infty}\left| x_{m}^{\left(k_0\right)}-x_{m} \right|^{2} \right)^{\frac{1}{2}} \\&\le   \left(\sum _{m = n}^{\infty}\left| x_{m}^{\left(k_0\right)} \right|^{2} \right)^{\frac{1}{2}}+ \left(d\left(\mathbf{x},\mathbf{x}^{\left(k_0\right)}\right)\right) \\&< \frac{1}{2}\varepsilon^{\frac{1}{2}} + \frac{1}{2}\varepsilon^{\frac{1}{2}}= \varepsilon ^{\frac{1}{2}} \end{aligned}$$ 
> 因此
>  $$ \sum _{m = n}^{\infty}\left| x_{m} \right|^{2}< \varepsilon  $$ 
> 这表明$M$的级数集等度连续的.
> 
> **若$M$有界且级数集等度连续**: 任取$\varepsilon > 0$, 存在$N= N\left(\varepsilon \right)$, 使得每一个$\mathbf{x}\in M$, 当$n\ge N$, 都有
>  $$ \sum _{m= n}^{\infty}\left| x_{m} \right|^{2}< \left(\frac{1}{2}\varepsilon \right)^{2}$$ 
> 通过将$\left(x_1,\cdots ,x_{N}\right)\in \mathbb{R} ^{N}$与$\left(x^{1},\cdots ,x_{N},0,\cdots \right)\in \ell ^{2}$等同, $\mathbb{R} ^{N}$保范数地嵌入到$\ell ^{2}$中. 
> 考虑投影映射$P:\ell ^{2}\to \mathbb{R} ^{N}\subseteq \ell ^{2}$, 
>  $$ P\left(\left(x_{k}\right)_{k\in \mathbb{N} }\right)= \left(x_1,\cdots ,x_{N},0,\cdots \right) $$ 
>则
>  $$ \left\| P\left(\mathbf{x}\right) \right\|_{\ell ^{2}} \le \left\| \mathbf{x} \right\|_{\ell ^{2}}$$ 
> 因此由$M$是有界集可知, $P\left(M\right)$也是有界集. 而$\mathbb{R} ^{N}$中的有界集是完全有界的. 故存在$P\left(M\right)$的一个有限$\frac{1}{2}\varepsilon$-网, 记作$A\subseteq P\left(M\right)$, $A= \left\{ \mathbf{x}^{\left(1\right)},\cdots ,\mathbf{x}^{\left(k\right)} \right\}$. 任取$\mathbf{x}\in M$,  记$\mathbf{y}= P\left(\mathbf{x}\right)$, 存在$\mathbf{x}^{\left(k\right)}\in A$, 使得
>  $$ d\left(\mathbf{x}^{\left(k\right)},\mathbf{y}\right)< \frac{1}{2}\varepsilon  $$ 
> 又
>  $$ d\left(\mathbf{y}, \mathbf{x}\right) = \left(\sum _{n = N+ 1}^{\infty}\left| x_{n} \right|^{2}\right)^{\frac{1}{2}}< \frac{1}{2}\varepsilon  $$ 
> 故
>  $$ d\left(\mathbf{x}^{\left(k\right)},\mathbf{x}\right)\le d\left(\mathbf{x}^{\left(k\right)},\mathbf{y}\right)+ d\left(\mathbf{x},\mathbf{y}\right) < \varepsilon $$
> 这表明$A$是$M$的一个有限$\varepsilon$-网. 因此$M$是完全有界的.  由于完备度量空间中, 完全有界的集合是列紧的, 因此$M$是列紧的.



> [!exercise] Exercise:  
> 设 $\Omega\subset\mathbb{R}^n$ 是一个有界连通开集, $k\in\mathbb{N}$, $0<\theta\le 1$. 对任意函数 $u:\Omega\to\mathbb{R}$, 定义  
> $$[u]_{C^{0,\theta}(\overline{\Omega})}:=\sup_{x,y\in\Omega,x\ne y}\frac{|u(x)-u(y)|}{|x-y|^{\theta}}.$$  
> 定义 Hölder 空间 $C^{k,\theta}(\overline{\Omega})$ 为 $C^k(\overline{\Omega})$ 中满足下列范数有限的所有函数组成的空间  
> $$\|u\|_{C^{k,\theta}(\overline{\Omega})}=\sum_{|\alpha|\le k}\|\partial^\alpha u\|_{C^0(\overline{\Omega})}+\sum_{|\alpha|=k}[D^\alpha u]_{C^{0,\theta}(\overline{\Omega})}.$$  
> 证明 $C^{k,\theta}(\overline{\Omega})$ 是一个 Banach 空间.  

> [!proof] Proof: 
> **$\left[ \cdot  \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}$是一个半范数**: 
>  -  $$ \left[ \lambda u \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}= \sup _{x,y\in \Omega ,x\neq y}\frac{\left| \lambda u\left(x\right) -\lambda u\left(y\right)\right|  }{\left| x-y \right|^{\theta }  }= \left| \lambda \right|  \sup _{x,y\in \Omega x\neq y}\frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\theta }  }= \left| \lambda \right|  \left[ u \right]_{C^{\left(0,\theta \right)}\left(\overline{\Omega}\right)}  $$
>  -  $$ \begin{aligned} \left[ u_1+ u_2 \right]_{C^{0,\theta }\left(\overline{\Omega}\right)} &= \sup _{x,y\in \Omega ,x\neq y}\frac{\left| u_1\left(x\right)+ u_2\left(x\right)-u_1\left(y\right)+ u_2\left(y\right) \right|  }{ \left| x-y \right| ^{\theta }}\\&\le \sup _{x,y\in \Omega ,x\neq y}\frac{\left| u_1\left(x\right)-u_1\left(y\right) \right|+ \left| u_2\left(x\right)-u_2\left(y\right) \right|   }{\left| x-y \right|^{\theta }  } \\&\le \sup _{x,y\in \Omega ,x\neq y}\frac{\left| u_1\left(x\right)-u_1\left(y\right) \right|  }{ \left| x-y \right|^{\theta } }+ \sup _{x,y\in \Omega ,x\neq y}\frac{\left| u_2\left(y\right)-u_2\left(y\right) \right|  }{\left| x-y \right|^{\theta }  }\\&= \left[ u_1 \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}+ \left[ u_2 \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}\end{aligned}$$  
>
> 
> **$\left\| u \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}$是一个范数**
>  1.  $$ \left\| u \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}= 0\implies \left\| u \right\|_{C^{0}\left(\overline{\Omega}\right)}= 0\implies u= 0 $$
>  2.  $$ \begin{aligned} \left\| \lambda u \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}&= \sum _{\left| \alpha  \right|\le k }\left\| \lambda \partial ^{\alpha }u \right\|_{C^{0}\left(\overline{\Omega}\right)}+ \sum _{\left| \alpha  \right|= k }\left[ \lambda D^{\alpha }u \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}\\&= \left| \lambda  \right| \sum _{\left| \alpha  \right|\le k }\left\| \partial ^{\alpha }u \right\|_{C^{0}\left(\overline{\Omega}\right)}+ \left| \lambda  \right| \sum _{\left| \alpha  \right|= k }\left[ \lambda D^{\alpha }u \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}\\&= \left| \lambda  \right| \left\| u \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)} \end{aligned} $$ 
> 3.  $$ \begin{aligned}&\left\| u_1+ u_2 \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}\\&= \sum _{\left| \alpha  \right|\le k }\left\| \partial ^{\alpha }u_1+ \partial ^{\alpha }u_2 \right\|_{C^{0}\left(\overline{\Omega}\right)}+ \sum _{\left| \alpha  \right|= k }\left[ D^{\alpha }u_1+ D^{\alpha }u_2 \right]_{C^{0,\theta }\left(\overline{\Omega}\right)}\\&\le\sum _{\left| \alpha  \right|\le k }\left(\left\| \partial ^{\alpha }u_1 \right\|_{C^{0}\left(\overline{\Omega}\right)}+ \left\| \partial ^{\alpha }u_2 \right\|_{C^{0}\left(\overline{\Omega}\right)}\right)+ \sum _{\left| \alpha  \right| = k}[D^{\alpha }u_1]_{C^{0,\theta }\left(\overline{\Omega}\right)}+ \left[ D^{\alpha }u_2 \right] _{C^{0,\theta }\left(\overline{\Omega}\right)}\\&= \left\| u_1 \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}+ \left\| u_2 \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}\end{aligned} $$ 
> 
> **寻找候选收敛点, 并化为$C^{0,\theta }$的完备性问题**: 任取$C^{k,\theta }\left(\overline{\Omega}\right)$上的Cauchy列$\left\{ u_{m} \right\}$, 则对于任意的$\left| \alpha  \right|\le k$, 由于 $\left\| \partial ^{\alpha }u \right\|_{C^{0}\left(\overline{\Omega}\right)}\le \left\| u \right\|_{C^{k,\theta }\left(\overline{\Omega}\right)}$, $\left\{ \partial ^{\alpha }u_{m} \right\}$在$\left\| \cdot  \right\|_{C^{0}\left(\overline{\Omega}\right)}$也是Cauchy的. 由于$\left(C^{0}\left(\overline{\Omega}\right),\left\| \cdot  \right\|_{C^{0}\left(\overline{\Omega}\right)}\right)$是Banach空间, 存在$u^{\left(\alpha \right)}\in C^{0}\left(\overline{\Omega}\right)$, 使得 
>  $$ \lim_{m\to \infty}\left\|\partial ^{\alpha }u _{m}-u^{\left(\alpha \right)}\right\|_{C^{0}\left(\overline{\Omega}\right)}= 0 $$ 
> 特别地, 记$u= u^{\left(0\right)}$, 由导数的一致收敛性定理, 归纳可得$u\in C^{k}\left(\overline{\Omega}\right)$, $\partial ^{\alpha }u= u^{\left(\alpha \right)}$. 一旦$C^{0,\theta  }\left(\overline{\Omega}\right)$是Banach空间,  立刻有$D^{\beta  }u_{m}$是$\left\| \cdot  \right\|_{C^{0,\theta }\left(\overline{\Omega}\right)}$-收敛于$D^{\beta }u$的, $\left| \beta  \right|= k$, 那么此时$\limsup_{m\to \infty}\left\| u-u_{m} \right\|\le \lim_{m\to \infty}\left(\sum _{k\le \left| \alpha  \right|}\left\| \partial ^{\alpha }u-u^{\left(\alpha \right)} \right\|_{C^{0}\left(\overline{\Omega}\right)}+ \sum _{\left| \beta  \right|= k }\left\| D^{\beta }u-D^{\beta }u_{m}  \right\|_{C^{0,\theta }}\right)= 0$.  因此只需要证明$C^{0,\theta }\left(\overline{\Omega}\right)$是Banach空间.
>
> **证明$C^{0,\theta }\left(\overline{\Omega}\right)$是Banach的**:取$C^{0,\theta }\left(\overline{\Omega}\right)$上的Cauchy列$\left\{ u_{m} \right\}$. 则$\left\{ u_{m} \right\}$是$\left\| \cdot  \right\|_{C^{0}\left(\overline{\Omega}\right)}$下的Cauchy列. 从而存在$u\in C^{0}\left(\overline{\Omega}\right)$, 使得  
> $$\lim_{m\to \infty}\left\| u_{m}-u \right\|_{C^{0}\left(\overline{\Omega}\right)}= 0$$   
> 为了说明$\left\{ u_{m} \right\}$在$C^{0,\theta }\left(\overline{\Omega}\right)$也收敛于$u$, 只需要再说明$\lim_{m\to \infty}[u_{m}-u]_{C^{0,\theta }\left(\overline{\Omega}\right)}= 0$.
> 
> 注意到, 对于任意的$\varepsilon > 0$, 存在$N$, 使得当$m,n> N$, 就有
>  $$ [u_{m}-u_{n}]_{C^{0,\theta }\left(\overline{\Omega}\right)}< \varepsilon  $$
> 即对于任意的$x\neq y$, 都有
>  $$  \frac{\left| \left(u_{m}\left(x\right)-u_{n}\left(x\right)\right) -\left(u_{m}\left(y\right)-u_{n}\left(y\right)\right)\right|  }{ \left| x-y \right|^{\theta } }< \varepsilon  $$  
> 令$n\to \infty$, 得到
>  $$  \frac{\left| \left(u_{m}-u\right)\left(x\right)-\left(u_{m}-u\right)\left(y\right) \right|  }{ \left| x-y \right|^{\theta } }\le \varepsilon    $$ 
> 即
>  $$ [u_{m}-u]_{C^{0,\theta }\left(\overline{\Omega}\right)}\le \varepsilon  $$
> 这表明
>  $$ \lim_{m\to \infty}[u_{m}-u]_{C^{0,\theta }\left(\overline{\Omega}\right)} = 0$$  
> 故$\left\{ u_{m} \right\}$在$C^{0,\theta }\left(\overline{\Omega}\right)$中收敛于$u$.

> [!exercise] Exercise:  
> 在 $C^1[a,b]$ 中定义范数  
> $$\|x\|=\left(\int_a^b\left(|x(t)|^2+|x'(t)|^2\right)\,dt\right)^{1/2},\quad \forall x=x(t)\in C^1[a,b].$$  
> 证明 $(C^1[a,b],\|\cdot\|)$ 是一个赋范线性空间, 但不是完备空间.

> [!proof] Proof: 
> 显然$\left\| x \right\|\ge 0$, 若$\left\| x \right\|= 0$, 则特别地
>  $$ \int _{a}^{b}\left| x\left(t\right) \right|^{2}\,d t\le \left\| x \right\|^{2}= 0\implies x\equiv 0  $$ 
>  $$ \left\| \lambda x \right\| = \left(\int _{a}^{b}\left(\lambda ^{2}\left| x\left(t\right) \right|^{2}+ \lambda ^{2}\left| x^{\prime} \left(t\right) \right|^{2}  \right)\right)^{\frac{1}{2}}= \left| \lambda  \right|\left(\int _{a}^{b}\left| x\left(t\right) \right|^{2}+ \left| x^{\prime} \left(t\right) \right|^{2}\right)^{\frac{1}{2}}= \left| \lambda  \right|\left\| x \right\|    $$ 
> 令
> $$
> F_x:[a,b]\to \mathbb R^2,\qquad F_x(t)=(x(t),x'(t)).
> $$
> 则
> $$
> \|x\|
> =\left(\int_a^b |F_x(t)|^2\,dt\right)^{1/2}
> =\|F_x\|_{L^2([a,b];\mathbb R^2)}.
> $$
> 对任意 $x,y\in C^1[a,b]$,
> $$
> F_{x+y}=F_x+F_y.
> $$
> 由向量值 $L^2$ 空间中的 Minkowski 不等式，
> $$
> \|x+y\|
> =\|F_x+F_y\|_{L^2([a,b];\mathbb R^2)}
> \le \|F_x\|_{L^2([a,b];\mathbb R^2)}+\|F_y\|_{L^2([a,b];\mathbb R^2)}
> =\|x\|+\|y\|.
> $$
> 故$\left(C^{1}\left[ a,b \right],\left\| \cdot \right\|\right)$是一个赋范线性空间.
>
> 不妨设$a= -1,b= 1$. 考虑$\left(C^{1}\left[ -1,1 \right], \left\| \cdot  \right\|\right)$作为Sobolev空间$H^{1}\left(\left[ -1,1 \right]\right)=W^{2,2}\left(\left[ -1,1 \right]\right)$的子空间.
>  $$ x_{m}\left(t\right)= \sqrt{t^{2}+ \frac{1 }{m^{2} }},\quad x\left(t\right)= \left| t \right|  $$
> 则$x_{m}\in C^{1}\left[ -1,1\right]$, $x\in H^{1}\left(\left[ -1,1\right]\right)$, $x$有弱导数
>  $$ Dx= \begin{cases} 1,&t\ge 0\\-1&t< 0 \end{cases}  $$ 
>  $$ x_{m}^{\prime} \left(t\right)= \frac{t }{\sqrt{t^{2}+ \frac{1 }{m ^{2}}} } = \frac{t }{x_{m}\left(t\right) }$$
> 注意到
>  $$ \left| x\left(t\right)-x_{m}\left(t\right) \right|= \sqrt{t^{2}+ \frac{1 }{m^{2} }}-\sqrt{t^{2}}=\frac{1 }{m^{2} }\frac{1 }{x_{m}\left(t\right)+ x\left(t\right) }\le \frac{1 }{m^{2} }\frac{1 }{\sqrt{\frac{1 }{m^{2} }} }= \frac{1 }{m }   $$   
>  $$ \left| Dx-x_{m}^{\prime} \left(t\right) \right| = \left| \frac{t }{ x_{m}\left(t\right)}- Dx\right|= 1-\frac{\left| t \right|  }{\sqrt{t^{2}+ \frac{1 }{m^{2} }} } $$ 
>  $$ \begin{aligned} \int _{-1}^{1}\left| Dx-x_{m}^{\prime} \left(t\right) \right|^{2}&= 2\int _{0}^{1}\left(1-\frac{t }{\sqrt{t^{2}+ \frac{1 }{m^{2} }} }\right)^{2}\\&=  2\int _{0}^{1}1-\frac{2t }{\sqrt{t^{2}+ \frac{1 }{m^{2} }} }+ \frac{t^{2} }{t^{2}+ \frac{1 }{m^{2} } }\,d t\\&= 2- 2\int _{0}^{1}\frac{1 }{\sqrt{t^{2}+ \frac{1 }{m^{2} }} }\,d t^{2}+ 2\int _{0}^{1}\frac{t^{2} }{t^{2}+ \frac{1 }{m^{2} } }\,d t \\&= 2-4\sqrt{1+ \frac{1 }{m^{2} }}-\frac{4 }{m }+ 2-\frac{2 }{m }\arctan m\end{aligned}  $$ 
> 最后一个式子在$m\to \infty$时趋于零, 因此
>  $$ \lim_{m\to \infty}\int _{-1}^{1}\left| Dx- x^{\prime} _{m}\left(t\right) \right|^{2}+\left| x-x_{m} \right|^{2}\,d t= 0    $$ 
> 即
>  $$ \lim_{m\to \infty}\left\| x_{m}-x \right\|_{W^{2,2}}= 0 $$
> 由于$x\not \in C^{1}\left[ -1,1 \right]$, 由极限的唯一性, $\left\{ x_{m} \right\}$ 不在$C^{1}\left[ -1,1 \right]$中收敛. 因此$\left(C^{1}\left[ -1,1 \right],\left\| \cdot  \right\|\right)$不完备.
>  


> [!exercise] Exercise:
> 试举例说明, 在赋范空间中, 由$\sum_{n=1}^{\infty}\|x_n\|<\infty$, 一般地不能推出$\sum_{n=1}^{\infty}x_n$收敛.

> [!proof] Proof:
> 考虑配备了一致范数的$\left[ 0,1 \right]$上的多项式空间$\mathcal{P}\left[ 0,1 \right]$. 考虑
>  $$ x_{n}= \frac{x^{n} }{n! } $$
> 则
>  $$ \sum _{n = 1}^{\infty}\left\| x_{n} \right\|= \sum _{n = 1}^{\infty}\frac{1 }{n! }< \infty $$
> 但是$\sum _{n = 1}^{\infty}x_{n}$在$C^{1}\left[ 0,1 \right]$上收敛于$e^{x}\not \in \mathcal{P}\left[ 0,1 \right]$. 因此$\sum _{n = 1}^{\infty}x_{n}$在$\mathcal{P}\left[ 0,1 \right]$上不收敛.  


> [!exercise] Exercise
> 设$(X,\|\cdot\|)$是赋范空间,$X\neq\{0\}$.证明:$X$是Banach空间,当且仅当$X$中的单位球面$S=\{x\in X:\|x\|=1\}$是完备的.

> [!proof] Proof: 
> 若$X$是Banach空间, 则$S$是$X$的闭子集. 由于Banach空间中的闭子空间是完备的, $S$完备.
>
> 反之, 若$S$是完备的. 任取$X$上的Cauchy列$\left\{ x_{n} \right\}$. 则$\left\{ \left\| x_{n} \right\| \right\}$ 也是Cauchy列, 令$a= \lim_{n\to \infty}\left\| x_{n} \right\|$. 若$a= 0$, 则$\left\{ x_{n} \right\}$收敛于$0$. 下设$a> 0$, 取$N$使得对于任意的$n> N$, $\frac{a }{2 }< \left\| x_{n} \right\|< \frac{3a }{2 }$. 令
>  $$ \tilde{x}_{n}= \frac{x_{n} }{\left\| x_{n} \right\| },\quad n> N $$
> 则$\left\{ \tilde{x}_{n} \right\}_{n> N}$是$S$上的点列. 计算
>
>  $$ \begin{aligned} \left\| \tilde{x}_{m}-\tilde{x}_{n} \right\|&= \frac{1 }{\left\| x_{m} \right\|\left\| x_{n} \right\| }\left\| \left\| x_{n} \right\|x_{m}-\left\| x_{m} \right\|x_{n} \right\|\\&\le \frac{1 }{\left\| x_{m} \right\|\left\| x_{n} \right\| }  \left(\left\| x_{n} \right\|\left\| x_{m}-x_{n} \right\|+ \left\| x_{n}-x_{m} \right\|\left\| x_{n} \right\|\right)\\&= \frac{2\left\| x_{n} \right\| }{ \left\| x_{m} \right\|\left\| x_{n} \right\| }\left\| x_{m}-x_{n} \right\|\\&\le \frac{3a }{\left(\frac{a }{2 }\right)^{2} }\left\| x_{m}-x_{n} \right\|= \frac{12 }{a }\left\| x_{m}-x_{n} \right\|\end{aligned}  $$ 
> 因此$\left\| \tilde{x}_{n} \right\|_{n> N}$也是Cauchy列. 故由$S$的完备性, 存在$\tilde{x}$, 使得, $\left\| \tilde{x} \right\|= 1$, $\lim_{n\to \infty}\left\| \tilde{x}_{n}-\tilde{x} \right\|= 0$. 则
>  $$ \left\| x_{n}-a \tilde{x} \right\|= \left\| \left\| x_{n} \right\|\tilde{x}_{n}-a \tilde{x} \right\|\le \left\| x_{n} \right\|\left\| \tilde{x}_{n}-\tilde{x} \right\|+ \left| \left\| x_{n} \right\|-a \right| \left\| \tilde{x} \right\| $$ 
> 令$n\to \infty$, 得到
>  $$ \lim_{n\to \infty}\left\| x_{n}-a \tilde{x} \right\|= 0 $$
> 故$\left\{ x_{n} \right\}$收敛于$a \tilde{x}$. 因此$X$完备. 


> [!exercise] Exercise:
> 设 $E$ 是直线上的 Lebesgue 可测集, 且 $mE < \infty$. 用 $\lVert \cdot \rVert_p$ 表示 $L^p(E)$ $(p \ge 1)$ 的范数, $\lVert \cdot \rVert_\infty$ 表示 $L^\infty(E)$ 的范数. 证明: 对于每一 $x \in L^\infty(E)$,
> $$
> \lim_{p \to \infty} \lVert x \rVert_p = \lVert x \rVert_\infty.
> $$

> [!proof] Proof: 
> 不妨设$m\left(E\right)> 0$, 且 $m\left(\left\{ x\in E: \left| x \right|> 0  \right\}\right)> 0$, 否则等式两侧均为零. 那么此时
>  $$ \left\| x \right\|_{\infty}= \sup \left\{ a\in \mathbb{R_{\ge 0}} : m\left(\left\{ t\in E: \left| x\left(t\right) \right| >  a \right\}\right)> 0 \right\} $$ 
> 于是任取$\varepsilon> 0$,  存在$a> \left\| x \right\|_{\infty}-\varepsilon$, 使得$m\left\{ t\in E:\left| x\left(t\right) \right|> a  \right\}> 0$.
>  $$ \left\| x \right\|_{p}^{p}= \int _{E}\left| x \right|^{p}\ge m\left(\left\{ t\in E:\left| x\left(t\right) \right|>a \right\}\right) a^{p} $$
> 于是
>  $$ \left\| x \right\|_{p}\ge \left(m\left\{ t\in E:\left| x\left(t\right) \right| > a \right\}\right)^{\frac{1}{p}}a\ge \left(m\left(\left\{ t\in E:\left| x\left(t\right) \right|> a  \right\}\right)\right) ^{\frac{1}{p}}\left(\left\| x \right\|_{\infty}-\varepsilon\right) $$
> 令$p\to \infty$, 得到
>  $$ \liminf_{p\to \infty}\left\| x \right\|_{p}\ge \left\| x \right\|_{\infty}-\varepsilon  $$
> 令$\varepsilon \to 0$ , 得到
>  $$ \liminf_{p\to \infty}\left\| x \right\|_{p}\ge \left\| x \right\|_{\infty} $$   
>
> 另一方面, 
>  $$ \left| x \right|\le \left\| x \right\|_{\infty},\quad a.e.x\in E  $$ 
> 因此
>  $$ \left\| x \right\|_{p}\le \left(\int _{E}\left\| x \right\|_{\infty}^{p}\right)^{\frac{1}{p}}= \left(m\left(E\right)\right)^{\frac{1}{p}}\left\| x \right\|_{\infty} $$
> 令$p\to \infty$, 得到 
>  $$ \limsup_{p\to \infty}\left\| x \right\|_{p}\le \left\| x \right\|_{\infty} $$
> 综上, 
>  $$ \lim_{p\to \infty}\left\| x \right\|_{p}= \left\| x \right\|_{\infty} $$  