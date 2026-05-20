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