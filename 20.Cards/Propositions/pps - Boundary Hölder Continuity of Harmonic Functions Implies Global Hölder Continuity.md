---
type: proposition
aliases: 
- Boundary Hölder Continuity of Harmonic Functions Implies Global Hölder Continuity
technique: []
tags: []
---

> [!proposition] Proposition: 
> Suppose $u\in C\left(\overline{B}_{1}\right)$ is a harmonic function in $B_1$ with $u= \varphi$ on $\partial B_1$. If $\varphi \in C^{0,\alpha }\left(\partial B_1\right)$ for some $\alpha \in \left(0,1\right)$, then $u\in C^{\frac{\alpha  }{2 }}\left(\overline{B}_{1}\right)$. Moreover, there holds.
>  $$ \left\| u \right\|_{C^{\frac{\alpha  }{2 }}}\left(\overline{B}_{1}\right)\le C\left\| \varphi  \right\|_{C^{\alpha }\left(\partial B_1\right)} $$
> where $C$ is a positive constant depending only on $n$ and $\alpha$.  

> [!proofsketch] Sketch of Proof: 
> * **思想层**: 
>   - 当两个对象之间缺乏直接结构时,引入一个共同可控的中介层,把“对象–对象”的关系降维为“对象–中介”的关系. 这里将内部与内部被边界与边界的控制, 拆解成: (1)内部与内部被内部与边界控制;(2)内部与边界被边界与边界控制.
>   - 局部化: 将对象用局部的视角研究, 观察那些在局部下发生较大变化的量. 在$x_0\in \partial B_1$附近观察, $u\left(x\right)$和$\varphi \left(x\right)$附近差不多大, 而$\left| x-x_0 \right|^{k}$在内部沿着$x_0$切空间法向的方向是最小的; $\left| x-x_0 \right|^{k}$在边界上主要体现在切向偏移. 这是对于光滑的边界, 法向偏移是切向偏移的二阶小量. 局部上
>        $$ \sup \frac{\left| u\left(x\right)-u\left(x_0\right) \right|  }{\left| x-x_0 \right|^{\frac{\alpha  }{2 } }  }\approx \frac{\left| \varphi \left(x\right)-\varphi \left(x_0\right) \right|  }{\left| x-x_0 \right|^{\alpha }  } $$ 
>     这也体现了为什么这里Hölder半范数的阶数是一半.
>   - 规范化: 通过平移将$x_0,u\left(x_0\right)$置于原点, 将法向规整到单独坐标$x^{1}$上, 以便于计算.
> * **框架层**:
>   1. 先通过极值原理得到 
>    $$ \left\| u \right\|_{L^{\infty}\left(\overline{B_1}\right)}\le \left\| \varphi  \right\|_{L^{\infty}\left(\partial B_1\right)} $$ 
>   2. 对于固定的$x_0\in \partial B_1$, 先证明
>        $$ \sup _{x\in B_1}\frac{\left| u\left(x\right)-u\left(x_0\right) \right|  }{\left| x-x_0 \right|^{\frac{\alpha  }{2 }}  }\le 2^{\frac{\alpha  }{2 }}\sup _{x\in \partial B_1}\frac{\left| \varphi \left(x\right)-\varphi \left(x_0\right) \right|  }{\left| x-x_0 \right|^{\alpha }  } $$ 
>        规范化为
>        $$ \left| u\left(x\right) \right|\le 2^{\frac{\alpha  }{2 }}[\varphi ]_{C^{0,\alpha }\left(\partial B_1\right)}\left| x \right|^{\frac{\alpha  }{2 }}   $$ 
>       将$x_0$的切空间法向置于坐标$x_1$方向. 边界上成立$\left| x \right|^{2}= 2x_1$. 边界上得到控制
>      $$ \varphi \left(x\right)\le K\left| x \right|^{\alpha }\le 2^{\frac{\alpha  }{2 }}Kx_1^{\frac{\alpha  }{2 }} = :v\left(x\right) $$ 
>      其中$K=[\varphi ]_{C^{0,\alpha }\left(\partial B_1\right)}$ . 法向的函数$v\left(x\right)$是超调和的, 它是向上顶的, 由极值原理, 内部的控制均强于边界: 
>        $$ u\left(x\right)\le v\left(x\right)\le 2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }}  $$ 
>      对$-u$做类似的讨论, 得到
>      $$ \left| u\left(x\right) \right|\le 2^{\frac{\alpha  }{2 }}K\left| x \right|^{\frac{\alpha  }{2 }},\quad \forall x\in B_1   $$ 
>   3. 考虑内部两点$x,y\in B_1$的控制. 
>     - **比较近的时候, 通过梯度估计让它们成长到边界**: 一方面, 可以利用[[pps - Interior Gradient Estimates by Boundary Value for Harmonic Functions|Interior Gradient Estimates]]划出以$x,y$为中心的堪堪碰到边界的圆. 即考虑$d _{x}= \operatorname{dist}{\left( x,\partial B_1 \right)}$, $d _{y}= \operatorname{dist}{\left( y,\partial B_1 \right)}$. 以及$x_0,y_0\in \partial B_1$, $\left| x-x_0 \right|= d _{x}$, $\left| y-y_0 \right|= d _{y}$. 这样我们就可以借由这两个圆, 用梯度估计联系内部与边界了. 不妨设$d _{y}\le d _{x}$. 只要先划定一个小范围把Holder连续性控制好, 比较大的范围就是随便说说的事情. 考虑$\left| x-y \right|\le d _{x}/2$的范围, 我们估计到
>    $$ d _{x}^{\frac{\alpha  }{2 }}\frac{\left| u\left(x\right)-u\left(y\right) \right|  }{\left| x-y \right|^{\frac{\alpha  }{2 }}  }\le C\left| u-u\left(x_0\right) \right|_{L^{\infty}\left(B_{d _{x}}\left(x\right)\right)}  \le Cd _{x}^{\frac{\alpha  }{2 }}[\varphi ]_{C^{0,\alpha }\left(\partial B_1\right)}$$ 
>   - **比较远的时候,通过三角不等式直接够到边界**: 对于稍大的范围$d _{y}\le d _{x}\le 2\left| x-y \right|$, 这就是一个天然的界, 它有与$\left| x_0-y_0 \right|$同阶的下届. 我们直接让$\left(x,x_0\right), \left(x_0,y_0\right), \left(y_0,y\right)$经手控制.
>        $$ \begin{aligned} \left| u\left(x\right)-u\left(y\right) \right|&\le \left| u\left(x\right)-u\left(x_0\right) \right|+ \left| u\left(x_0\right)-u\left(y_0\right) \right|+ \left| u\left(y_0\right)-u\left(y\right) \right|  \\&\le C\left(d _{x}^{\frac{\alpha  }{2 }}+ \left| x_0-y_0 \right|^{\frac{\alpha  }{2 }} + d _{y}^{\frac{\alpha  }{2 }}\right)\left\| \varphi  \right\|_{C^{\alpha }\left(\partial B_1\right)}\\&\le C\left| x-y \right|^{\frac{\alpha  }{2 }}\left\| \varphi  \right\|_{C^{\alpha }\left(\partial B_1\right)}    \end{aligned} $$ 

> [!proof] Proof: 
> “LEMMA 1.35” ([Han和Lin, 2000, p. 18](zotero://select/library/items/WMGIV6YG)) ([pdf](zotero://open-pdf/library/items/2DCN8JJA?page=29))

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
