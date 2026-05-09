---
type: exercise
aliases:
  - 1-cohomology
technique: []
book: AT Hatcher
chapter: 3.1
number: "05"
category:
status: done 
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.5.
> Regarding a cochain $\phi \in C^1(X; G)$ as a function from paths in $X$ to $G$, show that if $\phi$ is a cocycle, then (a) $\phi(f \cdot g) = \phi(f) + \phi(g)$, (b) $\phi$ takes the value $0$ on constant paths, (c) $\phi(f) = \phi(g)$ if $f \simeq g$, (d) $\phi$ is a coboundary iff $\phi(f)$ depends only on the endpoints of $f$, for all $f$.
> 
> [In particular, (a) and (c) give a map $H^1(X; G) \to \operatorname{Hom}(\pi_1(X), G)$, which the universal coefficient theorem says is an isomorphism if $X$ is path-connected.]



If $\varphi$ is a cocycle, then 
$$ \delta \varphi = 0\implies \varphi \circ \partial = 0 $$ 
$$ C^{1}\left(X;G\right)= \operatorname{Hom}\left(C_{1}\left(X\right);G\right) $$ 
For path $f,g$, then $f\cdot g$ is a path. 

If $f\cdot g$ can be 拼接, then $g\left(1\right)= f\left(0\right)$, we consider a $2$-singular simplex $\sigma : \Delta \to X$, such that 
$$ \sigma |_{\left[ v_0,v_1 \right]}= f,\quad \sigma |_{\left[ v_1,v_2 \right]}= g,\quad \sigma |_{[v_0,v_2]}= f\cdot g $$ 
Then  $\sigma$ is actually continuous. Then 
$$ \partial \sigma = \sigma |_{\left[ v_0,v_1 \right]}+ \sigma |_{\left[ v_1,v_2 \right]} -\sigma |_{\left[ v_0,v_2 \right]}= f+ g-fg $$ 
Thus 
$$ \delta \varphi \left(\sigma \right)= \varphi \left(\partial \sigma \right)= \varphi \left(f+ g-fg\right)= 0\implies \varphi \left(fg\right)= \varphi \left(f\right)+ \varphi \left(g\right) $$ 

For a constant path $\sigma_1$, note that $\sigma_1 \cdot \sigma_1 = \sigma_1$, we have 
$$ \varphi \left(\sigma _1 \right)= \varphi \left(\sigma _1 \right)+ \varphi \left(\sigma _1 \right)\implies \varphi \left(\sigma _1 \right)= 0 $$ 
If $f\simeq g$, set $H: I\times I$, then 
$$ \partial H= f+ f_{t}\left(1\right)-g-f_{t}\left(0\right)= f+  f\left(1\right)-g-f\left(0\right)= f-g+ \partial f $$ 
Thus
$$ f-g = \partial H-\partial f\implies \varphi \left(f-g\right)= 0\implies \varphi \left(f\right)= \varphi \left(g\right) $$ 
 
If $\varphi$ is coboundary , then there exists $\psi \in C^{2}\left(X;G\right)$ , such that $\varphi = \delta \psi$, $\varphi = \psi \circ \partial$.  If $f,g\in C_1\left(X\right)$, $f\left(0\right)= g\left(0\right)$, $f\left(1\right)= g\left(1\right)$. Then $f\cdot  \bar{g}$ is a loop , $\partial \left(f \cdot  \bar{g}\right)= 0$. We have 
$$ \varphi \left(f  \cdot  \bar{g}\right)= \psi \left(\partial \left(f\cdot  \bar{g}\right)\right)= \psi \left(0\right)= 0 $$ 
Thus 

$$ \varphi \left(f\right)+ \varphi \left(\bar{g}\right)= 0 $$ 

Since $g \cdot  \bar{g}\simeq 0$, we have 
$$ \varphi \left(g\right)+ \varphi \left(\bar{g}\right)= 0 $$ 
Thus
$$ \varphi \left(f\right)= \varphi \left(g\right) $$ 