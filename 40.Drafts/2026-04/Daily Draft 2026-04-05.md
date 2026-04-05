
 $$ \frac{\partial U_{j}^{i}}{\partial x^{k}}= \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{j}} $$ 

We need to show 
 $$ \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{j}}= \Gamma _{kj}^{s}\frac{\partial u^{i}}{\partial x^{s}}-g\left(\nabla _{\partial _{j}}N,\partial _{k}\right)N^{i} $$ 

Turn $M$ in to a level set? 

Directly prove, 

 $$ T_{F\left(x\right)}M^{n}= \operatorname{span}\left\{ DF\left(\frac{\partial }{\partial x^{k}}\right) \right\} $$
 $$ DF\left(\frac{\partial }{\partial x^{k}}\right)= \frac{\partial u^{i}}{\partial x^{k}}\frac{\partial }{\partial u^{i}} $$  
  $$ g\left(N, \frac{\partial u^{i}}{\partial x^{k}}\frac{\partial }{\partial u^{i}}\right)= 0= \frac{\partial u^{i}}{\partial x^{k}}g\left(N,\frac{\partial }{\partial u^{i}}\right)= U^{i}_{k}g\left(N,\partial _{i}\right)= 0 $$
 $$ g\left(\nabla _{\partial _{j}}N,\partial _{k}\right)= \partial _{j}g\left(N,\partial _{k}\right)=g\left(N,\nabla _{\partial _{j}}\partial_{k}\right) = g\left(N, \Gamma _{jk}^{s}\partial _{s}\right)= \Gamma _{jk}^{s}g\left(N,\partial _{s}\right)$$  
 $$ \operatorname{II} _{jk}= \Gamma _{jk}^{s}g\left(N,\partial _{s}\right) $$ 


 $$ U_{j}^{i}g\left(N,\partial _{i}\right)= 0 $$
 $$ 0= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+ \frac{\partial }{\partial x^{k}}g\left(N,\partial _{i}\right) $$
 $$ \frac{\partial }{\partial x^{k}}= \frac{\partial u^{i}}{\partial x^{k}}\partial _{i}= U^{i}_{k}\partial _{i} $$
 $$ \begin{aligned} 0&= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+ U_{k}^{i}\partial _{i}g\left(N,\partial _{i}\right)\\&= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+ U_{k}^{i}g\left(\nabla _{\partial _{i}}N,\partial _{i}\right)+ U_{k}^{i}g\left(N,\nabla _{\partial _{i}}\partial _{j}\right)\\&= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+ U_{k}^{s}\operatorname{II} _{si}+ U_{k}^{s}g\left(N,\Gamma _{sj}^{l}\partial _{l}\right)\\&= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+ U_{k}^{s}\operatorname{II} _{si}+ U_{k}^{s}\Gamma _{sj}^{l}g\left(N,\partial _{l}\right)\\&= \frac{\partial U_{j}^{i}}{\partial x^{k}}g\left(N,\partial _{i}\right)+  \end{aligned} $$    
Directly prove, 


 $$ D F\left(\frac{\partial }{\partial x^{k}}\right)= \left(U_{k}^{i}\circ F\right)\partial _{i} $$ 

 $$ g\left(N, \right) $$ 

 $$ \overline{R}\left(X,W,Z,W\right)= R\left(X,Y,Z,W\right)-\operatorname{II} \left(X,W\right)\operatorname{II} \left(Y,Z\right)+ \operatorname{II} \left(X,Z\right)\operatorname{II} \left(Y,W\right) $$ 

