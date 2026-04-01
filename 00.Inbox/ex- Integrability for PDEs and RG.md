---
type: exercise
aliases:
  - Integrability for PDEs and RG
technique: []
book: RG Petersen
chapter: 3
number: "20"
category:
status: todo
priority:
tags: []
---

If the integrability conditions hold, then 

how to show that it holds, 
not depend on $u$, 
how to find that 
consider a solution to generate all , 

Once we have a 

 $$ \frac{\partial v^{i}}{\partial x^{k}}= P_{k}^{i}\left(x,u\left(x\right)\right) $$ 
 $$ v\left(0\right)= 0 $$ 
 
Define 
 $$ X_{k}= \frac{\partial }{\partial x^{k}}+ \frac{\partial }{\partial u^{j}}P_{k}^{j} $$


Consider a $M\times \mathbb{R} ^{m}$, $\left(x^{1},\cdots ,x^{n},u^{1},\cdots ,u^{m}\right)$  is a chart for $M\times \mathbb{R} ^{m}$, define
 $$ X_{k}= \frac{\partial }{\partial x^{k}}+ P_{k}^{j}\frac{\partial }{\partial u^{j}} $$
 $$ \begin{aligned} [X_{k},X_{l}]&= \left(X_{k}\left(P_{l}^{i}\right)- X_{l}\left(P_{k}^{i}\right)\right)\frac{\partial }{\partial u^{i}}\\&= \left(\frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}-\frac{\partial P_{k}^{i}}{\partial x^{k}}-\frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j}\right)\partial   u^{j} \\&= 0\end{aligned} $$

Let $\mathcal{D}= \operatorname{span}\left\{ X_1,\cdots ,X_{k} \right\}$, then $\mathcal{D}$ is a involutive distribution. From Frobenius Theorem, $\mathcal{D}$ is completely integrable.


> [!exercise] Exercise 3.4.20 (**Integrability for PDEs**):
> For given functions $P_k^i(x,u)$, where $x=(x^1,\ldots,x^n)$, $u=(u^1,\ldots,u^m)$, $i=1,\ldots,m$, and $k=1,\ldots,n$, consider the initial value problems for a system of first-order PDEs
> $$\begin{aligned}
> \frac{\partial u^i}{\partial x^k}&=P_k^i(x,u(x)),\\
> u(x_0)&=u_0.
> \end{aligned}$$
> 1. Show that
>    $$\frac{\partial^2u^i}{\partial x^k\partial x^l}=\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j,$$
>    and conclude that all such initial value problems can only be solved when the **integrability conditions**
>    $$\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j=\frac{\partial P_k^i}{\partial x^l}+\frac{\partial P_k^i}{\partial u^j}P_l^j$$
>    hold.
> 
> 2. Conversely show that all such initial value problems can be solved if the integrability conditions hold. Hint: This is equivalent to the Frobenius integrability theorem but can be established directly (see also [97, vol. 1]). When $P$ does not depend on $u$, this result goes back to Clairaut. The general case appears to have been a folklore result that predates what we call the Frobenius theorem about integrability of distributions.
> 
> 3. Using coordinates $x^i$ on a Riemannian $n$-manifold form the system
>    $$\frac{\partial U_j^i}{\partial x^k}=\Gamma_{kj}^sU_s^i,\quad i,j=1,\ldots,n$$
>    and show that its integrability conditions are equivalent to $R^s_{klj}=0$.
> 
> 4. Show that a flat Riemannian manifold admits Cartesian coordinates. Hint: Denote the potential Cartesian coordinates by $u^i$ and consider the system:
>     $$\frac{\partial u^i}{\partial x^k}=U_k^i$$
>    with appropriate initial values. Make sure you check that $u^i$ really form a Cartesian coordinate system. This way of locally characterizing Euclidean space is very close in spirit to Riemann's original approach. Hint: Consider the derivative of
>    $$g^{kl}\frac{\partial u^i}{\partial x^k}\frac{\partial u^j}{\partial x^l},$$
>    where $g_{kl}$ denotes the metric with respect to $x$ and use 2.5.8.

> [!proof] Proof: 
> If $u^{i}$ solves the PDE, then
>  $$ \begin{aligned} \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}&= \frac{\partial }{\partial x^{k}}\left(P_{l}^{i}\left(x,u\left(x\right)\right)\right)\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}\frac{\partial u^{j}}{\partial x^{k}}\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j} \end{aligned} $$ 
> From
>  $$ \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}= \frac{\partial ^{2}u^{i}}{\partial x^{l}\partial x^{k}} $$ 
> we have 
>  $$ \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}= \frac{\partial P_{k}^{i}}{\partial x^{l}}+ \frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j} $$ 


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
