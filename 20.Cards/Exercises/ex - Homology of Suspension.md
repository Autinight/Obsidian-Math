---
type: exercise
aliases:
  - Homology of Suspension
technique: []
book: AT Hatcher
chapter: 2.1
number: "20"
category:
status: done 
priority:
tags: []
---
> [!exercise] Exercise: 
> Show that $\tilde{H}_n(X) \approx \tilde{H}_{n+1}(SX)$ for all $n$, where $SX$ is the suspension of $X$. More generally, thinking of $SX$ as the union of two cones $CX$ with their bases identified, compute the reduced homology groups of the union of any finite number of cones $CX$ with their bases identified.

Consider the pari 
$$ \left(SX,X\right) $$ 

$X$ is a good pair of $SX$, since $X$ is closed in $SX$, and has an open neighbourhood deformation rectract to it.

We have 

$$ H_{n}\left(SX,X\right)\simeq \widetilde{H}_{n}\left(SX/X\right) $$ 

$$ SX/X\simeq  SX\vee SX$$ 

$$ H_{n}\left(X\right)\to  H_{n}\left(SX\right)\xrightarrow{\left(q_{n}\right)_{*}}  H_{n}\left(SX,X\right)\to H_{n-1}\left(X\right)\to H_{n-1}\left(SX\right)$$ 


From
$$ 0\to C_{n}\left(A\cap B\right)\to   C_{n}\left(A\right)\oplus C_{n}\left(B\right)\to C_{n}\left(A+ B\right)\to 0 $$ 
We have 
$$ H_{n+ 1}\left(A+ B\right)\xrightarrow{\partial }  H_{n}\left(A\cap B\right)\xrightarrow{\left(i_1,-i_2\right)_{*}}  H_{n}\left(A\right)\oplus H_{n}\left(B\right)\xrightarrow{\left(j_1+j_2\right)_{*}}  H_{n}\left(A+ B\right)$$ 

Where 
$$ \left(i_1,-i_2\right)\left(a,b\right)= \left(i_1\left(a\right), -i_2\left(b\right)\right) $$ 

$$\left(j_1+ j_2\right)\left(a+ b\right)= j_1\left(a\right)+ j_2\left(b\right) $$ 

Since 
$$ SX= CX^{+ }\cup CX^{-} ,\quad CX^{+ }\cap CX^{-}= X$$ 


$\partial \left(a+ b\right)= \partial a+ \partial b= 0\implies \partial a= -\partial b= \partial \left(-b\right)$
We have 

$\partial a= \partial \left(-b\right)\in Z_{n}\left(A\cap B\right)$


$CX^{+ },CX^{-}$有收缩与自身的开邻域, 使得开邻域的交集收缩与$X$, 因此我们可以MV序列, 得到
$$ H_{n+ 1}\left(SX\right)\xrightarrow{\partial } H_{n}\left(X\right)\to H_{n}\left(CX^{+ }\right)\oplus H_{n}\left(CX^{-}\right)\to H_{n}\left(SX\right)$$ 

Since $CX$ is contractible , we have 
$$ H_{n}\left(X\right)\simeq H_{n+ 1}\left(SX\right) $$ 

Note that 
$$ S^{k}X\simeq \bigvee _{k}SX $$ 

We have 
$$ \widetilde{H}_{n+ 1}\left(SX\right)\simeq \oplus _{k}H_{n+ 1}\left(SX\right)\simeq \oplus _{k}H_{n}\left(X\right) $$ 


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