In the Euclidean space, there is 
 $$ 0= R_{ijkl}-\operatorname{II} _{il}\operatorname{II} _{jk}+ \operatorname{II} _{ik}\operatorname{II} _{jl} $$
 $$ R_{ijkl}= \operatorname{II} _{lj}\operatorname{II} _{jk}-\operatorname{II} _{ik}\operatorname{II} _{jl} $$  

  $$ \bar{\nabla}_{\partial_k} F_*(\partial_j) = \frac{\partial U_j^i}{\partial x^k}\,\frac{\partial}{\partial u^i} \tag{1} $$ 

 $$ \bar{\nabla}_{\partial_k} F_*(\partial_j) = F_*\!\bigl(\nabla_{\partial_k}\partial_j\bigr) + \bigl\langle \bar{\nabla}_{\partial_k} F_*(\partial_j),\, N \bigr\rangle N \tag{2} $$ 

  $$ \partial _{j}= U_{j}^{k}\mathbf{e}_k $$ 

  $$ \begin{aligned} \overline{\nabla}_{\partial _{i}} \partial _{j}&= \overline{\nabla}_{\partial _{i}}U_{j}^{k} \mathbf{e}_{k}+ U_{j}^{k}\overline{\nabla}_{\partial _{i}}\mathbf{e}_{k}\\&=  \frac{\partial U_{j}^{k}}{\partial x^{i}}\mathbf{e}_{k}\end{aligned}$$ 


 $$ \frac{\partial U_{j}^{i}}{\partial x^{k}}= \bar{g}\left(\overline{\nabla}_{\partial _{k}}\partial _{j} ,\mathbf{e}_{k}\right)$$ 
 $$ \overline{\nabla}_{X}Y= \nabla _{X}Y+ \operatorname{II} \left(X,Y\right)N $$ 

 $$ \begin{aligned} \begin{aligned} \frac{\partial U_{j}^{i}}{\partial x^{k}}&= \bar{g}\left(\nabla _{\partial _{k}}\partial _{j},\mathbf{e}_{i}\right)+ \bar{g}\left(\operatorname{II} _{kj}N,\mathbf{e}_{k}\right)\\&= \bar{g}\left(\Gamma _{kj}^{s}\partial _{s},\mathbf{e}_{i}\right)+ \operatorname{II} _{kj}N^{i}\\&= \Gamma _{kj}^{s}\bar{g}\left(U_{s}^{k}\mathbf{e}_{k},\mathbf{e}_{i}\right)+ \operatorname{II} _{kj}N^{i}\\&= \Gamma _{kj}^{s}U_{s}^{i}+ \operatorname{II} _{kj}N^{i} \end{aligned} \end{aligned} $$ 

> [!definition] Definition: 
> 
>  Let 
>   $$ P_{k,j}^{i}\left(x,U\right)= \frac{\partial U_{j}^{i}}{\partial x^{k}}= \Gamma _{kj}^{s}U_{s}^{i}+ \operatorname{II} _{kj}N^{i} $$
> Then
>  $$ \frac{\partial U_{j}^{i}}{\partial x^{k}}= P_{k,j}^{i} $$


 
  $$ \frac{\partial U_{j}^{i}}{\partial x^{l}\partial x^{k}}= \frac{\partial P_{k,j}^{i}}{\partial x^{l}}+ \frac{\partial P_{k,j}^{i}}{\partial U_{s}^{m}}P_{l,s}^{m} $$
The integrability conditions are 
 $$ \frac{\partial P_{k,j}^{i}}{\partial x^{l}}+ \frac{\partial P_{k,j}^{i}}{\partial U_{s}^{m}}P_{l,s}^{m}= \frac{\partial P_{l,j}^{i}}{\partial x^{k}}+ \frac{\partial P_{l,j}^{i}}{\partial U_{s}^{m}}P_{k,s}^{m} $$

where 

> [!definition] Definition: 
>  $$ \frac{\partial P_{k,j}^{i}}{\partial x^{l}}= \partial _{l}\Gamma _{kj}^{s}U_{s}^{i}+ \Gamma _{kj}^{s}P_{l,s}^{i}+ \partial _{l}\operatorname{II} _{kj}N^{i}+ \operatorname{II} _{kj}\partial _{l}N^{i} $$ 
 $$ \overline{\nabla}_{X}N=- W_{N}\left(X\right) $$
 $$ \left< W_{N}\left(X\right),Y \right>= \operatorname{II} \left(X,Y\right) $$
 $$ \left< \overline{\nabla}_{X}N,Y \right>= -\operatorname{II} \left(X,Y\right) $$
 $$ \left< \overline{\nabla}_{\partial _{l}}N, \partial _{s} \right>=- \operatorname{II} _{ls} $$
 $$ \overline{\nabla}_{\partial _{l}}N= \overline{\nabla}_{\partial _{l}}\left(N^{i}\mathbf{e}_{i}\right) = \left(\partial _{l}N^{i}\right)\mathbf{e}_{i}$$

 $$ \mathbf{e}_{i}= \frac{\partial }{\partial u^{i}}= \frac{\partial x^{k}}{\partial u^{i}}\frac{\partial }{\partial x^{k}}= \left(U^{-1} \right)_{i}^{k}\partial _{k} $$ 
 $$ \left< \left(\partial _{l}N^{i}\right)\left(U^{-1} \right)_{i}^{k}\partial _{k},\partial _{s} \right>= -\operatorname{II} _{ls} $$
  $$ \left(\partial _{l}N^{i}\right)\left(U^{-1} \right)_{i}^{k}g_{ks}= -\operatorname{II} _{ls} $$
 
 $$ \left(\partial _{l}N^{i}\right)= -U_{k}^{i}g^{ks}\operatorname{II} _{ls} $$   
