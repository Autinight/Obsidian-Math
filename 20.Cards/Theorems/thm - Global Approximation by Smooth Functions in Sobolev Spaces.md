---
type: theorem
aliases:
  - Global Approximation by Smooth Functions in Sobolev Spaces
technique:
  - Finite Overlapped Annular Decomposition
---

> [!theorem] Theorem: 
> If $U\subseteq \mathbb{R} ^{n}$ is a bounded open subset. $u\in W^{k,p}\left(U\right)$ for some $1\le p <  \infty$,  then there exists $u_{n}\in C^{\infty}\left(U\right)\cap W^{k,p}\left(U\right)$ such that
>  $$ u_{n}\to u,\quad \text{in }W^{k,p}\left(U\right) $$

> [!proofsketch] Sketch of Proof: 
> - **主要矛盾**: 如何把局部可积逼近扩大成整体的可积逼近. 
> - **核心方法**: 
>   - **环状覆盖**: 使用$U_{\varepsilon }$的有限重叠的环状邻域$V_{k}= U_{k+ 3}\setminus \overline{U}_{k+ 1}$, ($U_{k}= \left\{  x: \operatorname{dist}{\left( x,\partial U \right)}> \frac{1 }{k } \right\})$, 再配合上一个$V_0$吸收$U$剩下的部分, 形成一个$U$的覆盖$\left\{ V_{k} \right\}$, 使得只有相邻的$V_{k}$才能有重叠.
>   - **磨光**: 环状覆盖的另一个好处, 就是我们可以轻松地对$V_{k}$略微扩张$W_{k}= U_{k+ 4}\setminus \overline{U}_{k}$, 使得我们可以在$W_{k}$上mollify出$V_{k}$上的函数.
>   - **二进逼近**: 覆盖是以一列邻域呈现的, 容许我们使用二进逼近得到整体逼近.

> [!note] Note: 
> 这里之前我犯了一个错误, 我直接对$u$在局部上逼近然后做单位分解. 但这会产生一个问题, 我们无法控制单位分解$\psi _{k}$的梯度. 
> 比如说用薄球壳感受一下, 如果一个$\psi _{k}$在中心的位置大约是一, 在边界处又几乎变成零, 那么梯度大概就是
>  $$ \left| D\psi _{k} \right|\approx \frac{1 }{\Delta \text{厚度} }\approx k^{2}  $$
> 当$k\to \infty$时, 梯度会"爆炸", 由此可见我们确实控制不住. 
> 
> 正确的做法是先单位分解好, 对$\psi _{k}u$做磨光逼近.

> [!note] Note: 
> Annular覆盖只是为了叙述方便, 大部分的性质只需要流形上单位分解的性质就够用了, 比如下面光滑性需要的局部有限,和二进逼近用到可数性. 至于略微扩大这个操作, 我们也可以通过手动用$\operatorname{dist}$直接稍微扩大, 当然这些操作很麻烦就是了, 所以用Annular覆盖说起来方便一点.

> [!note] Note: 
> 有界性应该可以去掉, 我们为$U_{m}$加上$\left| x \right|< m$的条件, 就可以顺便向外不断扩大了.

> [!proof] Proof: 
> **Construct the Annular Open Cover**: For each $m\in \mathbb{Z} _{> 0}$, define
>  $$ U_{m}= \left\{ x\in U:\operatorname{dist}{\left( x,\partial U \right)> \frac{1 }{m }}  \right\} $$
> And define
>  $$ V_{m}:= U_{m+ 3}\setminus \overline{U}_{m+ 1} $$
> Then it is obvious that $V_{m}\subset \subset U$, and 
>  $$ \bigcup _{m= 1}^{\infty}V_{m}= \left\{ x\in U: 0< \operatorname{dist}{\left( x,\partial U \right)} < \frac{1}{2}  \right\} $$
> Then we choose 
>  $$ V_{0}= \left\{ x\in U: \frac{1}{4}< \operatorname{dist}{\left( x,\partial U \right)}  \right\} $$
>  we have $V_0\subset \subset U$, $\bigcup _{m= 0}^{\infty}V_{m}= U$.
>
> **Partition of Unity**: Take a [[dfn - Partition of Unity]] $\left\{ \psi _{m} \right\}_{m= 0}^{\infty}$ for $U$ subordinate to $\left\{ V_{m} \right\}_{m= 0}^{\infty}$ , such that $\psi _{m}\in C_{c}^{\infty}\left(V_{m}\right)$. Then from [[dfn - Weak Derivative|the property of weak derivative]], we have $\psi _{m}u\in W^{k,p}\left(U\right)$.
>
> **Enhance the Annular to Mollify**: Fix $\delta > 0$. We take $W_{m}= U_{m+ 4}\setminus \overline{U}_{m}$, then for sufficiently small $\varepsilon _{m}$, and $u_{m}= \eta _{\varepsilon _{m}}* \left(\psi _{m}u\right)\in C^{\infty}_{c}\left(U\right)$ there is 
>  $$ \begin{cases} \left\|  u_{m}-\psi _{m}u\right\|_{W^{k,p}\left(U\right)}\le \frac{\delta  }{2^{m+ 1} }\\ \operatorname{supp}u_{m}\subseteq W_{m}\end{cases}  $$
>
> **Estimate the Global Norm**: Let $v= \sum _{m= 0}^{\infty}u_{m}$, note that the summation is locally finite, we have $v\in C^{\infty}\left(U\right)$, finally
>  $$ \begin{aligned} \left\| v-u \right\|_{W^{k,p}\left(U\right)}&\le \sum _{m= 0}^{\infty}\left\| u_{m}-\psi _{m}u \right\|_{W^{k,p}\left(U\right)}\le \delta  \end{aligned} $$ 

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
