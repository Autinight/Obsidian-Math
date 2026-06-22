代靖涵 25120222201319

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

> [!proof] Proof: 
> 任取$\left[ y \right]\in H/M$, 则由于$M$是闭的凸子空间, 存在$y$在$M$上的唯一最佳逼近$x_0$, 于是
> $$ \left\| \left[ y \right] \right\|_{H/M}= \left\| y-x_0 \right\|_{M}= \inf _{x \in M}\left\| y-x \right\| $$  
> 又在Hilbert空间的闭线性子空间上, $x_0$是$y$的最佳逼近, 当且仅当$y-x_0\in M$,
> 我们定义
> $$ \begin{aligned} \varphi : H/M&\to M^{\perp},\\ \left[ y \right]&\mapsto y-x_0\end{aligned} $$ 
> 为了说明$\varphi$良定义, 设$y_1,y_2\in H$, 使得$y_1-y_2\in M$, 并且$x_0,x_0^{\prime}$分别是$y_1,y_2$的最佳逼近. 则
> 则$y_1-x_0\in M^{\perp}$, $y_2-x_0^{\prime} \in M^{\perp}$, 我们有
> $$ \begin{aligned} &\left(y_1-y_2-\left(x_0-x_0^{\prime} \right), y_1-y_2-\left(x_0-x_0^{\prime} \right)\right)\\&= \left(\left(y_1-y_2\right)-\left(x_0-x_0^{\prime} \right), \left(y_1-x_0\right)-\left(y_2-x_0^{\prime} \right)\right)\end{aligned} $$ 
> 其中$\left(y_1-y_2\right)-\left(x_0-x_0\right)^{\prime} \in M$, $\left(y_1-x_0\right)-\left(y_2-x_0^{\prime} \right)\in M^{\perp}$. 于是
> $$ \left\| y_1-y_2 -\left(x_0-x_0\right)^{\prime} \right\|^{2}= 0 $$ 
> 故
> $$ y_1-x_0= y_2-x_0^{\prime}  $$ 
> 这表明$\varphi$是良定义的.
> 此外, 若$x_0$是$y_1$的最佳逼近, $x_0^{\prime}$是$y_2$的最佳逼近, 则$y_1-x_0\in M^{\perp}, y_2-x_0^{\prime} \in M^{\perp}$, 进而$\left(y_1+ ky_2\right)-\left(x_0+ kx_0^{\prime} \right)\in M^{\perp}$. 因此
> $$ \varphi \left(\left[ y_1+ ky_2 \right]\right) =\varphi \left(\left[ y_1 \right]\right)+ k \varphi \left(\left[ y_2 \right]\right)$$ 
> 故$\varphi$是线性映射. 并且
> $$ \left\| \left[ y \right] \right\|_{H/M}= \left\| y-x_0 \right\|_{M}= \left\| \varphi \left(y\right) \right\| $$ 
> 故$\varphi$是等距同构.

> [!exercise] Exercise 3
> 设 $M$ 是 Hilbert 空间 $H$ 的闭线性子空间，$\{e_n\}$ 与 $\{f_m\}$ 分别是 $M$ 与 $M^\perp$ 的标准正交基。证明：
> $$
> \{e_n\}\cup\{f_m\}
> $$
> 是 $H$ 的标准正交基。

> [!proof] Proof: 
> 易见$\left\{ e_{n} \right\}\cup \left\{ f_{m} \right\}$中的元是两两正交的, 只需要证明$\overline{\operatorname{span}\left(\left\{ e_{n} \right\}\cup \left\{ f_{n} \right\}\right)}= M$
>
> 任取$x\in H$, 设$y$是$x$在$M$上的最佳逼近, 则$x-y\in M^{\perp}$, 记$x^{\perp}= x-y$, 则
> $$ x= y+ x^{\perp} $$ 
> 由于$\left\{ e_{n} \right\}$是$M$的正交基, 我们有
> $$ y= \sum \left(e_{n},y\right) e_{n}$$ 
> 由于$\left\{ f_{m} \right\}$是$M^{\perp}$的正交基, 我们有
> $$ x^{\perp}= \sum \left(f_{m},x^{\perp}\right)f_{m} $$ 
> 于是
> $$ x= \sum \left(e_{n},y\right)e_{n}+ \sum \left(f_{m},y\right)f_{m} $$ 
> 这表明$x\in \overline{\operatorname{span}\left(\left\{ e_{n} \right\}\cup \left\{ f_{m} \right\}\right)}$.  因此$\left\{ e_{n} \right\}\cup \left\{ f_{m} \right\}$是$H$的标准正交基.


