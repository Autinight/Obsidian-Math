代靖涵 25120222201319

> [!exercise] Exercise: 6
> 设$f(x)$以$2\pi$为周期, 且$f \in \operatorname{Lip}1$, 试证明:
> $$|\sigma_n(x) - f(x)| \leqslant M\frac{\ln n}{n}, \quad x \in [-\pi, \pi], n > 1,$$
> 其中$\sigma_n(x)$是$S(f)$的部分和的算术平均.

> [!proof] Proof: 
>
>  $$ \begin{aligned}  \sigma _{n}\left(x\right)-f\left(x\right)&= f*K_{n}\left(x\right)-f\left(x\right)\\&= \int _{-\pi }^{\pi }K_{n}\left(t\right)f\left(x-t\right)-\int _{-\pi }^{\pi }K_{n}\left(t\right)f\left(x\right) \,d t\\&= \int _{-\pi }^{\pi }K_{n}\left(t\right)\left(f\left(x-t\right)-f\left(x\right)\right)\,d t\\&= \int _{0 }^{\pi }K_{n}\left(t\right)\psi _{x}\left(t\right)\,d t \end{aligned} $$ 
> 其中
>  $$ \psi _{x}\left(t\right)= f\left(x+ t\right)+ f\left(x-t\right)-2f\left(x\right) $$ 
> 由Lipschitz连续性, 存在$L>  0$, 使得
>  $$ \begin{aligned} \left| \psi _{x}\left(t\right) \right|&\le \left| f\left(x+ t\right)-f\left(x\right) \right|+ \left| f\left(x-t\right)-f\left(x\right) \right|\\&\le 2Lt \end{aligned}    $$ 
>
> 考虑到存在$A> 0$, 使得 
>  $$ \left| K_{n}\left(t\right) \right|\le \frac{A }{\left(n+ 1\right)t^{2} } \le \frac{A }{nt^{2} } $$ 
>
> 估计
>  
>  $$ \begin{aligned} \left| \int _{\frac{1 }{n }}^{\pi }K_{n}\left(t\right)\psi _{x}\left(t\right) \right|  \le \int _{\frac{1 }{n }}^{\pi }\frac{2LA }{nt }\,d t&= \frac{2LA }{n }\left(\ln \pi -\ln \left(\frac{1 }{n }\right)\right)\\&= 2LA\frac{\ln \pi + \ln n }{n }\le 6LA\frac{\ln n }{n },\quad \text{when }n> 1 \end{aligned}$$ 
> 其中最后一个不等号利用了$\ln \pi < \ln 4\le 2\ln n \left(n> 1\right)$再利用. 
> 
>  $$ \left| K_{n}\left(t\right) \right|\le \frac{n+ 1 }{2\pi  } \le \frac{n }{\pi  },\quad n> 1 $$ 
>
> 得到
>  $$ \left| \int _{0}^{\frac{1 }{n }}K_{n}\left(t\right)\psi _{x}\left(t\right) \right| \le \int _{0}^{\frac{1 }{n }}\frac{n }{\pi  }2Lt \,d t= \frac{nL }{\pi  }\frac{1 }{n^{2} }= \frac{L }{\pi n }\le \frac{L }{\pi \ln 2   }\frac{\ln n }{ n},\quad n> 1$$ 
> 其中最后一个不等号利用了$\ln 2\le \ln n\left(n> 1\right)$. 
> 于是
>  $$ \left| \sigma _{n}\left(x\right)-f\left(x\right) \right|=  \left| \int _{0}^{\pi }K_{n}\left(t\right)\psi _{x}\left(t\right) \right| \le \left(6LA+ \frac{L }{\pi \ln 2 }\right)\frac{\ln n }{n },\quad n> 1 $$ 
> 取$M= \left(6LA+ \frac{L }{\pi \ln 2 }\right)$即可

