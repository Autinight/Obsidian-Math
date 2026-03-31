---
type: exercise
aliases: 
- Exercises for PDE (Evans) Ch5.
technique: []
---

> [!exercise] Exercise:
> Denote by $U$ the open square $\{x \in \mathbb{R}^2 \mid |x_1| < 1, |x_2| < 1\}$. Define
> $$u(x) = \begin{cases} 1 - x_1 & \text{if } x_1 > 0, |x_2| < x_1 \\ 1 + x_1 & \text{if } x_1 < 0, |x_2| < -x_1 \\ 1 - x_2 & \text{if } x_2 > 0, |x_1| < x_2 \\ 1 + x_2 & \text{if } x_2 < 0, |x_1| < -x_2. \end{cases}$$
> For which $1 \le p \le \infty$ does $u$ belong to $W^{1,p}(U)$?

> [!proof] Proof: 
>   $$ \int _{\Omega }u_{x_{i}}v= -\int_{\Omega } uv_{x_{i}}+ \int _{\partial \Omega } uv\nu _{x_{i}} $$
> Replace $v$ by any $\varphi \in C_{c}^{\infty}\left(\Omega \right)$, $\Omega$ by $R_1= \left\{ x_1> 1,\left| x_2 \right|< x_1  \right\}$, $R_2,R_3,R_4$ similarly. Since $u_{x_{i}}$ is defined on each rigion $R_{j}$. Add the four equations together to get
>  $$\left(\int _{R_1}+ \int _{R_2}+ \int _{R_3}+ \int _{R_4} \right)u_{x_{i}}\varphi \,\mathrm{d} x= -\int _{U}u\varphi _{x_{i}}\,\mathrm{d} x $$
> Where the partial term canceled out since $u$ is continuous and then $u\varphi$ take the same value on the overlapped boundary in different integral term,furthermore, the $\nu _{x_{i}}$ in different integral term are exactly opposite to each other. 
>
> Thus $u$ has the weak derivative $D^{x_1}u=-\chi _{R_1}+ \chi _{R_2}$, $D^{x_2}u= -\chi _{R_3}+ \chi _{R_4}$

