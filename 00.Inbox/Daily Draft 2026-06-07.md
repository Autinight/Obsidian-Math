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