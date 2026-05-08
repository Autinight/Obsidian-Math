### 🏆 Cohomology & Ext Functor - Section 3.1 核心刷题进度表

#### 🔥 核心必做（时间紧迫优先，6道题，实际工作量约4.5道）
- [ ] **⭐ Ex 5 (1-上链的几何意义)**：**必做！** 将1-上链理解为路径上的函数，建立上同调的几何直观。不难但很重要，能帮你理解上边缘算子的几何含义。
- [ ] **⭐ Ex 6 (环面上同调) [仅做 S^1×S^1 部分]**：**必做！** 用单纯上链复形计算 S^1×S^1 的上同调（Z 和 Z_2 系数）。这是校准"同调→上同调"翻译的最小练习，RP^2 和 Klein bottle 跳过。
- [ ] **⭐ Ex 7 (上同调公理失效)**：**必做！** 证明 h^n(X)=Hom(H_n(X),Z) 不满足上同调公理。这道题回答了"为什么需要 Ext"这个 §3.1 的核心问题，只需三五行但理解深刻。
- [ ] **⭐ Ex 8 (Mayer-Vietoris 上同调版) [仅做 (a) 的 MV 部分]**：**必做！** 用 Mayer-Vietoris 序列计算 H^i(S^n;G)。验证一个典型的同调论证在上同调中的对偶形式即可，LES 和 retract 分裂都是平行移植，跳过。
- [ ] **⭐ Ex 9 (度数与上同调)**：**必做！** 证明度数为 d 的映射在 H^n(S^n;G) 上诱导乘 d。简单但重要，连接度数理论与上同调。
- [ ] **⭐ Ex 11 (万有系数定理的非自然性)**：**必做！** 用 Moore 空间证明万有系数定理的分裂不是自然的。这是整个 §3.1 最容易被跳过但最重要的点，跳过会导致对 UCT 的理解有结构性缺陷。

#### 🟡 有余力再做（理论补充，2道题）
- [ ] **Ex 3 (无穷 Ext 序列)**：**重要！** 构造 Z_2 作为 Z_4-模的自由分解，证明 Ext^n_{Z_4}(Z_2,Z_2) 对所有 n 非零。这是唯一一个非 PID 的例子，后续会反复出现。做 Ex 7 时可以顺带理解这个例子。
- [ ] Ex 13 (K(G,1) 表示定理)：证明 [X,K(G,1)] ≅ H^1(X;G)。深入理论，可以推到后面和 obstruction theory 一起学。

#### ⚪ 选做/可跳过（纯理论或冗余计算，5道题）
- [ ] Ex 1 (Ext 的函子性)：证明 Ext(H,G) 关于 H 是反变函子、关于 G 是协变函子。纯理论，时间紧可以直接用结论。
- [ ] Ex 2 (Ext 中的乘法)：证明整数 n 诱导 Ext 中的乘 n 运算。理论性质，可以直接用结论。
- [ ] Ex 4 (对偶同调定义)：用 Hom(G,C_n(X)) 定义"对偶同调"。探索性题目，可跳过。
- [ ] Ex 6 (RP^2 和 Klein bottle 部分)：计算 RP^2 和 Klein bottle 的上同调。与 S^1×S^1 是同类型计算，时间紧可以跳过。
- [ ] Ex 8 (LES 和 retract 部分)：用长正合列计算 S^n 上同调、证明 retract 分裂。与同调版本完全平行，冗余。
- [ ] Ex 10 (透镜空间上同调)：计算透镜空间的上同调（多种系数）。计算量大，可简化或跳过。
- [ ] Ex 12 (相对上同调消失)：证明 H^k(X,X^n;G)=0 当 k≤n。技术性结果，可跳过。

---

### 💡 考前 Check 总结（聚焦核心6题）

1. **上同调的几何直观与结构**：
   - [ ] 能将 1-上链解释为路径上的函数，理解上边缘算子 δ 的几何意义（Ex 5）
   - [ ] 知道 H^1(X;G) ≅ Hom(π_1(X),G)（X 道路连通时），理解上同调与基本群的关系
   - [ ] 理解为什么 h^n(X)=Hom(H_n(X),Z) 不是上同调理论——缺少 Ext 项（Ex 7）

2. **上同调计算的最小校准**：
   - [ ] 会用单纯上链复形计算 S^1×S^1 的上同调（Z 和 Z_2 系数）（Ex 6 部分）
   - [ ] 会用 Mayer-Vietoris 序列计算球面 S^n 的上同调（Ex 8 部分）
   - [ ] 理解同调计算如何翻译到上同调：转置边缘算子，箭头反向

3. **万有系数定理的深层理解**：
   - [ ] 知道 UCT 的陈述：H^n(X;G) ≅ Hom(H_n(X),G) ⊕ Ext(H_{n-1}(X),G)
   - [ ] 理解这个分裂不是自然的，能用 Moore 空间 M(Z_m,n) 给出反例（Ex 11）
   - [ ] 理解 Ext 项的存在理由：没有 Ext 就无法定义上同调理论（Ex 7）

4. **度数与上同调**：
   - [ ] 知道度数为 d 的映射 f:S^n→S^n 诱导 f*:H^n(S^n;G)→H^n(S^n;G) 是乘 d（Ex 9）
   - [ ] 理解这与同调中度数的对应关系

**如果有余力**：
- [ ] 记住 Ext^n_{Z_4}(Z_2,Z_2) 非零的例子（Ex 3），这是非 PID 情况的典型
- [ ] 理解 K(G,1) 的表示定理：[X,K(G,1)] ≅ H^1(X;G)（Ex 13）

