---
type: exercise
aliases:
  - Homology induced by Linear Transformation
technique: []
book: AT Hatcher
chapter: 2.2
number: "07"
category:
status: done 
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.7.
> For an invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ show that the induced map on $H_n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \approx \tilde{H}_{n-1}(\mathbb{R}^n - \{0\}) \approx \mathbb{Z}$ is $\mathbb{1}$ or $-\mathbb{1}$ according to whether the determinant of $f$ is positive or negative. [Use Gaussian elimination to show that the matrix of $f$ can be joined by a path of invertible matrices to a diagonal matrix with $\pm 1$'s on the diagonal.]




$f$ 在$\mathbb{R} ^{n}\setminus \left\{ 0 \right\}$

$A$通过加加减减可以连续地变到单位$I$, 那么 $f$同伦于$I$, 我们有
$$ f_{*}= I_{*} $$

$f: \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\to \mathbb{R} ^{n}\setminus \left\{ 0 \right\}$

$$ f= f^{-1} I $$ 

$$ f_{*}: H_{n}\left(\mathbb{R} ^{n}\right)\to H_{n}\left(\mathbb{R} ^{n}\right) $$ 

有没有角度直接看出来
$$ H_{n}\left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) \simeq H_{n}\left(D^{n}, S^{n}\right)$$ 

从
$$ 0\to C_{n}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) \to C_{n}\left(\mathbb{R} ^{n}\right)\to C_{n}\left(\mathbb{R} ^{n} , \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to 0$$ 

导出
$$ \cdots \to H_{n}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to H_{n}\left(\mathbb{R} ^{n}\right)\to H_{n} \left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to H_{n-1}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to \cdots $$ 

$$ H_{k}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)= H_{k}\left(S^{n-1}\right) $$ 

于是
$$ H_{k}\left(S^{n-1}\right)\to 0\to H_{k}\left(\mathbb{R} ^{n}, \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) \to H_{k-1}\left(S^{n-1}\right)\to 0\to $$ 

Thus
$$ H_{k}\left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) \simeq H_{k-1}\left(S^{2}\right)$$ 

$$ \mathbb{R} ^{n}= \left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\cup D^{n} $$ 

$$ H\left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) = H\left(D^{n}, D^{n}\setminus \left\{ 0 \right\}\right)$$ 


$$ H_{n}\left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)= \frac{Z_{n}\left(\mathbb{R} ^{n}, \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) }{ B_{n}\left(\mathbb{R} ^{n},\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)} $$ 

$$ Z_{n}\left(\mathbb{R} ^{n}, \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) = \operatorname{ker}\left(C_{n}\left(\mathbb{R} ^{n}\right)/C_{n}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to C_{n-1}\left(\mathbb{R} ^{n}\right)/C_{n-1}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\right)$$ 

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
