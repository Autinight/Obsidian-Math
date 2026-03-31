  

> [!exercise] Exercise
> 1. 课上用四元数给出了$\mathbb{S}^{3}$上的李群结构, 计算$\mathbb{S}^{3}$的李代数;
>
> 2. 证明$\mathbb{S}^{3}$同构于
>
> $
> SU(2)=\left\{\begin{pmatrix} z & w \\ -\overline{w} & \overline{z} \end{pmatrix}\,\middle|\,|z|^{2}+|w|^{2}=1,\ z,w\in\mathbb{C}\right\}.
> $



> [!proof] Proof: 
> 1. 令 $F:\mathbb{H}\to \mathbb{R}$, $F\left(q\right)= \left| q \right|^{2}$, 则
>  $$ \mathbb{S}^{3}= \left\{ F^{-1} \left(1\right) \right\} $$
>  $$ T_{e}\mathbb{S}^{3}= \operatorname{ker}  d F_{1}= \operatorname{span}\left\{ i,j,k \right\} $$
> 考虑 $\mathbb{H}$的左正则表示 $\rho : \mathbb{H}^{+ }\to \operatorname{GL} \left(4,\mathbb{R} \right)$
>  $$ \rho \left(p\right)= \left(q\mapsto p\cdot q\right) $$   
> 这里将 $\mathbb{H}$通过基 $\left\{ 1,i,j,k \right\}$视为 $M\left(4,\mathbb{R} \right)$中的元素. 则 $\rho$是一个忠实的表示, 同时也是一个李群同态. 由于 $\mathbb{S}^{3}$是 $\mathbb{H}^{+ }$的李子群, 我们有$\rho |_{\mathbb{S}^{3}}$也是一个李群同态, 它诱导出李代数同态
>  $$ \rho _{*} :T_{e}\mathbb{S}^{2}\to T_{e}\operatorname{GL} \left(4,\mathbb{R} \right) $$
> 由于 $\operatorname{GL} \left(4,\mathbb{R} \right)$同构于 $\mathfrak{gl}\left(4,\mathbb{R} \right)$, 李代数乘法无非是交换子, 因此对于 $X,Y\in \operatorname{Lie}\left(\mathbb{S}^{3}\right)$, 我们有
>  $$ \begin{aligned} \begin{aligned} \rho _{{*}}\left(\left[ X,Y \right]_{e}\right)&=\left[ \rho _*X , \rho _*Y \right] \\&= \left(\rho _{*}X\right)_{e}\left(\rho _{*}Y\right)_{e}-\left(\rho _{*}Y\right)_{e}\left(\rho _{*}X\right)_{e}\\&= \rho _{*}\left(X_{e}Y_{e}-Y_{e}X_{e}\right)\end{aligned} \end{aligned}  $$  
> 由于表示是忠实的,  $\rho _{*}$是单同态, 我们得到
>  $$ \left[ X,Y \right]_{e}= X_{e}Y_{e}-Y_{e}X_{e} $$
> 其中右侧为 $\mathbb{H}$结合代数的乘法. 通过在一组基上计算
>  $$ [i,j]= 2k,\quad [j,k]= 2i,\quad [k,i]= 2j $$
> 可以给出 $\mathbb{S}^{3}$的李代数结构.  
>
> 2.  令 $\mathbb{H}\simeq \mathbb{C} ^{2}$, 则$\mathbb{H}$中的乘法写作
>  $$ \left(a,b\right)\cdot \left(c,d\right)= \left(ac- \bar{b}d, \bar{a}d+ bc\right) $$ 
> 考虑映射 $\Phi :\mathbb{H}\to SU\left(2\right)$
>  $$ \varphi \left(\left(a,b\right)\right)= \begin{pmatrix} 
>  a&b\\-\bar{b}&\bar{a}
> \end{pmatrix}  $$ 
> 则 $\Phi$是线性同构, $\Phi ,\Phi ^{-1}$均光滑, 且 $\Phi \left(\mathbb{S}^{3}\right)= SU\left(2\right)$, $\Phi |_{\mathbb{S}^{3}}$是一个微分同胚. 并且
>  $$ \Phi \left(i\right)\Phi \left(j\right)= \Phi \left(k\right) $$
> 类似地,
>  $$ \Phi \left(ki\right)= \Phi \left(j\right),\quad \Phi \left(jk\right)= \Phi \left(i\right) $$
> $\Phi$是一个李群同态, 故 $\Phi |_{\mathbb{S}^{3}}$是李群同构.  

