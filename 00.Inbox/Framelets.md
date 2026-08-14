> [!definition] Definition: Frame
> Let $H$ be a Hilbert space. A countable family
> $$ \left\{ g_{\lambda } \right\}_{\lambda \in \Lambda }\subseteq H $$ 
> is called a **frame for $H$** if there exists constants
> $$ 0< A\le B< \infty $$ 
> such that, for every $f\in H$,
> $$ A\left\| f \right\|_{H}^{2} \le \sum _{\lambda \in \Lambda }\left| \left< f,g_{\lambda } \right> \right|_{H}^{2}\le B\left\| f \right\|_{H}^{2}. $$ 

> [!note] Note: Frame
> A frame need **Not** be: 
> - orthogonal
> - linearly independent
> - minimal
> 
> A frame allows redundancy:
> - Redundancy means that the same information is represented through more frame elements than are strictly necessary. Consequently, removing one element may still leave a complete or even stable system. The benefit is robustness and flexibility; the cost is extra coefficients and nonunique synthesis representations.