代靖涵 25120222201319

> [!exercise] Exercise: 
> 证明: 可分的度量空间是第二可数的.

> [!proof] Proof: 
> 
> **构造候选集族**: 设$X$是度量空间, $A\subseteq X$是一个可数的稠密子集, 使得$\overline{A}= X$,
> 
> 任取$a\in A$, 考虑集族
>  $$ \mathcal{B}= \left\{ B_{r}\left(a\right):r\in \mathbb{Q} ,a\in A \right\} $$
>  其中
>   $$ B_{r}\left(a\right):= \left\{ x\in X:d\left(x,a\right)< r \right\} $$ 
>  则$\mathcal{B}$中有至多可数多个集合.
> 
> **说明$\mathcal{B}$生成了拓扑**: 任取开集$U\subseteq X$. 任取$x\in U$, 设$B_{\delta }\left(x\right)\subseteq U$. 则由于$x\in \overline{A}$, $B_{\frac{\delta  }{2 }}\left(x\right)\cap A\neq \varnothing$, 即存在$a= a\left(x\right)\in A$, 使得$d\left(x,a\right)< \frac{\delta  }{2 }$.
> 
> 取$r= r\left(x\right)$, 使得
>  $$ r\in \mathbb{Q} ,\quad d\left(x,a\right)< r< \frac{\delta  }{2 } $$ 
> 
> 任取$y\in B_{r}\left(a\right)$, 我们有
>  $$ d\left(x,y\right)\le d\left(x,a\right)+ d\left(a,y\right)< r+ r< \delta  $$ 
> 故$x\in B_{r\left(x\right)}\left(a\right) \subseteq B_{\delta }\left(x\right)\subseteq U$. 因此
> 
>  $$ U= \bigcup _{x\in U}B_{r\left(x\right)}\left(a_{\left(x\right)}\right) $$ 
> 


> [!exercise] Exercise: 
> 举出一个度量空间的例子, 使得它的自然拓扑是$T_2$的, 但是不是第二可数的.

> [!proof] Proof: 
> 设$X$是不可数集合, 赋予$X$以离散度量$d$. 
> 
> **Hausdorff**: 则任取$x,y\in X$, $x\neq y$, 我们有$\left\{ x \right\}, \left\{ y \right\}$是开集, 使得$x\in \left\{ x \right\}, y\in \left\{ y \right\}$, $\left\{ x \right\}\cap \left\{ y \right\}= \varnothing$, 这表明$\left(X,d\right)$是$T^{2}$的. 
>
> **不是第二可数**: 取$\left(X,d\right)$的一个基$\mathcal{B}$, 由于$\left\{ x \right\}$是开集, 存在$B_{x}\in \mathcal{B}$, 使得$x\in B_{x}\subseteq \left\{ x \right\}$, 这表明$B_{x}= \left\{ x \right\}$. 因此$\mathcal{B}$包含所有的单点集, 是不可数的. 因此$\left(X,d\right)$不存在可数基, 不是第二可数的.

> [!exercise] Exercise: 
> 证明: 2.2.2例2给出的$C^{\infty}$覆盖$\Sigma _{0}= \left\{ \left(U_{\alpha },\varphi _{\alpha}\right):1\le \alpha \le 6 \right\}$和例3给出的$S^{2}$的$C^{\infty}$覆盖$\Sigma _1 = \left\{ \left(U,\varphi \right), \left(V,\psi \right) \right\}$在$S^{2}$上决定的$C^{\infty}$结构是同一个.
> 

