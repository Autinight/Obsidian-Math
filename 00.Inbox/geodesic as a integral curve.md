---
type: concept
aliases:
- geodesic as a integral curve
technique: []
tags: []
---

考虑$TM$上的坐标$\left(x^{1},\cdots ,x^{n},v^{1},\cdots ,v^{n}\right)$

把测地线方程写作

$$ \begin{cases} \dot{x}^{k}= v^{k}\\ \dot{v}^{k}= -\Gamma _{ij}^{k}v^{i}v^{j} \end{cases}  $$ 

则测地线方程式
$$ X= v^{k}\frac{\partial }{\partial x^{k}}-\Gamma _{ij}^{k}v^{i}v^{j}\frac{\partial }{\partial v^{k}} $$ 

由flow的基本定理,  测地线有局部的存在唯一性.
把测地线看成流有没有什么别的好处.

```dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                return p.aliases && dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
```
