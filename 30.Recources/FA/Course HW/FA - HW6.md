> [!exercise] Exercise: 1
> 给定一个 $m \times n$ 阶矩阵 $A$, 定义线性算子 $T: \mathbb{R}^n \to \mathbb{R}^m, x \mapsto Ax$. 试证明: $T$ 的算子范数等于 $A$ 的最大奇异值, 即矩阵 $A^T A$ 的最大特征值的平方根.

> [!proof] Proof: 
>  $$ \left< A^{\top}Ax,x \right>= \left< Ax,Ax \right>\ge 0 $$
> 因此$A^{\top}A$是半正定的,  
> $A^{\top}A$是实对称矩阵, 可对角化
> 设其特征值为$\lambda _1 \ge \lambda _2 \ge \cdots \ge \lambda _{n}\ge 0$.
>  $$ \left\| T \right\|= \max \left\{ \left\|  Ax \right\|: x\in S^{n-1}  \right\} $$  
> 存在 $x_0\in S^{n-1}\subseteq \mathbb{R} ^{n}$, 使得$A^{\top}Ax_0= \lambda _1 x_0$. 那么
>
>  $$\left(\left\| T \right\|\left\| x_0 \right\|\right)^{2}\ge  \left\| Ax_0 \right\|^{2}= \left< Ax_0,Ax_0 \right>= \left< A^{\top}Ax_0,x_0 \right>= \left< \lambda _1 x_0,x_0 \right>= \lambda _1 \left\| x_0 \right\|^{2}  $$ 
> 于是
>  $$ \left\| T \right\|\ge \sqrt{\lambda _1 } $$ 
> 另一方面, 
> 由Raileigh Quotient不等式, 对于任意的$x\in S^{n-1}\subseteq \mathbb{R} ^{n}$, 我们有
>  $$ \lambda _{n}\le \left< A^{\top}Ax,x \right>\le \lambda _1  $$ 
> 于是
>  $$ \lambda _1 \ge \left\| Ax \right\|^{2} $$
> 而$x$是$S^{n-1}$上的任意向量, 因此$\lambda _1 \ge \left\| T \right\|^{2}$, $\sqrt{\lambda _1 }\ge \left\| T \right\|$. 
>
> 因此
>  $$ \sqrt{\lambda _1 }= \left\| T \right\| $$ 


> [!exercise] Exercise: 2
> 设 $y \in C[0, 1]$, 定义泛函 $f: C[0, 1] \to \mathbb{R}, x \mapsto \int_0^1 x(t)y(t)dt$, 求 $\|f\|$.