> [!exercise] Exercise:
> Assume $n = 1$ and $u \in W^{1,p}(0, 1)$ for some $1 \le p < \infty$.
> 1. Show that $u$ is equal a.e. to an absolutely continuous function and $u'$ (which exists a.e.) belongs to $L^p(0, 1)$.
> 2. Prove that if $1 < p < \infty$, then
> $$|u(x) - u(y)| \le |x - y|^{1 - \frac{1}{p}} \left( \int_0^1 |u'|^p dt \right)^{1/p}$$
> for a.e. $x, y \in [0, 1]$.

> [!proof] Proof: 
> 1. Let $u^{\prime}\in L^{1}\left(\left(0,1\right)\right)$ be the weak derivative of $u$, we define $v:\left(0,1\right)\mapsto \mathbb{R}$,
>    $$ v\left(x\right)= \int _{0}^{x}u^{\prime} \left(t\right)\,\mathrm{d} t $$
> Then $v$ is absolutely continuous. For each $\varphi \left(x\right)\in C^{\infty}_{c}\left(0,1\right)$, since $\left| u^{\prime} \left(t\right)\varphi ^{\prime} \left(x\right) \right|$ is integrable on the domain we need, the Fubuni Theorem shows that
>  $$ \begin{aligned} \int _{0}^{1}v\left(x\right)\varphi ^{\prime} \left(x\right)\,\mathrm{d} x&= \int _{0}^{1}\int _{0}^{x}u^{\prime} \left(t\right)\varphi ^{\prime} \left(x\right)\,\mathrm{d} t\,\mathrm{d} x\\&=  \int _{0}^{1}\int _{t}^{1}\varphi ^{\prime} \left(x\right)u^{\prime} \left(t\right)\,\mathrm{d} x\,\mathrm{d} t\\&= -\int _{0}^{1}u^{\prime} \left(t\right)\varphi \left(t\right)\,\mathrm{d} t\\&= \int _{0}^{1}u\left(x\right)\varphi ^{\prime} \left(x\right)\,\mathrm{d} x\end{aligned} $$  
> Thus $u= v+ C$, a.e. on $\left(0,1\right)$ for some constant $C$. Since $v$ is absolutely continuous, the classical derivative exists a.e and coincide with $u^{\prime}$.
> 
> 2. From 1, we may assume that $u$ is absolutely integrabl, and $x> y$
>  $$ \begin{aligned} u\left(x\right)-u\left(y\right)&= \int _{y}^{x}u^{\prime} \left(z\right)\,\mathrm{d} z= \int _{0}^{1}\chi _{\left\{ x\le z\le y \right\}} u^{\prime} \left(z\right)\,\mathrm{d} z\end{aligned} $$
>
> Then 
>  $$ \begin{aligned} \left| u\left(x\right)-u\left(y\right) \right|&\le \int _{0}^{1}\chi _{\left\{ x\le z\le y \right\}}\left| u^{\prime} \left(z\right) \right|z\\&\le \left\| \chi _{\left\{ x\le z\le y \right\}}\left(z\right) \right\|_{L^{1-\frac{1 }{p }}\left(0,1\right)}\left\| u^{\prime}  \right\|_{L^{p}\left(0,1\right)}   \\&= \left| x-y \right|^{1-\frac{1 }{p }}\left(\int _{0}^{1}\left| u^{\prime}  \right|^{p} \right)^{\frac{1}{p}} \end{aligned} $$ 

> [!exercise] Exercise:
> Let $U, V$ be open sets, with $V \subset \subset U$. Show there exists a smooth function $\zeta$ such that $\zeta \equiv 1$ on $V$, $\zeta = 0$ near $\partial U$. (Hint: Take $V \subset \subset W \subset \subset U$ and mollify $\chi_W$.)

> [!proof] Proof: 
> Take $W$ and $\varepsilon$ such that  $V\subseteq W_{\varepsilon }\subset \subset W\subseteq U_{2\varepsilon }\subset \subset U$ . Define
>  $$ \begin{aligned} \xi \left(x\right)= \eta _{\varepsilon }*\chi _{W}&= \int _{W}\eta _{\varepsilon }\left(x-y\right)\chi _{W}\left(y\right)\,\mathrm{d} y \\&= \int _{W}\eta _{\varepsilon }\left(x-y\right)\,\mathrm{d} y \end{aligned}$$ 
> If $x\in V$, then $B\left(x,\varepsilon \right)\subseteq W$, we have
>  $$ \xi \left(x\right)= \int _{B\left(x,\varepsilon \right)}\eta _{\varepsilon }\left(x-y\right)= \int _{B\left(0,\varepsilon \right)}\eta _{\varepsilon }\left(y\right)\,\mathrm{d} y= 1 $$
> If $x\in U\setminus U_{\varepsilon }$, then $B\left(x,\varepsilon \right)\subseteq U\setminus \overline{W}$ , we have
>  $$ \xi \left(x\right)= \int _{W}0\cdot \chi _{W}\left(y\right)\,\mathrm{d} y = 0$$ 

> [!exercise] Exercise:
> Assume that $U$ is bounded and there exists a smooth vector field $\boldsymbol{\alpha}$ such that $\boldsymbol{\alpha}\cdot\boldsymbol{\nu} \geq 1$ along $\partial U$, where $\boldsymbol{\nu}$ as usual denotes the outward unit normal. Assume $1 \leq p < \infty$.
>
> Apply the Gauss–Green Theorem to $\int_{\partial U} |u|^p \boldsymbol{\alpha}\cdot\boldsymbol{\nu} \, dS$, to derive a new proof of the trace inequality
> $$\int_{\partial U} |u|^p \, dS \leq C \int_{U} |Du|^p + |u|^p \, dx$$
> for all $u \in C^1(\bar{U})$.

^Geometrical-proof-for-trace-inequality

> [!proof] Proof: 
> $$ \begin{aligned} \operatorname{div}\left(\left| u \right|^{p}\alpha   \right)&= p \left| u \right|^{p-1}\left(\operatorname{sgn}u\right) Du\cdot \alpha + \left| u \right|^{p}   \operatorname{div}\left(\alpha \right)\\&\le C \left| u \right|^{p-1}\left| Du \right|+ C\left| u \right|^{p}    \end{aligned}$$
> The Young's Inequality gives that 
>  $$ \left| u \right|^{p-1}\left| Du \right|\le C \left| u \right|^{p} + C\left| Du \right|^{p}     $$
> Then 
>  $$ \operatorname{div}\left(\left| u \right|^{p}\alpha  \right)\le C\left(\left| Du \right|^{p}+ \left| u \right|^{p}  \right) $$  
> The Gauss-Green Theorem gives that 
>  $$ \begin{aligned} \int _{\partial U}\left| u \right|^{p}\,\mathrm{d} S\le  \int _{\partial U}\left| u \right|^{p}\alpha \cdot \nu \,\mathrm{d} S&= \int _{U} \operatorname{div}\left(\left| u \right|^{p}\alpha  \right)\\&\le C\int _{U}\left| Du \right|^{p}+ \left| u \right|^{p}\,\mathrm{d} x    \end{aligned}  $$ 

> [!exercise] Exercise: 
> Let $U$ be boudned with $C^{1}$ boundary. Prove there does not exist a bounded linear operator 
>  $$ T: L^{p}\left(U\right)\to L^{p}\left(\partial U\right) $$ 
> such that $Tu= u|_{\partial U}$ whenever $u\in C\left(\overline{U}\right)\cap L^{p}\left(U\right)$.

> [!proof] Proof: 
> By stratghtening the boundary and partition of unity, we may assume without loss of generarility that 
> $U= \left(0,1\right)^{n}$, $\partial U= \left\{ x_{n}= 0 \right\}\cap [0,1]^{n}$. 
> Let 
>  $$u\left(x\right)= x_{n}^{k} $$
> Then 
>   $$ u|_{\partial U}= 1$$
>  $$ \left\| u|_{\partial U} \right\|_{L^{p}\left(\partial U\right)}=1$$
>
>  $$ \begin{aligned} \left\| u \right\|_{L^{p}\left(U\right)}&= \int _{0}^{1}\cdots \int _{0}^{1}\int _{0}^{1}x_{n}^{k}\,\mathrm{d} x_{n}\,\mathrm{d} x_1\cdots \,\mathrm{d} x_{n-1}\\&= \frac{1 }{k+ 1 }\end{aligned} $$
>
> If such operator exists , with $\left\| Tu \right\|_{L^{p}\left(\partial U\right)}\le C\left\| u \right\|_{L^{p}\left(U\right)}$
> then the above gives that 
>  $$ 1\le \frac{C }{k+ 1 } $$ 
>  By taking $k\to \infty$ we get a contradiction.

> [!exercise] Exercise: 
> Integrate by parts to prove the interpolation inequality:
>  $$ \left\| Du \right\|_{L^{2}}\le C\left\| u \right\|^{\frac{1}{2}}_{L^{2}}\left\| D^{2}u \right\|_{L^{2}}^{\frac{1}{2}} $$
> for all $u\in C^{\infty}_{c}\left(U\right)$. Assume $U$ is bounded, $\partial U$ is smooth, and prove this inequality if $u\in H^{2}\left(U\right)\cap H_{0}^{1}\left(U\right)$. 

> [!proof] Proof: 
> If $u\in C_{c}^{\infty}\left(U\right)$, then 
>  $$ \int _{U}  u_{x_{i}} u_{x_{i}} \,\mathrm{d} x=  - \int _{U}u u_{x_{i}x_{i}}+ \int _{\partial U} u u_{x_{i}}\nu = -\int _{U}u u _{x_{i}x_{i}}\,\mathrm{d} x  $$
>   
> $$ \begin{aligned} \int _{U}Du\cdot Du  \,\mathrm{d} x&=  -\int _{U}u\left(u_{x_1x_1} + \cdots + u_{x_{n}x_{n}}\right)\,\mathrm{d}x\\&= -\int _{U}u\Delta u\,\mathrm{d} x \end{aligned}$$  
> Thus
>  $$ \begin{aligned} \left\| Du \right\|_{L^{2}}^{2}\le \left\| u \right\|_{L^{2}}\left\| \Delta u \right\|_{L^{2}} \end{aligned} $$ 
>
>  $$ \begin{aligned} \int _{U}\left| D^{2}u \right|^{2}&=\int _{U} \sum _{i,j}u_{x_{i}x_{j}}^{2}\\&= -\sum _{i,j}\int _{U}u_{x_{i}}u_{x_{i}x_{j}x_{j}}\\&= -\sum _{i,j}\int _{U}u_{x_{i}}u_{x_{j}x_{j}x_{i}} \\&= \sum _{i,j}\int _{U}u_{x_{i}x_{i}}u_{x_{j}x_{j}}\,\mathrm{d} x\\&= \int _{U}\Delta u^{2}\,\mathrm{d} x\end{aligned}  $$
> Thus
>  $$ \left\| D^{2}u \right\|_{L^{2}\left(U\right)}= \left\| \Delta u \right\|_{L^{2}\left(U\right)} $$
> Then 
>  $$ \left\| Du \right\|^{2}_{L^{2}}\le \left\| u \right\|_{L^{2}}\left\| D^{2} u \right\|_{L^{2}} $$ 
> If $U$ is bounded and $\partial U$ is $C^{1}$, and if  $u\in H^{2}\left(U\right)\cap H_{0}^{1}\left(U\right)= W^{2,2}\left(U\right)\cap W^{1,2}_{0}\left(U\right)$. 
> 
> 
> There exists $\left\{ w_{k} \right\}\in C_{c}^{\infty}\left(U\right)$ such that 
>  $$ w_{k}\to u\text{ in }H^{1}_{0} $$ 
> Since 
>  $$ \left\| Dw_{k} \right\|_{L^{2}}^{2}\le \left\| w_{k} \right\|_{L^{2}}\left\| D^{2}w_{k} \right\|_{L^{2}} $$
>  $$ \left\| Dw_{k} \right\|_{L^{2}}^{2}\to \left\| Du \right\|_{L^{2}}^{2},\quad \left\|  \right\| $$
>  $$ \left\| Dv_{} \right\|_{L^{2}}^{2}\le \left\| v \right\|_{L^{2}}\left\| \Delta v \right\|_{L^{2}} $$ 

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
