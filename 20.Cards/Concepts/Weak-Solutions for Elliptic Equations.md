---
type: concept
aliases: 
- Weak-Solutions for Elliptic Equations
technique: []
---

> [!remark] Remark: 
> We consider [[dfn - Boundary Value Problem|Boundary Value Problem]] with [[dfn - Elliptic Partial Differential Operator|Elliptic Partial Differential Operator]]

> [!remark] Remark: 
> We will assume the following exposition that 
>  $$ a^{ij},b^{i},c\in L^{\infty}\left(U\right)\quad \left(i,j=  1,\cdots,n \right) $$
> and 
>  $$ f\in L^{2}\left(U\right) $$
> where $U$ is an open bounded subset of $\mathbb{R} ^{n}$.

### Bilinear Form and Weak Solution
> [!definition] Definition: 
> 1. The **bilinear form** $B\left[ \;,\; \right]$ associated with the divergence form elliptic operator defined by [[dfn - Boundary Value Problem|(2)]] is 
>       $$ B\left[ u,v \right]:= \int _{U}\sum _{i,j= 1}^{n}a^{ij}u_{x_{i}}v_{x_{j}}+ \sum _{i= 1}^{n}b^{i}u_{x_{i}}v+ cuv\,d x $$
>       for $u,v\in H_{0}^{1}\left(U\right)$
> 
> 2. We say that $u\in H_{0}^{1}\left(U\right)$ is a **weak solution** of the boundary-value problem [[dfn - Boundary Value Problem|(1)]] if 
>    $$ B\left[ u,v \right]= \left(f,v\right) $$
>      for all $v\in H_{0}^{1}\left(U\right)$, where $(\;,\;)$ denotes the inner product in $L^{2}\left(U\right)$.

> [!note] Note: 
> - 实际上, $B$就是让$Lu,v$做积分配对, 只不过由于$u$没有二阶导, 我们不能做真的配对, 而是把$u$的一阶导数传给$v$, 这样甚至让配对的范围取在两个相同的函数空间上了. 方便后面叙述, 可以给这种配对暂时起个名字叫''弱配对'', 记成是$\left(Lu,\cdot \right)= B\left[ u,\cdot  \right]$.
> - 在上面的语境下, 相当于是说, 当$Lu$和$v$弱配对就等同于$f$和$v$配对时, $u$就是一个弱解. 这实际上就是说$B\left[ u,\cdot  \right]$和$\left(f,\cdot \right)$是同一个线性泛函. **所以说寻找弱解就是寻找$u$确定的$H_{0}^{1}$上的线性泛函($H^{-1}$) 解$B\left[ u,\cdot  \right]= \left(Lu,\cdot \right) =_{?}  \left(f,\cdot \right)$**. 
> - 上面我们采用了[[The Space H^{-1}]]中的观点$L^{2}\subseteq H^{-1}$. $f\simeq \left(f,\cdot \right)$.  所以也可以把$f$拿来和$v$做配对. 
> - 沿着上面的思路, 意识到$f$不用局限于是$L^{2}$中的元素, $H^{-1}$中的元素也能拿来做成方程(并且这是最自然的). 详见下面的**A General Case**
> - 找方程的弱解, 就是寻找算子$L: H_{0}^{1}\left(U\right)\to H^{-1} \left(U\right)$的level set或$\operatorname{ker}$.


### A General Case 

> [!definition] Definition: 
> 1. More generally, consider the boundary-value problem
>    $$ \begin{cases} Lu= f^{0}-\sum _{i= 1}^{n}f_{x_{i}}^{i},&\text{in }U\\u= 0,&\text{on }\partial U \end{cases}  $$
>    where $L$ is defined by [[dfn - Boundary Value Problem|(2)]] with the and $f^{i}\in L^{2}\left(U\right)$ $(i= 0,\cdots ,n)$. we see that the right-hand term $f= f^{0}-\sum _{i= 1}^{n}f^{i}_{x_{i}}$ belongs to $H^{-1} \left(U\right)$([[The Space H^{-1}]]). 
> 2. We say $u\in H_{0}^{1}\left(U\right)$ is a **weak solution** of the above problem provided 
>   $$ B\left[ u,v \right]= \left< f,v \right> $$
>   for  all $v\in H_{0}^{1}\left(U\right)$, where $\left< f,v \right>= \int _{U}f^{0}v+ \sum _{i= 1}^{n}f^{i}v_{x_{i}}\,d x$ and $\left< \;,\; \right>$ is the pairing of $H^{-1} \left(U\right)$ and $H_{0}^{1}\left(U\right)$.

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

