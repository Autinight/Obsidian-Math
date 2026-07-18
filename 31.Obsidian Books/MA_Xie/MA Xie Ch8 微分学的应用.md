## 第八章 微分学的应用

有了微分学中值定理和 Taylor 定理后, 我们在函数研究方面就有了强有力的工具. 本章将分专题介绍这些工具是如何应用的. 虽然其中多数问题可能在过去已经遇到过, 但只有在学了微分学的知识之后, 我们才有条件来讨论解决这些问题的一般性方法.

§8.1 介绍求函数极限的两个主要方法——L'Hospital 法则和带 Peano 余项的 Taylor 公式. §8.2 是用导数判定函数的单调性. §8.3 是用微分学方法求函数的极值和最值. 在 §8.4 中对于凸函数的基本性质作较全面的介绍. §8.5 的主题是用各种不同的方法证明不等式. §8.6 为函数作图. §8.7 是以方程求根为中心的近似计算. 最后一节为学习要点和两组参考题.

## §8.1 函数极限的计算

## 8.1.1 L'Hospital法则

从数学分析的学习开始, 极限计算就是一大难题. 这种状况在有了 L'Hospital 法则后才可以说有了根本的改变. 由于这个法则将求不定式极限归之于简单的导数计算, 而且 (在条件满足时) 可以连续使用, 许多看似复杂的问题就可迎刃而解. 关于 L'Hospital 法则的叙述、证明以及应用时的注意事项等在数学分析的教科书中都有详细的介绍, 其基本思想又与 §2.4 完全相同, 这里不再重复 $^{①}$ . 因同样的理由, 也不准备举很多常规性的例题和练习题.

这里只强调指出一点, 即虽然 L'Hospital 法则确实是计算极限的强有力工具, 但毕竟“一花独放不是春”, 初学者要学会将 L'Hospital 法则的使用与其他工具相结合, 这样才能有更好的效果. 这里所说的其他工具包括在前面各章中已经介绍的多种方法, 如等价量代换法、变量代换法、不定式因子的分离、各种恒等变换、无穷小增量公式等, 也包括在下一小节将要介绍的带 Peano 余项的 Taylor 公式等. 总之, 若初学者在用 L'Hospital 法则时出现复杂的计算或甚至失败, 原因往往不是 L'Hospital 法则不好, 而是你对于它的认识有误. 不要认为既然 L'Hospital 法则这样有力, 那么其他 (已经学过的) 方法都可以不要了.

先看下面几个简单问题, 它们在第四章中很难解决, 现在用 L'Hospital 法则来做就成为容易的问题了 (回顾那里的例题 4.4.5). 但从下面又可看出, 这里也需要与其他工具结合.

例题8.1.1 计算极限 $\lim_{x\to 0}\frac{\sin x - x}{x^3}.$ 

解 用 L'Hospital 法则可计算如下:

$$
\lim _ {x \rightarrow 0} \frac {\sin x - x}{x ^ {3}} = \lim _ {x \rightarrow 0} \frac {\cos x - 1}{3 x ^ {2}} = - \frac {1}{6}.
$$

最后一步利用了已知的等价关系 $1 - \cos x \sim \frac{1}{2} x^2 (x \to 0)$ .

例题8.1.2 计算极限 $\lim_{x\to 0}\frac{x - \tan x}{x^3}.$ 

解 1 不用其他工具, 连用三次 L'Hospital 法则就可以解决问题:

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {x - \tan x}{x ^ {3}} & = \lim _ {x \to 0} \frac {1 - \sec^ {2} x}{3 x ^ {2}} = \lim _ {x \to 0} \frac {- 2 \sec^ {2} x \tan x}{6 x} \\ & = - \lim _ {x \to 0} \frac {2 \sec^ {2} x \tan^ {2} x + \sec^ {4} x}{3} = - \frac {1}{3}. \end{array}
$$

解 2 实际上用一次 L'Hospital 法则就够了:

$$
\lim _ {x \to 0} \frac {x - \tan x}{x ^ {3}} = \lim _ {x \to 0} \frac {1 - \sec^ {2} x}{3 x ^ {2}} = \lim _ {x \to 0} \frac {- \tan^ {2} x}{3 x ^ {2}} = - \frac {1}{3}.
$$

再举一个有多种解法的例子.

例题8.1.3 计算 $\lim_{x\to 0}\frac{1 - \cos x^2}{x^3\sin x}.$ 

解 1 直接用 L'Hospital 法则三次, 得到

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {1 - \cos x ^ {2}}{x ^ {3} \sin x} & = \lim _ {x \to 0} \frac {2 \sin x ^ {2}}{3 x \sin x + x ^ {2} \cos x} = \lim _ {x \to 0} \frac {4 x \cos x ^ {2}}{(3 - x ^ {2}) \sin x + 5 x \cos x} \\ & = \lim _ {x \to 0} \frac {4 \cos x ^ {2} - 8 x ^ {2} \sin x ^ {2}}{(8 - x ^ {2}) \cos x - 7 x \sin x} = \frac {1}{2}. \end{array}
$$

解 2 实际上不需要微分学知识, 用等价量代换法即可解决:

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {1 - \cos x ^ {2}}{x ^ {3} \sin x} & = \lim _ {x \to 0} \frac {2 \sin^ {2} \frac {x ^ {2}}{2}}{x ^ {3} \sin x} \\ & = \lim _ {x \to 0} \left(\frac {\sin \frac {x ^ {2}}{2}}{\frac {x ^ {2}}{2}}\right) ^ {2} \cdot \left(\frac {x}{2 \sin x}\right) = \frac {1}{2}. \end{array}
$$

解3 若利用当 $x \to 0$ 时成立 $\cos x^2 = 1 - \frac{(x^2)^2}{2} + o((x^2)^2)$ 和 $\sin x = x + o(x)$ , 则就有

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {1 - \cos x ^ {2}}{x ^ {3} \sin x} & = \lim _ {x \to 0} \frac {\frac {x ^ {4}}{2} + o (x ^ {4})}{x ^ {3} (x + o (x))} = \lim _ {x \to 0} \frac {\frac {x ^ {4}}{2} + o (x ^ {4})}{x ^ {4} + o (x ^ {4})} \\ & = \lim _ {x \to 0} \frac {\frac {1}{2} + o (1)}{1 + o (1)} = \frac {1}{2}. \end{array}
$$

下面是在 §2.5 计算数 e 时留下的问题, 即证明公式 (2.15) 中的等价关系.

例题8.1.4 设 $\delta_{n} = \mathrm{e} - \left(1 + \frac{1}{n}\right)^{n}$ , 计算极限 $\lim_{n\to \infty}n\delta_n$ 

解 根据第四章的 Heine 归结原理 (即命题 4.2.3), 只要计算函数极限

$$
\lim _ {x \to 0 ^ {+}} \frac {\mathrm{e} - (1 + x) ^ {\frac {1}{x}}}{x}.
$$

这是 $\frac{0}{0}$ 型的不定式问题. 用 L'Hospital 法则, 得到

$$
\begin{array}{r l} \lim _ {x \to 0 ^ {+}} \frac {\mathrm{e} - (1 + x) ^ {\frac {1}{x}}}{x} & = \lim _ {x \to 0 ^ {+}} \left\{- \left[ (1 + x) ^ {\frac {1}{x}} \right] \cdot \frac {\frac {x}{1 + x} - \ln (1 + x)}{x ^ {2}} \right\} \\ & = - \mathrm{e} \cdot \lim _ {x \to 0 ^ {+}} \frac {\frac {x}{1 + x} - \ln (1 + x)}{x ^ {2}} \\ & = - \mathrm{e} \cdot \lim _ {x \to 0 ^ {+}} \frac {\frac {1}{(1 + x) ^ {2}} - \frac {1}{1 + x}}{2 x} \\ & = - \mathrm{e} \cdot \lim _ {x \to 0 ^ {+}} \frac {- 1}{2 (1 + x) ^ {2}} = \frac {\mathrm{e}}{2}. \end{array}
$$

注 实际上本题的答案就是例题 7.2.4 中的函数 $f(x)$ 的导数 $f'(0)$ (乘 -1).

用 L'Hospital 法则可以对带 Peano 余项的 Taylor 公式给出新证明.

例题8.1.5用L'Hospital法则证明：若 $f$ 在点 $x_0$ 存在 $f^{(n)}(x_0)$ ，则有

$$
\begin{array}{r l}f (x)&= f (x _ {0}) + f ^ {\prime} (x _ {0}) (x - x _ {0}) + \frac {f ^ {\prime \prime} (x _ {0})}{2 !} (x - x _ {0}) ^ {2} + \dots\\&\quad + \frac {f ^ {(n)} (x _ {0})}{n !} (x - x _ {0}) ^ {n} + o ((x - x _ {0}) ^ {n}) (x \rightarrow x _ {0}).\end{array}
$$

证 如在第七章的 (7.19) 那样引进余项

$$
\begin{array}{r l} r _ {n} (x) & = f (x) - [ f (x _ {0}) + f ^ {\prime} (x _ {0}) (x - x _ {0}) + \frac {f ^ {\prime \prime} (x _ {0})}{2 !} (x - x _ {0}) ^ {2} + \dots \\ & \quad + \frac {f ^ {(n)} (x _ {0})}{n !} (x - x _ {0}) ^ {n} ], \end{array}
$$

它满足以下的 $n + 1$ 个条件：

$$
r _ {n} (x _ {0}) = 0, r _ {n} ^ {\prime} (x _ {0}) = 0, \dots , r _ {n} ^ {(n)} (x _ {0}) = 0.\tag{8.1}
$$

只需要证明 $\lim_{x\to x_0}\frac{r_n(x)}{(x - x_0)^n} = 0,$ 这是 $\frac{0}{0}$ 型的不定式.用L'Hospital法则如下：

$$
\lim _ {x \rightarrow x _ {0}} \frac {r _ {n} (x)}{(x - x _ {0}) ^ {n}} = \lim _ {x \rightarrow x _ {0}} \frac {r _ {n} ^ {\prime} (x)}{n (x - x _ {0}) ^ {n - 1}} = \dots = \lim _ {x \rightarrow x _ {0}} \frac {r _ {n} ^ {(n - 1)} (x)}{n ! (x - x _ {0})}.
$$

在以上的 $n - 1$ 次应用L'Hospital法则中，利用了(8.1)中的前 $n - 1$ 个条件.从条件 $r_n^{(n - 1)}(x_0) = 0$ 可见上面的最后一式仍然是 $\frac{0}{0}$ 型的不定式.但这里不能再用L'Hospital法则.与命题7.2.2中一样，从导数定义出发，即可利用条件 $r^{(n)}(x_0) = 0$ 得到所要求证的结果. □

## 8.1.2 Taylor公式与极限计算

先介绍用 Taylor 公式对错误使用等价量代换法进行分析的一个例子.

例题 8.1.6 根据实际教学情况, 在用 L'Hospital 法则计算例题 8.1.4 中的极限时, 很多学生在最后一步不再用 L'Hospital 法则, 而作以下计算:

$$
\lim _ {x \to 0} \frac {\frac {x}{1 + x} - \ln (1 + x)}{x ^ {2}} = \lim _ {x \to 0} \frac {\frac {x}{1 + x} - x}{x ^ {2}} = \lim _ {x \to 0} \frac {x - (1 + x) x}{(1 + x) x ^ {2}} = - 1,
$$

但正确答案却是 $-\frac{1}{2}$ . 问题当然出在不恰当地使用了等价量代换法. 因为根据 4.4.3 小节, 应当按照 (4.8) 或 (4.9) 的方式才能用等价量代换.

用Taylor公式进行分析就可一目了然. 分子的两项可用Taylor公式写出为

$$
\begin{array}{c} {{ \frac {x}{1 + x} = x - x ^ {2} + o (x ^ {2})   (x \to 0),}} \\ {{\ln {(1 + x)} = x - \frac {1}{2} x ^ {2} + o (x ^ {2})   (x \to 0).}} \end{array}
$$

可见这两项相减后, $x$ 的一次项恰好对消, 因此起作用的是在两个展开式中的 $x^{2}$ 项的系数. 正确的计算为

$$
\lim _ {x \rightarrow 0} \frac {\frac {x}{1 + x} - \ln (1 + x)}{x ^ {2}} = \lim _ {x \rightarrow 0} \frac {(x - x ^ {2}) - (x - \frac {1}{2} x ^ {2}) + o (x ^ {2})}{x ^ {2}} = - \frac {1}{2}.
$$

由此可见, 前面的错误原因在于用 $x$ 替换 $\ln (1 + x)$ 时太粗糙了, 丢掉了在该问题中起关键作用的二次项.

从 Taylor 公式的应用来看, 问题是在每一个具体场合究竟应当写出多少项? 当然这需要尝试. 再以上面的分子为例. 将 $\ln (1 + x)$ 写为 $x + o(x)(x \to 0)$ , 这也是 Taylor 公式, 并没有错误. 如果将第一项也写为 $x + o(x)$ , 就会发现仅仅写出一次项的系数是不够的.

以上错误还说明, 学生在刚学了 Taylor 公式后一般还不会在求函数极限时加以使用, 在计算时仍停留在使用无穷小增量公式 (也就是 $n = 1$ 的带 Peano 余项的最简单的 Taylor 公式) 的知识水平上. 解决这个问题的方法是实践和教师的引导.

带有 Peano 余项的 Taylor 公式在求极限中有广泛的应用是不奇怪的, 因为 Peano 余项本身就是对于无穷小量的一个刻画. 下面是应用 Taylor 公式求极限的第一个例子 (为清楚起见用 $\exp(x)$ 表示 $\mathrm{e}^x$ ).

例题8.1.4的解2 用Taylor公式作下列计算：

$$
\begin{array}{r l} \delta_ {n} = \mathrm{e} - \left(1 + \frac {1}{n}\right) ^ {n} & = \mathrm{e} - \exp \left[ n \ln \left(1 + \frac {1}{n}\right) \right] \\ & = \mathrm{e} - \exp \left[ n \left(\frac {1}{n} - \frac {1}{2 n ^ {2}} + O \left(\frac {1}{n ^ {3}}\right)\right) \right] \\ & = \mathrm{e} - \exp \left[ 1 - \frac {1}{2 n} + O \left(\frac {1}{n ^ {2}}\right) \right] \\ & = \mathrm{e} \left(1 - \exp \left[ - \frac {1}{2 n} + O \left(\frac {1}{n ^ {2}}\right) \right]\right) \\ & = \mathrm{e} \left[ 1 - \left(1 - \frac {1}{2 n} + O \left(\frac {1}{n ^ {2}}\right)\right) \right] \\ & = \frac {\mathrm{e}}{2 n} + O \left(\frac {1}{n ^ {2}}\right), \end{array}
$$

可见 $\lim_{n\to \infty}n\delta_n = \frac{\mathrm{e}}{2}$ 

注 例题7.2.4已经提供了本题的一种解法, 实质上与此相同. 此外, 本章第一组参考题6又提供了另一个解法.

在用 L'Hospital 法则时, 如果逐次求导运算会使表达式变得很复杂, 则往往不如用 Taylor 公式或结合其他工具为好.

例题8.1.7 求 $\lim_{x\to 0}\frac{1 - (\cos x)^{\sin x}}{x^3}.$ 

解 记所求的极限为 I, 写出分子的 Maclaurin 公式:

$$
\begin{array}{r l}1 - (\cos x) ^ {\sin x}&= 1 - \mathrm{e} ^ {\sin x \ln \cos x}\\&= 1 - [ 1 + \sin x \ln \cos x + o (\sin x \ln \cos x) ]\\&= - \sin x \ln \cos x + o (\sin x \ln \cos x) (x \rightarrow 0),\end{array}
$$

然后如下计算即可得到答案:

$$
\begin{array}{r l} I & = \lim _ {x \to 0} \frac {- \sin x \ln \cos x}{x ^ {3}} = \lim _ {x \to 0} \frac {- \ln \cos x}{x ^ {2}} = \lim _ {x \to 0} \frac {- \ln \left[ 1 + \left(- \frac {x ^ {2}}{2} + o (x ^ {3})\right) \right]}{x ^ {2}} \\ & = \lim _ {x \to 0} \frac {\frac {x ^ {2}}{2} + o (x ^ {3}) + o (x ^ {2})}{x ^ {2}} = \frac {1}{2}. \end{array}
$$

在下一个例题的几种解法中我们可以看到各种工具的结合使用.

例题8.1.8 求极限 $\lim_{x\to 0}\frac{\cos(\sin x) - \cos x}{x^4}.$ 

解1 可以看出只要计算分子的Maclaurin展开式直到 $x^4$ 项即可：

$$
\begin{array}{r l}\cos (\sin x) - \cos x&= 1 - \frac {1}{2 !} (\sin x) ^ {2} + \frac {1}{4 !} (\sin x) ^ {4} - \left(1 - \frac {1}{2 !} x ^ {2} + \frac {1}{4 !} x ^ {4}\right) + o (x ^ {5})\\&= - \frac {1}{2} \left(x - \frac {1}{6} x ^ {3}\right) ^ {2} + \frac {1}{2 4} x ^ {4} + \frac {1}{2} x ^ {2} - \frac {1}{2 4} x ^ {4} + o (x ^ {5})\\&= - \frac {1}{2} \left(x ^ {2} - \frac {1}{3} x ^ {4}\right) + \frac {1}{2} x ^ {2} + o (x ^ {5})\\&= \frac {1}{6} x ^ {4} + o (x ^ {5}) (x \rightarrow 0),\end{array}
$$

因此所求的极限为 $\frac{1}{6}$ .

解2 在写出 $\cos (\sin x) - \cos x$ 的展开式后, 可以看出只要计算如下:

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {\cos (\sin x) - \cos x}{x ^ {4}} & = \lim _ {x \to 0} \left(\frac {1}{2} \cdot \frac {x ^ {2} - \sin^ {2} x}{x ^ {4}}\right) \\ & = \frac {1}{2} \lim _ {x \to 0} \left(\frac {x + \sin x}{x} \cdot \frac {x - \sin x}{x ^ {3}}\right) = \frac {1}{6}. \end{array}
$$

解 3 利用分子的特殊形式, 应用 Lagrange 中值定理即可得到

$$
\cos (\sin x) - \cos x = - \sin \xi (\sin x - x),
$$

其中 $\xi$ 在 $x$ 与 $\sin x$ 之间. 因此就可以计算如下:

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {\cos (\sin x) - \cos x}{x ^ {4}} & = \lim _ {x \to 0} \frac {- \sin \xi (\sin x - x)}{x ^ {4}} \\ & = - \lim _ {x \to 0} \left(\frac {\sin \xi}{\xi} \cdot \frac {\xi}{x} \cdot \frac {\sin x - x}{x ^ {3}}\right) = \frac {1}{6}. \end{array}
$$

解 4 本题也可以用三角函数的和差化积公式来做, 计算如下:

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {\cos (\sin x) - \cos x}{x ^ {4}} & = \lim _ {x \to 0} \left[ \frac {- 1}{x ^ {4}} \cdot 2 \sin \left(\frac {\sin x - x}{2}\right) \cdot \sin \left(\frac {\sin x + x}{2}\right) \right] \\ & = - 2 \lim _ {x \to 0} \left(\frac {1}{x ^ {4}} \cdot \frac {\sin x - x}{2} \cdot \frac {\sin x + x}{2}\right) \\ & = - \lim _ {x \to 0} \frac {\sin x - x}{x ^ {3}} = \frac {1}{6}. \end{array}
$$

注意这里使用了多次等价量代换, 使问题大大简化了.

例题 8.1.9 设函数 f 满足条件 $f(0)=0$ ，且存在 $f''(0)$ ，证明：函数

$$
g (x) = \left\{ \begin{array}{l l} \frac {f (x)}{x}, & x \neq 0, \\ f ^ {\prime} (0), & x = 0 \end{array} \right.
$$

的导函数 $g'$ 在 x=0 处连续, 且 $g'(0)=\frac{1}{2}f''(0)$ .

解 这时 $f$ 在 $x = 0$ 的某邻域上可微, 因此当 $x \neq 0$ 时可按定义求出

$$
g ^ {\prime} (x) = \frac {f ^ {\prime} (x) x - f (x)}{x ^ {2}}.\tag{8.2}
$$

余下只有一个问题, 即证明 $g'(0) = \frac{1}{2} f''(0)$ 且 $\lim_{x \to 0} g'(x) = g'(0)$ .

应用 7.1.2 小节的导数极限定理, 只要证明: (1) g 在 x = 0 处连续; (2) $g'$ 在 x = 0 处有极限, 并求出此极限. (若不用导数极限定理, 则需另行计算 $g'(0)$ .)

