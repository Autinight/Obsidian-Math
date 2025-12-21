
## Statement

> [!definition] Definition
> If $X$ is a random variable we define its **characteristic function (ch.f.)** by
>
> $$
> \varphi(t) = E e^{itX} = E \cos tX + i E \sin tX
>
> $$

## Properties

> [!theorem] Theorem
> All characteristic functions have the following properties:
> - **(a)** $\varphi(0)=1$,
>
> - **(b)** $\varphi(-t)=\overline{\varphi(t)}$,
>
> - **(c)** $|\varphi(t)|=|E e^{i t X}| \leq E|e^{i t X}|=1$
>
> - **(d)** $|\varphi(t+h)-\varphi(t)| \leq E|e^{i h X}-1|$, so $\varphi(t)$ is uniformly continuous on $(-\infty, \infty)$.
>
> - **(e)** $E e^{i t(a X+b)}=e^{i t b} \varphi(a t)$


## Expanding

> [!theorem] Theorem: 
> If $E\left| X \right| ^{2}< \infty$, then 
>  $$ \varphi \left(t\right)= 1+ itEX-t^{2}E\left(X^{2}\right)/2+ o\left(t^{2}\right) $$ 
