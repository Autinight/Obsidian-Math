---
type: lemma
aliases: 
- Motivation for Sobolev Conjugate
technique: []
---

> [!lemma] Lemma: 
> We assume that $1\le p< n$. If we can establish an estimate of the form 
>  $$ \left\| u \right\|_{L^{q}\left(\mathbb{R} ^{n}\right)}\le C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} ,\quad u\in C_{c}^{\infty}\left(\mathbb{R} ^{n}\right)$$ 
> for some constant $C$ and $1\le q< \infty$ that don not depend on $u$. Then there must be
>  $$ q= \frac{np }{n-q } $$ 

> [!proof] Proof: 
> If the inequality holds, for $u\in C_{c}^{\infty}\left(\mathbb{R} ^{n}\right)$. Then for $\lambda > 0$, we let $u_{\lambda }\left(x\right)= u\left(\lambda x\right)$ be the rescalled function. We have 
>  $$ \begin{aligned} \left\| u_{\lambda } \right\|_{L^{q}\left(\mathbb{R} ^{n}\right)}&=\left(\int _{\mathbb{R} ^{n}}\left| u\left(\lambda x\right) \right|^{q}\,\mathrm{d} x \right)^{q} \\&= \frac{1 }{\lambda^{n/q}  }\left(\int _{\mathbb{R} ^{n}}\left| u\left(x\right) \right|^{q}\,\mathrm{d} x \right)^{\frac{1}{q}}\\&= \frac{1 }{\lambda ^{n/q} }\left\| u \right\|_{L^{q}\left(\mathbb{R} ^{n}\right)}\end{aligned} $$
>  $$ \begin{aligned} \left\| Du_{\lambda } \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}&= \left(\int _{\mathbb{R} ^{n}}\left| Du_{\lambda } \right|^{p}\,\mathrm{d} x\right)^{\frac{1}{p}}\\&=  \left(\int _{\mathbb{R} ^{n}}\lambda ^{p}\left| Du\left(\lambda x\right) \right|^{p}\,\mathrm{d} x \right)^{\frac{1}{p}}\\&= \frac{\lambda  }{\lambda ^{n / p} } \left(\int _{\mathbb{R} ^{n}}\left| Du \right| ^{p}\,\mathrm{d} x\right)^{\frac{1}{p}}\\&= \frac{\lambda  }{\lambda ^{n / p} }\left\| Du_{} \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)} \end{aligned} $$
> Then we have 
>  $$ \frac{1 }{\lambda ^{n/q} }\left\| u \right\|_{L^{q}\left(\mathbb{R} ^{n}\right)} \le \frac{\lambda  }{\lambda ^{n/p} }C\left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}$$   
> That is 
>  $$ \left\| u \right\|_{L^{q}\left(\mathbb{R} ^{n}\right)}\le \lambda ^{1+ \frac{n }{q }-\frac{n }{p }}  C \left\| Du \right\|_{L^{p}\left(\mathbb{R} ^{n}\right)}$$
> If $1+ \frac{n }{q }-\frac{n }{p }\neq 0$, then taking $\lambda \to \infty$ and $\lambda \to 0$ will both leads to contradictions. Thus 
>  $$ q= \frac{np }{n-p } $$  

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

