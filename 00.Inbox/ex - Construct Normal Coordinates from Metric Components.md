---
type: exercise
aliases:
  - Construct Normal Coordinates from Metric Components
technique: []
book: RG Petersen
chapter: 5
number: "30"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 5.9.30.
> Assume that we have coordinates $x^{i}$ around a point $p\in(M,g)$ such that $x^{i}(p)=0$ and $g_{ij}x^{j}=\delta_{ij}x^{j}$. Show that these must be exponential normal coordinates. Hint: Define $r=\sqrt{\delta_{ij}x^{i}x^{j}}$; show that it is a smooth distance function away from $p$; and that the integral curves for the gradient are geodesics emanating from $p$.


We define 
$$ r= \sqrt{\delta _{ij}x^{i}x^{j}} $$ 

Then 
$$ r= \sqrt{g_{ij}x^{i}x^{j}} $$ 


$$ \operatorname{grad}r= r^{i}\partial _{i} $$
$$ r^{i}= g^{ik}r_{k} $$  

$$ dr= r_{k}dx^{k} $$ 

$$ r^{2}= \left(x^{1}\right)^{2}+ \cdots + \left(x^{n}\right)^{2} $$ 

$$ 2rdr= \sum _{i}2x^{i}\,d x^{i}\implies r_{k}= \frac{x^{k} }{r } $$ 

$$ \left| \operatorname{grad}r \right|^{2}= g\left(r^{k}\partial _{k},r^{l}\partial _{l}\right)= g_{kl}r^{k}r^{l}= g_{kl}g^{ki}r_{i}g^{lj}r_{j}= \delta _{l}^{i}g^{lj}r_{i}r_{j}= g^{ij}r_{i}r_{j}  $$ 

$$ g^{ij}r_{i}r_{j}= \frac{1 }{r^{2} }g^{ij}x^{i}x^{j} $$ 
but
$$ g_{ij}x^{j}= \delta _{ij}x^{j}\implies x^{j}= \sum _{i}g^{ij}x^{j} $$ 
Thus
$$ \left| \operatorname{grad}r \right|^{2}= \frac{1 }{r^{2} }  \sum _{j}x^{j}x^{j}= 1$$ 
which imlies that $r$ is a distance function.

$$ \operatorname{Hess}r\left(\operatorname{grad}r,X\right)= g\left(\nabla _{\operatorname{grad}r}\operatorname{grad}r,X\right) $$ 

which implies that 
$$ \operatorname{Hess}r\left(X,\operatorname{grad}r\right)= 0 $$ 

From the symmetry of $\operatorname{Hess}r$, we have 
$$ g\left(\nabla _{\operatorname{grad}r}\operatorname{grad}r,X\right)= \operatorname{Hess}r\left(X,\operatorname{grad}r\right)= 0 $$ 
Then we know $\nabla _{\operatorname{grad}r}\operatorname{grad}r= 0$.

Thus for each integral curves $\gamma \left(t\right)$ for $\operatorname{grad}r$ emanating from $p$,  we have $\gamma \left(t\right)$ is a geodesic. 

If
$$ \gamma ^{\prime} \left(t\right)= \operatorname{grad}r $$ 

We have 
$$ \left| \gamma ^{\prime} \left(t\right) \right|= 1  $$ 

$$ L\left(\gamma |_{\left[ 0,t \right]}\right)= \int _{0}^{t}\left| \gamma ^{\prime} \left(t\right) \right|\,d t=   $$ 

$$ r\left(\gamma \left(s\right)\right)= \int _{0}^{s} dr\left(\gamma ^{\prime} \left(t\right)\right)\le \int _{0}^{s}\left| dr \right|\left| \gamma ^{\prime} \left(t\right) \right|= s  $$ 
We have 
$$ \gamma \left(t\right)= \gamma \left(r\right) $$ 

Suppose that 
$$ \gamma \left(r\right)= \left(x^{1}\left(r\right),\cdots ,x^{n}\left(r\right)\right) $$ 
Since
$$ \operatorname{grad}r= r^{i}\partial _{i}= g^{ik}r_{k}\partial _{i}= \sum _{i}g^{ik}\frac{x^{k} }{r }\partial _{i}= \sum _{i}\frac{\delta ^{ik}x^{k} }{r }\partial _{i}= \sum _{i}\frac{x^{i} }{r }\partial _{i} $$ 
Then
$$ \dot{x}^{i}\left(r\right)= \frac{x^{i} }{r } $$ 


$$ x^{\prime} \left(r\right)-\frac{x }{r }= 0\iff \frac{dx }{dr }-\frac{x }{r }= 0\iff \frac{1 }{x }dx= \frac{1 }{r }dr\implies \ln \left| x \right|= \ln \left| r \right|+ C\implies x= cr   $$ 

We have 
$$ \dot{x}^{i}\left(r\right)= c^{i}r $$ 

$$ \gamma \left(r\right)= \left(c^{1}r,\cdots ,c^{n}r\right) $$ 

is a line under the coordinates $\left(x^{1},\cdots ,x^{n}\right)$.



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