> [!exercise] Exercise 4
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$f$ 是 $M$ 上的有界线性泛函。证明 $f$ 有且只有一个到 $H$ 上的保范延拓，使得这个延拓在 $M^\perp$ 上为零。

> [!proof] Proof: 
> $$ H= \overline{M}\oplus M^{\perp} $$ 
> 任取$h\in H$, 有分解
> $$ h= h_{\overline{M}}+ h_{M^{\perp}} $$ 
> 我们定义
> $$ \begin{aligned} F: H&\to \mathbb{F}\\ h &\mapsto f\left(h_{\overline{M}}\right) \end{aligned} $$ 
> 由正交分解的唯一性, 可知$F$是线性映射. 此外
> $$ \left\| F\left(h\right) \right\|= \left\| f\left(h_{\overline{M}}\right) \right\|\le \left\| f \right\|\left\| h_{\overline{M}} \right\|\le \left\| f \right\|\left\| h \right\| $$ 
> 故
> $$ \left\| F \right\|\le \left\| f \right\| $$ 
> 此外, 由于$F|_{M}= f$, 易见$\left\| F \right\|\ge \left\| F|_{M} \right\|= \left\| f \right\|$, 因此$\left\| F \right\|= \left\| f \right\|$.
> 故$F$是$f$的一个保范延拓, 且在$M^{\perp}$上为零.
>
> 假设$G$是$f$的另一个延拓, 使得其在$M^{\perp}$上为零, 则
> $$ \left(F-G\right)|_{M} = 0,\quad \left(F-G\right)|_{M^{\perp}}= 0$$ 
> 于是$F-G= 0$, 即$F= G$, 因此这样的延拓是唯一的. 
>

> [!exercise] Exercise 5
> 设 $M$ 是 Hilbert 空间 $H$ 中的非空子集，证明 $(M^\perp)^\perp$ 是包含 $M$ 的最小闭子空间。

> [!proof] Proof: 
> 任取$x \in M$, 我们有
> $$ \left(x, y\right)= 0,\forall y\in M^{\perp} $$ 
> 因此$x\in \left(M^{\perp}\right)^{\perp}$. 故$M\subseteq \left(M^{\perp}\right)^{\perp}$
>
> 任取$\left(M^{\perp}\right)^{\perp}$上的收敛点列$\left\{ x_{n} \right\}$,设$\lim_{n\to \infty}x_{n}= x$. 则对于任意的 $y\in M^{\perp}$, 我们有
> $$ \left(x_{n},y\right)= 0 $$ 
> 由内积的连续性, 我们有
> $$ \left(x,y\right)= \lim_{n\to \infty}\left(x_{n},y\right)= 0 $$ 
> 因此$x\in \left(M^{\perp}\right)^{\perp}$. 这表明$\left(M^{\perp}\right)^{\perp}$是闭子集.
> 若$x_1\in \left(M^{\perp}\right)^{\perp}$, $x_2\in \left(M^{\perp}\right)^{\perp}$, 则对于任意的$y\in M^{\perp}$, 我们有
> $$ \left(x_1,y\right)= \left(x_2,y\right)= 0 $$ 
> 于是
> $$ \left(x_1+ cx_2,y\right)= 0 $$
> 这表明$x_1+ cx_2\in \left(M^{\perp}\right)^{\perp}$.因此$\left(M^{\perp}\right)^{\perp}$是线性子空间. 故$\left(M^{\perp}\right)^{\perp}$是包含了$M$的一个线性子空间. 
>
> 现在任取包含了$M$的闭子空间$N$, 由于$M\subseteq N$, 若$z\in N^{\perp}$, 则$z\in M^{\perp}$, 即$N^{\perp}\subseteq M^{\perp}$
> 于是任取$x\in \left(M^{\perp}\right)^{\perp}$, 考虑$H$的正交分解
> $$ H= N\oplus N^{\perp} $$ 
> 则
> $$ x= x_{N}+ x_{N^{\perp}} $$ 
> $x_{N^{\perp}}\in N^{\perp}\subseteq M^{\perp}$, 故$x_{N^{\perp}}\in M^{\perp}$. 而$x\in \left(M^{\perp}\right)^{\perp}$, 于是
> $$ \left(x, x_{N^{\perp}}\right)= 0 $$ 
> 于是
> $$ \left(x_{N}, x_{N^{\perp}}\right)+ \left(x_{N^{\perp}},x_{N^{\perp}}\right)= 0 $$ 
> 其中$\left(x_{N},x_{N^{\perp}}\right)= 0$, 故$\left(x_{N^{\perp}},x_{N^{\perp}}\right)= 0$, $x_{N^{\perp}}= 0$. 因此$x= x_{N}\in N$. 这表明$\left(M^{\perp}\right)^{\perp}\subseteq N$.

