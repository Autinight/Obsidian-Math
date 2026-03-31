---
type: theorem
aliases:
  - Global Approximation by Smooth Functions up to the boudnary in Sobolev Spaces]
technique:
  - Boundary Perturbation
---

> [!theorem] Theorem: 
> If $U\subseteq \mathbb{R} ^{n}$ is an bounded open subset with $C^{1}$ boundary $\partial U$. And if $u\in W^{k,p}\left(U\right)$ for some $1\le p< \infty$, then there exist $u_{m}\in C^{\infty}\left(\overline{U}\right)$ such that
>  $$ u_{m}\to u,\quad \text{in }W^{k,p}\left(U\right) $$    

> [!proofsketch] Sketch of Proof: 
> 1. 将边界和内部的关系用边界坐标卡上, 边界的定义函数与第$n$个坐标的大小关系来描述.
> 2. 通过边界附近的摄动和磨光, 将坐标球上的函数微平移并磨光进一个更小的球中去.
> 3. 验证磨光的结果在小球上是$W^{k,p}$收敛于$u$的.
> 4. 由于边界是紧的, 我们拿这些使得函数能磨光好的小球们做一个$\partial U$的有限覆盖, 再拿一个$V_0\subset \subset U$出来和小球们做成$U$的一个有限覆盖.
> 5. 最后, 由于单位分解只有有限多个, 我们可以控制它们的梯度了, 就可以用局部函数的$W^{k,p}\left(V_{i}\right)$范数取控制通过单位分解加权后的范数.

> [!note] Note: 
> **关于摄动**: mollifier要求巡查小球附近的信息, 为了不被边界逮到, 巡查之前先向上跑一点, 而想要移动, 就得先减肥来获得移动空间. 所以我们的操作是, 先减肥, 然后边向上跑路边巡查, 并且跑路大于巡查, 这样就能安全的mollify, 而且两边都不被逮到, 最后, 我们把这个操作的幅度逐渐变小, 也就是mollify的精度不断提高, 同时我们需要跑路的距离趋近于零, 就得到良好的mollify了

> [!remark] Remark: 
> If $u \in C\left(\overline{U}\right)$, then the sequence $u_{m}$ can be chosen to converge to $u$ uniformly(converge in $L^{\infty}$- norm). Since
>  $$ \left\| v_{\varepsilon }-u \right\|_{L^{\infty}\left(V\right)} \le \left\| \eta _{\varepsilon }*u_{\varepsilon }-u_{\varepsilon } \right\|_{L^{\infty}\left(V\right)}+ \left\| u_{\varepsilon }-u \right\|_{L^{\infty}\left(V\right)}$$ 
> where since $\eta _{\varepsilon }*u\to u$ uniformly and $\eta _{\varepsilon }$ can exchange with $\tau _{\lambda \varepsilon e_{n}}$, the first term is uniform. The second term converges uniformly since $u$ is uniformly continuous.

