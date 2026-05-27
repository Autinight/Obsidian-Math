> [!exercise] 1
> 设 $X,Y$ 是线性赋范空间，$T \in \mathcal{B}(X,Y)$ 是紧算子，证明：$TX$ 是可分的。

> [!proof] Proof: 
> 设$B_{X}\left(r\right)$, 是$X$中半径为$r$的球. 那么
> $$ TX= \bigcup _{r = 1}^{\infty} T\left(B_{X}\left(r\right)\right) $$ 
> 
> 因此只需要证明
> $$ T\left(B_{X}\left(r\right)\right) $$
> 是可分的. 
> 又
> $$ T\left(B_{X}\left(r\right)\right)= T\left(rB_{X}\left(1\right)\right)= rT \left(B_{X}\left(1\right)\right) $$  
> 
> 因此只需要证明$T\left(B_{X}\left(1\right)\right)$是可分的.
> 
> 由于$T$是紧算子, $\overline{T\left(B_{X}\left(1\right)\right)}$是紧集, 从而$T\left(B_{X}\left(1\right)\right)$是预列紧的, 进而$T\left(B_{X}\left(1\right)\right)$是完全有界的. 而完全有界集是可分的, 因此$T\left(B_{X}\left(1\right)\right)$可分, 进而$T\left(B_{X}\left(r\right)\right)$可分, $TX$可分.

> [!exercise] 2
> 设 $k(s,t) \in L^2([a,b]\times [a,b])$，求证：算子
> $$
> T: x(t) \longmapsto \int_a^b k(s,t)x(s)\,ds
> $$
> 是 $L^2[a,b]$ 上的紧算子。（提示：利用全连续算子）

> [!proof] Proof: 
> 任取弱收敛点列$x_{n}\xrightarrow{w}x$ 
>
> 令
> $$ K\left(t\right)= \left\| k\left(\cdot ,t\right) \right\|_{L^{2}_{s}}= \left(\int_{a}^{b}\left| k\left(s,t\right) \right|^{2}\,d s \right)^{\frac{1}{2}} $$ 
> 则
> $$ \int_{a}^{b}K\left(t\right) ^{2}\,d t= \int_{a}^{b}\int_{a}^{b}\left| k\left(s,t\right) \right|^{2}\,d s\,d t= \left\| k \right\|_{L^{2}_{s,t}}^{2}< \infty $$ 
> 并且对于几乎所有的$t$, $K\left(t\right)< \infty$. 对于这些$t$, 我们定义
> $$ T_{t}:x\mapsto  \int_{a}^{b}k\left(s,t\right)x\left(s\right)\,d s $$ 
> 则
> $$ \left| T_{t}\left(x\right) \right|\le \left\| k\left(\cdot ,t\right) \right\|_{L^{2}_{s}}\left\| x \right\|_{L^{2}_{s}}= K\left(t\right)  \left\| x \right\|_{L^{2}_{s}}$$ 
> 从而$T_{t}\in \left(L^{2}\left[ a,b \right]\right)^{*}$.
> 对于几乎所有的$t$, 
> $$ \lim_{n\to \infty}T_{t}\left(x_{n}-x\right) = 0$$ 
> 
> 此外, $K\left(t\right)^{2}\in L^{1}\left[ a,b \right]$. 
> $$ \left| \left(Tx\right)\left(t\right) \right|\le \left\| k\left(\cdot ,t\right) \right\|_{L^{2}_{s}}\left\| x \right\|_{L^{2}_{s}}\le  K\left(t\right) \left\| x \right\|_{L^{2}_{s}}$$ 
> $$ \left\| Tx \right\|_{L^{2}}^{2}\le \int_{a}^{b} K\left(t\right)^{2}\left\| x \right\|^{2}_{L_{s}^{2}}\,d t\le \left\| k \right\|^{2}_{L_{s,t}^{2}}\left\| x \right\|^{2}_{L^{2}_{s}}\implies \left\| Tx \right\|_{L^{2}}\le \left\| k \right\|_{L^{2}_{s,t}}\left\| x \right\|_{L^{2}}$$ 
> 故
> $$ \left\| T \right\|\le \left\| k \right\|_{L^{2}_{s,t}} $$ 
> $T$是有界的线性算子.
> 并且由于弱收敛列是有界的, 存在$M$, 使得$\left\| x_{n} \right\|_{L^{2}},\left\| x \right\|_{L^{2}}\le M$.
>
> 那么
>  
> $$ \begin{aligned} \left| T_{t}\left(x_{n}-x\right) \right|&=\left|  \int_{a}^{b}k\left(s,t\right)\left(x_{n}\left(s\right)-x\left(s\right)\right)\,d s\right|\\&\le K\left(t\right)\left\| x_{n}-x \right\|_{L^{2}} \\&\le 2MK\left(t\right)\end{aligned}   $$ 
> 
> 又
> $$ \begin{aligned} \left\| Tx_{n}-Tx \right\|_{L^{2}}^{2}&= \int_{a}^{b}\left| \int_{a}^{b} k\left(s,t\right)\left(x_{n}\left(s\right)-x\left(s\right)\right)\,d s \right|^{2}\,d t\\&= \int_{a}^{b}\left| T_{t}\left(x_{n}-x\right) \right|^{2}\,d t \end{aligned} $$ 
> 其中
> $$ \left| T_{t}\left(x_{n}-x\right) \right|^{2}\le 4M^{2}K\left(t\right)^{2},\quad a.e.  $$ 
> 由控制收敛定理
> $$ \lim_{n\to \infty}\left\| Tx_{n}-Tx \right\|_{L^{2}}^{2}= \lim_{n\to \infty}\int_{a}^{b}\left| T_{t}\left(x_{n}-x\right) \right|^{2}\,d t = 0$$ 
> 即$\left\{ Tx_{n} \right\}$在$L^{2}$中收敛于$Tx$, 因此$T$是全连续的, 又$L^{2}\left[ a,b \right]$ 是自反空间, $T$是紧算子.

