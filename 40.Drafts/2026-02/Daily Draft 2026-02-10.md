### 07:59

$f:\mathbb{R} \to \mathbb{R}$, $F\left(z\right)= \int _{0}^{z}f\left(y\right)\,d y$. The Euler-Lagrange quation 

 $$ I\left[ w \right]:= \int _{U} \frac{1 }{2 }\left| Dw \right|^{2}-F\left(w\right)\,d x  $$ 

 $$ L\left(p,z,x\right)= \frac{1}{2}p^{2}-F\left(z\right) $$

 $$ L_{p_{i}}= p_{i} \quad L_{z}= -f\left(z\right)$$

 $$ -\sum _{i= 1}^{n}\left(L_{p_{i}}\left(Du,u,x\right)\right)_{x_{i}}+ L_{z}\left(Du,u,x\right)= 0 $$

becomes 
 $$ -\Delta u-f\left(u\right)= 0 $$

$\frac{1}{2}p^{2}$ always gives the $-\Delta u$. 


Minimal surfaces

 $$ L\left(p,z,x\right)= \left(1+ \left| p \right|^{2} \right)^{\frac{1}{2}} $$ 

 $$ I\left[ w \right]= \int _{U}\left(1+ \left| Dw \right|^{2} \right)^{\frac{1}{2}} \,d x$$

is the area of the graph of the function $w:U\to \mathbb{R}$. The associated Euler-Largrange equation.

 $$ L_{p_{i}}= \frac{p_{i}}{\sqrt{1+ \left| p \right|^{2} } } $$

 $$\sum _{i= 1}^{n} \left(\frac{u_{x_{i}} }{\left(1+ \left| Du \right|^{2} \right)^{\frac{1}{2}} }\right)_{x_{i}}= 0 $$  

That is 

 $$ \operatorname{div}\left(\frac{Du }{\left(1+ \left| Du \right|^{2} \right)^{\frac{1}{2}} }\right) $$

is $n$ times the mean curvature of the graph of $u$. 
### 15:44
