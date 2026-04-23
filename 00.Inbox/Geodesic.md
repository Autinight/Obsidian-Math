---
type: concept
aliases:
- Geodesic
technique: []
tags: []
---
> [!exercise] EXERCISE 5.9.21.
> Let $f:(M,g)\to\mathbb{R}$ be a smooth function on a Riemannian manifold.
> 1. Let $c:(a,b)\to M$ be a geodesic. Compute the first and second derivatives of $f\circ c$.
> 2. Use this to show that at a local maximum (or minimum) for $f$ the gradient is zero and the Hessian nonpositive (or nonnegative).
> 3. Show that $f$ has everywhere nonnegative Hessian if and only if $f\circ c$ is convex for all geodesics $c$ in $(M,g)$.


> [!proof] Proof: 
> 4. $$ \frac{\mathrm{d}}{\mathrm{d}t}\left(f\circ c\right)= df\left(c^{\prime} \left(t\right)\right)= \left(c^{\prime} \left(t\right)\right)\left(f\right)$$ 
> $$ \begin{aligned} \left(f\circ c\right)^{\prime \prime} \left(t\right)&= \frac{\mathrm{d}}{\mathrm{d}t} \left(df\left(c^{\prime} \left(t\right)\right)\right)= \frac{\mathrm{d}}{\mathrm{d}t}g\left(\operatorname{grad}f,c^{\prime} \left(t\right)\right)\\&= g\left(\nabla _{c^{\prime} \left(t\right)}\operatorname{grad}f,c^{\prime} \left(t\right)\right)+ g\left(\operatorname{grad}f, \nabla _{c^{\prime} \left(t\right)}c^{\prime} \left(t\right)\right)\\&= \operatorname{Hess}f\left(c^{\prime} \left(t\right),c^{\prime} \left(t\right)\right) \end{aligned}$$ 
> 5. If $f$ reach the maximum at $p$, let $c$ be the geodesic with the initial velocity $\operatorname{grad}f$.
> $$ \left(f\circ  c\right)^{\prime} \left(0\right)\le 0 $$
> $$ \left(f\circ c\right)^{\prime} \left(0\right)= \left(c^{\prime} \left(0\right)\right)\left(f\right)= \left< \operatorname{grad}f,c^{\prime} \left(0\right) \right>= \left< \operatorname{grad}f,\operatorname{grad}f \right>= \left| \operatorname{grad}f \right|^{2}\le 0  $$  
> Then 
> $$ \operatorname{grad}f= 0 $$ 
> Similarly, if $f$ reach the minimum at $p$ , then $-f$ reach the maximum, $\operatorname{grad}f= -\left(\operatorname{grad}\left(-f\right)\right)= 0$
> $$ \begin{aligned} \left(f\circ c\right)\left(t\right)&= f\left(p\right)+ t \left(f\circ c\right)^{\prime} \left(0\right)+ \frac{1}{2}t^{2}\left(f\circ c\right)^{\prime \prime} \left(0\right)+ o\left(t^{2}\right)\\&= f\left(p\right)+ tg\left(\operatorname{grad}f,v\right)+ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)+ o\left(t^{2}\right)  \\&= f\left(p\right)+ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)\end{aligned} $$ 
> $$ \frac{1}{2}t^{2}\operatorname{Hess}f\left(v,v\right)=f\left(c\left(t\right)\right)-f\left(p\right)+ o\left(t^{2}\right)\ge o\left(t^{2}\right) $$ 
> $$ \operatorname{Hess}f\left(v,v\right)\ge o\left(1\right) \implies \operatorname{Hess}f\left(v,v\right)\ge 0$$ 
> 
> 6. 
> $$ \left(f\circ c\right)^{\prime \prime} \left(t\right)= \operatorname{Hess}f\left(c^{\prime} \left(t\right),c^{\prime} \left(t\right)\right)  $$ 
> $f\circ c$ is convex for all geodesic, iff $\left(f\circ c\right)^{\prime} \left(t\right)\ge 0$ for all geodesic $c$. Since for each $v$, there exists $c^{\prime} \left(t\right)= v$.


> [!exercise] EXERCISE 5.9.27.
> Consider a Riemannian manifold and let $r(x)=|xp|$. Introduce exponential normal coordinates $x^{i}$ at $p$.
> 7. Show that
> $$(\operatorname{Hess}x^{i})_{kl}=-\Gamma_{kl}^{i}=O(r).$$
> 8. Use that $\frac{1}{2}r^{2}=\frac{1}{2}\sum(x^{i})^{2}$ together with $g=\delta_{ij}+O(r^{2})$ to show that
> $$\operatorname{Hess}\frac{1}{2}r^{2}=g+O(r^{2}).$$
> 9. Show that
> $$\operatorname{Hess}r=\frac{1}{r}g_{r}+O(r).$$


