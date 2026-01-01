---
type: theorem
aliases: [Lindeberg-Lévy CLT]
---
> [!theorem] Theorem: 
> Let $X_1, X_2, \dots$ be i.i.d. with $E X_i = \mu$, $\operatorname{var}(X_i) = \sigma^2 \in (0, \infty)$.
> If $S_n = X_1 + \cdots + X_n$ then
> $$(S_n - n\mu)/\sigma n^{1/2} \Rightarrow \chi$$
> where, $\Rightarrow$ means [[Weak Convergence|converges in distribution]] , and $\chi$ has the standard normal distribution.

> [!proof] Proof: 
> By considering $X^{\prime} = X-\mu$, it suffices to prove the result when $\mu = 0$. From [[Characteristic Functions#Expanding]], we have
>  $$ \varphi \left(t\right)= 1- \frac{1}{2}t^{2}\sigma ^{2}+ o\left(t^{2}\right) $$ 
> Then for fixed $t$,
>  $$ \varphi \left(S_{n} / \sigma n^{\frac{1}{2}}\right)= \left(1-\frac{1}{2n}t^{2}+ o\left(n^{-1}\right)\right)^{n} $$ 
> We have from [[lem - Exponential-like Limit|Exponential-like Limit]] that 
>  $$ \lim_{n\to \infty}\varphi \left(S_{n}/\sigma n^{\frac{1}{2}}\right) = e^{-\frac{1}{2}t^{2}}$$
> Then $S_{n}/\sigma  n^{\frac{1}{2}}$ converges in distribution from [[thm - Lévy's Continuity Theorem]] 