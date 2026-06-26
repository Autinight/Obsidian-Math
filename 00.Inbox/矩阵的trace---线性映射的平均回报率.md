---
type: concept
aliases:
  - 矩阵的trace---线性映射的平均回报率
technique: []
tags:
  - trace
  - maxtrix
  - intuition
  - rate_of_retrun
---
### 视角: 将tr视为线性映射的平均回报率

> [!technique] Technique: 视角
> 设$A$是$n$维线性空间上的线性变换, 则
> $$ \operatorname{tr}\left(A\right)= \sum _{i= 1}^{n}\varepsilon ^{i}\left(A\left(e_{i}\right)\right) $$ 
> $\varepsilon ^{i}\left(A\left(e_{i}\right)\right)$理解成$e_{i}$在$A$的作用下回到同一方向的程度.

> [!note] Note: 
> $tr$是相似不变的, 理解为平均回报率在线性坐标变换下是不变的
> 
> **Intuition**: 线性坐标变换改变了出发点的尺寸和方向, 但测量的尺寸和测量的方向发生了同步变化.




### 广义特征子空间的平均回报率



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