> [!proof] Proof: 
> 10. 
>   $$ \begin{aligned} \begin{aligned} \left(\operatorname{Hess}x^{i}\right)_{kl}= \operatorname{Hess}x^{i}\left(\partial _{k},\partial _{l}\right)&= \left(\nabla _{\partial _{k}}dx^{i}\right)\left(\partial _{l}\right)\\&= \partial _{k}\left(\partial _{l}x^{i}\right)- \left(\nabla _{\partial _{k}}\partial _{l}\right)\left(x^{i}\right)\\&= 0-\Gamma _{kl}^{s}\partial _{s}x^{k}= -\Gamma _{kl}^{i}\end{aligned}\end{aligned} $$ 
>   
>   $$ g_{ij}= \delta _{ij}+O\left(r^{2}\right) \implies \partial _{k}g_{ij}= O\left(r\right)$$ 
>   
>   $$ \Gamma _{ij,k}= \frac{1}{2}\left(\partial _{i}g_{jk}+ \partial _{j}g_{ik}-\partial _{k}g_{ij}\right)= O\left(r\right) $$ 
>   
>   $$ \Gamma _{ij}^{k}= g^{kl}\Gamma _{ij,l} = g^{kl}O\left(r\right)= O\left(r\right)$$ 
> 11. $$  \operatorname{Hess}f\left(X,Y\right)= \left(\nabla _{X}df\right)\left(Y\right) $$ 
>    
>    $$ \begin{aligned} \frac{1}{2}\left( \operatorname{Hess}\left(x^{i}\right)^{2}\right)\left(X,Y\right)&=\frac{1}{2} \left(\nabla _{X}\left(d\left(x^{i}\right)^{2}\right)\right)\left(Y\right)\\&=\frac{1}{2} \left(\nabla _{X}\left(2x^{i}dx^{i}\right)\right)\left(Y\right)\\&= \left(dx^{i}\left(X\right)dx^{i}+ x^{i}\nabla _{X}\left(dx^{i}\right)\right)\left(Y\right) \\&= \left(dx^{i}\right)^{2}\left(X,Y\right)+ x^{i}\left(\operatorname{Hess}x^{i}\right)\left(X,Y\right)\\&= \left(dx^{i}\right)^{2}\left(X,Y\right)-x^{i}\Gamma _{kl}^{i}\\&= \left(dx^{i}\right)^{2}\left(X,Y\right)+ O\left(r^{2}\right)\end{aligned} $$ 
>    
>    Note that $\operatorname{Hess}$ is $\mathbb{R}$-linear, we have 
>    $$ \begin{aligned} \operatorname{Hess}\frac{1}{2}r^{2}&= \sum _{i}\left(dx^{i}\right)^{2}+ O\left(r^{2}\right)\\&= \delta _{ij}+ O\left(r^{2}\right)\end{aligned} $$ 
>    
>    Finally, since 
>    $$ g = \delta _{ij}+ O\left(r^{2}\right) \implies \delta _{ij}= g+ O\left(r^{2}\right)$$ 
>    
>    We have 
>    $$ \operatorname{Hess}\frac{1}{2}r^{2}= g+ O\left(r^{2}\right) $$ 
> 12. $$ g =  dr^{2}+ g_{r} $$ 
>    
>    $$ \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)= dr^{2}+ g_{r}+ O\left(r^{2}\right) $$ 
>    $$ \begin{aligned} \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)\left(X,Y\right)&= \left(\nabla _{X}d\left(\frac{1}{2}r^{2}\right)\right)\left(Y\right)\\&= \left(\nabla _{X}\left(rdr\right)\right)\left(Y\right)\\&= \left(\left(dr\left(X\right)\right)dr+ r\nabla _{X}\left(dr\right)\right)\left(Y\right)\\&= dr^{2}\left(X,Y\right)+ r\operatorname{Hess}\left(r\right)\left(X,Y\right) \end{aligned}$$ 
>    
>    $$ \operatorname{Hess}\left(\frac{1}{2}r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    $$ g+ O\left(r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    
>    $$ dr^{2}+ g_{r}+ O\left(r^{2}\right)= dr^{2}+ r\operatorname{Hess}r $$ 
>    
>    $$ g_{r}+ O\left(r^{2}\right)= r\operatorname{Hess}r $$ 
>    
>    $$ \operatorname{Hess}r = \frac{1 }{r }g_{r}+ O\left(r\right)$$ 

> [!exercise] EXERCISE 5.9.30.
> Assume that we have coordinates $x^{i}$ around a point $p\in(M,g)$ such that $x^{i}(p)=0$ and $g_{ij}x^{j}=\delta_{ij}x^{j}$. Show that these must be exponential normal coordinates. Hint: Define $r=\sqrt{\delta_{ij}x^{i}x^{j}}$; show that it is a smooth distance function away from $p$; and that the integral curves for the gradient are geodesics emanating from $p$.

> [!remark] Remark: 
> 如果能说明$g_{ij}= \delta _{ij}$在$p$处成立, 就能把$T_{p}M$中的量保长度地用$x^{i}$分量表示出来.
> 
> 法坐标的特征就是, 用切空间上过原点的速率为$\left| v \right|$直线, 代替$M$中长度为$\left| v \right|$的从原点出发的测地线的终点.
>
> 因此想要说明坐标是法坐标, 就需要说明用法坐标的分量来表示向量, 能替代$T_{p}M$的作用, 坐标直线代表相应的测地线.

> [!note] Note: 
> 想清楚坐标为什么是法坐标, 就要想清楚$T_{p}M$是如何起到法坐标的特征的.

We define 
$$ r= \sqrt{\delta _{ij}x^{i}x^{j}} $$ 

Then 
$$ r= \sqrt{g_{ij}x^{i}x^{j}} $$ 


$$ \operatorname{grad}r= r^{i}\partial _{i} $$
$$ r^{i}= g^{ik}r_{k} $$  

$$ dr= r_{k}dx^{k} $$ 

$$ r^{2}= \left(x^{1}\right)^{2}+ \cdots + \left(x^{n}\right)^{2} $$ 

$$ 2rdr= \sum _{i}2x^{i}\,d x^{i}\implies r_{k}= \frac{x^{k} }{r } $$ 

$$ \left| \operatorname{grad}r \right|^{2}= g\left(r^{k}\partial _{k},r^{l}\partial _{l}\right)= g_{kl}r^{k}r^{l}= g_{kl}g^{ki}r_{i}g^{lj}r_{j}= \delta _{l}^{i}g^{lj}r_{i}r_{j}= g^{ij}r_{i}r_{j}  $$ 

$$ g^{ij}r_{i}r_{j}= \frac{1 }{r^{2} }g^{ij}x^{i}x^{j} $$ 
but
$$ g_{ij}x^{j}= \delta _{ij}x^{j}\implies x^{j}= \sum _{i}g^{ij}x^{j} $$ 
Thus
$$ \left| \operatorname{grad}r \right|^{2}= \frac{1 }{r^{2} }  \sum _{j}x^{j}x^{j}= 1$$ 
which imlies that $r$ is a distance function.

$$ \operatorname{Hess}r\left(\operatorname{grad}r,X\right)= g\left(\nabla _{\operatorname{grad}r}\operatorname{grad}r,X\right) $$ 

which implies that 
$$ \operatorname{Hess}r\left(X,\operatorname{grad}r\right)= 0 $$ 

From the symmetry of $\operatorname{Hess}r$, we have 
$$ g\left(\nabla _{\operatorname{grad}r}\operatorname{grad}r,X\right)= \operatorname{Hess}r\left(X,\operatorname{grad}r\right)= 0 $$ 
Then we know $\nabla _{\operatorname{grad}r}\operatorname{grad}r= 0$.

Thus for each integral curves $\gamma \left(t\right)$ for $\operatorname{grad}r$ emanating from $p$,  we have $\gamma \left(t\right)$ is a geodesic. 

If
$$ \gamma ^{\prime} \left(t\right)= \operatorname{grad}r $$ 

We have 
$$ \left| \gamma ^{\prime} \left(t\right) \right|= 1  $$ 

$$ L\left(\gamma |_{\left[ 0,t \right]}\right)= \int _{0}^{t}\left| \gamma ^{\prime} \left(t\right) \right|\,d t=   $$ 

$$ r\left(\gamma \left(s\right)\right)= \int _{0}^{s} dr\left(\gamma ^{\prime} \left(t\right)\right)\le \int _{0}^{s}\left| dr \right|\left| \gamma ^{\prime} \left(t\right) \right|= s  $$ 
We have 
$$ \gamma \left(t\right)= \gamma \left(r\right) $$ 

Suppose that 
$$ \gamma \left(r\right)= \left(x^{1}\left(r\right),\cdots ,x^{n}\left(r\right)\right) $$ 
Since
$$ \operatorname{grad}r= r^{i}\partial _{i}= g^{ik}r_{k}\partial _{i}= \sum _{i}g^{ik}\frac{x^{k} }{r }\partial _{i}= \sum _{i}\frac{\delta ^{ik}x^{k} }{r }\partial _{i}= \sum _{i}\frac{x^{i} }{r }\partial _{i} $$ 
Then
$$ \dot{x}^{i}\left(r\right)= \frac{x^{i} }{r } $$ 


$$ x^{\prime} \left(r\right)-\frac{x }{r }= 0\iff \frac{dx }{dr }-\frac{x }{r }= 0\iff \frac{1 }{x }dx= \frac{1 }{r }dr\implies \ln \left| x \right|= \ln \left| r \right|+ C\implies x= cr   $$ 

We have 
$$ \dot{x}^{i}\left(r\right)= c^{i}r $$ 

$$ \gamma \left(r\right)= \left(c^{1}r,\cdots ,c^{n}r\right) $$ 

is a line under the coordinates $\left(x^{1},\cdots ,x^{n}\right)$.

That is 

$$ \gamma _{v}\left(r\right)= \gamma _{rv}\left(1\right) $$ 


> [!exercise] EXERCISE 5.9.35.
> Consider a Lie group $G$ with a biinvariant pseudo-Riemannian metric.
> 1. Show that homomorphisms $\mathbb{R}\to G$ are precisely the integral curves for left-invariant vector fields through $e\in G$.
> 2. Show that geodesics through the identity are exactly the homomorphisms $\mathbb{R}\to G$. Conclude that the Lie group exponential map coincides with the exponential map generated by the biinvariant Riemannian metric. The Lie theoretic exponential map $\exp:T_{e}G\to G$ is precisely the map that takes $v\in T_{e}G$ to $c(1)$, where $c:\mathbb{R}\to G$ is the integral curve with $c(0)=e$ for the left-invariant field generated by $v$.
> 3. Show that when the metric is Riemannian, then every element in $x\in G$ has a square root $y\in G$ with $y^{2}=x$. Hint: This uses metric completeness.
> 4. Show that $\operatorname{SL}(n,\mathbb{R})$ does not admit a biinvariant Riemannian metric and compare this to exercise 1.6.28.

> [!proof] Proof: 
> 1. **单参数子群是左不变向量场的积分曲线**: If $\varphi :\mathbb{R} \to G$ is a homomorphism, then we have 
>      $$ \varphi \left(s+ t\right)= \varphi \left(s\right)\varphi \left(t\right) $$  
>     
>     $$ \varphi \left(0\right)= e $$ 
>     
>     Denote $v= \varphi ^{\prime} \left(0\right)\in T_{e}G= \mathfrak{g}$. Let $X$ be the left-invariant vector fields generated by $v$, that is 
>     $$ L_{g}^{*}X= X $$ 
>     
>     $$ X_{g}=\left( \,d L_{g}\right)|_{e}\left(v\right) $$ 
>     
>     $$ \varphi \left(s+ t\right)= L_{\varphi \left(s\right)} \varphi \left(t\right)$$ 
>     
>     $$ \varphi ^{\prime} \left(s\right)= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\varphi \left(s+ t\right)= \left(dL_{\varphi \left(s\right)}\right)\left(\varphi ^{\prime} \left(0\right)\right)= X_{\varphi \left(s\right)} $$ 
>     
>     $$ \frac{\mathrm{d}}{\mathrm{d}t}|_{t= s}\varphi \left(t\right)= \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\varphi \left(s+ t\right) $$ 
> 2. Let $c_{v}\left(t\right)$ be the geodesics starting at the identity, with $c_{v}^{\prime} \left(0\right)= v$.
>    
>    Then
>    $$ \frac{1}{2}\left[ c_{v}^{\prime} \left(t\right),c_{v}^{\prime} \left(t\right) \right]= \nabla _{c_{v}^{\prime} \left(t\right)}c_{v}^{\prime} \left(t\right)= 0 $$
>    
>    
>    Given a non-degenerate bilinear form $\left(\cdot ,\cdot \right)$ on $T_{e}G$, then the pseudo-Riemannian metric related to it  is 
>    $$ \left(v,w\right)= \left(\left(dL_{g}\right)\left(v\right), \left(dL_{g}\right)\left(w\right)\right)= \left(\left(dR_{g}\right)\left(v\right), \left(dR_{g}\right)\left(w\right)\right) $$ 
>    
>    For each $v\in T_{e}G$, let $X_g = \left(dL_{g}\right)\left(v\right)$ . Let $\varphi$ be the integral cruve for $X$ with $\varphi \left(0\right)= e$. since $X$ is left- invariant, we have 
>    
>    
>    $$ \left(X,Y\right)= \left(\operatorname{Ad}_{a}\left(X\right),\operatorname{Ad}_{a}\left(Y\right)\right) $$ 
>    
>    $$ \left(\operatorname{Ad}_{\exp \left(tZ\right)}X, \operatorname{Ad}_{\exp \left(tZ\right)}Y\right)= \left(X,Y\right) $$ 
>    
>    $$ \left. \frac{\mathrm{d}}{\mathrm{d}t} \right|_{t= 0}\operatorname{Ad}_{\exp \left(tZ\right)}= \operatorname{ad}_{Z} $$
>     
>    
>    We have
>    $$ \left(\left[ Z,X \right], \operatorname{Ad}_{\exp \left(0\right)}Y\right)+ \left(\operatorname{Ad}_{\exp \left(0\right)}X,\left[ Y,Z \right]\right)= \frac{\mathrm{d}}{\mathrm{d}t} \left(X,Y\right)= 0$$ 
>    Thus
>    $$ \left(\left[ Z,X \right],Y\right)=-\left(X,\left[ Z,Y \right]\right)= \left(X,\left[ Y,Z \right]\right) $$ 
>    
>    $$ \left(X,\left[ Y,Z \right]\right)= \left(\left[ X,Y \right],Z\right) $$ 
>    
>    From Koszul formular, we have for $X,Y\in \mathfrak{g}$
>    $$ \nabla _{X}Y= \frac{1}{2}\left[ X,Y \right]\implies \nabla _{X}X= 0 $$ 
>    
>    Then $\varphi$ is a geodiesics. From the uniquenes of geodecis, we know that the  geodesic through $p$ with initial velocity $v$ is just $\varphi$, which is the integral curves for the left-invariant vector fields $X$, i.e. a homormorphism $\mathbb{R} \to G$.
>    
>    Then 
>    $$ \exp _{Lie}: T_{e}G\to G,\quad v\mapsto \varphi \left(1\right) $$ 
>    
>    $$ \exp _{Riemannian}: T_{e}G\to G,\quad v\mapsto \varphi \left(1\right) $$ 
>    
>    are the same.
> 3. $$ \varphi \left(s+ t\right)= \varphi \left(s\right)\varphi \left(t\right) $$ 
>    
>    $$ \varphi \left(2s\right)= \varphi \left(s\right)^{2} $$ 
>    
>    Every geodesics through the identity exists for all the time. Then a corrolarry for Hopf-Rinow gives that for each $g\in G$, there exists a segment $\varphi: \mathbb{R} \to G$ as well as a radical geodecis, such that $\varphi \left(0\right)= e$, $x\in \varphi \left(\mathbb{R} \right)$. 
>    We set $x =  \varphi \left(2s\right)$, then 
>    $$ x =  \varphi \left(2s\right)= \varphi \left(s\right)\varphi \left(s\right)= \left(\varphi \left(s\right)\right)^{2}$$ 
>    Then $y:= \varphi \left(s\right)$ is the squere root for $x$.
> 4. 对于$n\ge 2$, 我们考虑
> $$ A= E_{12}+ \operatorname{diag} \left( -1,-1,\frac{1}{2},2,\frac{1}{3},3,\cdots  \right)  $$
> 如果$n$为奇数, 则为上述对角阵的末尾补一个$1$.
> 则$\det A= 1$, $A\in SL\left(n,\mathbb{R} \right)$.  $A$的特征值为$-1,-1,\frac{1}{2},2,\cdots$. 如果$A$存在平方根, 设为$B$, 若$B$的特征值为$\lambda _1 ,\lambda _2 ,\cdots ,\lambda _{n}$, 则$A= B^{2}$的特征值为$\lambda _1 ^{2},\cdots ,\lambda _{n}^{2}$. 不妨设$\lambda _1 ^{2}= \lambda _2 ^{2}= -1$, $\lambda _3 ^{2}= \frac{1 }{2 }$, $\lambda _4 ^{2}= 2,\cdots$ , 则$\lambda _1= -\lambda _2 = \pm i$, $\lambda _3=\pm \frac{1 }{\sqrt{2} }, \lambda _4 = \pm\sqrt{2}, \cdots$. $B$具有互异的特征值, 因此$B$可对角化, 从而$A= B^{2}$也可对角化. 但是$A$就是自己的Jordan标准型, 矛盾. 因此$A$不存在平方根.

> [!exercise] EXERCISE 5.9.42.
> Consider exponential normal coordinates around $p\in M$, i.e., $\delta_{ij}x^{j}=g_{ij}x^{j}$ and $x^{i}(p)=0$. All calculations below are at $p$.
> 1. Show that the second partials of the metric satisfy the Bianchi identity
> $$\partial_{l}\partial_{k}g_{ji}+\partial_{j}\partial_{l}g_{ki}+\partial_{k}\partial_{j}g_{li}=0.$$
> Hint: Take three derivatives of the defining relation $x^{i}=\sum_{s}g_{is}x^{s}$ as in lemma 5.5.7.
>
> 
> 2. Use all four of these Bianchi identities with the last index being $i,j,k$, or $l$ to conclude
> $$\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}.$$
> 3. Use the formula for the curvature tensor in normal coordinates from section 3.1.6 to show
> $$R_{ikjl}=\partial_{i}\partial_{j}g_{kl}-\partial_{i}\partial_{l}g_{jk}.$$
> 4. Use (3) and (1) to show
> $$\partial_{i}\partial_{j}g_{kl}=\frac{1}{3}(R_{ikjl}+R_{jkil}).$$
> 5. Show that we have a Taylor expansion
> $$g_{kl}=\delta_{kl}+\frac{1}{3}R_{ikjl}x^{i}x^{j}+O(|x|^{3}).$$
> 6. (**Riemann**) Use the symmetries of the curvature tensor to conclude
> $$\begin{aligned} g&=\sum_{k,l=1}^{n}g_{kl}dx^{k}dx^{l} \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{12}\sum_{i,j,k,l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \\ &=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}R_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3}) \end{aligned}$$
> 7. (**Gauss**) Show that in dimension 2 we have
> $$\begin{aligned} g&=dx^{2}+dy^{2}+\frac{1}{3}R_{1212}(xdy-ydx)^{2}+o(x^{2}+y^{2}) \\ &=dx^{2}+dy^{2}-\frac{1}{3}\sec(p)(xdy-ydx)^{2}+o(x^{2}+y^{2}). \end{aligned}$$
> Riemann's construction of the curvature tensor proceeded as follows: Start with the normal coordinates, next use the radial isometry property to conclude that the Taylor expansion has the form
> $$g=\sum_{i=1}^{n}dx^{i}dx^{i}+\frac{1}{3}\sum_{i<k,j<l}C_{ikjl}(x^{i}dx^{k}-x^{k}dx^{i})(x^{j}dx^{l}-x^{l}dx^{j})+O(|x|^{3})$$
> for some tensor $C$. This tensor has some obvious symmetry properties from the form of the expansion. It is possible to calculate it from the derivatives $\partial_{i}\partial_{j}g_{kl}$ provided they satisfy $\partial_{i}\partial_{j}g_{kl}=\partial_{k}\partial_{l}g_{ij}$. Finally, one has to show that this property is equivalent to the assertion that the above expansion is possible.

