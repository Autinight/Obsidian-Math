代靖涵 25120222201319

> [!exercise] Exercise: 3.18
> 设 $M=GL(2,\mathbb{R})$. 定义 $\mathbb{R}$ 在 $M$ 上的作用为
> $$\theta(t,A)=\begin{pmatrix}1&t\\0&1\end{pmatrix}\cdot A,\quad\forall A\in M.$$
> 证明: $\theta:\mathbb{R}\times GL(2,\mathbb{R})\to GL(2,\mathbb{R})$ 是作用在 $GL(2,\mathbb{R})$ 上的单参数变换群, 并且求它的诱导切向量场.

> [!proof] Proof: 
> 易见
> 1. $\theta$是光滑映射. 
> 2. $\theta \left(0,A\right)= I\cdot A= A$. 
> 3.  注意到
>      $$ \begin{pmatrix} 1&t+ s\\0&1 \end{pmatrix}= \begin{pmatrix} 1&t\\0&1 \end{pmatrix}\begin{pmatrix} 1&s\\0&1 \end{pmatrix} $$
>     故$\theta \left(t+ s,A\right)= \theta \left(t,\theta \left(s,A\right)\right)$
> 
> 因此$\theta$是一个单参数变换群.
>
> 它在$A$处诱导的切向量场为
>  $$ \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\theta \left(t,A\right)= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\left(\begin{pmatrix} 1&t\\0&1 \end{pmatrix}\cdot A\right)= \begin{pmatrix} 0&1\\0&0\end{pmatrix}\cdot A\in \mathbb{R} ^{4}\simeq T_{A}\operatorname{GL} \left(2,\mathbb{R} \right) $$ 
> 即若设$A= \begin{pmatrix} a&b\\c&d \end{pmatrix}$, 则诱导的向量场
>  $$ X_{A}= \begin{pmatrix} 0&0\\c&d \end{pmatrix} $$ 

> [!exercise] Exercise: 3.19
> 假设 $M=\mathbb{R}^3=\{(x, y, z): x, y, z\in\mathbb{R}\}$, 定义 $\mathbb{R}$ 在 $M$ 上的作用为
> $$\varphi(t, (x, y, z))=(x\cos at+y\sin at, -x\sin at+y\cos at, z+bt),$$
> 其中 $a, b$ 是两个取定的实数. 证明: $\varphi:\mathbb{R}\times M\to M$ 是作用在 $M$ 上的一个单参数变换群, 并且求它的诱导向量场. 

> [!proof] Proof: 
> 1. 易见$\varphi$是一个光滑映射
> 2.  $$ \varphi \left(0,\left(x,y,z\right)\right)= \left(x\cdot 1+ y\cdot 0,-x\cdot 0+ y\cdot 1,z+ 0\right)= \left(x,y,z\right) $$
> 3. 注意到
>    $$ \varphi \left(t,\left(x,y,z\right)\right)^{T}= \begin{pmatrix}  \cos at &\sin at & 0\\-\sin  at &\cos at & 0\\0& 0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix} + \begin{pmatrix} 0\\0\\bt \end{pmatrix}$$  
>    记$R\left(\theta \right)= \begin{pmatrix} \cos \theta &\sin \theta \\-\sin \theta &\cos \theta  \end{pmatrix}$
>    则 
>    $$ \begin{aligned} \varphi \left(t_1+ t_2,\left(x,y,z\right)\right)^{\top}&= \begin{pmatrix} R\left(at_1+ at_2\right)&0\\0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}+ \begin{pmatrix} 0\\0\\b\left(t_1+ t_2\right) \end{pmatrix}\\&= \begin{pmatrix} R\left(at_1\right)&0\\0&1 \end{pmatrix}\begin{pmatrix} R\left(at_2\right)&0\\0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}+ \begin{pmatrix} 0\\0\\bt_1 \end{pmatrix} + \begin{pmatrix} 0\\0\\bt_2 \end{pmatrix}\\&= \begin{pmatrix} R\left(at_1\right)&0\\0&1 \end{pmatrix}\left(\begin{pmatrix} R\left(at_2\right)&0\\0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}+ \begin{pmatrix} 0\\0\\bt_2 \end{pmatrix}\right)+ \begin{pmatrix} 0\\0\\bt_1 \end{pmatrix}\\&= \varphi \left(t_1, \varphi \left(t_2,\left(x,y,z\right)\right)\right)^{T}\end{aligned} $$ 
>       因此
>       $$ \varphi \left(t_1+ t_2,\left(x,y,z\right)\right)= \varphi \left(t_1,\varphi \left(t_2,\left(x,y,z\right)\right)\right) $$ 
>
> 以上表明$\varphi$是$M$上的一个单参数变换群
> 设$p_0= \left(x_0,y_0,z_0\right)$, 则$p_0$处的诱导向量场为
>  $$ \begin{aligned} X_{p_0}&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\left(\varphi \left(t,p_0\right)\right)= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\left(x_0 \cos at+ y_0\sin at,-x_0\sin at+ y_0\cos at,z_0+ bt\right)\\&=\left(ay_0,-ax_0,b\right) \in \mathbb{R} ^{3}\simeq T_{p_0}\mathbb{R} ^{3}\end{aligned} $$ 
> 

