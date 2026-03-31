---
type: example
aliases: 
- Dirichlet's Principle
technique: []
---


### First Variation

> [!proposition] Proposition: Dirichlet's principle 
> Take $L\left(p,x,z\right)= \frac{1}{2}\left| p \right|^{2}$. Then the [[First Variation, Euler-Lagrange equation|Euler-Lagrange Equaition]] associated with the functional
>  $$ I\left[ w \right]:= \frac{1}{2}\int _{U}\left| Dw \right|^{2}\,d x  $$
> is Laplace's equation
>  $$ \Delta u= 0\quad \text{in }U $$ 

> [!proposition] Proposition: Generalized Dirichlet's principle
> Write
>  $$ L\left(p,z,x\right)= \frac{1}{2}\sum _{i,j= 1}^{n}a^{ij}\left(x\right)p_{i}p_{j}-zf\left(x\right) $$
> Then the  [[First Variation, Euler-Lagrange equation|Euler-Lagrange Equaition]] associated with the functional
>  $$ I\left[ w \right]:= \int _{U}\frac{1}{2}\sum _{i,j= 11}^{n}a^{ij}\left(x\right)w_{x_{i}}w_{x_{j}}-wf\left(x\right)\,d x $$
> is the divergence strucure linear equation
>  $$ -\sum _{i,j= 1}^{n}\left(a^{ij}\left(x\right)u_{x_{j}} \right)_{x_{i}}= f\quad \text{in }U$$  

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