(1) 从 $g$ 的定义即可得到

$$
\lim _ {x \to 0} g (x) = \lim _ {x \to 0} {\frac {f (x)}{x}} = \lim _ {x \to 0} {\frac {f (x) - f (0)}{x}} = f ^ {\prime} (0) = g (0).
$$

(2) 利用带 Peano 余项的 Maclaurin 公式:

$$
\begin{array}{l} {f (x) = f ^ {\prime} (0) x + \frac {1}{2} f ^ {\prime \prime} (0) x ^ {2} + o (x ^ {2})   (x \to 0),} \\ {f ^ {\prime} (x) = f ^ {\prime} (0) + f ^ {\prime \prime} (0) x + o (x)   (x \to 0),} \end{array}
$$

将它们代入 (8.2), 就在 $x \neq 0$ 时有

$$
\begin{array}{r l}g ^ {\prime} (x)&= \frac {(f ^ {\prime} (0) + f ^ {\prime \prime} (0) x) x - \left(f ^ {\prime} (0) x + \frac {1}{2} f ^ {\prime \prime} (0) x ^ {2}\right) + o (x ^ {2})}{x ^ {2}}\\&= \frac {1}{2} f ^ {\prime \prime} (0) + o (1) (x \rightarrow 0).\end{array}
$$

因此存在极限 $\lim_{x\to0}g'(x)=\frac{1}{2}f''(0)$ ，再应用导数极限定理即得所要的结论. □

注1 比较 $f$ 和 $g$ 的Maclaurin展开式：

$$
\begin{array}{l} {f (x) = f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2} x ^ {2} + o (x ^ {2}) (x \to 0),} \\ {g (x) = f ^ {\prime} (0) + \frac {f ^ {\prime \prime} (0)}{2} x + o (x) (x \to 0),} \end{array}
$$

可以发现, 后一个公式可以由前一个除以 $x$ 得到, 恰与 $x \neq 0$ 时 $g(x)$ 的定义一致. 但是在证明 $g(0) = f'(0)$ 和 $g'(0) = \frac{1}{2} f''(0)$ 之前, 当然还不知道由这样的形式运算得到的结果是否是 g 的 Maclaurin 展开式. 因此可以认为, 本例题的意义就在于对这样的形式运算作出了严格证明.

注2 这个例题的结论可以推广．只要多次应用导数极限定理, 就可以证明: 若 $f(0) = 0$ , 且存在 $f^{(n+1)}(0)$ , 则上述 $g(x)$ 的 $n$ 阶导函数 $g^{(n)}$ 在 $x = 0$ 处连续, 且 $g^{(n)}(0) = f^{(n+1)}(0)/(n+1)$ . (这将作为本章的第二组参考题2.)

注3 应用上述推广, 就可以为上一章的例题7.2.3和7.2.4中的计算提供理论根据. 这里的结果可以简述为: 如果 $f(x)$ 满足 $f(0) = 0$ , 又存在 $f^{(n + 1)}(0)$ , 则如下定义的函数:

$$
g (x) = \left\{ \begin{array}{l l} \frac {f (x)}{x}, & x \neq 0, \\ f ^ {\prime} (0), & x = 0 \end{array} \right.
$$

在 $x = 0$ 处存在 $g^{(n)}(0)$ , 且有 Maclaurin 展开式:

$$
g (x) = f ^ {\prime} (0) + f ^ {\prime \prime} (0) x + \frac {f ^ {\prime \prime \prime} (0)}{2 !} x ^ {2} + \dots + \frac {f ^ {(n + 1)} (0)}{(n + 1) !} x ^ {n} + o (x ^ {n}) (x \rightarrow 0).
$$

因此, 形式上这个展开式可以从 $f$ 的 Maclaurin 展开式除以 $x$ 得到. 在例题 7.2.3 和 7.2.4 中对于 $\sin x$ 和 $\ln (1 + x)$ 就是这样做的, 但当时没有能够证明其合理性.

下一个例题与例题 2.4.2 类似, 但需要用到 Taylor 公式的知识才能解决.

例题 8.1.10 设 $x_{0} \in \left(0, \frac{\pi}{2}\right)$ , $x_{n} = \sin x_{n-1}, n \in N_{+}$ , 证明: $x_{n} \sim \sqrt{\frac{3}{n}} (n \to \infty)$ .

证 数列 $\{x_{n}\}$ 为严格单调减少数列, 收敛于0 (请读者补充证明). 以下用Stolz定理计算:

$$
\begin{array}{r l} \lim _ {n \to \infty} n x _ {n} ^ {2} & = \lim _ {n \to \infty} \frac {n}{\frac {1}{x _ {n} ^ {2}}} \\ & = \lim _ {n \to \infty} \frac {1}{\frac {1}{x _ {n + 1} ^ {2}} - \frac {1}{x _ {n} ^ {2}}} \\ & = \lim _ {n \to \infty} \frac {x _ {n} ^ {2} x _ {n + 1} ^ {2}}{x _ {n} ^ {2} - x _ {n + 1} ^ {2}} \\ & = \lim _ {n \to \infty} \frac {x _ {n} ^ {2} \sin^ {2} x _ {n}}{\frac {1}{3} x _ {n} ^ {4} + o (x _ {n} ^ {5})} = 3, \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/c6924cce91761a22965ba48e8fdbbca4efed23932ab3f1cf5050fdc8ced1cbdb.jpg)



图8.1


在其中用了 $x_{n+1} = \sin x_{n} = x_{n} - \frac{1}{6}x_{n}^{3} + o(x_{n}^{4})$ .

注 在图8.1上用蛛网工作法(见2.6.2小节)作出了数列的前几项. 可以看出数列 $\{x_{n}\}$ 收敛于0一定很慢. 本题的结果对此作出了渐近的刻画.

## 8.1.3 练习题

1. 以下几个函数极限均不宜用 L'Hospital 法则, 为什么?
(1) $\lim_{x\to1}\frac{x}{x+1};$ (2) $\lim_{x\to+\infty}\frac{x+\sin x}{x-\sin x};$ (3) $\lim_{x\to+\infty}\frac{e^{x}+e^{-x}}{e^{x}-e^{-x}};$ (4) $\lim_{x\to+\infty}\frac{x}{\sqrt{1+x^{2}}}$ 

2. 求下列极限：
(1) $\lim_{x\to0}\frac{a^{x^{2}}-b^{x^{2}}}{(a^{x}-b^{x})^{2}};$ (2) $\lim_{x\to+\infty}\left[\left(x^{3}-x^{2}+\frac{x}{2}\right)\mathrm{e}^{\frac{1}{x}}-\sqrt{1+x^{6}}\right];$ (3) $\lim_{x\to0^{+}}\left(\ln\frac{1}{x}\right)^{x};$ (4) $\lim_{x\to+\infty}\left(\frac{\pi}{2}-\arctan x\right)^{\frac{1}{\ln x}}.$ 

3. 确定 $a, b$ , 使得当 $x \to 0$ 时, 下列函数为尽可能高阶的无穷小量: (1) $f(x) = x - (a + b \cos x) \sin x$ ; (2) $f(x) = \mathrm{e}^{x} - \frac{1 + ax}{1 + bx}$ ; (3) $f(x) = \cot x - \frac{1 + ax^2}{x + bx^3}$ ; (4) $f(x) = \cos x - \frac{1 + ax^2}{1 + bx^2}$ .

4. 应用 Taylor 公式求下列极限:
(1) $\lim_{x\to0}\left(\frac{1}{x}-\frac{1}{\sin x}\right)$ ; (2) $\lim_{x\to0}\frac{e^{x^{3}}-1-x^{3}}{\sin^{6}2x}$ ;
(3) $\lim_{n\to\infty}n^{2}\ln\left(n\sin\frac{1}{n}\right)$ ; (4) $\lim_{n\to\infty}(-1)^{n}n\sin(\sqrt{n^{2}+2}\pi)$ ;
(5) $\lim_{x\to0}\frac{\sin(\tan x)-\tan(\sin x)}{x^{7}}$ ; (6) $\lim_{x\to0}\frac{x\sin(\sin x)-\sin^{2}x}{x^{6}}$ .

5. 设存在 $f''(a)$ ，证明： $\lim_{h \to 0} \frac{f(a + 2h) - 2f(a + h) + f(a)}{h^2} = f''(a)$ .

6. 设 $f$ 在某邻域 $O(x_0)$ 上二阶连续可微, $f'(x_0) \neq 0$ , $f(x) \neq f(x_0)$ , $\forall x \neq x_0$ . 求 $\lim_{x \to x_0} \left[ \frac{1}{f(x) - f(x_0)} - \frac{1}{f'(x_0)(x - x_0)} \right]$ .

7. 设 $f$ 在 $[0, +\infty)$ 上二阶连续可微, 且 $f''(x) > 0$ , $f(0) = f'(0) = 0$ . 试求极限 $\lim_{x \to 0^{+}} \frac{xf(u)}{uf(x)}$ , 其中 $u$ 是函数 $f$ 的图像在点 $(x, f(x))$ 处的切线在 $x$ 轴上的截距.

8. 令 $f(x) = \lim_{n\to \infty}n^x\left[\left(1 + \frac{1}{n + 1}\right)^{n + 1} - \left(1 + \frac{1}{n}\right)^n\right]$ ，确定其定义域和值域。

9. 设 $x_{1} > 0, x_{n + 1} = \ln (1 + x_{n}), n \in \mathbf{N}_{+}$ , 证明: $\lim_{n\to \infty}nx_n = 2.$ 

10. 设 $x_0 = \ln a, a > 0, x_n = \sum_{k=0}^{n-1} \ln (a - x_k), n \in \mathbf{N}_+$ , 求 $\lim_{n \to \infty} x_n$ .

## §8.2 函数的单调性

设函数 $f \in C(I)$ , 在 $I$ 的内点处处可微, 则有以下结论.

1. f 为区间 I 上的单调函数的充分必要条件是导函数不变号.

