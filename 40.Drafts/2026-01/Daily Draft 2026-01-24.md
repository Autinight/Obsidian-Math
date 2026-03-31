### 07:36

把球平均误差, 用面积项缩放的导数 在球上的积分估计.

关于$\partial B\left(0,1\right)$上的积分, 一方面可以把$x+ sw$的参数塞到$u$的积分球面上, 得出$u$的球积分. 另一方面可以塞到导数项的积分球面上, 得到带面积缩放项导数的不同大小球面上的积分.


将$\left| u\left(x\right) \right|$用局部球平均误差和局部球积分控制. 前者被带面积项的导数在球上的积分控制, 用Holder不等式把导数项和面积项分开. 后者被$L^{p}$范数直接控制. 

将$\left| u\left(x\right)-u\left(y\right) \right|$用各自的小范围平均误差控制, 每个都被外面的一个球积分误差控制.

> [!theorem] Theorem: Morrey's Inequality   
> Assume $n< p\le \infty$. Then there exists a constant $C$, depending only on $p$ and $n$, such that 
>  $$ \left\| u \right\|_{C^{0,\gamma }\left(\mathbb{R} ^{n}\right)}\le C\left\| u \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)} $$
> for all $u\in C^{1}\left(\mathbb{R} ^{n}\right)$, where 
>  $$ \gamma := 1-\frac{n }{p } $$   


 $$ \begin{aligned} \left| u\left(x+ sw\right) -u\left(x\right)\right|\le \int _{0}^{s}\left| Du\left(x+ tw\right) \right|\,\mathrm{d} t   \end{aligned} $$

  $$ \begin{aligned} \int _{\partial B\left(0,1\right)} \left| u\left(x+ sw\right)-u\left(x\right) \right|\,\mathrm{d} S\left(w\right)&\le \int _{0}^{s}\int _{\partial B\left(0,1\right)}\left| Du\left(x+ tw\right) \right|\,\mathrm{d} S\left(w\right)\,\mathrm{d} t \\&\le \int _{0}^{s}\int _{\partial B\left(x,t\right)} \frac{\left| Du\left(y\right) \right|  }{t^{n-1} }\,\mathrm{d} S\left(y\right)\,\mathrm{d} t\\&= \int _{B\left(x,s\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\end{aligned} $$

  The other side, 
   $$ \begin{aligned} \int _{\partial B\left(0,1\right)}\left| u\left(x+ sw\right)-u\left(x\right) \right|\,\mathrm{d} S\left(w\right)&= \frac{1 }{s^{n-1} }\int _{\partial B\left(x,s\right)} \left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right) \end{aligned}  $$
    
Thus 
 $$ \begin{aligned} \int _{\partial B\left(x,s\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)&\le s^{n-1} \int _{B\left(x,s\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\\&\le s^{n-1}\int _{ B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\end{aligned}  $$

 for each $0< s< r$.  Then 
  $$ \begin{aligned} \int _{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)&\le \int _{0}^{r}s^{n-1}\,\mathrm{d} s \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{ \left| y-x \right|^{n-1} }\,\mathrm{d} y \\&\le C r^{n} \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y \end{aligned} $$  
  That is 
   $$ \overline{\int}_{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)\le C\int _{B\left(x,y\right)}\frac{\left| Du\left(y\right) \right|  }{\left|y-x \right|^{n-1}  }\,\mathrm{d} y  $$ 

------------

Dominate $\left| u\left(x\right) \right|$


 $$ \begin{aligned} \left| u\left(x\right) \right|&\le \overline{\int}_{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} y+  \overline{\int}_{B\left(x,r\right)}\left| u\left(y\right) \right|\,\mathrm{d} y\\&\le C \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y+  C \frac{1 }{r^{n} }\left\| u \right\|_{L^{p}\left(U\right)}\\& \le  C \left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}+ C\left( \int _{B\left(x,r\right)}\frac{1 }{\left| y-x \right|^{\left(n-1\right)\frac{p }{ p-1}}  }\,\mathrm{d} y\right)^{\frac{p-1 }{p }}+ C\frac{1 }{r^{n} }\left\| u \right\|_{L^{p}\left(U\right)}\end{aligned}   $$ 

 Substitue all $r$ by $1$, we don't need that $r$. And note that 
  $$ \left(n-1\right)\frac{p }{p-1 }< n $$
  The second integration $< \infty$.

  THen we get 
   $$ \left| u\left(x\right) \right|\le C\left\| u \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)}  $$

   Then   

 $$ \sup \left| u\left(x\right) \right|\le C\left\| u \right\|_{W^{1,p}\left(R^{n}\right)}  $$ 
 
since the estimate dose  not denpend on $x$. 


**estimate $\left| u\left(y\right)-u\left(x\right) \right|$**.  For $W= B\left(x,r\right)\cap B\left(y,r\right)$, we have 
 $$ \begin{aligned} \left| u\left(y\right)-u\left(x\right) \right|&\le \overline{\int}_{W}\left| u\left(y\right)-u\left(z\right) \right|\,\mathrm{d} z+  \overline{\int}_{W}\left| u\left(x\right)-u\left(z\right) \right|_{Z}\\&\le C \overline{\int}_{B\left(y,r\right)}\left| u\left(z\right)-u\left(y\right) \right|\,\mathrm{d} z+ C \overline{\int}_{B\left(x,r\right)}\left| u\left(z\right)-u\left(x\right) \right|\,\mathrm{d} z       \end{aligned} $$

where 
 $$ \begin{aligned} \overline{\int}_{B\left(y,r\right)}\left| u\left(z\right)-u\left(y\right) \right|\,\mathrm{d} z&\le C \int _{B\left(y,r\right)}\frac{\left| Du\left(z\right) \right|  }{\left| y-z \right|^{n-1}  }\,\mathrm{d} z\\&\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\cdot \left(\int _{B\left(y,r\right)}\frac{1 }{\left| y-z \right|^{n-1\frac{p }{p-1 }}  }\right)^{\frac{p-1 }{p }}\\&\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\cdot  \left(r^{n-\left(n-1\right)\frac{p }{p-1 }}\right)^{\frac{p-1 }{p }} \\&= C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}r^{1-\frac{n }{p }}\end{aligned}   $$  

 Then 
  $$ \left| u\left(y\right)-u\left(x\right) \right|\le  C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} r^{1-\frac{n }{p }}\le C\left| y-x \right|^{1-\frac{n }{p }}\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}   $$

  Thus 
   $$ [u]_{C^{0,\gamma }\left(\mathbb{R} ^{n}\right)}= \sup \frac{\left| u\left(y\right)-u\left(x\right) \right|  }{\left| y-x \right|^{1-\frac{n }{p }}  }\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} $$  
  