We  have 

> [!lemma] Lemma: 
>  $$ \frac{\partial P_{k,j}^{i}}{\partial x^{l}}= \partial _{l}\Gamma _{kj}^{s}U_{s}^{i}+ \Gamma _{kj}^{s}P_{l,s}^{i}+ \partial _{l}\operatorname{II} _{kj}N^{i}-U_{k}^{i}g^{ks}\operatorname{II} _{ls}\operatorname{II} _{kj} $$ 
 $$ \operatorname{II} _{kj}= \operatorname{II} \left(\partial _{k},\partial _{j}\right)= g\left(\nabla _{\partial _{k}}N,\partial _{j}\right) $$ 
 $$ \begin{aligned} \partial _{l}\operatorname{II} _{kj}&= g\left(\nabla _{\partial _{l}}\nabla _{\partial _{k}}N,\partial _{j}\right)+ g\left(\nabla _{\partial _{k}}N,\nabla _{\partial _{l}}\partial _{j}\right)\\&=  \end{aligned} $$

 $$ g\left(\nabla _{\partial _{k}}N,N\right)= \frac{1}{2}\partial _{k}\left(1\right)= 0 $$
 We know tha $\nabla _{X}N\in TM$, suppoes that $\nabla _{\partial _{k}}N= C_{k}^{s}\partial _{s}$
 We have 
  $$ g\left(\nabla _{\partial _{k}}N,\partial _{l}\right)= \operatorname{II} \left(\partial _{k},\partial _{l}\right)= \operatorname{II} _{kl} $$
 $$ C_{k}^{s}g_{sl}= \operatorname{II} _{kl} $$
  $$ C_{k}^{s}= g^{sl}\operatorname{II} _{lk} $$
 $$ \nabla _{\partial _{k}}N= \operatorname{II} _{km}g^{ms}\partial _{s} $$
 $$ \nabla _{\partial _{l}}\left(\nabla _{\partial _{k}}N\right) = \left(\partial _{l}\operatorname{II} _{km}\right)g^{ms}\partial _{s}+ \operatorname{II} _{km}\left(\partial _{l}g^{ms}\right)\partial _{s}+ \operatorname{II} _{km}g^{ms}\Gamma _{ks}^{i}\partial _{i}$$      
  $$ \begin{aligned} g\left(\nabla _{\partial _{l}}\nabla _{\partial _{k}}N,\partial _{j}\right)&= \left(\partial _{l}\operatorname{II} _{km}\right)g^{ms}g_{sj}+ \operatorname{II} _{km}\left(\partial _{l}g^{ms}\right)g_{sj}+ \operatorname{II} _{km}g^{ms}\Gamma _{ks}^{i}g_{ji}\\&= \left(\partial _{l}\operatorname{II} _{km}\right)\delta ^{m}_{j}+ \operatorname{II} _{km}\left(\partial _{l}g^{ms}\right)g_{sj}+ \operatorname{II} _{km}g^{ms}\Gamma _{ks}^{i}g_{ji}alji\\&= \partial _{l}\operatorname{II} _{kj} \end{aligned} $$ 
TMD, 算出来把$\partial _{l}\operatorname{II} _{kj}$给消掉了, 那不算了
 $$ \frac{\partial P_{k,j}^{i}}{\partial U_{s}^{m}}= \frac{\partial }{\partial U_{s}^{m}}\left(\Gamma _{k,j}^{l}U_{l}^{i}\right)= \Gamma _{kj}^{s}\delta _{m}^{i} $$ 