> [!proof] Proof: 
> 8. From 
>    $$dr\left(v\right)= g\left(\partial _{r},v\right) $$
>    We have 
>    $$ \left(\sum _{i}x^{i}\varepsilon _{i}\right) \left(v^{i}\partial _{i}\right)= g_{ij}\left(x^{i}\partial _{i},v^{i}\partial _{i}\right)$$
>    $$ \delta _{ij}x^{i}v^{j}= g_{ij}x^{i}v^{j} \implies \delta _{ij}x^{i}= g_{ij}x^{i}$$     
>    Sum over $i$, to get
>    $$ x^{j}= g_{ij}x^{i} $$
>    $$ \partial _{k}x^{j}= \delta _{k}^{j}= \left(\partial _{k}g_{ij}\right)x^{i}+ g_{ij}\delta _{k}^{i} $$  
>    $$ 0= \left(\partial _{l}\partial _{k}g_{ij}\right)x^{i}+ \left(\partial _{k}g_{ij}\right)\delta ^{i}_{l}+ \left(\partial _{l}g_{ij}\right)\delta _{k}^{i} $$ 
>    Take value at $p$, we have 
>    $$ \left(\partial _{k}g_{ij}\right)\delta _{l}^{i}+ \left(\partial _{l}g_{ij}\right)\delta _{k}^{i}= 0 $$ 
>    Sum over $i$, we have 
>    $$ \left(\partial _{k}g_{lj}\right)+ \left(\partial _{l}g_{kj}\right)= 0 $$
>    $$ \left(\partial _{i}\partial _{k}g_{lj}\right)+ \left(\partial _{i}\partial _{l}g_{kj}\right)= 0\tag{*} $$ 
>    Use 
>    $$ \partial _{l}\partial _{k}g_{ji}= -\partial _{l}\partial _{j}g_{ki}= -\partial _{j}\partial _{l}g_{ki},\quad \partial _{j}\partial _{l}g_{ki}= -\partial _{j}\partial _{k}g_{li}= -\partial _{k}\partial _{j}g_{li},\quad \partial _{k}\partial _{j}g_{li}= -\partial _{k}\partial _{l}g_{j}= -\partial _{l}\partial _{k}g_{ji} $$ 
>    Sum over the three, we get
>    $$\partial _{l}\partial _{k}g_{ji}+ \partial _{j}\partial _{l}g_{ki}+ \partial _{k}\partial _{j}g_{li}=-\left(\partial _{l}\partial _{k}g_{ji}+ \partial _{j}\partial _{l}g_{ki}+ \partial _{k}\partial _{j}g_{li}\right)  \implies \cdots = 0 $$ 
> 9. From (*)
>    $$ \left(\partial _{i}\partial _{j}g_{kl}\right)= -\partial _{i}\partial _{k}g_{jl}= -\partial _{k}\partial _{i}g_{lj}= \partial _{k}\partial _{l}g_{ij} $$ 
> 10. Recall
>    $$ R_{ijk}^{l}\partial _{l}= \nabla _{i}\nabla _{j}\partial _{k}- \nabla _{j}\nabla _{i}\partial _{k} $$
>    $$ R_{ijk}^{l}= \partial _{i}\Gamma _{jk}^{l} -\partial _{j}\Gamma _{ik}^{l}+ \Gamma _{jk}^{s}\Gamma _{is}^{l}-\Gamma _{ik}^{s}\Gamma _{js}^{l}$$  
>    
>    $$ R_{ijkl}= g_{ml}R_{ijk}^{m}= g_{ml}\left(\partial _{i}\Gamma _{jk}^{m}-\partial _{j}\Gamma _{ik}^{m}+ \Gamma _{jk}^{s}\Gamma _{is}^{m}-\Gamma _{ik}^{s}\Gamma _{js}^{m}\right) $$ 
>    
>    $$ R_{ijkl}= \partial _{i}\Gamma _{jk,l} -\partial _{j}\Gamma _{ik,l}+ g^{st}\Gamma _{ik,s}\Gamma _{jl,t}-g^{st}\Gamma _{jk,s}\Gamma _{il,t}$$ 
>    where
>    $$ \Gamma _{jk,l}= g_{ml}\Gamma _{jk}^{m} $$ 
>    We have at $p$
>    $$ R_{ijkl}= \partial _{i}\Gamma _{jk,l} -\partial _{j}\Gamma _{ik,l}$$ 
>    
>    $$2\Gamma _{jk,l}= \partial _{j}g_{kl}+ \partial _{k}g_{jl}-\partial _{l}g_{jk} $$
>    $$ 2\partial _{i}\Gamma _{jk,l}= \partial _{i}\partial _{j}g_{kl}+ \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk} $$  
>    $$ 2\partial _{j}\Gamma _{ik,l}= \partial _{j}\partial _{i}g_{kl}+ \partial _{j}\partial _{k}g_{il}-\partial _{j}\partial _{l}g_{ik} $$ 
>    
>    We have from 2.
>    $$ \begin{aligned} 2R_{ijkl}&= \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk}-\partial _{j}\partial _{k}g_{il}+ \partial _{j}\partial _{l}g_{ik}\\&= \partial _{i}\partial _{k}g_{jl}-\partial _{i}\partial _{l}g_{jk} -\partial _{i}\partial _{l}g_{jk}+ \partial _{i}\partial _{k}g_{jl}\\&= 2\partial _{i}\partial _{k}g_{jl}-2\partial _{i}\partial _{l}g_{jk}\end{aligned} $$ 
>    By adjusting index, we have 
>    $$ R_{ikjl}= \partial _{i}\partial _{j}g_{kl}-\partial _{i}\partial _{l}g_{jk} $$ 
>    $\partial _{\cdot }\partial _{\cdot }g_{\cdot \cdot }$, 1324-1423
>    
> 11. 
>    $$ \begin{aligned} \begin{aligned} R_{jkjl}+ R_{jkil}&= \partial _{i}\partial _{j}g_{kl}-\partial _{i}\partial _{l}g_{jk}+ \partial _{j}\partial _{i}g_{kl}-\partial _{j}\partial _{l}g_{ki}\\&= 2\partial _{i}\partial _{j}g_{kl}-\left(\partial _{i}\partial _{l}g_{jk}+ \partial _{j}\partial _{l}g_{ik}\right)\\&= 2\partial _{i}\partial _{j}g_{kl}-\left(-\partial _{i}\partial _{j}g_{kl}\right)\\&= 3\partial _{i}\partial _{j}g_{kl} \end{aligned} \end{aligned} $$ 
>    
> 12.  We know that $\partial _{r}g_{kl}= 0$ at $p$.
>    Then 
>    $$ \begin{aligned} g_{kl}&= \delta _{kl}+ \frac{1 }{2 }\left(\partial _{i}\partial _{j}g_{kl}\right)x^{i}x^{j} + O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}\left(R_{ikjl}+ R_{jkil}\right)x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ \frac{1}{6}R_{jkil}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ \frac{1}{6}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right)\\&= \delta _{kl}+ \frac{1}{3}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right) \end{aligned}$$ 
> 13. $$ \begin{aligned} g &= \sum _{k,l}^{n}g_{kl}dx^{k}dx^{l}\\&= \sum _{k,l = 1}^{n}\left(\delta _{kl}+ \frac{1}{3}R_{ijkl}x^{i}x^{j}\right)\,d x^{k}\,d x^{l}+ O\left(\left| x \right|^{3} \right)\\&= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{3 }\sum _{i,j,k,l = 1}^{n}R_{ijkl}x^{i}x^{j}\,d x^{k}\,d x^{l}  \end{aligned} $$ 
>    
>    $$ \begin{aligned}\sum _{i,j,k,l} R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)&=\sum _{i,j,k,l} R_{ikjl}\left(x^{i}x^{j}\,d x^{k}\,d x^{l}-x^{i}x^{l}\,d x^{k}\,d x^{j}-x^{k}x^{j}\,d x^{i}\,d x^{l} + x^{k}x^{l}\,d x^{i}\,d x^{j}\right)\\&= \sum _{i,j,k,l}R_{ikjl}x^{i}x^{j}\,d x^{k}\,d x^{l}-\sum _{i,j,k,l}R_{iklj}x^{i}x^{j}\,d x^{k}\,d x^{l}\\&-\sum _{i,j,k,l}R_{kijl}x^{i}x^{j}\,d x^{k}\,d x^{l}+ \sum_{i,j,k,l}R_{kilj}x^{i}x^{j}\,d x^{k}\,d x^{l}\\&= 4R_{ikjl}\sum _{i,j,k,l}x^{i}x^{j}\,d x^{k}\,d x^{l}  \end{aligned}$$ 
>    
>    Thus
>    $$ \begin{aligned} g &= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{12 }\sum _{i,j,k,l}R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)+ O\left(\left| x \right|^{3} \right)\\ &= \sum _{i= 1}^{n}\,d x^{i}\,d x^{i}+ \frac{1 }{3 }\sum _{i< j,k< l}R_{ikjl}\left(x^{i}\,d x^{k}-x^{k}\,d x^{i}\right)\left(x^{j}\,d x^{l}-x^{l}\,d x^{j}\right)+ O\left(\left| x\right|^{3} \right) \end{aligned} $$ 
> 14. In $\operatorname{dim}$ 2,
>    $$ \begin{aligned} g &= \,d x^{^{2}}+ \,d y^{2}+ \frac{1}{3}R_{1212}\left(xdy-ydx\right)\left(xdy-ydx\right)+ O\left(\left| \sqrt{x^{2}+ y^{2}} \right|^{3} \right)\\&= \,d x^{2}+ \,d y^{2}+ \frac{1}{3}R_{1212}\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right)\\&= dx^{2}+ dy^{2}-\frac{1}{3}R_{1221}\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right)\\&=dx^{2}+ dy^{2}-\frac{1}{3}\operatorname{sec}\left(p\right)\left(xdy-ydx\right)^{2}+ o\left(x^{2}+ y^{2}\right) \end{aligned} $$ 