### 11:38 General Sobolev Inequalities



 $$ \left\| D^{\beta }u \right\|_{L^{p^{*}}\left(U\right)}\le C\left\| u \right\|_{W^{k,p}\left(U\right)} ,\quad \left| \beta  \right|\le k-1 $$ 

 $D^{\alpha }u\in L^{p}\left(U\right)$, when $u\in W^{k,p}\left(U\right)$, for $\left| \alpha  \right|\le k$ Then 
  $$ \left\| D^{\beta }u \right\|_{L^{p^{*}}\left(U\right)}\le C\left\| D^{\beta }u \right\|_{L^{p}\left(U\right)}+ C\sum _{\left| \alpha  \right|-\left| \beta  \right|= 1  }\left\| D^{\alpha }u \right\|_{L^{p}\left(U\right)}\le C\left\| u \right\|_{W^{k,p}\left(U\right)} $$

$u\in W^{k-1,p^{*}}\left(U\right)$, $u\in W^{k-2,p^{**}}$

 $$ \frac{1}{p^{*}}= \frac{1}{p}-\frac{1}{n} $$

  $$ \frac{1}{p^{* *}} = \frac{1}{p^{*}}-\frac{1}{n}= \frac{1}{p}-\frac{2 }{n }$$

   $$ \frac{1}{p^{k*}}= \frac{1}{p}-\frac{k}{n} $$

 $$ u\in W^{0,q}\left(U\right)= L^{q}\left(U\right) $$
 where
  $$ q= \frac{1 }{p }-\frac{k }{n } $$

  To do which , we need $p^{m *}< n$ at each stage, that is 
   $$ \frac{1}{p}-\frac{m }{n }> \frac{1 }{n } $$

   at each stage.  To complete the final step , we need do $k$ times, thus 

 $$ \frac{1}{p}> \frac{k }{n }\implies k< \frac{n }{p }  $$        


 If $u \in W^{k,p}\left(U\right)$, there is 
  $$ u\in W^{k-l,p^{l*}}\left(U\right) $$

  Where  
   $$ \frac{1}{l^{*}}= \frac{1}{p}-\frac{l }{n } $$  

provided 
 $$ l < \frac{n }{p }\iff lp< n $$ 

 $r= p^{l_{*}}$

  $$ u\in W^{k-l,r}\left(U\right) $$

  $$ D^{\alpha }u\in W^{1,r}\left(U\right),\quad \left| \alpha  \right|\le k-l-1  $$ 

  $$ D^{\alpha }u\in C^{0, 1-\frac{n }{r }}\left(U\right),\quad  ,\left| \alpha  \right|\le k-l-1 $$  


 $$ u\in C^{k-l-1,1-\frac{n }{r }}\left(\overline{U}\right) $$

Then we choose the max $l$ to get the best 

the best case happens when 
 $$ l < \frac{n }{p }< l+ 1 $$ 

 if $\frac{n }{p}\not \in \mathbb{Z}$. This time $l =  \left[ \frac{n }{p } \right]$ , we need $k\ge l+ 1> \frac{n }{p }$ 

 $1-\frac{n }{r }= 1-\frac{n }{p}+ l$

 So if $\frac{n}{p}\not \in \mathbb{Z}$, there is 
  $$ u\in C^{k-[\frac{n }{p }]-1, 1-\frac{n }{p }+ \left[ \frac{n }{p } \right]} $$

If $\frac{n }{p }\in \mathbb{Z}$, we choose $l = \frac{n }{p }-1$, then 
 $$ \frac{1}{r}= \frac{1}{p}-\frac{l}{n}= \frac{1}{p}-\frac{1}{p}+ \frac{1}{n}\implies r= n $$   

 Then $u\in W^{k-\frac{n }{p }+ 1,q}\left(U\right)$ for each $q< n$. 
  $$D^{\alpha } u\in L^{q^{*}}\left(\mathbb{R} ^{n}\right),\quad \left| \alpha  \right|\le k- \frac{n }{p } $$ 

  for each $q^{*}= \frac{nq }{n-q }$, $q< n$, we can choose $q^{*}$ to be arbitray $> n$ number. 
  

Then 

 $$ D^{\alpha }u \in C^{0,\gamma }\left(\overline{U}\right), \quad  \left| \alpha  \right|\le k-\frac{n }{p }-1 $$

  $$ u\in C^{k-\frac{n }{p }-1,\gamma }\left(\overline{U}\right) $$

  ${\gamma}= 1-\frac{n }{q^{*} }$ for each $n< q^{*}< \infty$, thus $\gamma$ be   arbitrary number with $0< \gamma < 1$.