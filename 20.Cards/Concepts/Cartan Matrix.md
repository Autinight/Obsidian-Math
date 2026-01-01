---
type: concept
aliases: [Cartan Matrix]
---

## Defininition

> [!definition] Definition: 
> Let $B$ be a base in a root system $R$. Fix an order on the elements of $B$, say $\left(\alpha _1 ,\cdots ,\alpha _{l}\right)$. The **Cartan matrix** of $R$ is defined to be the $\ell \times \ell$ matrix with $ij$-th entri $\left< \alpha _{i},\alpha _{j} \right>$.

> [!remark] Remark: 
> * From, [[thm - Weyl Group Acts Transitively on the family of bases]] and the fact that $\left< \cdot ,\cdot  \right>$  is kept by $s_{\alpha }$ [[Reflection and Reflecting Hyperplane]].  Cartan matrix depends only on the ordering adopted with our chosen base $B$ and not on the base itself. 
> * One can read off the numbers $\left< \alpha _{i},\alpha _{j} \right>$ and so recover the Cartan matrix.

## Properties

> [!proposition] Proposition: 
> If $\left(a_{ij}\right)_{\ell \times \ell }$ is a Cartan matrix , then 
> *  $$ a_{ij}\in \mathbb{Z} ,\quad \forall i,j $$ 
> *  $$ a_{ii}= 2,\quad \forall i=  1,\cdots,\ell  $$
> *  $$ a_{ij}\le 0,\quad i\neq j $$  

> [!proof] Proof: 
> From (R4) [[Root System]], the definition of [[Reflection and Reflecting Hyperplane]] and remark of [[Base for a Root System]]