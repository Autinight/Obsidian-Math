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