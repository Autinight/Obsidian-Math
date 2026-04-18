


> [!exercise] Exercise 3.4.5:
> Prove the two Bianchi identities at a point $p\in M$ by using a coordinate system where $\nabla_{\partial_i}\partial_j=0$ at $p$.
>  $$ R\left(X,Y\right)Z+ R\left(Z,X\right)Y+ R\left(Y,Z\right)X= 0 $$ 
>  $$ \left(\nabla _{Z}R\right)_{X,Y}W+ \left(\nabla _{X}R\right)_{Y,Z}W+ \left(\nabla _{Y}R\right)_{Z,X} W= 0$$ 

 

> [!proof] Proof: 
> Denote 
> $$ \partial _{i}\Gamma _{jk}^{s} = \Gamma _{jk,i}^{s},\quad \partial _{i}\partial _{j}\Gamma _{kl}^{s}= \Gamma _{kl,j,i}^{s}$$ 
> 
> $R$ is a tensor, we have
>  $$ \begin{aligned} R\left(\partial _{i},\partial _{j}\right)\partial _{k}&= \left[ \nabla _{\partial _{i}},\nabla _{\partial _{j}} \right]\partial _{k}-\left[ \partial _{i},\partial _{j} \right]\partial _{k} \\&= \nabla _{\partial _{i}}\left(\nabla _{\partial _{j}}\partial _{k}\right)-\nabla _{\partial _{j}}\left(\nabla _{\partial _{i}}\partial _{k}\right)\\&= \nabla _{\partial _{i}}\left(\Gamma _{jk}^{l}\partial _{l}\right)-\nabla _{\partial _{j}}\left(\Gamma _{ik}^{l}\partial _{l}\right)\\&= D_{\partial _{i}}\Gamma _{jk}^{l} \partial _{l}+ \Gamma _{jk}^{l}\nabla _{\partial _{i}}\partial _{l}-D_{\partial _{j}}\Gamma _{ik}^{l}\partial _{l}-\Gamma _{ik}^{l}\nabla _{\partial _{j}}\partial _{l}\\&= \left(D_{\partial _{i}}\Gamma _{jk}^{l}\right)\partial _{l}-\left(D_{\partial _{j}}\Gamma _{ik}^{l}\right)\partial _{l}\text{ at p} \end{aligned}$$ 
> 
> $R$ is a tensor, we have
>  $$ R\left(X^{i}\partial _{i},Y^{j}\partial _{j}\right)Z^{k}\partial _{k}= X^{i}Y^{j}Z^{k}R\left(\partial _{i},\partial _{j}\right)\partial _{k}= X^{i}Y^{j}Z^{k} \left(R_{ijk}^{l}\partial _{l}\right)$$ 
> We need to show that 
>  $$ R_{ijk}^{l}\partial _{l}+ R_{kij}^{l}\partial _{l}+ R_{jki}^{l}\partial _{l}= 0$$
>  $$ R_{ijk}^{l}+ R_{kij}^{l}+ R_{jki}^{l}= 0 $$
> In fact, 
>  $$ \begin{aligned} \left(R_{ijk}^{l}\right)_{p}&=\left(D_{\partial _{i}}\Gamma _{jk}^{l}-D_{\partial _{j}}\Gamma _{ik}^{l}\right)_{p} \end{aligned} $$
>  $$ \begin{aligned} \Gamma _{ijk}^{l}+ \Gamma _{kij}^{l}+ \Gamma _{jki}^{l}&= \Gamma _{jk,i}^{l}-\Gamma _{ik,j}^{l}+ \Gamma _{ij,k}^{l}-\Gamma _{kj,i}^{l}+ \Gamma _{ki,j}^{l}-\Gamma _{ji,k}^{l} \\&=\sum _{cyc}\left(\Gamma _{jk,i}^{l}-\Gamma _{kj,i}^{l}\right)= 0 \end{aligned}$$    
> Similarly, 
>  $$ \begin{aligned} \left(\nabla _{\partial _{i}}R\right)\left(\partial _{j},\partial _{k},\partial _{l}\right)&= \nabla _{\partial _{i}}\left(R\left(\partial _{j},\partial _{k},\partial _{l}\right)\right)-R\left(\nabla _{\partial _{i}}\partial _{j},\partial _{k},\partial _{l}\right)-R\left(\partial _{j},\nabla _{\partial _{i}}\partial _{k},\partial _{l}\right)-R\left(\partial _{j},\partial _{k},\nabla _{\partial _{i}}\partial _{j}\right)\\&=\nabla _{\partial _{i}}\left(\Gamma _{kl,j}^{s}\partial _{s}-\Gamma _{jl,k}^{s}\partial _{s}\right)\\&= \Gamma _{kl,j,i}^{s}\partial _{s}+ \Gamma _{kl,j}^{s}\nabla _{\partial _{i}}\partial _{s}-\Gamma _{jl,k,i}^{s}\partial _{s}-\Gamma _{jl,k}^{s}\nabla _{\partial _{i}}\partial _{s}\\&= \Gamma _{kl,j,i}^{s}\partial _{s}-\Gamma _{jl,k,i}^{s}\partial _{s} \end{aligned} $$ 
>  $$ \begin{aligned} \sum _{cyc}\,d \varepsilon ^{l}\left(\left(\nabla _{\partial _{i}}R\right)_{\partial _{j},\partial _{k}}\partial _{l}\right)&= \Gamma _{kl,j,i}^{s}-\Gamma _{jl,k,i}^{s}+ \Gamma _{il,k,j}^{s}-\Gamma _{kl,i,j}^{s}+ \Gamma _{jl,i,k}^{s}-\Gamma _{il,j,k}^{s}\\&= \sum _{cyc}\left(\Gamma _{kl,j,i}^{s}-\Gamma _{kl,i,j}^{s}\right) = 0\end{aligned} $$ 

> [!exercise] Exercise 3.4.6:
> Show that a Riemannian manifold with constant curvature has parallel curvature tensor.

> [!remark] Remark: 
> 根据Riemann,1854. $x\wedge y\left(z\right)$是$\operatorname{sec}\left(\pi \right)\equiv 1$的曲率张量.

