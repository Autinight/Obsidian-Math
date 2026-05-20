# 高等代数（第四版）学习指导书

> **书名**: 高等代数（第四版）学习指导书
> **作者**: 谢启鸿、姚慕生 编著
> **出版社**: 复旦大学出版社
> **配套教材**: 《高等代数学（第四版）》
> **说明**: 本书是复旦大学高等代数课程配套学习用书，与教材章节顺序完全相同，包含基本概念、例题解析、方法和技巧分类、基础训练题等内容。

---

## 目录

- [第1章 行列式](#第1章-行列式)
- [第2章 矩阵](#第2章-矩阵)
- [第3章 线性空间与线性方程组](#第3章-线性空间与线性方程组)
- [第4章 线性映射](#第4章-线性映射)
- [第5章 多项式](#第5章-多项式)
- [第6章 特征值](#第6章-特征值)
- [第7章 相似标准型](#第7章-相似标准型)
- [第8章 二次型](#第8章-二次型)
- [第9章 内积空间](#第9章-内积空间)
- [第10章 双线性型](#第10章-双线性型)

---

## 第8章 二次型

### §8.1 基本概念

#### 1. 二次型的定义

> [!definition]
> 设 $f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j$, 其中 $a_{ij}=a_{ji}$, 则称 $f$ 为 $n$ 元二次型.

由定义可知, 二次型 $f$ 可以写成矩阵形式:

$$f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x},$$

其中 $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)'$, $\boldsymbol{A}=(a_{ij})_{n\times n}$ 为实对称矩阵, 称为二次型 $f$ 的**相伴矩阵** (或系数矩阵). 二次型与实对称矩阵之间一一对应.

#### 2. 二次型的标准型与规范标准型

> [!definition]
> 只含平方项的二次型称为**标准型**; 系数只取 $1,-1,0$ 的标准型称为**规范标准型**.

#### 3. 二次型的正惯性指数与负惯性指数

> [!definition]
> 设 $f$ 是实二次型, 其规范标准型中正平方项的个数 $p$ 称为 $f$ 的**正惯性指数**, 负平方项的个数 $q$ 称为 $f$ 的**负惯性指数**, $p-q$ 称为**符号差**.

#### 4. 二次型的可逆线性变换

> [!definition]
> 设 $\boldsymbol{x}=(x_1,x_2,\cdots,x_n)'$, $\boldsymbol{y}=(y_1,y_2,\cdots,y_n)'$, $\boldsymbol{C}$ 为 $n$ 阶非异实矩阵, 则称 $\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}$ 为 $\boldsymbol{x}$ 到 $\boldsymbol{y}$ 的**可逆线性变换**.

> [!definition]
> 若二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 经过可逆线性变换 $\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}$ 化为 $g=\boldsymbol{y}'\boldsymbol{B}\boldsymbol{y}$, 则称 $f$ 与 $g$ **等价** (或**合同**), 记为 $f\cong g$.

> [!theorem]
> 二次型 $f$ 与 $g$ 等价当且仅当它们的相伴矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, 即存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{B}=\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$.

#### 5. 矩阵的合同关系

> [!definition]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 若存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{B}=\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$, 则称 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ **合同**.

矩阵的合同关系是等价关系, 满足:

(1) 反身性: $\boldsymbol{A}$ 与 $\boldsymbol{A}$ 合同;

(2) 对称性: 若 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, 则 $\boldsymbol{B}$ 与 $\boldsymbol{A}$ 合同;

(3) 传递性: 若 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同, $\boldsymbol{B}$ 与 $\boldsymbol{C}$ 合同, 则 $\boldsymbol{A}$ 与 $\boldsymbol{C}$ 合同.


#### 6. 实对称矩阵的基本定理

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\},$$
> 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的全部特征值.

> [!corollary]
> 实对称矩阵 $\boldsymbol{A}$ 正定 (半正定) 当且仅当 $\boldsymbol{A}$ 的所有特征值全大于零 (大于等于零).

> [!theorem] (惯性定理)
> 任意一个实二次型都可以经过可逆线性变换化为规范标准型, 且规范标准型唯一. 等价地, 任意一个 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 都合同于对角矩阵 $\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q,\boldsymbol{O}\}$, 其中 $p,q$ 由 $\boldsymbol{A}$ 唯一确定.

#### 7. 二次型的正定性

> [!definition]
> 设 $f(\boldsymbol{x})=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 是 $n$ 元实二次型, $\boldsymbol{A}$ 是相伴实对称矩阵.
> (1) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$, 则称 $f$ 为**正定二次型** (简称**正定型**), $\boldsymbol{A}$ 称为**正定矩阵** (简称**正定阵**);
> (2) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\geq 0$, 则称 $f$ 为**半正定二次型** (简称**半正定型**), $\boldsymbol{A}$ 称为**半正定矩阵** (简称**半正定阵**);
> (3) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}<0$, 则称 $f$ 为**负定二次型** (简称**负定型**), $\boldsymbol{A}$ 称为**负定矩阵** (简称**负定阵**);
> (4) 若对任意非零实列向量 $\boldsymbol{\alpha}$, 总有 $f(\boldsymbol{\alpha})=\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}\leq 0$, 则称 $f$ 为**半负定二次型** (简称**半负定型**), $\boldsymbol{A}$ 称为**半负定矩阵** (简称**半负定阵**);
> (5) 若存在 $\boldsymbol{\alpha}$, 使得 $f(\boldsymbol{\alpha})>0$, 又存在 $\boldsymbol{\beta}$, 使得 $f(\boldsymbol{\beta})<0$, 则称 $f$ 为**不定型**.


### §8.2 对称初等变换与矩阵合同

本节介绍将对称矩阵化为对角矩阵的对称初等变换方法, 这是求二次型标准型的一种有效方法.

#### 1. 对称初等变换

> [!definition]
> 下列三种变换称为**对称初等变换**:
> (1) 对调 $\boldsymbol{A}$ 的第 $i$ 行与第 $j$ 行, 再对调第 $i$ 列与第 $j$ 列;
> (2) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以非零常数 $c$, 再将第 $i$ 列乘以 $c$;
> (3) 将 $\boldsymbol{A}$ 的第 $i$ 行乘以常数 $k$ 加到第 $j$ 行上, 再将第 $i$ 列乘以 $k$ 加到第 $j$ 列上.

> [!theorem]
> 对称初等变换保持矩阵的合同关系. 即若 $\boldsymbol{A}$ 经过一次对称初等变换变为 $\boldsymbol{B}$, 则 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 合同.

> [!theorem]
> 任意 $n$ 阶实对称矩阵 $\boldsymbol{A}$ 都可以经过有限次对称初等变换化为对角矩阵.

> [!proof]-
> 对矩阵的阶数 $n$ 进行归纳. 当 $n=1$ 时结论显然成立. 假设对 $n-1$ 阶实对称矩阵结论成立, 下面证明对 $n$ 阶实对称矩阵 $\boldsymbol{A}=(a_{ij})$ 结论也成立.
>
> 若 $\boldsymbol{A}=\boldsymbol{O}$, 结论显然成立. 若 $\boldsymbol{A}\neq\boldsymbol{O}$, 分两种情况讨论:
>
> (1) 若 $\boldsymbol{A}$ 的主对角元不全为零, 设 $a_{ii}\neq 0$, 则将 $\boldsymbol{A}$ 的第 $i$ 行乘以 $-a_{ij}/a_{ii}$ 加到第 $j$ 行上, 再将第 $i$ 列乘以 $-a_{ij}/a_{ii}$ 加到第 $j$ 列上 $(j\neq i)$, 这样可将 $\boldsymbol{A}$ 的第 $i$ 行和第 $i$ 列除 $a_{ii}$ 外的元素都化为零. 然后将第 $1$ 行与第 $i$ 行对调, 第 $1$ 列与第 $i$ 列对调, 得到合同矩阵
> $$\begin{pmatrix} a_{ii} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{A}_{n-1} \end{pmatrix},$$
> 其中 $\boldsymbol{A}_{n-1}$ 是 $n-1$ 阶实对称矩阵. 由归纳假设, $\boldsymbol{A}_{n-1}$ 可经对称初等变换化为对角矩阵, 从而 $\boldsymbol{A}$ 也可经对称初等变换化为对角矩阵.
>
> (2) 若 $\boldsymbol{A}$ 的主对角元全为零, 则由于 $\boldsymbol{A}\neq\boldsymbol{O}$, 必存在 $a_{ij}\neq 0$ $(i\neq j)$. 将 $\boldsymbol{A}$ 的第 $j$ 行加到第 $i$ 行上, 再将第 $j$ 列加到第 $i$ 列上, 则新矩阵的第 $(i,i)$ 元素为 $2a_{ij}\neq 0$, 化为情况 (1). $\square$


#### 2. 求二次型标准型的具体方法

设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 要求可逆矩阵 $\boldsymbol{C}$ 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}$ 为对角矩阵. 可以采用** paired elementary transformations** (成对初等变换法):

构造分块矩阵 $\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{I}_n \end{pmatrix}$, 对 $\boldsymbol{A}$ 进行对称初等变换, 同时对 $\boldsymbol{I}_n$ 只进行相应的行变换 (不进行列变换). 当 $\boldsymbol{A}$ 化为对角矩阵时, $\boldsymbol{I}_n$ 就变为所求的可逆矩阵 $\boldsymbol{C}$.

> [!example]
> 将二次型 $f(x_1,x_2,x_3)=2x_1^2+3x_2^2+4x_3^2+4x_1x_2+4x_1x_3+6x_2x_3$ 化为标准型.

> [!solution]-
> $f$ 的相伴矩阵为 $\boldsymbol{A}=\begin{pmatrix} 2 & 2 & 2 \\ 2 & 3 & 3 \\ 2 & 3 & 4 \end{pmatrix}$. 对 $\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{I}_3 \end{pmatrix}$ 进行对称初等变换:
> $$\begin{pmatrix} 2 & 2 & 2 \\ 2 & 3 & 3 \\ 2 & 3 & 4 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{\substack{R_2-R_1,R_3-R_1}} \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 2 \\ 1 & -1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{\substack{C_2-C_1,C_3-C_1}} \cdots$$
> 最终可得标准型. $\square$


### §8.3 归纳法的应用

归纳法是处理二次型与矩阵问题的重要方法之一. 下面通过几个典型例题来说明归纳法的应用.

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: 存在正实数 $c$, 使得对任意 $n$ 维实列向量 $\boldsymbol{x}$, 都有 $|\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}|\leq c\boldsymbol{x}'\boldsymbol{x}$.

