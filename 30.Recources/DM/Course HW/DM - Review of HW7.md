  

> [!exercise] Exercise
> - **(1)** 求证对任意 $X, Y \in \Gamma(TM)$, 有
>
> $
> [X,Y] := XY - YX \in \Gamma(TM).
> $
>
> - **(2)** 证明 Jacobi 恒等式
>
> $
> [[X,Y],Z] + [[Z,X],Y] + [[Y,Z],X] = 0, \quad \forall X,Y,Z \in \Gamma(TM).
> $

> [!remark] Remark: 
> - 切向量等于点导子, 切向量场等于函数模-导子

> [!proofsketch] Sketch of Proof: 
> 1. 作用$fg$发现二次项相互抵消了, 就剩下了一次项的结果, 符合导子性质, 然后简单说明线性性即可
> 



> [!exercise] Exercise
> 定义沿着闭集上的光滑向量场: 对任意闭子集 $A \subset M$, 称 $Y$ 是沿着 $A$ 定义的一个光滑向量场, 若 $\forall p \in A, Y_p \in T_p M$, 且存在 $p$ 的某个领域 $U$ 和 $U$ 上定义的光滑向量场 $\tilde{Y}$, 使得 $\tilde{Y}|_{A \cap U} = Y$. 一个向量场的支集定义为 $\operatorname{supp}(X) = \overline{\{x \in M | X(x) \neq 0\}}$. 求证给定任意闭集 $A$, 存在包含 $A$ 的开集 $A \subset U$, 和向量场 $\tilde{Y} \in \Gamma(TM)$ 使得 $\tilde{Y}|_A = Y$ 并且 $\operatorname{supp}(\tilde{Y}) \subset U$. 特别地, 若 $A = \{p\}$, 我们得到单个向量的延拓定理.


> [!remark] Remark: 
> 和函数的支撑集包含于 支撑集并的闭包, 等于支撑集自身.

> [!proofsketch] Sketch of Proof: 
> - 称$p$的邻域$U_{p}$是$Y$的局部定义邻域. 每个点取局部定义邻域, 配合外部的开集$M\setminus A$构成一个开覆盖$\left\{ U_{p} \right\}\cup \left\{ M\setminus A \right\}$. 取其单位分解.
> - 把每个局部定义向量场$\widetilde{Y}^{\left(p\right)}$根据单位分解加权为$Z^{\left(p\right)}$.
> - 把加权后的$Z^{\left(p\right)}$求和, 得到一个粗向量场, 验证其与$Y$在$A$上一致.
> - 通过逐点地给出导子性, 说明上面给出的粗向量场确实是光滑向量场.
> - 利用Remark简单给出$\operatorname{supp}\left(\widetilde{Y}\right)\subseteq U$, $U$就是局部定义邻域的并.



> [!exercise] Exercise
> - **a).** 显式构造 $S^{2n+1}$ 上处处非零的切向量场, 并说明 $S^{2n}$ 上能否构造;
>
> - **b).** 构造 $\mathbb{T}^n$ 上处处非零的切向量场;
>
> - **c).** 构造 $S^2$ 上仅有两个零点的向量场;
>
> - **d).** 构造 $S^2$ 上仅有一个零点的向量场.

