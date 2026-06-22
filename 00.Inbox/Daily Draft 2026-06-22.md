### 20:37

> [!exercise] 6
> 设 $X,Y$ 是 Banach 空间，$T\in \mathcal{B}(X,Y)$，求证：
> 
> (1)
> $$
> N(T)={}^\perp R(T^*).
> $$
> 
> (2)
> $$
> N(T^*)=R(T)^\perp.
> $$
> 
> (3)
> $$
> N(T)^\perp\supset \overline{R(T^*)}.
> $$
> 
> (4)
> $$
> {}^\perp N(T^*)=\overline{R(T)}.
> $$

$$
\left< \varphi , Tx \right>= \left< T^{*}\varphi ,x \right> 
$$

$$
\begin{aligned} N\left(T\right)&= \left\{ x\in X: T\left(x\right)= 0 \right\}\\&=  \left\{ x\in X: \left< \varphi ,Tx \right>= 0, \forall \varphi \in Y^{*} \right\}\\&= \left\{ x\in X: \left< T^{*}\varphi ,x \right>= 0, \forall \varphi \in Y^{*} \right\}\\&= ^{\perp}R\left(T^{*}\right) \end{aligned} 
$$

$$
\begin{aligned} \begin{aligned} N\left(T^{*}\right)&= \left\{ \varphi \in Y^{*}: T^{*}\varphi = 0 \right\}\\&= \left\{ \varphi \in Y^{*}: \left< T^{*}\varphi ,x \right>, \forall x\in X \right\}\\&= \left\{ \varphi \in Y^{*}: \left< \varphi , Tx \right>,\forall x\in X \right\}\\&= R\left(T\right)^{\perp} \end{aligned} \end{aligned} 
$$

任取$\psi \in R\left(T^{*}\right)$, 设$T^{*}\varphi = \psi$, 任取$x$使得$Tx= 0$, 则
$$
\left< \psi, x \right>= \left< T^{*}\varphi ,x \right>= \left< \varphi , Tx \right>= \left< \varphi ,0 \right>= 0 
$$ 



任取$y\in R\left(T\right)$, 则
$$
\left< \varphi ,y \right>= \left< \varphi ,Ty \right>= \left< T^{*}\varphi ,y \right>= 0
$$

若$y\not \in \overline{R\left(T\right)}$, 则 存在$f\in Y^{*}$, 使得
$$
f|_{\overline{R\left(T\right)}}= 0,\quad f\left(y\right)= 1 
$$
任取
$$
\left< T^{*}f, x \right>= \left< f, Tx \right>= f|_{\overline{R\left(T\right)}}\left(Tx\right)= 0 
$$
于是
$$
f\in N\left(T^{*}\right) 
$$
但是
$$
\left< f,y \right>= 1\implies y\not \in ^{\perp}N\left(T^{*}\right) 
$$
故
> [!exercise] 7
> 设 $X$ 是 Banach 空间，$A\in C(X)$，$T=I-A$，求证：
> 
> (1)
> $$
> \forall [x]\in X/N(T),\ \exists x_0\in [x],
> $$
> 使得
> $$
> \|x_0\|=\|[x]\|.
> $$
> 
> (2) 若 $y\in X$ 使方程 $Tx=y$ 有解，则其中必有一个解达到范数最小。


$N\left(T\right)$是闭子空间, 


$$
\left\| \left[ x \right] \right\|= \inf _{y\in N\left(T\right)}\left\| x-y \right\| 
$$