> [!exercise] Exercise
> 1. 求证$M(n,\mathbb{R})$上的指数映射
>
>   $$
> \exp(A)=I+A+\frac{A^{2}}{2!}+\cdots+\frac{A^{k}}{k!}+\cdots
>   $$
>
> 在$\|A\|^{2}=\sum _{1\le i,j\le n}a_{ij}^{2}$下收敛.
>
> 2. 证明$\exp: \mathfrak{so}(2)\to SO(2)$是满射, 由此$SO(2)$是连通的;  $\exp \mathfrak{sl}(2)\to SL\left( 2,\mathbb{R}\right)$不满, 但$SL(2,\mathbb{R})$连通.
>
> 3. 证明作为流形, $SL(2,\mathbb{R})$微分同胚于$S^{1}\times\mathbb{R}^{2}$.
>
> 4. 证明作为李群, $SL(2,\mathbb{R})$不同构于$S^{1}\times\mathbb{R}^{2}$(乘积李群结构).

> [!proof] Proof: 
> 1. ..
> 2. $\mathfrak{so}\left(2\right)$由二阶反对称矩阵组成, 它的一组基是 $J:= \begin{pmatrix} 0&1\\-1&0 \end{pmatrix}$. 则$J^{2}= -I$
>  $$ \begin{aligned} \exp \left(\theta J\right)&=  \sum _{k= 0}^{\infty}\frac{\theta ^{k}J^{k} }{k! }\\&=  \left(\theta J-\frac{1}{3!}\theta ^{3}J+ \cdots \right)+ \left(1-\frac{1}{2}\theta ^{2}I+ \cdots \right)\\&= \sin \theta J+ \cos \theta I\\&= \begin{pmatrix} \cos \theta &\sin \theta \\-\sin \theta &\cos \theta  \end{pmatrix}\end{aligned} $$
> 因此$\exp\left(\mathfrak{so}\left(2\right)\right)$包含所有旋转矩阵, 而$\mathrm{SO}\left(2\right)$中每一个元素都是旋转矩阵, 因此 $\exp$是满射. 由于 $\mathfrak{so}\left(2\right)\simeq \mathbb{R}$是连通的 , $\exp$是连续映射, 故  $\mathrm{SO}\left(2\right)$连通. 
> 
> **存在$A$,使得 $\exp X\neq A$,$\forall x\in \mathfrak{sl}\left(2,\mathbb{R} \right)$**. $\mathfrak{sl}\left(2,\mathbb{R} \right)= \left\{ \operatorname{tr}X= 0 \right\}$. 由于$X$的特征值互相共轭且互为相反数, 设其特征值为 $\lambda ,-\lambda$, 则 $\lambda$为实数或纯虚数. 由谱映射定理, $\exp X$的特征值为 $e^{\lambda },e^{-\lambda }$.
> * 若$\lambda\in \mathbb{R}$, 则 
>  $$ \operatorname{tr}\left(\exp X\right)= e^{\lambda }+ e^{-\lambda } \ge 2\sqrt{e^{\lambda }\cdot e^{-\lambda }}= 2$$
> * 若 $\lambda \in i\mathbb{R}$, 则
>  $$ \operatorname{tr}\left(\exp X\right)= e^{i\theta }+ e^{-i\theta }= 2\cos \theta  \in \left[ -2,2 \right]$$ 
> 但是如果我们考虑 $A\in \operatorname{SL}\left(2,\mathbb{R} \right)$, $A= \begin{pmatrix} -\frac{1}{2}&0\\0 & -2 \end{pmatrix}$, 我们发现
>  $$ \operatorname{tr}\left(A\right)= -2.5< -2 $$
> 这表明任意 $X \in \mathfrak{sl}\left(2,\mathbb{R} \right)$都不能使得 $A= \exp X$, 故 $\exp :\mathfrak{sl}\left(2,\mathbb{R} \right)\to \operatorname{SL}\left(2,\mathbb{R} \right)$是非满的. 
>
> **$\operatorname{SL}\left(2,\mathbb{R} \right)$连通**:  考虑 $A\in \operatorname{SL}\left(2,\mathbb{R} \right)$的极分解: 令 $P$是对称正定矩阵 $A^{\top}A$唯一的正定平方根$P= \sqrt{A^{\top}A}$, 则 $\det P= 1$, $P= P^{\top}$. 令 $U= AP ^{-1}$, 则易见$U$是正交矩阵, 使得 $\det U= \det A \det P ^{-1} =1$. 故 $U\in \operatorname{SO}\left(2\right)$. 令
>  $$ \mathcal{P}= \left\{ P \in \operatorname{SL}\left(2,\mathbb{R} \right): P^{\top}= P \right\} $$
>  则我们建立了微分同胚 $\Phi :\operatorname{SO}\left(2\right)\times \mathcal{P}\to \operatorname{SL}\left(2,\mathbb{R} \right)$. 令 $\operatorname{Sym}_{0}\left(2\right)$表示tr为零的二阶对称矩阵, 则  
>  $$ \operatorname{Sym}_{0}\left(2\right)=  \operatorname{span}\left\{ \begin{pmatrix} 1&0\\0&-1 \end{pmatrix} ,\begin{pmatrix} 0&1\\1&0 \end{pmatrix}\right\}\simeq \mathbb{R} ^{2} $$
>  我们有$\exp :\operatorname{Sym}_{0}\left(2\right)\to \mathcal{P}$是微分同胚, 因此存在微分同胚
>  $$ \operatorname{SL}\left(2,\mathbb{R} \right)\simeq \operatorname{SO}\left(2\right)\times\mathbb{R} ^{2}\simeq S^{1}\times \mathbb{R} ^{2} $$ 
> 由于 $S^{1}\times \mathbb{R} ^{2}$是连通的,$\operatorname{SL}\left(2,\mathbb{R} \right)$是连通的. 
>
> 3. proved by 2.
> 4. 由乘积李群的结果,
>  $$ \operatorname{Lie}\left(S^{1}\times \mathbb{R} ^{2}\right)\simeq \operatorname{Lie}\left(S^{1}\right)\oplus \operatorname{Lie}\left(\mathbb{R} ^{2}\right)\simeq  i\mathbb{R} \oplus \mathbb{R} ^{2}$$
> 但是 $\exp : i\mathbb{R} \to S^{1}$是满射, $\exp :\mathbb{R} ^{2}\to \mathbb{R} ^{2}$是满射, 因此
>  $$ \exp : \operatorname{Lie}\left(S^{1}\times \mathbb{R} ^{2}\right)\to S^{1}\times \mathbb{R} ^{2} $$
> 是满射, 但是 $\exp :\mathfrak{sl}\left(2,\mathbb{R} \right)\to \operatorname{SL}\left(2,\mathbb{R} \right)$非满, 因此 $\operatorname{SL}\left(2,\mathbb{R} \right)$与 $S^{1}\times \mathbb{R} ^{2}$作为李群不同构.  