> [!exercise] Exercise 6
> 证明在可分内积空间中，任一标准正交系至多为一可数集。

> [!proof] Proof: 
> 设$H$是可分的内积空间. 设$D= \left\{ x_{n} \right\}$是$H$的一个可数的稠密子集.
>
> 任取$H$的标准正交系$E$. 任取$e\in E$, 存在 $x\left(e\right)\in D$, 使得
> $$ \left\| e-x\left(e\right) \right\|< \frac{1 }{3 } $$ 
> 我们证明
> $$ e\mapsto x\left(e\right) $$ 
> 是单射.
> 事实上, 若$e,f\in E$, $e\neq f$, 则
> $$ \left\| e-f \right\|^{2}= \left\| e \right\|^{2}+ \left\| f \right\|^{2}-2\operatorname{Re}\left(e,f\right)= 2 $$ 
> 于是
> $$ \left\| e-f \right\|= \sqrt{2} $$ 
> 如果$x\left(e\right)= x\left(f\right)$, 则由三角不等式
> $$ \left\| e-f \right\|le\left\| e-x\left(e\right) \right\|+ \left\| x\left(f\right)-f \right\|< \frac{1}{3}+ \frac{1}{3}= \frac{2}{3} $$ 
> 与
> $$ \left\| e-f \right\|= \sqrt{2} $$ 
> 矛盾. 因此$e\mapsto x\left(e\right)$是但是, $E$是至多可数的.

> [!exercise] Exercise 7
> 求
> $$
> \min_{\alpha,\beta,\gamma}\int_{-1}^{1}
> \left|t^3-\alpha-\beta t-\gamma t^2\right|^2\,dt.
> $$

> [!proof] Proof: 
> 在$L^{2}\left[ -1,1 \right]$上, 我们寻找$t^{3}$在闭线性子空间
> $$ M=\operatorname{span}\left\{ 1,t,t^{2} \right\} $$ 
> 上的最佳逼近.
> $L^{2}\left[ -1,1 \right]$正交分解为
> $$ L^{2}\left[ -1,1 \right] = M\oplus M^{\perp}$$ 
> 设
> $$ t^{3}=  x_{M}+ x_{M^{\perp}} $$ 
> 则由于$t^{3}$是奇函数 $1,t^{2}$是偶函数, 我们有
> $$ \left(t^{3},1\right)= 0,\quad \left(t^{3},t^{2}\right)= 0 $$ 
> 于是$x_{M}= \frac{\left(t^{3},t\right) }{\left(t,t\right) }t=\frac{3}{5}t$.
> 于是
> $$ t^{3}= \frac{3}{5}t+ x_{M^{\perp}} $$ 
> $t^{3}-\frac{2 }{5 }t= x_{M^{\perp}}$.  因此$\frac{2}{5}t$是$t^{3}$在$x_{M^{\perp}}$上的最佳逼近 我们有
> $$ \min _{\alpha ,\beta ,\gamma }\int _{-1}^{1}\left| t^{3}-\alpha -\beta t-\gamma t^{2} \right|^{2}\,d t= \int _{-1}^{1}\left(t^{3}-\frac{3 }{5 }t\right)^{2}\,d t= \frac{8}{175}  $$ 

