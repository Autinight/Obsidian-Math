代靖涵 25120222201319
> [!exercise] 1
> 假设 Hilbert 空间中的点列 $\{x_n\}$ 弱收敛到 $x_0$ 且
> $$
> \lim_{n \to \infty}\|x_n\|=\|x_0\|.
> $$
> 证明 $\{x_n\}$ 强收敛到 $x_0$，即
> $$
> \lim_{n \to \infty}\|x_n-x_0\|=0.
> $$

> [!proof] Proof: 
>
> $$ z\mapsto \left< z,x_0 \right> $$
> 是$H$上的有界线性算子, 由弱收敛性, 可知
> $$ \lim_{n\to \infty}\left< x_{n}, x_0 \right>= \left< x_0,x_0 \right>= \left\| x_0 \right\|^{2} $$  
> 考虑
> $$ \left< x_{n}-x_0, x_{n}-x_0 \right>= \left\| x_{n} \right\|^{2}+ \left\| x_0 \right\|^{2}-2\left< x_{n},x_0 \right> $$ 
> 令$n\to \infty$, 得到
> $$ \begin{aligned} \lim_{n\to \infty}\left\| x_{n}-x_0 \right\|^{2}&= \lim_{n\to \infty}\left< x_{n}-x_0,x_{n}-x_0 \right>\\&= \lim_{n\to \infty}\left(\left\| x_{n} \right\|^{2}+ \left\| x_0 \right\|^{2}-2 \left< x_{n},x_0 \right>\right)\\&= \left\| x_0 \right\|^{2}+ \left\| x_0 \right\|^{2}-2\left\| x_{0} \right\|^{2}= 0 \end{aligned} $$ 
> 故$\left\{ x_{n} \right\}$强收敛到$x_0$.


> [!exercise] 2
> 证明 **Lax-Milgram 定理**：设 $a(x,y)$ 是实 Hilbert 空间 $H$ 上的一个强制有界双线性函数，证明存在唯一的有界线性算子 $T \in \mathcal{L}(H)$，满足
> $$
> a(x,y)=\langle x,Ty\rangle,\qquad \forall x,y \in H,
> $$
> 且 $T$ 有有界逆算子 $T^{-1}\in \mathcal{L}(H)$。

