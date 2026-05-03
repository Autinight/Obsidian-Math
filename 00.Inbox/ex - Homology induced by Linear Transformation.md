---
type: exercise
aliases:
  - Homology induced by Linear Transformation
technique: []
book: AT Hatcher
chapter: 2.2
number: "07"
category:
status: todo
priority:
tags: []
---
> [!exercise] EXERCISE 2.2.7.
> For an invertible linear transformation $f : \mathbb{R}^n \to \mathbb{R}^n$ show that the induced map on $H_n(\mathbb{R}^n, \mathbb{R}^n - \{0\}) \approx \tilde{H}_{n-1}(\mathbb{R}^n - \{0\}) \approx \mathbb{Z}$ is $\mathbb{1}$ or $-\mathbb{1}$ according to whether the determinant of $f$ is positive or negative. [Use Gaussian elimination to show that the matrix of $f$ can be joined by a path of invertible matrices to a diagonal matrix with $\pm 1$'s on the diagonal.]

$f$ is a linear transformation, with

$f$ 诱导的群同态是什么样的?

从
$$ 0\to C_{n}\left(\mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right) \to C_{n}\left(\mathbb{R} ^{n}\right)\to C_{n}\left(\mathbb{R} ^{n} , \mathbb{R} ^{n}\setminus \left\{ 0 \right\}\right)\to 0$$ 

导出

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
