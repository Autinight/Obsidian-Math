---
type: exercise
aliases:
  - A.Gray
technique: []
book: RG Petersen
chapter: 5
number: "43"
category:
status: done
priority:
tags: []
---



> [!exercise] EXERCISE 5.9.43.
> With notation as in the previous exercise show:
> 1. $\sqrt{\det(g_{kl})}=1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+O(|x|^{3})$.
> 2. (**A. Gray**) $\operatorname{vol}B(p,r)=\omega_{n}r^{n}\left(1-\frac{\operatorname{scal}(p)}{6(n+2)}r^{2}+O(r^{3})\right)$, where $\omega_{n}=\operatorname{vol}(B(0,1)\subset\mathbb{R}^{n})$. Hint: Use (1) and expand the integral using polar coordinates.

> [!proof] Proof: 
> 1. $$ g_{kl}= \delta _{kl}+ \frac{1}{3}\sum _{i,j,k,l}R_{ikjl}x^{i}x^{j}+ O\left(\left| x \right|^{3} \right) $$     
>    $$ \det \circ \exp = \exp \circ \operatorname{tr} $$    
>    $$ \det \left(\exp \left(B\right)\right)= \exp \operatorname{tr}B $$   
>    Let $B= \ln A$, then 
>    $$ \det \left(A\right)= \exp \left(\operatorname{tr}\left(\ln A\right)\right) $$   
>    Let $A= I+ tX$   
>    $$ \begin{aligned} \sqrt{\det \left(I+ tX\right)}&= \exp \left(\frac{1 }{2 }\operatorname{tr}\left(\ln \left(I+ tX\right)\right)\right)\\&= \exp \left(\frac{1}{2}\operatorname{tr}\left(tX-\frac{1}{2}t^{2}X^{2}+ O\left(t^{3}\right)\right)\right)\\&= \exp \left(\frac{1}{2}t \operatorname{tr}\left(X\right)- \frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)+ O\left(t^{3}\right)\right)\\&= I+ \frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)+ \frac{1}{2}\left(\frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4}t^{2} \operatorname{tr}\left(X^{2}\right)\right)^{2}+ O\left(t^{3}\right)\\&= I+ \frac{1}{2}t \operatorname{tr}\left(X\right)-\frac{1}{4} t^{2} \operatorname{tr}\left(X^{2}\right)+  \frac{1}{8}t^{2} \operatorname{tr}\left(X\right)^{2}+ O\left(t^{3}\right) \end{aligned} $$     
>    Set 
>    $$ \left(x^{1},\cdots ,x^{n}\right)= t\left(a^{1},\cdots ,a^{n}\right),\quad \sqrt{a_1^{2}+\cdots + a_{n}^{2}} = 1$$    
>    $$ g _{kl}= \delta _{kl}+ \frac{1}{3}t^{2}R_{ikjl}a^{i}a^{j}+ O\left(t^{3} \right) $$    
>    令
>    $$ X= \left(X_{kl}\right)= \frac{1}{3}\left(R_{ikjl}a^{i}a^{j}\right) $$
>    where $x_1^{2}+ \cdots + x_{n}^{2}= 1$    
>    $$ g =  1+  t^{2}X+ O\left(t^{3}\right) $$
>    $$ \begin{aligned} \sqrt{\det \left(g_{kl}\right)|_{tx}} &= \sqrt{\det \left(I+t^{2}\left(X+ O\left(t\right)\right)\right)}\\&= 1+ \frac{1}{2}t^{2} \operatorname{tr}\left(X+ O\left(t\right)\right)- \frac{1}{4}t^{4} \operatorname{tr}\left(X^{2}+ O\left(t\right)\right)+ \frac{1}{8}t^{4} \operatorname{tr}\left(X+ O\left(t\right)\right)^{2}+ O\left(t^{6}\right)\\&= 1+ \frac{1}{2}t ^{2}\operatorname{tr}\left(X\right)+ O\left(t^{3}\right)  \end{aligned}$$      
>    $$ \begin{aligned} \operatorname{Ric}_{ij}= R_{kij}^{k}= g^{kl}R_{kijl}= \left(\delta ^{kl}+ O\left(t^{2}\right)\right)R_{kijl}&= \delta ^{kl}R_{kijl}+ O\left(t^{2}\right)R_{kijl}\\&= \sum _{k}R_{kijk}+ O\left(t^{2}\right)R_{kijk}\\&= \sum _{k}R_{ikkj}+ O\left(t^{2}\right)R_{ikkj} \end{aligned}$$    
>    $$ \sum _{k}R_{ikkj}= \operatorname{Ric}_{ij}+ O\left(t^{2}\right) $$   
>    $$ \begin{aligned} \operatorname{tr}\left(X\right)&= \sum _{i,j} \sum _{k}\frac{1}{3}R_{ikjk}a^{i}a^{j}\\&= -\sum _{i,j}\sum _{k}\frac{1 }{3 }R_{ikkj}a^{i}a^{j}\\&= -\frac{1}{3}\sum _{i,j}\left(\operatorname{Ric}_{ij}+ O\left(t^{2}\right)\right)a^{i}a^{j}\\&=  -\frac{1}{3}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{2}\right) \end{aligned} $$         
>    $$ \begin{aligned} \sqrt{\det g} &=1+ \frac{1}{2}t^{2}\left(-\frac{1}{3}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{2}\right)\right)+ O\left(t^{3}\right)\\&= 1-\frac{1}{6}t^{2}\sum _{ij}\operatorname{Ric}_{ij}a^{i}a^{j}+ O\left(t^{3}\right)\\&= 1-\frac{1}{6}\operatorname{Ric}_{ij}x^{i}x^{j}+ O\left(t^{3}\right) \end{aligned}$$ 
> 
> 2. $$ \begin{aligned} \begin{aligned} B\left(p,r\right)&= \int _{B\left(0,r\right)}\sqrt{\det \left(g_{kl}\right)}\,d x\\&= \omega _{n}r^{n}-\frac{1}{6} \int _{B\left(0,r\right)} \operatorname{Ric}_{ij}x^{i}x^{j}\,d x+  \int _{B\left(0,r\right)}O\left(\left| x \right|^{3} \right)\,d x\\&= \omega _{n}r^{n}-\frac{1}{6}\int _{B\left(0,1\right)}\operatorname{Ric}_{ij}\left(ry^{i}\right)\left(ry^{j}\right)\left(r^{n}\right)\,d y+ \int _{B\left(0,1\right)}r^{3}O\left(1\right)r^{n}\,d y\\&= \omega _{n}r^{n}-r^{n}r^{2}\frac{1}{6}\int _{B\left(0,1\right)}\operatorname{Ric}_{ij}y^{i}y^{j}\,d y+ O\left(r^{3}\right)\omega _{n}r^{n}\\&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{1 }{\omega _{n} }r^{2}\operatorname{Ric}_{ij}\int _{B\left(0,1\right)}y^{j}y^{j}\,d y+ O\left(r^{3}\right)\right) \end{aligned} \end{aligned}$$ 
>    
>    $$ \begin{aligned} \int _{B\left(0,1\right)}\left(y^{i}\right)^{2}dy&= \frac{1 }{n }\int _{B\left(0,1\right)}r^{2}\,d y= \frac{1 }{n } \int _{0}^{1}\int _{\partial B\left(0,t\right)} r^{2}\,d \omega \,d t\\&= \frac{1 }{n }\int _{0}^{1}t^{2}t^{n-1}\int _{\partial B\left(0,1\right)}\,d \omega \,d t \\&= \omega _{n}\int _{0}^{1}t^{n+ 1}\,d tA\\&= \frac{\omega _{n} }{n+ 2 }\end{aligned}$$ 
>    
>    $$ \int _{B\left(0,1\right)}y^{i}y^{j}\,d y= \begin{cases} 0,&i\neq j\\ \frac{\omega _{n} }{n+ 2 },&i= j \end{cases}  $$ 
>    
>    Thus
>    
>    $$ \begin{aligned} B\left(p,r\right)&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{1 }{\omega _{n} }r^{2}\sum _{i}\operatorname{Ric}_{ii}\frac{\omega _{n} }{ n+ 2}+ O\left(r^{3}\right)\right)\\&= \omega _{n}r^{n}\left(1-\frac{1 }{6 }\frac{\sum _{i}\operatorname{Ric}_{ii} }{n+ 2 }r^{2}+ O\left(r^{3}\right)\right) \end{aligned} $$ 
>    
>    Since at $p$, $g_{ij}= \delta _{ij}$, we have 
>    $$  \sum _{i}\operatorname{Ric}_{ii}\left(p\right)= \operatorname{Ric}_{i}^{i}\left(p\right)= \operatorname{scal}\left(p\right) $$ 
>    We have 
>    $$ B\left(p,r\right)= \omega _{n}r^{n}\left(1-\frac{1}{6}\frac{\operatorname{scal}\left(p\right) }{n+ 2 }r^{2}+ O\left(r^{3}\right)\right) $$ 


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
