
> [!exercise] Exercise: 
> An immersion $f:N\to \mathbb{R} ^{m+ 1}$ of an $m$ dimensional smooth manifold $N$ into $\mathbb{R}^{m+ 1}$ is called a hypersurface. Suppose $\left\{ U,u^{1},\cdots ,u^{m} \right\}$ is a local chart on $U$ so that the map $f$ can be expressed locally as 
>  $$ x^{k}= f^{k}\left(u^{1},\cdots ,u^{m}\right),\quad 1\le k\le m+ 1 $$ 
> where $\left(x^{1},\cdots ,x^{m+ 1}\right)$ are the coordinates in $\mathbb{R} ^{m+ 1}$. Prove:
>  $$ f^{*}g_0|_{U}= \sum _{k,i,j}\frac{\partial f^{k}}{\partial u^{i}}\frac{\partial f^{k}}{\partial u^{j}}du^{i}\otimes du^{j} $$

> [!proof] Proof: 
> We write $g_0$ as 
>  $$ g_0= \sum _{k= 1}^{m+ 1}dx^{k}\otimes dx^{k} $$ 
> Then 
>  $$ \begin{aligned} f^{*}g_0|_{U}&= f^{*}\left(\sum _{k= 1}^{m+ 1}\,d x^{k}\otimes \,d x^{k}\right)\\&= \sum _{k= 1}^{m+ 1}f^{*}\left(dx^{k}\otimes dx^{k}\right)\\&= \sum _{k= 1}^{m+ 1} d f^{k}\otimes df^{k}  \end{aligned} $$
> where 
>  $$ df^{k}= \sum _{i}\frac{\partial f^{k}}{\partial x^{i}}dx^{i} $$
> Thus
>  $$ f^{*}g_0|_{U}= \sum _{k,i,j}\left(\frac{\partial f^{k}}{\partial x^{i}}dx^{i}\right)\otimes \frac{\partial f^{k}}{\partial x^{j}}dx^{j}= \sum _{k,i,j}\frac{\partial f^{k}}{\partial x^{i}}\frac{\partial f^{k}}{\partial x^{j}}\,d x^{i}\otimes \,d x^{j} $$   
> 


> [!exercise] Exercise: 
> A surface of revolution $S$ in $\mathbb{R} ^{3}$ can be formed by rotating a curve
> $$ \gamma \left(t\right)= \left(0,y\left(t\right),z\left(t\right)\right)\quad \left(a< t< b\right) $$
> in the yz plane with respect to $z$-axis, where we assume
>  $$ y\left(t\right)> 0\text{ and }\left(y^{\prime} \left(t\right)\right)^{2}+ \left(z^{\prime} \left(t\right)\right)^{2}\neq 0 $$  
> for all $t$. As a consequence, we can parametrize the surface as 
>  $$ S\left(t,\theta \right)= \left( y\left(t\right)\cos \theta ,y\left(t\right)\sin \theta ,z\left(t\right)\right),\quad \left(a< t< b,0< \theta < 2\pi \right) $$ 
> Write down the induced metric of $g_0$ in $\mathbb{R} ^{3}$ on $S$
>  

