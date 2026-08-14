# Framelet 到 UFGConv：理论学习与 Cora 复现计划

## 最终目标

复现论文 *How Framelets Enhance Graph Neural Networks* 的 Cora 节点分类实验，并能从数学上解释实现中的每个对象：

1. graph Laplacian；
2. Haar framelet filters；
3. graph framelet decomposition/reconstruction；
4. Chebyshev polynomial approximation；
5. UFGConv-R；
6. UFGConv-S 与 shrinkage。

论文中的目标结果为

$$
\operatorname{UFGConv\text{-}R}:83.6\%\pm0.6\%,
$$

$$
\operatorname{UFGConv\text{-}S}:83.0\%\pm0.5\%,
\qquad
\text{nonzero coefficient ratio}\approx47.7\%.
$$

## 理论主线

$$
\mathbb R\text{ 上的 affine framelet/filter bank}
\longrightarrow
\mathcal M\text{ 上的 spectral framelet}
\longrightarrow
\mathcal G\text{ 上的 graph framelet}
\longrightarrow
\text{UFGConv}
\longrightarrow
\text{Cora 复现}.
$$

## 核心资料

资料均位于当前目录：

1. [MRA-Based Wavelet Frames and Applications](./00_MRA_Based_Wavelet_Frames_and_Applications.pdf)
2. [Sparse Representation on Graphs by Tight Wavelet Frames and Applications](./00_Sparse_Representation_on_Graphs_by_Tight_Wavelet_Frames.pdf)
3. [How Framelets Enhance Graph Neural Networks](./02_How_Framelets_Enhance_GNNs.pdf)
4. [论文 02 的 MinerU Markdown](./MinerU_markdown_02_How_Framelets_Enhance_GNNs_2088174320956497920.md)
5. [论文 02 官方代码](./UFG/)

---

## 第一阶段：经典 affine framelet 与 filter bank

### 阅读资料

[00_MRA_Based_Wavelet_Frames_and_Applications.pdf](./00_MRA_Based_Wavelet_Frames_and_Applications.pdf)

### 精确阅读范围

| 位置 | 阅读内容 | 解决的问题 |
|---|---|---|
| Lecture 2 开头，印刷页 pp. 23–25 | affine system 公式 (2.1)、tight frame 恒等式、一般 frame 不等式 (2.2)、frame operator | 区分 affine system、frame 和 tight frame |
| Lecture 2 §1.1，pp. 25–27 | refinement 公式 (2.4)、(2.5)，Theorem 2.2（UEP），条件 (2.6) | 区分生成函数与滤波器，理解滤波器如何保证 tightness |
| p. 34 第一段 | mother wavelets 与 framelets 的命名 | 明确 framelet 的定义层级 |
| Lecture 2 §1.4，pp. 37–41 | 公式 (2.24)–(2.26)、Proposition 2.3、Algorithm 2.1 | 理解分解、重构和 perfect reconstruction |
| Lecture 2 §2 开头及 §2.1，pp. 44–46 | Definition 2.2：quasi-affine system | 理解 undecimated transform 的来源 |

### 必须掌握的对象

#### 1. Affine system

$$
X(\Psi)
=
\left\{
\psi_{\ell,n,k}(x)
=2^{n/2}\psi_\ell(2^n x-k)
\right\}_{\ell,n,k}.
$$

这是由有限个 generator 经 dilation 和 translation 产生的函数系统。

#### 2. Tight frame

$$
\|f\|_{L^2}^2
=
\sum_{g\in X(\Psi)}|\langle f,g\rangle|^2,
$$

等价地，

$$
f=\sum_{g\in X(\Psi)}\langle f,g\rangle g.
$$

#### 3. Refinement equations

$$
\widehat\phi(2\xi)
=
\widehat h_0(\xi)\widehat\phi(\xi),
$$

$$
\widehat{\psi_\ell}(2\xi)
=
\widehat h_\ell(\xi)\widehat\phi(\xi).
$$

其中：

- $\phi,\psi_\ell$ 是函数；
- $h_0,h_\ell$ 是离散 masks/filters；
- $h_0$ 是 low-pass filter；
- $h_\ell$ 是 high-pass filters。

#### 4. UEP

重点理解条件

$$
\sum_{\ell=0}^{r}|\widehat h_\ell(\xi)|^2=1,
$$

以及 alias-cancellation 条件。它们保证对应 affine system 构成 tight frame。

### 纸笔验证

验证 Haar filters

$$
a_0(\xi)=\cos(\xi/2),
\qquad
a_1(\xi)=\sin(\xi/2)
$$

满足

$$
|a_0(\xi)|^2+|a_1(\xi)|^2=1.
$$

### 进入下一阶段的标准

