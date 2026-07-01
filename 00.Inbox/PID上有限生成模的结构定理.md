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
> PID上矩阵在不同基下的行列式因子是相伴的

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
> $$ D_{k}\left(A\right)\sim  d_1 d_2\cdots d _{k},\quad 1\le k\le r,\quad D_{k}= 0, k> r $$ 

> [!corollary] Corollary: 
> smith标准型在相伴的意义下唯一

> [!proof] Proof: 
> $$ D_{k}\left(A\right)\sim  d _{k}D_{k-1}\left(A\right) $$ 
> 由于$D_{k}$是相抵不变的, 我们有
> 存在可逆元$r_1,r_2$, 
> $$ D_{k}\left(A\right)= r_1 d _{k}D_{k-1}\left(A\right),\quad D_{k}\left(A\right)= r_2 d _{k}D_{k-1}\left(A\right) $$ 
> $$ \left(r_1d _{k}- r_2d _{k}^{\prime} \right) D_{k-1}\left(A\right)= 0 $$ 
> 由于$R$是PID, 有消去律, 得到
> $$ r_1 d _{k}=r_2 d _{k}^{\prime}  $$ 
> 故
> $$ \left(d _{k}\right)= \left(d _{k}^{\prime} \right) $$ 


### PID上有限生成模的结构

> [!theorem] Theorem: 
> 设$R$是PID, $M$是$R$上的有限生成模. 则存在唯一的非负整数$r$, 以及$R$中的非零可逆元$d_1,d_2,\cdots ,d _{k}$, 满足$d_1|d_2|\cdots |d _{k}$, 使得
> $$ M\simeq R^{r}\oplus R/\left< d_1 \right>\oplus R/\left< d_2 \right>\oplus \cdots \oplus R/\left< d _{k} \right> $$ 
> 其中自由部分为$R^{r}$, 扭部分为$T\left(M\right)\simeq \oplus _{i= 1}^{k}R/\left< d _{i} \right>$. $d_1,\cdots , d _{k}$在相伴的意义下唯一, 成为$M$的不变因子.

设$M$有一组有限生成元$\left\{ x_1,\cdots,x_n  \right\}$.
考虑一个自由$R$-模$R^{n}$, 标准基为$\left\{ e_1,e_2,\cdots ,e_{n} \right\}$.
可以定义一个自然的满同态:
$$ \pi : R^{n}\to M,\quad \pi \left(e_{i}\right)= x_{i} $$
由于PID上自由模的自摸也是自由模, 故$\operatorname{ker}\pi$也是有限生成的自由模, 且由模的第一同构定理
$$ M\simeq R^{n}/\operatorname{ker}\pi  $$
设$r\left(\operatorname{ker}\pi \right)= m$, 取$\operatorname{ker}\pi$的一组基$\left\{ y_1,\cdots,y_m  \right\}$. 我们考虑一个自由摸$R^{m}$, 基为$\left\{ f_1,\cdots,f_m  \right\}$, 定义映射:
$$ \Phi :R^{m}\to R^{n},\quad \Phi \left(f_{j}\right)= y_{j} $$
则$\operatorname{Im}\left(\Phi \right)= \operatorname{ker}\pi$
我们有$M$的一个presentation, 即一个正合列.
$$ R^{m}\xrightarrow{\Phi }R^{n}\xrightarrow{\pi }M\to 0   $$ 
分别取$R^{m}$和$R^{n}$的一组基, 使得$\Phi$表示为smith标准型
$$ \begin{pmatrix} d_1&&&0&\cdots &0 \\ &\ddots&& 0&\cdots &0 \\& &d _{k}&0&\cdots &0\\0&\cdots &0 &0&\cdots &0\\ \vdots &&\vdots&\vdots&&\vdots\\0&\cdots &0&0&\cdots &0 \end{pmatrix} $$

