---
type: homework
aliases:
technique: []
tags: []
---
代靖涵 25120222201319

# 1 

> [!exercise] Exercise 1.1
> 设$\Omega$是可列集, $\mathcal{F}$是$\Omega$的所有有限子集及它们的余集所成的族. 证明$\mathcal{F}$不是$\sigma$代数, 然而$\mathcal{F}$对于有限次的集运算(交, 并, 差, 余)封闭(这样的非空的集族叫做代数).
> ^exe-74c1bc

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

> [!exercise] Exercise 1.2
> 设$\mu$设定义在$\sigma$代数$\mathcal{A}$上的非负的有限可加集函数(即$A,B\in \mathcal{A}, A\cap B= \varnothing\implies \mu \left(A\cup B    \right)= \mu \left(A\right)+ \mu \left(B\right)$). 证明, 若$\left\{ A_{n} \right\}_{n =  1}^{\infty}$是$\mathcal{A}$的一个两两不交的集列, 则
> $$
> \mu \left(\bigcup _{n = 1}^{\infty}A_{n}\right)\ge \sum _{n = 1}^{\infty}\mu \left(A_{n}\right) .
> $$
> 举出使上式中不等号成立的例子.
> ^exe-639329

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

# 2 

> [!exercise] Exercise 2.1
> 设$\left(X,\mathcal{A},\mu \right)$是完全的测度空间, 证明: 若$f$可测且$f= g$ $\mu$- a.e., 则$g$也可测, 如果$L\left(X,\mathcal{A},\mu \right)$不完全, 此事正确否? 请举例.

> [!proof] 
> 
> 存在一个零测集$E$, 使得在$E^{c}$上, $f|_{E^{c}}= g|_{E^{c}}$.
> 
> 于是对于任意的$a\in \mathbb{R}$, 
> $$
> \begin{aligned} \left\{ x\in X: g\left(x\right)> a \right\}&= \left\{ x\in E: g\left(x\right)> a \right\}\cup \left\{ x\in E^{c} : g\left(x\right)> a\right\}\\&= \left\{ x\in E: g\left(x\right)> a \right\} \cup  \left\{ x\in E^{c}: f\left(x\right)> a \right\} \end{aligned}
> $$
> 
> 其中由于$f$可测, $\left\{ x\in E^{c}: f\left(x\right)> a \right\}$是可测集, 又$\left(X,\mathcal{A},\mu \right)$是完备的, 可知$\left\{ x\in E: g\left(x\right)> a \right\}$作为零测集$E$的子集也是零测的. 于是$\left\{ x\in X: g\left(x\right)> a \right\}$是可测集. 这表明$g$是可测的. 
> 
> 若$L\left(X, \mathcal{A},\mu \right)$不完全, 则不一定正确, 考虑
> $$
> X =  \left\{ 1,2,3\right\}, \quad \mathcal{A}= \left\{ \varnothing, X, \left\{ 1,2 \right\}, \left\{ 3 \right\} \right\} 
> $$
> 定义
> $$
> \mu  \left(E\right)= \begin{cases} 0, & 3\not \in E\\ 1, & 3\in E \end{cases} 
> $$
> 此时, 考虑$X$上的函数$f\equiv 0$以及$g$, $g\left(1\right)= 1, g\left(2\right)= 2, g\left(3\right)= 0$. 则$f,g$在零测集$\left\{ 1,2 \right\}$之外相等.
> 但是
> $$
> \left\{ x\in E: g\left(x\right)> 1 \right\}= \left\{ 2 \right\} 
> $$
> 不是一个可测集, 故结论对于不完全的测度空间不是正确的.

# 3

> [!exercise] Exercise 3.1
> 设$f\in L^{\infty}\left(X,\mathscr{A},\mu \right)$, 证明
> $$
> \left\| f \right\|_{\infty} =  \inf \left\{ \alpha > 0: \mu \left( \left\{ x\in X: \left| f\left(x\right) \right|> \alpha   \right\}\right) = 0\right\}
> $$

> [!proof] 
> 
> 根据定义
> $$
> \left\| f \right\|_{\infty}= \inf _{\mu \left(E\right)= 0} \sup \left\{ \left| f\left(x\right) \right|: x\in X\setminus E  \right\}= \inf _{\mu \left(E\right)= 0}\sup _{X\setminus E}\left| f \right| 
> $$
> 记
> 
> $$
> m= \inf \left\{ \alpha > 0: \mu \left(\left\{ x\in X:\left| f\left(x\right) \right|> \alpha   \right\}\right)= 0 \right\} 
> $$
> 
> 对于任意的$a> 0$, 记
> $$
> U_{a}= \left\{ x\in X: \left| f\left(x\right) \right|> a  \right\}
> $$
> 则此时
> $$
> m= \inf \left\{ \alpha > 0: \mu \left(U_{\alpha }\right) = 0\right\} 
> $$
> 
> 
> 任取$\alpha_0 > 0$使得$\mu \left(U_{\alpha_0 }\right)= 0$,  则在$X\setminus U_{\alpha_0 }$上, $\left| f\left(x\right) \right| \le \alpha_0$, 从而
> $$
> \sup \left\{ \left| f\left(x\right) \right|: x\in X\setminus U_{\alpha_0 }  \right\}\le \alpha_0  
> $$
> 由于$\alpha$是任取的, 可知
> $$
> m = \inf \left\{ \alpha > 0: \mu \left(U_{\alpha }\right) = 0\right\} \ge \sup _{X\setminus U_{\alpha _0 }}\left| f \right| 
> $$
> 又$\left\| f \right\|_{\infty}\le \sup _{X\setminus U_{\alpha_0 }}\left| f \right|$, 可知
> $$
> \left\| f \right\|_{\infty}\le m
> $$
> 
> 任取$\varepsilon > 0$, 我们有$\mu \left(U_{m-\varepsilon }\right)> 0$.
> 
> 任取$E$使得$\mu \left(E\right)= 0$. 断言$\sup _{X\setminus E}\left| f \right| > m-\varepsilon$, $U_{m-\varepsilon }\subseteq E$矛盾. 因此
> $$
> \left\| f \right\|_{\infty}= \inf _{\mu \left(E\right)= 0}\sup _{X\setminus E} \left| f \right|\ge m-\varepsilon  
> $$
> 令$\varepsilon \to 0^{+ }$, 得到
> $$
> \left\| f\right\|_{\infty}\ge m 
> $$