- [ ] 能区分 affine system、frame、tight frame 和 framelet；
- [ ] 能区分 generators $\phi,\psi_\ell$ 与 filters $h_0,h_\ell$；
- [ ] 能解释 $W^*W=I$ 与 perfect reconstruction 的关系；
- [ ] 知道 undecimated transform 对应不进行下采样的 quasi-affine system。

### 先跳过

- 所有定理证明；
- approximation order；
- B-spline 的构造细节；
- Lecture 3–5。

---

## 第二阶段：manifold spectral framelet

### 阅读资料

[00_Sparse_Representation_on_Graphs_by_Tight_Wavelet_Frames.pdf](./00_Sparse_Representation_on_Graphs_by_Tight_Wavelet_Frames.pdf)

### 精确阅读范围

| 位置 | 阅读内容 | 解决的问题 |
|---|---|---|
| §2.1，p. 5 | Laplace–Beltrami 谱公式 (2.1)–(2.3) | 建立流形上的 Fourier basis 与 frequency |
| §2.2，pp. 5–7 | 谱 dilation/translation 公式 (2.4)，quasi-affine system (2.5)、(2.6) | 在流形上定义尺度与中心 |
| §2.2.1，pp. 7–9 | refinement 公式 (2.10)，Theorem 2.1，条件 (2.15)，Corollary 2.1 | 理解一维 filter bank 如何产生 manifold tight frame |
| §2.2.2 | 只看 Haar filters 的例子 | 为 graph framelet 与官方代码固定滤波器 |

读到 **Remark 2.3** 停止。

### 核心定义

设 $\{(\lambda_p,u_p)\}$ 是 Laplace–Beltrami operator 的谱数据。流形上的谱 dilation 与 translation 定义为

$$
\psi^{\mathcal M}_{j,n,y}(x)
=
\sum_{p=0}^{\infty}
\widehat{\psi_j}(2^{-n}\lambda_p)
\overline{u_p(y)}u_p(x).
$$

其中：

- $\widehat{\psi_j}(2^{-n}\lambda_p)$ 在谱上选择频率；
- $n$ 控制尺度；
- $y\in\mathcal M$ 是 framelet 的中心；
- $\overline{u_p(y)}u_p(x)$ 承担谱意义下的平移。

### 进入下一阶段的标准

- [ ] 能解释 Laplace–Beltrami eigenfunctions 为什么充当 Fourier basis；
- [ ] 能逐项解释 $\psi^{\mathcal M}_{j,n,y}(x)$；
- [ ] 能说明欧氏空间的平移为何被谱核 $\overline{u_p(y)}u_p(x)$ 取代；
- [ ] 能说明 filter identity 如何变成 manifold tightness。

### 本阶段实验

无代码实验。此处只建立从经典 affine framelet 到 manifold spectral framelet 的定义对应。

---

## 第三阶段：undecimated graph framelet

### 阅读资料

继续阅读 [00_Sparse_Representation_on_Graphs_by_Tight_Wavelet_Frames.pdf](./00_Sparse_Representation_on_Graphs_by_Tight_Wavelet_Frames.pdf)。

### 精确阅读范围

| 位置 | 阅读内容 | 解决的问题 |
|---|---|---|
| §3.1，p. 10 | 公式 (3.1) | manifold coefficients 如何诱导 graph filtering |
| §3.2，pp. 10–12 | graph Laplacian；公式 (3.2)–(3.4)；Theorem 3.1 | 定义 graph framelet 的分析与重构算子 |
| Example 3.1，p. 12 | Haar、linear、quadratic masks | 确定论文 02 使用的 Haar filters |
| §3.3，pp. 12–14 | Chebyshev 公式 (3.5)–(3.7)，读到 Remark 3.1 | 理解如何绕开完整 Laplacian eigendecomposition |

读到 **§3.4 前**停止。

### 从 manifold 到 graph 的替换

$$
\Delta_{\mathcal M}
\longmapsto
L_{\mathcal G},
$$

$$
y\in\mathcal M
\longmapsto
p\in V,
$$

$$
\sum_{\ell=0}^{\infty}
\longmapsto
\sum_{\ell=1}^{N}.
$$

graph framelet 可写成

$$
\psi^{(n)}_{j,p}(v)
=
\sum_{\ell=1}^{N}
\widehat{\beta^{(n)}}(\lambda_\ell/2^j)
\overline{u_\ell(p)}u_\ell(v).
$$

对应的矩阵谱乘子为

$$
W_{n,j}
=
U\operatorname{diag}\!\left(
\widehat{\beta^{(n)}}(\lambda_\ell/2^j)
\right)U^*.
$$

### 第一阶段实验：小图数学验证