2. $f$ 为区间 $I$ 上的严格单调函数的充分必要条件是除了导函数不变号外, 还在集合 $\{x \in I \mid f'(x) = 0\}$ 中不包含任何长度大于零的区间.

证明的方法是用 Lagrange 中值定理. 这在教科书中都有, 不再重复.

从数列极限和函数极限的学习开始, 单调性就一直起着重要的作用. 现在以导数为工具, 给出了判定单调性的新的有效方法, 可以说解决了函数研究中的一个基本问题. 搞清了函数的不同单调区间, 也就知道了函数图像的上升与下降, 这对解决许多问题都是有帮助的.

## 8.2.1 例题

虽然函数的单调性与导数有如上所说的密切关系, 但仅仅由一个点上的导数符号不能得出单调性. 请将下一个例题与命题 7.1.1 联系起来考虑这个问题.

例题8.2.1问：由函数在一个点上的导数符号大于(小于)0能否推出函数在该点的一个充分小的邻域上为单调？

解 答案是不能. 举例如下: 令

$$
f (x) = \left\{ \begin{array}{l l} x + 2 x ^ {2} \sin \frac {1}{x}, & x \neq 0, \\ 0, & x = 0. \end{array} \right.
$$

则易求出 $f'(0)=1>0$ . 又可以求出当 $x\neq0$ 时的导函数表达式为

$$
f ^ {\prime} (x) = 1 + 4 x \sin {\frac {1}{x}} - 2 \cos {\frac {1}{x}}.
$$

取 $x = \frac{1}{n\pi}$ ，则有

(b) 

$$
f ^ {\prime} \left(\frac {1}{n \pi}\right) = 1 - 2 (- 1) ^ {n},
$$

可见在 x=0 的任意邻近导函数 $f'(x)$ 都不保号. 因此在 x=0 的每个邻域上 f 都不是单调的 (该函数在 x>0 部分的图像见图 8.2(a)). □

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/9c5f0b5eb356a464dcbee003aa1c9c166d28506c463efd0ec9e913eb97daefed.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/235b3d843a858a643e8c95d71794f107ea3a30f5fbacfdd69a6f7bbb42626246.jpg)



图8.2


注 在任何一个区间上不单调的连续函数和可微函数都是存在的 (见 [57]).

例题8.2.2 问：函数在其极值点的每一侧邻近是否一定具有单调性？

解 答案是不一定. 举例如下: 令

$$
f (x) = \left\{ \begin{array}{l l} 0, & x = 0, \\ - x ^ {2} \left(2 + \sin {\frac {1}{x}}\right), & x \neq 0, \end{array} \right.
$$

则 $f$ 在 $x = 0$ 处取到极大值0.从不等式

$$
- 3 x ^ {2} \leqslant f (x) \leqslant - x ^ {2}
$$

即可求出 $f'(0)=0$ . 但当 $x \neq 0$ 时

$$
f ^ {\prime} (x) = - 4 x - 2 x \sin {\frac {1}{x}} + \cos {\frac {1}{x}},
$$

因此在极值点 x = 0 两侧的任意邻近都不可能是单调的 (见图 8.2(b)).

例题8.2.3 设函数 $f(x) = \left(1 + \frac{1}{x}\right)^{x + \alpha}$ ，证明：当 $\alpha \geqslant \frac{1}{2}$ 时， $f$ 于 $x > 0$ 时严格单调减少；而当 $\alpha < \frac{1}{2}$ 时，则 $f$ 于 $x$ 充分大时严格单调增加。

证 用对数求导法, 可以写出

$$
f ^ {\prime} (x) = f (x) \left[ \ln \left(1 + \frac {1}{x}\right) - \frac {x + \alpha}{x ^ {2} + x} \right].
$$

将上式右边记为 $f(x) \cdot u(x)$ ，则 $f'$ 与 u 同号。由于有

$$
\lim _ {x \to + \infty} u (x) = 0,
$$

只要观察 u 是否单调即可判定其符号. 计算得到

$$
u ^ {\prime} (x) = \frac {\alpha + (2 \alpha - 1) x}{x ^ {2} (1 + x) ^ {2}}.
$$

可见当 $\alpha \geqslant \frac{1}{2}$ 和 $x > 0$ 时有 $u'(x) > 0$ , 因此 $u$ 为严格单调增加函数, 所以当 $x > 0$ 时 $u(x) < 0$ 成立. 这保证了 $f$ 在 $x > 0$ 时严格单调减少. 当 $\alpha < \frac{1}{2}$ 时, 则至少在 $x$ 充分大时 $u'(x) < 0$ , 所以有 $u(x) > 0$ . 这保证了函数 $f$ 在 $x$ 充分大时严格单调增加.

将单调性分析与连续函数的零点存在定理相结合, 就可以确定方程的根的个数. 以下是在一维动力系统的研究中出现的一个代数方程.

例题 8.2.4 证明: 对每个正整数 n, 方程 $x^{n+2}-2x^{n}-1=0$ 只有唯一正根.

证 记方程左边的表达式为 $f(x)$ . 从 $f(\sqrt{2}) = -1$ 和 $f(+\infty) = +\infty$ 可见方程有大于 $\sqrt{2}$ 的正根. 为了知道 $f$ 的单调性, 求导后得到

$$
f ^ {\prime} (x) = (n + 2) x ^ {n + 1} - 2 n x ^ {n - 1} = (n + 2) x ^ {n - 1} \left(x ^ {2} - \frac {2 n}{n + 2}\right).
$$

因此函数 $f$ 在点

$$
\xi = \sqrt {\frac {2 n}{n + 2}} (<   \sqrt {2})
$$

的导数值为0. 函数 $f$ 在区间 $[0, \xi]$ 上严格单调减少，而在区间 $[\xi, +\infty)$ 上严格单调增加。又从 $f(0) = -1$ ，就知道 $f(x) = 0$ 除了上述大于 $\sqrt{2}$ 的一个正根外没有其他正根。

例题 8.2.5 设 a > 0, 确定方程 $f(x) = ax - \ln x = 0$ 恰有两个正根的条件.

解 从 $f'(x) = a - 1 / x$ 可见在 $(0, a^{-1}]$ 上 $f$ 严格单调减少，而在 $[a^{-1}, +\infty)$ 上 $f$ 严格单调增加。又由于

$$
f (0 ^ {+}) = + \infty , f (+ \infty) = \lim _ {x \to + \infty} x \left(a - \frac {\ln x}{x}\right) = + \infty ,
$$

可见方程 $f(x)=0$ 有两个正根的条件是

$$
f \left(\frac {1}{a}\right) = 1 - \ln \frac {1}{a} <   0.
$$

由此可以确定 a 应当满足条件 $a < \frac{1}{e}$ .

## 8.2.2 练习题

1. 问: 单调函数若可微, 则其导函数是否也单调? 反之又如何? 请举例说明.

2. 证明: 函数 $\left(1 + \frac{1}{x}\right)^x$ 在区间 $(- \infty, -1)$ 和 $(0, +\infty)$ 上单调增加.

3. 设 $f$ 在 $[0, +\infty)$ 上可微, $f(0) = 0$ 且 $f'$ 严格单调增加, 证明: $\frac{f(x)}{x}$ 在 $(0, +\infty)$ 上也严格单调增加.

4. 设 $f, g$ 在 $[0, a]$ 上连续，在 $(0, a)$ 上可微， $f(0) = g(0) = 0, f', g' > 0$ ，证明：如果 $f'/g'$ 单调增加，则 $f/g$ 也单调增加。

5. 设 $f$ 在区间 $[a, +\infty)$ 上二阶可微, 并且满足条件: (1) $f(a) > 0$ ; (2) $f'(a) < 0$ ; (3) 在 $x > a$ 时 $f''(x) \leqslant 0$ , 证明: $f(x)$ 在 $(a, +\infty)$ 内有且只有一个零点.

6. 设 $f \in C[a, +\infty)$ ，且当 $x > a$ 时成立 $f'(x) > k > 0$ ，其中 $k$ 为常数，证明：若 $f(a) < 0$ ，则于区间 $(a, a - f(a) / k)$ 内方程 $f(x) = 0$ 有且只有一个实根.

7. 设 $a > 0$ , 证明: 方程 $a \mathrm{e}^{x} = 1 + x + \frac{x^{2}}{2}$ 只有一个实根.

8. 证明: 方程 $f(x) = \left(\frac{2}{\pi} - 1\right) \ln x - \ln 2 + \ln (1 + x^2) = 0$ 在开区间 (0,1) 内只有一个实根.

## §8.3 函数的极值与最值

关于极值与最值的基本事实如下:

1. 根据 7.1.1 小节给出的定义, 极值点必须是函数的定义域中的内点. 这就是说, 极值点必须有一个邻域在函数的定义域中.

2. 若函数 $f$ 在点 $x_0$ 两侧 (邻近) 均为单调, 且具有相反的单调性, 则 $x_0$ 为极值点.

3. 根据 Fermat 定理, 函数的极值点或是函数的不可导点 (包括不连续点), 或是函数的导数等于零的点.

4. 若函数 $f$ 在点 $x_0$ 处二阶可微, $f'(x_0) = 0$ , $f''(x_0) \neq 0$ , 则 $x_0$ 一定是极值点. 此时, 若 $f''(x_0) > 0$ , 则 $x_0$ 是极小值点; 而若 $f''(x_0) < 0$ , 则 $x_0$ 是极大值点.

5. 若函数 f 在点 $x_{0}$ 处为 n 阶可微, $f'(x_{0}) = f''(x_{0}) = \cdots = f^{(n-1)}(x_{0}) = 0$ , 但 $f^{(n)}(x_{0}) \neq 0$ , 则有以下结论 (证明见例题 8.3.1):

(1) 若 $n$ 为奇数, 则 $x_0$ 一定不是极值点;

(2) 若 $n$ 为偶数, 则 $x_0$ 一定是 $f$ 的极值点. 若 $f^{(n)}(x_0) > 0$ , 则 $x_0$ 是极小值点; 若 $f^{(n)}(x_0) < 0$ , 则 $x_0$ 是极大值点.

6. 以上2,4,5三项所列出的条件都是充分而非必要的条件. 目前还不知道函数在某个点达到极值的充分必要条件是什么.

7. 若函数 $f$ 在点 $x_0$ 有任意阶的导数, 而且所有这些导数值都等于 0 , 则函数仍然可能在点 $x_0$ 处达到或不达到极值. 前者的例子见例题 6.2.4, 其中的函数在点 $x = 0$ 的任意阶导数为 0 , 又在该点取到极小值 (见图 6.4). 后者的例子可以从例题 6.2.4 中的函数经适当改造后得到 (留作思考题).

8. 若函数在内点达到最值, 则同时也达到极值.

9. 在闭区间或半闭半开区间上定义的函数的最值点位置只有两种可能: (1) 端点, (2) 极值点. 这是寻找函数最值点的基本原则.

## 8.3.1 例题

例题 8.3.1 若函数 f 在点 $x_{0}$ 处 n 阶可微, 且满足条件

$$
f ^ {\prime} (x _ {0}) = f ^ {\prime \prime} (x _ {0}) = \dots = f ^ {(n - 1)} (x _ {0}) = 0, f ^ {(n)} (x _ {0}) \neq 0,
$$

则有结论: (1) 若 n 为奇数, 则 $x_{0}$ 一定不是 f 的极值点; (2) 若 n 为偶数, 则当 $f^{(n)}(x_{0}) > 0 (< 0)$ 时, $x_{0}$ 是函数 f 的极小值点 (极大值点).

证 这时 $f$ 在 $x_0$ 的Taylor公式为

$$
f (x) = f (x _ {0}) + \frac {1}{n !} f ^ {(n)} (x _ {0}) (x - x _ {0}) ^ {n} + o ((x - x _ {0}) ^ {n}) (x \rightarrow x _ {0}).
$$

将它改写成

$$
f (x) - f (x _ {0}) = \frac {1}{n !} \left[ f ^ {(n)} (x _ {0}) + o (1) \right] (x - x _ {0}) ^ {n} (x \to x _ {0}),\tag{8.3}
$$

由于 $f^{(n)}(x_0) \neq 0$ ，则存在 $\delta > 0$ ，当 $x \in O_{\delta}(x_0)$ 时，公式 (8.3) 右边的方括号中的表达式的符号完全由 $f^{(n)}(x_0)$ 确定.

若 $n$ 为奇数, 则可以从 (8.3) 看出当 $x \in (x_0 - \delta, x_0)$ 和 $x \in (x_0, x_0 + \delta)$ 时, $f(x) - f(x_0)$ 异号, 因此 $x_0$ 一定不是极值点.

若 $n$ 为偶数, 则公式 (8.3) 表明, 当 $x \in O_{\delta}(x_0) - \{x_0\}$ 时, $f(x) - f(x_0)$ 与 $n$ 阶导数 $f^{(n)}(x_0)$ 的符号一致. 因此当 $f^{(n)}(x_0) > 0$ 时, $x_0$ 是 $f$ 的极小值点. 反之, 若 $f^{(n)}(x_0) < 0$ , 则 $x_0$ 是 $f$ 的极大值点.

注 $n = 1$ 时这就是Fermat定理(命题7.1.2)，即从 $f^{\prime}(x_0)\neq 0$ 可推出 $x_0$ 不是 $f$ 的极值点.上述证明就是那里的证2.

例题 8.3.2 证明: x = 0 是 $f(x) = \mathrm{e}^{x} + \mathrm{e}^{-x} + 2 \cos x$ 的极小值点.

证 计算得到 $f'(0) = f''(0) = f'''(0) = 0$ , $f^{(4)}(0) = 4$ . 用上一命题的结论可见 x = 0 是 $f(x)$ 的极小值点. □

现在可以解决在 §2.5 中引进数 e 时所提出的下列问题.

例题 8.3.3 已知正数 a, 把它分成若干部分, 如果要求各部分的乘积达到最大, 应该怎样分法?

解 设将 $a$ 分成 $n$ 份, 然后相乘. 由平均值定理知道, 若给定 $n$ , 则应将 $a$ 分成相等的 $n$ 份最为有利. 这时所得到的乘积为

$$
\left(\frac {a}{n}\right) ^ {n}.
$$

问题是如何取 n 才能使这个乘积最大.

令 $x = \frac{a}{n}$ ，则上述乘积为 $\left(x^{\frac{1}{x}}\right)^a$ .因此所提的问题和求函数

$$
f (x) = x ^ {\frac {1}{x}} (x > 0)\tag{8.4}
$$

的最大值有密切关系.

求 $f(x)$ 的导数, 得到

$$
f ^ {\prime} (x) = f (x) \left(\frac {\ln x}{x}\right) ^ {\prime} = f (x) \cdot \frac {1}{x ^ {2}} (1 - \ln x).
$$

可见导函数 $f'(x)$ 只有一个零点 x = e. 从导函数的表达式可见, 在 $(0, e)$ 上 f 严格单调增加, 而在 $(e, +\infty)$ 上 f 严格单调减少. 因此 x = e 是函数 f 的最大值点 (见图 8.3).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/27444b447affafd9c742c8cf5e7d72581b9df465975f463168e283bb6a56fc07.jpg)



图8.3


由于在一开始时令 $x = a / n$ ，所以要求 $a / x$ 为正整数.如果 $a / \mathrm{e}$ 不是正整数，则应当取 $n$ 为多少？

若 $0 < a < \mathrm{e}$ , 则可以看出 $n = 1$ . 也就是说不分比分好. 若 $a / \mathrm{e} \notin \mathbf{N}_{+}$ 且 $a > \mathrm{e}$ , 则总可以找到一个正整数 $n$ , 使得

$$
\frac {a}{n + 1} <   \mathrm{e} <   \frac {a}{n}.
$$

然后比较 $f\left(\frac{a}{n + 1}\right)$ 和 $f\left(\frac{a}{n}\right)$ 的大小, 决定将 $a$ 分成 $n$ 份还是 $n + 1$ 份.

注1 另一个与此相关的问题是: 若 $a \in \mathbf{N}_{+}$ , 且要求所分成的每一份都是正整数, 则应当如何分才能使乘积最大?

这个问题的答案是: 首先每一份应当不是 2 就是 3, 也就是说与数 e 尽可能接近. 一旦知道这个结论后, 可以用数学归纳法来证明它, 并不需要上述微分学的知识. 然后, 由于 $2 + 2 + 2 = 3 + 3$ , 但 $2^3 < 3^2$ , 因此在将正整数 $a$ 分成若干个 2 与 3 之和时, 2 最多出现两次. 这样就将分法完全确定下来, 并保证乘积最大.

最后将分法小结如下：设 $a \in \mathbf{N}_+$ . (1) 若 $a$ 是3的倍数，则每一份为3；(2) 若 $a \equiv 1 (\bmod 3)$ ，则取两份2，其余均为3；(3) 若 $a \equiv 2 (\bmod 3)$ ，则取一份2，其余均为3.

注2 在(8.4)中的函数的最大值也可以从不等式

$$
\mathrm{e} ^ {u} \geqslant 1 + u
$$

得到, 其中仅当 $u = 0$ 时成立等号. 这从带Lagrange余项的Taylor公式 (其中 $0 < \theta < 1$ )

$$
\mathrm{e} ^ {u} = 1 + u + \frac {\mathrm{e} ^ {\theta u}}{2 !} u ^ {2} \geqslant 1 + u
$$

就可以得到. 然后令

$$
u = \frac {x - \mathrm{e}}{\mathrm{e}}
$$

代入, 略加整理, 即可得到不等式

$$
\mathrm{e} ^ {\frac {1}{\mathrm{e}}} \geqslant x ^ {\frac {1}{x}},
$$

当且仅当 $x = \mathrm{e}$ 时成立等号.

例题 8.3.4 问: 能通过图 8.4 的直角河道的最长船身是多少?

解 在图上我们看到宽度为 $a$ 和 $b$ 的河道成直角相接. 现在设想将船简化为一个直线段. 在图上经过河岸的突出角作出一条斜线段. 以图示的角度 $\theta$ 为这个线段位置的参数, $0 < \theta < \frac{1}{2}\pi$ . 可以看出, 能通过直角河道的船身长度在任何情况都不会超出这个线段的长度 $l(\theta)$ . 由于这对每个 $\theta$ 都成立, 因此能通过这个河道的最长船身不会超过

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/23dba18781a90e4e3c4da6a3bb5565563d092273511c2acfe81e0b136320a20d.jpg)



图8.4


$$
\min _ {0 <   \theta <   \frac {\pi}{2}} \{l (\theta) \}.
$$

另一方面, 可以看出, 在用一个直线段来表示船时, 只要船身不超过这个最小值, 船就能够通过这个直角河道. 所以求最大船长的问题就转变成为求函数 $l(\theta)$ 的最小值问题, 这里自变量 $\theta$ 的范围是 $\left(0, \frac{\pi}{2}\right)$ .

容易写出函数 $l(\theta)$ 的表达式：

$$
l (\theta) = a \sec \theta + b \csc \theta , 0 <   \theta <   \frac {\pi}{2}.
$$

求导得到

$$
l ^ {\prime} (\theta) = \frac {a \sin \theta}{\cos^ {2} \theta} - \frac {b \cos \theta}{\sin^ {2} \theta} = \frac {1}{\sin^ {2} \theta \cos^ {2} \theta} \cdot (a \sin^ {3} \theta - b \cos^ {3} \theta).
$$

由于当 $\theta$ 从0变到 $\frac{1}{2}\pi$ 时最后一个因子 $a\sin^3\theta - b\cos^3\theta$ 的值从 $-b$ 到 $a$ 严格单调增加, 因此 $l'(\theta)$ 存在唯一的零点

$$
\theta_ {0} = \arctan \sqrt [ 3 ]{\frac {b}{a}}.
$$

从 $l'(\theta)$ 的符号变化可见 $\theta_{0}$ 是函数 $l(\theta)$ 的最小值点.

最后计算出 $l(\theta)$ 的最小值

$$
l (\theta_ {0}) = \left(a ^ {\frac {2}{3}} + b ^ {\frac {2}{3}}\right) ^ {\frac {3}{2}},
$$

这就是能通过所示直角河道的最大船身长度. 由于我们无法考虑各种船的具体形状, 而是将船简化为一个直线段, 因此所求出的数值只有参考价值. 但是这个值肯定是能通过的船身长度的一个上界. □

## 8.3.2 练习题

1. 设 $f \in C(I)$ , $I$ 为区间, 证明: 若 $x_0 \in I$ 是 $f$ 的唯一极值点, 则 $x_0$ 一定是最值点; 又若 $x_0$ 是极小值点 (极大值点), 则它也是 $f$ 的唯一最小值点 (唯一最大值点).

2. 求出方程 $x^{3} + px + q = 0$ 有三个不同实根的充分必要条件.

3. 求出方程 $\frac{1}{x^2} + px + q = 0$ 有三个不同实根的充分必要条件.

4. 证明: $f(x) = a^{2}\mathrm{e}^{\lambda x} + b^{2}\mathrm{e}^{-\lambda x} (a, b > 0)$ 存在与 $\lambda$ 无关的极小值.

5. 证明: $y = \frac{ax + b}{cx + d}$ 若不是常值函数, 则不会有极值.

6. 比较两个数的大小: (1) $\pi^{\mathrm{e}}$ 和 $\mathrm{e}^{\pi}$ , (2) $(\sqrt{n})^{\sqrt{n+1}}$ 和 $(\sqrt{n+1})^{\sqrt{n}}$ .

7. 考虑下列几何极值问题 (能用初等方法做就不一定用微分学工具):

(1) 在面积为定值的三角形中, 什么三角形的周长最小?

(2) 在周长为定值的三角形中, 什么三角形的面积最大?

(3) 在椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ 内, 各边平行于坐标轴的内接矩形中, 面积最大的矩形的长和宽为多少?

(4) 在椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ 内, 各边平行于坐标轴的内接矩形中, 周长最大的矩形的长和宽为多少?

8. 考虑给定边界值的二阶线性非齐次微分方程

$$
y ^ {\prime \prime} + p (x) y ^ {\prime} + q (x) y = r (x), a <   x <   b, y (a) = A, y (b) = B,
$$

其中 $p, q, r$ 是给定的函数, $A$ 和 $B$ 是给定的数. 又设 $q(x) < 0, \forall x \in (a, b)$ , 证明: 如果这个微分方程在闭区间 $[a, b]$ 上存在解, 则必唯一.

注 前面与极值问题有关的材料还有 5.3.3 小节的题 9, 第五章第二组参考题 16-18.

## §8.4 函数的凸性

凸函数是有广泛应用的一类重要函数。它与凸集的研究一起已形成为一个专门的方向——凸分析。有关凸函数的试题经常在考研试卷中出现，有时在高考试卷中也会出现。本节将介绍凸函数的基本事实。关于用凸函数为工具来证明不等式则将在下一节的8.5.2小节内介绍。与积分有关的凸函数性质见第十一章中的11.2.1小节的凸函数不等式和部分参考题。

## 8.4.1 基本命题

定义 设函数 $f$ 在区间 $I$ 上定义. 若对每一对点 $x_{1}, x_{2} \in I, x_{1} \neq x_{2}$ 和每个 $\lambda \in (0,1)$ , 成立不等式

$$
f (\lambda x _ {1} + (1 - \lambda) x _ {2}) \leqslant \lambda f (x _ {1}) + (1 - \lambda) f (x _ {2}),\tag{8.5}
$$

则称 $f$ 为区间 $I$ 上的下凸函数. 又若在 (8.5) 中成立严格不等号, 则称 $f$ 为区间 $I$ 上的严格下凸函数. 若函数 $-f$ 为下凸函数 (严格下凸函数), 则称 $f$ 为上凸函数 (严格上凸函数). 下凸函数和上凸函数统称为凸函数.

注 请读者注意: 下凸函数和上凸函数的名称在我国的数学分析教学中使用已久, 它们与向下凸和向上凸的直观说法一致, 方便易记; 但也有很多教科书和其他文献使用凸函数和凹函数的名称, 因为下凸函数和上凸函数在英语中分别为 convex function 和 concave function.

凸函数的定义有明显的几何意义. 在图 8.5 中我们看到下凸条件 (8.5) 表明, 连接该函数图像 $y = f(x)$ 上的任意两点的直线段应当在相应的曲线段的上方. 在下一个命题中我们将对条件 (8.5) 作进一步的发掘, 从而得到更多的等价条件, 这在研究凸函数时非常有用.

命题8.4.1函数 $f$ 在区间 $I$ 上为下凸的充分必要条件是对于区间 $I$ 中的任意三点 $x_{1} < x_{2} < x_{3}$ , 成立不等式

$$
\frac {f (x _ {2}) - f (x _ {1})}{x _ {2} - x _ {1}} \leqslant \frac {f (x _ {3}) - f (x _ {1})}{x _ {3} - x _ {1}} \leqslant \frac {f (x _ {3}) - f (x _ {2})}{x _ {3} - x _ {2}}.\tag{8.6}
$$

又如在不等式中的不等号“≤”都改为严格的不等号“<”，则就是严格下凸的充分必要条件.

分析 在证明之前先分析条件 (8.6) 的意义.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/95090d7261cba59c17598cbad02e4d14a8aede0bad1fd7bf673fee0fee2723e4.jpg)



图8.5


如图 8.5 所示, 将坐标平面上的三个点 $(x_{1}, f(x_{1})), (x_{2}, f(x_{2})), (x_{3}, f(x_{3}))$ 记为点 A, B, C, 又用 $k(\overline{AB}), k(\overline{BC}), k(\overline{AC})$ 表示直线段 $\overline{AB}, \overline{BC}, \overline{AC}$ 的斜率, 则可以将条件 (8.6) 改写为

$$
k (\overline {{{{A B}}}}) \leqslant k (\overline {{{{A C}}}}) \leqslant k (\overline {{{{B C}}}}).\tag{8.7}
$$

但这个条件实际上含有三个不等式:

$$
k (\overline {{{A B}}}) \leqslant k (\overline {{{A C}}}), k (\overline {{{A B}}}) \leqslant k (\overline {{{B C}}}), k (\overline {{{A C}}}) \leqslant k (\overline {{{B C}}}).\tag{8.8}
$$

利用行列式计算容易得到下列等式:

$$
\begin{array}{r l} \left| \begin{array}{c c c} 1 & 1 & 1 \\ x _ {1} & x _ {2} & x _ {3} \\ f (x _ {1}) & f (x _ {2}) & f (x _ {3}) \end{array} \right| & = \left| \begin{array}{c c} x _ {2} - x _ {1} & x _ {3} - x _ {1} \\ f (x _ {2}) - f (x _ {1}) & f (x _ {3}) - f (x _ {1}) \end{array} \right| \\ & = \left| \begin{array}{c c} x _ {2} - x _ {1} & x _ {3} - x _ {2} \\ f (x _ {2}) - f (x _ {1}) & f (x _ {3}) - f (x _ {2}) \end{array} \right| \\ & = \left| \begin{array}{c c} x _ {3} - x _ {1} & x _ {3} - x _ {2} \\ f (x _ {3}) - f (x _ {1}) & f (x _ {3}) - f (x _ {2}) \end{array} \right|. \end{array}
$$

由于三个二阶行列式非负的条件恰好分别对应了(8.8)中的三个不等式,因此这三个不等式相互等价 $^{①}$ . 这样在下面命题8.4.1的证明中只需要证明下凸函数的定义和这三个不等式中的某一个等价即可.

命题8.4.1的证明（只写出下凸函数的证明，关于严格下凸函数的证明从略.)由给定的 $x_{1} < x_{2} < x_{3}$ 可以计算出

$$
\lambda = \frac {x _ {3} - x _ {2}}{x _ {3} - x _ {1}},
$$

它满足条件 $0 < \lambda < 1$ 和等式

$$
x _ {2} = \lambda x _ {1} + (1 - \lambda) x _ {3}.
$$

先证必要性. 由于 f 下凸, 有

$$
f (x _ {2}) \leqslant \lambda f (x _ {1}) + (1 - \lambda) f (x _ {3}).
$$

将 $\lambda$ 的表达式代入, 再加整理, 就得到

$$
(x _ {3} - x _ {1}) [ f (x _ {2}) - f (x _ {1}) ] \leqslant (x _ {2} - x _ {1}) [ f (x _ {3}) - f (x _ {1}) ],
$$

这就是 $k(\overline{AB}) \leqslant k(\overline{AC})$ .

再证充分性. 任取一个不等式, 例如 $k(\overline{AB}) \leqslant k(\overline{AC})$ , 就可以改写为

$$
f (\lambda x _ {1} + (1 - \lambda) x _ {3}) \leqslant \lambda f (x _ {1}) + (1 - \lambda) f (x _ {3}).
$$

由于 $x_{1} < x_{2} < x_{3}$ , 同时它们又是区间 $I$ 中的任意三点, 因此就证明了 $f$ 在 $I$ 上为下凸函数.

命题 8.4.2 开区间上的凸函数必是连续函数.

分析 先作几何观察. 不妨只讨论下凸函数. 设 $f$ 为开区间 $I$ 上的下凸函数, 点 $x_0 \in I$ . 如图8.6所示, 在开区间 $I$ 中于 $x_0$ 两侧取 $x_1 < x_0 < x_2$ , 记坐标平面上的点 $(x_1, f(x_1)), (x_0, f(x_0)), (x_2, f(x_2))$ 为 $A, B, C$ . 先从几何上分析如何可以证明 $f$ 于点 $x_0$ 右连续.

取 $x_0 < x < x_2$ ，并在图8.6上标出三个点 $a, b, c$ ，它们分别是在坐标平面上过点 $(x, 0)$ 而平行于 $y$ 轴的直线与直线段 $\overline{BC}$ 、曲线 $y = f(x)$ 和直线段 $\overline{AB}$ 的延长线的交点。容易看出，在 $x \to x_0^+$ 时，点 $a$ 和 $c$ 沿直线趋于点 $B$ ，若能证明点 $b$ 确实在 $a, c$ 之间，则证明就完成了。以下即是将这些几何上的观察翻译成分析语言。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/e78eaa592fd69f84676eca5d5da1cd0bb885b45b9fc2c1b576b2264425478a17.jpg)



图8.6


证 对 $x_{1} < x_{0} < x$ 和 $x_0 < x < x_2$ 分别应用命题8.4.1, 就得到

$$
k (\overline {{B c}}) \leqslant k (\overline {{B b}}) \leqslant k (\overline {{B a}}).\tag{8.9}
$$

由于 $x_0 < x$ ，不等式(8.9)等价于在 $a, b, c$ 三点的纵坐标之间的下列序关系：

$$
\frac {x - x _ {0}}{x _ {0} - x _ {1}} \cdot [ f (x _ {0}) - f (x _ {1}) ] + f (x _ {0}) \leqslant f (x) \leqslant \frac {x _ {2} - x}{x _ {2} - x _ {0}} f (x _ {0}) + \frac {x - x _ {0}}{x _ {2} - x _ {0}} f (x _ {2}).
$$

