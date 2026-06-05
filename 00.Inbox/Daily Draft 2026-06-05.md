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