1. 构造一个有 6–10 个顶点的小图；
2. 构造 normalized graph Laplacian；
3. 对 Laplacian 做精确 eigendecomposition；
4. 使用 Haar masks 构造全部频带矩阵 $W_{r,j}$；
5. 验证 tight-frame operator：

   $$
   \|W^*W-I\|;
   $$

6. 对随机信号 $f$ 验证 Parseval energy identity：

   $$
   \left|
   \|Wf\|_2^2-\|f\|_2^2
   \right|;
   $$

7. 验证 reconstruction error：

   $$
   \frac{\|W^*Wf-f\|_2}{\|f\|_2};
   $$

8. 记录每个低频与高频 block 的能量；
9. 用 Chebyshev approximation 重复以上验证；
10. 比较 exact spectral transform 与 Chebyshev transform 的误差。

### 进入下一阶段的标准

- [ ] 能从 manifold framelet 逐项得到 graph framelet；
- [ ] 能把 graph framelet 写成 matrix spectral multiplier；
- [ ] 能从 filter partition 推出 $W^*W=I$；
- [ ] 小图上的 tightness、energy 和 reconstruction 检验通过；
- [ ] 能区分精确谱变换与 Chebyshev 近似变换。

---

## 第四阶段：UFGConv 与 shrinkage

### 阅读资料

- [02_How_Framelets_Enhance_GNNs.pdf](./02_How_Framelets_Enhance_GNNs.pdf)
- [论文 02 MinerU Markdown](./MinerU_markdown_02_How_Framelets_Enhance_GNNs_2088174320956497920.md)

### 精确阅读范围

| 位置 | 阅读内容 | 解决的问题 |
|---|---|---|
| Section 3 | graph framelet 定义 (1)，tensorized $W,V$，Chebyshev transform | 论文使用了哪个 graph transform |
| Section 4 | UFGConv-R 公式 (2)，UFGConv-S 公式 (3) | framelet transform 如何成为 GNN layer |
| Section 5 | soft-threshold、scale-dependent threshold、compression ratio | shrinkage 在哪个 domain、哪些频带上作用 |
| Section 8.1 | Cora 数据、两层网络、200 epochs、10 runs、Table 1 | 固定复现实验协议与目标结果 |

Section 6–7、Section 8.2–8.3 暂时跳过。

### UFGConv-R

一层的计算链为

$$
X
\longmapsto
XW_{\mathrm{feat}}
\longmapsto
\mathcal W XW_{\mathrm{feat}}
\longmapsto
\operatorname{diag}(\theta)\mathcal W XW_{\mathrm{feat}}
\longmapsto
\mathcal V(\cdot)
\longmapsto
\operatorname{ReLU}(\cdot).
$$

ReLU 作用在 reconstruction 后的 vertex/spatial domain。

### UFGConv-S

$$
X
\longmapsto
XW_{\mathrm{feat}}
\longmapsto
\mathcal W XW_{\mathrm{feat}}
\longmapsto
\operatorname{diag}(\theta)\mathcal W XW_{\mathrm{feat}}
\longmapsto
\operatorname{Shrinkage}(\cdot)
\longmapsto
\mathcal V(\cdot).
$$

soft-threshold 为

$$
S_\lambda(x)
=
\operatorname{sgn}(x)(|x|-\lambda)_+.
$$

Shrinkage 只作用在 high-pass coefficients。经过 shrinkage 后系数已经改变，因此不再要求 reconstruction 等于原信号。

### 论文公式与官方代码的对应

| 数学对象 | 官方代码 |
|---|---|
| Chebyshev coefficients | [`ChebyshevApprox`](./UFG/UFGConv_relu.py) |
| 多尺度 framelet operators | [`get_operator`](./UFG/UFGConv_relu.py) |
| analysis $\mathcal W$ | `UFGConv.forward` 中纵向拼接后的 sparse matrix multiplication |
| learnable feature map | `self.weight` |
| learnable coefficient filter $\theta$ | `self.filter` |
| synthesis $\mathcal V$ | `UFGConv.forward` 中横向拼接后的 sparse matrix multiplication |
| scale energies | [`multiScales`](./UFG/UFGConv_shrinkage.py) |
| scale-dependent thresholds | [`simpleLambda`](./UFG/UFGConv_shrinkage.py) |
| soft/hard threshold | [`waveletShrinkage`](./UFG/UFGConv_shrinkage.py) |

### 进入正式复现的标准

- [ ] 能写出 UFGConv-R 和 UFGConv-S 的完整算子链；
- [ ] 知道 ReLU 与 shrinkage 分别作用在哪个 domain；
- [ ] 能把论文中的 $W,V,\theta$ 对应到代码；
- [ ] 能解释 shrinkage 后为何不再满足原信号的 exact reconstruction。

