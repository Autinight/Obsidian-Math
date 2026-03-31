---
type: theorem
aliases: Extension Theorem in W^{1,p}
technique: []
---

> [!theorem] Theorem: 
> Assume $U\subseteq \mathbb{R} ^{n}$ is a bounded open subset and $\partial U$ is $C^{1}$. Choose a bounded open subset $V\subseteq \mathbb{R} ^{n}$ with $U\subset \subset V$. Then there exists a bounded linear operator $E$
>  $$ E: W^{1,p}\left(U\right)\to W^{1,p}\left(\mathbb{R} ^{n}\right)  $$
> where $1\le p\le \infty$, such that the following holds
> 1. $Eu|_{U}= u,a.e.$ in $U$.  
> 2. $Eu$ has support within $V$.
> 3. $\left\| Eu \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)}\le C\left\| u \right\|_{W^{1,p}\left(U\right)}$ for some constant $C$ depending only on $U,V$ and $p$.

> [!remark] Remark: 
> $V$是预先选好的, 我们总可以挑选适应$V$的坐标卡.

We fisrt prove the theorem when  $1\le p< \infty$.

> [!proofsketch] Sketch of Proof:
> 1. 将$\left(U,\partial U\right)$看成$\mathbb{R} ^{n}$的嵌入子流形, 我们考虑边界处的球形slice chart.
> 2. 在球形slice chart上, 对于$u\in C^{1}\left(\overline{U}\right)$通过高阶反射, 将代表$U$内部点的半球反射到代表外部点的半球上去.
> 3. 将slice chart的延拓拉回到$U$上面. 
> 4. 利用$\partial U$的紧性, 取出有限多个覆盖了$\partial U$的slice chart, 再取一个 $V_0\subset \subset U$, 构成$\overline{U}$的开覆盖. 再取一个$\mathbb{R} ^{n}\setminus \overline{U}$, 这些集合共同给出$\mathbb{R} ^{n}$的覆盖.
> 5. 对上面这组覆盖取单位分解, 就可以组合出$\mathbb{R} ^{n}$上的函数.
> 6. 由于坐标球上的反射延拓是以$u$本身为原材料的, 延拓出去得到的函数的$W^{1,p}$范数不超过内部半球上范数的有限倍. 又坐标映射可以被选取为是梯度一致有界的, 并且坐标卡的选取无关于$u$, 因此延拓的拉回的范数又不超过拉回之前的常数倍.
> 7. 利用$C^{1}\left(\overline{U}\right)$在$W^{1,p}\left(U\right)$中的稠密性, 给出最终的构造.

