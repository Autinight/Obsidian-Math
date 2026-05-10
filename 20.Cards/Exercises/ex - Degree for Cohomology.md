---
type: exercise
aliases:
  - Degree for Cohomology
technique: []
book: AT Hatcher
chapter: 3.1
number: "09"
category:
status: done
priority:
tags: []
---
> [!exercise] EXERCISE 3.1.9.
> Show that if $f : S^n \to S^n$ has degree $d$ then $f^* : H^n(S^n; G) \to H^n(S^n; G)$ is multiplication by $d$.



$$ 0\to \operatorname{Ext}\left(H_{n-1}\left(S^{n};G\right)\right)\to H^{n}\left(S^{n};G\right) \xrightarrow{h}  \operatorname{Hom}\left(H_{n}\left(S^{n}\right);G\right)\to 0$$ 
Since $H_{n-1}\left(S^{n};G\right)$
Thus
$$ \operatorname{Hom}\left(H_{n}\left(S^{n}\right);G\right)\simeq H^{n}\left(S^{n};G\right) $$ 
并且由上面段正合列的自然性, 这个同构是自然的.

若
$$ f_{*}: H_{n}\left(S^{n}\right)\to H_{n}\left(S^{n}\right) $$ 
$f_{*}= \times d$, 则
$$ \operatorname{Hom}_{G}\left(f\right): \operatorname{Hom}\left(H_{n}\left(S^{n}\right);G\right)\to \operatorname{Hom}\left(H_{n}\left(S^{n}\right);G\right),\quad \times d $$ 





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
