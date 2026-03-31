### 10:01

$V\subset \subset W\subset \subset U$, 

$\xi$ extract $V$ and dominated by $W$.


for $a^{ij}\in C^{1}$, $b^{i},c\in L^{\infty}$, $f\in L^{2}$, we discuss $Lu= f$ for for $u\in H^{1}\left(U\right)$ to get its regularity. 

try to get the estimate $\left\| u \right\|_{H^{2}\left(V\right)}$ by $\left\| f \right\|_{L^{2}}$ and $\left\| u \right\|_{L^{2}}$, that is to say $Du$ estimated by $\left\| f \right\|_{L^{2}}$.

$u$ a weak solution, $B\left[ u,v \right]= \left(f,v\right)$, $v\in H_{0}^{1}\left(U\right)$, by eliminating all the first and 0th order, $\tilde{f}$, we get
 $$ \sum _{i,j= 1}^{n}\int _{U}a^{ij}u_{x_{i}}v_{x_{j}}= \int _{U}\tilde{f}v\,d x $$

 substitute 
  $$ v:= -D_{k}^{-h}\left(\zeta ^{2}D_{k}^{h}u\right) $$

but what is that mean?

recall that $\zeta= 1$ on $V$, then on $V$ , there may be 
 $$ v:= -D_{k}^{-h}D_{k}^{h}u $$

that is 
 $$ \begin{aligned}& -D_{k}^{-h}\left(\frac{u\left(x+ he_{k}\right)-u\left(x\right) }{h }\right)\\&= \frac{1 }{h }\left(\frac{u\left(x\right) -u\left(x-he_{k}\right)}{h }-\frac{u\left(x+ he_{k}\right)-u\left(x\right) }{h }\right)\\&=  \end{aligned} $$

i don't know, continue

 $$ A:= \sum _{i,j= 1}^{n}\int _{U}a^{ij}u_{x_{i}}v_{x_{j}}dx $$

  $$ B:= \int _{U}\tilde{f}v\,d x $$

 $$ \begin{aligned} \left(D_{k}^{-h}g\right)_{x_{j}}&= \end{aligned}$$   
 

  $$ \int _{V}u\left(D_{i}^{h}\varphi \right)\,d x= -\int _{V}\left(D_{i}^{-h}u\right)\varphi \,d x $$ 

 $$ \int _{V}u\left(x\right)\left[ \frac{\varphi \left(x+ he_{i}\right)-\varphi \left(x\right) }{h } \right]= -\int _{V}\left[ \frac{u\left(x\right)-u\left(x-he_{i}\right) }{h } \right]\varphi \left(x\right)\,d x $$
 

 $$ \int _{V}\frac{-u\left(x\right)\varphi \left(x\right) }{h } $$

  $$ \int _{V}\frac{u\left(x\right)\varphi \left(x+ he_{i}\right) }{h }= \int _{V+ he_{i}}\frac{u\left(x-he_{i}\right)\varphi \left(x\right) }{h } $$

 $\varphi \equiv 1$ on $V$,  $\operatorname{supp}\varphi \subset \subset W$, then what, we must show that integrate on $V+ he_{i}$ eaquals that in $V$, on $V\cap \left(+ he_{i}\right)$ it holds, then what the difference of them, in the boundary of you move into $U$ $V\subset \subset W$, you move a bit of  $U$, $U$ $U$ $W$, $W+ he_{i}$, in $U$, $W\subset \subset U$, integrate on $W$, equals that right on $W+ he_{i}$ contained in $U$, the other side,      

 integrate on $U$ equals that on $W-he_{i}$ euquals that RHS in $W$ equals that on $U$. real integral domain is rely on $\operatorname{supp}\varphi$, so we just integrate on a larger domain to contain those in both sides.

 Then we et 

  $$ \int _{V}u\left(D_{i}^{h}\varphi \right)= - $$

