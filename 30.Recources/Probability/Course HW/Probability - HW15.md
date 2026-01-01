
> [!exercise] Exercise
> 设连续随机变量 $X$ 服从柯西分布, 密度函数如下:
> $$
> p(x) = \frac{1}{\pi} \cdot \frac{\lambda}{\lambda^2 + (x-\mu)^2}, \quad -\infty < x < \infty,
> $$
> 其中参数 $\lambda > 0, -\infty < \mu < \infty$, 常记为 $X \sim \operatorname{Cau}(\lambda, \mu)$.
>
> 1. 试证 $X$ 的特征函数为 $\exp\{i\mu t - \lambda|t|\}$, 且利用此结果证明柯西分布的可加性;
>
> 2. 当 $\mu=0, \lambda=1$ 时, 记 $Y=X$, 试证 $\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)$, 但是 $X$ 与 $Y$ 不独立;
>
> 3. 若 $X_1, X_2, \cdots, X_n$ 相互独立, 且服从同一柯西分布, 试证: $\frac{1}{n}(X_1 + X_2 + \cdots + X_n)$ 与 $X_1$ 同分布.

> [!proof]- Proof: 
> 1.  $$ \begin{aligned}  \varphi _{X}\left(t\right)&= \int_{-\infty}^{\infty}e^{itx}\frac{1 }{ \pi  }\frac{ \lambda  }{ \lambda ^{2}+ \left(x-\mu \right)^{2} }\,\mathrm{d} x\\&= \int_{-\infty}^{\infty}e^{it\left(x+ \mu \right)}\frac{1 }{ \pi  }\frac{ \lambda  }{ \lambda ^{2}+ x^{2} }\,\mathrm{d} x \\&= e^{it\mu }\frac{1 }{ \pi  }\int_{-\infty}^{\infty}e^{itx}\frac{ \lambda  }{ \lambda ^{2}+ x^{2} }\,\mathrm{d} x\end{aligned} $$ 
> 令 $f\left(x\right)= e^{itx}\frac{ \lambda  }{ \lambda ^{2}+ x^{2} }$,若 $t> 0$, 则  
> $$\begin{aligned}  \operatorname{Res}\left(f, i \lambda \right)&= \lim_{x\to i \lambda }\frac{e^{itx} \lambda }{\left(x-i \lambda \right)\left(x+ i \lambda \right)} \left(x-i \lambda \right)\\&=\frac{ \lambda e^{-t \lambda }}{2i \lambda }= \frac{e^{-t \lambda }}{2i}\end{aligned} $$
>  由留数定理   
> $$  \varphi _{X}\left(t\right)= e^{it\mu }\frac{1}{ \pi }2 \pi i\operatorname{Res}\left(f,i \lambda \right)= \exp \left(it\mu - \lambda t\right) $$ 
>   若 $t< 0$,则  
>  $$ \begin{aligned}  \varphi _{X}\left(t\right)&= e^{it\mu }\frac{1}{ \pi } \int_{-\infty}^{\infty}e^{itx}\frac{ \lambda }{ \lambda ^{2}+ x^{2}}\,\mathrm{d} x\\&= e^{it\mu }\frac{1}{ \pi }\int_{-\infty}^{\infty}e^{it\left(-x\right)}\frac{ \lambda }{ \lambda ^{2}+ x^{2}}\,\mathrm{d} x\\&= e^{it\mu }\exp \left(- \lambda \left(-t\right)\right)\\&= \exp \left(it\mu +  \lambda t\right) \end{aligned} $$
>   当 $t= 0$时, 
> $$  \varphi _{X}\left(t\right)= \frac{1 }{ \pi  }\int_{-\infty}^{\infty}\frac{ \lambda  }{ \lambda ^{2}+ x^{2} }\,\mathrm{d} x= \frac{1 }{ \pi  } \left(\frac{ \pi  }{2 }-\frac{ \pi  }{2 }\right)= 1 $$
>  
> 因此 
>  $$  \varphi _{X}\left(t\right)= \exp \left(it\mu - \lambda \left| t \right| \right). $$ 
>   设 $X\sim \operatorname{Cau}\left( \lambda _1 ,\mu _1 \right), Y\sim \operatorname{Cau}\left( \lambda _2 ,\mu _2 \right)$ ,  
>  $$  \varphi _{X+ Y}\left(t\right)=  \varphi _{X}\left(t\right) \varphi _{Y}\left(t\right)= \exp \left(it\left(\mu _1 + \mu _2 \right)- \left( \lambda _1 +  \lambda _2 \right)\left| t \right| \right) $$
>  由特征函数的唯一性定理, $\left(X+ Y\right)\sim \operatorname{Cau}\left( \lambda _1 +  \lambda _2 ,\mu _1 + \mu _2 \right)$
> 
>2. 若 $Y= X$, 则显然 $X,Y$不独立, 而 
>       $$ \begin{aligned}  \varphi _{X+ Y}\left(t\right)=  \varphi _{2X}\left(t\right)=  \varphi _{X}\left(2t\right)= e^{-\left| 2t \right| }= e^{-2\left| t \right| }=  \varphi _{X}\left(t\right)\cdot  \varphi _{Y}\left(t\right) \end{aligned} $$ 
> 3. 由柯西分布的可加性,  
> $$  \varphi _{X_1+ \cdots + X_{n}}\left(t\right)=  \varphi _{X_1}\left(t\right)\cdots  \varphi _{X_{n}}\left(t\right)= \left( \varphi _{X_1}\left(t\right)\right)^{n} $$  
> $$ \begin{aligned}  \varphi _{\frac{X_1+ \cdots + X_{n} }{n }}\left(t\right)&=  \varphi _{X_1}\left(\frac{1 }{n }t\right)^{n}\\&= \exp \left(\frac{1 }{n }\left(it\mu - \lambda \left| t \right|\right) \right)^{n}\\&= \exp \left(it\mu - \lambda \left| t \right| \right)=  \varphi _{X_1}\left(t\right)  \end{aligned}$$  


