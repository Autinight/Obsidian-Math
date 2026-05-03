---
tags:
  - algebraic-topology
  - homology
  - CW-complex
created: 2026-05-02
---

# Cellular Homology Diagram

## 长正合序列图示

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath, amssymb}
\usepackage[mathscr]{euscript}
\begin{document}
\begin{tikzcd}[
  cells = {font = \large},
  labels = {font = \normalsize},
  arrows = {line width = 0.5pt},
  row sep = 50pt,
  column sep = 50pt
]
 &  &  &  & 0 &  &  &  \\
 & 0 \arrow[dr] &  & H_n(X^{n+1}) \approx H_n(X) \arrow[ur] &  &  &  &  \\
 &  & H_n(X^n) \arrow[dr, "\partial_{n+1}"'] \arrow[ur, "j_n"] &  &  &  &  &  \\
\cdots \arrow[r] & H_{n+1}(X^{n+1}, X^n) \arrow[rr, "d_{n+1}"] \arrow[ur] &  & H_n(X^n, X^{n-1}) \arrow[rr, "d_n"] \arrow[dr, "\partial_n"'] &  & H_{n-1}(X^{n-1}, X^{n-2}) \arrow[r] & \cdots &  \\
 &  &  &  & H_{n-1}(X^{n-1}) \arrow[ur, "j_{n-1}"'] &  &  &  \\
 &  &  & 0 \arrow[ur] &  &  &  &  \\
 &  &  &  &  &  &  & 
\end{tikzcd}
\end{document}
```

## 说明

这个图表展示了 CW 复形的胞腔同调长正合序列及其正合性：

**主序列（水平方向）**：
$$\cdots \to H_{n+1}(X^{n+1}, X^n) \xrightarrow{d_{n+1}} H_n(X^n, X^{n-1}) \xrightarrow{d_n} H_{n-1}(X^{n-1}, X^{n-2}) \to \cdots$$

**关键映射**：
- $d_n$：胞腔边界映射（cellular boundary map）
- $\partial_n$：连接同态（connecting homomorphism）
- $j_n$：包含映射诱导的同态

**正合性**：
- 上方短正合序列显示：$0 \to H_n(X^{n+1}) \approx H_n(X)$
- 下方短正合序列显示：$0 \to H_{n-1}(X^{n-1})$
- 这些正合性保证了 $\text{Im}(d_{n+1}) = \ker(d_n)$

**几何意义**：
- $X^n$ 表示 CW 复形的 $n$-骨架
- 相对同调群 $H_n(X^n, X^{n-1})$ 捕捉了 $n$-胞腔的信息
- 当 $n$ 足够大时，$H_n(X^n) \cong H_n(X)$

---

**参考**：Hatcher, *Algebraic Topology*, Chapter 2