> [!proofsketch] Sketch of Proof: 
> 1. 考虑 $S^{2n+ 1}\hookrightarrow \mathbb{R} ^{2n+ }$
>  $$ V= \left(-x_2,x_1,-x_4,x_2,\cdots ,-x_{2n+ 2},x_{2n+ 1}\right) $$ 
> 向量场在$S^{2n+ 1}$上模长为1,非退化, 且与位置向量正交, $S^{2n+ 1}$的切空间就是位置向量的正交空间.
>  - 为什么$S^{2n}$不存在:  非退化向量场归一化成$S^{2n}\to S^{2n}$上的光滑映射$p\mapsto Y_{p}$, 并且$p$和$Y_{p}$正交, 每个一对$p,Y_{p}$给出一个圈, 我们可以依据这个圈把单位映射和对径映射同伦起来,导出矛盾.
> 2. 给出$S^{1}$上非退化的光滑切向量场, 把$\mathbb{T}p^{n}$分解成一堆$S^{1}$, 后面的$S^{1}$填零就行.
> 3. 还是跟1.形式相同的向量场, 那个之所以能够非退化,这个不行, 是因为向量场为零在$S^{2}\subseteq \mathbb{R} ^{3}$还剩能剩下一个坐标$x^{3}$可以动, 正好是$x_3\pm 1$两个零点.
> 4. 考虑$U= S^{2}\setminus \left\{ N \right\}$,$V= S^{2}\setminus \left\{ S \right\}$. 前后这的球极投影坐标为 $\left(u,v\right)$和 $\left(\tilde{u},\tilde{v}\right)$, 则
>  $$ u= \frac{x }{1-z },v= \frac{y }{1-z },\quad \tilde{u}= \frac{x }{1+ z },\tilde{v}=\frac{y }{1+ z }  $$
> 则 
>  $$ u^{2}+ v^{2}= \frac{x^{2}+ y^{2} }{\left(1-z\right)^{2} }= \frac{1-z^{2} }{\left(1-z\right)^{2} }= \frac{1+ z }{1-z } $$
>  $$ \tilde{u}= \frac{1-z }{1+ z }u= \frac{u }{u^{2}+ v^{2} } ,\quad \tilde{v}= \frac{1-z }{1+ z }v= \frac{v }{u^{2}+ v^{2} }$$   
>  $$ \begin{cases} \frac{u}{v}= \frac{x}{y}\\u^{2}+ v^{2}=  \end{cases}  $$ 
> 考虑$U$上的向量场$X= \frac{\partial }{\partial u}$, 
>  $$ u^{2}+ v^{2}= \frac{1 }{\tilde{u}^{2}+ \tilde{v}^{2} } = \frac{1+ z }{1-z }$$
>  $$ \left(v^{2}-u^{2}\right)\left(1-z\right)^{2}= \left(\tilde{v}^{2}-\tilde{u}^{2}\right)\left(1+ z\right)^{2} $$
>  $$  $$   
>  $$ \begin{aligned} \frac{\partial }{\partial u}&= \frac{\partial \tilde{u}}{\partial u}\frac{\partial }{\partial \tilde{u}}+ \frac{\partial \tilde{v}}{\partial u}\frac{\partial }{\partial \tilde{v}}\\&= \frac{v^{2}-u^{2} }{\left(u^{2}+ v^{2}\right)^{2} }\frac{\partial }{\partial \tilde{u}}-\frac{2uv }{\left(u^{2}+ v^{2}\right)^{2} }\frac{\partial }{\partial \tilde{v}}\\&=\left(\tilde{v}^{2}-\tilde{u}^{2}\right)\frac{\partial }{\partial \tilde{u}}-2\tilde{u}\tilde{v}\frac{\partial }{\partial \tilde{v}}\end{aligned} $$ 
> 于是$X$可以光滑地延拓到$V$上, 且有唯一的零点$\left(\tilde{v},\tilde{u}\right)= \left(0,0\right)$, 即$\left(x,y,z\right)= \left(0,0,-1\right)$.


> [!exercise] Exercise
> 设 $M$ 是欧氏平面 $\mathbb{R}^2$ 的开子流形, 坐标皆为正数. 定义映射
>
> $$
> F: M \to M, \quad (x, y) \mapsto (xy, \frac{y}{x}).
>
> $$
>
> 求证
>
> 1. $F$ 是一个微分同胚:
>
> 2. 定义两个向量场,
>
> $
> X = f(x)\frac{\partial}{\partial x} + g(y)\frac{\partial}{\partial y}, \quad Y = h(x, y)\frac{\partial}{\partial x},
> $
>
> 计算 $dF(X), dF(Y)$, 其中 $f, g, h$ 都是 $M$ 上的光滑函数:
>
> 3. 计算 $[dF(X),dF(Y)]$ 并比较 $dF[X,Y]$. 这是一个普遍的规律吗, 给出你的理由.

> [!remark] Remark: 
>  $$ \begin{aligned} \left[ X,Y \right]&= \left(X\left(Y^{k}\right)-Y\left(X^{k}\right)\right)\frac{\partial }{\partial x^{k}}\\&= \left(X^{i}\frac{\partial Y^{k}}{\partial x^{i}}-Y^{i}\frac{\partial X^{k}}{\partial x^{i}}\right)\frac{\partial }{\partial x^{k}} \end{aligned} $$ 

> [!proofsketch] Sketch of Proof: 
> 1. 显示得给出光滑的逆映射即可
> 2. 计算微分的Jaocbi,然后作用上去就行了
> 3. 对于F是微分同胚, 确实有
>  $$ \left[ dF\left(X\right), dF\left(Y\right) \right]= dF\left[ X,Y \right] $$ 
> 计算就行了