If $\operatorname{supp}\varphi \subset \subset U$, then 
 $$ \int _{U}u\left(D_{i}^{h}\varphi \right)\,d x= -\int _{V}\left(D_{i}^{-h}u\right)\varphi \,d x $$  

 you can transite the diravative by conversing tthe


 即便没有弱可导性, 我们也可以将差商传递给紧支函数, 这是证明若可导性的标准起手式.

 ok, so  $v= -D_{k}^{-h}\left(\zeta ^{2}D_{k}^{h}u\right)$, we may pass $-D_{k}^{-h}$ on to $u_{x_{i}}$ to get

  $$ A= \sum \int _{U}D_{k}^{h}\left(a^{ij}u_{x_{i}}\right)\left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}}$$ 

we tackle $a^{ij}$,

 $$ A= \sum \int _{U}a^{ij,h}\left(D_{k}^{h}u_{x_{i}}\right)\left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}}+ \left(D_{k}^{h}a^{ij}\right)u_{x_{i}}\left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}} $$

 wait, how comes the Lebeniz ? 

  $$ \begin{aligned} D_{k}^{h}\left(a^{ij}u_{x_{i}}\right)&= \frac{a^{ij}\left(x+ he_{k}\right)u\left(x+ he_{k}\right)-a^{ij}\left(x\right)u\left(x\right) }{h }\\&= a^{ij,h}D_{k}^{h}u+ \left(D_{k}^{h}a^{ij}\right)u \end{aligned} $$  

Oh, so $a^{ij,h}$ is the translation of $a^{ij}$.

ha, the fomular follow closely behind, but I do it by myself.

ok, lets do it again, we extract $\left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}}$ and add $a^{ij,h}\left(D_{k}^{h}u_{x_{i}}\right)$ and $\left(D_{k}^{h}a^{ij}\right){u_{x_{i}}}$ up .

So we consider

 $$ \begin{aligned} \left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}}&= 2\zeta \zeta _{x_{j}}D_{k}^{h}u+ \zeta ^{2}D_{k}^{h}u_{x_{j}} \end{aligned} $$

now, there are terms like
 $$ a^{ij,h}D_{k}^{h}u_{x_{i}}D_{k}^{h}u_{x_{j}}\zeta ^{2},\quad a^{ij,h}D_{k}^{h}u_{x_{i}}D_{k}^{h}u2\zeta \zeta _{x_{j}},\quad \left(D_{k}^{h}a^{ij}\right)u_{x_{i}}D_{k}^{h}u_{x_{j}}\zeta ^{2} $$
  $$ \left(D_{k}^{h}a^{ij}\right)u_{x_{i}}D_{k}^{h}u2\zeta \zeta _{x_{j}} $$
it seems like the frist is good, we call it $A_1$. others are trash.

the ellipctic condition is 

 $$ \sum _{i,j}a^{ij}\xi ^{i}\xi ^{j}\ge \theta \left| \xi  \right|^{2}  $$ 

 from which, we see that 

  $$ A_1\ge \theta \int _{U}\zeta ^{2}\left| D_{k}^{h}Du \right|^{2}  $$ 

 may be we take $\zeta ^{2}$ since it is nonnegative?
 
 Further more

 $$ \left| A_2 \right|\le C \int _{U}\zeta \left| D_{k}^{h}Du \right|\left| D_{k}^{h}u \right|+ \zeta \left| D_{k}^h Du\right|\left| Du \right|+ \zeta  \left| D_{k}^{h}u \right|\left| Du \right| $$

 Inequality with $\varepsilon$ to get

  $$ \left| A_2 \right|\le \varepsilon \int _{U}\zeta ^{2}\left| D_{k}^{h}Du \right|^{2}\,d x+ \frac{C }{\varepsilon  }\int _{W}\left| D_{k}^{h}u \right|^{2}+ \left| Du \right|^{2}     $$  

 $$ \int _{W}\left| D_{k}^{h}u \right|^{2}\,d x\le C\int _{U}\left| Du \right|^{2}\,d x $$

  $$ \left| A_2 \right|\le \varepsilon \int _{U}\zeta ^{2}\left| D_{k}^{h}Du \right|^{2}\,d x+ C\int _{U}\left| Du \right|^{2}\,d x    $$  