> [!exercise] EXERCISE 5.9.43.
> With notation as in the previous exercise show:
> 1. $\sqrt{\det(g_{kl})}=1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+O(|x|^{3})$.
> 2. (**A. Gray**) $\operatorname{vol}B(p,r)=\omega_{n}r^{n}\left(1-\frac{\operatorname{scal}(p)}{6(n+2)}r^{2}+O(r^{3})\right)$, where $\omega_{n}=\operatorname{vol}(B(0,1)\subset\mathbb{R}^{n})$. Hint: Use (1) and expand the integral using polar coordinates.

> [!proof] Proof: 
> 1. $$ g_{kl}= \delta _{kl}+ \frac{1}{3}\sum _{i,j,k,l}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right) $$     
>    $$ \det \circ \exp = \exp \circ \operatorname{tr} $$    
>    $$ \det \left(\exp \left(B\right)\right)= \exp \operatorname{tr}B $$   
>    Let $B= \ln A$, then 
>    $$ \det \left(A\right)= \exp \left(\operatorname{tr}\left(\ln A\right)\right) $$   
>    Let $A= I+ tX$   
>    $$ \begin{aligned} \sqrt{\det \left(I+ tX\right)}&= \exp \left(\frac{1 }{2 }\operatorname{tr}\left(\ln \left(I+ tX\right)\right)\right)\\&= \exp \left(\frac{1}{2}\operatorname{tr}\left(tX-\frac{1}{2}t^{2}X^{2}+ O\left(t^{3}\right)\right)\right)\\&= \exp \left(\frac{1}{2}t \operatorname{tr}\left(X\right)- \frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)+ O\left(t^{3}\right)\right)\\&= I+ \frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)+ \frac{1}{2}\left(\frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)\right)^{2}+ O\left(t^{3}\right)\\&= I+ \frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4} t^{2} \operatorname{tr}\left(X^{2}\right)+  \frac{1}{8}t^{2} \operatorname{tr}\left(X\right)^{2}+ O\left(t^{3}\right) \end{aligned} $$     
>    Set 
>    $$ \left(x^{1},\cdots ,x^{n}\right)= t\left(a^{1},\cdots ,a^{n}\right),\quad \sqrt{a_1^{2}+\cdots + a_{n}^{2}} = 1$$    
>    $$ g _{kl}= \delta _{kl}+ \frac{1}{3}t^{2}R_{ikjl}a^{i}a^{j}+ O\left(t^{3} \right) $$    
>    令
>    $$ X= \left(X_{kl}\right)= \frac{1}{3}\left(R_{ikjl}a^{i}a^{j}\right) $$
>    where $x_1^{2}+ \cdots + x_{n}^{2}= 1$    
>    $$ g =  1+  t^{2}X+ O\left(t^{3}\right) $$
>    $$ \begin{aligned} \sqrt{\det \left(g_{kl}\right)|_{tx}} &= \sqrt{\det \left(I+t^{2}\left(X+ O\left(t\right)\right)\right)}\\&= 1+ \frac{1}{2}t^{2} \operatorname{tr}\left(X+ O\left(t\right)\right)- \frac{1}{4}t^{4} \operatorname{tr}\left(X^{2}+ O\left(t\right)\right)+ \frac{1}{8}t^{4} \operatorname{tr}\left(X+ O\left(t\right)\right)^{2}+ O\left(t^{6}\right)\\&= 1+ \frac{1}{2}t ^{2}\operatorname{tr}\left(X\right)+ O\left(t^{3}\right)  \end{aligned}$$      
>    $$ \begin{aligned} \operatorname{Ric}_{ij}= R_{kij}^{k}= g^{kl}R_{kijl}= \left(\delta ^{kl}+ O\left(t^{2}\right)\right)R_{kijl}&= \delta ^{kl}R_{kijl}+ O\left(t^{2}\right)R_{kijl}\\&= \sum _{k}R_{kijk}+ O\left(t^{2}\right)R_{kijk}\\&= \sum _{k}R_{ikkj}+ O\left(t^{2}\right)R_{ikkj} \end{aligned}$$    
>    $$ \sum _{k}R_{ikkj}= \operatorname{Ric}_{ij}+ O\left(t^{2}\right) $$   
>    $$ \begin{aligned} \operatorname{tr}\left(X\right)&= \sum _{i,j} \sum _{k}\frac{1}{3}R_{ikjk}a^{i}a^{j}\\&= -\sum _{i,j}\sum _{k}\frac{1 }{3 }R_{ikkj}a^{i}a^{j}\\&= -\frac{1}{3}\sum _{i,j}\left(\operatorname{Ric}_{ij}+ O\left(t^{2}\right)\right)a^{i}a^{j}\\&=  -\frac{1}{3}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{2}\right) \end{aligned} $$         
>    $$ \begin{aligned} \sqrt{\det g} &=1+ \frac{1}{2}t^{2}\left(-\frac{1}{3}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{2}\right)\right)+ O\left(t^{3}\right)\\&= 1-\frac{1}{6}t^{2}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{3}\right)\\&= 1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+ O\left(t^{3}\right) \end{aligned}$$ 
> 
> 2. $$ \begin{aligned} \begin{aligned} B\left(p,r\right)&= \int _{B\left(0,r\right)}\sqrt{\det \left(g_{kl}\right)}\,d x\\&= \omega _{n}r^{n}-\frac{1}{6} \int _{B\left(0,r\right)} \operatorname{Ric}_{ij}x^{i}x^{j}\,d x+  \int _{B\left(0,r\right)}O\left(\left| x \right|^{3} \right)\,d x\\&= \omega _{n}r^{n}-\frac{1}{6}\int _{B\left(0,1\right)}\operatorname{Ric}_{ij}\left(ry^{i}\right)\left(ry^{j}\right)\left(r^{n}\right)\,d y+ \int _{B\left(0,1\right)}r^{3}O\left(1\right)r^{n}\,d y\\&= \omega _{n}r^{n}-r^{n}r^{2}\frac{1}{6}\int _{B\left(0,1\right)}\operatorname{Ric}_{ij}y^{i}y^{j}\,d y+ O\left(r^{3}\right)\omega _{n}r^{n}\\&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{1 }{\omega _{n} }r^{2}\operatorname{Ric}_{ij}\int _{B\left(0,1\right)}y^{j}y^{j}\,d y+ O\left(r^{3}\right)\right) \end{aligned} \end{aligned}$$ 
>    
>    $$ \begin{aligned} \int _{B\left(0,1\right)}\left(y^{i}\right)^{2}dy&= \frac{1 }{n }\int _{B\left(0,1\right)}r^{2}\,d y= \frac{1 }{n } \int _{0}^{1}\int _{\partial B\left(0,t\right)} r^{2}\,d \omega \,d t\\&= \frac{1 }{n }\int _{0}^{1}t^{2}t^{n-1}\int _{\partial B\left(0,1\right)}\,d \omega \,d t \\&= \omega _{n}\int _{0}^{1}t^{n+ 1}\,d tA\\&= \frac{\omega _{n} }{n+ 2 }\end{aligned}$$ 
>    
>    $$ \int _{B\left(0,1\right)}y^{i}y^{j}\,d y= \begin{cases} 0,&i\neq j\\ \frac{\omega _{n} }{n+ 2 },&i= j \end{cases}  $$ 
>    
>    Thus
>    
>    $$ \begin{aligned} B\left(p,r\right)&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{1 }{\omega _{n} }r^{2}\sum _{i}\operatorname{Ric}_{ii}\frac{\omega _{n} }{ n+ 2}+ O\left(r^{3}\right)\right)\\&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{\sum _{i}\operatorname{Ric}_{ii} }{n+ 2 }r^{2}+ O\left(r^{3}\right)\right) \end{aligned} $$ 
>    
>    Since at $p$, $g_{ij}= \delta _{ij}$, we have 
>    $$  \sum _{i}\operatorname{Ric}_{ii}\left(p\right)= \operatorname{Ric}_{i}^{i}\left(p\right)= \operatorname{scal}\left(p\right) $$ 
>    We have 
>    $$ B\left(p,r\right)= \omega _{n}r^{n}\left(1-\frac{1}{6}\frac{\operatorname{scal}\left(p\right) }{n+ 2 }r^{2}+ O\left(r^{3}\right)\right) $$ 

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
