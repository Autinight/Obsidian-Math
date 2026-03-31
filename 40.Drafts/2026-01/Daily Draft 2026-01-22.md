### 17:14

 $$ \frac{1 }{\nu \left(r\right) } \int _{B\left(x,r\right)}\left| u\left(y\right)-u\left(x\right) \right|\le  C\int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y  $$ 

  $$ \begin{aligned} \left| u\left(x+ sw\right) -u\left(x\right)\right|&\le \int_{0}^{s}  \left| Du\left(x+ tw\right) \right|\,\mathrm{d} t   \end{aligned} $$

   $$ \begin{aligned} \int _{\partial B\left(0,1\right)} \left| u\left(x+ sw\right)-u\left(x\right) \right|\,\mathrm{d} S\left(w\right)&\le \int _{0}^{s}\int _{\partial B\left(0,1\right)}\left| Du\left(x+ tw\right) \right|\,\mathrm{d} t\\&= \int _{0}^{s}\int _{\partial B\left(x,t\right)}\frac{\left| Du\left(y\right) \right|  }{t^{n-1} } dS\left(y\right)\,\mathrm{d} t\\&\le \int _{B\left(x,s\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\\&\le \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y\end{aligned} $$

 $$ \begin{aligned} \int _{\partial B\left(0,1\right)}\left| u\left(x+ sw\right)-u\left(x\right) \right|  \,\mathrm{d} S\left(w\right)&= \int _{\partial B\left(0,s\right)}\frac{\left| u\left(x+ z\right)-u\left(x\right) \right| }{s^{n-1} }\,\mathrm{d} S\left(z\right) \end{aligned} $$

 Thus
  $$ \begin{aligned} \int _{\partial B\left(x,s\right)}\left| u\left(z\right)-u\left(x\right) \right|\,\mathrm{d} S\left(z\right)\le s^{n-1} \int _{B\left(x,r\right)}\frac{\left| Du\left(y\right) \right|  }{\left| y-x \right|^{n-1}  }\,\mathrm{d} y  \end{aligned} $$

用$\left| Du \right|$相关取控制$B\left(x,s\right)$球壳上的, 球壳$B\left(x,s\right)$用$B\left(0,1\right)$的参数化转换

$\left| u\left(x+ sw\right)-u\left(x\right) \right|$对应$\left| D\left(x+ tw\right) \right|$从$t$积分到$s$, $\left| D\left(x+ tw\right) \right|$在$\partial B\left(0,1\right)$上的积分转化成$\left| Du \right|$$\partial B\left(x,s\right)$上的积分

