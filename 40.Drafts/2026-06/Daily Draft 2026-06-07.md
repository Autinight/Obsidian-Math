### 09:33



$L^{2}\left(\mathbb{R} \right)$局部可积, 定义
$$ c_{r}\left(t\right)= \int _{-r}^{r}f\left(x\right)e^{-2\pi ix}\,d x $$ 

若存在极限, 则成为$f$在$L^{2}\left(\mathbb{R} \right)$的Fourier变换.



$$ \left\| f \right\|_{2}= \left\| \hat{f} \right\|_{2} $$ 

证明
$$ \int _{-\infty}^{\infty}f\left(u\right) \overline{f\left(u-x\right)}\,d x= \int _{-\infty}^{\infty}\left| \hat{f}\left(t\right) \right| ^{2}e^{2\pi ixt}\,d t $$ 

$L^{1}$函数的卷积也是$L^{1}$的, 于是

我们有Parsevel恒等式, 
$$ \hat{h}= \hat{g}\cdot \hat{f}= \overline{\hat{f}} \hat{f}= \left| \hat{f} \right| ^{2}\ge 0 $$ 

$$ \left| h\left(x\right) \right|\le \left\| f \right\|_{2}\left\| f \right\|_{2}  $$ 
$h$有界.

设$f\in L\left(\mathbb{R} \right)$, 

$f$可积, 有界, $\hat{f}$非负, 则反演公式成立.
非负, 有界, 反演公式成立

$$ h\left(x\right)= \int _{-\infty}^{\infty}\left| \hat{f}\left(t\right) \right| ^{2}e^{2\pi ixt}\,d t $$ 
设$f\in L^{2}$, 则存在$\hat{f}$, 使得
$$ \lim_{r\to \infty}\left\| \hat{f}-c_{r} \right\|_{2}= 0 $$ 
我们知道$L^{1}$的, 有这样的关系成立.

$$ \left< f,g \right>= \left< \hat{f} , \hat{g} \right> $$ 

$$ \left< f, \hat{g} \right>= \left< \hat{f}, g \right> $$ 
做截断, 则$L^{1}\cap L^{2}$.

$f,g\in L^{2}\left(\mathbb{R} \right)$, 则乘积的变换是变换的卷积. 因为乘积是$L^{2}$的, 所以可以这样运算.

如果$f\in L^{2}$, $g\in L^{1}$, 则
如果一个$L^{2}$, 一个车$L^{1}$ , 那么左边有定义,


求
$$ \int _{-R}^{R}\frac{\sin t }{t } e^{-ixt}\,d t $$ 

$$
D _ {1} (x) = \lim _ {R \rightarrow \infty} \frac {1}{\pi} \int_ {- R} ^ {R} \frac {\sin t}{t} \cos x t \mathrm{d} t,
$$



$$ F\left[ \chi _{\left[ -\frac{1 }{2 },\frac{1 }{2 } \right]} \right]\left(t\right)= \frac{\sin \pi t }{\pi t } $$ 

$$ F\left[ \chi _{\left[ -\frac{a }{2\pi  }, \frac{a }{2\pi  } \right]} \right]= F\left[ \chi _{\left[ -\frac{1}{2},\frac{1}{2} \right]}\left(\frac{\pi  }{a }x\right) \right]\left(t\right)= \frac{a }{\pi  }\frac{\sin at }{\pi  \frac{a }{\pi  }t }= \frac{\sin at }{\pi t } $$ 


$$ F\left[ \pi  \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]} \right]\left(t\right)= \frac{\sin at }{t } $$ 

$$ F\left[ \pi \chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} \right]\left(t\right)= \frac{\sin t }{t } $$ 

$$ \int _{-R}^{R}\frac{\sin t }{t }e^{-ixt} \,d t=  \pi \int _{-\frac{R }{2\pi  }}^{\frac{R }{2\pi  }}\frac{\sin 2\pi t }{ \pi t }e^{-2\pi ixt}\,d t$$ 


$$ F\left[ \chi _{\left[ -1,1 \right]} \right]\left(t\right)= \frac{\sin 2\pi t }{\pi t } $$ 
于是
$$ \int _{-R}^{R}\frac{\sin t }{t }e^{-ixt}\,d t = \pi F_{\frac{R }{2\pi  }}\left[ F\left[ \chi _{\left[ -1,1 \right]} \right]\left(t\right) \right]\left(x\right)$$ 
由于$\frac{\sin 2\pi t }{\pi t }\in L^{1}\cap L^{2}$, 
我们有
$$ \lim_{R\to \infty}\int _{-R}^{R}\frac{\sin t }{t }e^{-ixt} \,d t=  \pi   \chi _{\left[ -1,1 \right]}\left(-x\right)= \pi \chi _{\left[ -1,1 \right]}\left(x\right)$$ 

$e^{2\pi ixt}$是谁的
$$
I (a, \lambda) = \frac {1}{\pi} \int_ {- \infty} ^ {\infty} \frac {\sin t}{t} \frac {\sin \lambda (t - a)}{t - a} \mathrm{d} t,
$$



