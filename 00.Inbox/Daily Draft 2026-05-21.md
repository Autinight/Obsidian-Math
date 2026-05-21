### 10:00


什么是弱收敛?


$X$, 赋范空间. $x_0,x_{n}\in X$

$f\in X^{*}$, 
$$ f\left(x_{n}\right) \to f\left(x_0\right)$$, 

弱的意思是, 用每个$f$去测量, 看起来都是收敛的.

唯一性, 如果
$x_{n}\xrightarrow{w}x_0$, $x_{n}\xrightarrow{w} y_0$. 啧

$$ f\left(x_{n}\right)\to f\left(x_0\right) ,\quad f\left(x_{n}\right)\to f\left(y_0\right)\implies f\left(x_0\right)= f\left(y_0\right)$$
对于任意的$f$, Han-Banach定理, 如果$x$不是零, 那么至少存在$f$在上面不是零. 因此$x_0= y_0$ 

如果$x_{n}$弱收敛, 那么范数有界.


$$ f\in X^{*} $$ 

$$ \left\{ f\left(x_{n}\right) \right\} $$ 
收敛
$\left\{ x_{n}\left(f\right) \right\}$
收敛.由Banach-Steinhause, 逐点有界导出一致有界.

如果强收敛, 则一定弱收敛, 如果
$$ \left\| x_{n} -x_0\right\|\to 0 $$ 
那么
$$ f\left(x_{n}-x_0\right)= \left(x_{n}-x_0\right)\left(f\right) $$ 
范数趋于零, 所以
$$ \lim_{n\to \infty}\left(x_{n}-x_0\right)\left(f\right)= 0 $$ 
这里使用
$$ \left| f\left(x_{n}\right)-x_0 \right|\le \left\| f \right\|\left\| x_{n}-x_0 \right\|  $$ 

那么弱收敛但不是强收敛的例子呢

$\ell ^{2}$空间, $x_{n}=e_{n}$, 

对于每个$f\in \left(\ell ^{2}\right)^{*}$, 存在$\left\{ \xi _{k} \right\}\in \ell ^{2}$
使得
利用$\ell ^{2}$的自对偶
$$ f\left(e_{n}\right) =  \xi _{n} $$ 
$\xi _{n}\to 0$是容易看到的, 因为
$$ \sum \left| \xi _{n} \right|^{2}\to 0  $$ 
所以收敛.

$\ell ^{2}$-收敛

$$ \sum _{n}\left| \xi _{n} \right|^{2}< \infty\implies \xi _{n}\to 0  $$ 
所以$f$是弱收敛的. 

所以思维是这样的, 我们先想到点列空间这个东西, 然后找最简单的那一组基$e_1,\cdots e_{n}$什么的. 然后把$f$看成是一个对偶元素, 这样就能自然的作用到基上, 那么只有让那个系数列是收敛的就行了, 这就是弱收敛了. 那为什么不是强收敛呢, 当$n \neq m$时,
$$ \left\| x_{n}-xim \right\| $$ 
由于是范数, 衡量了每一个位置的距离, 所以一定不是收敛的.

也就是说, 最终总有一个距离, 那么就不是强收敛的, 但是这种距离在所以的算子下, 算子是固定的, 他们是短视的, 线性算子是短视的, 所以在弱收敛的意义下可以逃脱他们的眼睛, 但是范数是上帝视角, 它看出来一切的不同.

#### 连续函数空间上的弱收敛.

如果$x_{n}$弱收敛与$x_0$, 当且仅当$\left\{ \left\| x_{n} \right\| \right\}$有界, $\left\{ x_{n} \left(t\right)\right\}$在$\left[ a,b \right]$上逐点收敛.

如果是弱收敛, 立即得到$\left\{ \left\| x _{n} \right\| \right\}$有界, 回忆一下, 这是因为我们把看成逐点收敛的对偶.   然后由BS定理就可以了/

然后怎么说明逐点收敛, 这个我想有一个线性算子, 能提取所有的点就可以了,定义

$$ f_{t_0}^{*}\left(x\right)= x\left(t_0\right) $$ 
大概是这样的算子.

