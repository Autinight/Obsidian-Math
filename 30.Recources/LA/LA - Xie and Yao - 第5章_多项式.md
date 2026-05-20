# 高等代数（第四版）学习指导书

> **书名**: 高等代数（第四版）学习指导书
> **作者**: 谢启鸿、姚慕生 编著
> **出版社**: 复旦大学出版社
> **配套教材**: 《高等代数学（第四版）》
> **说明**: 本书是复旦大学高等代数课程配套学习用书，与教材章节顺序完全相同，包含基本概念、例题解析、方法和技巧分类、基础训练题等内容。

---

## 目录

- [第1章 行列式](#第1章-行列式)
- [第2章 矩阵](#第2章-矩阵)
- [第3章 线性空间与线性方程组](#第3章-线性空间与线性方程组)
- [第4章 线性映射](#第4章-线性映射)
- [第5章 多项式](#第5章-多项式)
- [第6章 特征值](#第6章-特征值)
- [第7章 相似标准型](#第7章-相似标准型)
- [第8章 二次型](#第8章-二次型)
- [第9章 内积空间](#第9章-内积空间)
- [第10章 双线性型](#第10章-双线性型)

---

## 第5章 多项式


### §5.1 基本概念

#### 5.1.1 一元多项式代数

> [!definition]
> 设 $\mathbb{F}$ 是一个数域, $x$ 是未定元, $a_0, a_1, \cdots, a_n \in \mathbb{F}$ $(n \geq 0, a_n 
eq 0)$, 称形式表达式
> $$a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$
> 为数域 $\mathbb{F}$ 上关于未定元 $x$ 的 $n$ 次多项式. 数域 $\mathbb{F}$ 上的一元多项式全体组成的集合记为 $\mathbb{F}[x]$.

**运算及运算法则**

(1) 加法: 设 $f(x), g(x)$ 是 $\mathbb{F}$ 上两个多项式, 适当添上若干个零, 可设
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0,$$
$$g(x) = b_n x^n + b_{n-1} x^{n-1} + \cdots + b_1 x + b_0,$$
定义 $f(x)$ 和 $g(x)$ 的加法如下:
$$f(x) + g(x) = (a_n + b_n) x^n + (a_{n-1} + b_{n-1}) x^{n-1} + \cdots + (a_1 + b_1) x + (a_0 + b_0).$$

(2) 数乘: 设
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0,$$
又 $k$ 是 $\mathbb{F}$ 中的数, 则定义 $k$ 和 $f(x)$ 的数乘为
$$kf(x) = ka_n x^n + ka_{n-1} x^{n-1} + \cdots + ka_1 x + ka_0.$$


(3) 乘法: 设 $f(x), g(x)$ 如 (1), 定义 $f(x)$ 和 $g(x)$ 的乘法如下:
$$f(x)g(x) = c_{2n} x^{2n} + c_{2n-1} x^{2n-1} + \cdots + c_1 x + c_0,$$
其中
$$c_k = a_0 b_k + a_1 b_{k-1} + \cdots + a_k b_0, \quad 0 \leq k \leq 2n.$$

多项式的加法、数乘和乘法适合下列运算法则:
- 加法交换律: $f(x) + g(x) = g(x) + f(x)$;
- 加法结合律: $(f(x) + g(x)) + h(x) = f(x) + (g(x) + h(x))$;
- 乘法交换律: $f(x)g(x) = g(x)f(x)$;
- 乘法结合律: $(f(x)g(x))h(x) = f(x)(g(x)h(x))$;
- 乘法分配律: $f(x)(g(x) + h(x)) = f(x)g(x) + f(x)h(x)$;
- 消去律: 若 $f(x)g(x) = f(x)h(x)$ 且 $f(x) 
eq 0$, 则 $g(x) = h(x)$.

#### 5.1.2 一元多项式函数

> [!definition]
> 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{F}[x]$, 对 $c \in \mathbb{F}$, 定义
> $$f(c) = a_n c^n + \cdots + a_1 c + a_0 \in \mathbb{F},$$
> 称 $f(c)$ 为 $f(x)$ 在 $c$ 处的值. 这样, $f(x)$ 就定义了数域 $\mathbb{F}$ 上的一个函数, 称为多项式函数.

#### 5.1.3 整除

> [!definition]
> 设 $f(x), g(x) \in \mathbb{F}[x]$, 若存在 $h(x) \in \mathbb{F}[x]$, 使得 $f(x) = g(x)h(x)$, 则称 $g(x)$ 整除 $f(x)$, 或称 $g(x)$ 是 $f(x)$ 的因式, 记为 $g(x) \mid f(x)$.

> [!theorem] 带余除法
> 设 $f(x), g(x) \in \mathbb{F}[x]$, $g(x) 
eq 0$, 则必存在唯一的 $q(x), r(x) \in \mathbb{F}[x]$, 使得
> $$f(x) = g(x)q(x) + r(x),$$
> 其中 $\deg r(x) < \deg g(x)$ 或 $r(x) = 0$.

### §5.2 整除和带余除法

本节通过具体例子来阐述整除和带余除法的一些基本技巧.

> [!example]
> **例 5.1** 设 $f(x) = x^4 + 3x^3 + 5x^2 + 7x + 9$, $g(x) = x^2 + x + 1$, 求 $g(x)$ 除 $f(x)$ 的商 $q(x)$ 和余式 $r(x)$.

> [!solution]
> 用长除法或综合除法可得:
> $$q(x) = x^2 + 2x + 2, \quad r(x) = 3x + 7.$$

> [!example]
> **例 5.2** 设 $f(x) = x^n + a^n$ ($n$ 为正整数), $g(x) = x + a$, 求 $g(x)$ 除 $f(x)$ 的余式.

> [!solution]
> 由因式定理或直接计算可得余式为
> $$r = f(-a) = (-a)^n + a^n = egin{cases} 2a^n, & n 	ext{ 为偶数}; \ 0, & n 	ext{ 为奇数}. \end{cases}$$


> [!example]
> **例 5.3** 设 $f(x) = x^n - a^n$, $g(x) = x^d - a^d$, 其中 $a 
eq 0$, 求证: $g(x) \mid f(x)$ 的充要条件是 $d \mid n$.

> [!proof]-
> 充分性显然, 现在来证明必要性. 若 $n = dq + r$, $0 < r < d$, 则
> $$x^n - a^n = x^n - x^r a^{dq} + x^r a^{dq} - a^n = x^r(x^{dq} - a^{dq}) + a^{dq}(x^r - a^r).$$
> 注意到 $x^{dq} - a^{dq}$ 可被 $x^d - a^d$ 整除, 而 $x^r - a^r$ 不能被 $x^d - a^d$ 整除, 故 $x^n - a^n$ 不能被 $x^d - a^d$ 整除. $\square$

> [!example]
> **例 5.4** 设 $f(x) = x^{3m} + x^{3n+1} + x^{3p+2}$, 其中 $m, n, p$ 为自然数, 又 $g(x) = x^2 + x + 1$, 求证: $g(x) \mid f(x)$.

> [!proof]-
> 首先注意这样一个事实: 对任意的自然数 $k$, $x^{3k} - 1$ 含因子 $x^3 - 1$, 因此 $x^{3k} - 1$ 总能被 $x^2 + x + 1$ 整除. 考虑下列等式:
> $$x^{3m} + x^{3n+1} + x^{3p+2} = (x^{3m} - 1) + x(x^{3n} - 1) + x^2(x^{3p} - 1) + (x^2 + x + 1),$$
> 即知结论成立. $\square$

### §5.3 最大公因式与互素多项式

若 $f(x), g(x)$ 的最大公因式是 $d(x)$, 则必存在多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = d(x)$. 但读者需注意, 这不是 $d(x)$ 为 $f(x), g(x)$ 最大公因式的充要条件, 下面的例 5.5 说明了这一点. 另外, $u(x)$ 与 $v(x)$ 也不唯一, 只有在一定的条件下才能保证唯一性, 请参考例 5.6. 例 5.7 及其推论是对两个多项式的结论的推广.

> [!example]
> **例 5.5** 设 $d(x) = f(x)u(x) + g(x)v(x)$, 举例说明 $d(x)$ 不必是 $f(x)$ 和 $g(x)$ 的最大公因式. 若进一步有 $d(x) \mid f(x)$, $d(x) \mid g(x)$, 求证: $d(x)$ 必是 $f(x)$ 和 $g(x)$ 的最大公因式.

> [!proof]-
> 举例非常简单, 请读者自己完成. 如果同时 $d(x) \mid f(x)$, $d(x) \mid g(x)$, 则 $d(x)$ 是 $f(x)$ 和 $g(x)$ 的公因式. 若 $h(x)$ 也是 $f(x), g(x)$ 的公因式, 则由 $h(x) \mid f(x)$, $h(x) \mid g(x)$ 可推出 $h(x) \mid (f(x)u(x) + g(x)v(x)) = d(x)$, 因此 $d(x)$ 是最大公因式. $\square$

> [!example]
> **例 5.6** 设 $f(x), g(x)$ 是次数不小于 1 的互素多项式, 求证: 必唯一地存在两个多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1,$$
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.


> [!proof]-
> 由假设可知, 存在 $\mathbb{F}$ 上的多项式 $h(x), k(x)$, 使得
> $$f(x)h(x) + g(x)k(x) = 1.$$
> 由带余除法可知
> $$h(x) = g(x)q_1(x) + u(x), \quad k(x) = f(x)q_2(x) + v(x),$$
> 其中 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$. 于是
> $$f(x)u(x) + g(x)v(x) + f(x)g(x)(q_1(x) + q_2(x)) = 1.$$
> 因为 $\deg(f(x)u(x) + g(x)v(x)) < \deg f(x) + \deg g(x)$, 所以必有 $q_1(x) + q_2(x) = 0$, 从而
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 再证唯一性. 若还有 $u_1(x), v_1(x)$ 适合条件, 则
> $$f(x)(u(x) - u_1(x)) + g(x)(v(x) - v_1(x)) = 0.$$
> 因为 $f(x)$ 与 $g(x)$ 互素, 由上式可知 $f(x) \mid (v(x) - v_1(x))$. 但 $\deg(v(x) - v_1(x)) < \deg f(x)$, 所以 $v(x) = v_1(x)$, 从而 $u(x) = u_1(x)$. $\square$

> [!example]
> **例 5.7** 设 $d(x)$ 是 $\mathbb{F}[x]$ 中 $m$ ($m \geq 2$) 个非零多项式 $f_1(x), f_2(x), \cdots, f_m(x)$ 的最大公因式, 求证: 必存在 $\mathbb{F}[x]$ 中的多项式 $u_1(x), u_2(x), \cdots, u_m(x)$, 使得
> $$f_1(x)u_1(x) + f_2(x)u_2(x) + \cdots + f_m(x)u_m(x) = d(x).$$

> [!proof]-
> 令 $d_1(x)$ 为 $f_1(x), \cdots, f_{m-1}(x)$ 的最大公因式, 则 $d(x)$ 是 $d_1(x)$ 和 $f_m(x)$ 的最大公因式, 故存在 $v(x), u_m(x)$, 使得
> $$d_1(x)v(x) + f_m(x)u_m(x) = d(x).$$
> 由归纳假设, 存在 $w_1(x), \cdots, w_{m-1}(x)$, 使得
> $$f_1(x)w_1(x) + \cdots + f_{m-1}(x)w_{m-1}(x) = d_1(x).$$
> 令 $u_i(x) = w_i(x)v(x)$ ($1 \leq i \leq m-1$), 即得结论. $\square$

> [!corollary]
> **推论** $m$ ($m \geq 2$) 个多项式 $f_1(x), f_2(x), \cdots, f_m(x)$ 互素的充要条件是存在 $u_1(x), u_2(x), \cdots, u_m(x)$, 使得
> $$f_1(x)u_1(x) + f_2(x)u_2(x) + \cdots + f_m(x)u_m(x) = 1.$$


### §5.4 不可约多项式与因式分解

不可约多项式是多项式理论中的基本概念, 它是整数理论中素数概念的推广, 其基本性质可以参照素数性质得到.

> [!example]
> **例 5.8** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的不可约多项式, $c$ 是 $\mathbb{F}$ 中非零常数, 求证: $f(x)$ 与 $f(x) + c$ 互素的充要条件是 $c \neq 0$.

> [!proof]-
> 若 $c \neq 0$, 设 $d(x)$ 是 $f(x)$ 与 $f(x) + c$ 的公因式, 则 $d(x) \mid c$, 因此 $d(x)$ 是非零常数, 即 $f(x)$ 与 $f(x) + c$ 互素.
> 反之, 若 $c = 0$, 则 $f(x)$ 与 $f(x) + c = f(x)$ 的公因式就是 $f(x)$ 的因式, 由于 $\deg f(x) \geq 1$, 故 $f(x)$ 与 $f(x) + c$ 不互素. $\square$

> [!example]
> **例 5.9** 设 $p(x)$ 是次数大于零的多项式, 如果对任意的多项式 $f(x), g(x)$, 由 $p(x) \mid f(x)g(x)$ 可推出 $p(x) \mid f(x)$ 或 $p(x) \mid g(x)$, 求证: $p(x)$ 是不可约多项式.

> [!proof]-
> 用反证法. 若 $p(x)$ 可约, 则存在 $u(x), v(x)$, 使得 $p(x) = u(x)v(x)$, 且 $\deg u(x) < \deg p(x)$, $\deg v(x) < \deg p(x)$. 取 $f(x) = u(x)$, $g(x) = v(x)$, 则 $p(x) \mid f(x)g(x)$, 但 $p(x) \nmid f(x)$ 且 $p(x) \nmid g(x)$, 矛盾. $\square$

> [!example]
> **例 5.10** 设 $f(x)$ 是次数大于零的多项式, 求证: $f(x)$ 等于某个不可约多项式的幂的充要条件是对任意的多项式 $g(x)$, 或者 $(f(x), g(x)) = 1$, 或者存在正整数 $m$, 使得 $f(x) \mid g(x)^m$.

> [!proof]-
> 必要性: 设 $f(x) = p(x)^k$, 其中 $p(x)$ 不可约. 若 $(f(x), g(x)) \neq 1$, 则 $p(x) \mid g(x)$, 故存在正整数 $m = k$, 使得 $f(x) = p(x)^k \mid g(x)^k$.
> 充分性: 设 $f(x) = p_1(x)^{e_1} p_2(x)^{e_2} \cdots p_r(x)^{e_r}$ 是 $f(x)$ 的标准分解. 若 $r \geq 2$, 取 $g(x) = p_1(x)^{e_1}$, 则 $(f(x), g(x)) = g(x) \neq 1$, 且对任意正整数 $m$, $f(x) \nmid g(x)^m$, 矛盾. 因此 $r = 1$, 即 $f(x) = p_1(x)^{e_1}$. $\square$


> [!example]
> **例 5.11** 设 $f(x)$ 是次数大于零的多项式, 求证: $f(x)$ 是某个不可约多项式的幂的充要条件是对任意的多项式 $g(x), h(x)$, 由 $f(x) \mid g(x)h(x)$ 可推出 $f(x) \mid g(x)$ 或存在正整数 $m$, 使得 $f(x) \mid h(x)^m$.

> [!proof]-
> 必要性: 设 $f(x) = p(x)^k$, $p(x)$ 不可约. 若 $f(x) \nmid g(x)$, 则 $p(x) \nmid g(x)$. 由 $f(x) \mid g(x)h(x)$ 可知 $p(x)^k \mid g(x)h(x)$. 因为 $p(x) \nmid g(x)$, 所以 $p(x)^k \mid h(x)^k$, 即取 $m = k$ 即可.
> 充分性: 设 $f(x) = p_1(x)^{e_1} \cdots p_r(x)^{e_r}$. 若 $r \geq 2$, 取 $g(x) = p_1(x)^{e_1}$, $h(x) = p_2(x)^{e_2} \cdots p_r(x)^{e_r}$, 则 $f(x) \mid g(x)h(x)$, 但 $f(x) \nmid g(x)$ 且对任意 $m$, $f(x) \nmid h(x)^m$ (因为 $p_1(x) \nmid h(x)^m$), 矛盾. $\square$

> [!example]
> **例 5.12** 设 $f(x), g(x)$ 是次数大于零的互素多项式, 求证: 存在唯一的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1,$$
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.

> [!proof]-
> (注: 此例与例 5.6 相同, 证明略.) $\square$

### §5.5 多项式函数与根

> [!definition]
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 若 $f(c) = 0$, 则称 $c$ 为 $f(x)$ 在 $\mathbb{F}$ 中的根或零点.

> [!theorem] 余数定理
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 则 $f(x)$ 除以 $x - c$ 的余式等于 $f(c)$.

> [!theorem] 因式定理
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$, 则 $c$ 是 $f(x)$ 的根的充要条件是 $(x - c) \mid f(x)$.

> [!theorem]
> 设 $f(x) \in \mathbb{F}[x]$, $c \in \mathbb{F}$.
> (1) $c$ 是 $f(x)$ 的根的充要条件是 $(x - c) \mid f(x)$;
> (2) $c$ 是 $f(x)$ 的 $k$ 重根的充要条件是 $(x - c)^k \mid f(x)$ 但 $(x - c)^{k+1} \nmid f(x)$;
> (3) $\mathbb{F}$ 上 $n$ 次多项式在 $\mathbb{F}$ 中至多有 $n$ 个根 (重根按重数计).


> [!example]
> **例 5.13** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是实系数多项式, 求证: 若 $(-1)^n f(x)$ 的所有系数为正, 则 $f(x)$ 没有负实根.

> [!proof]-
> 设 $c < 0$, 则 $c^n$ 的符号为 $(-1)^n$. 由条件, $(-1)^n f(x)$ 的所有系数为正, 故 $(-1)^n f(c) > 0$, 即 $f(c) \neq 0$. 因此 $f(x)$ 没有负实根. $\square$

> [!example]
> **例 5.14** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是整系数多项式, $p$ 是素数. 若 $p \mid a_i$ ($0 \leq i \leq n-1$) 且 $p^2 \nmid a_0$, 求证: $f(x)$ 在有理数域上不可约 (Eisenstein 判别法).

> [!proof]-
> 用反证法. 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数较低的整系数多项式. 设
> $$g(x) = b_m x^m + \cdots + b_0, \quad h(x) = c_k x^k + \cdots + c_0.$$
> 由 $p \mid a_0 = b_0 c_0$ 且 $p^2 \nmid a_0$, 不妨设 $p \mid b_0$ 但 $p \nmid c_0$. 设 $b_0, b_1, \cdots, b_m$ 中第一个不被 $p$ 整除的是 $b_s$. 考虑 $a_s = b_s c_0 + b_{s-1}c_1 + \cdots + b_0 c_s$. 由 $p \mid a_s$ 且 $p \mid b_0, \cdots, b_{s-1}$, 得 $p \mid b_s c_0$, 但 $p \nmid b_s$ 且 $p \nmid c_0$, 矛盾. $\square$

> [!example]
> **例 5.15** 设 $f(x)$ 是整系数多项式, $x = \frac{q}{p}$ 是 $f(x)$ 的有理根, 其中 $p, q$ 为互素的整数. 求证: 对任意整数 $m$, $(pm - q) \mid f(m)$.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0$, 由 $f(\frac{q}{p}) = 0$ 可得
> $$a_n q^n + a_{n-1} q^{n-1} p + \cdots + a_1 q p^{n-1} + a_0 p^n = 0.$$
> 又 $f(m) = a_n m^n + \cdots + a_1 m + a_0$, 经计算可得 $f(m) = f(m) - f(\frac{q}{p})$ 的某种组合, 从而 $(pm - q) \mid f(m)$. $\square$


> [!example]
> **例 5.16** 求证: 有理系数多项式 $f(x) = 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}$ 没有重根.

> [!proof]-
> 只需证 $(f(x), f'(x)) = 1$. 由 $f'(x) = 1 + x + \cdots + \frac{x^{n-1}}{(n-1)!}$, 得 $f(x) - f'(x) = \frac{x^n}{n!}$. 若 $d(x)$ 是 $f(x)$ 与 $f'(x)$ 的公因式, 则 $d(x) \mid x^n$, 故 $d(x) = x^k$. 但 $f(0) = 1 \neq 0$, 所以 $x \nmid f(x)$, 因此 $d(x) = 1$. $\square$

> [!example]
> **例 5.17** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的多项式, 若对 $\mathbb{F}$ 中任意的非零元 $c$, 都有 $f(x) = f(x - c)$, 求证: $f(x)$ 是常数多项式.

> [!proof]-
> 若 $f(x)$ 不是常数, 设 $\deg f = n \geq 1$. 取 $n+1$ 个不同的非零元 $c_1, c_2, \cdots, c_{n+1}$, 则 $f(x) = f(x - c_i)$ 对 $i = 1, 2, \cdots, n+1$ 成立. 这意味着 $f(x)$ 在 $n+1$ 个不同的点 $x - c_i$ 处取相同的值, 与次数为 $n$ 矛盾. $\square$

> [!example]
> **例 5.18** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的 $n$ 次多项式, $a \in \mathbb{F}$, $a \neq 0$. 求证: $f(x)$ 整除 $f(x - a)$ 的充要条件是 $f(x)$ 整除 $f(x) - f(x - a)$. 若 $f(x)$ 的根全在 $\mathbb{F}$ 中, 进一步讨论.

> [!proof]-
> 若 $f(x) \mid f(x - a)$, 设 $f(x - a) = f(x)q(x)$. 比较次数得 $\deg q = 0$, 故 $q(x) = c$ 为常数. 比较首项系数知 $c = 1$, 即 $f(x - a) = f(x)$. 由例 5.17, 若 $f(x)$ 不是常数则矛盾. 故 $f(x)$ 必须是常数, 或 $f(x) \mid (f(x) - f(x - a)) = 0$ 自然成立.
> 若 $f(x)$ 的根全在 $\mathbb{F}$ 中, 设 $f(x) = a_n(x - x_1)\cdots(x - x_n)$. 由 $f(x) = f(x - a)$ 知 $\{x_1, \cdots, x_n\} = \{x_1 - a, \cdots, x_n - a\}$ 作为集合. 反复应用得 $x_i = x_i - ka$ 对某个 $k > 0$, 故 $a = 0$, 矛盾. 因此 $f(x)$ 必为常数. $\square$


> [!example]
> **例 5.24** 设 $\deg f(x) = n \geq 1$, 若 $f'(x) \mid f(x)$, 证明: $f(x)$ 有 $n$ 重根.

> [!proof]-
> **证法 1** 设 $f(x) = \frac{1}{n}(x - a)f'(x)$, 现证明 $a$ 是 $f(x)$ 的 $n$ 重根. 假设 $a$ 是 $f(x)$ 的 $k$ 重根, $f(x) = (x - a)^k g(x)$, $k < n$ 且 $g(x)$ 不含因式 $x - a$, 则
> $$f'(x) = k(x - a)^{k-1}g(x) + (x - a)^k g'(x) = n(x - a)^{k-1}g(x).$$
> 于是 $g(x) \mid (x - a)g'(x)$, 而 $g(x)$ 与 $x - a$ 互素, 故将有 $g(x) \mid g'(x)$. 引出矛盾.
>
> **证法 2** 设 $f(x) = \frac{1}{n}(x - a)f'(x)$, 则
> $$\frac{f(x)}{(f(x), f'(x))} = b(x - a), \quad b \neq 0.$$
> 由 §5.1.4 定理 5 可知, $x - a$ 是 $f(x)$ 仅有的不可约因式, 因此 $f(x) = b(x - a)^n$. $\square$

一个一元 $n$ 次多项式在所在的数域内最多只有 $n$ 个根, 利用这个命题可以证明一些有趣的结论, 下面是 3 个例子.

> [!example]
> **例 5.25** 设 $f(x)$ 是数域 $\mathbb{F}$ 上的多项式, 若对 $\mathbb{F}$ 中某个非零常数 $a$, 有 $f(x + a) = f(x)$, 求证: $f(x)$ 必是常数多项式.

> [!proof]-
> 假设 $f(x)$ 不是常数多项式, 则 $f(x) - f(a)$ 也不是常数多项式, 但由 $f(x + a) = f(x)$ 可知, $ka$ ($k \in \mathbb{Z}$) 是 $f(x) - f(a)$ 的无穷多个根, 矛盾. $\square$

> [!example]
> **例 5.26** 设 $f(x)$ 是非常数多项式且 $f(x)$ 可以整除 $f(x^m)$ ($m > 1$), 求证: $f(x)$ 的根只能是 $0$ 或 $1$ 的某个方根.

> [!proof]-
> 将 $f(x)$ 看成是复数域上的多项式, 则 $f(x^m) = f(x)g(x)$. 假设 $c$ 是 $f(x)$ 的一个复根, 即 $f(c) = 0$, 则 $f(c^m) = 0$, 即 $c^m$ 也是 $f(x)$ 的根. 由此可知 $c^{m^2}, c^{m^3}, \cdots$ 也都是 $f(x)$ 的根. 由于 $f(x)$ 只有有限个不同的复根, 故存在正整数 $k, t$, 使得 $c^{m^k} = c^{m^t}$. 因此若 $c \neq 0$, 则必存在某个正整数 $n$, 使得 $c^n = 1$. $\square$


> [!example]
> **例 5.27** 求证: $f(x) = \sin x$ 在实数域内不能表示为 $x$ 的多项式.

> [!proof]-
> 注意到 $f(x) = \sin x$ 在实数域内有无穷多个根, 而任一非零多项式只能有有限个根, 因此 $f(x) = \sin x$ 在实数域内不能表示为 $x$ 的多项式. $\square$

利用余数定理可以实现求根与判断整除性之间的相互转换, 它常常使问题的解决变得简单. 下面是 3 个典型的例子.

> [!example]
> **例 5.28** 设 $n$ 是奇数, 求证: $(x + y)(y + z)(x + z)$ 可整除 $(x + y + z)^n - x^n - y^n - z^n$.

> [!proof]-
> 将多项式 $(x + y + z)^n - x^n - y^n - z^n$ 看成是未定元 $x$ 的多项式. 当 $x = -y$ 时, $(x + y + z)^n - x^n - y^n - z^n = 0$, 因此 $x + y$ 是 $(x + y + z)^n - x^n - y^n - z^n$ 的因式. 同理 $x + z$, $y + z$ 也是因式. 又这 3 个因式互素, 故 $(x + y)(y + z)(x + z)$ 可整除 $(x + y + z)^n - x^n - y^n - z^n$. $\square$

> [!example]
> **例 5.29** 设 $f(x)$ 是一个 $n$ 次多项式, 若当 $k = 0, 1, \cdots, n$ 时有 $f(k) = \frac{k}{k + 1}$, 求 $f(n + 1)$.

> [!solution]
> 令 $g(x) = (x + 1)f(x) - x$, 则 $0, 1, \cdots, n$ 是 $g(x)$ 的根, 因此
> $$g(x) = cx(x - 1)(x - 2)\cdots(x - n),$$
> 即
> $$(x + 1)f(x) - x = cx(x - 1)(x - 2)\cdots(x - n),$$
> 其中 $c$ 是一个常数. 令 $x = -1$, 可求出 $c = \frac{(-1)^{n+1}}{(n + 1)!}$, 从而
> $$f(x) = \frac{1}{x + 1}\left(\frac{(-1)^{n+1}x(x - 1)\cdots(x - n)}{(n + 1)!} + x\right),$$
> 故
> $$f(n + 1) = \frac{1}{n + 2}\left((-1)^{n+1} + n + 1\right).$$
> 当 $n$ 是奇数时, $f(n + 1) = 1$; 当 $n$ 是偶数时, $f(n + 1) = \frac{n}{n + 2}$. $\square$

> [!example]
> **例 5.30** 设 $(x^4 + x^3 + x^2 + x + 1) \mid (x^3 f_1(x^5) + x^2 f_2(x^5) + x f_3(x^5) + f_4(x^5))$, 这里 $f_i(x)$ ($1 \leq i \leq 4$) 都是实系数多项式, 求证: $f_i(1) = 0$ ($1 \leq i \leq 4$).

> [!proof]-
> 设 $\varepsilon_i$ ($1 \leq i \leq 4$) 是 1 的五次虚根, 由条件可得
> $$\varepsilon_i^3 f_1(1) + \varepsilon_i^2 f_2(1) + \varepsilon_i f_3(1) + f_4(1) = 0 \quad (1 \leq i \leq 4).$$
> 这是一个由 4 个未知数、4 个方程式组成的线性方程组 (将 $f_i(1)$ 看成是未知数), 其系数行列式是一个 Vandermonde 行列式, 显然其值不等于零. 因此 $f_i(1) = 0$. $\square$


### §5.6 复系数多项式

#### 5.6.1 复系数多项式的基本定理

利用复数域的特殊性质, 可以得到整系数多项式不可约性判定的一个经典方法, 即 Eisenstein 判别法. 对实数域上的多项式, 也可以利用复数域的性质得到一些关于实根的结果, 如下面的例 5.41 和例 5.43.

> [!theorem] 代数基本定理
> 每个次数 $\geq 1$ 的复系数多项式在复数域中至少有一个根.

> [!corollary]
> 任一 $n$ ($n \geq 1$) 次复系数多项式恰有 $n$ 个复根 (重根按重数计算).

> [!theorem]
> 设 $f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$, $a_i \in \mathbb{F}$, $a_n \neq 0$, $x_1, x_2, \cdots, x_n$ 是 $f(x)$ 的 $n$ 个根, 则
> $$\sigma_1 = \sum_{i=1}^{n} x_i = -\frac{a_{n-1}}{a_n},$$
> $$\sigma_2 = \sum_{1 \leq i < j \leq n} x_i x_j = \frac{a_{n-2}}{a_n},$$
> $$\vdots$$
> $$\sigma_n = x_1 x_2 \cdots x_n = (-1)^n \frac{a_0}{a_n}.$$
> 这就是著名的 Vieta 定理.

> [!example]
> **例 5.31** 设 $f(x) = a_n x^n + \cdots + a_1 x + a_0$ 是整系数多项式, 若 $p$ 是素数, $p \nmid a_n$, $p \mid a_i$ ($0 \leq i \leq n-1$), $p^2 \nmid a_0$, 则 $f(x)$ 在有理数域上不可约 (Eisenstein 判别法).

> [!proof]-
> 反设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数较低的整系数多项式. 设 $g(x) = b_m x^m + \cdots + b_0$, $h(x) = c_k x^k + \cdots + c_0$. 由 $p \mid a_0 = b_0 c_0$ 且 $p^2 \nmid a_0$, 不妨设 $p \mid b_0$ 且 $p \nmid c_0$. 由 $p \nmid a_n = b_m c_k$ 知 $p \nmid b_m$. 设 $b_0, b_1, \cdots, b_m$ 中第一个不被 $p$ 整除的是 $b_s$ ($s > 0$). 比较 $x^s$ 的系数: $a_s = b_s c_0 + b_{s-1}c_1 + \cdots + b_0 c_s$. 由 $p \mid a_s$ 且 $p \mid b_0, \cdots, b_{s-1}$, 得 $p \mid b_s c_0$, 但 $p \nmid b_s$ 且 $p \nmid c_0$, 矛盾. $\square$


> [!example]
> **例 5.32** 设 $a_1, a_2, \cdots, a_n$ 是互不相同的整数, 求证: $f(x) = (x - a_1)(x - a_2)\cdots(x - a_n) - 1$ 在 $\mathbb{Q}$ 上不可约.

> [!proof]-
> 用反证法. 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 是次数大于零的整系数多项式. 则 $g(a_i)h(a_i) = -1$, 故 $g(a_i) = 1, h(a_i) = -1$ 或 $g(a_i) = -1, h(a_i) = 1$. 无论哪种情况都有 $g(a_i) + h(a_i) = 0$ ($1 \leq i \leq n$). 由于 $\deg(g + h) < n$ 但 $g + h$ 有 $n$ 个不同的根, 故 $g(x) + h(x) = 0$, 即 $h(x) = -g(x)$, 从而 $f(x) = -g(x)^2$. 但 $f(x)$ 的首项系数为 1, 而 $-g(x)^2$ 的首项系数为负数, 矛盾. $\square$

> [!example]
> **例 5.33** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是整系数多项式, $x_0$ 是 $f(x)$ 的整数根, 求证: $x_0 \mid a_0$.

> [!proof]-
> 由 $f(x_0) = 0$, 得 $x_0^n + a_{n-1}x_0^{n-1} + \cdots + a_1 x_0 = -a_0$, 即 $x_0(x_0^{n-1} + a_{n-1}x_0^{n-2} + \cdots + a_1) = -a_0$. 因此 $x_0 \mid a_0$. $\square$

> [!example]
> **例 5.34** 设 $f(x)$ 是 $n$ 次多项式, $a$ 是一个常数, 求证: $f(x + a)$ 也是 $n$ 次多项式, 且首项系数与 $f(x)$ 相同.

> [!proof]-
> 设 $f(x) = b_n x^n + \cdots + b_0$, $b_n \neq 0$. 则 $f(x + a) = b_n(x + a)^n + \cdots = b_n x^n + \cdots$. 因此 $f(x + a)$ 的首项为 $b_n x^n$, 次数为 $n$. $\square$

> [!example]
> **例 5.35** 设 $f(x)$ 是整系数多项式, 若 $f(0)$ 和 $f(1)$ 都是奇数, 求证: $f(x)$ 没有整数根.

> [!proof]-
> 用反证法. 设 $c$ 是 $f(x)$ 的整数根, 则 $f(x) = (x - c)g(x)$, $g(x)$ 是整系数多项式. 于是 $f(0) = -cg(0)$, $f(1) = (1 - c)g(1)$. 若 $c$ 是偶数, 则 $f(0)$ 是偶数, 矛盾; 若 $c$ 是奇数, 则 $1 - c$ 是偶数, $f(1)$ 是偶数, 矛盾. $\square$

> [!example]
> **例 5.36** 设 $f(x)$ 是整系数多项式, 若 $f(2)$ 和 $f(3)$ 都能被 6 整除, 问 $f(5)$ 是否一定能被 6 整除? 证明你的结论.

> [!solution]
> 结论是不一定. 反例: 取 $f(x) = x(x - 1)(x - 2)(x - 3)$, 则 $f(2) = f(3) = 0$ 被 6 整除, 但 $f(5) = 5 \cdot 4 \cdot 3 \cdot 2 = 120$ 被 6 整除. 但如果 $f(x) = 2x$, 则 $f(2) = 4$ 不被 6 整除, 不满足条件. 更合适的反例: $f(x) = (x - 2)(x - 3) + 6$, 则 $f(2) = 6$, $f(3) = 6$ 都被 6 整除, 但 $f(5) = 6 + 6 = 12$ 被 6 整除. 实际上结论是肯定的: 考虑 $f(x) \mod 6$ 即可. $\square$


> [!example]
> **例 5.37** 设 $f(x)$ 是次数大于零的首一整系数多项式, 若 $f(0), f(1)$ 都是奇数, 求证: $f(x)$ 没有有理根.

> [!proof]-
> 若 $f(x)$ 有有理根 $\frac{q}{p}$ ($p, q$ 互素), 由 Gauss 引理, $\frac{q}{p}$ 实际上是整数根, 由例 5.35 知这是不可能的. $\square$

> [!example]
> **例 5.38** 设 $f(x)$ 是整系数多项式, $a, b, c$ 是 3 个不同的整数, 求证: $f(a) = b$, $f(b) = c$, $f(c) = a$ 不可能同时成立.

> [!proof]-
> 若 $f(a) = b$, $f(b) = c$, $f(c) = a$, 考虑 $g(x) = f(x) - b$, 则 $g(a) = 0$, 故 $a - b \mid g(b) = c - b$. 同理 $b - c \mid a - c$, $c - a \mid b - a$. 设 $|a - b| \leq |b - c| \leq |c - a|$, 由 $a - b \mid c - b$ 和 $c - a \mid b - a$, 可以推出矛盾. $\square$

> [!example]
> **例 5.39** 求所有非常数实系数多项式 $f(x)$, 满足 $f(f(x)) = f(x)^k$ ($k$ 是正整数).

> [!solution]
> 设 $f(x) = a_n x^n + \cdots + a_0$, $a_n \neq 0$, $n \geq 1$. 比较 $f(f(x))$ 与 $f(x)^k$ 的次数: $n^2 = nk$, 故 $n = k$. 设 $f(x) = a(x - c_1)\cdots(x - c_n)$, 由 $f(f(x)) = f(x)^n$ 知 $f(x)^n - f(f(x)) = 0$. 若 $c$ 是 $f(x)$ 的根, 则 $f(c) = 0$, 由 $f(f(c)) = f(c)^n = 0$ 知 $f(0) = 0$, 故 $c = 0$ 是一个根. 进一步分析可得 $f(x) = x^n$. $\square$

### §5.7 实系数多项式

#### 5.7.1 实系数多项式的基本性质

实系数多项式的根具有一些特殊性质, 这些性质与复数域的性质密切相关.

> [!theorem]
> 实系数多项式的非实复根成对出现, 即若 $\alpha$ 是实系数多项式 $f(x)$ 的根, 则 $\bar{\alpha}$ 也是 $f(x)$ 的根, 且重数相同.

> [!corollary]
> 实数域上次数为奇数的多项式必有实根.

> [!corollary]
> 实数域上的不可约多项式只能是一次多项式或判别式小于零的二次多项式.


> [!example]
> **例 5.40** 设 $f(x)$ 是实系数多项式, 求证:
> (1) 若 $f(x)$ 的所有系数同号, 则 $f(x)$ 没有正实根;
> (2) 若 $f(x)$ 的系数正负相间, 则 $f(x)$ 没有负实根.

> [!proof]-
> (1) 设 $f(x) = a_n x^n + \cdots + a_0$, 所有 $a_i > 0$ (同理可处理所有 $a_i < 0$ 的情形). 对任意 $c > 0$, $f(c) = a_n c^n + \cdots + a_0 > 0$, 故 $f(x)$ 没有正实根.
> (2) 设 $f(x) = a_n x^n - a_{n-1}x^{n-1} + a_{n-2}x^{n-2} - \cdots$ ($a_i > 0$). 对任意 $c < 0$, 当 $n$ 为偶数时各项均为正, 当 $n$ 为奇数时各项均为负, 总之 $f(c) \neq 0$. $\square$

> [!example]
> **例 5.41** 设 $f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ 是实系数多项式, 求证:
> (1) 若 $a_i$ ($0 \leq i \leq n$) 全是正数或全是负数, 则 $f(x)$ 没有非负实根;
> (2) 若 $(-1)^i a_i$ ($0 \leq i \leq n$) 全是正数或全是负数, 则 $f(x)$ 没有非正实根;
> (3) 若 $a_n > 0$ 且 $(-1)^{n-i} a_i > 0$ ($0 \leq i \leq n-1$), 则 $f(x)$ 没有非正实根; 若 $a_n > 0$ 且 $(-1)^{n-i} a_i \geq 0$ ($0 \leq i \leq n-1$), 则 $f(x)$ 没有负实根.

> [!proof]-
> (1) 若 $a_i$ 全是正数且 $f(x)$ 有非负实根 $c \geq 0$, 代入后可得 $f(c) = a_n c^n + a_{n-1} c^{n-1} + \cdots + a_1 c + a_0 \geq a_0 > 0$, 这和 $c$ 是根矛盾, 因此 $f(x)$ 没有非负实根. 同理可证 $a_i$ 全是负数的情形.
> (2) 和 (3) 同理可证. $\square$

> [!example]
> **例 5.42** 令 $\Delta = \frac{q^2}{4} + \frac{p^3}{27}$ 是实系数三次方程 $x^3 + px + q = 0$ 的判别式, 求证:
> (1) 若 $\Delta > 0$, 则方程有 1 个实根和 2 个共轭复根;
> (2) 若 $\Delta = 0$, 则方程有 3 个实根, 其中 2 个根相同;
> (3) 若 $\Delta < 0$, 则方程有 3 个互不相等的实根.

> [!proof]-
> 注意到本题中的 $\Delta$ 和三次方程用结式定义的判别式相差一个负数 (参考例 5.65), 故由例 5.70 即得本题结论. 本题也可用 Cardano 公式直接证明. $\square$


> [!example]
> **例 5.43** 求证: 实系数方程 $x^3 + px^2 + qx + r = 0$ 的根的实部全是负数的充要条件是
> $$p > 0, \quad r > 0, \quad pq > r.$$

> [!proof]-
> 先证必要性. 设原方程的 3 个根为 $x_1, x_2, x_3$, 其中 $x_1$ 是实数根, $x_1 < 0$. 另假设 $x_2 = a + bi$, $x_3 = a - bi$, $a < 0$, 则
> $$p = -(x_1 + x_2 + x_3) = -(x_1 + 2a) > 0, \quad r = -x_1 x_2 x_3 = -x_1(a^2 + b^2) > 0.$$
> 又
> $$\begin{aligned} pq - r &= -(x_1 + 2a)(x_1 x_2 + x_1 x_3 + x_2 x_3) + x_1(a^2 + b^2) \\ &= -(x_1 + 2a)(2x_1 a + a^2 + b^2) + x_1(a^2 + b^2) \\ &= -2a((x_1 + a)^2 + b^2) > 0. \end{aligned}$$
> 又假设 $x_1, x_2, x_3$ 全是负实数, 则显然 $p > 0, q > 0, r > 0$, 而
> $$\begin{aligned} pq - r &= -(x_1 + x_2 + x_3)(x_1 x_2 + x_1 x_3 + x_2 x_3) + x_1 x_2 x_3 \\ &= -(x_1^2 + q)(x_2 + x_3) > 0. \end{aligned}$$
> 再证充分性. 由 $p > 0, r > 0, pq - r > 0$ 可知 $q > 0$, 若方程的根是实数, 则此根必是负数. 现假设方程有根 $x_1 < 0$, $x_2 = a + bi$, $x_3 = a - bi$, 因为 $pq - r = -2a((x_1 + a)^2 + b^2) > 0$, 故得 $a < 0$, 结论得证. $\square$

> [!example]
> **例 5.44** 设 $\varepsilon = \cos\frac{2\pi}{n} + i\sin\frac{2\pi}{n}$ 是 1 的 $n$ 次根, 求证: $\varepsilon^{mi}$ ($1 \leq i \leq n$) 是 $x^n - 1 = 0$ 的全部根的充要条件是 $(m, n) = 1$.

> [!proof]-
> 若 $(m, n) = 1$, 只要证明 $\varepsilon^{mi}$ ($1 \leq i \leq n$) 互不相同即可. 若不然, 有 $\varepsilon^{ms} = \varepsilon^{mt}$ ($1 \leq s < t \leq n$), 便有 $\varepsilon^{m(t-s)} = 1$, $n \mid m(t-s)$. 因为 $n, m$ 互素, 故 $n \mid (t-s)$, 而 $0 < t-s < n$, 矛盾.
> 反之, 若 $(m, n) = d > 1$, 则 $\varepsilon^{m \cdot \frac{n}{d}} = \varepsilon^{n \cdot \frac{m}{d}} = 1$, 从而 $\varepsilon^{mi}$ ($1 \leq i \leq n$) 不可能是 $x^n - 1 = 0$ 的全部根. $\square$

> [!example]
> **例 5.45** 设 $f(x)$ 是实系数首一多项式且无实数根, 求证: $f(x)$ 可以表示为两个实系数多项式的平方和.

> [!proof]-
> 因为实系数多项式的虚根成对出现, 故 $f(x)$ 是偶数次多项式, 不妨设它的根为 $x_1, x_2, \cdots, x_n$; $\bar{x}_1, \bar{x}_2, \cdots, \bar{x}_n$. 令 $u(x) = (x - x_1)(x - x_2)\cdots(x - x_n)$, $v(x) = (x - \bar{x}_1)(x - \bar{x}_2)\cdots(x - \bar{x}_n)$, 则 $v(x) = \overline{u(x)}$, $f(x) = u(x)v(x)$. 又将 $u(x), v(x)$ 的实部和虚部分开, 可设 $u(x) = g(x) + ih(x)$, $v(x) = g(x) - ih(x)$, 即有 $f(x) = g(x)^2 + h(x)^2$. $\square$


> [!example]
> **例 5.46** 设 $f(x)$ 是次数大于零的实系数多项式, 求证: $f(x)$ 的根全为实数的充要条件是 $f(x)^2$ 不能表示为两个次数不同的实系数多项式的平方和.

> [!proof]-
> 必要性: 若 $f(x)$ 的根全为实数, 设 $f(x) = a_n(x - c_1)\cdots(x - c_n)$. 若 $f(x)^2 = g(x)^2 + h(x)^2$, 则对每个 $c_i$, $g(c_i)^2 + h(c_i)^2 = 0$, 故 $g(c_i) = h(c_i) = 0$. 因此 $f(x) \mid g(x)$ 且 $f(x) \mid h(x)$, 设 $g(x) = f(x)p(x)$, $h(x) = f(x)q(x)$, 则 $1 = p(x)^2 + q(x)^2$. 这要求 $p(x), q(x)$ 都是常数, 故 $\deg g = \deg h = \deg f$.
> 充分性: 若 $f(x)$ 有非实根 $\alpha$, 则 $\bar{\alpha}$ 也是根. 设 $f(x) = (x^2 - 2\operatorname{Re}\alpha \cdot x + |\alpha|^2)g(x)$, 则 $f(x)^2 = ((x - \alpha)(x - \bar{\alpha})g(x))^2 + (0)^2$, 但也可以写成 $f(x)^2 = (\operatorname{Re}f(x))^2 + (\operatorname{Im}f(x))^2$ 的形式, 其中 $\operatorname{Re}f(x)$ 和 $\operatorname{Im}f(x)$ 的次数不同, 矛盾. $\square$

### §5.8 有理系数多项式

利用整数、有理数以及实数的性质来讨论有理系数多项式的性质是一种常用的方法, 在下面的几个例子中读者将体会到这一点.

> [!example]
> **例 5.47** 设 $f(x)$ 是实系数多项式, 若对任意的有理数 $c$, $f(c)$ 总是有理数, 求证: $f(x)$ 是有理系数多项式.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_0$, 取 $n+1$ 个不同的有理数 $c_0, c_1, \cdots, c_n$, 则 $f(c_i) \in \mathbb{Q}$. 由 Lagrange 插值, $f(x)$ 可以表示为有理系数的线性组合, 故 $a_i \in \mathbb{Q}$. $\square$

> [!example]
> **例 5.48** 设 $f(x)$ 是有理系数多项式, $a, b, c$ 是有理数, 但 $\sqrt{c}$ 是无理数. 求证: 若 $a + b\sqrt{c}$ 是 $f(x)$ 的根, 则 $a - b\sqrt{c}$ 也是 $f(x)$ 的根.

> [!proof]-
> 设 $f(x) = a_n x^n + \cdots + a_0$, 则 $f(a + b\sqrt{c}) = A + B\sqrt{c} = 0$, 其中 $A, B$ 是有理数. 因为 $\sqrt{c}$ 是无理数, 故 $A = B = 0$. 因此 $f(a - b\sqrt{c}) = A - B\sqrt{c} = 0$. $\square$


> [!example]
> **例 5.49** 设 $f(x)$ 是有理系数多项式, $a, b, c, d$ 是有理数, 但 $\sqrt{c}, \sqrt{d}, \sqrt{cd}$ 都是无理数. 求证: 若 $a\sqrt{c} + b\sqrt{d}$ 是 $f(x)$ 的根, 则下列数也是 $f(x)$ 的根:
> $$a\sqrt{c} - b\sqrt{d}, \quad -a\sqrt{c} + b\sqrt{d}, \quad -a\sqrt{c} - b\sqrt{d}.$$

> [!proof]-
> 令 $g(x) = (x - (a\sqrt{c} + b\sqrt{d}))(x - (a\sqrt{c} - b\sqrt{d}))(x - (-a\sqrt{c} + b\sqrt{d}))(x - (-a\sqrt{c} - b\sqrt{d}))$, 则经计算可得
> $$g(x) = x^4 - 2(a^2 c + b^2 d)x^2 + (a^2 c - b^2 d)^2.$$
> 注意到 $g(x)$ 是一个有理系数首一多项式, 只要证明它不可约, 便可由例 5.48 得到 $g(x)$ 是 $a\sqrt{c} + b\sqrt{d}$ 的极小多项式, 从而 $g(x) \mid f(x)$, 于是结论成立. $\square$

> [!example]
> **例 5.50** 求以 $\sqrt{2} + \sqrt[3]{3}$ 为根的次数最小的首一有理系数多项式.

> [!solution]
> 本题即求 $\sqrt{2} + \sqrt[3]{3}$ 的极小多项式. 令 $x - \sqrt{2} = \sqrt[3]{3}$, 两边立方得到 $(x - \sqrt{2})^3 = 3$. 整理可得 $x^3 + 6x - 3 = (3x^2 + 2)\sqrt{2}$, 再两边平方可得, $\sqrt{2} + \sqrt[3]{3}$ 适合下列多项式:
> $$f(x) = x^6 - 6x^4 - 6x^3 + 12x^2 - 36x + 1.$$
> 由 $f(x)$ 的构造过程, 不难看出 $f(x)$ 的 6 个根分别为 $\pm\sqrt{2} + \sqrt[3]{3}$, $\pm\sqrt{2} + \sqrt[3]{3}\omega$, $\pm\sqrt{2} + \sqrt[3]{3}\omega^2$, 其中 $\omega = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$. $\square$

> [!example]
> **例 5.51** 求证: 有理系数多项式 $x^4 + px^2 + q$ 在有理数域上可约的充要条件是或者 $p^2 - 4q = k^2$, 其中 $k$ 是一个有理数; 或者 $q$ 是某个有理数的平方, 且 $\pm 2\sqrt{q} - p$ 也是有理数的平方.

> [!proof]-
> 必要性: 若多项式 $x^4 + px^2 + q$ 在有理数域上可约, 考虑下列两种情况:
> (1) $x^4 + px^2 + q$ 有有理数根 $t$, 这时 $t^2$ 是 $x^2 + px + q$ 的有理根, 因此其判别式 $p^2 - 4q$ 必是一个有理数的完全平方.
> (2) $x^4 + px^2 + q$ 在有理数域上可分解为两个二次多项式的积. 设 $x^4 + px^2 + q = (x^2 + ax + b)(x^2 + cx + d)$, 展开后比较系数可得 $a + c = 0$, $ad + bc = 0$. 若 $a = 0$, 则 $c = 0$, 这时将有 $p = b + d$, $q = bd$, 因此 $p^2 - 4q = (b - d)^2$. 若 $a \neq 0$, 则 $b = d$, 比较系数后可知 $p = 2b - a^2$, $q = b^2$, 因此 $\pm 2\sqrt{q} - p = a^2$.
> 充分性同理可证. $\square$


> [!example]
> **例 5.52** 设 $p_1, \cdots, p_m$ 是 $m$ 个互不相同的素数, 求证: 对任意的 $n \geq 1$, 下列多项式在有理数域上不可约:
> $$f(x) = x^n - p_1 p_2 \cdots p_m.$$

> [!proof]-
> 用 Eisenstein 判别法即可证明, 取素数 $p_1$, 则 $p_1 \nmid 1$, $p_1 \mid p_1 p_2 \cdots p_m$, $p_1^2 \nmid p_1 p_2 \cdots p_m$. $\square$

> [!example]
> **例 5.53** 证明: $x^8 + 1$ 在有理数域上不可约.

> [!proof]-
> 作代换 $x = y + 1$, 得
> $$x^8 + 1 = (y + 1)^8 + 1 = y^8 + 8y^7 + 28y^6 + 56y^5 + 70y^4 + 56y^3 + 28y^2 + 8y + 2.$$
> 显然 2 可整除除第一项外的所有系数, 但 4 不能整除常数项. 用 Eisenstein 判别法可知 $(y + 1)^8 + 1$ 不可约, 故 $x^8 + 1$ 也不可约. $\square$

> [!example]
> **例 5.54** 设 $f(x)$ 是有理系数多项式, 已知 $\sqrt[3]{2}$ 是 $f(x)$ 的根, 证明: $\sqrt[3]{2}\varepsilon, \sqrt[3]{2}\varepsilon^2$ 也是 $f(x)$ 的根, 其中 $\varepsilon = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}$.

> [!proof]-
> 显然 $\sqrt[3]{2}$ 适合多项式 $x^3 - 2$, 由 Eisenstein 判别法可知, $x^3 - 2$ 在有理数域上不可约, 因此它是 $\sqrt[3]{2}$ 的极小多项式. 最后由极小多项式的基本性质可得 $(x^3 - 2) \mid f(x)$, 从而结论得证. $\square$

> [!example]
> **例 5.55** 设 $f(x)$ 是次数大于 1 的奇数次有理系数不可约多项式, 求证: 若 $x_1, x_2$ 是 $f(x)$ 在复数域内两个不同的根, 则 $x_1 + x_2$ 必不是有理数.

> [!proof]-
> 不妨设 $f(x)$ 为首一多项式, 我们用反证法来证明结论. 设 $x_1 + x_2 = r$ 为有理数, 则有理系数多项式 $f(x)$ 与 $f(r - x)$ 有公共根 $x_1$. 因为 $f(x)$ 在有理数域上不可约, 故 $f(x)$ 是 $x_1$ 的极小多项式, 从而由极小多项式的基本性质可得 $f(x) \mid f(r - x)$. 注意到 $f(x)$ 与 $f(r - x)$ 次数相同, 首项系数相反, 从而有 $f(r - x) = -f(x)$. 令 $x = \frac{r}{2}$, 则可得 $f(\frac{r}{2}) = 0$, 即 $\frac{r}{2}$ 是 $f(x)$ 的一个有理根, 这与 $f(x)$ 在有理数域上不可约相矛盾. $\square$


> [!example]
> **例 5.56** 设 $f(x) = (x - a_1)(x - a_2)\cdots(x - a_n) - 1$, 其中 $a_1, a_2, \cdots, a_n$ 是 $n$ 个不同的整数, 求证: $f(x)$ 在有理数域上不可约.

> [!proof]-
> 只要证明 $f(x)$ 在整数环上不可约即可. 用反证法, 设 $f(x) = g(x)h(x)$, 其中 $g(x), h(x)$ 都是次数小于 $n$ 的首一整系数多项式. 注意到 $g(a_i)h(a_i) = -1$, 因为 $g(x), h(x)$ 是整系数多项式, 故 $g(a_i) = 1, h(a_i) = -1$ 或 $g(a_i) = -1, h(a_i) = 1$. 无论是哪种情况, 都有 $g(a_i) + h(a_i) = 0$, $1 \leq i \leq n$, 即次数小于 $n$ 的多项式 $g(x) + h(x)$ 有 $n$ 个不同的根, 故 $g(x) + h(x) = 0$. 因此 $f(x) = -g(x)^2$, 但 $f(x)$ 是首一多项式, 而 $-g(x)^2$ 的首项系数为 $-1$, 矛盾. $\square$

> [!example]
> **例 5.57** 设 $f(x) = (x - a_1)^2(x - a_2)^2\cdots(x - a_n)^2 + 1$, 其中 $a_1, a_2, \cdots, a_n$ 是 $n$ 个不同的整数, 求证: $f(x)$ 在有理数域上不可约.

> [!proof]-
> 只要证明 $f(x)$ 在整数环上不可约即可. 用反证法, 设 $f(x) = u(x)v(x)$, 其中 $u(x), v(x)$ 都是次数小于 $2n$ 的首一整系数多项式. 注意到 $f(x)$ 没有实根, 故 $u(x), v(x)$ 也都没有实根, 从而由实系数多项式虚根成对可知, $u(x), v(x)$ 作为实数域上的函数都恒大于零. 由于 $f(x)$ 是 $2n$ 次多项式, 故 $u(x)$ 和 $v(x)$ 的次数至少有一个不超过 $n$, 不妨设 $u(x)$ 的次数不超过 $n$. 若 $u(x)$ 的次数小于 $n$, 则由 $f(a_i) = 1$ 可得 $u(a_i)v(a_i) = 1$, 因此 $u(a_i) = 1$. 考虑非零多项式 $u(x) - 1$, 由上面的分析可知它有 $n$ 个不同的根 $a_1, a_2, \cdots, a_n$, 这与它的次数小于 $n$ 矛盾. 因此 $u(x)$ 只能是 $n$ 次首一多项式, 于是 $v(x)$ 也是 $n$ 次首一多项式. 另一方面, 由于 $u(a_i)v(a_i) = 1$, 故 $u(a_i) = v(a_i) = 1$ ($1 \leq i \leq n$). 注意到 $u(x) - v(x)$ 的次数小于 $n$, 并且它有 $n$ 个不同的根 $a_1, a_2, \cdots, a_n$, 因此只能是 $u(x) = v(x)$, $f(x) = u(x)^2$. 令 $h(x) = (x - a_1)(x - a_2)\cdots(x - a_n)$, 则 $u(x)^2 = h(x)^2 + 1$, 即 $(u(x) + h(x))(u(x) - h(x)) = 1$. 因为 $u(x), h(x)$ 都是整系数多项式, 故或者 $u(x) + h(x) = 1$, $u(x) - h(x) = 1$; 或者 $u(x) + h(x) = -1$, $u(x) - h(x) = -1$, 于是 $h(x) = 0$, 矛盾. 因此结论得证. $\square$


### §5.9 多元多项式

数域 $\mathbb{K}$ 上的多元多项式有 3 个重要的性质. 首先是整性, 即两个非零多元多项式的乘积仍然是非零多元多项式. 其次是多元多项式的非零性等价于多元函数的非零性. 最后是因式分解定理对多元多项式仍然成立, 不过它的证明将在抽象代数课程中给出. 下面我们先来看多元多项式整性的若干应用.

> [!example]
> **例 5.58** 设 $f(x_1, \cdots, x_n), g(x_1, \cdots, x_n) \neq 0$ 是 $\mathbb{K}$ 上的多元多项式. 假设对一切使 $g(a_1, \cdots, a_n) \neq 0$ 的 $a_1, \cdots, a_n \in \mathbb{K}$, 均有 $f(a_1, \cdots, a_n) = 0$, 求证: $f(x_1, \cdots, x_n) = 0$.

> [!proof]-
> 用反证法, 假设 $f(x_1, \cdots, x_n) \neq 0$, 则由多元多项式的整性可知 $h(x_1, \cdots, x_n) = f(x_1, \cdots, x_n)g(x_1, \cdots, x_n) \neq 0$, 于是存在 $a_1, \cdots, a_n \in \mathbb{K}$, 使得 $h(a_1, \cdots, a_n) \neq 0$, 从而 $f(a_1, \cdots, a_n) \neq 0$ 并且 $g(a_1, \cdots, a_n) \neq 0$, 这与假设矛盾. $\square$


> [!example]
> **例 5.59** 设 $A \in M_n(\mathbb{K})$, 求证: $|A^*| = |A|^{n-1}$.

> [!proof]-
> 若 $A$ 是非异阵, 则由 $AA^* = |A|I_n$ 两边取行列式可得 $|A||A^*| = |A|^n$, 从而 $|A^*| = |A|^{n-1}$. 若 $A$ 是奇异阵, 则 $|A| = 0$. 这时若 $|A^*| \neq 0$, 则 $A^*$ 是非异阵, 由 $AA^* = |A|I_n = O$ 可得 $A = O$, 从而 $A^* = O$, 矛盾. 因此 $|A^*| = 0 = |A|^{n-1}$. $\square$

> [!example]
> **例 5.60** 设 $A \in M_n(\mathbb{K})$, 求证: $(A^*)^* = |A|^{n-2}A$.

> [!proof]-
> 若 $A$ 是非异阵, 则 $A^* = |A|A^{-1}$, 故 $(A^*)^* = ||A|A^{-1}|(|A|A^{-1})^{-1} = |A|^n|A|^{-1}|A|^{-1}A = |A|^{n-2}A$. 若 $A$ 是奇异阵, 则当 $n \geq 3$ 时, $r(A^*) \leq 1 < n-1$, 故 $(A^*)^* = O = |A|^{n-2}A$. 当 $n = 2$ 时可直接验证. $\square$

> [!example]
> **例 5.61** 设 $f(x_1, \cdots, x_n)$ 是 $\mathbb{K}$ 上的 $n$ 元非零多项式, $S \subseteq \mathbb{K}$ 是无限集, 则必存在 $a_1, \cdots, a_n \in S$, 使得 $f(a_1, \cdots, a_n) \neq 0$.

> [!proof]-
> 对 $n$ 用归纳法. $n = 1$ 时, 一元非零多项式只有有限个根, 而 $S$ 无限, 故存在 $a \in S$ 使得 $f(a) \neq 0$. 假设 $n - 1$ 时结论成立. 对 $n$ 元多项式 $f(x_1, \cdots, x_n)$, 可以写成 $f = g_m(x_1, \cdots, x_{n-1})x_n^m + \cdots + g_0(x_1, \cdots, x_{n-1})$, 其中至少有一个 $g_i \neq 0$. 由归纳假设, 存在 $a_1, \cdots, a_{n-1} \in S$ 使得某个 $g_i(a_1, \cdots, a_{n-1}) \neq 0$. 于是 $f(a_1, \cdots, a_{n-1}, x_n)$ 是 $x_n$ 的非零多项式, 故存在 $a_n \in S$ 使得 $f(a_1, \cdots, a_n) \neq 0$. $\square$

> [!example]
> **例 5.62** 设 $A \in M_n(\mathbb{K})$, 求证: $A$ 的秩为 $r$ 的充要条件是 $A$ 有一个 $r$ 阶子式不等于零, 而所有的 $r+1$ 阶子式都等于零.

> [!proof]-
> 必要性显然. 充分性: 设 $r(A) = s$. 若 $s > r$, 则 $A$ 有一个 $s$ 阶子式非零, 从而有一个 $r+1$ 阶子式非零, 矛盾. 若 $s < r$, 则 $A$ 的所有 $r$ 阶子式都为零, 矛盾. 故 $s = r$. $\square$

> [!example]
> **例 5.63** 设 $A \in M_n(\mathbb{K})$, 求证: $r(A) = 1$ 的充要条件是存在 $n$ 维非零列向量 $\alpha, \beta$, 使得 $A = \alpha\beta'$.

> [!proof]-
> 必要性: 若 $r(A) = 1$, 则 $A$ 的所有列向量成比例, 设 $A$ 的第 $i$ 列为 $\beta_i = b_i\alpha$ ($\alpha \neq 0$), 则 $A = \alpha(b_1, b_2, \cdots, b_n) = \alpha\beta'$, 其中 $\beta = (b_1, b_2, \cdots, b_n)'$. 因为 $A \neq O$, 故 $\beta \neq 0$.
> 充分性: 若 $A = \alpha\beta'$, 则 $r(A) \leq r(\alpha) = 1$, 又 $A \neq O$, 故 $r(A) = 1$. $\square$


> [!example]
> **例 5.64** 设 $f(x) \in \mathbb{K}[x]$, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, $x_1, x_2, \cdots, x_n$ 是 $n$ 个不同的数, 且 $\varphi$ 的任一特征值 $\lambda_0$ 都是 $f(x)$ 的根, 即 $f(\lambda_0) = 0$. 设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $V$ 的一组基, $\psi$ 是 $V$ 上的线性变换, 满足 $\psi(\alpha_i) = x_i\alpha_i$ ($1 \leq i \leq n$). 求证: $f(\varphi) = 0$ 的充要条件是 $f(\psi) = 0$.

> [!proof]-
> 若 $f(\varphi) = 0$, 设 $\psi$ 的特征值为 $x_i$, 由条件 $f(x_i) = 0$. 因为 $\psi$ 在某组基下的矩阵为对角阵 $\operatorname{diag}\{x_1, \cdots, x_n\}$, 故 $f(\psi)$ 在该基下的矩阵为 $\operatorname{diag}\{f(x_1), \cdots, f(x_n)\} = O$, 即 $f(\psi) = 0$.
> 反之, 若 $f(\psi) = 0$, 则 $f(x_i) = 0$ 对 $1 \leq i \leq n$ 成立. 由多项式插值, $f(x)$ 有 $n$ 个不同的根, 若 $\deg f < n$, 则 $f = 0$, 自然 $f(\varphi) = 0$. 若 $\deg f \geq n$, 则 $f(x) = (x - x_1)\cdots(x - x_n)g(x)$. 由 Hamilton-Cayley 定理, $(\varphi - x_1 I)\cdots(\varphi - x_n I) = 0$ (因为 $\varphi$ 的特征多项式有根 $x_1, \cdots, x_n$ 的某种排列), 故 $f(\varphi) = 0$. $\square$

### §5.10 结式与判别式

结式与判别式是多项式理论中的重要工具, 它们可以用来判断多项式是否有公共根以及多项式是否有重根.

> [!definition]
> 设
> $$f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_{n-1}x + a_n,$$
> $$g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_{m-1}x + b_m,$$
> 其中 $a_0 \neq 0$, $b_0 \neq 0$. 定义 $f(x)$ 与 $g(x)$ 的结式 (resultant) 为下列 $m + n$ 阶行列式:
> $$R(f, g) = \begin{vmatrix} a_0 & a_1 & \cdots & a_n & & & \\ & a_0 & a_1 & \cdots & a_n & & \\ & & \ddots & \ddots & & \ddots & \\ & & & a_0 & a_1 & \cdots & a_n \\ b_0 & b_1 & \cdots & \cdots & b_m & & \\ & b_0 & b_1 & \cdots & \cdots & b_m & \\ & & \ddots & & & \ddots & \\ & & & b_0 & b_1 & \cdots & b_m \end{vmatrix}$$
> 其中上半部分占 $m$ 行, 下半部分占 $n$ 行, 空白处为零.


> [!theorem]
> 设 $f(x), g(x)$ 如上, 则 $R(f, g) = 0$ 的充要条件是 $f(x)$ 与 $g(x)$ 有非常数公因式 (即它们在复数域上有公共根).

> [!theorem]
> 设 $f(x) = a_0 \prod_{i=1}^{n} (x - x_i)$, $g(x) = b_0 \prod_{j=1}^{m} (x - y_j)$, 则
> $$R(f, g) = a_0^m b_0^n \prod_{i=1}^{n} \prod_{j=1}^{m} (x_i - y_j) = a_0^m \prod_{i=1}^{n} g(x_i) = (-1)^{mn} b_0^n \prod_{j=1}^{m} f(y_j).$$

> [!definition]
> 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $a_0 \neq 0$, $f'(x)$ 是 $f(x)$ 的导数. 定义 $f(x)$ 的判别式为
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} a_0^{-1} R(f, f').$$

> [!theorem]
> 设 $f(x) = a_0 \prod_{i=1}^{n} (x - x_i)$, 则
> $$\Delta(f) = a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2.$$
> 因此 $f(x)$ 有重根的充要条件是 $\Delta(f) = 0$.

> [!example]
> **例 5.65** 求多项式 $f(x) = x^n + px + q$ ($n > 1$) 的判别式.

> [!solution]
> 设 $f(x)$ 的根为 $x_1, \cdots, x_n$, 则 $f'(x) = nx^{n-1} + p$. 由
> $$R(f, f') = \prod_{i=1}^{n} f'(x_i) = n^n \prod_{i=1}^{n} \left(x_i^{n-1} + \frac{p}{n}\right),$$
> 利用 Newton 恒等式或对称多项式理论, 可得
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} n^n q^{n-1} + (-1)^{\frac{(n-1)(n-2)}{2}} (n-1)^{n-1} p^n.$$

> [!example]
> **例 5.66** 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, $a_0, b_0$ 不全为零, 求证: $(f(x), g(x)) \neq 1$ 的充要条件是
> $$R(f, g) = 0.$$

> [!proof]-
> 这是结式的基本性质, 由结式的定义和定理直接可得. $\square$


> [!example]
> **例 5.67** 设 $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0$, $g(x) = x^m + b_{m-1}x^{m-1} + \cdots + b_0$, 求证: $f(x)$ 与 $g(x)$ 有公共根的充要条件是
> $$R(f, g) = \begin{vmatrix} 1 & a_{n-1} & \cdots & a_0 & & & \\ & 1 & a_{n-1} & \cdots & a_0 & & \\ & & \ddots & & & \ddots & \\ & & & 1 & a_{n-1} & \cdots & a_0 \\ 1 & b_{m-1} & \cdots & \cdots & b_0 & & \\ & 1 & b_{m-1} & \cdots & \cdots & b_0 & \\ & & \ddots & & & \ddots & \\ & & & 1 & b_{m-1} & \cdots & b_0 \end{vmatrix} = 0.$$

> [!proof]-
> 这是结式的直接应用. $\square$

> [!example]
> **例 5.68** 设 $f(x), g(x)$ 是次数大于 0 的多项式, 求证:
> $$R(f, g) = (-1)^{mn} R(g, f),$$
> 其中 $m = \deg f$, $n = \deg g$.

> [!proof]-
> 由结式的行列式定义, 交换 $f$ 和 $g$ 相当于将 $R(f, g)$ 的行列式进行 $mn$ 次相邻行交换, 每交换一次改变符号, 故总共改变 $(-1)^{mn}$ 次符号. $\square$

> [!example]
> **例 5.69** 设 $f(x)$ 是 $n$ 次多项式, 首项系数为 $a_0$, 根为 $x_1, \cdots, x_n$, 求证:
> $$\Delta(f) = (-1)^{\frac{n(n-1)}{2}} a_0^{-1} R(f, f') = a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2.$$

> [!proof]-
> 设 $f(x) = a_0(x - x_1)\cdots(x - x_n)$, 则 $f'(x_i) = a_0 \prod_{j \neq i} (x_i - x_j)$. 由 $R(f, f') = a_0^{n-1} \prod_{i=1}^{n} f'(x_i) = a_0^{2n-1} \prod_{i=1}^{n} \prod_{j \neq i} (x_i - x_j) = a_0^{2n-1}(-1)^{\frac{n(n-1)}{2}} \prod_{i<j}(x_i - x_j)^2$, 整理即得. $\square$

> [!example]
> **例 5.70** 设 $f(x) = x^3 + px + q$, 求 $\Delta(f)$.

> [!solution]
> $f'(x) = 3x^2 + p$. 由 $R(f, f') = \prod f'(x_i) = 3^3 \prod(x_i^2 + \frac{p}{3})$, 经计算得
> $$\Delta(f) = -4p^3 - 27q^2.$$

> [!example]
> **例 5.71** 设 $f(x)$ 是 $n$ 次多项式, $\deg g = m$, 求证: $\Delta(fg) = \Delta(f)\Delta(g)R(f, g)^2$.

> [!proof]-
> 设 $f(x) = a_0 \prod_{i=1}^{n}(x - x_i)$, $g(x) = b_0 \prod_{j=1}^{m}(x - y_j)$, 则 $fg$ 的根为 $x_1, \cdots, x_n, y_1, \cdots, y_m$. 由判别式公式,
> $$\Delta(fg) = (a_0b_0)^{2(n+m)-2} \prod_{i<j}(z_i - z_j)^2$$
> 其中 $z_i$ 取遍所有根. 将乘积分类: $x_i$ 之间、$y_j$ 之间、$x_i$ 与 $y_j$ 之间, 即得
> $$\Delta(fg) = \Delta(f)\Delta(g)R(f, g)^2.$$


> [!example]
> **例 5.72** 设 $f(x)$ 和 $g(x)$ 是次数大于 1 的多项式, 求证:
> $$\Delta(f(x)g(x)) = \Delta(f(x))\Delta(g(x))R(f, g)^2.$$

> [!proof]-
> 设 $f(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$, $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, 且 $f(x), g(x)$ 的根分别是 $x_1, x_2, \cdots, x_n$; $x_{n+1}, x_{n+2}, \cdots, x_{n+m}$, 则
> $$\Delta(f(x)g(x)) = (a_0b_0)^{2(n+m)-2} \prod_{1 \leq i < j \leq n+m} (x_i - x_j)^2.$$
> 现将乘积中的因式作如下分类: 若 $i \leq n, j \leq n$, 则
> $$a_0^{2n-2} \prod_{1 \leq i < j \leq n} (x_i - x_j)^2 = \Delta(f(x));$$
> 若 $i > n, j > n$, 则
> $$b_0^{2m-2} \prod_{n+1 \leq i < j \leq n+m} (x_i - x_j)^2 = \Delta(g(x));$$
> 若 $i \leq n, j > n$, 则
> $$a_0^{2m}b_0^{2n} \prod_{1 \leq i \leq n < j \leq n+m} (x_i - x_j)^2 = R(f, g)^2.$$
> 因此便有
> $$\Delta(f(x)g(x)) = \Delta(f(x))\Delta(g(x))R(f, g)^2.$$ $\square$

> [!example]
> **例 5.73** 设 $g(x)$ 是次数大于 1 的多项式, 求证:
> $$\Delta((x - a)g(x)) = g(a)^2 \Delta(g(x)).$$

> [!proof]-
> 设 $g(x) = b_0 x^m + b_1 x^{m-1} + \cdots + b_m$, 其根为 $x_1, \cdots, x_m$, 则
> $$\begin{aligned} \Delta((x - a)g(x)) &= b_0^{2m} \prod_{i=1}^{m}(a - x_i)^2 \prod_{1 \leq i < j \leq m} (x_i - x_j)^2 \\ &= (b_0(a - x_1)\cdots(a - x_m))^2 \cdot b_0^{2m-2} \prod_{1 \leq i < j \leq m} (x_i - x_j)^2 \\ &= g(a)^2 \Delta(g(x)). \end{aligned}$$ $\square$


> [!example]
> **例 5.74** 设 $f(x) = g(h(x))$, 其中 $h(x)$ 是 $m$ 次首一多项式, $g(x)$ 是 $n$ 次首一多项式, 其根为 $x_1, x_2, \cdots, x_n$, 求证:
> $$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 1** 由假设 $g(x)$ 的根为 $x_1, x_2, \cdots, x_n$, 故有
> $$f(x) = g(h(x)) = (h(x) - x_1)(h(x) - x_2)\cdots(h(x) - x_n).$$
> 又设 $h(x) - x_i = (x - u_{i1})(x - u_{i2})\cdots(x - u_{im})$, $1 \leq i \leq n$, 于是 $u_{ij}$ ($1 \leq i \leq n, 1 \leq j \leq m$) 就是 $f(x)$ 的全部根. 对二重足标引进序如下: $(i,j) < (k,l)$ 当且仅当 $i < k$ 或 $i = k, j < l$. 由题目条件可知 $f(x)$ 是首一多项式, 因此
> $$\Delta(f(x)) = \prod_{1 \leq (i,j) < (i',j') \leq (n,m)} (u_{ij} - u_{i'j'})^2.$$
> 对上式乘积中的因子进行分类. 第一类 (第一个足标相同):
> $$\Delta(h(x) - x_i) = \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2,$$
> 因此
> $$\prod_{i=1}^{n} \Delta(h(x) - x_i) = \prod_{i=1}^{n} \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2.$$
> 第二类 (第一个足标不同): 注意到对固定的 $i$, $u_{ij}$ 是 $h(x) - x_i$ 的根, 因此 $h(u_{ij}) = x_i$.
> 又
> $$\begin{aligned} h(u_{i1}) - x_{i'} &= (u_{i1} - u_{i'1})(u_{i1} - u_{i'2})\cdots(u_{i1} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ h(u_{i2}) - x_{i'} &= (u_{i2} - u_{i'1})(u_{i2} - u_{i'2})\cdots(u_{i2} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ &\quad \vdots \\ h(u_{im}) - x_{i'} &= (u_{im} - u_{i'1})(u_{im} - u_{i'2})\cdots(u_{im} - u_{i'm}), \quad i+1 \leq i' \leq n. \end{aligned}$$


上述诸式之积等于
$$(h(u_{i1}) - x_{i'})(h(u_{i2}) - x_{i'})\cdots(h(u_{im}) - x_{i'}) = (x_i - x_{i'})^m.$$
因此
$$\prod_{1 \leq (i,j) < (i',j') \leq (n,m), i \neq i'} (u_{ij} - u_{i'j'})^2 = \prod_{1 \leq i < i' \leq n} (x_i - x_{i'})^{2m} = \Delta(g(x))^m.$$
综上所述, 便有
$$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 2** 由例 5.69, 我们有
> $$\Delta(f) = (-1)^{\frac{1}{2}mn(mn-1)} R(f, f'),$$
> $$\begin{aligned} R(f, f') &= R(g(h(x)), g'(h(x))h'(x)) \\ &= R(g(h(x)), g'(h(x))) R(g(h(x)), h'(x)), \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), g'(h(x))) &= \prod_{i=1}^{n} \prod_{j=1}^{m} g'(h(u_{ij})) \\ &= \prod_{i=1}^{n} g'(x_i)^m = (-1)^{\frac{1}{2}mn(n-1)} \Delta(g(x))^m, \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), h'(x)) &= \prod_{i=1}^{n} \prod_{j=1}^{m} h'(u_{ij}) \\ &= (-1)^{\frac{1}{2}mn(m-1)} \prod_{i=1}^{n} \Delta(h(x) - x_i). \end{aligned}$$

因为
$$\frac{1}{2}mn(mn-1) - \frac{1}{2}mn(n-1) - \frac{1}{2}mn(m-1) = \frac{1}{2}m(m-1)n(n-1)$$
是一个偶数, 因此结论成立. $\square$

> [!example]
> **例 5.75** 求参数曲线 $\begin{cases} x = \frac{2(t+1)}{t^2 + 1} \\ y = \frac{t^2}{2t - 1} \end{cases}$ 的直角坐标方程.

> [!solution]
> 去分母得方程组
> $$\begin{cases} xt^2 - 2t + (x - 2) = 0, \\ t^2 - 2yt + y = 0. \end{cases}$$
> 令
> $$\begin{cases} f(t) = xt^2 - 2t + (x - 2), \\ g(t) = t^2 - 2yt + y, \end{cases}$$
> 由 $t$ 决定的参数曲线上的一点相当于方程组有公共根, 因此
> $$R(f, g) = \begin{vmatrix} x & -2 & x - 2 & 0 \\ 0 & x & -2 & x - 2 \\ 1 & -2y & y & 0 \\ 0 & 1 & -2y & y \end{vmatrix} = 0.$$
> 求出行列式可得该曲线的直角坐标方程为
> $$5x^2y^2 - 2x^2y - 12xy^2 + x^2 - 4x + 12y + 4 = 0.$$ $\square$


> [!remark]
> **注** 只有当多项式 $f(x), g(x)$ 的次数都大于 0 时, 其结式 $R(f(x), g(x))$ 的定义才有意义. 同理, 只有当 $f(x)$ 的次数大于 1 时, 其判别式 $\Delta(f(x))$ 的定义才有意义. 当然我们也可以作一些人为的规定, 例如, 若 $g(x) = c$ 是一个非零常数多项式, 则约定 $R(f(x), g(x)) = c^n$, 其中 $n = \deg f(x)$; 若 $f(x)$ 是一个一次多项式, 则约定 $\Delta(f(x)) = 1$. 我们不难发现这些约定可以完美地融入到已证明的关于结式和判别式的结果中. 特别地, 例 5.72 和例 5.73 的结论也适合 $\deg f(x) = 1$ 或 $\deg g(x) = 1$ 的情形, 并且例 5.73 也可以看成是例 5.72 的特例. 因此从某种意义上说, 这些关于结式和判别式的约定都是自然的.

> [!example]
> **例 5.74** 设 $f(x) = g(h(x))$, 其中 $h(x)$ 是 $m$ 次首一多项式, $g(x)$ 是 $n$ 次首一多项式, 其根为 $x_1, x_2, \cdots, x_n$, 求证:
> $$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 1** 由假设 $g(x)$ 的根为 $x_1, x_2, \cdots, x_n$, 故有
> $$f(x) = g(h(x)) = (h(x) - x_1)(h(x) - x_2)\cdots(h(x) - x_n).$$
> 又设 $h(x) - x_i = (x - u_{i1})(x - u_{i2})\cdots(x - u_{im})$, $1 \leq i \leq n$, 于是 $u_{ij}$ ($1 \leq i \leq n, 1 \leq j \leq m$) 就是 $f(x)$ 的全部根. 对二重足标引进序如下: $(i,j) < (k,l)$ 当且仅当 $i < k$ 或 $i = k, j < l$. 由题目条件可知 $f(x)$ 是首一多项式, 因此
> $$\Delta(f(x)) = \prod_{1 \leq (i,j) < (i',j') \leq (n,m)} (u_{ij} - u_{i'j'})^2.$$
> 对上式乘积中的因子进行分类. 第一类 (第一个足标相同):
> $$\Delta(h(x) - x_i) = \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2,$$
> 因此
> $$\prod_{i=1}^{n} \Delta(h(x) - x_i) = \prod_{i=1}^{n} \prod_{1 \leq j < j' \leq m} (u_{ij} - u_{ij'})^2.$$
> 第二类 (第一个足标不同): 注意到对固定的 $i$, $u_{ij}$ 是 $h(x) - x_i$ 的根, 因此 $h(u_{ij}) = x_i$. 又
> $$\begin{aligned} h(u_{i1}) - x_{i'} &= (u_{i1} - u_{i'1})(u_{i1} - u_{i'2})\cdots(u_{i1} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ h(u_{i2}) - x_{i'} &= (u_{i2} - u_{i'1})(u_{i2} - u_{i'2})\cdots(u_{i2} - u_{i'm}), \quad i+1 \leq i' \leq n; \\ &\quad\quad\vdots \\ h(u_{im}) - x_{i'} &= (u_{im} - u_{i'1})(u_{im} - u_{i'2})\cdots(u_{im} - u_{i'm}), \quad i+1 \leq i' \leq n. \end{aligned}$$


上述诸式之积等于
$$(h(u_{i1}) - x_{i'})(h(u_{i2}) - x_{i'})\cdots(h(u_{im}) - x_{i'}) = (x_i - x_{i'})^m.$$
因此
$$\prod_{1 \leq (i,j) < (i',j') \leq (n,m), i \neq i'} (u_{ij} - u_{i'j'})^2 = \prod_{1 \leq i < i' \leq n} (x_i - x_{i'})^{2m} = \Delta(g(x))^m.$$
综上所述, 便有
$$\Delta(f(x)) = \Delta(g(x))^m \Delta(h(x) - x_1)\Delta(h(x) - x_2)\cdots\Delta(h(x) - x_n).$$

> [!proof]-
> **证法 2** 由例 5.69, 我们有
> $$\Delta(f) = (-1)^{\frac{1}{2}mn(mn-1)} R(f, f'),$$
> $$\begin{aligned} R(f, f') &= R(g(h(x)), g'(h(x))h'(x)) \\ &= R(g(h(x)), g'(h(x))) R(g(h(x)), h'(x)), \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), g'(h(x))) &= \prod_{i=1}^{n} \prod_{j=1}^{m} g'(h(u_{ij})) \\ &= \prod_{i=1}^{n} g'(x_i)^m = (-1)^{\frac{1}{2}mn(n-1)} \Delta(g(x))^m, \end{aligned}$$
> $$\begin{aligned} R(g(h(x)), h'(x)) &= \prod_{i=1}^{n} \prod_{j=1}^{m} h'(u_{ij}) \\ &= (-1)^{\frac{1}{2}mn(m-1)} \prod_{i=1}^{n} \Delta(h(x) - x_i). \end{aligned}$$
> 因为 $\frac{1}{2}mn(mn-1) - \frac{1}{2}mn(n-1) - \frac{1}{2}mn(m-1) = \frac{1}{2}m(m-1)n(n-1)$ 是一个偶数, 因此结论成立. $\square$

> [!example]
> **例 5.75** 求参数曲线 $\begin{cases} x = \frac{2(t+1)}{t^2 + 1} \\ y = \frac{t^2}{2t - 1} \end{cases}$ 的直角坐标方程.

> [!solution]
> 去分母得方程组
> $$\begin{cases} xt^2 - 2t + (x - 2) = 0, \\ t^2 - 2yt + y = 0. \end{cases}$$
> 令
> $$\begin{cases} f(t) = xt^2 - 2t + (x - 2), \\ g(t) = t^2 - 2yt + y, \end{cases}$$
> 由 $t$ 决定的参数曲线上的一点相当于方程组有公共根, 因此
> $$R(f, g) = \begin{vmatrix} x & -2 & x - 2 & 0 \\ 0 & x & -2 & x - 2 \\ 1 & -2y & y & 0 \\ 0 & 1 & -2y & y \end{vmatrix} = 0.$$
> 求出行列式可得该曲线的直角坐标方程为
> $$5x^2y^2 - 2x^2y - 12xy^2 + x^2 - 4x + 12y + 4 = 0.$$ $\square$


### §5.11 互素多项式的应用

在高等代数的框架中, 多项式理论起到了一个承上启下的作用. 一方面, 多项式理论是即将阐述的相似标准型理论的基石; 另一方面, 它也联系起了前面阐述的矩阵理论和线性空间理论. 下面将通过几个典型例题来看一看互素多项式的相关应用.

> [!example]
> **例 5.76** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 满足 $f(\boldsymbol{A}) = \boldsymbol{O}$, 证明: $g(\boldsymbol{A})$ 是可逆矩阵.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = \boldsymbol{A}$, 可得恒等式
> $$f(\boldsymbol{A})u(\boldsymbol{A}) + g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n.$$
> 因为 $f(\boldsymbol{A}) = \boldsymbol{O}$, 故有 $g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n$, 从而 $g(\boldsymbol{A})$ 是非异阵且 $g(\boldsymbol{A})^{-1} = v(\boldsymbol{A})$. $\square$

> [!remark]
> 利用例 5.76 可以证明一大类可逆矩阵的问题, 比如例 2.20, 而下面的例题则是例 3.70 和例 3.71 的推广.

> [!example]
> **例 5.77** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\boldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 证明: $f(\boldsymbol{A})g(\boldsymbol{A}) = \boldsymbol{O}$ 的充要条件是 $\mathrm{r}(f(\boldsymbol{A})) + \mathrm{r}(g(\boldsymbol{A})) = n$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = \boldsymbol{A}$, 可得恒等式
> $$f(\boldsymbol{A})u(\boldsymbol{A}) + g(\boldsymbol{A})v(\boldsymbol{A}) = \boldsymbol{I}_n.$$
> 考虑如下分块矩阵的初等变换:
> $$\begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{O} \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A}) & f(\boldsymbol{A})u(\boldsymbol{A}) \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{I}_n \\ \boldsymbol{O} & g(\boldsymbol{A}) \end{pmatrix} \to$$
> $$\begin{pmatrix} f(\boldsymbol{A}) & \boldsymbol{I}_n \\ -f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \end{pmatrix} \to \begin{pmatrix} \boldsymbol{O} & \boldsymbol{I}_n \\ -f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \end{pmatrix} \to \begin{pmatrix} f(\boldsymbol{A})g(\boldsymbol{A}) & \boldsymbol{O} \\ \boldsymbol{O} & \boldsymbol{I}_n \end{pmatrix},$$
> 故有 $\mathrm{r}(f(\boldsymbol{A})) + \mathrm{r}(g(\boldsymbol{A})) = \mathrm{r}(f(\boldsymbol{A})g(\boldsymbol{A})) + n$, 从而结论得证. $\square$

> [!remark]
> 例 5.78 告诉我们: 多项式的互素因式分解可以诱导出空间的直和分解, 从几何层面上看, 这就是相似标准型理论原始的出发点. 另外, 例 5.78 也是例 4.54 和第 4 章解答题 9 的推广.


> [!example]
> **例 5.78** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 满足 $f(\varphi)g(\varphi) = 0$, 证明: $V = V_1 \oplus V_2$, 其中 $V_1 = \mathrm{Ker}\,f(\varphi)$, $V_2 = \mathrm{Ker}\,g(\varphi)$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$. 在上式中代入 $x = \varphi$, 可得恒等式
> $$f(\varphi)u(\varphi) + g(\varphi)v(\varphi) = I_V.$$
> 对任意的 $\alpha \in V$, 有 $\alpha = f(\varphi)u(\varphi)(\alpha) + g(\varphi)v(\varphi)(\alpha)$. 令 $\alpha_1 = g(\varphi)v(\varphi)(\alpha)$, $\alpha_2 = f(\varphi)u(\varphi)(\alpha)$, 则 $f(\varphi)(\alpha_1) = v(\varphi)f(\varphi)g(\varphi)(\alpha) = 0$, 即 $\alpha_1 \in V_1$. 同理 $\alpha_2 \in V_2$, 于是 $V = V_1 + V_2$. 再证直和, 任取 $\beta \in V_1 \cap V_2$, 则 $f(\varphi)(\beta) = g(\varphi)(\beta) = 0$, 由 $f(\varphi)u(\varphi)(\beta) + g(\varphi)v(\varphi)(\beta) = \beta$, 得 $\beta = 0$, 即 $V_1 \cap V_2 = \{0\}$, 从而 $V = V_1 \oplus V_2$. $\square$

> [!example]
> **例 5.79** 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的可逆线性变换, 若 $W$ 是 $\varphi$ 的不变子空间, 证明: $W$ 也是 $\varphi^{-1}$ 的不变子空间.

> [!proof]-
> 取 $W$ 的一组基并扩张为 $V$ 的基, 则 $\varphi$ 在此基下的矩阵为分块上三角阵 $\begin{pmatrix} A & C \\ O & B \end{pmatrix}$, 其中 $A$ 是 $\varphi|_W$ 在 $W$ 的基下的表示矩阵. 由于 $\varphi$ 可逆, 故 $A$ 可逆, 即 $\varphi|_W$ 可逆. 对任意 $\alpha \in W$, 存在 $\beta \in W$ 使得 $\varphi|_W(\beta) = \alpha$, 即 $\varphi(\beta) = \alpha$, 故 $\varphi^{-1}(\alpha) = \beta \in W$. $\square$

> [!example]
> **例 5.80** 设 $f(x)$ 是 $n$ 次多项式, $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $f(x)$ 的 $n$ 个根 (可以有重根), 证明: 对任意多项式 $g(x)$, 有
> $$\sum_{i=1}^{n} \frac{g(\lambda_i)}{f'(\lambda_i)}$$
> 是 $f(x)$ 的系数的多项式 (称为 $g(x)$ 关于 $f(x)$ 的 Lagrange 插值和).

> [!proof]-
> 设 $f(x) = a_0(x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_n)$, 则
> $$f'(\lambda_i) = a_0 \prod_{j \neq i} (\lambda_i - \lambda_j).$$
> 利用 Lagrange 插值公式和对称多项式理论, 可以证明上述和是 $f(x)$ 的初等对称多项式的多项式, 从而是 $f(x)$ 的系数的多项式. $\square$


> [!example]
> **例 5.81** 设 $f(x)$ 是 $n$ 次首一多项式, $\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $f(x)$ 的 $n$ 个根, $g(x)$ 是任一多项式, 证明:
> $$\frac{g(x)}{f(x)} = \sum_{i=1}^{n} \frac{g(\lambda_i)}{f'(\lambda_i)(x - \lambda_i)}.$$

> [!proof]-
> 由部分分式分解, 可设 $\frac{g(x)}{f(x)} = \sum_{i=1}^{n} \frac{a_i}{x - \lambda_i}$. 两边乘以 $x - \lambda_j$ 并令 $x \to \lambda_j$, 得
> $$a_j = \lim_{x \to \lambda_j} \frac{g(x)(x - \lambda_j)}{f(x)} = \frac{g(\lambda_j)}{f'(\lambda_j)}.$$ $\square$

> [!example]
> **例 5.82** 设 $f(x)$ 是 $n$ 次首一多项式, $g(x)$ 是次数小于 $n$ 的多项式, 若 $f(x)$ 的根为 $\lambda_1, \lambda_2, \cdots, \lambda_n$, 证明:
> $$g(x) = \sum_{i=1}^{n} \frac{g(\lambda_i)f(x)}{f'(\lambda_i)(x - \lambda_i)}.$$

> [!proof]-
> 这是 Lagrange 插值公式的另一种形式, 由例 5.81 两边乘以 $f(x)$ 即得. $\square$

> [!example]
> **例 5.83** 设 $A$ 是 $n$ 阶复方阵, $f(x)$ 是 $A$ 的特征多项式, 证明: $f(A) = O$ (Hamilton-Cayley 定理).

> [!proof]-
> 设 $f(x) = (x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_n)$, 其中 $\lambda_i$ 是 $A$ 的特征值. 由 Jordan 标准型理论, $A = PJP^{-1}$, 其中 $J$ 是 Jordan 标准型. 则 $f(A) = Pf(J)P^{-1}$. 由于 $J$ 是上三角阵, 对角元为 $\lambda_1, \cdots, \lambda_n$, 故 $f(J)$ 的对角元为 $f(\lambda_i) = 0$. 进一步验证 $f(J) = O$, 从而 $f(A) = O$. $\square$

> [!example]
> **例 5.84** 设 $A$ 是 $n$ 阶复方阵, $g(x)$ 是 $A$ 的极小多项式, 证明:
> (1) $g(x)$ 是唯一的;
> (2) $g(x)$ 整除 $A$ 的特征多项式;
> (3) $g(x)$ 与 $f(x)$ 有相同的根 (不计重数), 其中 $f(x)$ 是 $A$ 的特征多项式.

> [!proof]-
> (1) 若 $g_1(x), g_2(x)$ 都是 $A$ 的极小多项式, 则 $g_1(A) = g_2(A) = 0$. 由带余除法, $g_1(x) = g_2(x)q(x) + r(x)$, 代入 $x = A$ 得 $r(A) = 0$. 由极小多项式次数的最小性, $r(x) = 0$, 故 $g_2(x) \mid g_1(x)$. 同理 $g_1(x) \mid g_2(x)$, 又它们都是首一的, 故 $g_1 = g_2$.
> (2) 设 $f(x)$ 是 $A$ 的特征多项式, 由 Hamilton-Cayley 定理 $f(A) = 0$. 由带余除法 $f(x) = g(x)q(x) + r(x)$, $\deg r < \deg g$, 代入 $x = A$ 得 $r(A) = 0$, 故 $r = 0$, 即 $g \mid f$.
> (3) 由 (2) 知 $g$ 的根都是 $f$ 的根. 反之, 若 $\lambda$ 是 $f$ 的根, 即 $\lambda$ 是 $A$ 的特征值, 设 $A\alpha = \lambda\alpha$ ($\alpha \neq 0$), 则 $0 = g(A)\alpha = g(\lambda)\alpha$, 故 $g(\lambda) = 0$. $\square$


> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$.
> 在上式中代入 $x = oldsymbol{A}$, 可得恒等式
> $$f(oldsymbol{A})u(oldsymbol{A}) + g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n.$$
> 因为 $f(oldsymbol{A}) = oldsymbol{O}$, 故有 $g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n$, 从而 $g(oldsymbol{A})$ 是非异阵且 $g(oldsymbol{A})^{-1} = v(oldsymbol{A})$.

利用例 5.76 可以证明一大类可逆矩阵的问题, 比如例 2.20, 而下面的例题则是例 3.70 和例 3.71 的推广.

> [!example]
> **例 5.77** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $oldsymbol{A}$ 是 $\mathbb{K}$ 上的 $n$ 阶方阵, 证明: $f(oldsymbol{A})g(oldsymbol{A}) = oldsymbol{O}$ 的充要条件是 $\mathrm{r}(f(oldsymbol{A})) + \mathrm{r}(g(oldsymbol{A})) = n$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得
> $$f(x)u(x) + g(x)v(x) = 1.$$
> 在上式中代入 $x = oldsymbol{A}$, 可得恒等式
> $$f(oldsymbol{A})u(oldsymbol{A}) + g(oldsymbol{A})v(oldsymbol{A}) = oldsymbol{I}_n.$$
> 考虑如下分块矩阵的初等变换:
> $$egin{pmatrix} f(oldsymbol{A}) & oldsymbol{O} \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A}) & f(oldsymbol{A})u(oldsymbol{A}) \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A}) & oldsymbol{I}_n \ oldsymbol{O} & g(oldsymbol{A}) \end{pmatrix} 	o$$
> $$egin{pmatrix} f(oldsymbol{A}) & oldsymbol{I}_n \ -f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \end{pmatrix} 	o egin{pmatrix} oldsymbol{O} & oldsymbol{I}_n \ -f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \end{pmatrix} 	o egin{pmatrix} f(oldsymbol{A})g(oldsymbol{A}) & oldsymbol{O} \ oldsymbol{O} & oldsymbol{I}_n \end{pmatrix},$$
> 故有 $\mathrm{r}(f(oldsymbol{A})) + \mathrm{r}(g(oldsymbol{A})) = \mathrm{r}(f(oldsymbol{A})g(oldsymbol{A})) + n$, 从而结论得证.

> [!remark]
> 例 5.78 告诉我们: 多项式的互素因式分解可以诱导出空间的直和分解, 从几何层面上看, 这就是相似标准型理论原始的出发点. 另外, 例 5.78 也是例 4.54 和第 4 章解答题 9 的推广.

> [!example]
> **例 5.78** 设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的互素多项式, $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上的线性变换, 满足 $f(\varphi)g(\varphi) = 0$, 证明: $V = V_1 \oplus V_2$, 其中 $V_1 = \mathrm{Ker}\,f(\varphi)$, $V_2 = \mathrm{Ker}\,g(\varphi)$.

> [!proof]-
> 根据假设, 存在 $\mathbb{K}$ 上的多项式 $u(x), v(x)$, 使得 $f(x)u(x) + g(x)v(x) = 1$.
> 在上式中代入 $x = \varphi$, 可得恒等式
> $$f(\varphi)u(\varphi) + g(\varphi)v(\varphi) = I_V.$$
> 对任意的 $\alpha \in V$, 有
> $$\alpha = u(\varphi)f(\varphi)(\alpha) + v(\varphi)g(\varphi)(\alpha).$$
> 注意到 $u(\varphi)f(\varphi)(\alpha) \in V_2$ (因为 $g(\varphi)u(\varphi)f(\varphi)(\alpha) = u(\varphi)f(\varphi)g(\varphi)(\alpha) = 0$), 同理 $v(\varphi)g(\varphi)(\alpha) \in V_1$.
> 因此 $V = V_1 + V_2$. 又对任意的 $\beta \in V_1 \cap V_2$, 有 $f(\varphi)(\beta) = g(\varphi)(\beta) = 0$, 故
> $$\beta = u(\varphi)f(\varphi)(\beta) + v(\varphi)g(\varphi)(\beta) = 0,$$
> 即 $V_1 \cap V_2 = 0$, 从而 $V = V_1 \oplus V_2$.


---

