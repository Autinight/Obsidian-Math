代靖涵 25120222201319

> [!exercise] 1
> 证明有限维赋范空间中，弱收敛与强收敛等价.

> [!proof] Proof: 
> 设$E$是$n$维赋范空间, $\left\{ \mathbf{x}^{\left(n\right)} \right\}\in E$.
> 只需要证明, 
> $$ \mathbf{x}^{\left(n\right)}\xrightarrow{w}0\implies  \left\| \mathbf{x}^{\left(n\right)} \right\|\to 0  $$ 
> 对于$k= 1,\cdots,n$, 定义
> $$ f_{k}\left(\mathbf{x}\right) = x_{k},\quad \mathbf{x}= \left(x_1,\cdots ,x_{n}\right)$$  
> 显然$f_{k}\in E^{*}$.
> 由弱收敛, 对于任意的$k$, 
> $$ \lim_{n\to \infty}x_{k}^{\left(n\right)}= \lim_{n\to \infty}f_{k}\left(\mathbf{x}^{\left(n\right)}\right)= 0 $$ 
> 那么
> $$ \lim_{n\to \infty}\left\| \mathbf{x}^{\left(n\right)} \right\|^{2}=\lim_{n\to \infty}\sum _{k}\left(x_{k}^{\left(n\right)}\right)^{2}= 0 $$ 
> 因此$\left\| x^{\left(n\right)} \right\|\to 0$.


> [!exercise] 2
> 证明空间 $L^1[a,b]$ 与 $\ell^1$ 不是自反的.

> [!proof] Proof:
> $L^1$ 非自反:
> 设 $a< b$. 记 $\varphi :\left(L^{1}\right)^{*}\simeq L^{\infty}$ 是等距同构.
> 在 $C\left[ a,b \right]\subseteq L^{\infty}$ 上定义
> $$ \Lambda \left(g\right)= g\left(a\right) $$
> 则 $\left| \Lambda \left(g\right) \right|\le \left\| g \right\|_{\infty}$, 故 $\Lambda \in C\left[ a,b \right]^{*}$.
> 由 Hahn-Banach, $\Lambda$ 可延拓为 $F\in \left(L^{\infty}\right)^{*}\simeq \left(L^{1}\right)^{**}$.
> 
> 若 $L^{1}\left[ a,b \right]$ 自反, 则 $\exists\, x\in L^{1}$, 使得
> $$ F\left(y\right)= \int _{a}^{b}x\left(t\right)y\left(t\right)\,d t,\quad \forall y\in L^{\infty} $$
> 特别地, $\forall g\in C\left[ a,b \right]$,
> $$ g\left(a\right)= \int _{a}^{b}x\left(t\right)g\left(t\right)\,d t $$
> 取 $g_{n}\in C\left[ a,b \right]$, $0\le g_{n}\le 1$, $g_{n}\left(a\right)= 1$, $\operatorname{supp}g_{n}\subseteq \left[ a,a+ \frac{1}{n} \right]$. 则
> $$ 1= g_{n}\left(a\right)= \int _{a}^{a+ 1/n}x\left(t\right)g_{n}\left(t\right)\,d t\le \int _{a}^{a+ 1/n}\left| x\left(t\right) \right|\,d t\to 0 $$
> 矛盾.
> 
> $\ell ^{1}$ 非自反:
> 记 $\varphi :\left(\ell ^{1}\right)^{*}\simeq \ell ^{\infty}$ 是等距同构. 设 $c\subseteq \ell ^{\infty}$ 是收敛序列子空间. 在 $c$ 上定义
> $$ \Lambda \left(y\right)= \lim _{n\to \infty}y_{n} $$
> 则 $\left| \Lambda \left(y\right) \right|\le \left\| y \right\|_{\infty}$, 故 $\Lambda \in c^{*}$.
> 由 Hahn-Banach, $\Lambda$ 可延拓为 $F\in \left(\ell ^{\infty}\right)^{*}\simeq \left(\ell ^{1}\right)^{**}$.
> 
> 若 $\ell ^{1}$ 自反, 则 $\exists\, x= \left(x_{k}\right)\in \ell ^{1}$, 使得
> $$ F\left(y\right)= \sum _{k}x_{k}y_{k},\quad \forall y\in \ell ^{\infty} $$
> 取 $y= e_{k}\in c$, $\Lambda \left(e_{k}\right)= 0$, 故
> $$ x_{k}= F\left(e_{k}\right)= 0,\quad \forall k $$
> 即 $x= 0$. 但取 $y= \mathbf 1= \left(1,1,\cdots \right)\in c$,
> $$ 1= \Lambda \left(\mathbf 1\right)= F\left(\mathbf 1\right)= \sum _{k}x_{k}= 0 $$
> 矛盾.