> [!exercise] Exercise 3
> $X$ 是线性赋范空间，设 $\{x_n\}\subset X$ 是弱有界的，即对任意 $f\in X^*$，数列 $\{f(x_n)\}$ 都有界，证明 $\{x_n\}$ 是有界的。

> [!proof] Proof: 
> 设
> $$ J_{X}: X\to X^{**} $$ 
> 是典范映射, 即
> $$ J_{X}\left(x\right)\left(f\right)= f\left(x\right) $$ 
> 
> 那么
> 对于任意的$f\in X^{*}$, 
> 
> $$ \left\{ J_{X}\left(x_{n}\right)\left(f\right) \right\} $$ 
> 是有界的, 这表明$\left\{ J_{X}\left(x_{n}\right) \right\}$是$X^{*}$上逐点有界的一列线性泛函. 由于$X^{*}$是Banach空间, 由Banach-Steinhause定理, 
> $$ \sup _{n}\left\| J_{X}\left(x_{n}\right) \right\|< \infty $$ 
> 又
> $$ \left\| J_{X}\left(x_{n}\right) \right\| = \left\| x_{n} \right\|$$ 
> 故
> $$ \sup _{n}\left\| x_{n} \right\| < \infty$$ 
> 即$\left\{ x_{n} \right\}$有界.

> [!exercise] Exercise 4
> 设 $X$ 是自反空间，证明 $X$ 中弱 Cauchy 列一定是弱收敛的。即证：如果 $\{x_n\}\subset X$ 满足对任意 $f\in X^*$，$\{f(x_n)\}$ 都是 Cauchy 列，则 $\{x_n\}$ 弱收敛。（提示：利用第 3 题结论）