$$ F\left[ \chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} \right]= \frac{\sin t }{\pi t } $$  

$$ F\left[e^{2\pi iax} \chi _{\left[ -\frac{\lambda  }{2\pi  }, \frac{\lambda  }{ 2\pi } \right]} \right]\left(t\right)= \frac{\sin \lambda t }{\pi t }= \frac{\sin \lambda \left(t-a\right) }{\pi \lambda \left(t-a\right) } $$ 

$$ \int _{-\infty}^{\infty}f\left(x\right)e^{2\pi iat}e^{-2\pi ixt} \,d t= \int _{-\infty}^{\infty}e^{-2iix\left(x-a\right)pt}\,d t= \hat{f}\left(x-a\right)$$ 

$$ \tau _{a}\left(\frac{\sin \lambda t }{ t}\right) $$ 

于是
$$ \int _{-\infty}^{\infty}\chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} \chi _{\left[ -\frac{\lambda  }{2\pi  }, \frac{\lambda  }{2\pi  } \right]}e^{2\pi i ax}\,d x= \frac{1 }{\pi  }I\left(a,\lambda \right)$$ 
当$\lambda \ge 1$时, 
$$ \begin{aligned} \frac{1 }{\pi  }I\left(a,1\right)&= \int _{-\frac{1 }{2\pi  }}^{\frac{1 }{2\pi  }}e^{2\pi iax}\,d x= \frac{1 }{2\pi ia }\left[ e^{2\pi iax} \right] _{-\frac{1 }{2\pi  }}^{\frac{1 }{2\pi  }}= \frac{1 }{2\pi ia }\left(e^{iax}-e^{-iax}\right)= \frac{2i\sin ax }{2\pi ia }\\&= \frac{\sin ax }{2\pi a } \end{aligned}$$ 

$$ \lambda< 1时, \frac{1 }{\pi  }I\left(a,\lambda \right)= \int _{-\frac{\lambda  }{2\pi  }}^{\frac{\lambda  }{2\pi  }}e^{2\pi  iax} \,d x= \frac{1 }{2\pi ia }2i \sin \lambda x= \frac{\sin \lambda ax }{2\pi a } $$ 
于是
$$ I\left(a, \lambda \right)= \begin{cases} \frac{\sin \lambda a }{a }, &\lambda < 1\\\frac{\sin a }{a }, &\lambda \ge 1 \end{cases}  $$ 
卷积形式的积分方程
$$ f\left(x\right)= \int _{-\infty}^{\infty}K\left(x,y\right)\varphi \left(y\right)\,d y= K* \varphi  $$ 

$\widehat{K}\left(t\right)\cdot \widehat{\varphi}\left(t\right)= \hat{f}\left(t\right)$

$$ \widehat{\varphi}\left(t\right)= \frac{\hat{f}\left(t\right) }{\widehat{K}\left(t\right) } $$ 
如果右端是$L^{2}$的, Fourier逆变换
$$ \varphi \left(x\right)= \mathcal{F}^{-1} \left[ \frac{\hat{f} }{\widehat{K} } \right] \left(x\right)$$ 


$$ \widehat{\varphi}- \lambda  \mathcal{F}\left(e^{-\left| x \right| }\right)\left(t\right) \cdot \widehat{\varphi}\left(t\right)= f\left(x\right) $$ 


$$ \begin{aligned} \begin{aligned} \begin{aligned} \mathcal{F}\left(e^{-\left| x \right| }\right)\left(t\right)&= \int _{-\infty}^{\infty}e^{-\left| x \right| }e^{2\pi ixt} \,d x\\&= \int _{0}^{\infty}e^{-x} e^{2\pi ixt}+  \int _{0}^{\infty} e^{x} e^{ 2\pi ixt}\,d x\\&= \int _{0}^{\infty}e^{x\left(2\pi it-1\right)}+ \int _{0}^{\infty} e^{x\left(2\pi i t+ 1\right)}\,d x\\&= -\frac{1 }{2\pi it -1 } - \frac{1 }{2\pi it + 1 }= \end{aligned} \end{aligned} \end{aligned}$$ 

$$ \int _{-\infty}^{\infty} e^{-x \left(2\pi it + 1\right)} +  e^{x\left(2\pi it -1\right)} $$ 

$$ \frac{1 }{1+  2\pi it } +  \frac{1 }{1- 2\pi it }= \frac{2 }{1+  4\pi ^{2}t^{2} } $$ 

$$ \widehat{\varphi}- \lambda \frac{2 }{1+ 4\pi ^{2}t^{2} }\widehat{\varphi}= \hat{f} $$ 

$$ \widehat{\varphi}= \hat{f}\left(\right) $$ 

$$ \widehat{\varphi}\left(1-\frac{2\lambda  }{1+ 4\pi ^{2}t^{2} }\right)= \hat{f} $$ 

$$ \widehat{\varphi}\frac{1-2\lambda + 4\pi ^{2}t^{2} }{1+ 4\pi ^{2}t^{2} }= \hat{f} $$ 

$$ \widehat{\varphi}= \frac{1+ 4\pi ^{2}t^{2} }{1-2\lambda + 4\pi ^{2}t^{2} }\hat{f} $$ 

