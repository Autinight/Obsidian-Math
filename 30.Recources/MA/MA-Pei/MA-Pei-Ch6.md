# 第六章  多元函数微分学


## §6.1  欧氏空间·多元函数的极限与连续

> [!note] 导读
> 本节第二段是重点，适合本书的各类读者；第一、三段主要针对数学院系的学生。


### * 一、m维欧氏空间

> [!note] 导读
> 该段"m维欧氏空间"，理论性相对较强。主要针对数学院系学生，其他学生可从略。相关考题较少，一般未作重点。


#### a. 利用模的定义

> [!example] 例6.1.1
> 设 $x=(x_1,x_2,\cdots,x_m)\in\mathbb{R}^m$，试证模 $|x|=(\sum_{i=1}^m x_i^2)^{1/2}$ 有关系：
>
> 1) $(\sqrt{m}/m)\sum_{i=1}^m|x_i|\leq|x|\leq\sum_{i=1}^m|x_i|$；
> 2) $\max_{1\leq i\leq m}|x_i|\leq|x|\leq\sqrt{m}\,\max_{1\leq i\leq m}|x_i|$。

> [!proof]- 证
> 1) 因为 $(\sum_{i=1}^m|x_i|)^2=\sum_{i=1}^m x_i^2+2\sum_{m\geq j>i}|x_i||x_j|\geq|x|^2$，
> 所以 $|x|=(\sum_{i=1}^m|x_i|^2)^{1/2}\leq\sum_{i=1}^m|x_i|$。
> 利用 Cauchy 不等式，
>
> $$\sum_{i=1}^m|x_i|=\sum_{i=1}^m 1\cdot|x_i|\leq\left(\sum_{i=1}^m 1^2\cdot\sum_{i=1}^m|x_i|^2\right)^{1/2}\leq\sqrt{m}\left(\sum_{i=1}^m x_i^2\right)^{1/2}=\sqrt{m}\,|x|，$$
>
> 故有 $(\sqrt{m}/m)\sum_{i=1}^m|x_i|\leq|x|$。
>
> 2) 留给读者证明。


#### b. 利用距离的定义和性质

> [!example] 例6.1.2
> 设 $E\subseteq\mathbb{R}^m$，$x,y\in E$，试证 $x$ 到 $E$ 的距离 $\rho(x,E)\leq\rho(x,y)+\rho(y,E)$。

> [!proof]- 证
> 根据距离性质，$\forall x,y,z\in\mathbb{R}^m$，若 $z\in E$，则由 $\rho(x,z)\leq\rho(x,y)+\rho(y,z)$ 知
>
> $\rho(x,E)=\inf_{z\in E}\rho(x,z)\leq\rho(x,y)+\rho(y,E)$。
>
> 将 $x,y$ 固定，上式对一切 $z\in E$ 成立，因而有
>
> $\rho(x,E)\leq\rho(x,y)+\inf_{z\in E}\rho(y,z)=\rho(x,y)+\rho(y,E)$。

> [!example] 例6.1.3
> 设 $A,B\subseteq\mathbb{R}^m$，$x\in\mathbb{R}^m$，试证：$\rho(A,B)\leq\rho(x,A)+\rho(x,B)$。

> [!hint]- 提示
> 对 $x\in\mathbb{R}^m$，$y\in A$，$z\in B$，应用距离的三角不等式 $\rho(y,z)\leq\rho(x,y)+\rho(x,z)$。


#### c. 利用开集、闭集的定义

> [!example] 例6.1.4
> 若 $E\subseteq\mathbb{R}^m$ 为闭集，试证 $x\in E$ 的充要条件是 $\rho(x,E)=0$。

> [!proof]- 证
> 必要性明显，只证明充分性。若 $\rho(x,E)=0$，即 $\inf\rho(x,y)=0$，由确界定义知：
> $\exists y_n\in E$，使得 $|y_n-x|\to 0$（当 $n\to\infty$ 时）。如此，$x$ 为 $E$ 的一个聚点，故 $x\in\overline{E}=E$。证毕。

> [!example] 例6.1.5
> 设 $E\subseteq\mathbb{R}^m$，$r>0$ 为常数，
> $A=\{x\mid x\in\mathbb{R}^m,\ \rho(x,E)<r\}$，$B=\{x\mid x\in\mathbb{R}^m,\ \rho(x,E)\leq r\}$。
> 试证：1) $A$ 为开集；2) $B$ 为闭集。

> [!proof]- 证
> 利用例6.1.2 的结果，易知 $\forall x,y\in\mathbb{R}^m$，有
> $$|\rho(x,E)-\rho(y,E)|\leq\rho(x,y).$$
> 从而可知 $f(x)=\rho(x,E)$ 是 $x$ 的连续函数（更确切地说是一致连续函数，见例6.1.29）。由此易知，$A$ 为开集，$B$ 为闭集（见例6.1.25）。


#### d. 利用边界的定义与聚点性质

> [!example] ☆ 例6.1.6
> 设 $E \subseteq \mathbb{R}^m$，试证 $E$ 的边界 $\partial E$ 为闭集。

> [!proof]- 证
> 设 $x_0$ 为 $\partial E$ 的任一聚点，我们要证明 $x_0 \in \partial E$。为此我们要证 $x_0$ 的任一 $\delta$-邻域 $U(x_0, \delta) = \{ x \mid |x - x_0| < \delta \}$ 里既含有 $E$ 的点，也含有不是 $E$ 的点。根据聚点定义，至少 $\exists x_1 \in U_0(x_0, \delta) \cap \partial E$。（这里 $U_0(x_0, \delta)$ 表示 $x_0$ 的空心邻域 $U_0(x_0, \delta) = \{ x \mid 0 < |x - x_0| < \delta \}$。）
> 
> 因为 $x_1 \in U_0(x_0, \delta)$，只要取 $\delta_1 = \min\{|x_0 - x_1|, \delta - |x_0 - x_1|\}$，则 $x_1$ 的邻域 $U(x_1, \delta_1) \subseteq U(x_0, \delta)$。
> 又因 $x_1 \in \partial E$，所以 $U(x_1, \delta_1)$ 中既含有 $E$ 中的点，又含有不是 $E$ 的点。由于 $U(x_1, \delta_1) \subseteq U(x_0, \delta)$，所以 $U(x_0, \delta)$ 中既含有 $E$ 中的点，也含有不是 $E$ 的点。由 $\delta > 0$ 的任意性，这就证明了 $x_0$ 是 $E$ 的边界点，故 $x_0 \in \partial E$。证毕。

> [!example] ☆ 例6.1.7
> 设 $E \subseteq \mathbb{R}^m$，试证 $\overline{\partial E} \subseteq \partial E$。

> [!proof]- 证
> 设 $x_0 \in \partial \overline{E}$，我们要证明 $x_0 \in \partial E$，即要证明 $x_0$ 为 $E$ 的边界点；亦即要证明 $\forall \delta > 0$，在 $U(x_0, \delta)$ 中既有 $E$ 的点也有不是 $E$ 的点。因 $x_0 \in \partial \overline{E}$，所以 $U(x_0, \delta)$ 中既有 $\overline{E}$ 中的点，又含有不是 $\overline{E}$ 中的点。设 $x_1 \in U(x_0, \delta) \cap \overline{E}$，$x_2 \in U(x_0, \delta) \setminus \overline{E}$。
> 若 $x_1 \in E$，则说明 $U(x_0, \delta)$ 中有 $E$ 的点；若 $x_1 \in \overline{E} \setminus E$，则 $x_1$ 为 $E$ 的聚点。仿上例证法，可知存在邻域 $U(x_1, \delta_1) \subseteq U(x_0, \delta)$，因 $x_1$ 为 $E$ 的聚点，故 $U(x_1, \delta_1)$ 中有 $E$ 中的点，从而知 $U(x_0, \delta)$ 中有 $E$ 的点。
> 由 $x_2 \in U(x_0, \delta) \setminus \overline{E}$ 知，$x_2$ 为 $E$ 的外点，所以存在充分小的邻域在 $E$ 之外，由此知 $U(x_0, \delta)$ 内有不是 $E$ 的点。证毕。

> [!example] ☆ 例6.1.8
> 设 $F \subseteq E$，其中 $E \subseteq \mathbb{R}^m$ 为有界开区域，$F$ 为闭区域，试证：存在开区域 $V$，使得 $F \subseteq V \subseteq \overline{V} \subseteq E$。

> [!proof]- 证
> $\forall x_\lambda \in F \subseteq E$，因 $E$ 为开区域，$\exists r_\lambda > 0$（充分小），使得 $U(x_\lambda, r_\lambda) = \{ x \mid x \in \mathbb{R}^m, |x - x_\lambda| \leq r_\lambda \} \subseteq E$。如此，$\{ U(x_\lambda, r_\lambda) \mid x_\lambda \in F \}$ 组成有界闭区域 $F$ 的一个开覆盖。根据有限覆盖定理，存在有限子覆盖，记作 $\{ U(x_i, r_i) \mid i = 1, 2, \cdots, n \}$。令 $V = \bigcup_{i=1}^n U(x_i, r_i)$，则 $F \subseteq V \subseteq \overline{V} \subseteq E$。

> [!example] ※ 例6.1.9
> 设 $x_0, x_1, \cdots, x_n \in \mathbb{R}^n$，证明 $x_0, x_1, \cdots, x_n$ 在同一超平面上的充要条件是行列式
> 
> $$
> \Delta_0 = \begin{vmatrix}
> x_{01} & x_{02} & \cdots & x_{0n} & 1 \\
> x_{11} & x_{12} & \cdots & x_{1n} & 1 \\
> \vdots & \vdots &        & \vdots & \vdots \\
> x_{n1} & x_{n2} & \cdots & x_{nn} & 1
> \end{vmatrix} = 0,
> $$
> 
> 其中 $x_i = (x_{i1}, x_{i2}, \cdots, x_{in})$，$i = 0, 1, 2, \cdots, n$。

> [!proof]- 证
> **充分性。** 将行列式 $\Delta$ 按第一行展开，可知它是关于动点 $x_\lambda = (x_{\lambda 1}, x_{\lambda 2}, \cdots, x_{\lambda n})$ 的坐标的一次式。因此 $\Delta = 0$ 代表 $\mathbb{R}^n$ 中一超平面。因为 $\lambda = i$ 时，行列式 $\Delta$ 变为零，所以点 $x_i$ 皆位于此超平面上（$i = 0, 1, 2, \cdots, n$）。
> 
> **必要性。** 若 $x_0, x_1, \cdots, x_n$ 同位于一超平面上，则存在常数 $a_1, a_2, \cdots, a_n$，使得
> 
> $$
> \begin{gathered}
> a_1 x_{01} + a_2 x_{02} + \cdots + a_n x_{0n} = 1, \\
> a_1 x_{11} + a_2 x_{12} + \cdots + a_n x_{1n} = 1, \\
> \vdots \\
> a_1 x_{n1} + a_2 x_{n2} + \cdots + a_n x_{nn} = 1.
> \end{gathered}
> $$
> 
> 此式表明行列式 $\Delta_0$ 中列向量线性相关，因此 $\Delta_0 = 0$。
> 当超平面通过原点时，上面方程组右端的 $1$ 应改为 $0$，它表明 $\Delta_0$ 最后一列的余子式恒为 $0$，故 $\Delta_0 = 0$。


### ☆二、多元函数的极限

> [!note] 导读
> 本段是基础性内容，适合本书各类读者。


#### a. 多元函数极限的计算

> [!note] 要点
> 计算多元函数的极限常用的方法是：1）利用不等式，使用两边夹法则；2）变量替换为已知极限，或化为一元函数极限；3）利用极坐标；4）利用初等函数的连续性，利用极限的四则运算性质；5）利用初等变形，特别指数形式常可先求其对数。
> 数的极限；6）若事先能看出极限值，可用 $\varepsilon$-$\delta$ 方法进行证明。

> [!example] ☆例 6.1.10
> 1）求 $\displaystyle\lim_{x\to\infty, y\to\infty} \frac{|x|+|y|}{x^2+y^2}$； 2）求 $\displaystyle\lim_{x\to0, y\to0} (x^2+y^2)^{x^2y^2}$； 3）求 $\displaystyle\lim_{x\to\infty, y\to\infty} \frac{x^2+y^2}{x^4+y^4}$；
> 4）设 $f'(0)=k$，试证明 $\displaystyle\lim_{a\to0^-, b\to0^+} \frac{f(b)-f(a)}{b-a}=k$.（浙江大学）

> [!solution]- 解 (1)
> $$
> 0\leq\frac{|x|+|y|}{x^2+y^2}=\frac{|x|}{x^2+y^2}+\frac{|y|}{x^2+y^2}
> \leq \frac{|x|}{x^2}+\frac{|y|}{y^2}=\frac{1}{|x|}+\frac{1}{|y|}\to0.
> $$

> [!solution]- 解 (2)
> 先求取对数之后的极限：
> $$
> \lim_{x\to0, y\to0} \ln (x^2+y^2)^{x^2y^2}
> =\lim_{x\to0, y\to0} \frac{x^2y^2}{x^2+y^2}(x^2+y^2)\ln(x^2+y^2).
> $$
>
> 因为 $\displaystyle 0\leq\frac{x^2y^2}{x^2+y^2}\leq\frac{(x^2+y^2)^2}{x^2+y^2}=x^2+y^2\to0$，
> $$
> \lim_{x\to0, y\to0} (x^2+y^2)\ln(x^2+y^2)
> \stackrel{\text{令 }x^2+y^2=t}{=} \lim_{t\to0} t\ln t=0,
> $$
> 故 原极限$=e^0=1$.

> [!solution]- 提示 (3)
> 可用极坐标或直接应用不等式.

> [!solution]- 提示 (4)
> （用拟合法.）$\displaystyle k=\frac{b}{b-a}\cdot k - \frac{a}{b-a}\cdot k$，
>
> $$
> \frac{f(b)-f(a)}{b-a}
> = \frac{b}{b-a}\cdot\frac{f(b)-f(0)}{b-0} - \frac{a}{b-a}\cdot\frac{f(a)-f(0)}{a-0}.
> $$
>
> 再提示  $a<0<b$，得 $\displaystyle \left|\frac{a}{b-a}\right|<1$，$\displaystyle \left|\frac{b}{b-a}\right|<1$.
>
> $$
> \begin{aligned}
> \left|\frac{f(b)-f(a)}{b-a}-k\right|
> &\leq \left|\frac{b}{b-a}\right|\cdot\left|\frac{f(b)-f(0)}{b-0}-k\right|
>     + \left|\frac{a}{b-a}\right|\cdot\left|\frac{f(a)-f(0)}{a-0}-k\right| \\
> &\leq \left|\frac{f(b)-f(0)}{b-0}-k\right| + \left|\frac{f(a)-f(0)}{a-0}-k\right|
> \to0 \quad(\text{当 }a\to0^-, b\to0^+\text{ 时}).
> \end{aligned}
> $$


#### b. 证明二元极限不存在

> [!note] 要点
> 根据全面极限与特殊路径极限的关系，证明二元极限不存在. 通常方法是：1）证明径向路径的极限与辐角（或斜率）有关；2）证明某个特殊路径的极限不存在；3）证明两个特殊极限存在但不相等；4）若二元函数在该点某空心邻域里连续，而两累次极限存在不相等，则该点全面极限不存在.

> [!example] ☆例 6.1.11
> 证明下列函数在 $(0,0)$ 处全面极限不存在：
>
> 1）$f_1(x,y)=\dfrac{xy}{x^2+y^2}$； 2）$f_2(x,y)=\dfrac{xy}{x+y}$；
> 3）$f_3(x,y)=\dfrac{x^6y^8}{(x^2+y^4)^5}$； 4）$f_4(x,y)=\dfrac{x^3-y^3}{x^3+y^3}$.

> [!hint]- 提示
> 1）令 $y=kx$ 或化为极坐标.
>
> 2）分母当 $y=-x$ 时为零，因此可以考虑沿与 $y=-x$ 相切的高次曲线的路径的极限，例如令 $y=mx^2-x$，令 $x\to 0$，取极限得 $-\dfrac{1}{m}$，与 $m$ 有关.
>
> 3）可比较 $x=0$ 与 $x=y^2$ 两路径的极限.
>
> 4）$f_4$ 除 $(0,0)$ 点外，处处连续，但在 $(0,0)$ 点两累次极限存在，不相等.

> [!remark] 注
> 累次极限一般不是特殊路径的极限，但在某空心邻域里若函数连续，则累次极限实为沿坐标轴方向的极限.

> [!example] 例 6.1.12
> 函数 $f(x,y)=\dfrac{x^4y^4}{(x^3+y^6)^2}$ 在 $(0,0)$ 点的极限 $\displaystyle\lim_{(x,y)\to(0,0)} f(x,y)$ 存在吗？若存在，求其值.（华东师范大学）

> [!hint]- 提示
> 可考虑沿路径 $x=my^2$ 的极限（$m$ 取不同的常数）.


#### c. 关于全面极限与特殊路径极限的进一步讨论

> [!example] 例 6.1.13
> 证明：
>
> 1）$f(x,y)$ 当 $(x,y)$ 沿径向路径趋向 $(x_0,y_0)$ 时极限存在，保持相等，全面极限 $\lim_{(x,y)\to(x_0,y_0)}f(x,y)$ 仍可以不存在；
>
> 2）但若沿径向路径极限存在相等，并关于辐角 $\theta\in[0,2\pi]$ 一致，则全面极限 $\lim_{(x,y)\to(x_0,y_0)}f(x,y)$ 存在。

> [!hint]- 提示
> 1）可考虑 $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}$。2）利用极限定义，容易证得。

> [!example] ☆例 6.1.14
> 设 $f(x,y)$ 是在区域 $D:|x|\leq 1,|y|\leq 1$ 上的有界 $k$ 次齐次函数 $(k\geq 1)$，问极限 $\displaystyle\lim_{(x,y)\to(0,0)}[f(x,y)+(x-1)e^x]$ 是否存在？若存在，试求其值。（南京大学）

> [!solution]- 解
> 因 $f$ 为 $k$ 次齐次函数，故 $\forall t\in\mathbb R$，有 $f(tx,ty)=t^k f(x,y)$，因此
> $$f(r\cos\theta,r\sin\theta)=r^k f(\cos\theta,\sin\theta).$$
> 又因 $f(x,y)$ 有界，$\exists M>0$，使得 $|f(x,y)|\leq M$（$\forall(x,y)\in D$）。所以
> $$|f(r\cos\theta,r\sin\theta)|=r^k|f(\cos\theta,\sin\theta)|\leq r^kM\to0\quad(\text{当 }r\to0\text{ 时关于 }\theta\in[0,2\pi]\text{ 一致}).$$
> 于是 $\displaystyle\lim_{(x,y)\to(0,0)}[f(x,y)+(x-1)e^x]=-1$.

> [!example] \*例 6.1.15
> 设
> 1）$\forall\theta\in[0,2\pi)$，$f(x,y)=f(r\cos\theta,r\sin\theta)\to0$（当 $r\to0$ 时）；
> 2）存在 $M>0$，使得对任意两点 $(x,y),(x_0,y_0)$（设它们离原点距离相等，且 $>0$），满足
> $$|f(x,y)-f(x_0,y_0)|\leq M\left|\arctan\frac{x_0y-xy_0}{xx_0+yy_0}\right|.$$
> 试证：$\displaystyle\lim_{r\to0}f(x,y)=0$（$r=\sqrt{x^2+y^2}$）。

> [!proof]- 证
> 条件 1）表明：$\forall\theta\in[0,2\pi]$，$\forall\varepsilon>0$，$\exists\delta=\delta(\theta,\varepsilon)>0$，当 $0<r<\delta$ 时，有 $|f(x,y)|<\varepsilon$。（注意：这里的 $\delta$ 不仅依赖 $\varepsilon$，还依赖 $\theta$，而 $\theta\in[0,2\pi]$ 有无穷多个选择，因此未必存在最小的 $\delta>0$。必须求助条件 2）。）
>
> 在条件 2）里：记 $(x,y)=(r\cos\alpha,r\sin\alpha)$，$(x_0,y_0)=(r\cos\beta,r\sin\beta)$，$r>0$，则
> $$\left|\arctan\frac{x_0y-xy_0}{xx_0+yy_0}\right|=\left|\arctan\frac{\sin(\alpha-\beta)}{\cos(\alpha-\beta)}\right|=|\alpha-\beta|,$$
> 这里 $\alpha,\beta$ 分别是点 $(x,y),(x_0,y_0)$ 的辐角。于是由条件 2）知：$\forall\varepsilon>0$，$\exists\delta_0=\varepsilon/(2M)>0$，当 $|\alpha-\beta|<\delta_0$ 时，有
> $$|f(x,y)-f(x_0,y_0)|\leq M\left|\arctan\frac{x_0y-xy_0}{xx_0+yy_0}\right|=M|\alpha-\beta|<M\cdot\frac{\varepsilon}{2M}=\frac{\varepsilon}{2}.\tag{1}$$
>
> （称原点出发的射线为经线，（原点为圆心的）同心圆为纬线，那么条件 1）表明："在同一条经线上的任一点 $(x,y)$，当其向径 $r$ 充分小时，对应的函数值就能任意小；条件 2）表明："在同一纬线上的两点，若它们辐角之差充分小，则对应的函数值相差也能任意小。"）
>
> 现从原点出发，画出 $n$ 条射线，将平面 $\mathbb R^2$ 均匀分为 $n$ 个相等的扇形。取 $n$ 充分大，使得每个扇形的辐角 $\gamma$ 足够小，以至于 $\gamma=2\pi/n\leq\delta_0=\varepsilon/(2M)$，即 $n\geq N=[4\pi M/\varepsilon]$。此时，平面 $\mathbb R^2$ 被等分成 $n$ 个扇形，第 $i$ 号射线 $\ell_i$ 的辐角记为"$i\gamma$"，第 $i$ 个扇形里的任意点 $(x,y)=(r\cos\alpha,r\sin\alpha)$，辐角 $\alpha$ 满足：$(i-1)\gamma<\alpha\leq i\gamma$（$i=1,2,\ldots,n$）。根据条件 1），在 $\ell_i$ 上，$\forall\varepsilon>0$，$\exists\delta_i>0$，当 $r<\delta_i$ 时，有
> $$|f(x_i,y_i)|=|f(r\cos\alpha_i,r\sin\alpha_i)|<\frac{\varepsilon}{2},\quad(x_i,y_i)\in\ell_i\;(i=1,2,\ldots,n).\tag{2}$$
>
> 令 $\delta=\min\{\delta_i\mid i=0,1,2,\ldots,n\}$，则 $(x,y)=(r\cos\alpha,r\sin\alpha)\in\mathbb R^2$（必落在某个扇形里，例如在第 $i$ 个（扇形）里）与射线 $\ell_i$ 上向径为 $r$ 的点 $(x_i,y_i)=(r\cos\alpha_i,r\sin\alpha_i)$ 的辐角差：$|\alpha-\alpha_i|\leq\gamma=2\pi/n$。因此当 $r<\delta$ 时，（由式（1）和（2））有
>
> $$|f(x,y)|\leq|f(x,y)-f(x_i,y_i)|+|f(x_i,y_i)|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.$$
>
> $\displaystyle\lim_{r\to0}f(x,y)=0$ 获证。

> [!exercise] ☆练习
> 设点 $M(x,y)$ 沿任意路径趋向 $M_0(x_0,y_0)$ 时，函数 $f(x,y)$ 的极限恒为 $A$，试证 $\displaystyle\lim_{M\to M_0}f(x,y)=A$。

> [!proof]- 证
> （反证法）若 $f(x,y)\nrightarrow A$（当 $x\to x_0,y\to y_0$ 时），则 $\exists\varepsilon_0>0$ 及点列 $\{M_n\}$（$M_n\to M_0$，当 $n\to\infty$ 时）使得 $|f(M_n)-A|\geq\varepsilon_0\;(n=1,2,\ldots)$。如此顺序用直线段将 $M_1,M_2,M_3,\ldots$ 连成折线 $L$，则 $M$ 沿 $L$ 趋向 $M_0$ 时，$f(x,y)\nrightarrow A$，与已知条件矛盾。

> [!example] \*例 6.1.16
> 已知函数 $f(x,y)$ 定义在 $D=(a,b)\times[c,d]$ 上，且
> （i）$x$ 固定时，对 $y$ 连续；
> （ii）设 $x_0\in(a,b)$ 取定，对任意 $y\in[c,d]$，有 $\displaystyle\lim_{x\to x_0}f(x,y)=g(y)$ 存在。
> 试证：如下两论断等价：
>
> （A）重极限 $\displaystyle\lim_{x\to x_0,\;y\to y_0}f(x,y)=g(y_0)$ 对于任意 $y_0\in[c,d]$ 成立；
>
> （B）当 $x\to x_0$ 时，$f(x,y)\to g(y)$ 关于 $y\in[c,d]$ 一致。
> 当两论断都成立时，$g(y)$ 在 $[c,d]$ 上一致连续。（北京大学）

> [!proof]- 证
> **1°（（A）$\Rightarrow$（B）。）**已知：$\displaystyle\lim_{x\to x_0,\;y\to y_0}f(x,y)=g(y_0)$（对任意 $y_0\in[c,d]$ 成立）。因此，
> 对每个 $y_0\in[c,d]$：$\forall\varepsilon>0$，$\exists\delta=\delta_{y_0}>0$，当 $|x-x_0|<\delta$，$|y-y_0|<\delta$（即 $y\in U(y_0,\delta)$）时，有
> $$|f(x,y)-g(y_0)|<\varepsilon.\tag{1}$$
> 在此式中，将 $y\in U(y_0,\delta)$ 固定，令 $x\to x_0$，则得
> $$|g(y)-g(y_0)|\leq\varepsilon.\tag{2}$$
> 此式表明：$\forall y_0\in[c,d]$，$g(y)$ 在 $y_0$ 处连续，从而一致连续（Cantor 定理）。
>
> 如此，开邻域 $U(y_0,\delta_{y_0})$（$\forall y_0\in[c,d]$）组成 $[c,d]$ 上的开覆盖。根据有限覆盖定理，从中可选出有限子覆盖，记作 $U(y_k,\delta_{y_k})\;(k=1,2,\ldots,m)$。这时，$\forall y\in[c,d]\subset\bigcup_{k=1}^m U(y_k,\delta_{y_k})$，必属于某一个 $U(y_k,\delta_{y_k})$，因此取 $\bar\delta=\min_{1\leq k\leq m}\delta_k$，则当 $|x-x_0|<\bar\delta$ 时，对任意 $y\in[c,d]$，有式（1）成立。故当 $|x-x_0|<\bar\delta$ 时，利用式（1）和（2），恒有
> $$|f(x,y)-g(y)|\leq|f(x,y)-g(y_0)|+|g(y)-g(y_0)|<2\varepsilon\quad(\forall y\in[c,d]\text{ 一致成立}).$$
>
> **2°（（B）$\Rightarrow$（A）。）**已知当 $x\to x_0$ 时，有 $f(x,y)\to g(y)$ 关于 $y\in[c,d]$ 一致。因此，
> $\forall\varepsilon>0$，$\exists\delta_{\text{横向}}>0$（横向指 $x$ 的变化范围），当 $x\in(a,b)$，$|x-x_0|<\delta_{\text{横向}}$ 时，就有
> $$|f(x,y)-g(y)|<\varepsilon\quad(\forall y\in[c,d]).\tag{3}$$
> 任意取定 $y_0\in[c,d]$，由已知条件（i），$x$ 固定时，$f(x,y)$ 对 $y$ 连续。因此在式（3）中，若将 $x$ 固定（令 $x=x_1$，$|x_1-x_0|<\delta$），再让 $y\to y_0$，则对于上述任意 $\varepsilon>0$，$\exists\delta_{x_1}>0$，当 $|y-y_0|<\delta_{x_1}$ 时，有 $|f(x_1,y)-f(x_1,y_0)|<\varepsilon$。于是
> $$
> \begin{aligned}
> |g(y)-g(y_0)|
> &\leq|g(y)-f(x_1,y)|+|f(x_1,y)-f(x_1,y_0)|+|f(x_1,y_0)-g(y_0)|\\
> &<3\varepsilon.
> \end{aligned}
> $$
> 这说明：$\forall y_0\in[c,d]$，$g(y)$ 在 $y_0$ 处连续，（根据 Cantor 定理）从而 $g(y)$ 在 $[c,d]$ 一致连续。故 $\forall\varepsilon>0$，$\exists\delta_{\text{竖向}}>0$（竖向指 $y$ 的变化范围），$\forall y,y_0\in[c,d]$，当 $|y-y_0|<\delta_{\text{竖向}}$ 时，有
> $$|g(y)-g(y_0)|<\varepsilon.\tag{4}$$
> 取 $\delta=\min\{\delta_{\text{横向}},\delta_{\text{竖向}}\}$，则当 $|x-x_0|<\delta$ 且 $|y-y_0|<\delta$（即方邻域里）时，
> $$|f(x,y)-g(y_0)|\leq|f(x,y)-g(y)|+|g(y)-g(y_0)|<2\varepsilon,$$
> 亦即 $\displaystyle\lim_{x\to x_0,\;y\to y_0}f(x,y)=g(y_0)$。证毕。


#### d. 累次极限交换次序问题

> [!example] ☆例 6.1.17
> $\Omega$ 为 $\mathbb{R}^2$ 中的开集，$(x_0,y_0) \in \Omega$，$f(x,y)$ 为 $\Omega$ 上的函数，且
> 1）对每个 $(x,y) \in \Omega$ 的 $x$ 存在 $\lim_{y \to y_0} f(x,y) = g(x)$；
> 2）$\lim_{x \to x_0} f(x,y) = h(y)$，关于 $(x,y) \in \Omega$ 中的 $y$ 一致.
> 试证：$\lim_{x \to x_0} \lim_{y \to y_0} f(x,y) = \lim_{y \to y_0} \lim_{x \to x_0} f(x,y)$. （1）
> （辽宁大学）

> [!remark] 方法
> 为了证明等式（1），只要证明等式左端的累次极限 $\lim_{x \to x_0} \lim_{y \to y_0} f(x,y) = \lim_{x \to x_0} g(x) = A$ 存在，且右端的函数 $h(y) = \lim_{x \to x_0} f(x,y)$ 当 $y \to y_0$ 时趋向 $A$.

> [!proof]- 证
> 1°（证明 $\lim_{x \to x_0} g(x)$ 存在.）因 $(x_0,y_0) \in \Omega$（$\Omega$ 为开集），所以 $\exists \delta_1 > 0$，使得 $\{(x,y) \mid |x-x_0| < \delta_1,\ |y-y_0| < \delta_1\} \subset \Omega$. 由条件 2），$\forall \varepsilon > 0$，$\exists \delta > 0$（$\delta < \delta_1$），当 $0 < |x'-x_0| < \delta$，$0 < |x''-x_0| < \delta$ 时，有
> $$
> |f(x',y) - f(x'',y)| < \varepsilon \quad (\forall y \in \{y \mid |y-y_0| < \delta\}).
> $$
> 令 $y \to y_0$ 取极限，（据条件 1））得 $|g(x') - g(x'')| \leq \varepsilon$. 根据 Cauchy 准则，知 $\lim_{x \to x_0} g(x)$ 存在. 即等式（1）左端极限存在. 记之为 $A$.
> 
> 2°（证明 $\lim_{y \to y_0} h(y) = A$.）$\forall \varepsilon > 0$，由
> $$
> |h(y) - A| \leq |h(y) - f(x,y)| + |f(x,y) - g(x)| + |g(x) - A|,
> $$
> 利用条件 2）及 1° 之结论，可取 $x$ 与 $x_0$ 充分接近使得
> $$
> |h(y) - f(x,y)| < \varepsilon/3,\quad |g(x) - A| < \varepsilon/3.
> $$
> 将 $x$ 固定，由条件 1），$\exists \delta > 0$，使得 $|y-y_0| < \delta$ 时，$|f(x,y) - g(x)| < \varepsilon/3$. 于是由式（2）知 $|h(y) - A| < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$. 证毕.


### *三、多元连续函数

> [!note] 导读
> 本段主要针对数学院系的学生.


#### a. 连续性的证明

> [!note] 要点
> 要证明 $f(x,y)$在$(x_0,y_0)$处连续，即要：$\forall\varepsilon>0$，找$\delta>0$，使得 $|x-x_0|<\delta$，$|y-y_0|<\delta$ 时，恒有 $|f(x,y)-f(x_0,y_0)|<\varepsilon$；
> 或等价地，当 $\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta$ 时，有 $|f(x,y)-f(x_0,y_0)|<\varepsilon$.

> [!example] ☆例6.1.18
> 设 $f(x)$及 $g(y)$分别在区间$[a,b]$，$[c,d]$上连续，定义
> $$F(x,y)=\int_a^x f(s)ds\cdot\int_c^y g(t)dt \quad (a\leq x\leq b,c\leq y\leq d).$$
> 试用"$\varepsilon$-$\delta$"方法证明$F(x,y)$在$D=\{(x,y)\mid a\leq x\leq b,c\leq y\leq d\}$内连续.（大连理工大学）
>
> > [!proof]-
> > 因$f(x),g(y)$分别在$[a,b],[c,d]$上连续,故$\exists M>0$,使得$|f(x)|\leq M$,
> > $|g(y)|\leq M$（当$a\leq x\leq b,c\leq y\leq d$时）.于是
> > $$
> > \begin{aligned}
> > |F(x,y)-F(x_0,y_0)|&=\left|\int_a^x f(s)ds\cdot\int_c^y g(t)dt-\int_a^{x_0} f(s)ds\cdot\int_c^{y_0} g(t)dt\right|\\
> > &\leq\left|\int_a^x f(s)ds\cdot\int_c^y g(t)dt-\int_a^{x_0} f(s)ds\cdot\int_c^y g(t)dt\right|\\
> > &\quad+\left|\int_a^{x_0} f(s)ds\cdot\int_c^y g(t)dt-\int_a^{x_0} f(s)ds\cdot\int_c^{y_0} g(t)dt\right|\\
> > &=\left|\int_{x_0}^x f(s)ds\right|\cdot\left|\int_c^y g(t)dt\right|+\left|\int_a^{x_0} f(s)ds\right|\cdot\left|\int_{y_0}^y g(t)dt\right|\\
> > &\leq\int_{x_0}^x |f(s)|ds\cdot\int_c^d |g(t)|dt+\int_a^b |f(s)|ds\cdot\int_{y_0}^y |g(t)|dt\\
> > &\leq M^2(d-c)|x-x_0|+M^2(b-a)|y-y_0|.
> > \end{aligned}
> > $$
> > 记$\Delta=\max\{b-a,d-c\}$,于是,$\forall(x_0,y_0)\in D$,$\forall\varepsilon>0$,取$\delta=\frac{\varepsilon}{2M^2\Delta}>0$,当$|x-x_0|<\delta$,
> > $|y-y_0|<\delta$,$(x,y)\in D$时,恒有$|F(x,y)-F(x_0,y_0)|<\varepsilon$.证毕.
>
> > [!remark]
> > 应当指出的是,如果未限定用$\varepsilon$-$\delta$方法证明,本题用连续函数运算性质做更快.
> > 因为$\int_a^x f(s)ds$与$\int_c^y g(t)dt$分别为$x$与$y$的一元连续函数,看作二元函数自然也连续.用连续函数的乘法定理,便知$F(x,y)$连续.

> [!example] ☆例6.1.19
> 设$u=f(x,y,z)$在闭立方体$D[a,b;a,b;a,b]$上连续,试证$g(x,y)=\max_{a\leq z\leq b} f(x,y,z)$在正方形$[a,b;a,b]\subset\mathbb{R}^2$上连续.
>
> > [!note]- 提示
> > （或作为引理）先证明:若$f(x,y)$在$D\equiv[a,b]\times[c,d]$上连续,则$g(y)=\max_{x\in[a,b]} f(x,y)$在$[c,d]$上连续.
>
> > [!proof]-
> > 因$f(x,y,z)$在$D$上连续,故在$D$上一致连续.于是,$\forall\varepsilon>0$,$\exists\delta>0$,$D$上:
> > 当$|x-x'|<\delta,|y-y'|<\delta,|z-z'|<\delta$时恒有$|f(x,y,z)-f(x',y',z')|<\varepsilon$.特别,当$|x-x_0|<\delta,|y-y_0|<\delta$时,有$|f(x,y,z)-f(x_0,y_0,z)|<\varepsilon$（$\forall z\in[a,b]$）.即
> > $$f(x_0,y_0,z)-\varepsilon<f(x,y,z)<f(x_0,y_0,z)+\varepsilon.$$
> > 固定$x,y$,让$z$在$[a,b]$上变化,取最大值,可得
> > $$f(x_0,y_0,z)-\varepsilon<f(x,y,z)<g(x_0,y_0)+\varepsilon,\quad\forall z\in[a,b].$$
> > 此不等式中间一项取成最大值$\max_{a\leq z\leq b} f(x,y,z)$时,上式仍成立,得
> > $$f(x_0,y_0,z)-\varepsilon<g(x,y)<g(x_0,y_0)+\varepsilon,\quad\forall z\in[a,b].$$
> > 最后令左边第一项取最大值,得
> > $$g(x_0,y_0)-\varepsilon<g(x,y)<g(x_0,y_0)+\varepsilon.$$
> > 即$|x-x_0|<\delta,|y-y_0|<\delta$时,$|g(x,y)-g(x_0,y_0)|<\varepsilon$.
> > 
> > 至此实际上已证明了:$g(x,y)$不仅在$[a,b;a,b]$上连续,而且一致连续.

**向量函数连续性问题**

> [!note] 要点
> 设$(u,v)=F(x,y)=(f(x,y),g(x,y))$是$\mathbb{R}^2\to\mathbb{R}^2$的函数.要证明$F$在$(x_0,y_0)$处连续（即当$(x,y)\to(x_0,y_0)$时,有$(f(x,y),g(x,y))\to(f(x_0,y_0),g(x_0,y_0))$）,等价于要证明$f(x,y),g(x,y)$都在$(x_0,y_0)$处连续,也等价于要证明当$r=\sqrt{(x-x_0)^2+(y-y_0)^2}\to0$时,$\sqrt{(u-u_0)^2+(v-v_0)^2}\to0$.至于$\mathbb{R}^n$到$\mathbb{R}^m$的映射,情况类似.

> [!example] ※例6.1.20
> 讨论如下向量函数的连续性:设$(u,v)=F(x,y)=(f(x,y),g(x,y))$,其中
> $$u=f(x,y)=\begin{cases}
> \dfrac{x}{(x^2+y^2)^\alpha} \ln(|x|+|y|), & x^2+y^2\neq0\text{ 时},\\[6pt]
> 0, & x^2+y^2=0\text{ 时},
> \end{cases}$$
> $$v=g(x,y)=\begin{cases}
> \dfrac{y}{(x^2+y^2)^\alpha} \ln(|x|+|y|), & x^2+y^2\neq0\text{ 时},\\[6pt]
> 0, & x^2+y^2=0\text{ 时}.
> \end{cases}$$
>
> > [!solution]-
> > 显然$f(x,y),g(x,y)$当$x^2+y^2\neq0$时连续,因此$(x,y)\neq(0,0)$时$F$连续.下面只研究$(0,0)$点的情况.因为
> > $$
> > \begin{aligned}
> > u^2+v^2&=\frac{x^2+y^2}{(x^2+y^2)^{2\alpha}} \ln^2(|x|+|y|) \quad (x^2+y^2\neq0)\\
> > &=(x^2+y^2)^{1-2\alpha} \ln^2(|x|+|y|)\\
> > &\to\begin{cases}
> > 0, & \alpha<\dfrac{1}{2}\text{ 时},\\[6pt]
> > +\infty, & \alpha\geq\dfrac{1}{2}\text{ 时}
> > \end{cases}\quad (r^2=x^2+y^2\to0\text{ 时}).\tag{1}
> > \end{aligned}
> > $$
> > 故当且仅当$\alpha<\frac{1}{2}$时$F$在$(0,0)$点连续.下面对式（1）中的极限进行补充证明.
> > 
> > 当$\alpha\geq\frac{1}{2}$（即$1-2\alpha\leq0$）时,显然极限为$+\infty$.现设$\alpha<\frac{1}{2}$,记$\mu=1-2\alpha$,则$\mu>0$,
> > $$(x^2+y^2)^{1-2\alpha}\ln^2(|x|+|y|)=\frac{(x^2+y^2)^\mu}{(|x|+|y|)^{2\mu}}\cdot(|x|+|y|)^{2\mu}\ln^2(|x|+|y|),$$
> > 这时
> > $$0\leq\frac{(x^2+y^2)^\mu}{(|x|+|y|)^{2\mu}}=\frac{(x^2+y^2)^\mu}{(x^2+2|x||y|+y^2)^\mu}\leq\frac{(x^2+y^2)^\mu}{(x^2+y^2)^\mu}=1,$$
> > 但$(|x|+|y|)^{2\mu}\ln^2(|x|+|y|)\to0$,所以
> > $$(x^2+y^2)^{1-2\alpha}\ln^2(|x|+|y|)\to0 \quad (r\to0\text{ 时}).$$


#### b. 全面连续与按单变量连续的关系

> [!important] 要点
> 全面连续必按各单变量连续，反之按各单变量连续，不一定全面连续。只有补充某种条件之后，才能保证全面连续。

> [!example] 例6.1.21
> $$
> f(x,y)=\begin{cases}
> \dfrac{xy}{x^2+y^2}, & x^2+y^2\neq 0,\\[8pt]
> 0, & x^2+y^2=0
> \end{cases}
> $$
> 在 $(0,0)$ 处关于单变量 $x$ 与 $y$ 都是连续的，但在 $(0,0)$ 处不全面连续。

> [!example] ☆例6.1.22
> 若 $f(x,y)$ 分别是单变量 $x$ 及 $y$ 的连续函数，又对其中一个变量是单调的，试证 $f(x,y)$ 是二元连续函数。（陕西师范大学）
>
> **分析** 假设 $f(x,y)$ 对 $y$ 单调增加，关于 $x,y$ 分别连续。$M_0(x_0,y_0)$ 是任意一点，要证明 $f(x,y)$ 在 $M_0(x_0,y_0)$ 处连续，即要对任意 $\varepsilon>0$，找相应的邻域 $U$，使得 $(x,y)\in U$ 时，有 $|f(x,y)-f(x_0,y_0)|<\varepsilon$。
>
> 如图6.1.1，因 $f(x,y)$ 对 $y$ 连续，故 $\delta_1>0$ 充分小时，有
>
> $$|f(M_1)-f(M_0)|<\varepsilon/2,\quad |f(M_2)-f(M_0)|<\varepsilon/2,$$
>
> 这里 $M_1(x_0,y_0-\delta_1)$, $M_2(x_0,y_0+\delta_1)$。又因 $f$ 对 $x$ 连续，所以 $\delta>0$ 充分小时，若 $M\in M_3M_4$，有
>
> $$|f(M)-f(M_1)|<\varepsilon/2;$$
>
> 若 $M\in M_5M_6$，有 $|f(M)-f(M_2)|<\varepsilon/2$。
>
> 至此在 $M_0(x_0,y_0)$ 的方形邻域：矩形 $M_3M_4M_6M_5$ 内恒有
>
> $$|f(x,y)-f(x_0,y_0)|<\varepsilon.$$
>
> 原因是 $f(x,y)$ 对 $y$ 单调，$f(x,y)$ 夹于 $f(x,y_0-\delta_1)$ 和 $f(x,y_0+\delta_1)$ 之间。例如 $f(x,y)$ 单调增加，则
>
> $$
> \begin{aligned}
> f(x,y)&\leq f(x,y_0+\delta_1)<f(x_0,y_0+\delta_1)+\varepsilon/2\\
> &<(f(x_0,y_0)+\varepsilon/2)+\varepsilon/2=f(x_0,y_0)+\varepsilon.
> \end{aligned}
> $$
>
> 又
>
> $$
> \begin{aligned}
> f(x,y)&\geq f(x,y_0-\delta_1)>f(x_0,y_0-\delta_1)-\varepsilon/2\\
> &>(f(x_0,y_0)-\varepsilon/2)-\varepsilon/2=f(x_0,y_0)-\varepsilon.
> \end{aligned}
> $$
>
> 总之 $f(x_0,y_0)-\varepsilon<f(x,y)<f(x_0,y_0)+\varepsilon$，即 $|f(x,y)-f(x_0,y_0)|<\varepsilon$。

> [!example] ☆例6.1.23
> 在所讨论区域上设 $f(x,y)$ 分别对 $x$ 和 $y$ 连续，试证在下列条件之一满足时，$f(x,y)$ 全面连续：
>
> 1）$f(x,y)$ 对 $x$ 连续关于 $y$ 一致（即 $\forall x_0,\forall\varepsilon>0,\exists\delta=\delta(\varepsilon,x_0)>0$（与 $y$ 无关），当 $|x-x_0|<\delta$ 时，对一切 $y$ 恒有 $|f(x,y)-f(x_0,y)|<\varepsilon$）；
>
> 2）$f(x,y)$ 对 $y$ 连续关于 $x$ 一致；
>
> 3）特别，若对其中一个变量满足 Lipschitz 条件（例如对 $y$ 满足 Lipschitz 条件，即 $\exists L>0$，使得 $\forall y_1,y_2,x$，有 $|f(x,y_1)-f(x,y_2)|\leq L|y_1-y_2|$）；
>
> 4）设所考虑的范围是某个有界闭区域 $D$，而 $f$ 在包含 $D$ 的某个区域 $G$ 上有定义，且在 $G$ 上，对变量 $x$ 或 $y$ 满足局部 Lipschitz 条件（例如对 $y$ 满足局部 Lipschitz 条件，即 $\forall(x_0,y_0)\in G$，存在邻域 $U\subset G$ 及 $L>0$ 使得 $\forall(x,y_1),(x,y_2)\in U$，有 $|f(x,y_1)-f(x,y_2)|\leq L|y_1-y_2|$）。

> [!proof]- 证
> 1）$\forall(x_0,y_0)$，$\forall\varepsilon>0$，$\exists\delta_1=\delta_1(\varepsilon,x_0)>0$（与 $y$ 无关），当 $|x-x_0|<\delta_1$ 时，对一切 $y$ 有 $|f(x,y)-f(x_0,y)|<\varepsilon/2$。又因 $(x_0,y_0)$ 处 $f(x_0,y)$ 对 $y$ 连续，故对此 $\varepsilon>0$，$\exists\delta_2>0$ 使得 $|y-y_0|<\delta_2$ 时，有 $|f(x_0,y)-f(x_0,y_0)|<\varepsilon/2$。
>
> 取 $\delta=\min\{\delta_1,\delta_2\}$，则 $|x-x_0|<\delta$，$|y-y_0|<\delta$ 时，有
>
> $$
> \begin{aligned}
> |f(x,y)-f(x_0,y_0)|&\leq|f(x,y)-f(x_0,y)|+|f(x_0,y)-f(x_0,y_0)|\\
> &<\varepsilon/2+\varepsilon/2=\varepsilon.
> \end{aligned}
> $$
>
> 由 $(x_0,y_0)$ 的任意性，就证明了 $f$ 的连续性。
>
> 2）类似1）。
>
> 3）可从 Lipschitz 条件导出条件1）或2）。
>
> 4）可从条件4）导出条件1）（用有限覆盖定理）。

> [!example] 例6.1.24
> 设函数 $f(x,y)$ 在原点附近有定义，令
> $$F(r,\theta)=f(r\cos\theta,r\sin\theta)\quad(r\geq 0,\;0\leq\theta<2\pi).$$
> 如果 $F(r,\theta)$ 满足如下条件：
>
> 1）$\forall\theta\in[0,2\pi]$，$F(r,\theta)$ 对 $r$ 连续；
>
> 2）对任意 $\varepsilon>0$，存在 $\delta>0$，当 $|\theta-\theta'|<\delta$ 时，有 $|F(r,\theta)-F(r,\theta')|<\varepsilon$，对于 $r$ 一致成立。
>
> 证明：函数 $f(x,y)$ 在原点 $(0,0)$ 处连续。（上海交通大学）

> [!hint]- 提示
> 参见例6.1.15。


#### c. 连续性的等价描述

> [!note] 要点
> 连续性除用 $\varepsilon$-$\delta$ 语言描述之外，还可等价地用邻域，序列，开集，闭集等不同的方式描述。

> [!example] 例6.1.25
> 设 $f(M)$ 在区域 $D$ 内定义①，则如下诸条件等价：
>
> 1）$f(M)$ 在 $D$ 内连续（即：$\forall M_0(x_1^0,\cdots,x_n^0)\in D$，$\forall\varepsilon>0$，$\exists\delta>0$，使得当 $|x_i-x_i^0|<\delta$（$i=1,2,\cdots,n$）时，有 $|f(M)-f(M_0)|<\varepsilon$）；
>
> 1′）$\forall M_0\in D$，$\forall\varepsilon>0$，$\exists\delta>0$，使得当 $|M-M_0|<\delta$ 时，有
> $$|f(M)-f(M_0)|<\varepsilon,$$
> 这里 $|M-M_0|=\sqrt{(x_1-x_1^0)^2+\cdots+(x_n-x_n^0)^2}$；
>
> 1″）$\forall M_0\in D$，$\forall U\in N(f(M_0))$，$\exists V\in N(M_0)$ 使得 $f(V\cap D)\subset U$，这里 $N(M_0)$ 表示 $\mathbb{R}^n$ 中点 $M_0$ 的全体邻域组成的集合。$U\in N(M_0)$ 表示 $U$ 为 $M_0$ 的一个邻域，$N(f(M_0))$ 表示值域空间 $\mathbb{R}$ 中像点 $f(M_0)$ 的邻域集；
>
> 2）$\forall\alpha\in\mathbb{R}$，集合 $E=\{M\mid f(M)>\alpha\}$ 与 $F=\{M\mid f(M)<\alpha\}$ 皆为开集；
>
> 2′）$\forall\alpha<\beta$，$G=\{M\mid\alpha<f(M)<\beta\}$ 恒为开集；
>
> 3）$\forall\alpha\in\mathbb{R}$，$E=\{M\mid f(M)\geq\alpha\}$ 与 $F=\{M\mid f(M)\leq\alpha\}$ 皆为闭集；
>
> 4）若 $M_n\in D$，当 $n\to\infty$ 时 $M_n\to M_0\in D$，则必有 $f(M_n)\to f(M_0)$。

> [!proof]- 证
> 与一元情形类似。下面只就1），2），2′）的等价性进行证明，其余留给读者。
>
> **（1）$\Rightarrow$ 2）** 设 $M_0\in E$，即 $f(M_0)>\alpha$，根据连续函数保号性，知 $\exists\delta>0$，使得 $|M-M_0|<\delta$ 时有 $f(M)>\alpha$。即 $M_0$ 的邻域 $\{M\mid|M-M_0|<\delta\}\subset E$。所以 $E$ 为开集。同理可证 $F$ 为开集。
>
> **（2）$\Rightarrow$ 2′）** 因 $\forall\alpha<\beta$，$\{M\mid\alpha<f(M)<\beta\}=\{M\mid f(M)>\alpha\}\cap\{M\mid f(M)<\beta\}$，故 $\{M\mid\alpha<f(M)<\beta\}$ 亦为开集。
>
> **（2′）$\Rightarrow$ 1）** $\forall M_0\in D$，令 $\alpha=f(M_0)-\varepsilon$，$\beta=f(M_0)+\varepsilon$，则 $M_0\in G=\{M\mid\alpha<f(M)<\beta\}$。因 $G$ 为开集，故存在 $M_0$ 的邻域 $V$，使得 $M_0\in V\subset G$。即当 $M\in V$ 时，有 $f(M_0)-\varepsilon<f(M)<f(M_0)+\varepsilon$，亦即 $|f(M)-f(M_0)|<\varepsilon$。

> [!remark] 注
> 条件2′）实际上就是：任意开区间 $(\alpha,\beta)\subset\mathbb{R}$ 的逆像 $f^{-1}[(\alpha,\beta)]=\{M\mid\alpha<f(M)<\beta\}$ 恒为开集。
>
> 上述结论很容易推广到向量函数的情况。由此我们看到拓扑学中连续性概念的渊源。


#### d. 连续函数性质的应用

i）有界性的应用

> [!example] ☆例6.1.26
> 设
> 1）$\varphi(x)$ 在 $(x_0-\delta,x_0)$（$\delta>0$）上具有连续的导数，并存在 $x_n\in(x_0-\delta,x_0)$（$n=1,2,\cdots$），使得 $x_n\to x_0,\ \varphi(x_n)\to y_0$（当 $n\to\infty$ 时）；
> 2）$f(x,y)$ 在有界闭区域 $G$ 上连续，当 $(x_0,y_0)\in G$，且 $x\in(x_0-\delta,x_0)$ 时，有 $(x,\varphi(x))\in G$，$\varphi'(x)=F(x,\varphi(x))$。[^1]
>
> 试证：$\lim_{x\to x_0}\varphi(x)=y_0$。 （山东大学）

[^1]: "区域"意指开区域，即其内每一点皆为内点。

> [!note]- 分析
> 若 $\varphi(x)\not\to y_0$（当 $x\to x_0^-$ 时），那么由条件 1），当 $x\to x_0^-$ 时，$\varphi(x)$ 只能无限振动，如图 6.1.2 所示。$x$ 充分接近 $x_0$ 时，$\varphi'(x)$ 无界，从而 $f(x,\varphi(x))=\varphi'(x)$ 亦无界，与 $f(x,y)$ 在 $G$ 上连续相矛盾（因为在有界闭区域上连续必有界）。

> [!proof]- 证
> （反证法）设 $\varphi(x)\not\to y_0$（当 $x\to x_0^-$ 时），则 $\exists\,\varepsilon_0>0$ 及数列：$x_n'\in G,\ x_n'<x_0,\ x_n'\to x_0^-$（当 $n\to\infty$ 时），使得
> $$
> |\varphi(x_n')-y_0|\ge \varepsilon_0. \qquad (1)
> $$
>
> 另一方面，已知 $x_n\to x_0,\ \varphi(x_n)\to y_0$（当 $n\to\infty$ 时），所以 $\forall K\in\mathbb{N}$，$\exists N_1>0$，使得 $n>N_1$ 时，$|x_n-x_0|<\dfrac1K$，
> $$
> |\varphi(x_n)-y_0|<\frac{\varepsilon_0}{2}. \qquad (2)
> $$
>
> 由 $x_n'\to x_0$（当 $n\to\infty$ 时）知：$\exists N_2>0$，$n>N_2$ 时，$|x_n'-x_0|<\dfrac1K$。取 $N=\max\{N_1,N_2\}$，则当 $n>N$ 时有
> $$
> |x_n'-x_0|<\frac1K,\qquad |x_n-x_0|<\frac1K. \qquad (3)
> $$
>
> 于是由式（1）和（2），有
> $$
> |\varphi(x_n')-\varphi(x_n)|\ge \bigl||\varphi(x_n')-y_0|-|y_0-\varphi(x_n)|\bigr|>\varepsilon_0-\frac{\varepsilon_0}{2}=\frac{\varepsilon_0}{2}. \qquad (4)
> $$
>
> 由式（3）有
> $$
> |x_n-x_n'|\le |x_n-x_0|+|x_0-x_n'|<\frac2K. \qquad (5)
> $$
>
> 对于 $\dfrac1K$，将如此的 $n$ 固定，利用微分中值定理，$\exists\,\xi_n$ 于 $x_n,x_n'$ 之间，使得 $\varphi(x_n')-\varphi(x_n)=\varphi'(\xi_n)(x_n'-x_n)$。从而由（4）和（5），
> $$
> |\varphi'(\xi_n)|=\left|\frac{\varphi(x_n')-\varphi(x_n)}{x_n'-x_n}\right|\ge \frac{\varepsilon_0/2}{2/K}=\frac{K\varepsilon_0}{4}.
> $$
>
> 已知 $f(x,\varphi(x))=\varphi'(x)$，根据 $K$ 的任意性，如此我们证明了 $\varphi'(x)=f(x,\varphi(x))$ 无界，与 $f$ 在有界闭区域 $G$ 上连续必有界矛盾。

ii）介值定理的应用

> [!example] 例6.1.27
> 证明：不存在由闭区间到圆周上的一对一连续对应。

> [!proof]- 证
> （反证法）设 $K=\{(r,\theta)\mid 0\le \theta<2\pi\}$ 是某个圆，$[a,b]$ 是某个闭区间。若存在 $[a,b]$ 至 $K$ 的一对一连续对应，则 $[a,b]$ 也就连续一对一地对应于区间 $[0,2\pi)$。此 $a,b$ 两点至少有一个对应于 $[0,2\pi)$ 的内点，例如记作 $a$。记 $f$ 为此对应关系，则有 $0<f(a)<2\pi$。取 $\theta_1,\theta_2$ 使得 $0<\theta_1<f(a)<\theta_2<2\pi$。记 $x_1=f^{-1}(\theta_1),\ x_2=f^{-1}(\theta_2)$，则 $x_1,x_2\in(a,b],\ 0<f(x_1)<f(a)<f(x_2)<2\pi$。利用介值定理，$\exists\,\xi$ 在 $x_1$ 与 $x_2$ 之间使得 $f(\xi)=f(a)$，与一对一矛盾。证毕。

iii）确界技术及有关原理

> [!note] 要点
> 1）若 $f(M)\le B$（$\forall M\in J$），则 $\sup_J f(M)\le B$；
>
> 2）若 $f(M)\ge A$（$\forall M\in J$），则 $\inf_J f(M)\ge A$；
>
> 3）若 $f(M)\le g(M)$（$\forall M\in J$），则
> $$
> \sup_J f(M)\le \sup_J g(M),\qquad \inf_J f(M)\le \inf_J g(M);
> $$
>
> 4）有界闭区域上的连续函数，必达上、下确界。

> [!example] ☆例6.1.28
> 设二元函数 $f(x,y)$ 在正方形区域 $[0,1]\times[0,1]$ 上连续，记 $J=[0,1]$。
>
> 1）试比较 $\inf_{y\in J}\sup_{x\in J}f(x,y)$ 与 $\sup_{x\in J}\inf_{y\in J}f(x,y)$ 的大小并证明之；
>
> 2）给出并证明使等式
> $$
> \inf_{y\in J}\sup_{x\in J}f(x,y)=\sup_{x\in J}\inf_{y\in J}f(x,y) \qquad (1)
> $$
> 成立的（你认为最好的）充分条件。（浙江大学）

> [!proof]- 证
> 1° 对任意固定的 $y\in J$，有
> $$
> \sup_{x\in J}f(x,y)\ge f(x,y)\ge \inf_{y\in J}f(x,y)\qquad (\forall x\in J), \qquad (2)
> $$
> 所以 $\sup_{x\in J}f(x,y)\ge \sup_{x\in J}\inf_{y\in J}f(x,y)$。由 $y$ 的任意性知 $\inf_{y\in J}\sup_{x\in J}f(x,y)\ge \sup_{x\in J}\inf_{y\in J}f(x,y)$。
>
> 2° 若 $f(x,y)\equiv$ 常数，则等式（1）明显成立。但这种情况太平凡。一种简单而有意义的条件是 $f(x,y)$ 关于其中某一变量单调。下面以 $f(x,y)$ 对变量 $x$ 单增进行证明。
>
> 上面已证明了式（1）的（左端）$\ge$（右端），现证（左端）$\le$（右端）。因 $f(x,y)$ 对 $x$ 单调增加，所以固定 $y\in J$，有 $\sup_{x\in J}f(x,y)=f(1,y)$。由于 $f(1,y)$ 关于 $y$ 在区间 $J=[0,1]$ 上连续，因此 $\exists\,y_0\in J$ 使得
> $$
> f(1,y_0)=\inf_{y\in J}f(1,y)=\inf_{y\in J}\sup_{x\in J}f(x,y)=\text{左端},
> $$
> 但 $f(1,y_0)=\inf_{y\in J}f(1,y)\le \sup_{x\in J}[\inf_{y\in J}f(x,y)] = \text{右端}$，故（左端）$\le$（右端）。


#### e. 一致连续性

> [!example] ☆ 例 6.1.29
> 设 $\mathbb R^n$ 为 $n$ 维欧氏空间，$A$ 是 $\mathbb R^n$ 的非空子集，定义 $x$ 到 $A$ 的距离为 $f_A(x)=\inf_{y\in A}\rho(x,y)=\rho(x,A)$. 证明 $f_A(x)$ 是 $\mathbb R^n$ 上的一致连续函数.（南京大学）

> [!proof]-
> $\forall x_1,x_2\in \mathbb R^n$，$\forall y\in A$，有 $\rho(x_1,y)\le \rho(x_1,x_2)+\rho(x_2,y)$. 由此
> $$
> \inf_{y\in A}\rho(x_1,y)\le \rho(x_1,x_2)+\rho(x_2,y)\qquad (\forall y\in A).
> $$
> 从而
> $$
> \inf_{y\in A}\rho(x_1,y)\le \rho(x_1,x_2)+\inf_{y\in A}\rho(x_2,y).
> $$
> 所以
> $$
> \inf_{y\in A}\rho(x_1,y)-\inf_{y\in A}\rho(x_2,y)\le \rho(x_1,x_2).
> $$
> $x_1,x_2$ 互换得
> $$
> \inf_{y\in A}\rho(x_2,y)-\inf_{y\in A}\rho(x_1,y)\le \rho(x_2,x_1)=\rho(x_1,x_2).
> $$
> 因此
> $$
> \left|\inf_{y\in A}\rho(x_2,y)-\inf_{y\in A}\rho(x_1,y)\right|\le \rho(x_1,x_2).
> $$
> 故 $\forall\varepsilon>0$，取 $\delta=\varepsilon$，当 $\rho(x_1,x_2)<\delta$ 时，有
> $$
> |\rho(x_2,A)-\rho(x_1,A)|=\left|\inf_{y\in A}\rho(x_2,y)-\inf_{y\in A}\rho(x_1,y)\right|\le \rho(x_1,x_2)<\varepsilon,
> $$
> 即 $\rho(x,A)$ 在 $\mathbb R^n$ 上一致连续.

> [!example] 例 6.1.30
> 设 $D\subset A\subset \mathbb R^n$，$D$ 为有界闭区域，$A$ 为开集. 试证，存在连续函数 $f:\mathbb R^n\to[0,1]$，使得
> $$
> f(x)=\begin{cases}
> 1,& x\in D,\\
> 0,& x\notin A.
> \end{cases}
> $$
> （西南大学）

> [!note]- 提示
> 利用上例的结果与符号，可取
> $$
> f(x)=\frac{\rho(x,A^c)}{\rho(x,A^c)+\rho(x,D)},
> $$
> 其中 $A^c=\mathbb R^n-A$ 表示 $A$ 的补集.

一元函数关于一致连续的一些结果，也可以推广到多元. 如

> [!example] ☆ 例 6.1.31
> 设 $\varphi(x)$ 在 $\mathbb R^n$ 里一致连续，$f(x)$ 在 $\mathbb R^n$ 里连续，且 $\lim_{r\to+\infty}[f(x)-\varphi(x)]=0$（这里 $r=|x|=\rho(x,\theta)$，$\theta$ 表示 $\mathbb R^n$ 中的原点）. 试证 $f(x)$ 在 $\mathbb R^n$ 里一致连续.

> [!note]- 提示
> 参看例 2.2.8.

> [!example] ☆ 例 6.1.32
> 设 $f(x)$ 在 $\mathbb R^n$ 中的有界开区域 $D$ 内连续. 试证：$f(x)$ 在 $D$ 内一致连续的充要条件是 $\forall x_0\in \partial D,\ \lim_{\substack{x\to x_0\\x\in D}}f(x)$ 存在（这里 $\partial D$ 表示 $D$ 的全体边界点组成之集合）.

> [!proof]-
> **必要性.** 因为 $f$ 在 $D$ 上一致连续，所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x,y\in D,\rho(x,y)<\delta$ 时有 $|f(x)-f(y)|<\varepsilon$. 设 $x_0\in\partial D$，因 $D$ 为开区域，故 $x_0$ 必为 $D$ 的聚点. 设 $x_n\in D$，$x_n\to x_0$（当 $n\to\infty$ 时）为任一趋向 $x_0$ 的序列. 则对上述 $\delta>0$，$\exists N>0$，当 $n,m>N$ 时，有 $\rho(x_n,x_m)<\delta$，从而 $|f(x_n)-f(x_m)|<\varepsilon$. 根据 Cauchy 准则，知 $\lim_{n\to\infty}f(x_n)$ 存在. 由于 $x_n\to x_0$ 是任取的，由 Heine 定理，$\lim_{\substack{x\to x_0\\x\in D}}f(x)$ 存在.
>
> **充分性.** 已知 $\forall x_0\in\partial D,\ \lim_{\substack{x\to x_0\\x\in D}}f(x)$ 存在. 今补充定义 $f(x_0)=\lim_{\substack{x\to x_0\\x\in D}}f(x)$.
>
> 于是 $\forall\varepsilon>0$，$\exists\delta>0$，当 $x\in D,\rho(x,x_0)<\delta$ 时，有 $|f(x)-f(x_0)|<\varepsilon$. 对于 $x_1\in\partial D$，若 $\rho(x_1,x_0)<\delta$，则在上式中令 $x\to x_1$，取极限可得 $|f(x_1)-f(x_0)|\le\varepsilon$.
> 故 $\forall x\in \overline D=D\cup(\partial D)$，当 $\rho(x,x_0)<\delta$ 时，恒有 $|f(x)-f(x_0)|\le\varepsilon$. 因 $f$ 在 $D$ 内连续，如此证明了 $f$ 在 $\overline D$ 上连续，进而知 $f$ 在 $\overline D$ 上（从而也就在 $D$ 内）一致连续.

> [!example] ☆ 例 6.1.33
> 设
>
> 1）$D$ 是 $\mathbb R^2$ 里的凸区域（意指：若 $P_1,P_2\in D$ 是 $D$ 内的任意两点，则直线段 $\overline{P_1P_2}$ 全落在 $D$ 内）；
>
> 2）$T$ 是 $D\to\mathbb R^2$ 的映射，有连续导数，且 Jacobi 行列式不为零.
>
> 试证：$T$ 为单射.（北京大学）

> [!proof]-
> （用反证法.）记 $T:(X,Y)=(f(x,y),g(x,y))$（$\forall(x,y)\in D$）. 若 $T$ 不是单射，即至少有两个不同点 $P_1(x_1,y_1),P_2(x_2,y_2)\in D$，使得 $T(P_1)=T(P_2)$，亦即
> $$
> f(x_1,y_1)=f(x_2,y_2),\qquad g(x_1,y_1)=g(x_2,y_2). \qquad (1)
> $$
>
> 根据条件 1），记
> $$
> P_t=(x_1+t\Delta x,\ y_1+t\Delta y)\in D\quad \bigl(\text{其中 }\Delta x=x_2-x_1,\ \Delta y=y_2-y_1,\ t\in[0,1]\bigr),
> $$
> $(X,Y)|_{P_t}=(f(P_t),g(P_t)),\ t\in[0,1]$. 作辅助函数
> $$
> W(t)=f(P_t)\Delta x+g(P_t)\Delta y,\quad t\in[0,1]. \qquad (2)
> $$
>
> 根据条件 2），$W(t)$ 有连续导数，由式（1）知：$W(0)=W(1)$. 应用 Lagrange 定理，$\exists\,\xi\in(0,1)$，记 $P_\xi=(x_1+\xi\Delta x,\ y_1+\xi\Delta y)$，知
> $$
> 0=W(1)-W(0)=W'(\xi)\cdot1
> $$
> $$
> =(f_x'(P_\xi)\Delta x+f_y'(P_\xi)\Delta y)\Delta x+(g_x'(P_\xi)\Delta x+g_y'(P_\xi)\Delta y)\Delta y
> $$
> $$
> =f_x'(P_\xi)\Delta x\Delta x+f_y'(P_\xi)\Delta y\Delta x+g_x'(P_\xi)\Delta x\Delta y+g_y'(P_\xi)\Delta y\Delta y
> $$
> $$
> =(\Delta x,\Delta y)J\binom{\Delta x}{\Delta y}, \qquad (3)
> $$
> 其中
> $$
> J=\begin{vmatrix}
> f_x'(P_\xi) & f_y'(P_\xi)\\
> g_x'(P_\xi) & g_y'(P_\xi)
> \end{vmatrix}.
> $$
> 因为偏导数连续，Jacobi 行列式不为零，那么式（3）只有零解，得 $P_1=P_2$，矛盾！问题获证.

> [!exercise] 练习（推广到 $\mathbb R^n$）
> 设 $D\subset\mathbb R^n$ 是凸区域，连续映射 $T:D\to\mathbb R^n$ 有连续导数，Jacobi 行列式不为零，则 $T$ 必为单射.（北京大学）

> [!note]- 提示
> 这时，若 $T$ 不是单射，则至少存在不同的两点 $x_k=(x_{k1},x_{k2},\cdots,x_{kn})\in D$（$k=1,2$），使得
> $$
> T(x_1)=(f_1(x_1),f_2(x_1),\cdots,f_n(x_1))=T(x_2)=(f_1(x_2),f_2(x_2),\cdots,f_n(x_2)).
> $$
> 作辅助函数
> $$
> W(t)=\sum_{k=1}^n f_k\bigl(x_1+t(x_2-x_1)\bigr)(x_2-x_1)_k,\quad t\in[0,1].
> $$

> [!proof]-
> （用 Lagrange 定理.）$\exists\,\xi\in(0,1)$，使得
> $$
> 0=W(1)-W(0)=W'(\xi)\cdot1
> $$
> $$
> =\sum_{k=1}^n\left[(x_{2k}-x_{1k})\sum_{j=1}^n\left(\frac{\partial}{\partial x_j}f_k(x_\xi)\right)(x_{2j}-x_{1j})\right]
> =\sum_{k,j=1}^n\left(\frac{\partial}{\partial x_j}f_k(x_\xi)\right)\Delta x_{1k}\Delta x_{1j}, \qquad (1)
> $$
> 其中
> $$
> x_\xi\overset{\text{记}}=x_1+\xi(x_2-x_1)=(x_{11}+\xi(x_{21}-x_{11}),\ x_{12}+\xi(x_{22}-x_{12}),\ \cdots,\ x_{1n}+\xi(x_{2n}-x_{1n}))
> $$
> $$
> =(x_{11}+\xi\Delta x_{11},\ x_{12}+\xi\Delta x_{12},\ \cdots,\ x_{1n}+\xi\Delta x_{1n}).
> $$
>
> （二次型）式（1）可改写为乘法形式：
> $$
> \sum_{k,j=1}^n\left(\frac{\partial}{\partial x_j}f_k(x_\xi)\right)\Delta x_{1k}\Delta x_{1j}=\det(J\Delta x_1,\Delta x_1^T)=0. \qquad (2)
> $$
> 其中 $J=\dfrac{\partial}{\partial x_j}f_k(x_\xi)=\left.\dfrac{\partial(f_1,f_2,\cdots,f_n)}{\partial(x_1,x_2,\cdots,x_n)}\right|_{x_\xi}$ 是 Jacobi 矩阵，$\Delta x_1^T$ 表示向量 $\Delta x_1$ 的转置. 式（2）表明，若 $|J|\ne0$，那么例 6.1.33 中的式（3）只有零解，得 $x_1=x_2$，矛盾.（证毕.）


### 单元练习 6.1

**m 维欧氏空间**

6.1.1 设 $l\in\mathbb R^m$，$|l|=1$，$\theta_i$ 表示 $l$ 与坐标向量 $e_i$（$i=1,2,\cdots,m$）的夹角，试证：
$$
l=(\cos\theta_1,\cos\theta_2,\cdots,\cos\theta_m).
$$

6.1.2 $x,y\in\mathbb R^m$，$\theta$ 表示 $x,y$ 的夹角，试证：

1）余弦公式：$|x-y|^2=|x|^2+|y|^2-2|x|\,|y|\cos\theta$；

2）勾股弦定理：$x\perp y$ 正交时，$|x+y|^2=|x|^2+|y|^2$.

6.1.3 $G_1,G_2\subset\mathbb R^n$ 是任意两开集，$G_1\cap G_2=\varnothing$，试证：$G_1\cap\overline{G_2}=\varnothing$.

> [!hint]- 提示
> 若 $G_1\cap\overline{G_2}\ne\varnothing$，则 $\exists\,x\in G_1,\ x\notin G_2$，但 $x\in\overline{G_2}$.

> [!hint]- 再提示
> 于是 $x\in\partial G_2$，进而 $\exists\delta>0$，使得 $U_0(x,\delta)\subset G_1$，但 $U_0(x,\delta)$ 内含有属于 $G_2$ 中的点：$x_1\in G_1\cap G_2$，矛盾.

6.1.4 设 $E\subseteq\mathbb R^n$ 为任意集合，$E'$ 表示 $E$ 的全体聚点组成的集合，称为 $E$ 的导集，试证 $E'$ 为闭集.

> [!hint]- 提示
> 只需证 $\forall x\in\overline{E'}$（$\overline{E'}$ 是导集 $E'$ 的闭包），$\exists\,x_n^*\in E$（$n=1,2,\cdots$），使得 $x_n^*\to x$（$n\to\infty$）即可.

> [!hint]- 再提示
> 因 $x\in\overline{E'}$，故存在彼此不等的 $y_n\in E'$（$n=1,2,\cdots$）使得 $y_n\to x$（$n\to\infty$）. 又由 $y_n\in E'$ 知 $\exists x_n^*\in E$，使得 $|x_n^*-y_n|<\dfrac1{2^n}$. 于是 $|x_n^*-x|\le |x_n^*-y_n|+|y_n-x|\le \dfrac1{2^n}+|y_n-x|\to0$（当 $n\to\infty$ 时）.

6.1.5 设 $A,B\subseteq\mathbb R^n$ 为开集，$A\cap B=\varnothing$. 试证：$\partial(A\cup B)=\partial A\cup\partial B$.

> [!hint]- 提示
> i）$x\in\partial(A\cup B)$，知有彼此互异的 $x_n\in A\cup B,\ x_n\to x$ 故 $A,B$ 中至少有一个含 $x_n$ 的无穷多项；又存在互异的 $y_n\notin A\cup B,\ y_n\to x$，而 $y_n\notin A$，且 $y_n\notin B$. 所以 $x\in\partial A$ 或 $x\in\partial B$，从而 $x\in\partial A\cup\partial B$.
>
> ii）$x\in\partial A\cup\partial B$，即 $x\in\partial A$ 或 $x\in\partial B$，从而 $x$ 不可能是 $A\cup B$ 之内点（因 $A,B$ 为开集，且 $A\cap B=\varnothing$），$x$ 也不可能是 $A\cup B$ 的外点（否则与 $x\in\partial A$ 或 $x\in\partial B$ 矛盾）. 因此，$x\in\partial(A\cup B)$.

6.1.6 设 $A,B\subseteq\mathbb R^n$ 为有界闭集，$A\cap B=\varnothing$，试证：$\exists$ 开集 $W,V$，使得 $A\subseteq W,B\subseteq V$，且 $W\cap V=\varnothing$.

> [!hint]- 提示
> 记 $d=\rho(A,B)=\inf\{|x-y|\mid x\in A,y\in B\}>0$，
> $$
> W=\{x\mid x\in\mathbb R^n,\rho(x,A)<\tfrac d3\},\qquad V=\{x\mid x\in\mathbb R^n,\rho(x,B)<\tfrac d3\}
> $$
> 即可（参见例 6.1.4 和 6.1.5）.

> [!exercise] ☆6.1.7
> 设 $S\subset\mathbb R^2$，$P_0(x_0,y_0)$ 为 $S$ 的内点，$P_1(x_1,y_1)$ 为 $S$ 的外点. 证明：直线段 $\overline{P_0P_1}$ 必与 $S$ 的边界 $\partial S$ 至少有一交点.（华东师范大学）

> [!hint]- 提示
> 可对线段 $P_0P_1$ 进行二等分法，在 $P_0P_1$ 上找出 $S$ 的界点.

> [!hint]- 再提示
> $P_0$ 为内点，$P_1$ 为外点，$P_0P_1$ 二等分，若中点为 $S$ 的界点，则问题已解决；否则两半之中，至少有一半其两端点为一内(点)、一外(点). 将此半段再二等分. 照此办理，每次二等分后，中点若为界点则问题已解决，否则继续再分. 把 $P_0P_1$ 所在的直线看成是数轴，这就构成了数轴上的区间套 $\{ [A_n,B_n] \}$，$A_n$、$B_n$ 分别为 $S$ 的内点和外点，$\{ [A_n,B_n] \}$ 有唯一的公共点 $\xi\in[A_n,B_n]$（$n=1,2,\dots$），这里 $A_1=P_0$，$B_1=P_1$；$|\xi-A_n|,|\xi-B_n|\leq|B_n-A_n|=\frac{1}{2^{n-1}}|P_1-P_0|\to0$（当 $n\to\infty$ 时）. $\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时 $A_n,B_n\in U(\xi,\varepsilon)$. 即 $\xi$ 的任一 $\varepsilon$ 邻域里既有 $S$ 的内点又有 $S$ 的外点，故 $\xi$ 是 $S$ 的边界点.

---

**多元极限**

> [!exercise] ☆6.1.8
> 求极限
>
> 1) $\displaystyle\lim_{(x,y)\to(+\infty,+\infty)}(x^2+y^2)e^{-(x+y)}$.（北京航空航天大学）
>
> 2) $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{\sqrt{x+y+1}-1}$（若极限不存在，说明理由；）（西北轻工业学院）
>
> 3) $\displaystyle\lim_{(x,y)\to(0,0)}\frac{\arctan(x^3+y^3)}{x^2+y^2}$.

> [!hint]- 提示
> 1) 原式 $\displaystyle=\lim_{(x,y)\to(+\infty,+\infty)}\left(\frac{x^2}{e^x}\cdot\frac{1}{e^y}+\frac{y^2}{e^y}\cdot\frac{1}{e^x}\right)=0$.
>
> 2) 若原式极限存在，则 $\displaystyle\frac{xy}{x+y}=\frac{xy}{\sqrt{x+y+1}-1}\cdot\frac{1}{\sqrt{x+y+1}+1}$ 的极限也应存在，但用特殊路径法（例 6.1.11 中 2）已知该极限不存在，矛盾.
>
> 3) 原式 $\displaystyle=\lim_{(x,y)\to(0,0)}\left[\frac{\arctan(x^3+y^3)}{x^3+y^3}\cdot\frac{x^3+y^3}{x^2+y^2}\right]=1\cdot0=0$.

> [!exercise] ☆6.1.9
> 设 $f(x,y)=\begin{cases} x\sin\frac{1}{y}+y\sin\frac{1}{x}, & xy\neq0\\ 0, & xy=0 \end{cases}$，试讨论下面三种极限：
>
> 1) $\displaystyle\lim_{(x,y)\to(0,0)}f(x,y)$； 2) $\displaystyle\lim_{x\to0}\lim_{y\to0}f(x,y)$； 3) $\displaystyle\lim_{y\to0}\lim_{x\to0}f(x,y)$.（南京工业大学）

> [!hint]- 提示
> 1) $0\leq|f(x,y)|\leq|x|+|y|\to0$.
>
> 2)、3) 内层极限不存在，从而累次极限不存在.

> [!exercise] ☆6.1.10
> 设 $f(x,y)$ 为二元函数，在 $(x_0,y_0)$ 附近有定义，试讨论二重极限 $\displaystyle\lim_{(x,y)\to(x_0,y_0)}f(x,y)$ 与累次极限 $\displaystyle\lim_{x\to x_0}\lim_{y\to y_0}f(x,y)$ 之间的关系.（浙江大学）

> [!hint]- 提示
> （1）上题已证明二重极限存在，两个累次极限可以不存在.
>
> （2）例 6.1.11 中 4）表明：两个累次极限存在可以不相等.
>
> （3）例 6.1.11 中 1）至 4）还表明：二重极限不存在，两个累次极限仍可能存在. 这时两个累次极限可以相等（如 1）、2）、3））也可以不等（如 4））.
>
> （4）若 $\displaystyle\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A$，且 $\displaystyle\lim_{x\to x_0}\lim_{y\to y_0}f(x,y)$ 的内层极限 $\displaystyle\lim_{y\to y_0}f(x,y)$ 在 $x_0$ 的某个 $\delta$ 邻域里存在（$\delta_1>0$），则 $\displaystyle\lim_{x\to x_0}\lim_{y\to y_0}f(x,y)=A$.（另一个累次极限亦然.）

> [!proof]- 再提示（证(4)）
> 因 $\forall\varepsilon>0$，$\exists\delta>0$（取 $\delta<\delta_1$），当 $|x-x_0|<\delta$，$|y-y_0|<\delta$ 时，$A-\varepsilon<f(x,y)<A+\varepsilon$，在此不等式里令 $y\to y_0$，取极限，记 $\displaystyle\lim_{y\to y_0}f(x,y)=g(x)$，得
> $$
> A-\varepsilon\leq g(x)\leq A+\varepsilon\quad(\forall x:|x-x_0|<\delta),
> $$
> 此即表明 $\displaystyle A=\lim_{x\to x_0}g(x)=\lim_{x\to x_0}\lim_{y\to y_0}f(x,y)$. 证毕.

---

**多元连续函数**

6.1.11 设 $f(x,y)$ 在 $G=\{(x,y): x^2+y^2<1\}$ 上有定义，若 1) $f(x,0)$ 在点 $x=0$ 处连续；2) $f'_y(x,y)$ 在 $G$ 上有界，证明 $f(x,y)$ 在 $(0,0)$ 处连续.（北京大学）

> [!hint]- 提示
> 可参看例 6.1.23，并注意由条件 2) 可推出 $f(x,y)$ 对 $y$ 满足 Lipschitz 条件，关于 $x$ 一致.

> [!proof]- 再提示
> 由条件 1) 知：$\forall\varepsilon>0$，$\exists\delta_1>0$，当 $|x|<\delta_1$ 时，$|f(x,0)-f(0,0)|<\varepsilon/2$.
>
> 由条件 2) 知：$\exists M>0$，使 $|f'_y(x,y)|\leq M$，$(x,y)\in G$，
> $$
> |f(x,y)-f(x,0)|=|f'_y(x,\xi)|\cdot|y-0|\leq M|y|.
> $$
> 取 $\delta=\min\{\varepsilon/(2M),\delta_1\}$，则当 $|x|<\delta$，$|y|<\delta$ 时，有
> $$
> |f(x,y)-f(0,0)|\leq|f(x,y)-f(x,0)|+|f(x,0)-f(0,0)|<\varepsilon/2+\varepsilon/2=\varepsilon.
> $$

6.1.12 设 $f(x,y)$ 在有界闭区域 $D\subseteq\mathbb R^2$ 上连续，其值域为 $R$，试证：$\forall\{u_n\}\subset R$，$\exists$ 收敛子列 $\{u_{n_k}\}$ 及点 $(x_0,y_0)\in D$，使得 $\displaystyle\lim_{k\to\infty}u_{n_k}=f(x_0,y_0)$.（华中师范大学）

> [!hint]- 提示
> $\forall u_n$，$\exists(x_n,y_n)\in D$，使 $f(x_n,y_n)=u_n$，再利用致密性原理.

> [!hint]- 再提示
> $\exists\{(x_{n_k},y_{n_k})\}$ 的收敛子列，记 $\displaystyle\lim_{k\to\infty}(x_{n_k},y_{n_k})=(x_0,y_0)\in D$，则由 $f$ 的连续性知 $u_{n_k}=f(x_{n_k},y_{n_k})\to f(x_0,y_0)$（当 $k\to\infty$ 时）.

> [!exercise] ☆6.1.13
> 设 $f(x,y)$ 在矩形 $D:-a\leq x\leq a,\ -b\leq y\leq b\ (a>0,b>0)$ 上分别是 $x$ 和 $y$ 的连续函数，而且 $f(0,0)=0$. 试证：若当 $x$ 固定时，$f(x,y)$ 是 $y$ 的严格递减函数，则存在 $\delta>0$，使对每个 $x\in(-\delta,\delta)$ 有 $y\in(-b,b)$ 满足 $f(x,y)=0$.（西南大学）

> [!hint]- 提示
> 参看例 6.1.22.

> [!hint]- 再提示
> $f(0,0)=0$，$f(x,y)$ 对 $y$ 严 $\searrow$，$f(0,b)<0$，以及 $f(0,-b)>0$，由 $f(x,y)$ 关于 $x$ 连续 $\exists\delta>0,\delta<a$，$-\delta<x<\delta$ 时
> $$
> \left\{\begin{aligned}
> &f(x,b)<0,\\
> &f(x,-b)>0,
> \end{aligned}\right.
> $$
> 由 $f(x,y)$ 关于 $y$ 连续，$\forall x\in(-\delta,\delta)$，$\exists y\in(-b,b)$ 使 $f(x,y)=0$.

> [!exercise] ☆6.1.14
> 设 $u=f(x,y,z)$ 在闭立方体 $a\leq x\leq b$，$a\leq y\leq b$，$a\leq z\leq b$ 上连续，令 $\displaystyle\varphi(x)=\max_{\substack{a\leq y\leq b\\a\leq z\leq b}}\min f(x,y,z)$，试证：$\varphi(x)$ 在 $[a,b]$ 上连续.（辽宁师范大学）

> [!hint]- 提示
> 参看例 6.1.19.

> [!hint]- 再提示
> $f(x,y,z)$ 在 $[a,b;a,b;a,b]$ 上连续可用类似于例 6.1.19 的方法：$\displaystyle g(x,y)=\min f(x,y,z)$ 在 $[a,b;a,b]$ 上连续，故 $\displaystyle\varphi(x)=\max g(x,y)$ 在 $[a,b]$ 上连续.

6.1.15 设 $f(x)$ 在 $\mathbb R^n$ 上连续，$x\neq\theta$（$\mathbb R^n$ 中的原点）时，$f(x)>0$，且 $\forall x\in\mathbb R^n$ 及 $c>0$ 有 $f(cx)=cf(x)$. 试证 $\exists a,b>0$，使得 $a|x|\leq f(x)\leq b|x|$（$\forall x\in\mathbb R^n$）.

> [!hint]- 提示
> 利用 $f$ 在单位球面上达到最大、最小值.

> [!hint]- 再提示
> $S$ 表示 $\mathbb R^n$ 的单位球面，则 $\forall\theta\neq x\in\mathbb R^n$，$x/|x|\in S$，$f$ 是 $S$ 上的连续函数，在 $S$ 上有最大值 $b(>0)$、最小值 $a(>0)$，故 $a\leq f(x/|x|)\leq b$，亦即 $a|x|\leq f(x)\leq b|x|$（$\forall x\in\mathbb R^n$）.

6.1.16 设 $A$ 是 $n\times n$ 矩阵，$\det A\neq0$，试证：$\exists\alpha>0$，使得 $\forall x\in\mathbb R^n$，有 $|Ax|\leq\alpha|x|$.

> [!hint]- 提示
> 可用 Cauchy 不等式，或用反证法.

> [!hint]- 再提示
> 记 $A=(a_{ij})$，$x=(x_1,x_2,\dots,x_n)$，则
> $$
> \begin{aligned}
> |Ax|&=\Bigl[\sum_i\Bigl(\sum_j a_{ij}x_j\Bigr)^2\Bigr]^{1/2}\\
> &\leq\Bigl(\sum_i\sum_j a_{ij}^2\cdot\sum_j x_j^2\Bigr)^{1/2}
> =\Bigl(\sum_i\sum_j a_{ij}^2\Bigr)^{1/2}\cdot|x|\triangleq\alpha|x|.
> \end{aligned}
> $$

6.1.17 设连续函数 $f:\mathbb R^n\to\mathbb R$ 满足如下三条件：

i) $\forall x\in\mathbb R^n$，$f(x)\geq0$，且 $x=\theta\Leftrightarrow f(x)=0$；

ii) $\forall\lambda\in\mathbb R$，有 $f(\lambda x)=|\lambda|f(x)$；

iii) $\forall x,y\in\mathbb R^n$，$f(x+y)\leq f(x)+f(y)$.

试证：

1) $\exists M>0$，使得 $\forall x\in\mathbb R^n$，有 $f(x)\leq M|x|$；

2) $f$ 满足 Lipschitz 条件，即 $\exists L>0$，使得 $|f(x)-f(y)|\leq L\rho(x,y)$（$\forall x,y\in\mathbb R^n$）；

3) 存在常数 $a>0$，使得 $\forall x\in\mathbb R^n$ 有 $a|x|\leq f(x)$.

> [!hint]- 提示
> 1)、2) 利用上面习题 6.1.15 可得.

> [!proof]- 再提示
> （当 $x\neq y$ 时）
> $$
> \begin{aligned}
> f(x)-f(y)&=f(x-y+y)-f(y)\leq f(x-y)\\
> &\leq|x-y|\,f\!\left(\frac{x-y}{|x-y|}\right)\leq L|x-y|=L\rho(x,y),
> \end{aligned}
> $$
> 其中 $L$ 为 $f$ 在单位球面 $S$ 上的界：$|f(x)|\leq L$（$\forall x\in S$）.
>
> 同理，有 $f(y)-f(x)\leq L\rho(x,y)$.
>
> 故 $|f(x)-f(y)|\leq L\rho(x,y)$（$\forall x,y\in\mathbb R^n$）（此式是当 $x\neq y$ 时推得的，但 $x=y$ 时明显成立）.

> [!exercise] *6.1.18
> 设 $f:\mathbb R^n\to\mathbb R$ 为连续函数，试证：$E=\{x\mid f(x)=0\}$ 是 $\mathbb R^n$ 中的闭集.

> [!hint]- 提示
> 设 $x_0$ 是 $E$ 的任一聚点，证 $x_0\in E$.

> [!exercise] *6.1.19
> 试对 $f:\mathbb R^n\to\mathbb R$ 写出例 2.1.7 对应结果，并给出证明.

> [!exercise] *6.1.20
> 试对 $f:\mathbb R^n\to\mathbb R^m$ 写出例 2.1.6 的相应结果，并给出证明.

> [!exercise] **6.1.21
> 设 $f$ 在 $\mathbb R^n$ 中点 $x_0$ 的邻域里有界，记 $M_f(x_0,\delta)=\sup\{|f(x)|\mid\rho(x,x_0)<\delta\}$，$m_f(x_0,\delta)=\inf\{|f(x)|\mid\rho(x,x_0)<\delta\}$，则极限 $\displaystyle\omega_f(x_0)=\lim_{\delta\to0^+}[M_f(x_0,\delta)-m_f(x_0,\delta)]$ 存在，并称之为 $f$ 在 $x_0$ 处的振幅. 试证：$f(x)$ 在 $x_0$ 处连续的充要条件是 $\omega_f(x_0)=0$.

> [!exercise] ※6.1.22
> 设集合 $E\subseteq\mathbb R^n$ 是非闭的，函数 $f(x)$ 在 $E$ 上一致连续. 试证：$f$ 只能唯一地连续延拓到 $\overline E$ 上，使在 $\overline E$ 上一致连续.

> [!exercise] *6.1.23
> 设 $f(x)$ 在 $\mathbb R^n$ 上连续，$\displaystyle\lim_{|x|\to+\infty}f(x)$ 存在. 试证 $f$ 在 $\mathbb R^n$ 上一致连续.


## §6.2 多元函数的偏导数

> [!note] 导读
> 本节是基础性内容，既是教学重点，也是各类考试的热点。一至四段适合本书各类读者；第五段主要针对数学学院学生。


### ☆ 一、偏导数的计算

> [!note] 要点
> $f'_x(a,b) = \left[\frac{\mathrm{d}}{\mathrm{d}x} f(x,b)\right]_{x=a}$。
> 若 $f$ 在 $(a,b)$ 与 $(a,b)$ 的附近用不同的初等函数给出，则需用定义通过极限来计算。

> [!example] 例6.2.1
> 设
> $$
> f(x,y)=
> \begin{cases}
> \dfrac{xy(x^2-y^2)}{x^2+y^2}, & (x,y)\neq(0,0)\\[8pt]
> 0, & (x,y)=(0,0)
> \end{cases}
> $$
> 试求 $f''_{xy}(0,0)$ 与 $f''_{yx}(0,0)$。（北京师范大学）

> [!solution]- 解
> $$
> f'_x(x,y)=
> \begin{cases}
> \dfrac{y(x^4+4x^2y^2-y^4)}{(x^2+y^2)^2}, & (x,y)\neq(0,0)\\[8pt]
> 0, & (x,y)=(0,0)
> \end{cases}
> $$
> 由此
> $$
> f'_x(0,y)=
> \begin{cases}
> -y, & y\neq0\\
> 0, & y=0
> \end{cases}\;=\;-y
> $$
> 所以 $f''_{xy}(0,0)=[f'_x(0,y)]'|_{\,y=0}=-1$。类似可得 $f''_{yx}(0,0)=1$。

> [!remark] 注
> 该例说明混合偏导数一般来说与求导次序有关。


### ☆ 二、复合函数微分法（链式法则）

> [!example] 例6.2.2
> 设 $u(x,y)$ 的所有二阶偏导数都连续，$\frac{\partial^2 u}{\partial x^2} - \frac{\partial^2 u}{\partial y^2} = 0$。
> $u(x,2x) = x$，$u'_x(x,2x) = x^2$。
> 试求 $u''_{xx}(x,2x)$，$u''_{xy}(x,2x)$，$u''_{yy}(x,2x)$。（南开大学）

> [!solution]- 解
> 已知 $u(x,2x) = x$，对 $x$ 求导，可得 $u'_x(x,2x) + u'_y(x,2x) \cdot 2 = 1$。
> 已知 $u'_x(x,2x) = x^2$，因此有 $u'_y(x,2x) = \frac{1-x^2}{2}$。此式对 $x$ 求导得
> $$u''_{yx}(x,2x) + 2u''_{yy}(x,2x) = -x. \qquad\text{(1)}$$
> $u'_x(x,2x) = x^2$ 对 $x$ 求导得
> $$u''_{xx}(x,2x) + 2u''_{xy}(x,2x) = 2x. \qquad\text{(2)}$$
> （1）、（2）与已知关系 $u''_{xx} - u''_{yy} = 0$ 联立，注意到二阶导数连续，故 $u''_{xy} = u''_{yx}$，得
> $$u''_{xx}(x,2x) = u''_{yy}(x,2x) = -\frac{4}{3}x, \quad u''_{xy}(x,2x) = u''_{yx}(x,2x) = \frac{5}{3}x.$$

> [!exercise] 练习
> 已知 $f(x)$ 有二阶连续偏导数，且 $f(x,x^2) = x^2$，$f'_x(x,x^2) = 4x$，$f''_{xx}(x,x^2) = 2x^2 f''_{xx}(x,x^2)$？（原图续）
> 计算 $4f'_x(x,x^2) - f''_{xx}(x,x^2) + x^2 f''_{yy}(x,x^2)$ 之值。

> [!solution]- 解（因 $f''$ 连续）
> $f(x,x^2) = x^2$ 同时对 $x$ 求导，得
> $$f'_x(x,x^2) + 2x f'_y(x,x^2) = 2x.$$
> 代入已知的 $f'_x(x,x^2) = 4x$，得
> $$f'_y(x,x^2) = -1. \qquad\text{(1)}$$
> 再对 $y$ 求导，得
> $$f''_{xy}(x,x^2) + 2x f''_{yy}(x,x^2) = 0.$$
> 因 $f''$ 连续，故
> $$f''_{xy}(x,x^2) + 2x f''_{yy}(x,x^2) = 0. \qquad\text{(2)}$$
> 由 $f'_x(x,x^2) = 4x$ 可知
> $$f''_{xx}(x,x^2) + 2x f''_{xy}(x,x^2) = 4. \qquad\text{(3)}$$
> （3）$-2x \times$（2），得 $f''_{xx}(x,x^2) - 4x^2 f''_{yy}(x,x^2) = 4$。已知有
> $$f''_{xx}(x,x^2) = 2x^2 f''_{yy}(x,x^2),$$
> 故 $2x^2 f''_{yy}(x,x^2) - 4x^2 f''_{yy}(x,x^2) = 4$，即 $-2x^2 f''_{yy}(x,x^2) = 4$，亦即
> $$f''_{yy}(x,x^2) = -\frac{2}{x^2}. \qquad\text{(5)}$$
> 代入(4)可得
> $$f''_{xx}(x,x^2) = 2x^2 f''_{yy}(x,x^2) = 2x^2 \cdot \left(-\frac{2}{x^2}\right) = -4. \qquad\text{(6)}$$
> 用式(1)、(5)、(6)的结果代入，可得
> $$4f'_x(x,x^2) - f''_{xx}(x,x^2) + x^2 f''_{yy}(x,x^2) = -2.$$

> [!example] 例6.2.3
> 设 $u = f(x+y+z,\; x^2+y^2+z^2)$，证明：
> $$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 3f''_{11} + 4(x+y+z)f''_{12} + 4(x^2+y^2+z^2)f''_{22} + 6f'_2.$$
> （注意 $f'_1$，$f'_2$ 仍是中间变量 $x+y+z$，$x^2+y^2+z^2$ 的函数。）

> [!example] 例6.2.4
> 设 $x^2 + xy + y^2 = 3$，证明：$y'' = -\dfrac{18}{(x+2y)^3}$。

> [!note] 注
> 求导后，$x,y$ 仍满足原方程。

> [!example] ☆例6.2.5
> 设 $u = f(z)$，其中 $z$ 为方程式
> $$z = x + y\varphi(z) \qquad\text{(1)}$$
> 所定义的变量（为 $x$ 和 $y$ 的隐函数）。证明 Lagrange 公式
> $$\frac{\partial^n u}{\partial y^n} = \frac{\partial^{n-1}}{\partial x^{n-1}} \left[ (\varphi(z))^n \frac{\partial u}{\partial x} \right]. \qquad\text{(2)}$$
> （广西师范学院）
>
> 分析 $u$ 为 $z$ 的函数，$z$ 通过式(1)定义为 $x,y$ 的函数。因此 $u$ 是 $x,y$ 的复合函数，依赖关系为 $u = z\langle x,y \rangle$。

> [!proof]- 证（用数学归纳法）
> 先证明 $n=1$ 的情况。利用链式法则 $\frac{\partial u}{\partial y} = f'(z) z'_y$。由式(1)，利用隐函数求导法则，可得 $z'_y = \frac{\varphi(z)}{1 - y\varphi'(z)}$。所以
> $$\frac{\partial u}{\partial y} = \frac{f'(z)\varphi(z)}{1 - y\varphi'(z)}. \qquad\text{(3)}$$
> 同理可得
> $$\frac{\partial u}{\partial x} = f'(z)z'_x = \frac{f'(z)}{1 - y\varphi'(z)}.$$
> 与（3）比较知
> $$\frac{\partial u}{\partial y} = \varphi(z) \frac{\partial u}{\partial x}. \qquad\text{(4)}$$
> 这就是（2）当 $n = 1$ 时的情况。
>
> 现假定式（2）对 $n-1$ 的情况成立，来证明对 $n$ 的情况也成立。事实上，
>
> 式（2）左端 $= \frac{\partial}{\partial y} \left( \frac{\partial^{n-1} u}{\partial y^{n-1}} \right)$
> $= \frac{\partial}{\partial y} \frac{\partial^{n-2}}{\partial x^{n-2}} \left[ (\varphi(z))^{n-1} \frac{\partial u}{\partial x} \right]$
> $= \frac{\partial^{n-2}}{\partial x^{n-2}} \frac{\partial}{\partial y} \left[ (\varphi(z))^{n-1} \frac{\partial u}{\partial x} \right]$
>
> $= \frac{\partial^{n-2}}{\partial x^{n-2}} \left[ (n-1)(\varphi(z))^{n-2} \varphi'(z) \frac{\partial z}{\partial y} \frac{\partial u}{\partial x} + (\varphi(z))^{n-1} \frac{\partial^2 u}{\partial x \partial y} \right], \qquad\text{(5)}$
>
> 式（2）右端 $= \frac{\partial^{n-1}}{\partial x^{n-1}} \left[ (\varphi(z))^n \frac{\partial u}{\partial x} \right]$
> $= \frac{\partial^{n-1}}{\partial x^{n-1}} \left[ (\varphi(z))^{n-1} \frac{\partial u}{\partial y} \right]$ （利用式（4））
>
> $= \frac{\partial^{n-2}}{\partial x^{n-2}} \left[ (n-1)(\varphi(z))^{n-2} \varphi'(z) \frac{\partial z}{\partial x} \frac{\partial u}{\partial y} + (\varphi(z))^{n-1} \frac{\partial^2 u}{\partial x \partial y} \right]. \qquad\text{(6)}$
>
> 由于 $z'_y = \varphi(z) z'_x$ 及式（4），有 $\frac{\partial z}{\partial y} \frac{\partial u}{\partial x} = \frac{\partial z}{\partial x} \frac{\partial u}{\partial y}$，故（5），（6）两式右端相等，式（2）获证。

> [!example] ☆例6.2.6
> 若 $z = f(x,y)$ 满足
> $$f(tx,ty) = t^k f(x,y) \quad (t > 0), \qquad\text{(1)}$$
> 则称 $f(x,y)$ 为 $k$ 次齐次函数，试证下述关于齐次函数的 Euler 定理：设 $f(x,y)$ 可微，则 $f(x,y)$ 为 $k$ 次齐次函数的充要条件是
> $$x f'_x(x,y) + y f'_y(x,y) = k f(x,y). \qquad\text{(2)}$$

> [!proof]- 证
> **必要性。** 式（1）对 $t$ 求导，再令 $t = 1$ 即得（2）。
>
> **充分性。** 方法一 要证 $t > 0$ 时（1）成立，即要证 $\varphi(t) = \frac{f(tx,ty)}{t^k} = f(x,y)$。因 $\varphi(1) = f(x,y)$，因此只要证明 $\varphi'(t) = 0$ 即可。利用复合函数微分法及式（2），这是明显的。
>
> 方法二 （按必要性的证法倒退回去。）在式（2）中分别用 $tx,ty$ 代替自变量 $x,y$，得
> $$tx f'_x(tx,ty) + ty f'_y(tx,ty) = k f(tx,ty). \qquad\text{(3)}$$
> 记 $\varphi(t) = f(tx,ty)$，则（3）为
> $$t\varphi'(t) = k\varphi, \quad \text{且} \quad \varphi(1) = f(x,y).$$
> 由此解微分方程即得式（1）。

> [!example] ☆例6.2.7
> 设 $f(x,y)$ 为 $n$ 次齐次函数，且 $m$ 次可微，证明：
> $$\left( x \frac{\partial}{\partial x} + y \frac{\partial}{\partial y} \right)^m f = n(n-1)\cdots(n-m+1)f. \qquad\text{(1)}$$
>
> 方法一 直接在 $f(tx,ty) = t^n f(x,y)$ 两端同时对 $t$ 求 $m$ 阶导数，然后令 $t = 1$。
>
> 方法二 利用数学归纳法。

> [!proof]- 证
> **证Ⅰ** 已知：若 $z = f(x,y)$，$x = a + th$，$y = b + tk$（$a,b,h,k$ 为常数），则
> $$\frac{d^m z}{dt^m} = \left( h \frac{\partial}{\partial x} + k \frac{\partial}{\partial y} \right)^m f(x,y).$$
> 利用此法则，在式 $f(tx,ty) = t^n f(x,y)$ 两端同时对 $t$ 求 $m$ 阶导数，再令 $t = 1$，即得式（1）。
>
> **证Ⅱ** 由上例知：式（1）对 $m = 1$ 已成立。现只要证明：若式（1）对 $m = k$ 成立，则必对 $m = k+1$ 也成立。事实上，因 $m = k$ 时成立，所以
> $$\sum_{i=0}^k \left( C_k^i x^i y^{k-i} \frac{\partial^k f}{\partial x^i \partial y^{k-i}} \right)\bigg|_{(tx,ty)} = n(n-1)\cdots(n-k+1) f(tx,ty) = n(n-1)\cdots(n-k+1) t^n f(x,y).$$
> 两端同时除以 $t^k$ 得
> $$\sum_{i=0}^k C_k^i x^i y^{k-i} \left( \frac{\partial^k f}{\partial x^i \partial y^{k-i}} \right)\bigg|_{(tx,ty)} = n(n-1)\cdots(n-k+1) t^{n-k} f(x,y). \qquad\text{(2)}$$
> 两边同时对 $t$ 求导，根据复合函数求导法则：
> $$\frac{d}{dt}\left( \frac{\partial^k f}{\partial x^i \partial y^{k-i}} \bigg|_{(tx,ty)} \right) = x \frac{\partial^{k+1} f}{\partial x^{i+1} \partial y^{k-i}}\bigg|_{(tx,ty)} + y \frac{\partial^{k+1} f}{\partial x^i \partial y^{k+1-i}}\bigg|_{(tx,ty)}.$$
> 故式（2）左端的导数为
> $$\sum_{i=0}^k \Bigg( C_k^i x^{i+1} y^{k-i} \frac{\partial^{k+1} f}{\partial x^{i+1} \partial y^{k-i}}\bigg|_{(tx,ty)} + C_k^i x^i y^{k+1-i} \frac{\partial^{k+1} f}{\partial x^i \partial y^{k+1-i}}\bigg|_{(tx,ty)} \Bigg)$$
>
> （在前一式里令 $j = i + 1$）
>
> $$= \sum_{j=1}^{k+1} C_k^{j-1} x^j y^{k+1-j} \frac{\partial^{k+1} f}{\partial x^j \partial y^{k+1-j}}\bigg|_{(tx,ty)} + \sum_{i=0}^k C_k^i x^i y^{k+1-i} \frac{\partial^{k+1} f}{\partial x^i \partial y^{k+1-i}}\bigg|_{(tx,ty)}$$
>
> （仍把 $j$ 记作 $i$，将对应项合并，注意公式 $C_k^{i-1} + C_k^i = C_{k+1}^i$）
>
> $$= \sum_{i=0}^{k+1} C_{k+1}^i x^i y^{k+1-i} \frac{\partial^{k+1} f}{\partial x^i \partial y^{k+1-i}}\bigg|_{(tx,ty)}.$$
>
> 故（2）式对 $t$ 求导后得
> $$\sum_{i=0}^{k+1} C_{k+1}^i x^i y^{k+1-i} \frac{\partial^{k+1} f}{\partial x^i \partial y^{k+1-i}}\bigg|_{(tx,ty)} = n(n-1)\cdots(n-k) t^{n-k-1} f(x,y).$$
>
> 在此式中令 $t = 1$，即得 $m = k+1$ 时的式（1）。

> [!note] 注
> 若 $y = f(x_1,x_2,\ldots,x_n)$ 为 $n$ 元 $k$ 次齐次 $m$ 阶可微函数，类似地有
> $$\left( x_1 \frac{\partial}{\partial x_1} + x_2 \frac{\partial}{\partial x_2} + \cdots + x_n \frac{\partial}{\partial x_n} \right)^m f = k(k-1)\cdots(k-m+1)f,$$
> 其中 $f = f(x_1,x_2,\ldots,x_n)$，
> $$\left( x_1 \frac{\partial}{\partial x_1} + x_2 \frac{\partial}{\partial x_2} + \cdots + x_n \frac{\partial}{\partial x_n} \right)^m = \sum_{r_1+r_2+\cdots+r_n=m} \frac{m!}{r_1!\, r_2!\, \cdots\, r_n!}\, x_1^{r_1} x_2^{r_2} \cdots x_n^{r_n} \frac{\partial^m}{\partial x_1^{r_1} \partial x_2^{r_2} \cdots \partial x_n^{r_n}}.$$


### 三、偏导数转化为极限

> [!note] 要点
> 利用偏导数的定义，有些关于偏导数的问题，可转化为相应的极限问题.

> [!example] 例6.2.8
> 设 $f'_x, f'_y, f''_{yx}$ 在 $(x_0,y_0)$ 的某邻域内存在，$f''_{yx}$ 在点 $(x_0,y_0)$ 处连续，证明 $f''_{xy}(x_0,y_0)$ 存在，且 $f''_{xy}(x_0,y_0) = f''_{yx}(x_0,y_0)$.

> [!proof]- 证
> **1°**（将混合偏导数转化为累次极限.）根据偏导数定义，
> 
> $$
> \begin{aligned}
> f''_{xy}(x_0,y_0) &= \lim_{\Delta y \to 0} \frac{f'_x(x_0,y_0+\Delta y)-f'_x(x_0,y_0)}{\Delta y} \\
> &= \lim_{\Delta y \to 0} \frac{1}{\Delta y} \left[ \lim_{\Delta x \to 0} \frac{f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0+\Delta y)}{\Delta x} - \lim_{\Delta x \to 0} \frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x} \right] \\
> &= \lim_{\Delta y \to 0} \lim_{\Delta x \to 0} \frac{1}{\Delta x \Delta y} W,
> \end{aligned}
> $$
> 
> 其中 $W = f(x_0+\Delta x,y_0+\Delta y) - f(x_0,y_0+\Delta y) - f(x_0+\Delta x,y_0) + f(x_0,y_0)$.
> 
> 同理可证 $f''_{yx}(x_0,y_0) = \lim_{\Delta x \to 0} \lim_{\Delta y \to 0} \frac{1}{\Delta x \Delta y} W$.
> 
> **2°**（证明全面极限 $\displaystyle\lim_{(\Delta x,\Delta y)\to(0,0)} \frac{W}{\Delta x \Delta y}$ 存在，且等于 $f''_{yx}(x_0,y_0)$.）令
> 
> $$
> \psi(y) = f(x_0 + \Delta x,y) - f(x_0,y),
> $$
> 
> 则
> 
> $$
> \begin{aligned}
> \frac{W}{\Delta x \Delta y} &= \frac{1}{\Delta x \Delta y}[\psi(y_0+\Delta y)-\psi(y_0)] = \frac{1}{\Delta x} \psi'(y_0+\theta_1\Delta y) \quad (0<\theta_1<1) \\
> &= \frac{1}{\Delta x} [f'_y(x_0+\Delta x,y_0+\theta_1\Delta y) - f'_y(x_0,y_0+\theta_1\Delta y)] \\
> &= f''_{yx}(x_0+\theta\Delta x,y_0+\theta_1\Delta y) \quad (0<\theta<1).
> \end{aligned}
> $$
> 
> 因 $f''_{yx}$ 在 $(x_0,y_0)$ 处连续，故
> 
> $$
> \begin{aligned}
> \lim_{(\Delta x,\Delta y)\to(0,0)} \frac{1}{\Delta x \Delta y} W
> &= \lim_{(\Delta x,\Delta y)\to(0,0)} f''_{yx}(x_0+\theta\Delta x,y_0+\theta_1\Delta y) \\
> &= f''_{yx}(x_0,y_0).
> \end{aligned}
> $$
> 
> **3°** 因 $f'_x, f'_y$ 在 $(x_0,y_0)$ 的邻域内存在，且 $\Delta y$ 充分小时，$\displaystyle\lim_{\Delta x\to 0} \frac{1}{\Delta x} W$ 存在. 由累次极限定理（或见前节的习题6.1.10的提示（4）及再提示），
> 
> $$
> \begin{aligned}
> f''_{xy}(x_0,y_0) &= \lim_{\Delta y \to 0} \lim_{\Delta x \to 0} \frac{1}{\Delta x \Delta y} W \\
> &= \lim_{(\Delta x,\Delta y)\to(0,0)} \frac{1}{\Delta x \Delta y} W \\
> &= f''_{yx}(x_0,y_0).
> \end{aligned}
> $$


### ☆四、对微分方程作变量替换



#### a. 对自变量作变量替换

> [!note] 要点
> 完成这种替换的关键在于：通过新旧自变量的关系，求出相应导数的关系，再代入方程.

> [!example] ☆例6.2.9
> 试将方程 $\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0$ 变换为极坐标的形式.（清华大学，北京师范大学，浙江大学）

> [!solution]- 解Ⅰ
> 1°（由变量之间的关系，求出它们导数之间的关系.）因 $z = z(x,y)$，$x = r\cos\theta$, $y = r\sin\theta$，所以
>
> $$
> \frac{\partial z}{\partial r} = \frac{\partial z}{\partial x}\cos\theta + \frac{\partial z}{\partial y}\sin\theta, \quad \frac{\partial z}{\partial\theta} = -\frac{\partial z}{\partial x} r\sin\theta + \frac{\partial z}{\partial y} r\cos\theta. \tag{1}
> $$
>
> 解得
>
> $$
> \frac{\partial z}{\partial x} = \frac{\partial z}{\partial r}\cos\theta - \frac{\partial z}{\partial\theta} \cdot \frac{1}{r}\sin\theta, \quad \frac{\partial z}{\partial y} = \frac{\partial z}{\partial r}\sin\theta + \frac{\partial z}{\partial\theta} \cdot \frac{1}{r}\cos\theta. \tag{2}
> $$
>
> 即算符有关系：
>
> $$
> \frac{\partial}{\partial x} = \cos\theta\frac{\partial}{\partial r} - \frac{1}{r}\sin\theta\frac{\partial}{\partial\theta}, \quad \frac{\partial}{\partial y} = \sin\theta\frac{\partial}{\partial r} + \frac{1}{r}\cos\theta\frac{\partial}{\partial\theta}. \tag{3}
> $$
>
> 故
>
> $$
> \begin{aligned}
> \frac{\partial^2 z}{\partial x^2} &= \frac{\partial}{\partial x}\!\left(\frac{\partial z}{\partial x}\right) = \left(\cos\theta\frac{\partial}{\partial r} - \frac{1}{r}\sin\theta\frac{\partial}{\partial\theta}\right)\!\frac{\partial z}{\partial x} \quad \text{（利用（3））}\\
> &= \cos\theta\frac{\partial}{\partial r}\!\left(\frac{\partial z}{\partial x}\right) - \frac{1}{r}\sin\theta\frac{\partial}{\partial\theta}\!\left(\frac{\partial z}{\partial x}\right)\\
> &= \cos\theta\frac{\partial}{\partial r}\!\left(\frac{\partial z}{\partial r}\cos\theta - \frac{\partial z}{\partial\theta} \cdot \frac{1}{r}\sin\theta\right) - \frac{1}{r}\sin\theta\frac{\partial}{\partial\theta}\!\left(\frac{\partial z}{\partial r}\cos\theta - \frac{\partial z}{\partial\theta} \cdot \frac{1}{r}\sin\theta\right) \quad \text{（因为（2））}\\
> &= \frac{\partial^2 z}{\partial r^2}\cos^2\theta - \frac{\partial^2 z}{\partial r\partial\theta} \cdot \frac{1}{r}\sin\theta\cos\theta + \frac{\partial z}{\partial\theta} \cdot \frac{1}{r^2}\sin\theta\cos\theta \\
> &\quad - \frac{\partial^2 z}{\partial\theta\partial r} \cdot \frac{1}{r}\cos\theta\sin\theta + \frac{\partial z}{\partial r} \cdot \frac{1}{r}\sin^2\theta + \frac{\partial^2 z}{\partial\theta^2} \cdot \frac{1}{r^2}\sin^2\theta + \frac{\partial z}{\partial\theta} \cdot \frac{1}{r^2}\sin\theta\cos\theta.
> \end{aligned}
> $$
>
> 同理，有
>
> $$
> \begin{aligned}
> \frac{\partial^2 z}{\partial y^2} &= \frac{\partial^2 z}{\partial r^2}\sin^2\theta + \frac{\partial^2 z}{\partial r\partial\theta} \cdot \frac{1}{r}\sin\theta\cos\theta - \frac{\partial z}{\partial\theta} \cdot \frac{1}{r^2}\sin\theta\cos\theta + \frac{\partial^2 z}{\partial\theta\partial r} \cdot \frac{1}{r}\cos\theta\sin\theta \\
> &\quad + \frac{\partial z}{\partial r} \cdot \frac{\cos^2\theta}{r} + \frac{\partial^2 z}{\partial\theta^2} \cdot \frac{1}{r^2}\cos^2\theta - \frac{\partial z}{\partial\theta} \cdot \frac{1}{r^2}\sin\theta\cos\theta.
> \end{aligned}
> $$
>
> 2°（代入化简.）将上述结果代入原方程，化简即得
>
> $$
> \frac{\partial^2 z}{\partial r^2} + \frac{1}{r}\frac{\partial z}{\partial r} + \frac{1}{r^2}\frac{\partial^2 z}{\partial\theta^2} = 0. \tag{4}
> $$

> [!solution]- 解Ⅱ
> 将式（1）分别对 $r,\theta$ 再求一次导数（$x,y$ 作中间变量），得
>
> $$
> z''_{rr} = z''_{xx}\cos^2\theta + z''_{xy}\cos\theta\sin\theta + z''_{yx}\sin\theta\cos\theta + z''_{yy}\sin^2\theta, \tag{5}
> $$
>
> $$
> z''_{\theta\theta} = z''_{xx}r^2\sin^2\theta - z''_{xy}r^2\sin\theta\cos\theta - z''_{yx}r^2\cos\theta\sin\theta + z''_{yy}r^2\cos^2\theta - z'_x r\cos\theta - z'_y r\sin\theta. \tag{6}
> $$
>
> 式（5）乘 $r^2$ 与（6）相加，得
>
> $$
> r^2 z''_{rr} + z''_{\theta\theta} = r^2(z''_{xx}+z''_{yy}) - z'_x r\cos\theta - z'_y r\sin\theta = \text{（式（2））}\; r^2(z''_{xx}+z''_{yy}) - r z'_r.
> $$
>
> 再同除以 $r^2$，移项，即得式（4）.

> [!remark]
> 上例是把新变量理解为自变量，把原来的自变量理解为中间变量；有时也可以反过来.

> [!example] ☆例6.2.10
> 设
>
> $$
> \frac{\partial^2 W}{\partial x^2} + \frac{\partial^2 W}{\partial y^2} = 0, \tag{1}
> $$
>
> $$
> u = x^2 - y^2, \quad v = 2xy. \tag{2}
> $$
>
> 试用关系（2），将（1）变成关于 $u,v$ 的方程.（南京理工大学，北京工业大学）

> [!solution]- 解
> 将依赖关系看成 $W$ 关于 $u,v$，$u,v$ 关于 $x,y$，于是
>
> $$
> \frac{\partial W}{\partial x} = \frac{\partial W}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial W}{\partial v}\frac{\partial v}{\partial x} = 2x\frac{\partial W}{\partial u} + 2y\frac{\partial W}{\partial v}.
> $$
>
> 可见
>
> $$
> \frac{\partial}{\partial x} = 2x\frac{\partial}{\partial u} + 2y\frac{\partial}{\partial v}.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \frac{\partial^2 W}{\partial x^2} &= \frac{\partial}{\partial x}\!\left(\frac{\partial W}{\partial x}\right) = \frac{\partial}{\partial x}\!\left(2x\frac{\partial W}{\partial u} + 2y\frac{\partial W}{\partial v}\right) \\
> &= 2\frac{\partial W}{\partial u} + 2x\frac{\partial}{\partial x}\!\left(\frac{\partial W}{\partial u}\right) + 2y\frac{\partial}{\partial x}\!\left(\frac{\partial W}{\partial v}\right),
> \end{aligned}
> $$
>
> 其中
>
> $$
> \frac{\partial}{\partial x}\!\left(\frac{\partial W}{\partial u}\right) = 2x\frac{\partial}{\partial u}\!\left(\frac{\partial W}{\partial u}\right) + 2y\frac{\partial}{\partial v}\!\left(\frac{\partial W}{\partial u}\right) = 2x\frac{\partial^2 W}{\partial u^2} + 2y\frac{\partial^2 W}{\partial u\partial v}.
> $$
>
> 同理，
>
> $$
> \frac{\partial}{\partial x}\!\left(\frac{\partial W}{\partial v}\right) = 2x\frac{\partial^2 W}{\partial u\partial v} + 2y\frac{\partial^2 W}{\partial v^2}.
> $$
>
> 故
>
> $$
> \frac{\partial^2 W}{\partial x^2} = 2\frac{\partial W}{\partial u} + 4x^2\frac{\partial^2 W}{\partial u^2} + 4xy\frac{\partial^2 W}{\partial v\partial u} + 4xy\frac{\partial^2 W}{\partial u\partial v} + 4y^2\frac{\partial^2 W}{\partial v^2}.
> $$
>
> 类似可得
>
> $$
> \frac{\partial^2 W}{\partial y^2} = -2\frac{\partial W}{\partial u} + 4y^2\frac{\partial^2 W}{\partial u^2} - 4xy\frac{\partial^2 W}{\partial v\partial u} - 4xy\frac{\partial^2 W}{\partial u\partial v} + 4x^2\frac{\partial^2 W}{\partial v^2}.
> $$
>
> 两式相加得
>
> $$
> \frac{\partial^2 W}{\partial x^2} + \frac{\partial^2 W}{\partial y^2} = (4x^2 + 4y^2)\left(\frac{\partial^2 W}{\partial u^2} + \frac{\partial^2 W}{\partial v^2}\right).
> $$
>
> 故原方程转化为
>
> $$
> \frac{\partial^2 W}{\partial u^2} + \frac{\partial^2 W}{\partial v^2} = 0.
> $$

> [!exercise] 练习
> 设函数 $z = z(u,v)$ 有连续2阶导数，并且变换 $u = x + 2y$, $v = x + ay$ 能将方程 $2z_{xx} + z_{xy} - z_{yy} = 0$ 变为 $z_{uu} = 0$.
> 1）求 $a$；    2）求出微分方程的解.（武汉大学，中国科学技术大学）

> [!solution]- 解
> 1）$z = z(u,v) = z(x + 2y, x + ay)$，故 $z_x = z_u + z_v$，于是
>
> $$
> z_{xx} = z_{uu} + z_{uv} + z_{vu} + z_{vv}, \quad z_{xy} = 2z_{uu} + (a + 2)z_{uv} + az_{vv}, \quad z_{yy} = 4z_{uu} + 4az_{uv} + a^2z_{vv}.
> $$
>
> 由 $z_v = 2z_u + az_v$，得 $z_{vv} = 4z_{uu} + 4az_{uv} + a^2z_{vv}$，因此
>
> $$
> \begin{aligned}
> 0 = 2z_{ux} + z_{vx} - z_{yy} &= 2(z_{uu} + z_{uv}) + (2z_{uu} + az_{uv}) - (4z_{uu} + a^2z_{vv}) \\
> &= (2 + a - a^2)z_{vv} = (1 + a)(2 - a)z_{vv},
> \end{aligned}
> $$
>
> 得 $a = -1$ 或 $a = 2$. 但 $a = 2$ 不合本题，否则 $u = x + 2y = v$，整个 $xOy$ 平面变成 $u = v$ 的一条直线，谈不上一对一，谈不上可逆. 故 $a = -1$.
>
> 2）由 $z_{uu} = 0$ 得 $z_u = f(u)$，
>
> $$
> z = \int f(u)\,du + G(v) = F(u) + G(v) = F(x + 2y) + G(x - y),
> $$
>
> 其中 $F(u)$ 和 $G(v)$ 为任意函数（不难验证答案的正确性）.


#### b. 自变量与因变量都变化的变量替换

> [!note] 要点
> 当自变量与因变量都变化时，要对微分方程作变量替换，可使用如下方法：先将原来的因变量，写成新的因变量的函数；从而原来的函数，可看成是以新变量为中间变量的复合函数；应用复合函数微分法，求出原导数与新导数（新因变量对新自变量的导数）的关系；代入原方程，化为新函数、新变量的方程.

> [!example] ☆ 例 6.2.11
> $z$ 为 $x,y$ 的可微函数，试将方程
>
> $$x^2 \frac{\partial z}{\partial x} + y^2 \frac{\partial z}{\partial y} = z^2 \tag{1}$$
>
> 变成 $w=w(u,v)$ 的方程. 假设
>
> $$x=u,\quad y=\frac{u}{1+uv},\quad z=\frac{u}{1+uw}. \tag{2}$$
>
> （河北师范大学，湖南大学）

> [!proof]- 解
> 已知 $z=\frac{x}{1+xw}$，$w=w(u,v)$，$u=x$，$v=\frac{1}{y}-\frac{1}{x}$，即变量的依赖关系为
>
> $$
> \begin{CD}
> z @<<< x @.\\
> @AAA @. @.\\
> w @<<< u @= x\\
> @AAA @. @.\\
> v @<<< x @.\\
> @AAA @. @.\\
> y @. @.
> \end{CD}
> $$
>
> 利用复合函数微分法
>
> $$\frac{\partial z}{\partial x} = \frac{1 - x^2 \frac{\partial w}{\partial u} - \frac{\partial w}{\partial v}}{(1+xw)^2},$$
>
> $$\frac{\partial z}{\partial y} = \frac{(1+xv)^2}{(1+xw)^2} \frac{\partial w}{\partial v}.$$
>
> 将此结果及式（2）代入原方程（1），即得 $\frac{\partial w}{\partial u}=0$.

> [!example] 例 6.2.12
> 取 $\mu,\nu$ 为新自变量及 $w=w(\mu,\nu)$ 为新函数，变换方程
>
> $$\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial x \partial y} + \frac{\partial z}{\partial x} = z. \tag{1}$$
>
> 设
>
> $$\mu=\frac{x+y}{2},\quad \nu=\frac{x-y}{2},\quad w=ze^\nu. \tag{2}$$
>
> （假设出现的导数皆连续）.（河南师范大学）

> [!proof]- 解
> $z$ 看成是 $x,y$ 的复合函数如下：
>
> $$z=\frac{w}{e^\nu},\quad w=w(\mu,\nu),\quad \mu=\frac{x+y}{2},\quad \nu=\frac{x-y}{2}.$$
>
> 求出此复合函数的导数 $\frac{\partial^2 z}{\partial x^2}$，$\frac{\partial^2 z}{\partial x \partial y}$，$\frac{\partial z}{\partial x}$，代入原方程（1），并将 $x,y,z$ 变换为 $\mu,\nu,w$，得
>
> $$\frac{\partial^2 w}{\partial \mu^2} + \frac{\partial^2 w}{\partial \mu \partial \nu} = 2w.$$

> [!example] 例 6.2.13
> 证明：在变换 $u=\frac{x}{y}$，$v=x$，$w=xz-y$ 之下，方程
>
> $$y \frac{\partial^2 z}{\partial y^2} + 2\frac{\partial z}{\partial y} = \frac{2}{x}$$
>
> 可变成
>
> $$\frac{\partial^2 w}{\partial u^2}=0.$$
>
> （浙江大学）

> [!hint]- 提示
> $z=\frac{y}{x}+\frac{w}{x}$，并将 $w$ 看成 $u,v$ 的函数，$u,v$ 按题设的变换是 $x,y$ 的函数，然后用复合函数求导法则计算 $\frac{\partial z}{\partial x}$，$\frac{\partial^2 z}{\partial x^2}$.

> [!example] 例 6.2.14
> 考察变换 $x=a_1u+b_1v+c_1w$，$y=a_2u+b_2v+c_2w$，$z=a_3u+b_3v+c_3w$.
>
> 问在什么条件下（即 $a_i,b_i,c_i$ 满足什么条件时），对任何二阶连续可微函数 $f$，$(\frac{\partial f}{\partial x})^2+(\frac{\partial f}{\partial y})^2+(\frac{\partial f}{\partial z})^2$ 和 $\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}+\frac{\partial^2 f}{\partial z^2}$ 在此变换下形式不变，即
>
> $$(\frac{\partial f}{\partial x})^2+(\frac{\partial f}{\partial y})^2+(\frac{\partial f}{\partial z})^2=(\frac{\partial f}{\partial u})^2+(\frac{\partial f}{\partial v})^2+(\frac{\partial f}{\partial w})^2,$$
>
> $$\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}+\frac{\partial^2 f}{\partial z^2}=\frac{\partial^2 f}{\partial u^2}+\frac{\partial^2 f}{\partial v^2}+\frac{\partial^2 f}{\partial w^2}.$$
>
> （复旦大学）

> [!proof]- 解
> 利用复合函数微分法，
>
> $$f'_u=f'_x a_1+f'_y a_2+f'_z a_3, \tag{1}$$
>
> $$f'_v=f'_x b_1+f'_y b_2+f'_z b_3, \tag{2}$$
>
> $$f'_w=f'_x c_1+f'_y c_2+f'_z c_3. \tag{3}$$
>
> 以上三式平方后相加，得
>
> $$
> \begin{aligned}
> f_u'^2+f_v'^2+f_w'^2 &= f_x'^2(a_1^2+b_1^2+c_1^2)+f_y'^2(a_2^2+b_2^2+c_2^2)+f_z'^2(a_3^2+b_3^2+c_3^2) \\
> &\quad + 2f'_x f'_y(a_1a_2+b_1b_2+c_1c_2)+2f'_y f'_z(a_2a_3+b_2b_3+c_2c_3) \\
> &\quad + 2f'_z f'_x(a_3a_1+b_3b_1+c_3c_1). \tag{4}
> \end{aligned}
> $$
>
> 将式（1）、（2）、（3）分别对 $u,v,w$ 求导，然后相加得
>
> $$
> \begin{aligned}
> f''_{uu}+f''_{vv}+f''_{ww} &= f''_{xx}(a_1^2+b_1^2+c_1^2)+f''_{yy}(a_2^2+b_2^2+c_2^2)+f''_{zz}(a_3^2+b_3^2+c_3^2) \\
> &\quad + 2f''_{xy}(a_1a_2+b_1b_2+c_1c_2)+2f''_{yz}(a_2a_3+b_2b_3+c_2c_3) \\
> &\quad + 2f''_{zx}(a_3a_1+b_3b_1+c_3c_1). \tag{5}
> \end{aligned}
> $$
>
> 由式（4）、（5）可知，当
>
> $$a_1^2+b_1^2+c_1^2=a_2^2+b_2^2+c_2^2=a_3^2+b_3^2+c_3^2=1,$$
>
> $$a_1a_2+b_1b_2+c_1c_2=a_2a_3+b_2b_3+c_2c_3=a_3a_1+b_3b_1+c_3c_1=0$$
>
> 时，恒有
>
> $$f_u'^2+f_v'^2+f_w'^2=f_x'^2+f_y'^2+f_z'^2,\quad f''_{uu}+f''_{vv}+f''_{ww}=f''_{xx}+f''_{yy}+f''_{zz}.$$


### * 五、多元函数的可微性

> [!note] 要点
> $\mathbb{R}^n$ 中，$f$ 在点 $P_0$ 处可微，等价于 $f$ 在 $P_0$ 的某邻域里，满足如下（相互等价的）任一等式：
>
> **i)** $\Delta f(P_0)\equiv f(P)-f(P_0)=\sum_{i=1}^n f'_{x_i}(P_0)\Delta x_i + \sum_{i=1}^n \varepsilon_i\Delta x_i$，
>
> 其中 $\varepsilon_i\to 0$（当 $\Delta x_1,\dots,\Delta x_n\to 0$ 时），这里 $P-P_0=(\Delta x_1,\Delta x_2,\dots,\Delta x_n)$.
>
> **ii)** $\Delta f(P_0)\equiv f(P)-f(P_0)=\sum_{i=1}^n f'_{x_i}(P_0)\Delta x_i + \varepsilon\cdot\rho$，
>
> 其中 $\varepsilon\to 0$（当 $\rho\to 0$ 时），$\rho=\sqrt{\sum_{i=1}^n \Delta x_i^2}$.
>
> **iii)** $\Delta f(P_0)\equiv f(P)-f(P_0)=\sum_{i=1}^n f'_{x_i}(P_0)\Delta x_i + o(\rho)$.

> [!note] ☆ 以二元函数为例
> 要证明 $f$ 在 $(x_0,y_0)$ 处可微，通常方法有两种：
> 其一是根据上述条件 ii）、iii），若
>
> $$
> \lim_{\Delta x\to 0,\ \Delta y\to 0} \frac{\Delta f - f'_x(x_0,y_0)\Delta x - f'_y(x_0,y_0)\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}=0,
> $$
>
> 则 $f$ 在 $(x_0,y_0)$ 处可微. 否则不可微.
> 方法二是证明 $f$ 在 $(x_0,y_0)$ 的邻域里有
>
> $$
> f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=f'_x(x_0,y_0)\Delta x+f'_y(x_0,y_0)\Delta y+\varepsilon_1\Delta x+\varepsilon_2\Delta y,
> $$
>
> 其中 $\varepsilon_1,\varepsilon_2\to 0$（当 $\Delta x,\Delta y\to 0$ 时），否则不可微.

> [!example] 例 6.2.15
> 设 $f(x,y)=\varphi(|xy|)$，其中 $\varphi(0)=0$，且在 $u=0$ 附近满足 $|\varphi(u)|\leq u^2$，试证 $f(x,y)$ 在 $(0,0)$ 处可微.（中国科学院）

> [!proof]- 证
> $f'_x(0,0)=\lim_{x\to 0}\dfrac{\varphi(|x\cdot 0|)-\varphi(0)}{x}=0$. 同理，$f'_y(0,0)=0$.
>
> $$
> \begin{aligned}
> \left|\frac{f(x,y)-f(0,0)-f'_x(0,0)x-f'_y(0,0)y}{\sqrt{x^2+y^2}}\right|
> &=\frac{|\varphi(|xy|)|}{\sqrt{x^2+y^2}} \\
> &\leq \frac{|xy|^2}{\sqrt{x^2+y^2}} \\
> &\leq |xy|^{3/2} \to 0 \quad (\text{当 } x\to 0,\ y\to 0 \text{ 时}).
> \end{aligned}
> $$
>
> 因此 $f$ 在 $(0,0)$ 处可微.

> [!example] 例 6.2.16
> 证明：函数
>
> $$
> f(x,y)=\begin{cases}
> \dfrac{xy}{\sqrt{x^2+y^2}}, & x^2+y^2\neq 0,\\[6pt]
> 0, & x^2+y^2=0
> \end{cases}
> $$
>
> 在 $\mathbb{R}^2$ 上连续，且 $f'_x$，$f'_y$ 有界，但 $f$ 在 $(0,0)$ 处不可微.（山东大学，北京航空航天大学）

> [!hint]- 提示
> $f$ 在 $(0,0)$ 处不可微最后归结为证明：$\dfrac{xy}{x^2+y^2}\nrightarrow 0$（$x\to 0$，$y\to 0$）.

> [!remark] 注
> 按上述方法和步骤证明可微性，原则上没有什么困难. 但因为问题最终归结为求极限，因此进行时，还会碰到许多具体困难. 这时应根据具体情况，灵活处理.

> [!example] ☆ 例 6.2.17
> 设 $f(x)$ 及 $g(x)$ 分别在区间 $[a,b]$ 及 $[c,d]$ 上连续，定义
>
> $$
> F(x,y)=\int_a^x f(t)\,dt \cdot \int_c^y g(s)\,ds \quad (a\leq x\leq b,\ c\leq y\leq d).
> $$
>
> 试用全微分的定义证明 $F(x,y)$ 在 $(x_0,y_0)$ 处可微，其中 $a\leq x_0\leq b$，$c\leq y_0\leq d$ 为任意的定点.（大连理工大学）
>
> 分析 要证明 $F(x,y)$ 在 $(x_0,y_0)$ 处可微，即要证明当 $x\to x_0$，$y\to y_0$ 时，
>
> $$
> \frac{F(x,y)-F(x_0,y_0)-F'_x(x_0,y_0)(x-x_0)-F'_y(x_0,y_0)(y-y_0)}{\sqrt{(x-x_0)^2+(y-y_0)^2}} \tag{1}
> $$
>
> 以 $0$ 为极限. 为此，我们写出式（1）里分子各项（能抵消的抵消，能合并的合并）. 其中前两项
>
> $$
> \begin{aligned}
> &F(x,y)-F(x_0,y_0) \\
> =&\int_a^x f(t)\,dt \int_c^y g(s)\,ds - \int_a^{x_0} f(t)\,dt \int_c^{y_0} g(s)\,ds \\
> =&\Bigl(\int_a^{x_0}+\int_{x_0}^x\Bigr)f(t)\,dt \cdot \Bigl(\int_c^{y_0}+\int_{y_0}^y\Bigr)g(s)\,ds - \int_a^{x_0} f(t)\,dt \cdot \int_c^{y_0} g(s)\,ds \\
> =&\int_a^{x_0} f(t)\,dt \int_{y_0}^y g(s)\,ds + \int_{x_0}^x f(t)\,dt \int_c^{y_0} g(s)\,ds + \int_{x_0}^x f(t)\,dt \int_{y_0}^y g(s)\,ds. \tag{2}
> \end{aligned}
> $$
>
> 式（1）分子的第三项可以化为式（2）右端第二项的形式，
>
> $$
> F'_x(x_0,y_0)(x-x_0)=f(x_0)\int_c^{y_0}g(s)\,ds \cdot (x-x_0)=\int_{x_0}^x f(x_0)\,dt \int_c^{y_0}g(s)\,ds. \tag{3}
> $$
>
> 式（1）分子的第四项可化为式（2）右端第一项的形式，
>
> $$
> F'_y(x_0,y_0)(y-y_0)=\int_a^{x_0}f(t)\,dt \cdot g(y_0)(y-y_0)=\int_a^{x_0}f(t)\,dt \int_{y_0}^y g(y_0)\,ds. \tag{4}
> $$
>
> 将（2）、（3）、（4）合并，于是（1）中的分子可以化为三项，即
>
> $$
> \begin{aligned}
> &F(x,y)-F(x_0,y_0)-F'_x(x_0,y_0)(x-x_0)-F'_y(x_0,y_0)(y-y_0) \\
> =&\int_a^{x_0}f(t)\,dt \int_{y_0}^y [g(s)-g(y_0)]\,ds + \int_{x_0}^x [f(t)-f(x_0)]\,dt \int_c^{y_0}g(s)\,ds \\
> &+\int_{x_0}^x f(t)\,dt \int_{y_0}^y g(s)\,ds. \tag{5}
> \end{aligned}
> $$
>
> 将此式代回式（1），则（1）可拆成三项，只需证明每一项都趋向零. 例如第一项
>
> $$
> \frac{\int_a^{x_0}f(t)\,dt \int_{y_0}^y(g(s)-g(y_0))\,ds}{\sqrt{(x-x_0)^2+(y-y_0)^2}},
> $$
>
> 因为 $f(x)$ 在 $[a,b]$ 上连续，即 $\exists M>0$，使得 $|f(x)|\leq M$（$\forall x\in[a,b]$）. 又因 $g(x)$ 在 $y_0$ 处连续，所以 $\forall\varepsilon>0$，$\exists\delta>0$，当 $y\in[c,d]$，$|y-y_0|<\delta$ 时，$|g(y)-g(y_0)|<\varepsilon$.
> 于是
>
> $$
> \begin{aligned}
> &\left|\frac{\int_a^{x_0}f(t)\,dt \int_{y_0}^y [g(s)-g(y_0)]\,ds}{\sqrt{(x-x_0)^2+(y-y_0)^2}}\right| \\
> \leq &\left|\frac{\int_a^{x_0}|f(t)|\,dt \int_{y_0}^y |g(s)-g(y_0)|\,ds}{\sqrt{(x-x_0)^2+(y-y_0)^2}}\right| \\
> \leq &\frac{M|x_0-a|\cdot\varepsilon|y-y_0|}{\sqrt{(x-x_0)^2+(y-y_0)^2}} \leq M(b-a)\cdot\varepsilon.
> \end{aligned}
> $$
>
> 类似可证明其余两项亦趋向零. 故式（1）趋向零，$F(x,y)$ 可微性获证.
>
> 应当指出的是，本例作为试题主要是为了考可微性定义的使用. 实际上利用可微函数的乘积定理，本题的结论是明显的.

> [!example] ☆ 例 6.2.18
> 若 $f'_x(x,y)$ 在点 $(x_0,y_0)$ 处存在，$f'_y(x,y)$ 在点 $(x_0,y_0)$ 处连续，证明 $f(x,y)$ 在点 $(x_0,y_0)$ 处可微.（吉林大学，辽宁师范大学）

> [!proof]- 证
> $$
> \begin{aligned}
> &f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0) \\
> =&[f(x_0+\Delta x,y_0+\Delta y)-f(x_0+\Delta x,y_0)] + [f(x_0+\Delta x,y_0)-f(x_0,y_0)] \\
> =&f'_y(x_0+\Delta x,y_0+\theta\Delta y)\Delta y + f'_x(x_0,y_0)\Delta x + \varepsilon_1\Delta x \quad (0<\theta<1) \\
> =&[f'_y(x_0,y_0)+\varepsilon_2]\Delta y + f'_x(x_0,y_0)\Delta x + \varepsilon_1\Delta x \\
> =&f'_x(x_0,y_0)\Delta x + f'_y(x_0,y_0)\Delta y + \varepsilon_1\Delta x + \varepsilon_2\Delta y,
> \end{aligned}
> $$
>
> 其中 $\varepsilon_1,\varepsilon_2\to 0$（当 $\Delta x,\Delta y\to 0$ 时）. 故 $f$ 在点 $(x_0,y_0)$ 处可微.

> [!exercise] 练习
> 设函数 $f:\mathbb{R}^n\to\mathbb{R}$，在 $\mathbb{R}^n\setminus\{0\}$ 可微，在 $0$ 处连续，$f(0)=0$ 且 $\lim_{x\to 0}\dfrac{\partial f(x)}{\partial x_i}=0$（$i=1,2,\dots,n$），试证 $f$ 在 $0$ 处可微.（北京大学）

> [!hint]- 提示
> **1°** 利用导数定义易知
>
> $$
> f'_{x_k}(0)=\left.\frac{\partial f(x)}{\partial x_k}\right|_{x=0}=0 \quad (k=1,2,\dots,n). \tag{1}
> $$
>
> 例如：
>
> $$
> f'_{x_1}(0)=\lim_{x_1\to 0}\frac{f(x_1,0,\dots,0)-f(0)}{x_1}=\lim_{x_1\to 0}f'_1(\xi_1,0,\dots,0)=0 \quad (f'_1 \text{ 表示 } f'_{x_1}).
> $$
>
> **2°** 仿例 6.2.18，
>
> $$
> \begin{aligned}
> |f(x)-f(0)|\leq &|f(x_1,x_2,\dots,x_n)-f(0,x_2,\dots,x_n)| \\
> &+|f(0,x_2,\dots,x_n)-f(0,0,x_3,\dots,x_n)|+\cdots
> \end{aligned}
> $$
>
> **再提示** 要证 $f$ 在 $0$ 处可微，即要证：
>
> $$
> \lim_{x\to 0}\frac{\Delta f(0)-\sum_{k=1}^n f'_k(0)\Delta x_k}{|x-0|}=0
> \qquad \left(|x|=\sqrt{x_1^2+x_2^2+\cdots+x_n^2}\right).
> $$
>
> 事实上，
>
> $$
> \begin{aligned}
> \lim_{x\to 0}\frac{f(x)-f(0)-\sum_{k=1}^n f'_k(0)(x_k-0)}{|x-0|}
> &\overset{(1)}{=} \lim_{x\to 0}\frac{f(x)-f(0)}{|x|} \\
> &\qquad \bigl(\text{其中 }f'_k(0)\overset{\text{长示}}{=}\frac{\partial f(0)}{\partial x_k}=0\bigr) \\
> &\overset{(2)}{\leq} \lim_{x\to 0}\frac{\sum_{k=1}^n|f'_k(\xi_{(k)})x_k|}{|x|} \\
> &\leq \sum_{k=1}^n\lim_{\xi_{(k)}\to 0}\left|\frac{\partial}{\partial x_k}f(\xi_{(k)})\right| =0 \\
> &\quad(\text{因为当 }x\to 0\text{ 时 }\xi_{(k)}\to 0).
> \end{aligned}
> $$

> [!note]
> $f$ 在 $(x_0,y_0)$ 处可微，意味着 $f$ 在 $(x_0,y_0)$ 附近与一个一次函数近似，只相差一个高阶无穷小量（相对 $\rho=\sqrt{(x-x_0)^2+(y-y_0)^2}$ 而言）.
>
> $$
> f(x,y)=f(x_0,y_0)+f'_x(x_0,y_0)(x-x_0)+f'_y(x_0,y_0)(y-y_0)+o(\rho).
> $$
>
> 因此，利用此式可将 $f(x,y)$ 变形.

> [!example] * 例 6.2.19
> 设 1）$x=\varphi(s,t)$ 及 $y=\psi(s,t)$ 在区域 $D$ 内可微，且 $(s,t)\in D$ 时，$(x,y)=(\varphi(s,t),\psi(s,t))\in E$（区域）；
> 2）函数 $z=f(x,y)$ 在区域 $E$ 内可微.
>
> 试证 $z=f(\varphi(s,t),\psi(s,t))$ 在 $D$ 内可微，且 $df(s,t)=f'_x\,dx+f'_y\,dy$.

> [!proof]- 证
> 记 $P=(s,t)$ 为 $D$ 内任意一点，$Q=(x,y)=(\varphi(s,t),\psi(s,t))$. 由已知条件有
>
> $$
> \Delta z=f'_x(Q)\,\Delta x+f'_y(Q)\,\Delta y+\varepsilon\rho, \tag{1}
> $$
>
> 其中 $\rho=\sqrt{\Delta x^2+\Delta y^2}$，$\varepsilon\to 0$（当 $\rho\to 0$ 时）.
>
> $$
> \Delta x=\varphi'_s(P)\,\Delta s+\varphi'_t(P)\,\Delta t+\varepsilon_1\rho_1, \tag{2}
> $$
>
> 其中 $\rho_1=\sqrt{\Delta s^2+\Delta t^2}$，$\varepsilon_1\to 0$（当 $\rho_1\to 0$ 时）.
>
> $$
> \Delta y=\psi'_s(P)\,\Delta s+\psi'_t(P)\,\Delta t+\varepsilon_2\rho_1, \tag{3}
> $$
>
> 其中 $\rho_1$ 同上，$\varepsilon_2\to 0$（当 $\rho_1\to 0$ 时）.
>
> 将式（2），（3）代入（1）得
>
> $$
> \begin{aligned}
> \Delta z=&\bigl[f'_x(Q)\varphi'_s(P)+f'_y(Q)\psi'_s(P)\bigr]\Delta s \\
> &+\bigl[f'_x(Q)\varphi'_t(P)+f'_y(Q)\psi'_t(P)\bigr]\Delta t \\
> &+\varepsilon\rho+f'_x(Q)\varepsilon_1\rho_1+f'_y(Q)\varepsilon_2\rho_1. \tag{4}
> \end{aligned}
> $$
>
> 要证明 $f(\varphi(s,t),\psi(s,t))$ 在 $P=(s,t)$ 处可微，即要证明式（4）里有
>
> $$
> \frac{\varepsilon\rho+f'_x(Q)\varepsilon_1\rho_1+f'_y(Q)\varepsilon_2\rho_1}{\rho_1}
> =\varepsilon\frac{\rho}{\rho_1}+f'_x(Q)\varepsilon_1+f'_y(Q)\varepsilon_2\to 0
> \quad (\rho_1\to 0). \tag{5}
> $$
>
> 因为 $\rho_1\to 0$ 时 $\varepsilon_1\to 0$，$\varepsilon_2\to 0$，故式（5）中后两项 $f'_x(Q)\varepsilon_1+f'_y(Q)\varepsilon_2\to 0$（$\rho_1\to 0$）.
>
> （现只需证明（5）式中 $\varepsilon\,\rho/\rho_1\to 0$．由式（2），（3）知当 $\rho_1\to 0$ 时，$\Delta x,\Delta y\to 0$，从而 $\rho=\sqrt{\Delta x^2+\Delta y^2}\to 0$，进而 $\varepsilon\to 0$．（如此，只要证明了 $\rho/\rho_1$ 有界，则 $\varepsilon\,\rho/\rho_1\to 0$．）事实上，由（2），（3）知
>
> $$
> \left|\frac{\Delta x}{\rho_1}\right|\leq |\varphi'_s(P)|+|\varphi'_t(P)|+1
> \quad (\text{当 }\rho_1\text{ 充分小时}),
> $$
>
> $$
> \left|\frac{\Delta y}{\rho_1}\right|\leq |\psi'_s(P)|+|\psi'_t(P)|+1
> \quad (\text{当 }\rho_1\text{ 充分小时}).
> $$
>
> 所以
>
> $$
> \left|\frac{\rho}{\rho_1}\right|
> =\frac{\sqrt{\Delta x^2+\Delta y^2}}{\rho_1}
> =\sqrt{\left(\frac{\Delta x}{\rho_1}\right)^2+\left(\frac{\Delta y}{\rho_1}\right)^2}
> $$
>
> 有界. 式（5）证毕. 即
>
> $$
> \varepsilon\rho+f'_x(Q)\varepsilon_1\rho_1+f'_y(Q)\varepsilon_2\rho_1=o(\rho_1).
> $$
>
> 于是式（4）表明 $z=f(\varphi(s,t),\psi(s,t))$ 在 $(s,t)\in D$ 处可微，且
>
> $$
> \begin{align}
> dz&=\bigl[f'_x(Q)\varphi'_s(P)+f'_y(Q)\psi'_s(P)\bigr]\Delta s
> +\bigl[f'_x(Q)\varphi'_t(P)+f'_y(Q)\psi'_t(P)\bigr]\Delta t\\
> &=f'_x(Q)\bigl[\varphi'_s(P)\Delta s+\varphi'_t(P)\Delta t\bigr]
> +f'_y(Q)\bigl[\psi'_s(P)\Delta s+\psi'_t(P)\Delta t\bigr]\\
> &=f'_x(Q)\,dx+f'_y(Q)\,dy.
> \end{align}
> $$
>
> 证毕.

> [!example] * 例 6.2.20
> 设 $f''_{xy},f''_{yx}$ 在 $(x_0,y_0)$ 的某个邻域里存在，且在点 $(x_0,y_0)$ 处可微，证明：$f''_{xy}(x_0,y_0)=f''_{yx}(x_0,y_0)$.
>
> 分析 从例 6.2.8 已看到，$f''_{xy}(x_0,y_0)$ 与 $f''_{yx}(x_0,y_0)$ 是函数
>
> $$
> \begin{align}
> \frac{W}{\Delta x\Delta y}
> =\frac{1}{\Delta x\Delta y}\bigl[&f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0+\Delta y) \\
> &-f(x_0+\Delta x,y_0)+f(x_0,y_0)\bigr] \tag{1}
> \end{align}
> $$
>
> 的两个累次极限. 我们利用 $f'_x,f'_y$ 在 $(x_0,y_0)$ 处的可微性，将证明 $W/(\Delta x\Delta y)$ 改写成
>
> $$
> \frac{W}{\Delta x\Delta y}=f''_{yx}(x_0,y_0)+\varepsilon_1+\varepsilon_2\theta\frac{\Delta y}{\Delta x}-\varepsilon_3\theta\frac{\Delta y}{\Delta x} \tag{2}
> $$
>
> 和
>
> $$
> \frac{W}{\Delta x\Delta y}=f''_{xy}(x_0,y_0)+\varepsilon_4+\varepsilon_5\theta_1\frac{\Delta x}{\Delta y}-\varepsilon_6\theta_1\frac{\Delta x}{\Delta y}. \tag{3}
> $$
>
> 两者对充分小的 $\Delta x,\Delta y$ 同时成立，且当 $\Delta x,\Delta y\to 0$ 时，$\varepsilon_i\to 0$（$i=1,2,\dots,6$）. 于是令 $\Delta x=\Delta y\to 0$，可得
>
> $$
> f''_{yx}(x_0,y_0)=f''_{xy}(x_0,y_0). \tag{4}
> $$
>
> 可见，问题归结为证明（2），（3）成立. 为此将 $\Delta x,\Delta y$ 取得足够小，引入辅助函数
>
> $$
> \varphi(y)=f(x_0+\Delta x,y)-f(x_0,y), \tag{5}
> $$
>
> 式（1）可改写成
>
> $$
> \begin{aligned}
> \frac{W}{\Delta x\Delta y}
> &=\frac{1}{\Delta x\Delta y}[\varphi(y_0+\Delta y)-\varphi(y_0)] \\
> &=\frac{1}{\Delta x}\varphi'(y_0+\theta\Delta y) \\
> &=\frac{1}{\Delta x}\bigl[f'_y(x_0+\Delta x,y_0+\theta\Delta y)-f'_y(x_0,y_0+\theta\Delta y)\bigr]. \qquad(6)
> \end{aligned}
> $$
>
> 因 $f'_y$ 在 $(x_0,y_0)$ 处可微，
>
> $$
> \begin{aligned}
> f'_y(x_0+\Delta x,y_0+\theta\Delta y)
> &=f'_y(x_0,y_0)+f''_{yx}(x_0,y_0)\Delta x+f''_{yy}(x_0,y_0)\theta\Delta y \\
> &\quad +\varepsilon_1\Delta x+\varepsilon_2\theta\Delta y. \qquad(7)
> \end{aligned}
> $$
>
> 其中 $\varepsilon_1,\varepsilon_2\to 0$（当 $\Delta x,\Delta y\to 0$ 时）.
>
> $$
> f'_y(x_0,y_0+\theta\Delta y)=f'_y(x_0,y_0)+f''_{yy}(x_0,y_0)\theta\Delta y+\varepsilon_3\theta\Delta y, \tag{8}
> $$
>
> 其中 $\varepsilon_3\to 0$（当 $\Delta y\to 0$ 时）. 将（7），（8）代入（6）即得（2）. 类似可得（3）.


### 单元练习6.2

#### ☆偏导数的计算

（此类试题甚多，虽然多半属于"送分题"，但计算复杂，函数关系如果未弄清楚，也容易出错丢分.）

> [!problem] 6.2.1
> 设 $u=f(r,r\cos\theta)$ 有二阶连续偏导数，求 $\dfrac{\partial u}{\partial r},\dfrac{\partial u}{\partial\theta},\dfrac{\partial^2u}{\partial r\partial\theta}$.（复旦大学）
>
> 〈$f'_1+\cos\theta f'_2$，$-r\sin\theta f'_2$，$-r\sin\theta f''_{21}-\sin\theta f'_2-r\sin\theta\cos\theta f''_{22}$〉

> [!problem] 6.2.2
> 设 $u=f(x-y,y-z,z-x)$，假设 $f$ 对其中变量有直到二阶的连续偏导数，求 $\dfrac{\partial^2u}{\partial x^2}$ 及 $\dfrac{\partial^2u}{\partial y\partial z}$.（上海交通大学）
>
> 〈$f''_{11}-2f''_{13}+f''_{33}$，$f''_{23}-f''_{22}-f''_{13}+f''_{12}$〉

> [!problem] 6.2.3
> 设 $u=xyz\,e^{x+y+z}$，求 $\dfrac{\partial^{p+q+r}u}{\partial x^p\partial y^q\partial z^r}$.（北京航空航天大学）
>
> 《$(x+p)(y+q)(z+r)e^{x+y+z}$》

> [!problem] 6.2.4
> 设 $f$ 为可微函数，$u=f(x^2+y^2+z^2)$ 和方程 $3x+2y^2+z^3=6xyz$. 试对以下两种情况分别求 $\dfrac{\partial u}{\partial x}$ 在点 $P_0(1,1,1)$ 处的值.
>
> 1）由方程确定了隐函数 $z=z(x,y)$；
>
> 2）由方程确定了隐函数 $y=y(x,z)$.（华中师范大学）
>
> $$
> \left.\frac{\partial u}{\partial x}\right|_{P_0}=0
> $$
>
> $$
> \left.\frac{\partial u}{\partial x}\right|_{P_0}=-f'(3)
> $$

> [!problem] 6.2.5
> 设 $z=f(x,y)$，$u=x+ay,v=x-ay$，$a$ 为常数，$z$ 关于 $u,v$ 具有二阶连续偏导数，求 $\dfrac{\partial^2z}{\partial u\partial v}$.
>
> （厦门大学）
>
> $$
> \frac{1}{4}f''_{xx}-\frac{1}{4a^2}f''_{yy}
> $$

> [!problem] 6.2.6
> 设函数 $u(x)$ 由方程组 $u=f(x,y)$, $g(x,y,z)=0$, $h(x,z)=0$ 所确定，且 $\dfrac{\partial h}{\partial z}\ne0$, $\dfrac{\partial g}{\partial y}\ne0$, 求 $\dfrac{du}{dx}$.（清华大学）
>
> $$
> f'_1-\frac{f'_2g'_1}{g'_2}+\frac{f'_2g'_3h'}{g'_2h'}
> $$

> [!problem] 6.2.7
> 设 $f,F$ 可微，且 $\dfrac{\partial F}{\partial z}+\dfrac{\partial f}{\partial z}\cdot\dfrac{\partial F}{\partial y}\ne0$，求由
>
> $$
> \begin{cases}
> y=f(x,z),\\
> F(x,y,z)=0
> \end{cases}
> $$
>
> 所确定的函数 $y(x),z(x)$ 的一阶导数.（西安电子科技大学）
>
> $$
> y'_x=\frac{f'_xF'_z-f'_zF'_x}{F'_z+f'_zF'_y},
> \qquad
> z'_x=-\frac{F'_x+f'_xF'_y}{F'_z+f'_zF'_y}.
> $$

> [!problem] ☆6.2.8
> 设函数 $F_i(u)$，$i=1,2,3$，可微，$A=|a_{ij}|$ 是一个三阶的函数行列式，其中 $a_{ij}=F'_i(x_j)$，$i,j=1,2,3$，并且 $x_3$ 是由方程 $x_2^2+x_3+\sin(x_2\cdot x_3)=1$ 所确定的隐函数，求 $\dfrac{\partial A}{\partial x_1}$ 与 $\dfrac{\partial A}{\partial x_2}$ 在 $x_1=0,x_2=1,x_3=0$ 时的值.（西北大学）
>
> $$
> \left|\begin{matrix}
> F'_1(0)&F_1(1)&F_1(0)\\
> F'_2(0)&F_2(1)&F_2(0)\\
> F'_3(0)&F_3(1)&F_3(0)
> \end{matrix}\right|,
> \qquad
> \left|\begin{matrix}
> F'_1(0)&F_1(1)&-F'_1(0)\\
> F'_2(0)&F_2(1)&-F'_2(0)\\
> F'_3(0)&F_3(1)&-F'_3(0)
> \end{matrix}\right|.
> $$

> [!tip]- 提示
>
> $$
> \frac{\partial A}{\partial x_1}=
> \left|\begin{matrix}
> F'_1(x_1)&F_1(x_2)&F_1(x_3)\\
> F'_2(x_1)&F_2(x_2)&F_2(x_3)\\
> F'_3(x_1)&F_3(x_2)&F_3(x_3)
> \end{matrix}\right|,
> $$
>
> $$
> \frac{\partial A}{\partial x_2}=
> \left|\begin{matrix}
> F_1(x_1)&F'_1(x_2)&F_1(x_3)\\
> F_2(x_1)&F'_2(x_2)&F_2(x_3)\\
> F_3(x_1)&F'_3(x_2)&F_3(x_3)
> \end{matrix}\right|\cdot\frac{dx_3}{dx_2}
> +
> \left|\begin{matrix}
> F'_1(x_1)&F'_1(x_2)&F_1(x_3)\\
> F'_2(x_1)&F'_2(x_2)&F_2(x_3)\\
> F'_3(x_1)&F'_3(x_2)&F_3(x_3)
> \end{matrix}\right|.
> $$

#### 检验函数满足微分方程

> [!problem] 6.2.9
> 设函数 $\varphi(z)$ 和 $\psi(x)$ 具有二阶连续导数，并设 $u=x\varphi(x+y)+y\psi(x+y)$. 试证：
>
> $$
> \frac{\partial^2u}{\partial x^2}-2\frac{\partial^2u}{\partial x\partial y}+\frac{\partial^2u}{\partial y^2}=0.
> $$
>
> （中国科学院）

> [!problem] 6.2.10
> 证明：若 $u$ 是 $x,y,z$ 的函数且 $\varphi(u^2-x^2,u^2-y^2,u^2-z^2)=0$，则
>
> $$
> \frac{u'_x}{x}+\frac{u'_y}{y}+\frac{u'_z}{z}=\frac{1}{u}.
> $$
>
> （东北师范大学）

> [!tip]- 提示
> 原式对 $x$ 求导：
>
> $$
> \varphi'_1\cdot(2uu'_x-2x)+\varphi'_2\cdot(2uu'_x)+\varphi'_3\cdot(2uu'_x)=0.
> $$
>
> 整理后，得
>
> $$
> (\varphi'_1+\varphi'_2+\varphi'_3)\frac{u'_x}{u}=\frac{1}{x}\varphi'_1.
> $$
>
> 同理，
>
> $$
> (\varphi'_1+\varphi'_2+\varphi'_3)\frac{u'_y}{u}=\frac{1}{y}\varphi'_2,
> \qquad
> (\varphi'_1+\varphi'_2+\varphi'_3)\frac{u'_z}{u}=\frac{1}{z}\varphi'_3.
> $$
>
> 三式相加即得所求.

> [!problem] ☆6.2.11
> 设 $u,v,w$ 都是 $x$ 的函数，且有二阶连续导数，试证：
>
> $$
> W(u,v,w)=\begin{vmatrix}
> u&v&w\\
> u'&v'&w'\\
> u''&v''&w''
> \end{vmatrix}
> $$
>
> 满足 $W=u^3W\left(1,\dfrac{v}{u},\dfrac{w}{u}\right)$.（西北师范大学）

> [!tip]- 提示
>
> $$
> W\left(1,\frac{v}{u},\frac{w}{u}\right)
> =
> \begin{vmatrix}
> 1&\frac{v}{u}&\frac{w}{u}\\
> 0&\left(\frac{v}{u}\right)'&\left(\frac{w}{u}\right)'\\
> 0&\left(\frac{v}{u}\right)''&\left(\frac{w}{u}\right)''
> \end{vmatrix}
> =\frac{1}{u^3}W(u,v,w).
> $$
>
> （最后等号两端都等于：$\dfrac{1}{u^3}(A_{31}u''+A_{32}v''+A_{33}w'')$（$A_{ij}$ 是代数余子式）.）

> [!problem] ☆6.2.12
> 设 $x=f(u,v)$, $y=g(u,v)$, $w=w(x,y)$ 有二阶连续偏导数，满足
> i）$\dfrac{\partial f}{\partial u}=\dfrac{\partial g}{\partial v}$, $\dfrac{\partial f}{\partial v}=-\dfrac{\partial g}{\partial u}$；
> ii）$\dfrac{\partial^2w}{\partial x^2}+\dfrac{\partial^2w}{\partial y^2}=0$.
> 试证：
>
> 1）$\dfrac{\partial^2(fg)}{\partial u^2}+\dfrac{\partial^2(fg)}{\partial v^2}=0$；
>
> 2）$w(x,y)=w(f(u,v),g(u,v))$ 满足 $\dfrac{\partial^2w}{\partial u^2}+\dfrac{\partial^2w}{\partial v^2}=0$.（北京大学）

> [!tip]- 提示
> 1）$(f\cdot g)''_{11}=f''_{11}g+2f'_1g'_1+fg''_{11}$, $(f\cdot g)''_{22}=f''_{22}g+g'_1g'_1+g''_{22}f+g'_2f'_2$. 类似可求 $(f\cdot g)''_{22}$. 并注意 $g''_{22}=-f''_{uv}$, $g''_{vv}=f''_{uu}$（注 $g''_{22}$ 是 $g''_{uu}$ 的简写.）
>
> 2）注意使用对称性.

> [!tip]- 再提示
>
> $$
> \frac{\partial^2w}{\partial u^2}=w''_{11}x_u^2+2w''_{12}x'_uy'_u+w'_1x''_{uu}+w''_{22}y_u^2+w'_2y''_{uu}.
> $$
>
> 将 $u$ 换成 $v$ 照样成立，故
>
> $$
> \frac{\partial^2w}{\partial u^2}+\frac{\partial^2w}{\partial v^2}
> =w''_{11}(x_u^2+x_v^2)+2w''_{12}(x'_uy'_u+x'_vy'_v)+w''_{22}(y_u^2+y_v^2)+w'_1(x''_{uu}+x''_{vv})+w'_2(y''_{uu}+y''_{vv}).
> $$
>
> 注意由已知条件 i），上式三个方括号为 0，两圆括号相等. 因此
>
> $$
> \text{上式}=\bigl(w''_{11}+w''_{22}\bigr)(x_u^2+x_v^2)\overset{ii}{=}0.
> $$

> [!note] 注
> 事实上结论 2）证明之后，结论 1）自然成立. 因为结论 1）中 $fg$ 是 $w=xy$，$x=f(u,v),y=g(u,v)$ 的特殊情况.

> [!problem] ☆6.2.13
> 设 $u(x,y)$ 有连续的二阶偏导数，$F(s,t)$ 有连续的一阶偏导数，且满足 $F(u'_x,u'_y)=0$，$(F'_s)^2+(F'_t)^2\ne0$. 证明：$u''_{xx}u''_{yy}-(u''_{xy})^2=0$.（华东师范大学）

> [!tip]- 提示
> 题意表明，作为 $x,y$ 的函数 $s=u'_x(x,y),t=u'_y(x,y)$，代入 $F(s,t)$ 后恒为零，即 $F(u'_x(x,y),u'_y(x,y))\equiv0$.

> [!tip]- 再提示
> 该式对 $x$ 求导，得 $F'_s\cdot u''_{xx}+F'_t\cdot u''_{xy}=0$，对 $y$ 求导得 $F'_s\cdot u''_{xy}+F'_t\cdot u''_{yy}=0$.
>
> 已知 $(F'_s)^2+(F'_t)^2\ne0$，表明作为一次齐次线性方程组有非零解，故系数行列式应为零，即
>
> $$
> u''_{xx}u''_{yy}-(u''_{xy})^2=
> \begin{vmatrix}
> u''_{xx}&u''_{xy}\\u''_{xy}&u''_{yy}
> \end{vmatrix}=0.
> $$

#### 变换微分方程（或微分式）

> [!problem] 6.2.14
> 设 $u=x+y$, $v=\dfrac{1}{x}+\dfrac{1}{y}$, 试用 $u,v$ 作新自变量变换方程 $\square$
> （假设出现的二阶偏导数都连续.）（上海交通大学）

> [!tip]- 提示
> 可用例 6.2.10 中的方法.

> [!solution]- 解
> $\dfrac{\partial}{\partial x} = \dfrac{\partial}{\partial u} - \dfrac{1}{x^2}\cdot\dfrac{\partial}{\partial v}$，$\dfrac{\partial}{\partial y} = \dfrac{\partial}{\partial u} - \dfrac{1}{y^2}\cdot\dfrac{\partial}{\partial v}$（其中 $z$ 被省略，成为算子），
>
> $$
> \begin{aligned}
> \frac{\partial^2}{\partial x^2} &= \frac{\partial^2}{\partial u^2} - \frac{1}{x^2}\cdot\frac{\partial^2}{\partial u\partial v} + 2\cdot\frac{1}{x^3}\cdot\frac{\partial}{\partial v} - \frac{1}{x^2}\left(\frac{\partial^2}{\partial u\partial v} - \frac{1}{x^2}\cdot\frac{\partial^2}{\partial v^2}\right) \\
> &= \frac{\partial^2}{\partial u^2} - \frac{2}{x^2}\cdot\frac{\partial^2}{\partial u\partial v} + \frac{1}{x^4}\cdot\frac{\partial^2}{\partial v^2} + \frac{2}{x^3}\cdot\frac{\partial}{\partial v},
> \end{aligned}
> $$
>
> $$
> \frac{\partial^2}{\partial x\partial y} = \frac{\partial^2}{\partial u^2} - \left(\frac{1}{x^2}+\frac{1}{y^2}\right)\frac{\partial^2}{\partial u\partial v} + \frac{1}{x^2}\cdot\frac{1}{y^2}\cdot\frac{\partial^2}{\partial v^2},
> $$
>
> $$
> \frac{\partial^2}{\partial y^2} = \frac{\partial^2}{\partial u^2} - \frac{2}{y^2}\cdot\frac{\partial^2}{\partial u\partial v} + \frac{1}{y^4}\cdot\frac{\partial^2}{\partial v^2} + \frac{2}{y^3}\cdot\frac{\partial}{\partial v}.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> & x^2\frac{\partial^2 z}{\partial x^2} - (x^2+y^2)\frac{\partial^2 z}{\partial x\partial y} + y^2\frac{\partial^2 z}{\partial y^2} \\
> =& x^2\Bigl(\frac{\partial^2}{\partial u^2} - \frac{2}{x^2}\cdot\frac{\partial^2}{\partial u\partial v} + \frac{1}{x^4}\cdot\frac{\partial^2}{\partial v^2} + \frac{2}{x^3}\cdot\frac{\partial}{\partial v}\Bigr) \\
> & - (x^2+y^2)\Bigl[\frac{\partial^2}{\partial u^2} - \Bigl(\frac{1}{x^2}+\frac{1}{y^2}\Bigr)\frac{\partial^2}{\partial u\partial v} + \frac{1}{x^2}\cdot\frac{1}{y^2}\cdot\frac{\partial^2}{\partial v^2}\Bigr] \\
> & + y^2\Bigl(\frac{\partial^2}{\partial u^2} - \frac{2}{y^2}\cdot\frac{\partial^2}{\partial u\partial v} + \frac{1}{y^4}\cdot\frac{\partial^2}{\partial v^2} + \frac{2}{y^3}\cdot\frac{\partial}{\partial v}\Bigr) \\
> =& 0 + \Bigl[\frac{(x^2+y^2)^2}{x^2y^2} - 4\Bigr] \frac{\partial^2}{\partial u\partial v} + 0 + 2\Bigl(\frac{1}{x}+\frac{1}{y}\Bigr)\frac{\partial}{\partial v} \\
> =& \Bigl[\Bigl(\frac{(x+y)^2-2xy}{xy}\Bigr)^2 - 4\Bigr] \frac{\partial^2}{\partial u\partial v} + 2v\frac{\partial}{\partial v} \\
> =& \bigl[(uv-2)^2 - 4\bigr] \frac{\partial^2}{\partial u\partial v} + 2v\frac{\partial}{\partial v} \\
> =& uv(uv-4) \frac{\partial^2}{\partial u\partial v} + 2v\frac{\partial}{\partial v}.
> \end{aligned}
> $$
>
> 故最后结果是
>
> $$
> uv(uv-4) \frac{\partial^2 z}{\partial u\partial v} + 2v\frac{\partial z}{\partial v} = 0.
> $$

> [!problem] 6.2.15
> 通过 $u = x - 2\sqrt{y}$，$v = x + 2\sqrt{y}$，变换方程
> $\dfrac{\partial^2 z}{\partial x^2} - y\dfrac{\partial^2 z}{\partial y^2} = \dfrac{1}{2}\dfrac{\partial z}{\partial y}$（$y > 0$），假设所出现的偏导数都连续.（复旦大学）

> [!tip]- 提示
> 可用例 6.2.10 中的方法.

> [!note] 注
> 作为验证，用逆变换 $x = \dfrac{u+v}{2}$，$y = \dfrac{1}{16}(v-u)^2$ 很快可将方程 $\dfrac{\partial^2 z}{\partial u\partial v} = 0$ 变回原方程.

> [!problem] ☆6.2.16
> 设 $z = f(x, y)$ 是二次连续可微函数，又有关系式 $u = x + ay$，$v = x - ay$（$a$ 是不为零的常数）. 证明：$a^2\dfrac{\partial^2 z}{\partial x^2} - \dfrac{\partial^2 z}{\partial y^2} = 4a^2\dfrac{\partial^2 z}{\partial u\partial v}$.（北京大学）

> [!tip]- 提示
> 可用逆变换 $x = \dfrac{1}{2}(u+v)$，$y = \dfrac{1}{2a}(u-v)$，将欲证的等式右端变换成左端；也可用 $u = x+ay$，$v = x-ay$ 将左端变换成右端.

> [!problem] 6.2.17
> 设 $u = f(r)$，$r = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2}$. 证明：
> $\dfrac{\partial^2 u}{\partial x_1^2} + \cdots + \dfrac{\partial^2 u}{\partial x_n^2} = \dfrac{d^2 u}{dr^2} + \dfrac{n-1}{r}\cdot\dfrac{du}{dr}$.

> [!tip]- 提示
> $\dfrac{\partial u}{\partial x_i} = f' \cdot \dfrac{x_i}{\sqrt{x_1^2+\cdots+x_n^2}}$，
>
> $\dfrac{\partial^2 u}{\partial x_i^2} = f'' \cdot \dfrac{x_i^2}{x_1^2+\cdots+x_n^2} + f' \cdot \Bigl(\dfrac{1}{r} - \dfrac{x_i^2}{r^3}\Bigr)$，代入等式左端可得右端.

> [!problem] ☆6.2.18
> 若 $u(x, y)$ 的二阶导数存在，证明：$u(x, y) = f(x)g(y)$ 的充要条件是
> $u\dfrac{\partial^2 u}{\partial x\partial y} = \dfrac{\partial u}{\partial x}\cdot\dfrac{\partial u}{\partial y}$
> （$u \ne 0$）.（清华大学）

> [!tip]- 提示
> 必要性可直接代入验证.（充分性）记 $v = \dfrac{\partial u}{\partial y}$，可将方程变形.

> [!tip]- 再提示
> 这时方程变为
>
> $u\dfrac{\partial v}{\partial x} = v\dfrac{\partial u}{\partial x}$，或 $u\dfrac{\partial v}{\partial x} - v\dfrac{\partial u}{\partial x} = 0$，亦或
> $u^2\square$?
>
> $\dfrac{u\dfrac{\partial v}{\partial x} - v\dfrac{\partial u}{\partial x}}{u^2} = 0$，
>
> 即 $\dfrac{\partial}{\partial x}\Bigl(\dfrac{v}{u}\Bigr) = 0$，故 $\dfrac{v}{u} = h(y)$（与 $x$ 无关）. 于是，$\dfrac{\partial u}{\partial y} = v = uh(y)$，表明 $(\ln u)'_y = h(y)$. 因此，$\ln u = \int h(y)dy + c(x)$，得 $u = e^{\int h(y)dy + c(x)} = f(x)g(y)$.

> [!problem] 6.2.19
> 以 $u = y/x$，$v = xy$ 作自变量，$w = x + y + z$ 作函数，变换方程
> $x^2\dfrac{\partial^2 z}{\partial x^2} + 2xy\dfrac{\partial^2 z}{\partial x\partial y} + y^2\dfrac{\partial^2 z}{\partial y^2} = 0$.
> （中南大学）

> [!tip]- 提示
> 可参看例 6.2.11—6.2.13.

#### 多元函数可微性

> [!problem] 6.2.20
> 设
>
> $$
> f(x, y) =
> \begin{cases}
> \dfrac{x^2 y^2}{(x^2 + y^2)^{3/2}}, & x^2 + y^2 \ne 0,\\[6pt]
> 0, & x^2 + y^2 = 0.
> \end{cases}
> $$
>
> 求证：在 $(0,0)$ 处，$f(x,y)$ 连续但不可微.

> [!tip]- 提示
> 连续性：$|f(x, y) - f(0, 0)| \le \dfrac{1}{4}\sqrt{x^2 + y^2} \to 0$；$(0,0)$ 处不可微最后归结为证明
> $\displaystyle\lim_{(x,y)\to(0,0)}\dfrac{x^2 y^2}{(x^2 + y^2)^2}$ 不存在.

> [!note] 注
> 类似考研题可举出很多，但解法都一样. 参看例 6.2.15—6.2.17.

> [!problem] ☆6.2.21
> 确定 $\alpha$ 的值使得函数
>
> $$
> f(x, y) =
> \begin{cases}
> (x^2 + y^2)^\alpha \sin\left(\dfrac{1}{x^2 + y^2}\right), & (x,y) \ne (0,0),\\[8pt]
> 0, & (x,y) = (0,0)
> \end{cases}
> $$
>
> 在 $(0,0)$ 处可微.（同济大学）

> [!tip]- 提示
> 证明 $f$ 在 $(0,0)$ 处可微必须 $\alpha > \dfrac{1}{2}$；而 $\alpha > \dfrac{1}{2}$ 时，$f$ 在 $(0,0)$ 处确实可微.

> [!tip]- 再提示
> $f$ 在 $(0,0)$ 处可微，故 $f'_x$，$f'_y$ 在 $(0,0)$ 处存在.
>
> $f'_x(0,0) = \displaystyle\lim_{x\to 0} x^{2\alpha-1}\sin(1/x^2)$ 要存在务必 $\alpha > \dfrac{1}{2}$.
>
> 反之，若 $\alpha > \dfrac{1}{2}$，则 $f'_x(0,0) = f'_y(0,0) = 0$.
>
> $$
> \frac{|\Delta f - f'_x(0,0)\Delta x - f'_y(0,0)\Delta y|}{\rho}
> = \frac{|(x^2+y^2)^\alpha \sin(1/(x^2+y^2))|}{\sqrt{x^2+y^2}}
> \le |x^2+y^2|^{\alpha - 1/2} \to 0 \quad (x\to0, y\to0),
> $$
>
> 故 $f$ 在 $(0,0)$ 处可微.

> [!problem] 6.2.22
> 设
>
> $$
> f(x, y) =
> \begin{cases}
> g(x, y)\,\sin\left(\dfrac{1}{\sqrt{x^2 + y^2}}\right), & (x,y) \ne (0,0),\\[8pt]
> 0, & (x,y) = (0,0)
> \end{cases}
> $$
>
> 证明：
>
> 1）若 $g(0,0) = 0$，$g(x,y)$ 在 $(0,0)$ 处可微，且 $dg(0,0) = 0$，则 $f$ 在 $(0,0)$ 处可微，且 $df(0,0) = 0$；
>
> 2）若 $g$ 在 $(0,0)$ 有偏导数，且 $f$ 在 $(0,0)$ 处可微，则 $df(0,0) = 0$.（武汉大学）

> [!tip]- 提示
> 1）先证明 $f'_x(0,0) = f'_y(0,0) = 0$，再证
>
> $\dfrac{1}{\rho}[\Delta z - f'_x(0,0)\Delta x - f'_y(0,0)\Delta y] \to 0$（$\rho\to0$）.
>
> 2）任务在于证明 $f'_x(0,0) = f'_y(0,0) = 0$.

> [!tip]- 再提示
> 1）由 $dg(0,0) = 0$，得 $g'_x(0,0) = g'_y(0,0) = 0$. 又因 $g$ 在 $(0,0)$ 处可微，故
>
> $g(x,y) - g(0,0) - g'_x(0,0)\Delta x - g'_y(0,0)\Delta y = g(x,y) = o(\rho)$（$\rho\to0$）.
>
> 从而 $f'_x(0,0) = \displaystyle\lim_{x\to0} \dfrac{f(x,0)-0}{x} = \lim_{x\to0} \dfrac{g(x,0)\sin(1/x)}{x} = 0$.
>
> 同理，$f'_y(0,0) = 0$.
>
> 于是 $\dfrac{1}{\rho}[\Delta f - f'_x(0,0)\Delta x - f'_y(0,0)\Delta y] = \dfrac{1}{\rho}\,g(x,y)\sin\left(\dfrac{1}{\sqrt{x^2+y^2}}\right) \to 0$（$\rho\to0$）.
>
> 2）$g$ 在 $(0,0)$ 处有偏导，故 $g$ 在 $(0,0)$ 处对 $x$ 连续，$g(x,0) \to g(0,0)$（当 $x\to0$ 时）. 若 $\displaystyle\lim_{x\to0} g(x,0) = A \ne 0$，则
>
> $\sin\left(\dfrac{1}{\sqrt{x^2+0^2}}\right) = \dfrac{f(x,0)}{g(x,0)} \to \dfrac{0}{A} = 0$（当 $x\to0$ 时）（因 $f$ 在 $(0,0)$ 可微，故 $f$ 对 $x$ 在 $0$ 处连续，$f(x,0)\to0$），矛盾. 故 $\displaystyle\lim_{x\to0} g(x,0) = 0 = g(0,0)$，由此可推知 $g'_x(0,0) = 0$（因已知 $g'_x(0,0)$ 存在，若 $g'_x(0,0)=a \ne 0$，则
>
> $\sin\left(\dfrac{1}{\sqrt{x^2+0^2}}\right) = \dfrac{f(x,0)}{g(x,0)} = \dfrac{(f(x,0)-0)/x}{(g(x,0)-0)/x} \to \dfrac{f'_x(0,0)}{a}$，矛盾）. 进而得
>
> $f'_x(0,0) = \displaystyle\lim_{x\to0} \dfrac{g(x,0)\sin(1/\sqrt{x^2+0^2}) - 0}{x} = \lim_{x\to0} \dfrac{g(x,0)-0}{x} \cdot \sin(1/\sqrt{x^2}) = 0$.
>
> 同理可证 $f'_y(0,0) = 0$. 于是 $df(0,0) = 0$.

> [!problem] ☆6.2.23
> 设函数 $g(x, y)$ 在 $(x_0, y_0)$ 处可微，$g(x_0, y_0)=0$，且 $\exists M>0$，使得 $|g(x, y)| \le M\rho$（在 $(x_0, y_0)$ 的某个邻域内），其中 $\rho = \sqrt{(x - x_0)^2 + (y - y_0)^2}$. 试证：任一函数 $f(x, y)$，若 $\displaystyle\lim_{(x,y)\to(x_0,y_0)} f(x,y) = A$ 存在，则 $z = f(x,y)g(x,y)$ 在 $(x_0, y_0)$ 处可微.（仿武汉大学试题）

> [!tip]- 提示
> 先证 $z'_x(x_0,y_0) = A g'_x(x_0,y_0)$，$z'_y(x_0,y_0) = A g'_y(x_0,y_0)$，然后由 $g(x,y)$ 在 $(x_0,y_0)$ 处可微，导出 $f(x,y)$ 在 $(x_0,y_0)$ 处可微.

> [!tip]- 再提示
> $z'_x(x_0,y_0) = \displaystyle\lim_{x\to x_0} \dfrac{f(x,y_0)g(x,y_0)-0}{x-x_0}$
> $= \displaystyle\lim_{x\to x_0} f(x,y_0)\,\dfrac{g(x,y_0)-0}{x-x_0} = A g'_x(x_0,y_0)$.
>
> 同理 $z'_y(x_0,y_0) = A g'_y(x_0,y_0)$. 这时有 $\Delta z = f(x,y)g(x,y) = (A + \alpha)g(x,y)$，其中 $\alpha\to0$（当 $\rho\to0$ 时）. 于是
>
> $$
> \begin{aligned}
> &\frac{1}{\rho}\bigl[\Delta z - z'_x(x_0,y_0)\Delta x - z'_y(x_0,y_0)\Delta y\bigr] \\
> =& \frac{1}{\rho}\bigl[(A + \alpha)g(x,y) - A g'_x(x_0,y_0)\Delta x - A g'_y(x_0,y_0)\Delta y\bigr] \\
> =& \frac{A}{\rho}\bigl[g(x,y) - g'_x(x_0,y_0)\Delta x - g'_y(x_0,y_0)\Delta y\bigr] + \frac{\alpha}{\rho}\,g(x,y) \to 0 \quad (\rho\to0).
> \end{aligned}
> $$
>
> 由 $g$ 在 $(x_0,y_0)$ 处可微，第一项 $\to0$；由 $|g(x,y)| \le M\rho$ 知第二项 $\to0$（当 $\rho\to0$ 时）. 故 $z = f(x,y)$ 在 $(x_0,y_0)$ 处可微.

> [!problem] ☆6.2.24
> 设 $f'_x$，$f'_y$ 在 $(x_0,y_0)$ 的某个邻域里存在，在 $(x_0,y_0)$ 的某个空心邻域里 $f''_{xy}$ 存在，且 $\displaystyle\lim_{(x,y)\to(x_0,y_0)} f''_{xy}(x,y)$ 存在，试证：$f''_{xy}$ 在 $(x_0,y_0)$ 处连续，$f''_{xy}(x_0,y_0)$ 存在，且 $f''_{xy}(x_0,y_0)=f''_{xy}(x_0,y_0)$.

> [!tip]- 提示
> 根据例 6.2.8，只需两混合偏导 $f''_{xy}$，$f''_{yx}$ 其中一个在 $(x_0,y_0)$ 处连续即可. 因已知 $\displaystyle\lim_{(x,y)\to(x_0,y_0)} f''_{xy}(x,y)=A$，故只需证 $f''_{yx}(x_0,y_0)$ 存在，且等于 $A$.

> [!tip]- 再提示
> $f''_{yx}(x_0,y_0) = \displaystyle\lim_{y\to y_0} \dfrac{f'_x(x_0,y)-f'_x(x_0,y_0)}{y-y_0}$，利用 Lagrange 微分中值定理，$\exists\,\xi$ 在 $y$ 与 $y_0$ 之间，使得
>
> $f'_x(x_0,y)-f'_x(x_0,y_0) = f''_{xy}(x_0,\xi)(y-y_0)$，
>
> 因此上式 $= \displaystyle\lim_{\xi\to y_0} f''_{xy}(x_0,\xi) = A$.


## §6.3 多元Taylor公式·凸函数·几何应用·极值

> [!note] 导读
> 本节中的几何应用与极值两部分是各类考试热点，适合各类读者. 多元Taylor公式及凸函数主要适合数学院系学生，非数学院系学生不作太多要求。


### * 一、多元Taylor公式

这里只讨论Taylor公式的唯一性及Taylor公式的某些应用. 求初等函数的展开，一般不感到困难，此处从略。

> [!example] 例6.3.1（Taylor公式的唯一性）
> 假设 $f(x,y)$ 具有 $n+1$ 阶连续偏导数，若用某种方法得到展开式
> $$f(x,y) = \sum_{i+j=0}^n A_{ij}(x-x_0)^i (y-y_0)^j + o(\rho^n), \quad \text{(1)}$$
> 其中 $\rho = \sqrt{(x-x_0)^2 + (y-y_0)^2}$，则必有
> $$A_{ij} = \frac{C_{i+j}^i}{(i+j)!} \cdot \frac{\partial^{i+j}}{\partial x^i\partial y^j} f(x_0,y_0) = \frac{1}{i!j!} \cdot \frac{\partial^{i+j}f}{\partial x^i\partial y^j}(x_0,y_0).$$
> （多元的情况有类似结论。）

> [!proof]- 证
> 已知 $f(x,y)$ 有 $n+1$ 阶连续偏导数，故 $f(x,y)$ 的Taylor公式成立：
> $$f(x,y) = \sum_{i+j=0}^n \left[\frac{C_{i+j}^i}{(i+j)!} \cdot \frac{\partial^{i+j}}{\partial x^i\partial y^j}f(x_0,y_0)\right] (x-x_0)^i (y-y_0)^j + o(\rho^n). \quad \text{(2)}$$
> 式（1）减式（2），便得 $0$ 函数的展开式：
> $$0 = \sum_{i+j=0}^n B_{ij}(x-x_0)^i (y-y_0)^j + o(\rho^n), \quad \text{(3)}$$
> 其中 $B_{ij} = A_{ij} - \frac{C_{i+j}^i}{(i+j)!} \cdot \frac{\partial^{i+j}f}{\partial x^i\partial y^j}(x_0,y_0)$. 因此，我们只要由式（3）推出 $B_{ij}=0$（$i+j=0,1,\cdots,n$）即可. 作变量替换 $\xi=x-x_0$，$\eta=y-y_0$. 对于新变量 $(\xi,\eta)$，式（3）变成
> $$0 = \sum_{i+j=0}^n B_{ij}\xi^i\eta^j + o(\rho^n) \ (\rho = \sqrt{\xi^2+\eta^2}).$$
> 为照顾习惯，仍把 $(\xi,\eta)$ 记作 $(x,y)$. 于是问题化为由式
> $$0 = \sum_{i+j=0}^n B_{ij}x^iy^j + o(\rho^n) \ (\rho = \sqrt{x^2+y^2}) \quad \text{(4)}$$
> 证明 $B_{ij}=0$（$i+j=0,1,2,\cdots,n$；$i,j$ 为非负整数）.
> 首先，在式（4）中，令 $\rho\to 0$，便得 $B_{00}=0$. 然后令 $y=\alpha x$，则式（4）变成
> $$\sum_{i+j=1}^n \alpha^j B_{ij} x^{i+j} + o(x^n) = 0. \quad \text{(5)}$$
> 设 $x\neq 0$，用 $x$ 除此式，令 $x\to 0$，得 $B_{10} + \alpha B_{01} = 0$. 因 $\alpha$ 为任意实数，故知 $B_{10} = B_{01} = 0$. 式（5）成为
> $$\sum_{i+j=2}^n \alpha^j B_{ij} x^{i+j} + o(x^n) = 0. \quad \text{(6)}$$
> 同样，式（6）除以 $x^2$，令 $x\to 0$，得 $B_{20} + \alpha B_{11} + \alpha^2 B_{02} = 0$. 由 $\alpha$ 的任意性，可知 $B_{20} = B_{11} = B_{02} = 0$. 从而式（6）变成
> $$\sum_{i+j=3}^n \alpha^j B_{ij} x^{i+j} + o(x^n) = 0.$$
> 如此继续下去，可得一切 $B_{ij}=0$（$i+j=0,1,2,\cdots,n$）. 证毕。

> [!remark] 注
> 有了唯一性，求Taylor公式展开式，不一定要用求导数的方法，只要余项是 $\rho^n$ 的高级无穷小，所得的展开式必是Taylor公式的展开式（见本节后面的有关练习）.

下面两例说明Taylor公式的某些应用。

> [!example] 例6.3.2
> 设 $D\subseteq\mathbb{R}^n$ 为凸的有界闭区域，$f(P)$ 在 $D$ 上有连续的一阶偏导数. 试证：$f(P)$ 在 $D$ 上满足 Lipschitz 条件. 即：$\exists L>0$，$\forall P,P_1\in D$，有
> $$|f(P)-f(P_1)| \le L|P-P_1|.$$

> [!proof]- 证
> 根据已知条件可知：$\exists M>0$，使得 $|f'_{x_i}(P)| \le M$，$\forall P\in D$，$i=1,2,\cdots,n$. 因 $D$ 为凸区域，由Taylor公式，$\forall P,P_1\in D$，$\exists P^*\in\overline{PP_1}\subset D$，使得
> $$
> \begin{aligned}
> |f(P)-f(P_1)| &= \left|\sum_{i=1}^n \frac{\partial f}{\partial x_i}(P^*)(x_i-x_{1i})\right| \\
> &\le \sum_{i=1}^n \left|\frac{\partial f}{\partial x_i}(P^*)\right|\,|x_i-x_{1i}| \le Mn\,\rho(P,P_1),
> \end{aligned}
> $$
> 这里 $P$ 和 $P_1$ 分别为 $P(x_1,x_2,\cdots,x_n)$ 和 $P_1(x_{11},x_{12},\cdots,x_{1n})$. 令 $L = Mn$，则得式（1）.
> 由本例可知，在有界凸区域上函数 $f$ 的一阶偏导数连续有界，则 $f$ 在此区域上一致连续。

> [!example] ☆ 例6.3.3
> 设 $F(x,y,z)$ 在 $\mathbb{R}^3$ 中有连续的一阶偏导数 $\frac{\partial F}{\partial x},\frac{\partial F}{\partial y},\frac{\partial F}{\partial z}$，并满足
> $$y\frac{\partial F}{\partial x} - x\frac{\partial F}{\partial y} + \frac{\partial F}{\partial z} \ge \alpha > 0, \quad \forall (x,y,z) \in \mathbb{R}^3,$$
> 其中 $\alpha$ 为常数. 试证明：当 $(x,y,z)$ 沿着曲线 $\Gamma: x=-\cos t,\ y=\sin t,\ z=t,\ t\ge 0$ 趋向无穷远时，$F(x,y,z)\to +\infty$.（北京大学）

> [!note]- 方法
> 利用推导多元 Taylor 公式的方法，对函数 $\Phi(t)=F(-\cos t,\sin t,t)$ 应用一元 Taylor 公式：$\Phi(t)=\Phi(0)+\Phi'(\tau)t$.

> [!proof]- 证
> 对曲线 $\Gamma$ 上的点 $(x,y,z)=(-\cos t,\sin t,t)\in\Gamma$，有
> $$F(x,y,z)=F(-\cos t,\sin t,t)=F(-1,0,0)+[F(-\cos t,\sin t,t)]'\big|_{t=\tau}\cdot t.$$
> 记 $\beta=F(-1,0,0)$，$\tau$ 对应的点为 $Q$：$Q=(-\cos\tau,\sin\tau,\tau)=(\xi,\eta,\zeta)$，则
> $$
> \begin{aligned}
> [F(-\cos t,\sin t,t)]'\big|_{t=\tau} &= \sin\tau\cdot\left.\frac{\partial F}{\partial x}\right|_Q + \cos\tau\cdot\left.\frac{\partial F}{\partial y}\right|_Q + \left.\frac{\partial F}{\partial z}\right|_Q \\
> &= \eta\left.\frac{\partial F}{\partial x}\right|_Q - \xi\left.\frac{\partial F}{\partial y}\right|_Q + \left.\frac{\partial F}{\partial z}\right|_Q \ge \alpha > 0.
> \end{aligned}
> $$
> 于是有 $F(x,y,z)\ge \beta+\alpha t\to +\infty$（当 $t\to +\infty$ 时）. 证毕。


### 二、凸函数

作为 Taylor 公式的一个应用，我们来研究凸函数。

> [!definition] 定义
> 区域 $D\subseteq \mathbb{R}^n$ 称为凸的，当且仅当 $\forall x,y\in D,\ \forall \lambda\in[0,1]$，有
> $$\lambda x+(1-\lambda)y\in D.$$
> $y=f(x)$ 称为凸区域 $D$ 上的凸函数，当且仅当 $\forall x,y\in D,\ \forall \lambda\in[0,1]$，有
> $$f[\lambda x+(1-\lambda)y]\le \lambda f(x)+(1-\lambda)f(y)$$
> （若"$\le$"换成"$<$"，则 $f$ 称为严格凸的）。
> 其几何意义如图6.3.1所示。

> [!theorem] 定理1
> 设 $f$ 在凸区域 $D$ 上定义并且有连续的一阶偏导数，则 $f$ 在 $D$ 内为凸函数的充要条件是：$\forall x,y\in D$，有
> $$f(y)\ge f(x)+(y-x)\nabla f(x), \qquad (1)$$
> 其中 $x=(x_1,x_2,\cdots,x_n)$，$y=(y_1,y_2,\cdots,y_n)$，$\nabla f(x)=\left(\frac{\partial f}{\partial x_1},\frac{\partial f}{\partial x_2},\cdots,\frac{\partial f}{\partial x_n}\right)$，
> $$(y-x)\nabla f(x)=\frac{\partial f}{\partial x_1}(y_1-x_1)+\frac{\partial f}{\partial x_2}(y_2-x_2)+\cdots+\frac{\partial f}{\partial x_n}(y_n-x_n). \qquad (2)$$

> [!proof]- 证
> **1°（必要性）** 由于 $f$ 在 $D$ 上为凸函数。故 $\forall x,y\in D$，$\forall \lambda\in[0,1]$，有
> $$f[\lambda y+(1-\lambda)x]\le \lambda f(y)+(1-\lambda)f(x),$$
> 即
> $$f[x+\lambda(y-x)]-f(x)\le \lambda f(y)-\lambda f(x). \qquad (3)$$
> 因 $f$ 有连续的一阶导数，故 $f$ 可微：
> $$f[x+\lambda(y-x)]-f(x)=\left(\frac{\partial}{\partial x_1}f(x)\right)\lambda(y_1-x_1)+\cdots+\left(\frac{\partial}{\partial x_n}f(x)\right)\lambda(y_n-x_n)+\varepsilon_1\lambda(y_1-x_1)+\cdots+\varepsilon_n\lambda(y_n-x_n), \qquad (4)$$
> 其中 $\varepsilon_1,\cdots,\varepsilon_n\to 0$（当 $\lambda\to 0$ 时）。将式(4)代入式(3)，令 $\lambda\ne 0$，以 $\lambda$ 同除式(3)两端，再令 $\lambda\to 0$，得
> $$\left(\frac{\partial}{\partial x_1}f(x)\right)(y_1-x_1)+\cdots+\left(\frac{\partial}{\partial x_n}f(x)\right)(y_n-x_n)\le f(y)-f(x).$$
> 注意到式(2)，此式左端即为 $(y-x)\nabla f(x)$。故式(1)得证。
>
> **2°（充分性）** $\forall x,y\in D$，$\forall \lambda\in[0,1]$，记 $z=\lambda x+(1-\lambda)y\in D$，按已知条件，
> $$f(x)\ge f(z)+(x-z)\nabla f(z), \qquad (5)$$
> $$f(y)\ge f(z)+(y-z)\nabla f(z). \qquad (6)$$
> 将(5)、(6)分别乘 $\lambda$ 与 $(1-\lambda)$，然后相加，得
> $$
> \begin{aligned}
> \lambda f(x)+(1-\lambda)f(y) &\ge \lambda f(z)+(1-\lambda)f(z)+[\lambda(x-z)+(1-\lambda)(y-z)]\nabla f(z) \\
> &= f(z)+[\lambda x+(1-\lambda)y-z]\nabla f(z)=f(z)+(z-z)\nabla f(z) \\
> &= f(z)=f[\lambda x+(1-\lambda)y],
> \end{aligned}
> $$
> 即 $f[\lambda x+(1-\lambda)y]\le \lambda f(x)+(1-\lambda)f(y)$。这就证明了 $f$ 为凸函数。

> [!theorem] 定理2
> 设 $D\subseteq \mathbb{R}^n$ 为凸区域，$f(x)=f(x_1,\cdots,x_n)$ 在 $D$ 上定义，有连续的二阶偏导数，证明 $f(x)$ 在 $D$ 上为凸函数的充要条件是 Hesse 矩阵 $\left(\frac{\partial^2 f}{\partial x_i\partial x_j}\right)_{i,j=1}^n$ 在 $D$ 上为半正定的。（浙江大学）

> [!proof]- 证
> **1°（充分性）** $\forall x,y\in D$，根据 Taylor 公式，$\exists \xi=x+\theta(y-x)$（$0<\theta<1$），使得
> $$f(y)=f(x)+(y-x)\nabla f(x)+\frac1{2!}\left[(y_1-x_1)\frac{\partial}{\partial x_1}+\cdots+(y_n-x_n)\frac{\partial}{\partial x_n}\right]^2 f(\xi). \qquad (1)$$
> 注意到
> $$
> \begin{aligned}
> &\left[(y_1-x_1)\frac{\partial}{\partial x_1}+\cdots+(y_n-x_n)\frac{\partial}{\partial x_n}\right]^2 f(\xi) \\
> =&\sum_{i,j=1}^n (y_i-x_i)(y_j-x_j)\frac{\partial^2 f(\xi)}{\partial x_i\partial x_j} \\
> =&\left(y_1-x_1,\ y_2-x_2,\ \cdots,\ y_n-x_n\right)
> \left(\frac{\partial^2 f(\xi)}{\partial x_i\partial x_j}\right)
> \begin{pmatrix} y_1-x_1\\ y_2-x_2\\ \vdots\\ y_n-x_n \end{pmatrix}, \qquad (2)
> \end{aligned}
> $$
> 若矩阵 $\left(\frac{\partial^2 f}{\partial x_i\partial x_j}\right)_{i,j=1,2,\cdots,n}$ 在 $D$ 上为半正定的，则式(2)非负，式(1)成为
> $$f(y)\ge f(x)+(y-x)\nabla f(x).$$
> 从而 $f$ 在 $D$ 上为凸函数（定理1）。
>
> **2°（必要性）** 用反证法。假设 $\left(\frac{\partial^2 f}{\partial x_i\partial x_j}\right)$ 为非半正定的，则 $\exists x\in D$ 及 $h=(h_1,\cdots,h_n)$，使得
> $$(h_1,\cdots,h_n)\left(\frac{\partial^2 f(x)}{\partial x_i\partial x_j}\right)\begin{pmatrix} h_1\\ \vdots\\ h_n \end{pmatrix}<0. \qquad (3)$$
> 另一方面，由 Taylor 公式，当 $\lambda\to 0$ 时，
> $$
> \begin{aligned}
> f(x+\lambda h) &= f(x)+\lambda h\nabla f(x)+\frac12(\lambda h_1,\cdots,\lambda h_n)\left(\frac{\partial^2 f(x)}{\partial x_i\partial x_j}\right)\begin{pmatrix} \lambda h_1\\ \vdots\\ \lambda h_n \end{pmatrix}+o(|\lambda h|^2) \\
> &= f(x)+\lambda h\nabla f(x)+\frac12\lambda^2(h_1,\cdots,h_n)\left(\frac{\partial^2 f(x)}{\partial x_i\partial x_j}\right)\begin{pmatrix} h_1\\ \vdots\\ h_n \end{pmatrix}+o(\lambda^2) \\
> &= f(x)+\lambda h\nabla f(x)+\lambda^2\left[\frac12(h_1,\cdots,h_n)\left(\frac{\partial^2 f(x)}{\partial x_i\partial x_j}\right)\begin{pmatrix} h_1\\ \vdots\\ h_n \end{pmatrix}+o(1)\right].
> \end{aligned}
> $$
> 由式(3)，当 $\lambda$ 充分小时，此式右端第三项为负，于是
> $$f(x+\lambda h)\le f(x)+\lambda h\nabla f(x).$$
> 与 $f$ 的凸性矛盾（见定理1）。


### 三、几何应用

> [!note] 要点
> 空间曲线 $x=x(t)$, $y=y(t)$, $z=z(t)$ 的切向量为 $(x'(t),y'(t),z'(t))$。曲面 $F(x,y,z)=0$ 的法向量为 $(F_x',F_y',F_z')$。让流动向量与之平行或垂直，就可写出空间曲线切线与法平面、空间曲面的法线与切平面的方程，和解决与之有关的问题。

> [!example] 例6.3.4
> 求 $x=r\cos\varphi$, $y=r\sin\varphi$, $z=r\cot\alpha$ 在点 $M_0(\varphi_0,r_0)$ 处的切面与法线（其中 $\alpha$ 为常数）。

> [!solution]- 解
> $r=r_0$ 对应的曲线为 $x=r_0\cos\varphi$, $y=r_0\sin\varphi$, $z=r_0\cot\alpha$。它在 $M_0$ 的切向量为
> $\tau_1=r_0(-\sin\varphi_0,\cos\varphi_0,0)$。类似可得 $\varphi=\varphi_0$ 曲线在 $M_0$ 的切向量 $\tau_2=(\cos\varphi_0,\sin\varphi_0,\cot\alpha)$。从而曲面在 $M_0$ 的法向量为
>
> $$
> n=\tau_1\times\tau_2=r_0(\cos\varphi_0\cot\alpha,\sin\varphi_0\cot\alpha,-1).
> $$
>
> 由此可得切平面为
>
> $$
> x\cos\varphi_0+y\sin\varphi_0-z\tan\alpha=0.
> $$
>
> 法线为
>
> $$
> \frac{x-r_0\cos\varphi_0}{\cos\varphi_0}=\frac{y-r_0\sin\varphi_0}{\sin\varphi_0}=\frac{z-r_0\cot\alpha}{-\tan\alpha}.
> $$

> [!example] ☆ 例6.3.5
> 证明：若 $F(u,v)$ 有连续偏导数，则曲面 $S: F(nx-lz,ny-mz)=0$ 上任意一点的切平面都平行于直线 $L: \frac{x}{l}=\frac{y}{m}=\frac{z}{n}$。（东北师范大学）

> [!proof]- 证
> 曲面 $S$ 上任意一点 $(x_0,y_0,z_0)$ 的法向量与切平面分别为
>
> $$
> n=(nF_u',\ nF_v',\ -lF_u'-mF_v'),
> $$
>
> $$
> nF_u'\cdot(x-x_0)+nF_v'\cdot(y-y_0)-(lF_u'+mF_v')\cdot(z-z_0)=0.
> $$
>
> 直线 $L$ 的方向数为 $(l,m,n)$，
>
> $$
> n\cdot(l,m,n)=l\cdot nF_u'+m\cdot nF_v'+n(-lF_u'-mF_v')=0.
> $$
>
> 因此该直线与 $n$ 垂直，故 $L$ 与任意一点的切平面平行。

> [!example] *例6.3.6
> 设 $D$ 为凸的有界闭区域，曲面的方程为 $z=f(x,y)$，$(x,y)\in D$。$f(x,y)$ 在 $D$ 上有有界的二阶导函数。今用 $\varphi=\varphi(P_1,P)$表示曲面在 $P(x,y)\in D$，$P_1(x_1,y_1)\in D$ 两点法线之间夹角。试证：当 $P$ 与 $P_1$ 充分接近时，$\varphi(P_1,P)$满足 A.M. Ляпунов(Lyapunov)不等式：
>
> $$
> \varphi(P_1,P)\le c\rho(P_1,P),\quad P_1,P\in D,
> $$
>
> 其中 $c$ 为常数，$\rho(P_1,P)$表示 $P_1$ 与 $P$ 之间的距离。

> [!remark]- 分析
> 我们只要证明 $\varphi\le \frac{\pi}{2}\sin\varphi\le c\rho(P_1,P)$ 即可。已知 $0\le \varphi\le \frac{\pi}{2}$ 时，第一个不等式成立。$((0,\frac{\pi}{2})$ 内 $\frac{\sin x}{x}\to \frac{2}{\pi})$。现只需证明第二个不等式。

> [!proof]- 证
> 法向量为 $n(P)=(f_x'(P),f_y'(P),-1)$, $n(P_1)=(f_x'(P_1),f_y'(P_1),-1)$。
> 可见 $|n(P)|\ge 1$, $|n(P_1)|\ge 1$。故
>
> $$
> \sin^2\varphi=\frac{|n(P_1)\times n(P)|^2}{|n(P_1)|^2|n(P)|^2}\le |n(P_1)\times n(P)|^2
> =
> \left|\begin{matrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k}\\
> f_x'(P_1) & f_y'(P_1) & -1\\
> f_x'(P) & f_y'(P) & -1
> \end{matrix}\right|^2
> $$
>
> $$
> =\big(f_y'(P_1)-f_y'(P)\big)^2+\big(f_x'(P_1)-f_x'(P)\big)^2+\big(f_x'(P_1)f_y'(P)-f_x'(P)f_y'(P_1)\big)^2. \qquad (1)
> $$
>
> 由已知条件知，$\exists M>0$ 使得 $D$ 内有 $|f_x'|, |f_y'|, |f_{xx}''|, |f_{xy}''|, |f_{yy}''|\le M$。利用中值定理：$\exists P^*\in PP_1$（记 $P_1(x_1,y_1)$, $P(x,y)$），
>
> $$
> |f_x'(P_1)-f_x'(P)|=|f_{xx}''(P^*)(x_1-x)+f_{xy}''(P^*)(y_1-y)|\le 2M\rho(P_1,P).
> $$
>
> （因 $D$ 为凸域，$P^*\in D$。）同理，$|f_y'(P_1)-f_y'(P)|\le 2M\rho(P_1,P)$。故
>
> $$
> |f_x'(P_1)f_y'(P)-f_x'(P)f_y'(P_1)|
> \le |f_x'(P_1)|\,|f_y'(P)-f_y'(P_1)|+|f_y'(P_1)|\,|f_x'(P_1)-f_x'(P)|\le 4M^2\rho(P_1,P).
> $$
>
> 由式(1)，$\sin^2\varphi\le (1+2M^2)8M^2\rho^2(P_1,P)$。可见当 $\rho(P_1,P)$ 充分小时，$0\le \varphi\le \frac{\pi}{2}$，
>
> 从而
>
> $$
> 0\le \varphi(P_1,P)\le \frac{\pi}{2}\sin\varphi\le c\rho(P_1,P),
> $$
>
> 其中 $c=\sqrt{2}\pi M\sqrt{1+2M^2}$ 为常数。

> [!example] *例6.3.7
> 从原点向单叶双曲面 $\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$ 的切平面引垂线，求垂足的轨迹。

> [!solution]- 解
> 所谓垂足，即切平面与垂线的交点。曲面上任意一点 $(x_1,y_1,z_1)$ 的切平面为
>
> $$
> \frac{x_1x}{a^2}+\frac{y_1y}{b^2}-\frac{z_1z}{c^2}=1. \qquad (1)
> $$
>
> 过原点向此切平面引的垂线为
>
> $$
> \frac{a^2x}{x_1}=\frac{b^2y}{y_1}=\frac{-c^2z}{z_1}. \qquad (2)
> $$
>
> 我们的问题是：当 $(x_1,y_1,z_1)$ 沿单叶双曲面
>
> $$
> \frac{x_1^2}{a^2}+\frac{y_1^2}{b^2}-\frac{z_1^2}{c^2}=1 \qquad (3)
> $$
>
> 移动时，求方程式(1)、(2)所决定的垂足 $(x,y,z)$ 的轨迹。因此，只要在(1)、(2)、(3)中消去 $x_1,y_1,z_1$，求出 $(x,y,z)$ 满足的方程即可。令式(2)等于 $1/k$，得
>
> $$
> x_1=ka^2x,\quad y_1=kb^2y,\quad z_1=-kc^2z.
> $$
>
> 代入(1)、(3)，得 $k(x^2+y^2+z^2)=1$，$k^2(a^2x^2+b^2y^2-c^2z^2)=1$。从而
>
> $$
> (x^2+y^2+z^2)^2=a^2x^2+b^2y^2-c^2z^2,
> $$
>
> 即为所求。

> [!example] *例6.3.8
> 设 $a>b>c>0$ 为三个正数，试证 $\mathbb{R}^3$ 中任意一点 $M(x,y,z)$ 处有三个二次曲面
>
> $$
> \frac{x^2}{a^2-\lambda_i^2}+\frac{y^2}{b^2-\lambda_i^2}+\frac{z^2}{c^2-\lambda_i^2}=-1 \quad (i=1,2,3)
> $$
>
> （其中 $\lambda_1$，$\lambda_2$，$\lambda_3$ 为三个彼此不同的实数），它们通过点 $M$，并在点 $M$ 相互正交。

> [!hint]- 提示
> 要求 $\lambda_i$（$i=1,2,3$）使式（1）成立，即要求函数
>
> $$
> F(\lambda^2)=x^2(b^2-\lambda^2)(c^2-\lambda^2)+y^2(a^2-\lambda^2)(c^2-\lambda^2)+
> z^2(a^2-\lambda^2)(b^2-\lambda^2)+(a^2-\lambda^2)(b^2-\lambda^2)(c^2-\lambda^2)
> $$
>
> 的根。$F(\lambda^2)$ 为 $\lambda^2$ 的三次多项式，且在区间 $[c,b]$，$[b,a]$，$[a,+\infty)$ 端点上异号，因此有且仅有三个不同实根。
>
> 在 $(x,y,z)$ 处，三曲面的法向量
>
> $$
> n_i=\left( \frac{2x}{a^2-\lambda_i^2},\ \frac{2y}{b^2-\lambda_i^2},\ \frac{2z}{c^2-\lambda_i^2} \right) \quad (i=1,2,3)
> $$
>
> 相互正交。因为 $i\neq j$ 时，
>
> $$
> \begin{aligned}
> n_i\cdot n_j &= \frac{4x^2}{(a^2-\lambda_i^2)(a^2-\lambda_j^2)} + \frac{4y^2}{(b^2-\lambda_i^2)(b^2-\lambda_j^2)} + \frac{4z^2}{(c^2-\lambda_i^2)(c^2-\lambda_j^2)} \\
> &= \frac{4}{\lambda_i^2-\lambda_j^2} \left[ \left( \frac{x^2}{a^2-\lambda_i^2}+\frac{y^2}{b^2-\lambda_i^2}+\frac{z^2}{c^2-\lambda_i^2} \right) - \left( \frac{x^2}{a^2-\lambda_j^2}+\frac{y^2}{b^2-\lambda_j^2}+\frac{z^2}{c^2-\lambda_j^2} \right) \right] \\
> &= \frac{4}{\lambda_i^2-\lambda_j^2} \big[(-1)-(-1)\big] = 0.
> \end{aligned}
> $$


### ☆ 四、极值



#### a. 自由极值

> [!note] 要点
> 自由极值又称局部极值. $f$ 在点 $P_0$ 有极大（小）值，指函数 $f$ 在 $P_0$ 的某邻域里，恒有 $f(P_0)\geq f(P)$（或 $f(P_0)\leq f(P)$）（将 $\geq$（$\leq$）改为 $>$（$<$），则称为严格极值）.

求自由极值的方法步骤：

1）求可疑点. 可疑点包括：i）稳定点（即一阶偏导数同时等于零的点）；ii）使至少某一阶偏导数不存在的点.

2）对可疑点进行判断. 基本方法是：i）用定义判断；ii）利用实际背景进行判断；iii）利用二阶导数：设 $P_0$ 为稳定点，若在 $P_0$ 处 Hesse 矩阵

$$
H(P_0)=\begin{pmatrix}
f''_{x_1x_1} & f''_{x_1x_2} & \cdots & f''_{x_1x_n} \\
f''_{x_2x_1} & f''_{x_2x_2} & \cdots & f''_{x_2x_n} \\
\vdots & \vdots & \ddots & \vdots \\
f''_{x_nx_1} & f''_{x_nx_2} & \cdots & f''_{x_nx_n}
\end{pmatrix}
$$

为正定的，则 $f$ 在 $P_0$ 处取极小值；若 $H(P_0)$ 为负定的，则 $f$ 在 $P_0$ 处取极大值；若 $H(P_0)$ 为不定的，则 $f$ 在 $P_0$ 处无极值. 具体到二元函数即是：若 $f'_x(x_0,y_0)=f'_y(x_0,y_0)=0$，记

$$\Delta=(f''_{xx}f''_{yy}-f''^2_{xy})|_{(x_0,y_0)}$$

则

当 $\Delta>0$ 且 $f''_{xx}|_{(x_0,y_0)}>0$ 时，$f$ 在 $(x_0,y_0)$ 处取（严格）极小值；
当 $\Delta>0$ 且 $f''_{xx}|_{(x_0,y_0)}<0$ 时，$f$ 在 $(x_0,y_0)$ 处取（严格）极大值；
当 $\Delta<0$ 时，$f$ 在 $(x_0,y_0)$ 处无极值；
当 $\Delta=0$ 时，情况待定.

多元极值有两个观念值得澄清，其一是：一元函数的极大值与极小值总是交替地出现，多元函数谈不上交替，甚至只有一种极值（无穷多个）.

> [!example] ☆ 例 6.3.9
> 证明：函数 $z=f(x,y)=(1+e^y)\cos x-ye^y$ 有无穷多个极大值，但无极小值.（大连海事大学，中国人民大学）

> [!proof]- 证
> $f'_x=(1+e^y)(-\sin x)$，$f'_y=(\cos x-1-y)e^y$.
> 令 $f'_x=0$，$f'_y=0$，解方程，可得无穷多个稳定点 $(x_n,y_n)=(n\pi,\cos n\pi-1)$（$n=0,\pm1,\pm2,\ldots$）. 当 $n$ 为偶数时，在 $(x_n,y_n)$ 内，
>
> $$\Delta=f''_{xx}f''_{yy}-f''^2_{xy}=2>0,\quad f''_{xx}=-2<0$$
>
> 故 $f$ 在 $(2k\pi,0)$ 上取极大值（$k=0,\pm1,\pm2,\ldots$）. 当 $n$ 为奇数时，在 $(x_n,y_n)$ 内，
>
> $$\Delta=f''_{xx}f''_{yy}-f''^2_{xy}=-(1+e^{-2})e^{-2}<0$$
>
> 此处无极值. 总之，$f$ 有无穷多个极大值而无极小值.

另一个值得澄清的问题是：（以极小值为例）$f$ 在某点 $P_0$ 取极小值，是指 $f$ 在 $P_0$ 点的值比某邻域里其他点的值小. 假设在过点 $P_0$ 的每一直线上，$f$ 在 $P_0$ 取极小值，问是否能断言 $f$ 在 $P_0$ 处取极小值？回答是否定的. 如

> [!example] 例 6.3.10
> $f(x,y)=(y-x^2)(y-2x^2)$，当限定 $(x,y)$ 在过 $(0,0)$ 的直线上时，$f$ 在 $(0,0)$ 处为极小，但作为二元函数，$f$ 在 $(0,0)$ 处无极值.

读者用定义很容易证明.

关于自由极值的求法，下面还会讲到.


#### b. 条件极值与 Lagrange 乘数法

> [!abstract] 要点
> 若 $y=f(x_1,\dots,x_n)$ 及 $\varphi_i(x_1,\dots,x_n)$（$i=1,2,\dots,m$；$m<n$）有连续偏导数，且 Jacobi 矩阵 $\frac{\partial(\varphi_1,\dots,\varphi_m)}{\partial(x_1,\dots,x_n)}$ 的秩为 $r=m$（不妨设行列式 $\frac{\partial(\varphi_1,\dots,\varphi_m)}{\partial(x_1,\dots,x_m)}\neq 0$），那么函数 $y=f(x_1,\dots,x_n)$ 在条件 $\varphi_i(x_1,\dots,x_n)=0$（$i=1,2,\dots,m$）限制之下的极值点，可用 Lagrange 乘数法寻求。
>
> 具体做法是：首先作 Lagrange 函数：
>
> $$L(x_1,\dots,x_n)=f(x_1,\dots,x_n)+\sum_{i=1}^{m}\lambda_i\varphi_i(x_1,\dots,x_n),$$
>
> 然后解方程组
>
> $$L'_{x_1}=0,\quad L'_{x_2}=0,\quad\dots,\quad L'_{x_n}=0,\quad \varphi_i(x_1,\dots,x_n)=0\;(i=1,2,\dots,m),$$
>
> 求出稳定点，这里 $\lambda_i$ 为待定常数，有时不一定要求出。
>
> 最后，对稳定点进行判别，常用的方法是
>
> i）利用极值点的定义进行判别。
> ii）利用实际背景进行判别。
> iii）利用 Lagrange 函数的二阶微分进行判别。若在某稳定点 $P_0$ 处（$\lambda_i$ 用相应的值）$d^2L(P_0)>0$（$<0$），则 $f$ 在此点 $P_0$ 取条件极小（大）值，其中
>
> $$d^2L(P_0)=\left(\frac{\partial}{\partial x_1}dx_1+\frac{\partial}{\partial x_2}dx_2+\dots+\frac{\partial}{\partial x_n}dx_n\right)^2 L(P_0)=\sum_{k,j=1}^{n}L''_{x_kx_j}(P_0)\,dx_kdx_j,$$
>
> $dx_i$（$i=1,2,\dots,n$）应满足方程 $\sum_{i=1}^{n}\frac{\partial\varphi_j}{\partial x_i}(P_0)\,dx_i=0$（$j=1,2,\dots,m$）。

> [!example] ☆ 例 6.3.11
> 求函数 $f(x,y,z)=x^4+y^4+z^4$ 在条件 $xyz=1$ 下的极值。该极值是极大值还是极小值？为什么？（厦门大学）

> [!solution]- 解 I
> $$L=x^4+y^4+z^4+\lambda(xyz-1).$$
>
> $$\begin{cases}
> L'_x=4x^3+\lambda yz=0, & \text{(1)}\\[4pt]
> L'_y=4y^3+\lambda xz=0, & \text{(2)}\\[4pt]
> L'_z=4z^3+\lambda xy=0, & \text{(3)}\\[4pt]
> xyz=1. & \text{(4)}
> \end{cases}$$
>
> 解此方程组，得四解：
>
> $$(1,1,1),\quad(-1,-1,1),\quad(-1,1,-1),\quad(1,-1,-1).$$
>
> 在这些点上 $f(x,y,z)=3$。这些点均为极小值点。因为对称性，只要证明其中一个。例如，$P_1=(1,1,1)$。考虑第一卦限。因为在曲面 $xyz=1$ 上，$f(x,y,z)=x^4+y^4+\frac{1}{x^4y^4}$。在 $xOy$ 平面上，以 $x=\frac{1}{4}$，$x=2$，$y=\frac{1}{4}$，$y=2$ 四条平行于坐标轴的直线围一矩形 $ABCD$（如图 6.3.2），在矩形边界上 $f$ 的三项中至少有一项不小于 $16$，故
>
> $$f\!\left(x,y,\frac{1}{xy}\right)\geq 16>3=f(P_1).$$
>
> 可见 $f\!\left(x,y,\frac{1}{xy}\right)$ 的最小值只能在内部达到，但内部只有一个稳定点 $(1,1)$，故 $(1,1)$ 是 $f\!\left(x,y,\frac{1}{xy}\right)$ 的极小值点。换句话说，$f(x,y,z)$ 在条件 $xyz=1$ 下在点 $(1,1,1)$ 处取极小值。

> [!solution]- 解 II
> 利用上述方法求出稳定点后，可用二阶微分来判断。如点 $P_1=(1,1,1)$，由式（1）得 $\lambda=-4$。从而 $L$ 的二阶偏导数在点 $P_1$ 处的值为
>
> $$L''_{xx}=L''_{yy}=L''_{zz}=12,\quad L''_{xy}=L''_{yz}=L''_{zx}=\lambda=-4.$$
>
> 因此
>
> $$d^2L(P_1)=12(dx^2+dy^2+dz^2)-8(dx\,dy+dy\,dz+dz\,dx).$$
>
> 由 $xyz=1$ 知 $dz=-dx-dy$。代入上式可得
>
> $$\begin{aligned}
> d^2L(P_1)&=12(dx^2+dy^2+dz^2)-8\bigl[dx\,dy+(dy+dx)(-dx-dy)\bigr]\\
> &=12(dx^2+dy^2+dz^2)+4(dx^2+2dx\,dy+dy^2)+4dx^2+4dy^2\\
> &=12(dx^2+dy^2+dz^2)+4dz^2+4dx^2+4dy^2>0.
> \end{aligned}$$
>
> 故 $f$ 在 $P_1=(1,1,1)$ 处取极小值。其余各点利用对称性可得。

> [!exercise] 练习 1
> 应用 Lagrange 乘数法证明："平均值不等式"（见例 1.1.7），亦即：设 $a_k\geq 0$（$k=1,2,\dots,n$），则有
>
> $$\sqrt[n]{a_1\cdot a_2\cdot\ldots\cdot a_n}\leq\frac{a_1+a_2+\dots+a_n}{n},\tag{1}$$
>
> 其中等号成立的充分必要条件是 $a_1=a_2=\dots=a_n$。

> [!note] 注
> 我们知道：平面上的矩形，若：长$+$宽$=$定数，则当且仅当"长$=$宽"时，其面积最大。同样地，在 $\mathbb{R}^3$ 上的长方体，若：长$+$宽$+$高$=$定数，则当且仅当"长$=$宽$=$高"时，其体积最大。推广到 $\mathbb{R}^n$ 上的长方体的体积，就是上述（$n$ 元）平均值不等式（1）。

> [!proof]- 证
> 在 $n$ 维空间 $\mathbb{R}^n$ 里，给定了 $n$ 个数 $a_k\geq 0$（$k=1,2,\dots,n$），记
>
> $$a=a_1+a_2+\dots+a_n\tag{2}$$
>
> （称为约束条件），则边长分别为 $a_k\geq 0$（$k=1,2,\dots,n$）的长方体的体积：
>
> $$V=f(a_1,a_2,\dots,a_n)=a_1\cdot a_2\cdot\ldots\cdot a_n\tag{3}$$
>
> （称为目标函数）。那么，当且仅当 $a_1=a_2=\dots=a_n$ 时，其 $V$ 值达到最大：
>
> $$V_{\max}=\left(\frac{a}{n}\right)^n=\left(\frac{a_1+a_2+\dots+a_n}{n}\right)^n.$$
>
> 从而在一般情况下，应为
>
> $$0\leq a_1\cdot a_2\cdot\ldots\cdot a_n\leq\left(\frac{\sum_{k=1}^{n}a_k}{n}\right)^n,$$
>
> 亦即有不等式（1）成立。
>
> （现应用 Lagrange 乘数法证明。）设
>
> $$L=a_1\cdot a_2\cdot\ldots\cdot a_n+\lambda\!\left(\sum_{k=1}^{n}a_k-a\right)$$
>
> （称为 Lagrange 函数）。令
>
> $$L'_{a_k}=\prod_{i\neq k}a_i+\lambda=0\quad(k=1,2,\dots,n),\tag{4}$$
>
> 此式共计 $n$ 个方程，第 $k$ 个方程乘 $a_k$（$k=1,2,\dots,n$）；然后累加起来（注意到式（2）），得 $n\prod_{i=1}^{n}a_i+\lambda a=0$。因此有 $\lambda=-\frac{n}{a}\prod_{i=1}^{n}a_i$。代回式（4），则得
>
> $$\prod_{i\neq k}a_i+\left(-\frac{n}{a}\prod_{i=1}^{n}a_i\right)=0,$$
>
> 亦即
>
> $$a_k=\frac{a}{n}=\frac{\sum_{k=1}^{n}a_k}{n}\quad(k=1,2,\dots,n).$$
>
> 根据二、三维的实际经验，（也可理论证明）最大值存在，现在只有一个可疑点，故当且仅当 $a_k$（$k=1,2,\dots,n$）彼此相等时，体积 $V$ 才达到最大。一般情况如式（1）所示。

> [!exercise] 练习 2
> 设 $u_1,u_2,\dots,u_n\geq 0$，若 $u_1u_2\dots u_n=1$，则
>
> $$u_1+u_2+\dots+u_n\geq n,\tag{1}$$
>
> 式（1）中的等号当且仅当 $u_1,u_2,\dots,u_n$ 彼此相等时才成立。试证：该命题与平均值不等式等价。


#### c. 求函数在闭区域上的最大最小值

> [!note] 要点
> 求函数在闭区域上的最大最小值，一般方法是：先求函数在区域内部的极大极小值，以及边界上的（条件）极大极小值，然后进行比较. 或者，直接将全部可疑点的值进行比较，最大者为最大值，最小者为最小值.

> [!example] 例 6.3.12
> 试求 $f(x,y)=ax^2+2bxy+cy^2$ 在 $x^2+y^2 \leqslant 1$ 上的最大最小值.（设 $b^2-ac>0$，$a,b,c>0$）.

> [!solution]- 解
> 1° 先求函数在区域内部 $x^2+y^2<1$ 的可疑点，令 $f'_x=f'_y=0$，得
>
> $$
> \begin{cases}
> ax+by=0,\\
> bx+cy=0.
> \end{cases}
> $$
>
> 因为 $\begin{vmatrix} a & b \\ b & c \end{vmatrix}=ac-b^2 \neq 0$，故只有唯一解 $(0,0)$，$f(0,0)=0$.
>
> 2°（再求边界 $x^2+y^2=1$ 上的可疑点.）设
>
> $$
> L=ax^2+2bxy+cy^2-\lambda(x^2+y^2-1).
> $$
>
> 令 $L'_x=L'_y=0$，得方程
>
> $$
> \begin{cases}
> (a-\lambda)x+by=0,\quad \text{(1)}\\
> bx+(c-\lambda)y=0.\quad \text{(2)}
> \end{cases}
> $$
>
> 因在 $x^2+y^2=1$ 上 $(x,y)\neq(0,0)$，要此方程有非零解，必须
>
> $$
> \begin{vmatrix} a-\lambda & b \\ b & c-\lambda \end{vmatrix}=0,
> $$
>
> 得
>
> $$
> \lambda_{1,2} = \frac{a+c \pm \sqrt{(a-c)^2+4b^2}}{2}.
> $$
>
> 将式（1）乘 $x$，式（2）乘 $y$，相加得（注意 $x^2+y^2=1$）
>
> $$
> f(x,y)=ax^2+2bxy+cy^2=\lambda_{1,2}.
> $$
>
> 3° 将上面求出的可疑值进行比较，得函数在 $x^2+y^2 \leqslant 1$ 上的最大、最小值为
>
> $$
> \max f(x)=\max\{0,\lambda_1,\lambda_2\} = \frac{a+c+\sqrt{(a-c)^2+4b^2}}{2},
> $$
>
> $$
> \min f(x)=\min\{0,\lambda_1,\lambda_2\} = \frac{a+c-\sqrt{(a-c)^2+4b^2}}{2}.
> $$

> [!example] 例 6.3.13
> 确定 $f(x,y)=4x+xy^2+y^2$ 在圆域 $x^2+y^2 \leqslant 1$ 上的最大值和最小值.（四川大学）

> [!solution]- 解
> 因 $f'_x(x,y)=4+y^2>0$，故在圆内无极值. 最大、最小值均在圆周 $x^2+y^2=1$ 上达到. 这时
>
> $$
> f(x,y)=4x+xy^2+y^2=1+5x-x^2-x^3 \equiv \varphi(x).
> $$
>
> 令
>
> $$
> \varphi'_x = 5 - 2x - 3x^2 = (5 + 3x)(1 - x) = 0,
> $$
>
> 根据 $\varphi'$ 的符号，可知在 $[-1,1]$ 上，$\varphi(x)$ 在 $x=-1$ 处达最小值，$x=1$ 处达到最大值.
>
> 从而 $\max f = f(1,0) = 4$，$\min f = f(-1,0) = -4$.


#### d．用极值证明不等式

##### i）用自由极值证明不等式

> [!note] 要点
> 若求得 $f$ 在区域 $D$ 上的最大、最小值分别等于 $B$ 和 $A$，那么我们实际上获得了不等式 $A \le f(P) \le B$（$P \in D$）。
>
> 反之，要证明关于函数 $f$, $g$ 的不等式 $f(P) \le g(P)$（$P \in D$），只需证明函数 $\psi(P) = f(P) - g(P)$ 在 $D$ 上的最大值（或上确界）$B \le 0$，或 $\varphi(P) \equiv g(P) - f(P)$ 的最小值（或下确界）$A \ge 0$。

> [!example] 例6.3.14
> 证明：$t \ge 1$，$s \ge 0$ 时，下面的不等式成立：$ts \le t \ln t - t + e^s$。（武汉大学赛题）

> [!proof]- 证
> 如图6.3.3，我们只要证明函数
> $$
> \varphi(s, t) = t \ln t - t + e^s - ts
> $$
> 在 $D = \{(s, t) \mid s \ge 0,\ t \ge 1\}$ 上有最小值 $0$。固定 $t \ge 1$，令 $\varphi'_s(s, t) = -t + e^s = 0$，得 $s = \ln t$（即 $t = e^s$），且
>
> $\varphi'_s(s, t) < 0$（当 $0 \le s < \ln t$ 时），
> $\varphi'_s(s, t) > 0$（当 $\ln t < s$ 时）。
>
> 可见 $\varphi(s, t)$ 的最小值只能在曲线 $t = e^s$ 上达到。但 $\varphi(s, e^s) = e^s s - e^s + e^s - e^s s \equiv 0$，故在 $D$ 上 $\varphi(s, t) \ge 0$，证毕。

> [!example] 例6.3.15
> 求证：$f(x, y) = yx^y(1 - x) < e^{-1}$，$0 < x < 1$，$0 < y < +\infty$。（吉林大学）
>
> **方法** 证明 $f(x, y)$ 在 $0 < x < 1$，$0 < y < +\infty$ 内最大值小于 $e^{-1}$。

> [!proof]- 证
> $f$ 在区域 $0 < x < 1$，$0 < y < +\infty$ 的边界上恒为 $0$，而区域内部 $f(x, y) > 0$，故 $f$ 的最大值只能在内部达到。
>
> $$
> \begin{aligned}
> f'_x(x, y) &= y^2 x^{y-1}(1 - x) - yx^y = yx^{y-1}(y - xy - x),\\
> f'_y(x, y) &= x^y(1 - x) + yx^y(1 - x)\ln x = x^y(1 - x)(1 + y \ln x).
> \end{aligned}
> $$
>
> 令 $f'_x = f'_y = 0$，在 $0 < x < 1$，$0 < y < +\infty$ 内求稳定点，得 $y - xy - x = 0$ 及 $1 + y \ln x = 0$，即
>
> $$
> \begin{cases}
> y(1 - x) = x,\\
> x^y = e^{-1}.
> \end{cases}
> \tag{1}
> $$
>
> 这表明 $f(x, y)$ 在 $0 < x < 1$，$0 < y < +\infty$ 内的极大值点应满足方程（1）。然而在（1）所确定的点上，$f(x, y) = yx^y(1 - x) = e^{-1}x < e^{-1}$。证毕。

##### ii）利用条件极值证明不等式

> [!note] 要点
> 若求得 $u = f(P)$ 在条件 $\varphi(P) = a$ 之下的最大值为 $B(a)$，那么我们就获得了不等式 $f(P) \le B(\varphi(P))$。

> [!example] ☆例6.3.16
> 求 $x > 0$，$y > 0$，$z > 0$ 时函数 $f(x, y, z) = \ln x + 2 \ln y + 3 \ln z$ 在球面 $x^2 + y^2 + z^2 = 6r^2$ 上的极大值，证明：当 $a$, $b$, $c$ 为正实数时，
> $$
> ab^2 c^3 \le 108\left(\frac{a + b + c}{6}\right)^6.
> \tag{1}
> $$
> （清华大学）

> [!solution]- 解
> 设 $L = \ln x + 2 \ln y + 3 \ln z + \lambda(x^2 + y^2 + z^2 - 6r^2)$。
> 令 $L'_x = L'_y = L'_z = 0$，解得 $x = r$，$y = \sqrt{2}r$，$z = \sqrt{3}r$。
>
> 因为 $f$ 在球面 $x^2 + y^2 + z^2 = 6r^2$ 位于第一卦限部分连续，在这部分的边界线上，$x$，$y$，$z$ 分别为 $0$，$f(x, y, z) = \ln x + 2\ln y + 3\ln z$ 为负无穷大，故 $f$ 的最大值只能在这部分内部达到。而 $(r, \sqrt{2}r, \sqrt{3}r)$ 是唯一可疑点，所以 $f$ 的最大值为 $f(r, \sqrt{2}r, \sqrt{3}r) = \ln(6\sqrt{3}r^6)$。于是
>
> $$
> f(x, y, z) = \ln xy^2 z^3 \le \ln(6\sqrt{3}r^6) = \ln\left[6\sqrt{3}\left(\frac{x^2 + y^2 + z^2}{6}\right)^3\right],
> $$
>
> 故
> $$
> xy^2 z^3 \le 6\sqrt{3}r^6 = 6\sqrt{3}\left(\frac{x^2 + y^2 + z^2}{6}\right)^3.
> $$
>
> 两边同时平方，并将 $a = x^2$，$b = y^2$，$c = z^2$ 代入，便得欲证的不等式（1）。

> [!remark] 注1
> 用这种方法，可以证明一系列著名的不等式。例如：
>
> 1）在条件 $\sum_{i=1}^n a_i x_i = A$ 之下，求函数 $f(x_1, x_2, \dots, x_n) = \left(\sum_{i=1}^n a_i^k\right)^{1/k}\left(\sum_{i=1}^n x_i^{k'}\right)^{1/k'}$ 的最小值，可以证明 Hölder 不等式：
>
> $$
> \sum_{i=1}^n a_i x_i \le \left(\sum_{i=1}^n a_i^k\right)^{1/k}\left(\sum_{i=1}^n x_i^{k'}\right)^{1/k'}
> $$
>
> （$a_i \ge 0$，$x_i \ge 0$，$i = 1, 2, \dots, n$；$k > 1$，$1/k + 1/k' = 1$）。
>
> 2）在条件 $\sum_{j=1}^n x_{ij}^2 = s_i$（$i = 1, 2, \dots, n$）之下，求函数
>
> $$
> f(x_1, x_2, \dots, x_n) =
> \begin{vmatrix}
> x_{11} & x_{12} & \cdots & x_{1n}\\
> x_{21} & x_{22} & \cdots & x_{2n}\\
> \vdots & \vdots & \ddots & \vdots\\
> x_{n1} & x_{n2} & \cdots & x_{nn}
> \end{vmatrix}
> $$
>
> 的最大值（$x_i = (x_{i1}, x_{i2}, \dots, x_{in})$，$i = 1, 2, \dots, n$），可证明 Hadamard 不等式
>
> $$
> \begin{vmatrix}
> x_{11} & x_{12} & \cdots & x_{1n}\\
> x_{21} & x_{22} & \cdots & x_{2n}\\
> \vdots & \vdots & \ddots & \vdots\\
> x_{n1} & x_{n2} & \cdots & x_{nn}
> \end{vmatrix}^2
> \le \prod_{i=1}^n s_i = \prod_{i=1}^n \sum_{j=1}^n x_{ij}^2,
> $$
>
> 如此等等。

> [!remark] 注2
> 不等式（1）还可用“6正数的均值不等式”直接推得：
>
> $$
> ab^2 c^3 = 108\left(a \cdot \frac{b}{2} \cdot \frac{b}{2} \cdot \frac{c}{3} \cdot \frac{c}{3} \cdot \frac{c}{3}\right) \le 108\left(\frac{a + b + c}{6}\right)^6,
> $$
>
> 等号当且仅当6个正数彼此相等时成立。亦即当且仅当 $6a = 3b = 2c$ 时，等号才成立：
> $$
> ab^2 c^3 = 108\left(\frac{a + b + c}{6}\right)^6.
> $$

> [!remark] 注3
> （将此不等式推广到 $n$ 元的情况）对任意 $n$ 个正数 $a_k > 0$（$k = 1, 2, \dots, n$），有如下不等式成立：
>
> $$
> a_1 a_2^2 a_3^3 \cdots a_n^n \le 2^2 3^3 \cdots n^n\left[\frac{a_1 + a_2 + a_3 + \cdots + a_n}{n(n + 1)/2}\right]^{n(n+1)/2},
> $$
>
> 且等号成立的充分必要条件是：$a_1 = a_2/2 = a_3/3 = \cdots = a_n/n$。

> [!exercise] 练习
> 设 $S = \{(x, y, z) \in \mathbb{R}^3 \mid xy^2 z^3 = 1\}$。
>
> 1）证明 $S$ 在 $\mathbb{R}^3$ 中确定一张隐式的曲面，并求出一个在点 $(1, 1, 1)$ 附近的参数方程；
> 2）$S$ 是否连通，是否紧致？
> 3）点 $q \in S$，$\|q\|$ 表示 $q$ 到原点的距离，点 $p$ 满足 $\|p\| = \inf_{q \in S} \|q\|$，求 $p$ 组成的集合。（中国科学技术大学）

> [!hint]- 提示
> $xy^2 z^3 = 1 \Rightarrow x$ 和 $z$ 必须同号 $\Rightarrow S$ 只在1，4，6，7卦限，第2，3，5，8卦限无 $S$ 的图像。
> $xy^2 z^3 = 1 \Rightarrow x$，$y$，$z \ne 0 \Rightarrow$ 曲面 $S$ 与坐标面无交点 $\Rightarrow S$ 被坐标面隔成4叶（不连通）。
> $xy^2 z^3 = 1 \Rightarrow$ 不论 $y$ 变号，或者 $x$，$y$，$z$ 同时变号，$xy^2 z^3 = 1$ 都不会变 $\Rightarrow S$ 关于（坐标）平面 $xOz$（镜面）对称，而且关于原点，有点对称 $\Rightarrow$ 只需研究第一卦限里的情况，其余由对称性可得。
>
> $S$ 第1卦限里的图像如下：$\forall y_0 \in \mathbb{R}$，用平面 $y = y_0$ 截 $S$，交线是 $x = 1/(y_0^2 z^3)$，截线类似于双曲线，以坐标轴为渐近线。
>
> 同理，用平面 $z = z_0$ 或 $x = x_0$ 截 $S$，有类似结果。
> 可见，曲面 $S$ 分别以三坐标面为渐近切面。形象地说：$S$ 像4口大锅，位于1，4，6，7卦限，锅底朝原点，锅与三坐标面越来越贴近。
>
> 用求极值的方法，可求出离原点最近的4个顶点 $p_k$：$\|p_k\| = \inf_{q \in S} \|q\|$（$k = 1, 2, 3, 4$）。

> [!solution]- 解
> **1）** $S$ 的参数方程可写为 $x = 1/(s^2 t^3)$，$y = s$，$z = t$（$s \ne 0$，$t \ne 0$）。
>
> **2）** 图形不连通，不紧致。例如点列 $\{M_n = (n, n, 1/n)\}$（$n = 1, 2, \dots$）就无聚点。
>
> **3）解法Ⅰ** 设
> $$
> L = x^2 + y^2 + z^2 - 2\lambda(xy^2 z^3 - 1).
> $$
> 令 $x \cdot L'_x = 0$，（注意 $xy^2 z^3 = 1$）得 $x^2 = \lambda$。类似可得：$y^2 = 2\lambda$，$z^2 = 3\lambda$。代入 $xy^2 z^3 = 1$，得 $6\sqrt{3}\,\lambda^{1/2 + 1 + 3/2} = 1$，
> $$
> \lambda = 1/\sqrt[6]{108}.
> $$
>
> $$
> (x, y, z) = (\sqrt{\lambda}, \sqrt{2\lambda}, \sqrt{3\lambda}) = \left(1/\sqrt[12]{108},\ \sqrt{2}/\sqrt[12]{108},\ \sqrt{3}/\sqrt[12]{108}\right).
> $$
>
> 利用对称性，全部4点是：$\left(1/\sqrt[12]{108},\ \pm\sqrt{2}/\sqrt[12]{108},\ \sqrt{3}/\sqrt[12]{108}\right)$，$\left(-1/\sqrt[12]{108},\ \pm\sqrt{2}/\sqrt[12]{108},\ -\sqrt{3}/\sqrt[12]{108}\right)$。
>
> **解法Ⅱ** 例6.3.16中的不等式，当且仅当 $6a = 3b = 2c$ 时，等号才成立，应用到这里：由 $1 = xy^2 z^3$ 得
>
> $$
> 1 = x^2 y^4 z^6 = 108\left(x^2 \cdot \frac{y^2}{2} \cdot \frac{y^2}{2} \cdot \frac{z^2}{3} \cdot \frac{z^2}{3} \cdot \frac{z^2}{3}\right) \le 108\left(\frac{x^2 + y^2 + z^2}{6}\right)^6.
> \tag{1}
> $$
>
> 当“$\le$”变为“$=$”号时，右端的值取最小，等于 $1$。因此得
>
> $$
> \inf_{(x,y,z) \in S} \sqrt{x^2 + y^2 + z^2} = \sqrt[12]{6^6/108} = \sqrt[12]{2 \times 6^3} = \sqrt[12]{432}.
> $$
>
> 不等式（1）变成等式的充分必要条件是：$x^2 = y^2/2 = z^2/3$。
>
> 因 $xy^2 z^3 = 1$，故 $x^2 y^4 z^6 = 1$，即 $x^2(2x^2)^2(3x^2)^3 = 1$，解得 $x = 1/\sqrt[12]{108}$。从而 $y = \pm\sqrt{2}x$，$z = \sqrt{3}x$。所以，$S$ 距离原点最近之四点是：$\left(1/\sqrt[12]{108},\ \pm\sqrt{2}/\sqrt[12]{108},\ \sqrt{3}/\sqrt[12]{108}\right)$，$\left(-1/\sqrt[12]{108},\ \pm\sqrt{2}/\sqrt[12]{108},\ -\sqrt{3}/\sqrt[12]{108}\right)$。（不难检验：它们满足 $S$ 的方程，且至原点的距离为 $\sqrt[12]{432} = \inf_{(x,y,z) \in S} \sqrt{x^2 + y^2 + z^2}$）


#### e．极值应用问题

> [!note] 要点
> 求解极值应用题，关键在于选取适当的变量，使之能方便地表示目标函数以及约束条件.

> [!example] ☆例6.3.17
> 将长度为 $l$ 的铁丝分为三段，用此三段分别作成圆、正方形、等边三角形，问采用何种分法，才能使这三个图形的面积之和最小．（可以利用以下结论：二元二次函数 $F(x,y)=ax^2+bxy+cy^2+dx+ey+f$ 的极大（小）值，必为其最大（小）值.）（南开大学）
>
> > [!solution]- 解
> > 1° 为了便于表达周长之和与总面积，我们不妨取 $x$，$y$，$z$ 分别表示圆之半径、正方形的边长、等边三角形的边长. 于是总面积
> >
> > $$S = \pi x^2 + y^2 + \frac{\sqrt{3}}{4}z^2 \quad \text{（目标函数）} \tag{1}$$
> >
> > 应满足方程
> >
> > $$2\pi x + 4y + 3z = l \quad \text{（约束条件）}. \tag{2}$$
> >
> > Lagrange函数 $L = \pi x^2 + y^2 + \frac{\sqrt{3}}{4}z^2 - \lambda(2\pi x + 4y + 3z - l)$.
> >
> > 令
> > $$\begin{cases}
> > L'_x = 2\pi x - 2\pi\lambda = 0,\\
> > L'_y = 2y - 4\lambda = 0,\\
> > L'_z = \frac{\sqrt{3}}{2}z - 3\lambda = 0,
> > \end{cases}$$
> >
> > 得
> > $$x = \lambda,\quad y = 2\lambda,\quad z = \frac{6}{\sqrt{3}}\lambda.$$
> >
> > 这时铁丝三段长的比为　$2\pi x : 4y : 3z = 2\pi\lambda : 8\lambda : 6\sqrt{3}\lambda = \pi : 4 : 3\sqrt{3}$.
> >
> > 2°（判断）将（2）代入（1），得
> >
> > $$S = \pi x^2 + y^2 + \frac{\sqrt{3}}{36}(l - 2\pi x - 4y)^2$$
> >
> > $$= \pi x^2 + y^2 + \frac{\sqrt{3}}{36}(4\pi^2 x^2 + 16y^2 + 16\pi xy - 4\pi lx - 8ly + l^2).$$
> >
> > 由此可知
> >
> > $$\Delta = S''_{xx} S''_{yy} - S_{xy}''^2 = 4\pi\left[1 + \frac{\sqrt{3}}{9}(\pi + 4)\right] > 0,\quad S''_{xx} > 0.$$
> >
> > 从而按上述比例分割铁丝，所围的面积极小，也是最小.

> [!example] 例6.3.18
> 设 $\triangle ABC$ 为正三角形，边长为 $a$．$P$ 为 $\triangle ABC$ 内任意一点，由 $P$ 向三边引垂线（如图6.3.4），其与三边的交点分别为 $D$，$E$，$F$．试求 $\triangle DEF$ 的面积最大值．（武汉大学赛题）
>
> > [!solution]- 解
> > 记点 $P$ 至三边的距离分别为 $x$，$y$，$z$．注意到
> > $$\angle DPF = \angle DPE = \angle EPF = \frac{2\pi}{3},$$
> >
> > 所以 $\triangle DEF$ 的面积
> >
> > $$S_{\triangle DEF} = S_{\triangle DPF} + S_{\triangle DPE} + S_{\triangle EPF} = \frac{1}{2}\sin\frac{\pi}{3}(xz + xy + yz)$$
> > $$= \frac{\sqrt{3}}{4}(xz + xy + yz) \quad \text{（目标函数）} \tag{1}$$
> >
> > 由 $S_{\triangle PBC} + S_{\triangle CPA} + S_{\triangle APB} = S_{\triangle ABC}$ 得约束方程为
> >
> > $$\frac{1}{2}ax + \frac{1}{2}ay + \frac{1}{2}az = \frac{1}{2}a\cdot\frac{\sqrt{3}}{2}a,$$
> >
> > 即
> > $$x + y + z = \frac{\sqrt{3}}{2}a \quad \text{（约束条件）}. \tag{2}$$
> >
> > 由此可得 $x = y = z = \frac{\sqrt{3}}{6}a$．$\max S_{\triangle DEF} = \frac{\sqrt{3}}{16}a^2$．（计算和判断过程从略. 本题求解的方法很多.）

> [!example] 例6.3.19
> 在平面上给一边长分别为 $a$，$b$，$c$ 的三角形，在它上面作无数个定高 $h$ 的锥体，求侧面积最小的锥体．（大连理工大学）
>
> > [!solution]- 解
> > 锥顶 $H$ 在底面的投影记为 $O$，从 $O$ 到三边 $BC$，$CA$，$AB$ 的距离分别记为 $x$，$y$，$z$（如图6.3.5），则锥的侧面积（目标函数）为
> >
> > $$S = \frac{1}{2}a\sqrt{h^2 + x^2} + \frac{1}{2}b\sqrt{h^2 + y^2} + \frac{1}{2}c\sqrt{h^2 + z^2}. \tag{1}$$
> >
> > 即 $ax + by + cz = 2S_{\triangle ABC} \triangleq m$，其中 $S_{\triangle ABC} = \sqrt{p(p - a)(p - b)(p - c)}$，$p = \frac{a + b + c}{2}$.
> >
> > 记
> > $$L = a\sqrt{h^2 + x^2} + b\sqrt{h^2 + y^2} + c\sqrt{h^2 + z^2} - \lambda(ax + by + cz - m).$$
> >
> > 令 $L'_x = L'_y = L'_z = 0$，得
> > $$\lambda = \frac{x}{\sqrt{h^2 + x^2}} = \frac{y}{\sqrt{h^2 + y^2}} = \frac{z}{\sqrt{h^2 + z^2}}.$$
> >
> > 从实际背景看，问题有最小值，无最大值。现在只有一个可疑点，故它对应最小值。式（3）表明最小值发生在三侧面与底面成等角的时候。因此，当 $x = y = z$，即 $O$ 与三角形内心重合时，侧面积最小。此时
> > $$S = \frac{1}{2}\sqrt{h^2 + r^2}(a + b + c).$$
> >
> > 其中（内接圆半径）
> > $$r = \frac{2\sqrt{p(p - a)(p - b)(p - c)}}{a + b + c},\quad p = \frac{a + b + c}{2}.$$
>
> 下面这道命题在中学里已学会用几何方法进行推断，现在我们可用分析方法进行证明了。例6.3.20 还说明有时可疑点可不必求出。

> [!example] ☆例6.3.20
> 试由费马原理「光线总是按费时最短的路径传播」来证明镜面反射时，入射角等于反射角。
>
> > [!hint]- 提示
> > 可令
> > $$L = \sqrt{x^2 + h_1^2} + \sqrt{y^2 + h_2^2} - \lambda(x + y - a)$$
> > （意义见图6.3.6）. 由 $L'_x = L'_y = 0$ 得
> > $$\frac{x}{\sqrt{x^2 + h_1^2}} = \frac{y}{\sqrt{y^2 + h_2^2}}.$$
> > 这表明
> > $$\sin\theta_1 = \sin\theta_2,\quad \theta_1 = \theta_2.$$
>
> > [!solution]- 解
> > 光程
> > $$s(x) = AP + PB = \sqrt{x^2 + h_1^2} + \sqrt{(a - x)^2 + h_2^2}.$$
> >
> > 令
> > $$s'_x = \frac{x}{\sqrt{x^2 + h_1^2}} - \frac{a - x}{\sqrt{(a - x)^2 + h_2^2}} = 0,$$
> >
> > 得
> > $$\frac{x}{\sqrt{x^2 + h_1^2}} = \frac{a - x}{\sqrt{(a - x)^2 + h_2^2}},\quad \text{即}\ \sin\theta_1 = \sin\theta_2.$$

> [!example] \*例6.3.21
> 设
> $$ax^2 + by^2 + cz^2 + 2exy + 2fyz + 2gzx = 1$$
> 为一椭球面，求证其三个半轴之长恰为矩阵
>
> $$\begin{pmatrix}a & e & g\\ e & b & f\\ g & f & c\end{pmatrix}$$
>
> 的三个特征值的平方根的倒数.（北京航空航天大学）
>
> > [!note]- 方法
> > 求 $u = x^2 + y^2 + z^2$ 在条件（1）下的稳定点，以求出 $\rho = \sqrt{x^2 + y^2 + z^2}$ 的极值. 技巧是：回避求出稳定点，而从稳定点满足的方程中直接解出 $\rho = \sqrt{x^2 + y^2 + z^2}$.
>
> > [!solution]- 解
> > 因为 $\rho = \sqrt{x^2 + y^2 + z^2}$ 与 $u = x^2 + y^2 + z^2$ 有相同的极值点，记
> > $$L = x^2 + y^2 + z^2 - \frac{1}{\lambda}(ax^2 + by^2 + cz^2 + 2exy + 2fyz + 2gzx - 1).$$
> >
> > 令 $L'_x = L'_y = L'_z = 0$，得方程组
> > $$\begin{aligned}
> > (a - \lambda)x + ey + gz &= 0,\\
> > ex + (b - \lambda)y + fz &= 0,\\
> > gx + fy + (c - \lambda)z &= 0.
> > \end{aligned}$$
> >
> > 此方程组有非零解必须系数行列式为零，故
> > $$\begin{vmatrix}
> > a - \lambda & e & g\\
> > e & b - \lambda & f\\
> > g & f & c - \lambda
> > \end{vmatrix} = 0.$$
> >
> > 这是 $\lambda$ 的三次方程式. 因为椭球面是有心的非退化二次曲面，故
> > $$\begin{vmatrix}a & e & g\\ e & b & f\\ g & f & c\end{vmatrix} \neq 0.$$
> >
> > 因而方程（6）有三个实根 $\lambda_1$，$\lambda_2$，$\lambda_3$^[根据线性代数的知识，它们是矩阵（2）的特征值.] 将 $\lambda_i$ 代回方程（3）、（4）、（5），对方程（3）、（4）、（5）分别乘 $x$，$y$，$z$ 再相加，注意到 $(x,y,z)$ 满足（1），则
> > $$\lambda_i(x^2 + y^2 + z^2) = ax^2 + by^2 + cz^2 + 2exy + 2fyz + 2gzx = 1.$$
> >
> > 从而
> > $$x^2 + y^2 + z^2 = \frac{1}{\lambda_i},$$
> >
> > $$\rho = \sqrt{x^2 + y^2 + z^2} = \frac{1}{\sqrt{\lambda_i}} \quad (i = 1,2,3).$$
> >
> > 这就证明了半轴之长等于矩阵（2）的特征值的平方根的倒数.

> [!exercise] \* 练习
> 设 $A$ 为三阶实对称方阵，定义函数：
>
> $$h(x,y,z) = (x,y,z)A\begin{pmatrix}x\\y\\z\end{pmatrix},$$
>
> 求证：$h(x,y,z)$ 在条件 $x^2 + y^2 + z^2 = 1$ 下的最大值是矩阵 $A$ 的最大特征值.（南开大学）
>
> > [!proof]- 证
> > 1° 记 $A = (a_{ij}) = \begin{pmatrix}a_{11} & a_{12} & a_{13}\\ a_{21} & a_{22} & a_{23}\\ a_{31} & a_{32} & a_{33}\end{pmatrix}$，则
> >
> > $$h(x,y,z) = a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{13}xz + 2a_{23}yz\ \text{（是连续函数）},$$
> >
> > $h(x,y,z)$ 在有界闭集 $D = \{(x,y,z) \mid x^2 + y^2 + z^2 = 1\}$ 上必有最大值.
> >
> > 2°（用 Lagrange 乘数法，求函数 $h$ 的条件极值.）设
> > $$L = a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{13}xz + 2a_{23}yz - \lambda(x^2 + y^2 + z^2 - 1).$$
> >
> > 求 $L$ 对 $x$，$y$，$z$ 的偏导数，并令之为零，得
> > $$\begin{aligned}
> > (a_{11} - \lambda)x + a_{12}y + a_{13}z &= 0,\\
> > a_{12}x + (a_{22} - \lambda)y + a_{23}z &= 0,\\
> > a_{13}x + a_{23}y + (a_{33} - \lambda)z &= 0.
> > \end{aligned}$$
> >
> > 式（1）、（2）、（3）分别乘 $x$，$y$，$z$，再将三式相加，可得（注意 $x^2 + y^2 + z^2 = 1$，且 $A$ 为对称方阵）
> > $$\lambda = a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{13}xz + 2a_{23}yz = h(x,y,z).$$
> >
> > 另一方面，既然 $h$ 在椭球面 $D$ 上有最大值点，其坐标 $x$，$y$，$z$ 就不会同时为零，那么齐次方程组（1）、（2）、（3）应有非零解，故（方程组的）系数行列式应为零，即
> > $$\begin{vmatrix}
> > a_{11} - \lambda & a_{12} & a_{13}\\
> > a_{21} & a_{22} - \lambda & a_{23}\\
> > a_{31} & a_{32} & a_{33} - \lambda
> > \end{vmatrix} = 0.$$
> >
> > 此式左端是矩阵 $A$ 的特征多项式，而 $\lambda$ 是矩阵 $A$ 的特征值. 式（4）表明极值点上 $h = \lambda$，所以
> > $$\max h(x,y,z) = \max \lambda_k\ \text{（是矩阵 $A$ 的最大特征值）}.$$
> >
> > 证毕.

> [!example] \*例6.3.22
> 试求平面 $\alpha x + \beta y + \gamma z = 0$ 与圆柱面 $\frac{x^2}{A^2} + \frac{y^2}{B^2} = 1$（$A,B > 0$）相交所成椭圆的面积.
>
> > [!solution]- 解 I
> > （用极值方法.）要计算椭圆的面积 $S = \pi ab$，只需算出椭圆的半轴 $a$ 与 $b$.
> >
> > 现在来说，也就是要求 $\rho = \sqrt{x^2 + y^2 + z^2}$ 在条件 $\alpha x + \beta y + \gamma z = 0$ 及 $\frac{x^2}{A^2} + \frac{y^2}{B^2} = 1$ 之下的极值. 以 $\rho^2$ 替换 $\rho$，取
> > $$L = x^2 + y^2 + z^2 + 2\lambda(\alpha x + \beta y + \gamma z) - \mu\!\left(\frac{x^2}{A^2} + \frac{y^2}{B^2} - 1\right).$$
> >
> > 令 $L'_x = L'_y = L'_z = 0$，得
> > $$\begin{aligned}
> > x\!\left(1 - \frac{\mu}{A^2}\right) + \lambda\alpha &= 0,\\
> > y\!\left(1 - \frac{\mu}{B^2}\right) + \lambda\beta &= 0,\\
> > z + \lambda\gamma &= 0,\\
> > \alpha x + \beta y + \gamma z &= 0,\\
> > \frac{x^2}{A^2} + \frac{y^2}{B^2} &= 1.
> > \end{aligned}$$
> >
> > （1）、（2）、（3）中消去 $\lambda$ 得 $\mu$ 的方程：
> > $$\mu^2 - \left(\frac{\beta^2}{\gamma^2 B^2} + \frac{\alpha^2}{\gamma^2 A^2} + B^2 + A^2\right)\mu + \frac{A^2 B^2}{\gamma^2}(\alpha^2 + \beta^2 + \gamma^2) = 0.$$
> >
> > （1）、（2）、（3）分别乘 $x$，$y$，$z$，相加得
> > $$x^2 + y^2 + z^2 = \mu\!\left(\frac{x^2}{A^2} + \frac{y^2}{B^2}\right) - \lambda(\alpha x + \beta y + \gamma z) = \mu.$$
> >
> > $a$，$b$ 为所讨论椭圆的两个半轴，则它们应是 $\rho$ 的极值. 而 $\rho$ 与 $\rho^2$ 的极值点相同，（7）表明 $\rho^2$ 的极值等于 $\mu$. $\mu$ 满足方程（6），设（6）的两根为 $\mu_1$，$\mu_2$，则 $\mu_1$，$\mu_2$ 应分别为 $a^2$，$b^2$，因而 $S = \pi ab = \pi\sqrt{\mu_1\mu_2}$. 根据 Viete 定理，
> > $$\mu_1\mu_2 = \frac{A^2 B^2}{\gamma^2}(\alpha^2 + \beta^2 + \gamma^2).$$
> >
> > 所以
> > $$S = \frac{\pi AB}{|\gamma|}\sqrt{\alpha^2 + \beta^2 + \gamma^2}.$$
>
> > [!solution]- 解 II
> > （利用面积的投影.）所讨论椭圆在 $xOy$ 平面上的投影为椭圆
> > $$\frac{x^2}{A^2} + \frac{y^2}{B^2} = 1,$$
> > 其面积为 $\pi AB$. 所讨论椭圆位于平面 $\alpha x + \beta y + \gamma z = 0$ 上. 该法线与 $z$ 轴夹角的余弦为
> > $$\frac{|\gamma|}{\sqrt{\alpha^2 + \beta^2 + \gamma^2}}.$$
> >
> > 根据面积投影关系，所讨论椭圆的面积
> > $$S = \pi AB \cdot \frac{1}{|\gamma|}\sqrt{\alpha^2 + \beta^2 + \gamma^2}.$$

> [!example] \*例6.3.23
> 设函数 $F(x,y)$ 在平面区域 $G$ 内有定义，其一阶偏导数连续. 又设方程 $F(x,y) = 0$ 的图形是一条自身不相交的封闭曲线 $\Gamma$，$\Gamma \subset G$，并且在 $\Gamma$ 的每一点上：$F'_x(x,y)$ 和 $F'_y(x,y)$ 不同时为零，试证：若 $AB$ 是 $\Gamma$ 的一条极大弦（即 $A$，$B$ 是 $\Gamma$ 上的两点，且存在点 $A$ 的邻域 $U(A)$ 和点 $B$ 的邻域 $U(B)$，使得当点 $C \in U(A) \cap \Gamma$，点 $D \in U(B) \cap \Gamma$ 时总有 $CD \le AB$），则 $\Gamma$ 在 $A$，$B$ 两点的切线必互相平行.（武汉大学）
>
> > [!proof]- 证
> > 记 $A(x_A,y_A)$，$B(x_B,y_B)$. 根据题意，函数 $u = (x - x_B)^2 + (y - y_B)^2$ 应在条件 $F(x,y) = 0$ 限制下，在点 $A(x_A,y_A)$ 处达到极大. 因此
> > $$u'_x|_A = \bigl[2(x - x_B) - 2(y - y_B)\cdot y'_x\bigr]\big|_A = 0.$$
> >
> > 由 $F(x,y) \equiv 0$ 得 $F'_x + F'_y \cdot y'_x = 0$，$y'_x = -F'_x/F'_y$，代入式（1）得
> > $$(x_A - x_B) + (y_A - y_B)\left(-\frac{F'_x(x_A,y_A)}{F'_y(x_A,y_A)}\right) = 0.$$
> >
> > 故曲线 $F(x,y) = 0$ 在点 $A(x_A,y_A)$ 的切线斜率
> > $$k_A = -\frac{F'_x(x_A,y_A)}{F'_y(x_A,y_A)} = -\frac{x_A - x_B}{y_A - y_B}.$$
> >
> > 同理，点 $B$ 的切线斜率
> > $$k_B = -\frac{x_B - x_A}{y_B - y_A}.$$
> >
> > 比较（3）、（4），知 $A$，$B$ 两点的切线相互平行.

> [!example] \*\*例6.3.24
> 若 $\boldsymbol{x}_0 = (x_1^0,x_2^0,\dots,x_n^0)$ 是函数
> $$f(x_1,x_2,\dots,x_n) = \sum_{i,j=1}^{n} a_{ij}x_i x_j \quad (a_{ij} = a_{ji})$$
> 在 $x_1^2 + x_2^2 + \cdots + x_n^2 = 1$ 上的极值点，
> $$A = \begin{pmatrix}a_{11} & \cdots & a_{1n}\\ \vdots & \ddots & \vdots\\ a_{n1} & \cdots & a_{nn}\end{pmatrix}.$$
> 试证 $A\boldsymbol{x}_0 = \boldsymbol{0}$ 或者 $\boldsymbol{x}_0$ 是 $A$ 的特征向量.（兰州大学）
>
> > [!proof]- 证
> > 设
> > $$L(x_1,x_2,\dots,x_n) = \sum_{i,j=1}^{n} a_{ij}x_i x_j - \lambda(x_1^2 + \cdots + x_n^2 - 1),$$
> >
> > 则 $\boldsymbol{x}_0 = (x_1^0,x_2^0,\dots,x_n^0)$ 应满足方程 $\frac{\partial L}{\partial x_i} = 0$，即
> > $$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n - \lambda x_i = 0 \quad (i = 1,2,\dots,n),$$
> >
> > 亦即
> > $$A\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix} = \lambda\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}.$$
> >
> > 故
> > $$A\boldsymbol{x}_0 = \lambda\boldsymbol{x}_0.$$
> >
> > 这说明 $\boldsymbol{x}_0$ 或为方程 $A\boldsymbol{x}_0 = \boldsymbol{0}$ 的根（当 $\lambda = 0$ 时），或为矩阵 $A$ 的特征向量（当 $\lambda \neq 0$ 时）.

下面考虑 $\mathbf R^n$ 中二次函数在 $m$ 个超平面交线上的极值问题.

> [!example] ※例6.3.25
> 函数为 $f(\boldsymbol{x}) = \frac{1}{2}\boldsymbol{x}^T A\boldsymbol{x} + \boldsymbol{B}^T\boldsymbol{x}$，$\boldsymbol{x} \in \mathbf R^n$，约束方程为
> $$C\boldsymbol{x} = \boldsymbol{D}.$$
> 求 $f$ 的极值点应满足的条件，其中 $A$ 为 $n \times n$ 方阵，$\boldsymbol{B}$ 为 $n$ 维向量，$C$ 为 $m \times n$ 矩阵（$m < n$），$\boldsymbol{D}$ 为 $m$ 维向量.
>
> > [!solution]- 解
> > 设 $L = \frac{1}{2}\boldsymbol{x}^T A\boldsymbol{x} + \boldsymbol{B}^T\boldsymbol{x} + \boldsymbol{\lambda}^T(C\boldsymbol{x} - \boldsymbol{D})$，$\boldsymbol{\lambda} = (\lambda_1,\dots,\lambda_m)^T$. 令 $\nabla L = \boldsymbol{0}$，其中 $\nabla L = (L'_{x_1},\dots,L'_{x_n})$. 由此
> > $$A\boldsymbol{x} + C^T\boldsymbol{\lambda} = -\boldsymbol{B}.$$
> > $$\begin{pmatrix}A & C^T\\ C & 0\end{pmatrix}\binom{\boldsymbol{x}}{\boldsymbol{\lambda}} = \binom{-\boldsymbol{B}}{\boldsymbol{D}}.$$
> >
> > 此即为极值点应满足的条件。记 $H = \begin{pmatrix}A & C^T\\ C & 0\end{pmatrix}$，若 $H^{-1}$ 存在，则
> > $$\binom{\boldsymbol{x}}{\boldsymbol{\lambda}} = H^{-1}\binom{-\boldsymbol{B}}{\boldsymbol{D}}.$$

> [!example] \*例6.3.26
> 设 $P_0$ 是椭球面 $S: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$ 外一点，而 $P_1 \in S$。若
> $$|P_1P_0| = \max_{P\in S}|PP_0|,$$
> 求证：直线 $P_1P_0$ 是 $S$ 在点 $P_1$ 处的法线。（华东师范大学）
>
> > [!proof]- 证
> > 1° 令
> > $$L = (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 + \lambda\!\left(\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} - 1\right).$$
> > 由 $\dfrac{\partial L}{\partial x} = \dfrac{\partial L}{\partial y} = \dfrac{\partial L}{\partial z} = 0$，可得极值的必要条件：
> > $$(x - x_0,\, y - y_0,\, z - z_0) = -\lambda\!\left(\frac{x}{a^2},\,\frac{y}{b^2},\,\frac{z}{c^2}\right). \tag{1}$$
> > 因
> > $$|PP_0| = \sqrt{(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2}$$
> > 在 $S$ 上连续，$S$ 是有界闭集，故 $|PP_0|$ 在 $S$ 上有最大（$|PP_0|^2$ 亦然）。因此，最远点 $P_1(x_1,y_1,z_1)$ 应满足式 (1)，即有
> > $$(x_1 - x_0,\, y_1 - y_0,\, z_1 - z_0) = -\lambda\!\left(\frac{x_1}{a^2},\,\frac{y_1}{b^2},\,\frac{z_1}{c^2}\right). \tag{2}$$
> >
> > 2° $S: F(x,y,z) = \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} - 1 = 0$，$F'_x,F'_y,F'_z$ 是 $S$ 的法线方向数。故法向量：
> > $$(F'_x,\,F'_y,\,F'_z)\big|_{P_1} = 2\!\left(\frac{x_1}{a^2},\,\frac{y_1}{b^2},\,\frac{z_1}{c^2}\right),$$
> > $S$ 在 $P_1$ 处的法线
> > $$\frac{x - x_1}{x_1/a^2} = \frac{y - y_1}{y_1/b^2} = \frac{z - z_1}{z_1/c^2}. \tag{3}$$
> > 式 (2) 表明：$P_0(x_0,y_0,z_0)$ 满足法线方程 (3)。可见直线 $P_0P_1$ 是 $S$ 在 $P_1$ 点的法线。证毕。

> [!exercise] \* 练习
> 设 $F(x,y,z)$ 是定义在开区域 $D$ 上有连续偏导数的三元函数，且
> $$F_x^2(x,y,z) + F_y^2(x,y,z) + F_z^2(x,y,z) \neq 0,\quad \forall (x,y,z) \in D. \tag{1}$$
> $S$ 是由 $F(x,y,z) = 0$ 定义的封闭光滑曲面，$P_1,P_2 \in S$ 是 $S$ 上相隔距离最远的两点。试证：$S$ 在点 $P_1,P_2$ 处的两切平面相互平行且与 $P_1,P_2$ 连线垂直。（华东师范大学）
>
> > [!hint]- 提示
> > 设 $P_1,P_2$ 的坐标为 $(x_1,y_1,z_1)$，$(x_2,y_2,z_2)$。取
> > $$L = (x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2 + \lambda F(x_1,y_1,z_1) - \mu F(x_2,y_2,z_2).$$
> > 令 $L'_{x_k} = L'_{y_k} = L'_{z_k} = 0\ (k = 1,2)$，得最远两点 $P_1,P_2$ 必满足方程：
> > $$(x_1 - x_2,\, y_1 - y_2,\, z_1 - z_2) = \lambda(F_x,F_y,F_z)\big|_{P_1} = \mu(F_x,F_y,F_z)\big|_{P_2}. \tag{2}$$
> > 因 $F(x,y,z) = 0$ 是曲面 $S$ 的方程，故 $F_x|_{P_k},F_y|_{P_k},F_z|_{P_k}$ 是曲面 $S$ 在点 $P_k\ (k = 1,2)$ 法线的方向数。式 (2) 表明：$P_1,P_2$ 两点处的法线与 $P_1,P_2$ 两点的连线重合，故在 $P_1,P_2$ 处的切平面都与 $P_1,P_2$ 连线垂直，两者相互平行。

> [!example] new ☆例6.3.27
> 设椭球面 $S: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$，求 $S$ 在 $x > 0,\ y > 0,\ z > 0$ 的切平面与三个坐标平面所围成的几何体的最小体积。（华东师范大学）　$\dfrac{\sqrt{3}}{2}abc$
>
> > [!hint]- 提示
> > $S: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$（在 $x > 0,\ y > 0,\ z > 0$ 的部分）在点 $P_0(x_0,y_0,z_0) \in S$ 处的切面为
> > $$\frac{xx_0}{a^2} + \frac{yy_0}{b^2} + \frac{zz_0}{c^2} = 1.$$
> > 可见，此切面（在三坐标轴上）的截距分别为 $\dfrac{a^2}{x_0},\ \dfrac{b^2}{y_0},\ \dfrac{c^2}{z_0}$，因此欲求的体积为
> > $$V = \frac{a^2 b^2 c^2}{6x_0 y_0 z_0}.$$
>
> > [!hint]- 再提示
> > 当切点 $P_0(x_0,y_0,z_0)$ 靠近 $S$ 的边界时，体积 $V \to +\infty$。故最小值点必在内部。
> >
> > 设 $P_0(x_0,y_0,z_0) \in S$ 使得 $\dfrac{a^2 b^2 c^2}{6x_0 y_0 z_0}$ 取最小值，亦即使得 $\dfrac{x_0^2}{a^2}\dfrac{y_0^2}{b^2}\dfrac{z_0^2}{c^2}$ 取最大值。但
> > $$\sqrt[3]{\frac{x_0^2}{a^2}\frac{y_0^2}{b^2}\frac{z_0^2}{c^2}} \le \frac13\!\left(\frac{x_0^2}{a^2} + \frac{y_0^2}{b^2} + \frac{z_0^2}{c^2}\right)$$
> > （均值不等式），当且仅当三正量相等时等号才成立。所以 $\dfrac{x_0^2}{a^2}\dfrac{y_0^2}{b^2}\dfrac{z_0^2}{c^2}$ 取最大（$V$ 取最小）值的条件是
> > $$\frac{x_0^2}{a^2} = \frac{y_0^2}{b^2} = \frac{z_0^2}{c^2},\qquad \frac{x_0^2}{a^2} + \frac{y_0^2}{b^2} + \frac{z_0^2}{c^2} = 1.$$
> > 因此，$\dfrac{x_0^2}{a^2} = \dfrac{y_0^2}{b^2} = \dfrac{z_0^2}{c^2} = \dfrac13$，即
> > $$(x_0,y_0,z_0) = \left(\frac{a}{\sqrt{3}},\frac{b}{\sqrt{3}},\frac{c}{\sqrt{3}}\right),$$
> > 此时
> > $$V_{\min} = \min_{(x,y,z)\in S}\frac{a^2 b^2 c^2}{6xyz} = \left.\frac{a^2 b^2 c^2}{6xyz}\right|_{P_0} = \frac{\sqrt{3}}{2}abc.$$

> [!example] new \*例6.3.28
> 设 $x,y,z \ge 0,\ x + y + z = \pi$，求 $2\cos x + 3\cos y + 4\cos z$ 的最大值和最小值。（北京大学）
>
> > [!hint]- 提示
> > 问题是：求连续函数 $u = 2\cos x + 3\cos y + 4\cos z$ 在平面 $\Sigma: x + y + z = \pi$ 位于第一卦限部分（记作 $D$）的最大值和最小值。（因 $D$ 是有界闭集，故 $u$ 在 $D$ 上有最大、最小值。）因此，只需分别求出 $u$ 在 $D$ 内和 $D$ 边界上的可疑点，比较 $u$ 值的大小即可得到。
>
> > [!solution]- 解
> > 设
> > $$L = 2\cos x + 3\cos y + 4\cos z + 2\lambda(x + y + z - \pi).$$
> > 令 $L'_x = L'_y = L'_z = 0$，得
> > $$\sin x = \lambda,\qquad 3\sin y = 2\lambda,\qquad 2\sin z = \lambda,$$
> > $$\sin x : \sin y : \sin z = 1 : \frac23 : \frac12 = 6 : 4 : 3.$$
> > 根据三角形的正弦定理，知三角形三边比 $a : b : c = \sin x : \sin y : \sin z = 6 : 4 : 3$。
> >
> > 根据三角形的余弦定理：$a^2 = b^2 + c^2 - 2bc\cos x$，得 $36 = 16 + 9 - 24\cos x$，解得
> > $$\cos x = -\frac{11}{24}.$$
> > 同理可得 $\cos y = \dfrac{29}{36}$，$\cos z = \dfrac{43}{48}$。于是
> > $$u = 2\cos x + 3\cos y + 4\cos z = 2\times\left(-\frac{11}{24}\right) + 3\times\frac{29}{36} + 4\times\frac{43}{48} = \frac{61}{12}. \tag{1}$$
> > （这是 $D$ 内唯一可疑值）。
> >
> > 平面 $\Sigma$ 在三坐标轴上的截距都为 $\pi$。$\Sigma$ 与 $xOy$ 的交线（$z = 0,\ x + y = \pi$）上，
> > $$u = 2\cos x + 3\cos(\pi - x) + 4 = 4 - \cos x \quad (0 \le x \le \pi),$$
> > 因此最小值为 $3$，最大值为 $5$。同样可求出 $u$ 在另外两条边上的最小、最大值分别为 $1,5$ 和 $1,3$。因此，$u$ 在边界上的最小、最大值分别为 $1$ 和 $5$。
> >
> > 而在 $D$ 内只有唯一可疑值 $\dfrac{61}{12}$（见式 (1)），知函数 $u = 2\cos x + 3\cos y + 4\cos z$ 在 $D$ 上最大值为 $\dfrac{61}{12} \approx 5.083$，最小值为 $1$。

> [!example] new ☆例6.3.29
> 设 $D$ 是 $\mathbf R^3$ 中的有界闭区域，$f$ 在 $D$ 上连续且有偏导数。证明：如果在 $D$ 上有 $f'_x + f'_y + f'_z = f$，$f|_{\partial D} = 0$（$\partial D$ 表示 $D$ 的边界），则 $f$ 在 $D$ 上恒等于 $0$。（中国科学技术大学）
>
> > [!hint]- 提示
> > 在有界闭区域上连续，必有最大、最小值点（统称为最值点，统一记作 $p_k$）。若最值点 $p_k$ 是内点，则 $p_k$ 也是 $f$ 的极值点。故 $f'_x(p_k) = f'_y(p_k) = f'_z(p_k) = 0$。从而
> > $$f(p_k) = f'_x(p_k) + f'_y(p_k) + f'_z(p_k) = 0.$$
> > 若 $p_k \in \partial D$，因已知 $f|_{\partial D} = 0$，故也有 $f(p_k) = 0$。
> > 因此，$f$ 在 $D$ 上，既有最大值点，也有最小值点；但在所有最值点上：$f(p_k) = 0$，故
> > $$f = 0 \quad (D\ \text{上}).$$


### 单元练习 6.3

多元 Taylor 公式（此类考研试题相对较少）

> [!exercise] 6.3.1　写出函数 \(f(x,y)=y^{x}\) 在点 \((1,1)\) 附近的 Taylor 公式（写出二阶项，余项形式可不具体写出）。（兰州大学）　《1+2(y-1)+2\ln 2\,(x-1)(y-1)+(y-1)^2+o(\rho^2)》
>

> [!hint]- 提示
> （可直接使用公式计算。）
> \[
> f(x,y)=f(x_0,y_0)+\left(h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y}\right)f(x_0,y_0)+\frac1{2!}\left(h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y}\right)^2f(x_0,y_0)+o(\rho^2),
> \]
> 其中 \(h=x-x_0,k=y-y_0,\rho^2=h^2+k^2\)。这里 \(f(x,y)=y^{x}\)，\((x_0,y_0)=(1,1)\)（本题目的是考公式与计算能力）。
>

> [!exercise] 6.3.2　求 \(f(x,y)=e^x\cos y\) 在 \((0,0)\) 点带 Peano 余项的 Taylor 展开式至四阶项。（北京大学）
>
> \[
> 1+x+\frac12(x^2-y^2)+\frac16x^3-\frac12xy^2+\frac1{24}x^4-\frac14x^2y^2+\frac1{24}y^4+o(\rho^4)
> \]
>

> [!hint]- 提示
> 利用 \(e^x\) 和 \(\cos y\) 的展开式相乘；或直接用公式计算。
>

> [!hint]- 再提示
> \[
> f(x,y)=\left(1+x+\frac12x^2+\frac1{3!}x^3+\frac1{4!}x^4+o(x^4)\right)\cdot\left(1-\frac1{2!}y^2+\frac1{4!}y^4+o(y^4)\right).
> \]
>

> [!exercise] 6.3.3　求函数 \(f(x,y)=2x^2-xy+y^2\) 在 \((1,-2)\) 处的 Taylor 展开式。
>
> 《8+6(x-1)-5(y+2)+2(x-1)^2-(x-1)(y+2)+(y+2)^2》
>

> [!hint]- 提示
> 可用代换法，令 \(x-1=u,y+2=v\)。
>

> [!exercise] 6.3.4　\(|x|,|y|\) 很小时，求 \(\arctan\dfrac{1+x+y}{1-x+y}\) 的近似多项式，准确到 \(x,y\) 的二次项。
>
> \[
> \frac{\pi}{4}+x-xy
> \]
>

> [!hint]- 提示
> 可用 \(\arctan\dfrac{1+u}{1-u}=\arctan 1+\arctan u,\ u=\dfrac{x}{1+y}\)。
>

> [!hint]- 再提示
> 原式 \(=\dfrac{\pi}{4}+\arctan\dfrac{x}{1+y}=\dfrac{\pi}{4}+\arctan x(1-y+y^2+o(y^2))\)
> \[
> =\frac{\pi}{4}+x(1-y+y^2+o(y^2))+o(x^2)
> \]
> \[
> =\frac{\pi}{4}+x-xy+xy^2+o(xy^2)+o(x^2)\approx \frac{\pi}{4}+x-xy.
> \]
>

> [!exercise] 6.3.5　写出 \(f(x,y)=\int_0^1(1+x)^{t^2y}\,dt\) 的 Maclaurin 级数的前面不为零的三项。
>
> \[
> 1+\frac13xy-\frac16x^2y
> \]
>

> [!hint]- 提示
> \((1+x)^{t^2y}=e^{t^2y\ln(1+x)}=1+t^2y\left(x-\frac{x^2}{2}+\cdots\right)+\cdots\).
>

> [!exercise] 6.3.6　设 \(z\) 为由方程 \(z^3-2xz+y=0\) 所定义的 \(x\) 和 \(y\) 的隐函数，当 \(x=1\) 和 \(y=1\) 时它的值为 \(z=1\)。试写出函数 \(z\) 按二项式 \(x-1\) 和 \(y-1\) 的升幂排列的展开式中的若干项。
>
> 《1+2(x-1)-(y-1)+[8(x-1)^2-10(x-1)(y-1)+3(y-1)^2]+…》
>

> [!hint]- 提示
> 用隐函数求导方法求 \(z\) 在 \((1,1,1)\) 处对 \(x,y\) 的低阶（如一至三阶）的偏导数，代入 Taylor 级数。
>

偏导数的几何应用

> [!remark]- 注
> 曲面 \(F(x,y,z)=0\) 的法向量为 \((F'_x,F'_y,F'_z)\)，空间曲线 \(x=x(t),y=y(t),z=z(t)\) 在 \(t=t_0\) 处的切向量为 \((x'(t_0),y'(t_0),z'(t_0))\)。
>

> [!exercise] 6.3.7　求曲面 \(e^z-z+xy=3\) 在点 \((2,1,0)\) 处的切平面方程。（四川大学）　《x-2+2(y-1)=0》
>

> [!hint]- 提示
> 记 \(F(x,y,z)=e^z-z+xy-3\)，则有
> \[
> F'_x(2,1,0)(x-2)+F'_y(2,1,0)(y-1)+F'_z(2,1,0)z=0.
> \]
>

> [!exercise] *6.3.8　过直线
> \[
> l:\begin{cases}
> 10x+2y-z=27,\\
> x+y-z=0
> \end{cases}
> \qquad (1)
> \]
> 作曲面
> \[
> 3x^2+y^2-z^2=27
> \qquad (2)
> \]
> 的切面，求此切平面方程。（中南大学）
>

> [!hint]- 提示
> 过直线 \(l\) 之平面束为
> \[
> 10x+2y-2z-27+k(x+y-z)=0\qquad (\forall k\in\mathbf R)\qquad (3)
> \]
> 求 \(k\) 使 (3) 与 (2) 相切。
>

> [!hint]- 再提示
> 让 (3) 与 (2) 的法向量相互平行，即方向数成比例：
> \[
> \frac{6x}{10+k}=\frac{2y}{2+k}=\frac{-2z}{-2-k}=2t,
> \]
> 得 \(x=\frac13(10+k)t,\ y=(2+k)t,\ z=(2+k)t\)，代入 (2),(3)，得
> \[
> \left\{\frac13(10+k)^2+(2+k)^2-(2+k)^2\right\}t^2=27,
> \]
> \[
> 100t+20kt+k^2t-81=0,
> \]
> 解得 \(t=1,k=-1\) 或 \(k=-19\)。再代入 (3) 得
> \[
> 9x+y-z=27\quad\text{和}\quad 9x+17y-17z+27=0.
> \]
>

> [!exercise] 6.3.9　已知平面方程为
> \[
> lx+my+nz=p,\qquad (1)
> \]
> 与椭球面方程
> \[
> \frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\qquad (2)
> \]
> 相切，证明系数满足方程
> \[
> a^2l^2+b^2m^2+c^2n^2=p^2.\qquad (3)
> \]
> （武汉大学）
>

> [!hint]- 提示
> 由 (1) 与 (2) 相切可知，在切点处两法向量平行。
>

> [!hint]- 再提示
> 设在 \((x,y,z)\) 处相切，法向量 \(n_1=(l,m,n)\)，\(\frac12 n_2=(\frac{x}{a^2},\frac{y}{b^2},\frac{z}{c^2})\)。由 \(n_1\parallel n_2\) 知
> \[
> \frac{x/a^2}{l}=\frac{y/b^2}{m}=\frac{z/c^2}{n}=k,
> \]
> 即
> \[
> x=ka^2l,\quad y=k b^2m,\quad z=kc^2n.\qquad (4)
> \]
> (4) 代入 (2) 得 \(k=(a^2l^2+b^2m^2+c^2n^2)^{-1/2}\)。代回 (4)，再将 (4) 代入 (1) 即得 (3)。
>

> [!exercise] 6.3.10　试证曲面 \(S:xyz=a^2\) 在任何一点处切平面与三坐标平面所围成的立体体积为定值。（合肥工业大学）
>

> [!hint]- 提示
> 切平面 \(F'_x\cdot(X-x)+F'_y\cdot(Y-y)+F'_z\cdot(Z-z)=0\) 上，流动点 \((X,Y,Z)\) 在坐标轴上可分别求出三个截距 \(\dfrac{3a^2}{yz},\dfrac{3a^2}{xz},\dfrac{3a^2}{xy}\)，可验证四面体体积为常数。事实上，
> \[
> V=\frac13\left[\frac12\left(\frac{3a^2}{yz}\cdot\frac{3a^2}{xz}\right)\right]\cdot\frac{3a^2}{xy}=\frac{9}{2}a^2\qquad (\forall (x,y,z)\in S).
> \]
>

> [!exercise] 6.3.11　证明：曲面 \(\sqrt x+\sqrt y+\sqrt z=\sqrt a\,(a>0)\) 的切平面在坐标轴上割下的诸线段，其和为常量。（华东理工大学）
>

> [!hint]- 提示
> \((x,y,z)\) 处之切平面
> \[
> \frac{X}{\sqrt{ax}}+\frac{Y}{\sqrt{ay}}+\frac{Z}{\sqrt{az}}=1,
> \]
> 截距之和 \(\sqrt{ax}+\sqrt{ay}+\sqrt{az}\equiv \sqrt a\cdot\sqrt a=a\quad(\forall (x,y,z)\in\text{该曲面}).
> \]
>

> [!exercise] *6.3.12　求曲线 \(C:x=t,y=-t^2,z=t^3\) 上与平面 \(\pi:x+2y+z=4\) 平行的切线方程。（大连理工大学）
>

> [!hint]- 提示
> 可求出曲线 \(C\) 的切向量和平面 \(\pi\) 的法向量，\(\tau\parallel \pi\Rightarrow \tau\perp n\Rightarrow \tau\cdot n=0\)。
>

> [!hint]- 再提示
> \(\tau=(x',y',z')=(1,-2t,3t^2),\ n=(F'_x,F'_y,F'_z)=(1,2,1)\)。
>
> \[
> \tau\cdot n=1\cdot1+2\cdot(-2t)+1\cdot3t^2=0,
> \]
> 解得 t = 1, 1/3.
>
> 当 t = 1 时，切线为
> (x - 1)/1 = (y + 1)/(-2) = (z - 1)/3；
>
> 当 t = 1/3 时，切线为
> (x - 1/3)/1 = (y + 1/9)/(-2/3) = (z - 1/27)/(1/3)，即 (3x - 1)/3 = (9y + 1)/(-6) = (27z - 1)/9.
>

> [!exercise] ☆6.3.13 求曲线
> C: { x^2 + y^2 + z^2 = 6,   ①
>      x + y + z = 0          ②
> 在点 M(1, -2, 1) 的切线及法平面方程。（北京科技大学）
> (x - 1)/(-6) = (z - 1)/6, y + 2 = 0；x - z = 0
>

> [!hint]- 提示
> 曲线 C 是椭球面①与平面②的交线，可分别求出①、②在点 M 处的法向量 n1, n2，这时 n1 × n2 就是曲线 C 在点 M 的切向量，由此可写出 C 在 M 处的切线与法平面方程。
>

> [!hint]- 再提示
> n1 = (2x, 2y, 2z), n2 = (1, 1, 1),
>
> n1 × n2 = | i  j  k |
>           |2x 2y 2z| = (-6, 0, 6).
>           |1  1  1 |
>

> [!exercise] ☆6.3.14 求椭球面
> S: 3x^2 + y^2 + z^2 = 16,        (1)
> 与球面
> x^2 + y^2 + z^2 = 14             (2)
> 在点 P0(-1, 2, 3) 处的交角。（武汉大学）
> θ = arccos 8/√77
>

> [!hint]- 提示
> n1 · n2 = |n1||n2| cos θ，cos θ = (12 + 16 + 36)/(√88 · √56) = 8/√77.
>

> [!exercise] ☆6.3.15 在曲面 x^2 + 2y^2 + 3z^2 + 2xy + 2xz + 4yz = 8 上，求出切平面平行于坐标平面的诸切点。
>

> [!hint]- 提示
> 利用法向量与坐标轴平行。
>

> [!hint]- 再提示
> 曲面上某点 (x, y, z) 处法向量 n，有
> 1/2 n = (x + y + z, x + 2y + 2z, x + 2y + 3z) // k = (0, 0, 1),
>
> 可得
> { x + y + z = 0,
>   x + 2y + 2z = 0,
>   x + 2y + 3z = α,
>
> 即 x = 0, -y = z = α. 代入曲面方程得 α = ±2√2，故平行 xOy 平面的切平面之切点为 (0, ±2√2, ∓2√2). 类似可求出平行另外两个坐标平面之切面的切点。
>

> [!exercise] 6.3.16 在椭球面 x^2/a^2 + y^2/b^2 + z^2/c^2 = 1 上怎样的点，使椭球面的法线与三坐标轴成等角？
>
> 共有两点：(±a^2|k|, ±b^2|k|, ±c^2|k|), |k| = (a^2 + b^2 + c^2)^(-1/2).
>

> [!hint]- 提示
> 法向量与三坐标轴成等角，则法向量的三分量应相等。
>

> [!hint]- 再提示
> 1/2 n = (x/a^2, y/b^2, z/c^2) 与三坐标轴成等角 α，则
>
> x/a^2 = y/b^2 = z/c^2 = |n| cos α = k,
>
> 代入曲面方程得
> k = ±1/√(a^2 + b^2 + c^2).
>

> [!exercise] 6.3.17 证明：锥面 z = xf(y/x) 的切平面经过其顶点。
>

> [!remark]- 说明
> 设从原点出发的射线 l，与 x, y, z 轴夹角记为 α, β, γ，则该曲面正是由此类射线组成，当且仅当 α, β, γ 满足 cos γ = cos α f(cos β/cos α) 时，整个射线 l 就在该锥面上，与动点的向径无关。可见该曲面是锥面，且原点为锥顶。
>

> [!hint]- 提示
> ∀(x0, y0, z0) ∈ S，此点之切平面
> z = [f(y0/x0) - (y0/x0) f'(y0/x0)] x + f'(y0/x0) y
> 恒过原点 (0, 0, 0).
>

> [!exercise] 6.3.18 求椭球面 x^2 + y^2 + z^2 - xy = 1 在坐标平面上的投影。
>

> [!hint]- 提示
> 例如可通过椭球面上法线与 z 轴垂直的点在 xOy 平面上的投影，以得到该椭球面在 xOy 平面上的投影区域。
>

> [!hint]- 再提示
> 椭球面的法向量 n = (2x - y, 2y - x, 2z),
>
> n ⟂ (0, 0, 1) ⇒ n · (0, 0, 1) = 2z = 0.
>
> 代入椭球面方程得
> x^2 + y^2 - xy = 1.
>
> 在空间这是平行 z 轴的柱面，在 xOy 平面上它是包围原点的封闭曲线。椭球面在 xOy 平面上的投影区域就是它的内部：
> r^2 ≤ 1/(1 - 1/2 sin 2θ).
>
> 类似可求出椭球面在另外两个坐标平面上的投影区域。
>

> [!note] ☆多元极值及其应用
>

> [!remark]- 注
> 本类考研试题甚多，适合各类读者，须倍加注意。
>

> [!exercise] ☆6.3.19 若 M0 是 f(x, y) 的极小值点，且在 M0 点 f''xx, f''yy 存在，试证在 M0 点 f''xx + f''yy ≥ 0.（江西师范大学）
>

> [!hint]- 提示
> 可用 Taylor 公式。
>

> [!hint]- 再提示
> 因 f'x|M0 = f'y|M0 = 0,
>
> 0 ≤ f(x0 + h, y0) - f(x0, y0) = f''xx|M0 · h^2/2 + o(h^2),
> 0 ≤ f(x0, y0 + h) - f(x0, y0) = f''yy|M0 · h^2/2 + o(h^2).
>
> 两式相加，同除以 h^2，有 1/2(f''xx + f''yy)|M0 + o(1) ≥ 0，再令 h → 0 即得。
>

> [!remark]- 注
> 本题给出了极小值点的一个必要条件。
>

> [!exercise] 6.3.20 设 z = f(x, y) 在有界闭区域 D 内有二阶连续的偏导数，且 f''xx + f''yy = 0, f''xy ≠ 0. 证明：z = f(x, y) 的最大值和最小值只能在区域的边界上取得。（华中师范大学）
>

> [!hint]- 提示
> 只需证 D 的内部 f''xx f''yy - f''xy^2 < 0.
>

> [!hint]- 再提示
> 在 D 之内部，2f''xx · f''yy ≤ (f''xx + f''yy)^2 = 0, f''xy ≠ 0, f''xy^2 > 0, 故 f''xx f''yy - f''xy^2 < 0，可知 D 内部无极值。但 z = f(x, y) 在有界闭区域上连续，必有最大、最小值。得证。
>

> [!exercise] ☆6.3.21 求曲面 z = xy - 1 上与原点最近的点的坐标。（中山大学）
>

> [!solution]- 解 I （直接法）曲面上一点 (x, y, xy - 1) 到原点距离为 ρ = √[x^2 + y^2 + (xy - 1)^2] ≥ √[(x - y)^2 + 1] ≥ 1 = ρ(0, 0, -1). 故点 (0, 0, -1) 是该曲面上与原点最近之点，其距离为 1.
>

> [!solution]- 解 II （化为自由极值。）设 s = x^2 + y^2 + (xy - 1)^2，令 ∂s/∂x = ∂s/∂y = 0，得
>
> { x - y + xy^2 = 0,
>   y - x + x^2y = 0.
>
> 解之，有唯一可疑点 (0, 0). 因
>
> Δ|(0,0) = [∂^2s/∂x^2 · ∂^2s/∂y^2 - (∂^2s/∂x∂y)^2]|(0,0) = 4 + 4 > 0, ∂^2s/∂x^2|(0,0) = 2 > 0,
>
> 故 (0, 0) 是极小值点。点 (0, 0, -1) 至原点最近。
>

> [!solution]- 解 III （用 Lagrange 乘数法。）ρ = √(x^2 + y^2 + z^2) 与 ρ^2 的极值点相同，设
> L = x^2 + y^2 + z^2 + λ(z - xy + 1).
>
> 令 L'x = L'y = L'z = L'λ = 0，解方程得 x = y = 0, z = -1. z = xy - 1 是鞍点在 (0, 0, -1) 的马鞍面，站在 xOy 平面观察，曲面在一、三象限无限向上延伸，二、四象限无限向下延伸，ρ = √(x^2 + y^2 + z^2) 无最大值。(0, 0, -1) 只能是最小值点。若以 Gr 表示原点为中心，半径为 r 的闭圆域，则 ρ = √[x^2 + y^2 + (xy - 1)^2] (> r) 在 Gr 上连续，有最大、最小值。r → +∞ 时 ρ → +∞，可见 r 充分大时，ρ 的最小值只能在内部达到，而内部只有唯一的可疑点，故它必是最小值点（这种判断方法时常用到）。
>

> [!exercise] ☆6.3.22 求两曲面：x + 2y = 1 和 x^2 + 2y^2 + z^2 = 1 的交线上距离原点最近的点。（中国科学院）
> (-1/3, 2/3, 0)
>

> [!hint]- 提示
> 可用 Lagrange 乘数法，还可转化成一元最值问题。
>

> [!solution]- 解 I 设 L = x^2 + y^2 + z^2 + λ(x + 2y - 1) + μ(x^2 + 2y^2 + z^2 - 1),
>
> L'x = 2x + λ + 2xμ = 0,     ①
> L'y = 2y + 2λ + 4yμ = 0,    ②
> L'z = 2z + 2zμ = 0,          ③
> x + 2y = 1,                  ④
> x^2 + 2y^2 + z^2 = 1,        ⑤
>
> 由③得 z = 0. 代入⑤，并与④联立，可得 (x, y, z) = (1, 0, 0) 和 (x, y, z) = (-1/3, 2/3, 0). ρ = √(x^2 + y^2 + z^2)
>
> 在交线（有界闭集）上连续，必有最大、最小值，现只有两个可疑点，ρ|(1,0,0) = 1 > ρ|(-1/3,2/3,0) = (1/3)√5，故距原点最近的点为 (-1/3, 2/3, 0).
>

> [!solution]- 解 II （直接法）（化为一元函数最值。）将 x = 1 - 2y 代入椭球面方程得 1 - 4y + 6y^2 + z^2 = 1，即
>
> z = ±√2 √[y(2 - 3y)]  (0 ≤ y ≤ 2/3), ymax = 2/3.
>
> ρ = √(x^2 + y^2 + z^2) = √(1 - y^2) ≥ √(1 - y^2max) = √5/3.
>
> 由 y = ymax 知 x = -1/3, z = 0，故交线上点 (-1/3, 2/3, 0) 距原点最近。
>

> [!exercise] 6.3.23 在平面上求一点，使它到 n 个定点 (x1, y1), (x2, y2), …, (xn, yn) 的距离之平方和最小。（西北工业大学）
> (1/n ∑_{i=1}^n xi, 1/n ∑_{i=1}^n yi)
>

> [!hint]- 提示
> 可以 u = ∑_{i=1}^n [(x - xi)^2 + (y - yi)^2] 作目标函数，令 u'x = u'y = 0，得可疑点 M 的坐标
>
> (x0, y0) = (1/n ∑_{i=1}^n xi, 1/n ∑_{i=1}^n yi). 而 (u''xx · u''yy - u''xy^2)|M = 2n · 2n - 0 > 0, u''xx|M > 0.
>

> [!exercise] 6.3.24 抛物面 z = x^2 + y^2 被平面 x + y + z = 1 截成一椭圆，求原点至该椭圆最近、最远距离。（北京航空航天大学）
>

> [!hint]- 提示
> 以 u = x^2 + y^2 + z^2 作目标函数，约束条件为 z - x^2 - y^2 = 0 和 x + y + z - 1 = 0，用 Lagrange 乘数法可得可疑点为 P = ( (-1 - √3)/2, (-1 - √3)/2, 2 + √3 ), M = ( (-1 + √3)/2, (-1 + √3)/2, 2 - √3 ). 根据实际背景，原点上方的一条椭圆曲线必有一个最近点和一个最远点（理论上讲：连续函数在有界闭集上必有最大、最小值）。而 u(P) = 9 + 5√3 > u(M) = 9 - 5√3. 可见离原点最近距离为 √u(M) = √(9 - 5√3)，最远距离为 √u(P) = √(9 + 5√3).
>

> [!exercise] *6.3.25 求 u = ky^3 + zx 在条件 x^2 + y^2 + z^2 = 1, z ≥ 0 下的最大值和最小值。（清华大学）
>

> [!solution]- 解 1° 若 k 为变数，u 作为四元函数，在所给条件下明显无最大、最小值，因为：如 k > 0，当 x = z = 0, y = 1 时，u = k → +∞（k → +∞）；当 x = z = 0, y = -1 时，u = -k → -∞（k → +∞）。
>
> 2° 若 k 为常数。
>
> i）求 z > 0, x^2 + y^2 + z^2 = 1 上 u 的极值点。作
> L = ky^3 + zx + λ(x^2 + y^2 + z^2 - 1).
>
> 令 L'x = L'y = L'z = L'λ = 0，得
>
> { z + 2λx = 0,        ①
>   3ky^2 + 2λy = 0,    ②
>   x + 2λz = 0,        ③
>   x^2 + y^2 + z^2 = 1.④
>
> 由②可知，y = 0 或 y = -2λ/(3k). 由①、③解得 λ = ±1/2, x = ∓z.
>
> 当 y = 0 时，得 x = ∓1/√2；
>
> 当 y = -2λ/(3k) = ∓1/(3k) 时，x = ∓√(9k^2 - 1)/(3√2 |k|), z = √(9k^2 - 1)/(3√2 |k|)（要求 9k^2 - 1 ≥ 0, |k| ≥ 1/3）.
>
> 记 P1,2 = (∓1/√2, 0, 1/√2), M1,2 = (∓√(9k^2 - 1)/(3√2 |k|), ∓1/(3k), √(9k^2 - 1)/(3√2 |k|)),
>
> u|P1 = -1/2, u|P2 = 1/2; u|M1 = -1/2 + 1/(54k^2) > -1/2 = u|P1, u|M2 = 1/2 - 1/(54k^2) < 1/2 = u|P2.
>
> 可见 u(P2) > u(M2) > u(M1) > u(P1), M1, M2 不是最值点。
>
> u 通过 z 依赖于 x, y，由隐函数求导不难求出
>
> u''xx|P2 = -4, u''yy|P2 = -1, u''xy|P2 = 0, Δ|P2 = (u''xx u''yy - u''xy^2)|P2 > 0, u''xx|P2 < 0,
>
> 故 P2 为极大值点。类似可得 P1 为极小值点。故在上半椭球面上（不包括边界）：umax = u(P2) = 1/2,
>
> umin = u(P1) = -1/2.
>
> ii）在半椭球面的边界上 (z = 0, x^2 + y^2 = 1)，u = ky^3，umax = |k|, umin = -|k|.
>
> 总之，在上半椭球面包括边界上，
>
> umax = { |k|, |k| > 1/2,
>          1/2, |k| ≤ 1/2,
>
> umin = { -|k|, |k| > 1/2,
>          -1/2, |k| ≤ 1/2.
>

> [!remark]- 注
> 解法第 2° 部分，也可不用 Lagrange 乘数法，而把 u = ky^3 + zx 看成通过 z(z = √(1 - x^2 - y^2)) 依赖于 x, y 的二元函数 (x^2 + y^2 ≤ 1). 用隐函数微分法可求出 u'x, u'y，令之为零，也可找出同样的可疑点。
>

> [!exercise] ☆6.3.26 求函数 u = x^2 - y^2 + 2xy 在单位圆 x^2 + y^2 ≤ 1 上的最大、最小值。（北京科技大学）
> 《√2, -√2》
>

> [!hint]- 提示
> 在圆内为自由极值，边界上 x^2 + y^2 = 1 为条件极值。
>

> [!hint]- 再提示
> 在圆内令 u'x = 0, u'y = 0 得
> { 2x + 2y = 0,
>   -2y + 2x = 0,
> 只有唯一解 (0, 0). 这里 u(0, 0) = 0.
>
> 在边界上 r^2 = x^2 + y^2 = 1,
>
> u = cos^2 θ - sin^2 θ + 2sin θcos θ = cos 2θ + sin 2θ
> = √2(sin π/4 cos 2θ + cos π/4 sin 2θ) = √2 sin(2θ + π/4).
>
> 当 θ = π/8, 5π/8 时分别达到最大值 √2 和最小值 -√2.
>
> 因为连续函数在有界闭区域上必有最大、最小值，现只有三个可疑点，故比较三点之值即得。
>

> [!exercise] 6.3.27 在直线 x + y = π/2 位于第一象限的那一段上求一点，使该点横坐标的余弦与纵坐标的余弦之乘积最大并求出最大值。（华中理工大学，西北工业大学）
> (π/4, π/4), 1/2
>

> [!hint]- 提示
> 除用 Lagrange 乘数法之外，还可用直接法（用定义）。
>

> [!hint]- 再提示
> 目标函数
> f(x, y) = cos x cos y = cos x cos(π/2 - x)
> = 1/2 sin 2x ≤ f(π/4, π/4) = 1/2  (∀x ∈ [0, π/2]).
>

> [!exercise] ☆6.3.28 求直线
> 4x + 3y = 16          (1)
> 与椭圆
> 18x^2 + 5y^2 = 45    (2)
> 之间的最短距离.（华中科技大学）
>

> [!hint]- 提示
> 1° 可用 Lagrange 乘数法: 任一直线 ax+by=c, 法线方程为
> (ax+by-c)/√(a²+b²)=0, 这时线外一点 (x₀,y₀) 到直线的距离为
>
> ρ(x₀,y₀)=|ax₀+by₀-c|/√(a²+b²).
>
> 因此本题是求目标函数 ρ=|4x+3y-16|/5 在条件 18x²+5y²=45 下的最小值.
>
> 2° 还可用几何、代数方法: 平行直线 (1) 的直线 4x+3y=c, 如果是椭圆 (2) 的切线, 则 (x,y)=(x, 1/3(c-4x)) 应能满足方程 (2) 且仅有唯一根. 关于 x 的二次方程
> 18x²+5[1/3(c-4x)]²=45
> 之判别式为零, 可求出待定常数 c=±11, 再在切线 4x+3y=±11 上任取一点, 如 (0,±11/3), 代入
> |4x+3y-16|/5,
> 即可得相应距离 1 和 27/5, 故 ρ_min=1.
>

> [!exercise] ☆6.3.29 证明: 在光滑曲面 F(x,y,z)=0 上离原点最近的点处的法线必过原点.（武汉理工大学）
>

> [!hint]- 提示
> 求曲面上距离原点最近的点, 作出此点的法线, 验证原点在法线上即可.
>

> [!hint]- 再提示
> L=x²+y²+z²+λF(x,y,z). 令
> L'_x=2x+λF'_x(x,y,z)=0,
> L'_y=2y+λF'_y(x,y,z)=0,
> L'_z=2z+λF'_z(x,y,z)=0.
> 可见曲面上某点 (x₀,y₀,z₀) 若离原点最近, 则
> x₀:y₀:z₀=F'_x(x₀,y₀,z₀):F'_y(x₀,y₀,z₀):F'_z(x₀,y₀,z₀).
> 此处的法线可写成
> (x-x₀)/x₀=(y-y₀)/y₀=(z-z₀)/z₀.
> 显然 (0,0,0) 满足方程.
>

> [!exercise] ☆6.3.30 利用导数证明周长一定的三角形中以等边三角形的面积最大.（清华大学）
>

> [!hint]- 提示
> 设三角形三边长为 x,y,z, 三角形的周长 l=2p, 则面积
> S=√[p(p-x)(p-y)(p-z)].
> 因此可取 Lagrange 函数为 L=p(p-x)(p-y)(p-z)+λ(x+y+z-2p), 约束条件为 x+y+z=2p 和 0<x,y,z<p.
>

> [!exercise] 6.3.31 在曲面 x²+y²+z²/4=1 (x>0,y>0,z>0) 上求一点, 使过该点的切平面在三个坐标轴上的截距平方和最小.（复旦大学）
>
> (1/2, 1/2, √2)
>

> [!hint]- 提示
> 椭球上点 (x,y,z) 处的切平面为
> xX+yY+zZ/4=1  （(X,Y,Z) 为切面上流动点）, 
> 在坐标上的截距分别为 1/x, 1/y, 4/z. 可取
> L=1/x²+1/y²+16/z²+λ(x²+y²+1/4 z²-1).
>

利用极值证明不等式

> [!exercise] ☆6.3.32 证明 sin x sin y sin(x+y)≤3√3/8 （0<x,y<π）, 并确定何时等号成立.（中国科学院）
>

> [!hint]- 提示
> 可考虑 f(x,y)=sin x sin y sin(x+y), 证明 f_max≤3√3/8 （0<x,y<π）.
>

> [!hint]- 再提示
> 由 f'_x=f'_y=0 可知, x=y=π/3, f(π/3,π/3)=3√3/8. 而在有界闭区域 [0,π;0,π] 的边界上 f(x,y)=0.
>

> [!exercise] 6.3.33 若 n≥1 及 x≥0,y≥0, 试用求极值的方法证明不等式:
> (xⁿ+yⁿ)/2 ≥ ((x+y)/2)ⁿ.
>

> [!hint]- 提示
> 可考虑 z=(xⁿ+yⁿ)/2 在条件 x+y=a (a>0,x≥0,y≥0) 下的极值问题, 得
> z=(xⁿ+yⁿ)/2 ≥ (a/2)ⁿ. 或当 x≠0 时令 u=y/x, 化为一元问题.
>

> [!exercise] 6.3.34 用条件极值法证明不等式:
> (x₁²+x₂²+…+xₙ²)/n ≥ ((x₁+x₂+…+xₙ)/n)²  （x_k>0,k=1,2,…,n）.
>

> [!hint]- 提示
> n 个正数和为定数, 其平方和以 n 数彼此相等时为最小. 即 f(x₁,…,xₙ)=x₁²+…+xₙ² 在条件 x₁+…+xₙ=a 下的极值.
>

> [!exercise] 6.3.35 设 a_i>0 (i=1,2,…,n), 证明:
> n(1/a₁+1/a₂+…+1/aₙ)^{-1} ≤ (a₁a₂…aₙ)^{1/n}.
>

> [!hint]- 提示
> 可考虑 f(x₁,x₂,…,xₙ)=x₁x₂…xₙ 在条件 1/x₁+1/x₂+…+1/xₙ=1/a (x_i>0,a>0) 下的极值; 或将此式看作 1/a₁,1/a₂,…,1/aₙ 的几何平均与算术平均的关系.
>

> [!exercise] 6.3.36 证明不等式: eʸ+xln x-x-xy≥0 (x≥1,y≥0).（厦门大学）
>

> [!hint]- 提示
> 记 F(x,y)=eʸ+xln x-x-xy, 令 F'_y(x,y)=eʸ-x=0, 在 xOy 平面上得一曲线 C:x=eʸ. 在 C 上: F'_x(x,ln x)=0 (∀x≥1).
>

> [!hint]- 再提示
> ∀x₀≥1, z=F(x₀,y) 是关于 y 的一元函数 (y≥0). 当 y=y₀=ln x₀ 时,
> F'_y(x₀,y₀)=0, F''_{yy}(x₀,y₀)=e^{y₀}=x₀≥1>0.
> 所以 z=F(x₀,y) 在 y=y₀ 处取最小值. 而 F(x₀,y₀)=0, 所以
> F(x,y)=eʸ+xln x-x-xy≥F_min(x,y)
> =F(x₀,y₀)=0 （当 x≥1,y≥0 时）.
>

> [!exercise] 6.3.37 费马原理指出, 从 A 射出到达 B 的光线, 是沿费时最短的路线传播. 假设点 A 和点 B 位于以平面分开的不同的光介质中, 并且光的传播速度在两个介质中分别为 v₁ 与 v₂, 试由费马原理推出光的折射定律.
>

> [!hint]- 提示
> （转化为数学问题.）（如图 6.3.7）设光线以速度 v₁ 从界面上方点 A 出发, 照射到界面的 O 点, 穿进新介质（例如水）, 界面处被折射, 入射角记为 α, 折射角记为 β. 在新介质里, 速度变为 v₂, 最后到达界面下方的点 B. 假设 A,B 与界面的距离分别为 a 和 b, 两点之间的水平距离为 l. 问: x 为多少时, 光线从 A 至 B 所花的时间才最节省. 亦即: 求 x₀, 使得
>
> T(x₀)=(AO/v₁+OB/v₂)|_{x₀}=(√(x²+a²)/v₁+√((l-x)²+b²)/v₂)|_{x=x₀}=min_{0≤x≤l} T(x).    (1)
>
> 进而证明:（折射）费时最短的路径, 正好是折射定律指示的路径:
>
> sin α/sin β = v₁/v₂ = 常数.    (2)
>

> [!solution]- 解 令 T'(x)=0, 得
> x/(v₁√(x²+a²)) - (l-x)/(v₂√((l-x)²+b²))=0,
>
> 即 sin α/v₁ = sin β/v₂, 或写作 sin α/sin β = v₁/v₂ = 常数. 此即式 (2).
>
> 由式 (1) 知 T(x) 连续, 当 x 在 [0,l] 外时, 离开端点越远, 耗时将会越长, 趋向无穷大, 无最大值点只有最小值点. 但只有一个可疑点, 说明此时路径最短, 折射定律 (2) 获证.
>


## ** §6.4 隐函数存在定理及函数相关

> [!note] 导读
> 该节理论性较强，难度较大。在数学分析中应用不像一致收敛那样广泛，考题相对较少。此次修订，函数相关内容从略，需要可查原书第一、二版。


### * 一、隐函数存在定理


#### a. 一个方程的情况

> [!note] 要点
> 对方程 $F(x,y)=0$ 而言（多元的情况 $x=(x_1,x_2,\dots,x_n)$），隐函数存在定理告诉我们只要验证了条件：
> 1) $F(P_0)=0$, $F'_y(P_0)\neq 0$，其中点 $P_0$ 坐标为 $(x_0,y_0)$（多元情况 $x_0=(x_{01},x_{02},\dots,x_{0n})$, $F(P)=F(x_1,x_2,\dots,x_n,y)$）；
> 2) $F(x,y)$ 及 $F'_y(x,y)$ 在 $P_0$ 的某邻域里连续，
> 则可断言方程 $F(x,y)=0$ 在 $P_0$ 的邻域里确定了唯一的隐函数。
> 具体来说，即存在 $\delta,\eta>0$ 及函数 $y=y(x)$ 满足：
> 1) $y_0=y(x_0)$；
> 2) $F(x,y(x))\equiv 0$, $|y(x)-y_0|<\delta$, $x\in U(x_0,\eta)$，其中 $U(x_0,\eta)=\{x: |x-x_0|<\eta\}$；
> 3) 满足条件 1)、2) 的函数 $y(x)$ 是唯一的；
> 4) $y=y(x)$ 在 $U(x_0,\eta)$ 内连续。
> 若附加条件 $F'_x(x,y)$（多元的情况指 $F'_{x_i}(x,y)$, $i=1,2,\dots,n$）在 $(x_0,y_0)$ 的邻域里连续，则还能断言 $y'(x)$ 存在，且
>
> $$
> y'_x= - \frac{F'_x(x,y)}{F'_y(x,y)}.
> $$
>
> （多元的情况为 $y'_{x_i}= - \dfrac{F'_{x_i}(x,y)}{F'_y(x,y)}$, $i=1,2,\dots,n$.）
>
> 值得注意的是，上述条件，只是充分条件而不是必要条件。条件不满足时，隐函数是否存在，有待讨论。

> [!example] 例 6.4.1
> 给定方程
>
> $$
> x^2+y+\sin(xy)=0. \tag{1}
> $$
>
> 1) 说明在点 $(0,0)$ 的充分小的邻域内，此方程确定唯一的、连续的函数 $y=y(x)$，使得 $y(0)=0$；
> 2) 讨论函数 $y(x)$ 在 $x=0$ 附近的可微性；
> 3) 讨论函数 $y(x)$ 在 $x=0$ 附近的升降性；
> 4) 在点 $(0,0)$ 的充分小的邻域内，此方程是否确定唯一的单值函数 $x=x(y)$，使得 $x(0)=0$？为什么？（武汉大学）
>
> **分析** 1) 容易验证 $F(x,y)=x^2+y+\sin(xy)$ 符合隐函数存在定理的条件，因而可推出在 $(0,0)$ 的某邻域里存在唯一隐函数 $y=y(x)$ 连续，$y(0)=0$.
>
> 2) 因 $F'_x(x,y)=2x+y\cos(xy)$ 也在 $(0,0)$ 的邻域里连续，故隐函数 $y=y(x)$ 的导数存在，且
>
> $$
> y'(x)= - \frac{2x+y\cos(xy)}{1+x\cos(xy)}. \tag{2}
> $$
>
> 3) 为讨论 $y(x)$ 的升降性，我们来考虑 $y'$ 的符号。从 (2) 看出，当 $x,y$ 充分小时，$y'$ 的符号取决于分子 $-[2x+y\cos(xy)]$ 的符号。因为 $y(0)=0$，由 (2) 知 $y'(0)=0$。故 $y=o(x)$（当 $x\to 0$ 时）。于是 $|y\cos(xy)|\leq |y|=o(x)$。因此 $y'$ 的符号与 $-2x$ 的符号相同，所以
> 当 $x>0$ 时，$y'<0$，$y(x)\searrow$；当 $x<0$ 时，$y'>0$，$y(x)\nearrow$.
> 可见，$y(x)$ 在 $x=0$ 处取（严格）极大值。
>
> 4) 用隐函数存在定理不能判定在 $(0,0)$ 的邻域内是否存在唯一的单值函数 $x=x(y)$，使得 $x(0)=0$（因为 $F'_x(0,0)=0$）。但是从 3) 的结论里，我们已能肯定这种函数不存在。因为 $y(x)$ 在 $x=0$ 处取（严格）极大值，故在 $(0,0)$ 的充分小的邻域里，当 $y<0$ 时至少有两个 $x$ 与 $y$ 对应，$y>0$ 时无 $x$ 与 $y$ 对应，使得 $F(x,y)=0$.

> [!exercise] new 练习
> 已知函数 $F(x,y)=2-\sin x+y^3e^{-y}$ 定义在全平面上，证明：$F(x,y)=0$ 在全平面上确定了唯一的隐函数 $y=y(x)$，而且 $y(x)$ 连续可微。（北京大学）
>
> > [!hint]- 提示
> > 是否存在 $(x,y)\in \mathbb{R}^2$ 满足方程 $F(x,y)=0$？这是此题的难点。为此将 $F(x,y)=0$ 改写为
> >
> > $$
> > \sin x-2=y^3e^{-y}. \tag{1}
> > $$
> >
> > 式 (1) 的左端：$\sin x-2=z$，则 $z\in[-3,-1]$ ($\forall x\in \mathbb{R}$)。此时，式 (1) 右端可写为
> >
> > $$
> > z=y^3e^{-y}\quad
> > \begin{cases}
> > \geq 0, & \text{当 } y\geq 0 \text{ 时},\\
> > <0, & \text{当 } y<0 \text{ 时}.
> > \end{cases}
> > $$
> >
> > 当 $y<3$ 时，$z'=(y^3e^{-y})'=y^2(3-y)e^{-y}>0$。故 $y<3$ 时 $z=z(y)$ 严$\nearrow$，从而存在反函数。
> > 可见：每个 $x\in \mathbb{R}$ 对应唯一的 $z=\sin x-2\in[-3,-1]$，并通过 $z=y^3e^{-y}$ 的反函数（记作 $y=f(z)$）对应唯一的 $y\in(-\infty,0)$。故 $F(x,y)=0$ 在全平面上存在隐函数：$y=f(\sin x-2)$ ($\forall x\in \mathbb{R}$) 满足方程 (1)。又因 $F(x,y)=2-\sin x+y^3e^{-y}$ 连续，故 $F'_y(x,y)=y^2(3-y)e^{-y}$ 连续，且 $F'_y(x,y)>0$（当 $(x,y)=(x,f(\sin x-2))$ 时）。根据隐函数存在定理，$F(x,y)=0$ 确定唯一隐函数 $y=f(\sin x-2)$，此函数连续而且可微。

> [!example] new 例 6.4.2
> 记 $F(x,y)=\sum_{n=1}^\infty nye^{-n(x+y)}$，是否存在 $a>0$ 和唯一的函数 $h(x)$：$h(x)$ 在 $(1-a,1+a)$ 上可导，且 $h(1)=0$，使得 $F(x,h(x))=0$.（北京大学）
>
> 题意是：用级数定义的函数 $F(x,y)=\sum_{n=1}^\infty nye^{-n(x+y)}$ 在点 $p(1,0)$ 的邻域里，方程 $F(x,y)=0$ 是否能唯一确定可导的隐函数 $y=h(x)$ 满足 $h(1)=0$, $F(x,h(x))=0$.
> 因此，任务是检验隐函数存在定理的条件是否能满足。
>
> > [!solution]- 解
> > **1°**（零值函数满足方程.）当 $y=0$ 时，$\sum_{n=1}^\infty nye^{-n(x+y)}\equiv 0$. 故点 $p(1,0)$ 满足方程：$F(1,0)=0$. 另外，零值函数 $y=h(x)\equiv 0$ 显然处处满足方程 $F(x,h(x))\equiv 0$，且 $h(1)=0$.（因此存在性已被证明，下面只需证明唯一性.）
> >
> > **2°**（证明和函数 $F(x,y)$ 连续.）因通项连续，只需证明 "$\sum_{n=1}^\infty nye^{-n(x+y)}$ 在点 $p(1,0)$ 的某邻域里一致收敛". 事实上，取 $0<\alpha<1/2$，在点 $p(1,0)$ 的邻域：
> > $U(p,\alpha)=\{(x,y)\mid |x-1|<\alpha,\ |y|<\alpha\}$ 里，$x+y>1-2\alpha>0$，因此，通项的绝对值：
> >
> > $$
> > \begin{aligned}
> > |nye^{-n(x+y)}| &\leq |n\alpha e^{-n(1-2\alpha)}| \\
> > &= \frac{n\alpha}{\sum_{k=0}^\infty n^k(1-2\alpha)^k/k!} \quad \text{（分母中，$k\neq 3$ 的项删除）}\\
> > &\leq \frac{6\alpha}{n^2(1-2\alpha)^3} \quad (\forall (x,y)\in U(p,\alpha)).
> > \end{aligned}
> > $$
> >
> > 而 $\sum_{n=1}^\infty \frac{6\alpha}{n^2(1-2\alpha)^3}$ 收敛，所以 $\sum_{n=1}^\infty nye^{-n(x+y)}$ 在邻域 $U(p,\alpha)$ 里一致收敛。$F(x,y)$ 连续。
> >
> > **3°** 类似地，逐项求导后的级数也在 $U(p,\alpha)$ 里一致收敛，因此可以逐项求导（实际上可逐项求导任意多次），且
> >
> > $$
> > F'_y(1,0)=\sum_{n=1}^\infty \Bigl[ne^{-n(x+y)}-n^2ye^{-n(x+y)}\Bigr]\Big|_{x=1,y=0}
> > =\sum_{n=1}^\infty ne^{-n}>0.
> > $$
> >
> > 隐函数存在定理的条件全部满足，在邻域 $U(p,\alpha)$ 里，$F(x,y)$ 对 $y$ 单增，只能有唯一的隐函数（也就是前面指出的零函数）：$y=h(x)\equiv 0\ (1-a<x<1+a)$.

> [!exercise] 练习
> 设函数 $f(x,y)$ 及其一阶偏导数在 $(0,1)$ 附近存在，连续，且 $f'_y(0,1)\neq 0$，又 $f(0,1)=0$，证明：$f(x,\int_0^t \sin x\,dx)=0$ 在点 $(0,\pi/2)$ 附近确定一单值函数 $t=\varphi(x)$，并求 $\varphi'(0)$.（南京大学）
>
> > [!hint]- 提示
> > 验证 $F(x,t)=f(x,\int_0^t \sin \tau\,d\tau)=f(x,1-\cos t)$ 在点 $(x,t)=(0,\pi/2)$ 的邻域里满足隐函数存在定理的条件。

> [!example] 例 6.4.3
> 设函数 $f(x,y)$ 在点 $(x_0,y_0)$ 邻近二次连续可微，且 $f'_x(x_0,y_0)=0$，$f''_{xx}(x_0,y_0)>0$.
>
> 1）试证存在 $y_0$ 的 $\delta$ 邻域 $U(y_0,\delta)$，使对任何 $y\in U(y_0,\delta)$，能求得 $f(x,y)$ 关于 $x$ 的一个极小值 $g(y)$；
>
> 2）试证 $g'(y_0)=f'_y(x_0,y_0)$．（复旦大学）
>
> > [!proof]- 证
> > 对于给定的 $y$，要求 $f(x,y)$ 关于 $x$ 的极小值，按求极值的步骤，应对 $y$ 找出 $x$ 使得 $f'_x(x,y)=0$．即要求找方程 $f'_x(x,y)=0$ 的隐函数 $x=x(y)$，使得 $f'_x(x(y),y)=0$．
> >
> > 已知 $f(x,y)$ 在 $(x_0,y_0)$ 邻近二次连续可微，$f'_x(x_0,y_0)=0$，$f''_{xx}(x_0,y_0)>0$．因此方程 $f'_x(x,y)=0$ 满足隐函数存在定理的条件．在 $(x_0,y_0)$ 的某个邻域里方程 $f'_x(x,y)=0$ 确定唯一的单值可微函数 $x=x(y)$ 使得 $x_0=x(y_0)$，$f'_x(x(y),y)=0$（当 $y$ 属于 $y_0$ 的某个 $\delta$ 邻域 $U(y_0,\delta)$ 时）．又因 $f''_{xx}(x_0,y_0)>0$，故上述邻域充分小时，$f''_{xx}(x(y),y)>0$．于是 $f(x,y)$ 关于 $x$ 在 $(x(y),y)$ 处取极小值，记之为 $g(y)=f(x(y),y)$．
> >
> > 最后，我们来证 $g'(y_0)=f'_y(x_0,y_0)$．事实上
> >
> > $$
> > \begin{aligned}
> > g'(y_0) &= \lim_{\Delta y\to 0} \frac{g(y_0+\Delta y)-g(y_0)}{\Delta y}\\[4pt]
> > &= \lim_{\Delta y\to 0} \frac{1}{\Delta y} \Bigl\{
> > f'_x(x_0,y_0)[x(y_0+\Delta y)-x(y_0)] \\
> > &\qquad + f'_y(x_0,y_0)\Delta y + \varepsilon_1[x(y_0+\Delta y)-x(y_0)] + \varepsilon_2\Delta y \Bigr\},
> > \end{aligned}
> > $$
> >
> > 这里 $\varepsilon_1,\varepsilon_2\to 0$（当 $\Delta y\to 0$ 时）．
> >
> > 已知 $f'_x(x_0,y_0)=0$，且 $\lim_{\Delta y\to 0} \frac{1}{\Delta y}[x(y_0+\Delta y)-x(y_0)]=x'(y_0)$. 因此，$g'(y_0)=f'_y(x_0,y_0)$.

> [!example] 例 6.4.4
> 证明：对方程 $\psi(x)-y-\varphi(y)=0$ 而言，若
>
> 1）$\psi(x_0)-y_0-\varphi(y_0)=0$；
>
> 2）$\psi(x)$ 在 $x_0$ 的邻域 $I=\{x\mid |x-x_0|<r\}$ 内连续；
>
> 3）$\varphi(y)$ 在 $y_0$ 的邻域 $J=\{y\mid |y-y_0|\leq \delta\}$ 上满足 Lipschitz 条件：$\exists \alpha: 0<\alpha<1$，$\forall y_1,y_2\in J$，有
>
> $$
> |\varphi(y_2)-\varphi(y_1)|\leq \alpha|y_2-y_1|. \tag{1}
> $$
>
> 则存在隐函数 $y=y(x)$ 及数 $\eta>0$，使得
>
> i）$y_0=y(x_0)$；
>
> ii）$|y(x)-y_0|\leq \delta$，$\psi(x)-y(x)-\varphi(y(x))=0$（当 $|x-x_0|<\eta$ 时）；
>
> iii）满足条件 i）与 ii）的函数是唯一的；
>
> iv）$y=y(x)$ 连续.
>
> > [!proof]- 证（迭代法）
> > 因 $\psi$ 在 $x_0$ 处连续，所以对 $(1-\alpha)\delta>0$，$\exists \eta>0$（$\eta<r$），使得
> >
> > $$
> > |x-x_0|<\eta \text{ 时，有 } |\psi(x)-\psi(x_0)|<(1-\alpha)\delta. \tag{2}
> > $$
> >
> > 令
> >
> > $$
> > y_n=\psi(x)-\varphi(y_{n-1}) \quad (n=1,2,\dots). \tag{3}
> > $$
> >
> > 下面用数学归纳法证明：对一切 $n\in\{0,1,2,\cdots\}$，有
> >
> > $$
> > |y_{n+1}-y_n|\leq \alpha^n(1-\alpha)\delta,\quad
> > |y_{n+1}-y_0|<(1-\alpha^{n+1})\delta<\delta. \tag{4}
> > $$
> >
> > 事实上，由条件 1），3）及式（2），（3），有
> >
> > $$
> > \begin{aligned}
> > |y_1-y_0| &= |\psi(x)-\varphi(y_0)-[\psi(x_0)-\varphi(y_0)]| \\
> > &= |\psi(x)-\psi(x_0)| < (1-\alpha)\delta<\delta,
> > \end{aligned}
> > $$
> >
> > $$
> > \begin{aligned}
> > |y_2-y_1| &= |\psi(x)-\varphi(y_1)-[\psi(x)-\varphi(y_0)]| = |\varphi(y_1)-\varphi(y_0)| \\
> > &< \alpha|y_1-y_0| = \alpha(1-\alpha)\delta<\delta.
> > \end{aligned}
> > $$
> >
> > 从而
> >
> > $$
> > |y_2-y_0| \leq |y_2-y_1|+|y_1-y_0|
> > < \alpha(1-\alpha)\delta+(1-\alpha)\delta = (1-\alpha^2)\delta<\delta.
> > $$
> >
> > 现假设式（4）对于 $n=k-1$ 成立，来证明式（4）对于 $n=k$ 也成立.
> >
> > $$
> > \begin{aligned}
> > |y_{k+1}-y_k| &= |\psi(x)-\varphi(y_k)-[\psi(x)-\varphi(y_{k-1})]| \\
> > &\leq |\varphi(y_k)-\varphi(y_{k-1})| \leq \alpha|y_k-y_{k-1}| \leq \alpha^k(1-\alpha)\delta,
> > \end{aligned}
> > $$
> >
> > $$
> > \begin{aligned}
> > |y_{k+1}-y_0| &\leq |y_{k+1}-y_k|+|y_k-y_0|
> > \leq \alpha^k(1-\alpha)\delta+(1-\alpha^k)\delta \\
> > &= (1-\alpha)(1+\alpha+\cdots+\alpha^{k-1}+\alpha^k)\delta
> > = (1-\alpha^{k+1})\delta.
> > \end{aligned}
> > $$
> >
> > 式（4）获证.
> >
> > 下面证明 $\{y_n(x)\}$ 一致收敛. 因为当 $|x-x_0|<\eta$ 时，由式（3）所得的 $\{y_n\}$ 有
> >
> > $$
> > y_n=\sum_{k=1}^n (y_k-y_{k-1})+y_0.
> > $$
> >
> > 而 $\sum_{k=1}^\infty \alpha^{k-1}(1-\alpha)\delta$ 收敛，故 $\{y_n(x)\}$ 当 $|x-x_0|<\eta$ 时一致收敛. 即存在函数 $y=y(x)$，使得当 $n\to\infty$ 时，$y_n(x)\to y(x)$（当 $|x-x_0|<\eta$ 时）.
> >
> > 下面来证 $y(x)$ 满足条件 i）至 iv）. 首先在迭代公式里逐次用 $x=x_0$ 代入，可得
> >
> > $$
> > y_1(x_0)=y_0,\ y_2(x_0)=y_0,\ \cdots,\ y_n(x_0)=y_0,\ \cdots
> > $$
> >
> > 由此取极限，可知 $y(x_0)=y_0$（此即条件 i））.
> >
> > 其次，由 $|y_n(x)-y_0|<\delta$ 取极限，知 $|y(x)-y_0|\leq\delta$.
> >
> > 另外，由条件 3），$|\varphi(y)-\varphi(y_{n-1})|\leq\alpha|y-y_{n-1}|\to 0$ ($n\to\infty$).
> >
> > 故在 $y_n=\psi(x)-\varphi(y_{n-1})$ 中取极限（令 $n\to\infty$），可得 $y=\psi(x)-\varphi(y)$，即满足方程 $\psi(x)-y-\varphi(y)=0$（条件 ii）获证）.
> >
> > 证唯一性. 假设另有一解 $\bar{y}(x)$ 也满足方程，即
> >
> > $$
> > \bar{y}=\psi(x)-\varphi(\bar{y}),\quad y=\psi(x)-\varphi(y),
> > $$
> >
> > 于是 $|\bar{y}-y|=|\varphi(y)-\varphi(\bar{y})|\leq \alpha|\bar{y}-y|$ ($0<\alpha<1$).
> >
> > 故 $\bar{y}-y=0$.
> >
> > 最后，由于每一项 $y_n(x)$ 都连续，$y_n(x)\to y(x)$ ($|x-x_0|<\eta$)，所以 $y(x)$ 在 $|x-x_0|<\eta$ 里连续. 证毕.

> [!exercise] 练习
> 证明下面的方程在点 $(0,0,0)$ 附近唯一确定了隐函数 $z=z(x,y)$：
>
> $$
> x + \frac{1}{2} y^2 + \frac{1}{2} z + \sin z = 0,
> $$
>
> 并将 $z(x,y)$ 在点 $(0,0)$ 展开为带 Peano 型余项的 Taylor 公式，展开到二阶.（北京大学）
>
> > [!hint]- 提示
> > 记 $F(x,y,z)=x+\frac{1}{2} y^2+\frac{1}{2} z+\sin z$，则 $F$ 连续，$F(0,0,0)=0$，$F'_z(0,0,0)=\frac{3}{2}$，因此在 $(0,0,0)$ 的邻域里存在唯一隐函数 $z=z(x,y)$，使得 $F(x,y,z(x,y))=0$.
> >
> > 当 $(x,y)$ 在 $(0,0)$ 的某个邻域时，有
> >
> > $$
> > F(x,y,z(x,y))\equiv x+\frac{1}{2} y^2+\frac{1}{2} z(x,y)+\sin z(x,y)\equiv 0.
> > $$
> >
> > 既然是恒等式，故可两边同时求导. 固定 $y$ 对 $x$ 求导得 $z'_x$；同样，固定 $x$ 对 $y$ 求导得 $z'_y$；$z'_x(0,0)=-\frac{2}{3}$ 和 $z'_y(0,0)=0$. 注意 $z'_x$ 和 $z'_y$ 仍是 $(x,y)$ 的函数，继续求导，可得 $z''_{xx}(0,0)=0$，$z''_{xy}(0,0)=0$，$z''_{yy}(0,0)=-\frac{2}{3}$. 代入二元 Taylor 公式，可得隐函数 $z=z(x,y)$ 在 $(0,0)$ 的 Taylor 展开式：
> >
> > $$
> > \begin{aligned}
> > z &= z(0,0)+z'_x(0,0)x+z'_y(0,0)y \\
> > &\quad + \frac{1}{2!}\Bigl[ z''_{xx}(0,0)x^2+2z''_{xy}(0,0)xy+z''_{yy}(0,0)y^2 \Bigr] + o(\rho) \\[4pt]
> > &= -\frac{2}{3}x - \frac{1}{3}y^2 + o(x^2+y^2).
> > \end{aligned}
> > $$


#### b．多个方程的情况

> [!note] 要点：方程组
> $$
> \begin{aligned}
> F_1(x_1,x_2,\cdots,x_n,y_1,y_2,\cdots,y_m)&=0,\\
> F_2(x_1,x_2,\cdots,x_n,y_1,y_2,\cdots,y_m)&=0,\\
> &\ \ \cdots\\
> F_m(x_1,x_2,\cdots,x_n,y_1,y_2,\cdots,y_m)&=0,
> \end{aligned}\tag{A}
> $$
>
> 简记为
> $$
> \boldsymbol{F}(\boldsymbol{x},\boldsymbol{y})=\boldsymbol{0},\tag{A'}
> $$
> 其中 $\boldsymbol{F}=(F_1,F_2,\cdots,F_m)$ 为向量函数：$\mathbb{R}^{n+m}\to\mathbb{R}^m$，$(\boldsymbol{x},\boldsymbol{y})\mapsto\boldsymbol{F}(\boldsymbol{x},\boldsymbol{y})$．这里 $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)$，$\boldsymbol{y}=(y_1,y_2,\cdots,y_m)$，$(\boldsymbol{x},\boldsymbol{y})=(x_1,x_2,\cdots,x_n,y_1,y_2,\cdots,y_m)$．

> [!theorem] 定理1
> 假若
>
> 1）$\boldsymbol{F}(P_0)=\boldsymbol{0}$，$\det(\partial F_i/\partial y_j)|_{P_0}\neq 0$；2）$F_i$，$\partial F_i/\partial y_j$ 在 $P_0$ 的邻域里连续，
>
> 这里 $P_0=(\boldsymbol{x}_0,\boldsymbol{y}_0)=(x_{01},x_{02},\cdots,x_{0n},y_{01},y_{02},\cdots,y_{0m})$．则方程（$A'$）在 $P_0$ 的邻域里确定了 $\boldsymbol{x}$ 的唯一隐函数 $\boldsymbol{y}$，并且连续．具体来说，即存在 $\delta$，$\eta>0$ 及函数 $\boldsymbol{y}=\boldsymbol{y}(\boldsymbol{x})=(y_1(\boldsymbol{x}),y_2(\boldsymbol{x}),\cdots,y_m(\boldsymbol{x}))$（其中 $\boldsymbol{x}=(x_1,\cdots,x_n)$），使得
>
> i）$\boldsymbol{y}(\boldsymbol{x}_0)=\boldsymbol{y}_0$（这里 $\boldsymbol{x}_0=(x_{01},x_{02},\cdots,x_{0n})$，$\boldsymbol{y}_0=(y_{01},y_{02},\cdots,y_{0m})$）；
>
> ii）$|y_j(\boldsymbol{x})-y_{0j}|\leq\delta$，$\boldsymbol{F}(\boldsymbol{x},\boldsymbol{y}(\boldsymbol{x}))\equiv\boldsymbol{0}$（当 $\boldsymbol{x}\in I$ 时），这里 $I=\{\boldsymbol{x}=(x_1,x_2,\cdots,x_n)\mid|x_i-x_{0i}|<\eta,\ i=1,2,\cdots,n\}$；
>
> iii）满足条件 i），ii）的这种函数是唯一的；
>
> iv）$\boldsymbol{y}=\boldsymbol{y}(\boldsymbol{x})$ 在 $I$ 上连续（等价地每个 $y_j(\boldsymbol{x})$ 在 $I$ 上连续，$j=1,2,\cdots,m$）．

> [!note] 隐函数微分法
> 若 $\boldsymbol{F}$ 有连续偏导数，则隐函数也有连续（偏）导数；并且它的导数可按如下的方法求出：将隐式方程中的 $y_j$ 看成由方程所确定的隐函数，从而隐式方程成为恒等式，在等式两端同时求导，便可求得隐函数导数的线性方程组，解之即可求得隐函数的导数．

> [!example] 例6.4.5
> 证明：
> $$
> \begin{cases}
> e^{xu}\cos yv = x/\sqrt{2}\\
> e^{xu}\sin yv = y/\sqrt{2}
> \end{cases}
> $$
> 在点 $P_0(x_0,y_0,u_0,v_0)=(1,1,0,\pi/4)$ 的邻域里确定了唯一的隐函数 $u=u(x,y)$，$v=v(x,y)$，并求 $du$，$dv$，$d^2u$，$d^2v$ 在 $P_0$ 处的值．

> [!solution]- 解
> （隐函数存在定理的条件容易验证，实际上由方程也容易解出 $u$，$v$．作为例题，这里只对微分用隐函数微分法进行计算，为了训练计算能力，请读者先自己计算，再与这里比较．）将 $u$，$v$ 看成是 $x$，$y$ 的函数，对原式求微分得
> $$
> \begin{aligned}
> e^{xu}\cos yv\;d(xu)-e^{xu}\sin yv\;d(yv)-\frac{1}{\sqrt{2}}dx &= 0, \tag{1}\\
> e^{xu}\sin yv\;d(xu)+e^{xu}\cos yv\;d(yv)-\frac{1}{\sqrt{2}}dy &= 0. \tag{2}
> \end{aligned}
> $$
>
> 用点 $P_0(1,1,0,\pi/4)$ 代入，可得
> $$
> du=\frac{1}{2}(dx+dy),\qquad dv=\Bigl(\frac{1}{2}-\frac{\pi}{4}\Bigr)dy-\frac{1}{2}dx.
> $$
>
> 对（1），（2）再微分，再用 $P_0$ 代入可得
> $$
> d^2u=-dx^2-2dx\,dy,\qquad d^2v=\frac{1}{2}dx^2+dx\,dy+\Bigl(\frac{\pi}{2}-\frac{3}{2}\Bigr)dy^2.
> $$

> [!example] 例6.4.6
> 设空间曲线 $C$ 的方程是：$x=f(t)$，$y=\varphi(t)$，$z=f'(t)/\varphi'(t)$（$-1<t<1$），其中函数 $f(t)$，$\varphi(t)$ 在 $(-1,1)$ 内都具有二阶连续导数，且一阶导数处处不等于零；而点集
> $$
> E=\{\,(x,y,z)\mid x=s^{2}+\frac{f'(t)}{\varphi'(t)}s+f(t),\ y=2s+\varphi(t),\ z=\frac{f'(t)}{\varphi'(t)},\ s,t\in(-1,1)\,\}.
> $$
> 试证明：$E$ 中与曲线 $C$ 充分接近（即 $|s|$ 充分小）的一些点，组成一张连续的曲面 $z=z(x,y)$．（武汉大学）

> [!remark]- 分析
> 我们看到在 $E$ 的定义中，
> $$
> \begin{aligned}
> x &= s^{2}+\frac{f'(t)}{\varphi'(t)}s+f(t), & s,t&\in(-1,1], \tag{1}\\[4pt]
> y &= 2s+\varphi(t), & s,t&\in(-1,1), \tag{2}\\[4pt]
> z &= \frac{f'(t)}{\varphi'(t)}, & t&\in(-1,1). \tag{3}
> \end{aligned}
> $$
>
> 令 $s=0$，恰变成曲线 $C$：$x=f(t)$，$y=\varphi(t)$，$z=f'(t)/\varphi'(t)$，$t\in(-1,1)$，故 $C\subset E$．为了证明 $E$ 中与 $C$ 充分邻近的点组成一张连续曲面 $z=z(x,y)$，我们只要证明：当 $|s|$ 充分小时，方程（1），（2）即
> $$
> \begin{aligned}
> F &\equiv x-s^{2}-\frac{f'(t)}{\varphi'(t)}s-f(t)=0, \tag{4}\\
> G &\equiv y-2s-\varphi(t)=0 \tag{5}
> \end{aligned}
> $$
> 确定了唯一的单值连续函数 $t=t(x,y)$，代入（3）即得 $z$ 作为 $x,y$ 的函数．可见问题归结为对（4），（5）验证隐函数存在定理的条件．
>
> 事实上，任取 $t_0\in(-1,1)$，对应曲线 $C$ 上一点 $(x_0,y_0,z_0)$：$x_0=f(t_0)$，$y_0=\varphi(t_0)$，$z_0=f'(t_0)/\varphi'(t_0)$．当 $(x,y,s,t)$ 取点 $P_0(x_0,y_0,0,t_0)$ 时，方程（4），（5）满足，且
> $$
> \left.\begin{vmatrix}
> F'_s & F'_t \\
> G'_s & G'_t
> \end{vmatrix}\right|_{P_0}
> =
> \left.\begin{vmatrix}
> -2s-\dfrac{f'(t)}{\varphi'(t)} & -\dfrac{f''(t)\varphi'(t)-\varphi''(t)f'(t)}{\varphi'(t)^2}\,s-f'(t) \\[12pt]
> -2 & -\varphi'(t)
> \end{vmatrix}\right|_{P_0}
> =
> \begin{vmatrix}
> -\dfrac{f'(t_0)}{\varphi'(t_0)} & -f'(t_0) \\[8pt]
> -2 & -\varphi'(t_0)
> \end{vmatrix}
> = f'(t_0)-2f'(t_0)=-f'(t_0)\neq 0.
> $$
>
> 于是由 $F$，$G$ 连续并有连续偏导，便知（4），（5）在 $P_0$ 的邻域里确定了唯一且连续的隐函数 $t=t(x,y)$．再由 $t_0$ 的任意性，这样就证明了 $E$ 在 $C$ 的邻近点组成了一个连续曲面 $z=z(x,y)$．

> [!example] 例6.4.7
> 设 $f(x,y)$ 存在二阶连续偏导数，且 $f''_{xx}f''_{yy}-(f''_{xy})^{2}\neq 0$，证明变换
> $$
> \begin{aligned}
> u &= f'_x(x,y),\\
> v &= f'_y(x,y),\\
> w &= -z + x f'_x(x,y) + y f'_y(x,y)
> \end{aligned}
> $$
> 存在唯一的逆变换：
> $$
> \begin{aligned}
> x &= g'_u(u,v),\\
> y &= g'_v(u,v),\\
> z &= -w + u g'_u(u,v) + v g'_v(u,v).
> \end{aligned}
> $$
> （华中师范大学）

> [!remark]- 分析
> 关键在于证明有式（4），（5），因为将（4），（5）代入（3），即可得式（6）．欲证有（4），（5），等价于求证存在函数 $g$ 使得
> $$
> dg = x\,du + y\,dv. \tag{7}
> $$
>
> 根据式（1），（2），有
> $$
> \begin{aligned}
> x\,du + y\,dv &= x f''_{xx}\,dx + x f''_{xy}\,dy + y f''_{yx}\,dx + y f''_{yy}\,dy \\
> &= (x f''_{xx} + y f''_{yx})\,dx + (x f''_{xy} + y f''_{yy})\,dy \\
> &= (x f'_x + y f'_y - f)'_x\,dx + (x f'_x + y f'_y - f)'_y\,dy.
> \end{aligned}
> $$
>
> 可见若令 $g = x f'_x + y f'_y - f$，则得式（7），从而式（4）、（5）成立．另一方面，对于方程
> $$
> \begin{aligned}
> F &\equiv u - f'_x(x,y) = 0,\\
> G &\equiv v - f'_y(x,y) = 0,
> \end{aligned}
> $$
> 作为 $u,v,x,y$ 的函数，因为 $F,G$ 连续，有连续偏导数，
> $$
> \begin{vmatrix}
> F'_x & F'_y \\
> G'_x & G'_y
> \end{vmatrix}
> = f''_{xx}f''_{yy} - (f''_{xy})^{2} \neq 0.
> $$
>
> 故逆变换（4）、（5）存在且唯一，从而（6）存在且唯一．

> [!example] ☆例 6.4.8
> 设
>
> 1）$F(x,y,z)$ 在 $\mathbb{R}^3$ 上连续，$F$ 是三次齐次函数，即 $\forall\,t\in\mathbb{R}$，
> $$
> F(tx,ty,tz) = t^{3}F(x,y,z)\quad(\forall\,(x,y,z)\in\mathbb{R}^3); \tag{1}
> $$
>
> 2）$F$ 有连续偏导数，且
> $$
> F'_z(x,y,z) \neq 0; \tag{2}
> $$
>
> 3）$z = f(x,y)$ 是方程 $F(x,y,z) = 0$ 所确定的隐函数，且 $f$ 可微．
>
> 试证：$z = f(x,y)$ 是一次齐次函数．（华中师范大学）

> [!proof]- 证
> 1° 因 $z = f(x,y)$ 是方程 $F(x,y,z) = 0$ 确定的隐函数，故 $(x,y,z) = (x,y,f(x,y))$ 必满足方程，即有
> $$
> F(x,y,f(x,y)) = 0. \tag{3}
> $$
>
> 2° 因 $F'_z$ 的介值性，如果 $F'_z$ 变号，就会出现零点，与 $F'_z \neq 0$ 矛盾，故 $F'_z(x,y,z) \neq 0$，从而 $F'_z$ 不会变号，可知 $F(x,y,z)$ 对 $z$ 单调．因此，$\mathbb{R}^2$ 上有隐函数 $z = f(x,y)$ 且唯一．
>
> 3°（证明 $z = f(x,y)$ 是一次齐次函数．）即 $\forall\,t\in\mathbb{R}$，
> $$
> f(tx,ty) = tf(x,y)\quad(\forall\,(x,y)\in\mathbb{R}^2).
> $$
>
> 根据式（1）和（3）：
> $$
> F(tx,ty,tf(x,y))\ \overset{\text{式(1)}}{\longrightarrow}\ t^{3}F(x,y,f(x,y))\ \overset{\text{式(3)}}{\longrightarrow}\ 0. \tag{4}
> $$
>
> 在式（3）里：$\forall\,t\in\mathbb{R}$，用 $(tx,ty)$ 替代 $(x,y)$，则得
> $$
> F(tx,ty,f(tx,ty)) = 0. \tag{5}
> $$
>
> （4）$-$（5）得 $\quad F(tx,ty,tf(x,y)) - F(tx,ty,f(tx,ty)) = 0.$
>
> 此式左端应用 Lagrange 定理：
> $$
> F'_z(tx,ty,\xi)\bigl[tf(x,y) - f(tx,ty)\bigr] = 0, \tag{6}
> $$
> 其中 $\xi$ 在 $z_1 = tf(x,y)$，$z_2 = f(tx,ty)$ 之间，且（据式（2））$F'_z(tx,ty,\xi) \neq 0$．故
> $$
> tf(x,y) = f(tx,ty)\quad(\forall\,t\in\mathbb{R}).
> $$
>
> 即 $z = f(x,y)$ 是一次齐次函数．（证毕．）

> [!example] \*例 6.4.9
> $T:D\to\mathbb{R}^2$ 是给定的映射，其中 $D\subset\mathbb{R}^2$ 是一个凸区域．当 $x\in D$ 时，$T(x)$ 在 $D$ 上有连续的二阶偏导数，且 $T(x)$ 的 Jacobi 矩阵 $J_T(x)$ 是正定的．试证：$T:D\to\mathbb{R}^2$ 为单射．（北京大学）

> [!hint]- 提示
> 记 $T$ 为：$(x,y)\to(u,v) = (f(x,y),g(x,y))$，其中 $(x,y)\in D\subset\mathbb{R}^2$，$(u,v)\in\mathbb{R}^2$．$T$ 为单射，意即：“若 $P_0 \neq P_1$，则 $T(P_0) \neq T(P_1)$．”或等价地：“若 $T(P_0) = T(P_1)$，则 $P_0 = P_1$．”

> [!proof]- 证
> （反证法）假设 $D$ 中有两个不同的点 $P_0(x_0,y_0)$，$P_1(x_1,y_1)$，但 $T(P_0) = T(P_1)$．即
> $$
> u_0 = f(x_0,y_0) = f(x_1,y_1) = u_1,\quad v_0 = g(x_0,y_0) = g(x_1,y_1) = v_1. \tag{1}
> $$
>
> 1° 因 $D$ 为凸域，所连线段 $P_0P_1 \subset D$．$P_0P_1$ 的方程可写为
> $$
> \begin{cases}
> x = x_0 + \lambda(x_1 - x_0),\\
> y = y_0 + \lambda(y_1 - y_0),
> \end{cases}\quad\lambda\in[0,1].
> $$
>
> $\lambda = 0$ 对应 $P_0(x_0,y_0) \to T(P_0) = (u_0,v_0).$
>
> $\lambda = 1$ 对应 $P_1(x_1,y_1) \to T(P_1) = (u_1,v_1) \overset{\text{式(1)}}{\longrightarrow} (u_0,v_0) = T(P_0).$
>
> $\lambda \in (0,1)$ 对应 $P_\lambda(x_0 + \lambda(x_1 - x_0),\,y_0 + \lambda(y_1 - y_0)) \to T(P_\lambda)$ 记 $(u_\lambda,v_\lambda).$
>
> 作辅助函数：
> $$
> \begin{aligned}
> F(\lambda) &= (x_1 - x_0)f(P_\lambda) + (y_1 - y_0)g(P_\lambda) \\
> &= (x_1 - x_0)f\bigl[x_0 + \lambda(x_1 - x_0),\,y_0 + \lambda(y_1 - y_0)\bigr] \\
> &\quad + (y_1 - y_0)g\bigl[x_0 + \lambda(x_1 - x_0),\,y_0 + \lambda(y_1 - y_0)\bigr]. \tag{2}
> \end{aligned}
> $$
>
> 因为 $D$ 为凸域，故线段 $P_0P_1 \subset D$，$P_\lambda \in P_0P_1 \subset D$（$\lambda\in[0,1]$）．式（2）表明：$F(\lambda)$ 是 $[0,1]$ 上一元函数，且
> $$
> \begin{aligned}
> F(0) &= (x_1 - x_0)f(x_0,y_0) + (y_1 - y_0)g(x_0,y_0) = (x_1 - x_0)u_0 + (y_1 - y_0)v_0,\\
> F(1) &= (x_1 - x_0)f(x_1,y_1) + (y_1 - y_0)g(x_1,y_1) = (x_1 - x_0)u_1 + (y_1 - y_0)v_1.
> \end{aligned}
> $$
>
> 又从式（1）看出：$F(0) = F(1)$，可见 $F(\lambda)$ 在 $[0,1]$ 上满足 Lagrange 定理条件．故 $\exists\,\xi\in(0,1)$，使得 $F'(\xi) = 0$．利用式（2），求导得
> $$
> \begin{aligned}
> &(x_1 - x_0)\bigl[f'_x(P_\xi)(x_1 - x_0) + f'_y(P_\xi)(y_1 - y_0)\bigr] \\
> +\,&(y_1 - y_0)\bigl[g'_x(P_\xi)(x_1 - x_0) + g'_y(P_\xi)(y_1 - y_0)\bigr] = 0, \tag{3}
> \end{aligned}
> $$
> 其中 $P_\xi(x_0 + \xi(x_1 - x_0),\,y_0 + \xi(y_1 - y_0)) \in P_0P_1 \subset D$．借助矩阵乘法，式（3）可写为如下二次型：
> $$
> \begin{pmatrix}
> x_1 - x_0, & y_1 - y_0
> \end{pmatrix}
> \begin{pmatrix}
> f'_x(P_\xi) & f'_y(P_\xi) \\
> g'_x(P_\xi) & g'_y(P_\xi)
> \end{pmatrix}
> \begin{pmatrix}
> x_1 - x_0 \\
> y_1 - y_0
> \end{pmatrix}
> = 0,
> $$
> 其中 $P_0,P_1 \in D$ 是两个不同之点，故 $(x_1 - x_0)$ 和 $(y_1 - y_0)$ 不同时为 $0$．因此，Jacobi 行列式
> $$
> \begin{vmatrix}
> f'_x(P_\xi) & f'_y(P_\xi) \\
> g'_x(P_\xi) & g'_y(P_\xi)
> \end{vmatrix}
> = 0,
> $$
> 跟正定条件矛盾．（证毕．）

> [!example] 例 6.4.10
> 假设：$D\subset\mathbb{R}^2$ 是凸区域，函数 $u = u(x,y)$，$v = v(x,y)$ 在区域 $D$ 上连续，有连续一阶偏导数，$W(P) = (u(x,y),v(x,y))$ 是 $\mathbb{R}^2\to\mathbb{R}^2$ 的映射．求证：对 $D$ 上任意两个不同的点 $P_1(x_1,y_1)$ 和 $P_2(x_2,y_2)$，若 $W(P_1) = W(P_2)$，其中 $W(P_i) = (u(x_i,y_i),v(x_i,y_i))$（$i = 1,2$），则在 $P_1$，$P_2$ 之间必存在点 $P_\xi$，使得 Jacobi 行列式：
> $$
> \left.\frac{\partial(u,v)}{\partial(x,y)}\right|_{P_\xi} = 0.
> $$
> （北京大学）

> [!proof]- 证
> 设 $P_k(x_k,y_k)$（$k = 1,2$），因 $D$ 是凸区域，$\forall\,P_1,P_2 \in D$，
> $$
> P(t) = P_1 + t(P_2 - P_1) = \bigl(x_1 + t(x_2 - x_1),\,y_1 + t(y_2 - y_1)\bigr) \in D\quad(t\in[0,1]).
> $$
>
> 则
> $$
> \begin{aligned}
> P(0) &= P_1 = (x_1,y_1),\quad P(1) = P_2 = (x_2,y_2),\\
> W(t) &= (U(t),V(t)) = (u(P(t)),v(P(t))).
> \end{aligned}
> $$
>
> 作辅助函数 $\quad F(t) = t(W(1) - W(0)) - W(t)$，
>
> 则 $F(t)$ 在 $[0,1]$ 连续，有连续导数，且 $F(0) = F(1)$．可应用微分中值定理：$\exists\,\xi\in(0,1)$，使得
> $$
> F'(\xi) = (W(1) - W(0)) - W'(\xi) = 0.
> $$
>
> 当 $W(P_1) = W(P_2)$（亦即 $W(1) = W(0)$）时有 $W'(\xi) = 0$，亦即
> $$
> \begin{aligned}
> u'_t|_{\xi} &= \frac{d}{dt}u\bigl(x_1 + t(x_2 - x_1),\,y_1 + t(y_2 - y_1)\bigr)\Big|_{\xi} \\
> &= u'_x(P(\xi))\cdot(x_2 - x_1) + u'_y(P(\xi))\cdot(y_2 - y_1) = 0.
> \end{aligned}
> $$
>
> 类似地，
> $$
> v'_t|_{\xi} = v'_x(P(\xi))\cdot(x_2 - x_1) + v'_y(P(\xi))\cdot(y_2 - y_1) = 0.
> $$
>
> 因为 $P_1 \neq P_2$，说明此一次齐次联立方程组
> $$
> \begin{cases}
> u'_t|_{\xi} = 0,\\
> v'_t|_{\xi} = 0
> \end{cases}
> $$
> 有非零解．故系数行列式（即 Jacobi 行列式）
> $$
> \begin{vmatrix}
> u'_x(P(\xi)) & u'_y(P(\xi)) \\
> v'_x(P(\xi)) & v'_y(P(\xi))
> \end{vmatrix}
> = \left.\frac{\partial(u,v)}{\partial(x,y)}\right|_{P(\xi)} = 0.
> $$


### ※二、函数相关

这里列出定义 X 和两个重要定理，如欲了解更多具体内容，请查看本书第 2 版。

> [!definition] 定义
> 设函数
> $$
> \begin{cases}
> y_1 = y_1(x_1,\cdots,x_n),\\
> \cdots\cdots\cdots\cdots\qquad(\text{简记作 } y = y(x))\\
> y_m = y_m(x_1,\cdots,x_n)
> \end{cases}
> $$
> 在 $x_0 = (x_{01},\cdots,x_{0n})$ 的某邻域内有定义，又设 $y(x_0) = y_0 = (y_{01},\cdots,y_{0m})$，则当且仅当存在函数 $F(y_1,\cdots,y_m)$ 在 $y_0$ 的任意邻域里不恒为零，使得
> $$
> F(y_1(x_1,\cdots,x_n),\cdots,y_m(x_1,\cdots,x_n)) \equiv 0
> $$
> 在 $x_0$ 的邻域里成立时，$y_1,\cdots,y_m$ 称为在 $x_0$ 处**函数相关**；否则称为**函数无关**。当且仅当在区域 $D\subset\mathbb{R}^n$ 内处处函数相关时，称为在 $D$ 内函数相关；当且仅当在 $D$ 内处处函数无关时，才称在 $D$ 内函数无关。

> [!theorem] 定理 2
> 若 Jacobi 矩阵 $\displaystyle\frac{\partial(y_1,\cdots,y_m)}{\partial(x_1,\cdots,x_n)} = \left(\frac{\partial y_i}{\partial x_j}\right)$ 在点 $x_0 = (x_{01},\cdots,x_{0n})$ 处的秩 $r = m$，则 $y_1,\cdots,y_m$ 在 $x_0$ 处函数无关。

> [!theorem] 定理 3
> 设（齐次线性函数）
> $$
> \begin{aligned}
> y_1 &= a_{11}x_1 + \cdots + a_{1n}x_n,\\
> &\cdots\cdots\cdots\cdots\\
> y_m &= a_{m1}x_1 + \cdots + a_{mn}x_n,
> \end{aligned}
> $$
> 则以下二条等价：
>
> 1）$y_1,\cdots,y_m$ 在某点 $x_0$ 处函数相关；
> 2）$y_1,\cdots,y_m$ 线性相关；
> 3）在 $\mathbb{R}^n$ 中处处函数相关。

> [!theorem] 定理 4
> 设 $y_i = y_i(x_1,\cdots,x_n)$（$i = 1,2,\cdots,m$）在点 $x_0 = (x_{01},x_{02},\cdots,x_{0n})$ 的某邻域里有连续的一阶偏导数，Jacobi 矩阵 $\left(\dfrac{\partial y_i}{\partial x_j}\right)$ 在 $x_0$ 附近的秩 $r$：$0 < r < m$，
> $$
> \begin{vmatrix}
> \displaystyle\frac{\partial y_1}{\partial x_1} & \cdots & \displaystyle\frac{\partial y_1}{\partial x_r}\\[4pt]
> \vdots & \ddots & \vdots\\[4pt]
> \displaystyle\frac{\partial y_r}{\partial x_1} & \cdots & \displaystyle\frac{\partial y_r}{\partial x_r}
> \end{vmatrix}_{x_0} \neq 0，
> $$
> 则
>
> 1）$y_1,\cdots,y_r$ 在 $x_0$ 处函数无关；
>
> 2）$y_1,\cdots,y_m$ 在 $x_0$ 处函数相关。


### 单元练习 6.4

**6.4.1**  $P_0(x_0,y_0)$ 是右半平面（$x > 0$）内任意一点，试证方程组

$$\begin{cases}
u = \varphi(x,y) = (e^x + 1) \sin y,\\
v = \psi(x,y) = (e^x - 1) \cos y
\end{cases}$$

能在 $P_0$ 的（充分小的）邻域内确定连续可微的反函数。（北京师范大学）

**6.4.2**  设 $F(u,v,w,x,y) = uy + vx + w + x^2$，$G(u,v,w,x,y) = uvw + x + y + 1$，$P_0$ 的坐标为 $(2,1,0,-1,0)$，又 $F(P_0) = 0$，$G(P_0) = 0$。

1）证明：在 $(2,1,0)$ 的某一邻域内能由方程组 $F = 0$，$G = 0$ 定义唯一的一对函数 $x = f(u,v,w)$，$y = g(u,v,w)$；

2）求 Jacobi 矩阵 $\displaystyle \left.\frac{\partial(f,g)}{\partial(u,v,w)}\right|_{P_0}$。（上海师范大学）

**6.4.3**  设函数 $f(x,y)$，$g(x,y)$ 是定义在平面开区域 $G$ 内的两个函数，在 $G$ 内均有连续的一阶偏导数，且在 $G$ 内任意点处，均有

$$\frac{\partial f}{\partial x}\,\frac{\partial g}{\partial y} - \frac{\partial f}{\partial y}\,\frac{\partial g}{\partial x} \neq 0.$$

又设有界闭区域 $D \subset G$。试证：在 $D$ 中满足方程组

$$\begin{cases}
f(x,y) = 0,\\
g(x,y) = 0
\end{cases}$$

的点至多有有限个。（武汉大学）

> [!hint]- 提示
> 可用反证法、聚点原理和隐函数存在定理。

**6.4.4**  已知方程 $F(x,y,z) = 0$ 和 $G(x,y,z) = 0$。

1）在什么条件下，由此两个方程能确定一条通过点 $P(x_0,y_0,z_0)$ 的曲线？

2）在什么条件下，上述曲线在点 $P$ 处有切线？

3）在什么条件下，上述切线平行于 $z$ 轴？

4）导出上述曲线从点 $(x_0,y_0,z_0)$ 到点 $(x_1,y_1,z_1)$ 之间的一个弧长公式（用函数 $F$，$G$ 及其偏导数来表示）；

5）上述弧长公式成立的条件是什么？（华东师范大学）

**6.4.5**  设函数 $F(x,y)$ 在点 $(x_0,y_0)$ 的某邻域内有连续的二阶偏导数，且 $F(x_0,y_0) = 0$，$F'_x(x_0,y_0) = 0$，$F'_y(x_0,y_0) > 0$，$F''_{xx}(x_0,y_0) < 0$。试证：由方程 $F(x,y) = 0$ 确定的定义于点 $x_0$ 邻近的隐函数 $y = y(x)$ 在点 $x_0$ 达到（局部）极小。（武汉大学）

> [!hint]- 提示
> $y'(x_0) = 0$，$y''(x_0) > 0$。

**6.4.6**  设 $\varphi(x,y)$，$\varphi'_y(x,y)$ 在 $(x_0,y_0)$ 的邻域 $D\colon |x - x_0|,\,|y - y_0| \leq \Delta$ 上连续，$|\varphi'_y(x,y)| < \lambda < 1$，$|\varphi(x,y)| < (1 - \lambda)\Delta$。令 $y_n = y_0 + \varphi(x,y_{n-1})$，则由 $y_0$ 可依次得到 $y_1(x),y_2(x),\cdots,y_n(x),\cdots$。试证此序列收敛，且极限函数为隐式方程 $y = y_0 + \varphi(x,y)$ 的唯一连续解。（大连理工大学）

**6.4.7**  设 $f(x)$ 是完备距离空间 $(X,d)$ 上将 $X$ 映为自身的连续映射，若存在正实数列 $a_n \to 0$，使

$$\sum_{n=1}^{\infty} a_n \text{ 收敛，且}$$

$$d(f^n(x),f^n(y)) \leq a_n\,d(x,y) \quad (n \geq 1,\;x,y \in X),$$

其中 $f^{n+1}(x) = f(f^n(x))$，$f^1(x) = f(x)$，$d(x,y)$ 表示空间中 $x,y$ 两点的距离。证明：$f(x)$ 在 $X$ 内有唯一的一点 $\xi$，使得 $f(\xi) = \xi$。（吉林工业大学）

> [!hint]- 提示
> 取 $x_1 = f(x)$，$x_{n+1} = f(x_n)$（$n = 1,2,\cdots$），证明 $\{x_n\}$ 是 Cauchy 序列。

**6.4.8**  设函数 $f(x)$ 当 $a < x < b$ 时连续，并且函数 $\varphi(y)$ 当 $c < y < d$ 时单调增加而且连续。问在怎样的条件下，方程 $\varphi(y) = f(x)$ 定义出单值的函数 $y = \varphi^{-1}[f(x)]$？研究例子：

1）$\sin y + \operatorname{sh} y = x$；$\qquad$ 2）$e^{-y} = -\sin^2 x$。

**6.4.9**  设

$$x = y + \varphi(y), \tag{1}$$

其中 $\varphi(0) = 0$，且当 $-a < y < a$ 时 $\varphi'(y)$ 连续并满足 $|\varphi'(y)| \leq k < 1$。证明：存在 $\delta > 0$，当 $-\delta < x < \delta$ 时存在唯一的可微函数 $y(x)$ 满足方程（1），且 $y(0) = 0$。

**6.4.10**  方程 $xy + z\ln y + e^{xz} = 1$ 在点 $(0,1,1)$ 的邻域内能否确定出某一变量为另两个变量的函数？

**6.4.11**  设 $y = y(x)$ 是方程 $x = ky + \varphi(y)$ 所定义的隐函数，其中常数 $k \neq 0$，$\varphi(y)$ 为以 $\omega$ 为周期的周期函数，且 $|\varphi'(y)| < |k|$。证明：$y = \dfrac{x}{k} + \psi(x)$，其中 $\psi(x)$ 是以 $|k|\omega$ 为周期的周期函数。

> [!proof]- 证
> **1°** 原始方程改写为
>
> $$F(x,y) = ky + \varphi(y) - x = 0. \tag{1}$$
>
> i）按题意，$y = y(x)$ 是该方程确定的隐函数，因此 $(x,y) = (x,y(x))$ 满足方程（1）。
>
> ii）又已知 $\varphi(y)$ 有导数，当然 $\varphi(y)$ 连续，由式（1）知 $F(x,y)$ 是二元连续函数。
>
> iii）对式（1）求导，得
>
> $$|F'_y(x,y)| = |k + \varphi'(y)| > \bigl||k| - |\varphi'(y)|\bigr| > 0 \quad(\text{因为 } |\varphi'(y)| < |k|).$$
>
> 故隐函数存在定理的条件满足，说明 $y = y(x)$ 不仅是隐函数，而且此方程的隐函数是唯一的。
>
> **2°** 将隐函数 $y = y(x)$ 写为 $y = \dfrac{x}{k} + \psi(x)$，即假定
>
> $$\psi(x) = y - \frac{x}{k}. \tag{2}$$
>
> 将式（2）代入方程（1），得
>
> $$k\psi(x)+\varphi\!\left(\frac{x}{k}+\psi(x)\right)=0 \quad (\forall x\in \mathbb{R}). \tag{3}$$
>
> 用 $x+|k|\omega$ 替代（3）中的 $x$，得
>
> $$k\psi\!\left(x+|k|\omega\right)+\varphi\!\left(\frac{x+|k|\omega}{k}+\psi\!\left(x+|k|\omega\right)\right)=0. \tag{4}$$
>
> 因 $\varphi(y)$ 以 $\omega$ 为周期，故
>
> $$
> \varphi\!\left(\frac{x+|k|\omega}{k}+\psi\!\left(x+|k|\omega\right)\right)
> =\varphi\!\left(\frac{x}{k}\pm\omega+\psi\!\left(x+|k|\omega\right)\right)
> =\varphi\!\left(\frac{x}{k}+\psi\!\left(x+|k|\omega\right)\right).
> $$
>
> 因而式（4）可写为
>
> $$k\psi\!\left(x+|k|\omega\right)+\varphi\!\left(\frac{x}{k}+\psi\!\left(x+|k|\omega\right)\right)=0. \tag{5}$$
>
> 此式表明 $\psi\!\left(x+|k|\omega\right)$ 也满足方程（3），从而 $y_1(x)\doteq \dfrac{x}{k}+\psi\!\left(x+|k|\omega\right)$ 也满足方程（1）。（因为将 $y_1(x)=\dfrac{x}{k}+\psi\!\left(x+|k|\omega\right)$ 代入方程（1），即得式（5），说明 $y_1(x)$ 也是方程（1）的解。）但上面已证 $y=y(x)$ 是方程（1）的解且是唯一解，故 $y_1(x)=y(x)\;(\forall x\in \mathbb{R})$。因此
>
> $$\psi\!\left(x+|k|\omega\right)=\psi(x) \quad (\forall x\in \mathbb{R}).$$
>
> 亦即表明 $|k|\omega$ 是 $\psi(x)$ 的周期。证毕。

**6.4.12**  设 $x\in \mathbb{R}^n$，$y\in \mathbb{R}^m$，$F(x,y)\in \mathbb{R}^m$，$F$ 有连续偏导数，$F=(F_1,F_2,\cdots,F_m)$，Jacobi 行列式

$$
\frac{\partial(F_1,F_2,\cdots,F_m)}{\partial(y_1,y_2,\cdots,y_m)}\neq 0,\quad y=y(x)=(y_1(x),y_2(x),\cdots,y_m(x))\text{ 是方程 }F(x,y)=0\text{ 的隐函数。}
$$

1）证明：

$$
Dy(x)=-[D_yF(x,y)]^{-1}D_xF(x,y),
$$

其中 $Dy(x)$，$D_yF(x,y)$，$D_xF(x,y)$ 为矩阵：

$$
Dy(x)=
\begin{pmatrix}
(y_1)'_{x_1} & (y_1)'_{x_2} & \cdots & (y_1)'_{x_n} \\
(y_2)'_{x_1} & (y_2)'_{x_2} & \cdots & (y_2)'_{x_n} \\
\vdots & \vdots & \ddots & \vdots \\
(y_m)'_{x_1} & (y_m)'_{x_2} & \cdots & (y_m)'_{x_n}
\end{pmatrix},
$$

$$
D_xF(x,y)=
\begin{pmatrix}
(F_1)'_{x_1} & (F_1)'_{x_2} & \cdots & (F_1)'_{x_n} \\
(F_2)'_{x_1} & (F_2)'_{x_2} & \cdots & (F_2)'_{x_n} \\
\vdots & \vdots & \ddots & \vdots \\
(F_m)'_{x_1} & (F_m)'_{x_2} & \cdots & (F_m)'_{x_n}
\end{pmatrix},
$$

$$
D_yF(x,y)=
\begin{pmatrix}
(F_1)'_{y_1} & (F_1)'_{y_2} & \cdots & (F_1)'_{y_m} \\
(F_2)'_{y_1} & (F_2)'_{y_2} & \cdots & (F_2)'_{y_m} \\
\vdots & \vdots & \ddots & \vdots \\
(F_m)'_{y_1} & (F_m)'_{y_2} & \cdots & (F_m)'_{y_m}
\end{pmatrix};
$$

2）证明：当 $n=m$ 时，Jacobi 行列式

$$
\frac{\partial(y_1,y_2,\cdots,y_n)}{\partial(x_1,x_2,\cdots,x_n)}
= (-1)^n\frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(x_1,x_2,\cdots,x_n)}
\Big/\frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(y_1,y_2,\cdots,y_n)}.
$$

**6.4.13**  设 $(x_1,x_2,\cdots,x_n)$ 与 $(r,\theta_1,\cdots,\theta_{n-1})$ 为 $\mathbb{R}^n$ 中的直角坐标与球坐标：

$$
\begin{aligned}
 x_1&=r\cos\theta_1,\\
 x_2&=r\sin\theta_1\cos\theta_2,\\
 x_3&=r\sin\theta_1\sin\theta_2\cos\theta_3,\\
 &\cdots\cdots\cdots\\
 x_{n-1}&=r\sin\theta_1\sin\theta_2\cdots\sin\theta_{n-2}\cos\theta_{n-1},\\
 x_n&=r\sin\theta_1\cdots\sin\theta_{n-1}.
\end{aligned}
$$

1）证明：

$$
\begin{aligned}
F_1&\equiv r^2-(x_1^2+x_2^2+\cdots+x_n^2)=0,\\
F_2&\equiv r^2\sin^2\theta_1-(x_2^2+\cdots+x_n^2)=0,\\
&\cdots\cdots\cdots\\
F_n&\equiv r^2\sin^2\theta_1\cdots\sin^2\theta_{n-1}-x_n^2=0;
\end{aligned}
$$

2）利用上题最后结果计算 Jacobi 行列式

$$
\frac{\partial(x_1,x_2,\cdots,x_n)}{\partial(r,\theta_1,\cdots,\theta_{n-1})}.
$$

> [!hint]- 提示
> 1）$F_n=0$ 明显；再顺次证明：$F_{n-1}=0$，$F_{n-2}=0$，$\cdots$，直至最后 $F_1=0$。
>
> 2）应用上题结论 2）：
>
> $$
> \frac{\partial(x_1,x_2,\cdots,x_n)}{\partial(r,\theta_1,\cdots,\theta_{n-1})}
> = (-1)^n\frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(r,\theta_1,\cdots,\theta_{n-1})}
> \Big/\frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(x_1,x_2,\cdots,x_n)},
> $$
>
> 而
>
> $$
> \frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(r,\theta_1,\cdots,\theta_{n-1})}
> =2^n r^{2n-1}\sin^{2n-3}\theta_1\sin^{2n-5}\theta_2\cdots\sin^3\theta_{n-2}\sin\theta_{n-1}\cos\theta_1\cdots\cos\theta_{n-1}.
> $$
>
> （注意：这里 $F_k$（$k=1,2,\cdots,n$）对 $r,\theta_1,\cdots,\theta_{n-1}$ 求导时，$F_k$ 中的 $x_1,x_2,\cdots,x_n$ 被固定；同样地，下面 $F_k$ 对 $x_1,x_2,\cdots,x_n$ 求导时，$r,\theta_1,\cdots,\theta_{n-1}$ 也被固定。）
>
> $$
> \frac{\partial(F_1,F_2,\cdots,F_n)}{\partial(x_1,x_2,\cdots,x_n)}
> = (-1)^n 2^n x_1x_2\cdots x_n
> = (-1)^n 2^n r^n\sin^{n-1}\theta_1\sin^{n-2}\theta_2\cdots\sin\theta_{n-1}\cos\theta_1\cos\theta_2\cdots\cos\theta_{n-1}.
> $$
>
> 所以
>
> $$
> \frac{\partial(x_1,x_2,\cdots,x_n)}{\partial(r,\theta_1,\cdots,\theta_{n-1})}
> = (-1)^n r^{n-1}\sin^{n-2}\theta_1\sin^{n-3}\theta_2\cdots\sin\theta_{n-2}.
> $$

**6.4.14**  设 $\varphi(x,y)$ 为 $\mathbb{R}^2$ 中有二阶连续偏导数的二次齐次函数：$\varphi(tx,ty)=t^2\varphi(x,y)$。

1）证明：$\varphi'_x=x\varphi''_{xx}+y\varphi''_{xy};\quad \varphi'_y=x\varphi''_{xy}+y\varphi''_{yy}$；

2）设

$$
\left|\begin{matrix}
\varphi''_{xx} & \varphi''_{xy}\\
\varphi''_{yx} & \varphi''_{yy}
\end{matrix}\right|\neq 0,
$$

证明：令 $u=\varphi'_x(x,y)$，$v=\varphi'_y(x,y)$ 时，函数 $\varphi(x,y)$ 可变成 $\psi(u,v)$ 的形式；

3）证明：$\psi'_u=x$，$\psi'_v=y$；

4）试将此结果推广到 $\mathbb{R}^n$ 空间。

> [!hint]- 提示
> 1）恒等式 $\varphi(tx,ty)=t^2\varphi(x,y)$ 对 $t$ 求导得
>
> $$x\varphi'_x(tx,ty)+y\varphi'_y(tx,ty)=2t\varphi(x,y).$$
>
> 令 $t=1$，仍是 $(x,y)$ 的恒等式。再对 $x$ 求偏导，即得
>
> $$\varphi'_x=x\varphi''_{xx}+y\varphi''_{xy}. \tag{1}$$
>
> 类似地，有
>
> $$\varphi'_y=x\varphi''_{xy}+y\varphi''_{yy}. \tag{2}$$
>
> 2）$u=\varphi'_x(x,y)\doteq f(x,y)$，$v=\varphi'_y(x,y)\doteq g(x,y)$，则
>
> $$\left|\frac{\partial(f,g)}{\partial(x,y)}\right|\neq 0.$$
>
> 根据方程隐函数存在定理，存在反函数：$x=x(u,v)$，$y=y(u,v)$。因此
>
> $$\varphi(x,y)=\varphi(x(u,v),y(u,v))\doteq \psi(u,v).$$
>
> 3）将反函数代入原式
>
> $$
> \begin{cases}
>  u=\varphi'_x(x(u,v),y(u,v)),\\
>  v=\varphi'_y(x(u,v),y(u,v)),
> \end{cases}
> $$
>
> 是关于 $u,v$ 的（两个）恒等式。固定 $v$，对 $u$ 求偏导，得到关于 $x'_u$ 和 $y'_u$ 的方程组：
>
> $$
> \begin{cases}
> 1=\varphi''_{xx}x'_u+\varphi''_{xy}y'_u,\\
> 0=\varphi''_{yx}x'_u+\varphi''_{yy}y'_u.
> \end{cases}
> $$
>
> $x\times(3)+y\times(4)$ 得
>
> $$x=(x\varphi''_{xx}+y\varphi''_{xy})x'_u+(x\varphi''_{xy}+y\varphi''_{yy})y'_u
> =\varphi'_x x'_u+\varphi'_y y'_u.$$
>
> 于是
>
> $$\psi'_u(u,v)=\frac{\partial}{\partial u}\varphi(x(u,v),y(u,v))=\varphi'_x x'_u+\varphi'_y y'_u=x.$$
>
> 类似可证：$\psi'_v(u,v)=y$。
>
> 4）（推广到多元）设 $\varphi(x_1,x_2,\cdots,x_n)$ 是 $\mathbb{R}^n$ 中有直到二阶连续偏导数的二次齐次函数：
>
> $$\varphi(tx_1,tx_2,\cdots,tx_n)=t^2\varphi(x_1,x_2,\cdots,x_n),$$
>
> 则
>
> $$\varphi'_{x_i}=\sum_{j=1}^{n}x_j(\varphi'_{x_i})'_{x_j}\quad (i=1,2,\cdots,n).$$
>
> 若
>
> $$\left|\frac{\partial(\varphi'_{x_1},\varphi'_{x_2},\cdots,\varphi'_{x_n})}{\partial(x_1,x_2,\cdots,x_n)}\right|\neq 0,$$
>
> 则 $u_i=\varphi'_{x_i}(x_1,x_2,\cdots,x_n)\;(i=1,2,\cdots,n)$ 有反函数：
>
> $$x_i=x_i(u_1,u_2,\cdots,u_n)\quad (i=1,2,\cdots,n).$$
>
> 将 $\varphi(x_1,x_2,\cdots,x_n)=\varphi(x_1(u_1,u_2,\cdots,u_n),\cdots,x_n(u_1,u_2,\cdots,u_n))$ 记为 $\psi(u_1,u_2,\cdots,u_n)$，则有
>
> $$\psi'_{u_i}(u_1,u_2,\cdots,u_n)=x_i\quad (i=1,2,\cdots,n).$$

**6.4.15**  设

$$
\Delta=\left|\begin{matrix}a & b & d\\ b & c & e\\ d & e & f\end{matrix}\right|\neq 0.
$$

证明：对于二次曲线 $ax^2+2bxy+cy^2+2dx+2ey+f=0$，有如下等式成立：

$$\frac{d^3}{dx^3}\!\left[(y'')^{-\frac{2}{3}}\right]=0.$$

> [!hint]- 提示
> 已知 $\Delta\neq 0$，用隐函数微分法：将 $y$ 看成原方程定义的（关于 $x$ 的）函数（代回方程，则方程变成恒等式），对 $x$ 求导，再除以 $2$（以消掉公因子 $2$），得
>
> $$ax+by+bxy'+cyy'+d+ey'=0. \tag{1}$$
>
> 得
>
> $$y'=-\frac{ax+by+d}{bx+cy+e}. \tag{2}$$
>
> 在式（1）中再对 $x$ 求一次导，得
>
> $$a+2by'+c(y')^2+(bx+cy+e)y''=0. \tag{3}$$
>
> 解出 $y''$，并用（2）代入 $y'$：
>
> $$
> \begin{aligned}
> y''&=-\frac{1}{(bx+cy+e)^3}\Bigl[a(bx+cy+e)^2-2b(ax+by+d)(bx+cy+e)+c(ax+by+d)^2\Bigr] \\[4pt]
> &=-\frac{1}{(bx+cy+e)^3}\Bigl[(ax^2+2bxy+cy^2+2dx+2ey)(ac-b^2)+ae^2-2bed+cd^2\Bigr].
> \end{aligned}
> $$
>
> 利用原始方程，得
>
> $$y''=-\frac{1}{(bx+cy+e)^3}\Bigl[(-f)(ac-b^2)+ae^2-2bed+cd^2\Bigr]=\frac{\Delta}{(bx+cy+e)^3}.$$
>
> 原始方程可写为
>
> $$cy^2+2bxy+2ey=-(ax^2+2dx+f). \tag{4}$$
>
> 利用式（4），可将 $(y'')^{-\frac{2}{3}}$ 写成 $x$ 的二次函数（如下）：
>
> $$
> \begin{aligned}
> (y'')^{-\frac{2}{3}}&=\Delta^{-\frac{2}{3}}(bx+cy+e)^2 \\
> &=\Delta^{-\frac{2}{3}}\Bigl[b^2x^2+c^2y^2+e^2+2(bx\cdot cy+cy\cdot e+ebx)\Bigr] \\
> &=\Delta^{-\frac{2}{3}}\Bigl[b^2x^2+e^2+2ebx+c(cy^2+2bxy+2ey)\Bigr] \\
> &\stackrel{\text{式(4)}}{=}\Delta^{-\frac{2}{3}}\Bigl[b^2x^2+e^2+2ebx-c(ax^2+2dx+f)\Bigr].
> \end{aligned}
> $$
>
> 该式是 $x$ 的二次函数。可见：$(y'')^{-\frac{2}{3}}$ 对 $x$ 的三阶导数必为 $0$。证毕。

> [!note]- 注
> 每次求导之后，其变量仍然满足原方程，常常可用原方程化简计算结果。若忘记这一点，有些题目很难得到欲求的结果，本题很典型。

**6.4.16**  设

$$e^{u/x}\cos\frac{v}{y}=\frac{x}{\sqrt 2},\qquad e^{u/x}\sin\frac{v}{y}=\frac{y}{\sqrt 2}.$$

求 $du$，$dv$，$d^2u$ 和 $d^2v$ 在 $x=1$，$y=1$，$u=0$，$v=0$ 时的表达式。

$$\left\{du=\frac{dx+dy}{2},\ dv=dy-dx,\ d^2u=(dx)^2,\ d^2v=2(dy-dx)^2\right\}$$

> [!hint]- 提示
> （小窍门：动手之前，先想想算式能不能简化；微分之后不忙整理，代入数字变简单后再整理；若分母能去掉，尽量先去分母。这里先将算式化简：）
>
> 两式平方和：
>
> $$e^{\frac{2u}{x}}=\frac{x^2+y^2}{2}. \tag{1}$$
>
> 两式相除：
>
> $$\tan\frac{v}{y}=\frac{y}{x}. \tag{2}$$

> [!hint]- 再提示
> **1°** 对式（1）微分：
>
> $$e^{\frac{2u}{x}}\!\left(\frac{2(x\,du-u\,dx)}{x^2}\right)=x\,dx+y\,dy. \tag{3}$$
>
> 在式（3）中令 $x=y=1$，$u=0$，得
>
> $$du\big|_{x=y=1,\,u=0}=\frac{dx+dy}{2}. \tag{4}$$
>
> （下面求二阶微分 $d^2u$。）将式（3）写为
>
> $$2e^{\frac{2u}{x}}(x\,du-u\,dx)=x^3dx+x^2y\,dy,$$
>
> 对此式两端同时求微分，得
>
> $$2e^{\frac{2u}{x}}\!\left[\frac{2(x\,du-u\,dx)^2}{x^2}+x\,d^2u\right]=3x^2(dx)^2+2xy\,dx\,dy+x^2(dy)^2.$$
>
> 代入 $x=y=1$，$u=0$，并注意式（4），得 $d^2u\big|_{x=y=1,\,u=0}=(dx)^2$。
>
> **2°** 由式（2）：$\displaystyle\tan\frac{v}{y}=\frac{y}{x}$，得
>
> $$\frac{1}{\cos^2\frac{v}{y}}\,\frac{y\,dv-v\,dy}{y^2}=\frac{x\,dy-y\,dx}{x^2},$$
>
> 即
>
> $$x^2(y\,dv-v\,dy)=y^2\cos^2\frac{v}{y}\,(x\,dy-y\,dx). \tag{5}$$
>
> 在式（5）中令 $x=y=1$，$v=0$，得
>
> $$dv\big|_{x=y=1,\,v=0}=dy-dx. \tag{6}$$
>
> （为了求在给定点的二阶微分，考虑式（5）比较复杂，先分别对式（5）两端求微分，并用 $x=y=1$，$v=0$ 代入，然后将两结果列为等式，解出 $d^2v\big|_{x=y=1,\,v=0}$）
>
> $$
> \begin{aligned}
> d\!\left[x^2(y\,dv-v\,dy)\right]\Big|_{x=y=1,\,v=0}
> &=\bigl[2x\,dx(y\,dv-v\,dy)+x^2(dy\,dv+y\,d^2v-dv\,dy)\bigr]\Big|_{x=y=1,\,v=0} \\
> &=2dx\,dv+d^2v. \tag{7}
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> &d\!\left[y^2\cos^2\frac{v}{y}(x\,dy-y\,dx)\right]\Big|_{x=y=1,\,v=0} \\
> =&\Bigl\{2y\,dy\cos^2\frac{v}{y}(x\,dy-y\,dx)
> +y^2\cdot 2\cos\frac{v}{y}\cdot\!\left(-\sin\frac{v}{y}\right)\frac{y\,dv-v\,dy}{y^2}(x\,dy-y\,dx) \\
> &\qquad +y^2\cos^2\frac{v}{y}(dx\,dy-dy\,dx)\Bigr\}\Big|_{x=y=1,\,v=0} \\[4pt]
> =&\;2dy\cdot 1\cdot(dy-dx)+0+0=2\bigl[(dy)^2-dx\,dy\bigr]. \tag{8}
> \end{aligned}
> $$
>
> 再令式（7）与式（8）相等，即 $2dx\,dv+d^2v=2\bigl[(dy)^2-dx\,dy\bigr]$，亦即
>
> $$d^2v=2(dy)^2-2dx\,dy-2dx\,dv \;\stackrel{\text{式(6)}}{=}\;2(dy)^2-2dx\,dy-2dx(dy-dx).$$
>
> 故
>
> $$d^2v\big|_{x=y=1,\,v=0}=2(dy-dx)^2.$$

**6.4.17**  函数 $u=u(x)$ 由方程组 $u=f(x,y,z)$，$g(x,y,z)=0$，$h(x,y,z)=0$ 定义，求 $\displaystyle\frac{du}{dx}$。

$$
\begin{cases}
\displaystyle\frac{du}{dx}=f'_x+f'_y\frac{dy}{dx}+f'_z\frac{dz}{dx};\\[12pt]
y'_x=\dfrac{K}{J},\;z'_x=\dfrac{L}{J},\text{ 其中 } J=\dfrac{\partial(g,h)}{\partial(y,z)},\;K=\dfrac{\partial(g,h)}{\partial(z,x)},\;L=\dfrac{\partial(g,h)}{\partial(x,y)}.
\end{cases}
$$

> [!hint]- 提示
> 因 $u=u(x)$ 是复合函数：$u=f(x,y(x),z(x))$，$y=y(x)$，$z=z(x)$，其中出现的 $\displaystyle\frac{dy}{dx}$ 和 $\displaystyle\frac{dz}{dx}$ 可从后两个方程对 $x$ 求导得。

> [!hint]- 再提示
> **1°** 对 $u=f(x,y(x),z(x))$ 求导，得
>
> $$\frac{du}{dx}=f'_x+f'_y y'_x+f'_z z'_x. \tag{1}$$
>
> **2°**（对后两式求导。）
>
> $$g'_x+g'_y y'_x+g'_z z'_x=0,\qquad h'_x+h'_y y'_x+h'_z z'_x=0. \tag{2}$$
>
> 记
>
> $$
> J=\left|\begin{matrix}g'_y & g'_z\\ h'_y & h'_z\end{matrix}\right|=\frac{\partial(g,h)}{\partial(y,z)},\quad
> K=\left|\begin{matrix}g'_z & g'_x\\ h'_z & h'_x\end{matrix}\right|=\frac{\partial(g,h)}{\partial(z,x)},\quad
> L=\left|\begin{matrix}g'_x & g'_y\\ h'_x & h'_y\end{matrix}\right|=\frac{\partial(g,h)}{\partial(x,y)}.
> $$
>
> 解方程组（2），可得
>
> $$y'_x=\frac{K}{J},\qquad z'_x=\frac{L}{J}. \tag{3}$$
>
> 以式（3）代入（1）：
>
> $$\frac{du}{dx}=f'_x+\frac{K}{J}f'_y+\frac{L}{J}f'_z.$$

**6.4.18**  设一对一变换 $T\colon\begin{cases}x=x(u,v),\\ y=y(u,v)\end{cases}$ 在 $D$ 上具有连续的偏导数 $x'_u$，$x'_v$，$y'_u$，$y'_v$，且行列式

$$\frac{\partial(x,y)}{\partial(u,v)}\neq 0,$$

则 $T$ 将 $uv$ 平面上由分段光滑闭曲线围成的闭区域 $D$ 变为 $xy$ 平面上相应闭区域 $D'$，且其边界也是分段光滑的闭曲线。（陕西师范大学）

**6.4.19**  $f_1(x),\cdots,f_n(x)$ 是定义在 $[a,b]$ 上的连续函数，证明 $f_1(x),\cdots,f_n(x)$ 线性无关的充分条件是行列式 $\det(\alpha_{ij})\neq 0$，其中 $\displaystyle\alpha_{ij}=\int_a^b f_i(x)f_j(x)\,dx$。

> [!hint]- 提示
> 要证明：「若 $\det(\alpha_{ij})\neq 0$，则 $\{f_i(x)\}_{i=1}^n$ 在 $[a,b]$ 上线性无关。」
>
> 反证法：「假设 $\{f_i(x)\}_{i=1}^n$ 在 $[a,b]$ 上线性相关，则必导致 $\det(\alpha_{ij})=0$。」

> [!hint]- 再提示
> 若 $\{f_i(x)\}_{i=1}^n$ 线性相关，意即：存在不全为 $0$ 的实数 $\{b_i\}_{i=1}^n$ 使得
>
> $$\sum_{i=1}^n b_i f_i(x)=0 \quad (\forall x\in[a,b]). \tag{1}$$
>
> 于是
>
> $$\sum_{i=1}^n b_i f_i(x)f_j(x)=0 \quad (\forall x\in[a,b])\;(j=1,2,\cdots,n).$$
>
> 进而有
>
> $$\sum_{i=1}^n b_i \int_a^b f_i(x)f_j(x)\,dx=0 \quad (j=1,2,\cdots,n). \tag{2}$$
>
> 此即有不全为 $0$ 的 $\{b_i\}_{i=1}^n$ 满足式（2），说明：齐次线性方程组（2）有非零解，故系数行列式：
>
> $$\det\!\bigl((\int_a^b f_i(x)f_j(x)\,dx)_{n\times n}\bigr)=0,$$
>
> 矛盾。

**6.4.20**  证明：若一元函数组 $\varphi_1(x),\varphi_2(x),\cdots,\varphi_n(x)$ 在区间 $(a,b)$ 线性相关，则（出现的各阶导数都存在）

$$
\begin{vmatrix}
\varphi_1(x) & \varphi_2(x) & \cdots & \varphi_n(x) \\
\varphi'_1(x) & \varphi'_2(x) & \cdots & \varphi'_n(x) \\
\vdots & \vdots & & \vdots \\
\varphi_1^{(n-1)}(x) & \varphi_2^{(n-1)}(x) & \cdots & \varphi_n^{(n-1)}(x)
\end{vmatrix}
=0 \quad (x\in(a,b)).
$$

> [!hint]- 提示
> 可用上题类似的方法。

> [!hint]- 再提示
> 如果 $\{\varphi_k(x)\}_{k=1}^n$ 线性相关，则存在不全为零的常数组 $\{a_k\}_{k=1}^n$ 使得 $\sum_{k=1}^n a_k\varphi_k(x)\equiv 0$。
>
> 两端同时对 $x$ 求 $1$ 至 $(n-1)$ 阶导数，得 $n$ 个关于 $\{a_k\}_{k=1}^n$ 的一次齐次线性方程组：
>
> $$\sum_{k=1}^n a_k\varphi_k(x)\equiv 0,\quad
> \sum_{k=1}^n a_k\varphi'_k(x)\equiv 0,\quad
> \sum_{k=1}^n a_k\varphi''_k(x)\equiv 0,\;\cdots,\;
> \sum_{k=1}^n a_k\varphi_k^{(n-1)}(x)\equiv 0.$$
>
> 因 $\{a_k\}_{k=1}^n$（不全为 $0$）满足方程组，说明该方程组有非零解，（根据代数方程的理论）其系数行列式应为零，即欲求的等式成立。

**6.4.21**  证明：$x=r\cos\theta\cos\varphi$，$y=r\cos\theta\sin\varphi$，$z=r\sin\theta$ 函数独立（即函数无关）。

> [!hint]- 提示
> （利用定理 2。）因此时 Jacobi 行列式：
>
> $$|J|=\left|\frac{\partial(x,y,z)}{\partial(r,\theta,\varphi)}\right|=|r^2\cos\theta|\neq 0,$$
>
> 故函数独立。

**6.4.22**  讨论下列函数的相关性：

1）$\displaystyle\frac{x-y}{x-z},\;\frac{y-z}{y-x},\;\frac{z-x}{z-y}$；

2）$\displaystyle\frac{x}{1-x-y-z},\;\frac{y}{1-x-y-z},\;\frac{z}{1-x-y-z}$。

> [!hint]- 提示
> （利用定理 2。）
>
> 1）函数无关，因为
>
> $$
> J=
> \begin{vmatrix}
> \dfrac{y-z}{(x-z)^2} & \dfrac{z-x}{(x-z)^2} & \dfrac{x-y}{(x-z)^2} \\[8pt]
> \dfrac{y-z}{(y-x)^2} & \dfrac{z-x}{(y-x)^2} & \dfrac{x-y}{(y-x)^2} \\[8pt]
> \dfrac{y-z}{(z-y)^2} & \dfrac{z-x}{(z-y)^2} & \dfrac{x-y}{(z-y)^2}
> \end{vmatrix}
> =\frac{(x-y)(y-z)(z-x)}{(x-y)^2(y-z)^2(z-x)^2}
> =\frac{1}{(x-y)(y-z)(z-x)}\neq 0.
> $$
>
> 2）函数无关，因为 $J=\dfrac{1}{(1-x-y-z)^4}\neq 0$。
>
> $$
> \begin{aligned}
> J&=\frac{1}{(1-x-y-z)^6}
> \begin{vmatrix}
> 1-y-z & x & x \\
> y & 1-x-z & y \\
> z & z & 1-x-y
> \end{vmatrix} \\[8pt]
> &\text{（第 3 列乘 $-1$，分别加到第 1 列和第 2 列）} \\[4pt]
> &=\frac{1}{(1-x-y-z)^6}
> \begin{vmatrix}
> 1-x-y-z & 0 & x \\
> 0 & 1-x-y-z & y \\
> -(1-x-y-z) & -(1-x-y-z) & 1-x-y
> \end{vmatrix} \\[8pt]
> &\text{（第 1 行和第 2 行求和加到第 3 行）} \\[4pt]
> &=\frac{1}{(1-x-y-z)^6}
> \begin{vmatrix}
> 1-x-y-z & 0 & x \\
> 0 & 1-x-y-z & y \\
> 0 & 0 & 1
> \end{vmatrix}
> =\frac{1}{(1-x-y-z)^4}\neq 0.
> \end{aligned}
> $$

**6.4.23**  设函数组

$$\begin{cases}
u=u(x,y),\\
v=v(x,y),
\end{cases}$$

$(x,y)\in\mathbb{R}^2$ 中的函数 $u,v$ 有处处连续的一阶偏导数，记 $W=(u,v)$，$P=(x,y)$，当 $|W|=\sqrt{u^2+v^2}$，$|P|=\sqrt{x^2+y^2}$ 时，存在数 $C>0$，使得对于任意的 $P_1\in\mathbb{R}^2$，$P_2\in\mathbb{R}^2$，成立不等式

$$|W_2-W_1|\geq C|P_2-P_1|,$$

这里 $W_i$ 为与 $P_i$ 相对应的点（$i=1,2$），试证：Jacobi 行列式 $\displaystyle\frac{\partial(u,v)}{\partial(x,y)}\neq 0$，$\forall(x,y)\in\mathbb{R}^2$。（武汉大学）

> [!hint]- 提示
> 如果在某个点 $P_1$ 处，Jacobi 行列式 $\displaystyle\left.\frac{\partial(u,v)}{\partial(x,y)}\right|_{P_1}=0$，那么当 $W_2=W_1$ 时，二元一次联立方程组
>
> $$
> \begin{aligned}
> u'_x(P_1)\cdot(x_2-x_1)+u'_y(P_1)\cdot(y_2-y_1)&=u(P_2)-u(P_1)=0,\\
> v'_x(P_1)\cdot(x_2-x_1)+v'_y(P_1)\cdot(y_2-y_1)&=v(P_2)-v(P_1)=0
> \end{aligned}
> $$
>
> 应有非零解。换句话说：存在 $P_2\neq P_1$ 使得 $W_2=W_1$，这与已知条件 $|W_2-W_1|\geq C|P_2-P_1|$ 矛盾。故不可能！

> [!hint]- 再提示
> 设 $P_k=(x_k,y_k)$（$k=1,2$），
>
> $$P(t)=P_1+t(P_2-P_1)=(x_1+t(x_2-x_1),\,y_1+t(y_2-y_1)),$$
>
> 则 $P(0)=P_1=(x_1,y_1)$，$P(1)=P_2=(x_2,y_2)$。
>
> 令 $W(t)=(U(t),V(t))=(u(P(t)),v(P(t)))$，作辅助函数
>
> $$F(t)=t(W(1)-W(0))-W(t),$$
>
> 则 $F(0)=F(1)$，
>
> $$W^2(t)=U^2(x_1+t(x_2-x_1),y_1+t(y_2-y_1))+V^2(x_1+t(x_2-x_1),y_1+t(y_2-y_1)).$$
>
> 若记 $W_k=(U_k,V_k)=(U(P_k),V(P_k))=(U(x_k,y_k),V(x_k,y_k))$（$k=1,2$），那么 $W(0)=W_1$，$W(1)=W_2$。根据条件：$|W_2-W_1|\geq C|P_2-P_1|$ 知：当 $W_2=W_1$ 时，有 $P_2=P_1$。应用 Lagrange 定理，$\exists\,\xi\in(0,1)$，使得
>
> $$W^2(1)-W^2(0)=u'_{\xi}(1-0)=2WW'(\xi)(1-0)=0,$$
>
> $$W'_i(\xi)=(u(P(t)),v(P(t)))'_i|_{t=\xi}=0,$$
>
> $$
> \begin{aligned}
> 0=U(1)-U(0)&=u'(P(\xi))(1-0)=u'_x(P(\xi))(x_2-x_1)+u'_y(P(\xi))(y_2-y_1), \tag{1}\\
> 0=V(1)-V(0)&=v'(P(\xi))(1-0)=v'_x(P(\xi))(x_2-x_1)+v'_y(P(\xi))(y_2-y_1), \tag{2}
> \end{aligned}
> $$
>
> 其中 $P(\xi)$ 表示 $(\xi x_2+(1-\xi)x_1,\,\xi y_2+(1-\xi)y_1)$（$0<\xi<1$）。
>
> 把方程（1），（2）看成是关于 $(x_2-x_1)$ 和 $(y_2-y_1)$ 的一次线性方程组。亦即：方程（1），（2）左端为 $0$ 时，右端 $(x_2-x_1)$ 和 $(y_2-y_1)$ 必为零，也就等于说，一次齐次线性方程组只有零解，故系数行列式
>
> $$
> \begin{vmatrix}
> u'_x(P(\xi)) & u'_y(P(\xi)) \\
> v'_x(P(\xi)) & v'_y(P(\xi))
> \end{vmatrix}
> =\left.\frac{\partial(u,v)}{\partial(x,y)}\right|_{P(\xi)}\neq 0
> $$
>
> （题设 Jacobi 行列式 $\displaystyle\frac{\partial(u,v)}{\partial(x,y)}\neq 0$）。

**6.4.24**  设 $u=u(x,y,z)$，$v=v(x,y,z)$，$x=x(s,t)$，$y=y(s,t)$，$z=z(s,t)$ 都有连续一阶偏导数，证明行列式

$$
\frac{\partial(u,v)}{\partial(s,t)} = 
\frac{\partial(u,v)}{\partial(x,y)}\,\frac{\partial(x,y)}{\partial(s,t)} + 
\frac{\partial(u,v)}{\partial(y,z)}\,\frac{\partial(y,z)}{\partial(s,t)} + 
\frac{\partial(u,v)}{\partial(z,x)}\,\frac{\partial(z,x)}{\partial(s,t)}.
$$

> [!hint]- 提示
> 展开后，右边多三项，但此三项为零。

**6.4.25**  设 $F(x,y)=x^2y^3+|x|y+y-5$。

1）证明方程 $F(x,y)=0$ 在 $(-\infty,+\infty)$ 上确定唯一的隐函数 $y=f(x)$；

2）求 $y=f(x)$ 的极值。（北京大学）

> [!hint]- 提示
> 对每个固定的 $x$，$x^2y^3+|x|y+y-5=0$ 是 $y$ 的三次方程，有实根，而 $F'_y(x,y)>0$，所以实根是唯一的。（注意，由原式可看出：$y\neq 0$。）利用隐函数微分法，
>
> $$
> \begin{aligned}
> f'(x)&=-\frac{F'_x}{F'_y}=-\frac{2xy^3\pm y}{3x^2y^2+|x|+1} \\[6pt]
> &=\begin{cases}
> -\dfrac{y}{3x^2y^2+|x|+1}\,(2xy^2+1)<0, & x>0,\\[10pt]
> -\dfrac{y}{3x^2y^2+|x|+1}\,(2xy^2-1)>0, & x<0.
> \end{cases}
> \end{aligned}
> $$
>
> 所以 $f(0)=5$ 为最大值（亦极大值）。


## ☆ §6.5  方向导数与梯度

方向导数对理工科专业是重要内容。


### ☆一、方向导数的计算

**要点**　计算方向导数的基本方法如下：

1）利用定义。函数 $y=f(x)$（$x\in\mathbb{R}^n$）在点 $P(x_1,x_2,\cdots,x_n)$ 处沿单位向量 $l=(l_1,l_2,\cdots,l_n)$ 方向的方向导数定义为

$$\frac{\partial f}{\partial l}\Big|_P = \lim_{t\to 0} \frac{f(x_1+tl_1, x_2+tl_2, \cdots, x_n+tl_n)-f(x_1,x_2,\cdots,x_n)}{t}$$

$$= \frac{d}{dt} f(x_1+tl_1, x_2+tl_2, \cdots, x_n+tl_n) \Big|_{t=0}. \tag{A}$$

2）利用偏导数与方向导数的关系。若 $f$ 在 $P$ 处可微，则 $f$ 在点 $P$ 沿任意方向 $l=(\cos\alpha_1,\cos\alpha_2,\cdots,\cos\alpha_n)$ 的方向导数存在，并且

$$\frac{\partial f}{\partial l}\Big|_P = f'_{x_1}(P)\cos\alpha_1 + f'_{x_2}(P)\cos\alpha_2 + \cdots + f'_{x_n}(P)\cos\alpha_n. \tag{B}$$

3）记

$$\operatorname{grad} f(P)=(f'_{x_1}(P), f'_{x_2}(P),\cdots,f'_{x_n}(P)),$$

称为 $f(P)$ 在点 $P$ 处的梯度。若 $f(P)$ 在点 $P$ 可微，则 $f(P)$ 在点 $P$ 沿任意方向 $l=(\cos\alpha_1,\cos\alpha_2,\cdots,\cos\alpha_n)$ 的方向导数

$$\frac{\partial f}{\partial l}\Big|_P = \operatorname{grad} f(P)\cdot(\cos\alpha_1,\cos\alpha_2,\cdots,\cos\alpha_n)=\operatorname{grad}_l f(P)$$

$$= |\operatorname{grad} f(P)|\cos\theta, \tag{C}$$

其中 $\theta$ 表示 $\operatorname{grad} f(P)$ 与 $l$ 的夹角。

4）$f(P)$ 在点 $P$ 的梯度 $\operatorname{grad} f(P)$ 是一个向量。它的方向和大小如下确定：
若 $f(P)$ 在点 $P$ 可微，则对于从点 $P$ 出发的不同方向，$f(P)$ 有大小不同的方向导数（值），方向导数最大的那个方向就定为 $\operatorname{grad} f(P)$ 的方向；$f(P)$ 在点 $P$ 处最大方向导数（之值），就定为向量 $\operatorname{grad} f(P)$ 的值。

> [!example] 例 6.5.1
> 设
> $$f(x,y)=\begin{cases}
> \dfrac{xy}{\sqrt{x^2+y^2}}, & x^2+y^2\neq 0,\\[8pt]
> 0, & x^2+y^2=0,
> \end{cases}$$
> 试证 $f(x,y)$ 在 $(0,0)$ 沿任意方向的方向导数存在，但在 $(0,0)$ 处不可微。

> [!proof]- 证
> 任取方向 $l=(\cos\alpha,\sin\alpha)$，则
> $$f(t\cos\alpha,t\sin\alpha)=\begin{cases}
> t\cos\alpha\sin\alpha, & t\neq 0,\\
> 0, & t=0
> \end{cases}=t\cos\alpha\sin\alpha.$$
> 于是
> $$\frac{\partial f}{\partial l}\Big|_{(0,0)} = \frac{d}{dt} f(t\cos\alpha,t\sin\alpha)\big|_{t=0} = (t\cos\alpha\sin\alpha)'|_{t=0}=\cos\alpha\sin\alpha.$$
> 可见在 $(0,0)$ 处沿任意方向导数存在。（不可微性留给读者证明。）

> [!example] 例 6.5.2
> 证明：
> $$f(x,y)=\begin{cases}
> \dfrac{x^2y}{x^4+y^2}, & x^2+y^2\neq 0,\\[8pt]
> 0, & x^2+y^2=0
> \end{cases}$$
> 沿任意方向 $l=(\cos\alpha,\sin\alpha)$ 的方向导数为
> $$\frac{\partial f(0,0)}{\partial l} = \begin{cases}
> \dfrac{\cos^2\alpha}{\sin\alpha}, & \sin\alpha\neq 0,\\[8pt]
> 0, & \sin\alpha=0.
> \end{cases}$$

> [!proof]- 证
> $$\begin{aligned}
> \frac{\partial f(0,0)}{\partial l}
> &= \lim_{t\to 0} \frac{\dfrac{(t^2\cos^2\alpha)(t\sin\alpha)}{t^4\cos^4\alpha+t^2\sin^2\alpha} - 0}{t} \\
> &= \lim_{t\to 0} \frac{\cos^2\alpha\sin\alpha}{t^2\cos^4\alpha+\sin^2\alpha} \\
> &= \begin{cases}
> \dfrac{\cos^2\alpha}{\sin\alpha}, & \sin\alpha\neq 0,\\[8pt]
> 0, & \sin\alpha=0.
> \end{cases}
> \end{aligned}$$

> [!exercise] 练习
> 若
> $$f(x,y)=\begin{cases}
> \dfrac{x^2y}{x^4+y^2}, & x^2+y^2\neq 0,\\[8pt]
> 0, & x^2+y^2=0
> \end{cases}$$
> 在点 $(x_0,y_0)$ 沿任意方向的方向导数都存在，问 $f(x,y)$ 在点 $(x_0,y_0)$ 连续吗？回答并说明理由。（华东师范大学）

> [!hint]- 提示
> $f(x,y)$ 在原点 $(0,0)$ 沿任意方向的方向导数都存在，但 $f$ 在此点并不连续。令 $y=kx^2$，当 $x\to 0$ 时，
> $$f(x,y)=\frac{x^2y}{x^4+y^2}\Big|_{y=kx^2} \to \frac{k}{1+k^2}$$
> （不同路径极限不同）。

> [!example] 例 6.5.3
> 求 $f(x,y,z)=x^2+y^2+z^2$ 在椭球面 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} =1$ 上的点 $P(x_0,y_0,z_0)$ 的外法线方向的导数。

> [!solution]- 解
> 法向量为 $n=\left(\dfrac{2x_0}{a^2}, \dfrac{2y_0}{b^2}, \dfrac{2z_0}{c^2}\right)$，单位法向量为 $\dfrac{n}{|n|}=\dfrac{1}{|n|}\left(\dfrac{2x_0}{a^2}, \dfrac{2y_0}{b^2}, \dfrac{2z_0}{c^2}\right)$，朝外，
>
> 其中 $|n|=2\sqrt{\dfrac{x_0^2}{a^4} + \dfrac{y_0^2}{b^4} + \dfrac{z_0^2}{c^4}} \overset{\text{记}}{=}2\mu$。因此
>
> $$\begin{aligned}
> \frac{\partial f}{\partial n}\Big|_P
> &= \operatorname{grad}_n f
> = (2x_0,2y_0,2z_0)\cdot\left(\frac{x_0}{a^2\mu}, \frac{y_0}{b^2\mu}, \frac{z_0}{c^2\mu}\right) \\
> &= \frac{2}{\sqrt{\dfrac{x_0^2}{a^4} + \dfrac{y_0^2}{b^4} + \dfrac{z_0^2}{c^4}}}.
> \end{aligned}$$

> [!example] 例 6.5.4
> 设 $f(x,y)$ 在点 $P(x_0,y_0)$ 处可微，$l_1,l_2,\cdots,l_n$ 为 $P_0$ 处给定的 $n$ 个单位向量，相邻两向量夹角为 $2\pi/n$，证明：
> $$\sum_{i=1}^n \frac{\partial f(x_0,y_0)}{\partial l_i} =0. \tag{1}$$

> [!proof]- 证
> 在 $\mathbb{R}^2$ 中利用公式（B），
> $$\begin{aligned}
> \sum_{i=1}^n \frac{\partial f(x_0,y_0)}{\partial l_i}
> &=\sum_{i=1}^n \bigl[f'_x(x_0,y_0)\cos(l_i,x)+f'_y(x_0,y_0)\cos(l_i,y)\bigr] \\
> &=f'_x(x_0,y_0)\sum_{i=1}^n \cos(l_i,x)+f'_y(x_0,y_0)\sum_{i=1}^n \cos(l_i,y). \tag{2}
> \end{aligned}$$
>
> 不妨设在点 $P(x_0,y_0)$ 处 $x$ 轴沿逆时针方向转动遇到的第一个向量为 $l_1$。记 $l_1$ 与 $x$ 轴的夹角为 $\alpha$，则 $l_1,l_2,\cdots,l_n$ 与 $x$ 轴的夹角顺次为
> $$\alpha,\ \alpha+\frac{2\pi}{n},\ \cdots,\ \alpha+(n-1)\frac{2\pi}{n},$$
> 因此
> $$\begin{aligned}
> \sum_{i=1}^n \cos(l_i,x)
> &=\cos\alpha+\cos\!\left(\alpha+\frac{2\pi}{n}\right)+\cdots+\cos\!\left[\alpha+(n-1)\frac{2\pi}{n}\right] \\
> &= \frac{1}{2\sin(2\pi/n)} \sum_{i=0}^{n-1} 2\cos\!\left(\alpha+i\frac{2\pi}{n}\right)\sin\!\left(\frac{2\pi}{n}\right) \\
> &= \frac{1}{2\sin(2\pi/n)} \sum_{i=0}^{n-1} \Bigl\{ \sin\!\left[\alpha+(i+1)\frac{2\pi}{n}\right]-\sin\!\left[\alpha+(i-1)\frac{2\pi}{n}\right] \Bigr\} \\
> &=0. \tag{3}
> \end{aligned}$$
> 同理
> $$\sum_{i=1}^{n}\cos(l_i,y)=0. \tag{4}$$
>
> 将（3）、（4）代入（2）即得（1）。

> [!example] 例 6.5.5
> 设 $y=\varphi(x)$ 是区间 $[a,b]$ 上的可微函数，在 $xOy$ 直角坐标平面内其图像为曲线 $\Gamma$。若二元函数 $f(x,y)$ 在包含曲线 $\Gamma$ 的某区域上连续可微（即具有连续的偏导数），且在曲线 $\Gamma$ 上恒为 $0$，求证：$f(x,y)$ 在曲线 $\Gamma$ 上任一给定点处沿该曲线切线方向的方向导数等于 $0$。（湘潭大学）

> [!proof]- 分析
> 设 $l=(\cos\alpha,\cos\beta)$ 是曲线 $\Gamma$ 上 $P$ 处的单位切向量。利用公式（B），
> $$\frac{\partial f}{\partial l}=f'_x\cos\alpha+f'_y\cos\beta. \tag{1}$$
>
> 可见，要计算 $\dfrac{\partial f}{\partial l}$，关键在于求出 $\cos\alpha,\cos\beta$。按已知条件，$f(x,\varphi(x))\equiv 0$，因此
> $$f'_x(P)+f'_y(P)\varphi'(x)=0 \quad (P\in\Gamma).$$
>
> 故 $\tan\alpha=\varphi'(x)=-\dfrac{f'_x(P)}{f'_y(P)}$。从而
> $$\cos\alpha=\frac{1}{\pm\sqrt{1+\tan^2\alpha}}=\frac{|f'_y|}{\pm\sqrt{f_x'^2+f_y'^2}},$$
> $$\cos\beta=\sin\alpha=\tan\alpha\cos\alpha=\left(-\frac{f'_x}{f'_y}\right)\frac{|f'_y|}{\pm\sqrt{f_x'^2+f_y'^2}}.$$
>
> 代入（1）得
> $$\begin{aligned}
> \frac{\partial f}{\partial l}\Big|_P
> &=f'_x\cos\alpha+f'_y\cos\beta \\
> &=\frac{f'_x|f'_y|-f'_x|f'_y|}{\pm\sqrt{f_x'^2+f_y'^2}}=0.
> \end{aligned}$$

> [!example] 例 6.5.6
> 设 $l_1,l_2,\dots,l_n$ 为 $\mathbb{R}^n$ 中 $n$ 个线性无关的单位向量，函数 $f(x)$ 在 $\mathbb{R}^n$ 中可微，方向导数 $\dfrac{\partial f}{\partial l_i}\equiv 0\ (i=1,2,\dots,n)$，试证 $f(x)\equiv$ 常数。

> [!proof]- 证
> 记 $l_i=(a_{i1},a_{i2},\dots,a_{in})\ (i=1,2,\dots,n)$。因 $\dfrac{\partial f}{\partial l_i}\equiv 0$，应用公式（B），得
> $$0=\frac{\partial f}{\partial l_i}=f'_{x_1}\cdot a_{i1}+f'_{x_2}\cdot a_{i2}+\dots+f'_{x_n}\cdot a_{in} \quad (i=1,2,\dots,n). \tag{1}$$
>
> 因为 $l_i$ 线性无关，故 $\det(a_{ij})_{i,j=1}^n\neq 0$，从而式（1）只有零解：$f'_{x_i}=0\ (i=1,2,\dots,n)$。
>
> 记点 $P$ 和 $P_0$ 的坐标分别为 $(x_1,x_2,\dots,x_n)$ 和 $(x_{01},x_{02},\dots,x_{0n})$，根据微分中值公式，
> $$f(P)=f(P_0)+\sum_{i=1}^{n} f'_{x_i}(P^*)(x_i-x_{0i})=f(P_0) \quad (P^*\in\mathbb{R}^n).$$
>
> 此即表明
> $$f(P)\equiv \text{常数}.$$


### 二、梯度的计算

> [!note] 要点
> 梯度的计算（以 $\mathbb{R}^3$ 为例）主要使用如下公式：
>
> $$
> \nabla f = \operatorname{grad} f = \left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right) = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k},
> $$
>
> 其中 $\nabla$ 为 Hamilton 算符，$\mathbf{i},\mathbf{j},\mathbf{k}$ 分别表示 $x,y,z$ 轴上的单位向量.
>
> 梯度是向量，因此关于它的运算，要遵从向量的运算法则.

> [!example] 例 6.5.7
> 设 $u=f(x,y)$, $x=r\cos\theta$, $y=r\sin\theta$，求证：
>
> $$
> \nabla u = \frac{\partial f}{\partial r}\mathbf{r}_0 + \frac{1}{r}\frac{\partial f}{\partial\theta}\boldsymbol{\theta}_0,
> $$
>
> 其中 $\mathbf{r}_0$ 和 $\boldsymbol{\theta}_0$ 分别是径向与圆周方向的单位向量（如图 6.5.1）.

> [!proof]- 证
> 按向量的分解原理，
>
> $$
> \nabla u = (\nabla u \cdot \mathbf{r}_0)\mathbf{r}_0 + (\nabla u \cdot \boldsymbol{\theta}_0)\boldsymbol{\theta}_0.
> $$
>
> 因 $\mathbf{r}_0 = (\cos\theta,\sin\theta)$, $\boldsymbol{\theta}_0 = (\cos(\theta+\pi/2),\cos\theta)$，$\nabla u = \left(\dfrac{\partial u}{\partial x},\dfrac{\partial u}{\partial y}\right)$，故
>
> $$
> \nabla u \cdot \mathbf{r}_0 = \frac{\partial u}{\partial x}\cos\theta + \frac{\partial u}{\partial y}\sin\theta = \frac{\partial f}{\partial r},
> $$
>
> $$
> \nabla u \cdot \boldsymbol{\theta}_0 = \frac{\partial u}{\partial x}\cos(\theta+\pi/2) + \frac{\partial u}{\partial y}\cos\theta
> = \frac{1}{r}\left[\frac{\partial u}{\partial x}(-r\sin\theta) + \frac{\partial u}{\partial y}r\cos\theta\right] = \frac{1}{r}\frac{\partial f}{\partial\theta}.
> $$
>
> 从而
>
> $$
> \nabla u = \frac{\partial f}{\partial r}\mathbf{r}_0 + \frac{1}{r}\frac{\partial f}{\partial\theta}\boldsymbol{\theta}_0.
> $$

> [!example] 例 6.5.8
> 在直角坐标系 $xOy$ 中引入变换
>
> $$
> x = x(u,v),\quad y = y(u,v), \tag{1}
> $$
>
> 并将坐标系中任一点的位置向量记为 $\mathbf{r} = \mathbf{r}(u,v)$. 若变换式中函数 $x,y$ 连续可微，Jacobi 行列式 $\dfrac{\partial(x,y)}{\partial(u,v)} \neq 0$，且 $\dfrac{\partial\mathbf{r}}{\partial u}$ 与 $\dfrac{\partial\mathbf{r}}{\partial v}$ 垂直，试证：对任何可微函数 $F(u,v)$，其梯度可表示为
>
> $$
> \operatorname{grad} F = \frac{1}{H_u^2}\frac{\partial F}{\partial u}\frac{\partial\mathbf{r}}{\partial u} + \frac{1}{H_v^2}\frac{\partial F}{\partial v}\frac{\partial\mathbf{r}}{\partial v}, \tag{2}
> $$
>
> 其中 $H_u = \left|\dfrac{\partial\mathbf{r}}{\partial u}\right|$, $H_v = \left|\dfrac{\partial\mathbf{r}}{\partial v}\right|$.（复旦大学）

> [!quote]- 分析
> 这是一个兼有梯度计算与变量替换的问题. 式（2）为向量等式. 因 $\mathbf{r} = x(u,v)\mathbf{i} + y(u,v)\mathbf{j}$，得
>
> $$
> \frac{\partial\mathbf{r}}{\partial u} = x'_u\mathbf{i} + y'_u\mathbf{j},\quad
> \frac{\partial\mathbf{r}}{\partial v} = x'_v\mathbf{i} + y'_v\mathbf{j},
> $$
> $$
> H_u^2 = x_u'^2 + y_u'^2,\quad H_v^2 = x_v'^2 + y_v'^2.
> $$
>
> 故要证明式（2），等价于要证明
>
> $$
> \operatorname{grad} F = F'_u\frac{x'_u\mathbf{i} + y'_u\mathbf{j}}{x_u'^2 + y_u'^2} + F'_v\frac{x'_v\mathbf{i} + y'_v\mathbf{j}}{x_v'^2 + y_v'^2}. \tag{3}
> $$
>
> 由 $F(u,v)$ 的可微性，
>
> $$
> \begin{aligned}
> \operatorname{grad} F &= F'_x\mathbf{i} + F'_y\mathbf{j} \\
> &= (F'_u u'_x + F'_v v'_x)\mathbf{i} + (F'_u u'_y + F'_v v'_y)\mathbf{j} \\
> &= F'_u(u'_x\mathbf{i} + u'_y\mathbf{j}) + F'_v(v'_x\mathbf{i} + v'_y\mathbf{j}). \tag{4}
> \end{aligned}
> $$
>
> 比较（3）、（4）可知，要从（4）推出（3），只要证明：
>
> $$
> u'_x = \frac{x'_u}{x_u'^2 + y_u'^2},\quad
> v'_x = \frac{x'_v}{x_v'^2 + y_v'^2},\quad
> u'_y = \frac{y'_u}{x_u'^2 + y_u'^2},\quad
> v'_y = \frac{y'_v}{x_v'^2 + y_v'^2}. \tag{5}
> $$

> [!proof]- 证
> 事实上，$\dfrac{\partial(x,y)}{\partial(u,v)} \neq 0$，按隐函数存在定理，变换（1）：$x = x(u,v)$, $y = y(u,v)$ 确定了 $u,v$ 作为 $x,y$ 的函数，式（1）两边同时对 $x$ 求导，得
>
> $$
> 1 = x'_u u'_x + x'_v v'_x,\quad 0 = y'_u u'_x + y'_v v'_x.
> $$
>
> 由此得
>
> $$
> u'_x = \frac{y'_v}{x'_u y'_v - x'_v y'_u},\quad
> v'_x = \frac{-y'_u}{x'_u y'_v - x'_v y'_u}. \tag{6}
> $$
>
> 但由已知条件：$\dfrac{\partial\mathbf{r}}{\partial u}$ 与 $\dfrac{\partial\mathbf{r}}{\partial v}$ 垂直，有 $x'_u x'_v + y'_u y'_v = 0$. 如此可得（5）中前两式. 同理可证后两式. 证毕.

> [!example] 例 6.5.9
> 设有方程
>
> $$
> \frac{x^2}{a^2+u} + \frac{y^2}{b^2+u} + \frac{z^2}{c^2+u} = 1, \tag{1}
> $$
>
> 证明
>
> $$
> (\operatorname{grad} u)^2 = 2\mathbf{A} \cdot \operatorname{grad} u, \tag{2}
> $$
>
> 其中 $\mathbf{A} = (x,y,z)$.（中国科学技术大学）

> [!quote]- 分析
> 这是一个兼有梯度计算与隐函数求导的问题. 根据向量的数量积公式，（2）等价于
>
> $$
> u_x'^2 + u_y'^2 + u_z'^2 = 2(xu'_x + yu'_y + zu'_z). \tag{3}
> $$
>
> 可见我们的任务在于：由方程（1）证明式（3）.

> [!proof]- 证
> 不难验证式（1）满足隐函数存在定理的条件，因此由式（1）将 $u$ 定义为 $x,y,z$ 的函数，将式（1）对 $x$ 求导，得
>
> $$
> \frac{(a^2+u)2x - u'_x x^2}{(a^2+u)^2} - \frac{y^2 u'_x}{(b^2+u)^2} - \frac{z^2 u'_x}{(c^2+u)^2} = 0,
> $$
>
> 即
>
> $$
> \frac{2x}{a^2+u} = \left[\frac{x^2}{(a^2+u)^2} + \frac{y^2}{(b^2+u)^2} + \frac{z^2}{(c^2+u)^2}\right]u'_x. \tag{4}
> $$
>
> 根据轮换对称性，有
>
> $$
> \frac{2y}{b^2+u} = \left[\frac{x^2}{(a^2+u)^2} + \frac{y^2}{(b^2+u)^2} + \frac{z^2}{(c^2+u)^2}\right]u'_y, \tag{5}
> $$
>
> $$
> \frac{2z}{c^2+u} = \left[\frac{x^2}{(a^2+u)^2} + \frac{y^2}{(b^2+u)^2} + \frac{z^2}{(c^2+u)^2}\right]u'_z. \tag{6}
> $$
>
> 式（4）、（5）、（6）平方后相加，在等式两端约去公因子，得
>
> $$
> 4 = \left[\frac{x^2}{(a^2+u)^2} + \frac{y^2}{(b^2+u)^2} + \frac{z^2}{(c^2+u)^2}\right](u_x'^2 + u_y'^2 + u_z'^2). \tag{7}
> $$
>
> 式（4）、（5）、（6）分别乘 $x,y,z$ 后相加，注意式（1），有
>
> $$
> 2 = \left[\frac{x^2}{(a^2+u)^2} + \frac{y^2}{(b^2+u)^2} + \frac{z^2}{(c^2+u)^2}\right](xu'_x + yu'_y + zu'_z). \tag{8}
> $$
>
> 将式（7）、（8）联立，即得（3），从而式（2）获证.

> [!example] 例 6.5.10
> 假设函数 $f(x,y)$ 在原点 $(0,0)$ 的某邻域 $U$ 内有定义，并满足如下的条件：
>
> 1）在原点，它沿任意方向 $\mathbf{l} = (\cos\alpha,\sin\alpha)$ $(0 \leq \alpha < 2\pi)$ 的方向导数存在，且
>
> $$
> \frac{\partial f}{\partial\mathbf{l}} = A\cos\alpha + B\sin\alpha,
> $$
>
> 其中 $A,B$ 是两个常数；
>
> 2）存在常数 $M > 0$，使得对 $U$ 中任何两点 $(x_1,y_1)$ 与 $(x_2,y_2)$ 成立不等式
>
> $$
> |f(x_1,y_1) - f(x_2,y_2)| \leq M(|x_1 - x_2| + |y_1 - y_2|).
> $$
>
> 试证：$f(x,y)$ 在原点可微，且 $\mathrm{d}f(0,0) = A\,\mathrm{d}x + B\,\mathrm{d}y$.（武汉大学）

> [!quote]- 分析
> 当 $\alpha = 0$ 时，向量 $\mathbf{l} = (\cos 0,\sin 0) = (1,0)$ 代表 $x$ 轴正向单位向量. 因此
>
> $$
> \frac{\partial f(0,0)}{\partial x} = \left.\frac{\partial f}{\partial\mathbf{l}}\right|_{\alpha=0} = A.
> $$
>
> 同理有 $\dfrac{\partial f(0,0)}{\partial y} = B$. 由此可见，只要证明了 $f$ 在原点可微，则 $\mathrm{d}f(0,0) = A\,\mathrm{d}x + B\,\mathrm{d}y$ 明显成立.
>
> 为了证明 $f$ 在原点可微，按定义，即要证明
>
> $$
> F(x,y) \equiv \frac{f(x,y) - f(0,0) - Ax - By}{\sqrt{x^2 + y^2}} \to 0 \quad (\text{当 } x \to 0, y \to 0 \text{ 时}).
> $$
>
> 令 $x = t\cos\alpha$, $y = t\sin\alpha$，作变换，记 $\varphi(t,\alpha) = F(t\cos\alpha,t\sin\alpha)$，于是问题等价于要证明 $\displaystyle\lim_{t\to 0}\varphi(t,\alpha) = 0$（关于 $\alpha \in [0,2\pi]$ 一致）. 为此，我们只需证明：
>
> 1° $\forall \alpha \in [0,2\pi]$, $\displaystyle\lim_{t\to 0}\varphi(t,\alpha) = 0$；
>
> 2° $\exists L > 0$，使得 $\forall \alpha,\alpha_0 \in [0,2\pi]$, $|\varphi(t,\alpha) - \varphi(t,\alpha_0)| \leq L|\alpha - \alpha_0|$.

> [!proof]- 证
> 1° 由已知条件，对于 $\mathbf{l} = (\cos\alpha,\sin\alpha)$ $(0 \leq \alpha \leq 2\pi)$，$\dfrac{\partial f}{\partial\mathbf{l}} = A\cos\alpha + B\sin\alpha$，
>
> 因此 $\forall \alpha \in [0,2\pi]$，
>
> $$
> \begin{aligned}
> \lim_{t\to 0}\varphi(t,\alpha)
> &= \lim_{t\to 0}\frac{1}{t}\bigl[f(t\cos\alpha,t\sin\alpha) - f(0,0) - At\cos\alpha - Bt\sin\alpha\bigr] \\
> &= \lim_{t\to 0}\left[\frac{f(t\cos\alpha,t\sin\alpha) - f(0,0)}{t} - (A\cos\alpha + B\sin\alpha)\right] = 0.
> \end{aligned}
> $$
>
> 2° 根据 $\varphi(t,\alpha)$ 的定义与条件 2）：
>
> $$
> \begin{aligned}
> &\quad |\varphi(t,\alpha) - \varphi(t,\alpha_0)| \\[2pt]
> &= \Bigl|\frac{f(t\cos\alpha,t\sin\alpha) - f(0,0) - At\cos\alpha - Bt\sin\alpha}{t} \\
> &\qquad - \frac{f(t\cos\alpha_0,t\sin\alpha_0) - f(0,0) - At\cos\alpha_0 - Bt\sin\alpha_0}{t}\Bigr| \\[2pt]
> &\leq \frac{1}{|t|}\bigl|f(t\cos\alpha,t\sin\alpha) - f(t\cos\alpha_0,t\sin\alpha_0)\bigr|
> + |A||\cos\alpha - \cos\alpha_0| + |B||\sin\alpha - \sin\alpha_0| \\[2pt]
> &\leq M(|\cos\alpha - \cos\alpha_0| + |\sin\alpha - \sin\alpha_0|)
> + |A||\cos\alpha - \cos\alpha_0| + |B||\sin\alpha - \sin\alpha_0| \\[2pt]
> &\leq (2M + |A| + |B|)|\alpha - \alpha_0| = L|\alpha - \alpha_0|,
> \end{aligned}
> $$
>
> 其中 $L = 2M + |A| + |B|$ 为常数. $\forall\varepsilon > 0$，取 $n > \dfrac{4\pi L}{\varepsilon}$（这时 $\dfrac{2\pi}{n} < \dfrac{\varepsilon}{2L}$），令 $\alpha_k = k \cdot \dfrac{2\pi}{n}$ $(k = 0,1,2,\dots,n-1)$，由 1° 知，对每个 $\alpha_k$ $\exists \delta_k > 0$，使得 $|t| < \delta_k$ 时有 $|\varphi(t,\alpha_k)| < \dfrac{\varepsilon}{2}$. 令 $\delta = \min\{\delta_1,\dots,\delta_n\}$，则当 $|t| < \delta$ 时，$\forall\alpha \in [0,2\pi]$，必 $\exists k \in \{0,1,\dots,n-1\}$ 使得
>
> $$
> k\frac{2\pi}{n} \leq \alpha < (k+1)\frac{2\pi}{n}.
> $$
>
> 从而 $|\alpha - \alpha_k| < \dfrac{2\pi}{n} < \dfrac{\varepsilon}{2L}$，因此
>
> $$
> \begin{aligned}
> |\varphi(t,\alpha)| &\leq |\varphi(t,\alpha) - \varphi(t,\alpha_k)| + |\varphi(t,\alpha_k)| \\
> &\leq L|\alpha - \alpha_k| + |\varphi(t,\alpha_k)| \\
> &< L\frac{2\pi}{n} + \frac{\varepsilon}{2} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \quad (\forall \alpha \in [0,2\pi]).
> \end{aligned}
> $$
>
> 这就证明了 $\displaystyle\lim_{t\to 0}\varphi(t,\alpha) = 0$ 关于 $\alpha \in [0,2\pi]$ 一致. 因而 $\displaystyle\lim_{(x,y)\to(0,0)}F(x,y) = 0$. $f$ 在 $(0,0)$ 处可微. 证毕.

> [!example] * 例 6.5.11
> 设函数 $f(x,y)$ 在定义域的某点 $(x_0,y_0)$ 上存在非零方向导数，且沿三个不同方向的方向导数相等. 证明：$f(x,y)$ 在 $(x_0,y_0)$ 处不可微.（北京大学）

> [!hint]- 提示
> （反证法）如果 $f(x,y)$ 在该点 $(x_0,y_0)$ 可微，则存在偏导数
>
> $$
> f'_x(x_0,y_0) \xlongequal{\text{记}} A,\quad f'_y(x_0,y_0) \xlongequal{\text{记}} B,
> $$
>
> 且
>
> $$
> \mathrm{d}f(x_0,y_0) = f'_x(x_0,y_0)\,\mathrm{d}x + f'_y(x_0,y_0)\,\mathrm{d}y = A\,\mathrm{d}x + B\,\mathrm{d}y.
> $$

> [!proof]- 证 I
> 按题设，存在三个不同方向：$\mathbf{e}_i = (\cos\theta_i,\sin\theta_i)$ $(i=1,2,3)$，且
>
> $$
> \frac{\partial f(x_0,y_0)}{\partial\mathbf{e}_i} = A\cos\theta_i + B\sin\theta_i = C \neq 0. \tag{1}
> $$
>
> （$A$ 和 $B$ 不可能同时为 0，否则 $f(x,y)$ 在 $(x_0,y_0)$ 处方向导数全为 0，与题设矛盾.）故 $A^2 + B^2 \neq 0$，
>
> $$
> A\cos\theta_i + B\sin\theta_i = \sqrt{A^2+B^2}\left(\frac{A}{\sqrt{A^2+B^2}}\cos\theta_i + \frac{B}{\sqrt{A^2+B^2}}\sin\theta_i\right) = C \neq 0,
> $$
>
> 记 $\dfrac{A}{\sqrt{A^2+B^2}} = \cos\theta$，则 $\dfrac{B}{\sqrt{A^2+B^2}} = \sin\theta$. 代入上式得 $\cos(\theta-\theta_i) = \dfrac{C}{\sqrt{A^2+B^2}}$ $(i=1,2,3)$. 此式表明：应存在向量 $\mathbf{e} = (\cos\theta,\sin\theta)$，它能充当三个不同向量 $\{\mathbf{e}_i\}_{i=1,2,3}$ 中每两个 $\mathbf{e}_i$ 的分角线，但在 $\mathbb{R}^2$ 里这是不可能的！故上述 $A,B$ 不存在，$f(x,y)$ 在点 $(x_0,y_0)$ 处不可微.

> [!proof]- 证 II
> 三个方向的方向导数相等，即
>
> $$
> \begin{cases}
> A\cos\theta_1 + B\sin\theta_1 - C = 0, & \text{(a)} \\
> A\cos\theta_2 + B\sin\theta_2 - C = 0, & \text{(b)} \\
> A\cos\theta_3 + B\sin\theta_3 - C = 0, & \text{(c)}
> \end{cases} \tag{2}
> $$
>
> 此式看作 $(A,B,C)$ 的三元一次线性齐次方程组，它只有零解的充要条件是
>
> $$
> \begin{vmatrix}
> \cos\theta_1 & \sin\theta_1 & 1 \\
> \cos\theta_2 & \sin\theta_2 & 1 \\
> \cos\theta_3 & \sin\theta_3 & 1
> \end{vmatrix} \neq 0. \tag{3}
> $$
>
> 因为平面上三个不同向量 $\{\mathbf{e}_i\}_{i=1,2,3}$ 中一个向量可写成另外两个向量的线性组合. 如 $\mathbf{e}_1$ 可写成 $\mathbf{e}_2,\mathbf{e}_3$ 的线性组合，即 $\square$ $\alpha,\beta \neq 0$，使得
>
> $$
> \cos\theta_1 = \alpha\cos\theta_2 + \beta\cos\theta_3,\quad
> \sin\theta_1 = \alpha\sin\theta_2 + \beta\sin\theta_3. \tag{4}
> $$
>
> 两式先平方，再相加得
>
> $$
> \begin{aligned}
> 1 &= \alpha^2 + \beta^2 + 2\alpha\beta(\cos\theta_2\cos\theta_3 + \sin\theta_2\sin\theta_3) \\
> &= \alpha^2 + \beta^2 + 2\alpha\beta\cos(\theta_2 - \theta_3) \neq (\alpha + \beta)^2 \quad (\text{因为 }\theta_2 \neq \theta_3).
> \end{aligned}
> $$
>
> 因此，$\alpha + \beta \neq 1$. 式（3）的行列式
>
> $$
> \begin{aligned}
> \begin{vmatrix}
> \cos\theta_1 & \sin\theta_1 & 1 \\
> \cos\theta_2 & \sin\theta_2 & 1 \\
> \cos\theta_3 & \sin\theta_3 & 1
> \end{vmatrix}
> &\xrightarrow{\text{式}(4)}
> \begin{vmatrix}
> \alpha\cos\theta_2 + \beta\cos\theta_3 & \alpha\sin\theta_2 + \beta\sin\theta_3 & 1 \\
> \cos\theta_2 & \sin\theta_2 & 1 \\
> \cos\theta_3 & \sin\theta_3 & 1
> \end{vmatrix} \\[6pt]
> &\xrightarrow{\text{第二、三行分别乘 }-\alpha,\,-\beta \text{ 后再加到第一行}}
> \begin{vmatrix}
> 0 & 0 & 1 - \alpha - \beta \\
> \cos\theta_2 & \sin\theta_2 & 1 \\
> \cos\theta_3 & \sin\theta_3 & 1
> \end{vmatrix} \\[6pt]
> &= (1 - \alpha - \beta)\sin(\theta_3 - \theta_2) \neq 0.
> \end{aligned}
> $$
>
> 此式说明：要式（3）成立，则式（2）只有零解：$(A,B,C) = (0,0,0)$，故 $f(x,y)$ 在点 $(x_0,y_0)$ 处不可微.

> [!example] * 例 6.5.12
> 设 $f(x,y)$ 在 $P_0 \in \mathbb{R}^2$ 的邻域 $U(P_0)$ 内存在三阶偏导数，并且所有三阶偏导数的绝对值不超过常数 $M > 0$. 另设 $P_1,P_2$ 是 $U(P_0)$ 内的两点，且关于 $P_0$ 对称，$P_1$ 与 $P_0$ 的距离为 $l > 0$，记 $\mathbf{l} = \overrightarrow{P_0P_1}$，证明：
>
> $$
> \left|\frac{f(P_1) - f(P_2)}{2l} - \frac{\partial f(P_0)}{\partial\mathbf{l}}\right| \leq \frac{\sqrt{2}}{3}M l^2.
> $$
>
> （南开大学）

> [!hint]- 提示
> 取 $P_0$ 作原点，以 $\mathbf{l}$ 的方向作为数轴的正向，$l$ 作为长度单位，坐标记作 $t$，则 $P_0,P_1,P_2$ 的坐标分别是 $t = 0$, $t = 1$, $t = -1$. 当 $P_1,P_2$ 被选定之后，函数 $f$ 的值只与 $t$ 有关，$f(x(t),y(t))$ 可看成单变量 $t$ 的函数，记作 $F(t) = f(x(t),y(t))$.
>
> $$
> P(t) = (x(t),y(t)) = (x_0 + t(x_1 - x_0),\; y_0 + t(y_1 - y_0)),
> $$
> $$
> F(t) = f(x(t),y(t)) = f(x_0 + t(x_1 - x_0),\; y_0 + t(y_1 - y_0)),
> $$
> $$
> F(0) = f(x_0,y_0),\quad F(1) = f(x_1,y_1),\quad F(-1) = f(x_2,y_2).
> $$
>
> 原不等式可写为
>
> $$
> \left|\frac{F(1) - F(-1)}{2} - F'(0)\right| \leq \frac{\sqrt{2}}{3}M. \tag{1}
> $$
>
> 利用 Taylor 公式，
>
> $$
> F(1) = F(0) + F'(0) + \frac12 F''(0) + \frac16 F'''(\xi) \quad (0 < \xi < 1),
> $$
> $$
> F(-1) = F(0) - F'(0) + \frac12 F''(0) - \frac16 F'''(\eta) \quad (-1 < \eta < 0).
> $$
>
> 因三阶偏导数的绝对值都不超过常数 $M > 0$，上两式相减可得
>
> $$
> \left|\frac{F(1) - F(-1)}{2} - F'(0)\right| = \left|\frac12\left(\frac16 F'''(\xi) + \frac16 F'''(\eta)\right)\right| \leq \frac{\sqrt{2}}{3}M. \tag{2}
> $$
>
> 补证式（2）里的不等式：$F$ 对 $t$ 的导数实际上都是 $f(x,y)$ 沿 $\mathbf{l}$ 方向的方向导数，方向导数的界尚不得而知. 为此应用习题 6.5.3 题的方法，先求（三阶）方向导数的表达式. 轴 $\mathbf{l}$ 上的单位向量记作：$\mathbf{e} = (\cos\alpha,\cos\beta)$，则
>
> $$
> \frac{\partial f(x,y)}{\partial\mathbf{l}} = f'_x\cos\alpha + f'_y\cos\beta = \left(\frac{\partial}{\partial x}\cos\alpha + \frac{\partial}{\partial y}\cos\beta\right)f.
> $$
>
> $$
> \begin{aligned}
> \frac{\partial^2 f(x,y)}{\partial\mathbf{l}^2}
> &= \left(\frac{\partial}{\partial x}\cos\alpha + \frac{\partial}{\partial y}\cos\beta\right)^2 f(x,y) \\
> &= f''_{xx}\cos^2\alpha + 2f''_{xy}\cos\alpha\cos\beta + f''_{yy}\cos^2\beta.
> \end{aligned}
> $$
>
> 递推，得
>
> $$
> \frac{\partial^3 f(x,y)}{\partial\mathbf{l}^3}
> = \left(\frac{\partial}{\partial x}\cos\alpha + \frac{\partial}{\partial y}\cos\beta\right)^3 f(x,y).
> $$
>
> 因为所有三阶偏导数的绝对值不超过常数 $M > 0$，所以
>
> $$
> \begin{aligned}
> \left|\frac{\partial^3 f(x,y)}{\partial\mathbf{l}^3}\right|
> &= \left|\left(\frac{\partial}{\partial x}\cos\alpha + \frac{\partial}{\partial y}\cos\beta\right)^3 f(x,y)\right| \\
> &\leq M(\cos^3\alpha + 3\cos^2\alpha\cos\beta + 3\cos\alpha\cos^2\beta + \cos^3\beta) \\
> &= M(\cos\alpha + \cos\beta)^3 = M(\cos\alpha + \sin\alpha)^3 \\
> &= M\left[\sqrt{2}(\sin45^\circ\cos\alpha + \cos45^\circ\sin\alpha)\right]^3 \\
> &= 2\sqrt{2}\,M\,[\sin(\alpha + 45^\circ)]^3 \leq 2\sqrt{2}\,M.
> \end{aligned}
> $$
>
> 因此式（2）里：$|F'''(\xi)| \leq 2\sqrt{2}\,M$，$|F'''(\eta)| \leq 2\sqrt{2}\,M$. 故式（2）最后的不等式成立：
>
> $$
> \left|\frac12\left(\frac16 F'''(\xi) + \frac16 F'''(\eta)\right)\right| \leq \frac{\sqrt{2}}{3}M.
> $$


### 单元练习 6.5

**6.5.1**　计算函数 $z = \ln(x^2 + y^2)$ 在点 $P_0(x_0, y_0)$ 处沿过此点的等位线垂直的方向 $l$ 上的方向导数。

> [!hint]- 提示
> （直接用公式。）等位线是原点为中心的同心圆，法线沿径向方向：
>
> $\boldsymbol{n} = (\cos\alpha, \cos\beta) = \pm\left(\dfrac{x}{\sqrt{x^2 + y^2}}, \dfrac{y}{\sqrt{x^2 + y^2}}\right)$.
>
> （外法线方向取 "$+$"，内法线方向取 "$-$"。）
>
> $\pm \dfrac{2}{\sqrt{x_0^2 + y_0^2}}$

**6.5.2**　计算函数 $z = 1 - \left(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2}\right)$（$a, b > 0$）在点 $P\left(\dfrac{a}{\sqrt{2}}, \dfrac{b}{\sqrt{2}}\right)$ 处沿曲线 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ 在此点内法线方向上的导数。

> [!hint]- 提示
> $z = F(x, y) = 1 - \left(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2}\right)$（$a, b > 0$）.
>
> 曲线 $F(x, y) = 0$ 在点 $P\left(\dfrac{a}{\sqrt{2}}, \dfrac{b}{\sqrt{2}}\right)$ 处内法向量为
>
> $(F'_x, F'_y)|_P = -\left(\dfrac{2}{a^2}\cdot\dfrac{a}{\sqrt{2}}, \dfrac{2}{b^2}\cdot\dfrac{b}{\sqrt{2}}\right) = -\sqrt{2}\left(\dfrac{1}{a}, \dfrac{1}{b}\right)$.
>
> $\therefore$ 点 $P\left(\dfrac{a}{\sqrt{2}}, \dfrac{b}{\sqrt{2}}\right)$ 的（内）法向单位向量 $\boldsymbol{n} = (\cos\alpha, \cos\beta) = -\dfrac{1}{\sqrt{a^2 + b^2}}(b, a)$，
>
> 在点 $P\left(\dfrac{a}{\sqrt{2}}, \dfrac{b}{\sqrt{2}}\right)$ 处：$(z'_x, z'_y) = \sqrt{2}\left(\dfrac{1}{a}, \dfrac{1}{b}\right)$.
>
> $\dfrac{\partial z}{\partial n} = z'_x\cos\alpha + z'_y\cos\beta = -\dfrac{\sqrt{2}}{\sqrt{a^2 + b^2}}\left(\dfrac{b}{a} + \dfrac{a}{b}\right) = -\dfrac{\sqrt{2}\sqrt{a^2 + b^2}}{ab}$.

**6.5.3**　设 $u = f(x, y, z)$ 为二次可微函数。若 $\cos\alpha, \cos\beta, \cos\gamma$ 为方向 $l$ 的方向余弦，求 $\dfrac{\partial^2 u}{\partial l^2} = \dfrac{\partial}{\partial l}\left(\dfrac{\partial u}{\partial l}\right)$.

> [!solution]- 解
> $\dfrac{\partial u}{\partial l} = f'_x\cos\alpha + f'_y\cos\beta + f'_z\cos\gamma$
>
> $= \left(\cos\alpha\cdot\dfrac{\partial}{\partial x} + \cos\beta\cdot\dfrac{\partial}{\partial y} + \cos\gamma\cdot\dfrac{\partial}{\partial z}\right)f$.
>
> $\dfrac{\partial^2 u}{\partial l^2} = \dfrac{\partial}{\partial l}\left(\dfrac{\partial u}{\partial l}\right)$
>
> $= \left(\cos\alpha\cdot\dfrac{\partial}{\partial x} + \cos\beta\cdot\dfrac{\partial}{\partial y} + \cos\gamma\cdot\dfrac{\partial}{\partial z}\right)^2 f$
>
> $= f''_{xx}\cos^2\alpha + f''_{yy}\cos^2\beta + f''_{zz}\cos^2\gamma + 2(f''_{xy}\cos\alpha\cos\beta + f''_{yz}\cos\beta\cos\gamma + f''_{zx}\cos\gamma\cos\alpha)$.

**6.5.4**　设 $u = f(x, y, z)$ 为二次可微函数，$l_1, l_2, l_3$ 为三个互相垂直的方向，证明：

1) $\left(\dfrac{\partial u}{\partial l_1}\right)^2 + \left(\dfrac{\partial u}{\partial l_2}\right)^2 + \left(\dfrac{\partial u}{\partial l_3}\right)^2 = \left(\dfrac{\partial u}{\partial x}\right)^2 + \left(\dfrac{\partial u}{\partial y}\right)^2 + \left(\dfrac{\partial u}{\partial z}\right)^2$；

2) $\dfrac{\partial^2 u}{\partial l_1^2} + \dfrac{\partial^2 u}{\partial l_2^2} + \dfrac{\partial^2 u}{\partial l_3^2} = \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2}$.

> [!hint]- 提示
> 现将 $l_i$（$i = 1, 2, 3$）看作新直角坐标系；并用 $\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3$ 分别表示新坐标轴 $l_i$ 上的单位向量。设
>
> $\boldsymbol{e}_i = (\cos\alpha_i, \cos\beta_i, \cos\gamma_i) \quad (i = 1, 2, 3)$，则
>
> 在原来的坐标系 $Oxyz$ 中，用 $\boldsymbol{i}, \boldsymbol{j}, \boldsymbol{k}$ 表示 $x, y, z$ 三坐标轴上的单位向量，它们在新坐标系里的方向余弦是
>
> $\boldsymbol{i} = (\cos\alpha_1, \cos\alpha_2, \cos\alpha_3)$，$\boldsymbol{j} = (\cos\beta_1, \cos\beta_2, \cos\beta_3)$，$\boldsymbol{k} = (\cos\gamma_1, \cos\gamma_2, \cos\gamma_3)$，
>
> 作为单位向量：
>
> $\displaystyle\sum_{i=1}^3 \cos^2\alpha_i = 1$，$\displaystyle\sum_{i=1}^3 \cos^2\beta_i = 1$，$\displaystyle\sum_{i=1}^3 \cos^2\gamma_i = 1$.　(2)
>
> 因互相垂直，故
>
> $\displaystyle\sum_{i=1}^3 \cos\alpha_i\cos\beta_i = 0$，$\displaystyle\sum_{i=1}^3 \cos\beta_i\cos\gamma_i = 0$，$\displaystyle\sum_{i=1}^3 \cos\gamma_i\cos\alpha_i = 0$.　(3)
>
> **再提示**
>
> 1）用式(1)：
>
> $\displaystyle\sum_{i=1}^3 \left(\dfrac{\partial u}{\partial l_i}\right)^2 = \sum_{i=1}^3 (f'_x\cos\alpha_i + f'_y\cos\beta_i + f'_z\cos\gamma_i)^2$
>
> $= f'^2_x\displaystyle\sum_{i=1}^3 \cos^2\alpha_i + f'^2_y\displaystyle\sum_{i=1}^3 \cos^2\beta_i + f'^2_z\displaystyle\sum_{i=1}^3 \cos^2\gamma_i$
>
> $\quad + 2f'_x f'_y\displaystyle\sum_{i=1}^3 \cos\alpha_i\cos\beta_i + 2f'_y f'_z\displaystyle\sum_{i=1}^3 \cos\beta_i\cos\gamma_i + 2f'_z f'_x\displaystyle\sum_{i=1}^3 \cos\gamma_i\cos\alpha_i$
>
> $\stackrel{\text{式(2)、(3)}}{=} f'^2_x + f'^2_y + f'^2_z$.
>
> 2）利用上题（题6.5.3）所得到的公式，
>
> $\displaystyle\sum_{i=1}^3 \dfrac{\partial^2 u}{\partial l_i^2}$
>
> $= \displaystyle\sum_{i=1}^3 \bigl[f''_{xx}\cos^2\alpha_i + f''_{yy}\cos^2\beta_i + f''_{zz}\cos^2\gamma_i$
>
> $\qquad + 2(f''_{xy}\cos\alpha_i\cos\beta_i + f''_{yz}\cos\beta_i\cos\gamma_i + f''_{zx}\cos\gamma_i\cos\alpha_i)\bigr]$（利用式(2)、(3)）
>
> $= f''_{xx} + f''_{yy} + f''_{zz}$.

**6.5.5**　求函数 $u = x + y + z$ 在沿球面 $x^2 + y^2 + z^2 = 1$ 上点 $P_0(x_0, y_0, z_0)$ 的外法线方向的方向导数，并问在球面上什么点处此导数 1）取最大值；2）取最小值；3）等于零。

> [!hint]- 提示
> $(u'_x, u'_y, u'_z) = (1, 1, 1)$. 记 $F = x^2 + y^2 + z^2 - 1$，则 $(F'_x, F'_y, F'_z) = (2x, 2y, 2z)$，单位外法向量 $\boldsymbol{n} = (x, y, z)$. 所求的方向导数：
>
> $\dfrac{\partial u}{\partial n} = (1, 1, 1)\cdot(x, y, z) = x + y + z$.
>
> 在球面上点 $(x_0, y_0, z_0)$ 处，外法线方向的方向导数：
>
> $\left.\dfrac{\partial u}{\partial n}\right|_{(x_0,y_0,z_0)} = x_0 + y_0 + z_0$.
>
> **再提示**
>
> 设 $L = (x + y + z) - \lambda(x^2 + y^2 + z^2 - 1)$. 令 $L'_x = L'_y = L'_z = 0$，解方程得极值可疑点
>
> $(x, y, z) = \left(\pm\dfrac{\sqrt{3}}{3}, \pm\dfrac{\sqrt{3}}{3}, \pm\dfrac{\sqrt{3}}{3}\right)$.


