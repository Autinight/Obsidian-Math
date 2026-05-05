---
type: exercise
aliases:
  - Homology of RP^n
technique: []
book: AT Hatcher
chapter: 2.2
number: "19"
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.19.
> Compute $\tilde{H}_i(\mathbb{R}P^n/\mathbb{R}P^m)$ for $m < n$ by cellular homology, using the standard CW structure on $\mathbb{R}P^n$ with $\mathbb{R}P^m$ as its $m$-skeleton.


> [!proof] Proof: 
> $$ C_{k}^{CW}\left(\mathbb{RP}^{n}\right)= H_{k}\left(\mathbb{RP}^{n},\mathbb{RP}^{n-1}\right)\simeq \widetilde{H}_{k}\left(D^{n}/S^{n-1}\right)\simeq \widetilde{H}_{k}\left(S^{n}\right)\simeq \left< e_{k} \right> $$ 

$$ d _{k} : C_{k}^{CW}\left(\mathbb{RP}^{n}\right)\to  C_{k-1}^{CW}\left(\mathbb{RP}^{n}\right) $$ 

$$ d _{k}: \widetilde{H}_{k}\left(S^{n}\right)\to  \widetilde{H}_{k-1}\left(S^{n}\right) $$ 

$$ d _{k}\left(e_{k}\right)= \left(\operatorname{deg} d _{k}\right)\left(e_{k-1}\right)  $$ 

$$ \begin{aligned} \begin{aligned} \operatorname{deg} d _{k}&= \operatorname{deg}\left(f:S^{k-1}\xrightarrow{\varphi _{k}} X^{k-1}\xrightarrow{q} X^{k-1}/X^{k-2}\simeq S^{k-1} \right)\\&= \operatorname{deg}\left(S^{k-1}\xrightarrow{x\sim -x} \mathbb{RP}^{k-1}\xrightarrow{q} \mathbb{RP}^{k-1}/ \mathbb{RP}^{k-2}\simeq S^{k-1} \right)\\&= \operatorname{deg}\left(S^{k-1}\xrightarrow{x\sim -x}D^{k-1}/{\left\{ x\sim -x, \text{ on } \partial D^{k-1} \right\}}\xrightarrow{q} D^{k-1}/\left\{ \partial D^{k-1}\sim * \right\}\simeq S^{k-1} \right) \end{aligned}\end{aligned} $$ 

Take the centre point o f $y\in D^{k-1}/ \left\{ \partial D^{k-1}\sim * \right\}$
Then there exists $x\in S^{k-1}$, $f\left(x\right)= f\left(-x\right)= y$. $f$在$x$附近表现为单位映射, 在$-x$附近表现为对径映射, 于是
$$ \operatorname{deg}f= 1+ \left(-1\right)^{k} $$ 
Thus 
$$  d _{k}\left(e_{k}\right)= \begin{cases} 2,& k \text{ is even} \\0, &k \text{ is odd} \end{cases}  $$ 
Now we have 
$$ \widetilde{H}_{i}\left(\mathbb{RP}^{n}/\mathbb{RP}^{m}\right)= H_{k}^{CW}\left(\mathbb{RP}^{n},\mathbb{RP}^{m}\right) $$ 

$$ C_{k}\left(\mathbb{RP}^{n},\mathbb{RP}^{m}\right)= \begin{cases} 0,& k\le m\\\left< e_{k} \right>,& m< k\le n\\0,& k> n \end{cases}  $$ 


when $m+ 1< k\le n$
$$ d _{k}\left(e_{k}\right)= \begin{cases} 2, \text{k is even}\\0,\text{k  is odd} \end{cases}  $$ 

$$ 0\to \mathbb{Z} \left< e_{n} \right>\xrightarrow{d _{n}}\mathbb{Z} \left< e_{n-1} \right>\xrightarrow{d _{n-1}}\cdots \xrightarrow{ d _{m+ 2}}\mathbb{Z} \left< e_{m+ 1} \right>\xrightarrow{d _{m+ 1}} 0     $$ 

Thus 
$$ \operatorname{ker} d _{k}= \begin{cases} \mathbb{Z} , & k =  m+ 1\\\mathbb{Z} ,& \text{ k is odd}, m+ 1<  k\le n\\0,& else \end{cases} ,\quad \operatorname{Im} d _{k+ 1}= \begin{cases} 2\mathbb{Z} , & k \text{ is odd}, m< k\le n-1\\0,&else \\\end{cases}  $$ 

$$ H_{k}\left(\mathbb{RP}^{n}, \mathbb{RP}^{m}\right)= \begin{cases} \mathbb{Z}_{2} , & k= m+ 1, \text{k is odd}\\\mathbb{Z} ,&k= m+ 1,k \text{ is even}\\\mathbb{Z} , & k = n, \text{k is odd}\\\mathbb{Z} _{2},& k\text{ is odd}, m+ 1< k\le n-1\\0,& \text{else}\end{cases}  $$ 

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
