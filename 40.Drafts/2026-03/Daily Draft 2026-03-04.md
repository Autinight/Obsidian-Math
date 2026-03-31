### 09:34


 $$ 0< R\le 1 $$

 $$ \int _{B_{\frac{R }{2 }}}\left| D\left(\eta u\right) \right|^{2}\le C\int _{B_{R}}\left| D\eta  \right|^{2}u^{2}   $$


$\left| D\eta  \right|\le 2R^{-1}$

 $$ \int _{B_{R}}\left| D\left(\eta u\right)^{2} \right|  $$

 $$ \left| D\left(\eta u\right) \right|^{2}= \left| \eta Du+ uD\eta  \right|^{2}\le \eta ^{2}\left| Du \right|^{2}+ \left| D\eta  \right|^{2}u^{2}\le C\int _{B_{R}}\left| D\eta  \right|^{2}u^{2}\le \frac{C }{R^{2} }      $$  

 $$ \int _{B_{R}}\left(\eta u\right)^{2}\le c\left(n\right)R^{2}\int _{B_{R}}\left| D\left(\eta u\right) \right|^{2}  $$  

$u\in W_{0}^{1,p}\left(U\right)$, then we have the estimate

 $$ \left\| u \right\|_{L^{q}\left(U\right)}\le C\left\| Du \right\|_{L^{p}\left(U\right)} $$ 

  $$ \int _{B_{R}}\left(\eta u\right)^{2}\le c\left(n\right)R^{2}\int _{B_{R}}\left| D\left(\eta u\right) \right|^{2}  $$ 

 $$ \int _{B_{\frac{R }{2 }}}\le C\int _{B_{R}\setminus B_{\frac{R }{2 }}} u^{2}$$

 $$ \left(C+ 1\right)\int _{B_{\frac{R }{2 }}} u^{2}\le C\int _{B_{R}}u^{2}$$

内部不会把边缘吃干净.  外圈的积分是有占比的. 如果$a_{ij}D_{i}uD_{j}\varphi = 0$

 $$ \int _{B_{R}}\eta ^{2}\left| Du \right|^{2}\le C\int _{B_{R}}\left| D\eta  \right|^{2}\left(u-a\right)^{2}\le \frac{C }{R^{2} }\int _{B_{R}\setminus B_{\frac{R }{2 }}}\left(u-a\right)^{2}   $$                              

通过反复迭代使用这个定理, 可以发现能量随着区域半径的缩小指数级衰减. 

推论的关键是$\theta$与$R$无关. Caccioppoli 就是把导数往测试函数上赶。

通过调整$\eta$, 让$\eta$在里边好, 外边一般, 让$D\eta$在内部没了, 外边好. 然后把导数推给解, 就能联系里边的梯度和外边的值.

能量从外界以一个至少固定的比例衰减地传进来. 随着半径指数级衰减.

解的震荡不能再微观下存在, 而是被迫平坦化.


 $$ \frac{\rho  }{R } $$ 

 

  $$ \int _{B_{\frac{R }{2 }}} u^{2}\le \theta \int _{B_{R}}u^{2}$$

 $$ 2^{k_1}s= \rho  $$

 $2^{k_2}s= r$

 $$ \int _{\rho }u^{2}\le \theta ^{k_2-k_1}\int _{B_{r}}u^{2} $$   

 $$ \frac{r }{\rho  }= 2^{k_2-k_1}s=  $$

 $$ \ln \frac{r }{\rho  }= \left(k_2-k_1\right)\ln 2+ \ln s $$

 $$ \frac{\ln \theta  }{\ln 2 }\ln \frac{r }{\rho  }= \left(k_2-k_1\right)\ln \theta + \frac{\ln \theta  }{\ln 2 }\ln s $$

 $$ \left(\frac{r }{\rho  }\right)^{\frac{\ln \theta  }{\ln 2 }} = C\theta ^{k_2-k_1}$$

 $$ \int _{\rho }^{2}\le C \left(\frac{r }{\rho  }\right)^{\mu } $$     

当半径指数级收缩时, 能量线性衰减

半径线性收缩时, 能量幂次衰减


 $$ \int _{\frac{R }{2^{k} }} u^{2}\le \theta ^{k}\int _{R}u^{2}$$

$\frac{R }{2^{k} }= r$
 $$ k= \log _{2}\frac{R }{r } $$

 $$ \int _{r}u^{2}\le \theta ^{\log _{2}\frac{R }{r }}\int _{R}u^{2} $$  


 $$ \theta ^{\log _{2}\frac{R }{r }}= \left(\frac{R }{r }\right)^{\log _{2}\theta }= \left(\frac{r }{R }\right)^{\log _{\theta }2} $$