> [!proof] Proof: 
> 若$\left\| y \right\|_{C\left[ 0,1 \right]}= 0$, 则$\left\| f \right\|= 0$.
>
> 下设$\left\| y \right\|_{C\left[ 0,1 \right]}> 0$, 则令 $z= \frac{y }{\left\| y \right\|_{C\left[ 0 ,1 \right]} }$, $g:C\left[ 0,1 \right]\to \mathbb{R} , x\mapsto \int _{0}^{1}x\left(t\right)z\left(t\right)\,d t$. 则$g = \frac{1 }{\left\| y \right\|_{C\left[ 0,1 \right]} }f$.
> 
> 将$g$自然地延拓为$L^{1}\left[ 0,1 \right]$上的算子, 
> 考虑$L^{1}$可积函数$x= \chi _{\left\{ z> 0 \right\}}-\chi _{\left\{ z< 0 \right\}}$
> 则
>  $$ \left| gx \right|= \int _{0}^{1}\chi _{\left\{ z> 0 \right\}}z\,d t+ \int _{0}^{1}\chi _{\left\{ z< 0 \right\}}\left(-z\right)\,d t= \int _{0}^{1}\left| z \right|\,d z= \left\| z \right\|_{L^{1}}   $$ 
>
> 由 Lusin 定理和有界 Tietze 延拓定理, 存在一列连续函数$\varphi _{n}\in C\left[ 0,1 \right]$, 使得$\lim_{n\to \infty}\left\| \varphi _{n}-x \right\|_{L^{1}}= 0$, $\lim_{n\to \infty}\left\| \varphi _{n} \right\|_{C\left[ 0,1 \right]}= 1$则
>
>  $$ \begin{aligned}  \left| g\varphi _{n} \right|= \left| \int _{0}^{1}\varphi _{n}z\,d t \right|&\ge  \int _{0}^{1}\left| xz \right|\,d t- \int _{0}^{1}\left| \varphi _{n}-x \right|z\,d t\\&\ge  \left\| z \right\|_{L^{1}}-\left\| \varphi _{n}-x \right\|_{L^{1}}  \end{aligned}     $$ 
> 于是
>  $$ \left\| g \right\|\ge  \frac{\left| g\varphi _{n} \right|  }{\left\| \varphi _{n} \right\|_{C\left[ 0,1 \right]} }\ge \frac{\left\| z \right\|_{L^{1}} }{ \left\| \varphi _{n} \right\|_{C\left[ 0,1 \right]}}- \frac{\left\| \varphi _{n}-x \right\|_{L^{1}} }{\left\| \varphi _{n} \right\|_{C\left[ 0,1 \right]} } $$ 
> 令$n\to \infty$, 得到
>  $$ \left\| g \right\|\ge \left\| z \right\|_{L^{1}} $$ 
>  
> 另一方面, 对于任意的$x\in C\left[ 0,1 \right]$使得$\left\| x \right\|_{C\left[ 0,1 \right]}= 1$, 我们有
>  $$ \left| gx \right|= \left| \int _{0}^{1}x\left(t\right) z\left(t\right)\,d t\right|\le \left\| x \right\|_{L^{\infty}}\left\| z \right\|_{L^{1}}= \left\| z \right\|_{L^{1}} $$ 
> 
> 由于$x$是任意的, 可知
>  $$ \left\| g \right\|\le \left\| z \right\|_{L^{1}} $$   
>
> 因此
>  $$ \left\| g \right\|= \left\|z \right\|_{L^{1}} $$ 
> 而
>  $$ \left\| g \right\|= \frac{1 }{\left\| y \right\|_{C\left[ 0,1 \right]} }\left\| f \right\|,\quad \left\| z \right\|_{L^{1}}= \frac{\left\| y \right\|_{L^{1}} }{\left\| y \right\|_{C\left[ 0,1 \right]} } $$ 
> 我们得到
>  $$ \left\| f \right\|= \left\|y \right\|_{L^{1}} $$ 



> [!exercise] Exercise: 3
> 证明: 线性算子 $T: X \to Y$ 有界, 当且仅当 $\exists x_0 \in X$ 以及 $r_0 > 0$, 使得 $T$ 把 $\bar{B}_{r_0}(x_0) = \{x \in X | \|x - x_0\| \le r_0\}$ 映为 $Y$ 中的有界集.

> [!proof] Proof: 
> 由于$T$是有界的, 存在$N$, 使得$T\left(\overline{B}_{X}\left(0,1\right)\right)\subseteq \overline{B}_{Y}\left(0,N\right)$. 于是取$x_0= 0, r_0= 1$, 即可知"当"的方向成立.
>
> 反之, 若存在$x_0\in X$, $r_0> 0$, 使得$T$把$\overline{B}_{X}\left(x_0,r_0\right)$映为$Y$中的有界集$A$, 设$A\subseteq B_{Y}\left(0,N\right)$. 
>
> 任取$y\in S_{X}$, 其中$S_{X}$为 $X$上的单位球面, 则$\tilde{y}:= r_0y+ x_0\in \overline{B}_{X}\left(x_0,r_0\right)$,  $y= \frac{\tilde{y}-x_0 }{r_0 }$.
>  $$ \left\| T\left(y\right) \right\|= \frac{1 }{r_0 }\left\| T\tilde{y}-Tx_0 \right\|\le \frac{1 }{r_0 }\left(\left\| T\tilde{y} \right\|+ \left\| Tx_0 \right\|\right)\le \frac{1 }{r_0 }\left(N+ \left\| Tx_0 \right\|\right)$$
> 因此$T$是有界的. 

> [!exercise] Exercise: 4
> 线性算子 $T: X \to Y$ 的**核 (kernel)** 定义为 $N(T) = \{x \in X | Tx = 0\}$. 证明: $X$ 上的线性泛函 $f: X \to \mathbb{K}$ 是有界的, 当且仅当 $N(f)$ 是 $X$ 的闭线性子空间.

