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


若$T$是无界算子, 存在一列$\left\{ x_{n} \right\}\in H$, 使得$\left\| x_{n} \right\|= 1$, 并且 $\left\| Tx_{n} \right\|\ge n$.

$$ \left< Tx_{n},y \right> = \left< x_{n},Ty \right>$$