> [!proof] Proof: 
> The induced metric of $g_0$ in $\mathbb{R} ^{3}$ on $S$ can be written as 
>  $$ \begin{aligned} S^{*}g_0&= S^{*}\left(dx\otimes dx+ dy\otimes dy+ dz\otimes dz\right)\\&=d\left(y\left(t\right)\cos \theta \right)^{2}+ d\left(y\left(t\right)\sin \theta \right)^{2}+ d \left(z\left(t\right)\right)^{2}  \end{aligned} $$  
> 
> where 
>  $$ d\left(y\left(t\right)\cos \theta \right)= y^{\prime} \left(t\right)\cos \theta dt-y\left(t\right)\sin \theta d\theta  $$
> 
>  $$ \begin{aligned} &d\left(y\left(t\right)\cos \theta \right)^{2}\\&= \left(y^{\prime} \left(t\right)\right)^{2}\cos ^{2}\theta \,d t\otimes dt+ \left(y\left(t\right)\right)^{2}\sin ^{2}\theta \,d \theta\otimes d\theta \\& -2y^{\prime} \left(t\right)y\left(t\right)\sin \theta \cos \theta d\theta \otimes dt\end{aligned}  $$
>  $$ d\left(y\left(t\right)\sin \theta \right)= y^{\prime} \left(t\right)\sin \theta \,d t+ y\left(t\right)\cos \theta d\theta  $$   
> 
>  $$ \begin{aligned} &d\left(y\left(t\right)\sin \theta \right)^{2}\\&= \left(y^{\prime} \left(t\right)\right)^{2}\sin  ^{2}\theta dt\otimes dt+ \left(y\left(t\right)\right)^{2}\cos  ^{2}\theta \,d \theta\otimes d\theta  \\&+ 2y ^{\prime} \left(t\right)y\left(t\right)\sin \theta \cos \theta \,d \theta \otimes \,d t \end{aligned} $$
> And
>  $$ d\left(z\left(t\right)\right)^{2}= \left(z^{\prime} \left(t\right)\,d t\right)^{2}= \left(z^{\prime} \left(t\right)\right)^{2}\,d t\otimes \,d t $$  
> Thus
>  $$ S^{*}g_0=\left( \left(y^{\prime} \left(t\right)\right)^{2}+ \left(z^{\prime} \left(t\right)\right)^{2}\right)\,d t\otimes \,d t+ \left(y\left(t\right)\right)^{2}\,d \theta \otimes \,d \theta  $$ 

> [!exercise] Exercise: 
> Let $\left(M,g\right)$, $\left(N,h\right)$ be Riemannian manifolds, and $\psi$ is a positive smooth function on $M$. Define a warped product metric $g \times _{\psi }h$ on $M\times N$ via
>  $$ \left(g \times _{\psi }h\right)\left(\left(X_{p},Y_{q}\right),\left(X_{p}^{\prime} , Y_{q}^{\prime} \right)\right)= g_{p}\left(X_{p},X_{p}^{\prime} \right)+ \psi ^{2}\left(p\right)h_{q}\left(Y_{q},Y_{q}^{\prime} \right) $$ 
> - Prove: $g\times _{\psi }h$ is a Riemannian metric.
> - Identify $\mathbb{R} ^{+ }\times S^{1}$ with $\mathbb{R} ^{2}\setminus \left\{ 0 \right\}$ via the polar coordinates, i.e.
>    $$ \mathbb{R} ^{+ }\otimes S^{1}\to \mathbb{R} ^{2}\setminus \left\{ 0 \right\},\quad \left(r,\theta \right)\mapsto \left(r\cos \theta ,r\sin \theta \right). $$
>   Prove: The warped product metric on $\mathbb{R} ^{+ }\otimes S^{1}$ with $\psi \left(r\right)= r$ coincides with the standard Euclidean metric on $\mathbb{R} ^{2}\setminus \left\{ 0 \right\}$.
> - Identify $\left(0,\pi \right)\times S^{m-1}$ with $S^{m}-\left\{ N,S \right\}$(where N,S are the north/south poles of $S^{m}$ respectively) via the map
>    $$ \left(0,\pi \right)\times S^{m-1}\to S^{m}-\left\{ N,S \right\}\subseteq \mathbb{R} \times \mathbb{R} ^{m}, $$
>    $$ \left(r,z\right)\mapsto \left(\cos r,\left(\sin r\right)z\right). $$
>    Prove : The warped product metric on $\left(0,\pi \right)\times S^{m-1}$ with $\psi \left(r\right)= \sin r$ conincides with the standard round metric on $S^{m}\setminus \left\{ N,S \right\}$.

