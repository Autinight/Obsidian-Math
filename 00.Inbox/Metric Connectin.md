> [!exercise] Exercise: 
> On $M\times N$ one has the Cartesian product metrics $g =  g_{M}+ g_{N}$, where $g_{M},g_{N}$ are metrics on $M,N$ respectively.
> 1. Show that $\left(\mathbb{R} ^{n},g_{\mathbb{R} ^{n}}\right)= \left(\mathbb{R} ,\,d t^{2}\right)\times \cdots \times \left(\mathbb{R} ,dt^{2}\right)$
> 2. Show that the flat square torus
>    $$ T^{2}= \mathbb{R} ^{2}/\mathbb{Z} ^{2}= \left(S^{1},\left(\frac{1 }{2\pi  }\right)^{2}\,d \theta ^{2}\right)\times \left(S^{1},\left(\frac{1 }{2\pi  }\right)^{2}\,d \theta ^{2}\right) $$ 
> 3. Show that 
>    $$ F\left(\theta _1 ,\theta _2 \right)= \frac{1 }{2\pi  }\left(\cos \theta _1 ,\sin \theta _1 ,\cos \theta _2 ,\sin \theta _2 \right) $$ 
>    is a Riemannian embedding:$T^{2}\to \mathbb{R} ^{4}$.

