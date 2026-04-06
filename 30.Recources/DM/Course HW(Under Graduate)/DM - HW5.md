> [!exercise] Exercise:
>  设 $(U,\varphi)$ 是 $3$ 维光滑流形 $M$ 的坐标卡, 相应的局部坐标系是 $(U;u^i)$, 假定光滑曲线 $\gamma$ 的参数方程是
> 
> $$\varphi(\gamma(t))=(u^1(t),u^2(t),u^3(t))=(\sqrt{2}\cos t,t^2,\sin^2 t),\quad -\pi<t<\pi.$$
> 
> 设 $f,g\in C^\infty(M)$ 在 $U$ 上的限制分别是
> 
> $$f\circ\varphi^{-1}=(u^1)^2+(u^2)^2+(u^3)^2,\qquad g\circ\varphi^{-1}=u^1u^2u^3.$$
> 
> 求:
> 
> 1. $(\gamma^{\prime} (0)) f$;
> 2. $(\gamma'(\pi/6))f$;
> 3. $(\gamma'(0))g$;
> 4. $(\gamma'(\pi/3))g$;
> 5. $(\gamma'(0))(f\cdot g)$.

> [!solution] Solution: 
>  
>  1.
>  $$ \begin{aligned} \gamma ^{\prime} \left(0\right)f&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}f\left(\gamma \left(t\right)\right)\\&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}\left(f\circ \varphi ^{-1} \circ \left(\varphi \left(\gamma \left(t\right)\right)\right)\right)\\&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}\left(2\cos ^{2}t+ t^{4}+ \sin ^{4}t\right)\\&= \left[ -4\cos t\sin t+ 4t^{3}+ 4\sin ^{3}t\cos t \right]_{t= 0}\\&= 0  \end{aligned}$$
>  
>  2.
>  类似地, 
>  
>   $$ \begin{aligned} \left(\gamma ^{\prime} \left(\frac{\pi  }{6 }\right)\right)f&= [-4\cos t\sin t+ 4t^{3}+ 4\sin ^{3}t\cos t] _{t= \frac{\pi  }{6 }}\\&= -\frac{3\sqrt{3} }{4 }+ \frac{\pi ^{3} }{54 } \end{aligned}$$ 
>  
>  3.
>   $$ \begin{aligned} \begin{aligned} \left(\gamma ^{\prime} \left(0\right)\right)g&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}\left(g\circ \varphi ^{-1} \circ\left(\varphi \left(\gamma \left(t\right)\right)\right)\right)\\&= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}\left(\sqrt{2}t^{2}\cos t\sin ^{2}t\right)\\&= \left[ 2\sqrt{2} t\cos t\sin ^{2}t- \sqrt{2}t^{2}\sin ^{3}t+ 2\sqrt{2}t^{2}\cos ^{2}t\sin t\right]_{t= 0}\\&= 0 \end{aligned} \end{aligned} $$
>  4.
>   $$ \begin{aligned} \left(\gamma ^{\prime} \left(\frac{\pi  }{3 }\right)\right) g &= \left[ 2\sqrt{2}t\cos t\sin ^{2}t-\sqrt{2}t^{2}\sin ^{3}t+ 2\sqrt{2}t^{2}\cos ^{2}t \sin t\right]_{t= \frac{\pi  }{3 }}\\&= 2\sqrt{2}\frac{\pi  }{3 }\frac{1 }{2 }\frac{3 }{4 }-\sqrt{2}\frac{\pi ^{2} }{ 9}\frac{3 \sqrt{3}}{8 }+ 2\sqrt{2}\frac{\pi ^{2} }{9 }\frac{1 }{4 }\frac{\sqrt{3} }{2 }\\&= \frac{\sqrt{2}\pi  }{4 }-\frac{\sqrt{6}\pi ^{2} }{72 } \end{aligned}$$  
>  5.
>    $$ \begin{aligned} \gamma ^{\prime} \left(0\right)\left(f\cdot g\right)&= \left(\gamma ^{\prime} \left(0\right)f\right) g+ f\left(\gamma ^{\prime} \left(0\right)g\right)\\&=0  \end{aligned}$$ 

> [!exercise] Exercise:
> 证明: $n$ 维光滑流形 $M$ 上在任意一点 $p\in M$ 的任意一个切向量 $v\in T_pM$ 必定是 $M$ 上经过点 $p$ 的一条光滑曲线的切向量.