$$ \varphi \left(x\right)= \mathcal{F}^{-1} \left(\frac{1+ 4\pi ^{2}t^{2} }{1-2\lambda + 4\pi ^{2}t^{2} }\hat{f}\right) $$ 

> [!exercise] 9
> 求积分方程
> $$
> \int_{-\infty}^{\infty}
> \frac{u(t)}{(x-t)^2+a^2}\,dt
> =
> \frac{1}{x^2+b^2},
> \qquad 0<a<b
> $$
> 的解 $u(t)\in L^2(\mathbb{R})$。



$$ \hat{u}\cdot  \mathcal{F}\left[ \frac{1 }{x^{2}+ a^{2} } \right] = \mathcal{F}\left[ \frac{1 }{x^{2}+ b^{2} } \right]$$ 


$$ \mathcal{F}\left[ e^{-\left| x \right| } \right]= \frac{2 }{1+ 4\pi ^{2}t^{2} } $$ 

$$ \mathcal{F}\left[ e^{-\left| rx \right| } \right] = \frac{1 }{r }\frac{2 }{1+ 4\pi ^{2}\left(\frac{t }{r }\right)^{2} }= \frac{1 }{r }\frac{r^{2} }{4\pi ^{2} }\frac{2 }{\frac{r^{2} }{4\pi ^{2} }+ t^{2} }= \frac{r }{2\pi ^{2} }\frac{1 }{\frac{r^{2} }{4\pi ^{2} }+ t^{2} }$$ 
令
$$ \frac{r^{2} }{4\pi ^{2} }= a^{2}, then \quad r= 2\pi a $$ 
We have 
$$ \mathcal{F}\left[ e^{-\left| 2\pi a x \right| } \right] \left(t\right)= \frac{2 }{2\pi a }\frac{1 }{1+ 4\pi ^{2} \frac{t^{2} }{4\pi ^{2}a^{2} } }= \frac{1 }{\pi a }\frac{1 }{1+  \frac{t^{2} }{a^{2} } }= \frac{1 }{\pi a }\frac{a^{2} }{a^{2}+ t^{2} }= \frac{a }{\pi  }\frac{1 }{a^{2}+ t^{2} }$$ 
Then
$$ \mathcal{F}\left[ \frac{\pi  }{a }e^{-\left| 2\pi ax \right| } \right] \left(t\right)= \frac{1 }{a^{2}+ t^{2} }$$ 

$$ \mathcal{F}\left[ \frac{1 }{a^{2}+ x^{2} } \right] \left(t\right)= \frac{\pi  }{a }e^{-\left| 2\pi a\left(-t\right) \right| }= \frac{\pi  }{a }e^{-\left| 2\pi at \right| }$$ 

Similarly, 
$$ \mathcal{F}\left[ \frac{1 }{b^{2}+ x^{2} } \right] \left(t\right)=  \frac{\pi  }{b }e^{-\left| 2\pi bt \right| }$$ 
We have 
$$ \hat{u} \frac{\pi  }{a }e^{-\left| 2\pi at \right| }= \frac{\pi  }{b }e^{-\left| 2\pi bt \right| } $$ 

$$ \hat{u}= \frac{a }{b }e^{\left| 2\pi at \right| }e^{-\left| 2\pi bt \right| }= \frac{a }{b }e^{2\pi \left(a-b\right)\left| t \right| } $$ 

$$ \begin{aligned} \begin{aligned} \begin{aligned} u\left(x\right)&= \int _{-\infty}^{\infty}\hat{u}e^{2\pi ixt}\,d t\\&= \frac{a }{b }\int _{-\infty}^{\infty}e^{2\pi \left(a-b\right)\left| t \right| }e^{2\pi ixt} \,d t\\&= \frac{a }{b }\int _{0}^{\infty}e^{2\pi \left(a-b+ ix\right)t}+ e^{2\pi \left(a-b-ix\right)t}\,d t\\&= -\frac{a }{b }\left(\frac{1 }{2\pi \left(a-b+ ix\right) }+ \frac{1 }{2\pi \left(a-b-ix\right) }\right)\\&= \frac{a }{b }\frac{1 }{2\pi  }\left(\frac{1 }{b-a+ ix }+ \frac{1 }{b-a-ix }\right)\\&= \frac{a }{b }\frac{1 }{2\pi  }\frac{1 }{\left(b-a\right)^{2}+ x^{2} } = \frac{1 }{2\pi  }\frac{a }{b }\frac{1 }{x^{2}+ \left(b-a\right)sr }\end{aligned} \end{aligned}\end{aligned} $$ 

> [!exercise] Exercise: 
> 设$f\in C\left(\mathbf{T}\right)$, 若$f\left(x\right)$的Fourier级数一致收敛, 则该级数的和为$f\left(x\right)$.

$\left\{ e^{inx} \right\}$是完全的, 即若 
$\left< f,e^{inx} \right>= 0, \forall n\implies f= 0$

若
$$ \left< f,e^{inx} \right> = \left< g,e^{inx} \right>\implies f= g a.e.$$ 