> [!proof] Proof: 
> 易见线性算子的kernal是线性子空间. 
> 
> 若$f$是有界的, 则$f$是连续的, 由于$\mathbb{K}$是Hausdorff空间, $\left\{ 0 \right\}\subseteq \mathbb{K}$是闭集. 我们得到$N\left(f\right)= f^{-1} \left(\left\{ 0 \right\}\right)$是一个闭集, 故而是一个闭线性子空间.
>
>
> 
> $f$诱导出线性算子
>  $$ \bar{f}: X/N\left(f\right)\to \mathbb{K},\quad \bar{f}\left(x+ N\left(f\right)\right)= f\left(x\right) $$ 
> 由于$N\left(f\right)$是闭子空间, $X/N\left(f\right)$是赋范线性空间. 由于$\bar{f}$是线性同构, $\operatorname{dim}\left(X/N\left(f\right)\right)= 1$, $\bar{f}$是有限维赋范线性空间上的线性算子, 故而连续. 又$f= \bar{f}\circ \pi$, 故而$f$也连续, 进而有界.
> 

> [!exercise] Exercise: 5
> 设$\sup_{n\geq 1}|a_n|<\infty$, 在$l^1$上定义算子$T: y=Tx$, 其中$x=\{\xi_k\}$, $y=\{\eta_k\}$, $\eta_k=a_k\xi_k$ ($k=1,2,\cdots$). 证明$T$是$l^1$上的有界线性算子并且$\|T\|=\sup_{n\geq 1}|a_n|$.

> [!proof] Proof: 
>  $$ \begin{aligned} T\left(x^{\left(1\right)}+ sx^{\left(2\right)}\right)&= T\left(\left\{ \xi _{k}^{\left(1\right)}+ s\xi _{k}^{\left(2\right)} \right\}\right)= \left\{ a_{k}\xi _{k}^{\left(1\right)}+ sa_{k}\xi _{k}^{\left(2\right)} \right\}\\&= \left\{ a_{k}\xi _{k}^{\left(1\right)} \right\}+ s\left\{a_{k} \xi _{k}^{\left(2\right)} \right\} \\&=Tx^{\left(1\right)}+ sTx^{\left(2\right)}\end{aligned}  $$ 
> 因此$T$是线性算子.
>
> 任取$x= \left\{ \xi _{k} \right\}\in \ell ^{1}$, 我们有$\left| \eta _{k} \right|= \left| a_{k} \right|\left| \xi _{k} \right|\le \sup _{n\ge 1}\left| a_{n} \right|\left| \xi _{k} \right|$. 于是
>  $$ \left\| Ty \right\|_{\ell ^{1}}= \sum _{k= 1}^{\infty} \left| a_{k} \right|\left| \xi _{k} \right|\le \sup _{n\ge 1}\left| a_{n} \right|\sum _{k= 1}^{\infty}\left| \xi _{k} \right|= \sup _{n\ge 1}\left| a_{n} \right|\left\| x \right\| _{\ell ^{1}}    $$ 
> 因此
>  $$ \frac{\left\| Ty \right\|_{\ell ^{1}} }{\left\| x \right\|_{\ell ^{1}} }\le \sup _{n\ge 1}\left| a_{n} \right|  $$ 
> 故$T$有界, $\left\| T \right\|\le \sup _{n\ge 1}\left| a_{n} \right|$.
> 取$\left\{ a_n \right\}$的子列$\left\{ a_{n_{k}} \right\}$, 使得$\lim_{k\to \infty}\left| a_{n_{k}} \right|= \sup _{n\ge 1}\left| a_{n} \right|$. 定义$x_{k}$为第$n_{k}$个位置为$\operatorname{sgn}\left(a_{n_{k}}\right)$, 其余位置为零的点, 则$\left\| x_{k} \right\|_{\ell ^{1}}= 1$, 并且
>  $$ \left\| Tx_{k} \right\|_{\ell ^{1}}= \left| a_{n_{k}} \right|\operatorname{sgn}\left(a_{n_{k}}\right)= \left| a_{n_{k}} \right|   $$ 
> 从而
>  $$ \lim_{k\to \infty}\left\| Tx_{k} \right\|_{\ell ^{1}}= \lim_{k\to \infty}\left| a_{n_{k}} \right|= \sup _{n\ge 1}\left| a_{n} \right|   $$ 
> 故而
>  $$ \left\| T \right\|\ge \sup _{n\ge 1}\left| a_{n} \right|  $$ 
> 因此$\left\| T \right\|= \sup _{n\ge 1}\left| a_{n} \right|$.

