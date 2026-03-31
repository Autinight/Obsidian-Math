
代靖涵 25120222201319

> [!exercise] Exercise: 1.2
> 设$V$是$n$维向量空间, $W$是$m$维向量空间, $V^{*},W^{*}$分别是它们的对偶空间. 证明: 当$n,m\ge 2$时, 集合
>  $$ B= \left\{ f\otimes g: f\in V^{*},g\in W^{*} \right\} $$
> 不是向量空间. 

> [!proof] Proof: 
> 设$v_1,\cdots,v_n$是$V$的一组基, $\varepsilon ^{1},\cdots ,\varepsilon ^{n}$是对偶基; $w_1,\cdots ,w_{m}$是$W$的一组基, $\tau ^{1},\cdots ,\tau ^{m}$是$W$的对偶基.
> $B$是线性空间, 则存在$f\in V^{*}$, $g\in W^{*}$使得
>  $$ \varepsilon ^{1}\otimes \tau ^{1}+ \varepsilon ^{2}\otimes \tau ^{2}= f\otimes g $$
> 则对于任意的$w$, 
>  $$ f\left(v_1\right)g\left(w\right)= f\otimes g\left(v_1,w\right)= \tau ^{1}\left(w\right) $$
> 
>  $$f\left(v_2\right)g\left(w\right)=  f\otimes g\left(v_2,w\right)= \tau ^{2}\left(w\right) $$  
> 
> 于是
>  $$ \tau ^{1}= f\left(v_1\right)g,\quad \tau ^{2}= f\left(v_2\right)g $$ 
> 
> 这表明$\tau ^{1},\tau ^{2}$线性相关, 矛盾.


> [!exercise] Exercise: 1.3
> 写出$3$阶协变张量空间$\mathcal{L}\left(V,V,V;\mathbb{R} \right)$的基底, 以及其中的成员$f\in \mathcal{L}\left(V,V,V;\mathbb{R} \right)$的分量的坐标变换规律.

> [!proof] Proof: 
> 设$v_1,\cdots ,v_{n}$是$V$的一组基, $\varepsilon ^{1},\cdots ,\varepsilon ^{n}$是相应的对偶基. 则
> 
>  $$ \mathcal{B}:= \left\{ \varepsilon ^{i_1}\otimes \varepsilon ^{i_2}\otimes \varepsilon ^{i_3}: 1\le i_1,i_2,i_3\le n \right\} $$ 
> 是$\mathcal{L}\left(V,V,V;\mathbb{R} \right)$的一个基底.
> 
> 设$\tilde{v}_{1},\cdots ,\tilde{v}_{n}$是$V$的另外一组基, $\widetilde{\varepsilon}^{1},\cdots ,\widetilde{\varepsilon}^{n}$是其对偶, 设
> 
>  $$ \tilde{v}_{i}= a_{i}^{j}v_{j} $$
> 则
>  $$ \widetilde{\varepsilon}^{i}= b_{j}^{i}\varepsilon ^{j} $$
> 其中
>  $$ a_{i}^{k}b_{k}^{j}= \delta _{i}^{j} $$   
> 
> 设
>  $$ f=\sum _{i_1,i_2,i_3= 1}^{n} f_{i_1i_2i_3}\varepsilon ^{i_1}\otimes \varepsilon ^{i_2}\otimes \varepsilon ^{i_3}= \sum _{j_1,j_2,j_3= 1}^{n}\tilde{f}_{j_1j_2j_3}\widetilde{\varepsilon}^{j_1}\otimes \widetilde{\varepsilon}^{j_2}\otimes \widetilde{\varepsilon}^{j_3} \tag{1}$$
> 
> 其中
> 
>  $$ \widetilde{\varepsilon}^{j_1}\otimes \widetilde{\varepsilon}^{j_2}\otimes \widetilde{\varepsilon}^{j_3}= \sum_{k_1,k_2,k_3} b^{j_1}_{k_1}b^{j_2}_{k_2}b^{j_3}_{k_3}{\varepsilon}^{k_1}\otimes {\varepsilon}^{k_2}\otimes {\varepsilon}^{k_3}$$ 
> 
> 将(1)作用在$\left(v_{i_1},v_{i_2},v_{i_3}\right)$上, 得到
> 
>  $$ f_{i_1i_2i_3}= \sum _{j_1,j_2,j_3= 1}^{n}b^{j_1}_{i_1}b_{i_2}^{j_2}b_{i_3}^{j_3} \tilde{f}_{j_1j_2j_3}$$ 
> 

> [!exercise] Exercise: 1.5
> 设$V$是$n$维向量空间. 证明: $\mathcal{L}\left(V,V;V\right)$是一个向量空间, 并且它与$1$阶反变, $2$阶协变张量的空间$\mathcal{L}\left(V^{*},V,V;\mathbb{R} \right)$是自然同构的.

> [!proof] Proof: 
> 对于$f\in \mathcal{L}\left(V,V;V\right)$, 定义$f^{*}\in \mathcal{L}\left(V^{*},V,V;\mathbb{R} \right)$, 
>
>  $$\left(\varphi \left(f\right)\right)\left(\tau  ,v,w\right)= \tau  \left(f\left(v,w\right)\right) $$ 
> 定义映射$\varphi :\mathcal{L}\left(V,V;V\right)\to \mathcal{L}\left(V^{*},V,V;\mathbb{R} \right)$
>  $$ \varphi : f\mapsto f^{*} $$
> 易见$\varphi$是一个线性映射. 
> 此外, 若$\varphi \left(f\right)= 0$, 则对于任意的$\tau \in V^{*},v,w\in V$, 我们有$\tau \left(f\left(v,w\right)\right)= 0$, 从而$f\left(v,w\right)= 0$, 进而$f= 0$.
> 这表明$\varphi$是一个单同态. 
> 
> 对于$g^{*}\in \mathcal{L}\left(V^{*},V,V;\mathbb{R} \right)$,  我们有$g^{*}\left(\cdot ,v,w\right)\in \left(V^{*}\right)^{*}$, 将其自然地等同于$u\left(v,w\right)\in V$, 则$u\in \mathcal{L}\left(V,V;V \right)$. 因此$\varphi\left(u\right)= g^{*}$. 这表明 $\varphi$是满同态.
>
> 因此$\varphi$是线性同构.