> [!exercise] Exercise
> 设随机变量 $X \sim Ga(\alpha, \lambda)$, 证明: 当 $\alpha \to \infty$ 时, 随机变量 $(\lambda X - \alpha) / \sqrt{\alpha}$ 按分布收敛于标准正态变量.

> [!proof]- Proof:
> 设 $X_{\alpha }= \left(\lambda X-\alpha \right)/\sqrt{\alpha }$ , 则
>
> $$
> \begin{aligned} \varphi _{X_{\alpha }}(t) &= E\left(\exp \left(it\left(\lambda X-\alpha \right)/\sqrt{\alpha }\right)\right)\\&= e^{-it\sqrt{\alpha }}\varphi _{X}\left(\frac{\lambda t }{\sqrt{\alpha } }\right)\\&= e^{-it\sqrt{\alpha }}\left(1-\frac{ i\lambda t }{\sqrt{\alpha }\lambda  }\right)^{-\alpha }\\&= e^{-it\sqrt{\alpha }}\left(1-\frac{i t}{\sqrt{\alpha } }\right)^{-\alpha } \end{aligned}
>
> $$
>
> 从而
>
> $$
> \begin{aligned} \ln \varphi _{X_{\alpha }}\left(t\right)&= -it\sqrt{\alpha }-\alpha \ln \left(1-\frac{it }{\sqrt{\alpha } }\right)\\&= -it\sqrt{\alpha }-\alpha \left[ -\frac{it }{\sqrt{\alpha } } - \frac{1}{2}\left(\frac{it}{\sqrt{\alpha}}\right)^2 + o\left(\frac{1}{\alpha}\right) \right] \\&= -it\sqrt{\alpha } + it\sqrt{\alpha } + \frac{\alpha}{2}\left(\frac{-t^2}{\alpha}\right) + o(1) \\&= -\frac{1}{2}t^{2}+ o(1) \end{aligned}
>
> $$
>
> 因此
> $$
> \lim_{\alpha \to \infty}\varphi _{X_{\alpha }}\left(t\right)= \exp \left(-\frac{1}{2}t^{2}\right)
> $$
>
> 由 Lévy's Continuity Theorem, $X_{\alpha }$ 按分布收敛于标准正态变量.


> [!exercise] Exercise: 
> 设随机变量序列 $\{X_n\}$ 独立同分布, 且 $X_i \sim U(0,1)$. 令 $Y_n = \left( \prod_{i=1}^n X_i \right)^{\frac{1}{n}}$, 试证明: $Y_n \xrightarrow{P} c$, 其中 $c$ 为常数, 并求出 $c$.

> [!proof]- Proof: 
>  $$ \ln Y_{n}= \frac{1}{n}\sum _{i= 1}^{n}\ln X_{i} $$  
> 令 $Z_{i}= \ln X_{i}$, 则 $\left\{ Z_{i} \right\}$独立同分布 .   
>  $$ \begin{aligned} E\left(\left| Z_1 \right| \right)&= \int_{0}^{1}\left(-\ln x\right)\,\mathrm{d} x= 1 < \infty\end{aligned} $$  
> $$ E\left(Z_1\right)= E\left(-\left| Z_1 \right| \right)= -1 $$
>   由弱大数定律. 
> $$\ln Y_n = \frac{1}{n} \sum_{i=1}^n Z_i \xrightarrow{P} E[Z_1] = -1.$$
>  由于$e^{x}$在$-1$处连续, 由[[thm - Continuous Mapping]],  $\left\{ Y_{n} \right\}$依概率收敛于 $\frac{1 }{e }$. 因此 
>  $$ c= \frac{1 }{e } $$ 


> [!exercise] Exercise: 
> 设随机变量序列 $\{X_n\}$ 独立同分布, 数学期望, 方差均存在, 且 $\operatorname{E}(X_n) = \mu$. 试证:
> $$\frac{2}{n(n+1)} \sum_{k=1}^{n} k \cdot X_k \xrightarrow{P} \mu.$$

> [!proof]- Proof:  
>  令$Y_{n}= \frac{2 }{n\left(n+ 1\right) }\sum _{k= 1}^{n}k\cdot X_{k}$, 则 
>  $$ \begin{aligned} E\left(Y_{n}\right)&= \frac{2 }{n\left(n+ 1\right) }\sum _{k= 1}^{n}k\mu = \mu   \end{aligned} $$ 
> 由于 $X_{n}$两两独立, 特别地它们两两不相关, 因此 
>  $$ \begin{aligned} \operatorname{Var}\left(Y_{n}\right)&= \frac{4 }{n^{2}\left(n+ 1\right)^{2} }\sum _{k= 1}^{n}k^{2}\operatorname{Var}\left(X_{k}\right)= \frac{2 }{3 }\frac{2n+ 1 }{n\left(n+ 1\right) }\operatorname{Var}\left(X_{k}\right)\to 0 \end{aligned} $$
> 即 $E\left(Y_{n}-\mu \right)^{2}\to 0$, ($n\to \infty$). 因此 $Y_{n}$是 $L^{2}$收敛于 $\mu$的, 由Chebyshev不等式,  
>  $$ \begin{aligned} P\left(\left| Y_{n}-\mu  \right|\ge  \varepsilon  \right)\le \frac{E\left(Y_{n}-\mu \right)^{2} }{ \varepsilon  ^{2}}\to 0 ,\quad \text{as }n\to \infty, \forall  \varepsilon > 0 \end{aligned} $$
> 因此 $Y_{n}$ 依概率收敛于 $\mu$.

