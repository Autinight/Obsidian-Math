---
type: exercise
aliases:
  - MV-Cohomology
technique: []
book: AT Hatcher
chapter: 3.1
number: "8"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.8.
> Many basic homology arguments work just as well for cohomology even though maps go in the opposite direction. Verify this in the following cases: (a) Compute $H^i(S^n; G)$ by induction on $n$ in two ways: using the long exact sequence of a pair, and using the Mayer–Vietoris sequence. (b) Show that if $A$ is a closed subspace of $X$ that is a deformation retract of some neighborhood, then the quotient map $X \to X/A$ induces isomorphisms $H^n(X, A; G) \approx \widetilde{H}^n(X/A; G)$ for all $n$. (c) Show that if $A$ is a retract of $X$ then $H^n(X; G) \approx H^n(A; G) \oplus H^n(X, A; G)$.

MV-sequence, is 
is induced by 
$$ 0 \to C_{n}\left(A\cap B\right)\xrightarrow{\left(i_{A},-i_{B}\right)}  C_{n}\left(A\right)\oplus C_{n}\left(B\right)\xrightarrow{j_{A}+ j_{B}}  C_{n}\left(A+ B\right)\to 0 $$ 
Since $\left(i_{A},-i_{B}\right)$ is injective,  $j_{A}+ j_{B}$ is surjective, since $\left(j_{A}+ j_{B}\right)\left(a,b\right)= a+ b$.

Induces
$$ H_{n-1}\left(X\right)\to H_{n}\left(A\cap B\right)\xrightarrow{}H_{n}\left(A\right)\oplus H_{n}\left(B\right)\to H_{n}\left(X\right)\to   $$ 
The cohomology is 

$$ 0\to C^{n}\left(A+ B;G\right)\xrightarrow{\psi } C^{n}\left(A;G\right)\oplus C^{n}\left(B;G\right)\xrightarrow{\varphi } C^{n}\left(A\cap B;G\right)\to 0 $$ 

$$ H^{n-1}\left(A\cap B\right)\to H^{n}\left(A+ B;G\right)\to H^{n}\left(A;G\right)\oplus H^{n}\left(B;G\right)\to H^{n}\left(A\cap B;G\right)\to \cdots  $$ 

令$A$是北半球多一点, $B$是南半球多一点, 则$A\cap B$同伦等价与$S^{n-1}$, we hve 
$$ 0\to H^{n-1}\left(S^{n-1};G\right)\to H^{n}\left(S^{n};G\right)\to 0$$ 
得到
$$ H^{n}\left(S^{n};G\right)\simeq H^{n-1}\left(S^{n-1};G\right)\simeq \cdots \simeq H^{1}\left(S^{1};G\right)\simeq G $$ 

$S^{1}$: $\sigma _1 : \left[ 0,1 \right]\to S^{1}$, $\sigma _1 \left(0\right)= \sigma _1 \left(1\right)$, 

$$ 0\to \operatorname{Ext}\left(\right) $$ 

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