> [!proof] Proof: 
> 4. Identify 
>     $$ \left(x^{1},\cdots ,x^{n}\right)\in \mathbb{R} ^{n} $$
>    with 
>     $$ \left(t_1,t_2,\cdots ,t_{n}\right)\in \left(\mathbb{R} ,\,d t_1^{2}\right)\times \cdots \times \left(\mathbb{R} ,\,d t_{n}^{2}\right) $$
>      Then 
>     $$ T_{\left(x^{1},\cdots ,x^{n}\right)}\mathbb{R} ^{n}= T_{t_1}\mathbb{R} \oplus \cdots \oplus T_{t_{n}}\mathbb{R}  $$ 
>     $$ g_{\mathbb{R} ^{n}}= \,d \left(x^{1}\right)^{2}+ \cdots + \,d \left(x^{n}\right)^{2}$$
>     $$ \,d \left(x^{i}\right)\left(v_1,\cdots ,v_{n}\right)= v_{i}= \,d t_{i}\left(v_1,\cdots ,v_{n}\right) $$  
>    $g_{\mathbb{R} ^{n}}= g_{\text{product}}$
>    
> 5.  $$ g_{\mathbb{R} ^{2}/\mathbb{Z} ^{2}} $$ 
>     $\mathbb{R} ^{2}$ is a Lie Group, $\mathbb{Z}^{2}$ is a compact subgroup. $\mathbb{R} ^{2}/\mathbb{Z} ^{2}$ is a manifold.
>     $\mathbb{R}$ endowed with the stand metric. Right-translations by elements in $\mathbb{Z} ^{2}$ 
>   The right-translations by element $z\in \mathbb{Z} ^{2}$ is 
>      $$ + z $$
>     which is isometris. Then there is a unique Riemannian metric on $\mathbb{R} ^{2}/\mathbb{Z} ^{2}$ making the projection 
>      $$ \mathbb{R} ^{2}\to \mathbb{R} ^{2}/\mathbb{Z} ^{2} $$
>       a Riemannian  submersion. The metic $D\pi : \left(\operatorname{ker}D \pi \right)^{\perp}\to T_{\pi \left(p\right)}\mathbb{R} ^{2}/\mathbb{Z} ^{2}$, that is 
>       $$ g\left(v,w\right)= \tilde{g}\left(\left(D\pi \right)v, \left(D\pi \right)w\right) $$ 
>     $$ \pi : r\mapsto r+ \mathbb{Z} ^{2} $$
>     $T_{0}\mathbb{R} ^{2}\simeq \mathbb{R} ^{2}$, $T_{0}\left(\mathbb{R} ^{2}/\mathbb{Z} ^{2}\right)$, $\mathbb{Z} ^{2}$. 
>     $$ T_{0}\left(\mathbb{R} ^{2}/\mathbb{Z} ^{2}\right)\simeq T_{e}\mathbb{R} ^{2}/T_{e}\mathbb{Z} ^{2} \simeq \mathbb{R} ^{2}$$ 
>     $$ d\pi _{e}\left(v\right)= v $$ 
>     $$ g\left(v,w\right)= \tilde{g}\left(v,w\right) $$ 
>     $$ \varphi :\mathbb{R} ^{2}\to S^{1}\times S^{1} $$
>     $$ \left(a,b\right)\mapsto \left(2\pi a,2\pi b\right) $$
>     $\operatorname{ker}\varphi =\mathbb{Z} ^{2}$, Lie isomorphism
>     $$ \widetilde{\varphi}:\mathbb{R} ^{2}/\mathbb{Z} ^{2}\simeq S^{1}\times S^{1} $$ 
>     The inverse map
>     $$ \psi \left(\theta ^{1},\theta ^{2}\right)\mapsto \left(\frac{\theta ^{1} }{2\pi  }+ \mathbb{Z} , \frac{\theta ^{2} }{2\pi  }+ \mathbb{Z} \right) $$ 
>     $$ \,d \psi \left(v,w\right)= \left(\frac{v }{2\pi  },\frac{w }{2\pi  }\right) $$ 
>     The induced metric on $S^{1}\times S^{1}$ is 
>     $$ \psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{1}},\partial _{\theta ^{1}}\right)= \tilde{g}\left(d\psi \left(\partial _{\theta ^{1}}\right),d\psi \left(\partial _{\theta ^{1}}\right)\right) =\left(\frac{1 }{2\pi  }\right)^{2} $$
>     Similarly , $\psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{2}},\partial _{\theta ^{2}}\right)= \left(\frac{1 }{2\pi  }\right)^{2}$, $\psi ^{*}\left(\tilde{g}\right)\left(\partial _{\theta ^{1}},\partial _{\theta ^{2}}\right)= 0$. Thus
>     $$ g_{S^{1}\times S^{1}}= \psi ^{*}\left(\tilde{g}\right)= \left(\frac{1 }{2\pi  }\right)^{2}\,d \theta _1 ^{2}+ \left(\frac{1 }{2\pi  }\right)^{2}\,d \theta _2 ^{2} $$ 
> 6. Smooth embedding. Compact to Hausdorff, injective immersion, with $F^{*}\hat{g}= g_{T^{2}}$ 
>  $$ \begin{aligned} F^{*}\hat{g}\left(\partial _{\theta ^{1}},\partial _{\theta ^{1}}\right)&=\hat{g}\left( D F\left(\partial _{\theta ^{1}}\right), DF\left(\partial _{\theta ^{1}}\right)\right)= \frac{1 }{2\pi  }\left(\cos ^{2}\theta ^{1}+ \sin ^{2}\theta ^{1}\right)= \frac{1 }{2\pi  } \end{aligned}$$
> and so on , we have 
>  $$ F^{*}\hat{g}= g_{S^{1}\times S^{1}} $$  

> [!exercise] Exercise: 
> Let $F: M\to N$ be a Riemannian $k$-fold covering map. Show
>  $$ \operatorname{Vol}M= k\cdot \operatorname{Vol}N $$ 