> [!exercise] Exercise 
> 设随机变量序列 $\{X_n\}$ 独立同分布, 数学期望, 方差均存在, 且
> $$
> \begin{aligned}
> E(X_n) = 0, \quad \operatorname{Var}(X_n) = \sigma^2.
> \end{aligned}
> $$
> 试证:
> $$
> \begin{aligned}
> \frac{1}{n} \sum_{k=1}^n X_k^2 \xrightarrow{P} \sigma^2.
> \end{aligned}
> $$

> [!proof]- Proof: 
> 令 $Y_{n}= X_{n}^{2}$, 则
>  $$ E\left(\left| Y_{n} \right| \right) = E\left(Y_{n}\right)= E\left(X_{n}^{2}\right)= \operatorname{Var}\left(X_{n}\right)+ \left(E\left(X_{n}\right)\right)^{2}= \sigma ^{2} < \infty$$ 
> 由[[thm - Weak Law of Large Number#Khinchin's Version|Khinchin's Law of Large Number]], $\frac{1 }{n }\sum _{k= 1}^{n}Y_{k}$依测度收敛于 $\sigma ^{2}$. 因此命题成立.




> [!exercise] Exercise: 
> 设随机变量序列 $\{X_n\}$ 独立同分布, 且 $\operatorname{Var}(X_n) = \sigma^2$ 存在, 令
> $$ \overline{X} = \frac{1}{n} \sum_{i=1}^n X_i, \quad S_n^2 = \frac{1}{n} \sum_{i=1}^n (X_i - \overline{X})^2. $$
> 试证: $S_n^2 \xrightarrow{P} \sigma^2$.

> [!proof]- Proof: 
>  $$ \begin{aligned} S_{n}^{2}&= \frac{1 }{n }\sum _{i= 1}^{n}\left(X_{i}^{2}-2X_{i}    \overline{X}+  \overline{X}^{2}\right)\\&= \frac{1 }{n }\sum _{i= 1}^{n}X_{i}^{2}- 2  \overline{X}  \overline{X}+   \overline{X}^{2}\\&= \frac{1 }{n }\sum _{i= 1}^{n}X_{i}^{2}-   \overline{X}^{2} \end{aligned} $$ 
> $E\left(X_{i}^{2}\right)= \operatorname{Var}\left(X_{i}\right)+\left(E\left(X_{i}\right)\right)^{2}< \infty$, 由Khinchin大数定律,
>  $$ \frac{1 }{n }\sum _{i= 1}^{n}X_{i}^{2} \xrightarrow{P} \sigma ^{2}+ \mu ^{2},\text{as }n\to \infty $$
> 其中 $\mu = E\left(X_{1}\right)$. 以及 
>  $$ \overline{X}= \frac{1 }{n }\sum _{i= 1}^{n}X_{i}\xrightarrow{P}  \mu ,\text{as }n\to \infty $$ 
> 由于 $x^{2}$在 $\mu$处连续, 由[[thm - Continuous Mapping]],  
>  $$ \overline{X}^{2}\xrightarrow{P} \mu ^{2},\text{as }n\to  \infty  $$ 
> 因此 
>  $$ \begin{aligned} S_{n}^{2}= \frac{1 }{n }\sum _{i= 1}^{n}X_{i}^{2}- \overline{X}^{2}\xrightarrow{P}\left(\sigma ^{2}+ \mu ^{2}\right)-\mu ^{2}= \sigma ^{2},\text{as }n \to \infty \end{aligned} $$ 

> [!exercise] Exercise 
> 将 $n$ 个编号为 $1$ 至 $n$ 的球放入 $n$ 个编号为 $1$ 至 $n$ 的盒子中, 每个盒子只能放一个球, 记
> $$
> X_i = \begin{cases} 1, & \text{编号为 } i \text{ 的球放入编号为 } i \text{ 的盒子}, \\ 0, & \text{其他}, \end{cases}
> $$
> $S_n = \sum_{i=1}^n X_i$, 试证明:
> $$
> \frac{S_n - E(S_n)}{n} \xrightarrow{P} 0.
> $$

> [!proof]- Proof: 
>  由Chebyshev不等式
>   $$ \begin{aligned} P\left(\left\{ \left| \frac{S_{n}-E\left(S_{n}\right) }{n } \right|\ge  \varepsilon   \right\}\right) \le \frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} \varepsilon ^{2} }\end{aligned} $$ 
> 对于任意的 $\varepsilon > 0$成立.
>   $$ \begin{aligned} S_{n}^{2}= \sum _{i= 1}^{n}X_{i}^{2}+ \sum _{i\neq j}X_{i}X_{j}= \sum _{i= 1}^{n}X_{i}+ \sum _{i\neq j}X_{i}X_{j}= S_{n}+ \sum _{i \neq j}X_{i}X_{j} \end{aligned} $$
>   $$ \begin{aligned} E\left(X_{i}X_{j}\right)&= P\left(X_{i},X_{j}= 1\right)= \frac{1 }{n\left(n-1\right) },\quad i\neq j \end{aligned} $$
> 因此
>  $$ E\left(S_{n}^{2}\right)= E\left(S_{n}\right)+ n\left(n-1\right)\frac{1 }{n\left(n-1\right) }= E\left(S_{n}\right)+ 1 $$   
>   $$ E\left(S_{n}\right)= \sum _{i= 1}^{n}E\left(X_{i}\right)= 1 $$
> 故
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&=E\left(S_{n}^{2}\right)- E\left(S_{n}\right)^{2}= 1 \end{aligned} $$
> 因此 $\lim_{n\to \infty}\frac{\operatorname{Var}\left(S_{n}\right) }{ n^{2}\varepsilon ^{2} }= 0$, 故 
>  $$ \frac{S_{n}-E\left(S_{n}\right) }{n }\xrightarrow{P}  0 $$   

