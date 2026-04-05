
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