---
type: concept
aliases:
- 有限生成模的结构定理
technique: []
tags: []
---

### PID上矩阵的smith标准型

> [!theorem] Theorem: Smith标准型的存在性
> 设$R$是一个PID, $A$是$R$上的一个$n\times m$矩阵. 则存在$R$上的可逆矩阵$P \in \operatorname{GL} _{n}\left(R\right)$和$Q\in \operatorname{GL} _{m}\left(R\right)$, 使得:
> $$ PAQ= \begin{pmatrix} d_1&& &0\\ & \ddots && \\ && d _r&\\0&&&0 \end{pmatrix} $$
> 满足$d_1|d_2|\cdots |d _{r}$ 

> [!remark] Remark: PID上的可逆矩阵
> 称$A\in M_{n}\left(R\right)$是可逆的, 若$\det \left(A\right)$是可逆元, 即$\det \left(A\right)\in R^{\times }$




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