> [!proof] Proof: 
> **存在性**:
> 定义
> $$ F_{y}\left(x\right)= a\left(x,y\right) $$ 
> 易见$F_{y}$是线性算子.
> 
> 由于$a$是有界的, 存在$M> 0$, 使得
> $$ \left| a\left(x,y\right) \right|\le M\left\| x \right\|\left\| y \right\|  $$ 
> 于是
> $$ \left\| F_{y}\left(x\right) \right\|\le M\left\| x \right\|\left\| y \right\|\implies \left\| F_{y} \right\|\le M\left\| y \right\| $$ 
> 
> $F_{y}$是有界线性算子. 由Riesz表示定理,存在$Ty \in H$, 使得
> $$ a\left(x,y\right)= F_{y}\left(x\right)=  \left< x, Ty \right> $$ 
> 且
> $$ \left\| Ty \right\|= \left\| F_{y} \right\| \le M\left\| y \right\|$$ 
> 定义
> $$ T: y\mapsto Ty $$ 
> 对于任意的$x$
> $$ \begin{aligned} \left< x, T\left(y_1+ ky_2\right) \right>&= a\left(x, y_1+ ky_2\right)= a\left(x,y_1\right)+k a\left(x,y_2\right)= \left< x, Ty_1 \right>+k \left< x,Ty_2 \right>\\&= \left< x, Ty_1+ kTy_2 \right> \end{aligned}  $$ 
> 于是
> $$ T\left(y_1+k y_2\right)= Ty_1+ kTy_2 $$ 
> 因此$T$是线性算子.
> 
> 且 
> $\left\| T \right\|\le M$, $T$是有界线性算子.
> 
> **唯一性**:
> 若$T_1,T_2$是有界线性算子, 使得
> $$ a\left(x,y\right)= \left< x,T_1y \right> = \left< x, T_2y \right>$$ 
> 于是对于任意的$x,y$,
> $$ \left< x, \left(T_1-T_2\right)y \right>= 0 $$ 
> 因此$T_1= T_2$. 
> 
> 
> 
> **$T$是单射**. 
> 
> 若
> $$ Tx_1= Tx_2 $$
> 则
> $$ 0 = \left< x_1-x_2, T\left(x_1-x_2\right) \right>= a\left(x_1-x_2,x_1-x_2\right)\ge m\left\| x_1-x_2 \right\|^{2}= 0 $$  
> 于是$x_1= x_2$
> 因此$T$是单射
> 
> 
> **$R\left(T\right)$稠密**
> 
> 任取$z\in \left(R\left(T\right)\right)^{\perp}$, 则
> $$a\left(z,y\right)=  \left< z, Ty \right>= 0, \forall y $$ 
> 特别地, 取$y= z$, 由强制性, 
> $$ m\left| z \right| ^{2}\le a\left(z,z\right)= 0\implies z= 0 $$ 
> 因此
> $$ \left(R\left(T\right)\right)^{\perp}= \left\{ 0 \right\} $$ 
> $R\left(T\right)$稠密.
> 
> **$R\left(T\right)$是闭的**. 设$\lim_{n\to \infty}Tx_{n}= y$, 则
> 由$a$的强制性, 
> $$ \left\| Tx \right\|\ge m \left\| x \right\| $$ 
> $$ \left\| x_{m}-x_n \right\|\le \frac{1 }{m }\left\| T\left(x_{m}-x_n\right) \right\|$$ 
> 由于$\left\{ Tx_{n} \right\}$是Cauchy列, 可知$\left\{ x_{m} \right\}$是Cauchy列. 由完备性, 存在$x_0\in H$, 使得$\lim_{n\to \infty}x_{n}= x_0$.
> 由$T$的连续性, 
> $$ Tx_0= y $$ 
> 因此$R\left(T\right)$是闭的. 
> 
> **$T^{-1}$存在性**
> 
> 综上可知$R\left(T\right)= H$, 故$T$是满射. 因此$T$是可逆的算子.
> 
> **$T^{-1}$有界性**
> 
> 再一次由强制性, 令$y= Tx$, 则$x= T^{-1} y$, 我们有
> $$ \left\| y \right\|\ge m \left\| T^{-1} y \right\|,\implies \left\| T^{-1}  \right\|\le \frac{1 }{m } $$ 
> 故$T^{-1}$是有界逆算子.








> [!exercise] 3
> 设 $H$ 为 Hilbert 空间，$M$ 是 $H$ 的闭子空间。证明 $M$ 为 $H$ 上某个非零连续线性泛函的零空间，当且仅当 $M^\perp$ 是一维子空间。


> [!proof] Proof: 
> $\implies$, 若$f$是$H$上的非零线性泛函, 有Riesz表示定理, 存在非零的$y\in H$, 使得
> $$ f\left(x\right)= \left< y,x \right>, \quad \forall x\in H $$ 
> 那么
> $$ M= \operatorname{ker}f= \left\{ x \in H: \left< y,x \right>= 0 \right\}= \left\{ y \right\}^{\perp}= \operatorname{span}\left\{ y \right\}^{\perp} $$ 
> 由于$\operatorname{span}\left\{ y \right\}$是闭的线性子空间, 可以将$H$正交分解为
> $$ H= \operatorname{span}\left\{ y \right\}\oplus \operatorname{span}\left\{ y \right\}^{\perp} $$ 
> 首先说明$\operatorname{span}\left\{ y \right\}\subseteq M^{\perp}= \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp}$, 事实上, 任取$x\in \operatorname{span}\left\{ y \right\}^{\perp}$, 我们有
> $$ \left< ky, x \right>= 0 $$
> 因此$ky \in \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp}$, 故$\operatorname{span}\left\{ y \right\}\subseteq M^{\perp}$. 反过来, 任取$z\in M^{\perp}$, 设$z= ky+ w$, 其中$w\in \operatorname{span}\left\{ y \right\}^{\perp}$. 则
> $$ 0= \left< z, x \right>= \left< ky+ w,x \right>= \left< w,x \right>,\quad \forall x\in \operatorname{span}\left\{ y \right\}^{\perp} $$  
> 特别地, 取$x= w$, 得到$w= 0$. 因此$z= ky$, $z\in \operatorname{span}\left\{ y \right\}$.  于是$M^{\perp}= \operatorname{span}\left\{ y \right\}$. 故$M^{\perp}$是一维的线性子空间.
> 
> $\impliedby$.
>   设
>  $$ M^{\perp}= \operatorname{span}\left\{ y \right\} $$ 
>  由于$M$是闭的线性子空间, 将$H$分解为
>  $$ H= M\oplus M^{\perp} $$ 
>  
>  我们证明$M= \left(M^{\perp}\right)^{\perp}$. 事实上, 一方面
>  
>  $$ \left< x,y \right>= 0 ,\quad \forall x\in M, y\in M^{\perp}\implies  x \in \left(M^{\perp}\right)^{\perp}, \forall x\in M $$ 
>  
>  另一方面, 任取$z\in \left(M^{\perp}\right)^{\perp}$, 设$z=  z_{M}+ z_{M^{\perp}}$, 
>  则
>  $$ 0= \left(z,  z_{M^{\perp}}\right) = \left< z_{M}, z_{M^{\perp}} \right>+ \left\| z_{M^{\perp}} \right\|^{2}= \left\| z_{M^{\perp}} \right\|^{2}$$ 
>  得到$z_{M^{\perp}}= 0$. 因此$z= z_{m}\in M^{\perp}.$ 故$\left(M^{\perp}\right)^{\perp}= M$. 于是
>  
>  $M= \operatorname{span}\left\{ y \right\}^{\perp}$.
>  定义
>  $$ f\left(x\right)= \left< y,x \right> $$ 
>  
>  则$f$是有界线性泛函, 使得
>  $$ M= \operatorname{ker}f $$ 



