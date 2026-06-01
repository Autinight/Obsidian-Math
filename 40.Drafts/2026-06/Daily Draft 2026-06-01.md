### 10:30


 1. $\int_{-\infty}^{\infty} \frac{\sin(at)\sin(bt)}{t^2} \mathrm{d}t = \pi \min(a, b)$ ;   

令
$$ f_{a}\left(t\right)= \frac{\sin \left(at\right) }{t },\quad f_{b}\left(t\right)= \frac{\sin \left(bt\right) }{t }  $$ 


则 $f_{a}, f_{b}\in L^{1}\cap L^{2}\left(\mathbb{R} \right)$.


由Parseval等式, 我们有
$$ \int _{-\infty}^{\infty}f_{a}\left(t\right){f}_{b}\left(t\right)\,d t= \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)\,d t$$ 

其中
$$ \int _{-\infty}^{\infty}f_{a}\left(t\right)f_{b}\left(t\right)\,d t= \int _{-\infty}^{\infty}\frac{\sin \left(at\right)\sin \left(bt\right) }{t^{2} }\,d t $$ 

$$ \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right) \hat{f}_{b}\left(t\right)\,d t= $$ 


$$ F\left[ \chi _{\left[ -b,b \right]} \right] \left(\xi \right)= \frac{\sin \left(2\pi b\xi \right) }{\pi \xi  }$$ 


$$ \int _{-\infty}^{\infty}\chi _{\left[ -b,b \right]}\left(x\right)e^{-2\pi i\xi x } \,d x$$ 

$$ \int _{-b} ^{b}e^{-2\pi i \xi x}\,d x= -\frac{1 }{2\pi i\xi  }\left(e^{-2\pi i b \xi }-e^{2\pi i b \xi }\right)= \frac{1 }{2\pi i\xi  }\left(e^{2\pi i b \xi }-e^{-2\pi i b \xi }\right)= \frac{2i \sin  \left(2\pi  b \xi \right) }{2\pi  i \xi  }= \frac{\sin \left(2\pi i b \xi \right) }{\pi  \xi  }$$ 

$$ F\left[ \chi _{\left[ -1,1 \right]} \right] = \frac{\sin \left(2\pi  \xi \right) }{\pi  \xi  }$$ 

$$ F\left[ \chi _{\left[ -b,b \right]} \right] \left(\xi \right)= F\left[ \chi _{\left[ -1,1 \right]}\left(\frac{x }{b }\right) \right]\left(\xi \right)= b \frac{\sin \left(2\pi  b \xi \right) }{b\xi  }= \frac{\sin \left(2\pi  b \xi \right) }{\pi \xi  }$$ 

于是

$$ F\left[ \chi _{\left[ -b,b \right]} \right] \left(\xi \right)= \frac{\sin \left(2\pi b \xi \right) }{\pi  \xi  }$$ 

$g\left(\xi \right)= \hat{f}\left(\xi \right)$, $\hat{g}\left(\xi \right)= f\left(-\xi \right)$

$$ F\left[ \frac{\sin \left(2\pi  b x \right) }{ \pi x } \right]\left(\xi \right) = \chi _{\left[ -b,b \right]}\left(\xi \right)$$ 
Let 
$$ a= 2\pi  b  $$
then
$$F\left[ \frac{\sin \left(ax\right) }{  x} \right]\left(\xi \right)= \pi \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(\xi \right) $$  