> [!proof] Proof: 
> 
> We now restric $F$ locally to make it a isometry, we have locally
>  $$ g_{M}= F^{*}g_{N} $$ 
> Suppose $q\in N$, $F^{-1} \left(q\right)= \left\{ p_1,\cdots ,p_{k} \right\}$. For each $p_{i}$, by choosing coordinates $x^{1},\cdots ,x^{n}$ such that $g_{p_{i}}\left(\frac{\partial }{\partial x^{k}},\frac{\partial }{\partial x^{l}}\right)= \delta _{k}^{l}$, and setting $y^{k}= x^{k}\circ F^{-1}$, we have  
> 
>  $$ \left(g_{M}\right)_{p_{i}}\left(\frac{\partial }{\partial x^{i}}, \frac{\partial }{\partial x^{j}}\right) =\left(g_{N}\right)_{F\left(p_{i}\right)}\left(D F\left(\frac{\partial }{\partial x^{i}}\right),D F\left(\frac{\partial }{\partial x^{j}}\right)\right)= g_{N}\left(\frac{\partial }{\partial y^{i}},\frac{\partial }{\partial y^{j}}\right) $$ 
> Then it follows that 
>  $$\left( dV_{N}\right)_{q}= \left(\,d y^{1}\cdots \,d y^{n}\right)_{p} $$
> Thus we have 
>  $$ \left(dV_{N}\right)_{q}= \left(dV_{M}\right)_{p_{i}} $$
> We have locally  
>  $$ d V_{M}= F^{*}\left(dV_{N}\right) $$
> Since the volume form is coordinate-free, there must be $d V_{M}= F^{*}dV_{N}$ for each local.
>
> Now  we choose a evenly covered open cover $\left\{ V_{\alpha } \right\}_{\alpha \in \Lambda }$ of $N$. Then 
>  $$ F^{-1} \left(V_{\alpha }\right) = \coprod  _{i= 1}^{k}U_{\alpha ,i}$$ 
> We set $F_{\alpha ,i}= F|_{U_{\alpha ,i}}$. 
> Suppose that $\left\{ \varphi _{\alpha } \right\}$ is a partition of unity subordinate to $\left\{ V_{\alpha } \right\}_{\alpha \in \Lambda }$, then
>  $$ \begin{aligned} \operatorname{Vol}N&= \int _{N}\,d V_{N}\\&= \sum _{\alpha }\int _{N}\varphi _{\alpha }\,d V_{N}\\&= \sum _{\alpha }\int _{V_{\alpha }}\varphi _{\alpha }\,d V_{N}\\&= \sum _{\alpha } \int _{U_{\alpha ,i}}F^{*}\varphi _{\alpha }\,d V_{M} \end{aligned} $$ 
>  $$ \begin{aligned} k\cdot \operatorname{Vol}N &= \sum _{i= 1}^{k}\sum _{\alpha }\int _{U_{\alpha ,i}}F^{*}\varphi _{\alpha }\,d V_{M}\\&=\sum _{\alpha }\int _{F^{-1} \left(V_{\alpha }\right)}F^{*}\varphi _{\alpha }\,d V_{M}\\&= \sum _{\alpha }\int _{M}F^{*}\varphi _{\alpha }\,d V_{M}= \int _{M}F^{*}\left(\sum _{\alpha }\varphi _{\alpha }\right) \,d V_{M}\\&= \int _{M}\,d V_{M}= \operatorname{Vol}M\end{aligned}$$ 
> Where the third line from $\operatorname{supp}\left(F^{*}\varphi _{\alpha }\right)\subseteq F^{-1}\left(\operatorname{supp}\varphi _{\alpha }\right)$

> [!exercise] Exercise: 
> Suppose we have an isometric group action $G$ on $\left(M,g\right)$ such that the quotient space $M /G$ is a manifold and the quotient map a submersion. Show that there is a unique Riemannian metric on the quotient making the quotient map a Riemannian submersion.

