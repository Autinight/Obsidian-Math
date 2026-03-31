
代靖涵 25120222201319

> [!exercise] Exercise: 
> 设$\mathscr{K}\left(x\right)\in L\left(\mathbb{R} \right)$, $\int _{\mathbb{R} ^{1}}\mathscr{K}\left(x\right)\,d x= 1$, 并且当$\left| x \right|\to \infty$时, $\mathscr{K}\left(x\right)= o\left(\left| x \right|^{-1}  \right)$.若$f\in L^{1}\left(\mathbb{R} ^{1}\right)$, 试证明: 在$f$的每个连续点$x_0$处, 有
>  $$ \lim_{\varepsilon \to 0}\left(f*\mathscr{K}_{\varepsilon }\right)\left(x_0\right)= f\left(x_0\right) $$ 
> 成立, 其中$\mathscr{K}_{\varepsilon }\left(x\right)= \varepsilon ^{-1} \mathscr{K}\left(\frac{x}{\varepsilon }\right),\varepsilon > 0$.

> [!proof] Proof: 
> 我们考虑估计
>  $$ \begin{aligned} f*\mathscr{K}_{\varepsilon }\left(x_0\right)-f\left(x_0\right)&= \int _{\mathbb{R} }\left(f\left(x_0-y\right)-f\left(x_0\right)\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y\end{aligned}$$ 
> **连续性控制近端**:
> 任取$\mu > 0$, 存在$\delta > 0$, 使得 对于任意的$\left| y \right|< \delta$, 都有
>  $$ \left| f\left(x_0-y\right)-f\left(x_0\right) \right|< \frac{\mu  }{3\left\| \mathscr{K} \right\|_{L^{1}} }  $$ 
> 则 
>  $$ \begin{aligned} \int _{-\delta }^{\delta }\left| f\left(x_0-y\right)-f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y&\le \frac{\mu  }{3\left\| \mathscr{K} \right\|_{L^{1}} } \int _{-\delta }^{\delta }\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|dy\\&= \frac{\mu  }{3\left\| \mathscr{K} \right\|_{L^{1}} } \int _{-\frac{\delta  }{\varepsilon  }}^{\frac{\delta  }{\varepsilon  }} \left| \mathscr{K}\left(y\right) \right|\,d y\\&\le \frac{\mu  }{3 } \end{aligned}  $$ 
> **无穷小阶数抵消尺度变换, 控制远端第一项**: 
>  注意到
>  $$ \int _{\left| y \right|\ge \delta  }f\left(x_0-y\right)\mathscr{K}_{\varepsilon }\left(y\right)\,d y= \int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }f\left(x_0-\varepsilon y\right)\mathscr{K}\left(y\right)\,d y $$
> 由于$\mathscr{K}\left(x\right)= o\left(\left| x \right|^{-1}  \right)$, 对于任意的$\rho> 0$, 存在$N$, 使得只要$\left| y \right|> N$, 就有$\left| \mathscr{K}\left(y\right) \right|\le \frac{\rho  }{\left| y \right|  }$
> 那么当$\varepsilon < \frac{\delta  }{N }$时, 就有
>  $$ \begin{aligned} \int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\left| f\left(x_0-\varepsilon y\right) \right|\left| \mathscr{K}\left(y\right) \right|\le \int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\left| f\left(x_0-\varepsilon y\right) \right|\frac{\rho  }{\left| y \right|  }\,d y&\le \frac{\varepsilon \rho  }{\delta  }\int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\left| f\left(x_0-\varepsilon y\right) \right|\\&= \frac{\rho  }{\delta  }\int _{\left| y \right|\ge \delta  }\left| f\left(x_0-y\right) \right|\,d y\\&\le \frac{\rho  }{\delta  }\left\| f \right\|_{L^{1}} \end{aligned}     $$
>
> 
> 特别地, 我们取 $\rho = \frac{\delta \mu  }{3\left\| f \right\|_{L^{1}} }$, 则
>  $$ \int _{\left| y \right|\ge \delta  }\left| f\left(x_0-y\right)\mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y< \frac{\mu  }{3 }  $$ 
> **可积函数尾部积分消失,  控制远端第二项**: 
> 接下来, 由于$\mathscr{K}\in L^{1}$, 我们有
>  $$ \begin{aligned} \lim_{\varepsilon \to 0}\int _{\left| y \right|\ge \delta  }\left| f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y&= \lim_{\varepsilon \to 0}\int _{\left| y \right|\ge \frac{\delta  }{\varepsilon  } }\left| f\left(x_0\right) \right| \left| \mathscr{K}\left(y\right) \right|\,d y\\&=\left| f\left(x_0\right) \right|  \lim_{k\to \infty}\int _{\left| y \right|\ge k}\left| \mathscr{K}\left(y\right) \right|\,d y\\&= 0  \end{aligned}    $$ 
> 故当$\varepsilon$充分小时, 
>  $$ \int _{\left| y \right|\ge \delta  }\left| f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y< \frac{\mu  }{3 }   $$ 
> 最终我们得到, 当$\varepsilon$ 充分小时 ,
>  $$ \begin{aligned} \left| f*\mathscr{K}_{\varepsilon }\left(x_0\right)-f\left(x_0\right) \right|&\le \int _{-\delta }^{\delta }\left| f\left(x_0-y\right)-f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right| + \int _{\left| y \right|\ge \delta  }\left| f\left(x_0-y\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y\\&+   \int _{\left| y \right|\ge \delta  }\left| f\left(x_0\right) \right|\left| \mathscr{K}_{\varepsilon }\left(y\right) \right|\,d y\\&< \frac{\mu  }{3 }+ \frac{\mu  }{3 }+ \frac{\mu  }{3 }\\&= \mu      \end{aligned} $$ 
> 因此
>  $$ \lim_{\varepsilon \to 0} f*\mathscr{K}_{\varepsilon }\left(x_0\right)= f\left(x_0\right)  $$ 
> 