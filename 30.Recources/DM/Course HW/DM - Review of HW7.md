  

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
> 5. $F$ 是一个微分同胚:
>
> 6. 定义两个向量场,
>
> $
> X = f(x)\frac{\partial}{\partial x} + g(y)\frac{\partial}{\partial y}, \quad Y = h(x, y)\frac{\partial}{\partial x},
> $
>
> 计算 $dF(X), dF(Y)$, 其中 $f, g, h$ 都是 $M$ 上的光滑函数:
>
> 7. 计算 $[dF(X),dF(Y)]$ 并比较 $dF[X,Y]$. 这是一个普遍的规律吗, 给出你的理由.

> [!remark] Remark: 
>  $$ \begin{aligned} \left[ X,Y \right]&= \left(X\left(Y^{k}\right)-Y\left(X^{k}\right)\right)\frac{\partial }{\partial x^{k}}\\&= \left(X^{i}\frac{\partial Y^{k}}{\partial x^{i}}-Y^{i}\frac{\partial X^{k}}{\partial x^{i}}\right)\frac{\partial }{\partial x^{k}} \end{aligned} $$ 

> [!proofsketch] Sketch of Proof: 
> 8. 显示得给出光滑的逆映射即可
> 9. 计算微分的Jaocbi,然后作用上去就行了
> 10. 对于F是微分同胚, 确实有
>  $$ \left[ dF\left(X\right), dF\left(Y\right) \right]= dF\left[ X,Y \right] $$ 
> 计算就行了

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
> 11. $F$ 是一个微分同胚:
>
> 12. 定义两个向量场,
>
> $
> X = f(x)\frac{\partial}{\partial x} + g(y)\frac{\partial}{\partial y}, \quad Y = h(x, y)\frac{\partial}{\partial x},
> $
>
> 计算 $dF(X), dF(Y)$, 其中 $f, g, h$ 都是 $M$ 上的光滑函数:
>
> 13. 计算 $[dF(X),dF(Y)]$ 并比较 $dF[X,Y]$. 这是一个普遍的规律吗, 给出你的理由.

