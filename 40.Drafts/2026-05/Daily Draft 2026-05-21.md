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

证明如果$x_{n}\xrightarrow{w} 0$, 则, $\left\| x_{n} \right\|\to 0$

我们用的是

$$ f_{k}\left(x\right)= \xi  $$ 

$$ x= \left\{ \xi _{k} \right\} $$ 


定义
$$ f_{k}\left(x\right)= \xi _{k} $$ 
提取第$k$个, 
$\ell ^{1}\simeq \ell ^{\infty}$
对于$e_{n}\in \ell ^{\infty}$
定义$f_{k}= e_{k}^{*}$, 
$$ f_{k}\left(x\right)= \xi _{k} $$ 


如果弱收敛,则对于任意的$f$, 都有
$$ \lim_{n\to \infty}f\left(x_{n}\right) = f\left(x\right)$$ 
对于$f= f_{k}$, 这是再说
$$ \lim_{n\to \infty}\xi _{k}^{\left(n\right)}= 0 $$ 

设$n_1= 1$, 则
$$ \sum _{k = 1}^{\infty}\left| \xi _{k}^{\left(n_1\right)} \right|=   $$ 

弱不收敛, 则存在子列$\left\{ x_{n_{k}} \right\}$
使得
$$ \lim_{k\to \infty}\left\| x_{n_{k}} \right\|= l $$ 
$\ell ^{1}$点列是有界的, 所以任意子列是收敛的, 那么不收敛于零, 当且仅当存在其他的收敛点. 
因为如果收敛当且仅当任意子列收敛到零,

犯过来, 存在不收敛与零的子列, 但是任意子列都收敛, 所以存在收敛到非零值的子列, 记作$x_{n}$

可以假设
$\left\{ x_{n} \right\}\in \ell ^{1}$, $\left\| x_{n} \right\|= 1$, 
$$ x_{n}\xrightarrow{w}0  $$ 
这是如果不强收敛, 但是弱收敛给出的情况.



$$ \sum _{ k = 1}^{\infty}\left| \xi _{k}^{\left(n_1\right)} \right| = \left\| x_{n-1} \right\|= 1 $$ 

存在$p_1> 0$, 使得
$$ \sum _{k = 1}^{p_1}\left| \xi _{k}^{\left(n_1\right)} \right| > \frac{3 }{4 } $$ 

3.6.3, 固定位置的不同点的分量趋于零.

如果选取了$p_{s}$对$n_{s}$个点列的分割, 使得前面小于$\frac{1}{4}$, 后面大于$\frac{3}{4}$, 前面一些部分在$n_{j}$很大的时候是趋于零的, 所以前半部分可以很小, 相对与上一个记录的分点很小.
上个切割部分切掉小于$\frac{1}{4}$的部分, 剩下的部分大于$\frac{3}{4}$, 可以再切出来一块大于$\frac{3}{4}$的部分.

$$ \sum _{k= 1}^{p_{s}-1}\left| \xi _{k}^{\left(n_{s}\right)} \right| < \frac{1 }{4 } $$ 
充分远,使得前序切断小于$\frac{1}{4}$, 

没切太多, 使得后续剩余大于$\frac{3}{4}$.

然后甩尾, 使得中间分割大于$\frac{3}{4}$.

落在两次切割点的中间的$k$, 定义
$$ \eta _{k}= \operatorname{sgn}\xi _{k}^{\left(n_{s}\right)} $$ 
则$\left\{ \eta _{k} \right\}\in \ell ^{\infty}$
这是显然的, 构造了这样一个线性泛函$f_0$, 使得
$$ f_0\left(x\right)= \sum _{ k = 1}^{\infty}\eta _{k}\xi _{k} $$ 


现在来看这个构造的威力, 估计$f_0\left(x_{n_{s}}\right)$


$$ \begin{aligned} \left| f_0\left(x_{n_{s}}\right) \right| &= \left| \sum _{k = 1}^{\infty}\eta _{k}\xi _{k}^{\left(n_{k}\right)} \right|\\&\ge  \left| \text{前序割点与当且割点中间} \right|- 前序割点前半-后续割点后半\\\ge \text{中间的长度和}-前序前半-当前后半\\= 2 \text{中间}-\left\| x_{n_{s}} \right\|  \end{aligned}  $$ 
于是
$$ f_0\left(x_{n_{s}}\right)>  $$ 
仍然是一个神奇的对角线



可能有些想法了. 

我们证明如果不是强收敛, 那么最终仍然有一个统一的质量$l$.

让最后趋于1,  然后若收敛. 

$$ f\left(x_{n_{k}}\right) = \left\| x_{n_{k}} \right\|f\left(\frac{x_{n_{k}} }{\left\| x_{n_{k}} \right\| }\right)$$ 

由于质量最后差不多都是1, 修剪一下并不影响$f$的最终观测.

我们找到了一个质量总是$1$, 并且弱收敛的家伙. 

但是如果是弱收敛的, 特别地, 我们在每一个分量处观测, 质量是最终消失的, 但是不会立即消失, 可能在某些部分占了大部分.

由于每个点列, 总体质量是恒定的$1$, 但是随着进程的推进, 固定点位的质量会逐渐消失, 这可能意味着, 进程越推进, 质量越集中在后半.

我们来做质量的隔断, 让观测者$f_0$集中观测某个进程中的大部分的质量.

如果我们已经在一段位置上提取了一个进程的大部分质量, 那么那么我们必须推进进程, 使得这段进程的质量全都集中在后面, 不会与已经提取部分重叠, 这样我们重新将3/4的质量集中在了还没提取的部分. 然后我们利用级数的收敛性, 质量在尾部是消失的, 所以我们贪婪地汲取大于$\frac{3}{4}$的质量, 那么这个进程的质量就被完了, 此时我们锚定了一部分位置的观测. 然后重复这个部分, 每次吸干前一个进程, 我们就推进新的进程, 让后一个进程的大部分还落在我们没动用的空间, 在动员空间吸收这个进程的几乎所有质量, 然后继续寻找下一个进程, 依次类推, 我们找到了一列进程, 使得每个进程的3/4都被我们观测了. 此时, 对于这个观测者在这一列进程中的任意一个进程上, 我们在上面的观测, 先拿出观测到的质量, 然后抛掉两边的零碎, 而两边的零碎, 实际上是$\left\| x_{n_{s}} \right\|$的所有质量抛掉另一部分大质量. 这预示着我们直接观测了两份大质量, 但是只丢掉了一份$\left\| x_{n_{s}} \right\|= 1$, 我们总能观测到一个固定质量! 但是弱收敛是说, 每个观测者最终都观测不到质量.