> [!lemma] Lemma: 
> The LHS of the integrability is 
>  $$ \partial _{l}\Gamma _{kj}^{s}U_{s}^{i}+ \Gamma _{kj}^{s}P_{l,s}^{i}+ \partial _{l}\operatorname{II} _{kj} N^{i}-U_{k}^{i}g^{ks}\operatorname{II} _{ls}\operatorname{II} _{kj}+ P_{l,s}^{i}\Gamma _{kj}^{s}$$ 
> The RHS is 
>  $$ \partial _{k}\Gamma _{lj}^{s}U_{s}^{i}+ \Gamma _{lj}^{s}P_{k,s}^{i}+ \partial _{k}\operatorname{II} _{lj}N^{i}-U_{l}^{i}g^{ls}\operatorname{II} _{ks}\operatorname{II} _{lj}+ P_{k,s}^{i}\Gamma _{lj}^{s} $$ 
>
>

 $$ \begin{aligned} \begin{aligned} \partial _{l}\operatorname{II} _{kj}-\partial _{k}\operatorname{II} _{lj}&= \partial _{l}g\left(\nabla _{\partial _{k}}N,\partial _{j}\right)-\partial _{k}g\left(\nabla _{\partial _{l}}N,\partial _{j}\right)\\&= g\left(\nabla _{\partial _{l}}\nabla _{\partial _{k}}N,\partial _{j}\right)+ g\left(\nabla _{\partial _{k}}N,\nabla _{\partial _{l}}\partial _{j}\right)-g\left(\nabla _{\partial _{k}}\nabla _{\partial _{l}}N,\partial _{j}\right)-g\left(\nabla _{\partial _{l}}N,\nabla _{\partial _{k}}\partial _{j}\right)\\&= g\left(\nabla _{\partial _{l}}\nabla _{\partial _{k}}N-\nabla _{\partial _{k}}\nabla _{\partial _{l}}N,\partial _{j}\right)+ \operatorname{II} \left(\partial _{k}, \Gamma _{lj}^{m}\partial _{m}\right)-\operatorname{II} \left(\partial _{l},\Gamma _{kj}^{m}\partial _{m}\right)\\&= g\left(\nabla _{\partial _{l}}\nabla _{\partial _{k}}N-\nabla _{\partial _{k}}\nabla _{\partial _{l}}N,\partial _{j}\right)+ \Gamma _{lj}^{m}\operatorname{II} _{km}-\Gamma _{kj}^{m}\operatorname{II} _{lm}\\&= \operatorname{Rm}\left(\partial _{l},\partial _{k},N,\partial _{j}\right)+ \cdots \\&=N^{i}U_{i}^{m}R_{lkmj}+ \Gamma _{lj}^{m}\operatorname{II} _{km}-\Gamma _{kj}^{m}\operatorname{II} _{lm} \end{aligned}\end{aligned} $$ 
 $$ N= N^{i}\mathbf{e}_{i}= N^{i}U_{i}^{m}\partial _{m} $$ 


 $$ \frac{\partial ^{2}U_{j}^{i}}{\partial x^{l}\partial x^{k}}= \left(\partial _{l}\Gamma _{kj}^{s}\right)U_{s}^{i}+ \Gamma _{kj}^{s}\left(\partial _{l}U_{s}^{i}\right)-\left(\partial _{l}\operatorname{II} _{jk}\right)N^{i}-\operatorname{II} _{jk}\partial _{l}N^{i} $$
 $$ \partial _{l}U_{s}^{i}= \Gamma _{ls}^{m}U_{m}^{i}-\operatorname{II} _{sl}N^{i} $$
  $$ \partial _{l}N^{i} = -U^{i}_{k}g^{ks}\operatorname{II} _{sl}$$
  Then