> [!exercise] Exercise 3.2
> 设$f\in L^{p}\left(X,\mathscr{A},\mu \right)$对一切$p\in \left[ 1,\infty \right)$成立, 则
> $$
> \left\| f \right\|_{\infty} = \lim_{p\to \infty}\left\| f \right\|_{p}.
> $$

> [!proof] 
> 
> 当$\left\| f \right\|_{\infty}< \infty$时, 
> $$
> \left\{  \left| f\left(x\right) \right|> \left\| f \right\|_{\infty} \right\} = \bigcup _{n = 1}^{\infty}\left\{ \left| f\left(x\right) \right|> \left\| f \right\|_{\infty}+ \frac{1 }{n }  \right\}
> $$
> 由Exercise 3.1可知这是一个零测集.
> 于是
> $$
> \int _{X}\left| f\left(x\right) \right|^{p}\,d \mu \le  \left\| f \right\|_{\infty}^{p-1} \int _{X}\left| f\left(x\right) \right|\,d \mu = \left\| f \right\|_{\infty}^{p-1}\left\| f \right\|_{1}   
> $$
> 于是
> $$
> \left\| f \right\|^{p}\le \left\| f \right\|_{\infty}^{1-\frac{1 }{p }} \left\| f \right\|_{1}^{\frac{1}{p}} 
> $$
> 令$p\to \infty$, 得到
> $$
> \limsup_{p\to \infty}\left\| f \right\|^{p}\le  \left\| f \right\|_{\infty}
> $$
> 
> 另一方面, 任取$0< a< \left\| f \right\|_{\infty}$, 记$U_{a}= \left\{ x\in X: \left| f\left(x\right) \right|> a  \right\}$, 则$\mu \left(U_{a}\right)> 0$. 于是
> $$
> \int _{X}\left| f\left(x\right) \right|^{p}\,d \mu \ge \int _{U_{a}}\left| f\left(x\right) \right|^{p}\,d \mu \ge  \mu \left(U_{a}\right) a^{p}  
> $$
> 从而
> $$
> \left\| f \right\|_{p}\ge  \left(\mu \left(U_{a}\right)\right)^{\frac{1}{p}} a
> $$
> 领$p\to \infty$, 得到
> $$
> \liminf_{p\to \infty}\left\| f \right\|_{p} \ge  a 
> $$
> 再令$a\to \left\| f \right\|_{\infty}^{-}$, 得到
> $$
> \liminf_{p\to \infty}\left\| f \right\|_{p}\ge \left\| f \right\|_{\infty} 
> $$
> 
> 当$\left\| f \right\|_{\infty}= \infty$时, 可知对于任意的$M> 0$, 
> $$
> \mu \left(\left\{ x\in X: \left| f\left(x\right) \right|> M  \right\}\right)> 0
> $$
> 记
> $$
> E_{n}= \left\{ x\in X: \left| f\left(x\right) \right|> M  \right\} 
> $$
> 此时
> $$
> \left\| f \right\|_{p} \ge \left(\int _{E_{n}}\left| f\left(x\right) \right|^{p} \right)^{\frac{1}{p}}\ge  \left(\mu \left(E_{n}\right)\right)^{\frac{1}{p}}M
> $$
> 可知
> $$
> \liminf_{p\to \infty} \left\| f \right\|_{p}\ge M 
> $$
> 对于任意的$M> 0$成立, 必然有$\lim_{p\to \infty}\left\| f \right\|_{p}= \infty$.




> [!exercise] Exercise 3.3
> Vitali收敛定理: 设$p\in \left[ 1,\infty \right)$, $\left\{ f_{n} \right\}\subseteq L^{p}\left(X,\mathscr{A},\mu \right)$且$f_{n}\to f$, $f$ $\mu$- a.e. , 有限, 如果
> 1. $\forall  \varepsilon > 0$, $\exists A_{\varepsilon }\in \mathscr{A}, \mu \left(A_{\varepsilon }\right)< \infty$, 使
>   $$
>   \int _{X\setminus A_{\varepsilon }}\left| f_{n} \right| ^{p}d \mu < \varepsilon , \quad \forall n\in \mathbb{N} ; 
>   $$
> 2. 关于$n$一致成立着
>    $$
>    \lim_{\mu \left(E\right)\to 0}\int _{E}\left| f_{n} \right| ^{p}\,d \mu = 0, 
>    $$
>   那么$f\in L^{p}\left(X,\mathscr{A},\mu \right)$ 且$\lim_{n\to \infty}\left\| f-f_{n} \right\|_{p}= 0$.