> [!exercise] 4
> 设 $T$ 是 Hilbert 空间 $H$ 上的线性算子且对所有 $x,y\in H$，
> $$
> (Tx,y)=(x,Ty).
> $$
> 证明 $T$ 是有界算子。

> [!proof] Proof: 
> 我们验证图像
> $$ G\left(T\right)= \left\{ \left(x,Tx\right): x\in H \right\} $$ 
> 是闭的, 从而由闭图像定理即可知结论成立.
>
> 为此, 设$\left\{ x_{n} \right\}\subseteq H$, $\lim_{n\to \infty}x_{n}= x_0$, $\lim_{n\to \infty}Tx_{n}= y$. 则由内积的连续性, 对于任意$z\in H$,
> $$ \left< y,z \right>= \left< \lim_{n\to \infty}Tx_{n},z \right>= \lim_{n\to \infty}\left< Tx_{n},z \right> $$ 
> 由自对偶性,
> $\left< Tx_{n},z \right>= \left< x_{n},Tz \right>$
> 再一次由内积的连续性和$T$的自对偶性,
> $$ \left< y,z \right>= \lim_{n\to \infty}\left< x_{n},Tz \right>= \left< x_0,Tz \right>= \left< Tx_0,z \right> $$ 
> 于是$y= Tx_0$. 因此$G\left(T\right)$是闭的, $T$是有界算子.

> [!exercise] 5
> 设 $X$ 是线性赋范空间，$X^*$ 是其对偶空间。
> 
> (1) 设 $M\subset X$ 是线性子空间，则
> $$
> ({}^\perp M)^\perp=\overline{M}.
> $$
> 
> (2) 设 $N\subset X^*$ 是线性子空间，则
> $$
> {}^\perp(N^\perp)\supset \overline{N}.
> $$

