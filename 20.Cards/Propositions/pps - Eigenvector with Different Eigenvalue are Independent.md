---
type: proposition
aliases:
- Eigenvector with Different Eigenvalue are Independent
technique: []
tags: []
---
> [!theorem] 命题
> 设 $T:V\to V$ 是线性变换，$\lambda_1,\lambda_2,\dots,\lambda_k$ 是两两不同的特征值。
> 若 $v_i$ 是属于 $\lambda_i$ 的特征向量，即
> $$
> T v_i=\lambda_i v_i,\qquad v_i\neq 0,
> $$
> 则
> $$
> v_1,v_2,\dots,v_k
> $$
> 线性无关。

> [!note] Note: 
> 证明线性无关时, 说明n-元组总是能变成n-1元组就能用归纳法得到的了.

> [!proofsketch] Sketch of Proof: 
> 作用特征向量, 给出两个不线性相关的方程, 以消除一个分量, 从而归纳得证.

> [!proof]- 证明
> 对 $k$ 作归纳。
>
> 当 $k=1$ 时，因为 $v_1\neq 0$，所以 $v_1$ 线性无关。
>
> 假设结论对 $k-1$ 个属于不同特征值的特征向量成立。现在考虑
> $$
> v_1,v_2,\dots,v_k.
> $$
>
> 设存在一组标量 $a_1,\dots,a_k$，使得
> $$
> a_1v_1+a_2v_2+\cdots+a_kv_k=0.
> $$
>
> 对两边作用 $T$，得到
> $$
> a_1Tv_1+a_2Tv_2+\cdots+a_kTv_k=0.
> $$
>
> 因为 $Tv_i=\lambda_i v_i$，所以
> $$
> a_1\lambda_1v_1+a_2\lambda_2v_2+\cdots+a_k\lambda_kv_k=0.
> $$
>
> 另一方面，把原来的线性关系乘以 $\lambda_k$，得到
> $$
> a_1\lambda_kv_1+a_2\lambda_kv_2+\cdots+a_k\lambda_kv_k=0.
> $$
>
> 两式相减，得到
> $$
> a_1(\lambda_1-\lambda_k)v_1
> +a_2(\lambda_2-\lambda_k)v_2
> +\cdots
> +a_{k-1}(\lambda_{k-1}-\lambda_k)v_{k-1}
> =0.
> $$
>
> 由于 $\lambda_1,\dots,\lambda_k$ 两两不同，所以对 $i=1,\dots,k-1$，
> $$
> \lambda_i-\lambda_k\neq 0.
> $$
>
> 又由归纳假设，
> $$
> v_1,\dots,v_{k-1}
> $$
> 线性无关，因此每个系数都必须为 $0$：
> $$
> a_i(\lambda_i-\lambda_k)=0,\qquad i=1,\dots,k-1.
> $$
>
> 因为 $\lambda_i-\lambda_k\neq 0$，所以
> $$
> a_i=0,\qquad i=1,\dots,k-1.
> $$
>
> 代回原式，得到
> $$
> a_kv_k=0.
> $$
>
> 由于 $v_k\neq 0$，所以
> $$
> a_k=0.
> $$
>
> 因此
> $$
> a_1=a_2=\cdots=a_k=0.
> $$
>
> 所以 $v_1,v_2,\dots,v_k$ 线性无关。证毕。


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
