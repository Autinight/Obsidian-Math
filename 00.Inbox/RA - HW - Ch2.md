代靖涵 25120222201319

> [!exercise] Exercise 1
> 设$Z\subseteq \mathbb{R}$, 且$m\left(Z\right)= 0$, 记$W= \left\{ x^{2}: x \in Z \right\}$, 证明$m\left(W\right)= 0$.

> [!proof] 
> 对于每个$n\in\mathbb{N}$, 记
> $$
> Z_n= Z\cap\left[-n,n\right],\quad W_n= \left\{ x^2: x\in Z_n \right\}
> $$
> 则$W=\bigcup_{n=1}^{\infty}W_n$. 因此只需说明每个$W_n$都是零测集.
> 
> 固定$n\ge 1$, 任取$\varepsilon>0$. 由于$m\left(Z_n\right)=0$, 存在可列个开区间$I_k$, 使得
> $$
> Z_n\subseteq\bigcup_{k=1}^{\infty}I_k,\quad \sum_{k=1}^{\infty}m\left(I_k\right)<\frac{\varepsilon}{2n}
> $$
> 记$J_k=I_k\cap\left[-n,n\right]$, 并令$K_k=\left\{ x^2: x\in J_k \right\}$. 由于$x\mapsto x^2$连续, $K_k$是一个区间或空集, 故而可测. 又对于任意的$x,y\in J_k$,
> $$
> \left| x^2-y^2 \right|=\left| x-y \right|\left| x+y \right|\le 2n\left| x-y \right|
> $$
> 因此
> $$
> m\left(K_k\right)\le 2n\,m\left(I_k\right)
> $$
> 由$W_n\subseteq\bigcup_{k=1}^{\infty}K_k$, 得到
> $$
> m^*\left(W_n\right)\le\sum_{k=1}^{\infty}m\left(K_k\right)\le 2n\sum_{k=1}^{\infty}m\left(I_k\right)<\varepsilon
> $$
> 由于$\varepsilon$是任取的, 可知$m^*\left(W_n\right)=0$. Lebesgue外测度为零的集合均可测, 因此$m\left(W_n\right)=0$. 最后, 由可列次可加性,
> $$
> m\left(W\right)=m\left(\bigcup_{n=1}^{\infty}W_n\right)\le\sum_{n=1}^{\infty}m\left(W_n\right)=0
> $$



> [!exercise] Exercise 5
> 证明
>
> $$
> \sigma\left(\Sigma_{n-1}\right)
> = \frac{2\pi^{n/2}}{\Gamma\left(\frac{n}{2}\right)}.
> $$

> [!proof] 
> 先计算一维Gauss积分. 记
> $$
> I=\int_{\mathbb{R}}e^{-t^2}\,dt
> $$
> 由Tonelli定理以及平面极坐标变换,
> $$
> \begin{aligned}
> I^2&=\int_{\mathbb{R}^2}e^{-\left(x^2+y^2\right)}\,dx\,dy\\
> &=\int_0^{2\pi}\int_0^{\infty}e^{-r^2}r\,dr\,d\theta\\
> &=2\pi\left[-\frac{1}{2}e^{-r^2}\right]_0^{\infty}=\pi
> \end{aligned}
> $$
> 由于$I>0$, 可知$I=\sqrt{\pi}$. 再次由Tonelli定理,
> $$
> \int_{\mathbb{R}^n}e^{-\left| x \right|^2}\,dx=\prod_{j=1}^n\int_{\mathbb{R}}e^{-x_j^2}\,dx_j=\pi^{\frac{n}{2}}
> $$
> 
> 另一方面, 记$\Sigma_{n-1}=\left\{ x\in\mathbb{R}^n:\left| x \right|=1 \right\}$. 由极坐标积分公式,
> $$
> \int_{\mathbb{R}^n}e^{-\left| x \right|^2}\,dx=\int_{\Sigma_{n-1}}\int_0^{\infty}e^{-r^2}r^{n-1}\,dr\,d\sigma=\sigma\left(\Sigma_{n-1}\right)\int_0^{\infty}e^{-r^2}r^{n-1}\,dr
> $$
> 令$t=r^2$, 得到
> $$
> \int_0^{\infty}e^{-r^2}r^{n-1}\,dr=\frac{1}{2}\int_0^{\infty}e^{-t}t^{\frac{n}{2}-1}\,dt=\frac{1}{2}\Gamma\left(\frac{n}{2}\right)
> $$
> 于是
> $$
> \pi^{\frac{n}{2}}=\frac{1}{2}\sigma\left(\Sigma_{n-1}\right)\Gamma\left(\frac{n}{2}\right)
> $$
> 因此
> $$
> \sigma\left(\Sigma_{n-1}\right)=\frac{2\pi^{\frac{n}{2}}}{\Gamma\left(\frac{n}{2}\right)}
> $$

