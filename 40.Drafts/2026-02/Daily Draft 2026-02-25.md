### 09:44



 $$ a_{ij}\left(x\right)D_{ij}u+ b_{i}u= f\left(x,u\right) $$


$u\in C^{2}\left(\Omega \right)$, $f\in C\left(\Omega \times \mathbb{R} \right)$. with respect to $x$ and $u$. where $u$ take the value on $\mathbb{R}$.

$a_{ij}$, $b_{i}$ continuous and hence bounded in  $\overline{\Omega}$. 

unifomrly elliptic in $\Omega$ in the sense 

 $$ a_{ij}\left(x\right)\xi _{i}  \xi _{j}\ge \lambda \left| \xi  \right|^{2}  $$


 $u\in C^{3}\left(\Omega \right)\cap C^{1}\left(\overline{\Omega}\right)$ 

 $$ a_{ij}\left(x\right)D_{ij}u+ b_{i}\left(x\right)D_{i}u= f\left(x,u\right) $$

for $a_{ij},b_{i}\in C^{1}\left(\overline{\Omega}\right)$, $f\in C^{1}\left(\overline{\Omega}\times \mathbb{R} \right)$, then 

$$ \sup _{\Omega }\left| Du \right|\le \sup _{\partial \Omega }\left| Du \right|+ C$$ 

where $C$ is positive constant depending only on $\lambda$, $\operatorname{diam}\left(\Omega \right)$. 


$\left| a_{ij},b_{i} \right|_{C^{1}\left(\overline{\Omega}\right)}$

$M= \left| u \right|_{L^{\infty}\left(\Omega \right)}$, $\left| f \right|_{C^{1}\left(\overline{\Omega}\times \left[ -M,M \right]\right)}$


$L\equiv a_{ij}D_{ij}+ b_{i}D_{i}$, caclulate $L\left(\left| Du \right|^{2}\right)$.


 $$ D_{i}\left(\left| Du \right|^{2} \right)= D_{i}\left(D_{i}u^{2}\right)= 2D_{k}uD_{ki}u $$ 

 $$ D_{ij}\left(\left| Du \right|^{2} \right)= 2 D_{j}\left(D_{k}uD_{ki}u\right)= 2D_{ki}D_{kj}u+ 2 D_{k}uD_{kij}u  $$
 
 $$ \begin{aligned}& a_{ij}D_{k}uD_{kij}u+ b_{i}\left(x\right)D_{k}uD_{ki}u\\& + D_{k}a_{ij}D_{ij}uD_{k}u+ D_{k}b_{i} D_{i}u D_{k}u+ D_{k}uD_{k}f+  D_{z}f\left| Du \right|^{2} = 0  \end{aligned} $$  

 $$ D_{k}f\left(x,u\right)=D_{k}u D_{k}f+ D_{z}f \left| Du \right| $$ 


 $$ \begin{aligned} &a _{ij}D_{ij}\left(\left| Du \right|^{2} \right)-2 a _{ij}D_{ki}uD_{kj}u+ b_{i}D_{i}\left(\left| Du \right|^{2} \right)\\&+ D_{k}a_{ij}D_{ij}uD_{k}u+ D_{k}b_{i}D_{i}uD_k u- D_{k}uD_{k}f- D_{z}f\left| Du \right| ^{2}= 0 \end{aligned} $$ 

 $$ \begin{aligned} &a_{ij}D_{ij}\left(\left| Du \right|^{2} \right)+ b_{i}D_{i}\left(\left| Du \right|^{2} \right)\\&= 2a_{ij}D_{ki}uD_{kj}u-2D_{k}a_{ij}D_{ij}uD_{k}u-2D_{k}b_{i}D_{i}uD_{k}u\\&+ D_{k}uD_{k}f+ D_{z}f\left| Du \right|^{2}   \end{aligned} $$ 