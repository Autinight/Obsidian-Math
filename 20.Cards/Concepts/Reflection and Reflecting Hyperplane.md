---
type: concept
aliases:
  - Reflection
  - Reflecting Hyperplane
---
## Definition

> [!definition] Definition: 
> Let $E$ be a finite-dimensional real vector space endowed with an inner product written $(-,-)$. Given a non-zero vector $v \in E$, 
> * define the **reflecting hyperplain** as 
> $$ P_{v}= \left\{\beta \in E: \left(\beta ,\alpha \right)= 0  \right\} $$ 
> * Let $s_v$ be the **reflection** in the hyperplane normal to $v$. Thus $s_v$ sends $v$ to $-v$ and fixes all elements $y$ such that $(y,v)=0$. One may check that
> $$s_v(x)=x-\frac{2(x,v)}{(v,v)}v : =x-\left< x,v \right>v\quad \text{for all } x \in E$$
> Where $\left< x,v \right> =\frac{2\left(x,v\right) }{\left(v,v\right) }$.


### Properties

> [!proposition] Proposition: 
> * $s_{v}$ preserves the inner product, that is
>  $$ \left(s_{v}\left(x\right),s_{v}\left(y\right)\right) =\left(x,y\right),\quad \text{for all }x,y\in E $$ 
> * Furthermore, $s_{v}$ preserves the $\left< \cdot ,\cdot  \right>$, that is 
>  $$ \left< s_{v}\left(x\right),s_{v}\left(y\right) \right>= \left< x,y \right>,\quad \text{for all }x,y\in E $$ 
> * $\left< x,v \right>$ is linear with respect to the first variable, $x$.