于是
$$ \hat{f}_{a}\left(t\right)= \pi \chi _{\left[ -\frac{a }{2\pi  },\frac{a }{2\pi  } \right]}\left(t\right) ,\quad \hat{f}_{b}\left(t\right)= \pi \chi _{\left[ -\frac{b }{2\pi  },\frac{b }{2\pi  } \right]}\left(t\right)$$
于是
$$ \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right) \hat{f}_{b}\left(t\right)\,d t= \pi ^{2}\int _{-\frac{\min \left(a,b\right) }{2\pi  }}^{\frac{\min \left(a,b\right) }{2\pi  }}\,d t= \pi \min \left(a,b\right)$$  

 2. $\int_{-\infty}^{\infty} \frac{t^2}{(t^2 + a^2)(t^2 + b^2)} \, \mathrm{d}t = \frac{\pi}{a + b}$ .

 $$ f_{a}\left(t\right)= \frac{t }{t^{2}+ a^{2} },\quad f_{b}\left(t\right)= \frac{t }{t^{2}+ b^{2} } $$ 

 $$ \int _{-\infty}^{\infty}\frac{t }{t^{2}+ a^{2} }e^{-2\pi t \xi } \,d t= $$ 

 $$\int \frac{t }{t^{2}+ a^{2} }\,d t= \frac{1 }{2 }\int \frac{1 }{t^{2}+ a^{2} }dt^{2}= \frac{1}{2}\ln \left(t^{2}+ a^{2}\right) $$ 

 $$ f_{a}\left(t\right)= \left(\frac{1 }{2 }\ln \left(t^{2}+ a^{2}\right)\right) ^{\prime} = \frac{t }{t^{2}+ a^{2} }$$ 

 $$ \widehat{f^{\prime} }\left(t\right)= \left(2\pi i t\right) \hat{f}\left(t\right)$$ 

 $$ f_{a}^{\prime} \left(t\right)= \frac{t^{2}+ a^{2}-t\left(2t\right) }{t^{2}+ a^{2} }= \frac{a^{2}-t^{2} }{a^{2}+ t^{2} } $$ 



$$ \int _{-\infty}^{\infty}\ln \left(t^{2}+ a^{2}\right) e^{-2\pi  i \xi t}\,d t= $$ 
o


$$ \frac{t }{t^{2}+ a^{2} }= \frac{1}{2}\left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right) $$ 

$$ \frac{1 }{2\pi \left(a+ it\right) }= \frac{e^{-\left(a+ it\right)2\pi  x} }{2\pi \left(a+ it \right)}|_{\infty}^{0}= \int _{0}^{\infty}e^{-\left(a+ it\right)2\pi x}= \int _{0}^{\infty}e^{-2\pi  ax}e^{-2\pi x it}\,d x$$ 

$$ \frac{1 }{2\pi  }\frac{1 }{\left(a-it\right) }= \left[ \frac{e^{-\left(a- it\right)2\pi x} }{ 2\pi \left(a-it\right)} \right] _{\infty}^{0}= \int _{0}^{\infty}e^{-\left(a-it\right)2\pi  x}= \int _{0}^{\infty}e^{-2\pi ax}e^{2\pi xit}\,d x= \int _{-\infty}^{0}e^{2\pi  ax}e^{2\pi x it}$$ 
于是
$$ \frac{1 }{2\pi  }\left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right) = \mathcal{F}\left[ e^{-2\pi a \left| x \right| } \right]\left(t\right)$$ 
于是
$$ f_{a}\left(t\right)= \frac{t }{t^{2}+ a^{2} }= \pi  \mathcal{F}\left[ e^{-2\pi  a\left| x \right| } \right] \left(t\right)$$ 

$$ \hat{f}_{a}\left(t\right)= \pi e^{-2\pi a \left| t \right| } $$ 
$$ \hat{f}_{b}\left(t\right)= \pi e^{-2\pi b\left| t \right| } $$ 

于是
$$ \begin{aligned} \int _{-\infty}^{\infty}\hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)\,d t&= \pi ^{2}\int _{-\infty}^{\infty}e^{-2\pi \left(a+ b\right)\left| t \right| }\,d t\\&= 2\pi ^{2}\int _{0}^{\infty}e^{-2\pi \left(a+ b\right)t}\,d t= 2\pi ^{2}\left[ \frac{1 }{-2\pi \left(a+ b\right) } e^{-2\pi \left(a+ b\right)t}\right]\\&=  2\pi ^{2}\frac{1 }{2\pi \left(a+ b\right) }= \frac{\pi  }{a+ b }\end{aligned}$$ 
dm

o
> [!exercise] Exercise: 
> 利用 Fourier 变换来证明以下等式: $a > 0, b > 0$ ,
> 1. $f_{a} * f_{b} = f_{a + b}$ , 其中 $f_{a} = \frac{a}{\pi(x^{2} + a^{2})}$ ;  
> 2. $g_{a} * g_{b} = g_{\min(a, b)}$ ，其中 $g_{a} = \frac{\sin ax}{\pi x}$ .