令 $x \to x_0^+$ , 用夹逼定理, 就得到

$$
\lim _ {x \to x _ {0} ^ {+}} f (x) = f (x _ {0}).
$$

关于 f 在点 $x_{0}$ 为左连续的证明完全类似, 从略.

注 若凸函数的定义域不是开区间, 则在端点处可以不连续. 例如,

$$
f (x) = \left\{ \begin{array}{l l} 1, & x = 0, 1, \\ 0, & 0 <   x <   1 \end{array} \right.
$$

在闭区间 $[0,1]$ 上是下凸函数, 但在端点处不连续.

命题 8.4.3 若 f 为开区间 I 上的下凸函数, 则

(1) f 处处存在有限的两个单侧导数, 而且成立不等式 $f_{-}^{\prime}(x) \leqslant f_{+}^{\prime}(x), x \in I;$ 

(2) 对任何 $x, y \in I, x < y$ , 成立不等式 $f_{-}^{\prime}(x) \leqslant f_{+}^{\prime}(x) \leqslant f_{-}^{\prime}(y) \leqslant f_{+}^{\prime}(y)$ , 由此知道 $f_{-}^{\prime}$ 和 $f_{+}^{\prime}$ 均为单调增加函数.

证 只要利用不等式(8.6)和图8.5, 8.6就够了.

(1) 利用 (8.8) 中的第一个不等式, 在图 8.6 上有 $k(\overline{Bb}) \leqslant k(\overline{BC})$ , 而且可以看出当 $x \to x_0^+$ 时, $k(\overline{Bb})$ 单调减少, 同时又以 $k(\overline{Bc})$ 为下界, 因此一定有极限. 这就证明了 $f_+(x_0)$ 存在. 类似地可以证明 $f_-(x_0)$ 的存在性.

(2) 观察图 8.5, 利用 (8.6), 再分别令 $x_{2} \to x_{1}^{+}$ 和 $x_{2} \to x_{3}^{-}$ , 由于在 (1) 中已经证明了两个单侧导数的存在性, 因此就得到 $f_{+}^{\prime}(x_{1}) \leqslant k(\overline{AC}) \leqslant f_{-}^{\prime}(x_{3})$ . 将 $x_{1}, x_{3}$ 改记为 $x, y$ 即可.

注 由于命题8.4.3的证明不需要用命题8.4.2的结论, 因此很多文献中将后者作为前者的推论得到, 即从两个单侧导数存在推出连续. 从命题8.4.2的证明可见, 直接证明连续性也是容易的.

命题 8.4.4 设 f 在区间 I 上可微, 则

(1) f 在 I 上为下凸函数的充分必要条件是 $f'$ 在 I 上为单调增加函数;

(2) f 在 I 上为严格下凸函数的充分必要条件是 $f'$ 在 I 上严格单调增加.

证 先给出 (1) 的充分性部分的证明. 利用命题 8.4.1 和对其结果 (在证明前) 的分析, 可见只需要证明对曲线 $y = f(x)$ 上自左到右的任意不同三点 $A, B, C$ 成立 $k(\overline{AB}) \leqslant k(\overline{BC})$ .

设 $f'$ 在区间 $I$ 上单调增加. 取 $x_{1}, x_{2} \in I, x_{1} < x_{2}, \lambda \in (0,1)$ . 引入

$$
x _ {\lambda} = \lambda x _ {1} + (1 - \lambda) x _ {2}.
$$

将点 $(x_{1},f(x_{1})),(x_{\lambda},f(x_{\lambda})),(x_{2},f(x_{2}))$ 分别记为 $A,B,C,$ 则就有

$$
\begin{array}{l} {k (\overline {{{A B}}}) = \frac {f (x _ {\lambda}) - f (x _ {1})}{x _ {\lambda} - x _ {1}},} \\ {k (\overline {{{B C}}}) = \frac {f (x _ {2}) - f (x _ {\lambda})}{x _ {2} - x _ {\lambda}}.} \end{array}
$$

对右边的两个差商用 Lagrange 微分中值定理, 分别得到 $f'(\xi_{1})$ 和 $f'(\xi_{2})$ , 其中

$$
\xi_ {1} \in (x _ {1}, x _ {\lambda}), \xi_ {2} \in (x _ {\lambda}, x _ {2}).
$$

由于 $\xi_{1}<\xi_{2}$ ，利用条件 $f'$ 为单调增加，因此有

$$
f ^ {\prime} (\xi_ {1}) \leqslant f ^ {\prime} (\xi_ {2}).\tag{8.10}
$$

这样就得到所要的结果

$$
k (\overline {{{{A B}}}}) \leqslant k (\overline {{{{B C}}}}).
$$

(1) 的必要性部分可由命题 8.4.3 之 (2) 得出.

关于 (2) 的证明只概述如下:

充分性部分可从上面看出. 由于 $f'$ 严格单调增加, 因此从 $\xi_1 < \xi_2$ 可见不等式 (8.10) 成立严格不等号, 即有 $k(\overline{AB}) < k(\overline{BC})$ . 由命题 8.4.1 的证明过程可知这时就保证了 $f$ 严格下凸.

又若 $f'$ 单调增加但不是严格单调增加, 则在区间 $I$ 上存在点 $x_1 < x_2$ , 使得 $f'(x)$ 在子区间 $[x_1, x_2]$ 上为常值函数, 从而 $f$ 在区间 $[x_1, x_2]$ 上是线性函数, 而不可能是严格下凸函数. 这样就完成了必要性的证明.

命题8.4.5若 $f$ 是区间 $I$ 上的可微下凸函数，则经过点 $(x_0,f(x_0))(x_0\in I)$ 的切线一定在曲线 $y = f(x)$ 的下方，即成立不等式

$$
f (x) \geqslant f (x _ {0}) + f ^ {\prime} (x _ {0}) (x - x _ {0}), \forall x \in I.
$$

又若 f 严格下凸, 则上述不等式成立等号的充分必要条件是 $x = x_{0}$ .

证 将上述不等式的右边移项到左边, 然后用 Lagrange 中值定理, 就有

$$
f (x) - f \left(x _ {0}\right) - f ^ {\prime} \left(x _ {0}\right) \left(x - x _ {0}\right) = \left(f ^ {\prime} (\xi) - f ^ {\prime} \left(x _ {0}\right)\right) \left(x - x _ {0}\right),
$$

其中 $\xi \in (x_0, x)$ 或 $(x, x_0)$ . 用命题8.4.4可见上式非负, 而在 $f$ 为严格下凸时, $f'$ 为严格单调, 因此仅当 $x = x_0$ 时为0.

注 称直线 $y = f(x_{0}) + f'(x_{0})(x - x_{0})$ 为凸函数 f 在点 $(x_{0}, f(x_{0}))$ 处的支撑线. 若去掉可微条件, 则仍存在相应的支撑线, 见 8.4.2 小节的题 11.

命题 8.4.6 设函数 f 于区间 I 上二阶可微, 则

(1) f 在 I 上为下凸函数的充分必要条件是在 I 上处处有 $f''(x) \geqslant 0$ ;

(2) $f$ 在 $I$ 上为严格下凸函数的充分必要条件是在 $I$ 上处处有 $f''(x) \geqslant 0$ , 而且在任一正长度的子区间上 $f''(x)$ 不恒等于零.

这个命题可以从命题 8.4.4 的结论直接得出, 但也可以证明如下.

证（只证明(1)）先证必要性.对区间的内点 $x$ ，取 $h > 0$ 充分小，就可以由下凸性推出不等式

$$
f (x) \leqslant \frac {1}{2} [ f (x - h) + f (x + h) ].
$$

这保证了下列极限非负:

$$
\lim _ {h \rightarrow 0} \frac {f (x + h) - 2 f (x) + f (x - h)}{h ^ {2}} = f ^ {\prime \prime} (x).
$$

对端点可由 Darboux 定理推出.

再证充分性. 如命题 8.4.4 证明一开始那样对 $x_{1} < x_{2}$ 和 $0 < \lambda < 1$ 引入 $x_{\lambda}$ , 并写出 $f(x_{1})$ 和 $f(x_{2})$ 在点 $x_{\lambda}$ 的带 Lagrange 型余项的 Taylor 公式:

$$
\begin{array}{l} f (x _ {1}) = f (x _ {\lambda}) + f ^ {\prime} (x _ {\lambda}) (x _ {1} - x _ {\lambda}) + \frac {1}{2} f ^ {\prime \prime} (\xi_ {1}) (x _ {1} - x _ {\lambda}) ^ {2}, \\ f (x _ {2}) = f (x _ {\lambda}) + f ^ {\prime} (x _ {\lambda}) (x _ {2} - x _ {\lambda}) + \frac {1}{2} f ^ {\prime \prime} (\xi_ {2}) (x _ {2} - x _ {\lambda}) ^ {2}, \end{array}
$$

其中 $\xi_1\in (x_1,x_\lambda),\xi_2\in (x_\lambda ,x_2)$ .将第一式乘 $\lambda$ 与第二式乘 $(1 - \lambda)$ 相加，利用二阶导数非负和 $x_{\lambda} = \lambda x_{1} + (1 - \lambda)x_{2}$ ，就得到所要的不等式

$$
\lambda f (x _ {1}) + (1 - \lambda) f (x _ {2}) \geqslant f (x _ {\lambda}).
$$

命题 8.4.7 (下凸函数的 Jensen (詹森) 不等式) 如 f 为区间 I 上的二阶可微下凸函数, 则对任何 $x_{1}, x_{2}, \cdots, x_{n} \in I$ 与满足条件 $\lambda_{1} + \lambda_{2} + \cdots + \lambda_{n} = 1$ 的 n 个正数 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 成立不等式

$$
\lambda_ {1} f (x _ {1}) + \lambda_ {2} f (x _ {2}) + \dots + \lambda_ {n} f (x _ {n}) \geqslant f (\lambda_ {1} x _ {1} + \lambda_ {2} x _ {2} + \dots + \lambda_ {n} x _ {n}).\tag{8.11}
$$

又若 f 严格下凸, 则上述不等式成立等号的充分必要条件是

$$
x _ {1} = x _ {2} = \dots = x _ {n}.\tag{8.12}
$$

证 记 $\overline{x} = \lambda_{1}x_{1} + \lambda_{2}x_{2} + \cdots + \lambda_{n}x_{n}$ (即数 $x_{1}, x_{2}, \cdots, x_{n}$ 的加权平均值), 并写出 $f(x_{i}) (i = 1, 2, \cdots, n)$ 在点 $\overline{x}$ 的带 Lagrange 余项的 Taylor 公式:

$$
f (x _ {i}) = f (\overline {{{x}}}) + f ^ {\prime} (\overline {{{x}}}) (x _ {i} - \overline {{{x}}}) + \frac {f ^ {\prime \prime} (\xi_ {i})}{2 !} (x _ {i} - \overline {{{x}}}) ^ {2}, i = 1, 2, \dots , n.
$$

将这 n 个公式分别乘以 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ 后相加，利用条件 $\lambda_{1} + \lambda_{2} + \cdots + \lambda_{n} = 1$ 和二阶导数非负，就得到 Jensen 不等式：

$$
\lambda_ {1} f (x _ {1}) + \lambda_ {2} f (x _ {2}) + \dots + \lambda_ {n} f (x _ {n}) \geqslant f (\overline {{{x}}}) + f ^ {\prime} (\overline {{{x}}}) (\overline {{{x}}} - \overline {{{x}}}) = f (\overline {{{x}}}).
$$

以下讨论当 f 严格下凸时, 在 Jensen 不等式中成立等号的条件.

若在上述不等式中成立等号, 则由于每个 $\lambda_{i} > 0 (i = 1, 2, \cdots, n)$ , 从以上证明过程可以看出只能是对每个 $i = 1, 2, \cdots, n$ 成立

$$
f (x _ {i}) = f (\overline {{{{x}}}}) + f ^ {\prime} (\overline {{{{x}}}}) (x _ {i} - \overline {{{{x}}}}).
$$

用命题 8.4.5, 可见只能有 $x_{i} = \overline{x}$ .

反之是明显的. 若条件 (8.12) 成立, 则对每个 $i = 1, 2, \cdots, n$ 有 $x_{i} = \overline{x}$ , 因此在上面的不等式中成立等号.

注 命题中的二阶可微条件并非必要 (作为下面的练习题 1). 但从应用来看, 用二阶导数来检验凸性较为方便. 这在 8.5.2 小节中有很多例题可供参考.

以下是一个与凸性密切相关的概念, 它在许多方面有应用.

定义 称曲线 $y = f(x)$ 上的点 $(x_0, f(x_0))$ 为拐点 (或变曲点), 如果在该点两侧邻近的曲线具有不同的严格凸性.

关于拐点的基本命题见下面练习题的最后几个题.

## 8.4.2 练习题

1. 在不假定函数 $f$ 可微的条件下, 证明 Jensen 不等式 (8.11) 仍然成立.

2. 设 $f$ 是区间 $(a, b)$ 上的上凸函数, 且 $f(x) > 0$ , 证明: 函数 $1 / f$ 是区间 $(a, b)$ 上的下凸函数. 又问: 若在上题中将 $f$ 的上凸条件改为下凸, 则有何结论? (本题的变形是对 $f$ 加上一阶可微或二阶可微条件.)

3. 设 $f, g$ 是 $(a, b)$ 上的下凸函数, 证明: $\max \{f, g\}$ 也是 $(a, b)$ 上的下凸函数.

4. 设 $f$ 和 $g$ 均为区间 $I$ 上的单调增加非负下凸函数, 证明: $f \cdot g$ 为区间 $I$ 上的下凸函数.

5. 设 f 在区间 I 上为下凸函数, 证明: $F(x) = \mathrm{e}^{f(x)}$ 也是 I 上的下凸函数.

6. 设 $f$ 和 $g$ 为 $(- \infty, + \infty)$ 上的下凸函数, 问: 复合函数 $f \circ g$ 是否一定是 $(- \infty, + \infty)$ 上的下凸函数?

7. 设 $f$ 为 $(- \infty, + \infty)$ 上的下凸函数, 证明: 或者 $f$ 为单调函数, 或者存在点 $c$ , 使得 $f$ 在 $(- \infty, c]$ 上单调减少, 而在 $[c, + \infty)$ 上单调增加.

8. 设 f 在 $(-∞,+∞)$ 上有界, 且处处有 $f''(x)≥0$ , 证明: f 只能是常值函数.

9. 设 f 在 $(a,b)$ 上 n 阶可微 $(n>2)$ ， $f^{(n)}(x)>0$ 。又有 $x_{0}\in(a,b)$ ，使对于 $k=1,2,\cdots,n-1$ 成立 $f^{(k)}(x_{0})=0$ 。证明：

(1) n 为奇数时, f 在 $(a, b)$ 上严格单调增加;

(2) n 为偶数时, f 在 $(a, b)$ 上严格下凸.

10. 设 $f$ 在开区间 $(c, d)$ 上为下凸函数, 则 $f$ 一定满足内闭的 Lipschitz 条件. (这就是说对每个有界闭区间 $[a, b] \subset (c, d)$ , 存在 $M > 0$ , 对所有 $x_{1}, x_{2} \in [a, b]$ , 成立 $|f(x_{1}) - f(x_{2})| \leqslant M|x_{1} - x_{2}|.$ )

11. 证明: $f$ 在开区间 $I$ 上为下凸函数的充分必要条件是对每个 $c \in I$ , 存在 $a$ , 使在区间 $I$ 上成立不等式 $f(x) \geqslant a(x - c) + f(c)$ (称 $y = a(x - c) + f(c)$ 为支撑线).

12. 设 $f$ 在 $[a, +\infty)$ 上为凸函数, 证明: $\lim_{x \to +\infty} \frac{f(x)}{x}$ 一定有意义.

13. 设 $f$ 在 $(- \infty, + \infty)$ 上为凸函数, 又有 $\lim_{x \to \pm \infty} \frac{f(x)}{x} = 0$ , 证明: $f$ 是常值函数.

14. 设 $f$ 是 $[a, b]$ 上的凸函数, 如果有 $c \in (a, b)$ 使得 $f(a) = f(c) = f(b)$ , 证明: $f(x)$ 是 $[a, b]$ 上的常值函数.

15. 设 $a < b < c < d$ , 证明: 若 $f$ 在 $[a, c]$ 和 $[b, d]$ 上是下凸函数, 则 $f$ 也是 $[a, d]$ 上的下凸函数.

16. 证明: 不存在三次或三次以上的奇次多项式为 $(- \infty, + \infty)$ 上的凸函数.

17. 设 $f$ 在区间 $(a, b)$ 上二阶可微, $f''$ 无零点, 证明: 对该区间内的任何两点 $a < x_1 < x_2 < b$ 用Lagrange中值定理得到 $f(x_1) - f(x_2) = f'(\xi)(x_1 - x_2)$ 时, 其中的中值 $\xi \in (x_1, x_2)$ 总是唯一的.

18. 若曲线 $y = f(x)$ 以 $(x_0, f(x_0))$ 为拐点，且存在 $f''(x_0)$ ，证明： $f''(x_0) = 0$ .

19. 问: 若已知有 $f''(x_0) = 0$ , 则点 $(x_0, f(x_0))$ 是否一定是曲线 $y = f(x)$ 的拐点?

20. 设 f 在点 $x_{0}$ 处 n (n > 2) 阶可微, 且满足条件 $f''(x_{0}) = \cdots = f^{(n-1)}(x_{0}) = 0$ , 但 $f^{(n)}x_{0} \neq 0$ , 请参考例题 8.3.1 写出点 $(x_{0}, f(x_{0}))$ 是拐点的充分必要条件并作出证明.

## §8.5 不等式

不等式在数学中十分重要, 内容极为丰富. 在本节中我们用导数为工具来证明一些不等式. 其中用凸函数为工具的例题则在 8.5.2 小节中作专门介绍. 与积分有关的不等式见 §11.2. 这方面的部分参考书为 [2, 22, 30, 48, 62, 63].

## 8.5.1 例题

例题8.5.1是用Lagrange中值定理证明不等式的典型例子.在图8.7中显示了不等式的几何意义.

例题 8.5.1 证明: 在 $x > -1, x \neq 0$ 时, 成立不等式

$$
\frac {x}{1 + x} <   \ln (1 + x) <   x.
$$

证 记 $f(x) = \ln (1 + x)$ , 从中值定理得到

$$
\ln (1 + x) = f (x) - f (0) = \frac {x}{1 + \theta x}, 0 <   \theta <   1.
$$

对 $x > 0$ 和 $-1 < x < 0$ 分别讨论就可以得到

$$
\frac {x}{1 + x} <   \frac {x}{1 + \theta x} <   x.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/1028a15c9e2ef06cc16195c822c1b0f2c56f0bd1e8afff3ae5d2b033ff90abfc.jpg)



图8.7


注 回顾第二章中的不等式 (2.16), 即

$$
\frac {1}{n + 1} <   \ln \left(1 + \frac {1}{n}\right) <   \frac {1}{n},
$$

可以看到它只是本例题在 $x = 1 / n$ 时的特例. 当时的不等式 (2.16) 来自于对数 $\mathbf{e}$ 的研究, 在那里只用了一个工具——平均值不等式.

Cauchy 中值定理在证明不等式中也有应用.

例题8.5.2 证明：对 $0 < a < b \leqslant \frac{\pi}{2}$ ，成立不等式

$$
\frac {\sin a}{a} > \frac {\sin b}{b}.
$$

证 这等价于证明函数 $\frac{\sin x}{x}$ 在区间 $(0, \frac{\pi}{2}]$ 上严格单调减少. (该函数的图像见图4.2(a)和8.8(b).) 这里用Cauchy中值定理来作出证明. 令 $f(x) = \sin x$ , $g(x) = \sin \frac{b}{a} x$ . 从Cauchy中值定理知道存在 $\xi \in (0, a)$ , 使成立

$$
\frac {\sin a}{\sin b} = \frac {f (a) - f (0)}{g (a) - g (0)} = \frac {f ^ {\prime} (\xi)}{g ^ {\prime} (\xi)}.
$$

由于 $f^{\prime}(\xi) = \cos \xi, g^{\prime}(\xi) = \frac{b}{a}\cos \frac{b}{a}\xi,$ 而 $\cos u$ 在 $0 < u < \frac{\pi}{2}$ 上严格单调减少，因此就得到所要的结果

