## Statement

> [!proposition] Proposition: 
> Let $V$ be a vector space of dimension $n$. Each nonzero element $\omega \in \Lambda^n(V^*)$ determines an orientation $\mathcal{O}_\omega$ of $V$ as follows: 
> * if $n \ge 1$, then $\mathcal{O}_\omega$ is the set of ordered bases $(E_1, \dots, E_n)$ such that $\omega(E_1, \dots, E_n) > 0$; 
> * while if $n = 0$, then $\mathcal{O}_\omega$ is $+1$ if $\omega > 0$, and $-1$ if $\omega < 0$. 
> 
> Two nonzero $n$-covectors determine the same orientation if and only if each is a positive multiple of the other.


> [!proofsketch] Sketch of Proof: 
> $n$-covector的性质保证了, 两组基的定向一致(即过渡映射的 $\det$大于零), 当且仅当余向量在两组基上的取值符号一致.