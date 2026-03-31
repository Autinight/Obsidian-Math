
> [!exercise] Exercise: 
> 设$\mathscr{K}\left(x\right)\in L\left(\mathbb{R} \right)$, 及$\int _{\mathbb{R} }\mathscr{K}\left(x\right)\,d x= a$, 若$f\in L^{p}\left(\mathbb{R} \right)$, $1\le p< \infty$, 证明: 
>  $$ \lim_{\varepsilon \to 0}\left\| f*\mathscr{K}_{\varepsilon} -af\right\|_{p}= 0 $$ 

> [!proof] Proof: 
>   $$ \begin{aligned} \left| f*K_{\varepsilon }\left(x\right)-a f\left(x\right) \right|  &= \left| \int _{\mathbb{R} } f\left(x-y\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y- \int _{\mathbb{R} }f\left(x\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y \right|\\&\le \int _{\mathbb{R} }\left| f\left(x-y\right)-f\left(x\right) \right| \left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y   \end{aligned} $$ 
> 由积分形式的Minkowski不等式, 
>  $$ \begin{aligned} \left\| f*\mathscr{K}_{\varepsilon }-af \right\|_{p}&=\left( \int _{\mathbb{R} }\left(\int _{\mathbb{R} }\left| f\left(x-y\right)-f\left(x\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right| \,d y \right)^{p}\,d x\right)^{\frac{1 }{p }}\\&\le  \int _{\mathbb{R} }\left(\int _{\mathbb{R} }\left| f\left(x-y\right)-f\left(x\right) \right|^{p}\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|^{p}  \,d x\right)^{\frac{1}{p}}   \,d y\\&= \int _{\mathbb{R} }\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\left(\int _{\mathbb{R} }\left| f\left(x-y\right)-f\left(x\right) \right| ^{p}\,d x\right)^{\frac{1 }{p }}\,d y \\&= \int _{\mathbb{R} }\left|  \mathscr{K}\left(y\right) \right|\left(\int _{\mathbb{R} }\left| f\left(x-\varepsilon y\right)-f\left(x\right) \right|^{p}\,d x \right)^{\frac{1}{p}}\,d y \end{aligned} $$ 
>  由平移连续性, 
>   $$ \lim_{\varepsilon \to 0^{+ }}\left(\int _{\mathbb{R} }\left| f\left(x-\varepsilon y\right)-f\left(x\right) \right|^{p} \,d x\right)^{\frac{1}{p}}= 0 $$ 
>  又
>   $$ \left(\int _{\mathbb{R} }\left| f\left(x-\varepsilon y\right) -f\left(x\right)\right|^{p} \right)^{\frac{1}{p}}\le 2\left\| f \right\|_{L^{p}} $$
> 因此将$2\left\| f \right\|_{L^{p}}\left| \mathscr{K} \right|$作为控制函数, 由控制收敛定理, 我们有
>  $$ \lim_{\varepsilon \to 0}\left\| f*\mathscr{K}_{\varepsilon }-af \right\|_{p}= 0 $$ 