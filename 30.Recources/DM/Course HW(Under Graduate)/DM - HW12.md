代靖涵 25120222201319

> [!exercise] 5.2
> 设 $G$ 是 $r$ 维李群，$\varphi:G\times G\to G$ 是 $G$ 的乘法运算，若 $X\in\mathfrak{X}(G)$ 对于任意 $a\in G$ 满足
> $$
> (R_a)_{*g}(X(g))=X(g\cdot a),\qquad \forall g\in G,
> $$
> 则称 $X$ 是 $G$ 上的右不变向量场。
>
> (1) 设 $(U;u^i)$ 是 $g\in G$ 的局部坐标系，$(W;v^i)$ 是单位元素 $e\in G$ 的局部坐标系，$V$ 是 $g$ 的一个开邻域，$V\subset U$，$v^i=u^i|_V$，且 $\varphi(W\times V)\subset U$。设 $Y_i$ 是由 $\left.\dfrac{\partial}{\partial u^i}\right|_e$ 生成的右不变向量场，求 $Y_i$ 在 $V$ 上的局部坐标表达式。
>
> (2) 设 $(U;u^i)$ 是单位元素 $e\in G$ 的局部坐标系，$W,V$ 是 $e$ 的开邻域，$W\subset U$，$V\subset U$，$w^i=u^i|_W$，$v^i=u^i|_V$，且 $\varphi(W\times V)\subset U$。设 $Y_i$ 是由 $\left.\dfrac{\partial}{\partial u^i}\right|_e$ 生成的右不变向量场，求常数 $\widetilde C^{k}_{ij}$，$1\le i,j,k\le r$，使得
> $$
> [Y_i,Y_j](e)=\widetilde C^{k}_{ij}Y_k(e).
> $$

> [!proof] Proof: 
> 1. $$ \frac{\partial }{\partial w^{i}}= \left. \frac{\partial }{\partial u^{i}} \right|_{W} $$ 
>    $$ \begin{aligned} \begin{aligned} \left(R_{a}\right) _{*e}\left(\frac{\partial }{\partial w^{i}}\right)\left(f\right)&= \left(\frac{\partial }{\partial w^{i}}\right)_{v= 0}f\left(R_{a}\left(v\right)\right)\\&=\left(\frac{\partial }{\partial w^{i}}\right) _{v= 0}f\left(\widehat{\varphi}\left(v,a\right)\right)\\&= \sum _{j}\frac{\partial f}{\partial v^{j}}\left(a\right) \frac{\partial \widehat{\varphi}^{j}}{\partial w^{i}}\left(0,u^{1}\left(a\right),\cdots ,u^{n}\left(a\right)\right) \end{aligned}\end{aligned} $$ 
>    于是
>    $$ Y_{i}\left(g\right)= \sum _{j}\frac{\partial \widehat{\varphi}^{j}}{\partial w^{i}}\left(0,u^{1}\left(g\right),\cdots ,u^{n}\left(g\right)\right)\left. \frac{\partial }{\partial v^{j}} \right|_{g} $$ 
> 2. $$ \frac{\partial \widehat{\varphi}^{j}}{\partial w^{i}}\left(0;0,\cdots 0\right)= u^{j}\circ \left(\left(\frac{\partial }{\partial w^{i}}\right)\varphi \left(e,e\right)\right)= \frac{\mathrm{d}}{\mathrm{d}t}u^{j}\left(0,\cdots ,t,0,\cdots ,0\right)\\= \frac{\partial u^{j}}{\partial u^{i}}= \delta _{i}^{j} $$ 
>    
>    记
>    $$ Y_{i}= a_{i}^{k}\frac{\partial }{\partial v^{k}},\quad Y_{j}= a_{j}^{k}\frac{\partial }{\partial v^{k}} $$ 
>    
>    则在$e$处
>    $$ a_{i}^{k}\left(e\right)= \frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\left(0;0\right)= \delta ^{k}_{i} $$ 
>    
>    于是
>    $$ \begin{aligned} \left[ Y_{i},Y_{j} \right]\left(e\right)&= \left(a_{i}^{k} \partial _{k}a_{j}^{l}- a_{j}^{k}\partial _{k}a_{i}^{l}\right)\partial _{l}\\&= \left(\delta _{i}^{k}\partial _{k}a_{j}^{l}-\delta _{j}^{k}\partial _{k}a_{i}^{l}\right)\partial _{l}\\&= \left(\partial _{i}a_{j}^{l}- \partial _{j}a_{i}^{l}\right)\partial _{l} \end{aligned} $$ 
>    
>    其中
>    $$ \partial _{i}a_{j}^{l}= \partial _{i}\frac{\partial \widehat{\varphi}^{l}}{\partial w^{j}} = \frac{\partial ^{2}\widehat{\varphi}^{l}}{\partial v^{i}\partial w^{j}},\quad \partial _{j}a_{i}^{l}= \frac{\partial ^{2}\widehat{\varphi}^{l}}{\partial v^{j}\partial w^{i}}$$ 
>    
>    又在$e$处
>    $$ Y_{l}\left(e\right)= \delta _{l}^{k}\frac{\partial }{\partial v^{k}}= \partial _{l} $$ 
>    于是
>    $$ \begin{aligned} \left[ Y_{i},Y_{j} \right]\left(e\right)&= \left(\partial _{i}a_{j}^{l}-\partial _{j}a_{i}^{l}\right)Y_{l}\left(e\right)\\&= \left(\frac{\partial ^{2}\widehat{\varphi}^{l}}{\partial v^{i}\partial w^{j}}-\frac{\partial ^{2}\widehat{\varphi}^{l}}{\partial v^{j}\partial w^{i}}\right) Y_{l}\left(e\right)\end{aligned} $$ 



