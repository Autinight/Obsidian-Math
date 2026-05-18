# 第七章　多元积分学



## §7.1　含参变量积分

> [!note] 导读
> 含参变量积分，跟函数项级数一样，是表达函数、研究函数的重要工具，也是各类考试的重点之一，而且难度较大。非数学□系考生应侧重于积分计算，涉及一致收敛的证明，可不作太多要求；但数学院系的学生则既要善于计算又要会严格论证。


### 一、含参变量的正常积分


#### a．积分号下取极限与连续性守恒

> [!note] 要点
> 我们已知：
>
> 1）只要每个 $f_n(x)$ 在 $[a, b]$ 上连续，且当 $n\to\infty$ 时 $f_n(x) \rightrightarrows f(x)$ 于 $[a, b]$ 上，则
> $f(x)$ 在 $[a, b]$ 上连续，且可在积分号下取极限，即
>
> $$
> \lim_{n\to\infty} \int_a^b f_n(x) dx = \int_a^b \lim_{n\to\infty} f_n(x) dx = \int_a^b f(x) dx.
> $$
>
> 2）若 $f(x, y)$ 在 $[a, b; y_0-\delta, y_0+\delta]$（$\delta > 0$）上连续，（或者只要 $f(x, y)$ 在 $y = y_0$ 处关于 $x\in[a, b]$ 一致连续，即：$\forall \varepsilon > 0$，$\exists \delta(y_0, \varepsilon) > 0$，当 $|y - y_0| < \delta$ 时，
> $|f(x, y) - f(x, y_0)| < \varepsilon$（$\forall x\in[a, b]$）.）
>
> 则可在积分号下取极限：$\lim_{y\to y_0} \int_a^b f(x, y) dx = \int_a^b \lim_{y\to y_0} f(x, y) dx = \int_a^b f(x, y_0) dx$.
>
> 3）（连续性守恒）若 $f(x, y)$ 在 $a \le x \le b, y \in I$ 上连续，则 $g(y) = \int_a^b f(x, y) dx$ 在 $I$ 上连续（这里 $I$ 可以是开的、闭的、半开半闭的、有穷或无穷区间）。
>
> 由1）、2）可见，要在积分号下取极限，关键在于证明一致收敛或相应的连续性。

> [!example] ☆例7.1.1
> 求极限 $\lim_{n\to\infty} \int_0^1 dx / [1 + (1 + x/n)^n]$.

> [!solution]- 解Ⅰ
> （利用一致收敛。）闭区间上连续函数的单调序列以连续函数为极限：
>
> $f_n(x) \equiv 1 / [1 + (1 + x/n)^n] \to 1 / (1 + e^x)$ 于 $[0, 1]$ 上（当 $n\to\infty$ 时）. 由 Dini 定理知，$f_n(x) \rightrightarrows 1 / (1 + e^x)$
>
> 于 $[0, 1]$ 上. 故可在积分号下取极限：
> $$
> \lim_{n\to\infty}\int_0^1\frac{dx}{1+\left(1+\frac{x}{n}\right)^n}
> =\int_0^1\lim_{n\to\infty}\frac{dx}{1+\left(1+\frac{x}{n}\right)^n}
> =\int_0^1\frac{dx}{1+e^x}
> =\ln\frac{2e}{1+e}.
> $$

> [!solution]- 解II
> （利用连续性守恒．考虑相应的函数极限：
> $$
> \lim_{y\to0}\int_0^1\frac{dx}{1+(1+xy)^{1/y}}.
> $$
> ）
>
> 今
> $$
> f(x,y)=
> \begin{cases}
> \dfrac{1}{1+(1+xy)^{1/y}}, & 0\le x\le1,\ 0<y\le1,\\[6pt]
> \dfrac{1}{1+e^x}, & 0\le x\le1,\ y=0.
> \end{cases}
> $$
>
> 则 $f(x,y)$ 在 $[0,1;0,1]$ 上连续．由连续性守恒定理，
> $$
> g(y)=\int_0^1 f(x,y)\,dx
> $$
> 在 $0\le y\le1$ 上连续．于是
> $$
> \lim_{n\to\infty}\int_0^1\frac{dx}{1+\left(1+\frac{x}{n}\right)^n}
> =\lim_{y\to0^+}\int_0^1\frac{dx}{1+(1+xy)^{1/y}}
> =\lim_{y\to0^+}\int_0^1 f(x,y)\,dx
> $$
> $$
> =\int_0^1 f(x,0)\,dx
> =\int_0^1\frac{dx}{1+e^x}
> =\ln\frac{2e}{1+e}.
> $$

> [!example] 例7.1.2
> 若 1）$\{f_n(x)\}_{n=1}^{\infty}$ 是 $[a,b]$ 上等度连续的连续函数序列；2）$n\to\infty$ 时 $f_n(x)\to f(x)$，则 $f$ 在 $[a,b]$ 上连续，且
> $$
> \lim_{n\to\infty}\int_a^b f_n(x)\,dx
> =\int_a^b\lim_{n\to\infty}f_n(x)\,dx
> =\int_a^b f(x)\,dx.
> $$

> [!proof]- 证
> 利用例5.2.31及例5.2.33的证法（或结论），可知：在条件1）、2）之下，立即可得 $f(x)$ 在 $[a,b]$ 上连续，且 $f_n(x)\rightrightarrows f(x)$ 关于 $x\in[a,b]$（当 $n\to\infty$ 时）．进而由本段要点1）中的已知结论知，可在积分号下取极限，欲证等式成立．

> [!example] 例7.1.3
> 设 $f(x)>0$ 在 $[0,1]$ 上连续，研究
> $$
> g(y)=\int_0^1\frac{y f(x)}{x^2+y^2}\,dx
> $$
> 的连续性．

> [!hint]- 提示
> 记 $m=\min_{0\le x\le1}f(x)$，则
> $$
> g(y)\ge m\int_0^1\frac{y}{x^2+y^2}\,dx=m\arctan\frac{1}{y},
> $$
> $$
> \lim_{y\to0^+}g(y)\ge\frac{m\pi}{2}>0=g(0).
> $$


#### b. 积分号下求导与积分号下求积分

> [!note] 要点
> 要实现积分号下求导或积分号下求积分（包括变限的情况），关键在于检验有关条件．

1）若 $f(x,y),f'_y(x,y)$ 在 $a\le x\le b,\ y\in I$ 上连续，则
$$
\left(\int_a^b f(x,y)\,dx\right)'_y=\int_a^b f'_y(x,y)\,dx.
$$

（这里 $I$ 可以是开、闭、半开半闭、有穷或无穷区间．）

2）若 $a=\varphi(y),\ b=\psi(y)$ 在 $[c,d]$ 上连续、可导；$f(x,y)$ 及 $f'_y(x,y)$ 在包含
$$
D=\{(x,y)\mid c\le y\le d,\ \varphi(y)\le x\le\psi(y)\}
$$
的某个区域 $\Delta$ 内连续，则
$$
\left(\int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx\right)'_y
=\int_{\varphi(y)}^{\psi(y)} f'_y(x,y)\,dx
+f(\psi(y),y)\psi'(y)-f(\varphi(y),y)\varphi'(y).
$$

3）若 $f(x,y)$ 在 $[a,b;c,d]$ 上连续，则
$$
\int_c^d dy\int_a^b f(x,y)\,dx
=\int_a^b dx\int_c^d f(x,y)\,dy.
$$

> [!example] ☆例7.1.4
> 设
> $$
> F(y)=\int_a^b f(x)|y-x|\,dx,
> $$
> 其中 $a<b$，而 $f(x)$ 为可微函数，求 $F''(y)$．（湖北大学）

> [!solution]- 解
> 当 $y\in(a,b)$ 时，
> $$
> F(y)=\int_a^y f(x)(y-x)\,dx+\int_y^b f(x)(x-y)\,dx.
> $$
> 
> 于是，
> $$
> F'(y)=\int_a^y f(x)\,dx-\int_y^b f(x)\,dx,
> \qquad
> F''(y)=f(y)+f(y)=2f(y).
> $$
> 
> 当 $y\ge b$ 时，
> $$
> F(y)=\int_a^b f(x)(y-x)\,dx,
> \qquad
> F'(y)=\int_a^b f(x)\,dx,
> \qquad
> F''(y)=0.
> $$
> 
> 同理，$y\le a$ 时，$F''(y)=0$．因此
> $$
> F''(y)=
> \begin{cases}
> 2f(y), & \text{当 } y\in(a,b) \text{ 时},\\
> 0, & \text{当 } y\notin(a,b) \text{ 时}.
> \end{cases}
> $$

> [!exercise] new 练习1
> 设 $f(x)$ 在 $[a,b]$ 上严格递增，有连续导数，$f(0)=0$，$f^{-1}$ 表示 $f$ 的反函数．求证：
> $$
> \int_0^{f(x)}\bigl(x-f^{-1}(u)\bigr)\,du=\int_0^x f(t)\,dt.
> $$
> （华东师范大学）

> [!hint]- 提示
> 可证原式（左端）' =（右端）'，即左端 = 右端 + C．可令 $x=0$，因为左端$\big|_{x=0}$=右端$\big|_{x=0}$=0，故 $C=0$，从而左端 = 右端．

> [!hint]- 再提示
> $$
> (\text{右端})' = \left(\int_0^x f(t)\,dt\right)'_x=f(x),
> $$
> 
> $$
> (\text{左端})' = \left[\int_0^{f(x)}\bigl(x-f^{-1}(u)\bigr)\,du\right]'_x
> $$
> $$
> =\int_0^{f(x)}\bigl(x-f^{-1}(u)\bigr)'_x\,du+
> \bigl[x-f^{-1}(u)\bigr]_{u=f(x)}f'(x)=f(x).
> $$
> 
> （或
> $$
> (\text{左端})'=
> \left[\int_0^{f(x)}(x-f^{-1}(u))\,du\right]'_x
> =\left[\int_0^{f(x)}x\,du-\int_0^{f(x)}f^{-1}(u)\,du\right]'_x
> $$
> $$
> =[xf(x)]'-f^{-1}(f(x))f'(x)=f(x)+xf'(x)-xf'(x)=f(x).
> $$
> ）

总之，（左端）' =（右端）'．故
$$
\int_0^{f(x)}\bigl(x-f^{-1}(u)\bigr)\,du=\int_0^x f(t)\,dt+C
$$
（$C$ 是任意常数）．令 $x=0$（注意 $f(0)=0$），知 $C=0$．欲证的等式获证．

> [!exercise] new 练习2
> 设 $(t,x)\in[0,T]\times[a,b]$，$u(t,x)\ge0$，有二阶连续偏导数，对 $t$ 是凸函数，且满足：
> 
> 1）
> $$
> \frac{\partial u(t,x)}{\partial t}=\frac{\partial^2 u(t,x)}{\partial x^2}-u(t,x),\quad \forall\,(t,x)\in[0,T]\times[a,b];
> $$
> 
> 2）
> $$
> \frac{\partial u(t,a)}{\partial x}=\frac{\partial u(t,b)}{\partial x}=0,\quad \forall\, t\in[0,T].
> $$
> 
> 试证：在 $[0,T]$ 上，函数
> $$
> f(t)=\int_a^b\left[\left(\frac{\partial u(t,x)}{\partial x}\right)^2+u^2(t,x)\right]dx
> $$
> 单调递减．（华中科技大学）

> [!proof]- 证
> $$
> f(t)\equiv\int_a^b\left[\left(\frac{\partial u(t,x)}{\partial x}\right)^2+u^2(t,x)\right]dx
> =\int_a^b\left(\frac{\partial u(t,x)}{\partial x}\right)^2dx+\int_a^b u^2(t,x)\,dx,
> $$
> 其中
> $$
> \int_a^b\left(\frac{\partial u(t,x)}{\partial x}\right)^2dx
> =\int_a^b\frac{\partial u(t,x)}{\partial x}\,d u(t,x)
> $$
> $$
> \xlongequal{\text{分部积分}}
> \left.\frac{\partial u(t,x)}{\partial x}u(t,x)\right|_a^b-\int_a^b u(t,x)\frac{\partial^2 u(t,x)}{\partial x^2}\,dx
> $$
> $$
> \xlongequal{2)}
> -\int_a^b u(t,x)\frac{\partial^2 u(t,x)}{\partial x^2}\,dx.
> $$
> 
> 故 $\forall t\in[0,T]$，
> $$
> f(t)=-\int_a^b u(t,x)\frac{\partial^2 u(t,x)}{\partial x^2}\,dx+\int_a^b u^2(t,x)\,dx
> $$
> $$
> =-\int_a^b u(t,x)\left(\frac{\partial^2 u(t,x)}{\partial x^2}-u(t,x)\right)dx
> \xlongequal{1)}
> -\int_a^b u(t,x)\frac{\partial u(t,x)}{\partial t}\,dx.
> $$
> 
> 该积分为正常积分（被积函数 $u(t,x)\frac{\partial u(t,x)}{\partial t}$ 连续，有连续导数），故能在积分号下求导，求导之后：
> $$
> f'(t)=-\left(\int_a^b u(t,x)\frac{\partial u(t,x)}{\partial t}\,dx\right)'_t
> =-\int_a^b\left[\left(\frac{\partial u(t,x)}{\partial t}\right)^2+u(t,x)\frac{\partial^2 u(t,x)}{\partial t^2}\right]dx\le0.
> $$
> 
> （因为 $u(t,x)\ge0$，且是 $t$ 的凸函数，故 $\dfrac{\partial^2 u(t,x)}{\partial t^2}\ge0$（见例3.4.8前定理5的推论）．）由此可见：函数 $f(t)$ 在 $[0,T]$ 上单调递减．证毕．

**含参变量积分的计算**

> [!example] *例7.1.5
> 设
> $$
> F(r)=\int_0^{2\pi}e^{r\cos\theta}\cos(r\sin\theta)\,d\theta,
> $$
> 求证：$F(r)\equiv2\pi$．

> [!proof]- 证
> （应用Taylor公式．）因为
> $$
> F(0)=\int_0^{2\pi}d\theta=2\pi,
> $$
> 要证 $F(r)\equiv2\pi$，只要证明 $F(r)$ 为常数．为此我们考虑 $F(r)$ 的导数：
> $$
> F'(r)=\int_0^{2\pi}\bigl[e^{r\cos\theta}\cos(r\sin\theta)\bigr]'_r\,d\theta
> $$
> $$
> =\int_0^{2\pi}e^{r\cos\theta}\bigl[\cos\theta\cos(r\sin\theta)-\sin(r\sin\theta)\sin\theta\bigr]d\theta
> $$
> $$
> =\int_0^{2\pi}e^{r\cos\theta}\cos(\theta+r\sin\theta)\,d\theta, \qquad (1)
> $$
> 
> 由此
> $$
> F''(r)=\int_0^{2\pi}e^{r\cos\theta}\cos(2\theta+r\sin\theta)\,d\theta.
> $$
> 
> 用数学归纳法易证，$\forall n=1,2,\cdots$，
> $$
> F^{(n)}(r)=\int_0^{2\pi}e^{r\cos\theta}\cos(n\theta+r\sin\theta)\,d\theta. \qquad (2)
> $$
> 
> 根据Taylor公式，
> $$
> F(r)-F(0)=\sum_{k=1}^{n-1}\frac{F^{(k)}(0)}{k!}r^k+\frac{F^{(n)}(\theta_1 r)}{n!}r^n
> =\frac{F^{(n)}(\theta_1 r)}{n!}r^n \qquad (0<\theta_1<1).
> $$
> 
> 由（2），
> $$
> |F^{(n)}(\theta_1 r)|\le e^r\,2\pi,
> $$
> 故
> $$
> \left|\frac{F^{(n)}(\theta_1 r)r^n}{n!}\right|
> \le\frac{2\pi e^r r^n}{n!}\to0\qquad(n\to\infty).
> $$
> 
> 故 $F(r)\equiv F(0)=2\pi$．
> 
> 注 学完Green公式后，还可直接用它证出 $F'(r)\equiv0$．

> [!example] 例7.1.6
> 假设函数 $u(x,y)$ 在 $\mathbf{R}^2$ 内有连续的二阶偏导数，且
> $$
> \frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0,
> $$
> 而 $u(x,y)$ 的一阶偏导函数对任意固定的 $y\in\mathbf{R}$，是 $x$ 的以 $2\pi$ 为周期的函数．证明：函数
> $$
> f(y)=\int_0^{2\pi}\left[\left(\frac{\partial u}{\partial x}\right)^2-\left(\frac{\partial u}{\partial y}\right)^2\right]dx=C\quad(\text{常数}),\ y\in\mathbf{R}.
> $$

> [!hint]- 提示
> $f'(y)\equiv0$．

下面讨论如何用积分号下求导与积分号下取积分的方法计算含参变量的积分．

> [!example] ☆例7.1.7
> 试用两种方法计算积分
> $$
> I(a,b)=\int_0^1\frac{x^b-x^a}{\ln x}\,dx\qquad(a,b>0).
> $$
> （北京大学）

> [!solution]- 解
> 被积函数虽然在 $x=0,x=1$ 处无意义，但均有有限极限，故积分是正常的．
> 
> 1°（用积分号下取积分．）
> $$
> \int_0^1\frac{x^b-x^a}{\ln x}\,dx
> =\int_0^1dx\int_a^b x^y\,dy
> =\int_a^bdy\int_0^1 x^y\,dx
> =\ln\frac{1+b}{1+a}.
> $$
> 
> 2°（用积分号下求导．）$I'_b(a,b)=\int_0^1x^b\,dx=\dfrac{1}{1+b}$，由此
> $$
> I(a,b)=\ln(1+b)+C(a), \qquad (1)
> $$
> $$
> I'_a(a,b)=C'(a). \qquad (2)
> $$
> 
> 但原积分对 $a$ 求导，有
> $$
> I'_a(a,b)=-\frac{1}{1+a}. \qquad (3)
> $$
> 
> 比较（2）、（3）知
> $$
> C'(a)=-\frac{1}{1+a},
> $$
> $$
> C(a)=\ln\frac{1}{1+a}+C_1.
> $$
> 
> 代入（1），
> $$
> I(a,b)=\ln\frac{1+b}{1+a}+C_1.
> $$
> 令 $a=b$，可知 $C_1=0$，从而
> $$
> I(a,b)=\ln\frac{1+b}{1+a}.
> $$

有时连续条件并不满足，必须人为地加以处理，使之符合积分号下求导（取积分）条件．如

> [!example] *例7.1.8
> 计算积分
> $$
> I(a)=\int_0^{\pi/2}\left(\ln\frac{1+a\cos x}{1-a\cos x}\right)\frac{dx}{\cos x}
> \qquad(|a|<1).
> $$

> [!solution]- 解I
> （利用积分号下求导．）我们首先看到若能在积分下求导，则问题很容易解决．因为
> $$
> I'(a)=\int_0^{\pi/2}\left(\ln\frac{1+a\cos x}{1-a\cos x}\right)'_a\frac{dx}{\cos x}
> =\int_0^{\pi/2}\frac{2}{1-a^2\cos^2x}\,dx
> $$
> 令 $t=\tan x$，则
> $$
> =\int_0^{+\infty}\frac{2dt}{(1-a^2)+t^2}
> =\frac{2}{\sqrt{1-a^2}}\arctan\left(\frac{1}{\sqrt{1-a^2}}\tan t\right)\Big|_0^{+\infty}
> =\frac{\pi}{\sqrt{1-a^2}}. \qquad (1)
> $$
> 
> 从 0 至 $a$ 积分此式，即得
> $$
> I(a)=\pi\arcsin a.
> $$
> 
> 可见问题在于使被积函数变得符合积分号下求导的条件．因为 $|a|<1$，故 $1-a\cos x>0,\ 1+a\cos x>0,\ \dfrac{1+a\cos x}{1-a\cos x}>0$．从而
> $$
> f(x,a)=\left(\ln\frac{1+a\cos x}{1-a\cos x}\right)\frac{1}{\cos x}
> $$
> 在 $0\le x<\pi/2,\ -1<a<1$ 上连续．又因 $\forall a_0:\ |a_0|<1$，
> $$
> \lim_{\substack{x\to(\pi/2)^-\\ a\to a_0}}
> \left(\ln\frac{1+a\cos x}{1-a\cos x}\right)\frac{1}{\cos x}
> =
> \lim_{\substack{x\to(\pi/2)^-\\ a\to a_0}}
> \ln\left(1+\frac{2a\cos x}{1-a\cos x}\right)\frac{1}{\cos x}
> $$
> $$
> =\lim_{\substack{x\to(\pi/2)^-\\ a\to a_0}}
> \frac{2a\cos x}{1-a\cos x}\cdot\frac{1}{\cos x}=2a_0.
> $$
> 
> 故若补充定义 $f(\pi/2,a)=2a$，易知 $f(x,a)$ 在 $0\le x\le\pi/2,\ -1<a<1$ 上连续．另外，当 $|a|<1$ 时，
> $$
> f'_a(x,a)=\frac{2}{1-a^2\cos^2x}\to2
> \quad(\text{当 }x\to(\pi/2)^-,\ a\to a_0\text{ 时}),
> $$
> 且 $f'_a(\pi/2,a)=2$．易知如上补充定义后，$f'_a(x,a)$ 亦在 $0\le x\le\pi/2,\ -1<a<1$ 上连续．总之，补充定义之后，积分值不变，但变得可以在积分号下求导，式（1）成立．

> [!solution]- 解II
> （利用积分号下取积分．）已知
> $$
> \int\frac{dx}{1-x^2}=\frac12\ln\frac{1+x}{1-x}+C,
> $$
> 从而
> $$
> \frac{1}{\cos x}\ln\frac{1+a\cos x}{1-a\cos x}
> =2a\int_0^1\frac{dy}{1-(a^2\cos^2x)y^2}
> \qquad(0\le x<\pi/2,\ |a|<1).
> $$
> 
> 故
> $$
> \int_0^{\pi/2}\frac{1}{\cos x}\ln\frac{1+a\cos x}{1-a\cos x}dx
> =2a\int_0^{\pi/2}dx\int_0^1\frac{dy}{1-(a^2\cos^2x)y^2}
> =2a\int_0^1dy\int_0^{\pi/2}\frac{dx}{1-(a^2\cos^2x)y^2}
> $$
> 令 $t=\tan x$，得
> $$
> =2a\int_0^1\frac{\pi\,dy}{\sqrt{1-a^2y^2}}
> =\pi\arcsin(ay)\Big|_0^1
> =\pi\arcsin a.
> $$

有时积分中并无参数，为了计算积分，可以恰当地引入参数。如

> [!example] ☆例7.1.9
> 计算积分 $I=\int_0^1 \frac{\ln(1+x)}{1+x^2}\,dx$．（武汉大学）

> [!solution]- 解I
> （因积分的困难在于有对数，但对数函数求导后，立即变为有理函数，便于积分，故此）令
> $I(\alpha)=\int_0^1 \frac{\ln(1+\alpha x)}{1+x^2}\,dx$，则 $I=I(1)$，$I(0)=0$，且 $f(x,\alpha)=$
> $\frac{\ln(1+\alpha x)}{1+x^2}$，$f'_\alpha(x,\alpha)=\frac{x}{(1+x^2)(1+\alpha x)}$ 在 $[0,1;0,1]$ 上连续，满足积分号下求导的条件。故
> $$
> I'(\alpha)=\int_0^1 \frac{x}{(1+x^2)(1+\alpha x)}\,dx=\frac{1}{1+\alpha^2}\left[-\ln(1+\alpha)+\frac{1}{2}\ln 2+\frac{\pi\alpha}{4}\right].
> $$
> 
> 在 $[0,1]$ 上积分此式，得
> $$
> \int_0^1 I'(\alpha)\,d\alpha = -\int_0^1 \frac{\ln(1+\alpha)}{1+\alpha^2}\,d\alpha + \frac{1}{2}\ln 2 \arctan\alpha\big|_0^1 + \frac{\pi}{8}\ln(1+\alpha^2)\big|_0^1
> $$
> $$
> = \frac{\pi}{4}\ln 2 - I(1).
> $$
> 但 $\int_0^1 I'(\alpha)\,d\alpha = I(1)-I(0)=I(1)$，故 $I=I(1)=\frac{\pi}{8}\ln 2$．

> [!solution]- 解II
> （作为验证，我们可将此积分直接积分出来．）
> $$
> I=\int_0^1 \frac{\ln(1+x)}{1+x^2}\,dx = \int_0^1 \ln(1+x)\,d(\arctan x)
> $$
> 令 $x=\tan\theta$，
> $$
> I=\int_0^{\pi/4} \ln(1+\tan\theta)\,d\theta
> =\int_0^{\pi/4} [\ln(\cos\theta+\sin\theta)-\ln\cos\theta]\,d\theta
> $$
> $$
> =\int_0^{\pi/4} [\ln\sqrt{2}\cos(\pi/4-\theta)]\,d\theta - \int_0^{\pi/4} \ln\cos\theta\,d\theta .
> $$
> 
> 在右端第一个积分中令 $\pi/4-\theta=\varphi$，
> $$
> I=\frac{\pi}{8}\ln 2 + \int_0^{\pi/4} \ln\cos\varphi\,d\varphi - \int_0^{\pi/4} \ln\cos\theta\,d\theta = \frac{\pi}{8}\ln 2 .
> $$


### ☆ 二、判断含参数反常积分的一致收敛性

为了研究含参数反常积分所表达的函数，重要的问题是判断它的一致收敛性。
本段主要是讨论判断一致收敛的基本方法。它们是：a．利用定义判断；b．利用 Cauchy 准则判断；c．利用 M 判别法；d．利用 Abel 与 Dirichlet 判别法。


#### a．利用定义判断

> [!note] 要点
> 1）若 $\int_a^{+\infty} f(x,y) \, dx$ 对 $y \in I$ 逐点收敛，要证明 $\int_a^{+\infty} f(x,y) \, dx$ 在 $I$ 上一致收敛，根据定义即要证明：$\int_A^{+\infty} f(x,y) \, dx \to 0$ 于 $I$ 上（当 $A \to +\infty$ 时），即：$\forall \varepsilon > 0$，$\exists A_0 > 0$，当 $A > A_0$ 时有 $\left| \int_A^{+\infty} f(x,y) \, dx \right| < \varepsilon$（$\forall y \in I$）．
> 
> 2）由此可见，要证 $\int_a^{+\infty} f(x,y) \, dx$ 对 $y \in I$ 非一致收敛，即要证明：$\exists \varepsilon_0 > 0$，$\forall A_0 > a$，$\exists A_1 > A_0$ 及 $y_1 \in I$，使得 $\left| \int_{A_1}^{+\infty} f(x,y_1) \, dx \right| \ge \varepsilon_0$．
> 
> 特别，若 $\exists y_0 \in I$（或 $y_0$ 为 $I$ 的端点），使得 $\forall A > a$，有 $\lim_{y \to y_0} \int_A^{+\infty} f(x,y) \, dx = B \neq 0$，则 $\int_a^{+\infty} f(x,y) \, dx$ 在 $y \in I$ 上非一致收敛（如例 7.1.11）．
> 
> 对于 $\int_{-\infty}^b f(x,y) \, dx$ 以及无界函数的反常积分，有类似结论。

> [!example] ☆例 7.1.10
> 证明：$\int_0^{+\infty} x e^{-\alpha x} \, dx$ 在 $0 < \alpha_0 \le \alpha < +\infty$ 上一致收敛，但在 $0 < \alpha < +\infty$ 内不一致收敛．（南开大学）

> [!proof]- 证
> 1° 因为
> $$0 \le \left| \int_A^{+\infty} x e^{-\alpha x} \, dx \right| = \int_A^{+\infty} x e^{-\alpha x} \, dx \quad (\text{设 } A > 0)$$
> 令 $\alpha x = t$，
> $$\frac{1}{\alpha^2} \int_{\alpha A}^{+\infty} t e^{-t} \, dt = \left. -\frac{1}{\alpha^2} t e^{-t} \right|_{\alpha A}^{+\infty} - \left. \frac{1}{\alpha^2} e^{-t} \right|_{\alpha A}^{+\infty} = \frac{A}{\alpha} e^{-\alpha A} + \frac{e^{-\alpha A}}{\alpha^2} \le \frac{A e^{-\alpha_0 A}}{\alpha_0} + \frac{e^{-\alpha_0 A}}{\alpha_0^2} \to 0 \quad (A \to +\infty),$$
> 所以 $\left| \int_A^{+\infty} x e^{-\alpha x} \, dx \right|$ 关于 $\alpha \in [\alpha_0, +\infty)$ 一致收敛。故 $\int_0^{+\infty} x e^{-\alpha x} \, dx$ 在 $(0<)\, \alpha_0 \le \alpha < +\infty$ 上一致收敛。
> 
> 2° 同上，$\forall A > 0$，有 $\int_A^{+\infty} x e^{-\alpha x} \, dx = \frac{1}{\alpha} A e^{-\alpha A} + \frac{1}{\alpha^2} e^{-\alpha A}$．固定 $A$，令 $\alpha \to 0$，$\frac{1}{2} A e^{-\alpha A} + \frac{1}{\alpha^2} e^{-\alpha A} \to +\infty$，故原积分在 $0 < \alpha < +\infty$ 上非一致收敛。

> [!example] 例 7.1.11
> 证明：$\int_{-\infty}^{+\infty} e^{-(x-\alpha)^2} \, dx$ 在 $a \le \alpha \le b$ 上一致收敛，在 $-\infty < \alpha < +\infty$ 上非一致收敛．

> [!hint]- 提示
> $\int_0^{+\infty} e^{-(x-\alpha)^2} \, dx$，$\int_{-\infty}^0 e^{-(x-\alpha)^2} \, dx$ 分别在 $\alpha \le b$ 及 $\alpha \ge a$ 上一致收敛．但 $\forall A > 0$，极限 $\lim_{\alpha \to +\infty} \int_A^{+\infty} e^{-(x-\alpha)^2} \, dx = \sqrt{\pi} \neq 0$．

> [!example] 例 7.1.12
> 设 $0 < m < 1$，$f(x)$ 在 $[0,1]$ 上有界，试证：$\int_0^1 \frac{f(\alpha x)}{|x-\alpha|^m} \, dx$ 关于 $\alpha \in [0,1]$ 一致收敛．

> [!proof]- 证
> 因 $f$ 在 $[0,1]$ 上有界，故 $\exists M > 0$，使得 $|f(x)| \le M$．而
> $$\int_0^1 \frac{f(\alpha x)}{|x-\alpha|^m} \, dx = \int_0^\alpha \frac{f(\alpha x)}{(\alpha - x)^m} \, dx + \int_\alpha^1 \frac{f(\alpha x)}{(x-\alpha)^m} \, dx$$
> 以 $x = \alpha$ 为奇点。当 $\varepsilon \to 0^+$ 时，
> $$\left| \int_{\alpha - \varepsilon}^\alpha \frac{f(\alpha x)}{(\alpha - x)^m} \, dx \right| \le M \int_{\alpha - \varepsilon}^\alpha \frac{dx}{(\alpha - x)^m} = \frac{M}{1-m} \, \varepsilon^{1-m} \to 0,$$
> $$\left| \int_\alpha^{\alpha+\varepsilon} \frac{f(\alpha x)}{(x-\alpha)^m} \, dx \right| \le M \int_\alpha^{\alpha+\varepsilon} \frac{dx}{(x-\alpha)^m} = \frac{M}{1-m} \, \varepsilon^{1-m} \to 0.$$
> 因此原积分关于 $\alpha \in [0,1]$ 一致收敛．

由 $\varepsilon$ 寻找所需要的 $A_0$，有时要分段考虑。

> [!example] ☆例 7.1.13
> 证明：$\int_1^{+\infty} e^{-\frac{1}{\alpha^2} (x - \frac{1}{\alpha})^2} \, dx$ 在 $0 < \alpha < 1$ 上一致收敛．

> [!note]- 分析
> 问题在于：$\forall \varepsilon > 0$，找 $A_0 > 1$，使得 $A > A_0$ 时有 $\left| \int_A^{+\infty} e^{-\frac{1}{\alpha^2} (x - \frac{1}{\alpha})^2} \, dx \right| < \varepsilon$．因
> $$\left| \int_A^{+\infty} e^{-\frac{1}{\alpha^2} (x - \frac{1}{\alpha})^2} \, dx \right| = \int_A^{+\infty} e^{-\frac{1}{\alpha^2} (x - \frac{1}{\alpha})^2} \, dx$$
> 令 $u = \frac{1}{\alpha}(x - \frac{1}{\alpha})$，
> $$= \alpha \int_{\frac{1}{\alpha}(A - \frac{1}{\alpha})}^{+\infty} e^{-u^2} \, du, \qquad \text{（1）}$$
> 但 $\alpha \int_{\frac{1}{\alpha}(A - \frac{1}{\alpha})}^{+\infty} e^{-u^2} \, du \le \alpha \int_{-\infty}^{+\infty} e^{-u^2} \, du = \alpha \sqrt{\pi}$．故对于 $\alpha \in (0, \frac{\varepsilon}{\sqrt{\pi}})$，对任意 $A > 1$，积分（1）$< \varepsilon$ 已成立，剩下的问题只在于找 $A_0 > 1$（充分大），使得 $A > A_0$ 时，对一切 $\alpha \in [\frac{\varepsilon}{\sqrt{\pi}}, 1]$，有 $\alpha \int_{\frac{1}{\alpha}(A - \frac{1}{\alpha})}^{+\infty} e^{-u^2} \, du < \varepsilon$．由于被积函数 $e^{-u^2} > 0$，当 $\frac{\varepsilon}{\sqrt{\pi}} \le \alpha < 1$ 时，有
> $$\alpha \int_{\frac{1}{\alpha}(A - \frac{1}{\alpha})}^{+\infty} e^{-u^2} \, du \le \int_{A - \frac{\sqrt{\pi}}{\varepsilon}}^{+\infty} e^{-u^2} \, du. \qquad \text{（2）}$$
> 由 $\int_0^{+\infty} e^{-u^2} \, du$ 的收敛性知：$\forall \varepsilon > 0$，$\exists A_0 > 0$，$A > A_0$ 时，$\int_{A - \frac{\sqrt{\pi}}{\varepsilon}}^{+\infty} e^{-u^2} \, du < \varepsilon$．结论获证。


#### b．用 Cauchy 准则判断

> [!note] 要点
> 根据 Cauchy 准则，要证明 $\int_a^{+\infty} f(x,y) dx$ 关于 $y$ 在 $I$ 上一致收敛，即要证明：$\forall \varepsilon > 0$，$\exists A_0 > a$，当 $A'' > A' > A_0$ 时，有 $|\int_{A'}^{A''} f(x,y) dx| < \varepsilon$（$\forall y \in I$）．
>
> 要证明 $\int_a^{+\infty} f(x,y) dx$ 在 $I$ 上非一致收敛，即要证明：$\exists \varepsilon_0 > 0$，$\forall A_0 > a$，$\exists A'' > A' > A_0$，及 $y_1 \in I$ 使得 $|\int_{A'}^{A''} f(x,y_1) dx| \geq \varepsilon_0$．
>
> 对于 $\int_{-\infty}^b f(x,y) dx$ 以及无界函数的反常积分，有类似的结论。

> [!example] 例7.1.14
> 若 $0 \leq f(x,y) \leq g(x,y)$（$\forall x \geq a$，$\forall y \in I$），且 $\int_a^{+\infty} g(x,y) dx$ 对 $y \in I$ 一致收敛，则 $\int_a^{+\infty} f(x,y) dx$ 亦对 $y \in I$ 一致收敛．

> [!proof]- 证
> $\forall \varepsilon > 0$，$\exists A_0 > a$，使得 $\forall A'' > A' > A_0$，有
> $$
> 0 \leq \int_{A'}^{A''} g(x,y) dx < \varepsilon \quad (\forall y \in I).
> $$
> 从而
> $$
> 0 \leq \int_{A'}^{A''} f(x,y) dx \leq \int_{A'}^{A''} g(x,y) dx < \varepsilon \quad (\forall y \in I).
> $$
> 所以，$\int_a^{+\infty} f(x,y) dx$ 在 $I$ 上一致收敛。

判断一致收敛的 M 判别法、Abel 判别法及 Dirichlet 判别法，也都是根据 Cauchy 准则证明出来的。下面我们着重讨论非一致收敛的证明。

> [!example] ☆例7.1.15
> 设 $f(x,y)$ 在 $a \leq x < +\infty$，$c \leq y \leq d$ 上连续，$\forall y \in [c,d)$，$\int_a^{+\infty} f(x,y) dx$ 收敛，但 $y = d$ 时积分发散。求证：$\int_a^{+\infty} f(x,y) dx$ 在 $y \in [c,d)$ 上非一致收敛．（北京航空航天大学）

> [!proof]- 证
> 目的在于证明：$\exists \varepsilon_0 > 0$，$\forall A_0 > a$，$\exists A'' > A' > A_0$ 及 $y \in [c,d)$，使得
> $$
> |\int_{A'}^{A''} f(x,y) dx| \geq \varepsilon_0. \quad (1)
> $$
> 因为
> $$
> |\int_{A'}^{A''} f(x,y) dx| = |\int_{A'}^{A''}(f(x,y) - f(x,d)) dx + \int_{A'}^{A''} f(x,d) dx|
> $$
> $$
> \geq ||\int_{A'}^{A''} f(x,d) dx| - |\int_{A'}^{A''}(f(x,y) - f(x,d)) dx||,
> $$
> 因此，若能证明
> $$
> |\int_{A'}^{A''} f(x,d) dx| \geq 2\varepsilon_0, \quad |\int_{A'}^{A''}(f(x,y) - f(x,d)) dx| < \varepsilon_0, \quad (2)
> $$
> 则式（1）即可得到。剩下问题在于证明（2）。
>
> 1° 因 $\int_a^{+\infty} f(x,d) dx$ 发散，故 $\exists \varepsilon_0 > 0$，$\forall A_0 > a$，$\exists A'' > A' > A_0$ 使得
> $$
> |\int_{A'}^{A''} f(x,d) dx| \geq 2\varepsilon_0.
> $$
>
> 2° 但 $f(x,y)$ 在 $a \leq x < +\infty$，$c \leq y \leq d$ 上连续，从而在有界闭区域 $A' \leq x \leq A''$，$c \leq y \leq d$ 上一致连续。于是对 $\varepsilon_0 > 0$，$\exists \delta > 0$，当 $|x' - x''| < \delta$，$|y' - y''| < \delta$，$x', x'' \in [A', A'']$，$y', y'' \in [c, d]$ 时，有
> $$
> |f(x', y') - f(x'', y'')| < \frac{\varepsilon_0}{A'' - A'}.
> $$
> 从而 $|y - d| < \delta$ 时，有
> $$
> |f(x,y) - f(x,d)| < \frac{\varepsilon_0}{A'' - A'},
> $$
> $$
> |\int_{A'}^{A''}(f(x,y) - f(x,d)) dx| < \varepsilon_0.
> $$
> 证毕。

> [!note] 注
> Cauchy 准则的优越性在于不必考虑充分后的无穷区间 $[A, +\infty)$，而只需考虑充分后的有限区间 $[A', A'']$，从而使难度大大减小。如

> [!example] 例7.1.16
> 试证：$\int_0^{+\infty} \frac{x \sin \alpha x}{\alpha(1 + x^2)} dx$ 在 $0 < \alpha < +\infty$ 上非一致收敛．

> [!note]- 分析
> 因 $\sin \alpha x$ 无穷多次变号，要估计 $\int_A^{+\infty} \frac{x \sin \alpha x}{\alpha(1 + x^2)} dx \geq \varepsilon_0$（$\varepsilon_0$ 为某一事先指定的正数）是困难的。但利用 Cauchy 准则，要证明积分非一致收敛只要证明：不论 $A_0 > 0$ 多么大，总可选取 $A'' > A' > A_0$ 及 $\alpha > 0$，使得 $|\int_{A'}^{A''} \frac{x \sin \alpha x}{\alpha(1 + x^2)} dx| \geq \varepsilon_0$（其中 $\varepsilon_0 > 0$ 是某一事先指定的正数）．事实上，若将被积函数改写成
> $$
> \frac{x \sin \alpha x}{\alpha(1 + x^2)} = \frac{x^2}{1 + x^2} \cdot \frac{\sin \alpha x}{\alpha x},
> $$
> 我们可以看到，当 $x \to +\infty$ 时，$\frac{x^2}{1 + x^2} \to 1$．因而不论 $A_0$ 多么大，只要 $A' > A_0$ 充分大，可使 $x > A'$ 时有 $\frac{x^2}{1 + x^2} \geq \frac{1}{2}$．今取 $A'' = A' + 1$，当 $x \in [A', A'']$ 时，随着 $\alpha \to 0$ 有 $\frac{\sin \alpha x}{\alpha x} \to 1$．因此只要把 $\alpha > 0$ 取得充分小总可使 $\frac{\sin \alpha x}{\alpha x} \geq \frac{1}{2}$。于是
> $$
> \frac{x \sin \alpha x}{\alpha(1 + x^2)} = \frac{x^2}{1 + x^2} \cdot \frac{\sin \alpha x}{\alpha x} \geq \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4} \quad (=\varepsilon_0).
> $$
> 故 $|\int_{A'}^{A''} \frac{x \sin \alpha x}{\alpha(1 + x^2)} dx| \geq \frac{1}{4}$．问题获证。

下面是无界函数反常积分的例子。

> [!example] 例7.1.17
> 试证：$\int_0^1 \frac{1}{x^\alpha} \sin\frac{1}{x} dx$ 在 $0 < \alpha < 2$ 上非一致收敛．

> [!proof]- 证
> 令 $x = 1/t$，则 $\int_0^1 \frac{1}{x^\alpha} \sin\frac{1}{x} dx = \int_1^{+\infty} \frac{1}{t^{2-\alpha}} \sin t \, dt$．不论正整数 $n$ 多么大，当 $t \in [A', A''] \equiv [2n\pi + \frac{\pi}{4}, 2n\pi + \frac{3\pi}{4}]$ 时，恒有 $\sin t \geq \frac{\sqrt{2}}{2}$，因此
> $$
> |\int_{A'}^{A''} \frac{\sin t}{t^{2-\alpha}} dt| \geq \frac{\sqrt{2}}{2} \int_{A'}^{A''} \frac{dt}{t^{2-\alpha}} \geq \frac{\sqrt{2}\pi}{4} \cdot \frac{1}{t^{2-\alpha}} \bigg|_{t=A''}
> $$
> $$
> = \frac{\sqrt{2}\pi}{4(2n\pi + \frac{3\pi}{4})^{2-\alpha}} \to \frac{\sqrt{2}}{4}\pi > 0 \quad (\text{当 } \alpha \to 2^- \text{ 时}).
> $$
> 故原积分在 $0 < \alpha < 2$ 上非一致收敛（虽然用 Dirichlet 判别法容易证明它收敛）．

① 此处重要之点在于用到区间 $[A', A'']$ 是有限的，正说明 Cauchy 准则的优越性。


#### c. 用 M 判别法判断

> [!note] 要点
> 使用 M 判别法，关键在于将被积函数的绝对值 $|f(x,y)|$ 放大，以找出函数 $M(x)$（优函数），使得 $|f(x,y)| \leq M(x)$（$\forall x \geq a$，$\forall y \in I$），且 $\int_a^{+\infty} M(x) \, dx$ 收敛，则 $\int_a^{+\infty} f(x,y) \, dx$ 在 $I$ 上绝对一致收敛。

无界函数的反常积分也有类似结论。

> [!example] 例 7.1.18
> 判断 $\int_0^1 (1+x+x^2+\cdots+x^n)(\ln \frac{1}{x})^{1/2} \, dx$（$n=1,2,\cdots$）是否一致收敛。

> [!solution]- 解
> $x=0$ 为奇点，
>
> $$
> |(1+x+x^2+\cdots+x^n)(\ln \tfrac{1}{x})^{1/2}| \leq \frac{1}{1-x}(\ln \tfrac{1}{x})^{1/2}.
> $$
>
> 而
>
> $$
> \lim_{x \to 0} x^{1/2} \cdot \frac{1}{1-x}\left(\ln \frac{1}{x}\right)^{1/2}
> = \lim_{x \to 0} \frac{1}{1-x} \cdot \frac{(\ln \frac{1}{x})^{1/2}}{(\frac{1}{x})^{1/2}} = 1 \cdot 0 = 0.
> $$
>
> 故积分 $\int_0^1 \frac{1}{1-x}(\ln \frac{1}{x})^{1/2} \, dx$ 收敛，从而原积分对 $n=1,2,\cdots$ 一致收敛。

> [!example] 例 7.1.19
> 判断 $\int_0^{+\infty} x \sin x^4 \cos \alpha x \, dx$ 对 $\alpha \in [a,b]$（有限区间）是否一致收敛。

> [!solution]- 解
> 利用分部积分法，
>
> $$
> \begin{aligned}
> \int_A^{+\infty} x \sin x^4 \cos \alpha x \, dx
> &= \left. -\frac{\cos \alpha x \cos x^4}{4x^2} \right|_A^{+\infty} \\
> &\quad - \int_A^{+\infty} \frac{\alpha \sin \alpha x \cos x^4}{4x^2} \, dx
>    - \int_A^{+\infty} \frac{\cos \alpha x \cos x^4}{2x^3} \, dx.
> \end{aligned}
> $$
>
> 利用 M 判别法，知等式右端新出现的两积分关于 $\alpha \in [a,b]$ 一致收敛，故等式右端三项 $\to 0$（当 $A \to +\infty$ 时），因此原积分在 $[a,b]$ 上一致收敛。

下面看一个有无穷多个奇点的例子。

> [!example] 例 7.1.20
> 证明：$I(\alpha) = \int_0^{+\infty} \frac{e^{-x}}{|\sin x|^\alpha} \, dx$ 对 $\alpha \in [0,b]$（其中 $0 < b < 1$）一致收敛。

> [!proof]- 证
> $$
> I(\alpha) = \int_0^{+\infty} \frac{e^{-x}}{|\sin x|^\alpha} \, dx = \sum_{n=0}^{\infty} \int_{n\pi}^{(n+1)\pi} \frac{e^{-x}}{|\sin x|^\alpha} \, dx.
> $$
>
> 令 $x = t + n\pi$，则
>
> $$
> \begin{aligned}
> I(\alpha) &= \sum_{n=0}^{\infty} e^{-n\pi} \int_0^\pi \frac{e^{-t}}{\sin^\alpha t} \, dt \\
> &= \frac{1}{1-e^{-\pi}} \int_0^\pi \frac{e^{-t}}{\sin^\alpha t} \, dt \\
> &= \frac{1}{1-e^{-\pi}} \left( \int_0^{\pi/2} \frac{e^{-t}}{\sin^\alpha t} \, dt + \int_{\pi/2}^\pi \frac{e^{-t}}{\sin^\alpha t} \, dt \right).
> \end{aligned}
> $$
>
> 右端两积分分别以 $0,\pi$ 为奇点，都以 $\frac{1}{\sin^b t}$ 作优函数。因此它们在 $[0,b]$ 上一致收敛。$I(\alpha)$ 亦然，证毕。

> [!remark] 注
> 值得注意的是，用 M 判别法得到的结论是绝对一致收敛，但并不是所有绝对一致收敛的积分都能用 M 判别法来判断。如

> [!example] 例 7.1.21
> 积分 $\int_1^{+\infty} e^{-\frac{1}{\alpha^2}(x-\frac{1}{\alpha})^2} \, dx$ 在 $0 < \alpha < 1$ 上虽然绝对一致收敛，但并不能用 M 判别法进行判断。

> [!proof]- 证
> 在例 7.1.13 中，我们已证明了该积分一致收敛。因被积函数为正，故也绝对一致收敛。现在只需证明它没有优函数 $M(x)$。事实上，假若
>
> $$
> e^{-\frac{1}{\alpha^2}(x-\frac{1}{\alpha})^2} \leq M(x) \quad (\forall x \geq 1,\ \forall \alpha \in (0,1)),
> $$
>
> 那么对任意 $x > 1$，只要取 $\alpha = \frac{1}{x} \in (0,1)$，便知 $M(x) \geq e^{-\frac{1}{\alpha^2}(x-\frac{1}{\alpha})^2} = 1$（$\forall x > 1$）。故
>
> $$
> \int_1^{+\infty} M(x) \, dx
> $$
>
> 发散。所以无优函数。

> [!remark] 注
> M 判别法使用比较方便，但适用面较窄。特别，若所讨论积分本身一致收敛，但被积函数取绝对值之后非一致收敛（这种情况称为条件一致收敛）时，显然 M 判别法对于这种情况是无能为力的。只有借助下面的判别法。


#### d. Abel 判别法与 Dirichlet 判别法

> [!note] 要点
> 该法的关键在于把被积函数恰当地拆成两因子相乘：
> 
> $$f(x,y)=g(x,y)h(x,y),$$
> 
> 使得 $g,h$ 满足（Abel）条件：
> 
> i) $\int_a^{+\infty} g(x,y)dx$ 对 $y\in I$ 一致收敛；
> 
> ii) $h(x,y)$ 当 $y$ 固定时，对 $x$ 单调，且一致有界，即 $\exists M>0$，使得
> 
> $$|h(x,y)|\leq M \quad (\forall x\geq a，\forall y\in I)，$$
> 
> 则积分 $\int_a^{+\infty} f(x,y)dx$ 在 $I$ 上一致收敛（Abel 判别法）。
> 
> 或者，（将条件 i) 减弱，将条件 ii) 加强）使 $g,h$ 满足（Dirichlet）条件：
> 
> i′) $\int_a^A g(x,y)dx$ 一致有界，即：$\exists M>0$，使得
> 
> $$\left|\int_a^A g(x,y)dx\right|\leq M \quad (\forall A\geq a，\forall y\in I)；$$
> 
> ii′) $h(x,y)$ 当 $y$ 固定时，对 $x$ 单调，当 $x\to+\infty$ 时，$h(x,y)\rightrightarrows 0$（关于 $y\in I$），则亦能断言 $\int_a^{+\infty} f(x,y)dx$ 对 $y\in I$ 一致收敛（Dirichlet 判别法）。
> 
> 对无界函数的反常积分，有类似的结论。

> [!example] ☆例 7.1.22
> 试证积分 $\int_0^{+\infty} \frac{\cos x^2}{x^p} dx$ 在 $|p|\leq p_0<1$ 上一致收敛。

> [!proof]- 证
> $\int_0^{+\infty} \frac{\cos x^2}{x^p} dx=\int_0^1 \frac{\cos x^2}{x^p} dx+\int_1^{+\infty} \frac{\cos x^2}{x^p} dx=I_1+I_2.$
> 
> 对于 $I_1=\int_0^1 \frac{\cos x^2}{x^p} dx$，因
> 
> $$\left|\frac{\cos x^2}{x^p}\right|\leq \frac{1}{x^p}\leq \frac{1}{x^{p_0}} \quad (0<x\leq 1，p\leq p_0<1)，$$
> 
> 且 $\int_0^1 \frac{1}{x^{p_0}} dx$ 收敛，故由 M 判别法，$I_1$ 在 $p\leq p_0<1$ 上一致收敛。
> 
> 对于 $I_2=\int_1^{+\infty} \frac{\cos x^2}{x^p} dx$，令 $x=\sqrt{t}$，$dx=\frac{dt}{2\sqrt{t}}$，$I_2=\int_1^{+\infty} \cos t\cdot\frac{1}{2t^{p/2+1/2}} dt$，其中
> 
> $$\left|\int_1^A \cos t dt\right|=|\sin A-\sin 1|\leq 2 \quad \text{（一致有界）。}$$
> 
> $\frac{1}{2t^{p/2+1/2}}$ 对 $t$ 单调，且 $\frac{1}{2t^{p/2+1/2}}\to 0$ （$p\geq -p_0>-1$）（$t\to+\infty$）。（因为 $0\leq \frac{1}{t^{p/2+1/2}}\leq \frac{1}{t^{-p_0/2+1/2}}=\frac{1}{t^{(1-p_0)/2}}\to 0$（$t\to+\infty$）。）故由 Dirichlet 判别法，$I_2$ 关于 $p\geq -p_0>-1$ 一致收敛。总之，原积分在 $|p|\leq p_0<1$ 上一致收敛。

> [!example] 例 7.1.23
> 设函数 $f(x)$ 在 $x>0$ 时连续，积分 $\int_0^{+\infty} x^\alpha f(x)dx$ 在 $\alpha=a, \alpha=b(a<b)$ 时收敛，试证该积分对 $\alpha\in[a,b]$ 一致收敛。（河北师范大学，北京师范大学）

> [!hint]- 提示
> $I=\int_0^1 x^{\alpha-a}\cdot x^a f(x)dx+\int_1^{+\infty} x^{\alpha-b}\cdot x^b f(x)dx.$ 利用 Abel 判别法。

> [!example] ☆例 7.1.24
> 证明：$\int_0^{+\infty} \frac{\sin 2x}{(x+\alpha)e^{-\alpha x}} dx$ 对 $\alpha\in[0,b]$（$b>0$）一致收敛。

> [!proof]- 证
> 因为 $e^{-\alpha x}$ 对 $x$ 单调，且 $|e^{-\alpha x}|\leq 1$（$\forall \alpha>0$，$\forall x>0$）（一致有界）。因此根据 Abel 定理，要证明该积分在 $[0,b]$ 上一致收敛，只要能证明积分 $\int_0^{+\infty} \frac{\sin 2x}{x+\alpha} dx$ 对 $\alpha\in[0,b]$ 一致收敛即可。但
> 
> 1) $\forall A>0$， $\left|\int_0^A \sin 2x dx\right|=\frac{1}{2}|1-\cos 2A|\leq 1$ （一致有界）。
> 
> 2) 因于 $\frac{1}{x+\alpha}$ 对于 $x$ 单调，且 $\left|\frac{1}{x+\alpha}\right|\leq \frac{1}{x}\to 0$（$x\to+\infty$），因而 $\frac{1}{x+\alpha}\rightrightarrows 0$ 对 $\alpha\in[0,b]$（$x\to+\infty$）。因此由 Dirichlet 判别法，$\int_0^{+\infty} \frac{\sin 2x}{x+\alpha} dx$ 对 $\alpha\in[0,b]$ 一致收敛。
> 
> 证毕。


### 三、含参变量反常积分的极限与连续性


#### a. 积分号下取极限

> [!note] 要点
> 对含参变量的反常积分，要实现在积分号下取极限，基本方法之一是直接利用积分号下取极限的定理：

> [!theorem] 定理 1（序列的极限）
> 若
> 
> i) $\int_a^{+\infty} f_n(x)dx$ 关于 $n\in\mathbb{N}$ 一致收敛；
> 
> ii) $\{f_n(x)\}$ 在 $[a,+\infty)$ 上内闭一致收敛于 $f(x)$（即 $\forall A>a$，$f_n(x)\to f(x)$ 于 $[a,A]$ 上（$n\to\infty$））；
> 
> iii) $\int_a^{+\infty} f(x)dx$ 收敛。
> 
> 则
> $$
> \lim_{n\to\infty}\int_a^{+\infty} f_n(x)dx=\int_a^{+\infty} \lim_{n\to\infty} f_n(x)dx=\int_a^{+\infty} f(x)dx.
> $$

> [!theorem] 定理 2（函数极限）
> 设 $I$ 为包含 $y_0$ 的某个区间。若
> 
> i′) $\int_a^{+\infty} f(x,y)dx$ 对 $y\in I$ 一致收敛；
> 
> ii′) 当 $y\to y_0$ 时，$f(x,y)$ 在 $[a,+\infty)$ 上内闭一致收敛于函数 $\varphi(x)$（即 $\forall A>a$，$f(x,y)\to\varphi(x)$ 于 $[a,A]$ 上（当 $y\to y_0$ 时））；
> 
> iii′) $\int_a^{+\infty} \varphi(x)dx$ 收敛。
> 
> 则
> $$
> \lim_{y\to y_0}\int_a^{+\infty} f(x,y)dx=\int_a^{+\infty} \lim_{y\to y_0} f(x,y)dx=\int_a^{+\infty} \varphi(x)dx.
> $$
> 
> （特别，若 $f(x,y)$ 在区域 $D=\{(x,y)|a\le x<+\infty，y\in I\}$ 上连续，则条件 ii′) 自然满足，且 $\varphi(x)=f(x,y_0)$。）

基本方法之二是采用上述定理所使用的证法进行证明。

> [!example] ☆例 7.1.25
> 假设 $\{f_n(x)\}$ 是 $[0,+\infty)$ 上的连续函数序列：
> 
> 1) 在 $[0,+\infty)$ 上 $|f_n(x)|\le g(x)$，且 $\int_0^{+\infty} g(x)dx$ 收敛；
> 
> 2) 在任何有限区间 $[0,A]$ 上（$A>0$），序列 $\{f_n(x)\}$ 一致收敛于 $f(x)$。
> 
> 试证明：$\displaystyle\lim_{n\to\infty}\int_0^{+\infty} f_n(x)dx=\int_0^{+\infty} f(x)dx$。（复旦大学，华中师范大学，同济大学）

> [!proof]- 证 I
> （利用定理 1.）由已知条件 1)，$\int_0^{+\infty} f_n(x)dx$ 关于 $n\in\mathbb{N}$ 一致收敛。条件 2) 表明 $\{f_n(x)\}$ 在区间 $[0,+\infty)$ 上内闭一致收敛于 $f(x)$。最后，在不等式 $|f_n(x)|\le g(x)$ 里取极限，知 $|f(x)|\le g(x)$，从而由比较判别法，知 $\int_0^{+\infty} f(x)dx$ 收敛。利用定理 1，欲证的等式成立。

> [!proof]- 证 II
> 利用证明定理时所使用的 $\varepsilon-N$ 方法。

> [!note]- 分析
> 问题在于证明：$\forall\varepsilon>0$，$n$ 充分大时，
> $$
> \left|\int_0^{+\infty} f_n(x)dx-\int_0^{+\infty} f(x)dx\right|<\varepsilon.
> $$
> 
> 改写
> 
> 上式左端 $= \left|\int_0^A (f_n(x)-f(x))dx + \int_A^{+\infty} f_n(x)dx - \int_A^{+\infty} f(x)dx\right|$
> 
> $\le \int_0^A |f_n(x)-f(x)|dx + \int_A^{+\infty} |f_n(x)|dx + \int_A^{+\infty} |f(x)|dx$
> 
> $\le \int_0^A |f_n(x)-f(x)|dx + \int_A^{+\infty} g(x)dx + \int_A^{+\infty} g(x)dx$.
> 
> 可见，我们只要证明 $\int_0^A |f_n(x)-f(x)|dx<\varepsilon/3$，$\int_A^{+\infty} g(x)dx<\varepsilon/3$ 即可。
> 
> 事实上，$\int_0^{+\infty} g(x)dx$ 收敛，故 $A$ 充分大时，$0\le\int_A^{+\infty} g(x)dx<\varepsilon/3$。此后将 $A$ 固定，
> 
> 因已知 $[0,A]$ 上 $f_n(x)\to f(x)$。所以 $\exists N>0$，$n>N$ 时，$|f_n(x)-f(x)|<\varepsilon/(3A)$，因而
> $$
> \int_0^A |f_n(x)-f(x)|dx<\frac{\varepsilon}{3A}\int_0^A dx=\frac{\varepsilon}{3}.
> $$

> [!example] ☆练习
> 求极限 $\displaystyle\lim_{\alpha\to 0+}\int_0^{+\infty} \frac{\sin 2x}{x+\alpha}e^{-\alpha x} dx$。（吉林大学）

> [!hint]- 提示
> （利用定理 2.）因为被积函数 $f(x,\alpha)= \frac{\sin 2x}{x+\alpha}e^{-\alpha x}$ 在 $0<x<+\infty$，$0\le\alpha\le\delta$ 上连续，且 $f(x,0)=\frac{\sin 2x}{x}$ 在 $[0,+\infty)$ 上可积。因此，要实现在积分号下取极限，根据定理 2，只要证明积分 $\int_0^{+\infty} \frac{\sin 2x}{x+\alpha}e^{-\alpha x} dx$ 对 $\alpha\in[0,\delta]$ 一致收敛。为此我们使用 Dirichlet 定理及 Abel 定理即可得到（见例 7.1.24）。

下例为我们提供了一个"用反常积分求解级数问题"的范例，同时也是本段定理 2 的应用。

> [!example] ☆例 7.1.26
> 试证极限
> $$
> \lim_{p\to 0+}\left(\frac{1}{p+1}\sum_{n=1}^{\infty} \frac{1}{n^{1+p}} - \frac{1}{p}\right)=C-1，\qquad （1）
> $$
> 其中 $C$ 是欧拉常数（见例 1.2.11）。（仿北京师范大学）

> [!note]- 分析
> 做过习题 5.1.25 和 5.1.26 的读者不难看出，该题中的级数可写成反常积分。问题是，能否在积分号下取极限？

> [!solution]- 解
> 用 $[x]$ 表示取整数部分，则
> 
> $\displaystyle\int_1^{+\infty} \frac{[x]}{x^{p+2}} dx$
> 
> $\displaystyle= \sum_{n=1}^{\infty} \int_n^{n+1} \frac{[x]}{x^{p+2}} dx$
> 
> $\displaystyle= \sum_{n=1}^{\infty} \int_n^{n+1} \frac{n}{x^{p+2}} dx$
> 
> $\displaystyle= \sum_{n=1}^{\infty} - \frac{n}{p+1} \left[ \frac{1}{(n+1)^{p+1}} - \frac{1}{n^{p+1}} \right]$
> 
> $\displaystyle= -\frac{1}{p+1} \sum_{n=1}^{\infty} \left[ \left( \frac{1}{(n+1)^p} - \frac{1}{(n+1)^{p+1}} \right) - \frac{1}{n^p} \right]$
> 
> $\displaystyle= \frac{1}{p+1} \left\{ \sum_{n=1}^{\infty} \left[ -\frac{1}{(n+1)^p} + \frac{1}{n^p} \right] + \sum_{n=1}^{\infty} \frac{1}{(n+1)^{p+1}} \right\}$
> 
> $\displaystyle= \frac{1}{p+1} \sum_{n=1}^{\infty} \frac{1}{n^{p+1}}$.
> 
> 又 $\displaystyle\frac{1}{p} = \int_1^{+\infty} \frac{1}{x^{p+1}} dx$，因此原极限可化为积分的极限，在积分号下取极限：
> $$
> \lim_{p\to 0+} \left( \frac{1}{p+1} \sum_{n=1}^{\infty} \frac{1}{n^{1+p}} - \frac{1}{p} \right)
> = \lim_{p\to 0+} \int_1^{+\infty} \frac{[x]-x}{x^{p+2}} dx
> = \int_1^{+\infty} \frac{[x]-x}{x^2} dx. \qquad （2）
> $$
> 
> 下面检验积分号下取极限的条件。
> 
> 1） $\displaystyle\left|\frac{[x]-x}{x^{p+2}}\right| \le \frac{1}{x^2}$ （当 $x\in[1,+\infty), p\ge 0$ 时），且 $\int_1^{+\infty} \frac{1}{x^2} dx$ 收敛，这表明
> $\displaystyle\int_1^{+\infty} \frac{[x]-x}{x^{p+2}} dx$ 关于 $p\ge 0$ 一致收敛。
> 
> 2）（2）右端的积分也收敛。
> 
> 3）又因 $\displaystyle\left| \frac{[x]-x}{x^{p+2}} - \frac{[x]-x}{x^2} \right| \le A^p - 1$ （$\forall A>1$，当 $x\in[1,A], p>0$ 时），且 $p\to 0+$ 时 $0\le A^p-1\to 0$。所以 $p\to 0+$ 时，$\frac{[x]-x}{x^{p+2}} \to \frac{[x]-x}{x^2}$（关于 $x\in[1,+\infty)$ 内闭一致收敛）。
> 
> 根据例 7.1.25 前要点中的定理 1，可在积分号下取极限。
> 
> 式（2）中的积分
> $\displaystyle\int_1^{+\infty} \frac{[x]-x}{x^2} dx = \lim_{n\to\infty} \int_1^n \frac{[x]-x}{x^2} dx$，其中
> 
> $\displaystyle\int_1^n \frac{[x]-x}{x^2} dx$
> 
> $\displaystyle= \sum_{k=1}^{n-1} \int_k^{k+1} \frac{[x]-x}{x^2} dx$
> 
> $\displaystyle= \sum_{k=1}^{n-1} \int_k^{k+1} \frac{k-x}{x^2} dx$
> 
> 令 $x-k=t$
> 
> $\displaystyle= \sum_{k=1}^{n-1} \int_0^1 \frac{-t}{(k+t)^2} dt$
> 
> $\displaystyle= \sum_{k=1}^{n-1} \int_0^1 \frac{-dt}{k+t} + \sum_{k=1}^{n-1} k\int_0^1 \frac{dt}{(k+t)^2}$
> 
> $\displaystyle= \sum_{k=1}^{n-1} [\ln k - \ln(1+k)] + \sum_{k=1}^{n-1} \frac{1}{1+k}$
> 
> $\displaystyle= \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} - \ln n$,
> 
> 故 原式 $= C - 1$ （其中 $C = \displaystyle\lim_{n\to\infty}\left(1 + \frac{1}{2} + \cdots + \frac{1}{n} - \ln n\right)$ 为欧拉常数）。

> [!note] 注
> 本题为用反常积分解决级数问题提供了范例。
> （本人曾阅读过 Silvia 的相关文章，本题解答采用了类似的思想方法。）


#### b. 含参变量反常积分的连续性

> [!note] 要点
> 证明含参变量反常积分对参变量连续，基本方法是
>
> 1）直接利用连续守恒定理：若
>
> i）$f(x,y)$ 在 $x\geq a$，$y\in[c,d]$ 上连续；
>
> ii）$\int_a^{+\infty} f(x,y) \,\mathrm{d}x$ 在 $y\in[c,d]$ 上一致收敛，
>
> 则 $g(y)=\int_a^{+\infty} f(x,y) \,\mathrm{d}x$ 在 $y\in[c,d]$ 上连续。
>
> 2）利用该定理的推论：若
>
> i）$f(x,y)$ 在 $x\geq a$，$y\in(c,d)$（有限或无穷区间）上连续；
>
> ii）$\int_a^{+\infty} f(x,y) \,\mathrm{d}x$ 在 $y\in(c,d)$ 内闭一致收敛，
>
> 则 $g(y)=\int_a^{+\infty} f(x,y) \,\mathrm{d}x$ 在 $(c,d)$ 内连续。

> [!example] 例 7.1.27
> 确定函数 $\displaystyle g(\alpha)=\int_0^{+\infty} \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x$ 的连续范围。（四川大学）

> [!solution]- 解
> （利用定理的推论，先证明 $g(\alpha)$ 的收敛区间为 $(1,4)$，再证在 $(1,4)$ 上内闭一致收敛。）
>
> $$
> g(\alpha)=\int_0^{+\infty} \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x
> = \int_0^1 \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x + \int_1^{+\infty} \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x = I_1 + I_2,
> $$
>
> 其中 $I_1$ 以 $0$ 为奇点，$\displaystyle\frac{\ln(1+x^3)}{x^\alpha} \sim \frac{1}{x^{\alpha-3}}$（当 $x\to 0^+$ 时），可见当且仅当 $\alpha-3<1$ 时，$\displaystyle I_1=\int_0^1 \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x$ 收敛；$\displaystyle I_2=\int_1^{+\infty} \frac{\ln(1+x^3)}{x^\alpha} \,\mathrm{d}x$ 以 $+\infty$ 为奇点，当 $\alpha>1$ 时收敛，$\alpha\leq 1$ 时发散。因此，原积分 $g(\alpha)$ 当且仅当 $1<\alpha<4$ 时收敛。
>
> 其次，假设 $[a,b]\subset(1,4)$ 为任一内闭区间，对于积分 $I_1$（这时 $0<x<1$），当 $\alpha\leq b$ 时，
> $\displaystyle\left|\frac{\ln(1+x^3)}{x^\alpha}\right| = \frac{\ln(1+x^3)}{x^\alpha} \leq \frac{\ln(1+x^3)}{x^b}$，且 $\displaystyle\int_0^1 \frac{\ln(1+x^3)}{x^b} \,\mathrm{d}x$ 收敛。所以，$I_1$ 在 $\alpha\leq b$ 时一致收敛。
>
> 对积分 $I_2$（这时 $x\geq 1$），当 $\alpha\geq a$ 时，
> $\displaystyle\left|\frac{\ln(1+x^3)}{x^\alpha}\right| = \frac{\ln(1+x^3)}{x^\alpha} \leq \frac{\ln(1+x^3)}{x^a}$，且
> $\displaystyle\int_1^{+\infty} \frac{\ln(1+x^3)}{x^a} \,\mathrm{d}x$ 收敛。所以，$I_2$ 在 $\alpha\geq a$ 时一致收敛。
>
> 总之，我们证明了 $g(\alpha)$ 在 $[a,b]$ 上一致收敛。即 $g(\alpha)$ 在 $(1,4)$ 上内闭一致收敛。从而由被积函数的连续性，推知 $g(\alpha)$ 在 $(1,4)$ 内连续。

**练习** 证明含参变量积分 $\displaystyle F(u)=\int_0^{+\infty} \frac{\sin(ux^2)}{x} \,\mathrm{d}x$ 在 $(0,+\infty)$ 内非一致收敛，但 $F(u)$ 在 $(0,+\infty)$ 内连续。（中国科学技术大学）

> [!hint]- 提示
> $$
> \int_{\sqrt{n}}^{\sqrt{2n}} \frac{\sin(ux^2)}{x} \,\mathrm{d}x
> = \int_{\sqrt{n}}^{\sqrt{2n}} \frac{\sin(ux^2)\,\mathrm{d}(ux^2)}{2ux^2}
> \xlongequal{令\ ux^2=t} \int_{nu}^{2nu} \frac{\sin t}{2t} \,\mathrm{d}t
> $$
>
> $$
> u=\frac{\pi}{2n}
> = \int_{\pi/2}^{\pi} \frac{\sin t}{2t} \,\mathrm{d}t = \varepsilon_0 > 0.
> $$
>
> 对此 $\varepsilon_0>0$，$\forall\Delta>0$，只要 $\sqrt{2n}>\sqrt{n}>\Delta$ 和 $u=\pi/(2n)\in(0,+\infty)$，则有
> $\displaystyle\int_{\sqrt{n}}^{\sqrt{2n}} \frac{\sin(ux^2)}{x} \,\mathrm{d}x = \varepsilon_0>0$。故积分 $F(u)$ 在 $u\in(0,+\infty)$ 上非一致收敛。

再提示 （利用 Dirichlet 判别法。）$\forall b>0$：

$$
\int_b^{+\infty} \frac{\sin(ux^2)}{x} \,\mathrm{d}x
= \int_b^{+\infty} \frac{\sin(ux^2)\,2ux\,\mathrm{d}x}{2ux^2}.
$$

记 $f(x,u)=\sin(ux^2)\,2ux$，$g(x,u)=1/(2ux^2)$。当 $u\geq b>0$，$x>0$ 时，$f(x,u)$ 和 $g(x,u)$ 连续。

① $\displaystyle\left|\int_b^A f(x,u) \,\mathrm{d}x\right| = \left|\int_b^A \sin(ux^2)\,2ux \,\mathrm{d}x\right|$
$\xlongequal{令\ ux^2=t} \displaystyle\left|\int_{ub^2}^{uA^2} \sin t \,\mathrm{d}t\right|$
$= |\cos(uA^2)-\cos(ub^2)| \leq 2$（一致有界）。

② 任意固定 $u\geq b>0$，$g$ 对 $x$ 单调，且 $0<g(x,u)=1/(2ux^2)\leq 1/(2b)\cdot 1/x^2\to 0$（$x\to+\infty$）。即：（$x\to+\infty$ 时）$g$ 对 $x$ 单调，且 $g(x,u)\to 0$（关于 $u\geq b>0$ 一致）。

因此，利用 Dirichlet 判别法，积分 $F(u)$ 关于 $u\in[b,+\infty)$ 一致收敛，$F(u)$ 在 $[b,+\infty)$ 上连续。再由 $b>0$ 的任意性，知 $F(u)$ 在 $(0,+\infty)$ 内处处连续。

> [!example] ☆例 7.1.28
> 若 $\displaystyle\int_{-\infty}^{+\infty} |f(x)| \,\mathrm{d}x$ 存在，证明函数 $\displaystyle g(\alpha)=\int_{-\infty}^{+\infty} f(x) \cos\alpha x \,\mathrm{d}x$ 在 $(-\infty,+\infty)$ 上一致连续。（吉林大学，湘潭大学，四川师范大学）

> [!proof]- 证
> 要证明 $g(\alpha)$ 在 $(-\infty,+\infty)$ 上一致连续，即要证明：$\forall\varepsilon>0$，$\exists\delta>0$，当 $|\alpha_2-\alpha_1|<\delta$ 时 $|g(\alpha_2)-g(\alpha_1)|<\varepsilon$。
>
> 由于当 $-A<x<A$ 时，
>
> $$
> |\cos\alpha_2 x - \cos\alpha_1 x|
> = 2 \left|\sin\frac{(\alpha_2+\alpha_1)x}{2}\right| \left|\sin\frac{(\alpha_2-\alpha_1)x}{2}\right|
> \leq |\alpha_2-\alpha_1| A,
> $$
>
> 故
>
> $$
> \begin{aligned}
> |g(\alpha_2)-g(\alpha_1)|
> &= \left|\int_{-\infty}^{+\infty} f(x) \cos\alpha_2 x \,\mathrm{d}x - \int_{-\infty}^{+\infty} f(x) \cos\alpha_1 x \,\mathrm{d}x\right| \\
> &\leq \int_{-\infty}^{+\infty} |f(x)|\, |\cos\alpha_2 x - \cos\alpha_1 x| \,\mathrm{d}x \\
> &\leq 2\int_{-\infty}^{-A} |f(x)| \,\mathrm{d}x + 2\int_A^{+\infty} |f(x)| \,\mathrm{d}x + A|\alpha_2-\alpha_1|\int_{-A}^{A} |f(x)| \,\mathrm{d}x. \qquad\text{（1）}
> \end{aligned}
> $$
>
> 已知 $\displaystyle\int_{-\infty}^{+\infty} |f(x)| \,\mathrm{d}x$ 存在，所以 $A>0$ 充分大时，可使
>
> $$
> 2\int_{-\infty}^{-A} |f(x)| \,\mathrm{d}x + 2\int_A^{+\infty} |f(x)| \,\mathrm{d}x < \frac{\varepsilon}{2}. \qquad\text{（2）}
> $$
>
> 再将 $A$ 固定，取
> $\displaystyle\delta = \varepsilon \Big/ \left(2A\int_{-\infty}^{+\infty} |f(x)| \,\mathrm{d}x\right)$，则当 $|\alpha_2-\alpha_1|<\delta$ 时，式（1）最后一项
>
> $$
> A|\alpha_2-\alpha_1|\int_{-A}^{A} |f(x)| \,\mathrm{d}x < \frac{\varepsilon}{2}. \qquad\text{（3）}
> $$
>
> 于是，由式（1）、（2）、（3）知 $|g(\alpha_2)-g(\alpha_1)| < \varepsilon/2 + \varepsilon/2 = \varepsilon$。证毕。

> [!example] *例 7.1.29
> 设 $f(x)$ 在 $[a,b]$ 上有界，试证 $\displaystyle g(\alpha)=\int_a^b \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x$ 在全数轴上连续。

> [!note]- 分析
> 用例 7.1.12 的证法易知该积分在 $[a,b]$ 上的一致收敛性。虽然如此，我们并不能应用连续守恒定理，因为这里 $f(x)$ 未必连续。
>
> 下面分三种情况进行讨论：因 $f(x)$ 有界，可设 $|f(x)|\leq M$（$\forall x\in[a,b]$）。
>
> 1°（证明 $g$ 在 $[a,b]$ 外连续。）设 $\alpha_0\notin[a,b]$，当 $\alpha$ 充分接近 $\alpha_0$ 时，$\alpha\notin[a,b]$，因而下式中的积分均为正常积分。
>
> $$
> \begin{aligned}
> |g(\alpha)-g(\alpha_0)|
> &= \left|\int_a^b \left( \frac{f(x)}{\sqrt{|x-\alpha|}} - \frac{f(x)}{\sqrt{|x-\alpha_0|}} \right) \mathrm{d}x\right| \\
> &\leq M\int_a^b \left| \frac{1}{\sqrt{|x-\alpha|}} - \frac{1}{\sqrt{|x-\alpha_0|}} \right| \mathrm{d}x \to 0 \quad \text{（当 }\alpha\to\alpha_0\text{ 时）}
> \end{aligned}
> $$
>
> （因右端的被积函数连续），故这时 $g$ 在 $\alpha_0$ 处连续。
>
> 2°（证明 $g$ 在区间端点 $a$ 和 $b$ 处连续。）设 $\alpha_0=a$，这时可取 $h>0$ 充分小，使得 $a<a+h<b$。于是当 $|\alpha-a|<h$ 时，$\alpha\notin[a+h,b]$，于是下式中 $[a+h,b]$ 上的积分已属于 1° 中已讨论的情况。
>
> $$
> g(\alpha)=\int_a^b \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x
> = \int_a^{a+h} \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x + \int_{a+h}^b \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x = I_1+I_2,
> $$
>
> 由 1° 知
>
> $$
> I_2=\int_{a+h}^b \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x \to \int_{a+h}^b \frac{f(x)}{\sqrt{|x-a|}} \,\mathrm{d}x \quad \text{（当 }\alpha\to a\text{ 时）}.
> $$
>
> 故只需证明
>
> $$
> I_1=\int_a^{a+h} \frac{f(x)}{\sqrt{|x-\alpha|}} \,\mathrm{d}x \to \int_a^{a+h} \frac{f(x)}{\sqrt{|x-a|}} \,\mathrm{d}x \quad \text{（当 }\alpha\to a\text{ 时）}. \qquad\text{（1）}
> $$
>
> 因 $\displaystyle\frac{|f(x)|}{\sqrt{|x-a|}} \leq \frac{M}{\sqrt{|x-a|}}$，而 $\displaystyle\int_a^{a+h} \frac{\mathrm{d}x}{\sqrt{|x-a|}}$ 收敛（$a$ 为奇点），故式（1）中积分 $\displaystyle\int_a^{a+h} \frac{f(x)}{\sqrt{|x-a|}} \,\mathrm{d}x$ 也收敛。剩下只需证明：$\forall\varepsilon>0$，$\exists\delta>0$，当 $|\alpha-a|<\delta$ 时，有
>
> $$
> \left|\int_a^{a+h} \left( \frac{f(x)}{\sqrt{|x-\alpha|}} - \frac{f(x)}{\sqrt{|x-a|}} \right) \mathrm{d}x\right| < \varepsilon.
> $$
>
> 事实上
>
> $$
> \left|\int_a^{a+h} \left( \frac{f(x)}{\sqrt{|x-\alpha|}} - \frac{f(x)}{\sqrt{|x-a|}} \right) \mathrm{d}x\right|
> \leq M \left( \int_a^{a+h} \frac{\mathrm{d}x}{\sqrt{|x-\alpha|}} + \int_a^{a+h} \frac{\mathrm{d}x}{\sqrt{|x-a|}} \right), \qquad\text{（2）}
> $$
>
> 而
> $$
> \int_a^{a+h} \frac{\mathrm{d}x}{\sqrt{|x-\alpha|}}
> \xlongequal{令\ t=x-\alpha} \int_{a-\alpha}^{a+h-\alpha} \frac{\mathrm{d}t}{\sqrt{|t|}}.
> $$
>
> 取 $\delta<h$，当 $|\alpha-a|<\delta<h$ 时，$-h<a-\alpha$，$a+h-\alpha<2h$，由 $\displaystyle\int_{-1}^1 \frac{\mathrm{d}t}{\sqrt{|t|}}$ 收敛知
>
> $$
> \int_{a-\alpha}^{a+h-\alpha} \frac{\mathrm{d}t}{\sqrt{|t|}} \leq \int_{-h}^{2h} \frac{\mathrm{d}t}{\sqrt{|t|}} < \frac{\varepsilon}{2M} \quad \text{（当 }h\text{ 充分小时）}. \qquad\text{（3）}
> $$
>
> 此时作类似分析知，式（2）中第二个积分有
>
> $$
> \int_a^{a+h} \frac{\mathrm{d}x}{\sqrt{|x-a|}}
> \xlongequal{令\ t=x-a} \int_0^h \frac{\mathrm{d}t}{\sqrt{|t|}} < \frac{\varepsilon}{2M}. \qquad\text{（4）}
> $$
>
> 将式（3）、（4）代入式（2），即得 $|\alpha-a|<\delta<h$（$h$ 充分小时）时有
>
> $$
> \int_a^{a+h} \left( \frac{f(x)}{\sqrt{|x-\alpha|}} - \frac{f(x)}{\sqrt{|x-a|}} \right) \mathrm{d}x < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
> $$
>
> 类似可证 $\alpha_0=b$ 的情况。
>
> 3° 当 $\alpha_0\in(a,b)$ 时，只需把 $[a,b]$ 剖分为 $[a,\alpha_0]$ 与 $[\alpha_0,b]$，即转化为 $\alpha_0$ 为端点的情况，由 2° 即得。


☆ 四、含参变量反常积分积分号下求导与积分号下求积分


#### a. 积分号下求导

> [!note]
> 根据积分号下求导的 Leibniz 法则，要对含参变量的反常积分
>
> $$g(y)=\int_a^{+\infty} f(x,y)\,dx$$
>
> 实现积分号下求导：$g'(y)=\int_a^{+\infty} f'_y(x,y)\,dx$，只需检验如下条件（假设 $I$ 为某个区间）：
>
> i）$f(x,y),\ f'_y(x,y)$ 在 $a\le x<+\infty,\ y\in I$ 上连续；
>
> ii）$\int_a^{+\infty} f(x,y)\,dx$ 在 $y\in I$ 上收敛；
>
> iii）$\int_a^{+\infty} f'_y(x,y)\,dx$ 对 $y\in I$ 一致收敛（若 $I$ 为开区间或半开半闭区间，不论有限或无穷，此条件可放松为 $\int_a^{+\infty} f'_y(x,y)\,dx$ 关于 $y$ 在 $I$ 上内闭一致收敛）。
>
> 则
> $$
> g'(y)=\left(\int_a^{+\infty} f(x,y)\,dx\right)'=\int_a^{+\infty} f'_y(x,y)\,dx\qquad(\forall y\in I).
> $$
>
> 若补充条件：当 $y\in I$ 时，函数 $\varphi(y)\ge a$，连续可导，则
> $$
> \left(\int_{\varphi(y)}^{+\infty} f(x,y)\,dx\right)'
> =\int_{\varphi(y)}^{+\infty} f'_y(x,y)\,dx-f(\varphi(y),y)\varphi'(y)
> \qquad(\forall y\in I).
> $$
>
> 对于无界反常积分，有类似结论。

> [!example] 例 7.1.30
> 求 $g'(\alpha)$，设
> $$
> g(\alpha)=\int_1^{+\infty} \frac{\arctan \alpha x}{x^2\sqrt{x^2-1}}\,dx.
> $$

> [!solution]- 解
> 奇点为 $x=1$ 与 $x=+\infty$。
>
> 1° 在 $x=1$ 的邻域内，被积函数与
> $$
> \frac{1}{\sqrt{x^2-1}}=\frac{1}{\sqrt{(x-1)(x+1)}}
> $$
> 同阶；在 $x=+\infty$ 的邻域里，被积函数与 $\dfrac{1}{x^3}$ 同阶。因此原积分 $g(\alpha)$ 收敛。
>
> 2°
> $$
> \int_1^{+\infty}\left(\frac{\arctan \alpha x}{x^2\sqrt{x^2-1}}\right)'_{\alpha}dx
> =\int_1^{+\infty}\frac{dx}{x\sqrt{x^2-1}(1+\alpha^2x^2)},
> \tag{1}
> $$
> 而
> $$
> \left|\frac{1}{x\sqrt{x^2-1}(1+\alpha^2x^2)}\right|
> \le \frac{1}{x\sqrt{x^2-1}},\quad \forall\alpha\in(-\infty,+\infty),
> $$
> 且
> $$
> \int_1^{+\infty}\frac{1}{x\sqrt{x^2-1}}\,dx
> $$
> 收敛，故积分(1)关于 $\alpha\in(-\infty,+\infty)$ 一致收敛。
>
> 3° 被积函数以及它对参数的导数的连续性明显，因此
> $$
> g'(\alpha)=\int_1^{+\infty}\frac{dx}{x\sqrt{x^2-1}(1+\alpha^2x^2)}
> \overset{令\,x=\sec t}{=}
> \int_0^{\pi/2}\frac{dt}{1+\alpha^2\sec^2 t}
> $$
> $$
> \overset{令\,u=\tan t}{=}
> \int_0^{+\infty}\frac{1}{1+\alpha^2(1+u^2)}\cdot\frac{du}{1+u^2}
> =\int_0^{+\infty}\left(\frac{1}{1+u^2}-\frac{\alpha^2}{1+\alpha^2+\alpha^2u^2}\right)du
> $$
> $$
> =\frac{\pi}{2}\left(1-\frac{|\alpha|}{\sqrt{1+\alpha^2}}\right).
> $$

> [!example] 例 7.1.31
> 求 $g''_{\alpha\beta}(\alpha,\beta)$，设
> $$
> g(\alpha,\beta)=\int_0^{+\infty}\frac{\arctan \alpha x\cdot\arctan \beta x}{x^2}\,dx
> \qquad(\alpha>0,\beta>0).
> $$

> [!solution]- 解
> （证明可在积分号下对 $\alpha$ 求导。）
>
> 1° 因为 $x\to0$ 时，$\arctan x\sim x$，所以
> $$
> \lim_{x\to0^+}\frac{\arctan \alpha x\cdot\arctan \beta x}{x^2}=\alpha\beta.
> \tag{1}
> $$
> 故 $x=0$ 不是奇点。而在 $x=+\infty$ 的邻域内，
> $$
> \left|\frac{\arctan \alpha x\cdot\arctan \beta x}{x^2}\right|\le \frac{\pi^2}{4x^2},
> $$
> 因此原积分收敛。
>
> 2°
> $$
> \int_0^{+\infty}\left(\frac{\arctan \alpha x\cdot\arctan \beta x}{x^2}\right)'_{\alpha}dx
> =\int_0^{+\infty}\frac{\arctan \beta x\,dx}{x(1+\alpha^2x^2)},
> \tag{2}
> $$
> $$
> \left|\frac{\arctan \beta x}{x(1+\alpha^2x^2)}\right|
> \le \frac{\pi}{2x(1+\alpha_0^2x^2)},\quad \alpha\ge \alpha_0>0.
> $$
> 而
> $$
> \int_1^{+\infty}\frac{\pi}{2x(1+\alpha_0^2x^2)}\,dx
> $$
> 收敛，所以积分(2)对 $\alpha$ 在 $\alpha>0$ 上内闭一致收敛（$x=0$ 不是奇点）。
>
> 3° 被积函数以及对参数 $\alpha$ 的导数在 $x>0,\alpha>0$ 上连续（$x=0$ 为可去间断点）。总之符合积分号下求导的全部条件，因此
> $$
> g'_\alpha(\alpha,\beta)=\int_0^{+\infty}\frac{\arctan \beta x}{x(1+\alpha^2x^2)}\,dx.
> \tag{3}
> $$
> 类似可证式(3)可在积分号下对 $\beta$ 求导，所以
> $$
> g''_{\alpha\beta}(\alpha,\beta)
> =\int_0^{+\infty}\frac{dx}{(1+\alpha^2x^2)(1+\beta^2x^2)}
> \tag{4}
> $$
> $$
> =\frac{1}{\alpha^2-\beta^2}\int_0^{+\infty}\left(\frac{\alpha^2}{1+\alpha^2x^2}-\frac{\beta^2}{1+\beta^2x^2}\right)dx
> \qquad(\text{当 }\alpha\ne\beta\text{ 时})
> $$
> $$
> =\frac{\pi}{2(\alpha+\beta)}.
> $$
> 最后的结果
> $$
> g''_{\alpha\beta}(\alpha,\beta)=\frac{\pi}{2(\alpha+\beta)}
> $$
> 对 $\alpha,\beta>0$ 恒成立。这是因为积分(4)在 $\alpha,\beta>0$ 上内闭一致收敛，$g''_{\alpha\beta}$ 在 $\alpha,\beta>0$ 上有连续性，从 $\alpha\ne\beta$ 的结果取极限，可知 $\alpha=\beta$ 时亦成立。

下例说明积分号下求导的一项应用。

> [!example] ☆例 7.1.32
> 设
> $$
> F(x)=e^{x^2/2}\int_x^{+\infty}e^{-t^2/2}\,dt\qquad(x\in[0,+\infty)),
> $$
> 试证：
>
> 1）$\lim_{x\to+\infty}F(x)=0$；
>
> 2）$F(x)$ 在 $[0,+\infty)$ 内单调递减．（上海师范大学）

> [!proof]- 证
> 1）应用 L'Hospital 法则，
> $$
> \lim_{x\to+\infty}F(x)
> =\lim_{x\to+\infty}\frac{\int_x^{+\infty}e^{-t^2/2}\,dt}{e^{-x^2/2}}
> =\lim_{x\to+\infty}\frac{-e^{-x^2/2}}{-xe^{-x^2/2}}
> =\lim_{x\to+\infty}\frac{1}{x}=0.
> $$
>
> 2）
> $$
> F'(x)=xe^{x^2/2}\int_x^{+\infty}e^{-t^2/2}\,dt-e^{x^2/2}e^{-x^2/2}
> =\int_x^{+\infty}xe^{(x^2-t^2)/2}\,dt-1
> $$
> $$
> \le \int_x^{+\infty}te^{(x^2-t^2)/2}\,dt-1
> =-e^{(x^2-t^2)/2}\Big|_x^{+\infty}-1=0.
> $$
> 故 $F(x)\searrow$。

> [!example] 练习1
> 试证：含参变量 $x$ 的无穷积分
> $$
> f(x)=\int_1^{+\infty}\frac{\arctan(tx)}{t^\alpha}\,dt\qquad(\alpha>1)
> \tag{1}
> $$
> 定义了 $(0,+\infty)$ 内的一个可微函数，并满足
> $$
> xf'(x)-(\alpha-1)f(x)+\arctan x=0.
> \tag{2}
> $$
> （中国科学技术大学）

> [!hint]- 提示
> （用 $M$ 判别法。）原积分(1)对 $x\in(0,+\infty)$ 一致收敛；积分号下求导后，内闭一致收敛。
>
> 再提示
> $$
> \left|\frac{\arctan(tx)}{t^\alpha}\right|\le \frac{\pi}{2t^\alpha}
> \qquad(\forall x\in(0,+\infty),\ t>1),
> $$
> $$
> \frac{\pi}{2}\int_1^{+\infty}\frac{dt}{t^\alpha}
> $$
> 收敛（$\alpha>1$）。故积分(1)对 $x$ 在 $(0,+\infty)$ 上一致收敛。被积函数求导后：
> $$
> \left[\frac{\arctan(tx)}{t^\alpha}\right]'_x
> =\frac{1}{t^{\alpha-1}[1+(tx)^2]}
> \le \frac{1}{t^{\alpha-1}[1+(bt)^2]}
> \qquad(\text{因 }x\ge b>1\text{，}\alpha>1).
> $$
> 而
> $$
> \int_1^{+\infty}\frac{1}{t^{\alpha-1}[1+(bt)^2]}\,dt<+\infty,
> $$
> 表明 $\forall b>1$，积分号下求导后的积分对 $x\ge b$ 一致收敛。于是对 $x\in[b,+\infty)$，满足积分号下求导的三项条件，故
> $$
> f'(x)=\int_1^{+\infty}\left[\frac{\arctan(tx)}{t^\alpha}\right]'_xdt
> \overset{令\,u=tx}{=}
> \frac{1}{x}\int_x^{+\infty}\left(\frac{x}{u}\right)^\alpha(\arctan u)'_u\,du
> $$
> $$
> =\frac{1}{x}\int_x^{+\infty}\left(\frac{x}{u}\right)^{\alpha-1}d(\arctan u)
> $$
> 分部积分
> $$
> =x^{\alpha-2}\frac{1}{u^{\alpha-1}}\arctan u\Big|_x^{+\infty}
> -x^{\alpha-2}\int_x^{+\infty}\arctan u\,d\frac{1}{u^{\alpha-1}}
> $$
> $$
> =\frac{1}{x}(-\arctan x)+(\alpha-1)x^{\alpha-2}\int_1^{+\infty}\frac{\arctan(tx)}{t^\alpha x^\alpha}x\,dt
> $$
> $$
> \overset{x(1)}{=}\frac{1}{x}\big[-\arctan x+(\alpha-1)f(x)\big].
> $$
> 此式两边同乘 $x$，再移项，即得（欲证的）式(2)。

> [!example] ☆练习2
> 设 $f(x)$ 有连续导数，反常积分 $\int_0^{+\infty}xf(x)\,dx$ 与 $\int_0^{+\infty}\frac{f(x)}{x}\,dx$ 都收敛，证明：
> $$
> I(t)=\int_0^{+\infty}x^t f(x)\,dx
> $$
> 在 $(-1,1)$ 内有定义，且有连续的导函数．（北京大学）
>
> （极好的"达标题"。）

> [!proof]- 证
> 1° （先证：$\forall[\alpha,\beta]\subset(-1,1)$，$\int_0^{+\infty}x^t f(x)\,dx$ 在 $[\alpha,\beta]$ 上一致收敛。）
>
> $$
> I(t)=\int_0^{+\infty}x^t f(x)\,dx
> =\int_0^1x^{t+1}\frac{f(x)}{x}\,dx+\int_1^{+\infty}x^{t-1}\cdot xf(x)\,dx
> \overset{记}{=}I_1+I_2.
> $$
>
> $I_1$：以 $x=0$ 为奇点。当 $0<x<1,t\ge\alpha>-1$ 时，固定 $t$，$x^{t+1}$ 对 $x$ 单调，且 $0\le x^{t+1}<1$，说明 $x^{t+1}$ 一致有界。又已知 $\int_0^1\frac{f(x)}{x}\,dx$ 收敛（关于 $t$ 一致），利用 Abel 判别法，知 $I_1$ 一致收敛（关于 $t\ge\alpha$）。
>
> $I_2$：以 $+\infty$ 为奇点。当 $x>1,t\le\beta<1$ 时，固定 $t$，$x^{t-1}$ 对 $x$ 单调，且 $0<x^{t-1}<\dfrac{1}{x^{1-\beta}}\le1$（说明一致有界）。又因 $\int_0^{+\infty}xf(x)\,dx$ 收敛（关于 $t$ 一致），利用 Abel 判别法，知 $I_2$ 一致收敛（关于 $t\le\beta<1$）。
>
> 故 $I(t)$ 在 $[\alpha,\beta]$ 上有定义，且连续。由 $[\alpha,\beta]\subset(-1,1)$ 的任意性，知 $I(t)$ 在 $(-1,1)$ 内连续。
>
> 2° （证：能在积分号下求导。）
> $$
> \int_0^{+\infty}\frac{\partial}{\partial t}[x^t f(x)]\,dx
> =\int_0^{+\infty}x^t\ln x\cdot f(x)\,dx
> $$
> $$
> =\int_0^1x^{t+1}\ln x\cdot\frac{f(x)}{x}\,dx+
> \int_1^{+\infty}x^{t-1}\ln x\cdot xf(x)\,dx
> \overset{记}{=}I_3+I_4.
> \tag{1}
> $$
> 任一内闭区间 $[\alpha,\beta]\subset(-1,1)$，当 $t\in[\alpha,\beta]$ 时，积分一致收敛。事实上，$I_3$ 以 $0$ 为奇点．
>
> 1）
> $$
> \int_0^1x^t\ln x\,f(x)\,dx=
> \int_0^1x^{t+1}\ln x\cdot\frac{f(x)}{x}\,dx,
> $$
> 其中 $\int_0^1\frac{f(x)}{x}\,dx$ 收敛（关于 $t$ 一致），当 $0<x<1$，固定 $t\in[\alpha,\beta]\subset(-1,1)$，则 $t>-1,1+t>0$。当 $x\to0^+$ 时，
> $$
> (x^{1+t}\ln x)'_x=x^t[(1+t)\ln x+1]<0,
> $$
> 所以 $x^{1+t}\ln x$ 对 $x$ 单减。当 $x\to0^+$ 时，$0<|x^{1+t}\ln x|\le x^{1+\alpha}|\ln x|\to0$，故 $x^{1+t}\ln x$（关于 $t$）一致有界。又 $\int_0^1\frac{f(x)}{x}\,dx$ 收敛（关于 $t$ 一致），因此由 Abel 判别法可知 $I_3$ 一致收敛。
>
> （此处也可应用 Dirichlet 判别法，因为 $x^{1+t}\ln x$ 对 $x$ 单减，且当 $x\to0^+$ 时一致趋向 $0$。而 $\int_A^1\frac{f(x)}{x}\,dx$ 收敛，$\int_A^1\frac{f(x)}{x}\,dx$ 当然（关于 $t$）一致有界（当 $A\to0^+$ 时）。）
>
> 2）类似可证 $I_4$ 一致收敛。
>
> 于是 $I(t)$ 可在积分号下求导，且求导后的函数也连续，故 $I(t)$ 有连续导数。


#### b. 积分号下求积分

> [!note]
> 要对含参变量的反常积分 $g(y)=\int_a^{+\infty}f(x,y)\,dx$ 实现积分号下求积分，只需验证条件：
> 
> i）$f(x,y)$ 在 $a\le x<+\infty,c\le y\le d$ 上连续；
> ii）$\int_a^{+\infty}f(x,y)\,dx$ 对 $y\in[c,d]$ 一致收敛，
> 
> 则
> $$
> \int_c^d dy\int_a^{+\infty}f(x,y)\,dx
> =\int_a^{+\infty}dx\int_c^d f(x,y)\,dy.
> $$
> 
> 另外，若
> 
> i）$f(x,y)$ 在 $x\ge a,y\ge c$ 上连续；
> ii）$\int_a^{+\infty}f(x,y)\,dx$ 在 $y\in[c,+\infty)$ 上内闭一致收敛，$\int_c^{+\infty}f(x,y)\,dy$ 对 $x$ 在 $[a,+\infty)$ 上也内闭一致收敛；
> iii）$\int_c^{+\infty}dy\int_a^{+\infty}|f(x,y)|\,dx$ 及 $\int_a^{+\infty}dx\int_c^{+\infty}|f(x,y)|\,dy$ 至少有一个收敛，
> 
> 则
> $$
> \int_c^{+\infty}dy\int_a^{+\infty}f(x,y)\,dx
> =\int_a^{+\infty}dx\int_c^{+\infty}f(x,y)\,dy.
> $$

> [!example] 例 7.1.33 计算积分
> $$
> I=\int_0^{+\infty}\frac{e^{-ax}-e^{-bx}}{x}\cos mx\,dx,\qquad a,b>0.
> $$

> [!solution]- 解
> 因
> $$
> \frac{e^{-ax}-e^{-bx}}{x}=\int_a^b e^{-\alpha x}\,d\alpha,
> $$
> 故
> $$
> I=\int_0^{+\infty}dx\int_a^b e^{-\alpha x}\cos mx\,d\alpha
> =\int_a^b d\alpha\int_0^{+\infty}e^{-\alpha x}\cos mx\,dx.
> $$
> 
> （因 $\int_0^{+\infty}e^{-\alpha x}\cos mx\,dx$ 对 $\alpha\in[a,b]$ 一致收敛）由此
> $$
> I=\int_a^b\frac{\alpha}{\alpha^2+m^2}\,d\alpha
> =\frac12\ln\frac{b^2+m^2}{a^2+m^2}.
> $$

> [!example] 例 7.1.34 试利用
> $$
> \int_0^{+\infty}e^{-u^2}\,du\overset{令\,u=\alpha x}{=}\int_0^{+\infty}\alpha e^{-\alpha^2x^2}\,dx\qquad(\forall\alpha>0)
> \tag{1}
> $$
> 计算积分
> $$
> \int_0^{+\infty}e^{-\alpha^2}\,d\alpha.
> $$

> [!solution]- 解
> 式(1)表明
> $$
> g(\alpha)=\int_0^{+\infty}\alpha e^{-\alpha^2x^2}\,dx
> $$
> 是取常值的函数。记
> $$
> I=\int_0^{+\infty}e^{-\alpha^2}\,d\alpha,
> $$
> 则
> $$
> I^2=I\cdot\int_0^{+\infty}e^{-\alpha^2}\,d\alpha
> =\int_0^{+\infty}Ie^{-\alpha^2}\,d\alpha
> =\int_0^{+\infty}\left(\int_0^{+\infty}\alpha e^{-\alpha^2x^2}\,dx\right)e^{-\alpha^2}\,d\alpha
> $$
> $$
> =\int_0^{+\infty}d\alpha\int_0^{+\infty}\alpha e^{-\alpha^2(1+x^2)}\,dx
> =\int_0^{+\infty}dx\int_0^{+\infty}\alpha e^{-\alpha^2(1+x^2)}\,d\alpha
> $$
> $$
> =\frac12\int_0^{+\infty}\frac{1}{1+x^2}\,dx=\frac{\pi}{4}.
> $$
> 故
> $$
> I=\frac{\sqrt\pi}{2}.
> $$

> [!note]
> $\int_0^{+\infty}e^{-x^2}\,dx$ 通常称为 Euler-Poisson 积分，在概率论中非常有用．它的值可用多种方法算出，除本例外，本节还可参看例 7.1.44，例 7.1.48。


### ☆五、反常积分的计算

上两例说明可用积分号下求积分的方法计算反常积分。下面我们进一步讨论计算反常积分的其他方法。


#### a. 利用积分号下求导

> [!example] ☆例 7.1.35
> 计算
> $$
> g(\alpha)=\int_1^{+\infty}\frac{\arctan \alpha x}{x^2\sqrt{x^2-1}}\,dx.
> $$
> （河南师范大学）

> [!solution]- 解
> （困难在于分子里有 $\arctan\alpha x$，因此考虑在积分号下求导，消去该因子。）
> 
> 1° 因 $g(\alpha)=-g(-\alpha)$，所以只需考虑 $\alpha\ge0$ 的情况。重复例 7.1.30 的计算，可知
> $$
> g'(\alpha)=\frac{\pi}{2}\left(1-\frac{\alpha}{\sqrt{1+\alpha^2}}\right),\qquad \text{当 }\alpha\ge0\text{ 时}.
> $$
> 2° 因 $g(0)=0$，所以 $\alpha\ge0$ 时，
> $$
> \begin{aligned}
> g(\alpha)&=g(\alpha)-g(0)=\int_0^\alpha g'(t)\,dt\\
> &=\frac{\pi}{2}\int_0^\alpha\left(1-\frac{t}{\sqrt{1+t^2}}\right)dt = \frac{\pi}{2}(\alpha+1-\sqrt{1+\alpha^2}),
> \end{aligned}
> $$
> 从而
> $$
> g(\alpha)= \frac{\pi}{2}(|\alpha|+1-\sqrt{1+\alpha^2})\operatorname{sgn}\alpha \qquad (-\infty<\alpha<+\infty).
> $$

> [!example] 例 7.1.36
> 计算积分 $\displaystyle g(\alpha,\beta)=\int_0^{+\infty}\frac{\arctan\alpha x\cdot\arctan\beta x}{x^2}\,dx$.

> [!solution]- 解
> 当 $\alpha>0$，$\beta>0$ 时，重复例 7.1.31 中的计算，有
> $$
> g'_{\alpha}(\alpha,\beta)=\int_0^{+\infty}\frac{\arctan\beta x}{x(1+\alpha^2 x^2)}\,dx, \qquad (1)
> $$
> $$
> g''_{\alpha\beta}(\alpha,\beta)= \frac{\pi}{2(\alpha+\beta)}. \qquad (2)
> $$
> 由此对 $\beta$ 积分得
> $$
> g'_{\alpha}(\alpha,\beta)= \frac{\pi}{2}\ln(\alpha+\beta)+C(\alpha) \qquad (\beta>0). \qquad (3)
> $$
> 注意积分(1)对于 $\beta\ge0$ 一致收敛，因此
> $$
> \lim_{\beta\to 0^+} g'_{\alpha}(\alpha,\beta)= \lim_{\beta\to 0^+} \int_0^{+\infty}\frac{\arctan\beta x}{x(1+\alpha^2 x^2)}\,dx =0,
> $$
> 故在(3)中令 $\beta\to0^+$，取极限可知 $C(\alpha)=-\dfrac{\pi}{2}\ln\alpha$. 因而
> $$
> g'_{\alpha}(\alpha,\beta)= \frac{\pi}{2}\ln\frac{\alpha+\beta}{\alpha} \qquad (\alpha>0,\ \beta>0). \qquad (4)
> $$
> 将此式对 $\alpha$ 积分，得
> $$
> g(\alpha,\beta)= \frac{\pi}{2}\alpha\ln\frac{\alpha+\beta}{\alpha}+\frac{\pi}{2}\beta\ln(\alpha+\beta)+C_1(\beta). \qquad (5)
> $$
> 注意到原积分 $g(\alpha,\beta)$ 关于 $\alpha,\beta\in(-\infty,+\infty)$ 一致收敛，$g(\alpha,\beta)$ 在 $(0,0)$ 处连续。因此在式(5)中令 $\alpha\to0^+$，可得 $C_1(\beta)=-\dfrac{\pi}{2}\beta\ln\beta$[^1]，故
> $$
> g(\alpha,\beta)= \frac{\pi}{2}\ln\frac{(\alpha+\beta)^{\alpha+\beta}}{\alpha^\alpha\beta^\beta} \qquad (\alpha>0,\ \beta>0). \qquad (6)
> $$
> 因 $g(\alpha,\beta)$ 对 $\alpha,\beta$ 分别为奇函数，所以
> $$
> g(\alpha,\beta)=\begin{cases}
> \dfrac{\pi}{2}(\operatorname{sgn}\alpha)(\operatorname{sgn}\beta)\ln\dfrac{(|\alpha|+|\beta|)^{|\alpha|+|\beta|}}{|\alpha|^{|\alpha|}\cdot|\beta|^{|\beta|}}, & \alpha\beta\neq 0,\\[12pt]
> 0, & \alpha\beta=0.
> \end{cases}
> $$

[^1]: 亦可由 $g(\alpha,\beta)$ 关于 $\alpha,\beta$ 的对称性，从式(5)可直接看出 $C_1(\beta)=-\dfrac{\pi}{2}\beta\ln\beta+C_2$，然后利用 $\alpha=\beta=0$ 时 $g(0,0)=0$，可得 $C_2=0$，从而 $C_1(\beta)=-\dfrac{\pi}{2}\beta\ln\beta$.


#### b. 通过建立微分方程求积分值

> [!example] ☆例 7.1.37
> 求 $g(\alpha)=\int_0^{+\infty} e^{-x^2} \cos 2\alpha x \, dx$（已知 $g(0)=\sqrt{\pi}/2$）。（复旦大学，中山大学，四川师范大学，北京师范大学，华中师范大学）

> [!solution]- 解Ⅰ
> 1°（验证积分号下求导条件。）略。
> 
> 2° $g'(\alpha)=\int_0^{+\infty} (e^{-x^2} \cos 2\alpha x)'_\alpha \, dx = -\int_0^{+\infty} 2xe^{-x^2} \sin 2\alpha x \, dx$
> 
> $= e^{-x^2} \sin 2\alpha x \big|_0^{+\infty} -2\alpha\int_0^{+\infty} e^{-x^2} \cos 2\alpha x \, dx = -2\alpha g(\alpha)$，
> 
> 即 $g'(\alpha)=-2\alpha g(\alpha)$。
> 
> 3° 解此微分方程，注意 $g(0)=\sqrt{\pi}/2$，可得 $g(\alpha)= (\sqrt{\pi}/2)e^{-\alpha^2}$。

> [!solution]- 解Ⅱ
> $\int_0^{+\infty} e^{-x^2} \cos 2xy \, dx = \int_0^{+\infty} e^{-x^2} \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!}(2xy)^{2n} \, dx$。而
> 
> $\left|\frac{(-1)^n}{(2n)!}(2xy)^{2n}\right| \leq \frac{(2xy)^{2n}}{(2n)!}$，$\sum_{n=0}^{\infty}\frac{(2xy)^{2n}}{(2n)!} = \cosh 2xy = \frac{e^{2xy}+e^{-2xy}}{2}$（收敛），
> 
> 所以对任意给定的 $A>0$，级数 $\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!}(2xy)^{2n}$ 在 $[0,A]$ 上一致收敛，能逐项积分（见例 7.1.25）（如例 7.1.34，已知有 $\int_0^{+\infty} e^{-x^2} \, dx=\sqrt{\pi}/2$）：
> 
> 上式 $= \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!}(2y)^{2n} \int_0^{+\infty} e^{-x^2}x^{2n} \, dx$
> 
> $= \frac{\sqrt{\pi}}{2} + \sum_{n=1}^{\infty} \frac{(-1)^n}{(2n)!}(2y)^{2n}\cdot\frac{(2n-1)!!}{2^n}\cdot\frac{\sqrt{\pi}}{2}$（见下面附注2）
> 
> $= \frac{\sqrt{\pi}}{2}\left[1+\sum_{n=1}^{\infty}\frac{(-y^2)^n}{n!}\right] = \frac{\sqrt{\pi}}{2}e^{-y^2}$（因为 $\frac{(2n-1)!!}{(2n)!} = \frac{1}{(2n)!!} = \frac{1}{2^n n!}$）。

> [!note] 附注1
> 不难用数学归纳法证明，该积分可在积分号下微分任意多次，从而
> 
> $\int_0^{+\infty} x^{2k}e^{-x^2} \cos 2\alpha x \, dx = (-1)^k \frac{\sqrt{\pi}}{2^{2k+1}} \frac{d^{2k}}{d\alpha^{2k}}(e^{-\alpha^2})$。

> [!note] 附注2
> $\int_0^{+\infty} e^{-x^2}x^{2n} \, dx = \frac{(2n-1)!!}{2^n} \cdot \frac{\sqrt{\pi}}{2}$。
> 
> （可先用分部积分建立递推公式：
> $I_{2n-2}=\int_0^{+\infty} e^{-x^2}x^{2n-2} \, dx = \frac{1}{2n-1}\int_0^{+\infty} e^{-x^2} \, d(x^{2n-1})$
> $= \frac{2}{2n-1}\int_0^{+\infty} e^{-x^2}x^{2n} \, dx = \frac{2}{2n-1}I_{2n}$，
> 
> （再反复递推） $I_{2n}= \frac{2n-1}{2} I_{2n-2}= \frac{2n-1}{2}\cdot\frac{2n-3}{2} I_{2n-4}=\cdots=\frac{(2n-1)!!}{2^n} I_0=\frac{(2n-1)!!}{2^n}\cdot\frac{\sqrt{\pi}}{2}$。）


#### c. 引入收敛因子法

> [!note]
> 有时不能在积分号下求导，但引入"收敛因子"之后，可以进行积分号下求导。

> [!example] ☆例 7.1.38
> 计算 Dirichlet 积分 $\displaystyle \int_0^{+\infty} \frac{\sin \beta x}{x} \, dx$.

> [!note]- 分析
> 用 Dirichlet 判别法，易知该积分收敛；但积分号下求导之后，积分
>
> $$\int_0^{+\infty} \left( \frac{\sin \beta x}{x} \right)'_\beta \, dx = \int_0^{+\infty} \cos \beta x \, dx$$
>
> 发散，不满足积分号下求导的条件。为此，我们粗略的想法是引入收敛因子 $e^{-\alpha x}$，考虑积分
>
> $$g(\alpha) = \int_0^{+\infty} e^{-\alpha x} \, \frac{\sin \beta x}{x} \, dx. \tag{1}$$
>
> 若真能计算出 $g(\alpha)$，则原积分等于 $g(0)$。这里收敛因子 $e^{-\alpha x}$ 的作用在于大大改善了收敛性。不仅积分本身收敛，而且积分号下求导之后，所得积分也内闭一致收敛。于是可使用积分号下求导的方法来计算积分。

> [!solution]- 解
> **1°** $\displaystyle \int_0^{+\infty} \left( e^{-\alpha x} \, \frac{\sin \beta x}{x} \right)'_\alpha \, dx = -\int_0^{+\infty} e^{-\alpha x} \sin \beta x \, dx$，$\tag{2}$
>
> $$|e^{-\alpha x} \sin \beta x| \leq e^{-\alpha x} \leq e^{-\alpha_0 x} \quad (\alpha \geq \alpha_0 > 0),$$
>
> 且 $\int_0^{+\infty} e^{-\alpha_0 x} \, dx$ 收敛，所以积分 (2) 在 $\alpha > 0$ 上内闭一致收敛。其他条件明显，所以
>
> $$g'(\alpha) = \int_0^{+\infty} \left( e^{-\alpha x} \, \frac{\sin \beta x}{x} \right)'_\alpha \, dx = -\int_0^{+\infty} e^{-\alpha x} \sin \beta x \, dx = -\frac{\beta}{\alpha^2 + \beta^2} \quad (\alpha, \beta > 0).$$
>
> 由此
>
> $$g(\alpha) = -\arctan \frac{\alpha}{\beta} + C \quad (\alpha, \beta > 0). \tag{3}$$
>
> 因 $\beta > 0$ 时，
>
> $$|g(\alpha)| = \left| \int_0^{+\infty} e^{-\alpha x} \, \frac{\sin \beta x}{x} \, dx \right| \leq \beta \int_0^{+\infty} e^{-\alpha x} \, dx = \frac{\beta}{\alpha} \to 0 \quad (\alpha \to +\infty).$$
>
> 故在式 (3) 里令 $\alpha \to +\infty$，取极限可得 $C = \dfrac{\pi}{2}$。于是
>
> $$g(\alpha) = \frac{\pi}{2} - \arctan \frac{\alpha}{\beta} \quad (\alpha, \beta > 0). \tag{4}$$
>
> **2°** 我们的目的是求 $g(0)$，若证明了 $g(\alpha)$ 在 $\alpha \geq 0$ 上连续，则 $g(0) = \lim\limits_{\alpha \to 0^+} g(\alpha)$。根据连续守恒定理，只要证明 $g(\alpha)$ 在 $\alpha \geq 0$ 上一致收敛，且被积函数在 $x \geq 0$，$\alpha \geq 0$ 上连续。事实上，因为 $\int_0^{+\infty} \frac{\sin \beta x}{x} \, dx$ 收敛，自然关于 $\alpha \geq 0$ 一致。$e^{-\alpha x}$ 对 $x$ 单调，且 $|e^{-\alpha x}| \leq 1$ 一致有界。由 Abel 判别法，知 $g(\alpha) = \int_0^{+\infty} e^{-\alpha x} \, \frac{\sin \beta x}{x} \, dx$ 在 $\alpha \geq 0$ 一致收敛。若令
>
> $$f(x, \alpha) = \begin{cases} e^{-\alpha x} \, \dfrac{\sin \beta x}{x}, & x \neq 0, \\[6pt] \beta, & x = 0, \end{cases}$$
>
> 则 $g(\alpha) = \int_0^{+\infty} f(x, \alpha) \, dx$，且 $f(x, \alpha)$ 在 $x \geq 0$，$\alpha \geq 0$ 上连续。如此我们证明了 $g(\alpha)$ 在 $\alpha \geq 0$ 上连续。在 (4) 中令 $\alpha \to 0^+$，可得 $\displaystyle \int_0^{+\infty} \frac{\sin \beta x}{x} \, dx = g(0) = g(0^+) = \frac{\pi}{2}$（$\beta > 0$）。因 $\sin x$ 为奇函数，所以 $\displaystyle \int_0^{+\infty} \frac{\sin \beta x}{x} \, dx = \frac{\pi}{2} \operatorname{sgn} \beta$（$-\infty < \beta < +\infty$）。
>
> 其次，也可把 (1) 中的积分看成 $\beta$ 的函数，在积分号下对 $\beta$ 求导进行计算（留作练习）。


#### d. 利用反常积分定义及变量替换

> [!example] ☆例 7.1.39
> 设 $f(x)$ 在 $[0,+\infty)$ 上连续，$\int_A^{+\infty} \frac{f(z)}{z} dz$ （$A>0$）存在，试求积分
>
> （G. Frullani）$\int_0^{+\infty} \frac{f(ax)-f(bx)}{x} dx$ （$a,b>0$）。（大连理工大学）

> [!note]- 分析
> 积分 $\int_0^{+\infty} \frac{f(ax)-f(bx)}{x} dx$ 有两个奇点：$x=+\infty$ 及 $x=0$。因 $\int_A^{+\infty} \frac{f(z)}{z} dz$ 存在，我们只需考虑奇点 $x=0$。换句话说，我们的任务在于求极限
> $$\lim_{A\to 0^+} \int_A^{+\infty} \frac{f(ax)-f(bx)}{x} dx.$$
>
> 为此，我们将积分拆开，分别作变换，将积分变形：
> $$
> \begin{aligned}
> \int_A^{+\infty} \frac{f(ax)-f(bx)}{x} dx &= \int_A^{+\infty} \frac{f(ax)}{x} dx - \int_A^{+\infty} \frac{f(bx)}{x} dx \\
> &= \int_{aA}^{+\infty} \frac{f(z)}{z} dz - \int_{bA}^{+\infty} \frac{f(z)}{z} dz \\
> &= \int_{aA}^{bA} \frac{f(z)}{z} dz = \int_a^b \frac{f(Ax)}{x} dx. \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad (1)
> \end{aligned}
> $$
>
> $\frac{f(Ax)}{x}$ 作为二元函数，在 $A\ge 0$，$x\in[a,b]$（或 $[b,a]$）上连续。由连续守恒定理，
> $$\lim_{A\to 0} \int_a^b \frac{f(Ax)}{x} dx = f(0)\int_a^b \frac{dx}{x} = f(0)\ln\frac{b}{a}.$$
>
> 故原积分 $= \lim_{A\to 0} \int_A^{+\infty} \frac{f(ax)-f(bx)}{x} dx = f(0)\ln\frac{b}{a}$ （$a,b>0$）。
>
> 注：式(1)中的积分亦可利用积分中值定理：
> $$\int_{aA}^{bA} \frac{f(z)}{z} dz = f(\xi)\int_{aA}^{bA} \frac{1}{z}dz = f(\xi)\ln\frac{b}{a} \to f(0)\ln\frac{b}{a} \quad (A\to 0^+)，$$
> 其中 $\xi$ 在 $aA$ 与 $bA$ 之间。

> [!example] 例 7.1.40
> 设 $f(x)$ 在 $[0,+\infty)$ 上连续，且 $\lim_{x\to +\infty} f(x)=k$，试证：
> $$\int_0^{+\infty} \frac{f(ax)-f(bx)}{x} dx = (f(0)-k)\ln\frac{b}{a} \quad (a>0，b>0).$$
> （中国人民大学）

> [!proof]- 证
> 令 $F(x)=f(x)-k$，取 $0<A<B$，$c>0$，则
> $$
> \begin{aligned}
> \int_A^B \frac{f(ax)-f(bx)}{x} dx &= \int_A^B \frac{F(ax)-F(bx)}{x} dx = \int_A^B \frac{F(ax)}{x} dx - \int_A^B \frac{F(bx)}{x} dx \\
> &= \int_{aA}^{aB} \frac{F(u)}{u} du - \int_{bA}^{bB} \frac{F(v)}{v} dv \\
> &= \int_{aA}^c \frac{F(u)}{u} du + \int_c^{aB} \frac{F(u)}{u} du - \left(\int_{bA}^c \frac{F(v)}{v} dv + \int_c^{bB} \frac{F(v)}{v} dv\right)
> \end{aligned}
> $$
> （将积分变量统一记为 $t$，合并）
> $$
> \begin{aligned}
> &= \left(\int_{aA}^c \frac{F(t)}{t} dt - \int_{bA}^c \frac{F(t)}{t} dt\right) - \left(\int_c^{aB} \frac{F(t)}{t} dt - \int_c^{bB} \frac{F(t)}{t} dt\right) \\
> &= \int_{aA}^{bA} \frac{F(t)}{t} dt - \int_{aB}^{bB} \frac{F(t)}{t} dt = \int_a^b \frac{F(At)-F(Bt)}{t} dt.
> \end{aligned}
> $$
>
> 因为 $t\in[a,b]$ 时 $\frac{F(At)-F(Bt)}{t} = \frac{f(At)-f(Bt)}{t}$ 对 $A,B,t$ 连续，满足积分号下求极限的要求，因此若将原式左端的积分记作 $I$，则
> $$
> \begin{aligned}
> I &= \lim_{\substack{A\to 0^+ \\ B\to +\infty}} \int_a^b \frac{F(At)-F(Bt)}{t} dt \\
> &= \int_a^b \lim_{\substack{A\to 0^+ \\ B\to +\infty}} \frac{F(At)-F(Bt)}{t} dt \\
> &= (f(0^+)-f(+\infty))\ln\frac{b}{a} = (f(0)-k)\ln\frac{b}{a}.
> \end{aligned}
> $$

**级数解法**

> [!example] ☆例 7.1.41
> 计算积分 $I=\int_0^{+\infty} \frac{e^{-ax^2}-e^{-bx^2}}{x^2} dx$ （$a>0$，$b>0$）。（西北师范大学，中山大学）

本例有多种解法，如

> [!solution]- 解Ⅰ
> 利用积分号下求导（留作练习）。

> [!solution]- 解Ⅱ
> 利用积分号下求积分（留作练习）。

> [!solution]- 解Ⅲ
> （利用分部积分法。）
> $$
> \begin{aligned}
> I &= -\int_0^{+\infty} (e^{-ax^2}-e^{-bx^2}) d\left(\frac{1}{x}\right) \\
> &= \left.\frac{e^{-bx^2}-e^{-ax^2}}{x}\right|_0^{+\infty} + 2\int_0^{+\infty} (be^{-bx^2}-ae^{-ax^2})dx \\
> &= 2\sqrt{b}\int_0^{+\infty} e^{-(\sqrt{b} x)^2} d(\sqrt{b} x) - 2\sqrt{a}\int_0^{+\infty} e^{-(\sqrt{a} x)^2} d(\sqrt{a} x) = \sqrt{\pi}(\sqrt{b}-\sqrt{a}).
> \end{aligned}
> $$

> [!solution]- 解Ⅳ
> （化为二重积分。）设 $b>a>0$，则
> $$I = \int_0^{+\infty} \frac{dx}{x^2} \int_{ax^2}^{bx^2} e^{-y} dy = \iint_D \frac{e^{-y}}{x^2} dxdy$$
> $$D = \{(x,y) \mid 0\le x<+\infty，ax^2\le y\le bx^2\} = \{(x,y) \mid 0\le y<+\infty，\sqrt{y/b}\le x\le \sqrt{y/a}\}。$$
>
> 如图7.1.1，不难证明 $(0,0)$ 不是奇点。该反常二重积分收敛。事实上，
> $$
> \begin{aligned}
> I &= \int_0^{+\infty} dy \int_{\sqrt{y/b}}^{\sqrt{y/a}} \frac{e^{-y}}{x^2} dx = \int_0^{+\infty} e^{-y}\frac{\sqrt{b}-\sqrt{a}}{\sqrt{y}} dy \\
> &\xrightarrow{\text{令 } u=\sqrt{y}} 2(\sqrt{b}-\sqrt{a})\int_0^{+\infty} e^{-u^2}du = (\sqrt{b}-\sqrt{a})\sqrt{\pi}。
> \end{aligned}
> $$
>
> 该结果虽然是在 $b>a>0$ 的条件下求出的，但若 $a=b$，显然结果仍成立。至于 $a>b>0$ 的情况，只要从积分号下提取因子 $(-1)$，可知上述结果仍被保持。

本例的主要目的在于介绍级数解法。

> [!solution]- 解 V（级数解法）
> 不妨设 $b>a>0$。
> $$
> \begin{aligned}
> \frac{e^{-ax^2}-e^{-bx^2}}{x^2} &= \frac{e^{-bx^2}(e^{(b-a)x^2}-1)}{x^2} \\
> &= \sum_{n=1}^{\infty} \frac{1}{n!} e^{-bx^2}(b-a)^n x^{2n-2} \\
> &\xrightarrow{\text{令 } n=k+1} \sum_{k=0}^{\infty} \frac{1}{(k+1)!} e^{-bx^2}(b-a)^{k+1}x^{2k}。
> \end{aligned}
> $$
> 故
> $$I = \int_0^{+\infty} \frac{e^{-ax^2}-e^{-bx^2}}{x^2} dx = \sum_{k=0}^{\infty} \frac{(b-a)^{k+1}}{(k+1)!} \int_0^{+\infty} e^{-bx^2}x^{2k}dx. \quad (1)$$
>
> 注意到 $k=0$ 时，
> $$\int_0^{+\infty} e^{-bx^2}dx = \frac{1}{\sqrt{b}} \cdot \frac{\sqrt{\pi}}{2}. \quad (2)$$
> 式(2)两端对 $b$ 求导得
> $$\int_0^{+\infty} e^{-bx^2}x^2dx = \frac{\sqrt{\pi}}{2} \cdot \frac{1}{2} \cdot \frac{1}{b^{3/2}}。$$
> 这是式(1)中 $k=1$ 项的积分。继续对 $b$ 求导可得 $k=2$ 项的积分。用数学归纳法可证，式(1)中第 $k$ 项的积分
> $$\int_0^{+\infty} e^{-bx^2}x^{2k}dx = \frac{\sqrt{\pi}}{2} \cdot \frac{1}{2} \cdot \frac{3}{2} \cdots \frac{2k-1}{2} \cdot \frac{1}{b^{(2k+1)/2}}。$$
> 因此式(1)变为
> $$
> \begin{aligned}
> I &= -b^{-1/2}\sqrt{\pi} \sum_{k=0}^{\infty} \left[ \frac{\frac{1}{2}(\frac{1}{2}-1)(\frac{1}{2}-2)\cdots(\frac{1}{2}-k)}{(k+1)!} \right] \left(\frac{a-b}{b}\right)^{k+1} \\
> &= -b^{-1/2}\sqrt{\pi} \left[ \left(1 + \frac{a-b}{b}\right)^{1/2} - 1 \right] = \sqrt{\pi}(\sqrt{b}-\sqrt{a})。
> \end{aligned}
> $$
> 式(1)逐项取积分是合理的。这是因为 $\forall A>0$，$[0,A]$ 上的积分可逐项取。而逐项积分之后所得（关于 $A$ 的）级数，以式(1)右端的收敛级数为优级数，所以它关于 $A\in(0,+\infty)$ 一致收敛，故可令 $A\to +\infty$，逐项取极限得式(1)（参看下例）。

> [!example] 例 7.1.42
> 若 $f(x)=\sum_{n=0}^{\infty} a_n x^n$（$a_n>0$，$n=0,1,\ldots$）的收敛半径为 $+\infty$，且 $\sum_{n=0}^{\infty} a_n n!$ 收敛，则 $\int_0^{+\infty} e^{-x}f(x)dx$ 也收敛，且
> $$\int_0^{+\infty} e^{-x}f(x)dx = \sum_{n=0}^{\infty} a_n n!. \quad (1)$$
> （东北师范大学）

> [!solution]- 解
> 因为 $f(x)=\sum_{n=0}^{\infty} a_n x^n$，所以
> $$\int_0^{+\infty} e^{-x}f(x)dx = \lim_{A\to +\infty} \int_0^A e^{-x} \sum_{n=0}^{\infty} a_n x^n dx. \quad (2)$$
> 因级数收敛半径为 $+\infty$，且因 $e^{-x}$ 有界（$e^{-x}\le 1$），故在 $[0,A]$ 上可逐项积分，继而
> $$\int_0^{+\infty} e^{-x}f(x)dx = \lim_{A\to +\infty} \sum_{n=0}^{\infty} a_n \int_0^A x^n e^{-x}dx. \quad (3)$$
> 因 $\left|a_n \int_0^A x^n e^{-x}dx\right| \le a_n \int_0^{+\infty} x^n e^{-x}dx = a_n n!$，且已知 $\sum_{n=0}^{\infty} a_n n!$ 收敛，因此(3)中级数对 $A\in(0,+\infty)$ 一致收敛，式(3)可逐项取极限，于是
> $$\int_0^{+\infty} e^{-x}f(x)dx = \sum_{n=0}^{\infty} a_n \lim_{A\to +\infty} \int_0^A x^n e^{-x}dx = \sum_{n=0}^{\infty} a_n n!。$$

> [!example] ☆例 7.1.43
> 求 $f(x)=\int_0^{\pi/2} \ln(1-x^2 \cos^2\theta)d\theta$（$|x|<1$）。（华中师范大学）

> [!solution]- 解 I
> （用积分号下求导。）$f'(x)=\frac{\pi}{x}\left(1-\frac{1}{\sqrt{1-x^2}}\right)$，$f(0)=0$，所以
> $$f(x)=\pi \ln\frac{1+\sqrt{1-x^2}}{2} \quad (|x|<1)。$$

> [!solution]- 解 II（级数解法）
> $$
> \begin{aligned}
> f(x) &= \int_0^{\pi/2} \ln(1-x^2 \cos^2\theta)d\theta \\
> &= -\int_0^{\pi/2} \sum_{n=1}^{\infty} \frac{x^{2n}}{n} \cos^{2n}\theta d\theta \\
> &= -\sum_{n=1}^{\infty} \frac{x^{2n}}{n} \int_0^{\pi/2} \cos^{2n}\theta d\theta \\
> &= -\sum_{n=1}^{\infty} \frac{x^{2n}}{n} \cdot \frac{(2n-1)!!}{(2n)!!} \cdot \frac{\pi}{2} \\
> &= -\frac{\pi}{2} \sum_{n=1}^{\infty} \frac{(2n-1)!!}{n\cdot(2n)!!} x^{2n}。
> \end{aligned}
> $$
> 注：比较两结果，可得 $\ln(1+\sqrt{1-x^2})$ 的 Maclaurin 展开式以及在 $x=0$ 处各阶导数的值。

**练习** 设实数 $\lambda$，$|\lambda|<1$，求 $f(\lambda)=\int_0^{\pi} \ln(1+\lambda \cos x)dx$。（浙江大学）

> [!hint]- 提示
> $f(\lambda)=\int_0^{\pi} \ln(1+\lambda \cos x)dx = \int_0^{\pi/2} \ln(1+\lambda \cos x)dx + \int_{\pi/2}^{\pi} \ln(1+\lambda \cos x)dx$。
>
> 在右端第二个积分中令 $x=\pi-t$，变换后积分变量仍改用 $x$，再与第一个积分合并，
> $$上式 = \int_0^{\pi/2} \ln(1-\lambda^2 \cos^2 x)dx = \pi \ln\frac{1+\sqrt{1-\lambda^2}}{2} \quad \text{（见例7.1.43）。}$$


#### e. 利用别的积分

我们知道，利用分析和代数的各种手段，将要求的积分化为已知的积分或易求积分，这是计算积分的根本方法。下面看

> [!example] ☆例7.1.44
> 试利用积分 $\varphi(x)=\int_0^1 \frac{e^{-x^2(1+u^2)}}{1+u^2} du$ 计算积分 $I=\int_0^{+\infty} e^{-x^2}dx$。（河南师范大学）

> [!solution]-
> 令 $f(x)=\left(\int_0^x e^{-t^2}dt\right)^2$，作变换 $t=xu$，易验证 $\varphi'(x)=-f'(x)$（$x\ge 0$）。
> 
> 从而
> $$
> f(x)+\varphi(x)=C
> $$
> 
> 取 $x=0$，知 $C=\frac{\pi}{4}$。于是，$f(x)=\frac{\pi}{4}-\varphi(x)$，
> $$
> I^2 = \lim_{x\to+\infty} f(x) = \frac{\pi}{4} - \lim_{x\to+\infty} \varphi(x) \quad (1)
> $$
> 
> 注意到 $0\le \frac{e^{-x^2(1+u^2)}}{1+u^2} \le e^{-x^2}\to 0$（$x\to+\infty$），所以当 $x\to+\infty$ 时，$\frac{e^{-x^2(1+u^2)}}{1+u^2}\to 0$（关于 $u\in[0,1]$），$\varphi(x)$可以在积分号下求极限：
> $$
> \lim_{x\to+\infty} \varphi(x) = \lim_{x\to+\infty} \int_0^1 \frac{e^{-x^2(1+u^2)}}{1+u^2}du = \int_0^1 \lim_{x\to+\infty} \frac{e^{-x^2(1+u^2)}}{1+u^2}du = 0
> $$
> 
> 代入式(1)知 $I=\int_0^{+\infty} e^{-x^2}dx = \frac{\sqrt{\pi}}{2}$。

学了二重积分的读者，请解下题。

> [!example] 例7.1.45
> 试求 $\lim_{u\to+\infty} \frac{1}{2\pi} \int_0^u dz \iint_D \frac{\sin(z\sqrt{x^2+y^2})}{\sqrt{x^2+y^2}} dxdy$，其中 $D: 1\le x^2+y^2\le 4$。（南昌大学）

> [!hint]-
> $\frac{1}{2\pi} \iint_D \frac{\sin(z\sqrt{x^2+y^2})}{\sqrt{x^2+y^2}} dxdy = \frac{\cos z - \cos 2z}{z}$，利用例7.1.39。


### 六、综合性例题

> [!example] ☆例7.1.46
> 函数 $f(x)$ 在整个数轴上连续并且 $f(x)>0$，已知对所有的 $t$，
> $$\int_{-\infty}^{+\infty} e^{-|t-x|} f(x) \,dx \le 1. \tag{1}$$
> 证明：$\forall a,b\ (a<b)$，
> $$\int_a^b f(x) \,dx \le \frac{b-a}{2} + 1. \tag{2}$$
> （国外赛题）

> [!solution]- 解
> （目标：从(1)推导出(2)。）式(1)等价于：$\forall a,b\ (a<b)$，有
> $$\int_a^b e^{-|t-x|} f(x) \,dx \le 1. \tag{3}$$
> 因此
> $$\int_a^b dt \int_a^b e^{-|t-x|} f(x) \,dx \le b-a. \tag{4}$$
> 但
> $$\int_a^b dt \int_a^b e^{-|t-x|} f(x) \,dx = \int_a^b f(x) \left( \int_a^b e^{-|t-x|} \,dt \right) dx,$$
> 其中
> $$\int_a^b e^{-|t-x|} \,dt = \int_a^x e^{t-x} \,dt + \int_x^b e^{x-t} \,dt = 2 - e^{a-x} - e^{x-b}.$$
> 故式(4)可改写成
> $$\int_a^b f(x) (2 - e^{a-x} - e^{x-b}) \,dx \le b-a, \tag{5}$$
> 即
> $$\int_a^b f(x) \,dx \le \frac{b-a}{2} + \frac{1}{2} \left[ \int_a^b e^{a-x} f(x) \,dx + \int_a^b e^{x-b} f(x) \,dx \right]. \tag{6}$$
> 然而
> $$\int_a^b e^{a-x} f(x) \,dx = \int_a^b e^{-|a-x|} f(x) \,dx \le \int_{-\infty}^{+\infty} e^{-|a-x|} f(x) \,dx \le 1.$$
> 同样，$\displaystyle \int_a^b e^{x-b} f(x) \,dx \le 1$。所以由式(6)可得式(2)。证毕。

> [!example] ☆例7.1.47
> 证明 Wallis 公式：$\displaystyle \lim_{n\to\infty} \sqrt{2n+1} \, \frac{(2n-1)!!}{(2n)!!} = \sqrt{\frac{2}{\pi}}$.

> [!proof]- 证 I
> （利用含参变量积分。）
> $$\sqrt{2n+1} \, \frac{(2n-1)!!}{(2n)!!} = \sqrt{2n+1} \cdot \frac{2}{\pi} \int_0^{\pi/2} \sin^{2n} x \,dx. \tag{1}$$
> 在积分中令 $x = \operatorname{arccot} \dfrac{t}{\sqrt{n+1}}$，则 $t = \sqrt{n+1} \cot x$，且当 $x=0$ 时 $t=-\infty$，当 $x=\pi/2$ 时 $t=0$，$\displaystyle dx = -\frac{1}{1+(t/\sqrt{n+1})^2} \cdot \frac{dt}{\sqrt{n+1}}$。于是，式(1)变为
> $$\sqrt{2n+1} \, \frac{(2n-1)!!}{(2n)!!} = \frac{\sqrt{2n+1}}{\sqrt{n+1}} \cdot \frac{2}{\pi} \int_0^{+\infty} \left( 1 + \frac{t^2}{n+1} \right)^{-(n+1)} dt.$$
> 故
> $$\lim_{n\to\infty} \sqrt{2n+1} \, \frac{(2n-1)!!}{(2n)!!} = \lim_{n\to\infty} \frac{2\sqrt{2}}{\pi} \int_0^{+\infty} \left( 1 + \frac{t^2}{n+1} \right)^{-(n+1)} dt.$$
> 因 $\displaystyle \int_0^{+\infty} \left( 1 + \frac{t^2}{n} \right)^{-n} dt$ 对 $n\in\mathbb{N}$ 一致收敛，$\left( 1 + \frac{t^2}{n} \right)^{-n} \to e^{-t^2}$ 关于 $t\in[0,+\infty)$（当 $n\to\infty$ 时），故可在积分号下取极限。所以
> $$\lim_{n\to\infty} \sqrt{2n+1} \, \frac{(2n-1)!!}{(2n)!!} = \frac{2\sqrt{2}}{\pi} \int_0^{+\infty} e^{-t^2} dt = \sqrt{\frac{2}{\pi}}.$$

> [!proof]- 证 II
> （利用两边夹法则。）因
> $$\int_0^{\pi/2} \sin^{2n+1} x \,dx < \int_0^{\pi/2} \sin^{2n} x \,dx < \int_0^{\pi/2} \sin^{2n-1} x \,dx,$$
> 由 Wallis 积分公式，此即
> $$\frac{(2n)!!}{(2n+1)!!} < \frac{(2n-1)!!}{(2n)!!} \cdot \frac{\pi}{2} < \frac{(2n-2)!!}{(2n-1)!!}.$$
> 由此
> $$\left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 \cdot \frac{1}{2n+1} < \frac{\pi}{2} < \left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 \cdot \frac{1}{2n}. \tag{1}$$
> 但
> $$\begin{align*}
> &\lim_{n\to\infty} \left\{ \left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 \cdot \frac{1}{2n} - \left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 \cdot \frac{1}{2n+1} \right\} \\
> = &\lim_{n\to\infty} \left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 \cdot \frac{1}{2n(2n+1)} \le \lim_{n\to\infty} \frac{1}{2n} \cdot \frac{\pi}{2} = 0.
> \end{align*}$$
> 由此知 $\displaystyle \lim_{n\to\infty} \frac{1}{2n+1} \left[ \frac{(2n)!!}{(2n-1)!!} \right]^2 = \frac{\pi}{2}$。从而原式获证。

> [!example] ☆例7.1.48
> 试利用极限 $\displaystyle \lim_{n\to\infty} \left( 1 + \frac{x^2}{n} \right)^{-n} = e^{-x^2}$ 计算积分 $\displaystyle I = \int_0^{+\infty} e^{-x^2} dx$.

> [!solution]- 解
> $$\begin{align*}
> I &= \int_0^{+\infty} e^{-x^2} dx = \int_0^{+\infty} \lim_{n\to\infty} \left( 1 + \frac{x^2}{n} \right)^{-n} dx \\
>   &= \lim_{n\to\infty} \int_0^{+\infty} \left( 1 + \frac{x^2}{n} \right)^{-n} dx \quad (\text{令 } x = \sqrt{n} \cot t) \\
>   &= \lim_{n\to\infty} \int_0^{\pi/2} \sqrt{n} \sin^{2n-2} t \,dt \\
>   &= \lim_{n\to\infty} \sqrt{n} \int_0^{\pi/2} \sin^{2n-2} t \,dt \\
>   &= \lim_{n\to\infty} \sqrt{n} \cdot \frac{(2n-3)!!}{(2n-2)!!} \cdot \frac{\pi}{2} \\
>   &= \lim_{n\to\infty} \frac{\sqrt{n}}{\sqrt{2n-1}} \cdot \frac{1}{\left\{ (2n-1) \left[ \dfrac{(2n-2)!!}{(2n-3)!!} \right] \right\}^{1/2}} \cdot \frac{\pi}{2} = \frac{\sqrt{\pi}}{2}.
> \end{align*}$$
>
> 等式(1)积分与极限交换次序是合理的。因为：利用 Dini 定理知，连续函数的单调序列 $\{ (1 + x^2/n)^{-n} \}$，$n\to\infty$ 时，$(1 + x^2/n)^{-n} \to e^{-x^2}$，关于 $x\in[A,B]$，其中 $[A,B]\subset[0,+\infty)$ 为 $[0,+\infty)$ 的任一内闭区间。又由 $M$ 判别法易知，积分 $\displaystyle \int_0^{+\infty} \left( 1 + \frac{x^2}{n} \right)^{-n} dx$ 对 $n$ 一致收敛。


### 七、Euler 积分

> [!note] 导读
> Euler 积分在数学分析课程中不算主干内容，不是考研重点，但偶尔也能见到，数量相对较少。
> 
> 直到目前为止，我们经常使用的只是些初等函数。这给我们的研究和应用带来了很大的局限. 利用含参变量积分, 是引进非初等函数的一个重要途径. 所谓 Euler 积分, 正是如此. Euler 积分在理论和实践上的地位, 仅次于初等函数, 应用十分广泛. 本段的目的在于熟悉 Euler 积分的基本性质, 并讨论如何利用 Euler 积分来表达其他积分.


#### a. Euler 积分及其基本变形

> [!note]
> 要顺利求解有关 Euler 积分的各种问题, 必须熟练掌握 Euler 积分的定义、它们的基本变形以及基本性质.

## Γ 函数（第二型 Euler 积分）

**定义**  $\Gamma(\alpha) \equiv \int_0^{+\infty} x^{\alpha-1}e^{-x}dx$   $(\alpha>0)$.

**基本变形:**
$$
\Gamma(\alpha) = 2\int_0^{+\infty} t^{2\alpha-1}e^{-t^2}dt \quad (\text{令 } x=t^2) \quad (\alpha>0),
$$
$$
\Gamma(\alpha) = \int_0^1 \left(\ln \frac{1}{t}\right)^{\alpha-1}dt \quad (\text{令 } x=\ln \frac{1}{t}) \quad (\alpha>0).
$$

**性质**

1) $\Gamma(\alpha)=\int_0^{+\infty} x^{\alpha-1}e^{-x}dx$ 在 $(0,+\infty)$ 内闭一致收敛, $\Gamma(\alpha)$在 $(0,+\infty)$ 内连续, 有连续的各阶导数, 求导可在积分号下进行:
$$
\Gamma^{(n)}(\alpha)=\int_0^{+\infty} x^{\alpha-1}e^{-x}(\ln x)^n dx.
$$

2)（递推公式） $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$.
（因为 $\Gamma(\alpha+1)=\int_0^{+\infty} x^\alpha e^{-x}dx$  分部积分  $= \alpha\int_0^{+\infty} x^{\alpha-1}e^{-x}dx = \alpha\Gamma(\alpha)$.）
因为 $\Gamma(1)=1$, 利用此递推公式立即可得 $\Gamma(n+1)=n!$.
另外, 根据上面基本公式:
$\Gamma(\alpha)=\int_0^{+\infty} x^{\alpha-1}e^{-x}dx$  令 $x=t^2$  $= 2\int_0^{+\infty} t^{2\alpha-1}e^{-t^2}dt$, 可知
$$
\Gamma(1/2)=2\int_0^{+\infty} e^{-x^2}dx = \sqrt{\pi}.
$$
再从 $\Gamma(1/2)=\sqrt{\pi}$ 出发, 利用公式 $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$进行递推, 可得
$$
\Gamma(n+1/2)=\frac{(2n-1)!!}{2^n}\sqrt{\pi}.
$$

$\Gamma$ 函数只在正半轴有定义. 利用递推公式可定义 $\alpha\leq 0$ 时的 $\Gamma(\alpha)$.

3)（余元公式）  $\Gamma(\alpha)\Gamma(1-\alpha)= \frac{\pi}{\sin \alpha\pi}$   $(0<\alpha<1)$.

4)（倍元公式）（又称 Legendre 公式）
$$
\Gamma(2\alpha)= \frac{2^{2\alpha-1}}{\sqrt{\pi}} \cdot \Gamma(\alpha)\Gamma(\alpha+1/2) \quad (\alpha>0).
$$

## B 函数（第一型 Euler 积分）

**定义**  $B(p,q) \equiv \int_0^1 x^{p-1}(1-x)^{q-1}dx$   $(p,q>0)$.

**基本变形:**
$$
B(p,q)=2\int_0^{\pi/2} \cos^{2p-1}\theta \sin^{2q-1}\theta d\theta \quad (\text{令 } x=\cos^2\theta),
$$
$$
B(p,q)=\int_0^{+\infty} \frac{u^{p-1}}{(1+u)^{p+q}}du \quad (\text{令 } x=\frac{u}{1+u}).
$$
进而将此积分拆成 $[0,1], [1,+\infty)$ 两段积分, 后者作变换 $u=1/t$, 仍把 $t$ 写成 $u$, 则有
$$
B(p,q)=\int_0^1 \frac{u^{p-1}+u^{q-1}}{(1+u)^{p+q}}du.
$$

**性质**

1) $\forall[p_1,p_2;q_1,q_2]\subset(0,+\infty;0,+\infty)$, 该积分在 $[p_1,p_2;q_1,q_2]$ 上一致收敛.
$B(p,q)$在 $(0,+\infty;0,+\infty)$ 上连续, 有连续的各阶偏导数.

2)（对称性） $B(p,q)=B(q,p)$.

3)（递推公式） $B(p,q)= \frac{q-1}{p+q-1} B(p,q-1)= \frac{p-1}{p+q-1} B(p-1,q)$.
特别, 对正整数 $m,n$,有  $B(m,n)=\frac{(n-1)!(m-1)!}{(m+n-1)!}$.

4)（余元公式） $B(p,1-p)= \frac{\pi}{\sin p\pi}$   $(0<p<1)$.
特别, $B(1/2,1/2)=\pi$.

5)（Dirichlet 公式）  $B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$.


#### b. Euler 积分的相互转换

Euler 积分的许多性质, 实际上是 Euler 积分的相互关系, 利用这些关系可以进行各种转换.

> [!example] 例 7.1.49
> 证明: $B\left(\frac{1}{3},\frac{1}{2}\right)= \frac{\sqrt{3}}{2\pi\cdot\sqrt[3]{2}} \left[\Gamma\left(\frac{1}{3}\right)\right]^3$

> [!proof]- 证明
> 余元公式,
> $$\Gamma\left(\frac{2}{3}\right)\Gamma\left(\frac{1}{3}\right)=\Gamma\left(1-\frac{1}{3}\right)\Gamma\left(\frac{1}{3}\right)=\frac{\pi}{\sin\left(\frac{\pi}{3}\right)}=\frac{2\pi}{\sqrt{3}}$$
> 故欲证等式成立.


#### c. 利用 Euler 积分表示其他积分

用 Euler 积分表示其他积分的方法, 说到底, 主要靠变量替换以及各种变形.

> [!example] 例 7.1.50
> 求积分 $\int_0^1 x^{p-1}(1-x^m)^{q-1}dx$ $(p,q,m>0)$, 并证明:
> $$\int_0^1 \frac{dx}{\sqrt{1-x^4}} \cdot \int_0^1 \frac{x^2dx}{\sqrt{1-x^4}} = \frac{\pi}{4}.$$

> [!solution]-
> 令 $x^m=u$, 则
> $$\int_0^1 x^{p-1}(1-x^m)^{q-1}dx = \frac{1}{m}\int_0^1 u^{\frac{p}{m}-1}(1-u)^{q-1}du = \frac{1}{m}B\left(\frac{p}{m},q\right)$$
> $$= \frac{1}{m} \frac{\Gamma\left(\frac{p}{m}\right)\Gamma(q)}{\Gamma\left(\frac{p}{m}+q\right)}.$$
>
> 利用此结果, 注意 $\Gamma\left(\frac{5}{4}\right)=\frac{1}{4}\Gamma\left(\frac{1}{4}\right)$, $\Gamma\left(\frac{1}{2}\right)=\sqrt{\pi}$, 知
> $$\int_0^1 \frac{dx}{\sqrt{1-x^4}} \cdot \int_0^1 \frac{x^2dx}{\sqrt{1-x^4}}$$
> $$= \frac{1}{4^2} \cdot \frac{\Gamma\left(\frac{1}{4}\right)\Gamma\left(\frac{1}{2}\right)\Gamma\left(\frac{3}{4}\right)\Gamma\left(\frac{1}{2}\right)}{\Gamma\left(\frac{1}{4}+\frac{1}{2}\right)\Gamma\left(\frac{3}{4}+\frac{1}{2}\right)}$$
> $$= \frac{1}{4^2} \cdot \frac{\Gamma\left(\frac{1}{4}\right)\Gamma\left(\frac{3}{4}\right)\left[\Gamma\left(\frac{1}{2}\right)\right]^2}{\frac{1}{4}\Gamma\left(\frac{3}{4}\right)\Gamma\left(\frac{1}{4}\right)} = \frac{\pi}{4}.$$

> [!example] 例 7.1.51
> 求 $\int_0^\pi \frac{dx}{\sqrt{3-\cos x}}$.

> [!solution]-
> $$\int_0^\pi \frac{dx}{\sqrt{3-\cos x}}$$
> $$= \int_0^\pi \frac{dx}{\sqrt{2+2\frac{1-\cos x}{2}}}$$
> $$= \frac{1}{\sqrt{2}} \int_0^\pi \frac{dx}{\sqrt{1+\sin^2\frac{x}{2}}}.$$
> 令 $u=\sin^2\frac{x}{2}$, 则
> $$= \frac{1}{\sqrt{2}} \int_0^1 (1+u)^{-\frac{1}{2}}(1-u)^{-\frac{1}{2}}u^{-\frac{1}{2}}du$$
> $$= \frac{1}{2\sqrt{2}} \int_0^1 t^{\frac{1}{4}-1}(1-t)^{\frac{1}{2}-1}dt$$
> $$= \frac{1}{2\sqrt{2}} B\left(\frac{1}{4},\frac{1}{2}\right).$$

> [!example] 例 7.1.52
> 求 $I=\int_0^\pi \left(\frac{\sin \phi}{1+\cos \phi}\right)^{\alpha-1} \frac{d\phi}{1+k\cos \phi}$ $(0<k<1)$.

> [!solution]-
> 由半角公式, $\tan\frac{\phi}{2}=\frac{\sin\phi}{1+\cos\phi}$, 令 $t=\tan\frac{\phi}{2}$, 则
> $$\left(\frac{\sin\phi}{1+\cos\phi}\right)^{\alpha-1}=t^{\alpha-1}, \quad \cos\phi=\frac{1-t^2}{1+t^2}, \quad d\phi=\frac{2dt}{1+t^2}.$$
> 故
> $$I=\int_0^{+\infty} t^{\alpha-1} \cdot \frac{1}{1+k\frac{1-t^2}{1+t^2}} \cdot \frac{2}{1+t^2} dt$$
> $$= 2\int_0^{+\infty} \frac{t^{\alpha-1}}{(1+k)+(1-k)t^2} dt$$
> $$= \frac{2}{1+k} \left(\sqrt{\frac{1+k}{1-k}}\right)^\alpha \int_0^{+\infty} \frac{\left(\sqrt{\frac{1-k}{1+k}} t\right)^{\alpha-1}}{1+\left(\sqrt{\frac{1-k}{1+k}}t\right)^2} d\left(\sqrt{\frac{1-k}{1+k}}t\right). \tag{1}$$
>
> 令 $\sqrt{\frac{1-k}{1+k}} t = \tan\frac{\theta}{2}$, 则
> $$I= \frac{1}{1+k} \left(\sqrt{\frac{1+k}{1-k}}\right)^\alpha \int_0^\pi \tan^{\alpha-1}\frac{\theta}{2}d\theta. \tag{2}$$
>
> 令 $u=\frac{\theta}{2}$, 则
> $$\int_0^\pi \tan^{\alpha-1}\frac{\theta}{2}d\theta = 2\int_0^{\frac{\pi}{2}} \tan^{\alpha-1}u du$$
> $$= 2\int_0^{\frac{\pi}{2}} \sin^{2\cdot\frac{\alpha}{2}-1}u \cos^{2\cdot\left(1-\frac{\alpha}{2}\right)-1}u du$$
> $$= B\left(\frac{\alpha}{2},1-\frac{\alpha}{2}\right)= \frac{\pi}{\sin\frac{\alpha\pi}{2}}. \tag{3}$$
>
> 因此
> $$I= \frac{1}{1+k} \left(\sqrt{\frac{1+k}{1-k}}\right)^\alpha \cdot \frac{\pi}{\sin\frac{\alpha\pi}{2}}.$$

> [!example] * 例 7.1.53
> 设 $t>1$, 证明:
> $$\int_1^{+\infty} \frac{(\ln x)^{t-1}}{x(x-1)} dx = \Gamma(t)\zeta(t). \tag{1}$$
> 其中 $\Gamma(t)$为 $\Gamma$ 函数, $\zeta(t)=\sum_{n=1}^{+\infty} \frac{1}{n^t}$（为 Riemann $\zeta$ 函数）.（中国科学技术大学）

> [!proof]-
> **1°** 当 $x\to 1^+$ 时,
> $$\frac{(\ln x)^{t-1}}{x(x-1)} = \frac{\{\ln[1+(x-1)]\}^{t-1}}{x(x-1)} \sim \frac{1}{(x-1)^{2-t}} \quad (t>1).$$
> 又当 $x\to +\infty$ 时, $x^{\frac{3}{2}}\cdot\frac{(\ln x)^{t-1}}{x(x-1)}\to 0$. 因此, 式(1)左端积分收敛.
>
> **2°** 式(1)右端为
> $$\Gamma(t)\zeta(t)=\Gamma(t)\sum_{n=1}^{+\infty} \frac{1}{n^t} = \sum_{n=1}^{+\infty} \frac{1}{n^t} \int_0^{+\infty} e^{-u}u^{t-1}du$$
> 令 $u=ny$
> $$= \sum_{n=1}^{+\infty} \int_0^{+\infty} e^{-ny}y^{t-1}dy. \tag{2}$$
>
> 为了证明等式(1), 应将左端的积分也写成级数形式.
> $$I=\int_1^{+\infty} \frac{(\ln x)^{t-1}}{x(x-1)}dx = \int_1^{+\infty} \frac{(\ln x)^{t-1}}{e^{\ln x}-1}d(\ln x)$$
> 令 $y=\ln x$,
> $$= \int_0^{+\infty} \frac{y^{t-1}}{e^y-1}dy = \int_0^{+\infty} \sum_{n=1}^{+\infty} e^{-ny}y^{t-1}dy. \tag{3}$$
>
> **3°** 比较式(2)和(3), 可见问题归结为是否可以逐项积分. 事实上, 因为 $\sum_{n=1}^{+\infty} e^{-ny}y^{t-1}$ 关于 $y\in[\varepsilon,A]$ 一致收敛 $(A>\varepsilon>0)$, 故 $\forall t>1$,
> $$\int_0^{+\infty} \sum_{n=1}^{+\infty} e^{-ny}y^{t-1}dy$$
> $$= \lim_{\substack{A\to +\infty \\ \varepsilon\to 0}} \int_\varepsilon^A \sum_{n=1}^{+\infty} e^{-ny}y^{t-1}dy$$
> $$= \lim_{\substack{A\to +\infty \\ \varepsilon\to 0}} \sum_{n=1}^{+\infty} \int_\varepsilon^A e^{-ny}y^{t-1}dy. \tag{4}$$
>
> 又因
> $$\left|\int_\varepsilon^A e^{-ny}y^{t-1}dy\right| \leq \int_0^{+\infty} e^{-ny}y^{t-1}dy \xlongequal{令\ ny=u} \frac{1}{n^t} \int_0^{+\infty} e^{-u}u^{t-1}du = \frac{1}{n^t} \Gamma(t) \quad (\forall A>0),$$
> 而 $\sum_{n=1}^{+\infty} \frac{1}{n^t} \Gamma(t)=\Gamma(t)\sum_{n=1}^{+\infty} \frac{1}{n^t}$ 收敛, 所以级数 $\sum_{n=1}^{+\infty} \int_\varepsilon^A e^{-ny}y^{t-1}dy$ 对 $y\in[\varepsilon,A]$ 一致收敛.
> 故式(4)可逐项取极限. 于是
> $$\int_0^{+\infty} \sum_{n=1}^{+\infty} e^{-ny}y^{t-1}dy = \sum_{n=1}^{+\infty} \lim_{A\to +\infty} \int_0^A e^{-ny}y^{t-1}dy = \sum_{n=1}^{+\infty} \int_0^{+\infty} e^{-ny}y^{t-1}dy.$$
> 问题证毕.

> [!example] 例 7.1.54
> 利用
> $$\frac{1}{x^m} = \frac{1}{\Gamma(m)} \int_0^{+\infty} t^{m-1}e^{-xt}dt \quad (x>0) \tag{1}$$
> 求积分
> $$\int_0^{+\infty} \frac{\cos \alpha x}{x^m} dx \quad (0<m<1).$$

我们先说明一下式(1). 事实上,
$$\frac{\Gamma(m)}{x^m} = \frac{1}{x^m} \int_0^{+\infty} u^{m-1}e^{-u}du$$
$$= \int_0^{+\infty} \left(\frac{u}{x}\right)^{m-1}e^{-x\cdot\frac{u}{x}}d\left(\frac{u}{x}\right) \xlongequal{令\ t=\frac{u}{x}} \int_0^{+\infty} t^{m-1}e^{-xt}dt,$$
所以式(1)成立.

> [!solution]-
> 利用式(1),
> $$\int_0^{+\infty} \frac{\cos \alpha x}{x^m} dx = \frac{1}{\Gamma(m)} \int_0^{+\infty} \cos \alpha x dx \int_0^{+\infty} t^{m-1}e^{-xt}dt$$
> $$= \frac{1}{\Gamma(m)} \int_0^{+\infty} t^{m-1}dt \int_0^{+\infty} e^{-xt}\cos \alpha x dx. \tag{2}$$
> $$= \frac{1}{\Gamma(m)}\int_0^{+\infty} t^{m-1}\frac{t}{\alpha^2+t^2}dt \xlongequal{令\ t=\alpha\tan u} \frac{\alpha^{m-1}}{\Gamma(m)}\int_0^{\frac{\pi}{2}}\tan^m udu$$
>
> $$= \frac{1}{\Gamma(m)}\cdot \frac{\pi\alpha^{m-1}}{2\cos\frac{m\pi}{2}}\quad(\alpha>0).$$
>
> 读者不难验证上面积分交换次序是合理的. 最后一步等式可重复例7.1.52中式(3)的步骤得到.

> [!example] 例 7.1.55
> 已知 $0\leq h<1$, 正整数 $n\geq 3$. 证明:
> $$\int_0^h(1-t^2)^{\frac{n-3}{2}}dt\geq\frac{\sqrt\pi}{2}\frac{\Gamma\left(\frac{n-1}{2}\right)}{\Gamma\left(\frac{n}{2}\right)}h.$$
> （中国科学技术大学）

> [!solution]-
> $$\int_0^h(1-t^2)^{\frac{n-3}{2}}dt \xlongequal{令\ t=hu} \int_0^1 h(1-h^2u^2)^{\frac{n-3}{2}}du$$
>
> $$\geq h\int_0^1(1-u^2)^{\frac{n-3}{2}}du \text{ （再表示成Euler积分）}$$
>
> $$\xlongequal{令\ u=\sin\theta} h\int_0^{\frac{\pi}{2}}\cos^{n-3}\theta\cos\theta d\theta$$
>
> $$=\frac{h}{2} B\left(\frac{1}{2},\frac{n-1}{2}\right)=\frac{\sqrt\pi}{2}\frac{\Gamma\left(\frac{n-1}{2}\right)}{\Gamma\left(\frac{n}{2}\right)}h.$$

> [!example] 例 7.1.56
> 证明: $\lim_{n\to\infty}\int_0^{+\infty}e^{-x^n}dx=1$.

> [!proof]-
> $$\int_0^{+\infty}e^{-x^n}dx=\int_0^{+\infty}\frac{1}{n} t^{\frac{1}{n}-1}e^{-t}dt=\frac{1}{n}\Gamma\left(\frac{1}{n}\right)$$
>
> $$=\Gamma\left(\frac{1}{n}+1\right)\to\Gamma(1)=1 \text{ （当}n\to\infty\text{时）（因}\Gamma(t)\text{连续）}.$$


#### d. 余元公式的利用

> [!note]
> Γ函数和B函数都有余元公式, 其突出特点是把含Euler积分的式子写成了初等函数, 这在一般情况下是办不到的. 上面已见到了它们的应用, 下面举例进一步说明它们的用途.

> [!example] 例7.1.57
> 计算积分 $I=\int_0^1 \frac{dx}{\sqrt[n]{1-x^n}}$（$n>0$）.

> [!solution]- 解
> 令 $x^n=t$, 则
> $$
> I=\frac1n\int_0^1 t^{\frac{1-n}{n}}(1-t)^{-\frac1n}dt=\frac1n B\left(\frac1n,1-\frac1n\right)=\frac{\pi}{n\sin\frac\pi n}.
> $$

> [!example] 例7.1.58
> 计算积分 $\int_0^{+\infty}\frac{x^{m-1}}{1+x^n}dx$（$n>m>0$）.

> [!solution]- 解
> $$
> \int_0^{+\infty}\frac{x^{m-1}}{1+x^n}dx=\frac{\pi}{n\sin\frac{m\pi}{n}}.
> $$

> [!example] 例7.1.59
> 计算积分 $I=\int_0^{+\infty}\frac{x^{p-1}\ln x}{1+x}dx$（$0<p<1$）.

> [!solution]- 解
> $$
> \begin{aligned}
> I&=\int_0^{+\infty}\frac{\partial}{\partial p}\left(\frac{x^{p-1}}{1+x}\right)dx=\frac{\partial}{\partial p}\int_0^{+\infty}\frac{x^{p-1}}{1+x}dx=\frac{\partial}{\partial p}B(p,1-p)\\
> &=\frac{\partial}{\partial p}\frac{\pi}{\sin p\pi}=-\frac{\pi^2\cos p\pi}{\sin^2 p\pi}.
> \end{aligned}
> $$
> 
> 读者不难验证求导与积分交换次序是合理的.

> [!example] 例7.1.60
> 计算积分 $I=\int_0^{+\infty}\frac{x^{p-1}-x^{q-1}}{(1+x)\ln x}dx$（$0<p,q<1$）.

> [!solution]- 解
> $$
> \frac{\partial}{\partial p}I=\int_0^{+\infty}\frac{\partial}{\partial p}\left[\frac{x^{p-1}-x^{q-1}}{(1+x)\ln x}\right]dx=\int_0^{+\infty}\frac{x^{p-1}}{1+x}dx=B(p,1-p)=\frac{\pi}{\sin p\pi},
> $$
> 由此 $I(p)=\ln\left|\tan\frac{p\pi}{2}\right|+C(q)$.
> 
> 因为当 $p=q$ 时 $I=0$, 所以 $C(q)=-\ln\left|\tan\frac{q\pi}{2}\right|$. 因此
> $$
> I=\ln\left|\frac{\tan(p\pi/2)}{\tan(q\pi/2)}\right|.
> $$
> 
> (此处略去了积分号下求导条件的检验. 读者还可用积分号下求积分的方法来计算本例.)

> [!example] 例7.1.61
> 计算积分: 1) $I=\int_0^1\ln\Gamma(x)dx$; 2) $\int_0^1(\ln\Gamma(x))\sin\pi xdx$.

> [!solution]- 解
> 1) 令 $x=1-t$, 作变换, 仍把积分变量写作 $x$, 则得 $I=\int_0^1\ln\Gamma(1-x)dx$. 两端同时加 $I=\int_0^1\ln\Gamma(x)dx$, 得
> $$
> \begin{aligned}
> 2I&=\int_0^1\ln[\Gamma(x)\Gamma(1-x)]dx=\int_0^1\ln\frac{\pi}{\sin\pi x}dx \text{（余元公式）}\\
> &=\ln\pi-\int_0^1\ln\sin\pi xdx=\ln\pi-\frac1\pi\int_0^\pi\ln\sin tdt=\ln2\pi \text{（见例4.5.7）}.
> \end{aligned}
> $$
> 
> 所以 $I=\ln\sqrt{2\pi}$.
> 
> 2) $\int_0^1(\ln\Gamma(x))\sin\pi xdx=\frac1\pi\left(1+\ln\frac\pi2\right)$.


### 单元练习7.1

含参变量的正常积分

7.1.1 设 $I(\alpha)=\int_0^\alpha\frac{\varphi(x)dx}{\sqrt{\alpha-x}}$, 其中函数$\varphi(x)$及其导数$\varphi'(x)$在$0\leq x\leq a$上连续. 证明: 当$0<\alpha<a$时, 有 $I'(\alpha)=\frac{\varphi(0)}{\sqrt\alpha}+\int_0^\alpha\frac{\varphi'(x)}{\sqrt{\alpha-x}}dx.$

> [!hint]- 提示
> 令$x=\alpha t$, 变换之后再在积分号下求导. 并用分部积分法变形.

> [!hint]- 再提示
> $I'(\alpha)=\frac1{2\sqrt\alpha}\int_0^1\frac{\varphi(\alpha t)}{\sqrt{1-t}}dt+\sqrt\alpha\int_0^1\frac{t\varphi'(\alpha t)}{\sqrt{1-t}}dt \xlongequal{记} J_1(\alpha)+J_2(\alpha),$
> 
> 其中
> 
> $J_1(\alpha)=-\frac1{\sqrt\alpha}\int_0^1\varphi(\alpha t)d\sqrt{1-t}=\frac1{\sqrt\alpha}\varphi(0)+\frac1\alpha\int_0^\alpha\sqrt{\alpha-x}\varphi'(x)dx, J_2(\alpha)=\int_0^\alpha\frac{x\varphi'(x)}{\alpha\sqrt{\alpha-x}}dx.$
> 
> 故 $I'(\alpha)=\frac1{\sqrt\alpha}\varphi(0)+\int_0^\alpha\left(\frac{\sqrt{\alpha-x}}{\alpha}+\frac{x}{\alpha\sqrt{\alpha-x}}\right)\varphi'(x)dx$ 为所求.

7.1.2 求线性函数$a+bx$, 在区间$[1,3]$上用它近似代替函数$f(x)=x^2$, 能使得
$$
\int_1^3(a+bx-x^2)^2dx=\min.
$$

> [!hint]- 提示
> 记$F(a,b)=\int_1^3(a+bx-x^2)^2dx$, 令$F'_a=F'_b=0$, 可得 $a=-\frac{11}{3}, b=4.$

> [!note] 注
> 这是最小二乘法的一个简单应用. 它体现了最小二乘法的思想和做法.

☆7.1.3 计算积分:

1) $\int_0^{\frac\pi2}\ln(a^2\sin^2x+b^2\cos^2x)dx$, 设$a,b\neq 0$; （$\pi\ln\frac{|a|+|b|}{2}$）

2) $\int_0^\pi\ln(1-2\alpha\cos x+\alpha^2)dx$; 《0, 若$|\alpha|\leq 1$; $2\pi\ln|\alpha|$, 若$|\alpha|>1$》

3) $\int_0^{\frac\pi2}\frac{\arctan(\alpha\tan x)}{\tan x}dx$; （$\frac\pi2(\operatorname{sgn}\alpha)\ln(1+|\alpha|)$）

4) $\int_0^1\sin\left(\ln\frac1x\right)\frac{x^b-x^a}{\ln x}dx$, 设$a,b>0$; （$\arctan\frac{b-a}{1+(a+1)(b+1)}$）

5) $\int_0^\alpha\arctan\sqrt{\frac{\alpha-x}{\alpha+x}}dx$ （$\alpha>0$）. （$\frac12\alpha$）

(北京科技大学)

> [!hint]- 提示
> 可参看例7.1.5—7.1.9.

> [!hint]- 再提示
> 1) 用$I(a,b)$表示原积分, 当$a>0,b>0$时, 在积分号下求导: $I'_a(a,b)=\frac{\pi}{a+b}$（$a,b>0$）. 由此知 $I(a,b)=\pi\ln(a+b)+C(b)$. 但$a=b$时有 $I(b,b)=\pi\ln b$, 故得 $C(b)=\pi\ln\frac12, I(a,b)=\pi\ln\frac{a+b}{2}$（$a,b>0$）. 因为原式对$a,b$而言都是偶函数, 故知$I(a,b)=\pi\ln\frac{|a|+|b|}{2}, \forall a,b\neq 0.$
> 
> 2) 用$I(\alpha)$表示原积分, 在积分号下求导可得
> 
> 当$|\alpha|<1$时, $I'(\alpha)=0$, 但$I(0)=0$, 故$I(\alpha)\equiv 0$;
> 
> 当$|\alpha|>1$时, 在括号里提取因子$\alpha^2$, 剩下部分便可化为$|\alpha|<1$的情况, 故得
> 
> $I(\alpha)=2\pi\ln|\alpha|$;
> 
> 最后考虑$\alpha=\pm 1$的情况, 可利用例4.5.7的结果.
> 
> 3) $I(\alpha)$表示原积分, 因为它是α的奇函数, 故只需求出$\alpha>0$之值, 当$\alpha>0$时,
> 
> $I'(\alpha)=\int_0^{\frac\pi2}\frac1{1+\alpha^2\tan^2x}dx \xlongequal{令\ t=\tan x} \int_0^{+\infty}\frac{dt}{(1+\alpha^2t^2)(1+t^2)}$
> 
> $=\frac1{\alpha^2-1}\int_0^{+\infty}\left(\frac1{t^2+\frac1{\alpha^2}}-\frac1{t^2+1}\right)dt=\frac\pi2\frac1{1+\alpha}.$
> 
> 故当$\alpha>0$时, $I(\alpha)=\frac\pi2\ln(1+\alpha)+C$, 但是当$\alpha=0$时明显有$I(0)=0$, 故$I(\alpha)=\frac\pi2\ln(1+\alpha)$（$\alpha\geq 0$）. 因$I(\alpha)$为奇函数, 所以 $I(\alpha)=\frac\pi2(\operatorname{sgn}\alpha)\ln(1+|\alpha|)$（$\forall\alpha\in R$）.
> 
> 注 原积分之被积函数在$x=0$处为可去间断, 个别点之值不影响积分值大小, 补充定义即可连续. 因此, $I(\alpha)$在$\alpha=0$处连续, $0=I(0)=I(0^+)=\frac\pi2\ln(1+\alpha)\big|_{\alpha=0^+}+C$, 可得$C=0.$
> 
> 4) 原积分$=\int_0^1\left[\sin\left(\ln\frac1x\right)\right]\int_a^b x^ydydx.$ 注意: $\sin\left(\ln\frac1x\right)\cdot x^y$当$x\to 0^+$时为可去间断, 补充定义即可连续, 因此它是$[0,1;a,b]$上二元连续函数. 积分可以交换次序（在积分号下取积分）:
> 
> 原积分$=\int_a^b dy\int_0^1\sin\left(\ln\frac1x\right)x^ydx \xlongequal{令\ x=e^{-t}} \int_a^b\frac{dy}{1+(1+y)^2}=\arctan\frac{b-a}{1+(a+1)(b+1)}.$
> 
> 5) 利用求导公式（见例7.1.4前的要点2）, 可知
> 
> $I'(\alpha)=\frac1{2\alpha}\int_0^\alpha\frac{-xdx}{\sqrt{\alpha^2-x^2}}=-\frac1{2\alpha}\int_0^\alpha\frac1{\sqrt{\alpha^2-x^2}}d(\alpha^2-x^2)=-\frac1{2\alpha}\sqrt{\alpha^2-x^2}\bigg|_0^\alpha=\frac12,$
> 
> $I(\alpha)=\frac12\alpha+C$ （$\alpha>0$）.
> 
> 又因$0\leq I(\alpha)\leq \alpha\cdot\arctan\sqrt{\frac\alpha\alpha}=\frac\pi4\alpha\to 0$ （$\alpha\to 0^+$）, 故$C=0, I(\alpha)=\frac12\alpha$ （$\alpha>0$）.

*7.1.4 $J_n(x)=\frac1\pi\int_0^\pi\cos(n\varphi-x\sin\varphi)d\varphi$ 为$n$阶Bessel函数, 试证:
$$
\int_0^x tJ_0(t)dt=xJ_1(x).
$$

> [!hint]- 提示
> $\int_0^x tJ_0(t)dt=\frac1\pi\int_0^x tdt\int_0^\pi\cos(-t\sin\varphi)d\varphi=\frac1\pi\int_0^x tdt\int_0^\pi\cos[(\varphi-t\sin\varphi)-\varphi]d\varphi.$
> 
> 然后利用余弦差角公式展开成两项.

> [!hint]- 再提示
> $\int_0^x tJ_0(t)dt=I_1+I_2$, 其中
> 
> $I_1=\frac1\pi\int_0^x tdt\int_0^\pi\cos(\varphi-t\sin\varphi)\cos\varphi d\varphi=\frac1\pi\int_0^x tdt\int_0^\pi\cos(\varphi-t\sin\varphi)d[(t\sin\varphi-\varphi)+\varphi]$
> 
> $=-\frac1\pi\int_0^x tdt\int_0^\pi\cos(\varphi-t\sin\varphi)d(\varphi-t\sin\varphi)+\frac1\pi\int_0^x tdt\int_0^\pi\cos(\varphi-t\sin\varphi)d\varphi$
> 
> $=-\frac1\pi\int_0^x[\sin(\varphi-t\sin\varphi)]_0^\pi dt+I_3=I_3,$
> 
> 这里 $I_3=\frac1\pi\int_0^x dt\int_0^\pi\cos(\varphi-t\sin\varphi)d\varphi,$
> 
> $I_2=\frac1\pi\int_0^x tdt\int_0^\pi\sin(\varphi-t\sin\varphi)\sin\varphi d\varphi=\frac1\pi\int_0^\pi d\varphi\int_0^x t\sin(\varphi-t\sin\varphi)\sin\varphi dt$
> 
> $=\frac1\pi\int_0^\pi d\varphi\int_0^x t\sin(\varphi-t\sin\varphi)d(t\sin\varphi)=\frac1\pi\int_0^\pi d\varphi\int_0^x t\sin(\varphi-t\sin\varphi)d(t\sin\varphi-\varphi)$
> 
> $=-\frac1\pi\int_0^\pi d\varphi\int_0^x td[\cos(\varphi-t\sin\varphi)]$ （分部积分）
> 
> $=\frac1\pi\int_0^\pi [t\cdot\cos(\varphi-t\sin\varphi)]_0^x d\varphi-\frac1\pi\int_0^\pi d\varphi\int_0^x\cos(\varphi-t\sin\varphi)dt$
> 
> $=\frac1\pi\int_0^\pi x\cos(\varphi-x\sin\varphi)d\varphi-I_3=xJ_1(x)-I_3.$

> [!note] 注
> 作为基本功的训练, 本题是优秀学生的一道难得的好题.

含参变量的反常积分

7.1.5 证明积分 $\int_0^{+\infty}x\sin(x^3-\lambda x)dx$ 是$\lambda$的连续函数.

> [!hint]- 提示
> 利用差角公式把被积函数展开成两项, 然后用例7.1.19中的方法（分部积分）.

☆7.1.6 证明: $\int_0^{+\infty}e^{-tu^2}\sin tdu$ 在$t\in[0,+\infty)$上一致收敛. （武汉大学）

> [!proof]- 证
> （用定义.）要证: $\forall\varepsilon>0, \exists A_1>0$, 使得$A>A_1$时, 有
> 
> $\left|\int_A^{+\infty}e^{-tu^2}\sin tdu\right|<\varepsilon$ （$\forall t\in[0,+\infty)$）. (1)
> 
> 因 $\left|\int_A^{+\infty}e^{-tu^2}\sin tdu\right| \xlongequal{令\sqrt t u=v} \left|\frac{\sin t}{\sqrt t}\int_{\sqrt t A}^{+\infty}e^{-v^2}dv\right|\leq\left|\frac t{\sqrt t}\right|\int_0^{+\infty}e^{-v^2}dv=\sqrt t\frac{\sqrt\pi}{2},$
> 
> 可见当$0<t<t_0=\frac{4\varepsilon^2}{\pi}$时, 式(1)自动成立. 当$t\in[t_0,+\infty)$时,
> 
> $\left|\int_A^{+\infty}e^{-tu^2}\sin tdu\right|=\left|\frac{\sin t}{\sqrt t}\right|\cdot\int_{\sqrt t A}^{+\infty}e^{-v^2}dv\leq\frac1{\sqrt{t_0}}\int_{\sqrt{t_0}A}^{+\infty}e^{-v^2}dv.$ (2)
> 
> 因$\int_0^{+\infty}e^{-v^2}dv$收敛, 对$\sqrt{t_0}\varepsilon, \exists A_0>0$, 当$A>A_0$时, 有$0<\int_A^{+\infty}e^{-v^2}dv<\sqrt{t_0}\varepsilon$. 于是, 令$A_1=\frac{A_0}{\sqrt{t_0}}$, 则$A>A_1$时, $\sqrt{t_0}A>A_0$, 从而式(2)$<\frac1{\sqrt{t_0}}\cdot\sqrt{t_0}\varepsilon=\varepsilon$ （$\forall x\in[0,+\infty)$）. 式(1)获证.

7.1.7 证明:

1) 积分 $\int_0^{+\infty}\alpha e^{-\alpha x}dx$ 在$(0<)a\leq \alpha\leq b$上一致收敛, 在$\alpha>0$上非一致收敛;

2) 积分 $\int_0^1\frac{\sin\alpha x}{\sqrt{|x-\alpha|}}dx$ 在$0\leq \alpha\leq 1$上一致收敛.

> [!hint]- 提示
> 1) $\int_A^{+\infty}\alpha e^{-\alpha x}dx=\int_A^{+\infty}e^{-\alpha x}d(\alpha x) \xlongequal{令\ t=\alpha x}\int_{\alpha A}^{+\infty}e^{-t}dt=-e^{-t}\bigg|_{\alpha A}^{+\infty}$
> 
> $=e^{-\alpha A}\begin{cases}\to 0, 关于\alpha于[a,1]上一致, 对任一给定的a>0,\\ \not\to 0, 关于\alpha于(0,1)上.\end{cases}$ ($A\to +\infty$).
> 
> 2) $\int_0^1\frac{\sin\alpha x}{\sqrt{|x-\alpha|}}dx=\int_0^\alpha\frac{\sin\alpha x}{\sqrt{\alpha-x}}dx+\int_\alpha^1\frac{\sin\alpha x}{\sqrt{x-\alpha}}dx \xlongequal{记} I_1+I_2.$
> 
> $I_1$以$x=\alpha$为奇点, $0\leq \alpha\leq 1$,
> 
> $\left|\int_{\alpha-\eta}^\alpha\frac{\sin\alpha x}{\sqrt{\alpha-x}}dx\right|\leq\int_{\alpha-\eta}^\alpha\frac{dx}{\sqrt{\alpha-x}}=2\sqrt\eta\to 0$ （当$\eta\to 0$时）,
> 故 $I_1$ 在 $[0,1]$ 上一致收敛. 对 $I_2$, 同理有
> $|\int_\alpha^{\alpha+\eta} (\sin ax)/(\sqrt{x-\alpha}) dx| \to 0$（当 $\eta\to 0$ 时）于 $\alpha\in[0,1]$ 上. 故结论成立.

7.1.8 $f(x)$ 在 $[0,+\infty)$ 上可积, $x=0,+\infty$ 为奇点, 证明:
$$
\lim_{\alpha\to 0+} \int_0^{+\infty} e^{-\alpha x} f(x) dx = \int_0^{+\infty} f(x) dx.
$$

（东北大学）

> [!hint]- 提示
> 可利用 Abel 判别法.

> [!hint]- 再提示
> $\int_0^{+\infty} e^{-\alpha x} f(x) dx = \int_0^1 e^{-\alpha x} f(x) dx + \int_1^{+\infty} e^{-\alpha x} f(x) dx = I_1+I_2.$
> 
> $f(x)$ 的积分收敛（关于 $\alpha$ 一致）. $e^{-\alpha x}$ 固定 $\alpha$ 后对 $x$ 单调, $|e^{-\alpha x}|\leq 1$ 一致有界. 用 Abel 判别法可知 $I_1,I_2$ 都一致收敛（关于 $\alpha\in(0,+\infty)$）, 可在积分号下取极限.

*7.1.9 $f(x)$ 在 $[0,+\infty)$ 上连续, $\int_0^{+\infty} \varphi(x) dx$ 绝对收敛, 证明:
$$
\lim_{n\to\infty} \int_0^{\sqrt n} f(x/n)\varphi(x) dx = f(0)\int_0^{+\infty} \varphi(x) dx.
$$

（南昌大学）

> [!hint]- 提示
> $|\int_0^{\sqrt n} f(x/n)\varphi(x) dx - f(0)\int_0^{+\infty} \varphi(x) dx|$
> $\leq \int_0^{\sqrt n} |f(x/n)-f(0)| |\varphi(x)| dx + |f(0)|\int_{\sqrt n}^{+\infty}|\varphi(x)| dx.$ (1)

> [!hint]- 再提示
> 记 $M=\int_0^{+\infty}|\varphi(x)| dx$. 因 $f$ 在 $x=0$ 处右连续, $\forall\varepsilon>0, \exists\delta>0$, 则当 $0<x<\delta$ 时, 有
> 
> $|f(x)-f(0)| < \varepsilon/(2M).$
> 
> 当 $x\in[0,\sqrt n]$ 时, $0<x/n\leq \sqrt n/n=1/\sqrt n$, 故当 $n>1/\delta^2$ 时, $0<x/n<\delta$. 式(1)右端
> 
> （第一项）$\leq \varepsilon/(2M) \int_0^{\sqrt n}|\varphi(x)| dx \leq \varepsilon/(2M)\int_0^{+\infty}|\varphi(x)| dx = \varepsilon/2.$
> 
> 又由 $\int_0^{+\infty}|\varphi(x)| dx$ 收敛知, $\exists A_0>0$, 当 $A>A_0$ 时, $\int_A^{+\infty}|\varphi(x)| dx < \varepsilon/(2|f(0)|)$, 因此 $n>A_0^2$（$\sqrt n>A_0$）时, 式(1)右端
> 
> （第二项）$= |f(0)|\int_{\sqrt n}^{+\infty}|\varphi(x)| dx \leq |f(0)|\cdot\varepsilon/(2|f(0)|)=\varepsilon/2.$
> 
> 故 $\forall\varepsilon>0$, 取 $N=\max\{A_0^2,1/\delta^2\}$, 当 $n>N$ 时, 有 式(1)$\leq\varepsilon/2+\varepsilon/2=\varepsilon.$

☆7.1.10 证明: $\lim_{\alpha\to 0+}\int_0^{+\infty} \frac{\alpha x+1}{x^2+1}e^{-\alpha x} dx = \frac\pi2.$（吉林大学）

> [!hint]- 提示
> 左端 $= \lim_{\alpha\to 0+}\int_0^{+\infty} \frac{\alpha xe^{-\alpha x}}{x^2+1} dx + \lim_{\alpha\to 0+}\int_0^{+\infty} \frac{e^{-\alpha x}}{x^2+1} dx$ (= ? = $0+\frac\pi2$). (1)

> [!hint]- 再提示
> 式(1)右端第二项可用 Abel 判别法, 一致收敛, 可在积分号下取极限, 易知等于 $\frac\pi2$.
> 
> 下面只需证明第一项极限为零.
> 
> 记 $I(\alpha)=\int_0^{+\infty} \frac{1}{x^2+1}\cdot xe^{-\alpha x} dx$, 利用 Abel 判别法, 易证 $\forall\alpha>0$, 该积分收敛. $\frac{xe^{-\alpha x}}{x^2+1}$ 及 $\left(\frac{xe^{-\alpha x}}{x^2+1}\right)'_\alpha = -\frac{x^2e^{-\alpha x}}{x^2+1}$ 在 $(0,+\infty;0,+\infty)$ 上连续. $\forall\alpha>0$, 取闭区间 $[\alpha_1,\alpha_2]:0<\alpha_1<\alpha<\alpha_2$. 在 $[\alpha_1,\alpha_2]$ 上: 可证求导后的积分一致收敛（下面补证）. 故可在积分号下求导:
> 
> $I'(\alpha)=\int_0^{+\infty}\left(\frac{xe^{-\alpha x}}{x^2+1}\right)'_\alpha dx = -\int_0^{+\infty} \frac{x^2e^{-\alpha x}}{x^2+1} dx$
> $= -\int_0^{+\infty}e^{-\alpha x} dx + \int_0^{+\infty}\frac{e^{-\alpha x}}{x^2+1} dx$（一致收敛性下面补证）
> $= -\frac1\alpha + g(\alpha),$
> 
> 其中 $g(\alpha)=\int_0^{+\infty}\frac{e^{-\alpha x}}{x^2+1} dx$. 于是 $I(\alpha)=h(\alpha)-\ln \alpha+C$（$\alpha>0$）, 其中 $h(\alpha)=\int_0^\alpha g(x) dx$, 在 $[0,1]$ 上有界. 故
> 
> （式(1)右端第一项）$=\alpha I(\alpha)=\alpha h(\alpha)-\alpha\ln\alpha+\alpha C\to 0$（当 $\alpha\to 0+$ 时）.
> 
> 一致收敛性补证如下:
> 1) $|\frac{e^{-\alpha x}}{x^2+1}|\leq\frac{1}{x^2+1}$, $\int_0^{+\infty} \frac{1}{x^2+1} dx$ 收敛, 故 $\int_0^{+\infty}\frac{e^{-\alpha x}}{x^2+1} dx$ 一致收敛于 $\alpha\geq 0$.
> 2) $|\int_A^{+\infty} e^{-\alpha x} dx|=|\int_{\alpha A}^{+\infty} \frac{e^{-t} dt}{\alpha}|=|-\frac{e^{-\alpha A}}{\alpha}|\leq\frac{1}{\alpha_1}e^{-\alpha_1 A}\to 0$（$A\to +\infty$）关于 $\alpha\in[\alpha_1,\alpha_2]$, 所以 $\int_0^{+\infty}e^{-\alpha x} dx$ 在 $[\alpha_1,\alpha_2]$ 上一致收敛.

7.1.11 证明: $F(p)=\int_0^\pi \frac{\sin x}{x^p(\pi-x)^{2-p}} dx$ 在 $(0,2)$ 内连续.（北京师范大学）

> [!hint]- 提示
> $F(p)=\int_0^{\pi/2} \frac{\sin x}{x^p(\pi-x)^{2-p}} dx + \int_{\pi/2}^\pi \frac{\sin x}{x^p(\pi-x)^{2-p}} dx = I_1+I_2.$
> 
> $I_1,I_2$ 在 $(0,2)$ 上内闭一致收敛（可用 M 判别法）.

☆7.1.12 证明函数 $F(x)=\int_0^{+\infty} \frac{\sin xt}{1+t^2} dt$ 在区间 $[0,+\infty)$ 上连续, 在 $(0,+\infty)$ 内有连续导数.（厦门大学）

> [!hint]- 提示
> 可用 M 判别法证明一致收敛. 用 Dirichlet 判别法证明被积函数对 $x$ 求导之后的函数之积分在 $(0,+\infty)$ 上内闭一致收敛.

> [!hint]- 再提示
> 1° $|\frac{\sin xt}{1+t^2}|\leq\frac{1}{1+t^2}$, 由 $\int_0^{+\infty} \frac{dt}{1+t^2}$ 收敛知 $\int_0^{+\infty} \frac{\sin xt}{1+t^2} dx$ 在 $[0,+\infty)$ 上一致收敛, 且 $F(x)$ 在 $[0,+\infty)$ 上连续.
> 
> 2° $(\frac{\sin xt}{1+t^2})'_x = \frac{t\cos xt}{1+t^2}= \frac{t}{1+t^2}\cdot\cos xt,$ (1)
> 
> $\forall[a,b]:0<a\leq x\leq b$, 满足 Dirichlet 条件:
> 
> i) $|\int_0^A \cos xt dt|=|\frac{\sin Ax}{x}|\leq\frac1x\leq\frac1a$（一致有界）.
> 
> ii) $(\frac{t}{1+t^2})'=\frac{1-t^2}{(1+t^2)^2}=\frac{(1-t)(1+t)}{(1+t^2)^2}<0$（当 $t>1$ 时）, 故当 $t>1$ 时 $\frac{t}{1+t^2}\downarrow$, 且 $\frac{t}{1+t^2}\to 0$（当 $t\to +\infty$）. 因此, $\int_0^{+\infty}(\frac{\sin xt}{1+t^2})'_x dt$ 一致收敛, $F(x)$ 可在积分号下求导, 且由(1)的连续性知导函数 $F'(x)$ 在 $(0,+\infty)$ 内连续.

7.1.13 设 $\varphi(x), f(x)$ 是连续函数, 且 $\exists R>0$, 当 $|x|\geq R$ 时, $\varphi(x)=0$, 证明:

1) 当 $n\to\infty$ 时, 有 $\varphi(x)f(x/n) \to \varphi(x)f(0)$, $-\infty<x<+\infty$;

2) 若还有 $\int_{-\infty}^{+\infty}\varphi(t)dt=1$, 则 $\lim_{n\to\infty} n\int_{-\infty}^{+\infty} \varphi(nx)f(x) dx = f(0)$. （武汉大学）

> [!hint]- 提示
> 1) 因 $\varphi(x)\equiv 0$（当 $|x|\geq R$ 时）, 故只需证明: $n\to\infty$ 时, $\varphi(x)f(x/n)\to\varphi(x)f(0)$ 于 $[-R,R]$ 上.
> 
> 2) 注意 $n\int_{-\infty}^{+\infty}\varphi(nx)f(x) dx = \int_{-\infty}^{+\infty}\varphi(t)f(t/n)dt$.

> [!hint]- 再提示
> 1) $\varphi(x)$ 在 $[-R,R]$ 上连续, 故有界: $|\varphi(x)|\leq M$. $f(x)$ 在 $x=0$ 处连续, $\forall\varepsilon>0, \exists\delta>0$, 当 $|x|<\delta$ 时, $|f(x)-f(0)|<\varepsilon$. 取 $N>\frac{R}{\delta}$, 当 $n>N$ 时, 对 $\forall x\in[-R,R]$, 有 $|x/n|\leq\frac{R}{n}<\delta$, 故 $|f(x/n)-f(0)|<\varepsilon$. 于是
> 
> $|\varphi(x)f(x/n)-\varphi(x)f(0)|\leq M\varepsilon$ （$\forall x\in[-R,R]$）.
> 
> 2) $n\int_{-\infty}^{+\infty}\varphi(nx)f(x) dx \xlongequal{令\ t=nx} \int_{-\infty}^{+\infty}\varphi(t)f(t/n)dt$.
> 
> 由1)知 $\varphi(t)f(t/n)\to\varphi(t)f(0)$ 于 $[-R,R]$ 上, 且 $|\varphi(t)f(t/n)|\leq M\cdot\max_{|x|\leq R}|f(x)|$ （可积函数为优函数）, 由控制收敛定理,
> 
> $\lim_{n\to\infty}\int_{-\infty}^{+\infty}\varphi(t)f(t/n)dt = \int_{-\infty}^{+\infty}\varphi(t)f(0)dt = f(0)\int_{-\infty}^{+\infty}\varphi(t)dt = f(0).$

7.1.14 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 绝对收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin nxdx = 0.
$$

> [!hint]- 提示
> 可用 Riemann 引理.

> [!hint]- 再提示
> 因 $\int_0^{+\infty}|f(x)|dx$ 收敛, $\forall\varepsilon>0, \exists A>0$, 使 $\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4$.
> 
> 在 $[0,A]$ 上, $f(x)$ 可积, 由 Riemann 引理,
> 
> $\lim_{n\to\infty}\int_0^A f(x)\sin nxdx = 0.$
> 
> 故 $\exists N>0$, 当 $n>N$ 时, $|\int_0^A f(x)\sin nxdx|<\frac\varepsilon2$.
> 
> 又 $|\int_A^{+\infty}f(x)\sin nxdx|\leq\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4<\frac\varepsilon2$.
> 
> 故当 $n>N$ 时,
> 
> $|\int_0^{+\infty}f(x)\sin nxdx|\leq|\int_0^A f(x)\sin nxdx|+|\int_A^{+\infty}f(x)\sin nxdx|<\frac\varepsilon2+\frac\varepsilon2=\varepsilon.$

7.1.15 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 条件收敛, 证明:
$$
\lim_{\alpha\to 0+}\int_0^{+\infty}e^{-\alpha x}f(x)dx = \int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可用 Abel 判别法证明 $\int_0^{+\infty}e^{-\alpha x}f(x)dx$ 关于 $\alpha\in[0,+\infty)$ 一致收敛.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)dx$ 收敛（关于 $\alpha$ 一致）. $e^{-\alpha x}$ 固定 $\alpha$ 后对 $x$ 单调, $|e^{-\alpha x}|\leq 1$ 一致有界. 用 Abel 判别法可知 $\int_0^{+\infty}e^{-\alpha x}f(x)dx$ 关于 $\alpha\in[0,+\infty)$ 一致收敛, 可在积分号下取极限.

7.1.16 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}x^\lambda f(x)dx$ 在 $\lambda=\lambda_0$ 处收敛, 证明: 该积分在 $\lambda\geq\lambda_0$ 上一致收敛.

> [!hint]- 提示
> 可用 Abel 判别法.

> [!hint]- 再提示
> $\int_0^{+\infty}x^{\lambda_0}f(x)dx$ 收敛（关于 $\lambda$ 一致）. $x^{\lambda-\lambda_0}$ 固定 $\lambda$ 后对 $x$ 单调（当 $x\geq 1$ 时）, $|x^{\lambda-\lambda_0}|\leq x^{\lambda_1-\lambda_0}$（当 $\lambda\in[\lambda_0,\lambda_1]$ 时）一致有界. 用 Abel 判别法可知 $\int_1^{+\infty}x^\lambda f(x)dx$ 在 $[\lambda_0,\lambda_1]$ 上一致收敛. 由 $\lambda_1$ 的任意性, 知 $\int_0^{+\infty}x^\lambda f(x)dx$ 在 $\lambda\geq\lambda_0$ 上内闭一致收敛.

7.1.17 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 收敛, 证明:
$$
\lim_{y\to 0+}\int_0^{+\infty}e^{-xy}f(x)dx = \int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可用 Abel 判别法.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)dx$ 收敛（关于 $y$ 一致）. $e^{-xy}$ 固定 $y$ 后对 $x$ 单调, $|e^{-xy}|\leq 1$ 一致有界. 用 Abel 判别法可知 $\int_0^{+\infty}e^{-xy}f(x)dx$ 关于 $y\in[0,+\infty)$ 一致收敛, 可在积分号下取极限.

7.1.18 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 绝对收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)|\sin nxdx| = \frac2\pi\int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可用 Riemann 引理.

> [!hint]- 再提示
> 因 $\int_0^{+\infty}|f(x)|dx$ 收敛, $\forall\varepsilon>0, \exists A>0$, 使 $\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4$.
> 
> 在 $[0,A]$ 上, $f(x)$ 可积, 由 Riemann 引理,
> 
> $\lim_{n\to\infty}\int_0^A f(x)|\sin nx|dx = \frac1{2\pi}\int_0^{2\pi}|\sin x|dx\cdot\int_0^A f(x)dx = \frac2\pi\int_0^A f(x)dx.$
> 
> 故 $\exists N>0$, 当 $n>N$ 时,
> 
> $|\int_0^A f(x)|\sin nx|dx - \frac2\pi\int_0^A f(x)dx|<\frac\varepsilon2.$
> 
> 又 $|\int_A^{+\infty}f(x)|\sin nx|dx|\leq\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4<\frac\varepsilon2$.
> 
> 故当 $n>N$ 时,
> 
> $|\int_0^{+\infty}f(x)|\sin nx|dx - \frac2\pi\int_0^{+\infty}f(x)dx|$
> 
> $\leq|\int_0^A f(x)|\sin nx|dx - \frac2\pi\int_0^A f(x)dx| + |\int_A^{+\infty}f(x)|\sin nx|dx| + \frac2\pi|\int_A^{+\infty}f(x)dx|$
> 
> $<\frac\varepsilon2 + \frac\varepsilon2 + \frac2\pi\cdot\frac\varepsilon4 < 2\varepsilon.$

7.1.19 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin^2 nxdx = \frac12\int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可用 Riemann 引理, 或利用 $\sin^2 nx = \frac{1-\cos 2nx}{2}$.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)\sin^2 nxdx = \frac12\int_0^{+\infty}f(x)dx - \frac12\int_0^{+\infty}f(x)\cos 2nxdx.$
> 
> 由 Riemann 引理, $\lim_{n\to\infty}\int_0^{+\infty}f(x)\cos 2nxdx = 0$.
> 
> 故 $\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin^2 nxdx = \frac12\int_0^{+\infty}f(x)dx.$

7.1.20 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 绝对收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\cos nxdx = 0.
$$

> [!hint]- 提示
> 可用 Riemann 引理.

> [!hint]- 再提示
> 因 $\int_0^{+\infty}|f(x)|dx$ 收敛, $\forall\varepsilon>0, \exists A>0$, 使 $\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4$.
> 
> 在 $[0,A]$ 上, $f(x)$ 可积, 由 Riemann 引理,
> 
> $\lim_{n\to\infty}\int_0^A f(x)\cos nxdx = 0.$
> 
> 故 $\exists N>0$, 当 $n>N$ 时, $|\int_0^A f(x)\cos nxdx|<\frac\varepsilon2$.
> 
> 又 $|\int_A^{+\infty}f(x)\cos nxdx|\leq\int_A^{+\infty}|f(x)|dx<\frac\varepsilon4<\frac\varepsilon2$.
> 
> 故当 $n>N$ 时,
> 
> $|\int_0^{+\infty}f(x)\cos nxdx|\leq|\int_0^A f(x)\cos nxdx|+|\int_A^{+\infty}f(x)\cos nxdx|<\frac\varepsilon2+\frac\varepsilon2=\varepsilon.$

7.1.21 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\frac{\sin nx}{x}dx = \frac\pi2 f(0).
$$

> [!hint]- 提示
> 可利用 $\int_0^{+\infty}\frac{\sin x}{x}dx = \frac\pi2$.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)\frac{\sin nx}{x}dx = \int_0^{+\infty}f(0)\frac{\sin nx}{x}dx + \int_0^{+\infty}(f(x)-f(0))\frac{\sin nx}{x}dx$
> 
> $= f(0)\int_0^{+\infty}\frac{\sin nx}{x}dx + \int_0^{+\infty}(f(x)-f(0))\frac{\sin nx}{x}dx$
> 
> $\xlongequal{令\ t=nx} f(0)\int_0^{+\infty}\frac{\sin t}{t}dt + \int_0^{+\infty}(f(t/n)-f(0))\frac{\sin t}{t}dt$
> 
> $= \frac\pi2 f(0) + \int_0^{+\infty}(f(t/n)-f(0))\frac{\sin t}{t}dt.$
> 
> 因 $f(x)$ 在 $x=0$ 处连续, $\forall\varepsilon>0, \exists\delta>0$, 当 $|x|<\delta$ 时, $|f(x)-f(0)|<\varepsilon$.
> 
> 取 $N>\frac1\delta$, 当 $n>N$ 时, 对 $t\in[0,1]$, 有 $|t/n|<\delta$, 故 $|f(t/n)-f(0)|<\varepsilon$.
> 
> 又 $\int_0^{+\infty}\frac{|\sin t|}{t}dt$ 发散, 但 $\int_0^1\frac{|\sin t|}{t}dt$ 收敛, $\int_1^{+\infty}\frac{|\sin t|}{t}dt$ 收敛（由 Dirichlet 判别法）.
> 
> 故 $|\int_0^{+\infty}(f(t/n)-f(0))\frac{\sin t}{t}dt|$
> 
> $\leq \int_0^1|f(t/n)-f(0)|\frac{|\sin t|}{t}dt + \int_1^{+\infty}|f(t/n)-f(0)|\frac{|\sin t|}{t}dt$
> 
> $\leq \varepsilon\int_0^1\frac{|\sin t|}{t}dt + \max_{x\geq 0}|f(x)-f(0)|\cdot\int_1^{+\infty}\frac{|\sin t|}{t}dt.$
> 
> 由 $\varepsilon$ 的任意性, 知 $\lim_{n\to\infty}\int_0^{+\infty}(f(t/n)-f(0))\frac{\sin t}{t}dt = 0$.
> 
> 故 $\lim_{n\to\infty}\int_0^{+\infty}f(x)\frac{\sin nx}{x}dx = \frac\pi2 f(0).$

7.1.22 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 绝对收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin^2(nx+\alpha)dx = \frac12\int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可利用 $\sin^2(nx+\alpha) = \frac{1-\cos(2nx+2\alpha)}{2}$.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)\sin^2(nx+\alpha)dx = \frac12\int_0^{+\infty}f(x)dx - \frac12\int_0^{+\infty}f(x)\cos(2nx+2\alpha)dx.$
> 
> 由 Riemann 引理, $\lim_{n\to\infty}\int_0^{+\infty}f(x)\cos(2nx+2\alpha)dx = 0$.
> 
> 故 $\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin^2(nx+\alpha)dx = \frac12\int_0^{+\infty}f(x)dx.$

7.1.23 设 $f(x)$ 在 $[0,+\infty)$ 上连续, 且 $\int_0^{+\infty}f(x)dx$ 收敛, 证明:
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)e^{-\frac{x}{n}}dx = \int_0^{+\infty}f(x)dx.
$$

> [!hint]- 提示
> 可用 Abel 判别法.

> [!hint]- 再提示
> $\int_0^{+\infty}f(x)dx$ 收敛（关于 $n$ 一致）. $e^{-\frac{x}{n}}$ 固定 $n$ 后对 $x$ 单调, $|e^{-\frac{x}{n}}|\leq 1$ 一致有界. 用 Abel 判别法可知 $\int_0^{+\infty}f(x)e^{-\frac{x}{n}}dx$ 关于 $n\in[1,+\infty)$ 一致收敛, 可在积分号下取极限.

☆7.1.24 利用 $\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}$ 计算积分 $\int_0^{+\infty}\frac{x\,dx}{1+e^x}.$

> [!hint]- 提示
> 原式$=\int_0^{+\infty}x\frac{e^{-x}}{1+e^{-x}}dx$
> 
> $=\int_0^{+\infty}x\sum_{n=1}^{\infty}(-1)^{n+1}e^{-nx}dx$
> 
> $=\int_0^{+\infty}\sum_{n=1}^{\infty}(-1)^{n+1}xe^{-nx}dx$
> 
> $=\sum_{n=1}^{\infty}\int_0^{+\infty}(-1)^{n+1}xe^{-nx}dx$
> 
> $=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}$
> 
> $=\sum_{n=1}^{\infty}\frac1{n^2}-2\sum_{n=1}^{\infty}\frac1{(2n)^2}$
> 
> $=\frac12\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{12}.$
> 
> 要证明逐项积分的合理，可先证
> $\int_0^A\sum_{n=1}^{\infty}(-1)^{n+1}xe^{-nx}dx$ 可逐项积分，然后令 $A\to+\infty$，可逐项取极限.

7.1.25 设任意 $a>0$，$f(x)$ 在$[0,a]$上 Riemann 可积，且 $\lim_{x\to+\infty}f(x)=C$，证明：
$$
\lim_{t\to0^+}t\int_0^{+\infty}e^{-tx}f(x)dx=C.
$$

（南开大学）

> [!hint]- 提示
> （拟合法（参看例4.1.5））
> 
> $|t\int_0^{+\infty}e^{-tx}f(x)dx-C|$
> $=|t\int_0^{+\infty}e^{-tx}(f(x)-C)dx|$
> $\leq t\int_0^{+\infty}e^{-tx}|f(x)-C|dx$
> 
> $=t\int_0^Ae^{-tx}|f(x)-C|dx+t\int_A^{+\infty}e^{-tx}|f(x)-C|dx=I_1+I_2.$

> [!hint]- 再提示
> 因 $\lim_{x\to+\infty}f(x)=C$，$\forall\varepsilon>0$，$\exists A>0$，当 $x\geq A$ 时有 $|f(x)-C|<\frac{\varepsilon}{2}$. 于是
> 
> $I_2=t\int_A^{+\infty}e^{-tx}|f(x)-C|dx$
> $\leq\frac{\varepsilon}{2}t\int_A^{+\infty}e^{-tx}dx$
> $=-\frac{\varepsilon}{2}\int_A^{+\infty}de^{-tx}$
> $=\frac{\varepsilon}{2}e^{-tA}<\frac{\varepsilon}{2}$ （因为 $tA>0$）.
> 
> （上面 $A$ 已被取定）又因 $t\to0^+$，对上述 $\varepsilon$，当 $0<t<\frac1A$ 时，
> 
> $I_1=t\int_0^Ae^{-tx}|f(x)-C|dx$
> $<\frac1A\int_0^A1\cdot\frac{\varepsilon}{2}dx=\frac{\varepsilon}{2}.$

7.1.26 已知
$$
f(x)=\int_0^{+\infty}\frac{e^{-xt^2}}{1+t^2}dt\quad (x>0),
$$
证明：
$$
f(x)-f'(x)=\frac1{\sqrt{x}}\int_0^{+\infty}e^{-u^2}du.
$$

> [!hint]- 提示
> $\forall \alpha>0$，$\frac{e^{-xt^2}}{1+t^2}$ 和
> $|\left(\frac{e^{-xt^2}}{1+t^2}\right)'_x|$
> $=\frac{t^2e^{-xt^2}}{1+t^2}$
> 都以 $M(t)=e^{-\alpha t^2}$ 为优函数（$x>\alpha>0$），
> 
> $f(x)-f'(x)=\int_0^{+\infty}\frac{1-(-t^2)}{1+t^2}e^{-xt^2}dt$
> $\stackrel{令\sqrt{x}t=u}{=}$
> $\frac1{\sqrt{x}}\int_0^{+\infty}e^{-u^2}du.$

7.1.27 设
$$
P(x)=\int_0^{+\infty}\frac{e^{-tx}}{1+t^2}dt\quad (x\geq0),
$$
$$
Q(x)=\int_0^{+\infty}\frac{\sin t}{t+x}dt\quad (x\geq0),
$$
求证：$P$，$Q$ 都满足方程
$$
\frac{d^2y}{dx^2}+y=\frac1x\quad (x>0),
$$
从而 $P=Q$.

> [!hint]- 提示
> 1° 记 $f(x,t)=\frac{e^{-tx}}{1+t^2}$，则在 $(0,+\infty)$ 上 $f$，$f'_x$，$f''_{xx}$ 都有优函数 $M(t)$：$M(t)\equiv\frac1{1+t^2}$，而
> $\int_0^{+\infty}\frac1{1+t^2}dx$ 收敛，故 $P(x)$ 在$(0,+\infty)$内二次可导，且
> 
> $P''(x)+P(x)=\int_0^{+\infty}\left[\frac{(-t)^2}{1+t^2}e^{-tx}+\frac1{1+t^2}e^{-tx}\right]dt=\frac1x$
> （说明 $P(x)$ 满足方程）.
> 
> 2° 记 $g(x,t)=\frac{\sin t}{t+x}$，此时：$(g,g'_x,g''_{xx})=$
> $\left(\frac{\sin t}{t+x},-\frac{\sin t}{(t+x)^2},\frac{2\sin t}{(t+x)^3}\right)$，
> （由 Dirichlet 判别法知）积分都一致收敛，故被积函数连续，且在积分号下可求导（二次），
> 
> $Q''(x)=\int_0^{+\infty}\frac{2\sin t}{(t+x)^3}dt.$ (1)
> 
> 于是
> $Q(x)=\int_0^{+\infty}\frac{\sin t}{t+x}dt$
> $=-\int_0^{+\infty}\frac1{t+x}d(\cos t)$
> $\stackrel{分部积分}{=}$
> $\frac1x-\int_0^{+\infty}\frac{\cos t\,dt}{(t+x)^2}.$ (2)
> 
> 其中
> $\int_0^{+\infty}\frac{\cos t\,dt}{(t+x)^2}$
> $=\int_0^{+\infty}\frac{d(\sin t)}{(t+x)^2}$
> $\stackrel{分部积分}{=}$
> $\int_0^{+\infty}\frac{2\sin t}{(t+x)^3}dt$
> $\stackrel{(1)}{=}Q''(x).$
> 
> 因此
> $Q(x)=\frac1x-Q''(x)$
> （即 $Q(x)$ 满足微分方程）.
> 
> （或
> $Q''(x)=\int_0^{+\infty}\frac{2\sin t}{(t+x)^3}dt$
> $=-\int_0^{+\infty}\sin t\,d\frac1{(t+x)^2}$
> $=\int_0^{+\infty}\frac{\cos t\,dt}{(t+x)^2}$
> $=-\int_0^{+\infty}\frac{\cos t\,dt}{t+x}=\frac1x-Q(x)$
> （即 $Q(x)$ 满足微分方程）.）

> [!hint]- 再提示
> 既然 $P(x)$，$Q(x)$ 都满足方程，则 $W(x)\stackrel{记}{=}P(x)-Q(x)$ 满足齐次方程：
> 
> $y''+y=0.$ (3)
> 
> （利用微分方程知识）设 $y=e^{rx}$，代入式(3)得 $e^{rx}(r^2+1)=0$，$r=\pm\sqrt{-1}=\pm i$，
> 
> $y_{1,2}=e^{\pm xi}=\cos x\pm i\sin x.$
> 
> 得
> $\cos x=\frac{y_1+y_2}{2}$，$\sin x=\frac{y_1-y_2}{2i}$
> 
> 是齐次方程两个特解，因此齐次方程的通解为 $y=C_1\cos x+C_2\sin x.$
> 令
> 
> $W(x)=C_1\cos x+C_2\sin x,$ (4)
> 
> 注意：
> 
> $W(x)|_{x=0^+}=P(0^+)-Q(0^+)=\int_0^{+\infty}\frac{dt}{1+t^2}-\int_0^{+\infty}\frac{\sin t\,dt}{t}$
> $\stackrel{例7.1.38}{=}\frac{\pi}{2}-\frac{\pi}{2}=0.$ (5)
> 
> $|P(x)|=|\int_0^{+\infty}\frac{e^{-tx}}{1+t^2}dt|$
> $\leq\int_0^{+\infty}e^{-tx}dt=\frac1x\to 0\quad (x\to+\infty).$ (6)
> 
> 由式(2)，
> $Q(x)=\frac1x-\int_0^{+\infty}\frac{\cos t\,dt}{(t+x)^2}\to 0\quad (x\to+\infty).$ (7)
> 
> 因为
> $|\int_0^{+\infty}\frac{\cos t\,dt}{(t+x)^2}|$
> $\leq\int_0^{+\infty}\frac{dt}{(t+x)^2}$
> $\stackrel{令\,t+x=u}{=}\int_x^{+\infty}\frac{du}{u^2}\to 0\quad (x\to+\infty)$，
> 所以
> 
> $W(+\infty)=P(+\infty)-Q(+\infty)\stackrel{式(6),(7)}{=}0-0=0.$ (8)
> 
> 式(5)代入式(4)得 $C_1=0$. 进而 $C_2=0$（否则 $W(+\infty)=C_2\sin x\big|_{x\to+\infty}$ 无极限，但 $W(+\infty)=0$，矛盾）. 回到(4)，可见 $W(x)\equiv 0$，即 $P(x)\equiv Q(x).$

7.1.28 求证：

1）$\int_0^{+\infty}e^{-x^2}\cos 2xydx=\frac{\sqrt{\pi}}{2}e^{-y^2};$

2）$\int_0^{\frac{\pi}{2}}\ln\frac{1+k\sin\theta}{1-k\sin\theta}\cdot\frac{d\theta}{\sin\theta}=\pi\arcsin k\quad (|k|<1).$

> [!hint]- 提示
> 1）看例7.1.37.  2）看例7.1.8.

7.1.29 计算积分
$$
I=\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}}\left(\frac{\cos\varphi+\sin\varphi}{\cos\varphi-\sin\varphi}\right)^{\sin 2\alpha}d\varphi.
$$

> [!hint]- 提示
> 先令 $x=\tan\varphi$，再令 $u=\frac12\cdot\frac{(1+x)^2}{1+x^2}$，则
> $I=\frac12\,B(\cos^2\alpha,1-\cos^2\alpha).$

7.1.30 计算 A.J. Fresnel 积分

1）$\int_0^{+\infty}\sin x^2dx$；

2）$\int_0^{+\infty}\cos x^2dx.$

> [!hint]- 提示
> 先令 $x^2=t$，再利用
> $\frac1{\sqrt{t}}=\frac2{\sqrt{\pi}}\int_0^{+\infty}e^{-u^2t}du.$

7.1.31 试证：
$$
\int_0^{+\infty}\frac{x^{s-1}}{e^x+1}dx=\Gamma(s)(1-2^{1-s})\zeta(s)\quad (s>1),
$$
其中 $\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}.$

> [!hint]- 提示
> $\frac1{e^x+1}=\sum_{n=1}^{\infty}(-1)^{n-1}e^{-nx}.$

7.1.32 设 $y=f(x)$ 在$(-\infty,+\infty)$上有定义，在任意有穷区间$[a,b]$上有界并可积，且
$$
\int_{-\infty}^{+\infty}|f(x)|^2dx<+\infty.
$$
又设 $\alpha$ 是一实常数，$\frac12<\alpha<1$. 证明：

1）积分 $\int_{-\infty}^{+\infty}\frac{f(x)}{(x-t)^\alpha}dx$ 收敛；

2）$\varphi(t)=\int_{-\infty}^{+\infty}\frac{f(x)}{(x-t)^\alpha}dx$ 连续.（北京大学）

> [!hint]- 提示
> 参考例7.1.29 和 Schwarz 不等式（见例4.4.1前的定理2）.

7.1.33 设 $f(x)$ 是 R 上的连续函数. 若 $I(y)=\int_0^{+\infty}f(x+y)dx$ 在 R 上一致收敛（关于 $y\in R$），试证：在 R 上 $f(x)\equiv 0$.（华东师范大学）

> [!hint]- 提示
> 由积分 $I(y)$ 在 R 上一致收敛知，$\forall A',A''\in R$，
> $|\int_{A'}^{A''}f(x)dx|=0$，
> 即 $f(x)\equiv 0.$

> [!proof]- 证
> $\int_0^{+\infty}f(x+y)dx$ 一致收敛（关于 $y\in R$），表明 $\forall\varepsilon_n=\frac1n>0$，$\exists A>0$，当 $A''>A'>A$ 时，
> 
> $|\int_{A'}^{A''}f(x+y)dx|<\varepsilon_n=\frac1n\quad (\forall y\in R).$
> 
> 令 $t=x+y$，即得
> $|\int_{A'+y}^{A''+y}f(t)dt|<\varepsilon_n=\frac1n\quad (\forall y\in R).$
> 
> 因 $y\in R$ 的任意性，知 $\forall A',A''\in R$，$\forall\varepsilon=\frac1n>0$，有
> $|\int_{A'}^{A''}f(x)dx|<\varepsilon=\frac1n\to 0\quad (n\to\infty).$
> 故 $\forall A',A''\in R$，$\int_{A'}^{A''}f(x)dx=0$，$f(x)$ 连续，有保号性，即 $f(x)=0.$

7.1.34 已知 $f(x)$ 是$[0,+\infty)$上的单调连续函数，且 $\lim_{x\to+\infty}f(x)=0$. 求证：
$$
\lim_{n\to\infty}\int_0^{+\infty}f(x)\sin nxdx=0. \qquad (1)
$$

（北京大学）

> [!proof]- 证
> 1° 因为
> $|\int_0^A\sin nxdx|=\frac1n|\cos nA-\cos 0|\leq 2$
> （对 $n$ 一致有界），
> 
> 且 $f(x)$ 单调趋向零（当然关于 $n$ 一致），（利用 Dirichlet 判别法）知
> $\int_0^{+\infty}f(x)\sin nxdx$
> （关于 $n$）一致收敛. 因此 $\forall\varepsilon>0$，$\exists A>0$，当 $\lambda>A$ 时，有
> 
> $0\leq|\int_A^{+\infty}f(x)\sin nxdx|\leq\frac{\varepsilon}{2}\quad (\forall n\in N).$ (2)
> 
> 2° 应用 Riemann 引理（例4.1.10），
> 
> $\lim_{n\to\infty}\int_0^Af(x)\sin nxdx$
> $=\frac1{2\pi}\int_0^{2\pi}\sin xdx\cdot\int_0^Af(x)dx=0.$ (3)
> 
> 3° 因此，对上述 $\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，有
> 
> $|\int_0^Af(x)\sin nxdx|<\frac{\varepsilon}{2}.$ (4)
> 
> 故式(1)成立。

> [!note] 注
> 假若本题不是要求会应用 Riemann 引理，而是要求掌握它的证明方法，如(题目)规定不许采用 Riemann 引理，您怎么办呢？

**7.1.35 已知 $f(x)$ 是 $[0,+\infty)$ 上的单调连续函数，且 $\lim_{x\to+\infty}f(x)=0$，试(不应用 Riemann 引理)直接证明：
$$
\lim_{n\to+\infty} \int_0^{+\infty} f(x)\sin nxdx = 0. \qquad (1)
$$

> [!proof]- 证
> (重复上题 1°的内容)知 $\int_0^{+\infty} f(x)\sin nxdx$ (关于 $n$)一致收敛。因此，$\forall \varepsilon>0$，$\exists \Delta>0$，当 $A>\Delta$ 时，有
> 
> $0\leq|\int_A^{+\infty} f(x)\sin nxdx|\leq \varepsilon/2 \quad (\forall n\in N).$ (2)
> 
> (注意：取一个充分大的正整数 $k>0$，使得 $A_k = 2k\pi/n > \Delta$，那么上题式(2)仍然成立。剩下的任务是：(不利用 Riemann 引理)直接证明上题式(3)成立。)
> 
> 将 $[0,A_k]=[0,2k\pi/n]$ $k$ 等分，作分划，记作：$0=x_0<x_1<x_2<\cdots<x_k=A_k$，此时每个小区间长度为 $2\pi/n$.
> 
> $\int_0^{A_k} f(x)\sin nxdx = \sum_{i=0}^{k-1} \int_{x_i}^{x_{i+1}} f(x)\sin nxdx$
> $\xlongequal{令 u=nx} \sum_{i=0}^{k-1} \frac1n \int_{nx_i}^{nx_{i+1}} f(u/n)\sin u\,du.$ (3)
> 
> 注意：变换后每个小区间扩大 $n$ 倍，$\sin u$ 在每个 $[nx_i,nx_{i+1}]$ 里振动 $n$ 次，走过 $n$ 个周期。将 $[x_i,x_{i+1}]$ 进一步作 $n$ 等分：
> 
> $x_i = x_{i0} < x_{i1} < x_{i2} < \cdots < x_{in} = x_{i+1}$，$x_{i,j+1}-x_{ij}=2\pi/n$.
> 
> 并用 $c_{ij}$ 表示 $[x_{ij},x_{i,j+1}]$ 的中点：$c_{ij}=(x_{ij}+x_{i,j+1})/2$，那么 $[x_{ij},c_{ij}]$ 是 $\sin u$ 的前半周期：$\sin u\geq 0$；$[c_{ij},x_{i,j+1}]$ 是 $\sin u$ 的后半周期：$\sin u\leq 0$。在半周期里，$\sin u$ 保持不变号，因此可以应用第一积分中值定理：
> 
> $\int_{x_i}^{x_{i+1}} f(x)\sin nxdx$
> $= \frac1n [ \sum_{j=0}^{n-1} ( f(\xi_{ij})\int_{x_{ij}}^{c_{ij}} \sin u\,du + f(\eta_{ij})\int_{c_{ij}}^{x_{i,j+1}} \sin u\,du ) ]$ (4)
> 
> ($\xi_{ij}\in[x_{ij},c_{ij}]$，$\eta_{ij}\in[c_{ij},x_{i,j+1}]$). 注意到
> 
> $\int_{x_{ij}}^{c_{ij}} \sin u\,du = 2$，$\int_{c_{ij}}^{x_{i,j+1}} \sin u\,du = -2.$ (5)
> 
> 式(5)代入式(4)：
> 
> $\int_{x_i}^{x_{i+1}} f(x)\sin nxdx$
> $= \frac{2}{n} ( \sum_{j=0}^{n-1} (f(\xi_{ij})-f(\eta_{ij})) )$
> $= \frac{1}{\pi} \cdot \sum_{j=0}^{n-1} (f(\xi_{ij})-f(\eta_{ij})) \cdot \frac{2\pi}{n}.$ (6)
> 
> 式(6)代入式(3)：
> 
> $\int_0^{A_k} f(x)\sin nxdx$
> $= \sum_{i=0}^{k-1} \int_{x_i}^{x_{i+1}} f(x)\sin nxdx$
> $= \frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} (f(\xi_{ij})-f(\eta_{ij})) \cdot \frac{2\pi}{n}.$ (7)
> 
> 其中 $\sum_{i=0}^{k-1} \sum_{j=0}^{n-1} (f(\xi_{ij})-f(\eta_{ij})) \cdot \frac{2\pi}{n}$ 等于将 $[0,A_k]=[0,2k\pi]$ 以 $kn$ 等分作为分划，每个小区间长度为 $2\pi/n$，$u=nx$ 走过此区间，等价于 $\sin u$ 走完一个周期；$\xi_{ij}$ 和 $\eta_{ij}$ 分别是该周期的两点，因此
> 
> $|f(\xi_{ij})-f(\eta_{ij})|\leq\omega'_{ij}.$ (8)
> 
> ($\omega'_{ij}$ 表示 $f$ 在 $[x_{ij},x_{i,j+1}]$ 上的振幅。) 因 $f$ 在 $[0,A_k]$ 上连续、可积，
> $\lim_{n\to\infty} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} \omega'_{ij}\cdot\frac{2\pi}{n} = 0$，
> 所以 $\forall \varepsilon>0$，$\exists N>0$，当 $n>N$ 时，有
> 
> $\frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} \omega'_{ij}\cdot\frac{2\pi}{n} < \varepsilon/2.$ (9)
> 
> 故
> 
> $|\int_0^{A_k} f(x)\sin nxdx|$
> $\leq \frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} |f(\xi_{ij})-f(\eta_{ij})|\cdot\frac{2\pi}{n}$
> $\leq \frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} \omega'_{ij}\cdot\frac{2\pi}{n} < \varepsilon/2.$ (10)
> 
> (或用
> $|\int_0^{A_k} f(x)\sin nxdx|$
> $\leq \frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} |f(\xi_{ij})-f(\eta_{ij})|\cdot\frac{2\pi}{n}$ （记 $F_k=\int_0^1 f(x)dx$）
> $\leq \frac{1}{\pi} \sum_{i=0}^{k-1} \sum_{j=0}^{n-1} ( |f(\xi_{ij})-F_k| + |F_k-f(\eta_{ij})| )\cdot\frac{2\pi}{n} < \varepsilon/2.$)
> 
> 总之，取正整数 $k$ 充分大，使得 $A_k=2k\pi>\Delta$，利用式(2)得
> 
> $0\leq|\int_{A_k}^{+\infty} f(x)\sin nxdx|\leq \varepsilon/2 \quad (\forall n\in N).$ (11)
> 
> 于是
> 
> $|\int_0^{+\infty} f(x)\sin nxdx|$
> $\leq |\int_0^{A_k} f(x)\sin nxdx| + |\int_{A_k}^{+\infty} f(x)\sin nxdx| < \varepsilon/2 + \varepsilon/2 = \varepsilon.$
> 
> (这表明上题式(3)已被直接证得。)


## §7.2 重积分

本节将讨论二重积分，三重积分，反常的二、三重积分及 n 重积分中的有关问题。


### ☆一、二重积分

导读 二重积分不仅是考研和赛题中"常客"，而且是计算三重积分、曲面积分的重要基础，本书各类读者务必多加注意。不过与以后各节相比，本节内容相对较易.

下面我们来讨论二重积分定义的应用，可积性的证明，以及二重积分的计算.


#### a. 二重积分定义的应用

> [!note]
> 二重积分跟(一重)定积分一样，被定义为积分和的极限。因此利用定义，可将某些极限转化为二重积分.

> [!example] ☆例 7.2.1
> 设 $f(x,y)$ 于闭区域 $0\leq x\leq 1, 0\leq y\leq 1$ 上(正常)可积，试证明：
> 
> $$\lim_{n\to\infty} \prod_{\mu=1}^n \prod_{\nu=1}^n \left[1+\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right] = e^{\int_0^1\int_0^1 f(x,y)\,dxdy}$$
> 
> (南京大学)

> [!note]- 分析
> 因为
> 
> $$\text{式(1)右端} = e^{\lim_{n\to\infty} \sum_{\mu=1}^n \sum_{\nu=1}^n \frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)}$$
> 
> $$\text{式(1)左端} = e^{\lim_{n\to\infty} \sum_{\mu=1}^n \sum_{\nu=1}^n \ln\left[1+\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right]}$$
> 
> 要证明式(1)，只要证明
> 
> $$\lim_{n\to\infty} \left\{ \sum_{\mu=1}^n \sum_{\nu=1}^n \ln\left[1+\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right] - \sum_{\mu=1}^n \sum_{\nu=1}^n \frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right) \right\} = 0$$
> 
> 或
> 
> $$\lim_{n\to\infty} \sum_{\mu=1}^n \sum_{\nu=1}^n \left| \ln\left[1+\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right] - \frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right) \right| = 0$$
> 
> 已知不等式
> 
> $$|\ln(1+x)-x|\leq x^2 \quad (|x|<1/2)$$
> 
> 并注意到 $f$ 在 $[0,1;0,1]$ 上可积，从而有界：$\sup|f(x,y)|\equiv M<+\infty$。$n$ 充分大时，恒有
> 
> $$\left|\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right|\leq\frac{M}{n^2}<\frac{1}{2}$$
> 
> 于是可用式(2)，
> 
> $$\sum_{\mu=1}^n \sum_{\nu=1}^n \left| \ln\left[1+\frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right)\right] - \frac{1}{n^2} f\left(\frac{\mu}{n},\frac{\nu}{n}\right) \right|$$
> 
> $$\leq \frac{1}{n^2} \sum_{\mu=1}^n \sum_{\nu=1}^n f^2\left(\frac{\mu}{n},\frac{\nu}{n}\right) \cdot \frac{1}{n^2}$$
> 
> $$\to 0\cdot\int_0^1\int_0^1 f^2(x,y)\,dxdy = 0 \quad (n\to\infty)$$


#### b. 证明可积性

> [!note]
> 根据可积的判别定理，若 f 在有界闭区域 D 上有界，只要证明：∀ ε>0，存在分划 T，使得
> 
> $$\Sigma_{i=1}^n \omega_i\Delta D_i < \varepsilon.$$
> 
> 或者证明：有一串分划 $\{T_k\}$，其最大直径趋向零，使得
> 
> $$\Sigma_{i=1}^{n_k} \omega_i^{(k)}\Delta D_i^{(k)} \to 0 \quad (k\to\infty)，$$
> 
> 则 f 在区域 D 上可积，这里 $\Delta D_1,\cdots,\Delta D_n$ 是 D 的一个分划，$\Delta D_i$ 表示第 i 个小区域，同时也表示它的面积，$\omega_i$ 是 f 在 $\Delta D_i$ 上的振幅，即 $\omega_i=M_i-m_i$，其中
> 
> $$M_i=\sup_{P\in\Delta D_i} f(P)，\quad m_i=\inf_{P\in\Delta D_i} f(P) \quad (i=1,2,\cdots,n).$$

> [!example] ☆ 例 7.2.2
> 设二元函数 $f(x,y)$ 在 $D=\{(x,y)|\, a\le x\le b,\, c\le y\le d\}$ 上有定义，并且 $f(x,y)$ 对于确定的 $x\in[a,b]$ 是对 y 在 $[c,d]$ 上单调增加函数，对于确定的 $y\in[c,d]$ 是对 x 在 $[a,b]$ 上单调增加函数，证明 $f(x,y)$ 在 D 上可积. (南昌大学)

> [!proof]- 证
> 在 x 轴上将 $[a,b]$ n 等分，在 y 轴上将 $[c,d]$ n 等分，得分划
> 
> $$a=x_0<x_1<x_2<\cdots<x_n=b,$$
> 
> $$c=y_0<y_1<y_2<\cdots<y_n=d.$$
> 
> 过这些等分点作平行于坐标轴的直线，将区域 D 分成 $n^2$ 个小矩形，如图 7.2.1。显然，当 $n\to\infty$ 时，小矩形直径趋向零。小矩形的面积为
> 
> $$\frac{(b-a)(d-c)}{n^2} \equiv \frac{\Delta}{n^2}.$$
> 
> 若能证明 $\Sigma_{i,j=1}^n \omega_{ij} \frac{\Delta}{n^2} \to 0$ $(n\to\infty)$，则 f 在 D 上可积.
> 
> 注意到 f 分别关于 $x,y$ 递增，所以在每个小矩形上，$\omega_{ij}=f(x_i,y_j)-f(x_{i-1},y_{j-1})$，
> 
> $$\Sigma_{i,j=1}^n \omega_{ij} \frac{\Delta}{n^2} = \frac{\Delta}{n^2} \Sigma_{i,j=1}^n ( f(x_i,y_j)-f(x_{i-1},y_{j-1}) ).$$
> 
> 相加时，D 内部每个网点上，值 $f(x_i,y_j)$ 各取了两次，一正一负，被消去，只剩下边界网点之值。因此
> 
> $$\Sigma_{i,j=1}^n \omega_{ij} \frac{\Delta}{n^2} = \frac{\Delta}{n^2} \left[ \Sigma_{i=1}^n (f(x_i,y_n)-f(x_0,y_{i-1})) + \Sigma_{i=1}^n (f(x_n,y_i)-f(x_{i-1},y_0)) \right].$$
> 
> 但
> 
> $$f(x_i,y_n)-f(x_0,y_{i-1})\le f(x_n,y_n)-f(x_0,y_0)，$$
> 
> $$f(x_n,y_i)-f(x_{i-1},y_0)\le f(x_n,y_n)-f(x_0,y_0)，$$
> 
> 所以
> 
> $$\Sigma_{i,j=1}^n \omega_{ij} \frac{\Delta}{n^2} \le \frac{\Delta}{n^2} [f(x_n,y_n)-f(x_0,y_0)]\cdot 2n = \frac{2\Delta}{n} [f(b,d)-f(a,c)] \to 0 \quad (n\to\infty).$$
> 
> 故 f 在 D 上可积.

---

**练习1** 证明：$f(x)$在$[0,1]$上可积的充要条件是：$F(x,y)=f(x)$在$[0,1]\times[0,1]$上可积. (北京大学)

> [!note]- 分析
> $F(x,y)=f(x)$ 表明曲面 $z=F(x,y)$ 取值只依赖于 x，与 y 无关；当点 $(x,y)$ 在 xOy 平面上平行 y 轴移动时，z 值不变，亦即：$z=F(x,y)$ 可看成曲线 $z=f(x)$ 沿 y 轴方向平行移动生成的柱面.

> [!hint]- 提示
> 作分划
> 
> $$0=x_0<x_1<\cdots<x_n=1，\text{记} \Delta x_i=x_i-x_{i-1}，$$
> 
> $$0=y_0<y_1<\cdots<y_m=1，\text{记} \Delta y_j=y_j-y_{j-1}，$$
> 
> 则
> 
> $$\Delta D_{ij}\equiv\Delta x_i\cdot\Delta y_j.$$
> 
> $\Delta D_{ij}$ 上的振幅
> 
> $$\Omega_{ij}\equiv\sup\{F(x,y)|(x,y)\in[x_{i-1},x_i]\times[y_{j-1},y_j]\} - \inf\{F(x,y)|(x,y)\in[x_{i-1},x_i]\times[y_{j-1},y_j]\},$$
> 
> 对应的
> 
> $$\omega_i\equiv\sup\{f(x)|x\in[x_{i-1},x_i]\} - \inf\{f(x)|x\in[x_{i-1},x_i]\}.$$
> 
> 可见 ∀ $i=1,2,\cdots,n$，
> 
> $$\Omega_{ij}=\omega_i \quad (\forall j=1,2,\cdots,m)；$$
> 
> $$\Sigma_{i,j} \Omega_{ij}\Delta D_{ij} = \Sigma_i \Sigma_j (\omega_i\Delta x_i\Delta y_j) = \Sigma_i (\omega_i\Delta x_i \Sigma_j \Delta y_j) = \Sigma_i \omega_i\Delta x_i.$$
> 
> 故
> 
> $$f(x) \text{ 在 } [0,1] \text{ 上可积} \Leftrightarrow \lim_{\lambda\to 0} \Sigma_i \omega_i\Delta x_i = 0 \Leftrightarrow \lim_{\Lambda\to 0} \Sigma_{i,j} \Omega_{ij}\Delta D_{ij} = 0$$
> 
> $$\Leftrightarrow F(x,y)=f(x) \text{ 在 } [0,1]\times[0,1] \text{ 上可积}$$
> 
> (其中 $\lambda=\max_{i=1,2,\cdots,n}|\Delta x_i|$，$\Lambda=\max_{i=1,2,\cdots,n;\, j=1,2,\cdots,m}\{\Delta x_i,\Delta y_j\}$).

---

**练习2** 设 $f(x)$ 是 $\mathbb{R}$ 上的有界连续函数，

$$g(x) = \frac{1}{h^2} \int_{-h/2}^{h/2} \int_{-h/2}^{h/2} f(x+u+v)\,du\,dv.$$

试证：$g(x)$ 有二阶连续导数，且

$$\|g-f\|\le\omega_2(f,g)，$$

其中

$$\|g-f\| = \max_{-\infty<x<+\infty} |g(x)-f(x)|，$$

$$\omega_2(f,g) = \sup_{0<\xi^*<+\infty} |f(x+\xi^*)+f(x-\xi^*)-2f(x)|.$$

> [!proof]- 证
> **1°** $g(x)$
> 
> 令 $t=x+u+v$
> 
> $$= \frac{1}{h^2} \int_{-h/2}^{h/2} dv \int_{x+v-h/2}^{x+v+h/2} f(t)\,dt$$
> 
> 令 $s=x+v$
> 
> $$= \frac{1}{h^2} \int_{x-h/2}^{x+h/2} ds \int_{s-h/2}^{s+h/2} f(t)\,dt,$$
> 
> $$g'(x) = \frac{1}{h^2} \left[ \int_{x+h/2}^{x+h/2+h/2} f(t)\,dt - \int_{x-h/2}^{x-h/2+h/2} f(t)\,dt + \int_{x-h/2}^{x+h/2} (f(s+h/2)-f(s-h/2))\,ds \right]$$
> 
> $$= \frac{1}{h^2} \left( \int_{x+h/2}^{x+h} f(t)\,dt - \int_{x-h}^{x-h/2} f(t)\,dt + \int_{x-h/2}^{x+h/2} f(t)\,dt - \int_{x-h/2}^{x+h/2} f(t)\,dt \right)$$
> 
> $$= \frac{2}{h^2} \left( \int_x^{x+h} f(t)\,dt - \int_{x-h}^x f(t)\,dt \right),$$
> 
> $$g''(x)=\frac{2}{h^2} [f(x+h)+f(x-h)-2f(x)].$$
> 
> $g(x)$ 有连续二阶导数获证.
> 
> **2°** 注意：$\frac{1}{h^2} \int_{-h/2}^{h/2} \int_{-h/2}^{h/2} du\,dv = 1$，因此，$f(x)=\frac{1}{h^2} \int_{-h/2}^{h/2} \int_{-h/2}^{h/2} f(x)\,du\,dv$，
> 
> $$g(x)-f(x)=\frac{1}{h^2} \int_{-h/2}^{h/2} \int_{-h/2}^{h/2} (f(x+u+v)-f(x))\,du\,dv.$$
> 
> (类似上题)令 $u=\frac{\xi+\eta}{2}$, $v=\frac{\xi-\eta}{2}$ ($u+v=\xi$, $u-v=\eta$)，
> 
> $$|J|=\left|\frac{\partial(u,v)}{\partial(\xi,\eta)}\right|=\left| -\frac{1}{2} \right| = \frac{1}{2}.$$
> 
> 于是，$-h/2\le u\le h/2$，$-h/2\le v\le h/2$ 对应 $-h\le\xi+\eta\le h$，积分区域(如图 7.2.2)：
> 
> $$\{(\xi,\eta)|\, -h\le\eta\le 0，-h-\eta\le\xi\le h+\eta\} \cup \{(\xi,\eta)|\, 0\le\eta\le h，-h+\eta\le\xi\le h-\eta\}.$$
> 
> 故
> 
> $$g(x)-f(x) = \frac{1}{2h^2} \int_{-h}^0 d\eta \int_{-h-\eta}^{h+\eta} (f(x+\xi)-f(x))\,d\xi + \frac{1}{2h^2} \int_0^h d\eta \int_{-h+\eta}^{h-\eta} (f(x+\xi)-f(x))\,d\xi$$
> 
> $$= I_1 + I_2,$$
> 
> $$I_1 = \frac{1}{2h^2}\int_{-h}^0 d\eta\int_{-h}^{h+\eta}(f(x+\xi)-f(x))\,d\xi = I_2.$$
> 
> 于是
> 
> $$g(x)-f(x)=2I_2=\frac{1}{h^2}\int_0^h d\eta\int_{-h+\eta}^{h-\eta}(f(x+\xi)-f(x))\,d\xi$$
> 
> $$= \frac{1}{h^2}\int_0^h d\eta\int_0^{h-\eta}(f(x+\xi)-f(x))\,d\xi + \frac{1}{h^2}\int_0^h d\eta\int_{-h+\eta}^0(f(x+\xi)-f(x))\,d\xi$$
> 
> $$= I_3+I_4.$$
> 
> （给 $I_4$ 里层的积分，作 $I_1$ 类似的变换。）
> 
> $$I_4=\frac{1}{h^2}\int_0^h d\eta\int_{-h+\eta}^0(f(x+\xi)-f(x))\,d\xi = \frac{1}{h^2}\int_0^h d\eta\int_0^{h-\eta}(f(x-\xi)-f(x))\,d\xi.$$
> 
> 代入上式，合并得
> 
> $$|g(x)-f(x)|\le \frac{1}{h^2}\int_0^h d\eta\int_0^{h-\eta}|f(x+\xi)+f(x-\xi)-2f(x)|\,d\xi$$
> 
> $$=\frac{1}{h}\int_0^{h-\eta^*}|f(x+\xi)+f(x-\xi)-2f(x)|\,d\xi$$
> 
> （利用第一积分中值定理，$\exists\,\eta^*$：$0<\eta^*<h$）
> 
> $$=|f(x+\xi^*)+f(x-\xi^*)-2f(x)|\frac{h-\eta^*}{h}$$
> 
> （利用第一积分中值定理，$\exists\,\xi^*$：$0<\xi^*<h-\eta^*<h$）
> 
> $$\le |f(x+\xi^*)+f(x-\xi^*)-2f(x)|$$
> 
> $$\le \sup_{-\infty<x<\infty,\,0<\xi^*<h}|f(x+\xi^*)+f(x-\xi^*)-2f(x)|=\omega_2(f,g),$$
> 
> 亦即 $\|g(x)-f(x)\|=\max_{-\infty<x<+\infty}|g(x)-f(x)|\le \omega_2(f,g)$. 证毕。


#### c. 二重积分的计算

这里讨论二重积分与累次积分的相互转换，对称性的利用，分区域积分及换元问题。

##### 二重积分化为累次积分

> [!abstract] 要点
> 设 $f(x,y)$ 在 $xOy$ 平面有界闭区域 $D$ 上有定义，且下面出现的积分都存在，则
>
> 1）如图 7.2.3，当
>
> $$
> D_1=\{(x,y)\mid a\le x\le b,\ y_1(x)\le y\le y_2(x)\}\qquad (A)
> $$
>
> （称为 $x$-型区域）时，
>
> $$
> \iint_{D_1} f(x,y)\,dxdy=\int_a^b dx\int_{y_1(x)}^{y_2(x)} f(x,y)\,dy.\qquad (B)
> $$
>
> 2）当
>
> $$
> D_2=\{(x,y)\mid c\le y\le d,\ x_1(y)\le x\le x_2(y)\}\qquad (C)
> $$
>
> （称为 $y$-型区域）时，
>
> $$
> \iint_{D_2} f(x,y)\,dxdy=\int_c^d dy\int_{x_1(y)}^{x_2(y)} f(x,y)\,dx.\qquad (D)
> $$
>
> 若 $D=D_1=D_2$，即：它既可写成式（A）的形式，又可写成式（C）的形式（换句话说：它既是 $x$-型又是 $y$-型区域），则（B）（D）同时成立，其中的两个累次积分相等。
>
> 式（A）表明：积分区域 $D_1$ 在 $x$ 轴上的投影为区间 $[a,b]$。当 $x$ 固定在 $[a,b]$ 上时，$y$ 坐标的变化范围是 $[y_1(x),y_2(x)]$。这时 $y=y_1(x)$ 是 $D_1$ 的下沿曲线（称为穿入线），$y=y_2(x)$ 是上沿曲线（称为穿出线）。若让 $x=x_0\in[a,b]$，然后，让 $y\uparrow$，则动点 $(x_0,y)$ 沿竖直线从下沿线穿入（图形），再从上沿线穿出。可见"$x$-型区域"的特征是：$\forall x_0\in[a,b]$，纵向直线 $x=x_0$ 与区域边界最多只有两个交点。
>
> $[a,b]$ 表示积分区域 $D_1$ 各点 $x$ 坐标的变化范围，$a,b$ 分别是 $D$ 中 $x$ 坐标的最小、最大值。$[y_1(x),y_2(x)]$ 表示 $x\in[a,b]$ 时，固定 $x$，点 $(x,y)\in D_1$ 的 $y$ 坐标的变化范围。$\forall x_0\in[a,b]$，$y_1(x_0),y_2(x_0)$ 是 $\{y\mid(x_0,y)\in D_1\}$ 的最小、最大值。
>
> 同样，对于 $y$-型区域，有类似的描述。

> [!example] 例 7.2.3 改变二次积分的次序
>
> $$
> \int_0^{2a} dx\int_{\sqrt{2ax-x^2}}^{\sqrt{2ax}} f(x,y)\,dy,
> $$
>
> 其中 $f(x,y)$ 是连续函数，$a>0$.（北京理工大学）
>
> > [!analysis]- 分析
> > 原式表明：对应的二重积分区域为
> >
> > $$
> > D=\{(x,y)\mid 0\le x\le 2a,\ \sqrt{2ax-x^2}\le y\le \sqrt{2ax}\},
> > $$
> >
> > 因此 $D$ 如图 7.2.4 所示，由 $(x-a)^2+y^2=a^2$ 的上半圆，抛物线 $y^2=2ax$ 的上半支，以及竖直线 $x=2a$ 三线围成，$D=D_1\cup D_2\cup D_3$。
> >
> > 为了改变积分次序，应将区域朝 $y$ 轴投影，得到的投影区间为 $[0,2a]$。
> >
> > 当 $y=y_0\in[a,2a]$ 时，对应直线是水平直线，穿入点 $x=\frac{y_0^2}{2a}$，穿出点 $x=2a$。
> >
> > 当 $y=y_0\in[0,a]$ 时，对应的水平线从 $x=\frac{y_0^2}{2a}$ 处穿入，从 $(x-a)^2+y^2=a^2$ 的左半圆穿出，穿出点 $x=a-\sqrt{a^2-y^2}$；当 $x$ 继续增大时，动点继续右移，又从 $(x-a)^2+y^2=a^2$ 的右半圆再次穿入 $D$ 区域，此处 $x=a+\sqrt{a^2-y^2}$，最后动点从 $x=2a$ 处穿出。
>
> > [!solution]- 解
> > $$
> > \begin{aligned}
> > \text{原式} &= \iint_D f(x,y)\,dxdy \\
> > &= \iint_{D_1} f(x,y)\,dxdy+\iint_{D_2} f(x,y)\,dxdy+\iint_{D_3} f(x,y)\,dxdy \\
> > &= \int_a^{2a} dy\int_{y^2/2a}^{2a} f(x,y)\,dx + \int_0^a dy\int_{y^2/2a}^{a-\sqrt{a^2-y^2}} f(x,y)\,dx \\
> > &\quad + \int_0^a dy\int_{a+\sqrt{a^2-y^2}}^{2a} f(x,y)\,dx.
> > \end{aligned}
> > $$

> [!example] 例 7.2.4 设 $f(x,y)$ 是二元连续函数，$D$ 是 $y=a$，$y=x$，$x=b$ 所围成的区域，证明：
>
> $$
> \iint_D f(x,y)\,dxdy=\int_a^b dx\int_a^x f(x,y)\,dy=\int_a^b dy\int_y^b f(x,y)\,dx.\qquad (1)
> $$
>
> > [!solution]- 解
> > 如图 7.2.5，因
> >
> > $$
> > D=\{(x,y)\mid a\le x\le b,\ a\le y\le x\},
> > $$
> >
> > 这表明该区域是 $x$-型区域，可利用要点中公式（B），知欲证的第一个等式成立。
> >
> > 同理，$D$ 又是 $y$-型区域：$D=\{(x,y)\mid a\le y\le b,\ y\le x\le b\}$，故
> >
> > $$
> > \iint_D f(x,y)\,dxdy \overset{\text{公式(D)}}{=} \int_a^b dy\int_y^b f(x,y)\,dx.
> > $$
>
> > [!note] 注
> > 式（1）给出了一个重要的累次积分换序公式，时常用。

> [!exercise] ☆练习 1
> 证明：
>
> $$
> \int_a^b dx\int_a^x (x-y)^{n-2}f(y)\,dy=\frac{1}{n-1}\int_a^b (b-y)^{n-1}f(y)\,dy,
> $$
>
> 其中 $n$ 为大于 $1$ 的正整数。（天津大学）
>
> > [!hint]- 提示
> > 利用例 7.2.4 中的累次积分换序公式（1）。

> [!exercise] ☆练习 2
> 求积分
>
> $$
> \int_0^1 dy\int_y^1 (e^{-x^2}+e^x\sin x)\,dx.
> $$
>
> （中国人民大学）
>
> > [!hint]- 提示
> > 利用例 7.2.4 中的累次积分换序公式。
>
> > [!hint]- 再提示
> > $$
> > \begin{aligned}
> > \text{原式} &= -\int_0^1 dy\int_y^1 (e^{-x^2}+e^x\sin x)\,dx \\
> > \text{换序} &= -\int_0^1 dx\int_0^x (e^{-x^2}+e^x\sin x)\,dy = -\int_0^1 (x e^{-x^2}+x e^x\sin x)\,dx.
> > \end{aligned}
> > $$
>
> > [!note] 注
> > $$
> > \begin{aligned}
> > \int x e^x\sin x\,dx &= \int x\,d\Big[\frac{e^x}{2}(\sin x-\cos x)\Big] \\
> > &= x\cdot\frac{e^x}{2}(\sin x-\cos x)-\frac12\int e^x(\sin x-\cos x)\,dx.
> > \end{aligned}
> > $$
>
> > [!note] 注
> > 本题既考了二重积分，又连带考了定积分和不定积分的计算。

> [!exercise] 练习 3
> 设 $f(x)$ 在 $[a,b]$ 上有二阶连续导数，$f(a)=f'(a)=0$. 试证：
>
> $$
> \int_a^b (b-x)^3 f''(x)\,dx=6\int_a^b dx\int_a^x f(y)\,dy.
> $$
>
> （华中科技大学）
>
> > [!hint]- 提示
> > 原式左端可分部积分两次，与右端改变积分次序之后相等。
>
> > [!proof]- 证
> > $$
> > \begin{aligned}
> > \text{左端} &= \int_a^b (b-x)^3 d[f'(x)] \\
> > &= (b-x)^3f'(x)\big|_a^b + 3\int_a^b (b-x)^2 f'(x)\,dx \\
> > &\xrightarrow{f'(a)=0} 3\int_a^b (b-x)^2 d[f(x)] \\
> > &\xrightarrow{\text{分部积分}\,/\,f(a)=0} 6\int_a^b (b-x)f(x)\,dx.
> > \end{aligned}
> > $$
> >
> > 记 $D=\{(x,y)\mid a\le x\le b,\ a\le y\le x\}$，如图 7.2.6，则
> >
> > $$
> > \text{右端} = 6\int_a^b dx\int_a^x f(y)\,dy = 6\iint_D f(y)\,dxdy.
> > $$
> >
> > 更换积分次序：
> >
> > $$
> > \begin{aligned}
> > \text{右端} &= 6\int_a^b f(y)\,dy\int_y^b dx \\
> > &= 6\int_a^b (b-y)f(y)\,dy \\
> > &= 6\int_a^b (b-x)f(x)\,dx = \text{左端}.
> > \end{aligned}
> > $$

##### 分区积分及对称性的利用

> [!abstract] 要点
> 1）当穿入曲线（或穿出曲线）是由分段函数给出，或被积函数在积分区域的不同部分具有不同的（初等函数）表达式，应将区域划分成不同部分，分别积分再相加。
>
> 2）跟一元函数定积分一样，二重积分也可利用对称性。但务必注意，当且仅当积分区域与被积函数同时都具有对称性时，才可以利用对称性，以简化积分计算。

> [!example] 例 7.2.5 计算积分：
>
> 1）$\displaystyle I=\iint_D \left|xy-\frac14\right|\,dxdy,\quad D=[0,1]\times[0,1]$；（北京大学）
>
> ☆2）$\displaystyle J=\iint_{x^2+y^2\le 5} \operatorname{sgn}(x^2-y^2+3)\,dxdy$；（河南师范大学）
>
> 3）$\displaystyle K=\iint_{1\le x\le 2,\ 0\le y\le 2} \sqrt{|y-x^2|}\,dxdy$；
>
> ☆4）$\displaystyle L=\iint_{0\le x\le 2,\ 0\le y\le 2} [x+y]\,dxdy$，$[x+y]$ 表示不大于 $x+y$ 的最大整数。
>
> > [!solution]- 解
> > **1）**
> >
> > $$
> > \left|xy-\frac14\right|=\left\{\begin{array}{ll}\dfrac14-xy, & (x,y)\text{在双曲线 }xy=\dfrac14\text{之下},\\[8pt]xy-\dfrac14, & (x,y)\text{在双曲线 }xy=\dfrac14\text{之上}.\end{array}\right.
> > $$
> >
> > $y=1$ 与 $xy=\dfrac14$ 的交点为 $A\left(\dfrac14,1\right)$，知积分（如图 7.2.7）
> >
> > $$
> > \begin{aligned}
> > I &= \iint_{D_2\cup D_3}\left(\frac14-xy\right)dxdy+\iint_{D_1}\left(xy-\frac14\right)dxdy \\
> > &= \int_0^{1/4} dx\int_0^1 \left(\frac14-xy\right)dy + \int_{1/4}^1 dx\int_0^{1/(4x)}\left(\frac14-xy\right)dy \\
> > &\quad + \int_{1/4}^1 dx\int_{1/(4x)}^1\left(xy-\frac14\right)dy \\
> > &= \frac{3}{64}+\frac{1}{16}\ln 2+\frac{1}{16}\left(\frac34+\ln 2\right)=\frac18\left(\frac34+\ln 2\right).
> > \end{aligned}
> > $$
> >
> > **2）** 被积函数
> >
> > $$
> > \operatorname{sgn}(x^2-y^2+3)=\left\{\begin{array}{ll}1,& x^2-y^2+3>0,\\0,& x^2-y^2+3=0,\\-1,& x^2-y^2+3<0.\end{array}\right.
> > $$
> >
> > 如图 7.2.8 所示，被积函数与积分区域都关于坐标轴对称，因此只要计算第一象限之部分，再 4 倍之。注意双曲线 $x^2-y^2+3=0$ 与圆周 $x^2+y^2=5$ 在第一象限的交点 $A$ 上 $x=1$，从而
> >
> > $$
> > \begin{aligned}
> > \text{原式} &= 4\iint_{x^2+y^2\le 5,\ x\ge 0,\ y\ge 0} \operatorname{sgn}(x^2-y^2+3)\,dxdy \\
> > &= 4\int_0^1 dx\int_0^{\sqrt{x^2+3}}dy -4\int_0^1 dx\int_{\sqrt{x^2+3}}^{\sqrt{5-x^2}}dy +4\int_1^{\sqrt5} dx\int_0^{\sqrt{5-x^2}}dy \\
> > &= 8\int_0^1 \sqrt{x^2+3}\,dx -4\int_0^1 \sqrt{5-x^2}\,dx +4\int_1^{\sqrt5}\sqrt{5-x^2}\,dx \\
> > &= 6\ln 3+5\pi-20\arcsin\frac{1}{\sqrt5}.
> > \end{aligned}
> > $$
> >
> > **3）** 如图 7.2.9，
> >
> > $$
> > \begin{aligned}
> > K &= \iint_{|x|\le 1,\,0\le y\le 2} \sqrt{|y-x^2|}\,dxdy \\
> > &= \iint_{|x|\le 1,\,x^2\le y\le 2} \sqrt{y-x^2}\,dxdy + \iint_{|x|\le 1,\,0\le y\le x^2} \sqrt{x^2-y}\,dxdy \\
> > &= \int_{-1}^{1} dx \int_{x^2}^{2} \sqrt{y-x^2}\,dy + \int_{-1}^{1} dx \int_{0}^{x^2} \sqrt{x^2-y}\,dy \\
> > &= \frac{\pi}{2} + \frac{5}{3}.
> > \end{aligned}
> > $$
> >
> > **4）** 如图 7.2.10，
> >
> > $$
> > \begin{aligned}
> > L &= \iint_{0\le x\le 2,\,0\le y\le 2} [x+y]\,dxdy \\
> > &= \iint_{\triangle OAB} 0\,dxdy + \iint_{\text{四边形}ABCD} 1\,dxdy + \iint_{\text{四边形}CDEF} 2\,dxdy + \iint_{\triangle EFG} 3\,dxdy \\
> > &= S(\text{四边形}ABCD) + 2S(\text{四边形}CDEF) + 3S(\triangle EFG) = 3S(\triangle CDG) = 6.
> > \end{aligned}
> > $$
>
> > [!note] 注
> > 在个别线段上改变被积函数值不影响可积性，也不影响二重积分的值。例如本题：被积函数 $[x+y]$ 在线段 $AB, CD, EF$ 及点 $G$ 上，其值分别为 $1,2,3$ 和 $4$。但上面演算过程中实际看成了 $0,1,2$ 和 $3$。这是允许的，对积分值没有影响。

> [!exercise] 练习
> 计算积分
>
> $$
> J = \iint_D x(1+yf(x^2+y^2))\,dxdy,
> $$
>
> 其中 $D$ 是由 $y=x^3$, $y=1$, $x=-1$ 所围成的区域，$f(x)$ 是实值连续函数.（中国科学院）
>
> $\displaystyle \left(-\frac{2}{5}\right)$
>
> 图 7.2.11
>
> > [!hint]- 提示
> > 如图 7.2.11，记 $D_1 = \{(x,y)\mid |x^3|\le y\le 1,\ -1\le x\le 1\}$（左、右对称），$D$ 剩下部分记为 $D_2$（上、下对称），则
> >
> > $$
> > \begin{aligned}
> > J &= \iint_D x(1+yf(x^2+y^2))\,dxdy \\
> > &= \iint_{D_1} x(1+yf(x^2+y^2))\,dxdy + \iint_{D_2} xyf(x^2+y^2)\,dxdy + \iint_{D_2} x\,dxdy \\
> > &\overset{\text{记}}{=} I_1 + I_2 + I_3,
> > \end{aligned}
> > $$
> >
> > 其中 $I_1$ 的被积函数 $x(1+yf(x^2+y^2))$ 是 $x$ 的奇函数（$D_1$ 左、右对称），$I_2$ 的被积函数 $xyf(x^2+y^2)$ 是 $y$ 的奇函数（$D_2$ 上、下对称）。因此 $I_1=I_2=0$，$J=I_3=2\displaystyle\int_{-1}^{0} x\,dx \int_{0}^{|x|^3} dy = -\frac{2}{5}$.

> [!example] 例 7.2.6
> 设 $f(x,y)$ 是 $\mathbb{R}^2$ 上的连续函数，试交换累次积分
>
> $$
> \int_{-1}^{1} dx \int_{x^2+x}^{x+1} f(x,y)\,dy
> $$
>
> 的积分次序.（北京大学）
>
> > [!solution]- 解
> > $D=\{(x,y)\mid -1\le x\le 1,\ x^2+x\le y\le x+1\}$。如图 7.2.12，将 $D$ 中 $y\ge 0$ 的部分记为 $D_1$，$y\le 0$ 的部分记作 $D_2$，则
> >
> > $$
> > \text{原积分} = \iint_{D_1} f(x,y)\,dxdy + \iint_{D_2} f(x,y)\,dxdy.
> > $$
> >
> > $y=x+1$ 与 $y=x^2+x$ 联立可求出交点 $(-1,0),(1,2)$。由 $y=x^2+x=(x+1/2)^2-1/4$，知 $y_{\min}=-1/4$。得
> >
> > $$
> > \begin{aligned}
> > D_1 &= \{(x,y)\mid 0\le y\le 2,\ y-1\le x\le -1/2+\sqrt{y+1/4}\},\\
> > D_2 &= \{(x,y)\mid -1/4\le y\le 0,\ -1/2-\sqrt{y+1/4}\le x\le -1/2+\sqrt{y+1/4}\}.
> > \end{aligned}
> > $$
> >
> > 故
> > $$
> > \text{原式} = \int_0^2 dy \int_{y-1}^{-1/2+\sqrt{y+1/4}} f(x,y)\,dx + \int_{-1/4}^{0} dy \int_{-1/2-\sqrt{y+1/4}}^{-1/2+\sqrt{y+1/4}} f(x,y)\,dx.
> > $$
>
> 图 7.2.12

> [!exercise] 练习
> 求
>
> $$
> I = \int_1^2 dx \int_{\sqrt{x}}^{x} \sin\frac{\pi x}{2y}\,dy + \int_2^4 dx \int_{\sqrt{x}}^{2} \sin\frac{\pi x}{2y}\,dy.
> $$
>
> （天津大学）
>
> $\displaystyle \frac{4}{\pi^2}\left(1-\frac{2}{\pi}\right)$

##### 作变量替换

> [!abstract] 要点
> 1）选取变量替换的原则是使得被积函数简化，积分区域变得易于定限。一般来说应两者兼顾，当两者矛盾时，应优先考虑较困难的。
>
> 2）对于积分 $I=\iint_D f(x,y)\,dxdy$，作变换 $x=x(u,v)$, $y=y(u,v)$，关键在于找出变换后的区域
>
> $$
> D' = \{(u,v)\mid a\le u\le b,\ \phi(u)\le v\le \psi(u)\}. \qquad (A)
> $$
>
> 完成此步，则
>
> $$
> I = \int_a^b du \int_{\phi(u)}^{\psi(u)} f(x(u,v),y(u,v))\,|J|\,dv, \qquad (B)
> $$
>
> 其中 $J$ 为 Jacobi 行列式，$J=\partial(x,y)/\partial(u,v)$.
>
> 3）几何定限法.（如图 7.2.13）固定 $u=u_1$，所得坐标曲线
>
> $$
> L:\ \begin{cases}
> x = x(u_1,v),\\
> y = y(u_1,v),
> \end{cases}
> $$
>
> 随 $u_1$ 连续变化时连续变动。假若 $u_1$ 从 $a$ 连续增大到 $b$，$L$ 恰好扫过积分区域 $D$，这就说明 $D$ 对应的 $u$ 有关系 $a\le u\le b$（$b,a$ 为外层积分的上、下限）。
>
> 设 $a<u_1<b$，$L$ 上的点 $(x,y)=(x(u_1,v), y(u_1,v))$ 随 $v$ 增加时，当 $v$ 变到 $v_1=\phi(u_1)$ 时穿入 $D$，当 $v$ 变到 $v_1=\psi(u_1)$ 时穿出 $D$，这就表明 $D$ 对应的 $(u,v)$ 满足式（A）（$\psi(u), \phi(u)$ 是内层积分的上、下限）。
>
> 图 7.2.13

> [!example] 例 7.2.7 计算积分：
>
> ☆1）$\displaystyle I = \iint_D \frac{3x}{y^2+xy^3}\,dxdy$，其中 $D$ 为平面曲线 $xy=1$, $xy=3$, $y^2=x$, $y^2=3x$ 所围成的有界闭区域；（武汉大学）
>
> 2）$\displaystyle K = \iint_D f(x,y)\,dxdy$，其中 $D$ 为由曲线 $xy=1$, $xy=2$, $y=x$, $y=4x$（$x>0$, $y>0$）所围成的区域；（天津大学）
>
> ☆3）$\displaystyle L = \iint_D \frac{(\sqrt{x}+\sqrt{y})^4}{x^2}\,dxdy$，其中 $D$ 为由 $x$ 轴，$y=x$, $\sqrt{x}+\sqrt{y}=1$ 和 $\sqrt{x}+\sqrt{y}=2$ 围成的有界闭区域.（清华大学）
>
> > [!solution]- 解
> > **1）**（如图 7.2.14）作变换 $u=xy$, $v=y^2/x$，则积分区域 $D$ 变为
> >
> > $$
> > D' = \{(u,v)\mid 1\le u\le 3,\ 1\le v\le 3\}.
> > $$
> >
> > 这时
> >
> > $$
> > J^{-1} = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} y & x \\[2pt] -\dfrac{y^2}{x^2} & \dfrac{2y}{x} \end{vmatrix} = \frac{3y^2}{x} = 3v,
> > $$
> >
> > 所以 $J=\dfrac{1}{3v}$，
> >
> > $$
> > \begin{aligned}
> > I &= \iint_D \frac{3x}{y^2+xy^3}\,dxdy = \iint_D \frac{3}{y^2(1+xy)/x}\,dxdy \\
> > &= \iint_{D'} \frac{du\,dv}{v^2(1+u)} = \int_1^3 \frac{du}{1+u} \int_1^3 \frac{dv}{v^2} = \frac{2}{3}\ln 2.
> > \end{aligned}
> > $$
> >
> > **2）**（如图 7.2.15）作变换 $u=xy$, $v=y/x$，区域 $D$ 变为
> >
> > $$
> > D' = \{(u,v)\mid 1\le u\le 2,\ 1\le v\le 4\},
> > $$
> >
> > $$
> > J^{-1} = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} y & x \\[2pt] -\dfrac{y}{x^2} & \dfrac{1}{x} \end{vmatrix} = \frac{2y}{x} = 2v,
> > $$
> >
> > 故
> > $$
> > K = \iint_D f(xy)\,dxdy = \iint_{1\le u\le 2,\,1\le v\le 4} f(u)\cdot\frac{1}{2v}\,du\,dv = \ln 2\cdot\int_1^2 f(u)\,du.
> > $$
> >
> > **3）**（如图 7.2.16）令 $u=\sqrt{x}+\sqrt{y}$, $v=y/x$，这时区域 $D$ 变为
> >
> > $$
> > D' = \{(u,v)\mid 1\le u\le 2,\ 0\le v\le 1\},
> > $$
> >
> > $$
> > J^{-1} = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} \dfrac{1}{2\sqrt{x}} & \dfrac{1}{2\sqrt{y}} \\[6pt] -\dfrac{y}{x^2} & \dfrac{1}{x} \end{vmatrix} = \frac{1}{2x\sqrt{x}} + \frac{\sqrt{y}}{2x^2} = \frac{u}{2x^2},
> > $$
> >
> > $$
> > \text{原积分 } L = \int_1^2 du \int_0^1 \frac{u^4}{x^2}\cdot\frac{2x^2}{u}\,dv = \frac{15}{2}.
> > $$
>
> > [!note] 注
> > 这里 $u=$ 常数与 $v=$ 常数是两组不同的圆锥曲线。$u=u_0$ 时，$xy=u_0$ 为双曲线，当 $u_0$ 从 $1$ 变到 $3$ 时，$xy=u_0$ 从 $xy=1$ 的位置扫过 $D$ 变到 $xy=3$ 的位置。同样，当 $v_0$ 从 $1$ 变到 $3$ 时，抛物线 $y^2=v_0x$ 从 $y^2=x$ 扫过 $D$ 变到 $y^2=3x$ 的位置。这就是几何定限法。
>
> 图 7.2.14
> 图 7.2.15
> 图 7.2.16

> [!example] 例 7.2.8 计算重积分：
>
> 1）$\displaystyle I = \iint_D \frac{x^2-y^2}{\sqrt{x+y+3}}\,dxdy$，其中 $D=\{(x,y)\mid |x|+|y|\le 1\}$；
>
> 2）$\displaystyle L = \iint_D \frac{(x+y)\ln(1+y/x)}{\sqrt{1-x-y}}\,dxdy$，其中 $D=\{(x,y)\mid 0\le y\le x,\ \frac34\le x+y\le 1\}$；（清华大学）
>
> 3）$\displaystyle K = \iint_D |\sin(x-y)|\,dxdy$，其中 $D=\{(x,y)\mid 0\le x\le y\le 2\pi\}$.
>
> > [!solution]- 解
> > **1）**（如图 7.2.17）
> >
> > $$
> > I = \iint_D \frac{(x+y)(x-y)}{\sqrt{(x+y)+3}}\,dxdy.
> > $$
> >
> > 令 $u=x+y$, $v=x-y$，则
> >
> > $$
> > \begin{aligned}
> > D &= \{(x,y)\mid -1\le x+y\le 1,\ -1\le x-y\le 1\} \\
> > &= \{(u,v)\mid -1\le u\le 1,\ -1\le v\le 1\},
> > \end{aligned}
> > $$
> >
> > $$
> > J^{-1} = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = -2,\quad J = -\frac12.
> > $$
> >
> > 所以
> > $$
> > I = -\frac12 \int_{-1}^{1} \frac{u\,du}{\sqrt{u+3}} \int_{-1}^{1} v\,dv = 0.
> > $$
> >
> > **2）**（如图 7.2.18）令 $u=x+y$, $v=y/x$（$u=$ 常数，是倾角为 $-\pi/4$ 的直线，$v=$ 常数是过原点的直线），
> >
> > $$
> > D' = \left\{(u,v)\;\Big|\; \frac34\le u\le 1,\ 0\le v\le 1\right\},\quad J = \frac{u}{(1+v)^2}.
> > $$
> >
> > $$
> > L = \int_{\frac34}^1 \frac{u^2}{\sqrt{1-u}}\,du \int_0^1 \frac{\ln(1+v)}{(1+v)^2}\,dv = \frac{203}{480}(1-\ln 2).
> > $$
> >
> > **3）** 积分区域如图 7.2.19(a) 的 $\triangle OAB$，被积函数
> >
> > $$
> > |\sin(x-y)| = \begin{cases}
> > \sin(y-x), & 0\le y-x\le \pi,\ (x,y)\in D_1\ \text{（梯形区域）},\\
> > \sin(x-y), & \pi\le y-x\le 2\pi,\ (x,y)\in D_2\ \text{（小三角形区域）}.
> > \end{cases}
> > $$
> >
> > 故原积分
> >
> > $$
> > K = \iint_{D_1} \sin(y-x)\,dxdy + \iint_{D_2} \sin(x-y)\,dxdy.
> > $$
> >
> > 令
> > $$
> > \begin{cases}
> > u = y - x,\\
> > v = x,
> > \end{cases}
> > \quad\text{即}\quad
> > \begin{cases}
> > x = v,\\
> > y = u + v,
> > \end{cases}
> > \quad J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} = -1.
> > $$
> >
> > 这时 $D_1, D_2$ 分别变为
> >
> > $$
> > \begin{aligned}
> > D'_1 &= \{(u,v)\mid 0\le u\le \pi,\ 0\le v\le 2\pi-u\},\\
> > D'_2 &= \{(u,v)\mid \pi\le u\le 2\pi,\ 0\le v\le 2\pi-u\}.
> > \end{aligned}
> > $$
> >
> > 因此
> > $$
> > K = \int_0^\pi du \int_0^{2\pi-u} \sin u\,dv - \int_\pi^{2\pi} du \int_0^{2\pi-u} \sin u\,dv = 3\pi + \pi = 4\pi.
> > $$
>
> > [!note] 注
> > 由轮换对称性可知 $\displaystyle \iint_D \frac{x^2}{\sqrt{x+y+3}}\,dxdy = \iint_D \frac{y^2}{\sqrt{x+y+3}}\,dxdy$。因此可以直接看出原积分为零。
>
> > [!note] 附注
> > 这里 $u=C$（常数）在 $xOy$ 平面上是倾角为 $45^\circ$ 的直线族，$u=0$ 是分角线 $y=x$，当 $C$ 从 $0\to\pi$ 时，该直线扫过 $D_1$；当 $C$ 从 $\pi\to2\pi$ 时，该直线扫过 $D_2$。若让 $u$ 固定在 $[0,\pi]$ 上，该直线与 $D_1$ 有交点，从 $x=0$ 线上穿入，从 $y=2\pi$ 线上穿出。对应地，在 $uOv$ 平面上，即是 $u=C$ 的竖直线，从 $v=0$ 线上穿入 $D'_1$，从 $u+v=2\pi$ 线上穿出 $D'_1$，如图 7.2.19(b)。对 $D_2$ 有类似的描述。
>
> 图 7.2.17
> 图 7.2.18
> 图 7.2.19

> [!exercise] 练习
> 计算如下积分：
>
> 1）$\displaystyle I = \iint_D \frac{y}{e^{x+y}}\,dxdy$，其中 $D = \{(x,y)\mid x+y\le 1,\ x\ge 0,\ y\ge 0\}$；（湖北大学，中南矿冶学院）
>
> $\displaystyle \frac{1}{2}(e-1)$
>
> 2）$\displaystyle K = \iint_D (x+y)\operatorname{sgn}(x-y)\,dxdy$，其中 $D = \{(x,y)\mid 0\le x\le 1,\ 0\le y\le 1\}$；（北京航空航天大学）
>
> $0$
>
> 3）$\displaystyle L = \iint_D e^{\frac{x-y}{x+y}}\,dxdy$，其中 $D$ 是 $x=0$, $y=0$, $x+y=1$ 所围的有界闭区域。（浙江大学）
>
> $\displaystyle \frac14(e-e^{-1})$

##### 极坐标变换

众所周知，最基本最常用的变换是极坐标变换，若取原点作极点，$x$ 轴作极轴，则 $x = r\cos\theta$, $y = r\sin\theta$。这时的 Jacobi 行列式为 $r$，面积元素由 $dxdy$ 变成了 $r\,dr\,d\theta$。$r$ 是动点 $(x,y)$ 的径向量，$r = \sqrt{x^2+y^2}$；$\theta$ 表示径向量转角，即从极轴（$x$ 轴）开始计算旋转，到指定点径向量的旋转角度，逆时针方向为正，顺时针方向为负。

$\theta=$ 常数，是从极点出发的射线；$r=$ 常数，是以极点为中心，半径为 $r$ 的圆。

###### 定限问题

> [!abstract] 要点
> 所谓 $\theta$-型区域，指积分区域 $D$ 为
>
> $$
> D = \{(r,\theta)\mid \theta_1\le\theta\le\theta_2,\ r_1(\theta)\le r\le r_2(\theta)\}
> $$
>
> （如图 7.2.20(a)），这时原积分
>
> $$
> \iint_D f(x,y)\,dxdy = \int_{\theta_1}^{\theta_2} d\theta \int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta)\, r\,dr.
> $$
>
> 类似地，所谓 $r$-型区域 $D$，指
>
> $$
> D = \{(r,\theta)\mid r_1\le r\le r_2,\ \theta_1(r)\le\theta\le\theta_2(r)\}
> $$
>
> （如图 7.2.20(b)）。这时积分
>
> $$
> \iint_D f(x,y)\,dxdy = \int_{r_1}^{r_2} r\,dr \int_{\theta_1(r)}^{\theta_2(r)} f(r\cos\theta, r\sin\theta)\, d\theta.
> $$
>
> 图 7.2.20
>
> $\theta$-型区域的特征是：每根从极点出发的射线与区域边界最多只有两个交点。$\theta_1$ 是区域各点 $\theta$ 的最小值，$\theta_2$ 是其最大值。当 $\theta$ 固定在 $[\theta_1,\theta_2]$ 某个值时，对应的射线从 $r=r_1(\theta)$ 曲线穿入 $D$，从 $r=r_2(\theta)$ 线穿出 $D$。因此，$r=r_1(\theta)$, $r=r_2(\theta)$ 分别称为穿入（曲）线、穿出（曲）线。对 $r$-型区域也有类似的描述。

> [!example] 例 7.2.9 积分变换与计算：
>
> ☆1）试将积分 $I = \displaystyle\iint_{0\le x\le 1,\ 0\le y\le 1} f(x,y)\,dxdy$ 化为极坐标形式；
>
> ☆2）试将积分 $K = \displaystyle\int_{-\pi/4}^{\pi/2} d\theta \int_0^{2a\cos\theta} f(r\cos\theta, r\sin\theta)\, r\,dr$ 变换积分顺序，再将它化为直角坐标系，写出先对 $x$ 再对 $y$ 以及先对 $y$ 再对 $x$ 的两个累次积分；（上海交通大学）
>
> 3）试计算积分 $L = \displaystyle\iint_D (x+y)\,dxdy$，$D$ 是由曲线 $x^2+y^2=x+y$ 所围成的区域。（华中科技大学）
>
> > [!solution]- 解
> > **1）** 如图 7.2.21，积分区域可分成 $D_1, D_2$ 两部分：$D=[0,1]\times[0,1]=D_1\cup D_2$，当 $0\le\theta\le\pi/4$ 时，每个 $\theta$ 所对应的射线从原点穿入 $D_1$，从 $x=1$ 穿出 $D_1$。$x=1$ 改用极坐标表示即：$r=1/\cos\theta$。因此
> >
> > $$
> > D_1 = \{(r,\theta)\mid 0\le\theta\le\pi/4,\ 0\le r\le 1/\cos\theta\}.
> > $$
> >
> > 同理
> >
> > $$
> > D_2 = \{(r,\theta)\mid \pi/4\le\theta\le\pi/2,\ 0\le r\le 1/\sin\theta\}.
> > $$
> >
> > 于是
> > $$
> > \begin{aligned}
> > I &= \iint_{0\le x\le 1,\ 0\le y\le 1} f(x,y)\,dxdy \\
> > &= \int_0^{\pi/4} d\theta \int_0^{1/\cos\theta} f(r\cos\theta, r\sin\theta)\, r\,dr \\
> > &\quad + \int_{\pi/4}^{\pi/2} d\theta \int_0^{1/\sin\theta} f(r\cos\theta, r\sin\theta)\, r\,dr.
> > \end{aligned}
> > $$
> >
> > 类似有
> > $$
> > I = \int_0^1 r\,dr \int_0^{\pi/2} f(r\cos\theta, r\sin\theta)\, d\theta + \int_1^{\sqrt{2}} r\,dr \int_{\arccos(1/r)}^{\arcsin(1/r)} f(r\cos\theta, r\sin\theta)\, d\theta.
> > $$
> >
> > **2）**
> > $$
> > K = \int_{-\pi/4}^{\pi/2} d\theta \int_0^{2a\cos\theta} f(r\cos\theta, r\sin\theta)\, r\,dr,
> > $$
> >
> > 表明 $\theta\in[-\pi/4,\pi/2]$ 时，射线从原点穿入，再从 $r=2a\cos\theta$ 曲线穿出。穿出线化为直角坐标，即为
> >
> > $$
> > x^2 + y^2 = 2ax, \tag{1}
> > $$
> >
> > 或
> >
> > $$
> > (x-a)^2 + y^2 = a^2, \tag{2}
> > $$
> >
> > 亦即以 $(a,0)$ 为中心，以 $a$ 为半径的圆，如图 7.2.22。
> >
> > $\theta=-\pi/4$ 与 $r=2a\cos\theta$ 之交点为 $(-\pi/4,\sqrt{2}a)$，积分区域（记作 $D$）上 $r$ 的最大值为 $2a$。作为 $r$-型区域，应用曲线 $r=\sqrt{2}a$ 将区域划分为 $0\le r\le\sqrt{2}a$ 与 $\sqrt{2}a\le r\le 2a$ 两部分，$D=D_1\cup D_2$：
> >
> > $$
> > \begin{aligned}
> > D_1 &= \{(r,\theta)\mid 0\le r\le\sqrt{2}a,\ -\pi/4\le\theta\le\arccos(r/2a)\},\\
> > D_2 &= \{(r,\theta)\mid \sqrt{2}a\le r\le 2a,\ -\arccos(r/2a)\le\theta\le\arccos(r/2a)\}.
> > \end{aligned}
> > $$
> >
> > 故
> > $$
> > K = \int_0^{\sqrt{2}a} r\,dr \int_{-\pi/4}^{\arccos(r/2a)} f(r\cos\theta, r\sin\theta)\, d\theta + \int_{\sqrt{2}a}^{2a} r\,dr \int_{-\arccos(r/2a)}^{\arccos(r/2a)} f(r\cos\theta, r\sin\theta)\, d\theta.
> > $$
> >
> > 化为直角坐标，只要注意到圆的方程，由式(2)可得 $x=a\pm\sqrt{a^2-y^2}$（取"+"为右半圆，"-"为左半圆）；或由式(1)可得 $y=\pm\sqrt{2ax-x^2}$（取"+"为上半圆，"-"为下半圆）。故化为直角坐标时：
> >
> > $$
> > \begin{aligned}
> > K &= \int_0^a dy \int_{a-\sqrt{a^2-y^2}}^{a+\sqrt{a^2-y^2}} f(x,y)\,dx + \int_{-a}^0 dy \int_{-y}^{a+\sqrt{a^2-y^2}} f(x,y)\,dx \\
> > &= \int_0^a dx \int_{-x}^{\sqrt{2ax-x^2}} f(x,y)\,dy + \int_a^{2a} dx \int_{-\sqrt{2ax-x^2}}^{\sqrt{2ax-x^2}} f(x,y)\,dy.
> > \end{aligned}
> > $$
> >
> > **3）** 利用配方法，易知边界曲线 $x^2+y^2=x+y$ 可写为
> >
> > $$
> > \left(x-\frac12\right)^2 + \left(y-\frac12\right)^2 = \left(\frac{1}{\sqrt{2}}\right)^2.
> > $$
> >
> > 因此宜选点 $(1/2,1/2)$ 作为极点，极轴与 $x$ 轴平行，方向一致。这时，$x=1/2+r\cos\theta$, $y=1/2+r\sin\theta$，积分区域用极点作射线的方法可知
> >
> > $$
> > D = \{(r,\theta)\mid 0\le\theta\le 2\pi,\ 0\le r\le 1/\sqrt{2}\},\quad J\text{ 仍 }r.
> > $$
> >
> > 故原积分
> > $$
> > L = \iint_D (x+y)\,dxdy = \int_0^{2\pi} d\theta \int_0^{1/\sqrt{2}} (r\cos\theta + \tfrac12 + r\sin\theta + \tfrac12)\, r\,dr = \frac{\pi}{2}.
> > $$
>
> > [!note] 注
> > 极坐标的极点不一定非选在原点不可，如下面本例第 3）小题，宜将极点选为 $(1/2,1/2)$.
>
> 图 7.2.21
> 图 7.2.22

> [!exercise] 练习
> 计算积分：
>
> 1）$\displaystyle \iint_{x^2+y^2\le 3/16} \min\left\{\sqrt{\frac{3}{16}-x^2-y^2},\ 2(x^2+y^2)\right\} dxdy$；（河北师范大学）
>
> $\displaystyle \frac{5\pi}{192}$
>
> 2）$\displaystyle \iint_D \frac{1}{(x^2+y^2)^2}\,dxdy$，其中 $D$ 是圆 $x^2+y^2=2x$ 内 $x\ge 1$ 的部分；（天津大学）
>
> $\displaystyle \frac{\pi}{8}$
>
> 3）假设函数 $f(u)$ 在 $(-\infty,+\infty)$ 上连续，试将二重积分 $\displaystyle \iint_{1/4\le x^2+y^2\le 1} f(y/x)\,dxdy$ 化为定积分；（中山大学）
>
> $\displaystyle \frac12 \int_{-\pi/3}^{\pi/3} f(\tan\theta)\left(\cos^2\theta-\frac14\right)d\theta$
>
> new ☆4）$\displaystyle \iint_{x^2+y^2\le 1} |3x+4y|\,dxdy$.（华东师范大学）
>
> $\displaystyle \frac{20}{3}$
>
> > [!hint]- 提示
> > 1）原式 $= \displaystyle \iint_{0\le r\le 1/(2\sqrt{2})} \sqrt{\frac{3}{16}-r^2}\; r\,dr\,d\theta + \iint_{1/(2\sqrt{2})\le r\le \sqrt{3}/4} 2r^2\cdot r\,dr\,d\theta$.
> >
> > 2）$D = \left\{(r,\theta)\;\Big|\; -\dfrac{\pi}{4}\le\theta\le\dfrac{\pi}{4},\ \dfrac{1}{\cos\theta}\le r\le 2\cos\theta\right\}$.
> >
> > 4）积分关于直线 $3x+4y=0$ 对称；原积分 $= 2\displaystyle\iint_{x^2+y^2\le 1,\ 3x+4y\ge 0} (3x+4y)\,dxdy$.
> >
> > 注意：直线 $3x+4y=0$ 的斜率 $\tan\alpha = -\dfrac34$，显然 $\cos\alpha = \dfrac45$, $\sin\alpha = -\dfrac35$（$\alpha<0$）.
> >
> > $$
> > \begin{aligned}
> > 3\cos\theta + 4\sin\theta &= 5\left[-\left(-\frac35\right)\cos\theta + \frac45\sin\theta\right] \\
> > &= 5(-\sin\alpha\cos\theta + \cos\alpha\sin\theta) = 5\sin(\theta-\alpha).
> > \end{aligned}
> > $$
> >
> > $$
> > \begin{aligned}
> > \text{原积分} &= 2\int_0^1 r^2\,dr \int_{-|\alpha|}^{\pi-|\alpha|} (3\cos\theta+4\sin\theta)\,d\theta \\
> > &= 2\cdot\frac13\int_{\alpha}^{\pi+\alpha} 5\sin(\theta-\alpha)\,d\theta \\
> > &= -\frac{10}{3}\cos(\theta-\alpha)\Big|_{\alpha}^{\pi+\alpha} = \frac{20}{3}.
> > \end{aligned}
> > $$

> [!example] 例 7.2.10 计算积分：
>
> 1）$\displaystyle I = \iint_D \frac{1}{xy}\,dxdy$，其中 $D$ 为平面上由 $2\le \dfrac{x}{x^2+y^2},\ \dfrac{y}{x^2+y^2}\le 4$ 确定的区域；（中国科学院）
>
> ☆2）$\displaystyle K = \iint_D (3x^3+x^2+y^2+2x-2y+1)\,dxdy$，其中 $D = \{(x,y)\mid 1\le x^2+(y-1)^2\le 2,\ 且\ x^2+y^2\le 1\}$；（南开大学）
>
> 3）$\displaystyle L = \iint_D \frac{(x+y)\ln(1+y/x)}{\sqrt{2-x-y}}\,dxdy$，其中 $D$ 为 $y=0$, $y=x$, $x+y=1$ 所围成的三角形区域；
>
> ☆4）$\displaystyle M = \iint_{x^2+y^2\le 1} \left|\frac{x+y}{\sqrt{2}} - x^2 - y^2\right|\,dxdy$.
>
> > [!solution]- 解
> > **1）** 化为极坐标时，区域 $D$ 可以表示为
> >
> > $$
> > D = \left\{(r,\theta)\;\Big|\; \frac{1}{4\cos\theta}\le r\le \frac{1}{2\cos\theta},\ \frac{1}{4\sin\theta}\le r\le \frac{1}{2\sin\theta}\right\},
> > $$
> >
> > 它表示如图 7.2.23 中四个圆在第一象限所围之部分（如图 7.2.23 中阴影部分）。由于积分区域及被积函数都关于直线 $y=x$ 对称，故只要计算 $0\le\theta\le\pi/4$ 内之部分，再 2 倍之即可。在圆 $r=1/(2\sin\theta)$ 与圆 $r=1/(4\cos\theta)$ 之交点 $A$ 上 $\theta=\arctan\frac12$.
> >
> > $$
> > \begin{aligned}
> > \iint_D \frac{1}{xy}\,dxdy &= 2\int_{\arctan 1/2}^{\pi/4} d\theta \int_{1/(4\cos\theta)}^{1/(2\sin\theta)} \frac{r\,dr}{r\cos\theta\cdot r\sin\theta} \\
> > &= 2\int_{\arctan 1/2}^{\pi/4} \frac{1}{\sin\theta\cos\theta} \ln\frac{1/(2\sin\theta)}{1/(4\cos\theta)}\,d\theta \\
> > &= 2\int_{\arctan 1/2}^{\pi/4} \frac{1}{\tan\theta} \ln(2\tan\theta)\,d(\tan\theta) = \ln^2 2.
> > \end{aligned}
> > $$
> >
> > **2）** 由对称性知关于 $x$ 的奇次项积分为零。作变换 $u=1-y$, $v=x$ 后化为极坐标，则
> >
> > $$
> > \text{原式} = 2\int_0^{\pi/4} d\theta \int_0^{\sqrt{2}\cos\theta} r^3\,dr + 2\int_{\pi/4}^{\pi/3} d\theta \int_1^{2\cos\theta} r^3\,dr = \frac{7}{12}\pi + \frac{7}{8}\sqrt{3} - 2.
> > $$
> >
> > **3）** 令 $x+y=u$, $y/x=v$（这时坐标曲线为倾角等于 $-\pi/4$ 的直线族，及过原点的直线束），$D=\{(u,v)\mid 0\le u\le 1,\ 0\le v\le 1\}$，$J = \dfrac{u}{(1+v)^2}$.
> >
> > **4）** 因
> > $$
> > f(x,y) = \frac{x+y}{\sqrt{2}} - x^2 - y^2 = \frac14 - \left(x-\frac{1}{2\sqrt{2}}\right)^2 - \left(y-\frac{1}{2\sqrt{2}}\right)^2,
> > $$
> >
> > 故单位圆 $\Omega: x^2+y^2\le 1$ 被分成两部分
> >
> > （如图 7.2.24）：$\Omega_1 = \{(x,y)\mid f(x,y)\ge 0\}$，$\Omega_2 = \Omega - \Omega_1$。因此
> >
> > $$
> > \begin{aligned}
> > M &= \iint_\Omega |f|\,dxdy = \iint_{\Omega_1} f\,dxdy - \iint_{\Omega_2} f\,dxdy \\
> > &= 2\iint_{\Omega_1} f\,dxdy - \iint_{\Omega_1+\Omega_2} f\,dxdy = 2\iint_{\Omega_1} f\,dxdy - \iint_\Omega f\,dxdy \\
> > &\equiv I_1 - I_2,
> > \end{aligned}
> > $$
> >
> > 其中
> > $$
> > \begin{aligned}
> > I_1 &= 2\iint_{\Omega_1} f\,dxdy \\
> > &= 2\iint_{\Omega_1} \left[\frac14 - \left(x-\frac{1}{2\sqrt{2}}\right)^2 - \left(y-\frac{1}{2\sqrt{2}}\right)^2\right] dxdy \\
> > &\quad \left(\text{令 } x-\frac{1}{2\sqrt{2}} = r\cos\phi,\ y-\frac{1}{2\sqrt{2}} = r\sin\phi\right) \\
> > &= 2\int_0^{2\pi} d\phi \int_0^{1/2} \left(\frac14 - r^2\right) r\,dr = 4\pi\left(\frac{1}{32} - \frac{1}{64}\right) = \frac{\pi}{16},
> > \end{aligned}
> > $$
> >
> > $$
> > I_2 = \iint_{x^2+y^2\le 1} \left(\frac{x+y}{\sqrt{2}} - x^2 - y^2\right) dxdy.
> > $$
> >
> > 由对称性知第一项积分为零。故引用极坐标，
> > $$
> > I_2 = -\iint_{x^2+y^2\le 1} (x^2+y^2)\,dxdy = -\int_0^{2\pi} d\theta \int_0^1 r^3\,dr = -\frac{\pi}{2}.
> > $$
> >
> > 从而 $M = I_1 - I_2 = \dfrac{\pi}{16} + \dfrac{\pi}{2} = \dfrac{9\pi}{16}$.

> [!example] * 例 7.2.11
> 设坐标平面上有一周长为 $2\pi l$ 的椭圆 $\Gamma$，在其上选定一点作为计算弧长 $s$ 的起点，以逆时针方向作为计算弧长的方向，这时 $\Gamma$ 有参数方程
>
> $$
> \begin{cases}
> x = f(s),\\
> y = \phi(s)
> \end{cases}
> \quad (0\le s\le 2\pi l).
> $$
>
> $x$ 轴的正半轴绕原点作逆时针旋转，首次转到与点 $(f(s),\phi(s))$ 处切线正向一致时的倾角为 $\theta(s)$。现记 $D$ 为 $\Gamma$ 的外部区域内与 $\Gamma$ 的距离小于 $l$ 的点所构成的区域。
>
> （1）如果用 $t$ 表示 $D$ 内一点 $(x,y)$ 到 $\Gamma$ 的距离，试将 $x,y$ 表示成 $s,t$ 的函数：
>
> $$
> \begin{cases}
> x = x(s,t),\\
> y = y(s,t)
> \end{cases}
> \quad (0\le s\le 2\pi l,\ 0<t<l);
> $$
>
> （2）用计算验证区域 $D$ 的面积为 $3\pi l^2$。（武汉大学）
>
> > [!solution]- 解
> > 点 $(f(s),\phi(s))$ 处的外法线方向倾角为 $\theta(s)-\pi/2$，因此 $D$ 内任意一点的坐标可用 $s,t$ 表示为
> >
> > $$
> > \begin{aligned}
> > x &= f(s) + t\cos(\theta(s)-\pi/2) = f(s) + t\sin\theta(s),\\
> > y &= \phi(s) + t\sin(\theta(s)-\pi/2) = \phi(s) - t\cos\theta(s) \quad (0<t<l,\ 0\le s\le 2\pi l).
> > \end{aligned}
> > $$
> >
> > 注意到这时 $\dfrac{dx}{ds} = f'(s) = \cos\theta(s)$，$\dfrac{dy}{ds} = \phi'(s) = \sin\theta(s)$，知
> >
> > $$
> > J = \frac{\partial(x,y)}{\partial(s,t)} = \begin{vmatrix} f'(s)+t\theta'\cdot\cos\theta & \sin\theta \\[2pt] \phi'(s)+t\theta'\cdot\sin\theta & -\cos\theta \end{vmatrix} = -1 - t\theta',
> > $$
> >
> > 所以
> > $$
> > \begin{aligned}
> > D &= \iint_D dxdy = \iint_{D'} |J|\,ds\,dt = \int_0^{2\pi l} ds \int_0^l (1 + t\theta'(s))\,dt \\
> > &= \int_0^{2\pi l} \left(l + \frac{l^2}{2}\theta'(s)\right) ds = 3\pi l^2.
> > \end{aligned}
> > $$

> [!example] ☆ 例 7.2.12
> 设 $f(x,y)$ 在 $D=[a,b]\times[c,d]$ 上有二阶连续导数。
>
> 1）通过计算验证：
>
> $$
> \iint_D f''_{xy}(x,y)\,dxdy = \iint_D f''_{yx}(x,y)\,dxdy;
> $$
>
> 2）利用 1）证明：$f''_{xy}(x,y) = f''_{yx}(x,y)$，$(x,y)\in D$.（华东师范大学）
>
> > [!hint]- 提示
> > 1）等式左、右两端直接算出，都等于 $f(b,d)-f(b,c)-f(a,d)+f(a,c)$.
> >
> > 2）记 $F(x,y)=f''_{xy}(x,y)-f''_{yx}(x,y)$，我们的任务在于证明：$\forall(x,y)\in D$，有 $F(x,y)=0$. 为此在 $D_n\equiv[x,x+1/n]\times[y,y+1/n]$ 上应用 1）的结果，知
> >
> > $$
> > \iint_{D_n} F(x,y)\,dxdy = 0\quad (\forall n\in\mathbb{N}).
> > $$
> >
> > 应用积分中值定理，$\exists\theta_n,\theta'_n$：$0\le\theta_n,\theta'_n\le 1$，使得
> >
> > $$
> > 0 = \iint_{D_n} F(x,y)\,dxdy = F\!\left(x+\frac{\theta_n}{n},\ y+\frac{\theta'_n}{n}\right)\iint_{D_n} dxdy.
> > $$
> >
> > 在式 $F(x+\theta_n/n,\ y+\theta'_n/n)=0$ 中令 $n\to\infty$，取极限知 $F(x,y)=0$.

> [!example] new 例 7.2.13
> 设 $D=[0,1]\times[0,1]$，$f(x,y)$ 是 $D$ 上的连续函数，证明：有无穷多个 $(\xi,\eta)$ 使得
>
> $$
> \iint_D f(x,y)\,dxdy = f(\xi,\eta). \tag{1}
> $$
>
> （北京大学）
>
> > [!hint]- 提示
> > 若 $f(x,y)\equiv$ 常数，结论自明。
> >
> > 下面假设："$f(x,y)\not\equiv$ 常数".
> >
> > 1° 据积分中值定理：$\exists(\xi,\eta)\in D$，使得
> >
> > $$
> > \iint_D f(x,y)\,dxdy = f(\xi,\eta)\iint_D dxdy = f(\xi,\eta). \tag{2}
> > $$
> >
> > 2° 因 $f(x,y)$ 连续，故在有界闭区域 $D$ 上：$\exists(x_1,y_1),(x_2,y_2)\in D$，使得
> >
> > $$
> > \begin{aligned}
> > m &= f(x_1,y_1) = \min_D f \le \iint_D f(x,y)\,dxdy \\
> > &= f(\xi,\eta) \le \max_D f = f(x_2,y_2) = M.
> > \end{aligned} \tag{3}
> > $$
> >
> > 3°（证明：$m=f(\xi,\eta)<M$ 不会发生.）因为：假若 $m=f(\xi,\eta)<M$，则由连续函数的介值性：$\exists(x_0,y_0)$，使得
> >
> > $$
> > f(x_1,y_1)=m=f(\xi,\eta)<f(x_0,y_0)<M=f(x_2,y_2), \tag{4}
> > $$
> >
> > 再由 $f$ 连续的保号性知，存在 $(x_0,y_0)$ 的邻域 $U(x_0,y_0)\subset D$，使得
> >
> > $$
> > m = f(\xi,\eta) < f(x,y) < M\quad (\forall(x,y)\in U(x_0,y_0)).
> > $$
> >
> > 故
> > $$
> > \iint_{U(x_0,y_0)} [f(x,y)-f(\xi,\eta)]\,dxdy > 0. \tag{5}
> > $$
> >
> > 因此
> > $$
> > \begin{aligned}
> > 0 &\overset{\text{式(2)}}{=} \iint_D f(x,y)\,dxdy - f(\xi,\eta) \\
> > &= \iint_D [f(x,y)-f(\xi,\eta)]\,dxdy \quad (\text{因为 }U(x_0,y_0)\subset D) \\
> > &\ge \iint_{U(x_0,y_0)} [f(x,y)-f(\xi,\eta)]\,dxdy > 0, \tag{6}
> > \end{aligned}
> > $$
> >
> > 亦即 $0>0$，矛盾。
> >
> > 4° 同理，可证：$\exists(\xi,\eta)\in D$，使得 $m<f(\xi,\eta)=M$，亦不可能。
> >
> > 5° 以上说明：$(\xi,\eta)$，$(x_1,y_1)$ 和 $(x_2,y_2)$ 是 $D=[0,1]\times[0,1]$ 上三个不同点. （易证：在 $D$ 内可作出无穷多条联结 $(x_1,y_1)$ 和 $(x_2,y_2)$ 的折线 $L_k$（途中两两不相交），在每一条折线 $L_k$ 上至少存在一点 $Q_k(\xi_k,\eta_k)$，使得：$f(\xi_k,\eta_k)=f(\xi,\eta)$（$k=1,2,\cdots$）.）
> >
> > 事实上：联结最值点 $P_1=(x_1,y_1)$ 和 $P_2=(x_2,y_2)$，在 $P_1P_2$ 的中垂线上，有无穷多点 $Q_k\in D$. 折线 $L_k\overset{\text{记}}{=}P_1Q_kP_2$，能作出无穷多条，中途不相交。让点 $(x,y)$ 从 $P_1$ 出发沿 $L_k$ 移动，以移动的距离作参数 $t$，那么 $f(x(t),y(t))$ 是 $t$ 的连续函数。用 $\ell_k$ 表示 $L_k$ 的长度，则
> >
> > $$
> > f(x_1,y_1)=f(x(0),y(0))=m<f(\xi,\eta)<M=f(x(\ell_k),y(\ell_k))=f(x_2,y_2).
> > $$
> >
> > 根据连续函数的介值性，每个 $L_k$ 能至少找出一点 $t=t_k$，使得 $(f(x(t_k),y(t_k)))\overset{\text{记}}{=} f(\xi_k,\eta_k)$，即 $Q_k\in L_k$（每个 $(\xi_k,\eta_k)=(x(t_k),y(t_k))$ 都异于端点），使得 $f(\xi_k,\eta_k)=f(\xi,\eta)$（$k=1,2,3,\cdots$）。因中途 $L_k$ 互不相交，故 $Q_k(\xi_k,\eta_k)$（$k=1,2,3,\cdots$）互不相同，有无穷多点满足式（1）.

> [!example] * 例 7.2.14
> 设 $f(x,y)\ge 0$ 在 $D: x^2+y^2\le a^2$ 上有连续的一阶偏导数，边界上取值为零。证明：
>
> $$
> \left|\iint_D f(x,y)\,dxdy\right| \le \frac13 \cdot \pi a^3 \cdot \max_{(x,y)\in D} \sqrt{\left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2}.
> $$
>
> > [!proof]- 证
> > 记 $M = \displaystyle\max_{(x,y)\in D} \sqrt{f_x'^2 + f_y'^2}$. $\forall(x,y)\in D$，由原点向 $(x,y)$ 引射线，对应地在圆周上有一交点 $(x_0,y_0)$. 利用 Taylor 公式及 Schwarz 不等式有下式成立，其中 $P$ 为 $(x,y)$ 至 $(x_0,y_0)$ 线段上的某一点：
> >
> > $$
> > \begin{aligned}
> > f(x,y) &= f(x_0,y_0) + f'_x(P)(x-x_0) + f'_y(P)(y-y_0) \\
> > &= f'_x(P)(x-x_0) + f'_y(P)(y-y_0) \\
> > &\le \sqrt{f_x'^2(P)+f_y'^2(P)}\cdot\sqrt{(x-x_0)^2+(y-y_0)^2} \\
> > &\le M(a-r) \quad (r=\sqrt{x^2+y^2}).
> > \end{aligned}
> > $$
> >
> > 所以
> > $$
> > \left|\iint_D f\,dxdy\right| \le \iint_D f\,dxdy \le M\iint (a-r)\,r\,dr\,d\theta = \frac{\pi}{3}a^3\cdot M.
> > $$

> [!example] ☆ 例 7.2.15
> 设 $x=x(u,v)$，$y=y(u,v)$ 有连续偏导数，一一对应地将区域 $D'$ 映射到 $xOy$ 平面的区域 $D$，满足 $J\neq 0$，且
>
> $$
> \frac{\partial x}{\partial u} = \frac{\partial y}{\partial v},\qquad \frac{\partial x}{\partial v} = -\frac{\partial y}{\partial u}. \tag{1}
> $$
>
> 试证：
>
> $$
> \iint_D \left[\left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2\right] dxdy = \iint_{D'} \left[\left(\frac{\partial f}{\partial u}\right)^2 + \left(\frac{\partial f}{\partial v}\right)^2\right] du\,dv. \tag{2}
> $$
>
> （北京师范大学）
>
> > [!proof]- 证
> > 利用式（1），
> >
> > $$
> > \begin{aligned}
> > \left(\frac{\partial f}{\partial u}\right)^2 &= \left(\frac{\partial f}{\partial x}\cdot\frac{\partial x}{\partial u} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial u}\right)^2 = \left(\frac{\partial f}{\partial x}\cdot\frac{\partial y}{\partial v} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial u}\right)^2,\\[4pt]
> > \left(\frac{\partial f}{\partial v}\right)^2 &= \left(\frac{\partial f}{\partial x}\cdot\frac{\partial x}{\partial v} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial v}\right)^2 = \left(-\frac{\partial f}{\partial x}\cdot\frac{\partial y}{\partial u} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial v}\right)^2,
> > \end{aligned}
> > $$
> >
> > 两式相加得
> >
> > $$
> > \left(\frac{\partial f}{\partial u}\right)^2 + \left(\frac{\partial f}{\partial v}\right)^2 = \left(\frac{\partial f}{\partial x}\right)^2\!\left[\left(\frac{\partial y}{\partial v}\right)^2 + \left(\frac{\partial y}{\partial u}\right)^2\right] + \left(\frac{\partial f}{\partial y}\right)^2\!\left[\left(\frac{\partial y}{\partial u}\right)^2 + \left(\frac{\partial y}{\partial v}\right)^2\right]. \tag{3}
> > $$
> >
> > 另外
> >
> > $$
> > J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[6pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} \end{vmatrix} = \frac{\partial x}{\partial u}\cdot\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\cdot\frac{\partial y}{\partial u} \overset{\text{式(1)}}{=} \left(\frac{\partial y}{\partial u}\right)^2 + \left(\frac{\partial y}{\partial v}\right)^2,
> > $$
> >
> > 从而
> >
> > $$
> > du\,dv = |J^{-1}|\,dxdy = \frac{1}{(\partial y/\partial u)^2 + (\partial y/\partial v)^2}\,dxdy. \tag{4}
> > $$
> >
> > 将式（3）、（4）代入式（2）右端，或将式（3）变形，及 $dxdy = |J|\,du\,dv$ 代入式（2）左端，即得欲证等式。
>
> > [!note] 注
> > 本题既考了微分式的变量替换，又考了重积分的换元，颇有特色。有兴趣的读者可借助矩阵运算写出：等式从右至左（或从左至右）较简洁的证明。


### ☆二、三重积分

导读　三重积分在各类考试中也屡屡出现，除直接出题之外，有时也通过曲面积分以及 Gauss 公式连带考三重积分。本段主要讲三重积分的计算及应用，各类读者均需关注。


#### a. 三重积分化为累次积分

> [!note]
> 将三重积分化为累次积分通常采用如下两种方法：
> 
> 1）（投影法）化为二重积分里套定积分（3 = 2 + 1）. 以向 xOy 平面投影为例：若积分区域 V（如图 7.2.25（a））在 xOy 平面上有投影区域 D，且 ∀（x₀，y₀）∈D，过点（x₀，y₀）的竖直线{（x₀，y₀，z）｜z∈R}从 V 的下界面 z = z₁（x₀，y₀）穿入 V，从上界面 z = z₂（x₀，y₀）穿出 V，则表明
> 
> $$
> V = \{（x，y，z）｜（x，y）∈D，z_1（x，y）\leq z \leq z_2（x，y）\}，
> $$
> 
> 于是
> 
> $$
> \iiint_V f（x，y，z）dV = \iint_D dxdy \int_{z_1（x，y）}^{z_2（x，y）} f（x，y，z）dz.
> $$
> 
> 图 7.2.25
> 
> 2）（截面法）化为定积分里套二重积分（3 = 1 + 2）. 以 z 轴为例：若积分区域 V（如图 7.2.25（b））被垂直于 z 轴的平面截取的截口为 D_z（当 a ≤ z ≤ b 时），这表明：
> 
> $$
> V = \{（x，y，z）｜a \leq z \leq b，（x，y）∈D_z\}，
> $$
> 
> 于是
> 
> $$
> \iiint_V f（x，y，z）dV = \int_a^b dz \iint_{D_z} f（x，y，z）dxdy.
> $$

> [!example] ☆例 7.2.16
> 计算积分 $I = \iiint_V \frac{dV}{\rho^2}$，其中 $\rho$ 是点（x，y，z）到 x 轴的距离，即 $\rho^2 = y^2 + z^2$，V 为一棱台，其六个顶点为 A（0，0，1），B（0，1，1），C（1，1，1），D（0，0，2），E（0，2，2），F（2，2，2）.（北京师范大学）

> [!solution]- 解 I
> （投影法）（化为 2 + 1）如图 7.2.26，积分区域 V 在 yOz 平面上的投影区域 Ω = ABED（梯形）. 对任意给定的点（y₀，z₀）∈Ω，点（x，y₀，z₀）随 x 增大时，当 x = 0 时穿入 V，当 x = y₀ 时穿出 V，故
> 
> $$
> V = \{（x，y，z）｜（y，z）∈Ω，0 \leq x \leq y\}.
> $$
> 
> 所以
> 
> $$
> \begin{aligned}
> I &= \iint_\Omega dydz \int_0^y \frac{dx}{y^2 + z^2} = \iint_\Omega \frac{y}{y^2 + z^2} dydz \\
> &= \int_1^2 dz \int_0^z \frac{y}{y^2 + z^2} dy = \int_1^2 \frac{1}{2} \ln\left(\frac{2z^2}{z^2}\right) dz = \frac{1}{2} \ln 2.
> \end{aligned}
> $$

> [!solution]- 解 II
> （截面法）（化为 1 + 2）将 V 向 z 轴上投影，得到的区间是［1，2］，任意取定 z∈［1，2］，z = z 在 V 上截口为等腰直角三角形区域
> 
> $$
> D_z：0 \leq y \leq z，0 \leq x \leq y，
> $$
> 
> 因此
> 
> $$
> I = \iiint_V \frac{dV}{\rho^2} = \int_1^2 dz \iint_{D_z} \frac{dxdy}{y^2 + z^2} = \int_1^2 dz \int_0^z dy \int_0^y \frac{dx}{y^2 + z^2} = \frac{\ln 2}{2}.
> $$
> 
> （此题另一解法见例 7.2.18.）

**new 练习**　设 f（x，y，z）在 $\mathbb{R}^3$ 上有连续的偏导数，且关于 x，y，z 各以 1 为周期. 即：∀（x，y，z）∈$\mathbb{R}^3$，恒有

$$
f（x + 1，y，z） = f（x，y + 1，z） = f（x，y，z + 1） = f（x，y，z）.
$$

求证：对任意实数 α，β，γ，有

$$
\iiint_\Omega \left(\alpha \frac{\partial f}{\partial x} + \beta \frac{\partial f}{\partial y} + \gamma \frac{\partial f}{\partial z}\right) dxdydz = 0，
$$

其中 Ω =［0，1］×［0，1］×［0，1］是单位立方体.（南开大学）

> [!hint]- 提示
> 例如第一项
> 
> $$
> \iiint_\Omega \alpha \frac{\partial f}{\partial x} dxdydz = \iint_{[0,1]\times[0,1]} \left(\int_0^1 \alpha \frac{\partial f}{\partial x} dx\right) dydz = \iint_{[0,1]\times[0,1]} 0 \, dydz = 0.
> $$
> 
> （因为：$\int_0^1 \alpha \frac{\partial f（x，y，z）}{\partial x} dx = \alpha[f（1，y，z） - f（0，y，z）] = 0$，∀（y，z）∈［0，1］×［0，1］.）

> [!example] 例 7.2.17
> 设 $V = \{（x，y，z）｜x^2 + y^2 + z^2 \leq 1，z \geq 0，y^2 \geq 2zx\}$，求积分 $I = \iiint_V |y| \, dV$.

**分析**　作 $\pi/4$ 的旋转变换：$z = \frac{u + v}{\sqrt{2}}$，$x = \frac{u - v}{\sqrt{2}}$，则 $y^2 = 2zx$ 变成 $y^2 = u^2 - v^2$，即 $u^2 = y^2 + v^2$. 可见 $y^2 = 2zx$ 是以 u 轴为对称轴的直角锥（如图 7.2.27）.

$$
D_z = \{（x，y）｜x^2 + y^2 \leq 1 - z^2，y^2 \geq 2zx\}.
$$

注意，化为极坐标时 $y^2 = 2zx$ 变为 $r^2 \sin^2 \theta = 2zr \cos \theta$. 由此 $\theta = \arccos\left(\frac{-z \pm \sqrt{z^2 + r^2}}{r}\right)$.

> [!solution]- 解
> （截面法）（化为 1 + 2.）利用对称性，
> 
> $$
> I = \iiint_V |y| \, dV = 2 \iiint_{y \geq 0} y \, dV = 2 \int_0^1 dz \iint_{D_z} y \, dxdy
> $$
> 
> $$
> = 2 \int_0^1 dz \int_0^{\sqrt{1-z^2}} r \, dr \int_{\arccos\left(\frac{-z+\sqrt{z^2+r^2}}{r}\right)}^\pi r \sin \theta \, d\theta
> $$
> 
> $$
> = 2 \int_0^1 dz \int_0^{\sqrt{1-z^2}} \left(-zr + r\sqrt{z^2 + r^2} + r^2\right) dr
> $$
> 
> $$
> = \frac{1}{8}(2 + \pi).
> $$

**练习 1**　设 Ω 由 $z = x^2 + y^2$，z = 0，xy = 1，xy = 2，y = 3x，y = 4x 所围成，求积分 $I = \iiint_\Omega x^2y^2 z \, dxdydz$.（北京师范大学）

> [!hint]- 提示
> 可用投影法向 xOy 平面投影，化为 2 + 1 形式.

> [!hint]- 再提示
> $\Omega = \{（x，y，z）｜0 \leq z \leq x^2 + y^2，（x，y）∈D\}$，其中投影区域 D 由曲线 xy = 1，xy = 2；y = 3x，y = 4x 所围成.
> 
> $$
> I = \iint_D x^2y^2 \, dxdy \int_0^{x^2+y^2} z \, dz = \frac{1}{2} \iint_D x^2y^2（x^2 + y^2）^2 \, dxdy，
> $$
> 
> 然后可利用例 7.2.7 中 2）的方法，令 u = xy，v = y/x，作变换：
> 
> $$
> I = \frac{1}{2} \iint_{1 \leq u \leq 2, 3 \leq v \leq 4} u^2\left(uv + \frac{u}{v}\right)^2 \cdot \frac{1}{2v} \, dudv = \frac{31465}{5760} + \frac{31}{10} \ln\left(\frac{4}{3}\right).
> $$

**练习 2**　求区域 V：$0 \leq x \leq 1$，$0 \leq y \leq x$，$x + y \leq z \leq e^{x+y}$ 的体积.（山东大学）

> [!hint]- 提示
> 宜将 V 向 xOy 平面投影，化为 2 + 1.

> [!hint]- 再提示
> $$
> V = \iiint_V dV = \int_0^1 dx \int_0^x dy \int_{x+y}^{e^{x+y}} dz = \frac{1}{2} e（e - 2）.
> $$

**练习 3**　求积分 $I = \iiint_V（x + y + z）dxdydz$ 的值，其中 V 是由平面 x + y + z = 1 以及二个坐标平面所围成的区域.（北京大学）

> [!hint]- 提示
> 宜用垂直 z 轴的平面去作截面，截面区域为直角三角形. 注意：当字母 x，y，z 轮换时，被积函数与积分区域都有轮换对称性.

> [!hint]- 再提示
> $V = \{（x，y，z）｜0 \leq z \leq 1，（x，y）∈D_z\}$，其中 $D_z = \{（x，y）｜x \geq 0，y \geq 0，x + y \leq 1 - z\}$，故
> 
> $$
> I = 3 \int_0^1 z \, dz \iint_{D_z} dxdy = 3 \int_0^1 \frac{1}{2}（1 - z）^2 \cdot z \, dz = \frac{1}{8}
> $$
> 
> （这里 $\iint_{D_z} dxdy$ 是等腰直角三角形（腰长 1 - z）的面积）.


#### b. 三重积分换元

> [!note]
> 1）跟二重积分一样，三重积分选取替换变量的原则是使被积函数化简，使区域变得易于定限. 两者兼顾，照顾主要的.
> 
> 2）对于积分 $I = \iiint_V f(x,y,z)\,dxdydz$，选好变量替换 $x = x(u,v,w)$，$y = y(u,v,w)$，$z = z(u,v,w)$ 之后，可用下面几何定限法找出变换后的区域：
> 
> $$V' = \{(u,v,w) \mid a \le u \le b, v_1(u) \le v \le v_2(u), w_1(u,v) \le w \le w_2(u,v)\}.$$
> 
> 则
> 
> $$I = \int_a^b du \int_{v_1(u)}^{v_2(u)} dv \int_{w_1(u,v)}^{w_2(u,v)} f(x(u,v,w), y(u,v,w), z(u,v,w))|J|\,dudvdw \quad \text{(A)}$$
> 
> 这里 $J$ 为 Jacobi 行列式，$J = \frac{\partial(x,y,z)}{\partial(u,v,w)}$.
> 
> 3）几何定限法. 若 $u = u_0$，所得的坐标曲面（如图 7.2.28）
> 
> $$\pi: \begin{cases} x = x(u_0,v,w), \\ y = y(u_0,v,w), \\ z = z(u_0,v,w) \end{cases}$$
> 
> 随 $u_0$ 连续变动时连续变动，且当 $u_0$ 从 $a$ 连续增大到 $b$ 时，$\pi$ 恰好扫过积分区域 $V$. 这就表明 $V$ 上的 $u$ 坐标有关系 $a \le u \le b$（$b$，$a$ 分别为外层积分的上、下限）.
> 
> 设 $u \in (a,b)$ 为任意固定值，在 $u$ 对应的坐标曲面 $\pi$ 上，每固定 $v$，决定一曲线
> 
> $$L: x = x(u,v,w), y = y(u,v,w), z = z(u,v,w)$$
> 
> （其中 $u$，$v$ 已固定，$L$ 是以 $w$ 作参数的曲线）. 当 $v$ 固定不同的值，则对应不同的曲线 $L$，$L$ 随 $v$ 变动而在 $\pi$ 上连续变动. 若
> 
> ① $v$ 从 $v_1 = v_1(u)$ 连续增大到 $v_2 = v_2(u)$ 时，$L$ 恰好扫过 $\pi$ 在 $V$ 上截下的截口区域 $\Delta_u$（如图 7.2.28）.
> 
> ② $L$ 上的点 $(x,y,z)$ 在 $w = w_1(u,v)$ 穿入截口区域 $\Delta_u$，在 $w = w_2(u,v)$ 穿出截口区域 $\Delta_u$，那么表明 $V$ 对应的区域为
> 
> $$V' = \{(u,v,w) \mid a \le u \le b, v_1(u) \le v \le v_2(u), w_1(u,v) \le w \le w_2(u,v)\}.$$
> 
> 从而可以实现变换和定限，如式（A）.

下面重新计算例 7.2.16.

> [!example] ☆例 7.2.18
> 计算 $I = \iiint_V \frac{dV}{\rho^2}$，其中 $\rho$ 是点 $(x,y,z)$ 到 $x$ 轴的距离，即 $\rho^2 = y^2 + z^2$；$V$ 为一棱台，其六个顶点为 $A(0,0,1)$，$B(0,1,1)$，$C(1,1,1)$，$D(0,0,2)$，$E(0,2,2)$，$F(2,2,2)$.（北京师范大学）

分析　从被积函数考虑，宜选取新变量 $\rho$，$\rho^2 = y^2 + z^2$. 当 $\rho$ 固定时，它代表一个以 $x$ 轴为对称轴的无穷圆柱面. 如图 7.2.29，我们看到，将 $xOz$ 平面 $x \ge 0$ 的部分，绕 $Oz$ 轴旋转 $\pi/4$ 就到界面 $ACFD$ 所在位置，再旋转 $\pi/4$ 到 $ABED$ 所在位置. 因此我们取此转角 $\theta$ 作为另一新变量，即令

$$\tan\theta = \frac{y}{x}.$$

类似地，考虑取 $\tan\varphi = \frac{z}{y}$. 这时对积分区域 $V$，相应地有 $\pi/4 \le \theta \le \pi/2$，$\pi/4 \le \varphi \le \pi/2$，当 $\theta$，$\varphi$ 取定之后，仅让 $\rho$ 变化，是一条自原点出发的射线，它从界面 $ABC$ 穿入 $V$，从 $DEF$ 穿出 $V$. 而 $ABC$ 上 $z = 1$，由此

$$\rho^2 = y^2 + z^2 = y^2 + 1, \quad \tan\varphi = \frac{z}{y} = \frac{1}{y}.$$

所以，在 $ABC$ 上　　　　　　　$\rho = \csc\varphi$.

同理可知，在 $DEF$ 上　　　　　$\rho = 2\csc\varphi$.

故 $V$ 对应的区域是 $V' = \{(\rho,\theta,\varphi) \mid \pi/4 \le \theta \le \pi/2, \pi/4 \le \varphi \le \pi/2, \csc\varphi \le \rho \le 2\csc\varphi\}$.

> [!solution]-
> 令 $\rho^2 = y^2 + z^2$，$\tan\theta = \frac{y}{x}$，$\tan\varphi = \frac{z}{y}$，即
> 
> $$\rho = \sqrt{y^2 + z^2}, \quad \theta = \arctan\frac{y}{x}, \quad \varphi = \arctan\frac{z}{y}.$$
> 
> 此时
> 
> $$J^{-1} = \begin{vmatrix} 0 & \frac{y}{\sqrt{y^2+z^2}} & \frac{z}{\sqrt{y^2+z^2}} \\ -\frac{y}{x^2+y^2} & \frac{x}{x^2+y^2} & 0 \\ 0 & -\frac{z}{y^2+z^2} & \frac{y}{y^2+z^2} \end{vmatrix} = \frac{y}{(x^2 + y^2)\sqrt{y^2 + z^2}} = \frac{\tan^2\theta}{(1 + \tan^2\theta)\rho^2 \cos\varphi}.$$
> 
> $V$ 上有 $\pi/4 \le \theta \le \pi/2$，$\pi/4 \le \varphi \le \pi/2$，$\csc\varphi \le \rho \le 2\csc\varphi$，故
> 
> $$\begin{aligned} I &= \iiint_V \frac{dV}{\rho^2} = \int_{\pi/4}^{\pi/2} d\theta \int_{\pi/4}^{\pi/2} d\varphi \int_{\csc\varphi}^{2\csc\varphi} \frac{1}{\rho^2} \cdot |J|\,d\rho \\ &= \int_{\pi/4}^{\pi/2} d\theta \int_{\pi/4}^{\pi/2} d\varphi \int_{\csc\varphi}^{2\csc\varphi} \cos\varphi \cdot \left(1 + \frac{1}{\tan^2\theta}\right) d\rho \\ &= \int_{\pi/4}^{\pi/2} \left(1 + \frac{1}{\tan^2\theta}\right) d\theta \int_{\pi/4}^{\pi/2} \cos\varphi \cdot \csc\varphi\,d\varphi \\ &= \frac{1}{2} \ln 2. \end{aligned}$$

> [!example] 例7.2.19
> 计算积分：
> 
> 1) $I = \iiint_V (y - z) \arctan z\,dxdydz$，其中 $V$ 是由曲面 $x^2 + \frac{1}{2}(y - z)^2 = R^2$，$z = 0$ 及 $z = h$ 所围成之立体；（北京师范大学）
> 
> ☆2) $K = \iiint_V \cos(ax + by + cz)\,dxdydz$，其中 $a, b, c$ 是不全为 0 的常数，$V: x^2 + y^2 + z^2 \le 1$.（南开大学）

> [!solution]-
> 1) 令 $x = u$，$y - z = \sqrt{2}v$，$z = w$，即 $x = u$，$y = \sqrt{2}v + w$，$z = w$。于是
> 
> $$J = \begin{vmatrix} 1 & 0 & 0 \\ 0 & \sqrt{2} & 1 \\ 0 & 0 & 1 \end{vmatrix} = \sqrt{2}, \quad V = \{(u,v,w) \mid 0 \le w \le h, u^2 + v^2 \le R^2\}.$$
> 
> 从而
> 
> $$I = \int_0^h dw \iint_{u^2+v^2 \le R^2} \sqrt{2}v \arctan w \cdot \sqrt{2}\,dudv = 2 \int_0^h \arctan w\,dw \iint_{u^2+v^2 \le R^2} v\,dudv = 0.$$
> 
> （由对称性，我们可以直接看出 $\iint_{u^2+v^2 \le R^2} v\,dudv = 0$。）
> 
> 2) 作坐标系的旋转变换。将 $xOy$ 旋转到平面 $ax + by + cz = 0$ 的位置上。即令 $\xi = \frac{ax + by + cz}{\sqrt{a^2 + b^2 + c^2}}$，这时 $x$ 轴与 $y$ 轴被旋转到 $\xi = 0$ 的平面内，把它们记为 $\xi$ 轴与 $\eta$ 轴，根据解析几何知识，这时 $|J| = 1$，$V = \{(\xi,\eta,\zeta) \mid \xi^2 + \eta^2 + \zeta^2 \le 1\}$，
> 
> 记 $\mu = \sqrt{a^2 + b^2 + c^2}$，则
> 
> $$K = \iiint_V \cos(ax + by + cz)\,dxdydz = \iiint_V \cos(\mu\zeta)\,d\xi d\eta d\zeta.$$
> 
> 引用柱面坐标 $\xi = r\cos\theta$，$\eta = r\sin\theta$，$\zeta = \zeta$，这时
> 
> $$V = \{(r,\theta,\zeta) \mid -1 \le \zeta \le 1, 0 \le \theta \le 2\pi, 0 \le r \le \sqrt{1 - \zeta^2}\},$$
> 
> $$K = \int_{-1}^{1} \cos(\mu\zeta)\,d\zeta \int_0^{2\pi} d\theta \int_0^{\sqrt{1-\zeta^2}} r\,dr = 2\pi \int_{-1}^{1} (1 - \zeta^2) \cos(\mu\zeta)\,d\zeta = \frac{4\pi}{\mu^2} \left(\frac{\sin\mu}{\mu} - \cos\mu\right).$$

> [!exercise] 练习
> 设 $F(a,b,c) = \iiint_V f(ax + by + cz)\,dxdydz$，其中 $V: x^2 + y^2 + z^2 \le 1$. 试证：球面 $S: x^2 + y^2 + z^2 = 1$ 是 $F(a,b,c)$ 的等值面，并求其值。（华中师范大学）

> [!hint]-
> 参看例7.2.19第2小题。

> [!hint]-
> 令 $\zeta = \frac{ax + by + cz}{\sqrt{a^2 + b^2 + c^2}}$，
> 
> $$F(a,b,c) = \iiint_V f(ax + by + cz)\,dxdydz = \int_{-1}^{1} f(\zeta\sqrt{a^2 + b^2 + c^2})\,d\zeta \int_0^{2\pi} d\theta \int_0^{\sqrt{1-\zeta^2}} r\,dr$$
> 
> $$= \pi \int_{-1}^{1} f(\zeta\sqrt{a^2 + b^2 + c^2})(1 - \zeta^2)\,d\zeta = \text{常数} \quad \text{（当 } \sqrt{a^2 + b^2 + c^2} = \text{常数 时）。}$$
> 
> 因此，当 $(a,b,c) \in S$（单位球面）时，其值为
> 
> $$F(a,b,c) = \pi \int_{-1}^{1} f(\zeta)(1 - \zeta^2)\,d\zeta = \text{定值}.$$
> 
> 可见 $S$ 是 $F(a,b,c)$ 的等值面。（实际上，以原点为中心的各个同心球面，各分别为一个等值面。）

> [!example] * 例7.2.20
> $I = \iiint_\Omega \left(\frac{1}{yz}\frac{\partial F}{\partial x} + \frac{1}{xz}\frac{\partial F}{\partial y} + \frac{1}{xy}\frac{\partial F}{\partial z}\right) dxdydz$，其中 $\Omega: 1 \le yz \le 2$，$1 \le xz \le 2$，$1 \le xy \le 2$，试将积分作下面的变换：$u = yz$，$v = xz$，$w = xy$，要求变换后积分出现 $u$，$v$，$w$ 和 $F$ 关于 $u$，$v$，$w$ 的偏导数（假设 $F$ 有连续的一阶偏导）。（北京大学）

> [!solution]-
> $u = yz$，$v = xz$，$w = xy$，则
> 
> $$J^{-1} = \begin{vmatrix} 0 & z & y \\ z & 0 & x \\ y & x & 0 \end{vmatrix} = 2xyz = 2\sqrt{uvw}.$$
> 
> （下面来看积分号下的微分式在变换下如何变形。）因
> 
> $$uvw = x^2y^2z^2, \quad x = \frac{\sqrt{uvw}}{u}, \quad y = \frac{\sqrt{uvw}}{v}, \quad z = \frac{\sqrt{uvw}}{w},$$
> 
> 可知 $x_u' = -\frac{\sqrt{uvw}}{2u^2}$，$y_u' = \frac{\sqrt{uvw}}{2uv}$，$z_u' = \frac{\sqrt{uvw}}{2uw}$。故
> 
> $$2uF_u' = 2(F_x' \cdot x_u' + F_y' \cdot y_u' + F_z' \cdot z_u') = \left(-\frac{1}{u}F_x' + \frac{1}{v}F_y' + \frac{1}{w}F_z'\right)\sqrt{uvw},$$
> 
> 由轮换对称性可知
> 
> $$2vF_v' = \left(\frac{1}{u}F_x' - \frac{1}{v}F_y' + \frac{1}{w}F_z'\right)\sqrt{uvw},$$
> 
> $$2wF_w' = \left(\frac{1}{u}F_x' + \frac{1}{v}F_y' - \frac{1}{w}F_z'\right)\sqrt{uvw},$$
> 
> 以上三式相加得
> 
> $$2(uF_u' + vF_v' + wF_w') = \left(\frac{1}{u}F_x' + \frac{1}{v}F_y' + \frac{1}{w}F_z'\right)\sqrt{uvw}.$$
> 
> 因此，原积分号下的微分式
> 
> $$\frac{1}{u}F_x' + \frac{1}{v}F_y' + \frac{1}{w}F_z' = \frac{2}{\sqrt{uvw}}(uF_u' + vF_v' + wF_w').$$
> 
> 原积分
> 
> $$I = \iiint_{\Omega'} \frac{2}{\sqrt{uvw}}(uF_u' + vF_v' + wF_w') \cdot \frac{1}{2\sqrt{uvw}}\,dudvdw = \int_1^2 du \int_1^2 dv \int_1^2 \left(\frac{1}{vw}F_u' + \frac{1}{uw}F_v' + \frac{1}{uv}F_w'\right) dw.$$

提问　$\int_1^2 du \int_1^2 dv \int_1^2 \frac{1}{uv}F_w'\,dw = \int_1^2 \frac{1}{u}du \int_1^2 \frac{1}{v}dv \int_1^2 F_w'\,dw = (\ln 2)^2(F(2) - F(1))$，对吗？

答　不对，因为 $F_w' = [F(x(u,v,w), y(u,v,w), z(u,v,w))]'$，它还依赖于 $(u,v)$ 的取值。若记 $f(u,v,w) \equiv F\left(\frac{\sqrt{uvw}}{u}, \frac{\sqrt{uvw}}{v}, \frac{\sqrt{uvw}}{w}\right)$，则

$$\int_1^2 du \int_1^2 dv \int_1^2 \frac{1}{uv}F_w'\,dw \text{ 只可 } \int_1^2 du \int_1^2 \frac{1}{uv}[f(u,v,2) - f(u,v,1)]\,dv.$$

评述　本题既考了三重积分的换元，又考了微分形式的变换。特色明显。

> [!exercise] new 练习
> 设 $f(x)$ 有连续导数，区域 $(V)$ 是位于第一卦限，由平面 $z = a_k x$，$z = b_k y$ 和曲面 $xyz = c_k$（$k = 1,2$）所围成的区域，$0 < a_1 < a_2$，$0 < b_1 < b_2$，$0 < c_1 < c_2$，求 $\iiint_V \left[\frac{x}{z}f'\left(\frac{x}{z}\right) + \frac{y}{z}f'\left(\frac{y}{z}\right)\right] dxdydz$。（武汉大学）

> [!hint]-
> 可令 $u = \frac{z}{x}$，$v = \frac{z}{y}$，$w = xyz$，则 $|J| = \frac{1}{3uv}$。

> [!hint]-
> $\frac{\partial(u,v,w)}{\partial(x,y,z)} = \begin{vmatrix} -\frac{z}{x^2} & 0 & \frac{1}{x} \\ 0 & -\frac{z}{y^2} & \frac{1}{y} \\ yz & xz & xy \end{vmatrix} = \frac{3z^2}{xy} = 3uv$，
> 
> $|J| = |(3uv)^{-1}| = \frac{1}{3uv}$，
> 
> 原积分 $= \iiint_{V^*} \left[\frac{1}{u}f'\left(\frac{1}{u}\right) + \frac{1}{v}f'\left(\frac{1}{v}\right)\right] \frac{1}{3uv}\,dudvdw$，
> 
> 其中 $V^* = \{(u,v,w) \mid a_1 \le u \le a_2, b_1 \le v \le b_2, c_1 \le w \le c_2\}$，
> 
> 原积分 $= \frac{1}{3} \int_{a_1}^{a_2} \frac{1}{u^2}f'\left(\frac{1}{u}\right)du \int_{b_1}^{b_2} \frac{1}{v}dv \int_{c_1}^{c_2} dw + \frac{1}{3} \int_{a_1}^{a_2} \frac{1}{u}du \int_{b_1}^{b_2} \frac{1}{v^2}f'\left(\frac{1}{v}\right)dv \int_{c_1}^{c_2} dw$
> 
> $$= \frac{c_2 - c_1}{3} \left\{ \left[f\left(\frac{1}{a_1}\right) - f\left(\frac{1}{a_2}\right)\right] \ln\frac{b_2}{b_1} + \left[f\left(\frac{1}{b_1}\right) - f\left(\frac{1}{b_2}\right)\right] \ln\frac{a_2}{a_1} \right\}.$$

上面讲了一般变换，下面再来讨论两个常用的变换。

## 柱面坐标变换

柱面坐标意指 $x = r\cos\theta$，$y = r\sin\theta$，$z = z$ 的变换。这时 Jacobi 行列式 $J = r$。

当 $r$ 固定时，得到的坐标曲面是：$z$ 轴为对称轴，半径为 $r$ 的无穷圆柱面。

当 $\theta$ 固定时，表示一个以 $z$ 轴为边界的半平面（像一块无穷的大门板），$\theta$ 是此半平面绕 $z$ 轴逆时针从 $x$ 轴的正向开始计算的旋转角度。

当 $z$ 固定时，是垂直 $z$ 轴的平面。

记积分区域上 $z$ 坐标的最小、最大值分别为 $a,b$。每个 $z \in [a,b]$，垂直 $z$ 轴作截面，将 $V$ 上的截口区域记为 $D_z$，则 $V = \{(r,\theta,z) \mid a \le z \le b, (r,\theta) \in D_z\}$，

$$\iiint_V f(x,y,z)\,dxdydz = \int_a^b dz \iint_{D_z} f(r\cos\theta, r\sin\theta, z)\,r\,dr d\theta.$$

若积分区域 $V$ 在 $xOy$ 平面上投影区域为 $D$，$\forall(r,\theta) \in D$，过它所作的竖直线与 $V$ 的下、上界面交点分别为 $z_1(r,\theta)$，$z_2(r,\theta)$，即

$$V = \{(r,\theta,z) \mid (r,\theta) \in D, z_1(r,\theta) \le z \le z_2(r,\theta)\},$$

则

$$\iiint_V f(x,y,z)\,dxdydz = \iint_D r\,dr d\theta \int_{z_1(r,\theta)}^{z_2(r,\theta)} f(r\cos\theta, r\sin\theta, z)\,dz.$$

> [!example] 例7.2.21
> 计算三重积分
> 
> ☆1) $I = \iiint_\Omega x^2 \sqrt{x^2 + y^2}\,dxdydz$，其中 $\Omega$ 是曲面 $z = \sqrt{x^2 + y^2}$ 与 $z = x^2 + y^2$ 围成的有界区域；（北京大学）
> 
> 2) $L = \iiint_\Omega z^2\,dV$，其中 $\Omega$ 是 $x^2 + y^2 + z^2 \le a^2$ 与 $x^2 + y^2 + (z - a)^2 \le a^2$（$a > 0$）的公共部分。（大连理工大学）

> [!solution]-
> 1) 解法 I　在柱面坐标下，
> 
> $$\Omega = \{(r,\theta,z) \mid 0 \le \theta \le 2\pi, 0 \le r \le 1, r^2 \le z \le r\}$$
> 
> （积分区域 $\Omega$ 是图7.2.30中平面图形绕 $z$ 轴旋转所得旋转体），因此
> 
> $$I = \iint_{r \le 1} r^4 \cos^2\theta\,drd\theta \int_{r^2}^{r} dz = \int_0^{2\pi} \cos^2\theta\,d\theta \int_0^1 r^4(r - r^2)\,dr = \frac{\pi}{42}.$$
> 
> 解法 II　$\Omega = \{(r,\theta,z) \mid 0 \le z \le 1, 0 \le \theta \le 2\pi, z \le r \le \sqrt{z}\}$，于是
> 
> $$I = \int_0^1 dz \iint_{z \le r \le \sqrt{z}} r^4 \cos^2\theta\,drd\theta = \int_0^1 dz \int_0^{2\pi} \cos^2\theta\,d\theta \int_z^{\sqrt{z}} r^4\,dr = \frac{\pi}{42}.$$
> 
> 2) 解法 I　$\Omega = \{(r,\theta,z) \mid 0 \le \theta \le 2\pi, 0 \le r \le a, a - \sqrt{a^2 - r^2} \le z \le \sqrt{a^2 - r^2}\}$，
> 
> 两球体的公共部分在 $xOy$ 平面的投影可由两球面的交线得到。令 $a - \sqrt{a^2 - r^2} = \sqrt{a^2 - r^2}$，得 $r = \frac{\sqrt{3}}{2}a$。因此，投影区域为 $r \le \frac{\sqrt{3}}{2}a$ 的圆（图7.2.31 是 $\Omega$ 被 $xOz$ 平面所截得的平面图形）。
> 
> $$L = \iint_{r \le \frac{\sqrt{3}}{2}a} r\,drd\theta \int_{a-\sqrt{a^2-r^2}}^{\sqrt{a^2-r^2}} z^2\,dz = \frac{2\pi}{3} \int_0^{\frac{\sqrt{3}}{2}a} r[(a^2 - r^2)^{3/2} - (a - \sqrt{a^2 - r^2})^3]\,dr$$
> 
> $$= \frac{\pi}{3} \int_0^{\frac{\sqrt{3}}{2}a} (a - \sqrt{a^2 - r^2})^3 [2a - 2(a - \sqrt{a^2 - r^2})]\,d(a - \sqrt{a^2 - r^2}) = \frac{59}{480}\pi a^5.$$
> 
> 解法 II　$L = \int_0^{a/2} z^2 dz \iint_{r \le \sqrt{a^2-(a-z)^2}} r\,drd\theta + \int_{a/2}^{a} z^2 dz \iint_{r \le \sqrt{a^2-z^2}} r\,drd\theta = \frac{59}{480}\pi a^5$（还可用球坐标求解）。

## 球坐标变换

指 $x = r\sin\varphi\cos\theta$，$y = r\sin\varphi\sin\theta$，$z = r\cos\varphi$

（其中 $0 < r < +\infty$，$0 \le \varphi \le \pi$，$0 \le \theta \le 2\pi$）。这时 Jacobi 行列式 $J = r^2 \sin\varphi$。

$r \equiv$ 常数，是以原点为中心，半径为 $r$ 的球面。

$\varphi \equiv$ 常数，是圆锥面，以 $z$ 轴为对称轴，以坐标原点为顶点，其母线跟 $z$ 轴正向夹角为 $\varphi$。

$\theta \equiv$ 常数，是以 $z$ 轴为边界的半平面，$\theta$ 是半平面转角。从 $x$ 轴正向算起，逆时针方向为正（钟面朝 $z$ 之正向）。这时

$$\iiint_V f(x,y,z)\,dxdydz = \iiint_V f(r\sin\varphi\cos\theta, r\sin\varphi\sin\theta, r\cos\varphi)\,r^2 \sin\varphi\,drd\varphi d\theta,$$

然后可根据 $V$ 上 $(r,\varphi,\theta)$ 的变化范围将右端积分转化为累次积分。

> [!example] ☆例7.2.22
> 求 $\iiint_V (x^2 + y^2)\,dV$，其中 $V$ 是由 $x^2 + y^2 + (z - 2)^2 \ge 4$，$x^2 + y^2 + (z - 1)^2 \le 9$，$z \ge 0$ 所围成的空心立体。（南京大学）

> [!solution]-
> 区域 $V$ 如图7.2.32，是大球内部$(V_1)$挖去小球$(V_2)$，切掉大球在 $z$ 平面下面的部分$(V_3)$所剩的区域。即 $V = V_1 - V_2 - V_3$，因此
> 
> $$\iiint_V (x^2 + y^2)\,dV = \iiint_{V_1} (x^2 + y^2)\,dV - \iiint_{V_2} (x^2 + y^2)\,dV - \iiint_{V_3} (x^2 + y^2)\,dV. \quad (1)$$
> 
> 对于 $V_1$，宜取中心位于 $(0,0,1)$ 的球坐标：
> 
> $$x = r\sin\varphi\cos\theta, \quad y = r\sin\varphi\sin\theta, \quad z - 1 = r\cos\varphi, \quad J = r^2 \sin\varphi.$$
> 
> 可知 $V_1' = \{(r,\varphi,\theta) \mid 0 \le r \le 3, 0 \le \varphi \le \pi, 0 \le \theta \le 2\pi\}$，得
> 
> $$\iiint_{V_1} (x^2 + y^2)\,dV = \int_0^{2\pi} d\theta \int_0^\pi d\varphi \int_0^3 r^2 \sin^2\varphi \cdot r^2 \sin\varphi\,dr = \frac{8}{15} \times 3^5 \pi. \quad (2)$$
> 
> 对 $V_2$，宜用中心在 $(0,0,2)$ 的球坐标：
> 
> $$x = r\sin\varphi\cos\theta, \quad y = r\sin\varphi\sin\theta, \quad z - 2 = r\cos\varphi, \quad J = r^2 \sin\varphi.$$
> 
> 于是
> 
> $$\iiint_{V_2} (x^2 + y^2)\,dV = \int_0^{2\pi} d\theta \int_0^\pi d\varphi \int_0^2 r^4 \sin^3\varphi\,dr = \frac{8}{15} \times 2^5 \pi. \quad (3)$$
> 
> 对于 $V_3$，宜采用柱面坐标，向 $xOy$ 平面投影，投影区域（在大球面方程令 $z=0$ 可得）$D$ 为 $x^2+y^2 \le 8$，即 $r \le 2\sqrt{2}$。故
> 
> $$\iiint_{V_3}(x^2+y^2)\,dV = \iint_{r \le 2\sqrt{2}} r\,drd\theta \int_{1-\sqrt{9-r^2}}^0 r^2\,dz = \int_0^{2\pi} d\theta \int_0^{2\sqrt{2}} r^3 \cdot (-1)(1-\sqrt{9-r^2})\,dr = \left(124 - \frac{2}{5} \times 3^5 + \frac{2}{5}\right)\pi. \quad (4)$$
> 
> 将(2)、(3)、(4)之结果代入(1)，得　原积分 $= \iiint_V (x^2+y^2)\,dV = \frac{256}{3}\pi$.

## 三重积分的应用

> [!note]
> 分布在空间的某一物理量，若它是连续分布的，具有可加性，且在每个局部该量的大小与体积成正比，则该量的总和可用三重积分来计算。方法可用"元素法"。即在给定区域里任取一点作为代表点，在此点处取一任意小的体积元素（称为代表元素），求出该元素对应的量值，然后进行积分（加起来）。
> 
> 若该物理量是向量（如力），则应先求出代表元素所对应的向量的分量；然后作三重积分（加起来），求出和向量的相应分量；最后通过分量表示和向量即可。
> 
> 元素法的简单应用是求区域 $(V)$ 的体积：$V = \iiint_V dxdydz$。（人们有时也用同一字母既表示区域，又表示它的体积。）

> [!example] 例7.2.23
> 求给定曲面所围之体积：
> 
> 1）曲面 $(x^2+y^2)^2+z^4=y$ 所围的体积；（南开大学）
> 
> ☆2）闭曲面 $\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}\right)^2 = \frac{x}{h}$ 所围的体积；（东北师范大学）
> 
> 3）曲面 $\left(\frac{x}{a}\right)^{2/5}+\left(\frac{y}{b}\right)^{2/5}+\left(\frac{z}{c}\right)^{2/5}=1$ 所围的空间区域的体积；（延边大学）
> 
> 4）$(x^2+y^2+z^2)^2 = a^2(x^2+y^2-z^2)$（$a>0$）所围的体积。

> [!solution]-
> 1）图形位于 $y \ge 0$ 的四个卦限内，由对称性，所求体积等于第一卦限部分的4倍。引用球坐标
> 
> $$x = r\sin\varphi\cos\theta, \quad y = r\sin\varphi\sin\theta, \quad z = r\cos\varphi,$$
> 
> 曲面方程可写为 $r = \sqrt[3]{\frac{\sin\varphi\sin\theta}{\sin^4\varphi+\cos^4\varphi}}$。因此
> 
> $$V = 4\int_0^{\pi/2} d\theta \int_0^{\pi/2} d\varphi \int_0^{\sqrt[3]{\frac{\sin\varphi\sin\theta}{\sin^4\varphi+\cos^4\varphi}}} r^2 \sin\varphi\,dr = \frac{4}{3} \int_0^{\pi/2} \sin\theta\,d\theta \int_0^{\pi/2} \frac{\sin^2\varphi}{\sin^4\varphi+\cos^4\varphi}\,d\varphi$$
> 
> 令 $t = \tan\varphi$，$= \frac{4}{3} \int_0^{+\infty} \frac{t^2}{1+t^4}\,dt = \frac{\pi\sqrt{2}}{3}$。
> 
> 最后的等式可见例4.5.1的式(2)、(3)，或根据 $B$ 函数的变形知
> 
> $$\int_0^{+\infty} \frac{t^2}{1+t^4}\,dt = \frac{1}{4} \int_0^{+\infty} \frac{dt^4}{t(1+t^4)} = \text{（令 } u=t^4\text{）} \frac{1}{4} \int_0^{+\infty} \frac{du}{u^{1/4}(1+u)} = \frac{1}{4} B\left(\frac{1}{4},\frac{3}{4}\right) = \frac{1}{4} \cdot \frac{\pi}{\sin(\pi/4)} = \frac{\sqrt{2}}{4}\pi.$$
> 
> 2）引用广义球坐标 $x = ar\sin\varphi\cos\theta$，$y = br\sin\varphi\sin\theta$，$z = cr\cos\varphi$，则 $J = abcr^2 \sin\varphi$，$r^3 = \frac{a}{h}\sin\varphi\cos\theta$，故
> 
> $$V = 4\int_0^{\pi/2} d\theta \int_0^{\pi/2} d\varphi \int_0^{\sqrt[3]{\frac{a}{h}\sin\varphi\cos\theta}} abcr^2 \sin\varphi\,dr = \frac{\pi a^2 bc}{3h}.$$
> 
> 3）提示　（作变换）令 $x = aX^5$，$y = bY^5$，$z = cZ^5$，再将 $X$，$Y$，$Z$ 化为球坐标。
> 
> 再提示　$J_1 = \begin{vmatrix} 5aX^4 & 0 & 0 \\ 0 & 5bY^4 & 0 \\ 0 & 0 & 5cZ^4 \end{vmatrix} = 5^3 abc X^4 Y^4 Z^4$。再令 $X = r\sin\varphi\cos\theta$，$Y = r\sin\varphi\sin\theta$，$Z = r\cos\varphi$，则 $J_2 = r^2 \sin\varphi$。于是体积
> 
> $$|V| = 8 \cdot 5^3 abc \iiint_{X^2+Y^2+Z^2 \le 1, X,Y,Z \ge 0} X^4 Y^4 Z^4\,dXdYdZ$$
> 
> $$= 8 \cdot 5^3 abc \int_0^1 r^{14}dr \int_0^{\pi/2} \cos^4\theta \sin^4\theta\,d\theta \int_0^{\pi/2} \sin^9\varphi \cos^4\varphi\,d\varphi = 8 \cdot 5^3 abc \cdot \frac{1}{15} \cdot \frac{3!! \cdot 3!!}{8!!} \cdot \frac{\pi}{2} \cdot \frac{8!! \cdot 3!!}{13!!} = \frac{20}{3003} abc\pi.$$
> 
> 4）提示　引用球坐标，方程化为 $r = a\sqrt{-\cos 2\varphi}$，
> 
> $$V = 8\int_0^{\pi/2} d\theta \int_{\pi/4}^{\pi/2} d\varphi \int_0^{a\sqrt{-\cos 2\varphi}} r^2 \sin\varphi\,dr = \frac{\pi^2 a^3}{4\sqrt{2}}.$$

> [!example] ☆例7.2.24
> 已知圆柱壳
> 
> $$V: 4 \le x^2+y^2 \le 9, \quad 0 \le z \le 4$$
> 
> 密度均匀为 $\mu$，求它对位于原点处质量为 $m$ 的质点的引力（如图7.2.33）。（北京航空航天大学）

> [!solution]-
> 在 $V$ 内任取一点 $(x,y,z)$（作代表点），在此处取一任意小的体积元素 $dV$。该点到原点的距离为 $r = \sqrt{x^2+y^2+z^2}$。元素对应的质量为 $\mu dV$。根据牛顿万有引力公式，它对原点处（质量为 $m$ 的）质点之引力的 $z$ 分量：
> 
> $$\frac{km \cdot \mu dV}{(\sqrt{x^2+y^2+z^2})^2} \cdot \cos\theta = \frac{km\mu\,dV}{(\sqrt{x^2+y^2+z^2})^2} \cdot \frac{z}{\sqrt{x^2+y^2+z^2}}$$
> 
> 因此，合力的 $z$ 分量
> 
> $$F_z = \iiint_V \frac{km\mu z}{(x^2+y^2+z^2)^{3/2}}\,dV = \text{（引用柱面坐标）} km\mu \int_0^{2\pi} d\theta \int_2^3 r\,dr \int_0^4 \frac{z}{(r^2+z^2)^{3/2}}\,dz = 4(\sqrt{5}-2)\pi km\mu.$$
> 
> 因该物体前、后对称，左、右对称，对称点上的元素对原点处质点的引力大小相等，在 $x$ 轴的投影符号相反，相互抵消，故合力的 $x$ 分量为零，$y$ 分量亦如此。即 $F_x = F_y = 0$。故合力
> 
> $$F = F_z = 4(\sqrt{5}-2)\pi km\mu \quad \text{（方向朝上）。}$$

## 综合性问题

> [!example] **例7.2.25
> 设 $\sum_{i,j=1}^3 a_{ij} x_i x_j$ 表示变量 $(x_1,x_2,x_3)$ 的二次型，其系数矩阵 $A = (a_{ij})$ 为对称正定的，证明椭球面 $S: \sum_{i,j=1}^3 a_{ij} x_i x_j = 1$ 所包围的体积等于 $\frac{4\pi}{3}(\det A)^{-1/2}$，$\det A$ 表示 $A$ 的行列式。（吉林大学）

> [!proof]- 证Ⅰ
> 因二次型 $\sum_{i,j=1}^3 a_{ij} x_i x_j$ 的矩阵 $A$ 是实对称正定矩阵，必有正的特征值 $\lambda_i > 0$（$\det A = \lambda_1\lambda_2\lambda_3 > 0$）及相应的特征向量 $X_i$（$i=1,2,3$），这时 $Q = (X_1, X_2, X_3)$ 是正交矩阵，在变换
> 
> $$(x_1,x_2,x_3)^T = Q(\xi_1,\xi_2,\xi_3)^T$$
> 
> 之下，上述二次型被转化为标准形 $\sum_{i=1}^3 \lambda_i \xi_i^2$，且 $|\det Q| = 1$，即该变换下微元体积不发生伸缩变化，Jacobi 行列式
> 
> $$|J| = \left|\frac{\partial(x_1,x_2,x_3)}{\partial(\xi_1,\xi_2,\xi_3)}\right| = |\det Q| = 1.$$
> 
> $$V = \iiint_{\sum_{i,j=1}^3 a_{ij} x_i x_j \le 1} dx_1 dx_2 dx_3 = \iiint_{\sum_{i=1}^3 \lambda_i \xi_i^2 \le 1} |\det Q|\,d\xi_1 d\xi_2 d\xi_3 = \iiint_{\sum_{i=1}^3 \lambda_i \xi_i^2 \le 1} d\xi_1 d\xi_2 d\xi_3.$$
> 
> 再令 $\xi_i = \frac{\eta_i}{\sqrt{\lambda_i}}$，则 $\frac{\partial(\xi_1,\xi_2,\xi_3)}{\partial(\eta_1,\eta_2,\eta_3)} = \frac{1}{\sqrt{\lambda_1\lambda_2\lambda_3}}$，$\sum_{i=1}^3 \lambda_i\xi_i^2 = \sum_{i=1}^3 \eta_i^2 \le 1$，因此
> 
> $$V = \iiint_{\sum_{i=1}^3 \eta_i^2 \le 1} \frac{1}{\sqrt{\lambda_1\lambda_2\lambda_3}}\,d\eta_1 d\eta_2 d\eta_3 = \frac{1}{\sqrt{\det A}} \iiint_{\sum_{i=1}^3 \eta_i^2 \le 1} d\eta_1 d\eta_2 d\eta_3 = \frac{4}{3}\pi (\det A)^{-1/2}.$$

> [!proof]- 证Ⅱ
> 或简而言之，由 $A$ 正定知，存在可逆矩阵 $P$，使得
> 
> $$P^T A P = E = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$
> 
> 这时在变换 $x = P\eta$ 之下，二次型表示曲面 $S$：
> 
> $$1 = x^T A x = (P\eta)^T A (P\eta) = \eta^T (P^T A P) \eta = \eta^T E \eta = \eta_1^2 + \eta_2^2 + \eta_3^2,$$
> 
> 即 $S$ 变成了 $\eta$ 空间的单位球面。这时
> 
> $$|J| = \left|\frac{\partial(x_1,x_2,x_3)}{\partial(\eta_1,\eta_2,\eta_3)}\right| = |\det P| = \frac{1}{\sqrt{\det A}},$$
> 
> $$V = \iiint_{\eta_1^2+\eta_2^2+\eta_3^2 \le 1} \frac{1}{\sqrt{\det A}}\,d\eta_1 d\eta_2 d\eta_3 = \frac{4}{3}\pi (\det A)^{-1/2}.$$

评论　本例主要考查跨学科的综合应用能力。实际上，该题线性代数所占的比重还大些。通过本例，读者不难写出四重积分乃至 $n$ 重积分的相应结果及其证明（见例7.2.41）。

> [!example] ☆例7.2.26
> 求下列三重积分的极限：
> 
> $$\lim_{t \to x_0^+} \frac{1}{(t-x_0)^{n+4}} \iiint_\Omega (x-y)^n f(y)\,dxdydz,$$
> 
> 其中 $\Omega$ 是由 $y = x_0$（$x_0 > 0$），$y = x$，$x = t$（$> x_0$），$z = x$ 及 $z = y$ 所围成的区域之内部，$n$ 是自然数，$f(x)$ 在 $[x_0, x_0+\delta]$（$\delta > 0$）上可微，$f(x_0) = 0$。（广西大学）

分析　（用投影法，向 $xOy$ 平面投影。）如图7.2.34，区域 $\Omega$ 是一个四面体：我们面临的是垂直 $x$ 轴的竖直平面 $x = t$，左边是垂直 $y$ 轴的竖直平面 $y = x_0$，$\Omega$ 的底面（竖直线穿入面）是平行 $x$ 轴与 $y$ 轴夹角为 $45°$ 的斜面 $z = y$。顶面（竖直线穿出面）为平行 $y$ 轴的，跟 $x$ 轴夹角为 $45°$ 的斜面 $z = x$。即

$$\Omega = \{(x,y,z) \mid (x,y) \in D, y \le z \le x\}.$$

四面体在 $xOy$ 平面的投影区域为 $D$，是 $xOy$ 平面上 $y = x$，$x = t$，$y = x_0$ 三直线所围的区域，即

$$D = \{(x,y) \mid x_0 \le x \le t, x_0 \le y \le x\} = \{(x,y) \mid x_0 \le y \le t, y \le x \le t\}.$$

由此可知

$$\iiint_\Omega (x-y)^n f(y)\,dxdydz = \iint_D dxdy \int_y^x (x-y)^n f(y)\,dz = \int_{x_0}^t dy \int_y^t (x-y)^{n+1} f(y)\,dx = \frac{1}{n+2} \int_{x_0}^t (t-y)^{n+2} f(y)\,dy,$$

原式 $= \lim_{t \to x_0^+} \frac{1}{n+2} \cdot \frac{\int_{x_0}^t (t-y)^{n+2} f(y)\,dy}{(t-x_0)^{n+4}}$ （反复使用 L'Hospital 法则）

$$= \frac{1}{(n+4)(n+3)(n+2)} \lim_{t \to x_0} \frac{f(t) - f(x_0)}{t - x_0} = \frac{f'(x_0)}{(n+4)(n+3)(n+2)}.$$

注　类似的考题见得甚多，但大同小异。


### * 三、二重、三重反常积分

导读  这部分内容，一般不作教学重点，相关试题较少，理论问题对非数学院（系）学生不作过高要求。数学系学生可以正文例题为主，习题作机动。

> [!note] 要点
> 1）粗略地说，二重、三重反常积分，与（一重）反常积分类似，被定义为"部分积分"的极限。部分积分是区域割去"反常部分"后剩下部分的积分。对无界区域上二、三重反常积分，就是分别用曲线、曲面割取（可求积的）有限区域，计算其上的积分，然后令切口至原点的最短距离 d→+∞，取极限；对无界函数的反常积分，就是割去奇点、奇线（三重积分还可有奇面）的邻近部分，计算积分，然后令切口至奇点集的最大距离 ρ→0，取极限。
> 
> 2）二重、三重反常积分类似地有 Cauchy 准则。
> 
> 3）若被积函数为非负的，则收敛与否取决于部分积分是否有界，从而反常积分亦有比较判别法，并且按特殊方式切割，当 d→+∞（ρ→0）时，极限存在，可推出按任意方式切割极限也存在，相同，从而积分收敛。
> 
> 4）敛散性只与反常点附近的函数值有关。
> 
> 5）（Cauchy 判别法）若用 C 表示某常数。对于二重积分，记
> P=(x,y)，P_0=(x_0,y_0)，R=√(x^2+y^2)，r=√((x-x_0)^2+(y-y_0)^2)，k=2；
> 
> 对于三重积分，记 P=(x,y,z)，P_0=(x_0,y_0,z_0)，R=√(x^2+y^2+z^2)，
> 
> r=√((x-x_0)^2+(y-y_0)^2+(z-z_0)^2)，k=3。
> 
> Cauchy 判别法指出：对无界区域上的反常积分而言，当无穷远点附近有 |f(P)|≤C/R^α，α>k 时，反常积分收敛；当无穷远点附近有 |f(P)|≥C/R^α，α≤k 时，反常积分发散。对无界函数的反常积分而言，假若 P_0 是它唯一的奇点，在 P_0 附近，有 |f(P)|≤C/r^α，α<k，则反常积分收敛；若在奇点 P_0 附近某个以 P_0 为顶点的角形区域（角度大于零）内，有 |f(P)|≥C/r^α，α≥k，则反常积分发散。
> 
> 6）二重、三重反常积分跟（一重）反常积分有惊人的差别，这就是对二重、三重反常积分有 f 反常可积⇔|f|反常可积。


#### a. 比较判别法

> [!example] ☆ 例7.2.27
> 设 $0 < m \leq \varphi(x,y) \leq M$，讨论 $\displaystyle\iint_{0 \leq y \leq 1} \frac{\varphi(x,y)}{(1+x^2+y^2)^p}\,dx\,dy$ 的敛散性。

> [!solution]- 解
> $0 \leq y \leq 1$ 为无限带状区域，
> 
> $$\frac{m}{(1+x^2+y^2)^p} \leq \frac{|\varphi(x,y)|}{(1+x^2+y^2)^p} \leq \frac{M}{(1+x^2+y^2)^p}$$
> 
> 所以原积分与积分
> 
> $$\iint_{0 \leq y \leq 1} \frac{dx\,dy}{(1+x^2+y^2)^p}$$
> 
> 同时敛散。而后者当 $p \leq 0$ 时明显发散。下面只需讨论 $p > 0$ 的情况。因 $0 \leq y \leq 1$ 时，
> 
> $$0 \leq \frac{1}{(2+x^2)^p} \leq \frac{1}{(1+x^2+y^2)^p} \leq \frac{1}{(1+x^2)^p}$$
> 
> 在 $[-A,A; 0,1]$ 上取积分，并令 $A \to +\infty$，可知
> 
> $$\int_{-\infty}^{+\infty} \frac{dx}{(2+x^2)^p} \leq \iint_{0 \leq y \leq 1} \frac{dx\,dy}{(1+x^2+y^2)^p} \leq \int_{-\infty}^{+\infty} \frac{dx}{(1+x^2)^p}$$
> 
> 此式对于极限为有限数或 $+\infty$ 都是对的。由此可知，$p > 1/2$ 时积分收敛。从左边看，知 $p \leq 1/2$ 时积分发散。总之，原积分当且仅当 $p > 1/2$ 时收敛。


#### b. 对非负被积函数可用特殊方式切割取极限

> [!example] 例7.2.28
> 讨论积分 $I=\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \frac{dxdy}{(1+|x|^p)(1+|y|^q)}$ 的敛散性.

> [!solution]- 解
> 因被积函数非负,不妨用矩形方式割取,然后取极限,知
> $$
> \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \frac{dxdy}{(1+|x|^p)(1+|y|^q)} = \int_{-\infty}^{+\infty} \frac{dx}{1+|x|^p} \int_{-\infty}^{+\infty} \frac{dy}{1+|y|^q} = 4\int_0^{+\infty} \frac{dx}{1+x^p} \cdot \int_0^{+\infty} \frac{dy}{1+y^q},
> $$
> 故当 $p,q>1$ 时收敛,否则发散.

> [!example] 例7.2.29
> 设 $D=\{(x,y)||y|\leq x^2, x^2+y^2\leq 1\}$,证明积分 $I=\iint_D \frac{dxdy}{x^2+y^2}$ 收敛.

> [!proof]- 证
> 记 $D$ 在第一象限的部分为 $D_1$,于是由对称性有 $I=4\iint_{D_1} \frac{dxdy}{x^2+y^2}$.
> 
> $y=x^2$ 与 $x^2+y^2=1$ 的交点 $A$(如图7.2.35)的横坐标为 $x_0=\sqrt{\frac{-1+\sqrt{5}}{2}}$,记 $D'_1=D_1\cap\{x\leq x_0\}$, $D''_1=D_1\cap\{x\geq x_0\}$,则敛散性取决于 $D'_1$ 上的积分
> $$
> I'=\iint_{D'_1} \frac{dxdy}{x^2+y^2}.
> $$
> 因被积函数非负,不妨以 $x=x_1$ 的直线进行切割,这时
> $$
> I'=\lim_{x_1\to 0+} \int_{x_1}^{x_0} dx \int_0^{x^2} \frac{dy}{x^2+y^2} = \lim_{x_1\to 0+} \int_{x_1}^{x_0} \left(\frac{1}{x} \arctan\frac{y}{x}\Big|_0^{x^2}\right) dx = \lim_{x_1\to 0+} \int_{x_1}^{x_0} \frac{\arctan x}{x} dx = \int_0^{x_0} \frac{\arctan x}{x} dx.
> $$
> 因当 $x\to 0+$ 时 $\frac{\arctan x}{x}\to 1$,故右端积分为正常积分. 这就证明原积分 $I$ 收敛.

> [!note] 注
> 本例之结果与要点5)中最后论断不矛盾,因为现在角形区域的角度为零($y=x^2$ 与 $x$ 轴相切).

> [!example] 例7.2.30
> 设 $D=\{(x,y)|0\leq x\leq 1, 0\leq y\leq 1\}$. 判断并证明如下积分的收敛性:
> $$
> I=\iint_D \frac{x-y}{(x+y)^3} dxdy.
> $$
> (云南大学)

> [!solution]- 解
> 令 $x+y=u$, $x-y=v$,即 $x=\frac{u+v}{2}$, $y=\frac{u-v}{2}$(将坐标作一旋转). 这时 $|J|=\frac{1}{2}$, $D'=\{(u,v)|0\leq u+v\leq 2, 0\leq u-v\leq 2\}$,如图7.2.36. 于是
> $$
> I=\iint_D \frac{x-y}{(x+y)^3} dxdy = \frac{1}{2}\iint_{D'} \frac{v}{u^3} dudv.
> $$
> 因被积函数取绝对值之后不改变收敛性. 故只需考虑积分
> $$
> \iint_{D'} \frac{|v|}{u^3} dudv = 2\iint_{D', v\geq 0} \frac{v}{u^3} dudv.
> $$
> $(0,0)$是唯一的奇点,收敛性只与奇点附近的值有关. 只需考虑 $u\leq 1$ 部分的积分:
> $$
> \iint_{D', v\geq 0, u\leq 1} \frac{v}{u^3} dudv = \lim_{\varepsilon\to 0+} \int_\varepsilon^1 du \int_0^u \frac{v}{u^3} dv = \lim_{\varepsilon\to 0+} \frac{1}{2}\int_\varepsilon^1 \frac{1}{u} du = \lim_{\varepsilon\to 0+} -\frac{1}{2}\ln\varepsilon = +\infty.
> $$
> 故原积分发散.

> [!example] 例7.2.31
> 讨论如下积分的收敛性(如图7.2.37):
> $$
> I=\iint_{|x|+|y|\geq 1} \frac{dxdy}{|x|^p+|y|^q} \quad (p>0, q>0).
> $$

> [!solution]- 解
> $I=4\iint_{x+y\geq 1, x\geq 0, y\geq 0} \frac{dxdy}{x^p+y^q}$ 与积分 $I'=\iint_{x>0, y>0, x^p+y^q\geq 1} \frac{dxdy}{x^p+y^q}$ 的收敛性相同. 令
> $$
> x=(r\cos\theta)^{2/p}, \quad y=(r\sin\theta)^{2/q},
> $$
> 这时 $J=\frac{4}{pq} r^{2/p+2/q-1} \sin^{2/q-1}\theta \cos^{2/p-1}\theta$.
> 
> 用 $x^p+y^q=r^2$ 来割取有界闭区域,计算积分,然后令 $r\to+\infty$,取极限可知
> $$
> I'=\frac{4}{pq} \int_0^{\pi/2} \sin^{2/q-1}\theta \cos^{2/p-1}\theta d\theta \cdot \int_1^{+\infty} r^{2/p+2/q-3} dr = \frac{2}{pq}B\left(\frac{1}{p},\frac{1}{q}\right)\int_1^{+\infty} \frac{1}{r^{3-2/p-2/q}} dr.
> $$
> 最后的积分当 $3-\frac{2}{p}-\frac{2}{q}>1$ 时收敛,当 $3-\frac{2}{p}-\frac{2}{q}\leq 1$ 时发散. 故原积分 $I$ 当且仅当
> $$
> \frac{1}{p}+\frac{1}{q}<1
> $$
> 时收敛.

下面看一个有奇曲面的例子.

> [!example] 例7.2.32
> 讨论下列积分的收敛性: $I=\iiint_{x^2+y^2+z^2\leq 1} \frac{dxdydz}{(1-x^2-y^2-z^2)^p}$.

> [!solution]- 解
> 奇点集为单位球面 $x^2+y^2+z^2=1$. 计算 $x^2+y^2+z^2\leq r<1$ 内的积分(化为球坐标),然后令 $r\to 1^-$,取极限可知
> $$
> I=\int_0^{2\pi} d\theta \int_0^\pi \sin\varphi d\varphi \cdot \int_0^1 \frac{r^2 dr}{(1-r^2)^p} = 4\pi\int_0^1 \frac{r^2 dr}{(1-r^2)^p}.
> $$
> 令 $r=\sin t$,
> $$
> =4\pi\int_0^{\pi/2} \sin^2 t \cos^{1-2p}t dt = 2\pi B\left(\frac{3}{2}, 1-p\right).
> $$
> 因此原积分当 $1-p>0$(即 $p<1$)时收敛,否则发散.


#### c. (变号函数)用不同方式切割,极限不同,以证明发散

> [!example] 例7.2.33
> 证明 $\displaystyle\iint_{\mathbb{R}^2} \sin(x^2+y^2)\,dx\,dy$ 不收敛。

> [!proof]-
> 不难验证，用圆 $x^2+y^2=2n\pi$ 切割，取积分，令 $n\to+\infty$ 取极限，与用正方形 $|x|\leq n,|y|\leq n$ 切割，取积分，令 $n\to+\infty$ 取极限所得极限值不同。事实上，
> 
> $$
> \iint_{x^2+y^2\leq 2n\pi} \sin(x^2+y^2)\,dx\,dy = \int_0^{2\pi} d\theta \int_0^{\sqrt{2n\pi}} r\sin r^2\,dr = \pi(1-\cos 2n\pi) = 0,
> $$
> 
> 当 $n\to+\infty$ 时极限为零，但
> 
> $$
> \begin{aligned}
> \iint_{|x|\leq n,|y|\leq n} \sin(x^2+y^2)\,dx\,dy
> &= 4\left(\int_0^n \sin x^2\,dx \int_0^n \cos y^2\,dy + \int_0^n \sin y^2\,dy \int_0^n \cos x^2\,dx\right) \\
> &= 8\int_0^n \sin x^2\,dx \int_0^n \cos x^2\,dx \\
> &\to 8\int_0^{+\infty} \sin x^2\,dx \int_0^{+\infty} \cos x^2\,dx \\
> &= 8\left(\frac{1}{2}\sqrt{\frac{\pi}{2}}\right)^2 = \pi,
> \end{aligned}
> $$
> 
> 所以原积分发散（最后两积分可参看上节练习7.1.30及提示）。


#### d. 用某种方式切割,极限不存在,以证积分发散

> [!example] 例7.2.34
> 判断积分收敛性：$I=\iint_{x+y\geq 1} \frac{\sin x \sin y}{(x+y)^p}\,dx\,dy$

> [!proof]-
> 对坐标作 $\pi/4$ 的旋转变换：$x+y=u,\, x-y=v$，即 $x=\frac{u+v}{2},\, y=\frac{u-v}{2}$，$|J|=1/2$。
> 
> 这时 $\sin x \sin y = \frac{1}{2}[\cos(x-y)-\cos(x+y)]=\frac{\cos v - \cos u}{2}$。于是，
> $$
> I = \iint_{x+y\geq 1} \frac{\sin x \sin y}{(x+y)^p}\,dx\,dy = \frac{1}{4}\iint_{u\geq 1} \frac{\cos v - \cos u}{u^p}\,du\,dv
> $$
> 
> 割取矩形 $[1,A;\,-n\pi,n\pi]$ 计算部分积分
> $$
> I = \lim_{\substack{A\to +\infty \\ n\to +\infty}} \frac{1}{4}\int_1^A du\int_{-n\pi}^{n\pi} \frac{\cos v - \cos u}{u^p}\,dv
> $$
> $$
> = -\frac{1}{4} \lim_{\substack{A\to +\infty \\ n\to +\infty}} 2n\pi\int_1^A \frac{\cos u}{u^p}\,du \text{ 不存在 } (\forall p\in\mathbb{R})
> $$
> 
> 故对任何 $p$，原积分发散。


#### e. Cauchy 判别法的利用

> [!example] 例7.2.35
> 设 $0<\alpha<4$，记 $r=\sqrt{x^2+y^2+z^2}$，试证积分
> $$
> I=\iiint_{\mathbb{R}^3} \frac{|x|+|y|+|z|}{e^{r^\alpha}-1} \,dxdydz
> $$
> 收敛，且其值为 $6\pi\int_0^{+\infty} \frac{r^3}{e^{r^\alpha}-1}\,dr$。（北京师范大学）

> [!proof]- 证
> $I=\iiint_{r\leq 1} \frac{|x|+|y|+|z|}{e^{r^\alpha}-1} \,dxdydz + \iiint_{r\geq 1} \frac{|x|+|y|+|z|}{e^{r^\alpha}-1} \,dxdydz=I_1+I_2$。
> 
> 因为 $|x|,|y|,|z|\leq\sqrt{x^2+y^2+z^2}=r$，$e^{r^\alpha}=1+r^\alpha+\frac{1}{2}r^{2\alpha}+\cdots$，在奇点 $(0,0,0)$ 附近，有
> $$
> |f(x,y,z)|=\frac{|x|+|y|+|z|}{e^{r^\alpha}-1}\leq\frac{3r}{r^\alpha}=\frac{3}{r^{\alpha-1}}
> $$
> 且其中 $\alpha-1<3$，用 Cauchy 判别法，区域 $r\leq 1$ 上的积分 $I_1$ 收敛。
> 
> 又因 $r>1$ 充分大时，$e^{r^\alpha}-1\geq\frac{1}{2}e^{r^\alpha}$，所以
> $$
> r^4\cdot|f(x,y,z)|=r^4\cdot\frac{|x|+|y|+|z|}{e^{r^\alpha}-1}\leq\frac{3r^5}{\frac{1}{2}e^{r^\alpha}}\to 0 \quad (\text{当 } r\to+\infty \text{ 时})
> $$
> 
> 故由 Cauchy 判别法，区域 $r\geq 1$ 上的积分 $I_2$ 亦收敛。如此原积分 $I$ 收敛性得证。
> 
> 因被积函数非负，可取半径为 $\varepsilon,A$ 的两圆周切取环形区域，积分（使用球坐标）
> $$
> I=\lim_{\varepsilon\to 0^+, A\to+\infty} \int_\varepsilon^A dr\int_0^\pi d\varphi\int_0^{2\pi} \frac{|r\sin\varphi\cos\theta|+|r\sin\varphi\sin\theta|+|r\cos\varphi|}{e^{r^\alpha}-1} r^2\sin\varphi\,d\theta
> $$
> $$
> =6\pi\int_0^{+\infty} \frac{r^3}{e^{r^\alpha}-1}\,dr.
> $$


#### f. Cauchy 准则的利用

> [!example] 例7.2.36
> 用 $D_{ab}$ 表示平面上满足不等式 $a^2<x^2+y^2\leq b^2$ 的点 $(x,y)$ 的全体所成的圆环,假定 $f(x,y)$ 在 $D_{01}$ 里连续. 证明:
>
> 1) $\displaystyle\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy$ 存在的充要条件是 $\displaystyle\lim_{b\to0+}\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy=0$;
>
> 2) 假定存在正数 $C$ 和 $\varepsilon$,使得 $|f(x,y)|<C(x^2+y^2)^{-1+\varepsilon}$,那么 $\displaystyle\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy$ 存在. (厦门大学)

> [!proof]- 证
> **1)** 必要性. 已知 $\displaystyle I(b)=\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy$ 存在,要证 $\displaystyle\lim_{b\to0+}I(b)=0$,即要证:
>
> $$\forall\varepsilon>0,\ \exists\delta>0,\ \text{当}\ 0<b<\delta\ \text{时,有}$$
>
> $$|I(b)|<\varepsilon.\tag{1}$$
>
> 根据 Cauchy 准则, $\displaystyle\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy$ 存在,则 $\forall\varepsilon>0,\ \exists\delta>0$,当 $0<a_1<a_2<\delta$ 时,有
>
> $$\left|\iint_{D_{a_1b}} f(x,y)\,dxdy-\iint_{D_{a_2b}} f(x,y)\,dxdy\right|<\frac{\varepsilon}{2}.$$
>
> 即
>
> $$\left|\iint_{D_{a_1a_2}} f(x,y)\,dxdy\right|<\frac{\varepsilon}{2}.$$
>
> 此式中, $a_1,a_2$ 分别改记为 $a,b$. 令 $a\to0$,取极限则得
>
> $$|I(b)|=\left|\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy\right|<\frac{\varepsilon}{2}<\varepsilon.$$
>
> 此即式(1),必要性获证.
>
> 充分性. 已知 $\displaystyle\lim_{b\to0+}\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy=0$,说明充分小的 $b_1>0$,有 $\displaystyle\lim_{a\to0+}\iint_{D_{ab_1}} f(x,y)\,dxdy$ 存在. 由此, $\forall b>0$,取充分小的 $b_1$, $0<b_1<b$,则
>
> $$\lim_{a\to0+}\iint_{D_{ab}} f(x,y)\,dxdy=\lim_{a\to0+}\left(\iint_{D_{ab_1}} f\,dxdy+\iint_{D_{b_1b}} f\,dxdy\right)=\lim_{a\to0+}\iint_{D_{ab_1}} f\,dxdy+\iint_{D_{b_1b}} f\,dxdy$$
>
> 存在.
>
> **2)** 利用 Cauchy 判别法即得(略).


#### g. 二重、三重反常积分的计算

> [!example] 例7.2.37
> 计算反常积分 $\iint_D x^{-3/2}e^{y-x}dxdy$，其中 $D: y \geq 0, x \geq y$。（云南大学）

> [!solution]- 解
> 被积函数非负，不妨用平行于 $y$ 轴的直线截取（如图7.2.38），
> 
> $$I = \iint_D x^{-3/2}e^{y-x}dxdy = \lim_{\varepsilon \to 0+, A \to +\infty} \int_\varepsilon^A dx \int_0^x x^{-3/2}e^{y-x}dy$$
> 
> 注意：
> 
> $$\lim_{x \to 0+} \frac{1-e^{-x}}{\sqrt{x}} = \lim_{x \to 0+} \frac{1-[1-x+O(x)]}{\sqrt{x}} = 0,$$
> 
> $$\lim_{x \to +\infty} \frac{1-e^{-x}}{\sqrt{x}} = 0,$$
> 
> $$\int_0^{+\infty} x^{-1/2}e^{-x}dx = \Gamma\left(\frac{1}{2}\right) = \sqrt{\pi},$$
> 
> 知 $I = 2\sqrt{\pi}$。

> [!example] 例7.2.38
> $xOy$ 平面上按面密度 $\mu = \dfrac{M}{\sqrt{x^2+y^2+1}}$（$M$ 为常数）分布着质量，在 $(0,0,1)$ 处有单位质点，求平面对该单位质点的引力。

> [!solution]- 解
> （元素法）如图7.2.39，在 $xOy$ 平面上任意一点 $(x,y)$ 处作面积元素 $d\sigma$，对应的质量为
> 
> $$\mu d\sigma = \frac{M}{\sqrt{x^2+y^2+1}} d\sigma.$$
> 
> 它对单位质点的引力的大小为
> 
> $$G \cdot \frac{1}{\left(\sqrt{x^2+y^2+1}\right)^2} \cdot \frac{M}{\sqrt{x^2+y^2+1}} d\sigma.$$
> 
> 该引力在 $z$ 轴上的投影为
> 
> $$G \cdot \frac{1}{\left(\sqrt{x^2+y^2+1}\right)^2} \cdot \frac{M}{\sqrt{x^2+y^2+1}} d\sigma \cdot \frac{1}{\sqrt{x^2+y^2+1}} = \frac{GM}{(x^2+y^2+1)^2} d\sigma,$$
> 
> 故
> 
> $$F_z = -\iint_{\mathbb{R}^2} \frac{GM}{(x^2+y^2+1)^2} dxdy.$$
> 
> 因为被积函数为正，可用中心在原点的圆周割取，积分（化为极坐标），取极限：
> 
> $$\begin{aligned}
> F_z &= -GM \lim_{A \to +\infty} \int_0^{2\pi} d\theta \int_0^A \frac{r}{(r^2+1)^2} dr \\
>     &= -2\pi GM \lim_{A \to +\infty} \left(-\frac{1}{2} \cdot \frac{1}{r^2+1}\bigg|_0^A\right) = -G\pi M.
> \end{aligned}$$
> 
> 由对称性，$F_x = F_y = 0$，$F = F_z = -G\pi M$，负号表示作用力垂直向下。

> [!note] 注
> 若不问条件，随意化为累次积分，可能导致错误，例如容易验证
> 
> $$\int_1^{+\infty} dy \int_1^{+\infty} \frac{x^2-y^2}{(x^2+y^2)^2} dx = \frac{\pi}{4},$$
> 
> 但 $D = [1,+\infty) \times (1,+\infty)$ 上积分 $\iint_D \dfrac{x^2-y^2}{(x^2+y^2)^2} dxdy$ 发散，这是因为 $\iint_D \dfrac{x^2-y^2}{(x^2+y^2)^2} dxdy$ 与
> 
> $$\iint_D \left|\frac{x^2-y^2}{(x^2+y^2)^2}\right| dxdy$$
> 
> 同时敛散。但
> 
> $$\iint_D \left|\frac{x^2-y^2}{(x^2+y^2)^2}\right| dxdy = 2 \iint_{D_1} \frac{x^2-y^2}{(x^2+y^2)^2} dxdy \quad (D_1 \text{ 为 } D \text{ 中 } y \leq x \text{ 之部分}),$$
> 
> $$\frac{x^2-y^2}{(x^2+y^2)^2} \geq \frac{x^2-y^2}{4x^4} \geq 0 \quad (\text{在 } D_1 \text{ 上}),$$
> 
> $$\iint_{D_1} \frac{x^2-y^2}{4x^4} dxdy = \lim_{A \to +\infty} \int_1^A dx \int_1^x \frac{x^2-y^2}{4x^4} dy = +\infty.$$

> [!exercise] 练习1
> 设地球是半径为 $R$ 的圆球，地面上空至地球中心距离为 $r$ $(r \geq R)$ 处的空气密度 $\rho(r) = \rho_0 e^{k(1-r/R)}$（$\rho_0$ 和 $k$ 为正常数）。试求地面上空大气总质量。（中国科学技术大学）

> [!hint]- 提示
> $V = \{(r,\theta,\varphi) \mid R \leq r < +\infty,\ 0 \leq \theta \leq 2\pi,\ 0 \leq \varphi \leq \pi\}$，
> 
> （大气总质量）$M = \displaystyle\iiint_V \rho_0 e^{k(1-r/R)} r^2 \sin\varphi \, dr d\theta d\varphi$。
> 
> **再提示**  $M = \rho_0 \displaystyle\int_R^{+\infty} e^{k(1-r/R)} r^2 dr \int_0^{2\pi} d\theta \int_0^\pi \sin\varphi \, d\varphi$
> $$= 4\pi\rho_0 e^k \left(\frac{R}{k}\right)^3 \int_k^{+\infty} e^{-t} t^2 dt \quad (\text{令 } t = kr/R)$$
> $$= 4\pi\rho_0 R^3 \left(\frac{1}{k} + \frac{2}{k^2} + \frac{2}{k^3}\right).$$

> [!exercise] 练习2
> 设 $f(x,y)$ 是 $\mathbb{R}^2$ 上的连续函数，试作一个无界区域 $D$，使 $f(x,y)$ 在 $D$ 上的反常积分收敛。（北京大学）

> [!hint]- 提示
> 例如，取 $D = \{(x,y) \mid n \leq x \leq n+1,\ -c_n \leq y \leq c_n,\ n=1,2,\dots\}$。记 $M_n = \max\{|f(x,y)| \mid n \leq x \leq n+1,\ -1 \leq y \leq 1\}$，令 $0 < c_n < \min\left\{\dfrac{1}{2^n M_n}, 1\right\}$，则
> 
> $$\iint_D |f(x,y)| dxdy \leq \sum_{n=1}^{+\infty} \int_n^{n+1} dx \int_{-c_n}^{c_n} M_n dy \leq 2\sum_{n=1}^{+\infty} \frac{1}{2^n} < +\infty.$$


### 四、n 重积分

> [!definition] 定义
> （与二重、三重积分类似）若 f 为有界闭区域 V⊂R^n 上的有界函数，则 f 在 V 上的积分定义为
> 
> ∫…∫_V f(x_1,x_2,…,x_n) dx_1 dx_2 … dx_n = lim
> λ→0 Σ_(i=1)^m f(ξ_1^i, ξ_2^i, …, ξ_n^i) ΔV_i，  （A）
> 
> 其中 λ = max
> 1≤i≤m d_i（而 d_i = (ΔV_i 之直径)），ΔV_i 既表示 V 所分割的小区域，也表示它的体积。

> [!note] 计算
> 
> **1）化为累次积分**
> 若 V = {(x_1,…,x_n) | a_i≤x_i≤b_i, i=1,2,…,n}，则
> 
> ∫…∫_V f(x_1,…,x_n) dx_1…dx_n
> = ∫_(a_1)^(b_1) dx_1 ∫_(a_2)^(b_2) dx_2 … ∫_(a_n)^(b_n) f(x_1,…,x_n) dx_n.  （a）
> 
> 若
> 
> V = {(x_1,…,x_n) | a_1≤x_1≤b_1, a_2(x_1)≤x_2≤b_2(x_1), …, a_n(x_1,…,x_(n-1))≤x_n≤b_n(x_1,…,x_(n-1))}，
> 
> 则
> 
> ∫…∫_V f(x_1,…,x_n) dv
> = ∫_(a_1)^(b_1) dx_1 ∫_(a_2(x_1))^(b_2(x_1)) dx_2 … ∫_(a_n(x_1,…,x_(n-1)))^(b_n(x_1,…,x_(n-1))) f(x_1,…,x_n) dx_n.  （c）
> 
> **2）换元**
> 若 x_i = x_i(u_1,…,u_n)（i=1,2,…,n），将 (u_1,…,u_n) 空间里的区域 V'，双方单值一一对应地变换到 (x_1,…,x_n) 空间里的区域 V 上，若此 n 个函数有连续偏导数，且 Jacobi 行列式
> 
> J = ∂(x_1,…,x_n)/∂(u_1,…,u_n) ≠ 0.
> 
> 则
> 
> ∫…∫_V f(x_1,…,x_n) dx_1…dx_n = ∫…∫_(V') f(x_1(u,…),…,x_n(u,…)) |J| du_1…du_n.  （d）
> 
> 对于常用的球坐标
> 
> x_1 = rcosφ_1,
> x_2 = rsinφ_1 cosφ_2,
> x_3 = rsinφ_1 sinφ_2 cosφ_3,
> ……,
> x_(n-1) = rsinφ_1 sinφ_2…sinφ_(n-2) cosφ_(n-1),
> x_n = rsinφ_1…sinφ_(n-2) sinφ_(n-1),
> 
> 就整个空间 R^n 而论，r 与 φ_i（i=1,…,n-1）的变化范围是
> 
> 0≤r<+∞，0≤φ_1≤π，…，0≤φ_(n-2)≤π，0≤φ_(n-1)≤2π.
> 
> Jacobi 行列式是
> 
> J = r^(n-1) sin^(n-2)φ_1 sin^(n-3)φ_2 … sin^2φ_(n-3) sinφ_(n-2).


#### a. 化为累次积分

> [!abstract] 要点
> 利用公式（c）将 $n$ 重积分化为累次积分，关键在于把积分区域写成（b）的形式，其中
> $[a_1,b_1]$ 是 $V$ 上变量 $x_1$ 的变化范围；$[a_2(x_1),b_2(x_1)]$ 是 $x_1\in[a_1,b_1]$ 给定时，$V$ 上变量 $x_2$ 的变化范围；…；$[a_n(x_1,\dots,x_{n-1}),b_n(x_1,\dots,x_{n-1})]$ 是 $x_1,\dots,x_{n-1}$ 给定时，$V$ 上 $x_n$ 的变化范围。

> [!example] 例 7.2.39
> 设 $a_1,\dots,a_n>0$，又
> 
> $$S_n(a_1,\dots,a_n) = \{(x_1,\dots,x_n) \mid |x_i|/a_i + |x_n|/a_n \leq 1,\ i=1,2,\dots,n-1\},$$

> [!note] 分析
> 1）如图 7.2.40，从条件 $|x_i|/a_i + |x_n|/a_n \leq 1$（$i=1,2,\dots,n-1$）看出，$S_n$ 具有对称性。故只要求出 $x_i\geq 0$（$i=1,\dots,n$）部分的体积，再 $2^n$ 倍之即得。
> 
> 2）从 $|x_i|/a_i + |x_n|/a_n \leq 1$，$x_i\geq 0$，…，$x_n\geq 0$ 看出 $x_n$ 的变化范围是
> 
> $$0\leq x_n\leq a_n.$$ 当 $x_n$ 固定时，$x_i$ 的变化范围为 $0\leq x_i\leq a_i(1-x_n/a_n)$.

> [!solution]- 解
> $S_n(a_1,\dots,a_n)$ 的体积
> 
> $$
> \begin{aligned}
> V &= \int\cdots\int_{S_n} dx_1\cdots dx_n \\
> &= 2^n \int_0^{a_n} dx_n \int_0^{a_1(1-x_n/a_n)} dx_1 \cdots \int_0^{a_{n-1}(1-x_n/a_n)} dx_{n-1} \\
> &= 2^n a_1\cdots a_{n-1} \int_0^{a_n} (1-x_n/a_n)^{n-1} dx_n \\
> &= 2^n a_1\cdots a_{n-1}a_n \int_0^1 (-1)(1-x_n/a_n)^{n-1} d(1-x_n/a_n) = \frac{2^n}{n} a_1\cdots a_n.
> \end{aligned}
> $$


#### b. 变量替换

> [!note] 要点
> 1）根据积分区域与被积函数选取恰当的变换，使被积函数数化简，区域易于定限。
>
> 2）当选好新变量之后，将区域用新变量表示出来，求出新变量的变化范围，确定积分限。

> [!example] 例 7.2.40
> 求 $\displaystyle\iiiint_{V} \sqrt{\frac{1-x^{2}-y^{2}-z^{2}-u^{2}}{1+x^{2}+y^{2}+z^{2}+u^{2}}} \,dxdydzdu$，其中 $V$ 为 $x,y,z,u\geq 0$，$x^{2}+y^{2}+z^{2}+u^{2}\leq 1$。

> [!solution]- 解 I（用球坐标）
> $$
> \begin{aligned}
> x &= r\cos\psi,\\
> y &= r\sin\psi \cos\varphi,\\
> z &= r\sin\psi \sin\varphi \cos\theta,\\
> u &= r\sin\psi \sin\varphi \sin\theta.
> \end{aligned}
> $$
>
> 这时
>
> $$
> J = \frac{\partial(x,y,z,u)}{\partial(r,\psi,\varphi,\theta)} = r^{3}\sin^{2}\psi \sin\varphi,\qquad x^{2}+y^{2}+z^{2}+u^{2} = r^{2},
> $$
>
> $$
> V = \{(r,\psi,\varphi,\theta) \mid 0\leq\psi\leq\tfrac{\pi}{2},\; 0\leq\varphi\leq\tfrac{\pi}{2},\; 0\leq\theta\leq\tfrac{\pi}{2},\; 0\leq r\leq 1\},
> $$
>
> 故原积分
>
> $$
> \begin{aligned}
> I &= \int_{0}^{\frac{\pi}{2}} d\theta \int_{0}^{\frac{\pi}{2}} \sin\varphi \,d\varphi \int_{0}^{\frac{\pi}{2}} \sin^{2}\psi \,d\psi \int_{0}^{1} \sqrt{\frac{1-r^{2}}{1+r^{2}}} \,r^{3}\,dr \\[4pt]
> &= \frac{\pi}{2} \cdot \frac{\pi}{4} \cdot \frac{\pi}{4}? \\[4pt]
> &= \frac{\pi^{2}}{16} \int_{0}^{1} \sqrt{\frac{1-r^{2}}{1+r^{2}}} \,r^{3}\,dr
> \end{aligned}
> $$
>
> 令 $r = \sin t$，
> $$
> = \frac{\pi^{2}}{16} \int_{0}^{\frac{\pi}{2}} (\sin t - \sin^{2} t) \,dt = \frac{\pi^{2}}{16} \Bigl(1-\frac{\pi}{4}\Bigr).
> $$

> [!solution]- 解 II（用双极坐标，把 $\mathbb{R}^{4}$ 看成 $\mathbb{R}^{2}\times\mathbb{R}^{2}$，$\mathbb{R}^{2}$ 上采用极坐标变换。）
> 令
>
> $$
> \begin{aligned}
> x &= r\cos\theta,\\
> y &= r\sin\theta,\\
> z &= \rho\cos\varphi,\\
> u &= \rho\sin\varphi,
> \end{aligned}
> $$
>
> 则
>
> $$
> J = \frac{\partial(x,y,z,u)}{\partial(r,\theta,\rho,\varphi)} = r\rho,\qquad x^{2}+y^{2}+z^{2}+u^{2} = r^{2}+\rho^{2},
> $$
>
> $$
> V = \{(r,\theta,\rho,\varphi) \mid 0\leq\theta\leq\tfrac{\pi}{2},\; 0\leq\varphi\leq\tfrac{\pi}{2},\; r\geq 0,\; \rho\geq 0,\; r^{2}+\rho^{2}\leq 1\}.
> $$
>
> 于是原积分
>
> $$
> I = \int_{0}^{\frac{\pi}{2}} d\theta \int_{0}^{\frac{\pi}{2}} d\varphi \iint_{\substack{r^{2}+\rho^{2}\leq 1\\ r\geq 0,\;\rho\geq 0}} \sqrt{\frac{1-r^{2}-\rho^{2}}{1+r^{2}+\rho^{2}}} \,r\rho \,drd\rho
> $$
>
> $$
> = \frac{\pi^{2}}{16} \Bigl(1-\frac{\pi}{4}\Bigr).
> $$
>
> （这里
>
> $$
> \begin{aligned}
> &\iint_{\substack{r^{2}+\rho^{2}\leq 1\\ r\geq 0,\;\rho\geq 0}} \sqrt{\frac{1-r^{2}-\rho^{2}}{1+r^{2}+\rho^{2}}} \,r\rho \,drd\rho \\
> &\quad \text{令 } r = s\cos t,\; \rho = s\sin t \\
> = &\int_{0}^{\frac{\pi}{2}} dt \int_{0}^{1} \sqrt{\frac{1-s^{2}}{1+s^{2}}} \,s^{3}\sin t\cos t \,ds \\[4pt]
> = &\frac{1}{4} \Bigl(1-\frac{\pi}{4}\Bigr).\qquad\text{）}
> \end{aligned}
> $$

> [!example] 例 7.2.41
> 计算积分 $I = \iiiint_{D} e^{(Ax,x)} \,dx_{1}dx_{2}dx_{3}dx_{4}$，其中 $(Ax,x)=\sum_{i,j=1}^{4} a_{ij}x_{i}x_{j}$ 是正定二次型，$D$ 是区域 $(Ax,x)\leq 1$。（国外赛题）

> [!solution]- 解（用正交变换）
> 由代数关于二次型的知识，存在正交变换，使二次型化为标准形：
>
> $$
> (Ax,x)=\sum_{i,j=1}^{4} a_{ij}x_{i}x_{j} = \sum_{i=1}^{4} \lambda_{i}\xi_{i}^{2}\leq 1,
> $$
>
> 这里 $|J|=1$。于是原积分
>
> $$
> \begin{aligned}
> I &= \iiiint \exp\Bigl(\sum_{i,j=1}^{4} a_{ij}x_{i}x_{j}\Bigr) \,dx_{1}dx_{2}dx_{3}dx_{4} \\
> &= \iiiint_{\sum \lambda_{i}\xi_{i}^{2}\leq 1} \exp\Bigl(\sum_{i=1}^{4} \lambda_{i}\xi_{i}^{2}\Bigr) \,d\xi_{1}d\xi_{2}d\xi_{3}d\xi_{4}.
> \end{aligned}
> $$
>
> 由于 $A$ 正定，所以 $\lambda_{i}>0$（$i=1,\dots,4$）。再作变换 $\xi_{i} = \dfrac{\eta_{i}}{\sqrt{\lambda_{i}}}$，则
>
> $$
> \sum_{i=1}^{4} \lambda_{i}\xi_{i}^{2} = \sum_{i=1}^{4} \eta_{i}^{2}\leq 1,\qquad |J| = \frac{1}{\sqrt{\lambda_{1}\lambda_{2}\lambda_{3}\lambda_{4}}} = \frac{1}{\sqrt{\det A}},
> $$
>
> 所以
>
> $$
> I = \frac{1}{\sqrt{\det A}} \iiiint_{\sum \eta_{i}^{2}\leq 1} \exp\Bigl(\sum_{i=1}^{4} \eta_{i}^{2}\Bigr) \,d\eta_{1}d\eta_{2}d\eta_{3}d\eta_{4} = \frac{\pi^{2}}{\sqrt{\det A}}.
> $$
>
> （最后的等式可用上例中的方法得到。）

> [!example] 例 7.2.42（相似变换）
> 相似比为 $a$ 的相似变换
>
> $$
> x_{1} = au_{1},\;\dots,\; x_{n} = au_{n}\quad (a>0)
> $$
>
> 将 $(u_{1},\dots,u_{n})$ 空间的区域 $V_{n}(1)$ 变为 $(x_{1},\dots,x_{n})$ 空间的 $V_{n}(a)$，试证 $V_{n}(a)$ 的体积 $v_{n}(a)$ 与 $V_{n}(1)$ 的体积 $v_{n}(1)$ 有关系：$v_{n}(a)=a^{n}v_{n}(1)$。

> [!proof]- 证
> $$
> v_{n}(a) = \int\!\cdots\!\int_{V_{n}(a)} dx_{1}\dots dx_{n} = \int\!\cdots\!\int_{V_{n}(1)} |J| \,du_{1}\dots du_{n} = a^{n} \int\!\cdots\!\int_{V_{n}(1)} du_{1}\dots du_{n} = a^{n} v_{n}(1).
> $$


#### c. 递推与降维

人们处理问题的重要手段之一是将问题进行转化。上述变量替换就是转化积分的一种方法，它将复杂的 n 重积分化为较简单的 n 重积分。这种转化只改变积分的形式，不改变维数，可说是一种横向变形。下面介绍一种纵向变形，即将高维积分向低维积分转化。

> [!note] 要点
> 为了计算 n 重积分（或 n 次累次积分），我们可设法按维数建立积分的递推公式，即找出不同维数相应积分的关系；然后重复使用此种关系，求出积分值。

> [!example] 例 7.2.43  试求截距为 a 的 n 维单纯形
>
> $$
> \Delta_n(a)=\{(x_1,\dots,x_n)\mid x_1\geqslant0,x_2\geqslant0,\dots,x_n\geqslant0,x_1+\cdots+x_n\leqslant a\ (a>0)\}
> $$
>
> 的体积 $v_n(a)$.
> **分析** 如上例所述，若作相似变换 $x_1=au_1,\cdots,x_n=au_n$，则 $\Delta_n(a)$ 变成
>
> $$
> \Delta_n(1)=\{(u_1,\cdots,u_n)\mid u_1\geqslant0,\cdots,u_n\geqslant0,u_1+\cdots+u_n\leqslant1\}.
> $$
>
> 这时
>
> $$
> v_n(a)=\int\cdots\int_{\Delta_n(a)}dx_1\cdots dx_n=a^n\int\cdots\int_{\Delta_n(1)}du_1\cdots du_n=a^nv_n(1).
> $$
>
> 可见我们的问题归于计算 $v_n(1)$.
>
> 从式（2）知，给定 $u_n\in[0,1]$ 时，截得 $n-1$ 维单纯形
>
> $$
> \Delta_{n-1}(1-u_n)=\{(u_1,\cdots,u_{n-1})\mid u_1\geqslant0,\cdots,u_{n-1}\geqslant0,u_1+\cdots+u_{n-1}\leqslant1-u_n\}.
> $$
>
> 它的体积为 $v_{n-1}(1-u_n)$，因此
>
> $$
> v_n(1)=\int\cdots\int_{\substack{u_1+\cdots+u_n\leqslant1\\u_1\geqslant0,\cdots,u_n\geqslant0}}du_1\cdots du_n
> =\int_0^1du_n\int\cdots\int_{\substack{u_1+\cdots+u_{n-1}\leqslant1-u_n\\u_1\geqslant0,\cdots,u_{n-1}\geqslant0}}du_1\cdots du_{n-1}
> $$
>
> $$
> =\int_0^1v_{n-1}(1-u_n)du_n\overset{式(3)}{=}\int_0^1(1-u_n)^{n-1}v_{n-1}(1)du_n
> $$
>
> $$
> =v_{n-1}(1)\int_0^1(1-u_n)^{n-1}du_n=\frac{1}{n}v_{n-1}(1).
> $$
>
> 这便是欲求的递推公式。反复使用此式，
>
> $$
> v_n(1)=\frac{1}{n}v_{n-1}(1)=\frac{1}{n(n-1)}v_{n-2}(1)=\cdots=\frac{1}{n(n-1)\cdots2}v_1(1)=\frac{1}{n!}.
> $$
>
> 代入式（3）得
>
> $$
> v_n(a)=\frac{a^n}{n!}.
> $$

类似可以计算

> [!example] 例 7.2.44 求 $n$ 维球体 $x_1^2+x_2^2+\cdots+x_n^2\leqslant r^2$ 的体积 $v_n(r)$.
>
> **解**
>
> $$
> v_{2m}(r)=\frac{\pi^m}{m!}r^{2m},\qquad v_{2m+1}(r)=\frac{2(2\pi)^m}{(2m+1)!!}r^{2m+1}.
> $$

数学归纳法，也是一种递推法，可资利用。

> [!example] 例 7.2.45 设 $f(x)$ 在 $[a,b]$ 上连续，试证：$\forall\,x\in(a,b)$，有
>
> $$
> \int_a^x dx_1\int_a^{x_1}dx_2\cdots\int_a^{x_n}f(x_{n+1})dx_{n+1}
> =\frac{1}{n!}\int_a^x(x-y)^nf(y)dy\qquad(n=1,2,\cdots).
> $$
>
> （大连理工大学）
>
> > [!proof]- 证Ⅰ（数学归纳法）
> > $n=1$ 时，只要将左端（二重的）累次积分变成另一种次序的（二重）累次积分即可知等式成立。假设 $n=k-1$ 时成立，来证 $n=k$ 时亦成立。事实上，
> >
> > $$
> > \int_a^x dx_1\left(\int_a^{x_1}dx_2\cdots\int_a^{x_k}f(x_{k+1})dx_{k+1}\right)
> > $$
> >
> > $$
> > =\int_a^x\left[\frac{1}{(k-1)!}\int_a^{x_1}(x_1-y)^{k-1}f(y)dy\right]dx_1
> > $$
> >
> > $$
> > =\frac{1}{(k-1)!}\iint_D(x_1-y)^{k-1}f(y)dydx_1\qquad(D\text{ 如图 }7.2.41\text{ 所示})
> > $$
> >
> > $$
> > =\frac{1}{(k-1)!}\int_a^xdy\int_y^x(x_1-y)^{k-1}f(y)dx_1
> > =\frac{1}{k!}\int_a^x(x-y)^kf(y)dy.
> > $$
>
> > [!proof]- 证Ⅱ（利用微分法求递推公式）
> > 记
> >
> > $$
> > I_n(x)=\frac{1}{n!}\int_a^x(x-y)^nf(y)dy,
> > $$
> >
> > 则
> >
> > $$
> > I_n'(x)=\frac{1}{(n-1)!}\int_a^x(x-y)^{n-1}f(y)dy=I_{n-1}(x).
> > $$
> >
> > 因 $I_n(a)=0$，所以 $I_n(x)=\int_a^xI_n'(x_1)dx_1=\int_a^xI_{n-1}(x_1)dx_1$. 反复利用此递推公式，得
> >
> > $$
> > I_n(x)=\int_a^xI_{n-1}(x_1)dx_1=\int_a^xdx_1\int_a^{x_1}I_{n-2}(x_2)dx_2=\cdots=\int_a^xdx_1\int_a^{x_1}dx_2\cdots\int_a^{x_{n-1}}I_0(x_n)dx_n.
> > $$
> >
> > $$
> > I_0(x_n)=\int_a^{x_n}f(y)dy=\int_a^{x_n}f(x_{n+1})dx_{n+1}.
> > $$
> >
> > 故
> >
> > $$
> > \int_a^x dx_1\int_a^{x_1}dx_2\cdots\int_a^{x_n}f(x_{n+1})dx_{n+1}=I_n(x)=\frac{1}{n!}\int_a^x(x-y)^nf(y)dy.
> > $$
>
> > [!proof]- 证Ⅲ（利用 Taylor 公式）
> > 设
> >
> > $$
> > g(x)=\int_a^x dx_1\int_a^{x_1}dx_2\cdots\int_a^{x_n}f(x_{n+1})dx_{n+1}-\frac{1}{n!}\int_a^x(x-y)^nf(y)dy
> > $$
> >
> > （我们的任务在于证明 $g(x)\equiv0$），则知
> >
> > $$
> > g(a)=g'(a)=\cdots=g^{(n)}(a)=0,\qquad g^{(n+1)}(x)=f(x)-f(x)\equiv0.
> > $$
> >
> > 故由 Taylor 公式知 $g(x)\equiv0$，即欲证的恒等式成立。

#### d. 利用积分定义

> [!note] 要点
> 积分是积分和的极限，因此有些关于积分的问题可转化为积分和的对应问题。

> [!example] 例 7.2.46
> 设 $f_1(x),\cdots,f_m(x);g_1(x),\cdots,g_m(x)$ 在 $[a,b]$ 上正常可积，试证：
>
> $$
> \frac{1}{m!}\int_b^a\cdots\int_b^a
> \begin{vmatrix}
> f_1(x_1)&\cdots&f_1(x_m)\\
> \vdots&&\vdots\\
> f_m(x_1)&\cdots&f_m(x_m)
> \end{vmatrix}
> \begin{vmatrix}
> g_1(x_1)&\cdots&g_1(x_m)\\
> \vdots&&\vdots\\
> g_m(x_1)&\cdots&g_m(x_m)
> \end{vmatrix}
> dx_1\cdots dx_m
> $$
>
> $$
> =\begin{vmatrix}
> \int_a^bf_1(x)g_1(x)dx&\cdots&\int_a^bf_1(x)g_m(x)dx\\
> \vdots&&\vdots\\
> \int_a^bf_m(x)g_1(x)dx&\cdots&\int_a^bf_m(x)g_m(x)dx
> \end{vmatrix}.\qquad(1)
> $$

> [!proof]- 证
> 将 $[a,b]$ 进行 $n$ 等分，作分划，记
>
> $$
> f_{ir}=f_i\left(a+\frac{r}{n}(b-a)\right),\qquad g_{jr}=g_j\left(a+\frac{r}{n}(b-a)\right).
> $$
>
> 设 $n>m$，利用积分定义，式（1）可写成
>
> $$
> \frac{1}{m!}\lim_{n\to+\infty}\sum_{r_1=1}^n\cdots\sum_{r_m=1}^n
> \begin{vmatrix}
> f_{1r_1}&\cdots&f_{1r_m}\\
> \vdots&&\vdots\\
> f_{mr_1}&\cdots&f_{mr_m}
> \end{vmatrix}
> \begin{vmatrix}
> g_{1r_1}&\cdots&g_{1r_m}\\
> \vdots&&\vdots\\
> g_{mr_1}&\cdots&g_{mr_m}
> \end{vmatrix}
> \left(\frac{b-a}{n}\right)^m
> $$
>
> $$
> =\begin{vmatrix}
> \lim_{n\to+\infty}\sum_{r=1}^nf_{1r}g_{1r}\cdot\frac{b-a}{n}&\cdots&\lim_{n\to+\infty}\sum_{r=1}^nf_{1r}g_{mr}\cdot\frac{b-a}{n}\\
> \vdots&&\vdots\\
> \lim_{n\to+\infty}\sum_{r=1}^nf_{mr}g_{1r}\cdot\frac{b-a}{n}&\cdots&\lim_{n\to+\infty}\sum_{r=1}^nf_{mr}g_{mr}\cdot\frac{b-a}{n}
> \end{vmatrix}.
> $$
>
> 注意等式左、右两端，有公因子 $\left(\dfrac{b-a}{n}\right)^m$，可以约去。行列式中的极限符号可以提出行列式，因此只需证明
>
> $$
> \frac{1}{m!}\sum_{r_1=1}^n\cdots\sum_{r_m=1}^n
> \begin{vmatrix}
> f_{1r_1}&\cdots&f_{1r_m}\\
> \vdots&&\vdots\\
> f_{mr_1}&\cdots&f_{mr_m}
> \end{vmatrix}
> \begin{vmatrix}
> g_{1r_1}&\cdots&g_{1r_m}\\
> \vdots&&\vdots\\
> g_{mr_1}&\cdots&g_{mr_m}
> \end{vmatrix}
> =\begin{vmatrix}
> \sum_{r=1}^nf_{1r}g_{1r}&\cdots&\sum_{r=1}^nf_{1r}g_{mr}\\
> \vdots&&\vdots\\
> \sum_{r=1}^nf_{mr}g_{1r}&\cdots&\sum_{r=1}^nf_{mr}g_{mr}
> \end{vmatrix}.\qquad(2)
> $$
>
> 用记号 $(a_{ij})_{m\times n}\equiv
> \begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}$，式（2）右端的行列式
>
> $$
> \det\left(\sum_{r=1}^nf_{ir}g_{jr}\right)_{m\times m}
> =\det\left((f_{ir})_{m\times n}\cdot(g_{jr})_{m\times n}^{\mathrm T}\right).\qquad(3)
> $$
>
> 根据矩阵乘积定理，
>
> $$
> \det\left((f_{ir})_{m\times n}\cdot(g_{jr})_{m\times n}^{\mathrm T}\right)
> =\sum_{1\leqslant r_1<r_2<\cdots<r_m\leqslant n}
> \begin{vmatrix}
> f_{1r_1}&\cdots&f_{1r_m}\\
> \vdots&&\vdots\\
> f_{mr_1}&\cdots&f_{mr_m}
> \end{vmatrix}
> \begin{vmatrix}
> g_{1r_1}&\cdots&g_{1r_m}\\
> \vdots&&\vdots\\
> g_{mr_1}&\cdots&g_{mr_m}
> \end{vmatrix}
> $$
>
> $$
> =\frac{1}{m!}\sum_{r_1=1}^n\cdots\sum_{r_m=1}^n
> \begin{vmatrix}
> f_{1r_1}&\cdots&f_{1r_m}\\
> \vdots&&\vdots\\
> f_{mr_1}&\cdots&f_{mr_m}
> \end{vmatrix}
> \begin{vmatrix}
> g_{1r_1}&\cdots&g_{1r_m}\\
> \vdots&&\vdots\\
> g_{mr_1}&\cdots&g_{mr_m}
> \end{vmatrix}.\qquad(4)
> $$
>
> 联系（3）、（4），即得式（2）。证毕。


### 单元练习 7.2

#### 二重积分

> [!exercise] 7.2.1
> 设 $f(x)$ 在 $[a,b]$ 上连续，证明：
> $$
> \int_a^bdx\int_a^xf(y)dy=\int_a^b(b-x)f(x)dx.\qquad（华中科技大学）
> $$

> [!hint]- 提示
> 可参看例 7.2.4 所得的公式。

> [!exercise] 7.2.2
> 改变二次积分：
> $$
> \int_0^2dx\int_0^{x^2/2}f(x,y)dy+\int_2^{2\sqrt2}dx\int_0^{\sqrt{8-x^2}}f(x,y)dy
> $$
> 的顺序。（东北大学）
> $$
> \left(\int_0^2dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx\right)
> $$

> [!exercise] 7.2.3
> 设 $a>0$ 是常数，计算积分
> $$
> I=\iint_{x^2+y^2\leqslant ax}xy^2dxdy.\qquad（北京大学）
> $$

> [!hint]- 提示
> 积分上、下对称，$I=2\int_0^adx\int_0^{\sqrt{ax-x^2}}xy^2dy$.

> [!exercise] ☆7.2.4
> 计算由椭圆
> $$
> (a_1x+b_1y+c_1)^2+(a_2x+b_2y+c_2)^2=1\qquad(a_1b_2-b_1a_2\neq0)
> $$
> 所界的面积。（西北师范大学）

> [!hint]- 提示
> 令 $u=a_1x+b_1y+c_1,\ v=a_2x+b_2y+c_2$.

> [!hint]- 再提示
> $$
> S=\iint_Ddxdy=\iint_{u^2+v^2\leqslant1}\frac{1}{|a_1b_2-a_2b_1|}dudv=\frac{\pi}{|a_1b_2-a_2b_1|}.
> $$

> [!exercise] ☆7.2.5
> 设 $f$ 为连续函数，求证：
> $$
> \iint_Df(x-y)dxdy=\int_{-A}^Af(\xi)(A-|\xi|)d\xi,
> $$
> 其中 $D:|x|\leqslant\dfrac{A}{2},\ |y|\leqslant\dfrac{A}{2}$（$A$ 为常数）。（北京航空航天大学）

> [!hint]- 提示
> （如图 7.2.42）可令 $\xi=x-y,\ \eta=x+y$，即 $x=\dfrac{\xi+\eta}{2},\ y=\dfrac{\eta-\xi}{2}$，这时 $J=\dfrac12$.

> [!hint]- 再提示
> 这时 $|x|\leqslant\dfrac{A}{2},\ |y|\leqslant\dfrac{A}{2}$ 等价于 $-A\leqslant\xi+\eta\leqslant A，-A\leqslant\eta-\xi\leqslant A$，故 $D$ 变为 $\xi\eta$ 平面上的
> $$
> D'=\{(\xi,\eta)\mid |\xi|+|\eta|\leqslant A\}=\{(\xi,\eta)\mid -A\leqslant\xi\leqslant A,\ |\xi|-A\leqslant\eta\leqslant A-|\xi|\},
> $$
> 因此（原式）左端
> $$
> =\iint_{D'}f(\xi)\cdot\frac12\,d\xi d\eta
> =\frac12\int_{-A}^Af(\xi)d\xi\int_{|\xi|-A}^{A-|\xi|}d\eta=\text{右端}.
> $$

> [!exercise] ☆7.2.6
> 设 $f(x)$ 在 $[0,1]$ 上连续，证明：
> $$
> \iint_{\triangle OAB}f(1-y)f(x)dxdy=\frac12\left[\int_0^1f(x)dx\right]^2,
> $$
> 其中 $\triangle OAB$ 为 $O(0,0),A(0,1),B(1,0)$ 为顶点的三角形区域（如图 7.2.43）.

> [!hint]- 提示
> 可从等式左端往右端证，也可从右端往左端证。

> [!hint]- 再提示
> （左端往右端。）令 $u=1-x,\ v=1-y$（即关于点 $\left(\dfrac12,\dfrac12\right)$ 作点对称变换），则 $J=1$，
> $$
> \text{左端}=\iint_{\triangle OAB}f(1-y)f(x)dxdy=\iint_{\triangle CBA}f(v)f(1-u)dudv
> $$
> $$
> =\iint_{\triangle CBA}f(1-y)f(x)dxdy\qquad（与字母无关）
> $$
> $$
> =\frac12\iint_{[0,1]\times[0,1]}f(1-y)f(x)dxdy\qquad（两等量等于和之半）
> $$
> $$
> =\frac12\int_0^1f(x)dx\int_0^1f(1-y)dy=\text{右端}.
> $$
>
> （右端往左端。）
> $$
> 2\cdot\text{右端}=\left[\int_0^1f(x)dx\right]^2=\int_0^1f(x)dx\cdot\int_0^1f(u)du
> $$
> $$
> \overset{令\ u=1-y}{=}\int_0^1f(x)dx\int_0^1f(1-y)dy=\iint_{0\leqslant x\leqslant1\atop 0\leqslant y\leqslant1}f(x)f(1-y)dxdy
> $$
> $$
> =\iint_{\triangle OAB}\cdots+\iint_{\triangle BCA}\cdots\overset{点关于\left(\dfrac12,\dfrac12\right)\text{点对称变换}}{=}2\iint_{\triangle OAB}\cdots=2\cdot\text{左端}.
> $$

> [!exercise] ☆7.2.7
> 证明：
> $$
> \iint_Sf(ax+by+c)dxdy=2\int_{-1}^1\sqrt{1-u^2}\,f\left(u\sqrt{a^2+b^2}+c\right)du,
> $$
> 其中 $S:x^2+y^2\leqslant1$，$a^2+b^2\neq0$。（东北师范大学）

> [!hint]- 提示
> 令
> $$
> u=\frac{ax+by}{\sqrt{a^2+b^2}},\qquad v=\frac{bx-ay}{\sqrt{a^2+b^2}},
> $$
> 作变换。

> [!hint]- 再提示
> 这时 $|J|=1$，
> $$
> \text{左端}=\iint_{u^2+v^2\leqslant1}f\left(u\sqrt{a^2+b^2}+c\right)dudv
> =\int_{-1}^1du\int_{-\sqrt{1-u^2}}^{\sqrt{1-u^2}}f\left(u\sqrt{a^2+b^2}+c\right)dv=\text{右端}.
> $$

> [!exercise] ☆7.2.8
> 计算曲面 $y=1-\sqrt{x^2+z^2}$ 与平面 $x=0,y=x$ 所围成的立体的体积。（福建师范大学）

> [!hint]- 提示
> $y=1-\sqrt{x^2+z^2}$ 是以 $y$ 轴作对称轴的圆锥曲面，立体上、下对称（如图 7.2.44），
> $$
> V=2\iint_D\sqrt{(1-y)^2-x^2}\,dxdy,
> $$
> $D$ 是 $xOy$ 平面上由 $x=0,y=x,x+y=1$ 所围成的区域。

> [!hint]- 再提示
> $$
> V=2\int_0^{1/2}dy\int_0^y\sqrt{(1-y)^2-x^2}\,dx+2\int_{1/2}^1dy\int_0^{1-y}\sqrt{(1-y)^2-x^2}\,dx
> $$
> 或
> $$
> V=2\int_0^{1/2}dx\int_x^{1-x}\sqrt{(1-y)^2-x^2}\,dy.
> $$

> [!exercise] ☆7.2.9
> 1）计算积分
> $$
> A=\int_0^1\int_0^1\left|xy-\frac14\right|dxdy;
> $$
> 2）设 $z=f(x,y)$ 在闭正方形 $D:0\leqslant x\leqslant1,0\leqslant y\leqslant1$ 上连续，且满足条件：
> $$
> \iint_Df(x,y)dxdy=0,
> $$
> $$
> \iint_D|f(x,y)|xydxdy=1.
> $$
> 证明：存在 $(\xi,\eta)\in D$，使得 $|f(\xi,\eta)|\geqslant\dfrac{1}{A}$，此 $A$ 为 1）中积分值。（北京大学）

> [!hint]- 提示
> 1）见例 7.2.5 的 1）. 2）可用反证法。

> [!hint]- 再提示
> 2）若每点有 $|f(x,y)|<\dfrac1A$，由连续函数的介值性，存在点 $(x_0,y_0)\in D$，使得 $M=|f(x_0,y_0)|=\max_D|f(x,y)|<\dfrac1A$.
> $$
> 1=\iint_Df(x,y)\cdot\left(xy-\frac14\right)dxdy\leqslant\iint_D|f(x,y)|\left|xy-\frac14\right|dxdy
> $$
> $$
> \leqslant M\iint_D\left|xy-\frac14\right|dxdy<\frac1A\cdot A=1,
> $$
> 矛盾。

> [!exercise] 7.2.10
> 把正确结论的编号填在题末的括号内。
>
> 若 $f(x,y)$ 在矩形 $G:0\leqslant x\leqslant1,0\leqslant y\leqslant1$ 上有定义，且积分
> $$
> I_1=\int_0^1dx\int_0^1f(x,y)dy\qquad\text{与}\qquad I_2=\int_0^1dy\int_0^1f(x,y)dx
> $$
> 都存在，则
> （A）$I_1=I_2$　　（B）$I_1\neq I_2$
> （C）二重积分 $\iint_G f(x,y)dxdy$ 存在　　（D）二重积分 $\iint_G f(x,y)dxdy$ 可能不存在
> 答：（　　）。（中山大学）
>
> ※ 提问：如何分别给出反例说明只有（D）正确。

#### 三重积分

> [!exercise] \*☆7.2.11
> 改变三重积分 $I=\int_0^1dx\int_0^xdy\int_0^{xy}f(x,y,z)dz$ 的积分次序：
> 1）先 $y$ 后 $z$ 再 $x$；  2）先 $x$ 后 $z$ 再 $y$。（华中科技大学）

> [!hint]- 提示
> 积分区域是四面体：由 $x=1$, $y=x$, $z=0$ 及 $z=xy$ 所成的图形如图 7.2.45 所示。

> [!hint]- 再提示
> 1）$I=\int_0^1dx\int_0^{x^2}dz\int_{z/x}^xf(x,y,z)dy$.
> 2）$I=\int_0^1dy\bigl(\int_0^{y^2}dz\int_y^1f(x,y,z)dx+\int_{y^2}^ydz\int_{z/y}^1f(x,y,z)dx\bigr)$.

> [!exercise] 7.2.12
> 求极限 $\displaystyle\lim_{t\to0^+}\frac{1}{t^6}\iiint_{\Omega_t}\sin(x^2+y^2+z^2)^{3/2}dxdydz$，其中 $\Omega_t=\{(x,y,z)\mid x^2+y^2+z^2\leqslant t^2\}$。（中国人民大学）
>
> $\dfrac{2}{3}\pi$

> [!exercise] 7.2.13
> 证明：$\displaystyle\lim_{n\to\infty}\frac{1}{n^4}\iiint_{r\leqslant n}[r]dxdydz=\pi$，其中 $r=\sqrt{x^2+y^2+z^2}$，$[r]$ 是 $r$ 的整数部分（即不大于 $r$ 的最大整数），$n$ 为正整数。（西安电子科技大学）

> [!hint]- 提示
> $1^3+2^3+3^3+\cdots+n^3=(1+2+3+\cdots+n)^2$.

> [!hint]- 再提示
> $\displaystyle\frac{1}{n^4}\iiint_{r\leqslant n}[r]dxdydz$
> $$
> =\frac{1}{n^4}\sum_{k=1}^n(k-1)\iiint_{k-1\leqslant r\leqslant k}dV=\frac{1}{n^4}\cdot2\pi\cdot2\sum_{k=1}^n\int_{k-1}^k(k-1)r^2dr
> $$
> $$
> =\frac{4\pi}{n^4}\sum_{k=1}^n(k-1)\cdot\frac{1}{3}[k^3-(k-1)^3]
> $$
> $$
> =\frac{4\pi}{n^4}\left(\sum_{k=1}^nk^3-2\sum_{k=1}^nk^2+\frac{4}{3}\sum_{k=1}^nk-\frac{n}{3}\right)
> $$
> $$
> =\frac{4\pi}{n^4}\left[(1+2+\cdots+n)^2-2\cdot\frac{1}{6}n(n+1)(2n+1)+\frac{4}{3}n\frac{n+1}{2}-\frac{n}{3}\right]
> $$
> $\to\pi$（$n\to\infty$）.

> [!exercise] ☆7.2.14
> 设函数 $f(x)$ 有连续导数，且 $f(0)=0$，求
> $$
> \lim_{t\to0}\frac{1}{\pi t^4}\iiint_{x^2+y^2+z^2\leqslant t^2}f(\sqrt{x^2+y^2+z^2})dxdydz.
> $$
> （辽宁师范大学）
>
> 《$f'(0)$》

> [!hint]- 提示
> 引用球面坐标和 L'Hospital 法则。

> [!hint]- 再提示
> 原式 $\displaystyle=\lim_{t\to0}\frac{1}{\pi t^4}\int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^tf(r)r^2dr=\lim_{t\to0}\frac{4}{t^4}\int_0^tf(r)r^2dr$（L'Hospital 法则）
> $$
> =\lim_{t\to0}\frac{f(t)-f(0)}{t}=f'(0).
> $$

> [!exercise] 7.2.15
> 计算 $\displaystyle\iiint_\Omega(px^{2m}+qy^{2n}+rz^{2l})dxdydz$，其中 $\Omega$ 为 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}\leqslant R^2$，$m,n,l,p,q,r,a,b,c,R$ 均为已知正数。（北京航空航天大学）

> [!hint]- 提示
> 可用广义球坐标（参看例 7.2.23 的 2）和 3））。

> [!hint]- 再提示
> 令 $x=a\rho\sin\varphi\cos\theta$, $y=b\rho\sin\varphi\sin\theta$, $z=c\rho\cos\varphi$，
> 则 $J=abc\rho^2\sin\varphi$.
> 将原积分拆成三项：
> $$
> \iiint_\Omega(px^{2m}+qy^{2n}+rz^{2l})dxdydz=I_1+I_2+I_3,
> $$
> 其中
> $$
> I_1=\iiint_\Omega px^{2m}dV=pa^{2m+1}bc\int_0^R\rho^{2m+2}d\rho\int_0^\pi\sin^{2m+1}\varphi\,d\varphi\int_0^{2\pi}\cos^{2m}\theta\,d\theta
> $$
> $$
> =\frac{pa^{2m+1}bcR^{2m+3}}{2m+3}\cdot2\cdot\frac{(2m)!!}{(2m+1)!!}\cdot4\cdot\frac{(2m-1)!!}{(2m)!!}\cdot\frac{\pi}{2}
> $$
> $$
> =\frac{4pa^{2m+1}bcR^{2m+3}}{(2m+1)(2m+3)}\pi,
> $$
> $$
> I_2=\iiint_\Omega qy^{2n}dV=qb^{2n+1}ac\int_0^R\rho^{2n+2}d\rho\int_0^\pi\sin^{2n+1}\varphi\,d\varphi\int_0^{2\pi}\sin^{2n}\theta\,d\theta
> $$
> $$
> =\frac{4qb^{2n+1}acR^{2n+3}}{(2n+3)(2n+1)}\pi,
> $$
> $$
> I_3=\iiint_\Omega rz^{2l}dxdydz=rc^{2l+1}ab\cdot2\pi\int_0^R\rho^{2l+2}d\rho\int_0^\pi\cos^{2l}\varphi\sin\varphi\,d\varphi
> $$
> $$
> =\frac{4rc^{2l+1}abR^{2l+3}}{(2l+1)(2l+3)}\pi.
> $$
> 故 原积分 $\displaystyle=4abc\pi R^3\left[\frac{pa^{2m}R^{2m}}{(2m+1)(2m+3)}+\frac{qb^{2n}R^{2n}}{(2n+1)(2n+3)}+\frac{rc^{2l}R^{2l}}{(2l+1)(2l+3)}\right]$.

> [!exercise] 7.2.16
> 计算三重积分 $\displaystyle\iiint z\,dxdydz$。（中国科学院）
> 其中 $x^2+y^2+z^2\leqslant1$，$x^2+y^2-z^2\geqslant\dfrac12$.
>
> 《$0$》

> [!hint]- 提示
> 区域及被积函数都具有上、下对称性。

> [!exercise] 7.2.17
> 设 $a>0,b>0,c>0$，试证：
> $$
> \iiint_Vx^{a-1}y^{b-1}z^{c-1}dxdydz=\frac{1}{a+b+c}\cdot\frac{\Gamma(a)\Gamma(b)\Gamma(c)}{\Gamma(a+b+c)},
> $$
> 其中 $V$ 为四面体，$x\geqslant0$，$y\geqslant0$，$z\geqslant0$，$x+y+z\leqslant1$。（郑州大学）

> [!hint]- 提示
> 可垂直 $z$ 轴作截面，用截面法。

> [!hint]- 再提示
> 左端 $\displaystyle=\int_0^1dz\iint_{D_z}x^{a-1}y^{b-1}z^{c-1}dxdy=\int_0^1dz\int_0^{1-z}dx\int_0^{1-x-z}x^{a-1}y^{b-1}z^{c-1}dy$
> $$
> =\frac{1}{b}\int_0^1z^{c-1}dz\int_0^{1-z}x^{a-1}(1-x-z)^bdx\quad(\text{令 }x=(1-z)u)
> $$
> $$
> =\frac{1}{b}\int_0^1z^{c-1}(1-z)^{a+b+1}dz\int_0^1u^{a-1}(1-u)^bdu
> $$
> $$
> =\frac{1}{b}B(c,a+b+1)\cdot B(a,b+1)=\text{右端}.
> $$

> [!exercise] \*☆7.2.18
> 计算由平面
> $$
> 3x-y-z=\pm1,\quad -x+3y-z=\pm1,\quad -x-y+3z=\pm1
> $$
> 所围成的体积，将此结果推广到 $n$ 维空间，它的体积应是多少？（上海交通大学）
>
> 《$1/2$》

> [!hint]- 提示
> 可引用新坐标
> $$
> \xi=3x-y-z,\quad\eta=-x+3y-z,\quad\zeta=-x-y+3z,
> $$
> $$
> J^{-1}=\begin{vmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{vmatrix}=16,
> $$
> $V'=\{(\xi,\eta,\zeta)\mid|\xi|\leqslant1,|\eta|\leqslant1,|\zeta|\leqslant1\}$.
>
> $n$ 维空间
> $$
> 3x_1-x_2-\cdots-x_n=\pm1,
> $$
> $$
> -x_1+3x_2-\cdots-x_n=\pm1,
> $$
> $$
> \cdots\cdots\cdots\cdots\cdots\cdots
> $$
> $$
> -x_1-x_2-\cdots+3x_n=\pm1,
> $$
> 所围体积
> $$
> V=\frac{1}{3^n+(-1)^n(4n-1)}\int_{-1}^1d\xi_1\int_{-1}^1d\xi_2\cdots\int_{-1}^1d\xi_n=\frac{2^n}{3^n+(-1)^n(4n-1)}.
> $$

> [!exercise] 7.2.19
> 求曲面 $(x^2+y^2+z^2)^3=a^3xyz$ 所围的体积。（中国科学院）

> [!hint]- 提示
> $\displaystyle V=4\int_0^{\pi/2}d\theta\int_0^{\pi/2}d\varphi\int_0^{(a^3\sin^2\varphi\cos\varphi\sin\theta\cos\theta)^{1/3}}r^2\sin\varphi\,dr=\frac{a^3}{6}$.

> [!exercise] 7.2.20
> 求曲面 $(x^2+y^2+z^2)=\dfrac{z}{h}e^{-\frac{z^2}{x^2+y^2+z^2}}$ 所围的体积。（河北师范大学）

> [!hint]- 提示
> $\displaystyle V=\int_0^{2\pi}d\theta\int_0^{\pi/2}d\varphi\int_0^{h^{-1}\cos\varphi\,e^{-\cos^2\varphi}}r^2\sin\varphi\,dr=\frac{1}{27}\pi h^{-3}(1-4e^{-3})$.

> [!exercise] ☆7.2.21
> 求 $xOz$ 平面上的圆周 $(x-a)^2+z^2=b^2$（$0<b<a$）绕 $z$ 轴旋转一周所成闭曲面所包围的体积。（厦门大学）

> [!hint]- 提示
> 可用截面法，或在 $(x-a)^2+z^2\leqslant b^2$ 圆内用二重积分元素法求旋转体体积。

> [!hint]- 再提示
> $\displaystyle V=\iiint_Vdxdydz=\int_{-b}^bdz\iint_{D_z}dydx$，其中 $\displaystyle\iint_{D_z}dydx=$ 圆环 $D_z$ 的面积 $=\pi r_2^2-\pi r_1^2$，
> $r_2=$ 大圆半径 $=a+\sqrt{b^2-z^2}$，$r_1=$ 小圆半径 $=a-\sqrt{b^2-z^2}$.
> 故
> $$
> V=\pi\int_{-b}^b\bigl[(a+\sqrt{b^2-z^2})^2-(a-\sqrt{b^2-z^2})^2\bigr]dz=4a\pi\int_{-b}^b\sqrt{b^2-z^2}\,dz
> $$
> $$
> =8a\pi b^2\int_0^{\pi/2}\cos^2\theta\,d\theta=4a\pi b^2\int_0^{\pi/2}(1+\cos2\theta)d\theta=2ab^2\pi^2.
> $$

> [!solution]- 解
> 在 $xOz$ 平面上，在圆 $(x-a)^2+z^2\leqslant b^2$ 内任一点 $(x,z)$ 处取任意小的面积元素 $d\sigma$，绕 $z$ 轴旋转所得旋转体体积为 $2\pi x\,d\sigma$。故此圆的旋转体体积
> $$
> V=\iint_{(x-a)^2+z^2\leqslant b^2}2\pi x\,d\sigma=2\pi\int_0^{2\pi}d\theta\int_0^b(a+r\cos\theta)r\,dr\quad(x=a+r\cos\theta,\ z=r\sin\theta)
> $$
> $$
> =2ab^2\pi^2.
> $$

> [!exercise] ☆7.2.22
> 底半径为 $a$，高为 $H$ 的无盖圆柱容器，倾斜地支放在桌面上，其轴线与桌面成 $45^\circ$ 角，试就 $a$，$H$ 的不同情况，求容器的最大贮水量。（北京大学）

> [!hint]- 提示
> （如图 7.2.46）可取圆柱底面中心为原点，对称轴作 $z$ 轴，斜朝上与桌面法线成 $45^\circ$ 角，$Ox$、$Oy$ 轴与桌面平行。这时容器的最高水平面方程可写为 $z+y=H-a$.

> [!hint]- 再提示
> （1）当 $H\geqslant2a$ 时，最大贮水量（取柱面坐标）
> $$
> V=\int_0^{2\pi}d\theta\int_0^ardr\int_0^{H-a-r\cos\theta}dz=\pi a^2(H-a).
> $$
> （2）当 $H<2a$ 时，（用直角坐标，采用投影法或截面法）最大贮水量
> $$
> V=2\int_{-a}^{H-a}dy\int_0^{\sqrt{a^2-y^2}}dx\int_0^{H-a-y}dz=2\int_{-a}^{H-a}\sqrt{a^2-y^2}(H-a-y)dy
> $$
> $$
> =2(H-a)\int_{-a}^{H-a}\sqrt{a^2-y^2}\,dy+\int_{-a}^{H-a}\sqrt{a^2-y^2}(a^2-y^2)\,dy
> $$
> $$
> =a^2(H-a)\left(\sin^{-1}\frac{H-a}{a}+\frac{\pi}{2}\right)+(H-a)^2\sqrt{2Ha-H^2}+\frac{2}{3}(2Ha-H^2)^{3/2}.
> $$

> [!exercise] 7.2.23
> 设 $f(x)>0$ 连续，$\displaystyle F(t)=\frac{\iiint_Vf(x^2+y^2+z^2)dxdydz}{\iint_Df(x^2+y^2)dxdy}$，其中 $V=\{(x,y,z)\mid x^2+y^2+z^2\leqslant t^2\}$，$D=\{(x,y)\mid x^2+y^2\leqslant t^2\}$，试证 $F(t)>t$（当 $t>0$ 时）.

> [!hint]- 提示
> 证明 $F'(t)>0$（可分别引用球坐标与极坐标）.

> [!exercise] ※7.2.24
> 设 $f(x,y,z)$ 在 $V=\{(x,y,z)\mid0\leqslant x,y,z\leqslant1\}$ 上有六阶连续偏导数，$f$ 在边界上恒为零，且 $\left|\dfrac{\partial^6f(x,y,z)}{\partial x^2\partial y^2\partial z^2}\right|\leqslant M$（在 $V$ 上）（$M$ 为常数）。试证 $\displaystyle I=\iiint_{(V)}f(x,y,z)dxdydz\leqslant\frac{1}{8}\cdot\frac{M}{6^3}$.

> [!hint]- 提示
> $\displaystyle I=\frac{1}{8}\iiint_{(V)}f(x,y,z)\frac{\partial^6[x(x-1)y(y-1)z(z-1)]}{\partial x^2\partial y^2\partial z^2}dxdydz$.

#### 反常二重积分及 $n$ 重积分（机动习题，不作重点）

> [!exercise] 7.2.25
> 计算积分 $\displaystyle\iint_{0\leqslant x\leqslant y\leqslant\pi}\ln|\sin(x-y)|\,dxdy$。（中国科学院）

> [!hint]- 提示
> 积分区域 $D=\{(x,y)\mid0\leqslant x\leqslant\pi,\ x\leqslant y\leqslant\pi\}$，如图 7.2.47(a)。作变换
> $$
> y-x=2\eta,\quad y+x=2\xi,
> $$
> 亦即 $x=\xi-\eta$, $y=\xi+\eta$，因此 $J=2$。变换后的区域 $D'$ 如图 7.2.47(b)：
> $$
> D'=\{(\xi,\eta)\mid0\leqslant\eta\leqslant\pi/2,\ \eta\leqslant\xi\leqslant\pi-\eta\}.
> $$

> [!hint]- 再提示
> （原积分）$\displaystyle I=\int_0^{\pi/2}\ln\sin2\eta\,d\eta\int_\eta^{\pi-\eta}d\xi=\int_0^{\pi/2}\ln(2\sin\eta\cos\eta)\cdot(\pi-2\eta)d\eta$
> $$
> =\frac{\pi^2}{4}\ln2+\int_0^{\pi/2}(\pi-2\eta)\ln\sin\eta\,d\eta+\int_0^{\pi/2}(\pi-2\eta)\ln\cos\eta\,d\eta.
> $$
> 而
> $$
> \int_0^{\pi/2}(\pi-2\eta)\ln\cos\eta\,d\eta\quad\text{令 }\eta=\frac{\pi}{2}-\eta'
> $$
> $$
> =-\int_{\pi/2}^02\eta'\ln\sin\eta'\,d\eta'
> =\int_0^{\pi/2}2\eta\ln\sin\eta\,d\eta.
> $$
> 因此
> $$
> I=\frac{\pi^2}{4}\ln2+\pi\int_0^{\pi/2}\ln\sin\eta\,d\eta\quad\text{（利用例 4.5.7）}
> $$
> $$
> =\frac{\pi^2}{4}\ln2-\left(\frac{\pi^2}{2}\ln2\right)=-\frac{\pi^2}{4}\ln2.
> $$

> [!exercise] 7.2.26
> 计算 $\displaystyle\iint_D\frac{dxdy}{\sqrt{1-\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)}}$，其中 $D:\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\leqslant1$.（武汉大学）

> [!hint]- 提示
> 原式 $\displaystyle=ab\int_0^{2\pi}d\theta\int_0^1\frac{r}{\sqrt{1-r^2}}dr=2\pi ab$.

> [!exercise] 7.2.27
> 求积分 $\displaystyle I=\iint_{|x|+|y|\leqslant1}\frac{\bigl||x|-|y|\bigr|}{x^2+y^2}\cdot\ln\left(\frac{|x|+|y|}{\sqrt{x^2+y^2}}\right)dxdy$.

> [!hint]- 提示
> $1^\circ$ 因为被积函数左、右对称，且上、下对称，积分等于第一象限里积分的 $4$ 倍。因此
> （原积分）$\displaystyle I=4\iint_{x+y\leqslant1,\ x\geqslant0,\ y\geqslant0}\frac{|x-y|}{x^2+y^2}\cdot\ln\left(\frac{x+y}{\sqrt{x^2+y^2}}\right)dxdy$.
> 被积函数当 $x,y$ 互换时，保持不变，说明它关于直线 $y=x$ 对称。因此
> $$
> I=8\iint_D\frac{x-y}{x^2+y^2}\cdot\ln\left(\frac{x+y}{\sqrt{x^2+y^2}}\right)dxdy
> =8\iint_D(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta,
> $$
> 其中 $D=\{(x,y)\mid x+y\leqslant1,\ 0\leqslant y\leqslant x\}$.
>
> $2^\circ$ 注意在上边界 $x+y=1$ 上：$r(\cos\theta+\sin\theta)=1$，即
> $$
> r=\frac{1}{\sin\theta+\cos\theta}\quad\text{或}\quad\cos\theta+\sin\theta=\frac{1}{r}.\qquad(1)
> $$
> $D=D_1+D_2$，如图 7.2.48，其中
> $$
> D_1=\{(r,\theta)\mid0\leqslant r\leqslant1/\sqrt2,\ 0\leqslant\theta\leqslant\pi/4\},
> $$
> $$
> D_2=\{(r,\theta)\mid1/\sqrt2\leqslant r\leqslant1,\ 0\leqslant\theta\leqslant\theta_1(r)\},
> $$
> $\theta_1(r)$ 暂不求出。
> $$
> I=8\iint_{D_1+D_2}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta
> $$
> $$
> =8\iint_{D_1}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta+8\iint_{D_2}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta
> $$
> $$
> =J_1+J_2,\qquad(2)
> $$
> 其中
> $$
> J_1=8\iint_{D_1}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta
> =8\int_0^{1/\sqrt2}dr\int_0^{\pi/4}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)d\theta,
> $$
> 令 $u=\cos\theta+\sin\theta$，则
> $$
> J_1=8\int_0^{1/\sqrt2}dr\int_1^{\sqrt2}\ln u\,du
> =4\sqrt2\bigl(u\ln u\big|_1^{\sqrt2}-\int_1^{\sqrt2}du\bigr)
> $$
> $$
> =4\sqrt2\left(\sqrt2\frac{\ln2}{2}-\sqrt2+1\right)
> =4\ln2-8+4\sqrt2,
> $$
> $$
> J_2=8\iint_{D_2}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)\,dr\,d\theta
> =8\int_{1/\sqrt2}^1dr\int_0^{\theta_1(r)}(\cos\theta-\sin\theta)\ln(\cos\theta+\sin\theta)d\theta.
> $$
> 令 $u=\cos\theta+\sin\theta$，利用式 (1) 知在边界上：$u=\cos\theta+\sin\theta=1/r$，
> $$
> J_2=8\int_{1/\sqrt2}^1dr\int_1^{1/r}\ln u\,du
> =8\int_{1/\sqrt2}^1\bigl(u\ln u\big|_1^{1/r}-\int_1^{1/r}du\bigr)dr
> $$
> $$
> =8\int_{1/\sqrt2}^1\left(-\frac{\ln r}{r}-\frac1r+1\right)dr
> =-8\left(\frac{(\ln r)^2}{2}\right)\Big|_{1/\sqrt2}^1+8\int_{1/\sqrt2}^1\left(-\frac1r+1\right)dr
> $$
> $$
> =4(-\ln\sqrt2)^2+8\left(-\frac{\ln2}{2}-\frac{\sqrt2}{2}+1\right)
> =\ln^22-4\ln2-4\sqrt2+8.
> $$
> 于是 $I=J_1+J_2=4\ln2-8+4\sqrt2+\ln^22-4\ln2-4\sqrt2+8=\ln^22$.

> [!exercise] 7.2.28
> 证明：$\displaystyle\left(\int_0^xe^{-u^2}du\right)^2=\frac{\pi}{4}-\int_0^1\frac{e^{-x^2(1+t^2)}}{t^2+1}dt$，并由此求 $\displaystyle\int_0^{+\infty}e^{-x^2}dx$.（四川大学）

> [!hint]- 提示
> $F(x)=\left(\int_0^xe^{-u^2}du\right)^2-\dfrac{\pi}{4}+\int_0^1\dfrac{e^{-x^2(1+t^2)}}{t^2+1}dt$，原方程可改写为 $F(x)=0$.
> 不难验证：$F'(x)=0$，且 $F(0)=0$，因此 $F(x)=0$，等式成立。继而令 $x\to+\infty$，取极限可得欲求之结果。

> [!hint]- 再提示
> $1^\circ$ $\displaystyle F'(x)=2e^{-x^2}\int_0^xe^{-u^2}du-2x\int_0^1e^{-x^2(1+t^2)}dt$
> $$
> =2e^{-x^2}\int_0^xe^{-u^2}du-2e^{-x^2}\int_0^xe^{-(xt)^2}d(xt)=0.
> $$
> 因此 $F(x)=$ 常数 $\equiv F(0)=0$，原式成立。
>
> $2^\circ$ 因 $\displaystyle\left|\int_0^1\frac{e^{-x^2(1+t^2)}}{t^2+1}dt\right|\leqslant e^{-x^2}\int_0^1\frac{1}{t^2+1}dt\to0\ (x\to+\infty)$，
> 故由原式可得 $\displaystyle\int_0^{+\infty}e^{-x^2}dx=\frac{\sqrt\pi}{2}$.

> [!exercise] 7.2.29
> 用二重积分计算 $\displaystyle\int_0^{+\infty}e^{-x^2}dx$.（南开大学，辽宁大学）

> [!hint]- 提示
> $\displaystyle\left(\int_0^Ae^{-x^2}dx\right)^2=\int_0^Ae^{-x^2}dx\cdot\int_0^Ae^{-y^2}dy=\int_0^A\int_0^Ae^{-(x^2+y^2)}dxdy$.

> [!hint]- 再提示
> $\displaystyle\int_0^{\pi/2}d\theta\int_0^Ae^{-r^2}r\,dr\leqslant\int_0^A\int_0^Ae^{-(x^2+y^2)}dxdy\leqslant\int_0^{\pi/2}d\theta\int_0^{\sqrt2A}e^{-r^2}r\,dr$.
> 因 $\displaystyle\lim_{A\to+\infty}\int_0^{\pi/2}d\theta\int_0^Ae^{-r^2}r\,dr=\lim_{A\to+\infty}\int_0^{\pi/2}d\theta\int_0^{\sqrt2A}e^{-r^2}r\,dr=\frac{\pi}{4}$，
> 由两边夹法则知 $\displaystyle\lim_{A\to+\infty}\left(\int_0^Ae^{-x^2}dx\right)^2=\lim_{A\to+\infty}\int_0^A\int_0^Ae^{-(x^2+y^2)}dxdy=\frac{\pi}{4}$.
> 故 $\displaystyle\int_0^{+\infty}e^{-x^2}dx=\frac{\sqrt\pi}{2}$.

> [!exercise] 7.2.30
> 证明：
> $$
> \int_0^xx_1dx_1\int_0^{x_1}x_2dx_2\cdots\int_0^{x_{n-1}}x_ndx_n\int_0^{x_n}f(x_{n+1})dx_{n+1}=\frac{1}{2^n\,n!}\int_0^x(x^2-y^2)^nf(y)dy.
> $$

> [!hint]- 提示
> 以 $n=2$ 的情况为例：等式左端可写为
> $$
> I_{n=2}=\int_0^ax\,dx\int_0^xy\,dy\int_0^yf(z)dz=\iiint_Dxyf(z)dxdydz,
> $$
> 其中 $D=\{(x,y,z)\mid0\leqslant x\leqslant a,\ 0\leqslant y\leqslant x,\ 0\leqslant z\leqslant y\}$（如图 7.2.49）。
> 从而
> $$
> I_{n=2}=\int_0^af(z)dz\int_z^ay\,dy\int_y^ax\,dx=\int_0^af(z)dz\int_z^a\frac12(a^2-y^2)y\,dy,
> $$
> 其中
> $$
> \int_z^a\frac12(a^2-y^2)y\,dy=-\int_z^a\frac{1}{2^2}(a^2-y^2)d(a^2-y^2)
> =-\frac{1}{2^3}\int_z^ad(a^2-y^2)^2=\frac{1}{2^3}(a^2-z^2)^2.
> $$
> 故 $\displaystyle I_{n=2}=\frac{1}{2^2\cdot2}\int_0^a(a^2-z^2)^2f(z)dz$.
> 然后，（作为数学归纳法的第二步）若命题对 $n$ 成立，推出对 $n+1$ 也成立。

> [!hint]- 再提示
> $\displaystyle I_{n+1}=\int_0^xx_1dx_1\int_0^{x_1}x_2dx_2\cdots\int_0^{x_{n-1}}x_ndx_n\int_0^{x_n}x_{n+1}dx_{n+1}\int_0^{x_{n+1}}f(x_{n+2})dx_{n+2}$
> $$
> =\int_0^xx_1dx_1\int_0^{x_1}x_2dx_2\cdots\int_0^{x_{n-1}}x_ndx_n\int_0^{x_n}\left(x_{n+1}\int_0^{x_{n+1}}f(x_{n+2})dx_{n+2}\right)dx_{n+1}.
> $$
> 命题假设对 $n$ 成立，则
> $$
> I_{n+1}=\frac{1}{2^n\,n!}\int_0^x(x^2-y^2)^n\left(y\int_0^yf(z)dz\right)dy
> $$
> $$
> =\frac{1}{2^n\,n!}\int_0^x\left[-\frac{1}{2(n+1)}\int_0^yf(z)dz\right]d(x^2-y^2)^{n+1}\quad\text{（分部积分）}
> $$
> $$
> =\frac{1}{2^{n+1}(n+1)!}\int_0^x(x^2-y^2)^{n+1}f(y)dy,
> $$
> 即对 $n+1$ 仍成立。

> [!exercise] 7.2.31
> 证明：
> $$
> \int_0^ldt_1\int_0^{t_1}dt_2\cdots\int_0^{t_{n-1}}f(t_1)f(t_2)\cdots f(t_n)dt_n=\frac{1}{n!}\left(\int_0^lf(\tau)d\tau\right)^n.
> $$

> [!hint]- 提示
> $n=1$ 时明显成立。来证 $n=2$ 时成立：
> $$
> I_{n=2}=\int_0^ldt_1\int_0^{t_1}f(t_1)f(t_2)dt_2=\int_0^lf(t_1)dt_1\int_0^{t_1}f(t_2)dt_2.
> $$
> 注意：$\displaystyle f(t_1)=\left(\int_0^{t_1}f(t_2)dt_2\right)'_{t_1}$，故
> $$
> I_{n=2}=\int_0^l\left(\int_0^{t_1}f(t_2)dt_2\right)'\cdot\left(\int_0^{t_1}f(t_2)dt_2\right)dt_1
> $$
> $$
> =\frac12\int_0^ld\left(\int_0^{t_1}f(t_2)dt_2\right)^2=\frac12\left(\int_0^lf(\tau)d\tau\right)^2.
> $$
> 此式表明 $n=2$ 时命题成立。然后，（作为数学归纳法的第二步）若命题对 $n$ 成立，推出对 $n+1$ 也成立。

> [!exercise] 7.2.32
> 设 $f(x)$ 是 $[a,b]$ 上连续函数，$f_{kn}=f\!\left(a+\frac{k}{n}(b-a)\right)$，$\delta_n=\dfrac{b-a}{n}$。将 $\displaystyle\prod_{k=1}^n(1+f_{kn}\delta_n)$ 展开成 $\delta_n$ 的 $n$ 次多项式，证明当 $p$ 取定值时，令 $n$ 趋向无穷，含有 $\delta_n^p$ 的项收敛于
> $$
> \int_{a\leqslant x_1\leqslant x_2\leqslant\cdots\leqslant x_p\leqslant b}f(x_1)\cdots f(x_p)dx_1\cdots dx_p=\frac{1}{p!}\left(\int_a^bf(x)dx\right)^p.
> $$

> [!hint]- 提示
> 将 $\displaystyle\prod_{k=1}^n(1+f_{kn}\delta_n)$ 展开为 $\delta_n$ 的 $n$ 次多项式，则含有 $\delta_n^p$ 的项之和为
> $$
> \delta_n^p\sum_{1\leqslant r_1\leqslant r_2\leqslant\cdots\leqslant r_p\leqslant n}f_{r_1n}f_{r_2n}\cdots f_{r_pn},
> $$
> 并利用上题。


## ☆ §7.3 曲线积分与 Green 公式

> [!note] 导读
> 曲线积分在实践中有广泛应用，也是各类考试的重要内容，宜重点关注（包括本书的各类读者）。


### 一、曲线积分的性质与计算


#### a. 对称性

> [!note] 要点
> 根据积分定义易知，当积分曲线与被积函数两者都具有对称性时，曲线积分可以如下简化：
> 1）对于第一型曲线积分 ∫_L f(P) ds，跟二重积分类似，若 L 可划分为两对称的部分 L1 与 L2，且在对称点上 f(P) 的大小相等，符号相反，则 L1 与 L2 上的积分相互抵消，整个 L 上的积分为零；若在对称点上 f(P) 的大小相等，符号相同，则 L 上的积分等于在 L1 上积分的 2 倍。
> 2）对于第二型曲线积分，除了要考虑被积函数的大小和符号之外，还需考虑投影元素的符号。当积分方向与坐标的正向之夹角小于 π/2 时，投影元素算为正，否则算作负。就积分 ∫_L f(P) dx 而言，若在对称点上 f(P) 的绝对值相等，f(P) 与投影元素 dx 的乘积 f(P)dx 在对称点上取相反的符号，则 L 上的积分为零；对称点上 f(P)dx 取相同的符号，则 ∫_L f(P)dx = 2∫_{L1} f(P)dx。对于 ∫_L f(P)dy 与 ∫_L f(P)dz，有类似的结论。

> [!example] 例 7.3.1
> 求曲线积分 ∮_C e^{-(x^2+y^2)}[cos(2xy)dx + sin(2xy)dy] 之值，其中 C 是单位圆周 x^2+y^2=1，方向是逆时针的。（吉林大学）

> [!proof]- 解
> 积分曲线 C 可分为两个上、下对称的部分。
> 在对称点 (x, y) 与 (x, -y) 上，函数 e^{-(x^2+y^2)}cos(2xy) 的大小相等，符号相同，但投影元素 dx 在上半圆上为负，下半圆上为正（如图 7.3.1）。因此，作为两者的乘积：e^{-(x^2+y^2)}cos(2xy)dx 在上、下半圆上，大小相等、符号相反，两部分上的积分彼此抵消，故
> ∮_C e^{-(x^2+y^2)}cos(2xy)dx = 0。
> 类似可知 ∮_C e^{-(x^2+y^2)}sin(2xy)dy = 0，因此原积分为零。
> 除了上述对称性之外，还可利用轮换对称性。

> [!example] 例 7.3.2
> 计算积分 ∮_L x^2 ds，其中 L: x^2+y^2+z^2=a^2，x+y+z=0。

> [!proof]- 解
> 积分曲线 L，关于 x、y、z 有轮换对称性，因此
> ∮_L x^2 ds = ∮_L y^2 ds = ∮_L z^2 ds = 1/3 ∮_L (x^2+y^2+z^2) ds
> = 1/3 ∮_L a^2 ds = a^2/3 ∮_L ds = a^2/3·2πa = 2/3 πa^3。

> [!exercise] 练习
> 设椭圆曲线 Γ: x^2/a^2 + y^2/b^2 = 1 的周长为 L，所包围的面积为 S。记：
> J = ∮_Γ (b^2x^2 + 2xy + a^2y^2) ds,
> 试证：J = LS^2/π^2。（中国科学技术大学）

> [!hint]- 提示
> 由对称性知 ∮_Γ 2xy ds = 0；面积 S = πab。

> [!hint]- 再提示
> 利用广义极坐标：x = a cos θ，y = b sin θ，代入 Γ 的方程式可得 r = 1。于是，Γ 的方程可写为 x = a cos θ，y = b sin θ（0≤θ≤2π），
> J = ∮_Γ (b^2x^2 + a^2y^2) ds = a^2b^2 ∮_Γ ds = a^2b^2L = LS^2/π^2。

为了分析对称性，有时需要利用坐标变换，如

> [!example] ☆例 7.3.3
> 设 P、Q、R 为一元连续函数，Q 为奇函数，S 为球面 x^2+y^2+z^2=1 上 √(x^2+y^2)≤kz（k>0），y^2≤2xz 的部分。L 为 S 的边界曲线，L^+ 规定为 L 上逆时针方向（从 z 轴正向往下看），求 ∮_{L^+} P(z)dx + Q(y)dy + R(x)dz。

> [!proof]- 解
> 令 x=(u-v)/√2，z=(u+v)/√2（旋转），则 y^2=2xz 变成 y^2=u^2-v^2，即 u^2=y^2+v^2。可见这是以 u 轴为对称轴的直角锥。y^2≤2xz 相当于 y^2+v^2≤u^2。因此 S 是 x^2+y^2+z^2=1 上，夹在两锥 √(x^2+y^2)≤kz，√(y^2+v^2)≤u 之间的部分（如图 7.3.2）。S 的边界 L 分别为
> { x^2+y^2+z^2=1,
>   √(x^2+y^2)=kz }
> 与
> { x^2+y^2+z^2=1,
>   y^2=2xz }。
> 它们关于 xOz 平面对称。在对称点上 P(z) 的大小相等、符号相同，而 dx 在对称点上符号相反。因此 ∮_{L^+} P(z)dx = 0。
> 类似地，有 ∮_{L^+} Q(y)dy = 0，∮_{L^+} R(x)dz = 0。故
> ∮_{L^+} P(z)dx + Q(y)dy + R(x)dz = 0。


#### b. 曲线积分化为定积分

要点 要将曲线积分化为定积分，关键在于选取适当的参数，将积分曲线 $L$ 表示成参数形，例如

$$
L:\ x = x(t),\ y = y(t),\ z = z(t) \quad (\alpha \leq t \leq \beta),
$$

则

$$
\int_L f(x,y,z)\,ds = \int_\alpha^\beta f(x(t),y(t),z(t)) \sqrt{x'^2(t)+y'^2(t)+z'^2(t)}\,dt. \tag{A}
$$

若 $t=t_0$, $t=T$ 分别对应 $L^+$ 的起点与终点，则

$$
\int_{L^+} P(x,y,z)\,dx + Q(x,y,z)\,dy + R(x,y,z)\,dz
= \int_{t_0}^T \big[P(x(t),y(t),z(t))x'(t) + Q(x(t),y(t),z(t))y'(t) + R(x(t),y(t),z(t))z'(t)\big]\,dt. \tag{B}
$$

值得注意的是，公式 $(A)$ 中，积分上、下限 $\beta$, $\alpha$ 分别是参数的最大、最小值 $(\alpha \leq \beta)$. 而公式 $(B)$ 中，积分是从 $L^+$ 的起点 $t=t_0$ 积到终点 $t=T$ ($t_0$ 不一定比 $T$ 小).
为了写出 $L$ 的参数形式，不少情况下采用极坐标或广义极坐标.

> [!example] 例 7.3.4
> 计算曲线积分 $\displaystyle \int_L y\,dx + z\,dy + x\,dz$, 其中 $L$ 是曲线
>
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,\quad \frac{x}{a} + \frac{z}{c} = 1,\quad x \geq 0,\ y \geq 0,\ z \geq 0 \tag{1}
> $$
>
> ($a>0$, $b>0$, $c>0$ 为常数) 从点 $(a,0,0)$ 到 $(0,0,c)$. (复旦大学)
>
> > [!solution]- 解 I
> > (利用坐标平面上的投影椭圆.) 在式 $(1)$ 中消去 $z$, 得
> >
> > $$
> > \frac{(x-a/2)^2}{(a/2)^2} + \frac{y^2}{(b/\sqrt{2})^2} = 1.
> > $$
> >
> > 这是 $xOy$ 平面上，以 $(a/2,0)$ 为中心，以 $a/2$, $b/\sqrt{2}$ 为半轴的椭圆，如图 7.3.3. 从而可改写为参数方程
> >
> > $$
> > x = \frac{a}{2} + \frac{a}{2}\cos\theta,\quad y = \frac{b}{\sqrt{2}}\sin\theta.
> > $$
> >
> > 代入 $x/a + z/c = 1$ 得 $z = c/2 - c/2\cos\theta$. 因 $x,y,z \geq 0$, 故
> >
> > $$
> > 0 \leq \theta \leq \pi.
> > $$
> >
> > $$
> > \begin{aligned}
> > \int_{L^+} y\,dx + z\,dy + x\,dz
> > &= \int_0^\pi \Big[ -\frac{b}{\sqrt{2}}\sin\theta \cdot \frac{a}{2}\sin\theta + \big(\frac{c}{2} - \frac{c}{2}\cos\theta\big)\frac{b}{\sqrt{2}}\cos\theta + \big(\frac{a}{2} + \frac{a}{2}\cos\theta\big)\frac{c}{2}\sin\theta \Big]\,d\theta \\
> > &= -\frac{ab}{\sqrt{2}}\int_0^{\pi/2} \sin^2\theta\,d\theta - \frac{bc}{\sqrt{2}}\int_0^{\pi/2} \cos^2\theta\,d\theta + \frac{ac}{2}\int_0^{\pi/2} \sin\theta\,d\theta \\
> > &= \frac{ac}{2} - \frac{\pi b}{4\sqrt{2}}(a+c).
> > \end{aligned}
> > $$
>
> > [!solution]- 解 II
> > (在截平面上引用极坐标.) 令 $x = a\tilde{x}$, $y = b\tilde{y}$, $z = c\tilde{z}$, 则 $L$ 变成
> >
> > $$
> > \tilde{x}^2 + \tilde{y}^2 + \tilde{z}^2 = 1,\quad \tilde{x} + \tilde{z} = 1.
> > $$
> >
> > 作旋转变换，令 $u = \tilde{y}$, $v = (\tilde{x}+\tilde{z})/\sqrt{2}$, $w = (\tilde{x}-\tilde{z})/\sqrt{2}$, 这时 $L$ 变成
> >
> > $$
> > u^2 + v^2 + w^2 = 1,\quad v = 1/\sqrt{2}.
> > $$
> >
> > 在 $v = 1/\sqrt{2}$ 的截平面上，$L$ 是圆周
> >
> > $$
> > u^2 + w^2 = 1 - (1/\sqrt{2})^2 = 1/2.
> > $$
> >
> > 引用极坐标 $w = 1/\sqrt{2}\cos\theta$, $u = 1/\sqrt{2}\sin\theta$. 于是可得 $L$ 的参数方程：
> >
> > $$
> > \begin{aligned}
> > x &= a\tilde{x} = a\,(v+w)/\sqrt{2} = \frac{a}{2}(1+\cos\theta), \\
> > y &= b\tilde{y} = bu = \frac{b}{\sqrt{2}}\sin\theta, \\
> > z &= c\tilde{z} = \frac{c}{\sqrt{2}}(v-w) = \frac{c}{2}(1-\cos\theta).
> > \end{aligned}
> > $$
> >
> > 其余同解 I.
>
> > [!solution]- 解 III
> > (因为曲线上 $y$, $z$ 都可写成 $x$ 的函数.) 令 $x = at$, 则 $z = c(1-t)$, $y = \sqrt{2}\,b\sqrt{t-t^2}$. 起点 $t=1$, 终点 $t=0$. 因此
> >
> > $$
> > \begin{aligned}
> > \text{原积分} &= \int_1^0 \Big[ab\sqrt{2}\sqrt{t-t^2} + \frac{bc(1-t)(1-2t)}{\sqrt{2}\sqrt{t-t^2}} - act\Big]\,dt \quad (\text{令 } t = \cos^2\frac{\theta}{2}) \\
> > &= \int_0^\pi \Big( -\frac{ab}{2\sqrt{2}}\sin^2\theta + \frac{bc}{\sqrt{2}}\sin^2\frac{\theta}{2}\cos\theta + ac\cos^2\frac{\theta}{2}\cos\frac{\theta}{2}\sin\frac{\theta}{2} \Big)\,d\theta \\
> > &= -\frac{\pi b}{4\sqrt{2}}(a+c) + \frac{ac}{2}.
> > \end{aligned}
> > $$

> [!example] 例 7.3.5
> 设 $\displaystyle I_{R,\sigma} = \oint_{x^2+xy+y^2=R^2} \frac{x\,dy - y\,dx}{(x^2+y^2)^\sigma}$, 求 $\displaystyle \lim_{R \to +\infty} I_{R,\sigma}$. (浙江大学)
>
> > [!note]- 提示
> > 旋转 $\pi/4$: $x = (u-v)/\sqrt{2}$, $y = (u+v)/\sqrt{2}$, $x^2+xy+y^2 = R^2$ 变为
> >
> > $$
> > \frac{u^2}{(\sqrt{2/3}\,R)^2} + \frac{v^2}{(\sqrt{2}\,R)^2} = 1,
> > $$
> >
> > 再用广义极坐标.
>
> 以上做法，也适用于反常积分.

> [!example] 例 7.3.6
> 计算密度为常数 $\mu$ 的单层对数位势 $\displaystyle u(x,y) = \oint_L \mu\ln\frac{1}{r}\,ds$, 其中 $L$ 为圆周 $\xi^2+\eta^2 = R^2$, $r = \sqrt{(\xi-x)^2+(\eta-y)^2}$.
>
> > [!solution]- 解
> > 采用极坐标
> >
> > $$
> > L:\ \xi = R\cos\theta,\ \eta = R\sin\theta,\quad 0 \leq \theta \leq 2\pi.
> > $$
> >
> > 为了使被积函数简化，设 $x = \rho_0\cos\theta_0$, $y = \rho_0\sin\theta_0$. 则
> >
> > $$
> > r = \sqrt{(\xi-x)^2+(\eta-y)^2} = \sqrt{R^2 - 2R\rho_0\cos(\theta-\theta_0) + \rho_0^2},\quad ds = R\,d\theta.
> > $$
> >
> > 故
> >
> > $$
> > \begin{aligned}
> > u(x,y) &= \int_0^{2\pi} \mu\ln\frac{1}{\sqrt{R^2-2R\rho_0\cos(\theta-\theta_0)+\rho_0^2}}\,R\,d\theta \quad (\text{令 } \varphi = \theta-\theta_0) \\
> > &= -\frac{R\mu}{2}\int_{-\theta_0}^{2\pi-\theta_0} \ln(R^2-2R\rho_0\cos\varphi+\rho_0^2)\,d\varphi \\
> > &= -\frac{R\mu}{2}\int_0^{2\pi} \ln(R^2-2R\rho_0\cos\varphi+\rho_0^2)\,d\varphi \\
> > &= -R\mu\int_0^\pi \ln R^2\!\left[1-2\Big(\frac{\rho_0}{R}\Big)\cos\varphi+\Big(\frac{\rho_0}{R}\Big)^2\right]\,d\varphi \quad (\text{记 } a = \rho_0/R) \\
> > &= -2\pi\mu R\ln R - \mu R\int_0^\pi \ln(1-2a\cos\varphi+a^2)\,d\varphi \\
> > &= \begin{cases}
> > -2\pi\mu R\ln R, & \text{当 } x^2+y^2 = \rho_0^2 \leq R^2 \text{ 时}, \\[6pt]
> > -2\pi\mu R\ln\sqrt{x^2+y^2}, & \text{当 } x^2+y^2 = \rho_0^2 > R^2 \text{ 时}.
> > \end{cases}
> > \end{aligned}
> > $$
> >
> > (最后的等式见 §7.1 练习 7.1.3 的 2).)

> [!example] 例 7.3.7
> 设 $f(x,y)$ 连续，$L$ 是一封闭的逐段光滑曲线，试证：
>
> $$
> u(x,y) = \oint_L f(\xi,\eta)\ln\frac{1}{\sqrt{(\xi-x)^2+(\eta-y)^2}}\,ds \tag{1}
> $$
>
> 当 $x \to \infty$, $y \to \infty$ 时极限为零的充要条件是 $\displaystyle \oint_L f(\xi,\eta)\,ds = 0$.
>
> > [!proof]- 证
> > 根据 $u(x,y)$ 的定义式 $(1)$，首先我们看到
> >
> > $$
> > \begin{aligned}
> > &u(x,y) + \ln\sqrt{x^2+y^2}\oint_L f(\xi,\eta)\,ds \\
> > &= \oint_L f(\xi,\eta)\ln\frac{1}{\sqrt{(\xi-x)^2+(\eta-y)^2}}\,ds + \oint_L f(\xi,\eta)\ln\sqrt{x^2+y^2}\,ds \\
> > &= \oint_L f(\xi,\eta)\ln\frac{\sqrt{x^2+y^2}}{\sqrt{(\xi-x)^2+(\eta-y)^2}}\,ds \\
> > &= \frac{1}{2}\oint_L f(\xi,\eta)\ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2}\,ds.
> > \end{aligned}
> > $$
> >
> > 由此可知，若能证明
> >
> > $$
> > \lim_{x \to \infty,\ y \to \infty} \oint_L f(\xi,\eta)\ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2}\,ds = 0, \tag{2}
> > $$
> >
> > 则
> >
> > $$
> > \lim_{x \to \infty,\ y \to \infty} \Big(u(x,y) + \ln\sqrt{x^2+y^2}\oint_L f(\xi,\eta)\,ds\Big) = 0,
> > $$
> >
> > 从而由 $\displaystyle \lim_{x \to \infty,\ y \to \infty} u(x,y) = 0$, 可知 $\displaystyle \oint_L f(\xi,\eta)\,ds = 0$. 反之由 $\displaystyle \oint_L f(\xi,\eta)\,ds = 0$, 可知 $\displaystyle \lim_{x \to \infty,\ y \to \infty} u(x,y) = 0$. 问题获证. 要证明式 $(2)$，我们先设法证明当 $x \to \infty$, $y \to \infty$ 时，
> >
> > $$
> > \Big| f(\xi,\eta) \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2} \Big| \to 0 \quad (\text{关于 } (\xi,\eta) \in L).
> > $$
> >
> > 因为有界闭集上的连续函数必有界，故存在 $M>0$ 使得 $|f(\xi,\eta)| \leq M$ ($(\xi,\eta) \in L$).
> >
> > $$
> > \Big| f(\xi,\eta) \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2} \Big|
> > \leq M\,\Big| \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2} \Big|. \tag{3}
> > $$
> >
> > 令 $x = \rho\cos\varphi$, $y = \rho\sin\varphi$, $\xi = r\cos\theta$, $\eta = r\sin\theta$, 则
> >
> > $$
> > \begin{aligned}
> > \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2}
> > &= \ln\frac{\rho^2}{\rho^2+r^2-2r\rho\cos(\theta-\varphi)} \\
> > &= -\ln\!\Big[1 + \Big(\frac{r}{\rho}\Big)^2 - \frac{2r}{\rho}\cos(\theta-\varphi)\Big].
> > \end{aligned}
> > $$
> >
> > 记 $r_0 = \max\limits_{0 \leq \theta \leq 2\pi} r(\theta)$, 当 $x \to \infty$, $y \to \infty$ 时，$\rho \to +\infty$, 从而
> >
> > $$
> > \Big| \Big(\frac{r}{\rho}\Big)^2 - \frac{2r}{\rho}\cos(\theta-\varphi) \Big|
> > \leq \Big(\frac{r}{\rho}\Big)^2 + \frac{2r}{\rho}
> > \leq \Big(\frac{r_0}{\rho}\Big)^2 + \frac{2r_0}{\rho} \to 0.
> > $$
> >
> > 由此易知 $x \to \infty$, $y \to \infty$ 时有
> >
> > $$
> > \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2}
> > = -\ln\!\Big[1 + \Big(\frac{r}{\rho}\Big)^2 - \frac{2r}{\rho}\cos(\theta-\varphi)\Big] \to 0
> > $$
> >
> > 关于 $(\xi,\eta) \in L$. 于是 $\forall \varepsilon > 0$, $\exists \Delta > 0$, 使得 $|x| > \Delta$, $|y| > \Delta$ 时有
> >
> > $$
> > \Big| \ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2} \Big| < \frac{\varepsilon}{\ell M} \quad (\forall (\xi,\eta) \in L),
> > $$
> >
> > 其中 $\ell$ 表示曲线 $L$ 的长度. 利用式 $(3)$，
> >
> > $$
> > \begin{aligned}
> > \Big| \oint_L f(\xi,\eta)\ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2}\,ds \Big|
> > &\leq \oint_L \Big| f(\xi,\eta)\ln\frac{x^2+y^2}{(\xi-x)^2+(\eta-y)^2} \Big|\,ds \\
> > &\leq \frac{\varepsilon}{\ell} \oint_L ds = \varepsilon.
> > \end{aligned}
> > $$
> >
> > (证毕.)

(以曲线斜率作参数.)
对于平面曲线 $L$, 若过原点的直线与该曲线只有一个交点，则可采用此直线的斜率作为参数. 求出直线 $y = tx$ 与 $L$ 的交点的坐标 $x = x(t)$, $y = y(t)$, 便可得到曲线的参数方程.

> [!example] 例 7.3.8
> 计算第二型曲线积分
>
> $$
> I = \int_{L^+} x\,dy - y\,dx, \tag{1}
> $$
>
> 其中
>
> $$
> L^+:\ x^{2n+1} + y^{2n+1} = ax^n y^n \quad (x \geq 0,\ y \geq 0) \tag{2}
> $$
>
> 取逆时针方向.
>
> > [!note] 分析
> > 令 $y = tx$, 代入 $(2)$，这时每个 $t \in (0,+\infty)$ 有唯一解：
> >
> > $$
> > x = \frac{at^n}{1+t^{2n+1}} > 0,\quad y = tx = \frac{at^{n+1}}{1+t^{2n+1}} > 0. \tag{3}
> > $$
> >
> > 当 $t$ 从 $0$ 变到 $+\infty$ 时，直线 $y = tx$ 按逆时针方向扫过第一象限，它与 $L$ 的交点从原点出发逆时针方向绕行 $L$ 一周回到原点. 这说明 $L^+$ 对应 $t$ 从 $0$ 到 $+\infty$. 又因
> >
> > $$
> > x\,dy - y\,dx = x\,d(tx) - (tx)\,dx = x^2\,dt = \Big(\frac{at^n}{1+t^{2n+1}}\Big)^2\,dt,
> > $$
> >
> > 故
> >
> > $$
> > I = \int_{L^+} x\,dy - y\,dx = \int_0^{+\infty} x^2\,dt = \int_0^{+\infty} \frac{a^2 t^{2n}}{(1+t^{2n+1})^2}\,dt = \frac{a^2}{2n+1}.
> > $$
>
> > [!note] 注
> > 式 $(3)$ 也可用极坐标得到. 将 $x = r\cos\theta$, $y = r\sin\theta$ 代入 $(2)$，可得
> >
> > $$
> > r = \frac{a\cos^n\theta\,\sin^n\theta}{\cos^{2n+1}\theta + \sin^{2n+1}\theta},
> > $$
> >
> > 由此
> >
> > $$
> > x = r\cos\theta = \frac{a\cos^{n+1}\theta\,\sin^n\theta}{\cos^{2n+1}\theta + \sin^{2n+1}\theta} = \frac{a\tan^n\theta}{1+\tan^{2n+1}\theta}.
> > $$
> >
> > 令 $t = \tan\theta$, 则
> >
> > $$
> > x = \frac{at^n}{1+t^{2n+1}}.
> > $$
> >
> > 类似地，有
> >
> > $$
> > y = \frac{at^{n+1}}{1+t^{2n+1}}.
> > $$


#### c. 曲线积分的性质

> [!note] 要点
> 第一型曲线积分跟重积分(包括定积分)有完全类似的性质(包括用等式表示的性质，用不等式表示的性质以及中值定理等). 但第二型曲线积分关于不等式表示的性质已不再成立. 由此推出的积分中值定理也不再成立.

> [!example] 例 7.3.9
> 设 $P,Q,R$ 在 $L$ 上连续，$L$ 为光滑弧段，弧长为 $l$，试证：
> $$
> \left| \int_L Pdx + Qdy + Rdz \right| \leq Ml,
> $$
> 其中 $M = \max_{(x,y,z)\in L} \{\sqrt{P^2+Q^2+R^2}\}$.

> [!proof]- 证
> $$
> \begin{aligned}
> \left| \int_L Pdx + Qdy + Rdz \right|
> &= \left| \int_L (P \cos \alpha + Q \cos \beta + R \cos \gamma) ds \right| \\
> &\leq \int_L |P \cos \alpha + Q \cos \beta + R \cos \gamma| ds. \qquad (1)
> \end{aligned}
> $$
> 
> 应用 Cauchy 不等式，
> $$
> \begin{aligned}
> |P \cos \alpha + Q \cos \beta + R \cos \gamma|
> &\leq (P^2+Q^2+R^2)^{1/2}(\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma)^{1/2} \\
> &\leq \sqrt{P^2+Q^2+R^2} \leq \max_{(x,y,z)\in L}\{\sqrt{P^2+Q^2+R^2}\} = M.
> \end{aligned}
> $$
> 
> 故 式(1)右端 $\leq M \int_L ds = Ml$.

> [!example] 例7.3.10
> 举例说明对第二型曲线积分"积分中值定理不再成立".

> [!solution]- 解
> 如果积分中值定理成立，应该是："若 $f(P)$ 在 $L$ 上连续，则存在点 $P^* \in L$，使得
> $$
> \int_{L^+} f(P)dx = f(P^*) \int_{L^+} dx. \qquad (1)
> $$
> 
> 设 $L$ 为圆周，由对称性知 $\int_{L^+} dx = 0$，从而式 (1) 右端对一切 $f$ 恒为零。但是若 $f(P)=f(x,y)=y$，$L^+$ 为 $x^2+y^2=2y$（方向逆时针），则
> $$
> \int_{L^+} f(P)dx = \int_{L^+} ydx = -\pi \neq 0.
> $$
> 
> 可见此时式 (1) 不可能成立.


### 二、Green公式

> [!note] 要点
> Green公式给出了平面上有限条逐段光滑封闭曲线上线积分与它们所包围区域上的二重积分的关系：
>
> $$
> \oint_{L^+} P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\,dy \tag{A}
> $$

这里 $L^+$ 表示沿 $L$ 的正向取积分。正向指前进时 $D$ 保持在左边的方向，当 $D$ 为单连通区域时，即是逆时针方向；当 $D$ 为多连通区域时，外边界为逆时针方向，内边界为顺时针方向。$P$，$Q$ 要求在区域 $D$ 内直至边界 $L$ 上连续，并有连续偏导数。由此可得 $D$ 的面积公式：

$$
S = \iint_D dx\,dy = \oint_{L^+} x\,dy = -\oint_{L^+} y\,dx = \frac{1}{2} \oint_{L^+} (x\,dy - y\,dx) \tag{B}
$$


#### a. 计算封闭曲线上的线积分

在很多情况下，利用Green公式可以把封闭曲线①上的线积分化为二重积分来计算.

> [!example] 例7.3.11
> 计算 $\displaystyle\oint_{C^+}\frac{xdy-ydx}{4x^2+y^2}$，$C$ 为以 $(1,0)$ 为圆心，以 $R$ 为半径的圆周（$R\neq 1$），设 $C^+$ 表示其上的方向为逆时针方向.

> [!note] 分析
> $1^\circ$ 若 $R<1$，则满足Green公式的全部条件. 注意
>
> $$\frac{\partial}{\partial x}\left(\frac{x}{4x^2+y^2}\right)=\frac{y^2-4x^2}{(4x^2+y^2)^2}=\frac{\partial}{\partial y}\left(\frac{-y}{4x^2+y^2}\right)\quad((x,y)\neq(0,0)).\tag{1}$$
>
> 因此
>
> $$\oint_{L^+}\frac{xdy-ydx}{4x^2+y^2}=\iint_{(x-1)^2+y^2\leq R^2}0\,dxdy=0.$$
>
> $2^\circ$ 当 $R>1$ 时，$C$ 内包含原点 $(0,0)$，而函数
>
> $$P(x,y)=\frac{-y}{4x^2+y^2},\quad Q=\frac{x}{4x^2+y^2}$$
>
> 在原点无意义，故此时不能直接应用Green公式. 为此，我们在 $C$ 内用一易于计算积分的简单围线将原点挖去（如图7.3.4）. 例如，取 $\varepsilon>0$ 充分小，使得椭圆
>
> $$\Gamma_\varepsilon:4x^2+y^2=\varepsilon^2\tag{2}$$
>
> 在 $C$ 之内部. 记 $C$ 与 $\Gamma_\varepsilon$ 所围的区域为 $D$，则
>
> $$\oint_{C^++\Gamma_\varepsilon^+}\frac{xdy-ydx}{4x^2+y^2}=\iint_D 0\,dxdy=0,$$
>
> 这里 $\Gamma_\varepsilon^+$ 表示在 $\Gamma_\varepsilon$ 上取顺时针方向（下面用 $\Gamma_\varepsilon^-$ 表示取逆时针方向）. 由此
>
> $$\begin{aligned}
> \oint_{C^+}\frac{xdy-ydx}{4x^2+y^2}
> &=\oint_{C^++\Gamma_\varepsilon^+}\frac{xdy-ydx}{4x^2+y^2}+\oint_{\Gamma_\varepsilon^-}\frac{xdy-ydx}{4x^2+y^2}\\
> &=\oint_{\Gamma_\varepsilon^-}\frac{xdy-ydx}{4x^2+y^2}\\
> &\stackrel{\text{式}(2)}{=}\frac{1}{\varepsilon^2}\oint_{\Gamma_\varepsilon^-}xdy-ydx\\
> &=\frac{1}{\varepsilon^2}\cdot 2\left(\pi\cdot\frac{1}{2}\varepsilon^2\right)=\pi.
> \end{aligned}$$
>
> （这里 $\frac{1}{2}\oint_{\Gamma_\varepsilon^-}xdy-ydx=$ 椭圆的面积 $=\pi\cdot\frac{1}{2}\varepsilon^2$.）

> [!note] 注
> 1）不难看出，若 $C$ 改为不过原点的任意逐段光滑的围线，则本题的解法与结果仍保持有效.
>
> 2）同理可以算出
>
> $$\oint_{C^+}\frac{xdy-ydx}{x^2+y^2}=\begin{cases}
> 0, & C\text{ 不包含原点},\\[4pt]
> 2\pi, & C\text{ 包含原点}.
> \end{cases}$$

> [!exercise] 练习
> 计算曲线积分 $\displaystyle I=\oint_{C^+}\frac{(x-y)dx+(x+4y)dy}{x^2+4y^2}$，其中 $C^+:x^2+y^2=1$ 取逆时针方向.
>
> （华中科技大学）

> [!note]- 提示
> 因 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$，原点在圆 $C^+$ 内，则 $C^+$ 上的积分等于在椭圆 $L^+:x^2+4y^2=1$ 上的积分.
>
> 再提示
>
> $$\begin{aligned}
> I&\stackrel{\text{因 }x^2+4y^2=1}{=}\oint_{L^+}(x-y)dx+(x+4y)dy\\
> &=\frac{1}{2}\int_0^{2\pi}d\theta=\pi
> \end{aligned}$$
>
> 或
>
> $$I=\oint_{L^+}(x-y)dx+(x+4y)dy\stackrel{\text{Green公式}}{=}\iint_{x^2+4y^2\leq 1}2\,dxdy=\pi\;(\text{椭圆 }x^2+4y^2\leq 1\text{ 的面积的2倍}).$$

> [!example] 例7.3.12
> 计算积分 $\displaystyle I=\oint_{L^+}\frac{xdy-ydx}{[(\alpha x+\beta y)^2+(\gamma x+\delta y)^2]^{\alpha}}$（$\alpha\delta-\beta\gamma\neq 0$），其中 $L^+$ 为椭圆 $(\alpha x+\beta y)^2+(\gamma x+\delta y)^2=1$，取逆时针方向.

> [!proof]- 解Ⅰ
> （利用Green公式.）$L$ 上 $(\alpha x+\beta y)^2+(\gamma x+\delta y)^2=1$，因此
>
> $$I=\oint_{L^+}xdy-ydx=2\iint_{(\alpha x+\beta y)^2+(\gamma x+\delta y)^2\leq 1}dxdy.$$
>
> 又令 $u=\alpha x+\beta y$，$v=\gamma x+\delta y$，作变换，则
>
> $$I=2\iint_{u^2+v^2\leq 1}|J|\,dudv,$$
>
> 其中
>
> $$J=\frac{\partial(x,y)}{\partial(u,v)}=\frac{1}{\frac{\partial(u,v)}{\partial(x,y)}}=\frac{1}{\alpha\delta-\beta\gamma}.$$
>
> 因此
>
> $$I=\frac{2}{|\alpha\delta-\beta\gamma|}\iint_{u^2+v^2\leq 1}dudv=\frac{2\pi}{|\alpha\delta-\beta\gamma|}.$$

> [!proof]- 解Ⅱ
> （利用参数方程化为定积分.）作变换
>
> $$u=\alpha x+\beta y,\quad v=\gamma x+\delta y.\tag{1}$$
>
> 这时椭圆
> $$L:(\alpha x+\beta y)^2+(\gamma x+\delta y)^2=1$$
> 变成圆
> $$C:u^2+v^2=1.$$
>
> 因而可写成参数式 $u=\cos\theta$，$v=\sin\theta$. 故
>
> $$\alpha x+\beta y=\cos\theta,\quad \gamma x+\delta y=\sin\theta$$
>
> 或
>
> $$x=\frac{1}{\alpha\delta-\beta\gamma}(\delta\cos\theta-\beta\sin\theta),\quad y=\frac{1}{\alpha\delta-\beta\gamma}(\alpha\sin\theta-\gamma\cos\theta).$$
>
> 另外，（1）的Jacobi行列式 $J=\dfrac{\partial(u,v)}{\partial(x,y)}=\alpha\delta-\beta\gamma\neq 0$，$L^+$ 取逆时针方向，故当 $J=\alpha\delta-\beta\gamma>0$ 时，$C$ 与 $L^+$ 同向，对应 $\theta$ 从 $0$ 变到 $2\pi$，所以
>
> $$\begin{aligned}
> I&=\int_0^{2\pi}\frac{1}{(\alpha\delta-\beta\gamma)^2}\Big[(\delta\cos\theta-\beta\sin\theta)(\alpha\sin\theta-\gamma\cos\theta)'\\
> &\qquad-(\alpha\sin\theta-\gamma\cos\theta)(\delta\cos\theta-\beta\sin\theta)'\Big]d\theta\\
> &=\frac{1}{(\alpha\delta-\beta\gamma)^2}\int_0^{2\pi}(\alpha\delta-\beta\gamma)d\theta=\frac{2\pi}{\alpha\delta-\beta\gamma}.
> \end{aligned}$$
>
> 当 $J=\alpha\delta-\beta\gamma<0$ 时，$C$ 与 $L^+$ 反向，$\theta$ 从 $2\pi$ 变为 $0$. 故 $I=-\dfrac{2\pi}{\alpha\delta-\beta\gamma}$. 总之有
>
> $$I=\frac{2\pi}{|\alpha\delta-\beta\gamma|}.$$

> [!example] 例7.3.13
> 计算曲线积分
>
> $$I=\oint_C\frac{e^y}{x^2+y^2}\big[(x\sin x+y\cos x)dx+(y\sin x-x\cos x)dy\big],$$
>
> 其中 $C:x^2+y^2=1$，积分沿逆时针方向进行.

> [!proof]- 解
> 以原点为中心，$r$ 为半径（$0<r<1$）作一小圆 $C_r$，将 $C$ 与 $C_r$ 之间的区域记作 $D$，在 $D$ 上应用Green公式，
>
> $$\begin{aligned}
> I&=\left(\oint_C+\oint_{C_r}\right)\frac{e^y}{x^2+y^2}\big[(x\sin x+y\cos x)dx+(y\sin x-x\cos x)dy\big]\\
> &=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy\\
> &\quad+\oint_{C_r}\frac{e^y(x\sin x+y\cos x)}{x^2+y^2}dx+\frac{e^y(y\sin x-x\cos x)}{x^2+y^2}dy,
> \end{aligned}$$
>
> 其中
>
> $$\begin{aligned}
> \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
> &=\frac{\partial}{\partial x}\left[\frac{e^y(y\sin x-x\cos x)}{x^2+y^2}\right]-\frac{\partial}{\partial y}\left[\frac{e^y(x\sin x+y\cos x)}{x^2+y^2}\right]\\
> &=0.
> \end{aligned}$$
>
> 后一积分变为极坐标 $x=r\cos\theta$，$y=r\sin\theta$ 计算，则
>
> $$\begin{aligned}
> I&=\int_0^{2\pi}\frac{1}{r^2}e^{r\sin\theta}\Big\{\big[r\cos\theta\sin(r\cos\theta)+r\sin\theta\cos(r\cos\theta)\big](-r\sin\theta)\\
> &\qquad+\big[r\sin\theta\sin(r\cos\theta)-r\cos\theta\cos(r\cos\theta)\big]r\cos\theta\Big\}d\theta\\
> &=-\int_0^{2\pi}e^{r\sin\theta}\cos(r\cos\theta)d\theta\quad(\text{任意 }0<r<1).
> \end{aligned}$$
>
> 令 $r\to 0$ 取极限，知 $\displaystyle I=-\int_0^{2\pi}d\theta=-2\pi$.

> [!exercise] 练习1
> 利用Green公式重新证明例7.1.5

> [!note]- 提示
> 该例要求证明：$\displaystyle F(r)=\int_0^{2\pi}e^{r\cos\theta}\cos(r\sin\theta)d\theta=2\pi$. 事实上，
>
> $$\begin{aligned}
> F'(r)&=\int_0^{2\pi}\big(e^{r\cos\theta}\cos(r\sin\theta)\big)'d\theta\\
> &=\int_0^{2\pi}\big(e^{r\cos\theta}\cos(r\sin\theta)\cos\theta-e^{r\cos\theta}\sin(r\sin\theta)\sin\theta\big)d\theta\\
> &=\frac{1}{r}\int_0^{2\pi}\big(e^x\sin(y)dx+e^x\cos(y)dy\big)\quad(\text{因 }x=r\cos\theta,\;y=r\sin\theta)\\
> &\stackrel{\text{Green公式}}{=}0,
> \end{aligned}$$
>
> 其中 $c$ 为 $x^2+y^2=r^2$（圆周曲线）.
>
> 既然 $\forall r>0$，皆有 $F'(r)=\frac{1}{r}\cdot 0=0$. 所以，$F(r)=C$（常数）（$\forall r>0$）. 故
>
> $$F(r)=C=\lim_{r\to 0^+}F(r)=\lim_{r\to 0^+}\int_0^{2\pi}e^{r\cos\theta}\cos(r\sin\theta)d\theta=\int_0^{2\pi}\lim_{r\to 0^+}e^{r\cos\theta}\cos(r\sin\theta)d\theta=2\pi.$$
>
> （请注意，其实例7.3.13已经从另一条路得到本题之结果.）

> [!exercise] 练习2
> 设 $D$ 为由两条直线 $y=x$，$y=4x$ 和两条双曲线 $xy=1$，$xy=4$ 在第一象限所围成的区域，$F(x)$ 是具有连续导数的一元函数，$F'(x)=f(x)$，试证：
>
> $$\oint_{\partial D}\frac{F(xy)}{y}dy=(\ln 2)\cdot\int_1^4 f(u)du,\tag{1}$$
>
> 其中 $\partial D$ 是区域 $D$ 的边界，方向为逆时针.（华中科技大学）

> [!proof]- 证
> 如图7.3.5，应用Green公式，
>
> $$\begin{aligned}
> \text{式}(1)\text{左端}
> &=\iint_D F'(xy)dxdy\\
> &=\int_{1/2}^1 dx\int_{1/x}^{4x}F'(xy)dy+\int_1^2 dx\int_x^{4/x}F'(xy)dy\\
> &=\int_{1/2}^1\frac{F(4x^2)-F(1)}{x}dx+\int_1^2\frac{F(4)-F(x^2)}{x}dx\\
> &=\left[\int_{1/2}^1\frac{F((2x)^2)}{2x}d(2x)-F(1)\int_{1/2}^1\frac{dx}{x}\right]\\
> &\quad+\left[F(4)\int_1^2\frac{dx}{x}-\int_1^2\frac{F(x^2)}{x}dx\right]\\
> &=\int_1^2\frac{F'(u^2)}{u}du-F(1)\ln 2+F(4)\ln 2-\int_1^2\frac{F(x^2)}{x}dx\\
> &=\ln 2\,(F(4)-F(1))\stackrel{F'(x)=f(u)}{=}\ln 2\int_1^4 f(x)dx\\
> &=\text{式}(1)\text{右端}.
> \end{aligned}$$


#### b. 计算开口曲线上的线积分

Green公式一般是用于封闭曲线上的线积分计算，但有时可补上一条曲线，将开口曲线封口，变成封闭曲线再应用Green公式.

> [!example] 例7.3.14
> 计算曲线积分
> $$
> \int_{AmB} (\varphi(y) e^x - ky) \, dx + (\varphi'(y) e^x - k) \, dy,
> $$
> 其中 $\varphi(y)$ 和 $\varphi'(y)$ 连续，$AmB$ 为联结 $A(x_1, y_1)$ 与 $B(x_2, y_2)$ 的任何路径，但它与直线段 $AB$ 围成的图形 $AmBA$ 的面积为定值 $S$.（辽宁师范大学）

> [!hint]- 提示
> 情况之一如图7.3.6，
> $$
> \begin{aligned}
> &\int_{AmB} (\varphi(y) e^x - ky) \, dx + (\varphi'(y) e^x - k) \, dy \\
> = &\oint_{AmB + BA} (\varphi(y) e^x - ky) \, dx + (\varphi'(y) e^x - k) \, dy \\
> &+ \int_{AB} (\varphi(y) e^x - ky) \, dx + (\varphi'(y) e^x - k) \, dy.
> \end{aligned}
> $$


#### c. 用于计算第一型曲线积分

上面Green公式（A）是联系的第二型曲线积分，但第一型曲线积分可以化为第二型：

$$
\int_L (P\cos(t,x)+Q\cos(t,y))\,ds = \int_{L^+} P\,dx + Q\,dy,
$$

其中 $(t,x)$，$(t,y)$ 分别表示 $x$ 轴正向，$y$ 轴正向与动点切线正向 $t$ 的夹角. 切线的正向按积分方向确定（如图7.3.7）.

> [!example] 例7.3.15 计算积分
> $$
> I = \oint_L (x\cos(n,x) + y\cos(n,y))\,ds,
> $$
>
> 其中 $(n,x)$，$(n,y)$ 分别是 $x$ 轴，$y$ 轴的正向与 $L$ 外法线方向 $n$ 之间的夹角，设 $L$ 为逐段光滑闭围线.
>
> > [!solution]- 解
> > $L^+$ 表示 $L$ 上逆时针方向，切线方向与 $L^+$ 一致（如图7.3.8）. 从 $n$ 逆时针旋转 $\frac{\pi}{2}$ 到 $t$，跟 $x$ 轴到 $y$ 轴的情况一样. 由此，从图上易看出
> > $$
> > (n,x)=(t,y),\quad (n,y)=\pi-(t,x),
> > $$
> > 故
> > $$
> > \cos(n,x)\,ds=\cos(t,y)\,ds=dy,
> > $$
> > $$
> > \cos(n,y)\,ds=-\cos(t,x)\,ds=-dx.
> > $$
> > 因此
> > $$
> > I=\oint_L[x\cos(n,x)+y\cos(n,y)]\,ds=\oint_{L^+}x\,dy-y\,dx=2S,
> > $$
> > 其中 $S$ 表示 $L$ 所围的面积.

> [!example] 例7.3.16
> 设 $L$ 为平面上逐段光滑的闭围线，$D$ 是 $L$ 所包围的区域. $u=u(x,y)$ 在 $D$ 内直到边界 $L$ 有二阶连续偏导数. 试证：
> $$
> \oint_L\frac{\partial u}{\partial n}\,ds=\iint_D\left(\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}\right)dx\,dy,
> $$
> 其中 $n$ 为 $L$ 的外法向量.
>
> > [!hint]- 提示
> > $$
> > \frac{\partial u}{\partial n}=\frac{\partial u}{\partial x}\cos(n,x)+\frac{\partial u}{\partial y}\cos(n,y),
> > $$
> > 从而
> > $$
> > \frac{\partial u}{\partial n}\,ds=\frac{\partial u}{\partial x}\,dy-\frac{\partial u}{\partial y}\,dx.
> > $$


#### d. 由积分性质导出微分性质

> [!note] 要点
> 若已知函数的某种积分性质，利用Green公式、积分中值定理，以无限收缩极限等方法，常可导出函数相应的微分性质.

> [!example] 例7.3.17
> 设 $F(x,y)=P(x,y)\mathbf{i}+Q(x,y)\mathbf{j}$ 在开区域 $D$ 内处处连续可微，在 $D$ 内任一圆周 $C$ 上，有
> $$
> \oint_C F\cdot n\,ds=0,
> $$
> 其中 $n$ 是圆周的单位外法向量. 试证在 $D$ 内恒有
> $$
> \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}=0.
> $$

> [!proof]- 证
> 因为 $n$ 为单位外法向量，所以
> $$
> n=\cos(n,x)\mathbf{i}+\cos(n,y)\mathbf{j},
> $$
> $$
> F\cdot n=P(x,y)\cos(n,x)+Q(x,y)\cos(n,y),
> $$
> 因此
> $$
> \oint_C F\cdot n\,ds=\oint_C[P(x,y)\cos(n,x)+Q(x,y)\cos(n,y)]\,ds.
> $$
> 如前两例所述，$\cos(n,x)ds=dy$，$\cos(n,y)ds=-dx$，故
> $$
> 0=\oint_C F\cdot n\,ds=\oint_C-Q(x,y)\,dx+P(x,y)\,dy
> $$
> $$
> =\iint_{\Delta}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\right)dxdy\quad(\Delta为C所包围之区域).\qquad (3)
> $$
> 由此，用反证法立即可知式(2)在 $D$ 内处处成立，因为倘若有某点 $M_0\in D$ 使得
> $$
> \left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\right)_{M_0}>0\quad(或<0).\qquad (4)
> $$
> 则由 $\frac{\partial P}{\partial x}$、$\frac{\partial Q}{\partial y}$ 的连续性，以及连续函数的局部保号性，取 $M_0$ 的一个充分小的圆邻域 $\Delta\in N(M_0)$，使得式(4)在 $\Delta$ 上保持成立，从而积分
> $$
> \iint_{\Delta}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\right)dxdy>0\quad(或<0),
> $$
> 与式(3)矛盾.

> [!example] ☆例7.3.18
> 设 $P(x,y)$ 和 $Q(x,y)$ 在全平面上有连续偏导数，而且对以任意点 $(x_0,y_0)$ 为中心，以任意正数 $r$ 为半径的上半圆
> $$
> C:\ x=x_0+r\cos\theta,\ y=y_0+r\sin\theta\ (0\le \theta<\pi)
> $$
> 恒有
> $$
> \int_C P(x,y)\,dx+Q(x,y)\,dy=0.\qquad (1)
> $$
> 求证：$P(x,y)\equiv0$，$\frac{\partial Q}{\partial y}\equiv0$.（南开大学）

> [!proof]- 证
> 已知在上半圆周上的积分(1)恒为零，因此对平面上任意一点 $(x_0,y_0)$，以 $(x_0,y_0)$ 为中心，任意 $r>0$ 为半径作一上半圆域 $D$（上半圆周记为 $C$，直径记为 $AB$，如图7.3.9），则
> $$
> \int_{AB}P\,dx+Q\,dy=\oint_{C+AB}P\,dx+Q\,dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy
> $$
> $$
> =\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)_{M^*}\iint_Ddxdy=\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)_{M^*}\frac{\pi r^2}{2}.\qquad (2)
> $$
> （其中 $M^*\in D$ 为某一点）. 另一方面，
> $$
> \int_{AB}P\,dx+Q\,dy=\int_{AB}P(x,y)\,dx=\int_{x_0-r}^{x_0+r}P(x,y_0)\,dx=P(\xi,y_0)\int_{x_0-r}^{x_0+r}dx
> $$
> $$
> =P(\xi,y_0)\cdot2r\quad(x_0-r\le\xi\le x_0+r).\qquad (3)
> $$
> 比较(2)、(3)知
> $$
> \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)_{M^*}\frac{\pi r}{2}=P(\xi,y_0)\cdot2.\qquad (4)
> $$
> 此式对任意 $r>0$ 成立. 令 $r\to0$，取极限得 $P(x_0,y_0)=0$. 由 $(x_0,y_0)$ 的任意性，知 $P(x,y)\equiv0$. 从而式(4)成为 $\left.\frac{\partial Q}{\partial x}\right|_{M^*}=0$. 令 $r\to0$，取极限得 $\left.\frac{\partial Q}{\partial x}\right|_{(x_0,y_0)}=0$. 由 $(x_0,y_0)$ 的任意性，这就证明了 $\frac{\partial Q}{\partial x}\equiv0$.

> [!example] 例7.3.19
> 设 $u=u(x,y)$ 有二阶连续偏导数，试证：$\Delta u\equiv\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0$（即 $u$ 为调和函数）的充要条件是
> $$
> \oint_C\frac{\partial u}{\partial n}ds=0
> $$
> （其中 $C$ 为任意逐段光滑围线，$\frac{\partial u}{\partial n}$ 是沿外法线方向的方向导数）.


### 三、积分与路径无关问题

> [!theorem] 定理
> 若$P(x,y),Q(x,y)$在区域D内连续，有连续的一阶偏导数，则当D为单连通区域时，以下四条条件等价：
>
> 1）积分
> $$
> \int_LPdx+Qdy
> $$
> 只与起点、终点有关，而与积分路径无关（其中L是D内分段光滑曲线）.
>
> 2）在D内任一分段光滑围线C上的积分为零：
> $$
> \oint_C Pdx+Qdy=0.
> $$
>
> 3）在D内处处成立
> $$
> \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}.
> $$
>
> 4）$Pdx+Qdy$为恰当微分，即存在函数$u=u(x,y)$（称为原函数），使得
> $$
> \frac{\partial u}{\partial x}=P,\quad \frac{\partial u}{\partial y}=Q,
> $$
> 亦即
> $$
> du=Pdx+Qdy.
> $$
>
> 作为$Pdx+Qdy$的原函数$u=u(x,y)$，若存在，必不唯一，彼此可相差任意常数. 忽略常数项不计，原函数可以写成
> $$
> u(x,y)=\int_{(x_0,y_0)}^{(x,y)}Pdx+Qdy,
> $$
> 这里$(x_0,y_0)\in D$是任意取定的点. 积分路径可以是D内联结$(x_0,y_0)$与$(x,y)$的任一条分段光滑的曲线. 若已知$Pdx+Qdy$的原函数为$u=u(x,y)$，则
> $$
> \int_A^B Pdx+Qdy=u(B)-u(A)\qquad(\forall\ A,B\in D).
> $$
>
> 当D为多连通区域时，条件1）、2）、4）彼此仍等价. 这时条件3）只是必要的，不是充分的. 但条件3）成立时，对于D的每一个洞，以相同方向，沿包围该洞的任一闭路上的积分，其值皆相等，公共值称为该洞的循环常数. 例如D有n个洞（都取顺时针方向的积分），则有n个循环常数$\omega_1,\omega_2,\cdots,\omega_n$. D内从点A到B的积分
> $$
> \int_A^B Pdx+Qdy=k_1\omega_1+\cdots+k_n\omega_n+\int_{\overline{AB}}Pdx+Qdy,
> $$
> 其中$\overline{AB}$是联结A，B的任一给定的分段光滑路径，$k_1,\cdots,k_n$为任意整数. 此时积分与路径无关的充要条件是各循环常数为零.


#### a. 利用与路径无关性计算线积分

> [!note] 要点
> 如上所述，若区域内恒有 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$（对多连通还须设各循环常数为零），则积分
> $$
> \int_A^B Pdx+Qdy
> $$
> 与路径无关. 因此，我们可取方便的路径（如用平行于坐标轴的折线路径等）来计算此积分. 特别，若区域内能求出原函数 $u=u(x,y)$，则恒有（不论区域为单连通或多连通）
> $$
> \int_A^B Pdx+Qdy=u(B)-u(A)
> $$
> （积分与路径无关）.

> [!example] ☆ 例7.3.20
> 设 $L$ 表示平面上一条自身不相交的光滑曲线，其起点在 $(1,0)$，终点在 $(0,2)$. 除起终点外，$L$ 全部落在第一象限. 计算积分
> $$
> \int_L\frac{\partial\ln r}{\partial n}ds,
> $$
> 这里 $\frac{\partial}{\partial n}$ 表示沿 $L$ 的法线方向取导数，法线指向原点所在的那一侧；$r$ 表示 $L$ 上的动点到原点的距离，$ds$ 表示 $L$ 的弧长微分.（厦门大学）

> [!solution]- 解Ⅰ
> 这里 $(n,x)=\pi-(t,y)$，$(n,y)=(t,x)$，因此有
> $$
> \int_L\frac{\partial\ln r}{\partial n}ds=\int_L\left[\frac{\partial\ln r}{\partial x}\cos(n,x)+\frac{\partial\ln r}{\partial y}\cos(n,y)\right]ds
> $$
> $$
> =\int_L\left[-\frac{\partial\ln r}{\partial x}\cos(t,y)+\frac{\partial\ln r}{\partial y}\cos(t,x)\right]ds
> $$
> $$
> =\int_L\frac{\partial\ln r}{\partial y}dx-\frac{\partial\ln r}{\partial x}dy.\qquad (1)
> $$
> 因为
> $$
> P=\frac{\partial\ln r}{\partial y}=\frac{\partial}{\partial y}\ln\sqrt{x^2+y^2}=\frac12\frac{\partial}{\partial y}\ln(x^2+y^2)=\frac{y}{x^2+y^2},\qquad (2)
> $$
> $$
> Q=-\frac{\partial\ln r}{\partial x}=-\frac{x}{x^2+y^2}.\qquad (3)
> $$
> 在第一象限内连续，有连续的偏导数，且
> $$
> \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}=\frac{x^2-y^2}{(x^2+y^2)^2}.
> $$
> 因此积分与路径无关.
>
> 可取平行于坐标轴的折线路径 $ABC$ 进行积分. 于是由(1)、(2)和(3)，
> $$
> \int_L\frac{\partial\ln r}{\partial n}ds=\int_L\frac{y}{x^2+y^2}dx-\frac{x}{x^2+y^2}dy=\int_{AB+BC}\frac{y}{x^2+y^2}dx-\frac{x}{x^2+y^2}dy
> $$
> $$
> =\int_0^2-\frac{1}{1+y^2}dy+\int_1^0\frac{2}{x^2+4}dx=-\arctan2-\arctan\frac12=-\frac{\pi}{2}.\qquad (4)
> $$

> [!solution]- 解Ⅱ
> $\ln r$ 在第一象限为调和函数，如例7.3.19所述，$\frac{\partial\ln r}{\partial n}$ 在任何封闭逐段光滑曲线上的积分为零. 因此积分与路径无关，式(4)有效.

> [!solution]- 解Ⅲ
> 以原点为中心，以 $\varepsilon>0$ 为半径，在第一象限内作小圆弧 $\Gamma$ 与 $x$，$y$ 轴交于点 $E$，$D$（如图7.3.10）. 取 $\varepsilon$ 充分小使 $\Gamma$ 与 $L$ 不相交. 应用Green公式，可知 $ALCD\Gamma EA$ 上的积分为零. 又因 $CD$，$EA$ 上的积分也为零，故 $L$ 上的积分等于在 $\Gamma$ 上的积分
> $$
> I=\int_L\frac{\partial\ln r}{\partial n}ds=\int_L\frac{y}{x^2+y^2}dx-\frac{x}{x^2+y^2}dy
> $$
> $$
> =\int_{D\Gamma E}\frac{ydx-xdy}{x^2+y^2}=\frac{1}{\varepsilon^2}\int_{D\Gamma E}ydx-xdy
> $$
> $$
> =-\frac{1}{\varepsilon^2}\cdot\frac12\pi\varepsilon^2=-\frac{\pi}{2}.
> $$

> [!exercise] 练习
> 设 $f(x)$ 在 $( -\infty,+\infty )$ 上有连续的导函数，$f(0)=0$，且曲线积分
> $$
> \int_C(e^x+f(x))y\,dx+f(x)\,dy
> $$
> 与路径无关，求
> $$
> \int_{(0,0)}^{(1,1)}(e^x+f(x))y\,dx+f(x)\,dy.
> $$
> （中国科学技术大学）

> [!tip]- 提示
> 利用 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$ 及条件 $f(0)=0$，求出 $f(x)=xe^x$.

> [!tip]- 再提示
> 由 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$ 知 $e^x+f(x)=f'(x)$，即
> $$
> 1+f(x)e^{-x}=f'(x)e^{-x},
> $$
> 亦即
> $$
> 1=(f(x)e^{-x})',
> $$
> 从而 $f(x)e^{-x}=x+C$. 因 $f(0)=0$，故 $C=0$，有 $f(x)=xe^x$. 因此
> $$
> \int_{(0,0)}^{(1,1)}(e^x+f(x))y\,dx+f(x)\,dy
> $$
> $$
> =\int_{(0,0)}^{(1,0)}+\int_{(1,0)}^{(1,1)}(e^x+xe^x)y\,dx+xe^x\,dy=0+\int_0^1e\,dy=e.
> $$

下面我们讨论多连通的例子.

> [!example] 例7.3.21
> 计算积分
> $$
> I=\int_Lx\ln(x^2+y^2-1)\,dx+y\ln(x^2+y^2-1)\,dy,
> $$
> 其中 $L$ 是被积函数的定义域内从点 $(2,0)$ 至 $(0,2)$ 的逐段光滑曲线.

> [!solution]- 解
> 被积函数为 $P=x\ln(x^2+y^2-1)$，$Q=y\ln(x^2+y^2-1)$. 定义域为
> $$
> D=\{(x,y)\mid 1<x^2+y^2<+\infty\}.
> $$
> $P$，$Q$ 在 $D$ 内连续，有连续偏导数，且
> $$
> \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}=\frac{2xy}{x^2+y^2-1}.\qquad (1)
> $$
> 这里 $D$ 为二连通区域，$x^2+y^2\le1$ 是唯一的洞，如图7.3.11. 因为式(1)，在围绕该洞任一路径上逆时针方向积分一周，其值相等，等于该洞的循环常数. 不妨取圆周 $C:x^2+y^2=4$，得循环常数
> $$
> \omega=\oint_Cx\ln3\,dx+y\ln3\,dy
> =\ln 3\int_0^{2\pi}[2\cos\theta(-2\sin\theta)+4\sin\theta\cos\theta]d\theta=0.\qquad (2)
> $$
>
> （1）、（2）表明积分与路径无关。采用平行于坐标轴的折线路径 $ABC:(2,0)\to(2,2)\to(0,2)$，得
> $$
> I=\int_0^2 y\ln(3+y^2)dy+\int_2^0 x\ln(3+x^2)dx=0.
> $$

下例虽是多连通区域，但积分路径没有绕洞回转，可以不计算循环常数。

> [!example] ☆ 例7.3.22
> 计算积分
> $$
> I=\int_{L^+}\frac{(x+y)dx-(x-y)dy}{x^2+y^2}, \qquad (1)
> $$
> 其中 $L^+$ 是从点 $A(-1,0)$ 到 $B(1,0)$ 的一条不通过原点的光滑曲线，它的方程是 $y=f(x)$（$-1\le x\le 1$）.（南开大学）

> [!remark] 分析
> 这里
> $$
> P(x,y)=\frac{x+y}{x^2+y^2}, \quad Q(x,y)=\frac{y-x}{x^2+y^2}, \qquad (2)
> $$
> 定义域 $D$ 是全平面除去原点（原点为洞）. $P,Q$ 在 $D$ 内连续，有连续偏导数，且
> $$
> \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}=\frac{x^2-y^2-2xy}{(x^2+y^2)^2}. \qquad (3)
> $$
> 按常规做法，应计算循环常数，但本题积分曲线 $L$ 的方程为 $y=f(x)$（$-1\le x\le 1$）. 它与平行于 $y$ 轴的直线最多只有一个交点，因此 $L$ 不绕原点（洞）回转。又因 $L$ 不过原点，故 $f(0)>0$（或 $f(0)<0$）. 即 $L$ 在原点的上方（或下方）穿过 $y$ 轴. 若 $f(0)>0$，则 $L$ 上的积分等于沿单位圆 $C:x^2+y^2=1$ 上半圆周从 $A$ 到 $B$ 的积分（事实上，挖去 $y$ 轴的负半轴，$D$ 便是单连通区域，从而由（3）知积分与路径无关，$L$ 与 $C$ 上的积分相等）.
>
> 因此
> $$
> I=\int_{ACB}\frac{(x+y)dx-(x-y)dy}{x^2+y^2}
> =\int_\pi^0[(\cos\theta+\sin\theta)(-\sin\theta)-(\cos\theta-\sin\theta)\cos\theta]d\theta=\pi.
> $$
> 类似，当 $f(0)<0$ 时，有 $I=-\pi$. 因此
> $$
> I=\left\{\begin{array}{ll}
> \pi, & \text{当 }f(0)>0\text{ 时},\\[4pt]
> -\pi, & \text{当 }f(0)<0\text{ 时}.
> \end{array}\right.
> $$

> [!exercise] ☆ 练习
> 设 $Q(x,y)$ 有连续的一阶偏导数，积分 $\int_L [3x^2y\,dx+Q\,dy]$ 之值完全取决于 $L$ 的起点与终点，且对任何实数 $z$，有
> $$
> \int_{(0,0)}^{(z,1)} 3x^2y\,dx+Q\,dy=\int_{(0,0)}^{(1,z)} 3x^2y\,dx+Q\,dy, \qquad (1)
> $$
> 求函数 $Q(x,y)$.（华中科技大学）

> [!tip]- 提示
> 因积分与路径无关，$\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}=\frac{\partial(3x^2y)}{\partial y}=3x^2$，故
> $$
> Q(x,y)=x^3+C(y). \qquad (2)
> $$

> [!tip]- 再提示
> 为了求出 $C(y)$，将式（2）代入式（1），得
> $$
> \int_{(0,0)}^{(z,1)} 3x^2y\,dx+(x^3+C(y))\,dy=\int_{(0,0)}^{(1,z)} 3x^2y\,dx+(x^3+C(y))\,dy. \qquad (3)
> $$
> 左端：采用折线路径：$(0,0)\to(z,0)\to(z,1)$. 在 $(0,0)\to(z,0)$ 上：$y=0$，$dy=0$，积分为 $0$；在 $(z,0)\to(z,1)$ 上：$x=z$，$dx=0$. 故
> $$
> \text{式（3）左端}=\left(\int_{(0,0)}^{(z,0)}+\int_{(z,0)}^{(z,1)}\right)[3x^2y\,dx+(x^3+C(y))\,dy]
> =0+\int_0^1[z^3+C(y)]dy=z^3+\int_0^1 C(y)dy.
> $$
> 类似地，式（3）右端 $=\int_0^1(1^3+C(y))dy=z+\int_0^1 C(y)dy$.
>
> 故式（3）变为
> $$
> z^3+\int_0^1 C(y)dy=z+\int_0^1 C(y)dy.
> $$
> 由式（2）知 $C(y)$ 连续，故上式可对 $z$ 求导，解得 $C(z)=3z^2-1$. 代回（2）得
> $$
> Q(x,y)=x^3+C(y)=x^3+3y^2-1 \quad (\forall (x,y)\in\mathbf{R}^2).
> $$

> [!note] 注
> 不难验证：答案满足积分与路径无关的条件以及等式（1）。


#### b. 利用原函数求积分

> [!example] 例7.3.23
> 计算积分
> $$I=\int_{L^+}\frac{(1+\sqrt{x^2+y^2})(x\,dx+y\,dy)}{x^2+y^2},$$
> 其中 $L^+$ 是不通过原点，从点 $A(1,0)$ 到 $B(0,2)$ 的分段光滑曲线。

> [!solution]- 解 I
> 因为
> $$
> \frac{(1+\sqrt{x^2+y^2})(x\,dx+y\,dy)}{x^2+y^2} \\
> =\left(\frac{1}{x^2+y^2}+\frac{1}{\sqrt{x^2+y^2}}\right)\frac{1}{2}d(x^2+y^2) \\
> =\frac{1}{2}\frac{d(x^2+y^2)}{x^2+y^2}+\frac{1}{2}\frac{d(x^2+y^2)}{\sqrt{x^2+y^2}} \\
> =d\ln(x^2+y^2)^{1/2}+d\sqrt{x^2+y^2} \\
> =d\left(\sqrt{x^2+y^2}+\ln\sqrt{x^2+y^2}\right),
> $$
> 即 $u=\sqrt{x^2+y^2}+\ln\sqrt{x^2+y^2}$ 是原函数，故积分与路径无关.
> $$I=u(B)-u(A)=\left(\sqrt{x^2+y^2}+\ln\sqrt{x^2+y^2}\right)\Big|_{(1,0)}^{(0,2)}=1+\ln 2.$$

> [!solution]- 解 II
> 设 $du=\frac{(1+\sqrt{x^2+y^2})(x\,dx+y\,dy)}{x^2+y^2}$，即
> $$\frac{\partial u}{\partial x}=\frac{1+\sqrt{x^2+y^2}}{x^2+y^2}x, \qquad (1)$$
> $$\frac{\partial u}{\partial y}=\frac{1+\sqrt{x^2+y^2}}{x^2+y^2}y. \qquad (2)$$
>
> 由（1）知
> $$u(x,y)=\int\frac{1+\sqrt{x^2+y^2}}{x^2+y^2}x\,dx=\ln\sqrt{x^2+y^2}+\sqrt{x^2+y^2}+C(y). \qquad (3)$$
>
> 由（2）知
> $$u(x,y)=\int\frac{1+\sqrt{x^2+y^2}}{x^2+y^2}y\,dy=\ln\sqrt{x^2+y^2}+\sqrt{x^2+y^2}+C(x). \qquad (4)$$
>
> 比较（3）、（4）可知 $C(x)=C(y)$，从而 $C(x)=C(y)\equiv$ 常数. 略去常数项不计，
> $$u=\ln\sqrt{x^2+y^2}+\sqrt{x^2+y^2}.$$
>
> 从而 $I=u(B)-u(A)=\left(\ln\sqrt{x^2+y^2}+\sqrt{x^2+y^2}\right)\Big|_{(1,0)}^{(0,2)}=1+\ln 2.$

> [!note] 注
> 用原函数的方法计算线积分，要求 $du=Pdx+Qdy$ 在区域内处处成立。如例7.3.22中的积分
> $$I=\int_{L^+}\frac{(x+y)dx-(x-y)dy}{x^2+y^2},$$
> 容易看出
> $$
> \frac{(x+y)dx-(x-y)dy}{x^2+y^2}=\frac{xdx+ydy}{x^2+y^2}+\frac{ydx-xdy}{x^2+y^2}=d\frac{1}{2}\ln(x^2+y^2)+d\arctan\frac{x}{y} \\
> = d\left(\ln\sqrt{x^2+y^2}+\arctan\frac{x}{y}\right), \qquad (1)
> $$
> 即 $\ln\sqrt{x^2+y^2}+\arctan\frac{x}{y}$ 为所求原函数。按理该积分应与路径无关，但在例7.3.22中我们已看到，从 $A$ 积分到 $B$，沿从 $(0,0)$ 上方穿过 $y$ 轴的曲线积分为 $\pi$，沿下方的路径积分为 $-\pi$. 其原因是式（1）只有当 $y\neq 0$ 时成立。从（1）只能推出在上半平面（或下半平面）内积分与路径无关，不能得出在全平面积分与路径无关。


#### c. 利用线积分求原函数

> [!example] 例7.3.24
> 求 $Pdx+Qdy=\frac{y\,dx-x\,dy}{3x^2-2xy+3y^2}$ 的原函数，假设 $y>0$.

> [!proof]- 解
> 因为分母的判别式小于零，易知分母 $3x^2-2xy+3y^2$ 当 $y>0$ 时不为零. $P,Q$ 有连续偏导数，且
> $$
> \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}=\frac{3(x^2-y^2)}{(3x^2-2xy+3y^2)^2}.
> $$
>
> 在 $y>0$ 的区域上，积分 $\int_L Pdx+Qdy$ 与路径无关。原函数可用线积分来计算。取 $(x_0,y_0)=(0,1)$，全体原函数可表示为
> $$
> u(x,y)=\int_{(0,1)}^{(x,y)}\frac{y\,dx-x\,dy}{3x^2-2xy+3y^2}+C_1.
> $$
> 以折线 $(0,1)\to(0,y)\to(x,y)$ 作积分路径，则
> $$
> \begin{aligned}
> u(x,y)&=\int_1^y 0\,dy+\int_0^x\frac{y\,dx}{3x^2-2xy+3y^2}+C_1\\
> &=\frac{y}{3}\int_0^x\frac{dx}{\left(x-\frac{1}{3}y\right)^2+\frac{8}{9}y^2}+C_1\\
> &=\frac{1}{2\sqrt{2}}\arctan\frac{3x-y}{2\sqrt{2}y}+C \quad (y>0).
> \end{aligned}
> $$

**旋转面积的计算**

**要点 1）** 设直线 $L$ 为：$ax+by+c=0$，则 $L$ 外一点 $(x_0,y_0)$ 到 $L$ 的距离

$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$

**2）** 设在直线 $L$ 外的连续曲线 $C$ 为：$x=x(t)$, $y=y(t)$, $t\in[\alpha,\beta]$, 则曲线 $C$ 上每点 $(x(t),y(t))$ 到 $L$ 距离为 $\frac{|ax(t)+by(t)+c|}{\sqrt{a^2+b^2}}$. 在点 $(x(t),y(t))$ 处的微分弧段为 $ds$（以 $L$ 为旋转轴），$ds$ 的旋转面积为 $2\pi\frac{|ax(t)+by(t)+c|}{\sqrt{a^2+b^2}}ds$. 通过积分（累加起来），就是曲线 $C$（绕直线 $L$）旋转的总面积：

$$
S=2\pi\int_\alpha^\beta \frac{|ax(t)+by(t)+c|}{\sqrt{a^2+b^2}}\,ds. \qquad (A)
$$

> [!example] 例7.3.25
> 求曲线 $C$：$x=a\cos^3 t$, $y=a\sin^3 t$（$a>0$）绕直线 $y=x$ 旋转所成曲面的面积。（中国科学院）

> [!proof]- 解
> （此曲线常被称为星形线，如图7.3.12）图像有对称性，（欲求的）总面积等于（曲线 $C$ 上）$PQ$, $QR$ 两段旋转面积的 $2$ 倍。
>
> 曲线 $C$ 上：点 $(x(t),y(t))=(a\cos^3 t, a\sin^3 t)$ 处的微分弧段：
>
> $$
> \begin{aligned}
> ds&=\sqrt{x'^2(t)+y'^2(t)}dt\\
> &=\sqrt{(-3a\cos^2 t\sin t)^2+(3a\sin^2 t\cos t)^2}dt\\
> &=3a|\cos t\sin t|dt.
> \end{aligned}
> $$
>
> 在弧段 $PQ$, $QR$ 上：$-\frac{\pi}{4}\le t\le\frac{\pi}{4}$. 据上面要点2）的公式（A）（其中的 $L$：$ax+by+c=0$，这里是：$x-y=0$，即 $a=1$，$b=-1$，$c=0$），$C$ 绕 $x-y=0$ 的旋转总面积为
>
> $$
> \begin{aligned}
> S&=2\times 2\pi\int_{-\pi/4}^{\pi/4}\frac{|x(t)-y(t)|}{\sqrt{1^2+1^2}}\sqrt{x'^2(t)+y'^2(t)}dt\\
> &=4\pi\cdot 3a^2\cdot \frac{1}{\sqrt{2}}\int_{-\pi/4}^{\pi/4}(\cos^3 t-\sin^3 t)\cdot|\sin t\cos t|dt\left(\int_{-\pi/4}^{\pi/4}\sin^3 t\cdot|\sin t\cos t|dt=0\right)\\
> &=12\sqrt{2}\pi a^2\int_0^{\pi/4}(\cos t)^4\sin t\,dt=\frac{3}{5}(4\sqrt{2}-1)\pi a^2.
> \end{aligned}
> $$


### 单元练习 7.3



> [!exercise] 7.3.1
> 计算积分$\int_{L_{ABC}}\frac{dx+dy}{|x|+|y|}, 其中ABC为三点A(1,0), B(0,1), C(-1,0)连接成的折线$。（上海交通大学）
>

> [!hint]- 提示
> 被积函数在左、右对称点上值的大小相等，符号相同，dx亦然，但dy在对称点上大小相等，符号相反。
>

> [!hint]- 再提示
> 原积分I=2$\int_{AB}\frac{dx}{|x|+|y|}=2\int_{AB}\frac{dx}{x+y}, AB上x+y=1$，2$\int_1^0 dx=-2.$
>

> [!exercise] 7.3.2
> 设C为对称于坐标轴的光滑曲线，证明：
>
> $$
> \oint_C (x^3y+e^y)dx+(xy^3+xe^y-\cos x)dy=0.
> $$
>
> （河北师范大学）
>

> [!hint]- 提示
> 应用Green公式（并利用对称性）（设C=$\partial D）$，
>
> （原式）左端=$\iint_D[(y^3+e^y+\sin x)-(x^3+e^y)]dxdy=奇性=0$。
>

> [!exercise] 7.3.3
> 计算曲线积分$\int_{L^+} y^2dx+z^2dy+x^2dz$，其中
>
> $$
> L^+:\begin{cases}
> $$
> $$
> x^2+y^2+z^2=R^2,\\
> $$
> $$
> x^2+y^2=Rx,
> $$
> $$
> \end{cases}\quad (R>0,z\ge 0),
> $$
>
> L^+的指向为顺时针方向，如图7.3.13。（辽宁师范大学）
>

> [!hint]- 提示
> y>0与y<0两部分对称，相消。
>

> [!exercise] ☆ 7.3.4
> 计算曲线积分$\int_C\left(\frac{xy}{ab}+\frac{\sqrt{2}yz}{b\sqrt{a^2+b^2}}+\frac{\sqrt{2}zx}{a\sqrt{a^2+b^2}}\right)ds,$
>
> 其中C为$\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{2z^2}{a^2+b^2}=1（x>0,y>0,z>0）与\frac{x}{a}+\frac{y}{b}=1的交线（a,b>0）$。（四川大学）
>

> [!hint]- 提示
> 如图7.3.14，可参考例7.3.4。
>

> [!hint]- 再提示
> 将C的两个方程式联立，消去y，可得
> $$
> ((2x-a)^2)/(a^2)+((2z)^2)/(a^2+b^2)=1.
> $$
>
> 令 (2x-a)/a=r cosθ，2z/√(a^2+b^2)=r sinθ，代入可知 r=1. 于是
>
> $$
> x=a/2(1+cosθ)，z=√(a^2+b^2)/2 sinθ.
> $$
>
> 进而 y=b/2(1-cosθ).
>
> $$
> x'(θ)=-a/2 sinθ，x'^2(θ)=a^2/4 sin^2θ.
> $$
>
> 类似有 y'^2(θ)=b^2/4 sin^2θ，z'^2(θ)=1/4(a^2+b^2)cos^2θ. 因此
>
> $$
> ds=√(x'^2(θ)+y'^2(θ)+z'^2(θ))dθ=1/2√(a^2+b^2)dθ.
> $$
>
> （原积分）I=∫_0^(π/2)[1/4 sin^2θ+√2/4 sinθ·(1+cosθ)+√2/4 sinθ(1-cosθ)]·√(a^2+b^2)/2 dθ
>
> $$
> =1/32√(a^2+b^2)(π+2√2).
> $$
>

> [!exercise] 7.3.5
> 计算圆柱面 x^2+y^2=Rx 被曲面 x^2+y^2+z^2=R^2 所截部分的面积.
>

> [!hint]- 提示
> 可参看练习 7.3.3 中的图 7.3.13, 其中(a)为投影情况, (b)图描述了上半部分的情况. 因上下对称, 前后对称, 只需求出第一卦限内的部分乘 4 即可. 利用元素法, 柱面面积可表示为第一型曲线积分.
>

> [!hint]- 再提示
> 第一卦限的部分在 xOy 平面上的投影为 x^2+y^2=Rx 的上半圆. 在此半圆上任取一点(x,y), 作弧长元素 ds, 上半柱面截下的部分对应一无限狭窄的长条矩形, 面积 zds=√(R^2-x^2-y^2)ds. 因而整个面积:S=4∫_C √(R^2-x^2-y^2)ds, 其中 C 为 x^2+y^2=Rx 之上半圆. 取点(R/2,0)作极点, 引入极坐标 x=R/2 cosθ+R/2, y=R/2 sinθ. 于是
>
> $$
> S=4∫_0^π √(R^2-Rx)·R/2 dθ=4R^2·1/2∫_0^π √((1-cosθ)/2)dθ=4R^2∫_0^π sin(θ/2)d(θ/2)=4R^2.
> $$
>

> [!exercise] 7.3.6
> 设在力场 F=(x+2y+4,4x-2y,3x+z)中有单位质量为 M 的质点沿椭圆 C:(3x+2y-5)^2+(x-y+1)^2=a^2, z=4(a>0)移动一周(从 z 轴 +∞ 点看去, 为逆时针方向), 试求力 F 所做的功.(南京航空航天大学)
>

> [!hint]- 提示
> W=∫_{C+}(x+2y+4)dx+(4x-2y)dy+(3x+z)dz, 在 C 上 z=4, 第三项 dz=0, 只剩前两项.
>

> [!hint]- 再提示
> W=(Green 公式) ∬_D(4-2)dxdy, 其中 D 为(3x+2y-5)^2+(x-y+1)^2≤a^2. 令ξ=3x+2y-5, η=x-y+1, 则 |J|=1/5, W=2∬_{ξ^2+η^2≤a^2}1/5 dξdη=2/5πa^2.
>

> [!exercise] 7.3.7
> 计算双纽线 (x^2+y^2)^2=a^2(x^2-y^2) 所围的面积(a>0).
>

> [!hint]- 提示
> 例 7.3.11 前之“要点”中公式(B)四种算法均可.
>

> [!hint]- 再提示
> 图形关于坐标轴对称(如图 7.3.15), 只要计算第一象限再乘 4 即可.
>

> [!hint]- 解Ⅰ
> 引用极坐标得 r^2=a^2 cos2θ, 因此第一象限 θ 的变化范围为[0,π/4]. 这时
>
> $$
> x=r cosθ=a cosθ√(cos2θ), y=r sinθ=a sinθ√(cos2θ).
> $$
>
> 代入公式(B):
>
> $$
> S=4·1/2∫_0^(π/4)[x(θ)y'(θ)-y(θ)x'(θ)]dθ=2∫_0^(π/4)a^2 cos2θdθ=a^2.
> $$
>

> [!hint]- 解Ⅱ
> 令 y=tx(以斜率为参数), 这时 x^2(1+t^2)^2=a^2(1-t^2),
>
> $$
> x=a√(1-t^2)/(1+t^2),
> $$
>
> 第一象限 t 的变化范围为 0≤t≤1,
>
> $$
> xdy-ydx=x(t)[x(t)+tx'(t)]dt-tx(t)·x'(t)dt=(x(t))^2dt.
> $$
>
> 因此 S=4·1/2∫_0^1 a^2(1-t^2)/(1+t^2)^2 dt =（令 t=tanθ）=2a^2∫_0^(π/4)cos2θdθ=a^2.
>

> [!hint]- 解Ⅲ
> 利用二重积分, 第一象限 r=a√(cos2θ), 0≤θ≤π/4.
>
> $$
> S=4∬_{D_1}dxdy=4∫_0^(π/4)dθ∫_0^(a√(cos2θ))rdr=4·1/2∫_0^(π/4)a^2 cos2θdθ=a^2.
> $$
>

> [!exercise] * 7.3.8
> 一个半径为 r 的圆, 沿着半径为 R 的定圆之圆周外滚动(而不滑动)时, 由动圆上一点所描绘出来的曲线称为外摆线. 假定比值 R/r=n 是整数(n≥1), 求外摆线所围的面积.
>

> [!hint]- 提示
> 可用向量法求出外摆线的参数方程, 再用例 7.3.11 前之要点公式(B)求解.
>

> [!hint]- 解
> 以大圆中心为原点, 让正 x 轴过起始切点 A, 设小圆(半径 r)绕大圆(半径 R)逆时针滚动. 注意滚动时切点始终在两圆连心线上. 并且, 如图 7.3.16: 当小圆圆心从点 P_0 移动到点 P 时, 滚过的弧段 AB=BC, 因而若所对的圆心角∠AOB=θ, 则∠BPC=nθ. 小圆半径向量 P_0A 此时实际旋转角度为 θ+nθ=(n+1)θ. P_0A 起始辐角为 π, 旋转到 PC 位置时辐角为 π+(n+1)θ. 故向量
>
> $$
> OP=((R+r)cosθ,(R+r)sinθ)=((n+1)r cosθ,(n+1)r sinθ),
> $$
>
> $$
> PC=(r cos(π+(n+1)θ), r sin(π+(n+1)θ))=(-r cos(n+1)θ, -r sin(n+1)θ).
> $$
>
> 因此点 C(x,y)的径向量
>
> $$
> (x,y)=OC=OP+PC=((n+1)r cosθ-r cos(n+1)θ,(n+1)r sinθ-r sin(n+1)θ).
> $$
>
> 故外摆线参数方程为(0≤θ≤2π)(r,n 为已知常数)
>
> $$
> x=(n+1)r cosθ-r cos(n+1)θ, y=(n+1)r sinθ-r sin(n+1)θ.
> $$
>
> 从而
>
> xdy-ydx
> $$
> =[(n+1)r cosθ-r cos(n+1)θ][(n+1)r cosθ-r(n+1)cos(n+1)θ]dθ
> $$
> $$
> +[-(n+1)r sinθ+r sin(n+1)θ][-(n+1)r sinθ+r(n+1)sin(n+1)θ]dθ
> $$
> $$
> =[(n+1)^2r^2-(n+1)r^2 cos nθ-(n+1)^2r^2 cos nθ+(n+1)r^2]dθ
> $$
> $$
> =r^2(n+1)(n+2)(1-cos nθ)dθ.
> $$
>
> 于是
>
> $$
> S=1/2∮_{L+}xdy-ydx=1/2 r^2(n+1)(n+2)∫_0^(2π)(1-cos nθ)dθ=r^2(n+1)(n+2)π.
> $$
>

> [!exercise] * 7.3.9
> 上题当小圆在大圆内壁滚动(不滑动), 小圆上一点的轨迹称为内摆线. 设 R/r=n 为整数(n≥2), 求内摆线所围的面积. 《(n-1)(n-2)πr^2》
>

> [!hint]- 提示
> $$
> OP=((n-1)r cosθ,(n-1)r sinθ), PC=(r cos(1-n)θ,r sin(1-n)θ),
> $$
>
> $$
> x(θ)=(n-1)r cosθ+r cos(n-1)θ, y(θ)=(n-1)r sinθ-r sin(n-1)θ.
> $$
>

> [!exercise] ☆ 7.3.10
> 求线积分 ∫_C -y/(x^2+y^2) dx + x/(x^2+y^2) dy 在下列两种曲线 C 的情况下的值:
>
> $$
> 1) (x-1)^2+(y-1)^2=1; 《0》
> $$
>
> 2) |x|+|y|=1, 方向均为逆时针.(北京大学) 《2π》
>

> [!hint]- 提示
> 可参看例 7.3.11 及其“注”.
>

> [!exercise] ☆ 7.3.11
> 求常数 α, 使给定的积分恒为零:
>
> 1) ∮_C (xdx-αydy)/(x^2+y^2)=0, 其中 C 是平面上任一简单闭曲线;(清华大学) 《α=-1》
>
> 2) ∮_C x/y r^α dx - x^2/y^2 r^α dy=0 (r=√(x^2+y^2)), 其中 C 是上半平面任一光滑闭曲线.(北京大学) 《α=-1》
>

> [!hint]- 提示
> 1) 由 ∂P/∂y=∂Q/∂x 得 α=-1. α=-1 时(0,0)处循环常数=0, 即令 C 包围原点, 该积分也为零.
>
> 2) 由 ∂P/∂y=∂Q/∂x 得 x^3+xy^2=-α(x^3+xy^2), 解得 α=-1.
>

> [!exercise] ☆ 7.3.12
> 计算开口弧段上的曲线积分:
>
> 1) I=∫_{AB}(y^3+x)dx-(x^3+y)dy, 其中 A=(0,0), B=(a,0), AB:x^2+y^2=ax (y≥0);(北京大学) 《9/64πa^4+a^2/2 (a>0), -9/64πa^4+a^2/2 (a<0)》
>
> 2) K=∫_{C+}(-2xe^(-x^2)sin y)dx+(e^(-x^2)cos y+x^4)dy, 其中 C+为从点(1,0)到点(-1,0)的半圆 y=√(1-x^2)(-1≤x≤1);(武汉大学) 《0》
>
> 3) L=∫_{OA}(y^2-cos y)dx+x sin y dy, 其中 OA 是从原点 O(0,0)到 A(π,0)的弧:y=sin x.(华东师范大学) 《-π/2》
>

> [!hint]- 提示
> 参看例 7.3.14 及前后的文字叙述.
>

> [!hint]- 再提示
> $$
> 1) I=∫_{AB}(y^3+x)dx-(x^3+y)dy
> $$
>
> $$
> =∮_{AB+BA}(y^3+x)dx-(x^3+y)dy+∫_{AB}(y^3+x)dx-(x^3+y)dy
> $$
>
> $$
> =±∬_D(-3x^2-3y^2)dxdy+∫_0^a xdx
> $$
>
> (a>0 时取“+”, a<0 时取“-”; D 是 AB, BA 所围区域)
>
> $$
> =±∫_0^(π/2)dθ∫_0^(a cosθ)3r^3dr+1/2a^2=(sgn a)·9/64πa^4+1/2a^2.
> $$
>
> 2) K=∬_{x^2+y^2≤1, y≥0}4x^3dxdy=0 (对称性) (∫_{OA}(-2xe^(-x^2)sin y)dx+(e^(-x^2)cos y+x^4)dy=0).
>
> 3) L=∬_D xydxdy-∫_{OA}cos0dx=-π/2, 其中 D={(x,y)|0≤x≤π, 0≤y≤sin x}.
>

> [!hint]- 注
> 1) 中未假定 a 的正、负, 务必分别讨论.
>

> [!exercise] 7.3.13
> 设 f(x)在(-∞,+∞)内有连续的导函数, 求
>
> $$
> ∫_L [(1+y^2f(xy))/y]dx + x/y^2 [y^2f(xy)-1]dy,
> $$
>
> 其中 L 是从点 A(3,2/3)到点 B(1,2)的直线段.(北京航空航天大学) 《-4》
>

> [!hint]- 提示
> ∂Q/∂x=∂P/∂y(=-1/y^2+f(xy)+xyf'(xy)), 故可用平行坐标轴之折线路径取代原积分线(斜线段).
>

> [!hint]- 再提示
> 原积分=∫_3^1 1/2[1+4f(2x)]dx+∫_(2/3)^2 3[f(3y)-1/y^2]dy=-4.
>

> [!exercise] ☆ 7.3.14
> 设 Ω 为 xOy 平面上具有光滑边界的有界闭区域, u 在 Ω 内有二阶连续偏导数, 直到边界还有一阶连续偏导数, u 为非常值的函数; u|_{∂Ω}=0, 试证:
>
> $$
> I=∬_Ω u·(∂^2u/∂x^2+∂^2u/∂y^2)dxdy<0.
> $$
>
> (武汉大学)
>

> [!hint]- 提示
> 0=∫_{∂Ω}-u ∂u/∂y dx+u ∂u/∂x dy=I+∬_Ω[(∂u/∂x)^2+(∂u/∂y)^2]dxdy, 而右端第 2 项 >0.
>

> [!exercise] ☆ 7.3.15
> 证明: lim_{R→+∞} ∮_{x^2+y^2=R^2} (ydx-xdy)/(x^2+xy+y^2)^2=0.(西南大学)
>

> [!hint]- 提示
> 作极坐标变换即知.
>

> [!hint]- 再提示
> 0≤|∮_{x^2+y^2=R^2}(ydx-xdy)/(x^2+xy+y^2)^2| (令 x=R cosθ, y=R sinθ)
>
> $$
> =|∫_0^(2π)(-R^2 sin^2θ-R^2 cos^2θ)dθ/(R^2cos^2θ+R^2sinθcosθ+R^2sin^2θ)^2|
> $$
>
> $$
> ≤1/R^2∫_0^(2π)dθ/(1+1/2 sin2θ)^2
> $$
>
> $$
> ≤1/R^2∫_0^(2π)dθ/(1-1/2)^2=1/R^2 8π→0 (R→+∞).
> $$
>

> [!exercise] * 7.3.16
> 证明积分 ∮_L cos(l,n)ds=0, 其中 L 为逐段光滑的封闭曲线, l 为任意给定的方向, n 是 L 的外法线方向.
>

> [!hint]- 提示
> 可参看例 7.3.15 的解法及其插图.
>

> [!hint]- 证Ⅰ
> 因第一型曲线积分与积分方向的选取无关, 不妨假定方向为逆时针方向. 向量 n,l 上的单位向量分别记作 n_1,l_1, 则 n_1=(cos(n,x),cos(n,y)), l_1=(cos(l,x),cos(l,y)), 故
>
> $$
> cos(l,n)=l_1·n_1=cos(l,x)cos(n,x)+cos(l,y)cos(n,y).
> $$
>
> 原积分=∮_{L+}[cos(l,x)cos(n,x)+cos(l,y)cos(n,y)]ds
>
> $$
> =∮_{L+}cos(l,x)dy-cos(l,y)dx=∬_D 0dxdy=0.
> $$
>
> (因 l 为固定的方向, 与(x,y)无关, 故 cos(l,x), cos(l,y)为常值函数, 导数为零.)
>

> [!hint]- 证Ⅱ
> 若积分选用顺时针(即负)方向, 最后结果不变. 如图 7.3.17: ∠1=∠2(同为∠3 的余角), 且∠3=∠4=∠5. 因此夹角(n,x)(=∠2)与(t,y)互补,
>
> $$
> (n,y)=∠3=∠4=∠5=(t,x).
> $$
>
> 于是 原积分=∮_L cos(l,n)ds=∮_L l_1·n_1 ds
>
> $$
> =∮_{L-}[cos(l,x)cos(n,x)+cos(l,y)cos(n,y)]ds
> $$
>
> $$
> =∮_{L-}[-cos(l,x)cos(t,y)+cos(l,y)cos(t,x)]ds
> $$
>
> $$
> =∮_{L-}-cos(l,x)dy+cos(l,y)dx
> $$
>
> $$
> =∮_{L+}cos(l,x)dy-cos(l,y)dx=∬_D 0dxdy=0.
> $$
>

> [!hint]- 证Ⅲ
> 由于方向 l 和曲线 L 给定之后, 该积分值就已被确定, 不仅与积分方向无关, 也与坐标选取无关. 为了方便计算, 不妨令 x 轴与 l 的方向一致, 取逆时针方向, 则
>
> $$
> cos(l,n)=cos(x,n)=cos(n,x)=cos(t,y).
> $$
>
> 原积分=∮_{L+}cos(t,y)ds=∮_{L+}dy=∬_D0dxdy=0,
>
> 以上 D 表示 L 所围区域. 因 L 为封闭曲线, 用定义亦知 ∮_L dy=0.
>

> [!exercise] * 7.3.17
> 计算 Gauss 积分 G(x,y)=∮_L cos(r,n)/r ds, 其中 r=√((ξ-x)^2+(η-y)^2) 为向量 r 的长度, 此向量是联结点 A(x,y)和封闭光滑曲线 L 上的动点 M(ξ,η)而得的向量. (r,n)为向量 r 与曲线上 M 点处外法向量 n 所成的夹角.
>

> [!hint]- 提示
> 可考虑坐标平移, 把原点平移到点 A, 并写出积分的具体表达式.
>

> [!hint]- 解
> 任意取定一点(x_0,y_0), 来计算 Gauss 积分在(x_0,y_0)处的值. 将坐标原点平移至(x_0,y_0), 即令 u=ξ-x_0, v=η-y_0, 则 r=√(u^2+v^2), A(x_0,y_0)到 M(ξ,η)的向量 r=AM=(ξ-x_0,η-y_0)=(u,v). r 上的单位向量 r_1=(u/r, v/r).
> 动点 M 处外法向量 n 的单位向量
>
> $$
> n₁=(cos(n,x),cos(n,y))=(cos(n,u),cos(n,v)).
> $$
>
> 因此
>
> $$
> cos(r,n)=r₁·n₁=\frac{u cos(n,u)}{r}+\frac{v cos(n,v)}{r}.
> $$
>
> 如图 7.3.18 所示，动点处外法向量 n，切向量 t 跟 u,v 方向夹角有如下关系（设 L⁺ 逆时针）：(n,u)=(t,v),(n,v) 与 (t,u) 互补。因此
>
> $$
> cos(n,u)ds=cos(t,v)ds=dv,
> $$
>
> $$
> cos(n,v)ds=cos(π-(t,u))ds=-cos(t,u)ds=-du,
> $$
>
> $$
> G(x₀,y₀)=∮_L \frac{cos(r,n)}{r}ds
> $$
> $$
> =∮_L \frac{u cos(n,u)+v cos(n,v)}{r²}ds
> $$
> $$
> =∮_{L⁺}\frac{u dv-v du}{u²+v²}.
> $$
>
> 至此，所谓 Gauss 积分，实际上就是例 7.3.11 注 2) 中已讨论过的积分. 重复相应讨论知
>
> G(x₀,y₀)= { 0,    当 L 不包围点 (x₀,y₀) 时，
>             2π,   当 L 包围点 (x₀,y₀) 时 }
>
> （原因是 P=-$\frac{v}{u²+v²}, Q=\frac{u}{u²+v²}$，除 (u,v)=(0,0) 外处处有连续的偏导数，且 $\frac{∂Q}{∂u}=\frac{∂P}{∂v}. 故 L 内不含点 (u,v)=(0,0)（即 (x₀,y₀)）时$，积分为 0；包含 (x₀,y₀) 时积分等于循环常数，可用单位圆轻易算出其值为 2π·1²=2π）.
>

> [!hint]- ※注
> （(x₀,y₀) 在 L 上的情况）这时为反常积分，传统的做法是以 (x₀,y₀) 为中心，作半径为 r（充分小）的圆 C_r（将反常点挖掉，如图 7.3.19），计算曲线 L 剩下部分 L'_r 上的积分，再令小圆半径 r→0，取极限. 因 L 为光滑曲线，局部越小越趋向直线段，故小圆被 L 切成两部分，也越来越趋向两个半圆，其中与 L'_r 同侧的“半圆” C'_r 与 L'_r 组成不包围点 (x₀,y₀) 的封闭曲线，积分为零. 故 C'_r 上的积分等于 L'_r 上的积分. 而 C'_r 上积分趋向于 π，因此
>
> ∫_{AB}^{AC} … =0 ⇒ ∫_{AB}^{A'C'B}+∫_{BC}^{CA} …=0 ⇒ ∫_{AB}^{A'C'B} … = ∫_{AC}^{A'C'B} … → π  （当 r→0 时）.
>
> 故 (x₀,y₀)∈L 时，G(x₀,y₀)=lim_{r→0}∫_{AB}^{A'C'B} … =π（其中“…”表示被积表达式 $\frac{u dv-v du}{u²+v²}）.$
>

> [!exercise] ☆ 7.3.18
> 证明：若 u(x,y) 有二阶连续偏导数，则
>
> $$
> ∫∫_D [ (∂u/∂x)²+(∂u/∂y)² ]dxdy
> $$
> $$
> = -∫∫_D uΔu dxdy + ∮_L u \frac{∂u}{∂n}ds,                         (1)
> $$
>
> 式中光滑曲线 L 包围有界区域 D，$\frac{∂u}{∂n} 为沿 L 的外法线方向的导函数$，Δu=$\frac{∂²u}{∂x²}+\frac{∂²u}{∂y²}.（延边大学$，西安电子科技大学）
>
> * 试由此进而证明：在 D∪L 上的调和函数 u=u(x,y)（即：u 在 D 内直到边界 L 上满足 Δu=$\frac{∂²u}{∂x²}+\frac{∂²u}{∂y²}=0）单值地被它在边界 L 上的数值所确定.（华中师范大学）$
>

> [!hint]- 提示
> $\frac{∂u}{∂n}=\frac{∂u}{∂x}cos(n,x)+\frac{∂u}{∂y}cos(n,y). 因此$
>
> $$
> ∮_L u\frac{∂u}{∂n}ds
> $$
> $$
> =∮_L u\frac{∂u}{∂x}cos(n,x)ds+u\frac{∂u}{∂y}cos(n,y)ds
> $$
> $$
> =∮_L u\frac{∂u}{∂x}dy-u\frac{∂u}{∂y}dx.
> $$
>
> 再应用 Green 公式即得式 (1).
>

> [!hint]- 证
> 下证：调和函数被其边界值唯一确定（u|_{∂D}≡0⇒u|_D≡0）. 为此我们先用反证法来证明 u|_{∂D}≡0，即 (∂u/∂x)²+(∂u/∂y)²=0 于 D. 假设存在某点 M∈D，使得 [(∂u/∂x)²+(∂u/∂y)²]_M≠0，则以 M 为中心在 D 内作一充分小的圆域 S_r，使得
>
> $$
> ∫∫_D [ (∂u/∂x)²+(∂u/∂y)² ]dxdy
> $$
> $$
> ≥ ∫∫_{S_r} [ (∂u/∂x)²+(∂u/∂y)² ]dxdy >0,
> $$
>
> 与 Δu=0 矛盾.（参看习题 7.3.14 中的提示）这就证明了：在 D 内直到边界上
>
> $$
> (∂u/∂x)²+(∂u/∂y)²=0,
> $$
>
> 从而 u(x,y)≡常数. 因此边界上 u=0，则内部处处 u≡0. 故任意两调和函数 u 与 u₁，若在边界上 u≡u₁（u-u₁=0），则在内部处处 (u-u₁≡0)；u≡u₁(x,y). 即 u 被边界值唯一确定.
>

> [!exercise] ** 7.3.19
> 证明：平面上的 Green 第二公式：
>
> $$
> ∫∫_D | Δu  Δv ; u  v | dxdy = ∮_L | ∂u/∂n  ∂v/∂n ; u  v | ds,              (1)
> $$
>
> 其中 L 为光滑的封闭围线，D 是 L 所围的有界区域，$\frac{∂}{∂n} 是沿 L 外法线方向的方向导数.$
>
> 并由此证明：若 u=u(x,y) 为调和函数（即 Δu=0），则
>
> $$
> 1） u(x,y)=\frac{1}{2π}∮_L (u\frac{∂ln r}{∂n}-ln r\frac{∂u}{∂n})ds,        (2)
> $$
>
> 其中 r=√[(ξ-x)²+(η-y)²] 是 (x,y) 与 L 上动点 (ξ,η) 的距离，(x,y)∈D 为任意内点；
>
> 2）∀(x,y)∈D，以 (x,y) 为中心在 D 内的圆周 C_r（半径为 r）有
>
> $$
> u(x,y)=\frac{1}{2πr}∫_{C_r}u(ξ,η)ds.                                   (3)
> $$
>

> [!hint]- 提示
> 例如设式 (1) 右端的积分取逆时针方向，利用上题方法把右端积分化为第二型曲线积分，并且应用 Green 公式.
>

> [!hint]- 证
> （只证结论 1）.）∀(x₀,y₀)∈D，易知：当 (x,y)≠(x₀,y₀) 时，函数
>
> $$
> v=ln r=ln√[(x-x₀)²+(y-y₀)²]
> $$
>
> 为调和函数.（事实上，
>
> $$
> Δv=∂²v/∂x²+∂²v/∂y²=\frac{1}{r⁴}[(y-y₀)²-(x-x₀)²]+\frac{1}{r⁴}[(x-x₀)²-(y-y₀)²]=0.）
> $$
>
> 因此，以 (x₀,y₀) 为中心，挖去半径为 ε>0（充分小）的圆域 S_ε，则在剩下的区域（记作 D₁），对 u,v 可应用刚证的公式 (1). 这时 D₁ 带有小洞，洞口为圆周 C_ε，D₁ 的外边界为 L. 根据式 (1) 有（下面被省略的被积表达式为 (u$\frac{∂ln r}{∂n}-ln r\frac{∂u}{∂n})ds）$
>
> ∮_{L+C_ε} … = ∮_{∂D₁} … =^{式(1)} ∫∫_{D₁} | Δu  Δln r ; u  ln r | dxdy=0,
>
> 如此
>
> $$
> ∮_L … = ∮_{C_ε} … = ∮_{C_ε} u\frac{∂ln r}{∂n}ds-∮_{C_ε}ln r\frac{∂u}{∂n}ds=I₁+I₂.        (4)
> $$
>
> 利用 Green 公式，
>
> $$
> I₂=∮_{C_ε}ln r\frac{∂u}{∂n}ds
> $$
> $$
> =ln ε ∮_{C_ε}[\frac{∂u}{∂x}cos(n,x)+\frac{∂u}{∂y}cos(n,y)]ds
> $$
> $$
> =ln ε∫∫_{S_ε}Δu dxdy=0.                                           (5)
> $$
>

> [!hint]- 注
> 意在 C_ε 上，$\frac{∂ln r}{∂n}|_{r=ε}=\frac{∂ln r}{∂r}|_{r=ε}=\frac{1}{r}|_{r=ε}=\frac{1}{ε}$，因此
>
> $$
> I₁=∮_{C_ε}u\frac{∂ln r}{∂n}ds=\frac{1}{ε}∮_{C_ε}uds.                 (6)
> $$
>
> (5),(6) 代入 (4) 并应用中值定理，可知
>
> $$
> \frac{1}{2π}∮_L (u\frac{∂ln r}{∂n}+ln r\frac{∂u}{∂n})ds
> $$
> $$
> =\frac{1}{2πε}∮_{C_ε}uds
> $$
> =$\frac{1}{2πε}u(Q)∮_{C_ε}ds=u(Q)（其中 Q 是 C_ε 上某一点）.$
>
> 令 ε→0，得 u(Q)→u(x₀,y₀). 于是证得 1）对任意 (x₀,y₀) 成立.
>
> 最后在式 (2) 中令 L=C_r，注意在 C_r 上 $\frac{∂ln r}{∂n}=\frac{1}{r}$，∮_{C_r}ln r$\frac{∂u}{∂n}ds=ln r∮_{C_r}\frac{∂u}{∂n}ds=0$，便得式 (3).
>

> [!exercise] 7.3.20
> 试证：若 f(u) 为连续函数，且 C 为逐段光滑的封闭围线，则
>
> $$
> ∮_C f(x²+y²)(x dx+y dy)=0.
> $$
>
> （湖南大学）
>

> [!hint]- 提示
> $\frac{1}{2}∫_a^{x²+y²}f(t)dt 是 f(x²+y²)(x dx+y dy) 的原函数.$
>

> [!exercise] 7.3.21
> 试求 $\frac{(x²+2xy+5y²)dx+(x²-2xy+y²)dy}{(x+y)³} 的原函数.$
>

> [!hint]- 提示
> 直接能写出原函数的部分先写出（原函数），不能直接写出原函数的部分，可通过曲线积分来计算.
>

> [!hint]- 再提示
> 1° 原式=$\frac{(x+y)²dx+(x+y)²dy}{(x+y)³}+\frac{4y²dx-4xy dy}{(x+y)³} 记=H₁+H₂$，
>
> 其中 H₁=$\frac{d(x+y)}{x+y}=dln(x+y). 故 H₁ 的原函数 u₁=ln(x+y)+C.$
>
> 2°（剩下部分）记 P=$\frac{4y²}{(x+y)³}, Q=\frac{-4xy}{(x+y)³}（不难验证$：$\frac{∂Q}{∂x}=\frac{∂P}{∂y}）.$
>
> H₂ 的原函数（可沿 (0,1)→(0,y)→(x,y) 计算积分）
>
> $$
> u₂=∫_{(0,1)}^{(0,y)}\frac{4y²dx-4xy dy}{(x+y)³}+∫_{(0,y)}^{(x,y)}\frac{4y²dx-4xy dy}{(x+y)³}
> $$
> $$
> =0+\frac{2x²+4xy}{(x+y)²}.
> $$
>
> 3° 所求的原函数：u=u₁+u₂=ln(x+y)+$\frac{2x²+4xy}{(x+y)²}+C（C 为任意常数）.$
>

> [!hint]- 注
> H₂ 的原函数，当起点选得不同时，答案也会不同. 例如若以 (1,0) 为起点，沿 (1,0)→(x,0)→(x,y) 求积分，则
>
> $$
> u₂=∫_{(1,0)}^{(x,0)}\frac{4y²dx-4xy dy}{(x+y)³}+∫_{(x,0)}^{(x,y)}\frac{4y²dx-4xy dy}{(x+y)³}
> $$
> $$
> =0-4x∫_0^y\frac{y dy}{(x+y)³}
> $$
> $$
> =2x∫_0^y y d\frac{1}{(x+y)²}=2x[\frac{y}{(x+y)²}-∫_0^y\frac{dy}{(x+y)²}]
> $$
> $$
> =2x[\frac{y}{(x+y)²}-\frac{y}{x(x+y)}]=-\frac{2y²}{(x+y)²}.
> $$
>

> [!hint]- 注
> 意：上面 u₂ 的两个答案，虽然形式不同，但实际上后者只比前者差一个常数“2”，也就是从 (0,1)→(1,0) 的积分值. 另外，还可以通过求偏导数验证答案的正确性.
>

> [!exercise] 7.3.22
> 设 f(x),g(x) 有连续的导函数，
>
> 1）若 yf(xy)dx+xg(xy)dy 为恰当微分，试求 f-g；
>
> 2）若 f(x) 有原函数 φ(x)，试求 yf(xy)dx+xg(xy)dy 的原函数.
>

> [!hint]- 解
> 1）恰当微分的充要条件是：$\frac{∂Q}{∂x}=\frac{∂P}{∂y}$，此即
>
> $\frac{∂}{∂x}[xg(xy)]=\frac{∂}{∂y}[yf(xy)] ⇔ g(u)+ug'_u(u)=f(u)+uf'_u(u)（其中 u=xy）$
>
> $$
> ⇔ u[f'_u(u)-g'_u(u)]+[f(u)-g(u)]=0.
> $$
>
> ⇔ u$\frac{dh}{du}+h(u)=0（其中 h(u)=f(u)-g(u)）$
>
> $$
> ⇔ \frac{dh}{h}=-\frac{du}{u}.
> $$
>
> 积分得 f(u)-g(u)=h(u)=Cu^{-1}. 因 f(1)-g(1)=0，知 C=0. 故
>
> $$
> f(u)-g(u)≡0.                                                        (1)
> $$
>
> 2）yf(xy)dx+xg(xy)dy 的原函数是
>
> $$
> w=(∫_{(0,0)}^{(0,y)}+∫_{(0,y)}^{(x,y)})(yf(xy)dx+xg(xy)dy),          (2)
> $$
>
> 而其中 ∫_{(0,0)}^{(0,y)} yf(xy)dx+xg(xy)dy=0（因为 x=0, dx=0）. 所以
>
> $$
> w=∫_{(0,y)}^{(x,y)} yf(xy)dx+xg(xy)dy.
> $$
>
> 因 y 不变，dy=0，于是 w=∫_0^x yf(xy)dx=∫_0^{xy}f(u)du. yf(xy)dx+xg(xy)dy 的原函数是
>
> $$
> w=∫_0^{xy}f(u)du=φ(xy)-φ(0).
> $$
>
> （已知：φ(x) 是 f(x) 的原函数. 因式 (1)，φ(x) 也是 g(x) 的原函数. 因此，式 (2) 里的积分路径如果采用：(0,0)→(x,0)→(x,y)，也能得同样结果. 还可通过求偏导数对结果进行验算.）
>


## ☆ §7.4  曲面积分、Gauss 公式及 Stokes 公式

> [!note] 导读
> 曲面积分跟曲线积分一样，有广泛的实际应用，亦属各类考试的热点，宜重点关注（包括本书的各类读者）.
>
> 曲面积分与曲线积分，在理论和方法上几乎完全类似，但曲面积分更复杂. 这里将第一型与第二型曲面积分分开进行讨论.


### 一、第一型曲面积分的计算

计算第一型曲面积分，通常的方法包括：1）利用对称性；2）直接使用公式（包括用直角坐标公式或参数方程公式）；3）化为第一型曲面积分；4）用 Gauss 公式. 这里先讨论 1）和 2），3）和 4）留在后面讨论.


#### a. 利用对称性

> [!abstract] 要点
> 跟第一型曲线积分类似，若积分曲面 $S$ 可以分成对称的两部分：$S=S_1+S_2$，在对称点上被积函数的绝对值相等，则
> $$
> \iint_S f(P)\,\mathrm{d}S =
> \begin{cases}
> 0, & \text{对称点上 } f(P) \text{ 取相反的符号},\\[6pt]
> 2\displaystyle\iint_{S_1} f(P)\,\mathrm{d}S, & \text{对称点上 } f(P) \text{ 的符号相同}.
> \end{cases}
> $$

所谓 $S$ 的两部分 $S_1$ 与 $S_2$ 对称，可以是关于点对称，也可以是关于平面对称.

> [!example] 例 7.4.1
> 设 $f(z)$ 为奇函数，试求积分
> $$
> I=\iint_S f(z)\,\mathrm{d}S,\quad J=\iint_S f^2(z)\,\mathrm{d}S,\quad K=\iint_S yf^2(z)\,\mathrm{d}S,
> $$
> 其中 $S$ 为锥面 $z^2=2xy$ 位于球面 $x^2+y^2+z^2=a^2$ 内的部分.

> [!solution]- 解
> 作例 7.2.17 类似的讨论知 $z^2=2xy$ 是以原点为顶的双叶锥面，对称轴是 $xOy$ 平面上 $1,3$ 象限的分角线（如图 7.4.1）. 我们看到 $S$ 关于 $xOy$ 平面上下对称，在对称点上 $f(z)$ 的大小相等，符号相反，因此积分
> $$
> I=\iint_S f(z)\,\mathrm{d}S=0.
> $$
> 又曲面 $S$ 在 $1,3$ 卦限内的部分，与它在 $7,5$ 卦限内的部分关于原点对称，在对称点上 $yf^2(z)$ 的大小相等、符号相反，所以积分
> $$
> K=\iint_S yf^2(z)\,\mathrm{d}S=0.
> $$
> 除了上、下对称，原点对称之外，$S$ 还关于 $y=x$ 平面（前后）对称. 在对称点上 $f^2(z)$ 大小相等、符号相同. 因此
> $$
> J=8\iint_{S_1} f^2(z)\,\mathrm{d}S,
> $$
> 其中 $S_1$ 表示 $S$ 位于第一卦限内夹于 $y=0$ 与 $y=x$ 之间的部分.


#### b. 利用公式计算第一型曲面积分

### 1）利用直角坐标方程的公式

> [!summary] 要点
> ① 选取适当的坐标平面，例如 $xOy$ 平面，使之便于求曲面 $S$ 的投影区域 $\Delta$.
>
> ② 写出相应的直角坐标方程，例如 $S: z=z(x,y)$, $(x,y)\in\Delta$.
>
> ③ 求出偏导数，例如 $z'_x$, $z'_y$，代入公式计算二重积分：
>
> $$I=\iint_S f(x,y,z)\,dS=\iint_\Delta f(x,y,z(x,y))\sqrt{1+{z'_x}^2+{z'_y}^2}\,dxdy. \tag{A}$$

> [!note] 注意
> 这里的关键是第一步，选好恰当的投影（坐标）平面. 若选取不当会增加计算上的困难.

> [!example] 例7.4.2
> 计算积分 $I=\iint_S z\,dS$，其中 $S$ 是曲面 $x^2+z^2=2az\ (a>0)$ 被曲面 $z=\sqrt{x^2+y^2}$ 所截取的有限部分（如图7.4.2）.

> [!proof]- 解I
> 曲面 $S$ 关于 $yOz$, $zOx$ 两个坐标平面对称，在对称点上被积函数 $f(x,y,z)=z$ 大小相等，符号相同. 因此积分等于 $S$ 在第一卦限里的部分 $S_1$ 上积分的4倍. 在
>
> $$x^2+z^2=2az,\quad z=\sqrt{x^2+y^2} \tag{1}$$
>
> 中消去 $z$，可知 $S_1$ 在 $xOy$ 平面上的投影区域为第一象限 $x,y$ 轴与曲线 $2x^2+y^2=2a\sqrt{x^2+y^2}$ 所围的区域 $\Delta$. 这时曲面方程
>
> $$S: z=a+\sqrt{a^2-x^2}.$$
>
> $$z'_x=-\frac{x}{\sqrt{a^2-x^2}},\quad z'_y=0,\quad \sqrt{1+{z'_x}^2+{z'_y}^2}=\frac{a}{\sqrt{a^2-x^2}}.$$
>
> 因此
>
> $$I=4\iint_\Delta \left(a+\sqrt{a^2-x^2}\right)\cdot\frac{a}{\sqrt{a^2-x^2}}\,dxdy.$$
>
> 引用极坐标，$\Delta=\{(r,\theta)\mid 0\leq\theta\leq\pi/2,\ 0\leq r\leq 2a/(1+\cos^2\theta)\}$，故
>
> $$I=4\int_0^{\pi/2} d\theta\int_0^{2a/(1+\cos^2\theta)} \left(\frac{a^2r}{\sqrt{a^2-r^2\cos^2\theta}}+ar\right)dr = \frac{7}{2}\sqrt{2}\pi a^3.$$

> [!proof]- 解II
> 将 $S_1$ 向 $yOz$ 平面投影，投影区域（从式(1)中消去 $x$，可知）是 $yOz$ 平面（第一象限）夹在
>
> $$2z^2=2az+y^2\ (\text{双曲线})\ \text{与}\ z=2a$$
>
> 之间的部分区域 $\Delta'$. $S_1$ 的方程为 $x=\sqrt{2az-z^2}$. 由此
>
> $$x'_y=0,\quad x'_z=\frac{a-z}{\sqrt{2az-z^2}},\quad \sqrt{1+{x'_y}^2+{x'_z}^2}=\frac{a}{\sqrt{2az-z^2}}.$$
>
> 故
>
> $$I=4\iint_{S_1} z\,dS = 4\iint_{\Delta'} z\cdot\frac{a}{\sqrt{2az-z^2}}\,dydz = 4a\int_a^{2a} dz\int_0^{\sqrt{2z^2-2az}} \frac{z}{\sqrt{2az-z^2}}\,dy$$
>
> $$=4a\int_a^{2a} z\sqrt{\frac{2z-2a}{2a-z}}\,dz \xlongequal{\text{令}\ \frac{z-a}{2a-z}=t^2} \frac{7}{2}\sqrt{2}\pi a^3.$$

> [!remark]
> 两种方法比较，本题宜向 $yOz$ 平面投影，因为所得积分较易计算.

> [!example] 例7.4.3
> 计算积分 $I=\iint_S |z|\,dS$，其中 $S$ 为柱体 $x^2+y^2\leq ax$ 被球体 $x^2+y^2+z^2\leq a^2$ 截取部分的表面 $(a>0)$.

> [!proof]- 解
> 用 $S_1$ 表示 $S$ 在第一卦限的部分，用 $S_{11}$, $S_{12}$ 分别表示 $S_1$ 的柱面和球面部分，则由对称性知
>
> $$I=4\iint_{S_1} z\,dS = 4\iint_{S_{11}} z\,dS + 4\iint_{S_{12}} z\,dS.$$
>
> 球面与柱面的交线方程为
>
> $$\begin{cases}
> x^2+y^2=ax,\\
> x^2+y^2+z^2=a^2,
> \end{cases}$$
>
> 消去 $y$，知 $S_{11}$ 在 $xOz$ 上的投影区域为
>
> $$\Delta_1: 0\leq z\leq\sqrt{a^2-ax},\ 0\leq x\leq a.$$
>
> $S_{11}$ 的方程为 $y=\sqrt{ax-x^2}$，因而 $dS=\sqrt{1+{y'_x}^2+{y'_z}^2}\,dzdx = \frac{a}{2\sqrt{ax-x^2}}\,dzdx$.
>
> $$\iint_{S_{11}} z\,dS = \iint_{\Delta_1} z\cdot\frac{a}{2\sqrt{ax-x^2}}\,dzdx = \int_0^a dx\int_0^{\sqrt{a^2-ax}} \frac{az}{2\sqrt{ax-x^2}}\,dz = \frac{\pi}{8}a^3.$$
>
> $S_{12}$ 在 $xOy$ 平面的投影区域为
>
> $$\Delta_2: 0\leq y\leq\sqrt{ax-x^2},\ 0\leq x\leq a.$$
>
> $S_{12}$ 的方程为 $z=\sqrt{a^2-x^2-y^2}$，从而
>
> $$dS=\sqrt{1+{z'_x}^2+{z'_y}^2}\,dxdy = \frac{a}{\sqrt{a^2-x^2-y^2}}\,dxdy.$$
>
> $$\iint_{S_{12}} z\,dS = \iint_{\Delta_2} \sqrt{a^2-x^2-y^2}\cdot\frac{a}{\sqrt{a^2-x^2-y^2}}\,dxdy$$
>
> $$= a\iint_{\Delta_2} dxdy = a\cdot\frac{\pi}{2}\left(\frac{a}{2}\right)^2 = \frac{\pi}{8}a^3.$$
>
> 总之  $I=4\cdot\frac{\pi}{8}a^3+4\cdot\frac{\pi}{8}a^3=\pi a^3$.

> [!exercise] *练习
> 证明：对于连续函数 $f(x)$，有
>
> $$\iint_{x^2+y^2+z^2=1} f(z)\,dS = 2\pi\int_{-1}^1 f(t)\,dt.\quad\text{(清华大学)}$$

> [!hint]- 提示
> $$\iint_{x^2+y^2+z^2=1,\,z\geq 0} f(z)\,dS = \iint_{x^2+y^2\leq 1} f\!\left(\sqrt{1-(x^2+y^2)}\right)\cdot\frac{1}{\sqrt{1-(x^2+y^2)}}\,dxdy$$
>
> $$= -2\pi\int_0^1 f\!\left(\sqrt{1-r^2}\right)d\sqrt{1-r^2}$$
>
> $$= 2\pi\int_0^1 f(t)\,dt.$$

> [!example] 例7.4.4
> 计算锥面 $z=\sqrt{2xy}\ (x\geq 0,\ y\geq 0)$ 位于球面 $x^2+y^2+z^2=a^2$ 内部分的面积 $S$.

> [!hint]- 提示
> $$S=\iint_S dS = \frac{\sqrt{2}}{2}\iint_{x+y\leq a,\,x\geq 0,\,y\geq 0} \left(\sqrt{\frac{y}{x}}+\sqrt{\frac{x}{y}}\right) dxdy$$
>
> $$= \sqrt{2}\iint_{x+y\leq a,\,x\geq 0,\,y\geq 0} \sqrt{\frac{x}{y}}\,dxdy = \frac{\sqrt{2}}{4}\pi a^2.$$

向坐标平面投影不总是方便的，必要时需作新的坐标系，向新坐标平面投影.

> [!example] ☆例7.4.5
> 计算曲面积分 $F(t)=\iint_{x+y+z=t} f(x,y,z)\,dS$，其中
>
> $$f(x,y,z)=\begin{cases}
> 1-x^2-y^2-z^2, & x^2+y^2+z^2\leq 1,\\
> 0, & x^2+y^2+z^2>1.
> \end{cases}$$
>
> （上海交通大学）

> [!proof]- 解
> 根据 $f(x,y,z)$ 的定义，
>
> $$F(t)=\iint_S (1-x^2-y^2-z^2)\,dS,$$
>
> 其中 $S$ 为 $x+y+z=t$ 被 $x^2+y^2+z^2\leq 1$ 截取的部分. 作坐标旋转，令 $w=(x+y+z)/\sqrt{3}$，并在 $w=0$ 的平面上任意取定两正交轴，使 $Ouvw$ 仍为右手系，并使 $x^2+y^2+z^2=u^2+v^2+w^2$. 于是 $F(t)=\iint_{S'} (1-u^2-v^2-w^2)\,dS$，其中 $S'$ 为 $w=t/\sqrt{3}$ 被 $u^2+v^2+w^2\leq 1$ 截下的部分. 它在 $uOv$ 平面上的投影区域为 $\Delta: u^2+v^2\leq 1-t^2/3\ (|t|\leq\sqrt{3})$. 故
>
> $$F(t)=\iint_\Delta \left(1-u^2-v^2-\frac{t^2}{3}\right)dudv = \int_0^{2\pi} d\theta\int_0^{\sqrt{1-t^2/3}} \left(1-\frac{t^2}{3}-r^2\right)r\,dr$$
>
> $$= \frac{\pi}{18}(3-t^2)^2\quad(|t|\leq\sqrt{3}).$$
>
> 当 $|t|>\sqrt{3}$ 时，$F(t)\equiv 0$（此时 $f(x,y,z)\equiv 0$）.

### 2）利用参数方程的公式

> [!summary] 要点
> 若积曲面 $S$ 可用参数方程给出：
>
> $$x=x(u,v),\ y=y(u,v),\ z=z(u,v),\quad (u,v)\in\Delta$$
>
> （有连续偏导数），则我们可以求出
>
> $$A=\frac{\partial(y,z)}{\partial(u,v)},\quad B=\frac{\partial(z,x)}{\partial(u,v)},\quad C=\frac{\partial(x,y)}{\partial(u,v)}$$
>
> 或
>
> $$E={x'_u}^2+{y'_u}^2+{z'_u}^2,\quad G={x'_v}^2+{y'_v}^2+{z'_v}^2,\quad F=x'_u x'_v+y'_u y'_v+z'_u z'_v,$$
>
> 把曲面积分化为二重积分：
>
> $$\iint_S f(x,y,z)\,dS = \iint_\Delta f(x(u,v),y(u,v),z(u,v))\sqrt{A^2+B^2+C^2}\,dudv$$
>
> 或
>
> $$\iint_S f(x,y,z)\,dS = \iint_\Delta f(x(u,v),y(u,v),z(u,v))\sqrt{EG-F^2}\,dudv.$$
>
> 特别，若 $S$ 为球面：$x=R\sin\varphi\cos\theta$, $y=R\sin\varphi\sin\theta$, $z=R\cos\varphi$，则
>
> $$dS=\sqrt{EG-F^2}\,d\varphi d\theta = R^2\sin\varphi\,d\varphi d\theta.$$

> [!example] 例7.4.6
> 计算曲面积分 $I=\iint_\Sigma \frac{dS}{\sqrt{x^2+y^2+(z+a)^2}}$，其中 $\Sigma$ 为以原点为中心，$a\ (a>0)$ 为半径的上半球面.（南开大学）

> [!proof]- 解
> 上半球面
>
> $$\Sigma: x=a\sin\varphi\cos\theta,\ y=a\sin\varphi\sin\theta,\ z=a\cos\varphi\quad(0\leq\varphi\leq\pi/2,\ 0\leq\theta\leq 2\pi).$$
>
> 因此
>
> $$I=\iint_\Sigma \frac{dS}{\sqrt{x^2+y^2+z^2+2az+a^2}} = \iint_{0\leq\varphi\leq\pi/2,\,0\leq\theta\leq 2\pi} \frac{a^2\sin\varphi\,d\varphi d\theta}{\sqrt{a^2+2a^2\cos\varphi+a^2}}$$
>
> $$= 2\pi a\int_0^{\pi/2} \frac{\sin\varphi}{\sqrt{2+2\cos\varphi}}\,d\varphi = -2\pi a\sqrt{2+2\cos\varphi}\Big|_0^{\pi/2} = 2\pi a(2-\sqrt{2}).$$

> [!exercise] *练习
> 已知 $S=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2+z^2=1\}$，试用（第二型 Euler 积分）$\Gamma(p)=\int_0^{+\infty} x^{p-1}e^{-x}\,dx$ 表示如下的第一类曲面积分：$I=\iint_S (x^2+y^2)^\beta\,dS\ (\beta>-1)$.（中国科学技术大学）

> [!hint]- 提示
> 利用对称性（$S_1$ 表示 $S$ 在第一卦限里的部分），
>
> $$I=\iint_S (x^2+y^2)^\beta\,dS = 8\iint_{S_1} (x^2+y^2)^\beta\,dS.$$
>
> （利用球坐标 $x=\sin\varphi\cos\theta$, $y=\sin\varphi\sin\theta$, $z=\cos\varphi$，则 $x^2+y^2=\sin^2\varphi$, $dS=\sin\varphi\,d\theta d\varphi$，这里半径 $R=1$.) 故
>
> $$I=8\int_0^{\pi/2} d\theta\int_0^{\pi/2} \sin^{2\beta}\varphi\,\sin\varphi\,d\varphi = 4\pi\int_0^{\pi/2} \sin^{2\beta+1}\varphi\,d\varphi. \tag{1}$$

> [!hint]- 再提示
> （复习 §7.1 第七部分：Euler 积分.）已知：
>
> $$\Gamma\!\left(\frac{1}{2}\right)=\sqrt{\pi} \tag{2}$$
>
> 以及  $B(p,q)=2\int_0^{\pi/2} \cos^{2p-1}\varphi\,\sin^{2q-1}\varphi\,d\varphi = \frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}, \tag{3}$
>
> 利用公式(3)计算式(1)，注意：这里 $2p-1=0$, $2q-1=2\beta+1$（亦即 $p=1/2$, $q=\beta+1$, $p+q=\beta+3/2$），于是
>
> $$I=4\pi\int_0^{\pi/2} \sin^{2\beta+1}\varphi\,d\varphi = 2\pi\cdot B\!\left(\frac{1}{2},\beta+1\right)$$
>
> $$\xlongequal{\text{式}(3)} 2\pi\,\frac{\Gamma(1/2)\Gamma(\beta+1)}{\Gamma(\beta+3/2)} \xlongequal{\text{式}(2)} 2\pi\sqrt{\pi}\,\frac{\Gamma(\beta+1)}{\Gamma(\beta+3/2)}.$$

> [!example] ☆例7.4.7
> 设 $f(x)$ 连续，证明 Poisson 公式：
>
> $$\int_0^{2\pi} d\theta\int_0^\pi f(a\sin\varphi\cos\theta+b\sin\varphi\sin\theta+c\cos\varphi)\,\sin\varphi\,d\varphi$$
>
> $$= 2\pi\int_{-1}^1 f(kz)\,dz\quad(k=\sqrt{a^2+b^2+c^2}). \tag{1}$$
>
> （南开大学，四川大学，延边大学）.

> [!proof]- 解
> 式(1)左端积分，即为单位球面 $S: \xi^2+\eta^2+\zeta^2=1$ 上的曲面积分：
>
> $$I=\iint_S f(a\xi+b\eta+c\zeta)\,dS.$$
>
> 要证明式(1)，应将 $a\xi+b\eta+c\zeta$ 变成 $\sqrt{a^2+b^2+c^2}\,z$. 为此令 $z=(a\xi+b\eta+c\zeta)/\sqrt{a^2+b^2+c^2}$，作坐标旋转. 在 $a\xi+b\eta+c\zeta=0$ 的平面上任取正交轴 $Ox$, $Oy$，使 $Oxyz$ 成右手系，这时 $\xi^2+\eta^2+\zeta^2=1$ 变成 $x^2+y^2+z^2=1$. 或将 $S: x^2+y^2=1-z^2$ 写为柱面坐标，即
>
> $$x=\sqrt{1-z^2}\cos\alpha,\ y=\sqrt{1-z^2}\sin\alpha,\ z=z,$$
>
> $$(\alpha,z)\in\Delta=\{(\alpha,z)\mid 0\leq\alpha\leq 2\pi,\ -1\leq z\leq 1\}.$$
>
> 这时
>
> $$E={x'_\alpha}^2+{y'_\alpha}^2+{z'_\alpha}^2=1-z^2,\quad G={x'_z}^2+{y'_z}^2+{z'_z}^2=\frac{1}{1-z^2},\quad F=x'_\alpha x'_z+y'_\alpha y'_z+z'_\alpha z'_z=0,$$
>
> $$dS=\sqrt{EG-F^2}\,d\alpha dz = \sqrt{\frac{1}{1-z^2}\cdot(1-z^2)-0}\,d\alpha dz = d\alpha dz.$$
>
> 故
>
> $$\int_0^{2\pi} d\theta\int_0^\pi f(a\sin\varphi\cos\theta+b\sin\varphi\sin\theta+c\cos\varphi)\,\sin\varphi\,d\varphi$$
>
> $$= \iint_S f\!\left(\sqrt{a^2+b^2+c^2}\,z\right) dS = \iint_\Delta f\!\left(z\sqrt{a^2+b^2+c^2}\right)\sqrt{EG-F^2}\,d\alpha dz$$
>
> $$= \int_0^{2\pi} d\alpha\int_{-1}^1 f\!\left(z\sqrt{a^2+b^2+c^2}\right) dz = 2\pi\int_{-1}^1 f(kz)\,dz\quad(k=\sqrt{a^2+b^2+c^2}).$$

> [!example] 例7.4.8
> 设 $f(x)$ 在 $|x|\leq\sqrt{a^2+b^2+c^2}\ (a^2+b^2+c^2\neq 0)$ 上连续，证明：
>
> $$\iiint_V f\!\left(\frac{ax+by+cz}{\sqrt{x^2+y^2+z^2}}\right) dxdydz = \frac{2\pi}{3}\int_{-1}^1 f\!\left(u\sqrt{a^2+b^2+c^2}\right) du,$$
>
> 其中 $V$ 为球域 $x^2+y^2+z^2\leq 1$.（广西大学）

> [!hint]- 提示
> 等式左端引用球坐标变换化为累次积分，然后用上例结果.

> [!example] 例7.4.9
> 试证：
>
> $$\left|\iint_S f(mx+ny+pz)\,dS\right| \leq 2\pi M,$$
>
> 其中 $m^2+n^2+p^2=1$，$m,n,p$ 为常数. $f(t)$ 在 $|t|\leq 1$ 时为连续可微函数，$f(-1)=f(1)=0$，$M=\max_{-1\leq t\leq 1}|f'(t)|$，$S$ 表示半径为1，中心在原点的球面.（东北大学）

> [!hint]- 提示
> 应用 Poisson 公式，并注意
>
> $$\int_{-1}^1 f(u)\,du = uf(u)\Big|_{-1}^1 - \int_{-1}^1 uf'(u)\,du = -\int_{-1}^1 uf'(u)\,du$$
>
> 从而
>
> $$\left|\int_{-1}^1 f(u)\,du\right| \leq M.$$

> [!example] 例7.4.10
> 试求 $x^2+y^2+z^2=R^2\ (R>0)$ 在锥面 $\sqrt{x^2+y^2}=z\tan\alpha\ (0<\alpha<\pi/2)$ 内的面积.

> [!hint]- 提示
> 用球面坐标，$dS=\sqrt{EG-F^2}\,d\varphi d\theta = R^2\sin\varphi\,d\varphi d\theta$，
>
> $$S=\iint_S dS = \int_0^{2\pi} d\theta\int_0^\alpha R^2\sin\varphi\,d\varphi = 2\pi R^2(1-\cos\alpha).$$

> [!exercise] ☆练习
> 设 $\Sigma$ 是球面：$x^2+y^2+z^2=1$，$A$ 是 $\Sigma$ 内的一点，$A$ 到原点的距离为 $q\ (0<q<1)$. $\rho$ 表示点 $A$ 到动点 $P(x,y,z)\in\Sigma$（球面）的距离，求 $I=\iint_\Sigma (dS/\rho^2)$.（华中科技大学）

> [!hint]- 提示
> 利用三角余弦公式：$\rho^2 = r^2+q^2-2rq\cos\varphi$，注意：$dS=r^2\sin\varphi\,d\theta d\varphi$.

> [!hint]- 再提示
> 取 $OA$ 方向，作 $OZ$ 轴. 采用球坐标（$r=1$），$\varphi=\angle AOP$.
> （如图7.4.3）在 $\triangle AOP$ 中应用余弦定理：$\rho^2 = 1+q^2-2q\cos\varphi$，故
>
> $$I=\iint_\Sigma \frac{dS}{\rho^2} = \int_0^{2\pi} d\theta\int_0^\pi \frac{\sin\varphi}{1+q^2-2q\cos\varphi}\,d\varphi$$
>
> $$= 2\pi\cdot\frac{1}{2q}\int_0^\pi \frac{1}{1+q^2-2q\cos\varphi}\,d(1+q^2-2q\cos\varphi)$$
>
> $$= \frac{\pi}{q}\int_{(1-q)^2}^{(1+q)^2} \frac{du}{u} = \frac{2\pi}{q}\ln\!\left(\frac{1+q}{1-q}\right).$$


### 二、第二型曲面积分的计算

计算第二型曲面积分通常的方法有：1）利用对称性；2）利用公式化为二重积分；3）利用 Gauss 公式化为三重积分。这里先讨论 1）和 2），把 3）放在下一段讨论。

在计算第二型曲面积分时，至关重要的是符号规则。就积分 $\iint_{S^+} f(x, y, z) \, dxdy$ 而言，当曲面 $S^+$ 侧上动点的法线方向与 $z$ 轴正向成锐角时，面积元素 $dS$ 在 $xOy$ 平面上的投影 $dxdy$ 算作正；成钝角时算作负。对于积分 $\iint_{S^+} f(x, y, z) \, dydz$，$\iint_{S^+} f(x, y, z) \, dzdx$，有类似的规定：$dydz$，$dzdx$ 的符号分别按法线与 $x$ 轴正向、$y$ 轴正向的夹角来确定。


#### a．利用对称性

> [!note] 要点
> 以积分 $\iint_{S^+} f(x, y, z) \, dxdy$ 为例，若曲面 $S$ 可分成对称的两部分 $S_1$，$S_2$（$S = S_1 + S_2$），在对称点上 $|f|$ 的值相等，则
> $$
> \iint_{S^+} f \, dxdy = \iint_{S_1^+ + S_2^+} f \, dxdy =
> \begin{cases}
> 0, & \text{对称点上 } f\,dxdy \text{ 符号相反},\\[4pt]
> 2\displaystyle\iint_{S_1^+} f \, dxdy, & \text{对称点上 } f\,dxdy \text{ 的符号相同}.
> \end{cases}
> $$
> 
> 对于积分 $\iint_{S^+} f \, dydz$，$\iint_{S^+} f \, dzdx$，有类似的结论。

> [!example] 例7.4.11
> 设 $f(t)$ 为奇函数，$S^+$ 为 $|x| + |y| + |z| = 1$ 的外侧，试利用对称性求出或简化下列积分：
> $$
> \begin{aligned}
> I &= \iint_{S^+} dxdy + dydz + dzdx,\\
> J &= \iint_{S^+} f^2(z) \, dxdy,\\
> K &= \iint_{S^+} x f^2(z) \, dxdy,\\
> L &= \iint_{S^+} f(z) \, dxdy,\\
> M &= \iint_{S^+} (x + 2y + 3z) f(x + y + z) \, dxdy.
> \end{aligned}
> $$

> [!solution]- 解
> $S$ 关于 $xOy$ 平面上、下对称（如图7.4.4），$z > 0$ 部分外法线方向与 $z$ 轴成锐角，$z < 0$ 部分外法线方向与 $z$ 轴成钝角。故
> $$
> dxdy,\; f^2(z) \, dxdy,\; x f^2(z) \, dxdy
> $$
> 都在上、下对称点上异号，因此它们的积分为 $0$。
> 
> 同理，由 $S$ 关于 $yOz$，$zOx$ 平面的对称性，可知
> $$
> \iint_{S^+} dydz = \iint_{S^+} dzdx = 0.
> $$
> 所以，$I = J = K = 0$。
> 
> 由于 $S$ 对三个坐标平面都有对称性，对称点上 $f(z) \, dxdy$ 的大小相等符号相同，故
> $$
> L = \iint_{S^+} f(z) \, dxdy = 8\iint_{S_1^+} f(z) \, dxdy,
> $$
> 其中 $S_1^+$ 是 $S^+$ 在第一卦限的部分。
> 
> 最后由于 $S$ 还关于原点对称，且 $x$，$y$，$z$ 同时反号时 $(x + 2y + 3z)f(x + y + z)$ 不变，而 $dxdy$ 在对称点上反号，故积分 $M = 0$。


#### b．用公式化第二型曲面积分为二重积分

## 1）直角坐标公式

> [!important] 要点
> 以积分 $\iint_{S^+} f(x, y, z) \,dxdy$ 为例，计算方法是：1）求出 $S$ 在 $xOy$ 平面上的投影区域 $\Delta$。2）写出 $S$ 的方程 $z = z(x, y)$。3）将积分化为二重积分
> $$
> \iint_{S^+} f(x, y, z) \,dxdy = \pm \iint_{\Delta} f(x, y, z(x, y)) \,dxdy. \quad \text{（A）}
> $$
> 若 $S^+$ 的法线与 $z$ 轴成锐角，取“$+$”号；若成钝角，则取负号；若一部分区域上成锐角，另一部分上成钝角，则应分区域积分。对 $\iint_{S^+} f \,dydz$，$\iint_{S^+} f \,dzdx$ 有类似公式和法则。

## 2）参数方程的情况

若 $S$ 可用参数方程表示：
$$
x = x(u, v),\quad y = y(u, v),\quad z = z(u, v),\quad (u, v) \in \Delta.
$$
则应先计算 Jacobi 行列式：
$$
A = \frac{\partial(y, z)}{\partial(u, v)},\quad B = \frac{\partial(z, x)}{\partial(u, v)},\quad C = \frac{\partial(x, y)}{\partial(u, v)}.
$$

然后代入公式：
$$
\begin{cases}
\displaystyle\iint_{S^+} P(x, y, z) \,dydz = \pm \iint_{\Delta} P(x(u, v), y(u, v), z(u, v)) A \,dudv, \\[8pt]
\displaystyle\iint_{S^+} Q(x, y, z) \,dzdx = \pm \iint_{\Delta} Q(x(u, v), y(u, v), z(u, v)) B \,dudv, \\[8pt]
\displaystyle\iint_{S^+} R(x, y, z) \,dxdy = \pm \iint_{\Delta} R(x(u, v), y(u, v), z(u, v)) C \,dudv.
\end{cases} \quad \text{（B）}
$$

其中“$\pm$”这样来取定：当 $S^+$ 的法向量 $\boldsymbol{n}$ 与切向量 $\boldsymbol{\tau}_u = (x'_u, y'_u, z'_u)$，$\boldsymbol{\tau}_v = (x'_v, y'_v, z'_v)$ 成右手系时取“$+$”，成左手系时取“$-$”。这里假设 $x(u, v)$，$y(u, v)$，$z(u, v)$ 有连续偏导数，矩阵
$$
\begin{pmatrix}
x'_u & y'_u & z'_u \\
x'_v & y'_v & z'_v
\end{pmatrix}
$$
的秩为 $2$。$P$，$Q$，$R$ 连续。

> [!example] 例7.4.12
> 设 $S^+$ 为
> $$
> z - c = \sqrt{R^2 - (x - a)^2 - (y - b)^2} \quad \text{（1）}
> $$
> 的上侧，试计算积分
> $$
> I = \iint_{S^+} x^2 \,dydz + y^2 \,dzdx + (x - a)yz \,dxdy. \quad \text{（2）}
> $$

> [!solution]- 解I
> （利用对称性与公式（A）。）这里 $S^+$ 是以点 $O'(a, b, c)$ 为中心，$R$ 为半径的上半球面的外侧（如图7.4.5）。$S$ 关于平面 $x = a$ 前后对称，式（2）右端第三项 $(x - a)yz \,dxdy$ 在对称点上大小相等符号相反，故此项积分
> $$
> \iint_{S^+} (x - a)yz \,dxdy = 0. \quad \text{（3）}
> $$
>
> 注意 $x^2$ 在此半球面上，并非前后对称，但
> $$
> x^2 = (x - a)^2 + 2a(x - a) + a^2. \quad \text{（4）}
> $$
>
> 由前后对称性，可知
> $$
> \iint_{S^+} \bigl[(x - a)^2 + a^2\bigr] \,dydz = 0. \quad \text{（5）}
> $$
>
> 因此
> $$
> \iint_{S^+} x^2 \,dydz = \iint_{S^+} 2a(x - a) \,dydz = 8a \iint_{S_1^+} (x - a) \,dydz, \quad \text{（6）}
> $$
> 其中 $S_1^+$ 是 $S^+$ 在 $x \ge a$，$y \ge b$ 的部分。由（1），$S_1$ 的方程可写作
> $$
> x - a = \sqrt{R^2 - (y - b)^2 - (z - c)^2}.
> $$
> $S_1^+$ 在 $yOz$ 平面上的投影区域为 $\Delta$：$(y - b)^2 + (z - c)^2 \le R^2$，$z \ge c$，$y \ge b$。故
> $$
> \iint_{S^+} x^2 \,dydz = 8a \iint_{S_1^+} (x - a) \,dydz = 8a \iint_{\Delta} \sqrt{R^2 - (y - b)^2 - (z - c)^2} \,dydz.
> $$
>
> （因为 $S_1^+$ 的法线方向与 $x$ 轴成锐角，所以取“$+$”。）引用极坐标 $y = r\cos\theta + b$，$z = r\sin\theta + c$，则上式为
> $$
> \iint_{S^+} x^2 \,dydz = 8a \int_0^{\pi/2} d\theta \int_0^R \sqrt{R^2 - r^2} \, r \,dr = \frac{4}{3}a\pi R^3.
> $$
>
> 同理，$\iint_{S^+} y^2 \,dzdx = \frac{4}{3}b\pi R^3$。总之，积分 $I = \frac{4}{3}(a + b)\pi R^3$。

> [!solution]- 解II
> （用参数方程的公式（B）。）
> $$
> S\colon\; x = a + R\sin\varphi\cos\theta,\quad y = b + R\sin\varphi\sin\theta,\quad z = c + R\cos\varphi \quad (0 \le \theta \le 2\pi,\; 0 \le \varphi \le \pi/2).
> $$
>
> 这时
> $$
> A = \frac{\partial(y, z)}{\partial(\varphi, \theta)} = \begin{vmatrix}
> R\cos\varphi\sin\theta & R\sin\varphi\cos\theta \\
> -R\sin\varphi & 0
> \end{vmatrix} = R^2 \sin^2\varphi \cos\theta.
> $$
>
> $\boldsymbol{n}$，$\boldsymbol{\tau}_\varphi$，$\boldsymbol{\tau}_\theta$ 成右手系[^1]（如图7.4.6），公式（B）中取“$+$”号，因此
> $$
> \begin{aligned}
> \iint_{S^+} x^2 \,dydz
> &= \iint_{\substack{0 \le \varphi \le \pi/2 \\ 0 \le \theta \le 2\pi}} (a + R\sin\varphi\cos\theta)^2 \, R^2 \sin^2\varphi \cos\theta \, d\theta d\varphi \\
> &= 2aR^3 \int_0^{\pi/2} \sin^3\varphi \, d\varphi \int_0^{2\pi} \cos^2\theta \, d\theta = \frac{4}{3}a\pi R^3.
> \end{aligned}
> $$
>
> 类似可得
> $$
> \iint_{S^+} y^2 \,dzdx = \frac{4}{3}b\pi R^3.
> $$
>
> 故
> $$
> I = \frac{4}{3}(a + b)\pi R^3.
> $$

> [!solution]- 解III
> 对 $x$，$y$ 用极坐标，则
> $$
> x = a + r\cos\theta,\quad y = b + r\sin\theta,\quad 0 \le \theta \le 2\pi,\; 0 \le r \le R.
> $$
> 代入式（1）得 $z = c + \sqrt{R^2 - r^2}$。此时，$A = \dfrac{\partial(y, z)}{\partial(r, \theta)} = \dfrac{r^2 \cos\theta}{\sqrt{R^2 - r^2}}$，故
> $$
> \iint_{S^+} x^2 \,dydz = \int_0^{2\pi} d\theta \int_0^R (a + r\cos\theta)^2 \cdot \frac{r^2 \cos\theta}{\sqrt{R^2 - r^2}} \, dr = \frac{4}{3}a\pi R^3.
> $$
>
> 从而
> $$
> I = \frac{4}{3}(a + b)\pi R^3.
> $$

[^1]: $\boldsymbol{n}$，$\boldsymbol{\tau}_\varphi$，$\boldsymbol{\tau}_\theta$ 成右手系


#### c．利用两种曲面积分的关系解题

> [!note] 要点
> 两种曲面积分有关系
> $$
> \iint_{S^+} P\,dydz + Q\,dzdx + R\,dxdy = \iint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma)\,dS,
> $$
> 其中 $\cos\alpha$，$\cos\beta$，$\cos\gamma$ 为 $S^+$ 的法线的方向余弦。利用此关系可将两种曲面积分相互转化。特别是用它可将第一型曲面积分化为第二型求解。

> [!example] 例7.4.13
> 求 $\iint_S z^2\cos\gamma\,dS$，其中 $S$ 为上半球面 $x^2 + y^2 + z^2 = 1$（$z \ge 0$），$\gamma$ 是球面外法线方向与 $z$ 轴的夹角。

> [!proof]- 解
> 将第一型曲面积分化为第二型，$S^+$ 表示上半球面的外侧，这时法线与 $z$ 轴成锐角，元素投影为正，故
> $$
> \iint_S z^2\cos\gamma\,dS = \iint_{S^+} z^2\,dxdy = \iint_{x^2+y^2\le 1} (1 - x^2 - y^2)\,dxdy
> $$
> $$
> = \int_0^{2\pi} d\theta \int_0^1 (1 - r^2)r\,dr = \frac{\pi}{2}.
> $$


### 三、Gauss 公式

Gauss 公式在 $\mathbb{R}^3$ 中给出了空间区域 $V$ 上的三重积分与边界上的曲面积分的关系。

> [!theorem] 定理1（Gauss 公式）
> 设
> 1）$V$ 为 $\mathbb{R}^3$ 内有界闭区域（可以为多连通）；
> 2）$V$ 的边界是光滑或分片光滑的曲面 $S$；
> 3）$P(x, y, z)$，$Q(x, y, z)$，$R(x, y, z)$ 在 $V$ 内直至边界 $S$ 上连续且有连续偏导数，
> 则
> $$
> \oiint_{S_{\text{外}}} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \iiint_V \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) dx\,dy\,dz，
> $$
> 或
> $$
> \oiint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma)\,dS = \iiint_V \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) dx\,dy\,dz，
> $$
> 其中 $S_{\text{外}}$ 表示曲面 $S$ 的外侧（多连通时，洞壁上 $V$ 的外法线自然是指向洞内），$\cos\alpha$，$\cos\beta$，$\cos\gamma$ 是 $S$ 外法线的方向余弦。
> $$
> \begin{aligned}
> V = \iiint_V dx\,dy\,dz &= \oiint_{S_{\text{外}}} x\,dy\,dz = \oiint_{S_{\text{外}}} y\,dz\,dx = \oiint_{S_{\text{外}}} z\,dx\,dy \\
> &= \frac{1}{3} \oiint_{S_{\text{外}}} (x\,dy\,dz + y\,dz\,dx + z\,dx\,dy) = \frac{1}{3} \oiint_S (x\cos\alpha + y\cos\beta + z\cos\gamma)\,dS.
> \end{aligned}
> $$

Gauss公式常用于计算封闭曲面上的曲面积分，有时宁可补一块平面，把开口曲面变成封闭曲面使用Gauss公式。另外，利用Gauss公式还可由函数的某些积分性质导出函数的微分性质。


#### a. 利用Gauss公式计算曲面积分

## 1) 利用Gauss公式计算第二型曲面积分

利用Gauss公式将曲面积分化为三重积分，由于求导，被积函数常能简化。也省得逐块地计算积分。

> [!example] ☆例7.4.14
> 计算曲面积分
> $$I = \iint_{S+} (x+y-z)\,dydz + [2y+\sin(z+x)]\,dzdx + (3z+e^{x+y})\,dxdy,$$
> 其中 $S+$ 为曲面 $|x-y+z| + |y-z+x| + |z-x+y| = 1$ 的外表面。（西安电子科技大学，延边大学，武汉大学）

> [!proof]- 解
> 利用Gauss公式，$I = \iiint_V (1+2+3)\,dxdydz$，其中 $V$ 为 $S$ 所包围的区域：
> $$|x-y+z| + |y-z+x| + |z-x+y| \leq 1.$$
> 作旋转变换：$u=x-y+z$，$v=y-z+x$，$w=z-x+y$，这时 $S$ 变成 $|u|+|v|+|w|=1$。
> $V$ 是对称的八面体，它在 $uvw$ 的第一卦限的部分是 $u+v+w=1$ 及坐标平面 $u=0$，$v=0$，$w=0$ 所围的区域。
>
> $$J = \frac{\partial(x,y,z)}{\partial(u,v,w)} = 1 \Big/ \frac{\partial(u,v,w)}{\partial(x,y,z)} = 1 \Big/ \begin{vmatrix} 1 & -1 & 1 \\ 1 & 1 & -1 \\ -1 & 1 & 1 \end{vmatrix} = \frac{1}{4}.$$
>
> 因此
> $$I = 6 \iiint_{|u|+|v|+|w|\leq 1} \frac{1}{4}\,dudvdw = 6\cdot\frac14\cdot 8\cdot\frac13\cdot\frac12\cdot 1 = 2.$$
> （补一块平面的方法。）

> [!example] \*☆例7.4.15
> 计算曲面积分
> $$I = \iint_{S+} \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}},$$
> 其中 $S+$：$1-\frac z7 = \frac{(x-2)^2}{25}+\frac{(y-1)^2}{16}$（$z\geq 0$）的上侧。（西北大学）

> [!proof]- 解
> 如图7.4.7，用 $\Gamma$ 表示以原点为中心，$r$ 为半径的上半球面，$\Gamma_{\text{内}}$ 表示 $\Gamma$ 的内侧，取 $r$ 充分小使 $\Gamma$ 在 $S$ 之内部。记 $\Sigma$ 为 $z=0$ 平面上 $x^2+y^2\geq r^2$，$\frac{(x-2)^2}{25}+\frac{(y-1)^2}{16}\leq 1$ 的部分，$\Sigma_{\text{下}}$ 表示 $\Sigma$ 的下侧；$V$ 表示 $S$ 与 $\Sigma$ 所围的区域，则原积分
>
> $$\begin{aligned}
> I &= \iint_{S+} \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}} \\
> &= \left( \iint_{S+ + \Gamma_{\text{内}} + \Sigma_{\text{下}}} - \iint_{\Sigma_{\text{下}}} - \iint_{\Gamma_{\text{内}}} \right) \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}} \\
> &= \iiint_V 0\,dxdydz - \iint_{\Sigma_{\text{下}}} \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}} + \iint_{\Gamma_{\text{外}}} \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}}.
> \end{aligned}$$
>
> $\Sigma$ 上的积分为 $0$，因为 $\Sigma$ 在 $yOz$ 及 $zOx$ 平面的投影面积为零，且 $\Sigma$ 上 $z=0$。$\Gamma_{\text{外}}$ 表示半球面 $\Gamma$ 的外侧。最后我们得到
>
> $$I = \iint_{\Gamma_{\text{外}}} \frac{x\,dydz+y\,dzdx+z\,dxdy}{\sqrt{(x^2+y^2+z^2)^3}} = \frac{1}{r^3} \iint_{\Gamma_{\text{外}}} (x\,dydz+y\,dzdx+z\,dxdy).$$
>
> 记 $xOy$ 平面上 $x^2+y^2\leq r^2$ 的部分下侧为 $\sigma_{\text{下}}$，则 $\iint_{\sigma_{\text{下}}} (x\,dydz+y\,dzdx+z\,dxdy)=0$。故
>
> $$\begin{aligned}
> I &= \frac{1}{r^3} \iint_{\Gamma_{\text{外}}+\sigma_{\text{下}}} (x\,dydz+y\,dzdx+z\,dxdy) \\
> &= \frac{1}{r^3} \iiint_{x^2+y^2+z^2\leq r^2,\ z\geq 0} 3\,dxdydz \\
> &= \frac{1}{r^3}\cdot 3\cdot\frac23\pi r^3 = 2\pi.
> \end{aligned}$$

> [!exercise] 练习
> 设 $a,b,c$ 都是正数，计算曲面积分
> $$I = \iint_S x^3\,dydz + y^3\,dzdx + z^3\,dxdy,$$
> 其中 $S$ 是上半椭球面 $\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$，$z\geq 0$，方向朝上。（中国科学技术大学）

> [!hint]- 提示
> （底部）补一块，再用Gauss公式（补块上的积分为零）。

> [!proof]- 解
> $I = 3 \iiint_V (x^2+y^2+z^2)\,dV$，$V$ 是上半椭球。引入广义球坐标：
> $$x = ar\sin\varphi\cos\theta,\quad y = br\sin\varphi\sin\theta,\quad z = cr\cos\varphi,\quad J = abc\, r^2\sin\varphi.$$
>
> $$\begin{aligned}
> I &= 3abc\Big( a^2\int_0^1 r^4dr\int_0^{2\pi}\cos^2\theta\,d\theta\int_0^{\pi/2}\sin^3\varphi\,d\varphi \\
> &\quad + b^2\int_0^1 r^4dr\int_0^{2\pi}\sin^2\theta\,d\theta\int_0^{\pi/2}\sin^3\varphi\,d\varphi \\
> &\quad + c^2\int_0^1 r^4dr\int_0^{2\pi}d\theta\int_0^{\pi/2}\cos^2\varphi\sin\varphi\,d\varphi \Big),
> \end{aligned}$$
> 其中 $\int_0^{\pi/2}\cos^2\theta\,d\theta = \int_0^{\pi/2}\sin^2\theta\,d\theta = \frac{\pi}{4}$，$\int_0^{\pi/2}\sin^3\varphi\,d\varphi = \frac23$，$\int_0^{\pi/2}\cos^2\varphi\sin\varphi\,d\varphi = \frac13$。代入得
> $$I = \frac{2\pi}{5}abc(a^2+b^2+c^2).$$

> [!proof]- 解II
> $I = \frac32 \iiint_W (x^2+y^2+z^2)\,dV$（$W$ 表示整个椭球体）。
> 作相似变换 $x=a\xi$，$y=b\eta$，$z=c\zeta$，椭球 $W$ 变为单位球 $Q$，此时 $J=abc$。故
> $$I = \frac32 abc \iiint_Q (a^2\xi^2+b^2\eta^2+c^2\zeta^2)\,d\xi d\eta d\zeta. \tag{1}$$
> 注意其中
> $$\begin{aligned}
> \iiint_Q \xi^2\,d\xi d\eta d\zeta &= \iiint_Q \eta^2\,d\xi d\eta d\zeta = \iiint_Q \zeta^2\,d\xi d\eta d\zeta \\
> &= \frac13 \iiint_Q (\xi^2+\eta^2+\zeta^2)\,d\xi d\eta d\zeta \\
> &= \frac13\int_0^1 r^4dr\int_0^{2\pi}d\theta\int_0^{\pi}\sin\varphi\,d\varphi = \frac{4}{15}\pi.
> \end{aligned}$$
> 代入式(1)，得 $I = \frac32 abc(a^2+b^2+c^2)\cdot\frac{4}{15}\pi = \frac{2\pi}{5}abc(a^2+b^2+c^2).$

## 2) 利用Gauss公式计算第一型曲面积分

> [!example] ☆例7.4.16
> 试证：若 $S$ 为封闭的光滑曲面，$l$ 为任意固定的已知方向，则
> $$\iint_S \cos(n,l)\,dS = 0,$$
> 式中 $n$ 为曲面的外法向量。（山东师范大学，华中师范大学）

> [!proof]- 解
> 设 $l_1=(a,b,c)$ 为 $l$ 方向的单位向量，$n_1$ 是单位外法向量：$n_1=(\cos\alpha,\cos\beta,\cos\gamma)$，则 $\cos(n,l)=l_1\cdot n_1=a\cos\alpha+b\cos\beta+c\cos\gamma$。应用Gauss公式，
> $$\iint_S \cos(n,l)\,dS = \iint_S (a\cos\alpha+b\cos\beta+c\cos\gamma)\,dS = \iiint_V \left(\frac{\partial a}{\partial x}+\frac{\partial b}{\partial y}+\frac{\partial c}{\partial z}\right)dxdy dz = \iiint_V 0\,dV = 0.$$

> [!example] 例7.4.17
> 记 $r=r(\theta,\varphi)$ 为分片光滑封闭曲面 $S$ 的球坐标方程。试证明 $S$ 所围的有界区域 $V$ 的体积
> $$V = \frac13 \iint_S r\cos\psi\,dS,$$
> 其中 $\psi$ 为曲面 $S$ 在动点的外法线方向与径向量所成的夹角。

> [!proof]- 解
> 用 $\boldsymbol{r}=(x,y,z)$ 表示动点的径向量，则模 $r = \sqrt{x^2+y^2+z^2}$，$\boldsymbol{n}=(\cos\alpha,\cos\beta,\cos\gamma)$ 表示 $S$ 的单位外法向量，则
> $$\cos\psi = \frac{\boldsymbol{r}}{r}\cdot \boldsymbol{n} = \frac{x}{r}\cos\alpha + \frac{y}{r}\cos\beta + \frac{z}{r}\cos\gamma.$$
> 因此
> $$\frac13 \iint_S r\cos\psi\,dS = \frac13 \iint_S (x\cos\alpha+y\cos\beta+z\cos\gamma)\,dS = \iiint_V dxdydz = V.$$

> [!exercise] 练习1
> 设 $\Omega$ 是椭圆 $3x^2+y^2=1$ 绕 $y$ 轴旋转得到旋转曲面，用 $(u,v,w)$ 表示点 $(x,y,z)\in\Omega$ 处外法线的方向余弦，$\Sigma$ 为 $\Omega$ 的上半部分（$z\geq 0$）的外侧。试计算曲面积分
> $$I = \iint_\Sigma z(xu+yv+2zw)\,dS.$$
> （武汉大学）

> [!hint]- 提示
> （补一块，用Gauss公式）。注意 $\Omega$ 的方程为 $3(x^2+z^2)+y^2=1$。

> [!hint]- 再提示
> 在底部（$z=0$）补一块 $\Delta$（表示用下侧），使得 $\Delta$ 跟 $\Sigma$ 一起围成封闭区域：
> $$V = \{(x,y,z) \mid 3x^2+y^2+3z^2\leq 1,\ z\geq 0\}.$$
> 因为 $\Delta$ 上 $z=0$，积分为零，故补这一块不改变积分值的大小。但现在能应用Gauss公式：
> $$I = \iint_{\Sigma+\Delta} (zxu+zyv+2z^2w)\,dS \xrightarrow{\text{Gauss公式}} \iiint_V 6z\,dV. \tag{1}$$
>
> 占用椭球坐标 $x=\frac{1}{\sqrt3}r\sin\varphi\cos\theta$，$y=r\sin\varphi\sin\theta$，$z=\frac{1}{\sqrt3}r\cos\varphi$，$0\leq r\leq 1$，$0\leq\theta\leq 2\pi$，$0\leq\varphi\leq\frac\pi2$。此时，$J=\frac13 r^2\sin\varphi$。由式(1)得
> $$I = \frac{6}{3\sqrt3}\int_0^1 r^3dr\int_0^{2\pi}d\theta\int_0^{\pi/2}\cos\varphi\sin\varphi\,d\varphi = \frac{\sqrt3\pi}{6}.$$

> [!exercise] 练习2
> $xOz$ 平面上抛物线 $3x^2+z=1$（$0\leq x\leq\frac1{\sqrt3},\ z\geq 0$）绕 $z$ 轴旋转得曲面 $\Omega$。用 $(u,v,w)$ 表示点 $(x,y,z)\in\Omega$ 处外法线的方向余弦，$\Sigma$ 表示 $\Omega$（$x,z\geq 0$）部分外侧。试计算曲面积分
> $$I = \iint_\Sigma z(xu+yv+2zw)\,dS.$$

> [!hint]- 提示
> 此时所得（有限的）旋转曲面为 $3x^2+z+3y^2=1$（$x\geq 0,\ z\geq 0$），这次需补两块：$\Delta_1$ 和 $\Delta_2$（在 $\Delta_1$ 上 $z=0$，在 $\Delta_2$ 上 $x=0$），才构成封闭图形，应用Gauss公式。
> 在 $\Delta_1$ 上 $z=0$，因此积分为 $0$；在 $\Delta_2$ 上 $x=0$，且法向量与 $y$ 轴（与 $z$ 轴）都垂直，因此 $v=w=0$，故积分为 $0$。
> 用Gauss公式之后，采用柱面坐标：$(x,y,z)=(r\cos\theta,r\sin\theta,z)$，$J=r$。于是
> $$\begin{aligned}
> I &= \iiint_\Omega 6z\,dV = 6\int_0^1 z\,dz \int_{-\pi/2}^{\pi/2} d\theta \int_0^{\sqrt{(1-z)/3}} r\,dr \\
> &= \pi\int_0^1 z(1-z)\,dz = \frac{\pi}{6}.
> \end{aligned}$$

> [!exercise] 练习3
> 设 $V$ 是不含原点的有界闭区域，其体积也记为 $V$，其边界为光滑的简单闭曲面 $\Sigma$，$\Sigma$ 的单位外法向量为 $\boldsymbol{n}$，径向量 $\boldsymbol{r}=(x,y,z)$；$f(x)$ 在 $[0,+\infty)$ 上有连续导数，且满足微分方程
> $$f'(t)+2f(t)-1=0.$$
> 计算曲面积分
> $$I = \iint_\Sigma f(\sqrt{x^2+y^2+z^2})\cos(\boldsymbol{r},\boldsymbol{n})\,dS.$$
> （仿华中科技大学）

> [!hint]- 提示
> 记 $\boldsymbol{n}=(\cos\alpha,\cos\beta,\cos\gamma)$，则
> $$\cos(\boldsymbol{r},\boldsymbol{n}) = \frac{x\cos\alpha+y\cos\beta+z\cos\gamma}{\sqrt{x^2+y^2+z^2}}.$$
> 代入积分 $I$，再应用Gauss公式。（注意：$r=\sqrt{x^2+y^2+z^2}$，$r_x'=x/r$，$r_y'=y/r$，$r_z'=z/r$。）

> [!hint]- 再提示
> $$\begin{aligned}
> I &= \iint_\Sigma f(r)\left(\frac{x}{r}\cos\alpha+\frac{y}{r}\cos\beta+\frac{z}{r}\cos\gamma\right)dS \\
> &= \iiint_V \left[\frac{\partial}{\partial x}\left(f(r)\frac{x}{r}\right)+\frac{\partial}{\partial y}\left(f(r)\frac{y}{r}\right)+\frac{\partial}{\partial z}\left(f(r)\frac{z}{r}\right)\right]dV \\
> &= \iiint_V (f'(r)+2f(r))\,dV = \text{式(1)}\,V.
> \end{aligned}$$

> [!remark] 注
> 这种解法的优点在于避免了求解微分方程(1)的通解。如本题求出通解：$f(x)=Ce^{-2t}+\frac12$ 后虽能得到相同答案，但过程更麻烦。

> [!exercise] 类题
> 若将练习3的式(1)改为 $f'(t)+3f(t)-1=0$，证明：下面积分也等于体积 $V$：
> $$I = \iint_\Sigma f(\sqrt{x^2+y^2+z^2})\sqrt{x^2+y^2+z^2}\cos(\boldsymbol{r},\boldsymbol{n})\,dS = V.$$
> （都等于 $V$，倒也怪哉？）

## 3) 个别奇点的处理

Gauss公式要求被积函数 $P,Q,R$ 在 $V+S$ 上连续，有连续偏导数。不具备这个条件的公式可以不成立。但对于个别奇点，我们可在奇点的充分小的邻域里，作一个易于计算积分的封闭曲面，将奇点挖去。

> [!example] \*☆例7.4.18
> 计算Gauss曲面积分
> $$I = \iint_S \frac{\cos(\boldsymbol{n},\boldsymbol{r})}{r^2}\,dS,$$
> 其中 $S$ 是光滑封闭曲面，原点不在 $S$ 上，$r$ 是 $S$ 上动点至原点的距离，$(\boldsymbol{n},\boldsymbol{r})$ 是动点处外法向量 $\boldsymbol{n}$ 与径向量 $\boldsymbol{r}$ 的夹角。（东北师范大学）

> [!proof]- 解
> $\boldsymbol{r}=(x,y,z)$ 表示动点 $(x,y,z)$ 的径向量，则模 $r = \sqrt{x^2+y^2+z^2}$，$\boldsymbol{n}=(\cos\alpha,\cos\beta,\cos\gamma)$ 表示 $S$ 在动点的单位外法向量。故
> $$\cos(\boldsymbol{n},\boldsymbol{r})=\frac{\boldsymbol{r}}{r}\cdot \boldsymbol{n} = \frac{x}{r}\cos\alpha+\frac{y}{r}\cos\beta+\frac{z}{r}\cos\gamma.$$
>
> **1°** 若原点位于 $S$ 之外部区域，则函数
> $$P=\frac{x}{r}=\frac{x}{\sqrt{x^2+y^2+z^2}},\quad Q=\frac{y}{r}=\frac{y}{\sqrt{x^2+y^2+z^2}},\quad R=\frac{z}{r}=\frac{z}{\sqrt{x^2+y^2+z^2}}$$
> 在 $S$ 的内部区域直到边界 $S$ 上连续，且有连续偏导数。因此可以应用Gauss公式：
> $$I = \iint_S \frac{\cos(\boldsymbol{n},\boldsymbol{r})}{r^2}\,dS = \iint_S \left(\frac{x}{r^3}\cos\alpha+\frac{y}{r^3}\cos\beta+\frac{z}{r^3}\cos\gamma\right)dS = \iiint_V \left[\frac{\partial}{\partial x}\left(\frac{x}{r^3}\right)+\frac{\partial}{\partial y}\left(\frac{y}{r^3}\right)+\frac{\partial}{\partial z}\left(\frac{z}{r^3}\right)\right]dxdydz. \tag{2}$$
>
> 注意：$\frac{\partial}{\partial x}\left(\frac{x}{r^3}\right)=\frac{\partial}{\partial x}\left(\frac{x}{(\sqrt{x^2+y^2+z^2})^3}\right)=\frac{y^2+z^2-2x^2}{(\sqrt{x^2+y^2+z^2})^5}=\frac{1}{r^3}-\frac{3x^2}{r^5}$，由轮换对称性，
> $$\frac{\partial}{\partial x}\left(\frac{x}{r^3}\right)+\frac{\partial}{\partial y}\left(\frac{y}{r^3}\right)+\frac{\partial}{\partial z}\left(\frac{z}{r^3}\right)=\frac{3}{r^3}-\left(\frac{3x^2}{r^5}+\frac{3y^2}{r^5}+\frac{3z^2}{r^5}\right)=0.$$
> 故 $I = \iiint_V 0\,dxdydz = 0.$
>
> **2°** 若原点位于 $S$ 的内部区域。这时 $P,Q,R$ 在原点处不连续，不能直接在 $S$ 的内部区域上应用Gauss公式。今以原点为中心，以 $\varepsilon>0$（充分小）为半径，作一球面 $\Gamma_\varepsilon$，使得 $\Gamma_\varepsilon$ 全位于 $S$ 的内部区域。以 $V$ 表示 $S$ 与 $\Gamma_\varepsilon$ 之间区域，则 $V$ 内不含原点，可以应用1°中已得结论，因此原积分
>
> $$\begin{aligned}
> I &= \iint_S \frac{\cos(\boldsymbol{n},\boldsymbol{r})}{r^2}\,dS = \iint_{S+\Gamma_\varepsilon} \frac{\cos(\boldsymbol{n},\boldsymbol{r})}{r^2}\,dS - \iint_{\Gamma_\varepsilon} \frac{\cos(\boldsymbol{n},\boldsymbol{r})}{r^2}\,dS \\
> &= \iiint_V 0\,dxdydz - \iint_{\Gamma_\varepsilon} \frac{\cos\pi}{\varepsilon^2}\,dS = \frac{1}{\varepsilon^2} \iint_{\Gamma_\varepsilon} dS = \frac{1}{\varepsilon^2}\,4\pi\varepsilon^2 = 4\pi.
> \end{aligned}$$
>
> 总之
> $$I = \begin{cases}
> 0, & \text{原点位于 } S \text{ 的外部区域}, \\
> 4\pi, & \text{原点位于 } S \text{ 的内部区域}.
> \end{cases}$$

> [!example] 例7.4.19
> 计算曲面积分 $I = \iint_{S_{\text{外}}} \frac{xdydz + ydzdx + zdxdy}{(x^2 + y^2 + z^2)^{3/2}}$，其中 $S$ 是 $V = \{(x,y,z) \mid |x|\leq 2,\ |y|\leq 2,\ |z|\leq 2\}$ 的界面。（安徽大学）

> [!hint]- 提示
> 利用上例方法，可证与单位球面外侧的积分相等。

> [!exercise] 练习
> 设 $S$ 是 $\mathbb{R}^3$ 中一光滑封闭曲面，不过原点，$\boldsymbol{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ 是曲面 $S$ 在点 $P$ 处的单位外法向量，$\Omega$ 是 $S$ 包围的区域，就下面两种情况分别计算积分
> $$I = \iint_S \frac{x\cos\alpha + y\cos\beta + z\cos\gamma}{(ax^2 + by^2 + cz^2)^{3/2}}\,dS \tag{1}$$
> （其中 $a,b,c$ 都是正数）：1）原点在 $\Omega$ 之外部；2）原点在 $\Omega$ 之内部。（中国科学技术大学）

> [!hint]- 提示
> （两种方法）**方法I** 见上例。1）直接应用Gauss公式，得积分值为 $0$。2）在 $S$ 的内部，先用充分小的椭球将奇点（原点）围起，再将 $S$ 上的积分，转化为小椭球面上的积分。
> **方法II** 作相似变换：$\sqrt{a}x = \xi$，$\sqrt{b}y = \eta$，$\sqrt{c}z = \zeta$，将积分转化为熟知的积分。

> [!proof]- 解I
> 1）记 $w = (ax^2 + by^2 + cz^2)^{3/2}$（$V$ 表示 $S$ 之内部区域），则
> $$I \xrightarrow{\text{Gauss公式}} \iiint_V \frac{1}{w^2} \left(3w - x\frac{\partial w}{\partial x} - y\frac{\partial w}{\partial y} - z\frac{\partial w}{\partial z}\right)dV = \iiint_V 0\,dV = 0.$$
>
> 2）取 $\varepsilon>0$（充分小），作小椭球 $\sigma_\varepsilon$：$ax^2 + by^2 + cz^2 \leq (\varepsilon^{1/3})^2$，使整个 $\sigma_\varepsilon \subset V$。这时在 $S$ 与 $\partial\sigma_\varepsilon$ 包围的区域（记作 $V-\sigma_\varepsilon$）无奇点，可以应用Gauss公式（$\partial\sigma_\varepsilon$ 表示 $\sigma_\varepsilon$ 的边界）：
>
> $$I = \iint_{S+} \cdots\, dS = \iint_{S+ + \partial\sigma_\varepsilon^-} \cdots\, dS + \iint_{\partial\sigma_\varepsilon^+} \cdots\, dS = \iiint_{V-\sigma_\varepsilon}0\,dV + \iint_{\partial\sigma_\varepsilon^+} \cdots\, dS = \iint_{\partial\sigma_\varepsilon^+} \cdots\, dS,$$
>
> 其中"$\cdots$"代表被积函数：$\frac{x\cos\alpha + y\cos\beta + z\cos\gamma}{(ax^2 + by^2 + cz^2)^{3/2}}$（$\partial\sigma_\varepsilon^+$ 和 $\partial\sigma_\varepsilon^-$ 分别表示 $\partial\sigma_\varepsilon$ 的外侧和内侧，在 $\partial\sigma_\varepsilon$ 上 $ax^2 + by^2 + cz^2 = (\varepsilon^{1/3})^2$）。故
>
> $$I = \iint_{\partial\sigma_\varepsilon^+} \frac{x\cos\alpha + y\cos\beta + z\cos\gamma}{(ax^2 + by^2 + cz^2)^{3/2}}\,dS = \frac{1}{\varepsilon} \iint_{\partial\sigma_\varepsilon^+} xdydz + ydzdx + zdxdy.$$
>
> 右端新积分无奇点，可应用Gauss公式变为三重积分，再用广义极坐标，$J = \frac{1}{\sqrt{abc}}\rho^2\sin\varphi$。于是
>
> $$I = \frac{3}{\varepsilon} \iiint_{\sigma_\varepsilon} dV = \frac{3}{\varepsilon\sqrt{abc}} \int_0^{\varepsilon^{1/3}} \rho^2 d\rho \int_0^{2\pi} d\theta \int_0^\pi \sin\varphi\,d\varphi = \frac{4\pi}{\sqrt{abc}}.$$

> [!proof]- 解II
> 记 $S\to S'$，则
> $$I = \iint_S \frac{x\cos\alpha + y\cos\beta + z\cos\gamma}{(ax^2 + by^2 + cz^2)^{3/2}}\,dS = \iint_S \frac{xdydz + ydzdx + zdxdy}{(ax^2 + by^2 + cz^2)^{3/2}}.$$
> 令 $\sqrt{a}x = \xi$，$\sqrt{b}y = \eta$，$\sqrt{c}z = \zeta$，则
> $$I = \frac{1}{\sqrt{abc}} \iint_{S'} \frac{\xi d\eta d\zeta + \eta d\zeta d\xi + \zeta d\xi d\eta}{(\xi^2 + \eta^2 + \zeta^2)^{3/2}}.$$
> 至此，已变成前例熟悉的积分。

> [!example] \*☆例7.4.20
> 设 $C$ 为锥面，它的顶点在原点以 $z$ 的正半轴为对称轴，顶角（母线与 $z$ 轴的夹角）为 $\alpha\;(0<\alpha<\pi/2)$。假设 $S$ 是包含在 $C$ 内部区域的一个曲面，$S$ 的边界是 $C$ 上的一条没有重点的闭曲线。从原点出发的任何一条射线和平行于 $z$ 轴的任何一条直线跟 $S$ 至多交于一点。又假设 $S$ 有连续的单位法向量，正方向指向圆锥的内部被 $S$ 分割出来的无界区域。用 $r$ 表示从原点到 $S$ 上的动点的距离，试分下列两种情况计算积分 $\iint_S \frac{\partial}{\partial n}\left(\frac{1}{r}\right)dS$：
>
> 1）$S$ 是以原点为中心的球面的一部分；
> 2）$S$ 是满足上述假设的任意曲面。（厦门大学）

> [!proof]- 解
> **1）** 因 $S$ 是以原点为中心的球面（记半径为 $R>0$），故 $S$ 的外法线方向与径向量 $\boldsymbol{r}$ 一致，因此
> $$\frac{\partial}{\partial n}\frac{1}{r} = \frac{\partial}{\partial r}\frac{1}{r} = -\frac{1}{r^2}.$$
> $$\iint_S \frac{\partial}{\partial n}\frac{1}{r}\,dS = -\iint_S \frac{1}{r^2}\,dS = -\frac{1}{R^2} \iint_S dS = 2\pi(\cos\alpha - 1).$$
> （见例7.4.10。）
>
> **2）**（此时 $S$ 为任意曲面，1）中的方法已无能为力。但 $S$ 与锥面 $C$ 构成了封闭曲面，可考虑用Gauss公式。不过原点为奇点，因此应用一充分小的球面将原点挖去。如此）以原点为中心，以充分小的 $\varepsilon>0$ 为半径，作一小球面，使之与 $S$ 无交点。小球面夹在锥内的部分记为 $S_\varepsilon$，锥面 $C$ 上夹在 $S$ 与 $S_\varepsilon$ 之间的部分记为 $\Gamma$，曲面 $S$、$S_\varepsilon$、$\Gamma$ 所围的区域记为 $V$。于是
> $$\iint_S \frac{\partial}{\partial n}\frac{1}{r}\,dS = \left( \iint_{S+\Gamma+S_\varepsilon} - \iint_\Gamma - \iint_{S_\varepsilon} \right) \frac{\partial}{\partial n}\frac{1}{r}\,dS. \tag{1}$$
>
> 注意到
> $$\frac{\partial}{\partial n}\frac{1}{r} = \frac{\partial(1/r)}{\partial x}\cos(\boldsymbol{n},x) + \frac{\partial(1/r)}{\partial y}\cos(\boldsymbol{n},y) + \frac{\partial(1/r)}{\partial z}\cos(\boldsymbol{n},z),$$
> 对式（1）右端第一个积分应用Gauss公式：
> $$\iint_{S+\Gamma+S_\varepsilon} \frac{\partial}{\partial n}\frac{1}{r}\,dS = \iiint_V \left(\frac{\partial^2}{\partial x^2}\frac{1}{r} + \frac{\partial^2}{\partial y^2}\frac{1}{r} + \frac{\partial^2}{\partial z^2}\frac{1}{r}\right)dxdydz = \iiint_V 0\,dxdydz = 0. \tag{2}$$
>
> 又因锥面上法线方向与径向垂直，$\frac{\partial}{\partial n}\frac{1}{r} \equiv 0$，因此式（1）右端第二个积分
> $$\iint_\Gamma \frac{\partial}{\partial n}\frac{1}{r}\,dS = \iint_\Gamma 0\,dS = 0. \tag{3}$$
>
> 由于 $S_\varepsilon$ 是以原点为中心的球面，符合1）中的条件，不过 $S_\varepsilon$ 的法线方向指向原点（对 $V$ 而言是朝外）。因此式（1）右端的第三个积分可用1）中的结果（反号）：
> $$\iint_{S_\varepsilon} \frac{\partial}{\partial n}\frac{1}{r}\,dS = -2\pi(\cos\alpha - 1). \tag{4}$$
>
> 将（2）、（3）、（4）代入（1），得
> $$\iint_S \frac{\partial}{\partial n}\frac{1}{r}\,dS = 2\pi(\cos\alpha - 1).$$


#### b. 从积分性质导出微分性质

要点 （与线积分类似）利用 Gauss 公式、积分中值定理以及曲面无限收缩（收缩至一点）取极限的方法，可由函数的某些积分性质导出它的微分性质. 这种方法在物理上有重大应用.

☆ 例 7.4.21 设 $V$ 是三维空间的区域，其内任何封闭曲面都可不通过 $V$ 外的点连续收缩至一点. 又设函数 $P(x,y,z)$, $Q(x,y,z)$, $R(x,y,z)$ 在 $V$ 上有连续偏导数. $S$ 表示 $V$ 内任一不自交的光滑封闭曲面. $\mathbf{n}$ 是 $S$ 的外法向量，试证明：对任意 $S$，恒有

$$\iint_S [P\cos(\mathbf{n},x) + Q\cos(\mathbf{n},y) + R\cos(\mathbf{n},z)]\,\mathrm{d}S = 0$$

的充要条件是 $\dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y} + \dfrac{\partial R}{\partial z} = 0$ 在 $V$ 内处处成立.（四川师范大学）

> [!proof]- 证
> 充分性由 Gauss 公式直接可得. 这里只证明必要性. 应用 Gauss 公式与积分中值定理（记 $S$ 所包围的区域和体积为 $V'$），
>
> $$0 = \iint_S [P\cos(\mathbf{n},x) + Q\cos(\mathbf{n},y) + R\cos(\mathbf{n},z)]\,\mathrm{d}S$$
>
> $$= \iiint_{V'} \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right)\mathrm{d}x\mathrm{d}y\mathrm{d}z = \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right)_M \cdot V', \qquad (1)$$
>
> 这里 $M$ 是 $V'$ 内某一点.
>
> 设 $M_0 \in V$ 为任意给定的点，今以 $M_0$ 为中心，以 $\varepsilon > 0$（充分小）为半径，作球面 $\varGamma_\varepsilon$，使 $\varGamma_\varepsilon$ 在 $V$ 内. 令 $S = \varGamma_\varepsilon$，应用式（1），知球内存在一点 $M$ 使得
>
> $$\left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right)_M = 0,\quad \rho(M_0,M) < \varepsilon.$$
>
> 令 $\varepsilon \to 0$ 取极限，得
>
> $$\left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right)_{M_0} = 0. \qquad (2)$$
>
> 由 $M_0$ 的任意性，知式（2）在 $V$ 内处处成立. 证毕.

注 用反证法更省事，请读者自己证明（可参看例 7.3.17 之证明）.

例 7.4.22 设函数 $P(x,y,z)$, $Q(x,y,z)$ 及 $R(x,y,z)$ 在 $\mathbb{R}^3$ 中有一阶连续偏导数. 对于任意 $r > 0$，任意点 $(x_0,y_0,z_0) \in \mathbb{R}^3$，半球面 $S$：$z = z_0 + \sqrt{r^2 - (x - x_0)^2 - (y - y_0)^2}$ 上的积分

$$\iint_S P\,\mathrm{d}y\mathrm{d}z + Q\,\mathrm{d}z\mathrm{d}x + R\,\mathrm{d}x\mathrm{d}y = 0.$$

试证：$\dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y} = 0$，$R = 0$ 在 $\mathbb{R}^3$ 内处处成立.

> [!proof]- 提示
> 参考例 7.3.18.

例 7.4.23 函数 $u = u(x,y,z)$ 在区域 $V$ 内有直至二阶的连续偏导数，试证：$V$ 内任何封闭光滑曲面 $S$ 上的积分 $\displaystyle\iint_S \frac{\partial u}{\partial \mathbf{n}}\,\mathrm{d}S = 0$ 的充要条件是 $u$ 为 $V$ 内的调和函数

（即 $V$ 内恒有 $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2} = 0$）.

> [!proof]- 提示
> 因
>
> $$\frac{\partial u}{\partial \mathbf{n}} = \frac{\partial u}{\partial x}\cos(\mathbf{n},x) + \frac{\partial u}{\partial y}\cos(\mathbf{n},y) + \frac{\partial u}{\partial z}\cos(\mathbf{n},z),$$
>
> 故充分性直接可由 Gauss 公式得到，必要性用反证法可得.


### 四、Stokes 公式

Stokes 公式建立了空间曲面积分与其边界上的曲线积分的关系.

> [!theorem] 定理 2（Stokes 公式）
> 设
> 1）$S$ 是 $\mathbb{R}^3$ 中的分片光滑曲面；
> 2）$S$ 的边界是有限条封闭逐段光滑曲线 $L$；
> 3）函数 $P,Q,R$ 在曲面 $S$ 及其附近有定义，在 $S$ 直到 $L$ 上有连续的偏导数，
> 则
>
> $$
> \int_{L^+} P\,dx + Q\,dy + R\,dz = \iint_{S^+} \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\[2pt]
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\[6pt]
> P & Q & R
> \end{vmatrix} dS
> $$
>
> $$
> = \iint_S \begin{vmatrix}
> dy\,dz & dz\,dx & dx\,dy\\[2pt]
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\[6pt]
> P & Q & R
> \end{vmatrix}, \qquad \text{(A)}
> $$
>
> 其中 $S^+$ 与 $L^+$ 呈右手系（即站在 $S^+$ 的法线上看 $L^+$ 为逆时针方向），$\cos\alpha,\cos\beta,\cos\gamma$ 为 $S^+$ 的法线方向余弦. 式（A）中的行列式约定按第一行展开.

利用 Stokes 公式，可得到空间曲线积分与路径无关的充要条件.

> [!theorem] 定理 3
> 设 $V$ 是空间按曲线连通的区域（即 $V$ 内任一封闭曲线，都能在此曲线上张一光滑曲面，使之完全位于 $V$ 内），$P,Q,R$ 为 $V$ 内有连续偏导数的函数，则以下四条件等价：
>
> 1）$\forall M_0,M_1\in V$，从 $M_0$ 至 $M_1$ 的线积分 $\displaystyle\int_{M_0}^{M_1} P\,dx + Q\,dy + R\,dz$ 只与 $M_0,M_1$ 有关，与路径无关.
>
> 2）$V$ 内任何闭路 $L$ 上的积分 $\displaystyle\oint_L P\,dx + Q\,dy + R\,dz = 0$.
>
> 3）$V$ 内处处有 $\displaystyle\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$，$\displaystyle\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$，$\displaystyle\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$.
>
> 4）存在函数 $U(x,y,z)$，使得 $dU = P\,dx + Q\,dy + R\,dz$（$U$ 称为 $P\,dx + Q\,dy + R\,dz$ 的原函数，这时 $P\,dx + Q\,dy + R\,dz$ 称为恰当微分）.

下面利用这些结论来计算空间曲线积分.

> [!example] ☆ 例 7.4.24
> 计算线积分 $I = \displaystyle\oint_{L^+} x\,dy - y\,dx$，其中 $L^+$ 为上半球面 $x^2 + y^2 + z^2 = 1\;(z\ge 0)$ 与柱面 $x^2 + y^2 = x$ 的交线. 从 $z$ 轴正向往下看，$L$ 正向取逆时针方向.

> [!solution]- 解 I
> （把球面位于柱内的部分看成是 $L$ 上所张的曲面，用 Stokes 公式.）如图 7.4.8，用 $S^+$ 表示上半球面在柱面 $x^2 + y^2 = x$（即 $(x-1/2)^2 + y^2 = (1/2)^2$）内的部分之上侧，则 $S^+$ 与 $L^+$ 成右手系.
>
> $$
> I = \iint_{S^+} \left[\frac{\partial x}{\partial x} - \frac{\partial}{\partial y}(-y)\right]dx\,dy = 2\iint_{S^+} dx\,dy
> $$
>
> $$
> = 2\iint_{(x-1/2)^2+y^2\le 1/4} dx\,dy = 2\cdot\pi\left(\frac{1}{2}\right)^2 = \frac{\pi}{2}.
> $$

> [!solution]- 解 II
> （将柱面夹在上半球面与 $xOy$ 平面之间的部分（记为 $\Gamma$），以及 $xOy$ 平面位于柱面内的部分（记为 $\Delta$）看成是曲线 $L$ 上所张的分片光滑曲面.）
>
> $$
> I = \oint_{L^+} x\,dy - y\,dx = \iint_{\Gamma+\Delta} \left[\frac{\partial x}{\partial x} - \frac{\partial}{\partial y}(-y)\right]dx\,dy.
> $$
>
> 注意 $\Gamma$ 在 $xOy$ 平面的投影面积为零，因此 $\Gamma$ 上积分为零. $\Delta$ 上的法线朝上（与 $L^+$ 成右手系）. 因此
>
> $$
> I = 2\iint_\Delta dx\,dy = 2\pi\left(\frac{1}{2}\right)^2 = \frac{\pi}{2}.
> $$

> [!solution]- 解 III
> （不用 Stokes 公式，直接引用参数方程化为定积分.）
>
> $L^+$：$x = \dfrac{1}{2} + \dfrac{1}{2}\cos\theta$, $y = \dfrac{1}{2}\sin\theta$, $z = \dfrac{1}{\sqrt{2}}\sqrt{1 - \cos\theta}$.
>
> $$
> \begin{aligned}
> I &= \oint_{L^+} x\,dy - y\,dx \\
>   &= \int_0^{2\pi} \left[\left(\frac{1}{2} + \frac{1}{2}\cos\theta\right)\frac{1}{2}\cos\theta + \frac{1}{4}\sin^2\theta\right]d\theta \\
>   &= \int_0^{2\pi} \frac{1}{4}\cos\theta\,d\theta + \frac{1}{4}\int_0^{2\pi} d\theta = \frac{1}{4}\cdot 2\pi = \frac{\pi}{2}.
> \end{aligned}
> $$

> [!example] 例 7.4.25
> 设 $C$ 为光滑曲面 $S$ 的边界，求证：
>
> $$
> \oint_C f\frac{\partial g}{\partial x}\,dx + f\frac{\partial g}{\partial y}\,dy + f\frac{\partial g}{\partial z}\,dz = \iint_S \begin{vmatrix}
> \dfrac{\partial f}{\partial x} & \dfrac{\partial f}{\partial y} & \dfrac{\partial f}{\partial z}\\[6pt]
> \dfrac{\partial g}{\partial x} & \dfrac{\partial g}{\partial y} & \dfrac{\partial g}{\partial z}\\[6pt]
> \cos\alpha & \cos\beta & \cos\gamma
> \end{vmatrix} dS,
> $$
>
> 其中 $f,g$ 是有二阶连续偏导数的函数，$\cos\alpha,\cos\beta,\cos\gamma$ 为 $S$ 上单位法向量的方向余弦（$C$ 的方向与 $S$ 的法线方向成右手系）。（同济大学）

> [!tip]- 提示
> 原式左端利用 Stokes 公式，代入后行列式按第一行展开，可得三项：
>
> $$
> \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\[6pt]
> P & Q & R
> \end{vmatrix}
> =
> \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\[6pt]
> f\dfrac{\partial g}{\partial x} & f\dfrac{\partial g}{\partial y} & f\dfrac{\partial g}{\partial z}
> \end{vmatrix}
> = I_1 + I_2 + I_3,
> $$
>
> 其中
>
> $$
> \begin{aligned}
> I_1 &= \cos\alpha\left[\frac{\partial}{\partial y}\left(f\frac{\partial g}{\partial z}\right) - \frac{\partial}{\partial z}\left(f\frac{\partial g}{\partial y}\right)\right] \\
>     &= \cos\alpha\left(\frac{\partial f}{\partial y}\cdot\frac{\partial g}{\partial z} + f\cdot\frac{\partial^2 g}{\partial y\partial z} - \frac{\partial f}{\partial z}\cdot\frac{\partial g}{\partial y} - f\cdot\frac{\partial^2 g}{\partial y\partial z}\right) \\
>     &= \cos\alpha\left(\frac{\partial f}{\partial y}\cdot\frac{\partial g}{\partial z} - \frac{\partial f}{\partial z}\cdot\frac{\partial g}{\partial y}\right) \\
>     &= \cos\alpha\begin{vmatrix}
>        \dfrac{\partial f}{\partial y} & \dfrac{\partial f}{\partial z}\\[6pt]
>        \dfrac{\partial g}{\partial y} & \dfrac{\partial g}{\partial z}
>        \end{vmatrix}.
> \end{aligned}
> $$
>
> 同理写出另外两项，原式右端按第三行展开，得证。

> [!example] 例 7.4.26
> 计算曲线积分
>
> $$
> I = \int_{L^+} (x^2 - yz)\,dx + (y^2 - xz)\,dy + (z^2 - xy)\,dz,
> $$
>
> 其中 $L^+$ 是从点 $A(1,0,0)$ 至 $B(1,0,2)$ 的光滑曲线.

> [!solution]- 解
> （利用积分与路径无关.）这里 $P = x^2 - yz$，$Q = y^2 - xz$，$R = z^2 - xy$，满足积分与路径无关的条件：
>
> $$
> \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y} = -z,\quad
> \frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z} = -x,\quad
> \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x} = -y.
> $$
>
> 积分与路径无关，取 $AB$ 作为积分路径，故
>
> $$
> I = \int_0^2 z^2\,dz = \frac{8}{3}.
> $$
>
> （因为 $AB$ 上 $x = 1$, $y = 0$，因此 $dx = dy = 0$）.

> [!example] new ☆ 例 7.4.27
> 求曲线积分：
>
> $$
> I = \int_L (y - z)\,dx + (z - x)\,dy + (x - y)\,dz, \tag{1}
> $$
>
> 这里曲线 $L$ 是两球面：
>
> $$
> x^2 + y^2 + z^2 = 1 \tag{2}
> $$
>
> 与
>
> $$
> (x-1)^2 + (y-1)^2 + (z-1)^2 = 4 \tag{3}
> $$
>
> 的交线，积分方向从 $z$ 轴正向看为逆时针.（北京大学）

> [!solution]- 解 I
> （用 Stokes 公式.）式 (3) 改写为
>
> $$
> (x^2 - 2x + 1) + (y^2 - 2y + 1) + (z^2 - 2z + 1) = 4. \tag{4}
> $$
>
> 式 (2) 代入 (4) 得
>
> $$
> x + y + z = 0. \tag{5}
> $$
>
> (2),(5) 联立等价于 (2),(3) 联立，说明 $L$ 也可看成是 (2) 和 (5) 的交线，即：球面 $x^2 + y^2 + z^2 = 1$ 与平面 $x + y + z = 0$ 的交线.
>
> 平面 $x + y + z = 0$ 上，曲线 $L$ 所包围的圆域记为 $\Delta$，即
>
> $$
> \Delta = \{(x,y,z) \mid x + y + z = 0,\; x^2 + y^2 + z^2 \le 1\}.
> $$
>
> 对积分 (1)，利用 Stokes 公式：
>
> $$
> I = \iint_\Delta \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\[6pt]
> y - z & z - x & x - y
> \end{vmatrix} dS
> = -2\iint_\Delta (\cos\alpha + \cos\beta + \cos\gamma)\,dS. \tag{6}
> $$
>
> 平面 $x + y + z = 0$ 的法向量为 $\boldsymbol{n}$，方向数为：$1,1,1$. 因此 $\boldsymbol{n}$ 的方向余弦：
>
> $$
> \cos\alpha = \cos\beta = \cos\gamma = \frac{1}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{1}{\sqrt{3}}. \tag{7}
> $$
>
> 代入式 (6)，
>
> $$
> I = -\frac{2\cdot 3}{\sqrt{3}} \iint_\Delta dS = -\frac{2\cdot 3}{\sqrt{3}} \cdot \pi \cdot 1^2 = -2\sqrt{3}\pi.
> $$

> [!solution]- ※ 解 II
> （先将空间曲线投影到 $xOy$ 平面上，再在 $xOy$ 平面上应用 Green 公式.）如上所述，$L$ 可看成 $z = -x - y$ 与单位球面的交线. 将 $z = -x - y$ 代入式 (1)，可知（用 $L'$ 表示交线 $L$ 在 $xOy$ 平面上的投影）
>
> $$
> I = \int_L (y - z)\,dx + (z - x)\,dy + (x - y)\,dz = -3\int_{L'} x\,dy - y\,dx. \tag{8}
> $$
>
> （再用 $\Delta'$ 和 $\Delta$ 分别表示 $L'$ 和 $L$ 所围区域，$S_{\Delta'}$ 和 $S_\Delta$ 分别表示 $\Delta'$ 和 $\Delta$ 的面积.）在 $xOy$ 平面上，应用 Green 公式：
>
> $$
> \text{上式} = 3 \cdot (-2) \iint_{\Delta'} dx\,dy = -6S_{\Delta'} = -6\cos\gamma \cdot S_\Delta
> = -6 \cdot \frac{1}{\sqrt{3}} \cdot \pi \cdot 1^2 = -2\sqrt{3}\pi.
> $$

> [!solution]- 解 III
> 根据上面式 (8)，待求的积分 $I$ 已化为
>
> $$
> I = \int_L (y - z)\,dx + (z - x)\,dy + (x - y)\,dz = -3\int_{L'} x\,dy - y\,dx.
> $$
>
> 利用例 7.3.11 前的面积公式（B），知
>
> $$
> I = -6S_{\Delta'}. \tag{9}
> $$
>
> 下面用另外的方法求投影区域的面积 $S_{\Delta'}$：将式 (2),(5) 联立消去 $z$，得 $x,y$ 的方程：
>
> $$
> x^2 + xy + y^2 = \frac{1}{2}. \tag{10}
> $$
>
> 在 $Oxyz$ 三维空间，它是平行 $z$ 轴，通过交线 $L$ 的柱面. 在 $xOy$ 平面上，它是 $L$ 在 $xOy$ 上的投影 $L'$. 令 $x = \xi + \eta$, $y = \xi - \eta$，则 Jacobi 行列式 $J = -2$. 这时 $L'$ 的方程 (10) 转化为
>
> $$
> 6\xi^2 + 2\eta^2 = 1. \tag{11}
> $$
>
> 这是半轴分别为 $\dfrac{1}{\sqrt{6}}$，$\dfrac{1}{\sqrt{2}}$ 的椭圆，因此它的面积：$\dfrac{1}{\sqrt{6}} \cdot \dfrac{1}{\sqrt{2}} \pi = \dfrac{\pi}{\sqrt{12}}$. 可见 $L'$ 所围区域 $\Delta'$ 之面积：$S_{\Delta'} = |J|\dfrac{\pi}{\sqrt{12}} = \dfrac{2\pi}{\sqrt{12}}$. 代入式 (9)，得原积分：$I = -6S_{\Delta'} = -\dfrac{12\pi}{\sqrt{12}} = -2\sqrt{3}\pi$.

> [!example] new ☆ 例 7.4.28
> 计算积分：$I = \displaystyle\oint_c xy\,ds$，其中 $c$ 是 $x^2 + y^2 + z^2 = 9$ 和 $x + y + z = 0$ 的交线.（武汉大学）

> [!solution]- 解 I
> 原点不动，将 $xOy$ 平面旋转到平面 $\Sigma: x + y + z = 0$ 上，为此，令
>
> $$
> \xi = \frac{x - y}{\sqrt{2}},\quad
> \eta = \frac{x + y - 2z}{\sqrt{6}},\quad
> \zeta = \frac{x + y + z}{\sqrt{3}}. \tag{1}
> $$
>
> 将 $\zeta = \dfrac{x + y + z}{\sqrt{3}}$ 变形为 $-2z = -2\sqrt{3}\zeta + 2(x + y)$，代入 $\eta = \dfrac{x + y - 2z}{\sqrt{6}}$ 得（消去 $z$）
>
> $$
> \eta = \frac{3(x + y) - 2\sqrt{3}\zeta}{\sqrt{6}}. \tag{2}
> $$
>
> 在平面 $\Sigma$ 上：
>
> $$
> \zeta = 0,\qquad
> \xi = \frac{x - y}{\sqrt{2}},\qquad
> \eta = \frac{3(x + y)}{\sqrt{6}}. \tag{3}
> $$
>
> 球面旋转后不变：$\xi^2 + \eta^2 + \zeta^2 = x^2 + y^2 + z^2 = 9$. 在曲线 $c$ 上：
>
> $$
> x = \frac{1}{2}\left(\sqrt{2}\xi + \frac{\sqrt{6}}{3}\eta\right),\qquad
> y = \frac{1}{2}\left(-\sqrt{2}\xi + \frac{\sqrt{6}}{3}\eta\right).
> $$
>
> 故
>
> $$
> xy = \frac{1}{6}(\eta^2 - 3\xi^2). \tag{4}
> $$
>
> 从而曲线 $c$ 是（平面 $\Sigma$ 上）平面曲线：$\xi^2 + \eta^2 = 9$. 利用极坐标：$\xi = 3\cos\theta$，$\eta = 3\sin\theta$，得
>
> $$
> I = \oint_c xy\,ds = \frac{1}{6}\int_0^{2\pi} (9\sin^2\theta - 27\cos^2\theta) \cdot 3\,d\theta = -9\pi.
> $$

> [!solution]- 解 II
> 将题目中的球面方程和平面方程联立，消去变量 $z$，即得曲线 $c$ 在 $xOy$ 平面上的投影 $c_0$（椭圆方程）：
>
> $$
> x^2 + y^2 + xy = \frac{9}{2}. \tag{5}
> $$
>
> 令
>
> $$
> x = \frac{\xi - \eta}{\sqrt{2}},\qquad
> y = \frac{\xi + \eta}{\sqrt{2}}, \tag{6}
> $$
>
> 将 (6) 代入 (5)，得 $c_0$ 在新坐标下的方程：$3\xi^2 + \eta^2 = 9$. 引用广义极坐标：
>
> $$
> \xi = \sqrt{3}\cos\theta,\qquad
> \eta = 3\sin\theta, \tag{7}
> $$
>
> 故
>
> $$
> xy = \frac{1}{2}(\xi^2 - \eta^2) = \frac{1}{2}(3\cos^2\theta - 9\sin^2\theta). \tag{8}
> $$
>
> $$
> z'^2 = [-(x + y)]'^2 = (-\sqrt{2}\xi')^2 = 2\xi'^2.
> $$
>
> 故
>
> $$
> ds = \sqrt{x'^2(\theta) + y'^2(\theta) + z'^2(\theta)}\,d\theta = \sqrt{3\xi'^2(\theta) + \eta'^2(\theta)}\,d\theta = 3\,d\theta. \tag{9}
> $$
>
> 因此
>
> $$
> I = \oint_c xy\,ds = \int_0^{2\pi} \frac{1}{2}(3\cos^2\theta - 9\sin^2\theta) \cdot 3\,d\theta = -9\pi.
> $$


### 单元练习 7.4

曲面积分的计算

#### 7.4.1  计算 $I=\iint_S (x^2+y^2)dS$，其中 $S$ 是 $xOy$ 平面上方的抛物面 $z=2-(x^2+y^2)$（如图 7.4.9）。（上海师范大学）        〈149/30 π〉

> [!tip]- 提示
> $$
> I=\iint_{x^2+y^2\le2}(x^2+y^2)\cdot\sqrt{1+4(x^2+y^2)}\,dxdy=2\pi\int_0^{\sqrt2}r^3\sqrt{1+4r^2}\,dr.
> $$

图 7.4.9
图 7.4.10

#### ☆7.4.2  已知椭圆抛物面 $\Sigma_1:z=1+x^2+2y^2$，$\Sigma_2:z=2(x^2+3y^2)$，计算 $\Sigma_1$ 被 $\Sigma_2$ 截下部分的曲面面积（如图 7.4.10）。（华东师范大学）        〈π/12〉

> [!tip]- 提示
> 由 $\Sigma_1$ 知，
> $$
> dS=\sqrt{1+z_x^{\prime2}+z_y^{\prime2}}\,dxdy=\sqrt{1+4x^2+16y^2}\,dxdy.
> $$
> $\Sigma_1,\Sigma_2$ 之方程联立消去 $z$，得 $x^2+4y^2=1$。

> [!tip]- 再提示
> $$
> S=\iint_S dS=\iint_{x^2+4y^2\le1}\sqrt{1+4x^2+16y^2}\,dxdy.
> $$
> 令 $x=r\cos\theta$，$y=\dfrac12 r\sin\theta$，则
> $$
> J=\begin{vmatrix}
> \cos\theta & -r\sin\theta\\[2pt]
> \dfrac12\sin\theta & \dfrac12 r\cos\theta
> \end{vmatrix}=\frac r2.
> $$
> $$
> S=\frac12\int_0^{2\pi}d\theta\int_0^1 r\sqrt{1+4r^2}\,dr=\frac\pi{12}(5\sqrt5-1).
> $$

#### ☆7.4.3  计算 $I=\iint_S \boldsymbol a\cdot\boldsymbol n\,dS$，其中 $\boldsymbol a=(xy,-x^2,x+z)$，$S$ 为平面 $2x+2y+z=6$ 包含在第一卦限的部分，$\boldsymbol n$ 是 $S$ 的单位法向量。（南京化工学院）

> [!tip]- 提示
> $F\equiv2x+2y+z-6=0$，$(F'_x,F'_y,F'_z)=(2,2,1)$，$\boldsymbol n=\left(\dfrac23,\dfrac23,\dfrac13\right)$，$\boldsymbol a\cdot\boldsymbol n=\dfrac23xy-\dfrac23x^2+\dfrac13(x+z)$。

> [!tip]- 再提示
> $z=6-2x-2y$，$\sqrt{1+z_x^{\prime2}+z_y^{\prime2}}=3$。
> $$
> I=\iint_{0\le x\le3,\;0\le y\le3-x}\left[\frac23xy-\frac23x^2+\frac13(x+6-2x-2y)\right]\cdot3\,dxdy=\frac{27}{4}.
> $$

（该积分表示 $\boldsymbol a$ 穿过曲面 $S$ 的"通量"。）

#### ☆7.4.4  试求曲面积分 $F(t)=\iint_{x^2+y^2+z^2=t^2} f(x,y,z)\,dS\;( -\infty<t<+\infty)$ 之值，其中
> $$
> f(x,y,z)=
> \begin{cases}
> x^2+y^2, & z\ge\sqrt{x^2+y^2},\\
> 0,      & z<\sqrt{x^2+y^2}.
> \end{cases}
> $$
（山东大学）

> [!tip]- 提示
> 用柱面坐标，$f\neq0$ 当且仅当 $z\ge r$（即 $z^2\ge r^2=x^2+y^2$）。

> [!tip]- 再提示
> $x^2+y^2+z^2=t^2$ 上只有 $x^2+y^2\le t^2/2$（球冠）部位 $f\neq0$。故
> $$
> \begin{aligned}
> F(t)&=\iint_{x^2+y^2+z^2=t^2,\;x^2+y^2\le t^2/2}(x^2+y^2)\,dS\\
> &=\iint_{x^2+y^2\le t^2/2}(x^2+y^2)\,\frac{t}{\sqrt{t^2-x^2-y^2}}\,dxdy\\
> &=2\pi\int_0^{t/\sqrt2} r^2\cdot\frac{t}{\sqrt{t^2-r^2}}\cdot r\,dr\\
> &=\frac16(8-5\sqrt2)\pi t^4.
> \end{aligned}
> $$

#### 7.4.5  计算 $I=\iint_S (xy+yz+zx)\,dS$，其中 $S$ 是曲面 $z=\sqrt{x^2+y^2}$ 被曲面 $x^2+y^2=2x$ 所割下的部分（如图 7.4.11）。（南京工业大学）

> [!tip]- 提示
> 曲面 $S$ 及被积函数 $xy+yz$ 关于 $xOz$ 平面对称，对称点上 $xy+yz$ 的大小相等、符号相反，积分为零。

> [!tip]- 再提示
> $$
> \begin{aligned}
> I&=\iint_S zx\,dS\\
> &=\iint_{x^2+y^2\le2x} x\sqrt{x^2+y^2}\cdot\sqrt2\,dxdy\\
> &=2\sqrt2\int_{-\pi/2}^{\pi/2}d\theta\int_0^{2\cos\theta} r^3\cos\theta\,dr\\
> &=\frac{64}{15}\sqrt2.
> \end{aligned}
> $$

图 7.4.11

#### \*7.4.6  设曲面 $S$ 的极坐标方程为 $r=r(\varphi,\theta)\;((\varphi,\theta)\in\Delta)$，$r(\varphi,\theta)$ 有连续偏导数，试证 $S$ 的面积
> $$
> S=\iint_\Delta \sqrt{\bigl[r^2+(\partial r/\partial\varphi)^2\bigr]\sin^2\varphi+(\partial r/\partial\theta)^2}\;r\,d\varphi d\theta,
> $$
> 并由此计算曲面 $(x^2+y^2+z^2)^2=2a^2xy\;(a>0)$ 的面积（如图 7.4.12）。

> [!tip]- 提示
> 引入球坐标写出 $S$ 的参数方程，然后利用例 7.4.6 和例 7.4.7（及相关"要点"）中的方法。

图 7.4.12

> [!tip]- 再提示
> 令
> $$
> \begin{cases}
> x = r(\varphi,\theta)\sin\varphi\cos\theta,\\
> y = r(\varphi,\theta)\sin\varphi\sin\theta,\\
> z = r(\varphi,\theta)\cos\varphi,
> \end{cases}\qquad (\varphi,\theta)\in\Delta,
> $$
> 由此可算得
> $$
> \begin{aligned}
> E &= x_\varphi^{\prime2}+y_\varphi^{\prime2}+z_\varphi^{\prime2}=r_\varphi^{\prime2}+r^2,\\
> G &= x_\theta^{\prime2}+y_\theta^{\prime2}+z_\theta^{\prime2}=r_\theta^{\prime2}+r^2\sin^2\varphi,\\
> F &= x_\varphi'x_\theta'+y_\varphi'y_\theta'+z_\varphi'z_\theta'=r_\varphi'r_\theta',\\
> \sqrt{EG-F^2} &= \sqrt{r_\theta^{\prime2}+r^2\sin^2\varphi+r_\varphi^{\prime2}\sin^2\theta}\;\cdot r.
> \end{aligned}
> $$
> 因此
> $$
> S=\iint_S dS=\iint_\Delta\sqrt{EG-F^2}\,d\varphi d\theta
> =\iint_\Delta\sqrt{(r^2+r_\varphi^{\prime2})\sin^2\varphi+r_\theta^{\prime2}}\;\cdot r\,d\varphi d\theta.
> $$
> 又 $(x^2+y^2+z^2)^2=2a^2xy$，可知 $r=a\sin\varphi\sqrt{\sin2\theta}$，故
> $$
> r_\varphi^{\prime2}=a^2\cos^2\varphi\sin2\theta,\qquad
> r_\theta^{\prime2}=a^2\sin^2\varphi\cdot\frac{\cos^2 2\theta}{\sin2\theta}.
> $$
> 代入上式得
> $$
> S=4a^2\int_0^{\pi/4}d\theta\int_0^{\pi/2}\sin^2\varphi\,d\varphi=\frac{a^2\pi^2}{4}.
> $$

#### \*\*7.4.7  1）证明：半轴长分别为 $a,b,c$ 的椭球，表面积 $S$ 可以表示成
> $$
> S=\iint_{S_1}\sqrt{b^2c^2\xi^2+c^2a^2\eta^2+a^2b^2\zeta^2}\,dS, \tag{1}
> $$
> 其中积分沿单位球面 $S_1:\xi^2+\eta^2+\zeta^2=1$ 的外侧进行；
>
> 2）利用 Cauchy 不等式 $\displaystyle\sum_i a_i b_i\le\sqrt{(\sum_i a_i^2)(\sum_i b_i^2)}$ 证明
> $$
> S\ge\iint_{S_1}(bc\xi^2+ca\eta^2+ab\zeta^2)\,dS,
> $$
> 并证明不等式右端的积分值为 $\dfrac{4\pi}{3}(bc+ca+ab)$；
>
> 3）已知椭球体体积为 $\dfrac{4\pi}{3}abc$，求证椭球的表面积不小于同样体积的球的表面积。

> [!tip]- 提示
> 1）椭球表面积 $S=\iint_S dS$ 利用椭球参数方程可化为 $0\le\varphi\le\pi$，$0\le\theta\le2\pi$ 上的二重积分，进而可化为单位球面上的曲面积分。
>
> 2）对 $(bc\xi\cdot\xi+ca\eta\cdot\eta+ab\zeta\cdot\zeta)$ 应用 Cauchy 不等式。
>
> 3）利用 2）中结果。

> [!proof]- 证
> 1）令
> $$
> \begin{cases}
> x = a\sin\varphi\cos\theta,\\
> y = b\sin\varphi\sin\theta,\\
> z = c\cos\varphi,
> \end{cases}
> $$
> 由此
> $$
> \begin{aligned}
> E &= x_\varphi^{\prime2}+y_\varphi^{\prime2}+z_\varphi^{\prime2}
>     = a^2\cos^2\varphi\cos^2\theta+b^2\cos^2\varphi\sin^2\theta+c^2\sin^2\varphi,\\
> G &= x_\theta^{\prime2}+y_\theta^{\prime2}+z_\theta^{\prime2}
>     = a^2\sin^2\varphi\sin^2\theta+b^2\sin^2\varphi\cos^2\theta,\\
> F &= x_\varphi'x_\theta'+y_\varphi'y_\theta'+z_\varphi'z_\theta'
>     = -a^2\sin\varphi\cos\varphi\sin\theta\cos\theta+b^2\sin\varphi\cos\varphi\sin\theta\cos\theta,\\
> EG-F^2 &= a^2b^2\sin^2\varphi\cos^2\varphi+a^2c^2\sin^4\varphi\sin^2\theta+b^2c^2\sin^4\varphi\cos^2\theta\\
>        &= \bigl(a^2b^2\cos^2\varphi+a^2c^2\sin^2\varphi\sin^2\theta+b^2c^2\sin^2\varphi\cos^2\theta\bigr)\sin^2\varphi. \tag{2}
> \end{aligned}
> $$
>
> 由此式可得两个结论：首先，当 $a=b=c=1$ 时，这时椭球变成单位球 $S_1:\xi^2+\eta^2+\zeta^2=1$；式（2）成为
> $$
> EG-F^2=(\cos^2\varphi+\sin^2\varphi\sin^2\theta+\sin^2\varphi\cos^2\theta)\sin^2\varphi
> =(\zeta^2+\eta^2+\xi^2)\sin^2\varphi=\sin^2\varphi.
> $$
> 因此单位球面第一型曲面积分有如下公式：
> $$
> \iint_{S_1} f(\xi,\eta,\zeta)\,dS
> =\iint_{\substack{0\le\varphi\le\pi\\0\le\theta\le2\pi}} f(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)\,\sin\varphi\,d\varphi d\theta. \tag{3}
> $$
>
> 其次，由（2）得椭球表面积（记 $\Delta:0\le\varphi\le\pi,\;0\le\theta\le2\pi$）
> $$
> \begin{aligned}
> S &= \iint_S dS = \iint_\Delta \sqrt{EG-F^2}\,d\varphi d\theta\\
>   &\xlongequal{\text{由(2)}} \iint_\Delta \sqrt{a^2b^2\cos^2\varphi+a^2c^2\sin^2\varphi\sin^2\theta+b^2c^2\sin^2\varphi\cos^2\theta}\;\sin\varphi\,d\varphi d\theta\\
>   &\xlongequal{\text{由(3)}} \iint_{S_1} \sqrt{a^2b^2\zeta^2+a^2c^2\eta^2+b^2c^2\xi^2}\,dS.
> \end{aligned}
> $$
>
> 2）利用 Cauchy 不等式（见 §4.4 的定理 1），
> $$
> \begin{aligned}
> \iint_{S_1} (bc\xi^2+ca\eta^2+ab\zeta^2)\,dS
> &\le \iint_{S_1} \sqrt{(bc\xi)^2+(ca\eta)^2+(ab\zeta)^2}\cdot\sqrt{\xi^2+\eta^2+\zeta^2}\,dS\\
> &= \iint_{S_1} \sqrt{b^2c^2\xi^2+c^2a^2\eta^2+a^2b^2\zeta^2}\,dS \quad\text{由(1)}\\
> &= S.
> \end{aligned}
> $$
>
> 注意：
> $$
> \begin{aligned}
> \iint_{S_1} ab\zeta^2\,dS
> &= ab\cdot8\iint_{\substack{0\le\varphi\le\pi/2\\0\le\theta\le\pi/2}} \cos^2\varphi\sin\varphi\,d\varphi d\theta\\
> &= 8ab\cdot\frac\pi2\cdot\int_0^{\pi/2}\cos^2\varphi\sin\varphi\,d\varphi\\
> &= 4ab\pi\cdot\frac13\cdot1\\
> &= \frac43 ab\pi.
> \end{aligned}
> $$
>
> $\xi,\eta,\zeta$；$a,b,c$ 轮换对称，故
> $$
> \iint_{S_1} (bc\xi^2+ca\eta^2+ab\zeta^2)\,dS = \frac{4\pi}{3}(bc+ca+ab).
> $$
>
> 3）椭球 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}\le1$，若 $a,b,c>0$ 任意变动，但使 $abc=R^3$，则这时椭球体体积始终等于 $\dfrac43abc\pi=\dfrac43\pi R^3$。利用 2）所得的不等式，知椭球表面积
> $$
> S \ge \iint_{S_1} (bc\xi^2+ca\eta^2+ab\zeta^2)\,dS
> = \frac{4\pi}{3}(bc+ca+ab)
> \xlongequal{\text{令 }a=b=c=R} 4\pi R^2 \quad\text{（同样体积的球的表面积）}.
> $$

#### \*7.4.8  设 $S$ 为椭球面，$\rho$ 表示从椭球中心到与椭球表面元素 $dS$ 相切的平面之间的距离，试计算积分：
> 1）$\displaystyle I=\iint_S \rho\,dS$；（中南大学）
> 2）$\displaystyle K=\iint_S \frac1\rho\,dS$。

> [!tip]- 提示
> 关键在于求出 $\rho$ 的表达式。为此可通过椭球方程写出切平面方程的一般式，以点 $(0,0,0)$ 代入求 $\rho$，或如图 7.4.13，利用几何关系 $\rho=r\cos\alpha$，其中 $r=(x,y,z)$ 为动点的径向量，$\boldsymbol n$ 是 $(x,y,z)$ 处的外法向量，$\alpha=(\boldsymbol n,\boldsymbol r)$ 是 $\boldsymbol r$ 与 $\boldsymbol n$ 的夹角。

> [!solution]- 解 I
> $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$ 上点 $(x,y,z)$ 处的切平面为
> $$
> \frac{xX}{a^2}+\frac{yY}{b^2}+\frac{zZ}{c^2}=1,
> $$
> 其中 $(X,Y,Z)$ 为切平面上的动点，方程的法式为
> $$
> q(X,Y,Z)=\frac{\dfrac{xX}{a^2}+\dfrac{yY}{b^2}+\dfrac{zZ}{c^2}-1}{\sqrt{(x/a^2)^2+(y/b^2)^2+(z/c^2)^2}}=0.
> $$
>
> 于是 $(0,0,0)$ 到切平面的距离：
> $$
> \rho=|q(0,0,0)|=\frac{1}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}.
> $$
>
> 上半椭球面
> $$
> z=c\sqrt{1-\frac{x^2}{a^2}-\frac{y^2}{b^2}}, \tag{1}
> $$
> $$
> \begin{aligned}
> dS &= \sqrt{1+z_x^{\prime2}+z_y^{\prime2}}\,dxdy\\
>    &= \sqrt{1+\left(\frac{cx}{a^2}\bigg/\sqrt{1-\frac{x^2}{a^2}-\frac{y^2}{b^2}}\right)^2
>              +\left(\frac{cy}{b^2}\bigg/\sqrt{1-\frac{x^2}{a^2}-\frac{y^2}{b^2}}\right)^2}\,dxdy\\
>    &\xlongequal{\text{由(1)}} \frac{c^2}{z}\sqrt{\frac{x^2}{a^4}+\frac{y^2}{b^4}+\frac{z^2}{c^4}}\,dxdy.
> \end{aligned}
> $$
>
> 故积分
> $$
> \begin{aligned}
> I &= \iint_S \rho\,dS
>    = 2\iint_{S_{\text{上}}} \frac{c^2}{z}\,dxdy
>    = 2\iint_{\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1} \frac{c}{\sqrt{1-\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}}}\,dxdy \quad\text{（用广义极坐标）}\\
>    &= 2\cdot\int_0^{2\pi}d\theta\int_0^1 \frac{abc}{\sqrt{1-r^2}}\,r\,dr
>    = 4abc\pi.
> \end{aligned}
> $$
>
> 类似有
> $$
> K = \iint_S \frac1\rho\,dS = \frac43 abc\pi\left(\frac1{a^2}+\frac1{b^2}+\frac1{c^2}\right).
> $$

> [!solution]- 解 II
> $F\equiv\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}-1=0$，法向量 $\boldsymbol n$：
> $$
> \frac12\boldsymbol n=\frac12(F'_x,F'_y,F'_z)=\left(\frac{x}{a^2},\frac{y}{b^2},\frac{z}{c^2}\right),
> $$
> $\boldsymbol n$ 上的单位向量
> $$
> \boldsymbol n_1=\frac{(x/a^2,\,y/b^2,\,z/c^2)}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}},\qquad
> \cos(\boldsymbol n,z)=\frac{z/c^2}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}.
> $$
> $\boldsymbol r$ 上的单位向量 $\boldsymbol r_1=(x,y,z)/\sqrt{x^2+y^2+z^2}$，因此
> $$
> \rho = r\cos\alpha = r\cdot\boldsymbol r_1\cdot\boldsymbol n_1
> = \frac{(x,y,z)\cdot(x/a^2,y/b^2,z/c^2)}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}
> = \frac{x^2/a^2+y^2/b^2+z^2/c^2}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}
> = \frac{1}{\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}.
> $$
>
> 于是
> $$
> I = \iint_S \rho\,dS = \iint_D \rho\cdot\frac{dxdy}{\cos(\boldsymbol n,z)}
> = \iint_D \frac{c^2}{z}\,dxdy = 4\pi abc,
> $$
> 其中 $D$ 是 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\le1$ 的椭圆区域。

#### 7.4.9  计算第二型曲面积分 $\displaystyle\iint_{S_{\text{外}}} x(y^2+z^2)\,dydz$，$S_{\text{外}}$ 是以坐标原点为中心的单位球面的外侧。（武汉大学）

> [!tip]- 提示
> $$
> I = 2\iint_{S_{\text{外}},\,x\ge0} \sqrt{1-(y^2+z^2)}\,(y^2+z^2)\,dydz \quad\text{（令 }y=r\cos\theta,\;z=r\sin\theta\text{）}
> = 2\int_0^{2\pi}d\theta\int_0^1 \sqrt{1-r^2}\,r^3\,dr.
> $$

#### ☆7.4.10  计算第二型曲面积分
> $$
> \iint_S [f(x,y,z)+x]\,dydz+[2f(x,y,z)]\,dzdx+[f(x,y,z)+z]\,dxdy,
> $$
> 其中 $f(x,y,z)$ 为连续函数，$S$ 为平面 $x-y+z=1$ 在第四卦限的上侧（如图 7.4.14）。（湖北大学）

> [!tip]- 提示
> 先转化为第一型曲面积分。

> [!solution]- 解
> $F\equiv x-y+z-1$，$(F'_x,F'_y,F'_z)=(1,-1,1)$，
> $$
> (\cos\alpha,\cos\beta,\cos\gamma)=\left(\frac1{\sqrt3},-\frac1{\sqrt3},\frac1{\sqrt3}\right),
> $$
> 于是
> $$
> \begin{aligned}
> I &= \iint_S [(f+x)-2f+(f+z)]\cdot\frac1{\sqrt3}\,dS
>    = \frac1{\sqrt3}\iint_S (x+z)\,dS\\
>   &= \iint (x+z)\,dzdx
>    = \int_0^1 dx\int_0^{1-x}(x+z)\,dz = \frac13.
> \end{aligned}
> $$

### Gauss 公式的应用

#### 7.4.11  计算第二型曲面积分 $I=\iint_\Sigma x^2\,dydz+y^2\,dzdx+z^2\,dxdy$，其中 $\Sigma$ 为球面 $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ 的外侧。（南开大学）

> [!tip]- 提示
> $I=2\iiint_V (x+y+z)\,dV$，再令 $x=\xi+a,\;y=\eta+b,\;z=\zeta+c$，利用对称性。

#### 7.4.12  计算如下曲面积分：
> 1）$I=\iint_S yz\,dxdy+xz\,dydz+xy\,dzdx$，其中 $S$ 是圆柱面 $x^2+y^2=1$ 内三个坐标平面及旋转抛物面 $z=2-x^2-y^2$ 所围立体在第一卦限部分的外侧（如图 7.4.15）；（南京大学）
>
> 2）$K=\iint_\Sigma y^2z\,dxdy+xz\,dydz+x^2y\,dxdz$，其中 $\Sigma$ 是 $z=x^2+y^2$，$x^2+y^2=1$ 和坐标平面在第一卦限所围曲面的外侧（如图 7.4.16）。（哈尔滨工业大学）

#### ☆7.4.13  计算如下曲面积分：
> 1）$\displaystyle I=\iint_S z\left(\lambda\frac{x}{a^2}+\mu\frac{y}{b^2}+\gamma\frac{z}{c^2}\right)dS$，其中 $S$ 是椭球面 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$ 的上半部分（$z\ge0$），$\lambda,\mu,\gamma$ 是 $S$ 的外法线的方向余弦；（南京大学）
>
> 2）$\displaystyle K=\iint_S x^2y^2z\,dydz+xy^2z^2\,dzdx+xyz^2\,dxdy$，其中 $S$ 是顶点为 $A(0,0,2),B(1,0,0),C(0,1,0),D(-1,0,0),E(0,-1,0)$ 的棱锥面上侧（即三角形 $ABC,ACD,ADE,AEB$ 的上侧）；（中山大学）〈0〉
>
> 3）$\displaystyle L=\iint_\Sigma \left(f(yz)-\frac{xy^2}{2500\pi}\right)dydz+\left(g(zx)-\frac{yz^2}{2500\pi}\right)dzdx+\left(h(xy)-\frac{zx^2}{2500\pi}\right)dxdy$，其中 $\Sigma$ 是球面 $x^2+y^2+z^2=25$ 的内侧，$f,g,h$ 是连续可微函数；（华中科技大学）〈1〉
>
> 4）$\displaystyle M=\iint_\Sigma z\,dxdy+y\,dzdx+x\,dydz$，其中 $\Sigma$ 为圆柱面 $x^2+y^2=1$ 被 $z=0,\;z=3$ 所截部分的外侧。（北京航空航天大学）〈6π〉

> [!tip]- 提示
> （参看例 7.4.15。）先补一块（或几块）平面将积分曲面封口，变成封闭曲面；然后应用 Gauss 公式化为三重积分来计算。注意别忘了要减去补块上的积分。

> [!solution]- 解
> 1）（如图 7.4.17）补上 $z=0$ 平面在椭球内的部分 $S_0$（下面"…"代表被积函数 $z\left(\lambda\dfrac{x}{a^2}+\mu\dfrac{y}{b^2}+\gamma\dfrac{z}{c^2}\right)$）：
> $$
> I = \iint_S \ldots dS = \iint_{S+S_0} \ldots dS - \iint_{S_0} \ldots dS
> = \iiint_V \left(\frac{z}{a^2}+\frac{z}{b^2}+\frac{2z}{c^2}\right)dV
> = \frac\pi4\left(\frac1{a^2}+\frac1{b^2}+\frac2{c^2}\right)abc^2.
> $$
> 注意 $S_0$ 上 $z=0$，被积函数为零，故 $\displaystyle\iint_{S_0}\ldots dS=0$。在最后的三重积分中可令 $x=ar\sin\varphi\cos\theta,\;y=br\sin\varphi\sin\theta,\;z=cr\cos\varphi$，化为
> $$
> \int_0^{2\pi}d\theta\int_0^{\pi/2}d\varphi\int_0^1 \left(\frac1{a^2}+\frac1{b^2}+\frac2{c^2}\right)abc^2r^3\cos\varphi\sin\varphi\,dr.
> $$
>
> $K=6\iiint_V xyz\,dV$ 由于对称性，$=0$。
>
> 3）内侧上的第二型曲面积分应用 Gauss 公式时，记住要反号。化为 $\Sigma$ 内 $V$ 域积分：
> $$
> \begin{aligned}
> L &= \frac1{2500\pi}\iiint_V (x^2+y^2+z^2)\,dV\\
>   &= \frac8{2500\pi}\int_0^{\pi/2}d\theta\int_0^{\pi/2}d\varphi\int_0^5 r^4\sin\varphi\,dr = 1.
> \end{aligned}
> $$

> [!note] 注
> 本题被积函数中含有未知函数，用 Gauss 公式后，未知函数被消去，充分体现了 Gauss 公式的优越性，这是本题的特色。

> [!solution]- 解（续）
> 4）如图 7.4.19，$\Sigma$ 是无底、无盖的圆柱面（本题需补上两块），"…" 代表 $z\,dxdy+y\,dzdx+x\,dydz$。
> $$
> M = \iint_{\Sigma+\text{上盖}+\text{下底}} \ldots - \iint_{\text{上盖}} \ldots - \iint_{\text{下底}} \ldots
> = I_1-I_2-I_3
> $$
> （$\Sigma$ 取外侧，盖取上侧，底取下侧），其中
> $$
> I_1 = \iiint_V (1+1+1)\,dV
> = 3\iint_{x^2+y^2\le1} dxdy\int_0^3 dz = 9\pi,
> $$
> $$
> I_2 = 3\iint_{x^2+y^2\le1} dxdy = 3\pi,\quad I_3 = 0.
> $$
> 故
> $$
> M = 6\pi.
> $$

#### ☆7.4.14  试计算曲面积分 $I=\iint_\Sigma x^2\cos\alpha\,dS$，其中 $\Sigma$ 是 $\mathbf R^3$ 中光滑有界闭曲面，关于平面 $x=1$ 对称，内域体积为 $\dfrac12$；$\alpha$ 是 $\Sigma$ 上侧外法线方向与 $x$ 正轴的夹角。（华中科技大学）

> [!solution]- 解
> $$
> I = \iint_\Sigma x^2\,dydz = \iiint_V 2x\,dV
> = 2\iiint_V (x-1)\,dV + 2\iiint_V dV = 0 + 2\cdot\frac12 = 1.
> $$

#### ☆7.4.15  试学习如下两道试题，写出两道新试题，并给出解答：
> 1）设空间区域 $\Omega$ 由曲面 $z=a^2-x^2-y^2$ 与平面 $z=0$ 围成，其中 $a$ 为正常数，记 $\Omega$ 表面的外侧为 $S$，$\Omega$ 的体积为 $V$，求证：
> $$
> V=\oiint_S x^2yz^2\,dydz-xy^2z^2\,dzdx+z(1+xyz)\,dxdy;
> $$
> （华中科技大学）
>
> 2）设
> $$
> H=a_1x^4+a_2y^4+a_3z^4+3a_4x^2y^2+3a_5y^2z^2+3a_6x^2z^2
> $$
> 为四次齐次函数，利用齐次函数特征性质，$x\dfrac{\partial H}{\partial x}+y\dfrac{\partial H}{\partial y}+z\dfrac{\partial H}{\partial z}=4H$，计算曲面积分 $\displaystyle\oiint_S H(x,y,z)\,dS$，$S$ 是中心位于原点的单位球。（西安建筑科技大学）

> [!summary]- 参考答案
> 1）假设 $\Omega$ 是以 $z$ 轴作中轴的有界旋转体被平面 $z=0$ 切下的上半部分，$\Omega$ 的体积为 $V$，边界光滑或分片光滑（记为 $S$，$S^+$ 表示外侧），试证：
> $$
> V=\oiint_{S^+} x^2yz^2\,dydz-xy^2z^2\,dzdx+z(1+xyz)\,dxdy.
> $$
>
> 2）设 $f(x,y,z)$ 为 $n\;(n\ge1)$ 次齐次函数：$\forall t\in\mathbf R$，有
> $$
> f(tx,ty,tz)=t^n f(x,y,z)\quad(\forall(x,y,z)\in\mathbf R^3). \tag{1}
> $$
> 试证：若 $f$ 有连续二阶偏导数，对任意球面 $S$ 有
> $$
> \oiint_S f(x,y,z)\,dS=0, \tag{2}
> $$
> 则
> $$
> \Delta f=0\quad\left(\text{即 }\frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2}=0,\;\forall(x,y,z)\in\mathbf R^3\right). \tag{3}
> $$

> [!proof]- 证
> 1）应用 Gauss 公式，
> $$
> \begin{aligned}
> &\oiint_{S^+} x^2yz^2\,dydz-xy^2z^2\,dzdx+z(1+xyz)\,dxdy\\
> =&\iiint_\Omega (1+2xyz)\,dV
> = \iiint_\Omega dV + 2\iiint_\Omega xyz\,dV = V.
> \end{aligned}
> $$
> （由对称性知 $\displaystyle\iiint_\Omega xyz\,dV=0$。）（作为练习，读者将原题的被积函数也一般化。）
>
> 2）$\forall M_0(x_0,y_0,z_0)$，目标：证明 $\Delta f|_{M_0}=0$。为此，先将原点移至 $M_0$，再以 $M_0$ 为中心，$R>0$ 为半径作球面 $S$（相应球体记为 $V$）。式（1）可写为
> $$
> f\bigl(t(x-x_0),\,t(y-y_0),\,t(z-z_0)\bigr)=t^n f(x-x_0,y-y_0,z-z_0).
> $$
> 两端同时对 $t$ 求导，然后令 $t=1$，可得
> $$
> (x-x_0)f'_x+(y-y_0)f'_y+(z-z_0)f'_z=nf(x-x_0,y-y_0,z-z_0).
> $$
> 这时，对于球面 $S$ 上的任意一点 $M(x,y,z)$，$\overrightarrow{M_0M}$ 的方向余弦为
> $$
> (\cos\alpha,\cos\beta,\cos\gamma)=\left(\frac{x-x_0}{R},\frac{y-y_0}{R},\frac{z-z_0}{R}\right).
> $$
> 由式（2）可知
> $$
> \begin{aligned}
> 0 &= \oiint_S f(x,y,z)\,dS\\
>   &= \frac{R}{n}\oiint_S \left(\frac{x-x_0}{R}f'_x+\frac{y-y_0}{R}f'_y+\frac{z-z_0}{R}f'_z\right)dS\\
>   &= \frac{R}{n}\oiint_S (f'_x\cos\alpha+f'_y\cos\beta+f'_z\cos\gamma)\,dS\\
>   &\xlongequal{\text{Gauss公式}} \frac{R}{n}\iiint_V (f''_{xx}+f''_{yy}+f''_{zz})\,dV\\
>   &\xlongequal{\text{中值定理}} \frac{R}{n}(f''_{xx}+f''_{yy}+f''_{zz})_{M^*}\cdot\frac43\pi R^3
> \end{aligned}
> $$
> （$M^*$ 为 $V$ 内某点）故
> $$
> (f''_{xx}+f''_{yy}+f''_{zz})_{M^*}=\Delta f|_{M^*}=0.
> $$
> 最后令 $R\to0$，则 $M^*\to M_0$，利用 $f'_x,f'_y,f'_z$ 的连续性知 $\Delta f|_{M_0}=0$。证毕。

> [!note] 注
> 以上题目进一步凸现了 Gauss 公式的意义和作用。

#### \*7.4.16  设 $V$ 为光滑曲面 $S$ 所围的有界区域，$u,v$ 在 $V+S$ 上有直到二阶连续偏导数。记 $\Delta u\equiv\dfrac{\partial^2u}{\partial x^2}+\dfrac{\partial^2u}{\partial y^2}+\dfrac{\partial^2u}{\partial z^2}$，$\boldsymbol n$ 表示 $S$ 外法线方向，试证：
> $$
> \iiint_V v\Delta u\,dxdydz=-\iiint_V\left(\frac{\partial u}{\partial x}\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}\frac{\partial v}{\partial y}+\frac{\partial u}{\partial z}\frac{\partial v}{\partial z}\right)dxdydz+\oiint_S v\frac{\partial u}{\partial\boldsymbol n}\,dS.
> $$
> 并由此证明，若 $u$ 在 $V$ 内为调和函数（$\Delta u=0$ 于 $V$ 内），则 $u$ 被它在边界 $S$ 上的值唯一确定。

> [!tip]- 提示
> 参看上节练习 7.3.18 及其提示，再提示。

#### \*7.4.17  证明空间第二 Green 公式：
> $$
> \iiint_V \begin{vmatrix}\Delta u&\Delta v\\u&v\end{vmatrix}dxdydz
> =\oiint_S \begin{vmatrix}\dfrac{\partial u}{\partial\boldsymbol n}&\dfrac{\partial v}{\partial\boldsymbol n}\\u&v\end{vmatrix}dS,
> $$
> 式中 $V$ 为曲面 $S$ 所围的区域，$\boldsymbol n$ 是曲面 $S$ 的外法向量，函数 $u=u(x,y,z),v=v(x,y,z)$ 为 $V+S$ 上可微分两次的函数。
>
> 进而证明，若 $u=u(x,y,z)$ 为 $V$ 内之调和函数，则
>
> 1）$\displaystyle u(x,y,z)=\frac1{4\pi}\oiint_S\left\{u\frac{\cos(\boldsymbol r,\boldsymbol n)}{r^2}+\frac1r\frac{\partial u}{\partial\boldsymbol n}\right\}dS$，其中 $r=\sqrt{(\xi-x)^2+(\eta-y)^2+(\zeta-z)^2}$，$(x,y,z)\in V$ 为内点，$\boldsymbol n$ 为 $S$ 在 $(\xi,\eta,\zeta)$ 点的单位外法向量；
>
> 2）$\forall(x,y,z)\in V$，以及 $V$ 内以 $(x,y,z)$ 为中心，$R$ 为半径的任意球面 $S$，有
> $$
> u(x,y,z)=\frac1{4\pi R^2}\oiint_S u(\xi,\eta,\zeta)\,dS.
> $$

> [!tip]- 提示
> 可参看上节练习 7.3.19。

#### 7.4.18  设 $S$ 为光滑或分片光滑的封闭曲面，$P,Q,R$ 在 $S$ 所包围的区域 $V$ 内（直到边界）连续，有连续的偏导数，证明：
> $$
> \oiint_S \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> P & Q & R
> \end{vmatrix} dS = 0,
> $$
> 其中 $\cos\alpha,\cos\beta,\cos\gamma$ 为 $S$ 的法向量的方向余弦。

> [!tip]- 提示
> 左端 $\xlongequal{\text{Gauss公式}} \displaystyle\iiint_V\bigl[(R''_{yx}-Q''_{zx})+(P''_{zy}-R''_{xy})+(Q''_{xz}-P''_{yz})\bigr]dV=0$。

### Stokes 公式的应用

#### ☆7.4.19  试计算积分 $\displaystyle I=\oint_{L^+}(z-y)\,dx+(x-z)\,dy+(y-x)\,dz$，其中 $L^+$ 是从 $A(a,0,0)$ 经 $B(0,a,0)$ 到 $C(0,0,a)$ 再回到 $A(a,0,0)$ 的三角形。

> [!solution]- 解 I
> 如图 7.4.20，$\Sigma^+$ 表示 $\triangle ABC$ 所围平面块之上侧，则
> $$
> I = \iint_{\Sigma^+}
> \begin{vmatrix}
> dydz & dzdx & dxdy\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> z-y & x-z & y-x
> \end{vmatrix}
> = 2\iint_{\Sigma^+} (dydz+dzdx+dxdy)
> $$
>
> 轮换对称性：
> $$
> I = 3\cdot2\iint_{\triangle OAB} dxdy = 3a^2.
> $$

> [!solution]- 解 II
> $\Sigma:F\equiv x+y+z-a=0$，$(F'_x,F'_y,F'_z)=(1,1,1)$。因此法线的方向余弦
> $$
> (\cos\alpha,\cos\beta,\cos\gamma)=\left(\frac1{\sqrt3},\frac1{\sqrt3},\frac1{\sqrt3}\right),
> $$
> $$
> I = \iint_{\Sigma^+}
> \begin{vmatrix}
> \cos\alpha & \cos\beta & \cos\gamma\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> z-y & x-z & y-x
> \end{vmatrix} dS
> = 3\cdot\frac{2}{\sqrt3}\iint_{\Sigma^+} dS = 3a^2.
> $$

#### 7.4.20  计算积分 $\displaystyle I=\oint_{L^+}(y^2+z^2)\,dx+(x^2+z^2)\,dy+(x^2+y^2)\,dz$，其中 $L$ 是曲面 $x^2+y^2+z^2=4x$ 与 $x^2+y^2=2x$ 的交线 $z\ge0$ 的部分，积分方向从原点进入第一象限。（清华大学）

> [!tip]- 提示
> 用 Stokes 公式转化为第一型曲面积分，并用对称性。

> [!solution]- 解 I
> 如图 7.4.21，$S_1$ 表示大球面上方 $L$ 所围的部分（上侧），即
> $$
> S:F=(x-2)^2+y^2+z^2-4=0.
> $$
>
> 法向量：$\dfrac12(F'_x,F'_y,F'_z)=(x-2,y,z)$。
>
> 单位法向量：$\boldsymbol n_1=(\cos\alpha,\cos\beta,\cos\gamma)=\left(\dfrac{x-2}{2},\dfrac{y}{2},\dfrac{z}{2}\right)$。
> $$
> \begin{aligned}
> I &= -\iint_{S_1^+}
> \begin{vmatrix}
> \dfrac{x-2}{2} & \dfrac{y}{2} & \dfrac{z}{2}\\[4pt]
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> y^2+z^2 & z^2+x^2 & x^2+y^2
> \end{vmatrix} dS\\
>   &= -\iint_{S_1^+}\bigl[(y-z)(x-2)+(z-x)y+(x-y)z\bigr] dS\\
>   &\xlongequal{\text{对称性}} 2\iint_{S_1^+}(-z)\,dS
>   = -2\iint_{(x-1)^2+y^2\le1} z\cdot\frac1{z/2}\,dxdy = -4\pi.
> \end{aligned}
> $$

> [!solution]- 解 II
> （利用对称性，极坐标化为定积分。）因曲线 $L$ 关于 $xOz$ 平面对称，且在对称点上被积函数的值相等，而 $dx$ 符号相反，故 $\displaystyle\oint_{L^+}(y^2+z^2)dx=0$。类似地，$\displaystyle\oint_{L^+}(x^2+y^2)dz=0$。因此有
> $$
> I = \oint_{L^+}(z^2+x^2)\,dy.
> $$
>
> 由 $L$ 上：$x^2+y^2=2x$，$r=2\cos\theta$，$x=2\cos^2\theta$；$z^2=2x=4\cos^2\theta$，得 $z=2\cos\theta$；由 $y^2=2x-x^2=4\cos^2\theta\sin^2\theta$，得 $y=2\sin\theta\cos\theta$。故
> $$
> I = -\int_{\pi/2}^{-\pi/2}\bigl[(4\cos^2\theta+4\cos^4\theta)\cdot2(\cos^2\theta-\sin^2\theta)\bigr]d\theta = -4\pi.
> $$

#### ☆7.4.21  计算积分 $\displaystyle I=\oint_{L^+}y\,dx+z\,dy+x\,dz$，其中 $L^+$ 为圆周 $x^2+y^2+z^2=a^2\;(a>0)$，$x+y+z=0$，从 $z$ 轴 $+\infty$ 处看为逆时针方向。

> [!tip]- 提示
> 可用 Stokes 公式化为第一（或第二）型曲面积分，也可用参数方程化为定积分。

> [!solution]- 解 I
> 如图 7.4.22，$\Sigma^+$ 表示 $L$ 所围平面圆（上侧），
> $$
> I = \iint_{\Sigma^+}
> \begin{vmatrix}
> dydz & dzdx & dxdy\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> y & z & x
> \end{vmatrix}
> = \iint_{\Sigma^+} (-dydz-dzdx-dxdy)
> $$
>
> 轮换对称性：
> $$
> I = -3\iint_{\Sigma^+} dxdy = -3\iint_{\Delta} dxdy,
> $$
> 其中 $\Delta$ 是 $\Sigma^+$ 在 $xOy$ 平面的投影区域：$x^2+y^2+xy\le\dfrac{a^2}{2}$。令 $x=\dfrac{\xi-\eta}{\sqrt2},\;y=\dfrac{\xi+\eta}{\sqrt2}$，则 $J=1$，$\Delta'=\{(\xi,\eta)\mid3\xi^2+\eta^2\le a^2\}$。故
> $$
> I = -3\cdot S_{\Delta'} = -3\cdot\frac1{\sqrt3}a^2\pi = -\sqrt3\,\pi a^2.
> $$

> [!solution]- 解 II
> $\Sigma^+:F=x+y+z=0$，$(F'_x,F'_y,F'_z)=(1,1,1)$，
> $$
> (\cos\alpha,\cos\beta,\cos\gamma)=\left(\frac1{\sqrt3},\frac1{\sqrt3},\frac1{\sqrt3}\right).
> $$
>
> 故
> $$
> I = \iint_{\Sigma^+}
> \begin{vmatrix}
> \frac1{\sqrt3} & \frac1{\sqrt3} & \frac1{\sqrt3}\\
> \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
> y & z & x
> \end{vmatrix} dS
> = \iint_{\Sigma^+} 3\cdot(-1)\cdot\frac1{\sqrt3}\,dS = -\sqrt3\iint_{\Sigma^+} dS = -\sqrt3\,\pi a^2.
> $$

> [!solution]- 解 III
> 如解 I，$L$ 的方程消去 $z$：$x^2+y^2+xy=\dfrac{a^2}{2}$。令 $x=\dfrac{\xi-\eta}{\sqrt2},\;y=\dfrac{\xi+\eta}{\sqrt2}$，化为 $3\xi^2+\eta^2=a^2$。引入广义极坐标：$\xi=\dfrac{a}{\sqrt3}\cos\theta,\;\eta=a\sin\theta$，得
> $$
> \begin{aligned}
> x &= \frac{a}{\sqrt2}\left(\frac1{\sqrt3}\cos\theta-\sin\theta\right),\\
> y &= \frac{a}{\sqrt2}\left(\frac1{\sqrt3}\cos\theta+\sin\theta\right),\\
> z &= -x-y = \frac{a}{\sqrt2}\left(-\frac{2}{\sqrt3}\cos\theta\right).
> \end{aligned}
> $$
> 代入得
> $$
> \begin{aligned}
> I &= \frac{a^2}{2}\int_0^{2\pi}\Bigl[
> \left(\frac1{\sqrt3}\cos\theta+\sin\theta\right)\left(-\frac1{\sqrt3}\sin\theta-\cos\theta\right)\\
> &\qquad +\left(-\frac{2}{\sqrt3}\cos\theta\right)\left(-\frac1{\sqrt3}\sin\theta+\cos\theta\right)\\
> &\qquad +\left(\frac1{\sqrt3}\cos\theta-\sin\theta\right)\frac{2}{\sqrt3}\sin\theta\Bigr]d\theta\\
> &= -\sqrt3\,\pi a^2.
> \end{aligned}
> $$

#### 7.4.22  设 $L$ 是平面 $x\cos\alpha+y\cos\beta+z\cos\gamma-p=0$ 上逐段光滑的封闭曲线，$L$ 所围面积为 $S$，$(\cos\alpha,\cos\beta,\cos\gamma)$ 是平面法线的方向余弦，$L^+$ 与法线成右手系。试计算积分
> $$
> I = \oint_{L^+}
> \begin{vmatrix}
> dx & dy & dz\\
> \cos\alpha & \cos\beta & \cos\gamma\\
> x & y & z
> \end{vmatrix}.
> $$

> [!tip]- 提示
> 应用 Stokes 公式后，$I=2\iint_S(\cos^2\alpha+\cos^2\beta+\cos^2\gamma)\,dS=2S$。（单位法向量的数量积 $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=\boldsymbol n\cdot\boldsymbol n=1$。）

#### ☆7.4.23  设 $L$ 为空间某封闭光滑曲线，$P,Q,R$ 为空间中具有一阶连续偏导数的函数，证明：
> $$
> \left|\oint_{L^+}P\,dx+Q\,dy+R\,dz\right|
> \le \max_{(x,y,z)\in S}\sqrt{\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)^2+\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)^2+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)^2}\cdot S,
> $$
> 其中 $S$ 表示 $L$ 上展开的（以 $L$ 为边界的）某曲面，同时也用它表示曲面的面积。

> [!tip]- 提示
> 用 Cauchy 不等式。

> [!tip]- 再提示
> 左端 $\xlongequal{\text{Stokes公式}}$
> $$
> \iint_S\big[(R'_y-Q'_z)\cos\alpha+(P'_z-R'_x)\cos\beta+(Q'_x-P'_y)\cos\gamma\big]dS
> $$
> $$
> \le \iint_S\sqrt{(R'_y-Q'_z)^2+(P'_z-R'_x)^2+(Q'_x-P'_y)^2}\;\sqrt{\cos^2\alpha+\cos^2\beta+\cos^2\gamma}\;dS
> $$
> $$
> \le \max_{(x,y,z)\in S}\sqrt{(R'_y-Q'_z)^2+(P'_z-R'_x)^2+(Q'_x-P'_y)^2}\cdot\iint_S dS = \text{右端}.
> $$

#### 7.4.24  试证 $\displaystyle\oint_{L^+}P\,dx+Q\,dy+R\,dz=\int_L\sqrt{P^2+Q^2+R^2}\cos\theta\,ds$，其中 $\theta$ 表示曲线 $L^+$ 的切线与方向 $(P,Q,R)$ 的夹角。

> [!tip]- 提示
> 曲线 $L:x=x(t),\;y=y(t),\;z=z(t)$，当 $t$ 变到 $t+\Delta t$ 时，坐标改变量记为 $\Delta x,\Delta y,\Delta z$，那么对应的割线方程可写为（用 $(X,Y,Z)$ 表示割线上的动点坐标）
> $$
> \frac{X-x}{\Delta x/\Delta t}=\frac{Y-y}{\Delta y/\Delta t}=\frac{Z-z}{\Delta z/\Delta t}.
> $$
> 当 $\Delta t\to0$ 时，割线的极限位置就是 $(x,y,z)$ 处的切线。所以切线方程是
> $$
> \frac{X-x}{x'(t)}=\frac{Y-y}{y'(t)}=\frac{Z-z}{z'(t)},
> $$
> 亦即
> $$
> \frac{X-x}{dx}=\frac{Y-y}{dy}=\frac{Z-z}{dz}.
> $$
> 说明：$(dx,dy,dz)$ 可视为切线向量。因此 $(P,Q,R)$ 与 $(dx,dy,dz)$ 的夹角就是 $\theta$，故两者的数量积是
> $$
> P\,dx+Q\,dy+R\,dz=(P,Q,R)\cdot(dx,dy,dz)
> =\sqrt{P^2+Q^2+R^2}\cdot\sqrt{dx^2+dy^2+dz^2}\cos\theta
> =\sqrt{P^2+Q^2+R^2}\cos\theta\,ds\qquad(\text{因为 }ds=\sqrt{dx^2+dy^2+dz^2}).
> $$
> 此式两端同时在曲线 $L^+$ 上取积分，即得欲证的等式。

#### \*\*7.4.25  设函数 $u=u(x,y,z)$ 在 $\mathbf R^3$ 上有连续的二阶偏导数，满足波动方程：
> $$
> u''_{zz}=u''_{xx}+u''_{yy}. \tag{1}
> $$
> 令
> $$
> I=\iint_S -2u'_x u'_z\,dydz-2u'_y u'_z\,dzdx+(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy,
> $$
> 试证：
>
> 1）对于 $\mathbf R^3$ 中任意逐片光滑封闭曲面 $S$，恒有 $I=0$；
>
> 2）若在 $xOy$ 平面上：$u'_z=0,\;u=0$，那么
>　　i）若 $S=S_1$（$S_1$ 是 $xOy$ 平面上任一封闭区域），则 $I=0$；
>　　ii）若 $S=S_2$（$S_2$ 是平行于 $xOy$ 平面的任一平面区域，取上侧），则 $I\ge0$；
>　　iii）若 $S=A^+$（$A$ 是圆锥面 $(a-z)^2=x^2+y^2\;(0\le z\le a)$，$A^+$ 是 $A$ 的外侧），则 $I\ge0$；
>　　iv）若在锥面 $A$ 上 $u'_z=0$；底圆 $\Sigma_0:x^2+y^2\le a^2\;(a>0)$ 上：$u'_z=0,\;u=0$，则在锥体 $V_0:(a-z)^2\ge x^2+y^2\;(0\le z\le a)$ 内恒有 $u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2}=0$ 和 $u=0$；
>
> 3）（解的唯一性）设 $u_1,u_2$ 都是波动方程的解，则必然 $u_1=u_2$。详细说：假设函数 $u_1(x,y,z)$ 和 $u_2(x,y,z)$ 有连续的二阶偏导数，在内部满足（非齐次）波动方程：
> $$
> u''_{zz}-(u''_{xx}+u''_{yy})=f(x,y,z)\qquad(\forall (x,y,z)\in V_0,\;V_0\text{ 如 }2)\text{中 iv)表示});
> $$
> 在侧面上：$u'_z(x,y,z)=g(x,y,z)\;(\forall (x,y,z)\in A)$；底面上：$u(x,y,0)=\varphi(x,y),\;u'_z(x,y,0)=\psi(x,y)$，则 $u_1=u_2$。

> [!proof]- 证
> 1）应用 Gauss 公式，原曲面积分（$V$ 表示 $S$ 包围的区域）：
> $$
> \begin{aligned}
> I &= \iiint_V \bigl(-2u''_x u''_{xz} - 2u''_y u''_{yz} - 2u''_z u''_{zz} + 2u''_x u''_{xz} + 2u''_y u''_{yz} + 2u''_z u''_{zz}\bigr) dV\\
>   &= \iiint_V 2u'_z\bigl(-u''_{xx} - u''_{yy} + u''_{zz}\bigr) dV \overset{\text{式(1)}}{=} 0.
> \end{aligned}
> $$
>
> 2）在 $S_1$ 和 $S_2$ 上：$dydz=dzdx=0$；在 $xOy$ 平面上，$u=0$（所以 $u'_x=u'_y=0$），且 $u'_z=0$。故
>　　i）当 $S=S_1$ 时：
> $$
> I = \iint_{S_1}\bigl(-2u'_x u'_z\,dydz-2u'_y u'_z\,dzdx+(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy\bigr)=0.
> $$
>　　ii）当 $S=S_2$ 时：
> $$
> I = \iint_{S_2^+}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy \ge 0\qquad(S_2^+\text{ 表示 }S_2\text{ 的上侧}).
> $$
>　　iii）当 $S=A^+$ 时：记
> $$
> F = -2u'_x u'_z\,dydz-2u'_y u'_z\,dzdx+(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy.
> $$
> 锥面 $A$ 外侧可看成：锥体 $V_0$ 外表面减去底面 $\Sigma_0$（下侧）。根据已证的 1）：$\displaystyle\iint_{V_0\text{外表面}}F=0$，故
> $$
> I = \iint_{A^+}F = \iint_{V_0\text{外表面}}F - \iint_{\Sigma_0\text{下侧}}F
> = -\iint_{\Sigma_0\text{下侧}}F = \iint_{\Sigma_0\text{上侧}}F \ge 0.
> $$
>　　iv）用平面 $z=t$ 截锥体 $V_0$，在 $V_0$ 内所得截面记为 $\Sigma_t$。记
> $$
> E(t)=\iint_{\Sigma_t\text{上侧}}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy, \tag{2}
> $$
> 则 $\Sigma_0$ 上侧的积分
> $$
> \iint_{\Sigma_0\text{上侧}}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy = E(0) \overset{\text{i)}}{=} 0. \tag{3}
> $$
> （下面来证当 $0\le t\le a$ 时，$E'(t)\le0$（即 $E(t)$ 为减函数），进而 $E(t)=0$。）为了方便，
> $$
> u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2}\stackrel{\text{记}}{=} w(x,y,z). \tag{4}
> $$
> 其中 $(x,y,z)$ 替换为柱面坐标：$x=r\cos\theta,\;y=r\sin\theta,\;z=t$，则截面
> $$
> \Sigma_t=\{(x,y,z)\mid 0\le\sqrt{x^2+y^2}\le a-t,\;z=t\}
> =\{(r,\theta,z)\mid 0\le r\le a-t,\;0\le\theta\le2\pi,\;z=t\}.
> $$
> 对式(2)求导得
> $$
> \begin{aligned}
> E'(t) &= \frac{d}{dt}\iint_{\Sigma_t\text{上侧}}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy\\
> &= \frac{d}{dt}\int_0^{a-t} r\,dr\int_0^{2\pi}w(r\cos\theta,r\sin\theta,t)\,d\theta\\
> &= -\int_0^{2\pi}w\bigl((a-t)\cos\theta,(a-t)\sin\theta,t\bigr)(a-t)\,d\theta
>    + \int_0^{a-t} r\,dr\int_0^{2\pi}\frac{\partial}{\partial t}w(r\cos\theta,r\sin\theta,t)\,d\theta
> \end{aligned}
> $$
> 记为 $A+B$。
>
> （用 $\partial\Sigma_t$ 表示截面 $\Sigma_t$ 的边界（圆），$\partial\Sigma_t\subset A$，因此 $\partial\Sigma_t$ 上 $u'_z=0$。）（$0\le t\le a$）。上式中
> $$
> A = -\int_0^{2\pi}w\bigl((a-t)\cos\theta,(a-t)\sin\theta,t\bigr)(a-t)\,d\theta
> \overset{\text{式(4)}}{=} -\oint_{\partial\Sigma_t}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,ds \le 0,
> $$
> $$
> B = -\iint_{\Sigma_t\text{上侧}}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})'_t\,dxdy,
> $$
> 其被积函数
> $$
> (u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})'_t
> = 2u'_x u''_{xz}+2u'_y u''_{yz}+2u'_z u''_{zz}
> \overset{\text{式(1)}}{=} 2\big[(u'_x u'_z)_x+(u'_y u'_z)_y\big].
> $$
> 故
> $$
> B = -2\iint_{\Sigma_t\text{上侧}}\big[(u'_x u'_z)_x+(u'_y u'_z)_y\big]dxdy
> = -2\oint_{\partial\Sigma_t}(u'_x u'_z\,dx+u'_y u'_z\,dy)=0\quad(\text{因为 }u'_z=0).
> $$
> 所以当 $0\le t\le a$ 时，$E'(t)=A+B=A\le0$。当 $0\le t\uparrow$ 时，$E\downarrow$，而 $E(0)\overset{(3)}{=}0$，因此当 $t>0$ 时，$E(t)\le0$。
>
> 但是在（ii）中已证明 $E(t)\ge0$，故 $E(t)=0\;(0\le t\le a)$。由式(2)知
> $$
> E(t)=\iint_{\Sigma_t\text{上侧}}(u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2})\,dxdy=0,
> $$
> 因而 $\Sigma_t$ 上 $u_x^{\prime2}+u_y^{\prime2}+u_z^{\prime2}\equiv0$。亦即 $u'_x=u'_y=u'_z=0$，$u$ 常数 $=u|_{\Sigma_0}=0$。
>
> 3）由题设，令 $u=u_1-u_2$，则 $u$ 满足 iii）和 iv）中的全部条件，因此利用上面的结论，可知在锥体 $V_0$ 上处处有 $u=u_1-u_2=0$，亦即 $u_1\equiv u_2$（解的唯一性）。证毕。

> [!note] 注
> 1）二维波动方程的一般形式是 $u''_{tt}=a^2(u''_{xx}+u''_{yy})$（$a>0$）。此时，锥面的母线与中轴线的夹角为 $\alpha=\tan^{-1}a$。（特别：当 $a=1$ 时 $\alpha=45^\circ$，才是第 2）题 iv)中的圆锥面）。
>
> 2）以上结论不难推广到 $n$ 维空间。
>
> 3）平静的水面，丢入一石块，圆形波纹会等速放大，加入时间，此过程就是一个以时间 $t$ 作中轴的圆锥面；宇宙大爆炸，波面是无限膨胀球面，加入时间是一个四维的锥面，不难理解，上述问题为什么要在锥面内进行讨论。
>
> 4）波动方程的相关理论，在气象、地震、声学、电磁学、流体力学等诸多领域里有重要应用。


## §7.5　场论
导读　场论一般只要求学生掌握基本概念，熟悉几个基本符号，历来这类考题较少，近期更少，建议读者以正文例题为主，习题机动。
本节主要讨论如何应用梯度、散度和旋度的定义来证明它们的各种公式。然后讨论这些公式的一些应用。最后讨论保守场、有势场、无旋场、管量场的关系及基本性质。



### 一、利用梯度、散度和旋度的定义直接证明有关公式

> [!note] 要点
> 1）Hamilton 算符
> $$
> \nabla\equiv\left(\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right)\equiv i\frac{\partial}{\partial x}+j\frac{\partial}{\partial y}+k\frac{\partial}{\partial z}
> $$
> 是一个向量算符，它本身没有实际意义，只有作用在它后面的量（数量或向量）上，才有实际意义。它的运算遵从向量的运算法则。
>
> 2）利用 Hamilton 算符，可以写出梯度、散度和旋度的定义：
> 设 $u=u(x,y,z)$ 为光滑的数量场（“光滑”指 $u(x,y,z)$ 有连续偏导数），
> $$
> A=P(x,y,z)i+Q(x,y,z)j+R(x,y,z)k
> $$
> 为光滑向量场（“光滑”指 $P,Q,R$ 有连续偏导数），则由 $u$ 和 $A$ 产生的梯度、散度和旋度为
>
> （梯度）$\operatorname{grad}u\equiv\nabla u\equiv\left(\frac{\partial u}{\partial x},\frac{\partial u}{\partial y},\frac{\partial u}{\partial z}\right)\equiv\frac{\partial u}{\partial x}i+\frac{\partial u}{\partial y}j+\frac{\partial u}{\partial z}k$，
>
> （散度）$\operatorname{div}A\equiv\nabla\cdot A=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}$，
>
> （旋度）$\operatorname{rot}A\equiv\nabla\times A$
> $$
> =\begin{vmatrix}
> i&j&k\\
> \frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\
> P&Q&R
> \end{vmatrix}
> $$
> $$
> =\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)
> $$
> $$
> =\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)i+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)j+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)k。
> $$
> 利用这些定义，我们可以直接推证关于它们的各种公式和求它们的值。


#### a．数量等式

例7.5.1　设
$$
a=a_x(x,y,z)i+a_y(x,y,z)j+a_z(x,y,z)k,
$$
$$
b=b_x(x,y,z)i+b_y(x,y,z)j+b_z(x,y,z)k,
$$
试证：
$$
(b\cdot\nabla)\varphi a=a(b\cdot\nabla\varphi)+\varphi(b\cdot\nabla)a,
$$
其中 $a_x,a_y,a_z,b_x,b_y,b_z$ 及 $\varphi$ 都是 $(x,y,z)$ 的可微函数。（安徽大学）

> [!solution]- 解
> $(b\cdot\nabla)\varphi a$
> $$
> =\left(b_x\frac{\partial}{\partial x}+b_y\frac{\partial}{\partial y}+b_z\frac{\partial}{\partial z}\right)(\varphi a_x i+\varphi a_y j+\varphi a_z k)
> $$
> $$
> =\left(b_x\frac{\partial(\varphi a_x)}{\partial x}+b_y\frac{\partial(\varphi a_x)}{\partial y}+b_z\frac{\partial(\varphi a_x)}{\partial z}\right)i
> $$
> $$
> +\left(b_x\frac{\partial(\varphi a_y)}{\partial x}+b_y\frac{\partial(\varphi a_y)}{\partial y}+b_z\frac{\partial(\varphi a_y)}{\partial z}\right)j
> $$
> $$
> +\left(b_x\frac{\partial(\varphi a_z)}{\partial x}+b_y\frac{\partial(\varphi a_z)}{\partial y}+b_z\frac{\partial(\varphi a_z)}{\partial z}\right)k
> $$
> $$
> =(b\cdot\nabla\varphi)(a_x i+a_y j+a_z k)+\varphi\big[(b\cdot\nabla a_x)i+(b\cdot\nabla a_y)j+(b\cdot\nabla a_z)k\big]
> $$
> $$
> =(b\cdot\nabla\varphi)a+\varphi(b\cdot\nabla)a。
> $$


#### b．向量等式

> [!example] 例7.5.2
> 证明：当 $|a|^2\equiv$ 常数时，有
> $$
> (a\cdot\nabla)a=-a\times\operatorname{rot}a。\tag{1}
> $$


> [!proof]- 证
> $|a|^2\equiv$ 常数，即有
> $$
> a_x^2+a_y^2+a_z^2\equiv C\quad（常数）。
> $$
> 此式两端同时对 $x,y,z$ 分别求导可得
> $$
> a_x\frac{\partial a_x}{\partial x}+a_y\frac{\partial a_y}{\partial x}+a_z\frac{\partial a_z}{\partial x}=0,\tag{2}
> $$
> $$
> a_x\frac{\partial a_x}{\partial y}+a_y\frac{\partial a_y}{\partial y}+a_z\frac{\partial a_z}{\partial y}=0,\tag{3}
> $$
> $$
> a_x\frac{\partial a_x}{\partial z}+a_y\frac{\partial a_y}{\partial z}+a_z\frac{\partial a_z}{\partial z}=0。\tag{4}
> $$
> 式(1)是向量等式，其左端
> $$
> (a\cdot\nabla)a=
> \left(a_x\frac{\partial}{\partial x}+a_y\frac{\partial}{\partial y}+a_z\frac{\partial}{\partial z}\right)(a_x i+a_y j+a_z k)
> $$
> $$
> =\left(a_x\frac{\partial a_x}{\partial x}+a_y\frac{\partial a_x}{\partial y}+a_z\frac{\partial a_x}{\partial z}\right)i
> $$
> $$
> +\left(a_x\frac{\partial a_y}{\partial x}+a_y\frac{\partial a_y}{\partial y}+a_z\frac{\partial a_y}{\partial z}\right)j
> $$
> $$
> +\left(a_x\frac{\partial a_z}{\partial x}+a_y\frac{\partial a_z}{\partial y}+a_z\frac{\partial a_z}{\partial z}\right)k,\tag{5}
> $$
> 式(1)右端
> $$
> -a\times\operatorname{rot}a=-a\times
> \begin{vmatrix}
> i&j&k\\
> \frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\
> a_x&a_y&a_z
> \end{vmatrix}
> $$
> $$
> =-\begin{vmatrix}
> i&j&k\\
> a_x&a_y&a_z\\
> \frac{\partial a_z}{\partial y}-\frac{\partial a_y}{\partial z}&\frac{\partial a_x}{\partial z}-\frac{\partial a_z}{\partial x}&\frac{\partial a_y}{\partial x}-\frac{\partial a_x}{\partial y}
> \end{vmatrix}.\tag{6}
> $$
> 要证明式(1)，只要证明三分量对应相等。由式(6)知：式(1)右端的 $i$ 分量为
> $$
>  a_y\left(\frac{\partial a_z}{\partial y}-\frac{\partial a_y}{\partial x}\right)+a_z\left(\frac{\partial a_x}{\partial z}-\frac{\partial a_x}{\partial x}\right)
> $$
> $$
> = a_x\frac{\partial a_x}{\partial x}+a_y\frac{\partial a_x}{\partial y}+a_z\frac{\partial a_x}{\partial z}\qquad（因为式(2)）
> $$
> $$
> =式(1)左端的 $i$ 分量（因为式(5)）。
> $$
> 类似可证式(1)左、右两端的 $j,k$ 分量相等。


#### c．旋度和散度

例7.5.3　刚体以定常角速度 $\omega$ 绕子轴旋转，求刚体上任意一点 $r=(x,y,z)$ 处的线速度 $V$ 与加速度 $W$ 的旋度与散度。

> [!solution]- 解
> 以向量 $\omega=\omega k$ 表示角速度，则绕子轴旋转的线速度
> $$
> V=\omega\times r=
> \begin{vmatrix}
> i&j&k\\
> 0&0&\omega\\
> x&y&z
> \end{vmatrix}
> =(-\omega y,\omega x,0),
> $$
> 线加速度
> $$
> W=\frac{d}{dt}V=\frac{d}{dt}(\omega\times r)=\left(\frac{d\omega}{dt}\right)\times r+\omega\times\frac{dr}{dt}
> $$
> $$
> =\omega\times\frac{dr}{dt}=\omega\times V\qquad（因为 $\omega=\omega k$ 为常向量）。
> $$
> $$
> =
> \begin{vmatrix}
> i&j&k\\
> 0&0&\omega\\
> -\omega y&\omega x&0
> \end{vmatrix}
> =(-\omega^2x,-\omega^2y,0).
> $$
> 由此
> $$
> \operatorname{rot} V=\nabla \times V=
> \begin{vmatrix}
> i&j&k\\
> \partial/\partial x&\partial/\partial y&\partial/\partial z\\
> -\omega y&\omega x&0
> \end{vmatrix}
> =(0,0,2\omega)=2\omega.
> $$
> $$
> \operatorname{div} V=\nabla\cdot V=(\partial/\partial x,\partial/\partial y,\partial/\partial z)(-\omega y,\omega x,0)=0.
> $$
> 类似可得
> $$
> \operatorname{rot} W=0,\quad \operatorname{div} W=-2\omega^2.
> $$

例7.5.4  设 $A=(A_x,A_y,A_z)$, $B=(B_x,B_y,B_z)$ 为两光滑场，试证：

$$
\operatorname{grad}(A\cdot B)=B\times(\operatorname{rot} A)+A\times(\operatorname{rot} B)+(B\cdot\nabla)A+(A\cdot\nabla)B. \tag{1}
$$

> [!proof]- 证
> 式(1)即为
> $$
> (i\partial/\partial x+j\partial/\partial y+k\partial/\partial z)(A_xB_x+A_yB_y+A_zB_z)
> $$
> $$
> =
> \begin{vmatrix}
> i&j&k\\
> B_x&B_y&B_z\\
> \operatorname{rot}_x A&\operatorname{rot}_y A&\operatorname{rot}_z A
> \end{vmatrix}
> +
> \begin{vmatrix}
> i&j&k\\
> A_x&A_y&A_z\\
> \operatorname{rot}_x B&\operatorname{rot}_y B&\operatorname{rot}_z B
> \end{vmatrix}
> $$
> $$
> +(B_x\partial/\partial x+B_y\partial/\partial y+B_z\partial/\partial z)(A_x i+A_y j+A_z k)
> $$
> $$
> +(A_x\partial/\partial x+A_y\partial/\partial y+A_z\partial/\partial z)(B_x i+B_y j+B_z k).
> $$
> 就 $i$ 分量而论，此式即为
> $$
> \frac{\partial}{\partial x}(A_xB_x+A_yB_y+A_zB_z)
> $$
> $$
> =
> \begin{vmatrix}
> B_y&B_z\\
> \partial A_x/\partial z-\partial A_z/\partial x&\partial A_y/\partial x-\partial A_x/\partial y
> \end{vmatrix}
> +
> \begin{vmatrix}
> A_y&A_z\\
> \partial B_x/\partial z-\partial B_z/\partial x&\partial B_y/\partial x-\partial B_x/\partial y
> \end{vmatrix}
> $$
> $$
> +B_x\frac{\partial A_x}{\partial x}+B_y\frac{\partial A_y}{\partial x}+B_z\frac{\partial A_z}{\partial x}
> +A_x\frac{\partial B_x}{\partial x}+A_y\frac{\partial B_y}{\partial x}+A_z\frac{\partial B_z}{\partial x}.
> $$
> 利用微分法则，易知此式成立。同理可验证 $j,k$ 分量的情况。


### 二、梯度、散度、旋度的基本公式及其应用

利用上段的方法，我们可以证明如下的基本公式（假定出现的导数皆存在、连续）：

Hamilton 算符  $\nabla \equiv (\partial/\partial x,\ \partial/\partial y,\ \partial/\partial z) = \boldsymbol{i}\partial/\partial x + \boldsymbol{j}\partial/\partial y + \boldsymbol{k}\partial/\partial z$.

Laplace 算符  $\Delta = \partial^2/\partial x^2 + \partial^2/\partial y^2 + \partial^2/\partial z^2$.

$\nabla^2 \equiv \nabla\cdot\nabla \equiv \Delta$.

$f$ 为函数，则 $\Delta f$ 为标量。
若 $\boldsymbol{A} = (A_x, A_y, A_z)$ 是向量，则 $\Delta\boldsymbol{A} = (\Delta A_x, \Delta A_y, \Delta A_z)$ 为向量。

#### 关于梯度的公式

这里 $u, v, f$ 都是 $(x, y, z)$ 的函数，有连续偏导数，$c$ 为常数，

$\boldsymbol{r} = (x - x_0,\ y - y_0,\ z - z_0)$,  $r = \sqrt{(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2}$.

1) $\operatorname{grad}(cu) = c\operatorname{grad}u$，亦或 $\nabla(cu) = c\nabla u$；

2) $\operatorname{grad}(u \pm v) = \operatorname{grad}u \pm \operatorname{grad}v$，亦或 $\nabla(u \pm v) = \nabla u \pm \nabla v$；

3) $\operatorname{grad}(uv) = v\operatorname{grad}u + u\operatorname{grad}v$，亦或 $\nabla(uv) = v\nabla u + u\nabla v$；

4) $\operatorname{grad}(u/v) = \dfrac{1}{v^2}(v\operatorname{grad}u - u\operatorname{grad}v)$，亦或 $\nabla(u/v) = \dfrac{1}{v^2}(v\nabla u - u\nabla v)$；

5) $\operatorname{grad}f(u) = f'(u)\operatorname{grad}u$，亦或 $\nabla f(u) = f'(u)\nabla u$；

6) $\operatorname{grad}f(u, v) = f'_u\operatorname{grad}u + f'_v\operatorname{grad}v$，亦或 $\nabla f(u, v) = f'_u\nabla u + f'_v\nabla v$；

7) $\operatorname{grad}r = \boldsymbol{r}/r$，亦或 $\nabla(r) = \boldsymbol{r}/r$；

   $\operatorname{grad}f(r) = f'(r)\,\boldsymbol{r}/r$，亦或 $\nabla f(r) = f'(r)\,\boldsymbol{r}/r$.

#### 关于散度的公式

这里 $\boldsymbol{A}, \boldsymbol{B}$ 是向量函数，$u$ 是数量函数，$c$ 为常数，$\boldsymbol{r} = (x - x_0,\ y - y_0,\ z - z_0)$.

8) $\operatorname{div}(c\boldsymbol{A}) = c\operatorname{div}\boldsymbol{A}$，亦或 $\nabla\cdot(c\boldsymbol{A}) = c\nabla\cdot\boldsymbol{A}$；

9) $\operatorname{div}(\boldsymbol{A} \pm \boldsymbol{B}) = \operatorname{div}\boldsymbol{A} \pm \operatorname{div}\boldsymbol{B}$，亦或 $\nabla\cdot(\boldsymbol{A} \pm \boldsymbol{B}) = \nabla\cdot\boldsymbol{A} \pm \nabla\cdot\boldsymbol{B}$；

10) $\operatorname{div}(u\boldsymbol{A}) = u\operatorname{div}\boldsymbol{A} + \boldsymbol{A}\cdot\operatorname{grad}u$，亦或 $\nabla\cdot(u\boldsymbol{A}) = u\nabla\cdot\boldsymbol{A} + \nabla u\cdot\boldsymbol{A}$；

11) $\operatorname{div}\boldsymbol{r} = 3$，亦或 $\nabla\cdot\boldsymbol{r} = 3$.

#### 关于旋度的公式

这里 $\boldsymbol{A}, \boldsymbol{B}$ 是向量函数，$u$ 是数量函数，$c$ 为常数，$\boldsymbol{r} = (x - x_0,\ y - y_0,\ z - z_0)$.

12) $\operatorname{rot}(c\boldsymbol{A}) = c\operatorname{rot}\boldsymbol{A}$，亦或 $\nabla\times(c\boldsymbol{A}) = c\nabla\times\boldsymbol{A}$；

13) $\operatorname{rot}(\boldsymbol{A} \pm \boldsymbol{B}) = \operatorname{rot}\boldsymbol{A} \pm \operatorname{rot}\boldsymbol{B}$，亦或 $\nabla\times(\boldsymbol{A} \pm \boldsymbol{B}) = \nabla\times\boldsymbol{A} \pm \nabla\times\boldsymbol{B}$；

14) $\operatorname{rot}(u\boldsymbol{A}) = u\operatorname{rot}\boldsymbol{A} + \operatorname{grad}u \times \boldsymbol{A}$，亦或 $\nabla\times(u\boldsymbol{A}) = u\nabla\times\boldsymbol{A} + \nabla u\times\boldsymbol{A}$；

15) $\operatorname{rot}\boldsymbol{r} = \boldsymbol{0}$（零向量），亦或 $\nabla\times\boldsymbol{r} = \boldsymbol{0}$（零向量）.

#### 混合运算

这里 $\boldsymbol{A}, \boldsymbol{B}$ 是向量函数，$u$ 是数量函数。

16) $\operatorname{grad}(\boldsymbol{A}\cdot\boldsymbol{B}) = \boldsymbol{B} \times (\operatorname{rot}\boldsymbol{A}) + \boldsymbol{A} \times (\operatorname{rot}\boldsymbol{B}) + (\boldsymbol{B}\cdot\nabla)\boldsymbol{A} + (\boldsymbol{A}\cdot\nabla)\boldsymbol{B}$，

亦或    $\nabla(\boldsymbol{A}\cdot\boldsymbol{B}) = \boldsymbol{B} \times (\nabla\times\boldsymbol{A}) + \boldsymbol{A} \times (\nabla\times\boldsymbol{B}) + (\boldsymbol{B}\cdot\nabla)\boldsymbol{A} + (\boldsymbol{A}\cdot\nabla)\boldsymbol{B}$；

17) $\operatorname{div}(\boldsymbol{A} \times \boldsymbol{B}) = \boldsymbol{B}\cdot(\operatorname{rot}\boldsymbol{A}) - \boldsymbol{A}\cdot(\operatorname{rot}\boldsymbol{B})$，

亦或    $\nabla\cdot(\boldsymbol{A} \times \boldsymbol{B}) = \boldsymbol{B}\cdot(\nabla\times\boldsymbol{A}) - \boldsymbol{A}\cdot(\nabla\times\boldsymbol{B})$；

18) $\operatorname{rot}(\boldsymbol{A} \times \boldsymbol{B}) = \nabla\times(\boldsymbol{A} \times \boldsymbol{B}) = \boldsymbol{A}\operatorname{div}\boldsymbol{B} - \boldsymbol{B}\operatorname{div}\boldsymbol{A} + (\boldsymbol{B}\cdot\nabla)\boldsymbol{A} - (\boldsymbol{A}\cdot\nabla)\boldsymbol{B}$，

亦或    $\nabla\times(\boldsymbol{A} \times \boldsymbol{B}) = \boldsymbol{A}\,\nabla\cdot\boldsymbol{B} - \boldsymbol{B}\,\nabla\cdot\boldsymbol{A} + (\boldsymbol{B}\cdot\nabla)\boldsymbol{A} - (\boldsymbol{A}\cdot\nabla)\boldsymbol{B}$；

19) $\operatorname{div}(\operatorname{grad}u) = \Delta u = \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2}$，

亦或    $\nabla\cdot(\nabla u) = \Delta u = \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2}$；

20) $\operatorname{rot}(\operatorname{grad}u) = \boldsymbol{0}$（零向量），亦或 $\nabla\times(\nabla u) = \boldsymbol{0}$；

21) $\operatorname{div}(\operatorname{rot}\boldsymbol{A}) = 0$，亦或 $\nabla\cdot(\nabla\times\boldsymbol{A}) = 0$；

22) $\operatorname{grad}(\operatorname{div}\boldsymbol{A}) = \operatorname{rot}(\operatorname{rot}\boldsymbol{A}) + \Delta\boldsymbol{A}$，亦或 $\nabla(\nabla\cdot\boldsymbol{A}) = \nabla\times(\nabla\times\boldsymbol{A}) + \Delta\boldsymbol{A}$；

23) $\operatorname{rot}(\operatorname{rot}\boldsymbol{A}) = \operatorname{grad}(\operatorname{div}\boldsymbol{A}) - \Delta\boldsymbol{A}$，亦或 $\nabla\times(\nabla\times\boldsymbol{A}) = \nabla(\nabla\cdot\boldsymbol{A}) - \Delta\boldsymbol{A}$.

> [!note] 注
> 其中
>
> $(\boldsymbol{B}\cdot\nabla)\boldsymbol{A} = \left(B_x\dfrac{\partial}{\partial x} + B_y\dfrac{\partial}{\partial y} + B_z\dfrac{\partial}{\partial z}\right)\boldsymbol{A}$，
>
> $(\boldsymbol{A}\cdot\nabla)\boldsymbol{B} = \left(A_x\dfrac{\partial}{\partial x} + A_y\dfrac{\partial}{\partial y} + A_z\dfrac{\partial}{\partial z}\right)\boldsymbol{B}$.

> [!example] 例7.5.5
> 设 $\boldsymbol{C}$ 为常向量，试证：$\nabla(\boldsymbol{C} \times \boldsymbol{r})^2 = 2C^2\boldsymbol{r} - 2(\boldsymbol{C}\cdot\boldsymbol{r})\boldsymbol{C}$.
>
> > [!proof]- 证
> > 利用向量的已知公式：$(\boldsymbol{a} \times \boldsymbol{b})^2 = a^2 b^2 - (\boldsymbol{a}\cdot\boldsymbol{b})^2$ 及上述公式2)，有
> >
> > $\nabla(\boldsymbol{C} \times \boldsymbol{r})^2 = \nabla(C^2 r^2) - \nabla(\boldsymbol{C}\cdot\boldsymbol{r})^2$.
> >
> > 再利用上述公式5)和7)，进而
> >
> > 上式 $= C^2 \cdot 2r \cdot \boldsymbol{r}/r - 2(\boldsymbol{C}\cdot\boldsymbol{r})\,\nabla(\boldsymbol{C}\cdot\boldsymbol{r}) = 2C^2\boldsymbol{r} - 2(\boldsymbol{C}\cdot\boldsymbol{r})\boldsymbol{C}$.

> [!example] 例7.5.6
> 设 $\operatorname{div}[\operatorname{grad} f(r)] = 0$，求 $f(r)$.
>
> > [!solution]- 解
> > $\operatorname{div}[\operatorname{grad} f(r)] = \operatorname{div}[f'(r)\,\boldsymbol{r}/r] = \dfrac{f'(r)}{r}\operatorname{div}\boldsymbol{r} + \operatorname{grad}\left(\dfrac{f'(r)}{r}\right)\cdot\boldsymbol{r}$
> >
> > $= 3\dfrac{f'(r)}{r} + \left[\dfrac{f''(r)}{r} - \dfrac{f'(r)}{r^2}\right]\dfrac{\boldsymbol{r}}{r}\cdot\boldsymbol{r}$
> >
> > $= f''(r) + \dfrac{2f'(r)}{r} = 0$.
> >
> > 解微分方程，可得
> >
> > $f(r) = \dfrac{C}{r} + C_0$.

> [!example] 例7.5.7
> 设 $F_1, F_2$ 为旋转椭球面的两焦点，$P$ 为椭球面上任意一点，试证 $PF_1$，$PF_2$ 与 $P$ 点的切平面成等角（如图7.5.1）.
>
> > [!proof]- 证
> > 记
> >
> > $\boldsymbol{r}_1 = \overrightarrow{F_1P}$,   $\boldsymbol{r}_2 = \overrightarrow{F_2P}$,
> >
> > $r_1 = |\boldsymbol{r}_1|$,  $r_2 = |\boldsymbol{r}_2|$,
> >
> > 则 $f(P) = r_1 + r_2$ 为一数量场。椭球面为 $r_1 + r_2 = 2C$（$C$ 为常数），它是 $f(P)$ 的等量面。$f$ 在 $P$ 点的梯度 $\operatorname{grad}f(P)$ 与椭球在 $P$ 点的外法线方向重合，即 $\boldsymbol{n} = \operatorname{grad}f(P)$. 因此要证
> >
> > $PF_1$ 与 $PF_2$ 跟切平面成等角，只要证明 $\boldsymbol{r}_1/r_1$ 与 $\boldsymbol{r}_2/r_2$ 跟梯度 $\boldsymbol{n} = \operatorname{grad}f(P)$ 成等角。事实上，
> >
> > $\boldsymbol{n} \times \boldsymbol{r}_1/r_1 = \operatorname{grad}(r_1 + r_2) \times \operatorname{grad}r_1 = (\operatorname{grad}r_1 + \operatorname{grad}r_2) \times \operatorname{grad}r_1$
> >
> > $= \operatorname{grad}r_2 \times \operatorname{grad}r_1$.
> >
> > 同理，$\boldsymbol{n} \times \boldsymbol{r}_2/r_2 = \operatorname{grad}r_1 \times \operatorname{grad}r_2$. 故 $\boldsymbol{n} \times \boldsymbol{r}_1/r_1 = \boldsymbol{r}_2/r_2 \times \boldsymbol{n}$. 此即表明 $\boldsymbol{r}_1/r_1$ 与 $\boldsymbol{r}_2/r_2$ 跟 $\boldsymbol{n} = \operatorname{grad}f(P)$ 成等角。


### 三、借助场论符号表示积分公式

> [!note] 要点
> 利用场论符号，Gauss 公式和 Stokes 公式可以写得非常简单，记 $\mathbf{n}=(\cos\alpha,\cos\beta,\cos\gamma)$，$\mathbf{A}=(P,Q,R)$，$d\mathbf{S}=\mathbf{n}\,dS$，则 Gauss 公式可写为
> $$
> \oiint_\Sigma \mathbf{A}\cdot d\mathbf{S} = \iiint_V \operatorname{div}\mathbf{A}\,dV.
> $$
> 记 $d\mathbf{r}=(dx,dy,dz)$，则 Stokes 公式可写成
> $$
> \oint_L \mathbf{A}\cdot d\mathbf{r} = \iint_S (\operatorname{rot}\mathbf{A})\cdot d\mathbf{S}.
> $$
> 利用这些关系我们可以证明有关的积分等式，解决有关问题。

> [!example] 例7.5.8
> 设 $\Sigma$ 为包围区域 $V$ 的闭光滑曲面，$F(x,y,z)$ 在区域 $V$ 内直到边界 $\Sigma$ 上有连续的一阶偏导数，$G(x,y,z)$ 有连续的二阶偏导数，$\mathbf{n}$ 是 $\Sigma$ 的单位外法向量。证明 Green 第一公式：
> $$
> \iiint_V F\Delta G\,dxdydz = \iint_\Sigma F\frac{\partial G}{\partial n}\,dS - \iiint_V \operatorname{grad}F\cdot\operatorname{grad}G\,dxdydz.
> $$
> （广西师范大学）
>
> > [!solution]-
> > $$
> > \begin{aligned}
> > \iint_\Sigma F\frac{\partial G}{\partial n}\,dS &= \iint_\Sigma F\operatorname{grad}G\cdot\mathbf{n}\,dS = \iiint_V \operatorname{div}(F\operatorname{grad}G)\,dV \\
> > &= \iiint_V F\operatorname{div}(\operatorname{grad}G)\,dV + \iiint_V \operatorname{grad}F\cdot\operatorname{grad}G\,dV \\
> > &= \iiint_V F\Delta G\,dV + \iiint_V \operatorname{grad}F\cdot\operatorname{grad}G\,dV,
> > \end{aligned}
> > $$
> > 移项即为所求。

> [!example] 例7.5.9
> $V,\Sigma$ 如上例所设，$u=u(x,y,z),v=v(x,y,z)$ 在 $V$ 内直到边界 $\Sigma$ 上有连续的二阶偏导数。试证：
> $$
> \oiint_\Sigma (u\nabla v - v\nabla u)\,d\mathbf{S} = \iiint_V u(\nabla^2 v - v\nabla^2 u)\,dV.
> $$
>
> > [!proof]-
> > $$
> > \begin{aligned}
> > \oiint_\Sigma (u\nabla v - v\nabla u)\,d\mathbf{S}
> > &= \iiint_V \operatorname{div}(u\nabla v - v\nabla u)\,dV \\
> > &= \iiint_V [(\nabla u\cdot\nabla v + u\operatorname{div}\nabla v) - (\nabla v\cdot\nabla u + v\operatorname{div}\nabla u)]\,dV \\
> > &= \iiint_V (u\nabla^2 v - v\nabla^2 u)\,dV \qquad (\text{因为 } \operatorname{div}\nabla u = \nabla\cdot(\nabla u) = \Delta u = \nabla^2 u).
> > \end{aligned}
> > $$

> [!example] 例7.5.10
> $u,v,\Sigma,V$ 如上例所设，试证向量场 $\mathbf{A}=\operatorname{grad}u \times \operatorname{grad}v$ 通过 $V$ 内任一封闭曲面上的流量为零。
>
> > [!proof]-
> > $$
> > \begin{aligned}
> > Q &= \oiint_S \mathbf{A}\cdot\mathbf{n}\,dS = \iiint_V \operatorname{div}\mathbf{A}\,dV = \iiint_V \operatorname{div}(\operatorname{grad}u \times \operatorname{grad}v)\,dV \\
> > &= \iiint_V [\operatorname{grad}v\cdot\operatorname{rot}(\operatorname{grad}u) - \operatorname{grad}u\cdot\operatorname{rot}(\operatorname{grad}v)]\,dV \\
> > &= \iiint_V (\operatorname{grad}v\cdot\mathbf{0} - \operatorname{grad}u\cdot\mathbf{0})\,dV = 0.
> > \end{aligned}
> > $$

> [!exercise] * 练习
> 记 $\Omega=\{P\in\mathbb{R}^3 \mid |P|\le 1\}$，设 $\mathbf{V}:\mathbb{R}^3\to\mathbb{R}^3$，$\mathbf{V}=(V_1,V_2,V_3)$ 是 $C^1$ 向量场（$V_1,V_2$ 和 $V_3$ 都有连续偏导数）。$\mathbf{V}$ 在 $\mathbb{R}^3\setminus\Omega$ 恒为 $0$，且 $\displaystyle\frac{\partial V_1}{\partial x}+\frac{\partial V_2}{\partial y}+\frac{\partial V_3}{\partial z}=0$。
>
> 1) 设 $f:\mathbb{R}^3\to\mathbb{R}$ 是 $C^1$ 函数，求 $\displaystyle\iiint_\Omega \nabla f\cdot\mathbf{V}\,dxdydz$；
> 2) 求 $\displaystyle\iiint_\Omega V_1\,dxdydz$。（北京大学）
>
> > [!proof]-
> > **1)**
> > $$
> > \begin{aligned}
> > \iiint_\Omega \nabla f\cdot\mathbf{V}\,dxdydz &= \iiint_\Omega (f'_x,f'_y,f'_z)\cdot(V_1,V_2,V_3)\,dxdydz \\
> > &= \iiint_\Omega (f'_xV_1+f'_yV_2+f'_zV_3)\,dxdydz.
> > \end{aligned}
> > $$
> > 根据题设条件，应有 $f\cdot\bigl(\frac{\partial V_1}{\partial x}+\frac{\partial V_2}{\partial y}+\frac{\partial V_3}{\partial z}\bigr)=0$，将其代入被积函数，可知
> > $$
> > \begin{aligned}
> > \text{上式} &= \iiint_\Omega \Bigl(f'_xV_1+f\frac{\partial V_1}{\partial x}+f'_yV_2+f\frac{\partial V_2}{\partial y}+f'_zV_3+f\frac{\partial V_3}{\partial z}\Bigr)\,dxdydz \\
> > &= \iiint_\Omega \Bigl(\frac{\partial}{\partial x}fV_1+\frac{\partial}{\partial y}fV_2+\frac{\partial}{\partial z}fV_3\Bigr)\,dxdydz \\
> > &= \oiint_{\partial\Omega} fV_1\,dydz+fV_2\,dzdx+fV_3\,dxdy = 0.
> > \end{aligned}
> > $$
> > （因为 $V_1,V_2,V_3$ 有连续偏导数，且在 $\Omega$ 之外为 $0$，所以它们在其边界 $\partial\Omega$ 上也为 $0$，即 $V_1=V_2=V_3=0$。）
> >
> > **2)** 第1小题里已得到任一有连续偏导数的 $f(x,y,z)$，皆有 $\displaystyle\iiint_\Omega \nabla f\cdot\mathbf{V}\,dxdydz=0$。今令 $f(x,y,z)=x$，则 $\nabla f=(1,0,0)$，$\nabla f\cdot\mathbf{V}=(1,0,0)\cdot(V_1,V_2,V_3)=V_1$，故
> > $$
> > \iiint_\Omega V_1\,dxdydz = \iiint_\Omega \nabla f\cdot\mathbf{V}\,dxdydz = 0.
> > $$

> [!example] 例7.5.11
> 计算曲面积分 $\displaystyle\iint_S \operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,dS$，其中 $\mathbf{F}=(x-z,x^3-yz,-3xy^2)$，$S$ 为半球面：$z=\sqrt{4-x^2-y^2}$，$\mathbf{n}$ 为 $S$ 上侧的单位向量。（新疆大学）
>
> > [!solution]-
> > **解 I**（应用 Stokes 公式。）曲面 $S$ 的边界曲线为 $L:\,z=0,\;x^2+y^2=4$，即 $z=0,\;x=2\cos\theta,\;y=2\sin\theta\;(0\le\theta\le2\pi)$，因此
> > $$
> > \begin{aligned}
> > \iint_S \operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,dS &= \oint_L \mathbf{F}\cdot d\mathbf{r} \qquad (\text{注意 }L\text{ 上 }z=0,\;dz=0) \\
> > &= \oint_L F_x\,dx + F_y\,dy = \oint_L x\,dx + x^3\,dy \\
> > &= \int_0^{2\pi} 2\cos\theta\,d(2\cos\theta) + (2\cos\theta)^3\,d(2\sin\theta) = 12\pi.
> > \end{aligned}
> > $$
> >
> > **解 II**（补一块后用 Gauss 公式。）记 $S_1$ 为 $z=0$ 上 $x^2+y^2\le4$ 的部分，则
> > $$
> > \begin{aligned}
> > \iint_S \operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,dS &= \iint_{S+S_1} \operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,dS + \iint_{S_1} \operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,dS \\
> > &= \iiint_V \operatorname{div}(\operatorname{rot}\mathbf{F})\,dV + 3\iint_{x^2+y^2\le4} x^2\,dxdy \\
> > &= \iiint_V 0\,dV + 3\cdot4\int_0^{\pi/2}\cos^2\theta\,d\theta\int_0^2 r^3\,dr = 12\pi.
> > \end{aligned}
> > $$

> [!example] 例7.5.12
> 设 $V$ 为 $\mathbb{R}^3$ 中一有界闭区域，其边界 $\Sigma$ 为光滑曲面，试证：
> $$
> \iiint_V \frac{dV}{r} = \frac12 \iint_\Sigma \nabla r \cdot \mathbf{n}\,dS, \tag{1}
> $$
> 其中 $r=\sqrt{x^2+y^2+z^2}$，$\mathbf{n}$ 为 $\Sigma$ 的单位外法向量。
>
> > [!proof]-
> > **1°** 设原点在 $V$ 之外。容易验证 $\operatorname{div}\nabla r = \dfrac{2}{r}$。直接应用 Gauss 公式，可得式 (1)。
> >
> > **2°** 设原点为 $V$ 的内点。此时式 (1) 左端为反常三重积分，但由 Cauchy 判别法可知它收敛。今以原点为中心、以充分小的 $\varepsilon$ 为半径作一小球面 $\Gamma_\varepsilon$，使得 $\Gamma_\varepsilon$ 完全落在 $V$ 内。记 $\Gamma_\varepsilon$ 所包围的球体为 $V_\varepsilon$，则要证明式 (1)，就是要证明
> > $$
> > \lim_{\varepsilon\to0^+} \iiint_{V-V_\varepsilon} \frac{dV}{r} = \frac12 \iint_\Sigma \nabla r \cdot \mathbf{n}\,dS. \tag{2}
> > $$
> > 此时 $V-V_\varepsilon$ 已不再包含原点，可以使用 $1^\circ$ 中的结果。于是
> > $$
> > \begin{aligned}
> > \iiint_{V-V_\varepsilon} \frac{dV}{r} &= \frac12 \iint_{\Sigma+\Sigma_\varepsilon} \nabla r \cdot \mathbf{n}\,dS \\
> > &= \frac12 \iint_\Sigma \nabla r \cdot \mathbf{n}\,dS + \frac12 \iint_{\Gamma_\varepsilon} \nabla r \cdot \mathbf{n}\,dS \triangleq I_1+I_2.
> > \end{aligned}
> > $$
> > 要证明式 (2)，只要证明 $I_2\to0$（当 $\varepsilon\to0^+$ 时）。事实上（作为 $V-V_\varepsilon$ 边界的外法线，在 $\Gamma_\varepsilon$ 上指向小球内部）：
> > $$
> > \begin{aligned}
> > I_2 &= \frac12 \iint_{\Gamma_\varepsilon} \nabla r \cdot \mathbf{n}\,dS = \frac12 \iint_{\Gamma_\varepsilon} \frac{\mathbf{r}}{r} \cdot \mathbf{n}\,dS \\
> > &= \frac12\cdot\frac1\varepsilon \iint_{\Gamma_\varepsilon} \mathbf{r} \cdot \mathbf{n}\,dS = -\frac{1}{2\varepsilon} \iiint_{V_\varepsilon} \operatorname{div}\mathbf{r}\,dV \\
> > &= -\frac{1}{2\varepsilon} \iiint_{V_\varepsilon} 3\,dV = -\frac{1}{2\varepsilon}\cdot 3 \cdot \frac{4}{3}\pi\varepsilon^3 = -2\pi\varepsilon^2 \to 0 \quad (\varepsilon\to0^+).
> > \end{aligned}
> > $$
> >
> > **3°** 当原点位于边界 $\Sigma$ 上时，证法与 $2^\circ$ 类似。这时右端曲面积分也是反常积分，等于用小球挖去奇点之后所剩曲面上积分的极限（令小球半径 $\varepsilon\to0^+$）。此步证明留给读者。

> [!example] 例7.5.13
> 设 $S$ 是以曲线 $L$ 为边界的光滑曲面，$(\xi,\eta,\zeta)\notin S$，
> $$
> F(\xi,\eta,\zeta)=\iint_S \frac{(\xi-x)\,dydz+(\eta-y)\,dzdx+(\zeta-z)\,dxdy}{r^3}, \tag{1}
> $$
> 其中 $r=\sqrt{(\xi-x)^2+(\eta-y)^2+(\zeta-z)^2}$。证明：
> $$
> \begin{cases}
> \displaystyle\frac{\partial F}{\partial\xi} = \int_L \frac{(z-\zeta)\,dy-(y-\eta)\,dz}{r^3},\\[8pt]
> \displaystyle\frac{\partial F}{\partial\eta} = \int_L \frac{(x-\xi)\,dz-(z-\zeta)\,dx}{r^3},\\[8pt]
> \displaystyle\frac{\partial F}{\partial\zeta} = \int_L \frac{(y-\eta)\,dx-(x-\xi)\,dy}{r^3}.
> \end{cases} \tag{2}
> $$
>
> > [!proof]-
> > $$
> > \frac{\partial F}{\partial\xi} = \iint_S \frac{\partial}{\partial\xi}\!\left(\frac{\xi-x}{r^3}\right)dydz + \frac{\partial}{\partial\xi}\!\left(\frac{\eta-y}{r^3}\right)dzdx + \frac{\partial}{\partial\xi}\!\left(\frac{\zeta-z}{r^3}\right)dxdy. \tag{3}
> > $$
> > 但
> > $$
> > \begin{aligned}
> > \frac{\partial}{\partial\xi}\!\left(\frac{\xi-x}{r^3}\right) &= \frac{1}{r^3} - \frac{3(\xi-x)^2}{r^5} \\
> > &= \frac{1}{r^3} - \frac{3[r^2-(\eta-y)^2-(\zeta-z)^2]}{r^5} \\
> > &= \left[-\frac{1}{r^3}+\frac{3(\eta-y)^2}{r^5}\right] - \left[\frac{1}{r^3}-\frac{3(\zeta-z)^2}{r^5}\right] \\
> > &= \frac{\partial}{\partial y}\!\left(-\frac{y-\eta}{r^3}\right) - \frac{\partial}{\partial z}\!\left(\frac{z-\zeta}{r^3}\right),\\[6pt]
> > \frac{\partial}{\partial\xi}\!\left(\frac{\eta-y}{r^3}\right) &= -\frac{3(\eta-y)}{r^5}(\xi-x) = -\frac{\partial}{\partial x}\!\left(\frac{\eta-y}{r^3}\right) = \frac{\partial}{\partial x}\!\left(\frac{y-\eta}{r^3}\right).
> > \end{aligned}
> > $$
> > 同理，$\displaystyle\frac{\partial}{\partial\xi}\!\left(\frac{\zeta-z}{r^3}\right)=\frac{\partial}{\partial x}\!\left(\frac{z-\zeta}{r^3}\right)$。因此
> > $$
> > \begin{aligned}
> > \frac{\partial F}{\partial\xi} &= \iint_S \left[\frac{\partial}{\partial y}\!\left(-\frac{y-\eta}{r^3}\right)-\frac{\partial}{\partial z}\!\left(\frac{z-\zeta}{r^3}\right)\right]dydz \\
> > &\qquad + \frac{\partial}{\partial x}\!\left(\frac{y-\eta}{r^3}\right)dzdx + \frac{\partial}{\partial x}\!\left(\frac{z-\zeta}{r^3}\right)dxdy \\[6pt]
> > &= \iint_S \begin{vmatrix}
> > dydz & dzdx & dxdy \\[2pt]
> > \displaystyle\frac{\partial}{\partial x} & \displaystyle\frac{\partial}{\partial y} & \displaystyle\frac{\partial}{\partial z} \\[6pt]
> > 0 & \displaystyle\frac{z-\zeta}{r^3} & -\displaystyle\frac{y-\eta}{r^3}
> > \end{vmatrix} \\
> > &\xrightarrow{\text{Stokes 公式}} \int_L \frac{(z-\zeta)\,dy-(y-\eta)\,dz}{r^3}.
> > \end{aligned}
> > $$
> > 类似可证 (2) 中其余两式。


### 四、四种重要的向量场

作为本书的结束，我们来讨论保守场、有势场、无旋场、管量场的关系，以及它们的某些性质.

> [!definition] 定义 1
> 1）向量场 $A=(A_x,A_y,A_z)$，若线积分
>
> $$
> \int_L A \cdot dr = \int_L A_x dx + A_y dy + A_z dz,
> $$
>
> 其中 $dr=(dx,dy,dz)$（亦即
>
> $$
> \int_L A_t ds = \int_L A \cdot t \, ds = \int_L (A_x \cos\alpha + A_y \cos\beta + A_z \cos\gamma)ds
> $$
>
> ），
> 只与曲线 $L$ 的起点、终点有关，而与 $L$ 的具体路径无关，则 $A$ 称为保守场.（这里 $t=(\cos\alpha,\cos\beta,\cos\gamma)$ 表示 $L$ 上（按前进方向）切线的单位向量，$A_t$ 是 $A$ 在 $t$ 上的投影. $L$ 总假定是场内分段光滑的曲线.）
>
> 2）若存在数量场 $u=u(M)$，使得 $A=\operatorname{grad} u$，则 $A$ 称为有势场，$u$ 称为 $A$ 的势.
>
> 3）若场内 $\operatorname{rot} A \equiv 0$，则 $A$ 称为无旋场.
>
> 4）若场内 $\operatorname{div} A \equiv 0$，则 $A$ 称为管量场（或无源场）.

> [!theorem] 定理 1
> 假设
>
> 1）$A=(A_x,A_y,A_z)$ 为光滑场（即分量 $A_x,A_y,A_z$ 在场内有连续偏导数）；
>
> 2）场所在的区域是按曲面连通的（即场内任一封闭曲线，可张一个连续曲面在场内），
>
> 则以下四条件等价：
>
> 1° $A$ 为保守场.
>
> 2° 场内任一光滑闭路上的环量为零（即指
>
> $$
> \oint_C A_t dt = \oint_C A_x dx + A_y dy + A_z dz = 0
> $$
>
> ）.
>
> 3° $A$ 为无旋场（$\operatorname{rot} A \equiv 0$），亦等价于条件：
>
> $$
> \frac{\partial A_x}{\partial y} = \frac{\partial A_y}{\partial x},\quad \frac{\partial A_y}{\partial z} = \frac{\partial A_z}{\partial y},\quad \frac{\partial A_z}{\partial x} = \frac{\partial A_x}{\partial z} \quad （于场内）.
> $$
>
> 4° $A$ 为有势场（即：$\exists u$ 使得 $A=\operatorname{grad} u$），亦等价于 $A_x dx + A_y dy + A_z dz$ 为恰当微分，即 $\exists u$，使得 $du = A_x dx + A_y dy + A_z dz$. 若记 $dr=(dx,dy,dz)$，此式即为 $du = A \cdot dr$.
>
> 当去掉"按曲面连通"的条件，则上述四条件的关系如图 7.5.2，即条件 1°，2°，4° 等价，而 3° 只是它们的必要条件，不是充分条件.

> [!theorem] 定理 2
> 若 $A$ 为光滑场，则以下三条件等价：
>
> 1° $A$ 为管量场.
>
> 2° $A$ 在任何封闭光滑曲面上的通量为零，即
>
> $$
> \iint_S A_n dS \equiv \iint_S A \cdot n \, dS = \iint_S (A_x \cos\alpha + A_y \cos\beta + A_z \cos\gamma)dS = 0
> $$
>
> （$n=(\cos\alpha,\cos\beta,\cos\gamma)$ 为单位外法向量）.
>
> 3° 张在封闭曲线 $L$ 上的光滑曲面 $S$，面积分 $\displaystyle \iint_S A_x dy dz + A_y dz dx + A_z dx dy$ 只与 $L$ 有关，与 $S$ 的形状无关.

> [!definition] 定义 2
> 过封闭曲线上每一点作场 $A$ 的向量线（切线与 $A$ 的方向一致的曲线），这些向量线所构成的曲面称为向量管.

> [!theorem] 定理 3
> 管量场中，通过同一向量管的各个横断面上的流量相等.
>
> 如图 7.5.3，$S_1$，$S_2$ 是任意两个横断面，则流量
>
> $$
> \iint_{S_1} A_n dS = \iint_{S_2} A_n dS
> $$
>
> （此积分值称为向量管的强度）.

> [!theorem] 定理 4
> 若存在向量场 $B$ 使得 $A = \operatorname{rot} B$，则 $A$ 为管量场（$B$ 称为 $A$ 的向量位）.
>
> 若 $B_1$ 是 $A$ 的某一个向量位，则 $B_1 + \operatorname{grad} u$ 必仍是 $A$ 的向量位（其中 $u=u(M)$ 是任意一个有偏导数的函数），并且 $A$ 的全体向量位都具有这种形式（即：这时任一别的向量位 $B$，必存在相应的函数 $u$，使得 $B = B_1 + \operatorname{grad} u$）.

有势场的判断与势的计算

> [!note] 要点
> 根据定理 1，要判断 $A$ 是否为有势场，只需检验条件：
>
> $$
> \frac{\partial A_y}{\partial x} = \frac{\partial A_x}{\partial y},\quad \frac{\partial A_z}{\partial y} = \frac{\partial A_y}{\partial z},\quad \frac{\partial A_x}{\partial z} = \frac{\partial A_z}{\partial x}.
> $$
>
> 若此条件在场内处处成立，则 $A$ 为有势场，否则不是. 另一种方法是求势函数，求出了势函数，自然是有势场. 计算势函数，可用 §7.3 中的方法，或将 $A \cdot dr$ 化为 $du$ 的形式，则 $u$ 即为势函数.

> [!example] 例 7.5.14
> 证明场 $A = f(r)r$（其中 $f(r)$ 是单值的连续函数）为有势场，并求该场的势.
>
> > [!solution]-
> > $$
> > A \cdot dr = f(r)r \cdot dr = f(r)(xdx + ydy + zdz) = f(r)\frac{1}{2}d(x^2 + y^2 + z^2)
> > $$
> > $$
> > = \frac{1}{2}f(r)dr^2 = f(r)r\,dr = d\int_{r_0}^r tf(t)dt.
> > $$
> >
> > 所以 $A$ 为有势场，$u = \displaystyle \int_{r_0}^r tf(t)dt$ 为 $A$ 的势.

> [!example] 例 7.5.15
> 在空间 $n$ 个不同的点上，各有质量为 $m_i\ (i=1,2,\ldots,n)$ 的质点. 试求该质点系产生的引力场的势.
>
> > [!note]- 提示
> > $$
> > A \cdot dr = -\sum_{i=1}^n \frac{m_i}{r_i^3} r_i \cdot dr = d\left(\sum_{i=1}^n \frac{m_i}{r_i}\right).
> > $$

> [!example] 例 7.5.16
> 设变力 $A(M)$ 的方向总指向原点，大小只依赖于距离 $r = OM$，且为 $r$ 的连续函数，试求 $A$ 的势.
>
> > [!note]- 提示
> > $A$ 的方向为 $-\dfrac{r}{r}$，大小为 $r$ 的连续函数，设它为 $\varphi(r)$. 于是，$A = -\varphi(r)\dfrac{r}{r}$.
> >
> > 记 $f(r) = -\dfrac{1}{r}\varphi(r)$，则 $A = f(r)r$，从而化为例 7.5.14.

> [!example] 例 7.5.17
> 设 $A = yf(xy)i + xg(xy)j$ 是平面有势场，试求函数 $g(t)-f(t)$ 的表达式及 $A$ 的势.
>
> > [!solution]-
> > 因 $A$ 为平面有势场，故 $\dfrac{\partial}{\partial x}(xg(xy)) - \dfrac{\partial}{\partial y}(yf(xy)) = 0$，即
> >
> > $$
> > g(xy) + xy\,g'(xy) - [\,f(xy) + xy\,f'(xy)\,] = 0.
> > $$
> >
> > 记 $xy = t$，$G = g - f$，则上式即为 $G + tG' = 0$. 从而 $dG/G = -dt/t$，$G(t) = g(t) - f(t) = C/t$.
> >
> > 故 $g = f + C/t$. 从而
> >
> > $$
> > A = yf(xy)i + x\left[f(xy) + \frac{C}{xy}\right]j.
> > $$
> >
> > $A$ 的势可利用线积分求原函数得出. 当 $y>0$ 时，
> >
> > $$
> > u(x,y) = \int_{(1,1)}^{(x,y)} yf(xy)dx + x\left[f(xy) + \frac{C}{xy}\right]dy
> > = \int_1^y \left[f(y) + \frac{C}{y}\right]dy + \int_1^x yf(xy)dx = C\ln|y| + \int_1^{xy} f(t)dt.
> > $$
> >
> > 通过验算，可知最后结果当 $y<0$ 时也成立.

> [!example] * 例 7.5.18
> 设 $F = \left(a - \dfrac{1}{y} + \dfrac{y}{z},\ \dfrac{x}{z} + \dfrac{bx}{y^2},\ -\dfrac{cxy}{z^2}\right)$，其中 $a,b,c$ 为常数.
>
> 1）问 $a,b,c$ 为何值时 $F$ 为有势场？
>
> 2）当 $F$ 为有势场时，求出势函数.（中国科学技术大学）
>
> > [!solution]-
> > 1）（如本段要点所述.）要 $F = (F_x, F_y, F_z)$ 为有势场，需且仅需如下三等式成立：
> >
> > $$
> > \frac{\partial F_y}{\partial x} = \frac{\partial F_x}{\partial y},\quad \frac{\partial F_z}{\partial y} = \frac{\partial F_y}{\partial z},\quad \frac{\partial F_x}{\partial z} = \frac{\partial F_z}{\partial x}.
> > $$
> >
> > 因 $\displaystyle \frac{\partial F_y}{\partial x} = \frac{\partial F_x}{\partial y}$，故 $\left(a - \frac{1}{y} + \frac{y}{z}\right)'_y = \left(\frac{x}{z} + \frac{bx}{y^2}\right)'_x$，得 $b=1$.
> >
> > 类似地，由 $\displaystyle \frac{\partial F_z}{\partial y} = \frac{\partial F_y}{\partial z}$ 和 $\displaystyle \frac{\partial F_x}{\partial z} = \frac{\partial F_z}{\partial x}$ 得 $c=1$. 故当 $a$ 任意，$b=c=1$ 时，$F$ 为有势场.
> >
> > 2）若 $F$ 为有势场，即 $F = \operatorname{grad} u$（$u$ 被称为 $F$ 的"势"）. 要求
> >
> > $$
> > \frac{\partial u}{\partial x} = a - \frac{1}{y} + \frac{y}{z},\quad \frac{\partial u}{\partial y} = \frac{x}{z} + \frac{x}{y^2},\quad \frac{\partial u}{\partial z} = -\frac{xy}{z^2}.
> > $$
> >
> > 解第一式，得
> >
> > $$
> > u = \left(a - \frac{1}{y} + \frac{y}{z}\right)x + \varphi(y,z).
> > $$
> >
> > 代入第二、三式，得 $\varphi'_y(y,z) = \varphi'_z(y,z) = 0$. 故 $\varphi(y,z) = C$. 因此，$F$ 的势函数

> [!example] 例7.5.19
> 设 $A$ 为有势场，关于原点对称，除原点外，处处有 $\operatorname{div} A = 0$. 原点处有强度为常数 $e$ 的源头（单位时间从原点涌出的流体量为 $e$），试证
>
> $$
> A = \frac{e}{4\pi r^3}r \quad （当 r > 0 时）.
> $$
>
> > [!proof]- 证
> > 因为 $A$ 为有势场，故 $\exists u = u(M)$，使得 $A = \operatorname{grad} u$. 由于场关于原点对称，所以 $u$ 应为 $r$ 的函数，因此
> >
> > $$
> > A = \operatorname{grad} u = \operatorname{grad} u(r) = u'(r)\frac{r}{r}. \tag{1}
> > $$
> >
> > 又因 $\operatorname{div} A = 0$（除原点外），故通过任何不包含原点的封闭曲面的流量为零：
> >
> > $$
> > \oiint_S A\,dS = \iiint_V \operatorname{div} A\,dV = 0.
> > $$
> >
> > 从而任何两个包含原点的封闭光滑曲面向外的流量相等.（如图 7.5.4，$S_1$，$S_2$ 是包含原点的两个曲面，将它们之间的区域记为 $V$，则
> >
> > $$
> > \iint_{S_1 + S_2^-} A\,dS = \iiint_V \operatorname{div} A\,dV = 0,
> > $$
> >
> > 其中 $S_2^-$ 表示在 $S_2$ 上法线朝内的一侧. 故 $\displaystyle \iint_{S_1} A\,dS = \iint_{S_2} A\,dS$.）
> >
> > 用 $S_r$ 表示以原点为中心、半径为 $r$ 的球面，外法向量为 $n = \dfrac{r}{r}$，则 $\forall r > 0$，有
> >
> > $$
> > \iint_{S_r} A\,dS = \iint_{S_\varepsilon} A\,dS = e.
> > $$
> >
> > （其中 $\varepsilon > 0$ 为充分小的正数）. 如此，用式（1）代入，有
> >
> > $$
> > e = \iint_{S_r} u'(r)\frac{r}{r}\,n\,dS
> > = \iint_{S_r} u'(r)\frac{r}{r}\cdot\frac{r}{r}\,dS
> > = u'(r)\iint_{S_r} dS
> > = u'(r)4\pi r^2.
> > $$
> >
> > 所以
> >
> > $$
> > u'(r) = \frac{e}{4\pi r^2},
> > $$
> >
> > $$
> > A = u'(r)\frac{r}{r} = \frac{e}{4\pi r^3}r \quad （当 r > 0 时）.
> > $$


### 单元练习7.5

> [!exercise] 7.5.1
> 试证本节场论公式(10)，14），19），20），21），23）．

> [!exercise] 7.5.2
> 设 $A$，$B$ 为常向量，试求 $B\cdot\nabla\bigl(A\cdot\nabla(\frac{1}{r})\bigr)$．

> [!exercise] 7.5.3
> 设 $\nabla\cdot\bigl(f(r)\mathbf{r}\bigr)=0$，求 $f(r)$．

> [!exercise] 7.5.4
> 设 $B=-\nabla\varphi$，$C$ 为常向量，$\Delta\varphi=0$，试证：
>
> 1）$\nabla\cdot[\varphi C+(C\cdot r)B]=0$；　　2）$\nabla\cdot[\varphi B+(C\cdot r)C]=C^2-B^2$；
>
> 3）$\nabla\times[\varphi C+(C\cdot r)B]=2C\times B$；　　4）$\nabla\times[\varphi B+(C\cdot r)C]=0$．

> [!exercise] 7.5.5
> 问：$u$ 在 $\operatorname{grad}v$ 的方向导数何时为零？

> [!exercise] 7.5.6
> 求 $|\operatorname{grad}u|=1$ 的轨迹，设 $u=\ln\frac{1}{\sqrt{(x-a)^2+(y-b)^2+(z-c)^2}}$．

> [!exercise] 7.5.7
> 设 $P$，$Q$，$R$ 是 $(x,y,z)$ 有连续偏导数的函数，$F=Pi+Qj+Rk$．试用两种方法，将 $\operatorname{rot}F=0$ 改写为柱面坐标的形式．

> [!exercise] 7.5.8
> 设 $S$ 是以曲线 $L$ 为边界的光滑曲面，$n$ 为 $S^+$ 的单位法向量，$n$ 与 $L^+$ 成右手系，$u$，$v$ 为两个有连续偏导数的函数，试证：
> $$
> \oint_{L^+} u\,dv = \iint_S (\operatorname{grad}u \times \operatorname{grad}v)\,n\,dS．
> $$

> [!exercise] 7.5.9
> 证明：$A=(x^2-yz)i+(y^2-zx)j+(z^2-xy)k$ 是有势场，并求其势．

> [!exercise] 7.5.10
> 设 $F=\frac{ax+y}{x^2+y^2}i-\frac{x-y+b}{x^2+y^2}j+zk$ 是有势场，求 $a$，$b$ 与 $F$ 的势．

> [!exercise] 7.5.11
> 证明：若 $A$，$B$ 是无旋场，则 $A\times B$ 为管量场．

> [!exercise] 7.5.12
> 设 $V$ 是以光滑曲面 $S$ 为边界的有界闭区域，$n$ 表示曲面 $S$ 的外法向量，$P(\xi,\eta,\zeta)\notin V$，$Q(x,y,z)$ 为积分的动点．$r$ 为 $P$ 与 $Q$ 的距离：
> $$
> r=\sqrt{(\xi-x)^2+(\eta-y)^2+(\zeta-z)^2}．
> $$
> 试证：
> $$
> \operatorname{grad}_P\!\left(\iiint_V \rho(Q)\frac{dV}{r}\right)
> = -\iint_S \rho(Q)n\,\frac{dS}{r} + \iiint_V \operatorname{grad}_Q\rho(Q)\,\frac{dV}{r},
> $$
> 其中 $\rho(Q)=\rho(x,y,z)$ 是具有连续偏导数的函数．
>
> > [!note]- 提示
> > 问题等价于证明如下三个等式（$n=(\cos\alpha,\cos\beta,\cos\gamma)$）：
> >
> > $$
> > \frac{\partial}{\partial\xi}\iiint_V \rho(Q)\frac{dV}{r}
> > = -\iint_S \rho(Q)\frac{\cos\alpha\,dS}{r} + \iiint_V \frac{\partial}{\partial x}\rho(Q)\frac{dV}{r},
> > $$
> >
> > $$
> > \frac{\partial}{\partial\eta}\iiint_V \rho(Q)\frac{dV}{r}
> > = -\iint_S \rho(Q)\frac{\cos\beta\,dS}{r} + \iiint_V \frac{\partial}{\partial y}\rho(Q)\frac{dV}{r},
> > $$
> >
> > $$
> > \frac{\partial}{\partial\zeta}\iiint_V \rho(Q)\frac{dV}{r}
> > = -\iint_S \rho(Q)\frac{\cos\gamma\,dS}{r} + \iiint_V \frac{\partial}{\partial z}\rho(Q)\frac{dV}{r}.
> > $$
> >
> > 利用例7.5.13类似的方法，借助Gauss公式可证．