由一致收敛, 级数和积分可交换
$$ \left< g, e^{inx} \right>= \left< \sum _{n = -\infty}^{\infty}c_{n}e^{inx},e^{inx} \right>= \sum _{n = -\infty}^{\infty}\left< c_{n},e^{ikx},e^{inx} \right>= c_{n}$$ 
于是

$$ f= g, a.e. $$ 

> [!exercise] Exercise: 
> 若$f\in L^{p}\left(\mathbb{R} ^{n}\right)$, $\mathscr{K}\in L^{q}\left(\mathbb{R} ^{n}\right)$, $1\le p\le \infty$, $\frac{1 }{ p}+ \frac{1 }{q }= 1$, 证明: $f*\mathscr{K}$在$\mathbb{R} ^{n}$上有界并且连续.



$$ f*\mathscr{K}= \int _{\mathbb{R} ^{n}} f\left(y\right)\mathscr{K}\left(x-y\right)\,d x$$ 

由Minkowski不等式
$$ \left| f*\mathscr{K} \right| \le \left\| f \right\|\left\| \tau _{y}\mathscr{K} \right\| = \left\| f \right\|_{L^{p}}\left\| \mathscr{K} \right\|_{L^{q}}< \infty$$ 
故有界.

$$ \begin{aligned} \left| f*\mathscr{K}\left(x+ h\right) -f*\mathscr{K}\left(x\right)\right| &=  \int _{\mathbb{R} ^{}} \mathscr{K}\left(y\right)\left| f\left(x+ h-y\right)-f\left(x-y\right) \right| \,d y\\\end{aligned} $$ 
由于
$$ \begin{aligned} \begin{aligned} \int _{\mathbb{R}^{n} }\left| \mathscr{K}\left(x+ y\right) \right| \left| f\left(-y+ h\right)-f\left(-y\right) \right| \,d y\\&= \int _{\mathbb{R} ^{n}} \left| \mathscr{K}\left(x-y\right) \right| \left| f\left(y+ h\right) -f\left(y\right)\right|\,d y\\&\le \left( \int _{\mathbb{R} ^{n}}\left| f\left(y+ h\right)-f\left(y\right) \right| ^{p}\,d y\right)^{\frac{1}{p}}\left\| \tau _{x}\mathscr{K} \right\|\\&= \left\| \tau \tau _{-h}-f \right\| \end{aligned} \end{aligned} $$ 
当$p = \infty$, 则

$$ \int _{\mathbb{R} ^{n}} $$ 
由于$f\in L^{\infty}$, 
> [!exercise] Exercise: 
> 设$\mathscr{K}\left(x\right)\in L\left(\mathbb{R} \right)$, 及$\int _{\mathbb{R} }\mathscr{K}\left(x\right)\,d x= a$, 若$f\in L^{p}\left(\mathbb{R} \right)$, $1\le p< \infty$, 证明: 
>  $$ \lim_{\varepsilon \to 0}\left\| f*\mathscr{K}_{\varepsilon} -af\right\|_{p}= 0 $$ 



$$ af\left(x\right)= \int _{\mathbb{R} }\mathscr{K}\left(y\right)f\left(x\right)\,d y $$ 

$$ f*\mathscr{K}_{\varepsilon }= \int _{\mathbb{R} }\mathscr{K}_{\varepsilon }\left(y\right) f\left(x-y\right)\,d y $$ 

$$ af\left(x\right)-f*\mathscr{K}_{\varepsilon }= \int _{\mathbb{R} }\mathscr{K}_{} $$ 

$$ af\left(x\right)= \int _{\mathbb{R} }f\left(x\right) \mathscr{K}_{\varepsilon < }\left(y\right)\,d y$$ 

$$ \begin{aligned} f*\mathscr{K}_{\varepsilon }&= \int _{\mathbb{R} }f\left(x-y\right) \mathscr{K}_{\varepsilon }\left(y\right)\,d y\\&=  \end{aligned}$$ 

$$ f*\mathscr{K}_{\varepsilon }-af= \int _{\mathbb{R} }\left(f\left(x-y\right)-f\left(x\right)\right) \mathscr{K}_{\varepsilon }\left(y\right)\,d y$$ 

