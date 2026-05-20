### 11:14


> [!example] ☆ 例 4.5.7
> 计算积分 $\displaystyle I = \int_0^{\pi/2} \ln\sin x\,dx$.（武汉大学）


> [!note] Note: 
> 利用$\ln$的代数性质, 把乘积拆开


$x\to 0$, $\sin x\to 0$,  $\ln \sin x\sim \ln x= o\left(x^{-\lambda}\right)$

$$ \frac{\ln \sin x }{x^{-\lambda } } \sim \frac{\frac{\cos x }{\sin x } }{\left(x^{-\lambda }\right)^{\prime}  }\sim \frac{1 }{\tan x\left(x^{-\left(\lambda + 1\right)}\right) }\sim \frac{x^{\lambda + 1} }{\tan x }\sim x^{\lambda }\to 0\quad x\to 0$$ 

Convergent

Let $x= 2t$, then 

$$ \begin{aligned} I&= \int _{0}^{\frac{\pi  }{2 }}\ln \sin x\,d x\\&= \int _{0}^{\frac{\pi  }{4 }}\ln \sin \left(2t\right)\,d \left(2t\right)\\&=2\int _{0}^{\frac{\pi  }{4 }}\ln 2+ \ln \sin t+ \ln \cos t\,d t \\&= \frac{\pi  }{2 }\ln 2+ 2\int _{0}^{\frac{\pi  }{4 }}\ln \sin t+ 2\int _{0}^{\frac{\pi  }{4 }}\ln \cos t\,d t\\&= \frac{\pi  }{2 }\ln 2+ 2\int _{0}^{\frac{\pi  }{4 }}\sin t\,d t+ 2\int _{\frac{\pi  }{4 }}^{\frac{\pi  }{2 }}\ln \sin t\,d t\\&= \frac{\pi  }{2 }\ln 2+ 2I\end{aligned} $$ 

$$ I= -\frac{\pi  }{2 }\ln 2 $$ 




> [!example] ☆ 例 4.5.8
> 计算积分 $\displaystyle \int_0^{+\infty} \frac{\ln x}{1+x^2}\,dx$.（北京航空航天大学）



Let $x= \tan t$, then 
$$ \int _{0}^{\infty}\frac{\ln x }{1+ x^{2} }\,d x= \int _{0}^{\infty}\ln \left(\tan t\right)\cos ^{2}t\,d \left(\tan t\right) $$ 

$$ d\tan t= \left(\frac{\sin x }{\cos x }\right)^{\prime} \,d t= \frac{\cos ^{2}t-- \sin ^{2}t }{\cos ^{2}t }= \operatorname{sec}^{2}t\,d t $$ 

$$ \int _{0}^{\infty}\frac{\ln x }{1+ x^{2} }\,d x= \int _{0}^{\frac{\pi  }{2 }}\ln \left(\tan t\right)\,d t $$ 

$$ \int _{0}^{\frac{\pi  }{2 }}\ln \left(\tan t\right)\,d t= \int _{0}^{\frac{\pi  }{2 }}\ln \sin t-\ln \cos t\,d t= 0 $$ 
### 14:33
> [!theorem] 定理 3.5.2
> 设 $f$ 是空间 $L^p[a,b]$ 上的有界线性泛函, 则存在唯一的 $y\in L^q[a,b]$, 其中 $\frac{1}{p}+\frac{1}{q}=1$, 使得
> $$
> f(x)=\int_a^b x(t)y(t)dt, \tag{3.5.2}
> $$
> 并且
> $$
> \|f\|=\|y\|=\left(\int_a^b |y(t)|^q dt\right)^{1/q}. \tag{3.5.3}
> $$
> 反之, 任意 $y\in L^q[a,b]$, 式 (3.5.2) 定义了 $L^p[a,b]$ 上的一个有界线性泛函.


我们希望定义
$$ f\left(\chi _{s}\right)= \int _{a}^{s}y\left(t\right)\,d t $$ 

只能考虑
$$ g\left(s\right)= f\left(\chi _{s}\right) $$ 

需要说明$g\left(s\right)$是ac的. 事实上
$$ \begin{aligned} \begin{aligned} \sum \left| g\left(b_{k}\right)-g\left(a_{k}\right) \right|&= \sum \varepsilon _{k}\left(g\left(b_{k}\right)-g\left(a_{k}\right)\right)\\&= \sum \varepsilon _{k}f\left(\chi _{b_{k}}-\chi _{a_{k}}\right)\\&= f\left(\sum \varepsilon _{k}\left(\chi _{b_{k}}-\chi _{a_{k}}\right)\right)\\&\le \left\| f \right\|\left\| \sum \varepsilon _{k}\left(\chi _{b_{k}}-\chi _{a_{k}}\right) \right\|_{L^{p}}\\&= \left\| f \right\|\left(\sum \left| b_{k}-a_{k} \right| \right)^{\frac{1}{p}} \\&\le \left\| f \right\|\delta ^{\frac{1}{p}}\end{aligned} \end{aligned}  $$ 
$$ f\left(\chi _{a}\right)= g\left(a\right)= 0 $$ 
于是$g$是$ac$的. 定义
$$ y\left(t\right)= g^{\prime} \left(t\right) $$ 
Then $y\in L^{1}$.
$$ f\left(\chi _{s}\right)= g\left(s\right)= \int _{a}^{s}y\left(t\right)\,d t= \int _{a}^{b}\chi _{s}\left(t\right)y\left(t\right)\,d t $$ 
对于简单函数$\varphi$
$$ f\left(\varphi \right)= \int _{a}^{b}\varphi \left(t\right)y\left(t\right)\,d t $$ 

