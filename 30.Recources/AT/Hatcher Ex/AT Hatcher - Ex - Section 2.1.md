



### 🏆 代数拓扑 Section 2.1 核心刷题进度表

#### 🟢 第一阶段：$\Delta$-复形构造与单纯同调计算
*   [ ] **⭐ Ex 2 (从 $\Delta^3$ 粘合出曲面)**：**必做！** 掌握边等价如何产生 Klein bottle, torus, $S^2$, $\mathbb{R}P^2$。
*   [ ] **⭐ Ex 5 (Klein bottle 的同调)**：**必做！** 用标准 $\Delta$-复形结构写链群、算边缘映射。
*   [ ] **⭐ Ex 8 (四面体环形粘合)**：**必做！** 证明 $H_*(X)\cong(\mathbb{Z},\mathbb{Z}_n,0,\mathbb{Z})$，三维计算模板。
*   [ ] **⭐ Ex 9 (同维面全等价)**：计算 $\Delta^n$ 所有同维面粘合后的同调，训练一般 $n$ 的归纳。

#### 🔵 第二阶段：相对同调、正合列与代数工具
*   [ ] **⭐ Ex 14 (短正合列的分类)**：**重要！** 判断 $\mathbb{Z}_{p^m}\to A\to\mathbb{Z}_{p^n}$ 中 $A$ 的可能性。
*   [ ] **⭐ Ex 17 (曲面的相对同调)**：计算 $S^2$, $T^2$, 亏格二曲面的 $H_n(X,A)$。

#### 🔴 第三阶段：悬挂、CW 复形与反例
*   [ ] **⭐ Ex 20 (悬挂同构)**：**必做！** 证明 $\widetilde{H}_n(X)\cong\widetilde{H}_{n+1}(SX)$。
*   [ ] **⭐ Ex 22 (CW 复形同调的归纳证明)**：**必做！** 用 $X^n/X^{n-1}\simeq\bigvee S^n$ 做归纳。
*   [ ] **⭐ Ex 26 (good pair 条件的必要性)**：$H_1(X,A)\not\cong\widetilde{H}_1(X/A)$ 的经典反例。
*   [ ] **⭐ Ex 29 ($T^2$ vs $S^1\vee S^1\vee S^2$)**：同调同构但万有覆叠空间不同。

---

### 💡 考前 Check 总结

1.  **核心计算模板**：
    - [ ] 熟练写出 $\Delta$-复形的链群与边缘映射矩阵，快速算 $\ker/\operatorname{im}$。
    - [ ] 掌握 $T^2$, Klein bottle, $\mathbb{R}P^2$ 的标准 $\Delta$-复形结构及其同调。
    - [ ] 熟记悬挂同构 $\widetilde{H}_n(X)\cong\widetilde{H}_{n+1}(SX)$ 的证明思路。
2.  **关键定理逻辑**：
    - [ ] 能口述长正合列 $\cdots\to H_n(A)\to H_n(X)\to H_n(X,A)\to H_{n-1}(A)\to\cdots$ 的构造。
    - [ ] 理解切除定理的两种等价表述及其几何含义。
    - [ ] 掌握五引理的证明（分 surjective 和 injective 两步）。
3.  **反例意识**：
    - [ ] 记住 good pair 条件不满足时 $H_n(X,A)\not\cong\widetilde{H}_n(X/A)$ (Ex 26)。
    - [ ] 同调同构不蕴含同伦等价 (Ex 29)。



### 习题

> [!exercise] EXERCISE 2.1.1.
> What familiar space is the quotient $\Delta$-complex of a 2-simplex $[v_0, v_1, v_2]$ obtained by identifying the edges $[v_0, v_1]$ and $[v_1, v_2]$, preserving the ordering of vertices?

> [!exercise] EXERCISE 2.1.2.
> Show that the $\Delta$-complex obtained from $\Delta^3$ by performing the order-preserving edge identifications $[v_0, v_1] \sim [v_1, v_3]$ and $[v_0, v_2] \sim [v_2, v_3]$ deformation retracts onto a Klein bottle. Also, find other pairs of identifications of edges that produce $\Delta$-complexes deformation retracting onto a torus, a 2-sphere, and $\mathbb{R}P^2$.

> [!exercise] EXERCISE 2.1.3.
> Construct a $\Delta$-complex structure on $\mathbb{R}P^n$ as a quotient of a $\Delta$-complex structure on $S^n$ having vertices the two vectors of length 1 along each coordinate axis in $\mathbb{R}^{n+1}$.