$$ \begin{aligned} \left\| f*\mathscr{K}_{\varepsilon }-af \right\|_{p}&=  \left(\int _{\mathbb{R} }\left|  \int _{\mathbb{R} }f\left(x-y\right)-f\left(x\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y \right|^{p}\,d x \right)^{\frac{1}{p}}\\&\le \left(\int _{\mathbb{R} }\left|  \left(\int _{\mathbb{R} }\left| f\left(x-y\right)-f\left(x\right) \right|^{p}\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|^{p}\,d x  \right)^{\frac{1}{p}} \right|\,d y \right)\\&= \int _{\mathbb{R} } \left\| \tau _{y}f-f \right\|_{L^{p}}\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y  \end{aligned} $$ 

$$ \mathscr{K}_{\varepsilon }\left(y\right)= \frac{1 }{\varepsilon  }K\left(\frac{y }{\varepsilon  }\right) $$ 


$$ \int _{\mathbb{R} }\left\| \tau _{\varepsilon y}f-f \right\|_{L^{p}}\left| \mathscr{K}\left(y\right) \right| \,d y $$ 
控制函数
$$ 2\left\| f \right\|\left| K \right|  $$ 
对于任意的$y$, $\lim_{\varepsilon \to 0}\left\| \tau _{\varepsilon y}f-f \right\|_{L^{p}}= 0$, 逐点地成立.
于是控制收敛定理趋于零.

> [!exercise] Exercise: 
> 设$\mathscr{K}\left(x\right)\in L\left(\mathbb{R} \right)$, $\int _{\mathbb{R} ^{1}}\mathscr{K}\left(x\right)\,d x= 1$, 并且当$\left| x \right|\to \infty$时, $\mathscr{K}\left(x\right)= o\left(\left| x \right|^{-1}  \right)$.若$f\in L^{1}\left(\mathbb{R} ^{1}\right)$, 试证明: 在$f$的每个连续点$x_0$处, 有
>  $$ \lim_{\varepsilon \to 0}\left(f*\mathscr{K}_{\varepsilon }\right)\left(x_0\right)= f\left(x_0\right) $$ 
> 成立, 其中$\mathscr{K}_{\varepsilon }\left(x\right)= \varepsilon ^{-1} \mathscr{K}\left(\frac{x}{\varepsilon }\right),\varepsilon > 0$.



$$ f*\mathscr{K}_{\varepsilon }\left(x_0\right)-f\left(x_0\right)= \int _{\mathbb{R} } f\left(x_0-y\right)\mathscr{K}_{\varepsilon }\left(y\right)-f\left(x_0\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y $$ 

$$ \int _{\mathbb{R} }\left(f\left(x_0-y\right)-f\left(x_0\right)\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y $$ 

在$x_0$附近, 当$\left|y\right|< \delta$, 我们有$\left| f\left(y-x_0\right) -f\left(x_0\right)\right|< a$, 于是
$$ \left| I \right|\le \int _{\left| y-x_0 \right|< \delta  }a \left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y+  \int _{\left| y-x_0 \right|\ge \delta  } \left| f\left(y-x_0\right)-f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y      $$ 

$$ I_1=  \int _{\left| y-x_0 \right|< \delta  } a \frac{1 }{\varepsilon  }\left| \mathscr{K}\left(\frac{y }{\varepsilon  }\right) \right|\,d y=  \int _{\left| \varepsilon y-x_0 \right|< \delta  }a\left| \mathscr{K}\left(y\right) \right|\,d y\le a\left\| \mathscr{K} \right\|_{L^{1}}   $$ 

$$ \left| x \right|\left| \mathscr{K} \right|\to 0   $$ 
存在$N$

$$ I=  \int _{\left| y \right|< \delta  }\left(f\left(x_0-y\right)-f\left(x_0\right)\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y + \int _{\left| y \right|\ge \delta  }\left(f\left(x_0-y\right)-f\left(x_0\right)\right)\mathscr{K}_{\varepsilon }\left(y\right) $$ 


$$ I_1\le \int _{\left| y \right|< \delta  }a \left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y\le  a \left\| \mathscr{K} \right\|_{L^{1}}  $$ 


$$ I_2= \int _{\left| \varepsilon y \right|\ge \delta  }\left(f\left(x_0-\varepsilon y\right)-f\left(x_0\right)\right)\mathscr{K}\left(y\right)\,d y =  \int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\left| f\left(x_0-\varepsilon y\right)-f\left(x_0\right) \right|\mathscr{K}\left(y\right)\,d y $$ 


$$ I_2\le \int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\frac{\varepsilon  }{\delta  } \left| y \right|\left| \mathscr{K}\left(y\right) \right| \left| f\left(x_0-\varepsilon y\right)-f\left(x_0\right) \right|\,d y $$ 
当$\varepsilon$充分小时, $\left| y \right|\left| \mathscr{K}\left(y\right) \right|\le b$, 于是
$$ I_2\le \frac{\varepsilon  }{\delta  }b \int _{\left| y \right|\ge \frac{\delta  }{ \varepsilon } }\left| f\left(x_0-\varepsilon y\right)-f\left(x_0\right) \right|\,d y\le \frac{\varepsilon b }{\delta  }2\left\| f \right\|_{L^{1}}  $$ 

对于固定的$\delta$, $\left| y \right|\left| \mathscr{K}\left(y\right) \right|$ 有界, $\frac{\varepsilon  }{\delta  }\to 0$, 于是
$$ I_2\to 0 $$ 
> [!exercise] Exercise:
> 设实值函数$f(x)$在$(0,2\pi)$上单调减, 试证明其Fourier正弦系数$b_n\ge 0$.


$$ b_{n}= \frac{1 }{\pi  }\int _{-\pi }^{\pi }f\left(x\right)\sin nx\,d x $$ 

$$ \pi  b _{n} =  \int _{-\pi }^{\pi }f\left(x\right)\sin nx \,d x $$ 

$$ \begin{aligned} \pi b _{n} &= \frac{1 }{n } \int _{-n \pi }^{n \pi }f\left(\frac{x }{n }\right) \sin x \,d x\\&=  \end{aligned}$$ 
$\sin x$ 在$2k\pi$到$\left(2k+ 1\right)\pi$是大于等于零的.

$$ \pi b_{n}= \frac{1 }{n } \int _{\left(2k\right)\pi }^{\left(2k+ 1\right)\pi }f\left(\frac{x }{n }\right)\sin x\,d x + \frac{1 }{n }\sum  \int _{\left(2k-1\right)\pi }$$ 



$$ \begin{aligned} \begin{aligned} \begin{aligned} \pi  n  b_{n }&=  \int _{0}^{2n \pi }f\left(\frac{x }{n }\right) \sin x\,d x\\&= \sum _{k = 0}\int _{2k\pi }^{\left(2k+ 1\right)\pi } f\left(\frac{x }{n }\right)\sin x\,d x+ \sum _{k = 0}\int _{\left(2k+ 1\right)\pi }^{\left(2k+ 2\right)\pi }f\left(\frac{x }{n }\right)\sin x \,d x\\&= \sum _{k = 0}\int _{2k\pi }^{\left(2k+ 1\right)\pi }f\left(\frac{x }{n }\right)\sin x\,d x- \sum _{k = 1}\int _{\left(2k\right)\pi } ^{\left(2k+ 1\right)\pi }f\left(\frac{x+ \pi  }{n }\right)\sin x\,d x\\&=  \end{aligned}\end{aligned}\end{aligned}$$ 
如果$n$是偶数, 则, 就是
$$ \pi n b_{n}= \sum _{k = 0}^{\frac{n }{2 }-1} \int _{2k\pi }^{\left(2k+ 1\right)\pi } - \sum _{k = 0}^{\frac{n }{2 }-1}$$ 
如果$n$是奇数, 则
$$ \sum _{k= 0}^{\frac{n-1 }{2 }}- \sum _{k = 0}^{\frac{n-3 }{2 }} $$ 

$$  $$ 
$2k+ 2= n-1$
$$ \begin{aligned} \int _{0}^{2\pi n}f\left(\frac{x }{n }\right)\sin x \,d x&=\\ \sum _{k = 0}^{n-1} \int _{2k \pi }^{\left(2k+ 1\right)\pi }f\left(\frac{x }{n }\right)\sin x\,d x+ \sum _{k = 0}^{n-1}\int _{\left(2k+ 1\right)\pi }^{\left(2k+ 2\right)\pi } f\left(\frac{x }{n }\right)\sin x\,d x\end{aligned} $$ 
> [!exercise] Exercise: 
> 利用 Fourier 变换来证明以下等式: $a > 0, b > 0$ ,
> 1. $f_{a} * f_{b} = f_{a + b}$ , 其中 $f_{a} = \frac{a}{\pi(x^{2} + a^{2})}$ ;  
> 2. $g_{a} * g_{b} = g_{\min(a, b)}$ ，其中 $g_{a} = \frac{\sin ax}{\pi x}$ .


$$ \mathcal{F}\left(e^{-\left| x \right| }\right)= \frac{2 }{1+ 4\pi ^{2}t^{2} } $$ 

$$ \mathcal{F}\left[ e^{-2\pi \left| x \right| } \right]= \frac{1 }{2\pi  }\frac{2 }{1+ t^{2} } $$ 

$$ \mathcal{F}\left[ e^{-2\pi a\left| x \right| } \right]= \frac{1 }{2\pi a }\frac{2 }{1+ \frac{t^{2} }{a^{2} } }= \frac{a }{2\pi  } \frac{2 }{t^{2}+ a^{2} } $$ 

$$ \mathcal{F}\left[ e^{-2\pi a\left| x \right| } \right]= \frac{a }{\pi  }\frac{1 }{t^{2}+ a^{2} } $$ 

于是
$$ \widehat{f_{a}}=  e^{-2\pi a\left| -x \right| }= e^{-2\pi a\left| x \right| } $$ 

$$ \widehat{f_{a}*f_{b}}= \hat{f}_{a}\hat{f}_{b}= e^{-2\pi \left(a+ b\right)\left| x \right| }= \hat{f}_{a+ b} $$ 
故
$$ f_{a}*f_{b}= f_{a+ b} $$ 
几乎处处相等. 由连续映, 
$$ f_{*}*f_{b}= f_{a+ b} $$ 


$$ \mathcal{F}\left[ \chi _{\left[ -\frac{1}{2},\frac{1}{2} \right]} \right] = \frac{\sin \pi t }{\pi t }$$ 

$$ \mathcal{F}\left[ \chi _{\left[ -\frac{a }{2\pi  }, \frac{a }{2\pi  } \right]} \right]= \frac{\sin at }{ \pi t} $$ 
于是
$$ \widehat{g_{a}*g_{b}}= \hat{g}_{a}\cdot \hat{g}_{b}= \chi _{\left[ -\frac{a }{2\pi  }, \frac{a }{2\pi  } \right]} \chi _{\left[ -\frac{b }{2\pi  }, \frac{b }{2\pi  } \right]}= \chi _{\left[ -\frac{\min \left\{ a,b \right\} }{2\pi  } \right]}$$ 

> [!exercise] Exercise: 8 
> 求以下积分的值：
> $\frac{1}{\pi} \int_{-\infty}^{\infty} \left( \frac{\sin t}{t} \right)^4 \mathrm{d}t = ?$




$$ f\left(t\right)= \frac{\sin t }{t },\quad g\left(t\right)= \frac{\sin ^{2}t }{t^{2} } $$ 

$$ f\cdot f= g $$ 

$$ \hat{g}= \hat{f}*\hat{f} $$ 

$$ F\left[ \chi _{\left[ -\frac{a }{2\pi  }, \frac{a }{2\pi  } \right]} \right]=  \frac{\sin  at }{\pi t } $$ 

$$ F\left[ \pi \chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} \right]\left(t\right)= f $$ 
$$ \hat{f}= \pi \chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} $$ 

$$ \hat{f}*\hat{f}=  \pi ^{2}\int _{-\infty}^{\infty} \chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]} \left(y\right)\chi _{\left[ -\frac{1 }{2\pi  }, \frac{1 }{2\pi  } \right]}\left(y-x\right)\,d y=\pi ^{2}\begin{cases} 0, & \left| x \right|\ge \frac{1 }{\pi  }\\\frac{1 }{\pi  }-x,&\left| x \right|\le \frac{1 }{\pi  }   \end{cases}  $$ 

