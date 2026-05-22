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


$$ x= \left\{ \xi _{n} \right\} $$ 
$$ x= \sum _{n = 1}^{\infty}\xi _{n}e_{n} $$ 


$\lim_{n\to \infty}x_{n}= l$

$$ x= le + \sum _{n = 1}^{\infty}\left(\xi _{n}-l\right)e_{n} $$ 

$$ \left| x- l e - \sum _{n = 1}^{N}\left(\xi _{n}-l\right)e_{n} \right| = \sup _{n> N} \left| \xi _{n}-l \right|\to 0  $$ 

$$ \left| x- \sum _{n = 1}^{N}\xi _{n}e_{n} \right| = \sup _{n> N}\left| \xi _{n+ 1} \right| = ? $$ 

$$ x = le + \sum _{n = 1}^{\infty}\left(\xi _{n}-l\right)e_{n} $$ 

$$ a _{n}= f\left(e_{n}\right) $$ 

$$ \sum a_{n}= \sum f\left(e_{n}\right) $$ 

$$ f\left(x\right)= l f\left(e\right)+ \sum _{n = 1}^{\infty}\left(\xi _{n}-l\right)f\left(e_{n}\right) $$ 

所以说这里仍然是一个截断.

对象降级,

级数与逼近



$\xi _{n}= \operatorname{sgn}a_{n}= \operatorname{sgn}f\left(e_{n}\right)$, $n\le r$, 对于$n> r$, $\xi _{n}= 0$, then 
$$ \left| f\left(x\right) \right|= \sum _{n = 1}^{r}\left| f\left(e_{n}\right) \right|\le \left\| f \right\|\left\| x \right\|= \left\| f \right\|   $$ 

$$ \sum _{n = 1}^{\infty}\left| f\left(e_{n}\right) \right|< \infty  $$ 

Thus $\left\{ a_{n} \right\}\in \ell ^{1}$. Then $\alpha$ is well defined, we have 
$$ \begin{aligned} f\left(x\right) &= l\left(\alpha + \sum _{n = 1}^{\infty}a_{n}\right)+ \sum  _{n = 1}^{\infty}\left(\xi _{n}-l\right)a_{n}\\&= l\alpha + l\sum _{n = 1}^{\infty}a_{n}+ \sum _{n = 1}^{\infty}\left(\xi _{n}-l\right)a_{n}\\&= l\alpha + \sum _{n = 1}^{\infty}\xi _{n}a_{n} \end{aligned}$$ 




$$ \left| f\left(x\right) \right|\left\| x \right\|\le \left| l \right|\left| \alpha  \right|+ \left\| x \right\|_{\infty}\sum _{n = 1}^{\infty}\left| a_{n} \right|\le \left\| x \right\|_{\infty}\left(\left| \alpha  \right|+ \sum _{n = 1}^{\infty}\left| a_{n} \right|  \right)     $$ 

$$ \left\| f \right\|\le \left| \alpha  \right|+ \sum _{n = 1}^{\infty}\left| a_{n} \right|   $$ 

$$ \xi _{n}= \begin{cases} \operatorname{sgn}a_{n},& n\le N\\\operatorname{sgn}\alpha ,& n \ge N \end{cases}  $$ 

$$ f\left(x\right)= \left| \alpha  \right|+ \sum _{n = 1}^{r}\left| a_{n} \right|  + \operatorname{sgn}\alpha \sum _{n = r+ 1}^{\infty}a_{n} $$ 

$$ \left| f\left(x\right) \right|\le \left| \alpha  \right|+ \sum _{n = 1}^{\infty}\left| a_{n} \right|+ \operatorname{sgn}\alpha \sum _{n = r+ 1} ^{\infty}a_{n}   $$ 
Let $r\to \infty$, we get 
$$ \left\| f \right\|\le \left| f\left(x\right) \right|\le \left| \alpha  \right|+ \sum _{n = 1}^{\infty}\left| a_{n} \right|    $$ 

我们居然发现, 后面的项是不重要的, 随意我们随便指定为$\operatorname{sgn}\alpha$.
o


## 自反性

$X$是赋范空间, 则$X^{*}$是Banach空间.

为什么赋范空间的对偶一定是Banach空间
研究$X$与$X^{**}$的关系, 

若$x\in X$, $f \in X^{*}$, 固定$x$, 如$f$取遍$X^{*}$, 则$x$给出
$$ f\mapsto f\left(x\right),\quad X^{*}\to \mathbb{R}  $$ 
定义为$F_{x}$, $F_{x}\left(f\right)qf\left(x\right)$.

