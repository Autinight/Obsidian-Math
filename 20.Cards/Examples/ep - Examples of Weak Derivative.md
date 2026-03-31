---
type: example
aliases: 
- Examples of Weak Derivative
technique: []
---

### Examples of Weak Derivatives

> [!example] Example
> Let $n=1$, $U=(0,2)$, and
> $$
> u(x)=\begin{cases}
> x & \text{if } 0 < x \le 1 \\
> 1 & \text{if } 1 \le x < 2.
> \end{cases}
> $$
> Define
> $$
> v(x)=\begin{cases}
> 1 & \text{if } 0 < x \le 1 \\
> 0 & \text{if } 1 < x < 2.
> \end{cases}
> $$
> Let us show $u' = v$ in the weak sense. 

> [!proof] Proof: 
> For each $\varphi \in C^{\infty}_{c}\left(\left(0,2\right)\right)$, we have
>  $$ \begin{aligned} \int _{0}^{2}u\left(x\right)\varphi ^{\prime} \left(x\right)\,\mathrm{d} x&= \int _{0}^{1}x\varphi ^{\prime} \left(x\right)\,\mathrm{d} x+ \int _{1}^{2}\varphi ^{\prime} \left(x\right)\,\mathrm{d} x\\&= \varphi \left(1\right)-\int _{0}^{1}\varphi \left(x\right)\,\mathrm{d} x+ 0-\varphi \left(1\right)\\&= -\int _{0}^{2}v\left(x\right)\varphi \left(x\right)\,\mathrm{d} ddx \end{aligned} $$ 

### Examples that Do not Exist

> [!example] Example:
> Let $n=1$, $U=(0,2)$, and
> $$u(x)=\begin{cases}x & \text{if } 0 < x \le 1 \\ 2 & \text{if } 1 < x < 2.\end{cases}$$
> We assert $u'$ does not exist in the weak sense. 

> [!proof] Proof: 
> If $u^{\prime}\in L^{1}_{loc}\left(U\right)$ exists in the weak sense, then 
> For each $\varphi \in C^{\infty}_{c}\left(\left(0,2\right)\right)$, there is 
>  $$ \begin{aligned} \int _{0}^{1}x\varphi ^{\prime} \,\mathrm{d} x+ \int _{1}^{2}2\varphi ^{\prime} \left(x\right)\,\mathrm{d} x&=-\int _{0}^{2}u^{\prime} \left(x\right)\varphi \left(x\right)\,\mathrm{d} x \end{aligned} $$
> Then
>  $$ -\int _{0}^{1}\varphi \left(x\right)\,\mathrm{d} x-\varphi \left(1\right)= - \int _{0}^{2}u^{\prime} \left(x\right)\varphi \left(x\right)\,\mathrm{d} x $$
> We can choose $\left\{ \varphi _{m} \right\}$ such that $0\le \varphi _{m}\le 1$,  $\lim_{m\to \infty}\varphi _{m}\left(x\right)= 0 , \forall x\in \left(0,2\right)\setminus \left\{ 1 \right\}$, but $\lim_{m\to \infty}\varphi \left(1\right)= 1$  
> Replace $\varphi$ by $\varphi _{m}$ to discover
>  $$ \int _{0}^{2}u^{\prime} \left(x\right)\varphi _{m}\left(x\right)\,\mathrm{d} x= \int _{0}^{1}\varphi _{m}\left(x\right)\,\mathrm{d} x+ \varphi _{m}\left(1\right) $$
> Take the limit of $m\to \infty$ and use the DCT to get
>  $$ 0= 0+ \lim_{m\to \infty}\varphi _{m}\left(1\right)= 1 $$  
>  which is a contradiction.  
>

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