> [!exercise] Exercise: 6
> 若$f$是$[a,b]$上的可测函数，而且对$\forall g\in L^p[a,b](1<p<\infty)$，都有$f\cdot g\in L^1[a,b]$，求证:$f\in L^q[a,b]$，其中$\frac{1}{p}+\frac{1}{q}=1$.

> [!proof] Proof: 
> 定义
>  $$ T: L^{p}\left(\left[ a,b \right]\right)\to \mathbb{R}  $$
>  $$ T\left(g\right)= \int _{a}^{b}f\cdot g $$
> 由题设可知, $T$是良定义的.
> 考虑图像
>  $$ G= \left\{ \left(g, \int _{a}^{b}f\cdot g\right): g\in L^{p} \right\} $$  
> 取$G$上的收敛点列$\left(g_{n}, \int _{a}^{b}fg_{n}\right)$, 使得
>  $$ \lim_{n\to \infty}\left\| g_{n}-g \right\|_{L^{p}}= 0,\quad \lim_{n\to \infty}\int _{a}^{b}fg_{n}= S $$
> 存在子列$\left\{ g_{n_{k}} \right\}$, 使得$\lim_{k\to \infty}g_{n_{k}}= g,a.e$, 进而存在非负函数$H\in L^{p}$, 使得$\left| g_{n_{k}} \right|\le H,a.e.$ 于是
>  $$ \left\| fg_{n_{k}} \right\|_{L^{1}}= \int _{a}^{b}\left| f \right|\left| g \right| \le \int _{a}^{b}\left| f \right|H= \left\| fH \right\|_{L^{1}}  ,\quad \forall k $$
> 由控制收敛定理, 
>  $$ \lim_{k\to \infty}\int _{a}^{b}fg_{n_{k}}= \int _{a}^{b}fg $$
> 由极限的唯一性, 
>  $$ \lim_{n\to \infty}\int _{a}^{b}fg_{n}= \lim_{k\to \infty}\int _{a}^{b}fg_{n_{k}}= \int _{a}^{b}fg $$  
> 而$g\in L^{p}$, 因此点列$\left\{ \left(g_{n},\int _{a}^{b}fg_{n}\right) \right\}$收敛于$G$上的点$\left(g,\int _{a}^{b}fg\right)$. 因此$G$是闭的. 由闭图像定理, $T$是有界的线性算子.
>
> 因此$T\in\left(L^{p}\right)^{*}$, 由Riesze表示定理, $f= \left(T\right)^{*}\in L^{q}$.

> [!exercise] Exercise: 7
> 如果序列$a=\{a_k\}$使得$\forall x=\{\xi_k\}\in l^1$，线性泛函$f(x)=\sum_{k=1}^{\infty}a_k\xi_k$都收敛.
> 证明：
> 1. $a\in l^{\infty}$;
> 2. $\|f\|=\|a\|_{l^{\infty}}=\sup_{k\ge 1}|a_k|$.