> [!proof] Proof: 
> **Translate the boundary**: Take arbitrary $x^{0}\in \partial U$, there exists $r_0> 0$ , and a $C^{1}$ function $\gamma :\mathbb{R} ^{n-1}\to \mathbb{R}$ such that the following holds after relabling when neccessary
>  $$ B\left(x^{0},r_0\right)\cap U=\left\{ x\in B\left(x^{0},r_0\right): x_{n}> \gamma \left(x_{1},\cdots ,x_{n-1}\right) \right\} $$
> **Perturbation and Mollification**: Let $V= B\left(x^{0},\frac{r_0 }{2 }\right)\cap U$. For each $x\in V$, let 
>  $$ x^{\varepsilon }:= x+ \lambda \varepsilon e_{n} $$
> For some fixed, sufficiently large $\lambda$ such that  for arbitrary sufficiently small $\varepsilon$, all $B\left(x^{\varepsilon },\varepsilon \right)$ lies in $B\left(x^{0},\frac{r_0 }{2 }\right)\cap U$ . Such $\lambda$ exists, since for each $y\in B\left(x^{\varepsilon },\varepsilon \right)$
>  $$ \begin{aligned} & y_{n}-\gamma \left(y_1,\cdots ,y_{n-1}\right)\\&> y_{n}-x_{n}^{\varepsilon }+ \left(\gamma \left(x_1,\cdots ,x_{n-1}\right)-\gamma \left(y_1,\cdots ,y_{n-1}\right)\right)\\&\ge \left(\lambda -1\right)\varepsilon - \sup \left| \gamma ^{\prime}  \right| \varepsilon = \left(\lambda -1-\sup \left| \gamma ^{\prime}  \right| \right)\varepsilon \end{aligned} $$ 
> Now we define $u_{\varepsilon }= u\left(x^{\varepsilon }\right)$. Next we write $v_{\varepsilon }= \eta _{\varepsilon }*u_{\varepsilon }$, since $\overline{V}\subseteq U_{\varepsilon }$, we have $v_{\varepsilon }\in C^{\infty}\left(\overline{V}\right)$. 
>
> **The Convergence**:
>  $$ \begin{aligned} \left\| D^{\alpha }v_{\varepsilon }-D^{\alpha }u \right\|_{L^{p}\left(V\right)}&\le \left\| v_{\varepsilon }-u_{\varepsilon } \right\|_{W^{k,p}\left(V\right)} + \left\| D^{\alpha }u_{\varepsilon }-D^{\alpha }u \right\|_{L^{p}\left(V\right)}\end{aligned} $$
> 
> 
> Since translation is continuous under $L^{p}$-norm, the second term on the right converges to $0$ as $\varepsilon \to 0^{+ }$. 
>  A similar trick as in [[Sobolev Spaces#Properties of Weak Derivatives|Properties of weak derivatives]] can show that $D^{\alpha }v_{\varepsilon }=\eta _{\varepsilon }*D^{\alpha }u_{\varepsilon }$ , then it follows that $\left\| v_{\varepsilon }-u_{\varepsilon } \right\|_{W^{k,p}\left(V\right)}\to 0$ as $\varepsilon \to 0^{+ }$. Thus
>  $$ \left\| v_{\varepsilon }-u \right\|_{W^{k,p}\left(V\right)}\to 0,\quad as\text{ }\varepsilon \to 0^{+ } $$ 
> **Approximation on Finite Cover**: Select $\delta > 0$, since $\partial U$ is compact, there are finitely many $x^{0}_{i}$ with raddi $r_{i}$, corresponding sets $V_{i}= U\cap B\left(x_{i}^{0},\frac{r_i }{2 }\right)$, $i=  1,\cdots,N$ such that $\partial U\subseteq \bigcup _{i= 1}^{N}B\left(x_0,\frac{r_{i} }{2 }\right)$. Furtheremore , there exists $v_{i}$ such that 
>  $$ \left\| v_{i} -u\right\| _{W^{k,p}\left(V_{i}\right)}\le \delta $$
> Then we choose $V_0\subset \subset U$ such that $\bigcup _{i= 0}^{N}V_{i}= U$, and $v_0\in C^{\infty}\left(\overline{V_0}\right)$ with 
>  $$ \left\|  v_0-u \right\|_{W^{k,p}\left(V_0\right)}\le \delta  $$
> **Global Approximation**:  $\left\{ \psi _{k} \right\}$ be a partition of unity subordinate to $\left\{ V_0,B\left(x_1^{0},\frac{r_1 }{2 }\right),\cdots ,B\left(x_{N}^{0},\frac{r_{N} }{2 }\right) \right\}$, then we define $v= \sum _{k= 0}^{N}\psi _{k}v_{k}$, $v\in C^{\infty}\left(\overline{U}\right)$ there exists $C$ independent with $u$ such that 
>  $$ \begin{aligned} \left\| v-u \right\|_{W^{k,p}\left(U\right)}&= \left\| \sum _{k= 0}^{N}\psi _{k}v_{i}-\sum _{k=0}^{N}\psi _{k}u \right\|_{W^{k,p}}\left(U\right)\\&\le \sum _{k= 0}^{N}\left\| \psi _{k}\left(v_{i}-u\right) \right\|_{W^{k,p}\left(V_{k}\right)}\\&\le \sum _{k= 0}^{N}C\left\| v_{i}-u \right\|_{W^{k,p}\left(V_{k}\right)}\\&\le C\left(N+ 1\right)\delta  \end{aligned} $$ 

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                if (!p.aliases) return false;
                return dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```
                                                                                                           