$$ F: X\to X^{**} $$ 
是典范映射, 对于$x_1,x_2\in X$, $\alpha \in K$
$$ F_{x_1+ x_2}= F_{x_1}+ F_{x_2} $$ 

$$ \left| F_{x}\left(f\right) \right|= \left| f\left(x\right) \right|\le \left\| f \right\|\left\| x \right\|\implies \left\| F _{x}\right\|\le \left\| x \right\|   $$ 

有Hahn-Banach, 对于$x\in X$, 存在$f_0\in X^{*}$,使得
考虑$\operatorname{span}\left\{ x \right\}$这个子空间, 则找一个$f_{-1}\in \left(\operatorname{span}\left\{ x \right\}\right)^{*}$, 使得
$$ f_{-1}\left(x\right)= \left\| x \right\| $$ 
则
$$ \left\| f_{-1} \right\|= 1 $$ 
于是存在$f_0\in X^{*}$, 使得
$$ \left\| f_0 \right\|= 1,\quad f_{0}\left(x\right)= \left\| x \right\| $$ 
于是
$$ \left| F_{x}\left(f_0\right) \right|= \left| f_0\left(x\right) \right|= \left\| x \right\|   $$ 


$F_{x}$最大的方向, 就是从$x$方向上的元映射通过Hahn-Banach延拓出来的.

这就说明了
$$ \left\| F_{x} \right\|\ge \left| F_{x}\left(f_0\right) \right|= \left\| x \right\|  $$
故
$$ \left\| F_{x} \right\|= \left\| x \right\| $$  

于是
$$ F: x\mapsto F_{x} $$ 
是一个等距的线性映射. 等距映射一定是单射吗?
我们考虑
$$ \left\| F_{x} \right\|= 0\implies \left\| x \right\|= 0 $$ 
就可以了, 一定是单射. 

$$ F_{x}\in X^{**}, \quad F_{x}: X^{*}\to \mathbb{R} ,\quad f\mapsto f\left(x\right) $$ 

所以$F$是$X$与$X^{**}$的子空间的一个等距同构.

Hahn_banach是说, $X$的对偶空间足够的大. 每个$x$可以通过上述方式得到一个$f_0$. 如果$f_0$和$f_1$都是这种延拓呢, 

所以$X^{*}$只是给每个$x$提供一个忠实的观察方式, 但是无法比较$X$和$X^{*}$的多少, 但是$X$和$X^{**}$之间的关系就显得更加的自然了, $x$可以自动衡量$X^{*}$的取值, 并且衡量的尺度就是自己的范数.


如果$X^{**}$并并不会自己凭空扩张, 那么就是$X$就是自反的.


$L^{p}$是自反的, 因为对于$y\in L^{p}$, 自动给出一个算子
$$ f_{x}: L^{q}\to \mathbb{R} ,x\mapsto  \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 

$\left(L^{p}\right)^{*}\simeq L^{q}$, 通过$f_{y}\sim y$.
另一方面$\left(L^{p}\right)^{*}$
我们需要证明上面的$X\to X^{**}$是一个满射, 对于每个$F\in \left(L^{p}\right)^{**}$, 则存在$g\in \left(L^{q}\right)^{*}$, 使得
$$ F\left(f_{y}\right)= g\left(y\right) $$ 
而$g\in \left(L^{q}\right)^{*}\simeq L^{p}$, 存在 $x\in L^{p}$, 使得
$$ g\left(z\right)= \int _{a}z\left(t\right)x\left(t\right)\,d t $$ 
所以
$$ F\left(f_{y}\right)= \int _{a}y\left(t\right)x\left(t\right)\,d t $$ 

$$ \left(L^{p}\right)^{**}\simeq \left(L^{q}\right)^{*}\simeq L^{p} $$ 
所以问题就是$\left(L^{p}\right)^{*}\simeq L^{q}$这个操作在两边取对偶下是不是保持的.
任取$F\in \left(L^{p}\right)^{**}$, 则存在$x\in L^{p}$, 使得
$$ \left\| F \right\|= \left\| x \right\|,\quad F\left(f\right)= f\left(x\right) $$ 

然后我们利用$\left(L^{p}\right)\simeq \left(L^{q}\right)^{*}$
任取$y\in L^{q}$, 存在一个$f\in \left(L^{p}\right)^{*}$, 使得
$$ f\left(x\right)= \int x\left(t\right)y\left(t\right)\,d t ,\quad x\in L^{p}$$ 

令
$$ \varphi : L^{q}\to \left(L^{p}\right)^{*} $$ 

对于$y\in L^{q}$

$$ \varphi \left(y\right)\in \left(L^{p}\right)^{*} $$ 

