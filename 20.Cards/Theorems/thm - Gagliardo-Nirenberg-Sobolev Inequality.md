---
type: theorem
aliases:
  - Gagliardo-Nirenberg-Sobolev Inequality
  - GNS Inequality
technique: []
---

> [!theorem] Theorem: 
> Assume $1\le p< \infty$, there exists a constant $C$, depending only on $n$ and $p$, such that 
>  $$ \left\| u \right\|_{L^{p^{*}}\left(\mathbb{R} ^{n}\right)}\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} $$ 

> [!proofsketch] Sketch of Proof: 
> 
> - **先考虑$p= 1$的情况**
>     - $p= 1$时, $p^{*}= \frac{n }{n-1 }$. $u$可以表示$u_{x_{i}}$沿着$x_{i}$轴的积分. 我们就把$\left| u \right|^{\frac{n }{n-1 }}$拆解成$n$个沿轴$x_{i}$积分 
>        $$ \int _{-\infty}^{\infty}\left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}   $$ 
>       的$\frac{1}{n-1}$次.  将 $\left| u \right|$依次从$x_{1}$积分到$x_{n}$时, 对$x_{1}$的积分会豁免带$dy_{1}$的那项,  由于我们处理的积分都是带$\frac{1}{n-1}$次的,广义的 Hölder 不等式会帮助我们把积分号内的$\left(n-1\right)$个乘积释放到外面去. 并且对$x_{i}$的积分会豁免带$dy_{i}$的那项, 因此每次积分都是对$\left(n-1\right)$个乘积积分, 都可以用Hölder不等式释放.
> - **通过变量替换推广**

