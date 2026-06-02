> [!exercise] Exercise 1
> 证明赋范线性空间中的范数由内积诱导当且仅当其满足平行四边形法则。

> [!proof] Proof: 
> 若
> $$ \left\| x \right\|^{2}= \left(x,x\right) $$ 
> 则
> $$ \begin{aligned} &\left\| x+ y \right\|^{2}+ \left\| x-y \right\| ^{2}\\&= \left(x+ y,x+ y\right)+ \left(x-y,x-y\right)\\&= \left(x,x\right)+ \left(x,y\right)+ \left(y,x\right)+ \left(y,y\right)\\&+ \left(x,x\right)-\left(x,y\right)-\left(y,x\right)+ \left(y,y\right)\\&= 2\left(x,x\right)+ 2\left(y,y\right)\\&= 2\left\| x \right\|^{2}+ 2\left\| y \right\|^{2} \end{aligned}$$ 
> 故范数诱导的内积满足平行四边形法则
>
> **反之, 若范数满足平行四边形法则**, 则
> 先考虑实空间的情况, 此时定义
> $$ \left(x,y\right)=\frac{1}{4}\left(\left\| x+ y \right\|^{2}-\left\| x-y \right\|^{2}\right)  $$  
> 易见$\left(x,y\right)$是对称的, 且$\left\| x \right\|^{2}= \left(x,x\right)$, 当$\left(x,x\right)= 0$时, $x= 0$.
>
> 此外, 
> $$ \left(x+ y,z\right)= \frac{1}{4}\left(\left\| x+ y+ z \right\|^{2}-\left\| x+ y-z \right\|^{2}\right) $$ 
> $$ \left\| x+ y+ z \right\|^{2}+ \left\| x-y+ z \right\|^{2}= 2\left\| x+ z \right\|^{2}+ 2\left\| y \right\|^{2} $$ 
> $$ \left\| x-y+ z \right\|^{2}+ \left\|z-y-z \right\|^{2}= 2\left\| x \right\|^{2}+ 2\left\| y+ z \right\|^{2} $$ 
> 于是
> $$ \begin{aligned} \begin{aligned} &\left\| x+ y+ z \right\|^{2}-\left\| x+ y-z \right\|^{2}\\&= 2\left(\left\| x+ z \right\|^{2}+ \left\| y \right\|^{2}-\left\| x \right\|^{2}-\left\| y+ z \right\|^{2}\right)\\&= 2\left\| x+ z \right\|^{2}+ 2\left\| y \right\|^{2}+ 2\left\| z \right\|^{2}-2\left\| x \right\|^{2}-2\left\| z \right\|^{2}-2\left\| y+ z \right\|^{2}\\&=2\left\| x+ z \right\|^{2}+  \left\| y+ z \right\|^{2}+ \left\| y-z \right\|^{2}-\left\| x+ z \right\|^{2}- \left\| x-z \right\|^{2}-2\left\| y+ z \right\|^{2}\\&= \left\| x+ z \right\|^{2}- \left\| y+ z \right\|^{2}+ \left\| y-z \right\|^{2}-\left\|x-z \right\|^{2} \\&= \left(y,z\right)+ \left(x,z\right)\end{aligned} \end{aligned} $$ 
> 于是
> $$ \left(x+ y,z\right) = \left(x,z\right)+ \left(y,z\right)$$ 
> 由对称性.
> $$ \left(x,y+ z\right)= \left(x,y\right)+ \left(x,z\right) $$ 
> 通过对$\left(ky,z\right)= \left(y+ \left(k-1\right)y,z\right)$反复使用上式, 对于任意整数$k$, 我们得到
> 
> $$ \left(ky,z\right)= k\left(y,z\right) $$ 
> 进一步地, 对于非零整数
> $$ \left(y,z\right)= \left(k \left(\frac{1}{k}y\right),z\right)=k \left(\frac{1}{k}y,z\right)  $$ 
> 即
> $$ \left(\frac{1 }{k }y,z\right)= \frac{1}{k}\left(y,z\right) $$ 
> 对于任意的有理数$r\in \mathbb{Q}$, 我们有
> $$ \left(ry,z\right)= r\left(y,z\right) $$ 
> 任取$a\in \mathbb{R}$, 存在一列有理数$r_{n}\to a$, 有$\left(\cdot ,\cdot \right)$的连续性, 得到
> $$ \left(ay,z\right)= \lim_{n\to \infty}\left(r_{n}y,z\right) = \lim_{n\to \infty}r_{n}\left(y,z\right)= a\left(y,z\right)$$ 
> 综上可知$\left(x,y\right)$是一个实内积.
>
> 对于复空间的情况, 定义
> $$ \left(x,y\right) _{0}= \frac{1}{4}\left(\left\| x+ y \right\|^{2}-\left\| x-y \right\|^{2}\right)$$ 
> 定义
> $$ \begin{aligned} \left(x,y\right)&= \frac{1}{4}\left(\left\| x+ y \right\|^{2}-\left\| x-y \right\|^{2}+ i\left\| x+ iy \right\|^{2}-i\left\| x-iy \right\|^{2}\right)\\&= \frac{1}{4}\left(x,y\right)_{0}+ \frac{1}{4}i\left(x,iy\right) _{0}\end{aligned}$$ 
> 上面的过程表明, 
> $$ \left(x+ y,z\right)_{0}= \left(x,z\right)_{0}+ \left(y,z\right)_{0} $$ 
> 以及对于实数$a\in \mathbb{R}$
> $$ \left(ay,z\right)_{0}= a\left(y,z\right) _{0}$$ 
> 于是
> $$ \left(x+ y,z\right)= \left(x,z\right)+ \left(y,z\right) $$ 
> $$ \begin{aligned} \left(ix,y\right)&= \frac{1}{4}\left(\left\| ix+ y \right\|^{2}-\left\| ix-y \right\|^{2}+ i\left\| ix+ iy \right\|^{2}-i\left\| ix-iy \right\|^{2}\right)\\&= \frac{1}{4}\left(\left\| ix+ y \right\|^{2}-\left\| ix-y \right\|^{2}+ i\left\| x+ y \right\|^{2}-i\left\| x-y \right\|^{2}\right)\\&= \frac{1}{4}i\left(\left\| x+ y \right\|^{2}-\left\| x-y \right\|^{2}+ i\left\| x+ iy \right\|^{2}-i\left\| x-iy \right\|^{2}\right) \\&= i\left(x,y\right)\end{aligned}$$ 
> 于是对于任意的$c\in \mathbb{C}$, 
> $$ \left(cx,y\right) = c\left(x,y\right)$$ 
> 最后, 容易验证
> $$ \left(x,y\right) = \overline{\left(y,x\right)}$$ 
> 以及
> $$ \left(x,x\right)= \left\| x \right\|^{2} $$ 