> [!proof] Proof: 
> 1. 任取$x\in M$, 我们有
>    $$ \left< f,x \right>= 0, \forall f\in ^{\perp}M $$ 
>    这表明$x\in \left(^{\perp}M\right)^{\perp}$, 因此$M\subseteq \left(^{\perp}M\right)^{\perp}$, 又$\left(^{\perp}M\right)^{\perp}$是闭的, $\overline{M}\subseteq \left(^{\perp}M\right)^{\perp}$.
>   
>    为了证明反方向, 我们证明$x_0\not \in \overline{M}\implies x_0\not \in \left(^{\perp}M\right)^{\perp}$. 事实上, 任取$x_0\not \in \overline{M}$, 有Hahn-Banach分离定理,  存在$f\in X^{*}$, 使得
>    $$ f|_{\overline{M}}= 0,\quad f\left(x_0\right)= 1,\quad \left\| f \right\|= 1 $$ 
>    则$f\in ^{\perp}M$, 但是$x_0\not \in \left(^{\perp}M\right)^{\perp}$.
>
> 2. 
>    我们证明
>    $$ N\subseteq ^{\perp}\left(N^{\perp}\right) $$ 
>    
>    对于任意的 $f\in N$, 我们有
>    
>    $$ \left< f,x \right>= 0, \forall x \in N^{\perp} $$ 
>    于是
>    $$ f\in ^{\perp}\left(N^{\perp}\right) $$
>    
>    为了说明$^{\perp}\left(N^{\perp}\right)$是闭的, 接下来证明一个更一般的结论:
> 
>    > [!lemma] Lemma: 
>    > 对于任意的$M\subseteq X$, 
>    > $$ ^{\perp}M $$ 
>    > 是$X^{*}$中的闭线性子空间.
>    
>    > [!proof] Proof of Lemma 
>    >
>    > $$ \begin{aligned} ^{\perp}M&= \bigcap _{x \in M} \operatorname{ker} \hat{x}= \left\{ f \in X^{*}: \hat{x}\left(f\right)= 0, \forall x\in M \right\}\\&= \left\{ f\in X^{*}: f\left(x\right)= 0 , \forall x \in M \right\} \end{aligned}$$ 
>    > 其中$\hat{x}\in X^{**}$, $\hat{x}\left(f\right)= f\left(x\right)$. $\hat{x}$是连续线性泛函, 故$\operatorname{ker}\hat{x}$是闭的, 而闭集的任意交是闭的, 故$^{\perp}M$是闭的.
>    
>    由引理可知$^{\perp}\left(N^{\perp}\right)$是闭的, 因此 $\overline{N}\subseteq ^{\perp}\left(N^{\perp}\right)$.


> [!exercise] 6
> 设 $X,Y$ 是 Banach 空间，$T\in \mathcal{B}(X,Y)$，求证：
> 
> (1)
> $$
> N(T)={}^\perp R(T^*).
> $$
> 
> (2)
> $$
> N(T^*)=R(T)^\perp.
> $$
> 
> (3)
> $$
> N(T)^\perp\supset \overline{R(T^*)}.
> $$
> 
> (4)
> $$
> {}^\perp N(T^*)=\overline{R(T)}.
> $$

> [!proof] Proof: 
> $T^{*}\in \mathcal{B}\left(Y^{*},X^{*}\right)$
> $$ \left< \varphi  ,Tx \right>= \left< T^{*}\varphi , x  \right>,\quad \forall x\in X, \varphi \in Y^{*}$$ 
> 1. 
> $$ \begin{aligned} N\left(T\right)&= \left\{ x \in X: Tx= 0 \right\}\\&= \left\{ x\in X: \left< \varphi ,Tx \right>= 0, \forall \varphi \in Y^{*} \right\} \\&= \left\{ x\in X: \left< T^{*}\varphi ,x \right>= 0, \forall \varphi \in Y^{*} \right\}\\&= \left\{ x\in X: x\in ^{\perp}R\left(T^{*}\right)  \right\}\\&= ^{\perp}R\left(T^{*}\right)\end{aligned} $$ 
> 2. 
>   $$ \begin{aligned} N\left(T^{*}\right)&= \left\{ \varphi \in X^{*}: T^{*}\varphi = 0 \right\}\\&= \left\{ \varphi \in X^{*}:\left< T^{*}\varphi , x \right>= 0, \forall x\in X \right\} \\&= \left\{ \varphi \in X^{*}:\left< \varphi , Tx \right>= 0, \forall x\in X \right\}\\&= \left\{ \varphi \in X^{*}: \left< \varphi , y \right>= 0, \forall y\in R\left(T\right) \right\}\\&= R\left(T\right)^{\perp}\end{aligned} $$ 
> 3. 由于$N\left(T\right)^{\perp}$是闭的, 只需要证明 $R\left(T^{*}\right)\subseteq N\left(T\right)^{\perp}$
>    任取 $\varphi \in Y^{*}$,  则
>    $$ \left< T^{*}\varphi ,x \right>= \left< \varphi , Tx \right>= \left< \varphi ,0 \right>= 0, \forall x\in N\left(T\right) $$ 
>    因此
>    $$ T^{*}\varphi \in N\left(T\right)^{\perp} $$ 
>    这表明$R\left(T^{*}\right)\subseteq N\left(T\right)^{\perp}$
>
> 4. 任取$x\in X$, 则对于任意的 $f\in N\left(T^{*}\right)$, 我们有
>    $$ \left< f, Tx \right>= \left< T^{*}f, x \right>= \left< 0,x \right>= 0 $$ 
>    因此$Tx \in ^{\perp}N\left(T^{*}\right)$,  故$R\left(T\right)\subseteq ^{\perp}N\left(T^{*}\right)$. 由Exercise 5中的Lemma, $^{\perp}N\left(T^{*}\right)$是闭的, 因此$\overline{R\left(T\right)}\subseteq ^{\perp}N\left(T^{*}\right)$. 
>    反过来, 若$y_0\not \in \overline{R\left(T\right)}$,  则由Hahn-Banach分离定理, 存在$f\in Y^{*}$, 使得
>    $$ f|_{\overline{R\left(T\right)}= 0},\quad  f\left(y_0\right)= 1,\quad \left\| f \right\|= 1$$ 
>    则 $f \in R\left(T\right)^{\perp}= N\left(T^{*}\right)$, 但是$y_0\not \in ^{\perp}\left(\left\{ f \right\}\right)$, 于是$y_0\not \in ^{\perp}\left(N\left(T^{*}\right)\right)$. 这就说明了$^{\perp}\left(N\left(T^{*}\right)\right)\subseteq \overline{R\left(T\right)}$

