---
title: 环面的单纯同调群计算
tags:
  - algebraic_topology
  - homology
  - hatcher
aliases:
  - Torus simplicial homology
  - Hatcher Example 2.3
---

# 环面的单纯同调群计算

这篇笔记解释 [[Hatcher Ch2 Section 2.2 - Simplicial and Singular Homology|Hatcher 2.1]] 中 Example 2.3：环面 $T$ 的单纯同调群计算。

目标是算出：

$$
H_n^\Delta(T) \cong
\begin{cases}
\mathbb Z, & n=0, \\
\mathbb Z\oplus \mathbb Z, & n=1, \\
\mathbb Z, & n=2, \\
0, & n\geq 3.
\end{cases}
$$

---

## 1. 环面的 $\Delta$-复形结构

Hatcher 使用的环面 $T$ 的 $\Delta$-复形结构包含：

- 一个顶点：$v$；
- 三条 $1$-单形：$a,b,c$；
- 两个 $2$-单形：$U,L$。

因此对应的单纯链群是：

$$
\Delta_0(T) \cong \mathbb Z\langle v\rangle \cong \mathbb Z,
$$

$$
\Delta_1(T) \cong \mathbb Z\langle a,b,c\rangle \cong \mathbb Z^3,
$$

$$
\Delta_2(T) \cong \mathbb Z\langle U,L\rangle \cong \mathbb Z^2,
$$

并且因为这个 $\Delta$-复形没有更高维单形，所以

$$
\Delta_n(T)=0,\qquad n\geq 3.
$$

> [!note] 直观说明
> 环面被拆成两个三角形 $U,L$。三条边 $a,b,c$ 经过粘合以后形成环面上的一维骨架。所有顶点最后都被识别为同一个点 $v$。

---

## 2. 链复形图

这个计算对应的链复形是：

```mermaid
graph LR
    C3["0"] -->|"∂₃=0"| C2["Δ₂(T)=Z⟨U,L⟩"]
    C2 -->|"∂₂"| C1["Δ₁(T)=Z⟨a,b,c⟩"]
    C1 -->|"∂₁"| C0["Δ₀(T)=Z⟨v⟩"]
    C0 -->|"∂₀=0"| Z0["0"]
```

也就是：

$$
0 \longrightarrow \mathbb Z\langle U,L\rangle
\xrightarrow{\partial_2}
\mathbb Z\langle a,b,c\rangle
\xrightarrow{\partial_1}
\mathbb Z\langle v\rangle
\longrightarrow 0.
$$

每一维的同调群由公式给出：

$$
H_n^\Delta(T)=\ker \partial_n/\operatorname{im}\partial_{n+1}.
$$

所以我们需要分别理解：

- $\ker\partial_0$ 与 $\operatorname{im}\partial_1$；
- $\ker\partial_1$ 与 $\operatorname{im}\partial_2$；
- $\ker\partial_2$ 与 $\operatorname{im}\partial_3$。

---

## 3. 计算 $\partial_1$：所有边的边界都是零

因为 $a,b,c$ 的两个端点都被识别成同一个顶点 $v$，所以每条边的边界都是：

$$
\partial_1 a=v-v=0,
$$

$$
\partial_1 b=v-v=0,
$$

$$
\partial_1 c=v-v=0.
$$

因此：

$$
\partial_1=0.
$$

于是：

$$
\ker\partial_1=\Delta_1(T)=\mathbb Z\langle a,b,c\rangle.
$$

> [!tip] 这一步在几何上说了什么？
> 所有 $1$-链都是 $1$-cycle。因为每条边走完以后都回到同一个顶点，所以它们没有净边界。

---

## 4. 计算 $H_0^\Delta(T)$

由定义：

$$
H_0^\Delta(T)=\ker\partial_0/\operatorname{im}\partial_1.
$$

因为 $\partial_0=0$，所以：

$$
\ker\partial_0=\Delta_0(T)=\mathbb Z\langle v\rangle.
$$

又因为 $\partial_1=0$，所以：

$$
\operatorname{im}\partial_1=0.
$$

因此：

$$
H_0^\Delta(T)=\mathbb Z\langle v\rangle/0\cong \mathbb Z.
$$

这表示环面是连通的。

---

## 5. 计算 $\partial_2$：两个三角形给出同一个边界

Hatcher 中给出的边界关系是：

$$
\partial_2 U=a+b-c,
$$

$$
\partial_2 L=a+b-c.
$$

所以两个二维单形虽然是不同的面，但它们的边界在粘合后的 $1$-骨架里表示同一个 $1$-链。

因此任意二维链

$$
pU+qL\in \Delta_2(T)
$$

的边界是：

$$
\partial_2(pU+qL)
=p\partial_2U+q\partial_2L
=p(a+b-c)+q(a+b-c).
$$

所以：

$$
\partial_2(pU+qL)=(p+q)(a+b-c).
$$

这一步是整个计算的核心。

---

## 6. 计算 $H_1^\Delta(T)$

由定义：

$$
H_1^\Delta(T)=\ker\partial_1/\operatorname{im}\partial_2.
$$

前面已经得到：

$$
\ker\partial_1=\mathbb Z\langle a,b,c\rangle.
$$

而 $\partial_2U=\partial_2L=a+b-c$，所以：

$$
\operatorname{im}\partial_2=\mathbb Z\langle a+b-c\rangle.
$$

