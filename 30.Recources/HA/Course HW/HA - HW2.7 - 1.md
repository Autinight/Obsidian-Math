代靖涵 25120222201319
> [!exercise] Exercise: 7
> 设$f(x)=x^2, -\pi\leqslant x\leqslant\pi$, 求$f$的Fourier级数, 并利用它证明等式
> $$
> \sum_{n=1}^{\infty}\frac{1}{n^4}=\frac{\pi^4}{90}.
> $$


> [!proof] Proof: 
> $$ a_0= \frac{1 }{\pi  }\int _{-\pi }^{\pi }x^{2}\,d x= \frac{2 }{\pi  }\int _{0}^{\pi }x^{2}\,d x= \frac{2\pi ^{2} }{3 } $$
> $$ \begin{aligned} a_{n}&= \int _{-\pi }^{\pi }x^{2}\cos \left(nx\right)\,d x= \frac{2 }{\pi  }\int _{0}^{2\pi }x^{2}\cos \left(nx\right)\,d x\\&= \frac{\pi  }{2 }\left[ x^{2}\frac{\sin \left(nx\right) }{x }|_{0}^{\pi }-\int _{0}^{\pi }2x\frac{\sin \left(nx\right) }{n }\,d x \right]\\&= -\frac{4 }{n\pi  }\int _{0}^{\pi }x\sin \left(nx\right)\,d x\\&= -\frac{4 }{n\pi  }\left[ x\frac{-\cos \left(nx\right) }{n }|_{0}^{\pi }-\int _{0}^{\pi }\frac{-\cos \left(nx\right) }{n }\,d x \right]\\&= \frac{4 }{n^{2}\pi  }\left(\pi \cos \left(n\pi \right)-0\right)+ 0\\&= \frac{4\left(-1\right)^{n} }{n^{2} } \end{aligned} $$  
> 于是
> $$ f\left(x\right)\sim \frac{\pi ^{2} }{3 }+ \sum _{n = 1}^{\infty}\frac{4\left(-1\right)^{n} }{n^{2} }\cos \left(nx\right) $$ 
> 有Parseval恒等式
> $$ \frac{1 }{\pi  }\int _{-\pi }^{\pi }\left| f\left(x\right) \right|^{2}\,d x= \frac{a_0^{2} }{2 }+ \sum _{n = 1}^{\infty}\left(a_{n}^{2}+ b_{n}^{2}\right)  $$ 
> 左侧为
> $$ \frac{2 }{\pi  }\int _{0}^{\pi }\pi ^{4}\,d x= \frac{2\pi ^{4} }{5 } $$ 
> 右侧为
> $$ \frac{2\pi ^{4} }{9 }+ 16\sum _{n = 1}^{\infty}\frac{1 }{n^{4} } $$ 
> 两侧相等, 得到
> $$ \sum _{n = 1}^{\infty}\frac{1 }{n^{4} }= \frac{\pi ^{4} }{90 } $$ 