> [!proof] 
>
> 任意取定$\varepsilon > 0$, 存在$A\in \mathscr{A}$, $\mu \left(A\right)< \infty$, 使得
> $$
> \int _{X\setminus A}\left| f_{n} \right|^{p}\,d \mu < \varepsilon ,\quad \forall n\in \mathbb{N}   
> $$
> 
> 由Fatou引理
> $$
> \int _{X\setminus A}\left| f \right|^{p}\,d \mu \le  \liminf_{n\to \infty} \int _{X\setminus A}  \left| f_{n} \right|^{p}\,d \mu  \le \varepsilon 
> $$
> 
> 
> 
> 
> 
> 由条件2., 存在$\delta > 0$, 
> $$
> \int _{E} \left| f_{n} \right|^{p}\,d \mu < \varepsilon ,\quad \forall \mu \left(E\right)< \delta  
> $$
> 
> 
> 
> 
> 由Egrov定理, 存在集合$E\subseteq A$, 满足$\mu \left(E\right)< \delta$, 使得在 $A\setminus E$上, $\left\{ f_{n} \right\}$一致收敛到$f$. 那么此时再由Fatou引理
> $$
> \int _{E}\left| f \right|^{p}\,d \mu \le \liminf_{n\to \infty}\int _{E}\left| f_{n} \right|^{p}\,d \mu  \le \varepsilon  
> $$
> 
> $$
> \begin{aligned} \int _{A\setminus E}\left| f \right|^{p}\,d \mu &=   \int _{A\setminus E}\left| f-f_{n} \right|^{p}\,d \mu +  \int  _{A\setminus E}\left| f_{n} \right|^{p}\,d \mu\\&\le  \mu \left(A\right) \sup _{A\setminus E}\left| f_{n}-f \right|^{p} +  \left\| f_{n} \right\|_{p}^{p}  \end{aligned}
> $$
> 
> 对于充分大的$n$, $\sup _{A\setminus E}\left| f_{n}-f \right|^{p}< \infty$, 于是
> $$
> \int _{X}\left| f \right|^{p}\,d \mu \le  \varepsilon + \varepsilon + \mu \left(A\right)\sup _{A\setminus E}\left| f_{n}-f \right|^{p}+ \left\| f_{n} \right\| _{p}^{p}< \infty  
> $$
> 
> 故$f\in L^{p}$.
> 
> 由不等式
> $$
> \left| f-f_{n} \right|^{p}\le  2^{p-1}\left(\left| f \right|^{p}+ \left| f_{n} \right|^{p}  \right)  
> $$
> 得到
> $$
> \int _{E}\left| f-f_{n} \right|^{p}\le 2^{p}\varepsilon   
> $$
> 并且
> $$
> \int _{A\setminus E}\left| f-f_{n} \right|^{p}\,d \mu \le  \mu \left(A\setminus E\right) \sup _{A\setminus E} \left| f_{n}-f \right|^{p} \le \mu \left(A\right)\sup _{A\setminus E} \left| f_{n}-f \right|^{p}   
> $$
> 于是
> $$
> \left\| f-f_{n} \right\|_{p}\le  \left(2^{p}\varepsilon +  \mu \left(A\right)\sup _{A\setminus E}\left| f_{n}-f \right|^{p} \right)^{\frac{1}{p}} 
> $$
> 令$n\to \infty$, 得到
> $$
> \limsup_{n\to \infty}\left\| f-f_{n} \right\|_{p}\le  2\varepsilon ^{\frac{1}{p}} 
> $$
> 最后, 由于$\varepsilon$是任取的, 令$\varepsilon \to 0^{+ }$, 得到
> $$
> \lim_{n\to \infty}\left\| f-f_{n} \right\|_{p}= 0 
> $$
>

# 4

> [!exercise] Exercise 4.1
> 设$\mu$是$\left(X, \mathscr{A}\right)$上的符号测度, $E\in \mathscr{A}$. 证明: $E$是$\mu$-零集的充要条件是$\left| \mu  \right|\left(E\right)= 0$.

> [!proof] 
> 
> 若$E$是$\mu$-零集, 则$\forall A\in \mathscr{A}$, $\mu \left(A\cap E\right)= 0$
> $$
> \mu ^{+ }\left(E\right)=  \sup _{A\in \mathscr{A}}\mu \left(A\cap E\right)  = \sup _{A\in \mathscr{A}}\left\{ 0 \right\}= 0
> $$
> $$
> \mu ^{-}\left(E\right)=\sup _{A\in \mathscr{A}} \left\{ -\mu \left(A\cap E\right) \right\}= \sup _{A\in \mathscr{A}}\left\{ 0 \right\}= 0
> $$
> 于是
> $$
> \left| \mu  \right|\left(E\right)= \mu ^{+ }\left(E\right)+ \mu ^{-}\left(E\right)= 0  
> $$
> 
> 反之, 若$\left| u \right|\left(E\right)= 0$, 则
> $$
> \mu ^{+ }\left(E\right)= \mu ^{-}\left(E\right)= 0,\quad \exists A\in \mathscr{A} 
> $$
> 即
> $$
> \sup _{A\in \mathscr{A}}\left\{ \mu \left(A\cap E\right) \right\}= \sup _{A\in \mathscr{A}}\left\{- \mu \left(A\cap E\right) \right\}= 0, 
> $$
> 这表明$\mu \left(A\cap E\right)\ge 0$且$\mu \left(A\cap E\right)\le 0$, $\forall A\in \mathscr{A}$.
> $$
> \mu \left(A\cap E\right) = 0, \forall A\in \mathscr{A}
> $$
> 由于$\left\{ A\cap E \right\}_{A\in \mathscr{A}}$取遍$E$的所有子集, 根据定义, $E$既是正集又是负集, 即$E$是零集.

> [!exercise] Exercise 4.2
> 设$\left(X,\mathscr{A}\right)$是可测空间, $\mu ,\nu$是它上面的两个符号测度,  证明: 
> 1. $\mu \ll \nu$且$\mu \perp \nu$的充要条件是$\mu = 0$;
> 2. $\mu \ll \nu \iff \mu ^{+ }\ll \nu , \mu ^{-}\ll \nu  \iff  \left| \mu  \right|\ll \nu$;
> 3. 集合$\left\{ \varphi : \varphi \text{是} \left(X,\mathscr{A}\right) \text{上的有限符号测度且}\varphi \ll \nu \right\}$与集合$\left\{ \varphi : \varphi \text{是} \left(X,\mathscr{A}\right) \text{上的有限符号测度且}\varphi \perp\nu \right\}$都是实线性空间.


