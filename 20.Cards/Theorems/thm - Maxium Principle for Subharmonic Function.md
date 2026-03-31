---
type: theorem
aliases:
  - Maxium Principle for Subharmonic Function
technique: []
tags:
  - maximum-principle
  - subharmonic
---

> [!theorem] Theorem: 
> Suppose $u\in C^{2}\left(B_1\right)\cap C\left(\overline{B_1}\right)$ is a subharmonic function in $B_1$: that is, $\Delta u\ge 0$. Then there holds
>  $$ \sup _{B_1}u\le \sup _{\partial B_1}u .$$

> [!note] Note: 
> 直观感受一下, 次调和会导致函数值向下[塌陷].

> [!proofsketch] Sketch of Proof: 
> 回顾harmonicity和mean value property的关系[[thm - Harmonicity and Mean Value Property are Equivalent]], 把推导过程中的等号换成不等号, 就可以得到subharmonic相关的性质: $u$是向外膨胀的, mean value从原点向外是增长的. 
>
> 随后, 通过一个微扰$+ \varepsilon \left| x \right|^{2}$使得稳定地成立$\Delta u_{\varepsilon }> 0$. 从而导出矛盾: $u_{\varepsilon }$任何一点的附近都是被提起来的(或者说中心点总是向下塌陷的), 所以原点不能是最大的.

> [!proof] Proof: 
> For $\varepsilon > 0$, we consider $u_{\varepsilon }\left(x\right)= u\left(x\right)+ \varepsilon \left| x \right|^{2}$ in $B_1$. Then simples calculation yields  
> $$ \Delta u_{\varepsilon }= \Delta u+ 2n\varepsilon \ge 2n\varepsilon > 0 $$  
> If $x$ is an interior point, we have form divergence theorem that
>  $$ \begin{aligned} 0<  \int _{B_1}\Delta u_{\varepsilon }&= \int _{\partial B_1}\frac{\partial u_{\varepsilon }}{\partial \nu }\\&= r^{n-1}\frac{\partial }{\partial r} \int _{\partial B_1}u_{\varepsilon }\left(x+ rw\right)\,d w  \end{aligned} $$ 
> for sufficiently small $r$. Thus
>  $$ \frac{\partial }{\partial r}\left(\frac{1 }{\omega _{n} }\int _{\partial B_1}u_{\varepsilon }\left(x+ rw\right)\,d w\right)> 0 $$
> There is 
>  $$ u\left(x\right)<   \frac{1 }{\omega _{n} }\int _{\partial B_1}u_{\varepsilon }\left(x+ rw\right)\,d w ,\quad \forall r> 0$$  
> It is easy to see that $u_{\varepsilon }$ cannot have an interior maximum.
> In particular, 
>  $$ \sup _{B_1}u_{\varepsilon }\le \sup _{\partial B_1}u_{\varepsilon } $$
> There fore we have
>  $$ \sup _{B_1}u\le \sup _{B_1}u_{\varepsilon }\le \sup _{\partial B_1}u+ \varepsilon  $$
> We finish the proof by letting $\varepsilon > 0$.  
    


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
