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

> [!exercise] Exercise: 3.21
> 设 $X=y\frac{\partial}{\partial x}-x\frac{\partial}{\partial y}$ 是 $\mathbb{R}^2$ 上的光滑切向量场, 求 $X$ 所生成的单参数变换群.

> [!exercise] Exercise: 3.25
> 假定 $X$ 是 $n$ 维光滑流形 $M$ 上的光滑切向量场, 并且它的支撑集
> $$ \operatorname{Supp}(X) = \overline{\{p \in M : X(p) \neq 0\}} $$
> 是紧致的. 证明: 存在作用在光滑流形 $M$ 上的单参数变换群 $\varphi: \mathbb{R} \times M \to M$, 使得它所诱导的光滑切向量场是 $X$.