> [!proof] Proof: 
>  $$ U_1= \left\{ \left(x,y,z\right)\in S^{2}:z> 0 \right\} ,\quad \varphi _1 \left(x,y,z\right)= \left(x,y\right)$$ 
>  $$ U= \left\{ \left(x,y,z\right)\in S^{2}:z> -1 \right\},\quad \psi \left(x,y,z\right)= \left(\frac{x }{ 1+ z},\frac{y }{1+ z }\right) $$ 
>  $$ \psi \circ \varphi _1 ^{-1} \left(x,y\right) = \left(\frac{x }{1+ \sqrt{1-x^{2}-y^{2}} },\frac{y }{1+ \sqrt{1-x^{2}-y^{2}} }\right)$$ 
> 是$\varphi _1 \left(U_1\cap U\right)= \left\{ \left(x,y,z\right)\in S^{2}: z> 0 \right\}$上的光滑映射.
>  $$ \varphi _1 \circ \psi ^{-1} : \left(\frac{x }{1+ z },\frac{y }{1+ z }\right)\mapsto \left(x,y\right) $$ 
> 令$u= \frac{x }{1+ z },v= \frac{y }{1+ z }$, 则
>  $$ u^{2}+ v^{2}= \frac{x^{2}+ y^{2} }{\left(1+ z\right)^{2} }= \frac{1-z^{2} }{\left(1+ z\right)^{2} }= \frac{1-z }{1+ z } \implies 1+ z= \frac{2 }{u^{2}+ v^{2}+ 1 }$$ 
> 于是
>  $$ x= u\left(1+ z\right)= \frac{2u }{u^{2}+ v^{2}+ 1 },\quad y= u\left(1+ z\right)= \frac{2v }{u^{2}+ v^{2}+ 1 } $$ 
>   $$ \varphi _1 \circ\psi ^{-1} \left(u,v\right)= \left(\frac{2u }{u^{2}+ v^{2}+ 1 },\frac{2v }{u^{2}+ v^{2}+ 1 }\right) $$ 
> 是$\psi \left(U_1\cap U\right)$上的光滑映射.
> 因此$\left(U_1,\varphi _1 \right)$和$\left(U,\varphi \right)$是$C^{\infty}$-相容的. 类似地可以说明$\left(U_{\alpha },\varphi _{\alpha }\right)$与$\left(U,\varphi \right)$,$\left(V,\psi \right)$都是$C^{\infty}$-相容的. 因此$\Sigma _0$和 $\Sigma _1$决定了相同的光滑结构.


> [!exercise] Exercise: 
> 证明: 2.2.2例5中的坐标卡$\left(U_{23},\varphi _{23}\right)$和$\left(U_{24},\varphi _{24}\right)$是$C^{\infty}$-相关的, 坐标卡$\left(U_{23},\varphi _{23}\right)$和$\left(U_{14},\varphi _{14}\right)$是$C^{\infty}$-相关的
 