> [!exercise] Exercise 8
> 设 $f_1,f_2$ 是 Hilbert 空间 $H$ 上的有界线性泛函，若 $\ker f_1\subset \ker f_2$，证明存在 $\alpha\in\mathbb K$，使得
> $$
> f_2=\alpha f_1.
> $$

> [!proof] Proof: 
> 若$f_1= 0$, 则$\operatorname{ker}f_1= H$, 故而$\operatorname{ker}f_2= H$, $f_2= 0$, 此时$\alpha$取任意值即可.
>
> 下设$f_1\neq 0$, 设$x_0\in H$, 使得$f_1\left(x_0\right)\neq 0$, 则对于任意的$x\in H$, 我们有
> $$ y= x-\frac{f_1\left(x\right) }{f_1\left(x_0\right) }x_0 $$ 
> 则
> $$ f_1\left(y\right)= f_1\left(x\right)-\frac{f_1\left(x\right) }{f_1\left(x_0\right) }f\left(x_0\right) = 0$$ 
> 所以$y\in \operatorname{ker}f_1$, 由于$\operatorname{ker}f_1\subseteq \operatorname{ker}f_2$, 有$y\in \operatorname{ker}f_2$, 于是$f_2\left(y\right)= 0$. 因此
> $$ 0= f_2\left(x-\frac{f_1\left(x\right) }{f_1\left(x_0\right) }x_0\right)= f_2\left(x\right)-\frac{f_1\left(x\right) }{f_1\left(x_0\right) }f_2\left(x_0\right) $$ 
> 因此
> $$ f_2\left(x\right)= \frac{f_2\left(x_0\right) }{f_1\left(x_0\right) }f_1\left(x\right) $$ 

> [!exercise] Exercise 9
> 设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的一个标准正交集，证明：$\{e_n\}$ 是完备的，当且仅当 $\{e_n\}$ 张成的子空间在 $H$ 中稠密。

> [!proof] Proof: 
> 令
> $$ M= \operatorname{span}\left\{ e_{n}: n\in \mathbb{N}  \right\} $$ 
> 则任取$x\in H$, 我们有
> $x\in M^{\perp}\iff \left(x,y\right)= 0,\forall y\in M$. 由于$M$上的任意元素都是有限的线性组合, 因此
> $$ x\in M^{\perp}\iff \left(x,e_{n}\right)= 0, \forall n $$ 
> 于是
> $$ M^{\perp}= \left\{ x\in H: \left(x,e_{n}\right)= 0, \forall n \right\} $$ 
> 若$\left\{ e_{n} \right\}$完备, 我们有
> $$ \left(x,e_{n}\right)= 0\implies x= 0 $$ 
> 于是
> $$ M^{\perp}= 0 $$ 
> 另一方面, 任取$H$的子空间$M$, 我们有
> $$ \overline{M}= H\iff M^{\perp}= \left\{ 0 \right\} $$ 
> 事实上, 若$M^{\perp}= H$, 则任取$x\in M^{\perp}$, 我们有$\left(x,H\right)= 0$, 进而$x= 0$. 反过来, 若$\overline{M}\neq H$, 则存在非零向量$x\in \left(\overline{M}\right)^{\perp}= M^{\perp}$, 于是$M^{\perp}\neq \left\{ 0 \right\}$
> 因此$\left\{ e_{n} \right\}$完备, 当且仅当$M^{\perp}= \left\{ 0 \right\}$, 当且仅当$\overline{M}= H$, 即$\left\{ e_{n} \right\}$完备.

