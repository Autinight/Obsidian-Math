---
type: homework
aliases: [Probability HW16]
---
> [!exercise] Exercise: 
> 某保险公司多年的统计资料表明, 在索赔户中被盗索赔户占 $20\%$, 以 $X$ 表示在随机抽查的 $100$ 个索赔户中因被盗向保险公司索赔的户数.
> 1. 写出 $X$ 的分布列;
> 2. 求被盗索赔户不少于 $14$ 户且不多于 $30$ 户的概率的近似值.

> [!solution] Solution: 
> $X\sim B\left(100, 0.2\right)$. $E\left(X\right)= 20$, $\operatorname{Var}\left(X\right)= 16= 4^{2}$.
>  1.   $$ P\left(X= k\right)= \binom{ 100 }{ k }0.2^{k}0.8^{100-k}   $$
>     
> 2. 
>  $$ \frac{X-20 }{4 } $$
> 近似服从正态分布 
> 所求概率为
>  $$ \begin{aligned} P\left(14\le X\le 30\right)& \approx P\left(\frac{13.5-20 }{4 }\le \chi \le \frac{30.5-20 }{4 }\right)\\&= \Phi \left(2.625\right)-\Phi \left(-1.625\right)\end{aligned} $$ 

> [!exercise] Exercise
> 掷一颗骰子 100 次, 记第 $i$ 次掷出的点数为 $X_i, i=1,2,\cdots,100$, 点数之平均为 $\overline{X}=\frac{1}{100}\sum_{i=1}^{100}X_i$, 试求概率 $P(3\le\overline{X}\le4)$.

> [!solution] Solution: 
> $E\left(X_{i}\right)= 3.5$, $\operatorname{Var}\left(X_{i}\right)=\frac{35 }{12 }= :\sigma ^{2}$
> 则
>  $$ \frac{ \sum _{i= 1}^{100}X_{i}-350}{\sqrt{100}\sigma  } = \frac{10\overline{X}-35 }{\sigma  }\approx \chi \sim \mathcal{N}\left(0,1\right)$$ 
>  $$ \begin{aligned} P\left(3\le \overline{X}\le 4\right)&\approx P\left(-\frac{5 }{\sigma  }\le \chi \le \frac{5 }{\sigma  }\right)\\&= \Phi \left(\frac{5 }{\sigma  }\right)-\Phi \left(-\frac{5 }{\sigma  }\right)\\&= 1-2\Phi \left(-\frac{5 }{ \sigma }\right)\\&= 1-2\Phi \left(-\frac{10\sqrt{3} }{\sqrt{35} }\right)  \end{aligned} $$ 


> [!exercise] Exercise: 
> 某餐厅每天接待 $400$ 名顾客, 设每位顾客的消费额(单位: 元)服从 $(20,100)$ 上的均匀分布, 且顾客的消费额是相互独立的. 试求:
> 1.  该餐厅每天的平均营业额;
> 2. 该餐厅每天的营业额在平均营业额 $\pm760$ 元内的概率.

> [!solution] Solution: 
> 令 $X_{i}$表示第$i$位顾客的消费, 则
> $E\left(X_{i}\right)=60$, $\operatorname{Var}\left(X_{i}\right)=\frac{80^{2} }{12 }$
> 1. 平均营业额为
>  $$ \sum _{i= 1}^{400}E\left(X_{i}\right)= 400 \times 60= 24000 $$
> 2. 设 $Y_{i}=X_{i}-60$, 令 $S_{n}= \sum _{i= 1}^{n}Y_{i}$
> 则每天的营业额与平均营业额之差为
>  $$ S_{400} $$
> 由中心极限定理,
>  $$ \frac{S_{400} }{\sqrt{400} \sqrt{\frac{80^{2} }{12 }} }\approx  Z\sim \mathcal{N}\left(0,1\right) $$
> 每天营业额在$\pm 760$的概率为
>  $$ \begin{aligned} P\left(-760\le S_{400}\le 760\right)&\approx P\left(\frac{-760 }{\sqrt{400}\sqrt{\frac{80^{2} }{12 }} }\le Z\le\frac{760 }{\sqrt{400}\sqrt{\frac{80^{2} }{12 }} }\right)\\&= P\left(\frac{-19 \sqrt{3}}{20 }\le Z\le \frac{19\sqrt{3} }{20 }\right)\\&=  1-2\Phi \left(-\frac{19\sqrt{3} }{20 }\right)\end{aligned}  $$    