> [!proof]-
> 设 $\boldsymbol{A}=(a_{ij})$, 则 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j$. 由 Cauchy-Schwarz 不等式,
> $$|\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}|\leq \sum_{i=1}^{n}\sum_{j=1}^{n}|a_{ij}||x_i||x_j|\leq \max_{i,j}|a_{ij}|\cdot\left(\sum_{i=1}^{n}|x_i|\right)^2.$$
> 设 $c_1=\max_{i,j}|a_{ij}|$, 则 $\left(\sum_{i=1}^{n}|x_i|\right)^2\leq n\sum_{i=1}^{n}x_i^2=n\boldsymbol{x}'\boldsymbol{x}$. 取 $c=nc_1$, 即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: $\boldsymbol{A}^{-1}$ 也是正定阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 所以存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{A}^{-1}=(\boldsymbol{C}'\boldsymbol{C})^{-1}=\boldsymbol{C}^{-1}(\boldsymbol{C}')^{-1}=\boldsymbol{C}^{-1}(\boldsymbol{C}^{-1})'$, 故 $\boldsymbol{A}^{-1}$ 也是正定阵. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}$ 的所有顺序主子式都大于零, 证明: $\boldsymbol{A}$ 是正定阵.

> [!proof]-
> 对阶数 $n$ 用归纳法. 当 $n=1$ 时结论显然成立. 假设对 $n-1$ 阶实对称矩阵结论成立. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix}$, 其中 $\boldsymbol{A}_{n-1}$ 是 $\boldsymbol{A}$ 的 $n-1$ 阶顺序主子阵. 由假设, $\boldsymbol{A}_{n-1}$ 正定. 对 $\boldsymbol{A}$ 进行对称分块初等变换:
> $$\begin{pmatrix} \boldsymbol{I}_{n-1} & \boldsymbol{O} \\ -\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1} & 1 \end{pmatrix} \begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix} \begin{pmatrix} \boldsymbol{I}_{n-1} & -\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha} \\ \boldsymbol{O} & 1 \end{pmatrix}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{O} \\ \boldsymbol{O} & a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha} \end{pmatrix}.$$
> 两边取行列式得 $|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})$. 因为 $|\boldsymbol{A}|>0$, $|\boldsymbol{A}_{n-1}|>0$, 所以 $a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}>0$. 又 $\boldsymbol{A}_{n-1}$ 正定, 故上式右端正定, 从而 $\boldsymbol{A}$ 正定. $\square$


### §8.4 合同标准型的应用

合同标准型是处理二次型与矩阵问题的重要工具. 本节通过一些典型例题, 展示合同标准型在二次型理论中的应用.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $r(\boldsymbol{A})=r$, 则 $\boldsymbol{A}$ 合同于对角矩阵 $\mathrm{diag}\{a_1,a_2,\cdots,a_r,0,\cdots,0\}$, 其中 $a_1,a_2,\cdots,a_r$ 均不为零.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $p(\boldsymbol{A})$, $q(\boldsymbol{A})$ 分别表示 $\boldsymbol{A}$ 的正、负惯性指数, 则
> $$p(\boldsymbol{A})+q(\boldsymbol{A})=r(\boldsymbol{A}).$$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: 存在 $n$ 阶正定阵 $\boldsymbol{B}$ 和 $n$ 阶半正定阵 $\boldsymbol{C}$, 使得 $\boldsymbol{A}=\boldsymbol{B}-\boldsymbol{C}$, 且 $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{O}$.

