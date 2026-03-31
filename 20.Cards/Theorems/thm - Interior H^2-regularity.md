---
type: theorem
aliases:
  - Interior H^2-regularity
technique:
  - Interpolation Principle
---



> [!theorem] Theorem: 
> Assume 
>  $$ a^{ij}\in C^{1}\left(U\right),b^{i},c\in L^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and 
>  $$ f\in L^{2}\left(U\right) $$
> Suppose furthermore that $u\in H^{1}\left(U\right)$ is a weak solution of the elliptic PDE
>  $$ Lu= f\quad \text{in }U. $$
> Then
>  $$ u\in H_{loc}^{2}\left(U\right); $$
> and for each subset $V\subset \subset U$ we have the estimate
>  $$ \left\| u \right\|_{H^{2}\left(V\right)}\le C\left(\left\| f \right\|_{L^{2}\left(U\right)}+ \left\| u \right\|_{L^{2}\left(U\right)}\right) $$     
> the constant $C$ depending only on $V,U$, and the coefficitents of $L$.

> [!proofsketch] Sketch of Proof: 
> - 选取$V\subset \subset W\subset \subset U$和提取$V$且支撑在$W$上的cutoff cuntion $\zeta$.
> - 将$B\left[ u,v \right]= \left(f,v\right)$左侧的低阶项喂给$f$, 变成$\left(\tilde{f},v\right)$, 从而
>    $$ \sum _{i,j= 1}^{n}\int _{U}a^{ij}u_{x_{i}}v_{x_{j}}= \int _{U}\tilde{f}v\,d x $$
> - 目的通过估计$Du$的[[thm - Difference Quotients and Weak Derivatives|差商]]$D_{k}^{h}Du$来给出二阶弱可导性. 
> - 通过设置$v= -D_{k}^{-h}\left(\zeta ^{2}D_{k}^{h}u\right)$, 一方面$v$本身携带了差商项$\zeta ^{2}D_{k}^{h}u$, 另一方面, 在和$u$配对的过程中, $v$中的$-D_{k}^{-h}$会传递给$a^{ij}u$变成$D_{k}^{h}\left(a^{ij}u_{x_{i}}\right)$.
> 这会产生一项 $D_{k}^{h}u_{x_{i}}$与$v_{x_{j}}$带来的$D_{k}^{h}u_{x_{j}}$一同给出内积形式. 这个过程中需要差商的分部积分公式.
> - 算子的椭圆性给出上述内积状的项会大于等于带$\left| D_{k}^{h}Du \right|^{2}$的一项, 从而我们构造出了$Du$的差商, 并给出了一个它的上界估计, 就是$u,v$积分配对的二次项部分, 再加上面的项产生过程中的一些其他副产物. 这个过程中使用了差商的类Lebniz律.
> - 接下来估计这个上界. 涉及到一次的$\left| D_{k}Du \right|$的部分, 我们利用[[lem - Young's Inequality|带epsilon的Young's Inequality]]将大部头甩给旁边的部分, 小部分用被估计项本身合并吸收进去. 而其它涉及到$\left| Du \right|,\left| u \right|, \left| f \right|$的部分, 我们简单处理后保留. 就得到下面的估计
>    $$ \int _{V}\left| D_{k}^{h}Du \right|^{2}\,d x\le C\int _{U}f^{2}+ u^{2}+ \left| Du \right|^{2}\,d x   $$ 
>   这就给出了$Du\in H^{1}_{loc}\left(U;\mathbb{R} ^{n}\right)$, 从而$u\in H_{loc}^{2}\left(U\right)$. 以及估计
>    $$ \left\| u \right\|_{H^{2}\left(V\right)}\le C\left(\left\| f \right\|_{L^{2}\left(U\right)}+ \left\| u \right\|_{H^{1}\left(U\right)}\right) $$ 
> - 刚刚得到的估计可以进一步加细, 我们依旧利用方程本身, 将$\left\| Du \right\|$甩给$\left\| u \right\|$和$\left\| f \right\|$来处理. 思路跟之前的操作类似, 令$v= \zeta ^{2}u$, 由于涉及到的导数阶数更少, 处理起来更简单. 只不过上面得到的$U$上的不等式我们要先缩小一圈, 得到某个$W\subset \subset U$的不等式, 适当调整cutoff function,  然后在$W$上对$\left| D_{k}^{h}u \right|$做向外延展的估计. 得到
>   $$ \int _{U}\zeta ^{2}\left| Du \right|^{2}\,d x\le \int _{U} f^{2}+ u^{2}\,d x $$
>   从而
>    $$ \left\| u \right\|_{H^{1}\left(W\right)}\le C\left(\left\| f \right\|_{L^{2}\left(U\right)}+ \left\| u \right\|_{L^{2}\left(U\right)}\right) $$
>   就得到最终的估计了.  

> [!note] Note: 关于cutoff functon
> - **为什么要用cutoff?**: 差商算子$D_{k}^{h}$会导致定义域向外延展, 因此想要在整个定义域$U$上做差商算符, 需要先截断出一个安全区$W\subset \subset U$, 再在$V\subset \subset W$上将其提取.
> - **为什么带入的形式是$\zeta ^{2}$?**: 因为计算的过程中涉及到对带截断函数项的求导, 如果带入$\zeta ^{2}$, 我们可以在每一项至少保留一个$\zeta$, 比如
>    $$ \left(\zeta ^{2}D_{k}^{h}u\right)_{x_{j}}= 2\zeta \zeta _{x_{j}}D_{k}^{h}u+ \zeta ^{2}D_{k}^{h}u_{x_{j}} $$
>   而后续处理各种放缩的过程中, 为了将右侧带$D_{k}^{h}Du$的项, 比如$\left| D_{k}^{h}Du \right|\left| Du \right|$将大头甩给$\left| Du \right|$, 小部分变成$\varepsilon \left| D_{k}^{h}Du \right|^{2}$与估计项本身合并吸收, 我们不得不另外需要一个$\zeta$与$\left| D_{k}^{h}Du \right|$结合成$\zeta^{2}\left| D_{k}^{h}Du\right|^{2}$将这一项带过去.  如果我们只是用$\zeta$截断, 就会很遗憾地发现我们右边可能需要一个$\sqrt{\zeta}$来配合, 但是我们只有$\zeta _{x_{j}}$.

> [!note] Note: 关于系数的正则性假设
> - **为什么要求$a^{ij}\in C^{1}$**: 
>     - 我们是通过让$v$携带了一个差商算子, 那么这个算子就会迫不得已地一同作用在$a^{ij}u_{x_{i}}$这个整体上, 从而带出一个$D_{k}^{h}a^{ij}$. 为了让这一项是一致有界的. 
>     - 同时, 使得$v$在边界处消失, 成为合法的test function.
> - **为什么要求$b^{i},c\in L^{\infty}$?**: 这是让我们估计低阶项的误差时, 可以无视系数$b^{i},c$的影响的最常用的假设, 通过这个假设, 任何出现在积分中的一次系数都会被Holder不等式丢掉外边取变成一个常数$C$. 



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