> [!exercise] Exercise: 
> 进行独立重复试验, 每次试验中事件 $A$ 发生的概率为 $0.25$. 试问能以 $95\%$ 的把握保证 $1000$ 次试验中事件 $A$ 发生的频率与概率相差多少? 此时 $A$ 发生的次数在什么范围内?

> [!proof] Proof: 
> 设$X$为1000次试验中事件 $A$发生的频率, 则
>  $$ \frac{ 1000 X-0.25\times 1000}{\sqrt{1000} \sqrt{0.25\times 0.75} } = \frac{400\left(X-0.25\right) }{\sqrt{30}}$$
> 近似服从标准正态分布$\mathcal{N}\left(0,1\right)$ , 设$Z\sim \mathcal{N}\left(0,1\right)$.
>  
>  $$ \begin{aligned} P\left(-k\le X-0.25\le k\right)&\approx P\left(-\frac{400\left(k+ 0.0005\right) }{\sqrt{30}  }\le Z\le \frac{400\left(k+ 0.0005\right) }{\sqrt{30} }\right)\\&= 1-2\Phi \left(-\frac{400 }{ \sqrt{30}}\left(k+ 0.0005\right)\right) \end{aligned} $$
>   由
>  $$ 1-2\Phi \left(-\frac{400 }{ \sqrt{30}}\left(k+ 0.0005\right)\right)= 0.95 $$
> 查表得 $\Phi^{-1}(0.025) = -1.96$, 解得
>  
>  $$ k = \frac{1.96\sqrt{30}}{400} - 0.0005 \approx 0.0263 $$  
> 因此有95%的把握保证1000次试验中事件 $A$发生的频率与概率相差 $0.0263$. 此时 $A$发生的次数为 $1000X$, 在 
>  $$ \left[224, 276\right] $$
> 之间


> [!exercise] Exercise: 
> 一家有 $500$ 间客房的大旅馆的每间客房装有一台 $2\text{ kW}$ (千瓦) 的空调机. 若开房率为 $80\%$, 需要多少千瓦的电力才能有 $99\%$ 的可能性保证有足够的电力使用空调机?

> [!proof] Proof: 
> 设开房数为 $X$, 则
>  $$ \frac{X-400 }{ \sqrt{500\times 0.8\times 0.2}}= \frac{X-400 }{4\sqrt{5} } $$
> 近似服从标准正态分布 $Z\sim \mathcal{N}\left(0,1\right)$.
>  $$ \begin{aligned} P\left(X\le m\right)&\approx P\left(Z\le \frac{\left(m+ 0.5\right)-400 }{4\sqrt{5} }\right)\\&= \Phi \left(\frac{m+ 0.5 }{4\sqrt{5} }-\frac{100 }{\sqrt{5} }\right)\end{aligned} $$
> 由
> $$ \Phi \left(\frac{m+ 0.5 }{4\sqrt{5} }-\frac{100 }{\sqrt{5} }\right)= 0.99 $$
> 得到至少需要 $W= 2m$千瓦的电力为
>  $$W= 2 m= 8\sqrt{5}\Phi ^{-1} \left(0.99\right)+ 799$$
>  

> [!exercise] Exercise: 
> 设某元件是某电气设备的一个关键部件, 当该元件失效后立即换上一个新的元件. 假定该元件的平均寿命为 $100$ 小时, 标准差为 $30$ 小时, 试问: 应该有多少备件, 才能有 $0.95$ 以上的概率, 保证这个系统能连续运行 $2000$ 小时以上?

