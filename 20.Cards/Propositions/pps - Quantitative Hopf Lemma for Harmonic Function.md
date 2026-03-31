---
type: proposition
aliases:
  - Quantitative Hopf Lemma for Harmonic Function
technique:
  - maximum principle
  - Harnack inequality
tags:
  - Hopf_lemma
  - harmonic
favorite: core
---

> [!proposition] Proposition: 
> Suppose $u\in C\left(\overline{B}_{1}\right)$ is a harmonic function in $B_1= B_1\left(0\right)$. If $u\left(x\right)< u\left(x_0\right)$ for any $x\in \overline{B}_{1}$ and some $x_0\in \partial B_{1}$, then there holds 
>  $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge C\left(u\left(x_0\right)-u\left(0\right)\right) $$ 
> where $C$ is a positive constant depending only on $n$.


> [!proofsketch] Sketch of Proof: 
> * **思想层**: 内部的信息不重要, 所以用内部的值换外部的定量趋势.
> * **框架层**: 寻找一个辅助函数$v$, 满足以下约束
>
>   1. 至少在外围, $v$是subharmonic的(根据下面的构造), 即$\Delta v\ge 0$.
>   2. $v$在边界处不影响取值, 即$v\equiv 0$ on $\partial B_1$.
>   3. $\frac{\partial v}{\partial n}\left(x_0\right)< 0$
>   4. $v$非负, 在内部大于零.
>   5. $v$是径向的.
>
>   $u\left(x\right)-u\left(x_0\right)$在除了$x_0$处均严格小于零, 在$x_0$处等于零. 因此在$x_0$取最大值. 得到$\frac{\partial u}{\partial n}\left(x_0\right)\geq 0$. 我们利用 $v$, 来将这个$\geq 0$换成一个严格的下界. 考虑
>     $$ h_{\varepsilon }\left(x\right)= u\left(x\right)-u\left(x_0\right)+ \varepsilon v\left(x\right) $$  
>   其中$v$待定. 在找到$v$的前提下, 取充分小的$\varepsilon$, 使得
>    $$ h_{\varepsilon }\left(x\right)< 0 \quad \text{when }\left| x \right|= \frac{1}{2}  $$ 
>   又在$\partial B_1$上, $h_{\varepsilon }\left(x\right)\le 0$. 根据极值原理, $h_{\varepsilon }\left(x\right)\le 0$ on $A:= \overline{B}_1\setminus B_{1 / 2}$. 而$h_{\varepsilon }\left(x_0\right)= 0$, 于是$h_{\varepsilon }$在$x_0$取最大值, $\frac{\partial h_{\varepsilon }}{\partial n}\ge 0$, 得到
>     $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge -\varepsilon  \frac{\partial v}{\partial n}\left(x_0\right) $$
>   接下来看能不能取到一个合适的$\varepsilon$. 先来看$\varepsilon$的取值范围, $v$在$\left| x \right|= \frac{1}{2}$上取常值, 要让$h_{\varepsilon }\left(x\right)<  0$在$\left| x \right|= \frac{1}{2}$成立, 需要
>   $$ \varepsilon < \frac{1 }{v\left(\frac{1 }{2 }\right) }\left(u\left(x_0\right)-u\left(x\right)\right)$$ 
>   然后利用[[pps - Harnack Inequality for Nonnegative Harmonic Function]] 确定右侧的下界, 
>    $$ \inf  _{B_{1 / 2}}\left(u\left(x_0\right)-u\left(x\right)\right)\ge  c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right) $$ 
>   因此可以让$\varepsilon$满足
>    $$ \varepsilon \le \delta \left(u\left(x_0\right)-u\left(0\right)\right) $$ 
>   时也符合对$\varepsilon$的取值要求, 这样
>    $$ \frac{\partial u}{\partial n}\left(x_0\right)\ge  \left| \frac{\partial v}{\partial n}\left(x_0\right) \right|\delta c\left(n\right)\left(u\left(x_0\right)-u\left(0\right)\right)\ge C\left(u\left(x_0\right)-u\left(0\right)\right)  $$ 
> **实现层**: 
> 发现只需要构造出$v$.
>   1. 关于$\Delta \ge 0$: 对于径向函数, $\Delta = \partial _{r}^{2}+ \frac{n-1 }{r }\partial _{r}$. 为了将微分算子的阶数化为多项式, 并且还得是向外递减的, 考虑指数型函数$e^{-r^{2}}$, $\partial _{r}\left(e^{-r^{2}}\right)=e^{-r^{2}}\left(-2r\right)$, $\partial _{r}^{2}\left(e^{-r^{2}}\right)= e^{-r^{2}}\left(4r^{2}-2\right)$
>      $$ \Delta \left(e^{-r^{2}}\right)=e^{-r^{2}}\left(4r^{2}- 2n\right)  $$ 
>       发现$r$不够大, 于是调整系数至$e^{-\alpha r^{2}}$, 计算出
>       $$ \Delta \left(e^{-\alpha r^{2}}\right)= e^{-\alpha r^{2}}\left(4\alpha ^{2}r^{2}-2\alpha n\right) $$
>       这样当$\alpha \ge 2n+ 1$时, $\Delta e^{-\alpha r^{2}}$在$A$上$\ge 0$.  并且$\partial _{r}\left(e^{-\alpha r^{2}}\right)=-\alpha re^{-r^{2}}< 0$, 特别地在$r= 1$上$< 0$.
>   2. 减一个$e^{-\alpha }$, 让辅助函数在$\partial B_1$上归零, 并且内部也是正的.

> [!proof] Proof: 
> “PROPOSITION 1.34” ([Han和Lin, 2000, p. 18](zotero://select/library/items/WMGIV6YG)) ([pdf](zotero://open-pdf/library/items/2DCN8JJA?page=29))

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