> [!exercise] Exercise: 3.21
> 设 $X=y\frac{\partial}{\partial x}-x\frac{\partial}{\partial y}$ 是 $\mathbb{R}^2$ 上的光滑切向量场, 求 $X$ 所生成的单参数变换群.

> [!proof] Proof: 
> 设$\varphi:\mathbb{R} \times \mathbb{R} ^{2}\to \mathbb{R} ^{2}$是$X$所生成的单参数变换群, 即$\varphi ^{\left(x,y\right)}\left(t\right)= \varphi \left(t,\left(x,y\right)\right)$则
> 设
>  $$ \varphi _{t}\left(x,y\right)= \varphi ^{\left(x,y\right)}\left(t\right)= \left(x\left(t\right),y\left(t\right)\right) $$ 
> 
> 则由
>   $$ \varphi ^{\left(x,y\right)}\left(t+ s\right) = \varphi ^{\varphi _{t}\left(x,y\right)}\left(s\right)$$ 
> 可得
>  $$ \left(\varphi ^{\left(x,y\right)}\right) ^{\prime} \left(t\right)= \left(\varphi ^{\varphi _{t}\left(x,y\right)}\right)^{\prime} \left(0\right)= X_{\varphi _{t}\left(x,y\right)}= \left(y\left(t\right),-x\left(t\right)\right)$$ 
> 另一方面
>  $$ \left(\varphi ^{\left(x,y\right)}\right)^{\prime} \left(t\right)= \left(x^{\prime} \left(t\right),y^{\prime} \left(t\right)\right) $$ 
> 得到
>  $$ \begin{cases} x^{\prime} \left(t\right)= y\left(t\right)\\y^{\prime} \left(t\right)= -x\left(t\right) \end{cases} $$ 
> 并且$x\left(0\right)= x$, $y\left(0\right)= y$, 进而$x^{\prime} \left(0\right)= y$, $y^{\prime} \left(0\right)= -x$. 得到
>  $$ \begin{cases} x\left(t\right)= x\cos t+ y\sin t\\y\left(t\right)= y\cos t-x\sin t \end{cases}  $$ 
> 于是
>  $$ \varphi \left(t,\left(x,y\right)\right)= \left(x\cos t+ y\sin t,y\cos t-x\sin t\right) $$ 
> 为$X$所生成的单参数变换群.

> [!exercise] Exercise: 3.25
> 假定 $X$ 是 $n$ 维光滑流形 $M$ 上的光滑切向量场, 并且它的支撑集
> $$ \operatorname{Supp}(X) = \overline{\{p \in M : X(p) \neq 0\}} $$
> 是紧致的. 证明: 存在作用在光滑流形 $M$ 上的单参数变换群 $\varphi: \mathbb{R} \times M \to M$, 使得它所诱导的光滑切向量场是 $X$.