> [!exercise] Exercise
> 设 $G$是一个连通李群, 则
>
> $$
> G\text{ 是 abelian的}\iff \mathfrak{g}\text{是abelian的}([X,Y]=0).
>
> $$


> [!proof] Proof: 
> 若 $G$是Abelian的, 则对于任意的 $h\in G$, 伴随映射 $C_{h}:G\to G$
>  $$ C_{h}\left(g\right)= h^{-1} gh= g $$
> 是单位映射, 从而
>  $$ \left(C_{h}\right)_{*}= \operatorname{Id}_{\mathfrak{g}} $$
> 因此伴随表示 $\operatorname{Ad}: G\to \operatorname{GL} \left(\mathfrak{g}\right)$是常值映射, 它诱导出李代数之间的平凡同态 $\operatorname{ad}= \operatorname{Ad}_{*}: \mathfrak{g}\to \mathfrak{gl}\left(\mathfrak{g}\right)$. $\operatorname{ad}\left(X\right)= 0_{\mathfrak{g}}$, $\forall X \in \mathfrak{g}$. 此时对于任意的 $X,Y\in \mathfrak{g}$,
>  $$ \left[ X,Y \right]= \operatorname{ad}\left(X\right)\left(Y\right)= 0\left(Y\right)= 0 $$
> 故 $\mathfrak{g}$是交换的.
>
> 反之, 若 $\mathfrak{g}$是交换的, 对于任意的 $X \in \mathfrak{g}$, $\operatorname{ad}_{X}:\mathfrak{g}\to \mathfrak{g}$是零同态, 由指数映射的自然性,
>  $$ \operatorname{Id}_{G}= \exp \left(0\right) = \exp \circ \operatorname{ad}\left(X\right)= \operatorname{Ad}_{\exp \left(X\right)} $$
> 于是利用 $\exp \circ \operatorname{Ad}_{g}= C_{g}\circ \exp$, 得到
>  $$ \exp \left(Y\right)= \exp \left(\operatorname{Ad}_{\exp \left(X\right)}\left(Y\right)\right)= C_{\exp \left(X\right)}\left(Y\right) $$
> 这表明 
> $$ \exp \left(X\right)\exp \left(Y\right)= \exp \left(Y\right)\exp \left(X\right) $$  
> 由反函数定理, $\exp$是 $0\in \mathfrak{g}$附近到 $0\in G$附近的一个局部微分同胚, 因此在 $0\in G$的一个开邻域$U$上, 成立
>  $$ XY= YX $$
> 而 $G$是连通的, 从而$G$由单位开邻域生成, 这表明$G$上任何元素都可以写成$U$上元素的有限乘积, 从而$G$中元素两两可交换.

