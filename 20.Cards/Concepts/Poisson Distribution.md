
  ## Definition and Basic Properties

> [!proposition] Proposition: Poisson Distribution
> Let $\lambda > 0$. If a random variable $X$ takes values in $\mathbb{N} \cup \{0\}$ with probability mass function
>
> $$
> P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!},
>
> $$
>
> then $X$ is said to follow a **Poisson distribution** with parameter $\lambda$, denoted as $X \sim \text{Poisson}(\lambda)$. In this case:
>
> 1. $E[X] = \lambda$;
>
> 2. $\text{Var}(X) = \lambda$;
>
> 3. The moment generating function is
>
> $
> M_X(t) = e^{\lambda(e^t-1)};
> $
>
> 4. If $X \sim \text{Poisson}(\lambda_1), Y \sim \text{Poisson}(\lambda_2)$ and $X,Y$ are independent, then
>
> $
> X+Y \sim \text{Poisson}(\lambda_1+\lambda_2).
> $