> [!proof]-
> 因为 $\boldsymbol{A}$ 是实对称矩阵, 所以存在正交矩阵 $\boldsymbol{P}$, 使得
> $$\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}\boldsymbol{P}.$$
> 令 $\mu_i=\max\{\lambda_i,0\}$, $\nu_i=\max\{-\lambda_i,0\}$, 则 $\lambda_i=\mu_i-\nu_i$, $\mu_i\nu_i=0$. 设
> $$\boldsymbol{B}=\boldsymbol{P}'\mathrm{diag}\{\mu_1,\mu_2,\cdots,\mu_n\}\boldsymbol{P},\quad \boldsymbol{C}=\boldsymbol{P}'\mathrm{diag}\{\nu_1,\nu_2,\cdots,\nu_n\}\boldsymbol{P}.$$
> 则 $\boldsymbol{B}$ 半正定, $\boldsymbol{C}$ 半正定, $\boldsymbol{A}=\boldsymbol{B}-\boldsymbol{C}$, 且 $\boldsymbol{B}\boldsymbol{C}=\boldsymbol{O}$. 若 $\boldsymbol{A}$ 正定, 则 $\lambda_i>0$ 对所有 $i$ 成立, 此时 $\nu_i=0$, 故 $\boldsymbol{C}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 所以存在非异实矩阵 $\boldsymbol{C}_1$, 使得 $\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1=\boldsymbol{I}_n$. 又 $\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1$ 仍是实对称矩阵, 故存在正交矩阵 $\boldsymbol{C}_2$, 使得 $\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1)\boldsymbol{C}_2$ 为对角矩阵. 令 $\boldsymbol{C}=\boldsymbol{C}_1\boldsymbol{C}_2$, 则 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1)\boldsymbol{C}_2=\boldsymbol{C}_2'\boldsymbol{C}_2=\boldsymbol{I}_n$, 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵. $\square$

> [!remark]
> 上例的结论称为**同时合同对角化**, 是处理两个矩阵同时合同问题的有力工具.


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 证明: $\boldsymbol{A}+\boldsymbol{B}$ 也是正定阵.

> [!proof]-
> 对任意非零实列向量 $\boldsymbol{x}$, 由于 $\boldsymbol{A}$, $\boldsymbol{B}$ 都正定, 有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$, $\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}>0$, 因此 $\boldsymbol{x}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}>0$, 故 $\boldsymbol{A}+\boldsymbol{B}$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶半正定阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$, 且等号成立当且仅当 $\boldsymbol{B}=\boldsymbol{O}$.

> [!proof]-
> 由例 8.8 可知, 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i\geq 0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=|\boldsymbol{C}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{C}|=|\boldsymbol{I}_n+\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}|=\prod_{i=1}^{n}(1+\lambda_i)\geq 1=|\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}|=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 因此 $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$. 等号成立当且仅当 $\lambda_1=\lambda_2=\cdots=\lambda_n=0$, 即 $\boldsymbol{B}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 且 $\boldsymbol{A}-\boldsymbol{B}$ 正定, 证明: $\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1}$ 也是正定阵.

> [!proof]-
> 由 $\boldsymbol{A}-\boldsymbol{B}$ 正定可知 $\boldsymbol{A}=\boldsymbol{B}+(\boldsymbol{A}-\boldsymbol{B})$ 是两个正定阵之和, 故 $\boldsymbol{A}$ 正定. 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$, 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$, 其中 $\lambda_i>0$. 由 $\boldsymbol{C}'(\boldsymbol{A}-\boldsymbol{B})\boldsymbol{C}=\mathrm{diag}\{1-\lambda_1,\cdots,1-\lambda_n\}$ 正定, 知 $1-\lambda_i>0$, 即 $0<\lambda_i<1$. 于是
> $$\boldsymbol{C}^{-1}(\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1})(\boldsymbol{C}')^{-1}=(\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C})^{-1}-(\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C})^{-1}=\mathrm{diag}\{\lambda_1^{-1}-1,\cdots,\lambda_n^{-1}-1\}.$$
> 由 $0<\lambda_i<1$ 知 $\lambda_i^{-1}>1$, 故 $\lambda_i^{-1}-1>0$, 因此 $\boldsymbol{B}^{-1}-\boldsymbol{A}^{-1}$ 正定. $\square$


### §8.5 多变元二次型的计算

本节讨论多变元二次型的计算方法, 包括配方法和正交变换法.

> [!example]
> 用配方法将二次型 $f(x_1,x_2,x_3)=x_1^2+2x_2^2+5x_3^2+2x_1x_2+2x_1x_3+6x_2x_3$ 化为标准型, 并求所用的可逆线性变换.

> [!solution]-
> 先对 $x_1$ 配方:
> $$\begin{aligned} f &= x_1^2+2x_1(x_2+x_3)+2x_2^2+5x_3^2+6x_2x_3 \\
> &= [x_1+(x_2+x_3)]^2-(x_2+x_3)^2+2x_2^2+5x_3^2+6x_2x_3 \\
> &= (x_1+x_2+x_3)^2+x_2^2+4x_3^2+4x_2x_3. \end{aligned}$$
> 再对 $x_2$ 配方:
> $$f = (x_1+x_2+x_3)^2+(x_2+2x_3)^2.$$
> 令
> $$\begin{cases} y_1=x_1+x_2+x_3, \\ y_2=x_2+2x_3, \\ y_3=x_3, \end{cases}$$
> 则 $f=y_1^2+y_2^2$. 所用可逆线性变换为
> $$\begin{cases} x_1=y_1-y_2+y_3, \\ x_2=y_2-2y_3, \\ x_3=y_3. \end{cases}$$
> $\square$

> [!remark]
> 配方法的关键是: 若二次型含有某个变量的平方项, 则先将所有含该变量的项配成完全平方, 然后对剩余变量重复此过程.


> [!example]
> 用配方法将二次型 $f(x_1,x_2,x_3)=2x_1x_2+2x_1x_3-6x_2x_3$ 化为标准型.

> [!solution]-
> 由于 $f$ 不含平方项, 但 $x_1x_2$ 项系数不为零, 故作可逆线性变换
> $$\begin{cases} x_1=y_1+y_2, \\ x_2=y_1-y_2, \\ x_3=y_3. \end{cases}$$
> 代入得 $f=2(y_1+y_2)(y_1-y_2)+2(y_1+y_2)y_3-6(y_1-y_2)y_3=2y_1^2-2y_2^2-4y_1y_3+8y_2y_3$.
> 再配方:
> $$\begin{aligned} f &= 2(y_1^2-2y_1y_3)-2y_2^2+8y_2y_3 \\
> &= 2(y_1-y_3)^2-2y_3^2-2y_2^2+8y_2y_3 \\
> &= 2(y_1-y_3)^2-2(y_2^2-4y_2y_3)-2y_3^2 \\
> &= 2(y_1-y_3)^2-2(y_2-2y_3)^2+6y_3^2. \end{aligned}$$
> 令 $z_1=y_1-y_3$, $z_2=y_2-2y_3$, $z_3=y_3$, 则 $f=2z_1^2-2z_2^2+6z_3^2$. $\square$


> [!remark]
> 对于不含平方项的二次型, 先作辅助变换产生平方项, 然后再配方. 常用的辅助变换有
> $$\begin{cases} x_i=y_i+y_j, \\ x_j=y_i-y_j, \\ x_k=y_k \ (k\neq i,j) \end{cases}$$
> 这样可产生 $2y_i^2-2y_j^2$ 项.

#### 正交变换法

> [!theorem]
> 对任意 $n$ 元实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$, 存在正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ ($\boldsymbol{P}$ 为正交矩阵), 使得
> $$f=\lambda_1y_1^2+\lambda_2y_2^2+\cdots+\lambda_ny_n^2,$$
> 其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的全部特征值.

正交变换法的步骤:
1. 写出二次型的相伴矩阵 $\boldsymbol{A}$;
2. 求 $\boldsymbol{A}$ 的所有特征值 $\lambda_1,\lambda_2,\cdots,\lambda_n$;
3. 对每个特征值求出相应的特征向量, 并用 Schmidt 正交化方法将重特征值的特征向量正交化、单位化;
4. 将所有单位正交特征向量作为列向量构成正交矩阵 $\boldsymbol{P}$, 则正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将二次型化为标准型.


> [!example]
> 用正交变换法将二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+4x_1x_2+4x_1x_3+4x_2x_3$ 化为标准型.

> [!solution]-
> $f$ 的相伴矩阵为 $\boldsymbol{A}=\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 2 & 2 & 1 \end{pmatrix}$.
>
> 特征多项式 $|\lambda\boldsymbol{I}-\boldsymbol{A}|=\begin{vmatrix} \lambda-1 & -2 & -2 \\ -2 & \lambda-1 & -2 \\ -2 & -2 & \lambda-1 \end{vmatrix}=(\lambda+1)^2(\lambda-5)$,
>
> 特征值为 $\lambda_1=\lambda_2=-1$, $\lambda_3=5$.
>
> 对 $\lambda=-1$, 解 $(-\boldsymbol{I}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}$, 得基础解系 $\boldsymbol{\alpha}_1=(-1,1,0)'$, $\boldsymbol{\alpha}_2=(-1,0,1)'$. 正交化:
> $$\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1=(-1,1,0)',\quad \boldsymbol{\beta}_2=\boldsymbol{\alpha}_2-\frac{\boldsymbol{\alpha}_2'\boldsymbol{\beta}_1}{\boldsymbol{\beta}_1'\boldsymbol{\beta}_1}\boldsymbol{\beta}_1=\left(-\frac{1}{2},-\frac{1}{2},1\right)'.$$
> 单位化得 $\boldsymbol{\eta}_1=\frac{1}{\sqrt{2}}(-1,1,0)'$, $\boldsymbol{\eta}_2=\frac{1}{\sqrt{6}}(-1,-1,2)'$.
>
> 对 $\lambda=5$, 解 $(5\boldsymbol{I}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}$, 得 $\boldsymbol{\alpha}_3=(1,1,1)'$, 单位化得 $\boldsymbol{\eta}_3=\frac{1}{\sqrt{3}}(1,1,1)'$.
>
> 令 $\boldsymbol{P}=(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\boldsymbol{\eta}_3)$, 则正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将 $f$ 化为 $-y_1^2-y_2^2+5y_3^2$. $\square$


> [!example]
> 设 $f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2-2x_1x_2+6x_1x_3-6x_2x_3$ 的秩为 2.
> (1) 求常数 $c$;
> (2) 用正交变换化 $f$ 为标准型.

> [!solution]-
> (1) $f$ 的相伴矩阵 $\boldsymbol{A}=\begin{pmatrix} 5 & -1 & 3 \\ -1 & 5 & -3 \\ 3 & -3 & c \end{pmatrix}$. 由 $r(\boldsymbol{A})=2$, 知 $|\boldsymbol{A}|=0$. 计算得 $|\boldsymbol{A}|=24c-72$, 故 $c=3$.
>
> (2) 特征多项式 $|\lambda\boldsymbol{I}-\boldsymbol{A}|=\lambda(\lambda-4)(\lambda-9)$, 特征值为 $0,4,9$. 求出对应的单位正交特征向量, 可得正交矩阵 $\boldsymbol{P}$, 正交变换 $\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$ 将 $f$ 化为 $4y_2^2+9y_3^2$. $\square$


### §8.6 矩阵与二次型

本节从矩阵的角度研究二次型, 探讨二次型与矩阵之间的深层联系.

> [!theorem]
> 实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 正定 (半正定) 当且仅当 $\boldsymbol{A}$ 的所有顺序主子式都大于零 (大于等于零).

> [!proof]-
> (必要性) 设 $f$ 正定, 对任意 $k$, 令 $\boldsymbol{x}=(x_1,\cdots,x_k,0,\cdots,0)'$, 则
> $$f_k(x_1,\cdots,x_k)=f(x_1,\cdots,x_k,0,\cdots,0)=\sum_{i=1}^{k}\sum_{j=1}^{k}a_{ij}x_ix_j$$
> 是 $k$ 元正定二次型, 其相伴矩阵恰好是 $\boldsymbol{A}$ 的 $k$ 阶顺序主子阵 $\boldsymbol{A}_k$, 故 $|\boldsymbol{A}_k|>0$.
>
> (充分性) 对阶数 $n$ 用归纳法. $n=1$ 时显然. 假设对 $n-1$ 成立. 设 $\boldsymbol{A}_{n-1}$ 是 $\boldsymbol{A}$ 的 $n-1$ 阶顺序主子阵, 由归纳假设 $\boldsymbol{A}_{n-1}$ 正定. 对 $\boldsymbol{A}$ 进行对称分块初等变换, 可得合同矩阵 $\mathrm{diag}\{\boldsymbol{A}_{n-1},a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}\}$. 由 $|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})>0$ 及 $|\boldsymbol{A}_{n-1}|>0$, 知 $a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha}>0$, 故 $\boldsymbol{A}$ 正定. $\square$