$$ \hat{f}*\hat{f}=  \pi ^{2}\left(\frac{1 }{\pi  }-\left| x \right| \right)_{+ }=  $$ 
于是
$$ \hat{g}= \pi ^{2}\left(\frac{1 }{\pi  }-\left| x \right| \right)_{+ } $$ 

$$ \begin{aligned} \begin{aligned} \begin{aligned} \int _{-\infty}^{\infty}g^{2}\,d t&= \int _{-\infty}^{\infty}\hat{g}^{2}\,d t=  \pi ^{4}\int _{-\infty}^{\infty}\left(\frac{1 }{\pi  }-\left| x \right| \right)_{+ }^{2}\,d x\\&= \pi ^{3} \int _{-\infty}^{\infty}\left(\frac{1 }{\pi  }-\frac{\left| x \right|  }{ \pi }\right)^{2}\,d x=  \pi \int _{-\infty}^{\infty}\left(1-\left| x \right| \right)^{2}\,d x\\&= \pi \int _{-1}^{1}\left(1-\left| x \right| \right)^{2}\,d x\\&= 2\pi \int _{0}^{1}\left(1-x\right)^{2}\,d x=  2\pi \int _{0}^{1}x^{2}\,d x= \frac{2\pi  }{3 } \end{aligned} \end{aligned} \end{aligned} $$ 

