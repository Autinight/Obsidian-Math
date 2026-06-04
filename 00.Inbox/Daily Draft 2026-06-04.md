### 09:12


> [!exercise] Exercise 10
> 设 $H$ 是 Hilbert 空间，$T:H\to \mathbb K^n$ 是一个满的有界线性算子，$\{e_i\}_{i=1}^n$ 是 $\mathbb K^n$ 的标准正交基。证明存在有限个线性无关的元 $\{y_1,y_2,\cdots,y_n\}\subset H$，使得
> $$
> T(x)=\sum_{i=1}^n \langle y_i,x\rangle e_i,\quad \forall x\in H.
> $$


$T$是满的有界线性算子, 任取

取$\left\{ e_{i} \right\}_{i= 1}^{n}$的一组基



$$ T\left(y_{i}\right) = \sum _{i = 1}^{n}\left< y_{i}, y_{i} \right>e_{i}$$ 

我们先找正交的

那么$T\left(y_{i}\right)= e_{i}$

由于$T$是满的, 存在$y_1,\cdots ,y_{n}$, 使得

$$ T\left(y_{i}\right) = e_{i}$$ 

Riesze表示定理是说, 对于任意的有界线性泛函$f\in H^{*}$, 存在
令
$$ f_{i}= \left< T\left(x\right) ,e_{i}\right> $$ 
则

$$ \left| f_{i}\left(x\right) \right| \le \left\| T\left(x\right) \right\|\left\| e_{i} \right\|\le \left\| T \right\|\left\| x \right\|\implies \left\| f_{i} \right\|\le \left\| T \right\| $$ 

于是$f_{i}$是有界线性泛函. 有Risze表示定理, 存在$y_{i}$, 使得
$$ f_{i}\left(x\right)= \left< y_{i},x \right> $$ 

于是
$$ T\left(x\right)= \left< y_1,x \right> e_1+ \cdots + \left< y_{n},x \right>e_{n}$$ 

我们来证明$y_1,\cdots ,y_{n}$是线性无关的.

设$k_1y_1+ \cdots + k_{n}y_{n}= 0$, 则


$$ \left< k_1f_1+ \cdots + k_{n}f_{n}, x \right>= 0 $$ 
由于$T$是满的线性算子, 

$$ \left< y_1,x \right> e_1+ \cdots + \left< y_{n},x \right>e_{n}$$ 
是满射.
存在$x_{n}$, 使得
$$ \left< y_1,x \right>e_1+ \cdots + \left< y_{n},x \right>e_{n}= e_{n} $$ 
此时
$$ \left< y_{n},x \right>= 1,\quad \left< y_{i},x \right>= 0 $$ 
存在$x_{i}$, 使得
$$ \left< y_{i},x_{i} \right> = 1,\quad \left< y_{i},x_{j} \right>= 0$$ 
若$k_1y_1+ \cdots + k_{n}y_{n}= 0$, 则
$$ k_1\left< y_1,x \right>+ k_2\left< y_{2},x \right>+ \cdots + k_{n}\left< y_{n},x \right>= 0 $$ 
取$x= x_{i}$, 得到
$$ k_{i}= 0 $$ 

> [!exercise] Exercise 12
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$T$ 是 $M$ 上的有界线性算子，证明在 $H$ 上存在一个有界线性算子 $\widetilde T$，使得在 $M$ 上 $\widetilde T$ 与 $T$ 相等并且
> $$
> \|\widetilde T\|\leq \|T\|_M.
> $$

$T$是$M$上的有界线性算子, $\widetilde{T}$是$H$上的有界线性算子.
这不就是Hahn-Banach?