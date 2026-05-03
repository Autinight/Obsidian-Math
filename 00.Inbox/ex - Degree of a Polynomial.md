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
$$ \hat{f}_{*}:H_{n}\left(S^{n}, S^{n}\setminus \left\{ q \right\}\right)\to H_{n}\left(S^{n},S^{n}\setminus \left\{ S \right\}\right) $$ 

More exactly

$$ \hat{f}_{*}: H_{n} \left(U, U\setminus \left\{ q \right\}\right)\mapsto  H_{n}\left(V, V\setminus \left\{ S \right\}\right) $$ 

where $U$ is a open neighbourhood of $q$ , $V$ is a open neighbourhood of $S$, with  $q$  the only root on $U$.

Its the degree of the homomorphism induced by the pair map 
$$ f: \left(U, U\setminus \left\{ q \right\}\right)\to \left(V,V\setminus \left\{ S \right\}\right) $$ 



If $\hat{f}$ has $k$-muliplicity 

$$ f\left(z\right)= g\left(z\right)\left(z-q\right)^{k} $$ 

$$ g\left(x\right)\neq q $$
$g$ induces a map 
$$ \overline{\mathbb{C}}\setminus \left\{ q \right\}\to \mathbb{C}\setminus \left\{ 0 \right\} $$
Then from
$$ f_{t}\left(z\right)= \left(tg\left(z\right)^{-1} + \left(1-t\right)\right)g\left(z\right)\left(z-q\right)^{k} $$   
We know $f$ is homotopic to $\left(z-q\right)^{k}$  on $S^{n}\setminus \left\{ q \right\}$ and on $S^{n}\setminus \left\{ q \right\}$, thus $f:\left(U,U\setminus \left\{ q \right\}\right)\to \left(V,V\setminus \left\{ S \right\}\right)$ is homotopic to  $\left(z-q\right)^{k}: \left(U,U\setminus \left\{ q \right\}\right)\to \left(V,V\setminus \left\{ S \right\}\right)$

Now we show that $\left(z-q\right)^{k}$ has local degree $k$ at $q$.

$$ H_{n}\left(U,U\setminus \left\{ q \right\}\right)\simeq H_{n}\left(D^{n}, D^{n}\setminus \left\{ 0 \right\}\right)\simeq H_{n}\left(S^{n}\right)\simeq \mathbb{Z}  $$ 

$$ H_{n}\left(V,V\setminus \left\{ S \right\}\right)\simeq H_{n}\left(S^{n}\right) \simeq \mathbb{Z} $$ 

考虑相对同调的长正合列
$$ H_{k}\left(U\setminus \left\{ q \right\}\right)\to H_{k}\left(U\right)\to H_{k}\left(U,U\setminus \left\{ q \right\}\right)\to H_{k-1}\left(U\setminus \left\{ q \right\}\right) $$ 
对于
$$ \widetilde{\partial} : H_{k}\left(V,V\setminus \left\{ S\right\}\right)\to H_{k-1} \left(V\setminus \left\{ S \right\}\right)$$ 
和
$$ \partial : H_{k}\left(U,U\setminus \left\{ q \right\}\right)\to H_{k-1}\left(U\setminus \left\{ q \right\}\right) $$ 
我们有相对同调的自然性
$$ \partial \circ f_{*}= f|_{U\setminus \left\{ q \right\}} \circ \partial $$ 

To caculate $\left(f|_{U\setminus \left\{ q \right\}}\right)^{*}$, we let $\tilde{r}: U\setminus \left\{ q \right\}\to S^{n-1}$ and $r: V\setminus \left\{ S \right\}\to S^{n-1}$ be the contraction map, then 
$$ \tilde{r}\circ\left(z-q\right)^{k}= z^{k}\circ r $$ 

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath, amssymb}
\usepackage[mathscr]{euscript}
\begin{document}
\begin{tikzcd}[
  cells = {font = \large},
  labels = {font = \normalsize},
  arrows = {line width = 0.5pt},
  row sep = 50pt,
  column sep = 50pt
]
H_{k}\left(U\setminus \left\{ q \right\}\right) \arrow[r, "\left(\left(z-q\right)^{k}\right)_{*}"] \arrow[d, "\tilde{r}_{*}"] & H_{k}\left(V\setminus \left\{ S \right\}\right) \arrow[d, "r_{*}"] \\
H_{k}\left(S^{n-1}\right) \arrow[r, "\left(z^{k}\right)_{*}"] & H_{k}\left(S^{n-1}\right)
\end{tikzcd}
\end{document}
```
Since $z^{k}$ has degree $k$, then so dose $f_{*}$.






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
