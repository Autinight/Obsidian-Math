
> [!exercise] Exercise 1
> 设$Z\subseteq \mathbb{R}$, 且$m\left(Z\right)= 0$, 记$W= \left\{ x^{2}: x \in Z \right\}$, 证明$m\left(W\right)= 0$.

**证明。** 平方映射在有界区间上是 Lipschitz 的，因此先把 $Z$ 分成有界部分。

对每个整数 $k\ge 1$，记

$$
Z_k=Z\cap[-k,k],\qquad W_k=\{x^2:x\in Z_k\}.
$$

任取 $\varepsilon>0$。由 $m(Z_k)=0$，存在可数个开区间 $I_j$ 覆盖 $Z_k$，使得

$$
\sum_{j=1}^{\infty}|I_j|<\frac{\varepsilon}{2k}.
$$

对于 $x,y\in[-k,k]$，有

$$
|x^2-y^2|=|x-y||x+y|\le 2k|x-y|.
$$

因此，每个非空的 $I_j\cap[-k,k]$ 在平方映射下的像 $J_j$ 都是区间，且长度满足 $|J_j|\le 2k|I_j|$。这些像区间覆盖 $W_k$，故其 Lebesgue 外测度满足

$$
m^*(W_k)\le\sum_{j=1}^{\infty}|J_j|
\le 2k\sum_{j=1}^{\infty}|I_j|<\varepsilon.
$$

令 $\varepsilon\downarrow0$，得到 $m^*(W_k)=0$。又因

$$
W=\bigcup_{k=1}^{\infty}W_k,
$$

由外测度的可数次可加性，$m^*(W)=0$。外测度为零的集合是 Lebesgue 可测的，所以 $m(W)=0$。$\square$

> [!exercise] Exercise 5
> 证明
>
> $$
> \sigma\left(\Sigma_{n-1}\right)
> = \frac{2\pi^{n/2}}{\Gamma\left(\frac{n}{2}\right)}.
> $$

**证明。** 这里 $\Sigma_{n-1}=\{x\in\mathbb R^n:|x|=1\}$，$\sigma$ 为标准表面积测度（$n=1$ 时为 $\{-1,1\}$ 上的计数测度）。先直接计算一维高斯积分，再用极坐标求球面面积。

记

$$
I=\int_{\mathbb R}e^{-t^2}\,dt.
$$

由于 $|t|\ge1$ 时 $e^{-t^2}\le e^{-|t|}$，有 $0<I<\infty$。由 Tonelli 定理及平面极坐标变换，

$$
\begin{aligned}
I^2
&=\int_{\mathbb R^2}e^{-(x^2+y^2)}\,dx\,dy\\
&=\int_0^{2\pi}\int_0^{\infty}e^{-r^2}r\,dr\,d\theta\\
&=2\pi\cdot\frac12=\pi.
\end{aligned}
$$

所以 $I=\sqrt\pi$。再次使用 Tonelli 定理，得到

$$
\int_{\mathbb R^n}e^{-|x|^2}\,dx
=\prod_{j=1}^n\int_{\mathbb R}e^{-x_j^2}\,dx_j
=\pi^{n/2}.
$$

另一方面，使用 $\mathbb R^n$ 中的极坐标积分公式，并令 $u=r^2$，有

$$
\begin{aligned}
\int_{\mathbb R^n}e^{-|x|^2}\,dx
&=\sigma(\Sigma_{n-1})\int_0^\infty e^{-r^2}r^{n-1}\,dr\\
&=\frac{\sigma(\Sigma_{n-1})}{2}
\int_0^\infty e^{-u}u^{n/2-1}\,du\\
&=\frac{\sigma(\Sigma_{n-1})}{2}\Gamma\!\left(\frac n2\right).
\end{aligned}
$$

比较两式即得

$$
\boxed{\displaystyle
\sigma(\Sigma_{n-1})=\frac{2\pi^{n/2}}{\Gamma(n/2)}.
}
$$

$\square$

> [!exercise] Exercise 6
> 设 \(a>0\)，则
>
> $$
> \int_{\mathbb{R}^n} \exp\left(-a\lvert x\rvert^2\right)\,dx
> = \left(\frac{\pi}{a}\right)^{n/2}.
> $$

**证明。** 第 5 题的证明已直接得到

$$
\int_{\mathbb R^n}e^{-|y|^2}\,dy=\pi^{n/2}.
$$

作线性变量替换 $y=\sqrt a\,x$。因 $a>0$，有 $dx=a^{-n/2}\,dy$，因此

$$
\begin{aligned}
\int_{\mathbb R^n}e^{-a|x|^2}\,dx
&=a^{-n/2}\int_{\mathbb R^n}e^{-|y|^2}\,dy\\
&=a^{-n/2}\pi^{n/2}
=\left(\frac\pi a\right)^{n/2}.
\end{aligned}
$$

$\square$

> [!exercise] Exercise 7
> 设
>
> $$
> P(x)=c_n\left(1+\lvert x\rvert^2\right)^{-(n+1)/2},
> $$
>
> 其中
>
> $$
> c_n=\pi^{-(n+1)/2}\Gamma\left(\frac{n+1}{2}\right),
> $$
>
> 证明
>
> $$
> \int_{\mathbb{R}^n}P(x)\,dx=1.
> $$

**证明。** 记 $s=(n+1)/2$。先用 Gamma 积分将 $(1+|x|^2)^{-s}$ 写成高斯函数的积分。

由 $\Gamma(s)=\int_0^\infty u^{s-1}e^{-u}\,du$，令 $u=(1+|x|^2)t$，可得

$$
(1+|x|^2)^{-s}
=\frac1{\Gamma(s)}\int_0^\infty t^{s-1}e^{-t}e^{-t|x|^2}\,dt.
$$

被积函数非负，故可由 Tonelli 定理交换积分次序，无须预先假设 $P$ 可积。再对每个 $t>0$ 应用第 6 题，得到

$$
\begin{aligned}
\int_{\mathbb R^n}P(x)\,dx
&=\frac{c_n}{\Gamma(s)}
\int_0^\infty t^{s-1}e^{-t}
\left(\int_{\mathbb R^n}e^{-t|x|^2}\,dx\right)dt\\
&=\frac{c_n\pi^{n/2}}{\Gamma(s)}
\int_0^\infty t^{s-1-n/2}e^{-t}\,dt\\
&=\frac{c_n\pi^{n/2}}{\Gamma(s)}
\int_0^\infty t^{-1/2}e^{-t}\,dt\\
&=\frac{c_n\pi^{n/2}\Gamma(1/2)}{\Gamma(s)}\\
&=\frac{c_n\pi^{(n+1)/2}}{\Gamma((n+1)/2)}
=1.
\end{aligned}
$$

这里使用了

$$
\Gamma\!\left(\frac12\right)
=\int_0^\infty u^{-1/2}e^{-u}\,du
=2\int_0^\infty e^{-r^2}\,dr
=\sqrt\pi,
$$

以及题设的 $c_n=\pi^{-(n+1)/2}\Gamma((n+1)/2)$。$\square$
