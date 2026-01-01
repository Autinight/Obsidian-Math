
From [[pps - Root's Additivity(Subtractibility) when strictly Obtuse(Acute)]], the reflection $s_\alpha$ and the table [[lem - Finiteness Lemma  and the Classification of Cartan integers]], we shall find all root systems $R$ contained in $\mathbb{R} ^{2}$, 

### Type $A_2$

$\theta= \frac{2\pi}{3}$, 

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzpicture}[>=latex, thick, scale=1.8]
  % 定义原点
  \coordinate (O) at (0,0);
  
  % 绘制六个向量
  % 0度: alpha
  \draw[->] (O) -- (0:1.5) node[above] {$\alpha$};
  
  % 60度: alpha + beta
  \draw[->] (O) -- (60:1.5) node[right] {$\alpha+\beta$};
  
  % 120度: beta
  \draw[->] (O) -- (120:1.5) node[left] {$\beta$};
  
  % 180度: -alpha
  \draw[->] (O) -- (180:1.5) node[above] {$-\alpha$};
  
  % 240度: -alpha - beta
  \draw[->] (O) -- (240:1.5) node[left] {$-\alpha-\beta$};
  
  % 300度: beta (注意：数学上这里通常是 -beta，但此处还原图片中的 beta)
  \draw[->] (O) -- (300:1.5) node[right] {$\beta$};

\end{tikzpicture}
\end{document}
```
### Type $B_2$

$\theta= \frac{3\pi}{4}$,

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[>=latex, thick, scale=1.5]
    % 坐标定义：假设 alpha=(1,0), alpha+beta=(0,1)
    % 从而 beta=(-1,1), 2alpha+beta=(1,1)
    
    % 水平轴
    \draw[->] (0,0) -- (2,0) node[above] {$\alpha$};
    \draw[->] (0,0) -- (-2,0) node[above] {$-\alpha$};

    % 垂直轴
    \draw[->] (0,0) -- (0,2) node[right] {$\alpha+\beta$};
    \draw[->] (0,0) -- (0,-2) node[right] {$-\alpha-\beta$};

    % 对角线 (右上)
    \draw[->] (0,0) -- (2,2) node[right] {$2\alpha+\beta$};
    
    % 对角线 (左上)
    \draw[->] (0,0) -- (-2,2) node[right] {$\beta$};
    
    % 对角线 (左下)
    \draw[->] (0,0) -- (-2,-2) node[right] {$-2\alpha-\beta$};
    
    % 对角线 (右下)
    \draw[->] (0,0) -- (2,-2) node[right] {$-\beta.$};

\end{tikzpicture}
\end{document}
```
### Type $G_2$

$\theta= \frac{5\pi}{6}$
```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[>=latex, thick, scale=1.5]
    % 定义比例：短根长度为 1，长根长度为 sqrt(3) ≈ 1.732
    \def\shortlen{1.2}
    \def\longlen{2.08} % 1.2 * 1.732

    % 绘制 6 个短根 (每 60 度一个)
    \foreach \ang in {0, 60, 120, 180, 240, 300} {
        \draw[->] (0,0) -- (\ang:\shortlen);
    }

    % 绘制 6 个长根 (每 60 度一个，从 30 度开始)
    \foreach \ang in {30, 90, 150, 210, 270, 330} {
        \draw[->] (0,0) -- (\ang:\longlen);
    }

    % 添加标签
    % \alpha 在 0 度的短根上
    \node[above] at (0:\shortlen) {$\alpha$};
    
    % \beta 在 150 度的长根上
    \node[above right] at (150:\longlen) {$\beta$};

\end{tikzpicture}
\end{document}
```
### Type $A_1\times A_1$

$\beta$ is perpendicular to $\alpha$.

```tikz
\begin{document}
\begin{tikzpicture}[>=latex, thick]
    % 横轴
    \draw[<->] (-2.5, 0) -- (2.5, 0);
    % 纵轴
    \draw[<->] (0, -1.5) -- (0, 1.5);
  
    % 标签
    \node[above] at (0, 1.5) {$\alpha$};
    \node[right] at (2.5, 0) {$\beta$};
    \node[below right] at (0, -1.5) {$-\alpha$};
    \node[above left] at (-2.5, 0) {$-\beta$};
\end{tikzpicture}
\end{document}
```