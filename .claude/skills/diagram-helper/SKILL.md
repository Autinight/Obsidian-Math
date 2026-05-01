---
name: diagram-helper
description: Create LaTeX and TikZ diagrams in Obsidian using TikZJax plugin. Use when the user wants to create graphs, figures, circuits, chemical diagrams, commutative diagrams, or any TikZ/LaTeX visualizations in their Obsidian notes.
---
# TikZJax Skill

Render LaTeX and TikZ diagrams directly in Obsidian notes using the TikZJax plugin. Create mathematical graphs, circuit diagrams, chemical structures, commutative diagrams, and more.

## Workflow: Creating a TikZ Diagram

1. **Create a `tikz` code block** in the note
2. **Load required packages** with `\usepackage{package-name}`
3. **Wrap content** in `\begin{document}...\end{document}`
4. **Write TikZ code** using the appropriate environment (`tikzpicture`, `circuitikz`, `tikzcd`, etc.)
5. **Verify** the diagram renders correctly in Obsidian's reading view

> The `standalone` document class is used automatically (`\documentclass{standalone}`), so you don't need to declare it.

## Available Packages

The following packages can be loaded with `\usepackage{}`:

- `tikz-cd` — Commutative diagrams
- `circuitikz` — Circuit diagrams
- `chemfig` — Chemical structures
- `pgfplots` — 2D and 3D plots
- `tikz-3dplot` — 3D plotting extensions
- `array` — Enhanced array and tabular environments
- `amsmath`, `amstext`, `amsfonts`, `amssymb` — AMS math packages

## Basic Syntax

````markdown
```tikz
\usepackage{package-name}
\begin{document}
  \begin{tikzpicture}
    % Your TikZ code here
  \end{tikzpicture}
\end{document}
markdown

## Examples

### Mathematical Function Plot

````markdown
```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```
Circuit Diagram
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american, voltage shift=0.5]
\draw (0,0)
to[isource, l=$I_0$, v=$V_0$] (0,3)
to[short, -*, i=$I_0$] (2,3)
to[R=$R_1$, i>_=$i_1$] (2,0) -- (0,0);
\draw (2,3) -- (4,3)
to[R=$R_2$, i>_=$i_2$]
(4,0) to[short, -*] (2,0);
\end{circuitikz}
\end{document}
```
markdown
3D Surface Plot
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[colormap/viridis]
\addplot3[
	surf,
	samples=18,
	domain=-3:3
]
{exp(-x^2-y^2)*x};
\end{axis}
\end{tikzpicture}
\end{document}
```
markdown
Commutative Diagram
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
    T
    \arrow[drr, bend left, "x"]
    \arrow[ddr, bend right, "y"]
    \arrow[dr, dotted, "{(x,y)}" description] & & \\
    K & X \times_Z Y \arrow[r, "p"] \arrow[d, "q"]
    & X \arrow[d, "f"] \\
    & Y \arrow[r, "g"]
    & Z
\end{tikzcd}
\end{document}
```
markdown
Chemical Structure
```tikz
\usepackage{chemfig}
\begin{document}
\chemfig{[:-90]HN(-[::-45](-[::-45]R)=[::+45]O)>[::+45]*4(-(=O)-N*5(-(<:(=[::-60]O)-[::+60]OH)-(<[::+0])(<:[::-108])-S>)--)}
\end{document}
```
markdown
Complex Chemical Diagram
```tikz
\usepackage{chemfig}
\begin{document}
\definesubmol\fragment1{
    (-[:#1,0.85,,,draw=none]
    -[::126]-[::-54](=_#(2pt,2pt)[::180])
    -[::-70](-[::-56.2,1.07]=^#(2pt,2pt)[::180,1.07])
    -[::110,0.6](-[::-148,0.60](=^[::180,0.35])-[::-18,1.1])
    -[::50,1.1](-[::18,0.60]=_[::180,0.35])
    -[::50,0.6]
    -[::110])
    }
\chemfig{
!\fragment{18}
!\fragment{90}
!\fragment{162}
!\fragment{234}
!\fragment{306}
}
\end{document}
```
markdown
Common TikZ Elements
Coordinates and Paths
\draw (0,0) -- (1,1);              % Line from (0,0) to (1,1)
\draw (0,0) circle (1cm);          % Circle with radius 1cm
\draw (0,0) rectangle (2,1);       % Rectangle
\draw (0,0) arc (0:90:1cm);        % Arc
latex
Styling
\draw[red, thick] (0,0) -- (1,1);           % Red thick line
\draw[dashed, blue] (0,0) circle (1cm);     % Blue dashed circle
\draw[->] (0,0) -- (1,1);                   % Arrow
\draw[->, >=stealth] (0,0) -- (1,1);        % Arrow with stealth tip
latex
Nodes and Labels
\node at (0,0) {Text};                      % Node with text
\node[circle, draw] at (1,1) {A};           % Circled node
\draw (0,0) -- (1,1) node[right] {label};   % Line with label
latex
Tips
Always include \begin{document} and \end{document}
Load packages at the top with \usepackage{}
Use % for comments in LaTeX code
For complex diagrams, break code into logical sections with comments
Test simple versions first, then add complexity
Refer to TikZ/PGF manual for advanced features
References
TikZ & PGF Manual
CircuiTikZ Manual
Chemfig Manual
PGFPlots Manual
TikZ-CD Manual