> [!proof] Proof: 
> 1. 若$a\not \in \ell ^{\infty}$, 则存在子列$\left\{ a_{k_{n}} \right\}$, 使得$\left| a_{k_{n}} \right| \ge 2^{n}$. 
>    令
>     $$ x= \left\{ \xi _{m} \right\}= \begin{cases}\frac{1 }{2^{n} }\operatorname{sgn}\left(a_{k_{n}}\right), & n\text{ such that } m= k_{n}\\ \frac{1 }{2^{m} }\operatorname{sgn}\left(a_{m}\right),&else \end{cases}  $$ 
>    则
>     $$ \sum _{m = 1}^{\infty}\left| \xi _{m} \right| \le \sum _{n= 1}^{\infty}\xi _{k_{n}}+ \sum _{m= 1}^{\infty}\frac{1 }{2^{m} }\le \sum _{n= 1}^{\infty}\frac{1 }{2^{n} }+ \sum _{m= 1}^{\infty}\frac{1 }{2^{m} }\le 2 $$
>    因此$x\in \ell ^{1}$. 但是此时$\left\{ a_{k}\xi _{k} \right\}$的每一项都是非负的, 并且
>     $$ \sum _{k= 1}^{\infty}a_{k}\xi _{k}\ge \sum _{n = 1}^{\infty}\operatorname{sgn}\left(a_{k_{n}}\right) a_{k_{n}}\frac{1 }{2^{n} }= \sum _{n = 1}^{\infty}\left| a_{k_{n}} \right|\frac{1 }{2^{n} }\ge \sum _{n = 1}^{\infty}1= \infty $$  
>    与$f\left(x\right)$收敛矛盾. 因此$a\in \ell ^{\infty}$.
> 
> 2. 取$\left\{ a_{k} \right\}$的子列$\left\{ a_{k_{n}} \right\}$, 使得$\lim_{n\to \infty}\left| a_{k_{n}} \right| =\left\| a \right\|_{\ell ^{\infty}}$. 令$x_{n}= \left(0,\cdots ,0,\operatorname{sgn}\left(a_{k_{n}}\right),0,\cdots \right)$, 其中第$k_{n}$个位置是$\operatorname{sgn}\left(a_{k_{n}}\right)$, 其余位置为零, 则$\left\| x_{n} \right\|_{\ell ^{1}}= 1$. 而
>  $$ \left| f\left(x_{n}\right) \right|= a_{k_{n}}\operatorname{sgn}\left(a_{kn}\right)= \left| a_{k_{n}} \right|   $$
> 因此
>  $$ \lim_{n\to \infty}\left| f\left(x_{n}\right) \right|  = \sup _{k\ge 1}\left| a_{k} \right| $$  
> 故
>  $$ \left\| f \right\|\ge \sup _{k\ge 1}\left| a_{{k}} \right|= \left\| a \right\|_{\ell ^{\infty}}  $$ 
> 另一方面, 任取$x= \left\{ \xi _{k} \right\}\in \ell ^{1}$, 我们有$\left| a_{k}\xi _{k} \right|\le \left\| a \right\|_{\ell ^{\infty}}\left| \xi _{k} \right|$
> 于是
>  $$ \sum _{k= 1}^{\infty}\left| a_{k}\xi _{k} \right|\le \left\| a \right\|_{\ell ^{\infty}}\sum _{k= 1}^{\infty}\left| \xi _{k} \right|= \left\| a \right\|_{\ell ^{\infty}}\left\| x \right\|_{\ell ^{1}}   $$ 
> 于是
>  $$ \frac{\left| f\left(x\right) \right|  }{\left\| x \right\|_{\ell ^{1}} }\le \left\| a \right\|_{\ell ^{\infty}} $$ 
> 这表明$\left\| f \right\|\le \left\| a \right\|_{\ell ^{\infty}}$. 因此$\left\| f \right\|=\left\| a \right\|_{\ell ^{\infty}}$

> [!exercise] Exercise: 8
> 设 $\{x_n\} \subset L^p[a,b] (1 < p < \infty)$. 证明对于每一个 $y \in L^q[a,b] \left(\frac{1}{p} + \frac{1}{q} = 1\right)$, $\int_a^b x_n(t)y(t)\mathrm{d}t \to 0 \quad (n \to \infty)$, 当且仅当 $\sup_n \| x_n \| < \infty$, 并且对于每一个可测子集 $E \subset [a,b]$, $\int_E x_n(t)\mathrm{d}t \to 0 (n \to \infty)$.