$$ \widehat{f_{a}*f_{b}}= \hat{f}_{a} \cdot  \hat{f}_{b} $$ 

$$ f_{a}= $$ 
$$ \frac{1 }{2\pi \left(a+ it\right) }= \int _{0}^{\infty}e^{-2\pi ax}e^{-2\pi xit}\,d x $$ 
$$ \frac{1 }{2\pi  }\frac{1 }{a-it }= \int _{0}^{\infty}e^{-2\pi ax}e^{2\pi ixt}\,d x = \int _{-\infty}^{0}e^{2\pi a x}e^{-2\pi  ixt}\,d x$$ 

$$ \frac{a }{\pi \left(t^{2}+ a^{2}\right) }= \frac{ 1}{2\pi  } \left(\frac{1 }{a+ it }+ \frac{1 }{a-it }\right)= \int _{-\infty}^{\infty}e^{-2\pi a\left| x \right| }e^{-2\pi i xt}\,d x $$ 
于是

$$ f_{a}\left(t\right)= \mathcal{F}\left[ e^{-2\pi a \left| x \right| } \right] \left(t\right)$$ 

$$ \hat{f}_{a}\left(t\right)= e^{-2\pi a\left| x \right| } $$ 
于是
$$ \hat{f}_{a}\left(t\right)\hat{f}_{b}\left(t\right)= e^{-2\pi \left(a+ b\right)\left| x \right| }= \hat{f}_{a+ b} \left(t\right)$$ 
于是
$$ \widehat{f_{a}*f_{b}}= \hat{f}_{a+ b} $$ 
由fourier变换的唯一性
$$ f_{a}*f_{b}= f_{a+ b} $$ 



$$ \mathcal{F}\left[ \chi _{\left[ -b,b \right]}\left(x\right) \right] \left(t\right)= \frac{\sin \left(2\pi  bt\right) }{ \pi t}$$ 

$$ \mathcal{F}\left[ \chi _{\left[ -b,b \right]}\left(2 \pi x\right) \right]\left(t\right)= \frac{\sin \left(bt\right) }{\pi t } $$ 


$$f:V\to V $$ 

$$ \operatorname{Im}f\simeq  V/\operatorname{ker}f $$ 
$f$是满的, 则$V/\operatorname{ker}f\simeq V$,只能有$\operatorname{ker}f= 0$.
如果$f$是单的, 则$\operatorname{ker}f= 0$, $\operatorname{Im}f= V$.
因为是有限维, 所以维数可以做减法.

$V$是$n$阶矩阵全体构成的线性空间, $\varphi$是$V$上的线性变换, 使得
$$ \varphi \left(A\right)= AX $$ 
$A$是一个$n$阶矩阵, $\varphi$和$A$有相同的特征值(重数不同).

设$\lambda$是$A$的特征值, 则
$$ Ax_0= \lambda x_0 $$ 

于是
$$ \varphi \left(\left(x_0,0,\cdots \right)\right)= A\left(x_0,0,\cdots ,0\right)= \left(Ax_0,\cdots ,0\right)= \left(\lambda x_0,\cdots ,0\right)= \lambda X $$ 
于是$\lambda$是$\varphi$的特征值. 反之, 若$\lambda$是$\varphi$ 的特征值, 设
$$ AX_0= \lambda X_0, $$ 
于是对于
$$ A\left(x_0,x_1,\cdots ,x_{n}\right)= \lambda \left(x_0,x_1,\cdots ,x_{n}\right) $$ 
你可以看到, $A$的关于$\lambda$特征向量组合在一起张成一个矩阵, 构成$\varphi$的一个特征"向量".  $\varphi$的特征"向量"矩阵都是$A$的特征向量.


例 6.2 设 $\lambda_{1}, \lambda_{2}$ 是矩阵 A 的两个不同的特征值, $\alpha_{1}, \alpha_{2}$ 分别是 $\lambda_{1}, \lambda_{2}$ 的特征向量, 求证: $\alpha_{1} + \alpha_{2}$ 必不是 A 的特征向量.