由于
$$ 
\begin{aligned} M\simeq R^{n}/ \operatorname{ker}\pi = R^{n}/\operatorname{Im}\Phi & \simeq \frac{R e_1^{\prime} \oplus \cdots \oplus R e_{k}^{\prime} \oplus R e_{k+ 1}^{\prime} \oplus \cdots \oplus R e_{n}^{\prime}  }{R\left( d_1 e_1^{\prime} \right)\oplus \cdots \oplus R\left(d _{k}e_{k}^{\prime} \right)\oplus 0\oplus \cdots \oplus 0 }\\&\simeq  \bigoplus _{i= 1}^{k} R e_{i}^{\prime} / R\left(d _{i}e_{i}^{\prime}  \right) \oplus \bigoplus _{j= k+ 1}^{n}R e_{j}^{\prime} /  0\\&\simeq  R/\left< d_1 \right>\oplus R/\left< d_2 \right>\oplus \cdots \oplus R/\left< d _{k} \right>\oplus R^{n-k}\end{aligned}
$$ 


### 数量矩阵相似, 当且仅当特征矩阵相抵.

> [!theorem] Theorem: 
> 设$A,B$是域$F$上的$n$阶矩阵, 则$\lambda I-A$于$\lambda I-B$相抵, 当且仅当$A,B$相似.

将$F^{n}$分别看成是两种$F\left[ x \right]$-模, 分别为 
$$
f\left(x\right)\cdot v= f\left(A\right)v,\quad f\left(x\right)\cdot v= f\left(B\right)v 
$$
由于$F$是PID, $F\left[ x \right]$也是PID.

分别给出满同态$\pi _{A}: F\left[ x \right]^{n}\to E^{n}$, $\pi _{A}\left(f^{i}\left(x\right)e^{\prime} _{i}\right)= f^{i}\left(A\right)e_{i}$, 以及$\pi _{B}:F\left[ x \right]^{n}\to E^{n}, \pi _{B}\left(f^{i}\left(x\right)e_{i}^{\prime} \right)= f^{i}\left(B\right)e_{i}$.

考虑$F\left[ x \right]^{n}$上的矩阵
$$
\lambda I-A: F\left[ x \right]^{n}\to F\left[ x \right]^{n} 
$$
断言
$$
\operatorname{ker}\pi _{A}= \operatorname{Im}\left(\lambda I-A\right)
$$
事实上, 
$$
\pi_{A} \left(\left(\lambda I-A \right)e_{i}^{\prime} \right)= \left(A-A\right)e_{i} = 0 
$$
故
$$
 \operatorname{Im}\left(\lambda I-A \right)\subseteq \operatorname{ker}\pi _{A}
$$

反之, 若$f^{i}\left(x\right)e_{i}^{\prime} \in \operatorname{ker}\pi _{A}$,  则
$$
f^{i}\left(A\right)e_{i}     = 0 
$$
由于$\pi _{A}$在常系数向量上的限制是恒等的, 我们有
$$
f^{i}\left(A\right)e_{i}^{\prime} = 0 
$$
由恒等式
$$
\left(x^{k}I-A^{k}\right)= \left(xI-A\right)\left(x^{k-1}I+ x^{k-2}A+ \cdots + A^{k-1}\right) 
$$
可知存在$Q^{i}\left(x\right)$, 使得
$$
f^{i}\left(x\right)I- f^{i}\left(A\right)= \left(xI-A\right)Q^{i}\left(x\right) 
$$
于是
$$
f^{i}\left(x\right)e_{i}^{\prime} = \left(xI-A\right)Q^{i}\left(x\right)e_{i}^{\prime} \in \operatorname{Im}\left(xI-A\right)
$$
于是

$$
\operatorname{Im}\left(\lambda I-A  \right)= \operatorname{ker}\pi _{A} 
$$

我们有正合列
$$
F\left[ x \right]^{n}\xrightarrow{\lambda I-A   } F\left[ x \right]^{n}\xrightarrow{\pi _{A}} E^{n}\to 0  
$$
同样地
$$
F\left[ x \right]^{n}\xrightarrow{\lambda I-B}F\left[ x \right]  ^{n}\xrightarrow{\pi _{B}}E^{n}\to 0 
$$
设$P: F\left[ x \right]^{n}\to F\left[ x \right]^{n}$是可逆矩阵, 使得
$$
P\left(\lambda I -A\right)Q = \lambda I-B 
$$