$$
\frac {\sin a}{\sin b} = \frac {a}{b} \cdot \frac {\cos \xi}{\cos \frac {b}{a} \xi} > \frac {a}{b}.
$$

注 这个例题的证明方法很多, 这里再举出两个.

(1) 在区间 $(0, \pi/2]$ 上定义辅助函数 $F(x) = \sin x/x$ ，求导即可.

(2) 利用 8.2.2 小节的题 4, 在 $[0, \pi/2)$ 上取 $f(x) = x$ , $g(x) = \sin x$ , 由于 $f'(x)/g'(x) = \sec x$ 单调增加, 因此 $x/\sin x$ 也单调增加.

利用单调性证明不等式的例子很多. 一个典型例题就是

例题 8.5.3 证明: 在 x > 0 时, 成立 $\sin x > x - \frac{x^{3}}{6}$ .

证 令 $F(x) = \sin x - x + \frac{x^3}{6}$ ，则有 $F(0) = 0$ . 因此只要证明当 $x > 0$ 时成立 $F'(x) > 0$ ，就可以从 $F$ 单调增加知道在 $x > 0$ 时成立 $F(x) > 0$ . 由于 $F'(0) = 0$ ，又发现问题归结为证明 $F''(x) > 0 (x > 0)$ . 由于 $F''(x) = -\sin x + x$ ，可见这已满足. 由此反推即可.

证明不等式的另一个方法是将它转化为极值问题. 下面就是一个典型例子 (见 [30]), 它在本书第十二章中有用.

例题8.5.4 设 $a \geqslant 1$ , 证明: 在 $x \in [0, a]$ 时成立不等式

$$
0 \leqslant \mathrm{e} ^ {- x} - \left(1 - \frac {x}{a}\right) ^ {a} \leqslant \frac {x ^ {2}}{a} \mathrm{e} ^ {- x}.
$$

证 先证明左边的不等式 (这时只要 $a > 0$ ). 将中间的表达式记为 $f(x)$ , 则只要证明 $f$ 在区间 $[0, a]$ 上的最小值非负即可. 由于 $f(0) = 0$ , $f(a) = \mathrm{e}^{-a} > 0$ , 因此只要证明若 $f$ 有极值, 则该极值非负.

若 $f'$ 没有零点, 则无极值; 若 $f'$ 有零点, 记为 $\xi$ , 就有

$$
f ^ {\prime} (\xi) = - \mathrm{e} ^ {- \xi} + \left(1 - \frac {\xi}{a}\right) ^ {a - 1} = 0.
$$

由此即可计算出

$$
f (\xi) = \mathrm{e} ^ {- \xi} - \left(1 - {\frac {\xi}{a}}\right) ^ {a} = {\frac {\xi}{a}} \cdot \mathrm{e} ^ {- \xi} \geqslant 0.
$$

因此左边不等式成立. 对右边不等式的证明留作为 8.5.3 小节的练习题 16. □

注 在证明右边的不等式时, 如果先乘以 $\mathrm{e}^x$ , 则计算方便一些 (见 [44]). 但这不是实质性的技巧.

下面是用一元微分学对平均值不等式的一个证明．它是由 Liouville (刘维尔) 提出的 (又为后人多次“发现”)．

例题 8.5.5 用 Liouville 方法证平均值不等式, 即对非负数 $x_{1}, x_{2}, \cdots, x_{n}$ 有

$$
\frac {x _ {1} + x _ {2} + \cdots + x _ {n}}{n} \geqslant \sqrt [ n ]{x _ {1} x _ {2} \cdots x _ {n}},
$$

其中等号成立的充分必要条件是 $x_{1}=x_{2}=\cdots=x_{n}$ .

证 若在 $x_{1}, x_{2}, \cdots, x_{n}$ 中有 0 出现，则不等式已成立。同时也可看出成立等号的条件是其中每个数为 0。因此在下面设 $x_{1}, x_{2}, \cdots, x_{n}$ 全为正数。

用数学归纳法. 在 $n = 2$ 时已知成立. 现设平均值不等式对 $n$ 已成立, 讨论 $n + 1$ 的情况.

构造辅助函数

$$
y = \left(\frac {\sum_ {i = 1} ^ {n + 1} x _ {i}}{n + 1}\right) ^ {n + 1} - \prod_ {i = 1} ^ {n + 1} x _ {i},
$$

并将 $x_{n + 1}$ 看成是自变量， $y$ 是因变量. 求导得到

$$
\frac {\mathrm{d} y}{\mathrm{d} x _ {n + 1}} = \left(\frac {\sum_ {i = 1} ^ {n + 1} x _ {i}}{n + 1}\right) ^ {n} - \prod_ {i = 1} ^ {n} x _ {i}.
$$

可以看出这个导函数是 $(x_{n + 1}$ 的）严格单调增加函数.求出它的零点

$$
x _ {n + 1} = - \sum_ {i = 1} ^ {n} x _ {i} + (n + 1) \left(\prod_ {i = 1} ^ {n} x _ {i}\right) ^ {\frac {1}{n}},\tag{8.13}
$$

可见 y 在该点取到最小值. 记这个最小值为 m, 则可以计算出

$$
\begin{array}{l} m = \prod_ {i = 1} ^ {n} x _ {i} \left(\frac {\sum_ {i = 1} ^ {n + 1} x _ {i}}{n + 1} - x _ {n + 1}\right) \\ = \prod_ {i = 1} ^ {n} x _ {i} \left[ \left(\prod_ {i = 1} ^ {n} x _ {i}\right) ^ {\frac {1}{n}} + \sum_ {i = 1} ^ {n} x _ {i} - (n + 1) \left(\prod_ {i = 1} ^ {n} x _ {i}\right) ^ {\frac {1}{n}} \right] \\ = \prod_ {i = 1} ^ {n} x _ {i} \left[ \sum_ {i = 1} ^ {n} x _ {i} - n \left(\prod_ {i = 1} ^ {n} x _ {i}\right) ^ {\frac {1}{n}} \right]. \end{array}
$$

对最后一式的第二个因子用归纳假设, 可见最小值 $m \geqslant 0$ . 因此得到 $y \geqslant m \geqslant 0$ , 即已经得到了所要求证的不等式.

若在 $n+1$ 的平均值不等式中成立等号，则有 y=0，从而有 y=m=0。从 m 的表达式和归纳假设可得 $x_{1}=x_{2}=\cdots=x_{n}$ 。又由 y=m 可见 $x_{n+1}$ 满足等式 (8.13)，从而有 $x_{n+1}=x_{1}=\cdots=x_{n}$ 。

下面的 Jordan (若尔当) 不等式是关于正弦函数的一个基本不等式. 图 8.8(a) 是该不等式的几何意义, 在图 8.8(b) 中作出了证 1 中的辅助函数 $\sin x / x$ 的图像.

例题8.5.6（Jordan不等式）设 $0 \leqslant x \leqslant \frac{\pi}{2}$ ，则成立不等式 $\sin x \geqslant \frac{2}{\pi} x$ 

证1 在 $x = 0$ 时不等式已成立. 对 $0 < x \leqslant \pi / 2$ 可以引入辅助函数 (见图8.8(b))

$$
F (x) = \frac {\sin x}{x}.
$$

从例题 8.5.2 知 $F(x)$ 在 $(0, \pi/2]$ 上严格单调减少，从而在 $0 < x \leqslant \pi/2$ 时成立

$$
F \left(\frac {\pi}{2}\right) = \frac {2}{\pi} \leqslant F (x) = \frac {\sin x}{x}.
$$

这等价于所要求证的不等式.

## 证2 构造辅助函数

$$
\varphi (x) = \sin x - \frac {2}{\pi} x,
$$

则只要证明在区间 $[0, \pi / 2]$ 上函数 $\varphi(x)$ 非负.

在区间的两个端点上有

$$
\varphi (0) = \varphi \left(\frac {\pi}{2}\right) = 0.
$$

计算

$$
\varphi^ {\prime} (x) = \cos x - \frac {2}{\pi},
$$

可见 $\varphi'(x)$ 在区间 $[0, \pi/2]$ 上严格单调减少. 由于 $\varphi'(0) > 0$ , $\varphi'(\pi/2) < 0$ , 因此存在唯一的点 $\xi \in (0, \pi/2)$ , 使得 $\varphi'(\xi) = 0$ . 这样就知道在 $0 \leqslant x \leqslant \xi$ 时函数 $\varphi(x)$ 严格单调增加, 因此有 $\varphi(x) \geqslant \varphi(0) = 0$ ; 而在 $\xi \leqslant x \leqslant \pi/2$ 时 $\varphi(x)$ 严格单调减少, 因此有 $\varphi(x) \geqslant \varphi(\pi/2) = 0$ . 这样就证明了在区间 $[0, \pi/2]$ 上处处成立 $\varphi(x) \geqslant 0$ . □

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/e42a720e5884702501be0c5cc688c3dcf899ef145458e073101ec8db50d35cde.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/c2a5474c38ceacb430cb531825b5f8a3d0f791319e751f35670aa660eb19f32f.jpg)



图8.8


注 从图8.8(a)可以想到, 若 $y = \sin x$ 在 $[0, \pi/2]$ 上为上凸函数, 则就可以得到Jordan不等式. 从 $y'' = -\sin x$ 可见这是对的. 因此就得到了Jordan不等式的第三个证明.

用 Taylor 公式也是证明不等式的一种方法. 例如下一个例题中就同时提供了关于函数 $\ln (1 + x)$ 的许多不等式.

例题 8.5.7 当 x > 0 时, 证明: 对每个正整数 n 成立不等式

$$
x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots - \frac {x ^ {2 n}}{2 n} <   \ln (1 + x) <   x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots + \frac {x ^ {2 n - 1}}{2 n - 1}.
$$

证 写出函数 $\ln(1+x)$ 的带 Lagrange 余项的 Maclaurin 公式:

$$
\ln (1 + x) = x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots + (- 1) ^ {n - 1} \frac {x ^ {n}}{n} + \frac {(- 1) ^ {n}}{n + 1} \cdot \frac {x ^ {n + 1}}{(1 + \theta x) ^ {n + 1}},
$$

其中 $0 < \theta < 1$ . 由于 $x > 0$ , 右边的余项的符号由 $(-1)^n$ 决定. 当 $n$ 为偶数时该项大于 0, 而当 $n$ 为奇数时该项小于 0. 这样就得到所要求证的不等式. □

## 8.5.2 用凸性证不等式

这里的基本工具是 Jensen 不等式 (8.11) (见命题 8.4.7). 在那里已经提到, 该不等式对所有下凸函数成立, 而并不要求二阶可微的条件. 但用二阶导数的符号来验证一个给定函数是否下凸还是一个很实际的方法.

在下面的前三个不等式统称为经典不等式. 由于它们在数学中的重要性, 均作为命题给出. 第一个不等式即平均值不等式 (命题 1.3.3) 的推广.

命题 8.5.1 (广义的算术平均值 - 几何平均值不等式) 设有非负数 $x_{1}, \cdots, x_{n}$ 和正数 $\lambda_{1}, \cdots, \lambda_{n}$ ，且 $\lambda_{1} + \cdots + \lambda_{n} = 1$ ，则成立不等式

$$
\prod_ {k = 1} ^ {n} x _ {k} ^ {\lambda_ {k}} \leqslant \sum_ {k = 1} ^ {n} \lambda_ {k} x _ {k},\tag{8.14}
$$

其中当且仅当 $x_{1}=x_{2}=\cdots=x_{n}$ 时成立等号.

证 令 $f(u) = -\ln u, u > 0$ . 由于 $f''(u) = 1 / u^2 > 0$ , 因此 $f(u)$ 是严格下凸函数 (用命题8.4.6). 用Jensen不等式(8.11)得到

$$
- \ln \left(\sum_ {k = 1} ^ {n} \lambda_ {k} x _ {k}\right) \leqslant - \sum_ {k = 1} ^ {n} \lambda_ {k} \ln x _ {k}.
$$

移项并利用对数函数的单调性, 即可得到所要求证的不等式. 关于其中成立等号的条件已在命题 8.4.7 中得到证明. □

注 若取 $\lambda_{i}=1/n, i=1,2,\cdots,n,$ 就得到普通的平均值不等式. 此外, 与平均值不等式类似, 有许多不同的方法可以证明以上的广义平均值不等式.

第二个要介绍的 Hölder (赫尔德) 不等式是在第一章中的 Cauchy 不等式 (见命题 1.3.5) 的推广, 它在数学的许多领域中起重要作用, 也可以用于证明广义的平均值不等式.

命题 8.5.2 (Hölder 不等式) 设 $x_{1}, x_{2}, \cdots, x_{n}$ 和 $y_{1}, y_{2}, \cdots, y_{n}$ 均为非负数，又有 p > 1, q > 1，且满足 (共轭) 条件

$$
\frac {1}{p} + \frac {1}{q} = 1,
$$

则成立不等式

$$
\sum_ {k = 1} ^ {n} x _ {k} y _ {k} \leqslant \left(\sum_ {k = 1} ^ {n} x _ {k} ^ {p}\right) ^ {\frac {1}{p}} \left(\sum_ {k = 1} ^ {n} y _ {k} ^ {q}\right) ^ {\frac {1}{q}},\tag{8.15}
$$

其中成立等号的充分必要条件是数组 $x_{1}^{p}, x_{2}^{p}, \cdots, x_{n}^{p}$ 和 $y_{1}^{q}, y_{2}^{q}, \cdots, y_{n}^{q}$ 成比例.

证 先对于至少有一个数组中的每个数都大于 0 的情况作出证明. 为确定起见, 不妨设 $y_{1}, y_{2}, \cdots, y_{n}$ 中的每个数都大于 0, 则可证明如下.

取函数 $f(u) = u^p, u \geqslant 0$ . 由于 $f''(u) = p(p - 1)u^{p - 2} \geqslant 0$ , 因此 $f(u)$ 是严格下凸函数. 令

$$
\lambda_ {k} = \frac {y _ {k} ^ {q}}{\sum_ {i = 1} ^ {n} y _ {i} ^ {q}}, u _ {k} = x _ {k} y _ {k} ^ {1 - q}, k = 1, 2, \dots , n,
$$

并代入 Jensen 不等式 (8.11), 就有

$$
\left(\frac {\sum_ {k = 1} ^ {n} x _ {k} y _ {k}}{\sum_ {k = 1} ^ {n} y _ {k} ^ {q}}\right) ^ {p} \leqslant \sum_ {k = 1} ^ {n} \left[ \frac {y _ {k} ^ {q}}{\sum_ {i = 1} ^ {n} y _ {i} ^ {q}} \cdot (x _ {k} y _ {k} ^ {1 - q}) ^ {p} \right] = \frac {\sum_ {k = 1} ^ {n} x _ {k} ^ {p}}{\sum_ {k = 1} ^ {n} y _ {k} ^ {q}}.\tag{8.16}
$$

其中利用了 $p, q$ 满足条件 $p + q - pq = 0$ . 两边开 $p$ 次根, 并略加整理即得

$$
\sum_ {k = 1} ^ {n} x _ {k} y _ {k} \leqslant \left(\sum_ {k = 1} ^ {n} x _ {k} ^ {p}\right) ^ {\frac {1}{p}} \left(\sum_ {k = 1} ^ {n} y _ {k} ^ {q}\right) ^ {1 - \frac {1}{p}} = \left(\sum_ {k = 1} ^ {n} x _ {k} ^ {p}\right) ^ {\frac {1}{p}} \left(\sum_ {k = 1} ^ {n} y _ {k} ^ {q}\right) ^ {\frac {1}{q}}.
$$

关于在 Hölder 不等式中成立等号的条件也可从 Jensen 不等式得到, 即 $u_{1} = u_{2} = \cdots = u_{n}$ . 从 $u_{k}$ 的表达式, 可以将这个条件写成为: 存在常数 C, 使成立 $x_{k}^{p} = Cy_{k}^{q}, k = 1, 2, \cdots, n$ . 由不等式 (8.15) 的对称性, 对 $x_{1}, x_{2}, \cdots, x_{n}$ 中每个数大于 0 的情况的证明完全相同. 而在不等式中成立等号的条件可统一写成为: 存在两个不全为 0 的数 $\lambda$ 和 $\mu$ , 使成立

$$
\lambda x _ {k} ^ {p} = \mu y _ {k} ^ {q}, k = 1, 2, \dots , n.\tag{8.17}
$$

现在讨论其余情况, 即在两个数组中都有某些数为 0 的情况.

若有一个数组中的数全为 0, 则不等式 (8.15) 成立等号, 且只要在 $\lambda$ 和 $\mu$ 中取一个为 0, 就可以使得 (8.17) 成立.

对于两个数组都有部分数为 0, 但不是全为 0 的情况, 可以取定 $y_{1}, y_{2}, \cdots, y_{n}$ , 将其中为 0 的数 (以及在数组 $x_{1}, x_{2}, \cdots, x_{n}$ 中相同下标的数) 剔除, 就可以归结为前面的情况来证明. 又从不等式 (8.15) 可直接看出, 如有某个 $y_{k} = 0$ , 且在不等式中成立等号, 则相应地也一定有 $x_{k} = 0$ . 因此条件 (8.17) 仍然成立. □

第三个不等式就是下面的 Minkowski (闵可夫斯基) 不等式. 当其中的参数 $p = 2$ 时就是 $n$ 维 Euclid (欧几里得) 空间的三点不等式 (或三角形不等式).

命题 8.5.3 (Minkowski 不等式) 设 $x_{1}, x_{2}, \cdots, x_{n}$ 和 $y_{1}, y_{2}, \cdots, y_{n}$ 均为非负数, 又有 $p \geqslant 1$ , 则成立不等式

$$
\left[ \sum_ {k = 1} ^ {n} (x _ {k} + y _ {k}) ^ {p} \right] ^ {\frac {1}{p}} \leqslant \left(\sum_ {k = 1} ^ {n} x _ {k} ^ {p}\right) ^ {\frac {1}{p}} + \left(\sum_ {k = 1} ^ {n} y _ {k} ^ {p}\right) ^ {\frac {1}{p}},\tag{8.18}
$$

当且仅当数组 $x_{1}, x_{2}, \cdots, x_{n}$ 和 $y_{1}, y_{2}, \cdots, y_{n}$ 成比例时成立等号.

证 只需对 $p > 1$ 作出证明. 令 $f(u) = \left(1 - u^{\frac{1}{p}}\right)^p, 0 < u < 1$ , 并计算导数

$$
f ^ {\prime} (u) = - \left(1 - u ^ {\frac {1}{p}}\right) ^ {p - 1} u ^ {\frac {1}{p} - 1},
$$

$$
f ^ {\prime \prime} (u) = \left(1 - \frac {1}{p}\right) \left(1 - u ^ {\frac {1}{p}}\right) ^ {p - 2} u ^ {\frac {1}{p} - 2}.
$$

可见 $f(u)$ 是严格下凸函数. 令

$$
\lambda_ {k} = \frac {(x _ {k} + y _ {k}) ^ {p}}{\sum_ {i = 1} ^ {n} (x _ {i} + y _ {i}) ^ {p}}, u _ {k} = \left(\frac {x _ {k}}{x _ {k} + y _ {k}}\right) ^ {p},
$$

这里假定每个 $x_{k} + y_{k} \neq 0 (k = 1, 2, \cdots, n)$ 成立. 这使得每个 $u_{k}$ 有意义, 同时保证 $\lambda_{k} > 0$ 成立.

将上述 $\lambda_{k}, u_{k} (k = 1, 2, \cdots, n)$ 代入 Jensen 不等式 (8.11)，就有

$$
\begin{array}{r l} \left[ 1 - \left(\sum_ {k = 1} ^ {n} \frac {x _ {k} ^ {p}}{\sum_ {i = 1} ^ {n} (x _ {i} + y _ {i}) ^ {p}}\right) ^ {\frac {1}{p}} \right] ^ {p} & \leqslant \sum_ {k = 1} ^ {n} \frac {(x _ {k} + y _ {k}) ^ {p}}{\sum_ {i = 1} ^ {n} (x _ {i} + y _ {i}) ^ {p}} \cdot \left(1 - \frac {x _ {k}}{x _ {k} + y _ {k}}\right) ^ {p} \\ & = \frac {\sum_ {k = 1} ^ {n} y _ {k} ^ {p}}{\sum_ {k = 1} ^ {n} (x _ {k} + y _ {k}) ^ {p}}. \end{array}
$$

在上式两边开 p 次根并加以整理, 就可得到所要的 Minkowski 不等式.