> [!exercise] Exercise
> 求证
>
> $$
> \mu:G\times G\to G,\qquad (g,h)\mapsto gh
>
> $$
>
> 是淹没.

> [!proof] Proof: 
> 考虑到
>  $$ T_{\left(g,h\right)}\left(G\times G\right)\simeq T_{g}G\oplus T_{h}G $$ 
> 令 $R_{h}$和 $L_{g}$表示右平移和左平移, 则
>  $$ \begin{aligned} d \mu _{\left(g,h\right)} \left(v,w\right)&= d \mu _{\left(g,h\right)} \left(v,0\right)+ d \mu _{\left(g,h\right)} \left(0,w\right)\\&= d \mu_ {\left(g,h\right)}d \iota _{g}^{\left(h\right)}\left(v\right)+ d \mu _{\left(g,h\right)}d \iota _{h}^{\left(g\right)}\left(w\right)\\&= d\left( \mu \circ \iota ^{\left(h\right)}\right)_{g}\left(v\right)+ d\left(\mu \circ \iota ^{\left(g\right)}\right)_{h}\left(w\right)\\&=d \left(R_{h}\right)_{g}\left(v\right)+ d \left(L_{g}\right)_{h}\left(w\right)  \end{aligned} $$ 
> 其中 $\iota ^{\left(h\right)}:G\to G\times G$, $\iota ^{\left(h\right)}\left(g\right)=\left(g,h\right)$, $\iota ^{\left(g\right)}: G\to G\times G$,$\iota ^{\left(g\right)}\left(h\right)= \left(g,h\right)$. 由于 $R_{h}$是微分同胚,特别的, $d\left(R_{h}\right)_{g}$是满射. 任取 $z\in G$, 存在 $v$, 使得 $d\left(R_{h}\right)_{g}\left(v\right)=z$, 于是
>  $$ d \mu _{\left(g,h\right)}\left(v,0\right)= d\left(R_{h}\right)_{g}\left(v\right)= z $$
> 这表明 $d \mu _{\left(g,h\right)}$ 是满射, 从而 $\mu$是淹没.
 