> [!proof] Proof: 
>
> **充分性:**
> 对于$y\in L^{q}\left[ a,b \right]$, 任取$\varepsilon > 0$, 存在阶梯函数$\varphi$, 使得
>  $$ \left\| \varphi -y \right\|_{L^{q}}< \varepsilon  $$ 
> 设
>  $$ \varphi = \sum _{i= 1}^{m}\chi _{E_{i}}a_{i} $$ 
>  
>  $$ \lim_{n\to \infty}\int _{a}^{b}x_{n}\left(t\right) \varphi \left(t\right)\,d t= \lim_{n\to \infty}\sum _{i= 1}^{m}a_{i}\int _{E_{i}}x_{n\left(t\right)}\,d t= 0$$ 
>
>  $$ \begin{aligned} \left| \int _{a}^{b}x_{n}y \right|&\le \left| \int _{a}^{b}x_{n}\varphi  \right|+ \left| \int _{a}^{b}x_{n}\left(\varphi -y\right) \right|\\&\le\left| \int _{a}^{b}x_{n}\varphi  \right|+ \left\| x_{n} \right\|_{L^{p}}\left\| \varphi-y \right\|_{L^{q}}\\&\le \left| \int _{a}^{b}x_{n}\varphi  \right|+ \sup _{n}\left\| x_{n} \right\|\varepsilon    \end{aligned}    $$ 
> 令$n\to \infty$, 得到
>  $$ \limsup_{n\to \infty}\left| \int _{a}^{b}x_{n}\left(t\right)y \left(t\right) \,d t \right| \le \sup _{n}\left\| x_{n} \right\|\varepsilon $$
> 令$\varepsilon \to 0^{+ }$, 得到
>  $$ \lim_{n\to \infty}\int _{a}^{b}x_{n}\left(t\right)y\left(t\right)\,d t= 0 $$  
>
> **必要性**: 定义
>  $$ T_{n}: L^{q}\left[ a,b \right]\to \mathbb{R} ,\quad T_{n}\left(y\right)= \int _{a}^{b}x_{n}\left(t\right)y\left(t\right)\,d t $$ 
> 则对于每个$y$, 
>  $$ \lim_{n\to \infty}\left| T_{n}\left(y\right) \right|  = 0$$ 
> 于是
>  $$ \sup _{n}\left| T_{n}\left(y\right) \right|< \infty,  $$ 
> 由Banach-Steinhause原理, 算子$\left\{ T_{n} \right\}$是一致有界的, 即存在$C$, 使得
>  $$ \left\| T_{n} \right\|\le C,\quad n\in \mathbb{N} \tag{*}  $$ 
>
>  **验证$T_{n}$的算子范数就是$\left\| x_{n} \right\|_{L^{p}}$**
>
> 对于任意的$y\in L^{q}$, 我们有
>  $$ \left| T_{n}\left(y\right) \right|\le \left\| x_{n}y \right\|_{L^{1}}\le \left\| x_{n} \right\|_{L^{p}}\left\| y \right\|_{L^{q}}  $$ 
> 这表明
>  $$ \left\| T _{n}\right\|\le \left\| x_{n} \right\|_{L^{p}} $$ 
> 另一方面, 取$y_{n}\left(t\right)= \operatorname{sgn}\left(x_{n}\right)\left(x_{n}\left(t\right)\right)^{p-1}$
>  $$ \left\| y_{n} \right\|_{L^{q}}=  \left\| \left(x_{n}\right) ^{p-1}\right\|_{L^{q}}= \left| \int \left| x_{n} \right|^{\left(p-1\right)q}  \right|^{\frac{1}{q}}= \left| \int \left| x_{n} \right|^{p}  \right|^{\frac{1}{q}}= \left\| x_{n} \right\| _{L^{p}}^{\frac{p }{q }}< \infty  $$ 
>
>  因此$y_{n}\in L^{q}$. 
>
>
>  $$ \left\| T_{n} \right\| \ge \frac{\left| T_{n}y_{n} \right|  }{\left\| y_{n} \right\|_{L^{q}} }= \frac{\left\| x_{n}^{p} \right\|_{L^{1}} }{\left\| x_{n} \right\|_{L^{p}}^{\frac{p}{q}} }= \frac{\left\| x_{n} \right\|_{L^{p}}^{p} }{ \left\| x_{n} \right\|^{\frac{p}{q}}_{L^{p}}} = \left\| x_{n} \right\|_{L^{p}}^{p\left(1-\frac{1 }{ q}\right)}=\left\| x_{n} \right\|_{L^{p}} $$ 
> 于是$\left\| T_{n} \right\|= \left\| x_{n} \right\|_{L^{p}}$
> 带入$(*)$, 得到
>  $$ \sup _{n}\left\| x_{n} \right\|_{L^{p}}\le C< \infty $$ 

> [!exercise] Exercise: 9
> 设 $X$ 是 Banach 空间, $p(x)$ 是 $X$ 上的泛函, 满足: 1) $p(x) \geqslant 0$; 2) 当 $\alpha \geqslant 0$ 时, $p(\alpha x) = \alpha p(x)$; 3) $p(x+y) \leqslant p(x) + p(y)$. 并且当 $x, x_n \in X, x_n \to x (n \to \infty)$ 时, $\varliminf\limits_{n} p(x_n) \geqslant p(x)$. 证明存在常数 $M$, 使得
> $$ p(x) \leqslant M \| x \| \quad \quad (x \in X). $$

