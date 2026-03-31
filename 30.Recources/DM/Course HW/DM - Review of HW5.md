

> [!exercise] Exercise
> $f: U \subset \mathbb{R}^n \to \mathbb{R}$ 是光滑的, $f$ 的临界点 $p$ 称为非退化临界点, 若: $p$ 的 Hessian 矩阵
>
> $$
> Hess f(p) = \left( \frac{\partial^2 f}{\partial x^i \partial x^j} |_p \right)_{n \times n}
>
> $$
>
> 是非退化的. 任意临界点均非退化的函数称为 Morse 函数.
>
> - **a).** 求证非退化临界点是孤立的;
>
> - **b).** 给定任意 $f \in C^\infty(U)$, 求证对几乎处处 $a \in \mathbb{R}^n$,
>
> $$
> \begin{aligned}
>
> f_a: U &\to \mathbb{R} \\
>
> x &\mapsto f(x) + a_1x^{1} + \dots + a_nx^n
>
> \end{aligned}
> $$
>
> 是 Morse 函数.

> [!proofsketch] Sketch of Proof: 
> a. 考察梯度函数$\nabla f$, 则$\nabla f$的微分就是Hessf, 根据定义, 非退化临界点处的Hess是满秩的, 反函数定理告诉我们$\nabla f$是局部的微分同胚, 特别地是局部的单射, 因此局部上只有$\nabla f\left(p\right)$是零.
>
> b. 令 
> $G= \nabla f$, 断言若$f_{a}$不是Morse函数, 则$-a$是临界值, 事实上, 若$f_{a}$不是Morse函数, 则存在$p$, 使得$\nabla f_{a}\left(p\right)= 0$, $Hess f_{a}= Hessf = dG_{p}$是奇异的. 因此$\left\{ -a \right\}$是零测集, 从而$\left\{ a \right\}$是零测集.