我们希望说明
$$ f\left(x\right)= \int _{a}^{b} x\left(t\right)y\left(t\right)\,d t$$ 

但是目前只有$y\in L^{1}$, 所以只能处理有界的$x$, 取有界的可测函数$x$, 和一致有界的阶梯函数$x_{n}$, 使得, 用控制收敛定理导出

$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t,\quad x\in L^{\infty} $$ 

主要是得说明$y\in L^{q}$, 

有了有界, 就可以做上界阶段, 
$$ y_{N}\left(t\right)= \begin{cases} y \left| y \right|^{q-2} ,\quad \left| y\left(t\right) \right|\le N\\0,&\left| y\left(t\right) \right|\ge N   \end{cases}  $$ 
Then $y_{N}\left(t\right)\in L^{\infty}$,  we have 

$$ f\left(y_{N}\left(t\right)\right)= \int_{\left| y \right|< N }\left| y \right|^{q}\,d t\le \left\| f \right\|\left\| y_{N} \right\|_{L^{p}}  $$ 

$$ \left\| y_{N} \right\|_{L^{p}}= \left(\int _{\left| y \right| \le N} \left| y \right|^{p\left(q-1\right)}\right) ^{\frac{1}{p}}= \left\| y_{N} \right\|_{L^{q}}^{\frac{q}{p}}$$ 

$$  $$ 

We have 
$$ \left\| y_{N} \right\|_{L^{q}}^{q}\le \left\| f \right\|\left\| y_{N} \right\|_{L^{q}}^{\frac{q}{p}}\implies \left\| y_{N} \right\|_{L^{q}}\le \left\| f \right\| $$ 
Let $N\to \infty$, 得到
$$ \left\| y \right\|_{L^{q}}\le \left\| f \right\| $$ 
因此$f\in L^{q}$, 对于 $x\in L^{p}$, 取$x_{n}$使得$\left\| x_{n}-x \right\|_{L^{p}}\to 0$, $x_{n}\to x$ a.e. 
则对于$x= 0$a.e. is trivial , 对于$\left\| x \right\|_{L^{p}}> 0$, 取$x_{n}$, 使得$\left\| x_{n} \right\|\le 2\left\| x \right\|$, 则
$$ \left\| x_{n}y \right\|_{L^{1}}\le 2\left\| x \right\|_{L^{p}}\left\| y \right\|_{L^{q}}< \infty $$ 
由$f$的连续性, 
$$  f\left(x\right)= \lim_{n\to \infty}f\left(x_{n}\right)$$ 
由控制收敛定理
$$ \lim_{n\to \infty}f\left(x_{n}\right) = \lim_{n\to \infty}\int x_{n}\left(t\right)y\left(t\right)\,d t= \int x\left(t\right)y\left(t\right)\,d t$$ 

于是
$$ f\left(x\right)= \int x\left(t\right)y\left(t\right)\,d t,\quad x\in L^p $$ 


$$ \left| f\left(x\right) \right|\le \left\| x \right\|_{L^{p}}\left\| y \right\|_{L^{q}}\implies \left\| f \right\|\le \left\| y \right\|_{L^{q}}  $$ 

Thus

$$ \left\| y \right\|_{L^{q}} = \left\| f \right\|$$ 

反之, 任取$y\in L^{q}$, 定义
$$ f\left(x\right) = \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t$$ 
是良定义的, 并且由Holder不等式, $f\in \left(L^{p}\right)^{*}$.

> [!theorem] 定理 3.5.3
> 对于每一个 $f\in c^*$, 存在数 $\alpha$ 及 $\{a_n\}\in l^1$, 使得对于每一个 $x\in c$, $x=\{\xi_n\}$,
> $$
> f(x)=\alpha \lim_{n\to\infty} \xi_n + \sum_{n=1}^\infty a_n \xi_n, \tag{3.5.9}
> $$
> 且
> $$
> \|f\|=|\alpha|+\sum_{n=1}^\infty |a_n|.
> $$
> 反之, 如果给定 $\alpha$ 及 $\{a_n\}\in l^1$, 则式 (3.5.9) 决定了 $c$ 上的一个有界线性泛函.


$c$ = convergent 点列

如果这个成立
$$ f\left(x\right)= \alpha \lim_{n\to \infty}\xi _{n}= \sum _{n = 1}^{\infty}a_{n}\xi _{n} $$ 

那么特别地
$$ f\left(e_{n}\right) = a_{n}$$ 

于是我们定义
$$ a_{n}= f\left(e_{n}\right) $$ 

此外, 若上式成立, 对于$\xi _{n}\equiv 1$, 必须让
$$ f\left( \mathbf{1}\right) = \alpha $$ 

所以$\alpha$的选择也是唯一的, 就是
$$ \alpha = f\left(\mathbf{1}\right) -\sum _{n = 1}^{\infty}a_{n}$$ 
这个定义需要一个前提, 就是$\left\{ a_{n} \right\}\in \ell ^{1}$.



$$ x= le+ \sum _{k= 1}^{\infty}\left(\xi _{k}-l\right)e_{k} $$ 
因为$\left\{ e_{k} \right\}$是$x$的一个Schauder基.