> [!proof] Proof: 
>  $$ \pi :M\to M / G $$ 
>  is a submersion. 
> 
>   $$ D\pi _{p}: \mathcal{H}_{p}\to T_{[p]}\left(M/G\right) $$
>  $$ v+ \mathcal{V}_{p}\mapsto D\pi _{p}\left(v\right) $$ 
> is linear isomorphism. We define $\tilde{g}$ on $M/G$, as 
>  $$ \tilde{g}\left(D\pi \left(v\right),D\pi \left(w\right)\right)= g\left(v,w\right) $$  
> We need to check that for $p_1,p_2\in M$ such that $a\left(p_1\right)= p_2$, 
> If $v_1,w_1\in \mathcal{H}_{p_1}$, $v_2,w_2\in \mathcal{H}_{p_2}$, $D\pi _{p_1}\left(v_1\right)= D\pi _{p_2}\left(v_2\right)$. $\widetilde{v_1}= Da_{p_1}\left(v_1\right)$, $\widetilde{w_1}= Da_{p_1}\left(w_1\right)$, then $\widetilde{v_1}\in \mathcal{H}_{p_2},\widetilde{w_1}\in \mathcal{H}_{p_2}$
> From $g =  a^{*}g$, we have
>  $$ g_{p_1}\left(v_1,w_1\right)= g_{p_2}\left(\widetilde{v_1},\widetilde{w_1}\right) $$ 
> We only need to check that 
>  $$ g_{p_2}\left(\widetilde{v_1},\widetilde{w_1}\right)= g_{p_2}\left(v_2,w_2\right) $$ 
> for which, since $\widetilde{v_1},\widetilde{w_1}\in \mathcal{H}_{p_2}$ we only need $\widetilde{v_1}-v_2\in \mathcal{V}_{p_1}$, $\widetilde{w_1}-w_2\in \mathcal{V}_{p_2}$, equivalently, $D\pi _{p_1}\left(\widetilde{v_1}\right)= D\pi _{p_1}\left(v_2\right)$, $D\pi _{p_1}\left(\widetilde{w_1}\right)= D\pi _{p_1}\left(w_2\right)$.  Observe that
>  $$ D\pi _{p_2}\left(\widetilde{v_1}\right)= \left(D\left(\pi \circ a\right) \right)_{p_1}\left(v_1\right) $$ 
> and recall  $D\pi _{p_1}\left(v_1\right)= D\pi _{p_2}\left(v_2\right)$, 
> we need to check that $D\left(\pi \circ a\right)_{p_1}\left(v_1\right)= D\pi _{p_1}\left(v_1\right)$. In fact, it is obvious from $\pi \circ a= \pi$.


> [!exercise] Exercise: 
> Let $\left(M,g\right)$ be a Riemannian manifold, $f,h$ functions on $M$, and $X$ a vecotr field on $M$. Show that 
>  $$ \operatorname{div}\left(fX\right)= D_{X}f+  f\operatorname{div}X$$ 
>  $$ \Delta \left(fh\right) = h\Delta f+ f\Delta h+ 2g\left(\nabla f,\nabla h\right)$$
>  $$ \operatorname{Hess}\left(fh\right) = h \operatorname{Hess}f+ f\operatorname{Hess}h+ \,\,d f\,d h+ \,d h\,d f$$  


