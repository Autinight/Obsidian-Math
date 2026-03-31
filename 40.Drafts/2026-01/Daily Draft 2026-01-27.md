### 07:11

$H^{-1} \left(U\right)$ is the dual of $H_{0}^{1}\left(U\right)$.

 $$ \left\| f \right\|_{H^{-1} \left(U\right)}:= \sup \left\{ \left< f,u \right>: u\in H_{0}^{1}\left(U\right),\left\| u \right\|_{H^{1}_{0}\left(U\right)}\le 1 \right\} $$ 

$f \in  H^{-1} \left(U\right)$,  $\exists ! u \in H_{0}^{1}\left(U\right)$, s.t. 
 $$ \left(u,v\right)= \left< f ,v \right>, \quad \forall v\in H_{0}^{1}\left(U\right) $$

 That is 
  $$ \int _{U}Du\cdot Dv+ uv\,\mathrm{d} x= \left< f,v \right> $$

  We define $f^{0}= u$, $f^{i}= u_{x_{i}}$ , then 
   $$ \int _{U}f^{0}v+ \sum _{i}f^{i}v_{x_{i}}\,\mathrm{d} x= \left< f,v \right> $$


$f\in H^{-1} \left(U\right)$, then 
 $$ \left< f,v \right>= \int _{U}g^{0}v+ \sum _{i}g^{i}v_{x_{i}}\,\mathrm{d} x $$


 $$ \begin{aligned} \left\| f \right\|_{H^{-1} \left(U\right)}= \left< f,u \right>&= \int _{U}f^{0}u+ \sum _{i}f^{i}u_{x_{i}}\,\mathrm{d} x\\&= \int _{U}u^{2}+\sum _{i} u_{x_{i}}^{2}\,\mathrm{d} x\\&= \int _{U}\left| Du \right|^{2}+ \left| u \right|^{2}   \end{aligned} $$

If for $g^{0},\cdots ,g^{i}$, 
  $$ \begin{aligned} \left< f,v \right>&= \int _{U}g^{0}v+ \sum _{i= 1}^{n}g^{i}v_{x_{i}}\,\mathrm{d} x  \end{aligned} $$

 $$ \begin{aligned} \begin{aligned} \int _{U}\left| Du \right|^{2}+ \left| u \right|^{2}&\le \int _{U} g^{0}u+ \sum _{i= 0}^{n}g^{i}u_{x_{i}}\,\mathrm{d} x\\&\le \left(\int _{U}\sum _{i= 0}^{n}\left| \left(g^{i}\right)^{2} \right| \,\mathrm{d} x\right)^{\frac{1}{2}}\left(\int _{U}\left| u \right|^{2}+ \left| Du \right|^{2}  \right)^{\frac{1}{2}} \end{aligned}   \end{aligned} $$ 

 That is 

  $$ \int _{U}\sum _{i= 0}^{n}\left| f^{i} \right|^{2}\,\mathrm{d} x\le \int _{U}\sum _{i= 0}^{n}\left| g^{i} \right|^{2}\,\mathrm{d} x   $$ 


 $$ \left| \left< f,v \right> \right|\le \left(\int _{U}\sum _{i= 0}^{n}\left| f^{i} \right|^{2}\,\mathrm{d} x \right)^{\frac{1}{2}},\quad \left\| v \right\|_{H_{0}^{1}\left(U\right)}\le 1  $$


  $$ \left\| f \right\|_{H^{-1} \left(U\right)}\le \left(\int _{U}\sum _{i= 0}^{n}\left| f^{i} \right|^{2} \right)^{\frac{1}{2}} $$

  The dual $u\in H_{0}^{1}\left(U\right)$ of $f$ can gives a mininum $\left| f^{0} \right|, \left| f^{i} \right|$  

$\left| g^{i} \right|$要大一点, 因为它与$u$做内积能正好等于模长, 就代表着他要用模长补偿方向上的偏离.

