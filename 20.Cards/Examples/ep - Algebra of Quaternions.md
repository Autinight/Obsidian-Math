---
type: example
aliases: [Algebra of Quaternions]
---

## Basic Definitions

> [!definition] Definition: Quaternion
> Let $\mathbb{H} = \mathbb{C} \times \mathbb{C}$ (considered as a real vector space), and define a bilinear product $\mathbb{H}\times\mathbb{H}\to\mathbb{H}$ by
> 
> $$\begin{aligned} (a,b)(c,d) = (ac - d\bar{b}, \bar{a}d + cb), \quad \text{for } a, b, c, d \in \mathbb{C}. \end{aligned}$$
> 
> With this product, $\mathbb{H}$ is a 4-dimensional algebra over $\mathbb{R}$, called the algebra of **quaternions**. 


> [!definition] Definition: 
> For each $p = (a, b) \in \mathbb{H}$, define $p^* = (\bar{a}, -b)$. It is useful to work with the basis $(\mathbb{1}, \mathbb{i}, \mathbb{j}, \mathbb{k})$ for $\mathbb{H}$ defined by
> 
> $$\begin{aligned} \mathbb{1} = (1, 0), \quad \mathbb{i} = (i, 0), \quad \mathbb{j} = (0, 1), \quad \mathbb{k} = (0, -i). \end{aligned}$$
> 
> It is straightforward to verify that this basis satisfies
> 
> $$\begin{aligned} &\mathbb{i}^2 = \mathbb{j}^2 = \mathbb{k}^2 = -\mathbb{1}, \qquad \mathbb{1}q = q\mathbb{1} = q \quad \text{for all } q \in \mathbb{H}, \\ &\mathbb{i}\mathbb{j} = -\mathbb{j}\mathbb{i} = \mathbb{k}, \qquad \mathbb{j}\mathbb{k} = -\mathbb{k}\mathbb{j} = \mathbb{i}, \qquad \mathbb{k}\mathbb{i} = -\mathbb{i}\mathbb{k} = \mathbb{j}, \\ &\mathbb{1}^* = \mathbb{1}, \qquad \mathbb{i}^* = -\mathbb{i}, \qquad \mathbb{j}^* = -\mathbb{j}, \qquad \mathbb{k}^* = -\mathbb{k}. \end{aligned}$$
> And 
>  $$ \left(a+ bi+ cj+ dk\right)^{*}= a-bi-cj-dk $$ 

> [!definition] Definition: 
> A quaternion $p$ is said to be **real** if $p^* = p$, and **imaginary** if $p^* = -p$. Real quaternions can be identified with real numbers via the correspondence $x \leftrightarrow x\mathbb{1}$.

## Properties

> [!exercise] Exercise
> 1. Show that quaternionic multiplication is associative but not commutative.
> 2. Show that $(pq)^* = q^* p^*$ for all $p,q \in \mathbb{H}$.
> 3.  Show that $\langle p,q \rangle = \frac{1}{2}(p^*q + q^*p)$ is an inner product on $\mathbb{H}$, whose associated norm satisfies $|pq| = |p| \, |q|$.
> 4.  Show that every nonzero quaternion has a two-sided multiplicative inverse given by $p^{-1} = |p|^{-2} p^*$.
> 5. Show that the set $\mathbb{H}^*$ of nonzero quaternions is a Lie group under quaternionic multiplication.

> [!proof] Proof: 
> 1. ...
> 
> 2. 
> 3. 
> 
>    
> 4. Note that 
>      $$ \begin{aligned} p^{*}p&= \left(\overline{p_1},-p_2\right)\left(p_1,p_2\right)\\&= \left(\overline{p_1}p_2+ \overline{p_2}p_1, p_1 p_2-p_2p_1\right)  \\&= 2\operatorname{Re}\left(\overline{p_1}p_2\right)\cdot 1\end{aligned} $$
>      $$ \left| p \right|^{2}= \left< p,p \right>= \frac{1}{2}\left(p^{*}p+ p^{*}p\right)= p^{*}p  $$ 
>      Then it is easily seen that  
>      $$ p^{-1} = \left| p \right|^{-2}p ^{*} $$ 
> 5. Define $m: \mathbb{H}^{*}\times \mathbb{H}^{*}\to \mathbb{H}^{*}$, $m\left(p,q\right)= pq$. Then every  components of $m\left(p,q\right)$ is a polinomial of $\operatorname{Re}\left(p\right)$, $\operatorname{Im}\left(p\right)$, $\operatorname{Re}\left(q\right)$, $\operatorname{Im}\left(q\right)$, thus is smooth. In 4.we see nonzero element of $\mathbb{H}^{*}$ has an inverse. And the inverse map is the composition of some smooth maps, thus is smooth. 

## The $\mathbb{S}^{3}$

> [!exercise] Exercise: 
> Let $\mathbb{H}^*$ be the Lie group of nonzero quaternions, and let $\mathbb{S}^{3}\subseteq\mathbb{H}^*$ be the set of unit quaternions. Show that $\mathbb{S}^{3}$ is a properly embedded Lie subgroup of $\mathbb{H}^*$, isomorphic to $\operatorname{SU}(2)$.

> [!proof] Proof: 
> **Subgroup Structure**: 
> $1\in \mathbb{S}^{3}$, $\left| pq \right|= \left| p \right|\left| q \right|= 1$ for each $p,q\in \mathbb{S}^{3}$, and $p^{-1} = p^{*}/\left| p \right|^{2}=p^{*}$, while $\left< p^{*},p^{*} \right>= \left< p,p \right>$, $\left|p^{*} \right|= \left| p \right|= 1$.  Thus $\left| p^{-1}  \right|= 1$, $p^{-1} \in \mathbb{S}^{3}$. The above shows that $\mathbb{S}^{3}$ is a subgroup of $\mathbb{H}^{*}$.
> 
> **Embedded Lie Subgroup**: Define $f:\mathbb{H}^{*}\to \mathbb{R}$, $f\left(p\right)=\left| p \right|^{2}$, then $\mathbb{S}^{3}$ is the level set $f^{-1} \left(1\right)$. With the standord coordinate $p= x_0+ x_1\cdot i+ x_2\cdot + x_3\cdot k= \left(x_0,x_1,x_2,x_3\right)$, $f\left(p\right)=p^{*}p= \sum _{i= 0}^{3}x_{i}^{2}$
>  Then 
>  $$ df_{p}= \sum _{i= 0}^{3}2x_{i}dx_{i} $$
> Then $df$ is nonzero on each $p\in \mathbb{S}^{3}$. We have from the regula level sets theorem that $\mathbb{S}^{3}$ is the embedded submanifold of $\mathbb{H}^{*}$.