> [!proof] Proof: 
> **(1)**
> 
> We choose a orthornormal local frame $E_1,\cdots ,E_{k}$. 
> From the definition of the divergence, we have 
>  $$ \operatorname{div}\left(fX\right)= \operatorname{div}\left(fX\right)\operatorname{vol}\left(E_1,\cdots ,E_{k}\right)= \left(\mathcal{L}_{fX}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right) $$ 
> Similarly, 
>  $$ \operatorname{div}\left(X\right)=\left( \mathcal{L}_{X}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right) $$ 
> Expanding the product rule of Lie derivative for $\left(0,k\right)$-tensor , we have
>  $$ \left(\mathcal{L}_{fX}\operatorname{vol}\right)\left(E_1,\cdots ,E_{k}\right)= f \mathcal{L}_{X}\left(E_1,\cdots ,E_{k}\right)+ \sum _{i= 1}^{k}\left(\mathcal{L}_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right) $$
> Thus
>  $$ \operatorname{div}\left(fX\right)= f\operatorname{div}X+ \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right) $$ 
> Under the orthornormal frame , $\operatorname{vol}\left(E_1,\cdots ,X\cdots ,E_{k}\right)$ has the form
>  
>  $$ \operatorname{vol}\left(E_1,\cdots ,X,\cdots ,E_{k}\right)= g\left(X,E_{i}\right) $$  
> The gradient has the form
>  $$ \operatorname{grad}f=\sum _{i= 1}^{k}\left(D_{E_{i}}f\right)E_{i}$$ 
> Thus
>  $$ \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)\operatorname{vol}\left(E_1,\cdots ,X,E_{k}\right)=  \sum _{i= 1}^{k}\left(D_{E_{i}}f\right)g\left(X,E_{i}\right)= g\left(X,\sum _{i= 1}^{k}D_{E_{i}}fE_{i}\right)= g\left(X,\operatorname{grad}f\right)= D_{X}f $$ 
> Finally, 
>  $$ \operatorname{div}\left(fX\right)= f\operatorname{div}X+ D_{X}f $$ 
> 
> **(2)**
> 
>  $$ \Delta \left(fh\right)= \operatorname{div}\left(\operatorname{grad}\left(fh\right)\right) $$ 
> 
>  $$ \begin{aligned} g\left(v, \operatorname{grad}fh\right)&= D_{v}\left(fh\right)= \left(D_{v}f\right)h+ f\left(D_{v}h\right)\\&= g\left(v,\operatorname{grad}f\right)h+ g\left(v,\operatorname{grad}h\right)f\\&= g\left(v,h\operatorname{grad}f+ f\operatorname{grad}h\right) \end{aligned} $$ 
>   $$ \operatorname{grad}\left(fh\right)= h\operatorname{grad}f+ f\operatorname{grad}h $$ 
>  $$ \begin{aligned} \operatorname{div}\left(\operatorname{grad}fh\right)&=\operatorname{div}\left(h\operatorname{grad}f+ f\operatorname{grad}h\right) \\&= D_{\operatorname{grad}f}h+ h\Delta \left(f\right)+ D_{\operatorname{grad}h}f+ h\Delta \left(h\right)\end{aligned} $$ 
>  $$ D_{\operatorname{grad}f}h= g\left(\operatorname{grad}f,\operatorname{grad}h\right)= D_{\operatorname{grad}}f $$
>  Thus
>   $$ \Delta \left(fh\right)= h\Delta f+ f\Delta h+ 2g\left(\nabla f,\nabla h\right) $$  
>
> **(3)**
>  $$ \operatorname{Hess}f= \frac{1}{2}L_{\nabla f}g $$
>  $$ \begin{aligned} \operatorname{Hess}\left(fh\right)&= \frac{1}{2}\mathcal{L}_{\nabla \left(fh\right)}g\\&= \frac{1}{2}\mathcal{L}_{f\nabla h}g+ \frac{1}{2}\mathcal{L}_{h\nabla f}g \end{aligned}$$
>   $$ \begin{aligned} \mathcal{L}_{f\nabla h} g\left(E_i,E_j\right) &= f \mathcal{L}_{\nabla h}g\left(E_i,E_j\right)+  \left(D_{E_i}f\right)g\left(\nabla h,E_j\right)+ \left(D_{E_j}f\right)g\left(E_{i},\nabla h\right)\\&= 2h\operatorname{Hess}f+ g\left(\nabla h, \left(D_{E_{i}}f\right)E_{j}+ \left(D_{E_{j}}f\right)E_{i}\right)\\&=2 h\operatorname{Hess}f+ dh\left(D_{E_{i}}fE_{j}+ D_{E_{j}}f\left(E_{i}\right)\right)\\&= 2h\operatorname{Hess}f\left(E_{i},E_{j}\right)+ D_{E_{j}}hD_{E_{i}}f+ D_{E_{j}}fD_{E_{i}}h\\&= 2h\operatorname{Hess}f\left(E_{i},E_{j}\right)+ f\otimes h\left(E_{i},E_{j}\right)+ h\otimes f\left(E_{i},E_{j}\right)\end{aligned}$$ 
> $$ \frac{1}{2}\mathcal{L}_{h\nabla f}g =  2f\operatorname{Hess}h + df\otimes d h+ dh\otimes d f $$
>  $$ \frac{1}{2}\mathcal{L}_{f\nabla h}g =  2h\operatorname{Hess}f+ dh\otimes df+ df\otimes dh $$  
>  $$ \operatorname{Hess}\left(fh\right)= f\operatorname{Hess}h+ h\operatorname{Hess}f+ \,d f\otimes \,d h+ \,d h\otimes \,d f $$ 

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


