代靖涵 25120222201319

> [!exercise] Exercise: 
> 用数学归纳法证明: 对于任意的 $f^1, \dots, f^r \in V^*$ 有
> $$f^1 \wedge \dots \wedge f^r = r! \operatorname{A}_r(f^1 \otimes \dots \otimes f^r).$$

> [!proof] Proof: 
> 注意到
>  $$ \operatorname{Alt}\left(f^{1}\otimes \cdots \otimes f^{r}\right)= \frac{1 }{r! }\sum _{\sigma \in S_{r}}\left(\operatorname{sgn}\sigma \right)f^{\sigma \left(1\right)}\otimes \cdots \otimes f^{\sigma \left(r\right)} $$ 
> 命题对$r= 1$时显然成立. 假设等式对$r$成立, 考虑$r+ 1$的情况, 由归纳假设
>  $$ \begin{aligned} f^{1}\wedge \cdots \wedge f^{r+ 1}&= \frac{\left(r+ 1\right)! }{r! }\operatorname{Alt}\left(\left(f^{1}\wedge \cdots \wedge f^{r}\right)\otimes f^{r+ 1}\right)\\&=\frac{\left(r+ 1\right)! }{r! }\operatorname{Alt}\left(\sum _{\sigma \in S_{r}}\left(\operatorname{sgn}\sigma \right)f^{\sigma \left(1\right)}\otimes \cdots \otimes f^{\sigma \left(r\right)}\otimes f^{r+ 1}\right)\\&= \frac{\left(r+ 1\right)! }{r! }\sum _{\sigma \in S_{r}}\left(\operatorname{sgn}\sigma \right)\operatorname{Alt}\left(f^{\sigma \left(1\right)}\otimes \cdots \otimes f^{\sigma \left(r\right)}\otimes f^{r+ 1}\right)\\&= \frac{\left(r+ 1\right)! }{r! }\sum _{\sigma \in S_{r}}\left(\operatorname{sgn}\sigma \right)\left(\operatorname{sgn}\sigma \right)\operatorname{Alt}\left(f^{1}\otimes \cdots \otimes f^{r}\otimes f^{r+ 1}\right) \\& = \left(r+ 1\right)!\operatorname{Alt}\left(f^{1}\otimes \cdots \otimes f^{r+ 1}\right)\end{aligned}$$ 
> 其中第四行使用了$\operatorname{Alt}\left(f^{\sigma \left(1\right)}\otimes \cdots \otimes f^{\sigma \left(r\right)}\otimes f^{r+ 1}\right)$的反对称性.


> [!exercise] Exercise: 
> 设 $f^1, \dots, f^{r+s} \in V^*$, 证明:
> $$\begin{aligned} &(f^1 \wedge \dots \wedge f^r) \wedge (f^{r+1} \wedge \dots \wedge f^{r+s}) \\ &= \sum_{\substack{1 \le i_1 < \dots < i_r \le r+s \\ 1 \le j_1 < \dots < j_s \le r+s}} \delta^{1 \dots r+s}_{i_1 \dots i_r j_1 \dots j_s} (f^{i_1} \wedge \dots \wedge f^{i_r}) \otimes (f^{j_1} \wedge \dots \wedge f^{j_s}). \end{aligned}$$

> [!proof] Proof: 
>  $$ \begin{aligned} &\left(f^{1}\wedge \cdots \wedge f^{r}\right)\wedge \left(f^{r+ 1}\wedge \cdots \wedge f^{r+ s}\right)  \\&= \frac{1 }{r!s! }\sum _{\sigma \in S_{r+ s}}\left(\operatorname{sgn}\sigma \right)\sigma \left(\left(f^{1}\wedge \cdots \wedge f^{r}\right)\otimes  \left(f^{r+ 1}\wedge \cdots \wedge f^{r+ s}\right)\right)\\&=\frac{1 }{r!s! } \sum_{\substack{1 \le i_1 < \dots < i_r \le r+s \\ 1 \le j_1 < \dots < j_s \le r+s}}\sum _{\tau _1 \in S_{r},\tau _2 \in S_{s}} \left(f^{\tau _1 \left(i_1\right)}\wedge \cdots \wedge f^{\tau_1 \left(i_{r}\right)}\right)\otimes \left(f^{\tau _2 \left(j_1\right)}\wedge\cdots \wedge  f^{\tau _2 \left(j_{s}\right)}\right)\\&=\frac{1 }{r!s! }\sum_{\substack{1 \le i_1 < \dots < i_r \le r+s \\ 1 \le j_1 < \dots < j_s \le r+s}}\delta ^{1,\cdots ,r+ s}_{i_1i_{r}j_1\cdots j_{s}}\sum _{\tau _1 \in S_{r},\tau _2 \in S_{s}}\left(\operatorname{sgn}\tau _1 \right)\left(f^{\tau _1 \left(i_1\right)}\wedge \cdots \wedge f^{\tau _1 \left(i_{r}\right)}\right)\\&\otimes \left(\operatorname{sgn}\tau _2 \right)\left(f^{\tau _2 \left(j_1\right)}\wedge \cdots \wedge f^{\tau _2 \left(j_{s}\right)}\right)\\&= \frac{1 }{r!s! }\sum_{\substack{1 \le i_1 < \dots < i_r \le r+s \\ 1 \le j_1 < \dots < j_s \le r+s}}\delta ^{1,\cdots ,r+ s}_{i_1\cdots i_{r}j_1\cdots j_{s}}\sum _{\tau _1 \in S_{r},\tau _2 \in S_{s}}\left(f^{i_1}\wedge \cdots \wedge f^{i_{r}}\right)\otimes \left(f^{j_1}\wedge \cdots \wedge f^{j_{s}}\right)\\&=\sum_{\substack{1 \le i_1 < \dots < i_r \le r+s \\ 1 \le j_1 < \dots < j_s \le r+s}}\delta ^{1,\cdots ,r+ s}_{i_1\cdots i_{r}j_1\cdots j_{s}}\left(f^{i_1}\wedge \cdots \wedge f^{i_{r}}\right)\otimes \left(f^{j_1}\wedge \cdots \wedge f^{j_{s}}\right)\end{aligned}$$ 

