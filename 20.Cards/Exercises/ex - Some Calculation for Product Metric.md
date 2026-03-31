---
type: exercise
aliases:
  - Some Calculation for Product Metric
technique: []
book: RG Petersen
chapter: 1
number:
category: language
status: done
priority:
tags: []
---

> [!exercise] Exercise: 
> On $M\times N$ one has the Cartesian product metrics $g =  g_{M}+ g_{N}$, where $g_{M},g_{N}$ are metrics on $M,N$ respectively.
> 1. Show that $\left(\mathbb{R} ^{n},g_{\mathbb{R} ^{n}}\right)= \left(\mathbb{R} ,\,d t^{2}\right)\times \cdots \times \left(\mathbb{R} ,dt^{2}\right)$
> 2. Show that the flat square torus
>    $$ T^{2}= \mathbb{R} ^{2}/\mathbb{Z} ^{2}= \left(S^{1},\left(\frac{1 }{2\pi  }\right)^{2}\,d \theta ^{2}\right)\times \left(S^{1},\left(\frac{1 }{2\pi  }\right)^{2}\,d \theta ^{2}\right) $$ 
> 3. Show that 
>    $$ F\left(\theta _1 ,\theta _2 \right)= \frac{1 }{2\pi  }\left(\cos \theta _1 ,\sin \theta _1 ,\cos \theta _2 ,\sin \theta _2 \right) $$ 
>    is a Riemannian embedding:$T^{2}\to \mathbb{R} ^{4}$.

> [!proof] Proof: 
> 4. Identify 
>     $$ \left(x^{1},\cdots ,x^{n}\right)\in \mathbb{R} ^{n} $$
>    with 
>     $$ \left(t_1,t_2,\cdots ,t_{n}\right)\in \left(\mathbb{R} ,\,d t_1^{2}\right)\times \cdots \times \left(\mathbb{R} ,\,d t_{n}^{2}\right) $$
>      Then 
>     $$ T_{\left(x^{1},\cdots ,x^{n}\right)}\mathbb{R} ^{n}= T_{t_1}\mathbb{R} \oplus \cdots \oplus T_{t_{n}}\mathbb{R}  $$ 
>     $$ g_{\mathbb{R} ^{n}}= \,d \left(x^{1}\right)^{2}+ \cdots + \,d \left(x^{n}\right)^{2}$$
>     $$ \,d \left(x^{i}\right)\left(v_1,\cdots ,v_{n}\right)= v_{i}= \,d t_{i}\left(v_1,\cdots ,v_{n}\right) $$  
>    $g_{\mathbb{R} ^{n}}= g_{\text{product}}$
>    
> 5.  $$ g_{\mathbb{R} ^{2}/\mathbb{Z} ^{2}} $$ 
>     $\mathbb{R} ^{2}$ is a Lie Group, $\mathbb{Z}^{2}$ is a compact subgroup. $\mathbb{R} ^{2}/\mathbb{Z} ^{2}$ is a manifold.
>     $\mathbb{R}$ endowed with the stand metric. Right-translations by elements in $\mathbb{Z} ^{2}$ 
>   The right-translations by element $z\in \mathbb{Z} ^{2}$ is 
>      $$ + z $$
>     which is isometris. Then there is a unique Riemannian metric on $\mathbb{R} ^{2}/\mathbb{Z} ^{2}$ making the projection 
>      $$ \mathbb{R} ^{2}\to \mathbb{R} ^{2}/\mathbb{Z} ^{2} $$
>       a Riemannian  submersion. The metic $D\pi : \left(\operatorname{ker}D \pi \right)^{\perp}\to T_{\pi \left(p\right)}\mathbb{R} ^{2}/\mathbb{Z} ^{2}$, that is 
>       $$ g\left(v,w\right)= \tilde{g}\left(\left(D\pi \right)v, \left(D\pi \right)w\right) $$ 
>     $$ \pi : r\mapsto r+ \mathbb{Z} ^{2} $$
>     $T_{0}\mathbb{R} ^{2}\simeq \mathbb{R} ^{2}$, $T_{0}\left(\mathbb{R} ^{2}/\mathbb{Z} ^{2}\right)$, $\mathbb{Z} ^{2}$. 
>     $$ T_{0}\left(\mathbb{R} ^{2}/\mathbb{Z} ^{2}\right)\simeq T_{e}\mathbb{R} ^{2}/T_{e}\mathbb{Z} ^{2} \simeq \mathbb{R} ^{2}$$ 
>     $$ d\pi _{e}\left(v\right)= v $$ 
>     $$ g\left(v,w\right)= \tilde{g}\left(v,w\right) $$ 
>     $$ \varphi :\mathbb{R} ^{2}\to S^{1}\times S^{1} $$
>     $$ \left(a,b\right)\mapsto \left(2\pi a,2\pi b\right) $$
>     $\operatorname{ker}\varphi =\mathbb{Z} ^{2}$, Lie isomorphism
>     $$ \widetilde{\varphi}:\mathbb{R} ^{2}/\mathbb{Z} ^{2}\simeq S^{1}\times S^{1} $$ 
>     The inverse map
>     $$ \psi \left(\theta ^{1},\theta ^{2}\right)\mapsto \left(\frac{\theta ^{1} }{2\pi  }+ \mathbb{Z} , \frac{\theta ^{2} }{2\pi  }+ \mathbb{Z} \right) $$ 
>     $$ \,d \psi \left(v,w\right)= \left(\frac{v }{2\pi  },\frac{w }{2\pi  }\right) $$ 
>     The induced metric on $S^{1}\times S^{1}$ is 
>     $$ \psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{1}},\partial _{\theta ^{1}}\right)= \tilde{g}\left(d\psi \left(\partial _{\theta ^{1}}\right),d\psi \left(\partial _{\theta ^{1}}\right)\right) =\left(\frac{1 }{2\pi  }\right)^{2} $$
>     Similarly , $\psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{2}},\partial _{\theta ^{2}}\right)= \left(\frac{1 }{2\pi  }\right)^{2}$, $\psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{1}},\partial _{\theta ^{2}}\right)= 0$. Thus
>     $$ g_{S^{1}\times S^{1}}= \psi ^{*}\left(\tilde{g}\right)= \left(\frac{1 }{2\pi  }\right)^{2}\,d \theta _1 ^{2}+ \left(\frac{1 }{2\pi  }\right)^{2}\,d \theta _2 ^{2} $$ 
> 6. Smooth embedding. Compact to Hausdorff, injective immersion, with $F^{*}\hat{g}= g_{T^{2}}$ 
>  $$ \begin{aligned} F^{*}\hat{g}\left(\partial _{\theta ^{1}},\partial _{\theta ^{1}}\right)&=\hat{g}\left( D F\left(\partial _{\theta ^{1}}\right), DF\left(\partial _{\theta ^{1}}\right)\right)= \frac{1 }{2\pi  }\left(\cos ^{2}\theta ^{1}+ \sin ^{2}\theta ^{1}\right)= \frac{1 }{2\pi  } \end{aligned}$$
> and so on , we have 
>  $$ F^{*}\hat{g}= g_{S^{1}\times S^{1}} $$  


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