定义$F_1\in \left(L^{q}\right)^{*}$, 
$$ F_1\left(y\right)= F\left(\varphi y\right) $$ 
则
$$ F_1\left(y\right)= F\left(\varphi y\right)= \left(\varphi y\right)\left(x\right) $$ 

$$ \left(\varphi y\right)\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 
所以
$$ F_1\left(y\right)= \int _{a}x\left(t\right)y\left(t\right)\,d t $$ 

$F_1= x^{*}$
将$\varphi y$记作$f$, 记住$y\in L^{q}$, $f\in \left(L^{p}\right)^{*}$, 则
$$ f\left(x\right)= \int _{a}^{b}x\left(y\right)y\left(t\right)\,d t= F_1\left(y\right)= F\left(f\right) $$ 
所以对于每个$F$, 都存在这样一个$f$, 在捋一遍是如何找到的.

对于$F\in \left(L^{p}\right)^{**}$的, 也就是说$\left(\left(L^{p}\right)^{*}\right)^{*}$, 先把$\left(L^{p}\right)^{*}$当成$L^{q}$, 那么$\left(L^{p}\right)^{**}$就被当成$\left(L^{q}\right)^{*}\simeq L^{p}$

对于$y\in L^{q}$, 我们知道$L^{q}\simeq \left(L^{p}\right)^{*}$, 

$$ f \sim y,\quad f\in \left(L^{p}\right)^{*},\quad y\in L^{q} $$ 
那么$F$就切实地作用在$f$上了. 定义一个$F_1\in \left(L^{q}\right)^{*}$, 这一步是把$\left(L^{p}\right)^{**}$当成是$\left(L^{q}\right)^{*}$,如何做, 就是定义这个$F_1$, 按照
$$ F_1\left(y\right)= F\left(f\right) $$ 
Ok, 现在就定义好了一个$F_1\in \left(L^{q}\right)^{*}$, 

也就是说, 我们把$F$当成是$\left(\left(L^{p}\right)^{*}\right)^{*}$, 通过对偶, 考虑$F$如何作用在$\left(L^{p}\right)^{*}$, 就是如何作用在$L^{q}$上, 中间精力了一个等距同构.

现在, 存在$F_1\in \left(L^{q}\right)^{*}$, 使得
$$ F_1\left(y\right)= F\left(f\right) $$ 