> [!exercise] Exercise: 
> 设 $\{X_k\}$ 为独立随机变量序列, 且
> $$ P(X_k = \pm \sqrt{\ln k}) = \frac{1}{2}, \quad k=1, 2, \cdots. $$
> 证明 $\{X_k\}$ 服从大数定律.

> [!proof]- Proof: 
>  $$ \begin{aligned} E\left(X_{k}\right)&= \sqrt{\ln k}\cdot \frac{1}{2}-\sqrt{\ln k}\cdot \frac{1}{2}= 0 \end{aligned} $$
> 令 $S_{n}= X_1+ X_2+ \cdots + X_{n}$,
>   $$ \begin{aligned} E\left(S_{n}^{2}\right)&= \sum _{k= 1}^{n}E\left(X_{k}^{2}\right)+ \sum _{i\neq j}E\left(X_{i}X_{j}\right)\\&= \sum _{k= 1}^{n}\ln k+ \sum _{i\neq j}E\left(X_{i}\right)E\left(X_{j}\right)  \\&= \sum _{k= 1}^{n}\ln k\end{aligned} $$
>  $$ \begin{aligned} E\left(S_{n}\right)= \sum _{i= 1}^{n}E\left(X_{i}\right)= 0 \end{aligned} $$
> 因此
>  $$ \operatorname{Var}\left(S_{n}\right)= E\left(S_{n}^{2}\right)-\left(E\left(S_{n}\right)\right)^{2}= \sum _{k= 1}^{n}\ln k $$   
> 故
>  $$ \begin{aligned} \frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} }= \frac{1 }{n^{2} }\sum _{k= 1}^{n}\ln k\le \frac{n\ln n }{n^{2} }\to 0  \end{aligned} $$
> 因此 $\left\{ X_{n} \right\}$满足Markov条件, 从而由[[thm - L^2 Weak Law#Markov's Law of Large Numbers]]可知其服从大数定律.  


> [!exercise] Exercise: 
> 设 $\{X_k\}$ 为独立随机变量序列, 且
> $$ P(X_k = \pm 2^k) = \frac{1}{2^{2k+1}}, \quad P(X_k = 0) = 1 - \frac{1}{2^{2k}}, \quad k=1, 2, \cdots. $$
> 证明 $\{X_k\}$ 服从大数定律.

> [!proof]- Proof: 
>  $$ \begin{aligned} E\left(X_{k}\right)&= 2^{k}\frac{1 }{2^{2k+ 1} }-2^{k}\frac{1 }{2^{2k+ 1} }= 0 \end{aligned} $$
> 令 $S_{n}= \sum _{k= 1}^{n}X_{k}$, 则 $E\left(S_{n}\right)= 0$. 
>  $$ \begin{aligned} E\left(S_{n}^{2}\right)&=\sum _{k= 1}^{n}E\left(X_{k}^{2}\right)+ \sum _{i\neq j}E\left(X_{i}X_{j}\right)\\&=\sum _{k= 1}^{n}\left( 2^{2k}\frac{1 }{2^{2k+ 1} }+ 2^{2k}\frac{1 }{2^{2k+ 1} }\right)\\&+\sum _{i\neq j}E\left(X_{i}\right)E\left(X_{j}\right) \\&= n+ 0= n\end{aligned} $$
> 因此
> $\operatorname{Var}\left(S_{n}\right)= E\left(S_{n}^{2}\right)-\left(E\left(S_{n}\right)\right)^{2}= n$, 故
>  $$ \begin{aligned} \frac{1 }{n^{2} }\operatorname{Var}\left(S_{n}\right)= \frac{1 }{n }\to 0,\quad \text{as }n\to \infty \end{aligned} $$
> 故 $\left\{ X_{n} \right\}$   满足Markov条件, 从而满足大数定律.

> [!exercise] Exercise: 
> 在伯努利试验中, 事件 $A$ 出现的概率为 $p$, 令
> $$ X_n = \begin{cases} 1, & \text{若在第 } n \text{ 次及第 } n+1 \text{ 次试验中 } A \text{ 出现}, \\ 0, & \text{其他}. \end{cases} $$
> 证明 $\{X_n\}$ 服从大数定律.


> [!proof]- Proof: 
> 令 $S_{n}= \sum _{k= 1}^{n}X_{k}$. 注意到 $X_{i},X_{j}$不独立, 当且仅当 $i,j$相邻. 
>  $$ \begin{aligned} E\left(X_{i}X_{j}\right)&= E\left(X_{i}\right)E\left(X_{j}\right)= p^{2}\cdot p^{2}= p^{4},\quad \left| i-j \right|> 1  \end{aligned} $$
>  $$ \begin{aligned} E\left(X_{n-1}X_{n}\right)&= p^{3} \end{aligned} $$  
>  $$ E\left(X_{i}^{2}\right)= E\left(X_{i}\right)= p^{2} $$ 
>  因此 
>  $$ \begin{aligned} E\left(S_{n}^{2}\right)&= \sum _{k= 1}^{n}E\left(X_{k}^{2}\right)+ 2\sum _{k= 1}^{n-1}E\left(X_{k}X_{k+ 1}\right)+ \sum _{\left| i-j \right|> 1 }E\left(X_{i}X_{j}\right)\\&=  np^{2}+ 2\left(n-1\right)p^{3}+ \left(n-2\right)\left(n-1\right)p^{4}\end{aligned} $$ 
>  $$ \begin{aligned} E\left(S_{n}\right)&= \sum _{k= 1}^{n}E\left(X_{k}\right)= np^{2} \end{aligned} $$
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&= E\left(S_{n}^{2}\right)-\left(E\left(S_{n}\right)\right)^{2}\\&= np^{2}+ 2\left(n-1\right)p^{3}+ \left(2-3n\right)p^{4} \end{aligned} $$
> 故 
>  $$ \begin{aligned} \lim_{n\to \infty}\frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} }= \lim_{n\to \infty}\frac{ np^{2}+ 2\left(n-1\right)p^{3}+ \left(2-3n\right)p^{4}}{ n^{2}} = 0\end{aligned} $$
> 因此 $\left\{ X_{n} \right\}$   满足Markov条件, 故满足大数定律.