> [!exercise] 习题 2
> 若 $0<a<1$，当 $x\neq 0$，求
> $$
> \lim_{R\to\infty} \frac{1}{\pi} \int_0^\infty \frac{1}{t^a}\cdot\frac{\sin R(x-t)}{x-t}\, dt = \,?
> $$


令$f\left(t\right)= \frac{1 }{t^{a} }$

则
$$ \lim_{R\to \infty}\frac{1 }{\pi  }\int _{0}^{\infty}f\left(t\right)\frac{\sin R\left(x-t\right) }{\left(x-t\right) }\,d t=  \lim_{R\to \infty}S_{\left[ 2\pi R \right]}\left(f^{\left(0\right)},x\right) $$ 

证明
$\frac{f }{1+ \left| x \right|  }\in L^{1}$.
$f\left(t\right)= \frac{1 }{t^{a} }$

当$x \neq 0$时, 若$x> 0$, 考虑 $f^{\left(x\right)}: \left(x, x+ 2\pi \right)$
周期化函数. $f$在$\left(x,x+ 2\pi \right)$上是有界变差的. 于是Fourier级数收敛到自身.


$$ \begin{aligned} \begin{aligned} f_{R}\left(x\right)&= \int _{-R}^{R}\hat{f}\left(t\right)e^{2\pi ixt} \,d t\\&= \int _{-\infty}^{\infty}f\left(u\right)\left(\int _{-R}^{R}e^{2\pi \left(x-u\right)t}\,d t\right)\,d ualji\\&=  \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(u\right)\frac{\sin 2\pi R\left(x-u\right) }{\left(x-u\right) }\,d u\\&= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(u+ x\right)\frac{\sin 2\pi Ru }{u }\,d u \\&= \frac{1 }{\pi  }\int _{-\infty}^{\infty}f\left(x-u\right)\frac{\sin 2\pi Ru }{u }\,d u\end{aligned} \end{aligned}$$ 
如果$\frac{f }{1+ \left| x \right|  }\in L\left(R\right)$,  则$f_{R}$存在.

$f_{R}\left(x\right)- S_{\left[ 2\pi R \right]}\left(f^{\left(a\right)},x\right)\to 0$, $f^{\left(a\right)}$是$\left(a,a+ 2\pi \right)$周期化函数.

