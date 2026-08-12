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
> 可以把
> $$ \frac{1 }{ n}\operatorname{tr}\left(A\right) $$
> 看成是**平均回报率** 

> [!note] Note: 
> $tr$是相似不变的, 理解为平均回报率在线性坐标变换下是不变的
> 
> **Intuition**: 线性坐标变换改变了出发点的尺寸和方向, 但测量的尺寸和测量的方向发生了同步变化.

### 视角: tr的交换不变性---散射与收集均匀的交织

> [!proposition] Proposition: 
> 如何看待?
> $$ \operatorname{tr}\left(AB\right)= \operatorname{tr}\left(BA\right) $$
> $AB$在$e_{i}$上的回报是这样的
> $$ e_{i}\xrightarrow{B}e_{j}\xrightarrow{A}e_{i}   $$  
> $B$将$e_{i}$散射到各个$e_{j}$的方向, 再由$A$收集所有$e_{j}$方向在$e_{i}$的集中.
> 
> 而tr是所有方向的回报, 将所有方向的这些操作均匀化, 绘制出链条
> $$ e_{i}\xrightarrow{B}e_{j}\xrightarrow{A}e_{i}\xrightarrow{B}e_{j}    $$
> 无论将$e_{i}$视为求和还是$e_{j}$都无所谓, 因为tr的求和操作允许一切发生. 那么如果读左半边, 就是$AB$在所有$e_{i}$方向的回报, 读右半边, 就是$BA$在所有$e_{j}$方向的回报. 


### 广义特征子空间的平均回报率

#### 幂零变换: 没有回报, 是纯粹的滑移.

> [!proposition] Proposition: 
> 幂零变换的标准型可以写成
> $$ N= \begin{pmatrix} 0&0&0&\cdots \\1&0&0&\cdots \\0&1&0&\cdots  \\\vdots\\ 0 &0&0&\cdots \end{pmatrix} $$
> 总是让$e_{i}$滑向$e_{j}= N\left(e_{i}\right)$, $i< n$, 让$e_{n}$归零. **完全没有回报** 

#### 变换在广义特征子空间上的平均回报率就是特征值

> [!proposition] Proposition: 
> 设$A$是$n$维线性空间$V$上的线性变换, $G_{\lambda }$是广义特征子空间
> $$ G_{\lambda }= \operatorname{ker}\left(\lambda I-A\right)^{N} $$ 
> 那么$A$在$G|_{\lambda }$上分解为
> $$ A= \lambda I+ N_{\lambda } $$
> 其中$\lambda I$贡献了纯粹的回报率$\lambda$, $N_{\lambda }$则是纯粹的滑移, 没有回报率 
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

### 应用

> [!exercise] Exercise: 
> 例 6.32 设 A, B, C 是 n 阶矩阵, 其中 C = AB - BA. 若它们满足条件 AC = CA, BC = CB, 求证: C 的特征值全为零.

> [!proof] Proof: 
> 任取$C$的广义特征子空间 $G_{\lambda }$, 则由于$G_{\lambda }$是$A,B$的不变子空间, 原表达式
> $$ C= AB-BA $$ 
> 可以给出纯粹的$G_{\lambda }$上的表达式
> $$ C|_{G_{\lambda }}= A|_{G_{\lambda }}B|_{G_{\lambda }}-B|_{G_{\lambda }}A|_{G_{\lambda }} $$
> 在特征子空间上, $\lambda$就是平均回报, 就是$\frac{1 }{ \operatorname{dim}G_{\lambda }}\operatorname{tr}\left(C\right)$ , 而右侧表达式的$\operatorname{tr}$为零, 因此$\lambda =0$