> [!exercise] 3
> 证明：$B$ 空间 $X$ 是自反的，当且仅当 $X^*$ 是自反的.

> [!proof] Proof: 
> 设$\Phi  _{X}: X\to X^{**}$和$\Phi  _{X^{*}}: X^{*}\to X^{** *}$是典范嵌入, 则
> $$ \Phi _{X}\left(x\right)\left(f\right)= f\left(x\right),\quad \Phi _{X^{*}}\left(f\right)\left(F\right)= F\left(f\right) $$ 
> $\implies :$ 若$X$是自反的, 则$\Phi _{X}$是满的. 任取$\varphi \in X^{***}$, 令
> $$ f= \varphi  \circ \Phi _{X}\in X^{*} $$
> 则对于任意的$F\in X^{**}$, 存在$x \in X$, 使得$F= \Phi _{X}\left(x\right)$, 
> $$ \Phi _{X^{*}}\left(f\right)\left(F\right)= F\left(f\right)= \Phi _{X}\left(x\right)\left(f\right)= f\left(x\right)=  \varphi \left(F\right)$$ 
> 于是
> $$ \Phi _{X^{*}} \left(f\right)= \varphi $$ 
> 故$\Phi _{X^{*}}$是满的, $X^{*}$是自反的. 
> 
> $\impliedby$: 反过来, 若$X^{*}$是自反的, 若$F\not \in \Phi _{X}\left(X\right)$. 由于$\Phi _{X}$是Banach空间上的等距映射, 可知$\Phi _{X}\left(X\right)$是$X^{**}$的闭子空间. 由Hahn-Banach, 存在$\varphi \in X^{***}$, 满足
> $$ \varphi |_{\Phi _{X}\left(X\right)}= 0,\quad \varphi \left(F\right)\neq 0 $$ 
> 由于$X^{*}$自反, $\Phi _{X^{*}}$是满射的, 存在$f\in X^{*}$, 使得
> $$ \varphi = \Phi _{X^{*}} \left(f\right)$$
> 那么对于所有的$x\in X$,
> $$ f\left(x\right)= \Phi _{X}\left(x\right)\left(f\right)= \Phi _{X^{*}} \left(f\right)\left(\Phi _{X}\left(x\right)\right)= \varphi \left(\Phi _{X}\left(x\right)\right)= 0$$  
> 故$f= 0$, 从而$\varphi = \Phi _{X^{*}}\left(0\right)= 0$, 与$\varphi \left(F\right)\neq 0$矛盾.



> [!exercise] 4
> 设 $X$ 是 $B^*$ 空间，$\{x_n\}\subset X$ 弱收敛到 $x_0$，则存在 $\{x_n\}$ 的凸组合序列强收敛到 $x_0$，即
> $$
> \forall \varepsilon>0,\ \forall N\in\mathbb N,\ \text{以及}\ \lambda_i\ge 0,\ \sum_{i=1}^N \lambda_i=1,
> $$
> 使得
> $$
> \left\|x_0-\sum_{i=1}^N \lambda_i x_i\right\|<\varepsilon.
> $$