---

## 第五阶段：Cora 正式复现

### 实验协议

- 数据集：Cora；
- 数据划分：Planetoid standard public split；
- 网络：两层 UFGConv；
- optimizer：Adam；
- 最大训练轮数：200 epochs；
- 重复次数：10 runs；
- 模型选择：按 validation accuracy 选择 epoch；
- 结果：报告对应 epoch 的 test accuracy；
- 统计量：10 runs 的 mean 与 standard deviation。

### 实验顺序

#### 实验 A：UFGConv-R 单次冒烟测试

- [ ] Cora 数据可下载并加载；
- [ ] graph Laplacian 与 framelet operators 可构造；
- [ ] 模型能完成 forward/backward；
- [ ] 训练 200 epochs；
- [ ] 保存 validation-selected test accuracy。

#### 实验 B：UFGConv-S 单次冒烟测试

- [ ] shrinkage 只处理 high-pass blocks；
- [ ] 记录 shrinkage 前后的非零 coefficient 数；
- [ ] 训练 200 epochs；
- [ ] 保存 validation-selected test accuracy 和 nonzero ratio。

#### 实验 C：10 次正式重复

- [ ] UFGConv-R 运行 10 次；
- [ ] UFGConv-S 运行 10 次；
- [ ] 固定并记录每次 seed；
- [ ] 报告 accuracy mean ± standard deviation；
- [ ] 报告 UFGConv-S 的 nonzero coefficient ratio。

#### 实验 D：shrinkage 实现对照

官方代码的高频循环内部反复执行 `ms_idx = 0`。需要分开运行：

1. **official mode**：完全保留官方行为；
2. **corrected mode**：让不同 high-pass blocks 使用各自的 scale index。

两组结果分别报告，不把 corrected mode 当作论文原始复现结果。

#### 实验 E：$\sigma$ 扫描

对若干 $\sigma$ 运行 UFGConv-S，记录：

| $\sigma$ | Validation accuracy | Test accuracy | Nonzero ratio |
|---:|---:|---:|---:|
|  |  |  |  |

目标是观察准确率与压缩率之间的关系，而非只寻找最高准确率。

### 最终报告必须包含

#### 数学诊断

- $\|W^*W-I\|$；
- Parseval energy error；
- exact reconstruction error；
- Chebyshev reconstruction error；
- 各 frequency band 的能量。

#### Cora 结果

- UFGConv-R accuracy mean ± std；
- UFGConv-S accuracy mean ± std；
- UFGConv-S nonzero coefficient ratio；
- $\sigma$-accuracy-compression 表；
- official 与 corrected shrinkage 的对照。

#### 与论文的比较

| Model | Paper | Reproduction | Difference |
|---|---:|---:|---:|
| UFGConv-R | $83.6\%\pm0.6\%$ |  |  |
| UFGConv-S | $83.0\%\pm0.5\%$ |  |  |
| UFGConv-S nonzero ratio | $47.7\%$ |  |  |

若结果存在偏差，依次检查：

1. PyTorch/PyG 版本；
2. Cora 数据与 standard split；
3. random seed 与 parameter initialization；
4. validation-based model selection；
5. graph Laplacian normalization；
6. Chebyshev approximation；
7. `ms_idx` 的官方实现问题；
8. nonzero ratio 的统计位置与定义。

---

## 首轮明确跳过的内容

以下内容不属于 Cora 主复现的必要前置：

- `01_Tight_Framelets_on_Manifolds.pdf` 的 quadrature 与 fast manifold transform；
- `05_Decimated_G_Framelet_Transforms.pdf` 的 decimated graph framelet；
- Dong 2017 §3.4 的数值例子；
- Dong 2017 Section 4 的 denoising 与 semi-supervised clustering；
- 论文 02 Section 6 的扰动鲁棒性实验；
- 论文 02 Section 7 与 §8.2 的 graph pooling；
- 论文 02 §8.3 的 dilation/scale sensitivity。

这些内容在 Cora 主实验完成后按研究需要补充。

## 总执行顺序

- [ ] 第一阶段：经典 affine framelet 与 filter bank；
- [ ] 第二阶段：manifold spectral framelet；
- [ ] 第三阶段：graph framelet；
- [ ] 小图数学验证；
- [ ] 第四阶段：UFGConv 与 shrinkage；
- [ ] UFGConv-R 单次 Cora；
- [ ] UFGConv-S 单次 Cora；
- [ ] 两个模型各 10 次正式运行；
- [ ] official/corrected shrinkage 对照；
- [ ] $\sigma$ 扫描；
- [ ] 汇总数学诊断与论文结果对照。