若在该不等式中成立等号, 则从 Jensen 不等式知道有 $u_{1}=u_{2}=\cdots=u_{n}$ . 由此可得到两个数组成比例的结论.

最后, 若对某些 (但不是所有) $k$ 有 $x_{k} + y_{k} = 0$ , 则由于 $x_{k} \geqslant 0$ 和 $y_{k} \geqslant 0$ , 就有 $x_{k} = y_{k} = 0$ . 因此在将它们剔除后就可以归结为前面的情况, 而且并不影响在等号成立时两个数组成比例的结论. 对于两个数组全由 0 组成的极端情况, 命题明显成立.

注 1 在 p=2 时两个数组中的数的非负性要求可以取消. 但这时成立等号的条件应当改写为: 存在两个不全为 0 的非负数 $\lambda$ 和 $\mu$ , 使得成立

$$
\lambda x _ {k} = \mu y _ {k}, k = 1, 2, \dots , n.
$$

读者可以思考这个条件在 $n$ 维Euclid空间中的几何意义.

注 2 证明 Minkowski 不等式的方法很多, 例如用数学归纳法或 Hölder 不等式都可以证明它.

下面的不等式是第一章中的 Bernoulli 不等式 (命题 1.3.1) 的推广。它也可以用凸性来证明。读者如果对比两者的结论和所用的工具，就可以对于自己已经向前走了多远有一个了解。

命题 8.5.4 (Bernoulli 不等式) 在 x > -1 时, 对于 $0 < \alpha < 1$ 成立不等式

$$
(1 + x) ^ {\alpha} \leqslant 1 + \alpha x,
$$

而对于 $\alpha < 0$ 和 $\alpha > 1$ 则成立相反的不等式

$$
(1 + x) ^ {\alpha} \geqslant 1 + \alpha x,
$$

而且在这些不等式中仅当 x = 0 时成立等号.

证 对于函数 $f(x) = (1 + x)^{\alpha}$ 计算导数:

$$
\begin{array}{l} {f ^ {\prime} (x) = \alpha (1 + x) ^ {\alpha - 1},} \\ {f ^ {\prime \prime} (x) = \alpha (\alpha - 1) (1 + x) ^ {\alpha - 2},} \end{array}
$$

就可以知道, 当 $0 < \alpha < 1$ 时 $f(x)$ 是严格上凸函数, 而当 $\alpha < 0$ 和 $\alpha > 1$ 时 $f(x)$ 是严格下凸函数. 另一方面 $y = 1 + \alpha x$ 是曲线 $y = f(x)$ 在点 $(0,1)$ 处的切线. 应用命题8.4.5, 就有所要的不等式, 包括成立等号的条件.

## 8.5.3 练习题

1. 证明: 当 x > 1 时, 成立 $\ln x > \frac{2(x - 1)}{x + 1}$ .

2. 证明: 当 $0 < a < b$ 时, 成立不等式

$$
a \ln a + b \ln b > (a + b) \cdot [ \ln (a + b) - \ln 2 ].
$$

3. 证明: 对任意 $0 < x_{1} < x_{2}$ , 成立不等式

$$
\frac {x _ {2} - x _ {1}}{x _ {2}} <   \ln \frac {x _ {2}}{x _ {1}} <   \frac {x _ {2} - x _ {1}}{x _ {1}}.
$$

4. 证明以下不等式:

(1) $a^{\frac{x_1 + x_2 + \cdots + x_n}{n}}\leqslant \frac{1}{n} (a^{x_1} + a^{x_2} + \dots +a^{x_n})$ ，其中 $a > 0;$ 

(2) $\left(\frac{x_{1}+x_{2}+\cdots+x_{n}}{n}\right)^{p}\leqslant\frac{1}{n}(x_{1}^{p}+x_{2}^{p}+\cdots+x_{n}^{p})$ ，其中p>1;

(3) 当 $x_{1}, x_{2}, \cdots, x_{n} > 0$ 时,

$$
\frac {x _ {1} + x _ {2} + \cdots + x _ {n}}{n} \leqslant (x _ {1} ^ {x _ {1}} x _ {2} ^ {x _ {2}} \dots x _ {n} ^ {x _ {n}}) ^ {\frac {1}{x _ {1} + x _ {2} + \cdots + x _ {n}}}.
$$

5. 证明: 对于 $0 < \alpha < 1$ 和 $x > 0$ 成立 $x^{\alpha} - \alpha x + \alpha - 1 \leqslant 0$ , 而当 $\alpha > 1$ 时不等式反向成立.

6. 从命题2.5.1已知, 对每个 $n \in \mathbf{N}_{+}$ , 成立不等式

$$
\left(1 + \frac {1}{n}\right) ^ {n} \leqslant \mathrm{e} \leqslant \left(1 + \frac {1}{n}\right) ^ {n + 1}.
$$

作为进一步的发展, 求出最大的 $\alpha$ 和最小的 $\beta$ , 使得

$$
\left(1 + \frac {1}{n}\right) ^ {n + \alpha} \leqslant \mathrm{e} \leqslant \left(1 + \frac {1}{n}\right) ^ {n + \beta}, \forall n \in \mathbf {N} _ {+}.
$$

(本题与例题 8.2.3 有联系.)

7. 证明: 对 $0 < a < b$ , 成立以下不等式:

$$
a <   \frac {2}{\frac {1}{a} + \frac {1}{b}} <   \sqrt {a b} <   \frac {b - a}{\ln b - \ln a} <   \frac {a + b}{2} <   \sqrt {\frac {a ^ {2} + b ^ {2}}{2}} <   b.
$$

8. 对于 2n 个正数 $x_{1}, x_{2}, \cdots, x_{n}$ 和 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ ，且 $\lambda_{1} + \lambda_{2} + \cdots + \lambda_{n} = 1$ ，定义加权的 t 阶平均值（或 t 阶和）为

$$
M _ {t} (x, \lambda) = \left(\sum_ {i = 1} ^ {n} \lambda_ {i} x _ {i} ^ {t}\right) ^ {\frac {1}{t}}.
$$

它在 t = -1 时为调和平均值, t = 1 时为算术平均值, t = 2 时为平方平均值 (即均方根值). 又若在 $t = 0, +\infty, -\infty$ 时用极限作补充定义, 则在 t = 0 时为几何平均值, $t = +\infty$ 时为 $\max\{x\}, t = -\infty$ 时为 $\min\{x\}$ . 这样就使 $M_{t}(x, \lambda)$ 在 $-\infty \leqslant t \leqslant +\infty$ 上处处有定义. 证明: $M_{t}(x, \lambda)$ 是 t 的单调增加函数, 在 n > 1 且 $x_{1}, x_{2}, \cdots, x_{n}$ 不全相等时为 t 的严格单调增加函数.

9. 证明：若将 Minkowski 不等式 (8.18) 中的参数 $p \geqslant 1$ 的条件改为 $0 < p < 1$ ，则不等式反向成立.

10. 证明 Young (杨氏) 不等式: 若 $x, y \geqslant 0, p, q > 1, \frac{1}{p} + \frac{1}{q} = 1$ , 则成立不等式

$$
x ^ {\frac {1}{p}} y ^ {\frac {1}{q}} \leqslant \frac {x}{p} + \frac {y}{q}.
$$

11. 试用 Young 不等式证明:

(1) 广义的算术平均值-几何平均值不等式；(2) Hölder 不等式.

12. 设 $f$ 和 $\varphi$ 在 $x \geqslant a$ 时可微, $f(a) = \varphi(a)$ , 且当 $x \geqslant a$ 时, 成立 $|f'(x)| \leqslant \varphi'(x)$ , 证明: 当 $x \geqslant a$ 时, 成立 $|f(x) - f(a)| \leqslant \varphi(x) - \varphi(a)$ .

13. 设 f 满足 $f(1) = 1$ ，且当 $x \geqslant 1$ 时有 $f'(x) = \frac{1}{x^{2} + f^{2}(x)}$ 。证明：极限 $\lim_{x \to +\infty} f(x)$ 存在，且小于 $1 + \pi/4$ 。

14. 设 $A = (a_{ij})_{1 \leqslant i, j \leqslant n}$ 是每行每列的和均等于 1 的非负元素矩阵, 又有

$$
\left( \begin{array}{c} y _ {1} \\ \vdots \\ y _ {n} \end{array} \right) = A \left( \begin{array}{c} x _ {1} \\ \vdots \\ x _ {n} \end{array} \right),
$$

其中两个向量的所有元素也都是非负数, 证明: $y_{1} \cdots y_{n} \geqslant x_{1} \cdots x_{n}$ .

15. 若记

$$
T _ {n} (x) = x - \frac {1}{3 !} x ^ {3} + \dots + \frac {(- 1) ^ {n}}{(2 n + 1) !} x ^ {2 n + 1} = \sum_ {k = 1} ^ {n} \frac {(- 1) ^ {k}}{(2 k + 1) !} x ^ {2 k + 1}
$$

为 $\sin x$ 在 $x = 0$ 处的 $2n + 1$ 次Taylor多项式，证明：

$\sin x > \sum_{k=1}^{n} \frac{(-1)^{k}}{(2k+1)!} x^{2k+1}$ ，其中 x > 0, n 为奇数，

$\sin x < \sum_{k=1}^{n} \frac{(-1)^{k}}{(2k+1)!} x^{2k+1}$ ，其中 x > 0, n 为偶数.

(例题 8.5.3 是本题的一个特例. 类似地, 可以建立关于 $\cos x$ 的结果.)

16. 证明例题8.5.4中右边的不等式.

## §8.6 函数作图

在用微分学知识作函数 $y = f(x)$ 的图像时, 应注意以下基本内容:

1. 基本初等函数的图像 (中学数学中的基本内容).

2. 多项式函数 $y = a_{0}x^{n} + a_{1}x^{n-1} + \cdots + a_{n}$ 的图像, 特别是其中 n = 2, 3 时的所有可能情况, 以及 n 为奇数和偶数时的各种可能情况.

3. 利用某个函数的已知图像经过简单变换得到新的图像的方法。这里的内容有，设已知 $y = f(x)$ 的图像，求以下函数的图像：
(1) $y = f(-x)$ ; (2) $y = -f(x)$ ;
(3) $y = -f(-x)$ ; (4) $x = f(y)$ ;
(5) $y = f(x + a)$ ; (6) $y = f(kx)$ ;
(7) $y = kf(x)$ ; (8) $y = f(x) + a$ ;
(9) $y = |f(x)|$ .

4. 已知函数 $y = f(x)$ 和 $y = g(x)$ 的图像, 作出函数 $y = f(x) + g(x)$ , $y = f(x) - g(x)$ , $y = f(x) \cdot g(x)$ 的图像.

注 熟练掌握以上技巧对于作出函数的大致图像 (即所谓作草图) 有很大帮助. 作草图时不需要微分学的知识, 但是若能将作草图的方法与微分学相结合, 就可以既迅速又准确地作出函数的图像.

对于函数 $y = f(x)$ 的一般作图步骤在教科书中均有介绍, 这里不必重复. 对于用参数方程表示的函数 $x = x(t), y = y(t)$ 的作图问题, 一般是先分别作出 $x = x(t)$ 和 $y = y(t)$ 的图像, 然后再拼成为一张图 (见下面的例题). 对于用方程 $F(x, y) = 0$ 确定的隐函数, 往往引入参数 $t$ 而转化为上一问题.

## 8.6.1 例题

例题 8.6.1 作出用参数方程 $x = 2t - 4t^{3}$ , $y = t^{2} - 3t^{4}$ 给出的曲线图像.

解 $x(t)$ 和 $y(t)$ 只是 $t$ 的三次和四次多项式, 容易分别作出它们的图像如图8.9(a)、8.9(b)所示:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/33a6434a9da3ac494d43fc489a212765d75c9d9571e2dc6265bc91ac2d048ecb.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/4d27cbe64bbab969b66cbfef7b08f7615786759a6239e01c65db1a9ff816061a.jpg)



(b)



图8.9


关于三次多项式 $x(t) = 2t - 4t^3$ 的主要分析如下： $x(t)$ 是奇函数；导函数 $x_t' = 2 - 12t^2$ 的零点为 $t = \pm 1 / \sqrt{6}$ ，其中 $-1 / \sqrt{6} \approx -0.4082$ 是极小值点，极小值为 $-2\sqrt{6}/9 \approx -0.5443, 1/\sqrt{6} \approx 0.4082$ 是极大值点，极大值为 $2\sqrt{6}/9 \approx 0.5443; x(t)$ 有三个零点：0 和 $\pm\sqrt{2}/2 \approx \pm0.7071.$ 

关于四次多项式 $y = t^2 - 3t^4$ 的主要分析如下： $y(t)$ 是偶函数；导函数 $y_t' = 2t - 12t^3$ 有三个零点：0 和 $\pm 1 / \sqrt{6} \approx \pm 0.4082$ ，其中 $t = 0$ 为极小值点，极小值为 0，其他两个零点是 $y(t)$ 的极大值点，极大值为 $1/12 \approx 0.0833$ ; $y(t)$ 除了二重零点 0 之外还有两个零点： $\pm \sqrt{3}/3 \approx \pm 0.5774$ .

现在已经可以将以上分析合并以得到所要求的参数方程的图像, 这就是图8.10, 其中参数 t 的变化范围为从 -0.95 到 0.95.

图 8.10 的作法如下. 首先, 当 x 换为 -x 时, 对应的参数值 t 也反号, 但 y 是 t 的偶函数, 从而可见在 xOy 坐标系中曲线关于 y 轴对称. 因此以下只需讨论参数 t > 0 的情况. 根据 6.2.3 小节的参数方程求导法则, 就有

$$
\frac {\mathrm{d} y}{\mathrm{d} x} = \frac {y _ {t} ^ {\prime}}{x _ {t} ^ {\prime}} = t \cdot \frac {1 - 6 t ^ {2}}{1 - 6 t ^ {2}},
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/348fc45b895a473f183ac9576d97f6bf9c73e21c3db288bdb815e7ff226b159f.jpg)


因此当 $t \neq 1 / \sqrt{6} \approx 0.4082$ 时, 就得到 $\frac{\mathrm{dy}}{\mathrm{dx}} = t$ .

图8.10

从前面对 $x_{t}^{\prime}$ 和 $y_{t}^{\prime}$ 的分析已经知道当 $t = 1 / \sqrt{6}$ 时这两个导数均为0，我们将这样的点称为奇点。这是本例中的主要困难。由于关于 $y$ 轴对称，因此有两个奇点： $(\pm 2\sqrt{6} /9,1 / 12)$ ，两个坐标的近似值为 $\pm 0.5443$ 和0.0833。

当 $t$ 从0变化到 $1 / \sqrt{6}$ 时，由于 $y_{x}^{\prime} = t$ ，而 $x(t)$ 和 $y(t)$ 均为 $t$ 的严格单调增加函数，因此可以知道 $y$ 是 $x$ 的严格单调增加函数．又由于导函数 $y_{x}^{\prime}$ 也是 $x$ 的严格单调增加函数，因此 $y = y(x)$ 是下凸函数.

从同样的分析可以知道, 当 t 从 $1/\sqrt{6}$ 起增加时, y 是 x 的严格单调增加函数, 而且是上凸函数.

从前面已经得到的导数公式可以知道, 有

$$
\lim _ {t \to \frac {1}{\sqrt {6}}} \frac {\mathrm{d} y}{\mathrm{d} x} = \frac {1}{\sqrt {6}} \approx 0. 4 0 8 2,
$$

因此在奇点处存在切线. 确切地说, 在奇点 $(2\sqrt{6} / 9, 1/12)$ 的左侧邻近, 存在 $y = y(x)$ 的两个分支, 它们在 $x = 1 / \sqrt{6}$ 处存在相同的左侧导数. (这里对每一支可以应用命题7.1.7, 即单侧导数极限定理.) 我们将这样的奇点称为尖点.

根据对称性就可以得到 t < 0 时的曲线图像. 此外, 从表达式可以知道不存在任何渐近线.

值得注意的是, 参数方程 $x = x(t)$ 和 $y = y(t)$ 都是简单的多项式, 但在 $xOy$ 平面上的曲线却会出现复杂的性态. 这个例子就是在突变理论 (Catastrophe Theory) 中燕尾突变 (Swallowtail Catastrophe) 的分歧集合的图像 (见 [52]). 图 8.10 就是燕尾突变这个名称的由来. 此外, 本题又见于《数学译林》(1992) 第 4 期《数学的基本要求》一文中的题 6.

注1 以上关于凸性的结论是从导函数 $y_{x}^{\prime}$ 的单调性得到的, 即利用了命题8.4.4. 也可以直接计算出

$$
y _ {x} ^ {\prime \prime} = (y _ {x} ^ {\prime}) _ {x} ^ {\prime} = \frac {(y _ {x} ^ {\prime}) _ {t} ^ {\prime}}{x _ {t} ^ {\prime}} = \frac {1}{2 (1 - 6 t ^ {2})},
$$

然后用命题 8.4.6 作出结论.

注2 当 $t \to 0$ 时 $x(t)$ 和 $y(t)$ 均为无穷小量, 且有 $y(t) \sim \frac{1}{4} x(t)^2 (t \to 0)$ . 这是对图8.10上的曲线在原点附近的渐近描述.

注3 在[59]的第一册中, 对[27]中关于函数作图的§1.4和§2.12有较详细的讲解与分析, 并在附录1和附录2中, 利用软件PSTricks分别作出了这两节的作图题的全部答案. (附录1中的习题号为237—380, 附录2中的习题号为1471—1555.)

## 8.6.2 练习题

1. 随手画出一条曲线代表 $y = f(x)$ ，然后试画出其一阶导函数和二阶导函数的图形（本题是《数学译林》(1992) 第4期《数学的基本要求》一文中的第1题）.

2. 证明: 曲线 $y = \frac{x + 1}{x^2 + 1}$ 有位于同一直线上的三个拐点, 并作图.

3. 作出以下函数的图像:

(1) $y = \left(1 + \frac{1}{x}\right)^x (x > 0);$ (2) $y = \frac{1}{1 + x^2} \mathrm{e}^{\frac{1}{1 - x^2}};$ (3) $y = \frac{x^4}{(1 + x)^3};$ (4) $y = (1 + x^2)\mathrm{e}^{-x^2};$ (5) $y = \frac{\ln x}{x} (x > 0);$ (6) $y = x^{\frac{2}{3}}\mathrm{e}^{-x};$ (7) $y = \frac{(x - 1)^3}{(x + 1)^2};$ (8) $y = \sqrt{\frac{x^3}{x - a}} (a > 0);$ (9) $y = x^x (x > 0);$ (10) $y = x^{\frac{1}{x}} (x > 0).$ 

4. 证明: 方程 $x^{y} = y^{x}$ 在第一象限内的图像由一条直线和一条曲线组成, 并作出此图像.

5. 作出以下用参数方程给出的曲线:

(1) $x = t^2 - 2, y = t(t^2 - 2)$ ; 

(2) $x = 2t - t^2, y = 3t - t^3$ ; 

(3) $x = \frac{3t}{1 + t^3}, y = \frac{3t^2}{1 + t^3};$ 

(4) $x = t - t^3, y = 1 - t^4$ ; 

$$
x = a (t - \sin t), y = a (1 - \cos t)
$$

(6) $x = a(\cos t + t\sin t), y = a(\sin t - t\cos t)$ (圆的渐开线).

## §8.7 方程求根与近似计算

方程求根是一个很有实际意义的问题, 在本书中到目前为止也已多次出现. 实际上, 研究迭代生成数列的动机之一就是求方程的近似解. 这方面的一个基本定理就是连续函数的零点存在定理. 在例题 5.2.1 的注 2 中已经指出, 用闭区间套定理给出的二分法证明同时就提供了一种近似求根方法. 在这一节中我们将介绍 Newton (牛顿) 求根法. 它不仅对方程求根问题是一种有效的计算方法, 同时在整个计算数学领域中都是重要的基本方法. 在数学分析教材中关于方程求根的材料还可以参看 [14] 第一卷的第四章第 5 节, [26] 的第一卷第八章.

## 8.7.1 迭代算法的收敛速度

在第二章的 2.5.2 小节中已经看到, 在求自然对数的底 e 的近似值时, 不同的计算方法的效果完全不一样. 这是因为在那里的两个数列收敛于 e 的速度有明显的不同. 因此在作迭代计算时必须考虑方法的效率. 在本小节我们将引进迭代算法的阶的概念, 为下一节介绍 Newton 求根法作好准备. 同时还介绍计算圆周率的两种不同的迭代算法.

