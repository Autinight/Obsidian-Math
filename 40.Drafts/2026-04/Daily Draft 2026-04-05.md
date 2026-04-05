
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

 