> [!proof] Proof: 
> We need to show that 
>  $$ \nabla R = 0 $$
>  $$ \begin{aligned} \left(\nabla R\right)\left(X,Y,Z,W\right)&= \nabla _{X}R\left(Y,Z,W\right)\\&=\nabla _{X}\left(R\left(Y,Z\right)W\right)-R\left(\nabla _{X}Y,Z\right)W-R\left(Y,\nabla _{X}Z\right)W-R\left(Y,Z\right)\nabla _{X}W \\&= \nabla _{X}\left(-k\left(Y\wedge Z\right)W\right)-R\left(-k\left(\nabla _{X}Y\wedge Z\right)\left(W\right)\right)-R\left(-k\left(Y\wedge \nabla _{X}Z\right)\left(W\right)\right)\\&+ k\left(Y\wedge X\right)\left(\nabla _{X}W\right)\\&= -k\nabla _{X}\left(\left(Y\wedge Z\right)W\right)+ k \left(\nabla _{X}Y\wedge Z\right)\left(W\right)+ k\left(Y\wedge \nabla _{X}Z\right)\left(W\right)+ k\left(Y\wedge X\left(\nabla _{X}W\right)\right)\end{aligned} $$  
>  $$ R\left(X,Y\right)Z= -k\left(X\wedge Y\right)\left(Z\right) $$ 
> Only need to show that 
>  $$- \nabla _{X}\left(\left(Y\wedge Z\right)W\right)+ \left(\nabla _{X}Y\wedge Z\right)\left(W\right)+ \left(Y\wedge \nabla _{X}Z\right)\left(W\right)+ \left(Y\wedge Z\right)\left(\nabla _{X}W\right)= 0 $$ 
>
>  $$ \left(x\wedge y\right)\left(v\right)= g\left(x,v\right)y-g\left(y,v\right)x $$ 
>  $$ \left(Y\wedge Z\right)\left(W\right)= g\left(Y,W\right)Z-g\left(Z,W\right)Y $$
>  $$ \left(\nabla _{X}Y\wedge Z\right)\left(W\right)= g\left(\nabla _{X}Y,W\right)Z-g\left(Z,W\right)\nabla _{X}Y $$
>  $$ \left(Y\wedge \nabla _{X}Z\right)\left(W\right)= g\left(Y,W\right)\nabla _{X}Z-g\left(\nabla _{X}Z,W\right)Y $$
>  $$ \left(Y\wedge Z\right)\left(\nabla _{X}W\right)= g\left(Y,\nabla _{X}W\right)Z- g\left(Z,\nabla _{X}W\right)Y$$    
> Sum over the three, RHS is 
>  $$ \left(\nabla _{X}\left(g\left(Y,W\right)\right)Z\right)-\left(\nabla _{X}\left(g\left(Z,W\right)Y\right)\right)+ g\left(Y,W\right)\nabla _{X}Z-g\left(Z,W\right)\nabla _{X}Y $$ 
>  $$ \begin{aligned} \nabla _{X}\left(\left(Y\wedge Z\right)\left(W\right)\right)&= \nabla _{X}\left(g\left(Y,W\right)\left(Z\right)-g\left(Z,W\right)\left(Y\right)\right)\\&= \left(\nabla _{X}g\left(Y,W\right)\right)\left(Z\right)+ g\left(Y,W\right)\nabla _{X}Z - \left(\nabla _{X}g\left(Z,W\right)\right)\left(Y\right)-g\left(Z,W\right)\left(Y\right)\end{aligned} $$ 
> which are the same as the summation of the above three.
>
> 


> [!exercise] Exercise: 
> Show that a Riemannian manifold with parallel Ricci tensor has constant scalar curvature.
 
> [!proof] Proof: 
> If 
>  $$ \nabla \operatorname{Ric}= 0 $$ 
> Then 
>  $$ \begin{aligned} \nabla \operatorname{scal}&= \nabla \left(\operatorname{tr}\left(\operatorname{Ric}\right)\right)\\&= \operatorname{tr}\left(\nabla \operatorname{Ric}\right)\\&= 0 \end{aligned} $$ 
> Thus
>  $$ \operatorname{scal}= c $$ 


> [!exercise] Exercise: 
> The metric in coordinates satisfies
> (1) $\partial _{s}g^{ij}= -g^{ik}\partial _{s}g_{kl}g^{lj}$
> (2) $\partial _{s}g^{ij}= -g^{il}\Gamma _{sl}^{j}-g^{jl}\Gamma _{sl}^{i}$

 
> [!proof] Proof: 
>   $$ 0= \partial _{s}\left(\delta _{j}^{k}\right)= \partial _{s}\left(g^{ij}g_{jk}\right)=\partial _{s}g^{ij} g_{jk}+ g^{ij}\partial _{s}g_{jk} $$
> Let $g^{kl}$ act on right, we have 
>  $$ \partial _{s}g^{ij}\delta _{j}^{l}= -g^{ij}\partial _{s}g_{jk}g^{kl}$$
> Where the LHS is $\partial _{s}g^{il}$, switch the index $l$ with $j$, we have
> $$ \partial _{s}g^{ij}= -g^{il}\partial _{s}g_{lk}g^{kj}= -g^{ik}\partial _{s}g_{kl}g^{lj} $$ 
>
>   $$ \begin{aligned} \partial _{s}g_{lk}&= \partial _{s}g\left(\partial _{l},\partial _{k}\right)= g\left(\nabla _{\partial _{s}}\partial _{l},\partial _{k}\right)+ g\left(\partial _{l},\nabla _{\partial _{s}}\partial _{k}\right)\\&= g_{ik}\Gamma _{sl}^{i}+ g_{jl}\Gamma _{sk}^{j} \end{aligned} $$ 
>  $$ \begin{aligned} \partial _{s}g^{ij}&= -g^{ik}\left(g_{ik}\Gamma _{sl}^{i}\right)g^{lj}-g^{ik}\left(g_{jl}\Gamma _{sk}^{j}\right)g^{lj}\\&= -g^{lj}\Gamma _{sl}^{i}- g^{ik}\Gamma _{sk}^{j}\\&= -g^{lj}\Gamma _{sl}^{j}-g^{il}\Gamma _{sl}^{j}\end{aligned} $$ 

