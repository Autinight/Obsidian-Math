### MRA

> [!definition] Definition: MRA
> A dyadic MRA of $L^{2}\left(\mathbb{R} \right)$ is a family of closed subspaces
> $$ \cdots \subseteq V_{-1}\subseteq V_0\subseteq V_1\subseteq \cdots \subseteq L^{2}\left(\mathbb{R} \right) 
>   $$
> satisfying:
> 
> - 
>   $$V_{j}\subseteq V_{j+ 1}$$
> - 
>   $$ \overline{\bigcup _{j\in \mathbb{Z} }V_{j}}= L^{2}\left(\mathbb{R} \right) 
>   $$ 
> - 
>   $$ \bigcap _{j\in \mathbb{Z} }V_{j}= \left\{ 0 \right\} 
>   $$ 
> - $$ f\left(x\right)\in V_{j}\iff f\left(2x\right)\in V_{j+ 1} 
>   $$
> - There is a function $\varphi \in V_0$ such that its integer translates
>     $$ \left\{ \varphi \left(x-k\right): k\in \mathbb{Z}  \right\} 
>     $$ 
>      form an orthonormal basis, or more generally a Riesz basis, of $V_0$.
>  
>  The space $V_{j}$ represents the visible resolution $2^{-j}$. Increasing $j$ gives the finer detail.
### Frame

> [!definition] Definition: Frame
> Let $H$ be a Hilbert space. A countable family
> $$ \left\{ g_{\lambda } \right\}_{\lambda \in \Lambda }\subseteq H 
>  $$ 
> is called a **frame for $H$** if there exists constants
> $$ 
> 0< A\le B< \infty 
> $$ 
> such that, for every $f\in H$,
> $$ A\left\| f \right\|_{H}^{2} \le \sum _{\lambda \in \Lambda }\left| \left< f,g_{\lambda } \right> \right|_{H}^{2}\le B\left\| f \right\|_{H}^{2}. 
> $$ 

> [!note] Note: Frame
> A frame need **Not** be: 
> - orthogonal
> - linearly independent
> - minimal
> 
> A frame allows redundancy:
> - Redundancy means that the same information is represented through more frame elements than are strictly necessary. Consequently, removing one element may still leave a complete or even stable system. The benefit is robustness and flexibility; the cost is extra coefficients and nonunique synthesis representations.


### Wavelet