现在引入迭代算法的阶的定义. 设某个迭代算法的第 $n$ 次计算的误差为 $\varepsilon_{n}$ . 若存在一个常数 $\alpha$ , 使得接连两次的误差之间满足递推估计式

$$
k \varepsilon_ {n} ^ {\alpha} \leqslant \varepsilon_ {n + 1} \leqslant K \varepsilon_ {n} ^ {\alpha},\tag{8.19}
$$

其中 $k, K$ 为两个正常数, 则称此算法为 $\alpha$ 阶算法. 其特例之一是存在极限

$$
\lim _ {n \to \infty} \frac {\varepsilon_ {n + 1}}{\varepsilon_ {n} ^ {\alpha}} = A \neq 0,\tag{8.20}
$$

则算法的阶为 $\alpha$ 。这时当 $n$ 足够大时成立 $\varepsilon_{n+1} \approx A\varepsilon_n^\alpha$ 。又若对某个算法只知道公式 (8.19) 右边的不等式成立，则可以说该算法的阶不低于 $\alpha$ 。

对于一般的收敛数列来说, 若有 $\lim_{n\to \infty}x_n = a$ ，而误差 $\varepsilon_{n} = |x_{n} - a|(n\in \mathbf{N}_{+})$ 满足(8.19)或(8.20)，则称这个数列的收敛速度为 $\alpha$ 阶.

在 $\alpha = 1$ 时的算法称为一阶 (线性) 算法. 不难看出一阶算法的收敛速度是比较慢的. 为简单起见, 不妨设有 $\varepsilon_{n + 1} \approx C\varepsilon_n$ , $C$ 为某个正常数, 则就可以得到

$$
\varepsilon_ {n} \approx C ^ {n} \varepsilon_ {0}.\tag{8.21}
$$

可见常数 $C$ 必须小于1, 而且越小越好. 又可以看出, 为了使精度达到 $10^{-n}$ 所需的迭代次数总是 $O(n)$ 的量级.

具有一阶收敛速度的数列在第二章中很多. 从 (8.20) 可见, 只要 $\{x_{n}\}$ 为无穷小量, 且满足

$$
\lim _ {n \to \infty} \left| \frac {x _ {n + 1}}{x _ {n}} \right| = A \neq 0
$$

(参见 2.7.3 小节的第一组参考题中的题 4), 则 $\{x_{n}\}$ 就是一阶收敛于 0 的数列. (当然在第二章中还有许多收敛速度远低于一阶的数列.) 现在举出一个一阶算法的重要例子. 这就是计算圆周率的 Archimedes-刘徽算法 (见第二章第一组参考题 20).

例题8.7.1 设 $a_1 > b_1 > 0$ ，并用递推公式

$$
a _ {n + 1} = \frac {2 a _ {n} b _ {n}}{a _ {n} + b _ {n}}, b _ {n + 1} = \sqrt {a _ {n + 1} b _ {n}}, n \in \mathbf {N} _ {+}\tag{8.22}
$$

作迭代, 证明: $\{a_{n}\}$ 和 $\{b_{n}\}$ 以一阶速度收敛于同一极限.

证 在这里只对收敛速度进行分析. 应用与例题 2.3.5 中类似的方法即可证明 $\{a_{n}\}$ 和 $\{b_{n}\}$ 收敛于同一极限. 记此极限为 $A > 0$ , 即有

$$
\lim _ {n \to \infty} a _ {n} = \lim _ {n \to \infty} b _ {n} = A,
$$

又记

$$
\varepsilon_ {n} = a _ {n} - b _ {n}, n \in \mathbf {N} _ {+},
$$

则可以对收敛速度分析如下. 首先进行恒等式运算

$$
\begin{array}{r l} & a _ {n + 1} ^ {2} - b _ {n + 1} ^ {2} = a _ {n + 1} ^ {2} - a _ {n + 1} b _ {n} = a _ {n + 1} (a _ {n + 1} - b _ {n}) \\ & \qquad = a _ {n + 1} \cdot \frac {2 a _ {n} b _ {n} - b _ {n} (a _ {n} + b _ {n})}{a _ {n} + b _ {n}} = \frac {a _ {n + 1} b _ {n} (a _ {n} - b _ {n})}{a _ {n} + b _ {n}}, \end{array}
$$

因此得到

$$
\varepsilon_ {n + 1} = \frac {a _ {n + 1} b _ {n}}{(a _ {n + 1} + b _ {n + 1}) (a _ {n} + b _ {n})} \cdot \varepsilon_ {n}.
$$

利用 $\{a_{n}\}$ 和 $\{b_{n}\}$ 收敛于同一极限 $A > 0$ ，就有近似估计

$$
\varepsilon_ {n + 1} \approx \frac {1}{4} \varepsilon_ {n},
$$

因此收敛速度为一阶.

注1 若取 $a_1 = 2\sqrt{3}, b_1 = 3$ ，即单位圆的外切和内接正六边形的半周长，可以证明极限 $A = \pi$ 。这就是计算圆周率的Archimedes-刘徽算法。从以上分析有

$$
\left(\frac {1}{4}\right) ^ {5} = \frac {1}{2 ^ {1 0}} \approx 0. 0 0 1,
$$

可见这种算法每迭代5次大致可以增加3位新的有效数字. 这个估计与用这个算法求 $\pi$ 的大量实际计算完全符合.

注2 Archimedes-刘徽算法有个变形: 令 $A_{n} = 1 / a_{n}, B_{n} = 1 / b_{n}$ , 有递推式:

$$
A _ {n + 1} = \frac {A _ {n} + B _ {n}}{2}, B _ {n + 1} = \sqrt {A _ {n + 1} B _ {n}}.\tag{8.23}
$$

与算法 (8.22) 比较, 每次迭代的计算量少得多. 但是这个改进并没有提高收敛速度. 若仍令 $\varepsilon_{n} = B_{n} - A_{n}$ , 则还是得到 $\varepsilon_{n+1} \approx \frac{1}{4} \varepsilon_{n}$ .

当 $\alpha = 2$ 时算法为二阶收敛(也称为平方收敛).这时情况大不相同.为简便起见，只考虑误差递推估计的单侧不等式

$$
\varepsilon_ {n + 1} \leqslant K \varepsilon^ {2}.\tag{8.24}
$$

上式两边乘以常数 $K$ ，就有 $K\varepsilon_{n + 1} \leqslant (K\varepsilon_n)^2$ 。因此可以继续做下去，得到

$$
K \varepsilon_ {n + 1} \leqslant (K \varepsilon_ {n}) ^ {2} \leqslant (K \varepsilon_ {n - 1}) ^ {4} \leqslant \dots \leqslant (K \varepsilon_ {0}) ^ {2 ^ {n + 1}}.
$$

这样就得到

$$
\varepsilon_ {n} \leqslant \frac {1}{K} (K \varepsilon_ {0}) ^ {2 ^ {n}}.\tag{8.25}
$$

这里的常数 K 不一定要小于 1, 只要取初始值足够好, 使得 $K\varepsilon_{0}<1$ 即可. 这时在公式 (8.25) 右边的表达式收敛于 0 的速度是非常快的.

下一个例题是对在第二章中的例题 2.3.5 (其中的极限是 Gauss 的算术几何平均值) 进行收敛速度的分析.

例题8.7.2 从 $0 < b < a$ 出发, 设 $a_0 = a, b_0 = b$ , 并用递推公式

$$
a _ {n} = \frac {a _ {n - 1} + b _ {n - 1}}{2}, b _ {n} = \sqrt {a _ {n - 1} b _ {n - 1}}, n \in \mathbf {N} _ {+}\tag{8.26}
$$

作迭代, 证明: $\{a_{n}\}$ 和 $\{b_{n}\}$ 以二阶速度收敛于同一极限.

证 记极限为 $AG(a,b),\varepsilon_n = a_n - b_n,n\in \mathbf{N}_+$ .利用恒等式

$$
a _ {n + 1} ^ {2} - b _ {n + 1} ^ {2} = \frac {1}{4} (a _ {n} - b _ {n}) ^ {2},
$$

就可以得到

$$
\varepsilon_ {n + 1} = \frac {1}{4 (a _ {n + 1} + b _ {n + 1})} \varepsilon_ {n} ^ {2} \approx \frac {1}{8 A G (a , b)} \varepsilon_ {n} ^ {2},
$$

因此是二阶算法.

注 迭代公式 (8.26) 与 (8.23) 很相似, 但实际上收敛速度完全不同.

在 1976 年出现了 Salamin - Brent 算法. 它就是以 (8.26) 和上述分析为基础的. 由于收敛速度快, 因此成为一类重要的算法, 具有广泛的应用. 自此以后计算圆周率 $\pi$ 的新纪录很多都是用这类新算法得到的. 目前已经有计算 $\pi$ 的任意高阶的算法. 下面列出计算 $\pi$ 的二阶算法中的一个算法, 以及它的计算效果. 关于它以及其他有关材料可以从 [4, 1] 中找到, 还可以参看 [60] 第六章的圆周率及其计算.

Salamin - Brent 算法: 令 $a_0 = 1, b_0 = s_0 = \frac{1}{\sqrt{2}}$ , 并用递推公式

$$
\begin{array}{l} {a _ {n} = \frac {a _ {n - 1} + b _ {n - 1}}{2},} \\ {b _ {n} = \sqrt {a _ {n - 1} b _ {n - 1}},} \\ {s _ {n} = s _ {n - 1} - 2 ^ {n} (a _ {n} ^ {2} - b _ {n} ^ {2}),} \\ {p _ {n} = \frac {2 a _ {n} ^ {2}}{s _ {n}}} \end{array}
$$

作迭代, 则 $\{p_n\}$ 二阶收敛于 $\pi$ .

它的计算结果为

<table><tr><td>迭代次数</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td><eq>\cdots</eq></td><td>25</td></tr><tr><td>有效位数</td><td>1</td><td>4</td><td>9</td><td>20</td><td>42</td><td>85</td><td>173</td><td>347</td><td>697</td><td><eq>\cdots</eq></td><td><eq>\geqslant 4.5 \times 10^{6}</eq></td></tr></table>

从上面的计算结果可以看到, 每迭代一次, 有效位数几乎增加一倍. 实际上, 这是二阶算法的共同特征. 从公式 (8.24) 可以知道, 若常数 $K < 1$ , 则一定如此. 这在下面的简单例题中可以看得很清楚.

例题 8.7.3 从初始值 $x_{0}=1$ 开始, 用迭代算法

$$
x _ {n + 1} = \frac {1}{2} x _ {n} + \frac {1}{x _ {n}}
$$

求无理数 $\sqrt{2}$ 的近似值, 观察有效位数的增长情况.

解 前几个值很容易计算:

$$
x _ {2} = 1. 5, x _ {3} \approx 1. 4 1 7, x _ {4} \approx 1. 4 1 4 2 1 6.
$$

与 $\sqrt{2}=1.414\ 213\ 562\ 3\cdots$ 比较, 可见有效位数分别为 1, 3, 6. 为了继续计算下去, 我们需要使用如 Mathematica 那样的软件. 具体地说, 即每次将 $x_{n}$ 与 $\sqrt{2}$ 都计算到足够多的位数, 然后进行比较, 从而确定第 n 次近似值 $x_{n}$ 的有效位数. 这里只列出实际计算结果:

<table><tr><td>迭代次数</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>有效位数</td><td>1</td><td>3</td><td>6</td><td>12</td><td>25</td><td>49</td><td>98</td><td>196</td></tr></table>

实际上, 不难直接验证在这个例题中的迭代算法确实为二阶算法. 用 §2.5 的方法知数列 $\{x_{n}\}$ 从 $x_{2}$ 起严格单调减少收敛于 $\sqrt{2}$ . 然后估计迭代误差

$$
0 <   \varepsilon_ {n + 1} = x _ {n + 1} - \sqrt {2} = \frac {1}{2} x _ {n} + \frac {1}{x _ {n}} - \sqrt {2} = \frac {(x _ {n} - \sqrt {2}) ^ {2}}{2 x _ {n}} \approx \frac {1}{2 \sqrt {2}} \varepsilon_ {n} ^ {2},
$$

可见恰好为二阶算法.

我们即将看到, 这个开平方根的算法就是 Newton 求根法的一个例子.

## 8.7.2 Newton 求根法

可以从不同的角度来导出 Newton 求根法 (也称为 Newton - Raphson (拉弗森) 求根法). 第一种推导方法完全来自于 Newton 求根法的几何意义. 从图 8.11 上可以看出已有 $f(a) < 0$ 和 $f(b) > 0$ , 因此从连续函数的零点存在定理知道在区间 $(a, b)$ 内方程 $f(x) = 0$ 一定有根. 在图上记这个根为 $\xi$ . 问题是如何计算出根 $\xi$ 的近似值.

以 $b = x_0$ 为初值, 在点 $B(b, f(b))$ 作曲线 $y = f(x)$ 的切线, 与 $x$ 轴的交点记为 $x_1$ . 然后再在点 $(x_1, f(x_1))$ 作曲线 $y = f(x)$ 的切线, 与 $x$ 轴交于点 $x_2$ . 如此进行下去, 不难得到一般的递推公式是

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-16/c53cefa4-1110-4245-9711-8dd6251b9593/82413dd753556270fb8d927f5911289d8dcb5325506fd39e3327cae400e2350f.jpg)


$$
x _ {n + 1} = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})}.
$$


图8.11


(8.27) 

从图8.11可以看出, 所得到的数列 $\{x_{n}\}$ 有可能会很快收敛到方程 $f(x)=0$ 的根 $\xi$ . 这就是 Newton 求根法, 也称为 Newton 切线法.

但这里实际上有许多问题需要研究. 首先, 若设方程 $f(x) = 0$ 在区间 $(a, b)$ 中只有唯一的一个根 $\xi$ , 是否一定成立

$$
\lim _ {n \to \infty} x _ {n} = \xi .
$$

其次, 这个算法的收敛速度如何? 此外还有一个如何取初始值的问题. 在图 8.11 上从点 $A(a, f(a))$ 也作出了曲线 $y = f(x)$ 的切线, 但它与 $x$ 轴的交点 (在图上未画出) 很可能会越出函数 $f(x)$ 的定义域.

可以从完全不同的角度导出 Newton 求根法. 例如, 假定已得到根 $\xi$ 的第 $n$ 个近似值 $x_{n}$ , 又设 $f$ 二阶可微, 则可以写出带 Lagrange 余项的 Taylor 展开式:

$$
0 = f (\xi) = f (x _ {n}) + f ^ {\prime} (x _ {n}) (\xi - x _ {n}) + \frac {f ^ {\prime \prime} (\theta_ {n})}{2} (\xi - x _ {n}) ^ {2},\tag{8.28}
$$

其中的中值 $\theta_{n}$ 在 $x_{n}$ 和 $\xi$ 之间. 在公式 (8.28) 中弃去右边的最后一项, 并将由此得到的根 $\xi$ 的近似值记为 $x_{n+1}$ , 就得到了前面已有的公式 (8.27). 在将 Newton 求根法推广到高维空间时用这种局部线性化的方法没有本质上的困难.

现在给出保证 Newton 求根法能够成功的一组充分条件, 并证明它的收敛速度恰好是二阶. 为直观起见, 下面所述的条件均与图 8.11 一致. 读者可自行写出与这组充分条件平行的其他充分条件.

命题 8.7.1 设函数 $f(x)$ 在区间 $[a, b]$ 上二阶连续可微，且满足以下条件

(1) $f(a) < 0$ , $f(b) > 0$ ; 

(2) $f'(x) > 0, \forall x \in [a, b];$ 

(3) $f''(x) > 0, \forall x \in [a, b];$ 

(4) 取 $x_0 = b$ 为初始值;

那么就有

(1) 方程 $f(x)=0$ 在区间 $(a,b)$ 内存在唯一的根 $\xi;$ 

(2) 由递推公式 (8.27) 得到的数列 $\{x_{n}\}$ 是在区间 $[a, b]$ 中的严格单调减少数列, 且以 $\xi$ 为极限;

(3) 数列 $\{x_{n}\}$ 的收敛速度为二阶.

证 从连续函数的零点存在定理知道方程 $f(x) = 0$ 在 $(a, b)$ 中有根. 从 $f'(x)$ 在区间上处处大于 0 可知函数 $f(x)$ 严格单调增加, 因此方程的根唯一.

从公式 (8.28) 和 $f''(x) > 0, \forall x \in [a, b]$ 可见, 成立

$$
f (x _ {n}) + f ^ {\prime} (x _ {n}) (\xi - x _ {n}) <   0, \forall n \in \mathbf {N} _ {+}.
$$

由此即可得到

$$
\xi <   x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})} = x _ {n + 1}, \forall n \in \mathbf {N} _ {+}.
$$

从递推公式 (8.27) 又可看出只要 $f(x_{n}) > 0$ ，就有

$$
x _ {n + 1} <   x _ {n}
$$

成立. 由于初始值 $x_0 = b$ 处有 $f(b) > 0$ , 而当 $x_n > \xi$ 时就有 $f(x_n) > 0$ , 因此就保证了数列 $\{x_n\}$ 是严格单调减少数列, 且以 $\xi$ 为下界. 记该数列的极限为 $\eta$ , 在公式 (8.27) 两边令 $n \to \infty$ , 得到

$$
\eta = \eta - \frac {f (\eta)}{f ^ {\prime} (\eta)},
$$

可见 $f(\eta) = 0$ 。由于方程 $f(x) = 0$ 在 $[a, b]$ 中的根唯一，因此 $\eta = \xi$ 。这样就证明了 Newton 求根法所得到的迭代数列 $\{x_n\}$ 收敛于方程在区间 $[a, b]$ 中的唯一根。

现在用 Taylor 公式 (8.28) 估计迭代误差

$$
\begin{array}{r l} 0 <   x _ {n + 1} - \xi & = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})} - \xi \\ & = \frac {(x _ {n} - \xi) f ^ {\prime} (x _ {n}) - f (x _ {n})}{f ^ {\prime} (x _ {n})} \\ & = \frac {f ^ {\prime \prime} (\theta_ {n}) (x _ {n} - \xi) ^ {2}}{2 f ^ {\prime} (x _ {n})}, \end{array}
$$

其中 $\theta_{n}\in (\xi ,x_{n})$ .利用 $f^{\prime \prime}$ 连续且处处大于0，就有

$$
\lim _ {n \to \infty} \frac {x _ {n + 1} - \xi}{(x _ {n} - \xi) ^ {2}} = \frac {f ^ {\prime \prime} (\xi)}{2 f ^ {\prime} (\xi)} \neq 0,
$$

因此 $\{x_{n}\}$ 二阶收敛于 $\xi$ .

注1 容易看到在命题中的某些条件可以放宽, 而仍保证迭代数列为二阶收敛或不低于二阶收敛. 但另一方面也可以举出各种例子, 说明在4个条件中的某些条件不成立时, Newton 求根法可能失败. 一般而言, Newton 求根法在有拐点、重根和多根时会有困难.

注2 不难得到 Newton 求根法的先验估计和事后估计 (可以与命题 3.4.4, 即压缩映射原理中的结果作比较). 由于 $f$ 在 $[a, b]$ 上二阶连续可微, 因此在命题的条件下 $f''$ 在 $[a, b]$ 上有最大值 $M > 0$ , 而 $f'(x)$ 在 $[a, b]$ 上有最小值 $m = f'(a) > 0$ . 从证明中关于迭代误差的估计有

$$
| x _ {n + 1} - \xi | \leqslant \frac {M}{2 m} | x _ {n} - \xi | ^ {2},
$$

代入公式 (8.25) 就得到

$$
| x _ {n} - \xi | \leqslant {\frac {2 m}{M}} \left({\frac {M}{2 m}} | x _ {0} - \xi |\right) ^ {2 ^ {n}}.
$$

在计算前, 用它可以估计为达到指定精度所需的迭代次数, 即先验估计.

注意: 为了满足 $\frac{M}{2m}|x_{0}-\xi|<1$ 的要求, 区间 $[a,b]$ 的长度应当满足不等式

$$
b - a <   \frac {2 m}{M}.
$$

但从命题的证明知道, 即使这个条件不成立, 迭代数列仍然二阶收敛.

再利用Lagrange中值定理得到

$$
| f (x _ {n}) - f (\xi) | = | f (x _ {n}) | \geqslant m | x _ {n} - \xi |,
$$

又用Taylor公式有