> [!exercise] Exercise 2
> 设 $M$ 是 Hilbert 空间 $H$ 的闭线性子空间，证明商空间 $H / M$ 与 $M$ 的正交补空间 $M^\perp$ 等距同构。

> [!exercise] Exercise 3
> 设 $M$ 是 Hilbert 空间 $H$ 的闭线性子空间，$\{e_n\}$ 与 $\{f_m\}$ 分别是 $M$ 与 $M^\perp$ 的标准正交基。证明：
> $$
> \{e_n\}\cup\{f_m\}
> $$
> 是 $H$ 的标准正交基。

> [!exercise] Exercise 4
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$f$ 是 $M$ 上的有界线性泛函。证明 $f$ 有且只有一个到 $H$ 上的保范延拓，使得这个延拓在 $M^\perp$ 上为零。

> [!exercise] Exercise 5
> 设 $M$ 是 Hilbert 空间 $H$ 中的非空子集，证明 $(M^\perp)^\perp$ 是包含 $M$ 的最小闭子空间。

> [!exercise] Exercise 6
> 证明在可分内积空间中，任一标准正交系至多为一可数集。

> [!exercise] Exercise 7
> 求
> $$
> \min_{\alpha,\beta,\gamma}\int_{-1}^{1}
> \left|t^3-\alpha-\beta t-\gamma t^2\right|^2\,dt.
> $$

> [!exercise] Exercise 8
> 设 $f_1,f_2$ 是 Hilbert 空间 $H$ 上的有界线性泛函，若 $\ker f_1\subset \ker f_2$，证明存在 $\alpha\in\mathbb K$，使得
> $$
> f_2=\alpha f_1.
> $$

> [!exercise] Exercise 9
> 设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的一个标准正交集，证明：$\{e_n\}$ 是完备的，当且仅当 $\{e_n\}$ 张成的子空间在 $H$ 中稠密。

> [!exercise] Exercise 10
> 设 $X$ 是 Banach 空间，$H$ 是 Hilbert 空间，证明从 $X$ 到 $H$ 的有限秩算子空间在 $\mathcal K(X,H)$ 中稠密。

> [!exercise] Exercise 11
> 设 $H$ 是 Hilbert 空间，$T:H\to \mathbb K^n$ 是一个满的有界线性算子，$\{e_i\}_{i=1}^n$ 是 $\mathbb K^n$ 的标准正交基。证明存在有限个线性无关的元 $\{y_1,y_2,\cdots,y_n\}\subset H$，使得
> $$
> T(x)=\sum_{i=1}^n \langle y_i,x\rangle e_i,\quad \forall x\in H.
> $$


> [!exercise] Exercise 12
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$T$ 是 $M$ 上的有界线性算子，证明在 $H$ 上存在一个有界线性算子 $\widetilde T$，使得在 $M$ 上 $\widetilde T$ 与 $T$ 相等并且
> $$
> \|\widetilde T\|\leq \|T\|_M.
> $$

> [!exercise] Exercise 13
> 设 $\{e_k\},\{e'_k\}$ 是 Hilbert 空间 $H$ 中的两个标准正交系，并且
> $$
> \sum_{k=1}^{\infty}\|e_k-e'_k\|^2<1.
> $$
> 证明：如果 $\{e_n\},\{e'_n\}$ 中之一是完备的，则另一个也是完备的。
