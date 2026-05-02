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
- **纲集**
  - **疏集/无处稠密集**: 闭包的内部是空的, 不在任何开集中稠密.
    - **第一纲集**: 可数个疏集的并集即为第一纲集. 可见这是一个"小"的集合
    - **第二纲集**: 非第一纲的.
## 核心定理
-  Baire纲定理: 完备度量空间是第二纲的.
   -  Proof idea: 度量空间具有闭球套性质. 从第一纲集出发, 任意开球总是有与$E_{n}$无交闭的小球$S_n$. 可以构造出闭球套$\left\{ S_{n} \right\}$, $x\in \bigcap _{n}S_{n}$不属于任意$E_{n}$, 不属于$X$.
-  度量空间中, **列紧$\implies$完全有界**, ,**完全有界+完备$\implies$列紧**
   - 若不是完全有界的, 则设存在$\varepsilon_0$网, 由于$\left\{ x_1,\cdots ,x_{n-1} \right\}$总不是有限$\varepsilon _0$-网, 总能取出$x_{n}\in A$使得它和前面$n-1$个点的距离大于等于$\varepsilon _0$, 给出非收敛的点列.
   - 设$B\subseteq A$是无穷点列, 也是完全有界的,  $1$-网中有一个小球(为$B$中元素为心)捕获了$B$中的无穷多个点, 拿出来作为$B$的子集$B_1$, 也是一个点列. $B_1\subseteq A$也是完全有界的, $\frac{1}{2}$-网中有一个小球捕获了$B_1$中的无穷多个点. .... 以此类推取出一系列小球, 并且点列$x_{n}\in B_{n}\setminus \left\{ x_1,\cdots ,x_{n-1} \right\}$. 则$d\left(x_{m},x_{n}\right)< \frac{2 }{n }, m\ge n$.
   - $\mathbb{R} ^{n}$中有界当且仅当完全有界(用一个大立方体包住, 然后切成任意细的有限多个小立方体).
 - **度量空间中, 紧集当且仅当列紧闭**
 - **$L^{p}$是Banach**-空间
   - Proof:
     - 通过二进趋近的子列, 构造收敛的极限.
     - 具体地, 再有限测度集上用$L^{p}$-范数估计$L^{1}$范数, 来得到绝对级数和的几乎处处收敛性, 进而由$\sigma$-有限性, 得到真正的几乎处处收敛性. 这个过程需要Fatou引理和Holder不等式
     - 再用法图引理将Cauchy条件化为收敛条件即可.
 - **$L^{p}$的可分性**
   - 对于$x$, 采用逐步逼近, 先截断值小于等于$n$, 得到截断函数$x_{n}$, 由Chebyshev-型不等式, $x$取值大于$n$的集合收$L^{p}$-范数控制且趋于零.
   - 我们实现了用有界的截断去逼近$x$.
   - 然后在一个大测度集上, 根据Luzin定理, 用有相同界的连续函数去等同$x_{n}$, 可以让去掉的测度集充分小, 使得$L^{p}$-误差任意小.
   - 最后用多项式逼近连续函数, 实现多项式函数空间对$L^{p}$的逼近.


## 核心工具
-  压缩映射原理
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
