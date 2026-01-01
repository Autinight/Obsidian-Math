---
type: theorem
aliases: [Canonical Form for Commuting Vector Fields]
---


> [!theorem] Theorem: 
> Let $M$ be a smooth $n$-manifold, and Let $\left( V_1,\cdots,V_k \right)$ be a linearly independent $k$-tuple of smooth commuting vector fields on an open subset $W\subseteq M$. For each $p\in W$, there exists a smooth coordinate chart $\left(U,\left(s^{i}\right)\right)$ centered at $p$ such that $V_{i}= \frac{\partial }{\partial s^{i}}$ for $i=  1,\cdots,k$. If $S\subseteq W$ is an embedded codimension-k submanifold and $p$ is a point of $S$ such that $T_{p}S$ is complementary to the span of $\left(\left. V_1 \right|_{p},\cdots ,\left. V_{k} \right|_{p}\right)$, then the coordinates can also be chosen such that $S\cap U$ is the slice defined by $s^{1}= \cdots = s^{k}= 0$.

> [!proof] Proof: 
> Let $p\in M$ be arbitrary. If no submanifold $S$ is given, let $S$ be any embedded codimension-k submanifold whose tangent space at $p$ is  complementary to the span of $\left(V_1|_{p},\cdots ,V_{k}|_{p}\right)$. Take a chart $\left(U, \left(x^{i}\right)\right)$ centered at $p$ with $U\subseteq W$, such that the defining map of $S$ on $U$ is 
>  $$ x^{1}= \cdots = x^{k}= 0 $$ 
> Since the theorem is local, we may assume that $U\subseteq \mathbb{R} ^{n}$ and $S$ is a subset of $U$ with $S\cap U= \left\{ x\in U: x^{1}= \cdots = x^{k}= 0\right\}$. Let $\theta _{i}$ be the flow of $V_{i}$, $i=  1,\cdots,k$. Claim that there exists $\varepsilon > 0$ and a neighborhood $Y$ of $p$ such that $\theta _{t_1}\circ \theta _{t_2}\circ \cdots \circ \theta _{t_{k}}$ maps $Y$ into $U$ whenever $\left| t_1 \right|,\cdots ,\left| t_{k} \right|$ are less than $\varepsilon$. (To see this, we take $\varepsilon _{k}$ and $U_{k}$ such that $\theta _{t_{k}}$ maps $\left(-\varepsilon _{k},\varepsilon _{k}\right)\times U_{k}$ into $U$. Inductively, we take $\varepsilon _{i}$ and $U_{i}$ such that $\theta _{t_{i}}$ maps $\left(-\varepsilon _{i},\varepsilon _{i+ 1}\right)\times U_{i}$ into $U_{i+ 1}$. Finally we take $\varepsilon = \min \left\{ \varepsilon _1 ,\cdots ,\varepsilon _{k} \right\}$, $Y= U_{1}$ ). 
> Then we define $\Phi : \left(-\varepsilon ,\varepsilon \right)^{k}\times \Omega\to U$, by 
>  $$ \Phi \left(s^{1},\cdots ,s^{k},s^{k+ 1},\cdots ,s^{n}\right)= \theta  $$
> where
>  $$ \Omega = \left\{ \left(s^{k+ 1},\cdots ,s^{n}\right)\in \mathbb{R} ^{n-k}: \left(0,\cdots ,0,s^{k+ 1},\cdots ,s^{n}\right)\in Y \right\} $$ 
>  By constructin, $\Phi \left(\left\{ 0 \right\}\times \Omega \right)= S\cap Y$. 
>
> We show next that $\frac{\partial }{\partial s^{i}}$ is $\Phi$- related to $V_{i}$ for $i=  1,\cdots,k$. Take arbitrary $s_0\in \left(-\varepsilon ,\varepsilon \right)\times \Omega$,
>  $$ \begin{aligned} d\Phi _{s_0}\left(\left. \frac{\partial }{\partial s^{i}} \right|_{s_0}\right)f &= \left. \frac{\partial }{\partial s^{i}} \right|_{s_0}f\left(\Phi \left(s^{1},\cdots ,s^{n}\right)\right)\\&=\left. \frac{\partial }{\partial s^{i}} \right|_{s_0}f\circ \left(\theta _{1}\right)_{s^{1}}\circ \cdots \circ \left(\theta _{k}\right)_{s^{k}}\left(0,\cdots ,0,s^{k+ 1},\cdots ,s^{n}\right)\\&= \left. \frac{\partial }{\partial s^{i}} \right|_{s_0}\left(f\circ \left( \theta _{i}\right)_{s^{i}}\right)\circ \left(\theta _{1}\right)_{s^{1}}\cdots  \widehat{\left(\theta _{i}\right)_{s^{i}}}\circ\cdots \circ\left(\theta _{k}\right)_{s^{k}}\left(\cdots \right)\\&=  \left. \frac{\partial }{\partial s^{i}} \right|_{s_0}f\circ \left(\theta _{i}\right)^{\left(p\right)}  \left(s_{i}\right)\\&= \left. V_{i} \right|_{\left(\theta _{i}\right)^{\left(p\right)}\left(s_{i}\right)}f\\&= \left. V_{i} \right|_{\Phi \left(s_0\right)}f\end{aligned} $$ 
>  where 
>  $$ p= \left(\theta _1 \right)_{s^{1}}\cdots   \widehat{\left(\theta _{i}\right)_{s^{i}}} \cdots \circ\left(\theta _{i}\right)_{s_{k}}\left(0,\cdots ,0,s^{k+ 1},\cdots ,s^{n}\right)$$ 
> and we use the fact that $t\mapsto \left(\theta _{i}\right)^{\left(q\right)}\left(t\right)= \left(\theta _{i}\right)_{t}\left(q\right)$ is an integral curve of $V_{i}$. 
> Next we show that $d \Phi _{0}$ is invertible. The computation above shows that 
>  $$ \,\mathrm{d} \Phi _{0}\left(\left. \frac{\partial }{\partial s^{i}} \right|_{0}\right)= \left. V_{i} \right|_{p},\quad i=  1,\cdots,k  $$
> The other hand, since
>  $$ \Phi \left(0,\cdots ,0,s^{k+ 1},\cdots ,s^{n}\right)=\left(0,\cdots ,0,s^{k+ 1},\cdots ,s^{n}\right)  $$
> It is immediate that 
>  $$ d\Phi _{0}\left(\left. \frac{\partial }{\partial s^{i}} \right|_{0}\right)= \left. \frac{\partial }{\partial x^{i}} \right|_{p},\quad i= k+ 1 ,\cdots ,n$$
> It follows that $\,\mathrm{d} \Phi _{0}$ takes the basis $\left\{ \left. \frac{\partial }{\partial s^{1}} \right|_{0},\cdots ,\left. \frac{\partial }{\partial s^{n}} \right|_{0} \right\}$ for $T_0\mathbb{R} ^{n}$ to the basis $\left\{ \left. V_{1} \right|_{p},\cdots ,\left. V_{k} \right|_{p},\left. \frac{\partial }{\partial x^{k+ 1}} \right|_{p},\cdots , \left. \frac{\partial }{\partial x^{n}} \right|_{p} \right\}$ for $T_{p}M$. Then from inverse function theorem, $\Phi$ is a diffeomorphism in a neighborhood of $0$, and $\varphi = \Phi ^{-1}$ is a smooth coordinate map under which $V_{i}= \frac{\partial }{\partial s^{i}}$ for $i=  1,\cdots,k$, and $S\cap Y$ is defined by the slice $s^{1}= \cdots = s^{k}= 0$.