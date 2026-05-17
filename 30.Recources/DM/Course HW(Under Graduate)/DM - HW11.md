> [!exercise] 4.15
> 设 $M=\mathbb{R}^2\setminus\{0\}$，命
> $$
> \eta=\frac{y\,dx-x\,dy}{x^2+y^2}.
> $$
> 
> 1. 证明：$\eta$ 是闭微分式。
> 2. 证明：$\eta$ 不是恰当微分式。
> 3. 如果考虑流形
>    $$
>    \widetilde M=\{(x,y)\in\mathbb{R}^2:y>0\},
>    $$
>    则 $\eta$ 在 $\widetilde M$ 上是否是恰当的？如果 $\eta$ 是恰当的，找出函数 $f\in C^\infty(\widetilde M)$，使得 $df=\eta$。

> [!proof] Proof: 
> 1. 计算
>    $$ \begin{aligned} d \eta &=  d\left(\frac{y }{x^{2}+ y^{2} }\right) \wedge dx-d\left(\frac{x }{x^{2}+ y^{2} }\right)\wedge  dy\\&= \frac{\left(x^{2}+ y^{2}\right) dy- yd\left(x^{2}+ y^{2}\right)}{\left(x^{2}+ y^{2}\right)^{2} }\wedge \,d x-\frac{\left(x^{2}+ y^{2}\right)dx-xd\left(x^{2}+ y^{2}\right) }{\left(x^{2}+ y^{2}\right) ^{2}}\,d\wedge \,\,d y\\&= \frac{\left(x^{2}-y^{2}\right)\,d y-2xy\,d x}{\left(x^{2}+ y^{2}\right) ^{2}}\wedge \,d x-\frac{\left(y^{2}-x^{2}\right) \,d x-2xy\,d y}{ \left(x^{2}+ y^{2}\right)^{2}} \wedge \,d y\\&= \frac{y^{2}-x^{2} }{\left(x^{2}+ y^{2}\right)^{2} }\,d x\wedge \,d y- \frac{\left(y^{2}-x^{2}\right) }{ \left(x^{2}+ y^{2}\right)^{2}}\,d x\wedge \,d y\\&= 0\end{aligned}$$ 
>    因此 $\eta$是闭形式.
> 2. 若$\eta$是恰当形式, 设$\eta = d\omega$, 则令$S^{1}\subseteq M$是单位圆, $\eta$诱导出$S^{1}$上的恰当形式. 由Stokes定理
>       $$ \int _{S^{1}}\eta = \int _{S^{1}}\,d \omega= \int _{\partial S^{1}}\omega = \int _{\varnothing}\omega = 0  $$ 
>    但是
>    $$ \begin{aligned} \int _{S^{1}}\eta &= \int _{0}^{2\pi }\frac{\sin t \,d \left(\cos t\right)-\cos t \,d \left(\sin t\right) }{ \sin ^{2}t+ \cos ^{2}t} \\&= \int _{0}^{2\pi } -\sin ^{2}t \,d t-\cos ^{2}t\,d t\\&= -2\pi \end{aligned}$$ 
>    矛盾, 因此$\eta$不是恰当形式.
> 3. 若$y> 0$, 考虑形式,
>    考虑$\widetilde{M}$的坐标$\left(r,t\right)\mapsto \left(r\cos t, r\sin t\right)$, $\left(r,t\right)\in U= \left(0,\infty\right)\times \left(0,\pi \right)$
>    则
>    $$ \begin{aligned} \eta &= \frac{r\sin td\left(r\cos t\right)-\cos td\left(r\sin t\right) }{r^{2} }\\&= \frac{-r^{2}\sin ^{2}t\,d t+ r\sin t\cos t\,d r-r^{2}\cos ^{2}t\,d t-r\sin t\cos t\,d r }{r^{2} }\\&= -\,d t\end{aligned} $$ 
>    受此启发, 令 $f: \left(r,t\right)\mapsto -t$, 即$\left(x,y\right)\mapsto \arctan \left(\frac{x }{y }\right)$
>   那么
>    $$ df= -dt= \eta   $$ 
>    可见$\eta$在$\widetilde{M}$上恰当,  并且上述$f\in C^{\infty}\left(\widetilde{M}\right)$使得$df= \eta$.
> 
>
> 
    

> [!exercise] 4.16
> 设 $M=\mathbb{R}^n\setminus\{0\}$，$m$ 是一个固定的正整数，命
> $$
> \omega
> =
> \sum_{i=1}^{n}
> (-1)^{i+1}\frac{x^i}{\|x\|^m}
> dx^1\wedge\cdots\wedge \widehat{dx^i}\wedge\cdots\wedge dx^n,
> $$
> 其中
> $$
> \|x\|^m
> =
> \left(\sum_{i=1}^{n}(x^i)^2\right)^{m/2}.
> $$
> 
> 1. 求 $d\omega$。
> 2. 确定 $m$ 的值，使得 $\omega$ 成为闭微分式。
> 3. 证明：在 (2) 的情况下，$\omega$ 仍然不是恰当微分式。