> [!exercise] EXERCISE 2.1.4.
> Compute the simplicial homology groups of the triangular parachute obtained from $\Delta^2$ by identifying its three vertices to a single point.

> [!exercise] EXERCISE 2.1.5.
> Compute the simplicial homology groups of the Klein bottle using the $\Delta$-complex structure described at the beginning of this section.

> [!exercise] EXERCISE 2.1.6.
> Compute the simplicial homology groups of the $\Delta$-complex obtained from $n+1$ 2-simplices $\Delta^2_0, \cdots, \Delta^2_n$ by identifying all three edges of $\Delta^2_0$ to a single edge, and for $i > 0$ identifying the edges $[v_0, v_1]$ and $[v_1, v_2]$ of $\Delta^2_i$ to a single edge and the edge $[v_0, v_2]$ to the edge $[v_0, v_1]$ of $\Delta^2_{i-1}$.

> [!exercise] EXERCISE 2.1.7.
> Find a way of identifying pairs of faces of $\Delta^3$ to produce a $\Delta$-complex structure on $S^3$ having a single 3-simplex, and compute the simplicial homology groups of this $\Delta$-complex.

> [!exercise] EXERCISE 2.1.8.
> Construct a 3-dimensional $\Delta$-complex $X$ from $n$ tetrahedra $T_1, \cdots, T_n$ by the following two steps. First arrange the tetrahedra in a cyclic pattern so that each $T_i$ shares a common vertical face with its two neighbors $T_{i-1}$ and $T_{i+1}$, subscripts being taken mod $n$. Then identify the bottom face of $T_i$ with the top face of $T_{i+1}$ for each $i$. Show the simplicial homology groups of $X$ in dimensions $0, 1, 2, 3$ are $\mathbb{Z}, \mathbb{Z}_n, 0, \mathbb{Z}$, respectively.

> [!exercise] EXERCISE 2.1.9.
> Compute the homology groups of the $\Delta$-complex $X$ obtained from $\Delta^n$ by identifying all faces of the same dimension. Thus $X$ has a single $k$-simplex for each $k \leq n$.

> [!exercise] EXERCISE 2.1.10.
> (a) Show the quotient space of a finite collection of disjoint 2-simplices obtained by identifying pairs of edges is always a surface, locally homeomorphic to $\mathbb{R}^2$.
> (b) Show the edges can always be oriented so as to define a $\Delta$-complex structure on the quotient surface.

> [!exercise] EXERCISE 2.1.11.
> Show that if $A$ is a retract of $X$ then the map $H_n(A) \to H_n(X)$ induced by the inclusion $A \hookrightarrow X$ is injective.

> [!exercise] EXERCISE 2.1.12.
> Show that chain homotopy of chain maps is an equivalence relation.

> [!exercise] EXERCISE 2.1.13.
> Verify that $f \simeq g$ implies $f_* = g_*$ for induced homomorphisms of reduced homology groups.

> [!exercise] EXERCISE 2.1.14.
> Determine whether there exists a short exact sequence $0 \to \mathbb{Z}_4 \to \mathbb{Z}_8 \oplus \mathbb{Z}_2 \to \mathbb{Z}_4 \to 0$. More generally, determine which abelian groups $A$ fit into a short exact sequence $0 \to \mathbb{Z}_{p^m} \to A \to \mathbb{Z}_{p^n} \to 0$ with $p$ prime. What about the case of short exact sequences $0 \to \mathbb{Z} \to A \to \mathbb{Z}_n \to 0$?

> [!exercise] EXERCISE 2.1.15.
> For an exact sequence $A \to B \to C \to D \to E$ show that $C = 0$ iff the map $A \to B$ is surjective and $D \to E$ is injective. Hence for a pair of spaces $(X, A)$, the inclusion $A \hookrightarrow X$ induces isomorphisms on all homology groups iff $H_n(X, A) = 0$ for all $n$.

> [!exercise] EXERCISE 2.1.16.
> (a) Show that $H_0(X, A) = 0$ iff $A$ meets each path-component of $X$.
> (b) Show that $H_1(X, A) = 0$ iff $H_1(A) \to H_1(X)$ is surjective and each path-component of $X$ contains at most one path-component of $A$.

> [!exercise] EXERCISE 2.1.17.
> (a) Compute the homology groups $H_n(X, A)$ when $X$ is $S^2$ or $S^1 \times S^1$ and $A$ is a finite set of points in $X$.
> (b) Compute the groups $H_n(X, A)$ and $H_n(X, B)$ for $X$ a closed orientable surface of genus two with $A$ and $B$ the circles shown.

