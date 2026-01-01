---
type: example
aliases: [Binomial Distribution]
---

## Definition

> [!theorem] Theorem: 
> We say random variable $X$ follows a Binomialdistribution with parameters $n\in \mathbb{N} ^{+ }$ and $p\in \left[ 0,1 \right]$, denoted as $X\sim B\left(n,p\right)$, if for $k= \left\{ 0,1,\cdots ,n \right\}$,
>  $$ P\left(X= k\right)= \binom{ n }{ k }p^{k}q^{n-k}  $$
> where $q= 1-p$.

## Characteristic Functino and Moment Generating Function

> [!proposition] Proposition: 
> * **Moment Generating Function (MGF)**:
>  $$ M_{X}\left(t\right)= E\left[ e^{tX} \right]= \sum _{k= 0}^{n}e^{tk}\binom{ n }{  k} p^{k}q^{n-k}= \left(pe^{t}+ q\right)^{n}  $$
> * **Characteristic Function**:
>  $$ \varphi _{X}\left(t\right)= E\left[ e^{itX} \right]= \left(pe^{it}+ q\right)^{n} $$  
> * **Cumulant Generating Function**:
>  $$ K_{X}\left(t\right)= \ln M_{X\left(t\right)}= n\ln \left(pe^{t}+ q\right) $$ 


## Moments

> [!proposition] Proposition: 
> * **Expectatoin**:
>  $$ \mu = E\left[ X \right]= K_{X}^{\prime} \left(0\right)= np$$
> * **Variance**:
>  $$ \sigma ^{2}= \operatorname{Var}\left(X\right)= K_{X}^{\prime \prime} \left(0\right)= npq $$
> * **Skewness**: 
>  $$ \gamma _1 = \frac{E\left[ \left(X-\mu \right)^{3} \right] }{\sigma ^{3} }= \frac{K_{X}^{\prime \prime\prime}  \left(0\right)}{\left(K_{X}^{\prime \prime} \left(0\right)\right)^{\frac{3}{2}} }= \frac{q-p }{\sqrt{npq} } $$   

## Limit Behavor

### De Moivre-Laplace Theorem

> [!theorem] Theorem: 
> When $n\to \infty$ and $p$ is fixed, the normalized $X$ converges in distribution to the standard normal distribution:
>  $$ \frac{X-np }{\sqrt{npq} }\xrightarrow{d}\mathcal{N}\left(0,1\right)  $$ 

### Poisson Limit Theorem

> [!theorem] Theorem: 
> When $n\to \infty$, $p\to 0$ such that $np\to \lambda$
>  $$ B\left(n,p\right) \xrightarrow{d}\mathrm{Poisson}\left(\lambda \right)  $$ 