> [!exercise] Exercise 3.4.8:
> Show in analogy with proposition 3.1.5 that if $R$ is the (0,4)-curvature tensor and $\operatorname{Ric}$ the (0,2)-Ricci tensor, then
> 
> $$(\nabla^*R)(Z,X,Y)=(\nabla_X\operatorname{Ric})(Y,Z)-(\nabla_Y\operatorname{Ric})(X,Z).$$
> 
> Conclude that $\nabla^*R=0$ if $\nabla\operatorname{Ric}=0$. Then show that $\nabla^*R=0$ if and only if the (1,1) Ricci tensor satisfies:
> 
> $$(\nabla_X\operatorname{Ric})(Y)=(\nabla_Y\operatorname{Ric})(X)\text{ for all }X,Y.$$

> [!proof] Proof: 
>  $$ \begin{aligned} \left(\nabla ^{*}R\right)\left(Z,X,Y\right)&= -\sum _{i}\left(\nabla _{E_{i}}R\right)\left(E_{i},Z,X,Y\right)\\&=-\sum _{i}\left(\nabla _{E_{i}}R\right)\left(X,Y,E_{i},Z\right)\\&= \sum _{i}\left(\nabla _{X}R\right)\left(Y,E_{i},E_{i},Z\right)+ \sum _{i}\left(\nabla _{Y}R\right)\left(E_{i},X,E_{i},Z\right)\\&= \sum _{i}\left(\nabla _{X}R\right)\left(E_{i},Z,Y,E_{i}\right)- \sum _{i}\left(\nabla _{Y}R\right)\left(E_{i},X,Z,E_{i}\right)\\&= \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{X}R\right)\right)\left(Z,Y\right)- \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{Y}R\right)\right)\left(X,Z\right)\end{aligned}$$ 
>  $$ \operatorname{Rm}\left(X,Y,Z,W\right)= g\left(R\left(X,Y\right)Z,W\right)$$ 
>  $$ Rm= R^{\flat ^{1}_{4}} $$ 
>   $$ \operatorname{Ric}= \operatorname{tr}_{1}^{1}R $$
>  $$ \left(\left(\operatorname{tr}_{g}\right)_{4}^{1}\operatorname{Rm}\right)_{jk}=g^{il} R_{ijkl} $$ 
>  $$ \left(\operatorname{Ric}\right)_{jk}= \operatorname{tr}_{1}^{1}R = R_{ijk}^{i}= g^{il}R_{ijkl} $$ 
> Thus
>  $$ \left(\operatorname{Ric}\right)= \operatorname{tr}_{1}^{1}\operatorname{Rm}^{\sharp _{4}^{1}}= \left(\operatorname{tr}_{g}\right)_{4}^{1}\operatorname{Rm}$$ 
>   $$ \left(\nabla _{X}\operatorname{Ric}\right)= \left(\nabla _{X}\left(\operatorname{tr}_{g}\right)_{4}^{1}R\right)= \left(\operatorname{tr}_{g}\right)_{4}^{1}\left(\nabla _{X}R\right)$$ 
> Thus
>  $$ \begin{aligned} \left(\nabla ^{*}R\right)\left(Z,X,Y\right)&= \left(\nabla _{X}\operatorname{Ric}\right)\left(Z,Y\right)- \left(\nabla _{Y}\operatorname{Ric}\right)\left(X,Z\right)\\&= \left(\nabla _{X}\operatorname{Ric}\right)\left(Y,Z\right)-\left(\nabla _{Y}\operatorname{Ric}\right)\left(X,Z\right) \end{aligned} $$ 
>  $$ \left(\left(\nabla _{X}\operatorname{Ric}\right)\left(Y\right)\right)^{\flat} \left(Z\right)= \left(\left(\nabla _{Y}\operatorname{Ric}\right)\left(X\right)\right)^{\flat}\left(Z\right)$$ 
>  $$ \left(\nabla _{X}\operatorname{Ric}\left(Y\right)\right)= \left(\nabla _{Y}\operatorname{Ric}\left(X\right)\right) $$ 

> [!exercise] Exercise 3.4.9:
> Suppose we have two Riemannian manifolds $(M,g_M)$ and $(N,g_N)$. Then the product has a natural product metric $(M\times N,g_M+g_N)$. Let $X$ be a vector field on $M$ and $Y$ one on $N$. Show that if we regard these as vector fields on $M\times N$, then $\nabla_XY=0$. Conclude that $\operatorname{sec}(X,Y)=0$. This means that product metrics always have many curvatures that vanish.