> [!proof] Proof: 
> 令$z_{n}= x_{n}-x_0$, 则
> 则
> $$ z_{n}\xrightarrow{w}0  $$ 
> 对于任意固定的$N$, 考虑尾项的凸包
> $$ C_{N}= co \left\{ z_{n}: n\ge N \right\} $$ 
> 命题相当于是证明
> $$ 0\in \overline{C_{N}} $$
> 反证: 若不然, 由几何Hahn-Banach定理, $0$与闭凸集$\overline{C_{N}}$分离, 即存在$f\in X^{*}$和$\delta > 0$, 使得对于所有的$z\in C_{N}$
> $$ f\left(z\right)\ge \delta  $$  
> 特别地, 
> $$ f\left(z_{n}\right) \ge \delta ,\quad \forall n\ge N$$ 
> 但是弱收敛给出
> $$ \lim_{n\to \infty}f\left(z_{n}\right)\to 0 $$ 
> 矛盾, 因此$0\in \overline{C_{N}}$.
> 故对于任意的$\varepsilon > 0$, 存在$\sum _{i= 1}^{k}\lambda _{i}z_{n_{i}}\in C_{N}$
> 满足
> $$ \left\| \sum _{i = 1}^{k}\lambda _{i}z_{n_{i}} \right\| < \varepsilon $$ 
> 即
> $$ \left\| x_0-\sum _{i= 1}^{k}\lambda _{i}x_{n_{i}} \right\| < \varepsilon $$ 



> [!exercise] 5
> 设 $M$ 是赋范空间 $X$ 的闭子空间，$x_0\in X$ 是 $M$ 中某个弱收敛点列的极限，证明 $x_0\in M$。

> [!remark] Remark: 
> 即闭子空间是弱闭的.

> [!proof] Proof: 
> 设存在序列$\left(x_{n}\right)\subseteq M$, 使得$x_{n}\xrightarrow{w}x_0$.
> 反设$x_0\not \in M$. 由于$M$是$X$的闭子空间, 由Hahn-Banach分离定理, 存在$f\in X^{*}$, 使得
> $$ f|_{M}= 1,\quad f\left(x_0\right)= 1 $$ 
> 但是由于$x_{n}\in M$, 对于任意的$n$, $f\left(x_{n}\right)= 0$. 另一方面, 
> $$ \lim_{n\to \infty}f\left(x_{n}\right)= f\left(x_0\right) $$ 
> 矛盾.
> 因此$x_0\in M$.


> [!exercise] 6
> 令 $f_n(t)=\frac{1}{n}\sum_{k=1}^{n}e^{ikt}$，证明在空间 $X=L^2[-\pi,\pi]$ 中，$f_n$ 弱收敛到 $0$.

> [!proof] Proof: 
> 对于任意的$T\in X^{*}$, 存在$g\in L^{2}\left[ -\pi ,\pi  \right]$, 使得
> $$ T\left(f\right)= \left< f,g \right> $$ 
> 而
> $$ \begin{aligned} \left< f_{n},g \right>&= \left< \frac{1 }{n }\sum _{ k= 1}^{n}e^{ikt},g \right>\\&= \frac{1 }{n }\sum _{ k= 1}^{n}\left< e^{ikt},g \right> \end{aligned} $$ 
> 记$a_{k}= \left< e^{ikt},g \right>$, 由Bessel不等式
> $$ \sum _{ k= 1}^{\infty}\left| a_{k} \right|^{2}< \infty  $$ 
> 因此$a_{k}\to 0$
> 进而由Cesaro平均极限定理
> $$ \frac{1 }{n }\sum _{ k= 1}^{n}a_{k}\to 0 $$ 
> 故
> $$ \left< f_{n},g \right>= \frac{1 }{n }\sum _{ k= 1}^{n}a_{k}\to 0 $$ 
> 因此
> $$ f_{n}\xrightarrow{w}0  $$ 

> [!exercise] 7
> 求证：在自反的 $B$ 空间中，集合的弱列紧性和有界性是等价的.

> [!proof] Proof: 
> **弱列紧推有界** 设$E$是弱列紧. 如$E$是无界的, 则存在$\left\{ x_{n} \right\}\subseteq E$, 使得$\left\| x_{n} \right\|\to \infty$. 由弱列紧性, 存在子列$x_{n_{k}}\xrightarrow{w}x_0$, 但是弱收敛点列是有界的, 这与$\left\| x_{n_{k}} \right\|\to \infty$矛盾
>
> **有界推弱列紧**:
> 设$E$有界, 则存在$R> 0$, 使得$A\subseteq B_{X}\left(R\right)$.
> 由于$B$是自反的, $B_{X}\left(1\right)$是弱列紧的, 进而$B_{X}\left(R\right)$也是弱列紧的. 而弱列紧集的子集也是弱列紧的, 故$E$弱列紧.