> [!exercise] Exercise 10
> 设 $X$ 是 Banach 空间，$H$ 是 Hilbert 空间，证明从 $X$ 到 $H$ 的有限秩算子空间在 $\mathcal K(X,H)$ 中稠密。

> [!proof] Proof: 
> 设$T\in \mathcal{K}\left(X,H\right)$,  令
> $$ K:= \overline{T\left(B_{X}\right)} $$ 
> 是$H$中的紧集, $H$也是完全有界的, 任取$\varepsilon > 0$, 存在$K$的一个$\varepsilon$-网$y_1,\cdots ,y_{n}$.
> 令
> $$ M= \operatorname{span}\left\{ y_1,\cdots ,y_{n} \right\} $$ 
> 则
> $$ H= M\oplus M^{\perp} $$ 
> 设$P_{M}: H\to M$是正交投影. 定义$S= P_{M}T: X\to H$, 由于$S\left(X\right)\subseteq M$, 而$M$是有限维的, 我们有$S$是有限秩的.
> 若$\left\| x \right\|\le 1$, 则$Tx\in K$, 存在$y_{j}\in M$, 使得
> $$ \left\| Tx-y_{j} \right\|< \varepsilon  $$ 
> 又$P_{M}Tx$是$Tx$到$M$的最佳逼近, 我们有
> $$ \left\| Tx-Sx \right\|\le \left\| Tx-y_{j} \right\| < \varepsilon $$ 
> 对于所有的$x$成立,
> $$ \left\| T-x \right\|\le \varepsilon  $$ 
> 由于$\varepsilon > 0$ 是任取的, 我们有有限秩算子在$\mathcal{K}\left(X,H\right)$中稠密.

> [!exercise] Exercise 11
> 设 $H$ 是 Hilbert 空间，$T:H\to \mathbb K^n$ 是一个满的有界线性算子，$\{e_i\}_{i=1}^n$ 是 $\mathbb K^n$ 的标准正交基。证明存在有限个线性无关的元 $\{y_1,y_2,\cdots,y_n\}\subset H$，使得
> $$
> T(x)=\sum_{i=1}^n \langle y_i,x\rangle e_i,\quad \forall x\in H.
> $$

> [!proof] Proof: 
> 对于$i\in \left\{ 1,\cdots,n  \right\}$, 定义
> $$ \begin{aligned} f_{i}: H&\to \mathbb{K}\\ x &\mapsto \left< T\left(x\right), e_{i} \right>\end{aligned} $$ 
> 易见$x$是线性的. 并且
> $$ \left| f_{i}\left(x\right) \right| = \left| \left< T\left(x\right),e_{i} \right> \right|\le \left\| T\left(x\right) \right\|\left\| e_{i} \right\|\le \left\| T \right\|\left\| x \right\|  $$ 
> 因此$\left\| f_{i} \right\|\le \left\| T \right\|$, 故$f_{i}$是有界线性泛函.
>
> 有Riesze表示定理, 存在唯一的$y_{i}\in H$, 使得
> $$ f_{i}\left(x\right)= \left< y_{i},x \right> $$ 
> 此时
> $$ T\left(x\right)= \sum _{i = 1}^{n}\left< T\left(x\right),e_{i} \right> e_{i}= \sum _{i= 1}^{n}f_{i}\left(x\right)e_{i}= \sum _{i= 1}^{n}\left< y_{i},x \right>e_{i}$$ 
>
> 由于$T$是满的算子, 对于每个$i$, 存在$x_{i}\in H$, 使得
> $$ T\left(x_{i}\right)= \sum _{j= 1}^{n}\left< y_{j}, x_{i}\right>e_{j}= e_{i} $$ 
> 得到
> $$ \left< y_{j},x_{i} \right>= \delta _{ji} $$ 
> 于是若$k_1y_1+ \cdots + k_{n}y_{n}= 0$, 则
> $$ k_1\left< y_1,x \right>+ \cdots + k_{n}\left< y_{n},x \right>= 0,\forall x\in H $$ 
> 令$x= x_{i}$, 得到$k_{i}= 0$. 因此$y_1,\cdots ,y_{n}$是线性无关的.


