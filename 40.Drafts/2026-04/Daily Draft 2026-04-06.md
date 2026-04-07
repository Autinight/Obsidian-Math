

 $$dr\left(X\right)= g\left(\operatorname{grad}r, X\right)  $$ 

 $$ T\mathbb{R} ^{n}= T_{r}\mathbb{R} \oplus TS^{n-1} $$

 $$ \left(r,s\right)\mapsto rs $$
我们取球面上的度量, 使得成为一个等距同构,    

 $$ \operatorname{grad}r= \partial _{r} $$

$r_0^{2}ds_{n-1}^{2}$是$r_0S^{n-1}$上的度量, 是$r^{-1} \left(r_0\right)$, 因此
 $$ \operatorname{II} \left(X,Y\right)= \frac{1 }{\left| \nabla r \right|  }\operatorname{Hess}r\left(X,Y\right)$$ 
 而
  $$ \begin{aligned} \begin{aligned} 2\operatorname{Hess}r&= L_{\partial _{r}}g\\&= L_{\partial _{r}}\left(\,d r^{2}\right)+ L_{\partial _{r}}\left(r^{2}\,d s_{n-1}^{2}\right)\\&= L_{\partial _{r}}\left(\,d r\right)\,d r+ \,d rL_{\partial _{r}}\left(\,d r\right) + \partial _{r}r^{2}\,d s_{n-1}^{2}+ r^{2}L_{\partial _{r}}\left(\,d s_{n-1}^{2}\right)\\&=  2\frac{1 }{r }g_{r}\end{aligned}\end{aligned} $$ 



 $$ L_{\partial _{r}}\left(dr\right)\left(X\right)= \partial _{r}\left(dr\left(X\right)\right)-dr\left(L_{\partial _{r}}X\right) $$ 
 
  $$ \begin{aligned} L_{\partial _{r}}dr &= d\left(\iota _{\partial _{r}}dr\right)+ \iota _{X}\left(ddr \right)\\&= 0 \end{aligned} $$ 
   $$ L_{\partial _{r}}\left(ds_{n-1}^{2}\right)\left(a\partial _{r}+ X,b\partial _{r}+ Y\right)= \partial _{r}\left(\,d s_{n-1}^{2}\left(X,Y\right)\right)$$ 

 $$   $$ 

于是
 $$ \operatorname{Hess}r= \frac{1 }{r }g_{r} $$
 $$ \operatorname{II} = \frac{1 }{\left| \nabla r \right|  }\operatorname{Hess}r = \frac{1 }{\sqrt{g\left(\partial _{r},\partial _{r}\right)} }\frac{1 }{r }g_{r}= \frac{1 }{r }g_{r}$$
  $$ g_{r} \left(R^{r}\left(X,Y\right)Z,W\right)-\frac{1 }{r^{2} }g_{r}\left(X,W\right)g_{r}\left(Y,Z\right)+ \frac{1 }{r^{2} }g_{r}\left(X,Z\right)g_{r}\left(Y,W\right)= 0$$   

 $$ g_{r}\left(R^{r}\left(X,Y\right)Z,W\right)= r^{-2}g_{r}\left(g_{r}\left(Y,Z\right)X-g_{r}\left(X,Z\right)Y,W\right)= 0 $$
  $$ R^{r}\left(X,Y\right)Z= r^{-2}\left(g_{r}\left(Y,Z\right)X-g_{r}\left(X,Z\right)Y\right) $$  

 $$\left(R^{r}\right)_{ijk}^{s}=  \left(g_{r}\right)^{ls}R^{r}_{ijkl}= r^{-2}g_{r}^{ls}\left(\left(g_{r}\right)_{il}\left(g_{r}\right)_{jk}-\left(g_{r}\right)_{ik}\left(g_{r}\right)_{jl}\right)=r^{-2}\left(\delta _{i}^{s}\left(g_{r}\right)_{jk}-\delta _{j}^{s}\left(g_{r}\right)_{ik}\right) $$ 