> [!exercise] Exercise: 
> Let $X$ be a vector field
> 1. Show that for any $\left(1,1\right)$-tensor $S$
>  $$ \operatorname{tr}\left(\nabla _{X}S\right)= \nabla _{X}\operatorname{tr}S $$
> 2. Let $T\left(Y,Z\right)= g\left(S\left(Y\right),Z\right)$. Show that 
>  $$ \left(\nabla _{X}T\right)\left(Y,Z\right)= g\left(\left(\nabla _{X}S\right)\left(Y\right),Z\right). $$
> 3. Show that more generally the contraction and covariant differentiation commute.
> Finally show that type change and covariant differentiation commute.  

> [!remark] Needed:
> - 高维Tensor的Lebniz律
> - Contranction is linear operator.
> - $\nabla _{X}$对Tensor product 的Lebniz rule.

> [!remark] Remark: 
> Type Change 是缩并和度量张量积的复合
>  $$T=  C\left(S\otimes g\right) $$ 
> Contraction 是一对协变逆变张量的配对
> $T$让$S$和$g$的第一个分量配对, 
>  $$ g\left(S\left(\cdot \right),\cdot \right) $$ 
> Contraction和协变导数交换.

> [!proof] Proof: 
> **(1)**
>  $$ S= S^{i}_{j}E_{i}\otimes \sigma ^{j} $$ 
>   $$ \nabla _{X}E_{k} = X_{k}^{j}E_{j}$$ 
>   $$ \operatorname{tr}S= S_{i}^{i} $$ 
>  $$ \begin{aligned} \left(\nabla _{X}S\right)\left(E_{k}\right)&= \left(\nabla _{X}\left(S_{j}^{i}E_{i}\otimes\sigma ^{j}\right)\right)\left(E_{k}\right)= \nabla _{X}\left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\left(E_{k}\right)\right)-\left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\right)\left(\nabla _{X}E_{k}\right)\\&= \nabla _{X}\left(S_{k}^{i}E_{i}\right)- \left(S_{j}^{i}E_{i}\otimes \sigma ^{j}\right)\left(X_{k}^{l}E_{l}\right)= \nabla _{X}\left(S_{k}^{i}E_{i}\right)-X_{k}^{j}\left(S_{j}^{i}E_{i}\right)\\&= \left(D_{X}S_{k}^{i}\right)E_{i}+ S_{k}^{i}X_{i}^{l}E_{l}-X_{k}^{j}\left(S_{j}^{i}E_{i}\right)\\&= \left(D_{X}S_{k}^{i}\right)E_{i}+ S_{k}^{j}X_{j}^{i}E_{i}-X_{k}^{j}S^{i}_{j}E_{i}\end{aligned} $$ 
>   $$ \operatorname{tr}\left(\nabla _{X}S\right)= \left(D_{X}S_{k}^{k}\right)+ S_{k}^{j}X_{j}^{k}-X_{k}^{j}S_{j}^{k}= \left(D_{X}S_{k}^{k}\right) $$ 
>    $$ \nabla _{X}\operatorname{tr}S= D_{X}S_{k}^{k} $$ 
> **(2)**
>  $$ T\left(Y,Z\right)= g\left(S\left(Y\right),Z\right) $$ 
> 
>  $$ \begin{aligned} \left(\nabla _{X}T\right)\left(Y,Z\right)&= \nabla _{X}\left(T\left(Y,Z\right)\right)-T\left(\nabla _{X}Y,Z\right)- T\left(Y,\nabla _{X}Z\right)\\&= \nabla _{X}\left(g\left(S\left(Y\right),Z\right)\right)-g\left(S\left(\nabla _{X}Y\right),Z\right)-g\left(S\left(Y\right),\nabla _{X}Z\right)\\&= g\left(\nabla _{X}\left(S\left(Y\right)\right),Z\right)-g\left(S\left(\nabla _{X}Y\right),Z\right)\\&= g\left(\left(\nabla _{X}S\right)\left(Y\right),Z\right) \end{aligned}$$ 
>   $$ \nabla _{X}\left(S\left(Y\right)\right)= \left(\nabla _{X}S\right)\left(Y\right)+ S\left(\nabla _{X}Y\right) $$ 
> **(3)**
>
>  $$ C\left(\nabla _{X}\left(V\otimes \omega \right)\right)= C\left(\nabla _{X}V\otimes \omega + V\otimes \nabla _{X}\omega \right)= \left< \nabla _{X}V,\omega  \right>+ \left< V,\nabla _{X}\omega  \right> $$
>  $$ \nabla _{X}\left(C\left(V\otimes \omega \right)\right)= \nabla _{X}\left< V,\omega  \right>= \left< \nabla _{X}V,\omega  \right>+ \left< V,\nabla _{X}\omega  \right> $$  
>   $$ [C,\nabla _{X}]= 0 $$ 
>  $$ \begin{aligned} \nabla _{X}\operatorname{Typec}\left(S\right)&= \nabla _{X}C\left(g\otimes S\right) = C\left(\nabla _{X}\left(g\otimes S\right)\right)\\&= C\left(g\otimes \nabla _{X}S\right)= \operatorname{Typec}\left(\nabla _{X}S\right) \end{aligned}$$   


