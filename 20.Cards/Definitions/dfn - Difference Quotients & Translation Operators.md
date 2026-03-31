---
type: definition
aliases: [Difference Quotients & Translation Operators]
---

## Basic Notions

> [!definition] Definition: 
> In the whole card, 
> - We set $U\subseteq \mathbb{R} ^{n}$ an open subset.
> - We set $u \in L_{loc}^{1}\left(U\right)$
> - We use the notation
>    $$ U_{\varepsilon }=\left\{ x\in U: \operatorname{dist}{\left( x,\partial U \right)}  > \varepsilon \right\}$$ 

## Translation Operator

> [!definition] Definition: 
> For each $h\in \mathbb{R} ^{n}$, $0< \left| h \right|< \varepsilon$, we define the translation operator $\tau _{h}$ as 
>  $$ \begin{aligned} \tau _{h}: L_{loc}^{1}\left(U\right)&\to L_{loc}^{1}\left(U_{\varepsilon }\right)\\ \tau _{h}u\left(x\right)&:= u\left(x+ h\right) \end{aligned} $$ 

## Difference Quotients Operator

> [!definition] Definition: 
> For direction $e_{i}$, and stepsize $h$, $0< h< \varepsilon$, we define the Difference Quotient Operator as
> $$ \begin{aligned} D^{h}_{i}: L_{loc}^{1}\left(U\right)& \to L_{loc}^{1}\left(U_{\varepsilon }\right)\\ D_{i}^{h}u\left(x\right) &:= \frac{u\left(x+ he_{i}\right)-u\left(x\right) }{h }= \left( \frac{\tau _{he_{i}}-I }{h }\right)u\left(x\right) \end{aligned} $$ 