> [!remark]
> 对半正定阵, 顺序主子式非负是必要条件但不是充分条件. 反例: $\boldsymbol{A}=\mathrm{diag}\{1,0,-1\}$ 的顺序主子式都非负, 但 $\boldsymbol{A}$ 不是半正定阵.


> [!theorem]
> 实二次型 $f=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}$ 负定当且仅当 $\boldsymbol{A}$ 的所有奇数阶顺序主子式都小于零, 偶数阶顺序主子式都大于零.

> [!proof]-
> $f$ 负定当且仅当 $-f=\boldsymbol{x}'(-\boldsymbol{A})\boldsymbol{x}$ 正定, 即 $-\boldsymbol{A}$ 的所有顺序主子式大于零. 这等价于 $\boldsymbol{A}$ 的奇数阶顺序主子式小于零, 偶数阶顺序主子式大于零. $\square$

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 半正定;
> (2) 对任意正实数 $t$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定;
> (3) $\boldsymbol{A}$ 的所有主子式都大于等于零;
> (4) $\boldsymbol{A}$ 的所有特征值都大于等于零.

> [!proof]-
> (1)$\Rightarrow$(2): 对任意非零 $\boldsymbol{x}$, $\boldsymbol{x}'(t\boldsymbol{I}_n+\boldsymbol{A})\boldsymbol{x}=t\boldsymbol{x}'\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq t\boldsymbol{x}'\boldsymbol{x}>0$.
>
> (2)$\Rightarrow$(3): 设 $\boldsymbol{A}_k$ 是 $\boldsymbol{A}$ 的任一 $k$ 阶主子阵, 则对充分大的 $t$, $t\boldsymbol{I}_k+\boldsymbol{A}_k$ 的所有顺序主子式 (作为 $t$ 的多项式) 在 $t>0$ 时为正, 故 $t\boldsymbol{I}_k+\boldsymbol{A}_k$ 正定, 从而 $|-t\boldsymbol{I}_k+\boldsymbol{A}_k|=(-1)^k|t\boldsymbol{I}_k-\boldsymbol{A}_k|$. 由 $t\boldsymbol{I}_k-\boldsymbol{A}_k$ 在 $t$ 充分大时正定, 知 $\boldsymbol{A}_k$ 的所有特征值 $\leq t$, 令 $t\to 0^+$, 即得 $\boldsymbol{A}_k$ 的所有特征值 $\geq 0$, 故 $|\boldsymbol{A}_k|\geq 0$.
>
> (3)$\Rightarrow$(4): 由特征值是特征多项式的根, 而特征多项式的系数可用主子式表示.
>
> (4)$\Rightarrow$(1): 设 $\boldsymbol{A}$ 的特征值为 $\lambda_1,\cdots,\lambda_n\geq 0$, 则存在正交阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}\boldsymbol{P}$, 由此易证 $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶半正定阵, 证明: 若 $\boldsymbol{A}$ 正定, 则 $|$\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$; 若 $\boldsymbol{A}$ 半正定, 则 $|$\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|$.