> [!exercise] 8
> 求证：$B^*$ 空间中的闭凸集是弱闭的.

> [!proof] Proof: 
> 设$X$是$B^{*}$空间, $C\subseteq X$是闭凸集. 只需要证明$X\setminus C$是弱开的. 即我们希望对于每个$x_0\not \in C$, 都找到$x_0$的一个弱邻域使得它与$C$无交.
>
> 任取$x_0\not \in C$, 由于$\left\{ x_0 \right\}$是紧凸集, $C$是闭凸集, 且二者无交. 有Hahn-Banach分离定理的严格版本, 存在$f\in X^{*}$和$\alpha \in \mathbb{R}$, 使得
> $$ \sup _{x\in C} f\left(x\right)< \alpha < f\left(x_0\right) $$  
> 取
> $$ U= \left\{ x\in X: f\left(x\right)> \alpha  \right\} $$ 
> $f$在弱拓扑自动是连续的, 故$U$是弱开的. 这就给出了$x_0$在$X\setminus C$中的弱$U$.

> [!exercise] 9
> 设 $X$ 是自反的 $B$ 空间，$M$ 是 $X$ 中的有界闭凸集，证明：
> 任意 $f\in X^*$ 都在 $M$ 上达到最大和最小值.

> [!proof] Proof: 
> 只证明$f$能取到最大值, 最小值把$f$换成$-f$即可.
> 记$\alpha = \sup _{x\in M}f\left(x\right)$. 由于$M$是有界的, 故$f\left(M\right)$有上界, $\alpha < \infty$.
> 取$\left\{ x_{n} \right\}\subseteq M$, 使得$\lim_{n\to \infty}f\left(x_{n}\right)= \alpha$.
> 由于$X$是自反的, 由Exercise 7, 有界集是弱列紧的. 而$\left\{ x_{n} \right\}$有界, 故存子列$x_{n_{k}}\xrightarrow{w} x_0$.
>  有Exercise 8, 闭凸集$M$是弱闭的,  故$x_0\in M$.
> $f\in X^{*}$, $f$是弱连续的, 故
> $$ f\left(x_0\right)=  \lim_{k}f\left(n_{k}\right)= \alpha  $$ 
> 在$x_0\in M$处取到最大值$\alpha$.

> [!exercise] 10
> 设 $X$ 是赋范空间，$x_0,x_n\in X$ $(n=1,2,\cdots)$。证明若 $x_n \xrightarrow{W} x_0$ $(n\to\infty)$，则存在 $\{x_n\}$ 的有穷线性组合序列强收敛于 $x_0$。

> [!proof] Proof: 
> 令
> $$ C:= \operatorname{span}\left\{ x_{n}:n\ge 1 \right\} $$ 
> 是$\left\{ x_{n} \right\}$的有穷线性组合的全体. 则$C$是$X$的线性子空间, 进而是非空的凸集. 命题相当于证明$x_0\in \overline{C}$.
> 若$x_0\not \in \overline{C}$, 则$\left\{ x_0 \right\}$是紧凸集, 且与非空闭凸集$\overline{C}$无交. 有Hahn-Banach分离定理的强形式, 存在$f\in X^{*}$, 以及$\alpha\in \mathbb{R}$, 使得
> $$ f\left(y\right)\le \alpha < f\left(x_0\right), \quad \forall y\in \overline{C} $$ 
> 由于$x_{n}\in C\in \overline{C}$, 上式给出
> $$ f\left(x_{n}\right)\le \alpha ,\quad \forall n\ge 1 $$ 
> 另一方面, $x_{n}\xrightarrow{w}x_0$意味着$f\left(x_{n}\right)\to f\left(x_0\right)$. 但是$f\left(x_0\right)> \alpha$, 矛盾. 
> 因此$x_0\in \overline{C}$. 即存在$y_{k}\in C$, 使得$\left\| y_{k}-x_0 \right\|\to 0$. 其中每个$y_{k}$都是一个有穷线性组合.


