---
type: concept
aliases: 
- note- 导数的系谱图
technique: []
---
$$ \text{导数 } DF \begin{cases} \text{反对称部分 } \Omega \implies \text{旋转 (Curl)} \implies \text{体积不变} \\ \text{对称部分 } S \begin{cases} \text{无迹部分 } S_0 \implies \text{剪切 (Shear)} \implies \text{体积不变} \\ \text{迹部分 } \frac{\text{div} F}{n} I \implies \textbf{膨胀 (Divergence)} \implies \textbf{体积改变} \end{cases} \end{cases} $$


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