> [!exercise] Exercise: 
> Show that a vector field $X$ on a Riemannian manifold is locally a gradient field if and only if $Z\mapsto \nabla _{Z}X$ is self-adjoint.


> [!proof] ProofIf
> **(1)**
>If
>  $$ X= \operatorname{grad}f $$
>  $$ \begin{aligned}\left< \nabla _{Y}X,Z \right>=  \left< \nabla _{Y}\left(\operatorname{grad}f\right),Z \right>_{g}&= \nabla _{Y}\left(\left< \operatorname{grad}f,Z \right>\right)-g\left(\operatorname{grad}f,\nabla _{Y}Z\right)\\&= D_{Y}\left(\,d f\left(Z\right)\right)-\,d f\left(\nabla _{Y}Z\right) \end{aligned} $$    
> 
>   $$ \begin{aligned} \left< Y,\nabla _{Z}X \right>_{g}&= \left< Y,\nabla _{Z}\operatorname{grad}f \right>_{g}\\&= D_{Z}\left< Y,\operatorname{grad}f \right>-\left< \nabla _{Z}Y,\operatorname{grad}f \right>\\&= D_{Z}\left(\,d f\left(Y\right)\right)-\,d f\left(\nabla _{Z}Y\right) \end{aligned} $$ 
> 
>  $$ \left< \nabla _{Y}X,Z \right>-\left< Y,\nabla _{Z}X \right>= D_{Y}\left(df\left(Z\right)\right)-D_{Z}\left(df\left(Y\right)\right)-df\left(\left[ Y,Z \right]\right)= d^{2}f\left(Y,Z\right)= 0 $$ 
> 
> **(2)**
>  If 
>  $$ \left< \nabla _{Y}X,Z \right>= \left< Y,\nabla _{Z}X \right> $$ 
>  
> 
>  $$ X= \operatorname{grad}f\iff X^{\sharp }= df $$
> Since closed form is locally exact, we only need to show that $d\left(X^{\sharp }\right)= 0$,
>  $$ \begin{aligned} d\left(X^{\sharp }\right)\left(Y,Z\right)&= D_{Y}\left(X^{\sharp }\left(Z\right)\right)-D_{Z}\left(X^{\sharp }\left(Y\right)\right)-X^{\sharp }\left(\left[ Y,Z \right]\right)\\&= D_{Y}\left(\left< X,Z \right>\right)-D_{Z}\left(\left< X,Y \right>\right)-\left< X,\left[ Y,Z \right] \right>\\&= \left< \nabla _{Y}X,Z \right>+ \left< X,\nabla _{Y}Z \right>-\left< \nabla _{Z}X,Y \right>-\left< X,\nabla _{Z}Y \right>-\left< X,\left[ Y,Z \right] \right>\\&= \left< X,\nabla _{Y}Z-\nabla _{Z}Y-\left[ Y,Z \right] \right>\\&= \left< X,T\left(Y,Z\right) \right>= 0 \end{aligned}$$ 

