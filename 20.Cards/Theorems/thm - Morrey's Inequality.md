---
type: theorem
aliases: 
- Morrey's Inequality
technique: []
---


> [!theorem] Theorem: Morrey's Inequality   
> Assume $n< p\le \infty$. Then there exists a constant $C$, depending only on $p$ and $n$, such that 
>  $$ \left\| u \right\|_{C^{0,\gamma }\left(\mathbb{R} ^{n}\right)}\le C\left\| u \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)} $$
> for all $u\in C^{1}\left(\mathbb{R} ^{n}\right)$, where 
>  $$ \gamma := 1-\frac{n }{p } $$   

> [!proofsketch] Sketch of Proof: 
> - **用带面积缩放的导数项的球积分, 控制球平均误差**: 
>    - 关于$\partial B\left(0,1\right)$上的积分, 一方面可以把$x+ sw$的参数塞到$u$的积分球面上, 得出$u$的球积分. 另一方面可以塞到导数项的积分球面上, 得到带面积缩放项导数的不同大小球面上的积分.
> - **用局部球平均误差和局部球积分控制$\left| u \right|$**:
>    - 前者被带面积项的导数在球上的积分控制, 用Holder不等式把导数项和面积项分开. 后者被$L^{p}$范数直接控制.
> - **用两段局部球平均误差控制$\left| u\left(y\right)-u\left(x\right) \right|$**

> [!proof] Proof: 
> **Critical Estimates**: 
>  We claim that 
> $$ \overline{\int}_{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d}y\le C\int _{B\left(x,y\right)}\frac{\left| Du\left(y\right) \right|  }{\left|y-x \right|^{n-1}  }\,\mathrm{d} y  $$ 
> for which
> $$ \begin{aligned} \left| u\left(x+ sw\right) -u\left(x\right)\right|\le \int _{0}^{s}\left| Du\left(x+ tw\right) \right|\,\mathrm{d} t   \end{aligned} $$
>
>  $$ \begin{aligned} \int _{\partial B\left(0,1\right)} \left| u\left(x+ sw\right)-u\left(x\right) \right|\,\mathrm{d} S\left(w\right)&\le \int _{0}^{s}\int _{\partial B\left(0,1\right)}\left| Du\left(x+ tw\right) \right|\,\mathrm{d} S\left(w\right)\,\mathrm{d} t \\&\le \int _{0}^{s}\int _{\partial B\left(x,t\right)} \frac{\left| Du\left(y\right) \right|  }{t^{n-1} }\,\mathrm{d} S\left(y\right)\,\mathrm{d} t\\&= \int _{B\left(x,s\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\end{aligned} $$
>
>  The other side, 
>   $$ \begin{aligned} \int _{\partial B\left(0,1\right)}\left| u\left(x+ sw\right)-u\left(x\right) \right|\,\mathrm{d} S\left(w\right)&= \frac{1 }{s^{n-1} }\int _{\partial B\left(x,s\right)} \left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right) \end{aligned}  $$
>    
>Thus 
> $$ \begin{aligned} \int _{\partial B\left(x,s\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)&\le s^{n-1} \int _{B\left(x,s\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\\&\le s^{n-1}\int _{ B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\end{aligned}  $$
>
> for each $0< s< r$.  Then 
>  $$ \begin{aligned} \int _{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)&\le \int _{0}^{r}s^{n-1}\,\mathrm{d} s \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{ \left| y-x \right|^{n-1} }\,\mathrm{d} y \\&\le C r^{n} \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y \end{aligned} $$  
>  That is 
>   $$ \overline{\int}_{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} S\left(y\right)\le C\int _{B\left(x,y\right)}\frac{\left| Du\left(y\right) \right|  }{\left|y-x \right|^{n-1}  }\,\mathrm{d} y  $$
>
> **Estimate $\left| u \right|$**: 
> 
> $$ \begin{aligned} \left| u\left(x\right) \right|&\le \overline{\int}_{B\left(x,1\right)}\left| u\left(y\right)-u\left(x\right) \right|\,\mathrm{d} y+  \overline{\int}_{B\left(x,1\right)}\left| u\left(y\right) \right|\,\mathrm{d} y\\&\le C \int _{B\left(x,1\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y+  C \left\| u \right\|_{L^{p}\left(U\right)}\\& \le  C \left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}+ C\left( \int _{B\left(x,1\right)}\frac{1 }{\left| y-x \right|^{\left(n-1\right)\frac{p }{ p-1}}  }\,\mathrm{d} y\right)^{\frac{p-1 }{p }}+ C\left\| u \right\|_{L^{p}\left(U\right)}\end{aligned}   $$ 
>
>   $$ \left(n-1\right)\frac{p }{p-1 }< n $$
>  The second integration $< \infty$.
>
>  Then we get 
>   $$ \left| u\left(x\right) \right|\le C\left\| u \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)}  $$
>
>   Then   
>
> $$ \sup \left| u\left(x\right) \right|\le C\left\| u \right\|_{W^{1,p}\left(R^{n}\right)}  $$ 
> 
>since the estimate dose  not denpend on $x$. 
> **Estimates $\left| u\left(y\right)-u\left(x\right) \right|$**: 
> For $W= B\left(x,r\right)\cap B\left(y,r\right)$, we have 
>  $$ \begin{aligned} \left| u\left(y\right)-u\left(x\right) \right|&\le \overline{\int}_{W}\left| u\left(y\right)-u\left(z\right) \right|\,\mathrm{d} z+  \overline{\int}_{W}\left| u\left(x\right)-u\left(z\right) \right|_{Z}\\&\le C \overline{\int}_{B\left(y,r\right)}\left| u\left(z\right)-u\left(y\right) \right|\,\mathrm{d} z+ C \overline{\int}_{B\left(x,r\right)}\left| u\left(z\right)-u\left(x\right) \right|\,\mathrm{d} z       \end{aligned} $$
> 
> where 
>  $$ \begin{aligned} \overline{\int}_{B\left(y,r\right)}\left| u\left(z\right)-u\left(y\right) \right|\,\mathrm{d} z&\le C \int _{B\left(y,r\right)}\frac{\left| Du\left(z\right) \right|  }{\left| y-z \right|^{n-1}  }\,\mathrm{d} z\\&\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\cdot \left(\int _{B\left(y,r\right)}\frac{1 }{\left| y-z \right|^{n-1\frac{p }{p-1 }}  }\right)^{\frac{p-1 }{p }}\\&\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\cdot  \left(r^{n-\left(n-1\right)\frac{p }{p-1 }}\right)^{\frac{p-1 }{p }} \\&= C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}r^{1-\frac{n }{p }}\end{aligned}   $$  
> 
>  Then 
>   $$ \left| u\left(y\right)-u\left(x\right) \right|\le  C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} r^{1-\frac{n }{p }}\le C\left| y-x \right|^{1-\frac{n }{p }}\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}   $$
> 
>   Thus 
>    $$ [u]_{C^{0,\gamma }\left(\mathbb{R} ^{n}\right)}= \sup \frac{\left| u\left(y\right)-u\left(x\right) \right|  }{\left| y-x \right|^{1-\frac{n }{p }}  }\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} $$  

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

