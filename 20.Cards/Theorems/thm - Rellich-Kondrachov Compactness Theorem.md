---
type: theorem
aliases: 
- Rellich-Kondrachov Compactness Theorem
technique: []
---

> [!theorem] Theorem: 
> Assume $U$ is a boudned open subset of $\mathbb{R} ^{n}$ and $\partial U$ is $C^{1}$. Suppose $1\le p< n$. Then 
>  $$ W^{1,p}\left(U\right)\subset \subset L^{q}\left(U\right) $$
> for each $1\le q< p^{*}$. 

> [!proofsketch] Sketch of Proof: 
> - 嵌入在[[thm - Estimates for W^{1,p} when p less than n]]就说明了, 只需要对有界序列找出收敛的子列.
> - 方便后续磨光论证和Arzela-Ascoli的使用, 做标准地延拓预处理, 并稍微扩大使得涉及到的函数都紧支撑在某个$V$上.
> - **主要脉络**: 我们需要
>   - $u_{m}^{\varepsilon }\to u_{m}$ as $\varepsilon \to 0^{+ }$ unifomrly in $m$ in $L^{q}\left(\mathbb{R} ^{n}\right)$
>   - find subsequence $\left\{ u_{m_{j}}^{\varepsilon } \right\}_{j= 1}^{\infty}$ converges unifromly on $V$ for fixed $\varepsilon$.
> 
>   然后就可以通过对角线论证找到一致收敛的子列$\left\{ u_{m_{l}} \right\}_{l = 1}^{\infty}$.
> - **$\varepsilon$关于$m$的一致收敛**: 通过插值不等式, 将$L^{q}$范数用$L^{1}$范数和$L^{p^{*}}$范数控制. $\eta$的性质给出$L^{1}$范数的一致收敛性, 函数列的有界性可以借助GNS不等式给出$L^{p^{*}}$的一致有界.
> - **磨光函数列的一致收敛子列存在性**: 对于固定的$\varepsilon$ , 直接一致地控制$\left| u_{m}^{\varepsilon }\left(x\right) \right|$和$\left| D_{m}^{\varepsilon }\left(x\right) \right|$来分别给出一致有界和一致等度连续. Arzela-Ascoli紧致性判据就给出$V$上一致收敛的子列.

