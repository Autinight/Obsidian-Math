---
type: proposition
aliases: [Involutive Distribution given by a Foliation]
---
> [!proposition] Proposition:
> Let $\mathcal{F}$ be a foliation on a smooth manifold $M$. The collection of tangent spaces to the leaves of $\mathcal{F}$ forms an involutive distribution on $M$.


> [!proof] Proof: 
> For each $p \in M$, there exists a unique $L\in \mathcal{F}$ such that $p\in L$. We define $\mathcal{D}$ to be 
>  $$ \mathcal{D}= \coprod  _{p \in M}T_{p}L $$ 
> Furthermore, there exists a flat chart $\left(U,\left(x^{i}\right)\right)$ for $\mathcal{F}$ containing $p$, such that for each leave $L$, either $L\cap U$ is empty or $L\cap U$ is a countable union of  the slices $\left\{ x^{k+ 1}= c_{k+ 1},\cdots ,x^{n}= c_{n} \right\}$. Note that for each slices, the local tangent bundle is spanned by $\frac{\partial }{\partial x^{1}},\cdots ,\frac{\partial }{\partial x^{k}}$, then it follows that 
>  $$\left( \operatorname{span}\left\{ \frac{\partial }{\partial x^{1}},\cdots ,\frac{\partial }{\partial x^{k}} \right\}\right)_{q}= T_{q}L$$ 
> where $q\in U$, and still $L$ is the unique leaf containing $q$. Since $D$ is locally spaned by smooth vector fields, $\mathcal{D}$ is actually a smooth subbundle of $TM$. $\mathcal{D}$ is involutive since on each flat chart, $\left[ \frac{\partial }{\partial x^{i}},\frac{\partial }{\partial x^{j}} \right]= 0,\forall i,j$.