> [!proof] Proof: 
> 1. It is obvious that $\left(g\times _{\psi }h\right)_{\left(p,q\right)}$ is a bilinear map on $T_{p}M\times T_{q}N$ for each fixed $p\in M$, $q\in N$. Furthermore, 
>    $$ \left(g\times _{\psi }h\right)\left(\left(X_{p},Y_{q}\right),\left(X_{p},Y_{q}\right)\right)= g_{p}\left(X_{p},X_{p}\right)+ \psi ^{2}\left(p\right)h_{q}\left(Y_{q},Y_{q}\right)\ge 0 $$
>    and 
>    $$ \begin{aligned}&\left(g\times _{\psi }h\right)\left(\left(X_{p},Y_{q}\right),\left(X_{p},Y_{q}\right)\right)= 0\\&\iff g_{p}\left(X_{p},X_{p}\right)= 0,\text{ and } h_{q}\left(Y_{q},Y_{q}\right)= 0\\&\iff X_{p}= 0,\text{ and }Y_{q}= 0 \end{aligned} $$  
>    which implies that $\left(g\times _{\psi }h\right)$ is a Riemannian metric.
> 2. $\mathbb{R} ^{+ }$ has metric $dr\otimes dr$, $S^{1}$ has matric $d\theta \otimes d\theta$, the warped product is
>    $$ dr\otimes dr+ r^{2}d\theta \otimes d\theta  $$  
> 
>    The other side, under the given identification, we have 
>    $$ \left(r,\theta \right)\mapsto  \left(r\cos \theta ,r\sin \theta \right) $$
>    is the identity map $\operatorname{Id}$, then the standard Euclidean map on $\mathbb{R} ^{2}\setminus \left\{ 0 \right\}$  is 
>    $$ \operatorname{Id}^{*}\left(\,d x\otimes \,d x+ \,d y\otimes \,d y\right)=\left(d\,r\cos\theta \right)^{2}+ \left(\,d\, r\sin \theta \right)^{2}= \left(dr\right)^{2}+ r^{2}\left(d\theta \right)^{2}$$ 
>
> 3.  The warped product metric on $\left(0,\pi \right)\times S^{m-1}$ is 
>     $$ dr\otimes dr+ \sin ^{2}r \;g_{S^{m-1}} $$  
>     The standard round metic can be  represented as 
>     $$ \begin{aligned} &\left(d\left(\cos r\right)\right)^{2}+ \sum _{i=1}^{m}d\left(\sin r z^{i}\right)^{2}\\&= \sin ^{2}r \,d r\otimes \,d r+ \sum _{i= 1}^{m} \cos ^{2}r \left(z^{i}\right)^{2}\,d r\otimes \,d r+ \sum _{i= 1}^{m} \sin ^{2}r  \,d z^{i}\otimes \,d z^{i}\\&= \,d r\otimes \,d r+\sin ^{2}r\;g_{S^{m-1}}\end{aligned} $$ 
>     where we use $\sum _{i= 1}^{m}\left(z^{i}\right)^{2}= 1$ since $z\in S^{m-1}$.

> [!exercise] Exercise: 
> Conside shpere $S^{2}$ in $\mathbb{R} ^{3}$. Let $\left(x,y,z\right)$ be coordinates in $\mathbb{R} ^{3}$. Consider coordinate neighbourhood of $S^{2}$ as following:
>  $$ x= \sqrt{1-z^{2}}\cos \theta ,\quad y= \sqrt{1-z^{2}}\sin \theta ,\quad z= z,\theta \in \left(0,2\pi \right),z\in \left(-1,1\right) $$ 
> Prove the induced metric on $S^{2}$ is 
>  $$ g|_{S^{2}}= \frac{1 }{1-z^{2} }dz\otimes dz+ \left(1-z^{2}\right)d\theta \otimes d\theta  $$ 

> [!proof] Proof: 
>  $$ \left(\theta ,z\right)\mapsto \left(\sqrt{1-z^{2}}\cos \theta ,\sqrt{1-z^{2}}\sin \theta ,z\right) $$
> is a representation of $\operatorname{Id}$ on the given neighbourhood.
> Thus 
>  $$ \begin{aligned} g|_{S^{2}}&= \operatorname{Id}^{*}\left(\left(dx\right)^{2}+ \left(dy\right)^{2}+ \left(dz\right)^{2}\right)\\&=\left(d\left(\sqrt{1-z^{2}}\cos \theta \right)\right)^{2}+ \left(d\left(\sqrt{1-z^{2}}\sin \theta \right)\right)^{2}+ \left(dz\right)^{2}  \end{aligned} $$  
> Where 
>  $$ \begin{aligned} &d\left(\sqrt{1-z^{2}}\cos \theta \right) = \frac{-z }{\sqrt{1-z^{2}} }\cos \theta dz-\sqrt{1-z^{2}}\sin \theta d\theta \end{aligned} $$
>  $$ d\left(\sqrt{1-z^{2}}\sin  \theta \right)= \frac{-z }{\sqrt{1-z^{2}} } \sin \theta dz+ \sqrt{1-z^{2}}\cos \theta d\theta $$
> 
> Thus
> 
>  $$ \begin{aligned} g|_{S^{2}}&= \frac{z ^{2}}{1-z^{2} }dz\otimes dz+ \left(1-z^{2}\right)d\theta \otimes d\theta + dz\otimes dz \\&=\frac{1 }{1-z^{2} }\,d z\otimes \,d z+ \left(1-z^{2}\right)\,d \theta \otimes d\theta  \end{aligned}$$ 