> [!proof] Proof: 
> **Select the Boundary Slice Chart**: Since $\left(U,\partial U\right)$ is a $C^{1}$ embedded submanifold with boundary. For each $x^{0}\in \partial U$, there exists coordinate ball $\left(W, \varphi \right)$ for $\mathbb{R} ^{n}$ centered at $x^{0}$ with $W\subset \subset V$, such that 
>  $$ \varphi \left(W\cap U\right)= \left\{ y\in B\left(0,1\right): y_{n}> 0 \right\} $$
>  $$ \varphi \left(W\cap \partial U\right)= \left\{ y\in B\left(0,1\right): y_{n}= 0 \right\} $$  
> By shrinking the coordinate ball if neccessary, we may assume that $\varphi$ and $\varphi       ^{-1}$ has bounded $C^{1}$ norm.
>  
> **Extension on the coordinate**:
> Temporarily suppose $u\in C^{1}\left(\overline{U}\right)$. Denote $u\circ \varphi$ by $\hat{u}$, define $\tilde{u}: B\left(0,1\right)\to \mathbb{R}$
>  $$ \tilde{u}\left(y_1,\cdots ,y_{n}\right)= \begin{cases} \hat{u}\left(y_1,\cdots ,y_{n}\right),& y_{n}\ge 0\\ -3\hat{u}\left(y_1,\cdots ,-y_{n}\right)+ 4\hat{u}\left(y_1,\cdots ,-\frac{y_{n} }{2 }\right),& y_{n}\le 0 \end{cases}  $$
> We call $u^{+ }= \tilde{u}|_{B\left(0,1\right)^{+ }}$, $u^{-}= \tilde{u}|_{B\left(0,1\right)^{-}}$. Then $u^{+ }|_{\left\{ y_{n}= 0 \right\}}= \hat{u}|_{\left\{ y_{n}= 0 \right\}}$, further more 
>  $$ u^{-}_{y_{i}}|_{\left\{ y_{n}= 0 \right\}} = u^{+ }_{y_{i}}|_{\left\{ y_{n}= 0 \right\}}$$
>  $$ u^{-}_{y_{n}}= 3\hat{u}_{y_{n}}\left(y_1,\cdots ,-y_{n}\right)-2\hat{u}_{y_{n}}\left(y_1,\cdots ,-\frac{y_{n} }{2 }\right) $$
>  $$ u^{-}_{y_{n}}|_{\left\{ y_{n}= 0 \right\}}= u^{+ }_{y_{n}}|_{\left\{ y_{n}= 0 \right\}} $$
> Thus
>  $$ D^{\alpha }u^{+ }= D^{\alpha }u^{-} $$
> $\tilde{u} \in C^{1}\left(B\left(0,1\right)\right)$. Note that 
>  $$ \left\| \tilde{u} \right\|_{W^{1,p}\left(B\left(0,1\right)\right)}\le C_1\left\| \hat{u} \right\|_{W^{1,p}\left(B\left(0,1\right)^{+ }\right)} $$      
> for some constant $C_1$.
> 
> **Pullback to the Subset**: Let $u^{\prime}= \tilde{u}\circ \varphi ^{-1}$, then $u^{\prime}$ is the extension of $u|_{W\cap U}$, such that 
>  $$ \left\| u^{\prime} \circ \varphi  \right\|_{W^{1,p}\left(B\left(0,1\right)\right)}\le C_1\left\| u\circ \varphi  \right\|_{W^{1,p}\left(B\left(0,1\right)^{+ }\right)} $$
> Since $\varphi$ and $\varphi ^{-1}$, has bounded $C^{1}$ norm, there exists some constant $C_2$ independent with $u$ such that
>  $$ \left\| u^{\prime}  \right\|_{W^{1,p}\left(W\right)}\le  C_2\left\| u \right\|_{W^{1,p}\left(W\cap U \right)}$$
> **Finite Extension Cover**: Since $\partial U$ is compact, there are finitely many chart $\left(W_{i},\varphi _{i}\right)$ for $\mathbb{R} ^{n}$ as above, and function $u_{i}^{\prime} : W_{i}\to \mathbb{R}$ such that $u_{i}^{\prime} |_{W_{i}\cap U}= u|_{W_{i}\cap U}$, $i=  1,\cdots,N$. 
>  $$ \left\| u^{\prime} _{i} \right\|_{W^{1,p}\left(W_{i}\right)}\le C_2^{\left(i\right)}\left\| u \right\|_{W^{1,p}\left(W_{i}\cap U\right)} $$
> Then we take $W_0\subset \subset U$ such that $\bigcup _{i= 0}^{N}W_{i}\supseteq \overline{U}$, and a function $u_0= u|_{W_0}$. We have $\left\{ W_0,\cdots ,W_{N} \right\}\cup \left\{ \mathbb{R} ^{n}\setminus \overline{U} \right\}$ is an open cover of $\mathbb{R} ^{n}$, we take a partition of unity $\left\{ \psi _0 ,\cdots ,\psi _{N} \right\}\cup \left\{ \psi _{N+ 1} \right\}$ subordinate to the cover. 
>
> **Global Extension**: Define $v= \sum _{i= 0}^{N}\psi _{i}u^{\prime} _{i}$, then $v$ has support in $\bigcup _{i= 0}^{N}W_{i}\subset \subset V$, furthermore, since the partition is finite, there exists constant $C_3,C_4$ such that 
>  $$ \begin{aligned} \left\| v \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)}&\le \sum _{i= 0}^{N}\left\| \psi _{i}u_{i}^{\prime}  \right\|_{W^{1,p}\left(W_{i}\right)}\\&\le C_3 \sum _{i= 0}^{N}\left\| u \right\|_{W^{1,p}\left(W_{i}\cap U\right)}\\&\le C_4 \left\| u \right\|_{W^{1,p}\left(U\right)}\end{aligned}$$
> Where $C_4$ denpending only on $U,V,p$ rather than $u$.
> 
> **Conclude the Extension Operator** : We hence write $Eu:= v$. Note that $u\mapsto Eu$ is linear. For each $u\in W^{1,p}\left(U\right)$, there exists a sequence $\left\{ u_{m} \right\}$ in $C^{\infty}\left(\overline{U}\right)$([[thm - Global Approximation by Smooth Functions up to the boudnary in Sobolev Spaces|see here]]) , such that $u_{m}\to u$ in $W^{1,p}\left(U\right)$. From the linearity , we have 
>  $$ \left\| Eu_{m}-Eu_{k} \right\|_{W^{1,p}\left(\mathbb{R} ^{n}\right)}\le C\left\| u_{m}-u_{k} \right\|_{W^{1,p}\left(U\right)} $$ 
> which shows that $\left\{ Eu_{m} \right\}$ is also a cauchy sequence in $W^{1,p}\left( \mathbb{R} ^{n}\right)$, and so converges to some $v:= Eu$. Thus we extend the operator $E$ from $C^{1}\left(\overline{U}\right)$ to $W^{1,p}\left(U\right)$

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                if (!p.aliases) return false;
                return dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```

