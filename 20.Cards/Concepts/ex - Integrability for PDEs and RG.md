---
type: exercise
aliases:
  - Integrability for PDEs and RG
technique: []
book: RG Petersen
chapter: 3
number: "20"
category:
status: done
priority:
tags: []
---

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
> 1. If $u^{i}$ solves the PDE, then
>     $$ \begin{aligned} \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}&= \frac{\partial }{\partial x^{k}}\left(P_{l}^{i}\left(x,u\left(x\right)\right)\right)\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}\frac{\partial u^{j}}{\partial x^{k}}\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j} \end{aligned} $$ 
>    From
>     $$ \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}= \frac{\partial ^{2}u^{i}}{\partial x^{l}\partial x^{k}} $$ 
>    we have 
>     $$ \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}= \frac{\partial P_{k}^{i}}{\partial x^{l}}+ \frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j} $$ 
> 2. 
>      Define 
>       $$ X_{k}= \frac{\partial }{\partial x^{k}}+ \frac{\partial }{\partial u^{j}}P_{k}^{j} $$
>       Consider a $M\times \mathbb{R} ^{m}$, $\left(x^{1},\cdots ,x^{n},u^{1},\cdots ,u^{m}\right)$  is a chart for $M\times \mathbb{R} ^{m}$, define
>       $$ X_{k}= \frac{\partial }{\partial x^{k}}+ P_{k}^{j}\frac{\partial }{\partial u^{j}} $$
>       $$ \begin{aligned} [X_{k},X_{l}]&= \left(X_{k}\left(P_{l}^{i}\right)- X_{l}\left(P_{k}^{i}\right)\right)\frac{\partial }{\partial u^{i}}\\&= \left(\frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}-\frac{\partial P_{k}^{i}}{\partial x^{k}}-\frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j}\right)\partial   u^{j} \\&= 0\end{aligned} $$
>      
>      Let $\mathcal{D}= \operatorname{span}\left\{ X_1,\cdots ,X_{n} \right\}$, then $\mathcal{D}$ is a involutive distribution. From Frobenius Theorem, $\mathcal{D}$ is completely integrable. For $p= \left(x_0,u_0\right)$, there exists a submanifold $\Sigma\subseteq M\times \mathbb{R}^{m}$ containing $p$, such that 
>     $$ T_{q}\Sigma = \mathcal{D}_{q},\quad \forall q\in \Sigma  $$ 
>    Let $\pi :X\times \mathbb{R} ^{m}\to X$, $\pi \left(x,u\right)= x$, then
>     $$ d\pi |_{T_{p}\Sigma } \left(X_{k}\right)= \frac{\partial }{\partial x^{k}}$$
>    We have $\,d \pi |_{T_{p}\Sigma }$ is a linear isomorphism. From inverse function theorem, there exists $F:V\to U$, $V\subseteq \Sigma$, $U\subseteq X\times \mathbb{R} ^{m}$ are open sets , such that 
>     $$ \pi \circ F= \operatorname{Id}_{V},\quad F\circ \pi = \operatorname{Id}_{U} $$
>    Then  we have 
>     $$ F\left(x^{1},\cdots ,x^{n}\right)= \left(x^{1},\cdots ,x^{n},f^{1},\cdots ,f^{m}\right) $$ 
>    is a diffeomorphism. 
>    Define 
>     $$ Y_{k}= D F\left(\frac{\partial }{\partial x_{k}}\right) = \frac{\partial }{\partial x_{k}}+ \frac{\partial f^{j}}{\partial x_{k}}\frac{\partial }{\partial u^{j}}$$ 
>    Then 
>     $$ T_{q}\Sigma = \operatorname{span}\left\{ Y_1,\cdots ,Y_{n} \right\}= \operatorname{span}\left\{ X_1,\cdots ,X_{n} \right\} $$ 
>    If
>     $$ Y_{k}= g^{i}X_{i}\implies \frac{\partial }{\partial x^{k}}+ \frac{\partial f^{j}}{\partial x^{k}}\frac{\partial}{\partial u^{j}}= g^{i}\left(\frac{\partial }{\partial x^{i}}+ P^{k}_{i}\frac{\partial }{\partial u^{k}}\right)\implies g^{k}= 1,g^{i}= 0(i\neq k)$$ 
>    Thus $Y_{k}= X_{k}$, $\frac{\partial f^{j}}{\partial x^{k}}= P_{k}^{j}$. Then $\left(f^{1},\cdots ,f^{m}\right)$ is the solution for the PDEs.
>    
> 3. 
>     $$ \frac{\partial ^{2}U_{j}^{i}}{\partial x^{k}x^{l}}= \left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{k}} $$ 
>     $$ \begin{aligned} \left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{k}}&= \left(\frac{\partial }{\partial x^{l}}\Gamma _{kj}^{s}\right)U_{s}^{i}+ \Gamma _{kj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{l}} \end{aligned}$$
>     $$\left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\Gamma _{ks}^{m}U_{m}^{i} = \left(\frac{\partial }{\partial x^{l}}\Gamma_{kj}^{s} \right)U_{s}^{i}+ \Gamma _{kj}^{s}\Gamma _{ls}^{m}U_{m}^{i}$$
>     exchange $s$ and $m$ of the second term bothsides, we have 
>      $$\left(\frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}\right)U_{s}^{i}+ \Gamma _{lj}^{m}\Gamma _{km}^{s}U_{s}^{i}= \left(\frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}\right)U_{s}^{i}+ \Gamma _{kj}^{m}\Gamma _{lm}^{s}U_{s}^{i} $$
>     Then
>     $$ \frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}+ \Gamma _{lj}^{m}\Gamma _{km}^{s}= \frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}+ \Gamma _{kj}^{m}\Gamma _{lm}^{s} \tag{*}$$    
>     From which we know that the integrability condition holds iff $(*)$ holds, which is equivalent to the following.
>    $$ \begin{aligned} R_{klj}^{s}&= R\left(\partial _{k},\partial _{l},\partial _{j}\right)\\&=\nabla _{\partial _{k}}\nabla _{\partial _{l}}\partial _{j}-\nabla _{\partial _{l}}\nabla _{\partial _{k}}\partial _{j}\\&= \nabla _{\partial _{k}}\left(\Gamma _{lj}^{t}\partial _{t}\right)-\nabla _{\partial _{l}}\left(\Gamma _{kj}^{t}\partial _{t}\right)\\&= \frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}\partial _{s}+ \Gamma _{lj}^{t}\Gamma _{kt}^{s}\partial _{s}- \frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}\partial _{s}-\Gamma _{kj}^{t}\Gamma _{lt}^{s}\partial _{s} \\&= \left(\frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}-\frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}+ \Gamma _{km}^{s}\Gamma ^{m}_{lj}-\Gamma _{lm}^{s}\Gamma _{kj}^{m}\right)= 0\end{aligned} $$ 
> 4.    
>    If the Riemannian manifold is flat , then the initial value problem
>     $$ \frac{\partial U_{j}^{i}}{\partial x^{k}}= \Gamma _{kj}^{s}U_{s}^{i},\quad i,j=  1,\cdots,n  $$
>      $$ U\left(x_0\right)= U_0 $$
>      can be solved.  
>    
>    
>    To solve the initial value problem 
>     $$ \frac{\partial u^{i}}{\partial x^{k}}= U_{k}^{i} $$
>      $$ u^{i}\left(x_0\right)= u_0 $$  
>    We only need to check the integrability conditions:
>     $$ \frac{\partial U_{l}^{i}}{\partial x^{k}}+ \frac{\partial U_{l}^{i}}{\partial u^{j}}U_{k}^{j}= \frac{\partial U_{k}^{i}}{\partial x^{l}}+ \frac{\partial U_{k}^{i}}{\partial u^{j}}U_{l}^{j} $$ 
>    By using $\frac{\partial U_{j}^{i}}{\partial x^{k}}= \Gamma _{kj}^{s}U_{s}^{i}$, $\frac{\partial U_{j}^{i}}{\partial u^{s}}= 0$,  the conditions can be written as 
>     $$ \Gamma _{kl}^{s}U_{s}^{i}= \Gamma _{lk}^{s}U_{s}^{i}$$ 
>    which is obviously true since $\nabla$ is torsion-free.
>    
>    In order to show that $u$ is actually a cartesian coordinates, we fisrt choose $U_0$ such that 
>     $$ g_{kl}= \left(U_0\right) _{k}^{i}\left(U_0\right)_{l}^{j}\delta _{ij}$$ 
>    Then at $x_0$, 
>     $$ g_{kl}= \frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\delta _{ij}$$  
>    We have at $x_0$
>     $$ \tilde{g}_{ij}= g_{x_0}\left(\frac{\partial }{\partial u^{i}},\frac{\partial }{\partial u^{j}}\right)= g_{kl}\frac{\partial x^{k}}{\partial u^{i}}\frac{\partial x^{l}}{\partial u^{j}}= \delta _{ij}$$ 
>    To show $\tilde{g}_{ij}= \delta _{ij}$ globally, we only need to show that for each $s$, there is 
>     $$ \partial _{s}\tilde{g}_{ij}= 0 $$ 
>    or equivalently, 
>     $$ \partial _{s}\tilde{g}^{ij}= \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right)= 0 $$
>    In fact
>     $$ \begin{aligned} \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right) &= \left(\partial _{s}g^{kl}\right)U^{i}_{k}U^{j}_{l}+ g^{kl}\frac{\partial U_{k}^{i}}{\partial x^{s}}U_{l}^{i}+ g^{kl}\frac{\partial U_{l}^{j}}{\partial x^{s}}U_{k}^{i}\\&=  \left(\partial _{s}g^{kl}\right)U_{k}^{i}U_{l}^{j}+ g^{kl}\Gamma _{sk}^{m}U_{m}^{i}U_{l}^{i}+ g^{kl}\Gamma _{sl}^{m}U_{m}^{j}U_{k}^{i} \end{aligned}$$
>    By using
>     $$ \left(\partial _{s}g^{kl}\right)= -g^{km}\Gamma _{sm}^{l}-g^{lm}\Gamma _{sm}^{k} $$
>    we get 
>     $$ \begin{aligned} \left(\partial _{s}g^{kl}\right)U_{l}^{j}U_{k}^{i}&= -g^{km}\Gamma _{sm}^{l}U_{k}^{i}U_{l}^{j}-g^{lm}\Gamma _{sm}^{k}U_{k}^{i}U_{l}^{j}\\&= -g^{kl}\Gamma _{sl}^{m}U_{k}^{i}U_{m}^{j}-g^{kl}\Gamma _{sk}^{m}U_{m}^{i}U_{l}^{j} \end{aligned}$$    
>     Then 
>      $$ \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right)= 0 $$ 
>    Thus $\tilde{g}^{ij}$ is constant for each $i,j$. We get $\tilde{g}^{ij}= \delta ^{ij}$ since $\tilde{g}^{ij}_{x_0}= \delta ^{ij}$, that is $u^{i}$ forms a Cartesian coordinates.



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