> [!exercise] Exercise: 
> Consider the $n$ shpere $S^{n}$ in $\mathbb{R} ^{n+ 1}$. Let $\left(x^{1},\cdots ,x^{n+ 1}\right)$ be coordinates of $\mathbb{R} ^{n+ 1}$. Equipped on $S^{n}\cap \left\{ \left(x^{1},\cdots ,x^{n+ 1}\right)\in \mathbb{R} ^{n+ 1}: x^{n+ 1}\neq 1 \right\}$ as following 
>  $$ \varphi \left(x^{1},\cdots ,x^{n+ 1}\right)= \left(\frac{x^{1} }{1-x^{n+ 1} },\cdots ,\frac{x^{n} }{1-x^{n+ 1} }\right)= : \left(y^{1},\cdots ,y^{n}\right)\in \mathbb{R} ^{n} $$
> Prove the induced metric on $S^{n}$ is 
>  $$ g|_{S^{n}}= \frac{4 }{\left(1+ \left| y \right|^{2} \right)^{2} }\sum _{i= 1}^{n}dy^{i}\otimes dy^{i}. $$

> [!proof] Proof: 
> By definition, we have 
>  $$ \frac{\sum _{i= 1}^{n}\left(x^{i}\right)^{2} }{\left(1-x^{n+ 1}\right)^{2} }= \sum _{i= 1}^{n}\left(y^{i}\right)^{2}= \left| y \right|^{2}  $$
> Since the point lies on $S^{n}$, 
>  $$ \sum _{i= 1}^{n}\left(x^{i}\right)^{2}+ \left(x^{n+ 1}\right)^{2}= 1 $$
> Combining the two identities, it follows that 
>  $$ \frac{1-\left(x^{n+ 1}\right)^{2} }{\left(1-x^{n+ 1}\right)^{2} }= \left| y \right|^{2}  $$
> which implies 
>  $$ \frac{1+ x^{n+ 1} }{1-x^{n+ 1} }= \left| y \right|^{2}  $$
> Solving for $x^{n+ 1}$ and $x^{i}$, we obtain
>  $$ x^{n+ 1}= \frac{\left| y \right|^{2}-1  }{\left| y \right|^{2}+ 1  },\quad x^{i}= \frac{2y^{i} }{\left| y \right|^{2}+ 1  } ,\quad 1\le i\le n$$     
> Set 
>  $$ A= \frac{2 }{\left| y \right|^{2}+ 1  },\quad B= \frac{4 }{\left(\left| y \right|^{2}+ 1 \right)^{2} } $$
> Then $x^{i}= Ay^{i}$, and hence
> $$ dx^{i}= Ady^{i}+ y^{i}dA $$  
> Moreover, 
>  $$ dA= -2\frac{d \left| y \right|^{2}  }{\left(\left| y \right|^{2}+ 1 \right)^{2} }= -\frac{4 }{\left(\left| y \right|^{2}+ 1 \right)^{2} }\sum _{j= 1}^{n}y^{j}dy^{j} $$
> For convenience, define
>  $$ \omega = \sum _{j= 1}^{n}y^{j}dy^{j} $$  
> Then 
>  $$ dA= -B\omega ,\quad dx^{i}= Ady^{i}-By^{i}\omega  $$ 
> We obtain
>  $$ \left(dx^{i}\right)^{2}= A^{2}\left(dy^{i}\right)^{2}-2ABy^{i}dy^{i}\otimes \omega + B^{2}\left(y^{i}\right)^{2}\omega \otimes \omega  $$
> Summing over $i=1,\cdots,n$, it follows that  
>  $$ \sum _{i= 1}^{n}\left(dx^{i}\right)^{2}= A^{2}\hat{g}-2AB\omega \otimes \omega + B^{2}\left| y \right|^{2}\omega \otimes \omega   $$
> where
> $$ \hat{g}= \sum _{i= 1}^{n}\left(dy^{i}\right)^{2} $$
>  denotes the Euclidean metric on $\mathbb{R} ^{n+ 1}$.
> Observe that 
>  $$ x^{n+ 1}= 1-\frac{2 }{\left| y \right|^{2}+ 1  } $$
> Therefore, 
>  $$ dx^{n+ 1}= -dA= B\omega  $$
> and consequently,
>  $$ \left(dx^{n+ 1}\right)^{2}= B^{2}\omega \otimes \omega  $$
> Note that 
>  $$ B\left(\left| y \right|^{2}+ 1 \right)= \frac{4 }{\left| y \right|^{2}+ 1  }= 2A $$
> which implies 
>  $$ B^{2}\left(\left| y \right|^{2}+ 1 \right)-2AB $$
> Hence all cross terms vanish , and we conclude that 
>  $$ g|_{S^{n}}= \sum _{i= 1}^{n+ 1}\left(dx^{i}\right)^{2}= \frac{4 }{\left(1+ \left| y \right|^{2} \right)^{2} }\sum _{i= 1}^{n}dy^{i}\otimes dy^{i} $$      

