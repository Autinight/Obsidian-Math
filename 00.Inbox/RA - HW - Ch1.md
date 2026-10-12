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

若$E$是$\mu$-零集, 则$\forall A\in \mathscr{A}$, $\mu \left(A\cap E\right)= 0$
$$
\mu ^{+ }\left(E\right)=  \sup _{A\in \mathscr{A}}\mu \left(A\cap E\right)  = \sup _{A\in \mathscr{A}}\left\{ 0 \right\}= 0
$$
$$
\mu ^{-}\left(E\right)=\sup _{A\in \mathscr{A}} \left\{ -\mu \left(A\cap E\right) \right\}= \sup _{A\in \mathscr{A}}\left\{ 0 \right\}= 0
$$
于是
$$
\left| \mu  \right|\left(E\right)= \mu ^{+ }\left(E\right)+ \mu ^{-}\left(E\right)= 0  
$$

> [!exercise] Exercise 4.2
> 设$\left(X,\mathscr{A}\right)$是可测空间, $\mu ,\nu$是它上面的两个符号测度,  证明: 
> 1. $\mu \ll \nu$且$\mu \perp \nu$的充要条件是$\mu = 0$;
> 2. $\mu \ll \nu \iff \mu ^{+ }\ll \nu , \mu ^{-}\ll \nu  \iff  \left| \mu  \right|\ll \nu$;
> 3. 集合$\left\{ \varphi : \varphi \text{是} \left(X,\mathscr{A}\right) \text{上的有限符号测度且}\varphi \ll \nu \right\}$与集合$\left\{ \varphi : \varphi \text{是} \left(X,\mathscr{A}\right) \text{上的有限符号测度且}\varphi \perp\nu \right\}$都是实线性空间.


> [!exercise] Exercise 4.3
> 设 $\nu$ 是可测空间 $(X,\mathcal A)$ 上的符号测度，证明：$\forall E\in\mathcal A$，
> $$
> |\nu|(E)=\sup\left\{
> \sum_{k=1}^{n}|\nu(E_k)|:
> E=\bigcup_{k=1}^{n}E_k,\ E_k\in\mathcal A,\
> E_k\cap E_j=\varnothing\ (k\ne j),\ n\in\mathbb N
> \right\}.
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

# 5

> [!exercise] Exercise 5.1
> 证明链式法则：设 $\mu_0,\mu_1,\mu_2$ 是 $(X,\mathcal A)$ 上的 $\sigma$ 有限测度，且 $\mu_2\ll\mu_1$，$\mu_1\ll\mu_0$，那么 $\mu_2\ll\mu_0$ 且
> $$
> \frac{d\mu_2}{d\mu_0}
> =
> \frac{d\mu_2}{d\mu_1}\cdot\frac{d\mu_1}{d\mu_0}
> \qquad \mu_0\text{-a.e.}
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

# 6

> [!exercise] Exercise 6.1
> 设 $\mu^*$ 是 $X$ 上的正则的外测度，$E_n\subset X$ 且 $E_n\subset E_{n+1}$。求证：
> $$
> \lim_{n\to\infty}\mu^*(E_n)
> =
> \mu^*\left(\lim_{n\to\infty}E_n\right).
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

> [!exercise] Exercise 6.3
> 设 $\Lambda_f$ 是 $\mathbb R$ 上单调增函数 $f$ 导出的 L-S 测度。证明：若 $\Lambda_f\ll m$，则
> $$
> \frac{d\Lambda_f}{dm}=f'
> \qquad m\text{-a.e.},
> $$
> 此处 $m$ 代表寻常 Lebesgue 测度。

# 7
> [!exercise] Exercise 7.1
> 设 $f\in L(X,\mathcal A,\mu)$，$g\in L(Y,\mathcal B,\nu)$，证明 $f(x)g(y)\in L(X\times Y,\mathcal A\times\mathcal B,\mu\times\nu)$，且
> $$
> \int_{X\times Y}f(x)g(y)\,d(\mu\times\nu)
> =
> \int_X f\,d\mu\cdot\int_Y g\,d\nu.
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

> [!exercise] Exercise 7.3
> 设 $f$ 是 $\mathbb R$ 上的非负实值函数。考虑寻常 Lebesgue 测度，证明 $f$ 可测的充要条件是
> $$
> E=\{(x,y):0\le y\le f(x)\}
> $$
> 属于 $\mathbb R^2$ 中由可测矩形族生成的 $\sigma$ 代数。