那么这个到底是不是$C\left[ a,b \right]$上的算子呢,.要么直接说明, 要么说明$x\left(t_0\right)$是在某有界变差函数诱导的测度的积分.

先试试直接来说明, 我们说明范数有界, 也就是说

$$ \left\| f_{t_0}\left(x\right) \right\|= x\left(t_0\right)\le \left\| x \right\|_{\infty} $$ 
于是
$$ \left\| f_{t_0} \right\|\le 1 $$ 
这是在如果$f_{t_0}$是线性泛函的前提下, 欧盟文看到$f_{t_0}$显然是一个线性泛函. 所以

$$ \lim_{n\to \infty}x_{n}\left(t_0\right)= \lim_{n\to \infty}f_{t_0}\left(x_{n}\right) = f_{t_0}\left(x_0\right)= x_0\left(t_0\right)$$ 
这是因为弱收敛. 所以这就看出来逐点收敛.


难点是说怎么犯过来, 关键容易明确是通过$\left\{ x_{n}\left(t\right) \right\}$
导出的, 大概是逐点收敛是某种原子之类的.

在上面这样一族$f_{t_0}$这样的线性泛函下, $x_{n}$是收敛的, 所以$f_{t_0}$配合有界性能不能生成所有有界线性泛函. 看来我们需要让他生成$V_0\left[ a,b \right]$
先把$f_{t_0}$写成积分, 

$$ f_{t_0}\left(x\right)= \int  _{a}^{b}x\left(t\right)\chi _{t_0}\left(t\right)\,d y $$ 

任取$f\in C\left[ a,b \right]$, 则存在有界变差函数$\nu \left(t\right)$
使得

$$ f\left(x_{n}\right)= \int _{a}^{b}x_{n}\left(t\right)d\nu \left(t\right) $$ 
一旦说明控制收敛定理, 我们就有

$$ f\left(x_{n}\right)\to f\left(x\right)$$ 
所以根本就不是什么生成呢, 就是把线性泛函写成积分这样的显式表达就可以了.

所以生成显然是把问题像复杂了. 有DCT 就可以了.
$C\left[ a,b \right]$有这样的条件, 主要是因为对偶就是好的.

#### $L^{p}$弱收敛

$\left\{ x_{n} \right\}$弱收敛于$x_0$, 当且仅当$\left\| x_{n} \right\|$有界, 并且对于$t$
$$ \int _{a}^{t}x_{n}\left(\tau \right)d\tau \to \int _{a}^{t}x_0\left(\tau \right)d\tau  $$ 
来看看这个神奇的条件是什么

看起来就像是

$$ \int _{a}^{b}\chi _{t}\left(\tau \right)x_{n}\left(\tau \right)d\tau  $$ 

这个应该就是生成了, 如果$L^{p}$收敛, 则对于由于$\chi _{t}\in L^{q}$的, 所以$\chi _{t}$给出一个有限集线性泛函$f_{t}$, 使得
$$ f_{t}\left(x_{n}\right)= \int _{a}^{t}x_{n}\left(\tau \right)d\tau  \to f_{t}\left(x\right)= \int _{a}^{t}x_0\left(\tau \right)d\tau $$ 

犯过来, 任取$f\in \left(L^{p}\right)^{*} $ , 存在$y\in L^{q}$, 使得
$$ f\left(x\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t $$ 

找到阶梯函数$\varphi _{m}$, 使得$\left\| \varphi _{m}\varphi -y \right\|\to 0$, $\varphi _{m}\to y$a.e.
$\left\| \varphi _{m} \right\|\le 2\left\| y \right\|$
于是由控制收敛定理
$$ f\left(x\right)= \lim_{n\to \infty}\int _{a}^{b}\varphi _{m}y\left(t\right)\,d t= \int _{a}^{b}x_0\left(\tau \right)d\tau $$ 

Schur

在$\ell ^{1}$中, 点列收强收敛于弱收敛等价.

我们说明弱收敛能导出强收敛, 因为$\ell ^{1}$是对偶, 如果弱收敛, 那么