> [!exercise] exercise: 
> consider $S^{2}$ as a submanifold in $\mathbb{R} ^{3}$. using cylindrical coordinates $\theta$ and $z$ we have seen
>  $$ g_{S^{2}}= \frac{1 }{1-z^{2} }dz\otimes dz+ \left(1-z^{2}\right)d\theta \otimes d\theta  $$
> 1. calculate the length of a great circle on $S^{2}$.
> 2. for any two points, calculate the distance between them.
> 3. calculate the volume of $K_{a,b}= \left\{ \left(z,\theta \right): a< z< b \right\}$, where $-1< a< b< 1$.
> 4. for any smooth vector field $X= X^{\theta }\partial _{\theta }+ X^{z}\partial _{z}$, write down $\operatorname{div}\left(X\right)$.
> 5. for any smooth function $f=f\left(z,\theta \right)$, write down $\nabla f$ and $\Delta f$. 

> [!solution] solution: 
> 1. a great circle can be parametrized by 
>     $$ \gamma \left(t\right)= \left(0,\theta \left(t\right)\right) $$
>    and the velocity is
>     $$ \gamma ^{\prime} \left(t\right)= \theta ^{\prime} \left(t\right)\partial _{\theta },$$
>    where
>     $$ \theta \left(t\right)= 2\pi t ,\quad \theta ^{\prime} \left(t\right)= 2\pi $$
> 
>    $$ \left\| \gamma ^{\prime} \left(t\right) \right\|_{g_{s^{2}}}= \sqrt{g_{s^{2}}\left(\gamma ^{\prime} \left(t\right),\gamma ^{\prime} \left(t\right)\right)}=\sqrt{d\theta \left(2\pi\partial _{\theta } \right)\,d \theta \left(2\pi \partial _{\theta }\right)}  = 2\pi $$ 
>    $$ L\left(\gamma \right)= \int _{0}^{1}\left\| \gamma ^{\prime} \left(t\right) \right\|_{g_{s^{2}}}= 2\pi  $$ 
> 2. choose a rotation $R\in SO\left(3\right)$ such that $Rp= n$, and such that $Rq$'s $\theta$-coordinate is $\pi$.
>    take arbitrary cruve $\gamma$ starting at $n$ and ending at $rq$. then 
>     $$ \gamma \left(0\right)= \left(z\left(0\right),\theta \left(0\right)\right)= \left(0,\theta \left(0\right)\right) $$
>     $$ \gamma \left(1\right)= \left(z\left(1\right),\theta \left(1\right)\right)= \left(z\left(1\right),\pi \right) $$  
>     $$ L\left(\gamma \right)= \int _{0}^{1}\sqrt{\frac{\dot{z}^{2} }{1-z^{2} }+ \left(1-z^{2}\right)\dot{\theta}^{2}}\,d t\ge \int _{0}^{1}\sqrt{\frac{\dot{z}^{2} }{1-z^{2} }}\,d t= \int _{z\left(0\right)}^{z\left(1\right)}\frac{1 }{\sqrt{1-z^{2}} }dz  $$ 
>     $$ L\left(\gamma \right)\ge  \arcsin \left(z\left(1\right)\right)-\arcsin \left(z\left(0\right)\right)= \arcsin \left(z\left(1\right)\right) $$ 
>     the equality holds when $\theta \left(t\right)\equiv \pi$. thus 
>     $$ \operatorname{dist}{\left( p,q \right)}= \inf L\left(\gamma \right)= \arcsin \left(z\left(Rq\right)\right)  $$ 
> 3. $$ g^{zz}=1-z^2,\quad g^{\theta\theta}=\frac{1}{1-z^2} $$ 
>    $$ \det g = 1 $$ 
>   
>    $$ K_{a,b}= \int _{0}^{2\pi }\int _{a}^{b}\sqrt{\det g}\,d z\,d \theta =  2\pi \left(b-a\right)$$ 
>  4. $$ \operatorname{div}_{g}\left(x\right)= \frac{1 }{\sqrt{\det g} }\frac{\partial }{\partial x^{i}}\left(x^{i}\sqrt{\det g}\right)= \frac{\partial }{\partial x^{i}}\left(x^{i}\right)$$ 
>      thus
>     $$ \operatorname{div}\left(x\right)= \partial _{\theta }\left(x^{\theta }\right)+ \partial _{z}\left(x^{z}\right) $$ 
>  5. $$ \begin{aligned} \operatorname{grad}f&=  \left(g^{\theta \theta }\partial _{\theta }f+ g^{z\theta }\partial _{z}f\right)\partial _{\theta }+ \left(g^{\theta z}\partial _{\theta }f+ g^{zz}\partial _{z}f\right)\partial _{z}\\&= \left(\left(\frac{1 }{1-z^{2} }\right)\partial _{\theta }f\right)\partial _{\theta }+ \left(\left(1-z^{2}\right)\partial _{z}f\right)\partial _{z}  \end{aligned} $$ 
>    $$ \begin{aligned} \Delta f= \operatorname{div}\left(\operatorname{grad}f\right)&= \partial _{\theta }\left(\frac{1 }{1-z^{2} }\partial _{\theta }f\right)+ \partial _{z}\left(\left(1-z^{2}\right)\partial _{z}f\right)\\&= \left(\frac{1 }{1-z^{2} }\right)\left(\partial _{\theta }^{2}f\right)+ \left(1-z^{2}\right)\left(\partial ^{2}_{z}f\right)-2z\left(\partial _{z}f\right) \end{aligned} $$ 

