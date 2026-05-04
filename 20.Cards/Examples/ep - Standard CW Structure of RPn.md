---
type: example
aliases:
  - Standard CW Structure of RP^n
  - RP^n 的标准 CW 结构
tags:
  - generated-by-AI
---

## Example

> [!example] Example: Standard CW Structure of $\mathbb{RP}^n$
> The real projective space $\mathbb{RP}^n$ has a standard CW structure with exactly one cell in each dimension $0,1,\dots,n$:
> $$
> \mathbb{RP}^n = e^0 \cup e^1 \cup \cdots \cup e^n.
> $$
> More precisely, the $k$-skeleton is naturally identified with $\mathbb{RP}^k$:
> $$
> (\mathbb{RP}^n)^k = \mathbb{RP}^k, \qquad 0 \le k \le n.
> $$
> The unique $k$-cell is attached to $\mathbb{RP}^{k-1}$ by the quotient map
> $$
> \varphi_k : S^{k-1} \longrightarrow \mathbb{RP}^{k-1},
> $$
> which identifies antipodal points $x \sim -x$ on $S^{k-1}$.

## Comments

> [!note] Note:
> 这个 CW 结构把 $
> \mathbb{RP}^n$ 按维数一层一层打开：第 $k$ 层骨架正好是 $\mathbb{RP}^k$，所以从 $\mathbb{RP}^{k-1}$ 走到 $\mathbb{RP}^k$ 时，只需要添加一个新的 $k$-维开胞腔。
> 
> 数学语言上，这一步由商映射
> $$
> S^{k-1} \longrightarrow \mathbb{RP}^{k-1}, \qquad x \mapsto [x]
> $$
> 控制。它把边界球面上的对跖点 $x$ 与 $-x$ 识别起来，因此 $k$-胞腔的 attaching map 本质上就是二重覆盖
> $$
> S^{k-1} \to \mathbb{RP}^{k-1}.
> $$
> 这也是后面计算 cellular boundary 时出现「$0$ 或 $2$」这种交替现象的来源。

> [!note] Note:
> This is an example card recording the standard CW decomposition of $\mathbb{RP}^n$, not a full proof note. The key point is that
> $$
> \mathbb{RP}^k / \mathbb{RP}^{k-1} \cong D^k / S^{k-1},
> $$
> so passing from $\mathbb{RP}^{k-1}$ to $\mathbb{RP}^k$ adds exactly one open $k$-cell.

> [!remark] Remark:
> This CW structure is the usual starting point for computing the cellular chain complex and homology of $\mathbb{RP}^n$.
