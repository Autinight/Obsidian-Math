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