> [!exercise] Exercise: 
> We say that $\varphi:M\to N$ is a local isometry if $\varphi ^{*}g_{N}= g_{M}$ and is isometry if further $\varphi$ is a diffeomorphisim. Prove that the antipodal mapping $A:\mathbb{S}^{n}\to \mathbb{S}^{n}$ given by $A\left(p\right)= -p$ is an isometry of $\mathbb{S}^{n}$. Use this fact to introduce a Rie. metirc on $\mathbb{R}P^{n}$ such that the natrual projection $\pi :\mathbb{S}^{n}\to \mathbb{R}P^{n}$ is a local isometry.

> [!proof] Proof: 
> Since $A^{-1} = A$, $A$ is a diffeomorphisim. Furthermore, with the identification $T_{p}\mathbb{S}^{n}\subseteq T_{p}\mathbb{R} ^{n+ 1}\simeq \mathbb{R} ^{n+ 1}$, we can write
>  $$ \left(\,d A\right)_{p}: T_{p}\mathbb{S}^{n}\to T_{-p}\mathbb{S}^{n},\quad \left(dA\right)_{p}\left(v\right)= -v $$
> Then 
>  $$ \left(A^{*}g_{\mathbb{S}^{n}}\right)_{p}\left(v,w\right)= \left(g_{\mathbb{S}^{n}}\right)_{-p}\left(-v,-w\right)=\left< v,w \right>_{\mathbb{R} ^{n}}= \left(g_{\mathbb{S}^{n}}\right)_{p}\left(v,w\right) $$  
> Thus 
>  $$ A^{*}g_{\mathbb{S}^{n}}= g_{\mathbb{S}^{n}} $$
> Recall that $\pi$ is a two-sheeted covering projection, and thus a local diffeomorphism. 
> We define a metric on $\mathbb{R}P^{n}$ by 
>  $$ \tilde{g}_{[p]}\left(v,w\right)= g_{p}\left(\left(d\pi _{p}\right)^{-1} v, \left(d\pi _{p}\right)^{-1} w\right) $$ 
> Since 
>  $$ \begin{aligned} g_{p}\left(\left(\,d \pi _{p}\right)^{-1} v,\left(\,d \pi _{p}\right)^{-1} w\right)&= \left(A^{*}g\right)_{p}\left(\left(d\pi _{p}\right)^{-1} v,\left(d\pi _{p}\right)^{-1} w\right)\\&= g_{-p} \left(\left(d\pi _{-p}\right)^{-1} v,\left(d\pi _{-p}\right)^{-1} w\right)  \end{aligned}$$
> $\tilde{g}$ is well-defined. Observe that 
>  $$ \begin{aligned} \left( \pi ^{*}\tilde{g}\right)_{p}\left(v,w\right)= \tilde{g}_{[p]}\left(d\pi_{p} \left(v\right),d \pi_{p} \left(w\right)\right)&=g_{p}\left(\left(d\pi _{p}\right)^{-1}\,d \pi _{p}\left(v\right), \left(\,d \pi_{p}\right)^{-1}  d\pi _{p}\left(w\right)\right)\\&= g_{p}\left(v,w\right)  \end{aligned} $$ 
> Thus $\pi ^{*}\tilde{g}= g$, $\pi$ is a local isometry.