> [!exercise] 5.3
> 设 $H=\mathbb R^4$，取 $H$ 的基底为 $\{1,i,j,k\}$，乘法表为
> $$
> 1\cdot1=1,\qquad i\cdot i=j\cdot j=k\cdot k=-1,
> $$
> $$
> 1\cdot i=i\cdot1=i,\qquad 1\cdot j=j\cdot1=j,\qquad 1\cdot k=k\cdot1=k,
> $$
> $$
> i\cdot j=-j\cdot i=k,\qquad j\cdot k=-k\cdot j=i,\qquad k\cdot i=-i\cdot k=j.
> $$
> 那么 $H$ 中的元素 $\alpha$ 称为四元数，可以表示为
> $$
> x=x_0 1+x_1 i+x_2 j+x_3 k,\qquad x_0,x_1,x_2,x_3\in\mathbb R.
> $$
> 按照上述基底元素的乘法表，定义了 $H$ 中任意两个四元数的乘法。
>
> (1) 令 $H^*=H\setminus\{0\}$，证明：$H^*$ 关于四元数乘法构成一个 $4$ 维李群。
>
> (2) 求李群 $H^*$ 的左不变向量场。
>
> (3) 求李群 $H^*$ 的结构常数。
>
> (4) 求李群 $H^*$ 的 Maurer-Cartan 形式（左不变微分式）和结构方程。


