---
cover:
  image: 文本附件/Daily-Draft-2026-06-05-cover-20260605-200836.jpg
  actualRatio: '16:9'
  pixelWidth: 2000
  pixelHeight: 1125
  displayWidth: 100
  displayHeight: 320
  positionX: 50
  positionY: 50
---
### 08:17



$$ \sigma _{T}\left(x\right)eq\frac{1 }{T }\int _{0}^{T} f_{R}\left(x\right)\,d R = \frac{1 }{T }\int _{0}^{T}\left(\int _{-R}^{R}\hat{f}\left(t\right) e^{2\pi xt}\,d t\right) \,d R$$ 
$f_{R}$相当于部分和, 

$f_{R}$和$S_{\left[ 2\pi R \right]+ 1}$是同收敛的, 如果$\frac{1 }{1+ \left| f \right|  }\in L$.

$$ \chi _{-R\le t \le R}\chi _{0\le R\le T} $$ 

$$ \chi _{t\ge -R}\chi _{0\le R\le 0} $$ 

$$ \frac{1 }{T }\int _{0}^{T}\hat{f}$$ 

$$ \int _{-T}^{T}\left(1-\frac{\left| t \right|  }{ T}\right)\hat{f}\left(t\right)e^{2\pi ixt}\,d t $$ 







$$ \Phi \left(t\right)= \begin{cases} 1-\left| t \right| ,&\left| t \right|\le 1\\0,& \left| t \right|  > 1 \end{cases}  $$ 

$\sigma _{T}\left(x\right)= \int _{-\infty}^{\infty}\Phi \left(\frac{t }{T }\right)\hat{f}\left(t\right)e^{2\pi ixt}\,d t$

记

$$ K_{\alpha }\left(t\right)* \widehat{e^{2\pi ixt}}= \int _{-\infty}^{\infty}K_{\alpha }\left(t-x\right) 1\,d x$$ 

$$ \hat{f}\left(t\right)=  $$ 

$$ \widehat{\Phi _{\frac{1 }{\alpha  }}\left(t\right)e^{2\pi ixt}}= \int _{-\infty}^{\infty}\Phi _{\frac{1 }{\alpha  }\left(t\right)}e^{2\pi ixt}e^{-2\pi ixt}\,d t $$ 

$$ \int _{-\infty}^{\infty} \Phi _{\frac{1 }{\alpha  }}\left(t\right)e^{-2\pi i\left(x- y\right)t}\,d t= \widehat{\Phi _{\alpha }}\left(t-x\right)= \frac{1 }{\alpha  }\Phi \left(\frac{t-x }{\alpha  }\right)  $$ 

$$ \begin{aligned} K\left(t\right)&= \widehat{\Phi}= \int _{-1}^{1}\left(1-\left| xl \right| \right)e^{-2\pi ixt}\,d x= \int _{0}^{1}\left(1-x\right)2\cos 2\pi t\,d x= 2\frac{1 }{2\pi t }\int _{0}^{1}\left(1-x\right)d\sin \left(2\pi tx\right)\\&= + \frac{2 }{2\pi t }\int _{0}^{1}\sin 2\pi tx\,d x= \frac{2 }{\left(2\pi t\right)^{2} } -\frac{2\cos 2\pi t }{4\pi ^{2}t^{2} }= \left(\frac{\sin \pi t }{ \pi t}\right)^{2}\end{aligned} $$ 


$$ \begin{aligned} \begin{aligned} \begin{aligned} K\left(t\right)&= \int _{-1}^{1}\left(1-\left| x \right| \right)e^{-2\pi xt}\,d x\\&= \int _{0}^{1}\left(1-x\right)\left(2\cos 2\pi xt\right)\,d x\\&= \frac{2 }{2\pi t } \int _{0}^{1}\left(1-x\right)d\left(\sin 2\pi xt\right)\\&= \frac{2 }{2\pi t }\left(\left[ \left(1-x\right)\sin \left(2\pi xt\right) \right]_{0}^{1}+ \int _{0}^{1}\sin \left(2\pi xt\right)\,d x\right)\\&= \frac{2 }{2\pi t }\left(\frac{1 }{2\pi xt }\left[ \cos 2\pi xt \right]_{1}^{0}\right)\\&= \frac{2 }{\left(4\pi ^{2}t^{2}\right) }\left(1-\cos 2\pi xt\right)= 4\sin ^{2}\pi xt/ 4\pi ^{2}t^{2} = \left(\frac{\sin \pi t }{\pi t }\right)^{2}\end{aligned}\end{aligned}  \end{aligned} $$ 
于是

