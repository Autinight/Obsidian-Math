---
type: chapter note
aliases:
- FA(Undergraduate) Middle Term
book: FA(Undergraduate) Middle Term
chapter: 
status: active
tags: []
---


# FA(Undergraduate) Middle Term

## 基本信息
- 教材： `= this.book`
- 章节： `= this.chapter`
- 状态： `= this.status`

## 核心对象
- 距离空间
    - 稠密性
    - 可分性
- **列紧集(sequentially precompact)**: $A\subseteq X$, $A$中的点列存在收敛于$X$的子列.  
  - 列紧集的子集列紧. 
  - 由于**Cauchy列+子列收敛=收敛列**, 故列紧空间完备.
- **$\varepsilon$网和完全有界**:
  - **$\varepsilon$-网**: 如果把$B$的每个点扩充为$\varepsilon$-球就能捕获整个$A$. 就成$B$是$A$的一个$\varepsilon$-网.
  - **完全有界**: 若对于任意的$\varepsilon > 0$, $A$有有限$\varepsilon$-网, 则称$A$是完全有界的.
    - $\varepsilon$-网可以取成$A$的子集: 在$\frac{\varepsilon  }{2 }$-网中每个小球挑一个$A$上的点, 就是$\varepsilon$-网.
    - **完全有界集可分**: 有限$\frac{1}{n}$-网给出一个可数稠密子集, 从而有理球的全体是一个可数基.
## 核心定理
-  Baire纲定理
-  压缩映射原理
-  度量空间中, **列紧$\implies$完全有界**, ,**完全有界+完备$\implies$列紧**
   - 若不是完全有界的, 则设存在$\varepsilon_0$网, 由于$\left\{ x_1,\cdots ,x_{n-1} \right\}$总不是有限$\varepsilon _0$-网, 总能取出$x_{n}\in A$使得它和前面$n-1$个点的距离大于等于$\varepsilon _0$, 给出非收敛的点列.
   - 设$B\subseteq A$是无穷点列, 也是完全有界的,  $1$-网中有一个小球(为$B$中元素为心)捕获了$B$中的无穷多个点, 拿出来作为$B$的子集$B_1$, 也是一个点列. $B_1\subseteq A$也是完全有界的, $\frac{1}{2}$-网中有一个小球捕获了$B_1$中的无穷多个点. .... 以此类推取出一系列小球, 并且点列$x_{n}\in B_{n}\setminus \left\{ x_1,\cdots ,x_{n-1} \right\}$. 则$d\left(x_{m},x_{n}\right)< \frac{2 }{n }, m\ge n$.
   - $\mathbb{R} ^{n}$中有界当且仅当完全有界(用一个大立方体包住, 然后切成任意细的有限多个小立方体).
- 

## 核心工具
- 
- 
- 

## 本章打卡
- [ ] 只要知识点覆盖
- [ ] 重要例子
- [ ] 工具检验
- [ ] 习题回顾
---

## 重要例子

``` dataview
TABLE aliases as "别名"
WHERE type = "example" AND contains(file.tags, "#functional_analysis")
```
