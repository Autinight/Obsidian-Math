> [!exercise] 5.2
> 设 $G$ 是 $r$ 维李群，$\varphi:G\times G\to G$ 是 $G$ 的乘法运算，若 $X\in\mathfrak{X}(G)$ 对于任意 $a\in G$ 满足
> $$
> (R_a)_{*g}(X(g))=X(g\cdot a),\qquad \forall g\in G,
> $$
> 则称 $X$ 是 $G$ 上的右不变向量场。
>
> (1) 设 $(U;u^i)$ 是 $g\in G$ 的局部坐标系，$(W;v^i)$ 是单位元素 $e\in G$ 的局部坐标系，$V$ 是 $g$ 的一个开邻域，$V\subset U$，$v^i=u^i|_V$，且 $\varphi(W\times V)\subset U$。设 $Y_i$ 是由 $\left.\dfrac{\partial}{\partial u^i}\right|_e$ 生成的右不变向量场，求 $Y_i$ 在 $V$ 上的局部坐标表达式。
>
> (2) 设 $(U;u^i)$ 是单位元素 $e\in G$ 的局部坐标系，$W,V$ 是 $e$ 的开邻域，$W\subset U$，$V\subset U$，$w^i=u^i|_W$，$v^i=u^i|_V$，且 $\varphi(W\times V)\subset U$。设 $Y_i$ 是由 $\left.\dfrac{\partial}{\partial u^i}\right|_e$ 生成的右不变向量场，求常数 $\widetilde C^{k}_{ij}$，$1\le i,j,k\le r$，使得
> $$
> [Y_i,Y_j](e)=\widetilde C^{k}_{ij}Y_k(e).
> $$

$$ \begin{aligned} \begin{aligned} \left[ Y_{i},Y_{j} \right]\left(e\right)&= \left[\frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\frac{\partial }{\partial u^{k}}, \frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\frac{\partial }{\partial u^{l}} \right]\\&=  \frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\left[ \frac{\partial }{\partial u^{k}}, \frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\frac{\partial }{\partial u^{l}} \right] -\frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\frac{\partial }{\partial u^{l}}\left(\frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\right)\frac{\partial }{\partial u^{k}}\\&= \frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\left[ \frac{\partial }{\partial u^{k}} ,\frac{\partial }{\partial u^{l}}\right]+ \frac{\partial \widehat{\varphi}^{k}}{\partial w^{i}}\frac{\partial }{\partial u^{k}}\left(\frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\right)\frac{\partial }{\partial u^{l}}-\frac{\partial \widehat{\varphi}^{l}}{\partial v^{j}}\frac{\partial }{\partial u^{l}}\left(\frac{\partial \widehat{\varphi}^{k}}{\partial w ^{i}}\right)\frac{\partial }{\partial u^{k}}\\&= \frac{\partial \widehat{\varphi}^{k}}{\partial u^{i}}\frac{\partial ^{2}\widehat{\varphi}^{l}}{\partial u^{k}\partial u^{j}}\frac{\partial }{\partial u^{l}}- \frac{\partial \widehat{\varphi}^{l}}{\partial u^{j}}\frac{\partial \widehat{\varphi}^{k}}{\partial u^{l}\partial u^{i}}\frac{\partial }{\partial u^{k}}\\&= \left(\frac{\partial \widehat{\varphi}^{l}}{\partial u^{i}}\frac{\partial ^{2}\widehat{\varphi}^{k}}{\partial u^{l}\partial u^{j}}-\frac{\partial \widehat{\varphi}^{l}}{\partial u^{j}}\frac{\partial^{2} \widehat{\varphi}^{k}}{\partial u^{l}\partial u^{i}}\right)\frac{\partial }{\partial u^{k}}\end{aligned}\end{aligned} $$ 

$$ \frac{\partial \widehat{\varphi}^{j}}{\partial u^{i}}\left(0;0,\cdots 0\right)= u^{j}\circ \left(\left(\frac{\partial }{\partial u^{i}}\right)\varphi \left(e,e\right)\right) $$ 