$$ \mathcal{F}\left[ \left(1-\left| x \right| \right)_{+ } \right] = \left(\frac{\left(\sin \pi t\right) }{\pi t }\right)^{2}$$ 
区域, 取符号, 求和. $e^{2\pi xt}+ e^{-2\pi xt}$

$$ \begin{aligned} \begin{aligned} \begin{aligned} \sigma _{T}\left(x\right)&= \int _{-\infty}^{\infty}\Phi \left(\frac{t }{T }\right)\hat{f}\left(t\right)e^{2\pi xt}\\&= \int _{-\infty}^{\infty} \hat{f}\left(t\right) \widehat{\Phi _{T}e^{2\pi xt}}\,d t\\&= \int _{-\infty}^{\infty}\hat{f}\left(t\right) \tau _{x} \widehat{\Phi}_{T}\,d t\\&= \int _{-\infty}^{\infty}\hat{f}\left(t\right){T } K\left(\frac{t-x }{T }\right)\\&= \frac{1 }{T }\int _{-\infty}^{\infty}\hat{f}\left(t\right)\left(\frac{\sin \left(\pi \frac{t-x }{T }\right) }{ \pi \frac{t-x }{T }}\right)^{2}\\&= \frac{1 }{T }\int _{-\infty}^{\infty}\hat{f}\left(t+ x\right)\left(\frac{\sin \left(T\pi t\right) }{\pi t }\right)^{2}\\&=\frac{1 }{T }\int _{-\infty}^{\infty}\hat{f}\left(x-t\right)\left(\frac{\sin \left(T\pi t\right) }{\pi t }\right)^{2}\,d t \end{aligned} \end{aligned} \end{aligned}$$ 

$$ \int _{-\infty}^{\infty}K\left(t\right)\,d t= \frac{1 }{\pi  }\int _{-\infty}^{\infty}\left(\frac{\sin u }{u }\right)^{2}\,d u= 1 $$ 

$$ \int _{-\infty}^{\infty}\left(\frac{\sin \pi u }{\pi u }\right)^{2}\,d \pi u= \pi  \int _{-\infty}^{\infty}\left(\frac{\sin \pi u }{ \pi u}\right)^{2}\,d u= \overline{\pi \int _{-\infty}^{\infty}} = \pi \int _{-\infty}^{\infty}\chi _{-\frac{1}{2},\frac{1}{2}}= \pi $$ 
由于
$$ F\left[ \chi _{\left[ -\frac{1}{2},\frac{1}{2} \right]}\left(x\right) \right]\left(\xi \right)= \frac{\sin \pi \xi  }{\pi \xi  } $$ 


$$ \frac{1 }{T }\left(\frac{\sin \pi Tt }{\pi t }\right)^{2} $$ 



$$ e^{-\left| x \right| } $$ 


$$ \begin{aligned} \begin{aligned} \begin{aligned} F\left[ e^{-\left| x \right| } \right]\left(t\right)&= \int _{-\infty}^{\infty}e^{-\left| x \right| }e^{-2\pi itx}\,d x\\&= \int _{0}^{\infty}e^{-x}2\cos 2\pi tx\,d x\\&=- 2 \int _{0}^{\infty}\cos 2\pi tx de^{-x}\\&= -2\left[ \cos 2\pi tx e^{-x} \right]_{0}^{\infty}-2\int _{0}^{\infty}e^{-x}d \cos 2\pi tx\\&= 2+ 2 \int _{0}^{\infty}2\pi t\sin 2\pi txe^{-x}\,d x\\&= 2+ 4\pi t\int _{0}^{\infty}e^{-x}\sin 2\pi tx\,d x \end{aligned} \end{aligned} \end{aligned} $$ 