> [!exercise] Exercise: 
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 其共同的分布函数为
> $$F(x) = \frac{1}{2} + \frac{1}{\pi}\operatorname{arctan}\frac{x}{a}, \quad -\infty < x < \infty.$$
> 试问辛钦大数定律对此随机变量序列是否适用?

> [!proof]- Proof: 
>  $$ \begin{aligned} f \left(x\right)&= \frac{1 }{\pi  }\frac{1 }{a }\frac{1 }{\frac{x^{2} }{a^{2} }+ 1 }\\&= \frac{1 }{\pi  }\frac{a }{x^{2}+ a^{2} } \end{aligned} $$ 
>   $$ \begin{aligned} E\left(\left| X_1 \right| \right)&= \int_{-\infty}^{\infty}\left| x \right|\frac{1 }{\pi  }\frac{a }{x^{2}+ a^{2} } dx\\&=   2\int_{0}^{\infty}\frac{1 }{\pi  }\frac{ax }{x^{2}+ a^{2} }dx\\&= \int_{0}^{\infty}\frac{1 }{\pi  }\frac{a }{t+ a^{2} }dt \\&= \infty\end{aligned} $$ 
> 期望不存在, 因此此随机变量序列不适用Khinchin大数定律.

> [!exercise] Exercise: 
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 其共同分布为
> $$P\left(X_n = \frac{2^k}{k^2}\right) = \frac{1}{2^k}, \quad k = 1, 2, \cdots.$$
> 试问 $\{X_n\}$ 是否服从大数定律?

> [!proof]- Proof: 
>   $$ \begin{aligned}E\left(\left| X_1 \right| \right)=  E\left(X_{1}\right)&= \sum _{k= 1}^{\infty}\frac{2^{k} }{k^{2} }\frac{1 }{2^{k} }= \sum _{k= 1}^{\infty}\frac{1 }{k^{2} } = \frac{\pi ^{2} }{6 }\end{aligned}  $$ 
> 由Khinchin大数定律, $\frac{S_{n} }{n }$依概率收敛于$\frac{\pi ^{2} }{6 }$, $\left\{ X_{n} \right\}$服从大数定律.

> [!exercise] Exercise: 
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 其共同分布为
> $$P(X_n = k) = \frac{c}{k^2 \cdot \operatorname{lg}^2 k}, \quad k = 2, 3, \cdots.$$
> 其中
> $$c = \left( \sum_{k=2}^{\infty} \frac{1}{k^2 \cdot \operatorname{lg}^2 k} \right)^{-1},$$
> 试问 $\{X_n\}$ 是否服从大数定律?

> [!proof]- Proof: 
>  $$ \begin{aligned}E\left(\left| X_1 \right| \right)=  E\left(X_1\right)&= \sum _{k= 2}^{\infty}k\frac{1 }{k^{2}\mathrm{lg}^{2}k }c\\&= c \sum _{k= 2}^{\infty}\frac{1 }{k \mathrm{lg}^{2}k } \end{aligned} $$ 
> 由级数的积分判别法, 级数 $\sum _{k= 2}^{\infty}\frac{1 }{k \mathrm{lg}^{2}k }$与 积分$\int_{2}^{\infty}\frac{1 }{x \mathrm{lg}^{2}x }\,\mathrm{d} x$同敛散. 而 
>  $$ \begin{aligned} \int_{2}^{\infty}\frac{1 }{x \mathrm{lg}^{2}x } \,\mathrm{d} x&= \left(\ln 10\right)^{2}\int_{2}^{\infty}\frac{1 }{x \ln  ^{2}x}\,\mathrm{d} x\\&= \left(\ln 10\right)^{2} \left[ - \frac{1 }{\ln x } \right]_{2}^{\infty}\\&= \left(\ln 10\right)^{2}\frac{1 }{\ln 2 }< \infty \end{aligned} $$
> 因此积分收敛, 从而级数收敛, 因此 $E\left(\left| X_1 \right| \right)$存在, 由于 $\left\{ X_{n} \right\}$ 是独立同分布, 由Khinchin大数定律, $\left\{ X_{n}\right\}$服从大数定律.

> [!exercise] Exercise: 
> 设 $\{X_n\}$ 为独立的随机变量序列, 其中 $X_n$ 服从参数为 $\sqrt{n}$ 的泊松分布, 试问 $\{X_n\}$ 是否服从大数定律?