> [!proof] Proof:
> 1. 先说明$H^{*}$是一个李群, 也就是说
>    
>    将$H^{*}$视为$\mathbb{R} ^{4}$的一个开子流形, 则$H^{*}$是一个4维的光滑流形. 并且有全局坐标$\left(x_0,x_1,x_2,x_3\right)$
>    
>    设$y= y_0 1+ y_1i+ y_2j+ y_3k$, 则
>    $$ \begin{aligned} x\cdot y&= \left(\sum _{l}x_{l}y_{l}\right)1+ \left(x_1y_0+ x_0y_1+ x_2y_3-y_2x_3 \right)i\\&+ \left(x_0y_2+ y_0x_2+ x_3y_1-y_3x_1\right)j+ \left(x_0y_3+ y_0x_3+ x_1y_2-y_1x_2\right)k \end{aligned} $$ 
>    故乘法映射是光滑的. 
>    
>    $$ \bar{x}= x_0 1- x_1 i -  x_2 j  - x_3 k  $$ 
>    
>    $$ x \cdot  \bar{x}= \left\| x \right\|^{2}1 $$ 
>    故
>    $$ x ^{-1}  = \frac{\bar{x} }{\left\| x \right\|^{2}}= \frac{1 }{\left\| x \right\|^{2} }\left(x_0 1 -  x_1 i -  x_2 j -  x_3 k \right) $$ 
>    故$x\mapsto x ^{-1}$是光滑的. 
>    因此 $H^{*}$是一个四维李群.
> 2.  $\xi \in T_{1}H^{*}$生成的左不变向量场$X_{\xi }$为
>     $$ X_{\xi }\left(q\right)= \left(dL_{q}\right) _{1}\left(\xi \right)=  q \xi $$ 
>     于是$T_{1}G$的基$1,i,j,k$生成的左不变向量场分别为
>     $$ E_0\left(q\right)= q,\quad E_1\left(q\right) =  qi ,\quad E_2 \left(q\right)=  q j,\quad E_3\left(q\right)=   q k $$ 
>    即
>    $$ E_0=  x_0\partial _{x_0}+ x_1\partial _{x_1}+ x_2\partial _{x_2}+ x_3\partial _{x_3} $$ 
>    $$ E_1= -x_1\partial _{x_0}+ x_0\partial _{x_1}+ x_3\partial _{x_2}- x_2\partial _{x_3} $$ 
>    $$ E_2=- x_2\partial _{x_0} -x_3\partial _{x_1}+   x_0\partial _{x_2}+ x_1\partial _{x_3}$$
>    $$ E_3= -x_3\partial _{x_0} + x_2 \partial _{x_1}- x_1\partial _{x_2} +  x_0\partial _{x_3} $$  
> 3. 
>    我们先证明若$a,b\in T_1H\simeq H$, $X_{a},X_{b}$是$a,b$生成的左不变向量场, 则
>      $$ \left[ X_{a}, X_{b} \right]= X_{ab-ba} $$ 
>    事实上, 设$\Phi ^{a}$, $\Phi ^{b}$是$X_{a},X_{b}$的流, 
>    则
>    $$ \Phi ^{a}_{t}\left(q\right)= q e^{ta} $$ 
>    因为
>    $$ \frac{\mathrm{d}}{\mathrm{d}t}\left(q e^{ta}\right)= a q e^{ta}= X_{a}\left(q e^{ta}\right) $$ 
>    类似地
>    $$ \Phi _{t}^{b}\left(q\right)=  q e^{tb} $$ 
>    令
>    $$ \Phi _{t,s}=\Phi ^{b}_{-s}\circ \Phi ^{a}_{-t}\circ \Phi ^{b}_{s}\circ \Phi ^{a}_{t} $$ 
>    则
>    $$ \Phi ^{*}_{t,s}f= f+  ts\left[ X_{a},X_{b} \right]f+ o\left(ts\right) $$ 
>    
>    $$ \Phi _{-t}^{b}\circ \Phi _{-s}^{a}\circ \Phi _{t}^{b}\circ \Phi _{s}^{a}\left(q\right)=  q e^{sa}e^{tb}e^{-sa}e^{-ab}  $$ 
>    在$q$附近展开为
>    $$ \begin{aligned} &q\left(1+ sa+ o\left(s^{2}\right)\right)\left(1+ tb+ o\left(t^{2}\right)\right)\left(1-sa+ o\left(s^{2}\right)\right)\left(1-tb+ o\left(t^{2}\right)\right)\\&= q \left(1+ ts \left(ab-ba\right)\right)+ o\left(ts\right) \end{aligned} $$ 
>    于是
>    $$ \left[ X_{a},X_{b} \right]= X_{ab-ba} $$ 
>    带入计算, 得到
>    $$ \left[ E_{0},E_{1} \right]= X_{\left[ 1,i \right]}= X_{0}= 0 $$
>    类似地
>    $$ \left[ E_0,E_2 \right]= \left[ E_0,E_3 \right]= 0 $$  
>    $$ \left[ E_1,E_2 \right]= X_{\left[ i,j \right]}= X_{2k}= 2 E_3 $$ 
>    $$ \left[ E_1,E_3 \right]= -2E_2,\quad \left[ E_2,E_3 \right]=2 E_1 $$ 
>    于是设结构常数为$c_{st}^{r}$, 则
>    $$ c_{12}^{3}=-c_{21}^{3}=  2\quad   c_{13}^{2}= -c_{31}^{2}= -2\quad  c_{23}^{1}= -c_{32}^{1}= 2 $$ 
>    其余均为零.
> 4. 设$\omega$是Maurer-Cartan形式, 则
> $$ \omega _{x}\left(v\right)= \left(L_{x^{-1} }\right)_{*}\left(v\right)= x^{-1} v $$ 
>    $dx= dx_0\cdot 1+ dx_1\cdot i +  dx_2\cdot j+ d x_3\cdot k$将$T_{x}H^{*}$自然地等同于$H$, 于是
>    $$ \omega _{x}= x ^{-1}  d x $$ 
>    即
>    $$ \omega = \frac{\bar{x}dx }{\left| x \right|^{2}  } $$ 
>    将$\omega$分解为
>    $$ \omega = \omega ^{0}+ \omega ^{1}i+ \omega ^{2}j + \omega ^{3}k $$ 
>    则
>    结构方程为
>    $$ d \omega ^{\gamma }= -\frac{1}{2}c_{\alpha \beta }^{\gamma }\omega ^{\alpha }\wedge \omega ^{\beta } $$  
>    根据上面计算的结构常数
>    $$ d \omega ^{0}= 0,\quad d \omega ^{1}= -2\omega ^{2}\wedge \omega ^{3},  \quad d \omega ^{2}= -2\omega ^{3}\wedge \omega ^{1},\quad d\omega ^{3}= -2\omega ^{1}\wedge \omega ^{2} $$ 
>    于是
>    $$ d \omega =  -2\omega ^{2}\wedge \omega ^{3}i -2 \omega ^{3}\wedge \omega ^{1}j - 2\omega ^{1}\wedge \omega ^{2}k $$ 
>    注意到
>    $$ \omega \wedge \omega = 2\omega ^{1}\wedge \omega ^{2}k + 2 \omega ^{2}\wedge \omega ^{3} i + 2 \omega ^{3}\wedge \omega ^{1}j $$ 
>    于是 
>    $$ d\omega = -\omega \wedge \omega   $$ 