不同的特征值, 特征向量, $\alpha _1 + \alpha _2$不是特征向量. 
$$ A\left(\alpha _1 + \alpha _2 \right)= \lambda _1 \alpha _1 + \lambda _2 \alpha _2  $$ 

如果$\alpha _1 + \alpha _2$是特征向量, 存在$\lambda _3$, 使得
$$ \left(\lambda _1 -\lambda _3 \right) \alpha _1 + \left(\lambda _2 -\lambda _3 \right)\alpha _2 = 0$$  
由于特征向量是线性无关的.

为什么特征向量是线性无关的?

$$ k_1\alpha _2 + k_2\alpha _2 + \cdots + k_{n}\alpha _{n}= 0$$ 
则
$$ \lambda _1 k_1\alpha _1 + \lambda _2 k_2\alpha _2 + \cdots + \lambda _{n}k_{n}\alpha _{n}= 0 $$ 
于是
$$ \lambda _1 ^{k}\left(k_1\alpha _1 \right)+ \lambda _2 ^{k}+ \cdots + \lambda _{n}^{k}k_{n}\alpha _{n}= 0 $$ 

当$k\to \infty$时, 赋予向量空间欧式内积. 从而定义出范数, 所有向量都是有限范数的. 

$$\left( \frac{\lambda _1  }{\lambda _{n} }\right)^{k}+ \cdots + k_{n}\alpha _{n}= 0 $$ 
当$k\to \infty$, 得到$k_{n}\alpha _{n}= 0$, 矛盾. 任取部分非零线性组合.

---

例 6.3 设 $\varphi$ 是线性空间 V 上的线性变换, V 有一个直和分解:

$$
V = V _ {1} \oplus V _ {2} \oplus \dots \oplus V _ {m},
$$

其中 $V_{i}$ 都是 $\varphi-$ 不变子空间.

(1) 设 $\varphi$ 限制在 $V_{i}$ 上的特征多项式为 $f_{i}(\lambda)$ , 求证: $\varphi$ 的特征多项式

$$
f (\lambda) = f _ {1} (\lambda) f _ {2} (\lambda) \dots f _ {m} (\lambda).
$$

