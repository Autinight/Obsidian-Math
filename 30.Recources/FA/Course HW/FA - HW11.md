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
