---
type: theorem
aliases: 
- Weak Maximum Principle for Subsolutions(Supersolutions) of Elliptic Equations with nonnegative constant term
technique: []
tags: []
---

> [!theorem] Theorem: 
> Assume $u\in C^{2}\left(U\right)\cap C\left(\overline{U}\right)$ and 
>  $$ c\ge 0,\quad \text{in }U $$
> 1. If 
>     $$ Lu\le 0 \quad \text{in }U, $$
>    then
>     $$ \max _{\overline{U}}u\le \max _{\partial U}u^{+ }. $$
> 2. If
>     $$ Lu\ge 0\quad \text{in }U, $$
>    then 
>     $$ \min _{\overline{U}}u\ge \min _{\partial U}u^{-} $$ 
    
> [!proof] Proof: 
> 1. Let $u$ be a subsolution and set $V:= \left\{ x\in U:u\left(x\right)> 0 \right\}$. Then 
>    $$ Ku:= Lu-cu\le -cu\le 0\quad \text{in }V $$ 
> [[thm - Weak Maximum Principle for Subsolutions(Supersolutions) of Elliptic Equations|theorem]] implies that 
>    $$ \max _{V}u= \max _{\partial V}u\le  \max _{\partial U}u^{+ } $$
>   since $\partial V\subseteq \left\{ u= 0 \right\}\cup \partial U$. 
> 
> 2. Substitute $u$ by $-u$ to get 2..
    


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
