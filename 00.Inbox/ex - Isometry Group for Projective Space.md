---
type: exercise
aliases:
  - Isometry Group for Projective Space
technique: []
book: RG Petersen
chapter: 5
number: "40"
category:
status: todo
priority:
tags: []
---

For $E,F\in \operatorname{PGL}\left(n+ 1,\mathbb{F}\right)$, with $F\left(p\right)= E\left(p\right)= q$, $DF|_{p}= DE|_{p}$, we need to show $E= F$.
$DF|_{p}: T_{p}\left(\mathbb{FP}^{n}\right)\to T_{q}\left(\mathbb{FP}^{n}\right)$

$\pi :\mathbb{F}^{n}\to \mathbb{P}^{n}$


$$ d \pi : T_{p}\mathbb{F}^{n}\to T_{p}\mathbb{FP}^{n} $$ 
is a submersion





> [!exercise] EXERCISE 5.9.40.
> Consider the real or complex projective space $\mathbb{FP}^{n}$.
> 1. Show that $\operatorname{GL}(n+1,\mathbb{F})$ acts on $\mathbb{FP}^{n}$ by mapping 1-dimensional subspaces in $\mathbb{F}^{n+1}$ to 1-dimensional subspaces.
> 2. Let $H\subset\operatorname{GL}(n+1,\mathbb{F})$ be the transformations that act trivially. Show that $H=\{\lambda I_{n+1}\mid\lambda\in\mathbb{F}\}$ and is a normal subgroup of $\operatorname{GL}(n+1,\mathbb{F})$.
> 3.  Define $\operatorname{PGL}(n+1,\mathbb{F})=\operatorname{GL}(n+1,\mathbb{F})/H$. Show that given $p\in\mathbb{FP}^{n}$ each element $F\in\operatorname{PGL}(n+1,\mathbb{F})$ is uniquely determined by $F(p)$ and $DF|_{p}$.
> 4. Show that there is no Riemannian metric on $\mathbb{FP}^{n}$ such that this action is by isometries.
> 5. Show that the action is by affine transformations with respect to the standard (submersion) metric on $\mathbb{FP}^{n}$ (see exercise 5.9.39 for the definition of affine transformations).
> 6. For a subgroup $G\subset\operatorname{GL}$, define $PG=G/H\cap G$. Show that the isometry group of $\mathbb{RP}^{n}$ is given by $\operatorname{PO}(n+1)$.
> 7. Show that the isometry group of $\mathbb{CP}^{n}$ is given by $\operatorname{PU}(n+1)$.
> 8. Show that the isometry group of $H^{n}(R)$ can be naturally identified with $\operatorname{PO}(n,1)$.
> 9. As in exercise 1.6.9 consider $\operatorname{Iso}(\mathbb{R}^{n})$ as the matrix group
> $$G=\left\{\begin{bmatrix}O&v\\0&1\end{bmatrix}\mid O\in\operatorname{O}(n),~v\in\mathbb{R}^{n}\right\}\subset\operatorname{GL}(n+1,\mathbb{R}).$$
> Show that $PG=G$.

> [!proof] Proof: 
> 10. Let $L\subseteq \mathbb{F}^{n}$ be a 1-dimensional $\mathbb{F}$- linear subspace. Let $P\left(L\right)= L/\left\{ v\sim kv, k\in \mathbb{F} \right\}$ be the projective space of $L$. 
>    
>    We need to show that $\operatorname{GL} \left(n+ 1,\mathbb{F}\right)$ mapsto $P\left(L\right)$ to another.
>    
>    How $\operatorname{GL} \left(n+ 1,\mathbb{F}\right)$ acts on $\mathbb{FP}^{n}$? 
>    
>    First, $\operatorname{GL} \left(n+ 1,\mathbb{F}\right)$ acts on $\mathbb{F}^{n+ 1}$, by 
>    $$ \begin{aligned} \varphi :\operatorname{GL} \left(n+ 1,\mathbb{F}\right) \times \mathbb{F}^{n+ 1}&\to \mathbb{F}^{n+ 1}\\\left(A, \mathbf{x}\right)\mapsto A \mathbf{x}\end{aligned}$$ 
>    
>    We define
>    
>    $$ \begin{aligned} \widetilde{\varphi}: \operatorname{GL} \left(n+ 1,\mathbb{F}\right) \times \mathbb{FP}^{n}&\to \mathbb{FP}^{n} \\\left(A, [\mathbf{x}]\right)= [A \mathbf{x}] \end{aligned}$$ 
>    
>    Since $[A\left(k \mathbf{x}\right)]= [kA \mathbf{x}]= [Ax]$, we know $\widetilde{\varphi}$ is well-defined.
>    
>    
>    $$ \varphi \circ \left(\operatorname{Id}_{\operatorname{GL} }, i\right): \operatorname{GL} \left(n+ 1,\mathbb{F}\right)\times L\to \mathbb{F}^{n+ 1} \\\left(A,v\right)\mapsto Av$$ 
>    
>    Since for each $A\in \operatorname{GL} \left(n+ 1,\mathbb{F}\right)$, $\operatorname{span}\left\{ Av \right\}$ is a 1-dim $\mathbb{F}$-linear subspace for $\mathbb{F}^{n+ 1}$. Since $\pi \circ \varphi \left(A\right)= \widetilde{\varphi}\left(A\right)\circ \pi: \mathbb{F}^{n}\to \mathbb{FP}^{n}$ , we have $P\left(AL\right)= \widetilde{\varphi}\left(A\right)\left(L\right)$, that is $\widetilde{\varphi}\left(A\right)$ acts by mapping 1-dimensional subsapce $L$ to 1-dimensional subspaces $P\left(AL\right)$.
> 11. $$ \begin{aligned} \widetilde{\varphi}\left(A\right)\left([\mathbf{x}]\right)= [\mathbf{x}]\iff [\varphi \left(A\right)\left(\mathbf{x}\right)]= [\mathbf{x}]&\iff \exists k\in \mathbb{F},  \varphi \left(A\right)\left(\mathbf{x}\right)= \mathbf{kx}\\&\iff \left(A-k \mathbf{I}\right)\mathbf{x}= 0\\&\iff A= k \mathbf{I}  \end{aligned}$$
>    
>    Thus
>    $$ H= \left\{ \lambda I_{n+ 1}: \lambda \in \mathbb{F} \right\} $$ 
>    
>    Since for each $A\in \operatorname{GL} \left(n+ 1,\mathbb{F}\right)$, $A\left(\lambda I\right)A^{-1} = \lambda I\in N$, $H$ is a normal subgroup.





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
