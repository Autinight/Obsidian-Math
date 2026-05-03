---
type: exercise
aliases:
  - Fixed point of 2n-sphere and RP^n
technique: []
book: AT Hatcher
chapter: 2.2
number: "2"
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.2.
> Given a map $f : S^{2n} \to S^{2n}$, show that there is some point $x \in S^{2n}$ with either $f(x) = x$ or $f(x) = -x$. Deduce that every map $\mathbb{R}P^{2n} \to \mathbb{R}P^{2n}$ has a fixed point. Construct maps $\mathbb{R}P^{2n-1} \to \mathbb{R}P^{2n-1}$ without fixed points from linear transformations $\mathbb{R}^{2n} \to \mathbb{R}^{2n}$ without eigenvectors.

 
  
 
> [!proof] Proof: 
> 1. If there exists no point $x\in S^{2n}$  with $f\left(x\right)= x$, then $f$ has no fixed point, then is homotopic to the antipidol map  $A$, who has degree $\left(-1\right)^{2n+ 1}= -1$.  Now, if $f\left(x\right)\neq -x,\forall x$, then $-f$ has no fixed point, then $\operatorname{deg}\left(-f\right)= -1\implies \operatorname{deg}f= 1$, which is a contradiction.
> 2. $\mathbb{R} P^{2n}= S^{2n}/\left\{ x,-x \right\}$, every map $\varphi :\mathbb{R} P^{2n}\to \mathbb{R} P^{2n}$ , denote $\pi : S^{2n}\to \mathbb{R}P^{2n}$ is the quotient map, then 
>    $$ \widetilde{\varphi}: \varphi \circ \pi : S^{2n}\to \mathbb{R}P^{2n} $$
>    is the continuous map,  how to find continuous map such that $\pi \circ f= \widetilde{\varphi}$? 
>   Since $\mathbb{Z} _{2}$ maps freely and properly on $S^{n}$, we know $S^{n}$ is a covering of $\mathbb{R}P^{2n}$, then there exists a lift for $\widetilde{\varphi}$, say $f$, such that $\pi \circ f= \widetilde{\varphi}$. Since $\widetilde{\varphi}$ has some point $x\in S^{2n}$ with either $f\left(x\right)= x$ or $f\left(x\right)= -x$, then $\widetilde{\varphi}\left(x\right)= \pi \circ f\left(x\right)= [x]$, $\varphi \left([x]\right)= \widetilde{\varphi}\left(x\right)= \left[ x \right]$, $\left[ x \right]$ is a fiex point of $\varphi$.
> 3. $$ \mathbb{R} ^{2n}/\left\{ kx \sim x\right\}= \mathbb{R}P^{2n-1} $$
>    
>    For a linear map $\psi :\mathbb{R} ^{2n}\to \mathbb{R} ^{2n}$, without eigenvectors, we have for each $x$, $\psi \left(x\right)\neq kx, \forall k$. $\psi$ induces a map
>    $$ \widetilde{\psi}: \mathbb{R} P^{2n-1}\to \mathbb{R} ^{2n}$$
>    with $\widetilde{\psi}\left(\left[ x \right]\right)= \psi \left(x\right)$,  let $F= \pi \circ \widetilde{\psi}$, then $F$ is continuous , with $F\left(\left[ x \right]\right)= [\psi \left(x\right)]$. since $\psi \left(x\right)\neq kx$, we have   $\left[ x \right]\neq \left[ \psi \left(x\right) \right]$, thus $[x]$ is not a fixed point for $F$. $F$ has no fixed point. 
>    To consturc such linear map $\psi$, we set
>    $$ J= \begin{pmatrix} 0&-1\\1&0 \end{pmatrix} $$  
>    Then $J$ has eigenvalue $i,-i$, $J$ has no eigenvector in $\mathbb{R} ^{n}$. We define 
>    $$ \psi = \operatorname{diag} \left( J,\cdots ,J \right)   $$

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