> [!exercise] Exercise 12
> 设 $M$ 是 Hilbert 空间 $H$ 的线性子空间，$T$ 是 $M$ 上的有界线性算子，证明在 $H$ 上存在一个有界线性算子 $\widetilde T$，使得在 $M$ 上 $\widetilde T$ 与 $T$ 相等并且
> $$
> \|\widetilde T\|\leq \|T\|_M.
> $$


> [!proof] Proof: 
> 将$H$分解为
> $$ H= \overline{M}\oplus M^{\perp} $$ 
> $x\in H$分解为
> $$ x= x_{\overline{M}}+ x_{M^{\perp}} $$ 
> 由于$M\subseteq H$, 将$T$看做$T: M\to H$.  $H$完备, 且$M$在$\overline{M}$中稠密. $T$可以延拓到$\overline{M}$上的线性算子$T^{\prime} : \overline{M}\to H$, 使得
> $$ T^{\prime} |_{M}= T,\quad \left\| T^{\prime}  \right\|= \left\| T \right\| $$ 
> 现在, 我们定义$\widetilde{T}: H\to H$, 
> $$ \widetilde{T}\left(x\right)= T^{\prime} \left(x_{\overline{M}}\right) $$ 
> 易见$\widetilde{T}$是线性算子, 并且
> $$ \left\| \widetilde{T}\left(x\right) \right\|= \left\| T^{\prime} \left(x_{\overline{M}}\right) \right\|\le \left\| T^{\prime}  \right\|\left\| x_{\overline{M}} \right\|\le \left\| T^{\prime}  \right\|\left\| x \right\| $$ 
> 故
> $$ \left\| \widetilde{T} \right\|\le \left\| T^{\prime}  \right\|= \left\| T \right\| $$ 

> [!exercise] Exercise 13
> 设 $\{e_k\},\{e'_k\}$ 是 Hilbert 空间 $H$ 中的两个标准正交系，并且
> $$
> \sum_{k=1}^{\infty}\|e_k-e'_k\|^2<1.
> $$
> 证明：如果 $\{e_n\},\{e'_n\}$ 中之一是完备的，则另一个也是完备的。

> [!proof] Proof: 
> 假设$\left\{ e_{n} \right\}$是完备的, 若存在非零的$x\in \overline{\operatorname{span}\left\{ e_{n}^{\prime}  \right\}}^{\perp}$. 则$\left< x,e_{n}^{\prime}  \right>= 0$. 由Parseval恒等式
> $$ \left\| x \right\|^{2}= \sum _{n}\left| \left< x,e_{n} \right> \right| ^{2} $$ 
> 又
> $$ \left< x,e_{n} \right> = \left< x,e_{n}-e_{n}^{\prime}  \right>$$ 
> 故
> $$ \left| \left< x,e_{n} \right> \right| ^{2}= \left| \left< x,e_{n}-e_{n}^{\prime}  \right> \right| ^{2} $$ 
> 由Cauchy不等式
> $$ \left| \left< x,e_{n}-e_{n}^{\prime}  \right> \right|^{2}\le \left\| x \right\|^{2}\left\| e_{n}-e_{n}^{\prime}  \right\|^{2}  $$ 
> 于是
> $$ \left\| x \right\|^{2}\le \sum _{n}\left\| x \right\|^{2}\left\| e_{n}-e_{n}^{\prime}  \right\|^{2}= \left\| x \right\|^{2}\sum _{n}\left\| e_{n}-e_{n}^{\prime}  \right\|< \left\| x \right\|^{2} $$ 
> 矛盾. 
> 因此$\overline{\operatorname{span}\left\{ e_{n}^{\prime}  \right\}}^{\perp}= 0$, 故$\left\{ e_{n}^{\prime}  \right\}$完备. 由对称性可知若$\left\{ e_{n}^{\prime}  \right\}$完备则$\left\{ e_{n} \right\}$完备. 