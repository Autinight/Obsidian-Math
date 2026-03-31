---
type: exercise
aliases:
  - Lebniz Rule of Some Operator
technique: []
book: RG Petersen
chapter: 2
number: "5"
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> Let $\left(M,g\right)$ be a Riemannian manifold, $f,h$ functions on $M$, and $X$ a vecotr field on $M$. Show that 
>  $$ \operatorname{div}\left(fX\right)= D_{X}f+  f\operatorname{div}X$$ 
>  $$ \Delta \left(fh\right) = h\Delta f+ f\Delta h+ 2g\left(\nabla f,\nabla h\right)$$
>  $$ \operatorname{Hess}\left(fh\right) = h \operatorname{Hess}f+ f\operatorname{Hess}h+ \,\,d f\,d h+ \,d h\,d f$$  



> [!remark] Needed: 
> - $\left(0,k\right)$-张量场的代数定义, 关于方向的乘积律.
> - 散度的定义
> - 规正标价下体积形式的底$\times$高规律, 梯度的规正标价表示.
> - Laplace算子的定义, 梯度的Lebniz律.
> - Hess算子的定义.

> [!proof] Proof: 
> **(1)**
> 
> We choose a orthornormal local frame $E_1,\cdots ,E_{k}$. 
> From the definition of the divergence, we have 
>  $$ \operatorname{div}\left(fX\right)= \operatorname{div}\left(fX\right)\operatorname{vol}\left(E_1,\cdots ,E_{k}\right)= \left(\mathcal{L}_{fX}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right) $$ 
> Similarly, 
>  $$ \operatorname{div}\left(X\right)=\left( \mathcal{L}_{X}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right) $$ 
> Expanding the product rule of Lie derivative for $\left(0,k\right)$-tensor , we have
>  $$ \left(\mathcal{L}_{fX}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right)= f \mathcal{L}_{X}\left(E_1,\cdots ,E_{k}\right)+ \sum _{i= 1}^{k}\left(\mathcal{L}_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right) $$
> Thus
>  $$ \operatorname{div}\left(fX\right)= f\operatorname{div}X+ \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right) $$ 
> Under the orthornormal frame , $\operatorname{vol}\left(E_1,\cdots ,X\cdots ,E_{k}\right)$ has the form
>  
>  $$ \operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right)= g\left(X,E_{i}\right) $$  
> The gradient has the form
>  $$ \operatorname{grad}f=\sum _{i= 1}^{k}\left(D_{E_{i}}f\right)E_{i}$$ 
> Thus
>  $$ \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,E_{k}\right)=  \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)g\left(X,E_{i}\right)= g\left(X,\sum _{i= 1}^{k}D_{E_{i}}fE_{i}\right)= g\left(X,\operatorname{grad}f\right)= D_{X}f $$ 
> Finally, 
>  $$ \operatorname{div}\left(fX\right)= f\operatorname{div}X+ D_{X}f $$ 
> 
> **(2)**
> 
>  $$ \Delta \left(fh\right)= \operatorname{div}\left(\operatorname{grad}\left(fh\right)\right) $$ 
> 
>  $$ \begin{aligned} g\left(v, \operatorname{grad}fh\right)&= D_{v}\left(fh\right)= \left(D_{v}f\right)h+ f\left(D_{v}h\right)\\&= g\left(v,\operatorname{grad}f\right)h+ g\left(v,\operatorname{grad}h\right)f\\&= g\left(v,h\operatorname{grad}f+ f\operatorname{grad}h\right) \end{aligned} $$ 
>   $$ \operatorname{grad}\left(fh\right)= h\operatorname{grad}f+ f\operatorname{grad}h $$ 
>  $$ \begin{aligned} \operatorname{div}\left(\operatorname{grad}fh\right)&=\operatorname{div}\left(h\operatorname{grad}f+ f\operatorname{grad}h\right) \\&= D_{\operatorname{grad}f}h+ h\Delta \left(f\right)+ D_{\operatorname{grad}h}f+ h\Delta \left(h\right)\end{aligned} $$ 
>  $$ D_{\operatorname{grad}f}h= g\left(\operatorname{grad}f,\operatorname{grad}h\right)= D_{\operatorname{grad}}f $$
>  Thus
>   $$ \Delta \left(fh\right)= h\Delta f+ f\Delta h+ 2g\left(\nabla f,\nabla h\right) $$  
>
> **(3)**
>  $$ \operatorname{Hess}f= \frac{1}{2}L_{\nabla f}g $$
>  $$ \begin{aligned} \operatorname{Hess}\left(fh\right)&= \frac{1}{2}\mathcal{L}_{\nabla \left(fh\right)}g\\&= \frac{1}{2}\mathcal{L}_{f\nabla h}g+ \frac{1}{2}\mathcal{L}_{h\nabla f}g \end{aligned}$$
>   $$ \begin{aligned} \mathcal{L}_{f\nabla h} g\left(E_i,E_j\right) &= f \mathcal{L}_{\nabla h}g\left(E_i,E_j\right)+  \left(D_{E_i}f\right)g\left(\nabla h,E_j\right)+ \left(D_{E_j}f\right)g\left(E_{i},\nabla h\right)\\&= 2h\operatorname{Hess}f+ g\left(\nabla h, \left(D_{E_{i}}f\right)E_{j}+ \left(D_{E_{j}}f\right)E_{i}\right)\\&=2 h\operatorname{Hess}f+ dh\left(D_{E_{i}}fE_{j}+ D_{E_{j}}f\left(E_{i}\right)\right)\\&= 2h\operatorname{Hess}f\left(E_{i},E_{j}\right)+ D_{E_{j}}hD_{E_{i}}f+ D_{E_{j}}fD_{E_{i}}h\\&= 2h\operatorname{Hess}f\left(E_{i},E_{j}\right)+ f\otimes h\left(E_{i},E_{j}\right)+ h\otimes f\left(E_{i},E_{j}\right)\end{aligned}$$ 
> $$ \frac{1}{2}\mathcal{L}_{h\nabla f}g =  2f\operatorname{Hess}h + df\otimes d h+ dh\otimes d f $$
>  $$ \frac{1}{2}\mathcal{L}_{f\nabla h}g =  2h\operatorname{Hess}f+ dh\otimes df+ df\otimes dh $$  
>  $$ \operatorname{Hess}\left(fh\right)= f\operatorname{Hess}h+ h\operatorname{Hess}f+ \,d f\otimes \,d h+ \,d h\otimes \,d f $$ 


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