> [!exercise] EXERCISE 2.1.18.
> Show that for the subspace $\mathbb{Q} \subset \mathbb{R}$, the relative homology group $H_1(\mathbb{R}, \mathbb{Q})$ is free abelian and find a basis.

> [!exercise] EXERCISE 2.1.19.
> Compute the homology groups of the subspace of $I \times I$ consisting of the four boundary edges plus all points in the interior whose first coordinate is rational.

> [!exercise] EXERCISE 2.1.20.
> Show that $\widetilde{H}_n(X) \cong \widetilde{H}_{n+1}(SX)$ for all $n$, where $SX$ is the suspension of $X$. More generally, thinking of $SX$ as the union of two cones $CX$ with their bases identified, compute the reduced homology groups of the union of any finite number of cones $CX$ with their bases identified.

> [!exercise] EXERCISE 2.1.21.
> Making the preceding problem more concrete, construct explicit chain maps $s : \widetilde{C}_n(X) \to \widetilde{C}_{n+1}(SX)$ inducing isomorphisms $\widetilde{H}_n(X) \to \widetilde{H}_{n+1}(SX)$.

> [!exercise] EXERCISE 2.1.22.
> Prove by induction on dimension the following facts about the homology of a finite-dimensional CW complex $X$, using the observation that $X^n/X^{n-1}$ is a wedge sum of $n$-spheres:
> (a) If $X$ has dimension $n$ then $H_i(X) = 0$ for $i > n$ and $H_n(X)$ is free.
> (b) $H_n(X)$ is free with basis in bijective correspondence with the $n$-cells if there are no cells of dimension $n-1$ or $n+1$.
> (c) If $X$ has $k$ $n$-cells, then $H_n(X)$ is generated by at most $k$ elements.

> [!exercise] EXERCISE 2.1.23.
> Show that the second barycentric subdivision of a $\Delta$-complex is a simplicial complex.

> [!exercise] EXERCISE 2.1.24.
> Show that each $n$-simplex in the barycentric subdivision of $\Delta^n$ is defined by $n$ inequalities $t_{i_0} \leq t_{i_1} \leq \cdots \leq t_{i_n}$ in its barycentric coordinates, where $(i_0, \cdots, i_n)$ is a permutation of $(0, \cdots, n)$.

> [!exercise] EXERCISE 2.1.25.
> Find an explicit, noninductive formula for the barycentric subdivision operator $S : C_n(X) \to C_n(X)$.

> [!exercise] EXERCISE 2.1.26.
> Show that $H_1(X, A)$ is not isomorphic to $\widetilde{H}_1(X/A)$ if $X = [0, 1]$ and $A$ is the sequence $1, 1/2, 1/3, \cdots$ together with its limit $0$.

> [!exercise] EXERCISE 2.1.27.
> Let $f : (X, A) \to (Y, B)$ be a map such that both $f : X \to Y$ and the restriction $f : A \to B$ are homotopy equivalences.
> (a) Show that $f_* : H_n(X, A) \to H_n(Y, B)$ is an isomorphism for all $n$.
> (b) For the case of the inclusion $f : (D^n, S^{n-1}) \hookrightarrow (D^n, D^n - \{0\})$, show that $f$ is not a homotopy equivalence of pairs.

> [!exercise] EXERCISE 2.1.28.
> Let $X$ be the cone on the 1-skeleton of $\Delta^3$, the union of all line segments joining points in the six edges of $\Delta^3$ to the barycenter of $\Delta^3$. Compute the local homology groups $H_n(X, X - \{x\})$ for all $x \in X$.

> [!exercise] EXERCISE 2.1.29.
> Show that $S^1 \times S^1$ and $S^1 \vee S^1 \vee S^2$ have isomorphic homology groups in all dimensions, but their universal covering spaces do not.

> [!exercise] EXERCISE 2.1.30.
> In each of the following commutative diagrams assume that all maps but one are isomorphisms. Show that the remaining map must be an isomorphism as well.

> [!exercise] EXERCISE 2.1.31.
> Using the notation of the five-lemma, give an example where the maps $\alpha$, $\beta$, $\delta$, and $\varepsilon$ are zero but $\gamma$ is nonzero. This can be done with short exact sequences in which all the groups are either $\mathbb{Z}$ or $0$.
