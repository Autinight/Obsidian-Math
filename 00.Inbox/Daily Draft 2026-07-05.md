### 16:26

例 7.25 设 C 是数域 K 上的 n 阶矩阵, 求证: 存在 K 上的 n 阶矩阵 A, B, 使得 AB - BA = C 的充要条件是 $\mathrm{tr}(C) = 0$ .

若$C= AB-BA$, 则显然$\operatorname{tr}\left(C\right)= 0$.

反过来, 若$\operatorname{tr}\left(C\right)= 0$, 则

设

$$
\begin{pmatrix} 0&1&0\cdots  \end{pmatrix} 
$$

若至少有一个$> 0$, 则存在左上角的块为零.

$$
\begin{pmatrix} 0&\alpha \\ \beta ^{\perp}&A^{\prime}  \end{pmatrix} 
$$

此时$\operatorname{tr}\left(A^{\prime} \right)= 0$.
归纳可知, 存在一个对角线全为零的表示.

在一个循环子空间上, 至少存在一个向量, 使得$\varphi \left(\alpha \right)= 0$.


例 7.25 设 C 是数域 K 上的 n 阶矩阵, 求证: 存在 K 上的 n 阶矩阵 A, B, 使得 AB - BA = C 的充要条件是 $\mathrm{tr}(C) = 0$ .


$C$有一个对角线全为零的表示.

$$
\left(AB-BA\right)^{i}_{j}= A^{i}_{k}B^{k}_{j}- B^{i}_{k}A^{k}_{j} 
$$

等式$AB-BA= C$在相似关系下不变, 

考虑
$$
A= \operatorname{diag} \left( \lambda _1 ,\lambda _2 ,\cdots ,\lambda _{n} \right)   ,\quad B= \left(x^{i}_{j}\right)
$$
于是
$$
\left(AB-BA\right)^{i}_{j}= \lambda ^{i}x^{i}_{j}-\lambda ^{j}x^{i}_{j}= \left(\lambda ^{i}-\lambda ^{j}\right)x^{i}_{j}= c^{i}_{j} 
$$
令

$$
x^{i}_{j}= \frac{c^{i}_{j} }{\lambda ^{i}-\lambda ^{j} } 
$$
于是令$\lambda ^{i}, \lambda ^{j}$两两互异, 然后取$x^{i}_{j}$即可.


例 7.26 设 $\varphi$ 是数域 K 上 n 维线性空间 V 上的线性变换，则对 V 上任一与 $\varphi$ 乘法可交换的线性变换 $\psi$ ，都存在不超过 n-1 次的多项式 $g(x) \in \mathbb{K}[x]$ ，使得 $\psi = g(\varphi)$ 成立的充要条件是 $\varphi$ 的极小多项式等于其特征多项式.

若$\varphi$的极小多项式等于特征多项式, 则极小多项式是$n$次的, 只能有
$\lambda \operatorname{Id}-\varphi$的smith标准型为
$$
\operatorname{diag} \left( 1,1,\cdots ,1, m\left(\lambda \right) \right)   
$$
极小多项式等于特征多项式, 当且仅当存在$\alpha \in V$, 使得
$$
V= C\left(\varphi ,\alpha \right) 
$$
此时, 
$$
C\left(\varphi ,\alpha \right) 
$$
是$\psi$的不变子空间, 因此
$$
\psi \left(C\left(\varphi ,\alpha \right)\right)\subseteq C\left(\varphi ,\alpha \right) 
$$

$\operatorname{span}\left\{ \psi \left(\alpha \right),\varphi \left(\psi \left(\alpha \right)\right), \cdots ,\varphi ^{n-1}\left(\psi \left(\alpha \right)\right) \right\}\subseteq \operatorname{span}\left\{ \alpha , \varphi \left(\alpha \right), \cdots , \varphi ^{n-1}\left(\alpha \right) \right\}$
$\psi$和$\varphi$可交换.

$$
m\left(\varphi \right)= 0 
$$

若$\psi = g\left(\varphi\right)$, 则

$$
e_1= \alpha ,\quad e_{k}= \varphi ^{k-1}\left(\alpha \right) 
$$
则
$$
\psi \left(e_1\right)= \psi \left(\alpha \right) 
$$
$$
\psi \left(e_2\right)= \psi \left(\varphi \left(\alpha \right)\right)= \varphi \left(\psi \left(\alpha \right)\right)= \varphi \left(\psi \left(e_1\right)\right) 
$$

$$
\psi \left(e_1\right)\in \operatorname{span}\left\{ \alpha , \varphi \left(\alpha \right),\cdots ,\varphi ^{n-1}\left(\alpha \right) \right\} 
$$
设
$$
\psi \left(e_1\right)= \sum _{k= 0}^{n-1}b_{k}\varphi ^{k}\left(e_1 \right) = g\left(\varphi \right)\left(e_1\right)
$$
则

$$
\psi \left(e_2\right)= \psi \left(\varphi \left(e_1\right)\right)= \varphi \left(\psi \left(e_1\right)\right)= \sum _{k= 0}^{n-1}b_{k}\varphi^{k+ 1}\left(e_1\right)= \sum _{k= 0}^{n-1}b_{k}\varphi ^{k}\left(e_2\right)= g\left(\varphi \right)\left(e_2\right) 
$$
于是
$$
\psi \left(e_{k}\right) = g\left(\varphi \right)\left(e_{k}\right)
$$


反过来, 若$\psi = g\left(\varphi \right)$, 

设
$$
\lambda I-\varphi = \operatorname{diag} \left( 1,1,\cdots , d _{1},\cdots , d _{r}\right)   
$$

任取$\varphi$的循环子空间
$$
C\left(\varphi ,\alpha _{r}\right) 
$$
则任取与$\varphi$可交换的映射$\psi$, 设
$$
\psi = g\left(\varphi \right) 
$$

则
$$
C\left(\varphi , \alpha _{r}\right) 
$$
是$g\left(\varphi \right)$的不变子空间, 
若特征多项式不是极小多项式, 至少存在一个$I_{k_0}$, 使得
$$
\lambda I - \varphi \simeq \operatorname{diag} \left( I_{k_0}, d_1,\cdots , d _{r} \right)   
$$
考虑
$$
B= \operatorname{diag} \left( I _{k_0},O,\quad \cdots \quad O \right)   
$$
则
$F$有有利标准型
$$
F= \operatorname{diag} \left( F_{k_1},\cdots , F_{k_{r}} \right)   
$$
则
$$
B F=  F B 
$$
存在$g$, 使得
$$
F= g\left(B\right) 
$$
特别地, 
$$
g\left(F_{k_1}\right)= I,\quad, g\left(F_{k_{i}}\right)= O 
$$
$d _{k_{i}}$是$F_{k_{i}}$的极小多项式, 我们有$d _{k_{i}}|g$. 从而$d_1|g$, 与$d_1\left(F_{k_1}\right)= 0$矛盾.