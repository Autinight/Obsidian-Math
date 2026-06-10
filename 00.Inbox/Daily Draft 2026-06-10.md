### 09:55


> [!exercise] 3
> 设 $H$ 为 Hilbert 空间，$M$ 是 $H$ 的闭子空间。证明 $M$ 为 $H$ 上某个非零连续线性泛函的零空间，当且仅当 $M^\perp$ 是一维子空间。


反过来,若$M^{\perp}$是一维的子空间, 设
$$ M^{\perp}= \operatorname{span}\left\{ y \right\} $$ 
由于$M$是闭的线性子空间, 将$H$分解为
$$ H= M\oplus M^{\perp} $$ 

我们证明$M= \left(M^{\perp}\right)^{\perp}$

$$ \left< x,y \right>= 0 ,\quad \forall x\in M, y\in M^{\perp}\implies  x \in \left(M^{\perp}\right)^{\perp}, \forall x\in M $$ 

任取$z\in \left(M^{\perp}\right)^{\perp}$, 设$z=  z_{M}+ z_{M^{\perp}}$, 
则
$$ 0= \left(z,  z_{M^{\perp}}\right) = \left< z_{M}, z_{M^{\perp}} \right>+ \left\| z_{M^{\perp}} \right\|^{2}= \left\| z_{M^{\perp}} \right\|^{2}$$ 
得到$z_{M^{\perp}}= 0$. 因此$z= z_{m}\in M^{\perp}.$ 故$\left(M^{\perp}\right)^{\perp}= M$. 于是

$M= \operatorname{span}\left\{ y \right\}^{\perp}$.
定义
$$ f\left(x\right)= \left< y,x \right> $$ 
即可.



若$M$为连续线性泛函$f$的$\operatorname{ker}$. 根据定义, 存在$y\in H$, 使得
$$ f\left(x\right)= \left< y,x \right> $$ 
于是
$$ \operatorname{ker}f= \left\{ x\in H: \left< x,y \right>= 0 \right\}= \left\{ y \right\}^{\perp}= \operatorname{span}\left\{ y \right\}^{\perp} $$ 
于是
$$ M^{\perp}= \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp} $$ 

考虑$y$, 则由于
$$ \left< y,x \right>= 0, \forall x\in \operatorname{span}\left\{ y \right\}^{\perp}, \implies y \in \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp} $$ 
于是
$$ \operatorname{span}\left\{ y \right\}\subseteq \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp} $$ 

使得
$$ \left< z,x \right>= 0 ,\forall x\in \operatorname{span}\left\{ y \right\}^{\perp} $$
的$y$, 
询问是否有$z\in \operatorname{span}\left\{ y \right\}$, 设
$$ H= \operatorname{span}\left\{ y \right\} \oplus \left(\operatorname{span}\left\{ y \right\}\right)^{\perp}$$ 

$$ z= ky+  w $$ 

$$ \left< z,x \right>= 0, \forall x\in \operatorname{span}\left\{ y \right\}^{\perp} $$ 

$$ \left< ky+ w,x \right>= \left< w,x \right>= 0, \forall x\in \operatorname{span}\left\{ y \right\}^{\perp} $$ 

$w= 0$, 因此
$$ \left(\operatorname{span}\left\{ y \right\}^{\perp}\right)^{\perp}= \operatorname{span}\left\{  \right\} $$ 

若
$$ M= \operatorname{ker}f $$ 

$$ f:H\to \mathbb{R}  $$ 

是一个非零的有界线性泛函.


$$ H= M\oplus M^{\perp} $$ 

$$ H= \operatorname{ker}f\oplus \left(\operatorname{ker}f\right)^{\perp} $$ 


Take  $x\in \operatorname{ker}f$, 
if 
$z\in  \left(\operatorname{ker}f\right)^{\perp}= M^{\perp}$, we have 
$$ \left(z,x\right)= 0, \forall x\in M $$ 


$\left(\operatorname{ker}f\right)^{\perp}$是什么样的?

$$ \left< z, x \right>= 0, \forall f\left(x\right)= 0 $$ 
Riesz表示, 定理, 存在 $y$, 使得
$$ f\left(x\right)= \left< y,x \right>\implies \left< z,x \right>= \left< y,x \right>= 0,\quad \left< z-y, x \right>= 0, \forall x $$ 
$z= y$.




> [!exercise] 4
> 设 $T$ 是 Hilbert 空间 $H$ 上的线性算子且对所有 $x,y\in H$，
> $$
> (Tx,y)=(x,Ty).
> $$
> 证明 $T$ 是有界算子。

$T$是可逆算子吗

若
$$ \left(Tx_1,y\right)= \left< Tx_2,y \right>\implies \left(x_1-x_2, Ty\right)= 0 $$ 

$$ x_1-x_2\in R\left(T\right)^{\perp} $$ 