因此：

$$
H_1^\Delta(T)
=\mathbb Z\langle a,b,c\rangle / \mathbb Z\langle a+b-c\rangle.
$$

现在我们要把这个商群化简。

注意：

$$
\{a,b,a+b-c\}
$$

是 $\Delta_1(T)$ 的一组基。

因为可以从它恢复原来的基 $a,b,c$：

$$
c=a+b-(a+b-c).
$$

所以：

$$
\mathbb Z\langle a,b,c\rangle
=\mathbb Z\langle a,b,a+b-c\rangle.
$$

在商群中，$a+b-c$ 被看成零，因为它是一个边界。因此剩下两个自由生成元 $a,b$：

$$
H_1^\Delta(T)
\cong \mathbb Z\langle a,b,a+b-c\rangle/\mathbb Z\langle a+b-c\rangle
\cong \mathbb Z\langle a,b\rangle.
$$

所以：

$$
H_1^\Delta(T)\cong \mathbb Z\oplus \mathbb Z.
$$

> [!important] 几何解释
> $H_1(T)\cong\mathbb Z\oplus\mathbb Z$ 表示环面有两个独立的一维洞。
>
> 可以把 $[a]$ 和 $[b]$ 理解为环面上的两类基本回路：一类绕着“经向”，一类绕着“纬向”。
>
> 关系 $a+b-c=0$ 的意思是：$c$ 在同调意义下等于 $a+b$，即
>
> $$
> [c]=[a]+[b].
> $$

---

## 7. 计算 $H_2^\Delta(T)$

由定义：

$$
H_2^\Delta(T)=\ker\partial_2/\operatorname{im}\partial_3.
$$

因为没有 $3$-单形，所以：

$$
\Delta_3(T)=0,
$$

于是：

$$
\operatorname{im}\partial_3=0.
$$

因此：

$$
H_2^\Delta(T)=\ker\partial_2.
$$

现在计算 $\ker\partial_2$。

前面得到：

$$
\partial_2(pU+qL)=(p+q)(a+b-c).
$$

因为 $a+b-c\neq 0$，所以

$$
\partial_2(pU+qL)=0
$$

等价于：

$$
p+q=0.
$$

也就是：

$$
q=-p.
$$

因此任意二维 cycle 都形如：

$$
pU-pL=p(U-L).
$$

所以：

$$
\ker\partial_2=\mathbb Z\langle U-L\rangle.
$$

从而：

$$
H_2^\Delta(T)\cong \mathbb Z.
$$

> [!note] 为什么生成元是 $U-L$？
> $U$ 和 $L$ 的边界相同：
>
> $$
> \partial U=\partial L=a+b-c.
> $$
>
> 因此 $U-L$ 的边界会相互抵消：
>
> $$
> \partial(U-L)=\partial U-\partial L=0.
> $$
>
> 这个 $2$-cycle 表示环面整体的二维基本类，也可以理解为环面作为闭曲面的“有向面积类”。

---

## 8. 高维同调

因为 $T$ 的这个 $\Delta$-复形没有 $n\geq 3$ 维的单形，所以：

$$
\Delta_n(T)=0,\qquad n\geq 3.
$$

因此：

$$
H_n^\Delta(T)=0,
\qquad n\geq 3.
$$

---

## 9. 最终结果

综上：

$$
H_n^\Delta(T) \cong
\begin{cases}
\mathbb Z, & n=0, \\
\mathbb Z\oplus \mathbb Z, & n=1, \\
\mathbb Z, & n=2, \\
0, & n\geq 3.
\end{cases}
$$

更简洁地写：

$$
H_0^\Delta(T)\cong \mathbb Z,
\qquad
H_1^\Delta(T)\cong \mathbb Z^2,
\qquad
H_2^\Delta(T)\cong \mathbb Z.
$$

---

## 10. 计算逻辑总结

这次计算可以压缩成下面一张表：

| 维数 | 链群 | cycle | boundary | 同调群 |
|---|---|---|---|---|
| $0$ | $\mathbb Z\langle v\rangle$ | 全部 $0$-链 | $0$ | $\mathbb Z$ |
| $1$ | $\mathbb Z\langle a,b,c\rangle$ | 全部 $1$-链 | $\mathbb Z\langle a+b-c\rangle$ | $\mathbb Z^2$ |
| $2$ | $\mathbb Z\langle U,L\rangle$ | $\mathbb Z\langle U-L\rangle$ | $0$ | $\mathbb Z$ |

核心结构是：

$$
\partial_1=0,
\qquad
\partial_2U=\partial_2L=a+b-c.
$$

所以：

- $0$ 维同调看连通分支：环面连通，所以 $H_0\cong\mathbb Z$；
- $1$ 维同调看独立闭曲线：三条边中有一个边界关系，所以剩下两个独立方向；
- $2$ 维同调看闭的二维面：$U-L$ 的边界抵消，给出一个整体二维基本类。

---

## 11. 一句话版本

环面的 $\Delta$-复形有一个顶点、三条边、两个面；三条边都是 $1$-cycle，而两个面的公共边界给出唯一关系 $a+b-c=0$，所以 $H_1\cong\mathbb Z^2$；同时两个面相减 $U-L$ 没有边界，生成 $H_2\cong\mathbb Z$；连通性给出 $H_0\cong\mathbb Z$。
