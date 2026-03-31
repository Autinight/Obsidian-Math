
> [!remark] Remark: 
> In the following we assume the coefficients of the various PDE are smooth and satisfy the uniform ellipticity condition. $U\subseteq \mathbb{R} ^{n}$ is always an open , boudned set, with smooth boundary $\partial U$.

> [!exercise] Exercise:
> Consider Lapalces's equation with potential function $c$:
>  $$ \tag{*} -\Delta u+ cu= 0 $$
> and divergence structure equation:
>  $$ \tag{**} -\operatorname{div}\left(aDv\right)= 0 $$
> where the function $a$ is positive.
> 1. show that if $u$ solves $\left(*\right)$ and $w> 0$ also sovles (*), then $v:= \frac{u}{w}$ solves (**) for $a:= w^{2}$.
> 2. Conversly, show that if $v$ solves (**), then $u:= va^{\frac{1}{2}}$ solves (*) for some potential $c$.

> [!remark] Remark: 
> The exercise tell us once we have a positive solution. We can eliminate the zero-th term to get a pure divergence form.  The coefficients function is the square of the positive solution, and the origin function is divided by $w$.

> [!proof] Proof: 
> 
>  $$ \Delta u= cu,\quad \Delta w= cw $$ 
> 
>   $$ \operatorname{div}\left(aDv\right)= \operatorname{div}\left(w^{2}D\left(\frac{u }{w }\right)\right) $$
> 
>  $$ D\left(\frac{u }{w }\right)= \frac{wDu-uDw }{w^{2} }= \frac{1 }{w }Du-\frac{u }{w^{2} }Dw $$
> Then 
> 
>  $$ \begin{aligned} \operatorname{div}\left(aDv\right) &= \operatorname{div}\left(w^{2}\left(\frac{1 }{w }Du-\frac{u }{w^{2} }Dw\right)\right)\\&= \operatorname{div}\left(wDu-uDw\right)\\&= \operatorname{div}\left(wDu\right)-\operatorname{div}\left(uDw\right):= A-B \end{aligned}$$
> 
>  $$ A= \operatorname{div}\left(wDu\right)= w \Delta u+ Dw\cdot Du= cuw+ Dw\cdot Du $$  
>  Similarly, 
>   $$ B= cuw+ Dw\cdot Du $$
> Thus
>  $$ \operatorname{div}\left(aDv\right)= 0 $$ 
> 
> Let $a= w^{2}$, then $u= \frac{v }{w }$,  we have from above that
>  $$ \operatorname{div}\left(wDu\right)= \operatorname{div}\left(uDw\right) $$
> And we know need to check that  solves (*) for some potential c,
> 
> We know have 
>  $$ w \Delta u+ Dw\cdot Du= u\Delta w+ Dw\cdot Du $$
> Then 
>  $$ w\Delta u= u\Delta w $$
> After simple rearragingm 
>  $$ \Delta u-\frac{\Delta w }{w }u= 0 $$
>  Then for potential $c= -\frac{\Delta w }{w }$, $u$ solves $\left(*\right)$. 

> [!exercise] Exercise: 
> Let 
>  $$ Lu= -\sum _{i,j= 1}^{n}\left(a^{ij}u_{x_{i}}\right)_{x_{j}}+ cu $$
> Prove that there exists a constant $\mu > 0$ such that the corresponding bilinear form $B\left[ 0\cdot ,\cdot  \right]$ satisfies the hypotheses of the Lax-Milgram Therorem, provided
>  $$ c\left(x\right)\ge -\mu \quad \left(x\in U\right) $$  