关于这个比例是幂函数.

在不同的底数$\frac{1 }{2 }$, $\theta$下, 缩放倍数的指数关于比例的指数是线性的. 那么把底数拉到同一个量级的就是一个幂函数. 缩放的倍数关于比例是幂函数.

固定比例下, 指数之间是线性的, 那么变化比例下, 修正关于比例成幂关系.

 $$ \lambda \left| \xi  \right|^{2}\le a_{ij}\xi _{i}\xi _{j}\le \Lambda \left| \xi  \right|^{2}   $$  


334

度量空间, 赋范空间, 有界线性算子, 内积空间,  紧算子, 紧算子的谱, 

Banach Hilbert

## Functional Analysis Week 1

1.  $$ d\left(f,g\right)= \max _{\left[ a,b \right]}\left| f-g \right|  $$ 

2. $X= \left\{ \left\{ \xi _{k} \right\}_{k= 1}^{\infty}: \xi _{k}\in \mathbb{R}  \right\}$

    distatnce, with $d\left(\xi ,\eta \right)= \sum \frac{1 }{2^{k} }\frac{\left| \xi _{k}-\eta _{k} \right|  }{1+ \left| \xi _{k}-\eta _{k} \right|  }$

3. $X= \left\{ \left[ a,b \right]\text{上的可测函数} \right\}$
     $$ d\left(f,g\right)= \int _{a}^{b}\frac{\left| f\left(t\right)-g\left(t\right) \right|  }{ 1+ \left| f\left(t\right)-g\left(t\right) \right| }\,d t $$ 

4. $X\neq \varnothing$, with 
     $$ d\left(x,y\right)= \begin{cases} 1,\\0,x= y \end{cases}  $$ 

5. $X= \mathbb{R} ^{n}$, with
     $$ d_1\left(x,y\right)= \max _{1\le i\le n}\left| x_{i}-y_{i} \right|  $$ 

6.  $$ X= \ell ^{\infty}= \left\{ \left\{ \xi _{k} \right\}_{k= 1}^{\infty} :\sup _{k}\left| \xi _{k} \right|< \infty  \right\} $$
     $$ d\left(x,y\right)= \sup _{k}\left| \xi _{k}-\eta _{k} \right|  $$ 

7. $X= S^{2}= \begin{cases} x\in R^{3}:\left| x \right|= 1  \end{cases}$
    $$ d\left(x,y\right) = \inf \left\{ \text{Length}\left(\gamma \right), \gamma \text{连接}x,y\text{落在}S^{2}\text{上的连续曲线} \right\} $$ 

### 度量空间的极限

> [!proposition] Proposition: 
> 极限唯一, 子列收敛


$X= C\left[ a,b \right]$ $d\left(f,g\right)= \max _{t\in \left[ a,b \right]}\left| f-g \right|$, 极限代表一致收敛.

3.的可测函数收敛. 等价于依测度收敛. 

 $$ \int _{\left\{ > \sigma  \right\}}\frac{\sigma  }{ 1+ \sigma }\ge \frac{\sigma  }{1+ \sigma  }m\left(\left\{ \left| f-g \right|>\sigma   \right\}\right)\to 0 $$ 

 $$ d\left(f_{n},g\right)\le\frac{\sigma  }{1+ \sigma  }\left| b-a \right| + \int _{m\left\{ \left| f-g \right|> \sigma   \right\}}1 $$ 

$n\to \infty$, $\sigma \to 0$.

 $$ \lim_{d\left(x,x_{0}\right)\to 0} d_1\left(f\left(x\right),f\left(x_0\right)\right)= 0$$ 

 $$\lim_{n\to \infty} \sum _{k= 1}^{\infty}\frac{1 }{2^{k} }\frac{\left| \xi _{n,k}- \eta _{k} \right|  }{1+ \left| \xi _{n,k}-\eta _{k} \right|  }= 0 $$

特别地, 

 $$ \lim_{n\to \infty}\frac{1 }{2^{k} }\frac{\left| \xi _{n,k}-\eta _{k} \right|  }{1+ \left| \xi _{n,k}-\eta _{k} \right|  }\to 0 $$

 $$ \lim_{n\to \infty}\left| \xi _{n,k}-\eta _{k} \right|= 0  $$

希望

 $$ \lim_{n\to \infty}\max _{k}\left| \xi _{n,k}-\eta _{k} \right|= 0  $$ 

对于任意的$\varepsilon > 0$, 存在$N$, 使得任意$n> N$, 对于所有的$k$, $\left| \xi _{n,k}-\eta _{k} \right|\le 0$.