Dini判别法, 局部上, 
$$ \int _{0}^{\delta }\left| \varphi _{x}\left(t\right)-s \right| /t \,d t< \infty $$ 
Jordan判别法, 在$x$的某个邻域上, 有界变差.


$$ \begin{aligned} \begin{aligned} \begin{aligned} \begin{aligned} \hat{f}\left(t\right)&=\int _{-1}^{1}\cos \left(\frac{\pi x }{2 }\right)e^{-2\pi itx} \,d x\\&=  \int _{-1}^{1}\cos \left(\frac{\pi x }{2 }\right)\cos \left(2\pi  tx\right)\,d x- i  \int _{-1}^{1}\cos \left(\frac{\pi x }{2 }\right)\sin \left(2\pi tx\right)\,d x\\&=2 \int _{0}^{1}\cos \left(\frac{\pi x }{2 }\right)\cos \left(2\pi tx\right)\,d x\\&=  \int _{0}^{1}\cos \left(\frac{\pi x }{2 }+ 2\pi tx\right)+ \cos \left(\frac{\pi x }{2 }-2\pi tx\right)\,d x\\&= \int _{0}^{1}\cos \left(\pi \left(\frac{1 }{2 }+ 2t\right)x\right)+ \cos \left(\pi \left(\frac{1 }{2 }-2t\right)x\right)\,d x\\&= \frac{1 }{\pi \left(\frac{1 }{2 }+ 2t\right) } \left(\sin \left(\pi \left(\frac{1}{2}+ 2t\right)\right)\right)+  \frac{1 }{\pi \left(\frac{1}{2}-2t\right) }\left(\sin \left(\pi \left(\frac{1 }{2 }-2t\right)\right)\right)\\&= \frac{\cos 2\pi t }{\pi \left(\frac{1}{2}+ 2t\right) }+  \frac{\cos 2\pi t }{\pi \left(\frac{1}{2}-2t\right) }= \frac{\cos 2\pi t }{\pi   }\frac{1 }{\frac{1}{4}-4t^{2} }= \frac{4\cos 2\pi t }{\pi \left(1-16t^{2}\right) } \end{aligned}  \end{aligned} \end{aligned}\end{aligned} $$ 



有Parseval恒等式
$$ \left< f, g \right>= \left< \hat{f}, \hat{g} \right> $$ 



$$ \int _{-\infty}^{\infty}f\left(x\right)\cdot g\left(x\right)\,d x $$ 


$$ S_{N}f= \sum _{k = -N}^{N}c_{k}e^{ikx} $$ 

$$ \begin{aligned} \left<  S_{N}f, \bar{g} e^{inx}\right>&=  \frac{1 }{2\pi  }\int  \left(S_{N}f\right)g e^{-inx}\,d x\\&= \frac{1 }{2\pi  }\sum  \int  c_{k}g e^{-i\left(n-k\right)x}\,d x\\&= \frac{1 }{2\pi  }c_{k}\sum \left< g, e^{i\left(n-k\right)x} \right>\\&= \frac{1 }{2\pi  }\sum_{k = -N}^{N}  c_{k}d _{n-k} \end{aligned} $$ 

$$ \lim_{N\to \infty}\left< S_{N}f, \bar{g} e^{inx} \right>= \frac{1 }{2\pi  }\sum _{k = -N}^{N}c_{k} d _{n-k} $$ 

$$ \left< f, \bar{g}e^{inx} \right>= \sum _{k= -\infty}^{\infty} c _{k}d _{n-k} $$ 

$$ \gamma _{n}= \left< f\cdot g, e^{inx} \right>= \left< f, \bar{g} e^{inx} \right> $$ 

若三角技术收敛, 则存在奇函数 $f$, 使得

$$ b_{n}= \frac{1 }{\pi  }\int _{-\pi }^{\pi }f\left(x\right)\sin \left(nx\right)\,d x= \frac{1 }{\ln \left(n+ 1\right) } $$ 
若$f$是可积函数, 则可以逐项积分

$$ F\left(x\right)= \sum _{n = 1}^{\infty} \int_{0}^{x}  b_{n}\sin nx= \sum _{n = 1}^{\infty} \frac{b_{n} }{n }\left(1-\cos nx\right)$$ 

$$ F\left(x\right)= \left(\sum _{n = 1}^{\infty}\frac{b_{n} }{n }\right)+ \sum _{n = 1}^{\infty}\left(\frac{-b_{n} }{n }\right)\cos nx $$ 
再积分, 得到
$$ \frac{1 }{2\pi  } \int _{-\pi }^{\pi }F\left(x\right)=  \sum _{n = 1}^{\infty}\frac{b_{n} }{n }= \sum _{n = 1}^{\infty}\frac{1 }{n\ln \left(n+ 1\right) } $$ 

但是积分
$$ \int _{2}^{\infty}\frac{1 }{x\ln x }\,d x= \infty $$ 
由积分判别法, 技术发散到$\infty$, 于是$F$在$\left[ -\pi ,\pi  \right]$上不是$L^{1}$的, 进而不是绝对连续的.