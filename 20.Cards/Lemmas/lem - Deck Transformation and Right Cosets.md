---
type: lemma
aliases: [Deck Transformation and Right Cosets]
---
> [!lemma] Lemma
> There is an injective mapping $\Phi$ of $\mathbf{G}(p)$ to the set of right cosets of $K$ in $\pi_1(X,x)$, where, $K=p_\#(\pi_1(\overline{X},\bar{x}))$. Moreover, $K$ is a normal subgroup iff this map $\Phi$ is an isomorphism of groups. In any case, the cardinality of $\mathbf{G}(p)$ is less than or equal to the number of sheets of $p$.

> [!proofsketch] Sketch of Proof: 
> * $f$使得基点在其所在的纤维中变换, 我们用路径 $\gamma$来将其刻画到基本群, 所以定义$\Phi \left(f\right)= K[p\circ \gamma]$
> * **良定义**: 同端点路径拼出的回路下降到$K$中的元素, 故$\Phi$良定义.
> * **单同态**: 
>   * $\Phi$值相等意味着路径下降到同一个$K$的右陪集, 根据[[thm - Fibre and Right Cosets]]中的对应就是路径的端点相同.
>   * $\mathbf{G}$作用在$\overline{X}$上是自由的, 一点相等则变换相等. 
> * **满同态到normal**: 此时,有$\mathbf{G}$到右陪集到$p^{-1} \left(x\right)$的一串同构. 具体的对应法则为
>    $$ \mathbf{G}\to p^{-1} \left(x\right),\quad f\mapsto f\left(\bar{x}\right) $$ 
>   这是在说 $\mathbf{G}$在 $p^{-1} \left(x\right)$上的作用是单传递的. [[thm - Simply Transitively when Normal]]导出结果
> * **normal到满同态**: normal保证$\mathbf{G}$单传递地作用在 $p^{-1} \left(x\right)$上, 从而 $G$和 $p^{-1} \left(x\right)$同构, 进而与商群(右陪集空间)同构.
 