> [!proof] Proof: 
>  由于$p$是下半连续的, 则对于每个$n$, 
>  $$ F_{n}:= \left\{ x\in X: p\left(x\right)\le n \right\} $$
> 是一个闭集. 由于$X$是Banach空间, 且$X= \bigcup _{n = 1}^{\infty}F_{n}$,  由Baire纲定理, 至少存在一个$n_0$, 使得$\left(F_{n_0}\right)^{\circ}\neq \varnothing$.
> 即存在开球$B_{r}\left(x_0\right)$, 使得对于任意的$y\in B_{r}\left(x_0\right)$, $p\left(y\right)\le n_0$.
> 任取$x\in S_{X}$, 则$z:= r\left(x-x_0\right)\in B_{r}\left(x_0\right)$, 
>  $$ x= \frac{1 }{r }z+ x_0 $$ 
>  $$ p\left(x\right)\le p\left(\frac{1 }{r }z\right)+ p\left(x_0\right)= \frac{1 }{r }p\left(z\right)+ x_0\le \frac{n_0 }{r }+ x_0 $$
> 于是对于一般的$x\in X$, 
>  $$ p\left(x\right)= \left\| x \right\|p\left(\frac{x }{ \left\| x \right\|}\right) \le \left(\frac{n_0 }{ r}+ x_0\right)\left\| x \right\|$$  

> [!exercise] Exercise: 10
> 设 $\{x_k\}$ 是 Banach 空间 $X$ 中的点列 . 证明如果对于每一个 $f \in X^*$, $\sum\limits_{k=1}^\infty \mid f(x_k) \mid < \infty$, 则存在常数 $M$, 使得对于每一个 $f \in X^*$
> $$ \sum_{k=1}^\infty \mid f(x_k) \mid \leqslant M \| f \|. $$

> [!proof] Proof: 
> **构造泛函$p$**
> 对于每个$n$, 定义
>  $$ T_{n}= \left| x_1^{*}\left(\cdot \right) \right|  + \cdots + \left| x_{n}^{*}\left(\cdot \right) \right| $$
> 则$T_{n}\in X^{*}$.  对于每个$f\in X^{*}$, 
>  $$ T_{n}\left(f^{*}\right)=\left| f\left(x_1\right) \right|+ \cdots + \left| f\left(x_{n}\right) \right|  $$
>  定义 $p:X\to \mathbb{R}$, 
>  $$ p\left(x\right)= \sup _{n}\left\| T_{n}\left(x\right) \right\| $$ 
> 
> **验证Exercise 9中的条件**: 
> 则显然$p\left(x\right)\ge 0$. 当$\alpha \ge 0$时, 
>  $$ p\left(\alpha x\right)= \sup _{n}\left\| T_{n}\left(\alpha x\right) \right\| $$ 
> 其中
>  $$ T_{n}\left(\alpha x\right)= \sum _{i= 1}^{n}\left| x_{i}^{*}\left(\alpha x\right) \right|  = \sum _{i= 1}^{n}\alpha \left| x_{i}^{*}\left(x\right) \right|= \alpha T_{n}\left(x\right) $$
> 因此
>  $$ p\left(\alpha x\right)= \sup _{n}\left\| \alpha T_{n}\left(x\right) \right\|= \alpha \sup _{n}\left\| T_{n}\left(x\right) \right\| = \alpha p\left(x\right)$$
> 并且由$\left| x_{i}^{*}\left(x+ y\right) \right|\le \left| x_{i}^{*}\left(x\right) \right|+ \left| x_{i}^{2}\left(y\right) \right|$, 可知$\left| T_{n}\left(x+ y\right) \right|\le \left| T_{n}\left(x\right) \right|+ \left| T_{n}\left(y\right) \right|$, 进而$p\left(x+ y\right)\le p\left(x\right)+ p\left(y\right)$ .
> 当$y,y_{n}\in X$, $y_{n}\to y$时, 
>  $$ \liminf_{n\to \infty}T\left(y_{n}\right)=  $$  