> [!proof]- Proof: 
>   $$ \begin{aligned} P\left(X_{n}= k\right)= \frac{\left(\sqrt{n}\right)^{k} }{ k!}e^{-\sqrt{n}} \end{aligned} $$ 
>  $$ \begin{aligned} E\left(X_{n}\right)&= \sqrt{n} \end{aligned} ,\quad \operatorname{Var}\left(X_{n}\right)=\sqrt{n} $$ 
> 令 $S_{n}= X_1+ \cdots + X_{n}$. 由随机变量的独立性, 
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&= \sum _{k= 1}^{n}\operatorname{Var}\left(X_{k}\right)= \sum _{k= 1}^{n}\sqrt{k} \end{aligned} $$ 
>   $$ \begin{aligned} \int_{0}^{n}\frac{1 }{n^{2} }\sqrt{x}\,\mathrm{d} x&= \frac{2}{3} \frac{1 }{n^{2} }\left[ x^{\frac{3}{2}} \right]_{0}^{n}=\frac{2}{3}n^{-\frac{1}{2}} \end{aligned} $$ 
> 当 $n\to \infty$时, $\int_{0}^{n}\frac{1 }{n ^{2}}\sqrt{x}\,\mathrm{d} x\to 0$, 而
>  $$ \begin{aligned} \frac{1 }{n^{2} }\sum _{k= 1}^{n}\sqrt{k}&\le \frac{1 }{n^{2} }\sum _{k= 0}^{n}\int_{k}^{k+  1}\sqrt{x}\,\mathrm{d} x\\&= \frac{\left(n+ 1\right)^{2}}{n^{2} }\int_{0}^{n+ 1}\frac{1 }{\left(n+ 1\right)^{2}}\sqrt{x}\,\mathrm{d} x \end{aligned} $$ 
> 因此当 $n\to \infty$时, $\frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} }\to 0$, 故 $\left\{ X_{n} \right\}$满足 Markov条件, 从而服从大数定律.


> [!exercise] Exercise: (伯恩斯坦 (Bernstein) 大数定律)
> 设 $\{X_n\}$ 是方差一致有界的随机变量序列, 且当 $|k-l| \to \infty$ 时, 一致地有 $\operatorname{Cov}(X_k, X_l) \to 0$, 证明 $\{X_n\}$ 服从大数定律.

> [!proof]- Proof: 
> 设 $\operatorname{Var}\left(X_{n}\right)\le M$.
> 对于任意的 $\varepsilon > 0$, 存在 $N$, 使得对于任意的 $k,l$满足 $\left| k-l \right|> N$, 都有 $\operatorname{Cov}\left(X_{k},X_{l}\right)<  \varepsilon$. 
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&=\sum _{k= 1}^{n}\operatorname{Var}\left(X_{k}\right)+ \sum _{\left| i-j \right|\le N }\operatorname{Cov}\left(X_{i},X_{j}\right)+ \sum _{\left| i-j \right|> N }\operatorname{Cov}\left(X_{i},X_{j}\right) \\&\le nM+ \sum _{\left| i-j \right|\le N }\frac{1}{2}\left(\operatorname{Var}\left(X_{i}\right)+ \operatorname{Var}\left(X_{j}\right)\right)+ \sum _{\left| i-j \right|> N }\varepsilon \\&\le nM+ \left(2N+ 2\right)n \frac{1}{2}\left(M+ M\right)+ n^{2}\varepsilon \\&= \left(2N+ 3\right)nM+ n^{2}\varepsilon \end{aligned} $$
> 其中第三行第二项是因为每个使得 $\left| i-j \right|\le N$的 $j$不超过 $\left(2N+ 2\right)$个.因此
>  $$ \begin{aligned}\limsup_{n\to \infty} \frac{1 }{n^{2} }\operatorname{Var}\left(S_{n}\right)\le \lim_{n\to \infty}\frac{\left(2N+ 3\right)nM+ n^{2}\varepsilon  }{n^{2} } = \varepsilon \end{aligned} $$  
> 由于 $\varepsilon > 0$是任取的, 故
>  $$ \lim_{n\to \infty}\frac{1 }{n^{2} }\operatorname{Var}\left(S_{n}\right)= 0 $$
> 故$\left\{X_{n}\right\}$满足Markov条件, 从而$\left\{ X_{n} \right\}$服从大数定律. 

> [!exercise] Exercise: (格涅坚科 (Gnedenko) 大数定律)
> 设 $\{X_n\}$ 是随机变量序列, 若记
> $$
> \begin{aligned}
> Y_n = \frac{1}{n} \sum_{i=1}^n X_i, \quad a_n = \frac{1}{n} \sum_{i=1}^n E(X_i).
> \end{aligned}
> $$
> 则 $\{X_n\}$ 服从大数定律的充要条件是
> $$
> \begin{aligned}
> \lim_{n \to \infty} E\left( \frac{(Y_n - a_n)^2}{1 + (Y_n - a_n)^2} \right) = 0.
> \end{aligned}
> $$

