---
type: concept
aliases:
- 有限生成模的结构定理
technique: []
tags: []
---
### Prelaminar

> [!theorem] Theorem: 
> PID是诺特环, 即PID上不存在无穷的严格递增的理想升链.

> [!proof]- Proof: 
> 设$R$是PID, 若存在$R$的无限理想升链
> $$ I_0\subsetneq  I_1\subsetneq\cdots $$
> 令 
> $$ I_{\infty}= \bigcup _{i= 1}^{\infty}I_{i} $$
> 则由$R$是PID, 存在$r\in R$, 使得
> $$ I_{\infty}= \left(r\right) $$  
> 又$r\in \bigcup _{i= 1}^{\infty}I_{i}$, 存在$I_{i_0}$, 使得$r\in I_{i_0}$, 那么
> $$ I_{\infty}= I_{i_0} $$ 
> 这与无限理想升链矛盾.

> [!theorem] Theorem: Cauchy-Binet
> 设$R$是交换环, $A\in R^{m\times n}$, $B\in R^{n\times m}$, $m\le n$, 则
> $$ \det \left(AB\right)^{I}_{J}= \det \left(A\right)^{I}_{K}\det \left(B\right)^{K}_{J} $$
> 其中$I,J,K$是模长相同的多重指标,用来指定子式, 且公式对$K$做了Einstein求和约定 .
### PID上矩阵的smith标准型

> [!theorem] Theorem: Smith标准型的存在性
> 设$R$是一个PID, $A$是$R$上的一个$n\times m$矩阵. 则存在$R$上的可逆矩阵$P \in \operatorname{GL} _{n}\left(R\right)$和$Q\in \operatorname{GL} _{m}\left(R\right)$, 使得:
> $$ PAQ= \begin{pmatrix} d_1&& &0\\ & \ddots && \\ && d _r&\\0&&&0 \end{pmatrix} $$
> 满足$d_1|d_2|\cdots |d _{r}$ 

> [!remark] Remark: PID上的可逆矩阵
> 称$A\in M_{n}\left(R\right)$是可逆的, 若$\det \left(A\right)$是可逆元, 即$\det \left(A\right)\in R^{\times }$

> [!proof] Proof: 
> 只需要证明, 存在可逆矩阵$P \in \operatorname{GL} _{n}\left(R\right)$, $Q\in \operatorname{GL} _{m}\left(R\right)$, 使得
> $$ PAQ= \begin{pmatrix} d_1& \mathbf{0}\\ \mathbf{0}&A^{\prime}  \end{pmatrix} $$ 
> 且$d_1$整除所有$A^{\prime}$的分量. 然后由归纳法即可得证.
> 
> 等价地, 我们发现只需要找到某个可逆矩阵$P,Q$, 使得$PAQ$中的$(1,1)$元整除其它所有分量. 事实上, 设$a_0= A\left(1,1\right)$, 若存在$A$的其它分量$y_1$, 使得$a_0\not \mid  y_1$, 即$y_1\not \in \left(a_0\right)$, 则$\left(a_0\right)+ \left(y_1\right)$是真包含了$\left(a_0\right)$的一个理想. 由于$R$是PID, 存在$a_1\in R$, 使得$\left(a_1\right)= \left(a_0\right)+ \left(y_1\right)$, 那么可以通过初等变换, 使得矩阵的$\left(1,1\right)$-分量化为$a_1$. 反复这个过程, 一定会在有限多步得到一个矩阵, 使得它的$\left(1,1\right)$分量整除任何其它分量, 否则我们会得到一个严格递增的无限理想升链
> $$ \left(a_0\right)\subsetneq \left(a_1\right)\subsetneq \cdots  $$ 
> 与PID是诺特环矛盾.

### 行列式因子, 与PID的smith标准型的唯一性

> [!definition] Definition: PID上矩阵的行列式因子
> 设$R$是一个PID, $A$是$R$上的一个$n\times m$矩阵. 所有$A$的$k$阶子式生成的理想直和, 也是一个理想, 记这个理想为$I_{k}$. 则存在在相伴意义下唯一的一个元素$D_{k}\left(A\right)\in R$, 使得
> $$ I_{k}= \left(D_{k}\left(A\right)\right) $$ 
> 称$D_{k}\left(A\right)$为$A$的$k$阶行列式因子.

> [!proposition] Proposition: 行列式因子在相抵下不变
> PID上矩阵的行列式因子是相抵关系下的不变量.

> [!proof]- Proof: 
> 设$R$是PID, $A,B\in R^{m\times n}$是相抵的矩阵, 即存在可逆矩阵$P,Q$, 使得
> $$ B= PAQ $$
> 不妨设$m\times n$, 否则我们对所有矩阵取转置. 此时由Cauchy-Binet公式
> $$\begin{aligned} \det \left(B\right)^{I}_{J}&= \det \left(P\right)^{I}_{K}\det \left(AQ\right)^{K}_{J} \\&= \det \left(P\right)^{I}_{K}\det \left(A\right)^{K}_{L}\det \left(Q\right)^{L}_{J}\end{aligned}$$ 
> 若$\left| I \right| = \left| J \right| = k$, 则$\det \left(B\right)^{I}_{J}$属于$A$的$k$阶子式生成的理想的和
> $$ \det \left(B\right)^{I}_{J}\in \sum _{\left| K \right| = \left| L \right| = k}\left(\det \left(A\right)_{L}^{K}\right) $$ 
> 即
> $$ \det \left(B\right)^{I}_{J}\in \left(D_{k}\left(A\right)\right) $$ 
> 由于$I,J$是任意的, 有
> $$ \left(D_{k}\left(B\right)\right)\subseteq \left(D_{k}\left(A\right)\right) $$ 
> 由对称性
> $$ \left(D_{k}\left(B\right)\right)= \left(D_{k}\left(A\right)\right) $$ 
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

> [!proposition] Proposition: 不变因子与行列式因子
> 设$R$是PID, $A$是$R$上的$n\times m$矩阵, 设$r= r\left(A\right)$
> $$ D_{k}\left(A\right)= d_1\cdots d _{k}, \quad 1\le k\le r,\quad D_{k}= 0, k> r$$ 

> [!proof] Proof: 
> 将$A$化为smith标准型
> $$ PAQ= \begin{pmatrix} d_1&& &0\\ & \ddots && \\ && d _r&\\0&&&0 \end{pmatrix} $$
> 则
> $$ D_{k}\left(A\right)=  d_1 d_2\cdots d _{k},\quad 1\le k\le r,\quad D_{k}= 0, k> r $$ 

> [!corollary] Corollary: 
> 不变因子是