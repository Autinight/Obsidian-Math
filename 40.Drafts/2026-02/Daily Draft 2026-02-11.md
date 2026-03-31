### 08:49

 $$ \sum _{i= 1}^{n}\left(\operatorname{cof}D \mathbf{u}\right)^{k}_{i,x_{i}}= 0 $$

 $$ \left(\det P\right)I= P^{\top}\left(\operatorname{cof}P\right) $$

 $$ \det \left(P\right)\delta ^{i}_{j}= \sum _{k= 1}^{n}p^{k}_{i}\left(\operatorname{cof}P\right)^{k}_{j} $$

 $$ \left(\det P\right)= \sum _{k= 1}^{n}p^{k}_{m}\left(\operatorname{cof}P\right)_{m}^{k} $$

 $$ \frac{\partial \det P}{\partial p_{m}^{k}}= \left(\operatorname{cof}P\right)_{m}^{k} $$

 $$ \det \left(Du\right) \delta ^{i}_{j}= \sum _{i= 1}^{n}u^{k}_{x_{m}}\left(\operatorname{cof} Du\right)_{m}^{k} $$

 $$ \delta _{j}^{k} \frac{\partial \det Du}{\partial x_{j}}=\sum _{m= 1}^{n}\sum _{k= 1}^{n} \delta _{j}^{k}\frac{\partial \det Du}{\partial u^{k}_{x_{m}}}\frac{\partial u^{k}_{x_{m}}}{\partial x_{j}}= \sum _{m,k= 1}^{n}\delta _{j}^{k}\left(\operatorname{cof}Du\right)_{m}^{k}u^{k}_{x_{m},x_{j}} $$

 $$ \det \left(Du\right)\delta _{j}^{i}= \sum _{k= 1}^{n}u_{x_{i}}^{k}\left(\operatorname{cof}Du\right)_{j}^{k} $$

 $$ RHS= \sum _{k= 1}^{n}u^{k}_{x_{i},x_{j}}\left(\operatorname{cof}Du\right)_{j}^{k}+ u_{x_{i}}^{k}\left(\operatorname{cof}Du\right)_{j,x_{j}}^{k} $$

 $$\sum _{j,k,m= 1}^{n}\delta ^{i}_{j}\left(\operatorname{cof}Du\right)_{m}^{k}u_{x_{m}x_{j}}^{k}= \sum _{k,j= 1}^{n}u^{k}_{x_{i}x_{j}}\left(\operatorname{cof}Du\right)_{j}^{k}+ u_{x_{i}}^{k}\left(\operatorname{cof}Du\right)_{j,x_{j}}^{k} $$

  $$ \sum _{k,j= 1}^{n}\left(\operatorname{cof}Du\right)_{j}^{k}u^{k}_{x_{j}x_{i}}= \sum _{k,j= 1}^{n}u_{x_{i}x_{j}}^{k}\left(\operatorname{cof}Du\right)_{j}^{k}+ u_{x_{i}}^{k}\left(\operatorname{cof}Du\right)_{j,x_{j}}^{k} $$    

 $$ \sum _{k= 1}^{n}u^{k}_{x_{i}}\left(\sum _{j= 1}^{n}\left(\operatorname{cof}Du\right)_{j,x_{j}}^{k}\right)= 0 $$

 if $\det Du\left(x_0\right)\neq 0$, then at least for a $u_{x_{i}}$, the above  
 $$ \sum _{k= 1}^{n}u_{x_{i}}^{k}b_{k}= \left(Du \cdot \mathbf{b}\right)_{x_{i}}= 0 $$

 $$ \mathbf{b}\in \operatorname{ker}Du $$

If $\det Du\neq 0$,                                                                                                                                                                     