$$ \begin{aligned} \int _{0}^{\infty}e^{-x}\sin 2\pi tx\,d x&= \left[ -e^{-x}\sin 2\pi tx \right]_{0}^{\infty}-\int _{0}^{\infty}\left(-e^{-x}\right)2\pi t \cos 2\pi tx\,d x\\&= 2\pi t\int _{0}^{\infty}e^{-x}\cos 2\pi tx\,d x \end{aligned} $$ 

$$ 2\int _{0}^{\infty}e^{-x}\cos 2\pi tx\,d x= 2\left(1+ 2\pi t \left(2\pi t\right)\int _{0}^{\infty}e^{-x\cos 2\pi tx}\,d \right) $$ 

$$ f= 1+ \left(2\pi t\right)^{2}f $$ 


$$ \int _{0}^{\infty}e^{-x}\left(e^{2\pi ixt}+ e^{-2\pi ixt}\right) $$ 
$$ = \int _{0}^{\infty}e^{\left(2\pi it-1\right)x}+ e^{-\left(2\pi it+ 1\right)x}\,d x $$ 

$$ \frac{1 }{2\pi it-1 }e^{\left(2\pi it-1\right)x}|_{0}^{\infty}+ \frac{1 }{-\left(2\pi it+ 1\right) }e^{-\left(2\pi it+ 1\right)x}|_{0}^{\infty} $$ 

$$ \frac{1 }{1-2\pi it }+ \frac{1 }{1+ 2\pi it }= \frac{2 }{1+ 4\pi ^{2}t^{2} } $$ 

$$ \begin{aligned} \begin{aligned} \begin{aligned} u\left(x,y\right)&= \int _{-\infty}^{\infty}e^{-2\pi y\left| t \right| }\hat{f}\left(t\right)e^{2\pi ixt}\,d t\\&= \int _{-\infty}^{\infty}f\left(t\right)\mathcal{F}\left[ e^{-2\pi y\left| y \right| }e^{2\pi ixt} \right]\,d t\\&= \int _{-\infty}^{\infty}f\left(t\right) \tau _{x} \mathcal{F}\left(T_{2\pi y}\left(e^{-\left| y \right| }\right)\right)\,d t\\&= \int _{-\infty}^{\infty}f\left(t\right) \tau _{x} \frac{1 }{2\pi y } \left(\frac{2 }{1+ 4\pi ^{2}\left(\frac{t }{2\pi y }\right)^{2} }\right)\,d t\\&= \int _{-\infty}^{\infty}f\left(x+ t\right)\frac{1 }{\pi  } \frac{y }{t^{2}+ y^{2} }\,d t \end{aligned} \end{aligned} \end{aligned}$$ 

$$ \int _{-\infty}^{\infty}f\left(x-t\right)\frac{1 }{\pi  }\frac{y }{t^{2}+ y^{2} }\,d t $$ 

$$ P\left(x,y\right)= \frac{1 }{\pi  }\frac{y }{x^{2}+ y^{2} } $$ 

$$ u\left(x,y\right)= f*_{x}P $$ 

$$ \frac{1 }{\pi  }\int _{-\infty}^{\infty}\frac{1 }{t^{2} \,d t}= \frac{1 }{\pi  }\left[ \arctan t \right]_{-\infty}^{\infty}= 1 $$ 


$$ \mathcal{F}\left(e^{-x^{2}}\right)= \sqrt{\pi }e^{-\left(\pi t\right)^{2}} $$ 

$$ \int _{-\infty}^{\infty}\sqrt{\pi }e^{-\left(\pi t\right)^{2}}= \frac{1 }{\sqrt{\pi } }\int _{-\infty}^{\infty}e^{-u^{2}}\,d u= 1 $$ 

$e^{-x^{2}}$的Fourier变换, 无非是变化速度乘了$\pi$然后 积分归一.

设$f\in L\left(\mathbb{R} \right)$, $K\left(t\right)$是$\mathbb{R}$上的非负连续偶函数, 单调递减, 积分为一. 则
$$ \lim_{\alpha \to 0_{+ }}\left(f*K_{\alpha }\right)\left(x\right)= f\left(x\right) $$ 

可积的卷积核, 如果外围上确界函数是可积的, $f$具有某种可积性, 则在Lebesgue点处收敛.