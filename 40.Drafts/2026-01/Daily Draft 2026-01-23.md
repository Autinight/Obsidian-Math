### 10:59

 $$ \begin{cases} Lu= f,&\text{ in }U \\ u= 0,&\text{on }\partial U \end{cases}  $$

 $U$ open bounded subset of $\mathbb{R} ^{n}$, $\bar{u}:U\to \mathbb{R}$ unknown.

Hessian matrix is symmetric 

 $$ Lu\approx -\operatorname{tr}\left(A\left(x\right)\cdot D^{2}u\right) + \mathbf{order}\left(1\right)$$ 
 
 $D^{2}u$ is symmetric and $A= S+ K$, where $S^{\top}= S$, $K^{\top}= -K$, then 

  $$ \operatorname{tr}\left(A\cdot D^{2}u\right)= \operatorname{tr}\left(S\cdot D^{2}u\right)+ \operatorname{tr}\left(K\cdot D^{2}u\right)= \operatorname{tr}\left(S\cdot D^{2}u\right) $$

   $$ \left(K\cdot D^{2}u\right) _{ii}= \sum _{k}k_{ik} u_{ki}= -\sum _{k}u_{ik}k_{ki}= -\left(D^{2}u\cdot K\right)_{ii} $$

 $$ \operatorname{tr}\left(K\cdot D^{2}u\right)= -\operatorname{tr}\left(D^{2}u \cdot K\right)= -\operatorname{tr}\left(K\cdot D^{2}u\right)= 0 $$

  $$ a^{ij}= s^{ij}+ k^{ij} $$
   $$ \sum _{i,j= 1}^{n}a^{ij}u_{x_{i}x_{j}}= \sum _{i,j= 1}^{n}s^{ij}u_{x_{i}x_{j}}+ 0 $$     


Thus we use the symmetry condition 
 
$$ a^{ij}= a^{ji} $$


uniformly elliptic 

$$ \sum _{i,j= 1}^{n}a^{ij}\left(x\right)\xi _{i}\xi _{j}\ge \theta \left| \xi  \right|^{2}  $$  

$A$ is positive definite, with smallest eigenvalue greater than or eauql to $\theta$.