> [!exercise] Exercise: 
> 证明: $n$ 维向量空间 $V$ 上的任意一个 2 阶协变张量都可以写成一个对称 2 阶协变张量与一个反对称 2 阶协变张量之和.

> [!proof] Proof: 
>  $$ \operatorname{Sym}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)=  \frac{1}{2}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)+ \frac{1}{2}\left(\varepsilon ^{j}\otimes \varepsilon ^{i}\right)$$
>  $$ \operatorname{Alt}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)= \frac{1}{2}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)-\frac{1}{2}\left(\varepsilon ^{j}\otimes \varepsilon ^{i}\right) $$  
> 于是
>  $$ \operatorname{Sym}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)+ \operatorname{Alt}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right) = \varepsilon ^{i}\otimes \varepsilon ^{j}$$ 
> 任取$\omega \in \mathcal{L}\left(V,V,\mathbb{R} \right)$, 那么$\omega$展开为
>  $$ \omega = \sum _{1\le i,j\le n}\omega _{ij}\varepsilon ^{i}\otimes \varepsilon ^{j} $$
> 从而
>  $$ \omega = \left(\sum _{1\le i,j\le n}\omega _{ij}\operatorname{Sym}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)\right)+ \left(\sum _{1\le i,j\le n}\omega _{ij}\operatorname{Alt}\left(\varepsilon ^{i}\otimes \varepsilon ^{j}\right)\right) $$  
> 为对称张量和反对称张量的和.

> [!exercise] Exercise: 
> 设 $\xi$ 是 $n$ 维向量空间 $V$ 上的一个 $3$ 阶协变张量, 它关于前两个自变量是对称的, 关于后两个自变量是反对称的. 证明: $\xi$ 是零张量.

> [!proof] Proof: 
> 设
>  $$ \xi = \xi _{ijk}\varepsilon ^{i}\otimes \varepsilon ^{j}\otimes \varepsilon ^{j} $$
> 则由于$\xi$关于前两个自变量对称, 我们有
>  $$ \xi _{ijk}= \xi _{jik} $$
> 由于$\xi$关于后两个自变量反对称, 我们有
>  $$ \xi _{ijk}= -\xi _{ikj} $$   
> 从而
>  $$ \begin{aligned} \xi _{ijk}&=\xi _{jik}= -\xi _{jki}\\&= -\xi _{kji}= \xi _{kij}\\&= \xi _{ikj}= -\xi _{ijk} \end{aligned} $$ 
> 于是$\xi _{ijk}= 0$.

> [!exercise] Exercise:
> 设 $\{e^i, 1 \le i \le n\}$ 是 $V^*$ 的一个基, $\{f^i, 1 \le i \le n\}$ 是 $V$ 上的 $n$ 个线性函数, 且 $f^i = a_j^i e^j$. 证明:
> $$f^1 \wedge \cdots \wedge f^n = \det(a_j^i)\, e^1 \wedge \cdots \wedge e^n.$$
> 因此, $f^1, \dots, f^n$ 线性无关的充要条件是 $\det(a_j^i) \ne 0$.

> [!proof] Proof: 
>  $$ \begin{aligned} f^{1}\wedge \cdots \wedge f^{n}&= \left(a_{j_1}^{1}e^{j_1}\right)\wedge \cdots \wedge \left(a^{n}_{j_{n}}e^{j_{n}}\right)\\&= a^{1}_{j_1}\cdots a^{n}_{j_{n}}e^{j_1}\wedge \cdots \wedge e^{j_{n}}\\&= \delta ^{j_1\cdots j_{n}}_{1\cdots n}a_{j_1}^{1}\cdots a_{j_{n}}^{n}e^{1}\wedge \cdots \wedge e^{n} \\&= \det \left(a_{j}^{i}\right)e^{1}\wedge \cdots \wedge e^{n}\end{aligned} $$ 

> [!exercise] Exercise: 
> 设 $X, Y, Z$ 是三个向量空间, $f: X \to Y, g: Y \to Z$ 是线性映射. 证明: 诱导映射 $f^*: Y^* \to X^*, g^*: Z^* \to Y^*$ 满足下列链法则:
> $$(g \circ f)^* = f^* \circ g^*: Z^* \to X^*$$

> [!proof] Proof: 
> 任取$z^{*}\in Z^{*} , x\in X$, 则
> $$ \begin{aligned} \left(g\circ f\right)^{*}\left(z^{*}\right)\left(x\right)& = z^{*}\left(g\left(f\left(x\right)\right)\right)\\&=g^{*}\left(z^{*}\right)\left(f\left(x\right)\right)\\&= f^{*}\left(g^{*}\left(z^{*}\right)\right)\left(x\right) \end{aligned} $$ 
> 因此
>  $$ \left(g\circ f\right)^{*}\left(z^{*}\right)= f^{*}\left(g^{*}\left(z^{*}\right)\right) $$ 
> 进而
>  $$ \left(g\circ f\right)^{*}= f^{*}\circ g^{*} $$ 