> [!proof] Proof: 
> 任取$p\in M$, $v\in T_{p}M$. 设$\left(U,\left(x^{1},\cdots ,x^{n}\right)\right)$是以$p$为中心的一个坐标卡. 则
>  $$ v\in T_{p}M= \operatorname{span}\left\{ \partial _{1}|_{0},\cdots ,\partial _{n}|_{0} \right\}$$
> 设
>  $$ v= v^{i}\left. \partial _{i} \right|_{0} $$
> 定义$\gamma \left(t\right):I\to U$, 
>  $$ \gamma \left(t\right)=\left(tv^{1},\cdots ,tv^{n}\right) $$   
> 则$\gamma$是$U$上的光滑曲线, 使得
>  $$ \gamma ^{\prime} \left(0\right)= v^{i}\left. \partial _{i} \right|_{0}= v $$ 

> [!exercise] Exercise:
> 求下列光滑映射在指定点的切映射 $f_{*}$ 和余切映射 $f^{*}$:
> 
> 1. $f:\mathbb{R}\to\mathbb{R}^{2}, f(t)=(t,\alpha t)$, 其中 $\alpha$ 是固定实数, 指定点是 $t_{0}$.
> 2. $f:\mathbb{R}^{2}\to\mathbb{R}^{2}, f(x,y)=(x\cos y,x\sin y)$, 指定点是 $p=(x_{0},y_{0})$.
> 3. $f:\mathbb{R}\to\mathbb{R}^{2}, f(t)=(\cos 2\pi t,\sin 2\pi t)$, 指定点是 $t_{0}=0,\frac{1}{3},\frac{5}{8}$.
> 4. $f:\mathbb{R}^{2}\to\mathbb{R}, f(x,y)=x^{2}y-\sin x$, 指定点是 $p=(x_{0},y_{0})$.

