### 11:01

> [!exercise] **5.10**
> 令
> $$
> G=
> \left\{
> \begin{pmatrix}
> z^1 & z^2\\
> 0 & 1
> \end{pmatrix}
> : z^1,z^2\in\mathbb{C},\ z^1\ne 0
> \right\}.
> $$
> 假定
> $$
> z^1=x^1+\sqrt{-1}x^2,\qquad
> z^2=x^3+\sqrt{-1}x^4.
> $$
> 
> (1) 证明：$G$ 是一个 $4$ 维李群。
> 
> (2) 求李群 $G$ 的 Maurer-Cartan 形式（左不变微分式）。
> 
> (3) 求李群 $G$ 的结构常数。
> 
> (4) 求由
> $$
> \left.\frac{\partial}{\partial x^i}\right|_I,\qquad 1\le i\le 4
> $$
> 决定的单参数子群 $\theta_i(t)$，$1\le i\le 4$。


$$ \theta _{i}\left(t\right)= \exp \left(t \frac{\partial }{\partial x^{i}}|_{I}\right) $$ 

$$ \theta _{1}\left(t\right)= \exp \left(tE_1\right)= \sum _{k = 0}^{\infty}\frac{1 }{k! }t^{k}\left(E_1\right)^{k} $$ 

$$ \left(E_1\right)^{2}=1,\quad  \sum _{k = 0}^{\infty}\frac{1 }{k! }t^{k}\left(E_1\right)=  I+ \left(e^{t}-1\right)E_1= \begin{pmatrix} e^{t}&0\\0&1 \end{pmatrix}$$ 
于是


$$ \begin{aligned} \theta _2 \left(t\right)&= \exp \left(tE_2\right)= \sum _{ k= 0}^{\infty}\frac{1 }{k! }t^{k}\left(E_2\right)^{k}= \sum _{k = 0}^{\infty}\frac{1 }{k! }\left(it\right)^{k}E_1^{k}= I+ \left(e^{it}-1\right)E_1\\&= I+ \left(\cos t-1\right)E_1+ i \sin tE_1\\&= \begin{pmatrix}  \cos t + i\sin t &0\\0& 1\end{pmatrix}\end{aligned}$$ 
$$ E_3^{2}= 0 ,\quad $$
于是
$$ \theta _3\left(t\right)= I+ tE_3=\begin{pmatrix} 1&t\\0&1 \end{pmatrix}  $$  
$$ \theta _4 \left(t\right)= I+  tE_4= \begin{pmatrix} 1&it\\0&1 \end{pmatrix} $$ 
$$ E_{11}E_{11}= E_{11} $$ 


#### 结构常数

$$ T_{e}G= \mathfrak{g}= \operatorname{ker}\left(Df\right) $$ 


$$\mathfrak{g}= \left\{ X \in \mathfrak{gl}\left(2,\mathbb{C} \right): \exp \left(tX\right)\text{落在} G \right\} $$ 


$\mathfrak{gl}\left(2,\mathbb{C} \right)= T_{e}\operatorname{GL} \left(2,\mathbb{C} \right)\simeq M\left(2,\mathbb{C} \right)$

$$ \exp \left(tX\right)= \sum _{ k= 0}^{\infty}t^{k} X^{k} $$ 


$$ \mathfrak{g}= \left\{ \gamma ^{\prime} \left(0\right): \gamma :\left(-\varepsilon ,\varepsilon \right)\to G, \gamma \left(0\right)= I \right\} $$ 

$$ \gamma \left(t\right)= \begin{pmatrix} z^{1}\left(t\right)&z^{2}\left(t\right)\\0&1 \end{pmatrix} $$ 

$$ \gamma ^{\prime} \left(0\right)= \begin{pmatrix} \left(z^{1}\right)^{\prime} \left(0\right)&\left(z^{2}\right)^{\prime} \left(0\right)\\0&0 \end{pmatrix} $$ 

因此
$$ \mathfrak{g}= \left\{ \begin{pmatrix} z^{1}&z^{2} \\0&0\end{pmatrix} : z^{1},z^{2}\in \mathbb{C} \right\} $$ 


Let 
$$ E^{1}= \begin{pmatrix} 1&0\\0&0 \end{pmatrix},\quad E^{2}= \begin{pmatrix} i&0\\0&0 \end{pmatrix}, \quad E^{3}= \begin{pmatrix} 0&1\\0&0 \end{pmatrix},\quad E^{4}= \begin{pmatrix} 0&i\\0&0 \end{pmatrix} $$ 
于是
$$ \mathfrak{g}= \operatorname{span}\left\{ E_1,E_2,E_3,E_4 \right\} $$ 


