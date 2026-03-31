---
type: concept
aliases: 
- The Space H^{-1}
technique: []
---


### Definition

> [!theorem] Theorem: 
> We denote by $H^{-1} \left(U\right)$ the dual space to $H_{0}^{1}\left(U\right)$.

### Pairing 

> [!definition] Definition: 
> We will write $\left< \;,\; \right>$ to denote the pairing between $H^{-1} \left(U\right)$ and $H_{0}^{1}\left(U\right)$. 

### Norm

> [!definition] Definition: 
> If $f\in H^{-1} \left(U\right)$, we define the **norm**
>  $$ \left\| f \right\|_{H^{-1} \left(U\right)}:= \sup \left\{ \left< f,u \right>:u\in H_{0}^{1}\left(U\right), \left\| u \right\|_{H_{0}^{1}\left(U\right)}\le 1 \right\} $$ 

### Characterization

> [!theorem] Theorem: 
> 1. Assume $f\in H^{-1} \left(U\right)$. Then there exists  functions $f^{0},f^{1},\cdots ,f^{n}\in L^{2}\left(U\right)$ such that 
>  $$ \tag{1} \left< f,v \right>= \int _{U}f^{0}v+ \sum _{i= 1}^{n}f^{i}v_{x_{i}}\,d x\quad \left(v\in H_{0}^{1}\left(U\right)\right) $$
> 2. Furthermore 
>    $$ \left\| f \right\|_{H^{-1} \left(U\right)}= \inf \left\{ \int _{U}\sum _{i= 0}^{n}\left| f^{i} \right|^{2}\,d x: f\text{ satisfies (1) for }f^{0},\cdots ,f^{n}\in L^{2}\left(U\right)  \right\} $$  
> 3. In particular, we have
>    $$ \left(v,u\right)_{L^{2}\left(U\right)}= \left< v,u \right>\tag{2} $$
> for all $u\in H_{0}^{1}\left(U\right)$, $v\in L^{2}\left(U\right)\subseteq H^{-1} \left(U\right)$
>
> **Notation**: We write $``f= f^{0}-\sum _{i= 1}^{n}f^{i}_{x_{i}}"$ whenever (1) holds.

> [!remark] Remark: 
> 4. 设$u$是$f$通过Rieze表示定理给出的在$H_{0}^{1}\left(U\right)$中的对应, 则
>    $$ \begin{cases} f^{0}= u,&\\f^{i}= u_{x_{i}},&\left(i=  1,\cdots,n \right) \end{cases}  $$ 
> 5. 反过来, 给出一些$f^{0},\cdots ,f^{n}$, 也可以按(1)的方式给出一个$H^{-1} _{0}\left(U\right)$上的有界线性泛函.

> [!note] Note: 
> 6. 把$f$看成是$L^{2}\left(U;\mathbb{R} ^{n+ 1}\right)$是中的元素, 其中我们考察了后$n$个分量测试在$H_{0}^{1}\left(U\right)$上的某种弱可导性.  $f$作为线性算子, 相当于通过$u$按内积作用.
> 7. $u$是使得$f$的作用最"有效"的方向. $\left< f,u \right>$就是模长平方. $f$作为算子的范数$\left\| f \right\|_{H^{-1}\left(U\right)}$就是它作为向量$u$的模长$\left(\int _{U}\left| Du \right|^{2}+ \left| u \right|^{2}  \right)^{\frac{1}{2}}$. 因此第二条是说, 如果一个向量$\left(g^{0},g^{1},\cdots ,g^{n}\right)$与$u$内积恰好等于模长$\left< f,u \right>$, 那么它只能用模长的增加来弥补方向的偏离.
> 8. $v\in L^{2}\left(U\right)$可以看成$H^{-1}\left(U\right)$写在$L^{2}\left(U;\mathbb{R} ^{n+ 1}\right)$中的第一个分量, 即嵌在第一个不对可导性做要求的分量上.

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