> [!proof]- Proof: 
> 令 $S_{n}= X_1+ X_2+ \cdots + X_{n}$. 则 $Y_{n}= \frac{1 }{n }S_{n}$, $a_{n}= \frac{1}{n}E\left(S_{n}\right)$.
> $\left\{ X_{n} \right\}$服从大数定律, 当且仅当 
>  $$ \begin{aligned} \frac{S_{n}-E\left(S_{n}\right) }{n }= \frac{nY_{n}- na_{n} }{n }= Y_{n}-a_{n} \end{aligned} $$ 
> 依概率收敛到0. 
> 
> 记 $g\left(x\right)= \frac{x^{2} }{1+ x^{2} }$. 则$g$在$(0,\infty)$上严格单调递增且有界$1$. 
>  $$ \begin{aligned} P\left(\left\{ \left| Y_{n}-a_{n}\right|\ge \varepsilon   \right\}\right)&= P\left(\left\{ g\left(Y_{n}-a_{n}\right)\ge g\left(\varepsilon \right) \right\}\right)\\&\le \frac{E\left(g\left(Y_{n}-a_{n}\right)\right) }{g\left(\varepsilon \right) } \end{aligned} $$ 
> 因此若条件成立, 则 $\lim_{n\to \infty}E\left(g\left(Y_{n}-a_{n}\right)\right)= 0$, 而对于任意的 $\varepsilon > 0$, $g\left(\varepsilon \right)\ge \frac{\varepsilon ^{2} }{1+ \varepsilon ^{2} }> 0$, 此时有 $\lim_{n\to \infty}P\left(\left\{ \left| Y_{n}-a_{n} \right|\ge \varepsilon   \right\}\right)= 0$, 因此 $\left\{ X_{n} \right\}$服从大数定律.
> 
> 另一方面, 若$\left\{ X_{n} \right\}$服从大数定律 注意到
>  $$ \begin{aligned} E\left(g\left(Y_{n}-a_{n}\right)\right)&=E\left(g\left(Y_{n}-a_{n}\right)\chi _{\left\{ g\left(Y_{n}-a_{n}\right)\le \varepsilon  \right\}}\right)+ E\left(g\left(Y_{n}-a_{n}\right)\chi _{\left\{ g\left(Y_{n}-a_{n}\right)> \varepsilon  \right\}}\right)\\&\le E\left(\varepsilon \cdot \chi _{\left\{ g\left(Y_{n}-a_{n}\right)\le \varepsilon  \right\}}\right)+ E\left(1\cdot \chi _{\left\{ g\left(Y_{n}-a_{n}\right)> \varepsilon \right\}}\right) \\&\le E\left(\varepsilon \right)+ E\left(\chi _{\left\{ \left| Y_{n}-a_{n} \right|>  g^{-1} \left(\varepsilon  \right)  \right\}}\right)\\&=\varepsilon + P\left(\left\{ \left| Y_{n}-a_{n} \right|> g^{-1} \left(\varepsilon   \right)  \right\}\right) \end{aligned}$$ 
> 令 $n\to \infty$, 得到
>  $$ \limsup_{n\to \infty}E\left(g\left(Y_{n}-a_{n}\right)\right)\le \varepsilon  $$ 
> 由于 $\varepsilon > 0$可以是任意的, 我们得到  $\lim_{n\to \infty}E\left(g\left(Y_{n}-a_{n}\right)\right)= 0$, 即条件成立.

> [!exercise] Exercise:
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 方差存在. 又设 $\sum_{n=1}^\infty a_n$ 为绝对收敛级数. 令 $Y_n = \sum_{i=1}^n X_i$, 证明 $\{a_n Y_n\}$ 服从大数定律.

> [!proof]- Proof: 
> 令 $S_{n}= \sum _{k= 1}^{n}a_{k}Y_{k}$, 
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&= \operatorname{Var}\left(\sum _{k= 1}^{n}\sum _{i= 1}^{k}a_{k}X_{i}\right)\\&= \operatorname{Var}\left(\sum _{i= 1}^{n}\sum _{k= i}^{n}a_{k}X_{i}\right)\\&= \sum _{i= 1}^{n}\left(\sum _{k= i}^{n}a_{k}\right)^{2}\sigma ^{2}\\&\le n A^{2}\sigma ^{2}\end{aligned} $$
>  其中 $A= \sum _{k= 1}^{\infty}\left| a_{k} \right|$, $\sigma ^{2}= \operatorname{Var}\left(X_{1}\right)$, 于是  
> $$ \begin{aligned} \limsup_{n\to \infty}\frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} } &\le \lim_{n\to \infty}\frac{nA^{2}\sigma ^{2} }{ n^{2}}= 0\end{aligned} $$ 
> 故 $\left\{ a_{n}Y_{n} \right\}$满足Markov条件, 从而服从大数定律.  

> [!exercise] Exercise:
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 方差存在, 令 $Y_n = \sum_{i=1}^n X_i$. 又设 $\{a_n\}$ 为一列常数, 如果存在常数 $c > 0$, 使得对一切 $n$ 有 $|n a_n| \leqslant c$, 证明 $\{a_n Y_n\}$ 服从大数定律.

> [!proof]- Proof: 
> 令 $S_{n}= \sum _{k= 1}^{n}a_{k}Y_{k}$, 则
>  $$ \begin{aligned} \operatorname{Var}\left(S_{n}\right)&= \operatorname{Var}\left(\sum _{k= 1}^{n}a_{k}Y_{k}\right)\\&= \operatorname{Var}\left(\sum _{k= 1}^{n}\sum _{i= 1}^{k}a_{k}X_{i}\right)\\&= \operatorname{Var}\left(\sum _{i= 1}^{n}\sum _{k= i}^{n}a_{k}X_{i}\right)\\&= \sum _{i= 1}^{n}\left(\sum _{k= i}^{n}a_{k}\right)^{2}\sigma ^{2}\\&\le \sum _{i= 1}^{n}\left(\sum _{k= 1}^{n}\frac{c }{k }\right)^{2}\sigma ^{2}\\&\le c^{2}\sigma ^{2}\sum _{i= 1}^{n}\left(1+ \ln n\right)^{2}\\&\le c^{2}\sigma ^{2}n\left(1+ \ln n\right)^{2}\end{aligned} $$ 
> 其中 $\sigma ^{2}= \operatorname{Var}\left(X_1\right)$. 则 
>  $$ \begin{aligned} \limsup_{n\to \infty}\frac{\operatorname{Var}\left(S_{n}\right) }{n^{2} }\le \lim_{n\to \infty}\frac{c^{2}\sigma ^{2}n \left(1+ \ln n\right)^{2}}{n^{2} }= 0 \end{aligned} $$
> 因此 $\left\{ a_{n}Y_{n} \right\}$满足Markov条件, 从而服从大数定律. 