> [!proof] Proof: 
>  $$ \begin{aligned} U_{23}\cap U_{24}&=\left\{ \left[ X \right]: X = \begin{pmatrix} u^{1}&1&0&u^{2}&u^{3} \\u^{4}&0&1&u^{5}&u^{6}\end{pmatrix} : \det \begin{pmatrix} 1&u^{2}\\0&u^{5} \end{pmatrix}\neq 0 \right\}\\&= \left\{ \left[ Y \right]: Y= \begin{pmatrix} v^{1}&1&v^{2}&0&v^{3} \\v^{4}&0&v^{5}&1&v^{6} \end{pmatrix} :\det \begin{pmatrix} 1&v^{2}\\0&v^{5} \end{pmatrix}\neq 0\right\} \end{aligned}  $$ 
>  $$ \begin{aligned} \varphi _{23}\left(\left[ X \right]\right) &= \begin{pmatrix} u^{1}&u^{2}&u^{3}\\u^{4}&u^{5}&u^{6} \end{pmatrix}\\&= \begin{pmatrix} 1&v^{2}\\0&v^{5} \end{pmatrix} ^{-1} \begin{pmatrix} v^{1}&0&v^{3}\\v^{4}&1&v^{6} \end{pmatrix}\\&= \begin{pmatrix} 1&-\frac{v^{2} }{v^{5} } \\0&\frac{1 }{v^{5} }\end{pmatrix}\begin{pmatrix} v^{1}&0&v^{3}\\v^{4}&1&v^{6} \end{pmatrix}\\&= \begin{pmatrix}v^{1}-\frac{v^{2}v^{4} }{v^{5} }&-\frac{v^{2} }{v^{5} }&v^{3}-\frac{v^{2}v^{6} }{v^{5} }\\\frac{v^{4} }{v^{5} }&\frac{1 }{v^{5} }&\frac{v^{6} }{v^{5} }   \end{pmatrix}\end{aligned}$$
> 因此
>  $$ u^{1}= \frac{v^{1}v^{5}-v^{2}v^{4} }{v^{5} },\quad u^{2}= \frac{-v^{2} }{v^{5} },\quad u^{3}= \frac{v^{3}v^{5}-v^{2}v^{6} }{ v^{5}} $$
>  $$ u^{4}= \frac{v^{4} }{v^{5} },\quad u^{5}= \frac{1 }{v^{5} },\quad u^{6}= \frac{v^{6} }{v^{5} } $$
>  $$ \begin{aligned} \varphi _{24}\left(\left[ Y \right]\right)&= \begin{pmatrix} v^{1}&v^{2}&v^{3}\\v^{4}&v^{5}&v^{6} \end{pmatrix}\\&= \begin{pmatrix} 1&u^{2}\\0&u^{5} \end{pmatrix}^{-1} \begin{pmatrix} u^{1}&0&u^{3}\\u^{4}&1&u^{6} \end{pmatrix}\\&=\begin{pmatrix}u^{1}-\frac{u^{2}u^{4} }{u^{5} }&-\frac{u^{2} }{u^{5} }&u^{3}-\frac{u^{2}u^{6} }{u^{5} }\\\frac{u^{4} }{u^{5} }&\frac{1 }{u^{5} }&\frac{u^{6} }{u^{5} }   \end{pmatrix} \end{aligned} $$ 
> 因此
>  $$ v^{1}= \frac{u^{1}u^{5}-u^{2}u^{4} }{u^{5} },\quad v^{2}= \frac{-u^{2} }{u^{5} },\quad v^{3}= \frac{u^{3}u^{5}-u^{2}u^{6} }{ u^{5}} $$
>  $$ v^{4}= \frac{u^{4} }{u^{5} },\quad v^{5}= \frac{1 }{u^{5} },\quad v^{6}= \frac{u^{6} }{u^{5} } $$
> 故$\left(U_{23},\varphi _{23}\right)$和$\left(U_{24},\varphi _{24}\right)$是$C^{\infty}$相关的.
>
>  $$ \begin{aligned} U_{23}\cap U_{14}&= \left\{ [X]:X= \begin{pmatrix} u^{1}&1&0&u^{2}&u^{3}\\u^{4}&0&1&u^{5}&u^{6} \end{pmatrix} : \det \begin{pmatrix} u^{1}&u^{2}\\u^{4}&u^{5} \end{pmatrix}\neq 0\right\}\\&= \left\{ [Y]:Y= \begin{pmatrix} 1&v^{1}&v^{2}&0&v^{3}\\0&v^{4}&v^{5}&1&v^{6} \end{pmatrix} : \det \begin{pmatrix} v^{1}&v^{2}\\v^{4}&v^{5} \end{pmatrix}\neq 0\right\} \end{aligned} $$ 
>  $$ \begin{aligned} \varphi _{23}\left(\left[ X \right]\right)&= \begin{pmatrix} u^{1}&u^{2}&u^{3}\\u^{4}&u^{5}&u^{6} \end{pmatrix}\\&= \begin{pmatrix} v^{1}&v^{2}\\v^{4}&v^{5} \end{pmatrix}^{-1}\begin{pmatrix} 1&0&v^{3}\\0&1&v^{6} \end{pmatrix}\\&= \frac{1}{v^{1}v^{5}-v^{2}v^{4}}\begin{pmatrix} v^{5}&-v^{2}\\-v^{4}&v^{1} \end{pmatrix}\begin{pmatrix} 1&0&v^{3}\\0&1&v^{6} \end{pmatrix}\\&=\frac{1}{v^{1}v^{5}-v^{2}v^{4}}\begin{pmatrix} v^{5}&-v^{2}&v^{3}v^{5}-v^{2}v^{6}\\-v^{4}&v^{1}&v^{1}v^{6}-v^{3}v^{4} \end{pmatrix}\end{aligned}$$
> 因此
>  $$ u^{1}= \frac{v^{5}}{v^{1}v^{5}-v^{2}v^{4}},\quad u^{2}= \frac{-v^{2}}{v^{1}v^{5}-v^{2}v^{4}},\quad u^{3}= \frac{v^{3}v^{5}-v^{2}v^{6}}{v^{1}v^{5}-v^{2}v^{4}} $$
>  $$ u^{4}= \frac{-v^{4}}{v^{1}v^{5}-v^{2}v^{4}},\quad u^{5}= \frac{v^{1}}{v^{1}v^{5}-v^{2}v^{4}},\quad u^{6}= \frac{v^{1}v^{6}-v^{3}v^{4}}{v^{1}v^{5}-v^{2}v^{4}} $$
>  $$ \begin{aligned} \varphi _{14}\left(\left[ Y \right]\right)&= \begin{pmatrix} v^{1}&v^{2}&v^{3}\\v^{4}&v^{5}&v^{6} \end{pmatrix}\\&= \begin{pmatrix} u^{1}&u^{2}\\u^{4}&u^{5} \end{pmatrix}^{-1}\begin{pmatrix} 1&0&u^{3}\\0&1&u^{6} \end{pmatrix}\\&=\frac{1}{u^{1}u^{5}-u^{2}u^{4}}\begin{pmatrix} u^{5}&-u^{2}\\-u^{4}&u^{1} \end{pmatrix}\begin{pmatrix} 1&0&u^{3}\\0&1&u^{6} \end{pmatrix}\\&=\frac{1}{u^{1}u^{5}-u^{2}u^{4}}\begin{pmatrix} u^{5}&-u^{2}&u^{3}u^{5}-u^{2}u^{6}\\-u^{4}&u^{1}&u^{1}u^{6}-u^{3}u^{4} \end{pmatrix}\end{aligned} $$ 
> 因此
>  $$ v^{1}= \frac{u^{5}}{u^{1}u^{5}-u^{2}u^{4}},\quad v^{2}= \frac{-u^{2}}{u^{1}u^{5}-u^{2}u^{4}},\quad v^{3}= \frac{u^{3}u^{5}-u^{2}u^{6}}{u^{1}u^{5}-u^{2}u^{4}} $$
>  $$ v^{4}= \frac{-u^{4}}{u^{1}u^{5}-u^{2}u^{4}},\quad v^{5}= \frac{u^{1}}{u^{1}u^{5}-u^{2}u^{4}},\quad v^{6}= \frac{u^{1}u^{6}-u^{3}u^{4}}{u^{1}u^{5}-u^{2}u^{4}} $$
> 故$\left(U_{23},\varphi _{23}\right)$和$\left(U_{14},\varphi _{14}\right)$是$C^{\infty}$相关的.

