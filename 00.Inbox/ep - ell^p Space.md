---
type: example
aliases:
- ell^p Space
technique: []
tags: []
---
> [!definition] Definition: 
> 设$1 \le p < \infty$, **$\ell^p$空间**被定义为由所有满足以下条件的实数或复数序列$x=(x_n)_{n=1}^{\infty}$构成的线性空间:
> $$\begin{aligned}\sum_{n=1}^{\infty}|x_n|^p<\infty.\end{aligned}$$
> 在**$\ell^p$空间**上的范数定义为:
> $$\begin{aligned}\|x\|_p=\left(\sum_{n=1}^{\infty}|x_n|^p\right)^{1/p}.\end{aligned}$$
> 当$p=\infty$时, **$\ell^\infty$空间**被定义为由所有有界序列$x=(x_n)_{n=1}^{\infty}$构成的线性空间, 其范数定义为:
> $$\begin{aligned}\|x\|_\infty=\operatorname{sup}_{n \ge 1}|x_n|.\end{aligned}$$
> **$\ell^p$空间**具有以下基本性质:
> - 对于所有的$1 \le p \le \infty$, 它是一个Banach空间.
> - 当且仅当$p=2$时, 它是一个Hilbert空间.
> - 对于$1 < p < \infty$, **$\ell^p$空间**的对偶空间是**$\ell^q$空间**, 其中满足关系:
> $$\begin{aligned}\frac{1}{p}+\frac{1}{q}=1.\end{aligned}$$

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