$$ dz^{1}= dx^{1}+ i dx^{2},\quad dz^{2}= dx^{3}+ i dx^{4} $$ 

于是
$$ \begin{aligned} \omega &= \left(\left(z^{1}\right)^{-1} dx^{1}\right)E_1+ \left(\left(z^{1}\right)^{-1} dx^{2}\right)E_2\\&+ \left(\left(z^{1}\right)^{-1}  dx^{3}\right)E_3+ \left(\left(z^{1}\right)^{-1} dx^{4}\right)E_4  \end{aligned} $$ 

Write $\omega$ as 
$$ \omega = \omega ^{k}E_{k} $$ 
We have 
$$ \omega ^{1}= \left(z^{1}\right)^{-1} dx^{1},\quad \omega ^{2}=\left(z^{1}\right)^{-1} dx^{2},\quad \omega ^{3}= \left(z^{1}\right)^{-1} dx^{3},\quad \omega ^{4}= \left(z^{1}\right)^{-1} dx^{4} $$ 

$$ \left[ E_1,E_j \right]= 0,\quad j= 2,3,4 $$ 

$$ \left[ E_{2},E_3 \right]= E_2E_3-E_3E_2= E_4 $$ 
$$ \left[ E_2,E_4 \right]= E_2E_4-E_4E_2= -E_3 $$ 

$$ \left[ E_3,E_4 \right]= E_3E_4-E_4E_3= 0 $$ 
于是非零的结构常数为
$$ c_{23}^{4} = - c_{32}^{4}=  1,\quad c_{24}^{3}= - c_{42}^{3}=  -1,\quad  $$ 
其余为零.
 

#### Maurer-Cartan形式
矩阵李群的Maurer-Cartan形式, 也就是
$$ \omega _{g}= g^{-1} dg $$ 

$$ \begin{pmatrix} z^{1}&z^{2}\\0&1 \end{pmatrix}^{-1} = \begin{pmatrix} \left(z^{1}\right)^{-1} &-\left(z^{1}\right)^{-1} z^{2}\\0&1 \end{pmatrix} $$ 

于是
$$ \begin{aligned} \omega &= \begin{pmatrix} \left(z^{1}\right)^{-1} &-\left(z^{1}\right)^{-1} z^{2}\\0&1 \end{pmatrix}\begin{pmatrix} dz^{1}&dz^{2}\\0&0 \end{pmatrix}\\&= \begin{pmatrix} \left(z^{1}\right)^{-1} dz^{1}&\left(z^{1}\right)^{-1} dz^{2}\\0&0 \end{pmatrix} \end{aligned} $$ 





#### 四维李群

证明$G$是4维李群.

Todo: 首先证明$G$是群

证明完了之后, 证明$G$是子流形.

也就是说, 映射

$G$是不是$\operatorname{GL} \left(2,\mathbb{C} \right)$的子流形?

$G$是闭的吗,

$$ f: \operatorname{GL} \left(2,\mathbb{C} \right) \to \mathbb{C} ^{2}$$ 

$$\begin{pmatrix} z^{1}&z^{2}\\z^{3}&z^{4} \end{pmatrix}\mapsto \begin{pmatrix} z^{3}&z^{4} \end{pmatrix}$$ 

于是
$$ G= f^{-1} \left(\left(0,1\right)\right) $$ 
$f$是连续映射,  故$G$是闭子集.

故$G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的闭子群. 由Cartan闭子群定理, $G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的嵌入李子群. 并且$G$是余$\operatorname{dim}\mathbb{C} ^{2}= 4$维的, 因此$G$是4维子流形. 故$G$是四维李群.

> [!exercise] **5.11**
> 设 $\theta: \mathbb{R} \to G$ 是 $r$ 维李群 $G$ 的一个单参数子群。命 $\theta'(0) = X \in T_e G$。定义映射 $\tilde{\psi}: \mathbb{R} \times G \to G$ 为
> $$\tilde{\psi}(t, g) = \theta(t) \cdot g,\quad \forall t \in \mathbb{R},\; g \in G.$$
> 证明：$\tilde{\psi}$ 是作用在 $G$ 上的单参数变换群，并且它所诱导的切向量场是由 $X \in T_e G$ 生成的右不变向量场。