$$ \begin{aligned} \operatorname{ker}T&= \left\{ x: Tx= 0 \right\}= \left\{ x: \left< Tx,y \right>= 0, \forall y \right\}= \left\{ x: \left< x,Ty \right>= 0, \forall y \right\}\\&= x\in R\left(T\right)^{\perp} \end{aligned} $$ 

$$ \operatorname{ker}T= R\left(T\right)^{\perp} $$ 


闭算子定理, 证明
$$ G\left(T\right) = \left\{ \left(x, Tx\right): x \in H \right\}$$
是闭的,

设$x_{n}\to x_0$, $Tx_{n}\to y$, 验证$Tx_0= y$.

$$ \left< y,z \right>= \lim_{n\to \infty}\left< Tx_{n},z \right>= \lim_{n\to \infty}\left< x_{n},Tz \right>= \left< x_0, Tz \right>= \left< Tx_0,z \right> $$ 
于是$y= Tx_0$.



若$T$是无界算子, 存在一列$\left\{ x_{n} \right\}\in H$, 使得$\left\| x_{n} \right\|= 1$, 并且 $\left\| Tx_{n} \right\|\ge n$.

$$ \left< Tx_{n},y \right> = \left< x_{n},Ty \right>$$

$$ \left\| Tx_{n} \right\|^{2}= \left< x_{n}, T Tx_{n} \right> \ge n^{2}$$ 

存在$f_{y}$, 使得
$$ \left< x, Ty \right>= f\left(x\right)= \left(Tx,y\right) , \forall x$$ 

$$ \left< Tx,y \right> \le \left\| f \right\|\left\| x \right\|$$ 

$T$是自对偶的.

对于任意的
$$ x\mapsto Tx\mapsto \left< Tx,y \right>= \left< x,Ty \right> $$ 

$$ x\mapsto Tx\mapsto \left< Tx,y \right>= \left< x,Ty \right> = f\left(x\right)$$ 

存在$f$, 使得
$$ f\left(z\right) = \left(z,x\right)$$ 
存在$g$, 使得
$$ g\left(w\right)= \left(w, Ty\right) $$ 


$$ x \xrightarrow{T} Tx \xrightarrow{f}= \left< Tx,y \right>= \left< X,Ty \right>= g\left(x\right)   $$ 

于是
$$ f\circ T= g $$ 

$$ \left\| g \right\|< \infty $$ 
我们有
$$ \left\| f \circ T \right\|< \infty $$ 

$$ \left< Tx, Tx \right>= \left< x, T^{2}x \right>\le \left\| x \right\|\left\| T \right\|^{2}\left\| x \right\| $$ 

$$ \left\| Tx \right\|^{2}\le \left\| T \right\|^{2}\left\| x \right\|^{2} $$ 


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


我们证明
$$ N\subseteq ^{\perp}\left(N^{\perp}\right) $$ 

对于任意的 $f\in N$, 我们有

$$ \left< f,x \right>= 0, \forall x \in N^{\perp} $$ 
于是
$$ f\in ^{\perp}\left(N^{\perp}\right) $$

我们需要证明$^{\perp}\left(N^{\perp}\right)$是闭的.

$$ ^{\perp}\left(N^{\perp}\right)= \bigcap _{x\in M} \operatorname{ker}\hat{x} $$ 
其中
$$ \hat{x}\left(f\right)= f\left(x\right) $$ 

$$ \operatorname{ker}\hat{x}= \left\{ \hat{x}: f\left(x\right)= 0, \forall f \right\} $$ 


$$ \left(^{\perp}M\right)= \left\{ f\in X^{*}: \left< f,x \right>= 0, \forall x\in X \right\} $$ 


对于任意的$z\in \left(^{\perp}M\right)^{\perp}$, 和$f\in ^{\perp}M$, 我们有
$$ \left< f,z \right>= 0, \quad \forall z\in \left(^{\perp}M\right)^{\perp} $$ 

任取$x\in M$, 我们有
$$ \left< f, x \right>= 0, \forall f \in ^{\perp}M $$ 
这说明
$$ x\in \left(^{\perp}M\right)^{\perp} $$ 
因此
$$ M\subseteq \left(^{\perp}M\right)^{\perp} $$ 
又$\left(^{\perp}M\right)^{\perp}$是闭的, 我们有
$$ \overline{M}\subseteq \left(^{\perp}M\right)^{\perp} $$ 

若$x_0\not \in \overline{M}$, 则由Hahn-Banach分离定理, 存在$f$, 使得

$$ f|_{\overline{M}} = 0, \quad f\left(x_0\right)= 1,\quad \left\| f \right\|= 1$$ 
则
$$ f\in ^{\perp}M $$ 
但是
$$ x_0\not \in \left(^{\perp}M\right)^{\perp} $$ 