> [!proof] Proof: 
> **Embedding** Fix $1\le q< p^{*}$ and note that $U$ is bounded, from [[thm - Estimates for W^{1,p} when p less than n]], we have 
>  $$ W^{1,p}\left(U\right)\subseteq L^{q}\left(U\right),\quad \left\| u \right\|_{L^{q}\left(U\right)}\le C\left\| u \right\|_{W^{k,p}\left(U\right)} $$
> Now it remains therefore to show that if $\left\{ u_{m} \right\}_{m= 1}^{\infty}$ is bounded in $W^{1,p}\left(U\right)$, then  there exists a subsequence $\left\{ u_{m_{j}} \right\}_{j= 1}^{\infty}$ which converges in $L^{q}\left(U\right)$.
> 
> **Preprocessing**: In veiw of the [[thm - Extension Theorem in W^{1,p}]] we may with no loss of generality assume that $U= \mathbb{R} ^{n}$ and $\left\{ u_{m} \right\}_{m= 1}^{\infty}$ all have compact support in some boudned open set $V\subseteq \mathbb{R} ^{n}$. We also may assume 
>  $$ \sup _{m}\left\| u \right\|_{W^{1,p}\left(V\right)}< \infty $$ 
>
> **Mollify**: Let 
>  $$ u_{m}^{\varepsilon}:= \eta _{\varepsilon }*u_{m}\quad \left(m= 1,\cdots \right) $$
> We may assume for sufficiently small $\varepsilon$, all $u_{m}^{\varepsilon}$ has compact support in $V$ (by enhancing $V$ if necessary).
>  $$ \begin{aligned}  u_{m}^{\varepsilon }\left(x\right)-u_{m}\left(x\right) &=\frac{1 }{\varepsilon ^{n} } \int _{B\left(x,\varepsilon \right)}\eta \left(\frac{x-z }{\varepsilon  }\right)\left(u_{m}\left(z\right)-u_{m}\left(x\right)\right)  dz\\&=  \int _{B\left(0,1\right)}\eta\left(y\right)\left(u_{m}\left(x-\varepsilon y\right)-u_{m}\left(x\right)\right)\,\mathrm{d} y \\&= \int _{B\left(0,1\right)}\eta \left(y\right)\int _{0}^{1}\frac{\mathrm{d}}{\mathrm{d}t}u_{m}\left(x-\varepsilon ty\right)\,\mathrm{d} t\,\mathrm{d} y\\&=-\varepsilon  \int _{B\left(0,1\right)}\eta \left(y\right)\int _{0}^{1}Du_{m}\left(x-\varepsilon ty\right)\cdot y\,\mathrm{d} t\,\mathrm{d} y\end{aligned}  $$ 
> Thus 
>  $$ \begin{aligned} \int _{V}\left| u_{m}^{\varepsilon }\left(x\right)-u_{m}\left(x\right) \right|\,\mathrm{d} x&\le  \varepsilon  \int _{B\left(0,1\right)}\eta \left(y\right)\int _{0}^{1}\int _{V}\left| Du_{m}\left(x-\varepsilon ty\right) \right|\,\mathrm{d} x\,\mathrm{d} t\,\mathrm{d} y\\&\le \varepsilon \int _{B\left(0,1\right)}\eta \left(y\right)\left\| Du_{m} \right\|_{L^{1}\left(\mathbb{R} ^{n}\right)}\,\mathrm{d} y\\&= \varepsilon \left\| Du_{m} \right\|_{L^{1}\left(\mathbb{R} ^{n}\right)}\\&\le \varepsilon C\left\| Du_{m} \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\le \varepsilon C \sup _{m}\left\| u_{m} \right\|_{W^{1,p}\left(V\right)}    \end{aligned} $$ 
> Then 
>   $$ \lim_{\varepsilon \to 0^{+ }}\left\| u_{m}^{\varepsilon }-u_{m} \right\|_{L^{1}\left(V\right)}= 0,\quad \forall m $$ 
> The other side, the GNS Inequality gives that 
>  $$ \left\| u_{m}^{\varepsilon }-u_{m} \right\|_{L^{p^{*}}\left(V\right)}\le 2\left\| u_{m} \right\|_{L^{p^{*}\left(V\right)}}\le C \sup _{m}\left\| u_{m} \right\|_{W^{1,p}\left(V\right)}< \infty $$
> Then from the interpolation inequality, 
>  $$ \left\| u_{m}^{\varepsilon }-u_{m} \right\|_{L^{q}\left(V\right)}\le \left\| u_{m}^{\varepsilon }-u_{m} \right\|_{L^{1}\left(V\right)}^{\theta }\left\| u_{m}^{\varepsilon }-u_{m} \right\|_{L^{^{*}}\left(V\right)}^{1-\theta } $$
> converges to $0$ as $\varepsilon \to 0^{+ }$ uniformly in $m$, where $\frac{1}{q}= \theta + \frac{\left(1-\theta \right) }{p^{*} },0< \theta < 1$.
>
> **Uniformly bounded and equicontinuous for $\left\{ u_{m}^{\varepsilon } \right\}_{m= 1}^{\infty}$**: 
>  $$ \begin{aligned} \left| u_{m}^{\varepsilon }\left(x\right) \right|&\le \int _{B\left(x,\varepsilon \right)}\eta _{\varepsilon }\left(x-y\right)\left| u_{m}\left(y\right) \right|\,\mathrm{d} y\\&\le \left\| \eta _{\varepsilon } \right\|_{L^{\infty}\left(\mathbb{R} ^{n}\right)}\left\| u_{m} \right\|_{L^{1}\left(V\right)}\le \frac{C }{\varepsilon ^{n} }< \infty   \end{aligned} $$
>  $$ \begin{aligned} \left| Du_{m}^{\varepsilon } \right|&\le \int _{B\left(x,\varepsilon \right)}\left| D\eta _{\varepsilon }\left(x-y\right) \right|\left| u_{m}\left(y\right) \right|\,\mathrm{d} y\\&\le \left\| D \eta _{\varepsilon } \right\|_{L^{\infty}\left(\mathbb{R}^{n}\right)}\left\| u_{m} \right\|_{L^{1}\left(V\right)}\le \frac{C }{ \varepsilon ^{n+ 1}}< \infty    \end{aligned} $$
> Then it is not hard to verify that for fixed $\varepsilon $, $\left\{ u_{m}^{\varepsilon } \right\}_{m= 1}^{\infty}$  is uniformly bounded and equicontinuous.
>
> **Uniformly Convergent Subsequence for mollified functions**: We utilize [[thm - Arzela-Ascoli Compacteness Criterion]] to obtain a subsequence $\left\{ u^{\varepsilon }_{m_{j}} \right\}_{j= 1}^{\infty}$ that convergent uniformly in $L^{q}\left(V\right)$, specifically 
>  $$ \limsup_{j,k\to \infty}\left\| u_{m_{j}}^{\varepsilon }-u_{m_{k}}^{\varepsilon } \right\|_{L^{q}\left(V\right)}= 0 $$
>
> **Approximation by smooth function**:From the uniformly convergent,  for each $\delta > 0$, there exists $\varepsilon > 0$ such that 
>  $$ \left\| u_{m}^{\varepsilon }-u_{m} \right\|\le \frac{\delta  }{2 } ,\quad \forall m $$
>  Then 
>  $$ \limsup_{j,k\to \infty}\left\| u_{m_{j}}-u_{m_{k}} \right\|_{L^{q}\left(V\right)}\le \delta  $$ 
>
> **Diagonal argument**: We use the above assertion with $\delta = 1,\frac{1}{2},\frac{1}{3},\cdots$ and use a standard diagonal argtument to extract a subsequence $\left\{ u_{m_{l}} \right\}_{l = 1}^{\infty}$ satisfyin 
>  $$ \limsup_{l,k\to \infty}\left\| u_{m_{l}}-u_{m_{k}} \right\|_{L^{q}\left(V\right)}= 0 $$ 

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                return p.aliases && dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```