> [!proof] Proof: 
>  $$ X_{\left(a,b\right)} = X_{a},\quad Y_{\left(c,d\right)}= Y_{d}$$ 
>   $$ \begin{aligned} 2g\left(\nabla _{X}Y,Z\right)&= X\left(g\left(Y,Z\right)\right)+ Y\left(g\left(X,Z\right)\right)-Z\left(g\left(X,Y\right)\right)\\&+ g\left(\left[ X,Y \right],Z\right)-g\left(\left[ X,Z \right],Y\right)-g\left(\left[ Y,Z \right],X\right) \end{aligned} $$ 
> Set $Z= Z_{M}+ Z_{N}$
>  $$ g\left(Y,Z_{M}\right)= 0,\quad g\left(X,Z_{M}\right)= g_{M}\left(X,Z_{M}\right),\quad g\left(X,Y\right)= 0 $$ 
> Suppose that $\varphi _{t}$, $\psi _{t}$ are the flow of $X,Y$ in $M,N$ repectively. Then 
>  $$ \Phi _{t}\left(p,q\right)= \left(\phi _{t}\left(p\right),q\right),\quad \Psi _{t}\left(p,q\right)= \left(p,\psi _{t}\left(q\right)\right) $$
> are the flow for $X,Y$ in $M\times N$ repectively. Then
>  $$ \Phi _{t_1}\circ \Psi _{t_2}\left(p,q\right)= \Psi _{t_2}\circ \Phi _{t_1}  \left(p,q\right)= \left(\varphi _{t_1}\left(p\right),\psi _{t_2}\left(q\right)\right) $$
> The flow commutes, thus $\left[ X,Y \right]= 0$. Similarly, $\left[ Y,Z_{M} \right]= 0$, we have 
>  $$ \begin{aligned} 2g\left(\nabla _{X}Y,Z_{M}\right) &= Y\left(g_{M}\left(X,Z_{M}\right)\right)-g\left(\left[ X,Z_{M} \right],Y\right) \end{aligned}$$   
> where $\left[ X,Z_{M} \right]\in \mathfrak{X}\left(M\right)$, then $g\left(\left[ X,Z_{M} \right],Y\right)= 0$. $g_{M}\left(X,Z_{M}\right)$ is independent with the coordinates for $N$, we have $Y\left(g_{M}\left(X,Z_{M}\right)\right)= 0$. Thus $g\left(\nabla _{X}Y,Z_{M}\right)= 0$. Similarly, $g\left(\nabla _{X}Y,Z_{N}\right)= 0$. Thus $g\left(\nabla _{X}Y,Z\right)= 0$. $\nabla _{X}Y= 0$.
>
>  $$ \operatorname{sec}\left(X,Y\right)= \frac{g\left(R\left(X,Y\right)Y,X\right) }{g\left(X\wedge Y,X\wedge Y\right) }$$
>  $$ \begin{aligned} R\left(X,Y\right)Y&=\nabla _{X}\nabla _{Y}Y-\nabla _{Y}\nabla _{X}Y-\nabla _{\left[ X,Y \right]} Y\\&= \nabla _{X}\left(\nabla _{Y}Y\right) \end{aligned}$$  
> Let $W= \nabla _{Y}Y$, 
>  $$ \begin{aligned} g\left(\nabla _{Y}Y,Z_{M}\right)&= 2Y\left(g\left(Y,Z_{M}\right)\right)-Z_{M}g\left(Y,Y\right)- g\left(\left[ Y,Z_{M} \right]Y\right)- g\left(\left[ Y,Z_{M} \right]\right) + g\left(\left[ Y,Y \right],Z_{M}\right)\\&= 0 \end{aligned}$$ 
> Thus $W\in \mathfrak{X}\left(N\right)$.
>  The above shows that $\nabla _{X}W= 0$. WE have $R\left(X,Y\right)Y= 0$. Thus
>  $$ \operatorname{sec}\left(X,Y\right)= 0 $$ 

> [!exercise] Exercise 3.4.18:
> Consider a Riemannian metric $(M,g)$ and **scale** the metric by multiplying it by a number $\lambda^2$. This creates a new Riemannian manifold $(M,\lambda^2g)$.
> 1. Show that the new connection and $(1,3)$-curvature tensor remain the same.
> 2. Show that $\operatorname{sec}$, $\operatorname{scal}$, and $\mathfrak{R}$ all get multiplied by $\lambda^{-2}$.
> 3. Show that $\operatorname{Ric}$ as a $(1,1)$-tensor is multiplied by $\lambda^{-2}$.
> 4. Show that $\operatorname{Ric}$ as a $(0,2)$-tensor is unchanged.

> [!proof] Proof: 
> 1.  $$ \begin{aligned} g\left(\nabla _{X}^{g}Y,Z\right)&= X\left(g\left(Y,Z\right)\right)+ Y\left(g\left(X,Z\right)\right)-Z\left(g\left(X,Y\right)\right)\\&-g\left(\left[ X,Z \right],Y\right)-g\left(\left[ Y,Z \right],X\right)+ g\left(\left[ X,Y \right],Z\right) \end{aligned} $$ 
>     We have
>      $$  \left(\lambda ^{2}g\right)\left(\nabla ^{\lambda ^{2}g}_{X}Y,Z\right)= \lambda ^{2}g\left(\nabla _{X}^{g}Y,Z\right)  $$ 
>     Thus $\nabla _{X}^{\lambda ^{2}g}= \nabla _{X}^{g}$. Since $\left(1,3\right)$-curvature is determined by the connetction, thus remain the same.
> 2. 
> $\left(\mathcal{R}_{new}\right)_{ijkl}=\lambda ^{2} g_{ml}\left(R_{new}\right)_{ijk}^{m}= \lambda ^{2}g_{ml}R_{ijk}^{m}= \lambda ^{2}\mathcal{R}_{ijkl}$
>
> Thus $\mathcal{R}_{new}= \lambda ^{2}\mathcal{R}$
>  $$ \begin{aligned} \operatorname{sec}_{new}\left(v,w\right)&= \frac{\mathcal{R}_{new}\left(v,w,w,v\right) }{ \left(\lambda ^{2}g\right)\left(v\wedge w,v\wedge w\right)}\\&= \frac{\lambda ^{2}\mathcal{R}\left(v,w,w,v\right) }{\lambda ^{4}g\left(v\wedge w,v\wedge w\right) }\\&= \lambda ^{-2}\operatorname{sec}\left(v,w\right) \end{aligned} $$ 
> From
>  $$ \left(\operatorname{Ric}^{\left(0,2\right)}\right)_{ij}= R_{kij}^{k} $$ 
> we have 
>  $$ \operatorname{Ric}^{\left(0,2\right)}_{new}= \operatorname{Ric}^{\left(0,2\right)}  $$ 
> and 
>  $$ \left(\operatorname{Ric}^{\left(1,1\right)}\right)^{i}_{j}= g^{ik}\operatorname{Ric}^{\left(0,2\right)} _{kj}$$ 
>  $$ \begin{aligned} &\lambda ^{4}g\left(\mathfrak{R}_{new}\left(\sum X_{i}\wedge Y_{i},\sum V_{j}\wedge W_{j}\right)\right)\\&= \left(\lambda ^{2}g\right)\left(\mathfrak{R}_{new}\left(\sum X_{i}\wedge Y_{i}, \sum V_{j}\wedge W_{j}\right)\right)\\&= \sum \mathcal{R}_{new}\left(X_{i},Y_{i},W_{j},V_{j}\right) \\&= \lambda ^{2}\sum \mathcal{R}\left(X_{i},Y_{i},W_{j},V_{j}\right)\\&= \lambda ^{2}g\left(\mathfrak{R}\left(\sum X_{i}\wedge Y_{i},\sum V_{j}\wedge W_{j}\right)\right)\end{aligned} $$ 
> Thus
>  $$ \mathfrak{R}_{new}= \lambda ^{-2}\mathfrak{R} $$ 
> Alternatively,  we can consider
>  $$\mathfrak{R}^{ij}_{kl}= g^{pi}g^{qj}\mathcal{R}_{pqkl} $$ 