> [!solution] Solution: 
> 1.  $$ f_{*}\left(\frac{\mathrm{d}}{\mathrm{d}t}\right)=\partial _{x}+ \alpha \partial _{y} $$
> 切映射 $f_{*}:T_{t_0}\mathbb{R} \to T_{\left(t_0,\alpha t_0\right)}\mathbb{R} ^{2}$
>    $$ f_{*}\left(k\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t_0}\right)= k\left. \partial _{x} \right|_{\left(t_0,\alpha t_0\right)}+ k\alpha \left. \partial _{y} \right|_{\left(t_0,\alpha t_0\right)} $$
> 余切映射 $f^{*}:T^{*}_{\left(t_0,\alpha t_0\right)}\mathbb{R} ^{2}\to T^{*}_{t_0}\mathbb{R}$ 
>    $$ \begin{aligned} f^{*}\left(\omega ^{1}\,\left. \mathrm{d} x \right|_{\left(t_0,\alpha t_0\right)}+ \omega ^{2}\left. \,\mathrm{d} y \right|_{\left(t_0,\alpha t_0\right)}\right)&= \left(\omega ^{1}+ \alpha \omega ^{2}\right)\,\left. \mathrm{d} t \right|_{t_0} \end{aligned} $$
> 
> 2.  $$ f_{*}\left(\partial _{x}\right)= \cos y\partial _{x}+ \sin y\partial _{y} $$
>  $$ f_{*}\left(\partial _{y}\right)= -x\sin y\partial _{x}+ x\cos y\partial _{y} $$
> $f_{*}:T_{p}\mathbb{R} ^{2}\to T_{f\left(p\right)}\mathbb{R} ^{2}$
>  $$ f_{*}\left(a\partial _{x}|_{p}+ b\partial _{y}|_{p}\right)= \left(a\cos y_0-bx_0\sin y_0\right)\partial _{x}|_{f\left(p\right)}+ \left(a\sin y_0+ bx_0\cos y_0\right)\partial _{y} |_{f\left(p\right)} $$
> $f^{*}:T^{*}_{f\left(p\right)}\mathbb{R} ^{2}\to T^{*}_{p}\mathbb{R} ^{2}$
>  $$ \begin{aligned} f^{*}\left(a\,\mathrm{d} x|_{f\left(p\right)}+ b\,\mathrm{d} y|_{f\left(p\right)}\right)&= a\left(\,\mathrm{d} \left(x\cos y\right)\right)|_{p}+ b\left(\mathrm{d}\left(x\sin y\right)\right)|_{p}\\&= a\left(\cos y\,\mathrm{d} x-x\sin y\,\mathrm{d} y\right)_{p}+ b\left(\sin y\,\mathrm{d} x+ x\cos y\,\mathrm{d} y\right)_{p}\\&= \left(a\cos y_0+ b\sin y_0\right)\,\mathrm{d} x|_{p}+ \left(bx_0\cos y_0-ax_0\sin y_0\right)\,\mathrm{d} y|_{p} \end{aligned} $$
> 
> 3.  $$ f_{*}\left(\frac{\mathrm{d}}{\mathrm{d}t}\right)= -2\pi\sin 2\pi t\partial _{x}+ 2\pi\cos 2\pi t\partial _{y} $$
> $f_{*}:T_{t_0}\mathbb{R} \to T_{f\left(t_0\right)}\mathbb{R} ^{2}$
>  $$ f_{*}\left(k\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t_0}\right)= -2k\pi\sin 2\pi t_0\left. \partial _{x} \right|_{f\left(t_0\right)}+ 2k\pi\cos 2\pi t_0\left. \partial _{y} \right|_{f\left(t_0\right)} $$
> $f^{*}:T^{*}_{f\left(t_0\right)}\mathbb{R} ^{2}\to T^{*}_{t_0}\mathbb{R}$
>  $$ \begin{aligned} f^{*}\left(a\left. \,\mathrm{d} x \right|_{f\left(t_0\right)}+ b\left. \,\mathrm{d} y \right|_{f\left(t_0\right)}\right)&= a\left(\mathrm{d}\left(\cos 2\pi t\right)\right)|_{t_0}+ b\left(\mathrm{d}\left(\sin 2\pi t\right)\right)|_{t_0}\\&= \left(-2a\pi\sin 2\pi t_0+ 2b\pi\cos 2\pi t_0\right)\,\left. \mathrm{d} t \right|_{t_0} \end{aligned} $$
> 代入具体的指定点:
>  - 对于 $t_0=0$:
>    $$ f_{*}\left(k\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{0}\right)= 2k\pi\left. \partial _{y} \right|_{\left(1,0\right)} $$
>    $$ f^{*}\left(a\left. \,\mathrm{d} x \right|_{\left(1,0\right)}+ b\left. \,\mathrm{d} y \right|_{\left(1,0\right)}\right)= 2b\pi\left. \,\mathrm{d} t \right|_{0} $$
>  - 对于 $t_0=\frac{1}{3}$:
>    $$ f_{*}\left(k\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{\frac{1}{3}}\right)= -k\pi\sqrt{3}\left. \partial _{x} \right|_{\left(-\frac{1}{2},\frac{\sqrt{3}}{2}\right)}- k\pi\left. \partial _{y} \right|_{\left(-\frac{1}{2},\frac{\sqrt{3}}{2}\right)} $$
>    $$ f^{*}\left(a\left. \,\mathrm{d} x \right|_{\left(-\frac{1}{2},\frac{\sqrt{3}}{2}\right)}+ b\left. \,\mathrm{d} y \right|_{\left(-\frac{1}{2},\frac{\sqrt{3}}{2}\right)}\right)= \left(-a\pi\sqrt{3}-b\pi\right)\left. \,\mathrm{d} t \right|_{\frac{1}{3}} $$
>  - 对于 $t_0=\frac{5}{8}$:
>    $$ f_{*}\left(k\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{\frac{5}{8}}\right)= k\pi\sqrt{2}\left. \partial _{x} \right|_{\left(-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}\right)}- k\pi\sqrt{2}\left. \partial _{y} \right|_{\left(-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}\right)} $$
>    $$ f^{*}\left(a\left. \,\mathrm{d} x \right|_{\left(-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}\right)}+ b\left. \,\mathrm{d} y \right|_{\left(-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}\right)}\right)= \left(a\pi\sqrt{2}-b\pi\sqrt{2}\right)\left. \,\mathrm{d} t \right|_{\frac{5}{8}} $$
> 
> 4.  $$ f_{*}\left(\partial _{x}\right)= \left(2xy-\cos x\right)\frac{\mathrm{d}}{\mathrm{d}t} $$
>  $$ f_{*}\left(\partial _{y}\right)= x^{2}\frac{\mathrm{d}}{\mathrm{d}t} $$
> $f_{*}:T_{p}\mathbb{R} ^{2}\to T_{f\left(p\right)}\mathbb{R}$
>  $$ f_{*}\left(a\partial _{x}|_{p}+ b\partial _{y}|_{p}\right)= \left(a\left(2x_0y_0-\cos x_0\right)+ bx_0^{2}\right)\left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{f\left(p\right)} $$
> $f^{*}:T^{*}_{f\left(p\right)}\mathbb{R}\to T^{*}_{p}\mathbb{R} ^{2}$
>  $$ \begin{aligned} f^{*}\left(c\left. \,\mathrm{d} t \right|_{f\left(p\right)}\right)&= c\left(\mathrm{d}\left(x^{2}y-\sin x\right)\right)|_{p}\\&= c\left(2x_0y_0-\cos x_0\right)\,\mathrm{d} x|_{p}+ cx_0^{2}\,\mathrm{d} y|_{p} \end{aligned} $$