> [!exercise] Exercise 6
> 设 \(a>0\)，则
>
> $$
> \int_{\mathbb{R}^n} \exp\left(-a\lvert x\rvert^2\right)\,dx
> = \left(\frac{\pi}{a}\right)^{n/2}.
> $$

> [!proof] 
> 由Exercise 5的证明已经得到
> $$
> \int_{\mathbb{R}^n}e^{-\left| y \right|^2}\,dy=\pi^{\frac{n}{2}}
> $$
> 由于$a>0$, 作变量替换$y=\sqrt{a}\,x$, 则$dx=a^{-\frac{n}{2}}\,dy$, 因此
> $$
> \int_{\mathbb{R}^n}e^{-a\left| x \right|^2}\,dx=a^{-\frac{n}{2}}\int_{\mathbb{R}^n}e^{-\left| y \right|^2}\,dy=a^{-\frac{n}{2}}\pi^{\frac{n}{2}}=\left(\frac{\pi}{a}\right)^{\frac{n}{2}}
> $$



> [!exercise] Exercise 7
> 设
>
> $$
> P(x)=c_n\left(1+\lvert x\rvert^2\right)^{-(n+1)/2},
> $$
>
> 其中
>
> $$
> c_n=\pi^{-(n+1)/2}\Gamma\left(\frac{n+1}{2}\right),
> $$
>
> 证明
>
> $$
> \int_{\mathbb{R}^n}P(x)\,dx=1.
> $$

> [!proof] 
> 记$s=\frac{n+1}{2}$. 对于任意的$x\in\mathbb{R}^n$, 在$\Gamma$函数的积分中令$u=\left(1+\left| x \right|^2\right)t$, 得到
> $$
> \begin{aligned}
> \Gamma\left(s\right)&=\int_0^{\infty}e^{-u}u^{s-1}\,du\\
> &=\left(1+\left| x \right|^2\right)^s\int_0^{\infty}e^{-\left(1+\left| x \right|^2\right)t}t^{s-1}\,dt
> \end{aligned}
> $$
> 因此
> $$
> \left(1+\left| x \right|^2\right)^{-s}=\frac{1}{\Gamma\left(s\right)}\int_0^{\infty}e^{-t}e^{-t\left| x \right|^2}t^{s-1}\,dt
> $$
> 由于被积函数非负, 由Tonelli定理可以交换积分次序. 再由Exercise 6,
> $$
> \begin{aligned}
> \int_{\mathbb{R}^n}P\left(x\right)\,dx&=\frac{c_n}{\Gamma\left(s\right)}\int_0^{\infty}e^{-t}t^{s-1}\left(\int_{\mathbb{R}^n}e^{-t\left| x \right|^2}\,dx\right)\,dt\\
> &=\frac{c_n\pi^{\frac{n}{2}}}{\Gamma\left(s\right)}\int_0^{\infty}e^{-t}t^{s-1-\frac{n}{2}}\,dt\\
> &=\frac{c_n\pi^{\frac{n}{2}}}{\Gamma\left(\frac{n+1}{2}\right)}\Gamma\left(\frac{1}{2}\right)
> \end{aligned}
> $$
> 而由$u=r^2$以及Exercise 5中计算的一维Gauss积分,
> $$
> \Gamma\left(\frac{1}{2}\right)=\int_0^{\infty}e^{-u}u^{-\frac{1}{2}}\,du=2\int_0^{\infty}e^{-r^2}\,dr=\sqrt{\pi}
> $$
> 最后, 代入$c_n=\pi^{-\frac{n+1}{2}}\Gamma\left(\frac{n+1}{2}\right)$, 得到
> $$
> \int_{\mathbb{R}^n}P\left(x\right)\,dx=\pi^{-\frac{n+1}{2}}\pi^{\frac{n}{2}}\sqrt{\pi}=1
> $$