> [!exercise] Exercise 3.4.20 (**Integrability for PDEs**):
> For given functions $P_k^i(x,u)$, where $x=(x^1,\ldots,x^n)$, $u=(u^1,\ldots,u^m)$, $i=1,\ldots,m$, and $k=1,\ldots,n$, consider the initial value problems for a system of first-order PDEs
> $$\begin{aligned}
> \frac{\partial u^i}{\partial x^k}&=P_k^i(x,u(x)),\\
> u(x_0)&=u_0.
> \end{aligned}$$
> 1. Show that
>    $$\frac{\partial^2u^i}{\partial x^k\partial x^l}=\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j,$$
>    and conclude that all such initial value problems can only be solved when the **integrability conditions**
>    $$\frac{\partial P_l^i}{\partial x^k}+\frac{\partial P_l^i}{\partial u^j}P_k^j=\frac{\partial P_k^i}{\partial x^l}+\frac{\partial P_k^i}{\partial u^j}P_l^j$$
>    hold.
> 
> 2. Conversely show that all such initial value problems can be solved if the integrability conditions hold. Hint: This is equivalent to the Frobenius integrability theorem but can be established directly (see also [97, vol. 1]). When $P$ does not depend on $u$, this result goes back to Clairaut. The general case appears to have been a folklore result that predates what we call the Frobenius theorem about integrability of distributions.
> 
> 3. Using coordinates $x^i$ on a Riemannian $n$-manifold form the system
>    $$\frac{\partial U_j^i}{\partial x^k}=\Gamma_{kj}^sU_s^i,\quad i,j=1,\ldots,n$$
>    and show that its integrability conditions are equivalent to $R^s_{klj}=0$.
> 
> 4. Show that a flat Riemannian manifold admits Cartesian coordinates. Hint: Denote the potential Cartesian coordinates by $u^i$ and consider the system:
>     $$\frac{\partial u^i}{\partial x^k}=U_k^i$$
>    with appropriate initial values. Make sure you check that $u^i$ really form a Cartesian coordinate system. This way of locally characterizing Euclidean space is very close in spirit to Riemann's original approach. Hint: Consider the derivative of
>    $$g^{kl}\frac{\partial u^i}{\partial x^k}\frac{\partial u^j}{\partial x^l},$$
>    where $g_{kl}$ denotes the metric with respect to $x$ and use 2.5.8.