> [!proof] Proof: 
> 1. $$ \begin{aligned}& \left(-1\right)^{i+ 1}d\left(\frac{x^{i} }{\left\| x \right\|^{m} }\,d x^{1}\wedge \cdots \wedge  \widehat{dx^{i}}\wedge \cdots \wedge \,d x^{n}\right)\\&=\left(-1\right)^{i+ 1} d\left(\frac{x^{i} }{ \left\| x \right\|^{m}}\right)\wedge \,d x^{2}\wedge \cdots \wedge \widehat{dx^{i}}\wedge \cdots \wedge dx^{n}\end{aligned} $$ 
> 
>    $$ \begin{aligned} d\left(\left\| x \right\|^{m}\right) &= d\left(\left(\left\| x \right\|^{2}\right)^{\frac{m }{2 }}\right)= \frac{m }{2 }\left(\left\| x \right\|^{2}\right)^{\frac{m}{2}-1}d\left(\left\| x \right\|^{2}\right)\\&=m \left\| x \right\|^{m-2}\sum _{i}x^{i}\,d x^{i} \end{aligned}$$ 
>    
>    $$ \begin{aligned} \begin{aligned} d\left(\frac{x^{i} }{\left\| x \right\|^{m} }\right) &= \frac{\left\| x \right\|^{m}\,d x^{i}- x^{i}\,d \left\| x \right\|^{m} }{ \left\| x \right\|^{2m}}\\&= \frac{dx^{i} }{\left\| x \right\|^{m} }- \frac{mx^{i}\left\| x \right\|^{m-2} \sum _{j}x^{j}\,d x^{i}}{\left\| x \right\|^{2m} }\\&= \frac{dx^{i} }{ \left\| x \right\|^{m}}-\frac{mx^{i}\sum _{i}x^{j}\,d x^{j}}{ \left\| x \right\|^{m+ 2}}\\&= \frac{dx^{i} }{\left\| x \right\|^{m} }-\frac{x^{i}A }{ \left\| x \right\|^{m+ 2}} \end{aligned}\end{aligned}$$ 
>    其中
>    $$ A= m\sum _{j}x^{j}\,d x^{j} $$ 
>    注意到
>    $$ \begin{aligned} A\wedge \left(dx^{1}\wedge \cdots \wedge \widehat{dx^{i}}\wedge \cdots \wedge dx^{n}\right)&= 2x^{i}\,d x^{i}\left(\,d x^{1}\wedge \cdots \wedge \widehat{dx^{i}}\wedge \,d x^{n}\right)\\&= \left(-1\right) ^{i-1}m x^{i}\,d x^{1}\wedge \cdots \wedge \,d x^{n}\end{aligned} $$ 
>     全部带入, 我们有
>      $$ \begin{aligned}& \left(-1\right)^{i+ 1} d\left(\frac{x^{i} }{\left\| x \right\|^{m} }\,d x^{1}\wedge \cdots \wedge \widehat{dx^{i}}\wedge \cdots \wedge dx^{n}\right)\\&=\left(-1\right)^{i+ 1}\frac{1 }{ \left\| x \right\|^{m}}dx^{i}\wedge \left(dx^{1}\wedge \cdots \wedge \widehat{dx^{i}}\wedge \cdots \wedge dx^{n}\right)\\&-\frac{m\left(x^{i}\right)^{2} }{\left\| x \right\|^{m+ 2} }\,d x^{1}\wedge \cdots \wedge \,d x^{n}\\&= \left(\frac{1 }{\left\| x \right\|^{m} }-\frac{m\left(x^{i}\right) ^{2}}{\left\| x \right\|^{m+ 2} }\right)\,d x^{1}\wedge \cdots \wedge \,d x^{n}\end{aligned}$$ 
>    对$i$求和, 得到
>    $$ d\omega = \left(\frac{n }{\left\| x \right\|^{m} }-\frac{m }{\left\| x \right\|^{m} }\right) \,d x^{1}\wedge \cdots \wedge \,d x^{n}$$ 
> 2. 若要使得$\omega$成为闭形式, 只需要
    取 $m= n$即可.

> [!exercise] 4.17
> 在 $\mathbb{R}^3\setminus\{0\}$ 中定义 $2$ 次外微分式
> $$
> \omega
> =
> \frac{x}{r^3}\,dy\wedge dz
> +
> \frac{y}{r^3}\,dz\wedge dx
> +
> \frac{z}{r^3}\,dx\wedge dy,
> $$
> 其中
> $$
> r=\sqrt{x^2+y^2+z^2}.
> $$
> 记 $S^2(r_0)$ 为 $\mathbb{R}^3$ 中以原点 $O$ 为球心、以 $r_0$ 为半径的球面。证明：
> $$
> \int_{S^2(r_0)}\omega=4\pi.
> $$

> [!exercise] 4.18
> 设
> $$
> \omega=A\,dy\wedge dz+B\,dz\wedge dx+C\,dx\wedge dy
> $$
> 是 $\mathbb{R}^3$ 中的 $2$ 次外微分式，其中 $A,B,C$ 是 $\mathbb{R}^3$ 上的光滑函数。假定 $d\omega=0$，令
> $$
> \begin{aligned}
> \alpha={}&
> \left(\int_0^1 tA(tx,ty,tz)\,dt\right)\cdot (y\,dz-z\,dy) \\
> &+\left(\int_0^1 tB(tx,ty,tz)\,dt\right)\cdot (z\,dx-x\,dz) \\
> &+\left(\int_0^1 tC(tx,ty,tz)\,dt\right)\cdot (x\,dy-y\,dx),
> \end{aligned}
> $$
> 验证：$d\alpha=\omega$。
