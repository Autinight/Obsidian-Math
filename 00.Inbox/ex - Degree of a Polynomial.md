---
type: exercise
aliases:
  - Degree of a Polynomial
technique: []
book: AT Hatcher
chapter: 2.2
number: "08"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.8.
> A polynomial $f(z)$ with complex coefficients, viewed as a map $\mathbb{C} \to \mathbb{C}$, can always be extended to a continuous map of one-point compactifications $\hat{f} : S^2 \to S^2$. Show that the degree of $\hat{f}$ equals the degree of $f$ as a polynomial. Show also that the local degree of $\hat{f}$ at a root of $f$ is the multiplicity of the root.


by a local degree at $q$, we mean 
$$ \hat{f}_{*}:H_{n}\left(S^{n}, S^{n}\setminus \left\{ q \right\}\right)\to H_{n}\left(S^{n},S^{n}\setminus \left\{ q \right\}\right) $$ 

$$ H_{n}\left(S^{n},S^{n}\setminus \left\{ q \right\}\right)=  $$ 


$$ C_{n}\left(S^{n},S^{n}\setminus \left\{ q \right\}\right)= C_{n}\left(S^{n}\right)/ C_{n}\left(S^{n}\setminus \left\{ q \right\}\right)= \sigma  $$
where $\sigma$ is the path through $p$.  

---


$S^{2}$是$\mathbb{C}$ 的一点进化, 通过球极投影
$$ p : S^{2}\to \mathbb{C} \cup \left\{ \infty \right\} $$ 
设$f$是至少一次的多项式.
$$ \hat{f}: S^{2}\to S^{2},\quad x\mapsto  p^{-1}\left( f\left(p\left(x\right)\right)\right),for x\neq N,\quad f\left(S\right)= S $$ 

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