> [!exercise] 7
> 设 $X$ 是 Banach 空间，$A\in C(X)$，$T=I-A$，求证：
> 
> (1)
> $$
> \forall [x]\in X/N(T),\ \exists x_0\in [x],
> $$
> 使得
> $$
> \|x_0\|=\|[x]\|.
> $$
> 
> (2) 若 $y\in X$ 使方程 $Tx=y$ 有解，则其中必有一个解达到范数最小。


> [!proof] Proof:
> 1. 由于$T$是有界算子, $N\left(T\right)$是$X$的闭子空间. 
>    
>    $$ \left\| \left[ x \right] \right\|= \inf _{z\in N\left(T\right)}\left\| x-z \right\| = \inf _{u\in \left[ x \right]}\left\| u \right\|$$ 
>    取序列$\left\{ x_{n} \right\}\subseteq \left[ x \right]$, 使得
>    $$ \lim_{n\to \infty}\left\| x_{n} \right\|= \left\| \left[ x \right] \right\| $$ 
>    
>    由于$\left\{ x_{n} \right\}$是有界点列, $A$是紧算子, 存在子列$\left\{ x_{n_{k}} \right\}$, 使得
>    $$ \lim_{k\to \infty}Ax_{n_{k}}= u \in X $$ 
>    又
>    $$ \left(x-x_{n_{k}}\right)\in N\left(T\right) $$ 
>    我们有
>    $$ T\left(x-x_{n_{k}}\right) = 0,\quad Tx_{n_{k}}= Tx=:y_0$$ 
>    为常值.
>    因此
>    $$ \left(I-A\right)x_{n_{k}}= y_0\implies x_{n_{k}}-A x_{n_{k}}= y_0$$ 
>    
>    $$ x_{n_{k}}= Ax_{n_{k}} + y_0$$ 
>    令$k\to \infty$, 得到
>    $$ \lim_{k\to \infty}x_{n_{k}}= u + y_0 = :x_0$$ 
>    由于$\left[ x \right]$闭, 我们得到
>    $$ x_0\in \left[ x \right]$$ 
>    于是
>    $$ \left\| x_0 \right\|= \lim_{k\to \infty}\left\| x_{n_{k}} \right\| = \left\| \left[ x \right] \right\|$$ 
> 2. 若$x_1$是$Tx= y$的一个解, 则解集
>    $$ S= \left\{ x: Tx= y \right\}= x_1+ N\left(T\right) = \left[ x_1 \right]$$ 
>    是$X/N\left(T\right)$中的一个元素. 由1. 存在$x_0\in \left[ x_1 \right]$, 使得
>    $$ \left\| x_0 \right\|= \left\| \left[ x_1 \right] \right\|= \inf _{x\in S} \left\| x \right\|$$ 
>    $x_0$是范数最小的一个解.