> [!proof] 
> 1. 若$\mu = 0$, 则$\left| \mu  \right|= 0$. 此时对于任意的$A\in \mathscr{A}$, $\left| \mu  \right|\left(A\right)=0$成立, $\mu \ll \nu$自动满足. 此外, 由于$\nu \left(\varnothing\right)= 0$, $\left| \nu  \right|\left(\varnothing\right)= 0$, $\left| \mu  \right|\left(X\right)= 0$, 可知$\mu \perp \nu$.
>    
>    若$\mu \ll \nu$且$\mu \perp \nu$.  首先, 存在$A\in \mathscr{A}$, 使得
>    $$
>    \left| \mu  \right|\left(A\right)= 0, \quad \left| \nu  \right|\left(A^{c}\right)= 0   
>    $$
>    又由绝对连续, $\left| \mu  \right|\left(A^{c}\right)= 0$.
>    于是对于任意的$E\in \mathscr{A}$, 
>    $$
>    \left| \mu  \right|\left(E\right)= \left| \mu  \right|\left(E\cap A\right)+ \left| \mu  \right|\left(E\cap A^{c}\right)= 0    
>    $$
>    即$\left| \mu  \right|= 0$, 进而$\mu = 0$.
> 
> 2. 
>    若$\mu \ll \nu$, 则对于任意的$A\in \mathscr{A}$使得$\left| \nu  \right|\left(A\right)= 0$, 都有 $\mu \left(A\right)= 0$. 取$\left(X,\mathscr{A}, \mu \right)$的一个Hahn分解$\left(P,P^{c}\right)$. 
>    由$\left| \nu  \right|\left(A\right)= 0$, 可知$\left| \nu  \right|\left(A\cap P\right)= \left| \nu  \right|\left(A\cap P^{c}\right)= 0$. 于是由绝对连续性, $\mu \left(A\cap P\right)= \mu \left(A\cap P^{c}\right)= 0$, 故而 $\mu ^{+ }\left(A\right)= \mu ^{-}\left(A\right)= 0$. 这表明 $\mu ^{+ }\ll \nu$, $\mu ^{-}\ll \nu$.
>    
>    若$\mu ^{+ }\ll \nu, \mu ^{-}\ll \nu$. 任取$A\in \mathscr{A}$使得$\nu \left(A\right)= 0$, 我们有$\left| \mu  \right|\left(A\right)= \mu ^{+ }\left(A\right)+ \mu ^{-}\left(A\right)= 0$. 这表明$\left| \mu  \right|\ll \nu$.
>    
>    若$\left| \mu  \right|\ll \nu$. 任取$A\in \mathscr{A}$使得$\nu \left(A\right)= 0$. 我们有$\left| \mu  \right|\left(A\right)= \mu ^{+ }\left(A\right)+  \mu ^{-}\left(A\right)= 0$, 故而$\mu ^{+ }\left(A\right)= \mu ^{-}\left(A\right)= 0$, 得到$\mu \left(A\right)= \mu ^{+ }\left(A\right)-\mu ^{-}\left(A\right)= 0$, 这表明$\mu \ll \nu$.
> 3. 由1可知, $\mu = 0$属于两个集合, 取其为两个空间的零元.
>    若$\varphi ,\psi \ll \nu$, 则任取$A\in \mathscr{A}$满足$\nu \left(A\right)= 0$. 由于$\varphi, \psi$是有限的, 不难看出$\varphi + k\psi$是有限的符号测度, 并且
>    $$
>    \left(\varphi + k\psi \right)\left(A\right)= \varphi \left(A\right)+ k \psi \left(A\right)= 0 
>    $$
>    
>    若$\varphi ,\psi \perp \nu$, 则存在$A, B\in \mathscr{A}$, 使得
>    $$
>    \left| \varphi  \right|\left(A\right)= \left| \nu  \right|\left(A^{c}\right)= \left| \psi  \right|\left(B\right)= \left| \psi  \right|\left(B^{c}\right)= 0     
>    $$
>    
>    则
>    $$
>    \left| \nu  \right|  \left(A^{c}\cup B^{c} \right)= 0
>    $$
>    
>    $$
>    \left| \varphi + k\psi  \right|\left(A\cap B\right)\le \left| \varphi  \right|\left(A\cap B\right)+ \left| k \right|\left| \psi  \right|\left(A\cap B\right)= 0     
>    $$
>    因此$\varphi + k\psi \perp \nu$

> [!exercise] Exercise 4.3
> 设 $\nu$ 是可测空间 $(X,\mathcal A)$ 上的符号测度，证明：$\forall E\in\mathcal A$，
> $$
> |\nu|(E)=\sup\left\{
> \sum_{k=1}^{n}|\nu(E_k)|:
> E=\bigcup_{k=1}^{n}E_k,\ E_k\in\mathcal A,\
> E_k\cap E_j=\varnothing\ (k\ne j),\ n\in\mathbb N
> \right\}.
> $$


> [!proof] 
> 
> 记
> $$
> M= \sup \left\{ \sum _{k = 1}^{n}\left| \nu \left(E_{k}\right) \right| : E= \bigcup _{k = 1}^{n}E_{k}, E_{k}\in \mathscr{A}, E_{k}\cap E_{j}= \varnothing\left(k\neq j\right), n \in \mathbb{N}  \right\}
> $$
> 
> 取$\left(X,\mathscr{A}, \nu \right)$的一个Hahn-分解$\left(P, P^{c}\right)$. 则
> $$
> \nu ^{+ }\left(E\right)= \nu \left(E\cap P\right), \quad \nu ^{-}\left(E\right)= - \nu  \left(E\cap P^{c}\right) 
> $$
> $$
> \left| \nu  \right|\left(E\right)= \nu \left(E\cap P\right)-\nu \left(E\cap P^{c}\right)  
> $$
> 令$E_1= E\cap P$, $E_2= E\cap P^{c}$, 则
> $$
> \left| \nu  \right|\left(E\right)= \left| \nu \left(E_1\right) \right| + \left| \nu \left(E_2\right) \right|    
> $$
> 因此
> $$
> \left| \nu  \right|\left(E\right)\le M  
> $$
> 
> 另一方面, 任取$E_1, E_2, \cdots , E_{n}\in \mathscr{A}$, $E_{k}\cap E_{j}\neq \varnothing\left(k \neq j\right)$, $E= \bigcup _{k = 1}^{n}E_{k}$. 不妨设存在$k_0$, 使得
> $$
> \nu \left(E_{i}\right)\le 0, i\le k_0,\quad \nu \left(E_{j}\right)\ge 0, j> k_0 
> $$
> 则
> $$
> \sum _{k = 1}^{n}\left| \nu \left(E_{i}\right) \right|= \sum _{j = k_0+ 1}^{n}\nu \left(E_{j}\right)- \sum _{i = 1}^{k_0}\nu \left(E_{i}\right)  
> $$
> 令$A_2= \bigcup _{i = 1}^{k_0}E_{i}$, $A_1=  \bigcup _{j = k_0+ 1}^{n}E_{j}$. 那么
> $$
> \nu \left(A_1\cap E\right)=\sum _{j= k_0+ 1}^{n}\nu \left(E_{j}\right),\quad \nu \left(A_2\cap E\right)= \sum _{i = 1}^{k_0}\nu \left(E_{i}\right)
> $$
> 从而
> $$
> \sum _{k = 1}^{n}\left| \nu \left(E_{i}\right) \right|= \nu \left(A_1\cap E\right)- \nu \left(A_2\cap E\right)  
> $$
> 而
> $$
> \nu ^{+ }\left(E\right)= \sup _{A\in \mathscr{A}}\left\{ \nu \left(A\cap E\right) \right\}\ge \nu \left(A_1\cap E\right) 
> $$
> $$
> \nu ^{-}\left(E\right)= \sup _{A\in \mathscr{A}}\left\{ -\nu \left(A\cap E\right) \right\}\ge - \nu \left(A_2\cap E\right) 
> $$
> 我们有
> $$
> \left| \nu  \right|\left(E\right)= \nu ^{+ }\left(E\right)+ \nu ^{-}\left(E\right)  \ge \nu \left(A_1\cap E\right)-\nu \left(A_2\cap E\right)= \sum _{k= 1}^{n}\left| \nu \left(E_{i}\right) \right| 
> $$
> 由于$E_1,\cdots ,E_{n}$是任取的, 得到
> $$
> M\le \left| \nu  \right|\left(E\right)  
> $$
> 因此
> $$
> M= \left| \nu  \right|\left(E\right)  
> $$