> [!exercise] Exercise: 
> Let $G$ be a Lie group. Show that there is a unique affine connection such that $\nabla X= 0$ for all left-invariant vector fields. Show that this connection is torsion free if and only if the Lie algebra is Abelian.

> [!proof] Proof: 
> 
> Take a basis for $T_{e}G$, say $e_1,\cdots ,e_{n}$, then define 
>  $$ \left(E_{k}\right)_{g}= \left(\,d L_{g}\right)\left(e_{k}\right) $$
> Then $E_1,\cdots ,E_{k}$ is a left-invariant frame for $G$. 
> If 
>  $$ X= X^{k}E_{k} $$
>  $$ \nabla _{Y}X= \nabla_{Y} \left(X^{k}E_{k}\right)= X^{k}\nabla _{Y}E_{k}+ Y\left(X^{k}\right)E_{k}= Y\left(X^{k}\right)E_{k} $$  
> Same for $\widetilde{\nabla}$, 
>  $$ \widetilde{\nabla}_{Y}X= Y\left(X^{k}\right)E_{k}= \nabla _{Y}X $$
> Thus $\nabla = \widetilde{\nabla}$. Thus the connection is unique. 
>
> For existence, we need to show that 
>  $$ \nabla _{Y}X= Y\left(X^{k}\right)E_{k} $$
> determines exactly a affine connection.
>
> 1.  $$ \nabla _{fX+ gY}Z= \left(fX+ gY\right)\left(Z^{k}\right)E_{k}= f\nabla _{X}Z+ g\nabla _{Y}Z $$ 
> 2.  $$ \nabla _{X}\left(Z_1+ Z_2\right)= X\left(\left(Z_1+ Z_2\right)^{k}\right)E_{k}= X\left(Z_1^{k}\right)E_{k}+ X\left(Z_2^{k}\right)E_{k} $$
> 3.  $$ \nabla _{Y}\left(fX\right)= Y\left(fX^{k}\right)E_{k}= \left(Yf\right)X^{k}E_{k} + fY\left(X^{k}\right)E_{k}= \left(Yf\right)X+ f\nabla _{Y}X$$  
>
>  $$ \begin{aligned} T\left(X,Y\right)&= \nabla _{X}Y-\nabla _{Y}X-\left[ X,Y \right]\\&=X^{i}Y^{j}\left[ E_{i},E_{j} \right]\end{aligned} $$ 
> If this connection is torsion free, iff $\left[ E_{i},E_{j} \right]= 0$, iff Lie algebra is abelian.