> [!proof] Proof: 
> 1. $$ \frac{\partial }{\partial v^{i}}= \left. \frac{\partial }{\partial u^{i}} \right|_{V} $$ 
>    $$ \begin{aligned} \begin{aligned} \left(R_{a}\right) _{*e}\left(\frac{\partial }{\partial v^{i}}\right)\left(f\right)&= \left(\frac{\partial }{\partial v^{i}}\right)_{v= 0}f\left(R_{a}\left(v\right)\right)\\&=\left(\frac{\partial }{\partial v^{i}}\right) _{v= 0}f\left(\widehat{\varphi}\left(v,a\right)\right)\\&= \sum _{j}\frac{\partial f}{\partial u^{j}}\left(a\right) \frac{\partial \widehat{\varphi}^{j}}{\partial v^{i}}\left(0,u^{1}\left(a\right),\cdots ,u^{n}\left(a\right)\right) \end{aligned}\end{aligned} $$ 
>    于是
>    $$ Y_{i}\left(g\right)= \sum _{j}\frac{\partial \widehat{\varphi}^{j}}{\partial v^{i}}\left(0,u^{1}\left(g\right),\cdots ,u^{n}\left(g\right)\right)\left. \frac{\partial }{\partial u^{j}} \right|_{g} $$ 
> 


> [!exercise] 5.3
> 设 $H=\mathbb R^4$，取 $H$ 的基底为 $\{1,i,j,k\}$，乘法表为
> $$
> 1\cdot1=1,\qquad i\cdot i=j\cdot j=k\cdot k=-1,
> $$
> $$
> 1\cdot i=i\cdot1=i,\qquad 1\cdot j=j\cdot1=j,\qquad 1\cdot k=k\cdot1=k,
> $$
> $$
> i\cdot j=-j\cdot i=k,\qquad j\cdot k=-k\cdot j=i,\qquad k\cdot i=-i\cdot k=j.
> $$
> 那么 $H$ 中的元素 $\alpha$ 称为四元数，可以表示为
> $$
> x=x_0 1+x_1 i+x_2 j+x_3 k,\qquad x_0,x_1,x_2,x_3\in\mathbb R.
> $$
> 按照上述基底元素的乘法表，定义了 $H$ 中任意两个四元数的乘法。
>
> (1) 令 $H^*=H\setminus\{0\}$，证明：$H^*$ 关于四元数乘法构成一个 $4$ 维李群。
>
> (2) 求李群 $H^*$ 的左不变向量场。
>
> (3) 求李群 $H^*$ 的结构常数。
>
> (4) 求李群 $H^*$ 的 Maurer-Cartan 形式（左不变微分式）和结构方程。


> [!exercise] 5.6
> 设
> $$
> G=\left\{\begin{pmatrix}
> \alpha & \beta \\
> -\overline{\beta} & \overline{\alpha}
> \end{pmatrix}:\alpha,\beta\in\mathbb C,\ \text{且 }|\alpha|^2+|\beta|^2\ne0\right\}.
> $$
> (1) 证明：$G$ 是一个 $4$ 维李群。
>
> (2) 求李群 $G$ 的 Maurer-Cartan 形式（左不变微分式）。
>
> (3) 求李群 $G$ 的结构常数。

> [!exercise] 5.7
> 用 $\mathbb R^*$ 记非零实数的集合，命
> $K=\mathbb R^*\times\mathbb R$。
>
> (1) 在 $K$ 上定义乘法 $\cdot$ 为
> $$
> (a,b)\cdot(a_1,b_1)=(aa_1,\ b+ab_1),\qquad \forall (a,b),(a_1,b_1)\in K.
> $$
> 证明：$K$ 是一个 $2$ 维李群，并且求 $K$ 的左不变向量场和结构常数。
>
> (2) 在 $K$ 上定义乘法 $*$ 为
> $$
> (a,b)*(a_1,b_1)=(aa_1,\ ba_1+b_1),\qquad \forall (a,b),(a_1,b_1)\in K.
> $$
> 证明：$K$ 仍是一个 $2$ 维李群，并且求 $K$ 的左不变向量场和结构常数。
>
> 然后将以上两种情况进行比较，看一看所得的结果有什么差别。