> [!exercise] Exercise:
> 设 $\{X_n\}$ 为独立同分布的随机变量序列, 其方差有限, 且 $X_n$ 不恒为常数. 如果 $S_n = \sum_{i=1}^n X_i$, 试证: 随机变量序列 $\{S_n\}$ 不服从大数定律.

> [!proof]- Proof: 
> 令 $E\left(X_1\right)= \mu$, $\operatorname{Var}\left(X_1\right)= \sigma ^{2}$, $Y_{n}= X_{n}-\mu$, 令 $Z_{n}=\frac{1 }{n }\left(S_1+ \cdots + S_{n}\right)-\frac{1 }{n }E\left(S_1+ \cdots + S_{n}\right)$. 则
>  $$ \begin{aligned} Z_{n}&= \frac{nY_1+ \left(n-1\right)Y_2+ \cdots + Y_{n} }{n }\end{aligned} $$
> 由于 $Y_1,\cdots ,Y_{n}$独立同分布, 
>  $$ \begin{aligned} \ln\left| \varphi_{Z_{n}}\left(t\right) \right|& =n\cdot \left[ \frac{1 }{n }\sum_{j =1}^{n}\ln\left| \varphi_{Y_1}\left(\frac{j }{n }t\right) \right|  \right]  \end{aligned} $$ 
> 若 $X_{n}$不恒为常数, 则 $\sigma> 0$,从而由展开式
>  $$ \varphi_{X_1}\left(t\right) =1-\frac{1}{2}\sigma^{2}t^{2}+ o\left(t^{2}\right) $$ 
> 可知 $\ln\left| \varphi_{X_1}\left(t\right) \right|$在 $0$附近某个区间上严格小于零, 且由于 $\left|\varphi_{X_1} \right|\le 1$, $\ln\left| \varphi \right|$在$\left[ 0,1 \right]$上是非正的, 从而对于固定的 $t\neq 0$.
>  $$ \int_{0}^{1}\ln\left| \varphi_{Y_1}\left(xt\right) \right|\,\mathrm{d} x< 0  $$
> 那么
>  $$ \lim_{n\to \infty}\ln\left| \varphi_{Z_{n}}\left(t\right) \right| =-\infty  $$  
> 但是 若 $\left\{ S_{n} \right\}$服从大数定律, 则 $Z_{n}$依概率收敛于零, 进而其弱收敛于零, 由[[thm - Lévy's Continuity Theorem]], $\varphi_{Z_{n}}\left(t\right)$逐点收敛于1, 那么 $\ln\varphi_{Z_{n}}\left(t\right)$应该逐点收敛于0. 这与之前的讨论矛盾, 因此 $\left\{ S_{n} \right\}$不服从大数定律.

> [!exercise] Exercise:
> 分别用随机投点法和平均值法计算下列定积分:
> $$
> \begin{aligned}
> J_1 = \int_0^1 \frac{e^x - 1}{e - 1} \mathrm{d}x, \quad J_2 = \int_{-1}^1 e^x \mathrm{d}x.
> \end{aligned}
> $$

> [!solution]- 
>
> **1. $J_1 = \int_0^1 \frac{e^x - 1}{e - 1} \mathrm{d}x$**
>
> *   **平均值法**:
>     设 $X_i \sim U(0, 1)$.由 $\mathbb{E}[f(X)] = \int_0^1 f(x)\mathrm{d}x$,构造估计量:
>     $$\hat{J}_1 = \frac{1}{N} \sum_{i=1}^N \frac{e^{X_i} - 1}{e - 1}.$$
> *   **随机投点法**:
>     设 $(X_i, Y_i)$ 服从 $[0, 1]^2$ 上的均匀分布.定义示性函数 $\xi_i = \mathbf{1}_{\{Y_i \le \frac{e^{X_i}-1}{e-1}\}}$.由 $\mathbb{E}[\xi] = \frac{J_1}{S_{\text{rect}}}$ 且 $S_{\text{rect}}=1$,构造估计量:
>     $$\hat{J}_1 = \frac{1}{N} \sum_{i=1}^N \xi_i.$$
>
> **2.  $J_2 = \int_{-1}^1 e^x \mathrm{d}x$**
>
> *   **平均值法**:
>     设 $X_i \sim U(-1, 1)$.注意积分区间长度为 $2$,故 $J_2 = 2\mathbb{E}[e^X]$.构造估计量:
>     $$\hat{J}_2 = \frac{2}{N} \sum_{i=1}^N e^{X_i}.$$
> *   **随机投点法**:
>     被积函数值域在 $[e^{-1}, e]$ 内,选取包围区域 $D = [-1, 1] \times [0, e]$,面积 $S = 2e$.
>     设 $(X_i, Y_i)$ 服从 $D$ 上的均匀分布.定义 $\eta_i = \mathbf{1}_{\{Y_i \le e^{X_i}\}}$.由 $\mathbb{E}[\eta] = \frac{J_2}{2e}$,构造估计量:
>     $$\hat{J}_2 = \frac{2e}{N} \sum_{i=1}^N \eta_i.$$