> [!exercise] Exercise 4.4
> 设 $\mu$ 是可测空间 $(X,\mathcal A)$ 上的有限符号测度，证明：
> $$
> \forall E\in\mathcal A,\qquad
> |\mu|(E)=\sup\left\{
> \left|\int_E f\,d\mu\right|:
> f\in L(X,\mathcal A,|\mu|),\ |f|\le1
> \right\}.
> $$

> [!proof] 
> 由Exercise 4.3, 任取满足$\left| f \right| \le 1$的可测函数, 有
> $$
> \left| \int _{E} f \,d \mu  \right|\le  \int _{E}\left| f \right| d \left| \mu  \right|    \le \left| \mu  \right|\left(E\right) 
> $$
> 反过来, 取$\mu$的Hahn分解$\left(P, P^{c}\right)$, 令
> $$
> s= \chi _{P}- \chi _{Pp^{c}} 
> $$
> 则$\left| s \right|= 1$, 并且由于$\left| \mu  \right|\left(X\right)< \infty$, 可知$s$关于$\left| \mu  \right|$-可积, 并且
> $$
> \int _{E}s\,d \mu = \mu \left(E\cap P\right)-\mu \left(E\cap P^{c}\right)= \mu ^{+ }\left(E\right)-\mu ^{-}\left(E\right)= \left| \mu  \right| \left(E\right) 
> $$
> 因此$f = s$时可以取到上确界.


# 5

> [!exercise] Exercise 5.1
> 证明链式法则：设 $\mu_0,\mu_1,\mu_2$ 是 $(X,\mathcal A)$ 上的 $\sigma$ 有限测度，且 $\mu_2\ll\mu_1$，$\mu_1\ll\mu_0$，那么 $\mu_2\ll\mu_0$ 且
> $$
> \frac{d\mu_2}{d\mu_0}
> =
> \frac{d\mu_2}{d\mu_1}\cdot\frac{d\mu_1}{d\mu_0}
> \qquad \mu_0\text{-a.e.}
> $$

> [!proof] 
> 由Radon-Nikodym定理, 存在非负可测函数
> $$
>  f=  \frac{\mathrm{d}\mu _2 }{\mathrm{d}\mu _1 }, \quad g = \frac{\mathrm{d}\mu _1 }{\mathrm{d}\mu _0 }
> $$
> 使得
> $$
> \mu _2 \left(A\right)= \int _{A} f d \mu _1 ,\quad \mu _1 \left(A\right)=  \int _{A} g d \mu _0 ,\quad  
> $$
> 
> 定义
> $$
> \mathscr{H}= \left\{ h\ge 0: h\text{ 可测 }, \text{且} \int _{X}h \,d \mu _1 = \int _{X} hg \,d \mu _0  \right\} 
> $$
> 
> 首先, 对于任意的$A\in \mathscr{A}$, 令$h = \chi _{A}$, 我们有
> $$
> \int _{X} \chi _{A} \,d \mu _1 = \mu _1 \left(A\right)=  \int _{A} f \,d \mu _0 =  \int  _{X} \chi _{A} f \,d \mu _1
> $$
> 因此$\chi _{A} \in \mathscr{H}$. 由积分的线性, 意见$\mathscr{H}$对非负线性组合封闭, 因此对于任意的非负可测函数$\varphi$, $\varphi \in \mathscr{H}$. 最后, 若$h_{n}\in \mathscr{H}$, $h_{n}\uparrow h$, 则由$h_{n}g\uparrow hg$, 因此由单调收敛定理, $\mathscr{H}$对渐升列封闭. 故$\mathscr{H}$包含任意可测函数. 因此
> $$
> \int _{X} h \,d \mu _1 = \int _{X} h g \,d \mu _0 ,\quad \forall h \in \mathcal{S}\left(X,\mathscr{A}\right) 
> $$
> 最后取$h= \chi _{E}f$, 得到
> 
> $$
> \mu _2 \left(E\right)= \int _{E}f \,d \mu _1 = \int _{X}fg \,d \mu_0 
> $$
> 这表明
> $$
> \frac{\mathrm{d}\mu _2 }{\mathrm{d}\mu _0 } = fg =  \frac{\mathrm{d}\mu _2 }{\mathrm{d}\mu _1 }\cdot \frac{\mathrm{d}\mu _1}{\mathrm{d}\mu _0 }
> $$

