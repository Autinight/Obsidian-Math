---
aliases:
  - Chebyshev's Law of Large Number
---

## $L^{2}$ Weak Law

> [!theorem] Theorem: $L^2$ weak law
> Let $X_1, X_2, \ldots$ be uncorrelated random variables with $E X_i = \mu$ and $\operatorname{var}(X_i) \le C < \infty$. If $S_n = X_1 + \cdots + X_n$ then as $n \to \infty$, $S_n/n \to \mu$ in $L^2$ and in probability.

> [!proof] Proof: 
> To prove $L^{2}$ convergence, observe that $E\left(S_{n}/n\right)= \mu$, so 
>  $$ \begin{aligned} E\left(S_{n}/n-\mu \right)^{2}= \operatorname{Var}\left(S_{n}/n\right)= \frac{1 }{n^{2} }\left(\sum _{k= 1}^{n}\operatorname{Var}\left(X_{i}\right) \right)\le \frac{Cn }{n^{2} }\to 0 \end{aligned} $$ 
> And we get the convergence in probability by applying [[lem - Lp Convergence and Convergent in Measure]].

## Markov's Law of Large Numbers

> [!theorem] Theorem: 
> Let $X_1,X_2,\cdots$ be random variables with $\operatorname{Var}\left(X_{i}\right)< \infty$. If $S_{n}= X_1+ \cdots + X_{n}$, and satisfies the Markov's Condition:
>  $$ \lim_{n\to \infty}\frac{1 }{n^{2} }\operatorname{Var}\left(S_{n}\right)= 0 $$ 
> then $\left(S_{n}-E[S_{n}]\right)/n\to 0$ in $L^{2}$ and in probability.