> [!exercise] Exercise: 
> Let $G$ be a compact connected Lie group($\operatorname{dim}G= n$). We should show that $G$ has a bi-invariant Rie. metric.
> 1. Let $\omega$ be a differential $n$-form on $G$ invariant on the left, that is, $L^{\omega }= \omega, \forall x\in G$. Prove that $\omega$ is right invariant. 
> 2. Show that there exists a left invariant differential $n$-form $\omega$ on $G$.
> 3. Let $\left< \cdot ,\cdot  \right>$ be a left invariant metric on $G$. Let $\omega$ be a positive differential $n$-form on $G$ which is invariant on the left, and define a new Riemannian metric $\left< \cdot ,\cdot  \right>_{g}$ on $G$ by
>  $$ \left< u,v\right>_{g}\left(y\right)= \int _{G}\left< \left(dR_{x}\right)_{y}u,\left(dR_{x}\right)_{y}v \right>\left(yx\right)\omega_{x} ,\quad \forall x,y\in G,u,v\in T_{y}\left(G\right) $$
> Prove that this new Riemannian metric is bi-invariant. 

> [!proof] Proof: 
> 
> 1. Note that 
>  $$ L_{g}\circ R_{h}= R_{h}\circ L_{g} $$
> then we have 
>  $$ R_{h}^{*}\left(L_{g}^{*}\omega \right)= L_{g}^{*}\left(R_{h}^{*}\omega \right) $$
> Since $\omega$ is left-invariant, then 
>  $$ R_{h}^{*}\omega = L_{g}^{*}\left(R_{h}^{*}\omega\right) $$   
> Thus $R_{h}^{*}\omega$ is left-invariant. For each $h\in G$, there exists $f\left(h\right)$ such that 
>  $$ R_{h}^{*}\omega = f\left(h\right)\omega  $$
> Then 
>  $$f\left(h_1h_2\right)\omega = R_{h_1h_2}^{*}\omega = \left(R_{h_2}^{*}\left(R_{h_1}^{*}\omega\right) \right)= R_{h_2}^{*}\left(f\left(h_1\right)\omega \right)= f\left(h_1\right)f\left(h_2\right)\omega $$   
> Thus 
>  $$ f\left(h_1h_2\right)= f\left(h_1\right)f\left(h_2\right) $$
> Further more, $f\left(e\right)= 1$. We have $f:G\to \mathbb{R} \setminus \left\{ 0 \right\}$ is a homomorphism of $G$ into the multiplicative group of real numbers. Since $G$ is connected, $f\left(G\right)\subseteq \mathbb{R} ^{+ }$, and since $G$ is compact, $f\left(G\right)$ is compact. Then only compact group of $\left(\mathbb{R} ^{+ },\cdot \right)$ is $\left\{ 1 \right\}$, we have $f\equiv 1$, $R_{h}^{*}\omega = \omega$, that is $\omega$ is right-invariant.
> 
> 2. Choose $\omega _{e}\in \Lambda ^{n}\left(T^{*}_{e}G\right)$, we define 
>  $$ \omega _{g}\left(v_1,\cdots ,v_{n}\right):= \omega _{e}\left(\left(d L_{g^{-1} }\right)_{g}v_1,\cdots ,\left(dL_{g^{-1} }\right)_{g}v_{n}\right)  $$ 
> Note that 
>  $$ \begin{aligned} \omega _{hg}\left(\left(dL_{h}\right)_{g}v_1,\cdots ,\left(dL_{h}\right)_{g}v_{n}\right)&=\omega _{e}\left(\left(dL_{g^{-1}h^{-1}  }\right)_{hg}\left(dL_{h}\right)_{g}v_1,\cdots ,\left(dL_{g^{-1}h^{-1}  }\right)_{hg}\left(dL_{h}\right)_{g}v_{n}\right)\\&= \omega _{e}\left(\left(dL_{g^{-1}  }\right)_{g}v_1,\cdots ,\left(dL_{g^{-1}  }\right)_{g}v_{n}\right)\\&= \omega _{g}\left(v_1,\cdots ,v_{nm}\right) \end{aligned} $$
> That is 
>  $$ L_{h}^{*}\omega = \omega  $$
> $\omega$ is left-invariant.  
> 
>
> 3. Observe that 
> $$ \begin{aligned} \left< \left(\,d R_{h}\right)_{y} u, \left(\,d R_{h}\right)_{y}v \right>_{g}\left(yh\right)&=  \int _{G}\left< \left(dR_{x}\right)_{yh}\left(dR_{h}\right)_{y}u,\left(dR_{x}\right)_{yh}\left(dR_{h}\right)_{y}v \right>_{yhx}\omega _{x}\\&= \int _{G}\left< \left(dR_{hx}\right)_{y}u,\left(dR_{hx}\right)_{y} v\right>_{yhx}\omega _{x}\\&= \int _{G}\left(L_{h}^{*}f\right)\omega \\&= \int _{G}\left(L_{h}^{*}f\right)\left(L_{h}^{*}\omega \right) \\&= \int _{G}f\omega = \left< u,v \right>_{g}\left(y\right) \end{aligned} $$
> where the fourth line from the left-invariance of $\omega$, and $f\left(x\right)= \left< \left(dR_{x}\right)_{y}u,\left(dR_{x}\right)_{y}v \right>_{yx}$. The above implies that $\left< \cdot ,\cdot  \right>_{g}$  is left-invariant. 
> The other side, denote $\left< \cdot ,\cdot  \right>$ by $\hat{g}$ and $\left< \cdot ,\cdot  \right>_{g}$ by $g$, then 
>  $$ g_{y} = \int _{G}\left(R_{x}^{*}\hat{g}\right)_{y}\omega _{x} $$ 
> We have 
>  $$ \left(L_{h}^{*}g\right)_{y}= \int _{G}\left(R^{*}_{x}\left(L_{h}^{*}\hat{g}\right)\right)_{y}\omega _{x}= \int _{G}\left(R_{x}^{*}\hat{g}\right)_{y}\omega _{x}= g_{y} $$
> Thus $\left< \cdot ,\cdot  \right>_{g}$ is bi-invariant. 

 