> [!exercise] Exercise 5.2
> 请详细写出定理 1.5.7 当 $\mu(X)=\infty$ 时的证明。
>
> **定理 1.5.7** 设 $1\le p<\infty$，$\frac1p+\frac1{p'}=1$（规定 $\frac1\infty=0$）。设 $(X,\mathcal A,\mu)$ 是 $\sigma$ 有限测度空间，那么对于每个 $\ell\in[L^p(X,\mathcal A,\mu)]^*$，存在唯一的 $g\in L^{p'}(X,\mathcal A,\mu)$，使得
> $$
> \forall f\in L^p(X,\mathcal A,\mu),\qquad
> \ell(f)=\int_X fg\,d\mu,
> \qquad
> \|g\|_{p'}=\|\ell\|.
> $$

> [!proof] 
> 取$X_{n}\uparrow X$, 其中$\mu \left(X_{n}\right)< \infty$. 对于$u\in L^{p}\left(X_{n}\right)$, 记它的零延拓是$\tilde{u}$. 定义
> $$
> \ell _{n}\left(u\right)= \ell \left(\tilde{u}\right) 
> $$
> 显然$\left\| \ell _{n} \right\|\le \left\| l \right\|$.
> 由定理1.5.7, 存在唯一的$g_{n}\in L^{p^{\prime} }\left(X_{n}\right)$, 满足
> $$
> \ell _{n}\left(u\right)= \int _{X_{n}}ug_{n}\,d \mu ,\quad \left\| g_{n} \right\|_{p^{\prime} }= \left\| \ell _{n} \right\| \le \left\| \ell  \right\|
> $$
> 当$m< n$时, $g_{n}|_{X_{m}}$和$g_{m}$都表示了$\ell _{m}$, 从而它们几乎处处相等.  故存在可测函数$g$, 使得$g|_{X_{n}}= g$几乎处处成立. 于是由单调收敛定理($p^{\prime} = \infty$时由本质上确界), 得到
> $$
> \left\| g \right\|_{p^{\prime} }= \sup _{n}\left\| g \right\|_{L^{p^{\prime} }\left(X_{n}\right)} = \sup _{n}\left\| g_{n} \right\|_{p^{\prime} }\le \left\| \ell  \right\|
> $$
> 故$g\in L^{p^{\prime} }\left(X\right)$.
> 任取$f\in L^{p}\left(X\right)$, 令$f_{n}= f \chi _{X_{n}}$. 由于$p< \infty$, 有$\left\| f_{n}-f \right\|_{p}\to 0$, 由$\ell$的连续性以Hölder不等式,
> $$
> \left| \ell \left(f\right) \right|  \le \left\| f \right\|_{p}\left\| g \right\|_{p^{\prime} }
> $$
> 故
> $$
> \left\| \ell  \right\|\le \left\| g \right\|_{p^{\prime} } 
> $$
> 综上可知
> $$
> \left\| g \right\|_{p ^{\prime} } = \left\| \ell  \right\|
> $$
> 若存在$h$也表示了$\ell$, 那么$h= g$几乎处处在$X_{n}$成立, 故而$h= g$几乎处处在$X$上成立.

# 6

> [!exercise] Exercise 6.1
> 设 $\mu^*$ 是 $X$ 上的正则的外测度，$E_n\subset X$ 且 $E_n\subset E_{n+1}$。求证：
> $$
> \lim_{n\to\infty}\mu^*(E_n)
> =
> \mu^*\left(\lim_{n\to\infty}E_n\right).
> $$

> [!proof] 
> 
> 由正则性, 取可测集$B_{n}\supseteq E_{n}$, 使得
> $$
> \mu ^{*}\left(B_{n}\right)= \mu ^{*}\left(E_{n}\right) 
> $$
> 令
> $$
> A_{n}= \bigcap _{k\ge n}B_{n} 
> $$
> 则$A_{n}$可测, 且$A_{n}\subseteq A_{n+ 1}$, 由于$E_{n}\subseteq E_{k}\subseteq B_{k}$, $k\ge n$, 有
> $$
> E_{n}\subseteq A_{n}\subseteq B_{n} 
> $$
> 故
> $$
> \mu ^{*}\left(A_{n}\right)= \mu ^{*}\left(E_{n}\right) 
> $$
> 由测度的连续性
> 
> $$
> \mu ^{*}\left(\bigcup _{n}E_{n}\right)\le \mu ^{*}\left(\bigcup _{n}A_{n}\right)= \lim_{n}\mu ^{*}\left(A_{n}\right)= \lim_{n}\mu ^{*}\left(E_{n}\right) 
> $$
> 另一侧的不等式由$E_{n}\subseteq \bigcup _{k}E_{k}$得到, 因此
> $$
> \lim_{n\to \infty}\mu ^{*}\left(E_{n}\right)= \mu ^{*}\left(\bigcup _{n = 1}^{\infty}E_{n}\right) 
> $$

> [!exercise] Exercise 6.2
> 证明下述定义的 $H_\alpha$ 确实是 $\mathbb R^n$ 上的距离外测度，并且是正则的。
>
> 设 $\alpha>0$，$\varepsilon>0$。对于非空集合 $A\subset\mathbb R^n$，定义
> $$
> H_\alpha^\varepsilon(A)
> =
> \inf\left\{
> \sum_{k=1}^{\infty}\delta(A_k)^\alpha:
> \bigcup_{k=1}^{\infty}A_k\supset A,\ 
> \delta(A_k)<\varepsilon
> \right\},
> $$
> 其中 $\delta(A_k)$ 表示点集 $A_k$ 的直径，即
> $$
> \delta(A_k)=\sup\{|x-y|:x,y\in A_k\}.
> $$
> 定义
> $$
> H_\alpha(A)=\lim_{\varepsilon\to0+}H_\alpha^\varepsilon(A)
> \quad(A\ne\varnothing),
> \qquad
> H_\alpha(\varnothing)=0.
> $$

> [!proof] 
> 补充定义 $H_\alpha^\varepsilon(\varnothing)=0$. 当 $\varepsilon\downarrow0$ 时, 允许的覆盖减少, 故 $H_\alpha^\varepsilon(A)\uparrow H_\alpha(A)$.
>
> 对任意集合列 $(E_j)$, 只需考虑 $\sum_jH_\alpha(E_j)<\infty$. 给定 $\varepsilon,\eta>0$, 为每个 $E_j$ 选取可数覆盖 $(E_{jk})_k$, 使
> $$
> \delta(E_{jk})<\varepsilon,\qquad
> \sum_k\delta(E_{jk})^\alpha
> <H_\alpha^\varepsilon(E_j)+\eta2^{-j}.
> $$
> 合并这些覆盖, 得
> $$
> H_\alpha^\varepsilon\Bigl(\bigcup_jE_j\Bigr)
> \le\sum_{j,k}\delta(E_{jk})^\alpha
> \le\sum_jH_\alpha(E_j)+\eta.
> $$
> 依次令 $\varepsilon\downarrow0$ 和 $\eta\downarrow0$, 得
> $$
> H_\alpha\Bigl(\bigcup_jE_j\Bigr)\le\sum_jH_\alpha(E_j).
> $$
> 又非负性, 单调性及空集取零均由定义得到, 故 $H_\alpha$ 是外测度.
>
> 若 $\operatorname{dist}(E,F)>0$, 取 $0<\varepsilon<\operatorname{dist}(E,F)$. 直径小于 $\varepsilon$ 的集合不能同时与 $E,F$ 相交, 因此将 $E\cup F$ 的覆盖分组可得
> $$
> H_\alpha^\varepsilon(E\cup F)
> \ge H_\alpha^\varepsilon(E)+H_\alpha^\varepsilon(F).
> $$
> 令 $\varepsilon\downarrow0$, 再结合次可加性, 得
> $$
> H_\alpha(E\cup F)=H_\alpha(E)+H_\alpha(F).
> $$
> 故 $H_\alpha$ 是距离外测度.
>
> 最后设 $H_\alpha(A)<\infty$. 对每个 $j\ge1$, 取覆盖 $A\subset\bigcup_kA_{jk}$, 使
> $$
> \delta(A_{jk})<1/j,\qquad
> \sum_k\delta(A_{jk})^\alpha<H_\alpha(A)+1/j.
> $$
> 令
> $$
> B=\bigcap_j\bigcup_k\overline{A_{jk}}.
> $$
> 则 $B\supset A$ 为 Borel 集. 由于闭包不改变直径,
> $$
> H_\alpha^{1/j}(B)
> \le\sum_k\delta(\overline{A_{jk}})^\alpha
> <H_\alpha(A)+1/j.
> $$
> 令 $j\to\infty$, 结合单调性得 $H_\alpha(B)=H_\alpha(A)$. 若 $H_\alpha(A)=\infty$, 取 $B=\mathbb R^n$ 即可. 距离外测度的 Borel 集均可测, 因而每个集合都有等外测度的可测上包络, 故 $H_\alpha$ 正则. 


> [!exercise] Exercise 6.3
> 设 $\Lambda_f$ 是 $\mathbb R$ 上单调增函数 $f$ 导出的 L-S 测度。证明：若 $\Lambda_f\ll m$，则
> $$
> \frac{d\Lambda_f}{dm}=f'
> \qquad m\text{-a.e.},
> $$
> 此处 $m$ 代表寻常 Lebesgue 测度。

> [!proof] 
> 首先, 记$F\left(x\right)=f\left(x+\right)$, 则根据L-S测度的定义,
> $$
> \Lambda_f\left(\left(a,b\right]\right)=F\left(b\right)-F\left(a\right),\quad a<b
> $$
> 由$\Lambda_f\ll m$, 对于任意的$x\in \mathbb{R}$, 有
> $$
> 0= \Lambda_f\left(\left\{ x \right\}\right)=F\left(x\right)-F\left(x-\right)= f\left(x+\right)-f\left(x-\right)
> $$
> 又由于$f$单调, $f\left(x-\right)\le f\left(x\right)\le f\left(x+\right)$, 因此$f$连续.
> 
> 由于$\Lambda_f$在每个有界区间上有限, 故$\Lambda_f$是$\sigma$有限的. 由Radon-Nikodym定理, 存在非负可测函数
> $$
> g= \frac{\mathrm{d}\Lambda_f}{\mathrm{d}m}
> $$
> 使得
> $$
> \Lambda_f\left(A\right)= \int_A g\,dm,\quad \forall A\text{ 可测}
> $$
> 任取$a<b$, 由L-S测度的定义以及$f$的连续性,
> $$
> f\left(b\right)-f\left(a\right)= \Lambda_f\left(\left(a,b\right]\right)= \int_a^b g\left(t\right)\,dt<\infty
> $$
> 这表明$g\in L^1_{\mathrm{loc}}\left(\mathbb{R}\right)$. 由Lebesgue积分的微分定理, 对于几乎处处的$x$, 有
> $$
> f'\left(x\right)= \lim_{h\to 0}\frac{f\left(x+h\right)-f\left(x\right)}{h}= \lim_{h\to 0}\frac{1}{h}\int_x^{x+h}g\left(t\right)\,dt= g\left(x\right)
> $$
> 因此
> $$
> \frac{\mathrm{d}\Lambda_f}{\mathrm{d}m}= f',\quad m\text{-a.e.}
> $$

# 7
> [!exercise] Exercise 7.1
> 设 $f\in L(X,\mathcal A,\mu)$，$g\in L(Y,\mathcal B,\nu)$，证明 $f(x)g(y)\in L(X\times Y,\mathcal A\times\mathcal B,\mu\times\nu)$，且
> $$
> \int_{X\times Y}f(x)g(y)\,d(\mu\times\nu)
> =
> \int_X f\,d\mu\cdot\int_Y g\,d\nu.
> $$

> [!proof] 
> 记$F\left(x,y\right)= f\left(x\right)$, $G\left(x,y\right)= g\left(y\right)$. 对于任意的$a\in \mathbb{R}$,
> $$
> \left\{ F>a \right\}= \left\{ x\in X: f\left(x\right)>a \right\}\times Y,\quad \left\{ G>a \right\}= X\times\left\{ y\in Y: g\left(y\right)>a \right\}
> $$
> 均属于$\mathcal{A}\times\mathcal{B}$, 故$F,G$可测, 进而$f\left(x\right)g\left(y\right)$可测.
> 
> 先设$f,g\ge 0$, 取非负简单函数列$f_n\uparrow f$, $g_n\uparrow g$. 由乘积测度在可测矩形上的定义以及积分的线性, 有
> $$
> \int_{X\times Y}f_n\left(x\right)g_n\left(y\right)\,d\left(\mu\times\nu\right)= \int_X f_n\,d\mu\cdot\int_Y g_n\,d\nu
> $$
> 由于$f_n\left(x\right)g_n\left(y\right)\uparrow f\left(x\right)g\left(y\right)$, 令$n\to\infty$, 由单调收敛定理得到
> $$
> \int_{X\times Y}f\left(x\right)g\left(y\right)\,d\left(\mu\times\nu\right)= \int_X f\,d\mu\cdot\int_Y g\,d\nu
> $$
> 
> 对于一般的$f,g$, 先对$\left| f \right|,\left| g \right|$应用上式, 得到
> $$
> \int_{X\times Y}\left| f\left(x\right)g\left(y\right) \right|\,d\left(\mu\times\nu\right)= \int_X\left| f \right|\,d\mu\cdot\int_Y\left| g \right|\,d\nu<\infty
> $$
> 故$f\left(x\right)g\left(y\right)$可积. 最后, 将$f=f^+-f^-$, $g=g^+-g^-$代入, 对四个非负乘积分别应用已经证明的结论, 再由积分的线性,
> $$
> \begin{aligned}
> \int_{X\times Y}f\left(x\right)g\left(y\right)\,d\left(\mu\times\nu\right)&= \left(\int_X f^+\,d\mu-\int_X f^-\,d\mu\right)\left(\int_Y g^+\,d\nu-\int_Y g^-\,d\nu\right)\\
> &= \int_X f\,d\mu\cdot\int_Y g\,d\nu
> \end{aligned}
> $$

> [!exercise] Exercise 7.2
> 对于 $x>0$，有
> $$
> \int_{(0,\infty)}e^{-xt}\,dt=\frac1x.
> $$
> 利用此事，根据 Fubini 定理证明
> $$
> \lim_{n\to\infty}\int_0^n\frac{\sin x}{x}\,dx=\frac{\pi}{2}.
> $$

> [!proof] 
> 任取$n>0$, 由题设中的等式以及Tonelli定理,
> $$
> \int_0^n\int_0^\infty e^{-xt}\left| \sin x \right|\,dt\,dx= \int_0^n\frac{\left| \sin x \right|}{x}\,dx\le n<\infty
> $$
> 故可以应用Fubini定理交换积分次序. 记
> $$
> I_n= \int_0^n\frac{\sin x}{x}\,dx
> $$
> 则
> $$
> I_n= \int_0^n\int_0^\infty e^{-xt}\sin x\,dt\,dx= \int_0^\infty\int_0^n e^{-xt}\sin x\,dx\,dt
> $$
> 直接计算得到
> $$
> \int_0^n e^{-xt}\sin x\,dx= \left[-\frac{e^{-xt}\left(t\sin x+\cos x\right)}{1+t^2}\right]_0^n= \frac{1-e^{-nt}\left(\cos n+t\sin n\right)}{1+t^2}
> $$
> 因此
> $$
> I_n= \int_0^\infty\frac{1}{1+t^2}\,dt-\int_0^\infty\frac{e^{-nt}\left(\cos n+t\sin n\right)}{1+t^2}\,dt= \frac{\pi}{2}-\int_0^\infty\frac{e^{-nt}\left(\cos n+t\sin n\right)}{1+t^2}\,dt
> $$
> 而
> $$
> \left| I_n-\frac{\pi}{2} \right|\le \int_0^\infty e^{-nt}\frac{1+t}{1+t^2}\,dt\le \int_0^\infty e^{-nt}\left(1+t\right)\,dt= \frac{1}{n}+\frac{1}{n^2}
> $$
> 令$n\to\infty$, 得到
> $$
> \lim_{n\to\infty}\int_0^n\frac{\sin x}{x}\,dx= \frac{\pi}{2}
> $$

> [!exercise] Exercise 7.3
> 设 $f$ 是 $\mathbb R$ 上的非负实值函数。考虑寻常 Lebesgue 测度，证明 $f$ 可测的充要条件是
> $$
> E=\{(x,y):0\le y\le f(x)\}
> $$
> 属于 $\mathbb R^2$ 中由可测矩形族生成的 $\sigma$ 代数。

> [!proof] 
> 记$\mathcal{L}$为$\mathbb{R}$上的Lebesgue可测集族, 则题设中的$\sigma$代数为$\mathcal{L}\times\mathcal{L}$.
> 
> 若$f$可测, 令$F\left(x,y\right)=f\left(x\right)$, $G\left(x,y\right)=y$. 对于任意的$a\in\mathbb{R}$,
> $$
> \left\{ F>a \right\}= \left\{ x\in\mathbb{R}: f\left(x\right)>a \right\}\times\mathbb{R},\quad \left\{ G>a \right\}= \mathbb{R}\times\left(a,\infty\right)
> $$
> 均属于$\mathcal{L}\times\mathcal{L}$, 因此$F,G$均可测. 于是
> $$
> E= \left\{ G\ge 0 \right\}\cap\left\{ F-G\ge 0 \right\}\in\mathcal{L}\times\mathcal{L}
> $$
> 
> 反之, 设$E\in\mathcal{L}\times\mathcal{L}$. 任取$a\in\mathbb{R}$, 对于$S\subseteq\mathbb{R}^2$, 记它在$y=a$处的截面为
> $$
> S_a= \left\{ x\in\mathbb{R}: \left(x,a\right)\in S \right\}
> $$
> 定义
> $$
> \mathscr{C}_a= \left\{ S\subseteq\mathbb{R}^2: S_a\in\mathcal{L} \right\}
> $$
> 由于取截面的运算保持余集以及可列并, 易见$\mathscr{C}_a$是一个$\sigma$代数. 又任意可测矩形$A\times B$的截面为
> $$
> \left(A\times B\right)_a= \begin{cases} A,&a\in B\\ \varnothing,&a\notin B \end{cases}
> $$
> 因此$\mathscr{C}_a$包含所有可测矩形, 故$\mathcal{L}\times\mathcal{L}\subseteq\mathscr{C}_a$. 特别地, $E_a\in\mathcal{L}$.
> 
> 当$a\ge 0$时,
> $$
> E_a= \left\{ x\in\mathbb{R}: f\left(x\right)\ge a \right\}
> $$
> 当$a<0$时, 由于$f\ge 0$, 也有$\left\{ x\in\mathbb{R}: f\left(x\right)\ge a \right\}=\mathbb{R}\in\mathcal{L}$. 因此对于任意的$a\in\mathbb{R}$, $\left\{ x\in\mathbb{R}: f\left(x\right)\ge a \right\}$都是可测集, 这表明$f$可测.