$$
\begin{array}{r l} f (x _ {n}) & = f (x _ {n - 1}) + f ^ {\prime} (x _ {n - 1}) (x _ {n} - x _ {n - 1}) + \frac {f ^ {\prime \prime} (\eta)}{2} (x _ {n} - x _ {n - 1}) ^ {2} \\ & = \frac {f ^ {\prime \prime} (\eta)}{2} (x _ {n} - x _ {n - 1}) ^ {2}, \end{array}
$$

其中 $\eta$ 在 $x_{n}$ 与 $x_{n - 1}$ 之间，就可以得到

$$
| x _ {n} - \xi | \leqslant {\frac {1}{m}} | f (x _ {n}) | \leqslant {\frac {M}{2 m}} | x _ {n} - x _ {n - 1} | ^ {2}.
$$

这可用于从相继两次计算的结果去估计当时的误差大小, 即事后估计.

例题8.7.4用Newton求根法导出开平方根的迭代算法.

解 设要求正数 $A$ 的平方根. 取函数 $f(x) = x^2 - A$ , 求 $\sqrt{A}$ 的问题就成为方程求根问题了. 将 $f$ 代入迭代公式 (8.27) 中, 就得到

$$
x _ {n + 1} = x _ {n} - \frac {x _ {n} ^ {2} - A}{2 x _ {n}} = \frac {x _ {n}}{2} + \frac {A}{2 x _ {n}}.
$$

注1 在 $A = 2$ 时就得到例题8.7.3中的算法. 实际上本题的算法已在2.6.3小节的练习题8中出现. 其中练习题9还给出了求平方根的一个三阶算法.

注2 这个算法的历史可以上溯到古代巴比伦文明（见[35]）。其思路可能是：如果 $x$ 是 $\sqrt{A}$ 的一个近似值，那么 $A / x$ 也是一个近似值，这两个近似值的乘积等于 $A$ ，而且分别在 $\sqrt{A}$ 的两侧，因此取算术平均值可能会得到更好的结果。

## 8.7.3 练习题

本节的计算题应当根据在学习中所能使用的计算工具来安排. 下面的题中只有第 1 题是计算题, 且只需用计算器.

1. 用 Newton 求根法计算 (要求精确到 0.0001):

(1) $x^{3} - 2x^{2} - 4x - 7 = 0$ 在[3,4]之间的根的近似值；

(2) $\sin x = 1 - x$ 的根的近似值.

2. 在命题 8.7.1 中给出了保证 Newton 求根法成功的充分条件, 其中共有 4 项要求. 试举出例子, 说明不满足其中的某些要求时, 用 Newton 求根法有可能失败.

3. 证明: 在例题 5.2.1 中提供的二分法是方程求根的一阶算法.

4. 证明: 2.6.3 小节的题 9 中的算法是求平方根的三阶算法.

5. 设 $A > 0$ , 为计算立方根 $\sqrt[3]{A}$ , 从 $x_0 > 0$ 出发用递推公式

$$
x _ {n + 1} = \frac {x _ {n} (x _ {n} ^ {3} + 2 A)}{2 x _ {n} ^ {3} + A}
$$

作迭代, 证明数列 $\{x_{n}\}$ 收敛, 求出其极限, 并确定其收敛的阶.

6. 用 Newton 求根法设计一个求 $\sqrt[k]{A} (A > 0, k > 0)$ 的迭代算法, 并对其收敛速度作出分析.

7. 用 Newton 求根法设计一个求 $\frac{1}{A}$ 的迭代算法, 其中只用加法和乘法运算, 并对其收敛速度作出分析.

## §8.8 对于教学的建议

微分学的应用极其广泛, 本章只介绍了其中的一部分内容, 主要是对于函数的研究, 还包括极限计算与方程求根的近似计算方法. 其他如曲率、渐屈线与渐伸线等在几何学上的应用均未收入. 有需要的读者可以从 [14, 8, 27, 59, 72] 等文献中找到微分学应用方面的更多材料.

## 8.8.1 学习要点

1. L'Hospital 法则无疑是求函数极限的首选工具. 但是若使用不当则会带来复杂的计算. 如何能综合使用包括 Taylor 公式在内的各种方法, 初学者需要通过大量的训练才能掌握. 今后学了积分学和无穷级数等知识后, 还会提供计算极限的许多新工具. 因此计算极限这一主题并非到此为止. 复习考研的学生尤其要注意这一点.

2. 函数的单调性分析 (即确定其单调区间) 以及函数极值和最值的确定, 这些都是函数研究中的基本问题. 这方面可以参考 [27, 59] 的 §2.7, §2.11. 对具有实际背景的极值应用题感兴趣的读者, 可以从 [27, 59] 的 §2.13 得到丰富多彩的材料 (例题 8.3.4 即是 [27] 中的习题 1587).

3. 凸函数在数学中是一类很重要的函数, 在理论和应用上均有其独特的地位. 有关凸函数的考题在考研中也是常见的. 本章对凸函数和有关的不等式作了基本的介绍. 请读者注意其中每个结论均有明显的几何意义, 由此出发不难掌握有关的结论和证明. 此外, 在凸函数中的许多有关问题可以从不利用导数、利用一阶导数和利用二阶导数三个层次来进行研究. 一个典型例子就是在本书中出现多次的Jensen不等式(即命题8.4.7).

4. 不等式在几乎每个数学领域中都是一个重要主题. 可以看出, 与本书第一章 §1.3 的初等不等式相比, 在本章中我们对不等式的认识上升到了一个全新的水平. 事实上在今后, 随着数学分析 (以及其他课程) 的学习, 不等式会一再出现, 在内容和方法上都会有层出不穷的新东西. 例如在 8.5.2 小节中的三个经典不等式在积分学和无穷级数中就都会遇到. 这方面的内容极其丰富, §8.5 是用微分学来研究不等式, 在后面的 §11.2 则是用积分学来研究不等式. 应当指出, [30] 是我国学者所写的不等式方面的专著, 材料极其丰富, 很有参考价值.

5. 微分学在函数作图方面的应用是明显的。但是应当看到，除了用微分学的作图方法之外，还存在另一种作草图的简便方法。这就是利用曲线的“四则运算”和移位、按比例放大缩小等技巧，将曲线的大致趋势迅速确定出来。值得注意的是在部分教科书中还专门介绍了这个方法（例如见 [42, 72]）。在经典习题集 [27] 中为此将这两种不同的作图方法的练习分别安排在 §1.4 和 §2.12 中。希望上习题课的教师注意不要漏掉这方面的训练。在 [59] 的 §1.4 和 §2.12 有很多详细解答的例题可供参考。

6. 近似计算问题应当在数学分析的教学中占有一定的分量。尽早培养学生在这方面的意识是数学分析在今后的改革方向之一。从第二章开始，本书注意了介绍这方面的内容。当然这里还有许多不足之处。若有可能，希望在数学分析的教学中加入简单编程计算和使用 Mathematica 等软件的内容。实际上本书的部分例题就是用 Mathematica 来计算的（例如例题 8.7.3）。

7. 对习题课的建议 本章习题课的材料很丰富, 都比较具体. 需要注意的是不要在习题课上草草过场, 对有关材料要充分展开. 通过应用微分学解决实际问题, 让学生加强应用的意识, 提高应用的能力. 凸函数、不等式都是很重要的题材, 需要在习题课上专门花时间训练.

## 8.8.2 参考题

## 第一组参考题

1. (1) 设 $\lim_{x\to +\infty}[f(x) + f'(x)] = 0$ ，证明： $\lim_{x\to +\infty}f(x) = 0;$ 

(2) 设 $|f(x) + f'(x)| \leqslant 1$ , $f(x)$ 在 $(- \infty, + \infty)$ 上有界, 证明: $|f(x)| \leqslant 1$ .

2. 设 $f(x)$ 在 $x = 0$ 的某邻域上二阶可微, 且 $\lim_{x \to 0} \left(1 + x + \frac{f(x)}{x}\right)^{\frac{1}{x}} = \mathrm{e}^3$ . 求 $f(0), f'(0), f''(0)$ 和 $\lim_{x \to 0} \left(1 + \frac{f(x)}{x}\right)^{\frac{1}{x}}$ .

3. 例题8.1.10可以推广如下：设正数数列 $\{x_{n}\}$ 为满足递推公式 $x_{n + 1} = f(x_n)$ 的无穷小量，函数 $f$ 有Maclaurin展开式 $f(x) = x + Ax^{k} + o(x^{k})(x\to 0)$ ，其中 $k$ 为大于1的某正整数，系数 $A\neq 0$ ，证明：有 $\alpha >0$ ，使得存在非零极限 $\lim_{n\to \infty}nx_n^\alpha$ 并求出此极限.

4. 设 $f \in C[a, b]$ ，证明： $f$ 在 $(a, b)$ 内没有极值点的充分必要条件是 $f$ 在区间 $[a, b]$ 上为严格单调函数.

5. 证明关于三点不等式 (命题 1.3.4) 的一个推广: 在 $0 < p < 1$ 时, 成立不等式

$$
| a + b | ^ {p} \leqslant | a | ^ {p} + | b | ^ {p}.
$$

6. 证明: 对每个正整数 $n$ , 成立不等式

$$
\frac {\mathrm{e}}{2 n + 2} <   \mathrm{e} - \left(1 + \frac {1}{n}\right) ^ {n} <   \frac {\mathrm{e}}{2 n + 1}.
$$

7. 证明: 当 $0 < x < \frac{\pi}{2}$ 时, 成立不等式 $\left(\frac{\sin x}{x}\right)^3 > \cos x$ .

8. 证明: 当 $0 < x < \frac{\pi}{2}$ 时, 成立不等式 $2\sin x + \tan x > 3x$ .

9. 证明: 当 $0 < x < 1$ 时, 成立不等式

$$
\pi <   \frac {\sin \pi x}{x (1 - x)} \leqslant 4.
$$

10. 证明: 当 $x \in [0, \pi/2]$ 时, 成立比 Jordan 不等式 (例题 8.5.6) 更好的结果:

$$
\sin x \geqslant {\frac {2}{\pi}} x + {\frac {1}{1 2 \pi}} x (\pi^ {2} - 4 x ^ {2}).
$$

11. 证明: 对 n 个正数 $x_{1}, x_{2}, \cdots, x_{n}$ ，成立不等式

$$
\frac {x _ {1} x _ {2} \cdots x _ {n}}{(x _ {1} + x _ {2} + \cdots + x _ {n}) ^ {n}} \leqslant \frac {(1 + x _ {1}) (1 + x _ {2}) \cdots (1 + x _ {n})}{(n + x _ {1} + x _ {2} + \cdots + x _ {n}) ^ {n}},
$$

并讨论成立等号的条件.

12. 证明: 当 $x \in \left(0, \frac{\pi}{4}\right)$ 时, 成立 $(\sin x)^{\cos x} < (\cos x)^{\sin x}$ ; 而在 $x \in \left(\frac{\pi}{4}, \frac{\pi}{2}\right)$ 时, 不等式反向.

13. 设 p > 1, a, b > 0, 证明:

(1) 当 $t > 0$ 时, 成立

$$
\frac {1}{p} t ^ {\frac {1}{p} - 1} a + (1 - \frac {1}{p}) t ^ {\frac {1}{p}} b \geqslant a ^ {\frac {1}{p}} b ^ {1 - \frac {1}{p}};
$$

(2) 当 0 < t < 1 时, 成立

$$
t ^ {1 - p} a ^ {p} + (1 - t) ^ {1 - p} b ^ {p} \geqslant (a + b) ^ {p}.
$$

14. 设 $p(x)$ 为三次多项式, $p(a) = p(b) = 0$ , 证明: $p(x)$ 在 $[a, b]$ 上不变号的充分必要条件是 $p'(a)p'(b) \leqslant 0$ .

15. 证明在 $\mathbf{R}$ 上的任何可微函数都不可能满足下列函数方程:

$$
g (g (x)) = - x ^ {3} + x + 1; \quad g (g (x)) = - x ^ {3} + x ^ {2} + 1; \quad g (g (x)) = x ^ {2} - 3 x + 3.
$$

16. 设 $f$ 在 $[0,1]$ 上二阶可微, $f(0) = f(1) = 0$ , $\min_{0 \leqslant x \leqslant 1} \{f(x)\} = -1$ , 证明: 存在 $\xi \in (0,1)$ , 使成立 $f''(\xi) \geqslant 8$ 

17. 设 $f$ 在 $[-1, 1]$ 上三阶可微, $f(0) = f'(0) = 0$ , $f(1) = 1$ , $f(-1) = 0$ , 证明: 存在 $\xi \in (-1, 1)$ , 使成立 $f'''(\xi) = 3$ .

18. 设 $f, g$ 在 $[a, b]$ 上连续可微, $f(a) = f(b) = 0$ , Wronski (朗斯基) 行列式

$$
W (f, g) = \left| \begin{array}{c c} f (x) & g (x) \\ f ^ {\prime} (x) & g ^ {\prime} (x) \end{array} \right| \neq 0, \forall x \in [ a, b ],
$$

证明: $g(x)$ 在 $(a,b)$ 中有零点.

## 第二组参考题

1. 设 $f$ 在 $(0, +\infty)$ 上单调减少、可微，且满足不等式 $0 < f(x) < |f'(x)|$ ，证明：当 $0 < x < 1$ 时，成立不等式

$$
x f (x) > \frac {1}{x} f \left(\frac {1}{x}\right).
$$

2. 若 $f(0) = 0$ , 且存在 $f^{(n+1)}(0)$ , 定义

$$
g (x) = \left\{ \begin{array}{l l} \frac {f (x)}{x}, & x \neq 0, \\ f ^ {\prime} (0), & x = 0, \end{array} \right.
$$

证明: $g(x)$ 的 n 阶导函数 $g^{(n)}(x)$ 在 x=0 连续, 且 $g^{(n)}(0)=\frac{1}{n+1}f^{(n+1)}(0)$ .
(例题 8.1.9 的推广.)

3. 设 f 在点 a 存在 $f^{(n)}(a)$ ，且 $f(a)=0$ 。令 $F(x)=[f(x)]^{n}$ ，证明：对于 $k=0,1,\cdots,n-1$ ， $F^{(k)}(a)=0$ 。又举例说明：导数 $f^{(n)}(a)$ 存在的条件不能去掉。

4. 记 $P_{n}(x)=1+\frac{x}{1!}+\frac{x^{2}}{2!}+\cdots+\frac{x^{n}}{n!}, n\in\mathbf{N}_{+}$ ，证明：

(1) $n$ 为偶数时, $P_{n}(x) > 0, \forall x \in \mathbf{R}$ ;

(2) $n$ 为奇数时, $P_{n}(x)$ 有唯一的实零点;

(3) 若将 $P_{2n+1}(x)$ 的零点记为 $x_n, n \in \mathbf{N}_+$ , 则 $\{x_n\}$ 是严格单调减少的负无穷大量;

(4) 当 $x < 0$ 时, 成立不等式 $P_{2n}(x) > \mathrm{e}^x > P_{2n+1}(x)$ ;

(5) 当 $x > 0$ 时, 成立不等式 $\mathrm{e}^x > P_n(x) \geqslant \left(1 + \frac{x}{n}\right)^n$ ;

(6) 对一切 $x \in \mathbf{R}$ , 成立 $\lim_{n \to \infty} P_n(x) = \mathrm{e}^x$ .

5. 定义 $x_0 = a, x_1 = b, x_{n+1} = \frac{(2n-1)x_n + x_{n-1}}{2n}$ , 求 $\lim_{n\to \infty}x_n$ .

6. 设 $0 < x_0 < y_0 \leqslant \frac{\pi}{2}$ , 并用递推公式 $x_{n+1} = \sin x_n$ 和 $y_{n+1} = \sin y_n$ 生成两个数列 $\{x_n\}$ 和 $\{y_n\}$ , 证明: $\lim_{n \to \infty} \frac{x_n}{y_n} = 1$ .

7. 证明: 若函数 $y = \frac{ax^2 + 2bx + c}{\alpha x^2 + 2\beta x + \gamma} (\alpha \neq 0)$ 有三个拐点, 则它们必在一条直线上.

8. 下凸函数的 Jensen 定义是: 称函数 $f$ 在区间 $I$ 上为下凸, 如果对所有 $x_{1}, x_{2} \in I$ , 成立

$$
f \left(\frac {x _ {1} + x _ {2}}{2}\right) \leqslant \frac {1}{2} [ f (x _ {1}) + f (x _ {2}) ].
$$

证明: 对连续函数来说, 下凸的 Jensen 定义和 §8.4 中的下凸定义等价.

(确实存在按 Jensen 定义为下凸但不满足 §8.4 中的下凸定义的函数, 例题 5.1.3 的不连续解就是如此 (参见 [54, 56, 58]).)

9. 设 $f$ 在区间 $(a, b)$ 上按Jensen定义为下凸函数, 且至多只有第一类间断点, 证明: $f$ 在 $(a, b)$ 上连续.

10. 设 $f$ 在区间 $(a, b)$ 上按Jensen定义为下凸函数，且在 $(a, b)$ 内的每个闭子区间上有界，证明： $f$ 在 $(a, b)$ 上连续.

11. 函数 $f$ 在区间 $(-1, 1)$ 上二阶可微, $f(0) = f'(0) = 0$ , 且在该区间上满足不等式 $|f''(x)| \leqslant |f(x)| + |f'(x)|$ , 证明: $f(x) \equiv 0$ .

12. 设 $f(x)$ 为区间 $I$ 上的可微函数, 满足微分方程 $f'(x) = g(f(x))$ , 其中 $g$ 是在 $f$ 的值域上有定义的函数, 证明: $f$ 一定是单调函数.

13. 证明: 在 $(- \infty, + \infty)$ 上二阶可微的函数 $f$ 不可能对于一切 $x$ , 同时满足不等式

$$
f (x) > 0, f ^ {\prime} (x) > 0, f ^ {\prime \prime} (x) <   0.
$$

14. 设 $f$ 在 $\mathbf{R}$ 上三阶可微, 证明: 存在一个点 $a$ 使得

$$
f (a) f ^ {\prime} (a) f ^ {\prime \prime} (a) f ^ {\prime \prime \prime} (a) \geqslant 0.
$$

15. 设 $p(x)$ 是多项式, 证明: 若对每个 $x$ 成立不等式

$$
p ^ {\prime \prime \prime} (x) - p ^ {\prime \prime} (x) - p ^ {\prime} (x) + p (x) \geqslant 0,
$$

则 $p(x) \geqslant 0$ 对每个 x 成立.

16. 设 $P$ 为多项式, $P(x) = 0$ 有 $n$ 个大于 1 的互异实根, 令

$$
Q (x) = \left(x ^ {2} + 1\right) P (x) P ^ {\prime} (x) + x \left[ \left(P (x)\right) ^ {2} + \left(P ^ {\prime} (x)\right) ^ {2} \right],
$$

证明： $Q(x)=0$ 至少有 2n-1 个互异实根.

(下面两个题用于证明在第二章第二组参考题 18 中所用到的结论.)

17. 设 $f(x) = a^x$ ，证明：

(1) 如 $a > \mathrm{e}^{\frac{1}{\mathrm{e}}}$ , 则 $f$ 无不动点;

(2) 如 $a = \mathrm{e}^{\frac{1}{\mathrm{e}}}$ , 则 $f$ 恰有一个不动点;

(3) 如 $1 < a < \mathrm{e}^{\frac{1}{\mathrm{e}}}$ , 则 $f$ 有两个不动点.

18. 设 $g(x) = a^{a^x}$ , 证明:

(1) 如 $\mathrm{e}^{-\mathrm{e}} \leqslant a < 1$ , 则 $g$ 只有一个不动点;

(2) 如 $0 < a < \mathrm{e}^{-\mathrm{e}}$ ，则 $g$ 有三个不动点.

19. 讨论三角方程 $a \sin \theta + b \cos \theta - \sin \theta \cos \theta = 0$ 在 $[0, 2\pi)$ 中的实根个数.

20. 从平面上的一个定点向一个给定的椭圆可以引出多少条法线？讨论在什么区域上法线的条数最多。（参见后面412页上关于本题所附的图1和图2）

(本题以及类似的问题最早是由 Apollonius (阿波罗尼奥斯, 约公元前 262—前 190 年) 提出和解决的. 又见于《数学译林》(1992) 第 4 期, 即 V. I. Arnold 给出的《构成对物理专业学生的最低限度的数学的一百个问题》中的第 7 题.)