> [!proof]-
> 当 $\boldsymbol{A}$ 正定时, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$ 半正定, 即 $\lambda_i\geq 0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=\prod_{i=1}^n(1+\lambda_i)\geq 1=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 当 $\boldsymbol{A}$ 半正定时, 由极限性质, 对 $t>0$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定, 故
> $$|(t\boldsymbol{I}_n+\boldsymbol{A})+\boldsymbol{B}|\geq|t\boldsymbol{I}_n+\boldsymbol{A}|+|\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|.$$
> 令 $t\to 0^+$, 得 $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|+|\boldsymbol{B}|$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: $\boldsymbol{A}$ 半正定当且仅当存在实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$.

> [!proof]-
> ($\Rightarrow$) 设 $\boldsymbol{A}$ 半正定, 秩为 $r$, 则存在非异实矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{a_1,\cdots,a_r,0,\cdots,0\}$ 且 $a_i>0$. 令 $\boldsymbol{D}=\mathrm{diag}\{\sqrt{a_1},\cdots,\sqrt{a_r},0,\cdots,0\}$, 则 $\boldsymbol{A}=(\boldsymbol{P}')^{-1}\boldsymbol{D}^2\boldsymbol{P}^{-1}=(\boldsymbol{D}\boldsymbol{P}^{-1})'(\boldsymbol{D}\boldsymbol{P}^{-1})$. 取 $\boldsymbol{C}=\boldsymbol{D}\boldsymbol{P}^{-1}$ 即可.
>
> ($\Leftarrow$) 设 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$, 则对任意 $\boldsymbol{x}$, $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=(\boldsymbol{C}\boldsymbol{x})'(\boldsymbol{C}\boldsymbol{x})=||\boldsymbol{C}\boldsymbol{x}||^2\geq 0$, 故 $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定实对称矩阵, $\boldsymbol{S}$ 是 $n$ 阶实反对称矩阵, 证明: $|\boldsymbol{A}+\boldsymbol{S}|\geq|\boldsymbol{A}|$.

> [!proof]-
> 先证 $\boldsymbol{A}$ 正定时结论成立. 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}$ 仍反对称. 反对称矩阵的特征值为零或纯虚数成对出现, 设其特征值为 $\pm ib_1,\cdots,\pm ib_k,0,\cdots,0$, 则
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{S}|=|\boldsymbol{I}_n+\boldsymbol{C}'\boldsymbol{S}\boldsymbol{C}|=\prod_{j=1}^k(1+b_j^2)\geq 1=|\boldsymbol{C}|^2|\boldsymbol{A}|.$$
> 当 $\boldsymbol{A}$ 半正定时, 对 $t>0$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定, 故 $|(t\boldsymbol{I}_n+\boldsymbol{A})+\boldsymbol{S}|\geq|t\boldsymbol{I}_n+\boldsymbol{A}|$. 令 $t\to 0^+$, 即得结论. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 存在非异实矩阵 $\boldsymbol{C}$ 使得 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵.

> [!proof]-
> 因为 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}_1$ 使得 $\boldsymbol{C}_1'\boldsymbol{A}\boldsymbol{C}_1=\boldsymbol{I}_n$. $\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1$ 为实对称矩阵, 故存在正交矩阵 $\boldsymbol{C}_2$ 使得 $\boldsymbol{C}_2'(\boldsymbol{C}_1'\boldsymbol{B}\boldsymbol{C}_1)\boldsymbol{C}_2$ 为对角矩阵. 令 $\boldsymbol{C}=\boldsymbol{C}_1\boldsymbol{C}_2$, 则 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$ 且 $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}$ 为对角矩阵. $\square$

> [!theorem] (Hadamard 不等式)
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶半正定实对称矩阵, 则 $|\boldsymbol{A}|\leq a_{11}a_{22}\cdots a_{nn}$.

> [!proof]-
> 对 $n$ 用归纳法. $n=1$ 时显然. 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{n-1} & \boldsymbol{\alpha} \\ \boldsymbol{\alpha}' & a_{nn} \end{pmatrix}$, 其中 $\boldsymbol{A}_{n-1}$ 半正定. 若 $|\boldsymbol{A}|=0$, 结论成立. 若 $|\boldsymbol{A}|>0$, 则 $\boldsymbol{A}$ 正定, $\boldsymbol{A}_{n-1}$ 也正定. 由对称分块初等变换,
> $$|\boldsymbol{A}|=|\boldsymbol{A}_{n-1}|(a_{nn}-\boldsymbol{\alpha}'\boldsymbol{A}_{n-1}^{-1}\boldsymbol{\alpha})\leq|\boldsymbol{A}_{n-1}|a_{nn}\leq a_{11}\cdots a_{nn}.$$
> $\square$


> [!corollary]
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶实矩阵, 则 $|\boldsymbol{A}|^2\leq\prod_{j=1}^n\sum_{i=1}^n a_{ij}^2$.

> [!proof]-
> $\boldsymbol{A}'\boldsymbol{A}$ 半正定, 其对角元为 $\sum_{i=1}^n a_{ij}^2$. 由 Hadamard 不等式, $|\boldsymbol{A}'\boldsymbol{A}|\leq\prod_{j=1}^n\sum_{i=1}^n a_{ij}^2$. 又 $|\boldsymbol{A}'\boldsymbol{A}|=|\boldsymbol{A}|^2$, 即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶正定阵, 且 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}$ 正定, 证明: $\boldsymbol{A}$ 正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的任一特征值, $\boldsymbol{\alpha}$ 是相应的特征向量, 则 $\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$. 由 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}$ 正定,
> $$\boldsymbol{\alpha}'(\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A})\boldsymbol{\alpha}=2\lambda\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0.$$
> 又 $\boldsymbol{B}$ 正定, $\boldsymbol{\alpha}\neq\boldsymbol{0}$, 故 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$, 从而 $\lambda>0$, $\boldsymbol{A}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 使得 $\boldsymbol{A}\boldsymbol{B}'=\boldsymbol{B}\boldsymbol{A}$, 证明: $\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A}$ 正定当且仅当 $\boldsymbol{B}$ 的所有特征值的实部都大于零.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$. 令 $\boldsymbol{D}=\boldsymbol{C}^{-1}\boldsymbol{B}\boldsymbol{C}$, 条件变为 $\boldsymbol{D}'=\boldsymbol{D}$, 即 $\boldsymbol{D}$ 对称. 又 $\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A}$ 正定等价于 $\boldsymbol{C}'(\boldsymbol{A}\boldsymbol{B}'+\boldsymbol{B}\boldsymbol{A})\boldsymbol{C}=\boldsymbol{D}'+\boldsymbol{D}=2\boldsymbol{D}$ 正定, 即 $\boldsymbol{D}$ 正定, 其特征值全为正. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{B})=r$. 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定, 且 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r$.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$, 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. 又 $\boldsymbol{A}$ 正定, 故 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})=r$. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|>0$.