---

### 习题

> [!exercise] EXERCISE 3.1.1.
> Show that $\operatorname{Ext}(H, G)$ is a contravariant functor of $H$ for fixed $G$, and a covariant functor of $G$ for fixed $H$.

> [!exercise] EXERCISE 3.1.2.
> Show that the maps $G \xrightarrow{n} G$ and $H \xrightarrow{n} H$ multiplying each element by the integer $n$ induce multiplication by $n$ in $\operatorname{Ext}(H, G)$.

> [!exercise] EXERCISE 3.1.3.
> Regarding $\mathbb{Z}_2$ as a module over the ring $\mathbb{Z}_4$, construct a resolution of $\mathbb{Z}_2$ by free modules over $\mathbb{Z}_4$ and use this to show that $\operatorname{Ext}^n_{\mathbb{Z}_4}(\mathbb{Z}_2, \mathbb{Z}_2)$ is nonzero for all $n$.

> [!exercise] EXERCISE 3.1.4.
> What happens if one defines homology groups $h_n(X; G)$ as the homology groups of the chain complex $\cdots \to \operatorname{Hom}(G, C_n(X)) \to \operatorname{Hom}(G, C_{n-1}(X)) \to \cdots$? More specifically, what are the groups $h_n(X; G)$ when $G = \mathbb{Z}$, $\mathbb{Z}_m$, and $\mathbb{Q}$?

> [!exercise] EXERCISE 3.1.5.
> Regarding a cochain $\phi \in C^1(X; G)$ as a function from paths in $X$ to $G$, show that if $\phi$ is a cocycle, then (a) $\phi(f \cdot g) = \phi(f) + \phi(g)$, (b) $\phi$ takes the value $0$ on constant paths, (c) $\phi(f) = \phi(g)$ if $f \simeq g$, (d) $\phi$ is a coboundary iff $\phi(f)$ depends only on the endpoints of $f$, for all $f$.
> 
> [In particular, (a) and (c) give a map $H^1(X; G) \to \operatorname{Hom}(\pi_1(X), G)$, which the universal coefficient theorem says is an isomorphism if $X$ is path-connected.]

> [!exercise] EXERCISE 3.1.6.
> (a) Directly from the definitions, compute the simplicial cohomology groups of $S^1 \times S^1$ with $\mathbb{Z}$ and $\mathbb{Z}_2$ coefficients, using the $\Delta$-complex structure given in §2.1.
> 
> (b) Do the same for $\mathbb{RP}^2$ and the Klein bottle.

> [!exercise] EXERCISE 3.1.7.
> Show that the functors $h^n(X) = \operatorname{Hom}(H_n(X), \mathbb{Z})$ do not define a cohomology theory on the category of CW complexes.

> [!exercise] EXERCISE 3.1.8.
> Many basic homology arguments work just as well for cohomology even though maps go in the opposite direction. Verify this in the following cases: (a) Compute $H^i(S^n; G)$ by induction on $n$ in two ways: using the long exact sequence of a pair, and using the Mayer–Vietoris sequence. (b) Show that if $A$ is a closed subspace of $X$ that is a deformation retract of some neighborhood, then the quotient map $X \to X/A$ induces isomorphisms $H^n(X, A; G) \approx \widetilde{H}^n(X/A; G)$ for all $n$. (c) Show that if $A$ is a retract of $X$ then $H^n(X; G) \approx H^n(A; G) \oplus H^n(X, A; G)$.

> [!exercise] EXERCISE 3.1.9.
> Show that if $f : S^n \to S^n$ has degree $d$ then $f^* : H^n(S^n; G) \to H^n(S^n; G)$ is multiplication by $d$.

> [!exercise] EXERCISE 3.1.10.
> For the lens space $L_m(\ell_1, \ldots, \ell_n)$ defined in Example 2.43, compute the cohomology groups using the cellular cochain complex and taking coefficients in $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{Z}_m$, and $\mathbb{Z}_p$ for $p$ prime. Verify that the answers agree with those given by the universal coefficient theorem.

> [!exercise] EXERCISE 3.1.11.
> Let $X$ be a Moore space $M(\mathbb{Z}_m, n)$ obtained from $S^n$ by attaching a cell $e^{n+1}$ by a map of degree $m$. (a) Show that the quotient map $X \to X/S^n = S^{n+1}$ induces the trivial map on $\widetilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^{n+1}(-; \mathbb{Z})$. Deduce that the splitting in the universal coefficient theorem for cohomology cannot be natural. (b) Show that the inclusion $S^n \hookrightarrow X$ induces the trivial map on $\widetilde{H}^i(-; \mathbb{Z})$ for all $i$, but not on $H^n(-; \mathbb{Z})$.

> [!exercise] EXERCISE 3.1.12.
> Show $H^k(X, X^n; G) = 0$ if $X$ is a CW complex and $k \leq n$, by using the cohomology version of the second proof of the corresponding result for homology in Lemma 2.34.

> [!exercise] EXERCISE 3.1.13.
> Let $\langle X, Y \rangle$ denote the set of basepoint-preserving homotopy classes of basepoint-preserving maps $X \to Y$. Using Proposition 1B.9, show that if $X$ is a connected CW complex and $G$ is an abelian group, then the map $\langle X, K(G, 1) \rangle \to H^1(X; G)$ sending a map $f : X \to K(G, 1)$ to the induced homomorphism $f_* : H_1(X) \to H_1(K(G, 1)) \approx G$ is a bijection, where we identify $H^1(X; G)$ with $\operatorname{Hom}(H_1(X), G)$ via the universal coefficient theorem.
