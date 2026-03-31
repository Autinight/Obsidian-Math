---
type: concept
aliases: [mollifier]
---

> [!definition] Definition: 
> If $U\subseteq \mathbb{R} ^{n}$ an open set, we denote
>  $$ U_{\varepsilon }:= \left\{ x\in U: \operatorname{dist}{\left( x,\partial U \right)}> \varepsilon   \right\} $$

## Mollifier

> [!definition] Definition: 
> We define a function $\eta :\mathbb{R} ^{n}\to \mathbb{R}$
>  $$ \eta \left(x\right)= \begin{cases} C\exp \left(\frac{1 }{\left| x \right|^{2}-1  }\right),&\left| x \right|< 1\\0,&\left| x \right|\ge 1   \end{cases}  $$ 
> where $C$ is selected such that $\int _{\mathbb{R} ^{n}}\eta= 1$. We call $\eta$ the **standard mollifier**.

> [!remark] Remark: 
> -  $$ \operatorname{supp}\eta = \overline{B}\left(0,1\right) $$ 

> [!definition] Definition: 
> For each $\varepsilon > 0$, we define $\eta _{\varepsilon }:\mathbb{R} ^{n}\to \mathbb{R}$
>  $$ \eta _{\varepsilon }\left(x\right):= \frac{1 }{\varepsilon ^{n} }\eta \left(\frac{x }{\varepsilon  }\right) $$
> Then $\int _{\mathbb{R} ^{n}}\eta _{\varepsilon }= 1$.

> [!remark] Remark: 
> -  $$ \operatorname{supp}\eta _{\varepsilon }= \overline{B}\left(0,\varepsilon \right) $$ 

## Mollification of a Local Integrable Function

> [!definition] Definition: 
> Let $f\in L_{loc}^{1}\left(U\right)$, $\varepsilon > 0$, we define the mollification $f^{\varepsilon }:U_{\varepsilon}\to \mathbb{R}$, by 
>  $$ f^{\varepsilon }= \eta _{\varepsilon }*f $$ 
> That is 
>  $$ f^{\varepsilon }\left(x\right)= \int _{U}\eta \left(x-y\right)f\left(y\right) dy= \int _{B\left(0,\varepsilon \right)}\eta \left(y\right)f\left(x-y\right)dy $$

> [!proposition] Proposition: 
> Let $f\in L_{loc}^{1}\left(U\right)$, then
> 1. $f^{\varepsilon }\in C^{\infty}\left(U_{\varepsilon }\right)$.
> 2.  $f^{\varepsilon }\left(x\right)\to f\left(x\right)$ for a.e. $x\in U$ as $\varepsilon \to 0$.
> 3. If $f\in C\left(U\right)$, then $f^{\varepsilon }\to f$ uniformly on each compact subset of $U$, as $\varepsilon \to 0$.
> 4. If $1\le p< \infty$, $f\in L_{loc}^{p}\left(U\right)$, then $f^{\varepsilon }\to f$ in $L_{loc}^{p}\left(U\right)$.

> [!note] Note: 
> 我们看到, 我们想得到$U$上的光滑函数, 就需要在比$U$稍微大一点的集合上搜集信息. **这是磨光的限制**. 但是很快就意识到, 想要扩大区域总是不方便的.
>
> 因此, 我们时常采用另一种视角, 对于要处理的函数, 我们率先延拓到整个(平移不变的)区域上, 这样磨光就是同一个区域上的变换了. 代价是什么呢? 我们把磨光的限制, 变成了**磨光的副作用**. 此时, 磨光会影响支撑集, 让他们向外晕染$\varepsilon$. 此时, 我们不再关注区域如何, 而是关注支撑集如何.

> [!proofsketch] Sketch of Proof: 
> 1. 利用卷积的线性,将差商算子传递到$\eta _{\varepsilon }$上面去. 然后由$\eta _{\varepsilon }$微分的一致连续性, 给出差商列的一致收敛.
> 2. 由于$\eta _{\varepsilon }$是支撑在球面上的, 且是$O\left(\frac{1 }{\varepsilon ^{n} }\right)$的, 完美地符合了LDT的条件.
> 3. LDT在函数是一致连续时,极限也是一致的. 但是我们需要注意使用mollifier会产生溢出, 所以我们需要添加一个中间的缓冲地带$W$, 使得对于充分小的$\varepsilon$, $V\subseteq W_{\varepsilon }$.