> [!proof] Proof: 
> Since $u\in C^{1}_{c}\left(\mathbb{R} ^{n}\right)$, we have 
>  $$ \begin{aligned} \left| u\left(x\right) \right|&\le \int _{-\infty}^{x_{i}} \left| u_{x_{i}}\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}\\&\le \int _{-\infty}^{\infty}\left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}  \end{aligned}  $$
> Thus 
>  $$ \left| u\left(x\right) \right|^{\frac{n }{n-1 }}= \prod _{i= 1}^{n} \left(\int _{-\infty}^{\infty}\left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}\right)^{\frac{1}{n-1}}   $$
> By integrating with respect to $x_{1}$, we get
>  $$ \int \left| u \right|^{\frac{n }{n-1 }}  \,\mathrm{d} x_1=\left(\int _{-\infty}^{\infty}\left| Du\left(y_1,x_2,\cdots ,xn\right) \right|dy_1 \right)^{\frac{1}{n-1}}\left(\int _{-\infty}^{\infty}\prod _{i= 2}^{n}I_{i}^{\frac{1}{n-1}}\,\mathrm{d} x_1\right) $$
> Where $I_{i}= \int _{-\infty}^{\infty}\left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}$.  The general Hölder Inequality gives that 
>  $$ \begin{aligned} \int _{-\infty}^{\infty}\prod _{i= 2}^{n}I_{i}^{\frac{1}{n-1}}\,\mathrm{d} x_1&\le \prod _{i= 2}^{n}\left(\int _{-\infty}^{\infty}I_{i}\,\mathrm{d} x_1\right)^{\frac{1}{n-1}}\\&= \prod _{i= 2}^{n}\left(\int _{-\infty}^{\infty}\int _{-\infty}^{\infty}\left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}\,\mathrm{d} x_1 \right)^{\frac{1}{n-1}} \end{aligned} $$
> We define $I_1^{\prime} = I_1$, $I_i^{\prime} = \int _{-\infty}^{\infty}I_{i}\,\mathrm{d} x_{1}$
> Then 
>  $$ \int \left| u \right|^{\frac{n}{n-1}}\,\mathrm{d} x_1\le \prod _{i= 1}^{n}\left(I_{i}^{\prime} \right)^{\frac{1}{n-1}}  $$
> By integrating with respect to $x_2$ ,we have 
>  $$ \begin{aligned} \int \int  \left| u \right|^{\frac{n}{n-1}}\,\mathrm{d} x_1\,\mathrm{d} x_2  &\le \left(I_2^{\prime} \right)^{\frac{1}{n-1}}\int \prod _{i\neq 2}\left(I_{i}^{\prime} \right)^{\frac{1}{n-1}}\,\mathrm{d} x_2\\&\le \left(I_2^{\prime} \right)^{\frac{1}{n-1}}\prod _{i\neq 2}\left(\int  I_{i}^{\prime} \,\mathrm{d} x_{2}\right)^{\frac{1}{n-1}}\end{aligned}$$       
> Then we define $I_2^{\prime \prime} = I_2^{\prime}$, $I_{i}^{\prime \prime} = \int  I_{i}^{\prime} \,\mathrm{d} x_2,i\neq 2$. Inductively , after $n$ steps , we get $I_{1}^{\left(n\right)},\cdots ,I_{n}^{\left(n\right)}$, such that 
>  $$ \int _{\mathbb{R} ^{n}}\left| u \right|^{\frac{n}{n-1}}\le \prod _{i= 1}^{n} \left(I^{\left(n\right)}_{i}\right)^{\frac{1}{n-1}}   $$ 
> where 
>  $$ \begin{aligned} I_{i}^{\left(n\right)}&= \int _{\mathbb{R} ^{n}} \left| Du\left(x_1,\cdots ,y_{i},\cdots ,x_{n}\right) \right|\,\mathrm{d} y_{i}\,\mathrm{d} x_1\cdots \,\widehat{\mathrm{d}x_{i}}\cdots \,\mathrm{d} x_{n}\\&=  \int _{\mathbb{R} ^{n}}\left| Du \right|\,\mathrm{d} x  \end{aligned}  $$ 
> Thus
>  $$ \int _{\mathbb{R} ^{n}}\left| u \right|^{\frac{n}{n-1}}\,\mathrm{d} x\le \left(\int _{\mathbb{R} ^{n}}\left| Du \right|\,\mathrm{d} x \right)^{\frac{n }{n-1 }}  $$ 
> This prove the case $p= 1$.
>
> Substitute $\left| u \right|$ by $\left| u \right|^{\gamma }$, we have 
>  $$ \begin{aligned} \int _{\mathbb{R} ^{n}}\left| u \right|^{\frac{\gamma n }{n-1 }}\,\mathrm{d} x&\le  \left(\int _{\mathbb{R} ^{n}}\left| D\left| u \right|^{\gamma }  \right| \,\mathrm{d} x\right)^{\frac{n}{n-1}}\\&\le  C\left(\int _{\mathbb{R} ^{n}}\left| u \right|^{\gamma -1}  \left| Du \right|\,\mathrm{d} x \right)^{\frac{n}{n-1}}   \end{aligned} $$ 
>  $$ \begin{aligned} \left(\int _{\mathbb{R} ^{n}}\left| u \right|^{\gamma \frac{n}{n-1}} \right)^{\frac{n-1 }{n }}&\le  \int _{\mathbb{R} ^{n}}\left| D\left| u \right|^{\gamma }\,\mathrm{d} x  \right|\\&\le C \int _{\mathbb{R} ^{n}}\left| u \right|^{\gamma -1}\left| Du \right|\,\mathrm{d} x\\&\le C\left(\int _{\mathbb{R} ^{n}}\left| u \right|^{\left(\gamma -1\right)\frac{p }{p-1 }}\,\mathrm{d} x \right)^{\frac{p-1 }{p }}    \left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}\end{aligned} $$
> We choose $\gamma$ so that $\gamma\frac{n }{n-1 }= \frac{pn }{n-p }= p^{*}$, that is 
>  $$ \gamma = \frac{p\left(n-1\right) }{n-p } $$
> In which case 
>  $$ \left(\gamma -1\right)\frac{p }{p-1 }= \frac{n\left(p-1\right) }{n-p }\frac{p }{p-1 }= \frac{np }{n-p }= p^{*} $$    
> We have 
>  $$ \left(\int _{\mathbb{R} ^{n}}\left| u \right|^{p^{*}} \right)^{\frac{n-1 }{n }-\frac{p-1 }{p }} \le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}$$  
> That is 
>  $$ \left(\int _{\mathbb{R} ^{n}}\left| u \right|^{p^{*}} \right)^{\frac{1}{p^{*}}}\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} $$ 


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

