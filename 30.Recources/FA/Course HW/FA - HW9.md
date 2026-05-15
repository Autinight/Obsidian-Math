代靖涵 25120222201319
> [!exercise] 1
> 证明
> $$
> (C[a,b])^*=V_0[a,b].
> $$

> [!proof] Proof: 
> 对于$\alpha \in V_0\left[ a,b \right]$, 定义
> $$ T_{\alpha } \left(f\right)= \int _{a}^{b}f\,d \alpha ,\quad f\in C\left[ a,b \right]$$ 
> 由于$f$连续, $\alpha$有界变差, 故Riemann-Stieljets积分存在,并且
> $$ \left| T_{\alpha }\left(f\right) \right|= \left| \int _{a}^{b}f\,d \alpha  \right|\le \left\| f \right\|_{\infty}V_{a}^{b}\left(\alpha \right)   $$ 
> 故
> $$ \left\| T_{\alpha } \right\|\le \left\| \alpha  \right\|_{BV} $$ 
> 此外, 任取$\varepsilon > 0$, 存在分划$P$, 使得
> $$ \sum _{i = 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|> V_{a}^{b}\left(\alpha \right)-\varepsilon   $$ 
> 可以构造连续函数$f_{\varepsilon }$, 满足$\left\| f_{\varepsilon } \right\|_{\infty}\le 1$, 在$\left(x_{i-1},x_{i}\right)$上, $\left| f_{\varepsilon }-\operatorname{sgn}\left(\alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)\right) \right|\le \frac{\varepsilon  }{b-a }$, 则
> $$ T_{a}\left(f_{\varepsilon }\right) \ge V_{a}^{b}\left(\alpha \right)-2\varepsilon $$ 
> 令$\varepsilon \to 0$, 得到
> $$ \left\| T_{\alpha } \right\|= V_{a}^{b}\left(\alpha \right) $$ 
> 我们定义了等距的线性映射
> $$ T: V_0\left[ a,b \right]\to \left(C\left[ a,b \right]\right)^{*},\quad \alpha \mapsto T_{\alpha } $$ 
> 我们接下来说明$T$是满的, 事实上. 
> 令$B\left[ a,b \right]$是$\left[ a,b \right]$上的有界函数构成的空间, 配备了一致范数. 则$C\left[ a,b \right]$是$B\left[ a,b \right]$的子空间. 取$\varphi \in \left(C\left[ a,b \right]\right)^{*}$.由Hahn-Banach定理, 存在$\widetilde{\varphi}\in B\left[ a,b \right]^{*}$, 使得
> $$ \widetilde{\varphi}|_{C\left[ a,b \right]}= \varphi  $$ 
> 并且
> $$ \left\| \widetilde{\varphi} \right\|= \left\| \varphi  \right\| $$ 
> 定义
> $$ \alpha \left(x\right)= \widetilde{\varphi}\left(\chi _{(a,x]}\right) $$ 
> 则
> $$ \alpha \left(a\right)= 0 $$ 
> 任取分划$P: a= x_0< x_1< \cdots < x_{n}= b$.
> 则
> $$ \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)= \widetilde{\varphi}\left(\chi _{(x_{i-1},x_{i}]}\right) $$ 
> 定义
> $$ g =  \sum _{i= 1}^{n}\operatorname{sgn}\left(\alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right)\right)\chi _{(x_{i-1},x_{i}]} $$ 
> 则$g\in B\left[ a,b \right]$, 那么
> $$ \widetilde{\varphi}\left(g\right)= \sum _{i= 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|  $$ 
> 并且
> $$ \sum _{i= 1}^{n}\left| \alpha \left(x_{i}\right)-\alpha \left(x_{i-1}\right) \right|= \widetilde{\varphi}\left(g\right)\le \left\| \widetilde{\varphi} \right\|\left\| g \right\|_{\infty}= \left\| \varphi  \right\|\left\| g \right\|_{\infty}\le \left\| \varphi  \right\|  $$ 
> 因此
> $$ V_{a}^{b}\left(\alpha \right)\le \left\| \varphi  \right\| $$ 
> $\alpha$是有界变差的, 并且$\left\| \alpha   \right\|_{BV}\le \left\| \varphi  \right\|$. 接下来只需要验证 $T_{\alpha }= \varphi$.
> 对于$f\in C\left[ a,b \right]$, 取Riemann-Stieltjes和
> $$ \begin{aligned} S\left(P,\xi \right)&= \sum _{i= 1}^{n}f\left(\xi _{i}\right)\left(\alpha  \left(x_{i}\right)-\alpha  \left(x_{i-1}\right)\right)\\&= \sum _{i= 1}^{n}f\left(\xi _{i}\right)\widetilde{\varphi}\left(\chi _{I_{i}}\right)= \widetilde{\varphi}\left(\sum f\left(\xi _{i}\right)\chi _{I_{i}}\right)\end{aligned} $$ 
> 当$\left| P \right|\to 0$时, $\sum f\left(\xi _{i}\right)\chi _{I_{i}}$一致地趋于$f$, 因此
> $$ S\left(P,\xi \right)\to \widetilde{\varphi}\left(f\right)= \varphi \left(f\right) $$ 
> 另一方面, 由$\alpha$有界变差, , $S\left(P,\xi \right)\to \int _{a}^{b}f\,d \alpha$, 因此
> $$ \varphi \left(f\right)= T_{\alpha } $$ 
> 最后, 由于$T$等距, $T_{\alpha }= T_{\beta }\implies V_{a}^{b}\left(\alpha -\beta \right)= 0\implies \alpha = \beta$(因为$\alpha \left(a\right)= \beta \left(a\right)= 0$)


> [!exercise] 2
> 证明
> $$
> (\ell^p)^*=\ell^q,
> $$
> 其中
> $$
> \frac{1}{p}+\frac{1}{q}=1,\qquad 1\leq p<\infty.
> $$

> [!proof] Proof: 
> **先考虑$1< p< \infty$**, 则$1< q< \infty$.
> 对于任意的$a= \left(a_{n}\right)\in \ell ^{q}$, 定义
> $$ F_{a}\left(x\right)= \sum _{n = 1}^{\infty}x_{n}a_{n},\quad x= \left(x_{n}\right)\in \ell ^{p} $$ 
> 由Hölder不等式, 
> $$ \left| F_{a}\left(x\right) \right|\le \sum _{n = 1}^{\infty}\left| x_{n} \right|\left| a_{n} \right|\le \left\| x \right\|_{p}\left\| a \right\|_{q}    $$ 
> 故$F_{a}\in \left(\ell ^{p}\right)^{*}$, 并且
> $$ \left\| F_{a} \right\|\le \left\| a \right\|_{q} $$ 
> 反过来, 任取$F\in \left(\ell ^{p}\right)^{*}$
> 令
> $$ a_{n}= F\left(e_{n}\right) $$ 
> 对于每个$N$, 取有限序列
> $$ x_{n}^{\left(N\right)}= \begin{cases} a_{n}\left| a_{n} \right| ^{q-2},&1\le n\le N\\0,&n> N \end{cases}  $$ 
> 则
> $$ F\left(x^{\left(N\right)}\right) = \sum _{n = 1}^{N}x_{n}^{\left(N\right)}a_{n}= \sum _{n = 1}^{N}\left| a_{n} \right| ^{q}$$ 
> 又
> $$ \left\| x^{\left(N\right)} \right\|_{p}= \left(\sum _{n = 1}^{N}\left| a_{n} \right|^{\left(q-1\right)p} \right)^{\frac{1}{p}}= \left(\sum _{n = 1}^{N}\left| a_{n} \right|^{q} \right)^{\frac{1}{p}} $$ 
> 于是
> $$ \left| F\left(x_{n}^{\left(N\right)}\right) \right|=   \sum _{n = 1}^{N}\left| a_{n} \right| ^{q} \le \left\| F \right\|\left\| x^{\left(N\right)} \right\|_{p}= \left\| F \right\|\left(\sum _{n = 1}^{N}\left| a_{n} \right| ^{q}\right)^{\frac{1}{p}}$$ 
> 我们得到
> $$ \left(\sum _{n = 1}^{N}\left| a_{n} \right| ^{q}\right) ^{\frac{1}{p}}\le \left\| F \right\|$$ 
> 对于任意的$N$成立, 因此
> $$ \left(\sum _{n = 1}^{\infty}\left| a_{n} \right| ^{q}\right) ^{\frac{1}{q}}\le \left\| F \right\|$$ 
> 即
> $$ a\in \ell ^{q},\quad \left\| a \right\|_{q}\le \left\| F \right\| $$ 
> 由于有限序列在$\ell ^{p}$稠密, 且$F$与$F_{a}$在有限序列上一致, 因此
> $$ F= F_{a} $$ 
> 结合前面的结论, 得到
> $$ \left\| F_{a} \right\|= \left\| a \right\|_{q} $$
> 
> **当$p= 1$** 时, 此时$q= \infty$
> 对于$a= \left(a_{n}\right)\in \ell ^{p\infty}$, 定义
> $$ F_{a}\left(x\right)= \sum _{n = 1}^{\infty}x_{n}a_{n},\quad x\in \ell ^{1} $$ 
> 则
> $$ \left| F_{a}\left(x\right) \right|\le \left\| a \right\|_{\infty}\left\| x \right\|_{1}  $$ 
> 故
> $$ \left\| F_{a} \right\|\le \left\| a \right\|_{\infty} $$ 
> 反过来, 设
> $$ F\in \left(\ell ^{1}\right)^{*} $$ 
> 令
> $$ a_{n}= F\left(e_{n}\right) $$ 
> 由于
> $$ \left| a_{n} \right| = \left| F\left(e_{n}\right) \right|\le \left\| F \right\|\left\| e_{n} \right\|_{1}= \left\| F \right\|  $$ 
> 故
> $$ \sup _{n}\left| a_{n} \right| \le \left\| F \right\| $$ 
> 即$\left\| a \right\|_{\infty}\le F$
> 对于有限序列 $x$, 同样
> $$ F\left(x\right)= \sum _{n = 1}^{\infty}x_{n}a_{n}= F_{a}\left(\right) $$ 
> 有限序列在$\ell ^{1}$稠密, 故
> $$ F= F_{a} $$ 
> 因此
> $$ \left\| F \right\|= \left\| a \right\|_{\infty} $$ 
> $a\mapsto F_{a}$是等距同构.

> [!exercise] 3
> 证明
> $$
> c^*=(c_0)^*=\ell^1,
> $$
> 其中
> $$
> c_0=\left\{x=\{\xi_n\}\in c\mid \lim_{n\to\infty}\xi_n=0\right\}
> $$
> 是 $c$ 的子空间。

> [!proof] Proof: 
> 对于任意的$a= \left(a_{n}\right)\in \ell ^{1}$, 定义
> $$ f_{a}\left(x\right) =  \sum _{n = 1}^{\infty}a_{n}\xi _{n},\quad x= \left(\xi _{n}\right)\in c_0 $$ 
> 则
> $$ \left| f_{a}\left(x\right) \right|\le \left\| a \right\|_{1}\left\| x \right\|_{\infty}  $$ 
> $f_{a}\in \left(c_0\right)^{*}$, 并且
> $$ \left\| f_{a} \right\|\le \left\| a \right\|_{1} $$ 
> 反过来, 任取$f\in \left(c_0\right)^{*}$, 令
> $$ a_{n}= f\left(e_{n}\right) $$ 
> 定义有限序列$x^{\left(N\right)}$, 
> $$ x_{n}^{\left(N\right)}= \begin{cases} \frac{a_{n} }{\left| a_{n} \right|  }, & n\le N\\0,&n> N \end{cases}  $$ 
> 则
> $$ \left\| x^{\left(N\right)} \right\|_{\infty}\le 1 $$ 
> 于是
> $$ \sum _{n = 1}^{N}\left| a_{n} \right| = \left| f\left(x^{\left(N\right)}\right) \right| \le \left\| f \right\| $$ 
> 对于任意的$N$成立, 于是
> $$ \sum _{n = 1}^{\infty}\left| a_{n} \right| \le \left\| f \right\| $$ 
> 即$a\in \ell ^{1}$, $\left\| a \right\|_{1}\le \left\| f \right\|$
> 对于有限序列$x$, 我们有
> $$ f\left(x\right)= f_{a}\left(x\right) $$ 
> 又有限序列在$c_0$中稠密, 于是
> $$ f= f_{a} $$ 
> 因此$\left(c_0\right)^{*}\simeq \ell ^{1}$
> 
> **再来看$c$**, 对于$x= \left(\xi _{n}\right)\in c$, 记
> $$ \xi _{\infty}= \lim_{n\to \infty}\xi _{n} $$ 
> 则每个$x\in c$唯一分解为
> $$ x= \left(x-\xi _{\infty} \mathbf{1} \right) + \xi _{\infty} \mathbf{1}$$ 
> 其中
> $x-\xi _{\infty} \mathbf{1}\in c_0$
> 故
> $$ c= c_0\oplus \mathbb{R} \mathbf{1} $$
> 而
> $$ \ell ^{1}\oplus  \mathbb{R} \simeq \ell ^{1} $$  
> 故
> $$ c^{*}\simeq \left(c_0\right)^{*}\simeq \ell ^{1} $$ 
