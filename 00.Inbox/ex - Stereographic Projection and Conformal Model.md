---
type: exercise
aliases:
  - Stereographic Projection and Conformal Model
technique: []
book: RG Petersen
chapter: 4
number: "13"
category:
status: todo
priority:
tags: []
---
> [!exercise] Exercise: 4.7.13
> The stereographic projection of $x^{n+1}=0$ to a hypersurface $M\subset\mathbb{R}^n\times\mathbb{R}$ that is transverse to the lines emanating from $-e_{n+1}=(0,\ldots,0,-1)$ is given by $x\mapsto S(x)$ where $x\in\mathbb{R}^n$ and
> $$S(x)=-e_{n+1}+\lambda(x)\bigl(e_{n+1}+(x,0)\bigr).$$
>
> 1. When $M=S^n(1)$ show that $\lambda(1+|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $S^n(1)$ is given by
> $$\frac{4}{(1+|x|^2)^2}g_{\mathbb{R}^n}.$$
>
> 2. When $M=H^n(1)\in\mathbb{R}^{n,1}$ show that $\lambda(1-|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $H^n(1)$ is Poincaré disc
> $$\frac{4}{(1-|x|^2)^2}g_{\mathbb{R}^n}.$$


> [!proof] Proof: 
> 1.  $S\left(x\right)+ e_{n+ 1}$这个向量于$\left(x,0\right)+ e_{n+ 1}$这个向量共线, 即
>      $$ \frac{S\left(x\right)+ e_{n+ 1} }{e_{n+ 1}+ \left(x,0\right) }= \lambda \left(x\right) $$
>     于是$S\left(x\right)$由$x$如此参数化 
>     横截相交是说$M$和射线的交点的切空间张成整个空间, 这里由于直线的切空间就是子集, 意思是射线不切于$M$.
>     当$M= S^{n}\left(1\right)$时, 我们有$S\left(x\right)\in S^{n}\left(x\right)$,  于是
>      $$ S\left(x\right) = \left(\lambda \left(x\right)x, \left(\lambda \left(x\right)-1\right)\right)$$
>      $$ 1= \left| S\left(x\right) \right|^{2}= \lambda ^{2}\left| x \right| ^{2}+ \left(\lambda -1\right)^{2}  $$
>      于是
>       $$ \lambda ^{2}\left| x \right| ^{2}= \left(2-\lambda \right) \lambda \implies \lambda \left| x \right| ^{2}= 2-\lambda \implies \lambda \left(1+ \left| x \right| ^{2}\right)= 2$$
>     $S$是映射$\mathbb{R} ^{n}\to S^{n}\left(1\right)$.   
>      $$ S\left(x\right) = -e_{n+ 1}+ \frac{2 }{1+ \left| x \right|^{2}  }\left(e_{n+ 1}+ \left(x,0\right)\right)= \left(\frac{2x }{1+ \left| x \right|^{2}  }, \frac{1-\left| x \right|^{2}  }{1+ \left| x \right| ^{2} }\right)$$ 
>     我们需要证明
>      $$ S^{*}g_{S^{n}}= k^{2} g_{\mathbb{R} ^{n}} $$ 
>      而
>      $$ g_{S^{n}}= \iota _{S^{n}}^{*}g_{\mathbb{R} ^{n+ 1}} $$ 
>     于是需要证明
>      $$ \left(\iota_{S}\circ S\right) ^{*}g_{\mathbb{R} ^{n+ 1}}= k^{2}g_{\mathbb{R} ^{n}}$$ 
>     也就是说把$S$视为映射$\mathbb{R} ^{n}\to \mathbb{R} ^{n+ 1}$, 说明$S$是一个conformal 浸入, 
>      $$ \begin{aligned} S^{*}g_{\mathbb{R} ^{n+ 1}}\left(v,w\right) &= \sum _{i}\left(\,d x^{i}\circ S\right)^{2}\\&= \,d \left(\frac{2x_1 }{1+ \left| x \right|^{2}  }\right)^{2}+ \cdots + \,d \left(\frac{2x_{n} }{1+ \left| x \right| ^{2} }\right) ^{2}+ \,d \left(\frac{1-\left| x \right| ^{2} }{1+ \left| x \right| ^{2} }\right) ^{2}\end{aligned}$$
>      $$ \,d \left(\frac{2x_1 }{1+ \left| x \right|^{2}  }\right) = \frac{2dx_1 }{1+ \left| x \right|^{2}  }+ 2x_1d\left(\frac{1 }{1+ \left| x \right| ^{2} }\right)$$ 
>      $$ d\left(\frac{1-\left| x \right| ^{2} }{ 1+ \left| x \right|^{2} }\right) =2d\left(\frac{1 }{1+ \left| x \right| ^{2} }\right)$$  
>     于是
>      $$ S^{*}g_{\mathbb{R} ^{n+ 1}}= \frac{4g_{\mathbb{R} ^{n}} }{\left(1+ \left| x \right|^{2} \right)^{2} } + \frac{8x_{i}\,d x_{i} }{1+ \left| x \right| ^{2} }d\left(\frac{1 }{1+ \left| x \right| ^{2}}\right)+ 4\left( 1+ \left| x \right|^{2} \right)d\left(\frac{1 }{ 1+ \left| x \right| ^{2}}\right)^{2}$$ 
>     
>      $$ 2\sum _{i}x_{i}\,d x_{i}= d\left(\left| x \right|^{2} \right) $$ 
>     那么
>      $$ \frac{1 }{4 }\left(S^{*}g_{\mathbb{R} ^{n+ 1}}-\frac{4 }{\left(1+ \left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}}\right)= \left(-\frac{d\left(\left| x \right|^{2} \right)}{1+ \left| x \right|^{2}  }-\left(1+ \left| x \right|^{2} \right)d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)\right)d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)   $$ 
>     而
>      $$ \begin{aligned} d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)&= -\frac{1 }{\left(1+ \left| x \right|^{2} \right)^{2} }\,d \left(1+ \left| x \right|^{2} \right)\\&= \frac{d \left(\left| x \right|^{2} \right)}{ \left(1+ \left| x \right|^{2} \right)^{2}} \end{aligned}$$ 
>     最终得到
>      $$S^{*}g_{S^{n}} = S^{*}g_{\mathbb{R} ^{n+ 1}}= \frac{4 }{\left(1+ \left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}} $$ 
>     因此$S$是一个conformal map , 使得$g_{S^{n}}$的坐标表示由上式给出.
> 2. 
>     $$ H^{n}\left(1\right)= \left\{ p: \left(p^{1}\right)^{2}+ \cdots + \left(p^{n}\right)^{2}-\left(p^{n+ 1}\right)^{2}= -1,\quad p^{n+ 1} > 0\right\} $$ 
>    
>     $$ S\left(x\right)= \left(\lambda x,\lambda -1\right) $$
>     $$ \lambda ^{2}\left| x \right|^{2} -\left(\lambda -1\right)^{2}= -1\implies \lambda ^{2}\left| x \right|^{2}= \lambda \left(\lambda -2\right)\implies \lambda \left| x \right|^{2}= \lambda -2\implies \lambda \left(1-\left| x \right|^{2} \right)= 2   $$  
>    因此
>     $$ \begin{aligned} S\left(x\right)&= -e_{n+ 1}+ \frac{2 }{1-\left| x \right|^{2}  } \left(e_{n+ 1}+ \left(x,0\right)\right)\\&= \left(\frac{2x }{ 1-\left| x \right|^{2} }, \frac{2 }{1-\left| x \right|^{2}  }-1\right) \end{aligned}$$ 
>    
>      $$ \begin{aligned} S^{*}g_{\mathbb{R} ^{n,1}}&= \sum _{i= 1}^{n}\,d \left(\frac{2x^{i} }{ 1-\left| x \right|^{2} }\right)^{2}-d\left(\frac{2 }{1-\left| x \right|^{2}  }\right)^{2} \end{aligned}$$ 
>    
>    Where
>    
>     $$ d\left(\frac{2x^{i} }{ 1-\left| x \right|^{2} }\right)= \frac{2dx^{i} }{1-\left| x \right|^{2}  }+ 2x^{i}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) $$
>    Then
>     $$ d\left(\frac{2x^{i} }{1-\left| x \right|^{2}  }\right)^{2}= \frac{4\left(dx^{i}\right)^{2} }{ \left(1-\left| x \right|^{2} \right)^{2}}+ \frac{8x^{i}\,d x^{i} }{ 1-\left| x \right|^{2} }d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)+ 4\left(x^{i}\right)^{2}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2} $$
>     Note that 
>      $$ \sum _{i= 1}^{n}2x^{i}\,d x^{i}= d\left(\left| x \right|^{2} \right),\quad \sum _{i= 1}^{n}\left(x^{i}\right)^{2}= \left| x \right|^{2}  $$
>    Then 
>     $$ \begin{aligned} \begin{aligned} S^{*}g_{\mathbb{R} ^{n,1}}&= \frac{4g_{\mathbb{R} ^{n}} }{\left(1-\left| x \right|^{2} \right)^{2} }+ \frac{4d\left(\left| x \right|^{2} \right) }{1-\left| x \right|^{2}  }d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) + 4\left| x \right|^{2}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2}-4d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2}\\&=\frac{4g_{\mathbb{R} ^{n}} }{\left(1-\left| x \right|^{2} \right)^{2} }+ \left(\frac{4d\left(\left| x \right|^{2} \right) }{1-\left| x \right|^{2}  }-4\left(1-\left| x \right|^{2} \right)d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)\right)d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) \end{aligned} \end{aligned} $$    
>    And observe that 
>     $$ d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)=\frac{d\left(\left| x \right|^{2} \right) }{\left(1-\left| x \right|^{2} \right)^{2} } $$ 
>    We then have 
>     $$ S^{*}g_{\mathbb{R} ^{n,1}}= \frac{4 }{\left(1-\left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}} $$ 
>    $S$ is conformal, with the property that in there coordinates the metric on $H^{n}\left(1\right)$ is Poincare disc.
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