> [!exercise] 11
> 设 $X$ 是一致凸赋范空间（参看习题二第 18 题），$x_0,x_n\in X$ $(n=1,2,\cdots)$。证明如果 $x_n \xrightarrow{W} x_0$ $(n\to\infty)$ 且 $\|x_n\|\to\|x_0\|$ $(n\to\infty)$，则 $x_n\to x_0$ $(n\to\infty)$。

> [!proof] Proof: 
> 若$x_0= 0$, 则$\left\| x_{n} \right\|\to \left\| x_0 \right\|= 0$, 故$x_{n}\to 0= x_0$, 结论成立.
>
> 若$x_0\neq 0$. 则存在$N$, 使得当$n> N$时, $\left\| x_{n} \right\|> 0$, 下面只考虑$n> N$的情况, 因此不妨设$\left\| x_{n} \right\|> 0$总成立.
>
> 令
> $$ y_{n}= \frac{x_{n} }{ \left\| x_{n} \right\|},\quad y_0= \frac{x_0 }{ \left\| x_0 \right\|} $$ 
> 则$\left\| y_{n} \right\|= \left\| y_0 \right\|= 1$
>
> 任取$f\in X^{*}$, 由于$x_{n}\xrightarrow{w}x_0$, 可知
> $$ f\left(x_{n}\right)\to f\left(x_0\right) $$ 
> 故
> $$ f\left(y_{n}\right)= \frac{f\left(x_{n}\right) }{\left\| x_{n} \right\| }\to \frac{f\left(x_0\right) }{\left\| x_0 \right\| }= f\left(y_0\right) $$ 
> 因此
> $$ y_{n}\xrightarrow{w}y_0  $$ 
> 由于$\left\| x_0 \right\|\neq 0$, 由Hahn-Banach定理, 存在$f\in X^{*}$, 使得$\left\| f \right\|= 1$ , 且$f\left(x_0\right)= \left\| x_0 \right\|$, 即$f\left(y_0\right)= 1$.
> 则
> $$ \left\| y_{n}+ y_0 \right\|\ge f\left(y_{n}+ y_0\right)= f\left(y_{n}\right)+ f\left(y_0\right)\to 1+ 1= 2 $$ 
> 有三角不等式, $\left\| y_{n}+ y_0 \right\|\le \left\| y_{n} \right\|+ \left\| y_0 \right\|= 2$, 因此
> $$ \left\| y_{n}+ y_0 \right\|\to 2 $$ 
> 由一致凸性, 任取$\varepsilon > 0$, 存在$\delta > 0$, 使得对于任意$X$中满足$\left\| u \right\|= \left\| v \right\|= 1$的$u,v$, 都有
> $$ \left\| \frac{u+ v }{2 } \right\|> 1-\delta \implies \left\| u-v \right\|< \varepsilon  $$ 
> 由于$\left\| y_{n}+ y_0 \right\|\to 2$, $\left\| \frac{y_{n}+ y_0 }{ 2} \right\|\to 1$, 存在$N^{\prime}$, 使得当$n> N^{\prime}$时, 
> $$ \left\| \frac{y_{n}+ y_0 }{2 } \right\|> 1-\delta  $$ 
> 于是$\left\| y_{n}-y_0 \right\|< \varepsilon$, 这表明$y_{n}\to y_0$ 
> 最后
> $$ \left\| x_{n} -x_0\right\|\le \left\| x_{n} \right\|\cdot \left\| y_{n}-y_0 \right\|+ \left| \left\| x_{n} \right\|-\left\| x_0 \right\| \right|\cdot \left\| y_0 \right\|  $$ 
> 由于$\left\| x_{m} \right\|$ 有界,$\left\| y_0 \right\|= 1$, 可得$\left\| x_{n}-x_0 \right\|\to 0$, 即$x_{n}\to x_0$.