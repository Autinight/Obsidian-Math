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