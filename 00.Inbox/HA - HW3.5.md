---
type: concept
aliases:
- HA - HW3.5
technique: []
tags: []
---

> [!exercise] Exercise: 
> 利用 Fourier 变换来证明以下等式: $a > 0, b > 0$ ,
> 1. $f_{a} * f_{b} = f_{a + b}$ , 其中 $f_{a} = \frac{a}{\pi(x^{2} + a^{2})}$ ;  
> 2. $g_{a} * g_{b} = g_{\min(a, b)}$ ，其中 $g_{a} = \frac{\sin ax}{\pi x}$ .

> [!proof] Proof: 
> 1. $$ \frac{1 }{2\pi \left(a+ it\right) }= \int _{0}^{\infty}e^{-2\pi ax}e^{-2\pi xit}\,d x $$ 
>    $$ \frac{1 }{2\pi  }\frac{1 }{a-it }= \int _{0}^{\infty}e^{-2\pi ax}e^{2\pi ixt}\,d x = \int _{-\infty}^{0}e^{2\pi a x}e^{-2\pi  ixt}\,d x$$ 
>    
>    $$ \frac{a }{\pi \left(t^{2}+ a^{2}\right) }= \frac{ 1}{2\pi  } \left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right)= \int _{-\infty}^{\infty}e^{-2\pi a\left| x \right| }e^{-2\pi i xt}\,d x $$ 
>    于是
>    
>    $$ f_{a}\left(t\right)= \mathcal{F}\left[ e^{-2\pi a \left| x \right| } \right] \left(t\right)$$ 
>    
>    $$ \hat{f}_{a}\left(t\right)= e^{-2\pi a\left| x \right| } $$ 
>    同样地
>    $$ \hat{f}_{b}\left(t\right)= e^{-2\pi b\left| x \right| } $$ 
>    继而
>    $$ \hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)= e^{-2\pi \left(a+ b\right)\left| x \right| }= \hat{f}_{a+ b} \left(t\right)$$ 
>    可知
>    $$ \widehat{f_{a}*f_{b}}= \hat{f}_{a+ b} $$ 
>    由fourier变换的唯一性
>    $$ f_{a}*f_{b}= f_{a+ b} $$ 
> 2. $$ \mathcal{F}\left[ \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(x\right)\right]\left(t\right)= \frac{\sin \left(at\right) }{\pi t } $$ 
>    于是
>    $$ \hat{g}_{a}= \chi _{-\left[ \frac{a }{2\pi  },\frac{a }{2\pi  } \right]} ,\quad  \hat{g}_{b}= \chi _{-\left[ \frac{b }{2\pi  },\frac{b }{2\pi  } \right]}$$ 
>    $$ \hat{g}_{a}\cdot \hat{g}_{b}= \chi _{-\left[ \frac{\min \left(a,b\right) }{2\pi  },\frac{\min \left(a,b\right) }{2\pi  } \right]} = \hat{g}_{a+ b}$$ 
>    于是
>    $$ \widehat{g_{a}*g_{b}}= \hat{g}_{a+ b} $$ 
>    由fourier变换的唯一性, 
>    $$ g_{a}*g_{b}= g_{a+ b} $$ 


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