> [!proof] Proof: 
> 对于任意的$f\in X^{*}$, $\left\{ f\left(x_{n}\right) \right\}$是$\mathbb{R}$上的Cauchy列, 故是收敛的, 存在$a_{f}\in \mathbb{R}$使得
> $$ \lim_{n\to \infty}f\left(x_{n}\right) = a_{f}$$ 
> 并且$\left\{ f\left(x_{n}\right) \right\}$是有界的, 故$\left\{ x_{n} \right\}$是弱有界的.  进而由Exercise 3, $\left\{ x_{n} \right\}$是有界点列.
> 对于任意的$f\in X^{*}$, 我们定义$\varphi : X^{*}\to \mathbb{R}$, 
> $$ \varphi \left(f\right) = a_{f}$$ 
> 由于
> $$ \varphi \left(f+ kg\right) = \lim_{n\to \infty}\left(f+ kg\right)\left(x_{n}\right)= \lim_{n\to \infty}f\left(x_{n}\right)+ k \lim_{n\to \infty}g\left(x_{n}\right)= a_{f}+ k a_{g}$$ 
> 故$\varphi$是线性算子.  
> 由于$x_{n}$是有界的, 设$\left\| x_{n} \right\|\le M$, 则
> $$ \left| f\left(x_{n}\right) \right| \le M\left\| f \right\|  $$ 
> 进而
> $$ \left| a_{f} \right| \le M\left\| f \right\| $$ 
> 故
> $$ \left| \varphi \left(f\right) \right|= \left| a_{f} \right| \le M\left\| f \right\|\implies \left\| \varphi  \right\|\le M  $$ 
> $\varphi \in X^{**}$. 由于$X$是自反的, 存在$x\in X$, 使得$x$与$\varphi$典范地对应. 即
> 
> $$ \varphi \left(f\right)= f\left(x\right) , \forall f\in X^{*}$$ 
> 因此
> $$ \lim_{n\to \infty}f\left(x_{n}\right)= f\left(x\right) ,\quad \forall f\in X^{*}$$ 
> 因此$\left\{ x_{n} \right\}$弱收敛.

> [!exercise] Exercise 5
> 对任意 $f\in X^*, y\in Y$，可定义以下秩 $1$ 算子：
> $$
> y\otimes f:X\to Y,\quad x\mapsto f(x)y.
> $$
> 证明：$T\in\mathcal L(X,Y)$ 是有穷秩算子（即 $\dim\mathcal R(T)<\infty$）当且仅当 $T$ 可分解为有限个秩 $1$ 算子，即 $\exists f_i\in X^*, y_i\in Y, i=1,2,\cdots,n$，使得
> $$
> T=\sum_{i=1}^n y_i\otimes f_i.
> $$

> [!proof] Proof: 
> **当**:
> 若$T$可分解为有限个秩$1$算子, 设
> $$ T= \sum _{i= 1}^{n}y_{i}\otimes f_{i} $$ 
> 则
> $$ \mathcal{R}\left(T\right)\subseteq \operatorname{span}\left\{ y_1,\cdots ,y_{n} \right\} $$ 
> 由于$\operatorname{dim}\operatorname{span}\left\{ y_1,\cdots y_{n} \right\}= n$, 故
> $$ \operatorname{dim}R\left(t\right)\le n< \infty $$ 
> 故$T$为有穷秩算子.
>
> **仅当**: 反过来, 若$T\in \mathcal{L}\left(X,Y\right)$是有穷秩算子.
> 取$\mathcal{R}\left(T\right)$的一组基$\left\{ y_1,\cdots ,y_{n} \right\}$. 
> 对于任意的$x$, 则存在唯一的一组数$l_{1}\left(x\right),\cdots ,l_{n}\left(x\right)$, 使得
> $$ T\left(x\right)= l_1\left(x\right)y_1+ \cdots + l_{n}\left(x\right)y_{n} $$ 
> $$ \begin{aligned} T\left(x_1+ kx_2\right)&= T\left(x_1\right)+ kT\left(x_2\right)\\&= \left(l_1\left(x_1\right)+ k l_1\left(x_2\right)\right)y_1+ \cdots + \left(l_{n}\left(x_1\right)+ kl_{n}\left(x_2\right)\right)y_{n} \end{aligned} $$ 
> 故
> $$ l_{i}\left(x_1+ kx_2\right)= l_{i}\left(x_1\right)+ k l_{i}\left(x_2\right) $$ 
> 故$l_{i}$是$X$上的线性算子.


> [!exercise] Exercise 6
> 设数列 $\{a_n\}\subset\mathbb K$ 收敛到 $0$。求证：映射
> $$
> T:\{\xi_n\}\mapsto \{a_n\xi_n\}
> $$
> 是 $\ell^p(p>1)$ 上的紧算子。
