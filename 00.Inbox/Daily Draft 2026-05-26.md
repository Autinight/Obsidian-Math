### 10:39


紧算子

作为有限维空间中的算子的替代

把线性代数方程的可解性推广到紧算子的线性方程, Riesz-Fredholm理论

连续核的线性积分方程的可解性.


## 紧算子的定义和基本性质

$\mathscr{X},\mathscr{Y}$是Banach空间, $A: \mathscr{X}\to \mathscr{Y}$是线性的. 

$B_1$是$\mathscr{X}$中的单位球. 

紧算子就是把集合映到预紧集, precompact. 闭包是紧的. 

紧算子就是把球映到预紧集

紧算子记作
$\mathfrak{C}\left(\mathscr{X}, \mathscr{Y}\right)$

如果$A\in \mathfrak{C}\left(\mathscr{X},\mathscr{Y}\right)$, 把有界集映到预紧集, 因为有界集落在闭球里面, 从而像的闭包是紧集的闭子集

单列描述, $\left\{ x_{n} \right\}$点列的像列$\left\{ Ax_{n} \right\}$有收敛的子列(不必收敛到像, 因为我们取的是闭包).

1. 紧线性算子是有界线性算子, 紧算子是有界的. 
   若$\left\{A x_{n} \right\}$无界, 则存在序列$\left(x_{n}\right)\subseteq X$, $\left\| x_{n} \right\|= 1$, 
   $$ \left\| Tx_{n} \right\|\to \infty $$
   于是对于$x\in S^{1}$, 
   $$ \left\| Tx \right\| \le M= \sup _{x\in \overline{A\left(B_{1}\right)}} \left\| Tx \right\|< \infty$$ 
   特别地, 于是
    $$ \left\| Ty \right\|\le M\left\| y \right\| $$ 

2. 紧算子的线性组合也是紧的
3. 紧算子是有界算子的闭子空间
    我们证明紧算子列的极限是紧算子.
    用有限$\varepsilon$-网来容错, 算子范数有一个接近, 有限$\varepsilon$-网有一个容错,  通过取过程算子$T_{n}$的有限网, 和非常接近的过程, 使得$T$的像被$T_{n}$的像$\varepsilon$-地捕获, 又被网捕获, 所以$T$被网捕获.
4. 紧算子在闭子空间上的限制也是进算在.把闭的线性子空间理解成子Banach空间.

预列紧集意味着有限$\frac{1}{n}$-网意味着可分

$A\left(B_1\right)$预列紧所以

算子的复合, 只要有一个是紧的 , 就是紧的.

连续算子把有界集应为有界集, 把紧集


如果$A$是紧的, 则$A$把有界集应为紧集, $B$把紧集应为紧集.

如果$B$是紧的, 则$A$把有界集应为有界集, $B$把有界集应为紧集.

所以我们就是当成紧算子就是把有界集应为紧集.

什么是全连续的,就是弱收敛通过$A$变成强收敛.