> [!exercise] Exercise: 
> 设$\Sigma$是$\mathbb{R} ^{3}$中的一个非空子集. 如果对于$\Sigma$中的每一点$p$, 都有点$p\in \mathbb{R} ^{3}$中的开邻域$U$, 使得$U\cap \Sigma$是一个光滑正则曲面$\varphi:D\to \mathbb{R} ^{3}$的像集, 其中$D$是$\mathbb{R} ^{2}$的一个连通开子集, 则称$\Sigma$是$\mathbb{R} ^{3}$中的一个正则光滑曲面. 证明: $\mathbb{R} ^{3}$中的一个光滑正则曲面$\Sigma$必定是一个2维光滑流形.



> [!proof] Proof: 
> 赋予$\Sigma$以子空间拓扑. 则$\Sigma$第二可数且Hausdorff.
> 
> 任取$p\in \Sigma$, 则$U\cap \Sigma$是$\Sigma$上的一个开集, 则$\varphi_{p} :D_{p}\to U\cap \Sigma$是$C^{\infty}$正则参数表示. 
> 定义 $\Phi _{p}:D_{p}\times \mathbb{R} \to U$
>  $$ \Phi _{p}\left(u,v,t\right)= \varphi _{p}\left(u,v\right)+ t \mathbf{n}\left(u,v\right) $$ 
> 其中$\mathbf{n}\left(u,v\right):= \left(\partial _{1}\varphi _{p}\right)\left(u,v\right)\times \left(\partial _{2}\varphi _{p}\right)\left(u,v\right)$
> 则
>  $$\det \left(D\Phi _{p}\right)_{\left(\varphi _{p}^{-1} \left(p\right),0\right)}= \det \begin{pmatrix} \partial _{1}\varphi _{p}, \partial _{2}\varphi _{p}, \mathbf{n} \end{pmatrix}\neq 0$$
> 因此由反函数定理, 存在$V_{p}\subseteq D_{p}$, 和$\left(\varepsilon > 0\right)$, $U_{p}\subseteq U$, 使得 $\Phi _{p}$是$V_{p}\times \left(-\varepsilon ,\varepsilon \right)$到$U_{p}$的微分同胚, 且$\Phi _{p}\left(V_{p}\times \left\{ 0 \right\}\right)= U_{p}\cap \Sigma$. 由于
>  $$ \Phi _{p}|_{V_{p}\times \left\{ 0 \right\}}= \varphi _{p}|_{V_{p}} $$ 
> $\varphi _{p}$在$V_{p}$上有逆映射$\psi _{p}= \operatorname{pr}\circ \Phi _{p}^{-1} |_{U_{p}\cap \Sigma }$. 
> 
>   则
>  $$ \left\{ \left(U_{p}\cap \Sigma ,\psi _{p}\right) \right\}_{p} $$
> 是覆盖了$\Sigma$的一族二维坐标卡.
> 
> 考虑两个坐标卡$\left(U_{p}\cap \Sigma ,\psi _{p}\right)$, $\left(U_{q}\cap \Sigma ,\psi _{q}\right)$, 则
> 在$\psi _{q}\left(U_{p}\cap U_{q}\cap \Sigma \right)$上, 成立
>  $$ \psi _{p}\circ \psi _{q}^{-1} = \operatorname{pr}\circ\Phi _{p}^{-1} \circ \varphi _{q} $$ 
> 是$C^{\infty}$-映射. 类似地, 在$\psi _{p}\left(U_{p}\cap U_{q}\cap \Sigma \right)$上, 成立 
>  $$ \psi _{q}\circ \psi _{p}^{-1} =\operatorname{pr}\circ \Phi _{q}^{-1} \circ \varphi _{p}$$
> 是$C^{\infty}$映射. 因此$\left\{ \left(U_{p}\cap \Sigma ,\psi _{p}\right) \right\}_{p\in \Sigma }$两两之间光滑相容, 故$\Sigma$是一个2维光滑流形. 