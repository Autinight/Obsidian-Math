代靖涵 25120222201319

### Section 1.1
> [!exercise] Exercise: 
> 设$\Omega$是可列集, $\mathcal{F}$是$\Omega$的所有有限子集及它们的余集所成的族. 证明$\mathcal{F}$不是$\sigma$代数, 然而$\mathcal{F}$对于有限次的集运算(交, 并, 差, 余)封闭(这样的非空的集族叫做代数).

> [!proof] Proof: 
> 设
> $$
> \Omega = \left\{ a_1,a_2,\cdots  \right\} 
> $$
> 根据定义, 每个单点集$\left\{ a_{i} \right\}$属于$\mathcal{F}$, 我们考虑这之中下标为偶数的$\left\{ a_{2k} \right\}$$\left(k= 1,2,\cdots \right)$.
> 令
> $$
> A= \bigcup _{k= 1}^{\infty}\left\{ a_{2k} \right\} 
> $$
> 它本身不是$\mathcal{F}$的有限子集, 且它的余集$A^{c}= \bigcup _{k= 1}^{\infty}\left\{ a_{2k+ 1} \right\}$也不是$\mathcal{F}$的有限子集, 因此$A$不在$\mathcal{F}$中, 故而$\mathcal{F}$不是$\sigma$代数.
> 
> 为了说明$\mathcal{F}$对于有限次集运算封闭, 我们任取$E,F\in \mathcal{F}$.  则$E,E^{c}$有一个是有限的, $F,F^{c}$有一个是有限的.
> 1. 若$E,F$有限, 则易见它们的交、并、差: $E\cap F, E\cup F$, $E \setminus F$均有限, 又$\mathcal{F}$对补封闭, 因此$E,F$的交并差补均在$\mathcal{F}$中.
> 2. 若$E,F$其中一个是有限的, 另一个是无限的, 不妨设$E$有限, 则$F^{c}$有限, 我们有$E\cap F= E\setminus F$是有限的, $\left(E\cup F\right)^{c}=E^{c}\cap F^{c}\subseteq F^{c}$是有限的. $E\setminus F\subseteq E$有限. 因此$E,F$的交、并、差要么有限, 要么余集有限, 故而它们的交并差补均在$\mathcal{F}$中.
> 3. 若$E,F$均无限, 则$E^{c}, F^{c}$是有限的, 此时$\left(E\cap F\right)^{c}= E^{c}\cup F^{c}$, $\left(E\cup F\right)^{c}= E^{c}\cap F^{c}$, $E\setminus F= E\cap F^{c}$均有限, 同样的$E,F$的交、并、差要么有限, 要么余集有限.
> 
> 综上可知$\mathcal{F}$是一个代数, 但是不是一个$\sigma$-代数.

> [!exercise] Exercise: 
> 设$\mu$设定义在$\sigma$代数$\mathcal{A}$上的非负的有限可加集函数(即$A,B\in \mathcal{A}, A\cap B= \varnothing\implies \mu \left(A\cup B    \right)= \mu \left(A\right)+ \mu \left(B\right)$). 证明, 若$\left\{ A_{n} \right\}_{n =  1}^{\infty}$是$\mathcal{A}$的一个两两不交的集列, 则
> $$
> \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)\ge \sum _{n = 1}^{\infty}\mu \left(A_{n}\right) .
> $$
> 举出使上式中不等号成立的例子.

> [!proof] Proof: 
> 当$\mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)= \infty$时, 不等式显然成立, 下设$\mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)< \infty$.
> 
> 
> 由$\mu$的非负性和有限可加性: 
> $$
> \sum _{n = 1}^{m}\mu \left(A_{n}\right)= \mu \left(\bigcup _{n = 1}^{m}A_{n}\right)= \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)-\mu \left(\bigcup _{n = m+ 1}^{\infty}A_{n}\right)\le \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)< \infty 
> $$
> 故级数$\sum _{n = 1}^{\infty}\mu \left(A_{n}\right)$的部分和数列是单调有界的, 故而级数收敛.
> 再次由有限可加性
> $$
> \begin{aligned} \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)& = \mu \left(\bigcup _{n =  m+ 1}^{\infty}A_{n}\right)+ \mu \left(\bigcup _{n = 1}^{m}A_{n}\right) \\ &=  \mu \left(\bigcup _{n = m+ 1}^{\infty}A_{n}\right)+ \sum _{n = 1}^{m}\mu \left(A_{n}\right)\\&\ge \sum _{n = 1}^{m}\mu \left(A_{n}\right)\end{aligned}
> $$
> 令$m\to \infty$, 得到
> $$
> \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)\ge \sum _{n = 1 } ^{\infty} \mu \left(A_{n}\right) 
> $$
>
> 最后, 我们取
> $$
> \mathcal{A}= \mathcal{P}\left(\mathbb{N} \right) 
> $$
> 定义
> $$
> \mu \left(E\right)= \begin{cases} 0,& E\text{ 是有限集 }
>\\ \infty, &E \text{ 是无限集} \end{cases}  
> $$
> 令$A_{i}= \left\{ i \right\}$, 则
> $$
> \mu \left(\bigcup _{i= 1}^{\infty}A_{i}\right)= \infty,\quad \sum _{ i= 1}^{\infty}\mu \left(A_{i}\right)= 0 
> $$