> [!proof]-
> 对任意非零 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{A}+\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$ (因为 $\boldsymbol{x}'\boldsymbol{B}\boldsymbol{x}=0$). 故 $\boldsymbol{A}+\boldsymbol{B}$ 正定, $|\boldsymbol{A}+\boldsymbol{B}|>0$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: 对任意正整数 $k$, $\boldsymbol{A}^k$ 也是正定阵.

> [!proof]-
> 设 $\lambda_1,\cdots,\lambda_n$ 是 $\boldsymbol{A}$ 的特征值, 则 $\lambda_i>0$, $\boldsymbol{A}^k$ 的特征值为 $\lambda_1^k,\cdots,\lambda_n^k>0$, 故 $\boldsymbol{A}^k$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^3-3\boldsymbol{A}^2+5\boldsymbol{A}-3\boldsymbol{I}_n=\boldsymbol{O}$, 证明: $\boldsymbol{A}$ 正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, 则 $\lambda^3-3\lambda^2+5\lambda-3=0$, 即 $(\lambda-1)(\lambda^2-2\lambda+3)=0$. 解得 $\lambda=1$ 或 $\lambda=1\pm\sqrt{2}i$. 因 $\boldsymbol{A}$ 实对称, 特征值均为实数, 故 $\lambda=1>0$, $\boldsymbol{A}$ 正定. $\square$


### §8.7 正定型与正定阵

本节系统地讨论正定二次型与正定矩阵的判定准则及其应用.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 正定 (即 $\boldsymbol{A}$ 的正惯性指数 $p=n$);
> (2) $\boldsymbol{A}$ 合同于单位矩阵 $\boldsymbol{I}_n$;
> (3) 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$;
> (4) $\boldsymbol{A}$ 的所有顺序主子式都大于零;
> (5) $\boldsymbol{A}$ 的所有主子式都大于零;
> (6) $\boldsymbol{A}$ 的所有特征值都大于零;
> (7) 对任意 $n$ 阶半正定阵 $\boldsymbol{B}$, $|\boldsymbol{A}+\boldsymbol{B}|\geq|\boldsymbol{A}|$.

> [!proof]-
> (1)$\Leftrightarrow$(2): 由惯性定理, $\boldsymbol{A}$ 合同于 $\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q,\boldsymbol{O}\}$. $p=n$ 当且仅当 $\boldsymbol{A}$ 合同于 $\boldsymbol{I}_n$.
>
> (2)$\Leftrightarrow$(3): $\boldsymbol{A}$ 合同于 $\boldsymbol{I}_n$ 当且仅当存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{I}_n\boldsymbol{C}=\boldsymbol{C}'\boldsymbol{C}$.
>
> (1)$\Leftrightarrow$(4): 即顺序主子式判定定理.
>
> (4)$\Leftrightarrow$(5): 显然.
>
> (1)$\Leftrightarrow$(6): 正惯性指数等于正特征值的个数.
>
> (1)$\Leftrightarrow$(7): 已证. $\square$


> [!example]
> 设 $\boldsymbol{A}=(a_{ij})$ 是 $n$ 阶正定阵, 证明: $|\boldsymbol{A}|\leq a_{11}a_{22}\cdots a_{nn}$, 等号成立当且仅当 $\boldsymbol{A}$ 为对角矩阵.

> [!proof]-
> 由 Hadamard 不等式即得. 等号成立当且仅当 $\boldsymbol{A}$ 为对角矩阵. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{C}'(\boldsymbol{C}\boldsymbol{B})$, 故 $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{C}\boldsymbol{B})=r(\boldsymbol{B})$. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实对称矩阵, 证明: 若 $\boldsymbol{A}\boldsymbol{B}$ 正定, 则 $\boldsymbol{B}$ 正定.

> [!proof]-
> 由例 8.26, $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$. 又 $\boldsymbol{A}\boldsymbol{B}$ 正定, 故 $r(\boldsymbol{A}\boldsymbol{B})=n$, 从而 $r(\boldsymbol{B})=n$, $\boldsymbol{B}$ 非异. 设 $\lambda$ 是 $\boldsymbol{B}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{A}\boldsymbol{\alpha}$. 由 $\boldsymbol{A}\boldsymbol{B}$ 正定, $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}>0$. 又 $\boldsymbol{A}$ 正定, 故 $\lambda>0$, $\boldsymbol{B}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且对任意 $n$ 维列向量 $\boldsymbol{x}$ 都有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq 0$. 证明: 若存在 $\boldsymbol{x}_0$ 使 $\boldsymbol{x}_0'\boldsymbol{A}\boldsymbol{x}_0=0$, 则 $\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{0}$.

> [!proof]-
> 由条件, $\boldsymbol{A}$ 半正定. 对任意实数 $t$ 和任意 $n$ 维列向量 $\boldsymbol{y}$,
> $$(\boldsymbol{x}_0+t\boldsymbol{y})'\boldsymbol{A}(\boldsymbol{x}_0+t\boldsymbol{y})\geq 0.$$
> 展开得 $2t\boldsymbol{y}'\boldsymbol{A}\boldsymbol{x}_0+t^2\boldsymbol{y}'\boldsymbol{A}\boldsymbol{y}\geq 0$. 若 $\boldsymbol{A}\boldsymbol{x}_0\neq\boldsymbol{0}$, 取 $\boldsymbol{y}=\boldsymbol{A}\boldsymbol{x}_0$, 则当 $t$ 为充分小的负数时, $2t||\boldsymbol{A}\boldsymbol{x}_0||^2+t^2\boldsymbol{x}_0'\boldsymbol{A}^3\boldsymbol{x}_0<0$, 矛盾. 故 $\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{0}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$, 证明: $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}\boldsymbol{x}\geq 0$ (因 $\boldsymbol{A}$ 半正定). 又 $\boldsymbol{A}\boldsymbol{B}=-\boldsymbol{B}\boldsymbol{A}$, 故 $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=-\boldsymbol{x}'\boldsymbol{B}'\boldsymbol{B}\boldsymbol{A}\boldsymbol{x}=-(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\leq 0$. 因此 $(\boldsymbol{A}\boldsymbol{B}\boldsymbol{x})'\boldsymbol{B}\boldsymbol{x}=0$, 由例 8.28 知 $\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})=\boldsymbol{0}$, 即 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{O}$, 从而 $\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, $\boldsymbol{B}$ 是 $n$ 阶正定阵, $\boldsymbol{C}$ 是 $n$ 阶半正定阵, 且 $\boldsymbol{A}=\boldsymbol{B}+\boldsymbol{C}$, $r(\boldsymbol{A})=r(\boldsymbol{B})$. 证明: $\boldsymbol{A}$ 半正定.

> [!proof]-
> 设 $\lambda$ 是 $\boldsymbol{A}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{\alpha}$. 又 $\boldsymbol{\alpha}'\boldsymbol{A}\boldsymbol{\alpha}=\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}+\boldsymbol{\alpha}'\boldsymbol{C}\boldsymbol{\alpha}\geq\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$ (若 $\boldsymbol{\alpha}\neq\boldsymbol{0}$). 由 $r(\boldsymbol{A})=r(\boldsymbol{B})$, $\boldsymbol{A}$ 的非零特征值个数等于 $\boldsymbol{B}$ 的正特征值个数, 均为 $r(\boldsymbol{B})$. 故 $\boldsymbol{A}$ 的特征值非负, $\boldsymbol{A}$ 半正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定当且仅当 $\boldsymbol{B}$ 非异.

> [!proof]-
> ($\Rightarrow$) 若 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定, 则 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=n$. 由 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\leq r(\boldsymbol{B})\leq n$, 知 $r(\boldsymbol{B})=n$, $\boldsymbol{B}$ 非异.
>
> ($\Leftarrow$) 若 $\boldsymbol{B}$ 非异, 则对任意 $\boldsymbol{x}\neq\boldsymbol{0}$, $\boldsymbol{B}\boldsymbol{x}\neq\boldsymbol{0}$, 故 $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})>0$, $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $m$ 阶正定阵, $\boldsymbol{B}$ 是 $m\times n$ 实矩阵, 证明: $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$.