> [!proof] Proof: 
> 由流的基本定理, 存在唯一的$X$的光滑极大流$\varphi :\mathscr{D}\to M$. 这里$\mathscr{D}$是开集, 使得每个$\mathscr{D}^{\left(p\right)}:= \left\{ t\in \mathbb{R} : \left(t,p\right)\in \mathscr{D} \right\}$是包含了零的开区间. 
> 我们需要证明对于每个$p\in M$, $\mathscr{D}^{\left(p\right)}= \mathbb{R}$.
>
>  任取$p\in \operatorname{supp}\left(X\right)$, 则$\left(0,p\right)\in \mathscr{D}$. 由于$\mathscr{D}$是开集, 存在$\varepsilon _{p}> 0$, 以及$p$在$M$中的开邻域$U_{p}$, 使得$\left(-\varepsilon _{p},\varepsilon _{p}\right)\times U_{p}\subseteq \mathscr{D}$. 由于 $\operatorname{supp}X$是紧的,  存在有限多个$p_1,\cdots ,p_{m}$, 使得
>  $$ \operatorname{supp}\left(X\right)\subseteq \bigcup _{i= 1}^{m}U_{p_{i}} $$ 
> 令
>  $$ \varepsilon = \min \left\{ \varepsilon _{p_1},\cdots ,\varepsilon _{p_{m}} \right\} $$ 
>  $\left(-\varepsilon ,\varepsilon \right)\times \operatorname{supp}\left(X\right)\subseteq \mathscr{D}$.  对于$p\not \in \operatorname{supp}\left(X\right)$, 由于$X_{p}= 0$, $\varphi ^{\left(p\right)}\left(t\right):\mathbb{R} \to M$, $\varphi ^{\left(p\right)}\left(t\right)=p$是$X$的过$p$的积分曲线. 而极大积分曲线唯一, 且定义域为$\mathscr{D}^{\left(p\right)}$, 因此$\mathscr{D}^{\left(p\right)}= \mathbb{R}(p\not \in \operatorname{supp}X)$.
> 我们得到$\left(-\varepsilon ,\varepsilon \right)\times M\subseteq \mathscr{D}$.
>
> 最后, 断言对于任意的$p\in M$, $\mathscr{D}^{\left(p\right)}= \mathbb{R}$. 若不然, 不妨设$\mathscr{D}^{\left(p\right)}$有上界$a_{p}$,  即$\varphi ^{\left(p\right)}:\mathscr{D}^{\left(p\right)}\to M$是从$p$出发的$X$的积分曲线. 令$\tilde{p}= \varphi ^{\left(p\right)}\left(a_{p}-\frac{\varepsilon  }{2 }\right)$, 则 $\left(-\varepsilon ,\varepsilon \right)\subseteq D^{\left(\tilde{p}\right)}$, 即$\varphi ^{\left(\tilde{p}\right)}$至少在$\left(-\varepsilon ,\varepsilon \right)$上有定义. 但是定义
>  $$ \psi ^{\left(p\right)}\left(t\right)= \begin{cases} \varphi ^{\left(p\right)}\left(t\right),&t\in \mathscr{D}^{\left(p\right)}\\\varphi ^{\left(\tilde{p}\right)}\left(t-a_{p}+ \frac{\varepsilon  }{2 }\right),&a_{p}-\frac{3\varepsilon  }{2 }<  t< a_{p}+ \frac{\varepsilon  }{2 }\end{cases}  $$ 
> $\mathscr{D}^{\left(p\right)}\cap \left(a_{p}-\frac{3\varepsilon  }{2 },a_{p}+ \frac{\varepsilon  }{2 }\right)$非空, 且在其上, 由群性质
>  $$ \varphi ^{\left(\tilde{p}\right)}\left(t-a_{p}+ \frac{\varepsilon  }{2 }\right)= \varphi \left(t-a_{p}+ \frac{\varepsilon  }{2 }, \tilde{p}\right)= \varphi \left(t-a_{p}+ \frac{\varepsilon  }{2 }, \varphi \left(a_{p}-\frac{\varepsilon  }{2 },p\right)\right)= \varphi ^{\left(p\right)}\left(t\right) $$ 
> 故$\psi ^{\left(p\right)}\left(t\right)$是良定义且光滑的. 且在$a_{p}-\frac{3\varepsilon  }{2 }< t< a_{p}+ \frac{\varepsilon  }{2 }$上, 
>  $$ \left(\psi ^{\left(p\right)}\right) ^{\prime} \left(t\right)= \left(\varphi ^{\left(\tilde{p}\right)}\right)^{\prime} \left(t-a_{p}+ \frac{\varepsilon  }{2 }\right)= X_{\varphi ^{\left(\tilde{p}\right)}\left(t-a_{p}+ \frac{\varepsilon  }{2 }\right)}= X_{\psi ^{\left(p\right)}\left(t\right)}$$ 
> 在$\mathscr{D}^{\left(p\right)}$上
>  $$ \left(\psi ^{\left(p\right)}\right)^{\prime} \left(t\right)= \left(\varphi ^{\left(p\right)}\right)^{\prime} \left(t\right)= X_{\varphi ^{\left(p\right)}\left(t\right)}= X_{\psi ^{\left(p\right)}\left(t\right)} $$ 
> 因此$\psi ^{\left(p\right)}$是以$p$为原点的$X$的积分曲线, 这与$\varphi ^{\left(p\right)}$是极大积分曲线矛盾. 因此断言成立, $\mathscr{D}^{\left(p\right)}= \mathbb{R}$.
>
> 最终, 我们知道$\mathscr{D}= \mathbb{R} \times M$, 给出了$X$的全局流(即单参数变换群)$\varphi :\mathbb{R} \times M\to M$.