(2) 设 $\lambda_0$ 是 $\varphi$ 的特征值, $V_0 = \{\pmb{v} \in V \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ 为特征子空间, $V_{i,0} = V_i \cap V_0 = \{\pmb{v} \in V_i \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ , 求证:


$$
V _ {0} = V _ {1, 0} \oplus V _ {2, 0} \oplus \dots \oplus V _ {m, 0}.
$$




$V_{i}$是$\varphi$-不变子空间, 是指
$$ \varphi \left(V_{i}\right)\subseteq V_{i} $$ 

我们证明特征多项式可以根据不变子空间分解, 事实上.
我们证明
$$ f_{i}\left(\lambda \right)|f\left(\lambda \right) $$ 

我们证明如果$f_{i}\left(\lambda \right)= 0$, 则$f\left(\lambda \right)= 0$即可.

若不整除, 则
$$ \operatorname{gcd}\left(f_{i},f\right)\neq f_{i} $$ 
$$ f_{i}= \operatorname{gcd}\left(f_{i},f\right)g_{i} $$ 
那么存在点使得$g_{i}= 0$, $\operatorname{gcd}\left(f_{i},f\right)\neq  0$.
于是 $f_{i}\left(x\right)= 0$但是$f\left(x\right)\neq 0$.

如果不整除, 则存在$f_{i}\left(x\right)= 0$但是$f\left(x\right)\neq 0$
反之, 如果
对于任意的$f_{i}\left(x\right)= 0$, $f\left(x\right)= 0$, 则一定整除.

是否存在$x$, 使得$g_{i}\left(x\right)= 0$, 但是$\operatorname{gcd}\left(f_{i},f\right)\neq 0$呢



所谓特征多项式, 就是

$\det \left(\lambda I-A\right)$
对于任意的特征向量, 存在, 把$\alpha$变成是一个基, 则
$$ \left(\lambda I-A\right)\alpha = 0 $$ 
所以$\lambda I-A$不是可逆的, $\det$为零.
则存在一组基
$$ \alpha _{11},\cdots ,\alpha _{1k_1},\cdots ,\alpha _{i1},\alpha _{i k_{i}},\cdots ,\alpha _{m1}, \cdots ,\alpha _{m  k_{m}} $$ 

使得$A$在这组基下为分块
$$ \operatorname{diag} \left( A_1,\cdots ,A_{m} \right)   $$ 

那么
$$ \lambda I-A= \operatorname{diag} \left( \lambda I-A_1,\cdots ,\lambda I-A_{m} \right)   $$ 

$$ \det \left(\lambda I-A\right)= \det \left(\lambda I-A_1\right)\cdots \det \left(\lambda I-A_{m}\right) $$ 
oo


(2) 设 $\lambda_0$ 是 $\varphi$ 的特征值, $V_0 = \{\pmb{v} \in V \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ 为特征子空间, $V_{i,0} = V_i \cap V_0 = \{\pmb{v} \in V_i \mid \varphi(\pmb{v}) = \lambda_0 \pmb{v}\}$ , 求证:


$$
V _ {0} = V _ {1, 0} \oplus V _ {2, 0} \oplus \dots \oplus V _ {m, 0}.
$$

$$ V_0= V_0\cap V= V_0\cap \left(V_1\oplus V_2\oplus \cdots \oplus V_{m}\right) $$ 

任取$v\in V_0$, 设
$$ v_0= v_1+ \cdots + v_{m} $$ 
我们证明
$$ v_{i}\in V_{i}\cap V_0 $$ 

$$ \varphi \left(v_0\right)= \sum _{i}\varphi \left(v_{m}\right)= \lambda _0 v_0 $$ 

$$ \varphi \left(v_{m}\right)\subseteq V_{m} $$
记$v_{m}^{\prime} = \varphi \left(v_{mo}\right)$ 

$$ \lambda _0 v_0=  v_1^{\prime} + \cdots + v_{m}^{\prime} = \lambda _0 v_1+ \cdots + \lambda _0 v_{m}$$ 
于是
$$ \left(v_1^{\prime} -\lambda _0 v_1\right)+ \cdots + \left(v_{m}^{\prime} -\lambda _0 v_{m}\right) = 0$$ 

由于分解是直和分解, 我们得到
$$ v_{i}^{\prime} = \lambda _0 v_{m} $$ 
于是
$$ \varphi \left(v_{m}\right)= \lambda _0 v_{m} $$ 
$v_{m}\in V_{m}\cap V_0$
因此
$$ V_0\subseteq V_{10}\oplus \cdots \oplus V_{m_0} $$ 
反过来, 易见
$$ V_{10} \oplus \cdots \oplus V_{m 0}\subseteq V_0$$ 

例 6.4 设 n 阶分块对角阵 $A = \text{diag}\{A_{1}, A_{2}, \cdots, A_{m}\}$ ，其中 $A_{i}$ 是 $n_{i}$ 阶矩阵.

(1) 任取 $A_{i}$ 的特征值 $\lambda_{i}$ 及其特征向量 $\pmb{x}_{i} \in \mathbb{C}^{n_{i}}$ , 求证: 可在 $\pmb{x}_{i}$ 的上下添加适当多的零, 得到非零向量 $\widetilde{\pmb{x}}_{i} \in \mathbb{C}^{n}$ , 使得 $A\widetilde{\pmb{x}}_{i} = \lambda_{i}\widetilde{\pmb{x}}_{i}$ , 即 $\widetilde{\pmb{x}}_{i}$ 是 $\pmb{A}$ 关于特征值 $\lambda_{i}$ 的特征向量, 称为 $\pmb{x}_{i}$ 的延拓.

(2) 任取 A 的特征值 $\lambda_{0}$ ，并设 $\lambda_{0}$ 是 $A_{i_{1}}, \cdots, A_{i_{r}}$ 的特征值，但不是其他 $A_{j} (1 \leq j \leq m, j \neq i_{1}, \cdots, i_{r})$ 的特征值，求证：A 关于特征值 $\lambda_{0}$ 的特征子空间的一组基可取为 $A_{i_{k}} (1 \leq k \leq r)$ 关于特征值 $\lambda_{0}$ 的特征子空间的一组基的延拓的并集.