> [!proof]-
> 由 $\boldsymbol{A}$ 正定, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$. 于是 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}=(\boldsymbol{C}\boldsymbol{B})'(\boldsymbol{C}\boldsymbol{B})$, 故 $r(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{C}\boldsymbol{B})=r(\boldsymbol{B})$. $\square$


> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 且 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$, 证明: $\boldsymbol{A}\boldsymbol{B}$ 正定.

> [!proof]-
> 由 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}$ 且 $\boldsymbol{A}$, $\boldsymbol{B}$ 都实对称, 知 $\boldsymbol{A}\boldsymbol{B}$ 实对称. 设 $\lambda$ 是 $\boldsymbol{A}\boldsymbol{B}$ 的特征值, $\boldsymbol{\alpha}$ 为特征向量, 则 $\boldsymbol{A}\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$, $\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. 于是 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}$. 由 $\boldsymbol{B}$ 正定, $\boldsymbol{A}^{-1}$ 正定, 知 $\boldsymbol{\alpha}'\boldsymbol{B}\boldsymbol{\alpha}>0$, $\boldsymbol{\alpha}'\boldsymbol{A}^{-1}\boldsymbol{\alpha}>0$, 故 $\lambda>0$, $\boldsymbol{A}\boldsymbol{B}$ 正定. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{A}$, 证明: 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{I}_r,\boldsymbol{O}\}$, 其中 $r=r(\boldsymbol{A})$.

> [!proof]-
> $\boldsymbol{A}$ 实对称, 故存在正交阵 $\boldsymbol{P}_1$ 使 $\boldsymbol{P}_1'\boldsymbol{A}\boldsymbol{P}_1=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$. 由 $\boldsymbol{A}^2=\boldsymbol{A}$, $\lambda_i^2=\lambda_i$, 故 $\lambda_i=0$ 或 $1$. 将对角元适当排列即得结论. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^2=\boldsymbol{I}_n$, 证明: 存在正交矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{P}'\boldsymbol{A}\boldsymbol{P}=\mathrm{diag}\{\boldsymbol{I}_p,-\boldsymbol{I}_q\}$, 其中 $p+q=n$.

> [!proof]-
> 类似上例, $\lambda_i^2=1$, 故 $\lambda_i=\pm 1$. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $k$ 为正整数, 证明: 存在唯一的 $n$ 阶半正定阵 $\boldsymbol{B}$ 使 $\boldsymbol{B}^k=\boldsymbol{A}$.

> [!proof]-
> 存在性: $\boldsymbol{A}$ 半正定, 故存在正交阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}\boldsymbol{P}$, $\lambda_i\geq 0$. 令 $\boldsymbol{B}=\boldsymbol{P}'\mathrm{diag}\{\sqrt[k]{\lambda_1},\cdots,\sqrt[k]{\lambda_n}\}\boldsymbol{P}$, 则 $\boldsymbol{B}$ 半正定且 $\boldsymbol{B}^k=\boldsymbol{A}$.
>
> 唯一性: 设 $\boldsymbol{B}_1$, $\boldsymbol{B}_2$ 都半正定且 $\boldsymbol{B}_1^k=\boldsymbol{B}_2^k=\boldsymbol{A}$. 设 $\boldsymbol{B}_1=\boldsymbol{P}_1'\mathrm{diag}\{\mu_1,\cdots,\mu_n\}\boldsymbol{P}_1$, $\boldsymbol{B}_2=\boldsymbol{P}_2'\mathrm{diag}\{\nu_1,\cdots,\nu_n\}\boldsymbol{P}_2$. 则 $\boldsymbol{B}_1^k=\boldsymbol{B}_2^k$ 的特征值为 $\mu_i^k=\nu_i^k$, 故 $\mu_i=\nu_i$, 从而 $\boldsymbol{B}_1=\boldsymbol{B}_2$. $\square$


> [!theorem]
> (Fischer 不等式) 设 $\boldsymbol{A}=\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{A}_{12} \\ \boldsymbol{A}_{21} & \boldsymbol{A}_{22} \end{pmatrix}$ 是 $n$ 阶正定阵, $\boldsymbol{A}_{11}$ 是 $k$ 阶主子阵, 则 $|\boldsymbol{A}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|$.

> [!proof]-
> 对 $\boldsymbol{A}$ 进行对称分块初等变换, 可得
> $$\boldsymbol{A}\cong\begin{pmatrix} \boldsymbol{A}_{11} & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12} \end{pmatrix}.$$
> 由 $\boldsymbol{A}$ 正定, $\boldsymbol{A}_{11}$ 正定, $\boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12}$ 也正定. 由 Hadamard 不等式,
> $$|\boldsymbol{A}|=|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}-\boldsymbol{A}_{21}\boldsymbol{A}_{11}^{-1}\boldsymbol{A}_{12}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|.$$
> $\square$


> [!corollary]
> 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{A}_{ii}$ ($i=1,\cdots,k$) 是其对角分块, 则 $|\boldsymbol{A}|\leq|\boldsymbol{A}_{11}||\boldsymbol{A}_{22}|\cdots|\boldsymbol{A}_{kk}|$.

> [!example]
> 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶正定阵, 证明: $|\boldsymbol{A}+\boldsymbol{B}|^{\frac{1}{n}}\geq|\boldsymbol{A}|^{\frac{1}{n}}+|\boldsymbol{B}|^{\frac{1}{n}}$.

> [!proof]-
> 由例 8.8, 存在非异实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{C}'\boldsymbol{A}\boldsymbol{C}=\boldsymbol{I}_n$, $\boldsymbol{C}'\boldsymbol{B}\boldsymbol{C}=\mathrm{diag}\{\lambda_1,\cdots,\lambda_n\}$, $\lambda_i>0$. 于是
> $$|\boldsymbol{C}|^2|\boldsymbol{A}+\boldsymbol{B}|=\prod_{i=1}^n(1+\lambda_i),\quad |\boldsymbol{C}|^2|\boldsymbol{A}|=1,\quad |\boldsymbol{C}|^2|\boldsymbol{B}|=\prod_{i=1}^n\lambda_i.$$
> 需证 $\prod_{i=1}^n(1+\lambda_i)^{\frac{1}{n}}\geq 1+(\prod_{i=1}^n\lambda_i)^{\frac{1}{n}}$. 由 Minkowski 不等式即得. $\square$


### §8.8 半正定型和半正定阵

本节讨论半正定二次型与半正定矩阵的理论.

> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则下列命题等价:
> (1) $\boldsymbol{A}$ 半正定;
> (2) $\boldsymbol{A}$ 的正惯性指数 $p=r(\boldsymbol{A})$;
> (3) $\boldsymbol{A}$ 合同于 $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$, 其中 $r=r(\boldsymbol{A})$;
> (4) 存在 $m\times n$ 实矩阵 $\boldsymbol{C}$ 使 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$ (其中 $r(\boldsymbol{C})=r$);
> (5) $\boldsymbol{A}$ 的所有主子式都大于等于零;
> (6) $\boldsymbol{A}$ 的所有特征值都大于等于零;
> (7) 对任意 $\varepsilon>0$, $\varepsilon\boldsymbol{I}_n+\boldsymbol{A}$ 正定.