> [!exercise] 5.6
> 设
> $$
> G=\left\{\begin{pmatrix}
> \alpha & \beta \\
> -\overline{\beta} & \overline{\alpha}
> \end{pmatrix}:\alpha,\beta\in\mathbb C,\ \text{且 }|\alpha|^2+|\beta|^2\ne0\right\}.
> $$
> (1) 证明：$G$ 是一个 $4$ 维李群。
>
> (2) 求李群 $G$ 的 Maurer-Cartan 形式（左不变微分式）。
>
> (3) 求李群 $G$ 的结构常数。

> [!proof] Proof: 
> 任取$A\in G$, 有
> $$ \det A= \left| \alpha  \right|^{2}+ \left| \beta  \right|^{2}\neq 0   $$ 
> 于是
> $$ G\subseteq \operatorname{GL} \left(2, \mathbb{C} \right) $$ 
>
> $$ \begin{pmatrix} \alpha _1 &\beta _1 \\- \overline{\beta_1}&\overline{\alpha}_{1} \end{pmatrix}\begin{pmatrix} \alpha _2 &\beta _2 \\- \overline{\beta}_{2}& \overline{\alpha}_{2} \end{pmatrix}= \begin{pmatrix} \alpha _1 \alpha _2 -\beta _1 \overline{\beta}_{2}&\alpha _1 \beta _2 +  \beta _1  \overline{\alpha}_{2}\\ - \overline{\alpha_1\beta _2 + \beta _1 \overline{\alpha}_{2}}& \overline{\alpha_1\alpha _2 -\beta _1 \overline{\beta}_{2}}  \end{pmatrix} \tag{*}$$ 
> 并且
> 若
> $$ \alpha_1\alpha _2 -\beta _1 \overline{\beta_2}= \alpha _1\beta _2 + \beta _1  \overline{\alpha_2}= 0 $$ 
> 则
> $$ \alpha _1 \alpha _2 \beta _2 +  \beta _1 \left| \alpha _2  \right|^{2}= 0\implies \beta _1 \left| \beta _2  \right|^{2}+ \beta _1 \left| \alpha _2  \right|^{2}= 0\implies \beta _1 = 0, \text{or} \beta _2 = \alpha _2 = 0    $$ 
> 后者是不可能的, 但是若为前者, 则$\alpha _1 \neq 0$, 但是此时$\alpha _1 \alpha _2 = \alpha _1 \beta _2= 0\implies \alpha _2 = \beta _2 = 0$矛盾. 
> 因此(*)式右侧属于$G$, 这表明$G$对矩阵乘法封闭.
> 注意到
> $$ \begin{pmatrix} \alpha &\beta \\-\beta &\overline{\alpha} \end{pmatrix}\begin{pmatrix} \overline{\alpha}&-\beta \\ \beta &\alpha  \end{pmatrix}= \begin{pmatrix} \left| \alpha  \right|^{2}+ \left| \beta  \right|^{2} & 0\\0&\left| \alpha  \right|^{2}+ \left| \beta  \right|^{2}    \end{pmatrix} $$ 
> 因此$\begin{pmatrix} \alpha &\beta \\-\beta &\overline{\alpha} \end{pmatrix}$有逆
> $$ \frac{1 }{\left| \alpha  \right|^{2}+ \left| \beta  \right|^{2}   }\begin{pmatrix} \overline{\alpha}&-\beta \\ \beta &\alpha  \end{pmatrix}\in G $$ 
> 故$G$对逆封闭. 而$G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的$4$维闭子集, 进而$G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的$4$维拓扑闭子群. 由Cartan闭子群定理, $G$是$\operatorname{GL} \left(2,\mathbb{C} \right)$的一个$4$维嵌入李子群, 自然是一个4维李群.

> [!exercise] 5.7
> 用 $\mathbb R^*$ 记非零实数的集合，命
> $K=\mathbb R^*\times\mathbb R$。
>
> (1) 在 $K$ 上定义乘法 $\cdot$ 为
> $$
> (a,b)\cdot(a_1,b_1)=(aa_1,\ b+ab_1),\qquad \forall (a,b),(a_1,b_1)\in K.
> $$
> 证明：$K$ 是一个 $2$ 维李群，并且求 $K$ 的左不变向量场和结构常数。
>
> (2) 在 $K$ 上定义乘法 $*$ 为
> $$
> (a,b)*(a_1,b_1)=(aa_1,\ ba_1+b_1),\qquad \forall (a,b),(a_1,b_1)\in K.
> $$
> 证明：$K$ 仍是一个 $2$ 维李群，并且求 $K$ 的左不变向量场和结构常数。
>
> 然后将以上两种情况进行比较，看一看所得的结果有什么差别。