### 14:56 Difference Quotients

$u:U\to \mathbb{R}$ is locally summbal function

$V\subset \subset U$.

$1\le p< \infty$ and $u\in W^{1,p}\left(U\right)$. Then for each $V\subset \subset U$

 $$ \left\| D^{h}u \right\|_{L^{p}\left(V\right)}\le C\left\| Du \right\|_{L^{p}\left(U\right)} $$ 

 for some constant $C$ and all $0< \left| h \right|< \frac{1}{2}\operatorname{dist}{\left( V,\partial U \right)}$.

 If $u \in L^{p}\left(V\right)$, and there exists $C$ such that 
  $$ \left\| D^{h}u \right\|_{L^{p}\left(V\right)}\le C $$
for all $0< \left| h \right|< \frac{1}{2}\operatorname{dist}{\left( V,\partial U \right)}$. Then 
 $$ u\in W^{1,p}\left(V\right) ,with \left\| Du \right\|_{L^{p}\left(V\right)}\le C$$

 false for $p= 1$

  $$ \begin{aligned} u\left(x+ he_{i}\right)-u\left(x\right)= h\int _{0}^{1}u_{x_{i}}\left(x+ t he_{i}\right)\,d t \end{aligned} $$

 $$ \left| u\left(x+ he_{i}\right)-u\left(x\right) \right|\le \left| h \right|\int _{0}^{1}\left| Du\left(x+ t h e_{i}\right) \right|\,d t    $$   

 $$ \begin{aligned} \int _{V}\left| D^{h}u \right|^{p}\,d x&\le C\sum _{i= 1}^{n}\int _{V} \int _{0}^{1}\left| Du\left(x+ th e_{i}\right) \right|^{p}\,d t\,d x\\&= C\sum _{i= 1}^{n}\int _{0}^{1}\int _{V}\left| Du\left(x+ t h e_{i}\right) \right|\,d x\,d t\\&\le C\sum _{i= 1}^{n}\int _{0}^{1}\int _{U}\left| Du \right|^{p}\,d x\,d t   \end{aligned}   $$ 

 Thus 
  $$ \int _{V}\left| D^{h}u \right|^{p}\,d x\le C\int _{U}\left| Du \right|^{p}\,d x   $$

when $u$ is smooth. We approximate $u$ by smooth functions $u_{m}\to u$ in $W^{1,p}\left(V\right)$ 

$\left\{ x: \operatorname{dist}{\left( x,V \right)}\le \frac{1}{2} \operatorname{dist}{\left( V,\partial U \right)}  \right\}$也是紧包含于$U$的吗, 做$0< \left| h \right|< \frac{1}{2}\operatorname{dist}{\left( \left(V,\partial U\right) \right)}$的假设是为了让$V+ he_{i}$都包含于我说的上面的那个集合, 导出逼近光滑函数列在其上的$W^{1,p}$收敛性吗.


我的想法是取$V,W$使得$V\subset \subset W\subset \subset U$,再取$\varepsilon$使得$V\subseteq W_{\varepsilon }$, 结论改成对于所有的$0< \left| h \right|< \varepsilon$, 因为我发现实际上用的时候通常需要这么一个$W$.
$$\int _{V}u\left(D_{i}^{h}\varphi \right)\,d x= -\int _{V}\left(D_{i}^{-h}u\right)v \phi \,d x $$ 

 $$ \sup _{h}\left\| D_{i}^{-h}u \right\|_{L^{p}\left(V\right)}< \infty $$

 bounded sequence, subsequence and $v_{i}\in L^{p}\left(V\right)$ 

  $$ D_{i}^{-h_{k}}u\to v_{i}\text{ weakly in }L^{p}\left(V\right) $$ 