> [!proof]-
> (1)$\Leftrightarrow$(2)$\Leftrightarrow$(3): 由惯性定理直接得到.
>
> (3)$\Leftrightarrow$(4): $\boldsymbol{A}$ 合同于 $\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}$ 当且仅当存在非异实矩阵 $\boldsymbol{P}$ 使 $\boldsymbol{A}=\boldsymbol{P}'\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}$. 令 $\boldsymbol{C}=\begin{pmatrix} \boldsymbol{I}_r & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{O} \end{pmatrix}\boldsymbol{P}$, 则 $\boldsymbol{A}=\boldsymbol{C}'\boldsymbol{C}$ 且 $r(\boldsymbol{C})=r$.
>
> (1)$\Leftrightarrow$(5): 已证.
>
> (1)$\Leftrightarrow$(6): 半正定阵的特征值非负.
>
> (1)$\Leftrightarrow$(7): $\boldsymbol{x}'(\varepsilon\boldsymbol{I}_n+\boldsymbol{A})\boldsymbol{x}=\varepsilon\boldsymbol{x}'\boldsymbol{x}+\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}>0$ 对 $\boldsymbol{x}\neq\boldsymbol{0}$ 成立. $\square$


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{A})=r(\boldsymbol{B}\boldsymbol{A})$. 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定.

> [!proof]-
> 由 $r(\boldsymbol{A})=r(\boldsymbol{B}\boldsymbol{A})$, 知 $\boldsymbol{B}\boldsymbol{x}=\boldsymbol{0}$ 的解空间包含 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}$ 的解空间. 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$, 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $\boldsymbol{A}+t\boldsymbol{B}$ 对任意实数 $t$ 半正定当且仅当 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$.

> [!proof]-
> ($\Leftarrow$) 若 $\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=\boldsymbol{O}$, 则对任意 $t$, $(\boldsymbol{A}+t\boldsymbol{B})^2=\boldsymbol{A}^2+t^2\boldsymbol{B}^2$, 且 $\boldsymbol{x}'(\boldsymbol{A}+t\boldsymbol{B})\boldsymbol{x}=\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}\geq 0$.
>
> ($\Rightarrow$) 设 $\boldsymbol{A}+t\boldsymbol{B}$ 对所有 $t$ 半正定. 取 $t=\pm\frac{1}{n}$, 令 $n\to\infty$, 由极限知 $\boldsymbol{B}$ 半正定且半负定, 故 $\boldsymbol{B}=\boldsymbol{O}$. $\square$


> [!theorem]
> 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 则 $\boldsymbol{A}$ 半正定当且仅当存在 $\boldsymbol{A}$ 的某个 $k$ 阶主子式 $D_k$ ($1\leq k\leq n$) 满足: $D_k>0$, 且包含 $D_k$ 的所有 $k+1$ 阶主子式 (若存在) 都大于零, ..., 包含 $D_k$ 的所有 $n$ 阶主子式 (即 $|\boldsymbol{A}|$) 大于零.

> [!remark]
> 注意: 半正定阵的顺序主子式非负是必要条件, 但不是充分条件.


> [!example]
> 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定.

> [!proof]-
> 对任意 $\boldsymbol{x}$, $\boldsymbol{x}'(\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B})\boldsymbol{x}=(\boldsymbol{B}\boldsymbol{x})'\boldsymbol{A}(\boldsymbol{B}\boldsymbol{x})\geq 0$ (因 $\boldsymbol{A}$ 半正定), 故 $\boldsymbol{B}'\boldsymbol{A}\boldsymbol{B}$ 半正定. $\square$

> [!example]
> 设 $\boldsymbol{A}$ 是 $m\times n$ 实矩阵, $\boldsymbol{B}$ 是 $s\times n$ 实矩阵, 证明: $r(\boldsymbol{A}'\boldsymbol{A}|\boldsymbol{B}'\boldsymbol{B})=r\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}$.

> [!proof]-
> 由例 8.31, $r(\boldsymbol{A}'\boldsymbol{A})=r(\boldsymbol{A})$. 又 $\boldsymbol{A}'\boldsymbol{A}$ 半正定, $\boldsymbol{B}'\boldsymbol{B}$ 半正定, 故
> $$r(\boldsymbol{A}'\boldsymbol{A}|\boldsymbol{B}'\boldsymbol{B})=r(\boldsymbol{A}'\boldsymbol{A}+\boldsymbol{B}'\boldsymbol{B})=r(\boldsymbol{A}'\boldsymbol{A})+r(\boldsymbol{B}'\boldsymbol{B})-r(\boldsymbol{A}'\boldsymbol{A}\boldsymbol{B}'\boldsymbol{B}).$$
> 另一方面, $r\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}=r(\boldsymbol{A}'\boldsymbol{A}+\boldsymbol{B}'\boldsymbol{B})$, 即得结论. $\square$


### §8.9 基础训练

本节提供二次型理论的基础训练题, 供读者巩固所学知识.

> [!exercise]
> 1. 用配方法将下列二次型化为标准型, 并写出所用的可逆线性变换:
> (1) $f(x_1,x_2,x_3)=x_1^2+2x_2^2+5x_3^2+2x_1x_2+2x_1x_3+6x_2x_3$;
> (2) $f(x_1,x_2,x_3)=2x_1x_2+4x_1x_3-2x_2x_3$.

> [!exercise]
> 2. 用正交变换法将二次型 $f(x_1,x_2,x_3)=2x_1^2+3x_2^2+3x_3^2+4x_2x_3$ 化为标准型, 并求出所用的正交变换.

> [!exercise]
> 3. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且对任意 $n$ 维列向量 $\boldsymbol{x}$ 都有 $\boldsymbol{x}'\boldsymbol{A}\boldsymbol{x}=0$. 证明: $\boldsymbol{A}=\boldsymbol{O}$.

> [!exercise]
> 4. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实反对称矩阵, 证明: $\boldsymbol{A}+\boldsymbol{B}$ 非异.

> [!exercise]
> 5. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, 证明: $\boldsymbol{A}^*+\boldsymbol{A}^{-1}$ 正定.

> [!exercise]
> 6. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 且 $\boldsymbol{A}^3-6\boldsymbol{A}^2+11\boldsymbol{A}-6\boldsymbol{I}_n=\boldsymbol{O}$. 证明: $\boldsymbol{A}$ 正定.

> [!exercise]
> 7. 设 $\boldsymbol{A}$ 是 $n$ 阶实对称矩阵, 证明: $\boldsymbol{A}$ 半正定当且仅当对任意正实数 $t$, $t\boldsymbol{I}_n+\boldsymbol{A}$ 正定.

> [!exercise]
> 8. 设 $\boldsymbol{A}$ 是 $n$ 阶半正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 且 $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B})$. 证明: $\boldsymbol{A}\boldsymbol{B}\boldsymbol{B}'$ 半正定.

> [!exercise]
> 9. 设 $\boldsymbol{A}$ 是 $n$ 阶正定阵, $\boldsymbol{B}$ 是 $n$ 阶实矩阵, 证明: $r(\boldsymbol{A}\boldsymbol{B})=r(\boldsymbol{B}\boldsymbol{A})=r(\boldsymbol{B})$.

> [!exercise]
> 10. 设 $\boldsymbol{A}$, $\boldsymbol{B}$ 都是 $n$ 阶半正定阵, 证明: $r(\boldsymbol{A}+\boldsymbol{B})\geq\max\{r(\boldsymbol{A}),r(\boldsymbol{B})\}$.