> [!lemma] Lemma: 
>  $$ \begin{aligned} \frac{\partial ^{2}U_{j}^{i}}{\partial x^{l}\partial x^{k}}&= \left(\partial _{l}\Gamma _{kj}^{m}\right)U_{m}^{i}+ \Gamma _{kj}^{s}\Gamma _{ls}^{m}U_{m}^{i}-\Gamma _{kj}^{s}\operatorname{II} _{sl}N^{i}-\left(\partial _{l}\operatorname{II} _{jk}\right)N^{i}+ U_{m}^{i}g^{ms}\operatorname{II} _{sl} \operatorname{II} _{jk}\\&= \left(\partial _{l}\Gamma _{kj}^{m}+ \Gamma _{kj}^{s}\Gamma _{ls}^{m}+ g^{ms}\operatorname{II} _{sl}\operatorname{II} _{jk}\right)U_{m}^{i}-\left(\partial _{l}\operatorname{II} _{jk}-\Gamma _{kj}^{s}\Gamma _{sl}\right)N^{i} \end{aligned}$$    
> Note that 
>  $$ U_{m}^{i}\mathbf{e}_{i}= \partial _{m},\quad N^{i}\mathbf{e}_{i}= N $$
> If the integrability condition holds, then
>  $$ \left(\cdots ^{m}\right)\partial _{m}-\left(\cdots \right)N= 0 $$
> The terms in two parameter are invariant after exchange $l,k$, 
>  $$ \partial _{l}\Gamma _{kj}^{m}+ \Gamma _{kj}^{s}\Gamma _{ls}^{m}+ g^{ms}\operatorname{II} _{sl}\operatorname{II} _{jk}= \partial _{k}\Gamma _{lj}^{m}+ \Gamma _{lj}^{s}\Gamma _{ks}^{m}+ g^{ms}\operatorname{II} _{sk}\operatorname{II} _{jl} $$  
>  $$ g_{ms}\left(\partial _{k}\Gamma _{lj}^{m}+ \Gamma _{lj}^{s}\Gamma _{ks}^{m}-\partial _{l}\Gamma _{kj}^{m}-\Gamma _{kj}^{s}\Gamma _{ls}^{m}\right)-\operatorname{II} _{sl}\operatorname{II} _{jk}+ \operatorname{II} _{sk}\operatorname{II} _{jl}= 0 $$ 
>  $$ \begin{aligned} R\left(\partial _{k},\partial _{l}\right)\partial _{j} &= \nabla _{\partial _{k}}\nabla _{\partial _{l}}\partial _{j}-\nabla _{\partial _{l}}\nabla _{\partial _{k}}\partial _{j}\\&= \nabla _{\partial _{k}}\left(\Gamma _{lj}^{m}\partial _{m}\right)-\nabla _{\partial _{l}}\left(\Gamma _{kj}^{m}\partial _{m}\right)\\&= \Gamma _{lj}^{m}\Gamma _{km}^{s}\partial _{s}+ \partial _{k}\Gamma _{lj}^{m}\partial _{m}-\Gamma _{kj}^{m}\Gamma _{lm}^{s}\partial _{s}+ \partial _{l}\Gamma _{kj}^{m}\partial _{m}\\&= \Gamma _{lj}^{s}\Gamma _{ks}^{m}\partial _{m}+ \partial_{k}\Gamma _{lj}^{m}\partial _{m}-\Gamma _{kj}^{s}\Gamma _{ls}^{m}\partial _{m}+ \partial _{l}\Gamma _{kj}^{m}\partial _{m} \end{aligned} $$
>  $$ R_{klj}^{m}= \partial _{k}\Gamma _{lj}^{m}-\partial _{l}\Gamma _{kj}^{m}+ \Gamma _{ks}^{m}\Gamma _{lj}^{s}-\Gamma _{ls}^{m}\Gamma _{kj}^{s}$$
> Thus
>  $$ g_{ms}R_{klj}^{m}= \operatorname{II} _{sl}\operatorname{II} _{jk}-\operatorname{II} _{sk}\operatorname{II} _{jl} $$
>  $$ R_{}= \operatorname{II} _{sl}\operatorname{II} _{jk}-\operatorname{II} _{sk}\operatorname{II} _{jl} $$
>  $$ R_{iklj}= \operatorname{II} _{il}\operatorname{II} _{kj}-\operatorname{II}  _{il}\operatorname{II} _{kl}$$
> The normal direction is 
>  $$ \partial _{l}\operatorname{II} _{jk}-\Gamma _{kj}^{s}\Gamma _{sl}= \partial _{k}\operatorname{II} _{jl}-\Gamma _{lj}^{s}\Gamma _{sk} $$
>  $$  \partial _{l}\operatorname{II} _{jk}-\partial _{k}\operatorname{II} _{jl}= $$       
> [!remark] Remark:
> 有点问题, 但想法是没错的.


问题是, 如何通过存在性反推浸入映射的存在性.

有了这两个方程, 我们就有上面这个系统解的存在性, 我们希望这组$U_{k}^{i}$, 能不能造出一个Immersion.

In convex coordinates centered at $0$, we write $u^{i}$ as 
 $$ u^{i}\left(x^{1},\cdots ,x^{n}\right)= \int _{0}^{x^{k}}U_{k}^{i}\left(x^{1},\cdots ,t^{k},\cdots ,x^{n}\right)\,d t^{k} $$ 
然后这些个$u^{i}$在不同的coordinates下是彼此相容的?我不知道这个思路对不对