由于$\left(L^{q}\right)^{*}\simeq L^{p}$, 存在一个$x\in L^{p}$, 使得
$$ F_1\left(y\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t,\quad \left\| F_1 \right\|= \left\| x \right\| $$ 

而
$$ \int _{a}^{b}x\left(t\right)y\left(t\right) $$
也可以看成是作用在$x$上的, 也就是
$$ f\left(x\right) $$ 


于是
$$ F\left(f\right)= \int _{a}x\left(t\right)y\left(t\right)\,d t= f\left(x\right) $$ 

我们找到了$x\in L^{p}$,
$$ F\left(f\right)= f\left(x\right) $$ 
注意到这是$x$和$F$在典范同构中是一对的.

但是$C\left[ a,b \right]$不是自反的, 我们会愚蠢
$$ C\left[ a,b \right]\simeq \left(V_0\left[ a,b \right]\right)^{*} $$ 
如果$C\left[ a,b \right]$是自反的, 对于任意的$x\in C\left[ a,b \right]$, 存在$F\in \left(C\left[ a,b \right]\right)^{**}$, 使得
$$ F_{x}\left(f\right)= f\left(x\right),\quad \forall f\in C\left[ a,b \right]^{*} $$ 

$$ F_{x}\left(f\right) = f\left(x\right)= \int _{a}^{b}x\left(t\right)d\nu \left(t\right)$$ 
其中$\nu \left(t\right)$是对应的有界函数, 记作$f\left(t\right)$
则
$$ F_{x_0}\left(f\right)= \int _{a}^{b} $$ 

所以什么
$$ x\left(t\right)\mapsto \int _{a}^{b}x\left(t\right)d\nu \left(t\right) $$ 

对于测度$\nu \left(t\right)$, 设对应的有界变差函数是$f$, 考虑$f$在$t_0$处的原子

$$ f\left(t_0+ 0\right)-f\left(t_0-0\right) $$ 
把$F_{x_0}$就定义为取$f$在$t_0$处的原子
$$ F_{x_0}\left(f\right)= f\left(t_0+ 0\right)-f\left(t_0-0\right) $$ 
那么
$$ \left| F_{x_0}\left(f\right) \right|\le V_{a}^{b}\left(f\right)= \left\| f \right\|\implies \left\| F_{x_0} \right\|\le 1  $$ 
若$F_{x_0}\left(f\right)\neq 0$, 就是考虑在$t_0$处有原子的一个 $f$, 则存在$x_0\in C\left[ a,b \right]$, 这就是自反性了, 存在$x_0$, 使得
$$ F_{x_0}\left(f\right)= \int _{a}^{b}x_0\left(t\right)df\left(t\right) $$ 
$$ f_0\left(t\right)= \int _{0}pwt x_0\left(\tau \right)d\tau $$ 
则
$$ F_{x_0}\left(f_0\right)= 0 $$ 


如果$C\left[ a,b \right]$是自反的, 对于任的$F$, 存在$x$使得
$$ F\left(x\right)= f\left(x\right),\quad \forall f\in V_0\left[ a,b \right] $$ 

当我们写$f\left(x\right)$, 意思是$f\in V_0^{*}$作用在$x$上, 当我们写$f\left(t\right)$, 意思是$f$对应的那个有界变差函数$f\left(t\right)$

现在我们考虑一个特殊的$F_{x_0}\in C\left[ a,b \right]^{**}$, 它提取所有有界变差函数在$t_0$处的跳跃, 定义为
$$ F_{x_0}\left(f\right)= f\left(t_0+ 0\right)-f\left(t_0-0\right) $$ 
是存在某个某个$f_0$ , 使得
$$ F_{x_0}\left(f_0\right)\neq 0 $$ 
的, 我们先承认这件事情, 那么$F_{x_0}$就不是一个零, 于是根据自反性, 存在$x_0$, 使得
$$ F_{x_0}\left(f\right)= f\left(x_0\right) $$ 
而
$$ \left| F_{x_0}\left(f\right) \right|\le V_{a}^{b}\left(f\right)= \left\| f \right\|  $$ 
这说明$\left\| F_{x_0} \right\|\le 1$, $F_{x_0}$确实是一个有界线性oC泛函
这是前面的补充.

好的, 现在

$$ f\left(x_0\right)= f\left(t_0+ 0\right)-f\left(t_0-0\right) $$  
对于所有的$f$成立. 这是通过自反性找到的一个特殊的函数$x_0$.

现在需要找一个特殊的$f_0$来反驳上这个等式. 我们让$f_0$在$t_0$处没有跳跃.
$$ f_0\left(t\right)= \int _{a}^{t} $$ 

所有$f$在$x_0$这个函数的取值.的取值,都是他们在$t_0$的跳跃. 如果$f$在$t_0$没有跳跃, 那么取在$x_0$上必须是零. 所以我们让$f_0$在$x_0$上不能是零, 并且还不能有跳跃, 那最后就是连续的. 并且跟$x_0$挤在一块
$$ f_0\left(t\right)= \int _{a}^{t}x_0\left(\tau \right)d\tau  $$ 
这是那个有界变差函数
$$ f_0\left(x_0\right)= \int _{a}^{b}x_0\left(t\right)df_0\left(t\right)= \int _{a}^{b}x_0^{2}\left(t\right)\,d t> 0 $$ 
如果$x_0\neq 0$

$$ F_{x_0}\left(f_0\right)= f_0\left(x_0\right) $$ 
所以说我是怎么发现需要看跳跃的呢? 跳跃会产生什么, 如果是自反的, 每个线性泛函都能对应一个$x$, 那么考虑$x$是如何自然地作用在上面的, 
也就是说$F$这个作用的形状是固定的, 他只能张成

$$ F_{x_0}\left(f\right)= f\left(x_0\right) $$ 
这是它的形状, 而$f\left(x_0\right)$的形状也是固定的, 它只能边长
$$ f\left(x_0\right)= \int _{a}^{b}x_0\left(t\right)df\left(t\right) $$ 
这里把$f\left(x_0\right)$和$f\left(t\right)$灵活的看待. 

所以$F_{x_0}\left(f\right)= \int _{a}^{b}x_0\left(t\right)df\left(t\right)$
$f$得表现得像是一个测度, 而$F_{x_0}$是作用在有界变差函数上的一个线性算子.  
作用在有界变差函数上的线性算子, 可以让$f$表现得像一个测度. 所以我们的核心矛盾点就是说, 找到一个线性算子, 让他通过$x_0$暴露出它不是一个测度的事实. 让$F_{x_0}$是体现跳跃, 那么表现成为测度这件事情实在是太好了, 每个$f$都像是测度? 跳跃函数是很窄的, 它能让你只在$t_0$附近像是有些东西, 有些东西给你测量, 别的地方全没有, 只要你是连续的, 你就什么都测不出来. 所以说你必须是零, 这太苛刻.    你又得只能在一块表现, 又得像是一个连续的测度, 直接就被杀掉了.