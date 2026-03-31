---
type: definition
aliases: 
- Wedge Product
technique: []
tags: []
---


> [!definition] Definition: 
> Assume that $V$ is a finite-dimensional real vector space. Given $\omega \in \Lambda ^{k}\left(V^{*}\right)$ and $\eta \in \Lambda ^{l}\left(V^{*}\right)$, we define theri **wedge product** or **exterior** product to be the following $\left(k+ l\right)$-covector:
>  $$ \omega \wedge \eta = \frac{\left(k+ l\right)! }{k!l! }\operatorname{Alt}\left(\omega \otimes \eta \right) $$ 


> [!remark] Remark
> 系数的产生, 可以通过对Alt的另一种看法来理解:
>
> - $\left(k+ l\right)!\operatorname{Alt}$是遍历交错和. 其中, 每一项都能按$\left(k,\ell \right)$-shuffle的方式写成
>   $$ \left(\left(\operatorname{sgn}\tau _1 \right)\left(\tau _1 \omega \right)\otimes \left(\operatorname{sgn}\tau _2 \right)\left(\tau _2 \omega \right) \right)\circ \sigma $$ 
>   这里$\sigma$相当于一类$\left(k,\ell \right)$-shuffle的一个代表元, $\tau _1 ,\tau _2$是它们之间的转换关系.
>
> - 但因为 $\alpha,\beta$ 已经交错, 同一个 $(k,\ell)$-shuffle 等价类里的 $k!\,\ell!$ 个排列产出的值完全一样.
>
> - 因此, 系数的产生, 是先乘以$\left(k+ \ell \right)!$系数前置的平均化(变为和形式), 再去乘以$\frac{1 }{k! }\frac{1 }{l! }$消除重复项的影响. 只是去平均$\left(k,\ell \right)$-shuffle滚动之间产生的影响.
> - 对于交错算子的交错积, 影响真是独立的信息变化的, 只有$\left(k,l\right)$-shuffle的不同, 这种稀释策略, 能够去平滑化真实的信息影响.




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