> [!solution] Solution: 
> 设$X_{i}$为第$i$个元件的运行时长. 则 $E\left(X_{i}\right)= 100$, $\operatorname{Var}\left(X_{i}\right)= 30^{2}= \sigma ^{2}$.
> 令 $S_{n}= \sum _{i= 1}^{n}X_{i}$. 
> 
>  $$ \frac{S_{n}-100n }{30\sqrt{n} } \xrightarrow{d} \mathcal{N}\left(0,1\right),\quad \text{as }n\to \infty  $$
>  $$ P\left(S_{n}\ge 2000\right)\approx P\left(Z\ge \frac{2000-100n }{30\sqrt{n} }\right)= 1-\Phi \left(\frac{2000-100n }{30\sqrt{n} }\right) $$
> 其中 $Z\sim \mathcal{N}\left(0,1\right)$.
> 由 
>  $$ 1-\Phi \left(\frac{2000-100n }{ 30\sqrt{n}}\right)\ge 0.95 $$   
> 我们得到
>  $$ \frac{200-10n }{3\sqrt{n} }\le \Phi ^{-1} \left(0.05\right)$$ 
>  $$ 10n+ 3\Phi ^{-1} \left(0.05\right)\sqrt{n}-200\ge 0 $$ 
> 解得
>  $$ n\ge \left( \frac{-3\Phi ^{-1} \left(0.05\right)+ \sqrt{9\left(\Phi ^{-1} \left(0.05\right)^{2}\right)+ 8000} }{20 }\right) ^{2}\approx 22.33$$
> 因此需要总零件数23, 备件22个.  

> [!exercise] Exercise: 
> 独立重复地对某物体的长度 $a$ 进行 $n$ 次测量, 设各次测量结果 $X_i$ 服从正态分布 $N(a,0.2^2)$. 记 $\bar{X}$ 为 $n$ 次测量结果的算术平均值, 为保证有 $95\%$ 的把握使平均值与实际值 $a$ 的差异小于 $0.1$, 问至少需要测量多少次?

> [!proof] Proof: 
> 令 $S_{n}= \sum _{i= 1}^{n}X_{i}$. 由正态分布的可加性,
>  $$ \frac{S_{n}-an }{0.2\sqrt{n} }\sim   \mathcal{N}\left(0,1\right) $$
>
>  $$ \begin{aligned} P\left(-0.1\le \overline{X}-a\le 0.1\right)&=P\left(-0.1\le \frac{S_{n}-an }{n }\le 0.1\right)\\& =  P\left(-0.5\sqrt{n}\le Z\le 0.5\sqrt{n}\right)\\&= 1-2\Phi \left(-0.5\sqrt{n}\right)\end{aligned} $$
> 由 
>  $$1- 2\Phi \left(-0.5\sqrt{n}\right)\ge 0.95 $$
> 得到
>  $$ n\ge  4 \left(\Phi ^{-1} \left(\frac{1 }{40 }\right)\right)^{2} $$  

> [!exercise] Exercise: 
> 为确定某城市成年男子中吸烟者的比例 $p$, 任意调查 $n$ 个成年男子, 记其中的吸烟人数为 $m$, 问 $n$ 至少为多大才能保证 $m/n$ 与 $p$ 的差异小于 $0.01$ 的概率大于 $95\%$.