> [!proof]- Proof:
> 14. 由于坐标皆为正数, 故 $\left( x,y \right)\mapsto  xy$和 $\left( x,y \right)\mapsto \frac{y }{x }$均为 $M$上的光滑映射, 从而 $F$是光滑的. 此外,  $F$有逆映射  $F^{-1} :M\to M$ ,
>
> $
> F^{-1} \left( u,v \right)= \left( \sqrt{\frac{u }{v } }, \sqrt{uv} \right)
> $
>
> 也是一个光滑映射.  因此 $F$是一个微分同胚
>
> 15. 在标准的欧式坐标下,  $\,\mathrm{d} F$的Jaocbi矩阵为
>
> $
> JF_{\left( x,y \right) }= \begin{pmatrix}
> y& x\\
> -\frac{y }{x^{2} }& \frac{1 }{x }
> \end{pmatrix}
> $
>
> $X _{\left( x,y \right) }$的坐标为 $\left( f\left( x \right),g\left( y \right)   \right)^{\top}$, 从而 $\,\mathrm{d} F\left( X \right)_{\left( x,y \right) }$的坐标为
>
> $
> JF_{\left( x,y \right) } \begin{pmatrix}
> f\left( x \right)\\
> g\left( y \right)
> \end{pmatrix}= \begin{pmatrix}
> yf\left( x \right)+ xg\left( y \right)\\
> -\frac{yf\left( x \right)  }{x^{2} }+ \frac{g\left( y \right)  }{x }
> \end{pmatrix}
> $
>
> 于是
>
> $
> \,\mathrm{d}_{\left( x,y \right) } F\left( X \right)= \left( yf\left( x \right)+ xg\left( y \right)   \right)\frac{\partial }{\partial u}+ \left( -\frac{yf\left( x \right)  }{x^{2} }+ \frac{g\left( y \right)  }{x }   \right)\frac{\partial }{\partial v}
> $
>
> 其中 $x= \sqrt{\frac{u }{v } }, y= \sqrt{uv}$
>
> $
> JF_{\left( x,y \right) }\begin{pmatrix}
> h\left( x,y \right)\\
> 0
> \end{pmatrix}= \begin{pmatrix}
> yh\left( x,y \right)\\
> -\frac{y h\left( x,y \right) }{x^{2} }
> \end{pmatrix}
> $
>
> 因此
>
> $
> \,\mathrm{d} _{\left( x,y \right) }F\left( Y \right)=  yh\left( x,y \right)\frac{\partial }{\partial u}-\frac{yh\left( x,y \right)  }{x^{2} }\frac{\partial }{\partial v}
> $
>
> 16. 记 $\tilde{X}= d F\left( X \right)$, $\tilde{Y}=  d F\left( Y \right)$  , 并记
>
> $
> \tilde{X}=  \tilde{X}^{u}\frac{\partial }{\partial u}+ \tilde{X}^{v}\frac{\partial }{\partial v},,\quad \tilde{Y}= \tilde{Y}^{u}\frac{\partial }{\partial u}+ \tilde{Y}^{v}\frac{\partial }{\partial v}
> $
>
> 则
>
> $
> \left[ \tilde{X}, \tilde{Y} \right] ^{u}= \tilde{X}\left( \tilde{Y}^{u} \right)- \tilde{Y}\left( \tilde{X}^{u} \right)
> $
>
> $
> \left[ \tilde{X},\tilde{Y} \right]^{v}= \tilde{X}\left( \tilde{Y} ^{v}\right)-\tilde{Y}\left( \tilde{X}^{v} \right)
> $
>
> $
> \begin{aligned}
> \left( \tilde{X}\left( \tilde{Y}^{u} \right)  \right)\circ F&=  X\left( \tilde{Y}^{u}\circ F \right)= X\left( yh \right)  \\
> &= \left( f\left( x \right)\frac{\partial }{\partial x}+ g\left( y \right)\frac{\partial }{\partial y}   \right)   \left( yh \right)\\
> &= yf\frac{\partial h}{\partial x}+ gh+ yg\frac{\partial h}{\partial y}
> \end{aligned}
> $
>
> $
> \begin{aligned}
> \left( \tilde{Y}\left( \tilde{X}^{u} \right)  \right)\circ F&= Y\left( \tilde{X}^{u}\circ F \right)   = Y\left( yf+ xg \right) \\
> &= \left( h\left( x,y \right)\frac{\partial }{\partial x}  \right)\left( yf\left( x \right)+ xg\left( y \right)   \right)\\
> &= yhf^{\prime} \left( x \right)+ hg\left( y \right)
> \end{aligned}
> $
>
> 于是
>
> $
> \begin{aligned}
> \left( \left[ \tilde{X},\tilde{Y} \right]^{u}  \right)\circ F&=  \left( \tilde{X}\left( \tilde{Y}^{u} \right)  \right)\circ F-\left( \tilde{Y}\left( \tilde{X}^{u} \right)  \right)\circ F\\
> &= y\left( f\frac{\partial h}{\partial x}+ g\frac{\partial h}{\partial y}-hf^{\prime}  \right)
> \end{aligned}
> $
>
> 接下来
>
> $
> \begin{aligned}
> \left( \tilde{X}\left( \tilde{Y} ^{v}\right)  \right)\circ F&= X\left( \tilde{Y}^{v}\circ F \right)= X\left( -\frac{y }{x^{2} }h  \right)\\
> &=  f\frac{\partial }{\partial x}\left( -\frac{y }{x^{2} }h  \right)+ g\frac{\partial }{\partial y}\left( -\frac{y }{x^{2} }h  \right)\\
> &= \frac{2yfh }{x^{3} }-\frac{yf }{x^{2} }\frac{\partial h}{\partial x}- \frac{gh }{x^{2} }- \frac{yg }{x^{2} }\frac{\partial h}{\partial y}
> \end{aligned}
> $
>
> $
> \begin{aligned}
> \left( \tilde{Y}\left( \tilde{X}^{v} \right)  \right)\circ F&=  Y\left( \tilde{X}^{v}\circ F \right)   = Y\left( -\frac{y }{x^{2} }f+ \frac{g }{x }   \right)\\
> &= h\frac{\partial }{\partial x}\left( -\frac{y }{x^{2} }f+ \frac{g }{x }   \right)\\
> &= \frac{2yhf }{x^{3} }-\frac{yhf^{\prime}  }{x^{2} }-\frac{hg }{x^{2} }
> \end{aligned}
> $
>
> 于是
>
> $
> \begin{aligned}
> \left( \left[ \tilde{X},\tilde{Y} \right]^{v}  \right)\circ F&= \left( \tilde{X}\left( \tilde{Y}^{v} \right)  \right)\circ F-\left( \tilde{Y}\left( \tilde{X}^{v} \right)  \right)\circ F\\
> &= -\frac{y }{x^{2} }\left( f\frac{\partial h}{\partial x}+ g\frac{\partial h}{\partial y}-hf^{\prime}  \right)
> \end{aligned}
> $
>
> 令 $G\left( x,y \right)= f\frac{\partial h}{\partial x}+ g\frac{\partial h}{\partial y}-hf^{\prime}$ , 则
>
> $
> \left[ \,\mathrm{d} F\left( X \right),\,\mathrm{d} F\left( Y \right)   \right]= y G\left( x,y \right)\frac{\partial }{\partial u}- \frac{y }{x^{2} }G\left( x,y \right)    \frac{\partial }{\partial v}
> $
>
> 另一方面,
>
> $
> \begin{aligned}
> \left[ X,Y \right]&= \left( X\left( h \right)-Y\left( f \right)   \right)\frac{\partial }{\partial x}+ \left( X\left( 0 \right)-Y\left( g \right)   \right)\frac{\partial }{\partial y}\\
> &= \left( \left( f\frac{\partial }{\partial x}+ g\frac{\partial }{\partial y} \right)  \left( h \right)- \left( h\frac{\partial }{\partial x} \right)f\left( x \right)   \right)\frac{\partial }{\partial x}- \left( \left( h\frac{\partial }{\partial x} \right)\left( g\left( y \right)  \right)   \right)\\
> &=  \left( f\frac{\partial h}{\partial x}+ g\frac{\partial h}{\partial y}-hf^{\prime}  \right)\frac{\partial }{\partial x}\\
> &= G\left( x,y \right)\frac{\partial }{\partial x}
> \end{aligned}
> $
>
> $
> \,\mathrm{d} F\left( \left[ X,Y \right]  \right)=  y G\left( x,y \right)\frac{\partial }{\partial u}- \frac{y }{x^{2} }G\left( x,y \right)\frac{\partial }{\partial v}
> $
>
> 故
>
> $
> \left[ \,\mathrm{d} F\left( X \right),\,\mathrm{d} F\left( Y \right)   \right]= \,\mathrm{d} F\left( \left[ X,Y \right]  \right)
> $
>
> 这是一个普遍规律. 为此, 记 $\tilde{X}= d F\left( X \right)$, $\tilde{Y}=  d F\left( Y \right)$. 则 对于任意的 $g \in C^{\infty}\left( M \right)$,
>
> $
> \begin{aligned}
> \left( \left[ \tilde{X}, \tilde{Y} \right]\left( g \right)   \right)\circ F&= \left( \tilde{X}\left( \tilde{Y}\left( g \right)  \right)  \right)\circ F-\left( \tilde{Y}\left( \tilde{X}\left( g\right)  \right)\right)    \circ  F\\
> &=  X\left( \left( \tilde{Y}\left( g \right)  \right)\circ F  \right) - Y\left( \left( \tilde{X}\left( g \right)  \right)\circ F  \right)\\
> &= X\left( Y\left( g\circ F \right)  \right)- Y\left( X\left( g\circ F \right)  \right)    \\
> &= \left[ X,Y \right]\left( g\circ F \right)
> \end{aligned}
> $
>
> 另一方面,
>
> $
> \left( \,\mathrm{d} F\left( \left[ X,Y \right]  \right)\left( g \right)   \right)\circ F= \left[ X,Y \right]\left( g\circ F \right)
> $
>
> 二者相等, 故
>
> $
> \left[ \tilde{X}, \tilde{Y} \right]= \,\mathrm{d} F\left( \left[ X,Y \right]  \right)
> $
>
> 当 $F$是同胚时成立.


