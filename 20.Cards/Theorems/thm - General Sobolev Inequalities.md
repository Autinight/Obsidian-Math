---
type: theorem
aliases: 
- General Sobolev Inequalities
technique: []
---

> [!theorem] Theorem: 
> Let $U$ be a bounded open subset of $\mathbb{R} ^{n}$, with a $C^{1}$ boundary. Assume $u\in W^{k,p}\left(U\right)$.
> - If 
>    $$ k< \frac{n }{p }, $$
>   Then $u\in L^{q}\left(U\right)$, where
>    $$ \frac{1 }{q }= \frac{1 }{p }-\frac{k }{n } $$
>   We have in addition the estimate
>    $$ \left\| u \right\|_{L^{q}\left(U\right)}\le C\left\| u \right\|_{W^{k,p}\left(U\right)} $$
>   The constant $C$ depending only on $k,p,n$ and $U$.
> - If
>    $$ k> \frac{n }{p } $$
>   then $u\in C^{k-\left[\frac{n }{p } \right]-1,\gamma }\left(\overline{U}\right)$, where
>    $$ \gamma = \begin{cases} \left[ \frac{n }{p } \right]+ 1-\frac{n }{p },&\text{if }\frac{n }{p }\text{ is not an integer}\\ \text{any positive number }< 1,&\text{if }\frac{n }{p }\text{ is and integer} \end{cases}  $$
>   We have in addtition the estimate
>    $$ \left\| u \right\|_{C^{k-\left[ \frac{n }{p } \right]-1,\gamma }\left(\overline{U}\right)}\le C\left\| u \right\|_{W^{k,p}\left(U\right)} $$
>   The constant $C$ depending only on $k,p,n,\gamma$ and $U$.      

> [!remark] Remark: 
> 如果$u$的弱导数$D_{i}u$如果有一个连续的version $v^{*}$, 那么$u$就有一个连续可微的version $u^{*}$, 其经典导数就是$v^{*}$. 因此我们可以认为如果$u$有相当高阶的弱可导性, 那么它经过修饰也会有相当高的光滑性.

> [!proofsketch] Sketch of Proof:
> **想法是不断用可导性去换可积性** 
> - **$k< \frac{n }{p }$**: 
>    由于$u\in W^{k,p}\left(U\right)$, 可以对不超过$k-1$阶的导数都使用[[thm - Gagliardo-Nirenberg-Sobolev Inequality|GNS  Inequality]], 得到$u\in W^{k-1,p^{*}}\left(U\right)$. 重复下去, 每给$k$减一个1, 就给$p$添一个$*$, 这相当于给 $\frac{1}{p}$减一个$\frac{1}{n}$. 如果记$p^{m{*}}$为给$p$添了$m$个$*$, 那么这中间的每个$p^{m{*}}$需要小于$n$, 也就是$\frac{1}{p^{m*}}> \frac{1 }{n }$. 于是如果我们想重复这个过程$k$次得到$u\in W^{0,p^{k*}}\left(U\right)= L^{p^{k*}}\left(U\right)$. 就需要一开始的$\frac{1}{p}$能减掉$k$个$\frac{1 }{n }$, 即 $k< \frac{n }{p }$. 此时
>     $$ \frac{1}{p^{k*}}= \frac{1 }{p }-\frac{k }{n } $$
>   并注意到中间每一步都给出估计
>    $$ \left\| u \right\|_{W^{k-m-1,p^{\left(m+ 1\right)*}}} \le C_{m}\left\| u \right\|_{W^{k-m},p^{m^{*}}}$$ 
>    有限多次后给出
>    $$ \left\| u \right\|_{L^{p^{k*}}\left(U\right)}= \left\| u \right\|_{W^{0,p^{k*}}}\le C\left\| u \right\|_{W^{k,p}} $$  
> - **$k> \frac{n }{p }$**: 此时, 也可以重复上述过程得到
>     $$ u\in W^{k-l,p^{l*}}\left(U\right) $$
>     只要$\frac{1}{p}> \frac{l }{n }$时, 都可以得到. 则$l < \frac{n }{p }$. 我们就重复到不能重复为止, 
>   - 当$\frac{n }{p }$不是整数时, 就取$l$使得
>       $$ l< \frac{n }{p }< l+ 1,\quad l = \left[ \frac{n }{p } \right]$$ 
>       此时, 我们通过这种方式换出来最高的可积性, 阶数为
>       $$ r:= p^{l*}= \frac{pn }{n-pl }= \frac{n }{\frac{n}{p}-l }> n $$
>        恰好堪堪大于$n$, 跨过了能买到Hölder连续性的门槛. 于是我们就可以用这个$r$去换Hölder连续性了. 由于我们幸存了$k-l$阶的导数,  这时候所有不超过$k-l-1= k-\left[ \frac{n }{p } \right]-1$阶的导数都可以消耗一阶的导数去换一个$1-\frac{n }{r }= :\gamma =1-\frac{n }{p }+ \left[ \frac{n }{p } \right]$的 Hölder连续性.
>   - 当$\frac{n }{p }$是整数时, 上述用导数换可积性的操作, 我们最多换$l = \frac{n }{p }-1$次, 此时正好能换到 
>        $$ r:= p^{l*}= n $$
>     这么多阶的可积性. 这时候就差一点点了, 当$p\to n^{-}$时, $p^{*}\to \infty$, 所以这时候可以无奈地但又经济地稍微忽略一些微小的可积性, 利用[[thm - Gagliardo-Nirenberg-Sobolev Inequality|GNS Inequality]]去为所有$k-l-1$阶的导数换得任意高阶的可积性. 这时候再方便剩下的$k-l-2= k-\left[ \frac{n }{p } \right]-1$阶导数获得任意的Holder连续性.

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