> [!proof] Proof: 
> 1. If $u^{i}$ solves the PDE, then
>     $$ \begin{aligned} \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}&= \frac{\partial }{\partial x^{k}}\left(P_{l}^{i}\left(x,u\left(x\right)\right)\right)\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}\frac{\partial u^{j}}{\partial x^{k}}\\&= \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j} \end{aligned} $$ 
>    From
>     $$ \frac{\partial ^{2}u^{i}}{\partial x^{k}\partial x^{l}}= \frac{\partial ^{2}u^{i}}{\partial x^{l}\partial x^{k}} $$ 
>    we have 
>     $$ \frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}= \frac{\partial P_{k}^{i}}{\partial x^{l}}+ \frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j} $$ 
> 2. 
>      Define 
>       $$ X_{k}= \frac{\partial }{\partial x^{k}}+ \frac{\partial }{\partial u^{j}}P_{k}^{j} $$
>       Consider a $M\times \mathbb{R} ^{m}$, $\left(x^{1},\cdots ,x^{n},u^{1},\cdots ,u^{m}\right)$  is a chart for $M\times \mathbb{R} ^{m}$, define
>       $$ X_{k}= \frac{\partial }{\partial x^{k}}+ P_{k}^{j}\frac{\partial }{\partial u^{j}} $$
>       $$ \begin{aligned} [X_{k},X_{l}]&= \left(X_{k}\left(P_{l}^{i}\right)- X_{l}\left(P_{k}^{i}\right)\right)\frac{\partial }{\partial u^{i}}\\&= \left(\frac{\partial P_{l}^{i}}{\partial x^{k}}+ \frac{\partial P_{l}^{i}}{\partial u^{j}}P_{k}^{j}-\frac{\partial P_{k}^{i}}{\partial x^{k}}-\frac{\partial P_{k}^{i}}{\partial u^{j}}P_{l}^{j}\right)\partial   u^{j} \\&= 0\end{aligned} $$
>      
>      Let $\mathcal{D}= \operatorname{span}\left\{ X_1,\cdots ,X_{n} \right\}$, then $\mathcal{D}$ is a involutive distribution. From Frobenius Theorem, $\mathcal{D}$ is completely integrable. For $p= \left(x_0,u_0\right)$, there exists a submanifold $\Sigma\subseteq M\times \mathbb{R}^{m}$ containing $p$, such that 
>     $$ T_{q}\Sigma = \mathcal{D}_{q},\quad \forall q\in \Sigma  $$ 
>    Let $\pi :X\times \mathbb{R} ^{m}\to X$, $\pi \left(x,u\right)= x$, then
>     $$ d\pi |_{T_{p}\Sigma } \left(X_{k}\right)= \frac{\partial }{\partial x^{k}}$$
>    We have $\,d \pi |_{T_{p}\Sigma }$ is a linear isomorphism. From inverse function theorem, there exists $F:V\to U$, $V\subseteq \Sigma$, $U\subseteq X\times \mathbb{R} ^{m}$ are open sets , such that 
>     $$ \pi \circ F= \operatorname{Id}_{V},\quad F\circ \pi = \operatorname{Id}_{U} $$
>    Then  we have 
>     $$ F\left(x^{1},\cdots ,x^{n}\right)= \left(x^{1},\cdots ,x^{n},f^{1},\cdots ,f^{m}\right) $$ 
>    is a diffeomorphism. 
>    Define 
>     $$ Y_{k}= D F\left(\frac{\partial }{\partial x_{k}}\right) = \frac{\partial }{\partial x_{k}}+ \frac{\partial f^{j}}{\partial x_{k}}\frac{\partial }{\partial u^{j}}$$ 
>    Then 
>     $$ T_{q}\Sigma = \operatorname{span}\left\{ Y_1,\cdots ,Y_{n} \right\}= \operatorname{span}\left\{ X_1,\cdots ,X_{n} \right\} $$ 
>    If
>     $$ Y_{k}= g^{i}X_{i}\implies \frac{\partial }{\partial x^{k}}+ \frac{\partial f^{j}}{\partial x^{k}}\frac{\partial}{\partial u^{j}}= g^{i}\left(\frac{\partial }{\partial x^{i}}+ P^{k}_{i}\frac{\partial }{\partial u^{k}}\right)\implies g^{k}= 1,g^{i}= 0(i\neq k)$$ 
>    Thus $Y_{k}= X_{k}$, $\frac{\partial f^{j}}{\partial x^{k}}= P_{k}^{j}$. Then $\left(f^{1},\cdots ,f^{m}\right)$ is the solution for the PDEs.
>    
> 3. 
>     $$ \frac{\partial ^{2}U_{j}^{i}}{\partial x^{k}x^{l}}= \left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{k}} $$ 
>     $$ \begin{aligned} \left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{k}}&= \left(\frac{\partial }{\partial x^{l}}\Gamma _{kj}^{s}\right)U_{s}^{i}+ \Gamma _{kj}^{s}\frac{\partial U_{s}^{i}}{\partial x^{l}} \end{aligned}$$
>     $$\left(\frac{\partial }{\partial x^{k}}\Gamma _{lj}^{s}\right)U_{s}^{i}+ \Gamma _{lj}^{s}\Gamma _{ks}^{m}U_{m}^{i} = \left(\frac{\partial }{\partial x^{l}}\Gamma_{kj}^{s} \right)U_{s}^{i}+ \Gamma _{kj}^{s}\Gamma _{ls}^{m}U_{m}^{i}$$
>     exchange $s$ and $m$ of the second term bothsides, we have 
>      $$\left(\frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}\right)U_{s}^{i}+ \Gamma _{lj}^{m}\Gamma _{km}^{s}U_{s}^{i}= \left(\frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}\right)U_{s}^{i}+ \Gamma _{kj}^{m}\Gamma _{lm}^{s}U_{s}^{i} $$
>     Then
>     $$ \frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}+ \Gamma _{lj}^{m}\Gamma _{km}^{s}= \frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}+ \Gamma _{kj}^{m}\Gamma _{lm}^{s} \tag{*}$$    
>     From which we know that the integrability condition holds iff $(*)$ holds, which is equivalent to the following.
>    $$ \begin{aligned} R_{klj}^{s}&= R\left(\partial _{k},\partial _{l},\partial _{j}\right)\\&=\nabla _{\partial _{k}}\nabla _{\partial _{l}}\partial _{j}-\nabla _{\partial _{l}}\nabla _{\partial _{k}}\partial _{j}\\&= \nabla _{\partial _{k}}\left(\Gamma _{lj}^{t}\partial _{t}\right)-\nabla _{\partial _{l}}\left(\Gamma _{kj}^{t}\partial _{t}\right)\\&= \frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}\partial _{s}+ \Gamma _{lj}^{t}\Gamma _{kt}^{s}\partial _{s}- \frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}\partial _{s}-\Gamma _{kj}^{t}\Gamma _{lt}^{s}\partial _{s} \\&= \left(\frac{\partial \Gamma _{lj}^{s}}{\partial x^{k}}-\frac{\partial \Gamma _{kj}^{s}}{\partial x^{l}}+ \Gamma _{km}^{s}\Gamma ^{m}_{lj}-\Gamma _{lm}^{s}\Gamma _{kj}^{m}\right)= 0\end{aligned} $$ 
> 4.    
>    If the Riemannian manifold is flat , then the initial value problem
>     $$ \frac{\partial U_{j}^{i}}{\partial x^{k}}= \Gamma _{kj}^{s}U_{s}^{i},\quad i,j=  1,\cdots,n  $$
>      $$ U\left(x_0\right)= U_0 $$
>      can be solved.  
>    
>    
>    To solve the initial value problem 
>     $$ \frac{\partial u^{i}}{\partial x^{k}}= U_{k}^{i} $$
>      $$ u^{i}\left(x_0\right)= u_0 $$  
>    We only need to check the integrability conditions:
>     $$ \frac{\partial U_{l}^{i}}{\partial x^{k}}+ \frac{\partial U_{l}^{i}}{\partial u^{j}}U_{k}^{j}= \frac{\partial U_{k}^{i}}{\partial x^{l}}+ \frac{\partial U_{k}^{i}}{\partial u^{j}}U_{l}^{j} $$ 
>    By using $\frac{\partial U_{j}^{i}}{\partial x^{k}}= \Gamma _{kj}^{s}U_{s}^{i}$, $\frac{\partial U_{j}^{i}}{\partial u^{s}}= 0$,  the conditions can be written as 
>     $$ \Gamma _{kl}^{s}U_{s}^{i}= \Gamma _{lk}^{s}U_{s}^{i}$$ 
>    which is obviously true since $\nabla$ is torsion-free.
>    
>    In order to show that $u$ is actually a cartesian coordinates, we fisrt choose $U_0$ such that 
>     $$ g_{kl}= \left(U_0\right) _{k}^{i}\left(U_0\right)_{l}^{j}\delta _{ij}$$ 
>    Then at $x_0$, 
>     $$ g_{kl}= \frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\delta _{ij}$$  
>    We have at $x_0$
>     $$ \tilde{g}_{ij}= g_{x_0}\left(\frac{\partial }{\partial u^{i}},\frac{\partial }{\partial u^{j}}\right)= g_{kl}\frac{\partial x^{k}}{\partial u^{i}}\frac{\partial x^{l}}{\partial u^{j}}= \delta _{ij}$$ 
>    To show $\tilde{g}_{ij}= \delta _{ij}$ globally, we only need to show that for each $s$, there is 
>     $$ \partial _{s}\tilde{g}_{ij}= 0 $$ 
>    or equivalently, 
>     $$ \partial _{s}\tilde{g}^{ij}= \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right)= 0 $$
>    In fact
>     $$ \begin{aligned} \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right) &= \left(\partial _{s}g^{kl}\right)U^{i}_{k}U^{j}_{l}+ g^{kl}\frac{\partial U_{k}^{i}}{\partial x^{s}}U_{l}^{i}+ g^{kl}\frac{\partial U_{l}^{j}}{\partial x^{s}}U_{k}^{i}\\&=  \left(\partial _{s}g^{kl}\right)U_{k}^{i}U_{l}^{j}+ g^{kl}\Gamma _{sk}^{m}U_{m}^{i}U_{l}^{i}+ g^{kl}\Gamma _{sl}^{m}U_{m}^{j}U_{k}^{i} \end{aligned}$$
>    By using
>     $$ \left(\partial _{s}g^{kl}\right)= -g^{km}\Gamma _{sm}^{l}-g^{lm}\Gamma _{sm}^{k} $$
>    we get 
>     $$ \begin{aligned} \left(\partial _{s}g^{kl}\right)U_{l}^{j}U_{k}^{i}&= -g^{km}\Gamma _{sm}^{l}U_{k}^{i}U_{l}^{j}-g^{lm}\Gamma _{sm}^{k}U_{k}^{i}U_{l}^{j}\\&= -g^{kl}\Gamma _{sl}^{m}U_{k}^{i}U_{m}^{j}-g^{kl}\Gamma _{sk}^{m}U_{m}^{i}U_{l}^{j} \end{aligned}$$    
>     Then 
>      $$ \partial _{s}\left(g^{kl}\frac{\partial u^{i}}{\partial x^{k}}\frac{\partial u^{j}}{\partial x^{l}}\right)= 0 $$ 
>    Thus $\tilde{g}^{ij}$ is constant for each $i,j$. We get $\tilde{g}^{ij}= \delta ^{ij}$ since $\tilde{g}^{ij}_{x_0}= \delta ^{ij}$, that is $u^{i}$ forms a Cartesian coordinates.