通过Riesz表示定理的, 把线性算子刻画成 向量$u$的内积, 沿着$u$的方向做内积, 就是算子最"有效"的方向.


### 14:00

$f= f^{0}-\sum _{i= 1}^{n}f^{i}_{x_{i}}$.

 $$ \int fu\,d x= \int f^{0}u-\sum _{i= 1}^{n}f^{i}_{x_{i}}u\,d x= \int f^{0}u+ \sum _{i= 1}^{n}f^{i}u_{x_{i}}\,d x $$ 

 Consider $B\left[ u,v \right]$, 

  $$ B\left[ u,v \right]= \int _{U}\left(Lu\right)v\,d $$ 

 $$ B\left[ u,v \right]= \left(f,v\right) $$
 then $u$ a weak solution .



  $$ \begin{cases} Lu= f,&U\\ u= g,&\partial U \end{cases}  $$

$Tu= Tg$.  


 $$ B:H\times H\to \mathbb{R}  $$

  $$ \left| B\left[ u,v \right] \right|\le \alpha \left\| u \right\|  \left\| v \right\|$$

   $$ \beta \left\| u \right\|^{2}\le B\left[ u,u \right] $$

   $f: H\to \mathbb{R}$ boudned linear functional on $H$.

   $\exists !$ $u\in H$ 

   $$ B\left[ u,v \right]= \left< f,v \right> $$ 

Fix $u$, $v\mapsto B\left[ u,v \right]$ is a boudned linear operator. Rieze$\implies$ $\exists w$, $B\left[ u,v \right]= \left(w,v\right)$, $\forall v\in H$. Write $Au= w$, then 
 $$ B\left[ u,v \right]= \left(Au,v\right),\quad \left(u,v\in H\right) $$

$A: H\to H$. $A$ is bounded linear operator.

 $$ \begin{aligned} \left(A\left(\lambda _1 u_1+ \lambda_2 u_2\right),v\right)&=B\left[ \lambda _1 u_1+ \lambda _2 u_2,v \right]\\&= \lambda _1 B\left[ u_1,v \right]+ \lambda _2 B\left[ u_2,v \right]\\&= \lambda _1 \left(Au_1,v\right)+ \lambda _2 \left(Au_2,v\right)\\&= \left(\lambda _1 Au_1+ \lambda _2 Au_2,v\right) \end{aligned} $$

  $$ A\left(\lambda _1 u_1+ \lambda _2 u_2\right)= \lambda _1 Au_1+ \lambda _2 Au_2 $$

 $$ \begin{aligned} \left\| Au \right\|^{2}&= \left(Au,Au\right)\\&= B\left[ u,Au \right]\\&\le \alpha \left\| u \right\|\left\| Au \right\| \end{aligned} $$   

  $$ \left\| Au \right\|\le \alpha \left\| u \right\| $$

  $A$ is boudned., 

 $$ \beta \left\| u \right\|\le \left\| Au \right\| $$

$Au$ is one to one, since $\left\| Au \right\|= 0\implies \left\| u \right\|= 0$. 

And $R\left(A\right)$ is closed since $\beta \left\| u_{m}-u_{n} \right\|\le \left\| Au_{m}-Au_{n} \right\|$, Cauchy sequence in $R\left(A\right)$ leads to that in $H$, then the limit exists in $H$, say $u$. $\left\| Au-Au_{m} \right\|\le \left\| u-u_{m} \right\|\to 0$.

$R\left(A\right)$ is closed in $H$, then $\exists w\in R\left(A\right)^{\perp}$, but  $\beta \left\| w \right\|^{2}\le B\left[ w,w \right]= \left(Aw,w\right)= 0$.

$f$ boudned linear functional on $H$, then $\exists$ $w$
 $$ \left< f,v \right>= \left(w,v\right),\forall v $$

  $$ R\left(A\right)= H $$

We fined $w= Au$, then 
 $$ \left< f,v \right>= \left(Au,v\right)= B\left[ u,v \right] $$   