---
type: concept
aliases:
- Basic Concepts of Commutative Rings
technique: []
tags: []
---
### Commutative Ring

> [!definition] Definition: 
> We say $\left(A, + , \cdot \right)$ is a **commutative ring**, if the following holds:
> 1. $\left(A, + \right)$ is an abelian group;
> 2. Multiplication is associative $\left(\left(xy\right)z= x\left(yz\right)\right)$ and distributive over addition $\left( x\left(y+ z\right)= xy+ xz, \left(x+ y\right)z= xz+ yz\right)$;
> 3. $xy= yx, \forall x,y\in A$;
> 4. There exists an element $1\in A$, such that $1x= x1 =  x,\forall x\in A$.

> [!remark] Remark: 
> Throughout the note, the word "ring" shall mean the  commutative ring.       

### Ideals and Quotient Ring

> [!definition] Definition: Ring
> $A$ is a ring. We say $\mathfrak{a}\subseteq A$ is an ideal for $A$, if $A \mathfrak{a}\subseteq \mathfrak{a}$.

> [!definition] Definition: Quotient Ring   
> For a ring $A$ and its ideal $\mathfrak{a}$, we can define a quotient ring $A / \mathfrak{a}$, which inherits a uniquely defined multiplication from $A$ making it into a ring. The elements of $A / \mathfrak{a}$ are the cosets of $\mathfrak{a}$ in $A$.

> [!proposition] Proposition: 
> The mapping $\phi : A \to  A/ \mathfrak{a}$, whichs maps $x\in A$ to the cosets $x+ \mathfrak{a}$ is a surjective ring homomorphism.

> [!theorem] Theorem: Corresponding
> There is an order-preserving Corresponding between the ideals $\mathfrak{b}$ of $A$ containing $\mathfrak{a}$ and the ideals $\overline{\mathfrak{b}}$ of $A  / \mathfrak{a}$, by $\mathfrak{b}= \phi ^{-1} \left(\overline{\mathfrak{b}}\right)$.

### Field and Units

> [!theorem] Theorem: 
> If $A\neq 0$ is a ring, then the following three are equivalent:
> 1. $A$ is a field;
> 2. The only ideals for $A$ is $0$ and $\left(1\right)$.
> 3. every homomorphism of $A$ into a nonzero-ring $B$ is injective.

> [!proof] Proof: 
> $1.\implies 2.$ Let $\mathfrak{a}$ be an nonzero ideal. Take a nonzero element $x\in \mathfrak{a}$, then $\left(x\right)\subseteq  \mathfrak{a}$. Since $x$ is a unit, there exists $y$ such that $xy= 1$, then $\left(x\right)= \left(1\right)$, thus $\mathfrak{a}= \left(1\right)$.
>
> $2.\implies 3.$ Let $\phi : A\to B$ be a homomorphism into a nonzero-ring. Then $\operatorname{ker}\phi$ is an ideal for $A$. From $2.$ we have $\operatorname{ker}\phi = 0$, thus $\varphi$ is injective.
>
> $3.\implies 1.$ If $x\in A$ is not a unit. Then $\left(x\right)\subsetneq \left(1\right)$. Then the natural homomorphism $\phi : z\mapsto z+ \left(x\right)$ has the kernal $\left(x\right)$, by hypothesis $\left(x\right)= 0$.


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