> [!proof] Proof: 
> 令 $X_i$ 为第 $i$ 个男子是否吸烟的指示变量 (吸烟取 1, 否则取 0), 则 $m = \sum_{i=1}^n X_i$. 由 De Moivre-Laplace 中心极限定理 (此处为近似计算),
>  $$ \frac{m-np}{\sqrt{np(1-p)}} \sim \mathcal{N}(0,1) $$
> 
>  $$ \begin{aligned} P\left( -0.01 \le \frac{m}{n} - p \le 0.01 \right) &= P\left( -0.01 \le \frac{m-np}{n} \le 0.01 \right) \\ &= P\left( \frac{-0.01\sqrt{n}}{\sqrt{p(1-p)}} \le Z \le \frac{0.01\sqrt{n}}{\sqrt{p(1-p)}} \right) \\ &= 1 - 2\Phi\left( -\frac{0.01\sqrt{n}}{\sqrt{p(1-p)}} \right) \end{aligned} $$
> 为保证上述概率对任意 $p$ 均成立, 需取 $p(1-p)$ 的最大值 $\frac{1}{4}$, 由
>  $$ 1 - 2\Phi\left( -0.02\sqrt{n} \right) \ge 0.95 $$
> 得到
>  $$ n \ge 2500 \left( \Phi^{-1}\left( \frac{1}{40} \right) \right)^2 $$

> [!exercise] Exercise: 
> 设 $\{X_n\}$ 为一独立同分布的随机变量序列, 已知 $E(X_i^k)=\alpha_k, k=1,2,3,4$. 试证明: 当 $n$ 充分大时, $Y_n=\frac{1}{n}\sum_{i=1}^n X_i^2$ 近似服从正态分布, 并指出此正态分布的参数.

> [!proof] Proof: 
> 令 $Z_{i}= X_{i}^{2}$, 则 $E\left(Z_{i}\right)= E\left(X_{i}^{2}\right)=\alpha _{2}$
>  $$ \frac{nY_{n}-n\alpha _2  }{\sqrt{\operatorname{nVar}\left(X_{i}^{2}\right)} }\xrightarrow{d} \mathcal{N}\left(0,1\right)  $$ 
> 这表明
>  $$ \frac{Y_{n}-\alpha _2  }{\sqrt{\frac{\operatorname{Var}\left(X_{i}^{2}\right) }{n }} }\xrightarrow{d}  \mathcal{N}\left(0,1\right) ,\quad n\to \infty  $$ 
> 其中
>  $$ \operatorname{Var}\left(X_{i}^{2}\right)= E\left(X_{i}^{4}\right)-\left(E\left(X_{i}^{2}\right)\right)^{2}= \alpha _4 -\alpha _2 ^{2} $$ 
> 于是当 $n$充分大时, $Y_{n}$近似服从
>  $$ \mathcal{N}\left(\alpha _2 , \frac{\alpha_4-\alpha _2 ^{2}}{ n}\right) $$ 

> [!exercise] Exercise: 
> 用概率论的方法证明:
> $$
> \lim_{n\to\infty}\left(1+n+\frac{n^2}{2!}+\cdots+\frac{n^n}{n!}\right)e^{-n}=\frac{1}{2}.
> $$

> [!proof] Proof: 
> 令 $X_{i}\sim \mathrm{Poisson}\left(1\right)$, 令 $S_{n}= \sum _{i= 1}^{n}X_{i}$. 由Poisson分布的可加性, $S_{n}\sim \mathrm{Poisson}\left(n\right)$. 由中心极限定理
>  $$ \frac{S_{n}-n }{\sqrt{n} }\xrightarrow{d} \mathcal{N}\left(0,1\right)  $$
> 令 $Z\sim \mathcal{N}\left(0,1\right)$, 则根据弱收敛的定义
>  $$ \lim_{n\to \infty}P\left(S_{n}\le n\right)= \lim_{n\to \infty}P\left(\frac{S_{n}-n }{\sqrt{n} }\le 0\right)= P\left(Z\le 0\right)= \frac{1}{2} $$
> 而
>  $$ P\left(S_{n}\le n\right)= \sum _{k= 0}^{n}\frac{n^{k} }{k! }e^{-n} $$
> 这就说明了
>  $$ \lim_{n\to \infty}\left(1+ n+ \frac{n^{2} }{2! }+ \cdots + \frac{n^{n} }{n! }\right)e^{-n}= \frac{1}{2} $$    