> [!exercise] Exercise: 4.7.13
> The stereographic projection of $x^{n+1}=0$ to a hypersurface $M\subset\mathbb{R}^n\times\mathbb{R}$ that is transverse to the lines emanating from $-e_{n+1}=(0,\ldots,0,-1)$ is given by $x\mapsto S(x)$ where $x\in\mathbb{R}^n$ and
> $$S(x)=-e_{n+1}+\lambda(x)\bigl(e_{n+1}+(x,0)\bigr).$$
>
> 1. When $M=S^n(1)$ show that $\lambda(1+|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $S^n(1)$ is given by
> $$\frac{4}{(1+|x|^2)^2}g_{\mathbb{R}^n}.$$
>
> 2. When $M=H^n(1)\in\mathbb{R}^{n,1}$ show that $\lambda(1-|x|^2)=2$ and that $S$ is a conformal map with the property that in these coordinates the metric on $H^n(1)$ is Poincaré disc
> $$\frac{4}{(1-|x|^2)^2}g_{\mathbb{R}^n}.$$


> [!proof] Proof: 
> 1.  $S\left(x\right)+ e_{n+ 1}$这个向量于$\left(x,0\right)+ e_{n+ 1}$这个向量共线, 即
>      $$ \frac{S\left(x\right)+ e_{n+ 1} }{e_{n+ 1}+ \left(x,0\right) }= \lambda \left(x\right) $$
>     于是$S\left(x\right)$由$x$如此参数化 
>     横截相交是说$M$和射线的交点的切空间张成整个空间, 这里由于直线的切空间就是子集, 意思是射线不切于$M$.
>     当$M= S^{n}\left(1\right)$时, 我们有$S\left(x\right)\in S^{n}\left(x\right)$,  于是
>      $$ S\left(x\right) = \left(\lambda \left(x\right)x, \left(\lambda \left(x\right)-1\right)\right)$$
>      $$ 1= \left| S\left(x\right) \right|^{2}= \lambda ^{2}\left| x \right| ^{2}+ \left(\lambda -1\right)^{2}  $$
>      于是
>       $$ \lambda ^{2}\left| x \right| ^{2}= \left(2-\lambda \right) \lambda \implies \lambda \left| x \right| ^{2}= 2-\lambda \implies \lambda \left(1+ \left| x \right| ^{2}\right)= 2$$
>     $S$是映射$\mathbb{R} ^{n}\to S^{n}\left(1\right)$.   
>      $$ S\left(x\right) = -e_{n+ 1}+ \frac{2 }{1+ \left| x \right|^{2}  }\left(e_{n+ 1}+ \left(x,0\right)\right)= \left(\frac{2x }{1+ \left| x \right|^{2}  }, \frac{1-\left| x \right|^{2}  }{1+ \left| x \right| ^{2} }\right)$$ 
>     我们需要证明
>      $$ S^{*}g_{S^{n}}= k^{2} g_{\mathbb{R} ^{n}} $$ 
>      而
>      $$ g_{S^{n}}= \iota _{S^{n}}^{*}g_{\mathbb{R} ^{n+ 1}} $$ 
>     于是需要证明
>      $$ \left(\iota_{S}\circ S\right) ^{*}g_{\mathbb{R} ^{n+ 1}}= k^{2}g_{\mathbb{R} ^{n}}$$ 
>     也就是说把$S$视为映射$\mathbb{R} ^{n}\to \mathbb{R} ^{n+ 1}$, 说明$S$是一个conformal 浸入, 
>      $$ \begin{aligned} S^{*}g_{\mathbb{R} ^{n+ 1}}\left(v,w\right) &= \sum _{i}\left(\,d x^{i}\circ S\right)^{2}\\&= \,d \left(\frac{2x_1 }{1+ \left| x \right|^{2}  }\right)^{2}+ \cdots + \,d \left(\frac{2x_{n} }{1+ \left| x \right| ^{2} }\right) ^{2}+ \,d \left(\frac{1-\left| x \right| ^{2} }{1+ \left| x \right| ^{2} }\right) ^{2}\end{aligned}$$
>      $$ \,d \left(\frac{2x_1 }{1+ \left| x \right|^{2}  }\right) = \frac{2dx_1 }{1+ \left| x \right|^{2}  }+ 2x_1d\left(\frac{1 }{1+ \left| x \right| ^{2} }\right)$$ 
>      $$ d\left(\frac{1-\left| x \right| ^{2} }{ 1+ \left| x \right|^{2} }\right) =2d\left(\frac{1 }{1+ \left| x \right| ^{2} }\right)$$  
>     于是
>      $$ S^{*}g_{\mathbb{R} ^{n+ 1}}= \frac{4g_{\mathbb{R} ^{n}} }{\left(1+ \left| x \right|^{2} \right)^{2} } + \frac{8x_{i}\,d x_{i} }{1+ \left| x \right| ^{2} }d\left(\frac{1 }{1+ \left| x \right| ^{2}}\right)+ 4\left( 1+ \left| x \right|^{2} \right)d\left(\frac{1 }{ 1+ \left| x \right| ^{2}}\right)^{2}$$ 
>     
>      $$ 2\sum _{i}x_{i}\,d x_{i}= d\left(\left| x \right|^{2} \right) $$ 
>     那么
>      $$ \frac{1 }{4 }\left(S^{*}g_{\mathbb{R} ^{n+ 1}}-\frac{4 }{\left(1+ \left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}}\right)= \left(-\frac{d\left(\left| x \right|^{2} \right)}{1+ \left| x \right|^{2}  }-\left(1+ \left| x \right|^{2} \right)d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)\right)d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)   $$ 
>     而
>      $$ \begin{aligned} d\left(\frac{1 }{1+ \left| x \right|^{2}  }\right)&= -\frac{1 }{\left(1+ \left| x \right|^{2} \right)^{2} }\,d \left(1+ \left| x \right|^{2} \right)\\&= \frac{d \left(\left| x \right|^{2} \right)}{ \left(1+ \left| x \right|^{2} \right)^{2}} \end{aligned}$$ 
>     最终得到
>      $$S^{*}g_{S^{n}} = S^{*}g_{\mathbb{R} ^{n+ 1}}= \frac{4 }{\left(1+ \left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}} $$ 
>     因此$S$是一个conformal map , 使得$g_{S^{n}}$的坐标表示由上式给出.
> 2. 
>     $$ H^{n}\left(1\right)= \left\{ p: \left(p^{1}\right)^{2}+ \cdots + \left(p^{n}\right)^{2}-\left(p^{n+ 1}\right)^{2}= -1,\quad p^{n+ 1} > 0\right\} $$ 
>    
>     $$ S\left(x\right)= \left(\lambda x,\lambda -1\right) $$
>     $$ \lambda ^{2}\left| x \right|^{2} -\left(\lambda -1\right)^{2}= -1\implies \lambda ^{2}\left| x \right|^{2}= \lambda \left(\lambda -2\right)\implies \lambda \left| x \right|^{2}= \lambda -2\implies \lambda \left(1-\left| x \right|^{2} \right)= 2   $$  
>    因此
>     $$ \begin{aligned} S\left(x\right)&= -e_{n+ 1}+ \frac{2 }{1-\left| x \right|^{2}  } \left(e_{n+ 1}+ \left(x,0\right)\right)\\&= \left(\frac{2x }{ 1-\left| x \right|^{2} }, \frac{2 }{1-\left| x \right|^{2}  }-1\right) \end{aligned}$$ 
>    
>      $$ \begin{aligned} S^{*}g_{\mathbb{R} ^{n,1}}&= \sum _{i= 1}^{n}\,d \left(\frac{2x^{i} }{ 1-\left| x \right|^{2} }\right)^{2}-d\left(\frac{2 }{1-\left| x \right|^{2}  }\right)^{2} \end{aligned}$$ 
>    
>    Where
>    
>     $$ d\left(\frac{2x^{i} }{ 1-\left| x \right|^{2} }\right)= \frac{2dx^{i} }{1-\left| x \right|^{2}  }+ 2x^{i}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) $$
>    Then
>     $$ d\left(\frac{2x^{i} }{1-\left| x \right|^{2}  }\right)^{2}= \frac{4\left(dx^{i}\right)^{2} }{ \left(1-\left| x \right|^{2} \right)^{2}}+ \frac{8x^{i}\,d x^{i} }{ 1-\left| x \right|^{2} }d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)+ 4\left(x^{i}\right)^{2}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2} $$
>     Note that 
>      $$ \sum _{i= 1}^{n}2x^{i}\,d x^{i}= d\left(\left| x \right|^{2} \right),\quad \sum _{i= 1}^{n}\left(x^{i}\right)^{2}= \left| x \right|^{2}  $$
>    Then 
>     $$ \begin{aligned} \begin{aligned} S^{*}g_{\mathbb{R} ^{n,1}}&= \frac{4g_{\mathbb{R} ^{n}} }{\left(1-\left| x \right|^{2} \right)^{2} }+ \frac{4d\left(\left| x \right|^{2} \right) }{1-\left| x \right|^{2}  }d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) + 4\left| x \right|^{2}d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2}-4d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)^{2}\\&=\frac{4g_{\mathbb{R} ^{n}} }{\left(1-\left| x \right|^{2} \right)^{2} }+ \left(\frac{4d\left(\left| x \right|^{2} \right) }{1-\left| x \right|^{2}  }-4\left(1-\left| x \right|^{2} \right)d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)\right)d\left(\frac{1 }{1-\left| x \right|^{2}  }\right) \end{aligned} \end{aligned} $$    
>    And observe that 
>     $$ d\left(\frac{1 }{1-\left| x \right|^{2}  }\right)=\frac{d\left(\left| x \right|^{2} \right) }{\left(1-\left| x \right|^{2} \right)^{2} } $$ 
>    We then have 
>     $$ S^{*}g_{\mathbb{R} ^{n,1}}= \frac{4 }{\left(1-\left| x \right|^{2} \right)^{2} }g_{\mathbb{R} ^{n}} $$ 
>    $S$ is conformal, with the property that in there coordinates the metric on $H^{n}\left(1\right)$ is Poincare disc.
>    