> [!exercise] Exercise:
> 设映射 $f:\mathbb{R}^{2}\to\mathbb{R}^{2}$ 定义为
> $$
> \begin{aligned}
> u&=xe^{y}+y,\\
> v&=xe^{y}-y.
> \end{aligned}
> $$
> 验证 $f$ 是光滑同胚, 并且求在各点 $p=(x,y)\in\mathbb{R}^{2}$ 处的切映射 $f_{*}$ 和余切映射 $f^{*}$ 在自然基下的矩阵.

> [!proof] Proof: 
> $u,v:\mathbb{R} ^{2}\to \mathbb{R}$是光滑映射, 并且$\left(u,v\right)$有逆映射
>  $$ y= \frac{u-v }{2 },\quad x= \frac{u+ v }{2e^{\frac{u-v }{2 }} } $$
> 也是光滑的. 故$f$是光滑同胚.
> $f_{*}$的矩阵为
>  $$ \begin{pmatrix} \frac{\partial u}{\partial x}&\frac{\partial v}{\partial x}\\ \frac{\partial u}{\partial y}&\frac{\partial v}{\partial y}\end{pmatrix} = \begin{pmatrix} e^{y}&xe^{y}+ 1\\e^{y}&xe^{y}-1 \end{pmatrix}$$  
> $f^{*}$的矩阵为$f_{*}$矩阵的转置, 为
>  $$ \begin{pmatrix} e^{y} &e^{y}\\xe^{y}+ 1&xe^{y}-1\end{pmatrix} $$ 

> [!exercise] Exercise:
> 设 $M^m$, $N^n$ 是两个光滑流形, 且 $M$ 是连通的, 即 $M$ 不能是两个非空的, 互不相交的开子集之并, $f:M\to N$ 是光滑映射. 证明: 若在每一点 $p\in M$ 都有 $f_{*p}=0$, 则 $f$ 是常值映射.

> [!proof] Proof: 
> 取定$p_0\in M^{n}$, 定义
>  $$ U= \left\{ p\in M:f\left(p\right)= f\left(p_0\right) \right\} $$
> 则$U$非空. 任取$p\in U$, 取$p$附近的凸坐标卡$\left(V,\varphi \right)$,  

> [!exercise] Exercise:
> 设 $M$ 是 $n$ 维紧致的光滑流形, $f:M\to\mathbb{R}^n$ 是光滑映射. 证明: 在 $M$ 上至少存在一点 $p$, 使得切映射 $f_{*p}$ 的秩小于 $n$.

> [!exercise] Exercise:
> 设 $S^n$ 是 $\mathbb{R}^{n+1}$ 中的单位球面, $\mathbb{R}P^n$ 是 $n$ 维射影空间, 定义映射 $f:S^n\to\mathbb{R}P^n$ 如下:
> $$f(x^1,\cdots,x^{n+1})=[(x^1,\cdots,x^{n+1})],\quad \forall(x^1,\cdots,x^{n+1})\in S^n,$$
> 其中 $[(x^1,\cdots,x^{n+1})]$ 表示与 $(x^1,\cdots,x^{n+1})$ 共线的向量的等价类. 试在 $S^n$, $\mathbb{R}P^n$ 各自相应的局部坐标系下写出映射 $f$ 的表达式, 证明: 这是光滑映射, 并且它的秩处处是 $n$.