> [!proof] Proof: 
> 1.  $$ \begin{aligned}  D^{h}_{i}f^{\varepsilon }\left(x\right)&= \left(D^{h}_{i}\eta _{\varepsilon }\right)*f\left(x\right)\\&= \int _{U} D_{i}^{h}\tau _{-y}\eta _{\varepsilon } \left(x\right)\cdot f\left(y\right)\,\mathrm{d} y \\&= \int _{V}D_{i}^{h}\tau _{-y}\eta _{\varepsilon }\left(x\right)\cdot f\left(y\right)\,\mathrm{d} y\end{aligned} $$ 
>      for some open set $V \subset \subset U$.
>      Since $\eta _{\varepsilon ,x_{i}}$ is continuous and compactly supported, thus uniformly continuous, then
>        $$ D_{i}^{h}\tau _{-y}\eta _{\varepsilon }\left(x\right)\to \tau _{-y}\eta _{\varepsilon ,x_{i}}\left(x\right),\quad \text{as }h\to 0^{+ }$$
>       uniformly on $y\in V$.  We have $f^{\varepsilon }_{x_{i}}\left(x\right)$ exists and is equal to $\eta _{\varepsilon ,x_{i}}*f\left(x\right)$. A similar argument shows that $D^{\alpha }f^{\varepsilon }$ exists , and is equal to $D^{\alpha }\eta _{\varepsilon }* f$.
> 2.  $$ \begin{aligned} \left| f^{\varepsilon }-f \right| &=\left| \int _{B\left(0,\varepsilon \right)}\left(f\left(x-y\right)-f\left(x\right)\right)\eta_{\varepsilon } \left(y\right)\,\mathrm{d} y \right|\\&\le \frac{M }{\varepsilon ^{n} } \int _{B\left(0,\varepsilon \right)} \left| f\left(x-y\right)-f\left(x\right) \right|\,\mathrm{d} y\\ &= M^{\prime}    \frac{1 }{\left| B\left(0,\varepsilon \right) \right|  }\int _{B\left(0,\varepsilon \right)}\left| f\left(x-y\right)-f\left(x\right) \right|\,\mathrm{d} y\\&\to 0 ,\quad \text{as }\varepsilon \to 0^{+ } \end{aligned} $$ 
>    where the last line we use the [[thm - Lebesgue Differentiation Theorem|LDT]]
> 
> 3. Take any compact subset $V\subset \subset  U$, there exists open set $W$ such that $V\subset \subset W\subset \subset U$, for each $x\in V$, we apply 2. , since $f$ is uniformly continuous on $W$, then the third line in 2. convergent to 0 uniformly on $V$.

### Transaltion Invariance

> [!proposition] Proposition: 
> Suppose that $U\subseteq \mathbb{R} ^{n}$ is an open subset. Let $\tau_{h}$ be the [[dfn - Difference Quotients & Translation Operators|translation operator]] with $\left| h \right|< \varepsilon$. $u\in L_{loc}^{1}\left(U\right)$. Then 
>  $$ \eta _{\varepsilon }*\left(\tau_{h }u\right)= \tau_{h }\left(\eta _{\varepsilon }*u\right),\quad \text{on }U_{2\varepsilon } $$

> [!proof] Proof: 
>  $$ \begin{aligned} \eta _{\varepsilon }*\left(\tau_{h }u\right)&= \int _{B\left(0,\varepsilon \right)}\left(\tau_{h }u\right)\left(x-y\right)\eta \left(y\right)\,\mathrm{d} y\\&= \int _{B\left(0,\varepsilon \right)}u\left(x-y+ \varepsilon \right)\eta \left(y\right)\,\mathrm{d} y\\&= \tau_{h }\left(\int _{B\left(0,\varepsilon \right)}u\left(x-y\right)\eta \left(y\right)\,\mathrm{d} y\right)\\&= \tau_{h } \left(\eta _{\varepsilon }\right)\end{aligned} $$ 

